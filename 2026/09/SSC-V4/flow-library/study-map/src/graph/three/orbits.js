// Dependency-weighted, concentric topic orbits. Foundation topics stay central.
export function dependencyOrder(blocks, nodes) {
  const byName = Object.fromEntries(nodes.map((n) => [n.name, n]));
  const scores = new Map(blocks.map((b) => [b.id, new Set()]));
  for (const node of nodes) {
    const seen = new Set();
    function visit(name) {
      if (seen.has(name)) return;
      seen.add(name);
      const prerequisite = byName[name];
      if (!prerequisite) return;
      if (prerequisite.group !== node.group)
        scores.get(prerequisite.group)?.add(node.name);
      prerequisite.prerequisites.forEach(visit);
    }
    node.prerequisites.forEach(visit);
  }
  return [...blocks]
    .sort(
      (a, b) =>
        scores.get(b.id).size - scores.get(a.id).size ||
        Math.min(...a.members.map((n) => n.depth)) -
          Math.min(...b.members.map((n) => n.depth)) ||
        a.id.localeCompare(b.id),
    )
    .map((b) => ({ ...b, dependencyCount: scores.get(b.id).size }));
}

export function arrangeOrbits(blocks, nodes) {
  const ordered = dependencyOrder(blocks, nodes);
  if (!ordered.length) return ordered;
  const base = ordered[0];
  base.center = { x: 0, y: 0, z: 0 };
  base.orbit = { radius: 0, phase: 0, speed: 0, tier: 0 };
  let previousRadius = 0,
    previousExtent = base.radius;
  for (let start = 1, tier = 1; start < ordered.length; start += 4, tier++) {
    const ring = ordered.slice(start, start + 4);
    const extent = Math.max(...ring.map((b) => b.radius));
    const spacingRadius =
      ring.length > 1 ? (extent + 140) / Math.sin(Math.PI / ring.length) : 0;
    const radius = Math.max(
      spacingRadius,
      previousRadius + previousExtent + extent + 240,
    );
    ring.forEach((b, index) => {
      const phase =
        (index / ring.length) * Math.PI * 2 + (tier % 2 ? 0 : Math.PI / 4);
      b.orbit = {
        radius,
        phase,
        speed: (Math.PI * 2) / ((30 + (tier - 1) * 15) * 60 * 1000),
        tier,
      };
      b.center = {
        x: Math.cos(phase) * radius,
        y: Math.sin(phase) * radius * 0.27,
        z: Math.sin(phase) * radius,
      };
    });
    previousRadius = radius;
    previousExtent = extent;
  }
  return ordered;
}

export function createOrbitalMotion(layout) {
  const offsets = Object.fromEntries(
    layout.blocks.flatMap((b) =>
      b.members.map((n) => {
        const p = layout.positions[n.name];
        return [
          n.name,
          { x: p.x - b.center.x, y: p.y - b.center.y, z: p.z - b.center.z },
        ];
      }),
    ),
  );
  let elapsed = 0,
    lastTime = null;
  return {
    tick(now, paused) {
      const delta =
        lastTime === null ? 0 : Math.min(100, Math.max(0, now - lastTime));
      lastTime = now;
      if (paused || !delta) return false;
      elapsed += delta;
      for (const b of layout.blocks) {
        if (!b.orbit.radius) continue;
        const angle = b.orbit.phase + elapsed * b.orbit.speed;
        Object.assign(b.center, {
          x: Math.cos(angle) * b.orbit.radius,
          y: Math.sin(angle) * b.orbit.radius * 0.27,
          z: Math.sin(angle) * b.orbit.radius,
        });
        for (const n of b.members) {
          const o = offsets[n.name];
          Object.assign(layout.positions[n.name], {
            x: b.center.x + o.x,
            y: b.center.y + o.y,
            z: b.center.z + o.z,
          });
        }
      }
      return true;
    },
  };
}
