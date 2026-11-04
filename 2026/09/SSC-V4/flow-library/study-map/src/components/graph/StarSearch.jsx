import { useState } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { searchConcepts } from "../../lib/search";
import { useAtlas } from "../../app/AtlasContext";
export default function StarSearch({ onTravel }) {
  const { search, setSearch, setSelected, setScope, setFilter } = useAtlas();
  const [focused, setFocused] = useState(false);
  const matches = searchConcepts(search);
  function travel(c) {
    if (!onTravel) {
      setScope("all");
      setFilter("all");
      setSelected(c.name);
    }
    setSearch(c.name);
    setFocused(false);
    onTravel?.(c.name);
  }
  return (
    <div className="star-search">
      <label className="search-box">
        <Search size={17} />
        <input
          aria-label="Search concepts"
          placeholder="Find a star or symbol…"
          value={search}
          onFocus={() => setFocused(true)}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setFocused(false);
            if (e.key === "Enter" && matches[0]) travel(matches[0]);
          }}
        />
        {search && (
          <button aria-label="Clear search" onClick={() => setSearch("")}>
            <X size={16} />
          </button>
        )}
      </label>
      {focused && search && (
        <div className="star-search-results">
          {matches.length ? (
            matches.map((c) => (
              <button key={c.id} onClick={() => travel(c)}>
                <Sparkles size={14} />
                <span>
                  {c.name}
                  <small>
                    {c.group === "notation" ? "Symbol guide" : "Concept star"}
                  </small>
                </span>
              </button>
            ))
          ) : (
            <p>No stars found. Try a concept name or †.</p>
          )}
        </div>
      )}
    </div>
  );
}
