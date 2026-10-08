# Stellar map progress and handoff

Task: implement root `codex.md` and `sketch1.png` / `sketch2.png` in small, verified commits.
The user's latest instruction to commit each successful step overrides the brief's no-commit line. Do not push or create branches.

## Progress

- [x] 1. Read both app READMEs and sketches; install pinned dependencies; establish passing baseline.
- [x] 2. Keep questions in one adjacent panel and limit objective choices to 2–3.
- [ ] 3. Add a 2D stellar map, default on mobile, with single selection, grey locked placeholders, selected-star links and a full-screen mobile layout.
- [ ] 4. Remove green completion effects; give locked 3D stars no emission and local reflected light; keep link styling consistent.
- [ ] 5. Run relevant browser/offline checks, refresh build and documentation, record final results.

## Decisions and scope

- Shared implementation: `SSC-V4/flow-library/study-map`. Actual course/browser verification: `SSC-V4/quantum-mechanics/study-map` (Module 3).
- No matching Module 2 screen exists in these apps: skip the conditional IC / My / Q controls and retain the course's true module title.
- Do not implement pre-placing.
- The brief's “only understood stars” and locked-star visibility are ambiguous. Proposed interpretation, asked via async clarification: understood stars glow; unmet-prerequisite concepts are dim placeholders; ready-to-learn concepts remain selectable. Record the user's answer here if received.
- Reading routes must remain usable for learning unknown concepts.
- Original untracked inputs `codex.md`, `sketch1.png`, `sketch2.png` belong to the user; leave them untouched.

## Validation

Step 1: `npm ci --no-audit --no-fund` in both apps completed. Shared `npm test` passed. Quantum `npm test` passed (157 concepts, 16 questions, 3381 formulas, graph/routes/progress/solution checks). The first Quantum run lacked installed KaTeX; dependency installation resolved it.

## Resume

Start at the first unchecked step. Inspect `git status` and recent commits before editing. Update this file in every step commit with tests, decisions and remaining work. Never label a step errorless without reporting the actual checks performed.

Step 2: shared and Quantum `npm test` and Quantum build pass. New `npm run test:stellar` verifies the adjacent question panel and 2–3 choices in real Chrome. Existing `test:map-panel` reaches the panel but fails because it expects the formal note before the current warm-up; this is an outdated pre-existing test assumption, not a panel regression. Use `STUDY_MAP_TMPDIR=/tmp/ssc-map STUDY_MAP_CHROME=/usr/bin/google-chrome` for browser checks. Production build served at http://127.0.0.1:5180/. The dev server has pre-existing dependency scanning warnings, so verification uses the built app.
