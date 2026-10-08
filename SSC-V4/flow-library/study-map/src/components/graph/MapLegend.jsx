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
      <summary>
        Size = learning depth · Glow = understood · Color = topic
      </summary>
      <p>
        Difficulty is estimated from prerequisite depth. Deeper concepts have
        larger stars. This is a study guide, not a measured difficulty rating.
      </p>
      <p>
        Only understood stars glow. Their brightness reflects how many of the{" "}
        {questions.length} exam questions they support. Grey stars with unmet
        prerequisites are disabled in 2D. In 3D, dim stars only reflect nearby
        understood stars. A ring marks the selected concept. Reading alone does
        not light a star.
      </p>
      <p>
        Paths into the selected concept are blue; paths to concepts that depend
        on it are soft red. Dotted connections are grey. Only the selected
        star's connections are shown. In 2D, solid lines reach direct neighbours
        and dotted lines reach concepts two connections away. In 3D, dotted
        lines connect different topic constellations.
      </p>
      <p>
        The 2D map centres the selected star. In 3D, the most depended-on
        foundation constellation stays central. Topics orbit slowly around it;
        motion pauses while you focus on a concept.
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
