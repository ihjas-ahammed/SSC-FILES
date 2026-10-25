# Day 8 maths exams — current prompt

Build two maths practice apps from Downloads:
REAL-ANALYSIS-II-MODEL-PAPER-5.pdf and ABSTRACT-ALGEBRA-I-MODEL-PAPER-4.pdf.
The matching source HTML preserves equations lost in PDF text extraction.
Keep every original question/subpart, all data and 10/8/2 A/B/C order.

Current user requirements:

- First fix physics marking options to support MathJax, then make both maths papers.
- Give textbook-based answers and full derivations/proofs.
- Retain low-mark-only card flips and the marks indicator.
- Android must initially show the same new focused notch as desktop.
- Directly author educational content; do not use a script/generator to write data.

Read all skills, source/SOURCES.md and both doc/ interaction references.
Use Bartle–Sherbert Chapters 7–8, Fraleigh §10, §8 permutation prerequisites,
and §24 for the explicit Euler/Fermat question. Each question has a textbook
source field shown on its original question card.

Use question → eval rubric → score → full model proof/worked answer → key.
The maths papers do not inherit physics's three-word-OMR quota. Avoid duplicate
recall questions. Use step-by-step info/math cards for logical/inequality proofs;
animated equality derivations each have four meaningful checkpoints.

Only the ten 3-mark original questions per paper flip. Use definitionChecks true,
recallScope "low-mark", inlineChecks false and autoRevealQuestions true.
Each such question has marks 3 and a directly authored recallAnswer covering
all subparts. Keep the whole prompt on the front, editable short answer on the
back, and repeat the prompt there. No duplicate front answer box.
Eight words permits Check → same-question reference → I’m correct or Retry.
I know this skips, Practise again retains an earlier unlock. No semantic grading.
Full proofs/equations/tables can be on paper and are self-marked with eval cards.

Marks come only from rubric selections. A/B/C caps are 24/36/10, C best one.
Show /70 and fully marked questions /20 under the notch. Partial marks count
immediately; unmarked rubric parts count zero so far; saved states restore marks.
Recall/skip/reading/football goals do not award exam marks. Rubrics are practice
guidance, not official examiner schemes.

Use explicit TeX inside option text as well as questions/answers. Protect
mathematical < signs before HTML parsing in static and dynamic content.
Long equations scroll within the option without moving the marks out of view.

Android and desktop share the default notch: score, clock, streak dots,
Match centre and pause controls. Do not hide dots or switch to the expanded
header on narrow screens. Retain visible locks, left/first-lock boundaries,
click-only glossary, pause, calculator, conditional hydration and Skip break.
Locks apply only during matches, independently per question.

Canonical data: data/real-analysis-ii-model-paper-5-practice.json and
data/abstract-algebra-i-model-paper-4-practice.json, mirrored under source/data/.
Real Analysis has 165 authored cards and Algebra 156; each has 20 questions,
10 flips and one animated derivation with four checkpoints plus full proofs.
Synchronize both skills directories and all standalone/hosted/dist outputs.
Do not modify earlier syllabus courses.
