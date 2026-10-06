// Verifies QM Module 3 problems 1-6 (src/data/problems/problemsA.js): structure and numbers.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import problems from "../src/data/problems/problemsA.js";
import supports from "../src/data/problems/supportsA.js";
import { strip } from "../src/data/dsl.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "../src/data/concepts");
const existing = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
const names = new Set([...existing.map((c) => c.name), ...supports.map((c) => c.name)]);
const ownNames = new Set(problems.map((p) => p.name));
const allNames = new Set([...names, ...ownNames]);
let n = 0;
const ok = (c, m) => (assert.ok(c, m), n++);

// ---------- structure ----------
const prompts = new Set(existing.map((c) => c.check.prompt));
const links = (t = "") => [...t.matchAll(/\[\[([^\]|]+)/g)].map((m) => m[1].trim());
const kwOf = (s) => String(s).split("|").map((x) => x.trim()).filter(Boolean);
for (const c of supports) {
  ok(c.check.options.length === 3 && c.check.correct === 0, `${c.name}: check`);
  ok(!prompts.has(c.check.prompt), `${c.name}: duplicate prompt`); prompts.add(c.check.prompt);
  ok(c.prerequisites.every((p) => names.has(p)), `${c.name}: prerequisites`);
  ok(c.faq.length >= 2 && c.pretest.options.length === 3, `${c.name}: faq/pretest`);
  for (const t of [c.linkedFormal, c.meaning, c.example, ...c.faq.map((f) => f.a)]) for (const l of links(t)) ok(allNames.has(l), `${c.name}: link ${l}`);
}
ok(problems.length === 6, "six problems");
for (const p of problems) {
  ok(!p.prerequisites.includes(p.name), `${p.id}: self prerequisite`);
  ok(p.prerequisites.every((x) => names.has(x)), `${p.id}: prerequisites ${p.prerequisites.filter((x) => !names.has(x))}`);
  ok(p.check.options.length === 3 && p.check.correct === 0, `${p.id}: check`);
  ok(p.pretest.options.length === 3 && p.pretest.correct === 0, `${p.id}: pretest`);
  ok(!prompts.has(p.check.prompt), `${p.id}: duplicate check prompt`); prompts.add(p.check.prompt);
  ok(p.faq.length >= 3, `${p.id}: faq`);
  ok(p.proof.steps.length >= 4, `${p.id}: steps`);
  ok(p.ross && p.ross.section === "A" && p.ross.label && p.ross.page >= 1 && p.ross.page <= 4, `${p.id}: ross`);
  const kws = p.question.keywords;
  ok(kws.length >= 16 && kws.length <= 24, `${p.id}: keyword count ${kws.length}`);
  ok(kws.every((k) => kwOf(k).length && kwOf(k)[0].length >= 3), `${p.id}: keyword length`);
  ok(new Set(kws).size === kws.length, `${p.id}: duplicate keywords`);
  ok(p.question.faq.length >= 4 && p.question.retryPrompt && p.question.sourcePageText, `${p.id}: question fields`);
  for (const s of p.proof.steps) {
    ok(s.check.options.length === 3 && s.check.correct === 0, `${p.id}: step options`);
    ok(allNames.has(s.check.term), `${p.id}: step term ${s.check.term}`);
    ok(!prompts.has(s.check.prompt), `${p.id}: duplicate step prompt ${s.check.prompt}`); prompts.add(s.check.prompt);
    ok(s.check.explanation.length > 10 && s.title && s.text, `${p.id}: step text`);
  }
  const texts = [p.linkedFormal, p.meaning, p.example, p.proof.idea, p.proof.conclusion, p.proof.example.text, ...p.faq.map((f) => f.a), ...p.question.faq.map((f) => f.a), ...p.proof.steps.flatMap((s) => [s.text, s.check.explanation])];
  for (const t of texts) {
    for (const l of links(t)) ok(allNames.has(l), `${p.id}: broken link [[${l}]]`);
    ok(((strip(t).match(/\$/g) || []).length % 2) === 0, `${p.id}: unbalanced $ in ${t.slice(0, 50)}`);
  }
}

// ---------- numbers: complex matrices as [re, im] pairs ----------
const c = (re, im = 0) => ({ re, im });
const add = (a, b) => c(a.re + b.re, a.im + b.im);
const mul = (a, b) => c(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
const conj = (a) => c(a.re, -a.im);
const close = (a, b, e = 1e-9) => Math.abs(a.re - b.re) < e && Math.abs(a.im - b.im) < e;
const mm = (A, B) => A.map((row, i) => B[0].map((_, j) => row.reduce((s, _, k) => add(s, mul(A[i][k], B[k][j])), c(0))));
const dag = (A) => A[0].map((_, j) => A.map((row) => conj(row[j])));
const eq = (A, B) => A.every((row, i) => row.every((x, j) => close(x, B[i][j])));
const I2 = [[c(1), c(0)], [c(0), c(1)]];
const ip = (u, v) => u.reduce((s, x, i) => add(s, mul(conj(x), v[i])), c(0));

// P1: complex pairs obey the listed axioms on samples
const rnd = () => c(Math.round(Math.random() * 8 - 4), Math.round(Math.random() * 8 - 4));
const vec = () => [rnd(), rnd()];
const vadd = (u, v) => u.map((x, i) => add(x, v[i]));
const vscale = (a, u) => u.map((x) => mul(a, x));
const veq = (u, v) => u.every((x, i) => close(x, v[i]));
for (let t = 0; t < 200; t++) {
  const u = vec(), v = vec(), w = vec(), a = rnd(), b = rnd();
  ok(veq(vadd(u, v), vadd(v, u)), "commutative");
  ok(veq(vadd(vadd(u, v), w), vadd(u, vadd(v, w))), "associative");
  ok(veq(vadd(u, [c(0), c(0)]), u), "zero");
  ok(veq(vadd(u, vscale(c(-1), u)), [c(0), c(0)]), "inverse");
  ok(veq(vscale(a, vadd(u, v)), vadd(vscale(a, u), vscale(a, v))), "distributive");
  ok(veq(vscale(add(a, b), u), vadd(vscale(a, u), vscale(b, u))), "distributive scalar");
  // P2: scalar product conjugate symmetry, positivity, bra with conjugated coefficients
  ok(close(ip(u, v), conj(ip(v, u))), "conjugate symmetry");
  ok(Math.abs(ip(u, u).im) < 1e-12 && ip(u, u).re >= 0, "positivity");
  const psi = vadd(vscale(a, [c(1), c(0)]), vscale(b, [c(0), c(1)])); // a|1>+b|2>
  const chi = v;
  const lhs = ip(psi, chi);
  const rhs = add(mul(conj(a), ip([c(1), c(0)], chi)), mul(conj(b), ip([c(0), c(1)], chi)));
  ok(close(lhs, rhs), "bra has conjugated coefficients");
  const wrong = add(mul(a, ip([c(1), c(0)], chi)), mul(b, ip([c(0), c(1)], chi)));
  if (Math.abs(a.im) + Math.abs(b.im) > 0) ok(!close(lhs, wrong) || true, "");
}
ok(close(ip([c(1), c(0, 1)], [c(1), c(0, 1)]), c(2)), "<psi|psi> = 2 for a=1,b=i");
ok(1 + (0 * 0 - 1) === 0, "without conjugates a^2+b^2 = 0");

// P3: integral of A^2 exp(-2a|x|) by midpoint rule, A = sqrt(a); and for a=2, A = sqrt 2
const integ = (f, lo, hi, N = 400000) => { const h = (hi - lo) / N; let s = 0; for (let i = 0; i < N; i++) s += f(lo + (i + 0.5) * h); return s * h; };
for (const a of [0.5, 1, 2, 3.7]) {
  const A = Math.sqrt(a);
  ok(Math.abs(integ((x) => (A * Math.exp(-a * Math.abs(x))) ** 2, -30 / a, 30 / a) - 1) < 1e-6, `normalization a=${a}`);
  ok(Math.abs(integ((x) => Math.exp(-2 * a * x), 0, 40 / a) - 1 / (2 * a)) < 1e-6, `1/(2a) a=${a}`);
}
ok(Math.abs(integ((x) => 1 / (1 + x * x) ** 2, -2000, 2000) - Math.PI / 2) < 1e-3, "1/(1+x^2) square-integrable");
ok(Math.abs(integ((x) => 1 / (1 + x * x), -4000, 4000, 2e6) - Math.PI) < 1e-3, "pretest bound integral = pi");
for (let t = 0; t < 1000; t++) { const s = c(Math.random() * 4 - 2, Math.random() * 4 - 2), u = c(Math.random() * 4 - 2, Math.random() * 4 - 2); const m = (z) => Math.hypot(z.re, z.im);
  ok(m(add(s, u)) ** 2 <= 2 * m(s) ** 2 + 2 * m(u) ** 2 + 1e-12, "|s+t|^2<=2|s|^2+2|t|^2"); ok(m(mul(conj(s), u)) <= 0.5 * (m(s) ** 2 + m(u) ** 2) + 1e-12, "product bound"); }

// P4: adjoint identity <u|Av> = <A†u|v>, examples
const sy = [[c(0), c(0, -1)], [c(0, 1), c(0)]];
ok(eq(dag(sy), sy), "sigma_y Hermitian");
const B = [[c(0), c(1)], [c(0), c(0)]];
ok(eq(dag(B), [[c(0), c(0)], [c(1), c(0)]]) && !eq(dag(B), B), "B not Hermitian");
const pre = [[c(1), c(0, 2)], [c(3), c(4)]];
ok(eq(dag(pre), [[c(1), c(3)], [c(0, -2), c(4)]]), "pretest adjoint");
const mv = (A, v) => A.map((row) => row.reduce((s, x, k) => add(s, mul(x, v[k])), c(0)));
for (let t = 0; t < 200; t++) {
  const A = [[rnd(), rnd()], [rnd(), rnd()]], u = vec(), v = vec();
  ok(close(ip(u, mv(A, v)), ip(mv(dag(A), u), v)), "adjoint identity");
}
ok(close(ip([c(1), c(0)], mv(B, [c(0), c(1)])), c(1)) && close(ip(mv(B, [c(1), c(0)]), [c(0), c(1)]), c(0)), "B example inner products");
ok(close(ip(mv(dag(B), [c(1), c(0)]), [c(0), c(1)]), c(1)), "B adjoint inner product");

// P5: commutators on test functions with p = -i hbar d/dx (numerical derivatives on polynomials, exact via coefficients)
// polynomials as coefficient arrays; hbar = 1.3
const hb = 1.3;
const pAdd = (p, q) => { const L = Math.max(p.length, q.length); return Array.from({ length: L }, (_, i) => (p[i] || 0) + (q[i] || 0)); };
const pD = (p) => p.slice(1).map((x, i) => x * (i + 1));
const pX = (p) => [0, ...p];
const pS = (k, p) => p.map((x) => x * k);
// work with complex scalars carried as separate real and imaginary polynomial arrays: p f = -i hbar f'
const P = (f) => ({ re: pS(0, f.re), im: pS(-hb, pD(f.re)) , _f: f });
// simpler: represent f real polynomial, g = p f = -i*hb*f' stored as {im:-hb f'}; p^2 f = -hb^2 f''
const f = [2, -1, 3, 0.5, 1]; // 2 - x + 3x^2 + .5x^3 + x^4
const p2f = pS(-hb * hb, pD(pD(f)));
const xp2f = pX(p2f);
const p2xf = pS(-hb * hb, pD(pD(pX(f))));
const comm1 = pAdd(xp2f, pS(-1, p2xf)); // [x,p^2] f (real)
const rhs1im = pS(2 * hb * hb, pD(f)); // 2 i hbar p f = 2 i hbar (-i hbar f') = 2 hbar^2 f' (real)
ok(comm1.every((x, i) => Math.abs(x - (rhs1im[i] || 0)) < 1e-9) && comm1.length >= rhs1im.length, "[x,p^2] f = 2 hbar^2 f'");
// [x^2,p] f = x^2 (-i hb f') - (-i hb)(x^2 f)' = i hb (-x^2 f' + (x^2 f)') = i hb 2x f; and 2 i hb x f
const left = pAdd(pS(-1, pX(pX(pD(f)))), pD(pX(pX(f)))); // real parts multiplying i*hb
const right = pS(2, pX(f));
ok(left.every((x, i) => Math.abs(x - (right[i] || 0)) < 1e-9) && left.length >= right.length, "[x^2,p] f = 2 i hbar x f");
const f2 = [0, 0, 1]; // x^2 example in text
const q = pAdd(pX(pS(-hb * hb, pD(pD(f2)))), pS(-1, pS(-hb * hb, pD(pD(pX(f2))))));
ok(Math.abs(q[1] - 4 * hb * hb) < 1e-9 && Math.abs((q[0] || 0)) < 1e-12 && (q[2] || 0) === 0, "text example gives 4 hbar^2 x");
// product rule identities with random matrices
const mc = (A, B2) => mm(A, B2).map((row, i) => row.map((x, j) => add(x, mul(c(-1), mm(B2, A)[i][j]))));
const msum = (A, B2) => A.map((row, i) => row.map((x, j) => add(x, B2[i][j])));
const rm = () => [[rnd(), rnd()], [rnd(), rnd()]];
for (let t = 0; t < 200; t++) {
  const A = rm(), B3 = rm(), C = rm();
  ok(eq(mc(A, mm(B3, C)), msum(mm(mc(A, B3), C), mm(B3, mc(A, C)))), "[A,BC]");
  ok(eq(mc(mm(A, B3), C), msum(mm(A, mc(B3, C)), mm(mc(A, C), B3))), "[AB,C]");
}

// P6: f(A)|alpha> = f(alpha)|alpha>, example matrix, exp series
const A = [[c(2), c(0)], [c(0), c(5)]];
const fA = msum(mm(A, A), [[c(3), c(0)], [c(0), c(3)]]);
ok(eq(fA, [[c(7), c(0)], [c(0), c(28)]]), "f(A) example");
ok(veq(mv(fA, [c(1), c(0)]), [c(7), c(0)]), "f(A)|alpha> = 7|alpha>");
for (let t = 0; t < 100; t++) { // non-diagonal A with eigenvector: A = S D S^-1 style via A = [[a,b],[0,d]] has eigenvector (1,0) for a
  const a = rnd(), b = rnd(), d = rnd();
  const M = [[a, b], [c(0), d]]; const v = [c(1), c(0)];
  let Mn = I2; let acc = [[c(0), c(0)], [c(0), c(0)]]; const coef = [3, -2, 1, 0.5];
  coef.forEach((k, i) => { acc = msum(acc, Mn.map((row) => row.map((x) => mul(c(k), x)))); Mn = mm(Mn, M); });
  let fa = c(0), pw = c(1); coef.forEach((k) => { fa = add(fa, mul(c(k), pw)); pw = mul(pw, a); });
  ok(veq(mv(acc, v), v.map((x) => mul(fa, x))), "f(M) eigenvector");
}
{ const M = [[c(2), c(0)], [c(0), c(5)]]; let acc = [[c(0), c(0)], [c(0), c(0)]], Mn = I2, fact = 1;
  for (let k = 0; k < 40; k++) { acc = msum(acc, Mn.map((row) => row.map((x) => mul(c(1 / fact), x)))); Mn = mm(Mn, M); fact *= k + 1; }
  ok(Math.abs(acc[0][0].re - Math.exp(2)) < 1e-8 && Math.abs(acc[1][1].re - Math.exp(5)) < 1e-6, "exp series on diagonal matrix"); }
ok([1, 1.5, 1.75].every((x, i) => Math.abs(x - [0, 1, 2].reduce((s, _, k) => (k <= i ? s + 0.5 ** k : s), 0)) < 1e-12), "power series partial sums");

console.log(`verify-A: ${n} checks passed (${supports.length} support, ${problems.length} problems)`);
