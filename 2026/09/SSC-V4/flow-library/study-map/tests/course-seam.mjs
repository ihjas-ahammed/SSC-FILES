import assert from "node:assert/strict";
import { configureCourse, byName, meta } from "../src/lib/course.js";
import { readingRoute, checklist } from "../src/lib/routes.js";
import { normalizeProgress } from "../src/lib/progressState.js";
import { exportVault } from "../src/lib/exportVault.js";
import { starEncoding } from "../src/graph/three/encoding.js";
import { constellationLayout } from "../src/graph/three/layout.js";
const concept = (name, depth, prerequisites) => ({ name, id: name.toLowerCase(), depth, prerequisites,
  group: "skills", aliases: [], meaning: name, linkedFormal: name, example: name,
  minutes: 2, usedIn: ["task-1"], symbol: "x" });
const course = {
  concepts: [concept("Counting", 0, []), concept("Loop", 1, ["Counting"])],
  questions: [{ id: "task-1", section: "A", number: 1, text: "Describe a loop.",
    linkedAnswer: "[[Loop]]", terms: ["Loop"], steps: [{prompt:"First step?"}],
    solutionBlocks: [{text:"[[Loop]]",checkIndex:0}], sourcePageText:"Describe a loop." }],
  groups: [{ id: "skills", name: "Computing", color: "#112233" }],
  report: {}, meta: { storageKey: "computing.example.v1", module: "Loops", sourceName: "computing.pdf" },
};
configureCourse(course);
assert.equal(meta.storageKey, "computing.example.v1");
assert.equal(byName.Loop.name, "Loop");
assert.deepEqual(readingRoute(["Loop"], {}).map(c=>c.name), ["Counting", "Loop"]);
assert.deepEqual(readingRoute(["Loop"], { Counting: "known" }).map(c=>c.name), ["Loop"]);
// Focused routes keep only switched-off concepts and ancestors the learner judged.
assert.deepEqual(readingRoute(["Loop"], {}, { focused: true }).map(c=>c.name), ["Loop"]);
assert.deepEqual(readingRoute(["Loop"], { Counting: "unknown" }, { focused: true }).map(c=>c.name), ["Counting", "Loop"]);
assert.deepEqual(checklist(course.questions[0]), ["Loop", "Counting"]);
assert.equal(normalizeProgress().questionId, "task-1");
assert.deepEqual(normalizeProgress({ completed: ["task-1", "foreign"] }).completed, ["task-1"]);
assert.equal(starEncoding(byName.Loop).color, "#112233");
assert.equal(starEncoding(byName.Loop).difficulty, 1);
assert.equal(constellationLayout(course.concepts).blocks.length, 1);
const vault = exportVault({}, []);
assert(vault["_Index.md"].startsWith("# Loops"));
assert(vault["Answers/task-1.md"].includes("source: computing.pdf"));
assert(!Object.values(vault).join(" ").includes("Module 3"));
console.log("PASS: another subject supplies names, IDs, groups, storage, routes, totals, source and exports without editing shared code.");
