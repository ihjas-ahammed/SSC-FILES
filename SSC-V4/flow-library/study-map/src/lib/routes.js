import { byName } from "./course.js";
export function closure(names) {
  const found = new Set();
  function visit(name) {
    if (found.has(name)) return;
    found.add(name);
    byName[name]?.prerequisites.forEach(visit);
  }
  names.forEach(visit);
  return found;
}
/**
 * Notes to read, prerequisites first. By default every unknown ancestor is
 * included. With `focused`, the route is only the switched-off concepts
 * (`idk`) plus ancestors the learner has also judged as not known; ancestors
 * never judged, and everything below a known concept, are left out. Without
 * this a handful of switched-off concepts pulled in dozens of untouched notes.
 */
export function readingRoute(idk, statuses, { focused = false } = {}) {
  const targets = new Set(idk),
    seen = new Set(),
    result = [];
  function visit(name, neededFor) {
    if (seen.has(name)) return;
    seen.add(name);
    if (focused && statuses[name] === "known") return;
    byName[name].prerequisites.forEach((p) => visit(p, name));
    const include = focused
      ? targets.has(name) || Boolean(statuses[name])
      : statuses[name] !== "known";
    if (include)
      result.push({ ...byName[name], neededFor, target: idk.includes(name) });
  }
  idk.forEach((name) => visit(name));
  return result;
}
export function checklist(question) {
  return [
    ...new Set(
      question.terms.flatMap((name) => [name, ...byName[name].prerequisites]),
    ),
  ];
}
