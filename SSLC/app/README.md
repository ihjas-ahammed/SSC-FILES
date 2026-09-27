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
| **Today** | The plan for the day, built from what is due, what was missed and what comes next, in the order the learning research says pays most: recall first, new material last. Daily goal in three sizes, streak, focus timer, weak spots, why marks were lost, calibration, exam countdown, and the courses. |
| **Study** | The whole syllabus as one page of dropdowns: course → chapter → section → note. A note opens in place with its statement, figure, plain-language callout, derivation, traps, self-check, exercises (each as Pólya's four steps), objective questions, and a "teach it back" box. |
| **Recall** | A vertical reel of cards drawn only from material already met, scheduled by Leitner box and shuffled across chapters. You say how sure you are before the reveal; after a miss you say why. Modes: everything due, not yet attempted, weak spots, one chapter. |
| **Drill** | A short timed paper, chapters interleaved, drawn from what you have read (or your weak spots, or the whole syllabus). Results by chapter, and the notes to review next. |
| **How to study** | Reached from Today. The research behind the app, what does not work, how each SSLC subject is best studied, and how to sit the paper. |

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

## Progress

Stored in this browser under the localStorage key `sslc.v1` (a record found under the old
shared key `ssc4.level1.v1` is adopted once), and merged across devices through the sync
in `src/core.sync.js` under the `sslc_v1` namespace, keyed by name and roll number. That
key is a pass key, not a password, and the sign-in screen says so.

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
