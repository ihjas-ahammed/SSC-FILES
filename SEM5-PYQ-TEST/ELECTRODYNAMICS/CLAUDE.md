# Electrodynamics study-PDF kit — working record

This is the ED version of `SEM5-PYQ/OPTICS/CLAUDE.md`, created in `SEM5-PYQ-TEST/ELECTRODYNAMICS` at the user's request. Keep the optics originals intact.

## Workflow

1. Luna collects syllabus, book facts and exact past questions.
2. Sol compresses collection into module and teaching briefs.
3. The primary agent authors all final explanations, papers, answers and figures, builds them, then reviews the learner path and layout.
4. Maintain exact source provenance and never label an original model question as a past question.

Use `README.md` for current output links, source limitations, pattern and rebuild commands. This subject has four theory modules; laboratory work is not presented as a fifth theory module.

## Authoring conventions

- SI throughout. Distinguish electric permittivity ε from emf; conductivity σ from surface charge; phasor j from current i.
- E/voltage blue; B/magnetic response orange; current/energy transport green; axes/normals grey. Figure shapes generated mathematically in `figs_ed.py`.
- Interface normal points from medium 1 to 2. Bound-charge normals point outward from the object.
- Circuit passive sign convention; capacitor current i=dq/dt into its labelled positive plate. Distinguish inductor back emf from passive terminal drop.
- RMS phasor magnitudes for AC calculations; peak field amplitudes for sinusoidal wave formulas unless explicitly marked RMS.
- Keep vacuum radiation momentum formulas and ideal linear-medium energy formulas within their stated assumptions.
- Ideal free LC oscillation and DC-step-driven LC are distinct. Ideal LC has no exponential damping.
- Each printed topic has a P/M/T code and title; every answer has a titled Know-first box. Original 42-question optics papers were changed to 40 questions to double the more recent 2026 supplied paper's actual counts.
- Topic primary targets are unique; extended derivations intentionally reuse supporting concepts. Do not claim that no concept ever reappears.

## State and checks

All four modules have preparation, paper and answer PDFs. `content_m*.py` are canonical; `author.py` produces source HTML; `build.py` uses Chrome/KaTeX; `validate.py` checks outputs. `research/validation.json` records final page counts and checks. `research/pyq_mapping.json` has 13 included source questions; `pyq.json` records all 41 source questions, including exclusions. Earlier research-stage code names/classifications are retained for traceability and are superseded by the final maps.

No email or git commit was requested. The ZIP contains the 12 PDFs and README. All editable kit files and source papers remain alongside it.
