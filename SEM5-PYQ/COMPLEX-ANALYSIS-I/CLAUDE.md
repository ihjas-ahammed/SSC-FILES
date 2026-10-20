# Complex Analysis I (Sem 5): session record

## Sources
- Syllabus: `SSC-FILES/SSC-V2/SEM5/MATH/MAT5CJ303CourseTitleCOMPLEXANA_COMPLEX_ANALYSIS_I.pdf` (CU-FYUGP BSc Mathematics Honours, MAT5CJ303, Complex Analysis I, 4 credits, 60 hours). Five modules: I = items 1–5 (sections 1.1–1.5), II = items 6–10 (sections 2.1, 2.2, 2.4), III = items 11–18 (sections 3.1–3.4), IV = items 19–22 (sections 4.1, 4.3), V = open-ended (linear mappings, reciprocal functions, branches, complex powers, inverse trig and hyperbolic functions).
- Textbook (syllabus): Zill and Shanahan, *Complex Analysis: A First Course with Applications*, **3rd ed.**
- Book used: `SSC-FILES/2026 2/COMPLEX ANALYSIS/Complex Analysis (Dennis G. Zill, Patrick D. Shanahan) (z-library.sk, 1lib.sk, z-lib.sk).pdf`, the 3rd ed. (453 PDF pages). Printed page = PDF page − 14 (PDF 17 = printed 3). The edition matches the syllabus, so no concordance is needed.
- Syllabus references (not on disk): Brown and Churchill, *Complex Variables and Applications* (a copy is in `SSC-FILES/GATE PREP/Pure & Applied Mathematics/`); Stein and Shakarchi, Burckel and others.

## Folder structure
```
COMPLEX-ANALYSIS-I/
├── CLAUDE.md                                   this record
└── source/                                     copied from ABSTRACT-ALGEBRA/source (2026-10-16)
    ├── process.md, books/process.md, books/prepare/process.md, pyq/process.md, pyq/render.py, ...
    ├── books/prepare/module-1..4/              inherited Abstract Algebra notes. Not used for this subject; kept as the copy requested.
    ├── pyq/                                    inherited Abstract Algebra papers. Not used for this subject.
    └── books/prepare/complex-module-1/         Complex Analysis Module 1 work
        ├── book-sources/section1-complex-numbers.html   book source, section 1.1 (printed 3–9, plus Problem 55 named in Remark (i))
        ├── complex-numbers-study.body.html     study body, section 1.1
        ├── build_complex.py                    builds complex-numbers-study.html (uses layout.css)
        ├── layout.css                          two-column layout, same CSS as the Abstract Algebra Module 1 builder
        ├── check_numbers.py                    coverage check (MISSING [] required)
        ├── complex-numbers-study.html/.pdf     build output
        └── complex-analysis-1-module-1-section-1-study.pdf   the file mailed (2026-10-16)
```
The inherited Abstract Algebra files in `books/prepare/module-*` and `pyq/` describe Abstract Algebra. Do not follow their module status, page numbers or paper lists for this subject.

## Module status
- **Module I (sections 1.1–1.5; items 1–5)**: section 1.1 study body built, checked (MISSING []), rendered (2 pages, MathJax errors 0), and mailed on 2026-10-16. Section 1.1 covers Definitions 1.1.1 and 1.1.2, Examples 1–3, equations (1)–(7), Remarks (i) and (ii), and Problem 55 (named by Remark (i), printed after that sentence).
  - Not done: section 1.1 structured body; sections 1.2–1.5 (book pages 10–31); the Module I PYQ and model paper; `pre-math.html`.
- **Modules II–V**: not started.

## Decisions taken (2026-10-16)
- "Section 1" of Module 1 was read as book section **1.1** (Complex Numbers and Their Properties). Module 1 in the syllabus covers 1.1–1.5.
- Study body only, as requested. The structured body is not built.
- Exercises are not in the notes, except Problem 55, which the text names (rule from Abstract Algebra Module 2 onward: a named exercise is printed directly after the sentence that names it).
- Plus Two recall boxes are not used: the base for complex numbers is not confirmed in the Kerala text, which is not on disk. `pre-math.html` is not built for the same reason.
- Mailed to `ihjas.one@gmail.com` (the recipient the project's CLAUDE.md names).

## Rules for this subject
- Edition first: the book on disk is the 3rd ed. and matches the syllabus.
- Book source: transcribe from the PDF text layer and keep printed page numbers; the text layer was checked against the printed page layout, not re-read from the images.
- Notes: study body in own words; every Definition, Example, displayed equation (book tag) and Remark is kept with its book number. Named exercises are printed in the body after the naming sentence.
- Check: `python3 check_numbers.py` must print MISSING []; build with `python3 build_complex.py`; render with `python3 ../../../pyq/render.py complex-numbers-study.html`; look at the rendered pages; check that no display runs past its column.
- Mailing: one file per message, sent when asked. Quickmail keeps no log; the list of sent files is in this record.
- Working files go in the session scratchpad, not in the project folder.

## Lesson from section 1.1 (2026-10-16)
- The first Example 1 display ran to the column edge and left a stray full stop on its own line. The step was split into a text line and one display. Check every display's width and trailing punctuation before mailing.
