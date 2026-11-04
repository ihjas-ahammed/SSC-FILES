// Audit of every note: math renders, warm-up differs from the check, plain-English limits.
// Usage: node --import ./tests/setup-course.mjs tests/notes-audit.mjs [--list]
import assert from "node:assert/strict";
import katex from "katex";
import { concepts } from "../src/graph.js";

const LIST = process.argv.includes("--list");
const strip = (t = "") => t.replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, n, l) => l || n);
const noMath = (t = "") => strip(t).replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, " ");

// Words a beginner would stumble on. Each is either replaced by a plain word or explained.
const HARD = [
  "entrywise", "induced", "canonical", "idealized", "idealised", "distributionally",
  "unbounded", "bijective", "isomorphic", "homogeneous", "trivial", "nontrivial", "henceforth", "thereby",
  "whereby", "hence", "notwithstanding", "aforementioned", "utilize", "utilise", "precisely", "arbitrary",
  "arbitrarily", "respectively", "equivalently", "subsequently", "correspondingly", "denote", "denotes",
  "nonnegative", "nonempty", "scalar-valued", "supremum", "infimum", "ansatz", "tuple", "functional",
  "manifold", "ill-defined", "well-defined", "vanish", "vanishes", "admissible", "pointwise", "cardinality",
];
// Longer words we still allow because the course teaches them (concept names and their parts).
const allowed = new Set();
for (const c of concepts) for (const w of c.name.toLowerCase().split(/[^a-z]+/)) allowed.add(w);
for (const w of ["probability", "multiplication", "interpretation", "representation", "orthonormal", "eigenvalues",
  "eigenvectors", "wavefunction", "differentiate", "differentiation", "exponential", "mathematical", "square-integrable",
  "conjugate-linear", "mathematics", "momentum", "position", "amplitude", "amplitudes", "everywhere", "measurement",
  "measurements", "independent", "calculation", "calculations", "possibilities", "quantum", "properties", "operators",
  "transformation", "transformations", "completeness", "orthogonality", "subtraction", "direction", "directions",
  "expectation", "uncertainty", "coefficients", "coefficient", "polynomial", "continuous", "continuity", "combination",
  "combinations", "something", "explanation", "understanding", "approaches", "sufficiently", "interested"]) allowed.add(w);

let errors = 0,
  flagged = 0,
  formulas = 0;
const problems = [];
function fail(c, where, msg) {
  errors++;
  problems.push(`ERROR ${c.name} [${where}] ${msg}`);
}
function math(c, where, text) {
  for (const m of (text || "").matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)) {
    try {
      katex.renderToString(m[1] ?? m[2], { throwOnError: true, strict: false });
      formulas++;
    } catch (e) {
      fail(c, where, `${m[0].slice(0, 60)}: ${e.message}`);
    }
  }
  if (/[\x00-\x08\x0b\x0e-\x1f]/.test(text || "")) fail(c, where, "control character (unescaped backslash?)");
  const dollars = ((text || "").replace(/\\\$/g, "").match(/\$/g) || []).length;
  if (dollars % 2) fail(c, where, "odd number of $ signs");
}
function readability(c, where, text) {
  const plain = noMath(text);
  const notes = [];
  for (const s of plain.split(/(?<=[.!?])\s+/)) {
    const words = s.split(/\s+/).filter(Boolean);
    if (words.length > 32) notes.push(`long sentence (${words.length} words): "${words.slice(0, 9).join(" ")}…"`);
  }
  for (const w of plain.toLowerCase().match(/[a-z][a-z-]+/g) || []) {
    if (HARD.includes(w)) notes.push(`hard word "${w}"`);
    else if (!w.includes("-") && w.length >= 14 && !allowed.has(w)) notes.push(`very long word "${w}"`);
  }
  if (notes.length) {
    flagged++;
    problems.push(`flag  ${c.name} [${where}] ${[...new Set(notes)].join("; ")}`);
  }
}

const needProof = new Set(process.env.NEED_PROOF ? process.env.NEED_PROOF.split("|") : []);
for (const c of concepts) {
  const items = [["meaning", c.meaning], ["formal", c.linkedFormal], ["example", c.example]];
  if (c.pretest) items.push(["pretest", c.pretest.prompt], ["pretest explanation", c.pretest.explanation], ...c.pretest.options.map((o, i) => [`pretest option ${i}`, o]));
  items.push(["check", c.check.prompt], ["check explanation", c.check.explanation], ...c.check.options.map((o, i) => [`check option ${i}`, o]));
  (c.faq || []).forEach((f, i) => items.push([`faq ${i} q`, f.q], [`faq ${i} a`, f.a]));
  if (c.proof) {
    items.push(["proof idea", c.proof.idea], ["proof conclusion", c.proof.conclusion]);
    c.proof.steps.forEach((s, i) => items.push([`proof step ${i} title`, s.title], [`proof step ${i}`, s.text]));
    if (c.proof.example) items.push(["proof example", c.proof.example.text]);
  }
  for (const [where, text] of items) {
    math(c, where, text);
    // Problem concepts were written earlier under their own rules; they get the readability pass too.
    readability(c, where, text);
  }
  if (c.kind !== "problem") {
    if (!c.pretest) fail(c, "pretest", "missing warm-up question");
    if (!c.faq || c.faq.length < 2) fail(c, "faq", "needs at least two FAQs");
    if (c.pretest && c.pretest.prompt === c.check.prompt) fail(c, "check", "warm-up and check are the same question");
    if (c.pretest && c.pretest.options.some((o) => o === c.check.options[c.check.correct]) && c.pretest.prompt === c.check.prompt) fail(c, "check", "duplicate");
    if (c.pretest && c.check.options[c.check.correct] === c.pretest.options[c.pretest.correct])
      fail(c, "check", "warm-up and check have the same right answer text");
  }
  if (needProof.has(c.name) && !c.proof) fail(c, "proof", "this note should carry a proof");
  if (c.proof) {
    assert(c.proof.steps.length >= 2, `${c.name}: proof too short`);
    for (const s of c.proof.steps) assert(s.title && s.text, `${c.name}: empty proof step`);
  }
}
if (LIST || errors) for (const p of problems) console.log(p);
else for (const p of problems.slice(0, 60)) console.log(p);
console.log(`${concepts.length} notes, ${concepts.filter((c) => c.proof).length} with proofs, ${formulas} formulas, ${errors} errors, ${flagged} notes flagged for wording.`);
if (errors) process.exit(1);
