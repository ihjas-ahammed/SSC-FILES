Electrodynamics II and Optics, Day 8 physics: maintain the existing Study Match course, covering only the topics listed below.

Latest update requirements (take precedence over generic new-course examples):
- Use the existing `physics-data-fixed.json` / `study-match/data/data.json` as the content baseline. Preserve all 14 topics and 143 authored cards, quiz prompts, correct answers, diagrams and derivations in their current order.
- Do not add extra question cards, Remember cards, exam rubrics or inline understanding panels.
- Set `meta.inlineChecks` to false and `meta.autoRevealQuestions` to true. Existing OMR cards reveal automatically when centred as the student scrolls; no tap-to-reveal step. Answer timers use real seconds and pause off the current card, in the background, in Match centre and during breaks.
- Format mathematical content in small example tags with explicit `\\( ... \\)` inline TeX. Keep the label text and scientific meaning intact. The app supplies themed scrollbars.
- Use the bundled scientific calculator via `=` or its toolbar button; `?` opens help, RAD/DEG sets trig mode, and numerical answer boxes can receive a real scalar through Use answer. Do not author calculator controls in content.
- The app supplies Custom halves sliders before kick-off: 20–90 real minutes per half in steps of 5; a separate 1–30 real minute half-time break in steps of 1. Each half displays 45 match minutes; custom mode has no drinks breaks. Topic deadlines/stoppage time use the scaled match clock, but quiz timers and break countdowns stay in real time.
- Breaks appear as on-screen alerts, pause study and require explicit resume after the countdown. Timing settings and match state persist across reload.
- Existing word and numerical inputs stay. Use `textAnswer: true` only for explicitly requested prose-only `question` cards; do not invent new question cards to add answer boxes.
- Apply the update to the root HTML, hosted app and study-match build outputs, and keep both copies of the skills consistent. Do not modify the separate `study-day-8-math` course.


You are an assistant. You turn the attached source material into ONE `data.json` file for the Study Match app. Read every file in the attached `skills/` folder before writing (00-START-HERE, 01-schema, 02-derivations, 03-svg-art, 04-questions, 05-checklist, 06-match-and-tools, example-minimal.json). Use the attached syllabi and textbook extracts for the content. The attached `topics-image.jpg` is the timetable: it shows which topics are for today.

Topics for today (use ONLY these; do not add any topic from the syllabi that is not on this list):

Electrodynamics II (1.8 hours), section "AC circuits" and section "Resonance and power":
1. AC circuits containing R only, L only or C only
2. Use of the j operator in the study of AC circuits
3. AC circuits with L and R, C and R, and L and C in parallel
4. Series LCR resonant circuit, bandwidth and Q-factor
5. Power and power factor in AC circuits
Sources: `electrodynamics-ii/murugeshan-ch12-13-ac-resonance.pdf` (Murugeshan, Electricity and Magnetism, 10th ed., ch. 12-13), `electrodynamics-ii/syllabus.html`.

Optics (2.6 hours), sections "Fraunhofer diffraction", "Fresnel diffraction" and "Polarisation":
6. Single-slit Fraunhofer diffraction pattern
7. Two-slit Fraunhofer diffraction pattern
8. N-slit Fraunhofer diffraction pattern and grating
9. Fresnel diffraction and zone plate
10. Fresnel diffraction by a straight edge
11. Polarisation: introduction and transverse wave nature
Sources: `optics/ghatak-ch18-fraunhofer-single-two-n-slit-grating.pdf` (Ghatak, Optics, ch. 18), `optics/ghatak-ch20-fresnel-straight-edge-zone-plate.pdf` (Ghatak, ch. 20), `optics/ghatak-ch22-polarisation-intro.pdf` (Ghatak, ch. 22, introduction only), `optics/syllabus.pdf`.

Structure:
- meta.title: "Study Match: Electrodynamics II and Optics"; meta.subject: "Electrodynamics II, Optics"; home "Focus", opponent "Time", version 1; inlineChecks false, autoRevealQuestions true.
- match: preserve standard defaults (periodEnds [25, 45, 70, 90], breaks [5, 10, 5]). The app offers the custom half-length and half-time-break sliders at runtime. An optional `match.timing` default follows 06-match-and-tools.md; do not scale content times or deadlines yourself.
- sections: preserve the five existing sections and all 14 sheets: AC circuits (5 sheets), Resonance and power (3), Fraunhofer diffraction (3), Fresnel diffraction (2), Polarisation (1). Keep short names AC, Resonance, Fraunhofer, Fresnel, Polarisation and all existing sheet IDs. The broader timetable items are already split into these subtopics; do not merge or add sheets.
- Each sheet: preserve its existing concept cards, diagrams, derivations, worked examples and quizzes. Do not append questions to meet a generic card-count or Remember-check rule. Follow 01-schema.md and 06-match-and-tools.md for runtime options, and keep changes within the existing course content.
- Stay strictly inside the book sections above. Do not write about EM waves, transient circuits, interference or anything else from the syllabi.

Output rules:
- Output ONLY the JSON. No commentary, no code fence, nothing before `{` or after the final `}`.
- Valid JSON: double quotes only, no trailing commas, every backslash in TeX written twice (see 01-schema.md).
- Before you send it, run the checklist in 05-checklist.md against your JSON.
- If the JSON is too long for one reply, send one section at a time as `{ "sections": [ ...one section... ] }` and say "next" when I ask. I will merge the parts with `python build.py --merge part1.json part2.json ...`.
