import fs from "node:fs";
import { resolve } from "node:path";
const temp = resolve(process.env.STUDY_MAP_TMPDIR || ".tmp");
fs.mkdirSync(temp, { recursive: true });
fs.mkdirSync("artifacts", { recursive: true });
// Keep Chrome profiles and temporary artifacts inside the authorized workspace.
process.env.TMPDIR = temp;
