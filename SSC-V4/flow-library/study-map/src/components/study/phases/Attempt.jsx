import { ArrowRight, Flag, ExternalLink, LockKeyhole } from "lucide-react";

import { Pill } from "../../ui/Primitives";

import { meta } from "../../../lib/course.js";
import { useAtlas } from "../../../app/AtlasContext";

export default function Attempt() {
  const { question, setModal, flow, setFlow, makeChecklist } = useAtlas();
  return (
    <div className="attempt-screen">
      <div className="eyebrow">
        <Pill>SECTION {question.section}</Pill>
        <span>
          {question.marks_style.toUpperCase()} ANSWER ·{" "}
          {question.type.toUpperCase()}
        </span>
      </div>
      <h2>{question.title}</h2>
      <div className="source-question">{question.text}</div>
      <div className="source-line">
        <span>
          Verbatim visual source: {meta.sourceName} · p. {question.page}
        </span>
        <button onClick={() => setModal("source")}>
          View original <ExternalLink size={12} />
        </button>
      </div>
      {question.verify && (
        <div className="source-flag">
          <Flag size={14} />
          This question has a source qualification. We’ll show it with the
          solution.
        </div>
      )}
      <h3>Try answering this yourself first.</h3>
      <p>
        Write an attempt, or skip straight to the concept checklist. We’ll test
        the reasoning one small step at a time.
      </p>
      <textarea
        aria-label="Your answer attempt"
        value={flow.attempt}
        onChange={(e) => setFlow((f) => ({ ...f, attempt: e.target.value }))}
        placeholder="What do you think? Start with the first step…"
        rows={4}
      />
      <div className="attempt-note">
        <LockKeyhole size={13} />
        The formal answer unlocks as you solve its checkpoints.
      </div>
      <div className="attempt-actions">
        <button className="secondary" onClick={() => makeChecklist([])}>
          Skip · find my gaps
        </button>
        <button
          className="primary"
          onClick={() =>
            setFlow((f) => ({ ...f, phase: "steps", step: 0, results: [] }))
          }
        >
          Try guided steps
          <ArrowRight size={16} />
        </button>
      </div>
      <p className="honest-note">
        Your written attempt is saved for comparison. Objective steps are graded
        automatically.
      </p>
      <button
        className="text-button"
        onClick={() => setFlow((f) => ({ ...f, phase: "hints" }))}
      >
        Try the solution with hints <ArrowRight size={15} />
      </button>
    </div>
  );
}
