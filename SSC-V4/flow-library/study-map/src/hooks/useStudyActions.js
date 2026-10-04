import { useRef } from "react";
import {
  naturalPause,
  waitForMapArrival,
  settleOnNote,
} from "../lib/noteJourney";
import { scrollBeforeNavigate } from "../lib/scrollBeforeNavigate";
import { questions, readingRoute, checklist } from "../graph";
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
    sessions,
    setSessions,
  } = state;
  function selectQuestion(q, { open = true } = {}) {
    setSessions((old) => ({ ...old, [questionId]: { flow, plan, checks } }));
    const restored =
      q.id === questionId ? { flow, plan, checks } : sessions[q.id];
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
    setPlan(restored?.plan || []);
    setChecks(restored?.checks || {});
    setFlow(
      restored?.flow || {
        questionId: q.id,
        phase: "attempt",
        attempt: "",
        step: 0,
        results: [],
        idk: [],
        readIndex: 0,
        retestIndex: 0,
        retestResults: [],
      },
    );
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
  }
  function openReader(name) {
    setReader(name);
    setReaderTab("note");
    setReaderResult(null);
    setMobileMenu(false);
  }
  function closeDialog() {
    if (reader) setReader(null);
    else setModal(null);
  }
  function makeChecklist(results = flow.results) {
    const failed = results
      .flatMap((ok, i) => (ok ? [] : [question.steps[i].term]))
      .filter(Boolean);
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
    const r = readingRoute(idk, nextStatuses);
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
      const r = readingRoute(failures, statuses);
      setPlan(r.map((c) => c.name));
      setFlow((f) => ({ ...f, idk: failures, phase: "review", readIndex: 0 }));
    } else setFlow((f) => ({ ...f, phase: "ready" }));
  }
  function revealAnswer() {
    setFlow((f) => ({ ...f, phase: "hints" }));
  }
  function buildSingleRoute(name) {
    setReaderTab("note");
    setReaderResult(null);
    const nextRoute = readingRoute([name], statuses);
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

  return {
    selectQuestion,
    nextQuestion,
    updateStatus,
    openReader,
    closeDialog,
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
