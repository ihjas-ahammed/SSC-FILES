/* ══════════════════════════════════════════════════════════════════════════
   Content pool — one pass over the loaded data, then pure lookups.

   The app never reads the data globals directly; everything goes through here,
   so swapping mock data for the validated pool changes nothing above this line.

   Reads:  SYLLABI, SECTITLE, CONCEPTS, OBJECTIVE, QUESTIONS (optional)
   Builds: concept index, section -> concepts, course/module for a section,
           the statement-card deck, and the inverted `tests` edge
           (concept -> questions that examine it).
   ══════════════════════════════════════════════════════════════════════════ */

const Pool = (function () {

  const byId = {};          /* concept id -> node */
  const bySec = {};         /* section id  -> [node] */
  const secMeta = {};       /* section id  -> {course, module} */
  const deck = [];          /* statement cards, in course order */
  const objFor = {};        /* concept id -> [objective question] */
  const writFor = {};       /* concept id -> [written question] */
  const writSec = {};       /* section id  -> [written question] */
  const neededBy = {};      /* concept id -> [concept that lists it in needs] */
  const background = [];    /* nodes with no section in any course */
  let courses = [], objective = [], written = [], titles = {}, extSecs = {}, mock = false;

  /* Data files declare top-level `const`s, which are global *lexical* bindings
     rather than window properties — so they are read by name, guarded with
     typeof. These five names, plus DATA_KIND, are the entire data contract. */
  function build() {
    courses = (typeof SYLLABI !== 'undefined' ? SYLLABI : []).slice();
    objective = (typeof OBJECTIVE !== 'undefined' ? OBJECTIVE : []).slice();
    written = (typeof QUESTIONS !== 'undefined' ? QUESTIONS : []).slice();
    titles = typeof SECTITLE !== 'undefined' ? SECTITLE : {};
    extSecs = typeof EXT_SECS !== 'undefined' ? EXT_SECS : {};
    const concepts = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
    const kind = typeof DATA_KIND !== 'undefined' ? DATA_KIND : null;

    mock = kind === 'mock' || concepts.some(c => c.mock) || objective.some(q => q.mock);

    courses.forEach(course => (course.modules || []).forEach(mod =>
      (mod.secs || []).forEach(sec => { secMeta[sec] = { course: course, module: mod }; })));

    concepts.forEach(function (c) {
      byId[c.id] = c;
      if (c.sec && secMeta[c.sec]) (bySec[c.sec] || (bySec[c.sec] = [])).push(c);
      else background.push(c);
    });

    /* reverse prerequisite edges: "what does knowing this unlock?" */
    concepts.forEach(c => (c.needs || []).forEach(function (n) {
      (neededBy[n] || (neededBy[n] = [])).push(c);
    }));

    /* statement recall deck, ordered the way the courses are ordered */
    sections().forEach(s => s.concepts.forEach(c =>
      (c.cards || []).forEach(function (card, i) {
        if (card.kind !== 'state') return;
        deck.push({ id: c.id + '#' + i, cid: c.id, q: card.q, a: card.a, sec: c.sec,
          title: c.title, kind: c.kind });
      })));

    objective.forEach(q => (q.tests || []).forEach(t => (objFor[t] || (objFor[t] = [])).push(q)));
    written.forEach(q => (q.tests || []).forEach(t => (writFor[t] || (writFor[t] = [])).push(q)));

    /* Level 3 is a section-wide bar, so the exercises are indexed by section
       as well as by concept. A question reaches a section either by naming it
       (`sec`) or by testing a concept that lives in it — an exercise filed
       against two sections counts in both, and is listed once in each. */
    written.forEach(function (q) {
      const secs = {};
      if (q.sec) secs[q.sec] = true;
      (q.tests || []).forEach(function (t) {
        const c = byId[t];
        if (c && c.sec) secs[c.sec] = true;
      });
      Object.keys(secs).forEach(function (sec) {
        (writSec[sec] || (writSec[sec] = [])).push(q);
      });
    });
  }

  /* every in-course section, in display order */
  function sections(courseId) {
    const out = [];
    courses.forEach(function (course) {
      if (courseId && course.id !== courseId) return;
      (course.modules || []).forEach(mod => (mod.secs || []).forEach(sec => out.push({
        sec: sec, title: sectionTitle(sec), course: course, module: mod,
        concepts: bySec[sec] || []
      })));
    });
    return out;
  }

  const sectionTitle = sec => titles[sec] || ('Section ' + sec);
  const concept = id => byId[id] || null;
  const course = id => courses.filter(c => c.id === id)[0] || null;
  const courseOfSec = sec => (secMeta[sec] && secMeta[sec].course) || null;
  const moduleOfSec = sec => (secMeta[sec] && secMeta[sec].module) || null;
  const objectiveFor = cid => objFor[cid] || [];
  const writtenFor = cid => writFor[cid] || [];
  const writtenForSec = sec => writSec[sec] || [];
  const objectiveOne = id => objective.filter(q => q.id === id)[0] || null;

  function isExtSec(sec) {
    if (!sec) return false;
    if (extSecs[sec]) return true;
    const meta = secMeta[sec];
    if (meta && meta.module) {
      if (meta.module.ext) return true;
      if (meta.module.extSecs && meta.module.extSecs.indexOf(sec) >= 0) return true;
    }
    return false;
  }

  function isExt(conceptOrId) {
    const c = typeof conceptOrId === 'string' ? byId[conceptOrId] : conceptOrId;
    if (!c) return false;
    if (c.tier === 'ext') return true;
    if (c.sec && isExtSec(c.sec)) return true;
    return false;
  }

  /* concepts of the whole slice, in reading order */
  function conceptList(courseId, opts) {
    const o = opts || {};
    const out = [];
    sections(courseId).forEach(s => s.concepts.forEach(function (c) {
      if (!o.includeExt && isExt(c)) return;
      out.push(c);
    }));
    return out;
  }

  /* Prerequisite chain, deepest first, ending at `id` itself. Depth-first over
     `needs`, de-duplicated, cycle-safe — this is what the note view walks. */
  function chain(id, limit) {
    const out = [], seen = {};
    (function walk(at, depth) {
      if (!byId[at] || seen[at] || depth > (limit == null ? 4 : limit)) return;
      seen[at] = true;
      (byId[at].needs || []).forEach(n => walk(n, depth + 1));
      out.push(byId[at]);
    })(id, 0);
    return out;
  }

  const unlocks = id => (neededBy[id] || []).slice();

  /* previous / next concept in reading order across the whole pool */
  function neighbours(id) {
    const all = conceptList(null, { includeExt: true });
    const i = all.map(c => c.id).indexOf(id);
    if (i < 0) return { prev: null, next: null };
    return { prev: all[i - 1] || null, next: all[i + 1] || null };
  }

  /* ids used for progress denominators */
  const ids = {
    concepts: courseId => conceptList(courseId, { includeExt: false }).map(c => c.id),
    allConcepts: courseId => conceptList(courseId, { includeExt: true }).map(c => c.id),
    cards: () => deck.filter(c => !isExt(c.cid)).map(c => c.id),
    allCards: () => deck.map(c => c.id),
    objective: () => objective.map(q => q.id),
    /* Level 2 counts proof work, so its denominator is the concepts that
       actually carry a proof — not every note. */
    proofs: courseId => conceptList(courseId, { includeExt: false }).filter(c => c.proof).map(c => c.id),
    allProofs: courseId => conceptList(courseId, { includeExt: true }).filter(c => c.proof).map(c => c.id),
    /* Level 3's denominator: every exercise reachable from a course's own
       sections, de-duplicated, because one exercise may span two sections. */
    written: function (courseId) {
      const seen = {}, out = [];
      sections(courseId).forEach(s => writtenForSec(s.sec).forEach(function (q) {
        if (seen[q.id]) return;
        seen[q.id] = true;
        out.push(q.id);
      }));
      return out;
    }
  };

  return {
    build, sections, sectionTitle, concept, concepts: conceptList, course,
    courses: () => courses, courseOfSec, moduleOfSec, deck: () => deck,
    objective: () => objective, objectiveOne, objectiveFor, writtenFor, writtenForSec,
    written: () => written,
    background: () => background, chain, unlocks, neighbours, ids,
    isExtSec, isExt, isMock: () => mock
  };
})();
