import { createServer } from "vite";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { studyMapConfig } from "./config.mjs";
import { configureCourse } from "../src/lib/course.js";
import { vaultApi } from "./vault-api.js";
const course = (await import(pathToFileURL(resolve("course.js")).href)).default;
configureCourse(course);
const config = studyMapConfig(process.cwd());
const server = await createServer({
  ...config,
  plugins: [...config.plugins, vaultApi()],
  define: { "globalThis.STUDY_MAP_VAULT_ENABLED": "true" },
  server: { host: "127.0.0.1", port: 5175 },
});
await server.listen();
server.printUrls();
