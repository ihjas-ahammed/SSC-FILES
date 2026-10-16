# Abstract Algebra I (Sem 5): session record

## Sources
- Syllabus: `SSC-FILES/SSC-V2/SEM5/MATH/MAT5CJ302CourseTitleABSTRACTAL_ABSTRACT_ALGEBRA_I.pdf` (CU-FYUGP BSc Mathematics Honours, MAT5CJ302, Abstract Algebra I, 4 credits, 60 hours). Five modules: I = items 1–6, II = items 7–12, III = items 13–16, IV = items 17–22, V = open-ended (generating sets, factor groups, field of quotients).
- Text book (syllabus): Fraleigh, *A First Course in Abstract Algebra*, **7th ed.** (Pearson India, 2003).
- Book used: `SSC-FILES/2026 2/ABSTRACT ALGEBRA/A First Course in Abstract Algebra Eighth Edition (John B. Fraleigh etc.) (z-library.sk, 1lib.sk, z-lib.sk).pdf`, the **8th ed.** (449 PDF pages). Printed page = PDF page − 17 (PDF 28 = printed 11).
- Edition decision (made in Module 1): the 8th ed. is used because it is the only copy on disk. The 8th-ed front matter gives the former-to-new section concordance (for example 8th §1 = former §2; 8th §2 = former §4; 8th §3 = former §1; 8th §5, §6, §8 = former §5, §6, §8; 8th §16 = former §3). Syllabus items are matched to the book **by content**, not by number. Every notes file and contents sheet says so.
- Other syllabus references: Gallian, *Contemporary Abstract Algebra* (`SSC-FILES/2026/ADVANCED MATHEMATICS/`). Herstein, Wallace, Reis, Clark, Musili: not on disk (see `SSC-FILES/SEM5-reference-books-status.md`).
- `SEM5-reference-books-status.md` says Fraleigh is "not in the syllabus". The syllabus names it as the text book. The syllabus is right.
- Past papers (all Abstract Algebra papers on disk, 14 distinct files; 2 MCQ scans of mixed compilations): `SSC-FILES/pyq/Mathematics/MAT5CJ302/`, `SSC-FILES/PYQ/Mathematics/Sem-5/`, `SSC-FILES/ssc-v3/old_degree/mathematics/SEM5/MAT5CJ302_ABSTRACT_ALGEBRA_I/`. Theory of Equations papers are included only where they carry algebra questions.

## Folder structure (ABSTRACT-ALGEBRA)
```
ABSTRACT-ALGEBRA/
├── CLAUDE.md                                   this record
└── source/
    ├── process.md                              which process applies to which task
    ├── books/
    │   ├── Fraleigh-8ed_Module{1,2,3,4}_excerpt.html   book excerpts (printed pages 11–31, 52–70 and 77–88, 43–46 and 82–104, 145–149 and 185–200)
    │   ├── index.md, index-module-{2,3,4}.md   lookup indexes for each excerpt
    │   ├── process.md                          book conversion; findings
    │   └── prepare/
    │       ├── process.md                      module table and steps for a new module
    │       ├── module-1/                       published (sections 1–2)
    │       ├── module-2/                       notes mailed (sections 5, 6, 8.1–8.18); process.md
    │       ├── module-3/                       notes mailed (sections 4.8–4.15, 8.19–8.25, 10.1–10.20); process.md
    │       └── module-4/                       notes mailed (sections 16, 22, 23); process.md
    └── pyq/
        ├── process.md                          exam papers, model papers, module PYQ rules
        ├── transcription-head.html, render.py  shared head and PDF renderer
        ├── build_paper.py, build_model_paper.py   older builders
        ├── 2018-NOV … 2025-NOV (transcriptions)
        ├── abstract-algebra-1-module-{1,2,3,4}-pyq.{html,pdf}                 PYQ (mailed)
        └── abstract-algebra-1-module-{1,2,3,4}-model-missed-topics-from-pyq.{html,pdf}   models (mailed)
```
The builders and scratch scripts for Modules 2–4 are in the session scratchpad, not the project. Only finished module files are in the project.

## Module status
- **Module I (items 1–6)**: published.
  - Textbook excerpt (printed 11–31), indexed.
  - PYQ: 14 distinct papers transcribed (12 files). Module 1 PYQ (39 questions, five topics, bands A/B/C) mailed.
  - Model papers: FYUGP-layout model paper and Module 1 missed-topics model paper, both mailed.
  - Notes: section 1 (binary operations, printed 11–16) and section 2 (groups, printed 19–28), study and structured, combined and published.
- **Module II (items 7–12: subgroups and cyclic subgroups, cyclic groups, homomorphisms and groups of permutations)**: PYQ and missed-topics model mailed (2026-10-16); notes (study and structured) mailed, revised 2026-10-16 so each named exercise follows the item that names it. Printed pages: §5 52–56 (with 5.24–5.26), §6 61–67 (with 6.18–6.21), §8 77–82 (8.1–8.18). §8.1–8.6 (homomorphisms) are in Module II because the syllabus places them there. Scope and decisions: `source/books/prepare/module-2/process.md`.
- **Module III (items 13–16: permutations, disjoint cycles, even and odd permutations, alternating groups, cosets, Lagrange)**: PYQ and missed-topics model mailed (2026-10-16); notes (study and structured) mailed. Printed pages: §4 43–46 (4.8–4.15), §8 82–84 (8.19–8.25), §10 97–104 (10.1–10.20). Correction: the 8th-ed §9 is Finitely Generated Abelian Groups; the 7th-ed Section 9 material is matched by content to §4 and §8.19–8.25. Scope: `source/books/prepare/module-3/process.md`.
- **Module IV (items 17–22: homomorphisms, isomorphism theorems, rings and fields, integral domains)**: PYQ and missed-topics model mailed (2026-10-16); notes (study and structured) mailed (2026-10-16). Printed pages: §16 145–148 (with Exercise 10 printed on 149), §22 185–194, §23 194–200 (trimmed). Factor groups and factor rings are Module V; the notes state the recall the isomorphism theorems need. Scope: `source/books/prepare/module-4/process.md`.
- **Module V (open-ended: generating sets, factor groups, field of quotients)**: not started. Book §7, §12, §26. Scope to be decided with the user.

## Rules for every module
- Edition first: check the syllabus edition against the book on disk, write the concordance into the excerpt's contents sheet, and map syllabus items by content.
- Excerpt: copy the module's sheets into one HTML with printed page headers, plus a contents sheet with the edition warning, the page offset, and the syllabus mapping. Generate `index.md` from the final HTML.
- Pre file (`pre-math.html`): Plus Two bridge with Recall / Partial / Beyond. Statuses that depend on the Kerala text stay OPEN until checked.
- Notes: per section, book source in `book-sources/`, then a study body and a structured body. Every numbered item (definitions, theorems, corollaries, examples, tables) appears in both bodies with its book number. `check_numbers.py` must report MISSING []. Exercises are not in the notes, except the ones the text names. A named exercise is printed in both bodies directly after the sentence that names it (Module 2 onward). Say which in the meta line.
- Excerpt: each exercise is printed once, at its printed position. Never add a note, a caption or a named-exercise paragraph to the excerpt.
- Before building: check every question's and caption's wording against the page or the text layer. Do not type it from memory.
- Check rendered PDFs for raw TeX (backslashes in the PDF text) as well as MathJax error boxes; a failed MathJax run can pass the error check.
- Plus Two recall boxes only where the base is Plus Two. Each box has Recall, Re-derive (numbered steps), Saved.
- Two-column PDF: section title across the page, boxes inside a column. Display equations must fit one column: check widths before publishing (see the lesson below).
- Mailing: a section's study PDF is mailed for checking. A module's final PDFs (study and structured) are mailed one per message when the user asks. Quickmail keeps no log: keep a list of what was sent in the session.
- Marks bands for PYQ papers: A 1–3 marks, B 4–7 marks, C 10 marks and above. Sort by topic (syllabus order), then year, then month. Source month and year shown in grey as a shadow label.
- Paper rules: no name or register block, no paper code in generated papers. Transcriptions keep the printed code.

## Rules the user set
- Notes must not drop content from the book. Student version uses own words; structured version is formal. Both keep the book's numbers.
- No placeholders or "in progress" wording in final files. A missing item is a build failure.
- Keep the paper's wording. True/false statements get "State whether true or false:" in front.
- Working files go in the session scratchpad, not in the project folder.
- Module 2 (2026-10-16): include the exercises that the book's examples and theorems refer to, in both study and structured notes.
- The user's filename for the module PDFs was typed "abstarct": the names used are `abstract-algebra-1-module-1-{study,structured}.pdf`. Use the correct spelling unless told otherwise.

## Lessons from Module 1 (2026-10-15)
- **Overflow was missed.** One display equation in section 2 (the three-matrix display) ran past the column edge and was clipped. The width check was not run before publishing. Before publishing any two-column notes, run a width check on every display block and split any that exceeds the column. The user chose not to fix the Module 1 file; record it and do not repeat it.
- **Edition check first.** The 8th-ed concordance saved the section mapping. Record it at the start of the module, not in the middle of it.
- **Trim exercise lists off opener pages.** A sheet can carry the last exercises of the previous section. Trim them out of the book source and say so in the source header.
- **Coverage check per section and per module.** `check_numbers.py` checks both sections against their own sources; run it after each body is written.
- **Section mail, then module mail.** The section 1 study PDF went out for checking. The final module PDFs were mailed after the user accepted section 1 and section 2.

## Conversion and process files
- `source/process.md`: overview of `source/` and which process file applies.
- `source/books/prepare/process.md`: per-module notes folders, module table, the steps for a new module.
- `source/books/prepare/module-1/process.md`: the Module 1 method, status and the differences from the Electrodynamics method.
- `source/books/process.md`: PDF to HTML for book excerpts, including the findings from Module 1.
- `source/pyq/process.md`: exam-paper method, model papers, the module PYQ topic split and bands, and the findings from the PYQ work.
- Module 2 PYQ and model: `source/pyq/abstract-algebra-1-module-2-pyq.{html,pdf}` (41 questions; theory-of-equations papers included only for their algebra questions) and `source/pyq/abstract-algebra-1-module-2-model-missed-topics-from-pyq.{html,pdf}` (16 drafted questions). Both mailed. Builders are in the session scratchpad, not the project.

## Open decisions
1. Module II scope: settled (see `source/books/prepare/module-2/process.md`): items 7–12 by content, with each subsection finished in the module; 8.19 onward is Module III.
2. Printed pages for §5, §6, §8: measured (offset 17).
3. Module V scope (open-ended): still open.
4. Module IV item 17 (homomorphisms): checked 2026-10-16. Group homomorphisms are 8th-ed §8.1–8.6 (Module 2) and kernel cosets §10.17–10.19 (Module 3); ring homomorphisms are §22.9–22.11 (Module 4).
5. Plus Two statuses marked OPEN in `source/books/prepare/module-2/pre-math.html` need the Kerala text.
