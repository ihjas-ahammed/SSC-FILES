import React from "react";
import katex from "katex";
import { symbolNote } from "../../lib/notation";
function MathText({ text = "", onLink, className = "" }) {
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$|\[\[[^\]]+\]\])/g);
  return (
    <span className={`math-text ${className}`}>
      {parts.map((part, i) => {
        if (part.startsWith("$")) {
          const display = part.startsWith("$$");
          const formula = part.slice(display ? 2 : 1, display ? -2 : -1);
          return (
            <span
              key={i}
              title={onLink ? "Click a symbol to explore its note" : undefined}
              onClick={
                onLink
                  ? (e) => {
                      const name = symbolNote[e.target.textContent.trim()];
                      if (name) onLink(name);
                    }
                  : undefined
              }
              className={display ? "math-display" : "math-inline"}
              dangerouslySetInnerHTML={{
                __html: katex.renderToString(formula, {
                  displayMode: display,
                  throwOnError: false,
                  strict: false,
                  output: "html",
                }),
              }}
            />
          );
        }
        if (part.startsWith("[[")) {
          const [name, label] = part.slice(2, -2).split("|");
          return (
            <button
              key={i}
              className="wiki-link"
              onClick={() => onLink?.(name)}
            >
              {label || name}
            </button>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </span>
  );
}

export default React.memo(MathText);
