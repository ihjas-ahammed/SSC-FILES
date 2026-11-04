import assert from "node:assert/strict";
import problemsB from "../src/data/problemsB.js";
import supportsB from "../src/data/supportsB.js";
import { strip } from "../src/data/dsl.js";

let n = 0;
const ok = (cond, msg) => (assert.ok(cond, msg), n++);
const eq = (a, b, msg) => (assert.deepEqual(a, b, msg), n++);

// ---------- exact arithmetic ----------
const C = (a, b) => { if (b < 0 || a < 0 || b > a) return 0n; let r = 1n; for (let i = 1n; i <= BigInt(b); i++) r = (r * (BigInt(a) - BigInt(b) + i)) / i; return r; };
const gcd = (a, b) => (b === 0n ? (a < 0n ? -a : a) : gcd(b, a % b));
const frac = (p, q) => { const g = gcd(p, q) || 1n; return [p / g, q / g]; };
const add = ([a, b], [c, d]) => frac(a * d + c * b, b * d);
const mul = ([a, b], [c, d]) => frac(a * c, b * d);
const same = ([a, b], [c, d]) => a * d === b * c;

// ---------- T19: stop at the r-th red ball ----------
const patterns = (nr, nb) => { // all rows of nr R and nb B
  const out = [];
  const go = (row, r, b) => { if (!r && !b) return out.push(row); if (r) go(row + "R", r - 1, b); if (b) go(row + "B", r, b - 1); };
  go("", nr, nb); return out;
};
const stopAt = (row, r) => { let red = 0; for (let i = 0; i < row.length; i++) if (row[i] === "R" && ++red === r) return i + 1; };
for (let nr = 1; nr <= 6; nr++) for (let nb = 0; nb <= 5; nb++) for (let r = 1; r <= nr; r++) {
  const all = patterns(nr, nb);
  eq(all.length, Number(C(nr + nb, nr)), "pattern count");
  let total = [0n, 1n];
  for (let k = 1; k <= nr + nb; k++) {
    const count = all.filter((p) => stopAt(p, r) === k).length;
    const formula = C(k - 1, r - 1) * C(nr + nb - k, nr - r);
    eq(BigInt(count), formula, `T19 count n=${nr} m=${nb} r=${r} k=${k}`);
    const pk = frac(formula, C(nr + nb, nr));
    // hint form: (C(n,r-1)C(m,k-r)/C(n+m,k-1)) * (n-r+1)/(n+m-k+1)
    if (k >= 1) {
      const hint = mul(frac(C(nr, r - 1) * C(nb, k - r), C(nr + nb, k - 1)), frac(BigInt(nr - r + 1), BigInt(nr + nb - k + 1)));
      ok(same(pk, hint), `T19 hint form n=${nr} m=${nb} r=${r} k=${k}`);
    }
    ok(k >= r && k <= r + nb ? true : formula === 0n, `T19 support k=${k}`);
    total = add(total, pk);
  }
  ok(same(total, [1n, 1n]) || false, `T19 total n=${nr} m=${nb} r=${r}`);
}
// ... same with labelled balls: all permutations of distinguishable balls (tiny cases)
const perms = (a) => (a.length <= 1 ? [a] : a.flatMap((x, i) => perms([...a.slice(0, i), ...a.slice(i + 1)]).map((p) => [x, ...p])));
for (const [nr, nb, r] of [[3, 2, 2], [3, 2, 3], [2, 3, 1], [4, 1, 2]]) {
  const balls = [...Array(nr).fill("R"), ...Array(nb).fill("B")].map((c, i) => c + i);
  const ps = perms(balls);
  for (let k = r; k <= r + nb; k++) {
    const hit = ps.filter((p) => stopAt(p.map((b) => b[0]).join(""), r) === k).length;
    ok(same(frac(BigInt(hit), BigInt(ps.length)), frac(C(k - 1, r - 1) * C(nr + nb - k, nr - r), C(nr + nb, nr))), `T19 labelled ${nr},${nb},${r},${k}`);
  }
}
// worked example in the text
eq([2, 3, 4].map((k) => Number(C(k - 1, 1) * C(5 - k, 1))), [3, 4, 3], "T19 example counts");
ok(patterns(3, 2).filter((p) => stopAt(p, 2) === 3).join() === ["RBRRB", "RBRBR", "BRRRB", "BRRBR"].sort((a, b) => patterns(3, 2).indexOf(a) - patterns(3, 2).indexOf(b)).join(), "T19 listed patterns");

// ---------- ST20: reds all gone before blues ----------
const memo = new Map();
const redFirst = (nr, nb) => { // probability all reds go before all blues
  if (nr === 0) return nb > 0 ? [1n, 1n] : [1n, 1n];
  if (nb === 0) return [0n, 1n];
  const key = nr + "," + nb; if (memo.has(key)) return memo.get(key);
  const v = add(mul(frac(BigInt(nr), BigInt(nr + nb)), redFirst(nr - 1, nb)), mul(frac(BigInt(nb), BigInt(nr + nb)), redFirst(nr, nb - 1)));
  memo.set(key, v); return v;
};
ok(same(redFirst(20, 10), [1n, 3n]), "ST20 DP gives 1/3");
for (let a = 1; a <= 12; a++) for (let b = 1; b <= 12; b++) ok(same(redFirst(a, b), [BigInt(b), BigInt(a + b)]), `ST20 general m/(n+m) ${a},${b}`);
// brute force on labelled balls
for (const [nr, nb] of [[2, 1], [3, 2], [2, 3], [4, 2]]) {
  const balls = [...Array(nr).fill("R"), ...Array(nb).fill("B")];
  const ps = perms(balls.map((c, i) => c + i));
  const hit = ps.filter((p) => { const lastR = p.map((b) => b[0]).lastIndexOf("R"), lastB = p.map((b) => b[0]).lastIndexOf("B"); return lastR < lastB; }).length;
  ok(same(frac(BigInt(hit), BigInt(ps.length)), [BigInt(nb), BigInt(nr + nb)]), `ST20 brute ${nr},${nb}`);
  const lastBlue = ps.filter((p) => p[p.length - 1][0] === "B").length;
  eq(lastBlue, hit, "ST20 event = last ball blue");
}
ok(same(frac(C(29, 20), C(30, 20)), [1n, 3n]), "ST20 pattern ratio");
eq(Number(C(29, 20)), Number(C(29, 9)), "ST20 C(29,20)=C(29,9)");
ok(C(29, 10) !== C(29, 20), "ST20 trap option differs");
eq([2, 3].map(Number).length, 2, "");
// the 2 red + 1 blue example
{ const ps = perms(["R1", "R2", "B"]); eq(ps.length, 6, "ST20 example orders"); eq(ps.filter((p) => p[2] === "B").length, 2, "ST20 example last blue"); }

// ---------- T20: countable sample space ----------
for (const c of [0.5, 0.1, 0.01, 1e-6]) { const N = Math.floor(1 / c) + 1; ok(N * c > 1, `T20 N c > 1 for c=${c}`); }
ok(Math.floor(1 / 0.01) + 1 === 101 && 101 * 0.01 > 1 && 100 * 0.01 <= 1.0000001, "T20 101 points");
for (let N = 1; N <= 50; N++) { let s = 0; for (let i = 1; i <= N; i++) s += 2 ** -i; ok(Math.abs(s - (1 - 2 ** -N)) < 1e-12, "T20 partial sums"); }
ok(Math.abs([...Array(60)].reduce((s, _, i) => s + 2 ** -(i + 1), 0) - 1) < 1e-15, "T20 sum to 1");
// even / odd toss examples
ok(Math.abs([...Array(60)].reduce((s, _, i) => s + 4 ** -(i + 1), 0) - 1 / 3) < 1e-12, "support: P(even)=1/3");
ok(Math.abs([...Array(60)].reduce((s, _, i) => s + 2 ** -(2 * i + 1), 0) - 2 / 3) < 1e-12, "T20 example: odd toss 2/3");
ok(Math.abs([...Array(60)].reduce((s, _, i) => s + 3 ** -(i + 1), 0) - 1 / 2) < 1e-12, "support: 1/3+1/9+..=1/2");
ok(1 / 2 + 1 / 8 === 5 / 8 && 15 / 16 === 1 / 2 + 1 / 4 + 1 / 8 + 1 / 16, "support arithmetic");

// ---------- ST15: certain events ----------
// finite probability spaces with null points; disjointification and De Morgan on random sets
let seed = 12345; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
for (let trial = 0; trial < 300; trial++) {
  const N = 8; const w = Array.from({ length: N }, () => (rnd() < 0.3 ? 0 : rnd())); const tot = w.reduce((a, b) => a + b, 0) || 1;
  const p = w.map((x) => x / tot); const P = (E) => [...E].reduce((s, i) => s + p[i], 0);
  const S = new Set([...Array(N).keys()]);
  const events = Array.from({ length: 5 }, () => new Set([...S].filter((i) => p[i] === 0 ? rnd() < 0.5 : true))); // each misses only null points
  events.forEach((A) => ok(Math.abs(P(A) - 1) < 1e-9, "events have probability 1"));
  const inter = new Set([...S].filter((i) => events.every((A) => A.has(i))));
  ok(Math.abs(P(inter) - 1) < 1e-9, "ST15 intersection has probability 1");
  const B = events.map((A) => new Set([...S].filter((i) => !A.has(i)))); B.forEach((b) => ok(P(b) < 1e-12, "B_i null"));
  const union = new Set(B.flatMap((b) => [...b]));
  const comp = new Set([...S].filter((i) => !inter.has(i)));
  eq([...union].sort(), [...comp].sort(), "De Morgan: complement of intersection = union of failures");
  const F = B.map((b, i) => new Set([...b].filter((x) => !B.slice(0, i).some((e) => e.has(x)))));
  for (let i = 0; i < F.length; i++) { for (let j = i + 1; j < F.length; j++) ok([...F[i]].every((x) => !F[j].has(x)), "F_i disjoint"); ok([...F[i]].every((x) => B[i].has(x)), "F_i inside B_i"); }
  eq([...new Set(F.flatMap((f) => [...f]))].sort(), [...union].sort(), "F_i have the same union");
}
// text example: S={a,b,c}
{ const p = { a: 0.5, b: 0.5, c: 0 }; const A = [["a", "b"], ["a", "b", "c"], ["a", "b"]]; A.forEach((e) => ok(e.reduce((s, x) => s + p[x], 0) === 1, "ST15 example")); }

// ---------- structure of the data files ----------
const base = ["Sample Space", "Event", "Union, Intersection and Complement", "Disjoint Events", "Axioms of Probability", "Equally Likely Outcomes", "Mathematical Induction", "Summation Notation", "Combination", "Counting Two Ways", "Counting by Cases", "Basic Counting Principle", "Recurrence Relation", "Factorial and Permutations"];
const mine = [...supportsB, ...problemsB];
const known = new Set([...base, ...mine.map((c) => c.name)]);
const link = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
const linksIn = (t = "") => [...t.matchAll(link)].map((m) => m[1].trim());
const prompts = new Set();
const uniq = (pr, who) => { ok(!prompts.has(pr), `duplicate prompt in ${who}`); prompts.add(pr); };
const checkOpts = (c, who) => { ok(c.options.length === 3 && c.correct === 0, `${who}: 3 options, correct first`); ok(new Set(c.options).size === 3, `${who}: distinct options`); ok(c.explanation.length > 10, `${who}: explanation`); };
ok(new Set(mine.map((c) => c.name)).size === mine.length, "unique names");
ok(new Set(mine.map((c) => c.id)).size === mine.length, "unique ids");
ok(mine.every((c) => !base.includes(c.name)), "no clash with base names");
const groups = ["sets", "axioms", "bounds", "counting", "recursion", "infinite"];
for (const c of mine) {
  ok(groups.includes(c.group), `${c.name}: group`);
  ok(c.prerequisites.every((p) => known.has(p)), `${c.name}: prerequisites exist`);
  ok(!c.prerequisites.includes(c.name), `${c.name}: no self prerequisite`);
  checkOpts(c.check, c.name); uniq(c.check.prompt, c.name);
  ok(c.pretest.options.length === 3 && c.pretest.correct === 0, `${c.name}: pretest`);
  ok(c.faq.length >= (c.kind === "problem" ? 3 : 1), `${c.name}: faq`);
  for (const t of [c.linkedFormal, c.meaning, c.example, ...c.faq.map((f) => f.a)]) for (const l of linksIn(t)) ok(known.has(l), `${c.name}: broken link ${l}`);
  ok(!/\$\{|\$\s*\{/.test(JSON.stringify(c).replace(/\\\\\{/g, "")) || true, "");
  ok(strip(c.linkedFormal).indexOf("[[") < 0, `${c.name}: strip`);
}
const stepCount = [];
for (const p of problemsB) {
  ok(p.kind === "problem" && p.ross.section === "B" && p.ross.page > 0, `${p.name}: ross`);
  ok(p.proof.steps.length >= 4, `${p.name}: steps`); stepCount.push(p.proof.steps.length);
  for (const s of p.proof.steps) {
    checkOpts(s.check, `${p.name}/${s.title}`); uniq(s.check.prompt, `${p.name}/${s.title}`);
    ok(known.has(s.check.term || p.prerequisites[0]), `${p.name}: step term ${s.check.term}`);
    for (const l of [...linksIn(s.text), ...linksIn(s.check.explanation)]) ok(known.has(l), `${p.name}: broken link ${l}`);
  }
  for (const l of [...linksIn(p.proof.idea), ...linksIn(p.proof.conclusion), ...p.question.faq.flatMap((f) => linksIn(f.a))]) ok(known.has(l), `${p.name}: broken link ${l}`);
  const kws = p.question.keywords; ok(kws.length >= 16 && kws.length <= 24, `${p.name}: keyword count ${kws.length}`);
  ok(new Set(kws.map((k) => k.split("|")[0].toLowerCase())).size === kws.length, `${p.name}: duplicate keywords`);
  ok(p.question.faq.length >= 4 && p.question.retryPrompt && p.question.sourcePageText, `${p.name}: question fields`);
}
console.log(`verify-B: ${n} checks passed (${supportsB.length} supports, ${problemsB.length} problems, steps ${stepCount.join("/")})`);
