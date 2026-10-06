import { normalizeBookmarks } from "./bookmarks.js";
import { byName, questions } from "./course.js";
import { safeHistory } from "./learning.js";

const phases = new Set([
  "attempt",
  "steps",
  "checklist",
  "route",
  "review",
  "retest",
  "ready",
  "answer",
  "hints",
  "unlock",
  "retry",
]);
const statuses = new Set(["unknown", "known", "shaky"]);
const hasQuestion = (id) => questions.some((q) => q.id === id);
const names = (input) =>
  Array.isArray(input) ? [...new Set(input.filter((n) => byName[n]))] : [];
const checks = (input) =>
  Object.fromEntries(
    Object.entries(input || {}).filter(
      ([n, v]) => byName[n] && ["know", "idk"].includes(v),
    ),
  );
const flags = (input) =>
  Array.isArray(input) ? input.slice(0, 200).map(Boolean) : [];
const text = (value, max = 50000) =>
  typeof value === "string" ? value.slice(0, max) : "";
/** Written retry: own words, LaTeX, and which recall keywords have been unlocked. */
const retryOf = (input, q) => {
  const count = Array.isArray(q.keywords) ? q.keywords.length : 0;
  return {
    text: text(input?.text),
    latex: text(input?.latex),
    unlocked: Array.isArray(input?.unlocked)
      ? [
          ...new Set(
            input.unlocked.filter(
              (i) => Number.isInteger(i) && i >= 0 && i < count,
            ),
          ),
        ]
      : [],
    revealed: input?.revealed === true,
  };
};
/** Warm-up record: whether the first, unseen question was answered correctly. */
const pretests = (input) =>
  Object.fromEntries(
    Object.entries(input || {}).filter(
      ([n, v]) => byName[n] && ["right", "wrong", "skipped"].includes(v),
    ),
  );
const clamp = (value, max) =>
  Math.max(0, Math.min(Math.floor(Number(value) || 0), Math.max(0, max)));

export function initialFlow(questionId) {
  return {
    questionId,
    phase: "attempt",
    attempt: "",
    step: 0,
    results: [],
    idk: [],
    readIndex: 0,
    retestIndex: 0,
    retestResults: [],
    unlocked: [],
    unlockIndex: 0,
    retry: { text: "", latex: "", unlocked: [], revealed: false },
  };
}

function session(questionId, input = {}) {
  const q = questions.find((q) => q.id === questionId),
    f = input.flow || initialFlow(questionId);
  const plan = names(input.plan),
    idk = names(f.idk);
  let phase = phases.has(f.phase) ? f.phase : "attempt";
  if (["route", "review"].includes(phase) && !plan.length)
    phase = idk.length ? "retest" : "ready";
  if (phase === "retest" && !idk.length) phase = "ready";
  return {
    plan,
    checks: checks(input.checks),
    flow: {
      questionId,
      phase,
      attempt: typeof f.attempt === "string" ? f.attempt.slice(0, 50000) : "",
      step: clamp(f.step, q.steps.length - 1),
      results: flags(f.results),
      idk,
      readIndex: clamp(f.readIndex, plan.length - 1),
      retestIndex: clamp(f.retestIndex, idk.length - 1),
      retestResults: flags(f.retestResults),
      unlocked: Array.isArray(f.unlocked)
        ? [
            ...new Set(
              f.unlocked.filter(
                (i) =>
                  Number.isInteger(i) && i >= 0 && i < q.solutionBlocks.length,
              ),
            ),
          ]
        : [],
      unlockIndex: clamp(f.unlockIndex, q.solutionBlocks.length - 1),
      examDraft:
        typeof f.examDraft === "string" ? f.examDraft.slice(0, 50000) : "",
      retry: retryOf(f.retry, q),
    },
  };
}

/** Migrate v1 backups and reject unknown concept names and invalid session indexes. */
export function normalizeProgress(input = {}) {
  const questionId = hasQuestion(input.questionId)
    ? input.questionId
    : questions[0].id;
  const current = session(questionId, input);
  return {
    ...current,
    questionId,
    statuses: Object.fromEntries(
      Object.entries(input.statuses || {}).filter(
        ([n, s]) => byName[n] && statuses.has(s),
      ),
    ),
    completed: Array.isArray(input.completed)
      ? [...new Set(input.completed.filter((id) => hasQuestion(id)))]
      : [],
    read: names(input.read),
    pretest: pretests(input.pretest),
    mastered: Array.isArray(input.mastered)
      ? [...new Set(input.mastered.filter((id) => hasQuestion(id)))]
      : [],
    history: safeHistory(input.history),
    bookmarks: normalizeBookmarks(input.bookmarks),
    sessions: Object.fromEntries(
      Object.entries(input.sessions || {})
        .filter(([id]) => hasQuestion(id))
        .map(([id, s]) => [id, session(id, s)]),
    ),
    updatedAt: Number(input.updatedAt) || 0,
    preferences: {
      theme: input.preferences?.theme === "light" ? "light" : "dark",
      animations: input.preferences?.animations !== false,
      prerequisites: input.preferences?.prerequisites !== false,
      ...(Number.isFinite(input.preferences?.notePanelWidth)
        ? {
            notePanelWidth: Math.max(
              300,
              Math.min(1200, input.preferences.notePanelWidth),
            ),
          }
        : {}),
    },
  };
}
