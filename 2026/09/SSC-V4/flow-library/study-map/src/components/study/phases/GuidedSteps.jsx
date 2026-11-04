import Objective from "../Objective";
import { useAtlas } from "../../../app/AtlasContext";

export default function GuidedSteps() {
  const { question, flow, setFlow, makeChecklist } = useAtlas();
  return (
    <Objective
      key={`exam-${flow.step}`}
      item={question.steps[flow.step]}
      number={flow.step + 1}
      total={question.steps.length}
      onResult={(ok) =>
        setFlow((f) => ({ ...f, results: [...f.results.slice(0, f.step), ok] }))
      }
      onNext={() => {
        if (flow.step + 1 === question.steps.length) makeChecklist();
        else setFlow((f) => ({ ...f, step: f.step + 1 }));
      }}
      nextLabel={
        flow.step + 1 === question.steps.length
          ? "Find my concept gaps"
          : "Next step"
      }
    />
  );
}
