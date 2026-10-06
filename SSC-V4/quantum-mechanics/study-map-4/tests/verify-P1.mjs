// Verifies QM Module 4 problems P1-P4 (src/data/problems/problemsA.js): structure and numbers.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import problems from "../src/data/problems/problemsA.js";
import supports from "../src/data/problems/supportsP1.js";
import { strip } from "../src/data/dsl.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "../../study-map/src/data/concepts");
const existing = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
// Supports written by the other forks of this module (names fixed in the brief).
const shared = ["Hamiltonian", "Time-Independent Schrödinger Equation", "Stationary State", "Harmonic Oscillator Potential", "Gaussian Integral", "Parity of a Function", "Node of a Wave Function", "Infinite Square Well", "Separation of Variables", "Zero-Point Energy", "Number Operator", "Counting Solutions of a Sum"];
const names = new Set([...existing.map((c) => c.name), ...supports.map((c) => c.name), ...shared]);
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
}
ok(problems.length === 4, "four problems");
const order = problems.map((p) => p.name);
for (const [i, p] of problems.entries()) {
  ok(!p.prerequisites.includes(p.name), `${p.id}: self prerequisite`);
  ok(p.prerequisites.every((x) => names.has(x) || order.indexOf(x) >= 0 && order.indexOf(x) < i), `${p.id}: prerequisites ${p.prerequisites.filter((x) => !names.has(x) && !(order.indexOf(x) >= 0 && order.indexOf(x) < i))}`);
  ok(p.check.options.length === 3 && p.check.correct === 0, `${p.id}: check`);
  ok(p.pretest.options.length === 3 && p.pretest.correct === 0, `${p.id}: pretest`);
  ok(!prompts.has(p.check.prompt), `${p.id}: duplicate check prompt`); prompts.add(p.check.prompt);
  ok(!prompts.has(p.pretest.prompt), `${p.id}: duplicate pretest prompt`); prompts.add(p.pretest.prompt);
  ok(p.faq.length >= 3, `${p.id}: faq`);
  ok(p.proof.steps.length >= 4 && p.proof.steps.length <= 7, `${p.id}: steps`);
  ok(p.ross && p.ross.section === "A" && p.ross.label && p.ross.page >= 1 && p.ross.page <= 9, `${p.id}: ross`);
  const kws = p.question.keywords;
  ok(kws.length >= 16 && kws.length <= 24, `${p.id}: keyword count ${kws.length}`);
  ok(kws.every((k) => kwOf(k).length && kwOf(k)[0].length >= 3), `${p.id}: keyword length`);
  ok(new Set(kws).size === kws.length, `${p.id}: duplicate keywords`);
  ok(p.question.faq.length >= 4 && p.question.retryPrompt && p.question.sourcePageText, `${p.id}: question fields`);
  for (const s of p.proof.steps) {
    ok(s.title && !s.title.includes("$"), `${p.id}: plain step title ${s.title}`);
    ok(s.check.options.length === 3 && s.check.correct === 0, `${p.id}: step options`);
    ok(allNames.has(s.check.term), `${p.id}: step term ${s.check.term}`);
    ok(!prompts.has(s.check.prompt), `${p.id}: duplicate step prompt ${s.check.prompt}`); prompts.add(s.check.prompt);
    ok(s.check.explanation.length > 10 && s.text, `${p.id}: step text`);
    ok(new Set(s.check.options).size === 3, `${p.id}: distinct step options`);
  }
  const texts = [p.linkedFormal, p.meaning, p.example, p.proof.idea, p.proof.conclusion, p.proof.example.text, ...p.faq.map((f) => f.a), ...p.question.faq.map((f) => f.a), ...p.proof.steps.flatMap((s) => [s.text, s.check.explanation])];
  for (const t of texts) {
    for (const l of links(t)) ok(allNames.has(l), `${p.id}: broken link [[${l}]]`);
    ok(((strip(t).match(/\$/g) || []).length % 2) === 0, `${p.id}: unbalanced $ in ${t.slice(0, 50)}`);
  }
}

// ---------- numbers ----------
const near = (a, b, e = 1e-6, m = "") => ok(Math.abs(a - b) <= e, `${m} ${a} vs ${b}`);
const trapz = (f, xs) => { let s = 0; for (let i = 1; i < xs.length; i++) s += 0.5 * (f(xs[i]) + f(xs[i - 1])) * (xs[i] - xs[i - 1]); return s; };
const grid = (L, N) => Array.from({ length: N + 1 }, (_, i) => -L + (2 * L * i) / N);

for (const [m, w, hb] of [[1, 1, 1], [1.3, 0.7, 1.1], [0.4, 2.2, 0.9]]) {
  const al = (m * w) / hb;
  const psi0 = (x) => (al / Math.PI) ** 0.25 * Math.exp((-al * x * x) / 2);
  const psi1 = (x) => (al / Math.PI) ** 0.25 * Math.sqrt(2 * al) * x * Math.exp((-al * x * x) / 2);
  const L = 12 / Math.sqrt(al), xs = grid(L, 4000), dx = xs[1] - xs[0];
  near(trapz((x) => psi0(x) ** 2, xs), 1, 1e-9, "psi0 norm");
  near(trapz((x) => psi1(x) ** 2, xs), 1, 1e-9, "psi1 norm");
  near(trapz((x) => psi0(x) * psi1(x), xs), 0, 1e-12, "orthogonal");
  // a, a† as differential operators (central finite differences)
  const d = (f, x) => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
  const c = Math.sqrt(al / 2);
  const a = (f) => (x) => c * (x * f(x) + (1 / al) * d(f, x));
  const ad = (f) => (x) => c * (x * f(x) - (1 / al) * d(f, x));
  for (const x of [-2, -0.7, 0, 0.3, 1.1, 2.4].map((t) => t / Math.sqrt(al))) {
    near(a(psi0)(x), 0, 1e-7, "a psi0 = 0");
    near(ad(psi0)(x), psi1(x), 1e-7, "a† psi0 = psi1");
    near(a(psi1)(x), psi0(x), 1e-7, "a psi1 = psi0");
    // psi0'' formula and H psi = E psi
    const d2 = (f, y) => (f(y + 1e-4) - 2 * f(y) + f(y - 1e-4)) / 1e-8;
    const H = (f) => (y) => (-hb * hb / (2 * m)) * d2(f, y) + 0.5 * m * w * w * y * y * f(y);
    near(H(psi0)(x), 0.5 * hb * w * psi0(x), 1e-4 * hb * w, "H psi0");
    near(H(psi1)(x), 1.5 * hb * w * psi1(x), 1e-4 * hb * w, "H psi1");
    near(d(psi0, x), -al * x * psi0(x), 1e-7, "psi0' = -alpha x psi0");
  }
  // nodes (sign changes strictly inside) and parity
  const signChanges = (f) => { let k = 0; for (let i = 1; i < xs.length; i++) if (f(xs[i - 1]) * f(xs[i]) < 0 || (f(xs[i]) === 0 && f(xs[i - 1]) !== 0 && i < xs.length - 1)) k++; return k; };
  ok(signChanges(psi0) === 0, "psi0 has no nodes");
  ok(signChanges(psi1) === 1, "psi1 has one node");
  for (const x of [0.2, 0.9, 2.5]) { near(psi0(-x), psi0(x), 1e-14, "even"); near(psi1(-x), -psi1(x), 1e-14, "odd"); }
  // maxima of |psi1|^2 at ±1/sqrt(alpha); psi0^2 max at 0
  const p1 = (x) => psi1(x) ** 2;
  let best = xs[0]; for (const x of xs.filter((t) => t > 0)) if (p1(x) > p1(best)) best = x;
  near(best, 1 / Math.sqrt(al), 2 * dx, "peak of |psi1|^2");
  ok(psi1(0) === 0 && psi0(0) > 0, "psi1(0)=0");
  // <x^2>, <p^2> for the ground state and Delta x Delta p = hbar/2
  const x2 = trapz((x) => x * x * psi0(x) ** 2, xs);
  const p2 = trapz((x) => hb * hb * d(psi0, x) ** 2, xs);
  near(x2, hb / (2 * m * w), 1e-7, "<x^2>"); near(p2, (m * hb * w) / 2, 1e-7, "<p^2>");
  near(Math.sqrt(x2 * p2), hb / 2, 1e-7, "Dx Dp");
  // zero-point bound: <H> >= hbar*omega/2 for random Gaussian trial states (mean shifts included)
  for (let t = 0; t < 200; t++) {
    const s = 0.2 + 3 * Math.random(), x0 = 4 * Math.random() - 2; // width s, centre x0 (units 1/sqrt(alpha))
    const sx = s / Math.sqrt(al), sp = hb / (2 * sx);
    const Emean = (sp * sp) / (2 * m) + 0.5 * m * w * w * (sx * sx + (x0 / Math.sqrt(al)) ** 2);
    ok(Emean >= 0.5 * hb * w - 1e-12, "<H> >= hbar omega / 2");
    ok(Emean >= w * sx * sp - 1e-12 && w * sx * sp >= 0.5 * hb * w - 1e-12, "AM-GM chain");
  }
  // worked-example numbers (alpha = 1 case only)
  if (al === 1) {
    near(psi0(0), 0.7511, 1e-4); near(psi0(1), 0.4556, 1e-4); near(psi1(1), 0.644, 1e-3);
    near(psi0(0) ** 2, 0.564, 1e-3); near(psi1(1) ** 2, 0.415, 1e-3); near(psi0(1) ** 2, 0.2076, 1e-3);
  }
}

// energy levels from a finite-difference Hamiltonian (hbar = m = omega = 1): lowest 8 eigenvalues = n + 1/2
{
  const L = 10, N = 2000, h = (2 * L) / N, M = N - 1;
  const diag = Array.from({ length: M }, (_, i) => 1 / (h * h) + 0.5 * (-L + (i + 1) * h) ** 2), off = -0.5 / (h * h);
  const count = (lam) => { let k = 0, q = 1; for (let i = 0; i < M; i++) { q = diag[i] - lam - (i ? (off * off) / q : 0); if (q === 0) q = 1e-300; if (q < 0) k++; } return k; };
  for (let j = 0; j < 8; j++) { let lo = 0, hi = 30; for (let it = 0; it < 80; it++) { const mid = (lo + hi) / 2; if (count(mid) > j) hi = mid; else lo = mid; } near(lo, j + 0.5, 1e-3, `E_${j}`); }
}

// truncated ladder matrices (basis |0>..|N-1>)
{
  const N = 14, hb = 1.1, m = 0.8, w = 1.7;
  const Z = () => Array.from({ length: N }, () => Array(N).fill(0));
  const a = Z(); for (let k = 1; k < N; k++) a[k - 1][k] = Math.sqrt(k);
  const T = (A) => A[0].map((_, j) => A.map((r) => r[j]));
  const mul = (A, B) => A.map((r, i) => B[0].map((_, j) => r.reduce((s, _, k) => s + A[i][k] * B[k][j], 0)));
  const sub = (A, B) => A.map((r, i) => r.map((v, j) => v - B[i][j]));
  const add = (A, B) => A.map((r, i) => r.map((v, j) => v + B[i][j]));
  const sc = (c, A) => A.map((r) => r.map((v) => c * v));
  const ad = T(a), I = Z().map((r, i) => (r[i] = 1, r));
  const comm = sub(mul(a, ad), mul(ad, a));
  for (let i = 0; i < N - 1; i++) for (let j = 0; j < N - 1; j++) near(comm[i][j], i === j ? 1 : 0, 1e-12, "[a,a†]=1");
  const Nop = mul(ad, a);
  for (let i = 0; i < N; i++) near(Nop[i][i], i, 1e-12, "N|n>=n|n>");
  for (let k = 1; k < N; k++) { let s = 0; for (let i = 0; i < N; i++) s += a[i][k] ** 2; near(s, k, 1e-12, "|a|n>|^2 = n"); }
  for (let k = 0; k < N - 1; k++) { let s = 0; for (let i = 0; i < N; i++) s += ad[i][k] ** 2; near(s, k + 1, 1e-12, "|a†|n>|^2 = n+1"); }
  // [N,a] = -a, [N,a†] = a†
  const c1 = sub(mul(Nop, a), mul(a, Nop)), c2 = sub(mul(Nop, ad), mul(ad, Nop));
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { near(c1[i][j], -a[i][j], 1e-12, "[N,a]=-a"); near(c2[i][j], ad[i][j], 1e-12, "[N,a†]=a†"); }
  // X, P = i Q with Q real; [X,Q] = hbar; H = -Q^2/(2m) + m w^2 X^2/2 = hbar w (N+1/2) in the interior
  const X = sc(Math.sqrt(hb / (2 * m * w)), add(a, ad)), Q = sc(Math.sqrt((m * hb * w) / 2), sub(ad, a));
  const cXQ = sub(mul(X, Q), mul(Q, X));
  for (let i = 0; i < N - 1; i++) for (let j = 0; j < N - 1; j++) near(cXQ[i][j], i === j ? hb : 0, 1e-10, "[X,P]=i hbar");
  const H = add(sc(-1 / (2 * m), mul(Q, Q)), sc(0.5 * m * w * w, mul(X, X)));
  for (let i = 0; i < N - 2; i++) for (let j = 0; j < N - 2; j++) near(H[i][j], i === j ? hb * w * (i + 0.5) : 0, 1e-9, "H=hw(N+1/2)");
  // <X>=<P>=0 in |n>, and the sign of P: a - a† = i sqrt(2/(m hbar w)) P  <=>  Q = -sqrt(m hbar w/2)(a - a†)
  for (let k = 0; k < N - 1; k++) { near(X[k][k], 0, 1e-12, "<X>"); near(Q[k][k], 0, 1e-12, "<P>"); }
  const Qalt = sc(-Math.sqrt((m * hb * w) / 2), sub(a, ad));
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) near(Q[i][j], Qalt[i][j], 1e-12, "P sign");
  // |n> = (a†)^n/sqrt(n!) |0>
  let v = Array(N).fill(0); v[0] = 1; let fact = 1;
  for (let k = 1; k < 8; k++) { v = ad.map((r) => r.reduce((s, x, j) => s + x * v[j], 0)); fact *= k; for (let i = 0; i < N; i++) near(v[i] / Math.sqrt(fact), i === k ? 1 : 0, 1e-9, "|n> from |0>"); }
  void I;
}

console.log(`verify-P1: ${n} checks passed (${supports.length} supports, ${problems.length} problems)`);
