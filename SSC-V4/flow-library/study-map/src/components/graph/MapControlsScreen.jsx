import { useAtlas } from "../../app/AtlasContext";
import { groups } from "../../graph";
import MapToolbar from "./MapToolbar";
import CurrentMission from "./CurrentMission";
import MapLegend from "./MapLegend";
import { ChevronRight, CircleHelp } from "lucide-react";
export default function MapControlsScreen({
  travel,
  visitTopic,
  embedded = false,
  onOverview,
  dimension = "3d",
}) {
  const { setModal, nodes, statuses, selected } = useAtlas();
  return (
    <section className="map-settings-screen" aria-label="Map controls screen">
      {!embedded && (
        <header>
          <span className="eyebrow">MAP CONTROLS</span>
          <h1>Choose your next star.</h1>
          <p>
            Search a concept or choose a topic constellation. The map keeps your
            position while you’re here.
          </p>
        </header>
      )}
      <MapToolbar onTravel={(name) => travel(name)} />
      {!embedded && <MapLegend selected={selected} />}
      {onOverview && (
        <button className="secondary" onClick={onOverview}>
          Show whole universe
        </button>
      )}
      <h2>Topic constellations</h2>
      <div className="topic-destinations">
        {groups.map((g) => (
          <button
            key={g.id}
            onClick={() => visitTopic(g.id)}
            style={{ "--topic": g.color }}
          >
            <span>{g.icon}</span>
            <div>
              <b>{g.name}</b>
              <small>
                {nodes.filter((n) => n.group === g.id).length} stars in current
                view
              </small>
            </div>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>
      <details className="map-star-directory">
        <summary>Browse concepts in this view · {nodes.length}</summary>
        <div>
          {nodes.map((n) => (
            <button key={n.id} onClick={() => travel(n.name)}>
              <i className={statuses[n.name] === "known" ? "understood" : ""} />
              {n.name}
              <ChevronRight size={13} />
            </button>
          ))}
        </div>
      </details>
      <section className="map-gesture-guide">
        <h2>Explore the map</h2>
        {dimension === "2d" ? (
          <>
            <p>
              Drag to pan the night sky. Scroll or pinch to zoom; move two
              fingers together to pan. Use + and − to zoom, or the centre
              control to return to the selected star.
            </p>
            <p>
              Select one star to see its connections and open the adjacent note
              or question panel. Grey locked stars become selectable after you
              understand their prerequisites. You can still read their notes
              through search.
            </p>
            <p>
              Keyboard: Tab to an available star and press Enter. Focus the sky
              and use arrow keys to select available stars, + and − to zoom, or
              Home to center the selection.
            </p>
          </>
        ) : (
          <>
            <p>
              Mouse: drag to orbit, scroll to zoom, right-drag or Shift-drag to
              pan.
            </p>
            <p>
              Touch: one finger to orbit; pinch to zoom; move two fingers
              together to pan. Focus a star first, then tap one of its
              connections to travel to the other endpoint. Arrows show
              prerequisite direction; travel works both ways.
            </p>
            <p>
              Keyboard: Tab to a star and press Enter. Focus the canvas and use
              arrow keys to pan.
            </p>
          </>
        )}
        <button className="secondary" onClick={() => setModal("help")}>
          <CircleHelp size={16} />
          Study help
        </button>
      </section>
      {!embedded && <CurrentMission />}
    </section>
  );
}
