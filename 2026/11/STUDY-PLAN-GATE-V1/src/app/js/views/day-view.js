/* =========================================================================
   DAY VIEW (Daily Study Card & Topic Lists)
   ========================================================================= */

import { DEPTS, SUBJECTS, LAST_EXAM } from "../data/subjects.js";
import { ICON, SUBJECT_SVGS } from "../data/icons.js";
import { $, esc, emptyHtml } from "../utils/dom.js";
import { focusISO, wdShort, wdName, dayNum, monName, parse, daysBetween, fmtH, niceDate, hrs } from "../utils/dates.js";
import { exportPng } from "../utils/export-image.js";
import { examsOf, subj, cleanUnit, colorStyle } from "../engine/syllabus.js";
import { cfg, prog, plan, ui, save } from "../state.js";
import { sessionsOn, defaultViewDate } from "./plan-view.js";
import { renderAll } from "../main.js";

export function renderDay() {
  const root = $("#view-day");
  if (!cfg.ready) {
    root.innerHTML = emptyHtml();
    return;
  }
  if (!plan.dates.length) {
    root.innerHTML = emptyHtml("Nothing scheduled", "There are no sessions in your plan.");
    return;
  }
  if (!ui.viewDate || !plan.dates.includes(ui.viewDate)) {
    ui.viewDate = defaultViewDate();
  }
  const d = ui.viewDate, f = focusISO();
  const idx = plan.dates.indexOf(d);

  root.innerHTML = `
    <div class="day-nav">
      <button class="iconbtn" id="d-prev" aria-label="Previous day" ${idx <= 0 ? "disabled" : ""}>${ICON.left}</button>
      <div class="chip-scroll" id="chips">${plan.dates.map(x => {
        const ss = sessionsOn(x);
        return `<button class="dchip ${x === d ? "active" : ""} ${x < f ? "past" : ""}" data-d="${x}">
          <div class="w">${wdShort(x)}</div>
          <div class="n">${dayNum(x)}</div>
          <div class="d">${ss.map(s => `<i style="background:${SUBJECTS[s.subjectId].theme.border}"></i>`).join("")}</div>
        </button>`;
      }).join("")}</div>
      <button class="iconbtn" id="d-next" aria-label="Next day" ${idx >= plan.dates.length - 1 ? "disabled" : ""}>${ICON.right}</button>
    </div>
    <div class="stage"><div id="card-slot"><div id="day-card-wrap">${dayCardHtml(d)}</div></div></div>
    <div class="day-actions">
      <button class="btn primary" id="d-dl">${ICON.dl} Download as image</button>
      <button class="btn" id="d-all">${ICON.check} Mark day ${sessionsOn(d).every(s => prog.sessions[s.id]) ? "not done" : "done"}</button>
    </div>`;

  root.querySelectorAll(".dchip").forEach(b => b.onclick = () => {
    ui.viewDate = b.dataset.d;
    renderDay();
  });

  $("#d-prev").onclick = () => { ui.viewDate = plan.dates[idx - 1]; renderDay(); };
  $("#d-next").onclick = () => { ui.viewDate = plan.dates[idx + 1]; renderDay(); };
  $("#d-dl").onclick = () => exportPng($("#day-card"), `Study-Card-${d}.png`);

  $("#d-all").onclick = () => {
    const ss = sessionsOn(d), all = ss.every(s => prog.sessions[s.id]);
    ss.forEach(s => all ? delete prog.sessions[s.id] : (prog.sessions[s.id] = true));
    save();
    renderAll();
  };

  root.querySelectorAll(".ds-check").forEach(b => b.onclick = () => {
    const sid = b.dataset.sid;
    prog.sessions[sid] ? delete prog.sessions[sid] : (prog.sessions[sid] = true);
    save();
    renderAll();
  });

  const act = $(".dchip.active"), chips = $("#chips");
  if (act) chips.scrollLeft = act.offsetLeft - chips.offsetLeft - (chips.clientWidth - act.offsetWidth) / 2;
  fitTopicLists();
}

// Limit only the mobile preview; export clones always display the full list.
export function fitTopicLists() {
  const mobile = window.matchMedia("(max-width:600px)").matches;
  document.querySelectorAll("#day-card:not(.exporting) .ds-body ul").forEach(list => {
    const items = list.children;
    const scrollable = mobile && items.length > 3;
    if (scrollable) {
      const height = items[2].getBoundingClientRect().bottom - items[0].getBoundingClientRect().top;
      list.style.setProperty("--topic-height", Math.ceil(height) + "px");
      list.tabIndex = 0;
      list.setAttribute("aria-label", "Topics — scroll for more");
    } else {
      list.style.removeProperty("--topic-height");
      list.removeAttribute("tabindex");
      list.removeAttribute("aria-label");
    }
    list.closest(".ds-body").classList.toggle("has-more-topics", scrollable);
  });
}

export function dayCardHtml(d) {
  const ss = sessionsOn(d);
  const idx = plan.dates.indexOf(d) + 1;
  const hoursDay = ss.reduce((a, s) => a + s.hours, 0);
  const doneN = ss.filter(s => prog.sessions[s.id]).length;
  const pct = ss.length ? Math.round(doneN / ss.length * 100) : 0;
  const exToday = examsOf(cfg).filter(s => s.examDate === d);
  const upcoming = examsOf(cfg).filter(s => s.examDate >= d);
  const next = upcoming[0];
  const toNext = next ? daysBetween(d, next.examDate) : null;
  const R = 31, C = 2 * Math.PI * R;
  const n = ss.length;
  const cols = n <= 1 ? 1 : n === 2 ? 2 : n === 3 ? 3 : n === 4 ? 2 : 3;
  const W = cols === 1 ? 680 : cols === 2 ? 1080 : 1320;

  const sessionHtml = ss.map((s, i) => {
    const sub = subj(s.subjectId, cfg);
    const done = !!prog.sessions[s.id];
    const bullets = s.type === "rev"
      ? s.bullets.map(b => `<li><span class="dot"></span><span class="tx">${esc(b)}</span></li>`).join("")
      : s.units.map(u => `<li><span class="dot" aria-hidden="true"></span><span class="tx">${esc(cleanUnit(u.text))}</span></li>`).join("");
    const cov = s.type === "rev"
      ? `<div class="cov-row"><span>Full-syllabus revision</span><strong>REV</strong></div><div class="cov-bar"><div class="after" style="width:100%"></div></div>`
      : `<div class="cov-row"><span>Course coverage<small>After this session</small></span><strong>${s.after}%</strong></div>
         <div class="cov-bar"><div class="after" style="width:${s.after}%"></div></div>`;

    return `<section class="ds ${done ? "done" : ""}" style="${colorStyle(s.subjectId)}">
      <div class="ds-head">
        <div class="ds-ic">${SUBJECT_SVGS[sub.iconId]}</div>
        <div class="ds-t">
          <h3>${esc(sub.name)}${s.type === "rev" ? `<span class="rev-tag">Revision${s.revNo ? " " + s.revNo : ""}</span>` : ""}</h3>
          <div class="session-hours">${fmtH(s.hours)} ${s.hours === 1 ? "hour" : "hours"}</div>
          <p>Session ${i + 1} · exam ${niceDate(sub.examDate)}</p>
        </div>
        <span class="ds-stamp no-export">DONE</span>
        <button class="ds-check no-export ${done ? "on" : ""}" data-sid="${s.id}" aria-label="Toggle done">${ICON.check}</button>
      </div>
      <div class="ds-body"><ul>${bullets}</ul></div>
      <div class="ds-cov">${cov}</div>
    </section>`;
  }).join("");

  const foot = upcoming.length
    ? `<div class="dc-foot"><h4>${ICON.exam}Exams ahead</h4><div class="ex-list">${upcoming.slice(0, 6).map(s => {
        const n = daysBetween(d, s.examDate);
        return `<div class="ex-row"><i style="background:${s.theme.border}"></i><span class="ex-name">${esc(s.name)}</span><span class="dd">${niceDate(s.examDate)} · ${n === 0 ? "today" : n + "d"}</span></div>`;
      }).join("")}</div></div>`
    : "";

  return `<div class="dcard ${cols > 1 ? "land" : ""}" id="day-card" data-export-width="${W}" style="--card-width:${W}px;--cols:${cols}">
    <div class="dc-head">
      <svg class="notebook-sprig" aria-hidden="true" viewBox="0 0 100 110" fill="none"><path d="M50 97C53 67 61 40 78 14" stroke="#287453" stroke-width="3"/><path d="M58 65C34 63 23 48 24 31C47 34 60 45 58 65Z" fill="#40956A" stroke="#246748" stroke-width="2"/><path d="M64 48C86 48 96 34 93 20C74 23 63 33 64 48Z" fill="#68AC75" stroke="#246748" stroke-width="2"/><path d="M73 25C58 22 53 12 57 3C72 7 77 15 73 25Z" fill="#40956A" stroke="#246748" stroke-width="2"/><path d="M51 87C30 84 19 71 22 58C40 61 51 72 51 87Z" fill="#68AC75" stroke="#246748" stroke-width="2"/><path d="M20 16L15 8M12 25L3 22" stroke="#F7B628" stroke-width="4" stroke-linecap="round"/></svg>
      <div class="dc-date"><div class="mon">${monName(d).toUpperCase()}</div><div class="num">${dayNum(d)}</div></div>
      <div class="dc-meta">
        <div class="wd">${wdName(d)}</div>
        <div class="sub">${monName(d)} ${parse(d).getFullYear()} · Study day ${idx} of ${plan.dates.length}</div>
        <div class="dc-chips">
          <span class="dc-chip">${ss.length} session${ss.length === 1 ? "" : "s"}</span>
          <span class="dc-chip">${hrs(hoursDay)}</span>
          ${next && toNext > 0 ? `<span class="dc-chip gold">${esc(next.shortName)} exam in ${toNext}d</span>` : (d >= LAST_EXAM ? `<span class="dc-chip" style="background:#ef4444; color:#fff;">Post-Exam Day</span>` : "")}
        </div>
      </div>
      <div class="ring no-export">
        <svg width="74" height="74" viewBox="0 0 74 74">
          <circle cx="37" cy="37" r="${R}" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="7"/>
          <circle cx="37" cy="37" r="${R}" fill="none" stroke="#FBBF24" stroke-width="7" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct / 100)}"/>
        </svg>
        <b>${pct}%</b>
      </div>
    </div>
    ${exToday.length ? `<div class="exam-banner">${ICON.exam}Exam today: ${exToday.map(s => esc(s.name)).join(" · ")}</div>` : ""}
    ${d >= LAST_EXAM ? `<div class="no-export" style="margin: 8px 16px 12px; padding: 10px 14px; border-radius: 8px; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.4); color: #f87171; font-size: 0.88rem; display: flex; align-items: center; gap: 8px;"><span>⚠️</span><span><b>Post-Exam Session:</b> This session is scheduled on or after the GATE exam (14 Feb 2027). Increase your daily sessions in Settings to complete before the exam.</span></div>` : ""}
    <div class="dc-sessions">${sessionHtml}</div>
    ${foot}
    <div class="dc-brand">STUDY PLAN · ${esc(DEPTS[cfg.dept].label.toUpperCase())}</div>
  </div>`;
}
