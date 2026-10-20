# process.md: prepare (notes for each module)

Each module has its own folder here. The folder holds the module's pre files, book sources, notes bodies, builder and checks, and final PDFs. No module is started yet. When Module I starts, its folder gets the first full record; use `module-1/process.md` as the template for the method.

## Layout of a module folder
- `pre-physics.html`, `pre-math.html`: the Plus Two bridges for the module, written before the notes (Recall / Partial / Beyond; statuses that depend on the Kerala text stay OPEN until checked).
- `book-sources/`: one HTML per section, copied from the excerpt sheets, with printed page numbers. Trim opener-page material that belongs to the previous section, and say so in the source header.
- Notes bodies: `<section>-study.body.html` (student voice) and `<section>-structured.body.html` (formal), one pair per section, plus any Plus Two recall boxes inside them.
- `diagrams/` (SVG reference drafts), `image-gen/` (Codex briefs, sheet runners, logs), `final/` (cleaned JPEGs).
- `build_module<N>.py`: the two-column builder. One call makes a section pair; one call makes the module pair.
- `check_source.py`, `check_equations.py` (coverage: MISSING []), `check_numbers.py` (numbered items), `check_overflow.py` (0 and 0), `render.py` (MathJax error count).
- Final PDFs: `properties-of-solids-module-<n>-study.pdf` and `properties-of-solids-module-<n>-structured.pdf`.

## Book text: Codex extraction (from Module II)
The excerpt and book sources are made with the Codex method in `source/books/process.md` (section "Method used from Module II"). Module I was transcribed by hand; its excerpt stays as made.

## Modules in this folder
| Module | Folder | Syllabus items | Book 1 sections (printed start page from the table of contents) | Status |
|---|---|---|---|---|
| I | `module-1/` | 1–5 (crystal structure) | §1.1–1.13 (p. 1); §2.1–2.2 (p. 34); §2.4 (p. 46); §2.7 (p. 55) | not started |
| II | `module-2/` | 6–11 (free electron theory, band theory) | §5.1–5.3, §6.1–6.5 (printed 151–198) | notes built; PYQ and model mailed; PDFs in progress
| III | `module-3/` | 12–16 (semiconductors) | §7.1–7.6 (ch. 7 p. 199) | not started |
| IV | `module-4/` | 17–22 (dielectric and magnetic) | §8.1–8.7 (ch. 8 p. 228); §9.1–9.7 (ch. 9 p. 265) | not started |

Items are matched by content. The book's table of contents gives start pages only; the end pages and the printed offset are measured from the excerpt (see `../process.md`, step 0).

## The steps for any new module (short form)
1. **Edition and scope.** Check the book's edition and printed-page offset. Write the offset and the scope into the module's process file, with the user's decisions.
2. **Excerpt.** Copy the module's sheets into one HTML with printed headers, plus a contents sheet (edition, offset, syllabus map, gaps). Generate `index.md` from the final HTML.
3. **PYQ.** Select questions by topic (topic split in syllabus order), bands A 1–3, B 4–5, C 10+, shadow source labels (see `../../pyq/process.md`).
4. **Pre files** (`pre-physics.html`, `pre-math.html`): Recall / Partial / Beyond for each item.
5. **Sections, one at a time.** For each section: book source (trimmed), study body, structured body, Codex figures (sheets of four, read before cropping), `check_numbers.py` and `check_equations.py` (MISSING []), the two-column PDFs, `render.py` (0 MathJax errors), `check_overflow.py` (0 and 0). Look at each equation near a column edge at 200 dpi. Mail the section's study PDF for checking when the user asks.
6. **Module.** Build the combined study and structured PDFs. Render, check the pages by eye, and run the width check again.
7. **Publish.** Mail the two module PDFs, one per message, when the user asks. Use the names given in the request.

## Order of work (approved in Electrodynamics II, Module 4)
1. Book conversion to HTML (sheets, printed-page headers, contents sheet with scope and gaps).
2. PYQ question paper, then the model paper. Mail the questions PDF when asked.
3. Pre files, each item Recall / Partial / Beyond.
4. Sections one at a time: bodies, figures, build, checks, section study PDF for checking.
5. Final combined PDFs, mailed one per message.

## Rules for every module
- Transcribe from the page images (or the text layer checked against the image). Never write summaries in place of the book text.
- Decide the scope once, write it in the module's process file, and keep to it. Say the scope before writing.
- Check every section title, item number and equation tag against the book page, not against your own count. An off-by-one tag has happened before.
- Plus Two: where an equation comes from Plus Two, the bodies carry a recall box (Plus Two form, re-derive in numbered steps, saved result with its book number).
- Every numbered item appears in the notes with its book number. `check_numbers.py` and `check_equations.py` must report no missing items.
- Edits: never use a greedy regex or a `sed` replacement containing `&`. Locate the block by exact anchor and assert the match count is 1. If a body is damaged, rewrite it whole.
- Width: every display block must fit its column. A clipped display is a build failure, even when the render shows no error.
- Mail: keep a list of what was sent in the session. Quickmail keeps no log. If a file was already sent, say so and ask.
- No shortcuts: apply every rule to every section; name any rule broken and fix it before the next step.

Working files stay in the session scratchpad. Only the finished module files go into the project folder.
