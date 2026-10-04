import { concepts, questions, meta } from "./course.js";
import { readingRoute } from "./routes.js";
export function exportVault(statuses, completed) {
  const files = {};
  for (const c of concepts)
    files[`Course - Prerequisites/${c.name}.md`] =
      `---\ntype: concept\naliases: ${JSON.stringify(c.aliases)}\ndepth: ${c.depth}\nstatus: ${statuses[c.name] || "unknown"}\nverify: false\n---\n# ${c.name}\n\n**One-line meaning:** ${c.meaning}\n\n**Formal definition:** ${c.linkedFormal}\n\n**Why it matters here:** Supports ${c.usedIn.length} ${meta.module} questions.\n\n**Tiny example:** ${c.example}\n\n## Prerequisites\n${c.prerequisites.map((p) => `- [[${p}]]`).join("\n") || "Ground concept — this branch stops here."}\n\n## Used in\n${c.usedIn.map((q) => `- [[Answers/${q}]]`).join("\n")}\n`;
  for (const q of questions)
    files[`Answers/${q.id}.md`] =
      `---\ntype: answer\nsection: ${q.section}\nnumber: ${q.number}\nmarks_style: ${q.marks_style}\nsource: ${meta.sourceName}\nsource_page: ${q.page}\ncompleted: ${completed.includes(q.id)}\n---\n# Question\n${q.text}\n\n# Formal Answer\n${q.linkedAnswer}\n\n# Symbols\n${(q.symbols || []).map((t) => `- [[${t}]]`).join("\n")}\n\n# Key Terms\n${q.terms.map((t) => `- [[${t}]]`).join("\n")}\n${q.verify ? `\n## Source qualification\n${q.verify}\n` : ""}\n## Verbatim extracted source page\n\`\`\`text\n${q.sourcePageText}\n\`\`\`\n`;
  const sorted = [...concepts].sort((a, b) => a.name.localeCompare(b.name));
  files["_Index.md"] =
    `# ${meta.module}\n\n| Concept | Depth | Status |\n| --- | --- | --- |\n${sorted.map((c) => `| [[${c.name}]] | ${c.depth} | ${statuses[c.name] || "unknown"} |`).join("\n")}\n\n## Questions\n${questions.map((q) => `- [[Answers/${q.id}]]`).join("\n")}`;
  files["_Progress.md"] =
    `# Progress\n\n${sorted.map((c) => `- [[${c.name}]]: ${statuses[c.name] || "unknown"}`).join("\n")}\n\n## Completed questions\n${completed.map((q) => `- [[Answers/${q}]]`).join("\n")}`;
  const combined = readingRoute(
    [...questions.flatMap((q) => q.terms), ...concepts.map((c) => c.name)],
    statuses,
  );
  files["_ReadingOrder.md"] =
    `# Your combined module reading route\n\nKnown notes are skipped. Prerequisites appear before dependents. Questions are considered in A, B, C order.\n\n${combined.map((c, i) => `${i + 1}. [[${c.name}]]: ${c.neededFor ? `needed for [[${c.neededFor}]]` : "module foundation"} · ~${c.minutes} min`).join("\n")}\n\nThen retry the questions, one at a time, from [[Answers/${questions[0].id}]] to [[Answers/${questions.at(-1).id}]].\n`;
  return files;
}
