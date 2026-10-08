import { useMemo, useEffect, useRef, useState } from "react";
import { pathDestination } from "../../graph/pathNavigation";
import GraphPaths from "./GraphPaths";
import { starEncoding } from "../../graph/three/encoding";
import { constellationLayout } from "../../graph/three/layout";
import { createStellarEngine } from "../../graph/three/engine";
import MathIcon from "../ui/MathIcon";
import { mapColor } from "../../graph/three/theme";
import { useAtlas } from "../../app/AtlasContext";
import { skillGlyph } from "../../graph/three/glyph";
import { starState } from "../../graph/starState.js";

export default function KnowledgeGraph({
  nodes,
  selected,
  onSelect,
  statuses,
  targets = [],
  mode,
  itinerary = false,
  read = [],
  navigation,
  onPath,
  focusInitially = false,
  readingFocus = false,
}) {
  const { preferences } = useAtlas();
  const layout = useMemo(() => constellationLayout(nodes), [nodes]);
  const previous = useRef(selected);
  const firstSelection = useRef(true),
    following = useRef(null);
  const host = useRef(null),
    engine = useRef(null),
    latest = useRef({ selected, statuses, read });
  latest.current = { selected, statuses, read };
  const [view, setView] = useState({
      nodes: {},
      blocks: [],
      distance: 2000,
      flying: false,
    }),
    [fallback, setFallback] = useState(false);
  useEffect(() => {
    setFallback(false);
    try {
      engine.current = createStellarEngine(
        host.current,
        layout,
        nodes,
        itinerary,
        setView,
        readingFocus,
      );
      engine.current.update(latest.current);
      if (itinerary || focusInitially)
        engine.current.focus(latest.current.selected);
    } catch (e) {
      setFallback(true);
    }
    return () => {
      engine.current?.dispose();
      engine.current = null;
    };
  }, [layout, mode, itinerary, focusInitially]);
  useEffect(
    () => engine.current?.setReadingFocus(readingFocus),
    [readingFocus],
  );
  useEffect(() => {
    const origin = previous.current;
    previous.current = selected;
    engine.current?.update(latest.current);
    if (firstSelection.current) {
      firstSelection.current = false;
      return;
    }
    if (following.current === selected) {
      following.current = null;
      return;
    }
    if (
      itinerary &&
      origin !== selected &&
      engine.current?.follow(origin, selected)
    )
      onPath?.({ a: origin, b: selected, route: true });
    else engine.current?.focus(selected);
  }, [selected]);
  useEffect(() => engine.current?.update(latest.current), [statuses, read]);
  useEffect(() => {
    if (navigation?.type === "overview") engine.current?.fit();
    if (navigation?.type === "block") engine.current?.block(navigation.value);
    if (navigation?.type === "star") engine.current?.focus(navigation.value);
  }, [navigation, layout]);
  function followPath(path) {
    const destination = pathDestination(path, view.focused);
    if (!destination || view.flying) return;
    following.current = destination;
    onSelect(destination);
    onPath?.(path);
    engine.current?.follow(view.focused, destination);
  }
  return (
    <div
      className={`graph-canvas stellar-map ${itinerary ? "itinerary-map" : ""}`}
      ref={host}
      role="group"
      aria-label="Interactive prerequisite graph"
      data-renderer={fallback ? "accessible-list" : "webgl-3d"}
      data-camera={JSON.stringify(view.camera)}
      data-target={JSON.stringify(view.target)}
      data-distance={view.distance}
      data-flying={view.flying}
      data-focused={view.focused || ""}
      data-flow-active={view.flowActive}
      data-orbiting={view.orbiting}
      data-base-constellation={layout.blocks[0]?.id}
      data-zoom={view.zoom}
    >
      {!fallback && (
        <GraphPaths
          view={view}
          selected={view.flying ? null : view.focused}
          onFollow={followPath}
          allowsClick={(e) => !!engine.current?.allowsClick(e)}
          onHover={(path) => engine.current?.hoverPath(path)}
        />
      )}
      {!fallback && (
        <div className="stellar-labels">
          {view.blocks.map((p) => {
            const b = layout.blocks.find((b) => b.id === p.id);
            return (
              <button
                key={p.id}
                hidden={!p.visible}
                className="constellation-label"
                style={{ left: p.x, top: p.y }}
                onClick={(e) => {
                  if (engine.current?.allowsClick(e))
                    engine.current?.block(p.id);
                }}
              >
                {view.distance > 1500 ? b.short : b.name}
                <small>
                  {b.members.filter((n) => statuses[n.name] === "known").length}{" "}
                  / {b.members.length} understood
                </small>
              </button>
            );
          })}
          {nodes.map((n) => {
            const p = view.nodes[n.name];
            const active = selected === n.name,
              known = statuses[n.name] === "known";
            const { locked } = starState(n, statuses);
            return (
              <button
                key={n.id}
                data-node={n.id}
                data-name={n.name}
                data-radius={starEncoding(n).radius}
                data-importance={starEncoding(n).importance}
                data-color={starEncoding(n).color}
                data-complete={known}
                data-locked={locked}
                data-glowing={known}
                aria-label={`Travel to ${n.name}`}
                aria-pressed={active}
                hidden={!p?.visible}
                className={`stellar-skill ${active ? "selected" : ""} ${known ? "known" : ""} ${read.includes(n.name) ? "visited" : ""}`}
                style={{
                  left: p?.x,
                  top: p?.y,
                  width: Math.max(16, (p?.radius || 8) * 2),
                  height: Math.max(16, (p?.radius || 8) * 2),
                  zIndex: Math.max(1, Math.round(18000 - (p?.depth || 18000))),
                  "--star-color": `#${mapColor(
                    layout.blocks.find((b) => b.id === n.group)?.color,
                    preferences.theme === "light",
                  )
                    .toString(16)
                    .padStart(6, "0")}`,
                  "--glyph-size": `${(p?.radius || 22) * 0.56}px`,
                  "--icon-padding": `${Math.max(3, (p?.radius || 22) * 0.3)}px`,
                  "--label-width": `${Math.max(80, Math.min(126, (p?.radius || 22) * 5))}px`,
                }}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse")
                    engine.current?.hoverStar(n.name);
                }}
                onPointerLeave={() => engine.current?.clearHover()}
                onFocus={() => engine.current?.hoverStar(n.name)}
                onBlur={() => engine.current?.clearHover()}
                onClick={(e) => {
                  if (!engine.current?.allowsClick(e)) return;
                  onSelect(n.name);
                  engine.current?.focus(n.name);
                }}
              >
                <span
                  className={`skill-glyph ${view.distance > 1500 ? "distant" : ""}`}
                >
                  <MathIcon formula={skillGlyph(n)} />
                </span>
                {itinerary && (
                  <span className="skill-stop">{nodes.indexOf(n) + 1}</span>
                )}
                <span
                  className={`skill-name ${(view.distance > 1500 || (p?.radius || 0) < 17 || itinerary) && !active ? "distant" : ""}`}
                >
                  {n.name}
                  {targets.includes(n.name) && <i>QUESTION TERM</i>}
                </span>
              </button>
            );
          })}
        </div>
      )}
      {fallback && (
        <div className="map-fallback">
          <p>3D is unavailable on this device. Select a concept below.</p>
          {nodes.map((n) => (
            <button key={n.id} onClick={() => onSelect(n.name)}>
              {n.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
