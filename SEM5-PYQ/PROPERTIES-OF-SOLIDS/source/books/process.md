# process.md: PDF to HTML conversion (books folder)

Copy this file into a new folder, then tell Claude: **"run process.md"**. Claude follows the steps below, in order, and stops at each marked CHECK for your OK.

Set these before running (edit the first lines):

- `SOURCE_PDF`: the PDF to convert (for example `puri-babbar_module1_excerpt_pp1-33.pdf`)
- `OUT_HTML`: the HTML file to write (for example `puri-babbar_module1_excerpt.html`)
- `EDITION`: the edition the excerpt is taken from (not yet measured for the disk copy; see CLAUDE.md)
- `OFFSET`: printed page = PDF page − OFFSET (not yet measured; measure it first, step 0)
- `CHUNK`: pages per fragment (default 3)
- `MAIL_TO`: recipient (default `ihjas.one@gmail.com`)

---

## 0. Measure the offset and edition (first, every time)

1. `pdfinfo SOURCE_PDF`: note page count and page size.
2. Find the printed page number on two PDF pages (chapter openers are best). Compute the offset from each. If they disagree, the excerpt has a jump: record it.
3. Compare the edition on the title page and front matter with the syllabus's Book 1 section numbers. If they differ, write a concordance first, in the contents sheet and in `CLAUDE.md`.

## 1. Inspect the source

4. `pdftotext SOURCE_PDF -`: if the word count is near zero, the PDF is a scan. Read the pages visually, as images. Do not trust OCR for symbols.
5. Record which book page numbers appear on each PDF page, and where the excerpt jumps. Excerpts are not continuous. Write the jumps down before converting anything.

## 2. Split

6. Split the PDF into parts of `CHUNK` pages with pypdf. Keep the parts in the scratchpad, not in the project folder.
7. Confirm the number of parts times `CHUNK` covers the page count.

## 3. Convert, one part at a time

8. Read one part as images (the Read tool on the part PDF). Read the text layer too, to catch words.
9. Write `frag-NN.html` for that part, one `<div class="sheet book" id="pdf-pNN">` per PDF page, headed with the book page number as printed.
10. Transcribe exactly what is on the page. Keep the printed equation, theorem, example and table numbers. Keep printed typos and mark them as printed. Re-read every equation against the image.
11. If a sentence runs onto the next page, end the fragment mid-sentence with a `cont` marker, and start the next sheet with the rest.
12. Do not write content you cannot see on the page. If a word is cut off at the scan edge, put the guess in grey and say so.
13. Captions and labels come only from the page. Never invent a caption. Figures are transcribed as labels only (see 3b).
14. After each fragment, compare the first and last words of each sheet with the page image, and check the printed page number on each sheet against its image.

## 3b. Figures (the Electrodynamics II rule)

- **Codex makes every figure in a section PDF.** Briefs go into sheets of four (`image-gen/run_sheets_*.py`, one `codex exec` per sheet), with a log that has START and DONE lines. Crop and flatten with `process_images.py` into `final/*.jpg`.
- Read every sheet before accepting its crops. A wrong label means the sheet is re-run after tightening that panel's brief. Write Greek letters as symbols in the brief (θ, Φ, μ0), never as words.
- SVG drafts in `diagrams/` are reference only. A figure not made by Codex is a build failure.
- Codex takes about 2–3 minutes per sheet. Run it in the background and wait on the DONE line of its own sheet, not with `sleep`.
- In SVG text and maths, escape `<` (for example `z &lt; 0`), or the browser reads it as a tag.
- Never nest `<figure>` inside `<figure>`. Replace the whole placeholder wrapper.

## 4. Assemble

15. Concatenate the fragments in order into `OUT_HTML`, with one shared stylesheet. The stylesheet comes from the last working PDF-to-HTML file in the folder. Do not write a new one from memory.
16. Add a contents sheet that lists the excerpt page ranges, the section numbers, the syllabus items, the offset, the edition, and the gaps.

## 5. Check (CHECK: show the results to the user before mailing)

17. Tag balance: every `div`, `figure`, `table`, `p`, `span` opens and closes (count them).
18. Sheet count equals the source page count plus the contents sheet.
19. Maths: the count of `$` is even, and `$$` blocks are closed. Run the check for raw `<` inside maths.
20. No `overflow-x: auto` on equation blocks (it causes scrollbars).
21. Render the last three sheets with headless Chrome (`--print-to-pdf` with `--virtual-time-budget=20000`), using a temporary copy that holds only those sheets. View the image. Check for misaligned columns, clipped labels, overlapping text, and raw TeX in the PDF text.
22. Render a few figures with `rsvg-convert` to PNG and check them before inserting.
23. Check every numbered item on the sheets against the contents sheet.

## 6. Index

24. Generate `index.md` from the final HTML: one row per numbered item (definition, law, theorem, example) and per table, with the printed page and the sheet anchor. Do this after the last edit.

## 7. Mail (CHECK: confirm before sending)

25. Send the final HTML and, if asked, the source PDF, with `quickmail`. One file per message. Use a subject that names the book, the edition, and the printed pages. Check the mail log first so no file goes twice.

---

## Rules carried over from the Electrodynamics II and Abstract Algebra processes

- Never write content you cannot see. Captions come only from the page.
- Never put a raw `<` inside `$…$` or `$$…$$`. Write `\lt` instead, in the build script.
- Make every edit in the source (fragments, build script), then rebuild from source. Edits made directly in the HTML are lost on rebuild.
- Do not edit a generated file with `sed` when the replacement contains `&`: use a Python string replacement with an assertion on the match count.
- Greedy regex replacements have damaged files before. Locate each block by an exact anchor and assert the count is 1. If a file is damaged, rewrite it whole.
- Trim openers exactly. A printed page can hold the last exercises of one section and the opener of the next. Cut the earlier material from the book source and say so in its source header.
- Keep a CSS class name out of use if the stylesheet already uses it for something else.
- Exercises are kept in full, with printed numbering. An excerpt holds printed text only; named items and captions are not added by hand.

## Pointers

- Find the source PDF on disk before asking for pages. Map book page to PDF page with `pdftotext` split on form feeds. The table of contents of Book 1 gives the printed start pages of each section (see `../../CLAUDE.md`).
- The disk copy of Book 1 has 614 PDF pages. Its offset is not yet measured.
- Notes are made from these sheets by `prepare/process.md` and the module's own process file.

## Method used from Module II (2026-10-16): Codex extraction, then verification
This replaces hand transcription for every excerpt from now on. It was tested on Module II (printed 151–198).
1. **Render** each PDF page to PNG (`pdftoppm -r 100`) and extract its raw text (`pdftotext -f N -l N`). Copy both into a scratch folder that Codex can read.
2. **Split** the pages into four chunks of about twelve pages. Run one `codex exec --sandbox workspace-write -C <scratch folder>` per chunk, in the background, with a log per chunk (`run_extract.sh` pattern: prompt names the page images, the image is the authority, one `<section class="sheet book" id="pNNN">` per printed page, equations as `$$...\tag{N}$$`, figures as caption labels only, no added content, unsure equations marked `[check]`).
3. **Check that every chunk covered its pages.** A first run stopped after about eight pages per chunk, so run the check: each `part-*.html` must hold every printed page id of its range (`grep -o 'id="p[0-9]*"'`). Re-run a chunk that is short.
4. **Verify before use.** Compare the first few sections with the page images (the first chapter opener and two equation pages at least). Check the `[check]` marks and any `[as printed]`. If the first sections match, proceed; if not, correct the prompt and re-run.
5. **Assemble.** Remove the running heads (page headers are not content), keep the printed page number on each sheet, build the excerpt and the two book sources per chapter.
6. **Coverage.** Run the equation coverage check. Any numbered equation the derivation does not display is listed at the end of its section with the printed LaTeX from the transcription (`add_book_equations.py`), so that nothing is lost.

Findings from the test: the Codex text matched the page images for printed pp. 151–154 and 186, including the printed specific-heat equation (5.51), which my hand-written excerpt had got wrong. The hand excerpt was replaced by the Codex version.
