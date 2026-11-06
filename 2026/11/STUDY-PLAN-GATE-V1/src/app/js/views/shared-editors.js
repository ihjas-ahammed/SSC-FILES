/* =========================================================================
   SHARED EDITORS (Used by both Setup Wizard and Settings)
   ========================================================================= */

import { DEPTS, LAST_EXAM, MODS, MODULE_LABEL } from "../data/subjects.js";
import { ICON, SUBJECT_SVGS } from "../data/icons.js";
import { $, esc, toast } from "../utils/dom.js";
import { focusISO, rangeDates, addDays, hrs, fmtH, niceDate, wdName, parse } from "../utils/dates.js";
import { activeIds, examsOf, remainingUnits, subj, unitMod, doneSet, unitHrs, cleanUnit } from "../engine/syllabus.js";
import { cfg, ui, save, loadProfile, replan, restoreFromCloud } from "../state.js";
import { openWizard, closeWizard } from "./wizard.js";
import { renderAll } from "../main.js";

export function editDates(d) {
  return rangeDates(focusISO(), addDays(LAST_EXAM, -1));
}

export function normalizeDraft(d) {
  d.start = focusISO();
  d.maxPerDay = Math.max(1, Math.min(5, d.maxPerDay));
  editDates(d).forEach(x => {
    d.days[x] = Math.max(0, Math.min(d.maxPerDay, d.days[x] ?? d.maxPerDay));
  });
}

// Switching department keeps the current one's data and opens the other's (or starts its setup).
export function switchDepartment(dept) {
  if (ui.dirty && !confirm("Discard unsaved changes and switch department?")) return;
  save();
  loadProfile(dept);
  ui.settingsDraft = false;
  ui.dirty = false;
  ui.viewDate = null;
  replan();
  save();
  renderAll();
  if (!cfg.ready) openWizard(false);
  toast(`${DEPTS[dept].label} selected`);
}

export function ruleSlider(label, desc, key, d, min, max, step, fmt, onChange) {
  const row = document.createElement("div");
  row.className = "rule-row";
  row.innerHTML = `<div class="rule-copy"><label for="rule-${key}">${label}</label><p>${desc}</p></div>
    <output for="rule-${key}"></output>
    <div class="rule-control">
      <input id="rule-${key}" class="stops" type="range" min="${min}" max="${max}" step="${step}">
      <div class="range-ends"><span>${fmt(min)}</span><span>${fmt(max)}</span></div>
    </div>`;
  const range = $("input", row), out = $("output", row);
  const paint = () => {
    range.value = d[key];
    out.textContent = fmt(d[key]);
    range.setAttribute("aria-valuetext", String(fmt(d[key])));
    range.style.setProperty("--p", ((d[key] - min) / (max - min) * 100) + "%");
  };
  range.oninput = () => {
    d[key] = Number(range.value);
    paint();
    onChange();
  };
  paint();
  return row;
}

export function renderProfile(root, d, onChange) {
  root.innerHTML = `
    <div class="field-title">Examination Stream</div>
    <div class="choice-grid" id="dept-grid"></div>
    <div style="margin-top:20px;padding:14px 16px;background:var(--navy-50,#f8fafc);border-radius:12px;border:1px solid var(--navy-100,#e2e8f0);display:flex;align-items:center;gap:12px">
      <div style="width:36px;height:36px;border-radius:8px;background:var(--navy-100,#e2e8f0);display:flex;align-items:center;justify-content:center;color:var(--navy-700,#334155);flex-shrink:0">
        ${ICON.book}
      </div>
      <div>
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--navy-500,#64748b)">3-Phase GATE DA Architecture</div>
        <div id="sec-auto-label" style="font-size:14px;font-weight:700;color:var(--navy-900,#0f172a);margin-top:2px">Phase 1: Math (36.7m) · Phase 2: Core Systems (29.0m) · Phase 3: AI & ML (34.3m)</div>
      </div>
    </div>

    <!-- Quick Restore for existing users with Roll Number -->
    <div class="restore-card" style="margin-top:24px;padding:16px;background:#ffffff;border-radius:16px;border:1.5px dashed var(--line,#cbd5e1);display:flex;flex-direction:column;gap:12px;box-shadow:0 2px 12px rgba(15,23,42,0.03)">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
        <div>
          <div style="font-size:13.5px;font-weight:800;color:var(--navy-800,#1e293b)">Already have a plan?</div>
          <div style="font-size:12px;color:var(--muted,#64748b);margin-top:2px">Restore all your settings and progress with your Roll Number</div>
        </div>
        <button type="button" id="btn-toggle-restore" class="btn sm" style="white-space:nowrap;font-weight:700;flex-shrink:0">Restore</button>
      </div>
      <div id="restore-input-row" style="display:none;align-items:center;gap:8px;margin-top:4px">
        <input type="text" id="restore-roll-input" placeholder="Enter Roll No (e.g. 23PH01)" autocomplete="off" autocapitalize="characters" style="flex:1;min-width:0;height:42px;padding:0 12px;border:1.5px solid var(--line,#cbd5e1);border-radius:10px;font-size:13.5px;font-weight:800;text-transform:uppercase;color:var(--navy-900,#0f172a);font-family:inherit;outline:none" />
        <button type="button" id="btn-do-restore" class="btn primary sm" style="height:42px;padding:0 16px;font-weight:800;flex-shrink:0">Restore</button>
      </div>
    </div>`;

  const dg = $("#dept-grid", root), lbl = $("#sec-auto-label", root);
  const toggleBtn = $("#btn-toggle-restore", root);
  const row = $("#restore-input-row", root);
  const rollIn = $("#restore-roll-input", root);
  const doBtn = $("#btn-do-restore", root);

  if (toggleBtn && row) {
    toggleBtn.onclick = () => {
      const open = row.style.display === "flex";
      row.style.display = open ? "none" : "flex";
      if (!open && rollIn) rollIn.focus();
    };
  }

  if (doBtn && rollIn) {
    const triggerRestore = async () => {
      const val = rollIn.value.trim().toUpperCase();
      if (!val) { toast("Please enter your Roll Number"); return; }
      doBtn.disabled = true;
      doBtn.textContent = "Restoring...";
      const ok = await restoreFromCloud(val);
      doBtn.disabled = false;
      doBtn.textContent = "Restore";
      if (ok) {
        closeWizard();
        renderAll();
      }
    };
    doBtn.onclick = triggerRestore;
    rollIn.onkeydown = (e) => { if (e.key === "Enter") triggerRestore(); };
  }

  const paint = () => {
    dg.innerHTML = Object.entries(DEPTS)
      .map(([k, v]) => `<button type="button" class="choice ${d.dept === k ? "on" : ""}" data-k="${k}"><b>${v.label}</b><span>${v.sub}</span></button>`)
      .join("");
    d.sec = null;
    if (lbl) {
      lbl.textContent = "Phase 1: Math (36.7m) · Phase 2: Core Systems (29.0m) · Phase 3: AI & ML (34.3m)";
    }
    dg.querySelectorAll("button").forEach(b => b.onclick = () => {
      if (d.dept !== b.dataset.k) switchDepartment(b.dataset.k);
    });
  };
  paint();
}

export function renderRules(root, d, onChange) {
  root.innerHTML = "";
  const re = () => {
    d.maxPerDay = Math.max(1, d.maxPerDay);
    Object.keys(d.days).forEach(k => { if (d.days[k] > d.maxPerDay) d.days[k] = d.maxPerDay; });
    onChange();
  };
  root.append(
    ruleSlider("Hours per session", "Your preferred pace; all topics are included regardless of time", "hours", d, 1, 6, 0.5, v => hrs(v), onChange),
    ruleSlider("Preferred sessions per day", "Extra sessions are added when needed to include all topics and revision", "maxPerDay", d, 1, 5, 1, v => v, re),
    ruleSlider("Revision sessions per subject", "Full-syllabus revision passes kept for the run-up to each exam", "revision", d, 0, 3, 1, v => v === 0 ? "None" : v, onChange)
  );
}

export function renderSchedule(root, d, onChange) {
  const dates = editDates(d);
  const exams = {};
  examsOf(d).forEach(s => (exams[s.examDate] = exams[s.examDate] || []).push(s.shortName));
  root.innerHTML = `
    <div class="sched-tools">
      <button type="button" class="btn sm" data-a="max">Max every day</button>
      <button type="button" class="btn sm" data-a="wk">Weekends max, weekdays ${Math.max(1, d.maxPerDay - 1)}</button>
      <button type="button" class="btn sm" data-a="clr">Clear all</button>
    </div>
    <div id="sched-rows"></div>
    <div class="cap-bar" id="cap"></div>`;
  const rows = $("#sched-rows", root), cap = $("#cap", root);

  const paintCap = () => {
    const n = dates.reduce((s, x) => s + d.days[x], 0);
    cap.innerHTML = `${ICON.clock}<span><b>${n}</b> sessions &middot; <b>${fmtH(n * d.hours)}</b> hours across <b>${dates.filter(x => d.days[x] > 0).length}</b> study days</span>`;
  };

  const M = d.maxPerDay;
  const paintRows = () => {
    rows.innerHTML = "";
    if (!dates.length) {
      rows.innerHTML = `<p class="muted">No study days left before the last exam.</p>`;
      return;
    }
    dates.forEach(x => {
      const r = document.createElement("div");
      r.className = "sched-row";
      const ex = (exams[x] || []).map(n => `<span class="ex">${ICON.exam}${esc(n)} exam</span>`).join(" ");
      let ticks = "";
      for (let i = 0; i <= M; i++) {
        ticks += `<i class="mod" style="left:${i / M * 100}%"></i><em style="left:${i / M * 100}%">${i}</em>`;
      }
      r.innerHTML = `
        <div class="dl"><b>${niceDate(x)}</b><span>${wdName(x)}</span></div>
        <div class="slider-wrap">
          <input class="stops" type="range" min="0" max="${M}" step="1" aria-label="Sessions on ${niceDate(x)}">
          <div class="ticks" style="left:14px;right:14px">${ticks}</div>
        </div>
        <div class="hrs"></div>
        ${ex ? `<div class="exrow">${ex}</div>` : ""}`;
      const range = $("input", r), hr = $(".hrs", r);
      const paint = () => {
        range.value = d.days[x];
        range.style.setProperty("--p", (d.days[x] / M * 100) + "%");
        hr.innerHTML = d.days[x] ? `<b>${d.days[x]}</b> &times; ${fmtH(d.hours)}h` : `<span class="muted">Off</span>`;
      };
      range.oninput = () => {
        d.days[x] = Number(range.value);
        paint();
        paintCap();
        onChange();
      };
      r._paint = paint;
      paint();
      rows.appendChild(r);
    });
  };

  root.querySelectorAll("[data-a]").forEach(b => b.onclick = () => {
    dates.forEach(x => {
      const we = [0, 6].includes(parse(x).getDay());
      d.days[x] = b.dataset.a === "max"
        ? d.maxPerDay
        : b.dataset.a === "clr"
          ? 0
          : (we ? d.maxPerDay : Math.max(1, d.maxPerDay - 1));
    });
    rows.querySelectorAll(".sched-row").forEach(r => r._paint());
    paintCap();
    onChange();
  });

  paintRows();
  paintCap();
}

export function renderProgress(root, d, onChange) {
  root.innerHTML = `<div id="cap-need" class="cap-bar"></div><div style="height:14px"></div><div id="psubs"></div>`;
  const psubs = $("#psubs", root), capNeed = $("#cap-need", root);

  const paintNeed = () => {
    const topics = activeIds(d).reduce((n, id) => n + remainingUnits(d, id).length, 0);
    capNeed.innerHTML = `<span><b>${topics}</b> topics left · <b>${d.revision}</b> revision ${d.revision === 1 ? "pass" : "passes"} per subject. Your plan includes all remaining topics before upcoming exams.</span>`;
  };

  activeIds(d).forEach(id => {
    const s = subj(id, d);
    const N = s.units.length;
    const box = document.createElement("div");
    box.className = "psub";
    box.style.cssText = `--bg2:${s.theme.bannerBg};--bd:${s.theme.border}`;
    box.innerHTML = `
      <div class="psub-h">
        <div class="ic">${SUBJECT_SVGS[s.iconId]}</div>
        <div><div class="t">${esc(s.name)}</div><div class="s">${s.role} · exam ${niceDate(s.examDate)}</div></div>
        <div class="pct"></div>
      </div>
      <div class="slider-wrap">
        <input class="stops" type="range" min="0" max="${N}" step="1" aria-label="Units completed in ${esc(s.name)}">
        <div class="ticks"></div>
      </div>
      <div class="s sl-label" style="font-size:12.5px;font-weight:700;color:#334155;margin:0 0 8px"></div>
      <details class="unit-dd">
        <summary><span>Tick topics individually</span><span class="cnt"></span></summary>
        <div class="unit-list"></div>
      </details>`;

    const range = $("input", box),
          ticks = $(".ticks", box),
          pct = $(".pct", box),
          label = $(".sl-label", box),
          list = $(".unit-list", box),
          cnt = $(".cnt", box);

    const thumb = 14;
    let tickHtml = "";
    for (let i = 0; i <= N; i++) {
      const left = `calc(${i / N * 100}% )`;
      const isMod = i < N && (i === 0 || unitMod(id, i + 1) !== unitMod(id, i));
      tickHtml += `<i class="${isMod || i === N ? "mod" : ""}" style="left:${left}"></i>`;
      if (isMod) tickHtml += `<em style="left:${left}">${MODULE_LABEL[unitMod(id, i + 1)]}</em>`;
    }
    ticks.innerHTML = tickHtml;
    ticks.style.left = ticks.style.right = thumb + "px";

    const paint = () => {
      const set = doneSet(d, id);
      const k = set.size;
      const prefix = [...set].every(u => u <= k);
      range.value = k;
      range.style.setProperty("--p", (k / N * 100) + "%");
      pct.textContent = Math.round(k / N * 100) + "%";
      const remH = s.units.filter(u => !set.has(u.u)).reduce((a, u) => a + unitHrs(id, u.u), 0);
      label.textContent = `${k} of ${N} units done${prefix ? "" : " (custom picks)"} · ${fmtH(remH)} h left`;
      cnt.textContent = `${k}/${N}`;
      list.querySelectorAll("input").forEach(cb => {
        cb.checked = set.has(Number(cb.dataset.u));
        cb.closest(".ucheck").classList.toggle("on", cb.checked);
      });
    };

    MODS.forEach(m => {
      const us = s.units.filter(u => unitMod(id, u.u) === m);
      if (!us.length) return;
      const head = document.createElement("div");
      head.className = "mod-head";
      head.innerHTML = `<span>Module ${MODULE_LABEL[m]}</span><button type="button">Tick all</button>`;
      $("button", head).onclick = () => {
        const set = doneSet(d, id);
        const all = us.every(u => set.has(u.u));
        us.forEach(u => all ? set.delete(u.u) : set.add(u.u));
        d.done[id] = [...set].sort((a, b) => a - b);
        paint();
        paintNeed();
        onChange();
      };
      list.appendChild(head);

      us.forEach(u => {
        const lb = document.createElement("label");
        lb.className = "ucheck";
        lb.innerHTML = `<input type="checkbox" data-u="${u.u}"><span class="tx">${esc(cleanUnit(u.text))}</span><span class="h">${fmtH(unitHrs(id, u.u))} h</span>`;
        $("input", lb).onchange = (e) => {
          const set = doneSet(d, id);
          e.target.checked ? set.add(u.u) : set.delete(u.u);
          d.done[id] = [...set].sort((a, b) => a - b);
          paint();
          paintNeed();
          onChange();
        };
        list.appendChild(lb);
      });
    });

    range.oninput = () => {
      const k = Number(range.value);
      d.done[id] = Array.from({ length: k }, (_, i) => i + 1);
      paint();
      paintNeed();
      onChange();
    };

    paint();
    psubs.appendChild(box);
  });

  paintNeed();
}

export function renderRollNo(root, d, onChange) {
  root.innerHTML = `
    <div style="padding:20px;background:#ffffff;border-radius:20px;border:1.5px solid var(--line,#e2e8f0);box-shadow:0 4px 18px -4px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:18px">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:46px;height:46px;border-radius:14px;background:#eef2ff;color:#4f46e5;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <svg style="width:24px;height:24px" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        </div>
        <div>
          <h3 style="font-size:17px;font-weight:800;color:var(--navy-900,#0f172a);line-height:1.2">Student Roll Number</h3>
          <p style="font-size:13px;color:var(--muted,#64748b);margin-top:3px">Syncs your study plan and completed sessions across all devices in real time.</p>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:6px">
        <label for="wz-roll-input" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;color:var(--navy-700,#334155)">Roll Number / Student ID</label>
        <input
          type="text"
          id="wz-roll-input"
          placeholder="e.g. 23PH01 or 12"
          value="${esc(d.rollNo || "")}"
          autocomplete="off"
          autocapitalize="characters"
          style="height:48px;padding:0 14px;border:1.5px solid var(--line,#cbd5e1);border-radius:12px;font-size:16px;font-weight:800;text-transform:uppercase;color:var(--navy-900,#0f172a);outline:none;font-family:inherit"
        />
      </div>

      <div style="padding:12px 14px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;font-size:12.5px;color:#475569;line-height:1.5;display:flex;align-items:flex-start;gap:10px">
        <span style="font-size:16px;line-height:1">⚡</span>
        <div><b>Multi-device Sync:</b> Open this study plan on your phone and laptop using the same Roll Number. Any session marked done or edited will update on both devices automatically.</div>
      </div>
    </div>`;

  const input = $("#wz-roll-input", root);
  input.oninput = () => {
    d.rollNo = input.value.trim().toUpperCase();
    onChange();
  };
}
