import { ArrowRight, Target } from "lucide-react";
import { byName } from "../../../lib/course";
import { checklist } from "../../../lib/routes";
import { useAtlas } from "../../../app/AtlasContext";
import KnowledgeSwitch from "../../ui/KnowledgeSwitch";

export default function ConceptChecklist() {
  const { question, flow, checks, setChecks, beginRoute } = useAtlas();
  const terms = checklist(question);
  const gaps = terms.filter((name) => checks[name] !== "know").length;
  function setAll(value) {
    setChecks(Object.fromEntries(terms.map((name) => [name, value])));
  }
  return (
    <div className="checklist-screen">
      <div className="eyebrow">MAKE IT PERSONAL</div>
      <h2>Which ideas feel familiar?</h2>
      <p>
        Switch on the concepts you understand. Switch off anything you want to
        practise. Your route will fill those gaps.
      </p>
      <div className="switch-legend">
        <i /> On = understood <span>Off = needs practice</span>
      </div>
      {flow.results.length > 0 && (
        <div className="mini-score">
          <Target size={17} />
          {flow.results.filter(Boolean).length} / {question.steps.length} steps
          right. Switches start off until you confirm understanding.
        </div>
      )}
      <div className="checklist-tools">
        <button onClick={() => setAll("idk")}>Switch all off</button>
        <button onClick={() => setAll("know")}>Switch all on</button>
        <span>{gaps} gaps</span>
      </div>
      <div className="term-checklist">
        {terms.map((name) => (
          <div key={name}>
            <span>
              {name}
              <small>Depth {byName[name].depth}</small>
            </span>
            <KnowledgeSwitch
              name={name}
              checked={checks[name] === "know"}
              onChange={(on) =>
                setChecks((old) => ({ ...old, [name]: on ? "know" : "idk" }))
              }
            />
          </div>
        ))}
      </div>
      <div className="sticky-modal-action">
        <button className="primary full" onClick={beginRoute}>
          Build my shortest route
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
