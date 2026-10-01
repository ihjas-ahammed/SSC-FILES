You are Antigravity working in /home/ihjas/Documents/GitHub/SSC-FILES on the Optics study app at SSC-V4/optics. Work autonomously, do not ask questions, print ONE short status line after each phase.

WHY THIS SECOND PASS: a first pass compared the app with the textbook only unit-by-unit using concept titles and declared 21 of 22 units "covered". That was too coarse. The student reports missing content and inconsistencies with the textbook. This pass must be STRICT and ITEM-BY-ITEM.

INPUTS (as before)
- Syllabus SSC-V2/SEM5/PHY/OPTICS.pdf; sources/section_map.md already maps every unit to Ghatak sections and PDF pages (verify pages, fix if wrong).
- Book 1: SSC-V2/SEM5/PHY/books/Optics by Ghatak.pdf (pdftotext -layout -f N -l M). Book 2 is NOT available: Module IV is checked against Ghatak's polarisation chapters (22, 24.5); say so in the report.
- The app's content: SSC-V4/optics/authoring/*.py. Read SSC-V4/optics/AUTHORING.md and HOOK.md first (DSL: raw strings, single backslashes; ids permanent, append only; Cartesian sign convention as Ghatak; step meanings in plain language).

PHASE A — EXTRACT EVERYTHING REQUIRED
For EVERY textbook section the syllabus requires (all four modules), extract the full text of the section to sources/textbook/sec_<number>.txt (pdftotext with the exact page range). Keep going until all required sections are extracted (they are the provenance and the source for the next phases).

PHASE B — ITEM INVENTORY (the important part)
Read each extracted section completely. Write sources/section_inventory.md. For each section list EVERY item the book gives, one line each: subsection headings, definitions, each derivation (with its equation numbers), each key formula (with equation number), each worked Example (number, given data, final answer), each numerical constant or table value, each stated physical result or remark that a student could be asked. Then mark each item with one of:
  PRESENT  — the app states the SAME result with the SAME formula and symbols/sign convention (cite the concept id or exercise id)
  DIFFERENT — the app has it but the formula, symbol convention, definition or number differs (quote both, cite textbook page)
  ABSENT   — the app has no such statement or example
Be strict: search the authoring files (grep for the formula and for keywords) before marking PRESENT. A concept with a similar title is NOT enough.

PHASE C — GAP REPORT
Write sources/gap_report_v2.md: all DIFFERENT and ABSENT items grouped by module and unit, each with the textbook section, page, equation/example number and one line of why it matters for the exam. Separate worked EXAMPLES (to become written exercises) from THEORY items (to become concepts or corrections).

PHASE D — UPDATE CONTENT (DIFFERENT and ABSENT only; never delete or renumber existing content)
1. DIFFERENT: correct in place in the existing authoring file, keeping the id. Log every change in sources/SYNC_SUMMARY_V2.md.
2. ABSENT theory: add concepts with C(...) in NEW files authoring/m1.extra.py … m4.extra.py (kind, tier 'core', statement, intuition, needs, traps, cards; a proof with rungs when the book derives it). New ids continue the numbering of their section. Base every statement, formula and number on the extracted text.
3. ABSENT worked Examples: add them as written exercises with W(...) in the same extra files (ids continue q.op.<module>.NN; the book's data and answer; the solution as the book gives it, in HTML paragraphs with $...$ and $$...$$; tests=[concept ids that exist]).
4. Every new concept with a proof needs an S(...) entry in authoring/steps.py: one plain-language meaning per step (1–3 sentences saying what the step does and why; no restated notation). Use an existing diagram kind only if it truly matches, otherwise NF(concept_id, step_index, 'needs a new diagram: <what to draw>'). Use NS(concept_id, reason) if there is no simulation. List every needed diagram in the report.
5. Register the new generated data files: tools/author.py writes data/mN.extra.concepts.js and data/mN.extra.written.js; add them to the `live:` list in app/sources.js right after the module's existing files (keep every quoted path on its own line).
6. Do NOT edit data/*.js by hand, the theme, or app code. Only authoring/, sources/ and the live list in app/sources.js.

PHASE E — VERIFY
From SSC-V4/optics run: python3 tools/author.py ; node tools/check_tex.js (0 errors) ; python3 tools/audit_steps.py ; node tools/audit_optics.js. Fix everything you caused. Then write sources/SYNC_SUMMARY_V2.md: counts of items per module (PRESENT/DIFFERENT/ABSENT), what was added (ids, titles), what was corrected, what remains (diagrams to draw, anything you could not source).

RULES: never commit, push or deploy. Never invent physics or numbers that are not in the textbook. If Ghatak defines a symbol differently from the app (for example slit width, grating element, refractive-index symbols), prefer making the app match Ghatak's symbols in the statement text while keeping ids.
