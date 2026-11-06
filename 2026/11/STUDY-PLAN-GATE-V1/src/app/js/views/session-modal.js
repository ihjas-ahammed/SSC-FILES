/* =========================================================================
   NEW / EDIT CUSTOM SESSION BOTTOM SHEET DIALOG
   ========================================================================= */

import { SUBJECTS, MOD_ROMAN } from "../data/subjects.js";
import { ICON, SUBJECT_SVGS } from "../data/icons.js";
import { esc, clone, toast } from "../utils/dom.js";
import { niceDate, toMin, hhmm, hm } from "../utils/dates.js";
import {
  scheduleIds, subj, cleanUnit, unitMod, doneSet,
  MODE_NAMES, MODE_SLIDER, modulesOf, modUnits, coursePct,
  normUnits, usedMods, sessionName, unitCost, usedHrs, availHrs, fitsHrs
} from "../engine/syllabus.js";
import { cfg, ui, save } from "../state.js";
import { renderScheduleTab } from "./schedule-view.js";

export function noteText(draft) {
  const dur = toMin(draft.end) - toMin(draft.start),
        avail = availHrs(draft),
        used = usedHrs(draft);
  if (dur <= 0) return "End must be after start.";
  if (!fitsHrs(used, avail)) {
    return `Planned ${hm(used)} is more than the ${hm(avail)} you chose. Shorten a unit or make the session longer.`;
  }
  return `${sessionName(cfg, draft.subjectId, usedMods(draft))} · planned ${hm(used)} of ${hm(avail)}`;
}

export function saveSession(draft, existing, close) {
  if (!draft.units.length || toMin(draft.end) <= toMin(draft.start) || !fitsHrs(usedHrs(draft), availHrs(draft))) return;
  const mods = usedMods(draft);
  const rec = {
    id: existing ? existing.id : "c" + Date.now().toString(36),
    subjectId: draft.subjectId,
    moduleNo: mods[0],
    modules: mods,
    name: sessionName(cfg, draft.subjectId, mods),
    units: [...draft.units].sort((a, b) => a.u - b.u),
    date: draft.date,
    start: draft.start,
    end: draft.end,
    done: !!draft.done
  };
  if (existing) {
    cfg.custom = cfg.custom.map(v => v.id === existing.id ? rec : v);
  } else {
    cfg.custom = [...(cfg.custom || []), rec];
  }
  ui.schedDate = rec.date;
  if (!existing) ui.schedFocus = toMin(rec.start);
  close();
  save();
  renderScheduleTab();
  toast(existing ? "Session updated" : "Session added");
}

export function openSessionDialog(d, existing, startHint, endHint) {
  const ids = scheduleIds(cfg);
  const start0 = startHint || "09:00";
  const draft = existing
    ? { ...clone(existing), units: normUnits(existing.units), moduleNo: existing.moduleNo || modulesOf(existing.subjectId)[0] }
    : {
        id: null,
        subjectId: ids[0],
        moduleNo: modulesOf(ids[0])[0],
        units: [],
        date: d,
        start: start0,
        end: endHint || hhmm(Math.min(1439, toMin(start0) + 60)),
        done: false
      };

  const back = document.createElement("div");
  back.className = "sch-back";
  document.body.appendChild(back);
  const close = () => back.remove();

  let step = existing ? 1 : 0; // 0 = pick a subject, 1 = modules and units of that subject
  const addLog = {};           // unit -> times ticked in this editing session (drives ADDED tag)
  const openSet = new Set(existing ? [existing.subjectId] : []);

  const paint = () => {
    const keep = [...back.querySelectorAll(".sch-sheet, .sch-units")].map(el => el.scrollTop);
    const mods = modulesOf(draft.subjectId);
    const courseIds = ids.slice().sort((x, y) => SUBJECTS[x].examDate.localeCompare(SUBJECTS[y].examDate));
    if (!mods.includes(draft.moduleNo)) draft.moduleNo = mods[0];
    const list = modUnits(draft.subjectId, draft.moduleNo), done = doneSet(cfg, draft.subjectId);
    const dur = toMin(draft.end) - toMin(draft.start);
    const avail = availHrs(draft), used = usedHrs(draft);
    const valid = draft.units.length > 0 && dur > 0 && fitsHrs(used, avail);

    const unitsHtml = list.map(u => {
      const sel = draft.units.find(v => v.u === u.u);
      const blocked = !sel && !fitsHrs(used + unitCost(draft.subjectId, u.u, 3), avail); // 3 = Review (cheapest)
      return `<div class="unit-row ${blocked ? "off" : ""}">
        <label class="ucheck">
          <input type="checkbox" data-u="${u.u}" ${sel ? "checked" : ""} ${blocked ? "disabled" : ""}>
          <span>${esc(cleanUnit(u.text))}${done.has(u.u) ? " <small>(done)</small>" : ""}${addLog[u.u] ? ` <span class="added-tag">${addLog[u.u] > 1 ? "ADDEDx" + addLog[u.u] : "ADDED"}</span>` : ""}</span>
        </label>
        ${sel ? `<div class="sch-mode">
          <div class="slider-wrap sch-meter">
            <input class="stops" type="range" min="0" max="3" step="1" value="${MODE_SLIDER.indexOf(sel.mode)}" data-r="${u.u}" aria-label="Depth" style="--p:${MODE_SLIDER.indexOf(sel.mode) * 100 / 3}%">
            <div class="ticks"><i style="left:0%"></i><i style="left:33.33%"></i><i class="mod" style="left:66.67%"></i><i style="left:100%"></i></div>
          </div>
          <b>${hm(unitCost(draft.subjectId, u.u, sel.mode))}</b>
        </div>` : ""}
      </div>`;
    }).join("");

    const pct = avail > 0 ? Math.min(100, Math.round(100 * used / avail)) : 0;
    const over = !fitsHrs(used, avail);

    const pick = (id) => `<button type="button" class="sch-pick" data-pick="${id}">
      <span class="sch-ico">${SUBJECT_SVGS[SUBJECTS[id].iconId] || ""}</span>
      <span class="sch-pick-text"><b>${esc(subj(id, cfg).name)}</b><small>Exam ${niceDate(SUBJECTS[id].examDate)} · ${coursePct(cfg, id)}% done</small></span>
      <span class="sch-go" aria-hidden="true">›</span>
    </button>`;

    const saveBtn = `<button class="btn primary sch-save-ic" id="as-save" aria-label="Save session" title="Save" ${valid ? "" : "disabled"}>
      <svg viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
    </button>`;

    const actions = `<div class="sch-act">
      <div class="grp">${existing ? `<button class="btn danger" id="as-del">Delete</button>
        <button class="btn" id="as-done">${draft.done ? "Reopen" : "Mark done"}</button>` : ""}</div>
      <div class="grp"><button class="btn" id="as-cancel">Cancel</button></div>
    </div>`;

    back.innerHTML = step === 0
      ? `<div class="sch-sheet" role="dialog" aria-modal="true" aria-label="Session">
          <div class="sch-head-row"><h3>${existing ? "Edit session" : "New session"}</h3></div>
          <label class="sch-fld">Choose a subject</label>
          <div class="sch-picks">${courseIds.map(pick).join("")}</div>
          <div class="sch-act"><div class="grp"></div><div class="grp"><button class="btn" id="as-cancel">Cancel</button></div></div>
        </div>`
      : `<div class="sch-sheet" role="dialog" aria-modal="true" aria-label="Session">
          <div class="sch-head-row"><h3>${esc(subj(draft.subjectId, cfg).name)}</h3>${saveBtn}</div>
          <div class="sch-back-row"><button type="button" class="btn sm" id="as-back">${ICON.left} Subjects</button></div>
          <div class="sch-bar-wrap">
            <div class="sch-bar-top"><span>Time allocated</span><b class="${over ? "err" : ""}">${hm(used)} of ${hm(avail)}</b></div>
            <div class="sch-bar"><div class="sch-bar-fill ${over ? "over" : ""}" style="width:${pct}%"></div></div>
          </div>
          <label class="sch-fld">Module</label>
          <div class="sch-mod-slider">
            <input class="sch-mod-range" type="range" min="0" max="${Math.max(0, mods.length - 1)}" step="1" value="${Math.max(0, mods.indexOf(draft.moduleNo))}" data-mslider aria-label="Module">
          </div>
          <div class="sch-mod-labels">${mods.map(m => `<span class="${m === draft.moduleNo ? "on" : ""}">${MOD_ROMAN[m] || "Module " + m}</span>`).join("")}</div>
          <p class="sch-mod-info">${MOD_ROMAN[draft.moduleNo] || "Module " + draft.moduleNo} · ${draft.units.filter(v => unitMod(draft.subjectId, v.u) === draft.moduleNo).length} picked · ${coursePct(cfg, draft.subjectId, draft.moduleNo)}% done</p>
          <label class="sch-fld">Units</label>
          <div class="sch-units">${unitsHtml}</div>
          <p class="sch-note">${niceDate(draft.date)} · ${draft.start}–${draft.end}</p>
          <p class="sch-note sch-plan ${dur > 0 && fitsHrs(used, avail) ? "" : "err"}">${noteText(draft)}</p>
          ${actions}
        </div>`;

    [...back.querySelectorAll(".sch-sheet, .sch-units")].forEach((el, i) => {
      if (keep[i] != null) el.scrollTop = keep[i];
    });

    back.querySelectorAll("details.sch-course").forEach(el => el.addEventListener("toggle", () => {
      if (el.open) openSet.add(el.dataset.c);
      else openSet.delete(el.dataset.c);
    }));

    back.onclick = (e) => { if (e.target === back) close(); };
    back.querySelector("#as-cancel").onclick = close;

    back.querySelectorAll("[data-pick]").forEach(b => b.onclick = () => {
      draft.subjectId = b.dataset.pick;
      draft.moduleNo = modulesOf(draft.subjectId)[0];
      draft.units = [];
      step = 1;
      paint();
    });

    back.querySelectorAll("[data-mslider]").forEach(r => r.oninput = () => {
      const m = mods[Number(r.value)];
      if (m && m !== draft.moduleNo) {
        draft.moduleNo = m;
        paint();
      }
    });

    const refreshTime = () => {
      const avail = availHrs(draft), used = usedHrs(draft), dur = toMin(draft.end) - toMin(draft.start);
      const fits = fitsHrs(used, avail), pct = avail > 0 ? Math.min(100, Math.round(100 * used / avail)) : 0;
      const top = back.querySelector(".sch-bar-top b");
      if (top) {
        top.textContent = `${hm(used)} of ${hm(avail)}`;
        top.classList.toggle("err", !fits);
      }
      const fill = back.querySelector(".sch-bar-fill");
      if (fill) {
        fill.style.width = pct + "%";
        fill.classList.toggle("over", !fits);
      }
      const planEl = back.querySelector(".sch-plan");
      if (planEl) {
        planEl.textContent = noteText(draft);
        planEl.classList.toggle("err", !(dur > 0 && fits));
      }
      const saveEl = back.querySelector("#as-save");
      if (saveEl) saveEl.disabled = !(draft.units.length > 0 && dur > 0 && fits);
      back.querySelectorAll(".unit-row").forEach(row => {
        const box = row.querySelector("input[data-u]");
        if (!box || box.checked) return;
        const off = !fitsHrs(used + unitCost(draft.subjectId, Number(box.dataset.u), 3), avail);
        box.disabled = off;
        row.classList.toggle("off", off);
      });
    };

    const backBtn = back.querySelector("#as-back");
    if (backBtn) backBtn.onclick = () => { step = 0; paint(); };

    back.querySelectorAll("[data-mm]").forEach(b => b.onclick = () => {
      if (b.dataset.c !== draft.subjectId) draft.units = [];
      draft.subjectId = b.dataset.c;
      draft.moduleNo = b.dataset.mm;
      paint();
    });

    back.querySelectorAll("[data-u]").forEach(c => c.onchange = () => {
      const u = Number(c.dataset.u);
      if (!c.checked) {
        draft.units = draft.units.filter(v => v.u !== u);
        paint();
        return;
      }
      addLog[u] = (addLog[u] || 0) + 1;
      const wasDone = doneSet(cfg, draft.subjectId).has(u);
      const order = wasDone ? [0, 1, 3] : [1, 0, 3];
      const mode = order.find(m => fitsHrs(usedHrs(draft) + unitCost(draft.subjectId, u, m), availHrs(draft)));
      if (mode === undefined) {
        c.checked = false;
        toast("Not enough time in this session for this unit");
        return;
      }
      draft.units = [...draft.units, { u, mode }];
      paint();
    });

    back.querySelectorAll("[data-r]").forEach(r => r.oninput = () => {
      const u = Number(r.dataset.r), v = draft.units.find(x => x.u === u);
      if (!v) return;
      const next = MODE_SLIDER[Number(r.value)],
            before = unitCost(draft.subjectId, u, v.mode),
            after = unitCost(draft.subjectId, u, next);
      if (!fitsHrs(usedHrs(draft) - before + after, availHrs(draft))) {
        r.value = MODE_SLIDER.indexOf(v.mode);
        toast("Not enough time in this session for " + MODE_NAMES[next]);
        return;
      }
      v.mode = next;
      r.style.setProperty("--p", Number(r.value) * 100 / 3 + "%");
      r.closest(".sch-mode").querySelector("b").textContent = hm(after);
      refreshTime();
    });

    const saveBtnEl = back.querySelector("#as-save");
    if (saveBtnEl) saveBtnEl.onclick = () => saveSession(draft, existing, close);

    if (existing) {
      back.querySelector("#as-del").onclick = () => {
        if (!confirm("Delete this session?")) return;
        cfg.custom = cfg.custom.filter(v => v.id !== existing.id);
        save();
        close();
        renderScheduleTab();
        toast("Session deleted");
      };
      back.querySelector("#as-done").onclick = () => {
        const x = cfg.custom.find(v => v.id === existing.id);
        if (x) x.done = !x.done;
        save();
        close();
        renderScheduleTab();
      };
    }
  };

  paint();
  if (existing) {
    const sheet = back.querySelector(".sch-sheet");
    const row = (back.querySelector(".unit-row input:checked") || back.querySelector(".unit-row input"))?.closest(".unit-row");
    if (sheet && row) sheet.scrollTop += row.getBoundingClientRect().top - sheet.getBoundingClientRect().top - 60;
  }
}
