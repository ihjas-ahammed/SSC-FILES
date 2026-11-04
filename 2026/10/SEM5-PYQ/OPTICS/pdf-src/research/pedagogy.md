# Pedagogy brief (from memory of established literature; no live fetch, verify cites if quoting)
Tags: [GM]=Goldberg&McDermott 1986/87 (AJP 54, 55); [GH]=Galili&Hazan 2000 (Int J Sci Ed, AJP 68); [SW]=Sweller/Cognitive Load Theory; [AT]=Atkinson 2000 worked examples; [REN]=Renkl 2002/2014 faded examples & self-explanation; [KAL]=Kalyuga expertise reversal 2003; [MAY]=Mayer multimedia principles; [FYF]=Fyfe/McNeil/Goldstone concreteness fading 2014; [RB]=Roediger&Karpicke 2006 testing effect; [BJ]=Bjork desirable difficulties; [CEP]=Cepeda spacing 2006; [CHI]=Chi 1989 self-explanation; [KOT]=Kothiyal/Wiley; [WCAG]=WCAG 2.1; [MOB]=Nielsen/Baymard mobile readability.

## (a) Writing rules
1. Start each topic with one concrete everyday case (pool, straw in water, spoon, magnifier) before any symbol. [FYF] Concrete first makes the abstract meaningful.
2. Then fade: picture with real object -> simplified ray diagram -> formula. [FYF] Fading transfers better than abstract-only.
3. State "why we need this" in one line before every derivation. [FYF][REN] Motive before method.
4. Show a fully worked example before asking the reader to solve. [SW][AT] Novices learn more from studying than from searching.
5. After 1-2 full examples, give a faded one: same problem, last step blank, then two steps blank. [REN] Smooth handover to independence.
6. Keep the first examples same-structure; vary numbers, then vary surface story. [SW] Reduces load, then builds transfer.
7. Weak-memory readers get full steps. Do not skip "obvious" algebra; offer optional "skip if easy" tag instead. [KAL] Expertise reversal: detail helps novices, hurts experts, so make it skippable not absent.
8. One change per line in every derivation; one equals sign per line. [SW] Limits working-memory items.
9. Right of each line, write a short plain-words note: what this step does and why ("divide both sides by u: isolates 1/v"). [REN][CHI] Makes the principle behind each step visible.
10. Colour/bold only the term that changed from the previous line. [MAY] Signalling guides attention.
11. Name approximations explicitly in a tag: "APPROXIMATION: small angle, sin θ ≈ θ (θ in radians, OK below ~10°)". Also state when it fails. [GM-style] Hidden assumptions cause rote use.
12. After each result add a sanity check: units, sign, limiting case (u→∞ gives v=f). [CHI] Models expert checking habits.
13. Present every key result in three forms side by side: words, labelled picture, equation. [MAY] Dual coding; multiple representations.
14. Put labels ON the diagram next to the thing labelled; no separate legend or "see fig, point A is...". [MAY][SW] Split-attention effect.
15. Place the figure immediately before/after its text, never a page away; repeat the diagram rather than say "refer back". [MAY] Spatial contiguity, vital on a phone.
16. One idea per screen (card); a card must be understood without scrolling past a diagram. [MOB][SW] Segmenting.
17. Derivations in segments of 3-5 steps with a named milestone ("Step A: geometry; Step B: apply Snell"). [MAY] Segmenting principle.
18. Remove decorative pictures, jokes, and trivia inside explanations. [MAY] Coherence principle.
19. Define each symbol at first use, in a margin note, with its meaning and unit; keep it identical everywhere (u,v,f,R,n1,n2,h,h'). [SW] Reduces extraneous load.
20. Add a tiny glossary card (symbol / word / meaning / unit / sign) and link to it at each chapter start. [SW] Offloads memory.
21. Put a "Recall from Class 10/11/12" box before each topic with only the 2-4 facts needed (e.g., similar triangles, sin/cos, radians, coordinates, signs), each with a one-line example. [SW][BJ] Activates prior knowledge, patches gaps.
22. Teach maths as just-in-time mini-lessons, each with one numeric example, at the point of use, not in an appendix. [SW] Integrated vs. split info.
23. Show maths with numbers first, then letters (2 cm in front -> u). [FYF] Concreteness fading applied to algebra.
24. Sign convention: state it once in a box with a diagram, repeat a 1-line version at each formula, and attach a "sign check" to every worked example. [GM] Sign errors are the top error source.
25. Give the Cartesian sign convention a rule of thumb: "measure from the pole/centre; direction of incoming light = +; opposite = -; up = +". Draw the axis with + and - arrows. [GM-style] Reduces arbitrary memorisation.
26. Use analogies for Fermat with an explicit "where it breaks" line: lifeguard (fast on sand, slow in water; the shortest path is not the quickest), marching band/wheels changing speed at a boundary, ray as path-finder. [FYF] Analogy with its limits avoids misconceptions.
27. State Fermat accurately: "stationary time (usually minimum)", not "shortest path". Show a case (ellipse mirror) where it is a maximum/equal. [GH] Fixes "shortest path" myth.
28. After each worked example, a 1-2 line "What did we just use?" listing the underlying topics (the task's key design). [REN] Self-explanation of principles.
29. Embed 1-3 self-explanation prompts per card: "Why is the sign negative here?" with the answer below a divider. [CHI][REN] Self-explainers learn more.
30. End each card with 3 quick-check questions, answers directly below, in different forms (recall, one-step numeric, spot-the-error). [RB] Retrieval beats rereading.
31. Start each card with 1 pre-question ("Before reading: predict where the image forms") and give the answer later. [BJ] Pre-testing primes encoding; errors teach.
32. Add "Remind me" boxes that re-quiz earlier cards on a spaced schedule (same day, +2 cards, +5 cards, end of module). [CEP][BJ] Spacing and interleaving improve retention.
33. Add forward/back pointers with names, not numbers only ("uses sign rule, Card 4"). [SW] Reduces search cost.
34. Include a one-page formula + sign + diagram summary card at the end with a self-test grid. [RB] Consolidation.
35. Show common-error examples: a wrong solution with the error flagged, then the correct one. [KOT][REN] Incorrect examples help if flagged; do not show unflagged errors.
36. Phone layout: single column, body 16-18 px (≈11-12 pt in PDF), line 35-60 characters, line-height 1.4-1.6, left-aligned, no hyphenation. [MOB] Readability on small screens.
37. Margins small but nonzero; diagrams full width, text inside diagrams at least body size; no tables wider than the screen (use stacked label: value). [MOB] Avoid pinch-zoom, which breaks the contiguity principle.
38. Colour code consistently: incident ray = blue, reflected = orange, refracted = green(teal), normal = dashed grey, object = black solid, image = magenta with dashed outline if virtual; use ≥2 cues (colour + line style/shape/label). [WCAG] Colour alone fails colour-blind readers (Okabe-Ito palette).
39. Contrast ratio at least 4.5:1; avoid red/green pairs; use black or dark text on white; avoid pure grey for text. [WCAG] Accessibility.
40. Arrowheads on every ray; draw real rays solid and extended (virtual) rays dashed; mark F, P, C, optical axis with tiny labels on the figure. [GH] Clarifies the real/virtual distinction.

## (b) Optics misconceptions and one-line fixes
- Image is "on the screen/in the lens" -> an image is where rays meet (real) or appear to come from (virtual); screen only reveals it. [GM]
- Screen needed for image / image exists only if seen -> real image exists in air; the eye or screen intercepts it. [GM]
- Covering half the lens removes half the image -> every lens point sends rays to every image point; the whole image is dimmer. [GM]
- Blocking the lens top/ moving screen "just blurs" confusion -> a screen moved away shows blur, because rays no longer meet there. [GM]
- Rays are objects or only a few rays exist -> rays are a drawing tool; we pick convenient ones. [GH]
- Image is the object's "copy" travelling -> each object point maps to one image point via many rays. [GH]
- Virtual image is "not real/ doesn't exist" -> it is a point rays appear to diverge from; the eye sees it normally. [GH]
- Light takes the shortest path -> light takes stationary time; in a medium shortest and quickest differ. [GH]
- Light "chooses" or "knows" the path -> every path is possible; only near the stationary one do contributions agree (wave picture). [GH]
- Refraction bends toward normal "because denser" without mechanism -> speed falls, wavefront turns (marching-band). [GH]
- Reflected angle measured from the surface -> angles are always measured from the normal. [GM]
- Sign convention is about + for "real" or numeric size -> signs follow direction from the pole; negative v means same side as the object. [GM]
- Focal length is a property of the lens only -> depends on n of lens relative to surrounding medium (lens in water). [GM]
- Focal length is a distance to where "the image forms" -> f is where parallel rays meet; the image is elsewhere. [GM]
- Both focal points are the same thing -> a thin lens has two foci, one on each side. [GM]
- Magnification means "bigger" -> m is image/object height, sign shows inverted (negative); |m|<1 is smaller. [GM]
- Small-angle formulas hold at any angle -> only for paraxial rays; exact Snell otherwise. [GH]
- Concave/convex mix-ups (shape vs. effect) -> state the shape of the surface AND where it faces light.
- Newton's formula: distances are from the focus, not the lens -> draw the xx' = f² picture with x and x' marked from F.

## (c) Topic card template (one phone screen per block, ~150-200 words each)
1. TITLE + "In one line": what this answers.
2. Recall box: 2-4 prior facts (Class 10/11/12), with a one-line example each.
3. Predict first: one pre-question; answer at the end.
4. Concrete picture: everyday case + labelled diagram (labels on figure).
5. Idea in words (2-4 sentences), then "Why it matters in exams".
6. Derivation, segmented: each step = [equation line | changed term highlighted | what & why note]; approximation tags; milestone names.
7. Result box: words / picture / equation, with symbol meanings, units, signs.
8. Worked example (full) -> Faded example (last step blank) -> Your turn.
9. Sign / unit / limit sanity check.
10. Common mistakes (flagged wrong vs. right).
11. Self-explain prompt (answer below a rule).
12. Quick checks (3 Q + answers).
13. "Underlying topics" list for typical exam questions + back/forward links.
14. Remind me: 1 earlier-card question.
