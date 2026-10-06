import BookmarkButton from "../ui/BookmarkButton";
import KnowledgeSwitch from "../ui/KnowledgeSwitch";
import { Clock, ArrowUpRight, PenLine } from "lucide-react";
import { byName, groups, questions, meta } from "../../graph";
import { useAtlas } from "../../app/AtlasContext";
import MathText from "../ui/MathText";
import { Symbol, Pill, StatusIcon } from "../ui/Primitives";
import FaqList from "./FaqList";
import ProofBlock from "./ProofBlock";
import PreExposure from "./PreExposure";

export default function ConceptNote({
  name,
  compact = false,
  navigate,
  warmUp = true,
}) {
  const {
    statuses,
    openReader,
    selectQuestion,
    updateStatus,
    pretest,
    read,
    completed,
    startRetry,
  } = useAtlas();
  const visit = navigate || openReader;
  const c = byName[name];
  if (!c) return null;
  // One unseen question first, unless the idea is already known or was read.
  const needsWarmUp =
    warmUp &&
    (c.pretest || c.check) &&
    !pretest[name] &&
    statuses[name] !== "known" &&
    !read.includes(name);
  if (needsWarmUp)
    return (
      <div className={`concept-note ${compact ? "compact" : ""}`}>
        <PreExposure concept={c} />
      </div>
    );
  const exercise = c.kind === "problem" ? questions.find((q) => q.id === c.questionId) : null;
  const finished = exercise ? completed.includes(exercise.id) : false;
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
      <div className="note-controls">
        <BookmarkButton name={c.name} />
        <label>
          I understand this{" "}
          <KnowledgeSwitch
            name={c.name}
            checked={statuses[c.name] === "known"}
            onChange={(on) => updateStatus(c.name, on ? "known" : "unknown")}
          />
        </label>
      </div>
      {exercise && (
        <div className="exercise-card">
          <span className="eyebrow">THE EXERCISE · {exercise.sourceLabel}</span>
          <MathText text={exercise.text} />
        </div>
      )}
      <div className="meaning-card">
        <span className="eyebrow">THE IDEA</span>
        <p>
          <MathText text={c.meaning} />
        </p>
      </div>
      <FaqList items={c.faq} onLink={visit} />
      <h4>Formal definition</h4>
      <p>
        <MathText text={c.linkedFormal} onLink={visit} />
      </p>
      <h4>A tiny example</h4>
      <div className="example-card">
        <MathText text={c.example} onLink={visit} />
      </div>
      {c.proof && (
        <>
          <h4>Full proof</h4>
          <ProofBlock
            proof={c.proof}
            locked={Boolean(exercise) && !finished}
            onLink={visit}
          />
        </>
      )}
      {exercise && finished && (
        <button className="secondary full" onClick={() => startRetry(exercise)}>
          <PenLine size={15} /> Try again myself
        </button>
      )}
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
