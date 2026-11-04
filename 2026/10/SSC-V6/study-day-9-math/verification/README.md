# Day 9 Maths verification

The strict builder reports 4 sections, 14 topics, 199 authored cards and
6 derivations, with zero errors, warnings or automatic fixes. The rendered deck
expands to 217 cards. The timetable allocations sum to 174 minutes per subject.

check-maths.py reads the authored JSON and verifies all 15 numerical quiz answers,
symbolic derivatives, Hessians, eigenvalues, stationary points, classifications,
the normal coefficient examples, four SVG documents and four checkpoints in every
derivation. It also samples the proved epsilon–delta estimate over complex
increments. This validator requires SymPy; it never writes educational data.
Results are in maths-check.json.

course-check.cjs uses the installed Playwright/Chrome environment to check:

- Course identity, all 14 topics, glossary and intuition counts, 217 expanded cards
  and six derivation players; default focused mode and initial zero progress.
- Every authored TeX expression through MathJax, including formulas, inline
  notation, derivation goals and move captions.
- Click/tap-only glossary definitions and exclusion of each card's own term.
- Editable front/back flips before and during a match; visible, dimmed locks;
  per-topic progression; left restriction, eight-word threshold, same-card
  reference, Retry, confirmation, skip and Practise again.
- Saved drafts/references and paused matches across reload; quiz countdowns,
  correct-answer scoring and a guided-derivation decision checkpoint.
- Hydration schedule thresholds, independent break durations and immediate
  skipping of both hydration and half-time breaks.
- Mobile equation/diagram layouts, dark mode, desktop layout and the hosted app.

The report is course-check.json. Screenshots are stored beside this README.
Both data mirrors, both skills directories and all four standalone/hosted outputs
are compared for consistency after building. Archived physics verification lives
under source/day-9-physics-baseline/verification/ and is not a maths test report.

MathJax and fonts need connectivity on first load; the calculator is bundled.
The app inherits the tested Day 9 flip/lock, pause, break and calculator runtime.
