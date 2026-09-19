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

   Paths are relative to app/index.html and must stay inside SSC-V4.
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
    'mock/mock.written.js'
  ],

  /* Filled in by the data handoff. Example of the expected shape:
       '../data/syllabus.js', '../data/objective.ra2.js', '../data/ch5.a.js', … */
  live: [
    '../data/syllabus.js',
    '../data/school.js',
    '../data/ra1-core.js',
    '../data/ra1-bridge.js',
    '../data/ra1-m1.js',
    '../data/ra1-m2.js',
    '../data/ra1-m4.js',
    '../data/ch5.a.js',
    '../data/ch5.b.js',
    '../data/ch5.c.js',
    '../data/ch6.js',
    '../data/ch7.js',
    '../data/ch8.js',
    '../data/ch9.js',
    '../data/ch10.js',
    '../data/ch11.js',
    '../data/rae.js',
    '../data/questions.ra1.js',
    '../data/questions.ra2.m1.js',
    '../data/questions.ra2.m2.js',
    '../data/questions.ra2.m3.js',
    '../data/questions.ra2.m4.js',
    '../data/questions.rae.js',
    '../data/questions.misc.js',
    '../data/objective.js'
  ]
};
