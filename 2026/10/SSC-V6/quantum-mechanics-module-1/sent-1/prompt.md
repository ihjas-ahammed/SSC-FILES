# Quantum Mechanics I (MAT/PHY, Sem 5) — Module I: The Wave Function

You are making the study deck for Module I of Quantum Mechanics I (FYUGP BSc Physics Honours, Calicut University, Semester V). The student is an undergraduate in India, and English is their second language. Use short sentences and simple words. Explain any hard word in one plain sentence the first time.

Read these first, in this order: `prompt.md` (this file), then the skills (`00-START-HERE.md` to `08-definition-recall.md`).

## Scope

Module I, Units 1–5 (syllabus pages 112–113):
1. The Schrödinger equation and the statistical interpretation.
2. Probability: discrete variables, continuous variables.
3. Normalization.
4. Momentum.
5. The uncertainty principle.

Source: `qm-module-1-textbook.pdf` (Book 1 — Griffiths, Introduction to Quantum Mechanics, Chapter 1, Sections 1.1–1.6). Use the book's own numbers for equations, examples and problems. Do not write material from outside Sections 1.1–1.6.

Module II, III and IV are NOT in this job. Do not write them.

## What you return

One file: `data-qm-m1.json`, in the format of `00-START-HERE.md` and `01-schema.md` (`{ "glossary": [...], "sections": [...] }`). Every `id` starts with `qm-m1-`.

Write every card yourself. Do not use scripts to write study content.

## Structure

- One `section` for Module I (`short`: "Module I").
- One `sheet` per unit (units 1–5), each with 6–14 cards.
- Each sheet has an `id`, `title`, `icon`, and `source` (book section, e.g. "Griffiths §1.1").
- Card types as in `01-schema.md`:
  - `info` for definitions and key results (one recall card each).
  - `intuition` for the picture behind a result.
  - `derivation` for worked steps and every example from the text (one step per line, with `ask` questions at the key steps). Do not write an example as a long paragraph.
  - `mcq`, `fill`, `number` for quiz questions.
- Glossary: one term per defined concept, id `qm-m1-…`, defined in one or two sentences.

## Numbering and language

- Write `Example 1.2`, `Equation (1.5)`, `Section 1.3`, `Problem 1.1`. Never `Ex.`.
- Exercises and problems: `Problem N (Section S)`, not `N.M`.
- Copy equations from the PDF text. Check every TeX line against the page. Do not type it from memory.
- A missing item is stated in the sheet source line. Do not write content for it from memory.

## Build rules (must pass `--strict` when the deck is built)

- A derivation has at least 2 steps. The first step has no `move`. Every later step has one.
- Each step's `tex` has exactly one top-level `=`.
- Use `\\text{...} = \\text{no}` to close a yes/no example.
- Phases named in `phases` must appear as `phase` on some step.
- At most 16 steps per derivation.

## Check before you return

- The file is valid JSON.
- Every `id` starts with `qm-m1-` and is unique.
- Every definition and key result in Sections 1.1–1.6 is covered.
- Every worked example in Sections 1.1–1.6 is a derivation card.
- No `Ex.` or `N.M` exercise references remain.
