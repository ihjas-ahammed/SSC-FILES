/* =========================================================================
   SCHEDULE TAB (24-Hr Calendar Grid, Drag/Resize/Swipe & Context Menu)
   ========================================================================= */

import { SUBJECTS } from "../data/subjects.js";
import { ICON } from "../data/icons.js";
import { $, esc, emptyHtml, toast } from "../utils/dom.js";
import {
  todayISO, now, wdName, niceDate, parse, addDays, hm,
  SCH_PX_H, SCH_PX_MIN, SCH_GUT, SCH_SNAP, SCH_EDGE,
  toMin, hhmm, snapMin, clampMin, durMin
} from "../utils/dates.js";
import { cfg, ui, save } from "../state.js";
import { openSessionDialog } from "./session-modal.js";
import { ssFill } from "./session-detail-view.js";

export function customOn(d) {
  return (cfg.custom || [])
    .filter(x => x.date === d && x.start && x.end)
    .sort((a, b) => toMin(a.start) - toMin(b.start));
}

export function layoutBlocks(list) {
  // Overlapping sessions sit side by side in columns, as in Google Calendar
  const cols = [], out = [];
  list.forEach(x => {
    let c = cols.findIndex(end => toMin(x.start) >= end);
    if (c < 0) { c = cols.length; cols.push(0); }
    cols[c] = toMin(x.end);
    out.push({ x, c });
  });
  const n = Math.max(1, cols.length);
  return out.map(o => ({ ...o, n }));
}

export function blockStyle(top, height, c, n) {
  const left = `calc(${SCH_GUT}px + (100% - ${SCH_GUT + 8}px) * ${c} / ${n})`;
  const width = `calc((100% - ${SCH_GUT + 8}px) / ${n} - 4px)`;
  return `top:${top}px;height:${height}px;left:${left};width:${width}`;
}

export function renderScheduleTab() {
  const root = $("#view-schedule");
  if (!cfg.ready) {
    root.innerHTML = emptyHtml();
    return;
  }
  if (ui.schedDetail) {
    const det = (cfg.custom || []).find(v => v.id === ui.schedDetail);
    if (det) {
      root.innerHTML = `
        <div class="ss-toolbar">
          <button class="btn" id="s-back">${ICON.left} Back</button>
          <div class="ss-toolbar-r">
            <button class="btn" id="s-edit">Edit</button>
            <button class="btn danger" id="s-del">Delete</button>
          </div>
        </div>
        <div id="ss-slot"></div>`;
      document.getElementById("ss-slot").appendChild(document.getElementById("ss-template").content.cloneNode(true));
      $("#s-back").onclick = () => { ui.schedDetail = null; renderScheduleTab(); };
      $("#s-edit").onclick = () => openSessionDialog(det.date, det);
      $("#s-del").onclick = () => deleteSession(det, det.date);
      ssFill(det);
      return;
    }
    ui.schedDetail = null;
  }

  if (!ui.schedDate) ui.schedDate = todayISO();
  const d = ui.schedDate, isToday = d === todayISO(), ss = customOn(d);
  const totalMin = ss.reduce((t, x) => t + durMin(x), 0);
  const hours = Array.from({ length: 24 }, (_, h) =>
    `<div class="sch-hr" style="top:${h * SCH_PX_H}px"><span>${String(h).padStart(2, "0")}:00</span></div>`
  ).join("");

  const blocks = layoutBlocks(ss).map(({ x, c, n }) => {
    const top = toMin(x.start) * SCH_PX_MIN, height = Math.max(30, durMin(x) * SCH_PX_MIN - 2);
    return `<div class="sch-blk ${x.done ? "done" : ""} ${ui.schedSel === x.id ? "sel" : ""}" data-id="${x.id}" style="${blockStyle(top, height, c, n)};--bg2:${SUBJECTS[x.subjectId].theme.bannerBg};--bd:${SUBJECTS[x.subjectId].theme.border}">
      <span class="bt">${esc(x.name)}</span>
      <span class="bm">${x.start}–${x.end} · ${x.units.length} unit${x.units.length === 1 ? "" : "s"}</span>
      ${x.done ? `<span class="sch-stamp">DONE</span>` : ""}
      ${ui.schedSel === x.id ? `<span class="sch-grip top"></span><span class="sch-grip bot"></span>` : ""}
      <button class="sch-edit-btn" data-id="${x.id}" aria-label="Edit session">
        <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
      </button>
    </div>`;
  }).join("");

  const nowMin = now().getHours() * 60 + now().getMinutes();
  root.innerHTML = `
    <div class="sch-top">
      <span class="sch-title">Schedule</span>
      <button class="btn ${ui.schedEdit ? "primary" : ""}" id="s-edit">${ui.schedEdit ? "Done" : "Edit"}</button>
    </div>
    <div class="day-nav">
      <button class="iconbtn" id="s-prev" aria-label="Previous day">${ICON.left}</button>
      <button class="sch-date ${isToday ? "live" : ""}" id="s-pick" aria-label="Pick date">
        <span class="k">${isToday ? "Today" : wdName(d)}</span>
        <span class="v">${niceDate(d)} ${parse(d).getFullYear()}</span>
      </button>
      <button class="iconbtn" id="s-next" aria-label="Next day">${ICON.right}</button>
    </div>
    <div class="sch-stats">
      <span><b>${ss.length}</b> session${ss.length === 1 ? "" : "s"}</span>
      <span><b>${hm(totalMin / 60)}</b> planned</span>
    </div>
    <div class="sch-grid" id="s-grid" style="height:${24 * SCH_PX_H}px">
      ${hours}${blocks}${isToday ? `<div class="sch-now" style="top:${nowMin * SCH_PX_MIN}px"></div>` : ""}
    </div>
    <p class="sch-foot">Drag an empty slot to add a session. Drag a session to move it, or drag its top or bottom edge to resize. Swipe left or right-click to delete. Tap Edit, then a session, to change it. Times snap to 15 minutes.</p>`;

  $("#s-edit").onclick = () => {
    ui.schedEdit = !ui.schedEdit;
    renderScheduleTab();
  };

  root.querySelectorAll(".sch-edit-btn").forEach(b => b.onclick = (ev) => {
    ev.stopPropagation();
    const x = cfg.custom.find(v => v.id === b.dataset.id);
    if (x) openSessionDialog(d, x);
  });

  $("#s-prev").onclick = () => { ui.schedDate = addDays(d, -1); renderScheduleTab(); };
  $("#s-next").onclick = () => { ui.schedDate = addDays(d, 1); renderScheduleTab(); };

  $("#s-pick").onclick = () => {
    const inp = document.createElement("input");
    inp.type = "date";
    inp.value = d;
    inp.style.cssText = "position:fixed;opacity:0;pointer-events:none;left:50%;top:50%";
    document.body.appendChild(inp);
    inp.onchange = () => {
      if (inp.value) ui.schedDate = inp.value;
      inp.remove();
      renderScheduleTab();
    };
    inp.onblur = () => setTimeout(() => inp.remove(), 200);
    (inp.showPicker ? inp.showPicker() : inp.click());
  };

  const grid = $("#s-grid");
  if (ui.schedFocus != null) {
    const m = ui.schedFocus;
    ui.schedFocus = null;
    requestAnimationFrame(() =>
      window.scrollTo({ top: Math.max(0, grid.getBoundingClientRect().top + window.scrollY + m * SCH_PX_MIN - 160), behavior: "instant" })
    );
  }

  grid.addEventListener("pointerdown", (e) => {
    grid.dataset.ptr = e.pointerType;
    onGridPointer(e, d);
  });

  grid.addEventListener("contextmenu", (e) => {
    const b = e.target.closest(".sch-blk");
    if (!b) return;
    e.preventDefault();
    if (grid.dataset.ptr !== "mouse") return;
    showBlockMenu(e.clientX, e.clientY, b.dataset.id, d);
  });

  if (isToday && ui.schedSnap) {
    ui.schedSnap = false;
    const y = grid.getBoundingClientRect().top + window.scrollY + nowMin * SCH_PX_MIN;
    requestAnimationFrame(() => window.scrollTo({ top: Math.max(0, y - 160), behavior: "instant" }));
  }
}

export function onGridPointer(e, d) {
  if (e.button !== undefined && e.button !== 0) return;
  const grid = e.currentTarget;
  const yToMin = (cy) => clampMin(Math.round((cy - grid.getBoundingClientRect().top) / SCH_PX_MIN));
  if (e.target.closest(".sch-edit-btn")) return;
  const blk = e.target.closest(".sch-blk");
  e.preventDefault();

  // ---- Create a new session by dragging on empty space
  if (!blk) {
    const anchor = snapMin(yToMin(e.clientY));
    const ghost = document.createElement("div");
    ghost.className = "sch-ghost";
    grid.appendChild(ghost);
    let a = anchor, b = anchor;
    const paintGhost = () => {
      const lo = Math.min(a, b), hi = Math.max(a, b, lo + SCH_SNAP);
      ghost.style.top = `${lo * SCH_PX_MIN}px`;
      ghost.style.height = `${(hi - lo) * SCH_PX_MIN}px`;
      ghost.textContent = `${hhmm(lo)}–${hhmm(hi)}`;
    };
    paintGhost();
    const move = (ev) => { b = snapMin(yToMin(ev.clientY)); paintGhost(); };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      ghost.remove();
      const lo = Math.min(a, b), hi = Math.max(a, b);
      if (hi === lo) {
        if (ui.schedSel) { ui.schedSel = null; renderScheduleTab(); }
        return;
      }
      openSessionDialog(d, null, hhmm(lo), hhmm(hi));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return;
  }

  // ---- Move, resize, or swipe an existing session block
  const x = cfg.custom.find(v => v.id === blk.dataset.id);
  if (!x) return;
  const rect = blk.getBoundingClientRect();
  const grip = e.target.closest(".sch-grip");
  const edge = grip
    ? (grip.classList.contains("top") ? "top" : "bottom")
    : (e.clientY - rect.top < SCH_EDGE ? "top" : (rect.bottom - e.clientY < SCH_EDGE ? "bottom" : "move"));

  const s0 = toMin(x.start), e0 = toMin(x.end), y0 = yToMin(e.clientY), startX = e.clientX, startY = e.clientY;
  let s1 = s0, e1 = e0, moved = false, swipe = false, swipeDir = 0;
  blk.classList.add("dragging");

  let pressTimer = setTimeout(() => {
    pressTimer = null;
    if (moved || swipe) return;
    ui.schedSel = x.id;
    grid.querySelectorAll(".sch-blk.sel").forEach(b => {
      if (b !== blk) {
        b.classList.remove("sel");
        b.querySelectorAll(".sch-grip").forEach(g => g.remove());
      }
    });
    blk.classList.add("sel");
    if (!blk.querySelector(".sch-grip")) {
      blk.insertAdjacentHTML("beforeend", '<span class="sch-grip top"></span><span class="sch-grip bot"></span>');
    }
    if (navigator.vibrate) navigator.vibrate(12);
  }, 400);

  const paintBlk = () => {
    blk.style.top = `${s1 * SCH_PX_MIN}px`;
    blk.style.height = `${Math.max(30, (e1 - s1) * SCH_PX_MIN - 2)}px`;
    blk.querySelector(".bm").textContent = `${hhmm(s1)}–${hhmm(e1)}`;
  };

  let bg = null;
  const done = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    blk.classList.remove("dragging");
    if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    if (bg) { bg.remove(); bg = null; }
  };

  const move = (ev) => {
    const dx = ev.clientX - startX, dy = ev.clientY - startY;
    if (pressTimer && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
    if (!moved && !swipe && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      swipe = true;
      swipeDir = dx < 0 ? -1 : 1;
    }
    if (swipe) {
      if (!bg) {
        bg = document.createElement("div");
        bg.className = swipeDir < 0 ? "sch-swipe-bg" : "sch-swipe-bg done";
        bg.style.cssText = `top:${blk.style.top};height:${blk.style.height};left:${blk.style.left};width:${blk.style.width}`;
        bg.innerHTML = swipeDir < 0
          ? `<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`
          : `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
        grid.appendChild(bg);
      }
      const shift = swipeDir < 0 ? Math.max(-140, dx) : Math.min(140, dx);
      blk.style.transform = `translateX(${shift}px)`;
      bg.style.opacity = Math.min(1, Math.abs(shift) / 60);
      return;
    }

    const mdy = yToMin(ev.clientY) - y0;
    if (mdy !== 0) moved = true;
    if (edge === "move") {
      const len = e0 - s0;
      s1 = clampMin(snapMin(s0 + mdy));
      if (s1 + len > 1440) s1 = 1440 - len;
      e1 = s1 + len;
    } else if (edge === "top") {
      s1 = Math.min(e0 - SCH_SNAP, Math.max(0, snapMin(s0 + mdy)));
    } else {
      e1 = Math.max(s0 + SCH_SNAP, Math.min(1440, snapMin(e0 + mdy)));
    }
    paintBlk();
  };

  const up = (ev) => {
    done();
    if (swipe) {
      blk.style.transform = "";
      const sdx = ev.clientX - startX;
      if (swipeDir < 0 && sdx < -60) {
        deleteSession(x, d);
      } else if (swipeDir > 0 && sdx > 60) {
        cfg.custom = cfg.custom.map(v => v.id === x.id ? { ...v, done: !v.done } : v);
        save();
        renderScheduleTab();
        toast(x.done ? "Marked as not done" : "Marked as done");
      }
      return;
    }
    if (!moved) {
      if (ui.schedEdit) { openSessionDialog(d, x); return; }
      if (ui.schedSel !== x.id) { ui.schedDetail = x.id; renderScheduleTab(); }
      return;
    }
    if (s1 === s0 && e1 === e0) return;
    cfg.custom = cfg.custom.map(v => v.id === x.id ? { ...v, start: hhmm(s1), end: hhmm(e1) } : v);
    save();
    renderScheduleTab();
    toast("Session moved");
  };

  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
}

export function deleteSession(x, d) {
  if (!confirm("Delete this session?")) {
    renderScheduleTab();
    return;
  }
  cfg.custom = cfg.custom.filter(v => v.id !== x.id);
  save();
  renderScheduleTab();
  toast("Session deleted");
}

export function showBlockMenu(x0, y0, id, d) {
  document.querySelectorAll("#sch-menu").forEach(m => m.remove());
  const m = document.createElement("div");
  m.id = "sch-menu";
  m.className = "sch-menu";
  m.style.left = Math.min(x0, window.innerWidth - 170) + "px";
  m.style.top = Math.min(y0, window.innerHeight - 100) + "px";
  m.innerHTML = `<button data-a="edit">Edit</button><button data-a="del" class="danger">Delete</button>`;
  document.body.appendChild(m);

  const x = cfg.custom.find(v => v.id === id);
  const close = () => {
    m.remove();
    document.removeEventListener("pointerdown", outside, true);
  };
  const outside = (ev) => { if (!m.contains(ev.target)) close(); };

  m.querySelector('[data-a="edit"]').onclick = () => { close(); if (x) openSessionDialog(d, x); };
  m.querySelector('[data-a="del"]').onclick = () => { close(); if (x) deleteSession(x, d); };
  setTimeout(() => document.addEventListener("pointerdown", outside, true), 0);
}
