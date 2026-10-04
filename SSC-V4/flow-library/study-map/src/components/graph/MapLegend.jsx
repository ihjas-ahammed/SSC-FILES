import { useAtlas } from "../../app/AtlasContext";
import { mapColor } from "../../graph/three/theme";
import { groups, byName, questions } from "../../lib/course";
import { starEncoding, maxLearningDepth } from "../../graph/three/encoding";
export default function MapLegend({ selected }) {
  const { preferences } = useAtlas();
  const c = byName[selected],
    encoding = c && starEncoding(c);
  return (
    <details className="map-legend">
      <summary>Size = learning depth · Glow = exam use · Color = topic</summary>
      <p>
        Difficulty is estimated from prerequisite depth. Deeper concepts have
        larger stars. This is a study guide, not a measured difficulty rating.
      </p>
      <p>
        Brighter halos mean the concept supports more of the {questions.length}{" "}
        exam questions. Colors stay with their topic. An extra green halo marks
        a passed self-check; a connection glows green when both concepts are
        known. A ring marks selection. Reading alone is tracked separately.
      </p>
      <p>
        The most depended-on foundation constellation stays central. Topics
        orbit slowly around it; motion pauses while you focus on a concept.
      </p>
      {c && (
        <div className="selected-star-metrics">
          <b>{selected}</b>
          <span>
            Depth {c.depth} / {maxLearningDepth}
          </span>
          <span>
            Supports {encoding.questionCount} / {questions.length} questions
          </span>
        </div>
      )}
      <div className="map-color-key">
        {groups.map((g) => (
          <span key={g.id}>
            <i
              style={{
                background: `#${mapColor(g.color, preferences.theme === "light")
                  .toString(16)
                  .padStart(6, "0")}`,
              }}
            />
            {g.short}
          </span>
        ))}
      </div>
    </details>
  );
}
