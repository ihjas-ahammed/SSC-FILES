# 04 — Questions

Questions are the match: right answers build streaks (3 in a row = a goal for Focus), every
3rd wrong answer is a goal for Time. They must be fair, quick and unambiguous.

## Style

- Ask the concept directly. No stories, no everyday-life wrappers, no pictures in questions.
  Good: "At the top of a projectile path, which velocity component is zero?"
  Bad: "Riya throws a cricket ball to her friend at the park…"
- One idea per question. Answerable in under 60 seconds without a calculator unless the numbers are simple.
- No trick wording, no double negatives, no "all/none of the above".
- `why`: one or two sentences that teach, not just repeat the answer.

## Per topic

- 3–5 questions at the end of each topic, mixing types: at least one `mcq`, and one `fill` or
  `number` when the topic has a key word or a calculation.
- In a `derivation`, 2–4 `ask` checkpoints on real decision points ("what next?"), not on trivial algebra.

## mcq

- 4 options, similar length, all plausible. Wrong options are typical mistakes, not jokes.
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
