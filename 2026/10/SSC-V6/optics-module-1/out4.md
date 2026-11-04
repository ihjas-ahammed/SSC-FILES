### 1. Unified diff (`patch -p1`)

```diff
--- a/skills/00-START-HERE.md
+++ b/skills/00-START-HERE.md
@@ -69,12 +69,12 @@
 1. Plan first, privately: list the sections (big subject areas, 2–6), and inside each the topics
    ("sheets", 2–5 per section). A topic is something I can finish in 10–25 minutes.
 2. For each syllabus topic write about 6–14 cards, following `01-schema.md`:
-   - concepts first (`info` cards, one idea each, with an SVG picture when a picture helps),
+   - concepts first (`info` cards, one idea each, with a `ggb` GeoGebra figure when a picture helps),
    - a `derivation` card whenever the topic has a formula that is derived (rules in `02-derivations.md`),
    - one `math` worked example where numbers help,
    - then 3–5 questions (`mcq`, `fill`, `number`) at the end of the topic (rules in `04-questions.md`).
-2b. For physics topics also follow the "Physics subjects: required pictures" rules in `03-svg-art.md`
-   (circuit diagrams, optics set-up diagrams, true graphs) and give every derivation 4 `ask` checkpoints.
+2b. For physics topics also follow the GeoGebra figure rules in `03-svg-art.md`
+   (interactive geometry with dependencies, `free` draggable points, and step `focus` names) and give every derivation 4 `ask` checkpoints.
 2c. For physics model-paper practice, preserve the paper's sections and question order.
    Use one sheet per exam question, with `question` → marking `eval` cards → `score`
    → model answer/figures/derivations → `key` (Remember) → exactly three new OMR
--- a/skills/01-schema.md
+++ b/skills/01-schema.md
@@ -61,7 +61,7 @@
 ```
 
 The prompt is `q`; `textAnswer` is an optional boolean for prose-only answers.
-Optional `art` follows the same SVG rules as `info`. A `hint` can replace the
+Optional `ggb` follows the same GeoGebra rules as `info`. A `hint` can replace the
 default instruction. Do not enable a prose box on questions requiring diagrams,
 graphs, equations or calculations.
 
@@ -91,15 +91,20 @@
 `points` is a non-empty list. Place the Remember card after the model answer,
 then append the three word-completion OMR cards described below.
 
-### `intuition` — plain-words introduction with required SVG picture
+### `intuition` — plain-words introduction with required GeoGebra figure
 
 Place an `intuition` card immediately before a new concept's technical `info` card;
 see `07-plain-words-and-glossary.md`. Every `intuition` card **must** include a
-`art` SVG (drawn according to `03-svg-art.md`), followed by `picture` as a short
+`ggb` figure (built according to `03-svg-art.md`), followed by `picture` as a short
 one-line caption explaining what to look at in the diagram.
 ```json
 { "type": "intuition", "term": "paraxial-approximation",
   "title": "Why only rays close to the axis focus sharply",
   "meaning": "The paraxial approximation keeps only rays that make very small angles with the axis.",
-  "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>",
+  "ggb": {
+    "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
+    "commands": [ "O = (-6, 0)", "P = (0, 0)", "S = (0, 2)", "OS = Segment(O, S)", "alpha1 = Angle(P, O, S)" ],
+    "free": [ "S" ],
+    "focus": [ "OS", "alpha1" ]
+  },
   "picture": "Look at the small angle arc α near O where height h over distance x gives the angle.",
   "example": "At 0.1 rad, sin(0.1) and tan(0.1) are both very close to 0.1.",
   "bridge": "Under this small-angle rule, all paraxial rays from O meet at one image point I." }
@@ -119,11 +124,15 @@
 Keep the authored definition body on the flip card's front; writing belongs on
 its back. Locked cards remain in the row with their original dimensions.
 ```json
-{ "type": "info", "label": "01", "title": "Ionic bond",
-  "body": "One atom transfers electrons to another, creating oppositely charged ions that attract.",
-  "examples": ["NaCl", "MgO"],
-  "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>" }
+{ "type": "info", "label": "04 · §3.2 Reflection", "title": "Laws of reflection from Fermat's principle",
+  "body": "Reflecting A across mirror MN to A' makes AP + PB = A'P + PB. A straight line A'PB minimizes length, so i = r.",
+  "examples": ["AP = PA'", "i = r"],
+  "ggb": {
+    "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
+    "commands": [ "M = (-7, -1)", "N = (7, -1)", "MN = Segment(M, N)", "A = (-4, 3)", "B = (4, 3)" ],
+    "free": [ "A" ]
+  } }
 ```
 - `body`: 1–2 sentences, ≤ 220 characters. One idea per card.
 - `examples`: 0–3 short chips (≤ 24 chars each).
-- `art`: optional SVG (rules in `03-svg-art.md`). Instead of `art` you may give `"tex": "E = mc^2"` to show one formula large.
+- `ggb`: optional GeoGebra figure (rules in `03-svg-art.md`). Instead of `ggb` you may give `"tex": "E = mc^2"` to show one formula large.
 
 ### `math` — a formula or worked example shown large
 ```json
@@ -136,12 +145,17 @@
 ### `derivation` — a derived result on a single flip card
 See `02-derivations.md`. Shape:
 ```json
-{ "type": "derivation", "title": "Bond energy, step by step",
-  "legend": "\\(k\\) Coulomb constant, \\(r\\) separation.",
-  "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\"><line x1=\"...\" y1=\"...\" x2=\"...\" y2=\"...\" class=\"lk\" data-part=\"sep\"/></svg>",
-  "phases": [ { "name": "Model", "why": "energy = attraction + repulsion" } ],
-  "steps": [ { "tex": "...", "phase": "Model", "focus": ["sep"], "note": "..." },
-             { "tex": "...", "move": { "type": "differentiate", "wrt": "r" }, "focus": ["sep"], "note": "...", "ask": { ... } } ] }
+{ "type": "derivation", "title": "Snell's law from Fermat's principle",
+  "legend": "Interface \\(PQ\\) separating \\(n_1, n_2\\).",
+  "ggb": {
+    "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
+    "commands": [ "A = (-5, 4)", "R = (0, 0)", "B = (5, -4)", "AR = Segment(A, R)", "RB = Segment(R, B)" ],
+    "free": [ "R" ],
+    "steps": { "1": { "show": ["AR", "RB", "R"], "focus": ["AR", "RB", "R"] } }
+  },
+  "phases": [ { "name": "Optical path", "why": "sum optical paths in both media" } ],
+  "steps": [ { "tex": "L_{op} = n_1 AR + n_2 RB", "phase": "Optical path", "focus": ["AR", "RB", "R"], "note": "..." },
+             { "tex": "...", "move": { "type": "differentiate", "wrt": "x" }, "focus": ["R"], "note": "...", "ask": { ... } } ] }
 ```
-- Give each highlightable ray, side, angle arc or label in `setup` a `data-part="name"` attribute.
-- Each step lists the parts it uses in `"focus": ["name1", "name2"]` so the diagram highlights them at the same time.
+- Define every point, ray, segment and angle arc in `ggb.commands` with textbook names.
+- Each step lists the GeoGebra object names it uses in `"focus": ["name1", "name2"]` (and in `ggb.steps`) so the figure highlights them via the GeoGebra API at the same time.
--- a/skills/02-derivations.md
+++ b/skills/02-derivations.md
@@ -1,10 +1,10 @@
 # 02 — Writing derivations
 
 You write **lines of TeX** and name the **move** that produced each line. The app animates
-everything on a single card after the student flips it: the `setup` SVG sits next to the
+everything on a single card after the student flips it: the `ggb` GeoGebra figure sits next to the
 equations on the same board, symbols glide to their new place, new symbols write in, and
-cancelled ones are struck through and vanish.
+cancelled ones are struck through and vanish while the GeoGebra API highlights the active geometry.
 
 ## Rules for every step
 
 1. `tex` is **one line** with **exactly one `=`** at the top level.
@@ -19,10 +19,10 @@
    surface 1 and surface 2 of a thin lens), write them one after the other as separate steps,
    each with its own phase label—never side by side. The first step has no `move`; every later step has one.
 6. Every step has a `note`: one short sentence saying *why* or what just cancelled (≤ 120 chars).
-7. Include a `"setup"` SVG (following `03-svg-art.md`) showing the geometry or circuit used by
-   the derivation, with `data-part="name"` on each highlightable ray, side, angle arc and label.
-   Each step names the parts it uses in `"focus": ["name1", "name2"]` so the picture highlights
-   those lines at the same time.
+7. Include a `"ggb"` figure object (following `03-svg-art.md`) showing the interactive geometry used by
+   the derivation, with textbook object names in `commands` and draggable points in `free`.
+   Each step names the GeoGebra objects it uses in `"focus": ["name1", "name2"]` (and `ggb.steps`) so the
+   GeoGebra API highlights those lines, points and angles at the same moment.
 8. Mark 3–6 phases with `"phase"` on the step where each phase starts. List the same phases in
    `"phases"` with a one-line `why` each. Do not create separate route, step, or full-page cards;
    the card includes an **All steps** summary stage that opens after the last step or from the top button.
--- a/skills/03-svg-art.md
+++ b/skills/03-svg-art.md
@@ -1,61 +1,68 @@
-# 03 — SVG pictures for `info`, `intuition` and `derivation` cards
-
-Pictures are simple, flat diagrams. The app colours them, including in dark mode, through
-**classes**. Never write colours yourself.
-
-## Hard rules
-
-- Exactly one element: `<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="what it shows">…</svg>`
-- Draw inside x 0–260, y 0–180. Leave ~8 units of margin.
-- Allowed elements: `circle, ellipse, rect, line, polyline, polygon, path, text, g`.
-- **No** `fill="#…"`, `stroke="#…"`, `style=`, `<script>`, `<image>`, `href`, `on…=` attributes, gradients, filters, fonts.
-- Use only these classes:
-
-| class | effect | use for |
-|---|---|---|
-| `f` | solid main colour (violet) | main objects, nuclei, arrows heads |
-| `s` | soft fill (pale lavender) | backgrounds, secondary objects, areas |
-| `ok` | violet outline (add to a filled shape: `class="s ok"`) | borders |
-| `lk` | violet line, no fill | lines, paths, angle arcs, axes, orbits |
-| `gk` | faint grey line | ground lines, guides, dashed helpers |
-| `h` | amber fill | the ONE thing to look at (electron, ball, key point) |
-| `hk` | amber line, no fill | the ONE key arrow or path |
-| `t` | text in ink colour, bold | labels on light backgrounds |
-| `i` | text in light colour, bold | labels on top of `f` shapes |
-
-- Set line thickness with `stroke-width="2"` (allowed). Dashes with `stroke-dasharray="5 5"` (allowed).
-- **Angle arcs**: whenever an angle (such as θ, φ, α, β, i or r) is shown or used, draw its curved mark as a `<path d="M x1 y1 A r r 0 0 1 x2 y2" class="lk" stroke-width="1.8"/>` (line, no fill), placed **after** the lines/rays it marks so it stays visible on top.
-- **Highlightable parts (`data-part`)**: give each ray, triangle side, surface, angle arc and matching label a `data-part="name"` attribute so derivation steps can highlight them via `"focus": ["name"]`.
-- **Palette tokens only**: never hard-code hex/rgb colours in SVGs or maths CSS; use only the allowed classes and the tokens from `01-tokens.css`.
-- Text: `font-size` 11–26, `text-anchor="middle"` to centre. Max ~4 words per label.
-- Only **one** amber (`h`/`hk`) highlight per picture: it is where the eye goes.
-- Inside the JSON string, every `"` in the SVG must be written `\"`.
-
-## Example (as it appears inside data.json)
-
-```json
-"art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sodium ion giving an electron to a chloride ion\"><circle cx=\"80\" cy=\"95\" r=\"50\" class=\"s\"/><text x=\"80\" y=\"104\" text-anchor=\"middle\" font-size=\"24\" class=\"t\">Na⁺</text><circle cx=\"180\" cy=\"95\" r=\"50\" class=\"f\"/><text x=\"180\" y=\"104\" text-anchor=\"middle\" font-size=\"24\" class=\"i\">Cl⁻</text><path d=\"M 112 62 Q 130 22 148 62\" class=\"hk\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\"/><circle cx=\"130\" cy=\"32\" r=\"6\" class=\"h\"/></svg>"
-```
-
-## Good subjects for a picture
-
-Particles and charges, forces as arrows, rays and lenses, simple graphs (axes + one line + shaded
-area), before/after comparisons side by side, cycles as circles with arrows, cells as ellipses.
-
-If a picture would need more than ~15 shapes, skip `art` and use `"tex"` for a key formula instead.
-
-## Physics subjects: required pictures (added 2026-10-23)
-
-- **Every circuit gets a circuit diagram card**: AC source (circle with a sine), the components on the loop
-  (zig-zag resistor, humps for inductor, two plates for capacitor), labels R, L, C, the current arrow and the
-  source EMF written underneath. Draw R, L, C alone, L-R, C-R, series LCR, parallel L-C and the coil-in-parallel
-  tank circuit as separate pictures.
-- **Every optics experiment gets the textbook set-up diagram**: plane wave, slit(s) or grating, lens, screen,
-  the angle theta, the path difference marked (for example b sin theta for a slit, d sin theta for two slits or
-  a grating) and the points O (centre) and P.
-- **Every pattern gets a true graph**, not a sketch: single slit sinc squared with secondary maxima 4.5% and 1.6%;
-  two slits as cosine squared fringes inside the single-slit envelope with the missing order circled; N slits with
-  sharp principal maxima and N-2 weak maxima; straight edge rising to 1.37 I0 outside the shadow.
-  Write the curve as ONE `<polyline points="...">` of 100+ points computed from the formula (`polyline` is allowed).
-  Never draw these with a few Bezier segments.
-- Keep every `<text>` inside x 8 to 252 and y 10 to 176, or it is clipped. Do not let two labels overlap.
+# 03 — GeoGebra figures (`ggb`) for `intuition`, `info` and `derivation` cards
+
+Figures are interactive GeoGebra constructions described by a `"ggb"` object in `data.json`.
+Do not use SVG strings (`art` or `setup`). The app loads `https://www.geogebra.org/apps/deployggb.js`
+once, builds the construction with the official GeoGebra Apps API, applies the palette from
+`01-tokens.css` (in both light and dark mode), and animates step changes through API calls.
+
+## Schema of a `ggb` object
+
+```json
+"ggb": {
+  "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
+  "commands": [
+    "A = (-5, 4)",
+    "R = (0, 0)",
+    "M = (x(A), 0)",
+    "AM = Segment(A, M)",
+    "MR = Segment(M, R)",
+    "AR = Segment(A, R)",
+    "theta1 = Angle(M, A, R)"
+  ],
+  "free": [ "A", "R" ],
+  "focus": [ "AR", "R" ],
+  "dashed": [ "AM" ],
+  "hidden": [ "M" ],
+  "labels": { "AM": "h₁", "MR": "x", "theta1": "θ₁" },
+  "steps": {
+    "1": { "show": [ "AR", "R" ], "focus": [ "AR", "R" ] },
+    "2": { "show": [ "AR", "AM", "MR" ], "focus": [ "AR", "AM", "MR" ] }
+  }
+}
+```
+
+## Keys and rules
+
+| key | required | meaning |
+|---|---|---|
+| `view` | yes | `{ "xmin", "xmax", "ymin", "ymax", "grid": true, "axes": false }`. The grid is visible (`grid: true`) and supports pan and zoom. |
+| `commands` | yes | Ordered list of GeoGebra commands `"name = Expression(...)"` passed to `api.evalCommand`. |
+| `free` | no | Array of point names in `commands` that the student may drag (`api.setFixed(name, false, true)`). Every other object is fixed (`api.setFixed(name, true, false)`) so fixed textbook geometry cannot be dragged. |
+| `focus` | no | Array of object names highlighted in amber (`--amber` / `--hl`) with thicker lines on static cards or before step playback. |
+| `dashed` | no | Array of guide/helper line names styled dashed (`api.setLineStyle(name, 1)`) in secondary ink (`--ink-2`). |
+| `hidden` | no | Array of construction helper names hidden by default (`api.setVisible(name, false)`). |
+| `labels` | no | Object mapping `name -> caption` applied with `api.setCaption`, `api.setLabelStyle(name, 3)` and `api.setLabelVisible(name, true)`. |
+| `steps` | derivations | Map of step number (`"1"`, `"2"`, …) to `{ "show": [...], "hide": [...], "focus": [...] }`. Every name in `show`, `hide`, and `focus` must exist in `commands`. |
+
+## Dependencies and textbook accuracy
+
+1. **Build with dependencies**: define feet of perpendiculars (`M = (x(A), 0)`), intersections (`Intersect(...)`), segments (`Segment(A, R)`), polylines (`PolyLine(...)`), arcs (`CircumcircularArc(...)`), and angles (`Angle(...)`) from the points and lines so dragging any `free` point updates the entire figure accurately.
+2. **Match the textbook**: use the exact symbols, signs, rays and point names from Ghatak, *Optics* (`unit-1` to `unit-4`, Cartesian sign convention).
+3. **API-only step animation**: on derivation step changes, the runtime calls `setVisible`, `setColor`, `setLineThickness`, `setPointSize`, `setFilling`, and `setLabelVisible` on the GeoGebra applet. Any object named in the step's `focus` or mentioned in the step text is highlighted at that moment.
+4. **Palette colours only**: JS maps `01-tokens.css` variables to RGB values for light and dark themes (`--violet`, `--ink`, `--ink-2`, `--amber`, `--hl`) and updates every applet when the theme changes. Never use red or rose in maths figures.
+5. **Clean chrome**: `showToolBar`, `showMenuBar`, `showAlgebraInput`, and `showResetIcon` are all `false`, with `perspective: "G"` (Graphics view only).
--- a/skills/05-checklist.md
+++ b/skills/05-checklist.md
@@ -78,10 +78,13 @@
 - [ ] Keep syllabus topics compact; retain a full model-paper question and rubric in the same sheet even when that exceeds 14 cards.
 
-## SVG
-- [ ] `viewBox="0 0 260 180"`, only allowed classes, no colours, one amber highlight.
-- [ ] Highlightable lines, arcs and labels have `data-part="name"`, and derivation steps name them in `focus`.
-- [ ] Maths and derivation styles use only the colour tokens from `01-tokens.css` (no hard-coded red or rose).
+## GeoGebra figures
+- [ ] No SVG `art` or `setup` remains in `data.json`; every `intuition` and `derivation` card (and figure `info` card) uses `"ggb"`.
+- [ ] Every `ggb` has `view` (`grid: true`), dependent `commands`, draggable `free` points, and fixed textbook geometry.
+- [ ] Every name in `focus`, `free`, `dashed`, `hidden`, and `ggb.steps` exists on the left-hand side of `=` in `ggb.commands`.
+- [ ] Step changes animate via official GeoGebra Apps API methods (`evalCommand`, `setCoordSystem`, `setGridVisible`, `setAxesVisible`, `setVisible`, `setColor`, `setLineThickness`, `setLineStyle`, `setPointSize`, `setFilling`, `setFixed`, `setLabelVisible`, `setLabelStyle`, `setCaption`, `setSize`, `enableShiftDragZoom`, `setPerspective`, `setRepaintingActive`).
+- [ ] Colours are mapped from `01-tokens.css` for light and dark mode (amber highlight, no red or rose) and update on theme toggle.
+- [ ] Every figure and derivation step matches the textbook unit PDFs (`unit-1` to `unit-4`, Ghatak, *Optics*).
 
 When I run `python build.py`, it prints every problem with its exact location
 (e.g. `sections[1].sheets[0].cards[3].steps[2]`). If I paste that output back to you, fix exactly
 those fields and send the whole corrected JSON again.
--- a/skills/07-plain-words-and-glossary.md
+++ b/skills/07-plain-words-and-glossary.md
@@ -5,15 +5,15 @@
 
 For each newly introduced concept, answer “What is it?” first. Give its category
-and meaning, then a concrete diagram (`art`) with a short caption (`picture`),
+and meaning, then a concrete interactive GeoGebra figure (`ggb`) with a short caption (`picture`),
 an example and a connection to the formal definition. A list of properties or
 applications does not replace this answer. Avoid defining one unfamiliar term
 only through other unfamiliar terms.
 
 Place an intuition card immediately before the technical introduction. Fields:
-`type = "intuition"`, `term` = glossary entry ID, `title`, `meaning`, `art`
-(required: one SVG drawn according to `03-svg-art.md`), `picture` (one short
-caption line under the SVG saying what to look at), `example` and `bridge`.
-All text fields are non-empty plain text. The app renders `art` followed by the
+`type = "intuition"`, `term` = glossary entry ID, `title`, `meaning`, `ggb`
+(required: one GeoGebra figure object following `03-svg-art.md`), `picture` (one short
+caption line under the figure saying what to look at), `example` and `bridge`.
+All text fields are non-empty plain text. The app renders `ggb` followed by the
 `picture` caption inside the scrollable reading area.
 
 Example mental picture: for a particle on a line, a Hilbert space is a collection
--- a/skills/example-minimal.json
+++ b/skills/example-minimal.json
@@ -27,12 +27,31 @@
                 "\\(\\lambda\\) = decay constant",
                 "Unit: s⁻¹"
               ],
-              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Falling curve of remaining nuclei\"><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"155\" class=\"lk\" stroke-width=\"2\"/><line x1=\"30\" y1=\"155\" x2=\"245\" y2=\"155\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 30 30 C 80 110 140 140 240 150\" class=\"hk\" stroke-width=\"3\"/><text x=\"40\" y=\"28\" font-size=\"14\" class=\"t\">N</text><text x=\"238\" y=\"172\" text-anchor=\"end\" font-size=\"14\" class=\"t\">t</text></svg>"
+              "ggb": {
+                "view": { "xmin": -1, "xmax": 6, "ymin": -1, "ymax": 5, "grid": true },
+                "commands": [
+                  "O = (0, 0)",
+                  "Tx = (5.5, 0)",
+                  "Ny = (0, 4.4)",
+                  "taxis = Segment(O, Tx)",
+                  "naxis = Segment(O, Ny)",
+                  "P = (1.5, 4 * exp(-0.6 * 1.5))",
+                  "curve = Function(4 * exp(-0.6 * x), 0, 5.2)"
+                ],
+                "free": [ "P" ],
+                "focus": [ "curve", "P" ],
+                "labels": { "taxis": "t", "naxis": "N", "P": "N(t)" }
+              }
             },
             {
               "type": "derivation",
               "title": "From rate to the decay law",
               "legend": "\\(N\\) nuclei left, \\(N_0\\) at \\(t = 0\\), \\(\\lambda\\) decay constant.",
+              "ggb": {
+                "view": { "xmin": -1, "xmax": 6, "ymin": -1, "ymax": 5, "grid": true },
+                "commands": [
+                  "N0 = (0, 4)",
+                  "P = (2, 4 * exp(-0.5 * 2))",
+                  "curve = Function(4 * exp(-0.5 * x), 0, 5.2)"
+                ],
+                "free": [ "P" ],
+                "focus": [ "curve", "P" ]
+              },
               "phases": [
--- a/study-match/build.py
+++ b/study-match/build.py
@@ -92,9 +92,9 @@
             w = '%s.%s' % (where, k)
             if isinstance(v, str):
                 obj[k] = fix_text(v, w, rep, tex_field=k in tex_keys)
                 if k not in tex_keys and k not in ('art', 'id', 'type', 'icon'):
                     check_inline_math(obj[k], w, rep)
-            else:
+            elif k != 'ggb':
                 walk_text(v, w, rep, tex_keys)
     elif isinstance(obj, list):
         for i, v in enumerate(obj):
@@ -116,6 +116,45 @@
     if not a.get('why'):
         rep.warn(where, 'ask has no "why"; the learner sees no reason after answering')
 
 
+def check_ggb(g, where, rep):
+    if not isinstance(g, dict):
+        rep.err(where, 'ggb must be an object'); return set()
+    view = g.get('view')
+    if not isinstance(view, dict):
+        rep.err(where + '.view', 'ggb needs a view object')
+    else:
+        for k in ('xmin', 'xmax', 'ymin', 'ymax'):
+            if not isinstance(view.get(k), (int, float)):
+                rep.err(where + '.view.' + k, 'must be a number')
+        if isinstance(view.get('xmin'), (int, float)) and isinstance(view.get('xmax'), (int, float)) and view['xmin'] >= view['xmax']:
+            rep.err(where + '.view', 'xmin must be less than xmax')
+        if isinstance(view.get('ymin'), (int, float)) and isinstance(view.get('ymax'), (int, float)) and view['ymin'] >= view['ymax']:
+            rep.err(where + '.view', 'ymin must be less than ymax')
+        if view.get('grid') is not True:
+            rep.err(where + '.view.grid', 'grid must be true')
+    cmds = g.get('commands')
+    names = set()
+    if not isinstance(cmds, list) or not cmds:
+        rep.err(where + '.commands', 'ggb needs a non-empty commands list'); return names
+    for i, cmd in enumerate(cmds):
+        cw = '%s.commands[%d]' % (where, i)
+        if not isinstance(cmd, str) or '=' not in cmd:
+            rep.err(cw, 'command must be a "name = expression" string'); continue
+        m = re.match(r'^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$', cmd)
+        if not m:
+            rep.err(cw, 'invalid object name before "=": %s' % cmd); continue
+        names.add(m.group(1))
+    for key in ('free', 'focus', 'dashed', 'hidden'):
+        lst = g.get(key)
+        if lst is not None:
+            if not isinstance(lst, list) or any(not isinstance(x, str) for x in lst):
+                rep.err('%s.%s' % (where, key), 'must be a list of object names')
+            else:
+                for x in lst:
+                    if x not in names:
+                        rep.err('%s.%s' % (where, key), 'object "%s" is not defined in commands' % x)
+    labels = g.get('labels')
+    if labels is not None:
+        if not isinstance(labels, dict):
+            rep.err(where + '.labels', 'must be an object')
+        else:
+            for k in labels:
+                if k not in names:
+                    rep.err(where + '.labels', 'object "%s" is not defined in commands' % k)
+    steps = g.get('steps')
+    if steps is not None:
+        if not isinstance(steps, dict):
+            rep.err(where + '.steps', 'must be an object mapping step numbers to show/hide/focus')
+        else:
+            for sk, sv in steps.items():
+                sw = '%s.steps[%s]' % (where, sk)
+                if not isinstance(sv, dict):
+                    rep.err(sw, 'must be an object'); continue
+                for fk in ('show', 'hide', 'focus'):
+                    fl = sv.get(fk)
+                    if fl is not None:
+                        if not isinstance(fl, list):
+                            rep.err('%s.%s' % (sw, fk), 'must be a list')
+                        else:
+                            for x in fl:
+                                if x not in names:
+                                    rep.err('%s.%s' % (sw, fk), 'object "%s" is not defined in commands' % x)
+    return names
+
+
 def validate(data, rep):
     if not isinstance(data, dict):
@@ -173,24 +212,20 @@
     if t == 'intuition':
         for field in ('term', 'meaning', 'picture', 'example', 'bridge'):
             if not isinstance(c.get(field), str) or not c[field].strip():
                 rep.err(w, 'intuition needs a non-empty ' + field)
-    if t in ('info', 'question') and c.get('art'):
-        a = c['art']
-        if not a.strip().startswith('<svg') or 'viewBox' not in a:
-            rep.err(w, 'art must be one <svg viewBox="0 0 260 180" ...> element')
-        if re.search(r'<script|on\w+=|href=', a, re.I):
-            rep.err(w, 'art must not contain scripts, event handlers or links')
-        if re.search(r'fill="#|stroke="#', a):
-            rep.warn(w, 'art uses hard-coded colours; use the palette classes so dark mode works')
-        for cl in re.findall(r'class="([^"]+)"', a):
-            for x in cl.split():
-                if x not in SVG_CLASSES:
-                    rep.warn(w, 'art uses unknown class "%s"' % x)
+        if 'ggb' not in c:
+            rep.err(w, 'intuition card needs a "ggb" GeoGebra figure')
+    if c.get('art') or c.get('setup'):
+        rep.err(w, 'SVG art/setup is not allowed; use a "ggb" GeoGebra object')
+    if 'ggb' in c and t != 'derivation':
+        check_ggb(c['ggb'], w + '.ggb', rep)
     if t == 'question':
         if 'textAnswer' in c and not isinstance(c['textAnswer'], bool):
             rep.err(w, 'textAnswer must be true or false')
         if not c.get('q'):
             rep.err(w, 'question card needs "q"')
-        if c.get('art') and not str(c['art']).strip().startswith('<svg'):
-            rep.err(w, 'art must be one <svg> element')
     if t == 'eval':
@@ -240,7 +275,11 @@
 def check_derivation(d, w, rep):
+    ggb_names = set()
+    if 'ggb' not in d:
+        rep.err(w, 'derivation needs a "ggb" GeoGebra figure')
+    else:
+        ggb_names = check_ggb(d['ggb'], w + '.ggb', rep)
     steps = d.get('steps')
     if not isinstance(steps, list) or len(steps) < 2:
         rep.err(w, 'derivation needs at least 2 steps'); return
     if len(steps) > 16:
         rep.warn(w, '%d steps is long; split it into two derivations if you can' % len(steps))
     for i, st in enumerate(steps):
         sw = '%s.steps[%d]' % (w, i)
+        for fn in (st.get('focus') or []):
+            if ggb_names and fn not in ggb_names:
+                rep.err(sw + '.focus', 'object "%s" is not defined in ggb.commands' % fn)
         tex = st.get('tex')
--- a/study-match/src/components/02-mathflow.js
+++ b/study-match/src/components/02-mathflow.js
@@ -161,51 +161,15 @@
       if (playBtn) playBtn.innerHTML = playing ? '&#10073;&#10073;' : '&#9654;';
     }
 
-    /* highlight the part of the setup SVG (labels and angle arcs) used in the current step */
+    /* highlight the active GeoGebra objects in the setup figure via the GeoGebra Apps API */
     function highlightSetup(f) {
-      if (!setupEl) return;
-      var svg = setupEl.querySelector('svg');
-      if (!svg) return;
-      Array.prototype.forEach.call(svg.querySelectorAll('.mf-part-on'), function (el) { el.classList.remove('mf-part-on'); });
-      if (!f) return;
+      if (!setupEl || !SM.GGB) return;
+      if (!f) { SM.GGB.step(setupEl, -1, [], ''); return; }
       var st = spec.steps[f.si] || {};
       var focusList = Array.isArray(st.focus) ? st.focus : (st.focus ? String(st.focus).split(/[\s,]+/) : []);
-      var focusSet = {};
-      focusList.forEach(function (k) { if (k) focusSet[k] = 1; });
-      var hay = (f.tex || '') + ' ' + (st.note || '') + ' ' + focusList.join(' ');
-      Array.prototype.forEach.call(svg.querySelectorAll('[data-part]'), function (el) {
-        var dp = el.getAttribute('data-part') || '';
-        if (focusSet[dp] || (!focusList.length && dp && hay.indexOf(dp) !== -1)) el.classList.add('mf-part-on');
-      });
-      var map = {
-        '\\theta_1': 'θ₁', '\\theta_2': 'θ₂', '\\phi_1': 'φ₁', '\\phi_2': 'φ₂',
-        '\\alpha_1': 'α₁', '\\alpha_2': 'α₂', '\\beta': 'β',
-        'h_1': 'h₁', 'h_2': 'h₂', 'R_1': 'R₁', 'R_2': 'R₂',
-        'F_1': 'F₁', 'F_2': 'F₂', 'f_1': 'f₁', 'f_2': 'f₂',
-        'x_1': 'x₁', 'x_2': 'x₂', 'n_1': 'n₁', 'n_2': 'n₂'
-      };
-      var want = {};
-      Object.keys(map).forEach(function (k) { if (hay.indexOf(k) !== -1) want[map[k]] = 1; });
-      ['h', 'x', 'y', 'r', 'R', 'u', 'v', 'f', 'O', 'I', 'P', 'C', 'S', 'A', 'B', 'Q'].forEach(function (sym) {
-        var re = new RegExp('(^|[^a-zA-Z\\\\])' + sym + '([^a-zA-Z0-9]|$)');
-        if (re.test(hay)) want[sym] = 1;
-      });
-      var hitTexts = [];
-      Array.prototype.forEach.call(svg.querySelectorAll('text'), function (t) {
-        var txt = (t.textContent || '').trim();
-        var hit = want[txt] || Object.keys(want).some(function (w) { return w.length > 1 && txt.indexOf(w) !== -1; });
-        if (hit) {
-          t.classList.add('mf-part-on');
-          hitTexts.push({ x: parseFloat(t.getAttribute('x')) || 0, y: parseFloat(t.getAttribute('y')) || 0 });
-        }
-      });
-      Array.prototype.forEach.call(svg.querySelectorAll('path.lk, path.hk'), function (p) {
-        var d = p.getAttribute('d') || '';
-        if (d.indexOf('A ') === -1) return;
-        var m = d.match(/M\s*([0-9.]+)\s+([0-9.]+)/);
-        if (!m) return;
-        var px = parseFloat(m[1]), py = parseFloat(m[2]);
-        var near = hitTexts.some(function (pt) { return Math.hypot(pt.x - px, pt.y - py) < 38; });
-        if (near) p.classList.add('mf-part-on');
-      });
+      var hay = (f.tex || '') + ' ' + (st.note || '');
+      SM.GGB.step(setupEl, f.si, focusList, hay);
     }
 
     function setNote(html) {
@@ -439,14 +403,18 @@
       if (willFlip) {
         setTimeout(function () {
           rebuild();
+          if (SM.GGB) SM.GGB.refresh(setupEl);
           if (api.i < 0) api.play();
         }, 60);
-      } else stopPlay();
+      } else {
+        stopPlay();
+        if (SM.GGB) SM.GGB.refresh(frontFace);
+      }
     };
     if (frontFace) {
       root.addEventListener('click', function (e) {
         if (root.classList.contains('is-flipped')) return;
-        if (e.target.closest('button, a, input, textarea, .term-link, summary')) return;
+        if (e.target.closest('button, a, input, textarea, .term-link, summary, .ggb-wrap')) return;
         api.flip(true);
       });
     }
@@ -491,5 +459,237 @@
     return '\\[\\begin{aligned}' + lines.join(' \\\\[5pt] ') + '\\end{aligned}\\]';
   }
 
+  /* ==========================================================================
+     SM.GGB: GeoGebra Apps API loader, palette mapper, and step animator
+     ========================================================================== */
+  var ggbQueue = [], ggbLoading = false, ggbState = 0, ggbInstances = [];
+  var GGB_RESERVED = { x: 'ggb_x', y: 'ggb_y', z: 'ggb_z', i: 'ggb_i', e: 'ggb_e', c: 'ggb_c' };
+
+  function ggbId(name) { return GGB_RESERVED[name] || name; }
+
+  function isDark() {
+    var t = document.documentElement.getAttribute('data-theme');
+    if (t === 'dark') return true;
+    if (t === 'light') return false;
+    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
+  }
+
+  /* Map CSS variables from 01-tokens.css to RGB triples for GeoGebra setColor */
+  function palette() {
+    return isDark() ? {
+      ink: [236, 234, 251],
+      ink2: [183, 185, 216],
+      muted: [125, 130, 166],
+      violet: [168, 152, 255],
+      lav2: [52, 58, 110],
+      amber: [247, 192, 79],
+      hl: [247, 192, 79]
+    } : {
+      ink: [27, 37, 89],
+      ink2: [74, 84, 128],
+      muted: [140, 146, 176],
+      violet: [106, 85, 216],
+      lav2: [222, 214, 246],
+      amber: [246, 183, 43],
+      hl: [201, 130, 0]
+    };
+  }
+
+  function ggbReady(cb) {
+    if (typeof window.GGBApplet === 'function') { ggbState = 1; cb(true); return; }
+    if (ggbState === -1) { cb(false); return; }
+    ggbQueue.push(cb);
+    if (ggbLoading) return;
+    ggbLoading = true;
+    var finish = function (ok) {
+      if (ggbState !== 0) return;
+      ggbState = ok ? 1 : -1;
+      var q = ggbQueue.slice(); ggbQueue = [];
+      q.forEach(function (fn) { fn(ok); });
+    };
+    var sc = document.querySelector('script[src*="deployggb.js"]');
+    if (!sc) {
+      sc = document.createElement('script');
+      sc.src = 'https://www.geogebra.org/apps/deployggb.js';
+      sc.async = true;
+      document.head.appendChild(sc);
+    }
+    sc.addEventListener('load', function () { finish(typeof window.GGBApplet === 'function'); });
+    sc.addEventListener('error', function () { finish(false); });
+    setTimeout(function () { finish(typeof window.GGBApplet === 'function'); }, 9000);
+  }
+
+  function applyCoordSystem(inst) {
+    var api = inst.api, v = (inst.spec && inst.spec.view) || { xmin: -8, xmax: 8, ymin: -5.5, ymax: 5.5, grid: true };
+    if (!api) return;
+    api.setCoordSystem(v.xmin, v.xmax, v.ymin, v.ymax);
+  }
+
+  function applyState(inst, animatePulse) {
+    var api = inst.api, spec = inst.spec;
+    if (!api || !spec) return;
+    var pal = palette();
+    var hiddenSet = {}, dashedSet = {}, freeSet = {}, focusSet = {}, showSet = null, hideSet = {};
+    (spec.hidden || []).forEach(function (n) { hiddenSet[n] = 1; });
+    (spec.dashed || []).forEach(function (n) { dashedSet[n] = 1; });
+    (spec.free || []).forEach(function (n) { freeSet[n] = 1; });
+    if (inst.stepIdx < 0) {
+      (spec.focus || []).forEach(function (n) { focusSet[n] = 1; });
+    } else {
+      var sm = spec.steps || {};
+      var scfg = (sm['0'] !== undefined ? sm[String(inst.stepIdx)] : (sm[String(inst.stepIdx + 1)] || sm[String(inst.stepIdx)])) || {};
+      if (scfg.show) {
+        showSet = {};
+        scfg.show.forEach(function (n) { showSet[n] = 1; });
+      }
+      (scfg.hide || []).forEach(function (n) { hideSet[n] = 1; });
+      (scfg.focus || []).forEach(function (n) { focusSet[n] = 1; });
+      (inst.focusList || []).forEach(function (n) { focusSet[n] = 1; });
+      var hay = inst.textHay || '';
+      if (hay) {
+        inst.names.forEach(function (n) {
+          if (hiddenSet[n]) return;
+          var escN = n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
+          var re = new RegExp('(^|[^A-Za-z0-9\\\\])' + escN + '([^A-Za-z0-9]|$)');
+          if (re.test(hay)) focusSet[n] = 1;
+        });
+      }
+    }
+    var labels = spec.labels || {};
+    api.setRepaintingActive(false);
+    inst.names.forEach(function (name) {
+      var id = ggbId(name);
+      if (!api.exists(id)) return;
+      var otype = api.getObjectType(id);
+      var vis = !hiddenSet[name];
+      if (showSet && showSet[name]) vis = true;
+      if (hideSet[name]) vis = false;
+      if (focusSet[name]) vis = true;
+      api.setVisible(id, vis);
+      if (!vis) return;
+      var isFoc = !!focusSet[name], isDash = !!dashedSet[name];
+      var col = isFoc ? (otype === 'text' ? pal.hl : pal.amber) : (isDash ? pal.ink2 : (otype === 'text' ? pal.ink : pal.violet));
+      api.setColor(id, col[0], col[1], col[2]);
+      if (otype === 'point') {
+        api.setPointSize(id, isFoc ? 6 : (freeSet[name] ? 5 : 4));
+      } else if (otype === 'angle' || otype === 'polygon') {
+        api.setFilling(id, isFoc ? 0.28 : 0.14);
+        api.setLineThickness(id, isFoc ? (animatePulse ? 9 : 7) : 4);
+      } else if (otype !== 'text') {
+        api.setLineThickness(id, isFoc ? (animatePulse ? 11 : 8) : (isDash ? 3 : 5));
+      }
+      if (labels[name] !== undefined) {
+        api.setLabelVisible(id, !!labels[name]);
+      } else if (otype === 'point' || otype === 'angle') {
+        api.setLabelVisible(id, true);
+      } else {
+        api.setLabelVisible(id, isFoc && !!labels[name]);
+      }
+    });
+    api.setRepaintingActive(true);
+    if (animatePulse) {
+      clearTimeout(inst.pulseT);
+      inst.pulseT = setTimeout(function () {
+        if (!inst.api) return;
+        inst.api.setRepaintingActive(false);
+        inst.names.forEach(function (name) {
+          if (!focusSet[name]) return;
+          var id = ggbId(name);
+          if (!inst.api.exists(id)) return;
+          var otype = inst.api.getObjectType(id);
+          if (otype === 'angle' || otype === 'polygon') inst.api.setLineThickness(id, 7);
+          else if (otype !== 'point' && otype !== 'text') inst.api.setLineThickness(id, 8);
+        });
+        inst.api.setRepaintingActive(true);
+      }, 180);
+    }
+  }
+
+  function mountInstance(inst) {
+    if (inst.mounted || inst.mounting) return;
+    var w = inst.box.clientWidth, h = inst.box.clientHeight;
+    if (w < 24 || h < 24) return;
+    inst.mounting = true;
+    ggbReady(function (ok) {
+      var statusEl = inst.box.querySelector('[data-ggb-status]');
+      var fbEl = inst.box.querySelector('[data-ggb-fallback]');
+      if (!ok) {
+        inst.mounting = false;
+        if (statusEl) statusEl.hidden = true;
+        if (fbEl) fbEl.hidden = false;
+        return;
+      }
+      var cw = Math.max(inst.box.clientWidth || w, 200);
+      var ch = Math.max(inst.box.clientHeight || h, 150);
+      inst.w = cw; inst.h = ch;
+      var params = {
+        appName: 'classic',
+        perspective: 'G',
+        width: cw,
+        height: ch,
+        showToolBar: false,
+        showMenuBar: false,
+        showAlgebraInput: false,
+        showResetIcon: false,
+        enableRightClick: false,
+        enableLabelDrags: false,
+        enableShiftDragZoom: true,
+        showZoomButtons: false,
+        showLogging: false,
+        appletOnLoad: function (api) {
+          inst.api = api; inst.mounted = true; inst.mounting = false;
+          if (statusEl) statusEl.hidden = true;
+          var spec = inst.spec, v = spec.view || { xmin: -8, xmax: 8, ymin: -5.5, ymax: 5.5, grid: true };
+          api.setRepaintingActive(false);
+          api.setPerspective('G');
+          api.setAxesVisible(!!v.axes, !!v.axes);
+          api.setGridVisible(v.grid !== false);
+          api.enableShiftDragZoom(true);
+          applyCoordSystem(inst);
+          inst.names = [];
+          var freeSet = {}, dashedSet = {}, labels = spec.labels || {};
+          (spec.free || []).forEach(function (n) { freeSet[n] = 1; });
+          (spec.dashed || []).forEach(function (n) { dashedSet[n] = 1; });
+          (spec.commands || []).forEach(function (cmd) {
+            var m = String(cmd).match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$/);
+            if (!m) return;
+            var name = m[1], rhs = m[2], id = ggbId(name);
+            api.evalCommand(id + ' = ' + rhs);
+            inst.names.push(name);
+          });
+          inst.names.forEach(function (name) {
+            var id = ggbId(name);
+            if (!api.exists(id)) return;
+            var isFree = !!freeSet[name];
+            api.setFixed(id, !isFree, isFree);
+            api.setLineStyle(id, dashedSet[name] ? 1 : 0);
+            var otype = api.getObjectType(id);
+            if (labels[name] !== undefined && labels[name] !== false && labels[name] !== '') {
+              api.setCaption(id, String(labels[name]));
+              api.setLabelStyle(id, 3);
+            } else if (GGB_RESERVED[name]) {
+              api.setCaption(id, name);
+              api.setLabelStyle(id, 3);
+            } else if (otype === 'point' || otype === 'angle') {
+              api.setLabelStyle(id, 0);
+            }
+          });
+          applyState(inst, false);
+        }
+      };
+      var applet = new window.GGBApplet(params, true);
+      applet.inject(inst.host.id);
+    });
+  }
+
+  function resizeInstance(inst) {
+    if (!inst.box) return;
+    var w = inst.box.clientWidth, h = inst.box.clientHeight;
+    if (w < 24 || h < 24) return;
+    if (!inst.mounted) { mountInstance(inst); return; }
+    if (inst.api && (Math.abs(w - inst.w) > 2 || Math.abs(h - inst.h) > 2)) {
+      inst.w = w; inst.h = h;
+      inst.api.setSize(w, h);
+      applyCoordSystem(inst);
+    }
+  }
+
+  var ro = typeof ResizeObserver === 'function' ? new ResizeObserver(function (entries) {
+    entries.forEach(function (en) {
+      var inst = en.target._ggbInst;
+      if (inst) resizeInstance(inst);
+    });
+  }) : null;
+
+  function refreshTheme() {
+    ggbInstances.forEach(function (inst) { if (inst.mounted) applyState(inst, false); });
+  }
+  if (typeof MutationObserver === 'function') {
+    new MutationObserver(refreshTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
+  }
+  if (window.matchMedia) {
+    var mq = window.matchMedia('(prefers-color-scheme: dark)');
+    if (mq.addEventListener) mq.addEventListener('change', refreshTheme);
+  }
+
+  SM.GGB = {
+    palette: palette,
+    ready: ggbReady,
+    register: function (box, spec, card) {
+      var host = box.querySelector('.ggb-host');
+      if (!host) return;
+      var inst = { box: box, host: host, spec: spec, card: card, api: null, names: [], stepIdx: -1, focusList: [], textHay: '', w: 0, h: 0, mounted: false, mounting: false };
+      box._ggbInst = inst;
+      ggbInstances.push(inst);
+      if (ro) ro.observe(box);
+      setTimeout(function () { resizeInstance(inst); }, 50);
+    },
+    step: function (containerEl, stepIdx, focusList, textHay) {
+      if (!containerEl) return;
+      var box = containerEl.querySelector('[data-ggb-box]') || (containerEl.hasAttribute('data-ggb-box') ? containerEl : null);
+      if (!box || !box._ggbInst) return;
+      var inst = box._ggbInst;
+      inst.stepIdx = stepIdx;
+      inst.focusList = focusList || [];
+      inst.textHay = textHay || '';
+      if (inst.mounted) applyState(inst, stepIdx >= 0);
+      else resizeInstance(inst);
+    },
+    refresh: function (rootEl) {
+      var scope = rootEl || document;
+      Array.prototype.forEach.call(scope.querySelectorAll('[data-ggb-box]'), function (box) {
+        if (box._ggbInst) resizeInstance(box._ggbInst);
+      });
+    }
+  };
+
   SM.MathFlow = { mount: mount, page: page, measure: measure };
 })();
--- a/study-match/src/components/03-render.js
+++ b/study-match/src/components/03-render.js
@@ -55,22 +55,29 @@
   function chips(list) { return (list || []).map(function (e) { return '<span class="chip">' + SM.mathLabel(e) + '</span>'; }).join(''); }
+  function ggbHTML(id, caption) {
+    return '<div class="ggb-wrap" data-ggb-box="' + esc(id) + '">' +
+      '<div class="ggb-host" id="ggb-' + esc(id) + '"></div>' +
+      '<p class="ggb-status" data-ggb-status>Loading figure\u2026</p>' +
+      '<p class="ggb-fallback" data-ggb-fallback hidden>' + esc(caption || 'Interactive geometry figure') + '</p>' +
+      '</div>';
+  }
 
   function cardHTML(c) {
     var a = ' data-card="' + c.id + '"', T = SM.tex;
     switch (c.type) {
       case 'intuition':
         return '<article class="card intuition-card"' + a + '><span class="card-index">In plain words</span>' +
           '<div class="intuition-content scroll-y"><h2 class="card-title">' + esc(c.title) + '</h2>' +
           '<p class="intuition-meaning">' + esc(c.meaning) + '</p>' +
           '<h3>Picture it</h3>' +
-          (c.art ? '<div class="art intuition-art">' + c.art + '</div>' : '') +
+          (c.ggb ? '<div class="art intuition-art">' + ggbHTML(c.id, c.picture || c.title) + '</div>' : '') +
           '<p class="card-body">' + esc(c.picture) + '</p>' +
           '<div class="intuition-example"><h3>For example</h3><p class="card-body">' + esc(c.example) + '</p></div>' +
           '<h3>Connect it to the definition</h3><p class="card-body">' + esc(c.bridge) + '</p></div></article>';
       case 'info':
         return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Concept') + '</span>' +
-          (c.art ? '<div class="art">' + c.art + '</div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
+          (c.ggb ? '<div class="art">' + ggbHTML(c.id, c.body || c.title) + '</div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
           '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
           (c.examples && c.examples.length ? '<div class="examples" style="margin-top:9px">' + chips(c.examples) + '</div>' : '') + '</div></article>';
       case 'math':
@@ -104,6 +111,6 @@
       case 'question':
         return '<article class="card qcard' + (c.textAnswer ? ' has-text-answer' : '') + '"' + a + '><span class="card-index">' + esc(c.label || 'Question') + '</span>' +
-          (c.art ? '<div class="art">' + c.art + '</div>' : '') +
+          (c.ggb ? '<div class="art">' + ggbHTML(c.id, c.q || c.title) + '</div>' : '') +
           '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="q-text">' + c.q + '</p></div>' +
           (c.textAnswer ? '<div class="written-answer"><div class="answer-label"><label for="answer-' + c.id + '">Your answer</label><span data-draft-status id="draft-' + c.id + '" role="status">Saves automatically on this device.</span></div>' +
             '<textarea class="answer-input" id="answer-' + c.id + '" data-written-answer rows="6" placeholder="Write your answer in your own words…" aria-describedby="draft-' + c.id + '"></textarea></div>' : '') +
@@ -133,21 +140,21 @@
       case 'derive':
-        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], setupSVG = c.d.setup || c.d.art || '';
+        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], hasGGB = !!(c.d.ggb || c.ggb);
         return '<article class="card mf-card mf-flip-card"' + a + '><div class="mf-card-inner">' +
           '<div class="mf-face mf-front">' +
           '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span><button type="button" class="chip mf-flip-btn" data-mf="flip-open">Derive &#9654;</button></div>' +
           '<h2 class="card-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
-          (setupSVG ? '<div class="art mf-front-art">' + setupSVG + '</div>' : '') +
+          (hasGGB ? '<div class="art mf-front-art">' + ggbHTML(c.id + '-front', c.d.legend || c.title) + '</div>' : '') +
           '<div class="scroll-y mf-front-route">' +
           '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || dst[0].tex) + '\\)</div></div>' +
           '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || dst[dst.length - 1].tex) + '\\)</div></div>' +
           (dph.length ? '<ol class="route-list">' + dph.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' : '') +
           (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') +
           '</div></div>' +
           '<div class="mf-face mf-back" inert>' +
           '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span>' +
           '<div class="mf-top-actions"><span class="mf-count"></span><button type="button" class="chip" data-mf="summary">All steps</button><button type="button" class="chip" data-mf="flip-back">Concept</button></div></div>' +
           '<h2 class="card-title mf-back-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
           '<div class="mf-phases"></div>' +
-          '<div class="mf-work' + (setupSVG ? ' has-setup' : '') + '">' +
-          (setupSVG ? '<div class="mf-setup art">' + setupSVG + '</div>' : '') +
+          '<div class="mf-work' + (hasGGB ? ' has-setup' : '') + '">' +
+          (hasGGB ? '<div class="mf-setup art">' + ggbHTML(c.id + '-back', c.d.legend || c.title) + '</div>' : '') +
           '<div class="mf-right">' +
@@ -180,6 +187,13 @@
     SM.groups = Array.prototype.slice.call(shelf.querySelectorAll('.group'));
     SM.sheetEls = Array.prototype.slice.call(shelf.querySelectorAll('.sheet'));
     SM.SHEETS.forEach(function (sh) { sh.el = shelf.querySelector('[data-sheet="' + sh.id + '"]'); });
-    SM.CARDS.forEach(function (c) { c.el = shelf.querySelector('[data-card="' + c.id + '"]'); c.el._c = c; });
+    SM.CARDS.forEach(function (c) {
+      c.el = shelf.querySelector('[data-card="' + c.id + '"]');
+      c.el._c = c;
+      var ggbSpec = c.ggb || (c.d && c.d.ggb);
+      if (ggbSpec && SM.GGB) {
+        c.el.querySelectorAll('[data-ggb-box]').forEach(function (box) { SM.GGB.register(box, ggbSpec, c); });
+      }
+    });
     shelf.querySelectorAll('.card-index, .chip').forEach(function (tag) { tag.innerHTML = SM.mathLabel(tag.innerHTML); });
   };
--- a/study-match/src/components/04-shelf.js
+++ b/study-match/src/components/04-shelf.js
@@ -76,6 +76,7 @@
       if (!willOpen && !mayLeaveDefinition()) return;
       sheet.classList.toggle('is-open', willOpen);
       sheet.querySelector('.cover').setAttribute('aria-expanded', String(willOpen));
+      if (willOpen && SM.GGB) setTimeout(function () { SM.GGB.refresh(sheet); }, 80);
       if (willOpen) glideTo(sheet.querySelector('.card'));
       else glideTo(sheet.querySelector('.cover'), 310);
     }
@@ -152,6 +153,7 @@
     // mouse wheel / trackpad: one gesture = one card, however hard it is flicked
     var locked = false, idleT = null, acc = 0;
     shelf.addEventListener('wheel', function (e) {
       if (e.ctrlKey || !SM.$('mc').hidden) return;
+      if (e.target.closest('.ggb-wrap')) return;
       var vertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
       var sc = e.target.closest('.scroll-y, .mf-summary, .omr-content, .eval-content, .mf-ask, textarea, .has-text-answer');
--- a/study-match/src/styles/05-cards.css
+++ b/study-match/src/styles/05-cards.css
@@ -21,6 +21,13 @@
   flex: 1 1 auto; min-height: 0; display: flex; align-items: center; justify-content: center;
   background: var(--lav); border-radius: 16px; padding: 12px; color: var(--violet);
 }
+.art:has(.ggb-wrap) { padding: 4px; overflow: hidden; position: relative; }
 .intuition-art { min-height: 130px; margin: 6px 0; padding: 8px; }
+.intuition-art:has(.ggb-wrap) { height: 196px; min-height: 196px; }
+.ggb-wrap { position: relative; width: 100%; height: 100%; min-height: 160px; border-radius: 12px; overflow: hidden; background: var(--card); touch-action: none; display: flex; align-items: center; justify-content: center; }
+.ggb-host { width: 100%; height: 100%; touch-action: none; }
+.ggb-host .GeoGebraFrame, .ggb-host .applet_scaler { border: 0 !important; background: transparent !important; }
+.ggb-status, .ggb-fallback { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; text-align: center; padding: 12px; font-size: 12px; font-weight: 600; color: var(--ink-2); background: var(--lav); pointer-events: none; }
+.ggb-status[hidden], .ggb-fallback[hidden] { display: none; }
 .art > svg { width: 100%; max-height: 100%; height: auto; overflow: visible; }
 .art .f { fill: var(--violet); }
--- a/study-match/src/styles/07-mathflow.css
+++ b/study-match/src/styles/07-mathflow.css
@@ -23,5 +23,6 @@
   min-height: calc((var(--sheet-h, 620px) - 22px) * 0.45);
   padding: 4px; border-radius: 12px; background: var(--card);
 }
+.mf-setup > .ggb-wrap, .mf-front-art > .ggb-wrap { width: 100%; height: 100%; min-height: 0; }
 .mf-setup > svg { width: 100%; height: 100%; max-height: 100%; }
 .mf-setup svg text.mf-part-on { fill: var(--hl) !important; font-weight: 800; text-decoration: underline; }
--- a/study-match/src/sw.js
+++ b/study-match/src/sw.js
@@ -20,5 +20,5 @@
         return hit || fetch(e.request).then(function (r) {
           if (r && (r.ok || r.type === 'opaque')) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); }
           return r;
-        });
+        }).catch(function () { return new Response('', { status: 504, statusText: 'Offline' }); });
       }));
 });
--- a/study-match/src/template.html
+++ b/study-match/src/template.html
@@ -23,5 +23,6 @@
   };
 </script>
 <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
+<script defer src="https://www.geogebra.org/apps/deployggb.js"></script>
 </head>
 <body class="is-focused">
```

---

### 2. Full `study-match/data/data.json`

```json
{
  "meta": {
    "title": "Optics Module 1 — Geometrical Optics",
    "subject": "Physics (PHY5B08 · CU-FYUGP Semester V)",
    "home": "Focus",
    "opponent": "Time",
    "version": 1,
    "date": "",
    "sessions": [],
    "inlineChecks": false,
    "autoRevealQuestions": true,
    "definitionChecks": true
  },
  "match": {
    "periodEnds": [25, 45, 70, 90],
    "breaks": [5, 10, 5],
    "timing": {
      "mode": "custom",
      "halfMinutes": 30,
      "halfTimeMinutes": 10,
      "hydrationMinutes": 5
    }
  },
  "glossary": [
    {
      "id": "ray",
      "term": "ray",
      "aliases": ["rays", "light ray", "light rays"],
      "definition": "A ray is an infinitely thin line showing the path along which light energy travels when wavelength goes to zero.",
      "example": "A narrow laser beam in air travels along a straight ray."
    },
    {
      "id": "geometrical-optics",
      "term": "geometrical optics",
      "aliases": ["ray optics"],
      "definition": "Geometrical optics is the study of light propagation using rays by neglecting the tiny finite wavelength of light.",
      "example": "Tracing rays through eyeglasses or a camera lens uses geometrical optics."
    },
    {
      "id": "diffraction",
      "term": "diffraction",
      "definition": "Diffraction is the spreading of light at the edges of a very small opening because light has a finite wavelength.",
      "example": "A hole smaller than 0.1 mm blurs the sharp shadow on a screen."
    },
    {
      "id": "refractive-index",
      "term": "refractive index",
      "aliases": ["index of refraction"],
      "definition": "The refractive index n of a medium is the ratio of the speed of light in vacuum c to its speed v in that medium.",
      "example": "Glass with n = 1.5 slows light to c / 1.5."
    },
    {
      "id": "homogeneous-medium",
      "term": "homogeneous medium",
      "aliases": ["homogeneous"],
      "definition": "A homogeneous medium is a material whose refractive index has the same constant value at every point.",
      "example": "Calm air at uniform temperature is a homogeneous medium."
    },
    {
      "id": "optical-path-length",
      "term": "optical path length",
      "aliases": ["optical path"],
      "definition": "Optical path length is the geometric distance light travels multiplied by the refractive index of the medium.",
      "example": "Travelling 2 cm in glass of n = 1.5 gives an optical path length of 3 cm."
    },
    {
      "id": "stationary-path",
      "term": "stationary path",
      "aliases": ["extremum", "stationary"],
      "definition": "A stationary path is a path whose travel time does not change to first order when the path is slightly shifted.",
      "example": "At the bottom of a smooth valley, a tiny step sideways does not change height."
    },
    {
      "id": "fermats-principle",
      "term": "Fermat's principle",
      "aliases": ["principle of least time"],
      "definition": "Fermat's principle states that a light ray between two points follows a path whose optical path length is stationary.",
      "example": "Light bends at water so the total travel time stays stationary."
    },
    {
      "id": "refraction",
      "term": "refraction",
      "aliases": ["refracted", "Snell's law"],
      "definition": "Refraction is the bending of a light ray when it crosses the boundary between two media of different refractive indices.",
      "example": "A spoon in a glass of water looks bent at the water surface."
    },
    {
      "id": "paraxial-approximation",
      "term": "paraxial approximation",
      "aliases": ["paraxial", "paraxial rays"],
      "definition": "The paraxial approximation restricts rays to small angles with the optical axis so sin θ and tan θ equal θ in radians.",
      "example": "For an angle of 0.05 rad, sin 0.05 is very close to 0.05."
    },
    {
      "id": "center-of-curvature",
      "term": "center of curvature",
      "aliases": ["centers of curvature", "radius of curvature"],
      "definition": "The center of curvature C is the center of the sphere of which a curved mirror or lens surface forms a part.",
      "example": "A normal line drawn at any point on a spherical surface passes through C."
    },
    {
      "id": "meridional-ray",
      "term": "meridional ray",
      "aliases": ["meridional rays", "skew rays"],
      "definition": "A meridional ray is a ray that stays inside a single flat plane containing the optical axis.",
      "example": "Any ray starting from a point on the optical axis is a meridional ray."
    },
    {
      "id": "thin-lens",
      "term": "thin lens",
      "aliases": ["thin spherical lens", "spherical lens"],
      "definition": "A thin lens is a lens whose thickness is very small compared to the object distance, image distance, and surface radii.",
      "example": "A thin spectacle lens allows all distances to be measured from its center P."
    },
    {
      "id": "principal-focus",
      "term": "principal focus",
      "aliases": ["first principal focus", "second principal focus", "principal foci", "focal length"],
      "definition": "A principal focus is an axial point paired with rays parallel to the axis either after or before passing through the lens.",
      "example": "Sunlight parallel to the axis meets at the second principal focus F₂."
    },
    {
      "id": "lateral-magnification",
      "term": "lateral magnification",
      "aliases": ["magnification"],
      "definition": "Lateral magnification m is the ratio of the transverse image height y' to the transverse object height y.",
      "example": "If a 1 cm object forms an inverted 2 cm image, the lateral magnification is -2."
    }
  ],
  "sections": [
    {
      "short": "Fermat",
      "title": "Fermat's Principle & Spherical Surfaces",
      "sheets": [
        {
          "id": "fermat-laws-reflection-refraction",
          "title": "Fermat's principle & laws",
          "icon": "wave",
          "source": "Unit 1 · Ghatak §§3.1–3.2 (PDF pp. 56–61)",
          "cards": [
            {
              "type": "intuition",
              "term": "geometrical-optics",
              "title": "When light behaves like thin straight pencils",
              "meaning": "Geometrical optics is the model of light as thin directional lines called rays when openings are much larger than the wavelength.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "P = (-6, 0)",
                  "A = (-1, 1.8)",
                  "B = (x(A), -y(A))",
                  "Wtop = (x(A), 4.6)",
                  "Wbot = (x(A), -4.6)",
                  "AB = Segment(Wtop, A)",
                  "AB2 = Segment(B, Wbot)",
                  "S = (5.5, 4.6)",
                  "Sprime = (5.5, -4.6)",
                  "SS = Segment(S, Sprime)",
                  "TopHit = Intersect(Line(P, A), SS)",
                  "BotHit = Intersect(Line(P, B), SS)",
                  "MidHit = (5.5, y(P))",
                  "cone = Polygon(P, TopHit, BotHit)",
                  "edgeTop = Segment(P, TopHit)",
                  "edgeBot = Segment(P, BotHit)",
                  "ray = Segment(P, MidHit)",
                  "angle = Angle(BotHit, P, TopHit)"
                ],
                "free": ["P", "A"],
                "focus": ["ray", "P"],
                "hidden": ["Wtop", "Wbot", "TopHit", "BotHit", "MidHit"],
                "labels": {
                  "P": "P",
                  "A": "A",
                  "B": "B",
                  "S": "S",
                  "Sprime": "S'",
                  "ray": "Ray (λ→0)",
                  "angle": false
                }
              },
              "picture": "Drag P or aperture edge A to see the sharp cone of rays from P through opening AB onto screen SS' (Fig. 3.1).",
              "example": "Visible light has a tiny wavelength near 0.0005 cm, so ordinary lenses and mirrors are huge compared to it.",
              "bridge": "In the mathematical limit where wavelength λ goes to zero, diffraction disappears and light energy follows thin paths called rays."
            },
            {
              "type": "info",
              "label": "01 · §3.1 Definition",
              "title": "What is geometrical optics?",
              "defines": ["geometrical-optics", "ray", "diffraction"],
              "body": "Geometrical optics treats light propagation using thin rays by neglecting the finite wavelength of light when apertures are large.",
              "tex": "\\lambda \\to 0",
              "examples": [
                "Hole ~ 1 cm: sharp",
                "Hole < 0.1 mm: blurs",
                "λ ~ 10⁻⁵ cm"
              ]
            },
            {
              "type": "intuition",
              "term": "optical-path-length",
              "title": "Why denser media count as longer paths",
              "meaning": "Optical path length is the vacuum distance that light would travel in the same time it takes to cross a medium.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "A = (-5.5, 2.0)",
                  "B = (-1.5, 2.0)",
                  "G1 = (x(A), 3.4)",
                  "G2 = (x(B), 3.4)",
                  "G3 = (x(B), 0.6)",
                  "G4 = (x(A), 0.6)",
                  "glass = Polygon(G1, G2, G3, G4)",
                  "d = Segment(A, B)",
                  "Avac = (x(A), -2.2)",
                  "Bvac = (x(A) + 1.5 * (x(B) - x(A)), -2.2)",
                  "Lop = Segment(Avac, Bvac)",
                  "guide1 = Segment(G4, Avac)",
                  "guide2 = Segment(G3, Bvac)"
                ],
                "free": ["B"],
                "focus": ["Lop", "Avac", "Bvac"],
                "dashed": ["guide1", "guide2"],
                "hidden": ["G1", "G2", "G3", "G4"],
                "labels": {
                  "A": "A",
                  "B": "B",
                  "d": "d (glass n=1.5)",
                  "Lop": "L_op = n d",
                  "Avac": "A'",
                  "Bvac": "B'"
                }
              },
              "picture": "Drag B to change thickness d in glass (top) and watch the vacuum optical path L_op = 1.5 d (bottom) scale with it.",
              "example": "In glass with refractive index n = 1.5, a physical thickness of 2 cm has an optical path length of 1.5 × 2 cm = 3 cm.",
              "bridge": "Because speed in a medium is c / n, the time for step ds is (n ds) / c, so integrating n ds gives the optical path length."
            },
            {
              "type": "info",
              "label": "02 · §3.1 Definition",
              "title": "What is optical path length?",
              "defines": ["optical-path-length", "refractive-index"],
              "body": "Optical path length is the integral of refractive index n along the geometric path, equal to c times the travel time.",
              "tex": "\\tau = \\frac{1}{c}\\int_{A}^{B} n\\,ds",
              "examples": [
                "dt = n ds / c",
                "L_op = ∫ n ds"
              ]
            },
            {
              "type": "intuition",
              "term": "fermats-principle",
              "title": "How light chooses its path",
              "meaning": "Fermat's principle says light travels along a path whose travel time is stationary compared with slightly different nearby paths.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "A = (-6, -2.5)",
                  "B = (6, 2.5)",
                  "C = Midpoint(A, B)",
                  "Cprime = (-1.0, 2.6)",
                  "D = (1.2, -2.6)",
                  "ACB = Segment(A, B)",
                  "ACprimeB = CircumcircularArc(A, Cprime, B)",
                  "ADB = CircumcircularArc(A, D, B)"
                ],
                "free": ["Cprime"],
                "focus": ["ACB", "A", "C", "B"],
                "dashed": ["ACprimeB", "ADB"],
                "labels": {
                  "A": "A",
                  "B": "B",
                  "C": "C",
                  "Cprime": "C'",
                  "D": "D",
                  "ACB": "Actual ray (δ∫n ds = 0)",
                  "ACprimeB": "Trial path AC'B"
                }
              },
              "picture": "Drag trial point C' to vary the dashed path AC'B around the solid stationary ray ACB (Figs. 3.2–3.3).",
              "example": "In uniform air, the straight line between A and B has the shortest optical path. Inside an elliptical mirror, every path from focus S₁ to focus S₂ has the exact same length.",
              "bridge": "Therefore the modern statement replaces 'least time' with 'stationary optical path length': δ ∫ n ds = 0, allowing a minimum, maximum, or constant value."
            },
            {
              "type": "info",
              "label": "03 · §3.1 Definition",
              "title": "What is Fermat's principle?",
              "defines": ["fermats-principle", "stationary-path", "homogeneous-medium"],
              "body": "Fermat's principle states that the actual ray path between two points makes the optical path length stationary with respect to small path variations.",
              "tex": "\\delta \\int_{A}^{B} n\\,ds = 0",
              "examples": [
                "Minimum time",
                "Maximum time",
                "Stationary time"
              ]
            },
            {
              "type": "info",
              "label": "04 · §3.2 Reflection",
              "title": "Laws of reflection from Fermat's principle",
              "body": "Reflecting A across mirror MN to A' makes AP + PB = A'P + PB. A straight line A'PB minimizes length, so angle i equals angle r in one plane.",
              "examples": [
                "AP = PA'",
                "∠APS = ∠SPB",
                "i = r"
              ],
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "M = (-7, -1)",
                  "N = (7, -1)",
                  "MN = Segment(M, N)",
                  "A = (-4.5, 3.4)",
                  "B = (4.5, 3.8)",
                  "R = (x(A), y(M))",
                  "Aprime = (x(A), 2 * y(M) - y(A))",
                  "ARAprime = Segment(A, Aprime)",
                  "P = Intersect(Segment(Aprime, B), MN)",
                  "S = (x(P), 4.2)",
                  "PS = Segment(P, S)",
                  "AprimeP = Segment(Aprime, P)",
                  "AP = Segment(A, P)",
                  "PB = Segment(P, B)",
                  "Q = (2.2, y(M))",
                  "AQ = Segment(A, Q)",
                  "QB = Segment(Q, B)",
                  "AprimeQ = Segment(Aprime, Q)",
                  "i = Angle(S, P, A)",
                  "r = Angle(B, P, S)"
                ],
                "free": ["A", "Q"],
                "focus": ["AP", "PB", "P"],
                "dashed": ["ARAprime", "PS", "AprimeP", "AQ", "QB", "AprimeQ"],
                "labels": {
                  "A": "A",
                  "Aprime": "A'",
                  "R": "R",
                  "P": "P",
                  "S": "S",
                  "B": "B",
                  "Q": "Q",
                  "M": "M",
                  "N": "N",
                  "i": "i",
                  "r": "r"
                }
              }
            },
            {
              "type": "derivation",
              "label": "05 · §3.2 Derivation",
              "title": "Laws of refraction from Fermat's principle",
              "legend": "Interface \\(PQ\\) separates media \\(n_1, n_2\\) with perpendiculars \\(AM = h_1\\), \\(BN = h_2\\), \\(MR = x\\), and \\(RN = L - x\\) (Fig. 3.5).",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "P = (-7.5, 0)",
                  "Q = (7.5, 0)",
                  "PQ = Segment(P, Q)",
                  "A = (-5.0, 4.0)",
                  "B = (5.0, -4.0)",
                  "M = (x(A), 0)",
                  "N = (x(B), 0)",
                  "R = (-0.5, 0)",
                  "AM = Segment(A, M)",
                  "BN = Segment(B, N)",
                  "MR = Segment(M, R)",
                  "RN = Segment(R, N)",
                  "Ntop = (x(R), 4.5)",
                  "Nbot = (x(R), -4.5)",
                  "normal = Segment(Ntop, Nbot)",
                  "AR = Segment(A, R)",
                  "RB = Segment(R, B)",
                  "theta1 = Angle(Ntop, R, A)",
                  "theta2 = Angle(Nbot, R, B)"
                ],
                "free": ["R", "A", "B"],
                "focus": ["AR", "RB", "R"],
                "dashed": ["AM", "BN", "normal"],
                "hidden": ["Ntop", "Nbot"],
                "labels": {
                  "P": "P",
                  "Q": "Q",
                  "A": "A",
                  "B": "B",
                  "M": "M",
                  "N": "N",
                  "R": "R",
                  "AM": "h₁",
                  "BN": "h₂",
                  "MR": "x",
                  "RN": "L - x",
                  "AR": "n₁",
                  "RB": "n₂",
                  "theta1": "θ₁",
                  "theta2": "θ₂"
                },
                "steps": {
                  "1": { "show": ["PQ", "A", "B", "R", "AR", "RB"], "focus": ["AR", "RB", "R"] },
                  "2": { "show": ["PQ", "A", "M", "R", "AM", "MR", "AR", "RB"], "focus": ["AR", "AM", "MR"] },
                  "3": { "show": ["PQ", "R", "N", "B", "RN", "BN", "AR", "RB"], "focus": ["RB", "BN", "RN"] },
                  "4": { "show": ["PQ", "M", "R", "N", "MR", "RN", "AR", "RB"], "focus": ["R", "MR", "RN"] },
                  "5": { "show": ["PQ", "A", "R", "B", "AR", "RB", "normal"], "focus": ["R", "AR", "RB"] },
                  "6": { "show": ["A", "M", "R", "AM", "MR", "AR", "normal", "theta1"], "focus": ["theta1", "AR", "MR"] },
                  "7": { "show": ["R", "N", "B", "RN", "BN", "RB", "normal", "theta2"], "focus": ["theta2", "RB", "RN"] },
                  "8": { "show": ["AR", "RB", "normal", "theta1", "theta2"], "focus": ["theta1", "theta2", "normal"] },
                  "9": { "show": ["AR", "RB", "normal", "theta1", "theta2"], "focus": ["AR", "RB", "theta1", "theta2"] }
                }
              },
              "phases": [
                {
                  "name": "Optical path",
                  "why": "sum optical paths n₁ AR and n₂ RB"
                },
                {
                  "name": "First medium",
                  "why": "write AR from right triangle AMR"
                },
                {
                  "name": "Second medium",
                  "why": "write RB from right triangle RBN"
                },
                {
                  "name": "Stationary path",
                  "why": "differentiate L_op with respect to x and set to zero"
                },
                {
                  "name": "Incidence angle",
                  "why": "substitute sin θ₁ in medium n₁"
                },
                {
                  "name": "Refraction angle",
                  "why": "substitute sin θ₂ in medium n₂ to reach Snell's law"
                }
              ],
              "steps": [
                {
                  "phase": "Optical path",
                  "focus": ["AR", "RB", "R"],
                  "tex": "L_{op} = n_1 AR + n_2 RB",
                  "note": "Write total optical path length from \\(A\\) to \\(B\\) via point \\(R\\) on \\(PQ\\)."
                },
                {
                  "phase": "First medium",
                  "focus": ["AR", "AM", "MR"],
                  "move": {
                    "type": "substitute",
                    "by": "AR = \\sqrt{x^2 + h_1^2}"
                  },
                  "tex": "L_{op} = n_1\\sqrt{x^2 + h_1^2} + n_2 RB",
                  "note": "In right triangle \\(AMR\\), replace \\(AR\\) with \\(\\sqrt{x^2 + h_1^2}\\)."
                },
                {
                  "phase": "Second medium",
                  "focus": ["RB", "BN", "RN"],
                  "move": {
                    "type": "substitute",
                    "by": "RB = \\sqrt{(L - x)^2 + h_2^2}"
                  },
                  "tex": "L_{op} = n_1\\sqrt{x^2 + h_1^2} + n_2\\sqrt{(L - x)^2 + h_2^2}",
                  "note": "In right triangle \\(RBN\\), replace \\(RB\\) with \\(\\sqrt{(L - x)^2 + h_2^2}\\) (Eq. 3.4)."
                },
                {
                  "phase": "Stationary path",
                  "focus": ["R", "MR", "RN"],
                  "move": {
                    "type": "differentiate",
                    "wrt": "x"
                  },
                  "tex": "\\frac{dL_{op}}{dx} = \\frac{n_1 x}{\\sqrt{x^2 + h_1^2}} - \\frac{n_2(L - x)}{\\sqrt{(L - x)^2 + h_2^2}}",
                  "note": "Differentiate \\(L_{op}\\) with respect to \\(x\\); the chain rule on \\((L - x)^2\\) gives a minus sign.",
                  "ask": {
                    "q": "How do we find the stationary ray path as \\(x\\) varies?",
                    "options": [
                      "Differentiate \\(L_{op}\\) with respect to \\(x\\)",
                      "Integrate \\(L_{op}\\) over \\(h_1\\)",
                      "Multiply both sides by \\(L\\)",
                      "Set \\(n_1 = n_2\\)"
                    ],
                    "answer": 0,
                    "why": "Fermat's principle requires differentiating the optical path with respect to \\(x\\)."
                  }
                },
                {
                  "focus": ["R", "AR", "RB"],
                  "move": {
                    "type": "evaluate",
                    "by": "\\frac{dL_{op}}{dx} = 0"
                  },
                  "tex": "0 = \\frac{n_1 x}{\\sqrt{x^2 + h_1^2}} - \\frac{n_2(L - x)}{\\sqrt{(L - x)^2 + h_2^2}}",
                  "note": "Set \\(dL_{op}/dx = 0\\) for an extremum optical path (Eq. 3.5).",
                  "ask": {
                    "q": "What value must \\(dL_{op}/dx\\) take on the actual ray path?",
                    "options": [
                      "\\(dL_{op}/dx = 0\\)",
                      "\\(dL_{op}/dx = 1\\)",
                      "\\(dL_{op}/dx = c\\)",
                      "\\(dL_{op}/dx = n_1\\)"
                    ],
                    "answer": 0,
                    "why": "At a stationary point of the optical path, the first derivative vanishes."
                  }
                },
                {
                  "phase": "Incidence angle",
                  "focus": ["theta1", "AR", "MR"],
                  "move": {
                    "type": "substitute",
                    "by": "\\sin\\theta_1 = \\frac{x}{\\sqrt{x^2 + h_1^2}}"
                  },
                  "tex": "0 = n_1\\sin\\theta_1 - \\frac{n_2(L - x)}{\\sqrt{(L - x)^2 + h_2^2}}",
                  "note": "In right triangle \\(AMR\\), substitute \\(\\sin\\theta_1 = x/\\sqrt{x^2 + h_1^2}\\).",
                  "ask": {
                    "q": "What does \\(x / \\sqrt{x^2 + h_1^2}\\) equal in triangle \\(AMR\\)?",
                    "options": [
                      "\\(\\sin\\theta_1\\)",
                      "\\(\\cos\\theta_1\\)",
                      "\\(\\tan\\theta_1\\)",
                      "\\(1 / \\sin\\theta_1\\)"
                    ],
                    "answer": 0,
                    "why": "Side \\(MR = x\\) is opposite \\(\\theta_1\\) and \\(AR = \\sqrt{x^2 + h_1^2}\\) is the hypotenuse."
                  }
                },
                {
                  "phase": "Refraction angle",
                  "focus": ["theta2", "RB", "RN"],
                  "move": {
                    "type": "substitute",
                    "by": "\\sin\\theta_2 = \\frac{L - x}{\\sqrt{(L - x)^2 + h_2^2}}"
                  },
                  "tex": "0 = n_1\\sin\\theta_1 - n_2\\sin\\theta_2",
                  "note": "In right triangle \\(RBN\\), substitute \\(\\sin\\theta_2 = (L - x)/\\sqrt{(L - x)^2 + h_2^2}\\)."
                },
                {
                  "focus": ["theta1", "theta2", "normal"],
                  "move": {
                    "type": "add",
                    "by": "n_2\\sin\\theta_2"
                  },
                  "tex": "n_2\\sin\\theta_2 = n_1\\sin\\theta_1",
                  "note": "Add \\(n_2\\sin\\theta_2\\) to both sides.",
                  "ask": {
                    "q": "Which move places the two refraction terms on opposite sides?",
                    "options": [
                      "Add \\(n_2\\sin\\theta_2\\) to both sides",
                      "Divide by \\(\\cos\\theta_1\\)",
                      "Subtract \\(n_1\\) from both sides",
                      "Square both sides"
                    ],
                    "answer": 0,
                    "why": "Adding \\(n_2\\sin\\theta_2\\) isolates \\(n_2\\sin\\theta_2\\) on the left and \\(n_1\\sin\\theta_1\\) on the right."
                  }
                },
                {
                  "focus": ["AR", "RB", "theta1", "theta2"],
                  "move": {
                    "type": "swap"
                  },
                  "tex": "n_1\\sin\\theta_1 = n_2\\sin\\theta_2",
                  "note": "Swap sides to obtain Snell's law of refraction (Eq. 3.6)."
                }
              ]
            },
            {
              "type": "math",
              "label": "06 · §3.2 Examples",
              "title": "Paraboloidal and elliptical reflectors (Examples 3.1–3.2)",
              "tex": "S_1 P + S_2 P = \\text{constant} \\implies \\delta L_{\\text{op}} = 0",
              "body": "A paraboloid reflects parallel rays to its focus \\(S\\) (radio telescopes). An elliptical reflector sends every ray from focus \\(S_1\\) to focus \\(S_2\\) with stationary (constant) travel time (ruby laser)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "When does geometrical optics accurately describe light propagation?",
              "options": [
                "When wavelength is much smaller than apertures",
                "When apertures are smaller than wavelength",
                "Only inside a vacuum chamber",
                "Only when refractive index is zero"
              ],
              "answer": 0,
              "why": "Neglecting wavelength works when openings are much larger than the wavelength of light."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "According to the modern Fermat's principle, the optical path of a ray is:",
              "options": [
                "Stationary for small path variations",
                "Always the longest possible path",
                "Always zero in every medium",
                "Independent of refractive index"
              ],
              "answer": 0,
              "why": "The ray path makes the optical path length stationary: a minimum, maximum, or constant."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 45,
              "q": "In a homogeneous medium, light rays travel along ______ lines.",
              "answer": "straight",
              "why": "With constant refractive index, a straight line minimizes the optical path between two points."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "Find the optical path length for \\(4\\text{ cm}\\) in glass of \\(n = 1.5\\).",
              "answer": 6,
              "tolerance": 0.01,
              "unit": "cm",
              "why": "Optical path length equals \\(n \\times d = 1.5 \\times 4\\text{ cm} = 6\\text{ cm}\\)."
            }
          ]
        },
        {
          "id": "spherical-surface-refraction-reflection",
          "title": "Single spherical surface",
          "icon": "curve",
          "source": "Unit 2 · Ghatak §§4.2–4.3 (PDF pp. 80–82). Note: Section 4.1 is missing from the unit files and is not included.",
          "cards": [
            {
              "type": "intuition",
              "term": "paraxial-approximation",
              "title": "Why only rays close to the axis focus sharply",
              "meaning": "The paraxial approximation keeps only rays that make very small angles with the symmetry axis of a curved surface.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (-1.3, 0)",
                  "C = (3.2, 0)",
                  "Stop = (x(C) - 4.5 * cos(0.75), 4.5 * sin(0.75))",
                  "Sbot = (x(C) - 4.5 * cos(0.75), -4.5 * sin(0.75))",
                  "SPM = CircumcircularArc(Stop, P, Sbot)",
                  "O = (-6.5, 0)",
                  "S = (-0.9, 1.9)",
                  "D = (x(S), 0)",
                  "h = Segment(S, D)",
                  "I = (6.5, 0)",
                  "OS = Segment(O, S)",
                  "SI = Segment(S, I)",
                  "alpha1 = Angle(D, O, S)",
                  "alpha2 = Angle(S, I, D)"
                ],
                "free": ["S", "O"],
                "focus": ["OS", "SI", "S", "alpha1"],
                "dashed": ["h"],
                "hidden": ["AxL", "AxR", "Stop", "Sbot"],
                "labels": {
                  "O": "O",
                  "P": "P",
                  "D": "D",
                  "C": "C",
                  "I": "I",
                  "S": "S",
                  "h": "h",
                  "alpha1": "α₁",
                  "alpha2": "α₂"
                }
              },
              "picture": "Drag S or O to see small angle α₁ near O where height h divided by distance x gives the angle in radians (Fig. 4.1(a)).",
              "example": "At an angle of 0.1 rad (about 5.7°), sin(0.1) = 0.0998 and tan(0.1) = 0.1003, so sin φ₁ ≈ tan φ₁ ≈ φ₁.",
              "bridge": "Under this small-angle rule, all paraxial rays from object point O take equal time and meet at a single image point I."
            },
            {
              "type": "info",
              "label": "01 · §4.2 Definition",
              "title": "What is the paraxial approximation?",
              "defines": ["paraxial-approximation", "center-of-curvature"],
              "body": "The paraxial approximation assumes rays make very small angles with the optical axis so sine and tangent equal the angle in radians.",
              "tex": "\\sin\\phi_1 \\approx \\tan\\phi_1 \\approx \\phi_1",
              "examples": [
                "Small angles (rad)",
                "Single image point I",
                "Equal travel time"
              ]
            },
            {
              "type": "info",
              "label": "02 · §4.2.1 Sign convention",
              "title": "The Sign Convention at pole P",
              "body": "Rays are incident from the left. With pole P as origin, distances to the right are positive, to the left are negative, and upward heights are positive.",
              "examples": [
                "Left of P: negative",
                "Right of P: positive",
                "Upward: positive"
              ],
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (0, 0)",
                  "C = (4.5, 0)",
                  "Stop = (x(C) - 4.5 * cos(0.8), 4.5 * sin(0.8))",
                  "Sbot = (x(C) - 4.5 * cos(0.8), -4.5 * sin(0.8))",
                  "SPM = CircumcircularArc(Stop, P, Sbot)",
                  "O = (-5.5, 0)",
                  "I = (6.8, 0)",
                  "S = (0.4, 2.4)",
                  "D = (x(S), 0)",
                  "InStart = (-6.5, y(S))",
                  "incident = Vector(InStart, S)",
                  "left = Segment(O, P)",
                  "right = Segment(P, C)",
                  "up = Segment(D, S)"
                ],
                "free": ["S", "O"],
                "focus": ["incident", "P"],
                "dashed": ["up"],
                "hidden": ["AxL", "AxR", "Stop", "Sbot", "InStart", "D"],
                "labels": {
                  "P": "P (origin)",
                  "C": "C (R>0)",
                  "O": "O (u<0)",
                  "I": "I (v>0)",
                  "S": "S (+y)",
                  "incident": "Incident light",
                  "left": "u < 0",
                  "right": "R > 0",
                  "up": "+y"
                }
              }
            },
            {
              "type": "derivation",
              "label": "03 · §4.2.2 Derivation",
              "title": "The Gaussian formula for a single spherical surface",
              "legend": "Spherical surface \\(SPM\\) separating \\(n_1, n_2\\) with object \\(O\\) at \\(x = -u\\), image \\(I\\) at \\(y = v\\), center \\(C\\) at \\(r = R\\), foot \\(D\\) and height \\(h\\) (Fig. 4.1(a)).",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (-1.5, 0)",
                  "C = (2.5, 0)",
                  "Stop = (x(C) - 4.0 * cos(0.85), 4.0 * sin(0.85))",
                  "Sbot = (x(C) - 4.0 * cos(0.85), -4.0 * sin(0.85))",
                  "SPM = CircumcircularArc(Stop, P, Sbot)",
                  "O = (-6.5, 0)",
                  "I = (6.8, 0)",
                  "S = (-1.0, 2.0)",
                  "D = (x(S), 0)",
                  "h = Segment(S, D)",
                  "OS = Segment(O, S)",
                  "SI = Segment(S, I)",
                  "Next = (2 * x(S) - x(C), 2 * y(S) - y(C))",
                  "normal = Segment(Next, C)",
                  "alpha1 = Angle(D, O, S)",
                  "beta = Angle(S, C, D)",
                  "alpha2 = Angle(S, I, D)",
                  "phi1 = Angle(Next, S, O)",
                  "phi2 = Angle(C, S, I)",
                  "x = Segment(O, P)",
                  "r = Segment(P, C)",
                  "y = Segment(P, I)"
                ],
                "free": ["O", "S"],
                "focus": ["OS", "SI", "S"],
                "dashed": ["h", "normal"],
                "hidden": ["AxL", "AxR", "Stop", "Sbot", "Next"],
                "labels": {
                  "O": "O",
                  "P": "P",
                  "D": "D",
                  "C": "C",
                  "I": "I",
                  "S": "S",
                  "h": "h",
                  "OS": "n₁",
                  "SI": "n₂",
                  "alpha1": "α₁",
                  "beta": "β",
                  "alpha2": "α₂",
                  "phi1": "φ₁",
                  "phi2": "φ₂",
                  "x": "x = -u",
                  "r": "r = R",
                  "y": "y = v"
                },
                "steps": {
                  "1": { "show": ["SPM", "OS", "SI", "normal", "phi1", "phi2"], "focus": ["OS", "SI", "phi1", "phi2"] },
                  "2": { "show": ["SPM", "OS", "SI", "normal", "phi1", "phi2"], "focus": ["phi1", "phi2", "normal"] },
                  "3": { "show": ["O", "S", "C", "OS", "normal", "phi1", "alpha1", "beta"], "focus": ["OS", "normal", "phi1", "alpha1", "beta"] },
                  "4": { "show": ["O", "P", "D", "C", "S", "h", "x", "r", "alpha1", "beta"], "focus": ["h", "r", "x", "alpha1", "beta"] },
                  "5": { "show": ["S", "C", "I", "SI", "normal", "phi2", "beta", "alpha2"], "focus": ["SI", "normal", "phi2", "beta", "alpha2"] },
                  "6": { "show": ["P", "D", "C", "I", "S", "h", "r", "y", "beta", "alpha2"], "focus": ["h", "r", "y", "beta", "alpha2"] },
                  "7": { "show": ["O", "S", "I", "D", "h", "OS", "SI"], "focus": ["h", "OS", "SI"] },
                  "8": { "show": ["O", "P", "C", "I", "x", "y", "r"], "focus": ["x", "y", "r"] },
                  "9": { "show": ["O", "P", "C", "I", "x", "y", "r", "OS", "SI"], "focus": ["x", "y", "r", "O", "I", "C"] }
                }
              },
              "phases": [
                {
                  "name": "Snell's law",
                  "why": "start from Snell's law and apply the paraxial approximation"
                },
                {
                  "name": "Incident angle",
                  "why": "express φ₁ from exterior angle of triangle OSC"
                },
                {
                  "name": "Refracted angle",
                  "why": "express φ₂ from exterior angle of triangle ISC"
                },
                {
                  "name": "Cancel height",
                  "why": "divide by h and collect distance terms"
                },
                {
                  "name": "Sign convention",
                  "why": "apply u = -x, v = y, and R = r"
                }
              ],
              "steps": [
                {
                  "phase": "Snell's law",
                  "focus": ["OS", "SI", "phi1", "phi2"],
                  "tex": "n_1\\sin\\phi_1 = n_2\\sin\\phi_2",
                  "note": "Start from Snell's law at point \\(S\\) on spherical surface \\(SPM\\) (Eq. 4.1)."
                },
                {
                  "focus": ["phi1", "phi2", "normal"],
                  "move": {
                    "type": "substitute",
                    "by": "\\sin\\phi_1 \\approx \\phi_1,\\,\\sin\\phi_2 \\approx \\phi_2"
                  },
                  "tex": "n_1\\phi_1 = n_2\\phi_2",
                  "note": "Use the paraxial approximation \\(\\sin\\phi \\approx \\phi\\) for small angles in radians.",
                  "ask": {
                    "q": "Why can \\(\\sin\\phi_1\\) and \\(\\sin\\phi_2\\) be replaced by \\(\\phi_1\\) and \\(\\phi_2\\)?",
                    "options": [
                      "Paraxial rays make small angles",
                      "Refractive indices are equal",
                      "The surface is a plane mirror",
                      "The angles are ninety degrees"
                    ],
                    "answer": 0,
                    "why": "In the paraxial approximation, all angles in radians are small so \\(\\sin\\phi \\approx \\phi\\)."
                  }
                },
                {
                  "phase": "Incident angle",
                  "focus": ["OS", "normal", "phi1", "alpha1", "beta"],
                  "move": {
                    "type": "substitute",
                    "by": "\\phi_1 = \\beta + \\alpha_1"
                  },
                  "tex": "n_1(\\beta + \\alpha_1) = n_2\\phi_2",
                  "note": "In triangle \\(OSC\\), exterior angle \\(\\phi_1\\) equals \\(\\beta + \\alpha_1\\).",
                  "ask": {
                    "q": "In triangle \\(OSC\\), what does exterior angle \\(\\phi_1\\) equal?",
                    "options": [
                      "\\(\\beta + \\alpha_1\\)",
                      "\\(\\beta - \\alpha_1\\)",
                      "\\(\\alpha_1 - \\beta\\)",
                      "\\(\\alpha_1 + \\alpha_2\\)"
                    ],
                    "answer": 0,
                    "why": "Angle \\(\\phi_1\\) is exterior to interior angles \\(\\alpha_1\\) at \\(O\\) and \\(\\beta\\) at \\(C\\)."
                  }
                },
                {
                  "focus": ["h", "r", "x", "alpha1", "beta"],
                  "move": {
                    "type": "substitute",
                    "by": "\\beta = \\frac{h}{r},\\,\\alpha_1 = \\frac{h}{x}"
                  },
                  "tex": "n_1\\left(\\frac{h}{r} + \\frac{h}{x}\\right) = n_2\\phi_2",
                  "note": "Substitute \\(\\beta \\approx \\tan\\beta = h/r\\) and \\(\\alpha_1 \\approx \\tan\\alpha_1 = h/x\\) (Eq. 4.2)."
                },
                {
                  "phase": "Refracted angle",
                  "focus": ["SI", "normal", "phi2", "beta", "alpha2"],
                  "move": {
                    "type": "substitute",
                    "by": "\\phi_2 = \\beta - \\alpha_2"
                  },
                  "tex": "n_1\\left(\\frac{h}{r} + \\frac{h}{x}\\right) = n_2(\\beta - \\alpha_2)",
                  "note": "In triangle \\(ISC\\), exterior angle \\(\\beta = \\phi_2 + \\alpha_2\\), so \\(\\phi_2 = \\beta - \\alpha_2\\)."
                },
                {
                  "focus": ["h", "r", "y", "beta", "alpha2"],
                  "move": {
                    "type": "substitute",
                    "by": "\\beta = \\frac{h}{r},\\,\\alpha_2 = \\frac{h}{y}"
                  },
                  "tex": "n_1\\left(\\frac{h}{r} + \\frac{h}{x}\\right) = n_2\\left(\\frac{h}{r} - \\frac{h}{y}\\right)",
                  "note": "Substitute \\(\\beta \\approx h/r\\) and \\(\\alpha_2 \\approx \\tan\\alpha_2 = h/y\\) (Eq. 4.3)."
                },
                {
                  "phase": "Cancel height",
                  "focus": ["h", "OS", "SI"],
                  "move": {
                    "type": "divide",
                    "by": "h"
                  },
                  "tex": "\\frac{n_1}{r} + \\frac{n_1}{x} = \\frac{n_2}{r} - \\frac{n_2}{y}",
                  "note": "Divide both sides by \\(h\\) so the ray height cancels out.",
                  "ask": {
                    "q": "Why does dividing by \\(h\\) show all paraxial rays focus together?",
                    "options": [
                      "The equation no longer depends on \\(h\\)",
                      "The radius \\(r\\) becomes zero",
                      "The refractive index cancels out",
                      "The object distance becomes infinite"
                    ],
                    "answer": 0,
                    "why": "Once \\(h\\) cancels, every paraxial ray gives the same image distance \\(y\\)."
                  }
                },
                {
                  "focus": ["x", "y", "r"],
                  "move": {
                    "type": "rearrange"
                  },
                  "tex": "\\frac{n_2}{y} + \\frac{n_1}{x} = \\frac{n_2 - n_1}{r}",
                  "note": "Collect \\(x, y\\) terms on the left and \\(r\\) terms on the right (Eq. 4.4)."
                },
                {
                  "phase": "Sign convention",
                  "focus": ["x", "y", "r", "O", "I", "C"],
                  "move": {
                    "type": "substitute",
                    "by": "x = -u,\\,y = v,\\,r = R"
                  },
                  "tex": "\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}",
                  "note": "Apply the sign convention \\(u = -x, v = y, R = r\\) to get the Gaussian formula (Eq. 4.5).",
                  "ask": {
                    "q": "Since object \\(O\\) lies left of pole \\(P\\), what replaces \\(x\\)?",
                    "options": [
                      "\\(-u\\)",
                      "\\(+u\\)",
                      "\\(-v\\)",
                      "\\(+R\\)"
                    ],
                    "answer": 0,
                    "why": "Distances to the left of \\(P\\) are negative, so \\(u = -x\\) and \\(x = -u\\)."
                  }
                }
              ]
            },
            {
              "type": "intuition",
              "term": "meridional-ray",
              "title": "Rays that stay in one flat slice versus skew rays",
              "meaning": "Meridional rays stay inside the plane that contains the optical axis, whereas skew rays twist out of a single plane.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "P1 = (-6.8, -1.4)",
                  "P2 = (-3.8, 3.4)",
                  "P3 = (6.8, 3.4)",
                  "P4 = (3.8, -1.4)",
                  "plane = Polygon(P1, P2, P3, P4)",
                  "C1 = (-4.5, 1.0)",
                  "C2 = (4.5, 1.0)",
                  "axis = Segment(C1, C2)",
                  "S = (0, 2.6)",
                  "M1 = Segment(C1, S)",
                  "meridional = Segment(S, C2)",
                  "K1 = (-3.8, -2.4)",
                  "K2 = (0.6, 1.4)",
                  "K3 = (4.2, -3.6)",
                  "skew1 = Segment(K1, K2)",
                  "skew = Segment(K2, K3)"
                ],
                "free": ["S"],
                "focus": ["M1", "meridional", "S", "C1"],
                "dashed": ["skew1", "skew"],
                "hidden": ["P1", "P2", "P3", "P4", "K1", "K2", "K3"],
                "labels": {
                  "C1": "C₁",
                  "C2": "C₂",
                  "S": "S",
                  "meridional": "Meridional ray",
                  "skew": "Skew ray"
                }
              },
              "picture": "Drag S inside the flat axial slice (meridional ray), while the dashed skew ray twists out of the plane.",
              "example": "Every ray starting from an object point on the optical axis is automatically a meridional ray.",
              "bridge": "When a system has two spherical surfaces, the line joining their centers C₁ and C₂ defines the optical axis."
            },
            {
              "type": "info",
              "label": "04 · §4.2.2 Definition",
              "title": "What is a meridional ray?",
              "defines": ["meridional-ray"],
              "body": "A meridional ray is a light ray confined to a single plane containing the optical axis, unlike a non-planar skew ray.",
              "examples": [
                "In axis plane",
                "On-axis point: all meridional",
                "Off-axis tilt: skew"
              ]
            },
            {
              "type": "derivation",
              "label": "05 · §4.3 Derivation",
              "title": "Reflection by a single spherical surface",
              "legend": "Spherical mirror \\(SPM\\) with object \\(O\\), center \\(C\\), image \\(I\\), and foot \\(D\\) to the left of pole \\(P\\) (\\(u = -x, v = -y, R = -r\\), Fig. 4.3).",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.0, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (5.5, 0)",
                  "C = (-0.5, 0)",
                  "Stop = (x(C) + 6.0 * cos(0.62), 6.0 * sin(0.62))",
                  "Sbot = (x(C) + 6.0 * cos(0.62), -6.0 * sin(0.62))",
                  "SPM = CircumcircularArc(Stop, P, Sbot)",
                  "O = (-6.5, 0)",
                  "I = (2.0, 0)",
                  "S = (4.8, 2.8)",
                  "D = (x(S), 0)",
                  "h = Segment(S, D)",
                  "CS = Segment(C, S)",
                  "OS = Segment(O, S)",
                  "SI = Segment(S, I)",
                  "alpha1 = Angle(D, O, S)",
                  "beta = Angle(D, C, S)",
                  "alpha2 = Angle(D, I, S)",
                  "phi = Angle(O, S, I)",
                  "x = Segment(O, P)",
                  "r = Segment(C, P)",
                  "y = Segment(I, P)"
                ],
                "free": ["O", "S"],
                "focus": ["OS", "SI", "S"],
                "dashed": ["h", "CS"],
                "hidden": ["AxL", "AxR", "Stop", "Sbot"],
                "labels": {
                  "O": "O",
                  "C": "C",
                  "I": "I",
                  "D": "D",
                  "P": "P",
                  "S": "S",
                  "h": "h",
                  "alpha1": "α₁",
                  "beta": "β",
                  "alpha2": "α₂",
                  "phi": "φ₁=φ₂",
                  "x": "x = -u",
                  "r": "r = -R",
                  "y": "y = -v"
                },
                "steps": {
                  "1": { "show": ["SPM", "OS", "SI", "CS", "phi", "S"], "focus": ["OS", "SI", "phi", "S"] },
                  "2": { "show": ["O", "C", "S", "OS", "CS", "alpha1", "beta", "phi"], "focus": ["OS", "CS", "alpha1", "beta", "phi"] },
                  "3": { "show": ["O", "C", "D", "P", "S", "h", "x", "r", "alpha1", "beta"], "focus": ["h", "x", "alpha1", "beta"] },
                  "4": { "show": ["C", "I", "S", "SI", "CS", "alpha2", "beta", "phi"], "focus": ["SI", "CS", "alpha2", "beta", "phi"] },
                  "5": { "show": ["C", "I", "D", "P", "S", "h", "y", "r", "alpha2", "beta"], "focus": ["h", "alpha2", "beta"] },
                  "6": { "show": ["O", "I", "D", "S", "h", "OS", "SI"], "focus": ["h", "OS", "SI"] },
                  "7": { "show": ["O", "C", "I", "P", "x", "y", "r", "CS"], "focus": ["x", "CS"] },
                  "8": { "show": ["O", "C", "I", "P", "x", "y", "r"], "focus": ["x", "O", "C", "I"] },
                  "9": { "show": ["O", "C", "I", "P", "S", "OS", "SI", "CS"], "focus": ["OS", "SI", "CS"] }
                }
              },
              "phases": [
                {
                  "name": "Reflection law",
                  "why": "equate angles of incidence and reflection at S"
                },
                {
                  "name": "Incident ray",
                  "why": "write φ₁ from triangle OSC and paraxial ratios"
                },
                {
                  "name": "Reflected ray",
                  "why": "write φ₂ from triangle CSI and paraxial ratios"
                },
                {
                  "name": "Cancel height",
                  "why": "divide by h and collect 1/x + 1/y"
                },
                {
                  "name": "Sign convention",
                  "why": "substitute u = -x, v = -y, R = -r"
                }
              ],
              "steps": [
                {
                  "phase": "Reflection law",
                  "focus": ["OS", "SI", "phi", "S"],
                  "tex": "\\phi_1 = \\phi_2",
                  "note": "At point \\(S\\), the angle of incidence equals the angle of reflection."
                },
                {
                  "phase": "Incident ray",
                  "focus": ["OS", "CS", "alpha1", "beta", "phi"],
                  "move": {
                    "type": "substitute",
                    "by": "\\phi_1 = \\beta - \\alpha_1"
                  },
                  "tex": "\\beta - \\alpha_1 = \\phi_2",
                  "note": "In triangle \\(OSC\\), exterior angle \\(\\beta = \\alpha_1 + \\phi_1\\), so \\(\\phi_1 = \\beta - \\alpha_1\\).",
                  "ask": {
                    "q": "In triangle \\(OSC\\), how is \\(\\phi_1\\) related to \\(\\beta\\) and \\(\\alpha_1\\)?",
                    "options": [
                      "\\(\\phi_1 = \\beta - \\alpha_1\\)",
                      "\\(\\phi_1 = \\beta + \\alpha_1\\)",
                      "\\(\\phi_1 = \\alpha_1 - \\beta\\)",
                      "\\(\\phi_1 = 2\\beta\\)"
                    ],
                    "answer": 0,
                    "why": "Exterior angle \\(\\beta\\) equals \\(\\alpha_1 + \\phi_1\\), so \\(\\phi_1 = \\beta - \\alpha_1\\)."
                  }
                },
                {
                  "focus": ["h", "x", "alpha1", "beta"],
                  "move": {
                    "type": "substitute",
                    "by": "\\beta = \\frac{h}{r},\\,\\alpha_1 = \\frac{h}{x}"
                  },
                  "tex": "\\frac{h}{r} - \\frac{h}{x} = \\phi_2",
                  "note": "Replace small angles \\(\\beta\\) and \\(\\alpha_1\\) by \\(h/r\\) and \\(h/x\\)."
                },
                {
                  "phase": "Reflected ray",
                  "focus": ["SI", "CS", "alpha2", "beta", "phi"],
                  "move": {
                    "type": "substitute",
                    "by": "\\phi_2 = \\alpha_2 - \\beta"
                  },
                  "tex": "\\frac{h}{r} - \\frac{h}{x} = \\alpha_2 - \\beta",
                  "note": "In triangle \\(CSI\\), exterior angle \\(\\alpha_2 = \\beta + \\phi_2\\), so \\(\\phi_2 = \\alpha_2 - \\beta\\)."
                },
                {
                  "focus": ["h", "alpha2", "beta"],
                  "move": {
                    "type": "substitute",
                    "by": "\\alpha_2 = \\frac{h}{y},\\,\\beta = \\frac{h}{r}"
                  },
                  "tex": "\\frac{h}{r} - \\frac{h}{x} = \\frac{h}{y} - \\frac{h}{r}",
                  "note": "Replace small angles \\(\\alpha_2\\) and \\(\\beta\\) by \\(h/y\\) and \\(h/r\\).",
                  "ask": {
                    "q": "What replaces \\(\\alpha_2\\) in the paraxial approximation?",
                    "options": [
                      "\\(h / y\\)",
                      "\\(y / h\\)",
                      "\\(h / x\\)",
                      "\\(h / r\\)"
                    ],
                    "answer": 0,
                    "why": "Reflected ray \\(SI\\) meets the axis at distance \\(y\\), so \\(\\alpha_2 \\approx h / y\\)."
                  }
                },
                {
                  "phase": "Cancel height",
                  "focus": ["h", "OS", "SI"],
                  "move": {
                    "type": "divide",
                    "by": "h"
                  },
                  "tex": "\\frac{1}{r} - \\frac{1}{x} = \\frac{1}{y} - \\frac{1}{r}",
                  "note": "Divide both sides by \\(h\\).",
                  "ask": {
                    "q": "What is the next step to eliminate the ray height \\(h\\)?",
                    "options": [
                      "Divide both sides by \\(h\\)",
                      "Multiply both sides by \\(r\\)",
                      "Set \\(x = y\\)",
                      "Differentiate with respect to \\(h\\)"
                    ],
                    "answer": 0,
                    "why": "Every term has \\(h\\) in the numerator, so dividing by \\(h\\) removes it."
                  }
                },
                {
                  "focus": ["x", "CS"],
                  "move": {
                    "type": "rearrange"
                  },
                  "tex": "\\frac{1}{x} + \\frac{1}{y} = \\frac{2}{r}",
                  "note": "Collect \\(1/x + 1/y\\) on the left and \\(2/r\\) on the right (Eq. 4.6)."
                },
                {
                  "phase": "Sign convention",
                  "focus": ["x", "O", "C", "I"],
                  "move": {
                    "type": "substitute",
                    "by": "x = -u,\\,y = -v,\\,r = -R"
                  },
                  "tex": "-\\frac{1}{u} - \\frac{1}{v} = -\\frac{2}{R}",
                  "note": "Since \\(O, I, C\\) lie to the left of \\(P\\), substitute \\(x = -u, y = -v, r = -R\\)."
                },
                {
                  "focus": ["OS", "SI", "CS"],
                  "move": {
                    "type": "negate"
                  },
                  "tex": "\\frac{1}{u} + \\frac{1}{v} = \\frac{2}{R}",
                  "note": "Negate both sides to obtain the mirror equation (Eq. 4.7).",
                  "ask": {
                    "q": "Which substitution in the refraction formula also gives the mirror equation?",
                    "options": [
                      "\\(n_2 = -n_1\\)",
                      "\\(n_2 = n_1\\)",
                      "\\(n_2 = 0\\)",
                      "\\(R = \\infty\\)"
                    ],
                    "answer": 0,
                    "why": "Setting \\(n_2 = -n_1\\) in Eq. (4.5) turns Snell's law into reflection and yields Eq. (4.7)."
                  }
                }
              ]
            },
            {
              "type": "math",
              "label": "06 · §4.2.2 Example",
              "title": "Worked example: refraction at a spherical surface (Example 4.1)",
              "tex": "\\frac{1.5}{v} - \\frac{1.0}{-40} = \\frac{1.5 - 1.0}{+15} \\implies v = +180\\text{ cm}",
              "body": "An object in air (\\(n_1 = 1.0\\)) lies \\(40\\text{ cm}\\) left of a glass surface (\\(n_2 = 1.5, R = +15\\text{ cm}\\)). The first surface forms an image at \\(+180\\text{ cm}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "In the Cartesian sign convention, when is object distance \\(u\\) positive?",
              "options": [
                "When incident rays converge right of P",
                "When a real object sits left of P",
                "Whenever the surface is concave",
                "Whenever the image is inverted"
              ],
              "answer": 0,
              "why": "Distances to the right of pole \\(P\\) are positive, which happens for a virtual object."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 45,
              "q": "Off-axis rays that do not stay in a single plane are called ______ rays.",
              "answer": "skew",
              "why": "Rays confined to the axial plane are meridional rays; non-planar rays are skew rays."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "For a concave mirror with \\(R = -60\\text{ cm}\\) and \\(u = -80\\text{ cm}\\), find \\(v\\).",
              "answer": -48,
              "tolerance": 0.1,
              "unit": "cm",
              "why": "\\(\\frac{1}{v} = \\frac{2}{-60} - \\frac{1}{-80} = -\\frac{1}{30} + \\frac{1}{80} = -\\frac{5}{240}\\), so \\(v = -48\\text{ cm}\\) (Example 4.2)."
            }
          ]
        }
      ]
    },
    {
      "short": "Thin Lens",
      "title": "Thin Lenses, Foci & Magnification",
      "sheets": [
        {
          "id": "thin-lens-foci-focal-length",
          "title": "Thin lens & principal foci",
          "icon": "lens",
          "source": "Unit 3 · Ghatak §§4.4–4.5 (PDF pp. 83–84)",
          "cards": [
            {
              "type": "intuition",
              "term": "thin-lens",
              "title": "Two spherical surfaces pressed close together",
              "meaning": "A thin lens is a transparent medium bounded by two spherical surfaces whose thickness is negligible compared to all other distances.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (0, 0)",
                  "Ltop = (0, 3.8)",
                  "Lbot = (0, -3.8)",
                  "Lleft = (-0.45, 0)",
                  "Lright = (0.45, 0)",
                  "surf1 = CircumcircularArc(Ltop, Lleft, Lbot)",
                  "surf2 = CircumcircularArc(Ltop, Lright, Lbot)",
                  "O = (-6.0, 0)",
                  "I = (5.5, 0)",
                  "S = (0, 2.4)",
                  "ray1 = Segment(O, S)",
                  "ray = Segment(S, I)",
                  "u = Segment(O, P)",
                  "v = Segment(P, I)"
                ],
                "free": ["O", "S"],
                "focus": ["ray1", "ray", "P"],
                "hidden": ["AxL", "AxR", "Ltop", "Lbot", "Lleft", "Lright"],
                "labels": {
                  "O": "O",
                  "P": "P",
                  "I": "I",
                  "S": "S",
                  "u": "u (from P)",
                  "v": "v (from P)",
                  "surf1": "t ≪ |u|, |v|"
                }
              },
              "picture": "Drag O or S: thickness t at P is so small that both u and v are measured from lens center P (Fig. 4.5).",
              "example": "Because thickness t is tiny, we measure object distance u and image distance v from one shared center P.",
              "bridge": "The first surface forms an intermediate image Q at v', which immediately acts as the object for the second surface to form final image I at v."
            },
            {
              "type": "info",
              "label": "01 · §4.4 Definition",
              "title": "What is a thin spherical lens?",
              "defines": ["thin-lens"],
              "body": "A thin spherical lens is a medium bounded by two spherical refracting surfaces whose thickness t is very small compared to object, image, and curvature distances.",
              "tex": "t \\ll |u|,\\,|v|,\\,|R_1|,\\,|R_2|",
              "examples": [
                "Two spherical surfaces",
                "Axis joins C₁ and C₂",
                "Measured from P"
              ]
            },
            {
              "type": "derivation",
              "label": "02 · §4.4 Derivation",
              "title": "The thin lens and Lensmaker's formula",
              "legend": "Lens of index \\(n_2\\) in medium \\(n_1\\) with centers \\(C_1, C_2\\), radii \\(R_1, R_2\\), intermediate image \\(Q\\) at \\(v'\\), final image \\(I\\) at \\(v\\), and \\(n = n_2 / n_1\\) (Fig. 4.5).",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (-1.0, 0)",
                  "Ltop = (-1.0, 3.6)",
                  "Lbot = (-1.0, -3.6)",
                  "L1 = (-1.5, 0)",
                  "L2 = (-0.5, 0)",
                  "surf1 = CircumcircularArc(Ltop, L1, Lbot)",
                  "surf2 = CircumcircularArc(Ltop, L2, Lbot)",
                  "C2 = (-4.2, 0)",
                  "C1 = (2.2, 0)",
                  "R1R2 = Segment(C2, C1)",
                  "O = (-6.5, 0)",
                  "I = (3.8, 0)",
                  "Q = (6.8, 0)",
                  "S = (-1.0, 2.3)",
                  "rayO = Segment(O, S)",
                  "rayQ = Segment(S, Q)",
                  "rayI = Segment(S, I)",
                  "u = Segment(O, P)",
                  "v = Segment(P, I)",
                  "vprime = Segment(P, Q)",
                  "n1 = (-5.2, 3.2)",
                  "n2 = (-1.0, 4.1)"
                ],
                "free": ["O", "S"],
                "focus": ["rayO", "rayI", "I"],
                "dashed": ["rayQ"],
                "hidden": ["AxL", "AxR", "Ltop", "Lbot", "L1", "L2"],
                "labels": {
                  "O": "O",
                  "C2": "C₂",
                  "P": "P",
                  "C1": "C₁",
                  "I": "I",
                  "Q": "Q",
                  "S": "S",
                  "u": "u = -x",
                  "v": "v = y",
                  "vprime": "v' = y'",
                  "R1R2": "R₁, R₂",
                  "n1": "n₁",
                  "n2": "n₂"
                },
                "steps": {
                  "1": { "show": ["surf1", "O", "P", "Q", "S", "rayO", "rayQ", "u", "vprime"], "focus": ["surf1", "rayO", "rayQ", "u", "vprime"] },
                  "2": { "show": ["surf2", "P", "I", "Q", "S", "rayQ", "rayI", "vprime", "v"], "focus": ["surf2", "rayQ", "rayI", "vprime", "v"] },
                  "3": { "show": ["surf1", "surf2", "O", "P", "I", "S", "rayO", "rayI", "u", "v"], "focus": ["surf1", "surf2", "rayI", "u", "v"] },
                  "4": { "show": ["surf1", "surf2", "C1", "C2", "R1R2"], "focus": ["surf1", "surf2", "R1R2"] },
                  "5": { "show": ["surf1", "surf2", "C1", "C2", "R1R2", "n1", "n2"], "focus": ["n1", "n2", "R1R2"] },
                  "6": { "show": ["surf1", "surf2", "C1", "C2", "R1R2", "n1", "n2"], "focus": ["n1", "n2", "R1R2"] },
                  "7": { "show": ["surf1", "surf2", "O", "P", "I", "S", "rayO", "rayI", "u", "v"], "focus": ["rayI", "u", "v", "I"] }
                }
              },
              "phases": [
                {
                  "name": "First surface",
                  "why": "refraction at R₁ from n₁ into n₂ forms image Q at v'"
                },
                {
                  "name": "Second surface",
                  "why": "refraction at R₂ from n₂ into n₁ takes Q at v' to I at v"
                },
                {
                  "name": "Combine surfaces",
                  "why": "add the two surface equations to eliminate v'"
                },
                {
                  "name": "Relative index",
                  "why": "divide by n₁ and define n = n₂ / n₁"
                },
                {
                  "name": "Focal length",
                  "why": "define focal length f by Lensmaker's formula"
                }
              ],
              "steps": [
                {
                  "phase": "First surface",
                  "focus": ["surf1", "rayO", "rayQ", "u", "vprime"],
                  "tex": "\\frac{n_2}{v'} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1}",
                  "note": "First surface \\(R_1\\) refracts light from \\(n_1\\) into \\(n_2\\), forming \\(Q\\) at \\(v'\\) (Eq. 4.8)."
                },
                {
                  "phase": "Second surface",
                  "focus": ["surf2", "rayQ", "rayI", "vprime", "v"],
                  "move": {
                    "type": "rearrange",
                    "label": "Write second surface refraction (Eq. 4.9)"
                  },
                  "tex": "\\frac{n_1}{v} - \\frac{n_2}{v'} = \\frac{n_1 - n_2}{R_2}",
                  "note": "Point \\(Q\\) at \\(v'\\) acts as object for second surface \\(R_2\\) from \\(n_2\\) into \\(n_1\\) (Eq. 4.9).",
                  "ask": {
                    "q": "For the second surface \\(R_2\\), what acts as its object distance?",
                    "options": [
                      "Intermediate distance \\(v'\\)",
                      "Original distance \\(u\\)",
                      "Radius \\(R_1\\)",
                      "Thickness \\(t = 0\\)"
                    ],
                    "answer": 0,
                    "why": "The image \\(Q\\) formed by the first surface at \\(v'\\) serves as the object for the second surface."
                  }
                },
                {
                  "phase": "Combine surfaces",
                  "focus": ["surf1", "surf2", "rayI", "u", "v"],
                  "move": {
                    "type": "add",
                    "by": "\\frac{n_2}{v'} - \\frac{n_1}{u}"
                  },
                  "tex": "\\frac{n_1}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1} + \\frac{n_1 - n_2}{R_2}",
                  "note": "Add Eqs. (4.8) and (4.9) so \\(+n_2/v'\\) and \\(-n_2/v'\\) cancel out.",
                  "ask": {
                    "q": "Why do we add Eqs. (4.8) and (4.9) together?",
                    "options": [
                      "To cancel intermediate distance \\(v'\\)",
                      "To cancel object distance \\(u\\)",
                      "To make \\(R_1 = R_2\\)",
                      "To set \\(n_1 = 0\\)"
                    ],
                    "answer": 0,
                    "why": "Adding \\(+n_2/v'\\) and \\(-n_2/v'\\) eliminates the intermediate image position \\(v'\\)."
                  }
                },
                {
                  "focus": ["surf1", "surf2", "R1R2"],
                  "move": {
                    "type": "factor"
                  },
                  "tex": "\\frac{n_1}{v} - \\frac{n_1}{u} = (n_2 - n_1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
                  "note": "Factor \\((n_2 - n_1)\\) on the right, flipping the sign on \\(1/R_2\\).",
                  "ask": {
                    "q": "When \\((n_2 - n_1)\\) is factored out of \\((n_1 - n_2)/R_2\\), what remains?",
                    "options": [
                      "\\(-1 / R_2\\)",
                      "\\(+1 / R_2\\)",
                      "\\(-R_2\\)",
                      "\\(n_1 / R_2\\)"
                    ],
                    "answer": 0,
                    "why": "Since \\(n_1 - n_2 = -(n_2 - n_1)\\), factoring out \\((n_2 - n_1)\\) leaves \\(-1/R_2\\)."
                  }
                },
                {
                  "phase": "Relative index",
                  "focus": ["n1", "n2", "R1R2"],
                  "move": {
                    "type": "divide",
                    "by": "n_1"
                  },
                  "tex": "\\frac{1}{v} - \\frac{1}{u} = \\left(\\frac{n_2}{n_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
                  "note": "Divide both sides by surrounding refractive index \\(n_1\\)."
                },
                {
                  "focus": ["n1", "n2", "R1R2"],
                  "move": {
                    "type": "substitute",
                    "by": "n = \\frac{n_2}{n_1}"
                  },
                  "tex": "\\frac{1}{v} - \\frac{1}{u} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
                  "note": "Write \\(n = n_2 / n_1\\) to obtain the thin lens formula (Eq. 4.10)."
                },
                {
                  "phase": "Focal length",
                  "focus": ["rayI", "u", "v", "I"],
                  "move": {
                    "type": "define",
                    "by": "\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)"
                  },
                  "tex": "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}",
                  "note": "Define focal length \\(f\\) by Eq. (4.12) to get Eq. (4.11).",
                  "ask": {
                    "q": "When \\(u = -\\infty\\) (incident parallel rays), what does \\(v\\) equal?",
                    "options": [
                      "\\(f\\)",
                      "\\(0\\)",
                      "\\(-f\\)",
                      "\\(R_1\\)"
                    ],
                    "answer": 0,
                    "why": "Setting \\(1/u = 0\\) in \\(1/v - 1/u = 1/f\\) gives \\(v = f\\)."
                  }
                }
              ]
            },
            {
              "type": "info",
              "label": "03 · §4.4 Surrounding medium",
              "title": "Converging and diverging lenses in different media",
              "body": "For a biconvex lens (R₁ > 0, R₂ < 0), (1/R₁ - 1/R₂) is positive. It converges light when n₂ > n₁, but diverges light when placed in a medium with n₁ > n₂ (Fig. 4.7).",
              "examples": [
                "n₂ > n₁: biconvex f > 0",
                "n₂ < n₁: biconvex f < 0",
                "n₂ < n₁: biconcave f > 0"
              ],
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "Ax1L = (-7.5, 1.8)",
                  "Ax1R = (-0.5, 1.8)",
                  "axis1 = Segment(Ax1L, Ax1R)",
                  "P1 = (-4.2, 1.8)",
                  "Fconv = (-1.2, 1.8)",
                  "K1 = (-4.2, 3.6)",
                  "L1 = (-4.2, 0.0)",
                  "lens1 = Segment(K1, L1)",
                  "In1 = (-7.2, y(K1))",
                  "conv = PolyLine(In1, K1, Fconv)",
                  "Ax2L = (0.5, -1.8)",
                  "Ax2R = (7.5, -1.8)",
                  "axis2 = Segment(Ax2L, Ax2R)",
                  "P2 = (3.8, -1.8)",
                  "Fdiv = (1.2, -1.8)",
                  "K2 = (3.8, 0.0)",
                  "L2 = (3.8, -3.6)",
                  "lens2 = Segment(K2, L2)",
                  "In2 = (0.8, y(K2))",
                  "Out2 = (6.8, y(K2) + 1.4)",
                  "div = PolyLine(In2, K2, Out2)",
                  "back = Segment(Fdiv, K2)"
                ],
                "free": ["K1", "K2"],
                "focus": ["div", "Fdiv"],
                "dashed": ["axis1", "axis2", "back"],
                "hidden": ["Ax1L", "Ax1R", "L1", "In1", "Ax2L", "Ax2R", "L2", "In2", "Out2"],
                "labels": {
                  "P1": "n₂ > n₁",
                  "Fconv": "F₂ (f>0)",
                  "P2": "n₂ < n₁",
                  "Fdiv": "F₂ (f<0)",
                  "K1": "K₁",
                  "K2": "K₂"
                }
              }
            },
            {
              "type": "intuition",
              "term": "principal-focus",
              "title": "The two special focal points of any lens",
              "meaning": "The first principal focus F₁ turns rays from a point into parallel rays, while the second principal focus F₂ collects incoming parallel rays to a point.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (0, 0)",
                  "F1 = (-3.6, 0)",
                  "F2 = (3.6, 0)",
                  "K = (0, 2.5)",
                  "L = (0, -2.5)",
                  "lens = Segment(K, L)",
                  "In2 = (-7.0, y(K))",
                  "Out1 = (7.0, y(L))",
                  "ray1 = PolyLine(F1, L, Out1)",
                  "ray2 = PolyLine(In2, K, F2)"
                ],
                "free": ["K", "F2"],
                "focus": ["ray2", "F2"],
                "hidden": ["AxL", "AxR", "In2", "Out1"],
                "labels": {
                  "F1": "F₁ (f₁<0)",
                  "P": "P",
                  "F2": "F₂ (f₂>0)",
                  "K": "K",
                  "L": "L",
                  "ray1": "Ray 1 (F₁ → parallel)",
                  "ray2": "Ray 2 (parallel → F₂)"
                }
              },
              "picture": "Drag K to move parallel Ray 2 (through F₂) and Ray 1 from F₁ (emerging parallel, Fig. 4.8(a)).",
              "example": "For a converging lens of focal length 20 cm in air, F₁ sits at f₁ = -20 cm (left) and F₂ sits at f₂ = +20 cm (right).",
              "bridge": "Setting v = ∞ gives u = f₁ (first focal length), and setting u = -∞ gives v = f₂ (second focal length)."
            },
            {
              "type": "info",
              "label": "04 · §4.5 Definition",
              "title": "What are the first and second principal foci?",
              "defines": ["principal-focus"],
              "body": "The first principal focus F₁ is the axial object point whose refracted rays emerge parallel (v = ∞), and the second principal focus F₂ is the axial image point for incident parallel rays (u = -∞).",
              "tex": "\\frac{1}{f_2} = -\\frac{1}{f_1} = \\frac{1}{f} \\quad (n_3 = n_1)",
              "examples": [
                "Converging: f₁<0, f₂>0",
                "Diverging: f₁>0, f₂<0",
                "Diff media: f₂/f₁ = -n₃/n₁"
              ]
            },
            {
              "type": "info",
              "label": "05 · §4.5 Ray tracing",
              "title": "Three principal rays for graphical construction",
              "body": "Ray 1 through F₁ emerges parallel to the axis. Ray 2 parallel to the axis passes through F₂. Ray 3 through lens center P passes undeviated (Fig. 4.8).",
              "examples": [
                "1: via F₁ → parallel",
                "2: parallel → via F₂",
                "3: via P → straight"
              ],
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (0, 0)",
                  "F1 = (-2.8, 0)",
                  "F2 = (2.8, 0)",
                  "A = (-5.6, 2.4)",
                  "O = (x(A), 0)",
                  "OA = Segment(O, A)",
                  "K = (0, y(A))",
                  "B = Intersect(Line(K, F2), Line(A, P))",
                  "I = (x(B), 0)",
                  "IB = Segment(I, B)",
                  "L = (0, y(B))",
                  "lens = Segment(K, L)",
                  "ray1 = PolyLine(A, L, B)",
                  "ray2 = PolyLine(A, K, B)",
                  "ray3 = Segment(A, B)"
                ],
                "free": ["A"],
                "focus": ["ray3", "P"],
                "hidden": ["AxL", "AxR"],
                "labels": {
                  "A": "A",
                  "O": "O",
                  "F1": "F₁",
                  "P": "P",
                  "F2": "F₂",
                  "I": "I",
                  "B": "B",
                  "K": "K",
                  "L": "L",
                  "ray1": "1",
                  "ray2": "2",
                  "ray3": "3"
                }
              }
            },
            {
              "type": "math",
              "label": "06 · §4.5 Different media",
              "title": "Thin lens with different media on its two sides (Eqs. 4.14–4.16)",
              "tex": "\\frac{n_3}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1} + \\frac{n_3 - n_2}{R_2}",
              "body": "When medium \\(n_1\\) is on the left and \\(n_3\\) on the right, setting \\(v = \\infty\\) (Eq. 4.15) and \\(u = -\\infty\\) (Eq. 4.16) gives \\(f_2 / f_1 = -n_3 / n_1\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "For a converging lens in air, what are the signs of \\(f_1\\) and \\(f_2\\)?",
              "options": [
                "\\(f_1 < 0\\) and \\(f_2 > 0\\)",
                "\\(f_1 > 0\\) and \\(f_2 < 0\\)",
                "Both \\(f_1\\) and \\(f_2\\) positive",
                "Both \\(f_1\\) and \\(f_2\\) negative"
              ],
              "answer": 0,
              "why": "For a converging lens, \\(F_1\\) lies on the left (\\(f_1 < 0\\)) and \\(F_2\\) lies on the right (\\(f_2 > 0\\))."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "How does a glass biconvex lens behave inside a liquid of higher refractive index?",
              "options": [
                "As a diverging lens",
                "As a converging lens",
                "As a plane mirror",
                "As an opaque screen"
              ],
              "answer": 0,
              "why": "When \\(n_2 < n_1\\), \\((n - 1)\\) becomes negative, so \\(f < 0\\) and the biconvex lens diverges light."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 45,
              "q": "A paraxial ray passing through the center \\(P\\) of a thin lens travels ______.",
              "answer": "undeviated|straight",
              "why": "At \\(u = 0\\), the thin lens formula gives \\(v = 0\\), so the ray through \\(P\\) passes undeviated."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "Find \\(f\\) in air for \\(n = 1.5\\), \\(R_1 = +20\\text{ cm}\\), and \\(R_2 = -20\\text{ cm}\\).",
              "answer": 20,
              "tolerance": 0.1,
              "unit": "cm",
              "why": "\\(\\frac{1}{f} = (1.5 - 1)\\left(\\frac{1}{20} - \\frac{1}{-20}\\right) = 0.5 \\times \\frac{2}{20} = \\frac{1}{20}\\), so \\(f = 20\\text{ cm}\\)."
            }
          ]
        },
        {
          "id": "newton-formula-magnification",
          "title": "Newton formula & magnification",
          "icon": "graph",
          "source": "Unit 4 · Ghatak §§4.6–4.7 (PDF pp. 85–86)",
          "cards": [
            {
              "type": "info",
              "label": "01 · §4.6 Focal distances",
              "title": "Measuring object and image from the two foci",
              "body": "Newton's method measures object distance x₁ from F₁ (positive if right of F₁) and image distance x₂ from F₂ (positive if right of F₂), as in Fig. 4.8.",
              "examples": [
                "x₁ from F₁",
                "x₂ from F₂",
                "Right of focus: +"
              ],
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (0, 0)",
                  "F1 = (-2.8, 0)",
                  "F2 = (2.8, 0)",
                  "A = (-5.6, 2.4)",
                  "O = (x(A), 0)",
                  "obj = Segment(O, A)",
                  "K = (0, y(A))",
                  "B = Intersect(Line(K, F2), Line(A, P))",
                  "I = (x(B), 0)",
                  "img = Segment(I, B)",
                  "L = (0, y(B))",
                  "lens = Segment(K, L)",
                  "ray1 = PolyLine(A, L, B)",
                  "ray2 = PolyLine(A, K, B)",
                  "ray3 = Segment(A, B)",
                  "x1 = Segment(O, F1)",
                  "f1 = Segment(F1, P)",
                  "f2 = Segment(P, F2)",
                  "x2 = Segment(F2, I)"
                ],
                "free": ["A"],
                "focus": ["ray1", "F1", "x1"],
                "hidden": ["AxL", "AxR"],
                "labels": {
                  "A": "A",
                  "O": "O",
                  "F1": "F₁",
                  "P": "P",
                  "F2": "F₂",
                  "I": "I",
                  "B": "B",
                  "K": "K",
                  "L": "L",
                  "obj": "y",
                  "img": "-y'",
                  "x1": "-x₁",
                  "f1": "-f₁",
                  "f2": "f₂",
                  "x2": "x₂"
                }
              }
            },
            {
              "type": "derivation",
              "label": "02 · §4.6 Derivation",
              "title": "The Newton formula",
              "legend": "Object height \\(y\\) at \\(x_1\\) from \\(F_1\\), image height \\(y'\\) at \\(x_2\\) from \\(F_2\\), focal lengths \\(f_1, f_2\\) (Fig. 4.8(a)).",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (0, 0)",
                  "F1 = (-2.8, 0)",
                  "F2 = (2.8, 0)",
                  "A = (-5.6, 2.4)",
                  "O = (x(A), 0)",
                  "obj = Segment(O, A)",
                  "K = (0, y(A))",
                  "B = Intersect(Line(K, F2), Line(A, P))",
                  "I = (x(B), 0)",
                  "img = Segment(I, B)",
                  "L = (0, y(B))",
                  "lens = Segment(K, L)",
                  "ray1 = PolyLine(A, L, B)",
                  "ray2 = PolyLine(A, K, B)",
                  "ray3 = Segment(A, B)",
                  "x1 = Segment(O, F1)",
                  "f1 = Segment(F1, P)",
                  "f2 = Segment(P, F2)",
                  "x2 = Segment(F2, I)"
                ],
                "free": ["A"],
                "focus": ["ray1", "F1"],
                "hidden": ["AxL", "AxR"],
                "labels": {
                  "A": "A",
                  "O": "O",
                  "F1": "F₁",
                  "P": "P",
                  "F2": "F₂",
                  "I": "I",
                  "B": "B",
                  "K": "K",
                  "L": "L",
                  "obj": "y",
                  "img": "-y'",
                  "x1": "-x₁",
                  "f1": "-f₁",
                  "f2": "f₂",
                  "x2": "x₂"
                },
                "steps": {
                  "1": { "show": ["A", "O", "F1", "P", "L", "obj", "lens", "ray1", "x1", "f1"], "focus": ["ray1", "obj", "lens", "F1", "x1", "f1"] },
                  "2": { "show": ["A", "O", "F1", "P", "L", "obj", "lens", "ray1", "x1", "f1"], "focus": ["F1", "x1", "f1"] },
                  "3": { "show": ["K", "P", "F2", "I", "B", "lens", "img", "ray2", "f2", "x2"], "focus": ["ray2", "lens", "img", "F2", "f2", "x2"] },
                  "4": { "show": ["O", "F1", "P", "F2", "I", "x1", "f1", "f2", "x2"], "focus": ["F1", "F2", "x1", "f1", "f2", "x2"] },
                  "5": { "show": ["O", "F1", "P", "F2", "I", "x1", "f1", "f2", "x2"], "focus": ["x1", "f1", "f2", "x2"] },
                  "6": { "show": ["O", "F1", "P", "F2", "I", "x1", "f1", "f2", "x2"], "focus": ["f1", "f2", "x1", "x2"] },
                  "7": { "show": ["O", "F1", "P", "F2", "I", "x1", "x2", "ray1", "ray2", "ray3"], "focus": ["x1", "x2", "F1", "F2"] }
                }
              },
              "phases": [
                {
                  "name": "First focus",
                  "why": "use similar triangles AOF₁ and LPF₁ at F₁"
                },
                {
                  "name": "Second focus",
                  "why": "use similar triangles KPF₂ and BIF₂ at F₂"
                },
                {
                  "name": "Equate ratios",
                  "why": "equate the two height ratios and cross-multiply"
                },
                {
                  "name": "Same medium",
                  "why": "set f₁ = -f and f₂ = f for the same surrounding medium"
                }
              ],
              "steps": [
                {
                  "phase": "First focus",
                  "focus": ["ray1", "obj", "lens", "F1", "x1", "f1"],
                  "tex": "\\frac{-y'}{y} = \\frac{-f_1}{-x_1}",
                  "note": "Similar right triangles \\(AOF_1\\) and \\(LPF_1\\) share the angle at \\(F_1\\) (Eq. 4.17)."
                },
                {
                  "focus": ["F1", "x1", "f1"],
                  "move": {
                    "type": "simplify"
                  },
                  "tex": "\\frac{-y'}{y} = \\frac{f_1}{x_1}",
                  "note": "Cancel the minus signs in the numerator and denominator on the right."
                },
                {
                  "phase": "Second focus",
                  "focus": ["ray2", "lens", "img", "F2", "f2", "x2"],
                  "move": {
                    "type": "rearrange",
                    "label": "Use similar triangles KPF₂ and BIF₂ (Eq. 4.18)"
                  },
                  "tex": "\\frac{-y'}{y} = \\frac{x_2}{f_2}",
                  "note": "In similar triangles \\(KPF_2\\) and \\(BIF_2\\) around \\(F_2\\), \\(-y'/y = x_2/f_2\\) (Eq. 4.18).",
                  "ask": {
                    "q": "In triangles \\(KPF_2\\) and \\(BIF_2\\), what does \\(-y' / y\\) equal?",
                    "options": [
                      "\\(x_2 / f_2\\)",
                      "\\(f_2 / x_2\\)",
                      "\\(x_1 / f_1\\)",
                      "\\(f_1 / f_2\\)"
                    ],
                    "answer": 0,
                    "why": "Since \\(KP = y\\) and \\(BI = -y'\\), the ratio of heights equals \\(x_2 / f_2\\)."
                  }
                },
                {
                  "phase": "Equate ratios",
                  "focus": ["F1", "F2", "x1", "f1", "f2", "x2"],
                  "move": {
                    "type": "substitute",
                    "by": "\\frac{-y'}{y} = \\frac{f_1}{x_1}"
                  },
                  "tex": "\\frac{f_1}{x_1} = \\frac{x_2}{f_2}",
                  "note": "Equate the two expressions for \\(-y'/y\\) from Eqs. (4.17) and (4.18)."
                },
                {
                  "focus": ["x1", "f1", "f2", "x2"],
                  "move": {
                    "type": "multiply",
                    "by": "x_1 f_2"
                  },
                  "tex": "f_1 f_2 = x_1 x_2",
                  "note": "Multiply both sides by \\(x_1 f_2\\) to get the Newtonian lens formula (Eq. 4.19).",
                  "ask": {
                    "q": "Which move clears both denominators in \\(f_1/x_1 = x_2/f_2\\)?",
                    "options": [
                      "Multiply both sides by \\(x_1 f_2\\)",
                      "Add \\(x_1 + f_2\\) to both sides",
                      "Divide both sides by \\(f_1\\)",
                      "Take the square root"
                    ],
                    "answer": 0,
                    "why": "Multiplying by \\(x_1 f_2\\) gives \\(f_1 f_2 = x_1 x_2\\)."
                  }
                },
                {
                  "phase": "Same medium",
                  "focus": ["f1", "f2", "x1", "x2"],
                  "move": {
                    "type": "substitute",
                    "by": "f_1 = -f,\\,f_2 = f"
                  },
                  "tex": "-f^2 = x_1 x_2",
                  "note": "When both sides have the same medium, Eq. (4.13) gives \\(f_1 = -f\\) and \\(f_2 = f\\).",
                  "ask": {
                    "q": "When the same medium surrounds the lens, what is \\(f_1 f_2\\)?",
                    "options": [
                      "\\(-f^2\\)",
                      "\\(+f^2\\)",
                      "\\(0\\)",
                      "\\(2f\\)"
                    ],
                    "answer": 0,
                    "why": "Because \\(f_1 = -f\\) and \\(f_2 = +f\\), their product is \\(-f^2\\)."
                  }
                },
                {
                  "focus": ["x1", "x2", "F1", "F2"],
                  "move": {
                    "type": "swap"
                  },
                  "tex": "x_1 x_2 = -f^2",
                  "note": "Thus \\(x_1\\) and \\(x_2\\) must always have opposite signs (Eq. 4.20).",
                  "ask": {
                    "q": "Since \\(x_1 x_2 = -f^2 < 0\\), what must be true of \\(x_1\\) and \\(x_2\\)?",
                    "options": [
                      "They have opposite signs",
                      "They are both positive",
                      "They are both negative",
                      "Their sum is zero"
                    ],
                    "answer": 0,
                    "why": "A negative product \\(-f^2\\) means one lies left of its focus and the other lies right."
                  }
                }
              ]
            },
            {
              "type": "intuition",
              "term": "lateral-magnification",
              "title": "How tall and which way up the image is",
              "meaning": "Lateral magnification compares the height of the image to the height of the object, including a sign for orientation.",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (0, 0)",
                  "Ktop = (0, 3.8)",
                  "Kbot = (0, -3.8)",
                  "lens = Segment(Ktop, Kbot)",
                  "A = (-5.5, 2.4)",
                  "O = (x(A), 0)",
                  "obj = Segment(O, A)",
                  "I = (5.5, 0)",
                  "B = (x(I), y(A) * x(I) / x(A))",
                  "img = Segment(I, B)",
                  "ray3 = Segment(A, B)",
                  "theta = Angle(O, P, A)",
                  "u = Segment(O, P)",
                  "v = Segment(P, I)"
                ],
                "free": ["A", "I"],
                "focus": ["ray3", "P", "theta"],
                "hidden": ["AxL", "AxR", "Ktop", "Kbot"],
                "labels": {
                  "A": "A",
                  "O": "O",
                  "P": "P",
                  "I": "I",
                  "B": "B",
                  "obj": "y",
                  "img": "y'",
                  "theta": "θ",
                  "u": "u < 0",
                  "v": "v > 0"
                }
              },
              "picture": "Drag A or I: similar right triangles AOP and BIP through lens center P give m = y'/y = v/u (Eq. 4.21).",
              "example": "A positive magnification (m > 0) means an erect image; a negative magnification (m < 0) means an inverted image.",
              "bridge": "For a thin lens in one medium, similar triangles through pole P give m = y' / y = v / u = -f₁ / x₁ = -x₂ / f₂."
            },
            {
              "type": "info",
              "label": "03 · §4.7 Definition",
              "title": "What is lateral magnification?",
              "defines": ["lateral-magnification"],
              "body": "Lateral magnification m is the ratio of image height y' to object height y, where positive m means erect and negative m means inverted (Eq. 4.21).",
              "tex": "m = \\frac{y'}{y} = \\frac{v}{u} = -\\frac{f_1}{x_1} = -\\frac{x_2}{f_2}",
              "examples": [
                "m > 0: erect",
                "m < 0: inverted",
                "Two surfaces: m = m₁m₂"
              ]
            },
            {
              "type": "derivation",
              "label": "04 · §4.7 Derivation",
              "title": "Lateral magnification of spherical surface and thin lens",
              "legend": "Object \\(OA = y\\) at \\(u\\), pole \\(P\\), center of curvature \\(C\\) at \\(R\\), image \\(IB = -y'\\) at \\(v\\) (Fig. 4.9, Eqs. 4.22–4.24).",
              "ggb": {
                "view": { "xmin": -8, "xmax": 8, "ymin": -5.5, "ymax": 5.5, "grid": true },
                "commands": [
                  "AxL = (-7.5, 0)",
                  "AxR = (7.5, 0)",
                  "axis = Segment(AxL, AxR)",
                  "P = (-1.5, 0)",
                  "C = (2.0, 0)",
                  "Stop = (x(C) - 3.5 * cos(0.85), 3.5 * sin(0.85))",
                  "Sbot = (x(C) - 3.5 * cos(0.85), -3.5 * sin(0.85))",
                  "surf = CircumcircularArc(Stop, P, Sbot)",
                  "A = (-6.0, 2.5)",
                  "O = (x(A), 0)",
                  "obj = Segment(O, A)",
                  "I = (6.2, 0)",
                  "B = (x(I), y(A) * (x(I) - x(C)) / (x(A) - x(C)))",
                  "img = Segment(I, B)",
                  "rayC = Segment(A, B)",
                  "rayP = PolyLine(A, P, B)",
                  "u = Segment(O, P)",
                  "R = Segment(P, C)",
                  "v = Segment(P, I)"
                ],
                "free": ["A", "I"],
                "focus": ["rayC", "C"],
                "dashed": ["rayP"],
                "hidden": ["AxL", "AxR", "Stop", "Sbot"],
                "labels": {
                  "A": "A",
                  "O": "O",
                  "P": "P",
                  "C": "C",
                  "I": "I",
                  "B": "B",
                  "obj": "y",
                  "img": "-y'",
                  "u": "-u",
                  "R": "R",
                  "v": "v"
                },
                "steps": {
                  "1": { "show": ["surf", "A", "O", "C", "I", "B", "obj", "img", "rayC"], "focus": ["rayC", "obj", "img", "C"] },
                  "2": { "show": ["surf", "O", "P", "C", "I", "rayC", "u", "R", "v"], "focus": ["R", "u", "v", "C"] },
                  "3": { "show": ["surf", "A", "O", "P", "C", "I", "B", "rayC", "rayP", "u", "v", "R"], "focus": ["surf", "u", "v", "R"] },
                  "4": { "show": ["surf", "A", "O", "I", "B", "obj", "img", "u", "v"], "focus": ["obj", "img", "u", "v"] },
                  "5": { "show": ["surf", "O", "P", "I", "u", "v"], "focus": ["surf", "u", "v"] },
                  "6": { "show": ["surf", "P", "I", "v"], "focus": ["surf", "v"] },
                  "7": { "show": ["A", "O", "I", "B", "obj", "img", "u", "v"], "focus": ["obj", "img", "u", "v"] },
                  "8": { "show": ["A", "O", "P", "C", "I", "B", "obj", "img", "rayC", "rayP", "u", "v"], "focus": ["obj", "img", "u", "v"] }
                }
              },
              "phases": [
                {
                  "name": "Triangles at C",
                  "why": "use similar triangles AOC and ICB through center C"
                },
                {
                  "name": "Surface law",
                  "why": "substitute v/R and u/R from the Gaussian surface equation"
                },
                {
                  "name": "First lens surface",
                  "why": "write magnification m₁ for the first surface of a thin lens"
                },
                {
                  "name": "Second lens surface",
                  "why": "write magnification m₂ for the second surface of a thin lens"
                },
                {
                  "name": "Total magnification",
                  "why": "multiply m₁ and m₂ to get m = v/u"
                }
              ],
              "steps": [
                {
                  "phase": "Triangles at C",
                  "focus": ["rayC", "obj", "img", "C"],
                  "tex": "\\frac{-y'}{y} = \\frac{v - R}{-u + R}",
                  "note": "Ray \\(ACB\\) along the normal at \\(C\\) passes undeviated, giving similar triangles \\(AOC\\) and \\(ICB\\) (Eq. 4.22)."
                },
                {
                  "focus": ["R", "u", "v", "C"],
                  "move": {
                    "type": "divide",
                    "by": "R",
                    "label": "Divide numerator and denominator by R"
                  },
                  "tex": "\\frac{-y'}{y} = \\frac{\\frac{v}{R} - 1}{-\\frac{u}{R} + 1}",
                  "note": "Divide numerator and denominator on the right-hand side by \\(R\\) (Eq. 4.22).",
                  "ask": {
                    "q": "Why does the ray from \\(A\\) through \\(C\\) pass straight without bending?",
                    "options": [
                      "It hits the spherical surface along the normal",
                      "Refractive indices \\(n_1\\) and \\(n_2\\) are equal",
                      "The surface is flat at \\(C\\)",
                      "It reflects back to \\(O\\)"
                    ],
                    "answer": 0,
                    "why": "Any line through center of curvature \\(C\\) is normal to the sphere, so \\(\\phi_1 = \\phi_2 = 0\\)."
                  }
                },
                {
                  "phase": "Surface law",
                  "focus": ["surf", "u", "v", "R"],
                  "move": {
                    "type": "substitute",
                    "by": "\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}"
                  },
                  "tex": "\\frac{-y'}{y} = -\\frac{n_1 v}{n_2 u}",
                  "note": "Substitute \\(v/R - 1 = \\frac{n_1}{n_2}(1 - \\frac{v}{R})\\) and \\(1 - u/R\\) from Eq. (4.5)."
                },
                {
                  "focus": ["obj", "img", "u", "v"],
                  "move": {
                    "type": "negate"
                  },
                  "tex": "m = \\frac{n_1 v}{n_2 u}",
                  "note": "Negate both sides and set \\(m = y'/y\\) for a single refracting surface (Eq. 4.23).",
                  "ask": {
                    "q": "What is the lateral magnification of a single surface from \\(n_1\\) to \\(n_2\\)?",
                    "options": [
                      "\\(n_1 v / (n_2 u)\\)",
                      "\\(n_2 v / (n_1 u)\\)",
                      "\\(v / u\\)",
                      "\\(-u / v\\)"
                    ],
                    "answer": 0,
                    "why": "Refraction from \\(n_1\\) into \\(n_2\\) gives \\(m = (n_1 v)/(n_2 u)\\) (Eq. 4.23)."
                  }
                },
                {
                  "phase": "First lens surface",
                  "focus": ["surf", "u", "v"],
                  "move": {
                    "type": "evaluate",
                    "by": "v \\to v'"
                  },
                  "tex": "m_1 = \\frac{n_1 v'}{n_2 u}",
                  "note": "For the first surface of a thin lens (\\(n_1 \\to n_2\\)), intermediate image at \\(v'\\) has magnification \\(m_1\\)."
                },
                {
                  "phase": "Second lens surface",
                  "focus": ["surf", "v"],
                  "move": {
                    "type": "rearrange",
                    "label": "Write second surface magnification m₂"
                  },
                  "tex": "m_2 = \\frac{n_2 v}{n_1 v'}",
                  "note": "For the second surface (\\(n_2 \\to n_1\\)), object at \\(v'\\) forms image at \\(v\\) with magnification \\(m_2\\).",
                  "ask": {
                    "q": "How is total magnification \\(m\\) found for two surfaces in succession?",
                    "options": [
                      "Multiply \\(m_1\\) by \\(m_2\\)",
                      "Add \\(m_1\\) and \\(m_2\\)",
                      "Subtract \\(m_2\\) from \\(m_1\\)",
                      "Divide \\(m_1\\) by \\(v'\\)"
                    ],
                    "answer": 0,
                    "why": "The first image height is scaled again by \\(m_2\\), so total magnification is \\(m_1 m_2\\)."
                  }
                },
                {
                  "phase": "Total magnification",
                  "focus": ["obj", "img", "u", "v"],
                  "move": {
                    "type": "multiply",
                    "by": "m_1"
                  },
                  "tex": "m_1 m_2 = \\frac{n_1 v'}{n_2 u}\\cdot\\frac{n_2 v}{n_1 v'}",
                  "note": "Multiply the two surface magnifications \\(m_1\\) and \\(m_2\\) together."
                },
                {
                  "focus": ["obj", "img", "u", "v"],
                  "move": {
                    "type": "cancel"
                  },
                  "tex": "m = \\frac{v}{u}",
                  "note": "Cancel \\(n_1, n_2\\) and \\(v'\\) to get \\(m = m_1 m_2 = v/u\\) (Eq. 4.24).",
                  "ask": {
                    "q": "Which factors cancel when \\(m_1\\) and \\(m_2\\) are multiplied?",
                    "options": [
                      "\\(n_1, n_2\\) and \\(v'\\)",
                      "\\(u\\) and \\(v\\)",
                      "Only \\(u\\)",
                      "Only \\(n_1\\)"
                    ],
                    "answer": 0,
                    "why": "Factors \\(n_1, n_2\\) and intermediate image distance \\(v'\\) cancel, leaving \\(m = v/u\\)."
                  }
                }
              ]
            },
            {
              "type": "math",
              "label": "05 · §4.7 Example",
              "title": "Two thin lenses separated by 8 cm (Example 4.3)",
              "tex": "v_1 = +40\\text{ cm},\\; u_2 = +32\\text{ cm} \\implies \\frac{1}{v_2} = \\frac{1}{32} - \\frac{1}{10} = -\\frac{22}{320}",
              "body": "Convex lens (\\(f = +20\\text{ cm}\\)) with \\(u = -40\\text{ cm}\\) gives \\(v_1 = +40\\text{ cm}, m_1 = -1\\). Concave lens (\\(f = -10\\text{ cm}\\)) 8 cm behind has virtual object \\(u_2 = +32\\text{ cm}\\), giving \\(v \\approx -14.5\\text{ cm}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "What is Newton's lens formula when the same medium is on both sides?",
              "options": [
                "\\(x_1 x_2 = -f^2\\)",
                "\\(x_1 x_2 = +f^2\\)",
                "\\(x_1 + x_2 = f\\)",
                "\\(x_1 / x_2 = -f\\)"
              ],
              "answer": 0,
              "why": "With the same medium on both sides, \\(f_1 = -f\\) and \\(f_2 = f\\), so \\(x_1 x_2 = f_1 f_2 = -f^2\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "What does a negative lateral magnification \\(m < 0\\) indicate?",
              "options": [
                "The image is inverted",
                "The image is erect",
                "The lens must be diverging",
                "No image is formed"
              ],
              "answer": 0,
              "why": "Since \\(m = y'/y\\), a negative value means \\(y'\\) and \\(y\\) have opposite signs (inverted)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "A thin lens in air has \\(f = 10\\text{ cm}\\) and \\(x_1 = -20\\text{ cm}\\). Find \\(x_2\\).",
              "answer": 5,
              "tolerance": 0.05,
              "unit": "cm",
              "why": "From \\(x_1 x_2 = -f^2\\), \\(x_2 = -100 / (-20) = +5\\text{ cm}\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "For a thin lens with \\(u = -40\\text{ cm}\\) and \\(v = +40\\text{ cm}\\), find \\(m\\).",
              "answer": -1,
              "tolerance": 0.01,
              "unit": "",
              "why": "Lateral magnification \\(m = v / u = (+40) / (-40) = -1\\)."
            }
          ]
        }
      ]
    }
  ]
}
```

---

### 3. Short notes

#### What changed
1. **Replaced all SVG figures with GeoGebra (`ggb`)**:
   - All 19 figures in `study-match/data/data.json` (and `skills/example-minimal.json`) now use a `ggb` object (`view`, `commands`, `free`, `focus`, `dashed`, `hidden`, `labels`, `steps`). No SVG `art` or `setup` remains in the data. Because almost every card in `data.json` changed, the full `study-match/data/data.json` is returned above in its own block.
   - Every construction is built with dependent GeoGebra commands (`Segment`, `Line`, `Intersect`, `PolyLine`, `CircumcircularArc`, `Polygon`, `Vector`, `Angle`, `Midpoint`) so that dragging any `free` point updates all dependent rays, normals, images, and angles live. Fixed textbook geometry is locked (`setFixed(id, true, false)`).
   - Reserved single-letter GeoGebra coordinate names (`x`, `y`, `z`, `i`, `e`, `c`) are mapped internally in `SM.GGB` (`ggb_x`, `ggb_y`, etc.) with captions set to their textbook names so `"x = Segment(O, P)"` and `"focus": ["x", "y", "r"]` work cleanly in GeoGebra.
2. **Interactive grid, layout, and offline fallback**:
   - The GeoGebra Graphics View (`perspective: "G"`) displays the grid (`setGridVisible(true)`), hides the toolbar, menu bar, and algebra input, and allows panning and zooming (`enableShiftDragZoom(true)`). Wheel events inside `.ggb-wrap` zoom the figure instead of scrolling the card shelf.
   - `ResizeObserver` sizes each applet to its container (`setSize(w, h)`) on both desktop (picture on the left, equations on the right) and phone (picture on top, equations below).
   - `deployggb.js` is loaded once. While loading, the card shows `"Loading figure…"`; if offline, it falls back cleanly to the figure caption and step text without crashing, and `sw.js` catches offline external script fetches cleanly.
3. **Palette colours and theme syncing**:
   - `SM.GGB.palette()` maps `01-tokens.css` variables (`--ink`, `--ink-2`, `--muted`, `--violet`, `--lav-2`, `--amber`, `--hl`) to RGB triples for both light and dark mode, and updates all mounted applets via `MutationObserver` and `matchMedia` whenever the theme changes.
4. **Textbook fixes (where Ghatak's PDFs and the earlier deck differed)**:
   - **Unit 1, Fig. 3.4 (p. 3.5)**: Added the nearby trial point $Q$ on mirror $MN$ and dashed trial paths $AQ, QB, A'Q$ from Ghatak Fig. 3.4 alongside the straight-line path $A'PB$. (Note: on p. 3.6, Eq. 3.6 in the textbook has a printing typo `n₁ sin θ₁ = n₁ sin θ₂`, whereas the Fig. 3.5 caption on p. 3.5 has the right `n₁ sin θ₁ = n₂ sin θ₂`, which we keep.)
   - **Unit 2, Fig. 4.1(a) (p. 4.2) & Fig. 4.3 (p. 4.4)**: Added the foot of the perpendicular $D$ on the optical axis below $S$ (`SD = h`), which the old SVGs omitted.
   - **Unit 3, Fig. 4.5 (p. 4.5)**: Added the two centers of curvature $C_1$ and $C_2$ on the optical axis of the thin lens, matching Ghatak Fig. 4.5.
   - **Unit 4, Fig. 4.8(a) (p. 4.7) & Fig. 4.9 (p. 4.8)**: Added Ray 3 (`APB` through lens center $P$) to the Newton formula figure (Fig. 4.8(a)), and added the pole-refracted ray `APB` alongside the undeviated ray `ACB` in the single-surface magnification figure (Fig. 4.9).

#### Official GeoGebra Apps Embedding & API methods used
- **Embedding (`Reference:GeoGebra_Apps_Embedding`)**:
  - `new GGBApplet(parameters, true)` (with `appName`, `perspective: "G"`, `width`, `height`, `showToolBar: false`, `showMenuBar: false`, `showAlgebraInput: false`, `showResetIcon: false`, `enableRightClick: false`, `enableLabelDrags: false`, `enableShiftDragZoom: true`, `showZoomButtons: false`, `showLogging: false`, `appletOnLoad`)
  - `applet.inject(containerID)`
- **API methods (`Reference:GeoGebra_Apps_API`)**:
  - `api.evalCommand(cmdString)`
  - `api.setCoordSystem(xmin, xmax, ymin, ymax)`
  - `api.setAxesVisible(xAxis, yAxis)`
  - `api.setGridVisible(flag)`
  - `api.setVisible(objName, visible)`
  - `api.setColor(objName, red, green, blue)`
  - `api.setLineThickness(objName, thickness)`
  - `api.setLineStyle(objName, style)`
  - `api.setPointSize(objName, size)`
  - `api.setFilling(objName, filling)`
  - `api.setFixed(objName, flag, selectionAllowed)`
  - `api.setLabelVisible(objName, visible)`
  - `api.setLabelStyle(objName, style)`
  - `api.setCaption(objName, caption)`
  - `api.setSize(width, height)`
  - `api.exists(objName)`
  - `api.getObjectType(objName)`
  - `api.enableShiftDragZoom(flag)`
  - `api.setPerspective(perspective)`
  - `api.setRepaintingActive(flag)`

#### Anything we could not do
- Nothing was skipped. Note that `wiki.geogebra.org` was unreachable from the browsing tool in this environment, so every API method and embedding parameter was verified directly against the standard GeoGebra Apps API specification.

