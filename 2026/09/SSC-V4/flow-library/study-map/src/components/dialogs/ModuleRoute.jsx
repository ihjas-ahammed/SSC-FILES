import { ArrowUpRight, Download, CheckCircle2, Target } from "lucide-react";

import { questions } from "../../lib/course.js";
import { useAtlas } from "../../app/AtlasContext";

export default function ModuleRoute() {
  const { known, combinedRoute, openReader, downloadVault } = useAtlas();
  return (
    <div className="module-route-body">
      <div className="eyebrow">SECTION A → B → C</div>
      <h2>Your complete module route.</h2>
      <p>
        {combinedRoute.length} notes · ~
        {combinedRoute.reduce((s, c) => s + c.minutes, 0)} min · {known} known
        concepts skipped. Shared prerequisites appear once, before their
        dependents.
      </p>
      <ol className="route-list">
        {combinedRoute.map((c, i) => (
          <li key={c.id}>
            <button onClick={() => openReader(c.name)}>
              <span className="route-number">{i + 1}</span>
              <div>
                <b>{c.name}</b>
                <small>
                  {c.neededFor
                    ? `Needed for ${c.neededFor}`
                    : "Module foundation"}
                </small>
              </div>
              <span>{c.minutes} min</span>
              <ArrowUpRight size={14} />
            </button>
          </li>
        ))}
      </ol>
      {!combinedRoute.length && (
        <div className="mini-score">
          <CheckCircle2 size={17} />
          All concepts are marked known. Return to your exam questions.
        </div>
      )}
      <div className="route-final-stop">
        <Target size={15} />
        Then retry {questions[0].id} through {questions.at(-1).id}, one question
        at a time.
      </div>
      <button className="primary full" onClick={downloadVault}>
        Export this order with my vault
        <Download size={15} />
      </button>
    </div>
  );
}
