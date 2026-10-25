# 04 — Questions

Questions are the match: right answers build streaks (3 in a row = a goal for Focus), every
3rd wrong answer is a goal for Time. They must be fair, quick and unambiguous.

## Style

- Ask the concept directly. No stories, no everyday-life wrappers, no pictures in questions.
  Good: "At the top of a projectile path, which velocity component is zero?"
  Bad: "Riya throws a cricket ball to her friend at the park…"
- Keep every question to **one short line, at most about 15 words**.
- Keep every option to **at most about 6 words** so the player can read and move on fast.
- One idea per question. Answerable in under 60 seconds without a calculator unless the numbers are simple.
- No trick wording, no double negatives, no "all/none of the above".
- `why`: one or two short sentences that teach, not just repeat the answer.

## Day 9 syllabus deck

Write every quiz directly yourself after reading the sources. No script may
generate questions, distractors, answers or explanations. The completed deck has
46 topic quizzes and 48 derivation checkpoints. Preserve them on feature updates.
Use auto-reveal and the existing answer inputs. Do not add model-paper Remember
checks to this syllabus deck. The general authoring rules below apply to new topics.
Definition recall uses the definition card's own body rather than extra question
cards. Its eight-word check and learner confirmation are not automatic grading
and do not count as scored quiz answers. See 08-definition-recall.md.

## Per topic

- For general syllabus topics: 3–5 questions at the end, mixing types: at least one `mcq`, and one `fill` or
  `number` when the topic has a key word or a calculation.
- In a `derivation`, 4 `ask` checkpoints asking **only about the next step** (what the next line is, or why it is true).

For physics model-paper practice, follow `06-match-and-tools.md` instead of the
general mixed-question rule: append exactly three unique word-only fill-in-the-blank
OMR `mcq` cards after each Remember (`key`) card. Each uses `practice: "remember-word"`,
one `____`, four word choices, a correct index, `time: 45`, and a helpful `why`.
No formula or numeric answer choices, repeated rubric questions or inline review panels.

Set `meta.autoRevealQuestions: true`: the app reveals a question when the student
scrolls to its centred card. Do not write "tap to reveal" instructions. Countdown
seconds are real seconds even with a faster custom match clock. Mark original
prose-only `question` cards with `textAnswer: true` so the student can type locally;
omit it for equations, calculations, diagrams and graphs.

## mcq

- 3 or 4 options (at most about 6 words each), similar length, all plausible. Only one is right.
- `answer` = 0-based index of the right option. Vary its position across questions.
- Options may contain inline maths: `"\\(5\\ \\text{m/s}^2\\)"`.

## fill

- The blank is one word or a short term. List every acceptable spelling with `|`:
  `"answer": "zero|0|nil"`.

## number

- Choose numbers that give a clean answer (integers or one decimal place).
- `answer` is a number; give `unit` separately; set `tolerance` for decimals (e.g. 0.05).

## time

- 45 s for recall, 60 s default, 90 s for a short calculation. Never more than 120.
