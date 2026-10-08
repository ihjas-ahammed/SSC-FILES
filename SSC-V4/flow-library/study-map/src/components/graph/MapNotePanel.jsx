import BackButton from "../ui/BackButton";
import { X, Maximize2 } from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";
import usePanelResize from "../../hooks/usePanelResize";
import InlineConcept from "./InlineConcept";
import PathExplanation from "./PathExplanation";
import MapLegend from "./MapLegend";

export default function MapNotePanel({
  selected,
  path,
  travel,
  panelRef,
  onClose,
}) {
  const { openReader, readerTab } = useAtlas();
  const { width, separator } = usePanelResize();
  return (
    <>
      <aside
        className="map-note-panel"
        aria-label="Concept side panel"
        ref={panelRef}
        style={width ? { flexBasis: width } : undefined}
      >
        <header className="map-note-heading">
          <BackButton label="Back to map" onClick={onClose} />
          <span className="eyebrow">
            {readerTab === "check" ? "SELECTED STAR · QUESTION" : "SELECTED STAR · CONCEPT NOTE"}
          </span>
          <div className="map-note-window-actions">
            <button
              className="icon-btn"
              aria-label="Open focused note window"
              title="Full-screen note"
              onClick={() => openReader(selected)}
            >
              <Maximize2 size={17} />
            </button>
            <button
              className="icon-btn"
              aria-label="Close concept side panel"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
        </header>
        <InlineConcept key={selected} name={selected} travel={travel} />
        <PathExplanation path={path} onSelect={travel} />
        <MapLegend selected={selected} />
      </aside>
      <div className="map-panel-resize" {...separator} />
    </>
  );
}
