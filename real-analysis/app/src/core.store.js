/* ══════════════════════════════════════════════════════════════════════════
   Progress store.

   Three things are tracked, and they are kept apart on purpose:

     completion   Level 1. You have encountered the material. Never evidence
                  of recall.
     proof work   Level 2. You have worked a proof through yourself. Awarded
                  per task, never for opening the note.
     first try    the FIRST recorded attempt at a card or a question. Later
                  attempts are allowed but never overwrite the first, because
                  the first attempt is the only honest measurement.

   The shape is built for merging. Two devices can both make progress offline,
   so every mutation is timestamped and every removal leaves a tombstone —
   merge(a,b) == merge(b,a), and merging twice changes nothing. core.sync.js
   depends on that and on nothing else.

   Storage is localStorage with an in-memory fallback so a locked-down browser
   degrades to a working-but-forgetful session instead of a broken one.
   ══════════════════════════════════════════════════════════════════════════ */

const Store = (function () {

  const KEY = 'ssc4.level1.v1';
  const EMPTY = {
    v: 2,
    done: {}, undone: {},        /* Level 1 completion + tombstones */
    proofs: {}, unproofs: {},    /* proof + exercise work (L2/L3) + tombstones */
    cards: {}, omr: {}, write: {},
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
    ['done', 'undone', 'proofs', 'unproofs', 'cards', 'omr', 'write', 'prefs', 'prefsAt']
      .forEach(function (k) { if (!s[k] || typeof s[k] !== 'object') s[k] = {}; });
    s.v = 2;
    if (!s.updated) s.updated = Date.now();
    return s;
  }

  function load() {
    try {
      const raw = window.localStorage.getItem(KEY);
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

  /* ── completion (Level 1) ────────────────────────────────────────────── */
  const isDone = id => !!state.done[id];
  const setDone = (id, on) => flag('done', 'undone', id, on);

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
  const setProofDone = (id, on) => flag('proofs', 'unproofs', id, on);

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
    save();
    return rec;
  }

  /* ── writing drafts ──────────────────────────────────────────────────── */
  const draft = cid => (state.write[cid] && state.write[cid].tex) || '';
  function saveDraft(cid, tex) {
    if (!tex.trim()) delete state.write[cid];
    else state.write[cid] = { tex: tex, at: Date.now() };
    save();
  }

  /* ── preferences ─────────────────────────────────────────────────────── */
  const pref = (k, d) => (k in state.prefs ? state.prefs[k] : d);
  function setPref(k, v) {
    state.prefs[k] = v;
    state.prefsAt[k] = Date.now();
    save();
    return v;
  }

  /* ── the mastery level is no longer stored ────────────────────────
     It used to be a per-course switch with an unlock, and pressing it moved
     the goalposts under work that was already finished. The level is now
     DERIVED from what has actually been done — see core.progress.js — so there
     is nothing here to set. The old 'level:<course>' and 'level2:<course>'
     preferences are left where they are: they are inert, and deleting them
     would only make two devices argue about a key neither of them reads. */

  /* ── who is signed in ────────────────────────────────────────────────────
     Name and roll number are the credentials AND the sync key. They are a pass
     key, not a password, and every surface that shows them says so. */
  const identity = () => ({
    name: pref('syncName', ''),
    roll: pref('syncRoll', '')
  });
  const signedIn = () => {
    const id = identity();
    return !!(String(id.name).trim() && String(id.roll).trim());
  };
  function signIn(name, roll) {
    setPref('syncName', String(name || '').trim());
    setPref('syncRoll', String(roll || '').trim());
    flushNow();
    return signedIn();
  }
  function signOut() {
    setPref('syncName', '');
    setPref('syncRoll', '');
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

    return {
      v: 2,
      done: done.on, undone: done.off,
      proofs: proof.on, unproofs: proof.off,
      cards: mergeAttempts(A.cards, B.cards),
      omr: mergeAttempts(A.omr, B.omr),
      write: write, prefs: prefs, prefsAt: prefsAt,
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
    pref, setPref,
    identity, signedIn, signIn, signOut,
    summary, exportJSON, reset, tally,
    snapshot, adopt, mergeStates, onChange, flushNow,
    isVolatile: () => volatile
  };
})();
