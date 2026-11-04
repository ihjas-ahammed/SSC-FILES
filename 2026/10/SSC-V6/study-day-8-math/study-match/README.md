# Study Match

A study app that turns a syllabus into piles of cards (sections → topics → cards), animates
derivations step by step with real MathJax, and runs every session as a football match:
**Focus vs Time**.

## Folder map

```
study-match/
  build.py            builder + validator (Python 3, standard library only)
  build.sh            macOS / Linux:   ./build.sh
  build.bat           Windows:         double-click, or  build.bat
  data/data.json      THE CONTENT. Everything you study lives here.
  skills/             prompts that let any AI model write a new data.json from a syllabus
  src/
    template.html     page skeleton
    styles/*.css      theme, header, shelf, cards, questions, MathFlow, match, desktop
    components/*.js   core, mathflow, render, shelf, progress, questions, match, app
    assets/           app icons
    sw.js             offline service worker (hosted app only)
  dist/
    study-match.html  ONE self-contained file. Open it in Chrome. Works on phone and desktop.
    app/              the same app as a hostable folder (installable, works offline)
```

## Make a new course

1. Give an AI model every file in `skills/` plus your syllabus, and send the message in
   `skills/00-START-HERE.md`. It returns a `data.json`.
2. Save it as `data/data.json`.
3. Run the build (`./build.sh`, `build.bat`, or `python build.py`).
   - It checks everything first and tells you the exact field of any problem,
     e.g. `sections[1].sheets[0].cards[3].steps[2]: move "add" needs "by"`.
   - It quietly repairs the most common model mistake (single backslashes in JSON).
   - Paste the error list back to the model and ask it to fix exactly those fields.
4. Open `dist/study-match.html`.

Large syllabus? Ask the model for one section per reply, save them as separate files, then:
`python build.py --merge part1.json part2.json part3.json` (writes data/data.json and builds).

Other options: `python build.py --check` (validate only), `--data other.json`, `--out path.html`, `--strict`.

## Install as an app

- **Single file** (`dist/study-match.html`): Chrome menu → *Add to Home screen* (Android) or
  *Install page as app* (desktop). It gets its own icon. Use ⛶ in the header for fullscreen.
- **True install + offline**: upload the `dist/app/` folder to any static host (Netlify drop,
  GitHub Pages, Vercel). Chrome then offers one-tap *Install*, opens it fullscreen, and caches it
  so it works offline after the first visit.

## The match

| Clock | 0–25 · 5′ break · 25–45 · 10′ half-time · 45–70 · 5′ break · 70–90 |
|---|---|
| Stoppage time | During play, +1 to +5 for the current stretch (match centre → fourth official board) |
| Focus scores | A topic finished before its deadline · 3 right answers in a row |
| Time scores | A topic deadline passes unfinished · every 3rd wrong answer in total (timeouts count) |

Deadlines are spread automatically by topic size and can be changed on the team sheet.
Once the match starts the header shrinks to a notch with the score and clock; tap it for the full header.
Change team names, periods and breaks in `data.json` → `meta` and `match`.

## Keyboard (desktop)

← → or wheel: one card · Enter / Space: open pile, reveal question · 1–6: answer ·
Space on a derivation: play / pause · . and , : next / previous step · R: replay ·
F: fullscreen · M: match centre · S: stack piles · T: theme · Esc: close.

## How derivations animate (for developers)

`src/components/02-mathflow.js`. Each line is typeset by MathJax; every glyph and fraction bar
becomes a sprite at MathJax's exact position. Consecutive lines are matched by glyph shape
(longest common subsequence, then nearest leftovers): matched glyphs glide (arcing over `=` when
they change side), new ones write in amber, removed ones are struck through after cancelling
moves and shrink out in coral. Both-sides moves are generated from the move library in
`01-core.js` (`T.opLine`), so data only ever contains plain TeX lines plus a move name.
