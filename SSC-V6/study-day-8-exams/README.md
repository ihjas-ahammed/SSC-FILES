# Day 8 · Physics exam practice

Open [the two-paper launcher](index.html), or either standalone:

- [Electrodynamics II · Model Paper 4](electrodynamics-ii-model-paper-4-practice.html)
- [Optics · Model Paper 4](optics-model-paper-4-practice.html)

Both papers come from Downloads and retain all 20 original questions in A/B/C
order. Each paper is 2 hours, maximum 70 marks. The original PDFs and source HTML
are in papers/. The HTML preserves equations lost in plain PDF text extraction.

Only 3-mark questions have the new flip feature. Tap or Recall flips to an
editable answer; eight words permits Check to show the same question's reference.
Compare it and choose I’m correct or Retry. I know this skips; Practise again
lets you retry while preserving an earlier unlock. Write any requested diagrams
and calculations on paper. Six- and ten-mark questions retain the full paper
answer → marking rubric → model solution flow.

The marks indicator below the notch stays visible and updates as rubric parts
are marked. Tap it for section and question scores. A is capped at 24, B at 36;
C counts your best one answer up to 10. Unmarked parts count zero so far.
Recall confirmations, skips and football goals do not award exam marks.
The authored rubrics are self-marking practice guidance, not official schemes.
Marks and drafts save on the same browser/device and restore on reload.

The focused notch, pause, visible locks, calculator, click-only glossary and
skippable hydration/half-time breaks are retained. Locks apply only during a
match and progress independently within each question. Outside matches all
reading is available and answer backs remain editable. The marks dialog pauses
OMR countdowns and active derivation playback.
Mathematics in marking options is rendered by MathJax, including fractions and
subscripts. Android keeps the same initial notch controls and streak dots as
desktop, with tighter spacing on small screens.

Electrodynamics has 216 authored cards, seven derivations and 60 Remember OMR
checks. Optics has 220 cards, six derivations and 60 OMR checks. Each derivation
has four decision checkpoints. All content was written directly in JSON.
Read [the source audit](source/SOURCES.md) for conventions and ambiguous questions.

## Files and builds

data/ contains the canonical JSON; source/data/ holds exact mirrors.
practice-app/ contains the updated runtime, builder and skills. source/skills/
mirrors its skills. Separate installable hosted apps are in apps/electrodynamics-ii/
and apps/optics/. The standalone pages can be opened directly in a browser.
MathJax and fonts need connectivity initially; the calculator is bundled.

From this folder:

    python3 practice-app/build.py --strict --data data/electrodynamics-ii-model-paper-4-practice.json --out ./electrodynamics-ii-model-paper-4-practice.html --app apps/electrodynamics-ii
    python3 practice-app/build.py --strict --data data/optics-model-paper-4-practice.json --out ./optics-model-paper-4-practice.html --app apps/optics

Validation and browser reports/screenshots live in verification/. Previous
study-day-8, study-day-8-math, study-day-9 and study-day-9-math remain separate.
