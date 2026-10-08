import assert from "node:assert/strict";
import { skyLayout } from "../src/graph/skyLayout.js";
import { starState } from "../src/graph/starState.js";
const nodes = [
  { name: "Base", prerequisites: [] },
  { name: "Near", prerequisites: ["Base"] },
  { name: "Far", prerequisites: ["Near"] },
  { name: "Remote", prerequisites: ["Far"] },
  { name: "Other", prerequisites: [] },
];
assert.deepEqual(starState(nodes[0], {}), { understood: false, locked: false });
assert.deepEqual(starState(nodes[1], {}), { understood: false, locked: true });
assert.deepEqual(starState(nodes[1], { Base: "known" }), { understood: false, locked: false });
assert.deepEqual(starState(nodes[1], { Near: "known" }), { understood: true, locked: false });
const map = skyLayout(nodes, "Base");
assert.deepEqual(map.positions.Base, { x: map.center, y: map.center });
assert.deepEqual(map.links.map(l => [l.a, l.b, l.dashed]), [["Base", "Near", false], ["Base", "Far", true]]);
assert.equal(Object.keys(map.positions).length, nodes.length);
assert(skyLayout(nodes, "Far").links.every(l => l.a === "Far"));
assert.equal(skyLayout([], "missing").links.length, 0);
const crowded = Array.from({ length: 150 }, (_, i) => ({ name: `Star ${i}`, prerequisites: i ? ["Star 0"] : [] }));
const positions = Object.values(skyLayout(crowded, "Star 0").positions);
for (let i = 0; i < positions.length; i++) for (let j = i + 1; j < positions.length; j++)
  assert(Math.hypot(positions[i].x - positions[j].x, positions[i].y - positions[j].y) > 90);
console.log("PASS: knowledge locks, central hub, selected-only solid/dashed links, disconnected nodes and a crowded 2D map.");
