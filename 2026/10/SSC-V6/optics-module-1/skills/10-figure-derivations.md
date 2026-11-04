# 10 — Derivations with an animated figure (`setup.figure`)

Every derivation the syllabus covers must be a `derivation` card with `setup.figure`.
Worked, checked examples: `optics-module-1/study-match/data/*-preview.json`
(read `thinfilm-preview.json`, `fermat-refraction-preview.json`, `biprism-preview.json` first).

## Step-writing rules (from the user — follow exactly)
1. **One idea per step.** Never jump over the hard part.
2. **Snell's law**: highlight both angles at the surface and start a step from \(n_1\sin\theta_1 = n_2\sin\theta_2\).
3. **Any trig ratio or Pythagoras**: highlight the right triangle, the angle used and the sides used;
   state the ratio as its own step (`move.type = "identity"`), ask it as a checkpoint
   (e.g. "what is \(\sin\theta'\)?"), then a `rearrange` step, then the step that applies it.
4. **Small-angle / binomial approximations** get their own step.
5. ≤ 16 steps per card; split into two cards if longer. One top-level `=` per `tex` line.
6. First step has no `move`. Use only these moves: add subtract multiply divide power root reciprocal negate
   differentiate integrate ln exp apply substitute expand factor simplify cancel combine rearrange swap evaluate define identity.
   `add/subtract/multiply/divide/power/root/negate/...` are applied to **both sides of the previous line** on screen —
   only use them when that is literally the operation; to add two equations use `combine` with a `label`.
7. 3–5 checkpoint `ask`s per card (`q`, 4 `options`, `answer` index, one-line `why`).

## Figure format
```
"setup": { "view": {"bbox": [l, t, r, b], "axis": false, "grid": false},
           "steps": [ {"step": 0, "name": "fallback", "objects": [ {"type": "segment", "p1": [..], "p2": [..], "role": "ik", "name": "x"} ]} ],
           "figure": {
             "box": [left, bottom, right, top],                       figure units, y up
             "points": { "S": {"at": [x, y], "side": "n"}, "D": {"at": [..], "label": false, "dot": false} },
             "parts":  { name: part, ... },
             "draw":   [ {"parts": [...], "caption": "..."} ] } }
```
`setup.steps` is a required one-object fallback (any simple segment). The figure is what is shown.

Parts: `line` (from, to, style, arrow true|fraction, label), `arc` (center, r, from, to degrees, style, hatch "out"|"in"),
`polygon` (points; `"style": "glass"` for prisms/lenses/media, otherwise an amber highlight triangle),
`angle` (at, from, to, r in px, label), `dim` (from, to, offset [dx, dy] px — dy positive is **down** — arrow true|"both", label),
`text` (at, text). References are point names or [x, y]. Styles: `axis`, `mirror`, `ray`, `normal`, `guide`, `glass`.
Labels: `"α_1"` gives a subscript; use unicode for primes (B′).

`draw`: the intro order. **Apparatus first** (axis, mirrors, lenses, slits, crystals, screen), then **light rays**
(rays get a glowing tip), then constructions (normals, heights, dims). Its parts are the base figure.

Each derivation step has `"figure": {"focus": [...], "keep": [...], "caption": "..."}`:
focus = drawn in amber (non-base parts draw in), keep = base parts left at full strength, the rest dim.
Points a focused part uses are kept automatically. Captions ≤ 50 characters.

## Geometry
Compute coordinates exactly with Python (Snell refraction, reflections, lens equations, feet of perpendiculars).
Exaggerate small quantities so triangles are readable (≥ 20 px sides); say so in the `legend`.
Phone figure is about 360 × 220 px: keep `box` aspect between 1.3 and 2.2.

## Check
`python3 build.py --data <your file> --check` must show 0 errors, 0 warnings.
