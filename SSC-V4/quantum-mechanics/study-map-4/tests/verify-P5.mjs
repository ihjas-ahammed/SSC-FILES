// Verifies QM Module 4 problems 5-8 (src/data/problems/problemsB.js, supportsP5.js): structure and numbers.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import problems from "../src/data/problems/problemsB.js";
import supports from "../src/data/problems/supportsP5.js";
import { strip } from "../src/data/dsl.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "../../study-map/src/data/concepts");
import { sharedNotes } from "./shared-notes.mjs";
const existing = sharedNotes;
// Names written by the other Module 4 forks (agreed interface).
const shared = ["Hamiltonian", "Time-Independent Schrödinger Equation", "Stationary State", "Harmonic Oscillator Potential", "Gaussian Integral", "Parity of a Function", "Node of a Wave Function", "Infinite Square Well", "Separation of Variables", "Zero-Point Energy", "Number Operator", "Counting Solutions of a Sum", "Boundary Condition"];
const earlier = ["Oscillator Energy Levels from Ladder Operators", "Ladder Operator Action on Number States", "Oscillator Ground State from the Lowering Condition", "First Excited State of the Oscillator"];
const names = new Set([...existing.map((c) => c.name), ...supports.map((c) => c.name), ...shared, ...earlier]);
const ownNames = new Set(problems.map((p) => p.name));
const allNames = new Set([...names, ...ownNames]);
let n = 0;
const ok = (c, m) => (assert.ok(c, m), n++);

// ---------- structure ----------
const prompts = new Set(existing.map((c) => c.check.prompt));
const links = (t = "") => [...t.matchAll(/\[\[([^\]|]+)/g)].map((m) => m[1].trim());
const kwOf = (s) => String(s).split("|").map((x) => x.trim()).filter(Boolean);
ok(supports.length === 4, "four supports");
for (const c of supports) {
  ok(c.check.options.length === 3 && c.check.correct === 0, `${c.name}: check`);
  ok(!prompts.has(c.check.prompt), `${c.name}: duplicate prompt`); prompts.add(c.check.prompt);
  ok(!prompts.has(c.pretest.prompt), `${c.name}: duplicate pretest prompt`); prompts.add(c.pretest.prompt);
  ok(!existing.some((e) => e.name === c.name) && !shared.includes(c.name), `${c.name}: name clash`);
  ok(c.prerequisites.every((p) => names.has(p)), `${c.name}: prerequisites ${c.prerequisites.filter((p) => !names.has(p))}`);
  ok(c.faq.length >= 2 && c.pretest.options.length === 3 && c.pretest.correct === 0, `${c.name}: faq/pretest`);
  for (const t of [c.linkedFormal, c.meaning, c.example, ...c.faq.map((f) => f.a)]) {
    for (const l of links(t)) ok(allNames.has(l), `${c.name}: link ${l}`);
    ok(((strip(t).match(/\$/g) || []).length % 2) === 0, `${c.name}: unbalanced $`);
  }
}
ok(problems.length === 4, "four problems");
const expectedNames = ["Matrix Representation of Oscillator Operators", "Oscillator Expectation Values and Uncertainty", "Mean Position of a Two-Level Oscillator State", "Separation of Variables in Three Dimensions"];
ok(problems.map((p) => p.name).join("|") === expectedNames.join("|"), "exact names");
ok(problems.map((p) => p.ross.section).join("") === "AAAB", "sections");
for (const p of problems) {
  ok(!p.prerequisites.includes(p.name), `${p.id}: self prerequisite`);
  ok(p.prerequisites.every((x) => names.has(x) || (ownNames.has(x) && expectedNames.indexOf(x) < expectedNames.indexOf(p.name))), `${p.id}: prerequisites ${p.prerequisites.filter((x) => !names.has(x))}`);
  ok(p.check.options.length === 3 && p.check.correct === 0, `${p.id}: check`);
  ok(p.pretest.options.length === 3 && p.pretest.correct === 0, `${p.id}: pretest`);
  ok(!prompts.has(p.check.prompt), `${p.id}: duplicate check prompt`); prompts.add(p.check.prompt);
  ok(!prompts.has(p.pretest.prompt), `${p.id}: duplicate pretest prompt`); prompts.add(p.pretest.prompt);
  ok(p.faq.length >= 3, `${p.id}: faq`);
  ok(p.proof.steps.length >= 4 && p.proof.steps.length <= 7, `${p.id}: steps ${p.proof.steps.length}`);
  ok(p.ross && p.ross.label && p.ross.page >= 1 && p.ross.page <= 9, `${p.id}: ross`);
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
  const texts = [p.statement, p.linkedFormal, p.meaning, p.example, p.pretest.prompt, p.proof.idea, p.proof.conclusion, p.proof.example.text, ...p.faq.map((f) => f.a), ...p.question.faq.flatMap((f) => [f.q, f.a]), p.question.retryPrompt, ...p.proof.steps.flatMap((s) => [s.text, s.check.prompt, s.check.explanation, ...s.check.options])];
  for (const t of texts) {
    for (const l of links(t)) ok(allNames.has(l), `${p.id}: broken link [[${l}]]`);
    ok(((strip(t).match(/\$/g) || []).length % 2) === 0, `${p.id}: unbalanced $ in ${t.slice(0, 50)}`);
    ok(!/\$\{/.test(t), `${p.id}: stray template`);
  }
}

// ---------- numbers: oscillator matrices ----------
const N = 80;
const zeros = (k) => Array.from({ length: k }, () => Array(k).fill(0));
const mmul = (A, B) => A.map((row, i) => B[0].map((_, j) => row.reduce((s, _, k) => s + A[i][k] * B[k][j], 0)));
// complex matrices: {re, im} pairs of real matrices
const cm = (re, im) => ({ re, im });
const cmul = (A, B) => {
  const rr = mmul(A.re, B.re), ii = mmul(A.im, B.im), ri = mmul(A.re, B.im), ir = mmul(A.im, B.re);
  return cm(rr.map((row, i) => row.map((x, j) => x - ii[i][j])), ri.map((row, i) => row.map((x, j) => x + ir[i][j])));
};
const csub = (A, B) => cm(A.re.map((r_, i) => r_.map((x, j) => x - B.re[i][j])), A.im.map((r_, i) => r_.map((x, j) => x - B.im[i][j])));
const cadd = (A, B) => cm(A.re.map((r_, i) => r_.map((x, j) => x + B.re[i][j])), A.im.map((r_, i) => r_.map((x, j) => x + B.im[i][j])));
const close = (a, b, e = 1e-9) => Math.abs(a - b) < e * Math.max(1, Math.abs(a), Math.abs(b));
const matClose = (A, B, lim = N) => A.re.slice(0, lim).every((row, i) => row.slice(0, lim).every((x, j) => close(x, B.re[i][j]) && close(A.im[i][j], B.im[i][j])));

const a = zeros(N);
for (let k = 1; k < N; k++) a[k - 1][k] = Math.sqrt(k); // <m|a|n> = sqrt(n) delta_{m,n-1}
const at = a[0].map((_, j) => a.map((row) => row[j])); // transpose = dagger for real matrices
const A = cm(a, zeros(N)), AT = cm(at, zeros(N));
const I = cm(Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => (i === j ? 1 : 0))), zeros(N));
const comm = csub(cmul(A, AT), cmul(AT, A));
for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
  const want = i === j ? (i === N - 1 ? 1 - N : 1) : 0; // the last diagonal entry breaks in a finite matrix
  ok(close(comm.re[i][j], want), `[a,a^dagger] entry ${i},${j}`);
}
const trC = comm.re.reduce((s, row, i) => s + row[i], 0);
ok(Math.abs(trC) < 1e-9, "trace of the commutator is 0");

// the 3x3 truncation of the problem text
const s2 = Math.SQRT2;
const a3 = [[0, 1, 0], [0, 0, s2], [0, 0, 0]];
const a3d = [[0, 0, 0], [1, 0, 0], [0, s2, 0]];
a3.forEach((row, i) => row.forEach((x, j) => ok(close(x, a[i][j]), "3x3 a")));
a3d.forEach((row, i) => row.forEach((x, j) => ok(close(x, at[i][j]), "3x3 adagger")));
const com3 = mmul(a3, a3d).map((row, i) => row.map((x, j) => x - mmul(a3d, a3)[i][j]));
[[1, 0, 0], [0, 1, 0], [0, 0, -2]].forEach((row, i) => row.forEach((x, j) => ok(close(com3[i][j], x), "3x3 [a,a+] = diag(1,1,-2)")));
ok(close(com3.reduce((s, row, i) => s + row[i], 0), 0), "trace of 3x3 commutator");

for (const [hb, m, w] of [[1, 1, 1], [1.3, 0.7, 2.2], [0.4, 3, 0.9]]) {
  const cx = Math.sqrt(hb / (2 * m * w)), cp = Math.sqrt((m * hb * w) / 2);
  // X = cx (a + a^dagger); P = i cp (a^dagger - a)
  const X = cm(a.map((row, i) => row.map((x, j) => cx * (x + at[i][j]))), zeros(N));
  const P = cm(zeros(N), a.map((row, i) => row.map((x, j) => cp * (at[i][j] - x))));
  // X, P Hermitian
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    ok(close(X.re[i][j], X.re[j][i]), "X symmetric (real Hermitian)");
    ok(close(P.im[i][j], -P.im[j][i]) && close(P.re[i][j], 0), "P Hermitian");
  }
  // standard sign gives [X,P] = i hbar; the printed sign gives -i hbar (away from the truncation edge)
  const XP = csub(cmul(X, P), cmul(P, X));
  for (let i = 0; i < N - 1; i++) ok(close(XP.im[i][i], hb) && close(XP.re[i][i], 0), "[X,P]=i hbar");
  const Pprint = cm(zeros(N), P.im.map((row) => row.map((x) => -x)));
  const XPp = csub(cmul(X, Pprint), cmul(Pprint, X));
  for (let i = 0; i < N - 1; i++) ok(close(XPp.im[i][i], -hb), "printed sign gives -i hbar");
  // X and P only link neighbouring levels
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (Math.abs(i - j) !== 1) ok(X.re[i][j] === 0 && P.im[i][j] === 0, "neighbour rule");
  // entries match the closed forms
  for (let nn = 1; nn < N; nn++) { ok(close(X.re[nn - 1][nn], cx * Math.sqrt(nn)), "X entry"); ok(close(P.im[nn][nn - 1], cp * Math.sqrt(nn)) && close(P.im[nn - 1][nn], -cp * Math.sqrt(nn)), "P entry"); }
  // H = hbar w (a^dagger a + 1/2) diagonal with hbar w (n + 1/2)
  const adA = mmul(at, a);
  const H = adA.map((row, i) => row.map((x, j) => hb * w * (x + (i === j ? 0.5 : 0))));
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) ok(close(H[i][j], i === j ? hb * w * (i + 0.5) : 0), "H diagonal");
  // H = P^2/2m + m w^2 X^2/2 away from the edge
  const X2 = cmul(X, X), P2 = cmul(P, P);
  for (let nn = 0; nn < N - 2; nn++) {
    ok(close(X2.re[nn][nn], (nn + 0.5) * hb / (m * w)), `<X^2> n=${nn}`);
    ok(close(P2.re[nn][nn], (nn + 0.5) * m * hb * w), `<P^2> n=${nn}`);
    const kin = P2.re[nn][nn] / (2 * m), pot = 0.5 * m * w * w * X2.re[nn][nn];
    ok(close(kin, pot) && close(kin, 0.5 * hb * w * (nn + 0.5)), `kinetic = potential n=${nn}`);
    ok(close(kin + pot, H[nn][nn]), `<H> n=${nn}`);
    ok(close(X.re[nn][nn], 0) && close(P.im[nn][nn], 0), "<X>=<P>=0");
    const prod = Math.sqrt(X2.re[nn][nn] * P2.re[nn][nn]);
    ok(close(prod, (nn + 0.5) * hb), `dx dp n=${nn}`);
    ok(prod >= hb / 2 - 1e-12 && (nn === 0 ? close(prod, hb / 2) : prod > hb / 2 + 1e-12), "uncertainty bound");
  }
  // [X^2... ] aa^+ + a^+ a = 2n+1
  const sum = cadd(cmul(A, AT), cmul(AT, A));
  for (let nn = 0; nn < N - 1; nn++) ok(close(sum.re[nn][nn], 2 * nn + 1), "aa+ + a+a = 2n+1");

  // P7: psi = (|0> + |1>)/sqrt2
  const psi = Array(N).fill(0); psi[0] = psi[1] = 1 / Math.SQRT2;
  const expectX = (v) => v.reduce((s, vi, i) => s + vi * v.reduce((t, vj, j) => t + X.re[i][j] * vj, 0), 0);
  ok(close(expectX(psi), cx), "<X> of (|0>+|1>)/sqrt2 = sqrt(hbar/2mw)");
  const psim = Array(N).fill(0); psim[0] = 1 / Math.SQRT2; psim[1] = -1 / Math.SQRT2;
  ok(close(expectX(psim), -cx), "minus sign gives the negative");
  ok(close(psi.reduce((s, x) => s + x * x, 0), 1), "psi normalized");
  ok(close(X.re[0][1], cx) && close(X.re[1][0], cx) && X.re[0][0] === 0 && X.re[1][1] === 0, "cross terms equal, diagonals zero");
  // time dependence <X>(t)=cx cos wt, <P>(t) = -cp sin wt
  for (const t of [0, 0.3, 1.1, 2.9]) {
    const ph = (nn) => [Math.cos(-(nn + 0.5) * w * t), Math.sin(-(nn + 0.5) * w * t)];
    const c0 = ph(0).map((x) => x / Math.SQRT2), c1 = ph(1).map((x) => x / Math.SQRT2);
    // <X> = Re(conj(c0) c1) X01 * 2
    const re01 = c0[0] * c1[0] + c0[1] * c1[1];
    ok(close(2 * re01 * X.re[0][1], cx * Math.cos(w * t)), `<X>(t) t=${t}`);
    // <P> = 2 Re(conj(c0) c1 P01), P01 = -i cp
    const im01 = c0[0] * c1[1] - c0[1] * c1[0]; // Im(conj(c0) c1)
    ok(close(2 * im01 * cp, -cp * Math.sin(w * t)), `<P>(t) t=${t}`);
    // classical consistency: m d<X>/dt = <P>
    ok(close(-m * cx * w * Math.sin(w * t), -cp * Math.sin(w * t)), "m d<X>/dt = <P>");
  }
  // position-space integral of psi0 x psi1
  const psi0 = (x) => (m * w / (Math.PI * hb)) ** 0.25 * Math.exp(-m * w * x * x / (2 * hb));
  const psi1 = (x) => Math.sqrt(2 * m * w / hb) * x * psi0(x);
  const dx = 1e-3; let I01 = 0, N0 = 0, N1 = 0, O01 = 0;
  for (let x = -12 * Math.sqrt(hb / (m * w)); x < 12 * Math.sqrt(hb / (m * w)); x += dx) { I01 += psi0(x) * x * psi1(x) * dx; N0 += psi0(x) ** 2 * dx; N1 += psi1(x) ** 2 * dx; O01 += psi0(x) * psi1(x) * dx; }
  ok(Math.abs(I01 - cx) < 1e-5 && Math.abs(N0 - 1) < 1e-5 && Math.abs(N1 - 1) < 1e-5 && Math.abs(O01) < 1e-8, "position-space integral gives the same <X>");
  // a relative phase e^{i phi} gives cx cos(phi)
  for (const phi of [0.4, 1.9]) { const c1 = [Math.cos(phi) / Math.SQRT2, Math.sin(phi) / Math.SQRT2]; ok(close(2 * (c1[0] / Math.SQRT2) * cx, cx * Math.cos(phi)), "relative phase cos"); }
}

// 2x2 corner example (hbar = m = omega = 1): [X,P] first entry is i, second entry wrong
{
  const x2 = [[0, Math.SQRT1_2], [Math.SQRT1_2, 0]];
  const pim = [[0, -Math.SQRT1_2], [Math.SQRT1_2, 0]]; // P = i * pim
  const xp = mmul(x2, pim), px = mmul(pim, x2);
  ok(close(xp[0][0], 0.5) && close(xp[1][1], -0.5) && close(px[0][0], -0.5) && close(px[1][1], 0.5), "XP and PX corner");
  ok(close(xp[0][0] - px[0][0], 1) && close(xp[1][1] - px[1][1], -1), "corner commutator i diag(1,-1)");
}

// ---------- numbers: separation of variables ----------
const lap3 = (f, x, y, z, h = 1e-3) => (f(x + h, y, z) + f(x - h, y, z) + f(x, y + h, z) + f(x, y - h, z) + f(x, y, z + h) + f(x, y, z - h) - 6 * f(x, y, z)) / (h * h);
const d2 = (f, x, h = 1e-3) => (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
// box: psi = sin(pi x)sin(2 pi y)sin(3 pi z), L=1, hbar=m=1: E = (pi^2/2)(1+4+9)
{
  const f = (x, y, z) => Math.sin(Math.PI * x) * Math.sin(2 * Math.PI * y) * Math.sin(3 * Math.PI * z);
  for (const [x, y, z] of [[0.21, 0.37, 0.52], [0.6, 0.15, 0.83], [0.4, 0.4, 0.4]]) {
    const E = (-0.5 * lap3(f, x, y, z)) / f(x, y, z);
    ok(Math.abs(E - (Math.PI ** 2 / 2) * 14) < 5e-3, `box (1,2,3) energy at ${x},${y},${z}`);
  }
  // each factor is its own 1D eigenfunction with energies E_n = n^2 pi^2/2
  for (const [nn, fx] of [[1, (x) => Math.sin(Math.PI * x)], [2, (x) => Math.sin(2 * Math.PI * x)], [3, (x) => Math.sin(3 * Math.PI * x)]])
    ok(Math.abs((-0.5 * d2(fx, 0.37)) / fx(0.37) - (nn * nn * Math.PI ** 2) / 2) < 5e-3, `1D box n=${nn}`);
  ok(1 + 4 + 9 === 14, "(1,2,3) gives 14");
}
// isotropic and anisotropic oscillators: psi = exp(-(wx x^2 + wy y^2 + wz z^2)/2), E = (wx + wy + wz)/2
for (const [wx, wy, wz] of [[1, 1, 1], [1, 2, 3], [0.5, 1.7, 2.4]]) {
  const f = (x, y, z) => Math.exp(-(wx * x * x + wy * y * y + wz * z * z) / 2);
  const V = (x, y, z) => 0.5 * (wx * wx * x * x + wy * wy * y * y + wz * wz * z * z);
  for (const [x, y, z] of [[0.3, -0.4, 0.5], [1, 0.2, -0.7]]) {
    const E = (-0.5 * lap3(f, x, y, z) + V(x, y, z) * f(x, y, z)) / f(x, y, z);
    ok(Math.abs(E - (wx + wy + wz) / 2) < 1e-3, `3D oscillator E at ${wx},${wy},${wz}`);
    // each bracket is constant: -1/2 X''/X + V_x = E_x
    const fxx = (t) => Math.exp(-wx * t * t / 2);
    ok(Math.abs(-0.5 * d2(fxx, x) / fxx(x) + 0.5 * wx * wx * x * x - wx / 2) < 1e-3, "x bracket constant");
  }
}
// a mixed potential V = xy: the x-bracket then depends on y, so no separation
{
  const gx = (x) => Math.exp(-x * x / 2);
  const bracket = (x, y) => -0.5 * d2(gx, x) / gx(x) + x * y; // would-be x bracket with V = x*y
  ok(Math.abs(bracket(0.7, 0.2) - bracket(0.7, 1.4)) > 0.1, "mixed term makes the bracket depend on y");
}

console.log(`verify-P5: ${n} checks passed (${supports.length} supports, ${problems.length} problems)`);
