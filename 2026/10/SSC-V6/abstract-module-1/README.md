# Abstract Algebra I · Study Match (MAT5CJ302, Modules I to IV)

Study Match deck for Abstract Algebra I, Modules I to IV. Module V is not cut yet.
The data starts empty. It is generated per module and merged with `update_module1.py`.

## Layout

- `study-match/`: app source, `build.py`, `update_module1.py` (merge script), blank `data/data.json`.
- `study-match/src/index.html`: start page template (module dropdown, topic ticks).
- `skills/`: authoring skills. Copies in `study-match/skills/` must match.
- `doc/`: flip-card and recall reference.
- `source/`: syllabus, page map and unit PDFs (`module-1` to `module-4`), all from
  `STUDY-PLAN-V5/sources/sem5/maths/abstract-algebra-1/`.

## Build

From `study-match/`:

    python3 update_module1.py data/data.json data/data-abs-m1.json data/data-abs-m1-updates.json   # per module
    python3 build.py --strict      # validate and build dist/ (study-match.html, app/, index.html)

Topic ids start with `abs-m1-` to `abs-m4-`. The start page groups topics by module.
