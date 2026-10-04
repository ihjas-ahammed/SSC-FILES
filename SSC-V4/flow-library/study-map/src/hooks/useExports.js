import { questions, byName, exportVault, meta } from "../graph";
import { normalizeProgress } from "../lib/progressState";
import { makeZip } from "../zip";
export default function useExports(state) {
  const {
    statuses,
    completed,
    read,
    questionId,
    flow,
    plan,
    checks,
    history,
    sessions,
    setStatuses,
    setCompleted,
    setRead,
    setHistory,
    setSessions,
    setToast,
    setChecks,
    setPlan,
    setFlow,
    setQuestionId,
    setSelected,
    setSection,
    preferences,
    setPreferences,
  } = state;
  function downloadVault() {
    const files = exportVault(statuses, completed);
    download(makeZip(files), `${meta.exportPrefix}-vault.zip`);
    setToast("Vault exported with your current knowledge statuses.");
  }
  function download(blob, name) {
    const url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function backup() {
    download(
      new Blob(
        [
          JSON.stringify(
            {
              statuses,
              completed,
              read,
              questionId,
              flow,
              plan,
              checks,
              history,
              sessions,
              preferences,
            },
            null,
            2,
          ),
        ],
        { type: "application/json" },
      ),
      `${meta.exportPrefix}-progress.json`,
    );
  }
  function importProgress(e) {
    const file = e.target.files[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const raw = JSON.parse(r.result);
        if (!raw.statuses || !Array.isArray(raw.completed)) throw Error();
        const v = normalizeProgress(raw);
        if (!v.statuses || !Array.isArray(v.completed)) throw Error();
        const validated = Object.fromEntries(
          Object.entries(v.statuses).filter(
            ([n, s]) => byName[n] && ["known", "unknown", "shaky"].includes(s),
          ),
        );
        setStatuses(validated);
        setCompleted(
          v.completed.filter((id) => questions.some((q) => q.id === id)),
        );
        setRead(Array.isArray(v.read) ? v.read.filter((n) => byName[n]) : []);
        setHistory(v.history);
        setPreferences(v.preferences);
        setChecks(v.checks);
        setPlan(v.plan);
        setFlow(v.flow);
        setQuestionId(v.questionId);
        setSection(questions.find((q) => q.id === v.questionId).section);
        setSelected(questions.find((q) => q.id === v.questionId).terms[0]);
        setSessions(
          v.sessions && typeof v.sessions === "object" ? v.sessions : {},
        );
        setToast("Progress restored.");
      } catch {
        setToast("This file is not a valid Atlas progress backup.");
      }
    };
    r.readAsText(file);
    e.target.value = "";
  }
  return { downloadVault, download, backup, importProgress };
}
