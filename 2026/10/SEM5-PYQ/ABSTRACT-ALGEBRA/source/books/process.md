# process.md: PDF → HTML conversion (books folder)

Copy this file into a new folder, then tell Claude: **"run process.md"**. Claude follows the steps below, in order, and stops at each marked CHECK for your OK.

Set these before running (edit the first lines):

- `SOURCE_PDF`: the PDF to convert (for example `fraleigh-8ed_module1_excerpt_pp12-40.pdf`)
- `OUT_HTML`: the HTML file to write (for example `fraleigh-8ed_module1_excerpt.html`)
- `EDITION`: the edition the excerpt is taken from (the syllabus names the 7th ed.; see CLAUDE.md)
- `CHUNK`: pages per fragment (default 3)
- `MAIL_TO`: recipient (default `ihjas.one@gmail.com`)

---

## 1. Inspect the source

1. `pdfinfo SOURCE_PDF`: note page count and page size.
2. `pdftotext SOURCE_PDF -`: if the word count is near zero, the PDF is a scan. Read the pages visually, as images. Do not trust OCR for symbols.
3. Record which book page numbers appear on each PDF page, and where the excerpt jumps. Excerpts are not continuous. Write the jumps down before converting anything.
4. Record the edition and the section numbers printed on the first page of the excerpt. Compare them with the syllabus section numbers.

## 2. Split

5. Split the PDF into parts of `CHUNK` pages with pypdf. Keep the parts in the scratchpad, not in the project folder.
6. Confirm the number of parts times `CHUNK` covers the page count.

## 3. Convert, one part at a time

7. Read one part as images (the Read tool on the part PDF). Read the text layer too, to catch words.
8. Write `frag-NN.html` for that part, one `<div class="sheet book" id="pdf-pNN">` per PDF page, headed with the book page number as printed.
9. Transcribe exactly what is on the page. Keep the printed theorem, definition, example and exercise numbers. Keep printed typos and mark them as printed.
10. If a sentence runs onto the next page, end the fragment mid-sentence with a `cont` marker, and start the next sheet with the rest.
11. Do not write content you cannot see on the page. If a word is cut off at the scan edge, put the guess in grey and say so.
12. Captions and labels come only from the page. Never invent a caption.
13. After each fragment, check it has the expected number of sheets and the right page ids. Compare the first and last words of each sheet with the page image.

## 4. Assemble

14. Concatenate the fragments in order into `OUT_HTML`, with one shared stylesheet. The stylesheet comes from the last working PDF-to-HTML file in the folder. Do not write a new one from memory.
15. Add a contents sheet that lists the excerpt page ranges, the section numbers, the syllabus items, and the gaps.

## 5. Check (CHECK: show the results to the user before mailing)

16. Tag balance: every `div`, `table`, `p`, `span` opens and closes (count them).
17. Sheet count equals the source page count plus the contents sheet.
18. Maths: the count of `$` is even, and `$$` blocks are closed.
19. Render the last three sheets with headless Firefox (`firefox --headless --screenshot`), using a temporary copy that holds only those sheets. View the image. Check for misaligned columns, clipped symbols, and overlapping text.
20. Check every definition and theorem number on the sheets against the contents sheet.

## 6. Mail (CHECK: confirm before sending)

21. Send the HTML and, if asked, the source PDF, with `quickmail`. One file per message. Use a subject that names the book, the edition, and the pages.

---

## Rules carried over from the Electrodynamics II process

- Never write content you cannot see. Captions come only from the page.
- Never put a raw `<` inside `$…$` or `$$…$$`. Write `\lt` instead, in the build script.
- Make every edit in the source (fragments, build script), then rebuild from source. Edits made directly in the HTML are lost on rebuild.
- Mail only after the CHECK step. Check the mail log so no file is sent twice.

## Pointers

- Find the source PDF on disk before asking for pages (`find /home/ihjas -iname "*fraleigh*"`). Map book page to PDF page with `pdftotext` split on form feeds. Record the offset and confirm it on two chapter openers before relying on it. The offset is not yet measured for the disk copy (8th ed.).
- Excerpts that run across a chapter end: keep the chapter's own exercises, so the sheet count equals the PDF page count.
- Notes are made from these sheets by `prepare/process.md` and the module's own process file.


## Findings from Module 1 (added 2026-10-15)

Module 1 was extracted from the 8th edition copy on disk, because the 7th edition is not on disk. These findings apply to every book extraction in this project.

**Before transcribing (step 1)**
- Check the edition on the book against the syllabus. The syllabus cites section numbers from its own edition. If they differ, write a concordance first. The 8th edition front matter lists former and new section numbers (Contents page, then the "Section N (Title). Former Section M" notes). Record the concordance in the contents sheet and in `CLAUDE.md`.
- Match syllabus items by content, not by number, and say so in the contents sheet. Where the book has no section for an item (here, the 7th-edition isomorphic binary structures), mark the item "partly covered" and say what is included.
- Find the printed-page offset on two pages from the headers (8th edition: printed = PDF page minus 17; PDF 28 = printed 11). The offset is printed on each sheet; check it against the image, not the text layer.
- A section can start on a part-opener page. Check the first page of the scope before choosing the excerpt range (PDF 28 has the Part I opener and the first lines of Section 1).

**Transcribing (step 3)**
- Read every sheet as an image. The text layer of this book is clean but drops fractions, sub- and superscripts, and table layout, so use it only for checking words.
- Write one fragment file per 2 to 3 sheets, and check each sheet's printed number against its image before writing. Misfiling happened once: printed 25 and 26 content was written into the wrong sheets, and the fragment was rewritten from the images. After every fragment, compare the first and last words of each sheet with the image.
- Tables: use HTML tables; use a stacked layout (one table per row, or a flex row) for tables printed side by side. Keep printed blanks and printed "?" marks.
- Keep exercises in full (printed numbering), including the exercises that run onto the next section's opener page.

**Assembly and checks (steps 4 and 5)**
- Reuse the stylesheet and MathJax head from the last working excerpt. Add extra CSS only in a second `<style>` block.
- Do not use a CSS class name that is already used by the stylesheet for something else. Here `.ex` (Example box) clashed with exercise lists, so exercise lists are `.exl`.
- Run tag balance (`html.parser`), dollar-sign parity, and a check for raw `<` in maths. Count sheets: contents sheet plus the book pages.
- Render with `render.py` (MathJax error count). Its gutter check is for two-column notes: on a single-column excerpt its flags are false positives. Look at a few rendered pages instead.
- Do not edit a generated file with `sed` when the replacement text contains `&`: in `sed` `&` means the matched text, which garbled a contents row here. Use a Python string replacement.

**Index (new step)**
- Generate `index.md` from the excerpt HTML: one row per numbered item (definition, theorem, example) and per table, with the printed page and the sheet anchor. Do this after the last edit, so the index matches the file.

**Mailing**
- Mail the single final HTML. Its subject names the book, the edition, and the printed pages, and the body records the edition warning.

## Lessons from publishing Module 1 (added 2026-10-15)
- **Trim the excerpt at section boundaries.** A printed page can hold the last exercises of the previous section and the opener of the next. Build the section's book source from the sheets, cut the earlier section's material, and record the cut in the source header.
- **Coverage is part of the source.** Each numbered item in a book source (definitions, theorems, corollaries, examples, tables) gets a coverage check against the notes. Tables are checked by their captions, which are separate from the `num` labels.
- **Width is part of the source check.** A display that is wider than its column is a build failure. Check the rendered right edge of every display before publishing (see `prepare/module-1/process.md`, lessons from publication).
- **Index from the final HTML.** Generate `index.md` after the last edit, so the page numbers and anchors match the file.

## Findings from Modules 2 to 4 (added 2026-10-16)
- **The excerpt holds printed text only.** Named exercises and captions were added by hand twice and removed. The notes carry the named exercises; the excerpt keeps each exercise once at its printed position.
- **Check the printed page number on each sheet** against its image before writing it (a sheet was filed under the previous page once).
- **Transcribe figures as labels only.** Figure captions come from the page; where a page has no caption, say so.
- **Trim openers exactly.** Section openers at the foot of a page are trimmed with a marked note, as in the Module 4 excerpt.
- **Check raw TeX in the PDF text.** The MathJax error box count can read zero when MathJax did not run.
