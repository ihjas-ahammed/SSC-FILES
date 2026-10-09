import { archiveSession } from "../../../flow-library/study-map/src/lib/sessionArchive.js";
import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { normalizeProgress } from "../../../flow-library/study-map/src/lib/progressState.js";
import { bookmarkMarkdown } from "../../../flow-library/study-map/src/lib/bookmarks.js";
import { button, state } from "./study-helpers.mjs";
const sample = normalizeProgress({
  bookmarks: [
    "Scalar",
    { name: "Vector", note: "My memory cue" },
    "Scalar",
    "fake",
  ],
});
assert.deepEqual(
  sample.bookmarks.map((b) => b.name),
  ["Scalar", "Vector"],
);
assert(
  bookmarkMarkdown(sample.bookmarks).indexOf("1. Scalar") <
    bookmarkMarkdown(sample.bookmarks).indexOf("2. Vector"),
);
assert(bookmarkMarkdown(sample.bookmarks).includes("My memory cue"));
const archived = archiveSession(
  { flow: { examDraft: "My previous written answer" } },
  { phase: "hints", attempt: "" },
  [],
  {},
);
assert.equal(archived.flow.examDraft, "My previous written answer");
assert.equal(
  archiveSession(
    archived,
    { phase: "answer", examDraft: "My new written answer" },
    [],
    {},
  ).flow.examDraft,
  "My new written answer",
);
const base =
  process.env.STUDY_MAP_URL ||
  "http://127.0.0.1:5174/phy/quantum-mechanics/study-map/module-3/";
const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});
try {
  for (const width of [1440, 390, 320]) {
    const ctx = await browser.newContext({
      viewport: { width, height: 900 },
      hasTouch: width < 500,
      isMobile: width < 500,
      reducedMotion: "reduce",
    });
    await ctx.addInitScript(() => {
      if (!localStorage.getItem("quantum-atlas-v1"))
        localStorage.setItem(
          "quantum-atlas-v1",
          JSON.stringify({
            statuses: { Scalar: "known" },
            read: ["Scalar"],
            completed: ["Q-A-2"],
            questionId: "Q-A-1",
            preferences: { animations: false },
            flow: {
              questionId: "Q-A-1",
              phase: "unlock",
              unlockIndex: 2,
              unlocked: [0, 1],
            },
          }),
        );
    });
    const p = await ctx.newPage(),
      errors = [];
    p.on("pageerror", (e) => errors.push(e.message));
    await p.goto(base, { waitUntil: "domcontentloaded" });
    await p.locator(".bank-card").first().waitFor();
    assert.equal(await p.locator(".resume-card").count(), 0);
    await button(p, "Study Q-A-1").click();
    await p.getByRole("textbox", { name: "Your answer attempt" }).waitFor();
    assert.equal((await state(p)).flow.phase, "attempt");
    assert((await state(p)).completed.includes("Q-A-2"));
    assert.equal((await state(p)).statuses.Scalar, "known");
    await p
      .getByRole("textbox", { name: "Your answer attempt" })
      .fill("My first thought");
    await button(p, "Try guided steps").click();
    await p.locator(".objective").waitFor();
    await p.evaluate(() =>
      document.dispatchEvent(new Event("backbutton", { cancelable: true })),
    );
    await p.getByRole("textbox", { name: "Your answer attempt" }).waitFor();
    assert.equal(
      await p
        .getByRole("textbox", { name: "Your answer attempt" })
        .inputValue(),
      "My first thought",
      "Back retains the current attempt",
    );
    await button(p, "Skip · find my gaps").click();
    await p.locator(".term-checklist").waitFor();
    const scalar = p
      .locator(".term-checklist")
      .getByRole("switch", { name: "Understanding of Scalar", exact: true });
    assert.equal(await scalar.getAttribute("aria-checked"), "true");
    await scalar.click();
    await p.waitForFunction(
      () =>
        JSON.parse(localStorage.getItem("quantum-atlas-v1")).statuses.Scalar ===
        "unknown",
    );
    assert.equal(await p.locator(".study-prerequisite-controls").count(), 0);
    await scalar.click();
    await button(p, "Close dialog").click();
    await p.waitForFunction(() => !document.querySelector('[role="dialog"]'));
    await button(p, "Study Q-A-1").click();
    await p.getByRole("textbox", { name: "Your answer attempt" }).waitFor();
    await button(p, "Close dialog").click();
    await p.waitForFunction(() => !document.querySelector('[role="dialog"]'));
    const map =
      width < 500
        ? p
            .locator(".mobile-nav")
            .getByRole("button", { name: "Map", exact: true })
        : p
            .locator(".topbar nav")
            .getByRole("button", { name: "Knowledge map", exact: true });
    await map.click();
    await p.locator(".stellar-map").waitFor();
    const open = async (name) => {
      if (width >= 500) await button(p, "Search and map controls").click();
      else if (
        (await p.locator(".inline-map-tools").getAttribute("open")) === null
      )
        await p.locator(".inline-map-tools > summary").click();
      await p
        .getByRole("textbox", { name: "Search concepts", exact: true })
        .fill(name);
      await p.locator(".star-search-results button").first().click();
      await p
        .locator(
          width >= 500
            ? ".map-note-panel .concept-note h2"
            : ".mobile-stellar-content .concept-note h2",
        )
        .filter({ hasText: new RegExp(`^${name}$`) })
        .waitFor();
      if (width >= 500) {
        await p
          .getByRole("button", { name: "Open focused note window" })
          .click();
      }
      await p
        .locator(
          width >= 500
            ? '[role="dialog"] .concept-note h2'
            : ".mobile-stellar-content .concept-note h2",
        )
        .filter({ hasText: new RegExp(`^${name}$`) })
        .waitFor();
    };
    // Use real star controls; both desktop and mobile display the same note actions.
    await open("Scalar");
    await (width >= 500 ? p.getByRole("dialog") : p)
      .getByRole("button", { name: "Bookmark Scalar", exact: true })
      .click();
    if (width >= 500) {
      await button(p, "Close dialog").click();
      await p.waitForFunction(() => !document.querySelector('[role="dialog"]'));
    }
    await open("Vector");
    await (width >= 500 ? p.getByRole("dialog") : p)
      .getByRole("button", { name: "Bookmark Vector", exact: true })
      .click();
    if (width >= 500) {
      await button(p, "Close dialog").click();
      await p.waitForFunction(() => !document.querySelector('[role="dialog"]'));
    }
    const tab = p
      .locator(width < 500 ? ".topbar-right" : ".topbar nav")
      .getByRole("button", { name: /^Bookmarks/ });
    await tab.click();
    await p.locator(".bookmark-review h2").waitFor();
    assert.deepEqual(await p.locator(".bookmark-list b").allTextContents(), [
      "Scalar",
      "Vector",
    ]);
    assert.equal(await p.locator(".bookmark-review h2").innerText(), "Scalar");
    await p
      .getByRole("textbox", { name: "Revision notes for Scalar" })
      .fill("Scalar: remember a single magnitude.");
    await button(p, "Next bookmarked concept").click();
    assert.equal(await p.locator(".bookmark-review h2").innerText(), "Vector");
    await p.goBack();
    await p
      .getByRole("textbox", { name: "Revision notes for Scalar" })
      .waitFor();
    assert.equal(
      await p
        .getByRole("textbox", { name: "Revision notes for Scalar" })
        .inputValue(),
      "Scalar: remember a single magnitude.",
    );
    assert.equal(
      await p.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      ),
      false,
    );
    await p.reload({ waitUntil: "domcontentloaded" });
    await p.locator(".bank-card").first().waitFor();
    await p
      .locator(".bank-tabs")
      .getByRole("button", { name: /Section B/ })
      .click();
    await button(p, "Study Q-B-1").click();
    await p.getByRole("textbox", { name: "Your answer attempt" }).waitFor();
    await button(p, "Close dialog").click();
    await p.waitForFunction(() => !document.querySelector('[role="dialog"]'));
    assert.equal(
      await p.locator(".bank-card").count(),
      13,
      "Back preserves the bank section",
    );
    await p
      .locator(width < 500 ? ".topbar-right" : ".topbar nav")
      .getByRole("button", { name: /^Bookmarks/ })
      .click();
    await p
      .getByRole("textbox", { name: "Revision notes for Scalar" })
      .waitFor();
    assert.equal(
      await p
        .getByRole("textbox", { name: "Revision notes for Scalar" })
        .inputValue(),
      "Scalar: remember a single magnitude.",
    );
    const downloaded = p.waitForEvent("download");
    await button(p, "Download review notes").click();
    assert((await downloaded).suggestedFilename().endsWith("-bookmarks.pdf"));
    await button(p, "App settings").click();
    const backup = p.waitForEvent("download");
    await button(p, "Back up before resetting").click();
    const savedBackup = JSON.parse(
      fs.readFileSync(await (await backup).path(), "utf8"),
    );
    assert.deepEqual(
      savedBackup.bookmarks.map((b) => b.name),
      ["Scalar", "Vector"],
    );
    assert.equal(
      savedBackup.bookmarks[0].note,
      "Scalar: remember a single magnitude.",
    );
    await button(p, "Close dialog").click();
    await p.waitForFunction(() => !document.querySelector('[role="dialog"]'));

    assert.deepEqual(errors, []);
    await p.screenshot({
      path: `artifacts/bookmarks-${width}.png`,
      fullPage: true,
    });
    await button(p, "App settings").click();
    await button(p, "Reset all progress and settings").click();
    await button(p, "Confirm reset").click();
    await p.locator(".bank-card").first().waitFor();
    await p.waitForFunction(
      () =>
        !JSON.parse(localStorage.getItem("quantum-atlas-v1")).bookmarks.length,
    );
    assert.deepEqual((await state(p)).statuses, {});
    assert.equal(
      await p.evaluate(() => window.history.state.studyMapNavigation.index),
      0,
    );
    console.log(
      `PASS ${width}px: fresh questions, retained progress, prerequisite toggles, browser Back, ordered bookmarks and persisted revision notes.`,
    );
    await ctx.close();
  }
} finally {
  await browser.close();
}
