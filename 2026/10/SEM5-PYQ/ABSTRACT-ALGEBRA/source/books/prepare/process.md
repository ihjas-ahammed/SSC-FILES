# process.md: prepare (notes for each module)

Each module has its own folder here. The folder holds the module's pre file, book sources, notes bodies, builder and checks, and final PDFs. Module 1 is the worked example: read `module-1/process.md` for the method and the status of each section.

## Layout of a module folder
- `pre-math.html`: the Plus Two bridge for the whole module, written before the notes (Recall / Partial / Beyond; statuses that depend on the Kerala text are OPEN until checked).
- `book-sources/`: one HTML per section, copied from the excerpt sheets, with printed page numbers. Trim opener-page material that belongs to the previous section, and say so in the source header.
- Notes bodies: `<section>-study.body.html` (student voice) and `<section>-structured.body.html` (formal), one pair per section.
- `build_module1.py`: the two-column builder. `python3 build_module1.py` makes the section pair; `python3 build_module1.py combined` makes the module pair.
- `check_numbers.py`: the coverage check. Each numbered book item (definition, theorem, corollary, example, table) must appear in each body. It must print MISSING [] for every body.
- Final PDFs: `abstract-algebra-<n>-module-<n>-study.pdf` and `abstract-algebra-<n>-module-<n>-structured.pdf`.

## Modules in this folder
| Module | Folder | Syllabus items | Book sections (8th ed.) | Status |
|---|---|---|---|---|
| 1 | `module-1/` | 1–6 | §1 Binary Operations; §2 Groups (printed 11–28) | published (study and structured) |
| 2 | `module-2/` | 7–12 | §5 Subgroups (printed 52–56); §6 Cyclic Groups (61–67); §8 Groups of Permutations (77–82, up to 8.18). Scope and decisions in `module-2/process.md` | notes built and mailed |
| 3 | `module-3/` | 13–16 | §4.8–4.15 (permutations, disjoint cycles); §8.19–8.25 (even and odd, alternating groups); §10 (cosets and Lagrange, 10.1–10.20). The 7th-ed Section 9 is not the 8th-ed Section 9. Scope and decisions in `module-3/process.md` | notes built, PYQ and model mailed |
| 4 | `module-4/` | 17–22 | §16 (isomorphism theorems); §22 (rings, fields, units); §23 (integral domains, characteristic). Factor groups and factor rings are Module V. Scope and decisions in `module-4/process.md` | notes built, PYQ and model mailed |
| 5 | `module-5/` | open-ended | §7 Generating Sets and Cayley Digraphs; §12 Factor Groups; §26 Field of Quotients (former §21) | scope to be decided |

Mapping by content, not by number: the 8th-ed concordance (in the Module 1 contents sheet) gives the former numbers.

## The steps for any new module (short form)
1. **Edition and scope.** Check the syllabus edition against the book on disk. Write the concordance and the printed-page offset into the contents sheet. Decide the scope with the user and write it in the module's process file.
2. **Excerpt.** Copy the module's sheets into one HTML with printed headers, plus a contents sheet (edition warning, mapping, gaps). Generate `index.md` from the final HTML.
3. **PYQ.** Select questions by topic (topic split in syllabus order), bands A 1–3, B 4–7, C 10+, shadow source labels. Build with the PYQ builder.
4. **Pre file** (`pre-math.html`).
5. **Sections, one at a time.** For each section: book source (trimmed), study body, structured body, `check_numbers.py` (MISSING []), build the two-column PDFs, render (MathJax errors 0), and check the width of every display block against the column. Mail the study PDF of the section for checking.
6. **Module.** Build the combined study and structured PDFs. Render, check the pages by eye, and run the width check again.
7. **Publish.** Mail the two module PDFs, one per message, when the user asks. Use the names given in the request.

## Rules for every module
- Transcribe from the page images (or the text layer checked against the image). Never write summaries in place of the book text.
- Decide the scope once, write it in the module's process file, and keep to it.
- Check every section title and item number against the book page before writing it into a file or a mail.
- Every numbered item appears in the notes with its book number. `check_numbers.py` must report no missing items.
- Edits: never use a greedy regex or a `sed` replacement containing `&`. Locate the block by exact anchor and assert the match count is 1. If a body is damaged, rewrite it whole.
- Width: every display block must fit its column. A clipped display is a build failure, even when the render shows no error.
- Mail: keep a list of what was sent in the session. Quickmail keeps no log. If a file was already sent, say so and ask.
- No shortcuts: apply every rule to every section; name any rule broken and fix it before the next step.

Working files stay in the session scratchpad. Only the finished module files go into the project folder.
