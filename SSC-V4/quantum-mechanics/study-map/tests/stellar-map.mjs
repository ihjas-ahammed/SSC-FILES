import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { concepts, meta } from "../../../flow-library/study-map/src/lib/course.js";

const base = process.env.STUDY_MAP_URL || "http://127.0.0.1:5180/";
const offline = base.startsWith("file:");
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});
try {
  const page = await browser.newPage({ offline, viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
  await page.goto(base);
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
    const context = await browser.newContext({ offline, viewport: { width, height: 900 }, isMobile: mobile, hasTouch: mobile });
    await context.addInitScript(({ storageKey }) => localStorage.setItem(storageKey, JSON.stringify({ preferences: { notePanelWidth: 450 } })), { storageKey: meta.storageKey });
    const page = await context.newPage();
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
    await page.goto(base);
    await page.locator(mobile ? ".mobile-nav" : ".topbar nav").getByRole("button", { name: mobile ? "Map" : "Knowledge map", exact: true }).click();
    if (!mobile) await page.getByRole("button", { name: "2D map screen", exact: true }).click();
    const map = page.locator('.stellar-map[data-renderer="canvas-2d"]');
    await map.waitFor();
    assert.equal(await map.locator("canvas").count(), 1);
    assert.equal(await map.locator(".sky-links, .stellar-paths, .sky-star, .sky-field").count(), 0, "All map geometry renders on canvas");
    assert.equal(await map.locator('[data-node][aria-pressed="true"]').count(), 1);
    const locked = map.locator('[data-node][data-locked="true"]').first();
    assert(await locked.isDisabled());
    const selected = await map.getAttribute("data-focused");
    const canvas = map.locator("canvas");
    const readView = () => canvas.evaluate(el => JSON.parse(el.dataset.view));
    const initial = await readView();
    const paths = initial.links;
    assert(paths.length > 0);
    assert(paths.every(p => p.a === selected));
    assert(paths.some(p => p.distant && p.color === "#828995"));
    assert(paths.every(p => p.distant || ["#75b8ef", "#e69ba8"].includes(p.color)));
    assert.equal(await canvas.evaluate(el => el.getContext("2d").getLineDash().length), 0);
    if (mobile) assert((await map.boundingBox()).height > 600, "Map fills the available phone viewport");
    const lockedVisible = Object.values(initial.nodes).find(n => n.locked && n.x > 20 && n.x < initial.width - 20 && n.y > 20 && n.y < initial.height - 20);
    if (lockedVisible) {
      await canvas.click({ position: { x: lockedVisible.x, y: lockedVisible.y } });
      assert.equal(await map.getAttribute("data-focused"), selected, "Canvas taps cannot select locked stars");
    }
    const box = await canvas.boundingBox();
    const anchor = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
    if (mobile) {
      const cdp = await context.newCDPSession(page);
      const touch = (x, id) => ({ x, y: anchor.y, id });
      await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [touch(anchor.x - 25, 1), touch(anchor.x + 25, 2)] });
      await cdp.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [touch(anchor.x - 45, 1), touch(anchor.x + 45, 2)] });
      const pinched = await readView();
      await cdp.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [touch(anchor.x - 15, 1), touch(anchor.x + 75, 2)] });
      assert.notDeepEqual((await readView()).center, pinched.center, "Two-finger drag pans the canvas");
      await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
      assert((await readView()).scale > initial.scale, "Two-finger pinch zooms the canvas");
      assert.equal(await map.getAttribute("data-focused"), selected, "Pinching never selects a star");
      await cdp.detach();
    }
    await page.mouse.move(anchor.x, anchor.y);
    await page.mouse.wheel(0, -180);
    await page.waitForFunction(scale => Number(document.querySelector(".sky-map").dataset.scale) > scale, initial.scale);
    await page.mouse.down();
    await page.mouse.move(anchor.x + 65, anchor.y + 35, { steps: 6 });
    await page.mouse.up();
    const panned = await readView();
    assert.notDeepEqual(panned.center, initial.center, "Drag pans the projected map");
    assert.equal(await map.getAttribute("data-focused"), selected, "Dragging never selects a star");
    await page.getByRole("button", { name: "Center selected star", exact: true }).click();
    const centered = await readView(), current = centered.nodes[selected];
    await canvas.click({ position: { x: current.x, y: current.y } });
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
  console.log("PASS: mobile-default 2D, disabled locks, single selection, solid grey two-step links, full-screen map, adjacent questions, dimension switching and no overflow at 320/390/1440px.");
  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({ offline, viewport: { width: 1280, height: 900 } });
    const statuses = Object.fromEntries(concepts.filter((_, i) => i % 3 === 0).map(n => [n.name, "known"]));
    await context.addInitScript(({ theme, statuses, storageKey }) => localStorage.setItem(storageKey, JSON.stringify({ statuses, preferences: { theme, animations: false } })), { theme, statuses, storageKey: meta.storageKey });
    const page = await context.newPage();
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
    await page.goto(base);
    await page.locator(".topbar nav").getByRole("button", { name: "Knowledge map", exact: true }).click();
    const map = page.locator('.stellar-map[data-renderer="webgl-3d"]');
    await map.locator("canvas").waitFor();
    await page.waitForFunction(() => document.querySelector('.stellar-map')?.dataset.flying === "false");
    assert(await map.locator('[data-glowing="true"]').count() > 0);
    assert(await map.locator('[data-glowing="false"]').count() > 0);
    assert.equal(await map.locator('[data-locked="true"][data-glowing="true"]').count(), 0);
    await page.screenshot({ path: `artifacts/stellar-3d-${theme}.png` });
    await page.getByRole("button", { name: "2D map screen", exact: true }).click();
    const sky = page.locator('.stellar-map[data-renderer="canvas-2d"]');
    const skyCanvas = sky.locator("canvas");
    const selectedBeforeKey = await sky.getAttribute("data-focused");
    await skyCanvas.focus();
    await page.keyboard.press("ArrowLeft");
    if (await sky.getAttribute("data-focused") === selectedBeforeKey) await page.keyboard.press("ArrowRight");
    assert.notEqual(await sky.getAttribute("data-focused"), selectedBeforeKey, "Arrow keys select an available star");
    await page.keyboard.press("Home");
    const skyView = await skyCanvas.evaluate(el => JSON.parse(el.dataset.view));
    const focusedStar = skyView.nodes[await sky.getAttribute("data-focused")];
    assert(!focusedStar.locked);
    assert(Math.abs(focusedStar.x - skyView.width / 2) < 1 && Math.abs(focusedStar.y - skyView.height / 2) < 1);
    assert.deepEqual(await skyCanvas.evaluate(el => Array.from(el.getContext("2d").getImageData(0, 0, 1, 1).data)), theme === "light" ? [239, 244, 250, 255] : [5, 11, 25, 255]);
    assert.deepEqual(errors, [], "3D shaders compile and render without errors in both themes");
    await context.close();
  }
  console.log("PASS: mixed understood/locked 3D stars render in both themes without shader or browser errors.");
} finally {
  await browser.close();
}
