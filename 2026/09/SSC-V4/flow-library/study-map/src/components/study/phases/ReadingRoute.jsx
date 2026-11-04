import { ArrowRight, Check, ChevronRight, Network, Target } from "lucide-react";
import { byName } from "../../../graph";
import Objective from "../Objective";
import ConceptNote from "../ConceptNote";
import { useAtlas } from "../../../app/AtlasContext";

import JourneyMap from "../JourneyMap";

export default function ReadingRoute() {
  const {
    read,
    setRead,
    question,
    readerTab,
    setReaderTab,
    setReaderResult,
    flow,
    jumpToRouteNote,
    plan,
    updateStatus,
    finishReading,
    routeNext,
  } = useAtlas();
  return (
    <div className="route-screen">
      <JourneyMap />
      <div className="eyebrow">
        <Network size={14} /> YOUR SHORTEST READING ROUTE
      </div>
      <h2>
        {flow.phase === "review"
          ? "A little more practice."
          : `${plan.length} notes. One clear path.`}
      </h2>
      <p>
        {plan.reduce((a, n) => a + byName[n].minutes, 0)} min estimated ·
        prerequisites first · known concepts skipped
      </p>
      {flow.idk.length === 1 && plan.length === 1 && (
        <div className="mini-score">
          No unknown ancestors. Go straight to {flow.idk[0]}.
        </div>
      )}
      <details className="route-itinerary">
        <summary>View all {plan.length} stops on this path</summary>
        <ol className="route-list">
          {plan.map((n, i) => (
            <li
              key={n}
              className={`${i === flow.readIndex ? "current" : ""} ${read.includes(n) ? "read" : ""}`}
            >
              <button onClick={() => jumpToRouteNote(i)}>
                <span className="route-number">
                  {read.includes(n) ? <Check size={13} /> : i + 1}
                </span>
                <div>
                  <b>{n}</b>
                  <small>
                    {flow.idk.includes(n)
                      ? "The concept you switched off"
                      : `Needed for ${plan.find((x) => byName[x].prerequisites.includes(n)) || flow.idk[0]}`}
                  </small>
                </div>
                <span>{byName[n].minutes} min</span>
                <ChevronRight size={14} />
              </button>
            </li>
          ))}
        </ol>
      </details>
      <div className="route-final-stop">
        <Target size={15} />
        <span>
          Then retry{" "}
          <b>
            {question.id}: {question.title}
          </b>
        </span>
      </div>
      <div className="route-reading">
        <div className="reader-tabs">
          <button
            className={readerTab === "note" ? "active" : ""}
            onClick={() => setReaderTab("note")}
          >
            Read
          </button>
          <button
            className={readerTab === "check" ? "active" : ""}
            onClick={() => {
              setReaderTab("check");
              setReaderResult(null);
            }}
          >
            Self-check
          </button>
          <span>
            {flow.readIndex + 1} / {plan.length}
          </span>
        </div>
        {readerTab === "note" ? (
          <>
            <ConceptNote name={plan[flow.readIndex]} compact />
            <div className="route-reading-actions">
              <button className="secondary" onClick={routeNext}>
                Read ·{" "}
                {flow.readIndex + 1 < plan.length ? "next note" : "retest"}
                <Check size={14} />
              </button>
              <button
                className="primary"
                onClick={() => {
                  setRead((old) => [
                    ...new Set([...old, plan[flow.readIndex]]),
                  ]);
                  setReaderTab("check");
                }}
              >
                Self-check
                <ArrowRight size={14} />
              </button>
            </div>
          </>
        ) : (
          <Objective
            key={`route-${plan[flow.readIndex]}`}
            item={byName[plan[flow.readIndex]].check}
            onResult={(ok) => {
              setReaderResult(ok);
              updateStatus(plan[flow.readIndex], ok ? "known" : "shaky");
            }}
            onNext={routeNext}
            nextLabel={
              flow.readIndex + 1 < plan.length
                ? "Next concept"
                : "Retest my gaps"
            }
          />
        )}
      </div>
      <button className="text-button" onClick={finishReading}>
        Go to recall · retest my gaps
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
