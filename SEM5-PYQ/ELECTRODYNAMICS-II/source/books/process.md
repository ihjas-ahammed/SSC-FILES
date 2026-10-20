# process.md: PDF → HTML conversion (books folder)

Copy this file into a new folder, then tell Claude: **"run process.md"**. Claude follows the steps below, in order, and stops at each marked CHECK for your OK.

Set these before running (edit the first lines):

- `SOURCE_PDF`: the PDF to convert (for example `Griffiths-5ed_Module1_excerpt_pdf190-218_226-232_292-321.pdf`)
- `OUT_HTML`: the HTML file to write (for example `Griffiths-5ed_Module1_excerpt.html`)
- `CHUNK`: pages per fragment (default 3)
- `MAIL_TO`: recipient (default `ihjas.one@gmail.com`)

---

## 1. Inspect the source

1. `pdfinfo SOURCE_PDF`: note page count and page size.
2. `pdftotext SOURCE_PDF -`: if the word count is near zero, the PDF is a scan. Read the pages visually, as images. Do not trust OCR for maths.
3. Record which book page numbers appear on each PDF page, and where the excerpt jumps. Excerpts are not continuous. Write the jumps down before converting anything.

## 2. Split

4. Split the PDF into parts of `CHUNK` pages with pypdf. Keep the parts in the scratchpad, not in the project folder.
5. Confirm the number of parts times `CHUNK` covers the page count.

## 3. Convert, one part at a time

6. Read one part as images (the Read tool on the part PDF). Read the text layer too, to catch words.
7. Write `frag-NN.html` for that part, one `<div class="sheet book" id="pdf-pNN">` per PDF page, headed with the book page number as printed.
8. Transcribe exactly what is on the page. Keep the printed equation numbers. Keep printed typos and mark them as printed.
9. If a sentence runs onto the next page, end the fragment mid-sentence with a `cont` marker, and start the next sheet with the rest.
10. Do not write content you cannot see on the page. If a word is cut off at the scan edge, put the guess in grey and say so.
11. Figures: draw them as SVG only if the geometry is fully given in the text or is computable from a stated formula. Otherwise write a labelled placeholder. Never invent a caption.
12. After each fragment, check it has the expected number of sheets and the right page ids.

## 3b. Figures (if the book has diagrams)

- Redraw figures as SVG from a generator script, not by hand in the HTML. Keep one function per figure, and keep the generator in the scratchpad.
- Compute geometry from the stated formulas where the text gives them (field lines, refraction, potentials). Mark schematic figures as schematic in the caption.
- Render every figure to PNG (`rsvg-convert`) and make contact sheets with `montage`. Look at them before inserting.
- Run the label checker over all figures: it rasterizes each figure without text and moves any label that touches a stroke. Review the result by eye; the checker can move labels that were fine.
- In SVG text, escape `<` as `&lt;` (for example `z &lt; 0`), or the browser reads it as a tag.
- Insert figures by replacing the whole placeholder wrapper, so no `<figure>` sits inside another `<figure>`.

## 5b. Rebuild order (run in this order, every time)

1. Generate the figure SVGs (figs.json).
2. Run the label checker.
3. Assemble the page fragments into the HTML.
4. Inject the figures in place of the placeholders.
5. Run the fixup: unwrap nested figures and escape bare `<`.
6. Check the counts: no `figbox` left, no nested `figure`, SVG count matches the placeholder count.

## 4. Assemble

13. Concatenate the fragments in order into `OUT_HTML`, with one shared stylesheet. The stylesheet comes from the last working PDF-to-HTML file in the folder. Do not write a new one from memory.
14. Add a contents sheet that lists the excerpt page ranges and the gaps.

## 5. Check (CHECK: show the results to the user before mailing)

15. Tag balance: every `div`, `figure`, `table`, `p`, `span` opens and closes (count them).
16. Sheet count equals the source page count plus the contents sheet.
17. Maths: the count of `$` is even, and `$$` blocks are closed.
18. No `overflow-x: auto` on equation blocks (it causes scrollbars).
19. Render the last three sheets with headless Firefox (`firefox --headless --screenshot`), using a temporary copy that holds only those sheets. View the image. Check for: misaligned columns, justified lines with `<br>` (use `text-align: left` in boxes), clipped labels, and overlapping text.
20. Render a few figures with `rsvg-convert` to PNG and check them before inserting.

## 6. Mail (CHECK: confirm before sending)

21. Send the HTML and, if asked, the source PDF, with `quickmail`. One file per message. Use a subject that names the book, the edition, and the pages.

---

## Mistakes we made, and the rule that prevents each one

These happened in the Griffiths conversion. Each one is now a rule above.

| What went wrong | Rule |
|---|---|
| I wrote a sentence on page 170 that was not on the page. | Never write content you cannot see. Step 10. |
| I put page 170's text on page 169 when splitting a sheet. | After each fragment, compare the first and last words of each sheet with the page image. Step 12. |
| I garbled Eq. 6.8 in the first draft. | Re-read every equation against the image before moving on. Step 8. |
| I invented a "continued" caption at the top of page 289. | Captions come only from the page. Step 11. |
| Equations had scrollbars. | No `overflow-x: auto` on maths. Step 18. |
| Final pages misaligned: justified lines with `<br>` stretched, and a multi-column system did not line up. | Left-align boxes; use separate display rows. Step 19. |
| I said "all done" with placeholders still in the file. | Report the count of placeholders left, every time. |
| Gaps in the excerpt were not announced at first. | Record the jumps before converting. Step 3. |
| Figures pushed later pages sideways. | Never nest `<figure>` inside `<figure>`; replace the whole wrapper. Step 3b. |
| A bare `<R` in a display equation hid the equation. | Escape `<` in maths and SVG text. Step 3b and fixup. |
| Labels touched strokes or floated far away. | Measure with the label checker, then review by eye. Step 3b. |
| A broken figure got reported as fine. | Look at every contact sheet before saying a figure is done. |
| The rebuild lost edits made directly in the HTML. | Make every edit in the source (fragments, generator, injector), then rebuild from source. Step 5b. |

## For the PYQ folder

The PYQ folder uses the same steps with these differences:

- Papers are exam scans. Read each page image. Many have text cut off at the right edge: restore those letters in grey, and say so on the page.
- Keep the printed paper code (for example `D 41960`) in the header.
- Mark marks breakdowns exactly as printed. Check that the section totals add to the printed maximum.
- Use the `university-pyq` naming, `YEAR-MONTH.html`, one paper per file.
- Do not delete source PDFs unless the user asks. Do not mail before the CHECK step.


---

## Lessons from the Module 2 excerpt (added 2026-10-15)

These came up while building `Griffiths-5ed_Module2_excerpt.html`. They apply to every book conversion from now on.

**Finding the source (step 1)**
- Before asking the user for pages, search the disk for the book PDF (`find /home/ihjas -iname "*griffith*"`). The full Griffiths electrodynamics PDF is in `SSC-FILES/2025/ELECTRODYNAMICS I/`.
- Map book page to PDF page with `pdftotext -layout` split on form feeds. Record the offset (Griffiths 5th ed.: printed page = PDF page − 24). Confirm it on two chapter openers before relying on it.
- Find chapter boundaries by searching the text layer for section numbers and headings (for example `7.3.6`, `More Problems on Chapter 7`, the next chapter title).

**Scope (step 1 and step 4)**
- If the syllabus sections sit inside one chapter, take the whole chapter. Book pages then run without gaps, and you do not need to guess where a gap starts.
- Keep the chapter-end problems and the chapter's own "Intermission" or summary pages, so the sheet count equals the PDF page count (step 16).
- Mark sections outside the syllabus in the contents table ("not in list (beyond syllabus)"). Do not drop them.
- Record the section-to-page table in the contents sheet (book pages and excerpt pages), with a syllabus-item column.

**Reading and writing (step 3)**
- Read the excerpt PDF directly with the Read tool, four pages at a time (`pages: "1-4"`), and write one fragment file per four sheets. No separate split step is needed for an excerpt you have already extracted.
- Before writing a fragment, check each sheet's printed page number against the image. Misfiled pages happened once (a Problem box was put on the wrong sheet). Compare the fragment's sheet numbers with the page list before moving on.
- When a subscript or small symbol is unclear in the image, check the text layer (`pdftotext`) for that page. If still unclear, mark it. Do not guess. Example: the footnote number on p. 323 was illegible and marked `[number not legible in scan]`.
- Box conventions: `.ex` for Example boxes, `.prob` for Problem boxes, `.ex-cont` for the part of a box after a page break, and `.figbox` for figure placeholders.

**Maths and HTML (step 5)**
- Never put a raw `<` inside `$…$` or `$$…$$`. The browser reads it as a tag. Write `\lt` instead. Do this in the build script, not by hand.
- Do not put a combined equation number inside `\tag{…}` (for example `(2.43 and 2.45)`). It overflows on phones. Put it in a right-aligned line beside the equation.
- Equation blocks may need a horizontal scroll on phones. Add this only inside a phone-width media query. Keep no scroll on desktop.
- Figures: the Module 1 stylesheet has `figure svg { … }`. MathJax draws its maths as inline SVG, so that rule blows up every symbol inside a figure. Use `figure > svg` instead.
- Build the file from a script, not by hand: take the head and stylesheet from the last working excerpt, apply the CSS fixes above, then add the contents sheet and the fragments in order, then run the `\lt` fix. Keep the script in the scratchpad.

**Checks (step 5 and 19)**
- Tag balance: parse the body with `html.parser`. Expect no unclosed tags, and one harmless mismatch for `</html>` if you parse from `<body>`.
- Render the last three sheets in headless Firefox, as before. Also render at phone width (412 px) any sheet with a long equation or a figure, and look at it.

**Mailing (step 6)**
- `quickmail <file> ihjas.one@gmail.com -s "<book>, <edition> - <module> excerpt, pp. <range>"`. One file per message. Include a one-line body saying what changed.

**Working files**
- Put temporary files in the session scratchpad, not in the project folder or your home folder.

---

## Study notes (added later)
- Study notes for Module 1 (sections 4.1–6.4), with figures and two-column PDFs, follow `prepare/module-1/process.md`, not this file. Read that file before starting a new section.


---

## Pointers and updates (as of Module 2)

- The conversion steps above are for the book excerpt sheets (PDF to HTML). Notes (study and structured PDFs) are made from those sheets by `prepare/module-N/process.md`.
- Full Griffiths electrodynamics PDF (628 pages): `SSC-FILES/2025/ELECTRODYNAMICS I/Introduction to Electrodynamics (Griffiths, David J.) (Z-Library).pdf`. Printed page = PDF page − 24 for Chapter 7. Confirm the offset on two chapter openers before using it.
- Find the source PDF on disk before asking for pages. Use `pdftotext` with form-feed splitting to map pages. Record the offset.
- Excerpts that run across a chapter end: keep the chapter's own problems and any intermission page, so the sheet count equals the PDF page count.
- Chapter 7 excerpt for Module 2: `Griffiths-5ed_Module2_excerpt.html`, 64 sheets (book pp. 298–361).
- Page layout (margins, column text) is set by the notes builder, not by this file. See `prepare/module-1/process.md`, section 17.

## Lessons from Module 4 (added 2026-10-15)

- Find the source PDF on disk first (`find` by author or title). Book 2 for Module 4: Murugeshan, 10th ed.; printed page = PDF page − 7 (checked on PDF pages 321, 330, 345, 351).
- Map section headings to PDF pages with `pdftotext` split on form feeds. Headings can carry a special glyph before the number (e.g. `12.1\x07`), so search with `.{0,3}` between number and title.
- Sheets: read each page image; check the printed number in the header against the image; check the first and last words of each sheet. Equations misplaced between sheets happened twice; keep each equation on the printed page where it appears.
- Keep the book's own equation numbers. Restarted numbering in sub-parts (e.g. (1)–(4) twice in one section) is kept as in the book and tagged by part.
- Record scope in the contents sheet: in scope, background, and not transcribed, with the reason. Put a heading-only sheet for a section that begins outside the module, not its full text.
- Worked examples: copy the printed numbers exactly; check each computed result against the book page.
