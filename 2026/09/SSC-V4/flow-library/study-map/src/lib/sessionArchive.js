// Navigation can restart independently of the learner's saved practice.
export function archiveSession(previous, flow, plan, checks) {
  return {
    flow: {
      ...flow,
      examDraft: flow.examDraft ?? previous?.flow?.examDraft ?? "",
    },
    plan,
    checks,
  };
}
