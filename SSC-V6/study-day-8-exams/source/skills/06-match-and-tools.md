# Match, exam marks and tools

Default to the focused notch. The visible exam meter below it shows score /70
and fully marked questions /20; tapping opens a section/question breakdown.
It is independent of football goals, quiz correctness and coverage.
Android uses this same notch from the initial page load, including before
kick-off. Keep its clock, score, streak dots, Match centre and pause controls
instead of substituting the expanded header or hiding dots at narrow widths.
Reduce spacing as needed at 320 pixels while preserving the same controls.

Add marks from completed eval cards, counting incomplete parts as zero so far.
Retain half marks. Cap A at 24, B at 36; count the best one C answer up to 10.
Identify totals as self-marked, provisional while work is unmarked.
Restore from saved rubric states; never award exam marks for recall or OMR.

Keep question → rubric → score → model answer → Remember → three word OMR.
Only 3-mark original questions flip. See 08-definition-recall.md.
Match locks are independent within each sheet. First card is available;
locked cards remain visible/dimmed. Stop at the first lock and prevent moving
left from a centred unfinished flip card. No locks outside matches.

Pause/Resume holds match/quiz clocks and derivations, surviving reload.
The marks dialog suspends OMR countdowns and pauses active derivations; opening
it does not secretly alter the match state.

Custom halves: 20–90 real minutes by 5, each displayed as 45 minutes.
Hydration and half-time: separate 1–30 real minute settings.
Real halves >=45 minutes get hydration at displayed 25/70; shorter halves omit it.
Standard mode retains hydration. All breaks offer Skip break and explicit resume
after completion. Quiz timers always use real seconds.

Calculator = opens; RAD/DEG sets angle mode; ? shows help. It is bundled.
MathJax and fonts need connectivity initially. Hosted files are separate for
each paper so building one cannot overwrite the other's app.
