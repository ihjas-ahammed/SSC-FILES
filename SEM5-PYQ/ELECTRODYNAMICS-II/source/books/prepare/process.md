# process.md: prepare (notes for each module)

Each module has its own folder here. The folder holds the module's pre files, book sources, notes bodies, figures and final PDFs.

## Layout of a module folder
- `pre-physics.html`, `pre-math.html`: Plus Two bridges for the module, written before the notes (Recall / Partial / Beyond).
- `book-sources/`: one HTML per topic, copied from the book excerpt sheets with the printed page numbers.
- Notes bodies: `<topic>-study.body.html` (student voice) and `<topic>-structured.body.html` (formal), one pair per topic.
- `diagrams/`: SVG drafts; `final/`: cleaned JPEG figures used by the notes; `image-gen/`: Codex briefs, runners, sheets and logs (module 1 keeps them under `diagrams/image-gen/`).
- Builder and checks: `build_module<N>.py`, `render.py`, `check_source.py`, `check_equations.py`, `check_overflow.py`, `process_images.py`.
- Final PDFs: `electrodynamics-module<N>-study.pdf` and `electrodynamics-module<N>-structured.pdf`.

## Modules in this folder
| Module | Folder | Process file | Status |
|---|---|---|---|
| 1 (Ch. 4 and 6) | `module-1/` | `module-1/process.md` (sections 1–18) | done, mailed |
| 2 (Ch. 7) | `module-2/` | `module-2/process.md` (Module 2 record) and `module-1/process.md` (method) | sections 1–3 done, mailed |
| 3 | not started | follow `module-1/process.md` section 18 and `module-2/process.md` | next |

## Figures (rule added 2026-10-15)
- **Figure images: Codex is required (rule added 2026-10-15).** Every figure in a section PDF is a Codex image, made in sheets of four by `image-gen/run_sheets_*.py` (one `codex exec` per sheet, log with START and DONE lines), then cropped and flattened by `process_images.py` to `final/*.jpg`. Read each sheet before accepting its crops. SVG drafts in `diagrams/` are reference only; they are not the final figure. A figure that is not made by Codex is a build failure.

## The steps for any new module (short form)
1. Pre files. 2. Book sources per topic. 3. Study and structured bodies per topic, with figure markers and Plus Two recall boxes. 4. `check_source.py` on the bodies. 5. `check_equations.py`. 6. SVG drafts and a contact sheet. 7. Codex sheets, four figures each, background runner with logs; read each sheet. 8. `process_images.py`. 9. `build_module<N>.py codex module<N>`. 10. `render.py` on both files (0 MathJax errors). 11. `check_overflow.py` (0 and 0). 12. Depth check against section 1 of Module 2. 13. Mail each PDF as its own message.

Detail for each step is in `module-1/process.md`, section 18.

---

## Lessons from Module 3 (added 2026-10-15): read this before starting a module

These are the points where the Module 3 run needed the user to intervene. Each one is now a rule.

| What went wrong | Rule |
|---|---|
| Book sources were written as summaries, not sheet transcriptions. Equation tags were paraphrased. | Transcribe every sheet from the page image (or the text layer checked against the image). Keep printed-page headers. Never write "book text:" paraphrases. |
| The scope was changed silently (§9.4 and §9.5 dropped, then restored). | Decide the scope once, write it in the module's process file, and keep to it. Name the reading in the final message. |
| The question mail described §9.4 and §9.5 wrongly. | Check each section title against the book page before writing it in a mail or a header. |
| Sheet-to-page mapping was wrong for several sheets (the header number is at the top of each PDF page). | Map each PDF page to its printed page from the page header, then check against the image before writing. |
| A display equation with two tags, and display equations wider than a column. | One tag per display. Split any display over about 60 characters into aligned rows before the build. Run `check_overflow.py` and get 0 and 0. |
| Text-only citations "(9.N)" were not counted as coverage. | Display each numbered equation as a block, or cite it as "Eq. N". `check_equations.py` must print MISSING []. |
| A PDF was almost mailed twice. | Check the mail log before sending. If a file was already sent, say so and ask. |
| Codex sheets were waited on with sleep, which the shell blocks. | Use a Monitor with an `until grep` on the sheet log. Read each sheet before accepting crops. |
| Figures not redrawn were left as text references. | Say in the module's process file and in each background section header which figures are not redrawn. |

Working files stay in the session scratchpad (`/tmp/claude-scratch/`). Only the finished module files go into the project folder.

## Lessons from Module 4 (added 2026-10-15): apply to every module

- Recall: where an equation comes from Plus Two, each study and structured body carries a `box-recall` ("Recall (Plus Two)") with the Plus Two form. A "Before you start" pointer alone is not enough.
- Equations: tag with the book's own numbers, per section and per sub-part (e.g. `13.3(a)(1)`, `12.5(i)(2)`). Check tags against the book page, not against your own count. Use `check_equations` with a section table; it must print MISSING [].
- Edits: never use a greedy regex to replace a block. Locate the block by its exact tag index and assert the match count is 1. If a body is damaged, rewrite it whole.
- Figures: Codex is required (see the rule above). Read every sheet before accepting crops; re-run a sheet when a label is wrong, after tightening that panel's brief. Module 4 final JPEGs are 320 px, quality 60.
- Checks: `check_overflow` does not catch a tag clipped at the column edge. Look at each equation near a column edge at 200 dpi before mailing.
- Waits: match the result line of the current job (`DONE sheet N`), or count occurrences; never match a line from an earlier job. Use `timeout N bash -c 'until ...'` or `run_in_background`, not bare sleep.
- Mail: `quickmail` keeps no log, so keep a list of what was sent. Module 4 onward: mail only the two final module PDFs (study, structured), one per message, unless the user asks for more.
- No shortcuts: apply every rule to every section; name any rule broken and fix it before the next step.
