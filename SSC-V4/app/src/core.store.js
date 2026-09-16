/* ══════════════════════════════════════════════════════════════════════════
   Progress store — Level 1 scope only.

   Two things are tracked, and they are kept apart on purpose (HOOK_claude.md):

     completion   you have encountered the material. Level 1 of the mastery
                  ladder. Never evidence of recall.
     first try    the FIRST recorded attempt at a card or a question. Later
                  attempts are allowed but never overwrite the first, because
                  the first attempt is the only honest measurement.

   No scheduler, no recall levels, no sync — those are later levels. Storage is
   localStorage with an in-memory fallback so a locked-down browser degrades to
   a working-but-forgetful session instead of a broken one.
   ══════════════════════════════════════════════════════════════════════════ */

const Store = (function () {

  const KEY = 'ssc4.level1.v1';
  const EMPTY = { v: 1, done: {}, cards: {}, omr: {}, write: {}, prefs: {} };

  let mem = null;          /* fallback when localStorage is unavailable */
  let volatile = false;
  let state = load();

  function load() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return Object.assign({}, EMPTY);
      const parsed = JSON.parse(raw);
      return Object.assign({}, EMPTY, parsed && parsed.v === 1 ? parsed : {});
    } catch (e) {
      volatile = true;
      return Object.assign({}, EMPTY);
    }
  }

  const flush = DOM.debounce(function () {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { volatile = true; mem = state; }
  }, 250);

  function save() { flush(); }

  /* ── completion ──────────────────────────────────────────────────────── */
  const isDone = id => !!state.done[id];
  function setDone(id, on) {
    if (on) state.done[id] = Date.now(); else delete state.done[id];
    save();
    return isDone(id);
  }

  /* ── statement cards ─────────────────────────────────────────────────── */
  /* grade: 'got' | 'partly' | 'missed' */
  const card = id => state.cards[id] || null;
  function gradeCard(id, grade) {
    const rec = state.cards[id] || (state.cards[id] = { tries: 0 });
    rec.tries += 1;
    rec.last = grade;
    rec.lastAt = Date.now();
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

  /* ── theorem-writing drafts ──────────────────────────────────────────── */
  const draft = cid => (state.write[cid] && state.write[cid].tex) || '';
  function saveDraft(cid, tex) {
    if (!tex.trim()) delete state.write[cid];
    else state.write[cid] = { tex: tex, at: Date.now() };
    save();
  }

  /* ── preferences ─────────────────────────────────────────────────────── */
  const pref = (k, d) => (k in state.prefs ? state.prefs[k] : d);
  function setPref(k, v) { state.prefs[k] = v; save(); return v; }

  /* ── aggregate stats over a given universe of ids ────────────────────── */
  function summary(conceptIds, cardIds, omrIds) {
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
    return {
      notes: { done: notes, total: conceptIds.length },
      cards: { tried: tried, got: got, partly: partly, total: cardIds.length },
      omr: { locked: locked, correct: right, partial: part, total: omrIds.length }
    };
  }

  function exportJSON() { return JSON.stringify(state, null, 2); }
  function reset() { state = Object.assign({}, EMPTY); save(); }

  return {
    isDone, setDone, card, gradeCard, omr, lockOmr, draft, saveDraft,
    pref, setPref, summary, exportJSON, reset,
    isVolatile: () => volatile
  };
})();
