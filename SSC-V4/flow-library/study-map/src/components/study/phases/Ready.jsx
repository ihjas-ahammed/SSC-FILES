import { Check, Eye } from "lucide-react";

import { useAtlas } from "../../../app/AtlasContext";

export default function Ready() {
  const { flow, makeChecklist, revealAnswer } = useAtlas();
  return (
    <div className="ready-screen">
      <div className="ready-orb">
        <Check size={37} />
      </div>
      <span className="eyebrow">FOUNDATIONS IN PLACE</span>
      <h2>You’ve made the connections.</h2>
      <p>
        {flow.idk.length
          ? "Your gap concepts passed their recall checks."
          : "You marked every checklist concept as known."}{" "}
        Build the formal answer one checkpoint at a time.
      </p>
      <button className="primary" onClick={revealAnswer}>
        I’m ready · unlock the solution
        <Eye size={16} />
      </button>
      <button className="text-button" onClick={() => makeChecklist()}>
        Revisit my concept checklist
      </button>
    </div>
  );
}
