import fs from "node:fs/promises";
import assert from "node:assert/strict";
const base = (process.env.STUDY_MAP_URL || "http://localhost:5175").replace(
  /\/$/,
  "",
);
const files = [
  "vault/Course - Prerequisites/Scalar.md",
  "vault/_Progress.md",
  "vault/_Index.md",
  "vault/_ReadingOrder.md",
  "vault/_StudyState.json",
];
const originals = await Promise.all(
  files.map((f) => fs.readFile(f).catch(() => null)),
);
try {
  const original = await (await fetch(`${base}/api/progress`)).json();
  const event = {
    time: Date.now(),
    kind: "concept",
    term: "Scalar",
    correct: true,
  };
  const payload = {
    ...original,
    history: [event],
    checks: { Scalar: "idk" },
    sessions: {
      "Q-A-2": {
        flow: { phase: "steps", step: 0, attempt: "A saved attempt." },
        checks: { "Hilbert Space": "idk" },
        plan: [],
      },
    },
    statuses: { ...original.statuses, Scalar: "known" },
    questionId: original.questionId || "Q-A-1",
  };
  const result = await fetch(`${base}/api/progress`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  assert.equal(result.status, 200);
  assert((await fs.readFile(files[0], "utf8")).includes("status: known"));
  assert((await fs.readFile(files[1], "utf8")).includes("[[Scalar]]: known"));
  assert(
    (await fs.readFile(files[2], "utf8")).includes(
      "| [[Scalar]] | 3 | known |",
    ),
  );
  assert(!(await fs.readFile(files[3], "utf8")).includes("[[Scalar]]:"));
  const persisted = await (await fetch(`${base}/api/progress`)).json();
  assert.equal(persisted.statuses.Scalar, "known");
  assert.equal(persisted.history[0].term, "Scalar");
  assert.equal(persisted.checks.Scalar, "idk");
  assert.equal(persisted.sessions["Q-A-2"].flow.attempt, "A saved attempt.");
  assert.equal(
    (await (await fetch(`${base}/Module3.pdf`)).arrayBuffer()).byteLength,
    122867,
  );
  console.log(
    "PASS: progress API persists note frontmatter, progress, index, known-pruned module route, state restoration; source PDF is served intact.",
  );
} finally {
  for (let i = 0; i < files.length; i++)
    if (originals[i]) await fs.writeFile(files[i], originals[i]);
    else await fs.unlink(files[i]).catch(() => {});
}
