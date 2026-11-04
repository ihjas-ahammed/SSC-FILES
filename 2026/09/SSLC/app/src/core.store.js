/* ══════════════════════════════════════════════════════════════════════════
   Progress store.

   Six things are tracked, and they are kept apart on purpose:

     completion   Level 1. You have encountered the material. Never evidence
                  of recall.
     task work    Level 2 and 3. An exercise ('w:'), a past-paper question
                  ('p:') or a derivation (the concept id) worked through
                  yourself. Awarded per task, never for opening the note.
     first try    the FIRST recorded attempt at a card or a question. Later
                  attempts are allowed but never overwrite the first, because
                  the first attempt is the only honest measurement.
     the day log  how much was done on each calendar day. Streaks and the
                  daily goal read it; it proves nothing about mastery.
     mistakes     why an attempt went wrong, one tag per miss.
     calibration  how sure the learner said they were, against what happened.

   The shape is built for merging. Two devices can both make progress offline,
   so every mutation is timestamped and every removal leaves a tombstone —
   merge(a,b) == merge(b,a), and merging twice changes nothing. core.sync.js
   depends on that and on nothing else.

   Storage is localStorage with an in-memory fallback so a locked-down browser
   degrades to a working-but-forgetful session instead of a broken one.
   ══════════════════════════════════════════════════════════════════════════ */

const Store = (function () {

  function isMock() {
    if (typeof DATA_KIND !== 'undefined' && DATA_KIND === 'mock') return true;
    if (typeof DATA_SOURCES !== 'undefined' && DATA_SOURCES.use === 'mock') return true;
    if (typeof window !== 'undefined' && window.location && window.location.pathname.indexOf('-test') >= 0) return true;
    return false;
  }
  const KEY = isMock() ? 'sslc.v1.mock' : 'sslc.v1';
  const LEGACY_KEY = 'ssc4.level1.v1';
  const EMPTY = {
    v: 3,
    done: {}, undone: {},        /* Level 1 completion + tombstones */
    proofs: {}, unproofs: {},    /* exercise, past-paper and derivation work + tombstones */
    cards: {}, omr: {}, write: {}, drafts: {}, draftsAt: {},
    days: {},                    /* 'YYYY-MM-DD' -> activity counters (streaks, daily goal) */
    errs: {},                    /* attempt id -> why it went wrong (the mistake log) */
    cal: {},                     /* attempt id -> confidence vs outcome (calibration) */
    prefs: {}, prefsAt: {},
    updated: 0
  };

  let volatile = false;
  let state = load();
  const listeners = [];

  function blank() { return JSON.parse(JSON.stringify(EMPTY)); }

  /* v1 had no tombstones, no proof map and no per-key preference stamps.
     Everything it did have keeps its meaning, so the upgrade is a fill-in. */
  function upgrade(raw) {
    const s = Object.assign(blank(), raw || {});
    ['done', 'undone', 'proofs', 'unproofs', 'cards', 'omr', 'write', 'drafts', 'draftsAt', 'days', 'errs', 'cal', 'prefs', 'prefsAt']
      .forEach(function (k) { if (!s[k] || typeof s[k] !== 'object') s[k] = {}; });
    s.v = 3;
    if (!s.updated) s.updated = Date.now();
    return s;
  }

  function load() {
    try {
      let raw = window.localStorage.getItem(KEY);
      if (!raw && !isMock()) {
        /* first run under the new key: carry the old record across */
        const old = window.localStorage.getItem(LEGACY_KEY);
        if (old) { raw = old; window.localStorage.setItem(KEY, old); }
      }
      if (!raw) return blank();
      return upgrade(JSON.parse(raw));
    } catch (e) {
      volatile = true;
      return blank();
    }
  }

  function write() {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { volatile = true; }
  }

  const flush = DOM.debounce(write, 250);

  /* Write immediately, skipping the debounce. Anything the very next page load
     depends on has to go through here: a debounced write is still pending when
     `location.reload()` tears the page down, and signing in or out and then
     reloading would land back where you started. */
  function flushNow() { write(); }

  function save(quiet) {
    state.updated = Date.now();
    flush();
    if (!quiet) listeners.forEach(function (fn) { try { fn(); } catch (e) { /* a listener must never break a save */ } });
  }

  /* core.sync.js subscribes here; nothing else needs to. */
  function onChange(fn) { listeners.push(fn); }

  /* ── a tick with a tombstone, used by completion and by proof work ────── */
  function flag(on, off, id, want) {
    const now = Date.now();
    if (want) { state[on][id] = now; delete state[off][id]; }
    else { state[off][id] = now; delete state[on][id]; }
    save();
    return !!state[on][id];
  }

  /* ── the day log ─────────────────────────────────────────────────────────
     One row per calendar day, a handful of counters. Streaks and the daily
     goal are read off it; nothing else is. Days are local dates, because a
     study day is the day the learner lived, not UTC. */
  function dayKey(d) {
    const x = d || new Date();
    const m = x.getMonth() + 1, day = x.getDate();
    return x.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }
  function bump(kind, n) {
    const k = dayKey();
    const row = state.days[k] || (state.days[k] = {});
    row[kind] = (row[kind] || 0) + (n == null ? 1 : n);
    row.at = Date.now();
    save();
    return row;
  }
  const day = k => state.days[k || dayKey()] || null;
  const days = () => state.days;

  /* ── completion (Level 1) ────────────────────────────────────────────── */
  const isDone = id => !!state.done[id];
  function setDone(id, on) {
    const was = !!state.done[id];
    const r = flag('done', 'undone', id, on);
    if (on && !was) bump('reads');
    return r;
  }

  /* Tick a whole list in one write — the prerequisite cascade. Returns the
     ids that actually changed, so the caller can report honestly. */
  function setDoneMany(ids, on) {
    const now = Date.now();
    const hit = [];
    (ids || []).forEach(function (id) {
      if (!!state.done[id] === !!on) return;
      hit.push(id);
      if (on) { state.done[id] = now; delete state.undone[id]; }
      else { state.undone[id] = now; delete state.done[id]; }
    });
    if (hit.length) save();
    return hit;
  }

  /* ── task work (Levels 2 and 3) ──────────────────────────────────────────
     One flag map for "I produced this myself", under two kinds of key:
       '<conceptId>'      a proof worked through          — earns level 2
       'w:<questionId>'   a written exercise worked out   — earns level 3
     They share a map because they are the same kind of claim and merge the
     same way; core.progress.js is what gives each key its meaning. */
  const isProofDone = id => !!state.proofs[id];
  function setProofDone(id, on) {
    const was = !!state.proofs[id];
    const r = flag('proofs', 'unproofs', id, on);
    if (on && !was) bump(id.indexOf('w:') === 0 ? 'exercises' : id.indexOf('p:') === 0 ? 'pyq' : 'proofs');
    return r;
  }

  /* ── recall cards ────────────────────────────────────────────────────── */
  /* grade: 'got' | 'partly' | 'missed'

     `box` is the Leitner box the reel schedules from: it rises when you state
     a card, steps back when you half-state it and resets when you miss it.
     The interval each box buys is core.progress.js's business — this only has
     to store the number and, critically, MERGE it (see mergeAttempts). */
  const card = id => state.cards[id] || null;
  function gradeCard(id, grade) {
    const rec = state.cards[id] || (state.cards[id] = { tries: 0 });
    rec.tries += 1;
    rec.last = grade;
    rec.lastAt = Date.now();
    rec.box = Progress.nextBox(rec.box, grade);
    if (!rec.first) { rec.first = grade; rec.firstAt = rec.lastAt; }  /* first attempt is final */
    bump('reviews');
    save();
    return rec;
  }

  /* ── objective questions ─────────────────────────────────────────────── */
  const omr = id => state.omr[id] || null;
  function lockOmr(id, result) {
    const rec = state.omr[id] || (state.omr[id] = { tries: 0 });
    rec.tries += 1;
    rec.last = { given: result.given, verdict: result.verdict, ms: result.ms, at: Date.now() };
    if (!rec.first) rec.first = rec.last;
    bump('questions');
    save();
    return rec;
  }

  /* ── the mistake log ─────────────────────────────────────────────────────
     After a miss, one tap says WHY: a careless slip, a forgotten formula, the
     wrong method, a misread question, or simply not knowing. The reason is
     what makes the log useful — "wrong" tells you nothing about what to fix.
     Keyed by the attempt (a card id or 'q:<question id>'); the latest reason
     for an attempt wins on merge. */
  const err = id => state.errs[id] || null;
  function tagError(id, why, cid) {
    state.errs[id] = { why: why, cid: cid || null, at: Date.now() };
    save();
    return state.errs[id];
  }
  function clearError(id) { delete state.errs[id]; save(); }
  const errs = () => state.errs;

  /* ── calibration ─────────────────────────────────────────────────────────
     Before an answer is revealed the learner says how sure they are (1 no
     idea, 2 not sure, 3 sure); after it, the outcome is known. Confidence
     against outcome is the one number that tells a learner whether they can
     trust their own feeling of knowing. Keyed by attempt, latest wins. */
  function recordConfidence(id, conf, ok, cid) {
    state.cal[id] = { c: conf, ok: !!ok, cid: cid || null, at: Date.now() };
    save();
    return state.cal[id];
  }
  const cal = () => state.cal;

  /* ── writing drafts ──────────────────────────────────────────────────── */
  const draft = cid => (state.write[cid] && state.write[cid].tex) || '';
  function saveDraft(cid, tex) {
    if (!tex.trim()) delete state.write[cid];
    else state.write[cid] = { tex: tex, at: Date.now() };
    save();
  }

  /* ── question response drafts (survives language toggle and reload) ──── */
  function responseDraft(qid) {
    if (!state.drafts) state.drafts = {};
    return state.drafts[qid] !== undefined ? state.drafts[qid] : null;
  }
  function saveResponseDraft(qid, val) {
    if (!state.drafts) state.drafts = {};
    state.draftsAt[qid] = Date.now();
    if (val === null || val === undefined) {
      delete state.drafts[qid];
    } else {
      state.drafts[qid] = val;
    }
    save(true);
  }
  function clearResponseDraft(qid) {
    saveResponseDraft(qid, null);
  }

  /* ── preferences ─────────────────────────────────────────────────────── */
  const pref = (k, d) => (k in state.prefs ? state.prefs[k] : d);
  function setPref(k, v) {
    state.prefs[k] = v;
    state.prefsAt[k] = Date.now();
    save();
    return v;
  }

  /* ── identity and profiles ──────────────────────────────────────────────
     Local guest profile by default with stable profileId.
     Remote multi-device sync is optional and explicitly enabled. */
  function profileId() {
    let pid = pref('profileId', '');
    if (!pid) {
      pid = 'prof_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
      setPref('profileId', pid);
    }
    return pid;
  }
  function displayName() {
    return pref('displayName', '') || pref('syncName', '') || '';
  }
  function setDisplayName(n) {
    setPref('displayName', String(n || '').trim());
  }
  function selectedCourse() {
    const selected = pref('course', 'm10');
    if (typeof Pool === 'undefined') return selected;
    const courses = Pool.courses().filter(c => !c.pending);
    return courses.some(c => c.id === selected) ? selected : (courses[0] || {}).id || selected;
  }
  function setSelectedCourse(c) {
    setPref('course', c || 'm10');
  }
  function isOnboarded() {
    return !!pref('onboarded', false);
  }
  function setOnboarded(b) {
    setPref('onboarded', !!b);
  }

  const identity = () => ({
    name: pref('syncName', ''),
    roll: pref('syncRoll', ''),
    displayName: displayName(),
    profileId: profileId(),
    syncEnabled: !!pref('syncEnabled', false)
  });
  const signedIn = () => {
    const id = identity();
    return !!(String(id.name).trim() && String(id.roll).trim());
  };
  const syncEnabled = () => signedIn() && !!pref('syncEnabled', false);
  function signIn(name, roll, dName) {
    setPref('syncName', String(name || '').trim());
    setPref('syncRoll', String(roll || '').trim());
    if (dName) setPref('displayName', String(dName).trim());
    else if (!pref('displayName', '')) setPref('displayName', String(name || '').trim());
    setPref('syncEnabled', true);
    setPref('onboarded', true);
    flushNow();
    return signedIn();
  }
  function signOut() {
    setPref('syncName', '');
    setPref('syncRoll', '');
    setPref('syncEnabled', false);
    flushNow();
  }

  /* ── aggregate stats over a given universe of ids ────────────────────── */
  function summary(conceptIds, cardIds, omrIds, proofIds) {
    const notes = conceptIds.filter(isDone).length;
    let tried = 0, got = 0, partly = 0;
    cardIds.forEach(function (id) {
      const r = state.cards[id];
      if (!r || !r.first) return;
      tried += 1;
      if (r.first === 'got') got += 1;
      else if (r.first === 'partly') partly += 1;
    });
    let locked = 0, right = 0, part = 0;
    omrIds.forEach(function (id) {
      const r = state.omr[id];
      if (!r || !r.first) return;
      locked += 1;
      if (r.first.verdict === 'correct') right += 1;
      else if (r.first.verdict === 'partial') part += 1;
    });
    const pf = proofIds || [];
    return {
      notes: { done: notes, total: conceptIds.length },
      cards: { tried: tried, got: got, partly: partly, total: cardIds.length },
      omr: { locked: locked, correct: right, partial: part, total: omrIds.length },
      proofs: { done: pf.filter(isProofDone).length, total: pf.length }
    };
  }

  /* ── merging two devices ─────────────────────────────────────────────────
     Loss-free and order-independent. The rules follow from what each field
     means rather than from a single "newest wins": a first attempt is a
     measurement, so the EARLIER one survives; a tick is a decision, so the
     LATER one survives. */
  function mergeFlags(a, b, ta, tb) {
    const on = {}, off = {};
    [a, b].forEach(src => { for (const k in (src || {})) if (!(on[k] >= src[k])) on[k] = src[k]; });
    [ta, tb].forEach(src => { for (const k in (src || {})) if (!(off[k] >= src[k])) off[k] = src[k]; });
    for (const k in off) {
      if (!on[k]) continue;
      if (off[k] > on[k]) delete on[k];   /* un-ticked after the tick */
      else delete off[k];                 /* tombstone spent */
    }
    return { on: on, off: off };
  }

  function mergeAttempts(A, B, firstKey) {
    const out = {};
    const ids = {};
    for (const k in (A || {})) ids[k] = true;
    for (const k in (B || {})) ids[k] = true;
    for (const id in ids) {
      const x = (A || {})[id], y = (B || {})[id];
      if (!x || !y) { out[id] = JSON.parse(JSON.stringify(x || y)); continue; }
      const rec = { tries: Math.max(x.tries || 0, y.tries || 0) };

      /* the honest first attempt is the earliest one either device saw */
      const fx = x.first ? (x.firstAt || (x.first.at || 0)) : Infinity;
      const fy = y.first ? (y.firstAt || (y.first.at || 0)) : Infinity;
      const first = fx <= fy ? x : y;
      if (first.first) {
        rec.first = first.first;
        if (first.firstAt) rec.firstAt = first.firstAt;
      }

      /* the latest pass is the one worth showing */
      const lx = x.lastAt || (x.last && x.last.at) || 0;
      const ly = y.lastAt || (y.last && y.last.at) || 0;
      const last = lx >= ly ? x : y;
      if (last.last) {
        rec.last = last.last;
        if (last.lastAt) rec.lastAt = last.lastAt;
      }
      /* The schedule travels with the latest pass. Rebuilding the record field
         by field is what drops anything not named here, so a new field has to
         be added in BOTH places or every sync quietly resets it. */
      if (last.box != null) rec.box = last.box;
      out[id] = rec;
    }
    return out;
  }

  function mergeStates(A, B) {
    A = upgrade(A); B = upgrade(B);
    const done = mergeFlags(A.done, B.done, A.undone, B.undone);
    const proof = mergeFlags(A.proofs, B.proofs, A.unproofs, B.unproofs);

    /* Response drafts need their own clocks, including deletion stamps. A
       sync must neither erase an unfinished answer nor revive a cleared one.
       Existing unstamped drafts inherit the old record's update time. */
    const drafts = {}, draftsAt = {};
    const draftIds = new Set(Object.keys(A.drafts).concat(Object.keys(B.drafts),
      Object.keys(A.draftsAt), Object.keys(B.draftsAt)));
    draftIds.forEach(function (id) {
      const a = A.drafts[id], b = B.drafts[id];
      const at = A.draftsAt[id] || (a !== undefined ? A.updated : 0);
      const bt = B.draftsAt[id] || (b !== undefined ? B.updated : 0);
      const av = a === undefined ? '' : JSON.stringify(a);
      const bv = b === undefined ? '' : JSON.stringify(b);
      // At equal times a deletion wins; other ties have a stable winner.
      const useA = at > bt || (at === bt && av <= bv);
      const value = useA ? a : b;
      draftsAt[id] = Math.max(at, bt);
      if (value !== undefined) drafts[id] = JSON.parse(JSON.stringify(value));
    });

    const write = {};
    [A.write, B.write].forEach(function (src) {
      for (const k in (src || {})) {
        if (!write[k] || (src[k].at || 0) > (write[k].at || 0)) write[k] = src[k];
      }
    });

    /* preferences are per-key: the device that set it most recently wins, and
       a key with no stamp yields to one that has it */
    const prefs = {}, prefsAt = {};
    [[A.prefs, A.prefsAt, A.updated], [B.prefs, B.prefsAt, B.updated]].forEach(function (p) {
      const src = p[0] || {}, at = p[1] || {}, fallback = p[2] || 0;
      for (const k in src) {
        const t = at[k] || fallback;
        if (!(k in prefs) || t >= (prefsAt[k] || 0)) { prefs[k] = src[k]; prefsAt[k] = t; }
      }
    });

    /* Day counters: the larger count survives. Two devices can both have
       counted the same review, so max is the honest bound and it is
       order-independent; summing would double-count every merge. */
    const daysOut = {};
    [A.days, B.days].forEach(function (src) {
      for (const k in (src || {})) {
        const row = src[k] || {};
        const out = daysOut[k] || (daysOut[k] = {});
        for (const f in row) {
          if (f === 'at') { if (!(out.at >= row.at)) out.at = row.at; continue; }
          if (!(out[f] >= row[f])) out[f] = row[f];
        }
      }
    });
    /* Reasons and confidence records: the latest stamp wins. */
    function latest(X, Y) {
      const out = {};
      [X, Y].forEach(function (src) {
        for (const k in (src || {})) {
          if (!out[k] || (src[k].at || 0) > (out[k].at || 0)) out[k] = src[k];
        }
      });
      return out;
    }

    return {
      v: 3,
      done: done.on, undone: done.off,
      proofs: proof.on, unproofs: proof.off,
      cards: mergeAttempts(A.cards, B.cards),
      omr: mergeAttempts(A.omr, B.omr),
      write: write,
      drafts: drafts, draftsAt: draftsAt,
      days: daysOut,
      errs: latest(A.errs, B.errs),
      cal: latest(A.cal, B.cal),
      prefs: prefs, prefsAt: prefsAt,
      updated: Math.max(A.updated || 0, B.updated || 0)
    };
  }

  /* Adopt a merged state wholesale. `quiet` keeps the sync listener from
     firing on the state it has just pulled. */
  function adopt(next, quiet) {
    state = upgrade(next);
    save(quiet);
    return state;
  }

  const snapshot = () => JSON.parse(JSON.stringify(state));
  function exportJSON() { return JSON.stringify(state, null, 2); }
  function reset() { state = blank(); save(); }

  /* what the summary tiles count, so two callers cannot disagree */
  function tally() {
    return {
      notes: Object.keys(state.done).length,
      proofs: Object.keys(state.proofs).length,
      cards: Object.keys(state.cards).filter(k => state.cards[k].first).length,
      omr: Object.keys(state.omr).filter(k => state.omr[k].first).length
    };
  }

  return {
    isDone, setDone, setDoneMany,
    isProofDone, setProofDone,
    card, gradeCard, omr, lockOmr, draft, saveDraft,
    responseDraft, saveResponseDraft, clearResponseDraft,
    dayKey, bump, day, days,
    err, tagError, clearError, errs,
    recordConfidence, cal,
    pref, setPref,
    profileId, displayName, setDisplayName,
    selectedCourse, setSelectedCourse,
    isOnboarded, setOnboarded,
    identity, signedIn, syncEnabled, signIn, signOut,
    summary, exportJSON, reset, tally,
    snapshot, adopt, mergeStates, onChange, flushNow,
    isVolatile: () => volatile
  };
})();
