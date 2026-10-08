import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { concepts, meta } from "../../../flow-library/study-map/src/lib/course.js";

const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
  await page.goto(process.env.STUDY_MAP_URL || "http://127.0.0.1:5180/");
  await page.locator(".topbar nav").getByRole("button", { name: "Knowledge map", exact: true }).click();
  await page.getByRole("button", { name: "Selected concept details", exact: true }).click();
  const panel = page.getByRole("complementary", { name: "Concept side panel" });
  await panel.getByRole("button", { name: "Self-check", exact: true }).click();
  assert.equal(await panel.locator(".option").count(), 0);
  await panel.getByRole("button", { name: "Reveal options" }).click();
  assert([2, 3].includes(await panel.locator(".option").count()));
  const pb = await panel.boundingBox(), mb = await page.locator(".stellar-map").boundingBox();
  assert(pb.x + pb.width <= mb.x + 1, "Question panel must not overlap the map");
  assert.equal(await page.locator(".stellar-map .objective").count(), 0);
  assert.match(await panel.locator(".map-note-heading").innerText(), /QUESTION/);
  assert.deepEqual(errors, []);
  console.log("PASS: a single adjacent question panel, hidden answers, 2–3 revealed choices and no browser errors.");
  await page.close();
  for (const width of [320, 390, 1440]) {
    const mobile = width < 500;
    const context = await browser.newContext({ viewport: { width, height: 900 }, isMobile: mobile, hasTouch: mobile });
    const page = await context.newPage();
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
    await page.goto(process.env.STUDY_MAP_URL || "http://127.0.0.1:5180/");
    await page.locator(mobile ? ".mobile-nav" : ".topbar nav").getByRole("button", { name: mobile ? "Map" : "Knowledge map", exact: true }).click();
    if (!mobile) await page.getByRole("button", { name: "2D map screen", exact: true }).click();
    const map = page.locator('.stellar-map[data-renderer="svg-2d"]');
    await map.waitFor();
    assert.equal(await map.locator("canvas").count(), 0);
    assert.equal(await map.locator('.sky-star[aria-pressed="true"]').count(), 1);
    const locked = map.locator('.sky-star[data-locked="true"]').first();
    assert(await locked.isDisabled());
    const selected = await map.getAttribute("data-focused");
    const paths = await map.locator("[data-path]").evaluateAll(els => els.map(e => ({ from: e.dataset.from, dashed: e.dataset.dashed, color: getComputedStyle(e).stroke })));
    assert(paths.length > 0);
    assert(paths.every(p => p.from === selected));
    assert(paths.some(p => p.dashed === "true" && p.color === "rgb(130, 137, 149)"));
    if (mobile) assert((await map.boundingBox()).height > 600, "Map fills the available phone viewport");
    await map.locator('.sky-star[aria-pressed="true"]').click();
    const panel = page.locator(".map-note-panel");
    await panel.getByRole("button", { name: "Self-check", exact: true }).click();
    await panel.getByRole("button", { name: "Reveal options" }).click();
    assert([2, 3].includes(await panel.locator(".option").count()));
    const pb = await panel.boundingBox(), mb = await map.boundingBox();
    assert(mobile ? mb.y + mb.height <= pb.y + 1 : pb.x + pb.width <= mb.x + 1, "Questions never overlap the map");
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
    await page.screenshot({ path: `artifacts/stellar-2d-${width}.png` });
    await page.getByRole("button", { name: "Close concept side panel", exact: true }).click();
    await page.getByRole("button", { name: "3D map screen", exact: true }).click();
    await page.locator('.stellar-map[data-renderer="webgl-3d"] canvas').waitFor();
    await page.getByRole("button", { name: "2D map screen", exact: true }).click();
    assert.equal(await map.getAttribute("data-focused"), selected);
    assert.deepEqual(errors, []);
    await context.close();
  }
  console.log("PASS: mobile-default 2D, disabled locks, single selection, grey dotted links, full-screen map, adjacent questions, dimension switching and no overflow at 320/390/1440px.");
  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const statuses = Object.fromEntries(concepts.filter((_, i) => i % 3 === 0).map(n => [n.name, "known"]));
    await context.addInitScript(({ theme, statuses, storageKey }) => localStorage.setItem(storageKey, JSON.stringify({ statuses, preferences: { theme, animations: false } })), { theme, statuses, storageKey: meta.storageKey });
    const page = await context.newPage();
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
    await page.goto(process.env.STUDY_MAP_URL || "http://127.0.0.1:5180/");
    await page.locator(".topbar nav").getByRole("button", { name: "Knowledge map", exact: true }).click();
    const map = page.locator('.stellar-map[data-renderer="webgl-3d"]');
    await map.locator("canvas").waitFor();
    await page.waitForFunction(() => document.querySelector('.stellar-map')?.dataset.flying === "false");
    assert(await map.locator('[data-glowing="true"]').count() > 0);
    assert(await map.locator('[data-glowing="false"]').count() > 0);
    assert.equal(await map.locator('[data-locked="true"][data-glowing="true"]').count(), 0);
    await page.screenshot({ path: `artifacts/stellar-3d-${theme}.png` });
    assert.deepEqual(errors, [], "3D shaders compile and render without errors in both themes");
    await context.close();
  }
  console.log("PASS: mixed understood/locked 3D stars render in both themes without shader or browser errors.");
} finally {
  await browser.close();
}
