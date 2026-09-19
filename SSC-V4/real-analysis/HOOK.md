# Real Analysis Study System (`real-analysis`) Handoff Map

The project instructions are split by responsibility:

- [`HOOK_claude.md`](HOOK_claude.md) — product design, learning experience, tree architecture, UI/UX interaction, auto-disclosure algorithms, and integration of validated data.
- [`HOOK_agy.md`](HOOK_agy.md) — accurate syllabus/question collection, Bartle & Sherbert 4e provenance, JAM PYQ extraction (2005–2026), LaTeX repair & validation, data schemas, and deployment checklists.
- [`data_temp/content-skeleton.json`](data_temp/content-skeleton.json) — draft-only JSON contract used by AGY and Claude before content is promoted into `data/` or `pyq/`.

## Shared Invariants

- **Location & Paths**: The project lives in `real-analysis/` (at the root of `SSC-FILES`, aliased to `SSC-V4` via symlink for backwards compatibility). All internal paths resolve relative to `real-analysis/`.
- **Three Courses**: Real Analysis I, Real Analysis II, and Real Analysis for Entrance (RAE), in that order. RAE contains only genuinely new entrance material (metric spaces) and never duplicates RA1 or RA2 concepts.
- **Mastery Hierarchy (Levels 1–4)**:
  - **Level 1 (Read)**: Concepts and definitions read and understood.
  - **Level 2 (Proof Worked)**: 131 theorems, lemmas, and corollaries carrying rigorous multi-step proofs (`idea`, `why`, `rungs`, `ends`).
  - **Level 3 (Exercises Done)**: 475 written exercises from Bartle & Sherbert 4e. Completed section sets award Level 3 to all concepts in that section.
  - **Level 4 (JAM Past Papers)**: 226 past paper questions from IIT JAM (2005–2026).
- **Interactive UI Architecture**:
  - Unfolding note architecture inside the Study tree (`app/src/comp.note.js`); exactly one note open at a time; open path remembered.
  - Section written exercises are wrapped in an outer `.exp-exercises` collapsible dropdown with Level 2 auto-disclosure (closed by default at Level 1, auto-opens when Level 2 proof is completed).
  - Synchronous `minHeight` locking prevents scroll jitter and accordion reload glitches.
  - Active note title displayed as subtitle in the top toolbar.
  - Auto-expand of all self-check questions, proof cards, and exercises inside an opened note.
  - Responsive layout: mobile view preserves single-line tag flow (`white-space: nowrap; flex: 0 0 auto;`).
- **LaTeX & HTML Integrity**:
  - `tools/check_tex.js` is the gate for all authored content. It enforces 0 errors across odd `$`, unbalanced braces, unmatched environments, trailing row breaks, double-slash commands (`\\cmd`), newline-corrupted macros (`\notin`, `\neq`, `\ne`), and bare math keywords.
  - Markdown formatting (`**bold**`, `*italic*`) is automatically converted to `<b>` and `<i>` in `DOM.el` (`app/src/core.dom.js`) while strictly shielding LaTeX math spans.
- **Publishing & Deployment**:
  - Built into single-file bundles via `python3 build.py` (`build/index.html`) and `python3 build.py --mock` (`build/test/index.html`).
  - Published via `SSC-V2/SEM5/PHY/apps/tools/deploy.sh --live` to Firebase Hosting at `https://ssc-data-science-qm.web.app/math/real-analysis`.
