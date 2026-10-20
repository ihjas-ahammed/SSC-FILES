# Diagram spec: Polarization notes (Griffiths 5th ed. §4.1 and §4.2)

Write each SVG listed below into this folder (`diagrams/`) under the exact file name. Write nothing else. Each file must be a standalone SVG 1.1 document that renders with `rsvg-convert`. Check each file with `rsvg-convert -o /tmp/check.png <file>` and fix any parse error.

## Global style (apply to every file)

- Root: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="..." role="img" aria-label="...">` with the viewBox given per figure. No width/height attributes. Transparent background (no full-page rect).
- Ink colour `#1B2631`. Stroke widths: outlines 1.4, field and force arrows 1.8, dipole axis 2.2, dimension and guide lines 1.0 dashed `4 3`.
- Font: `font-family="Liberation Serif, Times New Roman, serif"`. Labels 13 px. Subscripts and superscripts use `<tspan baseline-shift="sub" font-size="9">`. Variables are italic (`font-style="italic"`). Greek letters as Unicode (ε, θ, σ, ρ, τ, α).
- Colour roles (use these exactly):
  - Positive charge `+q`: fill `#C0392B`; its label fill `#C0392B`.
  - Negative charge `−q`: fill `#1F618D`; its label fill `#1F618D`.
  - Applied field **E**: stroke and fill `#117A65`; label bold italic `#117A65`.
  - Dipole **p** and the dipole axis: stroke `#7D3C98`; label italic `#7D3C98`.
  - Forces **F**: stroke `#D35400`; labels `#D35400`.
  - Polarization **P** and bound charge σb, ρb: stroke `#B9770E`; labels `#B9770E`.
  - Sphere / ball / cloud fill `#FDF2E9`, stroke `#A04000`.
  - Dielectric block / tube fill `#EAF2F8`, stroke `#1B2631`.
  - Guides, radius lines, averaging spheres: stroke `#7F8C8D`, dashed.
  - Result boxes fill `#E9F7EF`, stroke `#117A65`. Equation boxes fill `#EAF2F8`, stroke `#1F618D`. Identity boxes fill `#FDF2E9`, stroke `#A04000`.
- Arrowheads: one `<marker>` per colour, `markerUnits="userSpaceOnUse"`, `markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"`, path `M0,0 L9,4.5 L0,9 z`. Give each marker a unique id prefixed with the file's figure code (for example `s1a-ink`).
- Text never overlaps a line, a circle, or another label. Keep at least 6 px margin to the viewBox edge.
- Use `&#8722;` or the Unicode minus `−` for minus signs.

## Section 1 (§4.1) figures: regenerate

### s1-atom.svg  viewBox 0 0 300 210
Electron cloud model of Example 4.1.
- Cloud: circle centre (150,100) r 80, fill `#FDF2E9`, stroke `#A04000`.
- Cloud centre: small hollow circle (150,100) r 3, stroke ink.
- Radius a: dashed line from (150,100) to (93.4,43.4), colour `#7F8C8D`; label italic "a" at (106,58).
- Nucleus: filled circle (180,100) r 5, fill `#C0392B`; label "+q" at (188,92), colour `#C0392B`.
- Cloud label "−q cloud" at (236,52), colour `#1F618D`.
- Displacement d: dimension line (150,128)–(180,128) with end ticks; label italic "d" at (161,146).
- Applied field: green arrow from (20,24) to (80,24); label bold italic "E" at (40,16), colour `#117A65`.

### s1-dipole-torque.svg  viewBox 0 0 260 210
Permanent dipole in a uniform field at θ = 40°.
- Centre (130,110). Half-length 50. Positive end (168.3,77.9); negative end (91.7,142.1).
- Dipole axis: line between the ends, colour `#7D3C98`, width 2.2.
- +q filled circle r 5 at the positive end (fill `#C0392B`); −q filled circle r 5 at the negative end (fill `#1F618D`).
- Dipole moment p: purple arrow from (130,110) along the axis toward the positive end, length 30 (end point about (153,91)); italic "p" label purple, placed clear of the axis.
- Applied field E: green arrow from (20,30) to (100,30) (horizontal); label bold italic "E".
- Angle θ: arc of radius 25 centred (130,110) from the horizontal direction to the direction of p; label italic "θ".
- Forces: orange arrow F₊ from just right of the positive end to 40 px to the right; orange arrow F₋ from the negative end 40 px to the left. Labels "F₊" and "F₋" in orange, with a subscript.
- Bottom caption inside the viewBox (y ≈ 196): "Net force zero; torque turns p toward E", 12 px, ink colour, centred.

### s1-energy-graph.svg  viewBox 0 0 300 220
Graph of U = −pE cos θ against θ from 0° to 180°.
- Axes: y-axis from (40,28) to (40,182); x-axis from (40,182) to (250,182). Ink colour.
- Curve: polyline through (40,170) (73.3,162) (106.7,140) (140,110) (173.3,80) (206.7,58) (240,50), stroke `#7D3C98`, width 2.2.
- Zero line: dashed grey horizontal at y = 110 from x = 40 to 250.
- Lowest point (40,170): filled dot, colour `#7D3C98`.
- Ticks and labels: "0", "90°", "180°" below the x-axis at x = 40, 140, 240 (y 198). "−pE" at (4,174); "+pE" at (4,54). Axis letters italic: "θ" at (256,186), "U" at (26,24).
- Equation label "U = −pE cos θ" at (50,44), 13 px, colour `#7D3C98`.

### s1-nonuniform.svg  viewBox 0 0 260 190
Dipole in a field that is stronger at the positive end.
- Dipole axis from (90,110) to (170,110), ink colour, width 2.
- −q: hollow circle (fill `#FFFFFF`, stroke `#1F618D`, width 2) r 6 at (90,110). +q: filled `#C0392B` r 6 at (170,110).
- Field arrows (green, above): E₊ from (170,70) to (230,70) (length 60); E₋ from (90,70) to (120,70) (length 30). Labels "E₊" and "E₋" in green, bold italic E.
- Force arrows (orange, below): F₊ from (170,150) to (230,150) (length 60); F₋ from (90,150) to (120,150) (length 30). Labels "F₊" and "F₋" in orange.
- Bottom text at (130,182), centred, 13 px: "E₊ > E₋, so F₊ > F₋: net force to the right".

### s1-polarized-block.svg  viewBox 0 0 300 200
Block of aligned dipoles in a field.
- Block rectangle (40,40) w 220 h 110, fill `#EAF2F8`, stroke ink.
- Green field arrow E above the block: (40,22) to (110,22), label "E" at (70,14).
- Dipoles: a 5 × 3 grid of short purple arrows, each 18 px long, centred at x = 70, 110, 150, 190, 230 and y = 65, 100, 135. Each arrow points right (along E). Stroke `#7D3C98`, width 2, arrowhead purple.
- Bottom label at (150,172): "P = N p" (italic P, colour `#B9770E`), 14 px, centred.
- Second line at (150,188): "dipoles per unit volume × dipole moment", 12 px, centred.

## Section 2 (§4.2) figures: new and regenerated

### s2-dipole-sum.svg  viewBox 0 0 320 220
Geometry of Eq. 4.9: a dipole element at the source point, and the vector to the field point.
- Source element: small purple arrow (dipole P dτ′) centred at (90,150), pointing along +x, length 26. Label italic "P dτ′" beside it, purple, placed below the arrow.
- Field point: filled ink dot at (250,60). Label bold italic "r" beside it.
- Origin: small cross at (30,190) with label "origin" in ink, 12 px.
- Vector 𝓡 from source to field point: solid line (90,150) to (250,60), colour `#117A65` (label italic bold "𝓡" in green near the midpoint, offset up-left).
- Unit vector R̂ arrow (short, green) at the midpoint, perpendicular offset, label "R̂".
- Angle guide: dashed line from the source point horizontally to the right; angle θ between that horizontal and 𝓡 shown as a small arc of radius 28, label italic "θ".
- Caption inside the viewBox at (160,212), 12 px, centred: "V = (1/4πε₀) ∫ P·R̂ / R² dτ′"

### s2-derivation-flow.svg  viewBox 0 0 320 240
Flowchart of the derivation of Eqs. 4.10–4.13. Six boxes, arranged 3 per row, with arrows.
- Row 1 (y 22–62): box A "Eq. 4.9: dipole sum" (fill `#EAF2F8`); box B "∇′(1/𝓡) = R̂/𝓡²" (fill `#FDF2E9`); box C "Integrate by parts" (fill `#FDF2E9`).
- Row 2 (y 128–168): box D "Divergence theorem" (fill `#FDF2E9`); box E "Eq. 4.10: surface + volume terms" (fill `#EAF2F8`); box F "Eq. 4.13: σb and ρb" (fill `#E9F7EF`, stroke `#117A65`).
- Each box is 92 px wide and 40 px tall, with 12 px centred text (two lines allowed).
- Arrows A→B, B→C, C down to D (curved or elbow path), D→E, E→F, all ink colour with arrowheads.
- Under box F, a small line of text (y 196, 12 px): "σb = P·n̂ on the surface", and (y 212): "ρb = −∇·P in the volume". Colour `#B9770E` for the σb and ρb symbols.

### s2-pillbox-divergence.svg  viewBox 0 0 300 200
Why ρb = −∇·P: flux of P through a small box.
- Box (dashed outline, ink) from (80,50) to (220,150) (volume element).
- Left face: P arrows pointing into the box (amber), length 22, drawn at x = 80, y = 75, 100, 125.
- Right face: P arrows pointing out of the box, length 40 (larger), at x = 220, y = 75, 100, 125.
- Labels: "P in" at (60,40) and "P out" at (236,40), amber. Note "out > in" on the right.
- Inside the box, centred at (150,105): "−" sign, 16 px, colour `#1F618D`, with caption under the box at (150,176): "∮P·da > 0 ⇒ ρb = −∇·P < 0 inside" (13 px, ink).

### s2-dipole-chain.svg  viewBox 0 0 320 160
Chain of dipoles: interior ends cancel, end charges remain.
- Six dipoles in a row along x, centres at x = 60, 100, 140, 180, 220, 260, y = 80. Each dipole: −q (blue filled r 4) at x − 10, +q (red filled r 4) at x + 10, with a thin purple connecting line.
- Between neighbours, the + of one and − of the next are drawn touching (cancel): mark each shared pair with a small dotted grey circle r 6 (colour `#7F8C8D`).
- At the left end: an unpaired −q (blue, r 5) at x = 40, y = 80, label "−" bold; at the right end: unpaired +q (red, r 5) at x = 280, label "+".
- Label "bound charge" under each end (y 110), 12 px.
- Amber P arrow above the chain from (40,50) to (280,50), label italic "P" at (160,42).
- Caption at (160,140): "Interior charges cancel; only the end charges remain" (12 px, ink).

### s2-oblique-tube.svg  viewBox 0 0 320 200
Bound charge on an oblique cut of a tube (§4.2.2).
- Tube parallelogram: points (60,60) (190,60) (240,140) (110,140), fill `#EAF2F8`, stroke ink.
- Left end: vertical dimension line at x = 40 from y = 60 to 140 with label "A" (cross-section area) at (28,104).
- P arrow inside: amber, from (80,100) to (170,100), label italic "P" at (120,92).
- Oblique right end: from (190,60) to (240,140). Outward normal n̂ drawn at its midpoint (215,100) as a short amber arrow, label italic "n̂".
- Angle θ between P and n̂ shown as an arc of radius 22 at (215,100) area, label "θ" (small).
- + marks along the oblique end (red, bold, 3 small "+"s at (196,80), (212,100), (228,120)).
- Formula text under the figure at (160,178), 13 px, centred: "A_end = A / cos θ,  σb = P cos θ = P·n̂". Use subscripts. Colour `#B9770E` for σb and P.

### s2-sphere-field.svg  viewBox 0 0 320 240
Uniformly polarized sphere: field inside and outside (Eqs. 4.14–4.16).
- Sphere: circle centre (160,120) r 70, fill `#FDF2E9`, stroke `#A04000`.
- P arrow inside: amber, from (120,120) to (200,120)? Use (110,120) to (210,120), label italic bold "P" at (216,116).
- Field inside: three parallel green arrows pointing LEFT (opposite P), at y = 100, 120, 140, from x 170 to 130, each 40 px. Label bold italic "E = −P/3ε₀" in green under the sphere at (160,206).
- Top cap label "+σb" in red at (160,40), above the sphere. Bottom cap label "−σb" in blue at (160,228), below the sphere.
- Field label "E = −P/3ε₀" in green at (160,200), between the sphere and the bottom label.
- Outside: 4 green curved lines (dipole-like) from the upper pole to the lower pole, drawn as quadratic curves bulging outward on both sides of the sphere (for example M160,50 Q250,120 160,190 and M160,50 Q70,120 160,190). Stroke `#117A65`, width 1.4, dashed for the two outer ones.
- Caption (not in SVG).

### s2-averaging-sphere.svg  viewBox 0 0 260 200
Averaging sphere for the macroscopic field (§4.2.3, background).
- Dashed circle centre (130,100) r 60, stroke `#7F8C8D`, fill `#EAF2F8` at 60% opacity.
- Centre point: filled ink dot, label italic bold "r" at (138,94).
- Inside the circle: four small purple dipole arrows around the centre (each 16 px long, at angles 30°, 120°, 210°, 300° from the centre at radius 28), label in the box: none.
- Outside the circle (outside dashed boundary): two small red + and two blue − circles placed at radius 80, at angles 60° and 240° (red) and 150° and 330° (blue).
- Labels at bottom (y 186, 12 px, centred): "E = E_out + E_in: outside charges and inside dipoles". Colours: E in green.
