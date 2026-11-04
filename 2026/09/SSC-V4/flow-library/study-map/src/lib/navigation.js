import { initialFlow } from "./progressState.js";
export function navigationSnapshot(s) {
  return Object.fromEntries(
    [
      "nav",
      "modal",
      "mobileMenu",
      "reader",
      "readerTab",
      "questionId",
      "section",
      "selected",
      "scope",
      "filter",
      "flow",
      "plan",
      "mapScreen",
      "mapPanelOpen",
      "bookmarkIndex",
    ].map((key) => [key, s[key]]),
  );
}
export function navigationKey(s) {
  return JSON.stringify([
    s.nav,
    s.modal,
    s.mobileMenu,
    s.reader,
    s.readerTab,
    s.questionId,
    s.nav === "bank" && !s.modal ? s.section : null,
    s.nav === "atlas" ? [s.selected, s.mapScreen, s.mapPanelOpen] : null,
    s.nav === "bookmarks" ? s.bookmarkIndex : null,
    s.modal === "study"
      ? [
          s.flow.phase,
          s.flow.step,
          s.flow.readIndex,
          s.flow.retestIndex,
          s.flow.unlockIndex,
        ]
      : null,
  ]);
}
export function restoredNavigation(point, current) {
  // Re-entering a question starts a new attempt. Back within an open question
  // returns to the previous screen without changing learned knowledge.
  return point.modal === "study" &&
    (point.questionId !== current.questionId ||
      (!current.modal && !current.reader))
    ? {
        ...point,
        flow: initialFlow(point.questionId),
        plan: [],
        checks: {},
        readerTab: "note",
      }
    : point;
}
