# process.md: Module I (crystal structure and X-ray diffraction), syllabus items 1–5

Status (2026-10-16): PYQ and model paper built and mailed. Notes (study and structured) built in this folder; the PDFs are mailed after the checks in section 6 pass. Module II is not started.

## Scope and decisions
- Syllabus items 1–5 (15 h, 20 marks). Book 1 sections named by the syllabus: §1.1–1.13, §2.1–2.2, §2.4, §2.7. The book's §2.5 and §2.6 (properties of the reciprocal lattice; Bragg's law in reciprocal space) are included because they carry the Bragg condition that item 5 needs.
- Left out: §2.3 (X-ray diffraction methods: Laue, rotating crystal, powder), printed pp. 40–45. Not named by the syllabus sections; decision for the user. §2.8 onward (atomic scattering factor) is outside the list.
- Printed page = PDF page − 16 (measured on PDF 18, 20, 21, 36, 40, 48, 51, 62, 70, 74).
- Chapter-end material: the chapter-1 solved examples (printed 25–27), summary (28) and questions (30–33) are in the source; the notes use the solved examples and not the questions.
- Edition of the disk copy is not stated in its front matter; section numbers are matched by content.

## Sources (in this folder and in `source/books/`)
- `source/books/puri-babbar_module1_excerpt.html`: excerpt, contents sheet (edition warning, offset, mapping, gaps), printed pages 1–39 and 46–58.
- `book-sources/bs-1-crystal-structure.html` (printed 1–33), `book-sources/bs-2-xray-reciprocal.html` (printed 34–39 and 46–57).
- Transcribed from the page images; the text layer was used only for prose and was checked against the images for equations. Equation 2.23 (reciprocal of bcc) was corrected to 2.23 from the page image; 2.22 is the bcc primitive set.
- Known points to verify: printed problem 3 is not in the book (numbering goes 2 to 4); problem answers with bars (chapter 1, problems 1 and 2, and long question 7) were read at low resolution and are marked in the excerpt.

## Layout
- `pre-physics.html`, `pre-math.html`: Plus Two bridges (Recall / Partial / Beyond). Statuses OPEN until checked against the Kerala text.
- `m1-sec{1..5}-*-study.body.html` (student voice) and `m1-sec{1..5}-*-structured.body.html` (formal). Sections: 1 lattice (1.1–1.4); 2 symmetry (1.5–1.6); 3 Bravais, directions, planes, spacing (1.7–1.9); 4 simple structures (1.10–1.13); 5 X-ray, reciprocal, Brillouin zones (2.1–2.2, 2.4–2.7).
- `image-gen/run_briefs_m1.py` (36 figure briefs, STYLE string), `image-gen/run_sheets_m1.py` (nine sheets of four; one `codex exec` per sheet; START/DONE log in `image-gen/sheets.log`).
- `final/*.jpg` (480 px, quality 75) from `process_images.py`.
- `template.html` (CSS from the Electrodynamics Module 1 template), `build_module1.py` (two-column builder; a missing figure is a build failure).
- `check_equations.py` (coverage of book equations 1.1–1.10, 2.1–2.34; MISSING must be []), `check_source.py` (body syntax), `check_overflow.py` (display width against the column), `render.py` (PDF, blank-page drop, gutter, MathJax error count).

## Steps (in order)
1. Pre files (done). Book sources (done). Excerpt and contents (done).
2. Bodies: study and structured for each of the five sections (done).
3. Figures: nine Codex sheets (`run_sheets_m1.py`), read each sheet before accepting its crops; re-run any sheet with a wrong label.
4. `process_images.py`, then `build_module1.py codex module1` for the two combined files.
5. Checks: `check_source.py`, `check_equations.py` (MISSING []), `render.py` (0 MathJax errors), `check_overflow.py` (0 and 0), and a look at pages with figures, recall boxes and a column edge.
6. Mail each final PDF as its own message (study, then structured).

## Rules applied (from Electrodynamics II, Modules 1–4, and Abstract Algebra)
- Plus Two recall box wherever the base is Plus Two (dot and cross products, path difference, sphere volume, the plane normal). Each box: Recall, Re-derive (numbered steps), Saved.
- Every numbered book equation appears as a display with its tag, or is cited as "Eq. N" in the text. Equation 2.12 and 2.14 and 2.17 and 2.30 are cited where the book uses them.
- Figures are redrawn by Codex, not copied. The book figure number is in each caption.
- Problems are not included in the notes. Section 2.3 is not included.
