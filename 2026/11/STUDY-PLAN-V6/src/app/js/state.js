/* =========================================================================
   APPLICATION STATE & LOCALSTORAGE PERSISTENCE
   ========================================================================= */

import { focusISO } from "./utils/dates.js";
import { clone, toast } from "./utils/dom.js";
import { buildPlan } from "./engine/planner.js";

export const STORE_KEY = "study_plan_v4_fresh";
export const openUnitLists = new Set();

export function defaultCfg() {
  return {
    ready: false,
    dept: "physics",
    sec: "SEC_PHY",
    secName: "",
    hours: 1,
    maxPerDay: 3,
    secSessions: 3,
    revision: 1,
    start: focusISO(),
    days: {},
    done: {},
    custom: []
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

// v5 auto-setup: with no saved profile, start a ready Physics profile with default rules so wizard is skipped.
export function autoSetup() {
  if (Object.keys(profiles).length) return;
  profiles.physics = {
    cfg: { ...defaultCfg(), dept: "physics", ready: true },
    prog: { sessions: {} }
  };
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ active: "physics", profiles }));
  } catch (e) {
    /* storage unavailable: keep in memory */
  }
}

export function loadProfile(dept) {
  const p = profiles[dept];
  if (p && p.cfg && p.cfg.ready) {
    cfg = { ...defaultCfg(), ...clone(p.cfg) };
    prog = { sessions: {}, ...clone(p.prog || {}) };
  } else {
    cfg = { ...defaultCfg(), dept };
    prog = { sessions: {} };
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
    autoSetup();
    const active = raw && raw.active && profiles[raw.active] ? raw.active : Object.keys(profiles)[0];
    if (active) loadProfile(active);
  } catch (e) {
    /* storage unavailable: run in memory */
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
}

export function replan() {
  plan = cfg.ready
    ? buildPlan(cfg)
    : { sessions: [], dates: [], warnings: [], info: {}, slots: 0 };
}
