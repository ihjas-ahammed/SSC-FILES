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
- [ ] Each sheet has a unique `id`, a `title`, 6–14 `cards`.
- [ ] Card `type` is one of: `info, math, derivation, mcq, fill, number, scale, fall`.

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
- [ ] Every question has a `why`.

## Physics content
- [ ] Every topic is checked against the syllabus item (and nothing outside the timetable list is added).
- [ ] Every circuit has a circuit diagram card; every optics experiment has a set-up diagram and a graph.
- [ ] No sheet has more than about 14 cards; split it instead.

## SVG
- [ ] `viewBox="0 0 260 180"`, only allowed classes, no colours, one amber highlight.

When I run `python build.py`, it prints every problem with its exact location
(e.g. `sections[1].sheets[0].cards[3].steps[2]`). If I paste that output back to you, fix exactly
those fields and send the whole corrected JSON again.
