/* ══════════════════════════════════════════════════════════════════════════
   Levels, earned — never switched.

   There is no level control. A learner does not *choose* to be at level 2;
   they get there by working the proof. The level of a concept is derived, in
   one place, from what has actually been done:

     level 1   read. You have been through the material.                RED
     level 2   its proof worked through. A note with NO proof reaches    AMBER
               level 2 with the tick, because there is no proof to work.
     level 3   every exercise filed against this concept's SECTION       GREEN
               worked through. A section with NO exercises reaches
               level 3 with level 2, because there is nothing to work.

   Nothing is ever held back by a stage that does not exist: a definition with
   no proof, in a section with no exercises, is green the moment it is read.
   That is the whole of rule 12 — a missing stage promotes, it does not cap.

   A group (section, module, course) is at the level its *weakest* member has
   reached — all red before the group is red, all amber before the group is
   amber. That is what the coloured rings and bars draw.

   LEVEL 4 IS A COURSE RUNG AND ONLY A COURSE RUNG. Concepts, sections and
   modules top out at 3. A course reaches 4 — "all complete" — when every note
   in it is green AND every JAM past-paper question filed against it has been
   worked through. See `courseLevel`.

   `Store` knows four independent facts and nothing about courses: a concept
   was read, and a task was worked through (a proof, keyed on the concept id;
   an exercise, keyed 'w:<questionId>'; a past-paper question, keyed
   'p:<questionId>'). `Pool` knows structure and no progress. This is the one
   place the two meet, so "done" cannot mean two different things on two
   screens.
   ══════════════════════════════════════════════════════════════════════════ */

const Progress = (function () {

  const courseIdOf = function (c) {
    if (!c) return null;
    const course = Pool.courseOfSec(c.sec);
    return course ? course.id : null;
  };

  const hasProof = id => {
    const c = Pool.concept(id);
    return !!(c && c.proof);
  };

  /* ── level 3 tasks ───────────────────────────────────────────────────────
     The written/Bartle exercises attached to a section. They are stored in the
     same flag map as proof work, under a 'w:' key, so they merge across
     devices exactly like every other tick. */
  const taskKey = q => 'w:' + q.id;
  const taskDone = q => Store.isProofDone(taskKey(q));

  /* ── level 4 tasks ───────────────────────────────────────────────────────
     The JAM past-paper questions attached to a COURSE, under a 'p:' key. */
  const pyqKey = q => 'p:' + q.id;
  const pyqDone = q => Store.isProofDone(pyqKey(q));

  /* secTaskState is asked once per concept per repaint, so it is memoised and
     the cache is dropped whenever anything is written. */
  let secCache = {};
  if (Store.onChange) Store.onChange(function () { secCache = {}; });
  const dropCache = () => { secCache = {}; };

  function secTasks(sec) {
    const qs = (sec && Pool.writtenForSec) ? Pool.writtenForSec(sec) : [];
    const done = qs.filter(taskDone).length;
    /* `ready` is true for an EMPTY set too: nothing owed is nothing owed. */
    return { total: qs.length, done: done, ready: done === qs.length, list: qs };
  }

  function secTaskState(sec) {
    if (!sec) return { total: 0, done: 0, ready: true, list: [] };
    if (!secCache[sec]) secCache[sec] = secTasks(sec);
    return secCache[sec];
  }

  /* Every concept can now reach 3. The ceiling is kept as a function because
     three call sites ask it, but it no longer has anything to refuse. */
  const ceiling = () => 3;
  const ceilingOf = () => 3;

  /* ── the level of one concept ────────────────────────────────────────── */
  function level(id) {
    if (!Store.isDone(id)) return 0;
    if (hasProof(id) && !Store.isProofDone(id)) return 1;
    const c = Pool.concept(id);
    if (c && !secTaskState(c.sec).ready) return 2;
    return 3;
  }

  /* kept for the few places that only care whether a note has been met */
  const isDone = id => level(id) >= 1;

  /* ── the level of a whole course, 0–4 ────────────────────────────────────
     4 is reached only here, and only by a course: every note green, and every
     past-paper question under the course worked through. */
  function pyqState(courseId) {
    const qs = Pool.pyq(courseId);
    const done = qs.filter(pyqDone).length;
    return { total: qs.length, done: done, ready: qs.length > 0 && done === qs.length, list: qs };
  }

  function courseLevel(courseId) {
    const c = count(Pool.ids.concepts(courseId));
    if (c.min < 3) return c.min;
    return pyqState(courseId).ready ? 4 : 3;
  }

  /* ── ticking ─────────────────────────────────────────────────────────────
     One press advances one step, so the tick always has somewhere to go.
     Level 3 is deliberately NOT reachable from here: it is earned by working
     the section's exercises, not by pressing a box. */
  function advance(id) {
    const at = level(id);
    if (at === 0) {
      Store.setDone(id, true);
      if (!hasProof(id)) Store.setProofDone(id, true);
    } else if (at === 1) {
      Store.setProofDone(id, true);
    } else {
      clear(id);
    }
    dropCache();
    return level(id);
  }

  /* Mark a note read without ever pulling it back down — what the Complete
     button at the foot of an open note presses. */
  function complete(id) {
    if (!Store.isDone(id)) Store.setDone(id, true);
    if (!hasProof(id) && !Store.isProofDone(id)) Store.setProofDone(id, true);
    dropCache();
    return level(id);
  }

  function clear(id) {
    if (Store.isProofDone(id)) Store.setProofDone(id, false);
    Store.setDone(id, false);
    dropCache();
  }

  /* Put a list of concepts AT a given level (0, 1 or 2). Bulk ticking a
     section or a module runs through here, and so does the prerequisite
     cascade — which is why it takes a level rather than a boolean. */
  function setTo(ids, n) {
    const list = ids || [];
    const want = Math.max(0, Math.min(2, n));
    Store.setDoneMany(list, want >= 1);
    list.forEach(function (id) {
      const proof = hasProof(id);
      const on = want >= 2 || (want >= 1 && !proof);
      if (Store.isProofDone(id) !== on) Store.setProofDone(id, on);
    });
    dropCache();
  }

  /* one press on a section / module / course row */
  function advanceMany(ids) {
    const c = count(ids);
    if (!c.total) return 0;
    if (c.min === 0) setTo(ids, 1);
    else if (c.min === 1) setTo(ids, 2);
    else setTo(ids, 0);
    return count(ids).min;
  }

  /* ── counting ─────────────────────────────────────────────────────────────
     l1/l2/l3 are cumulative — "how many have reached at least this level" —
     because that is what the three-colour bar draws, and `min` is the level
     the whole group has reached. */
  function count(ids) {
    const list = ids || [];
    let l1 = 0, l2 = 0, l3 = 0, min = 3;
    list.forEach(function (id) {
      const v = level(id);
      if (v >= 1) l1 += 1;
      if (v >= 2) l2 += 1;
      if (v >= 3) l3 += 1;
      if (v < min) min = v;
    });
    if (!list.length) min = 0;
    return { total: list.length, l1: l1, l2: l2, l3: l3, min: min, done: l1 };
  }

  /* what a tick button should render: 'true' | 'mixed' | 'false' */
  function tickState(ids) {
    const c = count(ids);
    if (!c.total) return 'false';
    if (c.min >= 1) return 'true';
    return c.l1 ? 'mixed' : 'false';
  }

  /* ── prerequisites ───────────────────────────────────────────────────────
     A prerequisite is satisfied once it has been READ. Nothing more is asked:
     holding a note hostage to the proof work of everything under it made the
     groundwork look permanently outstanding, and that is not what a
     prerequisite is for. */
  const prereqTarget = () => 1;
  const prereqOk = prereqId => level(prereqId) >= 1;

  /* Prerequisites of `id` that have not been read. */
  function pendingPrereqs(id) {
    return Pool.chain(id).filter(x => x.id !== id && !prereqOk(x.id));
  }

  /* Raise them to level 1 — and no further, so a cascade never promotes work
     nobody did. */
  function raisePrereqs(id) {
    const pending = pendingPrereqs(id);
    pending.forEach(function (x) {
      if (level(x.id) < 1) setTo([x.id], 1);
    });
    dropCache();
    return pending.length;
  }

  /* ── the reel queue: spaced practice ─────────────────────────────────────
     The reel only ever shows material you have said you have met. Studying a
     statement you have never read is not recall, it is reading with extra
     steps.

     Four kinds of card, and each arrives by a different act — so ticking
     topics, proofs AND questions all feed the reel:

       statement   a ticked concept's 'state' card
       proof       a ticked concept that carries a proof
       question    an objective question whose tested concept has been read
       exercise    a written exercise you have marked complete

     Order is spaced practice, not a fixed ranking. Each card sits in a
     Leitner box that rises when you state it, holds when you half-state it
     and resets when you miss it; the box picks how long the card is put away
     for. Everything due (and everything never attempted) comes first, in
     RANDOM order — so no two passes are the same — and everything not yet due
     follows, soonest first. A card you know well is therefore a long way back
     without ever being dropped.

     Nothing repeats within a pass: the queue is a list, and the reel walks it
     once. */
  const HOUR = 3600e3, DAY = 24 * HOUR;
  const INTERVAL = [10 * 60e3, HOUR, DAY, 3 * DAY, 7 * DAY, 21 * DAY];

  function dueAt(cardId) {
    const rec = Store.card(cardId);
    if (!rec || !rec.lastAt) return 0;              /* never attempted — due now */
    const b = Math.max(0, Math.min(rec.box || 0, INTERVAL.length - 1));
    return rec.lastAt + INTERVAL[b];
  }

  /* what one grade does to the box — mirrored in Store.gradeCard */
  function nextBox(box, grade) {
    if (grade === 'got') return Math.min((box || 0) + 1, INTERVAL.length - 1);
    if (grade === 'partly') return Math.max(0, (box || 0) - 1);
    return 0;
  }

  function pool() {
    const out = [];

    Pool.deck().forEach(function (card, i) {
      if (!Store.isDone(card.cid)) return;
      out.push({
        kind: 'state', id: card.id, cid: card.cid, sec: card.sec,
        title: card.title, conceptKind: card.kind,
        q: card.q, a: card.a, order: i
      });
    });

    Pool.concepts(null, { includeExt: true }).forEach(function (c, i) {
      if (!c.proof || !Store.isDone(c.id)) return;
      out.push({
        kind: 'proof', id: c.id + '#proof', cid: c.id, sec: c.sec,
        title: c.title, conceptKind: c.kind, proof: c.proof, order: i + 0.5
      });
    });

    /* an objective question joins once anything it examines has been read */
    Pool.objective().forEach(function (q, i) {
      const tested = (q.tests || []).filter(id => Pool.concept(id));
      if (!tested.length || !tested.some(id => Store.isDone(id))) return;
      const c = Pool.concept(tested[0]);
      out.push({
        kind: 'question', id: 'q:' + q.id, cid: c.id, sec: q.sec || c.sec,
        title: c.title, conceptKind: q.type, question: q, order: 1000 + i
      });
    });

    /* an exercise joins once you have marked it worked through */
    Pool.written().forEach(function (q, i) {
      if (!taskDone(q)) return;
      const c = Pool.concept((q.tests || [])[0]);
      out.push({
        kind: 'exercise', id: 'x:' + q.id, cid: c ? c.id : null, sec: q.sec || (c && c.sec),
        title: q.title || (c ? c.title : q.id), conceptKind: 'exercise',
        question: q, order: 2000 + i
      });
    });

    return out;
  }

  function shuffle(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = list[i]; list[i] = list[j]; list[j] = t;
    }
    return list;
  }

  function reel(opts) {
    const o = opts || {};
    const now = Date.now();
    let all = pool();
    if (o.onlyNew) all = all.filter(x => !(Store.card(x.id) || {}).first);
    if (o.exclude) all = all.filter(x => !o.exclude[x.id]);

    const due = [], later = [];
    all.forEach(function (x) {
      x.due = dueAt(x.id);
      (x.due <= now ? due : later).push(x);
    });
    shuffle(due);
    later.sort((a, b) => a.due - b.due);
    return due.concat(later);
  }

  /* every id the reel could ever contain, for the "n of m attempted" meter */
  function reelIds() {
    return pool().map(x => x.id);
  }

  return {
    level, courseLevel, ceiling, ceilingOf, isDone, hasProof, courseIdOf,
    advance, advanceMany, complete, clear, setTo,
    count, tickState,
    secTaskState, taskKey, taskDone,
    pyqKey, pyqDone, pyqState,
    prereqTarget, prereqOk, pendingPrereqs, raisePrereqs,
    reel, reelIds, nextBox, dueAt, dropCache
  };
})();
