/* =========================================================================
   STUDY PLAN GENERATION ENGINE (GATE DATA SCIENCE & AI)
   Sequential Phase-by-Phase Execution with Strict Daily Slot Enforcement
   ========================================================================= */

import { SUBJECTS, LAST_EXAM, DEPTS } from "../data/subjects.js";
import { rangeDates, addDays, niceDate, fmtH } from "../utils/dates.js";
import { activeIds, remainingUnits, subj } from "./syllabus.js";

// Master sequence according to the 3-phase pathway
export const COURSE_ORDER = ["LA", "CO", "PS", "PDSA", "DB", "ML", "AI", "GA"];

export const planDates = (c) => rangeDates(c.start, addDays(LAST_EXAM, -1));
export const slotCount = (c, d) => Math.max(0, Math.min(c.maxPerDay, c.days[d] ?? c.maxPerDay));
export const totalSlots = (c, from) => planDates({ ...c, start: from || c.start }).reduce((n, d) => n + slotCount(c, d), 0);

// Sessions each subject needs at the chosen session length.
export function sessionNeeds(c) {
  const out = {};
  activeIds(c).forEach(id => {
    const rem = remainingUnits(c, id);
    const h = rem.reduce((s, u) => s + u.h, 0);
    out[id] = {
      units: rem.length,
      hours: h,
      need: rem.length ? Math.min(rem.length, Math.max(1, Math.ceil(h / c.hours - 1e-9))) : 0
    };
  });
  return out;
}

export function revisionBullets(id) {
  const b = (SUBJECTS[id].revisionBullets || []).map(t =>
    t.replace(/^Full revision:\s*/i, "").replace(/\s*\([^()]*\)\s*$/, "")
  );
  return b.length ? b : ["Revise every unit end to end", "Redo the toughest problems"];
}

export function buildPlan(c) {
  const active = activeIds(c);
  const order = COURSE_ORDER.filter(id => active.includes(id));
  active.forEach(id => { if (!order.includes(id)) order.push(id); });

  const needs = sessionNeeds(c);
  order.forEach(id => {
    if (needs[id].need) {
      needs[id].sessionHours = needs[id].hours / needs[id].need;
    }
  });

  // 1. Build master queue of sessions in sequential course order:
  // Phase 1: Course 1 (LA) -> Course 2 (CO) -> Course 3 (PS)
  // Phase 2: Course 4 (PDSA) -> Course 5 (DB)
  // Phase 3: Course 6 (ML) -> Course 7 (AI) -> Course 8 (GA)
  const queue = [];
  order.forEach(id => {
    const rem = remainingUnits(c, id);
    const totalUnits = SUBJECTS[id].units.length;
    const teachNeed = needs[id].need;
    const s = subj(id, c);
    let idx = 0, cum = 0, covered = (c.done[id] || []).length;
    const totH = rem.reduce((a, u) => a + u.h, 0);

    for (let i = 0; i < teachNeed; i++) {
      const left = teachNeed - 1 - i;
      let chunk = [];
      if (i === teachNeed - 1) {
        chunk = rem.slice(idx);
        idx = rem.length;
      } else {
        const targetH = totH * (i + 1) / teachNeed;
        const targetU = Math.round(rem.length * (i + 1) / teachNeed);
        while (idx < rem.length - left && (chunk.length === 0 || (cum + rem[idx].h / 2 <= targetH && (idx + 1) <= targetU + 1))) {
          chunk.push(rem[idx]);
          cum += rem[idx].h;
          idx++;
        }
      }
      if (i === teachNeed - 1) cum = totH;
      const before = covered;
      covered += chunk.length;
      queue.push({
        subjectId: id,
        type: "teach",
        hours: needs[id].sessionHours ?? c.hours,
        units: chunk,
        before: Math.round(100 * before / totalUnits),
        after: Math.round(100 * covered / totalUnits),
        bullets: null
      });
    }

    if (c.revision > 0 && rem.length > 0) {
      for (let r = 0; r < c.revision; r++) {
        queue.push({
          subjectId: id,
          type: "rev",
          hours: c.hours,
          units: [],
          before: 100,
          after: 100,
          revNo: c.revision > 1 ? `${r + 1}/${c.revision}` : "",
          bullets: revisionBullets(id)
        });
      }
    }
  });

  // 2. Map sessions strictly onto calendar slots (NEVER exceeding slotCount per day)
  let curDate = c.start;
  let curSlot = 0;
  const sessions = [];

  while (slotCount(c, curDate) === 0) {
    curDate = addDays(curDate, 1);
  }

  queue.forEach((item) => {
    if (curSlot >= slotCount(c, curDate)) {
      curDate = addDays(curDate, 1);
      curSlot = 0;
      while (slotCount(c, curDate) === 0) {
        curDate = addDays(curDate, 1);
      }
    }

    sessions.push({
      ...item,
      date: curDate,
      slot: curSlot,
      id: `${curDate}_${item.subjectId}_${item.type}${curSlot}`
    });
    curSlot++;
  });

  // 3. Incompletion & post-exam warning
  const warnings = [];
  const overdue = sessions.filter(s => s.date >= LAST_EXAM);
  if (overdue.length > 0) {
    const overdueH = overdue.reduce((sum, s) => sum + s.hours, 0);
    const overdueSubjs = [...new Set(overdue.map(s => subj(s.subjectId, c).shortName))];
    const finishDate = sessions[sessions.length - 1].date;
    warnings.push(`Your plan extends past the GATE exam date (14 Feb 2027) to ${niceDate(finishDate)}. ${overdue.length} sessions (${fmtH(overdueH)}h) across ${overdueSubjs.join(", ")} will take place after the exam. Please increase your daily sessions or session hours in Settings to complete the syllabus before the exam.`);
  }

  const info = {};
  order.forEach(id => {
    const mine = sessions.filter(x => x.subjectId === id);
    info[id] = {
      total: SUBJECTS[id].units.length,
      done: (c.done[id] || []).length,
      sessions: mine.length,
      teach: mine.filter(x => x.type === "teach").length,
      rev: mine.filter(x => x.type === "rev").length,
      hours: mine.reduce((a, x) => a + x.hours, 0)
    };
  });

  return {
    sessions,
    dates: [...new Set(sessions.map(s => s.date))],
    warnings,
    info,
    slots: sessions.length
  };
}
