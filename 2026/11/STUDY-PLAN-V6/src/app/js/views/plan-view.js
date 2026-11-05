/* =========================================================================
   PLAN VIEW (Roadmap Calendar Grid)
   ========================================================================= */

import { DEPTS } from "../data/subjects.js";
import { ICON } from "../data/icons.js";
import { $, esc, emptyHtml } from "../utils/dom.js";
import { focusISO, todayISO, parse, iso, niceDate, fmtH, dayNum, wdShort, monName } from "../utils/dates.js";
import { exportPng } from "../utils/export-image.js";
import { examsOf, subj, colorStyle } from "../engine/syllabus.js";
import { planDates } from "../engine/planner.js";
import { cfg, prog, plan, ui } from "../state.js";
import { switchTab } from "../main.js";

export function sessionsOn(d) {
  return plan.sessions.filter(s => s.date === d);
}

export function defaultViewDate() {
  const f = focusISO();
  return plan.dates.find(d => d >= f) || plan.dates[plan.dates.length - 1] || f;
}

export function renderPlan() {
  const root = $("#view-plan");
  if (!cfg.ready) {
    root.innerHTML = emptyHtml();
    return;
  }
  const f = focusISO();
  const exams = {};
  examsOf(cfg).forEach(s => (exams[s.examDate] = exams[s.examDate] || []).push(s));
  const days = [...new Set([...planDates(cfg), ...Object.keys(exams).filter(d => d >= cfg.start)])].sort();
  const totalS = plan.sessions.length;
  const revN = plan.sessions.filter(s => s.type === "rev").length;

  let html = `<div class="plan-toolbar"><p class="muted">Tap a day to open its study card.</p></div>`;
  html += `<div id="plan-export">
    <div class="pe-head">
      <div>
        <div class="pe-kicker">Your study roadmap · ${parse(cfg.start).getFullYear()}</div>
        <h2>${esc(DEPTS[cfg.dept].label)}</h2>
        <p>${niceDate(days[0] || cfg.start)} — ${niceDate(days[days.length - 1] || cfg.start)} <span> / </span> Day by day</p>
      </div>
      <div class="pe-chips">
        <span><b>${totalS}</b> sessions</span>
        <span><b>${fmtH(plan.sessions.reduce((a, s) => a + s.hours, 0))}</b> hours</span>
        <span><b>${revN}</b> revision</span>
      </div>
    </div>
    <div class="pe-body">
      <div class="plan-key"><span>THE DAILY SCHEDULE</span><span><b class="rev-tag">REV</b> Revision session</span></div>`;

  let weekKey = null;
  days.forEach(d => {
    const dt = parse(d), mon = new Date(dt);
    mon.setDate(dt.getDate() - ((dt.getDay() + 6) % 7));
    const wk = iso(mon);
    if (wk !== weekKey) {
      if (weekKey) html += `</div>`;
      weekKey = wk;
      html += `<div class="week-label">Week of ${niceDate(wk)}</div><div class="day-grid">`;
    }
    const ss = sessionsOn(d), ex = exams[d] || [];
    const cls = ["dcell", d === f ? "today" : "", d < f ? "past" : "", ex.length ? "examonly" : ""].join(" ");
    html += `<button class="${cls}" data-d="${d}">
      <div class="top">
        <span class="num">${dayNum(d)}</span>
        <span class="wd">${wdShort(d)} · ${monName(d)}</span>
        ${d === f ? `<span class="flag no-export">${todayISO() === f ? "TODAY" : "NEXT"}</span>` : ""}
      </div>
      ${ss.map(s => `<div class="pill ${prog.sessions[s.id] ? "done" : ""}" style="${colorStyle(s.subjectId)}">
        <span class="nm">${esc(subj(s.subjectId, cfg).shortName)}</span>
        ${s.type === "rev" ? `<span class="rev-tag">REV</span>` : ""}
        <span class="hr">${fmtH(s.hours)}h</span>
      </div>`).join("")}
      ${!ss.length && !ex.length ? `<div class="rest-label">Rest & recharge</div>` : ""}
      ${ex.map(s => `<div class="exam-badge">${ICON.exam}<span>${esc(s.shortName)} exam</span></div>`).join("")}
    </button>`;
  });

  if (weekKey) html += `</div>`;
  html += `</div><div class="pe-foot">STUDY PLAN &middot; ${esc(DEPTS[cfg.dept].label.toUpperCase())}</div></div>`;
  html += `<div class="plan-bottom"><button class="btn primary" id="dl-plan">${ICON.dl} Download plan</button></div>`;

  if (!days.length) {
    html = emptyHtml("No study days left", "All exam dates have passed or no sessions are scheduled. Re-run the setup from Settings.");
  }

  const keepY = window.scrollY;
  root.innerHTML = html;
  window.scrollTo({ top: keepY, behavior: "instant" });

  root.querySelectorAll(".dcell").forEach(b => b.onclick = () => {
    ui.viewDate = b.dataset.d;
    switchTab("day");
  });

  const dl = $("#dl-plan");
  if (dl) dl.onclick = () => exportPng($("#plan-export"), "Study-Plan.png", 1120);
}
