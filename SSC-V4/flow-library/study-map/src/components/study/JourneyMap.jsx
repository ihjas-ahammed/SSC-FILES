import { useMemo, useState } from "react";
import { Sparkles, Flag } from "lucide-react";
import { byName } from "../../lib/course";
import { useAtlas } from "../../app/AtlasContext";
import PathExplanation from "../graph/PathExplanation";
import KnowledgeGraph from "../graph/KnowledgeGraph";
export default function JourneyMap() {
  const { plan, flow, setFlow, read, statuses, setReaderTab } = useAtlas();
  const [path, setPath] = useState(null);
  const selectStop = (name) => {
    setFlow((f) => ({ ...f, readIndex: plan.indexOf(name) }));
    setReaderTab("note");
  };
  const nodes = useMemo(() => plan.map((n) => byName[n]), [plan]);
  const done = plan.filter((n) => read.includes(n)).length,
    current = plan[flow.readIndex];
  return (
    <section className="journey-map-shell">
      <div className="journey-map-heading">
        <span>
          <Sparkles size={16} />
          Your stellar reading path
        </span>
        <b>
          {done} / {plan.length} explored
        </b>
      </div>
      <KnowledgeGraph
        nodes={nodes}
        selected={current}
        onSelect={selectStop}
        onPath={setPath}
        statuses={statuses}
        targets={flow.idk}
        mode={`journey-${flow.questionId}`}
        itinerary
        read={read}
      />
      {path && <PathExplanation path={path} onSelect={selectStop} />}
      <div className="journey-progress">
        <div
          role="progressbar"
          aria-label="Reading route progress"
          aria-valuemin={0}
          aria-valuemax={plan.length}
          aria-valuenow={done}
          className="progress-track"
        >
          <i style={{ width: `${(done / plan.length) * 100}%` }} />
        </div>
        <span>
          {done === plan.length ? (
            <>
              <Flag size={13} />
              Path explored. Time to recall.
            </>
          ) : (
            <>
              Next star: <b>{current}</b>
            </>
          )}
        </span>
      </div>
    </section>
  );
}
