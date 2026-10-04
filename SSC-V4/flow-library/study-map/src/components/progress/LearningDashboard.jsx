import {
  CheckCircle2,
  CircleHelp,
  Target,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";
import { questions } from "../../lib/course";

export default function LearningDashboard() {
  const { metrics, openReader, selectQuestion } = useAtlas();
  return (
    <div className="learning-dashboard">
      <div className="learning-stats">
        <div>
          <Target size={18} />
          <span>Recall accuracy</span>
          <b>{metrics.accuracy === null ? "—" : `${metrics.accuracy}%`}</b>
          <small>
            {metrics.correct} correct out of {metrics.answers} objective
            attempts
          </small>
        </div>
        <div>
          <CheckCircle2 size={18} />
          <span>Concepts tested successfully</span>
          <b>{metrics.tested}</b>
          <small>
            Passed an actual recall check; separate from self-reported
            understanding.
          </small>
        </div>
        <div>
          <Clock size={18} />
          <span>Active study days</span>
          <b>{metrics.days}</b>
          <small>Days with recorded self-checks</small>
        </div>
      </div>
      <div className="section-progress">
        {metrics.sections.map((s) => (
          <div key={s.section}>
            <span>
              Section {s.section}
              <b>
                {s.done} / {s.total}
              </b>
            </span>
            <div className="progress-track">
              <i style={{ width: `${(s.done / s.total) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="learning-details">
        <section>
          <h3>
            <CircleHelp size={16} />
            Needs another look <span>{metrics.weak.length}</span>
          </h3>
          {metrics.weak.length ? (
            metrics.weak.slice(0, 8).map((c) => (
              <button key={c.id} onClick={() => openReader(c.name)}>
                {c.name}
                <ArrowRight size={13} />
              </button>
            ))
          ) : (
            <p>
              Missed concept checks will appear here. Read the note, then try
              again.
            </p>
          )}
        </section>
        <section>
          <h3>
            <Clock size={16} />
            Recent practice
          </h3>
          {metrics.recent.length ? (
            metrics.recent.map((e, i) => (
              <div className="activity-row" key={`${e.time}-${i}`}>
                {e.correct ? (
                  <CheckCircle2 size={14} className="mint" />
                ) : (
                  <CircleHelp size={14} className="amber" />
                )}
                <div>
                  <button
                    onClick={() =>
                      e.questionId
                        ? selectQuestion(
                            questions.find((q) => q.id === e.questionId),
                          )
                        : openReader(e.term)
                    }
                  >
                    {e.questionId || e.term}
                  </button>
                  <small>
                    {e.kind === "step"
                      ? `Step ${e.step + 1}`
                      : e.kind === "retest"
                        ? "Gap retest"
                        : "Concept check"}{" "}
                    · {e.correct ? "Correct" : "Needs practice"}
                  </small>
                </div>
                <time>
                  {new Date(e.time).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
            ))
          ) : (
            <p>
              Your practice history will appear after your first self-check.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
