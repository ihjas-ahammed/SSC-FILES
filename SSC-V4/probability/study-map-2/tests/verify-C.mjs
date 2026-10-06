// Brute-force verification of every claim and number in Part C (problemsC.js, supportsC.js),
// plus a structural audit against the base concept names. Throws on the first failure.
import assert from "node:assert/strict";
import problemsC from "../src/data/problemsC.js";
import supportsC from "../src/data/supportsC.js";
import { parseKeywords } from "../../../flow-library/study-map/src/lib/keywords.js";
import { linkedNames } from "../../../flow-library/study-map/src/lib/glossary.js";

let n = 0;
const ok = (cond, msg) => (assert.ok(cond, msg), n++);
const eq = (a, b, msg) => (assert.deepEqual(a, b, msg), n++);

const C = (a, b) => {
  if (b < 0 || a < 0 || b > a) return 0;
  let x = 1;
  for (let i = 1; i <= b; i++) x = (x * (a - b + i)) / i;
  return Math.round(x);
};
const fact = (m) => (m <= 1 ? 1 : m * fact(m - 1));

// ---------- set partitions (restricted growth strings) ----------
// rgs[i] = block index of item i; block indices appear in first-use order.
const partitions = (m) => {
  const out = [];
  const go = (i, rgs, max) => {
    if (i === m) return out.push(rgs.slice());
    for (let b = 0; b <= max + 1; b++) {
      rgs.push(b);
      go(i + 1, rgs, Math.max(max, b));
      rgs.pop();
    }
  };
  go(0, [], -1);
  return out;
};
const blocksOf = (rgs) => Math.max(-1, ...rgs) + 1;

// T_n brute force and the recurrence (T_0 = 1)
const Tbrute = [1];
for (let m = 1; m <= 9; m++) Tbrute[m] = partitions(m).length;
const T = [1];
for (let m = 0; m < 10; m++) {
  let s = 0;
  for (let k = 0; k <= m; k++) s += C(m, k) * T[k];
  T[m + 1] = s;
  if (m >= 1) ok(s === 1 + Array.from({ length: m }, (_, i) => C(m, i + 1) * T[i + 1]).reduce((a, b) => a + b, 0), `T${m + 1} alt form`);
}
for (let m = 0; m <= 9; m++) ok(Tbrute[m] === T[m], `Bell brute vs recurrence ${m}`);
eq(T.slice(1, 11), [1, 2, 5, 15, 52, 203, 877, 4140, 21147, 115975], "T1..T10 as claimed in the text");
ok(T[10] === 115975, "T10");
// block-size counts claimed for n = 4: sizes 4 / 3+1 / 2+2 / 2+1+1 / 1+1+1+1 = 1,4,3,6,1
const shape4 = {};
for (const p of partitions(4)) {
  const sz = [...Array(blocksOf(p)).keys()].map((b) => p.filter((x) => x === b).length).sort((a, b) => b - a).join("+");
  shape4[sz] = (shape4[sz] || 0) + 1;
}
eq(shape4, { "4": 1, "3+1": 4, "2+2": 3, "2+1+1": 6, "1+1+1+1": 1 }, "n=4 shapes");
// n = 3: 1, 3, 1
const by3 = {};
for (const p of partitions(3)) by3[blocksOf(p)] = (by3[blocksOf(p)] || 0) + 1;
eq(by3, { 1: 1, 2: 3, 3: 1 }, "n=3 by blocks");
// special item cases: item n+1 with n-k companions, k left outside
for (let m = 1; m <= 7; m++) {
  const byK = {};
  for (const p of partitions(m + 1)) {
    const special = p[m];
    const companions = p.slice(0, m).filter((x) => x === special).length;
    const k = m - companions;
    byK[k] = (byK[k] || 0) + 1;
  }
  for (let k = 0; k <= m; k++) ok(byK[k] === C(m, k) * T[k], `special-item case n=${m}, k=${k}`);
}
// concrete numbers quoted in the text: n=2 example 1+2+2, n=3 example 1+3+6+5, 5 items, special 5, 2 companions, rest split -> 12
eq([1, C(2, 1) * T[1], C(2, 2) * T[2]], [1, 2, 2], "T3 example");
eq([1, C(3, 1) * T[1], C(3, 2) * T[2], C(3, 3) * T[3]], [1, 3, 6, 5], "T4 example");
ok(C(4, 2) * T[2] === 12, "12 partitions check");
ok(1 + 4 * 1 + 6 * 2 + 4 * 5 + 15 === 52 && 1 + 4 * 1 + 6 * 2 + 4 * 5 + 15 - 1 === 51, "T5 explanation");
ok(1 + 9 * 1 + 36 * 2 + 84 * 5 + 126 * 15 + 126 * 52 + 84 * 203 + 36 * 877 + 9 * 4140 + 21147 === 115975, "T10 expansion as written");
ok(1 + 4 + 3 + 6 + 1 === 15 && 1 + 3 + 1 === 5, "T3, T4 sums");

// ---------- Stirling numbers of the second kind (Self-Test 16) ----------
const S = (k, m) => partitions(m).filter((p) => blocksOf(p) === k).length;
const SS = (k, m) => (m === 0 && k === 0 ? 1 : k === 0 || k > m ? 0 : S(k, m));
for (let m = 1; m <= 8; m++)
  for (let k = 1; k <= m; k++) ok(SS(k, m) === k * SS(k, m - 1) + SS(k - 1, m - 1), `Stirling recurrence ${k},${m}`);
ok(SS(2, 4) === 7 && SS(2, 3) === 3 && SS(1, 3) === 1 && 2 * SS(2, 3) + SS(1, 3) === 7, "T_2(4)=7 example");
ok(SS(2, 3) === 3, "pretest S16: 3 ways");
ok(partitions(3).filter((p) => blocksOf(p) === 2 && p.filter((x) => x === p[0]).length === 1).length === 1, "check S16: {1} a block, 2 blocks, n=3 -> 1");
for (let m = 1; m <= 8; m++) ok(Array.from({ length: m }, (_, i) => SS(i + 1, m)).reduce((a, b) => a + b, 0) === T[m], `sum_k T_k(${m}) = T_${m}`);
ok(SS(1, 5) === 1 && SS(5, 5) === 1, "T_1(n) = T_n(n) = 1");
// the seven partitions of {1,2,3,4} into 2 blocks split as claimed: 1 with item 1 alone, 6 with others
const two4 = partitions(4).filter((p) => blocksOf(p) === 2);
eq([two4.filter((p) => p.filter((x) => x === p[0]).length === 1).length, two4.filter((p) => p.filter((x) => x === p[0]).length > 1).length], [1, 6], "kind A / kind B for n=4,k=2");

// ---------- derangements (Ross T17) ----------
const perms = (m) => {
  if (m === 0) return [[]];
  const out = [];
  for (const p of perms(m - 1)) for (let i = 0; i <= p.length; i++) out.push([...p.slice(0, i), m - 1, ...p.slice(i)]);
  return out;
};
const A = [1, 0];
for (let m = 2; m <= 8; m++) A[m] = perms(m).filter((p) => p.every((h, i) => h !== i)).length;
A[0] = 1; // not used by the recurrence
eq(A.slice(1, 9), [0, 1, 2, 9, 44, 265, 1854, 14833], "A_N brute force");
for (let m = 3; m <= 8; m++) ok(A[m] === (m - 1) * (A[m - 1] + A[m - 2]), `A recurrence N=${m}`);
// the case split: man 1 takes hat j; man j takes hat 1 (A_{N-2}) or not (A_{N-1}); same for every j
for (let m = 3; m <= 8; m++)
  for (let j = 1; j < m; j++) {
    const ds = perms(m).filter((p) => p.every((h, i) => h !== i) && p[0] === j);
    const swap = ds.filter((p) => p[j] === 0).length;
    ok(swap === A[m - 2], `swap case N=${m} j=${j}`);
    ok(ds.length - swap === A[m - 1], `non-swap case N=${m} j=${j}`);
  }
ok(A[3] === 2 && A[4] === 9 && A[5] === 44, "A3,A4,A5");
ok(44 / 120 === 11 / 30, "A5/5! = 11/30 numerically");
ok(Math.abs(44 / 120 - 11 / 30) < 1e-12 && 9 / 24 === 3 / 8, "9/24=3/8 and 11/30");
// pretest and check numbers for T17
ok(perms(3).filter((p) => p.every((h, i) => h !== i)).length === 2, "pretest T17: 2");
ok(perms(3).filter((p) => p[0] === 1 && p[1] !== 1 && p[2] !== 2).length === 1, "check T17: man 1 takes hat 2 -> 1 way");
// the N = 4 example in the text: man 1 takes hat 2; case 1: one way; case 2: exactly (2->3,3->4,4->1) and (2->4,3->1,4->3)
{
  const ds = perms(4).filter((p) => p.every((h, i) => h !== i) && p[0] === 1);
  const case1 = ds.filter((p) => p[1] === 0);
  const case2 = ds.filter((p) => p[1] !== 0).map((p) => p.map((h) => h + 1).join(""));
  eq(case1.length, 1, "case 1 count");
  ok(case2.includes("2341") && case2.includes("2413") && case2.length === 2, "case 2 lists: (1->2,2->3,3->4,4->1) and (1->2,2->4,3->1,4->3)");
}
// pairs over all derangements of 3: only (2,3,1) and (3,1,2) are derangements; the listed check options
ok(perms(3).filter((p) => p.every((h, i) => h !== i)).map((p) => p.map((h) => h + 1).join("")).sort().join() === "231,312", "A3 derangements");
ok([[1, 3, 2], [3, 2, 1]].every((l) => l.some((h, i) => h === i + 1)), "distractors have a match");
ok([[1, 2, 3], [1, 3, 2], [3, 2, 1], [2, 1, 3]].every((l) => l.some((h, i) => h === i + 1)), "other four have a match");
ok(perms(2).filter((p) => p.every((h, i) => h !== i)).length === 1, "pretest derangement support: 1");

// ---------- no two successive heads (Ross T18) ----------
const strings = (len) => Array.from({ length: 2 ** len }, (_, x) => Array.from({ length: len }, (_, i) => (x >> i) & 1));
const good = (s) => s.every((v, i) => !(v === 1 && s[i + 1] === 1));
const f = [];
for (let len = 0; len <= 14; len++) f[len] = strings(len).filter(good).length;
eq(f.slice(0, 11), [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], "f_n values as claimed");
for (let len = 2; len <= 14; len++) ok(f[len] === f[len - 1] + f[len - 2], `f recurrence ${len}`);
for (let len = 2; len <= 12; len++) {
  const g = strings(len).filter(good);
  ok(g.filter((s) => s[0] === 0).length === f[len - 1], `start T ${len}`);
  ok(g.filter((s) => s[0] === 1).length === f[len - 2], `start H ${len}`);
  ok(g.filter((s) => s[0] === 1).every((s) => s[1] === 0), `H forces T ${len}`);
}
ok(f[10] / 1024 === 144 / 1024 && 144 / 1024 === 9 / 64, "P10 = 9/64");
ok(f[3] === 5 && strings(3).filter((s) => good(s) && s[0] === 0).length === 3, "n=3 example and check");
ok(strings(2).filter(good).length === 3, "step 1 check: 3 of 4");
ok(5 / 8 === f[3] / 8, "5/8");
{
  const fib = [1, 2];
  for (let i = 2; i <= 6; i++) fib[i] = fib[i - 1] + fib[i - 2];
  ok(fib[5] === 13 && fib[6] === 21, "support: a_5 = 13");
  const g1 = [1, 1];
  for (let i = 2; i < 10; i++) g1[i] = g1[i - 1] + g1[i - 2];
  eq(g1, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55], "Fibonacci 1,1,2,3,5,... as listed");
  ok(g1[5] + g1[6] === 21, "pretest: 8+13 = 21");
}
ok(Math.abs(144 / 1024 - 0.140625) < 1e-12, "P10 approx 0.14");
// n = 4 listing in the text: T followed by f_3 = 5 strings, HT followed by f_2 = 3 strings
ok(f[4] === 8 && f[3] + f[2] === 8, "n=4 example");

// ---------- runs (Ross T21) ----------
const runsOf = (s) => 1 + s.reduce((c, v, i) => c + (i > 0 && v !== s[i - 1] ? 1 : 0), 0);
// all arrangements of n wins (1) and m losses (0)
const arrangements = (n_, m_) => strings(n_ + m_).filter((s) => s.reduce((a, b) => a + b, 0) === n_);
for (let nn = 1; nn <= 6; nn++)
  for (let mm = 1; mm <= 6; mm++) {
    const arr = arrangements(nn, mm);
    ok(arr.length === C(mm + nn, nn), `total ${nn},${mm}`);
    const count = {};
    for (const s of arr) count[runsOf(s)] = (count[runsOf(s)] || 0) + 1;
    let tot = 0;
    for (let k = 1; k <= nn + mm; k++) {
      const even = 2 * C(mm - 1, k - 1) * C(nn - 1, k - 1);
      const odd = C(mm - 1, k - 1) * C(nn - 1, k) + C(mm - 1, k) * C(nn - 1, k - 1);
      ok((count[2 * k] || 0) === even, `2k runs n=${nn} m=${mm} k=${k}`);
      ok((count[2 * k + 1] || 0) === odd, `2k+1 runs n=${nn} m=${mm} k=${k}`);
      tot += even + odd;
    }
    ok(tot === C(mm + nn, nn), `formulas partition all arrangements n=${nn} m=${mm}`);
    // sub-claims: 2k+1 runs split by starting symbol (start W means k+1 win runs)
    for (let k = 1; k <= 4; k++) {
      const oddRows = arr.filter((s) => runsOf(s) === 2 * k + 1);
      ok(oddRows.filter((s) => s[0] === 1).length === C(nn - 1, k) * C(mm - 1, k - 1), `odd start W n=${nn} m=${mm} k=${k}`);
      ok(oddRows.filter((s) => s[0] === 0).length === C(nn - 1, k - 1) * C(mm - 1, k), `odd start L n=${nn} m=${mm} k=${k}`);
      const evenRows = arr.filter((s) => runsOf(s) === 2 * k);
      ok(evenRows.filter((s) => s[0] === 1).length === C(nn - 1, k - 1) * C(mm - 1, k - 1), `even start W n=${nn} m=${mm} k=${k}`);
      ok(evenRows.filter((s) => s[0] === 0).length === C(nn - 1, k - 1) * C(mm - 1, k - 1), `even start L n=${nn} m=${mm} k=${k}`);
    }
  }
// numbers quoted in the text
{
  const arr = arrangements(2, 2);
  const w = (s) => s.map((v) => (v ? "W" : "L")).join("");
  eq(Object.fromEntries(arr.map((s) => [w(s), runsOf(s)])), { LLWW: 2, LWLW: 4, LWWL: 3, WLLW: 3, WLWL: 4, WWLL: 2 }, "n=m=2 run counts");
  ok(runsOf("WWLWLL".split("").map((c) => +(c === "W"))) === 4, "WWLWLL has 4 runs");
  ok(runsOf("TTHHHT".split("").map((c) => +(c === "H"))) === 3, "TTHHHT has 3 runs");
  ok(runsOf("LWWWLLW".split("").map((c) => +(c === "W"))) === 4, "LWWWLLW has 4 runs");
  ok(runsOf("WWWWLL".split("").map((c) => +(c === "W"))) === 2, "WWWWLL has 2 runs");
  ok(2 * C(1, 1) * C(1, 1) / 6 === 1 / 3, "P{4 runs} = 1/3 for n=m=2");
  const three = arrangements(3, 2).filter((s) => runsOf(s) === 3).map(w).sort();
  eq(three, ["LWWWL", "WLLWW", "WWLLW"], "n=3,m=2, 3 runs");
  ok(C(2, 1) * C(1, 0) + C(1, 1) * C(2, 0) === 3 && C(5, 3) === 10, "example 3 of 10");
}

// ---------- compositions (stars and bars with positive parts) ----------
const comps = (total, parts) =>
  parts === 1 ? (total >= 1 ? [[total]] : []) : Array.from({ length: Math.max(0, total) }, (_, i) => i + 1).flatMap((x) => comps(total - x, parts - 1).map((c) => [x, ...c]));
for (let total = 1; total <= 10; total++)
  for (let parts = 1; parts <= total; parts++) ok(comps(total, parts).length === C(total - 1, parts - 1), `comps ${total},${parts}`);
eq(comps(5, 3).map((c) => c.join("+")).sort(), ["1+1+3", "1+2+2", "1+3+1", "2+1+2", "2+2+1", "3+1+1"], "5 = x1+x2+x3");
ok(comps(4, 2).length === 3 && comps(7, 3).length === 15 && C(7, 2) === 21 && C(7, 3) === 35, "compositions pretest/check");
ok(comps(4, 2).length === 3 && comps(5, 3).length === 6 && C(5, 3) === 10, "T21 step checks: 4 into 2 -> 3; 5 into 3 -> 6");

// ---------- special element trick support ----------
for (let m = 1; m <= 8; m++) ok(2 ** (m - 1) + 2 ** (m - 1) === 2 ** m, "subset split");
ok(2 ** 3 === 8 && C(4, 1) === 4 && C(4, 1) + C(4, 2) === C(5, 2), "special-element support numbers");
// set partition support: {1,2} has 2 partitions; the pretest options
ok(partitions(2).length === 2, "{1,2} has 2 partitions");

// ---------- structural audit of the authored data ----------
const base = [
  "Sample Space", "Event", "Union, Intersection and Complement", "Disjoint Events", "Axioms of Probability", "Equally Likely Outcomes",
  "Mathematical Induction", "Summation Notation", "Combination", "Counting Two Ways", "Counting by Cases", "Basic Counting Principle",
  "Recurrence Relation", "Factorial and Permutations",
];
const allowedGroups = new Set(["sets", "axioms", "bounds", "counting", "recursion", "infinite"]);
const names = new Set([...base, ...supportsC.map((c) => c.name), ...problemsC.map((c) => c.name)]);
ok(names.size === base.length + supportsC.length + problemsC.length, "unique names (no clash with base)");
ok(supportsC.length === 6 && problemsC.length === 5, "counts");
const prompts = new Set();
const ids = new Set();
const checkPrompt = (c, what) => {
  ok(c.options.length === 3 && c.correct === 0, `${what}: three options, right answer first`);
  ok(new Set(c.options).size === 3, `${what}: distinct options`);
  ok(!prompts.has(c.prompt), `${what}: duplicate prompt`);
  prompts.add(c.prompt);
};
const links = (text, what) => {
  for (const l of linkedNames(text || "")) ok(names.has(l), `${what}: broken link [[${l}]]`);
};
for (const c of [...supportsC, ...problemsC]) {
  ok(!ids.has(c.id), `${c.id}: duplicate id`);
  ids.add(c.id);
  ok(allowedGroups.has(c.group), `${c.name}: group`);
  ok(c.prerequisites.every((p) => names.has(p)), `${c.name}: prerequisites exist`);
  ok(!c.prerequisites.includes(c.name), `${c.name}: not its own prerequisite`);
  ok((c.faq || []).length >= (c.kind === "problem" ? 3 : 2), `${c.name}: FAQ`);
  checkPrompt(c.check, c.name);
  ok(c.pretest.options.length === 3 && c.pretest.correct === 0, `${c.name}: pretest`);
  ok(!/\$\{/.test(JSON.stringify(c)), `${c.name}: stray template`);
  for (const t of [c.linkedFormal, c.meaning, c.example, ...(c.faq || []).map((q) => q.a)]) links(t, c.name);
}
// the supports must stay in a DAG that the problems sit on top of
const dep = Object.fromEntries([...supportsC, ...problemsC].map((c) => [c.name, c.prerequisites]));
const seen = {};
const visit = (nm, stack = []) => {
  if (base.includes(nm)) return;
  ok(!stack.includes(nm), `cycle through ${nm}`);
  if (seen[nm]) return;
  seen[nm] = true;
  (dep[nm] || []).forEach((p) => visit(p, [...stack, nm]));
};
Object.keys(dep).forEach((nm) => visit(nm));
for (const p of problemsC) {
  ok(p.kind === "problem" && p.ross && p.ross.section === "C" && p.ross.page > 70, `${p.id}: ross`);
  const kws = parseKeywords(p.question.keywords);
  ok(kws.length >= 16 && kws.length <= 24, `${p.id}: keyword count ${kws.length}`);
  ok(new Set(kws.map((k) => k.term)).size === kws.length, `${p.id}: duplicate keywords`);
  ok(p.question.faq.length >= 4 && p.question.retryPrompt && p.question.sourcePageText, `${p.id}: question fields`);
  ok(p.proof.steps.length >= 4, `${p.id}: steps`);
  for (const s of p.proof.steps) {
    checkPrompt(s.check, `${p.id}/${s.title}`);
    ok(names.has(s.check.term), `${p.id}/${s.title}: term ${s.check.term}`);
    links(s.text, `${p.id}/${s.title}`);
    links(s.check.explanation, `${p.id}/${s.title}`);
  }
  links(p.proof.idea, p.id);
  links(p.proof.conclusion, p.id);
  links(p.proof.example.text, p.id);
  for (const q of p.question.faq) links(q.a, p.id);
  ok(p.statement.length > 40 && p.proof.example.text.length > 40, `${p.id}: statement/example`);
}
// balanced math delimiters: an odd number of $ signs means a broken formula
const dollars = (t) => ((t || "").replace(/\$\$/g, "").match(/\$/g) || []).length;
for (const c of [...supportsC, ...problemsC]) {
  const texts = [c.meaning, c.linkedFormal, c.example, c.pretest.prompt, ...c.pretest.options, c.pretest.explanation, c.check.prompt, ...c.check.options, c.check.explanation, ...(c.faq || []).flatMap((q) => [q.q, q.a])];
  if (c.proof) texts.push(c.statement, c.proof.idea, c.proof.conclusion, c.proof.example.text, ...c.proof.steps.flatMap((s) => [s.text, s.check.prompt, ...s.check.options, s.check.explanation]), ...c.question.faq.flatMap((q) => [q.q, q.a]), c.question.retryPrompt);
  for (const t of texts) ok(dollars(t) % 2 === 0, `${c.name}: odd number of $ in: ${(t || "").slice(0, 80)}`);
}

console.log(`verify-C: ${n} checks passed (${supportsC.length} supports, ${problemsC.length} problems)`);
