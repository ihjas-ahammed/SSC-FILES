import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { state, button } from "./study-helpers.mjs";
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME || ".browser-cache/chromium-1243/chrome-linux64/chrome",
  args: ["--enable-unsafe-swiftshader"],
});
const errors = [];
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  page.setDefaultTimeout(12000);
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto((process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1");
  await page
    .locator(".topbar nav")
    .getByRole("button", { name: "Knowledge map", exact: true })
    .click();
  const map = page.locator(".stellar-map");
  await map.locator("canvas").waitFor();
  await page.waitForTimeout(950);
  await button(page, "Search and map controls").click();
  await page
    .locator(".topic-destinations")
    .getByRole("button", { name: /Linear operators/ })
    .click();
  await page.waitForTimeout(950);
  const before = Number(await map.getAttribute("data-distance"));
  const star = page.locator('[data-name="Hermitian Adjoint"]');
  await star.hover();
  const shape = await star.evaluate((el) => ({
    radius: getComputedStyle(el).borderRadius,
    outline: getComputedStyle(el).outlineStyle,
  }));
  assert.equal(shape.radius, "50%");
  assert.equal(shape.outline, "none");
  await page.screenshot({ path: "artifacts/world-space-star-hover.png" });
  await star.click();
  const panel = page.locator(".map-note-panel");
  await panel.waitFor();
  await page.waitForTimeout(950);
  const mb = await map.boundingBox(),
    pb = await panel.boundingBox();
  assert(mb.width > 800 && pb.width > 340 && pb.x + pb.width <= mb.x + 1);
  assert(
    pb.x <= 1 && mb.x + mb.width <= 1441,
    "Panel is on the left and both views fit inside the viewport",
  );
  assert(await map.isVisible(), "Reading does not replace the live map");
  assert.equal(
    await panel.locator(".concept-note h2").innerText(),
    "Hermitian Adjoint",
  );
  assert((await panel.innerText()).includes("Formal definition"));
  assert.equal(await page.locator('[aria-label="Close dialog"]').count(), 0);
  assert(
    Number(await map.getAttribute("data-distance")) < before,
    "Click zooms towards the concept",
  );
  await page.screenshot({ path: "artifacts/desktop-map-side-note.png" });
  await panel
    .getByRole("button", { name: "Check understanding", exact: true })
    .click();
  assert.equal(
    await panel.locator(".option").count(),
    0,
    "Side panel retains hidden-option recall",
  );
  await button(page, "Close concept side panel").click();
  await page.waitForTimeout(150);
  assert((await map.boundingBox()).width >= 1400);
  await page
    .locator(".topbar nav")
    .getByRole("button", { name: "Question bank", exact: true })
    .click();
  async function routeHandoff(p, mobile) {
    await button(p, "Study Q-A-1").click();
    await button(p, "Skip · find my gaps").click();
    await button(p, "Build my shortest route").click();
    const body = p.locator(".study-body");
    await p.locator(".journey-map-shell canvas").waitFor();
    await p.waitForTimeout(900);
    const next = button(p, "Read · next note");
    await next.scrollIntoViewIfNeeded();
    assert((await body.evaluate((el) => el.scrollTop)) > 50);
    const oldName = await p
      .locator(".route-reading .concept-note h2")
      .innerText();
    // Start collecting the actual rendered note and scrolling position before clicking.
    await body.evaluate((el) => {
      window.__handoffFrames = [];
      window.__captureHandoff = true;
      function frame() {
        window.__handoffFrames.push({
          top: el.scrollTop,
          name: el.querySelector(".concept-note h2")?.textContent,
          flying: el.querySelector(".stellar-map")?.dataset.flying,
        });
        if (window.__captureHandoff) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
    await next.click();
    await p.waitForFunction(
      (name) =>
        document.querySelector(".route-reading .concept-note h2")
          ?.textContent !== name,
      oldName,
    );
    // Observe a rendered flight frame rather than assuming the software GPU
    // delivers it within 200 ms (builds may be running on the same machine).
    await p.waitForFunction(
      (name) =>
        window.__handoffFrames.some(
          (f) => f.name && f.name !== name && f.flying === "true",
        ),
      oldName,
      { timeout: 3000 },
    );
    const frames = await p.evaluate(() => {
      window.__captureHandoff = false;
      return window.__handoffFrames;
    });
    assert(
      frames.some((f) => f.top > 20 && f.name === oldName),
      "Old note remains while scrolling up",
    );
    const changed = frames.find((f) => f.name && f.name !== oldName);
    assert(
      changed && changed.top <= 1,
      "Scroll completes before changing the note",
    );
    assert(
      frames.some((f) => f.name !== oldName && f.flying === "true"),
      "New flight begins with the map visible",
    );
    await p.waitForFunction(
      () => !document.querySelector(".study-body")?.dataset.journey,
    );
    const title = await p
      .locator(".route-reading .concept-note h2")
      .boundingBox();
    const scrollBox = await body.boundingBox();
    assert(
      Math.abs(title.y - scrollBox.y - 24) < 4,
      "Arrival settles at the new note title",
    );
    assert.equal(
      await p
        .locator(".journey-map-shell .stellar-map")
        .getAttribute("data-zoom"),
      "100",
    );
    assert.equal((await state(p)).flow.readIndex, 1);
    await p.screenshot({
      path: `artifacts/next-note-${mobile ? "mobile" : "desktop"}.png`,
    });
    await button(p, "Close dialog").click();
  }
  await routeHandoff(page, false);
  const phone = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  phone.setDefaultTimeout(12000);
  phone.on("pageerror", (e) => errors.push(e.message));
  await phone.goto((process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1");
  await routeHandoff(phone, true);
  assert.deepEqual(errors, []);
  console.log(
    "PASS: simultaneous desktop map/full note, self-check, circle hit targets, focus zoom, and scroll-before-switch with visible flights on desktop/mobile.",
  );
} finally {
  await browser.close();
}
