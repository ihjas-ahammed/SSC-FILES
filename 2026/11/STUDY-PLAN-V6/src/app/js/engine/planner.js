/* =========================================================================
   STUDY PLAN GENERATION ENGINE
   ========================================================================= */

import { SUBJECTS, LAST_EXAM } from "../data/subjects.js";
import { rangeDates, addDays } from "../utils/dates.js";
import { activeIds, remainingUnits, subj } from "./syllabus.js";

export const planDates = (c) => rangeDates(c.start, addDays(LAST_EXAM, -1));
export const slotCount = (c, d) => Math.max(0, Math.min(c.maxPerDay, c.days[d] ?? c.maxPerDay));
export const totalSlots = (c, from) => planDates({ ...c, start: from || c.start }).reduce((n, d) => n + slotCount(c, d), 0);

// Sessions each subject needs at the chosen session length (SEC uses the number the user asked for).
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
  if (out[c.sec].units) out[c.sec].need = Math.min(c.secSessions, out[c.sec].units);
  return out;
}

export function revisionBullets(id) {
  const b = (SUBJECTS[id].revisionBullets || []).map(t =>
    t.replace(/^Full revision:\s*/i, "").replace(/\s*\([^()]*\)\s*$/, "")
  );
  return b.length ? b : ["Revise every unit end to end", "Redo the toughest problems"];
}

export function buildPlan(c) {
  const ids = activeIds(c);
  const dates = planDates(c);
  const slots = [];
  dates.forEach(d => {
    for (let i = 0; i < slotCount(c, d); i++) slots.push({ date: d, slot: i });
  });
  const T = slots.length;
  const needs = sessionNeeds(c);

  // A subject's teaching sessions never exceed the session length, so its hours are spread over
  // ceil(hours / length) sessions. If the slots cannot hold all of that, the shortfall is reported.
  ids.filter(id => id !== c.sec && needs[id].need).forEach(id => {
    needs[id].sessionHours = needs[id].hours / needs[id].need;
  });

  const demand = ids.reduce((s, id) => s + needs[id].need + (needs[id].units ? c.revision : 0), 0);
  const shortfall = demand > T
    ? `Not enough slots: ${demand} sessions needed, ${T} available at ${c.maxPerDay} per day. Extra sessions go over the daily limit.`
    : null;

  const deadline = id => SUBJECTS[id].examDate;
  // SEC and the Elective 2 subjects (Materials Science, Machine Learning I) are placed only on 30 Oct to 1 Nov.
  const inWindow = (id, date) =>
    (id === c.sec || id === "MS" || id === "ML")
      ? (date >= "2026-10-30" && date <= "2026-11-01" && date < deadline(id))
      : date < deadline(id);

  const order = ids.slice().sort((a, b) => SUBJECTS[a].examDate.localeCompare(SUBJECTS[b].examDate));
  const placed = Object.fromEntries(ids.map(id => [id, []]));
  const assignments = Array(T).fill(null);
  const firstTeach = {}, firstRev = {};
  const assign = (i, id, type) => { assignments[i] = { id, type }; };

  // Keep at least one teaching session for every unfinished subject, then reserve
  // revision nearest its exam. Revision must not disappear when teaching is heavy.
  order.forEach(id => {
    if (!needs[id].need) return;
    const i = slots.findIndex((slot, j) => !assignments[j] && inWindow(id, slot.date));
    if (i >= 0) { assign(i, id, "teach"); firstTeach[id] = i; }
  });

  for (let round = 0; round < c.revision; round++) {
    order.forEach(id => {
      if (needs[id].need && firstTeach[id] === undefined) return;
      for (let i = T - 1; i >= 0; i--) {
        const sameDayRev = assignments.some((a, j) => a && a.id === id && a.type === "rev" && slots[j].date === slots[i].date);
        if (!assignments[i] && !sameDayRev && inWindow(id, slots[i].date) && i > (firstTeach[id] ?? -1)) {
          assign(i, id, "rev"); firstRev[id] = i; break;
        }
      }
    });
  }

  const teachCounts = Object.fromEntries(ids.map(id => [id, firstTeach[id] === undefined ? 0 : 1]));
  let curDate = null, usedToday = new Set();

  slots.forEach((slot, i) => {
    if (slot.date !== curDate) { curDate = slot.date; usedToday = new Set(); }
    if (!assignments[i]) {
      let best = null, bestScore = -1;
      order.forEach(id => {
        if (teachCounts[id] >= needs[id].need || !inWindow(id, slot.date) || i >= (firstRev[id] ?? T)) return;
        const left = slots.reduce((n, next, j) => n + (j >= i && !assignments[j] && inWindow(id, next.date) && j < (firstRev[id] ?? T) ? 1 : 0), 0);
        let score = (needs[id].need - teachCounts[id]) / Math.max(1, left);
        if (usedToday.has(id)) score *= 0.7;
        if (score > bestScore) { best = id; bestScore = score; }
      });
      if (best) { assign(i, best, "teach"); teachCounts[best]++; }
    }
    if (assignments[i]) {
      const { id, type } = assignments[i];
      placed[id].push({ date: slot.date, slot: slot.slot, type });
      usedToday.add(id);
    }
  });

  // Session counts and hours are preferences, not limits on syllabus coverage.
  // Add any missing teaching/revision before each upcoming exam.
  const extraSlot = date => Math.max(-1, ...Object.values(placed).flat().filter(p => p.date === date).map(p => p.slot)) + 1;
  const dayLoad = date => Object.values(placed).flat().filter(p => p.date === date).length;
  const freeDay = (days, id, type) =>
    days.find(date => dayLoad(date) < slotCount(c, date) && !(type && placed[id].some(p => p.date === date && p.type === type)));

  ids.forEach(id => {
    const available = dates.filter(date => inWindow(id, date));
    if (!available.length) return;
    const selected = available.filter(date => slotCount(c, date) > 0);
    const studyDays = selected.length ? selected : [available[available.length - 1]];
    const mine = placed[id];

    if (needs[id].need && !mine.some(p => p.type === "teach")) {
      const order = [...studyDays, ...available];
      const date = freeDay(order, id, "teach") ?? freeDay(order, id, null) ?? studyDays[0];
      mine.push({ date, slot: extraSlot(date), type: "teach" });
    }
    const missing = Math.max(0, c.revision - mine.filter(p => p.type === "rev").length);
    for (let pass = 0; pass < missing; pass++) {
      const order = [...studyDays, ...available].reverse();
      const date = freeDay(order, id, "rev") ?? freeDay(order, id, null) ?? studyDays[studyDays.length - 1];
      mine.push({ date, slot: extraSlot(date), type: "rev" });
    }
    mine.sort((a, b) => a.date.localeCompare(b.date) || a.slot - b.slot);
  });

  // Hand units to teaching sessions in order
  const sessions = [];
  ids.forEach(id => {
    const s = subj(id, c);
    const rem = remainingUnits(c, id);
    const total = SUBJECTS[id].units.length;
    const teach = placed[id].filter(p => p.type === "teach");
    let idx = 0, cum = 0, covered = (c.done[id] || []).length;
    const totH = rem.reduce((a, u) => a + u.h, 0);

    teach.forEach((p, i) => {
      const left = teach.length - 1 - i;
      let chunk = [];
      if (i === teach.length - 1) {
        chunk = rem.slice(idx);
        idx = rem.length;
      } else {
        const target = totH * (i + 1) / teach.length;
        while (idx < rem.length - left && (chunk.length === 0 || cum + rem[idx].h / 2 <= target)) {
          chunk.push(rem[idx]);
          cum += rem[idx].h;
          idx++;
        }
      }
      if (i === teach.length - 1) cum = totH;
      const before = covered;
      covered += chunk.length;
      p.units = chunk;
      p.before = Math.round(100 * before / total);
      p.after = Math.round(100 * covered / total);
    });

    placed[id].forEach((p, i, arr) => {
      const n = arr.slice(0, i + 1).filter(x => x.date === p.date && x.type === p.type).length;
      sessions.push({
        id: `${p.date}_${id}_${p.type}${n}`,
        date: p.date,
        slot: p.slot,
        subjectId: id,
        type: p.type,
        hours: p.type === "teach" ? needs[id].sessionHours ?? c.hours : c.hours,
        units: p.units || [],
        before: p.before ?? 100,
        after: p.after ?? 100,
        bullets: p.type === "rev" ? revisionBullets(id, s) : null
      });
    });

    // Revision numbering ("Revision 1/2")
    sessions
      .filter(x => x.subjectId === id && x.type === "rev")
      .sort((a, b) => a.date.localeCompare(b.date) || a.slot - b.slot)
      .forEach((x, i, arr) => { x.revNo = arr.length > 1 ? `${i + 1}/${arr.length}` : ""; });
  });

  sessions.sort((a, b) => a.date.localeCompare(b.date) || a.slot - b.slot);

  const info = {};
  ids.forEach(id => {
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
    warnings: shortfall ? [shortfall] : [],
    info,
    slots: Math.max(T, sessions.length)
  };
}
