import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { questions } from "../../../flow-library/study-map/src/graph.js";
import { button, state, unlock } from "./study-helpers.mjs";
const base = process.env.INTEGRATION_URL || "http://127.0.0.1:5174";
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});
const results = [];
fs.mkdirSync("artifacts/ssc-integration", { recursive: true });
for (const viewport of [
  { width: 1440, height: 1000 },
  { width: 390, height: 844 },
]) {
  const ctx = await browser.newContext({
    viewport,
    isMobile: viewport.width < 500,
    hasTouch: viewport.width < 500,
    reducedMotion: "reduce",
  });
  await ctx.route("**/*", (r) =>
    new URL(r.request().url()).origin === new URL(base).origin
      ? r.continue()
      : r.abort(),
  );
  await ctx.addInitScript(() => {
    for (const key of [
      "ssc4.qm.v1",
      "ssc4.op.v1",
      "ssc4.prob.v1",
      "ssc4.level1.v1",
    ]) {
      if (!localStorage.getItem(key))
        localStorage.setItem(
          key,
          JSON.stringify({
            v: 2,
            done: { "keep-existing": 123 },
            prefs: { syncName: "Test", syncRoll: "local-only" },
          }),
        );
    }
  });
  const p = await ctx.newPage(),
    errors = [],
    api = [];
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("request", (r) => {
    if (r.url().includes("/api/progress")) api.push(r.url());
  });
  await p.goto(`${base}/phy/quantum-mechanics/`);
  await p.locator("#tab-study-map").waitFor();
  await p.getByRole("link", { name: "Study Map", exact: true }).click();
  await p.locator(".study-map-list").waitFor();
  assert.equal(await p.locator(".study-map-list li").count(), 1);
  for (const theme of ["light", "dark"]) {
    await p.evaluate((t) => {
      Store.setPref("theme", t);
      Theme.apply();
    }, theme);
    assert.equal(await p.locator(".study-map-list li").count(), 1);
    assert.equal(
      await p.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      ),
      false,
    );
    await p.screenshot({
      path: `artifacts/ssc-integration/catalogue-${viewport.width}-${theme}.png`,
      fullPage: true,
    });
  }
  const module = p.locator(".study-map-entry");
  assert((await module.innerText()).startsWith("hub\nModule 3"));
  await module.click();
  await p.locator(".bank-card").first().waitFor();
  assert(p.url().includes("/phy/quantum-mechanics/study-map/module-3/"));
  assert.equal(await p.locator(".bank-card").count(), 15);
  assert.equal(await p.locator(".formal-answer").count(), 0);
  assert.deepEqual((await state(p)).statuses, {});
  assert.equal(
    await p.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    ),
    false,
  );
  await button(p, "Study Q-A-1").click();
  await button(p, "Skip · find my gaps").click();
  assert.equal(
    await p.locator(".term-checklist [role=switch][aria-checked=true]").count(),
    0,
  );
  await button(p, "Close dialog").click();
  await button(p, "Study Q-A-1").click();
  // Reopening always starts at the attempt, while learned progress stays saved.
  assert.equal((await state(p)).flow.phase, "attempt");
  await button(p, "Try the solution with hints").click();
  await unlock(p, questions[0], { missFirst: true });
  assert((await state(p)).completed.includes("Q-A-1"));
  await button(p, "Close dialog").click();
  await p.reload();
  await p.locator(".bank-card").first().waitFor();
  assert((await state(p)).completed.includes("Q-A-1"));
  await button(p, "App settings").click();
  assert.equal(
    await p
      .getByRole("link", { name: "Download the offline study map" })
      .count(),
    1,
  );
  await button(p, "Reset all progress and settings").click();
  await button(p, "Confirm reset").click();
  assert.equal((await state(p)).completed.length, 0);
  assert.equal(
    await p.evaluate(
      () =>
        JSON.parse(localStorage.getItem("ssc4.qm.v1")).done["keep-existing"],
    ),
    123,
  );
  assert.equal(api.length, 0);
  assert.deepEqual(errors, []);
  await p.screenshot({
    path: `artifacts/ssc-integration/study-map-${viewport.width}.png`,
    fullPage: true,
  });
  // Existing subject source layers never opt in. Test builds include the new shared capability.
  for (const route of [
    "/math/real-analysis-test/",
    "/phy/optics-test/",
    "/math/probability-test/",
  ]) {
    for (const theme of ["light", "dark"]) {
      await p.goto(base + route);
      await p.locator("#tab-home").waitFor();
      await p.evaluate((t) => {
        Store.setPref("theme", t);
        Theme.apply();
      }, theme);
      assert.equal(await p.locator(".rail-nav a").count(), 3);
      assert.equal(await p.locator("#tab-study-map").count(), 0);
      assert.equal(
        await p.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        ),
        false,
      );
      assert.equal(await p.locator("[data-error]").count(), 0);
    }
  }
  results.push({
    viewport,
    pass: true,
    catalogueModules: 1,
    hostedApiRequests: api.length,
  });
  await ctx.close();
}
await browser.close();
fs.writeFileSync(
  "artifacts/ssc-integration/integration-results.json",
  JSON.stringify(results, null, 2),
);
console.log(
  "PASS: desktop/mobile Study Map → Module 3, switches off, hidden solutions, wrong-answer gating, persisted completion, isolated reset, offline download, no backend requests; other subjects retain 3 tabs in both themes.",
);
