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
export function readingRoute(idk, statuses) {
  const seen = new Set(),
    result = [];
  function visit(name, neededFor) {
    if (seen.has(name)) return;
    seen.add(name);
    byName[name].prerequisites.forEach((p) => visit(p, name));
    if (statuses[name] !== "known")
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
