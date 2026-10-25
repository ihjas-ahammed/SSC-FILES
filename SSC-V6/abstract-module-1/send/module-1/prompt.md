# Abstract Algebra I (MAT5CJ302) — Modules I to IV for Study Match

You are making the study deck for Abstract Algebra I, Modules I to IV, in the Study
Match app. The student is an undergraduate in India, and English is their second
language. Use short sentences and simple words. Explain any hard word in one plain
sentence the first time.

Read these first, in this order: `prompt.md` (this file), `maths-rules.md`, then the
skills (`00-START-HERE.md` to `08-definition-recall.md`, `example-minimal.json`).
Where a skill says physics, `maths-rules.md` wins.

All files are at the top level. `FILES.md` maps each file.

## What you return

For EACH module, in turn (Module I, then II, III, IV), return:

1. **`data-abs-m<N>.json`**: a NEW file with only that module's content, in the same
   format as `data.json`: `{ "glossary": [...], "sections": [...] }`. Full file, valid JSON.
   - Module I → `data-abs-m1.json`, Module II → `data-abs-m2.json`, Module III → `data-abs-m3.json`,
     Module IV → `data-abs-m4.json`.
   - Every `id` (sections' sheets and glossary terms) starts with `abs-m<N>-`.

Do not run the merge script yourself. I run it: it merges each file into `data.json`
in the order I..IV, and checks that ids do not clash.

Return one module at a time, so I can check each file before the next. Start with
Module I. After each module, give a short note in plain English: the sheets, the card
count, and anything you could not do.

Do not write study content with scripts. Write it yourself.

## Scope

Use the syllabus (`syllabus.pdf`), the page map (`map.md`) and the unit PDFs.
The textbook is Fraleigh, *A First Course in Abstract Algebra*, 8th edition. Its
section numbers are in `map.md`. The unit PDFs are the book pages for each unit, so take
the wording and the exercise numbers from them.

### Module I — binary operations, isomorphic structures, groups (items 1–6)
- Units 1–4: binary operations; isomorphic binary structures (8th §1; PDF `unit-1-4-…`).
- Units 5–6: groups; elementary properties of groups (8th §2; PDF `unit-5-6-…`).

### Module II — subgroups, cyclic groups, permutations (items 7–12)
- Units 7–8: subgroups, cyclic subgroups (8th §5, with 5.24–5.26; PDF `unit-7-8-…`).
- Units 9–10: cyclic groups (8th §6, with 6.18–6.21; PDF `unit-9-10-…`).
- Units 11–12: groups of permutations (8th §8, 8.1–8.18; PDF `unit-11-12-…`).

### Module III — orbits, cosets, Lagrange (items 13–16)
- Units 13–14: orbits, cycles, alternating groups (8th §4, 4.8–4.15, and §8, 8.19–8.25; PDF `unit-13-14-…`).
- Units 15–16: cosets, Lagrange's theorem (8th §10, 10.1–10.20; PDF `unit-15-16-…`).

### Module IV — homomorphisms, rings, fields, integral domains (items 17–22)
- Units 17–18: homomorphisms, isomorphism theorems (8th §16; PDF `unit-17-18-…`).
- Units 19–20: rings, fields (8th §22; PDF `unit-19-20-…`).
- Units 21–22: integral domains (8th §23; PDF `unit-21-22-…`).

Module V (factor groups, generating sets, field of quotients) is NOT in this job.
Do not write it.

**Edition note.** The syllabus uses the 7th edition numbers. The book on disk is the
8th edition. Match units by content, as `map.md` does. Put the 8th-edition section in
each sheet's `source`, and the 7th-edition syllabus name in brackets.

## Structure per module

- One `section` per module (`short`: "Module I", "Module II", ...).
- One `sheet` per unit in the map (units 1–4 may be one sheet, or two if the content
  splits cleanly; keep sheets to 6–14 cards).
- Each sheet has an `id` (`abs-m<N>-…`), a `title`, an `icon`, and a `source`.
- Each card has a `type` as in `01-schema.md`. Use `info` for definitions and theorems
  (each one is a recall card), `math` for worked examples and group tables,
  `derivation` for algebra chains (one move per step), and `mcq`, `fill`, `number`
  for quiz questions.
- Glossary: one term per defined concept, id `abs-m<N>-…`, defined in one or two sentences.
  Terms used before they are defined in the sheet need a glossary entry.

## Content rules

- Keep the textbook's definitions, theorems and exercise numbers. Do not drop content.
- Write in your own words for the student. Keep the book's numbers.
- Write new quiz questions in the textbook's style. Do not copy questions from anywhere.
- Quiz questions: one line, at most about 15 words. Options: at most about 6 words.
  Exactly one correct option. Give a short `why`.
- Proofs: write the algebra as `derivation` steps (one top-level `=` per step). For
  logical proofs, use an `info` card with numbered steps.

## Check before you return each module

- The file is valid JSON.
- Every `id` starts with `abs-m<N>-` and is unique within the file.
- Every sheet has `source`, and every card has a valid type.
- Every `derivation` step has exactly one top-level `=`.
- Every definition and theorem from the units in that module is covered.
- No physics-only content (no `fall`, `scale`, optics or circuit rules).
