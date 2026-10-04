import { useEffect } from "react";
import { byName, questions } from "../graph";
import { STORAGE } from "../lib/storage";
export default function usePersistence(state) {
  const {
    isolated,
    saved,
    hydrated,
    setHydrated,
    setVaultSaved,
    setStatuses,
    setCompleted,
    setRead,
    setQuestionId,
    setSelected,
    setSection,
    setFlow,
    setPlan,
    statuses,
    completed,
    read,
    questionId,
    flow,
    plan,
    setToast,
    history,
    setHistory,
    sessions,
    setSessions,
    checks,
    setChecks,
    preferences,
    setPreferences,
  } = state;
  useEffect(() => {
    if (isolated) {
      setHydrated(true);
      return;
    }
    let cancelled = false;
    fetch("/api/progress")
      .then((r) => (r.ok ? r.json() : null))
      .then((remote) => {
        if (cancelled || !remote) return;
        if (!saved.updatedAt || (remote.updatedAt || 0) > saved.updatedAt) {
          const valid = Object.fromEntries(
            Object.entries(remote.statuses || {}).filter(
              ([n, s]) =>
                byName[n] && ["known", "unknown", "shaky"].includes(s),
            ),
          );
          setStatuses(valid);
          if (Array.isArray(remote.completed))
            setCompleted(
              remote.completed.filter((id) =>
                questions.some((q) => q.id === id),
              ),
            );
          if (Array.isArray(remote.read))
            setRead(remote.read.filter((n) => byName[n]));
          const q = questions.find((q) => q.id === remote.questionId);
          if (q) {
            setQuestionId(q.id);
            setSelected(q.terms[0]);
            setSection(q.section);
            if (remote.flow?.questionId === q.id) setFlow(remote.flow);
          }
          if (Array.isArray(remote.plan))
            setPlan(remote.plan.filter((n) => byName[n]));
          if (Array.isArray(remote.history)) setHistory(remote.history);
          if (remote.sessions) setSessions(remote.sessions);
          if (remote.checks) setChecks(remote.checks);
          if (remote.preferences) setPreferences(remote.preferences);
        }
        setVaultSaved(true);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setHydrated(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    const snapshot = {
      preferences,
      history,
      checks,
      sessions: { ...sessions, [questionId]: { flow, plan, checks } },
      statuses,
      completed,
      read,
      questionId,
      flow,
      plan,
      updatedAt: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE, JSON.stringify(snapshot));
    } catch {
      setToast("Browser storage is unavailable. Export progress to keep it.");
    }
    if (isolated) return;
    const timer = setTimeout(
      () =>
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(snapshot),
        })
          .then((r) => setVaultSaved(r.ok))
          .catch(() => setVaultSaved(false)),
      400,
    );
    return () => clearTimeout(timer);
  }, [
    statuses,
    completed,
    read,
    questionId,
    flow,
    plan,
    hydrated,
    history,
    sessions,
    checks,
    preferences,
  ]);
}
