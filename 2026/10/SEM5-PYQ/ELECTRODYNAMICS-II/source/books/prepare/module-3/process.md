# process.md: Module 3 notes (Griffiths Chapter 8 §8.1.2 and Chapter 9, syllabus items 9–14)

This file is the Module 3 record. The general method is in `../module-1/process.md` (sections 8–18) and the Module 2 record in `../module-2/process.md`. This file lists what is specific to Module 3.

## 1. Scope and status
- Syllabus items 9–14 (electromagnetic waves). Griffiths 5th ed., §8.1.2 (Poynting’s theorem, book pp. 363–367) and Chapter 9 (book pp. 390–441).
- Sections:
  1. §8.1.2 Poynting’s theorem (item 12).
  2. §9.1 waves in one dimension: §9.1.1–9.1.2 (items 9, 10 in part), §9.1.3 (background), §9.1.4 polarization (item 9).
  3. §9.2 electromagnetic waves in vacuum: §9.2.1 (item 10), §9.2.2 (item 11), §9.2.3 (item 13).
  4. §9.3 electromagnetic waves in matter: §9.3.1 (item 14), §9.3.2 normal incidence and §9.3.3 oblique incidence (background).
  5. Background beyond the syllabus list: §9.4 (absorption and dispersion) and §9.5 (guided waves).
- Not included: §8.1.1 (continuity), §8.2 (momentum), Chapter 9 problems (the “More Problems” section is copied in the book source but not worked), and Chapter 10.
- Source: `book-sources/` (one file per topic, transcribed sheet by sheet from the full Griffiths PDF; printed page = PDF page − 24). Pre files `pre-physics.html` and `pre-math.html`.
- Status: book sources done; pre files done; notes (study and structured) done; figures from SVG drafts and Codex sheets; build and checks as in section 3; PYQ and model paper done and mailed (`../../../../electrodynamics-2-module-3-pyq.pdf`, `electrodynamics-2-module-3-model-missed-topics-from-pyq.pdf`).

## 2. Naming
- Book sources: `book-sources/m3-s812-poynting.html`; `m3-sec2-wave1d`, `m3-sec2-bc`, `m3-sec2-polar`; `m3-sec3-wave-eq`, `m3-sec3-plane`, `m3-sec3-energy`; `m3-sec4-linear`, `m3-sec4-oblique`; background `m3-bg-absorption`, `m3-bg-guided`.
- Notes bodies: `<topic>-study.body.html` and `<topic>-structured.body.html` in this folder.
- Figures: SVG drafts `diagrams/m3-*.svg`; Codex sheets `image-gen/sheet-m3-*.png`; crops `image-gen/m3-*.png`; cleaned `final/m3-*.jpg` (480 px, quality 75).

## 3. Order of commands
1. Book sources: transcribed from the full PDF (`/home/ihjas/Documents/GitHub/SSC-FILES/2025/ELECTRODYNAMICS I/Introduction to Electrodynamics (Griffiths, David J.) (Z-Library).pdf`), sheet by sheet, with printed-page headers. Wrapped with `/tmp` helper (the Module 2 head and CSS).
2. Pre files: `pre-physics.html`, `pre-math.html` (done).
3. Study and structured bodies per topic; Plus Two recall boxes where an equation comes from Plus Two (Class 12, Electromagnetic Waves, Ray Optics).
4. `python3 check_source.py m3-*-study.body.html m3-*-structured.body.html` must print OK.
5. `python3 check_equations.py` must print MISSING [] for both study and structured.
6. SVG drafts in `diagrams/` (`make_svgs.py`), contact sheet.
7. Codex briefs in `image-gen/run_briefs_m3.py`; `run_sheets_m3.py` (three sheets: four, four and three figures) in the background, log `sheets-m3.log` with START and DONE lines.
8. Read every sheet (`image-gen/sheet-m3-*.png`) before trusting its crops.
9. `python3 process_images.py` writes `final/*.jpg`.
10. `python3 build_module3.py codex module3` builds `electrodynamics-module3-study.html` and `electrodynamics-module3-structured.html`. It stops on a missing figure.
11. `python3 render.py <html>` (Chrome, PDF, blank-page drop, gutter check, MathJax error count = 0).
12. `python3 check_overflow.py <html>` (DISPLAY 0, INLINE 0).
13. Depth check against Section 1 of Module 2 (see section 4 below).
14. Mail each PDF as its own message to `ihjas.one@gmail.com`.

## 4. Decisions made for Module 3
- Scope: Option A from the question mail (the whole of Chapter 9 and §8.1.2). §9.4 and §9.5 are included as background, not dropped.
- Background sections (§9.3.3, §9.4, §9.5) are marked “background” in each body; the syllabus items are §8.1.2, §9.1.1–9.1.2, §9.1.4, §9.2, §9.3.1.
- Figures: the 11 figures that carry the main argument are redrawn (Codex). The background figures of §9.3.3, §9.4 and §9.5 are cited by number in the text but not redrawn, to keep the run within one session. Say so if they must be added.
- The chapter-end problems are not worked; their equations (9.198–9.208) are shown where the notes use them.

## 5. Checks before mailing (must all pass)
- `check_source.py`: OK.
- `check_equations.py`: MISSING [] for study and structured.
- `render.py`: 0 MathJax errors.
- `check_overflow.py`: DISPLAY 0, INLINE 0.
- One contact sheet of all pages and one page at 110 dpi with an equation at a column edge.

## 6. Mistakes and corrections in this run (kept for the record)
- The first book sources were summaries, not sheet transcriptions. They were rebuilt from the full PDF page by page, with the printed page in each sheet header.
- The question mail described §9.4 as “potentials and gauges” and §9.5 as “wave equations in conductors”. Both were wrong: §9.4 is absorption and dispersion, and §9.5 is guided waves.
- Eq. 9.49 was first written inline; the book displays it boxed.
- Table 9.1 was first summarised; it is now transcribed row by row from the page image (book p. 403).

## 7. Lessons for the next module (from this run)
- Build the book sources first and check them against the page images. Do not write any note body before its sources are checked.
- Write the scope in section 4 before any mail goes out. If a question is put to the user, check each section title in the mail against the book.
- Before mailing: run `check_source`, `check_equations` (MISSING []), `render`, and `check_overflow` (0 and 0). Then check the mail log so nothing is sent twice.
- Use a Monitor on the Codex log to wait for sheets. Read every sheet before accepting its crops.
