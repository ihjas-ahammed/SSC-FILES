/* ══════════════════════════════════════════════════════════════════════════
   Content pool — one pass over the loaded data, then pure lookups.

   The app never reads the data globals directly; everything goes through here,
   so swapping mock data for the validated pool changes nothing above this line.

   Reads:  SYLLABI, SECTITLE, CONCEPTS, OBJECTIVE, QUESTIONS (optional),
           PYQ (optional — past-paper questions, filed per COURSE)
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
  const pyqBy = {};         /* course id   -> [past-paper question] */
  let courses = [], objective = [], written = [], pyq = [];
  let titles = {}, extSecs = {}, mock = false;

  /* Data files declare top-level `const`s, which are global *lexical* bindings
     rather than window properties — so they are read by name, guarded with
     typeof. These five names, plus DATA_KIND, are the entire data contract. */
  function build() {
    courses = (typeof SYLLABI !== 'undefined' ? SYLLABI : []).slice();
    objective = (typeof OBJECTIVE !== 'undefined' ? OBJECTIVE : []).slice();
    written = (typeof QUESTIONS !== 'undefined' ? QUESTIONS : [])
      .concat(typeof WRITTEN !== 'undefined' && (typeof QUESTIONS === 'undefined' || WRITTEN !== QUESTIONS) ? WRITTEN : []).slice();
    pyq = (typeof PYQ !== 'undefined' ? PYQ : []).slice();
    titles = typeof SECTITLE !== 'undefined' ? SECTITLE : {};
    extSecs = typeof EXT_SECS !== 'undefined' ? EXT_SECS : {};
    const concepts = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
    const kind = typeof DATA_KIND !== 'undefined' ? DATA_KIND : null;

    mock = kind === 'mock' || concepts.some(c => c.mock) || objective.some(q => q.mock);

    courses.forEach(course => (course.modules || []).forEach(mod =>
      (mod.secs || []).forEach(sec => { secMeta[sec] = { course: course, module: mod }; })));

    courses.forEach(function (course) {
      if (course.title_en || course.title_ml) {
        Object.defineProperty(course, 'title', {
          get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(course, 'title') : (course.title_en || course.title); },
          configurable: true, enumerable: true
        });
      }
      if (course.blurb_en || course.blurb_ml) {
        Object.defineProperty(course, 'blurb', {
          get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(course, 'blurb') : (course.blurb_en || course.blurb); },
          configurable: true, enumerable: true
        });
      }
      (course.modules || []).forEach(function (mod) {
        if (mod.title_en || mod.title_ml) {
          Object.defineProperty(mod, 'title', {
            get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(mod, 'title') : (mod.title_en || mod.title); },
            configurable: true, enumerable: true
          });
        }
      });
    });

    concepts.forEach(function (c) {
      if (c.title_en || c.title_ml) {
        Object.defineProperty(c, 'title', {
          get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(c, 'title') : (c.title_en || c.title); },
          configurable: true, enumerable: true
        });
      }
      if (c.oneLine_en || c.oneLine_ml) {
        Object.defineProperty(c, 'oneLine', {
          get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(c, 'oneLine') : (c.oneLine_en || c.oneLine); },
          configurable: true, enumerable: true
        });
      }
      if (c.statement_en || c.statement_ml) {
        Object.defineProperty(c, 'statement', {
          get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(c, 'statement') : (c.statement_en || c.statement); },
          configurable: true, enumerable: true
        });
      }
      if (c.intuition_en || c.intuition_ml) {
        Object.defineProperty(c, 'intuition', {
          get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(c, 'intuition') : (c.intuition_en || c.intuition); },
          configurable: true, enumerable: true
        });
      }
      if (c.traps_en || c.traps_ml) {
        Object.defineProperty(c, 'traps', {
          get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(c, 'traps') : (c.traps_en || c.traps); },
          configurable: true, enumerable: true
        });
      }
      if (c.cards_en || c.cards_ml || c.cards) {
        Object.defineProperty(c, 'cards', {
          get: function () {
            const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
            const rawList = isMl ? (c.cards_ml || c.cards_en || c.cards) : (c.cards_en || c.cards_ml || c.cards);
            if (!Array.isArray(rawList)) return [];
            return rawList.map(function (cd) {
              return {
                q: cd.q || (isMl ? cd.q_ml : cd.q_en) || cd.q_en || cd.q_ml || '',
                a: cd.a || (isMl ? cd.a_ml : cd.a_en) || cd.a_en || cd.a_ml || '',
                kind: cd.kind || 'apply'
              };
            });
          },
          configurable: true, enumerable: true
        });
      }
      if (c.proof) {
        const p = c.proof;
        const rawIdea = p.idea;
        const rawWhy = p.why;
        const rawRungs = p.rungs;
        if (p.idea_en || p.idea_ml || rawIdea) {
          Object.defineProperty(p, 'idea', {
            get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(p, 'idea') : (p.idea_en || rawIdea); },
            configurable: true, enumerable: true
          });
        }
        if (p.why_en || p.why_ml || rawWhy) {
          Object.defineProperty(p, 'why', {
            get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(p, 'why') : (p.why_en || rawWhy); },
            configurable: true, enumerable: true
          });
        }
        Object.defineProperty(p, 'rungs', {
          get: function () {
            const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
            if (isMl && p.rungs_ml && p.rungs_ml.length) {
              return p.rungs_ml.map(function (r) {
                return { why: r.why_ml || r.why || r.detail_ml || r.title_ml, m: r.m || r.meaning || '' };
              });
            }
            if (p.rungs_en && p.rungs_en.length) {
              return p.rungs_en.map(function (r) {
                return { why: r.why_en || r.why || r.detail_en || r.title_en, m: r.m || r.meaning || '' };
              });
            }
            if (rawRungs && Array.isArray(rawRungs)) {
              return rawRungs.map(function (r) {
                const why = isMl ? (r.detail_ml || r.why_ml || r.title_ml || r.why) : (r.detail_en || r.why_en || r.title_en || r.why);
                const title = isMl ? (r.title_ml || r.title_en) : (r.title_en || r.title_ml);
                const fullWhy = title && why && why !== title ? ('<b>' + title + ':</b> ' + why) : (why || title);
                return { why: fullWhy, m: r.m || r.meaning || '' };
              });
            }
            return [];
          },
          configurable: true, enumerable: true
        });
      }
      byId[c.id] = c;
      if (c.sec && secMeta[c.sec]) (bySec[c.sec] || (bySec[c.sec] = [])).push(c);
      else background.push(c);
    });

    objective.forEach(function (q) {
      if (q.prompt_en || q.prompt_ml) {
        Object.defineProperty(q, 'prompt', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'prompt') : (q.prompt_en || q.prompt); }, configurable: true });
      }
      if (q.solution_en || q.solution_ml) {
        Object.defineProperty(q, 'solution', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'solution') : (q.solution_en || q.solution); }, configurable: true });
      }
      if (q.tested_en || q.tested_ml) {
        Object.defineProperty(q, 'tested', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'tested') : (q.tested_en || q.tested); }, configurable: true });
      }
      if (q.trap_en || q.trap_ml) {
        Object.defineProperty(q, 'trap', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'trap') : (q.trap_en || q.trap); }, configurable: true });
      }
      if (q.options_en || q.options_ml) {
        Object.defineProperty(q, 'options', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'options') : (q.options_en || q.options); }, configurable: true });
      }
    });

    written.forEach(function (q) {
      const rawPrompt = q.prompt;
      const rawSol = q.solution;
      if (q.prompt_en || q.prompt_ml || q.q_en || q.q_ml || rawPrompt) {
        Object.defineProperty(q, 'prompt', {
          get: function () {
            const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
            if (isMl) return q.prompt_ml || q.q_ml || q.prompt_en || q.q_en || rawPrompt || '';
            return q.prompt_en || q.q_en || q.prompt_ml || q.q_ml || rawPrompt || '';
          },
          configurable: true
        });
      }
      if (q.solution_en || q.solution_ml || q.sol_en || q.sol_ml || q.steps_en || q.steps_ml || rawSol) {
        Object.defineProperty(q, 'solution', {
          get: function () {
            const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
            if (isMl) {
              if (q.solution_ml) return q.solution_ml;
              if (q.sol_ml) return q.sol_ml;
              if (q.steps_ml && q.steps_ml.length) {
                let html = '<h4>ഘട്ടങ്ങൾ:</h4><ol>';
                q.steps_ml.forEach(function (st) { html += '<li>' + st + '</li>'; });
                html += '</ol>';
                if (q.answer_ml) html += '<p><b>അന്തിമ ഉത്തരം: </b>' + q.answer_ml + '</p>';
                if (q.rubric_ml && q.rubric_ml.length) {
                  html += '<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4><ul>';
                  q.rubric_ml.forEach(function (rb) { html += '<li>' + rb + '</li>'; });
                  html += '</ul>';
                }
                return html;
              }
            }
            if (q.solution_en) return q.solution_en;
            if (q.sol_en) return q.sol_en;
            if (q.steps_en && q.steps_en.length) {
              let html = '<h4>Step-by-step Solution:</h4><ol>';
              q.steps_en.forEach(function (st) { html += '<li>' + st + '</li>'; });
              html += '</ol>';
              if (q.answer_en) html += '<p><b>Final Answer: </b>' + q.answer_en + '</p>';
              if (q.rubric_en && q.rubric_en.length) {
                html += '<h4>Marking Rubric:</h4><ul>';
                q.rubric_en.forEach(function (rb) { html += '<li>' + rb + '</li>'; });
                html += '</ul>';
              }
              return html;
            }
            return rawSol || '';
          },
          configurable: true
        });
      }
      if (q.approach_en || q.approach_ml) {
        Object.defineProperty(q, 'approach', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'approach') : (q.approach_en || q.approach); }, configurable: true });
      }
      if (q.trap_en || q.trap_ml) {
        Object.defineProperty(q, 'trap', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'trap') : (q.trap_en || q.trap); }, configurable: true });
      }
      if (q.title_en || q.title_ml) {
        Object.defineProperty(q, 'title', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'title') : (q.title_en || q.title); }, configurable: true });
      }
      if (q.q_en || q.q_ml) {
        Object.defineProperty(q, 'q', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'q') : (q.q_en || q.q); }, configurable: true });
      }
      if (q.sol_en || q.sol_ml) {
        Object.defineProperty(q, 'sol', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'sol') : (q.sol_en || q.sol); }, configurable: true });
      }
    });

    pyq.forEach(function (q) {
      if (q.prompt_en || q.prompt_ml) {
        Object.defineProperty(q, 'prompt', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'prompt') : (q.prompt_en || q.prompt); }, configurable: true });
      }
      if (q.solution_en || q.solution_ml) {
        Object.defineProperty(q, 'solution', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'solution') : (q.solution_en || q.solution); }, configurable: true });
      }
      if (q.title_en || q.title_ml) {
        Object.defineProperty(q, 'title', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'title') : (q.title_en || q.title); }, configurable: true });
      }
      if (q.options_en || q.options_ml) {
        Object.defineProperty(q, 'options', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'options') : (q.options_en || q.options); }, configurable: true });
      }
      if (q.approach_en || q.approach_ml) {
        Object.defineProperty(q, 'approach', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'approach') : (q.approach_en || q.approach); }, configurable: true });
      }
      if (q.trap_en || q.trap_ml) {
        Object.defineProperty(q, 'trap', { get: function () { return (typeof I18N !== 'undefined') ? I18N.pick(q, 'trap') : (q.trap_en || q.trap); }, configurable: true });
      }
    });

    /* reverse prerequisite edges: "what does knowing this unlock?" */
    concepts.forEach(c => (c.needs || []).forEach(function (n) {
      (neededBy[n] || (neededBy[n] = [])).push(c);
    }));

    /* statement recall deck, ordered the way the courses are ordered */
    sections().forEach(s => s.concepts.forEach(c => {
      const rawCards = (c.cards_en || c.cards || []);
      rawCards.forEach(function (card, i) {
        if (card.kind && card.kind !== 'state') return;
        const dItem = { id: c.id + '#' + i, cid: c.id, sec: c.sec, kind: card.kind || 'state' };
        Object.defineProperty(dItem, 'q', {
          get: function () {
            const list = c.cards;
            return (list && list[i] && list[i].q) || card.q || card.q_en || '';
          },
          configurable: true, enumerable: true
        });
        Object.defineProperty(dItem, 'a', {
          get: function () {
            const list = c.cards;
            return (list && list[i] && list[i].a) || card.a || card.a_en || '';
          },
          configurable: true, enumerable: true
        });
        Object.defineProperty(dItem, 'title', {
          get: function () { return c.title; },
          configurable: true, enumerable: true
        });
        deck.push(dItem);
      });
    }));

    /* Past papers are filed on a COURSE, not on a section */
    pyq.forEach(function (q) {
      const id = q.course || (q.sec && courseOfSec(q.sec) && courseOfSec(q.sec).id);
      if (!id) return;
      (pyqBy[id] || (pyqBy[id] = [])).push(q);
    });
    Object.keys(pyqBy).forEach(function (id) {
      pyqBy[id].sort(function (a, b) {
        if ((b.year || 0) !== (a.year || 0)) return (b.year || 0) - (a.year || 0);
        return (a.qno || 0) - (b.qno || 0);
      });
    });

    objective.forEach(function (q) {
      const targets = [].concat(q.tests || [], q.concept ? [q.concept] : []);
      targets.forEach(t => (objFor[t] || (objFor[t] = [])).push(q));
    });
    written.forEach(function (q) {
      const targets = [].concat(q.tests || [], q.concept ? [q.concept] : []);
      targets.forEach(t => (writFor[t] || (writFor[t] = [])).push(q));
    });

    /* Level 2/3 exercises are indexed by section */
    written.forEach(function (q) {
      const secs = {};
      if (q.sec) secs[q.sec] = true;
      const targets = [].concat(q.tests || [], q.concept ? [q.concept] : []);
      targets.forEach(function (t) {
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

  const sectionTitle = sec => {
    const t = titles[sec];
    if (!t) return (typeof I18N !== 'undefined' && I18N.lang() === 'ml' ? 'ഭാഗം ' : 'Section ') + sec;
    if (typeof t === 'object') return (typeof I18N !== 'undefined') ? I18N.pick(t) : (t.en || t.ml);
    return t;
  };
  const concept = id => byId[id] || null;
  const course = id => courses.filter(c => c.id === id)[0] || null;
  const courseOfSec = sec => (secMeta[sec] && secMeta[sec].course) || null;
  const moduleOfSec = sec => (secMeta[sec] && secMeta[sec].module) || null;
  const objectiveFor = cid => objFor[cid] || [];
  const writtenFor = cid => writFor[cid] || [];
  const writtenForSec = sec => writSec[sec] || [];
  const objectiveOne = id => objective.filter(q => q.id === id)[0] || null;

  /* Past papers for one course, newest paper first; every one of them when no
     course is named. */
  const pyqFor = courseId => courseId ? (pyqBy[courseId] || []).slice() : pyq.slice();

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
    /* Level 4's denominator: the past papers filed against a course. */
    pyq: courseId => pyqFor(courseId).map(q => q.id),
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
    written: () => written, pyq: pyqFor,
    background: () => background, chain, unlocks, neighbours, ids,
    isExtSec, isExt, isMock: () => mock
  };
})();
