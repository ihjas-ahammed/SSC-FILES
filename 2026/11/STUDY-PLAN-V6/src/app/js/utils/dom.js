/* =========================================================================
   DOM QUERY, HTML ESCAPING, TOAST & EMPTY STATE HELPERS
   ========================================================================= */

export const $ = (s, r = document) => r.querySelector(s);

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));

export const clone = (o) => JSON.parse(JSON.stringify(o));

export function toast(msg) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2400);
}

export function emptyHtml(t, p) {
  return `<div class="card empty empty-hero">
    <span class="eh-pill">Nothing here yet</span>
    <h2>${t || "Let's build your plan"}</h2>
    <p class="eh-sub">${p || "Answer a few quick questions and your study plan will appear here."}</p>
    <button class="btn gold eh-cta" onclick="openWizard(false)">Start setup</button>
  </div>`;
}
