import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { concepts } from "../../../flow-library/study-map/src/graph.js";
import { constellationLayout } from "../../../flow-library/study-map/src/graph/three/layout.js";
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME || ".browser-cache/chromium-1243/chrome-linux64/chrome",
  args: ["--enable-unsafe-swiftshader"],
});
const errors = [];
async function ready(page, mobile = false) {
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto((process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1");
  await page.locator(".bank-card").first().waitFor();
  await (
    mobile
      ? page.getByRole("button", { name: "Map", exact: true })
      : page
          .locator(".topbar nav")
          .getByRole("button", { name: "Knowledge map", exact: true })
  ).click();
  await page.locator(".stellar-map canvas").waitFor();
  await page.waitForTimeout(1000);
}
const p = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await ready(p);
const map = p.locator(".stellar-map");
assert.equal(await p.locator("[data-node]").count(), 155);
assert.equal(
  await p.locator(".inspector").count(),
  0,
  "No inspector obscures the map",
);
const box = await map.boundingBox();
assert(
  box.width >= 1400 && box.height >= 850,
  "Map fills available desktop space",
);
await p.screenshot({ path: "artifacts/stellar-network-desktop.png" });
await p
  .getByRole("button", { name: "Search and map controls", exact: true })
  .click();
assert.equal(await p.locator(".map-settings-screen").count(), 1);
await p.screenshot({ path: "artifacts/stellar-controls-desktop.png" });
await p
  .locator(".topic-destinations")
  .getByRole("button", { name: /Linear operators/ })
  .click();
await p.waitForTimeout(1000);
const distance = Number(await map.getAttribute("data-distance"));
await p.locator('[data-name="Hermitian Adjoint"]').click();
await p.waitForTimeout(1000);
assert.equal(
  await p
    .locator('[data-name="Hermitian Adjoint"]')
    .getAttribute("aria-pressed"),
  "true",
);
assert(
  Number(await map.getAttribute("data-distance")) < distance,
  "Click flies closer to the star",
);
await p
  .getByRole("button", { name: "Selected concept details", exact: true })
  .click();
assert.equal(
  await p.locator(".map-note-panel .concept-note h2").innerText(),
  "Hermitian Adjoint",
);
const focusedTarget = JSON.parse(await map.getAttribute("data-target"));
const expectedTarget =
  constellationLayout(concepts).positions["Hermitian Adjoint"];
assert(
  Math.hypot(
    ...focusedTarget.map(
      (v, i) => v - [expectedTarget.x, expectedTarget.y, expectedTarget.z][i],
    ),
  ) < 1,
  "Flight ends at the selected star",
);
const parkedCamera = await map.getAttribute("data-camera");
await p.getByRole("button", { name: "3D map screen", exact: true }).click();
assert.equal(
  await map.getAttribute("data-camera"),
  parkedCamera,
  "GUI navigation preserves the camera",
);

await p
  .getByRole("button", { name: "Search and map controls", exact: true })
  .click();
await p
  .getByRole("textbox", { name: "Search concepts", exact: true })
  .fill("dagger");
await p.locator(".star-search-results button").first().click();
await p.waitForTimeout(1000);
assert.equal(
  await p.locator(".stellar-workspace").getAttribute("data-screen"),
  "map",
);
assert.equal(
  await p.locator('[data-name="Dagger Symbol"]').getAttribute("aria-pressed"),
  "true",
);
await p.screenshot({ path: "artifacts/stellar-network-close.png" });
const phone = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
await ready(phone, true);
assert.equal(
  await phone.locator(".stellar-workspace").getAttribute("data-screen"),
  "inline",
);
assert.equal(
  await phone.locator(".mobile-stellar-content .concept-note").count(),
  1,
);
await phone.locator(".inline-map-tools > summary").click();
await phone.screenshot({ path: "artifacts/stellar-controls-mobile.png" });
await phone.locator(".stellar-map").scrollIntoViewIfNeeded();

const m = phone.locator(".stellar-map");
const cdp = await phone.context().newCDPSession(phone);
const touch = (type, points) =>
  cdp.send("Input.dispatchTouchEvent", {
    type,
    touchPoints: points.map(([x, y, id]) => ({
      x,
      y,
      id,
      radiusX: 3,
      radiusY: 3,
    })),
  });
const camera = () => m.getAttribute("data-camera"),
  target = async () => JSON.parse(await m.getAttribute("data-target")),
  dist = async () => Number(await m.getAttribute("data-distance"));
// Start on an actual selectable star, not only on the background canvas.
await phone
  .locator(".topic-destinations")
  .getByRole("button", { name: /Vectors & spaces/ })
  .click();
await phone.waitForTimeout(1000);
const star = phone.locator('[data-name="Vector Space"]');
const sb = await star.boundingBox();
const mb = await m.boundingBox();
let x = Math.max(
    mb.x + 40,
    Math.min(mb.x + mb.width - 120, sb.x + sb.width / 2),
  ),
  y = Math.max(
    mb.y + 80,
    Math.min(mb.y + mb.height - 100, sb.y + sb.height / 2),
  );
const selected = await phone
  .locator("[data-node][aria-pressed=true]")
  .getAttribute("data-name");
const c0 = await camera();
await touch("touchStart", [[x, y, 1]]);
await touch("touchMove", [[x + 60, y + 20, 1]]);
await touch("touchEnd", []);
await phone.waitForTimeout(700);
assert.notEqual(await camera(), c0, "One-finger orbit");
assert.equal(
  await phone
    .locator("[data-node][aria-pressed=true]")
    .getAttribute("data-name"),
  selected,
  "Dragging must not select a star",
);
const d0 = await dist();
await touch("touchStart", [
  [x, y, 1],
  [x + 80, y, 2],
]);
await touch("touchMove", [
  [x - 20, y, 1],
  [x + 100, y, 2],
]);
await touch("touchEnd", []);
await phone.waitForTimeout(800);
assert((await dist()) < d0 * 0.9, "Pinch spreads fingers and zooms in");
const t0 = await target(),
  d1 = await dist();
await touch("touchStart", [
  [x, y, 1],
  [x + 80, y, 2],
]);
await touch("touchMove", [
  [x + 25, y + 40, 1],
  [x + 105, y + 40, 2],
]);
await touch("touchEnd", []);
await phone.waitForTimeout(800);
const t1 = await target();
assert(
  Math.hypot(...t1.map((v, i) => v - t0[i])) > 10,
  "Two fingers together pan the camera target",
);
assert(Math.abs((await dist()) - d1) < d1 * 0.03, "Pan keeps zoom distance");
for (const width of [320, 360, 390, 430, 768]) {
  await phone.setViewportSize({ width, height: 844 });
  assert.equal(
    await phone.evaluate(() => document.documentElement.scrollWidth),
    width,
    `Map overflow at ${width}`,
  );
  if (width <= 760) {
    await phone.locator(".inline-map-tools").waitFor();
    assert.equal(await phone.locator(".mobile-stellar-heading").count(), 1);
    const heading = await phone
      .locator(".mobile-stellar-heading")
      .boundingBox();
    const graph = await phone.locator(".stellar-map").boundingBox();
    const content = await phone
      .locator(".mobile-stellar-content")
      .boundingBox();
    assert(
      heading.y < graph.y && graph.y < content.y,
      "Mobile heading → map → content",
    );
  } else {
    await phone
      .getByRole("button", { name: "Search and map controls", exact: true })
      .click();
    await phone
      .getByRole("button", { name: "3D map screen", exact: true })
      .click();
  }
  assert.equal(
    await phone.evaluate(() => document.documentElement.scrollWidth),
    width,
    `Content overflow at ${width}`,
  );
}
await phone.setViewportSize({ width: 390, height: 844 });
await phone.waitForTimeout(500);
await phone.locator(".stellar-map").scrollIntoViewIfNeeded();
await phone.screenshot({ path: "artifacts/stellar-network-mobile.png" });
assert.deepEqual(errors, []);
await browser.close();
console.log(
  "PASS: immersive desktop/mobile 3D map, inline mobile notes, star flight and search, orbit, pinch, two-finger pan, drag protection and no overflow at 320–768px.",
);
