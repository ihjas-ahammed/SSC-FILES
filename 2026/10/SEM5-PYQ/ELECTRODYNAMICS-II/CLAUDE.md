# Electrodynamics II (Sem 5): session record

## Sources
- `syllabus.html`: CU-FYUGP BSc Physics Honours, Electrodynamics II. Module I (fields in matter) = syllabus items 1–5; Module II (electrodynamics) = items 6–8.
- Module 1 excerpt: `source/books/Griffiths-5ed_Module1_excerpt.html`, Griffiths 5th ed., book pp. 166–208 (Ch. 4) and 268–297 (Ch. 6). Gaps: 195–201, 209–267.
- Module 2 excerpt: `source/books/Griffiths-5ed_Module2_excerpt.html`, Griffiths Ch. 7, book pp. 298–361 (64 sheets, including the Intermission page).
- Full Griffiths electrodynamics PDF (628 pages, the source of both excerpts): `SSC-FILES/2025/ELECTRODYNAMICS I/Introduction to Electrodynamics (Griffiths, David J.) (Z-Library).pdf`. Printed page = PDF page − 24 for Chapter 7.
- `source/pyq/*.html`: seven CBCSS papers (2018 Apr, 2019 Nov, 2020 Apr, 2021 Nov, 2021 Nov EM-II, 2022 Apr EM-II, 2022 Nov). Electrodynamics I papers are prerequisites; the EM-II papers are the course's own. Module questions were drawn from all seven, as stated in each module's process note.

## Folder structure (ELECTRODYNAMICS-II)
```
ELECTRODYNAMICS-II/
├── CLAUDE.md                                         this record
├── syllabus.html                                     CU-FYUGP syllabus (source)
├── electrodynamics-2-module-1-pyq.pdf                Module 1 PYQ, 2 pages (mailed)
├── electrodynamics-2-module-1-model-missed-topics-from-pyq.pdf   Module 1 model paper (mailed)
├── electrodynamics-2-module-1-qp.pdf                 Module 1 question-paper page only
├── electrodynamics-2-module-2-pyq.pdf                Module 2 PYQ, 2 pages (mailed)
├── electrodynamics-2-module-2-model-missed-topics-from-pyq.pdf   Module 2 model paper, 2 pages (mailed)
└── source/
    ├── process.md                                  overview of source/ and which process applies
    ├── books/
    │   ├── Griffiths-5ed_Module1_excerpt.html        Module 1 book excerpt (sheets)
    │   ├── Griffiths-5ed_Module2_excerpt.html        Module 2 book excerpt (64 sheets)
    │   ├── index.md                                  lookup index for the Module 1 excerpt
    │   ├── process.md                                book conversion (PDF to HTML) and pointers
    │   └── prepare/
    │       ├── process.md                            overview of the per-module notes folders
    │       ├── module-1/                             Module 1 notes (done, mailed)
    │       │   ├── process.md                        notes method, sections 1–18 (the main process file)
    │       │   ├── pre-physics.html, pre-math.html   Plus Two bridges, Module 1
    │       │   ├── book-sources/                     per-topic book sources (5 files)
    │       │   ├── parts/                            section bodies and the student CSS template
    │       │   ├── diagrams/image-gen/, diagrams/final/   Codex images (100 files), cleaned JPEGs
    │       │   ├── build_module1.py                  Module 1 builder
    │       │   └── electrodynamics-module1-study.pdf, electrodynamics-module1-structured.pdf   final, mailed
    │       └── module-2/                             Module 2 notes (sections 1–3, done, mailed)
    │           ├── process.md                        Module 2 record and command order
    │           ├── pre-physics.html, pre-math.html   Plus Two bridges, Module 2
    │           ├── book-sources/                     m2-s7* (section 1) and m2-sec2/3-* (sections 2–3)
    │           ├── m2-s7*-{study,structured}.body.html, m2-sec2-*, m2-sec3-*   topic bodies (20 files)
    │           ├── diagrams/                         SVG drafts (28)
    │           ├── image-gen/                        Codex briefs, runners, sheets, cropped PNGs, logs
    │           ├── final/                            cleaned JPEGs, 480 px (28)
    │           ├── build_module2.py                  combined builder (codex|svg, section or module2)
    │           ├── render.py                         PDF, blank-page drop, gutter and MathJax checks
    │           ├── check_source.py                   source checks for body files
    │           ├── check_equations.py                equation coverage against book sources
    │           ├── check_overflow.py                 equation overflow against columns
    │           ├── process_images.py                 SVG-to-final image step
    │           ├── add_recall.py, build_section1.py  earlier section-1 scripts (superseded)
    │           ├── structured-*.body.html, student-*.body.html, m2-section1-*   superseded section-1 files
    │           └── electrodynamics-module2-study.pdf, electrodynamics-module2-structured.pdf   final, mailed
    └── pyq/
        ├── process.md                                exam-paper method, Module 2 PYQ and model rules
        ├── 2018-APR.html … 2022-NOV.html             the seven papers (source transcriptions)
        ├── module-1-pyq.html, module-1-pyq-missing.{html,md}, module-1-model-missed-topics.html
        ├── module-2-pyq.html, module-2-model-missed-topics.html
        ├── build_pyq_module2.py, build_model_module2.py   Module 2 builders
        └── .txt_*.txt                                hidden text extracts of the papers (scratch; can go)
```

## Module status
- **Module 1 (Ch. 4 and 6 of Griffiths, syllabus items 1–5)**: notes done and mailed. PYQ and model paper done and mailed.
- **Module 2 (Ch. 7, syllabus items 6–8)**: notes done in three sections (§7.1, §7.2, §7.3 with §7.4 as background), combined study and structured PDFs mailed. PYQ and model paper done and mailed. Problems at the end of each section are not included.
- **Module 4 (Murugeshan Ch. 12 and 13, syllabus items 15–22)**: complete. PYQ question paper and model paper built (PYQ mailed). Full notes built from six sections with Codex figures, with Plus Two recall boxes; the combined study and structured PDFs (`source/books/prepare/module-4/electrodynamics-module4-{study,structured}.pdf`) are mailed. Record: `source/books/prepare/module-4/process.md`. §13.6 onward and §12.6 onward are outside the module.
- **Module 3 (§8.1.2 and Ch. 9, syllabus items 9–14)**: notes (study and structured) done and mailed. PYQ and model paper done and mailed. Background sections §9.3.3, §9.4, §9.5 are marked background; their figures are cited, not redrawn. Process and lessons: `source/books/prepare/module-3/process.md`, section 6 and 7.

## Rules for every module
- Pre files: each module has its own `pre-physics.html` and `pre-math.html` in `prepare/module-N/`, written before the notes. Base: Kerala SCERT Plus Two. Each item is Recall, Partial or Beyond.
- Notes method: book sources per topic; study (student voice) and structured (formal) bodies per topic; SVG drafts; Codex sheets of four figures, one sheet per run, background runner with logs; combined study and structured PDFs.
- Plus Two recall: where an equation comes from Plus Two, a recall box states the Plus Two form, has the student re-derive the module's form step by step, and saves the result with its book equation number.
- Equations are never lost: every standalone equation is a display block with its book number; one tag per block; a set of equations that share one number is one aligned block with one tag; long display equations are broken to fit the column (over 70 characters); the coverage check must report no MISSING.
- Layout: two-column section text, section titles across the page; text spans about 55–540 pt (no extra margin); no overflow (`check_overflow.py` reports 0 and 0).
- Every section has the same depth and the same process. A thinner first pass is not accepted (process.md section 17).
- Checks before mailing: `check_source.py` OK; `render.py` gives 0 MathJax errors; `check_overflow.py` 0 and 0; `check_equations.py` no MISSING; a page contact sheet and one close look at an equation at a column edge.
- Final PDFs: figures at 480 px JPEG quality 75; no content removed to reduce size; Ghostscript is not used (it made the file larger in the test).

## Rules for every module (added after Module 3)
- **Figure images: Codex is required (rule added 2026-10-15).** Every figure in a section PDF is a Codex image, made in sheets of four by `image-gen/run_sheets_*.py` (one `codex exec` per sheet, log with START and DONE lines), then cropped and flattened by `process_images.py` to `final/*.jpg`. Read each sheet before accepting its crops. SVG drafts in `diagrams/` are reference only; they are not the final figure. A figure that is not made by Codex is a build failure.
- Book sources: transcribe each sheet from the page image, with printed-page headers. Never summarise. Printed page = PDF page − 24 for Chapters 7–9.
- Before writing a section, decide scope and state it in the module process file (default: whole chapter plus the syllabus sections, background marked).
- Before mailing: check `check_source`, `check_equations` (MISSING []), `render` (0 MathJax errors), `check_overflow` (0 and 0), and check the mail log so no PDF is sent twice.
- Codex sheets: wait with a Monitor on the log, not with sleep; read every sheet before accepting crops.

## Rules the user set
- Finish requested work end to end without asking permission for steps already asked for (user, 2026-10-16). Ask only when a fact or access only the user has is missing; name the choice taken in the final message.
- Mail with quickmail: `quickmail <file> ihjas.one@gmail.com`. Send when asked, without asking again. One file per message.
- Notes must not drop content from the book. Student version uses own words; structured version is formal. Both keep equation numbers.
- Do not leave "placeholder" or "my sketch" wording in final files. A missing figure is a build failure, not a placeholder.
- PDF layout: A4, 16 mm page margin. No name / reg-no block and no large code or page label in the header.
- Each question shows its marks. Questions are grouped by marks (A 1–3, B 4–5, C 10) and sorted by topic inside each group, then by date.
- Keep the paper's wording. Source statements printed without their question wording (true/false items) get "State whether true or false:" in front.
- No build notes in the paper. Hint text under each PYQ question is Month Year only; the model papers have no hint text. The model paper has questions on page 1 and the key and mapping on page 2.
- Module 1 papers: H and B boundary conditions (Sec. 6.3.3) are outside the selection (decision D3).
- Model questions cite Griffiths sections and equation numbers only where the excerpt shows them.
- Codex figures: Greek letters are written as symbols in the brief (θ, Φ, μ0), never as words. Read each sheet before cropping; re-run the sheet if a label is wrong.
- Working files go in the session scratchpad, not in the project or the home folder.

## Conversion and process files
- `source/process.md`: overview of the `source/` folder and which process file applies to which task.
- `source/books/prepare/process.md`: overview of the per-module notes folders and the short checklist for a new module.
- `source/books/process.md`: PDF to HTML for the book excerpts (split, transcribe, figures, checks, then mail with a CHECK step). Pointers to the full Griffiths PDF and the page offset.
- `source/books/prepare/module-1/process.md`: the notes method, sections 1–18. Section 13 onward applies to every module (pre files, recall boxes, two-column layout, Module 2 lessons); section 14 equations; 15 Module 2 workflow; 16 size; 17 margins, overflow, depth and checks; 18 the summary checklist.
- `source/books/prepare/module-2/process.md`: Module 2 record, naming, command order, build details, and the superseded files.
- `source/pyq/process.md`: exam-paper method, the Module 2 PYQ and model rules, and the builder scripts.

## Model day paper (from the study-plan screenshot)
- Trigger: the user uploads a screenshot of the study plan and says "create model day paper". Method: `create-model-day-paper.md` (this folder). Builder: `build_model_paper.py`, which takes a JSON paper and writes the HTML and PDF. Each paper is a `model-paper-<N>.json` here.
- Scope is the syllabus's section list (`syllabus.html`), checked against the book excerpt headings. A question whose section is not listed is out, even when the topic sounds right. Do not pad a paper with out-of-scope questions.
- Layout copies the university paper for this subject (APH4CJ203 Electrodynamics I): A 10 × 3 marks (ceiling 24), B 8 × 6 (ceiling 36), C 2 × 10 (answer any one); 70 marks, 2 hours. No name or register-number block.
- Record:
  - `ELECTRODYNAMICS-II-MODEL-PAPER-1` (Module 1, today's five topics): built, mailed twice. The first version had three out-of-scope questions (Clausius–Mossotti §4.4.2; ∇·H = −∇·M §6.3.2; B boundary conditions §6.3.3). They were replaced by an energy-of-dipole question (§4.1), a magnetic-field-inside-matter question (§6.2.3), and a hysteresis question (§6.4.2).

## No shortcuts (rule set 2026-10-15, after Module 4)
- Every rule in this file and in the module's process.md is applied to every section. Do not point to a pre file or another section where the rule asks for something in the notes itself.
- Plus Two recall: where an equation comes from Plus Two, the study and structured bodies each carry a recall box (`box-recall`, "Recall (Plus Two)") that states the Plus Two form. A "Before you start" pointer alone is not enough.
- Equations: every numbered book equation appears as a display block with its book tag (Murugeshan: `13.2(iv)(3)`, `12.5(i)(2)` and so on). Check the coverage script before mailing; it must print MISSING [].
- No placeholders, no "in progress" text, no sheet left unread. Every Codex sheet is read before its crops are accepted, and a wrong label means the sheet is re-run.
- Check each command's result before reporting it. A background wait must match its own result line (for example `DONE sheet N`), not an earlier line.
- Mail: only the two final module PDFs (study and structured), one per message, after all checks pass. Section PDFs are not mailed unless the user asks.
- When a rule is broken, say so in the reply and fix it before the next step.

## Lessons from Module 4 (2026-10-15): read before starting any module

### Scope and sources
- Syllabus items 15–22 (Module IV, transient circuits and AC) use Book 2: Murugeshan, *Electricity and Magnetism*, 10th ed. Full PDF: `GitHub/SSC-FILES/2025/ELECTRODYNAMICS I/Electricity and Magnetism, 10th Edition (Murugeshan R.) (z-library.sk, 1lib.sk, z-lib.sk).pdf`. Printed page = PDF page − 7.
- Decisions taken: §12.2 and §13.4 are in scope (items 16 and 20 name them); §12.4 is background; §12.6 onward and §13.6 onward are outside the module. Say the scope in the module process file before writing.
- "Forth module" means Module IV in the syllabus. Read the syllabus module list before assuming a number.
- Book pages: transcribe each sheet from the page image; check the printed page number in the header against the image; check the first and last words. Misplacing an equation between sheets happened twice (§12.3 eq. 3; a parallel-LC fragment). Keep each equation on the printed page where it appears.

### Order of work (approved, must be followed)
1. Book conversion to HTML (sheets, printed-page headers, contents sheet with scope and gaps).
2. PYQ question paper, then the model paper. Mail the questions PDF.
3. Pre files (`pre-physics.html`, `pre-math.html`), each item Recall / Partial / Beyond.
4. Sections one at a time: bodies (study and structured) → figures → build → checks → mail the study PDF of that section for checking (Modules 1–4 sections, where the user asked for it).
5. Final combined PDFs (study and structured), mailed one per message. From Module 4 the mail is only these two final PDFs unless the user asks for more.

### Figures (rule set 2026-10-15)
- Codex is required for every figure in a section PDF (`image-gen/run_briefs_m4.py`, `run_sheets_m4.py`; one `codex exec` per sheet of four; log with START and DONE lines). SVG drafts are reference only.
- Read each sheet before accepting its crops. A wrong label means the sheet is re-run after tightening that panel's brief (e.g. "slope" must carry no "= k"; "high Q" must point at the narrow curve only).
- Final figure JPEGs for Module 4: 320 px wide, quality 60 (user request: readable is enough). Modules 1–3 keep 480 px, quality 75.
- Codex runs take about 2–3 minutes per sheet. Run them in the background and wait on the result line, not with sleep.

### Equations and tags
- Murugeshan numbers equations per section and restarts numbering in sub-parts. Tag with the book's own numbers: `13.2(iv)(3)`, `12.5(i)(2)`, `13.3(a)(1)`, `13.3(b)(1)`, `13.5(ex2)(1)`. Unnumbered book equations are shown without tags and the body says so.
- Check tags against the book, not against your own count. An off-by-one (book eq. 2 was missing; the second method started at eq. 1 with the emf) was found this way.
- Long equations: the builder breaks them; for a long tag use `class="eq longeq"` or split into `\begin{aligned}` rows keeping the tag on the last row.
- Coverage: `check_equations.py section<N>` must print MISSING []. It checks the book tag list in its EXPECT table; add new sections to that table.

### Checks and what they miss
- `check_source` (escaped quotes, unbalanced blocks, `$$` pairs), `check_equations` (coverage), `render.py` (MathJax error count, gutter words), `check_overflow.py` (equation width against column).
- `check_overflow` does NOT catch a tag that is clipped at the column edge (the resonance equation case). Look at each equation near a column edge at 200 dpi before mailing.
- Gutter flags on full-width headings and source lines are expected; a flagged word inside a body column is a real problem.
- Check every number in worked examples against the book page after writing (worked examples on printed pages).

### Editing source files (lessons from damaged files)
- Never use a greedy regex (`<div ...>.*?TAG`) to replace a block. It matched from the first block in the file and deleted equations between. Locate the block by the exact tag index, from the last `<div class="eq` before it to the first `$$</div>` after it, and assert the count is 1.
- If a file is damaged, rewrite it whole from the text you wrote; do not patch.
- Use exact-string replacements with `assert s.count(anchor) == 1` for recall boxes and inserted displays.

### Plus Two recall (mandatory)
- Where an equation comes from Plus Two, the study and structured bodies each need a `box-recall` ("Recall (Plus Two)") with the Plus Two form. A "Before you start" pointer to a pre file is not a substitute. This was skipped at first and fixed after the user asked.

### PYQ selection and layout (Module 4)
- Pool: all seven papers. Keyword search over the text first, then read each candidate's marks from the section header (Section A 1 mark or 3 marks; Section B 4 or 5; Section C 10 or 11). Mark rule: a 2-mark question goes in group A (1–3 marks).
- Group A (1–3), B (4–5), C (10), in that order; inside each group sort by topic (syllabus order), then by date (year, then April before November). Blank items use `______`; true/false statements get "State whether true or false:". Keep the wording as printed.
- Model paper: about 17 questions on page 1 (for print, reduce question font to 12 px and section title to 13 px so page 1 holds all questions); key and mapping on page 2.
- Each past paper is only checked for Module questions; 2020 Apr had none for Module 4.

### Mailing
- `quickmail` keeps no log. Before mailing, check that the file has not been sent (this session: keep a list of what was mailed). Never resend an earlier PDF because a later edit changed only its image size; say so instead.
- One file per message; a clear subject naming the module, the version (study or structured) and the purpose.

### Working habits that cost time (avoid)
- Wait loops that match an old log line return early. Match the line for the current job (e.g. `DONE sheet 8`), or count occurrences (`grep -c`).
- `sleep` on its own is blocked by the tool; use `timeout N bash -c 'until ...; do sleep 5; done'` or `run_in_background` with a precise condition.
- Chaining `a && b && c &` backgrounds the whole chain, so its output is lost. Run the checks in the foreground, or redirect each step's output to a log and read the log.
- `pkill -f` with a pattern that appears in your own command kills the shell (exit 144). Use `pgrep` and `kill` by PID.
- Do not stop mid-task to report a status that the user has not asked for; but do report honestly when an item was skipped or fixed late.

### Shortcuts are not allowed
- Every rule in this file and the module process file is applied to every section. Do not point to a pre file or another section where a rule asks for something in the notes. Name any rule that was broken, and fix it before the next step.
