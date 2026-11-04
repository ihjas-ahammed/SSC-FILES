# Optics verification run — prompt

You are checking and fixing the Optics study deck for the Study Match app.
The deck is for an Indian high school student (CU-FYUGP BSc Physics Honours,
Semester V, PHY5B08 Optics). English is the student's second language.

You have **no file system and no shell**. You cannot edit files, run the build,
run any script, or touch git. You work only from the zip contents that were
given to you in this chat. You **propose** edits; the owner applies them.
Never deploy.

Read this whole file before you start. Then reply in the format in
`verify/OUTPUT-FORMAT.md`: two fenced blocks in chat, the report and the JSON
list of changes.

## 1. What is in this package

| Path | What it is |
|---|---|
| `study-match/data/data.json` | **The deck under review.** Read it. Propose edits; do not write them. |
| `study-match/build.py`, `build.sh`, `src/` | Not in this zip. You cannot run the build. Check the JSON by reading (see step 3). |
| `study-match/skills/` | Authoring rules: `01-schema.md` (card schema), `02-derivations.md`, `03-svg-art.md`, `04-questions.md`, `05-checklist.md`, `07-plain-words-and-glossary.md`, `08-definition-recall.md`. Follow them when you add or change content. |
| `source/syllabus.pdf` (+ `syllabus.txt`, text extracted for you) | The official CU-FYUGP syllabus for Optics. Ground truth for scope. |
| `source/units/*.pdf` | Textbook pages cut from Ghatak, *Optics*, for syllabus items 1–22 (one PDF per unit). Ground truth for facts, formulas and sign conventions. |
| `source/map.md` | Unit → book section → page map. |
| `verify/OUTPUT-FORMAT.md` | The report format you must produce. |

Book 2 (Subrahmanyam, Lal & Avadhanulu) is **not** in this package. Items 17–22
cite Book 2 in the syllabus but the units are cut from Ghatak chapter 22.
Check those items against the units, and note any mismatch in your report.

## 2. Scope: the whole Optics syllabus, items 1–22

The earlier deck prompt covered only items 1–4. **This run covers the whole
theory syllabus, items 1–22.** The practicals (Module V) are out of scope for
the data, but say in your report whether any practical content is referenced
anywhere in the data.

| Module | Item | Topic (syllabus wording) | Syllabus book section | Unit file |
|---|---|---|---|---|
| I Fermat | 1 | Laws of reflection and refraction from Fermat's Principle | 3.1, 3.2 | unit-1 |
| I | 2 | Refraction and reflection at a single spherical surface | 4.2–4.3 | unit-2 |
| I | 3 | The thin lens, principal foci and focal length | 4.4–4.5 | unit-3 |
| I | 4 | The Newton formula, lateral magnification | 4.6–4.7 | unit-4 |
| II Interference | 5 | Superposition of two sinusoidal waves | 13.5 | (not in package) |
| II | 6 | Division of wavefront, introduction | 14.1 | (not in package) |
| II | 7 | Interference of light waves | 14.3–14.6 | (not in package) |
| II | 8 | Fresnel's two-mirror and Fresnel's biprism | 14.7–14.8 | (not in package) |
| II | 9 | White light, Lloyd's mirror, phase change on reflection | 14.9–14.12 | (not in package) |
| II | 10 | Division of amplitude, non-reflecting films | 15.1–15.4 | (not in package) |
| II | 11 | Colours of thin films, Newton's rings, Michelson interferometer | 15.8–15.11 | (not in package) |
| III Diffraction | 12 | Single-slit Fraunhofer diffraction | 18.1–18.2 | (not in package) |
| III | 13 | Two-slit Fraunhofer diffraction | 18.6 | (not in package) |
| III | 14 | N-slit Fraunhofer diffraction and grating | 18.7–18.8 | (not in package) |
| III | 15 | Fresnel diffraction, zone plate | 20.1–20.3 | (not in package) |
| III | 16 | Diffraction by straight edge | 20.6 | (not in package) |
| IV Polarisation | 17 | Polarisation, introduction | 22.1 (Book 2 20.1–20.4) | unit-17 |
| IV | 18 | Production of linearly polarised light | 22.3 (Book 2 20.5) | unit-18 |
| IV | 19 | Effects of polariser and analyser (Malus's law) | 22.2 (Book 2 20.6.2–20.6.3) | unit-19 |
| IV | 20 | Double refraction, Huygens' explanation | 22.5 (Book 2 20.8.3) | unit-20 |
| IV | 21 | Wave plates | 22.6 (Book 2 20.9.1) | unit-21 |
| IV | 22 | Production and analysis of different polarised light | 22.7–22.8 (Book 2 20.17–20.20) | unit-22 |

Only items 1–4 and 17–22 have source PDFs in this package. For items 5–16 the
textbook pages are **not** available. Use what the data already says and your
own knowledge of the standard textbook content, and mark every claim you could
not check against a source as `unverified` in the report. Do not invent figures,
numbers or page references.

Items 1–4 use Ghatak sections 3.1–3.2, 4.1–4.7. **Section 4.1 is not in any
unit file.** Do not invent it. Keep the note in the `source` field that says it
is missing.

## 3. Steps (do them in this order)

1. **Read the sources.** Extract the text of every PDF in `source/units/` and
   `source/syllabus.pdf` (`pdftotext -layout`). Read the syllabus module table
   and confirm the table in section 2 above matches the syllabus.
2. **Read the data.** Load `study-match/data/data.json` and list the sections,
   sheets and card IDs you will check.
3. **Structure check by reading.** You cannot run the build. Check the JSON is
   well formed, IDs are unique, and required fields are present. Report what you
   checked in REPORT section 7. Do not claim a build passed.
4. **Syllabus coverage.** For each item 1–22, list the sections, sheets and
   cards that cover it. Mark each item `covered`, `partial` or `missing`.
   Fill every `missing` or `partial` item (add the sheets and cards). Follow
   the authoring rules in `skills/`. Use the unit PDFs as the source for items
   1–4 and 17–22, and mark items 5–16 `unverified` in the source field if no
   PDF is available.
5. **Accuracy and maths.** For each card:
   - check every formula, sign convention, number, unit and definition against
     the source PDF (or `unverified` if no PDF);
   - re-derive each derivation step; check the `ask` questions have the right
     answer index and that the wrong options are wrong;
   - check each `mcq` answer index points to the option that is correct;
   - check the `why` is true and short;
   - check each `note`, `legend` and `tex` field renders (balanced `\(`, `\)`,
     `\[`, `\]`, valid LaTeX).
6. **Understanding (the student test).** Read each card as a high-school student
   with English as a second language would:
   - flag any sentence longer than about 20 words;
   - flag any hard word that is not explained the first time it appears and is
     not in the glossary;
   - flag idioms, jokes and long phrases;
   - check each concept card starts with what it is, a picture in words, and an
     example, before the technical definition (rule in the prompt for the old
     scope; keep it for all of 1–22).
7. **Quiz quality.** Check the OMR-style questions:
   - question at most about 15 words;
   - each option at most about 6 words;
   - 3 or 4 options, exactly one correct;
   - `why` one or two short sentences;
   - no two questions test the same fact in the same sheet.
8. **Derivation cards.** One `derivation` card per derived result, no separate
   route/steps/page cards, a `setup` SVG, questions only about the next step,
   notes one short sentence (see `skills/02-derivations.md`).
9. **PYQ sections** (sections with a `year` field). Check internal consistency
   only: marks match the card, the answer index is right, the question matches
   the answer. The past papers are **not** in this package, so do not claim a
   paper says something you cannot see. Flag any doubt with `needs_user`.
10. **Structure.** Check there are no duplicate card or sheet IDs, no empty
    required fields, no leftover placeholders (`TODO`, `TBD`, `[TO FILL]`,
    `lorem`), and `meta` matches the rules: `inlineChecks` false,
    `autoRevealQuestions` true, `definitionChecks` true, `meta.date` `""`,
    `meta.sessions` `[]` (timetable is still unfilled).
11. **Final read.** Re-read every change you proposed. Confirm each `before`
    text is copied exactly from the data, and each `after` is valid JSON when
    put in the field.

## 4. How to fix

- **Propose a fix** when the source or the rule is clear. Give the card ID, the
  field, the exact `before` text copied from the data, and the full `after`
  text. Keep the `after` valid for that field's format.
- **Locate by card ID, not by array index.** Indexes in the data may not match
  the section or sheet you have in mind. Search for the card ID.
- **Do not change card or sheet IDs** that already exist, so saved progress is
  kept. New items get new IDs with the same prefix style as their neighbours.
- **Flag, do not guess**, when the source disagrees with the data, when a
  source is missing, when the fact is uncertain, or when the fix would change
  the meaning of the textbook. Put those in the report with `needs_user: true`
  and leave the data as it is.
- **Keep the student's language simple.** Replace hard words with plain words
  where the meaning stays the same.
- Every change must have a reason and, where possible, a source reference
  (PDF file name and printed page, for example `unit-3…pdf p.84`).

## 5. Do not

- do not deploy; you have no shell, git or file access;
- do not propose changes to `meta.date` or `meta.sessions` (the owner fills them);
- do not propose app code changes (`src/`, `build.py`); flag them instead;
- do not add content from outside the package sources unless you mark it
  `unverified`;
- do not delete a card to hide a problem; fix it or flag it.

## 6. What to produce

Follow `verify/OUTPUT-FORMAT.md` exactly. Reply in chat with two fenced
blocks, in this order: the report (markdown), then the changes (json). No other
text outside them.

Then stop. Do not start another round until the owner asks.
