import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import {
  questions,
  concepts,
} from "../../../flow-library/study-map/src/graph.js";
import { button, state, unlock } from "./study-helpers.mjs";
const html = fs.readFileSync("Quantum-Atlas-offline.html", "utf8");
assert(!/<(?:script|link)[^>]+(?:src|href)="(?:\.\/|\/assets\/)/.test(html));
const b = await chromium.launch({ args: ["--enable-unsafe-swiftshader"] });
const ctx = await b.newContext({
    offline: true,
    viewport: { width: 1280, height: 900 },
  }),
  p = await ctx.newPage();
const errors = [],
  network = [];
p.on("pageerror", (e) => errors.push(e.message));
p.on("request", (r) => {
  if (/^https?:/.test(r.url())) network.push(r.url());
});
await p.goto(pathToFileURL(resolve("Quantum-Atlas-offline.html")).href);
await p.locator(".bank-card").first().waitFor();
assert.equal(await p.locator(".bank-card").count(), 15);
for (const s of ["A", "B", "C"]) {
  await p
    .locator(".bank-tabs")
    .getByRole("button", { name: new RegExp(`Section ${s}`) })
    .click();
  assert.equal(
    await p.locator(".bank-card").count(),
    questions.filter((q) => q.section === s).length,
  );
}
await p
  .locator(".bank-tabs")
  .getByRole("button", { name: /Section A/ })
  .click();
await button(p, "Study Q-A-1").click();
await button(p, "View original").click();
const pdf = await p.locator("iframe").getAttribute("src");
assert(pdf.startsWith("blob:"));
const bytes = await p.evaluate(
  async (url) =>
    (await (await fetch(url.split("#")[0])).arrayBuffer()).byteLength,
  pdf,
);
assert.equal(bytes, 122867);
await button(p, "Close dialog").click();
await button(p, "Study Q-A-1").click();
await button(p, "Try the solution with hints").click();
await unlock(p, questions[0], { missFirst: true });
await button(p, "Write an exam answer from memory").click();
assert.equal(await p.locator(".formal-answer").count(), 0);
await p
  .getByRole("textbox", { name: "Exam answer from memory" })
  .fill(
    "A vector space is closed under addition and scalar multiplication and satisfies the vector-space axioms.",
  );
await button(p, "Compare with the formal solution").click();
assert.equal(await p.locator(".formal-answer").count(), 1);
await button(p, "Close dialog").click();
await p.reload();
await p.locator(".bank-card").first().waitFor();
assert((await state(p)).completed.includes("Q-A-1"));
assert.equal((await state(p)).flow.phase, "attempt", "Reload starts fresh");
assert(
  (await state(p)).sessions["Q-A-1"].flow.examDraft.includes(
    "scalar multiplication",
  ),
  "Earlier written practice remains saved",
);
await p
  .locator(".topbar nav")
  .getByRole("button", { name: "Knowledge map", exact: true })
  .click();
await button(p, "Search and map controls").click();
await button(p, "Full atlas").click();
await button(p, "3D map screen").click();
await p.locator(".stellar-map canvas").waitFor();
assert.equal(
  await p.locator(".stellar-map").getAttribute("data-renderer"),
  "webgl-3d",
);
assert.equal(await p.locator("[data-node]").count(), concepts.length);
await p.waitForTimeout(900);
await button(p, "Selected concept details").click();
assert.equal(await p.locator(".map-note-panel .concept-note").count(), 1);
assert(
  await p.locator(".stellar-map-screen").isVisible(),
  "Offline note remains beside the map",
);
const graphBox = await p.locator(".stellar-map").boundingBox();
const panelBox = await p.locator(".map-note-panel").boundingBox();
assert(
  panelBox.x <= 1 &&
    panelBox.x + panelBox.width <= graphBox.x + 1 &&
    graphBox.x + graphBox.width <= 1281,
);
await p.screenshot({ path: "artifacts/offline-side-note.png" });
await button(p, "Close concept side panel").click();
await p.screenshot({
  path: "artifacts/offline-constellations.png",
  fullPage: true,
});
await p
  .locator(".topbar nav")
  .getByRole("button", { name: "My progress", exact: true })
  .click();
const download = p.waitForEvent("download");
await button(p, "Export Obsidian vault").click();
await (await download).saveAs("artifacts/offline-vault.zip");
assert(fs.statSync("artifacts/offline-vault.zip").size > 10000);
await p.evaluate(() => document.fonts.ready);
assert(await p.evaluate(() => document.fonts.check('14px "DM Sans"')));
assert.deepEqual(network, []);
assert.deepEqual(errors, []);
await b.close();
console.log(
  "PASS: single file:// with internet disabled; embedded PDF, all 32 questions, 155 nodes, actual WebGL 3D, wrong-check gating, full solution, saved written recall, vault ZIP and zero HTTP requests.",
);
