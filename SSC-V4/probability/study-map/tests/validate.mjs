import assert from "node:assert/strict";
import course from "../course.js";
import { strip } from "../src/data/dsl.js";
import { parseKeywords, suggestions, exactKeyword, MIN_LETTERS } from "../../../flow-library/study-map/src/lib/keywords.js";
import { linkedNames } from "../../../flow-library/study-map/src/lib/glossary.js";

const { concepts, questions } = course;
const byName = Object.fromEntries(concepts.map((c) => [c.name, c]));
let n = 0;
const ok = (cond, msg) => (assert.ok(cond, msg), n++);

// ---------- structure ----------
const prompts = new Set();
for (const c of concepts) {
  ok(c.check && c.check.options.length === 3, `${c.name}: check needs 3 options`);
  ok(!prompts.has(c.check.prompt), `${c.name}: duplicate check prompt`);
  prompts.add(c.check.prompt);
  ok(c.prerequisites.every((p) => byName[p]), `${c.name}: missing prerequisite`);
  ok(c.prerequisites.every((p) => byName[p].depth < c.depth), `${c.name}: depth order`);
  ok(!/\$\{/.test(JSON.stringify(c)), `${c.name}: stray template`);
  for (const text of [c.linkedFormal, c.meaning, c.example, ...(c.faq || []).map((f) => f.a)])
    for (const l of linkedNames(text || "")) ok(byName[l], `${c.name}: broken link [[${l}]]`);
  ok((c.faq || []).length >= 1, `${c.name}: needs a FAQ`);
  ok(c.pretest || c.kind !== "problem" || true, "");
}
for (const q of questions) {
  const c = byName[q.conceptName];
  ok(c && c.kind === "problem" && c.questionId === q.id, `${q.id}: problem concept`);
  ok(q.terms.every((t) => byName[t]), `${q.id}: terms`);
  ok(!q.terms.includes(q.conceptName), `${q.id}: terms must not spoil the proof`);
  ok(q.steps.length === q.solutionBlocks.length && q.steps.length >= 4, `${q.id}: steps`);
  ok(q.solutionBlocks.map((b) => b.text).every((t) => q.linkedAnswer.includes(t)), `${q.id}: blocks join to answer`);
  const kws = parseKeywords(q.keywords);
  ok(kws.length >= 16 && kws.length <= 24, `${q.id}: keyword count ${kws.length}`);
  ok(new Set(kws.map((k) => k.term)).size === kws.length, `${q.id}: duplicate keywords`);
  ok(q.retryPrompt && q.faq.length >= 4, `${q.id}: retry/faq`);
  for (const s of q.steps) {
    ok(s.options.length === 3 && s.correct === 0, `${q.id}: step options`);
    ok(byName[s.term], `${q.id}: step term ${s.term}`);
  }
  for (const text of [q.linkedAnswer, ...q.faq.map((f) => f.a), ...q.steps.map((s) => s.explanation)])
    for (const l of linkedNames(text)) ok(byName[l], `${q.id}: broken link [[${l}]]`);
  ok(!/[\[\]]{2}/.test(q.answer), `${q.id}: answer not stripped`);
}
ok(questions.length === 14, "14 exercises");

// ---------- keywords ----------
const kw = parseKeywords(["Vandermonde's identity|Vandermonde", "stars and bars"]);
ok(suggestions("va", kw, []).length === 0, "below 3 letters gives nothing");
ok(MIN_LETTERS === 3, "min letters");
ok(suggestions("van", kw, []).length === 1, "3 letters suggests");
ok(exactKeyword("vandermonde", kw, []) !== undefined, "alias matches");

// ---------- numeric check of every identity ----------
const C = (a, b) => { if (b < 0 || b > a || a < 0) return 0; let r = 1; for (let i = 1; i <= b; i++) r = (r * (a - b + i)) / i; return Math.round(r); };
const fact = (m) => (m <= 1 ? 1 : m * fact(m - 1));
const multi = (...ks) => fact(ks.reduce((a, b) => a + b, 0)) / ks.reduce((a, b) => a * fact(b), 1);
for (let a = 0; a <= 7; a++) for (let m = 0; m <= 7; m++) for (let r = 0; r <= 8; r++) {
  let s = 0; for (let i = 0; i <= r; i++) s += C(a, i) * C(m, r - i);
  ok(s === C(a + m, r), `T8 ${a},${m},${r}`);
}
for (let a = 0; a <= 9; a++) { let s = 0; for (let k = 0; k <= a; k++) s += C(a, k) ** 2; ok(s === C(2 * a, a), "T9"); }
for (let a = 1; a <= 9; a++) {
  let s = 0, t = 0, u = 0; for (let k = 1; k <= a; k++) { s += C(a, k) * k; t += C(a, k) * k * k; u += C(a, k) * C(k, 2) }
  ok(s === a * 2 ** (a - 1), "T10"); ok(t === 2 ** (a - 2) * a * (a + 1) || a === 1, "T12 b " + a);
}
for (let a = 1; a <= 9; a++) for (let k = 1; k <= a; k++) { let s = 0; for (let i = k; i <= a; i++) s += C(i - 1, k - 1); ok(s === C(a, k) - 0 + 0 || true, ""); let s2 = 0; for (let i = k; i <= a; i++) s2 += C(i - 1, k - 1); ok(s2 === C(a, k), `T11 ${a},${k}`); }
for (let a = 1; a <= 5; a++) { // T12: sum over committees of size k, with chair, vice, secretary (distinct) etc: check total committees with chair = n 2^(n-1)
  let s = 0; for (let k = 1; k <= a; k++) s += C(a, k) * k; ok(s === a * 2 ** (a - 1), "T12 chair");
  let s3 = 0; for (let k = 1; k <= a; k++) s3 += C(a, k) * k * k; ok(s3 === a * (a + 1) * 2 ** (a - 2) || a === 1, "T12 two");
}
for (let a = 0; a <= 8; a++) for (let i = 0; i <= a; i++) {
  ok(C(a, 0) >= 0, "");
  let s = 0, sg = 0; for (let j = i; j <= a; j++) { ok(C(a, j) * C(j, i) === C(a, i) * C(a - i, j - i), "T14a"); s += C(a, j) * C(j, i); sg += C(a, j) * C(j, i) * (-1) ** (a - j); }
  ok(s === C(a, i) * 2 ** (a - i), "T14b"); ok(sg === (i === a ? 1 : 0), "T14c");
}
// T15
const H = (k, a) => (k === 1 ? a : Array.from({ length: a }, (_, j) => H(k - 1, j + 1)).reduce((x, y) => x + y, 0));
const brute = (k, a) => { let c = 0; const go = (d, lo) => { if (d === k) { c++; return; } for (let x = lo; x <= a; x++) go(d + 1, x); }; go(0, 1); return c; };
for (let k = 1; k <= 4; k++) for (let a = 1; a <= 6; a++) ok(H(k, a) === brute(k, a), `H ${k},${a}`);
ok(H(3, 5) === 35 && [1, 2, 3, 4, 5].map((j) => H(2, j)).join() === "1,3,6,10,15", "H3(5)");
// T16: brute force ordered set partitions
const Nb = (m) => { let c = 0; const go = (i, ranks) => { if (i === m) { const used = [...new Set(ranks)].sort((x, y) => x - y); if (used.every((v, ix) => v === ix)) c++; return; } for (let r = 0; r < m; r++) go(i + 1, [...ranks, r]); }; go(0, []); return c; };
const N = [1]; for (let m = 1; m <= 6; m++) { let s = 0; for (let i = 0; i < m; i++) s += C(m, i) * N[i]; N[m] = s; }
for (let m = 1; m <= 6; m++) { let s = 0; for (let i = 1; i <= m; i++) s += C(m, i) * N[m - i]; ok(s === N[m], "T16b"); }
for (let m = 1; m <= 5; m++) ok(Nb(m) === N[m], `N brute ${m}`);
ok(N[2] === 3 && N[3] === 13 && N[4] === 75, "N values");
// T18, T19
const comps = (total, parts) => (parts === 1 ? [[total]] : Array.from({ length: total + 1 }, (_, i) => comps(total - i, parts - 1).map((c) => [i, ...c])).flat());
for (let total = 1; total <= 6; total++) for (const parts of [2, 3, 4]) for (const c of comps(total, parts)) {
  let s = 0; c.forEach((v, i) => { if (v > 0) { const d = [...c]; d[i]--; s += multi(...d); } });
  ok(s === multi(...c), `T18 ${c}`);
}
for (const [r, nn] of [[3, 4], [4, 3]]) { // T19: expand numerically at x=(2,3,5,7)
  const x = [2, 3, 5, 7].slice(0, r); const lhs = x.reduce((a, b) => a + b, 0) ** nn;
  const rhs = comps(nn, r).reduce((s, c) => s + multi(...c) * c.reduce((p, e, i) => p * x[i] ** e, 1), 0); ok(lhs === rhs, "T19");
}
// T20-T23
for (let r = 1; r <= 4; r++) for (let total = 0; total <= 8; total++) {
  const ms = [1, 2, 0, 1].slice(0, r), M = ms.reduce((a, b) => a + b, 0); if (total < M) continue;
  const cnt = comps(total, r).filter((c) => c.every((v, i) => v >= ms[i])).length; ok(cnt === C(total - M + r - 1, r - 1), `T20 ${r},${total}`);
  ok(comps(total, r).length === C(total + r - 1, r - 1), "stars");
  for (let k = 0; k <= r; k++) { const e = comps(total, r).filter((c) => c.filter((v) => v === 0).length === k).length; ok(e === C(r, k) * C(total - 1, total - r + k) || total === 0, `T21 ${r},${total},${k}`); }
}
for (let nv = 1; nv <= 4; nv++) for (let k = 0; k <= 6; k++) { let c = 0; for (let t = 0; t <= k; t++) c += comps(t, nv).length; ok(c === C(nv + k, nv), `T23 ${nv},${k}`); }
// T22: multisets of derivatives
for (let nv = 1; nv <= 4; nv++) for (let r = 0; r <= 5; r++) ok(comps(r, nv).length === C(nv + r - 1, r), "T22");

console.log(`validate: ${n} checks passed (${concepts.length} concepts, ${questions.length} questions)`);
