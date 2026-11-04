# 09 — Clear points (concept cards)

The user wants **clear points, not long descriptions**. Every concept card is a short
title, at most one short sentence, and a list of points.

## Fields
- `points`: 2–6 strings, each one fact, ≤ 140 characters, no full paragraphs.
  Start with the key word in `<b>…</b>` when it helps scanning: `"<b>Optic axis</b>: the one direction with no double refraction."`
  Inline maths uses `\\( … \\)` (backslashes doubled in JSON). HTML allowed: `<b>`, `<sub>`, `<sup>`, `<i>`.
- `body`: optional single sentence (≤ 160 characters). **Required on definition cards**
  (cards with `defines` or a title starting "What is/are"): it is the correct statement the
  learner compares against in definition recall. State the definition only; put everything else in `points`.

## Card shapes
```json
{ "type": "intuition", "term": "optics-m4-optic-axis", "title": "One direction where calcite behaves normally",
  "meaning": "The optic axis is the direction in a crystal along which light is not split in two.",
  "points": ["Send light <b>along</b> the optic axis: one ray comes out.", "Any other direction: two rays, o and e.", "It is a direction, not a single line."] }

{ "type": "info", "label": "02 · §20.10.2 Definition", "title": "What is the optic axis?", "defines": ["optics-m4-optic-axis"],
  "body": "The optic axis is the direction in a doubly refracting crystal along which there is no double refraction.",
  "points": ["In calcite it joins the two blunt corners.", "o- and e-rays travel with equal speed along it.", "Uniaxial crystals have one optic axis; biaxial have two."],
  "tex": "v_o = v_e \\ \\text{along the optic axis}" }

{ "type": "math", "label": "Example", "title": "Quarter-wave plate thickness", "tex": "t = \\frac{\\lambda}{4(\\mu_o - \\mu_e)}",
  "points": ["Calcite: \\(\\mu_o = 1.658\\), \\(\\mu_e = 1.486\\).", "For \\(\\lambda = 589\\) nm: \\(t \\approx 0.86\\ \\mu\\text{m}\\)."] }
```
- `intuition` with `points`: needs `term`, a one-line `meaning`, and `points` (2–4). `art` (SVG string, see 03-svg-art.md) is optional.
- Keep `examples` chips (≤ 3, ≤ 24 chars) if useful.
- Questions (`mcq`, `fill`, `number`) keep their usual fields (04-questions.md); keep `why` to one sentence.

## Rules
- Facts come only from the source pages given to you. Do not add outside material.
- No filler ("It is important to note that…"). One fact per point.
- Use the book's symbols (μ_o, μ_e, θ_B …) and cite equations as "(Eq. 20.x)" only when the book numbers them.
