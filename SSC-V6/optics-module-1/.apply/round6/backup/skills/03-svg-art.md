# 03 — Canvas2D diagrams (and Three.js for the meridional ray)

All 2D diagrams (`art` on `intuition`, `info`, and recall cards; `setup` on `derivation` cards)
are drawn with the HTML Canvas 2D API from a JSON list of drawing operations.
Never write SVG strings, JavaScript code, or hard-coded hex/RGB colours in `data.json`.
The runtime (`02-canvas.js`) reads the palette tokens from `01-tokens.css` in light and dark mode
and scales by `devicePixelRatio` so diagrams stay sharp on phones and desktops.

## Hard rules

- Coordinate space: logical width `260`, logical height `180` (`0 <= x <= 260`, `0 <= y <= 180`). Leave ~8 units of margin.
- Every diagram in `art` or `setup` is a non-empty JSON array of operation objects (`{ "op": "...", ... }`).
- Allowed `op` types:
  - `line`: `{ "op": "line", "x1": 20, "y1": 90, "x2": 240, "y2": 90, "role": "lk", "width": 2, "dash": [4, 4], "name": "axis" }`
  - `arrow`: `{ "op": "arrow", "x1": 30, "y1": 90, "x2": 210, "y2": 90, "role": "hk", "width": 2.5, "head": 7, "name": "ray" }`
  - `polyline`: `{ "op": "polyline", "points": [[30, 90], [120, 48], [210, 90]], "role": "hk", "width": 2.5, "dash": [4, 4], "name": "ray" }`
  - `polygon`: `{ "op": "polygon", "points": [[32, 90], [215, 34], [215, 146]], "role": "s", "name": "cone" }`
  - `rect`: `{ "op": "rect", "x": 65, "y": 24, "w": 80, "h": 52, "rx": 6, "role": "s ok", "name": "glass" }`
  - `circle`: `{ "op": "circle", "cx": 120, "cy": 90, "r": 4, "role": "h", "name": "P" }`
  - `ellipse`: `{ "op": "ellipse", "cx": 130, "cy": 90, "rx": 60, "ry": 35, "role": "s ok", "name": "mirror" }`
  - `curve`: quadratic (`3` points), cubic (`4` points), or chained quadratic lens/surface (`5` points with `"closed": true`):
    `{ "op": "curve", "points": [[120, 22], [108, 90], [120, 158], [132, 90], [120, 22]], "closed": true, "role": "s ok", "name": "lens" }`
  - `arc`: `{ "op": "arc", "cx": 28, "cy": 105, "r": 28, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" }` (angles in degrees; stroke only, no fill).
  - `text`: `{ "op": "text", "x": 130, "y": 152, "text": "Label", "size": 11, "align": "center", "role": "t", "name": "part" }`

## Palette roles (mapped to `01-tokens.css`)

| `role` | token mapping | use for |
|---|---|---|
| `f` | fill `var(--violet)` | main points, centres, focal points |
| `s` | fill `var(--lav-2)` | soft shaded areas, lenses, glass blocks |
| `ok` | stroke `var(--violet)`, width 2 | outline on filled shapes (`"role": "s ok"`) |
| `lk` | stroke `var(--violet)`, no fill | rays, surfaces, angle arcs, axes |
| `gk` | stroke `var(--ink-2)` (0.55 alpha), no fill | normals, dashed construction guides |
| `h` | fill `var(--amber)` | the ONE key point to look at |
| `hk` | stroke `var(--amber)`, no fill | the ONE key ray or path |
| `t` | fill `var(--ink)`, bold | text labels on light/lavender backgrounds |
| `i` | fill `var(--on-violet)`, bold | text labels on top of `f` shapes |

- **Angle arcs**: whenever an angle (such as θ, φ, α, β, i or r) is shown or used, draw it with `"op": "arc"` (`"role": "lk"`, stroke only, no fill) placed **after** the lines/rays it marks so it stays visible on top.
- **Highlightable parts (`name`)**: give each ray, triangle side, surface, angle arc and matching label a `"name": "partName"` field so derivation steps highlight them in `var(--hl)` via `"focus": ["partName"]`.
- **Text bounds**: keep every `text` operation inside `x: 8..252` and `y: 10..176`, with no overlapping labels.

## Three.js (3D): ONLY for the meridional ray

- Use Three.js (`three` field) on **one card only**: the meridional-ray card (`term: "meridional-ray"`), showing the optical axis (`C₁–C₂`), the flat meridional plane, the in-plane meridional ray, and the non-planar skew ray in 3D.
- Every other diagram in the app must use the 2D Canvas operation list (`art` / `setup`).
- The runtime lazy-loads `three.min.js` (`r128`) from `cdnjs.cloudflare.com` only when that card's sheet is opened. If offline, it hides the 3D box and shows the caption and text without crashing.

## Example (as it appears inside `data.json`)

```json
"art": [
  { "op": "circle", "cx": 80, "cy": 95, "r": 50, "role": "s", "name": "Na" },
  { "op": "text", "x": 80, "y": 102, "text": "Na⁺", "size": 20, "align": "center", "role": "t", "name": "Na" },
  { "op": "circle", "cx": 180, "cy": 95, "r": 50, "role": "f", "name": "Cl" },
  { "op": "text", "x": 180, "y": 102, "text": "Cl⁻", "size": 20, "align": "center", "role": "i", "name": "Cl" },
  { "op": "curve", "points": [[112, 62], [130, 22], [148, 62]], "role": "hk", "width": 2.5, "dash": [5, 5], "name": "transfer" },
  { "op": "circle", "cx": 130, "cy": 32, "r": 6, "role": "h", "name": "electron" }
]
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
