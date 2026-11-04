# process.md: exam papers and model papers (Convex Optimization)

## Pool
- **No Convex Optimization paper is on disk.** Confirm with the user before any paper is marked as a course paper.
- Pool of the nearest courses (all on disk under `GitHub/SSC-FILES/`):
  - Linear Programming, Sem 5: `pyq/Mathematics/MAT5EJ306/2025/` (MTS 5B 08, Nov 2025, transcribed); `PYQ/Mathematics/Sem-5/2021/Linear Programming 2021 November (2019 Admission).pdf`; `PYQ/Mathematics/Sem-5/2022/Linear Programming 2022 November (2019 Admissions Only).pdf`; `.../2022/Linear Programming 2022 November (2020 Admission Onwards).pdf`; `PYQ/Mathematics/Sem-5/Undated/Linear Programming.pdf`; `.../Undated/LINEAR PROGRAMMING.pdf`.
  - Linear Programming, Sem 6 (MAT 6B 13 E02): `PYQ/Mathematics/Sem-6/2022/Linear Programming 2022 March (2014-2018 admn).pdf`; `PYQ/Mathematics/Sem-6/Undated/LINEAR PROGRAMMING.pdf`. The 2020 March paper has no text layer (scan).
  - Multivariable calculus (Module I): `pyq/Mathematics/MAT3CJ201/`, `PYQ/Mathematics/Sem-6/Undated/`, `PYQ/Mathematics/PG-Sem-3/2022-2023/`.
  - Mathematical economics (Lagrange multipliers): `pyq/Mathematics/MAT3MN206/2024/` and `2025/`.
- Temp copies for the working set go in the scratchpad (`pyq-temp/`, one subfolder per paper), checked byte-for-byte against the original.

## Topic search (done 2026-10-16)
1. Search each syllabus module's topic terms across the pool (gradient, Hessian, convex, hyperplane, simplex, dual, Lagrange and so on). Record the paper code and printed number of each hit.
2. Read the full wording of each hit from the text layer. Check any item with a garbled symbol or tableau against the page image.
3. Record gaps for each module: no paper on disk covers quadratic, geometric programming, vector optimization, convex functions, quasi-convexity, KKT, saddle point or the theorems of alternatives.
4. The result list is kept in the session scratchpad until the user asks for it in the project.

## Transcription (one paper)
1. Read the page images, and check every question's wording against them. Tableaus and matrices are read from the image, not the text layer.
2. Build with `build_paper.py` (data file in the scratchpad). The data file defines `DATA` with `file`, `title`, `header` (code, pages, title lines, time, max) and `pages` (blocks: `sec`, `q`, `sub`, `foot`, `turn`).
3. Render with `render.py <file.html>` (copy `pyq/` code). Check the rendered PDF pages as images. The gutter warnings in `render.py` are false positives for single-column papers (centred headings cross the middle).
4. Paper code (for example `D 130229`) and the printed title stay in the transcription. Generated question papers have no name block and no code.
5. Output names: `YEAR-MON-COURSE-ADM.html` and `.pdf` (for example `2025-NOV-MTS5B08-LINEAR-PROGRAMMING.html`).

## Model papers and module papers (not started)
- Module papers and model papers are built after the module's topic list is accepted. Use the Electrodynamics II head (`pyq-head-ed.html`) and write a builder per module, following the Properties of Solids pattern (section bands by marks, grey source labels, key and mapping on page 2).

## Mailing
- Mail with `quickmail` only when asked. One file per message. Keep the list in `../CLAUDE.md`.
