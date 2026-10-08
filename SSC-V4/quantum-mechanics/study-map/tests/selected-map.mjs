import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import * as T from "three";
import { meta } from "../../../flow-library/study-map/src/graph.js";
import {
  pathColor,
  pathDirection,
  activeColor,
  outgoingColor,
  distantColor,
} from "../../../flow-library/study-map/src/graph/three/theme.js";
import { createHover } from "../../../flow-library/study-map/src/graph/three/hover.js";
import { createPathFlow } from "../../../flow-library/study-map/src/graph/three/flow.js";
const edge = {
  a: "A",
  b: "B",
  active: true,
  edge: new T.Line(new T.BufferGeometry(), new T.LineBasicMaterial()),
};
assert.equal(pathDirection(edge, "A"), "outgoing");
assert.equal(pathDirection(edge, "B"), "incoming");
assert.equal(pathColor(edge, "A"), outgoingColor());
assert.equal(pathColor(edge, "B"), activeColor());
edge.color = pathColor(edge, "A");
edge.edge.material.color.set(edge.color);
const scene = new T.Scene(),
  hover = createHover(scene, new Map(), [edge], () => {});
hover.path(edge);
assert.equal(edge.edge.material.color.getHex(), outgoingColor());
hover.clear();
const flow = createPathFlow(scene, [edge], {
  A: { x: 0, y: 0, z: 0 },
  B: { x: 100, y: 0, z: 0 },
});
flow.tick(1000, false);
assert.equal(scene.children.at(-1).material.color.getHex(), outgoingColor());
edge.complete = true;
assert.equal(pathColor(edge, "A"), outgoingColor());
assert.equal(pathColor(edge, "B"), activeColor());
flow.tick(2000, false);
assert.equal(scene.children.at(-1).material.color.getHex(), outgoingColor());
edge.dashed = true;
assert.equal(pathColor(edge, "A"), distantColor());
edge.active = false;
flow.tick(3000, false);
assert.equal(scene.children.at(-1).visible, false, "Unselected completed paths have no particles");

const base =
  process.env.STUDY_MAP_URL ||
  "http://127.0.0.1:5174/phy/quantum-mechanics/study-map/module-3/";
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});
try {
  for (const [width, theme] of [
    [390, "dark"],
    [320, "light"],
    [1440, "dark"],
  ]) {
    const mobile = width < 500;
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      hasTouch: mobile,
      isMobile: mobile,
      offline: base.startsWith("file:"),
    });
    await context.addInitScript(
      ({ theme, storageKey }) =>
        localStorage.setItem(
          storageKey,
          JSON.stringify({ preferences: { theme, animations: true } }),
        ),
      { theme, storageKey: meta.storageKey },
    );
    const page = await context.newPage(),
      errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.setDefaultTimeout(30000);
    await page.goto(base, { waitUntil: "domcontentloaded" });
    const nav = page.locator(mobile ? ".mobile-nav" : ".topbar nav");
    assert.equal(
      await page.locator(".brand-title").innerText(),
      mobile ? "Questions" : "Question bank",
    );
    for (const [label, title] of [
      ["Bookmarks", "Bookmarks"],
      [
        mobile ? "Progress" : "My progress",
        mobile ? "Progress" : "My progress",
      ],
    ]) {
      await nav.getByRole("button", { name: new RegExp(label) }).click();
      assert.equal(await page.locator(".brand-title").innerText(), title);
    }
    await nav
      .getByRole("button", {
        name: mobile ? "Map" : "Knowledge map",
        exact: true,
      })
      .click();
    assert.equal(
      await page.locator(".brand-title").innerText(),
      mobile ? "Map" : "Knowledge map",
    );
    if (mobile) await page.getByRole("button", { name: "3D map screen", exact: true }).click();
    await page
        .getByRole("button", { name: "Search and map controls", exact: true })
        .click();
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
    const map = page.locator(".stellar-map");
    assert.equal(await map.getAttribute("data-zoom"), mobile ? "165" : "110");
    const star = map.locator('[data-name="Hermitian Adjoint"]');
    assert(
      Math.abs((await star.boundingBox()).width - (mobile ? 105.6 : 70.4)) < 1,
      "Actual rendered stellar-map scale must increase another 10%",
    );
    const height = await map.evaluate((el) => el.clientHeight);
    const radius = Number(await star.getAttribute("data-radius"));
    const previousScale = mobile ? 1.5 : 1;
    const previousDistance = Math.max(
      230 / previousScale,
      (radius * height) /
        (64 * previousScale * Math.tan((21.5 * Math.PI) / 180)),
    );
    assert(
      Math.abs(
        Number(await map.getAttribute("data-distance")) -
          previousDistance / 1.1,
      ) < 1,
      "The stellar-map camera must produce 10% more magnification on both layouts",
    );
    if (mobile) {
      assert.equal(
        await page.locator(".mobile-stellar-heading h1").innerText(),
        "Hermitian Adjoint",
      );
      assert(
        !/Learning Universe|Follow the stars/i.test(
          await page.locator(".mobile-stellar-heading").innerText(),
        ),
      );
    }
    const paths = await map.locator("[data-path]").evaluateAll((els) =>
      els.map((e) => ({
        from: e.dataset.from,
        to: e.dataset.to,
        direction: e.dataset.direction,
        color: e.dataset.color,
        dashed: e.dataset.dashed === "true",
      })),
    );
    assert(paths.some((p) => p.direction === "incoming"));
    assert(paths.some((p) => p.direction === "outgoing"));
    for (const p of paths)
      assert.equal(
        p.color,
        p.dashed ? (theme === "light" ? "#687382" : "#828995") : p.direction === "incoming"
          ? theme === "light"
            ? "#0b638f"
            : "#00eaff"
          : theme === "light"
            ? "#b95567"
            : "#f28c98",
      );
    const path = map.locator(
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
    assert.equal(await path.getAttribute("data-direction"), "incoming");
    assert.equal(
      await path.getAttribute("data-color"),
      theme === "light" ? "#0b638f" : "#00eaff",
    );
    if (mobile)
      assert.equal(
        await page.locator(".mobile-stellar-heading h1").innerText(),
        "Hermitian Operator",
      );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth),
      width,
    );
    if (mobile)
      await page.screenshot({
        path: `artifacts/selected-map-${width}-${theme}.png`,
        fullPage: true,
      });
    assert.deepEqual(errors, []);
    await context.close();
  }
  console.log(
    "PASS: selected tab/node headings, 3D focus scale, incoming/outgoing and grey dashed colors in both themes, hover/particle colors, travel direction updates, no completion green, and no overflow at 320/390/1440.",
  );
} finally {
  await browser.close();
}
