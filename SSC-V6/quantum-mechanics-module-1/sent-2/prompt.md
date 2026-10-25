# Quantum Mechanics I (MAT/PHY, Sem 5) — Module II: Time-Independent Schrödinger Equation

You are making the study deck for Module II of Quantum Mechanics I (FYUGP BSc Physics Honours, Calicut University, Semester V). The student is an undergraduate in India, and English is their second language. Use short sentences and simple words. Explain any hard word in one plain sentence the first time.

Read these first, in this order: `prompt.md` (this file), then the skills (`00-START-HERE.md` to `08-definition-recall.md`).

## Scope

Module II, Units 6–8 (syllabus page 112):
6. Stationary states: the time-independent Schrödinger equation, time-independence of expectation values, a definite value of the total energy, the general solution as a linear combination of separable solutions, probability amplitudes.
7. The infinite square well.
8. The free particle: wave packet, phase and group velocities.

Source: `qm-module-2-textbook.pdf` (Book 1 — Griffiths, Introduction to Quantum Mechanics, Chapter 2, Sections 2.1, 2.2 and 2.4). Use the book's own numbers for equations, examples and problems. Do not write material from outside Sections 2.1, 2.2 and 2.4.

The PDF also contains pages from Chapters 3 and 4. Those are NOT in this module. Do not use them.

Section 2.3 (the harmonic oscillator) and Section 2.5 (the delta function) are NOT in this module. Do not write them.

Module I (Sections 1.1–1.6) is already done. Do not repeat its glossary terms as new entries. When a Module II card needs a Module I idea (for example the wave function, normalization, expectation value, momentum operator), name it in the text and refer to the equation by its number from Chapter 1.

Module III and IV are NOT in this job. Do not write them.

## What you return

One file: `data-qm-m2.json`, in the format of `00-START-HERE.md` and `01-schema.md` (`{ "glossary": [...], "sections": [...] }`). Every `id` starts with `qm-m2-`.

Write every card yourself. Do not use scripts to write study content.

## Structure

- One `section` for Module II (`short`: "Module II").
- One `sheet` per unit (units 6, 7, 8), each with 6–14 cards. Unit 6 is the largest.
- Each sheet has an `id`, `title`, `icon`, and `source` (book section, e.g. "Griffiths §2.1").
- Card types as in `01-schema.md`:
  - `info` for definitions and key results (one recall card each).
  - `intuition` for the picture behind a result.
  - `derivation` for worked steps and every example from the text (one step per line, with `ask` questions at the key steps). Do not write an example as a long paragraph.
  - `mcq`, `fill`, `number` for quiz questions.
- Glossary: one term per defined concept, id `qm-m2-…`, defined in one or two sentences.

## Numbering and language

- Write `Example 2.1`, `Equation (2.7)`, `Section 2.2`, `Problem 2.5`. Never `Ex.`.
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
- Every `id` starts with `qm-m2-` and is unique.
- Every definition and key result in Sections 2.1, 2.2 and 2.4 is covered.
- Every worked example in Sections 2.1, 2.2 and 2.4 is a derivation card.
- No `Ex.` or `N.M` exercise references remain.
- No content from Chapter 3, Chapter 4, Section 2.3 or Section 2.5 appears in the file.
