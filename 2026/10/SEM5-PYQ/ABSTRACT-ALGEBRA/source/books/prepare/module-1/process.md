# process.md: notes for Abstract Algebra I, Module 1 (Fraleigh 8th ed.)

Built from the Electrodynamics II Module 1 method (`ELECTRODYNAMICS-II/source/books/prepare/module-1/process.md`), with the changes below. Work one section at a time. Mail the study PDF of each section for checking; mail the final two PDFs when the module is complete.

## Steps for each section
1. **Book source.** Copy the section's excerpt sheets into `book-sources/<section>.html`, printed page numbers kept. Check each numbered item (definition, theorem, example, table) against its printed page.
2. **Pre file** (once per module): `pre-math.html`, Plus Two bridge with Recall / Partial / Beyond. Mark statuses that depend on the Kerala text as OPEN until checked.
3. **Bodies.** `<section>.body.html` in two versions: study (student voice, own words, every item kept) and structured (formal, numbered results, the same items in the same order).
4. **Plus Two recall boxes** (`box-recall`) only where the equation or rule comes from Plus Two: Recall, Re-derive (numbered steps), Saved.
5. **Coverage check** `check_numbers.py`: every numbered item in the book source must appear in each body. MISSING [] is required.
6. **Figures.** Section 1 has no figures (tables are typeset in HTML). If a later section needs a figure, follow the Electrodynamics Codex rule, and say so in the section note.
7. **Build** `build_module1.py`: two-column PDFs, section title across the page, boxes kept inside a column.
8. **Render** with `pyq/render.py`: page count, blank pages dropped, MathJax error count 0. The gutter check flags full-width text on a two-column page; look at one rendered page rather than trusting the flags.
9. **Mail** the study PDF of the section; one file per message.

## Differences from the Electrodynamics method
- The book's numbers are theorem, definition, example and table numbers, not equation numbers. Coverage is checked on those numbers.
- Exercises are not part of the notes (the Electrodynamics notes also left out problems). Say so in the meta line.
- The syllabus names the 7th edition; the source is the 8th. The concordance is in the excerpt's contents sheet. Section numbers in the notes are the 8th edition's.

## Section status
- Section 1 (binary operations, printed pp. 11&ndash;16): study and structured bodies; coverage check passed (30 items). Study PDF mailed for checking.
- Section 2 (groups, printed pp. 19&ndash;28): study and structured bodies; coverage check passed (25 items). Historical notes kept as background.
- **Module 1: published.** Files: `abstract-algebra-1-module-1-study.pdf` (5 pages) and `abstract-algebra-1-module-1-structured.pdf` (7 pages), built by `build_module1.py combined`. Both were mailed, one per message.

## Lessons from publication (2026-10-15)
- **Known defect, not fixed (user decision):** the user found one LaTeX display that overflows into the next column in the published module PDF. The exact location was not recorded in the session. The three-matrix display in Section 2.14 was split earlier, but it is not confirmed as the defect. Find it by the width check below before any reprint. The user chose not to fix it now.
- **Width check before publishing.** `render.py` reports MathJax errors and gutter words, not clipped displays. Before publishing a two-column module, check the width of every display block against the column (measure the rendered page at 110 dpi and look at each display's right edge), and split any display that overflows at an `=` or `+`.
- **Coverage check by section.** `check_numbers.py` checks each section against its own book source. Run it after each body is written, and again after each build.
- **Names.** Module files are named `abstract-algebra-1-module-1-{study,structured}.pdf`. The request was typed "abstarct"; the correct spelling was used.
- **Sections in the module PDF.** Each section starts with a title across the page and a line naming the printed pages. Exercises are left out, and the meta line says so.
- **Plus Two statuses.** OPEN items in `pre-math.html` (the determinant test for matrix inverses, and the binary-operation entry) must be checked against the Kerala text before the bridge is called final.
