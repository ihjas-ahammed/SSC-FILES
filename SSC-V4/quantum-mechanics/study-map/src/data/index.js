import { strip } from "./dsl.js";
import ground from "./concepts/ground.json" with { type: "json" };
import spaces from "./concepts/spaces.json" with { type: "json" };
import states from "./concepts/states.json" with { type: "json" };
import operators from "./concepts/operators.json" with { type: "json" };
import eigen from "./concepts/eigen.json" with { type: "json" };
import matrices from "./concepts/matrices.json" with { type: "json" };
import waves from "./concepts/waves.json" with { type: "json" };
import uncertainty from "./concepts/uncertainty.json" with { type: "json" };
import notation from "./concepts/notation.json" with { type: "json" };
import supportsA from "./problems/supportsA.js";
import supportsB from "./problems/supportsB.js";
import supportsC from "./problems/supportsC.js";
import problemsA from "./problems/problemsA.js";
import problemsB from "./problems/problemsB.js";
import problemsC from "./problems/problemsC.js";
import metadata from "./metadata.json" with { type: "json" };

// The 32 printed questions repeat each other conceptually, so the course is
// 16 unique problems. Each problem is its own concept; its question, guided
// steps and unlockable solution are all derived from it and cannot disagree.
const base = [
  ...ground, ...spaces, ...states, ...operators, ...eigen,
  ...matrices, ...waves, ...uncertainty, ...notation,
];
const supports = [...supportsA, ...supportsB, ...supportsC];
const problems = [...problemsA, ...problemsB, ...problemsC];
const all = [...base, ...supports, ...problems];
const byName = Object.fromEntries(all.map((c) => [c.name, c]));

const counters = {};
const questions = problems.map((p) => {
  const section = p.ross.section;
  counters[section] = (counters[section] || 0) + 1;
  const blocks = p.proof.steps.map((s, i) => ({
    title: s.title,
    text: s.text,
    checkIndex: i,
    hint: strip(s.check.explanation),
    symbols: [],
  }));
  const linkedAnswer = [p.proof.idea, ...blocks.map((b) => b.text), p.proof.conclusion].join("\n\n");
  const q = {
    id: `Q-${section}-${counters[section]}`,
    section,
    number: p.ross.n,
    title: p.title,
    text: p.statement,
    terms: [...p.prerequisites],
    conceptName: p.name,
    sourceLabel: p.ross.label,
    source: "Module3.pdf",
    page: p.ross.page,
    verify: null,
    type: "proof",
    marks_style: "proof",
    steps: p.proof.steps.map((s) => ({
      prompt: s.check.prompt,
      options: s.check.options,
      correct: s.check.correct,
      explanation: s.check.explanation,
      term: s.check.term || p.prerequisites[0],
    })),
    solutionBlocks: blocks,
    linkedAnswer,
    answer: strip(linkedAnswer),
    graphTerms: [...p.prerequisites],
    symbols: [],
    ...p.question,
  };
  p.questionId = q.id;
  p.statementText = strip(p.statement);
  return q;
});

// Keep only concepts the questions can reach (directly or through prerequisites).
const reach = new Set();
const visit = (name) => {
  if (reach.has(name)) return;
  const c = byName[name];
  if (!c) throw new Error("Missing concept: " + name);
  reach.add(name);
  c.prerequisites.forEach(visit);
  // Anything a kept note links to must exist too, or its link would be dead.
  for (const m of JSON.stringify(c).matchAll(/\[\[([^\]|]+)/g)) visit(m[1]);
};
questions.forEach((q) => {
  [q.conceptName, ...q.terms, ...q.steps.map((s) => s.term)].forEach(visit);
  for (const m of JSON.stringify([q.linkedAnswer, q.faq]).matchAll(/\[\[([^\]|]+)/g)) visit(m[1]);
});

const depth = {};
const depthOf = (name) =>
  depth[name] !== undefined
    ? depth[name]
    : (depth[name] = byName[name].prerequisites.length
    ? 1 + Math.max(...byName[name].prerequisites.map(depthOf))
    : 0);
const used = {};
questions.forEach((q) =>
  new Set([...q.terms, ...q.steps.map((s) => s.term)]).forEach((t) => (used[t] = [...(used[t] || []), q.id])),
);
const concepts = all
  .filter((c) => reach.has(c.name))
  .map((c) => ({
    ...c,
    formal: c.formal ?? strip(c.linkedFormal),
    depth: depthOf(c.name),
    usedIn: c.kind === "problem" ? [c.questionId] : used[c.name] || [],
  }));

export default {
  ...metadata,
  concepts,
  questions,
  report: { ...metadata.report, created: concepts.length, verifyFlags: 0, reviewed: "2026-10-06" },
};
