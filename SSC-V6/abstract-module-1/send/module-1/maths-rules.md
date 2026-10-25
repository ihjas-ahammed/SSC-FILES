# Maths rules (override the physics rules in the skills)

The skills were written for physics. For Abstract Algebra I, use these rules instead.
Where a skill and this file disagree, this file wins.

## What is different

- No Remember cards, no word-check cards, no model-paper rubrics, no OMR practice papers.
- No physics-only card types or rules: no `fall`, no `scale`, no circuit or optics
  experiment rules. The JSXGraph and SVG rules are optional here: draw a picture only
  when it helps (for example a symmetry of a triangle, or a map between two sets).
- Maths in TeX with `\( … \)` and `\[ … \]`. Use `math` cards for group tables and
  long displays.

## How to write the content

- **Definitions** are `info` cards with the textbook's wording and a clear name. Each
  definition card is a recall card (see `08-definition-recall.md`).
- **Theorems and corollaries** are `info` cards: statement first, then one short line
  on why it matters.
- **Proofs.** Write a proof as a `derivation` only when it is an algebraic chain of
  equalities (for example `(ab)^{-1} = b^{-1}a^{-1}`). Each step is one line of TeX with
  one top-level `=`. Give every step a `move` (use `"type": "apply"` and say which
  axiom, definition or theorem is used in the `note`). For longer logical proofs, use
  an `info` card with numbered steps instead.
- **Examples** are `math` cards (the worked example) with the result stated.
- **Exercises the textbook refers to** are included, with their printed numbers.
- **Quiz questions:** `mcq` for "which is true", `fill` for a term or a symbol
  (for example "the identity element is written ___"), `number` for an order or an index.
  "True or false" questions start with "State whether true or false:".

## Structure

- One `section` per module: `Module I`, `Module II`, `Module III`, `Module IV`.
- One `sheet` per unit from the map (`source/map.md`). Sheets have 6 to 14 cards.
- Each sheet's `source` gives the textbook section (8th edition numbers from the map,
  with the 7th-edition syllabus name in brackets).
- The book is Fraleigh, *A First Course in Abstract Algebra*, 8th ed. Use the numbers
  and wording of the unit PDFs. Where a unit PDF and this deck differ, the book wins.
- Write in your own words for the student. Keep the book's numbers.
- Write new quiz questions in the textbook's style. Do not copy questions from anywhere.
- Glossary terms: `abs-m<N>-…` ids, one per term, defined in one or two sentences.

## Settings

- `meta` as in `data.json`: `inlineChecks` false, `autoRevealQuestions` true,
  `definitionChecks` true.
- No `sessions` minutes (the study-day timetable is not given yet).
