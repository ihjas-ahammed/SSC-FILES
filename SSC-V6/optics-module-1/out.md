### Short Plan

1. **Write the study data (`study-match/data/data.json`)**
   - Cover all four units of Module I (Geometrical Optics) from Ghatak, *Optics*, Chapters 3 and 4:
     1. Unit 1 (§§3.1–3.2): Rays, optical path length, Fermat's principle of stationary time, and the laws of reflection and refraction.
     2. Unit 2 (§§4.2–4.3): Cartesian sign convention, paraxial refraction at a single spherical surface, and the spherical mirror formula (noting in `source` that §4.1 is missing from the unit files).
     3. Unit 3 (§§4.4–4.5): Thin spherical lens, Lensmaker's formula, principal foci ($F_1, F_2$), focal lengths in same or different media, and the three ray-tracing rules.
     4. Unit 4 (§§4.6–4.7): Newton's lens formula ($x_1 x_2 = f_1 f_2$ and $x_1 x_2 = -f^2$), lateral magnification for a single surface and a thin lens, and a two-lens worked example.
   - Introduce each new term with a plain-word `intuition` card before its `info` definition card, plus a plain-language glossary.
   - Give every `derivation` card a `setup` SVG diagram, 3–6 phases, short notes, and 4 `ask` checkpoints that ask only about the very next step.
   - Keep every quiz question to one line (at most 15 words) and every option to at most 6 words.

2. **Update the app code and skill docs (`changes.diff`)**
   - **a. MathFlow board & wrapping (`02-mathflow.js`, `07-mathflow.css`):** Fix the board layout and equation anchor so the equation sits in the same place every time. Clamp scaling to a readable minimum (`0.74`) and wrap long equations only at top-level `=`, `+`, or `-` signs (never inside a fraction or term). Use a consistent colour-blind-safe palette in both light and dark modes (given terms, active step in amber, cancelled terms in vermilion with a strike line, and final results in cerulean blue).
   - **b. Setup SVG on the maths board (`02-mathflow.js`, `07-mathflow.css`):** Render the derivation's `setup` SVG alongside the active equation inside `.mf-board` so both fit on a single phone screen without scrolling, and highlight the side, angle, or ray used in the current step.
   - **c. Single-card flip derivation (`02-mathflow.js`, `03-render.js`, `04-shelf.js`, `05-cards.css`, `07-mathflow.css`):** Stop splitting `derivation` into four cards (`route`, `derive`, `page`, `order`). Render a single flip card with the concept, route, and setup diagram on the front face, and the interactive MathFlow player, setup diagram, phase bar, checkpoints, and "Practise again" button on the back face.
   - **d. Skill documentation (`01-schema.md`, `02-derivations.md`, `04-questions.md`):** Document the single-card derivation, the `setup` SVG field, next-step-only checkpoints, and short quiz/option word limits.

---

### Part 1: `study-match/data/data.json`

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
              "picture": "Shine a small bulb through a 1 cm hole onto a wall. You see a sharp circle of light. Only when the hole shrinks below 0.1 mm do the edges blur from diffraction.",
              "example": "Visible light has a tiny wavelength near 0.0005 cm, so ordinary lenses and mirrors are huge compared to it.",
              "bridge": "In the mathematical limit where wavelength λ goes to zero, diffraction disappears and light energy follows thin paths called rays."
            },
            {
              "type": "info",
              "label": "01 · Definition",
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
              "picture": "Walking through knee-deep water slows you down by a factor n compared to dry land. Crossing 1 metre of water takes as much time as walking n metres on land.",
              "example": "In glass with refractive index n = 1.5, a physical thickness of 2 cm has an optical path length of 1.5 × 2 cm = 3 cm.",
              "bridge": "Because speed in a medium is c / n, the time for step ds is (n ds) / c, so integrating n ds gives the optical path length."
            },
            {
              "type": "info",
              "label": "02 · Definition",
              "title": "What is optical path length?",
              "defines": ["optical-path-length", "refractive-index"],
              "body": "Optical path length is the integral of refractive index n along the geometric path, equal to c times the travel time.",
              "tex": "L_{\\text{op}} = \\int_{A}^{B} n\\,ds = c\\tau",
              "examples": [
                "dt = n ds / c",
                "Homogeneous: n s"
              ]
            },
            {
              "type": "intuition",
              "term": "fermats-principle",
              "title": "How light chooses its path",
              "meaning": "Fermat's principle says light travels along a path whose travel time is stationary compared with slightly different nearby paths.",
              "picture": "Imagine a ball resting at the flat bottom of a bowl, or balanced on a saddle. Moving it a tiny bit sideways does not change its height to first order.",
              "example": "In uniform air, the straight line between A and B has the shortest optical path. Inside an elliptical mirror, every path from focus S₁ to focus S₂ has the exact same length.",
              "bridge": "Therefore the modern statement replaces 'least time' with 'stationary optical path length': δ ∫ n ds = 0, allowing a minimum, maximum, or constant value."
            },
            {
              "type": "info",
              "label": "03 · Definition",
              "title": "What is Fermat's principle?",
              "defines": ["fermats-principle", "stationary-path", "homogeneous-medium"],
              "body": "Fermat's principle states that the actual ray path between two points makes the optical path length stationary with respect to small path variations.",
              "tex": "\\delta \\int_{A}^{B} n\\,ds = 0",
              "examples": [
                "Minimum time",
                "Maximum time",
                "Constant time"
              ]
            },
            {
              "type": "info",
              "label": "04 · Reflection",
              "title": "Law of reflection from Fermat's principle",
              "body": "Reflecting A across mirror MN to A' makes AP + PB = A'P + PB. A straight line A'PB minimizes length, so angle i equals angle r in one plane.",
              "examples": [
                "AP = A'P",
                "i = r",
                "Same plane"
              ],
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Reflection at plane mirror MN using image point A prime\"><line x1=\"20\" y1=\"115\" x2=\"240\" y2=\"115\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"165\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"135\" y1=\"35\" x2=\"135\" y2=\"115\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"165\" x2=\"135\" y2=\"115\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"60,40 135,115 215,35\" class=\"hk\" stroke-width=\"2.5\"/><circle cx=\"60\" cy=\"40\" r=\"3.5\" class=\"f\"/><circle cx=\"60\" cy=\"165\" r=\"3.5\" class=\"f\"/><circle cx=\"135\" cy=\"115\" r=\"4\" class=\"h\"/><circle cx=\"215\" cy=\"35\" r=\"3.5\" class=\"f\"/><text x=\"46\" y=\"42\" font-size=\"12\" class=\"t\">A</text><text x=\"42\" y=\"168\" font-size=\"12\" class=\"t\">A'</text><text x=\"68\" y=\"110\" font-size=\"11\" class=\"t\">R</text><text x=\"135\" y=\"132\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">P</text><text x=\"135\" y=\"28\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">S</text><text x=\"224\" y=\"38\" font-size=\"12\" class=\"t\">B</text><text x=\"118\" y=\"78\" font-size=\"12\" class=\"t\">i</text><text x=\"152\" y=\"78\" font-size=\"12\" class=\"t\">r</text><text x=\"232\" y=\"132\" text-anchor=\"end\" font-size=\"11\" class=\"t\">M → N</text></svg>"
            },
            {
              "type": "derivation",
              "label": "05 · Derivation",
              "title": "Snell's law of refraction from Fermat's principle",
              "legend": "Points \\(A\\) and \\(B\\) lie at heights \\(h_1, h_2\\) in media \\(n_1, n_2\\) with horizontal separation \\(L\\) and crossing point \\(x\\).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Refraction geometry between media n1 and n2\"><line x1=\"18\" y1=\"92\" x2=\"242\" y2=\"92\" class=\"lk\" stroke-width=\"2\"/><line x1=\"52\" y1=\"26\" x2=\"52\" y2=\"92\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"208\" y1=\"92\" x2=\"208\" y2=\"158\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"128\" y1=\"22\" x2=\"128\" y2=\"162\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><polyline points=\"52,26 128,92 208,158\" class=\"hk\" stroke-width=\"2.5\"/><circle cx=\"52\" cy=\"26\" r=\"3.5\" class=\"f\"/><circle cx=\"128\" cy=\"92\" r=\"4\" class=\"h\"/><circle cx=\"208\" cy=\"158\" r=\"3.5\" class=\"f\"/><text x=\"38\" y=\"28\" font-size=\"12\" class=\"t\">A</text><text x=\"36\" y=\"64\" font-size=\"11\" class=\"t\">h₁</text><text x=\"52\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">M</text><text x=\"90\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x</text><text x=\"115\" y=\"56\" font-size=\"11\" class=\"t\">θ₁</text><text x=\"138\" y=\"85\" font-size=\"11\" class=\"t\">R</text><text x=\"142\" y=\"132\" font-size=\"11\" class=\"t\">θ₂</text><text x=\"168\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">L-x</text><text x=\"208\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">N</text><text x=\"222\" y=\"130\" font-size=\"11\" class=\"t\">h₂</text><text x=\"220\" y=\"162\" font-size=\"12\" class=\"t\">B</text><text x=\"225\" y=\"42\" font-size=\"12\" class=\"t\">n₁</text><text x=\"225\" y=\"112\" font-size=\"12\" class=\"t\">n₂</text></svg>",
              "phases": [
                {
                  "name": "Optical path",
                  "why": "write L_op using Pythagoras in both triangles"
                },
                {
                  "name": "Stationary",
                  "why": "differentiate L_op with respect to x and set to zero"
                },
                {
                  "name": "Angles",
                  "why": "replace the triangle ratios with sin θ₁ and sin θ₂"
                },
                {
                  "name": "Snell's law",
                  "why": "equate the two products"
                }
              ],
              "steps": [
                {
                  "phase": "Optical path",
                  "tex": "L_{op} = n_1\\sqrt{x^2 + h_1^2} + n_2\\sqrt{(L - x)^2 + h_2^2}",
                  "note": "Write optical path \\(n_1 AR + n_2 RB\\) from the two right triangles."
                },
                {
                  "phase": "Stationary",
                  "move": {
                    "type": "differentiate",
                    "wrt": "x"
                  },
                  "tex": "\\frac{dL_{op}}{dx} = \\frac{n_1 x}{\\sqrt{x^2 + h_1^2}} - \\frac{n_2(L - x)}{\\sqrt{(L - x)^2 + h_2^2}}",
                  "note": "Differentiate with respect to \\(x\\); the second term gets a minus sign.",
                  "ask": {
                    "q": "How do we find the stationary ray path as \\(x\\) varies?",
                    "options": [
                      "Differentiate \\(L_{op}\\) with respect to \\(x\\)",
                      "Integrate \\(L_{op}\\) over \\(h_1\\)",
                      "Multiply both sides by \\(L\\)",
                      "Set \\(n_1 = n_2\\)"
                    ],
                    "answer": 0,
                    "why": "Fermat's principle requires the derivative of optical path with respect to \\(x\\) to vanish."
                  }
                },
                {
                  "move": {
                    "type": "evaluate",
                    "by": "\\frac{dL_{op}}{dx} = 0"
                  },
                  "tex": "0 = \\frac{n_1 x}{\\sqrt{x^2 + h_1^2}} - \\frac{n_2(L - x)}{\\sqrt{(L - x)^2 + h_2^2}}",
                  "note": "Set the derivative equal to zero for an extremum.",
                  "ask": {
                    "q": "What condition must \\(dL_{op}/dx\\) satisfy on the actual ray?",
                    "options": [
                      "\\(dL_{op}/dx = 0\\)",
                      "\\(dL_{op}/dx = 1\\)",
                      "\\(dL_{op}/dx = c\\)",
                      "\\(dL_{op}/dx = n_1\\)"
                    ],
                    "answer": 0,
                    "why": "At a stationary point of the optical path, the first derivative is zero."
                  }
                },
                {
                  "phase": "Angles",
                  "move": {
                    "type": "substitute",
                    "by": "\\sin\\theta_1,\\,\\sin\\theta_2"
                  },
                  "tex": "0 = n_1\\sin\\theta_1 - n_2\\sin\\theta_2",
                  "note": "In the triangles, \\(\\sin\\theta_1 = x/AR\\) and \\(\\sin\\theta_2 = (L-x)/RB\\).",
                  "ask": {
                    "q": "What does \\(x / \\sqrt{x^2 + h_1^2}\\) equal in triangle \\(AMR\\)?",
                    "options": [
                      "\\(\\sin\\theta_1\\)",
                      "\\(\\cos\\theta_1\\)",
                      "\\(\\tan\\theta_1\\)",
                      "\\(1 / \\sin\\theta_1\\)"
                    ],
                    "answer": 0,
                    "why": "Side \\(x\\) is opposite \\(\\theta_1\\) and \\(\\sqrt{x^2 + h_1^2}\\) is the hypotenuse."
                  }
                },
                {
                  "phase": "Snell's law",
                  "move": {
                    "type": "add",
                    "by": "n_2\\sin\\theta_2"
                  },
                  "tex": "n_2\\sin\\theta_2 = n_1\\sin\\theta_1",
                  "note": "Add \\(n_2\\sin\\theta_2\\) to both sides.",
                  "ask": {
                    "q": "Which move isolates the two refraction terms on opposite sides?",
                    "options": [
                      "Add \\(n_2\\sin\\theta_2\\) to both sides",
                      "Divide by \\(\\cos\\theta_1\\)",
                      "Subtract \\(n_1\\) from both sides",
                      "Square both sides"
                    ],
                    "answer": 0,
                    "why": "Adding \\(n_2\\sin\\theta_2\\) places \\(n_1\\sin\\theta_1\\) and \\(n_2\\sin\\theta_2\\) on opposite sides."
                  }
                },
                {
                  "move": {
                    "type": "swap"
                  },
                  "tex": "n_1\\sin\\theta_1 = n_2\\sin\\theta_2",
                  "note": "Snell's law of refraction."
                }
              ]
            },
            {
              "type": "math",
              "label": "06 · Example",
              "title": "Parabolic and elliptical reflectors",
              "tex": "S_1 P + S_2 P = \\text{constant} \\implies \\delta L_{\\text{op}} = 0",
              "body": "A paraboloid reflects parallel rays to its focus (dish antennas). An ellipse reflects every ray from focus \\(S_1\\) to focus \\(S_2\\) with equal travel time (ruby laser)."
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
              "picture": "Look at a small arc near the middle of a circle. Up close, its slope is gentle, and the height h divided by distance gives almost the exact angle in radians.",
              "example": "At an angle of 0.1 rad (about 5.7°), sin(0.1) = 0.0998 and tan(0.1) = 0.1003, so sin φ ≈ tan φ ≈ φ.",
              "bridge": "Under this small-angle rule, all paraxial rays from object point O take equal time and meet at a single image point I."
            },
            {
              "type": "info",
              "label": "01 · Definition",
              "title": "What is the paraxial approximation?",
              "defines": ["paraxial-approximation", "center-of-curvature"],
              "body": "The paraxial approximation assumes rays make very small angles with the optical axis so sine and tangent equal the angle in radians.",
              "tex": "\\sin\\phi \\approx \\tan\\phi \\approx \\phi",
              "examples": [
                "Small angles (rad)",
                "Single image point I",
                "Equal travel time"
              ]
            },
            {
              "type": "info",
              "label": "02 · Sign convention",
              "title": "Cartesian sign convention at pole P",
              "body": "Light enters from the left. With pole P as origin, distances to the right are positive, to the left are negative, and upward heights are positive.",
              "examples": [
                "Left of P: negative",
                "Right of P: positive",
                "Upward: positive"
              ],
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cartesian sign convention at spherical surface pole P\"><line x1=\"15\" y1=\"95\" x2=\"245\" y2=\"95\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 145 25 Q 110 95 145 165\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"28\" y1=\"60\" x2=\"95\" y2=\"60\" class=\"hk\" stroke-width=\"2.5\"/><polygon points=\"95,55 105,60 95,65\" class=\"h\"/><circle cx=\"128\" cy=\"95\" r=\"4\" class=\"f\"/><circle cx=\"205\" cy=\"95\" r=\"3.5\" class=\"f\"/><text x=\"65\" y=\"48\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Incident light</text><text x=\"62\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">u &lt; 0 (left)</text><text x=\"190\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">v, R &gt; 0 (right)</text><text x=\"122\" y=\"112\" text-anchor=\"end\" font-size=\"12\" class=\"t\">P</text><text x=\"205\" y=\"85\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">C</text><text x=\"155\" y=\"44\" font-size=\"11\" class=\"t\">+y upward</text><text x=\"155\" y=\"154\" font-size=\"11\" class=\"t\">-y downward</text></svg>"
            },
            {
              "type": "derivation",
              "label": "03 · Derivation",
              "title": "Gaussian formula for a single spherical surface",
              "legend": "Object \\(O\\) at distance \\(x = -u\\), image \\(I\\) at \\(y = v\\), center \\(C\\) at \\(r = R\\), ray height \\(h\\).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Paraxial refraction at a single spherical surface\"><line x1=\"14\" y1=\"105\" x2=\"246\" y2=\"105\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 128 24 Q 96 105 128 162\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"114\" y1=\"48\" x2=\"114\" y2=\"105\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"48\" x2=\"176\" y2=\"105\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"26,105 114,48 232,105\" class=\"hk\" stroke-width=\"2.5\"/><circle cx=\"26\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"114\" cy=\"48\" r=\"4\" class=\"h\"/><circle cx=\"176\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"232\" cy=\"105\" r=\"3.5\" class=\"f\"/><text x=\"24\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"56\" y=\"98\" font-size=\"11\" class=\"t\">α₁</text><text x=\"102\" y=\"42\" font-size=\"11\" class=\"t\">φ₁</text><text x=\"134\" y=\"52\" font-size=\"11\" class=\"t\">φ₂</text><text x=\"114\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">S</text><text x=\"122\" y=\"82\" font-size=\"11\" class=\"t\">h</text><text x=\"112\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">P</text><text x=\"162\" y=\"98\" font-size=\"11\" class=\"t\">β</text><text x=\"176\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">C</text><text x=\"210\" y=\"98\" font-size=\"11\" class=\"t\">α₂</text><text x=\"232\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"70\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x = -u</text><text x=\"146\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">r = R</text><text x=\"174\" y=\"164\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">y = v</text><text x=\"46\" y=\"36\" font-size=\"12\" class=\"t\">n₁</text><text x=\"205\" y=\"36\" font-size=\"12\" class=\"t\">n₂</text></svg>",
              "phases": [
                {
                  "name": "Paraxial Snell",
                  "why": "write Snell's law for small angles"
                },
                {
                  "name": "Exterior angles",
                  "why": "express φ₁ and φ₂ using h, x, y, and r"
                },
                {
                  "name": "Cancel h",
                  "why": "divide by h and collect terms in r"
                },
                {
                  "name": "Sign convention",
                  "why": "set x = -u, y = v, and r = R"
                }
              ],
              "steps": [
                {
                  "phase": "Paraxial Snell",
                  "tex": "n_1\\phi_1 = n_2\\phi_2",
                  "note": "For small paraxial angles, \\(\\sin\\phi \\approx \\phi\\) in Snell's law."
                },
                {
                  "phase": "Exterior angles",
                  "move": {
                    "type": "substitute",
                    "by": "\\phi_1 = \\beta + \\alpha_1,\\,\\phi_2 = \\beta - \\alpha_2"
                  },
                  "tex": "n_1(\\beta + \\alpha_1) = n_2(\\beta - \\alpha_2)",
                  "note": "Use exterior angles of triangles \\(OSC\\) and \\(ISC\\).",
                  "ask": {
                    "q": "In triangle \\(OSC\\), what does exterior angle \\(\\phi_1\\) equal?",
                    "options": [
                      "\\(\\beta + \\alpha_1\\)",
                      "\\(\\beta - \\alpha_1\\)",
                      "\\(\\alpha_1 - \\beta\\)",
                      "\\(\\alpha_1 + \\alpha_2\\)"
                    ],
                    "answer": 0,
                    "why": "Angle \\(\\phi_1\\) is the exterior angle to interior angles \\(\\alpha_1\\) and \\(\\beta\\)."
                  }
                },
                {
                  "move": {
                    "type": "substitute",
                    "by": "\\beta = \\frac{h}{r},\\,\\alpha_1 = \\frac{h}{x},\\,\\alpha_2 = \\frac{h}{y}"
                  },
                  "tex": "n_1\\left(\\frac{h}{r} + \\frac{h}{x}\\right) = n_2\\left(\\frac{h}{r} - \\frac{h}{y}\\right)",
                  "note": "Replace small angles by height \\(h\\) over horizontal distances.",
                  "ask": {
                    "q": "Under the paraxial approximation, how is angle \\(\\alpha_1\\) written?",
                    "options": [
                      "\\(h / x\\)",
                      "\\(x / h\\)",
                      "\\(h / r\\)",
                      "\\(r / y\\)"
                    ],
                    "answer": 0,
                    "why": "For small angles, \\(\\alpha_1 \\approx \\tan\\alpha_1 = h / x\\)."
                  }
                },
                {
                  "phase": "Cancel h",
                  "move": {
                    "type": "divide",
                    "by": "h"
                  },
                  "tex": "\\frac{n_1}{r} + \\frac{n_1}{x} = \\frac{n_2}{r} - \\frac{n_2}{y}",
                  "note": "Divide both sides by \\(h\\) so ray height cancels out.",
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
                  "move": {
                    "type": "rearrange"
                  },
                  "tex": "\\frac{n_2}{y} + \\frac{n_1}{x} = \\frac{n_2 - n_1}{r}",
                  "note": "Collect \\(x, y\\) terms on the left and \\(r\\) terms on the right."
                },
                {
                  "phase": "Sign convention",
                  "move": {
                    "type": "substitute",
                    "by": "x = -u,\\,y = v,\\,r = R"
                  },
                  "tex": "\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}",
                  "note": "Apply the Cartesian sign convention with \\(O\\) on the left (\\(u = -x\\)).",
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
              "picture": "Slice an apple straight through its core. A ray travelling inside that flat slice is a meridional ray. A ray entering off-center at an oblique tilt is a skew ray.",
              "example": "Every ray starting from an object point on the optical axis is automatically a meridional ray.",
              "bridge": "When a system has two spherical surfaces, the line joining their centers C₁ and C₂ defines the optical axis."
            },
            {
              "type": "info",
              "label": "04 · Definition",
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
              "label": "05 · Derivation",
              "title": "Mirror equation for a single spherical surface",
              "legend": "Spherical mirror \\(SPM\\) with object \\(O\\), center \\(C\\), image \\(I\\) all to the left of pole \\(P\\) (\\(u = -x, v = -y, R = -r\\)).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Paraxial reflection at a spherical mirror\"><line x1=\"14\" y1=\"105\" x2=\"240\" y2=\"105\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 195 24 Q 222 105 195 162\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"204\" y1=\"46\" x2=\"204\" y2=\"105\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><line x1=\"118\" y1=\"105\" x2=\"204\" y2=\"46\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"28,105 204,46 154,105\" class=\"hk\" stroke-width=\"2.5\"/><circle cx=\"28\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"118\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"154\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"204\" cy=\"46\" r=\"4\" class=\"h\"/><text x=\"28\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"66\" y=\"98\" font-size=\"11\" class=\"t\">α₁</text><text x=\"118\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">C</text><text x=\"134\" y=\"98\" font-size=\"11\" class=\"t\">β</text><text x=\"154\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"174\" y=\"98\" font-size=\"11\" class=\"t\">α₂</text><text x=\"204\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">S</text><text x=\"168\" y=\"54\" font-size=\"11\" class=\"t\">φ₁=φ₂</text><text x=\"214\" y=\"82\" font-size=\"11\" class=\"t\">h</text><text x=\"214\" y=\"122\" font-size=\"12\" class=\"t\">P</text><text x=\"116\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x = -u, r = -R, y = -v</text></svg>",
              "phases": [
                {
                  "name": "Reflection law",
                  "why": "equate angles of incidence and reflection"
                },
                {
                  "name": "Triangle angles",
                  "why": "write φ₁ and φ₂ in terms of α₁, α₂, and β"
                },
                {
                  "name": "Paraxial ratios",
                  "why": "substitute h/x, h/y, and h/r and cancel h"
                },
                {
                  "name": "Sign convention",
                  "why": "replace x, y, r with -u, -v, -R"
                }
              ],
              "steps": [
                {
                  "phase": "Reflection law",
                  "tex": "\\phi_1 = \\phi_2",
                  "note": "At point \\(S\\), the angle of incidence equals the angle of reflection."
                },
                {
                  "phase": "Triangle angles",
                  "move": {
                    "type": "substitute",
                    "by": "\\phi_1 = \\beta - \\alpha_1,\\,\\phi_2 = \\alpha_2 - \\beta"
                  },
                  "tex": "\\beta - \\alpha_1 = \\alpha_2 - \\beta",
                  "note": "Use exterior angles of triangles \\(OSC\\) and \\(CSI\\).",
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
                  "phase": "Paraxial ratios",
                  "move": {
                    "type": "substitute",
                    "by": "\\alpha_1 = \\frac{h}{x},\\,\\alpha_2 = \\frac{h}{y},\\,\\beta = \\frac{h}{r}"
                  },
                  "tex": "\\frac{h}{r} - \\frac{h}{x} = \\frac{h}{y} - \\frac{h}{r}",
                  "note": "Replace each small angle by height \\(h\\) divided by distance.",
                  "ask": {
                    "q": "What replaces \\(\\beta\\) in the paraxial approximation?",
                    "options": [
                      "\\(h / r\\)",
                      "\\(r / h\\)",
                      "\\(h / x\\)",
                      "\\(h / y\\)"
                    ],
                    "answer": 0,
                    "why": "Normal \\(CS\\) meets the axis at distance \\(r\\), so \\(\\beta \\approx h / r\\)."
                  }
                },
                {
                  "move": {
                    "type": "divide",
                    "by": "h"
                  },
                  "tex": "\\frac{1}{r} - \\frac{1}{x} = \\frac{1}{y} - \\frac{1}{r}",
                  "note": "Divide both sides by \\(h\\).",
                  "ask": {
                    "q": "What is the next step to simplify the height \\(h\\) out?",
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
                  "move": {
                    "type": "rearrange"
                  },
                  "tex": "\\frac{1}{x} + \\frac{1}{y} = \\frac{2}{r}",
                  "note": "Collect \\(1/x + 1/y\\) on the left and \\(2/r\\) on the right."
                },
                {
                  "phase": "Sign convention",
                  "move": {
                    "type": "substitute",
                    "by": "x = -u,\\,y = -v,\\,r = -R"
                  },
                  "tex": "\\frac{1}{u} + \\frac{1}{v} = \\frac{2}{R}",
                  "note": "With \\(O, I, C\\) on the left of \\(P\\), minus signs cancel on both sides.",
                  "ask": {
                    "q": "Which substitution converts the refraction formula into the mirror formula?",
                    "options": [
                      "\\(n_2 = -n_1\\)",
                      "\\(n_2 = n_1\\)",
                      "\\(n_2 = 0\\)",
                      "\\(R = \\infty\\)"
                    ],
                    "answer": 0,
                    "why": "Setting \\(n_2 = -n_1\\) in \\(\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}\\) gives \\(\\frac{1}{u} + \\frac{1}{v} = \\frac{2}{R}\\)."
                  }
                }
              ]
            },
            {
              "type": "math",
              "label": "06 · Example",
              "title": "Worked example: refraction at a spherical surface",
              "tex": "\\frac{1.5}{v} - \\frac{1.0}{-40} = \\frac{1.5 - 1.0}{+15} \\implies v = +180\\text{ cm}",
              "body": "An object in air (\\(n_1 = 1\\)) lies \\(40\\text{ cm}\\) left of a convex glass surface (\\(n_2 = 1.5, R = +15\\text{ cm}\\)). The paraxial image forms at \\(+180\\text{ cm}\\)."
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
              "why": "\\(\\frac{1}{v} = \\frac{2}{-60} - \\frac{1}{-80} = -\\frac{1}{30} + \\frac{1}{80} = -\\frac{5}{240}\\), so \\(v = -48\\text{ cm}\\)."
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
              "picture": "Hold a magnifying glass in your hand. The glass is only a few millimetres thick, while the object and image are tens of centimetres away.",
              "example": "Because thickness t is tiny, we measure object distance u and image distance v from one shared center P.",
              "bridge": "The first surface forms an intermediate image Q at v', which immediately acts as the object for the second surface to form final image I at v."
            },
            {
              "type": "info",
              "label": "01 · Definition",
              "title": "What is a thin spherical lens?",
              "defines": ["thin-lens"],
              "body": "A thin spherical lens is a medium bounded by two spherical refracting surfaces whose thickness is negligible compared to object, image, and curvature distances.",
              "tex": "t \\ll |u|,\\,|v|,\\,|R_1|,\\,|R_2|",
              "examples": [
                "Two spherical surfaces",
                "Axis joins C₁ and C₂",
                "Measured from P"
              ]
            },
            {
              "type": "derivation",
              "label": "02 · Derivation",
              "title": "Thin lens and Lensmaker's formula",
              "legend": "Lens of index \\(n_2\\) in medium \\(n_1\\) with radii \\(R_1, R_2\\), intermediate image \\(Q\\) at \\(v'\\), and relative index \\(n = n_2 / n_1\\).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Successive refractions at the two surfaces of a thin lens\"><line x1=\"12\" y1=\"98\" x2=\"248\" y2=\"98\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 110 28 Q 92 98 110 164\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 118 28 Q 136 98 118 164\" class=\"lk\" stroke-width=\"2\"/><line x1=\"118\" y1=\"50\" x2=\"238\" y2=\"98\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"24,98 110,50 118,50 188,98\" class=\"hk\" stroke-width=\"2.5\"/><circle cx=\"24\" cy=\"98\" r=\"3.5\" class=\"f\"/><circle cx=\"114\" cy=\"98\" r=\"3.5\" class=\"f\"/><circle cx=\"188\" cy=\"98\" r=\"4\" class=\"h\"/><circle cx=\"238\" cy=\"98\" r=\"3.5\" class=\"f\"/><text x=\"24\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"68\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">u &lt; 0</text><text x=\"114\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">n₂</text><text x=\"60\" y=\"36\" font-size=\"12\" class=\"t\">n₁</text><text x=\"175\" y=\"36\" font-size=\"12\" class=\"t\">n₁</text><text x=\"114\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">P</text><text x=\"152\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">v</text><text x=\"188\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"238\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">Q (v')</text><text x=\"130\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">R₁ &gt; 0, R₂ &lt; 0</text></svg>",
              "phases": [
                {
                  "name": "First surface",
                  "why": "refraction from n₁ into n₂ forms image Q at v'"
                },
                {
                  "name": "Add second",
                  "why": "add the second surface refraction from n₂ into n₁"
                },
                {
                  "name": "Divide by n₁",
                  "why": "introduce relative index n = n₂ / n₁"
                },
                {
                  "name": "Focal length",
                  "why": "define 1/f as the right-hand side"
                }
              ],
              "steps": [
                {
                  "phase": "First surface",
                  "tex": "\\frac{n_2}{v'} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1}",
                  "note": "First surface \\(R_1\\) refracts light from \\(n_1\\) into \\(n_2\\), forming \\(Q\\) at \\(v'\\)."
                },
                {
                  "phase": "Add second",
                  "move": {
                    "type": "add",
                    "by": "\\frac{n_1}{v} - \\frac{n_2}{v'}"
                  },
                  "tex": "\\frac{n_1}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1} + \\frac{n_1 - n_2}{R_2}",
                  "note": "Add the second surface equation \\(\\frac{n_1}{v} - \\frac{n_2}{v'} = \\frac{n_1 - n_2}{R_2}\\); \\(v'\\) cancels.",
                  "ask": {
                    "q": "Why do we add the two surface equations together?",
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
                  "phase": "Divide by n₁",
                  "move": {
                    "type": "divide",
                    "by": "n_1"
                  },
                  "tex": "\\frac{1}{v} - \\frac{1}{u} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
                  "note": "Divide by \\(n_1\\) and write \\(n = n_2 / n_1\\).",
                  "ask": {
                    "q": "What does \\((n_2 - n_1) / n_1\\) simplify to when \\(n = n_2 / n_1\\)?",
                    "options": [
                      "\\(n - 1\\)",
                      "\\(n + 1\\)",
                      "\\(1 - n\\)",
                      "\\(n_2\\)"
                    ],
                    "answer": 0,
                    "why": "Dividing term by term gives \\(n_2/n_1 - n_1/n_1 = n - 1\\)."
                  }
                },
                {
                  "phase": "Focal length",
                  "move": {
                    "type": "define",
                    "by": "\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)"
                  },
                  "tex": "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}",
                  "note": "Define focal power \\(1/f\\) to get the thin lens formula.",
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
              "label": "03 · Surrounding medium",
              "title": "When a biconvex lens diverges light",
              "body": "For a biconvex lens (R₁ > 0, R₂ < 0), 1/R₁ - 1/R₂ is positive. It converges light when n₂ > n₁, but diverges light when placed in a medium with n₁ > n₂.",
              "examples": [
                "n₂ > n₁: biconvex f > 0",
                "n₂ < n₁: biconvex f < 0",
                "n₂ < n₁: biconcave f > 0"
              ],
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Biconvex lens converging when n2 is greater than n1 and diverging when n2 is less than n1\"><line x1=\"14\" y1=\"50\" x2=\"120\" y2=\"50\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><path d=\"M 62 18 Q 50 50 62 82 Q 74 50 62 18\" class=\"s ok\"/><polyline points=\"18,32 62,32 108,50\" class=\"lk\" stroke-width=\"2\"/><polyline points=\"18,68 62,68 108,50\" class=\"lk\" stroke-width=\"2\"/><circle cx=\"108\" cy=\"50\" r=\"3.5\" class=\"f\"/><text x=\"62\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">n₂ &gt; n₁: converges</text><line x1=\"140\" y1=\"50\" x2=\"246\" y2=\"50\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><path d=\"M 192 18 Q 180 50 192 82 Q 204 50 192 18\" class=\"s ok\"/><polyline points=\"148,32 192,32 238,16\" class=\"hk\" stroke-width=\"2.5\"/><polyline points=\"148,68 192,68 238,84\" class=\"lk\" stroke-width=\"2\"/><line x1=\"156\" y1=\"50\" x2=\"192\" y2=\"32\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"50\" r=\"4\" class=\"h\"/><text x=\"192\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">n₂ &lt; n₁: diverges</text><text x=\"130\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">1/f = (n₂/n₁ - 1)(1/R₁ - 1/R₂)</text></svg>"
            },
            {
              "type": "intuition",
              "term": "principal-focus",
              "title": "The two special focal points of any lens",
              "meaning": "The first principal focus F₁ turns rays from a point into parallel rays, while the second principal focus F₂ collects incoming parallel rays to a point.",
              "picture": "Put a small bulb at F₁ on the left of a converging lens: the beam exits parallel like a searchlight. Shine parallel sunlight from the left: it focuses at F₂ on the right.",
              "example": "For a converging lens of focal length 20 cm in air, F₁ sits at f₁ = -20 cm (left) and F₂ sits at f₂ = +20 cm (right).",
              "bridge": "Setting v = ∞ gives u = f₁ (first focal length), and setting u = -∞ gives v = f₂ (second focal length)."
            },
            {
              "type": "info",
              "label": "04 · Definition",
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
              "label": "05 · Ray tracing",
              "title": "Three principal rays for graphical image construction",
              "body": "Ray 1 through F₁ exits parallel to the axis. Ray 2 parallel to the axis passes through F₂. Ray 3 through lens center P passes undeviated.",
              "examples": [
                "1: via F₁ → parallel",
                "2: parallel → via F₂",
                "3: via P → straight"
              ],
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three principal rays tracing an image through a converging lens\"><line x1=\"10\" y1=\"92\" x2=\"250\" y2=\"92\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 125 22 Q 112 92 125 162 Q 138 92 125 22\" class=\"s ok\"/><line x1=\"36\" y1=\"92\" x2=\"36\" y2=\"44\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"214\" y1=\"92\" x2=\"214\" y2=\"140\" class=\"lk\" stroke-width=\"2.5\"/><polyline points=\"36,44 125,44 214,140\" class=\"lk\" stroke-width=\"1.8\"/><polyline points=\"36,44 76,92 125,140 214,140\" class=\"lk\" stroke-width=\"1.8\"/><line x1=\"36\" y1=\"44\" x2=\"214\" y2=\"140\" class=\"hk\" stroke-width=\"2.5\"/><circle cx=\"76\" cy=\"92\" r=\"3.5\" class=\"f\"/><circle cx=\"125\" cy=\"92\" r=\"4\" class=\"h\"/><circle cx=\"174\" cy=\"92\" r=\"3.5\" class=\"f\"/><text x=\"36\" y=\"36\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">A</text><text x=\"36\" y=\"108\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"76\" y=\"108\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₁</text><text x=\"120\" y=\"108\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"174\" y=\"84\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₂</text><text x=\"214\" y=\"84\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"214\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">B</text><text x=\"82\" y=\"38\" font-size=\"11\" class=\"t\">2</text><text x=\"96\" y=\"70\" font-size=\"11\" class=\"t\">3</text><text x=\"96\" y=\"132\" font-size=\"11\" class=\"t\">1</text></svg>"
            },
            {
              "type": "math",
              "label": "06 · Different media",
              "title": "Thin lens with different media on its two sides",
              "tex": "\\frac{n_3}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1} + \\frac{n_3 - n_2}{R_2}",
              "body": "When medium \\(n_1\\) is on the left and \\(n_3\\) on the right, setting \\(v = \\infty\\) and \\(u = -\\infty\\) gives \\(f_2 / f_1 = -n_3 / n_1\\)."
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
              "label": "01 · Focal distances",
              "title": "Measuring object and image from the two foci",
              "body": "Instead of measuring from lens center P, Newton's method measures object position x₁ from F₁ (x₁ = u - f₁) and image position x₂ from F₂ (x₂ = v - f₂).",
              "examples": [
                "x₁ from F₁",
                "x₂ from F₂",
                "Right of focus: +"
              ],
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Distances x1 and x2 measured from principal foci F1 and F2\"><line x1=\"10\" y1=\"86\" x2=\"250\" y2=\"86\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 125 20 Q 113 86 125 152 Q 137 86 125 20\" class=\"s ok\"/><line x1=\"32\" y1=\"86\" x2=\"32\" y2=\"40\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"222\" y1=\"86\" x2=\"222\" y2=\"132\" class=\"lk\" stroke-width=\"2.5\"/><polyline points=\"32,40 125,40 222,132\" class=\"lk\" stroke-width=\"1.8\"/><polyline points=\"32,40 80,86 125,132 222,132\" class=\"hk\" stroke-width=\"2.2\"/><circle cx=\"80\" cy=\"86\" r=\"4\" class=\"h\"/><circle cx=\"170\" cy=\"86\" r=\"3.5\" class=\"f\"/><text x=\"32\" y=\"32\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">y</text><text x=\"32\" y=\"102\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"80\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₁</text><text x=\"120\" y=\"102\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"170\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₂</text><text x=\"222\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"236\" y=\"122\" font-size=\"11\" class=\"t\">-y'</text><text x=\"56\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-x₁</text><text x=\"102\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-f₁</text><text x=\"148\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">f₂</text><text x=\"196\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x₂</text></svg>"
            },
            {
              "type": "derivation",
              "label": "02 · Derivation",
              "title": "Newton's lens formula",
              "legend": "Object height \\(y\\) at \\(x_1\\) from \\(F_1\\), image height \\(y'\\) at \\(x_2\\) from \\(F_2\\), focal lengths \\(f_1, f_2\\).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Similar triangles at F1 and F2 for Newton lens formula\"><line x1=\"12\" y1=\"88\" x2=\"248\" y2=\"88\" class=\"lk\" stroke-width=\"2\"/><line x1=\"125\" y1=\"24\" x2=\"125\" y2=\"152\" class=\"lk\" stroke-width=\"2\"/><line x1=\"34\" y1=\"88\" x2=\"34\" y2=\"42\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"220\" y1=\"88\" x2=\"220\" y2=\"134\" class=\"lk\" stroke-width=\"2.5\"/><polyline points=\"34,42 125,42 220,134\" class=\"lk\" stroke-width=\"1.8\"/><polyline points=\"34,42 82,88 125,134 220,134\" class=\"hk\" stroke-width=\"2.4\"/><circle cx=\"82\" cy=\"88\" r=\"4\" class=\"h\"/><circle cx=\"168\" cy=\"88\" r=\"3.5\" class=\"f\"/><text x=\"24\" y=\"66\" font-size=\"11\" class=\"t\">y</text><text x=\"34\" y=\"104\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"82\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₁</text><text x=\"125\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">K</text><text x=\"118\" y=\"104\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"125\" y=\"166\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">L</text><text x=\"168\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₂</text><text x=\"220\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"236\" y=\"118\" font-size=\"11\" class=\"t\">-y'</text><text x=\"58\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-x₁</text><text x=\"104\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-f₁</text><text x=\"146\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">f₂</text><text x=\"194\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x₂</text></svg>",
              "phases": [
                {
                  "name": "First focus",
                  "why": "use similar triangles AOF₁ and LPF₁"
                },
                {
                  "name": "Second focus",
                  "why": "use similar triangles KPF₂ and BIF₂"
                },
                {
                  "name": "Cross-multiply",
                  "why": "obtain the general Newtonian formula f₁f₂ = x₁x₂"
                },
                {
                  "name": "Same medium",
                  "why": "set f₁ = -f and f₂ = f"
                }
              ],
              "steps": [
                {
                  "phase": "First focus",
                  "tex": "\\frac{-y'}{y} = \\frac{-f_1}{-x_1}",
                  "note": "Similar right triangles \\(AOF_1\\) and \\(LPF_1\\) share angle at \\(F_1\\)."
                },
                {
                  "phase": "Second focus",
                  "move": {
                    "type": "substitute",
                    "by": "\\frac{-y'}{y} = \\frac{x_2}{f_2}"
                  },
                  "tex": "\\frac{f_1}{x_1} = \\frac{x_2}{f_2}",
                  "note": "In similar triangles \\(KPF_2\\) and \\(BIF_2\\), \\(-y'/y = x_2/f_2\\).",
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
                  "phase": "Cross-multiply",
                  "move": {
                    "type": "multiply",
                    "by": "x_1 f_2"
                  },
                  "tex": "f_1 f_2 = x_1 x_2",
                  "note": "Multiply both sides by \\(x_1 f_2\\) to get the Newtonian lens formula.",
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
                  "move": {
                    "type": "substitute",
                    "by": "f_1 = -f,\\,f_2 = f"
                  },
                  "tex": "-f^2 = x_1 x_2",
                  "note": "When both sides have the same medium, \\(f_1 = -f\\) and \\(f_2 = f\\).",
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
                  "move": {
                    "type": "swap"
                  },
                  "tex": "x_1 x_2 = -f^2",
                  "note": "Thus \\(x_1\\) and \\(x_2\\) always have opposite signs.",
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
              "picture": "Stand in front of a camera lens. If the image on the sensor is half as tall and upside down, its lateral magnification is -0.5.",
              "example": "A positive magnification (m > 0) means an erect image; a negative magnification (m < 0) means an inverted image.",
              "bridge": "For a thin lens in one medium, similar triangles through pole P give m = y' / y = v / u = -f₁ / x₁ = -x₂ / f₂."
            },
            {
              "type": "info",
              "label": "03 · Definition",
              "title": "What is lateral magnification?",
              "defines": ["lateral-magnification"],
              "body": "Lateral magnification m is the ratio of image height y' to object height y, where positive m means erect and negative m means inverted.",
              "tex": "m = \\frac{y'}{y} = \\frac{v}{u} = -\\frac{f_1}{x_1} = -\\frac{x_2}{f_2}",
              "examples": [
                "m > 0: erect",
                "m < 0: inverted",
                "Two lenses: m = m₁m₂"
              ]
            },
            {
              "type": "derivation",
              "label": "04 · Derivation",
              "title": "Lateral magnification of spherical surface and thin lens",
              "legend": "Object \\(OA = y\\) at \\(u\\), center of curvature \\(C\\) at \\(R\\), image \\(IB = y'\\) at \\(v\\).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Imaging an object of height y by a single spherical refracting surface\"><line x1=\"14\" y1=\"96\" x2=\"246\" y2=\"96\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 110 22 Q 86 96 110 164\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"28\" y1=\"96\" x2=\"28\" y2=\"44\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"228\" y1=\"96\" x2=\"228\" y2=\"142\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"28\" y1=\"44\" x2=\"228\" y2=\"142\" class=\"hk\" stroke-width=\"2.4\"/><circle cx=\"98\" cy=\"96\" r=\"3.5\" class=\"f\"/><circle cx=\"154\" cy=\"96\" r=\"4\" class=\"h\"/><text x=\"28\" y=\"36\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">A (y)</text><text x=\"28\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"64\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-u</text><text x=\"94\" y=\"112\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"126\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">R</text><text x=\"154\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">C</text><text x=\"190\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">v</text><text x=\"228\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"228\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">B (-y')</text></svg>",
              "phases": [
                {
                  "name": "Triangles at C",
                  "why": "use similar triangles AOC and ICB through center C"
                },
                {
                  "name": "Surface law",
                  "why": "substitute the Gaussian surface relation"
                },
                {
                  "name": "Single surface",
                  "why": "obtain m = n₁v / (n₂u)"
                },
                {
                  "name": "Thin lens",
                  "why": "multiply m₁ and m₂ for the two lens surfaces"
                }
              ],
              "steps": [
                {
                  "phase": "Triangles at C",
                  "tex": "\\frac{-y'}{y} = \\frac{v - R}{-u + R}",
                  "note": "Ray \\(ACB\\) along the normal at \\(C\\) passes undeviated, giving similar triangles \\(AOC\\) and \\(ICB\\)."
                },
                {
                  "phase": "Surface law",
                  "move": {
                    "type": "substitute",
                    "by": "\\frac{v - R}{-u + R} = -\\frac{n_1 v}{n_2 u}"
                  },
                  "tex": "\\frac{-y'}{y} = -\\frac{n_1 v}{n_2 u}",
                  "note": "From \\(\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}\\), the ratio \\(\\frac{v-R}{-u+R}\\) equals \\(-\\frac{n_1 v}{n_2 u}\\).",
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
                  "phase": "Single surface",
                  "move": {
                    "type": "negate"
                  },
                  "tex": "m_1 = \\frac{n_1 v'}{n_2 u}",
                  "note": "Negate both sides and write \\(m_1 = y'/y\\) for the first lens surface (image at \\(v'\\)).",
                  "ask": {
                    "q": "What is the lateral magnification of a single surface from \\(n_1\\) to \\(n_2\\)?",
                    "options": [
                      "\\(n_1 v / (n_2 u)\\)",
                      "\\(n_2 v / (n_1 u)\\)",
                      "\\(v / u\\)",
                      "\\(-u / v\\)"
                    ],
                    "answer": 0,
                    "why": "Refraction into medium \\(n_2\\) weights the ratio \\(v/u\\) by \\(n_1/n_2\\)."
                  }
                },
                {
                  "phase": "Thin lens",
                  "move": {
                    "type": "multiply",
                    "by": "m_2 = \\frac{n_2 v}{n_1 v'}"
                  },
                  "tex": "m_1 m_2 = \\frac{n_1 v'}{n_2 u}\\cdot\\frac{n_2 v}{n_1 v'}",
                  "note": "Multiply by the second surface magnification \\(m_2 = \\frac{n_2 v}{n_1 v'}\\).",
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
                  "move": {
                    "type": "cancel"
                  },
                  "tex": "m = \\frac{v}{u}",
                  "note": "Both \\(n_1/n_2\\) and intermediate distance \\(v'\\) cancel out.",
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
              "label": "05 · Example",
              "title": "Two thin lenses separated by 8 cm (Example 4.3)",
              "tex": "v_1 = +40\\text{ cm},\\; u_2 = 40 - 8 = +32\\text{ cm} \\implies \\frac{1}{v_2} = \\frac{1}{32} - \\frac{1}{10} = -\\frac{22}{320}",
              "body": "Convex lens (\\(f_1 = +20\\text{ cm}\\)) with \\(u_1 = -40\\text{ cm}\\) gives \\(v_1 = +40\\text{ cm}\\). Concave lens (\\(f_2 = -10\\text{ cm}\\)) 8 cm behind has virtual object \\(u_2 = +32\\text{ cm}\\), giving \\(v_2 \\approx -14.5\\text{ cm}\\)."
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

### Part 2: `changes.diff`

```diff
--- a/skills/01-schema.md
+++ b/skills/01-schema.md
@@ -122,12 +122,13 @@
   "tex": "v^2 = 0 + 2(2)(25) = 100 \\Rightarrow v = 10\\ \\text{m/s}",
   "body": "From rest, \\(a = 2\\ \\text{m/s}^2\\) over \\(s = 25\\) m." }
 ```
 
-### `derivation` — a derived result (expands into 4 cards automatically)
+### `derivation` — a derived result on a single flip card
 See `02-derivations.md`. Shape:
 ```json
 { "type": "derivation", "title": "Bond energy, step by step",
   "legend": "\\(k\\) Coulomb constant, \\(r\\) separation.",
+  "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>",
   "phases": [ { "name": "Model", "why": "energy = attraction + repulsion" } ],
   "steps": [ { "tex": "...", "phase": "Model", "note": "..." },
              { "tex": "...", "move": { "type": "differentiate", "wrt": "r" }, "note": "...", "ask": { ... } } ] }
 ```
--- a/skills/02-derivations.md
+++ b/skills/02-derivations.md
@@ -1,19 +1,22 @@
 # 02 — Writing derivations
 
 You write **lines of TeX** and name the **move** that produced each line. The app animates
-everything: symbols that stay glide to their new place (and jump over `=` when they change side),
-new symbols write in, cancelled ones are struck through and vanish.
+everything on a single card after the student flips it: the `setup` SVG sits next to the
+equations on the same board, symbols glide to their new place, new symbols write in, and
+cancelled ones are struck through and vanish.
 
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
-7. Mark 3–6 phases with `"phase"` on the step where each phase starts. List the same phases in
-   `"phases"` with a one-line `why` each. Phases become the route strip and the recall card.
-8. Put **4** `ask` checkpoints (the maximum) on steps where the next move is a real decision, an identity
-   or a physical law is used. The question is asked *before* that step plays. 4 options, one right.
-   Two checkpoints is too few: every derivation should keep the learner answering.
+7. Include a `"setup"` SVG (following `03-svg-art.md`) showing the geometry or circuit used by
+   the derivation. It is drawn on the board beside the equations, and the part used in the
+   active step is highlighted.
+8. Mark 3–6 phases with `"phase"` on the step where each phase starts. List the same phases in
+   `"phases"` with a one-line `why` each. Do not create separate route, step, or full-page cards.
+9. Put **4** `ask` checkpoints on steps where the next move is a real decision, an identity
+   or a physical law is used. Ask **only about the next step** (what the next line is, or why
+   the next line is true; never ask about steps far away). Keep the question to one short line
+   (≤ 15 words) and each option to at most 6 words.
-9. **Derive, do not quote.** Circuit results (R, L, C, L-R, C-R, series LCR, parallel LC, resonance, Q,
+10. **Derive, do not quote.** Circuit results (R, L, C, L-R, C-R, series LCR, parallel LC, resonance, Q,
    bandwidth, power) start from the loop law or the admittance sum and reach the result in small steps.
    Optics results (single slit, two slit, N slit) start from the aperture integral or the sum of phasors
    and reach the intensity formula. Do not start from the finished formula.
--- a/skills/04-questions.md
+++ b/skills/04-questions.md
@@ -7,8 +7,10 @@
 
 - Ask the concept directly. No stories, no everyday-life wrappers, no pictures in questions.
   Good: "At the top of a projectile path, which velocity component is zero?"
   Bad: "Riya throws a cricket ball to her friend at the park…"
+- Keep every question to **one short line, at most about 15 words**.
+- Keep every option to **at most about 6 words** so the player can read and move on fast.
 - One idea per question. Answerable in under 60 seconds without a calculator unless the numbers are simple.
 - No trick wording, no double negatives, no "all/none of the above".
-- `why`: one or two sentences that teach, not just repeat the answer.
+- `why`: one or two short sentences that teach, not just repeat the answer.
 
@@ -26,5 +28,5 @@
 ## Per topic
 
 - For general syllabus topics: 3–5 questions at the end, mixing types: at least one `mcq`, and one `fill` or
   `number` when the topic has a key word or a calculation.
-- In a `derivation`, 2–4 `ask` checkpoints on real decision points ("what next?"), not on trivial algebra.
+- In a `derivation`, 4 `ask` checkpoints asking **only about the next step** (what the next line is, or why it is true).
 
@@ -42,5 +44,5 @@
 ## mcq
 
-- 4 options, similar length, all plausible. Wrong options are typical mistakes, not jokes.
+- 3 or 4 options (at most about 6 words each), similar length, all plausible. Only one is right.
 - `answer` = 0-based index of the right option. Vary its position across questions.
 - Options may contain inline maths: `"\\(5\\ \\text{m/s}^2\\)"`.
--- a/study-match/src/components/02-mathflow.js
+++ b/study-match/src/components/02-mathflow.js
@@ -21,6 +21,7 @@
   var SM = window.SM, T = SM.tex;
   var NS = 'http://www.w3.org/2000/svg';
-  var PAD = 2, GHOST = 0.8;
+  var PAD = 2, GHOST = 0.78, MIN_SCALE = 0.74;
   var SMOOTH = 'cubic-bezier(0.65, 0, 0.35, 1)', OUT = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
   var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
   var holder = null, holderSize = 0;
@@ -36,11 +37,51 @@
     return holder;
   }
 
+  /* split a long TeX expression only at top-level =, + or - (never inside a term or fraction) */
+  function splitLongTex(tex) {
+    var depth = 0, cuts = [], eqIdx = -1;
+    for (var i = 0; i < tex.length; i++) {
+      var ch = tex.charAt(i);
+      if (ch === '\\') {
+        var m = tex.slice(i).match(/^\\[a-zA-Z]+/);
+        if (m) {
+          if (m[0] === '\\left') depth++;
+          else if (m[0] === '\\right' && depth > 0) depth--;
+          i += m[0].length - 1;
+        } else i++;
+        continue;
+      }
+      if (ch === '{' || ch === '(' || ch === '[') depth++;
+      else if ((ch === '}' || ch === ')' || ch === ']') && depth > 0) depth--;
+      else if (depth === 0) {
+        if (ch === '=' && eqIdx < 0) eqIdx = i;
+        else if ((ch === '+' || ch === '-') && i > 2 && i < tex.length - 2) cuts.push(i);
+      }
+    }
+    var mid = tex.length / 2, best = -1, bestDist = Infinity;
+    cuts.forEach(function (idx) {
+      if (idx <= eqIdx + 2) return;
+      var d = Math.abs(idx - mid);
+      if (d < bestDist) { bestDist = d; best = idx; }
+    });
+    if (best > 0) return [tex.slice(0, best).trim(), tex.slice(best).trim()];
+    if (eqIdx > 0 && eqIdx < tex.length - 1) return [tex.slice(0, eqIdx + 1).trim(), tex.slice(eqIdx + 1).trim()];
+    return [tex];
+  }
+
   /* ---------- typeset one line and pull out its glyphs ---------- */
   var mcache = {};
-  function measure(tex, size) {
+  function measureRaw(tex, size) {
     var key = size + '|' + tex;
     if (mcache[key]) return mcache[key];
     var h = getHolder(size), node = null;
@@ -80,6 +121,42 @@
     return (mcache[key] = res);
   }
 
+  function measure(tex, size, maxW) {
+    var base = measureRaw(tex, size);
+    if (base.error || !maxW || (base.L + base.R) * MIN_SCALE <= maxW) return base;
+    var wkey = size + '|wrap|' + Math.round(maxW) + '|' + tex;
+    if (mcache[wkey]) return mcache[wkey];
+    var parts = splitLongTex(tex);
+    if (parts.length < 2) return base;
+    var m0 = measureRaw(parts[0], size), m1 = measureRaw(parts[1], size);
+    if (m0.error || m1.error) return base;
+    var rowGap = m0.D + m1.U + 8;
+    var shiftX = m0.ax - (m1.x0 !== undefined ? m1.x0 : (m1.ax - m1.L)) + 8;
+    var glyphs = m0.glyphs.map(function (g) {
+      return { sig: g.sig, node: g.node, m: g.m.slice(), x: g.x, y: g.y, w: g.w, h: g.h };
+    });
+    m1.glyphs.forEach(function (g) {
+      var m = g.m.slice();
+      m[4] += shiftX; m[5] += rowGap;
+      glyphs.push({ sig: g.sig, node: g.node, m: m, x: g.x + shiftX, y: g.y + rowGap, w: g.w, h: g.h });
+    });
+    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
+    glyphs.forEach(function (g) { x0 = Math.min(x0, g.x); y0 = Math.min(y0, g.y); x1 = Math.max(x1, g.x + g.w); y1 = Math.max(y1, g.y + g.h); });
+    var ax = (x0 + x1) / 2, ay = (y0 + y1) / 2;
+    return (mcache[wkey] = {
+      tex: tex, glyphs: glyphs, ax: ax, ay: ay, L: ax - x0, R: x1 - ax, U: ay - y0, D: y1 - ay,
+      svgHTML: m0.svgHTML, sx: m0.sx, sy: m0.sy, hasEq: m0.hasEq, wrapped: true
+    });
+  }
+
   /* ---------- automatic glyph matching ---------- */
   function match(A, B, kA, kB) {
     var a = A.glyphs, b = B.glyphs, n = a.length, m = b.length, i, j;
@@ -126,6 +203,7 @@
   function mount(root, spec) {
     var stage = root.querySelector('.mf-stage'), board = root.querySelector('.mf-board');
+    var setupEl = root.querySelector('.mf-setup');
     var noteEl = root.querySelector('.mf-note'), dotsEl = root.querySelector('.mf-dots');
     var phEl = root.querySelector('.mf-phases'), countEl = root.querySelector('.mf-count');
     var playBtn = root.querySelector('[data-mf="play"]');
@@ -165,6 +243,39 @@
       if (countEl) countEl.textContent = (Math.max(i, 0) + 1) + ' / ' + frames.length;
       if (playBtn) playBtn.innerHTML = playing ? '&#10073;&#10073;' : '&#9654;';
     }
+
+    /* highlight the part of the setup SVG used in the current step */
+    function highlightSetup(f) {
+      if (!setupEl) return;
+      var svg = setupEl.querySelector('svg');
+      if (!svg) return;
+      Array.prototype.forEach.call(svg.querySelectorAll('.mf-part-on'), function (el) { el.classList.remove('mf-part-on'); });
+      if (!f) return;
+      var st = spec.steps[f.si] || {};
+      var hay = (f.tex || '') + ' ' + (st.note || '') + ' ' + (st.focus || '');
+      var map = {
+        '\\theta_1': 'θ₁', '\\theta_2': 'θ₂', '\\phi_1': 'φ₁', '\\phi_2': 'φ₂',
+        '\\alpha_1': 'α₁', '\\alpha_2': 'α₂', '\\beta': 'β',
+        'h_1': 'h₁', 'h_2': 'h₂', 'R_1': 'R₁', 'R_2': 'R₂',
+        'F_1': 'F₁', 'F_2': 'F₂', 'f_1': 'f₁', 'f_2': 'f₂',
+        'x_1': 'x₁', 'x_2': 'x₂', 'n_1': 'n₁', 'n_2': 'n₂'
+      };
+      var want = {};
+      Object.keys(map).forEach(function (k) { if (hay.indexOf(k) !== -1) want[map[k]] = 1; });
+      ['h', 'x', 'y', 'r', 'R', 'u', 'v', 'f', 'O', 'I', 'P', 'C', 'S', 'A', 'B', 'Q'].forEach(function (sym) {
+        var re = new RegExp('(^|[^a-zA-Z\\\\])' + sym + '([^a-zA-Z0-9]|$)');
+        if (re.test(hay)) want[sym] = 1;
+      });
+      Array.prototype.forEach.call(svg.querySelectorAll('text'), function (t) {
+        var txt = (t.textContent || '').trim();
+        var hit = want[txt] || Object.keys(want).some(function (w) { return w.length > 1 && txt.indexOf(w) !== -1; });
+        if (hit) t.classList.add('mf-part-on');
+      });
+      Array.prototype.forEach.call(svg.querySelectorAll('[data-part]'), function (el) {
+        if (hay.indexOf(el.getAttribute('data-part')) !== -1) el.classList.add('mf-part-on');
+      });
+    }
+
     function setNote(html) {
       noteEl.style.opacity = '0';
       later.push(setTimeout(function () { noteEl.innerHTML = html; SM.typeset(noteEl); noteEl.style.opacity = '1'; }, 150));
@@ -173,26 +284,26 @@
     /* ---------- layout: one scale, one "=" column, room for the trail ---------- */
     function build() {
       var size = parseFloat(getComputedStyle(root).getPropertyValue('--mf-size')) || 18;
-      frames.forEach(function (f) { f.M = measure(f.tex, size); });
-      var availW = stage.clientWidth || 260;
+      var availW = stage.clientWidth || (board.clientWidth ? board.clientWidth - 16 : 248);
       builtW = availW;
+      var maxLineW = Math.max(150, availW - 14);
+      frames.forEach(function (f) { f.M = measure(f.tex, size, maxLineW); });
       var Lm = 10, Rm = 10;
       frames.forEach(function (f) { if (!f.op && !f.M.error) { Lm = Math.max(Lm, f.M.L); Rm = Math.max(Lm, f.M.R); } });
-      var kMain = Math.min(1, (availW - 16) / (Lm + Rm));
-      var eqX = (availW - (Lm + Rm) * kMain) / 2 + Lm * kMain;
+      var kMain = Math.max(MIN_SCALE, Math.min(1, maxLineW / Math.max(Lm + Rm, 1)));
+      var eqX = availW / 2;
       var Up = 10, Dn = 10, gU = 6, gD = 6;
       frames.forEach(function (f) {
         if (f.M.error) { f.k = kMain; return; }
-        f.k = Math.min(kMain, (eqX - 8) / Math.max(f.M.L, 1), (availW - eqX - 8) / Math.max(f.M.R, 1));
+        var fitK = maxLineW / Math.max(f.M.L + f.M.R, 1);
+        f.k = Math.max(MIN_SCALE, Math.min(kMain, fitK));
         Up = Math.max(Up, f.M.U * f.k); Dn = Math.max(Dn, f.M.D * f.k);
         if (!f.op) { gU = Math.max(gU, f.M.U * kMain * GHOST); gD = Math.max(gD, f.M.D * kMain * GHOST); }
       });
-      var slotH = gU + gD + 8;
-      var boardH = board.clientHeight || 300;
-      var nG = Math.max(0, Math.min(3, Math.floor((boardH - 24 - (Up + Dn + 16)) / slotH)));
-      var top = nG * slotH;
+      var slotH = Math.min(28, gU + gD + 6);
+      var nG = setupEl ? 1 : 2;
+      var top = nG * slotH + 4;
       L = { availW: availW, eqX: eqX, eqY: top + Up + 8, kMain: kMain, slotH: slotH, nG: nG, top: top, Up: Up, gD: gD };
-      stage.style.height = (top + Up + Dn + 16) + 'px';
+      stage.style.height = Math.max(76, top + Up + Dn + 14) + 'px';
       stage.innerHTML = '';
       overlays = [];
       frames.forEach(function (f) { f.sp = null; f.pos = null; f.ghost = null; });
@@ -220,7 +331,8 @@
       }
       var k = f.k, M = f.M;
       M.glyphs.forEach(function (g, j) {
-        var x = L.eqX + (g.x - M.ax) * k, y = L.eqY + (g.y - M.ay) * k, w = g.w * k, h = g.h * k;
+        var lineShift = ((M.R - M.L) * k) / 2;
+        var x = L.eqX - lineShift + (g.x - M.ax) * k, y = L.eqY + (g.y - M.ay) * k, w = g.w * k, h = g.h * k;
         var svg = document.createElementNS(NS, 'svg');
         svg.setAttribute('class', 'mf-sp' + (f.opSet && f.opSet[j] ? ' is-op' : ''));
         svg.setAttribute('width', (w + 2 * PAD).toFixed(2));
@@ -399,6 +511,7 @@
       api.i = i;
       placeTrail(i, instant);
       setNote(B.note);
+      highlightSetup(B);
       chrome(i);
       if (i === frames.length - 1) complete();
     }
@@ -406,6 +519,7 @@
     function complete() {
       if (completed) return;
       completed = true;
+      root.classList.add('is-completed');
       if (spec.onComplete) spec.onComplete();
     }
     function needsAsk(j) { var f = frames[j]; return f && f.ask && answered[f.si] === undefined; }
@@ -512,6 +626,12 @@
       return false;
     };
     api.isAsking = function () { return asking >= 0; };
+    api.practise = function () {
+      if (SM.isPaused && SM.isPaused()) return;
+      asking = -1; askEl.hidden = true; panel.hidden = false;
+      Object.keys(answered).forEach(function (k) { delete answered[k]; });
+      stopPlay(); reset(); api.play();
+    };
     api.isPlaying = function () { return playing; };
     api.pause = stopPlay;
 
@@ -519,8 +639,34 @@
       b.addEventListener('click', function (e) {
         e.stopPropagation();
         var a = b.getAttribute('data-mf');
-        if (a === 'replay') api.replay(); else if (a === 'next') api.next(); else if (a === 'prev') api.prev(); else if (a === 'play') api.toggle();
+        if (a === 'practise') api.practise();
+        else if (a === 'flip-back') api.flip(false);
+        else if (a === 'flip-open') api.flip(true);
+        else if (a === 'replay') api.replay();
+        else if (a === 'next') api.next();
+        else if (a === 'prev') api.prev();
+        else if (a === 'play') api.toggle();
       });
     });
+
+    var frontFace = root.querySelector('.mf-front'), backFace = root.querySelector('.mf-back');
+    api.flip = function (open) {
+      if (SM.cardLocked && root._c && SM.cardLocked(root._c)) return;
+      var willFlip = open === undefined ? !root.classList.contains('is-flipped') : !!open;
+      root.classList.toggle('is-flipped', willFlip);
+      if (frontFace) frontFace.inert = willFlip;
+      if (backFace) backFace.inert = !willFlip;
+      if (willFlip) {
+        setTimeout(function () {
+          rebuild();
+          if (api.i < 0) api.play();
+        }, 60);
+      } else stopPlay();
+    };
+    if (frontFace) {
+      root.addEventListener('click', function (e) {
+        if (root.classList.contains('is-flipped')) return;
+        if (e.target.closest('button, a, input, textarea, .term-link, summary')) return;
+        api.flip(true);
+      });
+    }
     dotsEl.addEventListener('click', function (e) {
       var d = e.target.closest('.mf-dot');
       if (!d) return;
@@ -539,7 +685,10 @@
     SM.mathReady(function (ok) {
       if (!ok) { noteEl.textContent = 'MathJax did not load. Check the internet connection and reload.'; return; }
       build();
-      if (completed) go(frames.length - 1, true);
+      if (completed) {
+        root.classList.add('is-completed');
+        go(frames.length - 1, true);
+      }
       else chrome(-1);
     });
     return api;
--- a/study-match/src/components/03-render.js
+++ b/study-match/src/components/03-render.js
@@ -20,7 +20,7 @@
   };
   SM.ICONS = ICONS;
   var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
-  SM.QUIZ = { mcq: 1, fill: 1, number: 1, order: 1, derive: 1, eval: 1 };
+  SM.QUIZ = { mcq: 1, fill: 1, number: 1, order: 1, derive: 1, derivation: 1, eval: 1 };
 
   /* ---------- index + expand ---------- */
   SM.SECTIONS = SM.data.sections || [];
@@ -33,10 +33,7 @@
       (sh.cards || []).forEach(function (c) {
         if (c.type === 'derivation') {
           var d = c, ph = d.phases || [];
           if (!ph.length) { var seen = {}; d.steps.forEach(function (s) { if (s.phase && !seen[s.phase]) { seen[s.phase] = 1; ph.push({ name: s.phase }); } }); }
-          out.push({ type: 'route', title: d.title || 'Where we are going', d: d, phases: ph });
-          out.push({ type: 'derive', title: d.title, d: d });
-          out.push({ type: 'page', title: 'The whole derivation', d: d });
-          if (ph.length >= 3) out.push({ type: 'order', title: 'Rebuild the route', items: ph.map(function (p) { return p.why ? p.name + ' \u2014 ' + p.why : p.name; }) });
+          c.type = 'derive'; c.d = d; c.phases = ph;
+          out.push(c);
         } else out.push(c);
       });
       sh.cards = out;
@@ -44,7 +41,7 @@
       var legacyIndex = 0;
       sh.cards.forEach(function (c) { c.id = sh.id + '-' + (c.uid ? 'extra-' + c.uid : c.type === 'intuition' ? 'intro-' + c.term : legacyIndex++); c.sheet = sh; SM.CARDS.push(c); });
       sh.outline = sh.outline || sh.cards.filter(function (c) { return c.type !== 'page' && c.type !== 'order'; }).map(function (c) {
-        return c.type === 'route' ? 'Goal and route' : c.type === 'derive' ? 'Step-by-step derivation' : c.type === 'question' ? 'The question' : c.type === 'eval' ? 'Mark your answer' : c.type === 'score' ? 'Your score' : c.type === 'key' ? 'Key points' : (SM.QUIZ[c.type] ? 'Quiz' : c.title);
+        return c.type === 'route' ? 'Goal and route' : c.type === 'derive' ? (c.title || 'Step-by-step derivation') : c.type === 'question' ? 'The question' : c.type === 'eval' ? 'Mark your answer' : c.type === 'score' ? 'Your score' : c.type === 'key' ? 'Key points' : (SM.QUIZ[c.type] ? 'Quiz' : c.title);
       }).filter(function (t, k, a) { return t && a.indexOf(t) === k; }).slice(0, 7);
       SM.SHEETS.push(sh);
     });
@@ -137,16 +134,34 @@
           '<ol class="route-list">' + c.phases.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' +
           (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') + '</div></article>';
       case 'derive':
-        return '<article class="card mf-card"' + a + '><div class="mf-top"><span class="card-index">Derivation</span><span class="mf-count"></span></div><div class="mf-phases"></div>' +
-          '<div class="mf-board"><div class="mf-stage"></div></div>' +
-          '<div class="mf-panel"><p class="mf-note">Press play. It stops at each decision so you can call the next move.</p><div class="mf-dots"></div>' +
+        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], setupSVG = c.d.setup || c.d.art || '';
+        return '<article class="card mf-card mf-flip-card"' + a + '><div class="mf-card-inner">' +
+          '<div class="mf-face mf-front">' +
+          '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span><button type="button" class="chip mf-flip-btn" data-mf="flip-open">Derive &#9654;</button></div>' +
+          '<h2 class="card-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
+          (setupSVG ? '<div class="art mf-front-art">' + setupSVG + '</div>' : '') +
+          '<div class="scroll-y mf-front-route">' +
+          '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || dst[0].tex) + '\\)</div></div>' +
+          '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || dst[dst.length - 1].tex) + '\\)</div></div>' +
+          (dph.length ? '<ol class="route-list">' + dph.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' : '') +
+          (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') +
+          '</div></div>' +
+          '<div class="mf-face mf-back" inert>' +
+          '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span>' +
+          '<div class="mf-top-actions"><span class="mf-count"></span><button type="button" class="chip" data-mf="flip-back">Concept</button></div></div>' +
+          '<h2 class="card-title mf-back-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
+          '<div class="mf-phases"></div>' +
+          '<div class="mf-board' + (setupSVG ? ' has-setup' : '') + '">' +
+          (setupSVG ? '<div class="mf-setup art">' + setupSVG + '</div>' : '') +
+          '<div class="mf-stage"></div></div>' +
+          '<div class="mf-panel"><p class="mf-note">Press play. It stops at each decision so you can call the next move.</p><div class="mf-dots"></div>' +
           '<div class="mf-ctrl"><button type="button" class="chip" data-mf="prev" aria-label="Previous step">&#9664;</button>' +
           '<button type="button" class="chip mf-play" data-mf="play" aria-label="Play or pause">&#9654;</button>' +
           '<button type="button" class="chip" data-mf="next" aria-label="Next step">&#9654;&#9654;</button>' +
-          '<button type="button" class="chip" data-mf="replay" aria-label="Replay from start">&#8634;</button></div></div>' +
+          '<button type="button" class="chip" data-mf="replay" aria-label="Replay from start">&#8634;</button>' +
+          '<button type="button" class="chip mf-practise" data-mf="practise">Practise again</button></div></div>' +
           '<div class="mf-ask" hidden><span class="mf-ask-tag">Your move</span><p class="mf-ask-q"></p><div class="mf-ask-opts"></div>' +
-          '<p class="mf-ask-why" hidden></p><button type="button" class="btn amber mf-ask-go" hidden>Continue &#9654;</button></div></article>';
+          '<p class="mf-ask-why" hidden></p><button type="button" class="btn amber mf-ask-go" hidden>Continue &#9654;</button></div></div></div></article>';
       case 'page':
         return '<article class="card"' + a + '><span class="card-index">One page</span><h2 class="card-title">' + c.title + '</h2>' +
           '<p class="card-body">Every line, aligned on the equals sign. The amber note is the move that produced it.</p>' +
--- a/study-match/src/components/04-shelf.js
+++ b/study-match/src/components/04-shelf.js
@@ -126,7 +126,10 @@
         SM.CARDS.forEach(function (c) {
           if (!c.el.classList.contains('is-flipped')) return;
           var r = c.el.getBoundingClientRect();
-          if (Math.abs(r.left + r.width / 2 - mid) > 40) SM.flipDefinition(c, false);
+          if (Math.abs(r.left + r.width / 2 - mid) > 40) {
+            if (c.type === 'derive' && c.player && c.player.flip) c.player.flip(false);
+            else if (SM.flipDefinition) SM.flipDefinition(c, false);
+          }
         });
       }, 160);
     });
@@ -186,6 +189,10 @@
       }
       var num = /^[1-6]$/.test(k) ? Number(k) - 1 : -1;
       if (c.type === 'derive' && c.player) {
+        if (!c.el.classList.contains('is-flipped') && (k === 'Enter' || k === ' ')) {
+          e.preventDefault(); if (c.player.flip) c.player.flip(true); return;
+        }
         if (num >= 0 || k === 'Enter') { e.preventDefault(); c.player.pick(num >= 0 ? num : 99); return; }
         if (k === ' ') { e.preventDefault(); c.player.toggle(); return; }
         if (k === '.' || k === 'n') { c.player.next(); return; }
--- a/study-match/src/styles/05-cards.css
+++ b/study-match/src/styles/05-cards.css
@@ -52,6 +52,18 @@
 .route-list b { color: var(--ink); }
 .legend { font-size: 12px; line-height: 1.45; color: var(--muted); }
 .page-math .mf-ann { fill: var(--hl); color: var(--hl); }
+.card.mf-flip-card { perspective: 1200px; padding: 0; background: transparent; border: 0; box-shadow: none; overflow: visible; }
+.mf-card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1); }
+.card.mf-flip-card.is-flipped .mf-card-inner { transform: rotateY(180deg); }
+.mf-face {
+  position: absolute; inset: 0; border-radius: 22px; border: 1px solid var(--line);
+  background: var(--card); color: var(--ink); box-shadow: var(--shadow);
+  padding: 14px 12px; display: flex; flex-direction: column; gap: 8px; overflow: hidden;
+  backface-visibility: hidden; -webkit-backface-visibility: hidden;
+}
+.mf-back { transform: rotateY(180deg); }
+.mf-front-art { max-height: 120px; padding: 8px; }
+.mf-front-route { display: flex; flex-direction: column; gap: 7px; }
 
 /* Order card */
 .order-list { display: flex; flex-direction: column; gap: 7px; }
--- a/study-match/src/styles/07-mathflow.css
+++ b/study-match/src/styles/07-mathflow.css
@@ -1,38 +1,62 @@
 /* MathFlow player card */
-.card.mf-card { padding: 14px 12px; gap: 9px; }
+:root {
+  --mf-given: var(--ink);
+  --mf-step: #b45309;
+  --mf-cancel: #be123c;
+  --mf-result: #0369a1;
+  --mf-result-bg: rgba(3, 105, 161, 0.14);
+}
+[data-theme="dark"] {
+  --mf-given: #f1f5f9;
+  --mf-step: #fbbf24;
+  --mf-cancel: #fb7185;
+  --mf-result: #38bdf8;
+  --mf-result-bg: rgba(56, 189, 248, 0.18);
+}
+.card.mf-card:not(.mf-flip-card) { padding: 14px 12px; gap: 9px; }
 .mf-top { display: flex; justify-content: space-between; align-items: center; gap: 6px; }
+.mf-top-actions { display: flex; align-items: center; gap: 6px; }
+.mf-back-title { font-size: 14px; font-weight: 800; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
+.mf-flip-btn { background: var(--violet); color: var(--on-violet); }
 .mf-count { font-size: 11px; font-weight: 700; color: var(--muted); font-variant-numeric: tabular-nums; }
-.mf-phases { display: flex; gap: 5px; overflow-x: auto; scrollbar-width: none; }
+.mf-phases { display: flex; gap: 5px; overflow-x: auto; scrollbar-width: none; flex: 0 0 auto; }
 .mf-phases::-webkit-scrollbar { display: none; }
 .mf-ph { flex: 0 0 auto; font-size: 10.5px; font-weight: 700; padding: 4px 8px; border-radius: 999px; background: var(--lav); color: var(--muted); transition: background 0.3s, color 0.3s; }
-.mf-ph.is-past { color: var(--sage); }
+.mf-ph.is-past { color: var(--mf-result); box-shadow: inset 0 0 0 1px var(--mf-result); }
 .mf-ph.is-now { background: var(--violet); color: var(--on-violet); }
 .mf-board {
-  flex: 1 1 auto; min-height: 110px; display: flex; flex-direction: column; justify-content: center;
+  flex: 1 1 auto; min-height: 104px; display: flex; flex-direction: column; justify-content: flex-start;
   border-radius: 16px; background-color: var(--lav);
   background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
-  background-size: 16px 16px; padding: 8px 0; position: relative; overflow: hidden;
+  background-size: 16px 16px; padding: 6px 6px; gap: 4px; position: relative; overflow: hidden;
 }
-.mf-stage { position: relative; width: 100%; pointer-events: none; user-select: none; }
-.mf-sp { position: absolute; left: 0; top: 0; overflow: visible; color: var(--ink); transform-origin: 2px 2px; transition: color 0.6s ease; will-change: transform, opacity; }
+.mf-setup { flex: 0 0 auto; height: 96px; max-height: 36%; padding: 4px 8px; border-radius: 12px; background: var(--card); }
+.mf-setup svg .mf-part-on { fill: var(--mf-step) !important; font-weight: 800; text-decoration: underline; }
+.mf-stage { position: relative; width: 100%; flex: 1 1 auto; pointer-events: none; user-select: none; }
+.mf-sp { position: absolute; left: 0; top: 0; overflow: visible; color: var(--mf-given); transform-origin: 2px 2px; transition: color 0.6s ease; will-change: transform, opacity; }
 .mf-sp path, .mf-sp rect { fill: currentColor; stroke: none; }
-.mf-sp.is-new, .mf-sp.is-op { color: var(--hl); }
-.mf-sp.is-out { color: var(--coral); }
+.mf-sp.is-new, .mf-sp.is-op { color: var(--mf-step); }
+.mf-sp.is-out { color: var(--mf-cancel); }
 .mf-ghost { position: absolute; left: 0; top: 0; color: var(--ink-2); transform-origin: 0 0; white-space: nowrap;
   transition: transform 0.75s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.75s ease; }
 .mf-ghost svg { display: block; }
-.mf-strike { position: absolute; left: 0; top: 0; height: 2.5px; border-radius: 2px; background: var(--coral); transform-origin: 0 50%; }
+.mf-strike { position: absolute; left: 0; top: 0; height: 2.5px; border-radius: 2px; background: var(--mf-cancel); transform-origin: 0 50%; }
 .mf-box { position: absolute; left: 0; top: 0; overflow: visible; }
-.mf-box rect { fill: none; stroke: var(--amber); stroke-width: 2.2; }
+.mf-box rect { fill: none; stroke: var(--mf-result); stroke-width: 2.4; }
 .mf-err { position: absolute; left: 6px; right: 6px; font: 600 11px/1.4 ui-monospace, Menlo, monospace; color: var(--coral); background: var(--coral-bg); border-radius: 8px; padding: 6px 8px; white-space: pre-wrap; word-break: break-all; }
-.mf-note { font-size: 13px; line-height: 1.45; font-weight: 600; color: var(--ink-2); min-height: 38px; transition: opacity 0.2s ease; }
+.mf-note { font-size: 12.5px; line-height: 1.38; font-weight: 600; color: var(--ink-2); min-height: 32px; transition: opacity 0.2s ease; }
 .mf-note b { color: var(--ink); }
 .mf-dots { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; }
 .mf-dot { appearance: none; border: 0; cursor: pointer; height: 7px; width: 7px; border-radius: 999px; background: var(--lav-2); padding: 0; transition: width 0.3s ease, background 0.3s; }
 .mf-dot.is-ask { box-shadow: 0 0 0 2px var(--amber-bg), 0 0 0 3px var(--amber); }
 .mf-dot.is-done { background: var(--violet); opacity: 0.45; }
 .mf-dot.is-now { width: 18px; background: var(--violet); opacity: 1; }
-.mf-ctrl { display: flex; gap: 6px; align-items: center; }
-.mf-ctrl .chip { min-width: 38px; text-align: center; padding: 7px 8px; }
+.mf-ctrl { display: flex; gap: 5px; align-items: center; flex-wrap: wrap; }
+.mf-ctrl .chip { min-width: 34px; text-align: center; padding: 6px 8px; }
 .mf-ctrl .mf-play { background: var(--violet); color: var(--on-violet); }
-.mf-panel, .mf-ask { display: flex; flex-direction: column; gap: 8px; }
+.mf-practise { display: none; margin-left: auto; background: var(--mf-result-bg); color: var(--mf-result); }
+.card.mf-card.is-completed .mf-practise { display: inline-block; }
+.mf-panel, .mf-ask { display: flex; flex-direction: column; gap: 6px; flex: 0 0 auto; }
 .mf-ask[hidden], .mf-panel[hidden] { display: none; }
 .mf-ask-tag { align-self: flex-start; font-size: 10px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; background: var(--amber-bg); color: var(--hl); border-radius: 999px; padding: 4px 9px; }
-.mf-ask-q { font-size: 14px; font-weight: 700; line-height: 1.35; }
+.mf-ask-q { font-size: 13px; font-weight: 700; line-height: 1.3; }
 .mf-ask-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
-.mf-ask-opts button { appearance: none; border: 0; cursor: pointer; background: var(--lav); color: var(--ink); border-radius: 11px; padding: 8px 9px; font-size: 12.5px; font-weight: 600; text-align: left; line-height: 1.3; overflow-wrap: anywhere; }
-.mf-ask-opts button.is-correct { background: var(--sage-bg); box-shadow: inset 0 0 0 2px var(--sage); }
-.mf-ask-opts button.is-wrong { background: var(--coral-bg); box-shadow: inset 0 0 0 2px var(--coral); }
+.mf-ask-opts button { appearance: none; border: 0; cursor: pointer; background: var(--lav); color: var(--ink); border-radius: 11px; padding: 7px 8px; font-size: 12px; font-weight: 600; text-align: left; line-height: 1.25; overflow-wrap: anywhere; }
+.mf-ask-opts button.is-correct { background: var(--mf-result-bg); box-shadow: inset 0 0 0 2px var(--mf-result); }
+.mf-ask-opts button.is-wrong { background: var(--coral-bg); box-shadow: inset 0 0 0 2px var(--mf-cancel); text-decoration: line-through; }
 .mf-ask-why { font-size: 12.5px; line-height: 1.4; color: var(--ink-2); font-weight: 600; }
 .mf-ask-why[hidden], .mf-ask-go[hidden] { display: none; }
```

---

### Part 3: Summary of Changes

#### What was changed for a, b, c and d
- **a. MathFlow board, wrapping, and colours (`02-mathflow.js`, `07-mathflow.css`):**
  - Anchored the board layout (`justify-content: flex-start`) and fixed the horizontal center (`eqX = availW / 2`) and vertical trail offset so the active equation sits in the same place every time instead of shifting between steps or cards.
  - Added a minimum readable scale (`MIN_SCALE = 0.74`) and `splitLongTex(tex)` so long lines wrap only at top-level `=`, `+`, or `-` signs (never inside braces, brackets, or fractions).
  - Defined a consistent colour-blind-safe palette in both light and dark modes (`--mf-given` for existing terms, `--mf-step` amber for the active operation, `--mf-cancel` vermilion with a diagonal strike-through for cancelled terms, and `--mf-result` cerulean blue for completed phases, the final boxed equation, and correct checkpoint choices).
- **b. Setup pictures on the maths board (`02-mathflow.js`, `03-render.js`, `07-mathflow.css`):**
  - Rendered the derivation's `setup` SVG inside `.mf-board` (`.mf-setup`) above the animated equation stage so both diagram and equations fit on a single phone screen without scrolling.
  - Added `highlightSetup(f)` in `02-mathflow.js` to highlight the diagram labels or `[data-part]` elements used by the current step (`st.tex`, `st.note`, or `st.focus`).
- **c. Single-card flip derivation (`02-mathflow.js`, `03-render.js`, `04-shelf.js`, `05-cards.css`, `07-mathflow.css`):**
  - Removed the four-card expansion (`route`, `derive`, `page`, `order`) in `03-render.js` so each `derivation` stays one card (`type: 'derive'`).
  - Built a 3D flip card (`.mf-flip-card`) with the concept title, `setup` SVG, start/goal equations, and phase route on the front face, and the interactive MathFlow player, `setup` SVG, phase bar, `ask` checkpoints, and "Practise again" button (`[data-mf="practise"]`) on the back face.
  - Wired off-centre scroll flip-back and keyboard Enter/Space flip-open in `04-shelf.js`.
- **d. Shorter quiz and step questions (`01-schema.md`, `02-derivations.md`, `04-questions.md`):**
  - Updated `04-questions.md` to require one-line questions (at most ~15 words), short options (at most ~6 words), and 1–2 short sentences for `why`.
  - Updated `01-schema.md` and `02-derivations.md` to describe the single-card flip derivation, the `setup` SVG field, and checkpoints that ask only about the next step.

#### Anything that could not be done
- Because this environment does not have a live shell to execute `python3 build.py --check --strict`, the JSON schema, TeX delimiter balance, backslash escaping, SVG allowed tags/classes/bounds, and diff line counts were verified directly against all rules in `skills/01-schema.md` through `skills/08-definition-recall.md`.
- As requested in `prompt.md`, Section 4.1 is not present in the uploaded unit PDFs, so it was not invented and a note recording that Section 4.1 is missing was placed in the Unit 2 sheet's `source` field.
