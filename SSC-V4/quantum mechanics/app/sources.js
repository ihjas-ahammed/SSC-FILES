/* ══════════════════════════════════════════════════════════════════════════
   THE DATA SEAM.

   This is the only file that has to change when the validated content pool
   replaces the mock one: flip `use` to 'live' and list the delivered files.
   Nothing in app/src knows or cares which set is loaded.

   A source file may only declare or push into the six contract names:

     DATA_KIND   'mock' | 'live'   — 'mock' makes the app badge itself
     SYLLABI     [ course ]        — display order is the array order
     SECTITLE    { sec: title }
     CONCEPTS    [ concept ]       — id, sec, kind, tier, title, oneLine,
                                     statement, intuition, needs[], traps[],
                                     cards[{q,a,kind}]
     OBJECTIVE   [ question ]      — OMR questions: type MCQ|MSQ|NAT, marks,
                                     neg, time, prompt, options[{k,t}],
                                     answer, solution, tested, trap, twist,
                                     tests[]
     QUESTIONS   [ written ]       — optional written/essay questions
     PYQ         [ past paper ]    — optional; Level 4. The QUESTIONS shape
                                     plus course, exam, year, paper, qno. Filed
                                     on a COURSE, never on a section.

   Paths are relative to app/index.html and must stay inside real-analysis.
   The full field-by-field contract is in HOOK_agy.md → "Runtime data contract".
   ══════════════════════════════════════════════════════════════════════════ */

/* Where the rendered diagrams in `diagrams/` sit, relative to the PAGE.
   The dev page is `app/index.html`, one level in; the built page is deployed
   beside the folder, and build.py overrides this in the bundle seam. */
const DIAGRAM_BASE = '../diagrams/';

const DATA_SOURCES = {

  use: 'live',

  mock: [
    'mock/mock.courses.js',
    'mock/mock.concepts.js',
    'mock/mock.objective.js',
    'mock/mock.written.js',
    'mock/mock.pyq.js'
  ],

  /* Filled in by the data handoff. Example of the expected shape:
       '../data/syllabus.js', '../data/objective.ra2.js', '../data/ch5.a.js', … */
  live: [
    '../data/syllabus.js',
    '../data/qm1-m1.js',
    '../data/questions.qm1.m1.js',
    '../data/objective.qm1.m1.js',
    '../data/qm1-m2.js',
    '../data/questions.qm1.m2.js',
    '../data/objective.qm1.m2.js',
    '../data/pyq.qm1.js'
  ]
};
