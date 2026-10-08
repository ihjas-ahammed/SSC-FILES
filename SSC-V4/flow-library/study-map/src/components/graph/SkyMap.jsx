import { useEffect, useMemo, useRef, useState } from "react";
import { Minus, Plus, LocateFixed } from "lucide-react";
import { skyLayout } from "../../graph/skyLayout.js";
import { starState } from "../../graph/starState.js";
import { starEncoding } from "../../graph/three/encoding.js";
import { skillGlyph } from "../../graph/three/glyph.js";
import MathIcon from "../ui/MathIcon";

export default function SkyMap({
  nodes,
  selected,
  statuses,
  onSelect,
  navigation,
}) {
  const layout = useMemo(() => skyLayout(nodes, selected), [nodes, selected]);
  const host = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [centerStamp, setCenterStamp] = useState(0);
  useEffect(() => {
    const element = host.current;
    const center = () =>
      element.scrollTo({
        left: layout.center * zoom - element.clientWidth / 2,
        top: layout.center * zoom - element.clientHeight / 2,
        behavior: "instant",
      });
    center();
    const observer = new ResizeObserver(center);
    observer.observe(element);
    return () => observer.disconnect();
  }, [layout, zoom, centerStamp]);
  useEffect(() => {
    if (navigation?.type === "overview") {
      const el = host.current;
      setZoom(
        Math.max(0.15, Math.min(el.clientWidth, el.clientHeight) / layout.size),
      );
    } else if (navigation) {
      setZoom(1);
      setCenterStamp((s) => s + 1);
    }
  }, [navigation]);
  return (
    <div
      className="graph-canvas stellar-map sky-map"
      data-renderer="svg-2d"
      data-focused={layout.hub}
      data-flying="false"
      role="group"
      aria-label="Interactive prerequisite graph"
    >
      <div
        className="sky-viewport"
        ref={host}
        tabIndex={0}
        aria-label="2D night sky; scroll to explore"
      >
        <div
          className="sky-field"
          style={{ width: layout.size * zoom, height: layout.size * zoom }}
        >
          <svg
            className="sky-links"
            width="100%"
            height="100%"
            aria-label="Selected star connections"
          >
            {layout.links.map((link) => {
              const a = layout.positions[link.a],
                b = layout.positions[link.b];
              return (
                <line
                  key={link.b}
                  data-path="true"
                  data-from={link.a}
                  data-to={link.b}
                  data-dashed={link.dashed}
                  x1={a.x * zoom}
                  y1={a.y * zoom}
                  x2={b.x * zoom}
                  y2={b.y * zoom}
                  className={
                    link.dashed ? "distant-link" : `near-link ${link.direction}`
                  }
                >
                  <title>
                    {link.dashed
                      ? "Two connections away"
                      : "Direct prerequisite connection"}
                    : {link.b}
                  </title>
                </line>
              );
            })}
          </svg>
          {nodes.map((n) => {
            const p = layout.positions[n.name],
              state = starState(n, statuses),
              active = n.name === layout.hub;
            return (
              <button
                key={n.id}
                className={`sky-star ${active ? "selected" : ""}`}
                data-name={n.name}
                data-node={n.id}
                data-locked={state.locked}
                data-understood={state.understood}
                disabled={state.locked}
                aria-pressed={active}
                aria-label={`${state.locked ? "Locked" : "Select"} ${n.name}`}
                title={`${n.name}${state.locked ? " · Understand its prerequisites first" : ""}`}
                style={{
                  left: p.x * zoom,
                  top: p.y * zoom,
                  "--sky-color": starEncoding(n).color,
                }}
                onClick={() => onSelect(n.name)}
              >
                <span className="sky-star-core">
                  {active && <MathIcon formula={skillGlyph(n)} />}
                </span>
                <span className="sky-star-name">{n.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="sky-controls" aria-label="2D map controls">
        <button
          aria-label="Zoom out"
          onClick={() => setZoom((z) => Math.max(0.15, z / 1.25))}
        >
          <Minus size={17} />
        </button>
        <button
          aria-label="Center selected star"
          onClick={() => {
            setZoom(1);
            setCenterStamp((s) => s + 1);
          }}
        >
          <LocateFixed size={17} />
        </button>
        <button
          aria-label="Zoom in"
          onClick={() => setZoom((z) => Math.min(1.8, z * 1.25))}
        >
          <Plus size={17} />
        </button>
      </div>
      <p className="sky-hint">Select one star · Scroll to explore</p>
    </div>
  );
}
