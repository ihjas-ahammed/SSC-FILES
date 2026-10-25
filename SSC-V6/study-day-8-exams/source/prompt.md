# Day 8 physics exams — source and authoring prompt

Create practice apps for ELECTRODYNAMICS-II-MODEL-PAPER-4.pdf and
OPTICS-MODEL-PAPER-4.pdf in Downloads. Preserve all 20 questions and their
A/B/C order, complete data, equations, subparts and requested diagrams.
Use the matching source HTML to recover equations omitted by PDF text extraction.
Do not rewrite the source files.

User updates:

1. Apply our new flip feature only to low-mark questions: here the 3-mark
   Section A originals. The ten short questions per paper flip from prompt
   to editable answer. Six- and ten-mark questions keep the full practice layout.
2. Include an always-visible indicator of marks being scored. It shows /70
   and marked question count; a breakdown shows sections/questions.
3. Keep directly authored study data, meaningful direct definitions, click-only
   glossary, visible locks and typing. Never use scripts to author/transform
   explanations, rubrics, references, derivations, diagrams or quizzes.
4. Render mathematics inside marking options with MathJax. Author explicit TeX
   for formulas, including the single-slit amplitude in Optics Q12. Retain the
   original marks, correct options and question IDs.
5. Android initially uses the same focused notch as desktop, with streak dots
   and the same score/clock/Match centre/pause controls visible at narrow widths.

Read all practice-app/skills, doc/tda.html and the TDA briefing. Set definitionChecks
true, recallScope "low-mark", inlineChecks false and autoRevealQuestions true.
Use original question marks 3 with recallAnswer only on Section A. Check needs
eight words, reveals the same card's reference, then permits I’m correct or Retry.
I know this skips; Practise again retains previous progress. No keyword grading.
Drawings/equations can be on paper. The rubric, not recall confirmation, awards
exam marks. No front textAnswer duplicate on a flip question.

Use question → eval rubric → score → complete model answer/figures/derivation
→ Remember key → exactly three distinct word-only OMR blanks per question.
Each rubric sums to its marks and includes partial/zero credit.
These are authored practice rubrics, not official university marking schemes.
Every derivation has four meaningful checkpoints.

Each paper is maximum 70 with 3 sections: ten 3-mark questions (ceiling 24),
eight 6-mark questions (ceiling 36), two 10-mark questions (answer best one).
The marks meter adds completed rubric parts and counts unmarked parts zero so far.
Apply section ceilings and best-one C; do not count both long answers.
Partial marks count immediately. Drafts/marks persist per paper.
No marks from skips, recall, reading, quizzes or football goals.

Retain notch default, Pause/Resume, calculator, independent break durations,
hydration at displayed 25/70 for real halves >=45 minutes, and Skip break.
Locks only during matches, independently per question. Dim locked cards without
hiding them; stop at the first lock and prevent moving left from an unfinished
centred flip question. Before/after matches browsing and typing are unrestricted.

Use the Day 8 Murugeshan and Ghatak textbook extracts under source/reference/.
Read source/SOURCES.md for numerical and scope conventions. Preserve the source
question wording, but explain ambiguous wording in the solution/rubric:
Optics Q11 symmetric versus same-side pairs; Q13 focal-plane geometry.

Canonical files: data/electrodynamics-ii-model-paper-4-practice.json and
data/optics-model-paper-4-practice.json. Mirror exactly under source/data/.
Build the standalone pages and separate apps/ and practice-app/dist/ outputs.
Keep practice-app/skills and source/skills identical. Do not change older courses.
