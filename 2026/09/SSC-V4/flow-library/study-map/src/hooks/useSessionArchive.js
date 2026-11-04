import { useEffect } from "react";

import { archiveSession } from "../lib/sessionArchive.js";

export default function useSessionArchive({
  questionId,
  flow,
  plan,
  checks,
  setSessions,
}) {
  useEffect(() => {
    if (flow.phase === "attempt" && !flow.attempt) return;
    setSessions((old) => ({
      ...old,
      [questionId]: archiveSession(old[questionId], flow, plan, checks),
    }));
  }, [questionId, flow, plan, checks]);
}
