# Quantum Atlas — Module 3

This is the quantum-mechanics content layer for the shared Flow study-map engine. It includes the exact uploaded `Module3.pdf`, 16 unique problems (A: 6, B: 5, C: 5; the 32 printed questions overlapped, so repeats are merged and each problem is its own concept with a full proof, FAQs, a warm-up, guided steps and a keyword try-again), 137 prerequisite notes, reviewed LaTeX and the markdown vault. Five source qualifications remain visible. Formal solutions unlock step by step after hidden-option objective checks.

Reusable UI, graph, animation, navigation, progress, math rendering and offline build code live in `../../flow-library/study-map`; this folder imports them rather than keeping copies. `course.js` supplies the subject labels, groups, compact glyphs, symbols, storage key and links. `src/data/` holds the small topic and question files. `src/main.jsx` is the thin entry. Content authoring/review tools remain in `scripts/` and original extraction/review inputs in `source/`.

## Use and build

```sh
npm ci --prefix ../../flow-library/study-map
npm ci
npm test
npm run build
npm run dev
```

`build/index.html` is the hosted page. `Quantum-Atlas-offline.html` is the identical single-file offline copy; open it directly in a browser. The PDF, fonts and 3D renderer are embedded. The hosted page also offers an offline download in App settings.

The quantum-mechanics parent app opts in to Study Map and lists only Module 3. Other existing projects do not opt in. Published URL: `/phy/quantum-mechanics/study-map/module-3/`.

Progress is private to this browser under the existing `quantum-atlas-v1` key, separate from the parent QM study record (`ssc4.qm.v1`). All knowledge switches start off on a fresh device. Reading, objective recall, solution unlocks and question completion remain separate. Export a progress backup to move devices; reset clears this study map only. The development server can synchronize progress to this folder's vault; hosted and offline builds never contact that local API.

## Verification

- `npm test`: curriculum counts, 1,354 formulas, symbols, no dead links/cycles, ordered deduplicated routes, progress migration and complete formal answer fragments.
- `npm run test:offline`: real Chromium with networking disabled, embedded PDF, persisted progress and 3D notes panel.
- `npm run test:learner`: deterministic simulated learner (written for the old 32-question set; needs updating) (flow verification, not a claim about human memory or marks).

Browser tests accept `STUDY_MAP_URL` and `STUDY_MAP_CHROME`; set `PLAYWRIGHT_BROWSERS_PATH` if using a workspace-local Chrome installation. `tests/setup-course.mjs` configures the shared engine before Node tests import it.

`npm run test:publishing` tests the prepared hosting folder at port 5174 (override with `INTEGRATION_URL`): desktop/mobile catalogue, redirect, progress persistence, reset isolation and both themes of existing subjects. Use `deploy.sh --prepare <directory>` to stage the full site without publishing, then serve its `public/` folder. `STUDY_MAP_TMPDIR` can select a short workspace-local path for Chrome profiles in deeply nested checkouts.

The initial publication preserves the newer hosted QM explanations, matrix previews and teaching diagrams. Existing pages on other subjects were snapshotted and retained byte for byte in the release staging folder; no Study Map configuration was added to them. The release was checked with all 32 learner journeys and all 96 solution checkpoints.

## Navigation and final review

Opening a question always starts at its attempt screen. Read/known statuses, completed questions and practice history stay saved. Prerequisite study can be configured in Settings without a bar above question content. Every concept note also has an understanding switch. Back controls use browser history, so browser Back and Android Back return through the app screens.

Bookmarks in the header (and mobile navigation) form an ordered review notebook: first saved, first reviewed. Each bookmarked concept has personal revision notes, previous/next review controls and a two-column, light-theme A4 PDF download. Bookmarks and revision notes are included in progress backups; whole-app reset clears them. `npm run test:navigation` checks these flows at desktop, 390px and 320px widths.

`npm run test:appearance` verifies theme persistence, compact symbol padding, the central foundation constellation, slow/paused orbits, mobile width, and a real PDF download. Light theme is available in App settings. Both themes and the PDF exporter are included in the standalone offline HTML.

The header follows the selected tab. On mobile, the map heading and subtitle follow the selected concept, and the stellar map starts another 10% more zoomed in on both mobile and desktop (105.6px mobile reading focus and 70.4px desktop). Incoming dependencies are blue, outgoing dependencies are soft red, and completed connections stay green, including hover and circulating particles. `npm run test:selected-map` checks these behaviors at 320px, 390px and desktop widths, in both themes; it also runs against the standalone HTML with networking disabled.


## Notes: how they are written and checked (October 2026 rewrite)

All foundation notes now live in `src/data/notes/*.js` (one file per topic group) instead of the old `concepts/*.json`. Module 4 imports the same files, so a note fixed here is fixed there.

Rules for every note:

- Plain English a beginner can follow. No unexplained jargon; each symbol is explained where it appears.
- A separate warm-up (`pretest`, asked before reading) and after-reading `check`. They must be different questions with different right answers.
- At least two FAQs.
- A `proof` for every theorem-type note, written down to the smallest step. A smaller theorem a proof leans on is its own note with its own proof (for example Basis Size Theorem, Rules for the Adjoint, Commutator Identities, Plancherel Theorem). Proofs follow Griffiths 3e and Zettili 2e (Theorems 2.1-2.5, the Robertson relation, Plancherel) and say which facts are accepted without proof.
- Notes shared with Module 4 must not link to Module 3 exercise notes.
- Every exercise has `question.plain`, shown as "In simple words", and a title with no LaTeX.

Checks: `npm run test:notes` (math renders, warm-up differs from check, FAQ and proof present, hard words and long sentences flagged), `npm run test:numbers` (59 numeric checks of the worked examples), `npm run test:walkthrough` (real Chrome walkthrough; set `STUDY_MAP_TMPDIR=/tmp/x` on deep paths).

## Study route

After the learner switches concepts off, the reading route holds only those concepts plus ancestors the learner also judged as not known. Untouched ancestors and everything under a known concept are skipped (`readingRoute(..., { focused: true })` in the shared engine). Switching off five concepts used to give routes of 43-86 notes; it now gives 5.
