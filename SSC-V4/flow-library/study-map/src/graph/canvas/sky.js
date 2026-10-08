import { skyLayout } from "../skyLayout.js";
import { starState } from "../starState.js";
import { starEncoding } from "../three/encoding.js";
import { lightMap, distantColor, mapColor } from "../three/theme.js";

const hex = (color) => `#${color.toString(16).padStart(6, "0")}`;
export function createSkyEngine(
  canvas,
  nodes,
  constellation,
  onSelect,
  onFrame,
  onPath,
) {
  const ctx = canvas.getContext("2d");
  let state = { selected: nodes[0]?.name, statuses: {} },
    layout,
    view;
  let width = 1,
    height = 1,
    scale = 1,
    center = { x: 0, y: 0 },
    hovered = null;
  const pointers = new Map();
  let start = null,
    dragged = false;
  const screen = (p) => ({
    x: (p.x - center.x) * scale + width / 2,
    y: (p.y - center.y) * scale + height / 2,
  });
  function draw() {
    const light = lightMap();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = light ? "#eff4fa" : "#050b19";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = light ? "#607eaa66" : "#b7c6e355";
    for (let i = 0; i < 180; i++) {
      const x = ((Math.sin(i * 127.1) + 1) / 2) * width;
      const y = ((Math.cos(i * 79.9) + 1) / 2) * height;
      ctx.fillRect(x, y, 1, 1);
    }
    const links = layout.links.map((link) => ({
      ...link,
      from: screen(layout.positions[link.a]),
      to: screen(layout.positions[link.b]),
      color: link.distant
        ? hex(distantColor())
        : link.direction === "incoming"
          ? "#75b8ef"
          : "#e69ba8",
    }));
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    for (const link of links) {
      ctx.strokeStyle = link.color;
      ctx.globalAlpha = link.distant ? 0.9 : 1;
      ctx.beginPath();
      ctx.moveTo(link.from.x, link.from.y);
      ctx.lineTo(link.to.x, link.to.y);
      ctx.stroke();
      if (!link.distant) {
        const sign = link.direction === "incoming" ? -1 : 1;
        const angle = Math.atan2(
          sign * (link.to.y - link.from.y),
          sign * (link.to.x - link.from.x),
        );
        const x = (link.from.x + link.to.x) / 2,
          y = (link.from.y + link.to.y) / 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
          x - 7 * Math.cos(angle - 0.45),
          y - 7 * Math.sin(angle - 0.45),
        );
        ctx.moveTo(x, y);
        ctx.lineTo(
          x - 7 * Math.cos(angle + 0.45),
          y - 7 * Math.sin(angle + 0.45),
        );
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    const blocks = layout.blocks.map((b) => ({
      id: b.id,
      name: b.name,
      ...screen(b),
      radius: b.radius * scale,
    }));
    ctx.font = "12px 'DM Sans', sans-serif";
    ctx.textAlign = "center";
    for (const block of blocks) {
      ctx.strokeStyle = light ? "#607eaa33" : "#7f92c533";
      ctx.beginPath();
      ctx.ellipse(
        block.x,
        block.y,
        block.radius,
        block.radius * 0.8,
        0,
        0,
        Math.PI * 2,
      );
      ctx.stroke();
      ctx.fillStyle = light ? "#294661" : "#9aaac3";
      block.labelY = block.y - block.radius * 0.8 - 12;
      ctx.fillText(block.name, block.x, block.labelY);
      block.labelWidth = ctx.measureText(block.name).width;
    }
    const stars = nodes.map((node) => {
      const encoding = starEncoding(node),
        status = starState(node, state.statuses);
      return {
        name: node.name,
        ...screen(layout.positions[node.name]),
        ...status,
        radius: Math.max(4, Math.min(24, encoding.radius * scale)),
        color: hex(mapColor(encoding.color, light)),
      };
    });
    // Draw the selection last so it remains visible in a flat projection.
    stars.sort(
      (a, b) =>
        Number(a.name === state.selected) - Number(b.name === state.selected),
    );
    for (const star of stars) {
      const active = star.name === state.selected;
      const radius = active ? Math.max(9, star.radius) : star.radius;
      if (star.understood) {
        const glow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          radius * 3,
        );
        glow.addColorStop(0, `${star.color}aa`);
        glow.addColorStop(1, `${star.color}00`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = star.understood
        ? star.color
        : star.locked
          ? "#737b88"
          : "#8a96aa";
      ctx.beginPath();
      ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
      ctx.fill();
      if (active || hovered === star.name) {
        ctx.strokeStyle = light ? "#214768" : "#dce8ff";
        ctx.lineWidth = active ? 2 : 1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, radius + 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = light ? "#214768" : "#dce8ff";
        ctx.fillText(star.name, star.x, star.y + radius + 22);
      }
    }
    view = {
      nodes: Object.fromEntries(stars.map((star) => [star.name, star])),
      links,
      blocks,
      scale,
      center: { ...center },
      width,
      height,
    };
    onFrame(view);
  }
  function fit(bounds = layout.bounds) {
    center = {
      x: (bounds.minX + bounds.maxX) / 2,
      y: (bounds.minY + bounds.maxY) / 2,
    };
    scale = Math.max(
      0.03,
      Math.min(
        width / (bounds.maxX - bounds.minX),
        height / (bounds.maxY - bounds.minY),
      ) * 0.85,
    );
    draw();
  }
  function focus(name) {
    if (!layout.positions[name]) return;
    center = { ...layout.positions[name] };
    const block = constellation.blocks.find((b) =>
      b.members.some((n) => n.name === name),
    );
    scale = Math.max(
      0.25,
      Math.min(width, height) / ((block?.radius || 200) * 2.4),
    );
    draw();
  }
  function zoom(factor, anchor = { x: width / 2, y: height / 2 }) {
    const before = {
      x: center.x + (anchor.x - width / 2) / scale,
      y: center.y + (anchor.y - height / 2) / scale,
    };
    scale = Math.max(0.03, Math.min(4, scale * factor));
    center = {
      x: before.x - (anchor.x - width / 2) / scale,
      y: before.y - (anchor.y - height / 2) / scale,
    };
    draw();
  }
  const point = (e) => {
    const box = canvas.getBoundingClientRect();
    return { x: e.clientX - box.left, y: e.clientY - box.top };
  };
  function hit(p) {
    const star = Object.values(view.nodes)
      .filter(
        (n) => Math.hypot(n.x - p.x, n.y - p.y) <= Math.max(14, n.radius + 5),
      )
      .sort(
        (a, b) =>
          Math.hypot(a.x - p.x, a.y - p.y) - Math.hypot(b.x - p.x, b.y - p.y),
      )[0];
    if (star) return { star };
    const block = view.blocks.find(
      (b) =>
        Math.abs(b.x - p.x) < b.labelWidth / 2 + 8 &&
        Math.abs(b.labelY - p.y) < 14,
    );
    if (block) return { block };
    const link = view.links.find((l) => {
      const dx = l.to.x - l.from.x,
        dy = l.to.y - l.from.y,
        length = dx * dx + dy * dy;
      const t = length
        ? ((p.x - l.from.x) * dx + (p.y - l.from.y) * dy) / length
        : -1;
      return (
        t > 0.05 &&
        t < 0.95 &&
        Math.hypot(p.x - l.from.x - t * dx, p.y - l.from.y - t * dy) < 8
      );
    });
    return link ? { link } : null;
  }
  function down(e) {
    if (e.button !== 0) return;
    canvas.focus({ preventScroll: true });
    canvas.setPointerCapture(e.pointerId);
    const p = point(e);
    pointers.set(e.pointerId, p);
    start = p;
    if (pointers.size === 1) dragged = false;
    else dragged = true;
  }
  function move(e) {
    const p = point(e),
      old = pointers.get(e.pointerId);
    if (!old) {
      const target = hit(p);
      hovered = target?.star?.name || null;
      canvas.style.cursor = target?.star?.locked
        ? "not-allowed"
        : target
          ? "pointer"
          : "grab";
      draw();
      return;
    }
    if (Math.hypot(p.x - start.x, p.y - start.y) > 6) dragged = true;
    if (pointers.size === 2) {
      const other = [...pointers.entries()].find(
        ([id]) => id !== e.pointerId,
      )[1];
      const previousDistance = Math.hypot(old.x - other.x, old.y - other.y);
      if (previousDistance > 1)
        zoom(Math.hypot(p.x - other.x, p.y - other.y) / previousDistance, {
          x: (old.x + other.x) / 2,
          y: (old.y + other.y) / 2,
        });
    } else {
      center.x -= (p.x - old.x) / scale;
      center.y -= (p.y - old.y) / scale;
    }
    pointers.set(e.pointerId, p);
    draw();
  }
  function up(e) {
    if (!pointers.has(e.pointerId)) return;
    if (e.type === "pointerup" && !dragged && pointers.size === 1) {
      const target = hit(point(e));
      if (target?.star && !target.star.locked) onSelect(target.star.name);
      else if (target?.block) block(target.block.id);
      else if (target?.link && !view.nodes[target.link.b].locked) {
        onSelect(target.link.b);
        onPath?.(target.link);
      }
    }
    pointers.delete(e.pointerId);
  }
  function block(id) {
    const b = layout.blocks.find((b) => b.id === id);
    if (b)
      fit({
        minX: b.x - b.radius,
        maxX: b.x + b.radius,
        minY: b.y - b.radius,
        maxY: b.y + b.radius,
      });
  }
  function key(e) {
    if (["+", "=", "-"].includes(e.key)) {
      e.preventDefault();
      zoom(e.key === "-" ? 0.8 : 1.25);
    } else if (e.key === "Home") {
      e.preventDefault();
      focus(state.selected);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!view.nodes[state.selected]?.locked) onSelect(state.selected);
    } else if (e.key.startsWith("Arrow")) {
      e.preventDefault();
      const origin = view.nodes[state.selected];
      if (!origin) return;
      const horizontal = e.key === "ArrowLeft" || e.key === "ArrowRight",
        sign = e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 1;
      const candidates = Object.values(view.nodes).filter(
        (n) =>
          !n.locked &&
          n.name !== state.selected &&
          sign * (horizontal ? n.x - origin.x : n.y - origin.y) > 0,
      );
      candidates.sort(
        (a, b) =>
          Math.hypot(a.x - origin.x, a.y - origin.y) -
          Math.hypot(b.x - origin.x, b.y - origin.y),
      );
      if (candidates[0]) onSelect(candidates[0].name);
    }
  }
  const wheel = (e) => {
    e.preventDefault();
    zoom(Math.exp(-e.deltaY * 0.002), point(e));
  };
  const listeners = [
    ["pointerdown", down],
    ["pointermove", move],
    ["pointerup", up],
    ["pointercancel", up],
    ["wheel", wheel],
    ["keydown", key],
  ];
  listeners.forEach(([type, fn]) =>
    canvas.addEventListener(type, fn, { passive: false }),
  );
  let sized = false;
  const resize = new ResizeObserver(() => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, canvas.clientWidth);
    height = Math.max(1, canvas.clientHeight);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (!sized) {
      sized = true;
      focus(state.selected);
    } else draw();
  });
  layout = skyLayout(nodes, state.selected, constellation);
  resize.observe(canvas);
  const theme = new MutationObserver(draw);
  theme.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return {
    focus,
    fit: () => fit(),
    block,
    zoom,
    hover(name) {
      hovered = name;
      draw();
    },
    update(next) {
      state = next;
      layout = skyLayout(nodes, next.selected, constellation);
      draw();
    },
    dispose() {
      resize.disconnect();
      theme.disconnect();
      listeners.forEach(([type, fn]) => canvas.removeEventListener(type, fn));
    },
  };
}
