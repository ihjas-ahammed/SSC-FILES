/* =========================================================================
   SYLLABUS QUERIES, UNIT COST & PROGRESS CALCULATIONS
   ========================================================================= */

import { DEPTS, SUBJECTS, SYLLABUS_HOURS_MAP, UNIT_MODULE, MOD_ROMAN } from "../data/subjects.js";
import { toMin } from "../utils/dates.js";

const UNIT_REF_RE = /\s*\((?:Units?\s*)?[\d.]+(?:\s*[–-]\s*[\d.]+)?\)\s*$/;
export const cleanUnit = (t) => t.replace(UNIT_REF_RE, "");

export const TIME_SCALE = 1.25; // unit times are divided by this for every subject
export const unitHrs = (id, u) => ((SYLLABUS_HOURS_MAP[id] || [])[u - 1] ?? 2) / TIME_SCALE;
export const unitMod = (id, u) => (UNIT_MODULE[id] || "")[u - 1] || "4";

export function subj(id, cfg) {
  const s = SUBJECTS[id];
  if (id === "SEC_OTH" && cfg && cfg.secName.trim()) {
    return { ...s, name: cfg.secName.trim(), shortName: cfg.secName.trim() };
  }
  return s;
}

export const activeIds = (cfg) => [...DEPTS[cfg.dept].ids, cfg.sec];
export const scheduleIds = (cfg) => activeIds(cfg);

export const examsOf = (cfg) =>
  activeIds(cfg)
    .map(id => subj(id, cfg))
    .sort((a, b) => a.examDate.localeCompare(b.examDate) || a.role.localeCompare(b.role));

export const doneSet = (cfg, id) => new Set(cfg.done[id] || []);

export const remainingUnits = (cfg, id) => {
  const d = doneSet(cfg, id);
  return SUBJECTS[id].units.filter(u => !d.has(u.u)).map(u => ({ ...u, h: unitHrs(id, u.u) }));
};

export const colorStyle = (id) => {
  const t = SUBJECTS[id].theme;
  return `--bg2:${t.bannerBg};--bd:${t.border}`;
};

// Session Maker & Stage Depth Constants
export const MODE_NAMES = ["Revision", "Read", "Deep Dive", "Review"];
export const MODE_MULT = [0.5, 1, 2, 0.25]; // Revision = 0.5x, Read = 1x, Deep Dive = 2x, Review = 0.25x
export const MODE_SLIDER = [3, 0, 1, 2];    // Left-to-right order: Review, Revision, Read, Deep Dive

export const modulesOf = (id) => [...new Set((UNIT_MODULE[id] || "").split(""))].sort();
export const modUnits = (id, m) => SUBJECTS[id].units.filter(u => unitMod(id, u.u) === m);

export const coursePct = (cfg, id, m) => {
  const list = m ? modUnits(id, m) : SUBJECTS[id].units;
  const dset = doneSet(cfg, id);
  return list.length ? Math.round(100 * list.filter(u => dset.has(u.u)).length / list.length) : 0;
};

export const normUnits = (arr) => (arr || []).map(v => typeof v === "number" ? { u: v, mode: 1 } : v);

export const usedMods = (draft) => {
  const m = [...new Set(draft.units.map(v => unitMod(draft.subjectId, v.u)))].sort();
  return m.length ? m : [draft.moduleNo];
};

export function sessionName(cfg, subjectId, m) {
  const list = [].concat(m).slice().sort();
  const romans = list.map(x => (MOD_ROMAN[x] || "Module " + x).replace("Module ", "")).join(", ");
  return `${subj(subjectId, cfg).name} · ${list.length > 1 ? "Modules" : "Module"} ${romans}`;
}

export const unitCost = (id, u, mode) => unitHrs(id, u) * MODE_MULT[mode];
export const usedHrs = (draft) => draft.units.reduce((t, v) => t + unitCost(draft.subjectId, v.u, v.mode), 0);
export const availHrs = (draft) => Math.max(0, (toMin(draft.end) - toMin(draft.start)) / 60);
export const fitsHrs = (used, avail) => used <= avail + 1e-9;
