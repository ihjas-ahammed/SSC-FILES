import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { questions, concepts } from "../../../flow-library/study-map/src/graph.js";
import { state, button, unlock } from "./study-helpers.mjs";
const browser = await chromium.launch({
  args: ["--enable-unsafe-swiftshader"],
});
const p = await browser.newPage({ viewport: { width: 1440, height: 1000 } }),
  errors = [];
p.on("pageerror", (e) => errors.push(e.message));
await p.goto((process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1");
await p.locator(".bank-card").first().waitFor();
assert.equal(await p.locator(".bank-card").count(), 15);
const nav = (name) =>
  p.locator(".topbar nav").getByRole("button", { name, exact: true }).click();
await nav("Knowledge map");
await p.locator(".stellar-map canvas").waitFor();
await p.waitForTimeout(1000);
assert.equal(
  await p.locator(".stellar-map").getAttribute("data-renderer"),
  "webgl-3d",
);
await button(p, "Search and map controls").click();
await button(p, "Full atlas").click();
assert.equal(await p.locator(".topic-destinations button").count(), 9);
await button(p, "3D map screen").click();
await p.waitForTimeout(1000);
assert.equal(await p.locator("[data-node]").count(), concepts.length);

await p.screenshot({
  path: "artifacts/constellations-overview.png",
  fullPage: true,
});
const canvas = p.locator(".stellar-map canvas"),
  box = await canvas.boundingBox();
const camera = () => p.locator(".stellar-map").getAttribute("data-camera");
const start = await camera();
await p.mouse.move(box.x + 35, box.y + 190);
await p.mouse.down();
await p.mouse.move(box.x + 120, box.y + 220, { steps: 10 });
await p.mouse.up();
await p.waitForFunction(
  (value) => document.querySelector(".stellar-map")?.dataset.camera !== value,
  start,
);
assert.notEqual(
  await camera(),
  start,
  "Mouse orbit must move the actual 3D camera",
);
await button(p, "Search and map controls").click();
await p
  .locator(".topic-destinations")
  .getByRole("button", { name: /Linear operators/ })
  .click();
await p.waitForTimeout(900);
await p.locator('[data-name="Hermitian Adjoint"]').click();
await p.waitForTimeout(900);
await button(p, "Selected concept details").click();
assert.equal(
  await p.locator(".map-note-panel .concept-note h2").innerText(),
  "Hermitian Adjoint",
);
await button(p, "3D map screen").click();
const target = JSON.parse(
  await p.locator(".stellar-map").getAttribute("data-target"),
);
assert.equal(target.length, 3);
await p.screenshot({
  path: "artifacts/constellation-operators.png",
  fullPage: true,
});
await button(p, "Search and map controls").click();
await p
  .getByRole("textbox", { name: "Search concepts", exact: true })
  .fill("dagger");
await p.locator(".star-search-results button").first().click();
await p.waitForTimeout(850);
await button(p, "Selected concept details").click();
assert.equal(
  await p.locator(".map-note-panel .concept-note h2").innerText(),
  "Dagger Symbol",
);
assert.equal(
  await p.locator(".map-note-panel .concept-note h2").innerText(),
  "Dagger Symbol",
);
assert.equal(await p.locator(".stellar-map-screen").isVisible(), true);
assert.equal(
  await p.locator('[aria-label="Close dialog"]').count(),
  0,
  "Notes stay in the side panel",
);
await nav("Question bank");
await button(p, "Study Q-A-1").click();
await button(p, "Try the solution with hints").click();
await unlock(p, questions[0], { missFirst: true });
await button(p, "Close dialog").click();
await p.reload();
await p.locator(".bank-card").first().waitFor();
assert((await state(p)).completed.includes("Q-A-1"));
await button(p, "App settings").click();
await button(p, "Reset all progress and settings").click();
assert(
  (await state(p)).completed.length === 1,
  "Reset must need its inline confirmation",
);
await button(p, "Confirm reset").click();
assert.equal((await state(p)).completed.length, 0);
await button(p, "Study Q-A-1").click();
await button(p, "Skip · find my gaps").click();
assert.equal(await p.locator("[role=switch][aria-checked=true]").count(), 0);
await button(p, "Build my shortest route").click();
await p.locator(".journey-map-shell").waitFor();
assert.equal(
  await p
    .locator('[aria-label="Reading route progress"]')
    .getAttribute("aria-valuenow"),
  "0",
);
await p.screenshot({ path: "artifacts/desktop-reading-route.png" });
await button(p, "Close dialog").click();
const phone = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
phone.on("pageerror", (e) => errors.push(e.message));
await phone.goto((process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1");
await phone.locator(".bank-card").first().waitFor();
for (const width of [320, 360, 390, 430, 768, 1024]) {
  await phone.setViewportSize({ width, height: 900 });
  assert.equal(
    await phone.evaluate(() => document.documentElement.scrollWidth),
    width,
    `Question bank overflow at ${width}`,
  );
}
await phone.setViewportSize({ width: 390, height: 844 });
await button(phone, "Map").click();
await phone.locator(".stellar-map canvas").waitFor();
await phone.locator(".stellar-map").scrollIntoViewIfNeeded();
await phone.waitForTimeout(1000);
const cb = await phone.locator(".stellar-map canvas").boundingBox(),
  cdp = await phone.context().newCDPSession(phone);
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
const cam = () => phone.locator(".stellar-map").getAttribute("data-camera");
const c0 = await cam();
const x = cb.x + 80,
  y = cb.y + 170;
await touch("touchStart", [[x, y, 1]]);
await touch("touchMove", [[x + 60, y + 20, 1]]);
await touch("touchEnd", []);
await phone.waitForFunction(
  (value) => document.querySelector(".stellar-map")?.dataset.camera !== value,
  c0,
);
assert.notEqual(await cam(), c0, "Touch orbit must move the camera");
const c1 = await cam();
await touch("touchStart", [
  [x, y, 1],
  [x + 80, y, 2],
]);
await touch("touchMove", [
  [x - 25, y, 1],
  [x + 105, y, 2],
]);
await touch("touchEnd", []);
await phone.waitForFunction(
  (value) => document.querySelector(".stellar-map")?.dataset.camera !== value,
  c1,
);
assert.notEqual(await cam(), c1, "Touch pinch must zoom the camera");
await phone.screenshot({
  path: "artifacts/mobile-constellations.png",
  fullPage: true,
});
await button(phone, "Questions").click();
await button(phone, "Study Q-A-1").click();
await button(phone, "Skip · find my gaps").click();
await button(phone, "Build my shortest route").click();
await phone.locator(".journey-map-shell").waitFor();
assert.equal(
  await phone
    .locator(".journey-map-shell")
    .evaluate((el) => getComputedStyle(el).position),
  "relative",
);
const before = await phone.locator(".journey-map-shell").boundingBox();
await phone.locator(".study-body").evaluate((el) => (el.scrollTop = 350));
const after = await phone.locator(".journey-map-shell").boundingBox();
assert(after.y < before.y - 200, "Mobile map must scroll with the note");
await phone.locator(".study-body").evaluate((el) => (el.scrollTop = 0));
await phone.screenshot({ path: "artifacts/mobile-reading-route.png" });
for (const width of [320, 360, 390, 430, 768]) {
  await phone.setViewportSize({ width, height: 900 });
  assert.equal(
    await phone.evaluate(() => document.documentElement.scrollWidth),
    width,
    `Reading route overflow at ${width}`,
  );
}
await button(phone, "Close dialog").click();
await phone
  .locator(".bank-tabs")
  .getByRole("button", { name: /Section C/ })
  .click();
await button(phone, "Study Q-C-3").click();
await button(phone, "Try the solution with hints").click();
await unlock(
  phone,
  questions.find((q) => q.id === "Q-C-3"),
);
for (const width of [320, 390, 768]) {
  await phone.setViewportSize({ width, height: 900 });
  assert.equal(
    await phone.evaluate(() => document.documentElement.scrollWidth),
    width,
    `Long solution overflow at ${width}`,
  );
}
await phone.screenshot({ path: "artifacts/mobile-full-solution.png" });
assert.deepEqual(errors, []);
await browser.close();
console.log(
  "PASS: WebGL 3D, 9 constellation blocks, mouse orbit, touch orbit/pinch, travel, all-off switches, safe reset, unlock persistence, scrolling route header, mobile 320–1024 and long formal solutions.",
);
