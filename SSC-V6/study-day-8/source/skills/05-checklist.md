# 05 — Final checklist (run before sending)

Go through every line. Fix, then send only the JSON.

## JSON
- [ ] Starts with `{` and ends with `}`. Nothing before or after. No code fence.
- [ ] Every backslash in every string is doubled (`\\frac`, `\\(`, `\\alpha`).
- [ ] Every `"` inside an SVG string is written `\"`.
- [ ] No trailing commas. No comments.

## Structure
- [ ] `meta.title` set.
- [ ] Each section has `short` (≤ 12 chars), `title`, 2–5 `sheets`.
- [ ] Each sheet has a unique `id`, a `title`, and a complete study sequence. Syllabus topics target 6–14 cards; model-paper sheets may be longer.
- [ ] Card `type` is one of: `info, math, derivation, mcq, fill, number, scale, fall, question, eval, score, key`.

## Text
- [ ] Inline maths uses `\\( … \\)`, never `$`.
- [ ] Every `\\(` has a matching `\\)`, every `{` a matching `}`.
- [ ] `info.body` ≤ 220 characters, one idea.

## Derivations
- [ ] Each `tex` is one line with exactly one `=`, bare TeX (no `\\(`).
- [ ] First step has no `move`; every later step has one from the move library.
- [ ] `add/subtract/multiply/divide/power` have `by`; `differentiate/integrate` have `wrt`.
- [ ] Each line is the simplified result of exactly one move.
- [ ] Symbols are spelled the same way in every line.
- [ ] 3–6 phases, each starting on some step, listed in `phases` with a `why`.
- [ ] **4** `ask` checkpoints with 4 options and a 0-based `answer`.
- [ ] The derivation starts from a law (loop law, admittance sum, aperture integral), not from the final formula.

## Questions
- [ ] `mcq.answer` is a valid 0-based index; options are distinct.
- [ ] `number.answer` is a JSON number; unit in `unit`.
- [ ] Every scored quiz and derivation checkpoint has a teaching `why`.

## Existing Day 8 course
- [ ] Preserve the existing 14 topics and 143 authored cards; no extra questions or Remember cards.
- [ ] Preserve quiz answers and derivations; only format small maths tags with inline TeX.
- [ ] Keep `meta.inlineChecks: false` and `meta.autoRevealQuestions: true`.
- [ ] Both canonical JSON copies and the root/hosted/dist builds agree.
- [ ] Update `source/prompt.md` and both copies of the skills with these constraints.

## Physics practice papers and runtime (new model papers only)
- [ ] Preserve exam sections, question order, rubric marks and full model answers.
- [ ] `meta.inlineChecks` is false and `meta.autoRevealQuestions` is true.
- [ ] Each Remember card is followed by exactly three unique OMR `mcq` word blanks, each with `practice: "remember-word"`, four word choices, `answer`, `time: 45`, and `why`.
- [ ] No formula/number choices or self-review accordions replace those OMR cards.
- [ ] `textAnswer: true` is only on original questions fully answerable in prose, without equations, calculations or diagrams.
- [ ] Do not add tap-to-reveal instructions; the current OMR card opens on arrival.
- [ ] Optional `match.timing` defaults use a 20–90 minute real half (steps of 5), plus a separately chosen 1–30 minute break. Do not scale question times or deadlines in content.
- [ ] Custom timing has two displayed 45-minute halves, no drinks breaks, real-time break countdowns and explicit resume after the alert.
- [ ] Leave existing maths course data and built pages untouched unless requested.

## Physics content
- [ ] Every topic is checked against the syllabus item (and nothing outside the timetable list is added).
- [ ] Every circuit has a circuit diagram card; every optics experiment has a set-up diagram and a graph.
- [ ] Keep syllabus topics compact; retain a full model-paper question and rubric in the same sheet even when that exceeds 14 cards.

## SVG
- [ ] `viewBox="0 0 260 180"`, only allowed classes, no colours, one amber highlight.

When I run `python build.py`, it prints every problem with its exact location
(e.g. `sections[1].sheets[0].cards[3].steps[2]`). If I paste that output back to you, fix exactly
those fields and send the whole corrected JSON again.
