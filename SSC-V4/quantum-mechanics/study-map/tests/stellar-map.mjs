import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";

const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
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
} finally {
  await browser.close();
}
