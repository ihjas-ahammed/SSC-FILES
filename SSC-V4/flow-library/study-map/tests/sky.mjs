import assert from "node:assert/strict";
import { Matrix4, Vector3 } from "three";
import { skyLayout, selectedConnections } from "../src/graph/skyLayout.js";
import { constellationLayout } from "../src/graph/three/layout.js";
import { configureCourse } from "../src/lib/course.js";
import { starState } from "../src/graph/starState.js";
const nodes = [
  { name: "Base", prerequisites: [] },
  { name: "Near", prerequisites: ["Base"] },
  { name: "Far", prerequisites: ["Near"] },
  { name: "Remote", prerequisites: ["Far"] },
  { name: "Other", prerequisites: [] },
].map((n, i) => ({ ...n, id: String(i), group: "test", depth: i }));
configureCourse({
  concepts: nodes,
  groups: [{ id: "test", name: "Test", color: "#112233" }],
  questions: [{ id: "q", section: "A", terms: ["Far"] }],
  meta: { storageKey: "sky-test" },
});
assert.deepEqual(starState(nodes[0], {}), { understood: false, locked: false });
assert.deepEqual(starState(nodes[1], {}), { understood: false, locked: true });
assert.deepEqual(starState(nodes[1], { Base: "known" }), {
  understood: false,
  locked: false,
});
assert.deepEqual(starState(nodes[1], { Near: "known" }), {
  understood: true,
  locked: false,
});
const constellation = constellationLayout(nodes),
  map = skyLayout(nodes, "Base", constellation);
assert.deepEqual(
  map.links.map((l) => [l.a, l.b, l.distant, l.direction]),
  [
    ["Base", "Near", false, "outgoing"],
    ["Base", "Far", true, "outgoing"],
  ],
);
assert.equal(Object.keys(map.positions).length, nodes.length);
assert(
  skyLayout(nodes, "Far", constellation).links.every((l) => l.a === "Far"),
);
assert.equal(
  skyLayout([], "missing", { positions: {}, blocks: [] }).links.length,
  0,
);
assert.deepEqual(selectedConnections(nodes, "missing"), []);
assert.equal(
  selectedConnections(nodes, "Near").find((l) => l.b === "Base").direction,
  "incoming",
);
// Independently compare against the 3D viewing transform, with depth discarded.
const cameraRotation = new Matrix4()
  .lookAt(new Vector3(1400, 3000, 2300), new Vector3(), new Vector3(0, 1, 0))
  .transpose();
for (const [name, p] of Object.entries(constellation.positions)) {
  const expected = new Vector3(p.x, p.y, p.z).applyMatrix4(cameraRotation);
  assert(Math.abs(map.positions[name].x - expected.x) < 1e-9);
  assert(Math.abs(map.positions[name].y + expected.y) < 1e-9);
}
assert.deepEqual(
  skyLayout(nodes, "Far", constellation).positions,
  map.positions,
  "Selection never rearranges constellation geometry",
);
console.log(
  "PASS: knowledge locks, solid direct/two-step connections and stable projection of the shared 3D layout.",
);
