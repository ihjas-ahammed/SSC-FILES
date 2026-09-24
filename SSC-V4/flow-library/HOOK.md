# flow-library — the shared study-system engine

Every SSC-V4 study system (`real-analysis`, `quantum-mechanics`, and any added later) is
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
  step's TeX (`a<b\le c`, `|x-a|<\varepsilon`, `x\in(a,b]`, `u=\sup S`) and draws them
  on a schematic number line: points in order, the relation between neighbours on the
  axis, bands for neighbourhoods and intervals, the free variable moving inside its
  band. In a proof each step is solved against everything established so far, and points
  that appear for the first time are highlighted. It draws **only** when the order is
  total on the terms shown, so it never implies an order the maths doesn't state.
  Content can steer it with no code change: `line: false` on a concept or rung suppresses
  it there, and `line: 'a-\\delta < x < a+\\delta'` replaces the TeX it reads.
  Check the effect of a data change with the parser directly: `RealLine.planStatement(c)`
  and `RealLine.planProof(c)` need no DOM.

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
  `for p in real-analysis quantum-mechanics; do python3 $p/build.py --mock; done`
- Adding a module means one line in `app/flow.js` → `FLOW_MODULES`. The dev pages and
  `build.py` both read that list.
- The dev page (`<project>/app/index.html`) loads `../../flow-library/...` directly, so it
  still runs from `file://` with no build. The repo root has a `flow-library` symlink, so
  the root `real-analysis` and `quantum-mechanics` symlinks resolve too.

## Publishing (unchanged)

`SSC-V2/SEM5/PHY/apps/tools/deploy.sh` **without** `--live` rebuilds only the `-test`
pages from current code and republishes the committed live pages byte for byte. Use it
to try a shared-code change safely. `--live` rebuilds the public pages from `data/`.
