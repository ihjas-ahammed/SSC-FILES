/* ══════════════════════════════════════════════════════════════════════════
   Three levels, earned — never switched.

   There is no level control any more. A learner does not *choose* to be at
   level 2; they get there by working the proof. The level of a concept is
   therefore derived, in one place, from what has actually been done:

     level 1   ticked. You have been through the material.               RED
     level 2   its proof worked through. Concepts with no proof (defini-  AMBER
               tions, examples) reach level 2 with the tick, because
               there is no proof to work.
     level 3   every Bartle exercise filed against this concept's        GREEN
               SECTION worked through. Level 3 is a section-wide bar on
               purpose: exercises are set on a section, not on one
               theorem, so a section is only finished when its whole
               problem set is.

   A group (section, module, course) is at the level its *weakest* member has
   reached — all red before the group is red, all amber before the group is
   amber. That is what the coloured rings and bars draw.

   `Store` knows two independent facts and nothing about courses: a concept was
   ticked, and a task was worked through (a proof, keyed on the concept id, or
   a written question, keyed 'w:<questionId>'). `Pool` knows structure and no
   progress. This is the one place the two meet, so "done" cannot mean two
   different things on two screens.
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

  /* secTaskState is asked once per concept per repaint, so it is memoised and
     the cache is dropped whenever anything is written. */
  let secCache = {};
  if (Store.onChange) Store.onChange(function () { secCache = {}; });
  const dropCache = () => { secCache = {}; };

  function secTasks(sec) {
    const qs = (sec && Pool.writtenForSec) ? Pool.writtenForSec(sec) : [];
    const done = qs.filter(taskDone).length;
    return { total: qs.length, done: done, ready: qs.length > 0 && done === qs.length, list: qs };
  }

  function secTaskState(sec) {
    if (!sec) return { total: 0, done: 0, ready: false, list: [] };
    if (!secCache[sec]) secCache[sec] = secTasks(sec);
    return secCache[sec];
  }

  /* The highest level a concept can currently reach. A section with no
     exercises delivered yet tops out at 2 — and says so, rather than quietly
     colouring itself green. */
  function ceiling(id) {
    const c = Pool.concept(id);
    return (c && secTaskState(c.sec).total) ? 3 : 2;
  }

  /* ── the level of one concept ────────────────────────────────────────── */
  function level(id) {
    if (!Store.isDone(id)) return 0;
    if (hasProof(id) && !Store.isProofDone(id)) return 1;
    const c = Pool.concept(id);
    if (c && secTaskState(c.sec).ready) return 3;
    return 2;
  }

  /* kept for the few places that only care whether a note has been met */
  const isDone = id => level(id) >= 1;

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

  function clear(id) {
    if (Store.isProofDone(id)) Store.setProofDone(id, false);
    Store.setDone(id, false);
    dropCache();
  }

  /* Put a list of concepts AT a given level (0, 1 or 2). Bulk ticking a
     section or a module runs through here, and so does the prerequisite
     cascade — which is why it takes a level rather than a boolean: a
     prerequisite is raised to the level of the note that needs it, never
     past it. */
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

  /* the ceiling of a whole group: 3 only where every section in it has
     exercises to work */
  function ceilingOf(ids) {
    const list = ids || [];
    if (!list.length) return 2;
    return list.every(id => ceiling(id) >= 3) ? 3 : 2;
  }

  /* what a tick button should render: 'true' | 'mixed' | 'false' */
  function tickState(ids) {
    const c = count(ids);
    if (!c.total) return 'false';
    if (c.min >= 1) return 'true';
    return c.l1 ? 'mixed' : 'false';
  }

  /* ── prerequisites, judged at the level you are working at ───────────────
     The bug this fixes: a note you have only read (level 1) used to report its
     prerequisites as incomplete because THEY had been pushed to level 2 — the
     bar moved under a note nobody had asked to raise. A prerequisite is
     satisfied when it has reached the level of the note that needs it, and
     nothing more is asked of it. Where a prerequisite cannot reach that level
     (its own section has no exercises yet) the bar drops to what it can
     actually reach. */
  function prereqTarget(id) {
    return Math.max(1, Math.min(2, level(id)));
  }

  function prereqOk(prereqId, target) {
    return level(prereqId) >= Math.min(target, ceiling(prereqId));
  }

  /* Prerequisites of `id` that have not reached `id`'s own level. */
  function pendingPrereqs(id) {
    const target = prereqTarget(id);
    return Pool.chain(id).filter(x => x.id !== id && !prereqOk(x.id, target));
  }

  /* Raise them to exactly that level — "even if they are greater, tick them at
     minimum the same level" — so a cascade never promotes work nobody did. */
  function raisePrereqs(id) {
    const target = prereqTarget(id);
    const pending = pendingPrereqs(id);
    pending.forEach(function (x) {
      if (level(x.id) < target) setTo([x.id], target);
    });
    dropCache();
    return pending.length;
  }

  /* ── the reel queue ──────────────────────────────────────────────────────
     The reel only ever shows material you have said you have met. Studying a
     statement you have never read is not recall, it is reading with extra
     steps.

     Two kinds of card:
       statement   every ticked concept that has a 'state' card
       proof       every ticked concept that carries a proof

     Order is by how badly each card needs the attempt, then by the reading
     order of the course — no randomness, so the queue is inspectable and the
     same twice running:

       0  never attempted
       1  first attempt was 'missed'
       2  first attempt was 'partly'
       3  first attempt was 'got'

     A proof card sits one rank behind its own statement card, so you are never
     asked to reconstruct a proof in the same breath as first stating it. */
  const RANK = { missed: 1, partly: 2, got: 3 };

  function rank(cardId) {
    const rec = Store.card(cardId);
    if (!rec || !rec.first) return 0;
    return RANK[rec.first] == null ? 3 : RANK[rec.first];
  }

  function reel(opts) {
    const o = opts || {};
    const out = [];

    Pool.deck().forEach(function (card, i) {
      if (!Store.isDone(card.cid)) return;
      out.push({
        kind: 'state', id: card.id, cid: card.cid, sec: card.sec,
        title: card.title, conceptKind: card.kind,
        q: card.q, a: card.a,
        rank: rank(card.id), order: i
      });
    });

    Pool.concepts(null, { includeExt: true }).forEach(function (c, i) {
      if (!c.proof || !Store.isDone(c.id)) return;
      const id = c.id + '#proof';
      out.push({
        kind: 'proof', id: id, cid: c.id, sec: c.sec,
        title: c.title, conceptKind: c.kind,
        proof: c.proof,
        rank: rank(id), order: i + 0.5
      });
    });

    const list = o.onlyNew ? out.filter(x => x.rank === 0) : out;
    return list.sort(function (a, b) {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return a.order - b.order;
    });
  }

  /* every id the reel could ever contain, for the "n of m attempted" meter */
  function reelIds() {
    return reel().map(x => x.id);
  }

  return {
    level, ceiling, ceilingOf, isDone, hasProof, courseIdOf,
    advance, advanceMany, clear, setTo,
    count, tickState,
    secTaskState, taskKey, taskDone,
    prereqTarget, prereqOk, pendingPrereqs, raisePrereqs,
    reel, reelIds, dropCache
  };
})();
