# 03 — SVG pictures for `info` cards

Pictures are simple, flat diagrams. The app colours them, including in dark mode, through
**classes**. Never write colours yourself.

## Hard rules

- Exactly one element: `<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="what it shows">…</svg>`
- Draw inside x 0–260, y 0–180. Leave ~8 units of margin.
- Allowed elements: `circle, ellipse, rect, line, polyline, polygon, path, text, g`.
- **No** `fill="#…"`, `stroke="#…"`, `style=`, `<script>`, `<image>`, `href`, `on…=` attributes, gradients, filters, fonts.
- Use only these classes:

| class | effect | use for |
|---|---|---|
| `f` | solid main colour (violet) | main objects, nuclei, arrows heads |
| `s` | soft fill (pale lavender) | backgrounds, secondary objects, areas |
| `ok` | violet outline (add to a filled shape: `class="s ok"`) | borders |
| `lk` | violet line, no fill | lines, paths, axes, orbits |
| `gk` | faint grey line | ground lines, guides, dashed helpers |
| `h` | amber fill | the ONE thing to look at (electron, ball, key point) |
| `hk` | amber line, no fill | the ONE key arrow or path |
| `t` | text in ink colour, bold | labels on light backgrounds |
| `i` | text in light colour, bold | labels on top of `f` shapes |

- Set line thickness with `stroke-width="2"` (allowed). Dashes with `stroke-dasharray="5 5"` (allowed).
- Text: `font-size` 11–26, `text-anchor="middle"` to centre. Max ~4 words per label.
- Only **one** amber (`h`/`hk`) highlight per picture: it is where the eye goes.
- Inside the JSON string, every `"` in the SVG must be written `\"`.

## Example (as it appears inside data.json)

```json
"art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sodium ion giving an electron to a chloride ion\"><circle cx=\"80\" cy=\"95\" r=\"50\" class=\"s\"/><text x=\"80\" y=\"104\" text-anchor=\"middle\" font-size=\"24\" class=\"t\">Na⁺</text><circle cx=\"180\" cy=\"95\" r=\"50\" class=\"f\"/><text x=\"180\" y=\"104\" text-anchor=\"middle\" font-size=\"24\" class=\"i\">Cl⁻</text><path d=\"M 112 62 Q 130 22 148 62\" class=\"hk\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\"/><circle cx=\"130\" cy=\"32\" r=\"6\" class=\"h\"/></svg>"
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
