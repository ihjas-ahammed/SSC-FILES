# Authoring the Optics content

Content is written in Python (`authoring/*.py`) with RAW strings, and `python3 tools/author.py`
turns it into `data/*.js` with every string JSON-escaped. Never edit `data/*.js` by hand.

    python3 tools/author.py          # regenerate data/
    node tools/check_tex.js          # gate: must print 0 errors

## Rules that keep the pool sound

* TeX goes in RAW strings (`r'...'`, `r"..."`, `r'''...'''`), single backslashes: `r'$\frac{1}{f}$'`.
  A non-raw string that contains `\t`, `\n`, `\f`, `\b`, `\r` or `\a` before a letter silently corrupts the TeX
  (`\theta` becomes TAB + `heta`). When in doubt use a raw string.
* Prose is HTML with `$...$` (inline) and `$$...$$` (display) TeX. Paragraphs in `<p>`; lists in `<ul><li>`.
* Never use `<` directly before a letter inside maths without a space: write `$a < b$` (with spaces) or `\lt`.
* Every `tests=[...]` id must exist in `authoring/_concept_index.txt`. Every `sec` must be one of 1.1–1.4, 2.1–2.7,
  3.1–3.5, 4.1–4.6.
* Sign convention of the course: Cartesian; distances from the vertex, positive along the light.
* Ids are permanent (progress is stored against them). Append; never renumber.
* Do not invent data: numbers in a question, its solution and its answer must agree, and NAT answers must be
  computed (run python) rather than guessed.

## Helpers (defined by `tools/author.py`, no import needed)

    W(id, sec, marks, title, source, prompt, tests, approach, solution, trap='')      written exercise (Level 3)
    O(id, sec, type, prompt, options, answer, solution, tested, trap, tests, twist=None,
      marks=1, neg=None, time=60)                                                   objective question
    P(id, year, exam, qno, marks, sec, tests, title, prompt, approach, solution, trap='')   past paper (Level 4)

`O` types: `'MCQ'` (answer `'B'`), `'MSQ'` (answer `['A','C']`), `'NAT'` (options `None`,
answer `{'value': 3.2, 'tol': 0.05, 'dp': 2}`). `twist=(question, answer)` is a short changed-version follow-up.
