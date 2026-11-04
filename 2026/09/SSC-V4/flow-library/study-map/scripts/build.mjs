import { build } from "vite";
import { copyFile, stat } from "node:fs/promises";
import { studyMapConfig } from "./config.mjs";
await build(studyMapConfig(process.cwd()));
const output = process.argv[2] || "Study-Map-offline.html";
await copyFile("build/index.html", output);
console.log(
  `Offline study map ready: ${((await stat("build/index.html")).size / 1024 / 1024).toFixed(2)} MB`,
);
