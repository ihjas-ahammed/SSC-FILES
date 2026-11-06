/* =========================================================================
   FIREBASE REALTIME DATABASE SYNC ENGINE (MULTI-DEVICE REAL-TIME SYNC)
   ========================================================================= */

import { toast } from "./utils/dom.js";

export const RTDB_BASE = "https://data-science-ef878-default-rtdb.firebaseio.com";
export const RTDB_PATH = "study_plan_v6_sem6";

export const SYNC_STATE = {
  rollNo: "",
  status: "idle", // 'idle' | 'syncing' | 'synced' | 'error' | 'offline'
  lastSyncTime: 0,
  eventSource: null,
  pushTimer: null,
  onRemoteChange: null
};

/**
 * Sanitize roll number for Firebase Realtime Database path key
 * Firebase prohibits . $ # [ ] / and control characters
 */
export function sanitizeRollNo(raw) {
  if (!raw) return "";
  return String(raw)
    .trim()
    .toUpperCase()
    .replace(/[.#$\[\]\/]/g, "_");
}

export function getSyncUrl(rollNo) {
  const key = sanitizeRollNo(rollNo || SYNC_STATE.rollNo);
  if (!key) return null;
  return `${RTDB_BASE}/${RTDB_PATH}/${encodeURIComponent(key)}.json`;
}

/**
 * Push current configuration & progress to Realtime Database
 * @param {Object} cfg - App configuration
 * @param {Object} prog - User progress object
 * @param {boolean} [immediate=false] - Skip debounce
 */
export function pushCloud(cfg, prog, immediate = false) {
  const rollNo = sanitizeRollNo(cfg?.rollNo || SYNC_STATE.rollNo);
  if (!rollNo) return;

  SYNC_STATE.rollNo = rollNo;
  if (SYNC_STATE.pushTimer) {
    clearTimeout(SYNC_STATE.pushTimer);
    SYNC_STATE.pushTimer = null;
  }

  const executePush = async () => {
    const url = getSyncUrl(rollNo);
    if (!url) return;

    SYNC_STATE.status = "syncing";
    updateSyncBadges();

    const payload = {
      rollNo: rollNo,
      updatedAt: Date.now(),
      cfg: {
        ready: !!cfg.ready,
        dept: cfg.dept || "physics",
        sec: cfg.sec || (cfg.dept === "math" ? "DSP" : "EPD"),
        hours: cfg.hours ?? 1,
        maxPerDay: cfg.maxPerDay ?? 3,
        revision: cfg.revision ?? 1,
        start: cfg.start,
        days: cfg.days || {},
        done: cfg.done || {},
        custom: cfg.custom || [],
        rollNo: rollNo
      },
      prog: {
        sessions: prog?.sessions || {}
      }
    };

    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        SYNC_STATE.status = "synced";
        SYNC_STATE.lastSyncTime = payload.updatedAt;
        updateSyncBadges();
      } else {
        SYNC_STATE.status = "error";
        updateSyncBadges();
      }
    } catch (err) {
      console.warn("[Cloud Sync] Push failed:", err);
      SYNC_STATE.status = "offline";
      updateSyncBadges();
    }
  };

  if (immediate) {
    executePush();
  } else {
    SYNC_STATE.pushTimer = setTimeout(executePush, 700);
  }
}

/**
 * Pull configuration & progress from Realtime Database by Roll Number
 * @param {string} rollNo - Student roll number
 * @returns {Promise<{ ok: boolean, data?: Object, error?: string }>}
 */
export async function pullCloud(rollNo) {
  const key = sanitizeRollNo(rollNo);
  if (!key) return { ok: false, error: "Please enter a valid Roll Number." };

  const url = getSyncUrl(key);
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return { ok: false, error: `Server error (${res.status})` };
    const data = await res.json();
    if (!data || !data.cfg) {
      return { ok: false, error: `No saved plan found for Roll No "${key}".` };
    }
    return { ok: true, data };
  } catch (err) {
    return { ok: false, error: "Network error: could not connect to database." };
  }
}

/**
 * Setup real-time Server-Sent Events (SSE) listener for multi-device sync
 * Updates the plan automatically when another device saves changes
 * @param {string} rollNo
 * @param {Function} onRemoteUpdate - Callback receiving remote data
 */
export function setupRealtimeListener(rollNo, onRemoteUpdate) {
  const key = sanitizeRollNo(rollNo);
  if (!key) return;

  // Close existing listener if roll number changed
  if (SYNC_STATE.eventSource) {
    SYNC_STATE.eventSource.close();
    SYNC_STATE.eventSource = null;
  }

  SYNC_STATE.rollNo = key;
  SYNC_STATE.onRemoteChange = onRemoteUpdate;

  if (typeof window === "undefined" || !window.EventSource) return;

  const streamUrl = getSyncUrl(key);
  if (!streamUrl) return;

  try {
    const es = new EventSource(streamUrl);
    SYNC_STATE.eventSource = es;

    es.addEventListener("put", (e) => {
      try {
        const payload = JSON.parse(e.data);
        if (!payload || !payload.data) return;

        const remote = payload.data;
        // Ignore remote update if it originated from our own recent local push
        if (remote.updatedAt && SYNC_STATE.lastSyncTime && remote.updatedAt <= SYNC_STATE.lastSyncTime) {
          return;
        }

        if (remote.cfg && SYNC_STATE.onRemoteChange) {
          SYNC_STATE.lastSyncTime = remote.updatedAt || Date.now();
          SYNC_STATE.onRemoteChange(remote);
          toast(`Synced updates from Roll No ${key}`);
        }
      } catch (err) {
        console.warn("[Cloud Sync Stream Error]", err);
      }
    });

    es.onerror = () => {
      // EventSource auto-retries in browsers
    };
  } catch (err) {
    console.warn("[Cloud Sync] EventSource initialization failed:", err);
  }
}

/**
 * Update UI badges showing cloud sync state
 */
export function updateSyncBadges() {
  const badge = document.getElementById("cloud-sync-badge");
  if (!badge) return;

  if (!SYNC_STATE.rollNo) {
    badge.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400"><span class="w-2 h-2 rounded-full bg-slate-300"></span>Not connected</span>`;
    return;
  }

  if (SYNC_STATE.status === "syncing") {
    badge.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600"><span class="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>Syncing...</span>`;
  } else if (SYNC_STATE.status === "synced") {
    badge.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700"><span class="w-2 h-2 rounded-full bg-emerald-500"></span>Cloud synced (${SYNC_STATE.rollNo})</span>`;
  } else if (SYNC_STATE.status === "error") {
    badge.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600"><span class="w-2 h-2 rounded-full bg-rose-500"></span>Sync error</span>`;
  } else if (SYNC_STATE.status === "offline") {
    badge.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700"><span class="w-2 h-2 rounded-full bg-amber-500"></span>Offline (saved locally)</span>`;
  }
}
