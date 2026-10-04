import { Clock, ArrowUpRight } from "lucide-react";
import { byName, groups, questions, meta } from "../../graph";
import { useAtlas } from "../../app/AtlasContext";
import MathText from "../ui/MathText";
import { Symbol, Pill, StatusIcon } from "../ui/Primitives";
export default function ConceptNote({ name, compact = false, navigate }) {
  const { statuses, openReader, selectQuestion } = useAtlas();
  const visit = navigate || openReader;
  const c = byName[name];
  if (!c) return null;
  return (
    <div className={`concept-note ${compact ? "compact" : ""}`}>
      <div className="note-heading">
        <Symbol concept={c} large />
        <div>
          <span className="eyebrow">
            {groups.find((g) => g.id === c.group).name}
          </span>
          <h2>{c.name}</h2>
          <div className="note-meta">
            <Clock size={13} />
            {c.minutes} min read<span>·</span>Depth {c.depth}
            <StatusIcon status={statuses[c.name]} />
            {statuses[c.name] || "unknown"}
          </div>
        </div>
      </div>
      <div className="meaning-card">
        <span className="eyebrow">THE IDEA</span>
        <p>
          <MathText text={c.meaning} />
        </p>
      </div>
      <h4>Formal definition</h4>
      <p>
        <MathText text={c.linkedFormal} onLink={visit} />
      </p>
      <h4>A tiny example</h4>
      <div className="example-card">
        <MathText text={c.example} onLink={visit} />
      </div>
      <h4>Before this, understand</h4>
      <div className="prerequisite-chips">
        {c.prerequisites.length ? (
          c.prerequisites.map((p) => (
            <button onClick={() => visit(p)} key={p}>
              <StatusIcon status={statuses[p]} />
              {p}
              <ArrowUpRight size={12} />
            </button>
          ))
        ) : (
          <Pill color="neutral">Ground concept · recursion stops here</Pill>
        )}
      </div>
      <h4>Why it matters in {meta.module}</h4>
      <p>
        This idea supports {c.usedIn.length} exam questions.{" "}
        {c.usedIn.slice(0, 5).map((id) => (
          <button
            className="inline-question"
            key={id}
            onClick={() => selectQuestion(questions.find((q) => q.id === id))}
          >
            {id}
          </button>
        ))}
      </p>
    </div>
  );
}
