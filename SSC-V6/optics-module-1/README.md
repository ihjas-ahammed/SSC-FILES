# Optics Module 1 — Geometrical Optics (template)

Study Match deck template for Optics Module I, items 1–4 (CU-FYUGP Semester V).
The educational data is empty; generate it with a model using the prompt.

## Contents

- `prompt.md`: the authoring prompt for this module (scope, rules, timetable fields).
- `skills/`: all authoring skills. Give every file to the model.
- `source/syllabus.pdf`: Optics syllabus (Module I on printed pp.106–107).
- `source/units/`: the four Ghatak unit PDFs for items 1–4.
- `source/map.md`: unit → book section → PDF page map.
- `doc/`: flip-card and definition-recall reference used by the skills.
- `study-match/`: the app source, builder, and a blank `data/data.json`.

## Build

From `study-match/`:

    python3 build.py --check --strict     # validate
    python3 build.py --strict             # build dist/study-match.html and dist/app/

The blank template fails validation with `sections: need at least one section`.
That is expected until the generated `data/data.json` is in place.

## Before generating

Fill the timetable fields in `prompt.md` (study-day date, session minutes, topic
minutes). Section 4.1 of Ghatak is not in any unit file; the prompt tells the model
not to invent it.
