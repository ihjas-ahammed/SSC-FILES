import { useEffect, useMemo, useRef, useState } from "react";
import { Minus, Plus, LocateFixed } from "lucide-react";
import { constellationLayout } from "../../graph/three/layout.js";
import { createSkyEngine } from "../../graph/canvas/sky.js";
import { starState } from "../../graph/starState.js";

export default function SkyMap({
  nodes,
  selected,
  statuses,
  onSelect,
  navigation,
  onPath,
}) {
  const layout = useMemo(() => constellationLayout(nodes), [nodes]);
  const canvas = useRef(null),
    engine = useRef(null);
  const latest = useRef({ selected, statuses, onSelect, onPath });
  latest.current = { selected, statuses, onSelect, onPath };
  function explainPath(path) {
    latest.current.onPath?.(
      path.direction === "incoming" && !path.distant
        ? { ...path, a: path.b, b: path.a }
        : path,
    );
  }
  const [view, setView] = useState({ nodes: {}, links: [] });
  useEffect(() => {
    engine.current = createSkyEngine(
      canvas.current,
      nodes,
      layout,
      (name) => latest.current.onSelect(name),
      setView,
      explainPath,
    );
    engine.current.update(latest.current);
    engine.current.focus(latest.current.selected);
    return () => {
      engine.current.dispose();
      engine.current = null;
    };
  }, [layout]);
  useEffect(() => {
    engine.current?.update({ selected, statuses });
    engine.current?.focus(selected);
  }, [selected]);
  useEffect(() => engine.current?.update({ selected, statuses }), [statuses]);
  useEffect(() => {
    if (navigation?.type === "overview") engine.current?.fit();
    if (navigation?.type === "block") engine.current?.block(navigation.value);
    if (navigation?.type === "star") engine.current?.focus(navigation.value);
  }, [navigation, layout]);
  return (
    <div
      className="graph-canvas stellar-map sky-map"
      data-renderer="canvas-2d"
      data-focused={selected}
      data-flying="false"
      data-scale={view.scale}
      role="group"
      aria-label="Interactive prerequisite graph"
    >
      <canvas
        ref={canvas}
        className="sky-canvas"
        tabIndex={0}
        aria-label="2D constellation map; drag to pan, pinch or scroll to zoom, arrow keys to select stars"
        data-view={JSON.stringify(view)}
      />
      <div className="sky-accessible" aria-label="Accessible map navigation">
        {nodes.map((node) => {
          const state = starState(node, statuses);
          return (
            <button
              key={node.id}
              data-node={node.id}
              data-name={node.name}
              data-locked={state.locked}
              data-understood={state.understood}
              disabled={state.locked}
              aria-pressed={selected === node.name}
              onFocus={() => engine.current?.hover(node.name)}
              onBlur={() => engine.current?.hover(null)}
              onClick={() => onSelect(node.name)}
            >
              {state.locked ? "Locked" : "Select"} {node.name}
            </button>
          );
        })}
        {view.links.map((link) => (
          <button
            key={link.b}
            data-path="true"
            data-from={link.a}
            data-to={link.b}
            data-distant={link.distant}
            data-dashed="false"
            data-color={link.color}
            disabled={view.nodes[link.b]?.locked}
            onClick={() => {
              onSelect(link.b);
              explainPath(link);
            }}
          >
            Travel from {selected} to {link.b}
            {link.distant ? "; two connections away" : "; direct connection"}
          </button>
        ))}
      </div>
      <div className="sky-controls" aria-label="2D map controls">
        <button aria-label="Zoom out" onClick={() => engine.current?.zoom(0.8)}>
          <Minus size={17} />
        </button>
        <button
          aria-label="Center selected star"
          onClick={() => engine.current?.focus(selected)}
        >
          <LocateFixed size={17} />
        </button>
        <button aria-label="Zoom in" onClick={() => engine.current?.zoom(1.25)}>
          <Plus size={17} />
        </button>
      </div>
      <p className="sky-hint">
        Select a star · Drag to pan · Pinch or scroll to zoom
      </p>
    </div>
  );
}
