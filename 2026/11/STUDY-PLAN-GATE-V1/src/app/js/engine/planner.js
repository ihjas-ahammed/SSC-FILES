/* =========================================================================
   STUDY PLAN GENERATION ENGINE (GATE DATA SCIENCE & AI)
   Sequential Phase-by-Phase Execution with Final Revision Sprint Before Exam
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

  // 1. Build teaching queue in sequential course order (Phase 1 -> Phase 2 -> Phase 3)
  // No revision is mixed into courses here; teaching finishes completely course by course.
  const teachQueue = [];
  order.forEach(id => {
    const rem = remainingUnits(c, id);
    const totalUnits = SUBJECTS[id].units.length;
    const teachNeed = needs[id].need;
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
      teachQueue.push({
        subjectId: id,
        type: "teach",
        hours: needs[id].sessionHours ?? c.hours,
        units: chunk,
        before: Math.round(100 * before / totalUnits),
        after: Math.round(100 * covered / totalUnits),
        bullets: null
      });
    }
  });

  // 2. Build revision queue for the final days before the GATE exam
  const revQueue = [];
  if (c.revision > 0) {
    for (let r = 0; r < c.revision; r++) {
      order.forEach(id => {
        if (needs[id].need > 0) {
          revQueue.push({
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
      });
    }
  }

  // 3. Pre-exam slots calculation (all days from c.start up to the day before LAST_EXAM)
  const preExamDates = rangeDates(c.start, addDays(LAST_EXAM, -1));
  const preExamSlots = [];
  preExamDates.forEach(d => {
    for (let s = 0; s < slotCount(c, d); s++) preExamSlots.push({ date: d, slot: s });
  });

  const sessions = [];
  const totalNeeded = teachQueue.length + revQueue.length;

  if (preExamSlots.length >= totalNeeded) {
    // Both teaching and revision fit comfortably before the exam!
    // Revision sessions are placed in the FINAL slots immediately preceding the exam date.
    const revStartIndex = preExamSlots.length - revQueue.length;

    // Teaching sessions fill sequentially from Day 1
    teachQueue.forEach((item, i) => {
      const slotObj = preExamSlots[i];
      sessions.push({
        ...item,
        date: slotObj.date,
        slot: slotObj.slot,
        id: `${slotObj.date}_${item.subjectId}_${item.type}${slotObj.slot}`
      });
    });

    // Revision sessions occupy the final days before the exam
    revQueue.forEach((item, i) => {
      const slotObj = preExamSlots[revStartIndex + i];
      sessions.push({
        ...item,
        date: slotObj.date,
        slot: slotObj.slot,
        id: `${slotObj.date}_${item.subjectId}_${item.type}${slotObj.slot}`
      });
    });
  } else {
    // Schedule slots are constrained (e.g. 1 session/day, or late start).
    // Allocate sequentially: teaching first, then revision follows when syllabus is complete.
    let curDate = c.start;
    let curSlot = 0;
    while (slotCount(c, curDate) === 0) {
      curDate = addDays(curDate, 1);
    }

    const fullQueue = [...teachQueue, ...revQueue];
    fullQueue.forEach(item => {
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
  }

  sessions.sort((a, b) => a.date.localeCompare(b.date) || a.slot - b.slot);

  // 4. Incompletion & post-exam warning
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
