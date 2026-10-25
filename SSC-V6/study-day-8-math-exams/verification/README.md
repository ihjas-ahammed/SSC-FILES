# Day 8 maths verification

Strict builds have zero errors, warnings and automatic fixes.
Real Analysis: 20 questions, 165 authored / 168 expanded cards, ten flips.
Algebra: 20 questions, 156 authored / 159 expanded cards, ten flips.
Every question records a textbook source and has a complete worked solution.
Each paper has one animated equality derivation with four checkpoints.

content-check.py reads the authored data and checks all rubric sums, marks,
question order, flip scope, references, body lengths, SVG XML, derivation
checkpoints and data mirrors. It independently verifies function limits, spike
integrals, weighted-mean counterexamples, product errors, additive cosets,
permutation composition, both dihedral coset partitions, the entire reordered
Z6 table, the block table and modular powers. This validator requires SymPy
and never writes educational data. Results: content-check.json.

exam-check.cjs runs Playwright/Chrome in temporary Android-style contexts and
checks both standalone and hosted apps:

- Twenty questions, exactly ten low-mark flips and no high-mark flips.
- All authored TeX parses; option equations render without MathJax errors.
- Android starts focused, with visible streak dots at 320/360/390 pixels.
- Editable flips before a match, visible locks, left restriction, seven/eight
  word gate, same-question reference, Retry, confirmation, skip and Practise again.
- Draft/reference persistence, pause/reload and correct rubric-score updates.
- Section ceilings cap full credit at 70; both C answers still count only once;
  partial credit updates immediately and recall does not award exam marks.
- Textbook source/paper metadata, mobile tables/figures and desktop layouts.
- Less-than signs survive HTML parsing without swallowing proof text.
- Hosted copies load, no page overflow and no page errors.

Results: exam-check.json and adjacent mobile/desktop screenshots.
derivation-check.cjs separately plays each animated derivation, answers a real
decision checkpoint, checks its feedback/Continue control and confirms that
the checkpoint awards no exam marks. Results: derivation-check.json.
Build checks compare all eight root/hosted/dist data payloads to canonical JSON,
the two data mirrors, and both skills folders. Original source PDFs/HTML are
compared byte for byte with Downloads.

The physics option/Android regressions live in ../study-day-8-exams/verification/.
MathJax/fonts need connectivity initially; the calculator is bundled.
