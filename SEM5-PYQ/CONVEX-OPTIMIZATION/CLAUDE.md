# Convex Optimization (Sem 5): session record

Last updated 2026-10-16. Read this file first, then the process file of the task at hand.

## Sources
- Syllabus: `SSC-FILES/SSC-V2/SEM5/MATH/MAT5EJ3032CourseTitleCONVEXOPT_CONVEX_OPTIMIZATION.pdf` (4 pages, printed pp. 152–155, "Page 153–156 of 454"). Course code **MAT5EJ303 (2)**, Elective (Specialisation: Data Science), Semester V, 4 credits, 60 h, pre-requisites Linear Algebra and Multivariable Calculus. The copy in this project is `source/syllabus.html` (transcribed from the page images; the text layer dropped unit 6 and garbled the correlation table). The PDF stays in `SSC-V2/` because the repository's other syllabi live there; the project holds no syllabus PDF.
- Text book 1 (syllabus): K. G. Binmore, *Mathematical Analysis: A straightforward approach*, 2nd ed., CUP 1982. On disk: `SSC-FILES/2026/CONVEX OPTIMIZATION/Mathematical Analysis A Straightforward Approach Second Edition (K.G. Binmore) (z-library.sk, 1lib.sk, z-lib.sk).pdf`. Chapter 19, pp. 190–231, covers Module I.
- Text book 2 (syllabus): Stephen Boyd and Lieven Vandenberghe, *Convex Optimization*, CUP 2004. On disk: `SSC-FILES/2026/CONVEX OPTIMIZATION/Convex Optimization (Stephen Boyd, Lieven Vandenberghe) (z-library.sk, 1lib.sk, z-lib.sk).pdf` (a copy is also in `GATE PREP/`). Chapters 2–5 cover Modules II–IV. Printed page offset not yet measured.
- References (syllabus): Luenberger and Ye, *Linear and Nonlinear Programming*, 4th ed. (Springer 2015); Lauritzen, *Undergraduate Convexity* (World Scientific 2013). Neither is on disk.
- **No Convex Optimization past paper is on disk.** The PYQ pool is the nearest courses: Linear Programming (MAT 6B 13 E02 / MTS 5B 08, Sem 5 and Sem 6), Multivariable Calculus (Module I), Mathematical Economics (Lagrange multipliers). Pool papers are listed in `source/pyq/process.md`.

## Syllabus map (printed numbers)
Units are matched by content. The syllabus prints units 19 and 20 twice (Modules III and IV), and no unit 26. Printed numbers are kept.

| Module | Printed units | Hrs | Content | Book source |
|---|---|---|---|---|
| I | 1–8 | 10 | Review of multivariable calculus: directional and partial derivatives, total derivative, gradient, Jacobian, chain rule, stationary points, Hessian, mean value theorem, second order Taylor, eigenvalues of Hessian, classification | Binmore ch. 19, pp. 190–231 |
| II | 9–17 | 14 | Convexity: affine and convex sets, convexity preserving operations, generalized inequalities, supporting and separating hyperplanes, dual cones, convex functions, quasi- and log-convex | Boyd ch. 2 and 3 |
| III | 18, 19, 20, 21, 22, 19 (printed twice) | 12 | Convex optimization problems: linear, quadratic, geometric programming, generalized inequality constraints, vector optimization | Boyd ch. 4 |
| IV | 20–25 | 12 | Duality: Lagrange dual function, Lagrangian dual and geometric interpretation, saddle point, optimality conditions, theorems of alternatives, generalized inequalities | Boyd ch. 5 |

External marks: 70, minimum 15 from each of Modules I–IV.
Course outcomes: CO1 prove basic properties of convex sets and functions (Ap, C); CO2 model simple problems with convex optimization and solve them (Ap, P); CO3 formulate the dual of a convex optimization problem and describe its properties (U, C).

## Folder structure (CONVEX-OPTIMIZATION)
```
CONVEX-OPTIMIZATION/
├── CLAUDE.md                                        this record
└── source/
    ├── process.md                                   which process applies to which task
    ├── syllabus.html                                syllabus transcription (printed units 1–30 with duplicates as printed)
    ├── books/
    │   ├── process.md                               PDF to HTML: the Codex method (copied from Properties of Solids)
    │   └── prepare/
    │       ├── process.md                           module table, steps for a new module
    │       ├── module-1/book-sources/               Module I (excerpt done, in books/)
    │       ├── module-2/book-sources/               Module II (not started)
    │       ├── module-3/book-sources/               Module III (not started)
    │       └── module-4/book-sources/               Module IV (not started)
        └── pyq/
        ├── process.md                               exam papers, pool, selection and build rules
        ├── topicwise-questions.md                   topic-wise search list (63 questions, with source codes)
        ├── convex-optimization-module-1-pyq.{html,pdf}   Module I PYQ (11 questions, 38 marks), mailed 2026-10-16
        ├── 2021-NOV, 2022-NOV (x2), 2022-MAR, 2023-NOV, 2024-MAR, 2024-NOV, 2025-NOV .html
        │                                             the eight LP pool papers in standard format (MTS 5B 08 / MAT 6B 13 E02)
        ├── build_paper.py                           transcription builder (one paper per call; data file in the scratchpad)
        ├── build_module1_pyq.py                     Module I PYQ builder (selection and marks in the file)
        ├── convex-optimization-module-1-model-missed-topics-from-pyq.{html,pdf}   Module I model paper, mailed 2026-10-16
        ├── build_module1_model.py                   Module I model paper builder (gaps and key in the file)
        ├── transcription-head.html                  shared CSS and MathJax (house layout)
        ├── pyq-head-aa.html                         module PYQ and model layout (Abstract Algebra head; used by both module builders)
        └── render.py                                PDF renderer with blank-page drop and checks
```
Working files (scratch, extractions, drafts, the temp copies of the pool, the page images, the transcription data files) were in the session scratchpad and were deleted on 2026-10-16 after the papers were converted. The originals stay in `GitHub/SSC-FILES/`.

## Module status
- **Module V: dropped (user, 2026-10-16).** Folder deleted (empty); not in any file.
- **Book excerpt, Module I (done, mailed 2026-10-16):** `source/books/binmore_module1_excerpt.html`. Binmore, 2nd ed. (1982), Chapter 19, printed pp. 190–231, 42 sheets plus a contents sheet. Codex extraction in four chunks, checked against the images (pp. 190, 205, 222, 229–231). Coverage: numbers 19.1–19.48 all present. Continuation markers removed. Offset: printed = PDF − 14.
- **Syllabus:** transcribed to `source/syllabus.html` (checked against the page images; tag balance 27/27 divs, 7/7 tables; screenshot checked).
- **Topic search (done 2026-10-16):** questions were searched topic by topic from the syllabus across the LP and calculus pool. The list is in the scratchpad (`topicwise-questions.md`): 12 questions for Module I, 20 for Module II, 16 for Module III, 12 for Module IV, none for Module V. Gaps: convex functions, quasi- and log-convex, generalized inequalities, quadratic and geometric programming, Lagrange dual, KKT, saddle point, theorems of alternatives. The list is in `source/pyq/topicwise-questions.md`. Correction: `x^2 + y^2 - 2x + 4y` (not `+2x`) and `-x^3 + 4xy - 2y^2 + 1` (with the minus sign), both checked against the page images.
- **PYQ:** one paper transcribed and mailed (MTS 5B 08 Linear Programming, Nov 2025, code D 130229, 21 questions). Its wording was checked against the page images. Three tableau questions are monospaced text, not a grid.
- **Pool papers converted (2026-10-16):** all eight LP papers are in standard format HTML (see the tree). Each was built from page-by-page reading of the page images. The Sem-6 2020 March LP paper (scan) is not in the pool and was not converted.
- **Module I study notes, Section 1 (done, study version mailed 2026-10-16):** `source/books/prepare/module-1/`: `bs-1-directional-partial.html` (book source, printed pp. 190–195), `m1-sec1-study.body.html` (student voice, items 19.1–19.5 with examples (i)–(iii)), `convex-optimization-module-1-section-1-study.pdf`. Figures are described in words, not drawn. The structured version and Sections 2 onward are not built.
- **Module I PYQ (done, mailed 2026-10-16):** `source/pyq/convex-optimization-module-1-pyq.pdf`. 11 UG questions from the calculus papers (March 2022, 2023, 2024, 2025; April 2026), 38 marks. Excluded: the PG Sem 3 paper, the SDE MCQ variant (marks not printed). The calculus papers are the source for this PYQ only; they are not converted to full HTML papers.
- **Notes (prepare/):** not started.
- **Module PYQs and model papers:** not started.

## Rules for every module
- Edition first: confirm the printed page offset of Binmore (Module I) and Boyd (Modules II–IV) before any excerpt. Boyd offset measured 2026-10-17: printed = PDF − 15 (ch. 2 opens PDF 36 = printed 21). Map syllabus units by content, not by number.
- Syllabus numbers repeat (19, 20). Cite them as printed and say "printed 19 (second)" when it matters.
- Excerpt: codex-extracted book text, checked against the page images. Each exercise is printed once, at its position.
- Pre files (Plus Two bridge): this course is FYUGP, not Plus Two. Skip the pre files unless the user asks.
- PYQ: keep the printed wording; "State whether true or false:" goes in front of true/false statements. Marks bands: A 1–3, B 4–5, C 10 and above. Paper code and name block stay in the transcription, not in generated papers.
- Mailing: `quickmail <file> ihjas.one@gmail.com`, one file per message, only when asked. Keep the log below.
- Nothing is mailed before its checks have run. No placeholders in final files.

## Mailing log (quickmail keeps no log; keep this list current)
1. `pyq/2025-NOV-MTS5B08-LINEAR-PROGRAMMING.pdf`, sent 2026-10-16, for review before the rest of the pool is processed.
2. `books/binmore_module1_excerpt.html`, sent 2026-10-16 (Module I excerpt).
3. `pyq/convex-optimization-module-1-pyq.pdf`, sent 2026-10-16 (Module I PYQ; re-sent in the Abstract Algebra layout the same day).
4. `pyq/convex-optimization-module-1-model-missed-topics-from-pyq.pdf`, sent 2026-10-16 (Module I model paper; re-sent in the Abstract Algebra layout).
5. `books/prepare/module-1/convex-optimization-module-1-section-1-study.pdf`, sent 2026-10-16 (Module I, Section 1 study notes, §19.1–19.5, for checking).
6. `books/convex-optimization-textbook-module-1.pdf`, sent 2026-10-17 (Binmore Ch. 19, PDF pp. 204–245 = printed 190–231, 42 pp).
7. `books/convex-optimization-textbook-module-2.pdf`, sent 2026-10-17 (Boyd Ch. 2–3, PDF pp. 36–140 = printed 21–125, 105 pp; chapter exercises kept at each chapter end).
8. `books/convex-optimization-textbook-module-3.pdf`, sent 2026-10-17 (Boyd Ch. 4, PDF pp. 142–228 = printed 127–213, 87 pp).
9. `books/convex-optimization-textbook-module-4.pdf`, sent 2026-10-17 (Boyd Ch. 5, PDF pp. 230–302 = printed 215–287, 73 pp).

## Open decisions
1. Pool: no Convex paper is on disk. Confirm that the LP papers (and, for Module I, the multivariable papers) are the intended PYQ pool, or name the actual Convex papers.
2. Whether to transcribe the remaining pool papers now (the user said "we will proceed with all" after the sample is accepted).
3. Printed page offset for Boyd: not measured (Binmore measured: −14).
4. Syllabus unit numbers 19 and 20 are duplicated: keep as printed, or ask the university for the corrected numbering.

## Model day paper (from the study-plan screenshot)
- Trigger: the user uploads a screenshot of the study plan and says "create model day paper". Method: `create-model-day-paper.md` (this folder). Builder: `build_model_paper.py`, which takes a JSON paper and writes the HTML and PDF. Each paper is a `model-paper-<N>.json` in this folder.
- Scope is the syllabus's section list, checked against the book excerpt headings. A question whose section is not listed is out, even when the topic sounds right. Do not pad a paper with out-of-scope questions.
- Layout: copy the university paper for this subject (under `GitHub/SSC-FILES/PYQ/` or `ssc-v3/fyug/`), including its marks, ceilings and time. No name or register-number block.
