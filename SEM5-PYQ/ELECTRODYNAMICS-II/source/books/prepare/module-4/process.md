# process.md: Module 4 record (syllabus items 15–22, transient circuits and AC)

Method: `../module-1/process.md` (sections 8–18). Conversion: `../../process.md` and `../../../process.md` (PDF to HTML). PYQ: `../../../pyq/process.md`.

## 1. Scope and status
- Book 2: Murugeshan, *Electricity and Magnetism*, 10th ed. Full PDF: `GitHub/SSC-FILES/2025/ELECTRODYNAMICS I/Electricity and Magnetism, 10th Edition (Murugeshan R.) (z-library.sk, 1lib.sk, z-lib.sk).pdf`. Printed page = PDF page − 7.
- Decisions D1 (in scope: §12.2, §13.4 because items 16 and 20 name them), D2 (background / not transcribed: §12.4 as background; §12.6 onward and §13.6 onward outside the module), D3 (same depth as Modules 2 and 3).
- Status:
  - Book conversion: done. `book-sources/murugeshan-module4-excerpt.html`, 33 sheets (PDF pp. 319–328 and 336–358), contents sheet with scope.
  - Checks run: tag balance OK, sheet count 33, `$` count even, no placeholders. Headless render not yet run.
  - PYQ, pre files, sections S1–S6: not started.

## 1b. Figures (rule)
- **Figure images: Codex is required (rule added 2026-10-15).** Every figure in a section PDF is a Codex image, made in sheets of four by `image-gen/run_sheets_*.py` (one `codex exec` per sheet, log with START and DONE lines), then cropped and flattened by `process_images.py` to `final/*.jpg`. Read each sheet before accepting its crops. SVG drafts in `diagrams/` are reference only; they are not the final figure. A figure that is not made by Codex is a build failure.

## 2. Naming
- Excerpt: `book-sources/murugeshan-module4-excerpt.html`. Sheets `pdf-pNNN` with the printed page in each header.
- Source fragments were kept in the session scratchpad and assembled by a script there.

## 3. Order (as approved)
1. Book conversion to HTML (done, pending the headless render check and the mail CHECK step).
2. PYQ question paper, then the model paper. Mail the questions PDF.
3. Pre files.
4. Sections one at a time: S1 (12.1, 12.2), S2 (12.3, 12.4 bg, 12.5), S3 (13.1), S4 (13.2), S5 (13.3, 13.4), S6 (13.5). Each section: bodies, figures, build, checks, then mail its study PDF.
5. Module PDFs, mailed one per message after the checks.

## 4. Lessons carried from Modules 1–3
- Transcribe each sheet from the page image. Check the printed page number in each header against the image, and the sheet's first and last words.
- Write each equation once, in the sheet where it appears on the page. Misplacement happened twice in this run (eq. 3 of §12.3 and the L-C parallel fragment); both were moved to the printed page where they appear.
- Figures are placeholders in the excerpt, with the book caption. Redrawing is a later step, in the sections.

## 5. Progress log
- PYQ question paper: `source/pyq/build_pyq_module4.py` → `module-4-pyq.html` → `electrodynamics-2-module-4-pyq.pdf` (project root). 23 questions (A 12, B 8, C 3) from five papers (2019 Nov, 2021 Nov EM-II, 2022 Apr EM-II). Mailed.
- Model paper: `source/pyq/build_model_module4.py` → `module-4-model-missed-topics.html` → `electrodynamics-2-module-4-model-missed-topics-from-pyq.pdf`. 17 questions on page 1, key and mapping on page 2. Not mailed.
- Pre files: `pre-physics.html`, `pre-math.html` written.
- Section 1 (§12.1, §12.2): bodies (study and structured), four SVG figures (`diagrams/m4-s1-*.svg`, drawn from the book formulas; Codex sheets not used for this section), `build_module4.py section1`, `check_source` OK, `check_equations` (12.1(1)–(4), 12.2(1)–(2)) MISSING [], render 0 MathJax errors, `check_overflow` 0 and 0. Study PDF mailed for checking. Structured PDF built, not mailed.
- Sections 2–6, module PDFs: not started.
- 2026-10-15 (later): figures for Sections 1 and 2 are Codex images (`image-gen/run_sheets_m4.py`, sheets 1–3, read before cropping). Section 1 retried with Codex figures; the Codex version of the Section 1 study PDF was mailed. Section 2 (§12.3, §12.4 background, §12.5): study and structured bodies, 7 Codex figures, `check_equations section2` MISSING [], `check_source` OK, render 0 MathJax errors, `check_overflow` 0 and 0. Study PDF mailed.
- Image size: from Module 4, final figure JPEGs are 320 px wide, quality 60 (user request, "readable is enough"). Sections 1 and 2 rebuilt at this size.
- Not started: Section 3 (§13.1), Section 4 (§13.2), Section 5 (§13.3, §13.4), Section 6 (§13.5), and the combined module PDFs.

## 6. No shortcuts (rule set 2026-10-15, after Module 4)
- Every rule in this file and in the module's process.md is applied to every section. Do not point to a pre file or another section where the rule asks for something in the notes itself.
- Plus Two recall: where an equation comes from Plus Two, the study and structured bodies each carry a recall box (`box-recall`, "Recall (Plus Two)") that states the Plus Two form. A "Before you start" pointer alone is not enough.
- Equations: every numbered book equation appears as a display block with its book tag (Murugeshan: `13.2(iv)(3)`, `12.5(i)(2)` and so on). Check the coverage script before mailing; it must print MISSING [].
- No placeholders, no "in progress" text, no sheet left unread. Every Codex sheet is read before its crops are accepted, and a wrong label means the sheet is re-run.
- Check each command's result before reporting it. A background wait must match its own result line (for example `DONE sheet N`), not an earlier line.
- Mail: only the two final module PDFs (study and structured), one per message, after all checks pass. Section PDFs are not mailed unless the user asks.
- When a rule is broken, say so in the reply and fix it before the next step.

- Final mail for Module 4: two PDFs only, `electrodynamics-module4-study.pdf` and `electrodynamics-module4-structured.pdf` (combined, all sections in order). PYQ question paper and section PDFs already mailed earlier are not resent.

## 7. Status (final)
- Complete. Final mail sent: `electrodynamics-module4-study.pdf` and `electrodynamics-module4-structured.pdf` (15 and 12 pages).
- Checks on the final files: source check OK; coverage MISSING [] for sections 2–6; 0 MathJax errors; overflow 0 and 0 for both combined HTML files.
- Fixed during the final pass: a resonance equation whose tag was clipped at the column edge (not caught by the overflow check; found by a close look), and the sheet 8 bandwidth labels (found on reading the sheet).

## 8. Lessons and rules recorded for Module 4

- Scope and decisions D1–D3 as in section 1; the page map and offset are in section 1 and in the CLAUDE.md lessons.
- Order: book HTML → PYQ (questions mailed, model paper built) → pre files → sections one at a time → combined PDFs. Section study PDFs were mailed for checking during the work; the final mail is the two combined PDFs only.
- Equation tags follow the book: 12.1(1)–(4), 12.2(1)–(2); 12.3(a)(1)–(3), 12.3(b)(1)–(3); 12.5(i)(1)–(4), 12.5(ii)(1)–(4); 13.1 unnumbered; 13.2(ii), (iv), (v) with (1)–(6); 13.2(vi)(1)–(2); 13.3(a)(1)–(7), 13.3(b)(1)–(5), 13.3(res)(1); 13.5(1)–(2), 13.5(ex2)(1)–(5).
- Errors found and fixed in this module: the §13.3 tags off by one (renumbered to the book); a greedy regex that deleted equations in two §12.3/§12.5 files (rewritten whole); a clipped resonance tag not caught by the overflow check (split into aligned rows); missing Plus Two recall boxes in §12.3, §13.1, §13.2, §13.3 and §13.5 (added after the user asked); wrong labels on two Codex sheets (re-run with tighter briefs).
- Figures: Codex for all sections; final JPEGs 320 px, quality 60.
- Full detail: `../../../../CLAUDE.md`, section "Lessons from Module 4".
