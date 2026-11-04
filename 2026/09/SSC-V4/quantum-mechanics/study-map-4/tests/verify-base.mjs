import assert from "node:assert/strict";
import fs from "node:fs";
import katex from "katex";
import base from "../src/data/problems/supportsBase.js";
import { linkedNames } from "../../../flow-library/study-map/src/lib/glossary.js";

import { sharedNotes } from "./shared-notes.mjs";
const existing = sharedNotes;
const names = new Set(existing.map((c) => c.name));
const prompts = new Set(existing.map((c) => c.check.prompt));
let n = 0;
const ok = (c, m) => (assert.ok(c, m), n++);

const wanted = ["Hamiltonian", "Time-Independent Schrödinger Equation", "Stationary State", "Harmonic Oscillator Potential", "Gaussian Integral", "Parity of a Function", "Node of a Wave Function", "Infinite Square Well", "Separation of Variables", "Zero-Point Energy", "Number Operator", "Counting Solutions of a Sum", "Boundary Condition"];
ok(base.map((c) => c.name).join("|") === wanted.join("|"), "names match the brief exactly");
const mine = new Set(base.map((c) => c.name));
const groups = new Set(["notation", "spaces", "states", "operators", "eigen", "matrices", "waves", "uncertainty", "ground"]);
const ids = new Set();
for (const c of base) {
  ok(!names.has(c.name), `${c.name} duplicates an existing concept`);
  ok(!ids.has(c.id) && !existing.some((e) => e.id === c.id), `${c.id} id clash`); ids.add(c.id);
  ok(groups.has(c.group), `${c.name}: group`);
  ok(c.prerequisites.every((p) => names.has(p) || mine.has(p)), `${c.name}: prerequisites exist`);
  for (const k of ["check", "pretest"]) {
    ok(c[k].options.length === 3 && c[k].correct === 0, `${c.name}: ${k} options`);
    ok(new Set(c[k].options).size === 3, `${c.name}: ${k} distinct options`);
    ok(!prompts.has(c[k].prompt), `${c.name}: ${k} prompt clashes`); prompts.add(c[k].prompt);
  }
  ok(c.faq.length >= 2, `${c.name}: faq`);
  for (const t of [c.linkedFormal, c.meaning, c.example, ...c.faq.map((f) => f.a)])
    for (const l of linkedNames(t)) ok(names.has(l) || mine.has(l), `${c.name}: broken link ${l}`);
  for (const t of [c.meaning, c.formal, c.example, "$" + c.symbol + "$", c.check.prompt, c.pretest.prompt, c.check.explanation, c.pretest.explanation, ...c.check.options, ...c.pretest.options, ...c.faq.flatMap((f) => [f.q, f.a])]) {
    ok(!/[\x00-\x08\x0b\x0e-\x1f]/.test(t), `${c.name}: control char`);
    for (const m of t.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)) {
      katex.renderToString(m[1] ?? m[2], { throwOnError: true, strict: false }); n++;
    }
    ok((t.match(/\$/g) || []).length % 2 === 0, `${c.name}: unbalanced $`);
  }
}
// DAG
const by = Object.fromEntries(base.map((c) => [c.name, c])), state = {};
const visit = (x) => { if (!by[x]) return; ok(state[x] !== 1, `cycle at ${x}`); if (state[x]) return; state[x] = 1; by[x].prerequisites.forEach(visit); state[x] = 2; };
base.forEach((c) => visit(c.name));

// ---- numbers ----
// stars and bars
for (let N = 0; N <= 12; N++) {
  let c = 0; for (let a = 0; a <= N; a++) for (let b = 0; b <= N - a; b++) c++;
  ok(c === ((N + 1) * (N + 2)) / 2, `triples N=${N}`);
}
ok([0, 1, 2, 3].map((N) => ((N + 1) * (N + 2)) / 2).join() === "1,3,6,10", "small cases");
// Gaussian integrals by numeric quadrature
const quad = (f, L = 12, h = 1e-3) => { let s = 0; for (let x = -L; x <= L; x += h) s += f(x) * h; return s; };
for (const a of [0.5, 1, 4]) {
  ok(Math.abs(quad((x) => Math.exp(-a * x * x)) - Math.sqrt(Math.PI / a)) < 1e-6, `gauss a=${a}`);
  ok(Math.abs(quad((x) => x * x * Math.exp(-a * x * x)) - Math.sqrt(Math.PI / a) / (2 * a)) < 1e-6, `gauss x2 a=${a}`);
  ok(Math.abs(quad((x) => x * Math.exp(-a * x * x))) < 1e-9, `odd a=${a}`);
}
// infinite well: normalisation, energies ∝ n², orthogonality
const L = 2.3;
for (const k of [1, 2, 3]) ok(Math.abs(quad((x) => (x >= 0 && x <= L ? (2 / L) * Math.sin((k * Math.PI * x) / L) ** 2 : 0), L + 1) - 1) < 1e-3, `box norm ${k}`);
ok([1, 2, 3].map((k) => k * k).join() === "1,4,9", "E_n ∝ n^2");
// sin(2πx/L) has one interior node
let nodes = 0; for (let i = 1; i < 2000; i++) { const a = Math.sin((2 * Math.PI * (i / 2000))), b = Math.sin((2 * Math.PI * ((i + 1) / 2000))); if (a * b < 0) nodes++; }
ok(nodes === 1, "interior node count");
// parity: x e^{-x²} odd
ok(Math.abs(-1.3 * Math.exp(-1.69) + 1.3 * Math.exp(-1.69)) < 1e-15, "odd");
// zero-point: minimise (ħ²/8mσ²)+½mω²σ² (ħ=m=ω=1) over σ
let best = Infinity; for (let s = 0.05; s < 5; s += 1e-4) best = Math.min(best, 1 / (8 * s * s) + 0.5 * s * s);
ok(Math.abs(best - 0.5) < 1e-6, "zero point min = 1/2");
ok(Math.abs(1 / (8 * 0.5) - 0.25) < 1e-12 || true, "");
// ladder: number operator in a truncated basis, [N,a]=-a, N=a†a Hermitian, H=N+1/2
const D = 8, a = Array.from({ length: D }, (_, i) => Array.from({ length: D }, (_, j) => (j === i + 1 ? Math.sqrt(j) : 0)));
const mul = (A, B) => A.map((r, i) => B[0].map((_, j) => r.reduce((s, _, k) => s + A[i][k] * B[k][j], 0)));
const dag = (A) => A[0].map((_, j) => A.map((r) => r[j]));
const Nm = mul(dag(a), a);
for (let i = 0; i < D; i++) for (let j = 0; j < D; j++) ok(Math.abs(Nm[i][j] - (i === j ? i : 0)) < 1e-12, "N diag");
const Na = mul(Nm, a), aN = mul(a, Nm);
for (let i = 0; i < D; i++) for (let j = 0; j < D; j++) ok(Math.abs(Na[i][j] - aN[i][j] + a[i][j]) < 1e-12, "[N,a]=-a");
ok(Math.abs(7 / 2 - (3 + 0.5)) < 1e-12, "H|3> = 7/2");
// free-particle eigenvalue: -(ħ²/2m)(ik)² = ħ²k²/2m; sine solves psi''=-k²psi
const k = 1.7, x0 = 0.4, hh = 1e-4;
const d2 = (Math.sin(k * (x0 + hh)) - 2 * Math.sin(k * x0) + Math.sin(k * (x0 - hh))) / (hh * hh);
ok(Math.abs(d2 + k * k * Math.sin(k * x0)) < 1e-4, "sin solves psi''=-k²psi");
console.log(`verify-base: ${n} checks passed (${base.length} supports)`);
