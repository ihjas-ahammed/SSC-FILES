import assert from "node:assert/strict";
import * as T from "three";
import {
  createStarMaterial,
  updateStarlight,
  REFLECTION_RANGE,
} from "../src/graph/three/starlight.js";
import {
  pathColor,
  activeColor,
  outgoingColor,
  distantColor,
} from "../src/graph/three/theme.js";
import { createPathFlow } from "../src/graph/three/flow.js";

const star = (x, understood = false) => {
  const group = new T.Group();
  group.position.x = x;
  return {
    group,
    understood,
    color: 0x8abcee,
    star: { material: createStarMaterial(0x8b929e) },
  };
};
const locked = star(0),
  nearby = star(80, true),
  distant = star(REFLECTION_RANGE + 1, true);
const meshes = new Map([
  ["locked", locked],
  ["nearby", nearby],
  ["distant", distant],
]);
updateStarlight(meshes);
const uniforms = locked.star.material.uniforms;
assert.equal(uniforms.emission.value, 0);
assert.equal(uniforms.lightColors.value[0].getHex(), nearby.color);
assert.equal(uniforms.lightColors.value[1].getHex(), 0);
assert.equal(uniforms.lightPositions.value[0].x, 80);
nearby.understood = false;
updateStarlight(meshes);
assert(
  uniforms.lightColors.value.every((c) => c.getHex() === 0),
  "No light without nearby understood stars",
);
const edge = { a: "a", b: "b", complete: true, active: true };
assert.equal(pathColor(edge, "a"), outgoingColor());
assert.equal(pathColor(edge, "b"), activeColor());
assert.equal(pathColor({ ...edge, distant: true }, "b"), distantColor());
const scene = new T.Scene();
const flow = createPathFlow(scene, [edge], {
  a: { x: 0, y: 0, z: 0 },
  b: { x: 10, y: 0, z: 0 },
});
flow.tick(100, false);
assert(scene.children[0].visible);
edge.active = false;
flow.tick(200, false);
assert(
  !scene.children[0].visible,
  "Completed connections do not remain visible after selection changes",
);
console.log(
  "PASS: zero emission on dim stars, bounded nearby reflected light, no completion colors and selected-only particles.",
);
