# SSLC Mathematics · app

Open `app/index.html` in a browser — no build, no server, no install. Works from
`file://`; the only network calls are MathJax and fonts from a CDN (the app says so on
screen if MathJax fails) and the optional progress sync.

Bilingual throughout: every string the interface says exists in English and Malayalam
(`src/core.i18n.js`), and every piece of content carries `_en` and `_ml` fields. The
toggle is in the header.

## The surfaces

| Surface | What it does |
| --- | --- |
| **Today (`#/home`)** | An actionable single-session invitation fitting 320px/280px phones: active class selector, one primary Start/Continue button, spaced recall count due (or caught-up state), targeted weak spots, and habit streak. |
| **Learn (`#/study`, `#/note/<id>`)** | The complete browsable syllabus by class and chapter, with links to focused lessons. Two arithmetic-sequence lessons include six interactive stages; other lessons use the full note, diagrams and practice components. |
| **Practice (`#/recall`, `#/drill`)** | Spaced retrieval practice scheduled by Leitner boxes across chapters; timed mixed drills with chapter-level diagnostics. |
| **Progress (`#/progress`)** | Full mastery breakdown (read, exercises, past papers, recall accuracy), daily goals, weak spots, error analysis notebook, calibration, focus session timer, and guest profile/sync settings. |
| **How to study (`#/method`)** | The cognitive science principles behind spaced recall, retrieval practice, error analysis, and SSLC exam strategy. |

`LEARNING_SCIENCE.md` at the project root lists every source.

## Levels

Nothing is switched on; the level is derived from what has been done (`src/core.progress.js`):

| Level | Colour | Evidence |
| --- | --- | --- |
| 1 | red | the note has been read |
| 2 | amber | every exercise in its section is worked through |
| 3 | green | every past-paper question of its course is worked through |

Foundation (Class 1–7) concepts top out at level 2. A chapter or course takes the colour
of its weakest item. Derivations, where a result has one, are optional: they feed the
reel but gate nothing.
An empty exercise set does not award level 2. Opening a lesson's Finish stage does
not mark it read; the learner explicitly records that action.

## Progress

Guest progress is stored in this browser under the localStorage key `sslc.v1` (a record found under the old
shared key `ssc4.level1.v1` is adopted once), and merged across devices through the sync
in `src/core.sync.js` only when enabled, under the `sslc_v1` namespace, keyed by name
and roll number. Anyone who knows those values can read and change the remote record;
the sign-in screen explains this. Mock builds use `sslc.v1.mock` and their own focus
timer, and never import the legacy live record.

The record holds: read ticks, task ticks (exercises `w:`, past papers `p:`, derivations),
card and question first attempts, drafts, the day log (streaks and the daily goal), the
mistake log, and confidence records. Every part merges loss-free and order-independently
(`Store.mergeStates`); a new field has to be added to the merge as well as the writer.

## Layout

```
app/
  index.html        shell, MathJax config, script order — ALSO the build order
  sources.js        THE DATA SEAM — mock vs live
  src/
    ui.css          design tokens, glass/aurora, components, motion, light/dark, SSLC tail
    core.i18n.js    every interface string, in both languages
    core.dom.js     element builder, hash router, live-region announcements
    core.tex.js     MathJax queue; safe rendering of learner LaTeX
    core.md.js      the markdown-with-maths renderer for the writing workspace
    core.store.js   localStorage: ticks, attempts, drafts, day log, mistakes, confidence, prefs
    core.sync.js    multi-device merge over Firebase REST
    core.pool.js    indexes the loaded data; inverts question → concept
    core.progress.js levels, the Leitner schedule, the reel queue
    core.study.js   the plan for today, goals, streaks, weak spots, calibration, the focus timer
    core.latex.js   command catalogue + completions for the writing workspace
    ui.parts.js     shared view parts (badges, meters, rings, gates, the why row)
    comp.tree.js    the expandable tick tree
    comp.note.js    one note, opened inside the tree
    comp.question.js one objective question, OMR first
    comp.figure.js  figure engine; fig.library.js the drawn figures
    comp.write.js   the writing workspace (scratchpads, teach-it-back)
    view.*.js       one file per surface: home, study, note, recall, drill, method, omr, write, login
    boot.js         theme, data loading, routing, failure surfaces
  mock/             placeholder content for the test build (do not delete)
```

Build with `python3 build.py` (live pool) or `python3 build.py --mock` from the project
root; see `HOOK_AGY.md` for the data contract and the deploy.

## Verification

Run `node tools/full_audit.js`, `node tools/check_tex.js`,
`node tools/check_tex.js --mock`, and `node tools/test_state.js` from the project root.
The full audit validates the live bilingual curriculum and rejects unsupported flags.

For browser regressions, serve the project with `python3 -m http.server 8765 --bind
127.0.0.1` and start an isolated Chrome instance with `--headless=new
--remote-debugging-port=9223 --user-data-dir=/tmp/sslc-browser-test`.
Run `node tools/browser_audit.mjs --all-lessons`; supply a URL to test a built or
hosted bundle instead. It uses a fresh incognito context, blocks Firebase, checks
guest onboarding, lesson completion/resuming, translated drill answers, keyboard
dialog handling, and layouts at 280/320/768/1280px. `--all-lessons` also renders every
lesson with MathJax in English and Malayalam. Browser tests require Node 22+.
