import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { normalizeProgress } from "../src/lib/progressState.js";
import { concepts, questions, exportVault } from "../src/graph.js";

// Workspace-only persistence. Concept filenames are taken from the reviewed
// curriculum allowlist, never from a request-supplied path.
export function vaultApi() {
  const root = resolve(process.cwd(), "vault"),
    names = new Set(concepts.map((c) => c.name)),
    ids = new Set(questions.map((q) => q.id));
  let queue = Promise.resolve();
  async function middleware(req, res, next) {
    if (req.url?.split("?")[0] !== "/api/progress") return next();
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");
    try {
      if (req.method === "GET") {
        let saved = {};
        try {
          saved = JSON.parse(
            await readFile(resolve(root, "_StudyState.json"), "utf8"),
          );
        } catch {}
        const statuses = { ...saved.statuses };
        // Manual edits to concept frontmatter are honored when opening a new browser.
        for (const c of concepts) {
          const note = await readFile(
            resolve(root, "Course - Prerequisites", c.name + ".md"),
            "utf8",
          );
          const status = note.match(/^status: (known|unknown|shaky)\s*$/m)?.[1];
          if (status) statuses[c.name] = status;
        }
        res.end(JSON.stringify({ ...saved, statuses }));
        return;
      }
      if (req.method !== "POST") {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: "Method not allowed" }));
        return;
      }
      let body = "";
      for await (const chunk of req) {
        body += chunk;
        if (body.length > 2500000) throw Error("Progress backup is too large");
      }
      const input = JSON.parse(body);
      if (!input.statuses || typeof input.statuses !== "object")
        throw Error("Invalid progress");
      const state = { ...normalizeProgress(input), updatedAt: Date.now() };
      queue = queue
        .catch(() => {})
        .then(async () => {
          for (const c of concepts) {
            const file = resolve(
                root,
                "Course - Prerequisites",
                c.name + ".md",
              ),
              old = await readFile(file, "utf8"),
              status = state.statuses[c.name] || "unknown",
              updated = old.replace(
                /^status: (?:known|unknown|shaky).*$/m,
                "status: " + status,
              );
            if (old !== updated) await writeFile(file, updated);
          }
          const exported = exportVault(state.statuses, state.completed);
          for (const file of ["_Index.md", "_Progress.md", "_ReadingOrder.md"])
            await writeFile(resolve(root, file), exported[file]);
          await writeFile(
            resolve(root, "_StudyState.json"),
            JSON.stringify(state, null, 2),
          );
        });
      await queue;
      res.end(JSON.stringify({ saved: true, updatedAt: state.updatedAt }));
    } catch (error) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: error.message }));
    }
  }
  return {
    name: "workspace-vault-progress",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
