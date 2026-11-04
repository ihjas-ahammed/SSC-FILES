// Keep the current note mounted until its map is visible, then start the flight.
export async function scrollBeforeNavigate(container = window) {
  const isWindow = container === window;
  const top = () => (isWindow ? window.scrollY : container.scrollTop);
  if (top() <= 1) return true;
  const reduced =
    document.documentElement.dataset.motion === "off" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  container.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
  return new Promise((resolve) => {
    const start = performance.now();
    function check() {
      if (!isWindow && !container.isConnected) return resolve(false);
      if (top() <= 1) return resolve(true);
      // If scrolling is interrupted, leave the old note in place.
      if (performance.now() - start > 1800) return resolve(false);
      requestAnimationFrame(check);
    }
    requestAnimationFrame(check);
  });
}
