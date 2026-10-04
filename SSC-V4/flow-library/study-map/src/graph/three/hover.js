import * as T from "three";

// A single, fine world-space frame. Never leave empty frames around other stars.
export function createHover(scene, meshes, edges, wake) {
  const cube = new T.BoxGeometry(1, 1, 1);
  const frame = new T.LineSegments(
    new T.EdgesGeometry(cube),
    new T.LineBasicMaterial({
      color: 0x6fffea,
      transparent: true,
      opacity: 0.7,
    }),
  );
  cube.dispose();
  frame.visible = false;
  scene.add(frame);
  let highlighted = null,
    saved = null;
  function clearPath() {
    if (highlighted) {
      highlighted.edge.material.color.copy(saved.color);
      highlighted.edge.material.opacity = saved.opacity;
    }
    highlighted = saved = null;
  }
  return {
    star(name) {
      clearPath();
      const m = meshes.get(name);
      frame.visible = !!m;
      if (m) {
        frame.position.copy(m.group.position);
        frame.scale.setScalar(m.encoding.radius * 2.7);
        frame.material.color.set(m.color);
      }
      wake();
    },
    path(path) {
      frame.visible = false;
      clearPath();
      const e = path && edges.find((e) => e.a === path.a && e.b === path.b);
      if (e) {
        highlighted = e;
        saved = {
          color: e.edge.material.color.clone(),
          opacity: e.edge.material.opacity,
        };
        e.edge.material.color.set(0x9cf9ee);
        e.edge.material.opacity = 0.8;
      }
      wake();
    },
    clear() {
      frame.visible = false;
      clearPath();
      wake();
    },
  };
}
