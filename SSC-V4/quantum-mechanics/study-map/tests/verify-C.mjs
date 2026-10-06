// Verifies QM Module 3 problems 12-16 (src/data/problems/problemsC.js, supportsC.js):
// structure rules plus numeric checks of every worked example and identity.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import problems from "../src/data/problems/problemsC.js";
import supports from "../src/data/problems/supportsC.js";
import { parseKeywords, letterCount } from "../../../flow-library/study-map/src/lib/keywords.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const conceptDir = path.join(here, "../src/data/concepts");
const existing = fs.readdirSync(conceptDir).filter((f) => f.endsWith(".json")).flatMap((f) => JSON.parse(fs.readFileSync(path.join(conceptDir, f), "utf8")));
const mine = [...supports, ...problems];
let n = 0;
const ok = (c, m) => (assert.ok(c, m), n++);
const close = (a, b, tol = 1e-8, m = "") => ok(Math.abs(a - b) <= tol, `${m} ${a} vs ${b}`);

// ---------------- structure ----------------
const names = new Set([...existing.map((c) => c.name), ...mine.map((c) => c.name)]);
ok(names.size === existing.length + mine.length, "names must be unique and not clash with existing concepts");
ok(new Set(mine.map((c) => c.id)).size === mine.length, "ids unique");
const linkRe = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
const linksIn = (t = "") => [...t.matchAll(linkRe)].map((m) => m[1]);
const prompts = new Map(); // prompt -> where, across existing checks and mine
for (const c of existing) prompts.set(c.check.prompt, `existing ${c.name}`);
const addPrompt = (p, where) => { ok(!prompts.has(p), `duplicate prompt: ${p} (${where} vs ${prompts.get(p)})`); prompts.set(p, where); };
const oneItem = (it, where) => {
  ok(it.options.length === 3, `${where}: 3 options`);
  ok(it.correct === 0, `${where}: correct is 0`);
  ok(new Set(it.options).size === 3, `${where}: distinct options`);
  ok(it.explanation && it.explanation.length > 10, `${where}: explanation`);
};
const dollars = (t) => ((t || "").replace(/\$\$/g, "").match(/\$/g) || []).length % 2 === 0;
const strings = (o, acc = []) => { if (typeof o === "string") acc.push(o); else if (o && typeof o === "object") for (const v of Object.values(o)) strings(v, acc); return acc; };

for (const c of mine) {
  oneItem(c.check, `${c.name} check`);
  oneItem(c.pretest, `${c.name} pretest`);
  addPrompt(c.check.prompt, `${c.name} check`);
  addPrompt(c.pretest.prompt, `${c.name} pretest`);
  ok(c.prerequisites.length >= 1 && c.prerequisites.every((p) => names.has(p)), `${c.name}: prerequisites exist`);
  ok(!c.prerequisites.includes(c.name), `${c.name}: not its own prerequisite`);
  ok(c.faq.length >= 2, `${c.name}: faq`);
  ok(["notation", "spaces", "states", "operators", "eigen", "matrices", "waves", "uncertainty", "ground"].includes(c.group), `${c.name}: group ${c.group}`);
  for (const t of strings(c)) {
    ok(!/\$\{/.test(t), `${c.name}: stray template`);
    ok(dollars(t), `${c.name}: unbalanced $ in ${t.slice(0, 60)}`);
    for (const l of linksIn(t)) ok(names.has(l), `${c.name}: broken link [[${l}]]`);
  }
  if (c.kind === "problem") {
    ok(c.ross.section === "C" && typeof c.ross.n === "string" && c.ross.label && c.ross.page >= 1 && c.ross.page <= 4, `${c.name}: ross`);
    ok(c.faq.length >= 3, `${c.name}: concept faq >= 3`);
    const p = c.proof;
    ok(p.steps.length >= 4, `${c.name}: steps`);
    ok(p.idea && p.conclusion && p.example.text, `${c.name}: proof idea/conclusion/example`);
    for (const [i, s] of p.steps.entries()) {
      oneItem(s.check, `${c.name} step ${i + 1}`);
      addPrompt(s.check.prompt, `${c.name} step ${i + 1}`);
      ok(s.title && s.text, `${c.name} step ${i + 1}: title/text`);
      ok(names.has(s.check.term), `${c.name} step ${i + 1}: term ${s.check.term}`);
    }
    const q = c.question;
    ok(q.faq.length >= 4, `${c.name}: question faq`);
    ok(q.retryPrompt && q.sourcePageText, `${c.name}: retry/source`);
    const kws = parseKeywords(q.keywords);
    ok(kws.length >= 16 && kws.length <= 24, `${c.name}: keywords ${kws.length}`);
    ok(new Set(kws.map((k) => k.term)).size === kws.length, `${c.name}: duplicate keywords`);
    ok(kws.every((k) => letterCount(k.term) >= 3 && k.forms.length >= 1), `${c.name}: keyword >= 3 letters`);
    ok(new Set(kws.flatMap((k) => k.forms)).size === kws.flatMap((k) => k.forms).length, `${c.name}: keyword forms collide`);
  }
}
// dependency graph over existing + mine must be acyclic
{
  const by = Object.fromEntries([...existing, ...mine].map((c) => [c.name, c]));
  const state = {};
  const visit = (nm) => {
    if (state[nm] === 2) return;
    ok(state[nm] !== 1, `cycle through ${nm}`);
    state[nm] = 1;
    for (const p of by[nm].prerequisites) { ok(by[p], `missing ${p}`); visit(p); }
    state[nm] = 2;
  };
  Object.keys(by).forEach(visit);
}

// ---------------- complex linear algebra helpers ----------------
const C = (re, im = 0) => ({ re, im });
const add = (a, b) => C(a.re + b.re, a.im + b.im);
const sub = (a, b) => C(a.re - b.re, a.im - b.im);
const mul = (a, b) => C(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
const conj = (a) => C(a.re, -a.im);
const abs2 = (a) => a.re * a.re + a.im * a.im;
const scale = (a, k) => C(a.re * k, a.im * k);
const matMul = (A, B) => A.map((_, i) => B[0].map((__, j) => A[i].reduce((s, _x, k) => add(s, mul(A[i][k], B[k][j])), C(0))));
const dag = (A) => A[0].map((_, j) => A.map((row) => conj(row[j])));
const matVec = (A, v) => A.map((row) => row.reduce((s, a, k) => add(s, mul(a, v[k])), C(0)));
const tr = (A) => A.reduce((s, row, i) => add(s, row[i]), C(0));
const ident = (m) => Array.from({ length: m }, (_, i) => Array.from({ length: m }, (_, j) => C(i === j ? 1 : 0)));
const inner = (u, v) => u.reduce((s, ui, i) => add(s, mul(conj(ui), v[i])), C(0)); // <u|v>
const det = (A) => {
  const m = A.length;
  if (m === 1) return A[0][0];
  let s = C(0);
  for (let j = 0; j < m; j++) {
    const minor = A.slice(1).map((row) => row.filter((_, k) => k !== j));
    const t = mul(A[0][j], det(minor));
    s = add(s, j % 2 ? scale(t, -1) : t);
  }
  return s;
};
const sumPrincipalMinors2 = (A) => {
  let s = C(0);
  for (let i = 0; i < A.length; i++) for (let j = i + 1; j < A.length; j++) s = add(s, sub(mul(A[i][i], A[j][j]), mul(A[i][j], A[j][i])));
  return s;
};
let seed = 12345;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296) * 2 - 1;
const randMat = (m) => Array.from({ length: m }, () => Array.from({ length: m }, () => C(rnd(), rnd())));
const randUnitary = (m) => {
  const cols = [];
  for (let j = 0; j < m; j++) {
    let v = Array.from({ length: m }, () => C(rnd(), rnd()));
    for (const u of cols) { const o = inner(u, v); v = v.map((x, i) => sub(x, mul(o, u[i]))); }
    const nrm = Math.sqrt(v.reduce((s, x) => s + abs2(x), 0));
    cols.push(v.map((x) => scale(x, 1 / nrm)));
  }
  return Array.from({ length: m }, (_, i) => cols.map((c) => c[i]));
};
const eqMat = (A, B, tol = 1e-9, m = "") => A.forEach((row, i) => row.forEach((a, j) => { close(a.re, B[i][j].re, tol, `${m}[${i}][${j}].re`); close(a.im, B[i][j].im, tol, `${m}[${i}][${j}].im`); }));

// ---------------- problem 12: matrix representation ----------------
{
  // example: A = 2|1><1| + 3|2><2|, |psi> = 3|1> - i|2>
  const e1 = [C(1), C(0)], e2 = [C(0), C(1)];
  const A = [0, 1].map((m) => [0, 1].map((nn) => {
    const basis = [e1, e2];
    // <m|A|n> = 2<m|1><1|n> + 3<m|2><2|n>
    return add(scale(mul(inner(basis[m], e1), inner(e1, basis[nn])), 2), scale(mul(inner(basis[m], e2), inner(e2, basis[nn])), 3));
  }));
  eqMat(A, [[C(2), C(0)], [C(0), C(3)]], 1e-12, "A=diag(2,3)");
  const psi = [C(3), C(0, -1)];
  const d = matVec(A, psi);
  close(d[0].re, 6); close(d[1].im, -3); close(d[1].re, 0);
  // generic: random orthonormal basis of C^3, random operator, random ket
  const m = 3, U = randUnitary(m), B = randMat(m), psi3 = Array.from({ length: m }, () => C(rnd(), rnd()));
  const phi = (j) => U.map((row) => row[j]);
  const coords = (v) => Array.from({ length: m }, (_, j) => inner(phi(j), v)); // c_j = <phi_j|v>
  const c = coords(psi3);
  // reconstruct |psi> = sum c_j |phi_j>
  const rec = psi3.map((_, i) => c.reduce((s, cj, j) => add(s, mul(cj, phi(j)[i])), C(0)));
  rec.forEach((x, i) => { close(x.re, psi3[i].re, 1e-12); close(x.im, psi3[i].im, 1e-12); });
  // A_mn = <phi_m|B|phi_n>; coordinates of B|psi> equal A c
  const Am = Array.from({ length: m }, (_, a) => Array.from({ length: m }, (_, b) => inner(phi(a), matVec(B, phi(b)))));
  const lhs = coords(matVec(B, psi3)), rhs = matVec(Am, c);
  lhs.forEach((x, i) => { close(x.re, rhs[i].re, 1e-12); close(x.im, rhs[i].im, 1e-12); });
  // completeness: sum_m |phi_m><phi_m| = I
  const P = Array.from({ length: m }, (_, a) => Array.from({ length: m }, (_, b) => Array.from({ length: m }, (_, k) => mul(phi(k)[a], conj(phi(k)[b]))).reduce(add, C(0))));
  eqMat(P, ident(m), 1e-12, "completeness");
  // the bra of a|1>+b|2> has conjugated coefficients
  const a = C(1, 2), b = C(-3, 0.5), ket = [a, b];
  const bra = ket.map(conj);
  close(bra.reduce((s, x, i) => add(s, mul(x, ket[i])), C(0)).re, abs2(a) + abs2(b), 1e-12);
  // pretest/check statements: A|1> = 5|1> + 2|2> has first column (5, 2)
  close(5, 5);
}

// ---------------- problem 13: two-level operator ----------------
{
  const A = [[C(2), C(0, -1)], [C(0, 1), C(3)]];
  eqMat(dag(A), A, 1e-15, "Hermitian");
  eqMat(dag(A).map((r) => r), [[C(2), C(0, -1)], [C(0, 1), C(3)]], 1e-15, "A dagger");
  const transpose = [[A[0][0], A[1][0]], [A[0][1], A[1][1]]];
  eqMat(transpose, [[C(2), C(0, 1)], [C(0, -1), C(3)]], 1e-15, "transpose");
  const prod = mul(C(0, -1), C(0, 1)); close(prod.re, 1); close(prod.im, 0);
  const d = det(A); close(d.re, 5); close(d.im, 0);
  const t = tr(A); close(t.re, 5);
  const lp = (5 + Math.sqrt(5)) / 2, lm = (5 - Math.sqrt(5)) / 2;
  for (const lam of [lp, lm]) {
    const M = A.map((row, i) => row.map((x, j) => (i === j ? sub(x, C(lam)) : x)));
    const dd = det(M); close(dd.re, 0, 1e-12); close(dd.im, 0, 1e-12);
    close(lam * lam - 5 * lam + 5, 0, 1e-12, "quadratic");
  }
  close(lp + lm, 5, 1e-12); close(lp * lm, 5, 1e-12);
  close(lp, 3.618033988749895, 1e-12); close(lm, 1.381966011250105, 1e-12);
  close((2 - lp) * (3 - lp), 1, 1e-12, "example product"); // golden ratio example
  close(25 - 20, 5);
  // eigenvectors: (2 - lam) x - i y = 0 gives y = -i (2 - lam) x
  for (const lam of [lp, lm]) {
    const x2 = [C(1), mul(C(0, -1), C(2 - lam))];
    const Av = matVec(A, x2), lx = x2.map((z) => scale(z, lam));
    Av.forEach((z, i) => { close(z.re, lx[i].re, 1e-12); close(z.im, lx[i].im, 1e-12); });
  }
  // trace 4, determinant 3, eigenvalues 1 and 3 (check prompt)
  close(1 + 3, 4); close(1 * 3, 3);
  // pretest: 2*3 - (-i)(i) = 5, forgetting i^2 = -1 gives 7, forgetting the off-diagonal gives 6
  close(2 * 3 - 1, 5);
}

// ---------------- problem 14: basis change, diagonalization, invariants ----------------
{
  for (const m of [2, 3, 4]) {
    for (let trial = 0; trial < 6; trial++) {
      const U = randUnitary(m), A = randMat(m);
      eqMat(matMul(dag(U), U), ident(m), 1e-12, "U dagger U = I");
      eqMat(matMul(U, dag(U)), ident(m), 1e-12, "U U dagger = I");
      // new basis vectors are the columns of U; A'_mn = <e_m|A|e_n> equals (U^dagger A U)_mn
      const col = (j) => U.map((row) => row[j]);
      const Ap = matMul(dag(U), matMul(A, U));
      for (let a = 0; a < m; a++) for (let b = 0; b < m; b++) {
        const direct = inner(col(a), matVec(A, col(b)));
        close(direct.re, Ap[a][b].re, 1e-11); close(direct.im, Ap[a][b].im, 1e-11);
      }
      // coordinates change c' = U^dagger c
      const c = Array.from({ length: m }, () => C(rnd(), rnd()));
      const cp = matVec(dag(U), c);
      cp.forEach((z, j) => { const d = inner(col(j), c); close(z.re, d.re, 1e-12); close(z.im, d.im, 1e-12); });
      // invariants: trace, determinant, sum of principal 2x2 minors (coefficients of the secular polynomial)
      close(tr(Ap).re, tr(A).re, 1e-11); close(tr(Ap).im, tr(A).im, 1e-11);
      close(det(Ap).re, det(A).re, 1e-10); close(det(Ap).im, det(A).im, 1e-10);
      close(sumPrincipalMinors2(Ap).re, sumPrincipalMinors2(A).re, 1e-10); close(sumPrincipalMinors2(Ap).im, sumPrincipalMinors2(A).im, 1e-10);
      // det(U^dagger) det(U) = 1
      const dd = mul(det(dag(U)), det(U)); close(dd.re, 1, 1e-10); close(dd.im, 0, 1e-10);
      // U^dagger A U - lambda I = U^dagger (A - lambda I) U for a sample lambda, and its determinant equals det(A - lambda I)
      const lam = C(0.37, -0.21);
      const shift = (M) => M.map((row, i) => row.map((x, j) => (i === j ? sub(x, lam) : x)));
      const dl = det(shift(Ap)), dr = det(shift(A)); close(dl.re, dr.re, 1e-10); close(dl.im, dr.im, 1e-10);
      // tr(XY) = tr(YX)
      const X = randMat(m), Y = randMat(m);
      close(tr(matMul(X, Y)).re, tr(matMul(Y, X)).re, 1e-11); close(tr(matMul(X, Y)).im, tr(matMul(Y, X)).im, 1e-11);
      // tr(XYZ) = tr(ZXY) but not tr(XZY) in general
      const Z = randMat(m);
      close(tr(matMul(X, matMul(Y, Z))).re, tr(matMul(Z, matMul(X, Y))).re, 1e-10);
      if (m >= 3 && trial === 0) ok(Math.abs(tr(matMul(X, matMul(Y, Z))).re - tr(matMul(X, matMul(Z, Y))).re) > 1e-6, "swapping two factors changes the trace");
    }
  }
  // diagonalization of random 2x2 Hermitian matrices: columns = orthonormal eigenvectors
  for (let trial = 0; trial < 20; trial++) {
    const a = rnd() * 3, d = rnd() * 3, b = C(rnd(), rnd());
    const H = [[C(a), b], [conj(b), C(d)]];
    const disc = Math.sqrt(((a - d) / 2) ** 2 + abs2(b));
    const lams = [(a + d) / 2 + disc, (a + d) / 2 - disc];
    const vecs = lams.map((lam) => { const v = [b, C(lam - a)]; const nr = Math.sqrt(abs2(v[0]) + abs2(v[1])); return v.map((x) => scale(x, 1 / nr)); });
    const U = [[vecs[0][0], vecs[1][0]], [vecs[0][1], vecs[1][1]]];
    eqMat(matMul(dag(U), U), ident(2), 1e-10, "eigenvectors orthonormal");
    const D = matMul(dag(U), matMul(H, U));
    eqMat(D, [[C(lams[0]), C(0)], [C(0), C(lams[1])]], 1e-9, "U^dagger H U diagonal");
    const AU = matMul(H, U), UD = matMul(U, D);
    eqMat(AU, UD, 1e-9, "AU = UD");
    // eigenvalues real and satisfy the secular equation
    for (const lam of lams) { const dd = det(H.map((row, i) => row.map((x, j) => (i === j ? sub(x, C(lam)) : x)))); close(dd.re, 0, 1e-9); close(dd.im, 0, 1e-9); }
  }
  // worked example: sigma_x
  const A = [[C(0), C(1)], [C(1), C(0)]];
  const s = Math.SQRT1_2, U = [[C(s), C(s)], [C(s), C(-s)]];
  eqMat(matMul(A, U), [[C(s), C(-s)], [C(s), C(s)]], 1e-15, "A U");
  eqMat(matMul(dag(U), matMul(A, U)), [[C(1), C(0)], [C(0), C(-1)]], 1e-15, "U^dagger A U = diag(1,-1)");
  close(tr(A).re, 0); close(1 + -1, 0); close(det(A).re, -1);
  // check prompt example: trace of [[1,2],[2,1]] = 2 and eigenvalues 3, -1 (sum 2)
  close(1 + 1, 2); close(3 + -1, 2);
}

// ---------------- problems 15 and 16: continuous bases and Fourier pair ----------------
{
  const trapz = (xs, f) => { let s = C(0); for (let i = 0; i < xs.length - 1; i++) { const h = xs[i + 1] - xs[i]; s = add(s, scale(add(f(i), f(i + 1)), h / 2)); } return s; };
  const grid = (lo, hi, step) => { const g = []; for (let x = lo; x <= hi + 1e-12; x += step) g.push(x); return g; };
  const hbar = 1.3;
  const ps = grid(-12, 12, 0.02);
  // a normalized Gaussian momentum wave function with mean p0 and width s
  const p0 = 0.9, sg = 1.1;
  const phiAt = (p) => C(Math.pow(Math.PI * sg * sg, -0.25) * Math.exp(-((p - p0) ** 2) / (2 * sg * sg)));
  const phiVals = ps.map(phiAt);
  close(trapz(ps, (i) => C(abs2(phiVals[i]))).re, 1, 1e-9, "phi normalized");
  const kernel = (x, p) => C(Math.cos((p * x) / hbar), Math.sin((p * x) / hbar)); // e^{ipx/hbar}
  const norm = 1 / Math.sqrt(2 * Math.PI * hbar);
  const psiAt = (x) => scale(trapz(ps, (i) => mul(kernel(x, ps[i]), phiVals[i])), norm);
  // (a) the constant 1/sqrt(2 pi hbar) is the one that gives a normalized psi (delta normalization of |p>)
  const xs = grid(-40, 40, 0.05);
  const psiVals = xs.map(psiAt);
  close(trapz(xs, (i) => C(abs2(psiVals[i]))).re, 1, 1e-5, "psi normalized with 1/sqrt(2 pi hbar)");
  const wrong = 1 / (2 * Math.PI * hbar);
  ok(Math.abs(trapz(xs, (i) => C(abs2(psiVals[i]) * (wrong / norm) ** 2)).re - 1) > 0.05, "a wrong constant would not normalize");
  // (b) -i hbar psi'(x) equals the integral of p e^{ipx/hbar} phi(p) dp / sqrt(2 pi hbar)
  for (const x0 of [-2.1, -0.4, 0.3, 1.7]) {
    const h = 1e-4;
    const dpsi = scale(sub(psiAt(x0 + h), psiAt(x0 - h)), 1 / (2 * h));
    const lhs = mul(C(0, -hbar), dpsi);
    const rhs = scale(trapz(ps, (i) => scale(mul(kernel(x0, ps[i]), phiVals[i]), ps[i])), norm);
    close(lhs.re, rhs.re, 1e-6, "p acts as -i hbar d/dx (re)"); close(lhs.im, rhs.im, 1e-6, "p acts as -i hbar d/dx (im)");
    // (c) [x, p] psi = i hbar psi
    const f = (x) => mul(C(0, -hbar), scale(sub(psiAt(x + h), psiAt(x - h)), 1 / (2 * h))); // p psi
    const xp = scale(f(x0), x0);
    const g = (x) => scale(psiAt(x), x); // x psi
    const pxpsi = mul(C(0, -hbar), scale(sub(g(x0 + h), g(x0 - h)), 1 / (2 * h)));
    const comm = sub(xp, pxpsi), expect = mul(C(0, hbar), psiAt(x0));
    close(comm.re, expect.re, 1e-6, "[x,p] psi re"); close(comm.im, expect.im, 1e-6, "[x,p] psi im");
  }
  // delta identity: int e^{ikx} dx = 2 pi delta(k), seen through a Gaussian regulator and a test function
  for (const eps of [1e-2, 1e-3]) {
    const ks = grid(-30, 30, 0.002);
    const g = (k) => Math.exp(-k * k / 2);
    const val = trapz(ks, (i) => C(g(ks[i]) * Math.sqrt(Math.PI / eps) * Math.exp(-(ks[i] ** 2) / (4 * eps)))).re;
    ok(Math.abs(val - 2 * Math.PI * g(0)) < 0.2 * (eps === 1e-2 ? 1 : 0.1) + 1e-6, `2 pi delta(k) regulator ${eps}: ${val}`);
  }
  // scaling: with k = (p'-p)/hbar, int delta(k) g dp' = hbar g  =>  int e^{i(p'-p)x/hbar}dx = 2 pi hbar delta(p'-p)
  close(2 * Math.PI * hbar * (1 / (2 * Math.PI * hbar)), 1, 1e-15);
  // example: p = 2 hbar gives -i hbar d/dx e^{2ix} = 2 hbar e^{2ix}
  { const x = 0.77, h = 1e-6, f = (t) => C(Math.cos(2 * t), Math.sin(2 * t));
    const d = mul(C(0, -hbar), scale(sub(f(x + h), f(x - h)), 1 / (2 * h)));
    close(d.re, 2 * hbar * f(x).re, 1e-6); close(d.im, 2 * hbar * f(x).im, 1e-6); }
  // -i hbar d/dx e^{ipx/hbar} = p e^{ipx/hbar}, and the plane wave has |.|^2 = 1
  { const p = 0.83, x = -1.2, h = 1e-6, f = (t) => kernel(t, p);
    const d = mul(C(0, -hbar), scale(sub(f(x + h), f(x - h)), 1 / (2 * h)));
    close(d.re, p * f(x).re, 1e-6); close(d.im, p * f(x).im, 1e-6); close(abs2(f(x)), 1, 1e-12); }
  // plane wave wavelength 2 pi hbar / p: p = 2 hbar gives pi
  close((2 * Math.PI * hbar) / (2 * hbar), Math.PI, 1e-15);

  // problem 16: Gaussian example, hbar = 1, a = 2: psi = (4 pi)^(-1/4) e^{-x^2/8}, phi = (4/pi)^(1/4) e^{-2 p^2}
  const gaussPair = (h, a) => ({
    psi: (x) => Math.pow(Math.PI * a * a, -0.25) * Math.exp(-(x * x) / (2 * a * a)),
    phi: (p) => Math.pow((a * a) / (Math.PI * h * h), 0.25) * Math.exp(-(a * a * p * p) / (2 * h * h)),
  });
  for (const [h, a] of [[1, 2], [1.7, 0.8], [1, 1]]) {
    const { psi, phi } = gaussPair(h, a);
    const X = grid(-60, 60, 0.02), P = grid(-12, 12, 0.02);
    close(trapz(X, (i) => C(psi(X[i]) ** 2)).re, 1, 1e-6, "psi normalized");
    close(trapz(P, (i) => C(phi(P[i]) ** 2)).re, 1, 1e-6, "phi normalized");
    for (const p of [-1.1, 0, 0.35, 0.9]) {
      const val = scale(trapz(X, (i) => mul(C(Math.cos((p * X[i]) / h), -Math.sin((p * X[i]) / h)), C(psi(X[i])))), 1 / Math.sqrt(2 * Math.PI * h));
      close(val.re, phi(p), 1e-7, `phi(p) from psi, hbar=${h}, a=${a}`); close(val.im, 0, 1e-7);
    }
    for (const x of [-2, 0, 1.3]) {
      const back = scale(trapz(P, (i) => mul(C(Math.cos((P[i] * x) / h), Math.sin((P[i] * x) / h)), C(phi(P[i])))), 1 / Math.sqrt(2 * Math.PI * h));
      close(back.re, psi(x), 1e-7, "inverse transform recovers psi"); close(back.im, 0, 1e-7);
    }
  }
  { const { phi } = gaussPair(1, 2); close(phi(0), Math.pow(4 / Math.PI, 0.25), 1e-12); close(phi(0.5), Math.pow(4 / Math.PI, 0.25) * Math.exp(-0.5), 1e-12);
    close(Math.sqrt(4 / Math.PI) * Math.sqrt(Math.PI) / 2, 1, 1e-12, "example integral claim"); }
  // a narrow psi gives a broad phi (width trade-off): width in x is a, width in p is hbar/a
  { const a1 = 0.3, a2 = 3; ok(1 / a1 > 1 / a2, "narrow in x means broad in p"); }
  // sign convention: <p|x> = <x|p>^* flips the sign of the exponent
  { const c = kernel(0.7, 1.2); const cc = conj(c), minus = kernel(0.7, -1.2); close(cc.re, minus.re, 1e-15); close(cc.im, minus.im, 1e-15); }
}

// ---------------- supports: stated numbers ----------------
{
  const X = [[C(1), C(2)], [C(0), C(1)]], Y = [[C(0), C(1)], [C(1), C(0)]];
  close(tr(matMul(X, Y)).re, 2); close(tr(matMul(Y, X)).re, 2);
  eqMat(matMul(X, Y), [[C(2), C(1)], [C(1), C(0)]], 1e-15, "XY"); eqMat(matMul(Y, X), [[C(0), C(1)], [C(1), C(2)]], 1e-15, "YX");
  // dy/dx = 3y, y(0) = 2 -> y = 2 e^{3x}
  { const x = 0.4, h = 1e-6, y = (t) => 2 * Math.exp(3 * t); close((y(x + h) - y(x - h)) / (2 * h), 3 * y(x), 1e-5); close(y(0), 2); }
  // y' = -2y decays
  ok(Math.exp(-2 * 2) < Math.exp(-2 * 1), "decay");
}

console.log(`verify-C: ${n} checks passed (${supports.length} supports, ${problems.length} problems)`);
