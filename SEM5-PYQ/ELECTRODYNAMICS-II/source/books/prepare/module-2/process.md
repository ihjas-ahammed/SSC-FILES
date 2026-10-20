# process.md: Module 2 notes (Griffiths Chapter 7, syllabus items 6–8)

This file is the Module 2 record. The general method (book sources, pre files, recall boxes, SVG drafts, Codex sheets, two-column build, checks, sizes) is in `../module-1/process.md`, sections 8–17. Read that file first. This file lists what is specific to Module 2 and the exact order of commands.

## 1. Scope and status
- Chapter 7 of Griffiths (5th ed.), book pp. 298–361 (excerpt sheets 1–64 in `../../Griffiths-5ed_Module2_excerpt.html`).
- Section 1 = §7.1 (electromotive force). Section 2 = §7.2 (induction). Section 3 = §7.3, with §7.3.4 and §7.4 as background (outside syllabus items 6–8).
- Status: sections 1–3 done. Final PDFs: `electrodynamics-module2-study.pdf` (26 pages), `electrodynamics-module2-structured.pdf` (22 pages). Both mailed.
- Problems at the end of each section are not included.

## 2. Naming
- Book sources: `book-sources/m2-s71-ohm.html`, `m2-s72-emf.html`, `m2-s73-motional.html` (Section 1, legacy names); `m2-sec2-<topic>.html` and `m2-sec3-<topic>.html` from Section 2 on.
- Notes bodies: `<topic>-study.body.html` and `<topic>-structured.body.html`.
- Figures: SVG drafts `diagrams/<name>.svg`; Codex sheets `image-gen/sheet-*.png`; cropped `image-gen/<name>.png`; cleaned `final/<name>.jpg`.
- Figure names: `m2-s1-*` (Section 1), `m2-sec2-*`, `m2-sec3-*`. Captions name the book figure number.

## 3. Order of commands (one section at a time)
1. Book sources: split the excerpt sheets for the topic (copy the sheet blocks, keep the printed page numbers).
2. Pre files: `pre-physics.html` and `pre-math.html` (already written for the module; update only if a new topic needs an item).
3. Write the study and structured bodies for each topic. Add a `{{FIG:name}}` marker where each figure goes, and a `box-recall` where an equation comes from Plus Two.
4. `python3 check_source.py <bodies>`: must print OK.
5. SVG drafts into `diagrams/`; render each with `rsvg-convert`; make a contact sheet and fix clipped captions.
6. Codex briefs in `image-gen/run_briefs_*.py` (Greek letters as symbols); run `python3 run_sheets_*.py` in the background; watch `sheets-*.log` for `START`/`DONE`/`RUN_DONE`. About 2 minutes per sheet.
7. Look at every sheet (`image-gen/sheet-*.png`) before trusting it.
8. `python3 process_images.py` (writes `final/*.jpg`, 480 px, quality 75).
9. `python3 build_module2.py codex module2` builds the two combined HTML files. It stops if a figure is missing, and prints each long equation it broke.
10. `python3 render.py electrodynamics-module2-study.html` and the same for `structured`: PDF, blank-page drop, gutter check, MathJax error count (must be 0).
11. `python3 check_overflow.py <html>` (must be `DISPLAY 0 INLINE 0`), and `python3 check_equations.py m2-s7` / `m2-sec2` / `m2-sec3` (no MISSING).
12. Contact sheet of all pages, and one 110 dpi look at a page with an equation at a column edge.
13. Mail each PDF as its own message with `quickmail <pdf> ihjas.one@gmail.com -s "<subject>"`.

## 4. Build details
- `build_module2.py` takes `codex|svg` and `section1|section2|section3|module2`. Section builds write `m2-<section>-<kind>.html`; the `module2` build writes the two combined files, with a full-width bar before each section.
- Long display equations (over 70 TeX characters) are broken into aligned blocks; equations that have several parts separated by `\qquad` become gathered lines; blocks that cannot be broken get `longeq` (smaller). The build prints which ones.
- Captions are in the `CAP` table in `build_module2.py`. Add new figures there.

## 5. Known leftovers (kept, not used by the current build)
- `build_section1.py`, `add_recall.py`: earlier scripts for section 1 only. Superseded by `build_module2.py`.
- `structured-1/2/3.body.html`, `student-1/2/3.body.html`: first section-1 bodies (before the depth rewrite). Superseded by `m2-s7*` bodies.
- `m2-section1-*.html/.pdf`: section-1-only outputs. Superseded by the combined module files.
- `image-gen/sheet-2-v1-theta-word.png`: first sheet 2, kept as a record of the "theta" error.
- `image-gen/__pycache__`, `sheets-sec23.log`, `run-sec23.out`: run records.
- Delete any of these only when the user asks.
