import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { concepts, byName } from "../../../flow-library/study-map/src/graph.js";
import { starEncoding } from "../../../flow-library/study-map/src/graph/three/encoding.js";
import { constellationLayout } from "../../../flow-library/study-map/src/graph/three/layout.js";
const enc = concepts.map((c) => ({ c, e: starEncoding(c) }));
for (const { c, e } of enc) {
  assert(e.radius >= 8 && e.radius <= 22);
  assert.equal(e.color, starEncoding(c).color);
  assert.equal(e.questionCount, new Set(c.usedIn).size);
  for (const next of enc) {
    if (c.depth < next.c.depth)
      assert(e.radius < next.e.radius, "Higher depth has a larger star");
    if (e.questionCount < next.e.questionCount)
      assert(
        e.glowOpacity < next.e.glowOpacity,
        "Higher exam use has a brighter halo",
      );
  }
}
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME || ".browser-cache/chromium-1243/chrome-linux64/chrome",
  args: ["--enable-unsafe-swiftshader"],
});
const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.on("pageerror", (e) => errors.push(e.message));
await page.goto((process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1");
await page
  .locator(".topbar nav")
  .getByRole("button", { name: "Knowledge map", exact: true })
  .click();
const map = page.locator(".stellar-map");
await map.locator("canvas").waitFor();
await page.waitForTimeout(1000);
assert.equal(await page.locator(".graph-controls").count(), 0, "No camera HUD");
await page
  .getByRole("button", { name: "Search and map controls", exact: true })
  .click();
await page
  .locator(".topic-destinations")
  .getByRole("button", { name: /Linear operators/ })
  .click();
await page.waitForTimeout(1000);
assert.equal(
  await page.locator("[data-path]").count(),
  0,
  "Overview/topic view has no clickable paths",
);
await page.locator('[data-name="Hermitian Adjoint"]').click();
await page.waitForTimeout(1100);
const edge = page.locator(
  '[data-path][data-from="Hermitian Adjoint"][data-to="Hermitian Operator"]',
);
await edge.waitFor();
// Pick an uncovered point on the actual projected path, then perform a real mouse tap.
const point = await edge.evaluate((el) => {
  const svg = el.ownerSVGElement,
    rect = svg.getBoundingClientRect(),
    length = el.getTotalLength();
  for (const t of [0.5, 0.35, 0.7, 0.2, 0.8]) {
    const p = el.getPointAtLength(length * t),
      x = rect.x + p.x,
      y = rect.y + p.y;
    if (document.elementFromPoint(x, y) === el) return { x, y };
  }
});
assert(point, "A path must be tappable without a star stealing its click");
await page.mouse.click(point.x, point.y);
await page.waitForTimeout(300);
assert.equal(
  await map.getAttribute("data-flying"),
  "true",
  "Path travel animates",
);
await page.waitForTimeout(1700);
assert.equal(
  await page
    .locator('[data-name="Hermitian Operator"]')
    .getAttribute("aria-pressed"),
  "true",
);
const p = constellationLayout(concepts).positions["Hermitian Operator"];
const target = JSON.parse(await map.getAttribute("data-target"));
assert(
  Math.hypot(...target.map((v, i) => v - [p.x, p.y, p.z][i])) < 1,
  "Flight follows the path to its destination",
);
await page
  .getByRole("button", { name: "Selected concept details", exact: true })
  .click();
assert(
  (await page.locator(".path-explanation").innerText()).includes(
    "Hermitian Adjoint is a prerequisite for Hermitian Operator",
  ),
);
await page.screenshot({ path: "artifacts/clickable-path-desktop.png" });
const phone = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
phone.on("pageerror", (e) => errors.push(e.message));
await phone.goto((process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1");
await phone.getByRole("button", { name: "Map", exact: true }).click();
await phone.locator(".stellar-map canvas").waitFor();
await phone.waitForTimeout(1100);
assert.equal(await phone.locator(".graph-controls").count(), 0);
assert.equal(
  await phone.locator(".map-screen-nav").count(),
  0,
  "Mobile content is inline",
);
await phone.screenshot({ path: "artifacts/mobile-heading-map-content.png" });
// A keyboard path selection is also available; it updates the inline note.
const touchPoint = await phone.locator(".stellar-paths").evaluate((svg) => {
  const rect = svg.getBoundingClientRect();
  for (const el of svg.querySelectorAll('[data-from="Vector Space"]')) {
    const length = el.getTotalLength();
    for (let t = 0.1; t < 0.91; t += 0.08) {
      const p = el.getPointAtLength(length * t),
        x = rect.x + p.x,
        y = rect.y + p.y;
      if (
        x > rect.left + 5 &&
        x < rect.right - 5 &&
        y > rect.top + 5 &&
        y < rect.bottom - 5 &&
        document.elementFromPoint(x, y) === el
      )
        return { x, y, destination: el.dataset.to };
    }
  }
});
assert(touchPoint, "Mobile path has a reachable touch target");
const cdp = await phone.context().newCDPSession(phone);
await cdp.send("Input.dispatchTouchEvent", {
  type: "touchStart",
  touchPoints: [
    { x: touchPoint.x, y: touchPoint.y, id: 1, radiusX: 3, radiusY: 3 },
  ],
});
await cdp.send("Input.dispatchTouchEvent", {
  type: "touchEnd",
  touchPoints: [],
});
await phone.waitForTimeout(1700);
assert.equal(
  await phone.locator(".mobile-stellar-content .concept-note h2").innerText(),
  touchPoint.destination,
  "A real touch follows the path and updates the inline note",
);
// Use the visible relationship caption: the origin star may be outside the camera.
await phone
  .locator(".path-explanation")
  .getByRole("button", { name: "Vector Space", exact: true })
  .click();
await phone.waitForFunction(
  () =>
    document.querySelector(".stellar-map")?.dataset.focused ===
      "Vector Space" &&
    document.querySelector(".stellar-map")?.dataset.flying === "false",
);
const path = phone.locator(
  '[data-path][data-from="Vector Space"][data-to="Linear Combination"]',
);
await path.evaluate((el) => el.focus({ preventScroll: true }));
await phone.keyboard.press("Enter");
await phone.waitForTimeout(1700);
assert.equal(
  await phone.locator(".mobile-stellar-content .concept-note h2").innerText(),
  "Linear Combination",
);
assert(
  (await phone.locator(".path-explanation").innerText()).includes(
    "Vector Space is a prerequisite",
  ),
);
const radius = await phone
  .locator('[data-name="Linear Combination"]')
  .getAttribute("data-radius");
await phone
  .locator(".inline-star-content")
  .getByRole("button", { name: "Mark as read", exact: true })
  .click();
assert.equal(
  await phone
    .locator('[data-name="Linear Combination"]')
    .getAttribute("data-radius"),
  radius,
  "Progress does not change difficulty size",
);
for (const width of [320, 360, 390, 430]) {
  await phone.setViewportSize({ width, height: 844 });
  assert.equal(
    await phone.evaluate(() => document.documentElement.scrollWidth),
    width,
  );
}
await phone.setViewportSize({ width: 390, height: 844 });
await phone.locator(".stellar-map").scrollIntoViewIfNeeded();
await phone.screenshot({ path: "artifacts/clickable-path-mobile.png" });
assert.deepEqual(errors, []);
await browser.close();
console.log(
  "PASS: difficulty size, importance glow, stable topic colors, real path clicks and animated destination travel, inline mobile notes, no HUD and no overflow.",
);
