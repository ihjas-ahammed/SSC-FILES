import { useState } from "react";
import { CircleHelp } from "lucide-react";
import MathText from "../ui/MathText";

/**
 * Every question a newcomer might have, asked up front. The answers stay folded
 * so the learner chooses which doubts are theirs; the counter shows how many
 * they have opened.
 */
export default function FaqList({
  items = [],
  title = "Questions you might be asking",
  onLink,
  startOpen = false,
}) {
  const [seen, setSeen] = useState(() => new Set(startOpen ? [0] : []));
  if (!items.length) return null;
  return (
    <section className="faq-list" aria-label={title}>
      <div className="faq-head">
        <CircleHelp size={15} />
        <h4>{title}</h4>
        <span>
          {seen.size} / {items.length} opened
        </span>
      </div>
      {items.map((item, index) => (
        <details
          key={item.q}
          open={startOpen && index === 0 ? true : undefined}
          onToggle={(event) => {
            if (event.currentTarget.open)
              setSeen((old) => new Set([...old, index]));
          }}
        >
          <summary>
            <MathText text={item.q} />
          </summary>
          <div className="faq-answer">
            <MathText text={item.a} onLink={onLink} />
          </div>
        </details>
      ))}
    </section>
  );
}
