/* =========================================================================
   UI ICONS & SUBJECT ILLUSTRATIONS (SVG)
   ========================================================================= */

export const ICON = {
  check: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
  left: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`,
  right: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,
  dl: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>`,
  exam: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
  rev: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6v3l4-4-4-4v3a8 8 0 0 0-8 8c0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12a6 6 0 0 1 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8a6 6 0 0 1-6 6v-3l-4 4 4 4v-3a8 8 0 0 0 8-8c0-1.57-.46-3.03-1.24-4.26z"/></svg>`,
  arrow: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,
  clock: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>`,
  book: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>`,
  redo: `<svg class="mi" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 7.73 10h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`
};

export const SUBJECT_SVGS = {
  "icon-electrodynamics": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#93C5FD" fill-opacity="0.45"/>
      <path d="M16 28L28 33M25 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <g transform="rotate(-32 60 62)">
        <path d="M36 30V66C36 79.2548 46.7452 90 60 90C73.2548 90 84 79.2548 84 66V30H70V66C70 71.5228 65.5228 76 60 76C54.4772 76 50 71.5228 50 66V30H36Z" fill="#60A5FA" stroke="#06215C" stroke-width="4" stroke-linejoin="round"/>
        <rect x="36" y="30" width="14" height="12" fill="#E0F2FE" stroke="#06215C" stroke-width="4"/>
        <rect x="70" y="30" width="14" height="12" fill="#E0F2FE" stroke="#06215C" stroke-width="4"/>
        <path d="M43 21C50 13 70 13 77 21" stroke="#06215C" stroke-width="2.8" stroke-dasharray="4 4" stroke-linecap="round"/>
      </g>
    </svg>`,

  "icon-solid-state": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 32L27 36M25 15L32 27" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <rect x="44" y="28" width="46" height="46" stroke="#06215C" stroke-width="3.6" stroke-linejoin="round"/>
      <line x1="28" y1="44" x2="44" y2="28" stroke="#06215C" stroke-width="3.6"/>
      <line x1="74" y1="44" x2="90" y2="28" stroke="#06215C" stroke-width="3.6"/>
      <line x1="28" y1="90" x2="44" y2="74" stroke="#06215C" stroke-width="3.6"/>
      <line x1="74" y1="90" x2="90" y2="74" stroke="#06215C" stroke-width="3.6"/>
      <rect x="28" y="44" width="46" height="46" stroke="#06215C" stroke-width="3.6" stroke-linejoin="round"/>
      <circle cx="44" cy="28" r="6.2" fill="#1D4ED8" stroke="#06215C" stroke-width="3"/>
      <circle cx="90" cy="28" r="6.2" fill="#1D4ED8" stroke="#06215C" stroke-width="3"/>
      <circle cx="44" cy="74" r="6.2" fill="#1D4ED8" stroke="#06215C" stroke-width="3"/>
      <circle cx="90" cy="74" r="6.2" fill="#1D4ED8" stroke="#06215C" stroke-width="3"/>
      <circle cx="28" cy="44" r="6.2" fill="#2563EB" stroke="#06215C" stroke-width="3"/>
      <circle cx="74" cy="44" r="6.2" fill="#2563EB" stroke="#06215C" stroke-width="3"/>
      <circle cx="28" cy="90" r="6.2" fill="#2563EB" stroke="#06215C" stroke-width="3"/>
      <circle cx="74" cy="90" r="6.2" fill="#2563EB" stroke="#06215C" stroke-width="3"/>
    </svg>`,

  "icon-optics": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="64" r="46" fill="#BBF7D0" fill-opacity="0.55"/>
      <path d="M14 28L28 33M24 14L32 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <g stroke="#F59E0B" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
        <line x1="16" y1="48" x2="43" y2="48"/><polyline points="37,43 44,48 37,53"/>
        <line x1="16" y1="64" x2="43" y2="64"/><polyline points="37,59 44,64 37,69"/>
        <line x1="16" y1="80" x2="43" y2="80"/><polyline points="37,75 44,80 37,85"/>
      </g>
      <line x1="65" y1="48" x2="98" y2="64" stroke="#F59E0B" stroke-width="3.4" stroke-linecap="round"/>
      <line x1="66" y1="64" x2="98" y2="64" stroke="#F59E0B" stroke-width="3.4" stroke-linecap="round"/>
      <line x1="65" y1="80" x2="98" y2="64" stroke="#F59E0B" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M55 24C44 46 44 82 55 104C66 82 66 46 55 24Z" fill="#BAE6FD" stroke="#06215C" stroke-width="3.8" stroke-linejoin="round"/>
      <path d="M52 34C48 50 48 76 52 92" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="99" cy="64" r="4" fill="#06215C"/>
    </svg>`,

  "icon-quantum": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#E9D5FF" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <ellipse cx="62" cy="62" rx="42" ry="16" stroke="#06215C" stroke-width="3.3"/>
      <ellipse cx="62" cy="62" rx="42" ry="16" transform="rotate(60 62 62)" stroke="#06215C" stroke-width="3.3"/>
      <ellipse cx="62" cy="62" rx="42" ry="16" transform="rotate(120 62 62)" stroke="#06215C" stroke-width="3.3"/>
      <circle cx="62" cy="62" r="7.5" fill="#7C3AED" stroke="#06215C" stroke-width="3"/>
      <circle cx="20" cy="62" r="4.5" fill="#F59E0B" stroke="#06215C" stroke-width="2.5"/>
      <circle cx="83" cy="26" r="4.5" fill="#38BDF8" stroke="#06215C" stroke-width="2.5"/>
      <circle cx="83" cy="98" r="4.5" fill="#38BDF8" stroke="#06215C" stroke-width="2.5"/>
    </svg>`,

  "icon-materials": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#FED7AA" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="62" y1="62" x2="62" y2="26" stroke="#06215C" stroke-width="3.8"/>
      <line x1="62" y1="62" x2="31" y2="44" stroke="#06215C" stroke-width="3.8"/>
      <line x1="62" y1="62" x2="93" y2="44" stroke="#06215C" stroke-width="3.8"/>
      <line x1="62" y1="62" x2="35" y2="88" stroke="#06215C" stroke-width="3.8"/>
      <line x1="62" y1="62" x2="89" y2="88" stroke="#06215C" stroke-width="3.8"/>
      <circle cx="62" cy="62" r="9" fill="#FB923C" stroke="#06215C" stroke-width="3.5"/>
      <circle cx="62" cy="26" r="6.5" fill="#FDE047" stroke="#06215C" stroke-width="3"/>
      <circle cx="31" cy="44" r="6.5" fill="#38BDF8" stroke="#06215C" stroke-width="3"/>
      <circle cx="93" cy="44" r="6.5" fill="#38BDF8" stroke="#06215C" stroke-width="3"/>
      <circle cx="35" cy="88" r="6.5" fill="#FDE047" stroke="#06215C" stroke-width="3"/>
      <circle cx="89" cy="88" r="6.5" fill="#FDE047" stroke="#06215C" stroke-width="3"/>
    </svg>`,

  "icon-sec-python": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#FECDD3" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <rect x="34" y="22" width="56" height="76" rx="8" fill="#FFFFFF" stroke="#9F1239" stroke-width="3.8"/>
      <line x1="45" y1="38" x2="77" y2="38" stroke="#9F1239" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="45" y1="50" x2="77" y2="50" stroke="#9F1239" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="45" y1="62" x2="77" y2="62" stroke="#9F1239" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="45" y1="74" x2="66" y2="74" stroke="#9F1239" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,

  "icon-real-analysis": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#BAE6FD" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M38 86V58C48 44 58 68 70 50C76 41 82 38 86 38V86H38Z" fill="#7DD3FC" fill-opacity="0.6"/>
      <polyline points="28,26 28,86 96,86" stroke="#06215C" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32 68C44 40 58 72 72 48C79 36 86 34 92 36" stroke="#06215C" stroke-width="4" stroke-linecap="round"/>
      <circle cx="72" cy="48" r="5" fill="#F59E0B" stroke="#06215C" stroke-width="2.8"/>
    </svg>`,

  "icon-abstract-algebra": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#FEF08A" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <polygon points="62,26 28,86 96,86" fill="#FDE047" fill-opacity="0.4" stroke="#06215C" stroke-width="3.8" stroke-linejoin="round"/>
      <circle cx="62" cy="66" r="14" stroke="#06215C" stroke-width="3" stroke-dasharray="5 3"/>
      <circle cx="62" cy="26" r="6.5" fill="#38BDF8" stroke="#06215C" stroke-width="3"/>
      <circle cx="28" cy="86" r="6.5" fill="#F59E0B" stroke="#06215C" stroke-width="3"/>
      <circle cx="96" cy="86" r="6.5" fill="#F59E0B" stroke="#06215C" stroke-width="3"/>
    </svg>`,

  "icon-complex-analysis": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#BBF7D0" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="24" y1="62" x2="98" y2="62" stroke="#06215C" stroke-width="3" stroke-linecap="round"/>
      <line x1="62" y1="24" x2="62" y2="98" stroke="#06215C" stroke-width="3" stroke-linecap="round"/>
      <path d="M62 62C66 56 72 60 70 67C67 76 54 76 50 66C44 52 58 38 74 42C90 46 94 68 82 84" stroke="#06215C" stroke-width="3.8" stroke-linecap="round"/>
      <line x1="62" y1="62" x2="84" y2="38" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="84" cy="38" r="5" fill="#F59E0B" stroke="#06215C" stroke-width="2.8"/>
    </svg>`,

  "icon-convex-opt": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#FED7AA" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <ellipse cx="62" cy="38" rx="32" ry="9" fill="#FDBA74" fill-opacity="0.5" stroke="#06215C" stroke-width="3"/>
      <path d="M30 38C34 74 48 86 62 86C76 86 90 74 94 38" stroke="#06215C" stroke-width="4" stroke-linecap="round"/>
      <line x1="34" y1="86" x2="90" y2="86" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="5 4"/>
      <circle cx="62" cy="86" r="6" fill="#EF4444" stroke="#06215C" stroke-width="3"/>
    </svg>`,

  "icon-machine-learning": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#E9D5FF" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <g stroke="#06215C" stroke-width="2.6">
        <line x1="34" y1="40" x2="62" y2="32"/><line x1="34" y1="40" x2="62" y2="62"/><line x1="34" y1="40" x2="62" y2="90"/>
        <line x1="34" y1="82" x2="62" y2="32"/><line x1="34" y1="82" x2="62" y2="62"/><line x1="34" y1="82" x2="62" y2="90"/>
        <line x1="62" y1="32" x2="90" y2="62"/><line x1="62" y1="62" x2="90" y2="62"/><line x1="62" y1="90" x2="90" y2="62"/>
      </g>
      <circle cx="34" cy="40" r="6.5" fill="#38BDF8" stroke="#06215C" stroke-width="3"/>
      <circle cx="34" cy="82" r="6.5" fill="#38BDF8" stroke="#06215C" stroke-width="3"/>
      <circle cx="62" cy="32" r="6.5" fill="#C084FC" stroke="#06215C" stroke-width="3"/>
      <circle cx="62" cy="62" r="6.5" fill="#C084FC" stroke="#06215C" stroke-width="3"/>
      <circle cx="62" cy="90" r="6.5" fill="#C084FC" stroke="#06215C" stroke-width="3"/>
      <circle cx="90" cy="62" r="7.5" fill="#F59E0B" stroke="#06215C" stroke-width="3"/>
    </svg>`,

  "icon-sec-latex": `
    <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="46" fill="#FECDD3" fill-opacity="0.55"/>
      <path d="M16 28L28 33M26 15L33 26" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round"/>
      <rect x="34" y="22" width="56" height="76" rx="8" fill="#FFFFFF" stroke="#9F1239" stroke-width="3.8"/>
      <path d="M72 38H50L63 55L50 72H72" stroke="#9F1239" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="46" y1="84" x2="78" y2="84" stroke="#9F1239" stroke-width="3" stroke-linecap="round"/>
    </svg>`
};
