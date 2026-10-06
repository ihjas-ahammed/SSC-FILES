// Verifies QM Module 4 problems P9-P13 (src/data/problems/problemsC.js): structure and numbers.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import problems from "../src/data/problems/problemsC.js";
import supports from "../src/data/problems/supportsP9.js";
import { strip } from "../src/data/dsl.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "../../study-map/src/data/concepts");
const existing = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
// Written by the other forks / shared base: allowed as prerequisites, links and step terms.
const external = [
  "Hamiltonian", "Time-Independent Schrödinger Equation", "Stationary State", "Harmonic Oscillator Potential", "Gaussian Integral",
  "Parity of a Function", "Node of a Wave Function", "Infinite Square Well", "Separation of Variables", "Zero-Point Energy", "Number Operator",
  "Counting Solutions of a Sum", "Separation of Variables in Three Dimensions", "Oscillator Energy Levels from Ladder Operators",
];
const names = new Set([...existing.map((c) => c.name), ...supports.map((c) => c.name), ...external]);
const ownNames = new Set(problems.map((p) => p.name));
const allNames = new Set([...names, ...ownNames]);
let n = 0;
const ok = (c, m) => (assert.ok(c, m), n++);
const near = (a, b, e = 1e-9) => Math.abs(a - b) <= e * Math.max(1, Math.abs(a), Math.abs(b));

// ---------- structure ----------
const prompts = new Set(existing.map((c) => c.check.prompt));
const links = (t = "") => [...t.matchAll(/\[\[([^\]|]+)/g)].map((m) => m[1].trim());
const kwOf = (s) => String(s).split("|").map((x) => x.trim()).filter(Boolean);
const order = ["Particle in a Rectangular Box", "Symmetry and Degeneracy in a Box", "Counting Degenerate Box States", "Anisotropic Three-Dimensional Oscillator", "Isotropic Oscillator Degeneracy"];
ok(problems.length === 5 && problems.map((p) => p.name).join() === order.join(), "five problems with exact names");
ok(problems.map((p) => p.ross.section).join() === "B,B,B,C,C", "sections");
const idx = Object.fromEntries(order.map((x, i) => [x, i]));
const seenNames = new Set(existing.map((c) => c.name));
ok(!order.some((x) => seenNames.has(x)), "problem names clash with existing concepts");
for (const p of problems) {
  ok(!p.prerequisites.includes(p.name), `${p.id}: self prerequisite`);
  ok(p.prerequisites.every((x) => names.has(x) || (x in idx && idx[x] < idx[p.name])), `${p.id}: prerequisites ${p.prerequisites.filter((x) => !names.has(x) && !(x in idx))}`);
  ok(p.check.options.length === 3 && p.check.correct === 0, `${p.id}: check`);
  ok(p.pretest.options.length === 3 && p.pretest.correct === 0, `${p.id}: pretest`);
  ok(!prompts.has(p.check.prompt), `${p.id}: duplicate check prompt`); prompts.add(p.check.prompt);
  ok(!prompts.has(p.pretest.prompt), `${p.id}: duplicate pretest prompt`); prompts.add(p.pretest.prompt);
  ok(p.faq.length >= 3, `${p.id}: faq`);
  ok(p.proof.steps.length >= 4 && p.proof.steps.length <= 7, `${p.id}: steps`);
  ok(p.ross && p.ross.label && p.ross.n && p.ross.page >= 1 && p.ross.page <= 9, `${p.id}: ross`);
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
  const texts = [p.linkedFormal, p.meaning, p.example, p.statement, p.proof.idea, p.proof.conclusion, p.proof.example.text, p.pretest.prompt, p.pretest.explanation, ...p.pretest.options, p.check.prompt, p.check.explanation, ...p.check.options, ...p.faq.map((f) => f.q + " " + f.a), ...p.question.faq.map((f) => f.q + " " + f.a), p.question.retryPrompt, ...p.proof.steps.flatMap((s) => [s.title, s.text, s.check.prompt, s.check.explanation, ...s.check.options])];
  for (const t of texts) {
    for (const l of links(t)) ok(allNames.has(l), `${p.id}: broken link [[${l}]]`);
    ok(((strip(t).match(/\$/g) || []).length % 2) === 0, `${p.id}: unbalanced $ in ${t.slice(0, 60)}`);
    ok(!/\$\{/.test(t), `${p.id}: stray template`);
  }
}

// ---------- P9: rectangular box ----------
const hbar = 1, mass = 1;
const Eb = (L, nn) => (Math.PI ** 2 * hbar ** 2 / (2 * mass)) * nn.reduce((s, k, i) => s + (k * k) / (L[i] * L[i]), 0);
// normalization of psi = sqrt(8/V) sin sin sin by Simpson integration, several boxes and states
const simpson = (f, a, b, N = 400) => { const h = (b - a) / N; let s = f(a) + f(b); for (let i = 1; i < N; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
for (const [Lx, Ly, Lz] of [[1, 1, 1], [1, 2, 3], [0.7, 1.3, 2.1]]) {
  for (const [a, b, c] of [[1, 1, 1], [2, 1, 1], [1, 2, 3], [3, 3, 2]]) {
    const A2 = 8 / (Lx * Ly * Lz);
    const ix = simpson((x) => Math.sin(a * Math.PI * x / Lx) ** 2, 0, Lx), iy = simpson((y) => Math.sin(b * Math.PI * y / Ly) ** 2, 0, Ly), iz = simpson((z) => Math.sin(c * Math.PI * z / Lz) ** 2, 0, Lz);
    ok(near(ix, Lx / 2, 1e-7) && near(iy, Ly / 2, 1e-7) && near(iz, Lz / 2, 1e-7), "int sin^2 = L/2");
    ok(near(A2 * ix * iy * iz, 1, 1e-7), `normalization ${Lx},${Ly},${Lz} ${a}${b}${c}`);
  }
}
// n=0 gives the zero function; negative n gives minus the positive one
ok([0.1, 0.4, 0.9].every((x) => Math.sin(0 * x) === 0 && near(Math.sin(-2 * Math.PI * x), -Math.sin(2 * Math.PI * x), 1e-12)), "n=0 and negative n");
// the product satisfies -hbar^2/2m Laplacian psi = E psi (finite differences) and vanishes on the walls
{
  const L = [1, 2, 3], nn = [2, 1, 3];
  const psi = (x, y, z) => Math.sin(nn[0] * Math.PI * x / L[0]) * Math.sin(nn[1] * Math.PI * y / L[1]) * Math.sin(nn[2] * Math.PI * z / L[2]);
  const h = 1e-3, E = Eb(L, nn);
  for (const [x, y, z] of [[0.3, 0.7, 1.1], [0.55, 1.2, 2.2], [0.8, 0.3, 0.4]]) {
    const lap = (psi(x + h, y, z) + psi(x - h, y, z) + psi(x, y + h, z) + psi(x, y - h, z) + psi(x, y, z + h) + psi(x, y, z - h) - 6 * psi(x, y, z)) / (h * h);
    ok(near((-(hbar ** 2) / (2 * mass)) * lap, E * psi(x, y, z), 1e-4), "Schrodinger equation by finite differences");
  }
  ok(Math.abs(psi(0, 0.5, 0.5)) < 1e-12 && Math.abs(psi(L[0], 0.5, 0.5)) < 1e-9 && Math.abs(psi(0.5, L[1], 1)) < 1e-9 && Math.abs(psi(0.5, 1, L[2])) < 1e-9, "vanishes on walls");
}
// worked numbers: ground energies 3 (cube) and 49/36 (1:2:3 box) in units pi^2/2
ok(near(Eb([1, 1, 1], [1, 1, 1]) / (Math.PI ** 2 / 2), 3), "cube ground energy 3");
ok(near(Eb([1, 2, 3], [1, 1, 1]) / (Math.PI ** 2 / 2), 49 / 36), "1:2:3 ground energy 49/36");
ok(near(Eb([1, 1, 1], [1, 2, 1]) / (Math.PI ** 2 / 2), 6), "cube (1,2,1) energy 6");

// ---------- P10 / P11: degeneracy of the cubic box ----------
const cubeLevels = (max) => {
  const m = new Map();
  for (let a = 1; a <= max; a++) for (let b = 1; b <= max; b++) for (let c = 1; c <= max; c++) { const S = a * a + b * b + c * c; (m.get(S) || m.set(S, []).get(S)).push([a, b, c]); }
  return m;
};
const lev = cubeLevels(12);
const g = (S) => (lev.get(S) || []).length;
ok(g(3) === 1 && g(6) === 3 && g(9) === 3 && g(11) === 3 && g(12) === 1 && g(14) === 6, "cubic levels 3,6,9,11,12,14");
ok([4, 5, 7, 8, 10, 13].every((S) => g(S) === 0), "S=4,5,7,8,10,13 impossible");
ok([...lev.keys()].sort((a, b) => a - b).slice(0, 6).join() === "3,6,9,11,12,14", "first six levels");
ok(g(27) === 4 && JSON.stringify(lev.get(27).map((t) => [...t].sort().join("")).filter((v, i, a) => a.indexOf(v) === i).sort()) === JSON.stringify(["115", "333"]), "S=27 has g=4 from {1,1,5} and {3,3,3}");
ok(JSON.stringify(lev.get(14).map((t) => t.join("")).sort()) === JSON.stringify(["123", "132", "213", "231", "312", "321"]), "the six states of S=14");
// orbit counting rule: 6 / 3 / 1 orderings of a triple
for (let a = 1; a <= 6; a++) for (let b = a; b <= 6; b++) for (let c = b; c <= 6; c++) {
  const perms = new Set([[a, b, c], [a, c, b], [b, a, c], [b, c, a], [c, a, b], [c, b, a]].map((t) => t.join(",")));
  const expect = a === b && b === c ? 1 : a === b || b === c ? 3 : 6;
  ok(perms.size === expect, "ordering rule");
}
// for every cubic level the count equals the sum of orbit sizes of its unordered triples
for (const [S, list] of lev) { const un = new Set(list.map((t) => [...t].sort((x, y) => x - y).join())); let tot = 0; for (const u of un) { const [a, b, c] = u.split(",").map(Number); tot += a === b && b === c ? 1 : a === b || b === c ? 3 : 6; } ok(tot === list.length, `orbit sum S=${S}`); }
// ground state of any box is nondegenerate (minimum attained only at (1,1,1)), generic rectangle has no degeneracy, cube swaps agree
for (const L of [[1, 1, 1], [1, 2, 3], [1, 1.37, 2.9], [1, 2, 1]]) {
  const states = [];
  for (let a = 1; a <= 8; a++) for (let b = 1; b <= 8; b++) for (let c = 1; c <= 8; c++) states.push([Eb(L, [a, b, c]), a * 100 + b * 10 + c]);
  states.sort((x, y) => x[0] - y[0]);
  ok(states[0][1] === 111 && states[1][0] > states[0][0] + 1e-9, "ground state nondegenerate");
}
{
  const Lg = [1, 1.37, 2.9]; const seen = new Map();
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) for (let c = 1; c <= 6; c++) { const k = Eb(Lg, [a, b, c]).toFixed(9); seen.set(k, (seen.get(k) || 0) + 1); }
  ok([...seen.values()].every((v) => v === 1), "generic rectangular box: no degeneracy");
}
// the 1:2:3 box: (2,1,1) and (1,2,1) differ; the accidental example Lx = 2 Ly: (4,1,nz) and (2,2,nz) agree
ok(!near(Eb([1, 2, 3], [2, 1, 1]), Eb([1, 2, 3], [1, 2, 1])), "1:2:3 swap changes energy");
ok(near(Eb([2, 1, 1], [4, 1, 1]), Eb([2, 1, 1], [2, 2, 1])), "accidental degeneracy Lx=2Ly");
ok(near(Eb([1, 1, 1], [1, 2, 3]), Eb([1, 1, 1], [3, 2, 1])) && near(Eb([1, 1, 1], [1, 2, 3]) / (Math.PI ** 2 / 2), 14), "(1,2,3) vs (3,2,1) cube");
ok(near(Eb([1, 2, 3], [2, 1, 1]), Math.PI ** 2 / 2 * (4 + 1 / 4 + 1 / 9)) && near(Eb([1, 2, 3], [1, 2, 1]), Math.PI ** 2 / 2 * (1 + 1 + 1 / 9)), "1:2:3 values in the text");

// ---------- P12: anisotropic oscillator ----------
// 1D oscillator energies by diagonalising a truncated H = hbar w (a^dagger a + 1/2) built from X and P
const jacobi = (A) => { // eigenvalues of a real symmetric matrix
  const N = A.length; A = A.map((r) => r.slice());
  for (let sweep = 0; sweep < 200; sweep++) {
    let off = 0; for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) off += A[i][j] ** 2; if (off < 1e-24) break;
    for (let p = 0; p < N; p++) for (let q = p + 1; q < N; q++) {
      if (Math.abs(A[p][q]) < 1e-300) continue;
      const th = (A[q][q] - A[p][p]) / (2 * A[p][q]); const t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)); const c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < N; k++) { const kp = A[k][p], kq = A[k][q]; A[k][p] = c * kp - s * kq; A[k][q] = s * kp + c * kq; }
      for (let k = 0; k < N; k++) { const pk = A[p][k], qk = A[q][k]; A[p][k] = c * pk - s * qk; A[q][k] = s * pk + c * qk; }
    }
  }
  return A.map((r, i) => r[i]).sort((x, y) => x - y);
};
const NT = 40;
const osc1D = (w) => { // x^2 and p^2 from truncated a, a^dagger with hbar = m = 1: H = p^2/2 + w^2 x^2/2
  const a = Array.from({ length: NT }, () => Array(NT).fill(0)); for (let k = 1; k < NT; k++) a[k - 1][k] = Math.sqrt(k);
  const X = a.map((r, i) => r.map((_, j) => (a[i][j] + a[j][i]) / Math.sqrt(2 * w))); // x = (a + a†)/sqrt(2 w)
  const P = a.map((r, i) => r.map((_, j) => 0)); // p^2 = -(w/2)(a - a†)^2
  const D = a.map((r, i) => r.map((_, j) => a[i][j] - a[j][i]));
  const mm = (A, B) => A.map((r, i) => B[0].map((_, j) => r.reduce((s, _, k) => s + A[i][k] * B[k][j], 0)));
  const X2 = mm(X, X), D2 = mm(D, D);
  return a.map((r, i) => r.map((_, j) => (-(w / 2) * D2[i][j]) / 2 + (w * w * X2[i][j]) / 2));
};
const wsets = [[1, 2, 3], [1, 1.37, 2.9], [1, 1, 1]];
const lowest = (w, K = 5) => jacobi(osc1D(w)).slice(0, K);
for (const w of [1, 2, 3, 1.37, 2.9]) { const e = lowest(w); ok(e.every((x, i) => near(x, w * (i + 0.5), 1e-6)), `1D oscillator energies w=${w}`); }
for (const [wx, wy, wz] of wsets) {
  const ex = lowest(wx), ey = lowest(wy), ez = lowest(wz);
  const all = []; for (const a of ex) for (const b of ey) for (const c of ez) all.push(a + b + c);
  all.sort((p, q) => p - q);
  ok(near(all[0], 0.5 * (wx + wy + wz), 1e-6), `ground energy ${wx},${wy},${wz}`);
  for (let a = 0; a < 5; a++) for (let b = 0; b < 5; b++) for (let c = 0; c < 5; c++) ok(all.some((v) => near(v, wx * (a + 0.5) + wy * (b + 0.5) + wz * (c + 0.5), 1e-6)), "sum of 1D energies is a 3D energy");
}
ok(near(0.5 * (1 + 2 + 3), 3), "example ground energy 3 hbar w");
// the product of 1D eigenfunctions solves the 3D equation by finite differences (ground and (1,2,0)) with different frequencies
{
  const w = [1, 2, 3]; const H = [(x) => 1, (x) => 2 * x, (x) => 4 * x * x - 2];
  const phi = (n, om, x) => H[n](Math.sqrt(om) * x) * Math.exp(-om * x * x / 2);
  for (const nn of [[0, 0, 0], [1, 2, 0], [2, 0, 1].map((v) => Math.min(v, 2))]) {
    const psi = (x, y, z) => phi(nn[0], w[0], x) * phi(nn[1], w[1], y) * phi(nn[2], w[2], z);
    const Vv = (x, y, z) => 0.5 * (w[0] ** 2 * x * x + w[1] ** 2 * y * y + w[2] ** 2 * z * z);
    const E = w.reduce((s, om, i) => s + om * (nn[i] + 0.5), 0), h = 1e-3;
    for (const [x, y, z] of [[0.3, -0.2, 0.4], [0.6, 0.1, -0.3]]) {
      const lap = (psi(x + h, y, z) + psi(x - h, y, z) + psi(x, y + h, z) + psi(x, y - h, z) + psi(x, y, z + h) + psi(x, y, z - h) - 6 * psi(x, y, z)) / (h * h);
      ok(near(-0.5 * lap + Vv(x, y, z) * psi(x, y, z), E * psi(x, y, z), 1e-4), `3D oscillator eigenfunction ${nn}`);
    }
  }
  // text example E = hbar w (nx + 2 ny + 3 nz + 3) and the accidental pairs
  const E = ([a, b, c]) => w[0] * (a + 0.5) + w[1] * (b + 0.5) + w[2] * (c + 0.5);
  ok(near(E([0, 0, 0]), 3) && near(E([1, 0, 0]), 4) && near(E([2, 0, 0]), 5) && near(E([0, 1, 0]), 5) && near(E([0, 0, 1]), 6), "example states");
  ok(near(2 * 1.5 + 0.5, 3.5) && near(2 * 0.5 + 2.5, 3.5), "wx = 2 wy accidental pair");
  // generic frequencies: no coincidences among the first levels
  const gw = [1, 1.37, 2.9]; const seen = new Set(); let dup = false;
  for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++) for (let c = 0; c < 6; c++) { const k = (gw[0] * (a + .5) + gw[1] * (b + .5) + gw[2] * (c + .5)).toFixed(9); if (seen.has(k)) dup = true; seen.add(k); }
  ok(!dup, "generic anisotropic oscillator: nondegenerate");
}

// ---------- P13: isotropic oscillator ----------
const gN = (N) => { let c = 0; for (let a = 0; a <= N; a++) for (let b = 0; b <= N; b++) for (let d = 0; d <= N; d++) if (a + b + d === N) c++; return c; };
const binom = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i; return Math.round(r); };
for (let N = 0; N <= 14; N++) {
  ok(gN(N) === ((N + 1) * (N + 2)) / 2, `g_N N=${N}`);
  ok(gN(N) === binom(N + 2, 2), `stars and bars N=${N}`);
  let s = 0; for (let a = 0; a <= N; a++) s += N - a + 1; ok(s === gN(N), "direct sum over nx");
}
ok([0, 1, 2, 3].map(gN).join() === "1,3,6,10", "g = 1,3,6,10");
{
  const states = (N) => { const o = []; for (let a = 0; a <= N; a++) for (let b = 0; b <= N; b++) for (let c = 0; c <= N; c++) if (a + b + c === N) o.push(`${a}${b}${c}`); return o.sort(); };
  ok(states(2).join() === ["200", "020", "002", "110", "101", "011"].sort().join(), "N=2 list");
  ok(states(3).join() === ["300", "030", "003", "210", "201", "120", "021", "102", "012", "111"].sort().join(), "N=3 list");
  ok(states(1).join() === ["100", "010", "001"].sort().join(), "N=1 list");
}
// isotropic energies from the three 1D oscillators and their multiplicities (numerical diagonalisation)
{
  const e = lowest(1, 6); const all = []; for (const a of e) for (const b of e) for (const c of e) all.push(Math.round((a + b + c) * 1e6) / 1e6);
  const cnt = new Map(); for (const v of all) cnt.set(v, (cnt.get(v) || 0) + 1);
  for (let N = 0; N <= 3; N++) ok(cnt.get(N + 1.5) === ((N + 1) * (N + 2)) / 2, `numerical multiplicity N=${N}`);
}
// comparison text: 1D levels 1/2, 3/2 nondegenerate; 3D levels 3/2 (g=1), 5/2 (g=3); box degeneracies 1,3,3,3,1,6
ok(near(3 * 0.5, 1.5) && near(3 * 0.5 + 1, 2.5) && gN(0) === 1 && gN(1) === 3, "1D vs 3D lowest levels");
ok([3, 6, 9, 11, 12, 14].map(g).join() === "1,3,3,3,1,6", "box pattern 1,3,3,3,1,6");

console.log(`verify-P9: ${n} checks passed (${problems.length} problems)`);
