import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  concepts,
  byName,
  questions,
} from "../../../flow-library/study-map/src/graph.js";
import { unlock } from "./study-helpers.mjs";
import { constellationLayout } from "../../../flow-library/study-map/src/graph/three/layout.js";
import { createOrbitalMotion } from "../../../flow-library/study-map/src/graph/three/orbits.js";
const layout = constellationLayout(concepts),
  motion = createOrbitalMotion(layout);
assert.equal(layout.blocks[0].id, "ground");
assert.equal(layout.blocks[0].orbit.radius, 0);
assert(
  layout.blocks
    .slice(1)
    .every((b) => b.orbit.speed <= (2 * Math.PI) / (30 * 60 * 1000)),
);
const first = structuredClone(layout.positions);
motion.tick(0, false);
motion.tick(100, false);
assert.deepEqual(
  layout.positions[layout.blocks[0].members[0].name],
  first[layout.blocks[0].members[0].name],
);
const name = layout.blocks[1].members[0].name;
assert.notDeepEqual(layout.positions[name], first[name]);
const paused = structuredClone(layout.positions);
motion.tick(200, true);
assert.deepEqual(layout.positions, paused);
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});
const base =
  process.env.STUDY_MAP_URL ||
  "http://127.0.0.1:5174/phy/quantum-mechanics/study-map/module-3/";
const names = [
  "Scalar",
  "Ket",
  "Hermitian Adjoint",
  "Completeness Relation",
  "Fourier Transform",
  "Variance (Uncertainty)",
].filter((n) => byName[n]);
try {
  for (const width of [1440, 320]) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      offline: base.startsWith("file:"),
      hasTouch: width < 500,
      isMobile: width < 500,
    });
    await context.addInitScript(
      ({ names }) =>
        localStorage.setItem(
          "quantum-atlas-v1",
          JSON.stringify({
            preferences: { theme: "light", animations: true },
            bookmarks: names.map((name, index) => ({
              name,
              createdAt: index + 1,
              note:
                index === 0
                  ? "Recall cue: " +
                    "Explain one example and avoid confusing magnitude with direction. ".repeat(
                      120,
                    )
                  : "Remember $\\langle\\phi|\\psi\\rangle$ and $A^\\dagger$.",
            })),
          }),
        ),
      { names },
    );
    const page = await context.newPage();
    page.setDefaultTimeout(30000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(base, { waitUntil: "domcontentloaded" });
    await page.locator(".bank-card").first().waitFor();
    assert.equal(
      await page.evaluate(() => document.documentElement.dataset.theme),
      "light",
    );
    await page
      .getByRole("button", { name: "App settings", exact: true })
      .click();
    const theme = page.getByRole("switch", {
      name: "Understanding of light theme",
      exact: true,
    });
    await theme.click();
    await page.waitForFunction(
      () => document.documentElement.dataset.theme === "dark",
    );
    await theme.click();
    await page.waitForFunction(
      () => document.documentElement.dataset.theme === "light",
    );
    await page
      .getByRole("button", { name: "Close dialog", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Study Q-A-1", exact: true })
      .click();
    assert.equal(await page.locator(".study-prerequisite-controls").count(), 0);
    await page
      .getByRole("button", { name: "Try the solution with hints", exact: true })
      .click();
    await unlock(page, questions[0], { missFirst: true });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      ),
      false,
    );
    await page
      .getByRole("button", { name: "Close dialog", exact: true })
      .click();
    await page
      .locator(width < 500 ? ".mobile-nav" : ".topbar nav")
      .getByRole("button", { name: width < 500 ? "Bookmarks" : /^Bookmarks/ })
      .click();
    for (let i = 0; i < names.length; i++) {
      await page.locator(".bookmark-list button").nth(i).click();
      const symbol = page.locator(
        ".bookmark-review .note-heading .math-icon-content",
      );
      const fitting = await symbol.evaluate((el) => {
        const a = el.getBoundingClientRect(),
          b = el.parentElement.getBoundingClientRect();
        return (
          a.left >= b.left + 5 &&
          a.right <= b.right - 5 &&
          a.top >= b.top + 5 &&
          a.bottom <= b.bottom - 5
        );
      });
      assert(fitting, `${names[i]} retains symbol padding at ${width}px`);
    }
    await page.screenshot({
      path: `artifacts/light-bookmarks-${width}.png`,
      fullPage: true,
    });
    if (width === 1440) {
      const download = page.waitForEvent("download", { timeout: 120000 });
      await page
        .getByRole("button", { name: "Download review notes", exact: true })
        .click();
      await page.locator(".review-print-column").first().waitFor();
      const overflow = await page
        .locator(".review-print-column")
        .evaluateAll((columns) =>
          columns.flatMap((column) => {
            const box = column.getBoundingClientRect();
            const oversized = [
              ...column.querySelectorAll(".katex .base"),
            ].filter((el) => {
              const r = el.getBoundingClientRect();
              return r.left < box.left - 1 || r.right > box.right + 1;
            });
            return oversized.map((el) => el.textContent);
          }),
        );
      assert.deepEqual(overflow, [], "PDF math stays inside its column");
      const file = await download;
      assert(file.suggestedFilename().endsWith(".pdf"));
      await file.saveAs("artifacts/review-notes.pdf");
      assert(
        fs
          .readFileSync("artifacts/review-notes.pdf")
          .subarray(0, 5)
          .toString() === "%PDF-",
      );
    }
    await page
      .locator(width < 500 ? ".mobile-nav" : ".topbar nav")
      .getByRole("button", {
        name: width < 500 ? "Map" : "Knowledge map",
        exact: true,
      })
      .click();
    const map = page.locator(".stellar-map");
    await map.locator("canvas").waitFor();
    assert.equal(await map.getAttribute("data-base-constellation"), "ground");
    if (width === 1440) {
      await page.waitForFunction(
        () =>
          document.querySelector(".stellar-map")?.dataset.orbiting === "true",
      );
    }
    await page.screenshot({ path: `artifacts/light-map-${width}.png` });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      ),
      false,
    );
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.locator(".bank-card").first().waitFor();
    assert.equal(
      await page.evaluate(() => document.documentElement.dataset.theme),
      "light",
    );
    assert.deepEqual(errors, []);
    await context.close();
    console.log(
      `PASS ${width}px: light/dark persistence, symbol padding, clean question screen, orbit root, ${width === 1440 ? "A4 PDF download, " : ""}no overflow.`,
    );
  }
} finally {
  await browser.close();
}
