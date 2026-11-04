import { useState, useMemo, useEffect } from "react";
import { Target, EyeOff, Eye, ArrowRight, Check, X } from "lucide-react";
import { optionsFor } from "../../graph";
import MathText from "../ui/MathText";
import { useAtlas } from "../../app/AtlasContext";

export default function Objective({
  item,
  number = 1,
  total = 1,
  onResult,
  onNext,
  nextLabel = "Next step",
  retest = false,
  mode = "practice",
}) {
  const { recordAnswer } = useAtlas();
  const [revealed, setRevealed] = useState(false),
    [picked, setPicked] = useState(null);
  const opts = useMemo(() => optionsFor(item, retest ? 13 : 0), [item, retest]);
  useEffect(() => {
    setRevealed(false);
    setPicked(null);
  }, [item]);
  const answered = picked !== null,
    correct = answered && opts[picked].correct;
  function choose(index) {
    if (answered) return;
    setPicked(index);
    recordAnswer(item, opts[index].correct, retest);
    onResult?.(opts[index].correct);
  }
  return (
    <div className="objective">
      <div className="eyebrow">
        <Target size={14} /> {retest ? "RECALL CHECK" : "ACTIVE RECALL"}{" "}
        <span>
          STEP {number} OF {total}
        </span>
      </div>
      <div className="step-track">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={i < number ? "filled" : ""} />
        ))}
      </div>
      <h2>
        <MathText text={item.prompt} />
      </h2>
      {!revealed ? (
        <div className="think-card">
          <span className="think-icon">
            <EyeOff size={23} />
          </span>
          <h3>Give your brain a head start.</h3>
          <p>
            Think of your answer before looking at the options.
            <br />
            There’s no timer. Take your time.
          </p>
          <button className="primary" onClick={() => setRevealed(true)}>
            <Eye size={16} /> Reveal options <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="options">
          {opts.map((opt, i) => (
            <button
              key={i}
              disabled={answered}
              className={`option ${picked === i ? (correct ? "correct" : "incorrect") : ""}`}
              onClick={() => choose(i)}
            >
              <span className="option-letter">{"ABC"[i]}</span>
              <MathText text={opt.text} />
              {picked === i &&
                (correct ? <Check size={18} /> : <X size={18} />)}
            </button>
          ))}
          {answered && (
            <div
              className={`feedback ${correct ? "good" : "retry"}`}
              role="status"
            >
              <b>{correct ? "That’s right." : "A gap worth exploring."}</b>
              <p>
                <MathText text={item.explanation} />
              </p>
              {!correct && (
                <span>
                  {mode === "unlock"
                    ? "Use this hint and try again. This step stays locked until you answer correctly."
                    : "We’ll add the related concept to your reading route."}
                </span>
              )}
            </div>
          )}
          {answered && (
            <button className="primary full" onClick={onNext}>
              {nextLabel}
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
