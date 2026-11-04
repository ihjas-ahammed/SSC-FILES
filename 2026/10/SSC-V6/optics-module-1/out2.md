### 1. `study-match/data/data.json`

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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Point source P shining through a wide aperture onto screen SS prime\"><line x1=\"115\" y1=\"16\" x2=\"115\" y2=\"58\" class=\"lk\" stroke-width=\"3\"/><line x1=\"115\" y1=\"122\" x2=\"115\" y2=\"164\" class=\"lk\" stroke-width=\"3\"/><line x1=\"215\" y1=\"16\" x2=\"215\" y2=\"164\" class=\"lk\" stroke-width=\"2\"/><polygon points=\"32,90 215,34 215,146\" class=\"s\"/><line x1=\"32\" y1=\"90\" x2=\"215\" y2=\"34\" class=\"lk\" stroke-width=\"1.8\"/><line x1=\"32\" y1=\"90\" x2=\"215\" y2=\"146\" class=\"lk\" stroke-width=\"1.8\"/><line x1=\"32\" y1=\"90\" x2=\"215\" y2=\"90\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 62 81 A 32 32 0 0 1 62 99\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"32\" cy=\"90\" r=\"4\" class=\"h\"/><text x=\"20\" y=\"94\" font-size=\"12\" class=\"t\">P</text><text x=\"115\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">A</text><text x=\"115\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">B</text><text x=\"162\" y=\"84\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Ray (λ→0)</text><text x=\"228\" y=\"28\" font-size=\"11\" class=\"t\">S</text><text x=\"228\" y=\"160\" font-size=\"11\" class=\"t\">S'</text></svg>",
              "picture": "Look at the sharp cone of rays from P through wide opening AB onto screen SS'.",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Physical thickness d in glass compared with longer optical path n times d in vacuum\"><rect x=\"65\" y=\"24\" width=\"80\" height=\"52\" rx=\"6\" class=\"s ok\"/><line x1=\"24\" y1=\"50\" x2=\"185\" y2=\"50\" class=\"lk\" stroke-width=\"2.2\"/><line x1=\"65\" y1=\"130\" x2=\"185\" y2=\"130\" class=\"hk\" stroke-width=\"3\"/><circle cx=\"65\" cy=\"130\" r=\"4\" class=\"h\"/><circle cx=\"185\" cy=\"130\" r=\"3.5\" class=\"f\"/><line x1=\"65\" y1=\"84\" x2=\"65\" y2=\"142\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><line x1=\"145\" y1=\"84\" x2=\"145\" y2=\"112\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><text x=\"105\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Glass (n = 1.5)</text><text x=\"105\" y=\"68\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">d = 2 cm</text><text x=\"125\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">L_op = n d = 3 cm</text><text x=\"125\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Same travel time τ in vacuum</text></svg>",
              "picture": "Compare the 2 cm glass block (top) with the 3 cm vacuum path (bottom) that takes the exact same time.",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Actual stationary ray path ACB compared with nearby dashed trial paths\"><path d=\"M 30 138 Q 115 32 230 42\" class=\"gk\" stroke-dasharray=\"5 4\" stroke-width=\"1.8\"/><path d=\"M 30 138 Q 130 92 230 42\" class=\"hk\" stroke-width=\"2.8\"/><path d=\"M 30 138 Q 148 148 230 42\" class=\"gk\" stroke-dasharray=\"5 4\" stroke-width=\"1.8\"/><path d=\"M 56 116 A 34 34 0 0 1 64 134\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"30\" cy=\"138\" r=\"4\" class=\"h\"/><circle cx=\"230\" cy=\"42\" r=\"4\" class=\"f\"/><text x=\"18\" y=\"148\" font-size=\"12\" class=\"t\">A</text><text x=\"238\" y=\"40\" font-size=\"12\" class=\"t\">B</text><text x=\"112\" y=\"52\" font-size=\"11\" class=\"t\">Trial path C'</text><text x=\"128\" y=\"88\" font-size=\"12\" class=\"t\">Actual ray C</text><text x=\"162\" y=\"138\" font-size=\"11\" class=\"t\">δ ∫ n ds = 0</text></svg>",
              "picture": "Look at the solid amber ray ACB between the two dashed trial paths where small shifts do not change travel time.",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Reflection at plane mirror MN using image point A prime\"><line x1=\"20\" y1=\"115\" x2=\"240\" y2=\"115\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"165\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"135\" y1=\"35\" x2=\"135\" y2=\"115\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"165\" x2=\"135\" y2=\"115\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"60,40 135,115 215,35\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 118 98 A 24 24 0 0 1 135 91\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 135 91 A 24 24 0 0 1 152 98\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"40\" r=\"3.5\" class=\"f\"/><circle cx=\"60\" cy=\"165\" r=\"3.5\" class=\"f\"/><circle cx=\"135\" cy=\"115\" r=\"4\" class=\"h\"/><circle cx=\"215\" cy=\"35\" r=\"3.5\" class=\"f\"/><text x=\"46\" y=\"42\" font-size=\"12\" class=\"t\">A</text><text x=\"42\" y=\"168\" font-size=\"12\" class=\"t\">A'</text><text x=\"68\" y=\"110\" font-size=\"11\" class=\"t\">R</text><text x=\"135\" y=\"132\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">P</text><text x=\"135\" y=\"28\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">S</text><text x=\"224\" y=\"38\" font-size=\"12\" class=\"t\">B</text><text x=\"118\" y=\"78\" font-size=\"12\" class=\"t\">i</text><text x=\"152\" y=\"78\" font-size=\"12\" class=\"t\">r</text><text x=\"232\" y=\"132\" text-anchor=\"end\" font-size=\"11\" class=\"t\">M → N</text></svg>"
            },
            {
              "type": "derivation",
              "label": "05 · Derivation",
              "title": "Snell's law of refraction from Fermat's principle",
              "legend": "Points \\(A\\) and \\(B\\) lie at heights \\(h_1, h_2\\) in media \\(n_1, n_2\\) with horizontal separation \\(L\\) and crossing point \\(x\\).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Refraction geometry between media n1 and n2\"><line x1=\"18\" y1=\"92\" x2=\"242\" y2=\"92\" class=\"lk\" stroke-width=\"2\"/><line x1=\"52\" y1=\"26\" x2=\"52\" y2=\"92\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"208\" y1=\"92\" x2=\"208\" y2=\"158\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><line x1=\"128\" y1=\"22\" x2=\"128\" y2=\"162\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><polyline points=\"52,26 128,92 208,158\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 52 50 A 24 24 0 0 0 70 42\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 108 75 A 26 26 0 0 1 128 66\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 128 118 A 26 26 0 0 0 148 109\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"52\" cy=\"26\" r=\"3.5\" class=\"f\"/><circle cx=\"128\" cy=\"92\" r=\"4\" class=\"h\"/><circle cx=\"208\" cy=\"158\" r=\"3.5\" class=\"f\"/><text x=\"38\" y=\"28\" font-size=\"12\" class=\"t\">A</text><text x=\"36\" y=\"64\" font-size=\"11\" class=\"t\">h₁</text><text x=\"52\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">M</text><text x=\"90\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x</text><text x=\"115\" y=\"56\" font-size=\"11\" class=\"t\">θ₁</text><text x=\"138\" y=\"85\" font-size=\"11\" class=\"t\">R</text><text x=\"142\" y=\"132\" font-size=\"11\" class=\"t\">θ₂</text><text x=\"168\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">L-x</text><text x=\"208\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">N</text><text x=\"222\" y=\"130\" font-size=\"11\" class=\"t\">h₂</text><text x=\"220\" y=\"162\" font-size=\"12\" class=\"t\">B</text><text x=\"225\" y=\"42\" font-size=\"12\" class=\"t\">n₁</text><text x=\"225\" y=\"112\" font-size=\"12\" class=\"t\">n₂</text></svg>",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Paraxial ray making a small angle alpha with the optical axis at height h\"><line x1=\"16\" y1=\"105\" x2=\"244\" y2=\"105\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 132 24 Q 104 105 132 162\" class=\"lk\" stroke-width=\"2.4\"/><line x1=\"118\" y1=\"56\" x2=\"118\" y2=\"105\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><polyline points=\"28,105 118,56 226,105\" class=\"hk\" stroke-width=\"2.6\"/><path d=\"M 56 90 A 32 32 0 0 1 60 105\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 196 105 A 30 30 0 0 1 199 93\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"28\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"118\" cy=\"56\" r=\"4\" class=\"h\"/><circle cx=\"226\" cy=\"105\" r=\"3.5\" class=\"f\"/><text x=\"28\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"68\" y=\"98\" font-size=\"11\" class=\"t\">α</text><text x=\"126\" y=\"84\" font-size=\"11\" class=\"t\">h</text><text x=\"118\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">P</text><text x=\"226\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"130\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Small α: sin α ≈ tan α ≈ h/x</text></svg>",
              "picture": "Look at the small angle arc α near O where height h divided by distance x gives the angle in radians.",
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
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Paraxial refraction at a single spherical surface\"><line x1=\"14\" y1=\"105\" x2=\"246\" y2=\"105\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 128 24 Q 96 105 128 162\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"114\" y1=\"48\" x2=\"114\" y2=\"105\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><line x1=\"90\" y1=\"26\" x2=\"176\" y2=\"105\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"26,105 114,48 232,105\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 48 91 A 26 26 0 0 1 52 105\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 96 60 A 22 22 0 0 1 98 33\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 130 63 A 22 22 0 0 0 134 58\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 152 105 A 24 24 0 0 1 158 88\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 206 105 A 26 26 0 0 1 209 94\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"26\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"114\" cy=\"48\" r=\"4\" class=\"h\"/><circle cx=\"176\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"232\" cy=\"105\" r=\"3.5\" class=\"f\"/><text x=\"24\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"58\" y=\"98\" font-size=\"11\" class=\"t\">α₁</text><text x=\"88\" y=\"48\" font-size=\"11\" class=\"t\">φ₁</text><text x=\"138\" y=\"54\" font-size=\"11\" class=\"t\">φ₂</text><text x=\"114\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">S</text><text x=\"122\" y=\"82\" font-size=\"11\" class=\"t\">h</text><text x=\"112\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">P</text><text x=\"144\" y=\"98\" font-size=\"11\" class=\"t\">β</text><text x=\"176\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">C</text><text x=\"198\" y=\"98\" font-size=\"11\" class=\"t\">α₂</text><text x=\"232\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"70\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x = -u</text><text x=\"146\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">r = R</text><text x=\"174\" y=\"164\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">y = v</text><text x=\"46\" y=\"36\" font-size=\"12\" class=\"t\">n₁</text><text x=\"205\" y=\"36\" font-size=\"12\" class=\"t\">n₂</text></svg>",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Meridional ray staying inside the axial plane versus a skew ray twisting out\"><polygon points=\"24,118 76,34 236,34 184,118\" class=\"s ok\"/><line x1=\"34\" y1=\"76\" x2=\"226\" y2=\"76\" class=\"lk\" stroke-width=\"2\"/><polyline points=\"52,76 128,48 204,76\" class=\"hk\" stroke-width=\"2.6\"/><path d=\"M 76 67 A 26 26 0 0 1 78 76\" class=\"lk\" stroke-width=\"1.8\"/><polyline points=\"64,108 134,58 196,144\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.8\"/><circle cx=\"52\" cy=\"76\" r=\"4\" class=\"h\"/><circle cx=\"204\" cy=\"76\" r=\"3.5\" class=\"f\"/><text x=\"46\" y=\"92\" font-size=\"11\" class=\"t\">C₁</text><text x=\"208\" y=\"92\" font-size=\"11\" class=\"t\">C₂</text><text x=\"134\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Meridional ray (in plane)</text><text x=\"148\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Skew ray (leaves plane)</text></svg>",
              "picture": "Look at the amber meridional ray inside the flat axial slice, while the dashed skew ray leaves the slice.",
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
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Paraxial reflection at a spherical mirror\"><line x1=\"14\" y1=\"105\" x2=\"240\" y2=\"105\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 195 24 Q 222 105 195 162\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"204\" y1=\"46\" x2=\"204\" y2=\"105\" class=\"gk\" stroke-dasharray=\"3 3\" stroke-width=\"1.5\"/><line x1=\"118\" y1=\"105\" x2=\"204\" y2=\"46\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"28,105 204,46 154,105\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 55 96 A 28 28 0 0 1 56 105\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 140 90 A 26 26 0 0 1 144 105\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 170 86 A 24 24 0 0 1 178 105\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 180 54 A 25 25 0 0 0 190 66\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"28\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"118\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"154\" cy=\"105\" r=\"3.5\" class=\"f\"/><circle cx=\"204\" cy=\"46\" r=\"4\" class=\"h\"/><text x=\"28\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"66\" y=\"98\" font-size=\"11\" class=\"t\">α₁</text><text x=\"118\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">C</text><text x=\"134\" y=\"98\" font-size=\"11\" class=\"t\">β</text><text x=\"154\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"174\" y=\"98\" font-size=\"11\" class=\"t\">α₂</text><text x=\"204\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">S</text><text x=\"162\" y=\"52\" font-size=\"11\" class=\"t\">φ₁=φ₂</text><text x=\"214\" y=\"82\" font-size=\"11\" class=\"t\">h</text><text x=\"214\" y=\"122\" font-size=\"12\" class=\"t\">P</text><text x=\"116\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x = -u, r = -R, y = -v</text></svg>",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Thin lens of tiny thickness t compared with distances u and v measured from center P\"><line x1=\"12\" y1=\"96\" x2=\"248\" y2=\"96\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 118 26 Q 104 96 118 164 Q 132 96 118 26\" class=\"s ok\"/><polyline points=\"26,96 118,46 218,96\" class=\"hk\" stroke-width=\"2.6\"/><path d=\"M 50 83 A 28 28 0 0 1 54 96\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 192 96 A 26 26 0 0 1 195 84\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"26\" cy=\"96\" r=\"3.5\" class=\"f\"/><circle cx=\"118\" cy=\"96\" r=\"4\" class=\"h\"/><circle cx=\"218\" cy=\"96\" r=\"3.5\" class=\"f\"/><text x=\"26\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"118\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">t ≪ |u|, |v|</text><text x=\"114\" y=\"114\" text-anchor=\"end\" font-size=\"12\" class=\"t\">P</text><text x=\"218\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"72\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">u (from P)</text><text x=\"168\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">v (from P)</text></svg>",
              "picture": "Look at the thin lens at P: thickness t is so small that both u and v are measured from P.",
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
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Successive refractions at the two surfaces of a thin lens\"><line x1=\"12\" y1=\"98\" x2=\"248\" y2=\"98\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 110 28 Q 92 98 110 164\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 118 28 Q 136 98 118 164\" class=\"lk\" stroke-width=\"2\"/><line x1=\"118\" y1=\"50\" x2=\"238\" y2=\"98\" class=\"gk\" stroke-dasharray=\"4 4\" stroke-width=\"1.5\"/><polyline points=\"24,98 110,50 118,50 188,98\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 46 86 A 25 25 0 0 1 49 98\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 166 98 A 22 22 0 0 1 169 86\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"24\" cy=\"98\" r=\"3.5\" class=\"f\"/><circle cx=\"114\" cy=\"98\" r=\"3.5\" class=\"f\"/><circle cx=\"188\" cy=\"98\" r=\"4\" class=\"h\"/><circle cx=\"238\" cy=\"98\" r=\"3.5\" class=\"f\"/><text x=\"24\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">O</text><text x=\"68\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">u &lt; 0</text><text x=\"114\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">n₂</text><text x=\"60\" y=\"36\" font-size=\"12\" class=\"t\">n₁</text><text x=\"175\" y=\"36\" font-size=\"12\" class=\"t\">n₁</text><text x=\"114\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">P</text><text x=\"152\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">v</text><text x=\"188\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">I</text><text x=\"238\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">Q (v')</text><text x=\"130\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">R₁ &gt; 0, R₂ &lt; 0</text></svg>",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"First principal focus F1 and second principal focus F2 of a converging lens\"><line x1=\"12\" y1=\"90\" x2=\"248\" y2=\"90\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 130 20 Q 116 90 130 160 Q 144 90 130 20\" class=\"s ok\"/><polyline points=\"56,90 130,136 238,136\" class=\"lk\" stroke-width=\"2\"/><polyline points=\"22,44 130,44 204,90\" class=\"hk\" stroke-width=\"2.6\"/><path d=\"M 76 90 A 20 20 0 0 1 73 101\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 184 90 A 20 20 0 0 1 187 79\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"56\" cy=\"90\" r=\"3.5\" class=\"f\"/><circle cx=\"130\" cy=\"90\" r=\"3.5\" class=\"f\"/><circle cx=\"204\" cy=\"90\" r=\"4\" class=\"h\"/><text x=\"56\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">F₁</text><text x=\"124\" y=\"106\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"204\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t\">F₂</text><text x=\"80\" y=\"36\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Ray 2 (parallel → F₂)</text><text x=\"184\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">Ray 1 (F₁ → parallel)</text><text x=\"92\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">f₁ &lt; 0</text><text x=\"168\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">f₂ &gt; 0</text></svg>",
              "picture": "Look at Ray 1 from F₁ emerging parallel, and parallel Ray 2 meeting the axis at F₂.",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three principal rays tracing an image through a converging lens\"><line x1=\"10\" y1=\"92\" x2=\"250\" y2=\"92\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 125 22 Q 112 92 125 162 Q 138 92 125 22\" class=\"s ok\"/><line x1=\"36\" y1=\"92\" x2=\"36\" y2=\"44\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"214\" y1=\"92\" x2=\"214\" y2=\"140\" class=\"lk\" stroke-width=\"2.5\"/><polyline points=\"36,44 125,44 214,140\" class=\"lk\" stroke-width=\"1.8\"/><polyline points=\"36,44 76,92 125,140 214,140\" class=\"lk\" stroke-width=\"1.8\"/><line x1=\"36\" y1=\"44\" x2=\"214\" y2=\"140\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 103 80 A 25 25 0 0 0 100 92\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 147 104 A 25 25 0 0 0 150 92\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"76\" cy=\"92\" r=\"3.5\" class=\"f\"/><circle cx=\"125\" cy=\"92\" r=\"4\" class=\"h\"/><circle cx=\"174\" cy=\"92\" r=\"3.5\" class=\"f\"/><text x=\"36\" y=\"36\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">A</text><text x=\"36\" y=\"108\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"76\" y=\"108\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₁</text><text x=\"120\" y=\"108\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"174\" y=\"84\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₂</text><text x=\"214\" y=\"84\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"214\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">B</text><text x=\"82\" y=\"38\" font-size=\"11\" class=\"t\">2</text><text x=\"96\" y=\"70\" font-size=\"11\" class=\"t\">3</text><text x=\"96\" y=\"132\" font-size=\"11\" class=\"t\">1</text></svg>"
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Distances x1 and x2 measured from principal foci F1 and F2\"><line x1=\"10\" y1=\"86\" x2=\"250\" y2=\"86\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 125 20 Q 113 86 125 152 Q 137 86 125 20\" class=\"s ok\"/><line x1=\"32\" y1=\"86\" x2=\"32\" y2=\"40\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"222\" y1=\"86\" x2=\"222\" y2=\"132\" class=\"lk\" stroke-width=\"2.5\"/><polyline points=\"32,40 125,40 222,132\" class=\"lk\" stroke-width=\"1.8\"/><polyline points=\"32,40 80,86 125,132 222,132\" class=\"hk\" stroke-width=\"2.2\"/><path d=\"M 64 71 A 22 22 0 0 0 58 86\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 96 101 A 22 22 0 0 0 102 86\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"80\" cy=\"86\" r=\"4\" class=\"h\"/><circle cx=\"170\" cy=\"86\" r=\"3.5\" class=\"f\"/><text x=\"32\" y=\"32\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">y</text><text x=\"32\" y=\"102\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"80\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₁</text><text x=\"120\" y=\"102\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"170\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₂</text><text x=\"222\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"236\" y=\"122\" font-size=\"11\" class=\"t\">-y'</text><text x=\"56\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-x₁</text><text x=\"102\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-f₁</text><text x=\"148\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">f₂</text><text x=\"196\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x₂</text></svg>"
            },
            {
              "type": "derivation",
              "label": "02 · Derivation",
              "title": "Newton's lens formula",
              "legend": "Object height \\(y\\) at \\(x_1\\) from \\(F_1\\), image height \\(y'\\) at \\(x_2\\) from \\(F_2\\), focal lengths \\(f_1, f_2\\).",
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Similar triangles at F1 and F2 for Newton lens formula\"><line x1=\"12\" y1=\"88\" x2=\"248\" y2=\"88\" class=\"lk\" stroke-width=\"2\"/><line x1=\"125\" y1=\"24\" x2=\"125\" y2=\"152\" class=\"lk\" stroke-width=\"2\"/><line x1=\"34\" y1=\"88\" x2=\"34\" y2=\"42\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"220\" y1=\"88\" x2=\"220\" y2=\"134\" class=\"lk\" stroke-width=\"2.5\"/><polyline points=\"34,42 125,42 220,134\" class=\"lk\" stroke-width=\"1.8\"/><polyline points=\"34,42 82,88 125,134 220,134\" class=\"hk\" stroke-width=\"2.4\"/><path d=\"M 66 73 A 22 22 0 0 0 60 88\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 98 103 A 22 22 0 0 0 104 88\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 152 73 A 22 22 0 0 0 146 88\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 184 103 A 22 22 0 0 0 190 88\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"82\" cy=\"88\" r=\"4\" class=\"h\"/><circle cx=\"168\" cy=\"88\" r=\"3.5\" class=\"f\"/><text x=\"24\" y=\"66\" font-size=\"11\" class=\"t\">y</text><text x=\"34\" y=\"104\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"82\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₁</text><text x=\"125\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">K</text><text x=\"118\" y=\"104\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"125\" y=\"166\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">L</text><text x=\"168\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">F₂</text><text x=\"220\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"236\" y=\"118\" font-size=\"11\" class=\"t\">-y'</text><text x=\"58\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-x₁</text><text x=\"104\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-f₁</text><text x=\"146\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">f₂</text><text x=\"194\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">x₂</text></svg>",
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
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Object height y and inverted image height y prime through lens center P\"><line x1=\"14\" y1=\"90\" x2=\"246\" y2=\"90\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 120 22 Q 108 90 120 158 Q 132 90 120 22\" class=\"s ok\"/><line x1=\"38\" y1=\"90\" x2=\"38\" y2=\"38\" class=\"lk\" stroke-width=\"2.6\"/><line x1=\"216\" y1=\"90\" x2=\"216\" y2=\"148\" class=\"lk\" stroke-width=\"2.6\"/><line x1=\"38\" y1=\"38\" x2=\"216\" y2=\"148\" class=\"hk\" stroke-width=\"2.5\"/><path d=\"M 95 75 A 28 28 0 0 0 92 90\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 145 105 A 28 28 0 0 0 148 90\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"120\" cy=\"90\" r=\"4\" class=\"h\"/><text x=\"26\" y=\"66\" font-size=\"12\" class=\"t\">y</text><text x=\"38\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"84\" y=\"84\" font-size=\"11\" class=\"t\">θ</text><text x=\"154\" y=\"104\" font-size=\"11\" class=\"t\">θ</text><text x=\"116\" y=\"108\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"216\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"232\" y=\"128\" font-size=\"12\" class=\"t\">y'</text><text x=\"78\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">u &lt; 0</text><text x=\"170\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">v &gt; 0 (m = v/u)</text></svg>",
              "picture": "Look at the equal angle arcs θ at lens center P: similar right triangles give m = y'/y = v/u.",
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
              "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Imaging an object of height y by a single spherical refracting surface\"><line x1=\"14\" y1=\"96\" x2=\"246\" y2=\"96\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 110 22 Q 86 96 110 164\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"28\" y1=\"96\" x2=\"28\" y2=\"44\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"228\" y1=\"96\" x2=\"228\" y2=\"142\" class=\"lk\" stroke-width=\"2.5\"/><line x1=\"28\" y1=\"44\" x2=\"228\" y2=\"142\" class=\"hk\" stroke-width=\"2.4\"/><path d=\"M 130 86 A 26 26 0 0 0 128 96\" class=\"lk\" stroke-width=\"1.8\"/><path d=\"M 178 106 A 26 26 0 0 0 180 96\" class=\"lk\" stroke-width=\"1.8\"/><circle cx=\"98\" cy=\"96\" r=\"3.5\" class=\"f\"/><circle cx=\"154\" cy=\"96\" r=\"4\" class=\"h\"/><text x=\"28\" y=\"36\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">A (y)</text><text x=\"28\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">O</text><text x=\"64\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">-u</text><text x=\"94\" y=\"112\" text-anchor=\"end\" font-size=\"11\" class=\"t\">P</text><text x=\"126\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">R</text><text x=\"154\" y=\"84\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">C</text><text x=\"190\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">v</text><text x=\"228\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">I</text><text x=\"228\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" class=\"t\">B (-y')</text></svg>",
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

### 2. Changed App Files

#### `study-match/src/components/02-mathflow.js`

```javascript
/* ==========================================================================
   MathFlow v4: derivations, animated
   --------------------------------------------------------------------------
   Data gives plain TeX lines plus the move that produced each one. Nothing else.

     { "tex": "v - u = at", "move": { "type": "subtract", "by": "u" }, "note": "...", "phase": "...", "ask": {...} }

   How it plays:
   1. Every line is typeset by MathJax itself (exact TeX layout, nothing hand placed).
   2. Each glyph and fraction bar of that typeset line becomes its own tiny sprite,
      drawn at exactly the position MathJax gave it.
   3. Between two lines, glyphs are matched automatically (longest common
      subsequence of shapes, then leftovers by shape and distance):
        matched  -> glides to its new place (arcs over "=" when it changes side)
        new      -> writes in, amber;   gone -> struck through (for cancelling
                    moves) and shrinks out, coral
   4. Moves that act on both sides (add, multiply, differentiate, ...) first show
      the move applied inline on the same line:  L + x = R + x  , then the result.
   5. "=" stays in one column; earlier lines stay above as a faded trail.
   ========================================================================== */
(function () {
  var SM = window.SM, T = SM.tex;
  var NS = 'http://www.w3.org/2000/svg';
  var PAD = 2, GHOST = 0.78, MIN_SCALE = 0.45;
  var SMOOTH = 'cubic-bezier(0.65, 0, 0.35, 1)', OUT = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
  var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var holder = null, holderSize = 0;

  function getHolder(size) {
    if (!holder) {
      holder = document.createElement('div');
      holder.setAttribute('aria-hidden', 'true');
      holder.style.cssText = 'position:absolute;left:-12000px;top:0;visibility:hidden;pointer-events:none;white-space:nowrap;';
      document.body.appendChild(holder);
    }
    if (size !== holderSize) { holder.style.fontSize = size + 'px'; holderSize = size; }
    return holder;
  }

  /* ---------- typeset one line on a single line and pull out its glyphs ---------- */
  var mcache = {};
  function measure(tex, size) {
    var key = size + '|' + tex;
    if (mcache[key]) return mcache[key];
    var h = getHolder(size), node = null;
    try { node = MathJax.tex2svg(tex, { display: true }); } catch (e) { node = null; }
    if (!node) return (mcache[key] = { error: true, tex: tex });
    h.appendChild(node);
    var svg = node.querySelector('svg');
    if (!svg || svg.querySelector('[data-mml-node="merror"]')) {
      var msg = svg ? (svg.querySelector('[data-mml-node="merror"]').getAttribute('data-mjx-error') || '') : '';
      h.removeChild(node);
      return (mcache[key] = { error: true, tex: tex, msg: msg });
    }
    var hr = h.getBoundingClientRect(), sr = svg.getBoundingClientRect();
    var glyphs = [];
    Array.prototype.forEach.call(svg.querySelectorAll('path, rect'), function (el) {
      var r = el.getBoundingClientRect();
      if (r.width < 0.05 && r.height < 0.05) return;
      var m = el.getScreenCTM();
      if (!m) return;
      var isRect = el.tagName.toLowerCase() === 'rect';
      var clone = el.cloneNode(false);
      clone.removeAttribute('transform');
      clone.removeAttribute('stroke-width');
      glyphs.push({
        sig: isRect ? 'rect' : (el.getAttribute('data-c') || 'p'),
        node: clone,
        m: [m.a, m.b, m.c, m.d, m.e - hr.left, m.f - hr.top],
        x: r.left - hr.left, y: r.top - hr.top, w: r.width, h: r.height
      });
    });
    var eq = null;
    glyphs.forEach(function (g) { if (g.sig === '3D' && (!eq || g.h > eq.h + 0.5)) eq = g; });
    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    glyphs.forEach(function (g) { x0 = Math.min(x0, g.x); y0 = Math.min(y0, g.y); x1 = Math.max(x1, g.x + g.w); y1 = Math.max(y1, g.y + g.h); });
    if (!glyphs.length) { x0 = y0 = 0; x1 = y1 = 1; }
    var ax = eq ? eq.x + eq.w / 2 : (x0 + x1) / 2, ay = eq ? eq.y + eq.h / 2 : (y0 + y1) / 2;
    var res = { tex: tex, glyphs: glyphs, ax: ax, ay: ay, L: ax - x0, R: x1 - ax, U: ay - y0, D: y1 - ay,
      svgHTML: svg.outerHTML, sx: sr.left - hr.left, sy: sr.top - hr.top, hasEq: !!eq };
    h.removeChild(node);
    return (mcache[key] = res);
  }

  /* ---------- automatic glyph matching ---------- */
  function match(A, B, kA, kB) {
    var a = A.glyphs, b = B.glyphs, n = a.length, m = b.length, i, j;
    var dp = [];
    for (i = 0; i <= n; i++) dp.push(new Int16Array(m + 1));
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--)
      dp[i][j] = a[i].sig === b[j].sig ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    var pairs = [], usedA = {}, usedB = {};
    i = 0; j = 0;
    while (i < n && j < m) {
      if (a[i].sig === b[j].sig && dp[i][j] === dp[i + 1][j + 1] + 1) { pairs.push([i, j]); usedA[i] = 1; usedB[j] = 1; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else j++;
    }
    // leftovers with the same shape: pair the nearest ones (this is what makes terms jump sides)
    var cxA = function (k) { return (a[k].x + a[k].w / 2 - A.ax) * kA; };
    var cxB = function (k) { return (b[k].x + b[k].w / 2 - B.ax) * kB; };
    b.forEach(function (g, jj) {
      if (usedB[jj]) return;
      var best = -1, bd = Infinity;
      a.forEach(function (h, ii) {
        if (usedA[ii] || h.sig !== g.sig) return;
        var dd = Math.abs(cxA(ii) - cxB(jj));
        if (dd < bd) { bd = dd; best = ii; }
      });
      if (best >= 0) { pairs.push([best, jj]); usedA[best] = 1; usedB[jj] = 1; }
    });
    return pairs;
  }

  /* interrupt-safe: freeze running Web Animations where they are (ignore CSS transitions) */
  function freeze(el) {
    if (!el.getAnimations) return false;
    var list = el.getAnimations().filter(function (x) { return !x.transitionProperty; });
    list.forEach(function (x) { try { x.commitStyles(); } catch (e) {} x.cancel(); });
    return list.length > 0;
  }
  function anim(el, frames, opt) {
    if (REDUCE || !el.animate) return null;
    return el.animate(frames, { duration: opt.duration, delay: opt.delay || 0, easing: opt.easing || SMOOTH, fill: 'backwards' });
  }
  function tr(dx, dy, sx, sy) { return 'translate(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px) scale(' + sx.toFixed(4) + ',' + sy.toFixed(4) + ')'; }

  /* ======================================================================== */
  function mount(root, spec) {
    var stage = root.querySelector('.mf-stage'), board = root.querySelector('.mf-board');
    var setupEl = root.querySelector('.mf-setup');
    var noteEl = root.querySelector('.mf-note'), dotsEl = root.querySelector('.mf-dots');
    var phEl = root.querySelector('.mf-phases'), countEl = root.querySelector('.mf-count');
    var playBtn = root.querySelector('[data-mf="play"]');
    var panel = root.querySelector('.mf-panel'), askEl = root.querySelector('.mf-ask');
    var interval = spec.interval || 2500;
    var answered = spec.answered || {};
    var completed = !!spec.completed;

    /* steps -> frames (a both-sides move becomes two frames: applied, then result) */
    var frames = [], phase = '';
    spec.steps.forEach(function (st, si) {
      if (st.phase) phase = st.phase;
      var mv = st.move || null, prev = si > 0 ? spec.steps[si - 1].tex : null;
      var opTex = mv && prev ? T.opLine(prev, mv) : null;
      if (opTex) {
        frames.push({ tex: opTex, note: '<b>' + T.label(mv) + '.</b>', phase: phase, op: true, mv: mv, ask: st.ask || null, si: si });
        frames.push({ tex: st.tex, note: st.note || 'Simplify.', phase: phase, after: mv, si: si });
      } else {
        frames.push({ tex: st.tex, note: (mv ? '<b>' + T.label(mv) + '.</b> ' : '') + (st.note || ''), phase: phase, mv: mv, ask: st.ask || null, si: si });
      }
    });
    frames.forEach(function (f, i) { f.i = i; });
    var phases = [];
    frames.forEach(function (f) { if (phases.indexOf(f.phase) === -1) phases.push(f.phase); });

    var api = { i: -1, ready: false, frames: frames };
    var L = null, overlays = [], later = [], playing = false, loopT = null, asking = -1, builtW = 0, pairCache = {};

    phEl.innerHTML = phases.map(function (p) { return '<span class="mf-ph">' + SM.mathLabel(SM.esc(p)) + '</span>'; }).join('');
    SM.mathReady(function (ok) { if (ok) SM.typeset(phEl); });
    dotsEl.innerHTML = frames.map(function (f, j) {
      return '<button type="button" class="mf-dot' + (f.ask ? ' is-ask' : '') + '" aria-label="Step ' + (j + 1) + '" data-j="' + j + '"></button>';
    }).join('');

    function chrome(i) {
      var cur = frames[i] ? phases.indexOf(frames[i].phase) : -1;
      Array.prototype.forEach.call(phEl.children, function (c, k) { c.classList.toggle('is-now', k === cur); c.classList.toggle('is-past', k < cur); });
      var now = phEl.children[cur];
      if (now) phEl.scrollTo({ left: now.offsetLeft - 16, behavior: 'smooth' });
      Array.prototype.forEach.call(dotsEl.children, function (d, k) { d.classList.toggle('is-now', k === i); d.classList.toggle('is-done', k < i); });
      if (countEl) countEl.textContent = (Math.max(i, 0) + 1) + ' / ' + frames.length;
      if (playBtn) playBtn.innerHTML = playing ? '&#10073;&#10073;' : '&#9654;';
    }

    /* highlight the part of the setup SVG (labels and angle arcs) used in the current step */
    function highlightSetup(f) {
      if (!setupEl) return;
      var svg = setupEl.querySelector('svg');
      if (!svg) return;
      Array.prototype.forEach.call(svg.querySelectorAll('.mf-part-on'), function (el) { el.classList.remove('mf-part-on'); });
      if (!f) return;
      var st = spec.steps[f.si] || {};
      var hay = (f.tex || '') + ' ' + (st.note || '') + ' ' + (st.focus || '');
      var map = {
        '\\theta_1': 'θ₁', '\\theta_2': 'θ₂', '\\phi_1': 'φ₁', '\\phi_2': 'φ₂',
        '\\alpha_1': 'α₁', '\\alpha_2': 'α₂', '\\beta': 'β',
        'h_1': 'h₁', 'h_2': 'h₂', 'R_1': 'R₁', 'R_2': 'R₂',
        'F_1': 'F₁', 'F_2': 'F₂', 'f_1': 'f₁', 'f_2': 'f₂',
        'x_1': 'x₁', 'x_2': 'x₂', 'n_1': 'n₁', 'n_2': 'n₂'
      };
      var want = {};
      Object.keys(map).forEach(function (k) { if (hay.indexOf(k) !== -1) want[map[k]] = 1; });
      ['h', 'x', 'y', 'r', 'R', 'u', 'v', 'f', 'O', 'I', 'P', 'C', 'S', 'A', 'B', 'Q'].forEach(function (sym) {
        var re = new RegExp('(^|[^a-zA-Z\\\\])' + sym + '([^a-zA-Z0-9]|$)');
        if (re.test(hay)) want[sym] = 1;
      });
      var hitTexts = [];
      Array.prototype.forEach.call(svg.querySelectorAll('text'), function (t) {
        var txt = (t.textContent || '').trim();
        var hit = want[txt] || Object.keys(want).some(function (w) { return w.length > 1 && txt.indexOf(w) !== -1; });
        if (hit) {
          t.classList.add('mf-part-on');
          hitTexts.push({ x: parseFloat(t.getAttribute('x')) || 0, y: parseFloat(t.getAttribute('y')) || 0 });
        }
      });
      Array.prototype.forEach.call(svg.querySelectorAll('path.lk, path.hk'), function (p) {
        var d = p.getAttribute('d') || '';
        if (d.indexOf('A ') === -1) return;
        var m = d.match(/M\s*([0-9.]+)\s+([0-9.]+)/);
        if (!m) return;
        var px = parseFloat(m[1]), py = parseFloat(m[2]);
        var near = hitTexts.some(function (pt) { return Math.hypot(pt.x - px, pt.y - py) < 38; });
        if (near) p.classList.add('mf-part-on');
      });
      Array.prototype.forEach.call(svg.querySelectorAll('[data-part]'), function (el) {
        if (hay.indexOf(el.getAttribute('data-part')) !== -1) el.classList.add('mf-part-on');
      });
    }

    function setNote(html) {
      noteEl.style.opacity = '0';
      later.push(setTimeout(function () { noteEl.innerHTML = html; SM.typeset(noteEl); noteEl.style.opacity = '1'; }, 150));
    }

    /* ---------- layout: one scale, one "=" column, single-line equations with sideways scroll if >0.45 ---------- */
    function build() {
      var size = parseFloat(getComputedStyle(root).getPropertyValue('--mf-size')) || 18;
      var availW = board.clientWidth ? board.clientWidth - 12 : (stage.clientWidth || 248);
      builtW = availW;
      var fitW = Math.max(160, availW - 14);
      frames.forEach(function (f) { f.M = measure(f.tex, size); });
      var mainSpan = 10;
      frames.forEach(function (f) {
        if (!f.op && !f.M.error) mainSpan = Math.max(mainSpan, f.M.L + f.M.R);
      });
      var kMain = Math.max(MIN_SCALE, Math.min(1, fitW / mainSpan));
      var Up = 10, Dn = 10, gU = 6, gD = 6, maxRenderedW = availW;
      frames.forEach(function (f) {
        if (f.M.error) { f.k = kMain; return; }
        var span = Math.max(f.M.L + f.M.R, 1);
        f.k = f.op ? Math.max(MIN_SCALE, Math.min(kMain, fitW / span)) : kMain;
        maxRenderedW = Math.max(maxRenderedW, Math.ceil(span * f.k + 16));
        Up = Math.max(Up, f.M.U * f.k); Dn = Math.max(Dn, f.M.D * f.k);
        if (!f.op) { gU = Math.max(gU, f.M.U * kMain * GHOST); gD = Math.max(gD, f.M.D * kMain * GHOST); }
      });
      var stageW = Math.max(availW, maxRenderedW);
      var eqX = stageW / 2;
      var slotH = Math.min(24, gU + gD + 4);
      var nG = setupEl ? 0 : 2;
      var top = nG * slotH + 2;
      L = { availW: stageW, viewW: availW, eqX: eqX, eqY: top + Up + 6, kMain: kMain, slotH: slotH, nG: nG, top: top, Up: Up, gD: gD };
      stage.style.width = stageW + 'px';
      stage.style.height = Math.max(54, top + Up + Dn + 12) + 'px';
      stage.innerHTML = '';
      overlays = [];
      frames.forEach(function (f) { f.sp = null; f.pos = null; f.ghost = null; });
      pairCache = {};
      // op glyphs = what the move added to the previous line
      frames.forEach(function (f, i) {
        f.opSet = null;
        if (f.op && i > 0 && !f.M.error && !frames[i - 1].M.error) {
          var pr = pairsFor(i - 1, i), used = {};
          pr.forEach(function (p) { used[p[1]] = 1; });
          f.opSet = {};
          f.M.glyphs.forEach(function (g, j) { if (!used[j]) f.opSet[j] = 1; });
        }
      });
      api.ready = true;
    }

    function pairsFor(ia, ib) {
      var key = ia + '>' + ib;
      if (!pairCache[key]) pairCache[key] = match(frames[ia].M, frames[ib].M, frames[ia].k, frames[ib].k);
      return pairCache[key];
    }

    /* one sprite per glyph, drawn exactly where MathJax put it */
    function sprites(f) {
      if (f.sp) return f.sp;
      f.sp = []; f.pos = [];
      if (f.M.error) {
        var d = document.createElement('div');
        d.className = 'mf-err';
        d.textContent = 'TeX error: ' + f.tex + (f.M.msg ? '\n' + f.M.msg : '');
        d.style.top = Math.max(0, L.eqY - 20) + 'px';
        d.style.opacity = '0';
        stage.appendChild(d);
        f.sp.push(d); f.pos.push({ x: 6, y: L.eqY - 20, w: L.availW - 12, h: 40, cx: L.availW / 2 });
        return f.sp;
      }
      var k = f.k, M = f.M;
      M.glyphs.forEach(function (g, j) {
        var lineShift = ((M.R - M.L) * k) / 2;
        var x = L.eqX - lineShift + (g.x - M.ax) * k, y = L.eqY + (g.y - M.ay) * k, w = g.w * k, h = g.h * k;
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('class', 'mf-sp' + (f.opSet && f.opSet[j] ? ' is-op' : ''));
        svg.setAttribute('width', (w + 2 * PAD).toFixed(2));
        svg.setAttribute('height', (h + 2 * PAD).toFixed(2));
        svg.setAttribute('aria-hidden', 'true');
        svg.style.left = (x - PAD).toFixed(2) + 'px';
        svg.style.top = (y - PAD).toFixed(2) + 'px';
        svg.style.opacity = '0';
        var gg = document.createElementNS(NS, 'g'), m = g.m;
        gg.setAttribute('transform', 'matrix(' + [k * m[0], k * m[1], k * m[2], k * m[3], k * m[4] + PAD - k * g.x, k * m[5] + PAD - k * g.y].map(function (v) { return v.toFixed(4); }).join(' ') + ')');
        gg.appendChild(g.node.cloneNode(false));
        svg.appendChild(gg);
        stage.appendChild(svg);
        f.sp.push(svg);
        f.pos.push({ x: x, y: y, w: w, h: h, cx: x + w / 2 });
      });
      return f.sp;
    }

    /* faded trail of earlier lines, aligned on "=" */
    function ghost(f) {
      if (f.ghost) return f.ghost;
      var g = document.createElement('div');
      g.className = 'mf-ghost';
      g.innerHTML = f.M.svgHTML;
      g.style.fontSize = holderSize + 'px';
      g._s = L.kMain * GHOST;
      g._x = L.eqX - (f.M.ax - f.M.sx) * g._s;
      g._oy = (f.M.ay - f.M.sy) * g._s;
      g.style.opacity = '0';
      stage.insertBefore(g, stage.firstChild);
      f.ghost = g;
      return g;
    }
    function placeTrail(i, instant) {
      var list = [];
      for (var j = i - 1; j >= 0; j--) if (!frames[j].op && !frames[j].M.error) list.push(j);
      if (frames[i].op && list.length) list.shift();
      var OP = [0.55, 0.33, 0.17];
      frames.forEach(function (f, j) {
        if (f.op || f.M.error) return;
        var slot = list.indexOf(j);
        if (slot < 0 && !f.ghost) return;
        if (!L.nG) { if (f.ghost) f.ghost.style.opacity = '0'; return; }
        var g = ghost(f), y, o;
        var base = L.eqY - L.Up - 16 - L.gD;
        if (slot >= 0 && slot < L.nG) { y = base - slot * L.slotH; o = OP[slot]; }
        else if (slot >= L.nG) { y = base - L.nG * L.slotH; o = 0; }
        else { y = base + 10; o = 0; }
        g.style.transition = (instant || REDUCE) ? 'none' : '';
        g.style.transform = 'translate(' + g._x.toFixed(1) + 'px,' + (y - g._oy).toFixed(1) + 'px) scale(' + g._s.toFixed(4) + ')';
        g.style.opacity = String(o);
      });
    }

    function clearLater() { later.forEach(clearTimeout); later = []; }
    function clearOverlays(instant) {
      overlays.forEach(function (o) {
        if (instant || REDUCE || !o.animate) { o.remove(); return; }
        o.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: 'forwards' }).onfinish = function () { o.remove(); };
      });
      overlays = [];
    }
    function show(el, cls) { el.setAttribute('class', cls); el.style.transform = ''; el.style.opacity = '1'; }

    /* ---------- go to frame i ---------- */
    function go(i, instant) {
      if (!api.ready) return;
      i = Math.max(0, Math.min(frames.length - 1, i));
      clearLater(); clearOverlays(instant);
      var B = frames[i], A = api.i >= 0 && api.i !== i ? frames[api.i] : null;
      var spB = sprites(B);
      frames.forEach(function (f) {
        if (!f.sp) return;
        f.sp.forEach(function (e) { freeze(e); });
        if (f !== A && f !== B) f.sp.forEach(function (e) { e.style.opacity = '0'; });
      });
      var base = function (j) { return B.M.error ? 'mf-err' : 'mf-sp' + (B.opSet && B.opSet[j] ? ' is-op' : ''); };

      if (!A || instant || REDUCE || A.M.error || B.M.error) {
        if (A && A.sp) A.sp.forEach(function (e) { e.style.opacity = '0'; });
        spB.forEach(function (e, j) { show(e, base(j)); });
      } else {
        var pairs = pairsFor(A.i, B.i), mA = {}, mB = {};
        var stR = stage.getBoundingClientRect();
        pairs.forEach(function (p) {
          var a = p[0], b = p[1], ea = A.sp[a], eb = spB[b];
          mA[a] = 1; mB[b] = 1;
          var ga = A.pos[a], gb = B.pos[b];
          // start from where the old glyph really is right now (smooth even if interrupted)
          var from = ga;
          if (ea && ea.style.opacity !== '0') {
            var r = ea.getBoundingClientRect(), s = (ga.w + 2 * PAD) > 0 ? r.width / (ga.w + 2 * PAD) : 1;
            from = { x: r.left - stR.left + PAD * s, y: r.top - stR.top + PAD * s, w: ga.w * s, h: ga.h * s, cx: r.left - stR.left + r.width / 2 };
          }
          if (ea) ea.style.opacity = '0';
          var sx = gb.w > 0.3 ? from.w / gb.w : 1, sy = gb.h > 0.3 ? from.h / gb.h : 1;
          sx = Math.max(0.15, Math.min(6, sx)); sy = Math.max(0.15, Math.min(6, sy));
          var dx = from.x - gb.x, dy = from.y - gb.y;
          var cross = (from.cx - L.eqX) * (gb.cx - L.eqX) < 0 && Math.abs(dx) > 10;
          show(eb, base(b));
          var kf = [], N = cross ? 16 : 1;
          for (var q = 0; q <= N; q++) {
            var u = q / N, lift = cross ? Math.sin(Math.PI * u) * Math.min(44, 14 + Math.abs(dx) * 0.18) : 0;
            kf.push({ transform: tr(dx * (1 - u), dy * (1 - u) - lift, sx + (1 - sx) * u, sy + (1 - sy) * u), offset: u });
          }
          anim(eb, kf, { duration: cross ? 1000 : 850, delay: 60 });
        });

        // what disappears: strike through when the move cancels things, then shrink out
        var gone = [];
        A.M.glyphs.forEach(function (g, a) { if (!mA[a]) gone.push(a); });
        var strikeDelay = 0;
        if (B.after && T.CANCELS[B.after.type] && gone.length) {
          strikeDelay = 480;
          var runs = [], run = null;
          gone.forEach(function (a) {
            var p = A.pos[a];
            if (run && a === run.last + 1 && Math.abs(p.cx - run.x1) < 60) { run.last = a; run.x0 = Math.min(run.x0, p.x); run.x1 = Math.max(run.x1, p.x + p.w); run.y0 = Math.min(run.y0, p.y); run.y1 = Math.max(run.y1, p.y + p.h); }
            else { run = { last: a, x0: p.x, x1: p.x + p.w, y0: p.y, y1: p.y + p.h }; runs.push(run); }
          });
          runs.forEach(function (r, n) {
            var w = r.x1 - r.x0, h = Math.max(r.y1 - r.y0, 6);
            var len = Math.sqrt(w * w + h * h) * 0.92, ang = -Math.atan2(h, w) * 180 / Math.PI;
            var s = document.createElement('i');
            s.className = 'mf-strike';
            s.style.width = len + 'px';
            s.style.left = (r.x0 + w * 0.04) + 'px';
            s.style.top = (r.y0 + h * 0.96) + 'px';
            s.style.transform = 'rotate(' + ang + 'deg)';
            stage.appendChild(s);
            overlays.push(s);
            anim(s, [{ transform: 'rotate(' + ang + 'deg) scaleX(0)' }, { transform: 'rotate(' + ang + 'deg) scaleX(1)' }], { duration: 260, delay: n * 90, easing: OUT });
          });
          later.push(setTimeout(function () {
            overlays = overlays.filter(function (o) {
              if (!o.classList || !o.classList.contains('mf-strike')) return true;
              if (o.animate && !REDUCE) o.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: 'forwards' }).onfinish = function () { o.remove(); };
              else o.remove();
              return false;
            });
          }, strikeDelay + 420));
        }
        gone.forEach(function (a) {
          var e = A.sp[a], p = A.pos[a];
          e.setAttribute('class', 'mf-sp is-out');
          e.style.opacity = '0';
          anim(e, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: tr(p.w * 0.2, p.h * 0.2, 0.6, 0.6) }], { duration: 380, delay: strikeDelay, easing: 'ease-in' });
        });

        // what is new: op glyphs write in left to right, others rise in amber
        var fresh = [];
        spB.forEach(function (e, b) { if (!mB[b]) fresh.push(b); });
        fresh.sort(function (p, q) { return B.pos[p].x - B.pos[q].x; });
        fresh.forEach(function (b, n) {
          var e = spB[b], isOp = B.opSet && B.opSet[b];
          show(e, isOp ? 'mf-sp is-op' : 'mf-sp is-new');
          if (isOp) anim(e, [{ opacity: 0, clipPath: 'inset(-20% 100% -20% -20%)' }, { opacity: 1, clipPath: 'inset(-20% -20% -20% -20%)' }], { duration: 360, delay: 380 + n * 28, easing: 'ease-out' });
          else {
            anim(e, [{ opacity: 0, transform: tr(0, 6, 0.9, 0.9) }, { opacity: 1, transform: 'none' }], { duration: 460, delay: 520 + strikeDelay, easing: OUT });
            later.push(setTimeout(function () { e.setAttribute('class', 'mf-sp'); }, 1700 + strikeDelay));
          }
        });
      }

      // the final line gets a box drawn round it
      if (i === frames.length - 1 && !B.M.error) {
        var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        B.pos.forEach(function (p) { x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y); x1 = Math.max(x1, p.x + p.w); y1 = Math.max(y1, p.y + p.h); });
        var pd = 8, W = x1 - x0 + pd * 2, H = y1 - y0 + pd * 2;
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('class', 'mf-box');
        svg.setAttribute('width', W + 4); svg.setAttribute('height', H + 4);
        svg.style.left = (x0 - pd - 2) + 'px'; svg.style.top = (y0 - pd - 2) + 'px';
        var rc = document.createElementNS(NS, 'rect');
        rc.setAttribute('x', 2); rc.setAttribute('y', 2); rc.setAttribute('width', W); rc.setAttribute('height', H); rc.setAttribute('rx', 10);
        rc.setAttribute('pathLength', '100'); rc.style.strokeDasharray = '100';
        svg.appendChild(rc);
        stage.appendChild(svg);
        overlays.push(svg);
        if (!instant) anim(rc, [{ strokeDashoffset: 100 }, { strokeDashoffset: 0 }], { duration: 900, delay: 1100 });
      }

      api.i = i;
      placeTrail(i, instant);
      setNote(B.note);
      highlightSetup(B);
      chrome(i);
      if (i === frames.length - 1) complete();
    }

    function complete() {
      if (completed) return;
      completed = true;
      root.classList.add('is-completed');
      if (spec.onComplete) spec.onComplete();
    }
    function needsAsk(j) { var f = frames[j]; return f && f.ask && answered[f.si] === undefined; }

    /* ---------- checkpoints: asked under the equation they are about ---------- */
    function showAsk(j) {
      asking = j;
      var a = frames[j].ask;
      panel.hidden = true; askEl.hidden = false;
      var q = askEl.querySelector('.mf-ask-q'), opts = askEl.querySelector('.mf-ask-opts');
      var why = askEl.querySelector('.mf-ask-why'), goBtn = askEl.querySelector('.mf-ask-go');
      q.innerHTML = a.q;
      why.hidden = true; goBtn.hidden = true;
      var order = SM.shuffle(a.options.map(function (o, k) { return k; }));
      opts.innerHTML = order.map(function (k, n) { return '<button type="button" data-k="' + k + '"><b>' + (n + 1) + '</b>&nbsp; ' + a.options[k] + '</button>'; }).join('');
      Array.prototype.forEach.call(opts.children, function (b) {
        b.addEventListener('click', function (e) { e.stopPropagation(); pick(Number(b.dataset.k)); });
      });
      SM.typeset(askEl);
      chrome(api.i);
    }
    function pick(k) {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking < 0) return;
      var j = asking, f = frames[j], a = f.ask;
      if (answered[f.si] !== undefined) return;
      var ok = k === a.answer, opts = askEl.querySelector('.mf-ask-opts'), why = askEl.querySelector('.mf-ask-why');
      answered[f.si] = ok;
      Array.prototype.forEach.call(opts.children, function (x) {
        x.disabled = true;
        if (Number(x.dataset.k) === a.answer) x.classList.add('is-correct');
        if (Number(x.dataset.k) === k && !ok) x.classList.add('is-wrong');
      });
      why.innerHTML = '<b>' + (ok ? 'Right move. ' : 'Not this one. ') + '</b>' + (a.why || '');
      why.hidden = false;
      askEl.querySelector('.mf-ask-go').hidden = false;
      SM.typeset(why);
      if (spec.onAnswer) spec.onAnswer(ok, f.si);
      if (ok && playing) later.push(setTimeout(resume, 1700));
    }
    function resume() {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking < 0) return;
      var j = asking;
      asking = -1;
      askEl.hidden = true; panel.hidden = false;
      go(j);
      if (playing) schedule(j);
    }
    askEl.querySelector('.mf-ask-go').addEventListener('click', function (e) { e.stopPropagation(); resume(); });

    function schedule(j) {
      clearTimeout(loopT);
      var f = frames[j];
      loopT = setTimeout(loop, interval * (f.op ? 1.15 : 1) + (f.after && T.CANCELS[f.after.type] ? 500 : 0));
    }
    function loop() {
      if (!playing) return;
      if (api.i >= frames.length - 1) { playing = false; chrome(api.i); return; }
      var j = api.i + 1;
      if (needsAsk(j)) { showAsk(j); return; }
      go(j); schedule(j);
    }
    function stopPlay() { playing = false; clearTimeout(loopT); chrome(api.i); }
    function reset() {
      clearLater(); clearOverlays(true);
      frames.forEach(function (f) {
        if (f.sp) f.sp.forEach(function (e) { freeze(e); e.style.opacity = '0'; });
        if (f.ghost) { f.ghost.style.transition = 'none'; f.ghost.style.opacity = '0'; }
      });
      api.i = -1;
    }

    api.play = function () {
      if (SM.isPaused && SM.isPaused()) return;
      if (!api.ready || asking >= 0) return;
      playing = true;
      if (api.i < 0 || api.i >= frames.length - 1) { reset(); go(0); schedule(0); } else loop();
      chrome(api.i);
    };
    api.toggle = function () { if (playing) stopPlay(); else api.play(); };
    api.next = function () {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking >= 0) return;
      stopPlay();
      var j = api.i + 1;
      if (j >= frames.length) return;
      if (needsAsk(j)) { showAsk(j); return; }
      go(j);
    };
    api.prev = function () { if (asking >= 0 || (SM.isPaused && SM.isPaused())) return; stopPlay(); if (api.i > 0) go(api.i - 1); };
    api.jump = function (j) {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking >= 0) return;
      stopPlay();
      for (var a = 0; a <= j; a++) if (needsAsk(a)) { if (a - 1 !== api.i) go(Math.max(0, a - 1)); showAsk(a); return; }
      go(j);
    };
    api.replay = function () { if (asking >= 0 || (SM.isPaused && SM.isPaused())) return; stopPlay(); reset(); api.play(); };
    api.pick = function (n) { // keyboard: nth visible option
      if (asking < 0) return false;
      var b = askEl.querySelectorAll('.mf-ask-opts button')[n];
      if (b && !b.disabled) { b.click(); return true; }
      var go2 = askEl.querySelector('.mf-ask-go');
      if (!go2.hidden) { resume(); return true; }
      return false;
    };
    api.isAsking = function () { return asking >= 0; };
    api.practise = function () {
      if (SM.isPaused && SM.isPaused()) return;
      asking = -1; askEl.hidden = true; panel.hidden = false;
      Object.keys(answered).forEach(function (k) { delete answered[k]; });
      stopPlay(); reset(); api.play();
    };
    api.isPlaying = function () { return playing; };
    api.pause = stopPlay;

    root.querySelectorAll('[data-mf]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var a = b.getAttribute('data-mf');
        if (a === 'practise') api.practise();
        else if (a === 'flip-back') api.flip(false);
        else if (a === 'flip-open') api.flip(true);
        else if (a === 'replay') api.replay();
        else if (a === 'next') api.next();
        else if (a === 'prev') api.prev();
        else if (a === 'play') api.toggle();
      });
    });

    var frontFace = root.querySelector('.mf-front'), backFace = root.querySelector('.mf-back');
    api.flip = function (open) {
      if (SM.cardLocked && root._c && SM.cardLocked(root._c)) return;
      var willFlip = open === undefined ? !root.classList.contains('is-flipped') : !!open;
      root.classList.toggle('is-flipped', willFlip);
      if (frontFace) frontFace.inert = willFlip;
      if (backFace) backFace.inert = !willFlip;
      if (willFlip) {
        setTimeout(function () {
          rebuild();
          if (api.i < 0) api.play();
        }, 60);
      } else stopPlay();
    };
    if (frontFace) {
      root.addEventListener('click', function (e) {
        if (root.classList.contains('is-flipped')) return;
        if (e.target.closest('button, a, input, textarea, .term-link, summary')) return;
        api.flip(true);
      });
    }
    dotsEl.addEventListener('click', function (e) {
      var d = e.target.closest('.mf-dot');
      if (!d) return;
      e.stopPropagation();
      api.jump(Number(d.dataset.j));
    });

    function rebuild() {
      var curW = board.clientWidth ? board.clientWidth - 12 : stage.clientWidth;
      if (!api.ready || !curW || Math.abs(curW - builtW) < 2) return;
      var i = api.i;
      clearLater();
      build();
      if (i >= 0) go(i, true);
    }
    var rz = null;
    window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(rebuild, 220); });

    SM.mathReady(function (ok) {
      if (!ok) { noteEl.textContent = 'MathJax did not load. Check the internet connection and reload.'; return; }
      build();
      if (completed) {
        root.classList.add('is-completed');
        go(frames.length - 1, true);
      }
      else chrome(-1);
    });
    return api;
  }

  /* ---------- the whole derivation on one page, aligned on "=" ---------- */
  function page(steps) {
    var lines = steps.map(function (st) {
      var p = T.split(st.tex), ann = st.move ? T.ann(st.move) : '';
      var a = ann ? ' && \\class{mf-ann}{\\scriptstyle ' + ann + '}' : '';
      return p ? p[0] + ' &= ' + p[1] + a : '& ' + st.tex + a;
    });
    return '\\[\\begin{aligned}' + lines.join(' \\\\[5pt] ') + '\\end{aligned}\\]';
  }

  SM.MathFlow = { mount: mount, page: page, measure: measure };
})();
```

---

#### `study-match/src/components/03-render.js`

```javascript
/* ==========================================================================
   Render: data.json -> sections (piles) -> sheets (topics) -> cards
   A "derivation" card in the data plays on a single flip card.
   ========================================================================== */
(function () {
  var SM = window.SM, esc = SM.esc;

  var ICONS = {
    atom: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2"><ellipse cx="24" cy="24" rx="20" ry="8"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-60 24 24)"/><circle cx="24" cy="24" r="4.5" fill="#F6B72B" stroke="none"/></svg>',
    curve: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M10 12c4 22 8 24 12 24s10-8 20-10"/><circle cx="22" cy="36" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    motion: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 40c8-26 28-26 36 0" stroke-dasharray="3 5"/><circle cx="24" cy="20.5" r="4.5" fill="#F6B72B" stroke="none"/><path d="M4 42h40"/></svg>',
    graph: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M8 34L40 12"/><path d="M30 18.9V40" stroke-dasharray="3 4"/><circle cx="30" cy="18.9" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    wave: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 24c5-14 10-14 15 0s10 14 15 0 10-14 12-6"/><circle cx="19" cy="24" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    lens: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M24 4c8 10 8 30 0 40c-8-10-8-30 0-40z"/><path d="M2 16l22 8 22 8" stroke-dasharray="3 4"/><circle cx="24" cy="24" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    flask: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M18 4h12M20 4v14L8 40a3 3 0 0 0 3 4h26a3 3 0 0 0 3-4L28 18V4"/><circle cx="22" cy="34" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    cell: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4"><ellipse cx="24" cy="24" rx="20" ry="15"/><circle cx="21" cy="22" r="6"/><circle cx="21" cy="22" r="2.5" fill="#F6B72B" stroke="none"/></svg>',
    sigma: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M36 8H12l14 16-14 16h24"/><circle cx="36" cy="40" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    book: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M6 8h14a4 4 0 0 1 4 4v28a3 3 0 0 0-3-3H6zM42 8H28a4 4 0 0 0-4 4v28a3 3 0 0 1 3-3h15z"/><circle cx="35" cy="18" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    bolt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M27 4L10 27h12l-2 17 18-24H26z"/><circle cx="38" cy="38" r="3.5" fill="#F6B72B" stroke="none"/></svg>'
  };
  SM.ICONS = ICONS;
  var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  SM.QUIZ = { mcq: 1, fill: 1, number: 1, order: 1, derive: 1, derivation: 1, eval: 1 };

  /* ---------- index + expand ---------- */
  SM.SECTIONS = SM.data.sections || [];
  SM.SHEETS = []; SM.CARDS = [];
  SM.SECTIONS.forEach(function (sec, si) {
    sec.short = sec.short || sec.title;
    (sec.sheets || []).forEach(function (sh, hi) {
      sh.sec = sec; sh.si = si; sh.hi = hi;
      sh.id = sh.id || SM.slug(sec.short + '-' + sh.title);
      var out = [];
      (sh.cards || []).forEach(function (c) {
        if (c.type === 'derivation') {
          var d = c, ph = d.phases || [];
          if (!ph.length) { var seen = {}; d.steps.forEach(function (s) { if (s.phase && !seen[s.phase]) { seen[s.phase] = 1; ph.push({ name: s.phase }); } }); }
          c.type = 'derive'; c.d = d; c.phases = ph;
          out.push(c);
        } else out.push(c);
      });
      sh.cards = out;
      // Separate IDs for new introductions preserve the original cards' progress.
      var legacyIndex = 0;
      sh.cards.forEach(function (c) { c.id = sh.id + '-' + (c.uid ? 'extra-' + c.uid : c.type === 'intuition' ? 'intro-' + c.term : legacyIndex++); c.sheet = sh; SM.CARDS.push(c); });
      sh.outline = sh.outline || sh.cards.filter(function (c) { return c.type !== 'page' && c.type !== 'order'; }).map(function (c) {
        return c.type === 'route' ? 'Goal and route' : c.type === 'derive' ? (c.title || 'Step-by-step derivation') : c.type === 'question' ? 'The question' : c.type === 'eval' ? 'Mark your answer' : c.type === 'score' ? 'Your score' : c.type === 'key' ? 'Key points' : (SM.QUIZ[c.type] ? 'Quiz' : c.title);
      }).filter(function (t, k, a) { return t && a.indexOf(t) === k; }).slice(0, 7);
      SM.SHEETS.push(sh);
    });
  });

  /* ---------- html ---------- */
  function coverHTML(sh) {
    return '<button class="cover" type="button" aria-expanded="false">' +
      '<span class="cv-head"><span class="cv-num">' + SM.pad2(sh.hi + 1) + '</span><span class="cv-meta"><b>' + esc(sh.sec.short) + '</b><span>Topic ' + (sh.hi + 1) + ' of ' + sh.sec.sheets.length + '</span></span></span>' +
      '<span class="cv-panel"><span class="cv-icon">' + (ICONS[sh.icon] || ICONS.book) + '</span><span class="cv-pt"><b>' + esc(sh.title) + '</b><span class="cv-sub">' + sh.cards.length + ' cards</span></span></span>' +
      '<span class="cv-list">' + sh.outline.map(function (o) { return '<span>' + esc(o) + '</span>'; }).join('') + '</span>' +
      '<span class="cv-cov"><span class="cv-cov-l">Topic coverage <span class="cv-due" data-due></span></span>' +
      '<span class="cv-cov-row"><span class="cv-track"><i data-fill></i></span><b class="cv-pct" data-pct>0%</b></span></span></button>';
  }
  function qHead(c) {
    var t = c.time || 60;
    return '<span class="card-index">' + esc(c.label || 'Quiz') + '</span>' +
      (SM.meta.autoRevealQuestions ? '' : '<button class="omr-reveal" type="button">' + EYE + '<span>Tap to reveal \u00b7 ' + t + 's</span></button>') +
      '<div class="omr-progress" hidden><span class="omr-count"><span>Time</span><b data-count>' + Math.floor(t / 60) + ':' + SM.pad2(t % 60) + '</b></span><div class="omr-bar"><span class="omr-fill" data-tfill></span></div></div>';
  }
  function chips(list) { return (list || []).map(function (e) { return '<span class="chip">' + SM.mathLabel(e) + '</span>'; }).join(''); }

  function cardHTML(c) {
    var a = ' data-card="' + c.id + '"', T = SM.tex;
    switch (c.type) {
      case 'intuition':
        return '<article class="card intuition-card"' + a + '><span class="card-index">In plain words</span>' +
          '<div class="intuition-content scroll-y"><h2 class="card-title">' + esc(c.title) + '</h2>' +
          '<p class="intuition-meaning">' + esc(c.meaning) + '</p>' +
          '<h3>Picture it</h3>' +
          (c.art ? '<div class="art intuition-art">' + c.art + '</div>' : '') +
          '<p class="card-body">' + esc(c.picture) + '</p>' +
          '<div class="intuition-example"><h3>For example</h3><p class="card-body">' + esc(c.example) + '</p></div>' +
          '<h3>Connect it to the definition</h3><p class="card-body">' + esc(c.bridge) + '</p></div></article>';
      case 'info':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Concept') + '</span>' +
          (c.art ? '<div class="art">' + c.art + '</div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
          '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
          (c.examples && c.examples.length ? '<div class="examples" style="margin-top:9px">' + chips(c.examples) + '</div>' : '') + '</div></article>';
      case 'math':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Example') + '</span><div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' +
          '<div><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p></div></article>';
      case 'scale':
        var max = c.max || (c.zones && c.zones.length ? c.zones[c.zones.length - 1].upTo : 1), min = c.min || 0, prev = min;
        var segs = (c.zones || []).map(function (z) { var w = (z.upTo - prev) / (max - min) * 100; prev = z.upTo; return { w: w, name: z.name }; });
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Try it') + '</span><div class="art"><div class="meter-wrap"><div class="spectrum">' +
          '<div class="spec-bar">' + segs.map(function (s) { return '<span style="flex:' + s.w.toFixed(2) + '"></span>'; }).join('') + '</div><i class="pin" data-pin></i>' +
          '<div class="spec-names">' + segs.map(function (s) { return '<span style="flex:' + s.w.toFixed(2) + '">' + esc(s.name) + '</span>'; }).join('') + '</div></div>' +
          '<div class="meter-read" data-read>Tap one below</div></div></div><div><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
          '<div class="examples" style="margin-top:9px">' + (c.chips || []).map(function (ch) { return '<button type="button" class="chip" data-chip data-v="' + ch.value + '">' + ch.label + '</button>'; }).join('') + '</div></div></article>';
      case 'fall':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Try it') + '</span><div class="art"><div class="drop-wrap"><div class="drop-track"><span class="drop-ball" data-ball></span></div><div class="meter-read" data-read>Pick one below</div></div></div>' +
          '<div><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
          '<div class="examples" style="margin-top:9px">' + (c.chips || []).map(function (ch) { return '<button type="button" class="chip" data-chip data-v="' + ch.value + '">' + ch.label + '</button>'; }).join('') + '</div></div></article>';
      case 'mcq':
        var order = SM.shuffle(c.options.map(function (o, k) { return k; }));
        var prompt = c.practice === 'remember-word' ? c.q.replace('____', '<span class="word-blank" aria-label="missing word">____</span>') : c.q;
        return '<article class="card omr"' + a + ' data-time="' + (c.time || 60) + '">' + qHead(c) +
          '<div class="omr-content" inert>' + (c.practice === 'remember-word' ? '<p class="legend">Choose the missing word.</p>' : '') + '<h2 class="card-title">' + prompt + '</h2><ul class="omr-options">' +
          order.map(function (k, n) { return '<li><button class="omr-option" type="button" data-k="' + k + '"><span class="bubble"></span><span>' + 'ABCDEF'[n] + '. ' + c.options[k] + '</span></button></li>'; }).join('') +
          '</ul><p class="omr-feedback" hidden></p></div></article>';
      case 'fill':
      case 'number':
        return '<article class="card omr"' + a + ' data-time="' + (c.time || 60) + '">' + qHead(c) +
          '<div class="omr-content" inert><h2 class="card-title">' + c.q + '</h2><div class="omr-input-row">' +
          '<input class="omr-input" aria-label="Your answer" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" ' + (c.type === 'number' ? 'placeholder="number or = to calculate" data-numerical' : 'placeholder="type here"') + '>' +
          (c.unit ? '<span class="omr-unit">' + c.unit + '</span>' : '') +
          '<button class="btn" type="button" data-check>Check</button></div>' + (c.type === 'number' ? '<button type="button" class="chip" data-calculator>Calculator =</button>' : '') + '<p class="omr-feedback" hidden></p></div></article>';
      case 'question':
        return '<article class="card qcard' + (c.textAnswer ? ' has-text-answer' : '') + '"' + a + '><span class="card-index">' + esc(c.label || 'Question') + '</span>' +
          (c.art ? '<div class="art">' + c.art + '</div>' : '') +
          '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="q-text">' + c.q + '</p></div>' +
          (c.textAnswer ? '<div class="written-answer"><div class="answer-label"><label for="answer-' + c.id + '">Your answer</label><span data-draft-status id="draft-' + c.id + '" role="status">Saves automatically on this device.</span></div>' +
            '<textarea class="answer-input" id="answer-' + c.id + '" data-written-answer rows="6" placeholder="Write your answer in your own words…" aria-describedby="draft-' + c.id + '"></textarea></div>' : '') +
          '<p class="q-hint">' + (c.hint || (c.textAnswer ? 'Type your answer here. Then swipe to mark yourself.' : 'Write your answer on paper first. Then swipe to mark yourself.')) + '</p></article>';
      case 'eval':
        var eo = SM.shuffle(c.options.map(function (o, k) { return k; }));
        return '<article class="card omr eval"' + a + '><span class="card-index">' + esc(c.label || 'Mark your answer') + '</span>' +
          '<div class="eval-content"><h2 class="card-title">' + c.q + '</h2><ul class="omr-options">' +
          eo.map(function (k, n) { return '<li><button class="omr-option" type="button" data-k="' + k + '"><span class="bubble"></span><span>' + 'ABCDEF'[n] + '. ' + c.options[k].t + '</span><em class="omr-m"></em></button></li>'; }).join('') +
          '</ul><p class="omr-feedback" hidden></p></div></article>';
      case 'score':
        return '<article class="card score"' + a + '><span class="card-index">' + esc(c.label || 'Your score') + '</span><h2 class="card-title">' + c.title + '</h2>' +
          '<div class="score-big"><b data-got>0</b><span data-of>/ 0</span></div><div class="score-bar"><i data-sbar></i></div>' +
          '<p class="card-body" data-smsg>Mark your answer on the cards before this one.</p><p class="legend">Green: 70% or more. Yellow: 40 to 69%. Red: below 40%.</p></article>';
      case 'key':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Key points') + '</span><h2 class="card-title">' + c.title + '</h2>' +
          '<ul class="key-list scroll-y">' + (c.points || []).map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></article>';
      case 'route':
        var st = c.d.steps;
        return '<article class="card"' + a + '><span class="card-index">Goal first</span><h2 class="card-title">' + (c.title || 'Where we are going') + '</h2>' +
          '<div class="scroll-y" style="display:flex;flex-direction:column;gap:9px">' +
          '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || st[0].tex) + '\\)</div></div>' +
          '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || st[st.length - 1].tex) + '\\)</div></div>' +
          '<ol class="route-list">' + c.phases.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' +
          (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') + '</div></article>';
      case 'derive':
        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], setupSVG = c.d.setup || c.d.art || '';
        return '<article class="card mf-card mf-flip-card"' + a + '><div class="mf-card-inner">' +
          '<div class="mf-face mf-front">' +
          '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span><button type="button" class="chip mf-flip-btn" data-mf="flip-open">Derive &#9654;</button></div>' +
          '<h2 class="card-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
          (setupSVG ? '<div class="art mf-front-art">' + setupSVG + '</div>' : '') +
          '<div class="scroll-y mf-front-route">' +
          '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || dst[0].tex) + '\\)</div></div>' +
          '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || dst[dst.length - 1].tex) + '\\)</div></div>' +
          (dph.length ? '<ol class="route-list">' + dph.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' : '') +
          (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') +
          '</div></div>' +
          '<div class="mf-face mf-back" inert>' +
          '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span>' +
          '<div class="mf-top-actions"><span class="mf-count"></span><button type="button" class="chip" data-mf="flip-back">Concept</button></div></div>' +
          '<h2 class="card-title mf-back-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
          '<div class="mf-phases"></div>' +
          '<div class="mf-board' + (setupSVG ? ' has-setup' : '') + '">' +
          (setupSVG ? '<div class="mf-setup art">' + setupSVG + '</div>' : '') +
          '<div class="mf-stage"></div></div>' +
          '<div class="mf-panel"><p class="mf-note">Press play. It stops at each decision so you can call the next move.</p><div class="mf-dots"></div>' +
          '<div class="mf-ctrl"><button type="button" class="chip" data-mf="prev" aria-label="Previous step">&#9664;</button>' +
          '<button type="button" class="chip mf-play" data-mf="play" aria-label="Play or pause">&#9654;</button>' +
          '<button type="button" class="chip" data-mf="next" aria-label="Next step">&#9654;&#9654;</button>' +
          '<button type="button" class="chip" data-mf="replay" aria-label="Replay from start">&#8634;</button>' +
          '<button type="button" class="chip mf-practise" data-mf="practise">Practise again</button></div></div>' +
          '<div class="mf-ask" hidden><span class="mf-ask-tag">Your move</span><p class="mf-ask-q"></p><div class="mf-ask-opts"></div>' +
          '<p class="mf-ask-why" hidden></p><button type="button" class="btn amber mf-ask-go" hidden>Continue &#9654;</button></div></div></div></article>';
      case 'page':
        return '<article class="card"' + a + '><span class="card-index">One page</span><h2 class="card-title">' + c.title + '</h2>' +
          '<p class="card-body">Every line, aligned on the equals sign. The amber note is the move that produced it.</p>' +
          '<div class="art scroll-y" style="align-items:flex-start"><div class="math page-math">' + SM.MathFlow.page(c.d.steps) + '</div></div></article>';
      case 'order':
        var items = SM.shuffle(c.items.map(function (t, k) { return k; }));
        return '<article class="card order"' + a + '><span class="card-index">Recall</span><h2 class="card-title">' + c.title + '</h2><p class="card-body">Tap the moves in the order they happen.</p>' +
          '<div class="order-list">' + items.map(function (k) { return '<button type="button" class="order-item" data-k="' + k + '"><span class="n"></span><span>' + c.items[k] + '</span></button>'; }).join('') + '</div>' +
          '<p class="omr-feedback" hidden></p></article>';
    }
    return '<article class="card"' + a + '><span class="card-index">Unknown card</span><p class="card-body">Card type "' + esc(c.type) + '" is not supported.</p></article>';
  }

  SM.render = function () {
    var shelf = SM.$('shelf'), html = '';
    SM.SECTIONS.forEach(function (sec, si) {
      html += '<div class="group is-stacked" data-si="' + si + '">';
      sec.sheets.forEach(function (sh, hi) {
        html += '<section class="sheet" data-sheet="' + sh.id + '" style="--n:' + sh.cards.length + ';z-index:' + (sec.sheets.length - hi) + '">' + coverHTML(sh) +
          '<div class="pages">' + sh.cards.map(function (c) { return cardHTML(c).replace(/<\/article>$/, SM.understandingHTML(c) + '</article>'); }).join('') + '</div></section>';
      });
      html += '</div>';
    });
    shelf.innerHTML = html;
    SM.groups = Array.prototype.slice.call(shelf.querySelectorAll('.group'));
    SM.sheetEls = Array.prototype.slice.call(shelf.querySelectorAll('.sheet'));
    SM.SHEETS.forEach(function (sh) { sh.el = shelf.querySelector('[data-sheet="' + sh.id + '"]'); });
    SM.CARDS.forEach(function (c) { c.el = shelf.querySelector('[data-card="' + c.id + '"]'); c.el._c = c; });
    shelf.querySelectorAll('.card-index, .chip').forEach(function (tag) { tag.innerHTML = SM.mathLabel(tag.innerHTML); });
  };

  /* ---------- widgets ---------- */
  SM.widgets = {
    scale: function (c) {
      var card = c.el, pin = card.querySelector('[data-pin]'), read = card.querySelector('[data-read]');
      var bs = card.querySelectorAll('[data-chip]');
      var max = c.max || c.zones[c.zones.length - 1].upTo, min = c.min || 0;
      bs.forEach(function (b, n) {
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          bs.forEach(function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on');
          var v = parseFloat(b.dataset.v), zone = '';
          for (var z = 0; z < c.zones.length; z++) if (v < c.zones[z].upTo || z === c.zones.length - 1) { zone = c.zones[z].name; break; }
          pin.style.left = Math.max(0, Math.min(100, (v - min) / (max - min) * 100)) + '%';
          read.innerHTML = (c.readout || '{label} \u2192 {zone}').replace('{label}', c.chips[n].label).replace('{value}', v).replace('{zone}', zone);
          SM.typeset(read);
        });
      });
      if (bs[0]) bs[0].click();
    },
    fall: function (c) {
      var card = c.el, ball = card.querySelector('[data-ball]'), read = card.querySelector('[data-read]');
      var bs = card.querySelectorAll('[data-chip]'), h = c.height || 20;
      bs.forEach(function (b, n) {
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          bs.forEach(function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on');
          var g = parseFloat(b.dataset.v), t = Math.sqrt(2 * h / g);
          ball.style.transition = 'none'; ball.style.top = '0px'; void ball.offsetWidth;
          ball.style.transition = 'top ' + t.toFixed(2) + 's cubic-bezier(0.11, 0, 0.5, 0)';
          ball.style.top = 'calc(100% - 20px)';
          read.innerHTML = (c.readout || '{label} \u00b7 t = {t} s').replace('{label}', c.chips[n].label).replace('{value}', g).replace('{t}', t.toFixed(2));
          SM.typeset(read);
        });
      });
    }
  };
})();
```

---

#### `study-match/src/components/04-shelf.js`

```javascript
/* ==========================================================================
   Shelf navigation: piles, opening sheets, one card per swipe / wheel gesture,
   keyboard, focus on the centred card, breadcrumb
   ========================================================================== */
(function () {
  var SM = window.SM;

  SM.initShelf = function () {
    var shelf = SM.$('shelf'), glideId = null, recallAnchor = null;

    function centreOffset(el) {
      var r = el.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      return shelf.scrollLeft + r.left + r.width / 2 - sr.left - shelf.clientWidth / 2;
    }
    function unfinishedAnchor() {
      if (!SM.definitionMatch() || !recallAnchor || SM.isDone(recallAnchor) ||
          !recallAnchor.sheet.el.classList.contains('is-open')) recallAnchor = null;
      return recallAnchor;
    }
    function scrollBounds() {
      var max = Infinity, boundary = null;
      if (SM.definitionMatch()) SM.SHEETS.forEach(function (sh) {
        if (!sh.el.classList.contains('is-open') || sh.el.closest('.group').classList.contains('is-stacked')) return;
        var locked = sh.cards.find(SM.cardLocked);
        if (locked && centreOffset(locked.el) < max) { boundary = locked.el; max = centreOffset(locked.el); }
      });
      var anchor = unfinishedAnchor();
      return { min: anchor ? Math.min(centreOffset(anchor.el), max) : 0, max: max, boundary: boundary };
    }
    SM.shelfBounds = scrollBounds;
    function keepDefinition(el) {
      if (glideId || !el) return;
      var r = el.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      if (Math.abs(r.left + r.width / 2 - sr.left - shelf.clientWidth / 2) > 40) return;
      if (unfinishedAnchor() && recallAnchor !== el._c) return;
      if (el && el._c && SM.definitionMatch() && SM.isDefinition(el._c) &&
          !SM.cardLocked(el._c) && !SM.isDone(el._c)) recallAnchor = el._c;
    }
    function mayLeaveDefinition() {
      if (!unfinishedAnchor()) return true;
      SM.toast('', 'Unlock this definition first', 'Confirm your answer or choose “I know this”.');
      return false;
    }

    function glideTo(el, duration) {
      var bounds = scrollBounds(), wanted = centreOffset(el);
      if (wanted < bounds.min - 1 && unfinishedAnchor()) el = recallAnchor.el;
      else if (wanted > bounds.max + 1 && bounds.boundary) el = bounds.boundary;
      duration = duration || 620;
      var start = performance.now();
      var fromX = el.getBoundingClientRect().left - shelf.getBoundingClientRect().left;
      var toX = shelf.clientWidth / 2 - el.getBoundingClientRect().width / 2;
      if (glideId) cancelAnimationFrame(glideId);
      shelf.style.scrollSnapType = 'none';
      function frame(now) {
        var t = Math.min((now - start) / duration, 1), eased = 1 - Math.pow(1 - t, 3);
        var wantX = fromX + (toX - fromX) * eased;
        var nowX = el.getBoundingClientRect().left - shelf.getBoundingClientRect().left;
        shelf.scrollLeft += nowX - wantX;
        if (t < 1) glideId = requestAnimationFrame(frame);
        else {
          glideId = null;
          shelf.style.scrollSnapType = '';
          var finalX = el.getBoundingClientRect().left - shelf.getBoundingClientRect().left;
          shelf.scrollTo({ left: shelf.scrollLeft + (finalX - toX), behavior: 'smooth' });
          noteCurrentReading();
        }
      }
      glideId = requestAnimationFrame(frame);
    }
    SM.glideTo = glideTo;

    SM.stackAll = function () {
      if (!mayLeaveDefinition()) return;
      if (glideId) { cancelAnimationFrame(glideId); glideId = null; }
      shelf.style.scrollSnapType = '';
      SM.sheetEls.forEach(function (s) { s.classList.remove('is-open'); s.querySelector('.cover').setAttribute('aria-expanded', 'false'); });
      SM.groups.forEach(function (g) { g.classList.add('is-stacked'); });
      shelf.scrollTo({ left: 0, behavior: 'smooth' });
    };

    SM.groups.forEach(function (group) {
      group.addEventListener('click', function (e) {
        if (!group.classList.contains('is-stacked')) return;
        e.stopPropagation(); e.preventDefault();
        group.classList.remove('is-stacked');
        setTimeout(function () { glideTo(group.querySelector('.cover'), 500); }, 60);
      }, true);
    });

    function toggleSheet(sheet, open) {
      var willOpen = open === undefined ? !sheet.classList.contains('is-open') : open;
      if (!willOpen && !mayLeaveDefinition()) return;
      sheet.classList.toggle('is-open', willOpen);
      sheet.querySelector('.cover').setAttribute('aria-expanded', String(willOpen));
      if (willOpen) glideTo(sheet.querySelector('.card'));
      else glideTo(sheet.querySelector('.cover'), 310);
    }
    SM.sheetEls.forEach(function (sheet) {
      sheet.querySelector('.cover').addEventListener('click', function () { toggleSheet(sheet); });
    });

    SM.goSection = function (i) {
      if (!mayLeaveDefinition()) return;
      var g = SM.groups[i];
      if (SM.definitionMatch()) SM.sheetEls.forEach(function (s) {
        s.classList.remove('is-open'); s.querySelector('.cover').setAttribute('aria-expanded', 'false');
      });
      g.classList.remove('is-stacked');
      setTimeout(function () { glideTo(g.querySelector('.cover'), 520); }, 60);
    };

    /* ---------- one step at a time ---------- */
    function targets() {
      return Array.prototype.filter.call(shelf.querySelectorAll('.cover, .sheet.is-open .card'), function (el) {
        var g = el.closest('.group');
        return !(g.classList.contains('is-stacked') && el.closest('.sheet') !== g.querySelector('.sheet'));
      });
    }
    function centred() {
      var mid = shelf.getBoundingClientRect().left + shelf.clientWidth / 2, best = null, bd = Infinity;
      targets().forEach(function (el) {
        var r = el.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mid);
        if (d < bd) { bd = d; best = el; }
      });
      return best;
    }
    SM.centred = centred;
    // Opening a previously hidden sheet need not cross an observer threshold.
    // Record the centred reading card after navigation as well as intersections.
    function noteCurrentReading() {
      var el = centred();
      if (!el || !el._c || !el.closest('.sheet').classList.contains('is-open') || el.closest('.group').classList.contains('is-stacked')) return;
      var r = el.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      if (Math.min(r.right, sr.right) - Math.max(r.left, sr.left) >= r.width * 0.6) {
        keepDefinition(el); SM.markSeen(el._c);
      }
    }
    var readingTimer;
    shelf.addEventListener('scroll', function () {
      clearTimeout(readingTimer);
      readingTimer = setTimeout(function () {
        if (glideId) return;
        var bounds = scrollBounds(), wanted = Math.max(bounds.min, Math.min(bounds.max, shelf.scrollLeft));
        if (Math.abs(shelf.scrollLeft - wanted) > 1) {
          shelf.scrollTo({ left: wanted, behavior: 'smooth' }); return;
        }
        noteCurrentReading();
        var mid = shelf.getBoundingClientRect().left + shelf.clientWidth / 2;
        SM.CARDS.forEach(function (c) {
          if (!c.el.classList.contains('is-flipped')) return;
          var r = c.el.getBoundingClientRect();
          if (Math.abs(r.left + r.width / 2 - mid) > 40) {
            if (c.type === 'derive' && c.player && c.player.flip) c.player.flip(false);
            else if (SM.flipDefinition) SM.flipDefinition(c, false);
          }
        });
      }, 160);
    });
    SM.step = function (dir) {
      var list = targets(), cur = centred(), i = list.indexOf(cur);
      var next = list[Math.max(0, Math.min(list.length - 1, i + dir))];
      if (!next || next === cur) return;
      var r = next.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      var bounds = scrollBounds(), wanted = shelf.scrollLeft + (r.left + r.width / 2) - (sr.left + shelf.clientWidth / 2);
      shelf.scrollTo({ left: Math.max(bounds.min, Math.min(bounds.max, wanted)), behavior: 'smooth' });
    };

    // mouse wheel / trackpad: one gesture = one card, however hard it is flicked
    var locked = false, idleT = null, acc = 0;
    shelf.addEventListener('wheel', function (e) {
      if (e.ctrlKey || !SM.$('mc').hidden) return;
      var vertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      var sc = e.target.closest('.scroll-y, .omr-content, .eval-content, .mf-ask, textarea, .has-text-answer');
      if (sc && vertical && sc.scrollHeight > sc.clientHeight + 2) return;
      var hsc = e.target.closest('.mf-board');
      if (hsc && !vertical && hsc.scrollWidth > hsc.clientWidth + 2) return;
      e.preventDefault();
      clearTimeout(idleT);
      idleT = setTimeout(function () { locked = false; acc = 0; }, 310);
      if (locked) return;
      acc += vertical ? e.deltaY : e.deltaX;
      if (Math.abs(acc) < 24) return;
      SM.step(acc > 0 ? 1 : -1);
      acc = 0; locked = true;
    }, { passive: false });

    /* ---------- focus, breadcrumb, "seen" ---------- */
    var crumbEl = SM.$('crumb');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var el = en.target;
          el._visible = en.isIntersecting && en.intersectionRatio >= 0.5;
          el.classList.toggle('is-focus', en.isIntersecting && en.intersectionRatio >= 0.8);
          if (!en.isIntersecting || en.intersectionRatio < 0.6) return;
          var isCard = el.classList.contains('card'), sheet = el.closest('.sheet');
          if (isCard && !sheet.classList.contains('is-open')) return;
          var sh = SM.SHEETS.filter(function (x) { return x.el === sheet; })[0];
          var text = sh.sec.short + ' › ' + sh.title;
          if (sheet.parentNode.classList.contains('is-stacked')) text = sh.sec.short + ' · ' + sh.sec.sheets.length + ' topics · tap the pile';
          if (isCard && !SM.cardLocked(el._c)) { keepDefinition(el); SM.markSeen(el._c); text += ' › ' + (sh.cards.indexOf(el._c) + 1) + ' / ' + sh.cards.length; }
          crumbEl.textContent = text;
          SM.setActiveSection(sh.si);
        });
      }, { root: shelf, threshold: [0, 0.5, 0.6, 0.8, 0.95] });
      shelf.querySelectorAll('.card, .cover').forEach(function (el) { io.observe(el); });
    }

    /* ---------- keyboard (desktop) ---------- */
    document.addEventListener('keydown', function (e) {
      if (document.querySelector('dialog[open]')) return;
      if (e.target.closest('summary, .understanding, .term-link, .term-definition, textarea, [contenteditable="true"]')) return;
      if (e.target.tagName === 'INPUT' || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!SM.$('mc').hidden) { if (e.key === 'Escape') SM.closeMC(); return; }
      var k = e.key, cur = centred(), c = cur && cur._c;
      if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown') { e.preventDefault(); SM.step(1); return; }
      if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') { e.preventDefault(); SM.step(-1); return; }
      if (k === 'f' || k === 'F') { SM.toggleFullscreen(); return; }
      if (k === 'm' || k === 'M') { SM.openMC(); return; }
      if (k === 's' || k === 'S') { SM.stackAll(); return; }
      if (k === 't' || k === 'T') { SM.toggleTheme(); return; }
      if (!cur) return;
      if (cur.classList.contains('cover') && (k === 'Enter' || k === ' ')) {
        e.preventDefault();
        var g = cur.closest('.group');
        if (g.classList.contains('is-stacked')) { g.classList.remove('is-stacked'); setTimeout(function () { glideTo(g.querySelector('.cover'), 500); }, 60); }
        else toggleSheet(cur.closest('.sheet'));
        return;
      }
      if (!c) return;
      if (SM.isDefinition(c) && (k === 'Enter' || k === ' ') && !e.target.closest('button, a')) {
        e.preventDefault(); SM.flipDefinition(c); return;
      }
      var num = /^[1-6]$/.test(k) ? Number(k) - 1 : -1;
      if (c.type === 'derive' && c.player) {
        if (!c.el.classList.contains('is-flipped') && (k === 'Enter' || k === ' ')) {
          e.preventDefault(); if (c.player.flip) c.player.flip(true); return;
        }
        if (num >= 0 || k === 'Enter') { e.preventDefault(); c.player.pick(num >= 0 ? num : 99); return; }
        if (k === ' ') { e.preventDefault(); c.player.toggle(); return; }
        if (k === '.' || k === 'n') { c.player.next(); return; }
        if (k === ',' || k === 'p') { c.player.prev(); return; }
        if (k === 'r') { c.player.replay(); return; }
      }
      if (SM.keyQuestion && SM.keyQuestion(c, k, num, e)) return;
    });
  };
})();
```

---

#### `study-match/src/styles/05-cards.css`

```css
.card {
  flex: 0 0 var(--card-w); width: var(--card-w); height: calc(100% - 22px); margin-left: var(--gap);
  scroll-snap-align: center; scroll-snap-stop: always;
  border-radius: 22px; border: 1px solid var(--line);
  background: var(--card); color: var(--ink); box-shadow: var(--shadow);
  padding: 16px; display: flex; flex-direction: column; gap: 10px; overflow: hidden; position: relative;
}
.card-index {
  align-self: flex-start; font-size: 10px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase;
  background: var(--lav); color: var(--violet); border-radius: 999px; padding: 4px 10px;
}
.card.omr .card-index, .card.order .card-index { background: var(--amber-bg); color: var(--hl); }
.card-title { font-size: var(--fs-title); font-weight: 800; line-height: 1.22; letter-spacing: -0.01em; overflow-wrap: anywhere; }
.card-body { font-size: var(--fs-body); line-height: 1.5; color: var(--ink-2); overflow-wrap: anywhere; }
.examples { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  font-size: var(--fs-small); font-weight: 600; background: var(--lav); color: var(--ink);
  border-radius: 9px; padding: 7px 10px; display: inline-block; border: 0;
}
button.chip { appearance: none; cursor: pointer; -webkit-tap-highlight-color: transparent; }
button.chip.is-on { background: var(--violet); color: var(--on-violet); }
.art {
  flex: 1 1 auto; min-height: 0; display: flex; align-items: center; justify-content: center;
  background: var(--lav); border-radius: 16px; padding: 12px; color: var(--violet);
}
.intuition-art { min-height: 130px; margin: 6px 0; padding: 8px; }
.art > svg { width: 100%; max-height: 100%; height: auto; overflow: visible; }
.art .f { fill: var(--violet); }
.art .s { fill: var(--lav-2); }
.art .ok { stroke: var(--violet); stroke-width: 2; }
.art .t { fill: var(--ink); font-family: inherit; font-weight: 700; }
.art .i { fill: var(--on-violet); font-family: inherit; font-weight: 700; }
.art .h { fill: var(--amber); }
.art .hk { stroke: var(--amber); stroke-width: 2; stroke-linecap: round; fill: none; }
.art .lk { stroke: var(--violet); stroke-width: 2; stroke-linecap: round; fill: none; }
.art .gk { stroke: var(--ink-2); stroke-width: 1.6; stroke-linecap: round; fill: none; opacity: 0.5; }
.math { font-size: 15px; width: 100%; text-align: center; overflow-x: auto; overflow-y: hidden; color: var(--ink); }
.scroll-y { overflow-y: auto; min-height: 0; }

/* Widgets */
.meter-wrap { width: 100%; }
.spectrum { position: relative; width: 100%; padding-top: 8px; }
.spec-bar { display: flex; height: 14px; border-radius: 999px; overflow: hidden; }
.spec-bar span:nth-child(3n+1) { background: var(--lav-2); }
.spec-bar span:nth-child(3n+2) { background: color-mix(in srgb, var(--violet) 45%, var(--lav-2)); }
.spec-bar span:nth-child(3n) { background: var(--violet); }
.spec-names { display: flex; font-size: 10px; font-weight: 700; color: var(--ink-2); margin-top: 4px; }
.spec-names span { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-right: 3px; }
.pin { position: absolute; top: 0; left: 0; width: 6px; height: 30px; border-radius: 3px; background: var(--amber);
  box-shadow: 0 0 0 2px var(--card); transform: translateX(-50%); transition: left 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); }
.meter-read { margin-top: 10px; font-size: 13.5px; font-weight: 700; text-align: center; color: var(--ink); min-height: 36px; }
.drop-wrap { width: 100%; display: flex; flex-direction: column; gap: 10px; }
.drop-track { position: relative; width: 100%; height: 110px; border-bottom: 3px solid var(--violet); }
.drop-ball { position: absolute; left: 50%; top: 0; width: 20px; height: 20px; margin-left: -10px; border-radius: 50%; background: var(--amber); box-shadow: 0 0 0 3px var(--card); }

/* Route card */
.route-eq { background: var(--lav); border-radius: 14px; padding: 8px 10px; }
.route-eq small { display: block; font-size: 10px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; color: var(--muted); margin-bottom: 2px; }
.route-eq.goal { background: var(--amber-bg); box-shadow: inset 0 0 0 1.5px var(--amber); }
.route-list { list-style: none; display: flex; flex-direction: column; gap: 7px; counter-reset: r; }
.route-list li { counter-increment: r; display: flex; gap: 9px; font-size: 12.5px; line-height: 1.4; color: var(--ink-2); }
.route-list li::before { content: counter(r); flex: 0 0 20px; height: 20px; border-radius: 50%; background: var(--violet); color: var(--on-violet);
  font-size: 11px; font-weight: 800; display: grid; place-items: center; }
.route-list b { color: var(--ink); }
.legend { font-size: 12px; line-height: 1.45; color: var(--muted); }
.page-math .mf-ann { fill: var(--hl); color: var(--hl); }
.card.mf-flip-card { perspective: 1200px; padding: 0; background: transparent; border: 0; box-shadow: none; overflow: visible; }
.mf-card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1); }
.card.mf-flip-card.is-flipped .mf-card-inner { transform: rotateY(180deg); }
.mf-face {
  position: absolute; inset: 0; border-radius: 22px; border: 1px solid var(--line);
  background: var(--card); color: var(--ink); box-shadow: var(--shadow);
  padding: 12px 10px; display: flex; flex-direction: column; gap: 6px; overflow: hidden;
  backface-visibility: hidden; -webkit-backface-visibility: hidden;
}
.mf-back { transform: rotateY(180deg); }
.mf-front-art { width: 100%; flex: 0 0 46%; min-height: 45%; padding: 6px; }
.mf-front-route { display: flex; flex-direction: column; gap: 7px; flex: 1 1 auto; }

/* Order card */
.order-list { display: flex; flex-direction: column; gap: 7px; }
.order-item {
  appearance: none; border: 0; text-align: left; cursor: pointer; display: flex; gap: 9px; align-items: center;
  background: var(--lav); border-radius: 11px; padding: 9px 11px; font-size: 13px; font-weight: 600; color: var(--ink);
}
.order-item .n { flex: 0 0 20px; height: 20px; border-radius: 50%; border: 2px dashed var(--lav-2); display: grid; place-items: center; font-size: 11px; font-weight: 800; }
.order-item.is-placed { background: var(--sage-bg); }
.order-item.is-placed .n { border: 0; background: var(--sage); color: var(--card); }
.order-item.is-wrong { background: var(--coral-bg); }
.shake { animation: shake 0.35s ease; }
@keyframes shake { 20%, 60% { transform: translateX(-5px); } 40%, 80% { transform: translateX(5px); } }
/* the one-page derivation scales down to fit the card instead of clipping the notes */
.page-math { overflow: visible; }
.page-math mjx-container { min-width: 0 !important; max-width: 100%; display: block; margin: 0 !important; }
.page-math mjx-container svg { max-width: 100%; height: auto; }
```

---

#### `study-match/src/styles/07-mathflow.css`

```css
/* MathFlow player card */
:root {
  --mf-given: var(--ink);
  --mf-step: #b45309;
  --mf-cancel: #be123c;
  --mf-result: #0369a1;
  --mf-result-bg: rgba(3, 105, 161, 0.14);
}
[data-theme="dark"] {
  --mf-given: #f1f5f9;
  --mf-step: #fbbf24;
  --mf-cancel: #fb7185;
  --mf-result: #38bdf8;
  --mf-result-bg: rgba(56, 189, 248, 0.18);
}
.card.mf-card:not(.mf-flip-card) { padding: 14px 12px; gap: 9px; }
.mf-top { display: flex; justify-content: space-between; align-items: center; gap: 6px; }
.mf-top-actions { display: flex; align-items: center; gap: 6px; }
.mf-back-title { font-size: 14px; font-weight: 800; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mf-flip-btn { background: var(--violet); color: var(--on-violet); }
.mf-count { font-size: 11px; font-weight: 700; color: var(--muted); font-variant-numeric: tabular-nums; }
.mf-phases { display: flex; gap: 5px; overflow-x: auto; scrollbar-width: none; flex: 0 0 auto; }
.mf-phases::-webkit-scrollbar { display: none; }
.mf-ph { flex: 0 0 auto; font-size: 10.5px; font-weight: 700; padding: 4px 8px; border-radius: 999px; background: var(--lav); color: var(--muted); transition: background 0.3s, color 0.3s; }
.mf-ph.is-past { color: var(--mf-result); box-shadow: inset 0 0 0 1px var(--mf-result); }
.mf-ph.is-now { background: var(--violet); color: var(--on-violet); }
.mf-board {
  flex: 1 1 auto; min-height: 110px; display: flex; flex-direction: column; justify-content: flex-start;
  border-radius: 16px; background-color: var(--lav);
  background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 16px 16px; padding: 4px; gap: 4px; position: relative;
  overflow-x: auto; overflow-y: hidden; -webkit-overflow-scrolling: touch;
}
.mf-board.has-setup { min-height: 60%; }
.mf-setup {
  width: 100%; flex: 1 0 calc((var(--sheet-h, 620px) - 22px) * 0.46);
  min-height: calc((var(--sheet-h, 620px) - 22px) * 0.45);
  padding: 4px; border-radius: 12px; background: var(--card);
}
.mf-setup > svg { width: 100%; height: 100%; max-height: 100%; }
.mf-setup svg text.mf-part-on { fill: var(--mf-step) !important; font-weight: 800; text-decoration: underline; }
.mf-setup svg path.mf-part-on,
.mf-setup svg line.mf-part-on,
.mf-setup svg polyline.mf-part-on { stroke: var(--mf-step) !important; stroke-width: 2.8 !important; fill: none !important; }
.mf-stage { position: relative; width: 100%; flex: 0 0 auto; user-select: none; }
.mf-sp { position: absolute; left: 0; top: 0; overflow: visible; color: var(--mf-given); transform-origin: 2px 2px; transition: color 0.6s ease; will-change: transform, opacity; }
.mf-sp path, .mf-sp rect { fill: currentColor; stroke: none; }
.mf-sp.is-new, .mf-sp.is-op { color: var(--mf-step); }
.mf-sp.is-out { color: var(--mf-cancel); }
.mf-ghost { position: absolute; left: 0; top: 0; color: var(--ink-2); transform-origin: 0 0; white-space: nowrap;
  transition: transform 0.75s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.75s ease; }
.mf-ghost svg { display: block; }
.mf-strike { position: absolute; left: 0; top: 0; height: 2.5px; border-radius: 2px; background: var(--mf-cancel); transform-origin: 0 50%; }
.mf-box { position: absolute; left: 0; top: 0; overflow: visible; }
.mf-box rect { fill: none; stroke: var(--mf-result); stroke-width: 2.4; }
.mf-err { position: absolute; left: 6px; right: 6px; font: 600 11px/1.4 ui-monospace, Menlo, monospace; color: var(--coral); background: var(--coral-bg); border-radius: 8px; padding: 6px 8px; white-space: pre-wrap; word-break: break-all; }
.mf-note { font-size: 12px; line-height: 1.32; font-weight: 600; color: var(--ink-2); min-height: 26px; transition: opacity 0.2s ease; }
.mf-note b { color: var(--ink); }
.mf-dots { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; }
.mf-dot { appearance: none; border: 0; cursor: pointer; height: 7px; width: 7px; border-radius: 999px; background: var(--lav-2); padding: 0; transition: width 0.3s ease, background 0.3s; }
.mf-dot.is-ask { box-shadow: 0 0 0 2px var(--amber-bg), 0 0 0 3px var(--amber); }
.mf-dot.is-done { background: var(--violet); opacity: 0.45; }
.mf-dot.is-now { width: 18px; background: var(--violet); opacity: 1; }
.mf-ctrl { display: flex; gap: 5px; align-items: center; flex-wrap: wrap; }
.mf-ctrl .chip { min-width: 34px; text-align: center; padding: 5px 8px; }
.mf-ctrl .mf-play { background: var(--violet); color: var(--on-violet); }
.mf-practise { display: none; margin-left: auto; background: var(--mf-result-bg); color: var(--mf-result); }
.card.mf-card.is-completed .mf-practise { display: inline-block; }
.mf-panel, .mf-ask { display: flex; flex-direction: column; gap: 5px; flex: 0 0 auto; }
.mf-ask[hidden], .mf-panel[hidden] { display: none; }
.mf-ask-tag { align-self: flex-start; font-size: 10px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; background: var(--amber-bg); color: var(--hl); border-radius: 999px; padding: 3px 8px; }
.mf-ask-q { font-size: 12.5px; font-weight: 700; line-height: 1.28; }
.mf-ask-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.mf-ask-opts button { appearance: none; border: 0; cursor: pointer; background: var(--lav); color: var(--ink); border-radius: 10px; padding: 6px 8px; font-size: 11.5px; font-weight: 600; text-align: left; line-height: 1.22; overflow-wrap: anywhere; }
.mf-ask-opts button.is-correct { background: var(--mf-result-bg); box-shadow: inset 0 0 0 2px var(--mf-result); }
.mf-ask-opts button.is-wrong { background: var(--coral-bg); box-shadow: inset 0 0 0 2px var(--mf-cancel); text-decoration: line-through; }
.mf-ask-why { font-size: 12px; line-height: 1.32; color: var(--ink-2); font-weight: 600; }
.mf-ask-why[hidden], .mf-ask-go[hidden] { display: none; }
```

---

### 3. Changed Skill Files

#### `skills/01-schema.md`

```markdown
# 01 — data.json schema (every field, every card type)

Day 9 is a new syllabus deck for Quantum Mechanics I and Properties of Solids.
Author data directly as required by 00-START-HERE.md. Preserve the 168 original
cards, 19 intuition cards and 8 matrix examples during feature updates. Model-paper additions below
are examples for explicitly requested model papers and do not apply to this deck.

## The golden rule of JSON + TeX

Inside JSON strings **every backslash is written twice**.

| You mean (TeX) | You write in JSON |
|---|---|
| `\frac{a}{b}` | `"\\frac{a}{b}"` |
| `\( x^2 \)` | `"\\( x^2 \\)"` |
| `\alpha`, `\nabla`, `\theta` | `"\\alpha"`, `"\\nabla"`, `"\\theta"` |

A single backslash breaks the file or silently eats letters (`"\frac"` becomes a form-feed + `rac`).

Other JSON rules: double quotes only, no trailing commas, no comments, no `NaN`.
Inside text use `\u2019` or a plain `'` for apostrophes; never an unescaped `"`.

## Maths inside normal text

Any text field (title, body, q, options, why, note, legend) may contain inline maths written as
`\\( ... \\)`. Never use `$...$`. Keep inline maths short.

The fields `tex`, `move.by`, `start` are **bare TeX** (no `\\( \\)` around them).

---

## Top level

| field | required | meaning |
|---|---|---|
| `meta.title` | yes | Name of this course. Also keeps its progress separate from other courses. |
| `meta.subject` | no | Free text. |
| `meta.inlineChecks` | no | Set to `false` to omit inline self-review panels. This syllabus deck uses authored topic quizzes; Remember checks apply only to model papers. |
| `meta.autoRevealQuestions` | no | `true` for physics: reveal OMR cards automatically when centred, with no reveal button. Their timers use real time and pause when off the current card. |
| `meta.definitionChecks` | no | `true` enables trusted eight-word recall on definition info cards and independent per-sheet progression during matches. Default off for existing courses. See 08-definition-recall.md. |
| `meta.home` / `meta.opponent` | no | Team names. Default `"Focus"` vs `"Time"`. |
| `match.periodEnds` | no | Default `[25, 45, 70, 90]` (match minutes where each stretch ends). |
| `match.breaks` | no | Default `[5, 10, 5]` (minutes of break between stretches). |
| `match.timing` | no | Optional defaults: `{ "mode": "custom", "halfMinutes": 30, "halfTimeMinutes": 10, "hydrationMinutes": 5 }`. Real half duration is 20–90 in steps of 5; break durations are 1–30 integer real minutes. Halves end at displayed 45 and 90. If each half lasts at least 45 real minutes, hydration breaks occur at displayed 25 and 70. Only the match clock scales. |
| `sections` | yes | Array of sections. |

## Section

| field | required | meaning |
|---|---|---|
| `short` | yes | 2–12 characters. Shown on the nav chip. e.g. `"Optics"` |
| `title` | yes | Full name. |
| `sheets` | yes | 2–5 topics. |

## Sheet (a topic)

| field | required | meaning |
|---|---|---|
| `id` | yes | Unique, lowercase, hyphens. e.g. `"optics-mirror-formula"`. Never reuse. |
| `title` | yes | Short topic name (≤ 40 chars). |
| `icon` | no | One of: `atom, curve, motion, graph, wave, lens, flask, cell, sigma, book, bolt`. |
| `due` | no | Deadline in match minutes (5–90). Leave out to let the app spread deadlines. |
| `cards` | yes | About 6–14 cards for a syllabus topic. Model-paper sheets can be longer to include the question, full rubric, model answer, Remember card and three OMR checks. |

---

## Card types

Every card has `"type"`. Optional `"label"` is the small tag at the top (e.g. `"01"`, `"Quiz · OMR"`).

On a `question` card, `"textAnswer": true` adds a multiline answer box with a
locally saved draft. Use it for questions that can be answered in words without
equations or diagrams. It does not grade the draft; students use the marking cards.

For physics Remember checks, use ordinary `mcq` cards after the `key` card with
`"practice": "remember-word"`. Write exactly one `____` in each `q`, four word
choices, a valid `answer`, `time: 45` and `why`. Author exactly three unique checks
per Remember card. They count toward match scoring, coverage and completion.
See `06-match-and-tools.md` for the full physics practice-paper sequence.

Optional `"checks"` overrides the three automatic understanding checks on a card.
Supply exactly three objects, each with `"q"` (question) and `"a"` (reference answer).
Both support inline maths. Checks are self-assessed and do not alter exam marks.
On a `derivation`, these checks are shared by its expanded route, player and page cards.

### `question`, `eval`, `score`, `key` — practice-paper cards

```json
{ "type": "question", "label": "Question 1 · 3 marks", "title": "Question 1",
  "q": "Distinguish materials science from materials engineering.", "textAnswer": true }
```

The prompt is `q`; `textAnswer` is an optional boolean for prose-only answers.
Optional `art` follows the same SVG rules as `info`. A `hint` can replace the
default instruction. Do not enable a prose box on questions requiring diagrams,
graphs, equations or calculations.

```json
{ "type": "eval", "label": "Mark yourself · up to 1 mark",
  "q": "Did you link materials science to structure-property relationships?",
  "options": [
    { "t": "Relationship between structure and properties explained", "m": 1 },
    { "t": "Structure mentioned without its link to properties", "m": 0.5 },
    { "t": "Missing or incorrect", "m": 0 }
  ],
  "why": "Materials science seeks to understand structure-property relationships." }
```

`eval.options` has 2–5 objects with `t` (text) and `m` (marks), including a zero
mark option. Maxima across the rubric must add up to the exam question's marks.
This records the student's self-assessment, not automatic grading of their draft.

```json
{ "type": "score", "title": "Question 1: your score" }
```

The app calculates the score from the sheet's `eval` cards. Do not hard-code totals.

```json
{ "type": "key", "label": "Key points", "title": "Remember",
  "points": ["Materials science studies structure-property relationships.",
             "Materials engineering designs structure for required properties."] }
```

`points` is a non-empty list. Place the Remember card after the model answer,
then append the three word-completion OMR cards described below.

### `intuition` — plain-words introduction with required SVG picture

Place an `intuition` card immediately before a new concept's technical `info` card;
see `07-plain-words-and-glossary.md`. Every `intuition` card **must** include an
`art` SVG (drawn according to `03-svg-art.md`), followed by `picture` as a short
one-line caption explaining what to look at in the diagram.
```json
{ "type": "intuition", "term": "paraxial-approximation",
  "title": "Why only rays close to the axis focus sharply",
  "meaning": "The paraxial approximation keeps only rays that make very small angles with the axis.",
  "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>",
  "picture": "Look at the small angle arc α near O where height h over distance x gives the angle.",
  "example": "At 0.1 rad, sin(0.1) and tan(0.1) are both very close to 0.1.",
  "bridge": "Under this small-angle rule, all paraxial rays from O meet at one image point I." }
```

### `info` — one concept

Introduce the concept with a direct answer to “What is it?” before its properties.
Place a plain-language intuition card before a new topic's technical introduction;
see 07-plain-words-and-glossary.md. The top-level glossary array supplies authored
click/tap definitions. Intuition cards have separate term-based IDs. Mark a card's
defined terms with a defines array of glossary IDs so those terms remain unlinked
on that card; intuition.term automatically supplies its own exclusion. New worked
examples use a unique uid so they do not shift existing cards' numeric IDs.
With meta.definitionChecks enabled, definition info cards use the same authored
body as their correct statement. Art cards and math cards retain their existing
presentation. No extra recall question or reference field is required.
Keep the authored definition body on the flip card's front; writing belongs on
its back. Locked cards remain in the row with their original dimensions.
```json
{ "type": "info", "label": "01", "title": "Ionic bond",
  "body": "One atom transfers electrons to another, creating oppositely charged ions that attract.",
  "examples": ["NaCl", "MgO"],
  "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>" }
```
- `body`: 1–2 sentences, ≤ 220 characters. One idea per card.
- `examples`: 0–3 short chips (≤ 24 chars each).
- `art`: optional SVG (rules in `03-svg-art.md`). Instead of `art` you may give `"tex": "E = mc^2"` to show one formula large.

### `math` — a formula or worked example shown large
```json
{ "type": "math", "label": "Example", "title": "Worked example",
  "tex": "v^2 = 0 + 2(2)(25) = 100 \\Rightarrow v = 10\\ \\text{m/s}",
  "body": "From rest, \\(a = 2\\ \\text{m/s}^2\\) over \\(s = 25\\) m." }
```

### `derivation` — a derived result on a single flip card
See `02-derivations.md`. Shape:
```json
{ "type": "derivation", "title": "Bond energy, step by step",
  "legend": "\\(k\\) Coulomb constant, \\(r\\) separation.",
  "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>",
  "phases": [ { "name": "Model", "why": "energy = attraction + repulsion" } ],
  "steps": [ { "tex": "...", "phase": "Model", "note": "..." },
             { "tex": "...", "move": { "type": "differentiate", "wrt": "r" }, "note": "...", "ask": { ... } } ] }
```

### `mcq` — multiple choice
```json
{ "type": "mcq", "label": "Quiz · OMR", "time": 60,
  "q": "Which bond holds two water molecules together?",
  "options": ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
  "answer": 2,
  "why": "Hydrogen bonds form between an H on O, N or F and a lone pair on a neighbour." }
```
- `answer` is the **0-based index** of the right option (first option = 0). The app shuffles options itself.
- 3–4 options, all plausible, no "all of the above".

For each physics Remember card, author three unique cards in this form:

```json
{ "type": "mcq", "practice": "remember-word", "label": "Remember · word check 1 of 3", "time": 45,
  "q": "Materials science studies relationships between structure and ____.",
  "options": ["properties", "price", "colour", "volume"], "answer": 0,
  "why": "Materials science explains how structure determines material properties." }
```

The blank is exactly `____`; choices are words, without equations or numbers.
The app reveals each card automatically when centred if `autoRevealQuestions` is true.

### `fill` — type a word
```json
{ "type": "fill", "label": "Quiz · Fill in", "time": 60,
  "q": "A ______ bond forms when two nonmetal atoms share electrons.",
  "answer": "covalent|covalent bond", "why": "..." }
```
- `answer`: accepted answers separated by `|`. Case and trailing full stop are ignored.

### `number` — type a number
```json
{ "type": "number", "label": "Quiz · Number", "time": 60,
  "q": "From rest with \\(a = 3\\ \\text{m/s}^2\\), how fast after 24 m?",
  "answer": 12, "tolerance": 0, "unit": "m/s", "why": "..." }
```
- `answer` is a JSON number (not a string). `tolerance` is the allowed ± difference (use 0.01–0.1 for decimals).

### `scale` — interactive spectrum (optional)
```json
{ "type": "scale", "label": "Try it", "title": "Bond-o-meter", "body": "...",
  "min": 0, "max": 3.3,
  "zones": [ { "upTo": 0.4, "name": "nonpolar" }, { "upTo": 1.7, "name": "polar" }, { "upTo": 3.3, "name": "ionic" } ],
  "chips": [ { "label": "H–Cl", "value": 0.96 }, { "label": "Na–Cl", "value": 2.23 } ],
  "readout": "{label} · ΔEN {value} → {zone}" }
```

### `fall` — drop a ball under different g (optional, physics only)
```json
{ "type": "fall", "label": "Try it", "title": "Drop from 20 m", "body": "...", "height": 20,
  "chips": [ { "label": "Earth", "value": 9.8 }, { "label": "Moon", "value": 1.6 } ],
  "readout": "{label} · t = {t} s" }
```

`time` on quizzes: whole real seconds, 30–120 (default 60; Remember recall uses 45).
When the timer runs out the answer counts as wrong. Custom match clock scaling
does not change these seconds.
```

---

#### `skills/03-svg-art.md`

```markdown
# 03 — SVG pictures for `info`, `intuition` and `derivation` cards

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
| `lk` | violet line, no fill | lines, paths, angle arcs, axes, orbits |
| `gk` | faint grey line | ground lines, guides, dashed helpers |
| `h` | amber fill | the ONE thing to look at (electron, ball, key point) |
| `hk` | amber line, no fill | the ONE key arrow or path |
| `t` | text in ink colour, bold | labels on light backgrounds |
| `i` | text in light colour, bold | labels on top of `f` shapes |

- Set line thickness with `stroke-width="2"` (allowed). Dashes with `stroke-dasharray="5 5"` (allowed).
- **Angle arcs**: whenever an angle (such as θ, φ, α, β, i or r) is shown or used, draw its curved mark as a `<path d="M x1 y1 A r r 0 0 1 x2 y2" class="lk" stroke-width="1.8"/>` (line, no fill), placed **after** the lines/rays it marks so it stays visible on top.
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
```

---

#### `skills/07-plain-words-and-glossary.md`

```markdown
# Plain-language introductions and linked terms

Write all definitions and intuition-card text directly yourself. Runtime linking
may identify matching terms, but must not invent or generate educational text.

For each newly introduced concept, answer “What is it?” first. Give its category
and meaning, then a concrete diagram (`art`) with a short caption (`picture`),
an example and a connection to the formal definition. A list of properties or
applications does not replace this answer. Avoid defining one unfamiliar term
only through other unfamiliar terms.

Place an intuition card immediately before the technical introduction. Fields:
`type = "intuition"`, `term` = glossary entry ID, `title`, `meaning`, `art`
(required: one SVG drawn according to `03-svg-art.md`), `picture` (one short
caption line under the SVG saying what to look at), `example` and `bridge`.
All text fields are non-empty plain text. The app renders `art` followed by the
`picture` caption inside the scrollable reading area.

Example mental picture: for a particle on a line, a Hilbert space is a collection
of square-integrable wave functions ψ(x), each whole function being one vector.
The bridge explains inner product and completeness. Do not call only normalized
functions a vector space: adding or scaling them need not keep unit norm.

The top-level glossary is an array. Each entry has a unique id, term and direct
definition; aliases and a concrete example are optional. Define dual space, inner
product, Cauchy sequence and other prerequisite terms. Aliases must name the same
concept, or the distinction must be explicit in the definition.

The runtime links prerequisite terms in prose. Open definitions only on a click,
tap or keyboard activation such as Enter. Hover and keyboard focus alone must not
open a popup. Escape, the close button or clicking outside closes it. Definitions
can link to prerequisites and provide a Previous term button. Do not alter TeX or
diagrams, and do not nest links inside answer buttons or form fields.

Do not link the term a card is defining, including its aliases. An intuition
card automatically excludes its term. List additional defined concepts in the
card's defines array of glossary IDs (for example, both ket and bra). A technical
definition card should also declare defines. Prerequisites remain clickable.

Explain a quantum state as the preparation description used to predict outcome
probabilities. Introduce this before using state in the definition of a ket.
For the mathematical tools chapter, start with two-entry columns and 2×2 matrices:
ket = column, bra = conjugated row, bra-ket = row-by-column scalar, outer product
= column-by-row matrix, operator = matrix acting on a column, adjoint = conjugate
transpose. Reuse one normalized state and a consistent pair of matrices for
commutators and uncertainty. Then connect this finite-dimensional picture to
wave functions; do not present a two-state example as the canonical x–p pair.

Glossary popups remain click/tap-only reading aids. The separate short definition
recall flow uses info.body as its correct statement; follow 08-definition-recall.md
for eight-word checks, self-comparison and match-only progression. Do not add
writing boxes to glossary popups, intuition cards, math or graphics cards.

Keep original cards' numeric IDs when inserting introductions. Intuition cards
use separate term-based IDs, and added matrix examples use explicit uid fields,
so existing answers and progress survive.
```

---

### 4. Short Notes

#### Files changed
- `study-match/data/data.json`
- `study-match/src/components/02-mathflow.js`
- `study-match/src/components/03-render.js`
- `study-match/src/components/04-shelf.js`
- `study-match/src/styles/05-cards.css`
- `study-match/src/styles/07-mathflow.css`
- `skills/01-schema.md`
- `skills/03-svg-art.md`
- `skills/07-plain-words-and-glossary.md`

#### What was changed
1. **Change 1 (Pictures on plain-words `intuition` cards):**
   - Added an `art` SVG diagram and a short one-line `picture` caption to all 8 `intuition` cards in `study-match/data/data.json`.
   - Updated `03-render.js` (`case 'intuition'`) and `05-cards.css` (`.intuition-art`) so each intuition card displays the `art` SVG followed by `picture` as its caption.
   - Updated `skills/01-schema.md` and `skills/07-plain-words-and-glossary.md` to require `art` on `intuition` cards.
2. **Change 2 (Larger derivation `setup` picture and single-line equations):**
   - Enlarged `.mf-setup` in `07-mathflow.css` and `.mf-front-art` in `05-cards.css` to span 100% of the card width and at least 45% of the card height on a phone screen.
   - Removed `splitLongTex` and line wrapping from `02-mathflow.js`. Equations now stay on a single line, using one consistent scale `kMain` across main steps down to a minimum scale of `0.45`, and allow horizontal scrolling inside `.mf-board` (and horizontal trackpad/wheel scrolling in `04-shelf.js`) if a line is still wider than the board at `0.45`.
3. **Change 3 (Root cause and fix for hidden angle arcs in SVGs):**
   - **Root cause:** First, the SVGs in `data.json` only had `<text>` labels (`θ₁`, `φ₁`, `α₁`, `β`) without `<path d="M ... A ...">` arc elements, and `.art .lk`/`.hk`/`.gk` in `05-cards.css` had no default `stroke-width`. Second, `.mf-setup svg .mf-part-on` in `07-mathflow.css` forced `fill: var(--mf-step) !important;` on highlighted SVG elements, which fills an open `<path>` arc instead of stroking its line.
   - **Fix:** Added default `stroke-width`, `stroke-linecap: round`, and `fill: none` to `.art .lk`, `.art .hk`, and `.art .gk` in `05-cards.css`, changed `.mf-setup svg path.mf-part-on` in `07-mathflow.css` to use `stroke: var(--mf-step) !important; fill: none !important;`, added explicit `<path d="M ... A ..." class="lk" stroke-width="1.8"/>` angle arcs to the SVGs in `data.json`, and documented the angle-arc rule in `skills/03-svg-art.md`.
4. **Anything that could not be done:**
   - Everything requested in Changes 1, 2, and 3 was completed.
