// Hit areas are projections of the actual WebGL edges, not a second graph layout.
export default function GraphPaths({
  view,
  selected,
  onFollow,
  allowsClick,
  onHover,
}) {
  const priority = (p) =>
    (p.route ? 2 : 0) + (p.a === selected || p.b === selected ? 4 : 0);
  return (
    <svg
      className="stellar-paths"
      width="100%"
      height="100%"
      viewBox={`0 0 ${view.width || 1} ${view.height || 1}`}
      aria-label="Clickable concept paths"
    >
      {(view.paths || [])
        .filter(
          (p) =>
            p.visible && selected && (p.a === selected || p.b === selected),
        )
        .sort((a, b) => priority(a) - priority(b))
        .map((p) => (
          <path
            key={`${p.a}-${p.b}`}
            className={`stellar-path ${p.route ? "route" : ""} ${p.a === selected || p.b === selected ? "connected" : ""}`}
            data-path="true"
            data-from={p.a}
            data-to={p.b}
            data-route={p.route}
            data-complete={p.complete}
            data-direction={p.direction}
            data-color={p.color}
            data-dashed={p.dashed}
            d={`M ${p.ax} ${p.ay} L ${p.bx} ${p.by}`}
            role="button"
            tabIndex={p.route || p.a === selected || p.b === selected ? 0 : -1}
            aria-label={`Travel from ${selected} to ${p.a === selected ? p.b : p.a} along ${p.route ? "reading" : "prerequisite"} path`}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") onHover?.(p);
            }}
            onPointerLeave={() => onHover?.(null)}
            onFocus={() => onHover?.(p)}
            onBlur={() => onHover?.(null)}
            onClick={(e) => {
              if (allowsClick(e)) onFollow(p);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onFollow(p);
              }
            }}
          >
            <title>
              {p.a} → {p.b}:{" "}
              {p.route ? "next reading stop" : "needed for this concept"}
            </title>
          </path>
        ))}
    </svg>
  );
}
