# process.md: exam papers and model papers (Properties of Solids)

## Pool
- No paper with the course title is on disk. The pool is the 12 similar-course papers transcribed to HTML in this folder (table below). They are a working set; the user decides which of them count (CLAUDE.md, open decision 3).
- Papers left out of the pool, if the user decides so: PG papers (their level differs), papers from the Optics and Electrodynamics courses.

### Transcribed papers (`source/pyq/*.html`)
Each HTML keeps the printed wording, marks and sections of one paper. The original PDF is in `pyq/` or `PYQ/` (unchanged). The code is the printed paper code (for example `D 140215`).

| HTML file | Original file (name as on disk) | Course, admission |
|---|---|---|
| `2026-APR-PHY6B11-adm2020.html` | `pyq/Physics/PHY6B11/2026/PHY_6B_11APH_6B_11_STATISTICAL_PHYSICS_SOLID_STATE_PHYSICS.pdf` | PHY 6B 11/APH 6B 11, 2020 admission onwards |
| `2025-MAR-PHY6B11-adm2019.html` | `pyq/Physics/PHY6B11/2025/PHY6B11APH6B11_STATISTICAL_PHYSICS_SOLID_STATE_PHYSICS_SPECTROSCOPY.pdf` | PHY6B11/APH6B11, 2019 onwards |
| `2025-MAR-PHY6B14-adm2019.html` | `pyq/Physics/PHY6B14/2025/PHY6B14_(EL3)_MATERIALS_SCIENCE_1.pdf` | PHY6B14 (EL3) Materials Science, 2019 onwards |
| `2026-APR-PHY6B14-adm2020.html` | `pyq/Physics/PHY6B14/2026/PHY6B14_(EL3)_MATERIALS_SCIENCE.pdf` | PHY6B14 (EL3) Materials Science, 2020 onwards |
| `2023-MAR-PHY6B11-APY6B12-adm2017.html` | `PYQ/Physics/Sem-6/2017/Solid State Physics2017.pdf` (the file name says 2017; the paper is March 2023) | PHY 6B 11/APY 6B 12, 2017–2018 admissions |
| `2023-MAR-PHY6B11-adm2019.html` | `PYQ/Physics/Sem-6/Undated/solid state physics.pdf` (undated file; the paper is March 2023) | PHY6B11/APH6B11, 2019 admission onwards |
| `2022-MAR-PHY6B11-APY6B12-adm2014.html` | `PYQ/Physics/Sem-6/2022/Solid State Physics, spectroscopy and laser physics 2022 March.pdf` | PHY 6B 11/APY 6B 12, 2014–2018 admissions |
| `2020-MAR-PHY6B11-APY6B12-scan.html` | `PYQ/Physics/Sem-6/Undated/Solid state physics spectroscopy and laser physics.pdf` (scan) | PHY 6B 11/APY 6B 12, admission not printed |
| `2019-NOV-PHY3C11-adm2017.html` | `PYQ/Physics/Sem-3/2019/Solid state physics 2019 November(2017 admission).pdf` (scan) | PHY 3C 11 M.Sc. Solid State Physics, 2017 admissions |
| `2021-NOV-PHY3C11-adm2019.html` | `PYQ/Physics/PG-Sem-3/2021/Solid state physics 2021 November (2019 admn).pdf` | PHY 3C 11 M.Sc. Solid State Physics, 2019 onwards |
| `2022-NOV-PHY3C11-adm2019.html` | `PYQ/Physics/PG-Sem-3/2022/Solid State Physics 2022 November (2019 Admission Onwards).pdf` | PHY 3C 11 M.Sc., 2019 onwards |
| `2023-NOV-PHY3C11-adm2019.html` | `PYQ/Physics/PG-Sem-3/2023/Solid State Physics 2023 November (2019 Admission Onwards).pdf` | PHY 3C 11 M.Sc., 2019 onwards |

The two scans (2019 November and the undated 2020 March) were read as page images. Their notes are in each HTML's "Transcription notes".

Conversion notes:
- The 2026-APR-PHY6B11 file is the paper sample that was rendered to PDF and mailed (2026-10-16).
- The other ten PDFs have text layers. Page numbers and barcodes come out in the text; the transcription follows the printed questions and was checked against the page text.
- The 2019 November scan has no legible paper code; it is recorded as "Not legible on the scan" rather than guessed.

## Selection
1. Read each candidate paper's text and marks first (check the layout: many are scans). Keyword search: "crystal", "lattice", "Miller", "Bragg", "Brillouin", "Bloch", "Kronig", "Fermi", "density of states", "semiconductor", "mobility", "drift", "carrier", "diamagnet", "paramagnet", "ferromagnet", "antiferro", "ferri", "polarisation", "susceptibility", "dielectric", "piezo", "ferroelectric", "bonding".
2. Pick only questions on the module's topics. Leave out questions that belong to another module, and record each excluded question's reason in the session notes.
3. Group by marks: A (1–3 marks), B (4–5 marks), C (10 marks and above). Keep the paper's own marks. A 6- or 7-mark question goes in B only if the band rule is confirmed (CLAUDE.md, open decision 4).
4. Sort inside each group by topic (syllabus order), then by date (year, then April before November).
5. Keep the wording. A true/false statement printed without its question wording gets "State whether true or false:" in front. Blank items use `______`.
6. Check every entry against the transcription before building. Two questions were typed from memory in Abstract Algebra and had to be corrected; do not repeat that.

## PYQ layout
7. Build the HTML from a script in the scratchpad. Title block: course and module name only. No name / reg-no block and no paper code in the PDF.
8. Print with headless Chrome (`--print-to-pdf` with `--virtual-time-budget=20000`) so MathJax finishes. Check the page count with `pdfinfo`.
9. Keep section and topic headings with the next line (`break-after: avoid`).
10. Render page 1 to an image and look at it before mailing. Maths must be visible; text extraction does not show it.
11. Output names: `properties-of-solids-module-<n>-pyq.html` and `.pdf`.

## Model paper (missed-topics)
12. After the module PYQ is built, compare its topics with the module's syllabus items. Each item the selection does not reach is a gap.
13. Write model questions for the gaps only, in the same bands (1, 2, 4 and 10 marks). Questions only on page 1; the key and a mapping table on page 2 (`page-break-before: page`). The mapping cites Book 1's section numbers.
14. Model questions have no hint text. The question sheet must not force a fixed height in print, or a blank page follows it.
15. Output names: `properties-of-solids-module-<n>-model-missed-topics-from-pyq.html` and `.pdf`.
16. Say in the reply which gaps were found and which questions cover them. Model questions are drafted, not taken from past papers.

## Mailing
- Mail with `quickmail` only when asked. One file per message. Keep a list of what was sent in the session.

## Code and style (changed 2026-10-16; module PYQ and model changed again the same day)
- Module PYQ and model paper: Electrodynamics II layout. `pyq-head-ed.html` is the head; `build_module_pyq.py` writes sections by band with topic headings and grey source labels; `build_model_paper.py` writes sections (1, 2, 4 and 10 marks), the key sheet and the mapping table. Run both, then `python3 render.py <file>.html --no-check`.
- The Abstract Algebra layout (below) is still used for the 12 transcriptions only.
- The PYQ and model papers use the Abstract Algebra code and layout, copied into this folder: `transcription-head.html` (shared CSS and MathJax), `build_paper.py` (one paper per call), `render.py` (PDF with blank-page drop), `build_model_paper.py` (FYUGP header, four mark sections, key on the last page), and `build_module_pyq.py` (module PYQ with topic headings and grey source labels).
- `build_transcriptions.py` holds the transcribed data for the 12 papers and writes their HTML in this layout. Its data was first written in another layout and then moved here, unchanged in wording.
- The model paper is four sections (1, 2, 4 and 10 marks, 48 in total) to match the mark bands; the key and syllabus mapping follow on the last page.
- Builds: `python3 build_transcriptions.py`, `python3 build_module_pyq.py`, `python3 build_model_paper.py`, then `python3 render.py <file>.html --no-check` for each PDF.
- Earlier PDFs from the first layout were replaced by the house-layout PDFs (mailed 2026-10-16).
