import { useState } from "react";
import { useAtlas } from "../../app/AtlasContext";
import MathText from "../ui/MathText";
export default function ExamPractice({ onCompare }) {
  const { question, flow, setFlow } = useAtlas();
  const [showPrompts, setShowPrompts] = useState(false);
  return (
    <section className="exam-practice">
      <div className="eyebrow">RECONSTRUCT WITHOUT OPTIONS</div>
      <h3>Write the whole answer from memory.</h3>
      <p>
        Include the definitions, assumptions and every requested derivation.
        This written practice is saved for your own comparison.
      </p>
      <textarea
        aria-label="Exam answer from memory"
        rows={9}
        value={flow.examDraft || ""}
        onChange={(e) => setFlow((f) => ({ ...f, examDraft: e.target.value }))}
        placeholder="Close your notes. State what is given, choose the first step, then explain each line…"
      />
      <button className="text-button" onClick={() => setShowPrompts((v) => !v)}>
        {showPrompts
          ? "Hide reasoning prompts"
          : "Show reasoning prompts if stuck"}
      </button>
      {showPrompts && (
        <ol>
          {question.steps.map((s, i) => (
            <li key={i}>
              <MathText text={s.prompt} />
            </li>
          ))}
        </ol>
      )}
      <button className="primary full" onClick={onCompare}>
        Compare with the formal solution
      </button>
      <p className="honest-note">
        Compare each step, symbol and assumption. Objective success measures
        recognition; your written answer is not automatically graded.
      </p>
    </section>
  );
}
