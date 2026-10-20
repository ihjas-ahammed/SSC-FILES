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

## Module 2 PYQ and model paper (added after Module 2)

Selection (what was done for Module 2):
1. Pool: all seven papers, as for Module 1. Electrodynamics I papers were included where a question fits the module (the same choice as Module 1); say so in the module note.
2. Pick only questions on the module's topics. Leave out waves, AC circuits, and magnetic-charge questions that belong to other modules.
3. Group by marks: A (1–3 marks), B (4–5 marks), C (10 marks). Keep the paper's own marks.
4. Sort inside each group by topic (in the module's syllabus order), then by date (April before November, earlier years first).
5. Keep the wording. A true/false statement printed without its question wording gets "State whether true or false:" in front.

PYQ layout:
6. Build the HTML from a script (`build_pyq2.py` in the scratchpad when rebuilt). Title block: course and module name only. No name / reg-no block and no paper code in the PDF (CLAUDE.md rule).
7. Print with headless Chrome: `--print-to-pdf` with `--virtual-time-budget=20000` so MathJax finishes. Check the page count (2 pages for 31 questions).
8. Keep section and topic headings with the next line (`break-after: avoid`), so a heading is never left at the foot of a page.
9. Render page 1 to an image and look at it before mailing. Maths must be visible; text extraction does not show it.

Model paper:
10. Questions only on page 1 (about 17 questions, with section headings). Each question shows its marks. No hint labels in the model paper (the PYQ file carries the Month Year hints; models do not).
11. Answer key and syllabus mapping on page 2 (`page-break-before: page`). The key is a separate block, not inside the question sheet.
12. No "how the paper was made" text in the paper. Notes about the method go in the module's process file, not in the paper.
13. Regenerate the HTML from the script after any change (`build_model_module2.py` for the model paper, `build_pyq_module2.py` for the PYQ); do not patch the HTML by hand.
14. Blank pages: the question sheet must not force a fixed page height in print (use `height:auto` for print), or a blank page follows it.

## Lessons from Module 4 PYQ (added 2026-10-15)

- Pool: all seven papers. First a keyword search of the text; then read each candidate's marks from its section header. Section A (1 or 3 marks), Section B (4 or 5), Section C (10 or 11).
- Group by marks: A (1–3 marks; a 2-mark question goes here), B (4–5), C (10). Inside each group sort by topic (syllabus order), then by date (year, then April before November).
- Blank items: `______`. True/false statements: prefix "State whether true or false:". Keep the printed wording.
- Papers with no questions for the module (e.g. 2020 Apr for Module 4) are noted in the module record, not forced into the paper.
- Model paper: about 17 questions on page 1; for print set question text to 12 px and section titles to 13 px so the page holds all questions; key and mapping on page 2. Mapping cites the book's section numbers.
- Build with a script; check the page count with `pdfinfo`; rasterize page 1 and look.
