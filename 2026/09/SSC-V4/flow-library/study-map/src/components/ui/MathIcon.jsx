import { memo, useLayoutEffect, useMemo, useRef } from "react";
import katex from "katex";

// Fit the actual rendered symbol, including tall daggers and wide bra-kets.
function MathIcon({ formula, className = "" }) {
  const host = useRef(null),
    content = useRef(null);
  const html = useMemo(
    () =>
      katex.renderToString(formula, {
        throwOnError: false,
        strict: false,
        output: "html",
      }),
    [formula],
  );
  useLayoutEffect(() => {
    const fit = () => {
      const box = host.current,
        inner = content.current;
      if (!box || !inner) return;
      const css = getComputedStyle(box);
      const width =
        box.clientWidth -
        parseFloat(css.paddingLeft) -
        parseFloat(css.paddingRight);
      const height =
        box.clientHeight -
        parseFloat(css.paddingTop) -
        parseFloat(css.paddingBottom);
      const scale = Math.min(
        1,
        width / Math.max(1, inner.offsetWidth),
        height / Math.max(1, inner.offsetHeight),
      );
      inner.style.transform = `translate(-50%, -50%) scale(${Math.max(0.02, scale)})`;
    };
    const observer = new ResizeObserver(fit);
    observer.observe(host.current);
    document.fonts.ready.then(fit);
    fit();
    return () => observer.disconnect();
  }, [html]);
  return (
    <span
      ref={host}
      className={`fitted-symbol ${className}`}
      aria-hidden="true"
    >
      <span
        ref={content}
        className="math-icon-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </span>
  );
}
export default memo(MathIcon);
