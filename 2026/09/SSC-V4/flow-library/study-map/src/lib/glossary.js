import { byName } from "./course.js";

const LINK = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;

/** Concept names linked as [[Name]] or [[Name|label]] in a text, in first-seen order. */
export function linkedNames(text = "") {
  const found = [];
  for (const match of text.matchAll(LINK)) {
    const name = match[1].trim();
    if (byName[name] && !found.includes(name)) found.push(name);
  }
  return found;
}

/** Linked concepts the learner has not yet marked as understood. */
export function newTerms(text, statuses = {}, skip = []) {
  return linkedNames(text).filter(
    (name) => statuses[name] !== "known" && !skip.includes(name),
  );
}

/** Remove link markup, keeping only the visible words. */
export function plainText(linked = "") {
  return linked.replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, n, label) =>
    (label || n).trim(),
  );
}
