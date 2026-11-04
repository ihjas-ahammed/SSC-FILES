# 05 — Final checklist (run before sending)

Go through every line. Fix, then send only the JSON.

## Direct authorship
- [ ] Every study explanation, derivation, example, diagram and quiz was written
  directly by the author, not produced or populated by a script or generator.
- [ ] Scripts were restricted to source extraction, validation, mathematical
  verification and app builds; finished JSON mirrors are verbatim copies.
- [ ] All 13 timetable items are covered without losing their important details.

## JSON
- [ ] Starts with `{` and ends with `}`. Nothing before or after. No code fence.
- [ ] Every backslash in every string is doubled (`\\frac`, `\\(`, `\\alpha`).
- [ ] Every `"` inside an SVG string is written `\"`.
- [ ] No trailing commas. No comments.

## Structure
- [ ] `meta.title` set.
- [ ] Each section has `short` (≤ 12 chars), `title`, 2–5 `sheets`.
- [ ] Each sheet has a unique `id`, a `title`, and a complete study sequence. Syllabus topics target 6–14 cards; model-paper sheets may be longer.
- [ ] Card `type` is one of: `info, intuition, math, derivation, mcq, fill, number, scale, fall, question, eval, score, key`.

## Text
- [ ] Inline maths uses `\\( … \\)`, never `$`.
- [ ] Every `\\(` has a matching `\\)`, every `{` a matching `}`.
- [ ] `info.body` ≤ 220 characters, one idea; introductions directly answer “What is it?”
- [ ] New terms have authored glossary definitions, not only lists of properties.
- [ ] No definition opens on hover or focus alone; click/tap or keyboard activation opens it.
- [ ] A card's own defined terms and aliases stay unlinked; prerequisites may link.
- [ ] State is explained simply, and quantum algebra has consistent matrix examples.
- [ ] Intuition cards supply a mental picture, example and bridge to the precise definition.
- [ ] Definition recall follows 08-definition-recall.md: eight words, same-card
  correct statement, confirm after reveal, Retry clears, “I know this” skips.
- [ ] No keyword/synonym grading or online lookup; .must-include stays hidden.
- [ ] Only matches lock cards, independently per sheet; drafts and completion
  survive reload, pause/breaks block actions, and maths/graphics remain intact.
- [ ] Read doc/tda.html as well as the briefing: tap-to-flip front/back, editable
  back, visible dimmed locks, first-lock scroll limit and off-centre flip-back.
- [ ] Moving left from an unfinished definition is blocked until unlock; after
  confirmation it works. Existing progress does not make blank answers read-only.

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

## Completed Day 9 course
- [ ] 5 sections, 15 topics, 195 authored cards (19 intuition cards, 8 matrix examples), 12 derivations and 46 topic quizzes.
- [ ] Exactly 4 decision checkpoints per derivation (48 total).
- [ ] Topic allocations sum to 144 minutes for QM and 168 minutes for Solids.
- [ ] Use the Semester V FYUGP syllabi and assigned Zettili/Puri & Babbar sections.
- [ ] Keep 1D/3D formulas, available/occupied DOS and finite/continuum sums distinct.
- [ ] No model-paper questions, rubrics or extra Remember cards.
- [ ] Keep `meta.inlineChecks: false` and `meta.autoRevealQuestions: true`.
- [ ] Set `meta.definitionChecks: true`; preserve all existing cards and quizzes.
- [ ] Both canonical JSON copies and the root/hosted/dist builds agree.
- [ ] Source audit and prompt reflect Day 9; both skills copies agree.

## Physics practice papers and runtime (new model papers only)
- [ ] Preserve exam sections, question order, rubric marks and full model answers.
- [ ] `meta.inlineChecks` is false and `meta.autoRevealQuestions` is true.
- [ ] Each Remember card is followed by exactly three unique OMR `mcq` word blanks, each with `practice: "remember-word"`, four word choices, `answer`, `time: 45`, and `why`.
- [ ] No formula/number choices or self-review accordions replace those OMR cards.
- [ ] `textAnswer: true` is only on original questions fully answerable in prose, without equations, calculations or diagrams.
- [ ] Do not add tap-to-reveal instructions; the current OMR card opens on arrival.
- [ ] Optional `match.timing` defaults use a 20–90 minute real half (steps of 5), plus a separately chosen 1–30 minute break. Do not scale question times or deadlines in content.
- [ ] Custom timing has two displayed 45-minute halves. With at least 45 real minutes per half, hydration breaks occur at displayed 25 and 70; shorter halves omit them.
- [ ] Hydration and half-time durations are separate settings, with real-time countdowns. Skip break resumes immediately; completed breaks offer explicit resume.
- [ ] The notch is the starting view. Pause freezes match/quiz clocks and derivations, and survives reload.
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
