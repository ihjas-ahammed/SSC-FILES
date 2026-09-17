/* ══════════════════════════════════════════════════════════════════════════
   Level-aware progress.

   `Store` knows two independent facts about a concept — it was ticked, and its
   proof was worked through — and knows nothing about courses. `Pool` knows
   which course a concept belongs to and whether it has a proof, and knows
   nothing about progress. This is the one place the two meet, and every screen
   that draws a tick, a ring or a meter asks HERE rather than asking Store
   directly. That is what keeps "done" meaning the same thing everywhere.

   What "done" means depends on the level of that concept's own course:

     level 1   ticked. You have encountered the material.
     level 2   ticked AND, if it has a proof, that proof worked through.

   So switching a course to Level 2 does not erase anything — it raises the
   bar, and notes that were complete become incomplete again because the
   standard moved. That is the intended reading: level 2 IS the progress
   measure for a course that has been switched to it. Courses still at Level 1
   are unaffected, which is the whole point of the level being per course.
   ══════════════════════════════════════════════════════════════════════════ */

const Progress = (function () {

  const courseIdOf = function (c) {
    if (!c) return null;
    const course = Pool.courseOfSec(c.sec);
    return course ? course.id : null;
  };

  /* The level a given concept is being held to. Background nodes (`s.*`) sit
     in no course, so they are always level 1 — they are assumed knowledge, not
     material to work proofs on. */
  const levelOf = id => Store.level(courseIdOf(Pool.concept(id)));

  const hasProof = id => {
    const c = Pool.concept(id);
    return !!(c && c.proof);
  };

  /* three states, because at level 2 a ticked note with an unworked proof is
     genuinely neither done nor untouched */
  function state(id) {
    const ticked = Store.isDone(id);
    if (levelOf(id) < 2) return ticked ? 'done' : 'none';
    if (!ticked) return 'none';
    if (!hasProof(id)) return 'done';
    return Store.isProofDone(id) ? 'done' : 'part';
  }

  const isDone = id => state(id) === 'done';

  /* ── ticking ─────────────────────────────────────────────────────────────
     One press advances one step, so the tick always has somewhere to go and
     never silently refuses. At level 2 that is tick -> work the proof -> clear.
     When a concept has no proof, ticking level 1 automatically counts as
     ticking both levels. */
  function advance(id) {
    const at = state(id);
    if (at === 'none') {
      Store.setDone(id, true);
      if (!hasProof(id)) Store.setProofDone(id, true);
      return state(id);
    }
    if (at === 'part') { Store.setProofDone(id, true); return state(id); }
    clear(id);
    return state(id);
  }

  function clear(id) {
    if (Store.isProofDone(id)) Store.setProofDone(id, false);
    Store.setDone(id, false);
  }

  /* Bulk set, for a section / module / course row. At level 2 "tick all" means
     the level 2 standard, or the row could never reach a full ring. */
  function setMany(ids, on) {
    const list = ids || [];
    Store.setDoneMany(list, on);
    list.forEach(function (id) {
      if (!hasProof(id)) {
        Store.setProofDone(id, !!on);
        return;
      }
      if (levelOf(id) < 2) {
        if (!on && Store.isProofDone(id)) Store.setProofDone(id, false);
        return;
      }
      if (Store.isProofDone(id) !== !!on) Store.setProofDone(id, !!on);
    });
  }

  /* ── counting ────────────────────────────────────────────────────────── */
  function count(ids) {
    const list = ids || [];
    let done = 0, part = 0;
    list.forEach(function (id) {
      const st = state(id);
      if (st === 'done') done += 1; else if (st === 'part') part += 1;
    });
    return { done: done, part: part, total: list.length };
  }

  /* what a tick button should render: 'true' | 'mixed' | 'false' */
  function tickState(ids) {
    const c = count(ids);
    if (!c.total) return 'false';
    if (c.done === c.total) return 'true';
    return (c.done || c.part) ? 'mixed' : 'false';
  }

  /* ── the reel queue ──────────────────────────────────────────────────────
     The reel only ever shows material you have said you have met. Studying a
     statement you have never read is not recall, it is reading with extra
     steps — and a reel full of unread theorems is the pile the reel exists to
     avoid.

     Two kinds of card:
       statement   every ticked concept that has a 'state' card
       proof       only for a course switched to Level 2, and only for ticked
                   concepts that carry a proof

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
      if (Store.level(courseIdOf(c)) < 2) return;
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

  return { levelOf, hasProof, state, isDone, advance, clear, setMany,
    count, tickState, reel, reelIds, courseIdOf };
})();
