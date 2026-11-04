import assert from "node:assert/strict";
import { optionsFor, meta } from "../src/graph.js";
export const state = (p) =>
  p.evaluate((key) => JSON.parse(localStorage.getItem(key)), meta.storageKey);
export const button = (p, name) => p.getByRole("button", { name, exact: true });
export async function answer(p, item, { correct = true, retest = false } = {}) {
  assert.equal(
    await p.locator(".option").count(),
    0,
    "Options must be hidden initially",
  );
  await button(p, "Reveal options").click();
  const index = optionsFor(item, retest ? 13 : 0).findIndex(
    (o) => o.correct === correct,
  );
  await p.locator(".option").nth(index).click();
  if (!correct) await p.locator(".feedback.retry").waitFor();
}
export async function unlock(p, q, { missFirst = false } = {}) {
  await button(p, "Start the first checkpoint").click();
  for (let i = 0; i < q.solutionBlocks.length; i++) {
    const item = q.steps[q.solutionBlocks[i].checkIndex];
    if (missFirst && i === 0) {
      await answer(p, item, { correct: false });
      assert.equal(
        await p.locator(".unlocked-line").count(),
        0,
        "Wrong answer must not unlock a step",
      );
      await button(p, "Try this checkpoint again").click();
    }
    await answer(p, item);
    assert.equal(await p.locator(".unlocked-line").count(), i + 1);
    await button(
      p,
      i + 1 === q.solutionBlocks.length
        ? "View the complete formal solution"
        : "Next solution checkpoint",
    ).click();
  }
  await p.locator(".formal-answer").waitFor();
  assert.equal(await p.locator(".formal-answer .katex-error").count(), 0);
  const snapshot = await state(p);
  assert(snapshot.completed.includes(q.id));
  assert.equal(snapshot.flow.unlocked.length, q.solutionBlocks.length);
}
