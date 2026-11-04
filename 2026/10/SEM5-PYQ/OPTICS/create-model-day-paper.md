# create-model-day-paper: model paper for today's study topics

**Trigger.** The user uploads a screenshot of the study plan and writes "create model day paper". Nothing else is needed.

**Output.** `<SUBJECT>-MODEL-PAPER-<N>.html` and `.pdf` in the subject folder, built from `model-paper-<N>.json` by `build_model_paper.py`. Use the next free N. Mail only when the request says mail.

Copy this file and `build_model_paper.py` unchanged into each subject folder. Only the JSON and the subject facts change.

---

## 1. Read the screenshot

- The day's topics (the bullet list). Each bullet is one topic to cover.
- The subject name, which picks the folder under `SEM5-PYQ/`.
- The "3 hours" on the card is study time. It is not the exam time. The exam time comes from the university paper (step 2).

## 2. Read the subject's record

1. The subject's `CLAUDE.md` (sources, module status, pool locations).
2. The syllabus (`syllabus.html`, or `syllabus.pdf` in some subjects): the module and its numbered items, and the book sections listed for each module ("Sections 4.1.1 – 4.1.4 … of chapter 4"). **These section lists are the scope.** If the subject has no section list, scope is the syllabus's topic list, and the same rule applies to topics.
3. The university paper for the subject's code, found under `GitHub/SSC-FILES/PYQ/` or `ssc-v3/fyug/`. Render it to an image and read it. If the subject has no FYUGP paper for its own code on disk (only CBCSS papers), use another FYUGP paper of the same subject first (a different code of the same course). If none exists, use any FYUGP major paper of the same discipline. Say which paper was used. Record:
   - section names, the marks per question, the ceiling per section, "answer any N" rules;
   - maximum marks, maximum time, and the header lines.
   The layout in this subject was: Section A 10 × 3 marks (ceiling 24), Section B 8 × 6 (ceiling 36), Section C 2 × 10 (answer any one). Total 70, 2 hours.

## 3. Map the day's topics to scope

1. Match each screenshot bullet to a syllabus item of the module.
2. Write the scope as book sections: take the section numbers from the syllabus list for those items only.
3. **Do not use a section that the syllabus does not list.** This applies even when the topic sounds right. A question is in scope only if its source section is in the list.
4. Check the source section, not the topic name. For each candidate question, find its section heading in the book excerpt (the subject's CLAUDE.md says where the excerpts are) and confirm it is in the list.

Module 1 example. A question on "∇·H = −∇·M" sits in §6.3.2 (not listed), so it is out. A question on the energy of a dipole sits in §4.1 (listed), so it is in. A question on B boundary conditions sits in §6.3.3 (not listed), so it is out.

## 4. Build the question pool

- Pool: every past paper and model question the subject folder holds for that module (its `source/pyq` files and model-missed-topics files).
- Keep only the questions in scope (step 3).
- Keep the wording as written. Do not add topics the syllabus does not list.
- Mark relabelling is allowed: the paper takes the university layout's marks (for example 3, 6 and 10). Say so in the final message.
- Sort inside each section by topic, in syllabus order.
- Spread the questions across the day's topics. Every topic should appear at least once.

If the in-scope pool is too small for the layout, do not pad with out-of-scope questions. Write new questions only on in-scope sections, and say which ones were written.

## 5. Write the JSON

`model-paper-<N>.json` has:

- `stem`: the output name, for example `ELECTRODYNAMICS-II-MODEL-PAPER-1`;
- `title`: exam, subject, course, module lines (no name, register number, or paper code);
- `time`, `max_marks`;
- `sections`: each with `name`, `rule` (the instruction line as in the university paper), `marks`, `ceiling`, and `questions`.

The per-section ceilings must add up to `max_marks`. The builder checks this and stops on a mismatch.

Use LaTeX inside `$…$` for maths. Put the text in unicode (for example `’`, `–`, `è`).

## 6. Build and check

```
python3 build_model_paper.py model-paper-<N>.json
```

This writes the HTML and the PDF next to the JSON.

Checks before the file is shown or mailed:
1. The builder prints the section counts and "total ceiling 70, header maximum 70".
2. `pdfinfo` gives the page count. Aim for one A4 page, as in the university paper.
3. Render page 1 to an image (`pdftoppm -r 110`) and look at it. Check the maths, the marks column, and that no row splits badly.
4. Re-read each question against the syllabus list (step 3). Name any question that is borderline.

## 7. Report

Final message:
- the file names;
- the day's topics and the sections each question covers;
- every question replaced or relabelled, with its reason (outside the list, or a mark change);
- the page count.

Mail (only when asked): `quickmail <pdf> ihjas.one@gmail.com`, one file per message. Keep a record of what was sent in the subject's CLAUDE.md.

---

## Lessons so far

- **Scope is the syllabus section list, not the topic name.** ELECTRODYNAMICS-II, 2026-10-16: three questions were out of scope (Clausius–Mossotti in §4.4.2, B boundary conditions in §6.3.3, and ∇·H = −∇·M in §6.3.2). The first pass missed them; the user caught only one. Check every question against the list.
- **Keep the university's section and marks layout.** The user asked for the same layout and mark distribution as the real paper.
- **No name / register-number block** in model papers.
