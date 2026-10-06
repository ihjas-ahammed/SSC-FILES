import { useState } from "react";
import {
  ArrowRight,
  Network,
  Search,
  CheckCircle2,
  Flag,
  BookOpen,
} from "lucide-react";
import { questions, meta, sections } from "../lib/course";
import { questionSummary } from "../lib/learning";
import { useAtlas } from "../app/AtlasContext";

export default function QuestionBank() {
  const {
    section,
    setSection,
    question,
    selectQuestion,
    completed,
    history,
    sessions,
    flow,
  } = useAtlas();
  const [query, setQuery] = useState("");
  const list = questions.filter(
    (q) =>
      q.section === section &&
      `${q.title} ${q.text}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="standalone-page question-bank-page">
      <div className="breadcrumb">
        {meta.qualification.toUpperCase()} / {meta.module.toUpperCase()}
      </div>
      <h1>
        Question bank<span>.</span>
      </h1>
      <p className="page-intro">
        {meta.description}. Choose a question and work through it one small step
        at a time.
      </p>
      <div className="question-bank-summary">
        <BookOpen size={16} />
        <span>
          {questions.length} questions · {sections.map((s) => s.label).join(", ")}
        </span>
        <span>{completed.length} completed</span>
      </div>
      <div className="bank-tabs">
        {sections.map((info) => {
          const s = info.id;
          const count = questions.filter((q) => q.section === s).length;
          const done = questions.filter(
            (q) => q.section === s && completed.includes(q.id),
          ).length;
          return (
            <button
              key={s}
              onClick={() => setSection(s)}
              className={section === s ? "active" : ""}
            >
              {info.label}
              <span>
                {done} / {count}
              </span>
            </button>
          );
        })}
      </div>
      <div className="bank-list-heading">
        <div>
          <h2>{sections.find((s) => s.id === section)?.title}</h2>
          <p>
            {sections.find((s) => s.id === section)?.description ||
              (section === "A"
                ? "Start here to build your foundations."
                : "Use guided steps to build the complete answer.")}
          </p>
        </div>
        <label className="search-box">
          <Search size={15} />
          <input
            aria-label="Search questions"
            placeholder="Search questions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="bank-grid">
        {list.map((q) => {
          const session =
            q.id === question.id && flow.phase !== "attempt"
              ? { flow }
              : sessions[q.id];
          const stats = questionSummary(q, history, completed, session);
          return (
            <article
              className={`bank-card ${stats.done ? "completed" : ""}`}
              key={q.id}
            >
              <button
                className="question-open"
                aria-label={`Study ${q.id}`}
                onClick={() => selectQuestion(q)}
              >
                <div className="question-card-top">
                  <span className="eyebrow">
                    QUESTION {q.section} · {String(q.number).padStart(2, "0")}
                  </span>
                  <span
                    className={`question-state ${stats.done ? "done" : stats.started ? "started" : ""}`}
                  >
                    {stats.done && <CheckCircle2 size={12} />}{" "}
                    {stats.done
                      ? "Completed"
                      : stats.started
                        ? "In progress"
                        : "Not started"}
                  </span>
                </div>
                <h3>{q.title}</h3>
                <p>
                  {q.text.length > 170 ? q.text.slice(0, 170) + "…" : q.text}
                </p>
                <div className="question-card-track">
                  <div className="progress-track">
                    <i
                      style={{
                        width: `${(stats.attempted / stats.total) * 100}%`,
                      }}
                    />
                  </div>
                  <span>
                    {stats.attempted} / {stats.total} steps
                    {stats.accuracy !== null
                      ? ` · ${stats.accuracy}% correct`
                      : ""}
                  </span>
                </div>
              </button>
              <footer>
                <span>
                  {q.steps.length} guided checks
                  {q.verify && <Flag size={12} className="amber" />}
                </span>
                <button onClick={() => selectQuestion(q, { open: false })}>
                  <Network size={13} />
                  Explore graph
                </button>
                <button
                  aria-label={`Open ${q.id}`}
                  onClick={() => selectQuestion(q)}
                >
                  <ArrowRight size={15} />
                </button>
              </footer>
            </article>
          );
        })}
      </div>
      {!list.length && (
        <div className="question-empty">
          <Search size={25} />
          <h3>No questions match that search.</h3>
          <button className="text-button" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
