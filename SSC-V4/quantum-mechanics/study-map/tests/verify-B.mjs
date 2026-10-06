// Verifies Module 3 part B (problems 7-11): structure, links, and the mathematics numerically.
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import problems from "../src/data/problems/problemsB.js";
import supports from "../src/data/problems/supportsB.js";

let n = 0;
const ok = (c, m) => (assert.ok(c, m), n++);
const near = (a, b, e = 1e-9) => ok(Math.abs(a - b) < e, `${a} vs ${b}`);

// ---------- structure ----------
const dir = new URL("../src/data/concepts/", import.meta.url);
const existing = readdirSync(dir).flatMap((f) => JSON.parse(readFileSync(new URL(f, dir), "utf8")));
const names = new Set([...existing.map((c) => c.name), ...supports.map((c) => c.name), ...problems.map((p) => p.name)]);
const prompts = new Set(existing.map((c) => c.check.prompt));
const LINK = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
const linksIn = (t = "") => [...t.matchAll(LINK)].map((m) => m[1].trim());
ok(problems.length === 5, "five problems");
ok(new Set(problems.map((p) => p.name)).size === 5 && new Set(problems.map((p) => p.id)).size === 5, "unique names/ids");
for (const p of problems) {
  ok(p.ross.section === "B" && p.ross.label && p.ross.n, `${p.id}: ross`);
  ok(p.prerequisites.every((x) => names.has(x)), `${p.id}: prerequisites exist`);
  ok(!p.prerequisites.includes(p.name), `${p.id}: no self prerequisite`);
  const prompt = [p.check.prompt, p.pretest.prompt, ...p.proof.steps.map((s) => s.check.prompt)];
  for (const pr of prompt) { ok(!prompts.has(pr), `${p.id}: duplicate prompt ${pr}`); prompts.add(pr); }
  for (const o of [p.check, p.pretest, ...p.proof.steps.map((s) => s.check)]) ok(o.options.length === 3 && o.correct === 0, `${p.id}: 3 options, correct 0`);
  for (const s of p.proof.steps) ok(names.has(s.check.term), `${p.id}: step term ${s.check.term}`);
  ok(p.proof.steps.length >= 4, `${p.id}: steps`);
  ok(p.faq.length >= 3 && p.question.faq.length >= 4, `${p.id}: faq`);
  const kws = p.question.keywords;
  ok(kws.length >= 16 && kws.length <= 24, `${p.id}: keywords ${kws.length}`);
  ok(new Set(kws.map((k) => k.split("|")[0].toLowerCase())).size === kws.length, `${p.id}: duplicate keywords`);
  ok(kws.every((k) => k.split("|")[0].replace(/[^A-Za-z]/g, "").length >= 3), `${p.id}: keyword >=3 letters`);
  ok(p.question.retryPrompt && p.question.sourcePageText, `${p.id}: retry/source`);
  const texts = [p.linkedFormal, p.meaning, p.example, p.statement, ...p.faq.map((f) => f.a), ...p.question.faq.map((f) => f.a),
    p.proof.idea, p.proof.conclusion, p.proof.example.text, ...p.proof.steps.flatMap((s) => [s.text, s.check.explanation]), p.check.explanation, p.pretest.explanation];
  for (const t of texts) {
    for (const l of linksIn(t)) ok(names.has(l), `${p.id}: broken link [[${l}]]`);
    ok(((t.match(/(?<!\\)\$/g) || []).length) % 2 === 0, `${p.id}: unbalanced $ in ${t.slice(0, 40)}`);
  }
}

// ---------- complex linear algebra helpers ----------
const C = (re, im = 0) => ({ re, im });
const add = (a, b) => C(a.re + b.re, a.im + b.im);
const sub = (a, b) => C(a.re - b.re, a.im - b.im);
const mul = (a, b) => C(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
const conj = (a) => C(a.re, -a.im);
const abs2 = (a) => a.re * a.re + a.im * a.im;
const rnd = () => C(Math.random() * 2 - 1, Math.random() * 2 - 1);
const mm = (A, B) => A.map((row, i) => B[0].map((_, j) => row.reduce((s, _, k) => add(s, mul(A[i][k], B[k][j])), C(0))));
const dag = (A) => A[0].map((_, j) => A.map((row) => conj(row[j])));
const mv = (A, v) => A.map((row) => row.reduce((s, a, k) => add(s, mul(a, v[k])), C(0)));
const ip = (u, v) => u.reduce((s, x, k) => add(s, mul(conj(x), v[k])), C(0));
const close = (A, B, e = 1e-9) => A.every((row, i) => row.every((x, j) => Math.abs(x.re - B[i][j].re) < e && Math.abs(x.im - B[i][j].im) < e));
const randHerm = (d) => { const M = Array.from({ length: d }, () => Array.from({ length: d }, rnd)); return M.map((row, i) => row.map((x, j) => C((x.re + M[j][i].re) / 2, i === j ? 0 : (x.im - M[j][i].im) / 2))); };
const comm = (A, B) => { const X = mm(A, B), Y = mm(B, A); return X.map((r, i) => r.map((x, j) => sub(x, Y[i][j]))); };
const I = (d) => Array.from({ length: d }, (_, i) => Array.from({ length: d }, (_, j) => C(i === j ? 1 : 0)));

// ---------- problem 7: Schwarz ----------
for (let t = 0; t < 400; t++) {
  const d = 1 + (t % 5), phi = Array.from({ length: d }, rnd), psi = Array.from({ length: d }, rnd);
  const lhs = abs2(ip(phi, psi)), pp = ip(phi, phi).re, qq = ip(psi, psi).re;
  ok(lhs <= pp * qq + 1e-12, "Schwarz");
  // the proof's decomposition: psi = chi + c phi, <phi|chi> = 0, <psi|psi> = <chi|chi> + |<phi|psi>|^2/<phi|phi>
  const c0 = ip(phi, psi), c = C(c0.re / pp, c0.im / pp), chi = psi.map((x, k) => sub(x, mul(c, phi[k])));
  near(abs2(ip(phi, chi)), 0, 1e-18);
  near(ip(chi, chi).re + lhs / pp, qq, 1e-9);
  ok(ip(chi, chi).re >= -1e-12, "chi norm");
}
{ // equality for dependent vectors and the worked example
  const phi = [rnd(), rnd(), rnd()], k = rnd(), psi = phi.map((x) => mul(k, x));
  near(abs2(ip(phi, psi)), ip(phi, phi).re * ip(psi, psi).re, 1e-9);
  const p = [C(1), C(0)], q = [C(3), C(4)];
  near(abs2(ip(p, q)), 9); near(ip(p, p).re * ip(q, q).re, 25);
  const chi = [C(0), C(4)]; near(ip(chi, chi).re, 16); ok(16 + 9 === 25, "pythagoras example");
}

// ---------- problem 8: AB Hermitian iff commute ----------
for (let t = 0; t < 200; t++) {
  const d = 2 + (t % 3), A = randHerm(d), B = randHerm(d);
  const AB = mm(A, B), BA = mm(B, A);
  ok(close(dag(AB), BA), "(AB)^dagger = BA");
  ok(!close(AB, dag(AB)), "random Hermitian pair does not give a Hermitian product");
  ok(close(AB, dag(AB)) === close(comm(A, B), mm(I(d), comm(A, B).map((r) => r.map(() => C(0))))), "iff");
  const P = mm(A, A); // commutes with A: A*A^2 Hermitian
  ok(close(mm(A, P), dag(mm(A, P))), "commuting product Hermitian");
}
{
  const sx = [[C(0), C(1)], [C(1), C(0)]], sz = [[C(1), C(0)], [C(0), C(-1)]];
  const p = mm(sx, sz); ok(close(p, [[C(0), C(-1)], [C(1), C(0)]]), "sigma_x sigma_z");
  ok(close(dag(p), [[C(0), C(1)], [C(-1), C(0)]]) && !close(p, dag(p)), "not Hermitian");
  ok(close(comm(sx, sz), [[C(0), C(-2)], [C(2), C(0)]]), "commutator example");
}

// ---------- problem 9: Robertson-Schroedinger ----------
const expect = (A, psi) => ip(psi, mv(A, psi));
for (let t = 0; t < 400; t++) {
  const d = 2 + (t % 3), A = randHerm(d), B = randHerm(d);
  let psi = Array.from({ length: d }, rnd); const nn = Math.sqrt(ip(psi, psi).re); psi = psi.map((x) => C(x.re / nn, x.im / nn));
  const mA = expect(A, psi).re, mB = expect(B, psi).re;
  const Ac = A.map((r, i) => r.map((x, j) => (i === j ? sub(x, C(mA)) : x))), Bc = B.map((r, i) => r.map((x, j) => (i === j ? sub(x, C(mB)) : x)));
  const varA = expect(mm(A, A), psi).re - mA * mA, varB = expect(mm(B, B), psi).re - mB * mB;
  near(ip(mv(Ac, psi), mv(Ac, psi)).re, varA, 1e-9); // <alpha|alpha> = variance
  const cm = expect(comm(A, B), psi); near(cm.re, 0, 1e-9); // commutator expectation purely imaginary
  const ac = expect(mm(Ac, Bc), psi), ac2 = expect(mm(Bc, Ac), psi);
  const cov = (ac.re + ac2.re) / 2; // 1/2<{A',B'}> is real
  near(ac.im, cm.im / 2, 1e-9); near(ac.re, cov, 1e-9); near(ac2.im, -ac.im, 1e-9);
  const rhs = cov * cov + 0.25 * abs2(cm);
  ok(varA * varB >= rhs - 1e-9, "Robertson-Schroedinger");
  ok(Math.sqrt(varA * varB) >= 0.5 * Math.sqrt(abs2(cm)) - 1e-9, "Robertson bound");
}
{ // spin-1/2 example, equality
  const sx = [[C(0), C(1)], [C(1), C(0)]], sy = [[C(0), C(0, -1)], [C(0, 1), C(0)]], sz = [[C(1), C(0)], [C(0), C(-1)]];
  const up = [C(1), C(0)];
  ok(close(comm(sx, sy), sz.map((r) => r.map((x) => mul(C(0, 2), x)))), "[sx,sy]=2i sz");
  const cm = expect(comm(sx, sy), up); near(cm.re, 0); near(cm.im, 2);
  const m = (A) => expect(A, up).re, v = (A) => expect(mm(A, A), up).re - m(A) ** 2;
  near(m(sx), 0); near(v(sx), 1); near(v(sy), 1);
  near(Math.sqrt(v(sx) * v(sy)), 0.5 * Math.hypot(cm.re, cm.im));
}

// ---------- problem 10: Hermitian theorems ----------
for (let t = 0; t < 300; t++) { // 2x2: eigenvalues real, eigenvectors orthogonal (closed form)
  const a = Math.random() * 4 - 2, d = Math.random() * 4 - 2, b = rnd();
  const tr = a + d, det = a * d - abs2(b), disc = tr * tr - 4 * det;
  ok(disc >= -1e-12, "discriminant non-negative: real eigenvalues");
  const l1 = (tr + Math.sqrt(Math.max(disc, 0))) / 2, l2 = (tr - Math.sqrt(Math.max(disc, 0))) / 2;
  if (Math.abs(l1 - l2) < 1e-6) continue;
  const A = [[C(a), b], [conj(b), C(d)]];
  const vec = (l) => [b, C(l - a)]; // (A - l)v = 0 for v = (b, l-a) when b != 0
  const v1 = vec(l1), v2 = vec(l2);
  for (const [l, v] of [[l1, v1], [l2, v2]]) { const w = mv(A, v); ok(w.every((x, k) => Math.abs(x.re - l * v[k].re) < 1e-9 && Math.abs(x.im - l * v[k].im) < 1e-9), "eigenvector"); }
  const nrm = Math.sqrt(ip(v1, v1).re * ip(v2, v2).re);
  if (nrm > 1e-6) near(Math.hypot(ip(v1, v2).re, ip(v1, v2).im) / nrm, 0, 1e-8);
}
{ // the worked examples: sigma_x and sigma_y
  const sx = [[C(0), C(1)], [C(1), C(0)]], sy = [[C(0), C(0, -1)], [C(0, 1), C(0)]];
  const e1 = [C(1 / Math.SQRT2), C(1 / Math.SQRT2)], e2 = [C(1 / Math.SQRT2), C(-1 / Math.SQRT2)];
  ok(mv(sx, e1).every((x, k) => Math.abs(x.re - e1[k].re) < 1e-12) && mv(sx, e2).every((x, k) => Math.abs(x.re + e2[k].re) < 1e-12), "sigma_x eigenvectors");
  near(ip(e1, e2).re, 0, 1e-12);
  ok(close(mm(sy, sy), I(2)), "sigma_y squared = identity, eigenvalues +-1");
}
// Gram-Schmidt on random vectors gives an orthonormal set; an invariant complement test for random Hermitian A
for (let t = 0; t < 100; t++) {
  const d = 3, A = randHerm(d);
  // power iteration is not needed: build A = U D U^dagger from a Gram-Schmidt unitary
  let cols = []; for (let k = 0; k < d; k++) { let v = Array.from({ length: d }, rnd); for (const e of cols) { const c = ip(e, v); v = v.map((x, j) => sub(x, mul(c, e[j]))); } const nr = Math.sqrt(ip(v, v).re); cols.push(v.map((x) => C(x.re / nr, x.im / nr))); }
  const U = cols[0].map((_, i) => cols.map((c) => c[i]));
  ok(close(mm(dag(U), U), I(d), 1e-9), "unitary from Gram-Schmidt");
  const D = [[C(1), C(0), C(0)], [C(0), C(-2), C(0)], [C(0), C(0), C(3.5)]], H = mm(mm(U, D), dag(U));
  ok(close(H, dag(H), 1e-9), "U D U^dagger is Hermitian");
  const e1 = cols[0], w = cols[1];
  near(abs2(ip(e1, mv(H, w))), 0, 1e-18); // complement of an eigenvector is invariant
}

// ---------- problem 11: commuting operators ----------
for (let t = 0; t < 100; t++) {
  const d = 3; let cols = [];
  for (let k = 0; k < d; k++) { let v = Array.from({ length: d }, rnd); for (const e of cols) { const c = ip(e, v); v = v.map((x, j) => sub(x, mul(c, e[j]))); } const nr = Math.sqrt(ip(v, v).re); cols.push(v.map((x) => C(x.re / nr, x.im / nr))); }
  const U = cols[0].map((_, i) => cols.map((c) => c[i]));
  const diag = (a) => a.map((x, i) => a.map((_, j) => C(i === j ? x : 0)));
  const A = mm(mm(U, diag([2, 2, 5])), dag(U)), B = mm(mm(U, diag([1, 3, 4])), dag(U));
  ok(close(comm(A, B), mm(I(d), diag([0, 0, 0])), 1e-9), "A and B commute");
  // B maps the eigenspace E_2 = span(u1, u2) of A into itself: no component along u3
  for (const [a, b] of [[1, 0], [0, 1], [0.6, 0.8]]) {
    const v = cols[0].map((x, j) => add(mul(C(a), x), mul(C(b), cols[1][j])));
    near(abs2(ip(cols[2], mv(A, v))) , 0, 1e-18); // A v stays in E_2 too
    near(abs2(ip(cols[2], mv(B, v))), 0, 1e-18);
    const w = mv(A, v); ok(w.every((x, k) => Math.abs(x.re - 2 * v[k].re) < 1e-9 && Math.abs(x.im - 2 * v[k].im) < 1e-9), "v in E_2 has A v = 2 v");
  }
  // converse: common eigenbasis => commute (A B e_k = a_k b_k e_k = B A e_k)
  for (const e of cols) { const x = mv(A, mv(B, e)), y = mv(B, mv(A, e)); ok(x.every((z, k) => Math.abs(z.re - y[k].re) < 1e-9 && Math.abs(z.im - y[k].im) < 1e-9), "AB e = BA e"); }
}
{ // why degeneracy needs care: A = I, B = sigma_x
  const sx = [[C(0), C(1)], [C(1), C(0)]], v = [C(1), C(0)], w = mv(sx, v);
  ok(!(w[0].re * v[1].re === w[1].re * v[0].re && w[0].re / 1 === w[0].re && Math.abs(w[0].re * v[1].re - w[1].re * v[0].re) < 1e-12), "e1 is an eigenvector of I but not of sigma_x");
  ok(Math.abs(w[0].re * v[1].re - w[1].re * v[0].re) > 0.5, "(1,0) not parallel to sigma_x (1,0)=(0,1)");
  const A = [[C(2), C(0), C(0)], [C(0), C(2), C(0)], [C(0), C(0), C(5)]], B = [[C(1), C(0), C(0)], [C(0), C(3), C(0)], [C(0), C(0), C(4)]];
  ok(close(comm(A, B), [[C(0), C(0), C(0)], [C(0), C(0), C(0)], [C(0), C(0), C(0)]]), "example diag commute");
  const e = mv(A, [C(1), C(1), C(0)]); ok(e[0].re === 2 && e[1].re === 2 && e[2].re === 0, "E_2 contains (1,1,0)");
}

console.log(`verify-B: ${n} checks passed (${problems.length} problems, ${supports.length} supports)`);
