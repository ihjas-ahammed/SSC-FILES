import { archiveSession } from "../lib/sessionArchive.js";
import { initialFlow } from "../lib/progressState.js";
import { useRef } from "react";
import {
  naturalPause,
  waitForMapArrival,
  settleOnNote,
} from "../lib/noteJourney";
import { scrollBeforeNavigate } from "../lib/scrollBeforeNavigate";
import { questions, readingRoute, checklist, byName } from "../graph";
export default function useStudyActions(state) {
  const advancing = useRef(false),
    current = useRef(state);
  current.current = state;
  const {
    questionId,
    setQuestionId,
    setSelected,
    setSection,
    setScope,
    setFilter,
    setModal,
    setReader,
    setMobileMenu,
    setNav,
    setPlan,
    setChecks,
    setFlow,
    question,
    setStatuses,
    setReaderTab,
    setReaderResult,
    flow,
    checks,
    statuses,
    plan,
    setRead,
    setCompleted,
    setToast,
    reader,
    setSessions,
    setTermAlert,
    setPretest,
    setMastered,
  } = state;
  function selectQuestion(q, { open = true } = {}) {
    if (flow.phase !== "attempt" || flow.attempt)
      setSessions((old) => ({
        ...old,
        [questionId]: archiveSession(old[questionId], flow, plan, checks),
      }));
    setTermAlert([]);
    setQuestionId(q.id);
    setSelected(q.terms[0]);
    setSection(q.section);
    setScope("question");
    setFilter("all");
    setReaderTab("note");
    setReaderResult(null);
    setModal(open ? "study" : null);
    setReader(null);
    setMobileMenu(false);
    setNav(open ? "bank" : "atlas");
    setPlan([]);
    setChecks({});
    // A new attempt starts clean, but the learner's written retry is their own work: keep it.
    const prior = q.id === questionId ? flow : state.sessions?.[q.id]?.flow;
    const fresh = initialFlow(q.id);
    setFlow({ ...fresh, retry: prior?.retry || fresh.retry });
  }
  function nextQuestion() {
    const next = questions[questions.findIndex((q) => q.id === questionId) + 1];
    if (next) selectQuestion(next);
    else {
      setModal(null);
      setNav("progress");
      setToast("You reached the final question. Review your remaining gaps.");
    }
  }
  function updateStatus(name, status) {
    setStatuses((old) => ({ ...old, [name]: status }));
    setChecks((old) => ({
      ...old,
      [name]: status === "known" ? "know" : "idk",
    }));
  }
  function openReader(name) {
    setReader(name);
    setReaderTab("note");
    setReaderResult(null);
    setMobileMenu(false);
  }
  /** Peek at a linked word: a small alert with its definition, no navigation. */
  function showTerm(name) {
    if (!byName[name]) return;
    setTermAlert((stack) =>
      stack[stack.length - 1] === name ? stack : [...stack, name].slice(-6),
    );
  }
  const hideTerm = () => setTermAlert([]);
  const backTerm = () => setTermAlert((stack) => stack.slice(0, -1));
  function moveToTerm(name) {
    setTermAlert([]);
    openReader(name);
  }
  function recordPretest(name, value) {
    setPretest((old) => (old[name] ? old : { ...old, [name]: value }));
  }
  /** Jump straight to the written retry of a finished question. */
  function startRetry(q) {
    selectQuestion(q);
    setFlow((f) => ({ ...f, phase: "retry" }));
  }
  function masterQuestion(id) {
    setMastered((old) => [...new Set([...old, id])]);
  }
  function makeChecklist(results = flow.results) {
    const failed = results
      .flatMap((ok, i) => (ok ? [] : [question.steps[i].term]))
      .filter(Boolean);
    if (state.preferences.prerequisites === false) {
      setFlow((f) => ({ ...f, phase: "hints" }));
      return;
    }
    setChecks(
      Object.fromEntries(
        checklist(question).map((name) => [
          name,
          !failed.includes(name) && statuses[name] === "known" ? "know" : "idk",
        ]),
      ),
    );
    setFlow((f) => ({ ...f, phase: "checklist" }));
  }
  function beginRoute() {
    setReaderTab("note");
    setReaderResult(null);
    const list = checklist(question),
      idk = list.filter((name) => checks[name] !== "know");
    const nextStatuses = { ...statuses };
    list.forEach(
      (name) => (nextStatuses[name] = idk.includes(name) ? "unknown" : "known"),
    );
    const r = readingRoute(idk, nextStatuses, { focused: true });
    setStatuses(nextStatuses);
    setPlan(r.map((c) => c.name));
    setFlow((f) => ({
      ...f,
      idk,
      phase: r.length ? "route" : idk.length ? "retest" : "ready",
      readIndex: 0,
      retestIndex: 0,
      retestResults: [],
    }));
  }
  function finishReading() {
    setFlow((f) => ({
      ...f,
      phase: "retest",
      retestIndex: 0,
      retestResults: [],
    }));
    setReader(null);
  }
  async function navigateRoute(index, markCurrent = false) {
    if (advancing.current) return;
    advancing.current = true;
    const body = document.querySelector(".study-body");
    const valid = () =>
      current.current.questionId === questionId &&
      current.current.modal === state.modal &&
      current.current.reader === reader &&
      (current.current.flow.phase === "route" ||
        current.current.flow.phase === "review");
    try {
      if (body) body.dataset.journey = "map";
      if (!(await scrollBeforeNavigate(body || window)) || !valid()) return;
      await naturalPause(280);
      if (!valid()) return;
      if (markCurrent)
        setRead((old) => [...new Set([...old, plan[flow.readIndex]])]);
      if (index >= plan.length) {
        finishReading();
        return;
      }
      if (body) body.dataset.journey = "connection";
      setFlow((f) => ({ ...f, readIndex: index, phase: "route" }));
      setReaderTab("note");
      setReaderResult(null);
      await waitForMapArrival(body?.querySelector(".stellar-map"));
      await naturalPause(420);
      if (!valid()) return;
      if (body) body.dataset.journey = "note";
      await settleOnNote(
        body || window,
        body?.querySelector(".route-reading .concept-note h2"),
      );
    } finally {
      advancing.current = false;
      if (body) delete body.dataset.journey;
    }
  }
  const jumpToRouteNote = (index) => navigateRoute(index);
  const routeNext = () => navigateRoute(flow.readIndex + 1, true);
  function finishRetest() {
    const failures = flow.idk.filter((_, i) => !flow.retestResults[i]);
    if (failures.length) {
      setReaderTab("note");
      setReaderResult(null);
      const r = readingRoute(failures, statuses, { focused: true });
      setPlan(r.map((c) => c.name));
      setFlow((f) => ({ ...f, idk: failures, phase: "review", readIndex: 0 }));
    } else setFlow((f) => ({ ...f, phase: "ready" }));
  }
  function revealAnswer() {
    setFlow((f) => ({ ...f, phase: "hints" }));
  }
  function buildSingleRoute(name) {
    state.setPreferences((p) => ({ ...p, prerequisites: true }));
    setReaderTab("note");
    setReaderResult(null);
    const nextRoute = readingRoute([name], statuses, { focused: true });
    setPlan(nextRoute.map((c) => c.name));
    setFlow((f) => ({
      ...f,
      phase: nextRoute.length ? "route" : "retest",
      idk: [name],
      readIndex: 0,
      retestIndex: 0,
      retestResults: [],
    }));
    setModal("study");
    setReader(null);
  }

  function editPrerequisites() {
    makeChecklist([]);
  }
  function togglePrerequisites(enabled) {
    state.setPreferences((p) => ({ ...p, prerequisites: enabled }));
    setReader(null);
    if (enabled) {
      setChecks(
        Object.fromEntries(
          checklist(question).map((name) => [
            name,
            statuses[name] === "known" ? "know" : "idk",
          ]),
        ),
      );
      setFlow((f) => ({ ...f, phase: "checklist" }));
    } else if (
      ["checklist", "route", "review", "retest"].includes(flow.phase)
    ) {
      setFlow((f) => ({ ...f, phase: "hints" }));
    }
  }
  return {
    editPrerequisites,
    togglePrerequisites,
    selectQuestion,
    nextQuestion,
    updateStatus,
    openReader,
    showTerm,
    hideTerm,
    backTerm,
    moveToTerm,
    recordPretest,
    startRetry,
    masterQuestion,
    makeChecklist,
    beginRoute,
    finishReading,
    routeNext,
    jumpToRouteNote,
    finishRetest,
    revealAnswer,
    buildSingleRoute,
  };
}
