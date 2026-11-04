/* ══════════════════════════════════════════════════════════════════════════
   THE DATA SEAM for Optics.

   Flip `use` to 'live' once `live` lists validated files in ../data/. The
   contract (SYLLABI, SECTITLE, CONCEPTS, OBJECTIVE, QUESTIONS, PYQ) is the
   same for every project; real-analysis/HOOK_agy.md → "Runtime data
   contract" documents it field by field.

   Keep these arrays plain lists of quoted paths, with no paths in comments:
   build.py and tools/check_tex.js read them by pulling every quoted string
   out of the brackets.
   ══════════════════════════════════════════════════════════════════════════ */

const DIAGRAM_BASE = '../diagrams/';

const DATA_SOURCES = {

  use: 'live',

  mock: [
    '../../flow-library/app/mock/mock.courses.js',
    '../../flow-library/app/mock/mock.concepts.js',
    '../../flow-library/app/mock/mock.objective.js',
    '../../flow-library/app/mock/mock.written.js',
    '../../flow-library/app/mock/mock.pyq.js'
  ],

  live: [
    '../data/syllabus.js',
    '../data/m1.concepts.js',
    '../data/m1.written.js',
    '../data/m1.written2.js',
    '../data/m1.objective.js',
    '../data/m1.extra.concepts.js',
    '../data/m1.extra.written.js',
    '../data/m2.concepts.js',
    '../data/m2.written.js',
    '../data/m2.objective.js',
    '../data/m2.extra.concepts.js',
    '../data/m2.extra.written.js',
    '../data/m3.concepts.js',
    '../data/m3.written.js',
    '../data/m3.objective.js',
    '../data/m3.extra.concepts.js',
    '../data/m3.extra.written.js',
    '../data/m4.concepts.js',
    '../data/m4.written.js',
    '../data/m4.objective.js',
    '../data/m4.extra.concepts.js',
    '../data/m4.extra.written.js',
    '../data/pyq.js'
  ]
};
