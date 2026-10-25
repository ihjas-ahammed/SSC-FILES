# START HERE — master prompt

Give a model ALL files in this `skills/` folder plus your syllabus. Then send the message below.
Any model works, including small or weak ones. The app does all animation and layout by itself;
the model only writes content as JSON.

---

## Day 8 update policy

This physics course is an existing syllabus deck, not a model-paper deck. Preserve
its topic order, existing cards, quiz prompts and answers. Do not append extra
question cards, Remember cards, marking rubrics or inline understanding panels.
Apply the app features with `inlineChecks: false` and `autoRevealQuestions: true`.
The model-paper sequence below applies only when explicitly creating a model paper.

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
  a separate half-time break setting; custom mode removes drinks breaks. The app
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
