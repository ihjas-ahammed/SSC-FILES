/* =========================================================================
   MAIN ENTRY POINT, APP SHELL ROUTING & INITIALIZATION
   ========================================================================= */

import { $, esc, toast } from "./utils/dom.js";
import { todayISO, daysBetween } from "./utils/dates.js";
import { examsOf } from "./engine/syllabus.js";
import { cfg, prog, plan, ui, load, replan } from "./state.js";
import { openWizard } from "./views/wizard.js";
import { renderPlan } from "./views/plan-view.js";
import { renderDay, fitTopicLists } from "./views/day-view.js";
import { renderScheduleTab } from "./views/schedule-view.js";
import { renderSettings } from "./views/settings-view.js";
import {
  setUnitStage,
  toggleUnitEstimate,
  ssSwitchTab,
  openStartModal,
  closeStartModal,
  startWithNotes,
  cycleStatus,
  fillSampleDetails,
  downloadResource,
  addPermutationResource
} from "./views/session-detail-view.js";

// Expose global handlers used by inline onclick="..." attributes in HTML templates
Object.assign(window, {
  openWizard,
  setUnitStage,
  toggleUnitEstimate,
  ssSwitchTab,
  openStartModal,
  closeStartModal,
  startWithNotes,
  cycleStatus,
  fillSampleDetails,
  downloadResource,
  addPermutationResource,
  showToast: toast
});

export function switchTab(tab) {
  ui.tab = tab;
  document.querySelectorAll(".tab").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === tab);
    b.setAttribute("aria-selected", b.dataset.tab === tab);
  });
  document.querySelectorAll(".view").forEach(v => {
    v.classList.toggle("active", v.id === "view-" + tab);
  });
  if (tab === "settings") {
    ui.settingsDraft = false;
    renderSettings();
  }
  if (tab === "day") renderDay();
  if (tab === "plan") renderPlan();
  if (tab === "schedule") {
    ui.schedSnap = true;
    renderScheduleTab();
  }
  if (tab !== "schedule") {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

export function renderStats() {
  const el = $("#hdr-stats");
  if (!el) return;
  if (!cfg.ready) {
    el.innerHTML = "";
    return;
  }
  const done = plan.sessions.filter(s => prog.sessions[s.id]).length;
  const nextEx = examsOf(cfg).find(s => s.examDate >= todayISO());
  el.innerHTML = `<span>${done}/${plan.sessions.length} sessions</span>${
    nextEx ? `<span>${esc(nextEx.shortName)} exam in ${daysBetween(todayISO(), nextEx.examDate)}d</span>` : ""
  }`;
}

export function renderAll() {
  renderStats();
  if (ui.tab === "plan") renderPlan();
  else if (ui.tab === "day") renderDay();
  else if (ui.tab === "schedule") renderScheduleTab();
  else if (ui.tab === "settings") renderSettings();
}

// Event Listeners
document.querySelectorAll(".tab").forEach(b => {
  b.onclick = () => switchTab(b.dataset.tab);
});

document.addEventListener("keydown", (e) => {
  if (ui.tab !== "day" || ui.wizard || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  const i = plan.dates.indexOf(ui.viewDate);
  if (e.key === "ArrowLeft" && i > 0) {
    ui.viewDate = plan.dates[i - 1];
    renderDay();
  }
  if (e.key === "ArrowRight" && i < plan.dates.length - 1) {
    ui.viewDate = plan.dates[i + 1];
    renderDay();
  }
});

window.addEventListener("resize", fitTopicLists);
document.fonts.ready.then(fitTopicLists);

// Boot Application
load();
replan();
switchTab("plan");
renderStats();
if (!cfg.ready) openWizard(false);

// Register PWA Service Worker
if ("serviceWorker" in navigator && /^https?:/.test(location.protocol)) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
