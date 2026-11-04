# 01 — data.json schema (every field, every card type)

Day 9 is a new syllabus deck for Quantum Mechanics I and Properties of Solids.
Author data directly as required by 00-START-HERE.md. Preserve the 168 original
cards, 19 intuition cards and 8 matrix examples during feature updates. Model-paper additions below
are examples for explicitly requested model papers and do not apply to this deck.

## The golden rule of JSON + TeX

Inside JSON strings **every backslash is written twice**.

| You mean (TeX) | You write in JSON |
|---|---|
| `\frac{a}{b}` | `"\\frac{a}{b}"` |
| `\( x^2 \)` | `"\\( x^2 \\)"` |
| `\alpha`, `\nabla`, `\theta` | `"\\alpha"`, `"\\nabla"`, `"\\theta"` |

A single backslash breaks the file or silently eats letters (`"\frac"` becomes a form-feed + `rac`).

Other JSON rules: double quotes only, no trailing commas, no comments, no `NaN`.
Inside text use `\u2019` or a plain `'` for apostrophes; never an unescaped `"`.

## Maths inside normal text

Any text field (title, body, q, options, why, note, legend) may contain inline maths written as
`\\( ... \\)`. Never use `$...$`. Keep inline maths short.

The fields `tex`, `move.by`, `start` are **bare TeX** (no `\\( \\)` around them).

---

## Top level

| field | required | meaning |
|---|---|---|
| `meta.title` | yes | Name of this course. Also keeps its progress separate from other courses. |
| `meta.subject` | no | Free text. |
| `meta.inlineChecks` | no | Set to `false` to omit inline self-review panels. This syllabus deck uses authored topic quizzes; Remember checks apply only to model papers. |
| `meta.autoRevealQuestions` | no | `true` for physics: reveal OMR cards automatically when centred, with no reveal button. Their timers use real time and pause when off the current card. |
| `meta.definitionChecks` | no | `true` enables trusted eight-word recall on definition info cards and independent per-sheet progression during matches. Default off for existing courses. See 08-definition-recall.md. |
| `meta.home` / `meta.opponent` | no | Team names. Default `"Focus"` vs `"Time"`. |
| `match.periodEnds` | no | Default `[25, 45, 70, 90]` (match minutes where each stretch ends). |
| `match.breaks` | no | Default `[5, 10, 5]` (minutes of break between stretches). |
| `match.timing` | no | Optional defaults: `{ "mode": "custom", "halfMinutes": 30, "halfTimeMinutes": 10, "hydrationMinutes": 5 }`. Real half duration is 20–90 in steps of 5; break durations are 1–30 integer real minutes. Halves end at displayed 45 and 90. If each half lasts at least 45 real minutes, hydration breaks occur at displayed 25 and 70. Only the match clock scales. |
| `sections` | yes | Array of sections. |

## Section

| field | required | meaning |
|---|---|---|
| `short` | yes | 2–12 characters. Shown on the nav chip. e.g. `"Optics"` |
| `title` | yes | Full name. |
| `sheets` | yes | 2–5 topics. |

## Sheet (a topic)

| field | required | meaning |
|---|---|---|
| `id` | yes | Unique, lowercase, hyphens. e.g. `"optics-mirror-formula"`. Never reuse. |
| `title` | yes | Short topic name (≤ 40 chars). |
| `icon` | no | One of: `atom, curve, motion, graph, wave, lens, flask, cell, sigma, book, bolt`. |
| `due` | no | Deadline in match minutes (5–90). Leave out to let the app spread deadlines. |
| `cards` | yes | About 6–14 cards for a syllabus topic. Model-paper sheets can be longer to include the question, full rubric, model answer, Remember card and three OMR checks. |

---

## Card types

Every card has `"type"`. Optional `"label"` is the small tag at the top (e.g. `"01"`, `"Quiz · OMR"`).

On a `question` card, `"textAnswer": true` adds a multiline answer box with a
locally saved draft. Use it for questions that can be answered in words without
equations or diagrams. It does not grade the draft; students use the marking cards.

For physics Remember checks, use ordinary `mcq` cards after the `key` card with
`"practice": "remember-word"`. Write exactly one `____` in each `q`, four word
choices, a valid `answer`, `time: 45` and `why`. Author exactly three unique checks
per Remember card. They count toward match scoring, coverage and completion.
See `06-match-and-tools.md` for the full physics practice-paper sequence.

Optional `"checks"` overrides the three automatic understanding checks on a card.
Supply exactly three objects, each with `"q"` (question) and `"a"` (reference answer).
Both support inline maths. Checks are self-assessed and do not alter exam marks.
On a `derivation`, these checks are shared by its expanded route, player and page cards.

### `question`, `eval`, `score`, `key` — practice-paper cards

```json
{ "type": "question", "label": "Question 1 · 3 marks", "title": "Question 1",
  "q": "Distinguish materials science from materials engineering.", "textAnswer": true }
```

The prompt is `q`; `textAnswer` is an optional boolean for prose-only answers.
Optional `art` follows the same SVG rules as `info`. A `hint` can replace the
default instruction. Do not enable a prose box on questions requiring diagrams,
graphs, equations or calculations.

```json
{ "type": "eval", "label": "Mark yourself · up to 1 mark",
  "q": "Did you link materials science to structure-property relationships?",
  "options": [
    { "t": "Relationship between structure and properties explained", "m": 1 },
    { "t": "Structure mentioned without its link to properties", "m": 0.5 },
    { "t": "Missing or incorrect", "m": 0 }
  ],
  "why": "Materials science seeks to understand structure-property relationships." }
```

`eval.options` has 2–5 objects with `t` (text) and `m` (marks), including a zero
mark option. Maxima across the rubric must add up to the exam question's marks.
This records the student's self-assessment, not automatic grading of their draft.

```json
{ "type": "score", "title": "Question 1: your score" }
```

The app calculates the score from the sheet's `eval` cards. Do not hard-code totals.

```json
{ "type": "key", "label": "Key points", "title": "Remember",
  "points": ["Materials science studies structure-property relationships.",
             "Materials engineering designs structure for required properties."] }
```

`points` is a non-empty list. Place the Remember card after the model answer,
then append the three word-completion OMR cards described below.

### `intuition` — plain-words introduction with required Canvas2D diagram (or `three` for meridional ray)

Place an `intuition` card immediately before a new concept's technical `info` card;
see `07-plain-words-and-glossary.md`. Every `intuition` card **must** include an
`art` Canvas2D drawing list (drawn according to `03-svg-art.md`), or a `three` 3D scene object on the meridional-ray card only, followed by `picture` as a short
one-line caption explaining what to look at in the diagram.
```json
{ "type": "intuition", "term": "paraxial-approximation",
  "title": "Why only rays close to the axis focus sharply",
  "meaning": "The paraxial approximation keeps only rays that make very small angles with the axis.",
  "art": [
    { "op": "line", "x1": 16, "y1": 105, "x2": 244, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
    { "op": "polyline", "points": [[28, 105], [118, 56], [226, 105]], "role": "hk", "width": 2.6, "name": "OSI" },
    { "op": "arc", "cx": 28, "cy": 105, "r": 32, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" }
  ],
  "picture": "Look at the small angle arc α near O where height h over distance x gives the angle.",
  "example": "At 0.1 rad, sin(0.1) and tan(0.1) are both very close to 0.1.",
  "bridge": "Under this small-angle rule, all paraxial rays from O meet at one image point I." }
```

### `info` — one concept

Introduce the concept with a direct answer to “What is it?” before its properties.
Place a plain-language intuition card before a new topic's technical introduction;
see 07-plain-words-and-glossary.md. The top-level glossary array supplies authored
click/tap definitions. Intuition cards have separate term-based IDs. Mark a card's
defined terms with a defines array of glossary IDs so those terms remain unlinked
on that card; intuition.term automatically supplies its own exclusion. New worked
examples use a unique uid so they do not shift existing cards' numeric IDs.
With meta.definitionChecks enabled, definition info cards (cards with `defines` or a title starting with “What is/are”) use the same authored
body as their correct statement and render their `art` Canvas2D drawing list on the flip back. Non-definition info cards render `art` on their front face.
Keep the authored definition body and existing `tex` formula on the flip card's front; writing and the recall diagram belong on
its back. Locked cards remain in the row with their original dimensions.
```json
{ "type": "info", "label": "01", "title": "Ionic bond",
  "body": "One atom transfers electrons to another, creating oppositely charged ions that attract.",
  "examples": ["NaCl", "MgO"],
  "art": [
    { "op": "circle", "cx": 80, "cy": 95, "r": 45, "role": "s", "name": "Na" },
    { "op": "circle", "cx": 180, "cy": 95, "r": 45, "role": "f", "name": "Cl" }
  ] }
```
- `body`: 1–2 sentences, ≤ 220 characters. One idea per card.
- `examples`: 0–3 short chips (≤ 24 chars each).
- `art`: Canvas2D drawing list (rules in `03-svg-art.md`). Every definition-recall `info` card has an `art` list shown on its flip back; non-definition `info` cards show `art` or `"tex"` on their front.
- `three`: 3D scene object (`axis`, `plane`, `surfaces`, `points`, `meridionalRay`, `skewRay`), used **only** on the meridional-ray card.

### `math` — a formula or worked example shown large
```json
{ "type": "math", "label": "Example", "title": "Worked example",
  "tex": "v^2 = 0 + 2(2)(25) = 100 \\Rightarrow v = 10\\ \\text{m/s}",
  "body": "From rest, \\(a = 2\\ \\text{m/s}^2\\) over \\(s = 25\\) m." }
```

### `derivation` — a derived result on a single flip card
See `02-derivations.md`. Shape:
```json
{ "type": "derivation", "title": "Bond energy, step by step",
  "legend": "\\(k\\) Coulomb constant, \\(r\\) separation.",
  "setup": [
    { "op": "line", "x1": 40, "y1": 90, "x2": 220, "y2": 90, "role": "lk", "width": 2, "name": "sep" }
  ],
  "phases": [ { "name": "Model", "why": "energy = attraction + repulsion" } ],
  "steps": [ { "tex": "...", "phase": "Model", "focus": ["sep"], "note": "..." },
             { "tex": "...", "move": { "type": "differentiate", "wrt": "r" }, "focus": ["sep"], "note": "...", "ask": { ... } } ] }
```
- Give each highlightable ray, side, angle arc or label in `setup` a `"name": "partName"` field.
- Each step lists the parts it uses in `"focus": ["name1", "name2"]` so the diagram highlights them at the same time.
- Write parallel steps (such as two surfaces of a lens) one after the other as separate steps with their own phase labels, never side by side.
- An **All steps** summary view lists every step in order (step number, equation and move) after the final step and via the top button.

### `mcq` — multiple choice
```json
{ "type": "mcq", "label": "Quiz · OMR", "time": 60,
  "q": "Which bond holds two water molecules together?",
  "options": ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
  "answer": 2,
  "why": "Hydrogen bonds form between an H on O, N or F and a lone pair on a neighbour." }
```
- `answer` is the **0-based index** of the right option (first option = 0). The app shuffles options itself.
- 3–4 options, all plausible, no "all of the above".

For each physics Remember card, author three unique cards in this form:

```json
{ "type": "mcq", "practice": "remember-word", "label": "Remember · word check 1 of 3", "time": 45,
  "q": "Materials science studies relationships between structure and ____.",
  "options": ["properties", "price", "colour", "volume"], "answer": 0,
  "why": "Materials science explains how structure determines material properties." }
```

The blank is exactly `____`; choices are words, without equations or numbers.
The app reveals each card automatically when centred if `autoRevealQuestions` is true.

### `fill` — type a word
```json
{ "type": "fill", "label": "Quiz · Fill in", "time": 60,
  "q": "A ______ bond forms when two nonmetal atoms share electrons.",
  "answer": "covalent|covalent bond", "why": "..." }
```
- `answer`: accepted answers separated by `|`. Case and trailing full stop are ignored.

### `number` — type a number
```json
{ "type": "number", "label": "Quiz · Number", "time": 60,
  "q": "From rest with \\(a = 3\\ \\text{m/s}^2\\), how fast after 24 m?",
  "answer": 12, "tolerance": 0, "unit": "m/s", "why": "..." }
```
- `answer` is a JSON number (not a string). `tolerance` is the allowed ± difference (use 0.01–0.1 for decimals).

### `scale` — interactive spectrum (optional)
```json
{ "type": "scale", "label": "Try it", "title": "Bond-o-meter", "body": "...",
  "min": 0, "max": 3.3,
  "zones": [ { "upTo": 0.4, "name": "nonpolar" }, { "upTo": 1.7, "name": "polar" }, { "upTo": 3.3, "name": "ionic" } ],
  "chips": [ { "label": "H–Cl", "value": 0.96 }, { "label": "Na–Cl", "value": 2.23 } ],
  "readout": "{label} · ΔEN {value} → {zone}" }
```

### `fall` — drop a ball under different g (optional, physics only)
```json
{ "type": "fall", "label": "Try it", "title": "Drop from 20 m", "body": "...", "height": 20,
  "chips": [ { "label": "Earth", "value": 9.8 }, { "label": "Moon", "value": 1.6 } ],
  "readout": "{label} · t = {t} s" }
```

`time` on quizzes: whole real seconds, 30–120 (default 60; Remember recall uses 45).
When the timer runs out the answer counts as wrong. Custom match clock scaling
does not change these seconds.
