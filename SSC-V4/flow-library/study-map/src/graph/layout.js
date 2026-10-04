import { groups } from "../lib/course.js";

const NODE_WIDTH = 180;
const ROW_HEIGHT = 160;

/** Stable prerequisite rows for a question, tidy topic panels for the full atlas. */
export function layoutGraph(nodes) {
  if (!nodes.length)
    return { positions: {}, width: 800, height: 500, sections: [] };
  if (nodes.length > 45) return topicLayout(nodes);
  const byDepth = Object.groupBy(nodes, (n) => n.depth);
  const depths = Object.keys(byDepth)
    .map(Number)
    .sort((a, b) => a - b);
  const width = Math.max(
    760,
    ...Object.values(byDepth).map((row) => row.length * NODE_WIDTH + 120),
  );
  const positions = {},
    sections = [];
  depths.forEach((depth, level) => {
    const row = byDepth[depth].sort((a, b) => a.name.localeCompare(b.name));
    const y = 110 + level * ROW_HEIGHT;
    sections.push({
      label:
        level === 0 ? "STARTING FOUNDATIONS" : `PREREQUISITE LEVEL ${level}`,
      x: 25,
      y: y - 58,
      width: width - 50,
      color: "#7693a5",
      line: true,
    });
    row.forEach((node, i) => {
      positions[node.name] = {
        x: width / 2 + (i - (row.length - 1) / 2) * NODE_WIDTH,
        y,
      };
    });
  });
  return {
    positions,
    width,
    height: depths.length * ROW_HEIGHT + 130,
    sections,
  };
}

function topicLayout(nodes) {
  const positions = {},
    sections = [],
    panelWidth = 610,
    gap = 40;
  const ordered = [groups.at(-1), ...groups.slice(0, -1)];
  let y = 30;
  for (let row = 0; row < Math.ceil(ordered.length / 3); row++) {
    let rowHeight = 0;
    ordered.slice(row * 3, row * 3 + 3).forEach((group, col) => {
      const list = nodes
        .filter((n) => n.group === group.id)
        .sort((a, b) => a.depth - b.depth || a.name.localeCompare(b.name));
      if (!list.length) return;
      const x = 30 + col * (panelWidth + gap);
      const height = Math.ceil(list.length / 3) * ROW_HEIGHT + 100;
      sections.push({
        label: group.name.toUpperCase(),
        x,
        y,
        width: panelWidth,
        height,
        color: group.color,
      });
      list.forEach((node, i) => {
        positions[node.name] = {
          x: x + 120 + (i % 3) * NODE_WIDTH,
          y: y + 105 + Math.floor(i / 3) * ROW_HEIGHT,
        };
      });
      rowHeight = Math.max(rowHeight, height);
    });
    y += rowHeight + gap;
  }
  return { positions, sections, width: 3 * (panelWidth + gap) + 20, height: y };
}
