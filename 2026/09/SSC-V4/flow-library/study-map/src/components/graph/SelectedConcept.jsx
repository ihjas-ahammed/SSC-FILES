import { BookOpen, ArrowRight } from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";

export default function SelectedConcept() {
  const { selected, selectedConcept, openReader, buildSingleRoute } =
    useAtlas();
  return (
    <div className="selected-concept-card">
      <div>
        <span className="eyebrow">SELECTED CONCEPT</span>
        <h3>{selected}</h3>
        <p>{selectedConcept.meaning}</p>
      </div>
      <div>
        <button className="primary" onClick={() => openReader(selected)}>
          <BookOpen size={14} />
          Read note
          <ArrowRight size={14} />
        </button>
        <button
          className="secondary"
          onClick={() => buildSingleRoute(selected)}
        >
          Build route
        </button>
      </div>
    </div>
  );
}
