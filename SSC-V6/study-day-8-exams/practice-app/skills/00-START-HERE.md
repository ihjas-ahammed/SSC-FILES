# Day 8 physics exam authoring

Read source/prompt.md, source/SOURCES.md, all skills, doc/tda.html and the TDA
briefing before changing content or behaviour. Preserve both Model Paper 4
papers: Electrodynamics II and Optics, each with 20 questions in A/B/C order.

Write every explanation, reference answer, rubric, derivation, diagram and quiz
directly in JSON yourself. Do not generate or transform educational data with
scripts, loops or templates. Scripts may extract sources, validate, verify maths,
test and build. Completed files may be copied verbatim.

The user requested the new flip feature ONLY for low-mark questions: here those
are the ten 3-mark Section A questions per paper. The 6- and 10-mark questions,
model-answer info cards, maths, figures and derivations do not flip.
Use meta.definitionChecks true and meta.recallScope "low-mark"; a short original
question has marks 3 and a directly authored recallAnswer. Its question is the
front; an editable short answer is on the back. Preserve all equations/subparts.
Figures and calculations may be written on paper. Do not add a duplicate
textAnswer box on the front.

Eight words permits Check, which reveals this question's reference answer.
I’m correct confirms comparison; Retry clears it; I know this skips;
Practise again retains previous progress. No semantic or keyword grading.
Those actions do not award exam marks. The subsequent rubric cards self-mark
the complete answer, including drawings and equations.

Each paper's marks indicator is separate from football goals and coverage.
It shows self-marked score /70 and fully marked questions /20. The breakdown
shows sections and questions. A caps at 24, B at 36; C counts the best one answer
up to 10. Unmarked parts count zero so far; partial marks count immediately.
Saved rubric states restore marks. These rubrics are practice guidance, not an
official marking scheme.

Each question sheet follows: question, rubric eval cards, score, full model
answer/diagrams/derivation, Remember key, exactly three distinct word-completion
OMR mcq cards. Rubric maxima sum to the question marks. Use inlineChecks false
and autoRevealQuestions true. Derivations have four decision checkpoints each.

Retain focused notch, Pause/Resume, click-only glossary, calculator, skippable
breaks, separate hydration/half-time durations, hydration at displayed 25/70 only
for real halves >=45 minutes, visible locks and movement boundaries. Match locks
are independent within each question sheet. Before a match, reading/typing are
free. Locked cards never disappear.

ED has 216 authored cards, 7 derivations and 60 Remember quizzes. Optics has
220 cards, 6 derivations and 60 quizzes. Data is in data/ at the workspace root;
source/data/ holds verbatim mirrors. Keep both skills copies identical.
Build each standalone with its separate --app directory, avoiding hosted-output
collisions. Leave previous physics and maths course folders alone.
