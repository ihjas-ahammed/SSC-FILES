import { groups } from "../../lib/course.js";
import { arrangeOrbits } from "./orbits.js";

// Stable topic volumes; increasing prerequisite depth runs from top to bottom.
// A spiral within each volume separates stars in all three dimensions.
export function constellationLayout(nodes) {
  const blocks = arrangeOrbits(
    groups
      .filter((g) => nodes.some((n) => n.group === g.id))
      .map((g) => {
        const members = nodes
          .filter((n) => n.group === g.id)
          .sort((a, b) => a.depth - b.depth || a.name.localeCompare(b.name));
        const radius = Math.max(190, Math.cbrt(members.length) * 108);
        return { ...g, members, radius, width: radius * 2, height: radius * 2 };
      }),
    nodes,
  );
  const positions = {};
  blocks.forEach((b) => {
    b.members.forEach((n, j) => {
      const vertical =
        b.members.length === 1 ? 0 : 1 - (2 * (j + 0.5)) / b.members.length;
      const angle = j * Math.PI * (3 - Math.sqrt(5));
      const ring =
        b.radius * Math.sqrt(1 - vertical * vertical) * (0.68 + (j % 3) * 0.12);
      positions[n.name] = {
        x: b.center.x + Math.cos(angle) * ring,
        y: b.center.y + vertical * b.radius * 0.88,
        z: b.center.z + Math.sin(angle) * ring,
      };
    });
  });
  const bounds = {};
  for (const axis of ["X", "Y", "Z"]) {
    const key = axis.toLowerCase();
    bounds["min" + axis] = blocks.length
      ? Math.min(
          ...blocks.map(
            (b) =>
              (key == "y" ? -b.orbit.radius * 0.27 : -b.orbit.radius) -
              b.radius,
          ),
        )
      : -200;
    bounds["max" + axis] = blocks.length
      ? Math.max(
          ...blocks.map(
            (b) =>
              (key == "y" ? b.orbit.radius * 0.27 : b.orbit.radius) + b.radius,
          ),
        )
      : 200;
  }
  return { blocks, positions, bounds };
}
