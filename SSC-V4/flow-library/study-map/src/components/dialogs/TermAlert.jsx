import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { byName } from "../../lib/course.js";
import { useAtlas } from "../../app/AtlasContext";
import MathText from "../ui/MathText";
import { Symbol } from "../ui/Primitives";

/**
 * A word the learner met inside a solution. It explains itself in place, so the
 * solution stays on screen; "Move to concept" is the only thing that navigates.
 */
export default function TermAlert() {
  const {
    termAlert,
    hideTerm,
    backTerm,
    showTerm,
    moveToTerm,
    statuses,
    updateStatus,
  } = useAtlas();
  const name = termAlert[termAlert.length - 1];
  const concept = name && byName[name];
  const box = useRef(null);
  useEffect(() => {
    if (!concept) return;
    const opener = document.activeElement;
    box.current?.focus({ preventScroll: true });
    // Escape closes only this alert, not the study session behind it.
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      hideTerm();
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [Boolean(concept)]);
  useEffect(() => {
    if (concept) box.current?.scrollTo?.({ top: 0 });
  }, [name]);
  if (!concept) return null;
  const known = statuses[name] === "known";
  return (
    <aside
      className="term-alert"
      role="alertdialog"
      aria-labelledby="term-alert-title"
      aria-describedby="term-alert-body"
      tabIndex={-1}
      ref={box}
      onClick={(event) => event.stopPropagation()}
    >
      <header>
        <Symbol concept={concept} />
        <div>
          <span className="eyebrow">
            {known ? "A WORD YOU KNOW" : "NEW WORD IN THIS SOLUTION"}
          </span>
          <h3 id="term-alert-title">{concept.name}</h3>
        </div>
        {termAlert.length > 1 && (
          <button
            className="icon-btn"
            aria-label="Back to the previous word"
            onClick={backTerm}
          >
            <ArrowLeft size={16} />
          </button>
        )}
        <button
          className="icon-btn"
          aria-label="Close definition"
          onClick={hideTerm}
        >
          <X size={16} />
        </button>
      </header>
      <div id="term-alert-body" className="term-alert-body">
        <p className="term-alert-idea">
          <MathText text={concept.meaning} />
        </p>
        <p>
          <MathText
            text={concept.linkedFormal || concept.formal}
            onLink={showTerm}
          />
        </p>
        {concept.example && (
          <p className="term-alert-example">
            <b>Example · </b>
            <MathText text={concept.example} onLink={showTerm} />
          </p>
        )}
      </div>
      <footer>
        <button className="primary" onClick={() => moveToTerm(name)}>
          Move to concept
          <ArrowRight size={15} />
        </button>
        <button
          className="secondary"
          aria-pressed={known}
          onClick={() => updateStatus(name, known ? "unknown" : "known")}
        >
          <Check size={14} />
          {known ? "Marked as known" : "I already know this"}
        </button>
      </footer>
    </aside>
  );
}
