import { concepts } from "./course.js";
export function searchConcepts(query, limit = 6) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  const rank = (c) =>
    c.name.toLowerCase() === term
      ? 0
      : c.name.toLowerCase().startsWith(term)
        ? 1
        : c.aliases.some((a) => a.toLowerCase() === term)
          ? 2
          : c.name.toLowerCase().includes(term)
            ? 3
            : 4;
  return concepts
    .filter((c) =>
      `${c.name} ${c.aliases.join(" ")} ${c.symbol}`
        .toLowerCase()
        .includes(term),
    )
    .sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name))
    .slice(0, limit);
}
