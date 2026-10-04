import { useAtlas } from "../../app/AtlasContext";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function CurrentMission() {
  const { completed, question, setModal, flow } = useAtlas();
  return (
    <div className="mission-card">
      <span className="mission-icon">
        <GraduationCap size={22} />
      </span>
      <div>
        <span className="eyebrow">
          YOUR CURRENT MISSION{" "}
          <span>
            Q-{question.section}-{question.number}
          </span>
        </span>
        <h3>{question.title}</h3>
        <p>
          {completed.includes(question.id)
            ? "Completed. Revisit any step, or continue your journey."
            : `${question.steps.length} bite-size checks · think first, reveal options when ready`}
        </p>
      </div>
      <button className="primary" onClick={() => setModal("study")}>
        {flow.phase === "attempt" ? "Start self-check" : "Continue studying"}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
