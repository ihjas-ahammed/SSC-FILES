import { meta, byName } from "../lib/course.js";
import { useEffect, useRef, useState } from "react";
import { Orbit, Search, BookOpen, ArrowLeft } from "lucide-react";
import { useAtlas } from "../app/AtlasContext";
import SkyMap from "../components/graph/SkyMap";
import { starState } from "../graph/starState.js";
import KnowledgeGraph from "../components/graph/KnowledgeGraph";
import { naturalPause } from "../lib/noteJourney";
import { scrollBeforeNavigate } from "../lib/scrollBeforeNavigate";
import MapControlsScreen from "../components/graph/MapControlsScreen";
import useMobileLayout from "../hooks/useMobileLayout";
import MapNotePanel from "../components/graph/MapNotePanel";

export default function AtlasPage() {
  const {
    statuses,
    questionId,
    question,
    selected,
    setSelected,
    scope,
    setScope,
    filter,
    setFilter,
    nodes,
    read,
    mapScreen: screen,
    setMapScreen: setScreen,
    mapPanelOpen: panelOpen,
    setMapPanelOpen: setPanelOpen,
    setReaderTab,
  } = useAtlas();
  const mobile = useMobileLayout();
  const [dimension, setDimension] = useState(null);
  const mapDimension = dimension || (mobile ? "2d" : "3d");
  const panel = useRef(null),
    navigationTicket = useRef(0);
  const [path, setPath] = useState(null);
  const [navigation, setNavigation] = useState(null);
  useEffect(() => {
    setScope("all");
    setFilter("all");
    if (byName[selected] && starState(byName[selected], statuses).locked) {
      const first =
        nodes.find((n) => statuses[n.name] === "known") ||
        nodes.find((n) => !starState(n, statuses).locked);
      if (first) setSelected(first.name);
    }
  }, []);
  async function travel(name) {
    const ticket = ++navigationTicket.current;
    const ready = await scrollBeforeNavigate(panel.current || window);
    if (!ready || ticket !== navigationTicket.current) return;
    setScope("all");
    setFilter("all");
    await naturalPause(280);
    if (ticket !== navigationTicket.current) return;
    setSelected(name);
    setReaderTab("note");
    setPath(null);
    setNavigation({ type: "star", value: name, stamp: Date.now() });
    setPanelOpen(true);
    setScreen("map");
  }
  function selectStar(name) {
    navigationTicket.current++;
    setSelected(name);
    setReaderTab("note");
    setPath(null);
    setPanelOpen(true);
    if (panel.current) panel.current.scrollTop = 0;
  }
  function visitTopic(id) {
    if (mapDimension === "2d") {
      const members = nodes.filter(n => n.group === id);
      const first = members.find(n => !starState(n, statuses).locked) || members[0];
      if (first) travel(first.name);
      return;
    }
    setScope("all");
    setFilter("all");
    setNavigation({ type: "block", value: id, stamp: Date.now() });
    setScreen("map");
    if (mobile)
      window.scrollTo({
        top: 0,
        behavior:
          document.documentElement.dataset.motion === "off"
            ? "instant"
            : "smooth",
      });
  }
  return (
    <section className="stellar-workspace" data-screen={screen}>
      {mobile && (
        <header className="mobile-stellar-heading">
          <span className="eyebrow">{meta.module.toUpperCase()}</span>
          <h1>{selected}</h1>
        </header>
      )}
      {
        <nav className="map-screen-nav" aria-label="Map screens">
          {["2d", "3d"].map((value) => (
            <button
              key={value}
              className={
                screen === "map" && mapDimension === value ? "active" : ""
              }
              aria-label={`${value.toUpperCase()} map screen`}
              aria-pressed={mapDimension === value}
              onClick={() => {
                setDimension(value);
                setScreen("map");
              }}
            >
              <Orbit size={16} />
              <span>{value.toUpperCase()} map</span>
            </button>
          ))}
          <button
            className={screen === "controls" ? "active" : ""}
            onClick={() => setScreen("controls")}
            aria-label="Search and map controls"
          >
            <Search size={16} />
            <span>Search & controls</span>
          </button>
          <button
            className={panelOpen ? "active" : ""}
            onClick={() => {
              setScreen("map");
              setPanelOpen(true);
            }}
            aria-label="Selected concept details"
          >
            <BookOpen size={16} />
            <span>Concept</span>
          </button>
          <small>{nodes.length} stars</small>
        </nav>
      }
      <div className="stellar-map-body">
        {panelOpen && (
          <MapNotePanel
            selected={selected}
            path={path}
            travel={travel}
            panelRef={panel}
            onClose={() => setPanelOpen(false)}
          />
        )}
        <div
          className="stellar-map-screen"
          inert={screen !== "map" ? true : undefined}
          aria-hidden={screen !== "map"}
        >
          {mapDimension === "2d" ? (
            <SkyMap
              nodes={nodes}
              selected={selected}
              statuses={statuses}
              onSelect={selectStar}
              navigation={navigation}
            />
          ) : (
            <KnowledgeGraph
              nodes={nodes}
              selected={selected}
              onSelect={selectStar}
              statuses={statuses}
              read={read}
              targets={question.terms}
              mode={`${scope}-${questionId}-${filter}`}
              navigation={navigation}
              onPath={setPath}
              focusInitially={mobile}
              readingFocus={mobile || panelOpen}
            />
          )}
          {!panelOpen && (
            <button
              className="selected-star-chip"
              onClick={() => {
                setScreen("map");
                setPanelOpen(true);
              }}
              aria-label={`Open details for ${selected}`}
            >
              <BookOpen size={14} />
              <span>{selected}</span>
              <span>↗</span>
            </button>
          )}
        </div>
      </div>
      {screen === "controls" && (
        <div className="map-aux-screen">
          <button className="map-back" onClick={() => setScreen("map")}>
            <ArrowLeft size={15} /> Return to {mapDimension.toUpperCase()} map
          </button>
          <MapControlsScreen
            travel={travel}
            visitTopic={visitTopic}
            onOverview={() => {
              setScreen("map");
              setNavigation({ type: "overview", stamp: Date.now() });
            }}
          />
        </div>
      )}
    </section>
  );
}
