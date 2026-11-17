# GATE DA Planner V3: working notes

Single-page adaptive planner. Live: https://flow-research-26.web.app/study-plan-gate-v3/ (branch `gate-v3-cloud`).

## Build and deploy
- Sources: `src/index.html` (shell), `src/style.css`, `src/viewer.js` (PDF reader), `src/app.js`. `python3 build.py --no-cut` inlines them into `index.html` and refreshes `data/app-data.json`. Edit `src/`, never `index.html`.
- Deploy: `PATH=$HOME/.npm-global/bin:$PATH ../deploy-november.sh` (Firebase project flow-research-26). Deploy after every V3 change; the user tests on the live link. Commit and push only when asked.
- PDFs load from GitHub raw (`main`), so books and cuts must be pushed before they open on the live page.

## Layout rules
- Mobile is the base layout. Desktop is one `@media (min-width:1000px)` block at the end of `style.css` (plus a 1500px tweak). Keep new desktop rules inside it so mobile stays untouched.
- Desktop: left sidebar (tab bar), sheets (`#sheet`, `#pdf-sheet`) are right-hand panels, page behind stays scrollable (inline `body{overflow:hidden}` is overridden with `!important`). The reader has no bottom bar on desktop (page jump and zoom buttons are hidden there).
- `#pdf-sheet` has `z-index:60`, above `#sheet` (50). Without it, Read from the day viewer or Notes opened the reader underneath.

## Day viewer (Plan tab -> a day, `dayEditor` in `app.js`)
- Shows Read, Notes, Quick check, Explain on every day. Ticking is today-only (`noTick: d !== TODAY`), so future days can be prepared early. Quick check is hidden on days where practice is off.
- Top-right download button builds the day kit: `PDFV.kit()` in `viewer.js` makes one stored zip (own CRC32 writer, no library) of each learning item's PDF. Book units are cut to their pages -1/+1 (same as reader Download); units that only have a cut file go in whole. Files are numbered in plan order, duplicates dropped. Needs network the first time (book from GitHub raw, pdf-lib from cdnjs); later runs reuse the Cache Storage copy.

## Session log
- 2026-11-17: day-viewer buttons on all days; reader z-index fix; desktop side view; reader footer hidden on desktop; day kit zip. Checked by headless screenshots (1400px and 390px) and an `unzip -t` test of the zip writer. Not clicked end to end on the live page.
