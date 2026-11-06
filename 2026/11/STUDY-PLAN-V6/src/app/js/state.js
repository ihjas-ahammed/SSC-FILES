/* =========================================================================
   APPLICATION STATE & LOCALSTORAGE PERSISTENCE (SEM 6 DATA ALIAS)
   ========================================================================= */

import { focusISO } from "./utils/dates.js";
import { clone, toast } from "./utils/dom.js";
import { buildPlan } from "./engine/planner.js";
import { DEPTS } from "./data/subjects.js";
import { pushCloud, pullCloud, setupRealtimeListener, sanitizeRollNo } from "./sync.js";

// Special data alias for v6 Sem 6: resets sem5 data and forces setup wizard for new users
export const STORE_KEY = "study_plan_v6-sem6";
export const openUnitLists = new Set();

export function defaultCfg() {
  return {
    ready: false,
    dept: "physics",
    sec: "EPD",
    hours: 1,
    maxPerDay: 3,
    revision: 1,
    start: focusISO(),
    days: {},
    done: {},
    custom: [],
    rollNo: ""
  };
}

export let cfg = defaultCfg();
export let prog = { sessions: {} };
export let profiles = {};
export let plan = null;

export const ui = {
  tab: "plan",
  viewDate: null,
  draft: null,
  step: 0,
  wizard: false,
  wizardFromSettings: false,
  dirty: false,
  settingsDraft: false,
  schedDate: null,
  schedDetail: null,
  schedEdit: false,
  schedSel: null,
  schedFocus: null,
  schedSnap: false
};

export function setCfg(nextCfg) {
  cfg = nextCfg;
}

export function setProg(nextProg) {
  prog = nextProg;
}

export function handleRemoteSync(remote) {
  if (!remote || !remote.cfg) return;
  const prevRollNo = cfg.rollNo;
  cfg = { ...defaultCfg(), ...remote.cfg, ready: true };
  if (!cfg.rollNo && remote.rollNo) cfg.rollNo = remote.rollNo;
  prog = { sessions: {}, ...(remote.prog || {}) };
  profiles[cfg.dept] = { cfg: clone(cfg), prog: clone(prog) };
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ active: cfg.dept, profiles }));
  } catch (e) {}
  replan();
  if (typeof window !== "undefined" && window.renderAll) {
    window.renderAll();
  }
}

export async function restoreFromCloud(rollNo) {
  const sanitized = sanitizeRollNo(rollNo);
  if (!sanitized) {
    toast("Please enter a valid Roll Number");
    return false;
  }
  const res = await pullCloud(sanitized);
  if (!res.ok) {
    toast(res.error || `No saved plan found for Roll No "${sanitized}"`);
    return false;
  }
  handleRemoteSync(res.data);
  setupRealtimeListener(sanitized, handleRemoteSync);
  toast(`Settings restored for Roll No ${sanitized}!`);
  return true;
}

export function loadProfile(dept) {
  const p = profiles[dept];
  const sec = (DEPTS[dept] && DEPTS[dept].sec) || (dept === "math" ? "DSP" : "EPD");
  if (p && p.cfg && p.cfg.ready) {
    cfg = { ...defaultCfg(), ...clone(p.cfg), dept, sec };
    prog = { sessions: {}, ...clone(p.prog || {}) };
  } else {
    cfg = { ...defaultCfg(), dept, sec };
    prog = { sessions: {} };
  }
  if (cfg.rollNo) {
    setupRealtimeListener(cfg.rollNo, handleRemoteSync);
  }
}

export function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (raw && raw.profiles) {
      profiles = raw.profiles;
    } else if (raw && raw.cfg) {
      profiles = { [raw.cfg.dept || "physics"]: { cfg: raw.cfg, prog: raw.prog || {} } };
    }
    const active = raw && raw.active && profiles[raw.active] ? raw.active : (Object.keys(profiles).length ? Object.keys(profiles)[0] : null);
    if (active) {
      loadProfile(active);
    } else {
      cfg = defaultCfg();
      prog = { sessions: {} };
    }
    if (cfg.rollNo) {
      setupRealtimeListener(cfg.rollNo, handleRemoteSync);
    }
  } catch (e) {
    /* storage unavailable: run in memory */
    cfg = defaultCfg();
    prog = { sessions: {} };
  }
}

export function save() {
  if (cfg.ready) {
    profiles[cfg.dept] = { cfg: clone(cfg), prog: clone(prog) };
  }
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ active: cfg.dept, profiles }));
  } catch (e) {
    toast("Couldn't save to this browser");
  }
  if (cfg.ready && cfg.rollNo) {
    pushCloud(cfg, prog);
  }
}

export function replan() {
  plan = cfg.ready
    ? buildPlan(cfg)
    : { sessions: [], dates: [], warnings: [], info: {}, slots: 0 };
}
