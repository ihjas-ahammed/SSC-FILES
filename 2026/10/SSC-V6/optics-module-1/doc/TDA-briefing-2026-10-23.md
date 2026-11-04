# TDA Study Page: Briefing (23 Oct 2026)

## Purpose of the definition system

- The definition system is for definitions only.
- It exists to reduce question cards in the deck.
- Math and graphics cards stay exactly as they are.
- It also saves students from writing long answers: the reader writes a short answer, then compares it with the correct statement.
- Locking can only happen in match mode.

## Where we started

- The page had a rule-based keyword checker: synonym table, stemming, one-typo tolerance, negation handling.
- The browser was still showing an older copy, so the behaviour looked unchanged. The file on disk was correct and was re-delivered.

## What changed today

1. **Online synonym lookup tried and removed.** Datamuse was added to match words like "points" and "dots". It was removed because matches were too loose and the checker depended on the network.
2. **Minimal word addition.** Only "dot" and "dots" were added to the `points` synonyms.
3. **Manual "Yes, same" verification tried and removed.** It was replaced by the comparison step below.
4. **Keyword checking removed.** A card now unlocks by length, not by key words. The reader is trusted.
5. **Minimum length: 8 words.** Set in `MIN_WORDS`. Below that, the card says "Not yet. Write at least 8 words (N so far)."
6. **Check shows the correct statement.** The explanation sitting in the same card appears below the answer, labelled "Correct statement".
7. **"I'm correct" unlocks the card.** It appears only after the correct statement is shown.
8. **"I know this" skips the card.** It unlocks the card without writing anything.
9. **Retry clears the answer.** It appears only beside "I'm correct", after the correct statement is shown.
10. **Layout.** "I know this" and Check share one row. The "Must include" chips are hidden but still in the markup. Buttons follow the card styling.
11. **Bug fixed.** The correct statement was missing because it was read from the previous card. It is now read from the same card.

## Confirmed behaviour (no change)

- Each sheet unlocks its cards on its own. The first card of a sheet is open, and the rest unlock one by one within that sheet.

## Porting to the full system

Apply these to the full system built from yesterday's base:

- `MIN_WORDS` constant.
- `unlockCard`, `checkDefinition`, `showReference`, `clearReference`, `skipCard`, `retryDefinition`.
- The button-building block that creates the `.def-actions` row (I know this + Check) and wires the click handlers.
- CSS: `.def-actions`, `.def-retry`, `.def-reveal`, `.def-reveal-actions`, `.def-confirm`, `.verify-label`, `.verify-text`.
- The `.must-include` paragraph gets `hidden` on definition cards only.
- Keep the math and graphics card logic untouched.

## Open items

- Confirm the 8-word minimum with the team. Lower it if it still asks too much writing.
- Decide whether "I know this" should be logged, since it skips the writing check.
