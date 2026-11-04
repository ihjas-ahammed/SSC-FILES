// Builds src/data/module1.js from the optics pool (../data/*.js) and the Module I PYQs.
// The PYQs come from ../data/pyq.js, so the solutions are written once, in authoring/pyq.py.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OPTICS = path.resolve(HERE, "../..");
const steps = (await import("../authoring/module1-steps.mjs")).default;
const conceptExtra = (await import("../authoring/module1-concepts.mjs")).default;
const { support, poolExtra, stepTerms, qTerms } = await import("../authoring/module1-support.mjs");
const expanded = (await import("../authoring/module1-expanded.mjs")).default;

const ctx = vm.createContext({});
for (const f of ["m1.concepts.js", "m1.extra.concepts.js", "pyq.js"]) {
  vm.runInContext(fs.readFileSync(path.join(OPTICS, "data", f), "utf8"), ctx);
}
const pool = ctx.CONCEPTS.filter((c) => c.sec.startsWith("1."));
const pyqs = ctx.PYQ.filter((p) => p.course === "op" && p.sec.startsWith("1."));

const GROUP = { "1.1": "fermat", "1.2": "surface", "1.3": "lens", "1.4": "newton" };
const plain = (html) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const strip = (linked) => linked.replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, n, l) => (l || n).trim());

const byId = Object.fromEntries(pool.map((c) => [c.id, c]));
const titleOf = (id) => {
  if (!byId[id]) throw new Error("Unknown concept id " + id);
  return byId[id].title;
};
const nameSet = new Set([...pool.map((c) => c.title), ...support.map((s) => s.name)]);

const poolConcepts = pool.map((c) => ({
  id: c.id,
  name: c.title,
  group: GROUP[c.sec],
  kind: "idea",
  minutes: 6,
  aliases: [],
  verify: false,
  status: "unknown",
  usedIn: [],
  prerequisites: [...(c.needs || []).map(titleOf), ...(poolExtra[c.id] || [])],
  symbol: "",
  meaning: c.oneLine,
  linkedFormal: c.statement,
  formal: strip(c.statement),
  example: [c.intuition, expanded[c.id]?.example].filter(Boolean).join("\n\n"),
  faq: [
    ...(c.traps || []).map((t) => ({ q: "Where students go wrong", a: t })),
    ...(conceptExtra[c.id]?.faq || []).map(([q, a]) => ({ q, a })),
    ...(expanded[c.id]?.faq || []).map(([q, a]) => ({ q, a })),
  ],
  pretest: conceptExtra[c.id]?.pretest,
  check: conceptExtra[c.id]?.check,
}));

const supportConcepts = support.map((s, i) => ({
  id: `c.1.s.${i + 1}`,
  name: s.name,
  group: s.group,
  kind: "idea",
  minutes: s.minutes,
  aliases: [],
  verify: false,
  status: "unknown",
  usedIn: [],
  prerequisites: s.prerequisites,
  symbol: "",
  meaning: s.meaning,
  linkedFormal: s.linkedFormal,
  formal: strip(s.linkedFormal),
  example: s.example,
  faq: s.faq.map(([q, a]) => ({ q, a })),
  pretest: s.pretest,
  check: s.check,
}));
const concepts = [...poolConcepts, ...supportConcepts];

const sectionOf = (id) => {
  const n = Number(id.split(".").pop());
  return n <= 45 ? "A" : n <= 48 ? "B" : "C";
};
const counters = {};
const questions = pyqs.map((p) => {
  const section = sectionOf(p.id);
  counters[section] = (counters[section] || 0) + 1;
  const spec = steps[p.id];
  if (!spec) throw new Error("No guided steps for " + p.id);
  const terms = [...new Set([...p.tests.map(titleOf), ...(qTerms[p.id] || [])])];
  for (const t of terms) if (!nameSet.has(t)) throw new Error("Bad term " + t);
  const stepList = spec.steps.map((s, i) => {
    const term = stepTerms[p.id]?.[i] || s.check.term;
    if (!nameSet.has(term)) throw new Error("Bad step term " + term);
    return { prompt: s.check.prompt, options: s.check.options, correct: s.check.correct, explanation: s.check.explanation, term };
  });
  const blocks = spec.steps.map((s, i) => ({ title: s.title, text: s.text, checkIndex: i, hint: s.check.explanation, symbols: [] }));
  const linkedAnswer = [spec.idea, ...blocks.map((b) => b.text), spec.conclusion].join("\n\n");
  return {
    id: `Q-${section}-${counters[section]}`,
    section,
    number: counters[section],
    title: p.title,
    text: plain(p.prompt),
    terms,
    conceptName: terms[0],
    sourceLabel: p.year ? `${p.exam} · Q${p.qno}` : `Module I practice · Q${p.qno}`,
    source: "module1.md",
    page: 0,
    verify: null,
    type: "proof",
    marks_style: `${p.marks} marks`,
    steps: stepList,
    solutionBlocks: blocks,
    linkedAnswer,
    answer: strip(linkedAnswer),
    faq: spec.faq.map(([q, a]) => ({ q, a })),
    keywords: spec.keywords,
    retryPrompt: spec.retryPrompt,
    graphTerms: terms,
    symbols: [],
    sourcePageText: plain(p.prompt),
  };
});

const used = {};
for (const q of questions) for (const t of new Set([...q.terms, ...q.steps.map((s) => s.term)])) (used[t] ||= []).push(q.id);
const depthMemo = {};
const byName = Object.fromEntries(concepts.map((c) => [c.name, c]));
const depthOf = (n) =>
  depthMemo[n] ??= byName[n].prerequisites.length ? 1 + Math.max(...byName[n].prerequisites.map(depthOf)) : 0;
for (const c of concepts) {
  c.usedIn = used[c.name] || [];
  c.depth = depthOf(c.name);
}

const out = {
  concepts,
  questions,
  report: { created: concepts.length, reused: 0, verifyFlags: 0, reviewed: new Date().toISOString().slice(0, 10) },
};
fs.writeFileSync(path.join(HERE, "../src/data/module1.js"), "export default " + JSON.stringify(out, null, 1) + ";\n");
console.log(`module1: ${concepts.length} concepts, ${questions.length} questions`);
