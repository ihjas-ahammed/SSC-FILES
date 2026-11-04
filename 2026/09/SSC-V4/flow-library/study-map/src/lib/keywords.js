/**
 * Recall keywords for "Try again myself".
 *
 * A keyword is written "Main phrase|alias|another alias". Nothing is offered
 * until the learner has typed MIN_LETTERS letters, so the list cannot be
 * browsed; the suggestions only complete something they have started to recall.
 */
export const MIN_LETTERS = 3;

export function normalize(text = "") {
  return String(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const letterCount = (text) => normalize(text).replace(/ /g, "").length;

/** Turn authored strings (or {term, aliases}) into searchable entries. */
export function parseKeywords(list = []) {
  return list.map((entry) => {
    const parts =
      typeof entry === "string"
        ? entry.split("|")
        : [entry.term, ...(entry.aliases || [])];
    const [term, ...aliases] = parts.map((p) => p.trim()).filter(Boolean);
    return {
      term,
      forms: [term, ...aliases].map(normalize).filter(Boolean),
      letters: letterCount(term),
    };
  });
}

/** Locked keywords the typed text could be completing. Empty below three letters. */
export function suggestions(input, keywords, unlocked = []) {
  const q = normalize(input);
  if (letterCount(input) < MIN_LETTERS) return [];
  const taken = new Set(unlocked);
  return keywords
    .map((keyword, index) => ({ keyword, index }))
    .filter(
      ({ keyword, index }) =>
        !taken.has(index) &&
        keyword.forms.some(
          (form) =>
            form.startsWith(q) ||
            form.split(" ").some((word) => word.startsWith(q)) ||
            (q.length >= 4 && form.includes(q)),
        ),
    )
    .sort((a, b) => {
      const rank = (k) =>
        k.forms.some((f) => f === q) ? 0 : k.forms.some((f) => f.startsWith(q)) ? 1 : 2;
      return rank(a.keyword) - rank(b.keyword) || a.index - b.index;
    });
}

/** Index of a locked keyword that the text names exactly, or -1. */
export function exactKeyword(input, keywords, unlocked = []) {
  const q = normalize(input);
  if (letterCount(input) < MIN_LETTERS) return -1;
  return keywords.findIndex(
    (keyword, index) => !unlocked.includes(index) && keyword.forms.includes(q),
  );
}
