# Exam skeleton → filled Exam page + Match Mode

Copy everything below the line into a new chat. Attach **exam-skeleton.html** and your paper (HTML, PDF, images, or text). Attach the marking scheme or model answers too, if you have them.
Fill in **Inputs** first.

---

## Inputs

- **Subject / module:** `[e.g. Optics, Module 1]`
- **Paper rules:** `[e.g. 70 marks, 90 minutes. Section A: 10 questions × 3 marks, answer any 8. Section B: 8 × 6, answer any 6. Section C: 2 × 10, answer any 1]`
- **Paper shape:** `[Same as the skeleton (20 questions, sections A/B/C)? yes / no. If no, describe the difference.]`

## What to do

Take **exam-skeleton.html** and fill its slots. Every slot is either a `[bracketed placeholder]` or a block marked `[FILL]`. Do not change any other code: no renamed ids, classes, storage keys, functions or engine logic. The engine is finished and tested. Your job is content only.

Keep every question, valuation-scheme checkpoint, solution and key term from my material **word for word**. Do not invent questions, marks, answers or formulas. If the material has no marking scheme, build the checkpoints from the model answers only, and say what is missing.

### Slots to fill

1. **QUESTIONS** (`[FILL] QUESTIONS`): one object per question, in paper order, with `id`, `section`, `marks`, `text` (String.raw, maths in `\(…\)`), `subquestions` (one per checkpoint: `step`, `prompt`, and three `options` with `type` full / partial / none), `solution` and `keyterms` (exactly 3).
   - The marks of a question's full options add up to its marks.
   - Keep the section structure of the skeleton unless the paper differs (see below).
2. **CONCEPTS** (`[FILL] CONCEPTS`): for each question id 1–20, one object:
   - `title`, `caption`.
   - `scene`: one SVG drawing of an everyday example. Use `EV.svg`, the viewBox 0 0 320 180, theme classes (`k`, `d`, `s1`, `s2`, `pt`, `fa`, `fw`…) and the numbered badges `EV.b(1…3)`. Unicode text only, no TeX inside SVG. Labels must stay inside the viewBox and must not overlap.
   - `items`: three entries with `k` = 0, 1, 2 (the three key terms). Each has `eg` (everyday example, one or two plain sentences), `map` (which badge is the concept, and why) and `c` (the check).
   - Check types: `mcq` (4 options, the right one first, plausible distractors), `num` (`a`, `tol`, `u`), `fill` / `word` (`a` is a list of accepted spellings; `show` is how the answer reads). Mix the types across the 20 questions. Don't make all three items the same type.
   - Every check must target a misconception and must not be guessable. Give a short `why`.
3. **PAPER, TOTAL_MARKS, BLOCKS** (`[FILL] PAPER`, `[FILL] TOTAL_MARKS`): the section rules, total marks and the five Match Mode blocks (finish-by minutes that add up to the match length). If the paper differs from the skeleton's shape, change these together with QUESTIONS and CONCEPTS.
4. **GROUPS and SKILLS** (`[FILL] GROUPS and SKILLS`): about 30 skills the paper tests, each with a readable name, a player name (a short label, not your name), its group, and the question numbers that need it. Every question should be covered by at least one skill.
5. **QUIZ** (`[FILL] QUIZ`): 10 skill-check questions. `o[0]` is the right answer, shown shuffled. `skills` lists skill ids from SKILLS.
6. **Labels**: the subject name, module and paper subtitle wherever a `[bracket]` label appears.

### What the code already does (do not reimplement)

- **Paper:** write, then mark against the scheme. Best-N counting, extra answers marked "Extra, not counted", the Section C lock and its switch button, reset keeps the theme, result with "where marks slipped".
- **Understanding checks:** one judged attempt per check, shown after the answer is marked "Written". Typed answers are judged leniently (case, spaces, unicode minus, subscripts, θ, ∞). "I don't know" counts as wrong.
- **Match Mode** (double-tap the top bar):
  - The skill check rates the skills High / Medium / Low, then squads are picked 4-3-3.
  - Three slips in a row give Time FC a goal. A slip is a wrong check, "I don't know", or a scheme checkpoint marked "none".
  - Block goals are automatic. Focus FC scores when a block is done in time, Time FC when the minute passes first.
  - At the end of each section the credit sheet lists the skills that helped. The owner of the most ticked skills takes that section's goals. A tie is a random draw, and that is the only random step.
  - Hydration breaks stop the clock. Full time waits for any open credit.

### Rules for the content

- **Everyday pictures:** every drawing should show the real idea, not decoration. Badges 1–3 match the three cards below the drawing, and each card has an "Everyday" line and an "In the picture" line.
- **Maths:** `\(…\)` in HTML and text, never inside SVG `<text>`.
- **Accessibility:** a descriptive `aria-label` on each SVG.

## Before you hand it over

Open the filled page in a headless browser at 390px and 1366px, in light and dark:
- no MathJax errors, and no raw `\(`, `$` or `\command` visible
- no SVG label overflowing or overlapping another label
- no horizontal scroll
- write → mark → reload → still there; best-N counting; the Section C lock; reset keeps the theme
- Match Mode: skill check, squads, kick-off, a slip goal, a block goal, a break stopping and restarting the clock, full time

Then send me the HTML file, a short list of what's inside, and anything you had to assume (for example the time allowed or the section rules).
