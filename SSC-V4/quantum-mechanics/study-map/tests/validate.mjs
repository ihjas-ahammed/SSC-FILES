import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import katex from "katex";
import {
  concepts,
  questions,
  byName,
  readingRoute,
  checklist,
  optionsFor,
  exportVault,
} from "../../../flow-library/study-map/src/graph.js";
import { makeZip } from "../../../flow-library/study-map/src/zip.js";

assert.equal(questions.length, 32);
for (const [s, n] of [
  ["A", 15],
  ["B", 13],
  ["C", 4],
])
  assert.equal(questions.filter((q) => q.section === s).length, n);
assert.equal(
  new Set(concepts.map((c) => c.name.toLowerCase())).size,
  concepts.length,
);
assert.equal(new Set(concepts.map((c) => c.id)).size, concepts.length);
const visited = new Set(),
  active = new Set();
function visit(name) {
  assert(byName[name], `Missing concept ${name}`);
  assert(!active.has(name), `Cycle at ${name}`);
  if (visited.has(name)) return;
  active.add(name);
  byName[name].prerequisites.forEach(visit);
  active.delete(name);
  visited.add(name);
}
concepts.forEach((c) => visit(c.name));
const ground = new Set([
  "Real Number",
  "Integer",
  "Set",
  "Function",
  "Basic Algebra",
  "Coordinate",
  "Derivative",
  "Integral",
  "Complex Number Arithmetic",
]);
for (const c of concepts) {
  if (!c.prerequisites.length)
    assert(ground.has(c.name), `Unauthorized ground ${c.name}`);
  assert.equal(
    c.depth,
    c.prerequisites.length
      ? 1 + Math.max(...c.prerequisites.map((n) => byName[n].depth))
      : 0,
  );
}

for (const q of questions) {
  assert(q.steps.length > 0 && q.answer && q.sourcePageText);
  q.terms.forEach((t) => assert(byName[t]));
  const r = readingRoute(q.terms, {}),
    names = r.map((c) => c.name);
  assert.equal(new Set(names).size, names.length);
  r.forEach((c, i) =>
    c.prerequisites.forEach((p) =>
      assert(names.indexOf(p) < i, `Bad route order in ${q.id}`),
    ),
  );
  const known = Object.fromEntries(q.terms.map((n) => [n, "known"]));
  assert(readingRoute(q.terms, known).every((c) => !known[c.name]));
  checklist(q).forEach((t) => assert(byName[t]));
  for (const step of q.steps) {
    assert(step.options.length >= 3);
    assert.equal(new Set(step.options).size, step.options.length);
    assert.equal(optionsFor(step).filter((o) => o.correct).length, 1);
    if (step.term) assert(byName[step.term]);
  }
}
const allKnown = Object.fromEntries(concepts.map((c) => [c.name, "known"]));
assert.equal(readingRoute(["Hilbert Space"], allKnown).length, 0);
const oneUnknown = { ...allKnown, "Hilbert Space": "unknown" };
assert.deepEqual(
  readingRoute(["Hilbert Space"], oneUnknown).map((c) => c.name),
  ["Hilbert Space"],
);
const files = exportVault({ "Vector Space": "known" }, ["Q-A-1"]);
assert(
  files["Course - Prerequisites/Vector Space.md"].includes("status: known"),
);
assert(files["_Progress.md"].includes("[[Vector Space]]: known"));
assert.equal(Object.keys(files).length, concepts.length + 35);
const validTargets = new Set([
  ...concepts.map((c) => c.name),
  ...questions.map((q) => `Answers/${q.id}`),
]);
for (const [name, content] of Object.entries(files))
  for (const match of content.matchAll(/\[\[([^\]|]+)/g))
    assert(validTargets.has(match[1]), `Dead link ${match[1]} in ${name}`);

// A control character in a LaTeX string usually means an unescaped JS/Python
// string converted \begin into backspace or \frac into form-feed.
let formulas = 0;
function validateText(text, where) {
  assert(
    !/[\x00-\x08\x0b\x0e-\x1f]/.test(text),
    `Control character in ${where}`,
  );
  for (const match of text.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)) {
    try {
      katex.renderToString(match[1] ?? match[2], {
        throwOnError: true,
        strict: false,
      });
      formulas++;
    } catch (e) {
      throw new Error(`${where}: ${match[0]}: ${e.message}`);
    }
  }
}
for (const c of concepts) {
  for (const key of ["meaning", "formal", "example"])
    validateText(c[key], `${c.name} ${key}`);
  validateText("$" + c.symbol + "$", c.name + " symbol");
  validateText(c.check.prompt, c.name + " check");
  c.check.options.forEach((o) => validateText(o, c.name + " option"));
}
for (const q of questions) {
  validateText(q.answer, q.id);
  q.steps.forEach((s) => {
    validateText(s.prompt, q.id + " prompt");
    s.options.forEach((o) => validateText(o, q.id + " option"));
  });
}
fs.mkdirSync("artifacts", { recursive: true });
fs.writeFileSync(
  "artifacts/vault-test.zip",
  Buffer.from(await makeZip(files).arrayBuffer()),
);
console.log(
  `PASS: ${concepts.length} concepts, 32 questions, ${formulas} formulas, acyclic graph, ordered routes, hidden-option data, complete exported links.`,
);

// Layout and navigation math: no overlapping nodes, and zoom keeps its anchor.
const { layoutGraph } = await import("../../../flow-library/study-map/src/graph/layout.js");
const { zoomAt, pinchView, fitView } = await import("../../../flow-library/study-map/src/graph/viewport.js");
for (const nodes of [
  concepts,
  ...questions.map((q) => q.graphTerms.map((n) => byName[n])),
]) {
  const layout = layoutGraph(nodes),
    points = Object.values(layout.positions);
  assert.equal(points.length, nodes.length);
  for (let i = 0; i < points.length; i++)
    for (let j = i + 1; j < points.length; j++) {
      assert(
        Math.abs(points[i].x - points[j].x) >= 170 ||
          Math.abs(points[i].y - points[j].y) >= 150,
        "Overlapping graph nodes",
      );
    }
}
const view = { x: 10, y: 20, scale: 0.5 },
  anchor = { x: 200, y: 300 };
const zoomed = zoomAt(view, 1, anchor);
assert.equal(
  (anchor.x - zoomed.x) / zoomed.scale,
  (anchor.x - view.x) / view.scale,
);
assert.equal(
  (anchor.y - zoomed.y) / zoomed.scale,
  (anchor.y - view.y) / view.scale,
);
const pinched = pinchView({ view, middle: anchor, distance: 100 }, [
  { x: 100, y: 300 },
  { x: 300, y: 300 },
]);
assert.deepEqual(pinched, zoomed);
assert(fitView({ width: 390, height: 360 }, layoutGraph(concepts)).scale > 0);
const { normalizeProgress } = await import("../../../flow-library/study-map/src/lib/progressState.js");
const { learningSummary, questionSummary } =
  await import("../../../flow-library/study-map/src/lib/learning.js");
const event = {
  time: Date.now(),
  kind: "step",
  questionId: "Q-A-1",
  step: 0,
  term: "Vector Space",
  correct: false,
};
const snapshot = normalizeProgress({
  statuses: { Scalar: "known", fiction: "known" },
  completed: ["Q-A-1", "fake"],
  questionId: "Q-A-1",
  checks: { Scalar: "idk" },
  flow: { phase: "steps", step: 999 },
  history: [
    event,
    { ...event, correct: true },
    { ...event, questionId: "fake" },
  ],
  sessions: { "Q-A-2": { flow: { phase: "retest", idk: [] } } },
});
assert.deepEqual(snapshot.statuses, { Scalar: "known" });
assert.deepEqual(snapshot.completed, ["Q-A-1"]);
assert.equal(snapshot.checks.Scalar, "idk");
assert.equal(snapshot.flow.step, questions[0].steps.length - 1);
assert.equal(snapshot.history.length, 2);
assert.equal(snapshot.sessions["Q-A-2"].flow.phase, "ready");
assert.equal(learningSummary(snapshot.history).accuracy, 50);
assert.equal(
  questionSummary(questions[0], snapshot.history, [], {}).right,
  1,
  "Question accuracy uses latest answer per step",
);
assert.equal(
  normalizeProgress({}).questionId,
  "Q-A-1",
  "Legacy backups migrate safely",
);
console.log(
  "PASS: graph spacing, cursor zoom, pinch math, progress metrics, backup validation and migration.",
);

// Every unlocked fragment must contribute to the exact full formal solution.
for (const q of questions) {
  assert.equal(
    q.solutionBlocks.map((b) => b.text).join("\n\n"),
    q.linkedAnswer,
  );
  assert(q.solutionBlocks.length > 0);
  for (const b of q.solutionBlocks) {
    assert(
      b.text.trim().length > 30,
      `${q.id} has an empty/trivial solution fragment`,
    );
    assert(q.steps[b.checkIndex]);
  }
  for (const name of q.symbols)
    assert(byName[name], `Missing symbol node ${name}`);
  assert(
    !/\$[^$]*\n\s*e\s*[0-9a-z][^$]*\$/.test(q.answer),
    `Malformed inequality ${q.id}`,
  );
}
assert(
  !questions[0].symbols.includes("Imaginary Unit"),
  "English multiplication is not the imaginary unit",
);
const { constellationLayout } = await import("../../../flow-library/study-map/src/graph/three/layout.js");
const universe = constellationLayout(concepts);
assert.equal(universe.blocks.length, 9);
assert.equal(Object.keys(universe.positions).length, concepts.length);
assert(
  new Set(Object.values(universe.positions).map((p) => p.z)).size > 3,
  "Real 3D layout needs distinct depth coordinates",
);
console.log(
  "PASS: full solution equals unlocked fragments, all symbol links exist, no malformed inequalities, 9 topic constellations with 3D depth.",
);

for (const block of universe.blocks) {
  for (const n of block.members) {
    const p = universe.positions[n.name];
    assert(
      Math.hypot(
        p.x - block.center.x,
        p.y - block.center.y,
        p.z - block.center.z,
      ) <= block.radius,
      "Star escapes its topic volume",
    );
  }
}
for (let i = 0; i < universe.blocks.length; i++) {
  for (let j = i + 1; j < universe.blocks.length; j++) {
    const a = universe.blocks[i],
      b = universe.blocks[j];
    assert(
      Math.hypot(
        a.center.x - b.center.x,
        a.center.y - b.center.y,
        a.center.z - b.center.z,
      ) >
        a.radius + b.radius + 150,
      "Topic volumes overlap",
    );
  }
}
const starPoints = Object.values(universe.positions);
for (let i = 0; i < starPoints.length; i++)
  for (let j = i + 1; j < starPoints.length; j++) {
    const a = starPoints[i],
      b = starPoints[j];
    assert(
      Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) > 45,
      "Stars overlap in 3D",
    );
  }
console.log(
  "PASS: bounded constellation volumes, separated topics and individual 3D stars.",
);
