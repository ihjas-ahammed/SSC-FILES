import { strip } from "./dsl.js";
import support1 from "./support1.js";
import support2 from "./support2.js";
import problemsA from "./problemsA.js";
import problemsB from "./problemsB.js";
import problemsC from "./problemsC.js";

// Assemble the course. Everything about an exercise is written once on its
// problem concept; the question, its guided steps and its unlockable solution
// are derived from that, so they cannot disagree.
const supports = [...support1, ...support2];
const problems = [...problemsA, ...problemsB, ...problemsC];
const all = [...supports, ...problems];
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
    sourceLabel: `Theoretical Exercise ${p.ross.n}`,
    source: `Ross, A First Course in Probability (10e), Chapter 1, Theoretical Exercise ${p.ross.n}`,
    page: p.ross.page,
    verify: false,
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
  p.usedIn = [q.id];
  return q;
});

// depth = 1 + deepest prerequisite; usedIn lists the questions each concept supports.
const depth = {};
const depthOf = (name) => {
  if (depth[name]) return depth[name];
  const c = byName[name];
  if (!c) throw new Error("Missing prerequisite: " + name);
  return (depth[name] = c.prerequisites.length ? 1 + Math.max(...c.prerequisites.map(depthOf)) : 1);
};
const used = {};
questions.forEach((q) => q.terms.forEach((t) => (used[t] = [...(used[t] || []), q.id])));
const concepts = all.map((c) => ({
  ...c,
  depth: depthOf(c.name),
  usedIn: c.kind === "problem" ? c.usedIn : [...new Set([...(c.usedIn || []), ...(used[c.name] || [])])],
}));

export default {
  concepts,
  questions,
  report: {
    created: concepts.length,
    reused: 0,
    verifyFlags: 0,
    ground: [],
    reviewed: "2026-10-06",
  },
};
