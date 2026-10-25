# Day 8 · Maths exam practice

Open [the two-paper launcher](index.html):

- [Real Analysis II · Model Paper 5](real-analysis-ii-model-paper-5-practice.html)
- [Abstract Algebra I · Model Paper 4](abstract-algebra-i-model-paper-4-practice.html)

Both papers retain all 20 original questions, with complete textbook-based
answers, step-by-step proofs, worked calculations and self-marking rubrics.
Every question shows its primary textbook reference. The original PDFs/HTML
and relevant Bartle–Sherbert/Fraleigh extracts are included.

Only 3-mark questions have editable flip backs. Check after at least eight words
reveals the same question's reference answer. Compare it, then choose I’m correct
or Retry. I know this skips; Practise again permits another attempt. Full proofs,
calculations and tables can be written on paper. Six- and ten-mark questions
keep the ordinary question → rubric → score → full model-answer flow.

The always-visible marks indicator shows the self-marked score out of 70.
Tap it for section and question totals. A caps at 24, B at 36; C counts the
best one answer up to 10. Partial rubric marks count immediately, and unmarked
parts count zero so far. Skips, recall confirmations and football goals do not
award exam marks. The rubrics are practice guidance, not official mark schemes.

Mathematics renders inside answer options, including fractions and subscripts.
Inequalities are escaped before HTML parsing so less-than signs cannot swallow
text. Tables and long formulas remain readable inside their cards.
Android starts in the same focused notch view as desktop, with the same clock,
score, streak dots and Match centre/pause controls, plus the marks indicator.

Real Analysis contains 165 directly authored cards (168 after derivation
expansion); Algebra contains 156 (159 expanded). All 40 questions have full
worked solutions. Each paper also has one animated equality derivation with
four decision checkpoints. Logical and inequality proofs are presented as
complete info/math steps rather than forced into an equation animation.
These maths papers do not add the physics-only word-quiz quota.

Pause/Resume, visible match locks, independent per-question progression,
click-only glossary, calculator, hydration and skippable breaks are retained.
Marks and drafts persist on the same browser/device. MathJax and fonts need
connectivity initially; the calculator is bundled.

## Sources and rebuild

Read [the source audit](source/SOURCES.md) for book sections and conventions.
Canonical JSON is in data/; source/data/ holds exact mirrors.
The two skills folders are synchronized.

From this folder:

    python3 practice-app/build.py --strict --data data/real-analysis-ii-model-paper-5-practice.json --out ./real-analysis-ii-model-paper-5-practice.html --app apps/real-analysis-ii
    python3 practice-app/build.py --strict --data data/abstract-algebra-i-model-paper-4-practice.json --out ./abstract-algebra-i-model-paper-4-practice.html --app apps/abstract-algebra-i

Separate hosted apps live under apps/, with additional builds under
practice-app/dist/. Verification reports/screenshots are under verification/.
Physics fixes remain in ../study-day-8-exams/; the earlier syllabus apps are
separate and unchanged.
