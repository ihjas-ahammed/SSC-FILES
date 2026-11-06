/* =========================================================================
   4-STEP SETUP WIZARD CONTROLLER
   ========================================================================= */

import { ICON } from "../data/icons.js";
import { $, clone, toast } from "../utils/dom.js";
import { cfg, ui, defaultCfg, setCfg, setProg, save, replan } from "../state.js";
import { renderProfile, renderRules, renderSchedule, renderProgress, renderRollNo, normalizeDraft, editDates } from "./shared-editors.js";
import { switchTab, renderAll } from "../main.js";

export const WZ_STEPS = [
  { title: "Who's studying?", lead: "GATE Data Science & AI (GATE DA). All 8 core subjects across 3 preparation phases leading to the single February 1 exam are built in.", render: renderProfile },
  { title: "Session rules", lead: "Choose your preferred pace. All topics and requested revision will be included.", render: renderRules },
  { title: "Your daily schedule", lead: "Slide to choose how many sessions you’ll do each day. Set it to 0 for a day off.", render: renderSchedule },
  { title: "Where are you now?", lead: "Slide each subject to the units you've already finished. Each stop is one unit; notches mark the modules.", render: renderProgress },
  { title: "Student roll number", lead: "Enter your Roll Number to save and sync your study plan across all your devices in real time.", render: renderRollNo }
];

export function openWizard(fromSettings) {
  ui.wizardFromSettings = !!fromSettings;
  ui.draft = fromSettings ? clone(cfg) : defaultCfg();
  if (!fromSettings) ui.draft = { ...defaultCfg(), dept: cfg.dept };
  if (fromSettings) { ui.draft.done = clone(cfg.done); }
  normalizeDraft(ui.draft);
  ui.step = 0;
  ui.wizard = true;
  document.body.style.overflow = "hidden";
  paintWizard();
}

export function closeWizard() {
  ui.wizard = false;
  $("#wizard").classList.remove("open");
  document.body.style.overflow = "";
}

export function paintWizard() {
  const w = $("#wizard"), step = WZ_STEPS[ui.step], d = ui.draft;
  w.classList.add("open");
  const last = ui.step === WZ_STEPS.length - 1;
  w.innerHTML = `<div class="wz">
    <div class="wz-top">
      <div class="brand" style="color:var(--navy-800)"><h1>Setup</h1></div>
      ${cfg.ready ? `<button class="btn sm" id="wz-cancel">Cancel</button>` : ""}
    </div>
    <div class="wz-steps">${WZ_STEPS.map((_, i) => `<i class="${i < ui.step ? "on" : i === ui.step ? "cur" : ""}"></i>`).join("")}</div>
    <h2>${step.title}</h2>
    <p class="lead">${step.lead}</p>
    <div id="wz-body"></div>
  </div>
  <div class="wz-foot"><div>
    <button class="btn" id="wz-back" ${ui.step === 0 ? "disabled" : ""}>${ICON.left} Back</button>
    <button class="btn primary" id="wz-next">${last ? "Build my plan " + ICON.check : "Next " + ICON.right}</button>
  </div></div>`;

  const body = $("#wz-body", w);
  step.render(body, d, () => { updateWizardNext(); });

  $("#wz-back").onclick = () => {
    ui.step--;
    paintWizard();
    w.scrollTop = 0;
  };

  $("#wz-next").onclick = () => {
    if (ui.step === 2 && !editDates(d).some(x => d.days[x] > 0)) {
      toast("Pick at least one study session");
      return;
    }
    if (last) {
      finishSetup(d);
      return;
    }
    ui.step++;
    paintWizard();
    w.scrollTop = 0;
  };

  const c = $("#wz-cancel");
  if (c) c.onclick = closeWizard;
}

export function updateWizardNext() {
  /* hook for future live validation */
}

export function finishSetup(d) {
  normalizeDraft(d);
  if (d.rollNo) d.rollNo = d.rollNo.trim().toUpperCase();
  const fresh = !cfg.ready;
  setCfg({ ...clone(d), ready: true });
  if (fresh || ui.wizardFromSettings) setProg({ sessions: {} });
  save();
  replan();
  closeWizard();
  ui.viewDate = null;
  ui.dirty = false;
  switchTab("plan");
  renderAll();
  toast(d.rollNo ? `Plan built and synced for Roll No ${d.rollNo}!` : "Plan built. Good luck!");
}
