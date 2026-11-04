# process.md: Module II (free electron theory and band theory), syllabus items 6–11

Status (2026-10-16): PYQ (17 questions) and model paper (17 questions, 46 marks) mailed. Study and structured notes built and mailed. Book text extracted with Codex and checked against the page images (method: `source/books/process.md`, "Method used from Module II").

## Scope
- Book sections: §5.1–5.3 (printed 151–174, including solved examples 5.1 and 5.2, the chapter questions and problems) and §6.1–6.5 (printed 175–198). Section 5.3.1 (electronic specific heat) is in the module.
- Outside: chapter 7 (semiconductors, printed 199 on), which is Module III.
- Printed page = PDF page − 16.

## Sources
- `book-sources/bs-3-free-electron-theory.html` (chapter 5), `book-sources/bs-4-band-theory.html` (chapter 6): Codex transcription, assembled from four chunks (`part-A` to `part-D`, pages 151–198).
- `source/books/puri-babbar_module2_excerpt.html`: excerpt with the contents sheet (method, edition warning, mapping, gaps).

## Verification record
- Codex first ran into stopped chunks (about eight pages each). The page-id check found this; the chunks were run again until each covered its range.
- Checked against the page images: printed pp. 151–154 and 186 (equations 5.1–5.11, 5.28–5.30, 5.51, 6.41–6.43) and 6.39 (checked from the image of 183).
- Two findings from the check: equation 5.51 is C_V ≅ (3/2) N k_B (T/T_F), which the earlier hand-written excerpt had wrong; and the book's own second zone is printed as "−π/a to 2π/a", kept as printed.

## Notes
- `m2-sec1-drude`, `m2-sec2-sommerfeld1d`, `m2-sec3-fermi3d`, `m2-sec4-bloch-kp`, `m2-sec5-velocity-metals`: each in study and structured versions.
- `add_book_equations.py` lists the book equations a section does not display, with their printed LaTeX from the transcription; `check_equations.py` must print MISSING [] for both versions.
- `image-gen/run_briefs_m2.py` (16 figure briefs), `image-gen/run_sheets_m2.py` (four Codex sheets, all read before cropping; `final/*.jpg` at 480 px).
- `build_module2.py codex module2` builds the two combined files; `render.py`, `check_overflow.py` (0 and 0), `check_source.py`.

## Decisions
- The UG pool holds only two questions on this module, so the PYQ uses the M.Sc. solid-state papers (weightage kept as printed). The mapping and the labels say so.
- Long multi-part displays are rewritten as aligned rows so that they fit the column.
