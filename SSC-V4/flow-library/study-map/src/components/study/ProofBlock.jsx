import { useState } from "react";
import { Lock, LockOpen, Lightbulb } from "lucide-react";
import MathText from "../ui/MathText";

/**
 * A complete, checked proof written in plain steps, followed by a small worked
 * example. For a textbook exercise the proof stays folded away until the
 * learner has finished the exercise, or chooses to look anyway.
 */
export default function ProofBlock({ proof, locked = false, onLink }) {
  const [peek, setPeek] = useState(false);
  if (!proof) return null;
  if (locked && !peek)
    return (
      <section className="proof-block locked" aria-label="Full proof">
        <Lock size={18} />
        <div>
          <b>The full proof is waiting.</b>
          <p>
            It opens when you finish this exercise, so that you get to try it
            first.
          </p>
        </div>
        <button className="secondary" onClick={() => setPeek(true)}>
          <LockOpen size={14} /> Show it anyway
        </button>
      </section>
    );
  return (
    <section className="proof-block" aria-label="Full proof">
      {proof.idea && (
        <div className="proof-idea">
          <Lightbulb size={16} />
          <div>
            <span className="eyebrow">THE IDEA IN ONE LINE</span>
            <p>
              <MathText text={proof.idea} onLink={onLink} />
            </p>
          </div>
        </div>
      )}
      <ol className="proof-steps">
        {proof.steps.map((step, index) => (
          <li key={index}>
            <b>
              <MathText text={step.title} />
            </b>
            <MathText text={step.text} onLink={onLink} />
          </li>
        ))}
      </ol>
      {proof.conclusion && (
        <p className="proof-conclusion">
          <MathText text={proof.conclusion} onLink={onLink} />
        </p>
      )}
      {proof.example && (
        <div className="proof-example">
          <span className="eyebrow">
            {(proof.example.title || "TRY IT WITH SMALL NUMBERS").toUpperCase()}
          </span>
          <MathText text={proof.example.text} onLink={onLink} />
        </div>
      )}
    </section>
  );
}
