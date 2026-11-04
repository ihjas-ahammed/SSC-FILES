import useSessionArchive from "./useSessionArchive";
import useNavigation from "./useNavigation";
import useBookmarks from "./useBookmarks";
import { useEffect, useMemo } from "react";
import { concepts, questions, closure } from "../graph";
import useSessionState from "./useSessionState";
import useExports from "./useExports";
import useStudyActions from "./useStudyActions";
import usePersistence from "./usePersistence";
import useLearningHistory from "./useLearningHistory";
import useReset from "./useReset";
import useDialogAccessibility from "./useDialogAccessibility";
export function useStudySession() {
  const state = useSessionState();
  const {
    scope,
    question,
    questionId,
    filter,
    plan,
    toast,
    setToast,
    section,
  } = state;
  const navigation = useNavigation(state);
  useSessionArchive(state);
  usePersistence(state);
  useDialogAccessibility({ ...state, ...navigation });
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 4000);
    return () => clearTimeout(t);
  }, [toast]);
  const allowed =
    scope === "all"
      ? new Set(concepts.map((c) => c.name))
      : scope === "route"
        ? new Set(plan)
        : closure(question.terms);
  const nodes = useMemo(
    () =>
      concepts.filter(
        (c) => allowed.has(c.name) && (filter === "all" || c.group === filter),
      ),
    [scope, questionId, filter, plan],
  );
  const sectionList = questions.filter((q) => q.section === section);
  return {
    ...state,
    ...useStudyActions(state),
    ...useExports(state),
    ...useLearningHistory(state),
    ...useReset({ ...state, ...navigation }),
    ...useBookmarks(state),
    ...navigation,
    nodes,
    sectionList,
  };
}
