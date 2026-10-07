import { initialFlow } from "../lib/progressState.js";
import { useState, useMemo } from "react";
import { concepts, questions, byName, readingRoute, meta } from "../graph";
import { readSaved, OFFLINE } from "../lib/storage";
export default function useSessionState() {
  const [saved] = useState(readSaved);
  const [hydrated, setHydrated] = useState(false),
    [vaultSaved, setVaultSaved] = useState(false);
  const [statuses, setStatuses] = useState(saved.statuses || {}),
    [completed, setCompleted] = useState(saved.completed || []),
    [read, setRead] = useState(saved.read || []);
  const [questionId, setQuestionId] = useState(
    questions.some((q) => q.id === saved.questionId)
      ? saved.questionId
      : questions[0].id,
  );
  const question = questions.find((q) => q.id === questionId);
  const [selected, setSelected] = useState(question.terms[0]),
    [nav, setNav] = useState("bank"),
    [section, setSection] = useState(question.section);
  const [scope, setScope] = useState("question"),
    [filter, setFilter] = useState("all"),
    [search, setSearch] = useState("");
  const [modal, setModal] = useState(null),
    [mobileMenu, setMobileMenu] = useState(false),
    [reader, setReader] = useState(null),
    [readerTab, setReaderTab] = useState("note"),
    [readerResult, setReaderResult] = useState(null);
  const [flow, setFlow] = useState(() => initialFlow(questionId));
  const [checks, setChecks] = useState({}),
    [toast, setToast] = useState("");
  const known = concepts.filter((c) => statuses[c.name] === "known").length,
    selectedConcept = byName[selected];
  const route = useMemo(
    () => readingRoute(flow.idk, statuses, { focused: true }),
    [flow.idk, statuses],
  );
  const combinedRoute = useMemo(
    () =>
      readingRoute(
        [...questions.flatMap((q) => q.terms), ...concepts.map((c) => c.name)],
        statuses,
      ),
    [statuses],
  );
  // Freeze each planned route: passing a check should not remove the currently open
  // note from underneath the learner while advancing through the queue.
  const [plan, setPlan] = useState([]);
  const isolated =
    (meta.localOnly !== false && !globalThis.STUDY_MAP_VAULT_ENABLED) ||
    OFFLINE ||
    new URLSearchParams(window.location.search).has("isolated");
  const [bookmarks, setBookmarks] = useState(saved.bookmarks || []);
  const [bookmarkIndex, setBookmarkIndex] = useState(0);
  const [mapScreen, setMapScreen] = useState("map"),
    [mapPanelOpen, setMapPanelOpen] = useState(false);
  const [pretest, setPretest] = useState(saved.pretest || {}),
    [mastered, setMastered] = useState(saved.mastered || []),
    [termAlert, setTermAlert] = useState([]);
  const [history, setHistory] = useState(saved.history || []);
  const [sessions, setSessions] = useState(saved.sessions || {});
  const [preferences, setPreferences] = useState(
    saved.preferences || { animations: true },
  );
  return {
    pretest,
    setPretest,
    mastered,
    setMastered,
    termAlert,
    setTermAlert,
    bookmarks,
    setBookmarks,
    bookmarkIndex,
    setBookmarkIndex,
    mapScreen,
    setMapScreen,
    mapPanelOpen,
    setMapPanelOpen,
    preferences,
    setPreferences,
    history,
    setHistory,
    sessions,
    setSessions,
    saved,
    hydrated,
    setHydrated,
    vaultSaved,
    setVaultSaved,
    statuses,
    setStatuses,
    completed,
    setCompleted,
    read,
    setRead,
    questionId,
    setQuestionId,
    question,
    selected,
    setSelected,
    nav,
    setNav,
    section,
    setSection,
    scope,
    setScope,
    filter,
    setFilter,
    search,
    setSearch,
    modal,
    setModal,
    mobileMenu,
    setMobileMenu,
    reader,
    setReader,
    readerTab,
    setReaderTab,
    readerResult,
    setReaderResult,
    flow,
    setFlow,
    checks,
    setChecks,
    toast,
    setToast,
    known,
    selectedConcept,
    route,
    combinedRoute,
    plan,
    setPlan,
    isolated,
  };
}
