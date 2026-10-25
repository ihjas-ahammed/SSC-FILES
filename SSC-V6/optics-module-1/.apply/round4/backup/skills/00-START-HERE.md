# START HERE — master prompt

## Author the content directly

Write every study card, explanation, derivation step, worked example, diagram and
quiz yourself, directly in the course JSON. Do not use a script, generator, loop,
template expansion or programmatic transformation to write or populate study data.
Read the syllabus and reference material and preserve the full requested scope;
do not sacrifice detail or quality to reduce authoring effort. Scripts may extract
source text, validate the manually authored data, verify answers and build the app,
but must not generate, rewrite or fill in the educational content.

## Answer “What is it?” first

Introduce each new term with a direct answer in ordinary words: name the kind of
object, explain its meaning, then give a concrete picture or example. Properties
and uses come afterward. “Preserves superpositions” does not explain what an
operator is. Give unfamiliar prerequisite terms their own linked definitions.
Read 07-plain-words-and-glossary.md for intuition cards and the glossary schema.
Definitions open only on click/tap or keyboard activation, never merely on hover
or focus. Leave a card's own defined term and its aliases unlinked. Explain
“state” simply before using it to define a ket. For quantum algebra, use small
column vectors and matrices as concrete examples before extending to wave functions.

## Short definition recall

Read 08-definition-recall.md, doc/TDA-briefing-2026-10-23.md and doc/tda.html. The
HTML supplies the existing flip-card and visible-lock design. Enable
meta.definitionChecks for this deck: eight words, Check reveals the same card's
correct statement, then “I’m correct” unlocks or Retry clears it. “I know this”
skips writing. Use no keyword grading or online synonym service. Only a match
locks progression, independently within each sheet. Keep math and graphics intact.
Concepts stay on the front; tap to flip to an editable definition back. Locked
cards stay visible and dimmed. Stop at the first lock, and prevent moving left
from an unfinished definition until it is unlocked. Outside matches, typing and
flipping work without locks. Earlier progress must not disable an empty draft.

## Day 9 scope

Day 9 is a new syllabus deck for Quantum Mechanics I and Properties of Solids,
dated 24 October 2026. Follow `source/prompt.md` for its exact timetable topics.
The copied Day 8 educational content has been replaced by this Day 9 deck.
Preserve the completed Day 9 deck during later feature updates. Keep the runtime
features and use `inlineChecks: false`, `autoRevealQuestions: true` and
`definitionChecks: true`.

Give a model ALL files in this `skills/` folder plus your syllabus. Then send the message below.
Any model works, including small or weak ones. The app does all animation and layout by itself;
the model only writes content as JSON.

---

## Day 9 update policy

This is a syllabus deck, not a model paper. The completed Day 9 deck has 5 sections,
15 topics and 195 authored cards, including 19 plain-language introductions,
8 matrix worked examples,
12 derivations and 46 topic quizzes.
Preserve it on subsequent feature updates. Do not append Remember cards, marking
rubrics or inline understanding panels unless the user requests them.
Use inlineChecks false and autoRevealQuestions true. Model-paper instructions
below apply only to an explicitly requested model paper.

## Message to send

You are an assistant; you're here to turn the syllabus I give you into ONE `data.json` file for the
Study Match app. Read every file in `skills/` before writing. Then:

1. Plan first, privately: list the sections (big subject areas, 2–6), and inside each the topics
   ("sheets", 2–5 per section). A topic is something I can finish in 10–25 minutes.
2. For each syllabus topic write about 6–14 cards, following `01-schema.md`:
   - concepts first (`info` cards, one idea each, with an SVG picture when a picture helps),
   - a `derivation` card whenever the topic has a formula that is derived (rules in `02-derivations.md`),
   - one `math` worked example where numbers help,
   - then 3–5 questions (`mcq`, `fill`, `number`) at the end of the topic (rules in `04-questions.md`).
2b. For physics topics also follow the "Physics subjects: required pictures" rules in `03-svg-art.md`
   (circuit diagrams, optics set-up diagrams, true graphs) and give every derivation 4 `ask` checkpoints.
2c. For physics model-paper practice, preserve the paper's sections and question order.
   Use one sheet per exam question, with `question` → marking `eval` cards → `score`
   → model answer/figures/derivations → `key` (Remember) → exactly three new OMR
   word-completion `mcq` cards. Follow `06-match-and-tools.md`; these sheets may
   exceed 14 cards to preserve the full question and marking guide.
   Set `meta.inlineChecks` to false and `meta.autoRevealQuestions` to true.
   The three Remember OMR cards have unique prompts with one `____`, four **word**
   choices, `practice: "remember-word"`, `time: 45`, and a teaching explanation.
   Do not add self-review accordions or repeat marking-rubric questions.
   Set `textAnswer: true` only on original questions fully answerable in prose,
   without equations, calculations, diagrams or graphs.
3. Output ONLY the JSON. No commentary, no code fence, nothing before `{` or after the final `}`.
4. Run the checklist in `05-checklist.md` against your JSON before you send it.

If the syllabus is too large for one reply, output one section at a time as a complete JSON object
of the form `{ "sections": [ ...one section... ] }`, and say "next" when I ask for the next one.
I will merge the parts with `python build.py --merge part1.json part2.json ...`.

---

## What the app does for you (do NOT write these)

- Layout, colours, dark mode, fonts, timers, scoring, progress bars, saved prose drafts.
- Automatic OMR reveal on arrival for physics, with real-time answer countdowns.
- Custom match sliders: at least 20 real minutes per half, showing 45 match minutes;
  separate half-time and hydration settings; halves of at least 45 real minutes
  have hydration breaks at displayed 25 and 70. The app
  handles clock scaling, deadline checks, persistence and on-screen break alerts.
- The scientific calculator (`=`), its `?` help, and maths rendering in tags.
- The cover of each topic (built from the cards).
- For every `derivation`: a "goal first" card, an animated step-by-step player, a one-page view of
  the whole derivation, and a "rebuild the route" recall card. You only write the steps.
- The animation: it reads each step's TeX and the `move` you name (e.g. `subtract u`) and works out
  which symbols move, appear, cancel or disappear. You never position anything.

## Output format in one look

```
{
  "meta": { "title": "...", "subject": "...", "home": "Focus", "opponent": "Time", "version": 1, "inlineChecks": false, "autoRevealQuestions": true },
  "match": { "periodEnds": [25, 45, 70, 90], "breaks": [5, 10, 5] },
  "sections": [
    { "short": "Optics", "title": "Ray optics", "sheets": [
      { "id": "optics-mirrors", "title": "Mirror formula", "icon": "lens", "cards": [ ...cards... ] }
    ] }
  ]
}
```

The two metadata flags shown above are for physics practice papers. Do not change
existing maths course files or built pages unless explicitly requested. For optional
default custom timing, use the `match.timing` schema in `06-match-and-tools.md`.
