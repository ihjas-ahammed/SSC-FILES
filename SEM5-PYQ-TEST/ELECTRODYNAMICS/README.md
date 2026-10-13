# Electrodynamics II — Semester V study edition

Four theory modules, each with a preparation book, a PYQ/model practice paper and an answer key. Pages are 100 × 200 mm for phone reading. Start with a module's **prepare** PDF, try its **pyq+model** paper, then use the **answerkey**.

| Module | Syllabus scope | Prepare | Practice | Answers |
|---|---|---|---|---|
| 1 | Electric and magnetic fields in matter | [Open](electrodynamics-module-1-prepare.pdf) | [Open](electrodynamics-module-1-pyq+model.pdf) | [Open](electrodynamics-module-1-answerkey.pdf) |
| 2 | Induction and Maxwell equations | [Open](electrodynamics-module-2-prepare.pdf) | [Open](electrodynamics-module-2-pyq+model.pdf) | [Open](electrodynamics-module-2-answerkey.pdf) |
| 3 | Electromagnetic waves | [Open](electrodynamics-module-3-prepare.pdf) | [Open](electrodynamics-module-3-pyq+model.pdf) | [Open](electrodynamics-module-3-answerkey.pdf) |
| 4 | Transients and alternating currents | [Open](electrodynamics-module-4-prepare.pdf) | [Open](electrodynamics-module-4-pyq+model.pdf) | [Open](electrodynamics-module-4-answerkey.pdf) |

Each paper contains **40 questions: 20 short, 16 problems/explanations and 4 essays**, with 160 questions across the set. Each answer links to the preparation topic by code and title. The preparation books include school-level physics and mathematical bridges, original computed diagrams, explained derivations, worked problems, self-checks and formula sheets. Topic codes restart in each module.

## Sources and exam format

- Authority for coverage: the supplied 2024 CU-FYUGP BSc Physics Honours **Electrodynamics II, Semester V** syllabus. Its theory units 1–22 are mapped in each preparation book. Module V is laboratory work and is outside this theory kit.
- Main reference: Griffiths, *Introduction to Electrodynamics*, **5th edition**, checked against the local PDF, for Modules I–III.
- Circuit reference: Murugeshan, *Electricity and Magnetism*, **10th edition**, Chapters 12–13, for Module IV. LR decay and parallel LC are explicit syllabus topics even though the subsection list omits their corresponding §§12.2 and 13.4.
- The two available question papers are **Electrodynamics I**, November 2025 CBCSS and April 2026 FYUGP. They are preserved under `source/`. **No direct ED II paper was found in the supplied collection.** Thirteen overlapping source questions are represented with explicit legacy/prerequisite labels, and any wording or mark changes are labelled.
- The practice format doubles the latest supplied ED I paper: A = 20 × 3, ceiling 48; B = 16 × 6, ceiling 72; C = choose 2 of 4 × 10. Maximum 140 marks, suggested 4 hours. This is a constructed practice format, **not a verified official ED II exam pattern**.
- The syllabus filename contains PHY4CJ203, but that code is printed as the ED I prerequisite. The target ED II course code is not inferred from the filename.

The complete source inventory and final exclusions are in [pyq.json](pyq.json), [scope audit](pdf-src/research/scope_audit.md) and [source mapping](pdf-src/research/pyq_mapping.json). SHA-256 source hashes are in [source_manifest.json](source_manifest.json).

## Rebuilding

The editable content is in `pdf-src/content_m1.py` through `content_m4.py`. The assembly script writes HTML fragments, then the inherited optics build kit renders local KaTeX and prints PDFs through headless Chrome. No network/model calls occur during the build.

```bash
cd pdf-src
python3 author.py
python3 build.py                 # all 12 PDFs
python3 build.py 2 prepare       # one output
python3 validate.py             # structure, sources, numeric checks and PDF geometry
python3 tools/review_sheets.py   # every page rendered to contact sheets
```

Requirements: Python 3, PyMuPDF (`fitz`), Pillow, Node.js, `google-chrome`, and `pdfinfo`. `audit_layout.py` additionally uses `websocket-client` and a separate Chrome debugging session on localhost:9337. The build uses the included local KaTeX assets. `author.py` is the canonical content assembly; edit the content files, not generated HTML.

Research briefs use their original atom codes; the final printed teaching codes and question map are in `coverage_m1.json`–`coverage_m4.json`. Suggested marking rubrics are study guidance rather than official marking schemes.

## Model workflow and review

Luna (`gpt-6-luna`) performed syllabus, textbook and past-paper collection. Sol (`gpt-6-sol`) prepared teaching/maths research and four module briefs, replacing the optics kit's Haiku/Sonnet roles as requested. The main agent authored the study content, diagrams, final source decisions and layout revisions. Sol checked the initial Module I draft; a later additional review attempt hit the model's usage limit, so the main agent completed the final checks.

Validation records are under `pdf-src/research/`: question/topic integrity, 13 mapped source questions, 23 recomputed numerical results plus LC energy identities, zero KaTeX rendering errors, formula-width checks and PDF page geometry. Every page was rendered for visual layout review; dense mathematical and diagram pages were inspected at larger size. This is a study edition with original explanatory solutions, not an official university answer key.
