import { useMemo } from "react";
import { byName } from "../lib/course.js";
import { learningSummary } from "../lib/learning.js";

export default function useLearningHistory(state) {
  const { history, setHistory, question, flow, sessions, completed, statuses } =
    state;
  const metrics = useMemo(
    () => learningSummary(history, sessions, completed, statuses),
    [history, sessions, completed, statuses],
  );
  function recordAnswer(item, correct, retest = false) {
    const step = question.steps.findIndex((s) => s.prompt === item.prompt);
    const term =
      item.term ||
      Object.values(byName).find((c) => c.check.prompt === item.prompt)?.name;
    const kind = retest
      ? "retest"
      : step >= 0 && ["steps", "unlock"].includes(flow.phase)
        ? "step"
        : "concept";
    const event = {
      time: Date.now(),
      kind,
      term,
      correct,
      step,
      questionId: kind === "step" ? question.id : null,
    };
    setHistory((old) => [...old, event].slice(-1000));
  }
  return { metrics, recordAnswer };
}
