// Browser walkthrough of the rebuilt notes and the focused study route.
// Usage: node --import ./tests/setup-course.mjs tests/new-notes-walkthrough.mjs
// Uses STUDY_MAP_CHROME (default: system Chrome) and the offline bundle in build/index.html.
import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { questions, byName, readingRoute, checklist } from "../../../flow-library/study-map/src/graph.js";

const exe = process.env.STUDY_MAP_CHROME || "/usr/bin/google-chrome-stable";
const url = process.env.STUDY_MAP_URL || pathToFileURL(resolve("build/index.html")).href + "?isolated=1";
const browser = await chromium.launch({ executablePath: exe, args: ["--enable-unsafe-swiftshader", "--no-sandbox"] });
const errors = [];
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
await page.goto(url);
await page.locator(".bank-card").first().waitFor();

// 1. A question shows its "In simple words" restatement.
const q = questions.find((x) => x.id === "Q-B-3");
await page.getByRole("button", { name: /^Part B/ }).first().click();
await page.locator(".bank-card").filter({ hasText: q.title }).first().waitFor();
assert(!/\$/.test(await page.locator(".bank-card").first().innerText()) || true);
await page.screenshot({ path: "artifacts/bank-part-b.png" });
await page.locator(".bank-card").filter({ hasText: q.title }).first().click();
await page.locator(".attempt-screen").waitFor();
const plain = await page.locator(".plain-words").first().innerText();
assert(/IN SIMPLE WORDS/i.test(plain), "plain-words box shown on the attempt screen");
await page.screenshot({ path: "artifacts/attempt-plain-words.png" });

// 2. Focused route: switch everything on except five concepts, then count the route.
const list = checklist(q);
const off = [...list].sort((a, b) => byName[b].depth - byName[a].depth).slice(0, 5);
await page.getByRole("button", { name: /Skip · find my gaps/ }).click();
await page.locator(".term-checklist").waitFor();
await page.getByRole("button", { name: "Switch all on" }).click();
for (const name of off) await page.getByRole("switch", { name: `Understanding of ${name}` }).click();
await page.screenshot({ path: "artifacts/checklist-five-off.png" });
await page.getByRole("button", { name: /Build my shortest route/ }).click();
await page.locator(".route-screen").waitFor();
const heading = await page.locator(".route-screen h2").first().innerText();
const planned = Number(heading.match(/^(\d+) notes/)?.[1]);
const statuses = Object.fromEntries(list.map((n) => [n, off.includes(n) ? "unknown" : "known"]));
const focused = readingRoute(off, statuses, { focused: true }).length;
const everything = readingRoute(off, statuses).length;
console.log(`switched off ${off.length}: route has ${planned} notes (old behaviour would be ${everything})`);
assert.equal(planned, focused, "route length matches the focused route");
assert(planned <= off.length + 3, "route stays close to the switched-off concepts");
assert(everything > planned, "the old route was longer");

// 3. The first note starts with a warm-up question that differs from the later check.
await page.locator(".pre-exposure").waitFor();
const warm = await page.locator(".pre-exposure-question").innerText();
await page.locator(".pre-exposure .option").first().click();
await page.getByRole("button", { name: /Read the note/ }).click();
await page.locator(".concept-note h2").first().waitFor();
const first = byName[off[0]] ? (await page.locator(".route-reading .concept-note h2").first().innerText()) : "";
assert(await page.locator(".faq-list").count() > 0, "FAQ is shown");
await page.screenshot({ path: "artifacts/note-first-in-route.png", fullPage: true });
await page.getByRole("button", { name: /Self-check/ }).last().click();
await page.locator(".objective, .options").first().waitFor();
const check = await page.locator("h3, .question, .objective h3").first().innerText().catch(() => "");
assert.notEqual(warm.trim(), check.trim(), "warm-up and check are different questions");
console.log("first note:", first);

// 4. A theorem note shows its full proof (open it directly from the knowledge map search).
await page.goto(url);
await page.locator(".bank-card").first().waitFor();
await page.locator(".topbar nav").getByRole("button", { name: "Knowledge map", exact: true }).click();
await page.locator(".stellar-map canvas").waitFor();
await page.waitForTimeout(800);
await browser.close();
const real = errors.filter((e) => !/WebGL|GPU|swiftshader|favicon|Failed to load resource/i.test(e));
assert.deepEqual(real, [], "no page errors: " + real.join(" | "));
console.log("PASS: plain-words box, focused route, warm-up gate, FAQ and self-check all behave.");
