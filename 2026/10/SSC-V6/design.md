# Design prompt: session detail screen (study plan app)

Design the session detail screen for a study-plan web app (single HTML file, vanilla JS, no framework). Mobile first (phones ~390px wide), and it must also work on desktop (sidebar layout, content to the right of a 200px sidebar).

## Context
- The app is a study planner for an undergraduate physics/maths student (India). It has four tabs: Plan, Day, Schedule, Settings. On phones the tabs are a fixed bottom bar; on desktop they are a left sidebar with the app title at its top.
- In the Schedule tab, a session is a block on a 24-hour grid. Tapping a block opens this detail screen.
- A session has: course name (e.g. "Abstract Algebra I"), module (e.g. "Module II"), a list of units with a depth per unit (Revision / Read / Deep Dive), a date, start time, end time, and a done flag.
- The app's existing look: navy (#06215C, #12357A) and gold (#FBBF24) accents, white cards with 1.5px light borders and 14–18px radii, Plus Jakarta Sans type, subject colours given as a pale banner colour plus a border colour per course.

## What the screen must show
1. Header row: a Back button (left) that returns to the schedule, the course name, and the module name under it (e.g. "Module II · Subgroups, cyclic groups, permutations").
2. Session summary: date, start–end time, planned time, and a done/not-done state.
3. Units list: every unit in the session, with its title, its depth (Revision / Read / Deep Dive as a three-stop indicator), and its time estimate. Units can be long; the list grows to full height (no inner scrollbar).
4. A Start button (primary, prominent, bottom of the content or sticky on phones). Tapping it starts the session: for now, design it as a state change to "In progress" with a running timer and a Finish button. Leave the timer logic out of the visuals; show the layout only.
5. Two tabs on this screen: "Session" (the units and Start) and "Resources", plus a third "PYQ" tab. Use a segmented control, not the app's bottom bar.

## Resources tab
- A list grouped by unit. For each unit, show the textbook section it comes from (e.g. "Griffiths §1.3") and a Download button for a textbook cutout (a PDF page range for that unit).
- If a unit has no cutout yet, show a muted "Not added yet" line instead of a button.

## PYQ tab
- A list grouped by unit. Each past-question row shows the year and the month (e.g. "Nov 2024"), the question number, marks, and a short question stem (one line, truncated).
- Show the band (A: 1–3 marks, B: 4–7, C: 10+) as a small tag.
- If a unit has no past questions, show "No past questions for this unit" in muted text.
- Sort newest first, then by question number.

## Data the screen reads (design for it, do not invent values)
- session: `{ id, subjectId, moduleNo, name, units: [{u, mode}], date, start, end, done }`
- unit title and hours come from the app's existing syllabus table.
- resources: `{ unitNo: { cutouts: [{ label, pages, url }] } }`
- pyq: `{ unitNo: [{ year, month, qno, marks, stem }] }`
- Show empty-state text for any missing list; never show placeholder lorem.

## States to design
- Default (Session tab).
- Start pressed (In progress): Start becomes Finish; the header shows "In progress".
- Done: header tag "Done"; Start is hidden.
- Empty resources and empty PYQ states.
- Desktop layout: the same content to the right of the sidebar, max width about 760px.

## Constraints
- Keep all text readable at 16px minimum on phones; tap targets at least 44px.
- No colour alone may carry meaning (depth and band need a label too).
- Keep the existing tab bars; this screen adds its own segmented control only.
- Output (stage 1): design images only, no code. Provide one phone image (390px wide) for the Session tab, one for the Resources tab, one for the PYQ tab, one for the In progress state, and one desktop image (sidebar layout). Use the app's colours: navy (#06215C, #12357A), gold (#FBBF24), white cards, light borders.
- Output stage 2 (later, not now): HTML. Do not produce HTML in this step.
- Return the images, then a short list of design decisions the owner should check.
