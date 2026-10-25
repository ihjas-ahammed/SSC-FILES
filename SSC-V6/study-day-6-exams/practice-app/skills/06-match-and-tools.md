# 06 — Match timing and study tools

These are app behaviours. Write content for them; do not reimplement them in JSON,
SVG, question text or model answers.

## Physics practice-paper sequence

Preserve paper sections and question order. Each question is one topic sheet:

1. `question`: the original exam prompt.
2. `eval` cards: the marking rubric, with option text `t` and marks `m`.
3. `score`: the exam-mark summary.
4. `info`, `math`, `derivation` and figure cards: the model answer.
5. `key`: the Remember points.
6. Exactly three unique `mcq` cards based on those Remember points. Each prompt
   contains one `____` for a missing **word**, four word choices, a correct index,
   `time: 45`, a teaching `why`, and `practice: "remember-word"`.

For physics set `meta.inlineChecks: false` and `meta.autoRevealQuestions: true`.
Do not add inline checkboxes, self-review accordions, repeated rubric prompts,
or numerical/formula blanks to the three Remember OMR cards.

Use `textAnswer: true` on the original `question` when its complete answer can be
written in words without equations, calculations, graphs or diagrams. Leave it
unset otherwise. Symbols in the question do not automatically rule it out:
explaining bonding energy verbally is suitable; deriving a bond-length formula
is not. The app gives suitable cards a multiline draft box and saves typing on
the device. Students still swipe to the marking cards to assess their work.

## OMR arrival and scoring

With `autoRevealQuestions` enabled, `mcq`, `fill` and `number` cards reveal when
centred in an open topic. There is no tap-to-reveal control. Unvisited cards do
not start timers. Timers pause off the current card, with the match centre open,
while the document is hidden, and during a break. Returning resumes the same
countdown; answering or timing out locks the card. Completed answers survive
reload without being scored again.

Three right answers in a row score for Focus; every third wrong answer or timeout
scores for Time. Remember OMR cards count toward quiz totals, topic completion
and coverage. Draft prose is self-marked with `eval` cards, not auto-graded.

## Custom match clock

In Match centre before kick-off, the student can enable **Custom halves**:

- Real duration of each half: a slider, 20–90 minutes, snapping every 5 minutes.
- Half-time break: a separate slider, 1–30 real minutes, snapping every minute.
- Two study periods only, ending at displayed match minutes 45 and 90.
- No drinks breaks in custom mode.
- Match clock rate = 45 / chosen real minutes per half. At 20 real minutes,
  each half still displays 45 match minutes and the clock runs at 2.25x.
- Topic deadlines and added time use displayed match minutes.
- Half-time countdowns and question-answer timers use real time, without scaling.
- Settings are fixed during a running match and saved with that match. Reloading
  preserves its schedule and clock rate. A new/reset match uses saved preferences.
- Breaks use an on-screen alert and block study until the countdown finishes;
  the student explicitly resumes afterward. Question timers and derivations pause.

Standard mode retains the original one-to-one clock and drinks breaks.
An optional content default is:

```json
"match": {
  "periodEnds": [25, 45, 70, 90],
  "breaks": [5, 10, 5],
  "timing": { "mode": "custom", "halfMinutes": 30, "halfTimeMinutes": 10 }
}
```

The runtime handles the two-period schedule in custom mode; do not rewrite
`periodEnds`, deadlines, or question times to imitate an accelerated clock.

## Maths and calculator

Inline tags support MathJax `\\( ... \\)`; prefer explicit delimiters to bare
notation. The bundled scientific calculator opens with `=` or the toolbar button,
uses RAD/DEG modes, and has `?` help. Numerical answer boxes can open it with `=`
and receive a real scalar result through **Use answer**. Do not add a custom
calculator or instructional controls to authored card content.

## Scope

These physics-specific card changes apply to Materials Science and Electrodynamics.
Leave the existing maths course data and built pages untouched unless the user
explicitly expands the scope. Shared app changes must preserve legacy behaviour
when these metadata options are absent.
