export const motionOff = () =>
  document.documentElement.dataset.motion === "off" ||
  matchMedia("(prefers-reduced-motion: reduce)").matches;
export const naturalPause = (ms) =>
  new Promise((resolve) => setTimeout(resolve, motionOff() ? 0 : ms));

export async function waitForMapArrival(map) {
  if (!map || motionOff()) return;
  const start = performance.now();
  let began = false;
  await new Promise((resolve) => {
    function check() {
      if (!map.isConnected) return resolve();
      began ||= map.dataset.flying === "true";
      if (
        (began && map.dataset.flying === "false") ||
        performance.now() - start > 3000
      )
        return resolve();
      requestAnimationFrame(check);
    }
    requestAnimationFrame(check);
  });
}
export async function settleOnNote(container, title) {
  if (!title || !title.isConnected) return;
  const isWindow = container === window;
  const content = title.closest(".route-screen, .mobile-stellar-content");
  if (content) content.style.setProperty("--note-scroll-tail", "0px");
  const rect = title.getBoundingClientRect();
  const top = isWindow
    ? window.scrollY + rect.top - 24
    : container.scrollTop +
      rect.top -
      container.getBoundingClientRect().top -
      24;
  const maxScroll = isWindow
    ? document.documentElement.scrollHeight - window.innerHeight
    : container.scrollHeight - container.clientHeight;
  // Short foundation notes still need enough room to put the title at the top.
  if (content && top > maxScroll)
    content.style.setProperty(
      "--note-scroll-tail",
      `${Math.ceil(top - maxScroll + 2)}px`,
    );
  container.scrollTo({
    top: Math.max(0, top),
    behavior: motionOff() ? "instant" : "smooth",
  });
  await new Promise((resolve) => {
    const start = performance.now();
    function check() {
      const value = isWindow ? window.scrollY : container.scrollTop;
      const max = isWindow
        ? document.documentElement.scrollHeight - window.innerHeight
        : container.scrollHeight - container.clientHeight;
      if (
        Math.abs(value - Math.min(Math.max(0, top), max)) < 2 ||
        performance.now() - start > 1500
      )
        return resolve();
      requestAnimationFrame(check);
    }
    requestAnimationFrame(check);
  });
}
