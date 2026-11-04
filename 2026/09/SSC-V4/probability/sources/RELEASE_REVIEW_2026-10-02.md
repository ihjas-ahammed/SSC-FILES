# Probability release validation — 2026-10-02

Live: https://ssc-data-science-qm.web.app/math/probability/

## Included content

- All 1,331 inventoried Ross 10e source items have explicit mappings: chapters 1–10 include examples, Problems, Theoretical Exercises and Self-Test items.
- 1,496 written questions including retained earlier practice; 161 concepts, 150 objective items and 41 past-paper items.
- Plain-language concept statements and proof explanations, with original IDs and proof-step counts preserved.
- Ten built-in GPT-image illustrations, displayed in 18 lessons and 16 proof steps. Captions, alt text and zoom behavior are retained.
- The reading index is generated from actual exercise IDs and titles. Source corrections and ambiguous source typography are documented in MATH_REVIEW.md.

## Checks completed

- `node tools/audit_ross.js --strict`: 1,331/1,331 source-item mappings; zero missing.
- `node tools/audit.js`: structures, stable IDs, references, escaping and answer shapes pass.
- `node tools/check_tex.js`: no delimiter/TeX problems found.
- `python3 tools/coverage.py`, live and mock builds: pass.
- Shell and new JavaScript syntax checks; `git diff --check`: pass.
- Headless phone figure review: 18 lessons, 16 steps, 34 image instances, no broken images, missing alt text, invalid references or horizontal overflow. Desktop/light figure layout was also inspected.
- The final built Markov/Chebyshev lesson rendered at phone width in an isolated test fixture: no application error, MathJax error, broken source images or page overflow. The fixture disabled account synchronization and was not deployed.
- Source comparisons, subpart review and targeted exact/numerical calculations corrected incorrect mappings and solutions. These checks are not independent line-by-line certification of every answer.

## Publication verification

Firebase Hosting deployment completed. The live HTML, reading guide and all ten PNGs returned HTTP 200 and matched the local files byte for byte by SHA-256.

Live HTML SHA-256: `59ba438102573a502e7c55d48c88e1d85775147a9c0f9a542eb952f5f9b48040`.

The deployment script now stages probability diagrams on both live and test routes and runs the strict source-item gate when rebuilding live. Its normal full-site deployment also refreshed the existing Real Analysis and Quantum Mechanics test builds from the committed shared engine.
