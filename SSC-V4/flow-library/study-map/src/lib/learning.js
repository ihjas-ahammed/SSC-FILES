import { concepts, questions, byName } from "./course.js";

/** Answer history is evidence of recall; checklist switches are self-reports. */
export function learningSummary(
  history = [],
  sessions = {},
  completed = [],
  statuses = {},
) {
  const answers = history.filter((e) =>
    ["step", "concept", "retest"].includes(e.kind),
  );
  const correct = answers.filter((e) => e.correct).length;
  const tested = new Set(
    answers
      .filter((e) => e.correct && e.term && e.kind !== "step")
      .map((e) => e.term),
  );
  const sections = ["A", "B", "C"].map((section) => {
    const list = questions.filter((q) => q.section === section);
    return {
      section,
      done: list.filter((q) => completed.includes(q.id)).length,
      total: list.length,
    };
  });
  return {
    answers: answers.length,
    correct,
    accuracy: answers.length
      ? Math.round((correct / answers.length) * 100)
      : null,
    tested: tested.size,
    sections,
    weak: concepts.filter((c) => statuses[c.name] === "shaky"),
    studiedQuestions: new Set(
      history.filter((e) => e.questionId).map((e) => e.questionId),
    ).size,
    recent: [...history].reverse().slice(0, 8),
    days: new Set(history.map((e) => new Date(e.time).toLocaleDateString()))
      .size,
  };
}

export function questionSummary(question, history, completed, session) {
  const steps = history.filter(
    (e) => e.kind === "step" && e.questionId === question.id,
  );
  const last = new Map(steps.map((e) => [e.step, e]));
  const right = [...last.values()].filter((e) => e.correct).length;
  const started =
    Boolean(session?.flow && session.flow.phase !== "attempt") ||
    steps.length > 0;
  return {
    done: completed.includes(question.id),
    started,
    attempted: last.size,
    right,
    total: question.steps.length,
    accuracy: last.size ? Math.round((right / last.size) * 100) : null,
  };
}

export function safeHistory(input) {
  return Array.isArray(input)
    ? input
        .filter(
          (e) =>
            e &&
            Number.isFinite(e.time) &&
            ["step", "concept", "retest"].includes(e.kind) &&
            typeof e.correct === "boolean" &&
            (!e.questionId || questions.some((q) => q.id === e.questionId)) &&
            (e.kind === "step"
              ? questions.some(
                  (q) =>
                    q.id === e.questionId &&
                    Number.isInteger(e.step) &&
                    e.step >= 0 &&
                    e.step < q.steps.length,
                )
              : Boolean(byName[e.term])),
        )
        .slice(-1000)
    : [];
}
