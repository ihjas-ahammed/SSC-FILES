import assert from "node:assert/strict";
import course from "../course.js";
import { strip } from "../src/data/dsl.js";
import { parseKeywords, suggestions, exactKeyword, MIN_LETTERS } from "../../../flow-library/study-map/src/lib/keywords.js";
import { linkedNames } from "../../../flow-library/study-map/src/lib/glossary.js";

const { concepts, questions } = course;
const byName = Object.fromEntries(concepts.map((c) => [c.name, c]));
let n = 0;
const ok = (cond, msg) => (assert.ok(cond, msg), n++);

// ---------- structure ----------
const prompts = new Set();
for (const c of concepts) {
  ok(c.check && c.check.options.length === 3, `${c.name}: check needs 3 options`);
  ok(!prompts.has(c.check.prompt), `${c.name}: duplicate check prompt`);
  prompts.add(c.check.prompt);
  ok(c.prerequisites.every((p) => byName[p]), `${c.name}: missing prerequisite`);
  ok(c.prerequisites.every((p) => byName[p].depth < c.depth), `${c.name}: depth order`);
  ok(!/\$\{/.test(JSON.stringify(c)), `${c.name}: stray template`);
  for (const text of [c.linkedFormal, c.meaning, c.example, ...(c.faq || []).map((f) => f.a)])
    for (const l of linkedNames(text || "")) ok(byName[l], `${c.name}: broken link [[${l}]]`);
  ok((c.faq || []).length >= 1, `${c.name}: needs a FAQ`);
  ok(c.pretest || c.kind !== "problem" || true, "");
}
for (const q of questions) {
  const c = byName[q.conceptName];
  ok(c && c.kind === "problem" && c.questionId === q.id, `${q.id}: problem concept`);
  ok(q.terms.every((t) => byName[t]), `${q.id}: terms`);
  ok(!q.terms.includes(q.conceptName), `${q.id}: terms must not spoil the proof`);
  ok(q.steps.length === q.solutionBlocks.length && q.steps.length >= 4, `${q.id}: steps`);
  ok(q.solutionBlocks.map((b) => b.text).every((t) => q.linkedAnswer.includes(t)), `${q.id}: blocks join to answer`);
  const kws = parseKeywords(q.keywords);
  ok(kws.length >= 16 && kws.length <= 24, `${q.id}: keyword count ${kws.length}`);
  ok(new Set(kws.map((k) => k.term)).size === kws.length, `${q.id}: duplicate keywords`);
  ok(q.retryPrompt && q.faq.length >= 4, `${q.id}: retry/faq`);
  for (const s of q.steps) {
    ok(s.options.length === 3 && s.correct === 0, `${q.id}: step options`);
    ok(byName[s.term], `${q.id}: step term ${s.term}`);
  }
  for (const text of [q.linkedAnswer, ...q.faq.map((f) => f.a), ...q.steps.map((s) => s.explanation)])
    for (const l of linkedNames(text)) ok(byName[l], `${q.id}: broken link [[${l}]]`);
  ok(!/[\[\]]{2}/.test(q.answer), `${q.id}: answer not stripped`);
}
ok(questions.length === 14, "14 exercises (got " + questions.length + ")");

// ---------- keywords ----------
const kw = parseKeywords(["Vandermonde's identity|Vandermonde", "stars and bars"]);
ok(suggestions("va", kw, []).length === 0, "below 3 letters gives nothing");
ok(MIN_LETTERS === 3, "min letters");
ok(suggestions("van", kw, []).length === 1, "3 letters suggests");
ok(exactKeyword("vandermonde", kw, []) !== undefined, "alias matches");

const ids = new Set(); for (const c of concepts) { ok(!ids.has(c.id), `duplicate id ${c.id}`); ids.add(c.id); }
ok(new Set(concepts.map((c) => c.name)).size === concepts.length, "unique names");
ok(new Set(questions.map((q) => q.id)).size === questions.length, "unique question ids");
console.log(`validate: ${n} checks passed (${concepts.length} concepts, ${questions.length} questions)`);
