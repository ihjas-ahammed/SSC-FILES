import { useAtlas } from "../../app/AtlasContext";
import { Layers, Network, Search, Target, X } from "lucide-react";

import StarSearch from "./StarSearch";

export default function MapToolbar({ onTravel }) {
  const { scope, setScope, setFilter, search, setSearch, plan } = useAtlas();
  return (
    <div className="map-toolbar">
      <div className="view-tabs">
        <button
          className={scope === "question" ? "active" : ""}
          onClick={() => {
            setScope("question");
            setFilter("all");
          }}
        >
          <Target size={14} />
          This question
        </button>
        <button
          className={scope === "all" ? "active" : ""}
          onClick={() => {
            setScope("all");
            setFilter("all");
          }}
        >
          <Network size={14} />
          Full atlas
        </button>
        {plan.length > 0 && (
          <button
            className={scope === "route" ? "active" : ""}
            onClick={() => {
              setScope("route");
              setFilter("all");
            }}
          >
            <Layers size={14} />
            My route
          </button>
        )}
      </div>
      <StarSearch onTravel={onTravel} />
    </div>
  );
}
