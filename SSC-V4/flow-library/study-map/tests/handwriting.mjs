import assert from "node:assert/strict";
import { recognize } from "../src/lib/handwriting.js";

// A fake symbol: one diagonal (or horizontal, for bars) stroke tagged with its label.
const sym = (label, x, y, w, h) => {
  const s = label === "-" ? [{ x, y }, { x: x + w, y }] : [{ x, y }, { x: x + w, y: y + h }];
  s.label = label;
  return s;
};
const classify = (g) => g.strokes[0].label;
const read = (...strokes) => recognize(strokes, classify).latex;

assert.equal(read(sym("2", 0, 0, 20, 40), sym("+", 30, 10, 20, 20), sym("3", 60, 0, 20, 40)), "2+3");
// x squared
assert.equal(read(sym("x", 0, 20, 30, 30), sym("2", 36, 4, 14, 20)), "x^{2}");
// subscript
assert.equal(read(sym("a", 0, 0, 30, 30), sym("i", 36, 24, 14, 20)), "a_{i}");
// fraction n over 2, then +1
assert.equal(
  read(sym("n", 10, 0, 20, 30), sym("-", 0, 40, 40, 0), sym("2", 10, 50, 20, 30), sym("+", 55, 30, 20, 20), sym("1", 85, 20, 12, 40)),
  "\\frac{n}{2}+1",
);
// binomial coefficient: tall brackets around two stacked letters
assert.equal(
  read(sym("(", 0, 0, 12, 100), sym("n", 25, 5, 25, 30), sym("k", 25, 65, 25, 30), sym(")", 70, 0, 12, 100)),
  "\\binom{n}{k}",
);
// n choose k equals n! over k!(n-k)!: shape only, factorial marks are labels here
assert.equal(
  read(sym("(", 0, 0, 12, 100), sym("n", 25, 5, 25, 30), sym("k", 25, 65, 25, 30), sym(")", 70, 0, 12, 100), sym("=", 95, 35, 30, 30)),
  "\\binom{n}{k}=",
);
// sum with limits
assert.equal(
  read(sym("\\sum", 0, 20, 40, 60), sym("n", 8, 90, 20, 18), sym("k", 8, -10, 20, 18), sym("2", 50, 30, 20, 40)),
  "\\sum_{n}^{k}2",
);
console.log("PASS: stroke grouping and 2-D layout (powers, subscripts, fractions, binomials, sums).");
