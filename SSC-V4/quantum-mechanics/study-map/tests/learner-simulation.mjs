import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  questions,
  byName,
  report,
  meta,
} from "../../../flow-library/study-map/src/graph.js";
import { state, button, answer, unlock } from "./study-helpers.mjs";

// Deterministic fictional learner: school maths, new terminology needs a note,
// and one lapse every seventh question. This tests flow, not human retention.
const browser = await chromium.launch({
  executablePath:
    process.env.STUDY_MAP_CHROME ||
    ".browser-cache/chromium-1243/chrome-linux64/chrome",
  args: ["--enable-unsafe-swiftshader", "--remote-debugging-port=9222"],
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
page.setDefaultTimeout(15000);
await page.addInitScript(({ storageKey }) => {
  if (!localStorage.getItem(storageKey))
    localStorage.setItem(
      storageKey,
      JSON.stringify({ preferences: { animations: false } }),
    );
}, { storageKey: meta.storageKey });
const errors = [],
  runs = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto(
  (process.env.STUDY_MAP_URL || "http://localhost:5175/") + "?isolated=1",
);
await page.locator(".bank-card").first().waitFor();
await button(page, "Study Q-A-1").click();
for (let qi = 0; qi < questions.length; qi++) {
  const q = questions[qi];
  assert.equal(await page.locator(".attempt-screen").count(), 1);
  const promptText = await page.locator(".source-question").innerText();
  assert(promptText.includes(q.text.split("$")[0].trim()));
  await page
    .getByRole("textbox", { name: "Your answer attempt" })
    .fill(
      qi === 0
        ? "I can add arrows and multiply them by numbers, but I need to learn the formal rules."
        : `Memory attempt for ${q.id}: start with the objects, then apply their defining properties.`,
    );
  await button(page, "Skip · find my gaps").click();
  if (qi === 0) {
    const switches = page.locator(".term-checklist [role=switch]");
    for (let i = 0; i < (await switches.count()); i++)
      assert.equal(await switches.nth(i).getAttribute("aria-checked"), "false");
    for (const name of report.ground) {
      const sw = page.getByRole("switch", {
        name: `Understanding of ${name}`,
        exact: true,
      });
      if (await sw.count()) await sw.click();
    }
  }
  // A simulated forgetting event is explicitly declared by the learner.
  let lapse;
  if (qi > 0 && qi % 7 === 0) {
    const snap = await state(page);
    lapse = q.terms.find((n) => snap.checks[n] === "know");
    if (lapse)
      await page
        .getByRole("switch", { name: `Understanding of ${lapse}`, exact: true })
        .click();
  }
  await button(page, "Build my shortest route").click();
  await page.waitForFunction((key) =>
    ["route", "retest", "ready"].includes(
      JSON.parse(localStorage.getItem(key)).flow.phase,
    ),
    meta.storageKey,
  );
  let snapshot = await state(page),
    notes = snapshot.plan.length,
    recalls = 0;
  let guard = 0;
  while (["route", "review", "retest"].includes(snapshot.flow.phase)) {
    if (++guard > 450) throw Error("Unexpected study loop " + q.id);
    if (["route", "review"].includes(snapshot.flow.phase)) {
      const name = snapshot.plan[snapshot.flow.readIndex];
      await page
        .waitForFunction(
          (expected) =>
            document.querySelector(".concept-note h2")?.textContent ===
            expected,
          name,
        )
        .catch(async (err) => {
          console.log(
            "Expected note:",
            name,
            "snapshot:",
            JSON.stringify(snapshot.flow),
            "current:",
            JSON.stringify((await state(page)).flow),
            "visible:",
            await page.locator(".concept-note h2").allTextContents(),
          );
          await page.screenshot({
            path: "artifacts/learner-failure.png",
            fullPage: true,
          });
          throw err;
        });
      assert((await page.locator(".concept-note").innerText()).includes(name));
      if (qi === 0 && snapshot.flow.readIndex === 0)
        await page.screenshot({ path: "artifacts/learner-first-route.png" });
      await page
        .locator(".route-reading-actions")
        .getByRole("button", { name: "Self-check", exact: true })
        .click();
      await answer(page, byName[name].check);
      await button(
        page,
        snapshot.flow.readIndex + 1 < snapshot.plan.length
          ? "Next concept"
          : "Retest my gaps",
      ).click();
    } else {
      const name = snapshot.flow.idk[snapshot.flow.retestIndex];
      const fail = qi === 0 && recalls === 0;
      await answer(page, byName[name].check, { retest: true, correct: !fail });
      recalls++;
      await button(
        page,
        snapshot.flow.retestIndex + 1 < snapshot.flow.idk.length
          ? "Next gap"
          : "Finish recall check",
      ).click();
    }
    // Next note deliberately pauses, travels, and scrolls before committing.
    // Wait for the user-visible journey to finish before sampling persistence.
    await page.waitForFunction(
      () => !document.querySelector(".study-body")?.dataset.journey,
    );
    await page.waitForFunction((before) => {
      const current = JSON.parse(localStorage.getItem(before.storageKey)).flow;
      return (
        current.phase !== before.phase ||
        current.readIndex !== before.readIndex ||
        current.retestIndex !== before.retestIndex
      );
    }, { ...snapshot.flow, storageKey: meta.storageKey });
    snapshot = await state(page);
  }
  assert.equal(snapshot.flow.phase, "ready");
  await button(page, "I’m ready · unlock the solution").click();
  await unlock(page, q, { missFirst: qi % 5 === 0 });
  runs.push({
    question: q.id,
    notes,
    recalls,
    lapse: lapse || null,
    unlocked: q.solutionBlocks.length,
    verifiedFullAnswer: true,
  });
  console.log(
    `FINISHED ${q.id}: ${notes} route notes, ${recalls} recall checks, ${q.solutionBlocks.length} solution steps.`,
  );
  if (q.section === "C")
    await page.screenshot({ path: `artifacts/learner-${q.id}.png` });
  await button(
    page,
    qi === questions.length - 1 ? "See my progress" : "Next question",
  ).click();
}
const final = await state(page);
assert.equal(final.completed.length, questions.length);
assert.deepEqual(errors, []);
await page.screenshot({
  path: "artifacts/learner-complete-progress.png",
  fullPage: true,
});
fs.writeFileSync(
  "artifacts/learner-audit.json",
  JSON.stringify(
    {
      browser: await browser.version(),
      model:
        "Fictional school-maths learner; notes plus recall; declared lapses every seventh question; wrong solution check every fifth question.",
      runs,
      completed: final.completed.length,
      read: final.read.length,
      known: Object.values(final.statuses).filter((s) => s === "known").length,
      history: final.history.length,
      errors,
      limitations:
        "UI simulation does not measure human understanding, memory or exam marks.",
    },
    null,
    2,
  ),
);
await browser.close();
console.log(
  "PASS: 32/32 full learner journeys in Google Chrome for Testing; mistakes, remediation, reuse and complete solution unlocking.",
);
