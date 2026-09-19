# Claude handoff — Quantum Mechanics study system

This file is the implementation brief. Read `HOOK_agy.md` when working on content,
syllabus extraction, or question data. Claude owns the product design, engine, UX, and
integration of validated data; Claude does not invent or silently rewrite source data.

## Product

Build a mobile-first study system for Quantum Mechanics I (`qm1`), Quantum Mechanics II (`qm2`),
and the entrance course **Quantum Mechanics for Entrance (`qme`)**, in that order.

All project files and runtime assets remain inside this folder. Resolve paths from the
project root.

## Learning design

The core loop is:

```text
attempt → feedback → correction → delayed reattempt → transfer
```

### Components

1. **Unfolding Note Architecture**:
   - Inside the Study tree (`comp.note.js`), exactly one note is open at a time.
   - Synchronous `minHeight` locking prevents scroll jitter and accordion reload glitches.
   - Active note title displayed as subtitle in the top toolbar.

2. **Mastery Hierarchy (Levels 1–4)**:
   - **Level 1**: Encountered & read concept definitions and postulates.
   - **Level 2**: Derivation ladders guessed rung-by-rung before reveal.
   - **Level 3**: Section exercises wrapped in collapsible dropdown, unlocked upon Level 2 completion.
   - **Level 4**: IIT JAM Physics past papers with instant feedback, worked solutions, and traps.

3. **Diagrams & Visuals**:
   - Offline rendered PNG diagrams in `diagrams/light/` and `diagrams/dark/`.
   - Theme swaps dynamically between light and dark modes via `comp.figure.js`.
   - Indexed automatically into `app/src/fig.diagrams.js` via `python3 tools/gen_diagrams.py`.

4. **TeX and Formatting**:
   - MathJax handles `$inline$` and `$$display$$`.
   - `core.dom.js` converts `**bold**` and `*italic*` markdown into HTML tags without corrupting LaTeX math spans.
   - Every file must pass `tools/check_tex.js` with 0 errors.
