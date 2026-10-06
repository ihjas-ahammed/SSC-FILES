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
import TryMyself from "./phases/TryMyself";
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
  retry: TryMyself,
};
export default function StudySession() {
  const { flow } = useAtlas();
  const body = useRef(null);
  useEffect(() => {
    if (body.current) body.current.scrollTop = 0;
  }, [flow.phase, flow.retestIndex, flow.unlockIndex]);
  const Phase = phases[flow.phase] || Attempt;
  return (
    <div className="study-body" ref={body}>
      <Phase />
    </div>
  );
}
