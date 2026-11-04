import MathIcon from "./MathIcon";
import { CheckCircle2, CircleHelp } from "lucide-react";
export function Pill({ children, color = "green" }) {
  return <span className={`pill ${color}`}>{children}</span>;
}
export function Symbol({ concept, large = false }) {
  return (
    <MathIcon
      formula={concept.symbol}
      className={`concept-symbol ${large ? "large" : ""}`}
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
