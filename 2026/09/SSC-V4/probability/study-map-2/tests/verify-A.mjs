// Verifies Part A (events and the axioms): numeric/brute-force checks of every claim,
// plus a structural check of problemsA.js and supportsA.js against the base concept names.
import assert from "node:assert/strict";
import problemsA from "../src/data/problemsA.js";
import supportsA from "../src/data/supportsA.js";
import { strip } from "../src/data/dsl.js";
import { parseKeywords } from "../../../flow-library/study-map/src/lib/keywords.js";
import { linkedNames } from "../../../flow-library/study-map/src/lib/glossary.js";

let n = 0;
const ok = (c, m) => (assert.ok(c, m), n++);

// ---------- structure ----------
const base = ["Sample Space", "Event", "Union, Intersection and Complement", "Disjoint Events", "Axioms of Probability", "Equally Likely Outcomes", "Mathematical Induction", "Summation Notation", "Combination", "Counting Two Ways", "Counting by Cases", "Basic Counting Principle", "Recurrence Relation", "Factorial and Permutations"];
const all = [...supportsA, ...problemsA];
const names = new Set([...base, ...all.map((c) => c.name)]);
ok(names.size === base.length + all.length, "duplicate concept names");
const prompts = new Set();
const groups = new Set(["sets", "axioms", "bounds", "counting", "recursion", "infinite"]);
for (const c of all) {
  ok(groups.has(c.group), `${c.name}: group`);
  ok(c.check.options.length === 3 && c.check.correct === 0, `${c.name}: check`);
  ok(c.pretest && c.pretest.options.length === 3 && c.pretest.correct === 0, `${c.name}: pretest`);
  ok(!prompts.has(c.check.prompt), `${c.name}: duplicate prompt`); prompts.add(c.check.prompt);
  ok(c.prerequisites.length > 0 && c.prerequisites.every((p) => names.has(p) && p !== c.name), `${c.name}: prerequisites`);
  for (const t of [c.linkedFormal, c.meaning, c.example, ...c.faq.map((f) => f.a), c.check.explanation])
    for (const l of linkedNames(t || "")) ok(names.has(l), `${c.name}: broken link [[${l}]]`);
  ok(c.faq.length >= (c.kind === "problem" ? 3 : 2), `${c.name}: faq`);
}
for (const p of problemsA) {
  ok(p.ross.section === "A" && p.ross.page, `${p.name}: ross`);
  ok(p.proof.steps.length >= 4, `${p.name}: steps`);
  for (const s of p.proof.steps) {
    ok(s.check.options.length === 3 && s.check.correct === 0, `${p.name}: step options`);
    ok(names.has(s.check.term), `${p.name}: step term ${s.check.term}`);
    ok(!prompts.has(s.check.prompt), `${p.name}: duplicate step prompt`); prompts.add(s.check.prompt);
    for (const l of linkedNames(s.text + s.check.explanation)) ok(names.has(l), `${p.name}: broken link [[${l}]]`);
  }
  const q = p.question;
  ok(q.faq.length >= 4, `${p.name}: question faq`);
  for (const f of q.faq) for (const l of linkedNames(f.a)) ok(names.has(l), `${p.name}: faq link ${l}`);
  const kws = parseKeywords(q.keywords);
  ok(kws.length >= 16 && kws.length <= 24, `${p.name}: keywords ${kws.length}`);
  ok(new Set(kws.map((k) => k.term)).size === kws.length, `${p.name}: duplicate keywords`);
  ok(kws.every((k) => k.letters >= 3), `${p.name}: keyword too short`);
  ok(q.retryPrompt && q.sourcePageText, `${p.name}: retry/source`);
  ok(!/\$\{/.test(JSON.stringify(p)), `${p.name}: stray template`);
  ok(!strip(p.linkedFormal).includes("[["), `${p.name}: strip`);
}
ok(problemsA.length === 5, "five problems in Part A");

// ---------- numeric checks ----------
let seed = 12345;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
// A random finite probability space on 2^k atoms, events as bitmasks over atoms.
const space = (m) => { const w = Array.from({ length: m }, () => rnd() + 0.01); const t = w.reduce((a, b) => a + b, 0); return w.map((x) => x / t); };
const P = (w, E) => E.reduce((s, x, i) => s + (x ? w[i] : 0), 0);
const evt = (m) => Array.from({ length: m }, () => rnd() < 0.5);
const U = (...Es) => Es[0].map((_, i) => Es.some((E) => E[i]));
const I = (...Es) => Es[0].map((_, i) => Es.every((E) => E[i]));
const C = (E) => E.map((x) => !x);
const near = (a, b) => Math.abs(a - b) < 1e-12;

// T5: disjointification
for (let t = 0; t < 300; t++) {
  const m = 12, k = 1 + Math.floor(rnd() * 6), E = Array.from({ length: k }, () => evt(m));
  const F = E.map((e, j) => I(e, ...E.slice(0, j).map(C)));
  for (let i = 0; i < k; i++) {
    ok(F[i].every((x, a) => !x || E[i][a]), "F_i inside E_i");
    for (let j = i + 1; j < k; j++) ok(I(F[i], F[j]).every((x) => !x), "F disjoint");
  }
  for (let nn = 1; nn <= k; nn++) { const a = U(...F.slice(0, nn)), b = U(...E.slice(0, nn)); ok(a.every((x, i) => x === b[i]), "unions agree"); }
}
// worked example of T5 from the text
{ const E1 = [1, 2, 3], E2 = [2, 3, 4, 5], E3 = [1, 5, 6];
  const diff = (A, ...B) => A.filter((x) => B.every((b) => !b.includes(x)));
  assert.deepEqual(diff(E2, E1), [4, 5]); assert.deepEqual(diff(E3, E1, E2), [6]); n += 2; }

// T10: three-event union formula, and the die example
for (let t = 0; t < 500; t++) {
  const m = 16, w = space(m), E = evt(m), F = evt(m), G = evt(m);
  const lhs = P(w, U(E, F, G));
  const rhs = P(w, E) + P(w, F) + P(w, G) - P(w, I(C(E), F, G)) - P(w, I(E, C(F), G)) - P(w, I(E, F, C(G))) - 2 * P(w, I(E, F, G));
  ok(near(lhs, rhs), "T10");
}
{ const w = Array(6).fill(1 / 6), at = (xs) => [1, 2, 3, 4, 5, 6].map((x) => xs.includes(x));
  const E = at([1, 2, 3, 4]), F = at([3, 4, 5]), G = at([4, 5, 6]);
  ok(near(P(w, I(C(E), F, G)), 1 / 6) && near(P(w, I(E, C(F), G)), 0) && near(P(w, I(E, F, C(G))), 1 / 6) && near(P(w, I(E, F, G)), 1 / 6), "T10 regions");
  ok(near(P(w, U(E, F, G)), 1), "T10 die"); }

// T14: inclusion-exclusion, and the induction step identity
const subsets = (k) => { const out = []; for (let mask = 1; mask < 1 << k; mask++) out.push([...Array(k).keys()].filter((i) => mask >> i & 1)); return out; };
const incl = (w, E) => subsets(E.length).reduce((s, I_) => s + (-1) ** (I_.length + 1) * P(w, I(...I_.map((i) => E[i]))), 0);
for (let t = 0; t < 300; t++) {
  const m = 14, w = space(m), k = 1 + Math.floor(rnd() * 6), E = Array.from({ length: k }, () => evt(m));
  ok(near(P(w, U(...E)), incl(w, E)), `inclusion-exclusion n=${k}`);
  // step: P(A u E_{n+1}) = P(A) + P(E_{n+1}) - P(A E_{n+1}) with A E_{n+1} = U (E_i E_{n+1}), and the hypothesis on those
  if (k >= 2) {
    const A = E.slice(0, k - 1), last = E[k - 1], G = A.map((e) => I(e, last));
    ok(near(P(w, I(U(...A), last)), P(w, U(...G))), "distribution");
    ok(near(P(w, U(...E)), incl(w, A) + P(w, last) - incl(w, G)), "induction step");
  }
}
// signs: terms of size r carry (-1)^(r+1); count of terms 2^n - 1
for (let k = 1; k <= 8; k++) ok(subsets(k).length === 2 ** k - 1, "2^n-1 terms");
{ const w = Array(6).fill(1 / 6), at = (xs) => [1, 2, 3, 4, 5, 6].map((x) => xs.includes(x));
  const E = [at([1, 2]), at([2, 3]), at([3, 4])]; ok(near(incl(w, E), 4 / 6) && near(P(w, U(...E)), 4 / 6), "T14 die example"); }
ok(near(0.5 + 0.4 + 0.3 - (0.2 + 0.1 + 0.1) + 0.05, 0.85), "T14 pretest");

// T16: generalized Bonferroni, and the two-event version
for (let t = 0; t < 500; t++) {
  const m = 14, w = space(m), k = 1 + Math.floor(rnd() * 7), E = Array.from({ length: k }, () => evt(m));
  ok(P(w, I(...E)) >= E.reduce((s, e) => s + P(w, e), 0) - (k - 1) - 1e-12, `Bonferroni n=${k}`);
  if (k >= 2) ok(P(w, I(E[0], E[1])) >= P(w, E[0]) + P(w, E[1]) - 1 - 1e-12, "Bonferroni 2");
}
ok(near(4 * 0.9 - 3, 0.6) && near(0.9 + 0.8 + 0.7 - 2, 0.4), "T16 numbers");
// sharpness: the bound can be attained (E_i = complement-disjoint pieces), e.g. each P(E_i)=0.9 on 10 equal atoms, E_i misses atom i
{ const w = Array(10).fill(0.1), E = Array.from({ length: 4 }, (_, i) => w.map((_, a) => a !== i));
  ok(near(P(w, I(...E)), 4 * 0.9 - 3), "T16 sharp"); }

// ST14: Boole's inequality (finite truncations of the argument), and the die example
for (let t = 0; t < 500; t++) {
  const m = 14, w = space(m), k = 1 + Math.floor(rnd() * 8), A = Array.from({ length: k }, () => evt(m));
  ok(P(w, U(...A)) <= A.reduce((s, a) => s + P(w, a), 0) + 1e-12, "Boole");
  const F = A.map((a, j) => I(a, ...A.slice(0, j).map(C)));
  ok(near(P(w, U(...A)), F.reduce((s, f) => s + P(w, f), 0)), "sum of disjoint pieces");
  ok(F.every((f, i) => P(w, f) <= P(w, A[i]) + 1e-12), "P(F_i) <= P(A_i)");
}
{ const w = Array(6).fill(1 / 6), at = (xs) => [1, 2, 3, 4, 5, 6].map((x) => xs.includes(x));
  const A = [at([1, 2]), at([2, 3]), at([3, 4])], F = A.map((a, j) => I(a, ...A.slice(0, j).map(C)));
  ok(near(P(w, F[0]), 2 / 6) && near(P(w, F[1]), 1 / 6) && near(P(w, F[2]), 1 / 6), "Boole die example");
  ok(near(P(w, U(...A)), 4 / 6) && A.reduce((s, a) => s + P(w, a), 0) > 4 / 6, "Boole die example union"); }
// geometric example: disjoint events with P = (1/2)^i, (1/3)^i sum
ok(near(Array.from({ length: 200 }, (_, i) => 0.5 ** (i + 1)).reduce((a, b) => a + b, 0), 1), "geometric 1/2");
ok(near(Array.from({ length: 200 }, (_, i) => (1 / 3) ** (i + 1)).reduce((a, b) => a + b, 0), 0.5), "geometric 1/3");
// supports: two-event union, complement, monotonicity, partition
for (let t = 0; t < 300; t++) {
  const m = 12, w = space(m), E = evt(m), F = evt(m);
  ok(near(P(w, U(E, F)), P(w, E) + P(w, F) - P(w, I(E, F))), "two-event union");
  ok(near(P(w, C(E)), 1 - P(w, E)), "complement");
  ok(near(P(w, E), P(w, I(E, F)) + P(w, I(E, C(F)))), "partition");
  ok(P(w, I(E, F)) <= P(w, E) + 1e-12, "monotone");
}
console.log(`verify-A: ${n} checks passed (${supportsA.length} ideas, ${problemsA.length} problems)`);
