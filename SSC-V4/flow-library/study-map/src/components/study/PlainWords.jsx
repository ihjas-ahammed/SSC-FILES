import { MessageCircleQuestion } from "lucide-react";
import MathText from "../ui/MathText";

/**
 * The exercise as printed is often written for examiners. When a course supplies
 * `question.plain`, it is shown right underneath in everyday words, so a beginner
 * can tell what is actually being asked. Courses without it show nothing.
 */
export default function PlainWords({ text, onLink }) {
  if (!text) return null;
  return (
    <aside className="plain-words" aria-label="The question in simple words">
      <MessageCircleQuestion size={16} />
      <div>
        <span className="eyebrow">IN SIMPLE WORDS</span>
        <p>
          <MathText text={text} onLink={onLink} />
        </p>
      </div>
    </aside>
  );
}
