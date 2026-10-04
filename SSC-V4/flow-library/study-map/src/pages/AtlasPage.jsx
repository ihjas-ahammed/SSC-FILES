import { meta } from "../lib/course.js";
import { useEffect, useRef, useState } from "react";
import { Orbit, Search, BookOpen, ArrowLeft } from "lucide-react";
import { useAtlas } from "../app/AtlasContext";
import KnowledgeGraph from "../components/graph/KnowledgeGraph";
import {
  naturalPause,
  waitForMapArrival,
  settleOnNote,
} from "../lib/noteJourney";
import { scrollBeforeNavigate } from "../lib/scrollBeforeNavigate";
import MapControlsScreen from "../components/graph/MapControlsScreen";
import useMobileLayout from "../hooks/useMobileLayout";
import InlineConcept from "../components/graph/InlineConcept";
import MapNotePanel from "../components/graph/MapNotePanel";
import MapLegend from "../components/graph/MapLegend";
import PathExplanation from "../components/graph/PathExplanation";

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
  const panel = useRef(null),
    navigationTicket = useRef(0);
  const [path, setPath] = useState(null);
  const [navigation, setNavigation] = useState(null);
  useEffect(() => {
    setScope("all");
    setFilter("all");
  }, []);
  async function travel(name) {
    const ticket = ++navigationTicket.current;
    const ready = await scrollBeforeNavigate(
      mobile ? window : panel.current || window,
    );
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
    if (mobile) {
      await waitForMapArrival(
        document.querySelector(".stellar-map-screen .stellar-map"),
      );
      await naturalPause(420);
      if (ticket === navigationTicket.current)
        await settleOnNote(
          window,
          document.querySelector(".mobile-stellar-content .concept-note h2"),
        );
    }
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
    <section
      className="stellar-workspace"
      data-screen={mobile ? "inline" : screen}
    >
      {mobile && (
        <header className="mobile-stellar-heading">
          <span className="eyebrow">
            {meta.module.toUpperCase()} · YOUR LEARNING UNIVERSE
          </span>
          <h1>Follow the stars.</h1>
          <p>Select a concept or follow a path, then study it below.</p>
        </header>
      )}
      {!mobile && (
        <nav className="map-screen-nav" aria-label="Map screens">
          <button
            className={screen === "map" ? "active" : ""}
            onClick={() => setScreen("map")}
            aria-label="3D map screen"
          >
            <Orbit size={16} />
            <span>3D map</span>
          </button>
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
      )}
      <div className="stellar-map-body">
        {!mobile && panelOpen && (
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
          inert={!mobile && screen !== "map" ? true : undefined}
          aria-hidden={!mobile && screen !== "map"}
        >
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
          {!mobile && !panelOpen && (
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
      {mobile && (
        <div className="mobile-stellar-content">
          <PathExplanation path={path} onSelect={travel} />
          <MapLegend selected={selected} />
          <details className="inline-map-tools">
            <summary>Search & map options</summary>
            <MapControlsScreen
              embedded
              onOverview={() => {
                setNavigation({ type: "overview", stamp: Date.now() });
                window.scrollTo({
                  top: 0,
                  behavior:
                    document.documentElement.dataset.motion === "off"
                      ? "instant"
                      : "smooth",
                });
              }}
              travel={travel}
              visitTopic={visitTopic}
            />
          </details>
          <InlineConcept key={selected} name={selected} travel={travel} />
        </div>
      )}
      {!mobile && screen === "controls" && (
        <div className="map-aux-screen">
          <button className="map-back" onClick={() => setScreen("map")}>
            <ArrowLeft size={15} /> Return to 3D map
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
