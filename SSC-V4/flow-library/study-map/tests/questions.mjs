import assert from "node:assert/strict";
import { optionsFor } from "../src/lib/questions.js";

for (const size of [2, 3, 4, 6]) {
  for (let correct = 0; correct < size; correct++) {
    const item = {
      prompt: "Which answer?",
      options: Array.from({ length: size }, (_, i) => `Choice ${i}`),
      correct,
    };
    const original = structuredClone(item);
    for (const salt of [0, 13, 29]) {
      const choices = optionsFor(item, salt);
      assert.equal(choices.length, Math.min(3, size));
      assert.equal(new Set(choices.map((c) => c.text)).size, choices.length);
      assert.deepEqual(
        choices.filter((c) => c.correct).map((c) => c.text),
        [item.options[correct]],
      );
      assert.deepEqual(optionsFor(item, salt), choices);
      assert.deepEqual(item, original);
    }
  }
}
console.log(
  "PASS: 2–3 choices preserve exactly one correct answer for practice, retest and warm-up without changing course data.",
);
