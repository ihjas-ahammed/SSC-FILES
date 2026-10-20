# Properties of Solids (Sem 5): session record

Last updated 2026-10-16. Read this file first, then the process file of the module you are working on.

## Sources
- Syllabus: `SSC-FILES/SSC-V2/SEM5/PHY/PROPERTIES_OF_SOLIDS.pdf` (CU-FYUGP BSc Physics Honours, course title PROPERTIES OF SOLIDS, Major Elective, Specialization I: Materials Science, Semester V, 4 credits, 60 h). The syllabus prints no course code. Four modules: I = items 1–5 (15 h, 20 marks), II = items 6–11 (10 h, 15 marks), III = items 12–16 (10 h, 10 marks), IV = items 17–22 (13 h, 25 marks). The open-ended Module V (crystal bonding and defects) is dropped (user, 2026-10-16); its folder is deleted and it is not in any file.
- Text book (syllabus Book 1): R. K. Puri and V. K. Babbar, *Solid State Physics and Electronics*. On disk: `SSC-FILES/SSC-V2/SEM5/PHY/books/Solid State Physics and Electronics (RK Puri  VK Babbar) (z-library.sk, 1lib.sk, z-lib.sk).pdf`, 614 PDF pages. **Printed page = PDF page − 16** (measured on PDF 18, 20, 21, 36, 40, 48, 51, 62, 70, 74, 167, 191 and the page headers of 168, 176, 184, 196, 212). The edition is not stated in the front matter; section numbers are matched by content.
- Book 2 (S. O. Pillai, 6th ed.) and Book 3 (M. A. Wahab): not on disk (`SEM5-PYQ/SEM5-reference-books-status.md`, `SEM5-PYQ/SEM5-missing-books-full.md`).
- Earlier study folder: `SSC-FILES/2026 2/PROPERTIES OF SOLIDS/` (`properties-of-solids-1.html`, "Study Notes & Coursework", `Properties of Solids - 1.pdf`, `MS-1.zip`, 76 WhatsApp images). **Not read yet.** Read it before writing Module III, so that the notes do not repeat or contradict it, and say how it is used.
- Base for the pre files: Kerala SCERT Plus Two. Its text is not on disk, so every Plus Two status stays OPEN until checked.

## Syllabus map (Book 1, by content)
| Module | Syllabus items | Book 1 sections (printed pages) | Status |
|---|---|---|---|
| I | 1–5: lattice, symmetry, Bravais lattices and planes, simple structures, X-ray diffraction and reciprocal lattice, Brillouin zones | §1.1–1.13 (pp. 1–33); §2.1–2.2 (pp. 34–39); §2.4–2.7 (pp. 46–58); §2.3 (pp. 40–45) left out | done |
| II | 6–11: Drude–Lorentz, Sommerfeld, free electron gas, Fermi energy and DOS, Bloch and Kronig–Penney, metals/insulators/semiconductors | §5.1–5.3 (pp. 151–174); §6.1–6.5 (pp. 175–198) | done |
| III | 12–16: intrinsic and extrinsic semiconductors, drift velocity, mobility and conductivity, carrier concentration, Fermi level | §7.1–7.6 (ch. 7, pp. 199–227) | not started |
| IV | 17–22: magnetism (dia, para, ferro, antiferro, ferri), polarisation, susceptibility, local field, dielectric constant, ferro- and piezoelectricity | §8.1–8.7 (ch. 8, from p. 228); §9.1–9.7 (ch. 9, from p. 265); check the pages | not started |

Items are matched by content. Each module's scope and decisions are in its `process.md`.

## Folder structure (PROPERTIES-OF-SOLIDS)
```
PROPERTIES-OF-SOLIDS/
├── CLAUDE.md                                        this record
└── source/
    ├── process.md                                   which process applies to which task
    ├── books/
    │   ├── process.md                               PDF to HTML: the hand method and the Codex method (use the Codex one)
    │   ├── puri-babbar_module1_excerpt.html         Module I excerpt (hand transcription; printed 1–39, 46–58)
    │   ├── puri-babbar_module2_excerpt.html         Module II excerpt (Codex transcription; printed 151–198)
    │   └── prepare/
    │       ├── process.md                           module table, steps for a new module, pointer to the Codex method
    │       ├── module-1/                            process.md, book-sources/ (bs-1, bs-2), m1-sec*-{study,structured}.body.html,
    │       │                                        image-gen/ (36 briefs, 9 sheets), final/, build_module1.py, pre files, final PDFs
    │       ├── module-2/                            process.md, book-sources/ (bs-3, bs-4), m2-sec*-{study,structured}.body.html,
    │       │                                        image-gen/ (16 briefs, 4 sheets), final/, add_book_equations.py, build_module2.py, pre files, final PDFs
    │       ├── module-3/                            Module III: done (notes, pre files, process.md)
    │       └── module-4/                            Module IV: done (notes, pre files, process.md)
    └── pyq/
        ├── process.md                               exam papers, model papers, layouts, pool and selection rules
        ├── 12 transcribed papers (YEAR-MON-COURSE-ADM.html), built by build_transcriptions.py
        ├── properties-of-solids-module-1-pyq.{html,pdf}, properties-of-solids-module-1-model-missed-topics-from-pyq.{html,pdf}
        ├── properties-of-solids-module-2-pyq.{html,pdf}, properties-of-solids-module-2-model-missed-topics-from-pyq.{html,pdf}
        ├── build_module_pyq.py (Module I), build_module2_pyq.py (Module II), build_model_paper.py (regenerated for each module; see the file header)
        ├── build_transcriptions.py, build_paper.py, transcription-head.html (Abstract Algebra layout; transcriptions only)
        └── pyq-head-ed.html (Electrodynamics II layout; module PYQs and models), render.py
```
`source/pyq/temp/` was closed on 2026-10-16 after each copy was checked byte-for-byte against its original in `pyq/` or `PYQ/`. Scratch work (Codex chunks, page images, raw text) lives in `/tmp/pos-scratch.pAaw/` and is not part of the project.

## Module status
- **Module I (items 1–5): done.** PYQ 37 questions (UG papers; bands A 1–3, B 4–5, C 10). Model paper: 18 questions, 48 marks, four sections (1, 2, 4 and 10 marks), key and mapping on page 2. Notes: five sections (1.1–1.4; 1.5–1.6; 1.7–1.9; 1.10–1.13; 2.1–2.2 and 2.4–2.7), study 21 pages, structured 16 pages, 36 Codex figures (nine sheets, all read; the fcc sheet was re-run twice because a body-centre atom was drawn). Coverage check: MISSING [].
- **Module II (items 6–11): done.** PYQ 17 questions (M.Sc. papers used, see Open decisions). Model paper: 17 questions, 46 marks, four sections. Notes: five sections (5.1; 5.2 one-dimensional; 5.2.2–5.3 three-dimensional and applications; 6.1–6.3; 6.4–6.5), study 13 pages, structured 9 pages, 16 Codex figures (four sheets). Book text from Codex, checked (method below). Coverage check: MISSING [] for 5.1–5.54 and 6.1–6.59.
- **Module III (items 12–16): done and mailed (2026-10-16).** Excerpt: `source/books/puri-babbar_module3_excerpt.html` (Codex, printed 199–227, checked against the images). Notes: `source/books/prepare/module-3/` (`properties-of-solids-module-3-study.pdf`, `-structured.pdf`; 52 of 52 book equations, 11 Codex figures in three sheets; overflow 0 and 0). PYQ: `source/pyq/properties-of-solids-module-3-pyq.pdf` (7 questions; UG pool has no 10-mark semiconductor question). Model paper: `source/pyq/properties-of-solids-module-3-model-missed-topics-from-pyq.pdf` (17 questions, 46 marks). Pre files: `prepare/module-3/pre-physics.html`, `pre-math.html` (statuses OPEN until the Kerala text is checked). Scope and decisions: `prepare/module-3/process.md`.
- **Module IV (items 17–22): done and mailed (2026-10-16).** Chapters 8 and 9 (printed 228–279): excerpt `source/books/puri-babbar_module4_excerpt.html`; notes in `source/books/prepare/module-4/` (126 of 126 book equations; 18 Codex figures; overflow 0 and 0). PYQ `source/pyq/properties-of-solids-module-4-pyq.pdf` (18 questions) and model paper `source/pyq/properties-of-solids-module-4-model-missed-topics-from-pyq.pdf` (17 questions). Process and decisions: `prepare/module-4/process.md`.

## Mailing log (quickmail keeps no log; keep this list current)
Sent to ihjas.one@gmail.com, one file per message:
1. `properties-of-solids-pyq-sample-2026-APR-PHY6B11.pdf` (sample transcription, first layout; superseded)
2. `properties-of-solids-module-1-pyq.pdf`: sent in the first layout, then the Abstract Algebra layout, then the Electrodynamics layout (current)
3. `properties-of-solids-module-1-model-missed-topics-from-pyq.pdf`: first layout, then Abstract Algebra layout, then Electrodynamics layout (current)
4. `properties-of-solids-module-1-study.pdf`
5. `properties-of-solids-module-1-structured.pdf`
6. `properties-of-solids-module-2-pyq.pdf` (current)
7. `properties-of-solids-module-2-model-missed-topics-from-pyq.pdf` (current; the first build had a key bug, fixed before it was sent)
8. `properties-of-solids-module-2-study.pdf` (current)
9. `properties-of-solids-module-2-structured.pdf` (current)
10. `properties-of-solids-module-3-study.pdf` (sent 2026-10-16)
11. `properties-of-solids-module-3-structured.pdf` (sent 2026-10-16)
12. `properties-of-solids-module-3-pyq.pdf` (sent 2026-10-16)
13. `properties-of-solids-module-3-model-missed-topics-from-pyq.pdf` (sent 2026-10-16)
14. `properties-of-solids-module-4-pyq.pdf` (sent 2026-10-16)
15. `properties-of-solids-module-4-model-missed-topics-from-pyq.pdf` (sent 2026-10-16)
16. `properties-of-solids-module-4-study.pdf` (sent 2026-10-16)
17. `properties-of-solids-module-4-structured.pdf` (sent 2026-10-16)
Nothing is outstanding. Check this list before sending anything new.

## Methods that work (use these)
- **Book text: Codex extraction** (`source/books/process.md`, "Method used from Module II"). Render each page to PNG and extract its raw text. Run `codex exec` in chunks of about twelve pages, in the background, with a log per chunk. Check that every chunk covers its page ids: a chunk can stop early. Verify the first sections and the equation pages against the images. Assemble, remove the running heads, and run the coverage check.
- **Figures:** Codex sheets of four, one `codex exec` per sheet, with START and DONE lines. Read every sheet before cropping. Re-run a sheet with a corrected brief when a label or feature is wrong, and state the exact feature to avoid in the brief (for example, "no atom at the body centre").
- **Notes:** study (own words) and structured (formal) bodies per section; `box-recall` boxes where the base is Plus Two. `check_equations.py` must print MISSING []; `check_overflow.py` 0 and 0; `render.py` 0 MathJax errors; look at one page before mailing.
- **Captions** are plain HTML, not MathJax (MathJax in a caption renders at a huge size).
- **PYQs:** Electrodynamics II layout (`pyq-head-ed.html`). Bands A 1–3, B 4–5, C 10. Topic order, then year, then month. Source label in grey. M.Sc. weightage kept as printed.

## Rules the user set (carried over from the other SEM5 projects)
- Finish requested work end to end without asking permission for steps already asked for (user, 2026-10-16). Ask only when a fact or access only the user has is missing; name the choice taken in the final message.
- Notes must not drop content from the book. Student version in own words; structured version formal; both keep the book's numbers.
- No placeholders, "outline", or "in progress" wording in final files. A missing item is a build failure.
- Keep the paper's wording. True/false statements get "State whether true or false:" in front.
- Generated papers: no name or register block and no paper code.
- Mail the finished PDFs one per message, right after they are made, when the user asks. Keep the mailing log above.
- Finish module work end to end, following the process files (`memory/feedback-module-work-without-interference`).

## Lessons from this session (avoid repeating them)
- **Stale matches.** A wait loop that greps for `DONE sheet 6` matched an old line from the first run. Count the lines and wait for a new one.
- **Self-matching pkill and pgrep.** `pkill -f` or `pgrep -f` with a pattern that also appears in the shell command kills the shell (exit 144). Use `ps -eo pid,args | grep "[r]un_sheets"` (the bracket trick), then kill by PID.
- **Briefs syntax.** A new brief line without its trailing comma breaks the whole briefs module, and the sheet job then fails without a clear message. Import the module after every edit.
- **`re.sub` replacement strings.** Backslashes in a `re.sub` replacement corrupt LaTeX (`\frac` becomes a form feed). Use `str.replace` or slicing.
- **Figure names.** A body that refers to a figure name that the sheet does not use fails the build. Check the names against `SHEETS` in the run file.
- **Coverage checker classes.** Display blocks with `class="eq longeq"` must also be matched.
- **Captions with MathJax** render huge. Use HTML.
- **Hand transcription is error-prone.** The hand-written Module II excerpt had equation 5.51 wrong. The Codex text, checked against the images, was right.
- **Codex chunks stop early.** Check the page ids of every part before using it.
- **Layout.** `longeq` alone did not make long displays fit; rewrite them as aligned rows, and wrap a four-row system in `\scriptsize`. Tables span both columns with `column-span: all`.

## Open decisions and items for the next session
1. **Module I excerpt** was transcribed by hand and is not checked against the images the way Module II was. Option: redo it with the Codex method, and rebuild the Module I notes if the text changes. Ask the user.
2. **Module I §2.3** (X-ray methods, pp. 40–45) is left out. Syllabus item 5 says "X-ray diffraction", so the user may want it added.
3. **Module I problem answers** with bars (problems 1 and 2, and long question 7) were read at low resolution and are marked in the excerpt. Verify against printed p. 32.
4. **Module I problem numbering:** problem 3 is not printed (the list goes from 2 to 4). Recorded in the excerpt.
5. **Module II PYQ pool.** The UG pool has only two relevant questions, so the Module II PYQ uses the M.Sc. papers. Decide whether that stays, and whether the PG papers are used for Module III as well.
6. **PYQ bands:** physics uses B 4–5 (Electrodynamics II); Abstract Algebra uses B 4–7. M.Sc. 6-weightage items are placed in B.
7. **Course code** is not printed in the syllabus. Generated papers have no code.
8. **Plus Two statuses** stay OPEN in every pre file until checked against the Kerala text.
9. **Earlier study folder** `2026 2/PROPERTIES OF SOLIDS/` was read (2026-10-16). It covers only Module I crystal-structure topics (lattices, Miller indices, Wigner-Seitz cells, symmetry) and has no semiconductor material, so it is not used for Module III.
10. **Module I process file** still says "to check" for the §1.8 start page on the page; check it.
11. **Documents-level CLAUDE.md** (`Documents/CLAUDE.md`) does not list this project's status or the Codex method. Update it when the user asks.
12. **Module III and IV** need their pre files written from the Plus Two base, and their book text extracted with the Codex method.

## Model day paper (from the study-plan screenshot)
- Trigger: the user uploads a screenshot of the study plan and says "create model day paper". Method: `create-model-day-paper.md` (this folder). Builder: `build_model_paper.py`, which takes a JSON paper and writes the HTML and PDF. Each paper is a `model-paper-<N>.json` in this folder.
- Scope is the syllabus's section list, checked against the book excerpt headings. A question whose section is not listed is out, even when the topic sounds right. Do not pad a paper with out-of-scope questions.
- Layout: copy the university paper for this subject (under `GitHub/SSC-FILES/PYQ/` or `ssc-v3/fyug/`), including its marks, ceilings and time. No name or register-number block.
