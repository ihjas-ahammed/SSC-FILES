# Level 1 app

Open `app/index.html` in a browser — no build, no server, no install. Works from
`file://`; the only network call is MathJax from a CDN (the app says so on screen if that
call fails).

## What Level 1 is

The five things `HOOK_claude.md` asks for at Level 1, and nothing beyond them:

| Surface | What it does |
| --- | --- |
| **Today** | Next action in the loop, and the numbers — completion and first-try recall kept apart. |
| **Study** | The whole syllabus as one page of dropdowns: course → module → section → note, each row with a tick and a progress ring. Nothing is more than one line tall until you open it, and expanded rows keep the full width. Ticking a parent ticks everything under it; a half-done parent shows a mixed tick. Open/closed state is remembered. |
| **Recall** | A vertical reel — one statement per screen, swiped or arrow-keyed, with a progress rail down the side. The answer stays hidden until you attempt it. |
| **Questions** | OMR-first MCQ / MSQ / NAT. Lock an answer, then get the full worked solution, what it tests, the figure behind it, the trap, and a changed-version follow-up. |
| **Write** | LaTeX theorem-writing with live MathJax below the input and a contextual command palette (a bottom sheet on a phone). |

Every note carries its own navigation: the prerequisite chain rendered as a route to the
result ("you are here", with ticks), what the result is **used later by**, previous/next
in reading order, the questions that examine it, and a "write the statement" route.

### Figures

Ten hand-drawn inline-SVG figures (`src/fig.library.js`) — theme-aware, animated on
entry, and two of them interactive: drag ε and watch δ answer it, or slide a fixed-width
δ-window along `1/x` and watch the image band explode near zero. They are drawn from the
mathematics, not pasted in as images, so they scale, recolour with the theme and cost
nothing to ship. `diagrams/` belongs to AGY and is not read by this app.

## What is deliberately absent

Level 2 and Level 3 work, per the staged plan: no scheduler, no recall levels 2–5, no
proof ladders, no exam-track weighting, no question generators, no sync, and no entrance
course content. The mastery ladder is shown with levels 2–5 locked so the shape stays
visible without pretending to measure them.

## The content is mock

`app/mock/` holds ten standard theorems and sixteen OMR questions written only to
exercise the loop. The mathematics is standard and stated correctly, but it is **not
validated content and not from any past paper** — the app badges every screen while that
is true. AGY owns the replacement; the contract is in
`HOOK_agy.md` → "Runtime data contract". `data/`, `diagrams/` and `pyq/` are AGY's and
are not read by this app.

Switching to real content is one edit in `app/sources.js`: set `use: 'live'` and list the
delivered files. Nothing in `app/src/` changes.

## Layout

```
app/
  index.html        shell, MathJax config, script order
  sources.js        THE DATA SEAM — mock vs live
  src/
    ui.css          design tokens, glass/aurora, components, motion, light/dark
    core.dom.js     element builder, hash router, live-region announcements
    core.tex.js     MathJax queue; safe rendering of learner LaTeX
    core.store.js   localStorage: completion, first attempts, drafts, prefs
    core.pool.js    indexes the loaded data; inverts question → concept
    core.latex.js   command catalogue + the contextual palette
    ui.parts.js     shared view parts (badges, meters, gates, reveals)
    comp.tree.js    the expandable tick tree
    comp.figure.js  figure engine: coordinate mapping, frame, controls
    fig.library.js  the ten figures
    comp.write.js   the theorem-writing workspace component
    view.*.js       one file per surface
    boot.js         theme, data loading, routing, failure surfaces
  mock/             placeholder content (delete once real data lands)
```

## Reviewing it

Worth judging: whether the tree opens at the right depth and the ticks feel satisfying;
whether the reel is the right pace for statement recall; whether the figures earn their
space and the two interactive ones teach anything; whether the attempt gates feel honest
or annoying; whether the worked answers land at the right length; and whether
completion-vs-recall being two separate numbers reads clearly.

Progress lives in this browser only, under the localStorage key `ssc4.level1.v1`.
"Reset progress" is on the Today screen.
