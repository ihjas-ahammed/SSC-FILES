# Past Question Paper Manifest: Real Analysis II (MAT5CJ301)

**Course:** Real Analysis II (Semester 5, MAT5CJ301, Calicut University FYUGP BSc Mathematics Honours)  
**Prescribed Text:** *Introduction to Real Analysis* (4th Edition), Robert G. Bartle & Donald R. Sherbert, John Wiley & Sons (2011)  
**Date of Audit & Compilation:** October 13, 2026  
**Status:** Comprehensive archive verified, missing pages recovered, curriculum mapping resolved.

---

## 1. Executive Summary & Investigation Narrative

During the study-kit development for Real Analysis II, an automated agent pipeline running in `~/Documents` was tasked with:
1. Auditing all local Calicut University past papers for completeness.
2. Searching university repositories and external archives for missing years (e.g., 2021–2024 degree exams, supplementary editions, and full descriptive copies).
3. Investigating why Module 2 (Differentiation: Bartle §§6.1–6.2 — Rolle's Theorem, Mean Value Theorem, Carathéodory's Theorem, Darboux's Theorem) had virtually zero past-paper questions in the 6th-semester Real Analysis papers.

Mid-execution, the original agent hit an API rate limit. This manifest documents the resumption, exhaustive search, key discoveries, and the final state of the PYQ repository.

### Key Breakthroughs

1. **Recovery of Complete March 2022 MTS 6B 10 Descriptive Paper (`C 20645`):**
   - In the initial local archive (`source/SEM5_MTS_6B_10_REAL_ANALYSIS_1.pdf`), the descriptive paper only contained **page 1** (Section A, Q1–Q11).
   - Pages 2 and 3 (Section A Q12–Q15, Section B Q16–Q23, and Section C Q24–Q27) were retrieved in full from both the Calicut University CHMK Library official repository (`scholar.uoc.ac.in`) and `previousyearquestion.com`.
   - The recovered file has been saved to `source/SEM5_MTS_6B_10_REAL_ANALYSIS_2022_COMPLETE.pdf` and rendered into `scan/MTS10b-7.png`, `scan/MTS10b-8.png`, and `scan/MTS10b-9.png`. All 16 missing questions are now transcribed into `pdf-src/research/pyq_all.md`.

2. **Resolution of the "Missing Differentiation (Module 2) Questions" Mystery:**
   - Under the old 3-year degree curriculum (**CBCSS 2019** and **CUCBCSS 2014**), Real Analysis was a 6th-semester course (`MTS 6B 10` / `MAT 6B 09`). Its syllabus covered:
     - Module 1: Sets, Algebraic & Order Properties of $\mathbb{R}$ (Bartle Ch 1, 2).
     - Module 2: Completeness Property, Archimedean Property, Density, Intervals (Bartle Ch 2).
     - Module 3: Sequences & Series of Functions (Bartle Ch 8, 9).
     - Module 4: Improper Riemann Integrals (infinite intervals, Beta/Gamma functions).
   - In contrast, **Differentiation (Bartle Chapter 6)** was never taught in 6th-semester Real Analysis! It was taught in Semester 2 Core Calculus:
     - `MTS 2B 02 / MAT 2B 02 Calculus of Single Variable I` (covering Rolle's theorem, Mean Value Theorem, extreme values, monotonicity, critical points).
   - Under the new 4-year **FYUGP** curriculum, Calicut University restructured the course: `MAT5CJ301 Real Analysis II` explicitly incorporates **Module 2: Differentiation (§6.1–6.2)** alongside Continuity (M1), Riemann Integration (M3), and Sequences of Functions (M4).
   - Therefore, past questions on differentiation for Calicut University students come from `MTS 2B 02`, `MAT 2B 02`, and FYUGP `MAT1MN102` (`CALC-24`), complemented by Bartle's starred exercises.

3. **Harvesting of Calicut University DSpace Repository Archives:**
   - Identified and downloaded full digitized bundles from the CHMK Library, University of Calicut (`scholar.uoc.ac.in`):
     - `BSc_Maths_Sem6_2019_2022.pdf` (93 pages, handle `20.500.12818/864`): contains 2022 regular exams for all mathematics core and elective courses.
     - `BSc_Maths_Sem6_syllabus_2019_20.pdf` (51 pages, handle `20.500.12818/629`): contains March 2021 Special Examination papers.

---

## 2. Curriculum Architecture & Cross-Scheme Mapping

| FYUGP Course: MAT5CJ301 Real Analysis II (Sem 5) | Bartle 4e Sections | Old 3-Year CBCSS 2019 Predecessor Course | Old 3-Year CUCBCSS 2014 Predecessor Course | In-Scope Past Questions Found in Archive |
|---|---|---|---|---|
| **Module 1: Continuous Functions** | §5.1, §5.3, §5.4 | `MTS 6B 10 Real Analysis` (Sem 6) & `MTS 5B 06 Basic Analysis` (Sem 5) | `MAT 6B 09 Real Analysis` (Sem 6) | **60 questions** (definitions, boundedness, IVT, root location, uniform continuity, Lipschitz) |
| **Module 2: Differentiation** | §6.1, §6.2 | `MTS 2B 02 Calculus of Single Variable I` (Sem 2) | `MAT 2B 02 Calculus` (Sem 2) | **1 direct MCQ** in RA papers + **14+ core calculus questions** in `MTS 2B 02` / `CALC-24` + Bartle exercises |
| **Module 3: The Riemann Integral** | §7.1, §7.2, §7.3 | `MTS 6B 10 Real Analysis` (Sem 6) | `MAT 6B 09 Real Analysis` (Sem 6) | **77 questions** (Riemann sum, integrability of continuous/monotone functions, FTC I & II, substitution, Leibniz rule, additivity) |
| **Module 4: Sequences of Functions** | §8.1, §8.2.1–8.2.2 | `MTS 6B 10 Real Analysis` (Sem 6) | `MAT 6B 09 Real Analysis` (Sem 6) | **25 questions** (pointwise/uniform limit, uniform norm, Cauchy criterion, continuity of limit function, Dini/integral interchange) |
| **Excluded / Out of Scope** | Ch 1–2 (sets/sup), §6.3–6.4 (L'Hôpital/Taylor), Ch 9 (series tests), Improper Integrals | `MTS 6B 10` Mod 1, 2, 4 | `MAT 6B 09` Mod 1, 2, 4 | **76 questions** (Beta/Gamma, $\int_0^\infty$, Cauchy PV, Weierstrass M-test, series tests) |

---

## 3. Master Inventory of Past Question Papers

### Group A: Real Analysis Direct Papers (MTS 6B 10 & MAT 6B 09)

| # | Paper Tag | File Path | Exam Session | Scheme & Code | Max Marks | Pages | Text / Scan | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | `MTS6B10-25` | `source/SEM5_MTS_6B_10_REAL_ANALYSIS.pdf` | March 2025 | CBCSS 2019, Code `D 120181` | 80 | 3 | Text layer | Official regular paper (2019 admission onwards) |
| 2 | `MTS6B10-26` | `source/SEM5_MTS6B10_REAL_ANALYSIS.pdf` | April 2026 | CBCSS 2019, Code `D 140191` | 80 | 3 | Text layer | Official regular paper (2020 admission onwards) |
| 3 | `MTS6B10-22` | `source/SEM5_MTS_6B_10_REAL_ANALYSIS_2022_COMPLETE.pdf` | March 2022 | CBCSS 2019, Code `C 20645` | 80 | 3 | Scan (clean) | **Fully restored.** All 27 questions across Sec A, B, C |
| 4 | `MTS6B10-22-MCQ` | `source/SEM5_MTS_6B_10_REAL_ANALYSIS_1.pdf` (pp. 1–6) | March 2022 | CBCSS 2019, Code `C 20645-A` | 20 | 6 | Scan | MCQ paper for SDE candidates (20 questions) |
| 5 | `MAT6B09-22` | `source/SEM5_MAT_6B_09_REAL_ANALYSIS.pdf` (pp. 8–10) | March 2022 | CUCBCSS 2014, Code `C 20207` | 120 | 3 | Scan | Descriptive paper (35 questions) |
| 6 | `MAT6B09-22-MCQ` | `source/SEM5_MAT_6B_09_REAL_ANALYSIS.pdf` (pp. 1–7) | March 2022 | CUCBCSS 2014, Code `C 20207-A` | 30 | 7 | Scan | MCQ paper for SDE candidates (30 questions) |
| 7 | `MAT6B09-21` | `source/SEM5_MAT_6B_09_REAL_ANALYSIS_1.pdf` (pp. 5–8) | March 2021 Special | CUCBCSS 2014, Code `C 3008` | 120 | 4 | Scan | Descriptive paper (38 questions) |
| 8 | `MAT6B09-21-MCQ` | `source/SEM5_MAT_6B_09_REAL_ANALYSIS_1.pdf` (pp. 1–4) | March 2021 Special | CUCBCSS 2014, Code `C 3008-A` | 20 | 4 | Scan | MCQ paper for SDE candidates (20 questions) |

### Group B: Mined Calculus & Auxiliary Papers for Module 2 Differentiation

| # | Paper Tag | File Path | Exam Session | Course & Code | Scope & Topics |
|---|---|---|---|---|---|
| 9 | `MTS2B02-21` | `/tmp/ra2/oldpapers/img/SEM1_MTS_2B_02*` | April 2021 | `MTS 2B 02` Calculus of Single Variable I (Code `C 4387`) | Rolle's Theorem, Mean Value Theorem, finding $c$, critical points, monotonicity |
| 10 | `MTS2B02-21-MCQ` | `/tmp/ra2/oldpapers/img/SEM1_MTS_2B_02*` | April 2021 | `MTS 2B 02` Calculus of Single Variable I (Code `C 4387-A`) | Critical points of $(x-1)^2(x-2)$, MVT $(f(b)-f(a))/(b-a)=f'(c)$ |
| 11 | `CALC-24` | `pyq/Mathematics/MAT1MN102/2024` | Nov 2024 | `MAT1MN102` Calculus of a Single Variable (CU-FYUGP) | Modern FYUGP questions on derivative definition, continuity vs differentiability, MVT |
| 12 | `MAT4CJ203-26` | `PYQ/Mathematics/MAT4CJ203/2026/Real-Analysis-1.pdf` | April 2026 | `MAT4CJ203` Real Analysis I (CU-FYUGP, 70 Marks) | Structural blueprint for the 70-mark FYUGP exam model (24 / 36 / 10 marks) |

---

## 4. Question Breakdown & Statistics

| Source Paper | Module 1 (Continuity) | Module 2 (Differentiation) | Module 3 (Riemann Integral) | Module 4 (Sequences of Functions) | Out of Scope (Improper/Series) | Total Questions / Sub-parts |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| `MTS6B10-25` (Mar 2025) | 6 | 0 | 8 | 4 | 9 | 27 |
| `MTS6B10-26` (Apr 2026) | 7 | 0 | 8 | 3 | 10 | 28 |
| `MTS6B10-22` (Mar 2022 Descriptive - Complete) | 8 | 0 | 7 | 7 | 7 | 29 |
| `MTS6B10-22-MCQ` (Mar 2022 MCQ) | 4 | 1 | 4 | 3 | 8 | 20 |
| `MAT6B09-22` (Mar 2022 Descriptive) | 11 | 0 | 12 | 3 | 15 | 41 |
| `MAT6B09-22-MCQ` (Mar 2022 MCQ) | 8 | 0 | 16 | 0 | 6 | 30 |
| `MAT6B09-21` (Mar 2021 Special Descriptive) | 13 | 0 | 11 | 5 | 14 | 43 |
| `MAT6B09-21-MCQ` (Mar 2021 Special MCQ) | 3 | 0 | 11 | 0 | 6 | 20 |
| **Total Transcribed in `pyq_all.md`** | **60** | **1** | **77** | **25** | **76** | **238** |

### Additional Mined In-Scope Questions for Module 2:
- **`MTS 2B 02` (April 2021):** 4 core questions (MVT finding $c$, Rolle's theorem verification, critical point calculation, differentiability at a point).
- **`CALC-24` (Nov 2024 FYUGP):** 6 questions (Q5, Q9, Q10, Q13, Q18, Q20) covering definition of derivative via $\varepsilon$-$\delta$/difference quotients, $f(x)=|x|$, $x^{1/3}$, and MVT inequalities.
- **Bartle Starred Exercises (§6.1 & §6.2):** 14 canonical proof problems (Carathéodory's Theorem, derivative of $|f|$, Darboux Intermediate Value Theorem for derivatives, $e^x \ge 1+x$, Lipschitz bound from derivative bound).

---

## 5. Repository Layout & File Provenance

```
SEM5-PYQ/REAL-ANALYSIS-II/
├── CLAUDE.md                                    # Master kit guide and module records
├── pyq-manifest.md                              # This manifest document
├── syllabus.pdf                                 # Official Calicut University FYUGP MAT5CJ301 syllabus
│
├── source/                                      # Master source PDFs
│   ├── SEM5_MTS_6B_10_REAL_ANALYSIS.pdf         # MTS 6B 10 (March 2025, 3 pp)
│   ├── SEM5_MTS6B10_REAL_ANALYSIS.pdf           # MTS 6B 10 (April 2026, 3 pp)
│   ├── SEM5_MTS_6B_10_REAL_ANALYSIS_1.pdf       # MTS 6B 10 (March 2022, MCQ + p.1 descriptive)
│   ├── SEM5_MTS_6B_10_REAL_ANALYSIS_2022_COMPLETE.pdf # [NEW] Complete 3-page descriptive C 20645
│   ├── SEM5_MAT_6B_09_REAL_ANALYSIS.pdf         # MAT 6B 09 (March 2022, 10 pp)
│   └── SEM5_MAT_6B_09_REAL_ANALYSIS_1.pdf       # MAT 6B 09 (March 2021 Special, 8 pp)
│
├── scan/                                        # High-resolution renders of scanned papers
│   ├── MTS10b-1.png .. MTS10b-6.png             # MTS 6B 10 March 2022 MCQ pages 1–6
│   ├── MTS10b-7.png                             # MTS 6B 10 March 2022 Descriptive Page 1
│   ├── MTS10b-8.png                             # [NEW] MTS 6B 10 March 2022 Descriptive Page 2
│   ├── MTS10b-9.png                             # [NEW] MTS 6B 10 March 2022 Descriptive Page 3
│   ├── MAT09a-01.png .. MAT09a-10.png           # MAT 6B 09 March 2022 pages 1–10
│   ├── MAT09b-1.png .. MAT09b-8.png             # MAT 6B 09 March 2021 Special pages 1–8
│   └── MTS25-*.png, MTS26-*.png                 # Renders for text-layer validation
│
├── pdf-src/
│   ├── research/
│   │   ├── pyq_all.md                           # Master transcription of 238 question rows
│   │   ├── content_m1.md .. content_m4.md       # Pedagogical briefs per module
│   │   ├── bartle_m1.md .. bartle_m4.md         # Textbook extractions
│   │   └── pedagogy_ra.md                       # Teaching & cognitive load methodology
│   ├── figs_m1.py, figs_m2.py, figs_m4.py       # SVG plotting engines
│   └── build.py, render.js, style.css           # Continuous build system
│
└── /tmp/ra2/dl/scholar_uoc/                     # University library archive cache
    ├── BSc_Maths_Sem6_2019_2022.pdf             # CHMK Library 93-page compilation (2022 exams)
    └── BSc_Maths_Sem6_syllabus_2019_20.pdf      # CHMK Library 51-page compilation (2021 special)
```

---

## 6. Guidance for Module 2 (Differentiation) Production

When building the three study PDFs for **Module 2: Differentiation**:
1. **Pyq+Model Paper (`real-analysis-2-module-2-pyq+model.pdf`):**
   - Must follow the FYUGP doubled pattern: 20 short (3 marks, ceiling 48) + 16 paragraph (6 marks, ceiling 72) + 4 essay (10 marks, answer 2) = 40 questions.
   - Tag differentiation questions using:
     - `PYQ CALC-24 Qn`: questions adapted from FYUGP Calculus (`MAT1MN102`).
     - `PYQ MTS2B02-21 Qn`: questions adapted from Calicut CBCSS Calculus (`MTS 2B 02`).
     - `Bartle Ex 6.x.n`: canonical Bartle proof questions (e.g. Carathéodory theorem, Darboux theorem, MVT inequalities).
2. **Prepare PDF (`real-analysis-2-module-2-prepare.pdf`):**
   - Maintain continuous flow without awkward gaps (per user instruction: no lonely figures, break only at section headers).
   - Include a clickable hyperlinked table of contents with page numbers.
   - Use the 16 already crafted SVG figures in `figs_m2.py` (`secant_tangent`, `abs_corner`, `caratheodory`, `interior_ext`, `rolle`, `mvt`, `mvt_proof`, `mvt_fail`, `increasing`, `first_test`, `darboux_fig`, `darboux_jump`, `ineq_sin`, `ineq_exp`, `rolle_roots`).
