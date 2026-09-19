# Quantum Mechanics Study System (`quantum-mechanics`) Handoff Map

The project instructions are split by responsibility:

- [`HOOK_claude.md`](HOOK_claude.md) — product design, learning experience, tree architecture, UI/UX interaction, auto-disclosure algorithms, and integration of validated data.
- [`HOOK_agy.md`](HOOK_agy.md) — accurate syllabus/question collection, Griffiths 3e & Zettili 2e provenance, IIT JAM Physics PYQ extraction (2005–2026), LaTeX repair & validation, data schemas, and deployment checklists.

## Shared Invariants

- **Location & Paths**: The project lives in `quantum-mechanics/` (inside `SSC-V4/quantum-mechanics`, aliased to `'quantum mechanics'` and root symlinks). All internal paths resolve relative to `quantum-mechanics/`.
- **Three Courses**:
  1. **Quantum Mechanics I (`qm1`)**: CU-FYUGP Sem V (PHY5CJ301) — The Wave Function, TISE & 1D Potentials, Hilbert Space Formalism, and Harmonic Oscillator.
  2. **Quantum Mechanics II (`qm2`)**: CU-FYUGP Sem VII (PHY7CJ401) — Central Potentials, Angular Momentum & Spin, Approximation Methods, and Scattering Theory.
  3. **Quantum Mechanics for Entrance (`qme`)**: IIT JAM Physics (JAM PH) — Matter waves, uncertainty relations, box potentials, barriers & tunneling, harmonic oscillators, and past papers.
- **Mastery Hierarchy (Levels 1–4)**:
  - **Level 1 (Read)**: Concepts, postulates, and definitions read and understood.
  - **Level 2 (Proof Worked)**: Theoretical derivations carrying rigorous multi-step proofs (`idea`, `why`, `rungs`, `ends`).
  - **Level 3 (Exercises Done)**: Written textbook exercises from Griffiths 3e and Zettili 2e with complete worked solutions and approach strategies.
  - **Level 4 (JAM Past Papers)**: Past paper questions from IIT JAM Physics (2005–2026).
- **Interactive UI Architecture**:
  - Unfolding note architecture inside the Study tree (`app/src/comp.note.js`); exactly one note open at a time; open path remembered.
  - Section written exercises wrapped in an outer `.exp-exercises` collapsible dropdown with Level 2 auto-disclosure.
  - Synchronous `minHeight` locking prevents scroll jitter and accordion reload glitches.
  - Active note title displayed as subtitle in top toolbar.
  - Light and dark themes with dynamic SVG and PNG diagram swapping (`comp.figure.js`).
- **LaTeX & HTML Integrity**:
  - `tools/check_tex.js` is the gate for all authored content. It enforces 0 errors across odd `$`, unbalanced braces, unmatched environments, trailing row breaks, and bare math keywords.
  - Markdown formatting (`**bold**`, `*italic*`) is automatically converted to `<b>` and `<i>` in `DOM.el` while strictly shielding LaTeX math spans.
- **Publishing & Deployment**:
  - Built into single-file bundles via `python3 build.py` (`build/index.html`) and `python3 build.py --mock` (`build/test/index.html`).
  - Published via `/home/ihjas/Documents/GitHub/SSC-FILES/SSC-V2/SEM5/PHY/apps/tools/deploy.sh --live` to Firebase Hosting at `https://ssc-data-science-qm.web.app/phy/quantum-mechanics`.
