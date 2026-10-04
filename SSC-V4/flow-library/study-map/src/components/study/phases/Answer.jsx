import { useState } from "react";
import ExamPractice from "../ExamPractice";
import { ArrowRight, CheckCircle2, Flag } from "lucide-react";
import { report, questions } from "../../../graph";
import MathText from "../../ui/MathText";
import { StatusIcon } from "../../ui/Primitives";
import { useAtlas } from "../../../app/AtlasContext";

import SymbolKey from "../SymbolKey";
export default function Answer() {
  const [examMode, setExamMode] = useState(false);
  const { statuses, question, flow, setFlow, nextQuestion, openReader } =
    useAtlas();
  return (
    <div className="answer-screen">
      <div className="eyebrow">
        <CheckCircle2 size={15} /> {question.id} · COMPLETE
      </div>
      <h2>{question.title}</h2>
      <div className="source-question">{question.text}</div>
      {question.verify && (
        <div className="source-qualification">
          <Flag size={16} />
          <MathText text={question.verify} />
        </div>
      )}
      {examMode ? (
        <ExamPractice onCompare={() => setExamMode(false)} />
      ) : (
        <>
          <button className="secondary full" onClick={() => setExamMode(true)}>
            Write an exam answer from memory
          </button>
          {flow.examDraft && (
            <details>
              <summary>Your saved answer from memory</summary>
              <p className="saved-exam-draft">{flow.examDraft}</p>
            </details>
          )}
          <h3>Formal answer</h3>
          <div className="formal-answer">
            <MathText text={question.linkedAnswer} onLink={openReader} />
          </div>
          <SymbolKey names={question.symbols} />
          {flow.attempt && (
            <details>
              <summary>Your original attempt</summary>
              <p>{flow.attempt}</p>
            </details>
          )}
          <div className="key-terms">
            <h4>Key terms</h4>
            <div className="prerequisite-chips">
              {question.terms.map((t) => (
                <button key={t} onClick={() => openReader(t)}>
                  <StatusIcon status={statuses[t]} />
                  {t}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="answer-actions">
        <button
          className="secondary"
          onClick={() => {
            setFlow((f) => ({
              ...f,
              phase: "hints",
              unlocked: [],
              unlockIndex: 0,
            }));
          }}
        >
          Practice steps again
        </button>
        <button className="primary" onClick={nextQuestion}>
          {question.id === questions.at(-1).id
            ? "See my progress"
            : "Next question"}
          <ArrowRight size={16} />
        </button>
      </div>
      <div className="run-report">
        {report.created} notes created · {report.reused} reused ·{" "}
        {report.verifyFlags} source flags · Ground stops:{" "}
        {report.ground.join(", ")}.
      </div>
    </div>
  );
}
