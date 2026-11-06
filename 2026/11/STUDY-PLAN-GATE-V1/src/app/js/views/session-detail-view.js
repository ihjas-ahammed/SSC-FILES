/* =========================================================================
   SESSION DETAIL VIEW (Units, Stage Slider, Resources, PYQ & Start Modal)
   ========================================================================= */

import { SUBJECTS, MOD_ROMAN } from "../data/subjects.js";
import { SYS_BASE, SYSTEMS } from "../data/systems.js";
import { RES_RAW, RESOURCES } from "../data/resources.js";
import { GATE_PYQ } from "../data/pyq-gate.js";
import { esc, toast } from "../utils/dom.js";
import { wdName, niceDate, hm } from "../utils/dates.js";
import {
  subj, cleanUnit, unitMod, normUnits,
  MODE_NAMES, MODE_SLIDER, unitCost, usedHrs, availHrs, fitsHrs
} from "../engine/syllabus.js";
import { cfg, save } from "../state.js";
import { renderScheduleTab } from "./schedule-view.js";
import { openUnitPdf, openPdfViewer } from "./pdf-viewer.js";

export const SS = { det: null, onStage: null, onDone: null };
export const unitsData = [];

export const stageConfig = [
  { label: 'Revision', border: 'bg-[#9d5ce5]', dot: 'bg-[#9d5ce5] glow-purple', pill: 'bg-[#f3e8ff] border-[#c4b5fd] text-[#5b21b6]', ring: 'ring-[#9d5ce5]' },
  { label: 'Read', border: 'bg-[#f59e0b]', dot: 'bg-[#f59e0b] glow-amber', pill: 'bg-[#fef3c7] border-[#fcd34d] text-[#92400e]', ring: 'ring-[#f59e0b]' },
  { label: 'Deep Dive', border: 'bg-[#e11d48]', dot: 'bg-[#e11d48] glow-rose', pill: 'bg-[#ffe4e8] border-[#fda4af] text-[#9f1239]', ring: 'ring-[#e11d48]' },
  { label: 'Review', border: 'bg-[#0d9488]', dot: 'bg-[#0d9488]', pill: 'bg-[#ccfbf1] border-[#5eead4] text-[#115e59]', ring: 'ring-[#0d9488]' }
];

const RES_ICON = `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 2v6h6M8 13h8M8 17h5"/></svg>`;
const RES_OPEN = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/></svg>`;
const resHref = (p) => RES_RAW + encodeURI(p);

export function renderUnits() {
  const container = document.getElementById('units-list');
  if (!container) return;
  const sid = SS.det ? SS.det.subjectId : "";
  container.innerHTML = unitsData.map((u, idx) => {
    const sc = stageConfig[u.stage];
    return `
      <div class="unit-card">
        <div class="unit-color-bar ${sc.border}"></div>
        <div class="unit-card-body">
          <div class="unit-card-left">
            <h4 class="unit-card-title" title="${esc(u.name)}">${esc(u.name)}</h4>
            <div class="unit-slider-track">
              <div class="unit-slider-line"></div>
              ${MODE_SLIDER.map((sIdx) => {
                const stepLabel = MODE_NAMES[sIdx];
                const isActive = u.stage === sIdx;
                const activeDotClass = isActive ? stageConfig[sIdx].dot : 'bg-slate-300 hover:bg-slate-400';
                const labelClass = isActive ? 'font-bold text-[#0f172a]' : 'font-medium text-slate-500';
                return `
                  <button onclick="setUnitStage(${idx}, ${sIdx})" class="unit-stage-btn group" title="Set ${esc(u.name)} to ${stepLabel}">
                    <span class="w-3.5 h-3.5 rounded-full transition-all ${activeDotClass}"></span>
                    <span class="text-[11px] ${labelClass}">${stepLabel}</span>
                  </button>`;
              }).join('')}
            </div>
          </div>

          <div class="unit-card-right">
            <button onclick="openUnitPdf('${sid}', ${u.u})" title="Read ${esc(u.name)} in textbook" class="unit-material-btn" aria-label="Read in textbook">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </button>
            <span class="unit-est-badge">${esc(u.estimate)}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

export function setUnitStage(unitIdx, newStage) {
  if (SS.onStage && !SS.onStage(unitIdx, newStage)) return;
  unitsData[unitIdx].stage = newStage;
  renderUnits();
}

export function toggleUnitEstimate() {
  // The estimate is computed from the stage; nothing to toggle.
}

export function ssSwitchTab(tab) {
  ['session', 'resources', 'pyq'].forEach(t => {
    const panel = document.getElementById('panel-' + t);
    const btn = document.getElementById('tab-btn-' + t);
    const on = t === tab;
    panel.classList.toggle('hidden', !on);
    btn.className = on
      ? 'py-2.5 px-3 rounded-[12px] font-display font-bold text-[13.5px] transition-all bg-[#1849a9] text-white shadow-sm relative'
      : 'py-2.5 px-3 rounded-[12px] font-display font-semibold text-[13.5px] text-slate-600 hover:text-slate-900 transition-all relative';
  });
  const divider = document.getElementById('tab-divider');
  if (divider) divider.style.display = tab === 'session' ? 'block' : 'none';
}

export function sysFor(det) {
  const S = SYSTEMS[det.subjectId] || null;
  const units = normUnits(det.units).map(v => v.u).filter(u => SUBJECTS[det.subjectId].units.some(x => x.u === u));
  const inside = S ? units.filter(u => S.modules.includes(String(unitMod(det.subjectId, u)))) : [];
  return { S, units, inside, outside: units.filter(u => !inside.includes(u)) };
}

export function sysUrl(S, det, units) {
  const q = new URLSearchParams({ from: "study-plan", subject: det.subjectId, session: det.id, units: units.join(",") });
  const at = S.at && S.at[units[0]];
  return SYS_BASE + S.url + "?" + q.toString() + (at ? "#" + at : "");
}

export function startSessionReader() {
  const det = SS.det;
  if (!det) return;
  const list = normUnits(det.units);
  if (!list.length) {
    toast("No units in this session");
    return;
  }
  const firstUnit = list[0].u;
  openUnitPdf(det.subjectId, firstUnit);
}

export function openStartModal() {
  // Directly start the in-app reader for the session without opening broken or obsolete modals
  startSessionReader();
}

export function closeStartModal() {
  document.getElementById('start-modal-backdrop')?.classList.add('hidden');
}

export function startWithNotes() {
  startSessionReader();
}

export function setStatusState(state) {
  const badge = document.getElementById('hero-status-badge');
  const dot = document.getElementById('hero-status-dot');
  const text = document.getElementById('hero-status-text');
  const detailBox = document.getElementById('detail-status-box');
  const detailDot = document.getElementById('detail-status-dot');
  const detailText = document.getElementById('detail-status-text');

  if (state === 'progress') {
    badge.className = 'shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold shadow-sm transition';
    dot.className = 'w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse';
    text.textContent = 'In progress';
    detailBox.className = 'w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0';
    detailDot.className = 'w-4 h-4 rounded-full bg-amber-500';
    detailText.textContent = 'In progress';
  } else if (state === 'done') {
    badge.className = 'shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold shadow-sm transition';
    dot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500';
    text.textContent = 'Done';
    detailBox.className = 'w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0';
    detailDot.className = 'w-4 h-4 rounded-full bg-emerald-500';
    detailText.textContent = 'Done';
  } else {
    badge.className = 'shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe4e8] border border-rose-200/90 text-[#d92d20] text-xs font-semibold shadow-sm transition';
    dot.className = 'w-2.5 h-2.5 rounded-full bg-[#e11d48]';
    text.textContent = 'Not done';
    detailBox.className = 'w-10 h-10 rounded-xl bg-[#ffe8ec] flex items-center justify-center shrink-0';
    detailDot.className = 'w-4 h-4 rounded-full bg-[#e11d48]';
    detailText.textContent = 'Not done';
  }
}

export function cycleStatus() {
  if (SS.onDone) SS.onDone();
}

export function fillSampleDetails() {}

export function downloadResource(btn, title) {
  const span = btn.querySelector('span');
  span.textContent = 'Saved ✓';
  btn.classList.replace('text-[#1d4ed8]', 'text-emerald-700');
  toast(`Downloaded "${title}" PDF`);
  setTimeout(() => {
    span.textContent = 'Download';
    btn.classList.replace('text-emerald-700', 'text-[#1d4ed8]');
  }, 2000);
}

export function addPermutationResource() {
  const slot = document.getElementById('permutations-resource-slot');
  if (!slot) return;
  slot.innerHTML = `
    <div class="flex items-center gap-3 min-w-0">
      <div class="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 2v6h6M8 13h8M8 17h5"/>
        </svg>
      </div>
      <div class="min-w-0">
        <div class="font-display font-bold text-sm text-slate-900 truncate">Gallian Ch. 5 — Permutation Groups</div>
        <div class="text-xs text-slate-500">Pages 94–110</div>
      </div>
    </div>
    <button onclick="downloadResource(this, 'Gallian Ch. 5')" class="px-3 py-1.5 rounded-xl bg-[#f0f6ff] hover:bg-blue-100/80 border border-blue-200/80 text-[#1d4ed8] font-semibold text-xs flex items-center gap-1.5 shrink-0 transition">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/></svg>
      <span>Download</span>
    </button>`;
  toast('Added Gallian Ch. 5 to Permutations');
}

function resRow(item, subjName) {
  const displayTitle = item.label || item.name;
  const isPdf = (item.path || '').toLowerCase().endsWith('.pdf');
  const href = resHref(item.path);
  const sizeSub = item.sizeStr ? `${item.name} · ${item.sizeStr}` : (item.name || '');

  // Icon & Badge by category
  let iconHtml = '';
  let badgeHtml = '';

  if (item.category === 'notes') {
    iconHtml = `<div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center shrink-0">
      <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
    </div>`;
    badgeHtml = `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-200/70 shrink-0">Notes</span>`;
  } else if (item.category === 'textbook') {
    iconHtml = `<div class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center shrink-0">
      <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
    </div>`;
    badgeHtml = `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200/70 shrink-0">Textbook</span>`;
  } else if (item.category === 'syllabus') {
    iconHtml = `<div class="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/60 flex items-center justify-center shrink-0">
      <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934a1.12 1.12 0 01-1.006 0L9.503 3.31a1.125 1.125 0 00-1.006 0L3.622 5.748A1.125 1.125 0 003 6.754v11.93c0 .836.88 1.38 1.628 1.006l3.869-1.934a1.12 1.12 0 011.006 0l4.994 2.497a1.12 1.12 0 001.006 0z"/></svg>
    </div>`;
    badgeHtml = `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-indigo-50 text-indigo-700 border border-indigo-200/70 shrink-0">Syllabus</span>`;
  } else {
    iconHtml = `<div class="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">${RES_ICON}</div>`;
    badgeHtml = `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-200 shrink-0">${esc(item.badge || 'Ref')}</span>`;
  }

  return `<div class="py-3 flex items-center justify-between gap-3">
    <div class="flex items-center gap-3 min-w-0">
      ${iconHtml}
      <div class="min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-display font-bold text-sm text-slate-900 truncate">${esc(displayTitle)}</span>
          ${badgeHtml}
        </div>
        ${sizeSub ? `<div class="text-xs text-slate-500 truncate mt-0.5">${esc(sizeSub)}</div>` : ''}
      </div>
    </div>
    <div class="flex items-center gap-2 shrink-0">
      ${isPdf ? `
      <button onclick="openPdfViewer({ url: '${esc(item.path)}', title: '${esc(subjName)}', sectionTitle: '${esc(displayTitle)}', page: 1, rawUrl: '${esc(href)}' })" class="px-3 py-1.5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-95 text-white font-bold text-xs inline-flex items-center gap-1.5 transition shadow-2xs cursor-pointer" title="Read in in-app reader">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
        <span>Read</span>
      </button>` : `
      <a href="${esc(href)}" target="_blank" rel="noopener" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs inline-flex items-center gap-1.5 transition shadow-2xs" title="Open in new tab">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        <span>Open</span>
      </a>`}
      <a href="${esc(href)}" download="${esc(item.name || '')}" target="_blank" rel="noopener" class="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 font-bold text-xs inline-flex items-center gap-1.5 transition shadow-2xs hover:border-slate-300" title="Download file">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/></svg>
        <span>Download</span>
      </a>
    </div>
  </div>`;
}

export function resourcesHtml(det) {
  const R = RESOURCES[det.subjectId];
  if (!R) return `<p class="text-sm font-medium text-slate-500">No files for this subject yet.</p>`;
  const s = SUBJECTS[det.subjectId];
  const subjName = s ? s.name : det.subjectId;

  // Identify which module(s) are in this session
  const sessionUnits = normUnits(det.units).map(v => v.u).filter(u => s && s.units.some(x => x.u === u));
  const activeMods = new Set(sessionUnits.map(u => String(unitMod(det.subjectId, u))));

  // Render all 4 modules, highlighting the ones active in this session
  const modKeys = ["1", "2", "3", "4"];
  let cards = modKeys.map(m => {
    const items = (R.modules && R.modules[m]) || [];
    const isActive = activeMods.has(m);
    const activeUnits = sessionUnits.filter(u => String(unitMod(det.subjectId, u)) === m);

    const rows = items.length
      ? items.map(it => resRow(it, subjName)).join("")
      : `<p class="py-2.5 text-xs font-medium text-slate-400">No resources indexed for Module ${m} yet.</p>`;

    return `
      <section class="bg-white rounded-[20px] p-4 sm:p-5 border ${isActive ? 'border-blue-200/90 ring-1 ring-blue-500/20 shadow-xs' : 'border-slate-200/85 shadow-2xs'} space-y-3">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center gap-2">
            <h4 class="font-display font-bold text-[15px] text-slate-900">${esc(MOD_ROMAN[m] || "Module " + m)}</h4>
            ${isActive ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">Current Session (${activeUnits.length} units)</span>` : ''}
          </div>
          <span class="text-xs font-bold text-slate-500 shrink-0">${items.length} file${items.length === 1 ? '' : 's'}</span>
        </div>
        <div class="divide-y divide-slate-100">${rows}</div>
      </section>`;
  }).join("");

  if (R.extra && R.extra.length) {
    cards += `
      <section class="bg-white rounded-[20px] p-4 sm:p-5 border border-slate-200/85 shadow-2xs space-y-3">
        <div class="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h4 class="font-display font-bold text-[15px] text-slate-900">Syllabus & Course Roadmap</h4>
          <span class="text-xs font-bold text-slate-500 shrink-0">${R.extra.length} item${R.extra.length === 1 ? '' : 's'}</span>
        </div>
        <div class="divide-y divide-slate-100">${R.extra.map(it => resRow(it, subjName)).join("")}</div>
      </section>`;
  }

  return `<div class="space-y-4">${cards}</div>`;
}

export function pyqHtml(det) {
  const s = SUBJECTS[det.subjectId];
  if (!s) return `<p class="text-sm font-medium text-slate-500">No course data found.</p>`;
  const sel = [...new Set(normUnits(det.units).map(v => v.u))]
    .filter(u => s.units.some(x => x.u === u))
    .sort((a, b) => a - b);
  if (!sel.length) return `<p class="text-sm font-medium text-slate-500">No units in this session.</p>`;

  const subjPyq = GATE_PYQ[det.subjectId] || {};
  const mods = [...new Set(sel.map(u => String(unitMod(det.subjectId, u))))];
  const cards = mods.map(m => {
    const mNum = Number(m);
    const mItems = subjPyq[mNum] || [];
    const rows = mItems.length
      ? mItems.map(it => `<div class="py-3 px-3 border-t border-slate-100 first:border-t-0">
          <div class="flex items-center justify-between gap-3 mb-1">
            <div class="min-w-0">
              <span class="font-display font-bold text-[13px] text-slate-900">${esc(it.t)}</span>
              <div class="text-xs text-slate-500">${esc(it.m)} ${it.y} · ${it.k} marks · ${esc(it.s)}</div>
            </div>
          </div>
          <p class="text-[13px] text-slate-700 leading-relaxed">${esc(it.q)}</p>
        </div>`).join("")
      : `<p class="px-3 py-2 text-xs font-medium text-slate-500">No official GATE DA PYQs mapped to this module yet.</p>`;

    return `
      <section class="bg-white rounded-[20px] p-4 sm:p-5 border border-slate-200/85 shadow-2xs space-y-3">
        <div class="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h4 class="font-display font-bold text-[15px] text-slate-900">${esc(MOD_ROMAN[m] || 'Module ' + m)}</h4>
          <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">${mItems.length} PYQs</span>
        </div>
        <div class="space-y-1">${rows}</div>
      </section>`;
  }).join("");
  return `<div class="space-y-4">${cards}</div>`;
}

export function ssUpdate(id, change) {
  const x = (cfg.custom || []).find(v => v.id === id);
  if (!x) return;
  change(x);
  save();
  renderScheduleTab();
}

export function ssFill(det) {
  SS.det = det;
  const s = subj(det.subjectId, cfg);
  document.getElementById('hero-title').textContent = s.name;
  document.getElementById('hero-sub').textContent = det.name;
  document.getElementById('detail-date').textContent = `${wdName(det.date)}, ${niceDate(det.date)} ${det.date.slice(0, 4)}`;
  document.getElementById('detail-time').textContent = `${det.start} – ${det.end}`;
  document.getElementById('detail-duration').textContent = `${hm(usedHrs(det))} of ${hm(availHrs(det))}`;
  const fillBtn = document.getElementById('fill-details-btn');
  if (fillBtn) fillBtn.remove();
  setStatusState(det.done ? 'done' : 'not-done');

  const mainStart = document.getElementById('ss-main-start');
  if (mainStart) {
    mainStart.disabled = false;
    mainStart.title = 'Start reading textbook in app';
    mainStart.onclick = () => startSessionReader();
  }

  unitsData.length = 0;
  normUnits(det.units).forEach(v => {
    const u = SUBJECTS[det.subjectId].units.find(x => x.u === v.u);
    if (u) {
      unitsData.push({
        u: u.u,
        name: cleanUnit(u.text),
        stage: v.mode,
        estimate: hm(unitCost(det.subjectId, u.u, v.mode))
      });
    }
  });

  SS.onStage = (idx, mode) => {
    const next = unitsData.map((x, i) => ({ u: x.u, mode: i === idx ? mode : x.stage }));
    const total = next.reduce((t, v) => t + unitCost(det.subjectId, v.u, v.mode), 0);
    if (!fitsHrs(total, availHrs(det))) {
      toast("Not enough time in this session for " + MODE_NAMES[mode]);
      return false;
    }
    ssUpdate(det.id, x => { x.units = next; });
    return true;
  };

  SS.onDone = () => ssUpdate(det.id, x => { x.done = !x.done; });
  document.getElementById('panel-resources').innerHTML = resourcesHtml(det);
  document.getElementById('panel-pyq').innerHTML = pyqHtml(det);
  renderUnits();
}

if (typeof window !== "undefined") {
  window.startSessionReader = startSessionReader;
  window.openStartModal = startSessionReader;
  window.closeStartModal = closeStartModal;
  window.startWithNotes = startWithNotes;
  window.setUnitStage = setUnitStage;
  window.toggleUnitEstimate = toggleUnitEstimate;
  window.ssSwitchTab = ssSwitchTab;
  window.ssFill = ssFill;
  window.renderUnits = renderUnits;
}
