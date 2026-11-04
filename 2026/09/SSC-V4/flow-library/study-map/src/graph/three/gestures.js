// OrbitControls listens on the map, including labels. Its pointer capture retargets
// pointer-up to that map: remember the original star to preserve taps/clicks.
export function trackMapGestures(host) {
  const pointers = new Map();
  let blockedUntil = 0,
    lastTap = 0;
  function down(e) {
    pointers.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY,
      button: e.target.closest(
        "[data-node], .constellation-label, [data-path]",
      ),
    });
    if (pointers.size > 1) blockedUntil = performance.now() + 700;
  }
  function move(e) {
    const start = pointers.get(e.pointerId);
    if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 6)
      blockedUntil = performance.now() + 700;
  }
  function up(e) {
    const start = pointers.get(e.pointerId);
    if (
      e.type === "pointerup" &&
      start?.button &&
      pointers.size === 1 &&
      e.button === 0 &&
      performance.now() > blockedUntil
    ) {
      lastTap = performance.now();
      start.button.dispatchEvent(
        new MouseEvent("click", { bubbles: true, cancelable: true, detail: 0 }),
      );
    }
    pointers.delete(e.pointerId);
  }
  function click(e) {
    if (e.target.closest(".graph-controls")) return;
    if (
      e.detail > 0 &&
      (performance.now() - lastTap < 150 || performance.now() < blockedUntil)
    ) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  const listeners = [
    ["pointerdown", down],
    ["pointermove", move],
    ["pointerup", up],
    ["pointercancel", up],
    ["click", click],
  ];
  listeners.forEach(([type, fn]) => host.addEventListener(type, fn, true));
  return {
    allowsClick: (e) => e.detail === 0 || performance.now() > blockedUntil,
    dispose() {
      listeners.forEach(([type, fn]) =>
        host.removeEventListener(type, fn, true),
      );
    },
  };
}
