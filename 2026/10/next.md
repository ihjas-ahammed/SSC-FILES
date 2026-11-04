# Stellar map progress and handoff

Task: implement root `codex.md` and `sketch1.png` / `sketch2.png` in small, verified commits.
The user's latest instruction to commit each successful step overrides the brief's no-commit line. Do not push or create branches.

## Progress

- [x] 1. Read both app READMEs and sketches; install pinned dependencies; establish passing baseline.
- [x] 2. Keep questions in one adjacent panel and limit objective choices to 2–3.
- [x] 3. Add a 2D stellar map, default on mobile, with single selection, grey locked placeholders, selected-star links and a full-screen mobile layout.
- [x] 4. Remove green completion effects; give locked 3D stars no emission and local reflected light; keep link styling consistent.
- [x] 5. Run relevant browser/offline checks, refresh build and documentation, record final results.

## Decisions and scope

- Shared implementation: `SSC-V4/flow-library/study-map`. Actual course/browser verification: `SSC-V4/quantum-mechanics/study-map` (Module 3).
- No matching Module 2 screen exists in these apps: skip the conditional IC / My / Q controls and retain the course's true module title.
- Do not implement pre-placing.
- The brief's “only understood stars” and locked-star visibility are ambiguous. Implemented interpretation, disclosed via async clarification: understood stars glow; unmet-prerequisite concepts are dim placeholders; ready-to-learn concepts remain selectable. No explicit clarification was received; the user asked to continue.
- Reading routes must remain usable for learning unknown concepts.
- Original untracked inputs `codex.md`, `sketch1.png`, `sketch2.png` belong to the user; leave them untouched.

## Validation

Step 1: `npm ci --no-audit --no-fund` in both apps completed. Shared `npm test` passed. Quantum `npm test` passed (157 concepts, 16 questions, 3381 formulas, graph/routes/progress/solution checks). The first Quantum run lacked installed KaTeX; dependency installation resolved it.

## Resume

Verification and offline build updates completed. All browser tests pass across desktop and mobile form factors (`test:stellar`, `test:selected-map`, `test:map-panel`, `test:offline`, `test:publishing`). Staged all pages, prepared for web deployment and commit/push.

Step 2: shared and Quantum `npm test` and Quantum build pass. New `npm run test:stellar` verifies the adjacent question panel and 2–3 choices in real Chrome. Existing `test:map-panel` reaches the panel but fails because it expects the formal note before the current warm-up; this is an outdated pre-existing test assumption, not a panel regression. Use `STUDY_MAP_TMPDIR=/tmp/ssc-map STUDY_MAP_CHROME=/usr/bin/google-chrome` for browser checks. Production build served at http://127.0.0.1:5180/. The dev server has pre-existing dependency scanning warnings, so verification uses the built app.

Step 3: added a flat SVG/HTML sky with native panning, zoom controls, selected-centred rings, grey disabled locks and single selection. Direct neighbours use solid blue/red lines, two-hop neighbours grey dashes; no unrelated lines. Mobile defaults to 2D and fills the available viewport; its note/question panel sits below the map, desktop beside it. 3D remains selectable. Unit suites and build pass. `test:stellar` passes real Chrome at 320/390/1440px, checking full-height mobile map, no overlapping panel, locks, links, selection and dimension switching. Inspected the 320px screenshot and corrected symbol sizing. No clarification response received; proceeding with the recorded availability/understanding distinction.

Step 4: removed completion halos/cylinders and green path/particle overrides. Understood stars alone emit/glow; other 3D spheres use a bounded shader reflecting their four nearest understood neighbours within 650 world units, with no ambient/key light. Links/particles only appear for the selected star, cross-topic dashed links are grey. Unit tests, build, `test:selected-map` and expanded `test:stellar` pass (both themes, mixed progress, no shader errors). Fixed camera refocus when panel resizing changes the viewport. Tests now read the actual course storage key (v2). Remaining final verification: modernize stale map-panel/offline assumptions (warm-ups, current Part labels), run those checks, document behavior and commit generated builds.

## Commits

- `36db1ee5`: baseline and progress plan.
- `16f848df`: adjacent question panel and at most three answer choices.
- `de795129`: 2D map and full-screen mobile layout.
- `c3680134`: understood-star lighting, selected-only paths, no green completion effects.

## Final verification so far

- Shared `npm test`: PASS (course seam, answer choices, 2D layout/locks, local 3D reflection and selected-only particles).
- Quantum `npm test`: PASS (157 concepts, 16 questions, 3381 formulas, routes, progress and solutions).
- Quantum `npm run build`: PASS; hosted and standalone HTML are byte-identical.
- `test:selected-map`: PASS (3D camera/focus, keyboard path travel, both themes, direction/dotted colors at 320/390/1440px).
- Hosted `test:stellar`: PASS (2D mobile default, locks, single selection, separate questions, no overflow, 2D/3D switching, mixed-progress shader rendering in both themes).
- `test:map-panel`: PASS (desktop note/self-check and desktop/mobile reading-route handoff). Updated stale warm-up assumption; reduced motion only during the initial hover check to avoid orbit instability, restored motion for the route checks.
- `test:offline`: PASS (file:// with networking disabled, embedded PDF, current question sections, solution gating, persistence, real WebGL, notes beside map, vault export, zero HTTP requests). Updated stale course counts/section labels and honored the documented Chrome executable variable.
- Source diff whitespace check: PASS. Generated bundles include a third-party JavaScript template literal with whitespace; preserve those bytes rather than stripping its string contents.
- No deployment/push or branch creation performed. Original untracked task/sketch files remain untouched.
