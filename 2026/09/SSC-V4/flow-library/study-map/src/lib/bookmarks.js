import { byName } from "./course.js";

export function normalizeBookmarks(input) {
  const seen = new Set();
  return (Array.isArray(input) ? input : []).flatMap((item, index) => {
    const entry = typeof item === "string" ? { name: item } : item;
    if (!entry || !byName[entry.name] || seen.has(entry.name)) return [];
    seen.add(entry.name);
    return [
      {
        name: entry.name,
        note: typeof entry.note === "string" ? entry.note.slice(0, 50000) : "",
        createdAt: Number.isFinite(entry.createdAt)
          ? entry.createdAt
          : index + 1,
      },
    ];
  });
}

export function bookmarkMarkdown(bookmarks) {
  return (
    "# Bookmarked concepts — final review\n\n" +
    bookmarks
      .map((b, i) => {
        const c = byName[b.name];
        return `## ${i + 1}. ${c.name}\n\n${c.meaning}\n\n${c.linkedFormal}\n\n### My revision notes\n\n${b.note || "(No revision notes yet.)"}\n`;
      })
      .join("\n")
  );
}
