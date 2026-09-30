# Optics Study System (`optics`)

Built on the shared engine. **Read [`../flow-library/HOOK.md`](../flow-library/HOOK.md) first**: it
says what belongs here and what belongs in flow-library. Same levels, tree, reel and Today
(resume card and pace graph included) as Real Analysis and Quantum Mechanics.

**Course.** One course, `op` — CU-FYUGP B.Sc. Physics Honours, Semester V, *Optics*. Books:
Ghatak, *Optics* 6e (Modules I–III) and Subrahmanyam–Brij Lal–Avadhanulu (Module IV).

| Module | Sections (= syllabus units) | Notes |
| --- | --- | --- |
| I Fermat's Principle | 1.1–1.4 | laws from Fermat, spherical surface, thin lens, Newton's formula |
| II Interference | 2.1–2.7 | superposition, coherence, Young, mirrors/biprism, Lloyd, films, Newton's rings, Michelson |
| III Diffraction | 3.1–3.5 | single/double/N slit, grating, half-period zones, zone plate, straight edge |
| IV Polarisation | 4.1–4.6 | states, Brewster, Malus, double refraction, wave plates, analysis |

Levels: 1 read · 2 proof worked · 3 every written exercise in the section done · 4 the question-bank
items (`data/pyq.js`, only conceptual/derivation questions, see below).

## What is unique to this project

- `app/index.html`, `app/project/project.js` (storage `ssc4.op.v1`, sync `ssc4_op_v1`, `figZoom: true`)
- `app/project/theme.css` — "optical bench & darkroom": warm lens-paper light, near-black dark, magenta
  accent, and a spectrum (violet→red) that runs through card edges and meters.
- `app/project/effects.js` — the home hero: a prism splitting white light. It is the real geometry
  (Snell at both faces, `n(λ)=1.50+0.020/λ²`), the prism turns through the angle of minimum deviation.
- `app/sources.js`, `data/`, `diagrams/`, `authoring/`, `tools/`.

## Authoring

Content is written in Python (`authoring/*.py`, raw strings, single backslashes) and generated:

    python3 tools/author.py        # authoring/*.py -> data/*.js (JSON-escaped)
    node tools/check_tex.js        # must report 0 errors
    python3 build.py --mock        # build/test/index.html

Never edit `data/*.js`. See [`AUTHORING.md`](AUTHORING.md) for the helpers and rules.

## Diagrams

Two sources, both writing a light/dark pair into `diagrams/`, named `<conceptId>_<slug>.png`:

- **Plots of a formula** — `python3 tools/gen_plots.py` (matplotlib): intensity curves, the Cornu
  spiral, polarisation ellipses. Exact, drawn from the formula.
- **Schematics** — `python3 tools/gen_codex_diagrams.py` runs Codex's image tool for each entry of
  `tools/diagram_specs.py`, resizes to 1200 px and `tools/darken.py` makes the dark twin (invert
  lightness, keep hue). Resumable: it skips finished files. Check each result: an image model can
  misplace a label.

Then `python3 tools/gen_diagrams.py` regenerates `app/project/fig.diagrams.js`.
`tools/contact_sheet.py light out.png [prefix…]` makes a review sheet.

## The question bank (Level 4)

`data/pyq.js` comes from the study question bank the learner supplied. Its numeric items have corrupted
numbers (e.g. "refractive index 14"), so **only conceptual and derivation questions are used**, each once,
with model answers built from the concept files. The exam tags are the bank's own and are unverified.

## Publishing

`SSC-V2/SEM5/PHY/apps/tools/deploy.sh` has an Optics block: `/phy/optics` (committed `build/index.html`,
rebuilt with `--live`) and `/phy/optics-test` (mock pool, always fresh).
