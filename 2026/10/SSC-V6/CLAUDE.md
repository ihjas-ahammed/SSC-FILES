# Study kits for SEM5 physics and maths: status and how to work

Applies to every physics and maths subject in SEM5 (Quantum Mechanics I, Optics, Electrodynamics II, Abstract Algebra I, Real Analysis II, Complex Analysis I, Convex Optimization). Each subject makes a study kit per module. Work one subject and one module at a time for content changes. The user's current instruction is the scope: **the Optics audit is cancelled; its content and renderer changes were reverted at the user's request. Do not resume or reapply that audit.** Subject study data stays separate.

## 2026-10-27 midday: rebuild STOPPED by user, wrapped up; revision cards added

- User (exam in 3 h) asked to stop the Optics rebuild where it was and publish. Module 4 assembled with what existed:
  unit17–22 points cards (Haiku), scenes.json, new figure derivations deriv-test.json (17, 18), t1.json + t2.json (21),
  and the old live derivations for units 19, 20, 22 (`rebuild/m4/deriv-legacy.json`). Plan: `rebuild/m4/plan.json`
  (sources relabelled to Brij Lal ch. 20). Brewster derivation (unit 18) and old unit-21 phase-delay card dropped.
  build.py --check 0 errors; deployed with ./deploy.sh. Modules 1–3 rebuild NOT done; study-plan fix/ED exam date NOT done.
- spherical.html: added Newton's rings and Michelson focused cards (`data/newton-rings-preview.json`,
  `data/michelson-preview.json`, generator /tmp/rev/mk_nm.py not kept). Merge order now: … thinfilm newton-rings michelson single-slit …
  Mailed to ihjas.one@gmail.com.
- Revision cards: `SSC-V6/revision/` — `src/build.py <modules>` builds `revision/optics/N/index.html` (two cards per unit:
  hand-written theory points in `src/content_mN.py` + key derivation pulled from live data.json or a *-preview.json).
  Published at /revision/optics/1..4. Main deploy script now stages `SSC-V6/revision/` (excluding src/).

## OPTICS FULL REBUILD — active task (started 2026-10-27). READ THIS FIRST.

User request (2026-10-27, supersedes the "Optics audit cancelled" note for this rebuild): rebuild the whole Optics
main deck (`optics-module-1/study-match/data/data.json`), **one module at a time**, starting with Module 4:
- Concept cards: **clear points, no long descriptions** → Haiku subagents (`model: haiku`).
- **Every syllabus derivation** (no missing) in the animated-figure format → Sonnet subagents (`model: sonnet`).
- **3D interactive sheets** (card type `scene`) where needed (Huygens, double refraction, polarisation, wave plates) — engine by Opus, content by Sonnet.
- After each module: validate, build, **publish with `./deploy.sh`** (from SSC-V6), then mail progress with the `/quickmail` skill to **ihjas.one@gmail.com**.
- After all modules: debug and fix `study-plan-v5.html` (any issue), including **moving the Electrodynamics II (id "ED") exam from 2026-11-03 to 2026-11-04** (`examDate` near line 863). Then update skills and prompts.

### Engine features added this session (shared engine, `study-match/`)
- `src/components/02-figure.js` + `src/styles/18-derivation-focus.css`: animated derivation figures (`setup.figure`, per-step `figure`), presentation mode `player.present()`, ● record button, explore while paused, flip-back only when swiped away (`04-shelf.js`), `glass` style.
- `src/components/02-scene3d.js` + `src/styles/19-points-scene3d.css`: card type **`scene`** (Three.js r128, lazy; drag/pinch; time + sliders; safe expression compiler; ≤4 live WebGL views). `pi` bug fixed (regex now `Math\.[A-Za-z0-9]+`).
- `03-render.js`: `points` list on info / intuition / math cards (info keeps `body` as the one-line definition used by definition recall); `scene` cards.
- `build.py`: validates `points`, `scene` (check_scene), `setup.figure` (check_figure). CARD_TYPES includes `scene`.
- All apps still validate (`python3 study-match/build_all.py --check`, 0 errors). Not yet rebuilt/deployed with these changes.

### Skills (authoring rules for agents) — `optics-module-1/skills/` (copied to `optics-module-1/study-match/skills/`)
`09-clear-points.md`, `10-figure-derivations.md` (step rules: one idea per step; Snell = highlight both angles, start from n₁sinθ₁ = n₂sinθ₂; every trig ratio/identity/Pythagoras = highlight triangle+angle+sides, state as own `identity` step, checkpoint ask, `rearrange`, then apply; apparatus drawn first, then light, then constructions; exact geometry via Python; ≤16 steps), `11-scene3d.md`. `00-START-HERE.md` links them. Worked derivation examples: `optics-module-1/study-match/data/*-preview.json` (16 cards, see the preview section above).

### Tools
- `optics-module-1/rebuild/check_unit.py <file.json>`: agents' validator ({"cards":[...], "glossary":[...]} → real build.py --check).
- `optics-module-1/rebuild/assemble.py <plan.json>`: merges a module into live data.json. Backs up data.json and `assets/generated/inventory.json` (data.before-rebuild-mN-<stamp>.json), replaces the module's topic cards (order: intuition/info, other, scenes, derivations, math, quiz; strips "unit"), replaces glossary entries with prefix `optics-mN-`, retires generated-image keys of rebuilt topics (they are keyed by topic:index). Plan format is in the script docstring.
- Helper scripts saved in `optics-module-1/rebuild/tools/`: `merge.py` (preview-page merge; run from optics-module-1/study-match), `cdp.mjs` (headless Chrome actions/screenshots), `sheet.sh` (figure-state contact sheet), `fg.py` (geometry helpers), `rec.mjs` (video recorder; paths inside point at the old scratchpad, edit before use).
- Video recorder (`rec.mjs`): headless Chrome at 1/8 speed (JS clock shim + Animation.setPlaybackRate), screenshots retimed, ffmpeg H.264. Videos in SSC-V6: spherical, fermat, thinfilm (young/fresnel were queued; check).

### Module 4 (Polarisation) — status
- Source: **`SSC-V6/module4.pdf` = Book 2 (Subrahmanyam, Brij Lal & Avadhanulu) ch. 20**, 45 pp, printed page = PDF page + 479. Previously Module 4 used Ghatak ch. 22 as a stand-in.
- Syllabus numbering (20.8.3, 20.9.1) does not match this edition; units mapped **by content**:
  17 = §§20.1–20.5 (pp 1–8); 18 = §§20.6.2–20.6.3 only (pp 11–12); 19 = §§20.8, 20.9, 20.13 (pp 14–17, 24–25);
  20 = §§20.10, 20.11, 20.14 (pp 17–23, 25–28; not 20.12 Nicol); 21 = §§20.17–20.19 (pp 32–38); 22 = §§20.20–20.22 (pp 38–42; not 20.23 Babinet).
- Unit cuts + text layers: `optics-module-1/source/units/module-4-book2/unit-17…22-*.pdf/.txt`.
- Topic ids kept: 17 optics-m4-polarisation-introduction, 18 optics-m4-production-linearly-polarised, 19 optics-m4-malus-law-polariser-analyser, 20 optics-m4-double-refraction-huygens, 21 optics-m4-wave-plates, 22 optics-m4-analysis-polarised-light. Source label must keep the "Unit N ·" prefix (study-plan hand-off).
- Agent outputs copied to `optics-module-1/rebuild/m4/` (the agents wrote to the session scratchpad `m4/`; if deriv files are missing there, rerun the two derivation agents with the scope above):
  unit17..22-cards.json DONE (Haiku; 14/13/15/27/15/11 cards, 0 errors). scenes.json DONE (Sonnet, 6 scenes; uses 3.14159265 for pi).
  deriv-17-20.json and deriv-21-22.json: Sonnet agents were still running at handoff.
- Review notes from agents: unit 20 number question uses μo = 1.66 from §20.12 (outside scope; consider replacing); book inconsistencies at Eq. 20.15b sign and §20.14 Case 3 velocities were left out; unit 22 uses θ ≠ 45° for elliptical (page image).
- NEXT for Module 4: (1) when derivations land, write plan.json and run assemble.py; (2) `python3 build.py --check` then build in optics-module-1/study-match; screenshot a scene card, a derivation and a points card at 412×870; (3) `python3 study-match/build_all.py` then `./deploy.sh`; (4) /quickmail progress to ihjas.one@gmail.com; (5) record in this file.

### Modules 1–3 — plan (not started)
- Keep existing cards/order (generated images are keyed by topic:index); Haiku agents rewrite info/intuition/math into `points` (+ one-line body on definitions) in place.
- Replace derivation cards with the 16 preview versions (data/*-preview.json; titles match live cards) and have Sonnet convert the rest + add any syllabus derivation that is missing. Not yet converted: two focal lengths (1,0,7), resultant of two sinusoidal waves (2,0,2), hyperbolic nodal curves (2,1,4), two-beam intensity (2,2,5), fringe displacement by plate (3,0,2), Stokes relations (3,0,7), non-reflecting film (3,1,5), Newton's rings (3,2,4), Michelson (3,2,7), grating dispersion/resolving power (4,2,8), zone plate radius/area (5,0,2), zone-plate formula (5,0,7). New cards to add: Fresnel two-mirror (fresnel-mirror-preview.json) and Lloyd's mirror (lloyd-preview.json).
- Add 3D scenes where useful (e.g. Michelson, zone plate, meridional/skew rays).
- Build, deploy, quickmail after each module.

## 1. What a kit is

Per module there are three outputs:
- `data-<subject>-mN.json`: the study-match data (cards, derivations, quiz, glossary). Built into the app by the shared engine at `study-match/`.
- `sent-<subject>-module-N.zip`: the bundle sent to a model (in AI chat, no file access) to write the JSON. Contents: `PROMPT.md`, `OUTPUT-FORMAT.md`, `skills/` (00–08), `example/` (a finished module), `source/` (syllabus, map, textbook cuts, unit PDFs).
- The finished app (`dist/`) once the JSON passes the builder.

## 2. How to prepare a bundle (per module)

1. **Read the syllabus** (`SSC-V2/SEM5/...` or `SEM5-PYQ/<SUBJECT>/syllabus.pdf`). The syllabus is the authority for scope. It lists the exact sections per unit ("Sections x.y of chapter z of Book N"). Do not go by the map alone.
2. **Find the section pages** in the textbook (Book 1 = Griffiths, Book 2 = Zettili for QM). Get the PDF offset from a known page (QM: Zettili PDF = printed + 17; Griffiths PDF = printed + 13). Find each section heading with `pdftotext -f N -l N -layout` per page. Do not trust the printed numbers in the map without checking the heading.
3. **Cut the pages** with Ghostscript, not `pdfunite`. `pdfunite` on pages from one book makes files 10–30 times too big. Command: `gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dFirstPage=A -dLastPage=B -sOutputFile=out.pdf in.pdf`.
4. **One cut per unit** in `source/units/`. Each unit gets only the pages of its syllabus sections. Where a page also holds an out-of-scope heading (for example §4.9 at the bottom of a page), say so in the PROMPT and tell the writer where to stop.
5. **Write `PROMPT.md`** from the template of the finished bundle (module 4 for QM). It must have: scope table (unit → content → PDF → section), an explicit "do not write" list of out-of-scope sections, what earlier modules cover (do not repeat their glossary), the id prefix (`qm-m4-`), and the settings (`inlineChecks` false, `autoRevealQuestions` true, `definitionChecks` true, `date` "", `sessions` []).
6. **Write `OUTPUT-FORMAT.md`**: one `json` block, then a "Not verified from the PDFs" list. Nothing else.
7. **Copy** `skills/`, `example/data-<subject>-m1.json` and `source/syllabus.pdf` from the last finished bundle.
8. **Zip with Python** (`zipfile`, deflate). `zip` is not installed.
9. Copy the zip next to the other zips in the subject folder.

## 3. How to apply the model's reply

1. Save the `json` block as `data-<subject>-mN.json` in the module folder (for QM: `SSC-V6/quantum-mechanics-module-1/`).
2. Validate: `python3 build.py --data data-<subject>-mN.json --check`. Fix every ERROR (for example an unknown move such as "solve" must become one of the allowed moves printed by the builder). Warnings are read before a build.
3. Build: `python3 build.py --data data-<subject>-mN.json` (add `--strict` once it passes; it is the release check).
4. Check the output: open `dist/` on a phone-sized view, look at one derivation card and one quiz card.
5. Record the result in this file (section 5).

## 4. Rules that apply to every subject

- Sources are the only source. The model writes from the PDFs in the bundle, not from memory.
- The syllabus decides scope. Sub-sections the syllabus omits are left out, even if they sit on a page that is in the unit cut.
- Module I data is the style reference (`example/`).
- Do not change another module's files while working on one module.
- Do not send or email anything (the user sends). Do not run `zip` (missing).
- Keep working files in the session scratchpad; the project folder gets only the final zip, the JSON and the build.
- All active study-plan apps use `SSC-V6/study-match/build.py` and `study-match/src/`: Optics, Optics PYQ practice, Quantum Mechanics, Complex Analysis and Abstract Algebra. Subject `build.py` files are thin launchers only. Do not introduce local engine forks or rendering overrides. Historical `*.before-engine` folders and model bundles are inactive snapshots.
- After engine edits, run `python3 study-match/build_all.py` from `SSC-V6` to rebuild all active pages without publishing (`--check` validates only). `deploy.sh` uses this same rebuild command before publication. See `study-match/README.md`.
- Shared-engine consolidation verified 2026-10-26: all 8 active builds contain identical shared JavaScript and CSS, with separate subject data. Module grouping supports every subject's `*-mN-*` IDs; headings use JSON metadata. Generated page scripts parse. All builds pass with 0 errors; existing warnings remain in QM II and Abstract Algebra IV. Publication requested 2026-10-26; checkpoint deployment recorded below.

## 5. Status (as checked 2026-10-26)

### Quantum Mechanics I (`SSC-V6/quantum-mechanics-module-1/`)

| Module | Units | Textbook | Data JSON | Bundle | Status |
|---|---|---|---|---|---|
| I | 1–5 | Griffiths ch.1 | `data-qm-m1.json`, validates (0 errors) | `sent-1.zip` | built into `dist/` |
| II | 6–11 | Griffiths ch.2; Zettili 3.6.4, 4.4, 4.5 | `data-qm-m2.json`, 0 errors after "solve" became `evaluate` (sheet 5, card 2, step 4); 1 warning (sheet 1, card 3: first step has a move) | `sent-qm-module-2.zip` | built to `dist/study-match-m2.html` (non-strict, for the warning) |
| III | 12–21 | Zettili ch.2 (§2.2–2.7) | `data-qm-m3.json`, validates (0 errors, 0 warnings) | `sent-qm-module-3.zip` | built to `dist/study-match-m3.html` |
| IV | 22–25 | Zettili §4.8, §6.2.1, 6.2.3, 6.2.4 | `data-qm-m4.json`, validates (0 errors, 0 warnings) | `sent-qm-module-4.zip` | built with `--strict` to `dist/study-match-m4.html` |
| V | open-ended (computer simulations) | not started | none | none | not started |

Left to do for QM: review the remaining Module II warning before a strict release. Modules II–IV already have data and builds; do not treat them as awaiting initial generation. Any further independent content verification is a separate task. Module V is not started.

### Optics (`SSC-V6/optics-module-1/`, `SSC-V6/sent-optics/`)
- 2026-10-26: user requested reverting all Optics audit changes because the cards became too descriptive. Audit cancelled; do not continue it or restore its additions.
- Restored `study-match/data/data.json` byte for byte from the saved pre-audit baseline: 1715 total cards, including 243 teaching cards / 32 teaching derivations. Removed every audit content/diagram change in Units 17–20 and all added cards.
- Reverted the audit's shared diagram-label, mathflow-scroll, shelf-scroll and native-diagram sizing edits. Earlier shared-engine consolidation remains, as requested separately by the user; no subject-local engine was reintroduced.
- PYQ/practice data remains unchanged. Ghatak replacement and source cutouts remain available, but no content audit is active.
- Rollback rebuilt successfully (Optics: 0 errors/warnings) and republished successfully to Firebase. Live Malus card verified with the original concise legend, original diagram and 8-frame playback.

### Focused derivation card + animated figure (preview, 2026-10-27)
- Sixteen cards, for the user to check, all in `SSC-V6/spherical.html` (not deployed), built from `optics-module-1/study-match/data/derivations-preview.json`. That file is made from the one-card `*-preview.json` files beside it by the scratch merge script (sections grouped by title, topics by id); merge in this order: fermat, fermat-refraction, gauss-surface, spherical, thin-lens, newton, magnification, young, fresnel-mirror, biprism, lloyd, thinfilm, single-slit, double-slit, n-slit, straight-edge. Converted from live cards (data only, steps expanded per the step-writing rule): Fermat reflection and refraction, Gaussian formula, spherical mirror, thin lens, Newton formula, lateral magnification, Young, biprism, thin film, single/two/N-slit Fraunhofer, straight edge. New cards written from Ghatak because the live data had no derivation: Fresnel two-mirror (§14.7) and Lloyd's mirror (§14.11). The live Optics `data.json` is unchanged. Polygons with `"style": "glass"` draw prisms, lenses and media as apparatus (CSS only).
- Step-writing rule (user, 2026-10-27): one idea per step. Snell's law: highlight both angles and start from n₁ sin θ = n₂ sin θ′. Any trig ratio or Pythagoras: highlight the right triangle, its angle and the sides used, state the ratio (ask it as a checkpoint), rearrange, then apply. Thin film was rewritten this way (16 steps) and Young's (11 steps).
- Videos: `SSC-V6/spherical.mp4`, `SSC-V6/fermat.mp4`, `SSC-V6/thinfilm.mp4`, `SSC-V6/young.mp4`, `SSC-V6/fresnel.mp4`, recorded from the card's presentation mode (`player.present()`) by headless Chrome in slow motion (page clock and animations at 1/8 speed, frames retimed), H.264 30 fps. The card's ● button records in desktop Chrome/Edge (tab capture cropped to the card; MP4 if supported, else WebM); on phones it only plays, for the phone's screen recorder. Presentation never scores answers or marks the card done.
- Draw order rule: apparatus first, then light rays (rays get a glowing tip), then constructions. Focused cards can be explored while the match is paused, and flip back only when swiped away.
- New data: `setup.figure` (box, points, parts, `draw` = drawing order with captions) and `steps[i].figure` (`focus`, `keep`, `caption`). Cards without `setup.figure` render exactly as before (screenshot-identical check).
- Engine: new `study-match/src/components/02-figure.js`, `src/styles/18-derivation-focus.css`; small opt-in hooks in `02-diagram.js`, `02-mathflow.js` (presentation, record, explore while paused), `03-render.js`, `04-shelf.js` (flip-back only when swiped away); `build.py` validates the new fields. Other apps not rebuilt.
- Pending: user review; if approved, author `figure` data for every derivation card (user will say). Known engine bug left alone: a nested comment in `07-mathflow.css`'s header drops its phone full-width `@media` rule, so all derivation cards are 318 px wide on phones; the focused card sets its own width.

### Abstract Algebra I (`SSC-V6/abstract-module-1/`)
- Data files `data-abs-m1.json` to `data-abs-m4.json` exist. The combined active `study-match/data/data.json` validates with 0 errors and 1 warning (Module IV, sheet 6, card 9, derivation step 5: no top-level relation sign) and is rebuilt with the shared engine. Individual source data files were not re-audited in this engine pass.

### Complex Analysis I (`SSC-V6/complex-analysis-module-1/`)
- Module I, units 1–5, Zill & Shanahan §§1.1–1.5: `data-ca-m1.json` saved from the user's supplied model reply. Contains 50 cards (8 derivations, 20 quizzes) and 25 glossary entries.
- Bundle: `sent-ca-module-1.zip` (already present).
- Validates with 0 errors, 0 warnings, 0 auto-fixes; built with `python3 build.py --strict` to `dist/study-match.html`. `dist/index.html` is the topic chooser. The wrapper only invokes the shared engine; headings and module labels are generated there from each subject's data.
- Added `Unit N ·` to each sheet's source label so the study-plan handoff can select units and stages. The rest of the supplied study data is preserved.
- `study-plan-v5.html` links Module I; Start is available for Complex Analysis sessions containing only units 1–5. Later or mixed-module sessions stay disabled until their modules are built.
- The supplied reply reports nothing unverified from the PDFs. This application pass checks schema/build and phone-sized UI; it is not an independent PDF content audit.
- Phone-sized (390 × 844) topic chooser, derivation and quiz feedback checked; no browser console errors observed. Launcher checks cover units 1–5, unavailable/mixed modules and existing subject readiness. Both deploy scripts include this build for future deployment; included in the publication checkpoint requested 2026-10-26.
- Module II bundle: `sent-ca-module-2.zip`, prepared for the user's higher model. Five separate unit PDFs (units 6–10; 22 pages), syllabus, verified scope map, derivation-coverage checklist, source-reading notes, adapted skills 00–08, and the actual `example/data-ca-m1.json`. No Module II JSON/build yet.
- Module II prompt explicitly requires ALL in-scope derivations, worked-example subparts, prose working and alternative methods, with ALL intermediate steps and no card/step-count cap. Exact stops: §2.2 through Example 4; all §2.4.1 including Example 4 on p.76; §2.4.2 through Example 5(c) on p.78; p.82 Principal nth Root Function and Example 9. Excludes Examples 6–8 and the later multiple-valued-function material.

### Other subjects
- Electrodynamics II, Real Analysis II, Convex Optimization: not checked in this pass. Look in `SSC-V6/study-day-*` and `SEM5-PYQ/<SUBJECT>/` before assuming anything.

## 6. Known problems in the shared map (`source/map.md`)

- Module 3 section of the map is wrong in places. Unit 14 includes §2.4.3 (not in the syllabus). Unit 17 includes §2.4.7 (not in the syllabus). Unit 19 and 20 page ranges do not match the sections. The module 3 PROMPT already states the correct scope; the map is not fixed yet.
- Module 4 section is corrected (2026-10-26).
- `SEM5-PYQ/QUANTUM-MECHANICS/books/quantum-mechanics-textbook-module-3.pdf` stops at printed page 131; §2.7.2 is cut short. Use the full Zettili pages 96–150 for module 3.
- Complex Analysis Module II: the older broad map cuts Unit 8 at p.75, omitting the remainder of §2.4.1 and Example 4 on p.76. Its combined Units 9–10 range also includes unassigned material. The Module II zip contains a corrected module-specific map and five cuts with explicit start/stop instructions; the older project-wide map/cuts have not been modified.

## Publication checkpoint — 2026-10-26

The earlier checkpoint was published successfully. User subsequently rejected and requested reverting the Optics audit changes. Pre-audit Optics data and audit-touched renderer files have been restored; earlier Complex Analysis work and shared-engine consolidation are retained. Rollback complete: all 8 active apps rebuilt with 0 errors (same two unrelated existing warnings); Firebase release completed successfully. The live original Malus card was verified by computer use. Optics data matches the pre-audit baseline byte for byte. Audit remains cancelled.
