# 03 — SVG pictures for intuition cards & JSXGraph figures for derivations and recall

Pictures in the deck use two formats depending on the card type:
1. **Intuition cards (`type = "intuition"`)**: `art` is a single inline **SVG string** (`<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">...</svg>`) styled with palette classes from `05-cards.css`.
2. **Derivations (`setup`) and concept / definition-recall cards (`info.art`)**: declarative **JSXGraph (`1.14.0`)** objects (`view` + construction `steps`).

Never write JavaScript code, event handlers, or hard-coded hex/RGB/yellow/amber colours in `data.json`.
The runtime (`02-diagram.js`) reads the calm palette tokens from `01-tokens.css` in light and dark mode,
resizes boards with their containers on phone and desktop, builds derivation figures up step by step,
and zooms smoothly into focused regions without any yellow or amber highlights.

## Part 1 — SVG rules for `intuition` cards (`art`)

- Write `art` as **one** `<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">...</svg>` string.
- Use only the calm palette classes below (defined in `05-cards.css` using tokens from `01-tokens.css`, adapting automatically to light and dark mode):
  - `f`: fill `var(--violet)` (key points, sources, foci)
  - `s`: fill `var(--lav-2)` (soft shaded regions, prisms, lenses, thin films)
  - `ok`: stroke `var(--violet)`, width 2 (outlines on `s` shapes: `class="s ok"`)
  - `lk`: stroke `var(--violet)`, width 2, `fill: none` (primary rays, wavefronts, axes, curves)
  - `ik`: stroke `var(--ink)`, width 2, `fill: none` (secondary rays, screens, barriers, object/image arrows)
  - `gk`: stroke `var(--ink-2)`, dashed (`4 3`), `fill: none`, opacity 0.68 (normals, construction guides, virtual rays)
  - `t`: fill `var(--ink)`, bold 11px text (`<text x="..." y="..." class="t">...</text>`)
  - `i`: fill `var(--on-violet)`, bold 11px text on top of `f` shapes
- Keep all `<text>` coordinates inside `x: 8..252` and `y: 10..176`, with no overlapping labels.
- No `<script>`, no inline `on*` handlers, no hex/RGB colours, and no yellow or amber highlights.

### Example `intuition` SVG (as it appears inside `data.json`)

```json
"art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"65\" y=\"24\" width=\"80\" height=\"52\" class=\"s ok\"/><line x1=\"24\" y1=\"50\" x2=\"185\" y2=\"50\" class=\"lk\"/><line x1=\"65\" y1=\"130\" x2=\"185\" y2=\"130\" class=\"ik\"/><circle cx=\"65\" cy=\"130\" r=\"3.5\" class=\"f\"/><circle cx=\"185\" cy=\"130\" r=\"3.5\" class=\"f\"/><text x=\"105\" y=\"42\" text-anchor=\"middle\" class=\"t\">Glass (n = 1.5)</text><text x=\"125\" y=\"118\" text-anchor=\"middle\" class=\"t\">L_op = n d = 3 cm</text></svg>"
```

---

## Part 2 — JSXGraph rules for `derivation` (`setup`) and `info` / recall (`art`)

- **View (`view`)**: Cartesian bounding box `"bbox": [0, 180, 260, 0]` (`[left, top, right, bottom]`, with `+x` right `0..260` and `+y` upward `0..180`), `"axis": false`, `"grid": false`. Leave ~8 units of margin.
- **Construction steps (`steps`)**: non-empty array of step objects:
  `{ "step": 0, "name": "base", "objects": [ ... ] }`.
  - On `derivation` cards (`setup`), `"step"` is the 0-based derivation step index at which those objects are added to the board. Base objects start at `"step": 0`; subsequent steps add triangles, rays, angles, and labels that animate in and remain visible for the rest of the derivation.
  - On `info` and definition-recall cards (`art`), all steps in `art.steps` are shown.
- **Allowed object `type`s in `objects`**:
  - `point`: `{ "type": "point", "coords": [120, 90], "id": "P", "size": 3.5, "role": "f", "name": "P" }`
  - `line`: `{ "type": "line", "p1": [14, 90], "p2": [246, 90], "straightFirst": true, "straightLast": true, "role": "lk", "width": 2, "name": "axis" }`
  - `segment`: `{ "type": "segment", "p1": [52, 154], "p2": [52, 88], "role": "gk", "dash": 2, "width": 1.6, "name": "AM" }`
  - `arrow`: `{ "type": "arrow", "p1": [34, 90], "p2": [210, 90], "role": "ik", "width": 2.4, "name": "ray" }`
  - `polyline`: `{ "type": "polyline", "points": [[30, 90], [120, 132], [210, 90]], "role": "lk", "width": 2.4, "dash": 0, "name": "ray" }`
  - `polygon`: `{ "type": "polygon", "points": [[34, 138], [34, 92], [82, 92]], "role": "s", "name": "F1" }`
  - `curve`: quadratic (`3` points), cubic (`4` points), or chained quadratic lens/surface (`5` points with `"closed": true`):
    `{ "type": "curve", "points": [[120, 158], [108, 90], [120, 22], [132, 90], [120, 158]], "closed": true, "role": "s ok", "name": "lens" }`
  - `circle`: `{ "type": "circle", "center": [120, 90], "r": 25, "role": "s ok", "name": "cell" }`
  - `ellipse`: `{ "type": "ellipse", "center": [130, 90], "rx": 60, "ry": 35, "role": "s ok", "name": "mirror" }`
  - `arc`: `{ "type": "arc", "center": [28, 75], "r": 28, "start": 0, "end": 28, "role": "lk", "width": 1.8, "name": "alpha1" }` (angles in counter-clockwise degrees; stroke only, no fill).
  - `angle`: `{ "type": "angle", "p1": [128, 130], "vertex": [128, 88], "p2": [52, 154], "r": 24, "label": "θ₁", "role": "lk", "name": "theta1" }`
  - `label` (or `text`): `{ "type": "label", "coords": [130, 26], "text": "Label", "size": 11, "align": "center", "role": "t", "name": "part" }`

## Palette roles (mapped to `01-tokens.css` — NO yellow or amber)

| `role` | token mapping | use for |
|---|---|---|
| `f` | fill `var(--violet)` | main points, centres, focal points |
| `s` | fill `var(--lav-2)` | soft shaded areas, lenses, glass blocks, similar triangles |
| `ok` | stroke `var(--violet)`, width 2 | outline on filled shapes (`"role": "s ok"`) |
| `lk` | stroke `var(--violet)`, no fill | rays, surfaces, angle arcs, axes |
| `ik` | stroke `var(--ink)`, no fill | object/image arrows, secondary rays, key segments |
| `gk` | stroke `var(--ink-2)` (0.68 alpha), no fill | normals, dashed construction guides |
| `t` | color `var(--ink)`, bold | text labels on light/dark board backgrounds |
| `i` | fill `var(--on-violet)`, bold | text labels on top of `f` shapes |

- **No yellow**: never use `--amber` or `--hl` (or roles `h` / `hk`) in figures or maths.
- **Zoom rule (`name` & `focus`)**: give each ray, triangle, surface, angle arc and matching label a `"name": "partName"` field. When a derivation step lists `"focus": ["partName"]`, the JSXGraph board zooms smoothly into the bounding box around those objects, and zooms back out to the full `view.bbox` overview when focus ends.
- **Step-by-step build-up**: start each derivation figure with the base geometry at `"step": 0`, and add triangles, rays, angles, and labels in subsequent construction steps matching the derivation. Every label mentioned in a step text must appear on the figure with Ghatak's notation.
- **Text bounds**: keep every `label` inside `x: 8..252` and `y: 10..172`, with no overlapping labels.

## Three.js (3D): ONLY for the meridional ray

- Use Three.js (`three` field) on **one card only**: the meridional-ray card (`term: "meridional-ray"`), showing the optical axis (`C₁–C₂`), the flat meridional plane, the in-plane meridional ray, and the non-planar skew ray in 3D.
- Every other diagram in the app must use the declarative JSXGraph object (`art` / `setup`).
- The runtime lazy-loads `three.min.js` (`r128`) from `cdnjs.cloudflare.com` only when that card's sheet is opened. If offline, it hides the 3D box and shows the caption and text without crashing.

## Example (as it appears inside `data.json`)

```json
"art": {
  "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
  "steps": [
    {
      "step": 0,
      "name": "ions",
      "objects": [
        { "type": "circle", "center": [80, 85], "r": 46, "role": "s ok", "name": "Na" },
        { "type": "label", "coords": [80, 85], "text": "Na⁺", "size": 18, "align": "center", "role": "t", "name": "Na" },
        { "type": "circle", "center": [180, 85], "r": 46, "role": "f", "name": "Cl" },
        { "type": "label", "coords": [180, 85], "text": "Cl⁻", "size": 18, "align": "center", "role": "i", "name": "Cl" },
        { "type": "curve", "points": [[112, 118], [130, 154], [148, 118]], "role": "ik", "width": 2.4, "dash": 2, "name": "transfer" },
        { "type": "point", "coords": [130, 146], "size": 4, "role": "f", "name": "electron" }
      ]
    }
  ]
}
```

## Good subjects for a picture

Particles and charges, forces as arrows, rays and lenses, simple graphs (axes + one line + shaded
area), before/after comparisons side by side, cycles as circles with arrows, cells as ellipses.

If a picture would need more than ~15 shapes, skip `art` and use `"tex"` for a key formula instead.

## Physics subjects: required pictures (added 2026-10-23)

- **Every circuit gets a circuit diagram card**: AC source (circle with a sine), the components on the loop
  (zig-zag resistor, humps for inductor, two plates for capacitor), labels R, L, C, the current arrow and the
  source EMF written underneath. Draw R, L, C alone, L-R, C-R, series LCR, parallel L-C and the coil-in-parallel
  tank circuit as separate pictures.
- **Every optics experiment gets the textbook set-up diagram**: plane wave, slit(s) or grating, lens, screen,
  the angle theta, the path difference marked (for example b sin theta for a slit, d sin theta for two slits or
  a grating) and the points O (centre) and P.
- **Every pattern gets a true graph**, not a sketch: single slit sinc squared with secondary maxima 4.5% and 1.6%;
  two slits as cosine squared fringes inside the single-slit envelope with the missing order circled; N slits with
  sharp principal maxima and N-2 weak maxima; straight edge rising to 1.37 I0 outside the shadow.
  Write the curve as ONE `<polyline points="...">` of 100+ points computed from the formula (`polyline` is allowed).
  Never draw these with a few Bezier segments.
- Keep every `<text>` inside x 8 to 252 and y 10 to 176, or it is clipped. Do not let two labels overlap.
