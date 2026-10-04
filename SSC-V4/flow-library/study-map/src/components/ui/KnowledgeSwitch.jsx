import { Check } from "lucide-react";

export default function KnowledgeSwitch({ name, checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={`Understanding of ${name}`}
      title={checked ? "Understood" : "Needs practice"}
      className={`knowledge-switch ${checked ? "on" : ""}`}
      onClick={() => onChange(!checked)}
    >
      <span>{checked && <Check size={12} />}</span>
    </button>
  );
}
