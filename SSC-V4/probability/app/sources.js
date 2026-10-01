/* ══════════════════════════════════════════════════════════════════════════
   THE DATA SEAM for Probability.

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

  use: 'mock',

  mock: [
    '../../flow-library/app/mock/mock.courses.js',
    '../../flow-library/app/mock/mock.concepts.js',
    '../../flow-library/app/mock/mock.objective.js',
    '../../flow-library/app/mock/mock.written.js',
    '../../flow-library/app/mock/mock.pyq.js'
  ],

  live: [
  ]
};
