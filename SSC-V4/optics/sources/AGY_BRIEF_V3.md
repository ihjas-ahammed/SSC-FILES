You are Antigravity working in /home/ihjas/Documents/GitHub/SSC-FILES on the Optics study app at SSC-V4/optics. Work autonomously, do not ask questions, print ONE short status line after each phase.

TASK: NOTATION HARMONISATION. The student wants the WHOLE Optics app to use the symbols of the prescribed textbook, Ghatak 6e. A previous pass converted the statements of some concept notes (authoring/m2.concepts.py, m3.concepts.py, m4.concepts.py and the new m*.extra.py) but left everything else on the old symbols, so the app now mixes both. Finish the job so EVERY asset agrees.

SYMBOL TABLE (the concept-note statements you read are the source of truth; this table summarises them)
- refractive index: n (never μ). Keep subscripts: n_1, n_2, n_f, n_g, n_o, n_e, n_L, n_R.
- film / air-gap thickness: d (cosine law Δ = 2 n d cos r; anti-reflection coating d = λ/4n_f; layer phase δ = 4π n_f d cosθ/λ; air gap in Newton's rings d = r²/2R).
- wedge angle: θ (fringe width β = λ/2nθ; a hair of thickness d at distance L: d = λL/2β·… keep the numbers).
- Newton's rings: ring ORDER m (not n), radius r_m, diameter D_m; D_m² = 4mλR/n.
- single slit width: b (β = π b sinθ/λ; minima b sinθ = mλ; central width 2λD/b).
- two slits / N slits / grating: slit width b, opaque interval a, element d = a + b; interference maxima d sinθ = mλ; missing orders d/b = m/p; central envelope holds 2(d/b) − 1 fringes.
- Fresnel half-period zones and straight edge: distance from aperture/edge to screen is d (r_m = √(mλd), area πλd, v = x√(2/λd)); zone-plate f_m = r_1²/mλ.
- Brewster: θ_B may be written i_p as well (already in c.4.2.1).
- Unchanged: Young's d (slit separation) and D (screen distance); plate thickness t (c.2.3.4) as the concept note has it; Michelson mirror displacement d; biprism as its concept note has it. When in doubt, read the concept note and copy ITS symbols.

WHERE TO CHANGE (all of it)
1. authoring/*.py: the rest of every concept (intuition, traps, cards, proof rungs and rung meanings), the exercises (m1.written*.py, m2.written.py, m3.written.py, m4.written.py, m*.extra.py), objective questions (m*.objective.py: prompts, options, solutions, tested, trap, twist), question bank (pyq.py), and the step meanings in authoring/steps.py.
2. app/project/optics.figs.m1–m4.js: every visible text label in the step diagrams (g.text, g.dim labels, alt text).
3. app/project/optics.sims.m1–m4.js: slider labels, readout labels, law text, task questions and explanations. Internal variable and parameter KEYS may stay as they are (renaming keys is not needed); only what a student can READ must change. Numbers and physics must not change.
Make only notation changes: never change a formula's meaning, a number, an answer, a correct option letter, or a diagram's geometry. Where swapping a symbol collides with an existing one in the same sentence (for example ring order n vs index n), rewrite the sentence so it is unambiguous, following the concept note.

GATES — run from SSC-V4/optics and fix everything until all pass
  python3 tools/author.py
  python3 tools/audit_notation.py      # must end with 0 leftover spots (it lists file:line for every one)
  node tools/check_tex.js              # 0 errors
  python3 tools/audit_steps.py
  node tools/audit_optics.js           # every check passed
If audit_notation.py flags a line that is genuinely correct (for example a unit written with the micro sign), tell me in SYNC_SUMMARY_V3.md and adjust nothing else; do not edit the audit script.
Finish by writing sources/SYNC_SUMMARY_V3.md: files changed, counts, anything ambiguous you resolved and how.

RULES: never commit, push or deploy. Do not edit data/*.js by hand (generated), the theme, or anything outside authoring/, app/project/optics.*.js and sources/.
