# Optics Module 4 — Polarisation (items 17–22)

You are adding Module 4 to the Study Match app. The student is in high school in
India. English is their second language. Use short sentences and simple words.
Explain any hard word in one plain sentence.

All files are at the top level of this upload. `FILES.md` gives each file's path
in the app.

## What you return (four things)

1. **`data-module4.json`**: a NEW file with only Module 4 content, same format as
   `data.json` (see below). Full file, valid JSON.
2. **`data-module1-updates.json`**: only if an earlier card must change. Otherwise `[]`.
3. **One diff** for `build.py` (add module 4 to the start page list), and
   `src/index.html` only if it needs a change.
4. **Short notes** in plain English: what you wrote, and anything you could not do.

Do not run `update_module1.py` yourself. I run it. Do not put Module 4 content
into `data.json` yourself.
Diff rules: copy every context line exactly, recount every `@@` header from the
hunk body, and start each blank line inside a hunk with one space.

## Scope: Module 4 (items 17–22)

Use the unit PDFs in this upload and the page map in `map.md`:
17. Polarisation, introduction (Unit 17, §22.1).
18. Production of linearly polarised light (Unit 18, §22.3).
19. Effects of polariser and analyser, Malus's law (Unit 19, §22.2).
20. Double refraction, Huygens' explanation (Unit 20, §22.5).
21. Wave plates (Unit 21, §22.6).
22. Production and analysis of different polarised light, and optical activity (Unit 22, §§22.7–22.8).

**Source note (important).** The syllabus cites Book 2 (Subrahmanyam, Brij Lal &
Avadhanulu) for this module. Book 2 is not available. The units are cut from Ghatak,
*Optics*, Book 1, chapter 22, which covers the same topics. Use Ghatak's symbols,
signs and names. Put "Ghatak ch. 22 (Book 2 not available)" in each sheet's `source`
field, and say so in your notes.

Do not go into interference or diffraction. Do not go into the lab work.

## Data format: `data-module4.json`

```json
{
  "glossary": [ { "id": "optics-m4-…", "term": "…", "aliases": [], "definition": "…", "example": "…" } ],
  "sections": [ { "short": "…", "title": "…", "sheets": [ { "id": "optics-m4-…", "title": "…", "icon": "…", "source": "Ghatak ch. 22 §…; syllabus item …", "cards": [ … ] } ] } ]
}
```

- Every `id` starts with `optics-m4-`.
- Use the same card types as before (see `01-schema.md`): `intuition`, `info`,
  `derivation`, `mcq`, `fill`, `number`, `math`.
- **Pictures:**
  - `intuition` cards: one SVG string in `art` (rules in `03-svg-art.md`), plus the
    one-line `picture` caption.
  - `derivation` cards: `setup` is a JSXGraph construction (rules in `03-svg-art.md`).
    Every `focus` name must exist in the setup. Labels show on focused points and lines,
    and focus only zooms (it never hides a line).
  - Recall (`info`) cards: a JSXGraph diagram on the flip back.
- Every derivation: detailed steps (one move per step), parallel steps one after the
  other, exactly 4 `ask` checkpoints, each asking only about the next step.
- Only one top-level `=` per step (the build warns otherwise).
- Quiz questions: one line, at most about 15 words. Options: at most about 6 words.
- Derive results from the textbook. Do not copy formulas without the steps.
- Do not write study content with scripts. Write it yourself.

## Start page: `build.py`

The start page (`dist/index.html`) lists topics by module. In `units_for_index`, add
module 4 (sheet ids starting `optics-m4-`, label `Module 4 · Polarisation`). Keep the
existing modules as they are. Make the change in the diff.

## Keep these working

Auto-reveal quizzes, timers, the calculator, custom halves, breaks with Skip,
Pause/Resume, locked cards during a match, flip cards, recall diagrams, derivation
summary, the topic filter from the start page, saved progress. Existing card ids
must not change.

## Check before you return

- `data-module4.json` is valid JSON. Every `focus` name exists in its setup.
- Every `intuition` picture is one valid SVG string with allowed classes.
- Every id is unique across Modules 1 to 4.
- Each derivation step has exactly one top-level `=`.
- No yellow or amber highlight in figures or maths.
- Each diff hunk header matches its body.
