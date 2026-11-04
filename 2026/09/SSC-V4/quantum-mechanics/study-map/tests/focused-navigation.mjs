import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import * as T from "three";
import { concepts, byName } from "../../../flow-library/study-map/src/graph.js";
import {
  pathDestination,
  isPathComplete,
} from "../../../flow-library/study-map/src/graph/pathNavigation.js";
import { createPathFlow } from "../../../flow-library/study-map/src/graph/three/flow.js";
import { button, answer, state } from "./study-helpers.mjs";

const edge = { a: "A", b: "B", active: true };
assert.equal(pathDestination(edge, "A"), "B");
assert.equal(pathDestination(edge, "B"), "A");
assert.equal(pathDestination(edge, "C"), null);
assert.equal(pathDestination(edge, null), null);
assert(!isPathComplete(edge, { A: "known", B: "shaky" }));
assert(isPathComplete(edge, { A: "known", B: "known" }));
const scene = new T.Scene();
const flow = createPathFlow(scene, [edge], {
  A: { x: 0, y: 0, z: 0 },
  B: { x: 100, y: 0, z: 0 },
});
flow.tick(0, false);
const x0 = scene.children[0].position.x;
flow.tick(1000, false);
assert(
  scene.children[0].position.x > x0,
  "Particles flow without a click in prerequisite direction",
);
flow.tick(1000, true);
assert.equal(
  scene.children[0].visible,
  false,
  "Reduced motion stops continuous particles",
);

const browser = await chromium.launch({
  executablePath:
    process.env.STUDY_MAP_CHROME ||
    ".browser-cache/chromium-1243/chrome-linux64/chrome",
  args: ["--enable-unsafe-swiftshader"],
});
const errors = [];
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  page.setDefaultTimeout(15000);
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(
    (process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1",
  );
  await page
    .locator(".topbar nav")
    .getByRole("button", { name: "Knowledge map", exact: true })
    .click();
  const map = page.locator(".stellar-map");
  await map.locator("canvas").waitFor();
  await page.waitForTimeout(1000);
  assert.equal(
    await page.locator("[data-path]").count(),
    0,
    "Overview paths cannot be clicked",
  );
  await button(page, "Search and map controls").click();
  await page
    .getByRole("textbox", { name: "Search concepts", exact: true })
    .fill("Hermitian Adjoint");
  await page.locator(".star-search-results button").first().click();
  await page.waitForFunction(
    () =>
      document.querySelector(".stellar-map")?.dataset.focused ===
        "Hermitian Adjoint" &&
      document.querySelector(".stellar-map")?.dataset.flying === "false",
  );
  assert.equal(await map.getAttribute("data-zoom"), "110");
  const panel = page.locator(".map-note-panel");
  assert.equal(
    await panel.locator(".concept-note h2").innerText(),
    "Hermitian Adjoint",
  );
  const focusedEdges = await page
    .locator("[data-path]")
    .evaluateAll((els) => els.map((e) => [e.dataset.from, e.dataset.to]));
  assert(
    focusedEdges.length > 0 &&
      focusedEdges.every(
        ([a, b]) => a === "Hermitian Adjoint" || b === "Hermitian Adjoint",
      ),
  );
  const path = page.locator(
    '[data-path][data-from="Hermitian Adjoint"][data-to="Hermitian Operator"]',
  );
  await path.evaluate((el) => el.focus({ preventScroll: true }));
  await page.keyboard.press("Enter");
  await page.waitForFunction(
    () =>
      document.querySelector(".stellar-map")?.dataset.focused ===
        "Hermitian Operator" &&
      document.querySelector(".stellar-map")?.dataset.flying === "false",
  );
  assert.equal(
    await panel.locator(".concept-note h2").innerText(),
    "Hermitian Operator",
  );
  // Travel against the arrow: the same connection must take us back to the OTHER endpoint.
  await path.evaluate((el) => el.focus({ preventScroll: true }));
  await page.keyboard.press("Enter");
  await page.waitForFunction(
    () =>
      document.querySelector(".stellar-map")?.dataset.focused ===
        "Hermitian Adjoint" &&
      document.querySelector(".stellar-map")?.dataset.flying === "false",
  );
  assert.equal(
    await panel.locator(".concept-note h2").innerText(),
    "Hermitian Adjoint",
  );
  const separator = page.getByRole("separator", {
    name: "Resize concept panel",
  });
  const oldWidth = (await panel.boundingBox()).width;
  const rect = await separator.boundingBox();
  await page.mouse.move(rect.x + rect.width / 2, rect.y + 100);
  await page.mouse.down();
  await page.mouse.move(rect.x + 100, rect.y + 100, { steps: 8 });
  await page.mouse.up();
  assert(
    (await panel.boundingBox()).width > oldWidth + 60,
    "Dragging resizes the left panel",
  );
  await separator.focus();
  await page.keyboard.press("ArrowLeft");
  assert((await state(page)).preferences.notePanelWidth > 300);
  await button(page, "Open focused note window").click();
  const dialog = page.getByRole("dialog", {
    name: "Hermitian Adjoint concept",
  });
  assert(await dialog.isVisible());
  assert((await dialog.boundingBox()).width >= 1000);
  assert.equal(
    await dialog.evaluate((el) => getComputedStyle(el).resize),
    "both",
  );
  await button(page, "Close dialog").click();
  for (const name of ["Hermitian Adjoint", "Hermitian Operator"]) {
    if (name === "Hermitian Operator") {
      await path.evaluate((el) => el.focus({ preventScroll: true }));
      await page.keyboard.press("Enter");
      await page.waitForFunction(
        () =>
          document.querySelector(".stellar-map")?.dataset.focused ===
            "Hermitian Operator" &&
          document.querySelector(".stellar-map")?.dataset.flying === "false",
      );
    }
    await panel
      .getByRole("button", { name: "Check understanding", exact: true })
      .click();
    await answer(page, byName[name].check);
    await panel
      .getByRole("button", { name: "Back to the note", exact: true })
      .click();
    assert.equal(
      await page.locator(`[data-name="${name}"]`).getAttribute("data-complete"),
      "true",
    );
  }
  assert.equal(
    await path.getAttribute("data-complete"),
    "true",
    "Completed connection tracks both passed endpoints",
  );
  assert.equal(
    await path.getAttribute("data-color"),
    "#59f9bd",
    "Completed paths override incoming/outgoing colors",
  );
  await page.screenshot({ path: "artifacts/completed-stars-path.png" });
  await button(page, "Search and map controls").click();
  await button(page, "Show whole universe").click();
  await page.waitForTimeout(1000);
  assert.equal(await page.locator("[data-path]").count(), 0);
  for (const width of [768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth),
      width,
    );
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS: focused-only connected paths, reverse endpoint travel, circulating particles, reduced motion, 110% desktop note focus, drag/keyboard resize, focused reader, and green completion for stars/paths.",
  );
} finally {
  await browser.close();
}
