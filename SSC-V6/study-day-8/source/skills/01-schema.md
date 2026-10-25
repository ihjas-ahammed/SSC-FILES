# 01 — data.json schema (every field, every card type)

Day 8 preservation rule: keep the existing syllabus deck and its existing questions.
The model-paper Remember/OMR additions below are examples for new model papers,
not a requirement to add cards to Day 8.

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
| `meta.inlineChecks` | no | Set to `false` to omit inline self-review panels. New model-paper courses may append authored Remember checks; Day 8 keeps its existing quizzes without additions. |
| `meta.autoRevealQuestions` | no | `true` for physics: reveal OMR cards automatically when centred, with no reveal button. Their timers use real time and pause when off the current card. |
| `meta.home` / `meta.opponent` | no | Team names. Default `"Focus"` vs `"Time"`. |
| `match.periodEnds` | no | Default `[25, 45, 70, 90]` (match minutes where each stretch ends). |
| `match.breaks` | no | Default `[5, 10, 5]` (minutes of break between stretches). |
| `match.timing` | no | Optional defaults: `{ "mode": "custom", "halfMinutes": 30, "halfTimeMinutes": 10 }`. Mode is `standard` or `custom`; real half duration is 20–90 in steps of 5, and half-time break is 1–30 integer minutes. Custom mode uses displayed ends `[45,90]`, no drinks breaks, and scales only the match clock. |
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

### `info` — one concept
```json
{ "type": "info", "label": "01", "title": "Ionic bond",
  "body": "One atom transfers electrons to another, creating oppositely charged ions that attract.",
  "examples": ["NaCl", "MgO"],
  "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>" }
```
- `body`: 1–2 sentences, ≤ 220 characters. One idea per card.
- `examples`: 0–3 short chips (≤ 24 chars each).
- `art`: optional SVG (rules in `03-svg-art.md`). Instead of `art` you may give `"tex": "E = mc^2"` to show one formula large.

### `math` — a formula or worked example shown large
```json
{ "type": "math", "label": "Example", "title": "Worked example",
  "tex": "v^2 = 0 + 2(2)(25) = 100 \\Rightarrow v = 10\\ \\text{m/s}",
  "body": "From rest, \\(a = 2\\ \\text{m/s}^2\\) over \\(s = 25\\) m." }
```

### `derivation` — a derived result (expands into 4 cards automatically)
See `02-derivations.md`. Shape:
```json
{ "type": "derivation", "title": "Bond energy, step by step",
  "legend": "\\(k\\) Coulomb constant, \\(r\\) separation.",
  "phases": [ { "name": "Model", "why": "energy = attraction + repulsion" } ],
  "steps": [ { "tex": "...", "phase": "Model", "note": "..." },
             { "tex": "...", "move": { "type": "differentiate", "wrt": "r" }, "note": "...", "ask": { ... } } ] }
```

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
