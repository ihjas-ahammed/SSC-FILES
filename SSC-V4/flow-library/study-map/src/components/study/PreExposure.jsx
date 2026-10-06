import { useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { optionsFor } from "../../lib/questions.js";
import { useAtlas } from "../../app/AtlasContext";
import MathText from "../ui/MathText";
import { Symbol } from "../ui/Primitives";

/**
 * Pre-exposure: one question about an idea the learner has not met yet. Getting
 * it wrong is expected and useful; the reading that follows answers it.
 */
export default function PreExposure({ concept }) {
  const { recordPretest } = useAtlas();
  const item = concept.pretest || concept.check;
  const options = useMemo(() => optionsFor(item, 29), [item]);
  const [picked, setPicked] = useState(null);
  const answered = picked !== null;
  const right = answered && options[picked].correct;
  const finish = (value) => recordPretest(concept.name, value);
  return (
    <div className="pre-exposure">
      <div className="note-heading">
        <Symbol concept={concept} large />
        <div>
          <span className="eyebrow">WARM-UP · BEFORE YOU READ</span>
          <h2>{concept.name}</h2>
        </div>
      </div>
      <p className="pre-exposure-lead">
        <Sparkles size={14} /> One question about an idea you have not read yet.
        Guessing wrong is normal here, and it makes the explanation stick
        better.
      </p>
      <h3 className="pre-exposure-question">
        <MathText text={item.prompt} />
      </h3>
      <div className="options" role="group" aria-label="Warm-up answers">
        {options.map((option, index) => (
          <button
            key={index}
            disabled={answered}
            className={`option ${picked === index ? (option.correct ? "correct" : "incorrect") : ""} ${answered && option.correct ? "reveal" : ""}`}
            onClick={() => setPicked(index)}
          >
            <span className="option-letter">{"ABCD"[index]}</span>
            <MathText text={option.text} />
          </button>
        ))}
      </div>
      {answered && (
        <div
          className={`feedback ${right ? "good" : "retry"}`}
          role="status"
        >
          <b>
            {right
              ? "Good instinct."
              : "That is the common first guess, and now you will notice why."}
          </b>
          <p>
            <MathText text={item.explanation} />
          </p>
        </div>
      )}
      <div className="pre-exposure-actions">
        {answered ? (
          <button
            className="primary full"
            onClick={() => finish(right ? "right" : "wrong")}
          >
            Read the note
            <ArrowRight size={16} />
          </button>
        ) : (
          <button className="text-button" onClick={() => finish("skipped")}>
            Skip the warm-up
          </button>
        )}
      </div>
    </div>
  );
}
