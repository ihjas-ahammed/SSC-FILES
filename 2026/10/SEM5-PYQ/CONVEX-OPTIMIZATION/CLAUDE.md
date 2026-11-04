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
- Model Paper 3 (2026-10-28): `model-papers/CONVEX-OPTIMIZATION-MODEL-PAPER-3.{html,pdf}`, 2 pages, mailed. Scope: Boyd §4.3–4.7 (items 19–22 and vector optimization). Verbatim from Boyd ch. 4 exercises: 4.8(a)–(c), 4.11(a),(b), 4.26, 4.32, 4.33(a),(b), 4.39(a),(b), 4.21(b); text results: linear-fractional to LP (4.3.2), GP convex form (4.5.3), SOC as LMI (4.6.3), scalarization (4.7.4).


## Model Paper 4 — built and mailed 2026-10-28
- Files: `model-papers/CONVEX-OPTIMIZATION-MODEL-PAPER-4.html` and `.pdf`; source JSON `model-papers/model-paper-4.json`; question provenance `model-papers/CONVEX-OPTIMIZATION-MODEL-PAPER-4-SOURCES.md`.
- Scope: Module IV, Boyd §§5.1–5.5 and 5.8–5.9: Lagrange dual function, dual problem and geometry; saddle-point interpretation and optimality; alternatives and generalized inequalities.
- Layout: Electrodynamics II Model Paper 1 reference; 2 hours, maximum 70; Section A 10×3 ceiling 24, Section B 8×6 ceiling 36, Section C 2×10 answer any one. Section B starts page 2; 2 A4 pages total.
- Sources: LP November 2025 Q9 (paper Q5) and LP November 2023 Q16 (paper Q14), assigned 3 and 6 marks; Boyd Exercises 5.5, 5.22(b), 5.27, 5.42, and adapted 5.1(a)–(c); new questions from the cited in-scope theory. Sensitivity questions excluded. Papers 1–3 checked; no question reused. Offered marks across the three topic groups: 32/34/32 before section ceilings.
- Checks: ceiling arithmetic, textbook scope, direct mathematical review, rational checks of numerical dual/saddle example and a KKT instance, both rendered PDF pages inspected, copies verified by SHA-256.
- Mailing: `quickmail CONVEX-OPTIMIZATION-MODEL-PAPER-4.pdf ihjas.one@gmail.com` returned success on 2026-10-28. PDF only; no HTML or answer key emailed.


### Model Paper 4 audit revision — resent 2026-10-28
User requested an audit, removal of section page breaks, and resend. All 20 questions checked; Q18 now explicitly assumes finite primal optimum. Removed forced section breaks: A/B on page 1, C naturally on page 2, section titles kept with first questions. PDF and HTML replaced with audited versions; audit report in model-papers/CONVEX-OPTIMIZATION-MODEL-PAPER-4-AUDIT.md. Revised PDF sent via quickmail to ihjas.one@gmail.com; command returned success. Previous mailed version retained in /tmp/convex-model-paper-4-7xsanked/build/previous-mailed/.

## Dynamic study page, Modules I–IV — built and deployed 2026-10-29
- Live: https://ssc-data-science-qm.web.app/CONVEX_OPTIMIZATION_1234.html (offline copy: `CONVEX_OPTIMIZATION_1234_OFFLINE.html`). Both checked byte for byte against the local files after deploy.
- Files: `SSC-V2/SEM5/MATH/apps/CONVEX_OPTIMIZATION_1234{,_OFFLINE}.html`. Build folder `SSC-V2/SEM5/MATH/apps/tools/co1234/` (copied from `PHY/apps/tools/ss12`; `python3 build.py [--check|--offline]`). Content: `stations/*.html` (42 sections incl. 3 model papers and a checklist), `derivs/m1–m4.dv` (30 stepped derivations), `figsco.js` (29 canvas figures), `sims/body.js` (4 sims: Hessian classifier, LP vertex, dual bound for Ex. 5.1, water-filling).
- Deploy: added to `PHY/apps/tools/deploy.sh` (MATHAPPS block). Study plan: `SYSTEMS.CO` added in `SSC-V6/study-plan-v5.html` (plan units 1–25 → section ids).
- Checks passed (desktop 1280 and phone 390, online and offline with network off): no page errors, no MathJax errors, no raw `$`, no `<sub>/<sup>` or Unicode maths, no NaN sizes, no horizontal overflow, no scrolling result boxes, zero external requests offline, folds slide to natural height.
- Binmore misprints flagged on the page: 19.10 ($f(t,-t)$), 19.18(i) (points (1,2)/(2,1)), 19.22 ($2A\mathbf x$ as a row), 19.25(i) column, 19.25(ii) ($w=xy^2z^3$), 19.36 ($t$ for $\tau$), 19.43/19.46 ($\det f''$; minors $0,-1,2$), 19.47(1) ($\mathbf x$ is $n\times1$).
- Coverage: every Binmore ch. 19 example and all 18 exercises (19.11, 19.26, 19.47). Boyd: every section of §2.1–2.6, 3.1–3.6, 4.1–4.7, 5.1–5.5, 5.8–5.9 with their examples; a selection of end-of-chapter exercises (ch. 2: 2.1–2.7, 2.10–2.12, 2.14, 2.15, 2.21, 2.28, 2.31, 2.32; ch. 3: 3.1, 3.7, 3.16, 3.21, 3.22(a), 3.32(a), 3.36(a,c,d), 3.49(a,b), 3.57; ch. 4: 4.1, 4.3, 4.8, 4.9, 4.11, 4.21, 4.26, 4.33, 4.43(a); ch. 5: 5.1, 5.2, 5.3, 5.5, 5.24, 5.27, 5.29, 5.36, 5.37, 5.42, 5.43). Open: the remaining Boyd exercises are not worked on the page.
- Not mailed. Mail log: `co1234/mail-log.md`.
