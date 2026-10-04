import KnowledgeSwitch from "../ui/KnowledgeSwitch";
import { useEffect, useRef } from "react";
import { useAtlas } from "../../app/AtlasContext";
import Attempt from "./phases/Attempt";
import GuidedSteps from "./phases/GuidedSteps";
import ConceptChecklist from "./phases/ConceptChecklist";
import ReadingRoute from "./phases/ReadingRoute";
import Retest from "./phases/Retest";
import Ready from "./phases/Ready";
import Answer from "./phases/Answer";
import SolutionHints from "./phases/SolutionHints";
import SolutionUnlock from "./phases/SolutionUnlock";
const phases = {
  attempt: Attempt,
  steps: GuidedSteps,
  checklist: ConceptChecklist,
  route: ReadingRoute,
  review: ReadingRoute,
  retest: Retest,
  ready: Ready,
  answer: Answer,
  hints: SolutionHints,
  unlock: SolutionUnlock,
};
export default function StudySession() {
  const { flow, preferences, togglePrerequisites, editPrerequisites } =
    useAtlas();
  const body = useRef(null);
  useEffect(() => {
    if (body.current) body.current.scrollTop = 0;
  }, [flow.phase, flow.retestIndex, flow.unlockIndex]);
  const Phase = phases[flow.phase] || Attempt;
  return (
    <div className="study-body" ref={body}>
      <div className="study-prerequisite-controls">
        <label>
          Study prerequisites{" "}
          <KnowledgeSwitch
            name="prerequisite study"
            checked={preferences.prerequisites !== false}
            onChange={togglePrerequisites}
          />
        </label>
        {preferences.prerequisites !== false && (
          <button className="text-button" onClick={editPrerequisites}>
            Edit prerequisite switches
          </button>
        )}
      </div>
      <Phase />
    </div>
  );
}
