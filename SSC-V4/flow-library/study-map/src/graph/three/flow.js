import * as T from "three";

// Small circulating particles communicate prerequisite direction without clicks.
export function createPathFlow(scene, edges, positions) {
  const geometry = new T.SphereGeometry(1.8, 6, 4);
  const particles = edges.map((edge, index) => {
    const dot = new T.Mesh(
      geometry,
      new T.MeshBasicMaterial({
        color: 0x78d9e7,
        transparent: true,
        opacity: 0.65,
      }),
    );
    dot.visible = false;
    scene.add(dot);
    return {
      edge,
      dot,
      phase: (index * 0.618) % 1,
      a: new T.Vector3(...Object.values(positions[edge.a])),
      b: new T.Vector3(...Object.values(positions[edge.b])),
    };
  });
  return {
    tick(now, reduced) {
      let moving = false;
      for (const { edge, dot, phase, a, b } of particles) {
        dot.visible = !reduced && (edge.active || edge.complete || edge.route);
        if (!dot.visible) continue;
        dot.material.color.set(edge.complete ? 0x59f9bd : 0x78d9e7);
        dot.position.lerpVectors(a, b, (now / 6500 + phase) % 1);
        moving = true;
      }
      return moving;
    },
  };
}
