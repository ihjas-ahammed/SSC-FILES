import { useEffect } from "react";
import { initialFlow } from "../lib/progressState";
import { questions } from "../lib/course";
import { STORAGE } from "../lib/storage";
export default function useReset(state) {
  const { preferences } = state;
  useEffect(() => {
    document.documentElement.dataset.motion = preferences.animations
      ? "on"
      : "off";
  }, [preferences.animations]);
  function resetApp() {
    const q = questions[0];
    state.resetNavigation();
    try {
      localStorage.removeItem(STORAGE);
    } catch {}
    state.setStatuses({});
    state.setCompleted([]);
    state.setRead([]);
    state.setHistory([]);
    state.setBookmarks([]);
    state.setBookmarkIndex(0);
    state.setMapScreen("map");
    state.setMapPanelOpen(false);
    state.setSessions({});
    state.setQuestionId(q.id);
    state.setSection(q.section);
    state.setSelected(q.terms[0]);
    state.setFlow(initialFlow(q.id));
    state.setPlan([]);
    state.setChecks({});
    state.setSearch("");
    state.setFilter("all");
    state.setScope("question");
    state.setNav("bank");
    state.setReader(null);
    state.setModal(null);
    state.setReaderTab("note");
    state.setReaderResult(null);
    state.setMobileMenu(false);
    state.setPreferences({ animations: true, prerequisites: true });
    state.setToast(
      "App reset. Your study progress is clear and every knowledge switch starts off.",
    );
  }
  return { resetApp };
}
