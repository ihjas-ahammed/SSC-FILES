import { useAtlas } from "../../app/AtlasContext";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Layers,
  Network,
} from "lucide-react";
import MathText from "../ui/MathText";
import { Pill, StatusIcon, Symbol } from "../ui/Primitives";

import { concepts, groups } from "../../graph";
export default function ConceptInspector() {
  const {
    statuses,
    selected,
    setSelected,
    selectedConcept,
    openReader,
    buildSingleRoute,
  } = useAtlas();
  return (
    <aside className="inspector">
      <div className="inspector-heading">
        <span className="eyebrow">CONCEPT EXPLORER</span>
        <span className="inspector-index">
          {String(concepts.findIndex((c) => c.name === selected) + 1).padStart(
            2,
            "0",
          )}{" "}
          / {concepts.length}
        </span>
      </div>
      <div
        className="inspector-visual"
        style={{
          "--accent": groups.find((g) => g.id === selectedConcept.group).color,
        }}
      >
        <div className="visual-orbit one" />
        <div className="visual-orbit two" />
        <div className="visual-orbit three" />
        <div className="visual-core">
          <Symbol concept={selectedConcept} large />
        </div>
        <span className="visual-point p1" />
        <span className="visual-point p2" />
        <span className="visual-point p3" />
      </div>
      <div className="inspector-body">
        <div className="inspector-category">
          <span
            style={{
              color: groups.find((g) => g.id === selectedConcept.group).color,
            }}
          >
            {groups.find((g) => g.id === selectedConcept.group).name}
          </span>
          <Pill color={statuses[selected] === "known" ? "green" : "neutral"}>
            {statuses[selected] === "known" ? (
              <Check size={11} />
            ) : (
              <span className="small-dot" />
            )}
            {statuses[selected] || "Unexplored"}
          </Pill>
        </div>
        <h2>{selected}</h2>
        <p className="inspector-meaning">
          <MathText text={selectedConcept.meaning} />
        </p>
        <div className="inspector-stats">
          <span>
            <Clock size={14} />
            {selectedConcept.minutes} min
          </span>
          <span>
            <Layers size={14} />
            Depth {selectedConcept.depth}
          </span>
          <span>
            <BookOpen size={14} />
            {selectedConcept.usedIn.length} questions
          </span>
        </div>
        <div className="divider" />
        <div className="prereq-heading">
          START WITH THESE <span>{selectedConcept.prerequisites.length}</span>
        </div>
        <div className="inspector-prereqs">
          {selectedConcept.prerequisites.map((p) => (
            <button key={p} onClick={() => setSelected(p)}>
              <StatusIcon status={statuses[p]} />
              {p}
              <ChevronRight size={13} />
            </button>
          ))}
          {!selectedConcept.prerequisites.length && (
            <p className="muted">A ground concept. You can start here.</p>
          )}
        </div>
        <button className="primary full" onClick={() => openReader(selected)}>
          Explore this concept
          <ArrowUpRight size={16} />
        </button>
        <button
          className="secondary full"
          onClick={() => buildSingleRoute(selected)}
        >
          I don’t know this · build my route
        </button>
        <div className="inspector-footnote">
          <Network size={13} />
          <span>Every concept connects to its foundations.</span>
        </div>
      </div>
    </aside>
  );
}
