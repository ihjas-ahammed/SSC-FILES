import katex from "katex";
import { CheckCircle2, CircleHelp } from "lucide-react";
export function Pill({ children, color = "green" }) {
  return <span className={`pill ${color}`}>{children}</span>;
}
export function Symbol({ concept, large = false }) {
  return (
    <span
      className={`concept-symbol ${large ? "large" : ""}`}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(concept.symbol, {
          throwOnError: false,
          strict: false,
          output: "html",
        }),
      }}
    />
  );
}
export function StatusIcon({ status }) {
  return status === "known" ? (
    <CheckCircle2 size={15} className="mint" />
  ) : status === "shaky" ? (
    <CircleHelp size={15} className="amber" />
  ) : (
    <span className="status-dot" />
  );
}
