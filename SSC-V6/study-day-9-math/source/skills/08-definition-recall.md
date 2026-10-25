# Definition recall and match progression

Read both doc/TDA-briefing-2026-10-23.md and doc/tda.html before porting. The HTML
is the interaction reference for flipping and visible locks; the briefing records
the current answer-checking rules. Do not assume the briefing lists every existing
interaction. This is a definition-only
recall flow, separate from click/tap glossary popups, quizzes and inlineChecks.

Enable it with meta.definitionChecks: true. Eligible cards are info cards with
defines metadata or titles beginning “What is” / “What are”, excluding art cards.
An info card may retain its existing formula. Do not convert math, graphics,
intuition or derivation cards into writing checks. Use authored defines metadata
for new definition cards, and preserve all educational content during porting.

Keep the concept, explanation and existing formula on the front. An unlocked
definition card flips on a surface tap or explicit Recall button to a back face
with a short editable answer box. Read flips it back. Use a 3D card-inner with
front/back faces, backface visibility and inert on the inactive face. Inputs,
buttons, links and selecting text must not trigger a flip. Flipping is available
outside matches too. Off-centre cards return to their front after scrolling.
Keep MIN_WORDS = 8 in the runtime. Check only the number of words; never grade
keywords, synonyms, spelling, negation or semantic similarity. No online lookup.
Below eight words, show “Not yet. Write at least 8 words (N so far).”

Check reveals that same card's body under “Correct statement”. Revealing alone
does not unlock the next card. Show “I’m correct” and Retry only after revealing.
“I’m correct” confirms the learner's comparison and unlocks the next card.
Retry clears the draft and reference, then returns focus to the answer box.
Editing a checked answer hides its reference until Check is pressed again.

Put “I know this” and Check in one .def-actions row. “I know this” unlocks without
writing and leaves the correct statement visible. Keep .must-include hidden in
the definition markup; do not use chips as requirements. Match the existing card
buttons and support mobile scrolling.
Use .def-retry, .def-reveal, .def-reveal-actions, .def-confirm, .verify-label and
.verify-text for the corresponding parts.

Lock only during an active match, including paused/break states. Locked cards
remain full-size, visible and dimmed with a lock label; never hide them or shrink
the sheet to its unlocked cards. They cannot flip or accept input. The shelf may
reach the first locked card, but cannot scroll past it. Enforce the boundary for
swipes/native scroll, wheel, arrow keys and programmatic navigation. Once an
unfinished definition is centred, also block moving left until it is unlocked;
the learner can flip back to reread without leaving the card. Apply this restriction
only to the centred definition, not a neighbouring card or one passed during a
navigation animation. A wheel gesture must release after its idle interval.
Each sheet progresses independently: its first card is available and subsequent cards open
one by one. Ordinary reading cards advance when seen; quizzes/derivation players
retain their existing completion rules. Locked cards cannot start timers or
receive answers. Outside a match, including full time, all reading is available
and the definition back can be typed into without starting a match.
Pause and breaks block recall actions. Preserve existing maths and graphics.

Save drafts, revealed references and confirmed/skipped status on the device.
Keep stable card IDs and migrate existing seen definitions without losing prior
progress. Existing seen-only progress must not make an empty answer read-only.
Provide Practise again for confirmed/skipped answers, enabling a fresh draft while
retaining their earlier unlock. Store skips as method skipped, separately from
confirmed; neither is an automatically correct quiz answer or a shot/goal. Do not add duplicate question
cards merely to test the same definition. Preserve this deck's existing quizzes.

Required runtime functions: unlockCard, checkDefinition, showReference,
clearReference, skipCard and retryDefinition. Verify seven-word rejection,
eight-word acceptance, same-card reference, reveal-before-confirm, retry, skip,
reload, per-sheet unlocking, match-only locks and unrestricted browsing afterward.
Verify actual tap-to-flip and typing, visible locked card geometry, both scroll
boundaries, inactive-face inert state and automatic flip-back off centre.
