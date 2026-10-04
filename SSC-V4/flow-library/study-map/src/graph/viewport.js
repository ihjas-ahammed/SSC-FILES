export const MIN_SCALE = 0.08;
export const MAX_SCALE = 3;
export const clampScale = (value) =>
  Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));

export function fitView(size, layout) {
  const scale = Math.min(
    (size.width - 60) / layout.width,
    (size.height - 100) / layout.height,
    1,
  );
  return {
    scale,
    x: (size.width - layout.width * scale) / 2,
    y: (size.height - layout.height * scale) / 2 - 12,
  };
}

/** Keep the world point under the cursor fixed while zooming. */
export function zoomAt(view, scale, anchor) {
  const next = clampScale(scale),
    ratio = next / view.scale;
  return {
    scale: next,
    x: anchor.x - (anchor.x - view.x) * ratio,
    y: anchor.y - (anchor.y - view.y) * ratio,
  };
}

export function focusView(point, size, scale = 0.95) {
  return {
    scale,
    x: size.width / 2 - point.x * scale,
    y: size.height * 0.52 - 15 - point.y * scale,
  };
}

export function pinchView(start, pointers) {
  const [a, b] = pointers;
  const distance = Math.hypot(b.x - a.x, b.y - a.y);
  const middle = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  const next = zoomAt(
    start.view,
    (start.view.scale * distance) / start.distance,
    start.middle,
  );
  return {
    ...next,
    x: next.x + middle.x - start.middle.x,
    y: next.y + middle.y - start.middle.y,
  };
}
