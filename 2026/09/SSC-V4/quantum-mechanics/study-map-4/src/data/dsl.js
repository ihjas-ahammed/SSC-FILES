// Authoring helpers. Text is written once, in linked form ([[Concept|words]]);
// plain text, link-free definitions and the unlockable solution are derived.
export const strip = (linked = "") =>
  linked.replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, n, label) => (label || n).trim());

/** A supporting idea (not an exercise). */
export const idea = (o) => ({
  kind: "idea",
  minutes: 3,
  aliases: [],
  verify: false,
  status: "unknown",
  usedIn: [],
  prerequisites: [],
  faq: [],
  ...o,
  formal: strip(o.linkedFormal),
});

/**
 * An exercise that is its own concept. `proof.steps` are the complete proof;
 * each step carries the guided question that unlocks it, so the proof, the
 * exercise steps and the unlockable solution can never disagree.
 */
export const problem = (o) => ({
  kind: "problem",
  minutes: 8,
  aliases: [],
  verify: false,
  status: "unknown",
  usedIn: [],
  faq: [],
  ...o,
  formal: strip(o.linkedFormal),
});

export const stepsOf = (p) =>
  p.proof.steps.map((s) => ({
    prompt: s.check.prompt,
    options: s.check.options,
    correct: s.check.correct,
    explanation: s.check.explanation,
    term: s.check.term || p.prerequisites[0],
  }));

/** A three-option check; the right answer is written first and shuffled at display time. */
export const chk = (prompt, right, wrong1, wrong2, explanation, term) => ({
  prompt,
  options: [right, wrong1, wrong2],
  correct: 0,
  explanation,
  ...(term ? { term } : {}),
});
