import { readFile, writeFile, mkdir } from "node:fs/promises";

// Read-only toward the vault: this reorganizes app data without resetting progress.
const data = JSON.parse(
  await readFile("source/curriculum-reviewed.json", "utf8"),
);
await mkdir("src/data/concepts", { recursive: true });
await mkdir("src/data/questions", { recursive: true });
const imports = [],
  conceptNames = [],
  questionNames = [];
for (const [group, concepts] of Object.entries(
  Object.groupBy(data.concepts, (c) => c.group),
)) {
  await writeFile(
    `src/data/concepts/${group}.json`,
    JSON.stringify(concepts, null, 2) + "\n",
  );
  imports.push(
    `import ${group} from './concepts/${group}.json' with {type:'json'};`,
  );
  conceptNames.push(group);
}
for (const section of ["A", "B", "C"]) {
  await writeFile(
    `src/data/questions/section-${section}.json`,
    JSON.stringify(
      data.questions.filter((q) => q.section === section),
      null,
      2,
    ) + "\n",
  );
  imports.push(
    `import section${section} from './questions/section-${section}.json' with {type:'json'};`,
  );
  questionNames.push("section" + section);
}
await writeFile(
  "src/data/metadata.json",
  JSON.stringify({ source: data.source, report: data.report }, null, 2),
);
imports.push("import metadata from './metadata.json' with {type:'json'};");
await writeFile(
  "src/data/index.js",
  imports.join("\n") +
    `\nexport default {...metadata,concepts:[${conceptNames.map((n) => "..." + n).join(",")}],questions:[${questionNames.map((n) => "..." + n).join(",")}]};\n`,
);
console.log(
  "Curriculum organized into topic and section files. Vault progress unchanged.",
);
