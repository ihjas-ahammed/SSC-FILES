# process.md: exam papers and model papers (Abstract Algebra I)

## Pool
- All Abstract Algebra papers on disk, checked for questions on the module's topics:
  - `SSC-FILES/pyq/Mathematics/MAT5CJ302/2024/`, `2025/`
  - `SSC-FILES/PYQ/Mathematics/Sem-5/` (2015, 2018, 2019, 2021, 2022, Undated)
  - `SSC-FILES/ssc-v3/old_degree/mathematics/SEM5/MAT5CJ302_ABSTRACT_ALGEBRA_I/`
- Theory of Equations questions are not part of this course. Leave them out.
- Keep a list of which papers were checked and which had no questions for the module. Record it in the module's process file.

## Selection
1. Keyword search over the text first (for example "group", "subgroup", "cyclic", "coset", "homomorphism", "ring", "field", "integral domain"). Then read each candidate's marks from its section header.
2. Pick only questions on the module's topics. Leave out questions on other modules.
3. Group by marks: A (1–3 marks), B (4–5 marks), C (10 marks). Keep the paper's own marks. Confirm the band boundaries with the user before the first paper (see CLAUDE.md, open decisions).
4. Sort inside each group by topic (in the syllabus order), then by date (year, then April before November).
5. Keep the wording. A true/false statement printed without its question wording gets "State whether true or false:" in front. Blank items use `______`.

## PYQ layout
6. Build the HTML from a script in the scratchpad. Title block: course and module name only. No name / reg-no block and no paper code in the PDF.
7. Print with headless Chrome (`--print-to-pdf` with `--virtual-time-budget=20000`) so MathJax finishes. Check the page count with `pdfinfo`.
8. Keep section and topic headings with the next line (`break-after: avoid`).
9. Render page 1 to an image and look at it before mailing. Maths must be visible; text extraction does not show it.

## Model paper
10. Questions only on page 1, with section headings. Each question shows its marks. No hint labels in the model paper.
11. Answer key and syllabus mapping on page 2 (`page-break-before: page`). The mapping cites the book's section numbers.
12. No "how the paper was made" text in the paper. Notes about the method go in the module's process file.
13. Regenerate the HTML from the script after any change. Do not patch the HTML by hand.
14. The question sheet must not force a fixed page height in print, or a blank page follows it.

## Mailing
- Mail with `quickmail` only when asked. One file per message. Check the mail log so no file is sent twice.


## Findings from the Abstract Algebra PYQ conversion and the model paper (added 2026-10-15)

**Sources and duplicates**
- The same paper often appears under several names and in several folders. Compare the paper code (the `D nnnnn` code on page 1 of each paper) and the text layer, not only the file name. Copies with the same code and different scans (for example two November 2024 copies with different scan numbers) are one paper: transcribe once and note the duplicate.
- A single file can hold several papers. Mixed compilations were found (analysis papers and algebra MCQ papers in one 15-page scan). Split by the code printed on each page, transcribe only the course's papers, and say what was left out.
- Scanned papers (no text layer) must be read as images. Tesseract on this machine has no English language data (only `afr` and `osd`), so OCR is not an option. Make contact sheets of 4 pages at a time to triage a mixed file, then read the chosen pages at full resolution.
- Check the header of every page, not just the first. Mixed files change paper partway through.

**Transcription**
- Transcribe from the page images. Use a builder script with the paper as data (`build_paper.py` in this folder takes a data file: sections, questions, sub-parts, and footers). It checks that question numbers run in sequence.
- Keep the printed wording and typos; mark a printed garble with `[as printed]`, and grey a symbol that is missing from the print. Report each of these in the reply.
- Where the paper's header gives no code, use the code printed on the last page and say so.

**Model papers (FYUGP layout)**
- Layout template: `PYQ/Mathematics/FYUGP-Sem-2/2025/Calculus and Matrix Algebra 2025 April.pdf` (CUFYUGP, MAT2MN102). Copy the header block (exam title, subject, course line, time and maximum marks), and the sections as bordered tables with a question-number column, the question, and the marks.
- Section pattern used: A is 3 marks each with all questions answerable and a ceiling of 24; B is 6 marks with a ceiling of 36; C is choose one of two at 10 marks. Total 70.
- The builder is `build_model_paper.py` in this folder. It writes the HTML; render it with `render.py` and check the page count and the rasterized pages.
- Our rule for generated papers: no name or register-number block and no paper code in the PDF. Keep those lines out even though the FYUGP template has them.

**Mailing**
- Mail the PDF of a model paper (the HTML is the source). Quickmail keeps no log: keep a list of what was sent in the session.

## Module PYQ: topic split, marks bands, and source labels (added 2026-10-15)

- Split the module into topics in syllabus order before selecting. Abstract Algebra I Module 1 uses five: binary operations (items 1–2); isomorphic binary structures and group isomorphisms (3–4); groups, definitions and examples (5); elementary properties of groups (6); finite groups and group tables (6).
- Select by topic. Leave out questions that need a later module's ideas (subgroups, cosets, cyclic groups, permutations and cycles, orders of elements, rings and fields, homomorphisms, Lagrange, Cayley). Record each excluded question's reason in the session notes; do not silently drop questions.
- Leave out MCQ papers from a module PYQ, because their format differs. Keep them in the paper inventory.
- Marks bands: A 1–3 marks, B 4–7 marks, C 10 marks and above. The source papers use 1, 2, 3, 4, 5, 6, 7, 10 and 13 marks, so 6- and 7-mark questions go in B. Say this in the reply.
- Sort inside each band by topic (syllabus order), then by year and month (earlier first). Number the questions across the bands.
- Each question carries its source month and year as a grey shadow label (`q-src`), copied from the Electrodynamics II Module 2 PYQ layout. Keep the paper's wording and the printed marks in brackets.
- Build from a script that reads the transcribed paper data, not from hand-typed copies, so the wording matches the transcription.
- Output: `abstract-algebra-1-module-1-pyq.html`, rendered to `abstract-algebra-1-module-1-pyq.pdf`. The PDF is mailed with that name as the subject.

## Missed-topic model papers (added 2026-10-15)
- After the module PYQ is built, compare its topics with the syllabus items of the module. Each syllabus topic the selection does not reach is a gap.
- Write the model questions for the gaps only, in the same bands as the PYQ (1 mark, 2 marks, 4 marks, 10 marks), with the key on page 2 and a syllabus mapping table (topic, book section, model questions).
- Name the file `<course>-<module>-model-missed-topics-from-pyq.pdf`, following the Electrodynamics II naming.
- Model questions have no hint text. The question sheet fits on page 1 (no fixed sheet height in print), and the key is on page 2.
- Say in the reply which gaps were found and which questions cover them. The questions are drafted, not taken from past papers.

## Findings from Module 2 (added 2026-10-16)
- Theory of Equations papers (2021 to 2023) were searched. Their algebra questions are in the pool; their theory-of-equations questions are not. This follows CLAUDE.md, which supersedes the earlier "leave them out" line above.
- Gap method: after selection, list the 8th-ed items the module names and the sections the selected questions reach. Write model questions only for the gaps (16 for Module 2, bands 1, 2, 4 and 10 marks), with the key and a mapping table on page 2.
- Questions with a printed garble are kept and marked [as printed] (2018 C31; 2022 B22).
- Questions that need a later module's ideas are left out and listed in the session notes (for Module 2: Lagrange, cosets, normal subgroups, rings, direct products, even and odd permutations, orbit counting).

## Status (2026-10-15)
- Module 1 PYQ (topic split, bands A 1–3, B 4–7, C 10+): built and mailed.
- Module 1 missed-topic model paper: built and mailed.
- FYUGP-layout model paper (Calculus and Matrix Algebra template): built and mailed.
- Transcribed past papers: 12 files, one per distinct paper (see `CLAUDE.md`).

## Findings from Modules 3 and 4 (added 2026-10-16)
- **Module 3 PYQ (35 questions):** topics permutations and cycles, orbits, even and odd permutations, cosets and index, Lagrange. Bands A 16, B 13, C 6. Questions that need normal subgroups or factor groups are left out; the coset and Lagrange questions are kept.
- **Module 4 PYQ (34 questions):** homomorphisms and kernels; the first (fundamental) homomorphism theorem; rings, subrings and units; zero divisors, integral domains and fields; characteristic and Z_n. Left out: second isomorphism theorem (2023 A13, 2025 C27), field of quotients (2021 C35, Module V), factor-group questions (2022 A13, 2023 B11). Bands A 14, B 16, C 4.
- **Wording check.** Two questions were first typed from memory and corrected to the printed wording (2022 commutative ring; 2023 Z_n units). Check every entry against the transcription before building.
- **Model papers** (Module 3: 16 questions; Module 4: 16 questions). Keys were checked line by line against the mathematics; two key lines were rewritten because they were muddled.
