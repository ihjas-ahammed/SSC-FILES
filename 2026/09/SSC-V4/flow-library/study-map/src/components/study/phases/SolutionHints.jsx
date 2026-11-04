import { Compass, ArrowRight, Lightbulb } from "lucide-react";
import { useAtlas } from "../../../app/AtlasContext";
import MathText from "../../ui/MathText";
import PlainWords from "../PlainWords";
export default function SolutionHints() {
  const { question, flow, setFlow, togglePrerequisites, showTerm } = useAtlas();
  const unlocked = flow.unlocked || [];
  const hints = question.hints || [];
  return (
    <div className="solution-hints">
      <div className="eyebrow">
        <Compass size={16} />
        YOUR SOLUTION MISSION · {question.id}
      </div>
      <h2>Find your way to the answer.</h2>
      <div className="source-question"><MathText text={question.text} onLink={showTerm} /></div>
      <PlainWords text={question.plain} />
      <p>
        Think first. Each correct checkpoint unlocks another part of the
        complete formal solution. A missed answer gives you a hint and another
        try.
      </p>
      {hints.length > 0 && (
        <ol className="hint-cards">
          {hints.map((hint, i) => (
            <li key={i}>
              <Lightbulb size={18} />
              <div>
                <span>HINT {i + 1}</span>
                <MathText text={hint} />
              </div>
            </li>
          ))}
        </ol>
      )}
      <div className="mission-summary">
        {unlocked.length} / {question.solutionBlocks.length} solution steps
        unlocked
      </div>
      <button
        className="primary full"
        onClick={() =>
          setFlow((f) => ({
            ...f,
            phase: "unlock",
            unlockIndex:
              question.solutionBlocks.findIndex(
                (_, i) => !unlocked.includes(i),
              ) < 0
                ? 0
                : question.solutionBlocks.findIndex(
                    (_, i) => !unlocked.includes(i),
                  ),
          }))
        }
      >
        {unlocked.length ? "Continue unlocking" : "Start the first checkpoint"}
        <ArrowRight size={17} />
      </button>
      <button className="text-button" onClick={() => togglePrerequisites(true)}>
        Explore my prerequisite gaps
      </button>
    </div>
  );
}
