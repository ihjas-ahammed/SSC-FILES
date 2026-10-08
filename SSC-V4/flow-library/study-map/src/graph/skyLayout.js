import { Vector3 } from "three";

// The same initial viewing direction as the 3D map, with depth flattened.
const normal = new Vector3(1400, 3000, 2300).normalize();
const right = new Vector3(0, 1, 0).cross(normal).normalize();
const up = normal.clone().cross(right).normalize();
export function projectSkyPosition(position) {
  const point = new Vector3(position.x, position.y, position.z);
  return { x: point.dot(right), y: -point.dot(up) };
}

export function selectedConnections(nodes, selected) {
  const byName = new Map(nodes.map((n) => [n.name, n]));
  if (!byName.has(selected)) return [];
  const neighbours = new Map(nodes.map((n) => [n.name, new Set()]));
  for (const node of nodes)
    for (const name of node.prerequisites) {
      if (!byName.has(name)) continue;
      neighbours.get(node.name).add(name);
      neighbours.get(name).add(node.name);
    }
  const distances = new Map([[selected, 0]]),
    queue = [selected];
  for (let i = 0; i < queue.length; i++) {
    const distance = distances.get(queue[i]);
    if (distance === 2) continue;
    for (const name of neighbours.get(queue[i])) {
      if (distances.has(name)) continue;
      distances.set(name, distance + 1);
      queue.push(name);
    }
  }
  return queue.slice(1).map((name) => ({
    a: selected,
    b: name,
    distant: distances.get(name) === 2,
    direction: byName.get(selected).prerequisites.includes(name)
      ? "incoming"
      : "outgoing",
  }));
}

export function skyLayout(nodes, selected, constellation) {
  const hub = nodes.some((n) => n.name === selected)
    ? selected
    : nodes[0]?.name;
  const positions = Object.fromEntries(
    Object.entries(constellation.positions).map(([name, point]) => [
      name,
      projectSkyPosition(point),
    ]),
  );
  const points = Object.values(positions);
  const bounds = {
    minX: Math.min(0, ...points.map((p) => p.x)) - 70,
    maxX: Math.max(0, ...points.map((p) => p.x)) + 70,
    minY: Math.min(0, ...points.map((p) => p.y)) - 70,
    maxY: Math.max(0, ...points.map((p) => p.y)) + 70,
  };
  return {
    positions,
    bounds,
    hub,
    links: selectedConnections(nodes, hub),
    blocks: constellation.blocks.map((block) => ({
      ...block,
      ...projectSkyPosition(block.center),
    })),
  };
}
