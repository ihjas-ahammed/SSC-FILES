# Optics Module 1 — Geometrical Optics

You are making a study deck for the Study Match app.
The student is in high school in India. English is their second language.
Use short sentences. Use simple, common words. If you must use a hard word
(for example "refraction"), explain it in one plain sentence the first time.
Avoid idioms, jokes and long phrases.

## What to make

You will make two things:

- **Part A: the data.** One file, `study-match/data/data.json`. You write all
  of it yourself.
- **Part B: code changes.** A unified diff (patch file) for the app code and the
  skills. I will apply it myself.

Do not use scripts, generators or loops to write the study content. You may
use scripts to check the JSON and to build the app.

## Sources (read first)

- `source/syllabus.pdf`: the Optics syllabus. Module I is on printed pages
  106–107 (PDF pages 2–3). Items 1–4 are this deck's scope.
- `source/units/unit-1…unit-4*.pdf`: the textbook pages for items 1–4. They are
  cut from Ghatak, *Optics*, Book 1, chapters 3 and 4.
- `source/map.md`: which unit covers which book section, with page numbers.

Use only these sources. Do not use other chapters.

## Scope: Module I, items 1–4

1. Laws of reflection and refraction from Fermat's principle (Unit 1, §§3.1–3.2).
2. Reflection and refraction at a single spherical surface (Unit 2, §§4.2–4.3).
3. The thin lens, principal foci and focal length (Unit 3, §§4.4–4.5).
4. The Newton formula and lateral magnification (Unit 4, §§4.6–4.7).

Section 4.1 is not in any unit file. Do not invent it. Write a note in the
sheet's `source` field that it is missing.

Do not go into interference, diffraction, polarisation or the lab work.

## Timetable (the user fills these in)

- Study-day date: `[TO FILL]`
- Session minutes for Optics Module 1: `[TO FILL]`
- Minutes for each topic: `[TO FILL]`

Until these are filled, keep `meta.date` as `""` and `meta.sessions` as `[]`.

## Part A: the data rules

**Cards.** Follow `skills/01-schema.md`. Start each new idea with a plain
explanation: what it is, a picture in words, and an example. Then the technical
definition.

**Glossary.** Define hard words in the glossary. Keep definitions short and plain.

**Quiz questions (the OMR-style ones).** Make them short so the player can move on fast:
- The question is one line, at most about 15 words.
- Each option is at most about 6 words.
- Use 3 or 4 options. Only one is right.
- Write the `why` as one or two short sentences.

**Derivations.** Make one `derivation` card for each derived result.
- Do **not** make separate cards for the route, the steps or the full page.
  The whole derivation plays on one card, after the student flips it.
- Give the derivation a `setup` picture (an SVG, as in `skills/03-svg-art.md`).
  It is shown on the same screen as the equations. For example, draw the
  triangle that the derivation uses, with its sides labelled.
- Ask questions only about the **next step**. A question asks what the next line
  is, or why the next line is true. Do not ask about steps far away.
- Keep each `note` to one short sentence.

**Pictures.** Use the optics rules in `skills/03-svg-art.md`: ray diagrams for
Fermat paths, refraction at a surface, and thin-lens ray tracing. Label the sign
convention you use.

**Settings.** Keep `inlineChecks` false, `autoRevealQuestions` true and
`definitionChecks` true. Use `skills/08-definition-recall.md` for the short
definition card rules.

## Part B: code changes (give a diff)

I will ask for four changes. Give one unified diff for all of them.

**a. The maths animation (MathFlow).**
- The board must sit in the same place every time. Right now its position is random.
- When a line has many terms, the text must not get too small. Shrink it only
  to a readable minimum, then wrap the line at a sensible point.
- Break long lines at a `=`, `+` or `−` sign. Never break inside a term or a fraction.
- Use colours that help learning:
  - they must be readable in light and dark mode;
  - they must work for colour-blind readers (do not rely on red and green alone);
  - the same colour must always mean the same thing. For example: given values,
    the step being done, and the final result.

**b. Pictures on the maths canvas.**
- If a derivation has a `setup` SVG, draw it on the same board as the equations,
  next to the current line.
- The picture and the equations must be on one screen with no scrolling needed
  on a phone (about 720 × 1520 pixels).
- When a step uses a part of the picture (a side, an angle, a ray), highlight that part.

**c. The derivation happens after the flip, on one card.**
- Remove the separate route, derive, page and rebuild cards for derivations.
- Flipping the concept card starts the derivation on that same card.
- Keep the phases, the playback controls, the decision questions and the
  "Practise again" behaviour. Keep the `ask` checkpoints.
- Keep existing card IDs where you can, so saved progress is not lost.
- Improve the design of the derivation card: clear title, a phase bar, a
  readable equation area, a visible setup picture, and simple controls.

**d. Shorter quiz questions and step questions.**
- Change the question style rules in `skills/04-questions.md` so questions are
  short (see the quiz rules above).
- Change `skills/01-schema.md` and `skills/02-derivations.md` to match the new
  single-card derivation, the `setup` field and "ask only about the next step".

**Files to change.** Each file is given in full in `code/` and in `skills/`:
- `code/study-match/src/components/02-mathflow.js` (a, b, c)
- `code/study-match/src/components/03-render.js` (c: remove the four-card split)
- `code/study-match/src/components/04-shelf.js` (c: the outline and card list)
- `code/study-match/src/styles/07-mathflow.css` (a, b, c: layout and colours)
- `code/study-match/src/styles/05-cards.css` (c: derivation card design)
- `skills/01-schema.md`, `skills/02-derivations.md`, `skills/04-questions.md` (d)

Rules for the diff:
- Use paths that start at the `optics-module-1` folder, like this:
  `--- a/study-match/src/components/03-render.js` and
  `+++ b/study-match/src/components/03-render.js`.
- Change only what the four requests need. Do not reformat other code.
- Add no new packages and no new network calls.
- The diff must apply cleanly with `patch -p1` from the `optics-module-1` folder.

## Part C: what to send back

1. The full `study-match/data/data.json`. Check that it is valid JSON and that
   `python3 build.py --check --strict` passes (warnings count as failures here).
2. The diff (Part B) in one file, `changes.diff`.
3. A short list in plain English:
   - what you changed for a, b, c and d;
   - anything you could not do, and why.

## Keep these working

Auto-reveal quizzes, the real-second timers, the calculator, custom halves,
breaks with Skip, Pause/Resume, the locked cards during a match, and the
saved progress. Card IDs for existing cards must stay the same.

## Message to send with the files

Give the model:
- all files in `skills/`;
- `source/syllabus.pdf` and the four unit PDFs;
- all files in `code/`;
- this prompt.

Then say:

"Read every file in `skills/` and `code/` before you write anything. First, make
a short plan in plain words. Then write the data. Then write the diff. Keep the
language simple."
