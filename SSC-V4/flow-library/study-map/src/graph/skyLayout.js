// A flat, selected-centred graph: direct neighbours form the inner ring.
// Further concepts occupy successive rings. There is no depth hit-testing.
export function skyLayout(nodes, selected) {
  const byName = new Map(nodes.map((n) => [n.name, n]));
  const hub = byName.has(selected) ? selected : nodes[0]?.name;
  const neighbours = new Map(nodes.map((n) => [n.name, new Set()]));
  nodes.forEach((n) =>
    n.prerequisites.forEach((p) => {
      if (!byName.has(p)) return;
      neighbours.get(n.name).add(p);
      neighbours.get(p).add(n.name);
    }),
  );
  const distances = new Map(hub ? [[hub, 0]] : []),
    queue = hub ? [hub] : [];
  for (let i = 0; i < queue.length; i++) {
    for (const name of neighbours.get(queue[i])) {
      if (distances.has(name)) continue;
      distances.set(name, distances.get(queue[i]) + 1);
      queue.push(name);
    }
  }
  const ordered = nodes
    .filter((n) => n.name !== hub)
    .sort(
      (a, b) =>
        (distances.get(a.name) ?? Infinity) -
          (distances.get(b.name) ?? Infinity) || a.name.localeCompare(b.name),
    );
  const positions = hub ? { [hub]: { x: 0, y: 0 } } : {};
  let radius = 155,
    index = 0,
    lastRadius = radius;
  while (index < ordered.length) {
    const distance = distances.get(ordered[index].name);
    const peers = [];
    const capacity = Math.floor((2 * Math.PI * radius) / 105);
    while (
      index < ordered.length &&
      peers.length < capacity &&
      distances.get(ordered[index].name) === distance
    )
      peers.push(ordered[index++]);
    peers.forEach((n, i) => {
      const angle = -Math.PI / 2 + (i * Math.PI * 2) / peers.length;
      positions[n.name] = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
    lastRadius = radius;
    radius += 135;
  }
  const center = lastRadius + 90,
    size = center * 2;
  Object.values(positions).forEach((p) => {
    p.x += center;
    p.y += center;
  });
  const links = ordered
    .filter((n) => distances.get(n.name) <= 2)
    .map((n) => ({
      a: hub,
      b: n.name,
      dashed: distances.get(n.name) > 1,
      direction: byName.get(hub).prerequisites.includes(n.name)
        ? "incoming"
        : "outgoing",
    }));
  return { positions, links, size, center, hub };
}
