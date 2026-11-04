Real Analysis II and Abstract Algebra I, Friday 23 Oct 2026, study day 1 of 10: write ONE data.json for the Study Match app, covering only the topics listed below.

You are an assistant. You turn the attached source material into ONE `data.json` file for the Study Match app. Read every file in the attached `skills/` folder before writing (00-START-HERE, 01-schema, 02-derivations, 03-svg-art, 04-questions, 05-checklist, example-minimal.json). Use the attached syllabi and textbook extracts for the content. The attached `topics-image.jpg` is the timetable: it shows which topics are for today.

Topics for today (use ONLY these; do not add any topic from the syllabi that is not on this list):

Real Analysis II (3 hours), section "Real Analysis II" (5 sheets):
1. Selected problems on Riemann integration
2. Pointwise convergence of sequences of functions
3. Uniform convergence and uniform norm
4. Interchange of limits
5. Interchange of limit and continuity
Sources: `real-analysis-ii/syllabus.pdf` (MAT5CJ301, Bartle & Sherbert 4e; unit 3 = Riemann integral, book sections 7.1-7.3, for topic 1; unit 4 = sequences of functions, book sections 8.1, 8.2.1-8.2.2, for topics 2-5), `real-analysis-ii/real-analysis-2-textbook-module-3.pdf` (Bartle Ch. 7, Riemann integral; use it for topic 1), `real-analysis-ii/real-analysis-2-textbook-module-4.pdf` (Bartle Ch. 8, sequences of functions; use it for topics 2-5).

Abstract Algebra I (2.8 hours), section "Abstract Algebra I" (2 sheets):
6. Cosets of a subgroup
7. Lagrange's theorem and consequences
Sources: `abstract-algebra-i/syllabus.pdf` (MAT5CJ302, items 13-16), `abstract-algebra-i/fraleigh-8ed-section-10-cosets-lagrange.pdf` (Fraleigh, A First Course in Abstract Algebra, 8th ed., Section 10 "Cosets and the Theorem of Lagrange", printed pp. 97-104). Do not use permutations or other Section 8 material; that is not on today's list.

Structure:
- meta.title: "Study Match: Real Analysis II and Abstract Algebra I"; meta.subject: "Real Analysis II, Abstract Algebra I"; home "Focus", opponent "Time", version 1.
- match: use the defaults from 01-schema (periodEnds [25, 45, 70, 90], breaks [5, 10, 5]).
- sections: 2 sections, in this order: "Real Analysis II" (topics 1-5, short name "Real Analysis"), "Abstract Algebra I" (topics 6-7, short name "Abstract Algebra"). Each sheet is one topic from the list above.
- Each sheet: 6-14 cards in study order, following 01-schema.md and 04-questions.md. Concept cards first, one derivation or proof card where a result is derived (02-derivations.md), one worked example with numbers or a concrete group or function where it helps, then 3-5 questions (mcq, fill, number) at the end of each sheet. Use everyday or Indian and Kerala examples only where they fit naturally. Use SVG pictures only where a picture helps (03-svg-art.md); graphs of function sequences and partitions are good candidates.
- Stay strictly inside the topics above. Do not write about topics from the syllabi that are not on this list (for example improper integrals, series of functions beyond the topics, Sylow theorems, or normal subgroups and quotient groups).

Output rules:
- Output ONLY the JSON. No commentary, no code fence, nothing before `{` or after the final `}`.
- Valid JSON: double quotes only, no trailing commas, every backslash in TeX written twice (see 01-schema.md).
- Before you send it, run the checklist in 05-checklist.md against your JSON.
- If the JSON is too long for one reply, send one section at a time as `{ "sections": [ ...one section... ] }` and say "next" when I ask. I will merge the parts with `python build.py --merge part1.json part2.json ...`.
