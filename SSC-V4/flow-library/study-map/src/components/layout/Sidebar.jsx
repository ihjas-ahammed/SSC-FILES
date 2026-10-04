import { ArrowUpRight, Check, Flag } from "lucide-react";
import { questions, meta } from "../../graph";
import { useAtlas } from "../../app/AtlasContext";

export default function Sidebar() {
  const {
    completed,
    questionId,
    section,
    setSection,
    setModal,
    selectQuestion,
    sectionList,
  } = useAtlas();
  return (
    <>
      {meta.parentUrl && (
        <a
          className="study-parent-link sidebar-parent-link"
          href={meta.parentUrl}
        >
          ← Back to course
        </a>
      )}
      <div className="sidebar-label">
        YOUR COURSE <span>01</span>
      </div>
      <div className="course-card">
        <span className="course-icon">
          <span aria-hidden="true">{meta.emblem || "✦"}</span>
        </span>
        <div>
          <span className="eyebrow">{meta.qualification}</span>
          <h3>{meta.course}</h3>
          <p>{meta.subtitle}</p>
        </div>
      </div>
      <div className="module-progress">
        <div>
          <span>Module progress</span>
          <b>{Math.round((completed.length / questions.length) * 100)}%</b>
        </div>
        <div className="progress-track">
          <i
            style={{ width: `${(completed.length / questions.length) * 100}%` }}
          />
        </div>
        <p>
          {completed.length} of {questions.length} questions completed
        </p>
      </div>
      <div className="sidebar-label questions-label">
        QUESTION BANK <span>{questions.length}</span>
      </div>
      <div className="section-tabs">
        {["A", "B", "C"].map((s) => (
          <button
            className={section === s ? "active" : ""}
            onClick={() => setSection(s)}
            key={s}
          >
            Section {s}
            <span>{questions.filter((q) => q.section === s).length}</span>
          </button>
        ))}
      </div>
      <div className="section-description">
        {section === "A"
          ? "The building blocks"
          : section === "B"
            ? "Work through the reasoning"
            : "Bring it all together"}
        <span>
          {section === "A" ? "SHORT" : section === "B" ? "MEDIUM" : "LONG"}
        </span>
      </div>
      <div className="question-list">
        {sectionList.map((q) => (
          <button
            key={q.id}
            className={`question-item ${q.id === questionId ? "active" : ""}`}
            onClick={() => selectQuestion(q)}
          >
            <span className="question-number">
              {completed.includes(q.id) ? (
                <Check size={13} />
              ) : (
                String(q.number).padStart(2, "0")
              )}
            </span>
            <span>{q.title}</span>
            {q.id === questionId ? (
              <span className="active-indicator" />
            ) : q.verify ? (
              <Flag size={12} />
            ) : null}
          </button>
        ))}
      </div>
      <div className="sidebar-footer">
        <span className="file-badge">PDF</span>
        <div>
          <b>{meta.sourceName}</b>
          <span>
            {meta.sourcePages} pages · {questions.length} questions
          </span>
        </div>
        <button
          title="Open source PDF"
          aria-label="Open source PDF"
          onClick={() => setModal("source")}
        >
          <ArrowUpRight size={16} />
        </button>
      </div>
    </>
  );
}
