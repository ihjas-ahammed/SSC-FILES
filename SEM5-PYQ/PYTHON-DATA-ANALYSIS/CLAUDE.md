# Python for Data Analysis (SEC 2, Sem 5, CU-FYUGP BSc Physics Honours)

## Sources
- `syllabus.pdf`: uploaded copy of the CU-FYUGP 2024 syllabus (pages 521–528). Same course as `SSC-V2/SEM5/PHY/PYTHON_FOR_DATA_ANALYSIS.pdf`.
- Modules (marks out of 50 + 5 open-ended): I Python core (12), II Pandas DataFrame (15), III Visualisation (15), IV Data file formats (8), V Open-ended (5).
- Books (from the syllabus): Book 1 Core Python Programming (Nageswara Rao); Book 2 Python Crash Course (Matthes); Book 3 Machine Learning in Data Science using Python (Rao); Book 4 Data Science and ML using Python (Thareja).
- Past papers: none found. Web search (standard mode) returned only notes and other universities' syllabi, not Calicut PYQs. Papers are therefore syllabus-based and tagged by unit, not by `PYQ` year. Replace with real papers if they are found.

## Status
| Module | Topic | Model paper |
|---|---|---|
| 1 | Python core | 4 pp, 24 marks (doubled 12) |
| 2 | Pandas DataFrame | 5 pp, 30 marks |
| 3 | Visualisation | 5 pp, 30 marks |
| 4 | File formats, Jupyter | 3 pp, 16 marks |
| 5 | Open-ended, examples 1–5 | 4 pp, 10 marks |

Prepare files and answer keys are not made yet.

Printable: `python-for-data-analysis-pyq+model-printable.pdf` (10 pp, A4, two columns, two pages per module). Built by `pdf-src/build_printable.py`. Modules 4 and 5 use larger text so both pages are filled.

Delivery: `python-for-data-analysis-sem5-pyq+model.zip` (the 5 phone PDFs + printable) mailed to ihjas.one@gmail.com with quickmail.

## Method (same kit as OPTICS)
- Kit: `pdf-src/` (copied from OPTICS: `render.js`, `style.css`, `katex/`), with a simple `build.py` (no figures).
- Source: `pdf-src/src/m<N>/paper.html`, built with `python3 build.py [N]`, output `../python-data-analysis-module-N-pyq+model.pdf`.
- Each question is tagged with its unit (`U1`–`U19`). A coverage table ends each paper, and every syllabus topic must be the main point of at least one question.

## Decisions
- Marks are doubled per module (`2 × module marks`), matching the optics "twice as many questions" rule. The end-semester pattern is not in the syllabus, so this is a choice, not a verified format.
- Seaborn `distplot` is avoided (deprecated); `histplot`/`kdeplot` are used in the wording instead.
- Module 3 bubble chart and time-series plot were added to existing questions after a coverage check (first draft missed them).

## Known gaps
- No past papers; no answer keys or prepare files yet.
- The syllabus's own CO/PO mapping is not reflected in the paper.
