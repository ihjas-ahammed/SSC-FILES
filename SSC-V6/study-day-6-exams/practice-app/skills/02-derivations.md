# 02 — Writing derivations

You write **lines of TeX** and name the **move** that produced each line. The app animates
everything: symbols that stay glide to their new place (and jump over `=` when they change side),
new symbols write in, cancelled ones are struck through and vanish.

## Rules for every step

1. `tex` is **one line** with **exactly one `=`** at the top level.
   - No `\\begin{...}`, no `&`, no `\\\\`, no `\\( \\)`, no `$`.
2. **One move per step.** If you did two things, write two steps.
3. Keep symbols the same from line to line (same letters, same subscripts like `r_0`), so the
   animation can follow them. Do not rename variables mid-way.
4. Write the *result* of the move in `tex`, already simplified. Do **not** write the
   intermediate "both sides" line; the app draws that for you.
5. 4–12 steps. The first step has no `move`. Every later step has one.
6. Every step has a `note`: one short sentence saying *why* or what just cancelled (≤ 120 chars).
7. Mark 3–6 phases with `"phase"` on the step where each phase starts. List the same phases in
   `"phases"` with a one-line `why` each. Phases become the route strip and the recall card.
8. Put **4** `ask` checkpoints (the maximum) on steps where the next move is a real decision, an identity
   or a physical law is used. The question is asked *before* that step plays. 4 options, one right.
   Two checkpoints is too few: every derivation should keep the learner answering.
9. **Derive, do not quote.** Circuit results (R, L, C, L-R, C-R, series LCR, parallel LC, resonance, Q,
   bandwidth, power) start from the loop law or the admittance sum and reach the result in small steps.
   Optics results (single slit, two slit, N slit) start from the aperture integral or the sum of phasors
   and reach the intensity formula. Do not start from the finished formula.

## The move library

Moves that act on **both sides** (the app shows `L ∘ x = R ∘ x` on the same line first):

| type | needs | the app shows | example `move` |
|---|---|---|---|
| `add` | `by` | `L + by = R + by` | `{ "type": "add", "by": "u^2" }` |
| `subtract` | `by` | `L - by = R - by` | `{ "type": "subtract", "by": "u" }` |
| `multiply` | `by` | `by · L = by · R` | `{ "type": "multiply", "by": "2a" }` |
| `divide` | `by` | `L/by = R/by` | `{ "type": "divide", "by": "a" }` |
| `power` | `by` | `(L)^by = (R)^by` | `{ "type": "power", "by": "2" }` |
| `root` | `by` optional | `√L = √R` | `{ "type": "root" }` |
| `reciprocal` | – | `1/L = 1/R` | `{ "type": "reciprocal" }` |
| `negate` | – | `-L = -R` | `{ "type": "negate" }` |
| `differentiate` | `wrt` | `d/dwrt (L) = d/dwrt (R)` | `{ "type": "differentiate", "wrt": "r" }` |
| `integrate` | `wrt` | `∫L dwrt = ∫R dwrt` | `{ "type": "integrate", "wrt": "t" }` |
| `ln` | – | `ln L = ln R` | `{ "type": "ln" }` |
| `exp` | – | `e^L = e^R` | `{ "type": "exp" }` |
| `apply` | `fn` | `fn(L) = fn(R)` | `{ "type": "apply", "fn": "\\sin" }` |

Moves that **rewrite** the line (no both-sides line; the line morphs straight into the next):

| type | use for | example |
|---|---|---|
| `substitute` | put a known expression in (`by` = what you substitute) | `{ "type": "substitute", "by": "t = \\frac{v-u}{a}" }` |
| `expand` | multiply out brackets | `{ "type": "expand" }` |
| `factor` | take a common factor out | `{ "type": "factor" }` |
| `simplify` | tidy up | `{ "type": "simplify" }` |
| `cancel` | cancel common factors on one side | `{ "type": "cancel" }` |
| `combine` | collect like terms | `{ "type": "combine" }` |
| `rearrange` | reorder terms | `{ "type": "rearrange" }` |
| `swap` | swap the two sides | `{ "type": "swap" }` |
| `evaluate` | set a condition (`by`) | `{ "type": "evaluate", "by": "r = r_0" }` |
| `define` | name a quantity (`by`) | `{ "type": "define", "by": "E_b = -U(r_0)" }` |
| `identity` | use a known identity (`by`) | `{ "type": "identity", "by": "\\sin^2x + \\cos^2x = 1" }` |

Optional on any move: `"label": "Use Newton's second law"` replaces the automatic caption.

## Full example (copy this shape)

```json
{
  "type": "derivation",
  "title": "\\(v^2 = u^2 + 2as\\), step by step",
  "start": "v = u + at \\quad\\text{and}\\quad s = \\frac{u+v}{2}\\,t",
  "legend": "\\(u\\) initial speed, \\(v\\) final speed, \\(a\\) acceleration, \\(s\\) displacement, \\(t\\) time.",
  "phases": [
    { "name": "Solve for t", "why": "get t out of v = u + at" },
    { "name": "Substitute", "why": "push it into s = (u + v)t / 2" },
    { "name": "Clear fraction", "why": "multiply both sides by 2a" },
    { "name": "Expand", "why": "difference of squares" },
    { "name": "Result", "why": "isolate v²" }
  ],
  "steps": [
    { "phase": "Solve for t", "tex": "v = u + at", "note": "Start from the speed after time \\(t\\)." },
    { "move": { "type": "subtract", "by": "u" }, "tex": "v - u = at", "note": "On the right, \\(u - u = 0\\).",
      "ask": { "q": "We want an equation with no \\(t\\). First move?",
               "options": ["Solve \\(v = u + at\\) for \\(t\\)", "Differentiate \\(s\\)", "Set \\(a = 0\\)", "Square both facts"],
               "answer": 0, "why": "Once \\(t\\) is written using \\(v, u, a\\), it can replace \\(t\\) everywhere." } },
    { "move": { "type": "divide", "by": "a" }, "tex": "\\frac{v - u}{a} = t", "note": "The \\(a\\) cancels on the right." },
    { "phase": "Substitute", "move": { "type": "substitute", "by": "t = \\frac{v-u}{a}" },
      "tex": "s = \\frac{u + v}{2}\\cdot\\frac{v - u}{a}", "note": "Replace \\(t\\) in \\(s = \\frac{u+v}{2}t\\)." },
    { "phase": "Clear fraction", "move": { "type": "multiply", "by": "2a" }, "tex": "2as = (u + v)(v - u)",
      "note": "The \\(2\\) and the \\(a\\) cancel on the right." },
    { "phase": "Expand", "move": { "type": "expand" }, "tex": "2as = v^2 - u^2", "note": "A difference of squares." },
    { "phase": "Result", "move": { "type": "add", "by": "u^2" }, "tex": "2as + u^2 = v^2", "note": "On the right, \\(-u^2 + u^2 = 0\\)." },
    { "move": { "type": "swap" }, "tex": "v^2 = u^2 + 2as", "note": "No time anywhere: the third equation of motion." }
  ]
}
```

## Common mistakes to avoid

- Two `=` in one line (`a = b = c`) — split into two steps.
- Writing `\\cdot` in one line and juxtaposition in the next for the same product — pick one.
- A move that does not match the change (e.g. `add` when you actually multiplied).
- Steps that skip three things at once. Small steps animate beautifully; big jumps look like a cut.
- Using `\\left(` in one line and plain `(` in the next for the same bracket — pick one.
- `differentiate` without `wrt`.
