# 06 — Match timing and study tools

These are app behaviours. Write content for them; do not reimplement them in JSON,
SVG, question text or model answers.

## Day 9: a syllabus deck

Day 9 Maths covers Complex Analysis I and Convex Optimization. Author every item
directly yourself, without a data-generation script, following 00-START-HERE.md.
The completed course has 199 cards across 14 topics; preserve its quizzes and
derivations during feature updates. Do not insert model-paper questions, rubrics
or Remember checks. Use meta.inlineChecks false and meta.autoRevealQuestions true.
Keep fill and number answer inputs. The two 174-minute subject
allocations are real study guidance, separate from the configurable match clock.

## Physics practice-paper sequence (only for new model papers)

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
not start timers. Arrival does not force input focus or open the phone keyboard.
Timers pause off the current card, with the match centre open,
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
- Two halves, ending at displayed match minutes 45 and 90; hydration can split
  each half into two study stretches.
- With real halves of at least 45 minutes, add hydration breaks at displayed match
  minutes 25 and 70. With shorter halves, omit hydration breaks. Use the exact
  name Hydration break, distinct from Half-time.
- Hydration duration is separately adjustable from 1–30 real minutes before kick-off.
- Match clock rate = 45 / chosen real minutes per half. At 20 real minutes,
  each half still displays 45 match minutes and the clock runs at 2.25x.
- Topic deadlines and added time use displayed match minutes.
- Half-time countdowns and question-answer timers use real time, without scaling.
- Settings are fixed during a running match and saved with that match. Reloading
  preserves its schedule and clock rate. A new/reset match uses saved preferences.
- Breaks use an on-screen alert. The student may choose Skip break at any time
  to resume the next stretch immediately, or wait for the countdown and explicitly
  resume afterward. Both hydration and half-time breaks are skippable. Question
  timers and derivations pause while the break is active.

Standard mode retains the one-to-one clock, with hydration breaks at 25 and 70.

## Focused start and pause

With meta.definitionChecks enabled, only match mode locks cards. Each sheet
unlocks independently in order; reading, quizzes and derivations retain their
own completion rules. Definition recall follows 08-definition-recall.md. Pause
and breaks disable its actions; self-confirmations and skips do not score shots.

The notch layout is the default from initial load, including before kick-off.
Its control button reveals the full header; its Match centre button is always
accessible. During play, Pause match freezes the match clock, quiz countdowns
and derivation playback. Resume shifts the time origin so paused time never
counts. Paused state survives reload. Match centre also offers Pause/Resume.
An optional content default is:

```json
"match": {
  "periodEnds": [25, 45, 70, 90],
  "breaks": [5, 10, 5],
  "timing": { "mode": "custom", "halfMinutes": 30, "halfTimeMinutes": 10 }
}
```

The runtime handles the two-half schedule and optional hydration in custom mode; do not rewrite
`periodEnds`, deadlines, or question times to imitate an accelerated clock.

## Maths and calculator

Inline tags support MathJax `\\( ... \\)`; prefer explicit delimiters to bare
notation. The bundled scientific calculator opens with `=` or the toolbar button,
uses RAD/DEG modes, and has `?` help. Numerical answer boxes can open it with `=`
and receive a real scalar result through **Use answer**. Do not add a custom
calculator or instructional controls to authored card content.

## Scope

The runtime features apply to this independent Day 9 Maths app.
The additional model-paper card sequence applies only when explicitly requested.
Leave the physics and earlier maths courses untouched. Shared app changes must preserve legacy behaviour
when these metadata options are absent.
