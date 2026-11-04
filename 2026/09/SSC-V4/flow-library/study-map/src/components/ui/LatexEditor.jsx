import { useRef, useState } from "react";
import katex from "katex";
import { FlaskConical } from "lucide-react";
import MathSketch from "./MathSketch";

const SNIPPETS = [
  ["\\frac{a}{b}", "\\frac{▢}{▢}", "Fraction"],
  ["\\binom{n}{k}", "\\binom{▢}{▢}", "Binomial coefficient"],
  ["\\sum", "\\sum_{i=0}^{▢}", "Sum"],
  ["x^{2}", "^{▢}", "Power"],
  ["x_{i}", "_{▢}", "Subscript"],
  ["n!", "!", "Factorial"],
  ["\\cdot", "\\cdot ", "Dot"],
  ["\\ldots", "\\ldots ", "Dots"],
  ["\\le", "\\le ", "Less or equal"],
  ["=", " = ", "Equals"],
];

function preview(source) {
  if (!source.trim()) return { html: "", error: "" };
  try {
    return {
      html: katex.renderToString(source, { displayMode: true, throwOnError: true, strict: false }),
      error: "",
    };
  } catch (e) {
    return { html: "", error: String(e.message).replace(/^KaTeX parse error: /, "") };
  }
}

/** A plain LaTeX box with a live preview, quick snippets, and the optional drawing pad. */
export default function LatexEditor({ value, onChange }) {
  const box = useRef(null);
  const [draw, setDraw] = useState(false);
  const shown = preview(value);

  function insert(text) {
    const el = box.current;
    const start = el ? el.selectionStart : value.length,
      end = el ? el.selectionEnd : value.length;
    const spot = text.indexOf("▢");
    const clean = text.replaceAll("▢", "");
    const next = value.slice(0, start) + clean + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      if (!el) return;
      el.focus();
      const caret = start + (spot >= 0 ? spot : clean.length);
      el.setSelectionRange(caret, caret);
    });
  }

  return (
    <div className="latex-editor">
      <div className="latex-toolbar" role="toolbar" aria-label="LaTeX shortcuts">
        {SNIPPETS.map(([label, code, name]) => (
          <button
            key={name}
            type="button"
            title={name}
            aria-label={`Insert ${name}`}
            onClick={() => insert(code)}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString(label, { throwOnError: false, strict: false }),
              }}
            />
          </button>
        ))}
        <button
          type="button"
          className={`experimental-toggle ${draw ? "on" : ""}`}
          aria-pressed={draw}
          onClick={() => setDraw((v) => !v)}
        >
          <FlaskConical size={13} /> Draw math · experimental
        </button>
      </div>
      <textarea
        ref={box}
        className="latex-input"
        aria-label="LaTeX"
        rows={3}
        spellCheck={false}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={"Write maths here, e.g.  \\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}"}
      />
      <div className="latex-preview" aria-live="polite">
        {shown.error ? (
          <span className="latex-error">{shown.error}</span>
        ) : shown.html ? (
          <span dangerouslySetInnerHTML={{ __html: shown.html }} />
        ) : (
          <span className="latex-empty">Your formula appears here as you type.</span>
        )}
      </div>
      {draw && (
        <MathSketch
          onInsert={(latex) => insert(`${value && !value.endsWith("\n") ? "\n" : ""}${latex}`)}
        />
      )}
    </div>
  );
}
