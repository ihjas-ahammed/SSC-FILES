import { useState } from "react";
import { LockKeyhole, CheckCircle2, ArrowRight, RotateCcw } from "lucide-react";
import { useAtlas } from "../../../app/AtlasContext";
import MathText from "../../ui/MathText";
import Objective from "../Objective";
import SymbolKey from "../SymbolKey";
import NewTerms from "../NewTerms";
export default function SolutionUnlock() {
  const { question, flow, setFlow, showTerm, setCompleted } = useAtlas();
  const [retry, setRetry] = useState(0);
  const unlocked = flow.unlocked || [],
    index = flow.unlockIndex || 0;
  const block = question.solutionBlocks[index],
    passed = unlocked.includes(index);
  const total = question.solutionBlocks.length,
    all = unlocked.length === total;
  function next() {
    if (all) {
      setFlow((f) => ({ ...f, phase: "answer" }));
      setCompleted((old) => [...new Set([...old, question.id])]);
    } else {
      const nextIndex = question.solutionBlocks.findIndex(
        (_, i) => !unlocked.includes(i),
      );
      setFlow((f) => ({ ...f, unlockIndex: nextIndex }));
      setRetry(0);
    }
  }
  return (
    <div className="solution-unlock">
      <div className="eyebrow">{question.id} · BUILD YOUR FORMAL ANSWER</div>
      <h2>{question.title}</h2>
      {question.verify && (
        <div className="source-qualification">
          <MathText text={question.verify} />
        </div>
      )}
      <div className="unlock-progress">
        <span>
          {unlocked.length} / {total} steps unlocked
        </span>
        <div
          role="progressbar"
          aria-label="Solution unlocked"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={unlocked.length}
          className="progress-track"
        >
          <i style={{ width: `${(unlocked.length / total) * 100}%` }} />
        </div>
      </div>
      <div className="unlocked-solution">
        {question.solutionBlocks.map((b, i) =>
          unlocked.includes(i) ? (
            <details className="unlocked-line" key={i} open={index === i}>
              <summary>
                <CheckCircle2 size={17} />
                <MathText text={b.title} /> · unlocked
              </summary>
              <MathText text={b.text} onLink={showTerm} />
              <SymbolKey names={b.symbols} />
              <NewTerms text={b.text} />
            </details>
          ) : (
            <div
              className={`locked-line ${index === i ? "current" : ""}`}
              key={i}
            >
              <LockKeyhole size={16} />
              <span>
                <MathText text={b.title} />
              </span>
              <small>{index === i ? "CURRENT CHECKPOINT" : "LOCKED"}</small>
            </div>
          ),
        )}
      </div>
      {passed ? (
        <div className="checkpoint-passed">
          <p>This part is unlocked and saved.</p>
          <button className="primary full" onClick={next}>
            {all
              ? "View the complete formal solution"
              : "Next solution checkpoint"}
            <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <>
          <Objective
            key={`${index}-${retry}`}
            item={question.steps[block.checkIndex]}
            number={index + 1}
            total={total}
            mode="unlock"
            onResult={(ok) => {
              if (ok)
                setFlow((f) => ({
                  ...f,
                  unlocked: [...new Set([...(f.unlocked || []), index])],
                }));
            }}
            onNext={() => setRetry((r) => r + 1)}
            nextLabel="Try this checkpoint again"
          />
          <button
            className="text-button"
            onClick={() => setFlow((f) => ({ ...f, phase: "hints" }))}
          >
            Revisit the hints
          </button>
        </>
      )}
    </div>
  );
}
