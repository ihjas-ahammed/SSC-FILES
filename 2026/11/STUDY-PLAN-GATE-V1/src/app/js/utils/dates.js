/* =========================================================================
   DATE, TIME & CALENDAR GRID MATH HELPERS
   ========================================================================= */

// "?now=2026-10-22T10:00" overrides the clock for testing
const NOW_OVERRIDE = new URLSearchParams(location.search).get("now");

export const now = () => NOW_OVERRIDE ? new Date(NOW_OVERRIDE) : new Date();
export const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
export const parse = (s) => new Date(s + "T00:00:00");
export const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
export const daysBetween = (a, b) => Math.round((parse(b) - parse(a)) / 864e5);
export const todayISO = () => iso(now());

// Before 19:00 the "current" day is today; from 19:00 on it is tomorrow.
export const focusISO = () => now().getHours() >= 19 ? addDays(todayISO(), 1) : todayISO();

export const WD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const wdName = (s) => WD[parse(s).getDay()];
export const wdShort = (s) => wdName(s).slice(0, 3);
export const monName = (s) => MON[parse(s).getMonth()];
export const dayNum = (s) => Number(s.slice(8));
export const niceDate = (s) => `${dayNum(s)} ${monName(s)}`;

export const rangeDates = (a, b) => {
  const out = [];
  for (let d = a; d <= b; d = addDays(d, 1)) out.push(d);
  return out;
};

export const fmtH = (h) => `${Math.round(h * 10) / 10}`.replace(/\.0$/, "");
export const hrs = (h) => `${fmtH(h)} ${h === 1 ? "hr" : "hrs"}`;
export const hm = (h) => `${Math.round(h * 60)} min`;

// Schedule Grid Constants & Time Math
export const SCH_PX_H = 120;          // pixels per hour
export const SCH_PX_MIN = SCH_PX_H / 60;
export const SCH_GUT = 62;            // gutter for hour labels
export const SCH_SNAP = 15;           // minutes
export const SCH_EDGE = 10;           // px from a block edge that counts as a resize handle

export const toMin = (t) => { const [h, m] = String(t).split(":").map(Number); return h * 60 + m; };
export const hhmm = (m) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
export const snapMin = (m) => Math.round(m / SCH_SNAP) * SCH_SNAP;
export const clampMin = (m) => Math.max(0, Math.min(1440, m));
export const durMin = (x) => toMin(x.end) - toMin(x.start);
