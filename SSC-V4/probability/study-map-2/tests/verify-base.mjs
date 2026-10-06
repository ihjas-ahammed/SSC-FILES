import assert from "node:assert/strict";
import base from "../src/data/base.js";
import { linkedNames } from "../../../flow-library/study-map/src/lib/glossary.js";

const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
const C = (n, k) => (k < 0 || k > n ? 0 : fact(n) / (fact(k) * fact(n - k)));
const eq = (a, b, m) => assert.equal(a, b, m);

// sample space / event
eq(2 ** 3, 8, "3 tosses");
eq(6 * 6, 36, "two dice");
eq(["HH", "HT", "TH"].length, 3, "at least one head");
// equally likely
eq([3, 6, 9].length / 10, 0.3, "multiples of 3");
let seven = 0;
for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (i + j === 7) seven++;
eq(seven, 6, "sum 7");
// counting
eq(4 * 3, 12, "outfits");
eq(10 ** 3, 1000, "codes");
eq(fact(4), 24, "books");
eq(5 * 4 * 3, 60, "medals");
eq(fact(5) / fact(2), 60, "medals formula");
eq(C(6, 2), 15, "committee");
eq(C(8, 3), 56, "C(8,3)");
eq(C(5, 2), 10, "C(5,2)");
eq(C(5, 2), C(5, 3), "symmetry");
eq(C(4, 2), 6, "handshakes");
eq((4 * 3) / 2, 6, "handshakes by person");
eq(9 * 10, 90, "two-digit numbers");
eq(12 + 15, 27, "class");
// sums
eq([1, 2, 3].reduce((s, i) => s + 2 * i, 0), 12, "sum 2i");
eq([1, 2, 3, 4].reduce((s, i) => s + i * i, 0), 30, "sum squares");
eq([2, 3, 4, 5].reduce((s, k) => s + k, 0), 14, "sum k");
for (let n = 1; n <= 20; n++) eq((n * (n + 1)) / 2, Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b), "gauss");
// recurrences
const f = [1, 2]; for (let i = 2; i <= 5; i++) f[i] = f[i - 1] + f[i - 2];
eq(f.slice(0, 6).join(), "1,2,3,5,8,13", "f_n");
let a = 3; for (let i = 0; i < 3; i++) a *= 2; eq(a, 24, "doubling");
const b = [0, 1, 3]; for (let i = 3; i <= 5; i++) b[i] = b[i - 1] + b[i - 2];
eq(b[3], 4, "b3"); eq(b[4], 7, "b4"); eq(b[5], 11, "b5");
// axioms
eq(0.3 + 0.5, 0.8, "disjoint sum"); eq(Math.round((1 - 0.35) * 100) / 100, 0.65, "complement");

// structure
const required = ["Sample Space", "Event", "Union, Intersection and Complement", "Disjoint Events", "Axioms of Probability", "Equally Likely Outcomes", "Mathematical Induction", "Summation Notation", "Combination", "Counting Two Ways", "Counting by Cases", "Basic Counting Principle", "Recurrence Relation", "Factorial and Permutations"];
eq(base.map((c) => c.name).sort().join("|"), [...required].sort().join("|"), "names");
const byName = Object.fromEntries(base.map((c) => [c.name, c]));
const prompts = new Set();
const depth = {};
const depthOf = (n, seen = []) => { assert(!seen.includes(n), "cycle " + n); return (depth[n] ??= byName[n].prerequisites.length ? 1 + Math.max(...byName[n].prerequisites.map((p) => depthOf(p, [...seen, n]))) : 1); };
for (const c of base) {
  depthOf(c.name);
  for (const p of c.prerequisites) assert(byName[p], `${c.name}: prerequisite ${p}`);
  for (const t of [c.pretest, c.check]) {
    eq(t.options.length, 3, c.name); eq(t.correct, 0, c.name);
    assert(!prompts.has(t.prompt), `dup prompt ${c.name}`); prompts.add(t.prompt);
  }
  assert(c.faq.length >= 2, `${c.name}: faq`);
  for (const text of [c.linkedFormal, c.meaning, c.example, ...c.faq.map((x) => x.a)])
    for (const l of linkedNames(text || "")) assert(byName[l], `${c.name}: broken link ${l}`);
}
console.log(`verify-base: ok (${base.length} concepts)`);
