/* =========================================================================
   SETTINGS VIEW, JSON DATA EXPORT/IMPORT & RESET ACTIONS
   ========================================================================= */

import { DEPTS, SUBJECTS } from "../data/subjects.js";
import { ICON } from "../data/icons.js";
import { $, esc, clone, toast, emptyHtml } from "../utils/dom.js";
import { todayISO, hrs, wdShort, niceDate } from "../utils/dates.js";
import { activeIds, examsOf } from "../engine/syllabus.js";
import {
  cfg, prog, profiles, ui, defaultCfg,
  setCfg, setProg, save, loadProfile, replan, restoreFromCloud
} from "../state.js";
import {
  renderProfile, renderRules, renderSchedule, renderProgress, renderRollNo,
  normalizeDraft, editDates
} from "./shared-editors.js";
import { pushCloud, updateSyncBadges } from "../sync.js";
import { openWizard } from "./wizard.js";
import { renderPlan } from "./plan-view.js";
import { renderDay } from "./day-view.js";
import { renderAll, renderStats } from "../main.js";

export function exportData() {
  save();
  const data = {
    app: "study-plan-v4",
    version: 2,
    exportedAt: new Date().toISOString(),
    active: cfg.dept,
    profiles
  };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
  a.download = `study-plan-${todayISO()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("Data exported");
}

export function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const incoming = data.profiles ?? (data.cfg ? { [data.cfg.dept || "physics"]: { cfg: data.cfg, prog: data.prog || {} } } : null);
      if (!incoming || typeof incoming !== "object") throw new Error("not a study plan file");
      const clean = {};
      Object.entries(incoming).forEach(([k, p]) => {
        if (!DEPTS[k] || !p || !p.cfg || !p.cfg.ready) throw new Error(`bad profile "${k}"`);
        clean[k] = {
          cfg: { ...defaultCfg(), ...p.cfg, dept: k },
          prog: { sessions: {}, ...(p.prog || {}) }
        };
      });
      if (!confirm(`Import ${Object.keys(clean).map(k => DEPTS[k].label).join(", ")}? Matching departments on this browser will be replaced; others are kept.`)) return;
      save();
      Object.assign(profiles, clean);
      loadProfile(data.active && clean[data.active] ? data.active : Object.keys(clean)[0]);
      ui.settingsDraft = false;
      ui.dirty = false;
      ui.viewDate = null;
      replan();
      save();
      renderAll();
      toast("Data imported");
    } catch (e) {
      toast("Import failed: " + e.message);
    }
  };
  reader.readAsText(file);
}

export function renderSettings() {
  const root = $("#view-settings");
  if (!cfg.ready) {
    root.innerHTML = emptyHtml();
    return;
  }
  if (!ui.draft || ui.tab !== "settings" || !ui.settingsDraft) {
    ui.draft = clone(cfg);
    normalizeDraft(ui.draft);
    ui.settingsDraft = true;
    ui.dirty = false;
  }
  const d = ui.draft;
  const sections = [
    { k: "Profile", sum: () => `${DEPTS[d.dept].label} · SEC: ${SUBJECTS[DEPTS[d.dept].sec]?.shortName || ""}`, fn: renderProfile },
    { k: "Session rules", sum: () => `${hrs(d.hours)} · ${d.maxPerDay}/day preferred · ${d.revision} revision`, fn: renderRules },
    { k: "Daily schedule", sum: () => `${editDates(d).reduce((s, x) => s + d.days[x], 0)} sessions`, fn: renderSchedule },
    { k: "Progress so far", sum: () => `${activeIds(d).reduce((s, id) => s + (d.done[id] || []).length, 0)} units done`, fn: renderProgress },
    { k: "Roll Number & Cloud Sync", sum: () => d.rollNo ? `Roll No: ${d.rollNo}` : "Not set", fn: renderRollNo }
  ];

  root.innerHTML = `<div class="set-grid">
    <div class="card">
      <h2 style="font-size:20px;font-weight:800">Settings</h2>
      <p class="muted" style="font-weight:600;margin-top:4px;font-size:13.5px">Every change applies straight away and rebuilds your plan from today. Exam dates never change.</p>
      <p id="set-status" class="muted" style="font-weight:700;font-size:13px;margin-top:6px"></p>
    </div>
    ${sections.map((s, i) => `<details class="card" id="sec-${i}"><summary><span>${s.k}<small id="sum-${i}"></small></span></summary><div class="set-inner"></div></details>`).join("")}
    <details class="card">
      <summary><span>Exam timetable<small>fixed</small></span></summary>
      <div class="set-inner">
        <div class="exam-table">
          ${examsOf(d).map(s => `<div><i style="width:12px;height:12px;border-radius:50%;background:${s.theme.border}"></i>${esc(s.name)}<span class="dt">${wdShort(s.examDate)} ${niceDate(s.examDate)}</span></div>`).join("")}
        </div>
      </div>
    </details>
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <h3 style="font-size:16px;font-weight:800">Cloud Sync (Realtime Database)</h3>
        <div id="cloud-sync-badge"></div>
      </div>
      <p class="muted" style="font-size:13px;font-weight:600;margin-bottom:12px">Roll Number: <b style="color:var(--navy-900,#0f172a)">${esc(d.rollNo || "Not connected")}</b></p>
      <div class="zone">
        <div>
          <button class="btn primary" id="d-cloud-sync">${ICON.check} Sync to Cloud Now</button>
          <p class="muted" style="font-size:12px;font-weight:600;margin-top:6px">Pushes current plan and progress to Firebase Realtime Database.</p>
        </div>
        <div>
          <button class="btn" id="d-cloud-restore">Restore from Cloud</button>
          <p class="muted" style="font-size:12px;font-weight:600;margin-top:6px">Pulls settings from cloud using your Roll Number.</p>
        </div>
      </div>
    </div>
    <div class="card">
      <h3 style="font-size:16px;font-weight:800;margin-bottom:10px">Your data</h3>
      <div class="zone">
        <div>
          <button class="btn" id="d-export">Export data (JSON)</button>
          <p class="muted" style="font-size:12.5px;font-weight:600;margin-top:6px">Saves every department's plan and progress to one file.</p>
        </div>
        <div>
          <button class="btn" id="d-import-btn">Import data (JSON)</button>
          <p class="muted" style="font-size:12.5px;font-weight:600;margin-top:6px">Loads a file made by Export. Matching departments are replaced.</p>
          <input type="file" id="d-import" accept="application/json" hidden>
        </div>
      </div>
    </div>
    <div class="card">
      <h3 style="font-size:16px;font-weight:800;margin-bottom:10px">Start over</h3>
      <div class="zone">
        <div>
          <button class="btn" id="s-wizard">${ICON.redo} Re-run the setup wizard</button>
          <p class="muted" style="font-size:12.5px;font-weight:600;margin-top:6px">Walk through all four setup screens again, from today.</p>
        </div>
        <div>
          <button class="btn" id="s-clear">Clear completed ticks</button>
          <p class="muted" style="font-size:12.5px;font-weight:600;margin-top:6px">Keeps your plan but un-checks every finished session.</p>
        </div>
        <div>
          <button class="btn danger" id="s-reset">Delete plan &amp; setup</button>
          <p class="muted" style="font-size:12.5px;font-weight:600;margin-top:6px">Removes the current department's plan and progress and starts a new setup. Other departments are kept.</p>
        </div>
      </div>
    </div>
  </div>`;

  const applySettings = () => {
    const status = $("#set-status");
    if (!editDates(d).some(x => d.days[x] > 0)) {
      status.textContent = "Pick at least one study session per day to rebuild.";
      return;
    }
    status.textContent = "";
    normalizeDraft(d);
    setCfg({ ...clone(d), ready: true });
    save();
    replan();
    ui.dirty = false;
    ui.viewDate = null;
    renderStats();
    renderPlan();
    renderDay();
  };

  const setDirty = () => {
    ui.dirty = true;
    sections.forEach((s, i) => { $("#sum-" + i).textContent = s.sum(); });
    applySettings();
  };

  sections.forEach((s, i) => {
    $("#sum-" + i).textContent = s.sum();
    const det = $("#sec-" + i), inner = $(".set-inner", det);
    let built = false;
    const build = () => {
      if (built) return;
      built = true;
      s.fn(inner, d, () => {
        setDirty();
        if (i <= 1) {
          sections.forEach((dependent, j) => {
            const target = $("#sec-" + j);
            if (j >= 2 && target.open) dependent.fn($(".set-inner", target), d, setDirty);
          });
        }
      });
    };
    det.addEventListener("toggle", () => { if (det.open) build(); });
  });

  sections.forEach((s, i) => {
    const det = $("#sec-" + i);
    det.addEventListener("toggle", () => {
      if (det.open && i >= 2) s.fn($(".set-inner", det), d, setDirty);
    });
  });

  $("#s-wizard").onclick = () => openWizard(true);
  $("#s-clear").onclick = () => {
    if (confirm("Un-check every completed session?")) {
      setProg({ sessions: {} });
      save();
      renderAll();
      toast("Cleared");
    }
  };
  $("#s-reset").onclick = () => {
    if (!confirm(`Delete the ${DEPTS[cfg.dept].label} plan and setup? This can't be undone. Other departments are kept.`)) return;
    delete profiles[cfg.dept];
    const dept = cfg.dept;
    setCfg({ ...defaultCfg(), dept });
    setProg({ sessions: {} });
    save();
    ui.settingsDraft = false;
    replan();
    renderAll();
    openWizard(false);
  };
  $("#d-export").onclick = exportData;
  $("#d-import-btn").onclick = () => $("#d-import").click();
  $("#d-import").onchange = e => {
    if (e.target.files[0]) importData(e.target.files[0]);
    e.target.value = "";
  };

  const syncBtn = $("#d-cloud-sync");
  if (syncBtn) {
    syncBtn.onclick = () => {
      if (!d.rollNo) {
        const roll = prompt("Enter your Roll Number to connect Cloud Sync:", "");
        if (roll && roll.trim()) {
          d.rollNo = roll.trim().toUpperCase();
          setDirty();
        } else {
          return;
        }
      }
      pushCloud(cfg, prog, true);
      toast(`Synced plan for Roll No ${d.rollNo}!`);
      renderSettings();
    };
  }

  const restoreBtn = $("#d-cloud-restore");
  if (restoreBtn) {
    restoreBtn.onclick = async () => {
      const roll = prompt("Enter Roll Number to restore settings from cloud:", d.rollNo || "");
      if (roll && roll.trim()) {
        const ok = await restoreFromCloud(roll.trim().toUpperCase());
        if (ok) {
          ui.settingsDraft = false;
          renderSettings();
          renderAll();
        }
      }
    };
  }

  updateSyncBadges();
}
