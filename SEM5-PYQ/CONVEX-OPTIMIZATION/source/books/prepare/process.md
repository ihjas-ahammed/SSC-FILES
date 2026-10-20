# process.md: prepare (notes for each module)

Each module has its own folder here. Only `book-sources/` exists so far. No module is started yet. When a module starts, write its `process.md` first, then the notes.

## Layout of a module folder
- `book-sources/`: one HTML per section, copied from the excerpt sheets with printed page numbers. Trim opener-page material that belongs to the previous section, and say so in the source header.
- Notes bodies: `<section>-study.body.html` (student voice) and `<section>-structured.body.html` (formal), one pair per section.
- `diagrams/`, `image-gen/`, `final/` (figures, only if the module needs them; the Codex method is in `../process.md`).
- Checks (copied from Properties of Solids when the module starts): coverage of numbered items (MISSING []), overflow (0 and 0), MathJax error count (0).
- Final PDFs: `convex-optimization-module-<n>-study.pdf` and `convex-optimization-module-<n>-structured.pdf`.

## Modules in this folder
| Module | Folder | Printed units | Book sources | Status |
|---|---|---|---|---|
| I | `module-1/` | 1–8 (review of multivariable calculus) | Binmore ch. 19, pp. 190–231 | folder made; not started |
| II | `module-2/` | 9–17 (convexity) | Boyd ch. 2 and 3 | folder made; not started |
| III | `module-3/` | 18–22, 19 (printed twice) (convex optimization problems) | Boyd ch. 4 | folder made; not started |
| IV | `module-4/` | 20–25 (duality) | Boyd ch. 5 | folder made; not started |

Items are matched by content. Printed unit numbers repeat (19, 20); say which one the notes cover.

## The steps for any new module (short form)
1. **Edition and scope.** Measure the printed-page offset of the book (Binmore is 2nd ed., Boyd is 2004). Write the offset and the scope into the module's `process.md`, with the user's decisions.
2. **Excerpt.** Codex method in `../process.md`. Contents sheet with scope and gaps.
3. **PYQ.** Select from the pool by topic (see `../../pyq/process.md`).
4. **Sections, one at a time.** Book source, study body, structured body, checks, section study PDF for checking, when the user asks.
5. **Module.** Build the combined study and structured PDFs. Render, check the pages by eye.
6. **Publish.** Mail the two module PDFs, one per message, when the user asks.

## Rules for every module
- Transcribe from the page images, or the text layer checked against the image. Never write summaries in place of the book text.
- Check every item number and equation tag against the book page, not against your own count.
- Every numbered item appears in the notes with its book number.
- Working files stay in the session scratchpad. Only the finished module files go into the project folder.
