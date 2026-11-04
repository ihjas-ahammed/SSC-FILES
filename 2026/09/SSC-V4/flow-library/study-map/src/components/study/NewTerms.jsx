import { BookOpen, Check, ArrowUpRight } from "lucide-react";
import { byName } from "../../lib/course.js";
import { newTerms } from "../../lib/glossary.js";
import { useAtlas } from "../../app/AtlasContext";
import MathText from "../ui/MathText";

/**
 * The unlocked answer grows with the learner: words they have not marked as
 * understood are defined right underneath the step that uses them. Marking a
 * word as known removes it, so the page gets shorter as they learn.
 */
export default function NewTerms({ text, title = "New words in this step" }) {
  const { statuses, showTerm, moveToTerm, updateStatus } = useAtlas();
  const names = newTerms(text, statuses);
  if (!names.length) return null;
  return (
    <section className="new-terms" aria-label={title}>
      <h5>
        <BookOpen size={14} /> {title} · {names.length}
      </h5>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <div>
              <b>{name}</b>
              <span>
                <MathText text={byName[name].meaning} />
              </span>
            </div>
            <div className="new-term-actions">
              <button onClick={() => showTerm(name)}>Full definition</button>
              <button
                onClick={() => moveToTerm(name)}
                aria-label={`Move to the concept ${name}`}
              >
                Move to concept <ArrowUpRight size={12} />
              </button>
              <button
                onClick={() => updateStatus(name, "known")}
                aria-label={`I already know ${name}`}
              >
                <Check size={12} /> I know this
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
