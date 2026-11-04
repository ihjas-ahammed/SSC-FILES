# Abstract Algebra I verification run — prompt

You are checking and fixing the Abstract Algebra I study deck for the Study Match
app. The course is MAT5CJ302 (B.Sc. Mathematics Honours, CU-FYUGP, Semester V).
The student is an undergraduate in India. English is the student's second
language.

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
| `study-match/data/data.json` | **The deck under review** (four module sections, I–IV). Read it. Propose edits; do not write them. |
| `study-match/build.py`, `build.sh`, `src/` | Not in this zip. You cannot run the build. Check the JSON by reading (see step 3). |
| `study-match/skills/` | Authoring rules: `01-schema.md`, `02-derivations.md`, `03-svg-art.md`, `04-questions.md`, `05-checklist.md`, `07-plain-words-and-glossary.md`, `08-definition-recall.md`. Follow them for any change. |
| `source/syllabus.pdf` (+ `syllabus.txt`, text extracted for you) | The official syllabus. Ground truth for scope. |
| `source/module-1..4/*.pdf` | Textbook pages cut from Fraleigh, *A First Course in Abstract Algebra* (8th ed.), one PDF per unit pair. Ground truth for definitions, theorems, proofs and worked examples. |
| `source/map.md` | Unit → book section → page map, and the 7th-ed → 8th-ed numbering note. |
| `verify/OUTPUT-FORMAT.md` | The report format you must produce. |

**Edition note.** The syllabus numbers sections from the 7th edition. The PDFs
are the 8th edition. `source/map.md` says which 8th-edition section matches each
syllabus unit. Match by content, not by number, and note any mismatch.

## 2. Scope: the whole syllabus, units 1–22, plus Module V

| Module | Unit | Syllabus content (7th ed.) | Source PDF |
|---|---|---|---|
| I Binary operations, groups | 1 | Binary operations, 2.1–2.10 | module-1/unit-1-4 |
| I | 2 | Binary operations, 2.11–2.25 | module-1/unit-1-4 |
| I | 3 | Isomorphic binary structures, 3.1–3.11 | module-1/unit-1-4 |
| I | 4 | Isomorphic binary structures, 3.12–3.17 | module-1/unit-1-4 |
| I | 5 | Groups, 4.1–4.14 | module-1/unit-5-6 |
| I | 6 | Elementary properties of groups, finite groups and group tables, 4.15 on | module-1/unit-5-6 |
| II Subgroups, cyclic groups, permutations | 7 | Subgroups, 5.1–5.16 | module-2/unit-7-8 |
| II | 8 | Cyclic subgroups, 5.17–5.23 | module-2/unit-7-8 |
| II | 9 | Cyclic groups, 6.1–6.9 (proof of 6.3 optional) | module-2/unit-9-10 |
| II | 10 | Cyclic groups, 6.10–6.17 (proof of 6.14 optional) | module-2/unit-9-10 |
| II | 11 | Groups of permutations, up to 8.6 | module-2/unit-11-12 |
| II | 12 | Groups of permutations, 8.7–8.18 | module-2/unit-11-12 |
| III Orbits, cosets, Lagrange | 13 | Orbits, cycles and alternating groups, up to 9.10 | module-3/unit-13-14 |
| III | 14 | Orbits, cycles and alternating groups, 9.11–9.21 (proof 2 of 9.15 optional) | module-3/unit-13-14 |
| III | 15 | Cosets and the theorem of Lagrange, up to 10.9 | module-3/unit-15-16 |
| III | 16 | Cosets and the theorem of Lagrange, 10.10–10.14 | module-3/unit-15-16 |
| IV Homomorphisms, rings, fields | 17 | Homomorphisms, 13.1–13.10 | module-4/unit-17-18 |
| IV | 18 | Homomorphisms, 13.11–13.20 | module-4/unit-17-18 |
| IV | 19 | Rings and fields, 18.1–18.13 | module-4/unit-19-20 |
| IV | 20 | Rings and fields, 18.14–18.18 | module-4/unit-19-20 |
| IV | 21 | Integral domains, 19.1–19.8 | module-4/unit-21-22 |
| IV | 22 | Integral domains, 19.9–19.15 | module-4/unit-21-22 |
| V Open-ended (12 hrs) | — | Generating sets in groups; factor groups; the field of quotients of an integral domain | **no PDF; not cut** |

Module V is **not in the data**. The owner has not decided its scope. Do not
write Module V content. Record it in the coverage table as `missing (owner
decision)` and put a `needs_user` flag on it.

Syllabus Module II's line reads "homomorphisms and groups of permutations". In
this course homomorphisms are in Module IV. Note the wording and keep Module II
as the groups-of-permutations units 11–12.

The syllabus lists a Text book (Fraleigh, 7th ed.) and references. Use the
textbook PDFs as the source. Do not use the other references unless you mark a
claim `unverified`.

## 3. Known open items (check them, do not assume they are settled)

These come from the project notes. Confirm each one against the data and report
it. Fix it only if the fix is clear from the source.

- Plus Two statuses marked OPEN in the module `pre-math` pages need Kerala Plus
  Two text. Not in this package. Flag, do not write them.
- Module 1 notes do not include named exercises. A rule was added in Module 2
  that notes should. Decide whether Module 1 needs revising; flag the choice.
- Module 3: the 8th-ed §9 is *Finitely Generated Abelian Groups*, not orbits and
  alternating groups. The orbit/alternating material is 8th-ed §4 (4.8–4.15) and
  §8 (8.19–8.25). Check the data and the map agree with that.
- Module 5 is not started (section 2).

## 4. Steps (do them in this order)

1. **Read the sources.** Extract the text of every PDF in `source/module-*/` and
   `source/syllabus.pdf` with `pdftotext -layout`. Confirm the table in section 2
   matches the syllabus text.
2. **Read the data.** Load `study-match/data/data.json` and list the sections,
   sheets and card IDs you will check.
3. **Structure check by reading.** You cannot run the build. Check the JSON is
   well formed, IDs are unique, and required fields are present. Report what you
   checked in REPORT section 7. Do not claim a build passed.
4. **Syllabus coverage.** For units 1–22 list the sections, sheets and cards that
   cover each one. Mark each `covered`, `partial` or `missing`. Fill every
   `missing` or `partial` unit (add sheets and cards) using the authoring rules in
   `skills/` and the source PDF. Module V: do not fill; flag only (section 2).
5. **Mathematical accuracy.** For each card:
   - check every definition, theorem, statement and example against the source
     PDF. A theorem must be stated with its hypotheses;
   - check every proof step and worked computation (group tables, orders, cosets,
     permutation products, cycle decompositions, index counts);
   - check each `mcq` answer index is the correct option, and each wrong option
     is actually wrong;
   - check each `ask` checkpoint: the right answer index, and the reason is true;
   - check the `why` is true and short;
   - check each `note`, `legend` and `tex` field renders (balanced `\(`, `\)`,
     `\[`, `\]`, valid LaTeX). Check the permutation notation and product order
     (right-to-left, as in the book) is used consistently.
6. **Understanding (the student test).** Read each card as an undergraduate with
   English as a second language would:
   - flag any sentence longer than about 20 words;
   - flag any hard word not explained the first time it appears and not in the
     glossary (for example *coset*, *homomorphism*, *kernel*, *integral domain*);
   - flag idioms, jokes and long phrases;
   - check each concept card goes from plain idea → picture or example →
     technical statement. Proofs go on derivation cards (see step 8).
7. **Quiz quality.** Check the OMR-style questions:
   - question at most about 15 words;
   - each option at most about 6 words;
   - 3 or 4 options, exactly one correct;
   - `why` one or two short sentences;
   - no two questions test the same fact in the same sheet.
8. **Derivation / proof cards.** One `derivation` card per proof or derived result.
   No separate route, step or page cards. Questions only about the next step.
   A `setup` picture where it helps (group table, subgroup lattice, cycle
   diagram, coset picture). Notes one short sentence (see `skills/02-derivations.md`).
9. **Structure.** Check for duplicate card or sheet IDs, empty required fields,
   placeholders (`TODO`, `TBD`, `[TO FILL]`, `lorem`), and `meta` matches the
   rules: `inlineChecks` false, `autoRevealQuestions` true, `definitionChecks`
   true, `meta.date` `""`, `meta.sessions` `[]` (timetable not filled).
10. **Final read.** Re-read every change you proposed. Confirm each `before`
    text is copied exactly from the data, and each `after` is valid JSON when
    put in the field.

## 5. How to fix

- **Propose a fix** when the source or the rule is clear. Give the card ID, the
  field, the exact `before` text copied from the data, and the full `after`
  text. Keep the `after` valid for that field's format.
- **Locate by card ID, not by array index.** Indexes in the data may not match
  the section or sheet you have in mind. Search for the card ID.
- **Do not change card or sheet IDs** that exist, so saved progress is kept.
  New items get IDs in the same style as their neighbours.
- **Flag, do not guess**, when the source disagrees with the data, when the
  source is missing, when the fact is uncertain, or when the fix needs an
  owner decision (for example Module V, Plus Two text). Use `needs_user: true`
  and leave the data as it is.
- **Keep the student's language simple.** Replace hard words with plain words
  where the meaning stays the same.
- Every change has a reason and, where possible, a source reference (PDF file
  and printed page, for example `unit-7-8…pdf p.70`).

## 6. Do not

- do not deploy; you have no shell, git or file access;
- do not propose changes to `meta.date` or `meta.sessions`;
- do not write Module V content;
- do not propose app code changes (`src/`, `build.py`); flag them instead;
- do not add content from outside the package unless you mark it `unverified`;
- do not delete a card to hide a problem; fix it or flag it.

## 7. What to produce

Follow `verify/OUTPUT-FORMAT.md` exactly. Reply in chat with two fenced
blocks, in this order: the report (markdown), then the changes (json). No other
text outside them.

Then stop. Do not start another round until the owner asks.
