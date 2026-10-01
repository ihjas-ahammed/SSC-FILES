# flow-library — the shared study-system engine

Every SSC-V4 study system (`real-analysis`, `quantum-mechanics`, `optics`, and any added later) is
**one shared app plus one thin project layer**. This folder is the shared app. Read this
before touching any project's code.

## The rule: shared code here, unique code in the project

| Lives in `flow-library/` (shared, never project-specific) | Lives in `<project>/` (unique to that app) |
| --- | --- |
| `app/src/*.js`: every engine module, component and view | `app/index.html`: page head (title, icon, manifest, fonts) and script list |
| `app/src/ui.css`: the design system (tokens and components) | `app/project/project.js`: `PROJECT` (name, storage and sync keys, hooks) |
| `app/flow.js`: the loader and the ONE list of module order | `app/project/theme.css`: that app's look, applied on top of `ui.css` |
| `app/mock/`: the shared mock pool for `-test` builds | `app/project/fig.diagrams.js`: generated diagram index |
| `build.py`: the single-file bundler | `app/project/*.js`: optional extras (e.g. QM `effects.js`) |
| `tools/check_tex.js`: the TeX gate | `app/sources.js`: the data seam (which files are live or mock) |
| `tools/gen_diagrams.py`: the diagram indexer | `data/`, `diagrams/`, `pyq/`, `research/`, `publish/`, content tools |
| `new_project.py`: the scaffold for a new project | `build.py`, `tools/check_tex.js`, `tools/gen_diagrams.py`: 2-line shims |

**Never** put a project name, course id, concept id, storage key or project colour into
`flow-library/`. If the shared code needs to know something about the app, add a field
to `PROJECT` (documented in `app/src/core.project.js`) and read it from there.

**Never** copy a shared file into a project to change it. If a project needs different
behaviour, add a hook (see below) or make the shared code handle both cases. The old
layout had two drifting copies of every file, and that is exactly what this split removed.

## How a project makes the app look and feel different

A project has three levers, weakest to strongest:

1. **Tokens.** `theme.css` loads after `ui.css`, so redefining `--paper`, `--accent`,
   `--font-ui`, `--r-m` and so on (in `:root` and `:root[data-theme=dark]`) re-skins
   everything consistently. This is enough for a colour and type change.
2. **Rules.** `theme.css` may restyle any shared class: `.card`, `.stat`, `.kicker`,
   `.rung`, `.omr-opt`, `.rail-nav a`, `body::before` (the background) and more. It only
   ships in that project's page, so it can never affect another app. `<html>` also carries
   `data-project="<id>"` for the rare rule that needs it.
3. **Hooks.** `PROJECT.hooks` lets a project add behaviour without forking a view:
   - `home(ctx)` returns a node shown above the Today dashboard (QM: the wave-packet hero).
     `ctx.overall` holds `{ total, l1, l2, l3 }`.
   - `theme(dark)` runs after light/dark is applied.
   - `ready()` runs once, after the signed-in app is up.
   - `rungFig(rung, concept, i)` returns a node shown above one proof step (Optics: the step diagram).
   - `noteSim(concept)` returns a node placed after a note's figures (Optics: the simulation).

   Hooks live in `app/project/*.js`, loaded **before** `flow.js`. So they only register
   functions and must not call `DOM`/`UI`/`Pool` at load time. A hook that throws is
   logged and skipped, and the study loop keeps working. For a new kind of customisation,
   add a new hook call in the shared code and document it in `core.project.js`.

Reference points: **Real Analysis** is the house style, so its `theme.css` is empty on
purpose. **Quantum Mechanics** replaces fonts, palette, geometry, background, labels and
controls, and adds a home hero. Use it as the example of a fully distinct app.

## Shared widgets a project can switch on

- **Real line** (`app/src/comp.realline.js`, `PROJECT.realLine: true`, on for Real
  Analysis). It reads the order relations already written in a statement's or proof
  step's TeX and draws them in the three types of `design/realline-reference.html`:
  Type 1 `x > a` (blue ray), Type 2 `x < a` (green ray), Type 3 `a < x < b` (amber
  segment). The quantity the inequality is about is marked inside its set. In a proof each
  step is solved against everything established so far, and new points are highlighted.
  It draws **only** when the order is total on the terms shown. Content steers it with a
  `line` field (`false`, a TeX string, or a list). `tools/realline_report.js <project>`
  prints what every statement and step draws, with no browser. The authoring task and
  rules live in `real-analysis/HOOK_agy.md` → "The real-line widget".

## Shared features every project gets

- **Pick up where you left off** (Today, top). `Tree` writes a `last4` preference whenever a
  section or a note opens and never clears it on close, so Today can always offer the way back
  (`Tree.last()`, `Tree.revealSection()`, `Tree.revealPath()`). It syncs like any other pref.
  Before anything has been opened it offers the first unread note instead.
- **Pace** (Today, under the tiles; `app/src/comp.pace.js`). Sections completed per day, with
  a least-squares forecast. A section is complete when every note in it is read (level 1); the
  day comes from the tick timestamps the store already keeps (`Store.doneAt`), so no separate
  log exists, past progress shows up, and it merges across devices for free. The forecast solves
  the normal equations `[n Σt; Σt Σt²][a b]ᵀ = [ΣC ΣtC]ᵀ` (Gaussian elimination) on the trailing
  fortnight's cumulative curve; `b` is sections/day, the finish day is where the line reaches
  the syllabus total, and R² decides whether the caption calls the trend steady or uneven.
  The 14/30/90-day range is a `paceSpan` pref.
- **Diagram viewer** (`app/src/comp.zoom.js`, opt-in with `PROJECT.figZoom: true`): click a
  rendered diagram for a full-screen, 100–400% zoomable view. It was QM's own; QM and Optics now
  share this copy.

## Adding a new project

```
python3 flow-library/new_project.py <slug> "<Display Name>"
#   e.g. python3 flow-library/new_project.py linear-algebra "Linear Algebra"
```

This creates `SSC-V4/<slug>/` with the shell, `project.js` (unique storage and sync keys
derived from the slug), an empty `theme.css`, `sources.js` pointing at the shared mock
pool, the shims, `data/`, `diagrams/light|dark/` and a `HOOK.md`. Then:

1. Give it its own look in `app/project/theme.css` (and hooks if wanted). Keep all of
   that inside the project.
2. Deliver content into `data/`, list it under `live` in `app/sources.js`, and gate it
   with `node tools/check_tex.js`.
3. Add a publish block to `SSC-V2/SEM5/PHY/apps/tools/deploy.sh`, copying the Quantum
   Mechanics block (a `-test` page from `build.py --mock`, a live page only with `--live`).
   A Firebase deploy replaces the whole site, so a page missing from that script
   disappears.

## Changing the shared code

- A change here reaches **every** project. After any edit, build and open each project,
  both themes, phone and desktop:
  `for p in real-analysis quantum-mechanics optics; do python3 $p/build.py --mock; done`
- Adding a module means one line in `app/flow.js` → `FLOW_MODULES`. The dev pages and
  `build.py` both read that list.
- The dev page (`<project>/app/index.html`) loads `../../flow-library/...` directly, so it
  still runs from `file://` with no build. The repo root has a `flow-library` symlink, so
  the root `real-analysis` and `quantum-mechanics` symlinks resolve too.

## Publishing (unchanged)

`SSC-V2/SEM5/PHY/apps/tools/deploy.sh` **without** `--live` rebuilds only the `-test`
pages (mock data) and `/math/real-analysis-bete` (real data, `build.py --beta`) from
current code, and republishes the committed live pages byte for byte. Use it
to try a shared-code change safely. `--live` rebuilds the public pages from `data/`.

## Five learning levels and LR graph

Today → LR selects Reading (L1), Proofs (L2), Textbook questions (L3), PYQ (L4),
and Recall and fix (L5). Selection is a synced `paceLevel` preference; it never
changes achievement. Completion dates use `Store.doneAt`, `Store.proofAt` and
actual Recall grades. L4 needs mapped past papers; sections without them are excluded from the L4
forecast and remain explicitly without PYQ coverage. No mapped papers means
no L4 completion.
Older course-only papers gate all sections in their course. L5 needs every course
statement, proof, objective, worked exercise and PYQ recall item last graded
`got`; correcting a miss preserves the original first grade. Worked PYQs join the
real Recall reel. A subsequent miss removes the current recall completion. Repeated successful
recall preserves the correction date (`gotAt`) rather than moving it to today.
The course-level L5 includes extensions and cannot be earned with pending chapters.
Concept/tree colour stays at L1–L3; course badges now reach L5.
