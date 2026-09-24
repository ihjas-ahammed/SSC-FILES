/* ══════════════════════════════════════════════════════════════════════════
   MOCK course structure — placeholder, not production content.

   This file exists so the Level 1 app can be built and reviewed before the
   validated syllabus/content handoff lands. AGY owns the real thing (see
   "Runtime data contract" in HOOK_agy.md); swapping it in means pointing
   app/sources.js at the validated files, not editing the app.

   Globals declared here are the whole data surface the app reads:
     SYLLABI    courses, in display order, each with modules -> section ids
     SECTITLE   section id -> section title
     CONCEPTS   concept nodes            (mock.concepts.js pushes)
     OBJECTIVE  OMR objective questions  (mock.objective.js pushes)
     QUESTIONS  written questions        (empty at Level 1)
   ══════════════════════════════════════════════════════════════════════════ */

const DATA_KIND = 'mock';   /* the app badges itself while this says 'mock' */

const CONCEPTS = [];
const OBJECTIVE = [];
const QUESTIONS = [];
/* Level 4: past-paper questions, filed per COURSE. Declared here because the
   first data file of a pool owns the empty arrays — exactly as CONCEPTS and
   QUESTIONS are. The live pool declares it in data/syllabus.js. */
const PYQ = [];

const SYLLABI = [
  {
    id: 'ra1', title: 'Real Analysis I', code: 'MAT4CJ203', sem: 'IV',
    blurb: 'The reals, completeness, and the limit of a sequence.',
    modules: [
      { id: 'ra1.m1', n: 'I', title: 'The Real Numbers', marks: 15, secs: ['2.3'] },
      { id: 'ra1.m2', n: 'II', title: 'Sequences and Limits', marks: 15, secs: ['3.4'] }
    ]
  },
  {
    id: 'ra2', title: 'Real Analysis II', code: 'MAT5CJ301', sem: 'V',
    blurb: 'Continuity on intervals, uniform continuity, and the derivative.',
    needs: 'ra1',
    modules: [
      { id: 'ra2.m1', n: 'I', title: 'Continuous Functions', marks: 15, secs: ['5.1', '5.3', '5.4'] },
      { id: 'ra2.m2', n: 'II', title: 'Differentiation', marks: 15, secs: ['6.2'] }
    ]
  },
  {
    /* Third course, fixed display order (HOOK.md). Extension only: entrance
       material that RA1/RA2 genuinely do not cover. Content is a Level 3
       deliverable, so the scope is shown and nothing is authored. */
    id: 'rae', title: 'Real Analysis for Entrance', code: 'GATE / JAM / CUSAT', sem: '—',
    blurb: 'Extension only — the entrance topics RA1 and RA2 do not already cover.',
    needs: 'ra2', pending: true,
    pendingNote: 'Scope fixed in HOOK_agy.md. Content arrives at Level 3, after validation; ' +
      'nothing is authored here in the meantime.',
    modules: [
      { id: 'rae.t1', n: 'E1', title: 'General metric spaces', pending: true, secs: [],
        builds: ['m.2.3.2', 'm.5.1.1'],
        why: 'Generalises the absolute-value distance used throughout RA1.' },
      { id: 'rae.t2', n: 'E2', title: 'Baire category', pending: true, secs: [],
        builds: ['m.2.3.6'], why: 'Completeness, used as a tool rather than an axiom.' },
      { id: 'rae.t3', n: 'E3', title: 'Compactness and connectedness in metric spaces',
        pending: true, secs: [], builds: ['m.3.4.8', 'm.5.3.4', 'm.5.4.3'],
        why: 'The abstract form of the Bolzano–Weierstrass engine behind §5.3 and §5.4.' },
      { id: 'rae.t4', n: 'E4', title: 'Equicontinuity and Ascoli–Arzelà', pending: true, secs: [],
        builds: ['m.5.4.1'], why: 'Uniform continuity, made uniform across a family of functions.' },
      { id: 'rae.t5', n: 'E5', title: 'Inverse and implicit function theorems', pending: true,
        secs: [], builds: ['m.6.2.4'], why: 'The several-variable successors of the MVT.' },
      { id: 'rae.t6', n: 'E6', title: 'Lebesgue measure and measurable functions', pending: true,
        secs: [], builds: ['m.2.3.6'], why: 'Built on the supremum property; length becomes measure.' },
      { id: 'rae.t7', n: 'E7', title: 'Lebesgue integration and the convergence theorems',
        pending: true, secs: [], builds: ['m.2.3.6'],
        why: 'Fatou, monotone and dominated convergence — what Riemann cannot give.' }
    ]
  }
];

const SECTITLE = {
  '2.3': 'The Completeness Property of ℝ',
  '3.4': 'Subsequences and the Bolzano–Weierstrass Theorem',
  '5.1': 'Continuous Functions',
  '5.3': 'Continuous Functions on Intervals',
  '5.4': 'Uniform Continuity',
  '6.2': 'The Mean Value Theorem'
};
