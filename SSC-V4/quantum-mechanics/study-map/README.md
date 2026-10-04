# Quantum Atlas — Module 3

This is the quantum-mechanics content layer for the shared Flow study-map engine. It includes the exact uploaded `Module3.pdf`, all 32 questions (A: 15, B: 13, C: 4), 155 prerequisite notes, 96 answer checkpoints, reviewed LaTeX and the markdown vault. Five source qualifications remain visible. Formal solutions unlock step by step after hidden-option objective checks.

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
- `npm run test:learner`: deterministic simulated learner through all 32 questions (flow verification, not a claim about human memory or marks).

Browser tests accept `STUDY_MAP_URL` and `STUDY_MAP_CHROME`; set `PLAYWRIGHT_BROWSERS_PATH` if using a workspace-local Chrome installation. `tests/setup-course.mjs` configures the shared engine before Node tests import it.

`npm run test:publishing` tests the prepared hosting folder at port 5174 (override with `INTEGRATION_URL`): desktop/mobile catalogue, redirect, progress persistence, reset isolation and both themes of existing subjects. Use `deploy.sh --prepare <directory>` to stage the full site without publishing, then serve its `public/` folder. `STUDY_MAP_TMPDIR` can select a short workspace-local path for Chrome profiles in deeply nested checkouts.

The initial publication preserves the newer hosted QM explanations, matrix previews and teaching diagrams. Existing pages on other subjects were snapshotted and retained byte for byte in the release staging folder; no Study Map configuration was added to them. The release was checked with all 32 learner journeys and all 96 solution checkpoints.

## Navigation and final review

Opening a question always starts at its attempt screen. Read/known statuses, completed questions and practice history stay saved. The Study prerequisites switch is available throughout a question; Edit prerequisite switches reopens its checklist. Every concept note also has an understanding switch. Back controls use browser history, so browser Back and Android Back return through the app screens.

Bookmarks in the header (and mobile navigation) form an ordered review notebook: first saved, first reviewed. Each bookmarked concept has personal revision notes, previous/next review controls and a Markdown download. Bookmarks and revision notes are included in progress backups; whole-app reset clears them. `npm run test:navigation` checks these flows at desktop, 390px and 320px widths.
