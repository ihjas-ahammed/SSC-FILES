### 1. Full `study-match/data/data.json`

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
              "art": [
                { "op": "polygon", "points": [[32, 90], [215, 34], [215, 146]], "role": "s", "name": "cone" },
                { "op": "line", "x1": 115, "y1": 16, "x2": 115, "y2": 58, "role": "lk", "width": 3, "name": "AB" },
                { "op": "line", "x1": 115, "y1": 122, "x2": 115, "y2": 164, "role": "lk", "width": 3, "name": "AB" },
                { "op": "line", "x1": 215, "y1": 16, "x2": 215, "y2": 164, "role": "lk", "width": 2, "name": "SS" },
                { "op": "line", "x1": 32, "y1": 90, "x2": 215, "y2": 34, "role": "lk", "width": 1.8, "name": "cone" },
                { "op": "line", "x1": 32, "y1": 90, "x2": 215, "y2": 146, "role": "lk", "width": 1.8, "name": "cone" },
                { "op": "arrow", "x1": 32, "y1": 90, "x2": 215, "y2": 90, "role": "hk", "width": 2.5, "name": "ray" },
                { "op": "arc", "cx": 32, "cy": 90, "r": 32, "start": -17, "end": 17, "role": "lk", "width": 1.8, "name": "angle" },
                { "op": "circle", "cx": 32, "cy": 90, "r": 4, "role": "h", "name": "P" },
                { "op": "text", "x": 20, "y": 94, "text": "P", "size": 12, "role": "t", "name": "P" },
                { "op": "text", "x": 115, "y": 13, "text": "A", "size": 11, "align": "center", "role": "t", "name": "AB" },
                { "op": "text", "x": 115, "y": 175, "text": "B", "size": 11, "align": "center", "role": "t", "name": "AB" },
                { "op": "text", "x": 162, "y": 82, "text": "Ray (λ→0)", "size": 11, "align": "center", "role": "t", "name": "ray" },
                { "op": "text", "x": 228, "y": 28, "text": "S", "size": 11, "role": "t", "name": "SS" },
                { "op": "text", "x": 228, "y": 160, "text": "S'", "size": 11, "role": "t", "name": "SS" }
              ],
              "picture": "Look at the sharp cone of rays from P through wide opening AB onto screen SS'.",
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
              ],
              "art": [
                { "op": "polygon", "points": [[34, 90], [214, 42], [214, 138]], "role": "s", "name": "patch" },
                { "op": "line", "x1": 112, "y1": 18, "x2": 112, "y2": 62, "role": "lk", "width": 3, "name": "AB" },
                { "op": "line", "x1": 112, "y1": 118, "x2": 112, "y2": 162, "role": "lk", "width": 3, "name": "AB" },
                { "op": "line", "x1": 214, "y1": 18, "x2": 214, "y2": 162, "role": "lk", "width": 2, "name": "SS" },
                { "op": "line", "x1": 34, "y1": 90, "x2": 214, "y2": 42, "role": "lk", "width": 1.8, "name": "edge1" },
                { "op": "line", "x1": 34, "y1": 90, "x2": 214, "y2": 138, "role": "lk", "width": 1.8, "name": "edge2" },
                { "op": "arrow", "x1": 34, "y1": 90, "x2": 210, "y2": 90, "role": "hk", "width": 2.6, "name": "ray" },
                { "op": "arc", "cx": 34, "cy": 90, "r": 30, "start": -15, "end": 15, "role": "lk", "width": 1.8, "name": "cone" },
                { "op": "circle", "cx": 34, "cy": 90, "r": 4, "role": "h", "name": "P" },
                { "op": "text", "x": 20, "y": 94, "text": "P", "size": 12, "role": "t", "name": "P" },
                { "op": "text", "x": 112, "y": 14, "text": "A", "size": 11, "align": "center", "role": "t", "name": "AB" },
                { "op": "text", "x": 112, "y": 174, "text": "B", "size": 11, "align": "center", "role": "t", "name": "AB" },
                { "op": "text", "x": 164, "y": 82, "text": "Ray (λ→0)", "size": 11, "align": "center", "role": "t", "name": "ray" },
                { "op": "text", "x": 228, "y": 30, "text": "S", "size": 11, "role": "t", "name": "SS" },
                { "op": "text", "x": 228, "y": 158, "text": "S'", "size": 11, "role": "t", "name": "SS" }
              ]
            },
            {
              "type": "intuition",
              "term": "optical-path-length",
              "title": "Why denser media count as longer paths",
              "meaning": "Optical path length is the vacuum distance that light would travel in the same time it takes to cross a medium.",
              "art": [
                { "op": "rect", "x": 65, "y": 24, "w": 80, "h": 52, "rx": 6, "role": "s ok", "name": "glass" },
                { "op": "arrow", "x1": 24, "y1": 50, "x2": 185, "y2": 50, "role": "lk", "width": 2.2, "name": "d" },
                { "op": "line", "x1": 65, "y1": 84, "x2": 65, "y2": 142, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "guide" },
                { "op": "line", "x1": 145, "y1": 84, "x2": 145, "y2": 112, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "guide" },
                { "op": "arrow", "x1": 65, "y1": 130, "x2": 185, "y2": 130, "role": "hk", "width": 3, "name": "Lop" },
                { "op": "circle", "cx": 65, "cy": 130, "r": 4, "role": "h", "name": "Lop" },
                { "op": "circle", "cx": 185, "cy": 130, "r": 3.5, "role": "f", "name": "Lop" },
                { "op": "text", "x": 105, "y": 43, "text": "Glass (n = 1.5)", "size": 11, "align": "center", "role": "t", "name": "glass" },
                { "op": "text", "x": 105, "y": 68, "text": "d = 2 cm", "size": 11, "align": "center", "role": "t", "name": "d" },
                { "op": "text", "x": 125, "y": 118, "text": "L_op = n d = 3 cm", "size": 12, "align": "center", "role": "t", "name": "Lop" },
                { "op": "text", "x": 125, "y": 154, "text": "Same travel time τ in vacuum", "size": 11, "align": "center", "role": "t", "name": "Lop" }
              ],
              "picture": "Compare the 2 cm glass block (top) with the 3 cm vacuum path (bottom) that takes the exact same time.",
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
              ],
              "art": [
                { "op": "curve", "points": [[32, 138], [124, 96], [224, 38]], "role": "lk", "width": 2.4, "name": "C" },
                { "op": "line", "x1": 114, "y1": 100, "x2": 142, "y2": 85, "role": "hk", "width": 3.5, "name": "ds" },
                { "op": "circle", "cx": 32, "cy": 138, "r": 3.5, "role": "f", "name": "A" },
                { "op": "circle", "cx": 128, "cy": 92, "r": 4, "role": "h", "name": "ds" },
                { "op": "circle", "cx": 224, "cy": 38, "r": 3.5, "role": "f", "name": "B" },
                { "op": "text", "x": 20, "y": 146, "text": "A", "size": 12, "role": "t", "name": "A" },
                { "op": "text", "x": 86, "y": 98, "text": "C", "size": 12, "role": "t", "name": "C" },
                { "op": "text", "x": 128, "y": 78, "text": "ds in n(x,y,z)", "size": 11, "align": "center", "role": "t", "name": "ds" },
                { "op": "text", "x": 234, "y": 40, "text": "B", "size": 12, "role": "t", "name": "B" },
                { "op": "text", "x": 130, "y": 152, "text": "L_op = cτ = ∫ n ds", "size": 12, "align": "center", "role": "t", "name": "C" }
              ]
            },
            {
              "type": "intuition",
              "term": "fermats-principle",
              "title": "How light chooses its path",
              "meaning": "Fermat's principle says light travels along a path whose travel time is stationary compared with slightly different nearby paths.",
              "art": [
                { "op": "curve", "points": [[30, 138], [115, 32], [230, 42]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "ACprimeB" },
                { "op": "curve", "points": [[30, 138], [148, 148], [230, 42]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "ADB" },
                { "op": "curve", "points": [[30, 138], [130, 92], [230, 42]], "role": "hk", "width": 2.8, "name": "ACB" },
                { "op": "arc", "cx": 30, "cy": 138, "r": 34, "start": -42, "end": -6, "role": "lk", "width": 1.8, "name": "ACB" },
                { "op": "circle", "cx": 30, "cy": 138, "r": 4, "role": "h", "name": "A" },
                { "op": "circle", "cx": 230, "cy": 42, "r": 4, "role": "f", "name": "B" },
                { "op": "text", "x": 18, "y": 148, "text": "A", "size": 12, "role": "t", "name": "A" },
                { "op": "text", "x": 238, "y": 42, "text": "B", "size": 12, "role": "t", "name": "B" },
                { "op": "text", "x": 112, "y": 52, "text": "Trial path C'", "size": 11, "role": "t", "name": "ACprimeB" },
                { "op": "text", "x": 128, "y": 88, "text": "Actual ray C", "size": 12, "role": "t", "name": "ACB" },
                { "op": "text", "x": 162, "y": 142, "text": "δ ∫ n ds = 0", "size": 11, "role": "t", "name": "ACB" }
              ],
              "picture": "Look at the solid amber ray ACB between the two dashed trial paths where small shifts do not change travel time.",
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
              ],
              "art": [
                { "op": "curve", "points": [[32, 136], [108, 36], [226, 40]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "AEB" },
                { "op": "curve", "points": [[32, 136], [152, 146], [226, 40]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "ADB" },
                { "op": "line", "x1": 32, "y1": 136, "x2": 226, "y2": 40, "role": "hk", "width": 2.6, "name": "ACB" },
                { "op": "circle", "cx": 32, "cy": 136, "r": 4, "role": "h", "name": "A" },
                { "op": "circle", "cx": 226, "cy": 40, "r": 3.5, "role": "f", "name": "B" },
                { "op": "text", "x": 18, "y": 146, "text": "A", "size": 12, "role": "t", "name": "A" },
                { "op": "text", "x": 106, "y": 54, "text": "E", "size": 11, "role": "t", "name": "AEB" },
                { "op": "text", "x": 128, "y": 82, "text": "C (ray)", "size": 11, "role": "t", "name": "ACB" },
                { "op": "text", "x": 148, "y": 132, "text": "D", "size": 11, "role": "t", "name": "ADB" },
                { "op": "text", "x": 236, "y": 42, "text": "B", "size": 12, "role": "t", "name": "B" },
                { "op": "text", "x": 130, "y": 164, "text": "Stationary path: δ ∫ n ds = 0", "size": 11, "align": "center", "role": "t", "name": "ACB" }
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
              "art": [
                { "op": "line", "x1": 20, "y1": 115, "x2": 240, "y2": 115, "role": "lk", "width": 2.5, "name": "MN" },
                { "op": "line", "x1": 60, "y1": 40, "x2": 60, "y2": 165, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "ARAprime" },
                { "op": "line", "x1": 135, "y1": 35, "x2": 135, "y2": 115, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "PS" },
                { "op": "line", "x1": 60, "y1": 165, "x2": 135, "y2": 115, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "AprimeP" },
                { "op": "polyline", "points": [[60, 40], [168, 115], [215, 35]], "role": "gk", "width": 1.4, "dash": [3, 3], "name": "AQB" },
                { "op": "polyline", "points": [[60, 40], [135, 115], [215, 35]], "role": "hk", "width": 2.5, "name": "APB" },
                { "op": "arc", "cx": 135, "cy": 115, "r": 24, "start": -135, "end": -90, "role": "lk", "width": 1.8, "name": "i" },
                { "op": "arc", "cx": 135, "cy": 115, "r": 24, "start": -90, "end": -45, "role": "lk", "width": 1.8, "name": "r" },
                { "op": "circle", "cx": 60, "cy": 40, "r": 3.5, "role": "f", "name": "A" },
                { "op": "circle", "cx": 60, "cy": 165, "r": 3.5, "role": "f", "name": "Aprime" },
                { "op": "circle", "cx": 135, "cy": 115, "r": 4, "role": "h", "name": "P" },
                { "op": "circle", "cx": 168, "cy": 115, "r": 3, "role": "f", "name": "Q" },
                { "op": "circle", "cx": 215, "cy": 35, "r": 3.5, "role": "f", "name": "B" },
                { "op": "text", "x": 44, "y": 42, "text": "A", "size": 12, "role": "t", "name": "A" },
                { "op": "text", "x": 40, "y": 168, "text": "A'", "size": 12, "role": "t", "name": "Aprime" },
                { "op": "text", "x": 68, "y": 110, "text": "R", "size": 11, "role": "t", "name": "R" },
                { "op": "text", "x": 135, "y": 132, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
                { "op": "text", "x": 168, "y": 132, "text": "Q", "size": 11, "align": "center", "role": "t", "name": "Q" },
                { "op": "text", "x": 135, "y": 28, "text": "S", "size": 12, "align": "center", "role": "t", "name": "PS" },
                { "op": "text", "x": 224, "y": 38, "text": "B", "size": 12, "role": "t", "name": "B" },
                { "op": "text", "x": 118, "y": 78, "text": "i", "size": 12, "role": "t", "name": "i" },
                { "op": "text", "x": 148, "y": 78, "text": "r", "size": 12, "role": "t", "name": "r" },
                { "op": "text", "x": 26, "y": 132, "text": "M", "size": 11, "role": "t", "name": "MN" },
                { "op": "text", "x": 236, "y": 132, "text": "N", "size": 11, "align": "right", "role": "t", "name": "MN" }
              ]
            },
            {
              "type": "derivation",
              "label": "05 · §3.2 Derivation",
              "title": "Laws of refraction from Fermat's principle",
              "legend": "Interface \\(PQ\\) separates media \\(n_1, n_2\\) with perpendiculars \\(AM = h_1\\), \\(BN = h_2\\), \\(MR = x\\), and \\(RN = L - x\\) (Fig. 3.5).",
              "setup": [
                { "op": "line", "x1": 18, "y1": 92, "x2": 242, "y2": 92, "role": "lk", "width": 2, "name": "PQ" },
                { "op": "line", "x1": 52, "y1": 26, "x2": 52, "y2": 92, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "AM" },
                { "op": "line", "x1": 52, "y1": 92, "x2": 128, "y2": 92, "role": "lk", "width": 2.2, "name": "MR" },
                { "op": "line", "x1": 128, "y1": 92, "x2": 208, "y2": 92, "role": "lk", "width": 2.2, "name": "RN" },
                { "op": "line", "x1": 208, "y1": 92, "x2": 208, "y2": 158, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "BN" },
                { "op": "line", "x1": 128, "y1": 22, "x2": 128, "y2": 162, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "normal" },
                { "op": "line", "x1": 52, "y1": 26, "x2": 128, "y2": 92, "role": "hk", "width": 2.5, "name": "AR" },
                { "op": "line", "x1": 128, "y1": 92, "x2": 208, "y2": 158, "role": "lk", "width": 2.5, "name": "RB" },
                { "op": "arc", "cx": 52, "cy": 26, "r": 24, "start": 41, "end": 90, "role": "lk", "width": 1.8, "name": "theta1" },
                { "op": "arc", "cx": 128, "cy": 92, "r": 26, "start": -139, "end": -90, "role": "lk", "width": 1.8, "name": "theta1" },
                { "op": "arc", "cx": 128, "cy": 92, "r": 26, "start": 40, "end": 90, "role": "lk", "width": 1.8, "name": "theta2" },
                { "op": "arc", "cx": 208, "cy": 158, "r": 24, "start": -140, "end": -90, "role": "lk", "width": 1.8, "name": "theta2" },
                { "op": "circle", "cx": 52, "cy": 26, "r": 3.5, "role": "f", "name": "A" },
                { "op": "circle", "cx": 128, "cy": 92, "r": 4, "role": "h", "name": "R" },
                { "op": "circle", "cx": 208, "cy": 158, "r": 3.5, "role": "f", "name": "B" },
                { "op": "text", "x": 38, "y": 28, "text": "A", "size": 12, "role": "t", "name": "A" },
                { "op": "text", "x": 32, "y": 64, "text": "h₁", "size": 11, "role": "t", "name": "AM" },
                { "op": "text", "x": 52, "y": 106, "text": "M", "size": 11, "align": "center", "role": "t", "name": "MR" },
                { "op": "text", "x": 90, "y": 86, "text": "x", "size": 11, "align": "center", "role": "t", "name": "MR" },
                { "op": "text", "x": 112, "y": 58, "text": "θ₁", "size": 11, "role": "t", "name": "theta1" },
                { "op": "text", "x": 136, "y": 85, "text": "R", "size": 11, "role": "t", "name": "R" },
                { "op": "text", "x": 138, "y": 132, "text": "θ₂", "size": 11, "role": "t", "name": "theta2" },
                { "op": "text", "x": 168, "y": 106, "text": "L-x", "size": 11, "align": "center", "role": "t", "name": "RN" },
                { "op": "text", "x": 208, "y": 86, "text": "N", "size": 11, "align": "center", "role": "t", "name": "RN" },
                { "op": "text", "x": 220, "y": 130, "text": "h₂", "size": 11, "role": "t", "name": "BN" },
                { "op": "text", "x": 220, "y": 162, "text": "B", "size": 12, "role": "t", "name": "B" },
                { "op": "text", "x": 225, "y": 42, "text": "n₁", "size": 12, "role": "t", "name": "AR" },
                { "op": "text", "x": 225, "y": 110, "text": "n₂", "size": 12, "role": "t", "name": "RB" }
              ],
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
              "art": [
                { "op": "line", "x1": 16, "y1": 105, "x2": 244, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[132, 24], [104, 105], [132, 162]], "role": "lk", "width": 2.4, "name": "SPM" },
                { "op": "line", "x1": 118, "y1": 56, "x2": 118, "y2": 105, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "h" },
                { "op": "polyline", "points": [[28, 105], [118, 56], [226, 105]], "role": "hk", "width": 2.6, "name": "OSI" },
                { "op": "arc", "cx": 28, "cy": 105, "r": 32, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
                { "op": "arc", "cx": 226, "cy": 105, "r": 30, "start": 180, "end": 204, "role": "lk", "width": 1.8, "name": "alpha2" },
                { "op": "circle", "cx": 28, "cy": 105, "r": 3.5, "role": "f", "name": "O" },
                { "op": "circle", "cx": 118, "cy": 56, "r": 4, "role": "h", "name": "S" },
                { "op": "circle", "cx": 226, "cy": 105, "r": 3.5, "role": "f", "name": "I" },
                { "op": "text", "x": 28, "y": 122, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
                { "op": "text", "x": 66, "y": 98, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
                { "op": "text", "x": 126, "y": 84, "text": "h", "size": 11, "role": "t", "name": "h" },
                { "op": "text", "x": 118, "y": 122, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
                { "op": "text", "x": 226, "y": 122, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
                { "op": "text", "x": 130, "y": 152, "text": "Small α₁: sin α₁ ≈ tan α₁ ≈ h/x", "size": 11, "align": "center", "role": "t", "name": "alpha1" }
              ],
              "picture": "Look at the small angle arc α₁ near O where height h divided by distance x gives the angle in radians.",
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
              ],
              "art": [
                { "op": "line", "x1": 16, "y1": 100, "x2": 244, "y2": 100, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[128, 22], [100, 100], [128, 162]], "role": "lk", "width": 2.4, "name": "SPM" },
                { "op": "line", "x1": 94, "y1": 34, "x2": 176, "y2": 100, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "normal" },
                { "op": "polyline", "points": [[28, 100], [114, 52], [226, 100]], "role": "hk", "width": 2.6, "name": "OSI" },
                { "op": "polyline", "points": [[28, 100], [116, 136], [226, 100]], "role": "lk", "width": 1.8, "name": "OSI2" },
                { "op": "arc", "cx": 28, "cy": 100, "r": 28, "start": -29, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
                { "op": "arc", "cx": 114, "cy": 52, "r": 20, "start": -142, "end": -115, "role": "lk", "width": 1.8, "name": "phi1" },
                { "op": "circle", "cx": 28, "cy": 100, "r": 3.5, "role": "f", "name": "O" },
                { "op": "circle", "cx": 114, "cy": 52, "r": 4, "role": "h", "name": "S" },
                { "op": "circle", "cx": 176, "cy": 100, "r": 3.5, "role": "f", "name": "C" },
                { "op": "circle", "cx": 226, "cy": 100, "r": 3.5, "role": "f", "name": "I" },
                { "op": "text", "x": 28, "y": 118, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
                { "op": "text", "x": 64, "y": 93, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
                { "op": "text", "x": 88, "y": 52, "text": "φ₁", "size": 11, "role": "t", "name": "phi1" },
                { "op": "text", "x": 114, "y": 40, "text": "S", "size": 11, "align": "center", "role": "t", "name": "S" },
                { "op": "text", "x": 112, "y": 116, "text": "P", "size": 11, "align": "center", "role": "t", "name": "SPM" },
                { "op": "text", "x": 176, "y": 118, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
                { "op": "text", "x": 226, "y": 118, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" }
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
              "art": [
                { "op": "line", "x1": 15, "y1": 95, "x2": 245, "y2": 95, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[145, 25], [110, 95], [145, 165]], "role": "lk", "width": 2.5, "name": "SPM" },
                { "op": "arrow", "x1": 28, "y1": 60, "x2": 105, "y2": 60, "role": "hk", "width": 2.5, "name": "incident" },
                { "op": "circle", "cx": 128, "cy": 95, "r": 4, "role": "h", "name": "P" },
                { "op": "circle", "cx": 205, "cy": 95, "r": 3.5, "role": "f", "name": "C" },
                { "op": "text", "x": 65, "y": 48, "text": "Incident light", "size": 11, "align": "center", "role": "t", "name": "incident" },
                { "op": "text", "x": 62, "y": 118, "text": "u < 0 (left)", "size": 12, "align": "center", "role": "t", "name": "left" },
                { "op": "text", "x": 190, "y": 118, "text": "v, R > 0 (right)", "size": 12, "align": "center", "role": "t", "name": "right" },
                { "op": "text", "x": 122, "y": 112, "text": "P", "size": 12, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 205, "y": 85, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
                { "op": "text", "x": 155, "y": 44, "text": "+y upward", "size": 11, "role": "t", "name": "up" },
                { "op": "text", "x": 155, "y": 154, "text": "-y downward", "size": 11, "role": "t", "name": "down" }
              ]
            },
            {
              "type": "derivation",
              "label": "03 · §4.2.2 Derivation",
              "title": "The Gaussian formula for a single spherical surface",
              "legend": "Spherical surface \\(SPM\\) separating \\(n_1, n_2\\) with object \\(O\\) at \\(x = -u\\), image \\(I\\) at \\(y = v\\), center \\(C\\) at \\(r = R\\), height \\(h\\) (Fig. 4.1(a)).",
              "setup": [
                { "op": "line", "x1": 14, "y1": 105, "x2": 246, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[128, 24], [96, 105], [128, 162]], "role": "lk", "width": 2.5, "name": "SPM" },
                { "op": "line", "x1": 114, "y1": 48, "x2": 114, "y2": 105, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "h" },
                { "op": "line", "x1": 90, "y1": 26, "x2": 176, "y2": 105, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "normal" },
                { "op": "line", "x1": 26, "y1": 105, "x2": 114, "y2": 48, "role": "hk", "width": 2.5, "name": "OS" },
                { "op": "line", "x1": 114, "y1": 48, "x2": 232, "y2": 105, "role": "lk", "width": 2.5, "name": "SI" },
                { "op": "arc", "cx": 26, "cy": 105, "r": 26, "start": -33, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
                { "op": "arc", "cx": 114, "cy": 48, "r": 22, "start": -137, "end": -108, "role": "lk", "width": 1.8, "name": "phi1" },
                { "op": "arc", "cx": 114, "cy": 48, "r": 22, "start": 26, "end": 43, "role": "lk", "width": 1.8, "name": "phi2" },
                { "op": "arc", "cx": 176, "cy": 105, "r": 24, "start": 180, "end": 223, "role": "lk", "width": 1.8, "name": "beta" },
                { "op": "arc", "cx": 232, "cy": 105, "r": 26, "start": 180, "end": 206, "role": "lk", "width": 1.8, "name": "alpha2" },
                { "op": "circle", "cx": 26, "cy": 105, "r": 3.5, "role": "f", "name": "O" },
                { "op": "circle", "cx": 114, "cy": 48, "r": 4, "role": "h", "name": "S" },
                { "op": "circle", "cx": 176, "cy": 105, "r": 3.5, "role": "f", "name": "C" },
                { "op": "circle", "cx": 232, "cy": 105, "r": 3.5, "role": "f", "name": "I" },
                { "op": "text", "x": 24, "y": 122, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
                { "op": "text", "x": 58, "y": 98, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
                { "op": "text", "x": 86, "y": 48, "text": "φ₁", "size": 11, "role": "t", "name": "phi1" },
                { "op": "text", "x": 138, "y": 54, "text": "φ₂", "size": 11, "role": "t", "name": "phi2" },
                { "op": "text", "x": 114, "y": 36, "text": "S", "size": 12, "align": "center", "role": "t", "name": "S" },
                { "op": "text", "x": 122, "y": 82, "text": "h", "size": 11, "role": "t", "name": "h" },
                { "op": "text", "x": 112, "y": 122, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
                { "op": "text", "x": 144, "y": 98, "text": "β", "size": 11, "role": "t", "name": "beta" },
                { "op": "text", "x": 176, "y": 122, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
                { "op": "text", "x": 196, "y": 98, "text": "α₂", "size": 11, "role": "t", "name": "alpha2" },
                { "op": "text", "x": 232, "y": 122, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
                { "op": "text", "x": 70, "y": 144, "text": "x = -u", "size": 11, "align": "center", "role": "t", "name": "x" },
                { "op": "text", "x": 146, "y": 144, "text": "r = R", "size": 11, "align": "center", "role": "t", "name": "r" },
                { "op": "text", "x": 174, "y": 164, "text": "y = v", "size": 11, "align": "center", "role": "t", "name": "y" },
                { "op": "text", "x": 46, "y": 36, "text": "n₁", "size": 12, "role": "t", "name": "OS" },
                { "op": "text", "x": 205, "y": 36, "text": "n₂", "size": 12, "role": "t", "name": "SI" }
              ],
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
              "three": {
                "axis": { "from": [-2.2, 0, 0], "to": [2.2, 0, 0], "label": "Optical axis (C₁–C₂)" },
                "plane": { "width": 4.4, "height": 2.1, "label": "Meridional plane" },
                "surfaces": [
                  { "x": -0.75, "r": 0.9 },
                  { "x": 0.75, "r": 0.9 }
                ],
                "points": [
                  { "name": "O", "pos": [-1.85, 0, 0], "role": "h", "label": "O" },
                  { "name": "C2", "pos": [-1.25, 0, 0], "role": "f", "label": "C₂" },
                  { "name": "S1", "pos": [-0.75, 0.72, 0], "role": "h", "label": "S₁" },
                  { "name": "S2", "pos": [0.75, 0.56, 0], "role": "h", "label": "S₂" },
                  { "name": "C1", "pos": [1.25, 0, 0], "role": "f", "label": "C₁" },
                  { "name": "I", "pos": [1.85, 0, 0], "role": "f", "label": "I" }
                ],
                "meridionalRay": {
                  "points": [[-1.85, 0, 0], [-0.75, 0.72, 0], [0.75, 0.56, 0], [1.85, 0, 0]],
                  "role": "hk",
                  "label": "Meridional ray (in plane)"
                },
                "skewRay": {
                  "points": [[-1.75, -0.52, 0.68], [-0.75, 0.36, 0.54], [0.75, 0.22, -0.46], [1.85, -0.58, -0.82]],
                  "role": "gk",
                  "label": "Skew ray (leaves plane)"
                }
              },
              "picture": "Look at the amber meridional ray inside the flat axial slice, while the dashed skew ray leaves the slice in 3D.",
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
              ],
              "art": [
                { "op": "polygon", "points": [[24, 118], [76, 34], [236, 34], [184, 118]], "role": "s ok", "name": "plane" },
                { "op": "line", "x1": 34, "y1": 76, "x2": 226, "y2": 76, "role": "lk", "width": 2, "name": "axis" },
                { "op": "polyline", "points": [[52, 76], [128, 48], [204, 76]], "role": "hk", "width": 2.6, "name": "meridional" },
                { "op": "arc", "cx": 52, "cy": 76, "r": 26, "start": -20, "end": 0, "role": "lk", "width": 1.8, "name": "meridional" },
                { "op": "polyline", "points": [[64, 108], [134, 58], [196, 144]], "role": "gk", "width": 1.8, "dash": [4, 4], "name": "skew" },
                { "op": "circle", "cx": 52, "cy": 76, "r": 4, "role": "h", "name": "C1" },
                { "op": "circle", "cx": 204, "cy": 76, "r": 3.5, "role": "f", "name": "C2" },
                { "op": "text", "x": 46, "y": 92, "text": "C₁", "size": 11, "role": "t", "name": "C1" },
                { "op": "text", "x": 208, "y": 92, "text": "C₂", "size": 11, "role": "t", "name": "C2" },
                { "op": "text", "x": 134, "y": 26, "text": "Meridional ray (in plane)", "size": 11, "align": "center", "role": "t", "name": "meridional" },
                { "op": "text", "x": 148, "y": 162, "text": "Skew ray (leaves plane)", "size": 11, "align": "center", "role": "t", "name": "skew" }
              ]
            },
            {
              "type": "derivation",
              "label": "05 · §4.3 Derivation",
              "title": "Reflection by a single spherical surface",
              "legend": "Spherical mirror \\(SPM\\) with object \\(O\\), center \\(C\\), and image \\(I\\) to the left of pole \\(P\\) (\\(u = -x, v = -y, R = -r\\), Fig. 4.3).",
              "setup": [
                { "op": "line", "x1": 14, "y1": 105, "x2": 240, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[195, 24], [222, 105], [195, 162]], "role": "lk", "width": 2.5, "name": "SPM" },
                { "op": "line", "x1": 204, "y1": 46, "x2": 204, "y2": 105, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "h" },
                { "op": "line", "x1": 118, "y1": 105, "x2": 204, "y2": 46, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "CS" },
                { "op": "line", "x1": 28, "y1": 105, "x2": 204, "y2": 46, "role": "hk", "width": 2.5, "name": "OS" },
                { "op": "line", "x1": 204, "y1": 46, "x2": 154, "y2": 105, "role": "lk", "width": 2.5, "name": "SI" },
                { "op": "arc", "cx": 28, "cy": 105, "r": 28, "start": -19, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
                { "op": "arc", "cx": 118, "cy": 105, "r": 26, "start": -34, "end": 0, "role": "lk", "width": 1.8, "name": "beta" },
                { "op": "arc", "cx": 154, "cy": 105, "r": 24, "start": -50, "end": 0, "role": "lk", "width": 1.8, "name": "alpha2" },
                { "op": "arc", "cx": 204, "cy": 46, "r": 25, "start": 130, "end": 161, "role": "lk", "width": 1.8, "name": "phi" },
                { "op": "circle", "cx": 28, "cy": 105, "r": 3.5, "role": "f", "name": "O" },
                { "op": "circle", "cx": 118, "cy": 105, "r": 3.5, "role": "f", "name": "C" },
                { "op": "circle", "cx": 154, "cy": 105, "r": 3.5, "role": "f", "name": "I" },
                { "op": "circle", "cx": 204, "cy": 46, "r": 4, "role": "h", "name": "S" },
                { "op": "text", "x": 28, "y": 122, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
                { "op": "text", "x": 64, "y": 98, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
                { "op": "text", "x": 118, "y": 122, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
                { "op": "text", "x": 132, "y": 98, "text": "β", "size": 11, "role": "t", "name": "beta" },
                { "op": "text", "x": 154, "y": 122, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
                { "op": "text", "x": 172, "y": 98, "text": "α₂", "size": 11, "role": "t", "name": "alpha2" },
                { "op": "text", "x": 204, "y": 34, "text": "S", "size": 12, "align": "center", "role": "t", "name": "S" },
                { "op": "text", "x": 156, "y": 50, "text": "φ₁=φ₂", "size": 11, "role": "t", "name": "phi" },
                { "op": "text", "x": 214, "y": 82, "text": "h", "size": 11, "role": "t", "name": "h" },
                { "op": "text", "x": 214, "y": 122, "text": "P", "size": 12, "role": "t", "name": "P" },
                { "op": "text", "x": 116, "y": 146, "text": "x = -u, r = -R, y = -v", "size": 11, "align": "center", "role": "t", "name": "x" }
              ],
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
              "title": "Worked example: refraction at spherical surfaces (Example 4.1)",
              "tex": "\\frac{1.5}{v_1} + \\frac{1}{40} = \\frac{0.5}{15} \\implies v_1 = +180\\text{ cm},\\;\\frac{1.0}{v} - \\frac{1.5}{150} = \\frac{-0.5}{-25} \\implies v = +33\\tfrac{1}{3}\\text{ cm}",
              "body": "First surface \\(S_1 P_1 M_1\\) (\\(R_1 = +15\\text{ cm}\\)) forms image \\(O'\\) at \\(+180\\text{ cm}\\). Separated by \\(30\\text{ cm}\\), second surface \\(S_2 P_2 M_2\\) (\\(u = +150\\text{ cm}, R_2 = -25\\text{ cm}\\)) forms a real image at \\(+33\\tfrac{1}{3}\\text{ cm}\\)."
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
              "art": [
                { "op": "line", "x1": 12, "y1": 96, "x2": 248, "y2": 96, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[118, 26], [104, 96], [118, 164], [132, 96], [118, 26]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "polyline", "points": [[26, 96], [118, 46], [218, 96]], "role": "hk", "width": 2.6, "name": "ray" },
                { "op": "arc", "cx": 26, "cy": 96, "r": 28, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "u" },
                { "op": "arc", "cx": 218, "cy": 96, "r": 26, "start": 180, "end": 206, "role": "lk", "width": 1.8, "name": "v" },
                { "op": "circle", "cx": 26, "cy": 96, "r": 3.5, "role": "f", "name": "O" },
                { "op": "circle", "cx": 118, "cy": 96, "r": 4, "role": "h", "name": "P" },
                { "op": "circle", "cx": 218, "cy": 96, "r": 3.5, "role": "f", "name": "I" },
                { "op": "text", "x": 26, "y": 114, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
                { "op": "text", "x": 118, "y": 20, "text": "t ≪ |u|, |v|", "size": 11, "align": "center", "role": "t", "name": "lens" },
                { "op": "text", "x": 112, "y": 114, "text": "P", "size": 12, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 218, "y": 114, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
                { "op": "text", "x": 72, "y": 138, "text": "u (from P)", "size": 11, "align": "center", "role": "t", "name": "u" },
                { "op": "text", "x": 168, "y": 138, "text": "v (from P)", "size": 11, "align": "center", "role": "t", "name": "v" }
              ],
              "picture": "Look at the thin lens at P: thickness t is so small that both u and v are measured from P.",
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
              ],
              "art": [
                { "op": "line", "x1": 16, "y1": 94, "x2": 244, "y2": 94, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[130, 22], [112, 94], [130, 162], [148, 94], [130, 22]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "arrow", "x1": 120, "y1": 94, "x2": 140, "y2": 94, "role": "hk", "width": 2.4, "name": "t" },
                { "op": "circle", "cx": 54, "cy": 94, "r": 3.5, "role": "f", "name": "C2" },
                { "op": "circle", "cx": 130, "cy": 94, "r": 4, "role": "h", "name": "P" },
                { "op": "circle", "cx": 206, "cy": 94, "r": 3.5, "role": "f", "name": "C1" },
                { "op": "text", "x": 54, "y": 114, "text": "C₂ (R₂<0)", "size": 11, "align": "center", "role": "t", "name": "C2" },
                { "op": "text", "x": 130, "y": 18, "text": "n₂ (thin: t ≪ |R₁|, |R₂|)", "size": 11, "align": "center", "role": "t", "name": "lens" },
                { "op": "text", "x": 130, "y": 116, "text": "P (t)", "size": 11, "align": "center", "role": "t", "name": "P" },
                { "op": "text", "x": 206, "y": 114, "text": "C₁ (R₁>0)", "size": 11, "align": "center", "role": "t", "name": "C1" }
              ]
            },
            {
              "type": "derivation",
              "label": "02 · §4.4 Derivation",
              "title": "The thin lens and Lensmaker's formula",
              "legend": "Lens of index \\(n_2\\) in medium \\(n_1\\) with radii \\(R_1, R_2\\), intermediate image \\(Q\\) at \\(v'\\), final image \\(I\\) at \\(v\\), and \\(n = n_2 / n_1\\) (Fig. 4.5).",
              "setup": [
                { "op": "line", "x1": 12, "y1": 98, "x2": 248, "y2": 98, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[110, 28], [92, 98], [110, 164]], "role": "lk", "width": 2, "name": "surf1" },
                { "op": "curve", "points": [[118, 28], [136, 98], [118, 164]], "role": "lk", "width": 2, "name": "surf2" },
                { "op": "line", "x1": 118, "y1": 50, "x2": 238, "y2": 98, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "rayQ" },
                { "op": "line", "x1": 24, "y1": 98, "x2": 110, "y2": 50, "role": "hk", "width": 2.5, "name": "rayO" },
                { "op": "line", "x1": 110, "y1": 50, "x2": 188, "y2": 98, "role": "lk", "width": 2.5, "name": "rayI" },
                { "op": "arc", "cx": 24, "cy": 98, "r": 25, "start": -29, "end": 0, "role": "lk", "width": 1.8, "name": "rayO" },
                { "op": "arc", "cx": 188, "cy": 98, "r": 22, "start": 180, "end": 211, "role": "lk", "width": 1.8, "name": "rayI" },
                { "op": "circle", "cx": 24, "cy": 98, "r": 3.5, "role": "f", "name": "O" },
                { "op": "circle", "cx": 64, "cy": 98, "r": 3, "role": "f", "name": "C2" },
                { "op": "circle", "cx": 114, "cy": 98, "r": 3.5, "role": "f", "name": "P" },
                { "op": "circle", "cx": 156, "cy": 98, "r": 3, "role": "f", "name": "C1" },
                { "op": "circle", "cx": 188, "cy": 98, "r": 4, "role": "h", "name": "I" },
                { "op": "circle", "cx": 238, "cy": 98, "r": 3.5, "role": "f", "name": "Q" },
                { "op": "text", "x": 24, "y": 115, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
                { "op": "text", "x": 64, "y": 114, "text": "C₂", "size": 11, "align": "center", "role": "t", "name": "R1R2" },
                { "op": "text", "x": 68, "y": 134, "text": "u < 0", "size": 11, "align": "center", "role": "t", "name": "u" },
                { "op": "text", "x": 114, "y": 22, "text": "n₂", "size": 11, "align": "center", "role": "t", "name": "n2" },
                { "op": "text", "x": 60, "y": 36, "text": "n₁", "size": 12, "role": "t", "name": "n1" },
                { "op": "text", "x": 175, "y": 36, "text": "n₁", "size": 12, "role": "t", "name": "n1" },
                { "op": "text", "x": 114, "y": 115, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
                { "op": "text", "x": 156, "y": 114, "text": "C₁", "size": 11, "align": "center", "role": "t", "name": "R1R2" },
                { "op": "text", "x": 152, "y": 134, "text": "v", "size": 11, "align": "center", "role": "t", "name": "v" },
                { "op": "text", "x": 188, "y": 115, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
                { "op": "text", "x": 234, "y": 115, "text": "Q (v')", "size": 11, "align": "center", "role": "t", "name": "vprime" },
                { "op": "text", "x": 130, "y": 156, "text": "R₁ > 0, R₂ < 0", "size": 11, "align": "center", "role": "t", "name": "R1R2" }
              ],
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
              "art": [
                { "op": "line", "x1": 14, "y1": 50, "x2": 120, "y2": 50, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "axis1" },
                { "op": "curve", "points": [[62, 18], [50, 50], [62, 82], [74, 50], [62, 18]], "closed": true, "role": "s ok", "name": "conv" },
                { "op": "polyline", "points": [[18, 32], [62, 32], [108, 50]], "role": "lk", "width": 2, "name": "conv" },
                { "op": "polyline", "points": [[18, 68], [62, 68], [108, 50]], "role": "lk", "width": 2, "name": "conv" },
                { "op": "circle", "cx": 108, "cy": 50, "r": 3.5, "role": "f", "name": "conv" },
                { "op": "text", "x": 62, "y": 100, "text": "n₂ > n₁: converges", "size": 11, "align": "center", "role": "t", "name": "conv" },
                { "op": "line", "x1": 140, "y1": 50, "x2": 246, "y2": 50, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "axis2" },
                { "op": "curve", "points": [[192, 18], [180, 50], [192, 82], [204, 50], [192, 18]], "closed": true, "role": "s ok", "name": "div" },
                { "op": "polyline", "points": [[148, 32], [192, 32], [238, 16]], "role": "hk", "width": 2.5, "name": "div" },
                { "op": "polyline", "points": [[148, 68], [192, 68], [238, 84]], "role": "lk", "width": 2, "name": "div" },
                { "op": "line", "x1": 156, "y1": 50, "x2": 192, "y2": 32, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "div" },
                { "op": "circle", "cx": 156, "cy": 50, "r": 4, "role": "h", "name": "div" },
                { "op": "text", "x": 192, "y": 100, "text": "n₂ < n₁: diverges", "size": 11, "align": "center", "role": "t", "name": "div" },
                { "op": "text", "x": 130, "y": 148, "text": "1/f = (n₂/n₁ - 1)(1/R₁ - 1/R₂)", "size": 12, "align": "center", "role": "t", "name": "formula" }
              ]
            },
            {
              "type": "intuition",
              "term": "principal-focus",
              "title": "The two special focal points of any lens",
              "meaning": "The first principal focus F₁ turns rays from a point into parallel rays, while the second principal focus F₂ collects incoming parallel rays to a point.",
              "art": [
                { "op": "line", "x1": 12, "y1": 90, "x2": 248, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[130, 20], [116, 90], [130, 160], [144, 90], [130, 20]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "polyline", "points": [[56, 90], [130, 136], [238, 136]], "role": "lk", "width": 2, "name": "ray1" },
                { "op": "polyline", "points": [[22, 44], [130, 44], [204, 90]], "role": "hk", "width": 2.6, "name": "ray2" },
                { "op": "arc", "cx": 56, "cy": 90, "r": 20, "start": 0, "end": 32, "role": "lk", "width": 1.8, "name": "F1" },
                { "op": "arc", "cx": 204, "cy": 90, "r": 20, "start": 180, "end": 212, "role": "lk", "width": 1.8, "name": "F2" },
                { "op": "circle", "cx": 56, "cy": 90, "r": 3.5, "role": "f", "name": "F1" },
                { "op": "circle", "cx": 130, "cy": 90, "r": 3.5, "role": "f", "name": "P" },
                { "op": "circle", "cx": 204, "cy": 90, "r": 4, "role": "h", "name": "F2" },
                { "op": "text", "x": 56, "y": 78, "text": "F₁", "size": 12, "align": "center", "role": "t", "name": "F1" },
                { "op": "text", "x": 124, "y": 106, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 204, "y": 108, "text": "F₂", "size": 12, "align": "center", "role": "t", "name": "F2" },
                { "op": "text", "x": 80, "y": 36, "text": "Ray 2 (parallel → F₂)", "size": 11, "align": "center", "role": "t", "name": "ray2" },
                { "op": "text", "x": 184, "y": 152, "text": "Ray 1 (F₁ → parallel)", "size": 11, "align": "center", "role": "t", "name": "ray1" },
                { "op": "text", "x": 92, "y": 122, "text": "f₁ < 0", "size": 11, "align": "center", "role": "t", "name": "F1" },
                { "op": "text", "x": 168, "y": 78, "text": "f₂ > 0", "size": 11, "align": "center", "role": "t", "name": "F2" }
              ],
              "picture": "Look at Ray 1 from F₁ emerging parallel, and parallel Ray 2 meeting the axis at F₂.",
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
              ],
              "art": [
                { "op": "line", "x1": 14, "y1": 90, "x2": 246, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[130, 22], [116, 90], [130, 158], [144, 90], [130, 22]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "polyline", "points": [[56, 90], [130, 134], [236, 134]], "role": "lk", "width": 2, "name": "ray1" },
                { "op": "polyline", "points": [[24, 46], [130, 46], [204, 90]], "role": "hk", "width": 2.5, "name": "ray2" },
                { "op": "arc", "cx": 56, "cy": 90, "r": 20, "start": 0, "end": 31, "role": "lk", "width": 1.8, "name": "F1" },
                { "op": "arc", "cx": 204, "cy": 90, "r": 20, "start": 180, "end": 211, "role": "lk", "width": 1.8, "name": "F2" },
                { "op": "circle", "cx": 56, "cy": 90, "r": 3.5, "role": "f", "name": "F1" },
                { "op": "circle", "cx": 130, "cy": 90, "r": 3.5, "role": "f", "name": "P" },
                { "op": "circle", "cx": 204, "cy": 90, "r": 4, "role": "h", "name": "F2" },
                { "op": "text", "x": 56, "y": 76, "text": "F₁ (u = f₁)", "size": 11, "align": "center", "role": "t", "name": "F1" },
                { "op": "text", "x": 124, "y": 106, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 204, "y": 110, "text": "F₂ (v = f₂)", "size": 11, "align": "center", "role": "t", "name": "F2" },
                { "op": "text", "x": 76, "y": 38, "text": "u = -∞ → F₂", "size": 11, "align": "center", "role": "t", "name": "ray2" },
                { "op": "text", "x": 186, "y": 152, "text": "F₁ → v = ∞", "size": 11, "align": "center", "role": "t", "name": "ray1" }
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
              "art": [
                { "op": "line", "x1": 10, "y1": 92, "x2": 250, "y2": 92, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[125, 22], [112, 92], [125, 162], [138, 92], [125, 22]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "line", "x1": 36, "y1": 92, "x2": 36, "y2": 44, "role": "lk", "width": 2.5, "name": "OA" },
                { "op": "line", "x1": 214, "y1": 92, "x2": 214, "y2": 140, "role": "lk", "width": 2.5, "name": "IB" },
                { "op": "polyline", "points": [[36, 44], [125, 44], [214, 140]], "role": "lk", "width": 1.8, "name": "ray2" },
                { "op": "polyline", "points": [[36, 44], [76, 92], [125, 140], [214, 140]], "role": "lk", "width": 1.8, "name": "ray1" },
                { "op": "line", "x1": 36, "y1": 44, "x2": 214, "y2": 140, "role": "hk", "width": 2.5, "name": "ray3" },
                { "op": "arc", "cx": 125, "cy": 92, "r": 25, "start": 180, "end": 208, "role": "lk", "width": 1.8, "name": "ray3" },
                { "op": "arc", "cx": 125, "cy": 92, "r": 25, "start": 0, "end": 28, "role": "lk", "width": 1.8, "name": "ray3" },
                { "op": "circle", "cx": 76, "cy": 92, "r": 3.5, "role": "f", "name": "F1" },
                { "op": "circle", "cx": 125, "cy": 92, "r": 4, "role": "h", "name": "P" },
                { "op": "circle", "cx": 174, "cy": 92, "r": 3.5, "role": "f", "name": "F2" },
                { "op": "text", "x": 36, "y": 36, "text": "A", "size": 11, "align": "center", "role": "t", "name": "OA" },
                { "op": "text", "x": 36, "y": 108, "text": "O", "size": 11, "align": "center", "role": "t", "name": "OA" },
                { "op": "text", "x": 76, "y": 108, "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
                { "op": "text", "x": 120, "y": 108, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 174, "y": 84, "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
                { "op": "text", "x": 214, "y": 84, "text": "I", "size": 11, "align": "center", "role": "t", "name": "IB" },
                { "op": "text", "x": 214, "y": 156, "text": "B", "size": 11, "align": "center", "role": "t", "name": "IB" },
                { "op": "text", "x": 82, "y": 38, "text": "2", "size": 11, "role": "t", "name": "ray2" },
                { "op": "text", "x": 96, "y": 70, "text": "3", "size": 11, "role": "t", "name": "ray3" },
                { "op": "text", "x": 96, "y": 132, "text": "1", "size": 11, "role": "t", "name": "ray1" }
              ]
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
              "art": [
                { "op": "line", "x1": 10, "y1": 86, "x2": 250, "y2": 86, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[125, 20], [113, 86], [125, 152], [137, 86], [125, 20]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "line", "x1": 32, "y1": 86, "x2": 32, "y2": 40, "role": "lk", "width": 2.5, "name": "obj" },
                { "op": "line", "x1": 222, "y1": 86, "x2": 222, "y2": 132, "role": "lk", "width": 2.5, "name": "img" },
                { "op": "polyline", "points": [[32, 40], [125, 40], [222, 132]], "role": "lk", "width": 1.8, "name": "ray2" },
                { "op": "polyline", "points": [[32, 40], [80, 86], [125, 132], [222, 132]], "role": "hk", "width": 2.2, "name": "ray1" },
                { "op": "arc", "cx": 80, "cy": 86, "r": 22, "start": 180, "end": 224, "role": "lk", "width": 1.8, "name": "F1" },
                { "op": "arc", "cx": 80, "cy": 86, "r": 22, "start": 0, "end": 45, "role": "lk", "width": 1.8, "name": "F1" },
                { "op": "circle", "cx": 80, "cy": 86, "r": 4, "role": "h", "name": "F1" },
                { "op": "circle", "cx": 170, "cy": 86, "r": 3.5, "role": "f", "name": "F2" },
                { "op": "text", "x": 32, "y": 32, "text": "y", "size": 11, "align": "center", "role": "t", "name": "obj" },
                { "op": "text", "x": 32, "y": 102, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
                { "op": "text", "x": 80, "y": 78, "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
                { "op": "text", "x": 120, "y": 102, "text": "P", "size": 11, "align": "right", "role": "t", "name": "lens" },
                { "op": "text", "x": 170, "y": 78, "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
                { "op": "text", "x": 222, "y": 78, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
                { "op": "text", "x": 236, "y": 122, "text": "(-y')", "size": 11, "align": "center", "role": "t", "name": "img" },
                { "op": "text", "x": 56, "y": 124, "text": "-x₁", "size": 11, "align": "center", "role": "t", "name": "x1" },
                { "op": "text", "x": 102, "y": 124, "text": "-f₁", "size": 11, "align": "center", "role": "t", "name": "f1" },
                { "op": "text", "x": 148, "y": 124, "text": "f₂", "size": 11, "align": "center", "role": "t", "name": "f2" },
                { "op": "text", "x": 196, "y": 124, "text": "x₂", "size": 11, "align": "center", "role": "t", "name": "x2" }
              ]
            },
            {
              "type": "derivation",
              "label": "02 · §4.6 Derivation",
              "title": "The Newton formula",
              "legend": "Object height \\(y\\) at \\(x_1\\) from \\(F_1\\), image height \\(y'\\) at \\(x_2\\) from \\(F_2\\), focal lengths \\(f_1, f_2\\) (Fig. 4.8(a)).",
              "setup": [
                { "op": "line", "x1": 12, "y1": 88, "x2": 248, "y2": 88, "role": "lk", "width": 2, "name": "axis" },
                { "op": "line", "x1": 125, "y1": 24, "x2": 125, "y2": 152, "role": "lk", "width": 2, "name": "lens" },
                { "op": "line", "x1": 34, "y1": 88, "x2": 34, "y2": 42, "role": "lk", "width": 2.5, "name": "obj" },
                { "op": "line", "x1": 220, "y1": 88, "x2": 220, "y2": 134, "role": "lk", "width": 2.5, "name": "img" },
                { "op": "polyline", "points": [[34, 42], [125, 42], [220, 134]], "role": "lk", "width": 1.8, "name": "ray2" },
                { "op": "polyline", "points": [[34, 42], [82, 88], [125, 134], [220, 134]], "role": "hk", "width": 2.4, "name": "ray1" },
                { "op": "arc", "cx": 82, "cy": 88, "r": 22, "start": 180, "end": 224, "role": "lk", "width": 1.8, "name": "F1" },
                { "op": "arc", "cx": 82, "cy": 88, "r": 22, "start": 0, "end": 46, "role": "lk", "width": 1.8, "name": "F1" },
                { "op": "arc", "cx": 168, "cy": 88, "r": 22, "start": 180, "end": 224, "role": "lk", "width": 1.8, "name": "F2" },
                { "op": "arc", "cx": 168, "cy": 88, "r": 22, "start": 0, "end": 42, "role": "lk", "width": 1.8, "name": "F2" },
                { "op": "circle", "cx": 82, "cy": 88, "r": 4, "role": "h", "name": "F1" },
                { "op": "circle", "cx": 168, "cy": 88, "r": 3.5, "role": "f", "name": "F2" },
                { "op": "text", "x": 24, "y": 66, "text": "y", "size": 11, "role": "t", "name": "obj" },
                { "op": "text", "x": 34, "y": 104, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
                { "op": "text", "x": 82, "y": 80, "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
                { "op": "text", "x": 125, "y": 20, "text": "K", "size": 11, "align": "center", "role": "t", "name": "lens" },
                { "op": "text", "x": 118, "y": 104, "text": "P", "size": 11, "align": "right", "role": "t", "name": "lens" },
                { "op": "text", "x": 125, "y": 166, "text": "L", "size": 11, "align": "center", "role": "t", "name": "lens" },
                { "op": "text", "x": 168, "y": 80, "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
                { "op": "text", "x": 220, "y": 80, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
                { "op": "text", "x": 236, "y": 118, "text": "(-y')", "size": 11, "align": "center", "role": "t", "name": "img" },
                { "op": "text", "x": 58, "y": 122, "text": "-x₁", "size": 11, "align": "center", "role": "t", "name": "x1" },
                { "op": "text", "x": 104, "y": 122, "text": "-f₁", "size": 11, "align": "center", "role": "t", "name": "f1" },
                { "op": "text", "x": 146, "y": 122, "text": "f₂", "size": 11, "align": "center", "role": "t", "name": "f2" },
                { "op": "text", "x": 194, "y": 122, "text": "x₂", "size": 11, "align": "center", "role": "t", "name": "x2" }
              ],
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
              "art": [
                { "op": "line", "x1": 14, "y1": 90, "x2": 246, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[120, 22], [108, 90], [120, 158], [132, 90], [120, 22]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "line", "x1": 38, "y1": 90, "x2": 38, "y2": 38, "role": "lk", "width": 2.6, "name": "obj" },
                { "op": "line", "x1": 216, "y1": 90, "x2": 216, "y2": 148, "role": "lk", "width": 2.6, "name": "img" },
                { "op": "line", "x1": 38, "y1": 38, "x2": 216, "y2": 148, "role": "hk", "width": 2.5, "name": "ray3" },
                { "op": "arc", "cx": 120, "cy": 90, "r": 28, "start": 180, "end": 212, "role": "lk", "width": 1.8, "name": "theta" },
                { "op": "arc", "cx": 120, "cy": 90, "r": 28, "start": 0, "end": 32, "role": "lk", "width": 1.8, "name": "theta" },
                { "op": "circle", "cx": 120, "cy": 90, "r": 4, "role": "h", "name": "P" },
                { "op": "text", "x": 26, "y": 66, "text": "y", "size": 12, "role": "t", "name": "obj" },
                { "op": "text", "x": 38, "y": 106, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
                { "op": "text", "x": 84, "y": 84, "text": "θ", "size": 11, "role": "t", "name": "theta" },
                { "op": "text", "x": 154, "y": 104, "text": "θ", "size": 11, "role": "t", "name": "theta" },
                { "op": "text", "x": 114, "y": 108, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 216, "y": 82, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
                { "op": "text", "x": 232, "y": 128, "text": "y'", "size": 12, "role": "t", "name": "img" },
                { "op": "text", "x": 78, "y": 136, "text": "u < 0", "size": 11, "align": "center", "role": "t", "name": "u" },
                { "op": "text", "x": 170, "y": 64, "text": "v > 0 (m = v/u)", "size": 11, "align": "center", "role": "t", "name": "v" }
              ],
              "picture": "Look at the equal angle arcs θ at lens center P: similar right triangles give m = y'/y = v/u.",
              "example": "A positive magnification (m > 0) means an erect image; a negative magnification (m < 0) means an inverted image.",
              "bridge": "For a thin lens in one medium, similar triangles through pole P give m = y' / y = v / u = -f₁ / x₁ = -x₂ / f₂."
            },
            {
              "type": "info",
              "label": "03 · §4.7 Definition",
              "title": "What is lateral magnification?",
              "defines": ["lateral-magnification"],
              "body": "Lateral magnification m is the ratio of image height y' to object height y, where positive m means erect and negative m means inverted (Eq. 4.21).",
              "tex": "m = \\frac{y'}{y} = \\frac{v}{u} = \\frac{f_2 + x_2}{f_1 + x_1} = -\\frac{f_1}{x_1} = -\\frac{x_2}{f_2}",
              "examples": [
                "m > 0: erect",
                "m < 0: inverted",
                "Two surfaces: m = m₁m₂"
              ],
              "art": [
                { "op": "line", "x1": 14, "y1": 90, "x2": 246, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[120, 22], [108, 90], [120, 158], [132, 90], [120, 22]], "closed": true, "role": "s ok", "name": "lens" },
                { "op": "arrow", "x1": 38, "y1": 90, "x2": 38, "y2": 38, "role": "lk", "width": 2.5, "name": "obj" },
                { "op": "arrow", "x1": 214, "y1": 90, "x2": 214, "y2": 146, "role": "lk", "width": 2.5, "name": "img" },
                { "op": "line", "x1": 38, "y1": 38, "x2": 214, "y2": 146, "role": "hk", "width": 2.4, "name": "ray3" },
                { "op": "arc", "cx": 120, "cy": 90, "r": 26, "start": 180, "end": 212, "role": "lk", "width": 1.8, "name": "theta" },
                { "op": "arc", "cx": 120, "cy": 90, "r": 26, "start": 0, "end": 32, "role": "lk", "width": 1.8, "name": "theta" },
                { "op": "circle", "cx": 120, "cy": 90, "r": 4, "role": "h", "name": "P" },
                { "op": "text", "x": 24, "y": 64, "text": "y", "size": 12, "role": "t", "name": "obj" },
                { "op": "text", "x": 38, "y": 106, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
                { "op": "text", "x": 114, "y": 108, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 214, "y": 82, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
                { "op": "text", "x": 230, "y": 124, "text": "y'", "size": 12, "role": "t", "name": "img" },
                { "op": "text", "x": 170, "y": 54, "text": "m = y'/y = v/u", "size": 11, "align": "center", "role": "t", "name": "ray3" }
              ]
            },
            {
              "type": "derivation",
              "label": "04 · §4.7 Derivation",
              "title": "Lateral magnification of spherical surface and thin lens",
              "legend": "Object \\(OA = y\\) at \\(u\\), center of curvature \\(C\\) at \\(R\\), image \\(IB = -y'\\) at \\(v\\) (Fig. 4.9, Eqs. 4.22–4.24).",
              "setup": [
                { "op": "line", "x1": 14, "y1": 96, "x2": 246, "y2": 96, "role": "lk", "width": 2, "name": "axis" },
                { "op": "curve", "points": [[110, 22], [86, 96], [110, 164]], "role": "lk", "width": 2.5, "name": "surf" },
                { "op": "line", "x1": 28, "y1": 96, "x2": 28, "y2": 44, "role": "lk", "width": 2.5, "name": "obj" },
                { "op": "line", "x1": 228, "y1": 96, "x2": 228, "y2": 142, "role": "lk", "width": 2.5, "name": "img" },
                { "op": "line", "x1": 28, "y1": 44, "x2": 228, "y2": 142, "role": "hk", "width": 2.4, "name": "rayC" },
                { "op": "arc", "cx": 154, "cy": 96, "r": 26, "start": 180, "end": 206, "role": "lk", "width": 1.8, "name": "C" },
                { "op": "arc", "cx": 154, "cy": 96, "r": 26, "start": 0, "end": 26, "role": "lk", "width": 1.8, "name": "C" },
                { "op": "circle", "cx": 98, "cy": 96, "r": 3.5, "role": "f", "name": "P" },
                { "op": "circle", "cx": 154, "cy": 96, "r": 4, "role": "h", "name": "C" },
                { "op": "text", "x": 28, "y": 36, "text": "A (y)", "size": 11, "align": "center", "role": "t", "name": "obj" },
                { "op": "text", "x": 28, "y": 112, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
                { "op": "text", "x": 64, "y": 132, "text": "-u", "size": 11, "align": "center", "role": "t", "name": "u" },
                { "op": "text", "x": 94, "y": 112, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
                { "op": "text", "x": 126, "y": 132, "text": "R", "size": 11, "align": "center", "role": "t", "name": "R" },
                { "op": "text", "x": 154, "y": 84, "text": "C", "size": 11, "align": "center", "role": "t", "name": "C" },
                { "op": "text", "x": 190, "y": 156, "text": "v", "size": 11, "align": "center", "role": "t", "name": "v" },
                { "op": "text", "x": 228, "y": 88, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
                { "op": "text", "x": 228, "y": 158, "text": "B (-y')", "size": 11, "align": "center", "role": "t", "name": "img" }
              ],
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
                  "note": "Substitute \\(v/R - 1\\) and \\(-u/R + 1\\) from Eq. (4.5)."
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

### 2. Unified Diff (`patch -p1`)

```diff
--- /dev/null
+++ b/study-match/src/components/02-canvas.js
@@ -0,0 +1,334 @@
+/* ==========================================================================
+   Canvas2D diagram renderer + lazy Three.js 3D scene for the meridional ray
+   ========================================================================== */
+(function () {
+  var SM = window.SM = window.SM || {};
+  var LOGICAL_W = 260, LOGICAL_H = 180;
+  var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
+  var threeLoading = null, ro = null, themeBound = false;
+  var activeThree = [];
+
+  function readTokens() {
+    var cs = getComputedStyle(document.documentElement);
+    var get = function (k, fb) { return (cs.getPropertyValue(k) || '').trim() || fb; };
+    return {
+      ink: get('--ink', '#1B2559'),
+      ink2: get('--ink-2', '#4A5480'),
+      lav: get('--lav', '#F1EDFB'),
+      lav2: get('--lav-2', '#DED6F6'),
+      violet: get('--violet', '#6A55D8'),
+      onViolet: get('--on-violet', '#FFFFFF'),
+      amber: get('--amber', '#F6B72B'),
+      hl: get('--hl', '#C98200'),
+      card: get('--card', '#FFFFFF'),
+      font: get('--font', '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif')
+    };
+  }
+
+  function hasRole(roleStr, token) {
+    if (!roleStr) return false;
+    return (' ' + roleStr + ' ').indexOf(' ' + token + ' ') !== -1;
+  }
+
+  function applyFill(ctx, role, tok) {
+    if (hasRole(role, 'h')) { ctx.fillStyle = tok.amber; return true; }
+    if (hasRole(role, 'f')) { ctx.fillStyle = tok.violet; return true; }
+    if (hasRole(role, 's')) { ctx.fillStyle = tok.lav2; return true; }
+    return false;
+  }
+
+  function applyStroke(ctx, op, tok, focused) {
+    var role = op.role || 'lk';
+    var w = op.width || (hasRole(role, 'gk') ? 1.6 : 2);
+    ctx.lineCap = 'round';
+    ctx.lineJoin = 'round';
+    ctx.setLineDash(Array.isArray(op.dash) ? op.dash : []);
+    if (focused) {
+      ctx.strokeStyle = tok.hl;
+      ctx.lineWidth = Math.max(w + 0.6, 2.8);
+      ctx.globalAlpha = 1;
+      return true;
+    }
+    if (hasRole(role, 'hk')) { ctx.strokeStyle = tok.amber; ctx.lineWidth = w; ctx.globalAlpha = 1; return true; }
+    if (hasRole(role, 'lk') || hasRole(role, 'ok')) { ctx.strokeStyle = tok.violet; ctx.lineWidth = w; ctx.globalAlpha = 1; return true; }
+    if (hasRole(role, 'gk')) { ctx.strokeStyle = tok.ink2; ctx.lineWidth = w; ctx.globalAlpha = 0.55; return true; }
+    return false;
+  }
+
+  function traceCurve(ctx, pts, closed) {
+    if (!pts || pts.length < 2) return;
+    ctx.beginPath();
+    ctx.moveTo(pts[0][0], pts[0][1]);
+    if (pts.length === 3) {
+      ctx.quadraticCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1]);
+    } else if (pts.length === 4) {
+      ctx.bezierCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1], pts[3][0], pts[3][1]);
+    } else if (pts.length >= 5 && pts.length % 2 === 1) {
+      for (var i = 1; i < pts.length - 1; i += 2) {
+        ctx.quadraticCurveTo(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
+      }
+    } else {
+      for (var j = 1; j < pts.length; j++) ctx.lineTo(pts[j][0], pts[j][1]);
+    }
+    if (closed) ctx.closePath();
+  }
+
+  function drawOps(container) {
+    var ops = container._ops;
+    if (!ops || !ops.length) return;
+    var canvas = container.querySelector('canvas.sm-canvas');
+    if (!canvas) {
+      canvas = document.createElement('canvas');
+      canvas.className = 'sm-canvas';
+      canvas.setAttribute('aria-hidden', 'true');
+      container.innerHTML = '';
+      container.appendChild(canvas);
+    }
+    var rect = canvas.getBoundingClientRect();
+    var cw = canvas.clientWidth || rect.width || 236;
+    var ch = canvas.clientHeight || rect.height || 136;
+    var dpr = Math.max(window.devicePixelRatio || 1, 1);
+    var pw = Math.max(1, Math.round(cw * dpr));
+    var ph = Math.max(1, Math.round(ch * dpr));
+    if (canvas.width !== pw || canvas.height !== ph) {
+      canvas.width = pw;
+      canvas.height = ph;
+    }
+    var ctx = canvas.getContext('2d');
+    if (!ctx) return;
+    var scale = Math.min(cw / LOGICAL_W, ch / LOGICAL_H);
+    var ox = (cw - LOGICAL_W * scale) / 2;
+    var oy = (ch - LOGICAL_H * scale) / 2;
+    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
+    ctx.clearRect(0, 0, cw, ch);
+    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * ox, dpr * oy);
+
+    var tok = readTokens();
+    var focusSet = container._focusSet || null;
+
+    ops.forEach(function (op) {
+      var name = op.name || op.part || '';
+      var focused = !!(focusSet && name && focusSet[name]);
+      var role = op.role || '';
+      ctx.save();
+      switch (op.op) {
+        case 'line':
+          ctx.beginPath();
+          ctx.moveTo(op.x1, op.y1);
+          ctx.lineTo(op.x2, op.y2);
+          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          break;
+        case 'arrow':
+          ctx.beginPath();
+          ctx.moveTo(op.x1, op.y1);
+          ctx.lineTo(op.x2, op.y2);
+          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          var ang = Math.atan2(op.y2 - op.y1, op.x2 - op.x1);
+          var head = op.head || 7;
+          ctx.setLineDash([]);
+          ctx.globalAlpha = 1;
+          ctx.fillStyle = focused ? tok.hl : (hasRole(role, 'hk') ? tok.amber : (hasRole(role, 'gk') ? tok.ink2 : tok.violet));
+          ctx.beginPath();
+          ctx.moveTo(op.x2, op.y2);
+          ctx.lineTo(op.x2 - head * Math.cos(ang - 0.42), op.y2 - head * Math.sin(ang - 0.42));
+          ctx.lineTo(op.x2 - head * Math.cos(ang + 0.42), op.y2 - head * Math.sin(ang + 0.42));
+          ctx.closePath();
+          ctx.fill();
+          break;
+        case 'polyline':
+        case 'polygon':
+          var pts = op.points || [];
+          if (pts.length >= 2) {
+            ctx.beginPath();
+            ctx.moveTo(pts[0][0], pts[0][1]);
+            for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
+            if (op.op === 'polygon') ctx.closePath();
+            if (op.op === 'polygon' && applyFill(ctx, role, tok)) ctx.fill();
+            if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          }
+          break;
+        case 'rect':
+          var rx = op.rx || 0, x = op.x, y = op.y, w = op.w, h = op.h;
+          ctx.beginPath();
+          if (rx > 0 && ctx.roundRect) ctx.roundRect(x, y, w, h, rx);
+          else ctx.rect(x, y, w, h);
+          if (applyFill(ctx, role, tok)) ctx.fill();
+          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          break;
+        case 'circle':
+          ctx.beginPath();
+          ctx.arc(op.cx, op.cy, op.r, 0, Math.PI * 2);
+          if (applyFill(ctx, role || 'f', tok)) ctx.fill();
+          if (focused || hasRole(role, 'ok') || hasRole(role, 'lk') || hasRole(role, 'hk')) {
+            if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          }
+          break;
+        case 'ellipse':
+          ctx.beginPath();
+          ctx.ellipse(op.cx, op.cy, op.rx, op.ry, 0, 0, Math.PI * 2);
+          if (applyFill(ctx, role, tok)) ctx.fill();
+          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          break;
+        case 'curve':
+          traceCurve(ctx, op.points, !!op.closed);
+          if (op.closed && applyFill(ctx, role, tok)) ctx.fill();
+          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          break;
+        case 'arc':
+          ctx.beginPath();
+          ctx.arc(op.cx, op.cy, op.r, (op.start || 0) * Math.PI / 180, (op.end || 0) * Math.PI / 180, !!op.ccw);
+          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
+          break;
+        case 'text':
+          var sz = op.size || 11;
+          var weight = focused ? '800' : '700';
+          ctx.font = weight + ' ' + sz + 'px ' + tok.font;
+          var align = op.align || 'left';
+          if (align === 'middle') align = 'center';
+          if (align === 'end') align = 'right';
+          ctx.textAlign = align;
+          ctx.textBaseline = 'alphabetic';
+          ctx.fillStyle = focused ? tok.hl : (hasRole(role, 'i') ? tok.onViolet : tok.ink);
+          var txt = String(op.text || '');
+          ctx.fillText(txt, op.x, op.y);
+          if (focused && txt) {
+            var tw = ctx.measureText(txt).width;
+            var ux = op.x;
+            if (align === 'center') ux -= tw / 2;
+            else if (align === 'right') ux -= tw;
+            ctx.strokeStyle = tok.hl;
+            ctx.lineWidth = 1.4;
+            ctx.setLineDash([]);
+            ctx.beginPath();
+            ctx.moveTo(ux, op.y + 2);
+            ctx.lineTo(ux + tw, op.y + 2);
+            ctx.stroke();
+          }
+          break;
+      }
+      ctx.restore();
+    });
+  }
+
+  function loadThreeScript(cb) {
+    if (window.THREE) { cb(true); return; }
+    if (threeLoading) { threeLoading.push(cb); return; }
+    threeLoading = [cb];
+    var s = document.createElement('script');
+    s.src = THREE_URL;
+    s.async = true;
+    s.onload = function () {
+      var list = threeLoading || [];
+      threeLoading = null;
+      list.forEach(function (fn) { fn(!!window.THREE); });
+    };
+    s.onerror = function () {
+      var list = threeLoading || [];
+      threeLoading = null;
+      list.forEach(function (fn) { fn(false); });
+    };
+    document.head.appendChild(s);
+  }
+
+  function makeLabelSprite(THREE, text, colorStr, fontStr) {
+    var c = document.createElement('canvas');
+    c.width = 256; c.height = 64;
+    var ctx = c.getContext('2d');
+    ctx.font = '700 24px ' + fontStr;
+    ctx.textAlign = 'center';
+    ctx.textBaseline = 'middle';
+    ctx.fillStyle = colorStr;
+    ctx.fillText(text, 128, 32);
+    var tex = new THREE.CanvasTexture(c);
+    var mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
+    var sp = new THREE.Sprite(mat);
+    sp.scale.set(1.35, 0.34, 1);
+    return sp;
+  }
+
+  function mountThreeScene(container, spec) {
+    if (container._threeMounted || container._threeFailed) return;
+    container._threeMounted = true;
+    loadThreeScript(function (ok) {
+      if (!ok || !window.THREE) {
+        container._threeFailed = true;
+        container.hidden = true;
+        return;
+      }
+      var THREE = window.THREE;
+      var renderer;
+      try {
+        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
+      } catch (e) {
+        container._threeFailed = true;
+        container.hidden = true;
+        return;
+      }
+      container.hidden = false;
+      container.innerHTML = '';
+      renderer.domElement.className = 'sm-canvas';
+      container.appendChild(renderer.domElement);
+      var scene = new THREE.Scene();
+      var camera = new THREE.PerspectiveCamera(34, 260 / 180, 0.1, 50);
+      camera.position.set(0, 1.05, 4.7);
+      camera.lookAt(0, 0, 0);
+      var rootGroup = new THREE.Group();
+      rootGroup.rotation.x = 0.24;
+      rootGroup.rotation.y = -0.34;
+      scene.add(rootGroup);
+
+      function buildObjects() {
+        while (rootGroup.children.length) rootGroup.remove(rootGroup.children[0]);
+        var tok = readTokens();
+        var pw = (spec.plane && spec.plane.width) || 4.4;
+        var ph = (spec.plane && spec.plane.height) || 2.1;
+        var pGeo = new THREE.PlaneGeometry(pw, ph);
+        var pMat = new THREE.MeshBasicMaterial({ color: tok.lav2, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false });
+        rootGroup.add(new THREE.Mesh(pGeo, pMat));
+
+        var bPts = [
+          new THREE.Vector3(-pw / 2, -ph / 2, 0), new THREE.Vector3(pw / 2, -ph / 2, 0),
+          new THREE.Vector3(pw / 2, ph / 2, 0), new THREE.Vector3(-pw / 2, ph / 2, 0),
+          new THREE.Vector3(-pw / 2, -ph / 2, 0)
+        ];
+        rootGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bPts), new THREE.LineBasicMaterial({ color: tok.violet })));
+
+        var ax = spec.axis || { from: [-2.2, 0, 0], to: [2.2, 0, 0] };
+        var axGeo = new THREE.BufferGeometry().setFromPoints([
+          new THREE.Vector3(ax.from[0], ax.from[1], ax.from[2]),
+          new THREE.Vector3(ax.to[0], ax.to[1], ax.to[2])
+        ]);
+        rootGroup.add(new THREE.Line(axGeo, new THREE.LineBasicMaterial({ color: tok.violet })));
+
+        (spec.surfaces || []).forEach(function (sf) {
+          var rPts = [];
+          for (var a = 0; a <= 32; a++) {
+            var th = (a / 32) * Math.PI * 2;
+            rPts.push(new THREE.Vector3(sf.x, Math.cos(th) * sf.r, Math.sin(th) * sf.r));
+          }
+          rootGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rPts), new THREE.LineBasicMaterial({ color: tok.violet, transparent: true, opacity: 0.4 })));
+        });
+
+        if (spec.meridionalRay && spec.meridionalRay.points) {
+          var mVecs = spec.meridionalRay.points.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); });
+          var mCurve = new THREE.CatmullRomCurve3(mVecs, false, 'catmullrom', 0.02);
+          var tube = new THREE.TubeGeometry(mCurve, 32, 0.038, 8, false);
+          rootGroup.add(new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: tok.amber })));
+          if (spec.meridionalRay.label) {
+            var mLbl = makeLabelSprite(THREE, spec.meridionalRay.label, tok.hl, tok.font);
+            mLbl.position.set(0, 0.88, 0);
+            rootGroup.add(mLbl);
+          }
+        }
+
+        if (spec.skewRay && spec.skewRay.points) {
+          var sVecs = spec.skewRay.points.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); });
+          var sGeo = new THREE.BufferGeometry().setFromPoints(sVecs);
+          var sLine = new THREE.Line(sGeo, new THREE.LineDashedMaterial({ color: tok.ink2, dashSize: 0.14, gapSize: 0.09 }));
+          if (sLine.computeLineDistances) sLine.computeLineDistances();
+          rootGroup.add(sLine);
+          if (spec.skewRay.label) {
+            var sLbl = makeLabelSprite(THREE, spec.skewRay.label, tok.ink2, tok.font);
+            sLbl.position.set(0.15, -0.82, 0.35);
+            rootGroup.add(sLbl);
+          }
+        }
+
+        (spec.points || []).forEach(function (pt) {
+          var spGeo = new THREE.SphereGeometry(0.068, 14, 14);
+          var col = pt.role === 'h' ? tok.amber : tok.violet;
+          var mesh = new THREE.Mesh(spGeo, new THREE.MeshBasicMaterial({ color: col }));
+          mesh.position.set(pt.pos[0], pt.pos[1], pt.pos[2]);
+          rootGroup.add(mesh);
+          if (pt.label) {
+            var lb = makeLabelSprite(THREE, pt.label, tok.ink, tok.font);
+            lb.scale.set(0.65, 0.26, 1);
+            lb.position.set(pt.pos[0], pt.pos[1] + (pt.pos[1] > 0.1 ? 0.22 : -0.22), pt.pos[2]);
+            rootGroup.add(lb);
+          }
+        });
+      }
+
+      function resizeThree() {
+        var cw = container.clientWidth || 236;
+        var ch = container.clientHeight || 136;
+        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
+        renderer.setSize(cw, ch, false);
+        camera.aspect = cw / Math.max(ch, 1);
+        camera.updateProjectionMatrix();
+        renderer.render(scene, camera);
+      }
+
+      buildObjects();
+      resizeThree();
+
+      var dragging = false, lastX = 0, lastY = 0;
+      renderer.domElement.addEventListener('pointerdown', function (e) {
+        dragging = true; lastX = e.clientX; lastY = e.clientY;
+        e.stopPropagation();
+      });
+      window.addEventListener('pointermove', function (e) {
+        if (!dragging) return;
+        rootGroup.rotation.y += (e.clientX - lastX) * 0.01;
+        rootGroup.rotation.x = Math.max(-0.7, Math.min(0.8, rootGroup.rotation.x + (e.clientY - lastY) * 0.01));
+        lastX = e.clientX; lastY = e.clientY;
+        renderer.render(scene, camera);
+      });
+      window.addEventListener('pointerup', function () { dragging = false; });
+
+      activeThree.push({ container: container, rebuild: function () { buildObjects(); resizeThree(); }, resize: resizeThree });
+    });
+  }
+
+  function checkLazyThree() {
+    document.querySelectorAll('[data-three]').forEach(function (el) {
+      if (el._threeMounted || el._threeFailed) return;
+      var cardEl = el.closest('.card');
+      var sheetEl = el.closest('.sheet');
+      if (!cardEl || ! cardEl._c || !cardEl._c.three) return;
+      if (sheetEl && sheetEl.classList.contains('is-open')) {
+        mountThreeScene(el, cardEl._c.three);
+      }
+    });
+  }
+
+  function mountAll() {
+    if (!ro && 'ResizeObserver' in window) {
+      ro = new ResizeObserver(function (entries) {
+        entries.forEach(function (en) {
+          var el = en.target;
+          if (el._ops) drawOps(el);
+          else if (el.hasAttribute('data-three')) {
+            activeThree.forEach(function (item) { if (item.container === el) item.resize(); });
+          }
+        });
+      });
+    }
+    document.querySelectorAll('[data-canvas]').forEach(function (el) {
+      var cardEl = el.closest('.card');
+      var c = cardEl && cardEl._c;
+      if (!c) return;
+      var key = el.getAttribute('data-canvas');
+      var ops = key === 'setup' ? ((c.d && (c.d.setup || c.d.art)) || c.setup) : c.art;
+      if (Array.isArray(ops) && ops.length) {
+        el._ops = ops;
+        drawOps(el);
+        if (ro) ro.observe(el);
+      }
+    });
+    document.querySelectorAll('[data-three]').forEach(function (el) {
+      if (ro) ro.observe(el);
+      var sheetEl = el.closest('.sheet');
+      if (sheetEl && !sheetEl._threeObserved && 'MutationObserver' in window) {
+        sheetEl._threeObserved = true;
+        new MutationObserver(checkLazyThree).observe(sheetEl, { attributes: true, attributeFilter: ['class'] });
+      }
+    });
+    checkLazyThree();
+    if (!themeBound && 'MutationObserver' in window) {
+      themeBound = true;
+      new MutationObserver(function () { SM.Canvas.redraw(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
+      if (window.matchMedia) {
+        var mq = window.matchMedia('(prefers-color-scheme: dark)');
+        if (mq.addEventListener) mq.addEventListener('change', function () { SM.Canvas.redraw(); });
+      }
+      window.addEventListener('resize', function () { SM.Canvas.redraw(); });
+    }
+  }
+
+  SM.Canvas = {
+    mountAll: mountAll,
+    redraw: function (root) {
+      var scope = root || document;
+      scope.querySelectorAll('[data-canvas]').forEach(function (el) { if (el._ops) drawOps(el); });
+      activeThree.forEach(function (item) {
+        if (!root || root.contains(item.container)) item.rebuild();
+      });
+      checkLazyThree();
+    },
+    setFocus: function (setupEl, focusList) {
+      if (!setupEl) return;
+      var set = {};
+      (focusList || []).forEach(function (k) { if (k) set[k] = 1; });
+      setupEl._focusSet = set;
+      if (setupEl._ops) drawOps(setupEl);
+    }
+  };
+})();
--- a/study-match/src/components/02-mathflow.js
+++ b/study-match/src/components/02-mathflow.js
@@ -193,6 +193,12 @@
     /* highlight the part of the setup SVG (labels and angle arcs) used in the current step */
     function highlightSetup(f) {
       if (!setupEl) return;
+      if (SM.Canvas && SM.Canvas.setFocus) {
+        var st0 = (f && spec.steps[f.si]) || {};
+        var fl = Array.isArray(st0.focus) ? st0.focus : (st0.focus ? String(st0.focus).split(/[\s,]+/) : []);
+        SM.Canvas.setFocus(setupEl, fl);
+        return;
+      }
       var svg = setupEl.querySelector('svg');
       if (!svg) return;
       Array.prototype.forEach.call(svg.querySelectorAll('.mf-part-on'), function (el) { el.classList.remove('mf-part-on'); });
@@ -534,6 +540,7 @@
       if (willFlip) {
         setTimeout(function () {
           rebuild();
+          if (SM.Canvas && SM.Canvas.redraw) SM.Canvas.redraw(root);
           if (api.i < 0) api.play();
         }, 60);
       } else stopPlay();
--- a/study-match/src/components/03-definition-checks.js
+++ b/study-match/src/components/03-definition-checks.js
@@ -6,7 +6,7 @@
     return !!SM.meta.definitionChecks && !!status && status !== 'pre' && status !== 'ft';
   };
   SM.isDefinition = function (c) {
-    return !!SM.meta.definitionChecks && c.type === 'info' && !c.art &&
+    return !!SM.meta.definitionChecks && c.type === 'info' &&
       ((c.defines && c.defines.length) || /^What (?:is|are)\b/i.test(c.title || ''));
   };
   SM.cardLocked = function (c) { return !!(c && c.el && c.el.classList.contains('is-sequence-locked')); };
@@ -60,6 +60,7 @@
     var front = c.el.querySelector('.definition-front'), rear = c.el.querySelector('.definition-back');
     front.inert = flipped; rear.inert = !flipped;
     front.setAttribute('aria-hidden', String(flipped)); rear.setAttribute('aria-hidden', String(!flipped));
+    if (SM.Canvas && SM.Canvas.redraw) SM.Canvas.redraw(c.el);
     if (c.el.contains(document.activeElement)) document.activeElement.blur();
   }
   SM.flipDefinition = flipCard;
@@ -109,7 +110,8 @@
       turn.textContent = 'Recall · flip card'; front.appendChild(turn);
       back.innerHTML = '<div class="def-back-head"><span class="card-index">Your definition</span>' +
         '<button type="button" class="chip" data-def="front">Read · flip back</button></div>' +
-        '<h2 class="card-title">' + SM.esc(c.title) + '</h2>';
+        '<h2 class="card-title">' + SM.esc(c.title) + '</h2>' +
+        ((c.art && c.art.length) ? '<div class="art def-art" data-canvas="art" role="img" aria-label="' + SM.esc(c.title) + '"></div>' : '');
       var panel = document.createElement('div');
       panel.className = 'definition-check scroll-y';
       panel.innerHTML = '<label class="def-label" for="def-' + c.id + '">Define it in your own words</label>' +
@@ -143,6 +145,7 @@
       });
     });
     SM.S.definitionChecksVersion = 1; SM.save();
+    if (SM.Canvas && SM.Canvas.mountAll) SM.Canvas.mountAll();
     SM.definitionChecksReady = true; SM.refreshDefinitionLocks();
   };
 })();
--- a/study-match/src/components/03-render.js
+++ b/study-match/src/components/03-render.js
@@ -57,13 +57,13 @@
         return '<article class="card intuition-card"' + a + '><span class="card-index">In plain words</span>' +
           '<div class="intuition-content scroll-y"><h2 class="card-title">' + esc(c.title) + '</h2>' +
           '<p class="intuition-meaning">' + esc(c.meaning) + '</p>' +
           '<h3>Picture it</h3>' +
-          (c.art ? '<div class="art intuition-art">' + c.art + '</div>' : '') +
+          (c.three ? '<div class="art intuition-art" data-three="1" role="img" aria-label="' + esc(c.title) + '"></div>' : (c.art && c.art.length) ? '<div class="art intuition-art" data-canvas="art" role="img" aria-label="' + esc(c.title) + '"></div>' : '') +
           '<p class="card-body">' + esc(c.picture) + '</p>' +
           '<div class="intuition-example"><h3>For example</h3><p class="card-body">' + esc(c.example) + '</p></div>' +
           '<h3>Connect it to the definition</h3><p class="card-body">' + esc(c.bridge) + '</p></div></article>';
       case 'info':
         return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Concept') + '</span>' +
-          (c.art ? '<div class="art">' + c.art + '</div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
+          (c.three ? '<div class="art" data-three="1" role="img" aria-label="' + esc(c.title) + '"></div>' : (!SM.isDefinition(c) && c.art && c.art.length) ? '<div class="art" data-canvas="art" role="img" aria-label="' + esc(c.title) + '"></div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
           '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
           (c.examples && c.examples.length ? '<div class="examples" style="margin-top:9px">' + chips(c.examples) + '</div>' : '') + '</div></article>';
       case 'math':
@@ -95,7 +95,7 @@
           '<button class="btn" type="button" data-check>Check</button></div>' + (c.type === 'number' ? '<button type="button" class="chip" data-calculator>Calculator =</button>' : '') + '<p class="omr-feedback" hidden></p></div></article>';
       case 'question':
         return '<article class="card qcard' + (c.textAnswer ? ' has-text-answer' : '') + '"' + a + '><span class="card-index">' + esc(c.label || 'Question') + '</span>' +
-          (c.art ? '<div class="art">' + c.art + '</div>' : '') +
+          ((c.art && c.art.length) ? '<div class="art" data-canvas="art" role="img" aria-label="' + esc(c.title) + '"></div>' : '') +
           '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="q-text">' + c.q + '</p></div>' +
           (c.textAnswer ? '<div class="written-answer"><div class="answer-label"><label for="answer-' + c.id + '">Your answer</label><span data-draft-status id="draft-' + c.id + '" role="status">Saves automatically on this device.</span></div>' +
             '<textarea class="answer-input" id="answer-' + c.id + '" data-written-answer rows="6" placeholder="Write your answer in your own words…" aria-describedby="draft-' + c.id + '"></textarea></div>' : '') +
@@ -119,12 +119,12 @@
           '<ol class="route-list">' + c.phases.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' +
           (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') + '</div></article>';
       case 'derive':
-        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], setupSVG = c.d.setup || c.d.art || '';
+        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], hasSetup = !!((c.d.setup && c.d.setup.length) || (c.d.art && c.d.art.length));
         return '<article class="card mf-card mf-flip-card"' + a + '><div class="mf-card-inner">' +
           '<div class="mf-face mf-front">' +
           '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span><button type="button" class="chip mf-flip-btn" data-mf="flip-open">Derive &#9654;</button></div>' +
           '<h2 class="card-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
-          (setupSVG ? '<div class="art mf-front-art">' + setupSVG + '</div>' : '') +
+          (hasSetup ? '<div class="art mf-front-art" data-canvas="setup" role="img" aria-label="' + esc(c.title || 'Derivation setup') + '"></div>' : '') +
           '<div class="scroll-y mf-front-route">' +
           '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || dst[0].tex) + '\\)</div></div>' +
           '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || dst[dst.length - 1].tex) + '\\)</div></div>' +
@@ -136,8 +136,8 @@
           '<div class="mf-top-actions"><span class="mf-count"></span><button type="button" class="chip" data-mf="summary">All steps</button><button type="button" class="chip" data-mf="flip-back">Concept</button></div></div>' +
           '<h2 class="card-title mf-back-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
           '<div class="mf-phases"></div>' +
-          '<div class="mf-work' + (setupSVG ? ' has-setup' : '') + '">' +
-          (setupSVG ? '<div class="mf-setup art">' + setupSVG + '</div>' : '') +
+          '<div class="mf-work' + (hasSetup ? ' has-setup' : '') + '">' +
+          (hasSetup ? '<div class="mf-setup art" data-canvas="setup" role="img" aria-label="' + esc(c.title || 'Derivation setup') + '"></div>' : '') +
           '<div class="mf-right">' +
           '<div class="mf-board"><div class="mf-stage"></div><div class="mf-summary scroll-y" hidden></div></div>' +
           '<div class="mf-panel"><p class="mf-note">Press play. It stops at each decision so you can call the next move.</p><div class="mf-dots"></div>' +
@@ -171,6 +171,7 @@
     SM.SHEETS.forEach(function (sh) { sh.el = shelf.querySelector('[data-sheet="' + sh.id + '"]'); });
     SM.CARDS.forEach(function (c) { c.el = shelf.querySelector('[data-card="' + c.id + '"]'); c.el._c = c; });
     shelf.querySelectorAll('.card-index, .chip').forEach(function (tag) { tag.innerHTML = SM.mathLabel(tag.innerHTML); });
+    if (SM.Canvas && SM.Canvas.mountAll) SM.Canvas.mountAll();
   };

   /* ---------- widgets ---------- */
--- a/study-match/src/styles/05-cards.css
+++ b/study-match/src/styles/05-cards.css
@@ -25,6 +25,7 @@
 }
 .intuition-art { min-height: 130px; margin: 6px 0; padding: 8px; }
 .art > svg { width: 100%; max-height: 100%; height: auto; overflow: visible; }
+.art > canvas { width: 100%; height: 100%; max-height: 100%; display: block; }
 .art .f { fill: var(--violet); }
 .art .s { fill: var(--lav-2); }
 .art .ok { stroke: var(--violet); stroke-width: 2; }
--- a/study-match/src/styles/07-mathflow.css
+++ b/study-match/src/styles/07-mathflow.css
@@ -25,5 +25,6 @@
   padding: 4px; border-radius: 12px; background: var(--card);
 }
 .mf-setup > svg { width: 100%; height: 100%; max-height: 100%; }
+.mf-setup > canvas { width: 100%; height: 100%; max-height: 100%; display: block; }
 .mf-setup svg text.mf-part-on { fill: var(--hl) !important; font-weight: 800; text-decoration: underline; }
 .mf-setup svg path.mf-part-on,
--- a/study-match/src/styles/15-definition-checks.css
+++ b/study-match/src/styles/15-definition-checks.css
@@ -11,6 +11,7 @@
 .definition-front > .scroll-y { flex: 0 1 auto; max-height: 56%; }
 .definition-back { transform: rotateY(180deg); cursor: default; }
 .definition-back > .card-title { font-size: var(--fs-body); }
+.definition-back > .def-art { flex: 0 0 112px; height: 112px; min-height: 92px; padding: 6px; }
 .def-back-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
 .def-back-head .chip { font-size: 11px; }
 .def-flip { align-self: flex-start; margin-top: auto; }
--- a/study-match/src/template.html
+++ b/study-match/src/template.html
@@ -11,6 +11,7 @@
 <meta name="apple-mobile-web-app-title" content="{{TITLE}}">
 {{HEAD_APP}}
 <link rel="preconnect" href="https://fonts.googleapis.com">
+<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
 <style>
 {{STYLE}}
--- a/study-match/src/sw.js
+++ b/study-match/src/sw.js
@@ -10,7 +10,7 @@
     return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
   }).then(function () { return self.clients.claim(); }));
 });
-/* pages: network first (fresh build wins), everything else (MathJax, fonts): cache first */
+/* pages: network first (fresh build wins), everything else (MathJax, cdnjs.cloudflare.com three.js, fonts): cache first */
 self.addEventListener('fetch', function (e) {
   if (e.request.method !== 'GET') return;
   var isPage = e.request.mode === 'navigate';
--- a/study-match/build.py
+++ b/study-match/build.py
@@ -24,6 +24,7 @@
 Both = BOTH = {'add', 'subtract', 'multiply', 'divide', 'power', 'root', 'reciprocal', 'negate', 'differentiate', 'integrate', 'ln', 'exp', 'apply'}
 ICONS = {'atom', 'curve', 'motion', 'graph', 'wave', 'lens', 'flask', 'cell', 'sigma', 'book', 'bolt'}
 SVG_CLASSES = {'f', 's', 'ok', 't', 'i', 'h', 'hk', 'lk', 'gk'}
+CANVAS_OPS = {'line', 'arrow', 'polyline', 'polygon', 'rect', 'circle', 'ellipse', 'curve', 'arc', 'text'}

 # A backslash that was not doubled in JSON turns "\frac" into form-feed + "rac", "\beta" into backspace + "eta", etc.
 CTRL_FIX = {'\f': '\\f', '\b': '\\b', '\t': '\\t', '\r': '\\r', '\v': '\\v', '\a': '\\a'}
@@ -100,11 +101,13 @@
         for k, v in list(obj.items()):
             w = '%s.%s' % (where, k)
             if isinstance(v, str):
                 obj[k] = fix_text(v, w, rep, tex_field=k in tex_keys)
-                if k not in tex_keys and k not in ('art', 'id', 'type', 'icon'):
+                if k not in tex_keys and k not in ('art', 'setup', 'three', 'id', 'type', 'icon', 'op', 'role', 'name', 'align', 'text'):
                     check_inline_math(obj[k], w, rep)
+            elif k in ('art', 'setup', 'three'):
+                continue
             else:
                 walk_text(v, w, rep, tex_keys)
     elif isinstance(obj, list):
         for i, v in enumerate(obj):
             w = '%s[%d]' % (where, i)
@@ -129,6 +132,48 @@
     if not a.get('why'):
         rep.warn(where, 'ask has no "why"; the learner sees no reason after answering')


+def check_canvas_ops(ops, where, rep):
+    names = set()
+    if not isinstance(ops, list) or not ops:
+        rep.err(where, 'diagram must be a non-empty list of canvas2d drawing operations')
+        return names
+    for i, item in enumerate(ops):
+        iw = '%s[%d]' % (where, i)
+        if not isinstance(item, dict):
+            rep.err(iw, 'drawing operation must be an object'); continue
+        op = item.get('op')
+        if op not in CANVAS_OPS:
+            rep.err(iw, 'unknown canvas op "%s" (allowed: %s)' % (op, ', '.join(sorted(CANVAS_OPS)))); continue
+        role = item.get('role', '')
+        if role:
+            for r in str(role).split():
+                if r not in SVG_CLASSES:
+                    rep.err(iw, 'unknown role "%s" (allowed: %s)' % (r, ', '.join(sorted(SVG_CLASSES))))
+        if item.get('name'):
+            names.add(item['name'])
+        if op in ('line', 'arrow'):
+            if any(not isinstance(item.get(k), (int, float)) for k in ('x1', 'y1', 'x2', 'y2')):
+                rep.err(iw, '%s needs numeric x1, y1, x2, y2' % op)
+        elif op in ('polyline', 'polygon', 'curve'):
+            pts = item.get('points')
+            if not isinstance(pts, list) or len(pts) < 2 or any(not isinstance(p, list) or len(p) != 2 for p in pts):
+                rep.err(iw, '%s needs a points list of [x, y] pairs' % op)
+        elif op == 'rect':
+            if any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y', 'w', 'h')):
+                rep.err(iw, 'rect needs numeric x, y, w, h')
+        elif op == 'circle':
+            if any(not isinstance(item.get(k), (int, float)) for k in ('cx', 'cy', 'r')):
+                rep.err(iw, 'circle needs numeric cx, cy, r')
+        elif op == 'ellipse':
+            if any(not isinstance(item.get(k), (int, float)) for k in ('cx', 'cy', 'rx', 'ry')):
+                rep.err(iw, 'ellipse needs numeric cx, cy, rx, ry')
+        elif op == 'arc':
+            if any(not isinstance(item.get(k), (int, float)) for k in ('cx', 'cy', 'r', 'start', 'end')):
+                rep.err(iw, 'arc needs numeric cx, cy, r, start, end')
+        elif op == 'text':
+            if any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y')) or not isinstance(item.get('text'), str):
+                rep.err(iw, 'text needs numeric x, y and string text')
+    return names
+
+
 def validate(data, rep):
     if not isinstance(data, dict):
         rep.err('root', 'data must be a JSON object'); return
@@ -167,6 +212,7 @@
     if not isinstance(secs, list) or not secs:
         rep.err('sections', 'need at least one section'); return
     ids = set()
+    three_cards = 0
     for si, sec in enumerate(secs):
         sw = 'sections[%d]' % si
         if not sec.get('title') and not sec.get('short'):
@@ -194,6 +240,17 @@
             extra_ids = set()
             for ci, c in enumerate(cards):
                 cw = hw + '.cards[%d]' % ci
+                if 'three' in c:
+                    three_cards += 1
+                    if c.get('term') != 'meridional-ray' and 'meridional-ray' not in (c.get('defines') or []):
+                        rep.err(cw, 'three.js is allowed only on the meridional-ray card')
+                    th = c['three']
+                    if not isinstance(th, dict) or not all(k in th for k in ('axis', 'points', 'meridionalRay')):
+                        rep.err(cw + '.three', 'three must be an object with axis, points and meridionalRay')
+                if meta.get('definitionChecks') and c.get('type') == 'info':
+                    if (c.get('defines') and len(c['defines'])) or re.match(r'^What (?:is|are)\b', c.get('title', ''), re.I):
+                        if not c.get('art'):
+                            rep.err(cw, 'definition recall card needs a canvas2d "art" drawing list on its flip back')
                 if 'uid' in c:
                     uid = c['uid']
                     if not isinstance(uid, str) or not re.fullmatch(r'[a-z][a-z0-9-]*', uid):
@@ -211,6 +268,8 @@
                         rep.err(hw + '.cards[%d]' % ci, 'duplicate intuition term in this topic')
                     intro_terms.add(term)
                 check_card(c, '%s.cards[%d]' % (hw, ci), rep)
+    if three_cards > 1:
+        rep.err('root', 'at most one card may use "three" (found %d)' % three_cards)


 def check_card(c, w, rep):
@@ -226,18 +285,11 @@
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
+        if not c.get('art') and not c.get('three'):
+            rep.err(w, 'intuition card needs a canvas2d "art" list (or "three" on the meridional-ray card)')
+    if t in ('info', 'intuition', 'question') and c.get('art') is not None:
+        check_canvas_ops(c['art'], w + '.art', rep)
     if t == 'question':
         if 'textAnswer' in c and not isinstance(c['textAnswer'], bool):
             rep.err(w, 'textAnswer must be true or false')
         if not c.get('q'):
             rep.err(w, 'question card needs "q"')
-        if c.get('art') and not str(c['art']).strip().startswith('<svg'):
-            rep.err(w, 'art must be one <svg> element')
     if t == 'eval':
         opts = c.get('options')
         if not c.get('q'):
@@ -289,6 +341,9 @@


 def check_derivation(d, w, rep):
+    setup_names = set()
+    if d.get('setup') is not None:
+        setup_names = check_canvas_ops(d['setup'], w + '.setup', rep)
     steps = d.get('steps')
     if not isinstance(steps, list) or len(steps) < 2:
         rep.err(w, 'derivation needs at least 2 steps'); return
@@ -324,6 +379,14 @@
                 rep.err(sw, 'unbalanced { } in move.by')
             if mt in BOTH and i > 0 and top_level_equals(steps[i - 1].get('tex', '')) != 1:
                 rep.err(sw, 'move "%s" acts on both sides, so the previous line needs exactly one "="' % mt)
+        if 'focus' in st:
+            fc = st['focus']
+            if not isinstance(fc, list) or any(not isinstance(fn, str) for fn in fc):
+                rep.err(sw + '.focus', 'focus must be a list of part names')
+            elif setup_names:
+                for fn in fc:
+                    if fn not in setup_names:
+                        rep.err(sw + '.focus', 'focus name "%s" not found in setup drawing list' % fn)
         if st.get('ask'):
             check_ask(st['ask'], sw + '.ask', rep)
     phases = d.get('phases') or []
--- a/skills/00-START-HERE.md
+++ b/skills/00-START-HERE.md
@@ -52,9 +52,9 @@
 1. Plan first, privately: list the sections (big subject areas, 2–6), and inside each the topics
    ("sheets", 2–5 per section). A topic is something I can finish in 10–25 minutes.
 2. For each syllabus topic write about 6–14 cards, following `01-schema.md`:
-   - concepts first (`info` cards, one idea each, with an SVG picture when a picture helps),
+   - concepts first (`info` cards, one idea each, with a canvas2d `art` drawing list when a picture helps, and on every definition-recall card's flip back),
    - a `derivation` card whenever the topic has a formula that is derived (rules in `02-derivations.md`),
    - one `math` worked example where numbers help,
    - then 3–5 questions (`mcq`, `fill`, `number`) at the end of the topic (rules in `04-questions.md`).
-2b. For physics topics also follow the "Physics subjects: required pictures" rules in `03-svg-art.md`
-   (circuit diagrams, optics set-up diagrams, true graphs) and give every derivation 4 `ask` checkpoints.
+2b. For physics topics also follow the canvas2d drawing rules in `03-svg-art.md`
+   (and three.js only for the meridional ray) and give every derivation 4 `ask` checkpoints.
 2c. For physics model-paper practice, preserve the paper's sections and question order.
--- a/skills/01-schema.md
+++ b/skills/01-schema.md
@@ -122,18 +122,22 @@
 
 `points` is a non-empty list. Place the Remember card after the model answer,
 then append the three word-completion OMR cards described below.
 
-### `intuition` — plain-words introduction with required SVG picture
+### `intuition` — plain-words introduction with required Canvas2D diagram (or `three` for meridional ray)
 
 Place an `intuition` card immediately before a new concept's technical `info` card;
 see `07-plain-words-and-glossary.md`. Every `intuition` card **must** include an
-`art` SVG (drawn according to `03-svg-art.md`), followed by `picture` as a short
+`art` Canvas2D drawing list (drawn according to `03-svg-art.md`), or a `three` 3D scene object on the meridional-ray card only, followed by `picture` as a short
 one-line caption explaining what to look at in the diagram.
 ```json
 { "type": "intuition", "term": "paraxial-approximation",
   "title": "Why only rays close to the axis focus sharply",
   "meaning": "The paraxial approximation keeps only rays that make very small angles with the axis.",
-  "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>",
+  "art": [
+    { "op": "line", "x1": 16, "y1": 105, "x2": 244, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
+    { "op": "polyline", "points": [[28, 105], [118, 56], [226, 105]], "role": "hk", "width": 2.6, "name": "OSI" },
+    { "op": "arc", "cx": 28, "cy": 105, "r": 32, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" }
+  ],
   "picture": "Look at the small angle arc α near O where height h over distance x gives the angle.",
   "example": "At 0.1 rad, sin(0.1) and tan(0.1) are both very close to 0.1.",
   "bridge": "Under this small-angle rule, all paraxial rays from O meet at one image point I." }
@@ -148,18 +152,22 @@
 card's
 defined terms with a defines array of glossary IDs so those terms remain unlinked
 on that card; intuition.term automatically supplies its own exclusion. New worked
 examples use a unique uid so they do not shift existing cards' numeric IDs.
-With meta.definitionChecks enabled, definition info cards use the same authored
-body as their correct statement. Art cards and math cards retain their existing
-presentation. No extra recall question or reference field is required.
-Keep the authored definition body on the flip card's front; writing belongs on
-its back. Locked cards remain in the row with their original dimensions.
+With meta.definitionChecks enabled, definition info cards (cards with `defines` or a title starting with “What is/are”) use the same authored
+body as their correct statement and render their `art` Canvas2D drawing list on the flip back. Non-definition info cards render `art` on their front face.
+Keep the authored definition body and existing `tex` formula on the flip card's front; writing and the recall diagram belong on
+its back. Locked cards remain in the row with their original dimensions.
 ```json
 { "type": "info", "label": "01", "title": "Ionic bond",
   "body": "One atom transfers electrons to another, creating oppositely charged ions that attract.",
   "examples": ["NaCl", "MgO"],
-  "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\">...</svg>" }
+  "art": [
+    { "op": "circle", "cx": 80, "cy": 95, "r": 45, "role": "s", "name": "Na" },
+    { "op": "circle", "cx": 180, "cy": 95, "r": 45, "role": "f", "name": "Cl" }
+  ] }
 ```
 - `body`: 1–2 sentences, ≤ 220 characters. One idea per card.
 - `examples`: 0–3 short chips (≤ 24 chars each).
-- `art`: optional SVG (rules in `03-svg-art.md`). Instead of `art` you may give `"tex": "E = mc^2"` to show one formula large.
+- `art`: Canvas2D drawing list (rules in `03-svg-art.md`). Every definition-recall `info` card has an `art` list shown on its flip back; non-definition `info` cards show `art` or `"tex"` on their front.
+- `three`: 3D scene object (`axis`, `plane`, `surfaces`, `points`, `meridionalRay`, `skewRay`), used **only** on the meridional-ray card.
 
 ### `math` — a formula or worked example shown large
@@ -173,13 +181,15 @@
 ```json
 { "type": "derivation", "title": "Bond energy, step by step",
   "legend": "\\(k\\) Coulomb constant, \\(r\\) separation.",
-  "setup": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"...\"><line x1=\"...\" y1=\"...\" x2=\"...\" y2=\"...\" class=\"lk\" data-part=\"sep\"/></svg>",
+  "setup": [
+    { "op": "line", "x1": 40, "y1": 90, "x2": 220, "y2": 90, "role": "lk", "width": 2, "name": "sep" }
+  ],
   "phases": [ { "name": "Model", "why": "energy = attraction + repulsion" } ],
   "steps": [ { "tex": "...", "phase": "Model", "focus": ["sep"], "note": "..." },
              { "tex": "...", "move": { "type": "differentiate", "wrt": "r" }, "focus": ["sep"], "note": "...", "ask": { ... } } ] }
 ```
-- Give each highlightable ray, side, angle arc or label in `setup` a `data-part="name"` attribute.
+- Give each highlightable ray, side, angle arc or label in `setup` a `"name": "partName"` field.
 - Each step lists the parts it uses in `"focus": ["name1", "name2"]` so the diagram highlights them at the same time.
 - Write parallel steps (such as two surfaces of a lens) one after the other as separate steps with their own phase labels, never side by side.
 - An **All steps** summary view lists every step in order (step number, equation and move) after the final step and via the top button.
--- a/skills/02-derivations.md
+++ b/skills/02-derivations.md
@@ -1,7 +1,7 @@
 # 02 — Writing derivations
 
 You write **lines of TeX** and name the **move** that produced each line. The app animates
-everything on a single card after the student flips it: the `setup` SVG sits next to the
+everything on a single card after the student flips it: the `setup` Canvas2D diagram sits next to the
 equations on the same board, symbols glide to their new place, new symbols write in, and
 cancelled ones are struck through and vanish.
 
@@ -19,8 +19,8 @@
    each with its own phase label—never side by side. The first step has no `move`; every later step has one.
 6. Every step has a `note`: one short sentence saying *why* or what just cancelled (≤ 120 chars).
-7. Include a `"setup"` SVG (following `03-svg-art.md`) showing the geometry or circuit used by
-   the derivation, with `data-part="name"` on each highlightable ray, side, angle arc and label.
+7. Include a `"setup"` Canvas2D drawing list (following `03-svg-art.md`) showing the geometry or circuit used by
+   the derivation, with `"name": "partName"` on each highlightable ray, side, angle arc and label.
    Each step names the parts it uses in `"focus": ["name1", "name2"]` so the picture highlights
    those lines at the same time.
 8. Mark 3–6 phases with `"phase"` on the step where each phase starts. List the same phases in
--- a/skills/03-svg-art.md
+++ b/skills/03-svg-art.md
@@ -1,62 +1,68 @@
-# 03 — SVG pictures for `info`, `intuition` and `derivation` cards
-
-Pictures are simple, flat diagrams. The app colours them, including in dark mode, through
-**classes**. Never write colours yourself.
+# 03 — Canvas2D diagrams (and Three.js for the meridional ray)
+
+All 2D diagrams (`art` on `intuition`, `info`, and recall cards; `setup` on `derivation` cards)
+are drawn with the HTML Canvas 2D API from a JSON list of drawing operations.
+Never write SVG strings, JavaScript code, or hard-coded hex/RGB colours in `data.json`.
+The runtime (`02-canvas.js`) reads the palette tokens from `01-tokens.css` in light and dark mode
+and scales by `devicePixelRatio` so diagrams stay sharp on phones and desktops.
 
 ## Hard rules
 
-- Exactly one element: `<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="what it shows">…</svg>`
-- Draw inside x 0–260, y 0–180. Leave ~8 units of margin.
-- Allowed elements: `circle, ellipse, rect, line, polyline, polygon, path, text, g`.
-- **No** `fill="#…"`, `stroke="#…"`, `style=`, `<script>`, `<image>`, `href`, `on…=` attributes, gradients, filters, fonts.
-- Use only these classes:
-
-| class | effect | use for |
+- Coordinate space: logical width `260`, logical height `180` (`0 <= x <= 260`, `0 <= y <= 180`). Leave ~8 units of margin.
+- Every diagram in `art` or `setup` is a non-empty JSON array of operation objects (`{ "op": "...", ... }`).
+- Allowed `op` types:
+  - `line`: `{ "op": "line", "x1": 20, "y1": 90, "x2": 240, "y2": 90, "role": "lk", "width": 2, "dash": [4, 4], "name": "axis" }`
+  - `arrow`: `{ "op": "arrow", "x1": 30, "y1": 90, "x2": 210, "y2": 90, "role": "hk", "width": 2.5, "head": 7, "name": "ray" }`
+  - `polyline`: `{ "op": "polyline", "points": [[30, 90], [120, 48], [210, 90]], "role": "hk", "width": 2.5, "dash": [4, 4], "name": "ray" }`
+  - `polygon`: `{ "op": "polygon", "points": [[32, 90], [215, 34], [215, 146]], "role": "s", "name": "cone" }`
+  - `rect`: `{ "op": "rect", "x": 65, "y": 24, "w": 80, "h": 52, "rx": 6, "role": "s ok", "name": "glass" }`
+  - `circle`: `{ "op": "circle", "cx": 120, "cy": 90, "r": 4, "role": "h", "name": "P" }`
+  - `ellipse`: `{ "op": "ellipse", "cx": 130, "cy": 90, "rx": 60, "ry": 35, "role": "s ok", "name": "mirror" }`
+  - `curve`: quadratic (`3` points), cubic (`4` points), or chained quadratic lens/surface (`5` points with `"closed": true`):
+    `{ "op": "curve", "points": [[120, 22], [108, 90], [120, 158], [132, 90], [120, 22]], "closed": true, "role": "s ok", "name": "lens" }`
+  - `arc`: `{ "op": "arc", "cx": 28, "cy": 105, "r": 28, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" }` (angles in degrees; stroke only, no fill).
+  - `text`: `{ "op": "text", "x": 130, "y": 152, "text": "Label", "size": 11, "align": "center", "role": "t", "name": "part" }`
+
+## Palette roles (mapped to `01-tokens.css`)
+
+| `role` | token mapping | use for |
 |---|---|---|
-| `f` | solid main colour (violet) | main objects, nuclei, arrows heads |
-| `s` | soft fill (pale lavender) | backgrounds, secondary objects, areas |
-| `ok` | violet outline (add to a filled shape: `class="s ok"`) | borders |
-| `lk` | violet line, no fill | lines, paths, angle arcs, axes, orbits |
-| `gk` | faint grey line | ground lines, guides, dashed helpers |
-| `h` | amber fill | the ONE thing to look at (electron, ball, key point) |
-| `hk` | amber line, no fill | the ONE key arrow or path |
-| `t` | text in ink colour, bold | labels on light backgrounds |
-| `i` | text in light colour, bold | labels on top of `f` shapes |
+| `f` | fill `var(--violet)` | main points, centres, focal points |
+| `s` | fill `var(--lav-2)` | soft shaded areas, lenses, glass blocks |
+| `ok` | stroke `var(--violet)`, width 2 | outline on filled shapes (`"role": "s ok"`) |
+| `lk` | stroke `var(--violet)`, no fill | rays, surfaces, angle arcs, axes |
+| `gk` | stroke `var(--ink-2)` (0.55 alpha), no fill | normals, dashed construction guides |
+| `h` | fill `var(--amber)` | the ONE key point to look at |
+| `hk` | stroke `var(--amber)`, no fill | the ONE key ray or path |
+| `t` | fill `var(--ink)`, bold | text labels on light/lavender backgrounds |
+| `i` | fill `var(--on-violet)`, bold | text labels on top of `f` shapes |
 
-- Set line thickness with `stroke-width="2"` (allowed). Dashes with `stroke-dasharray="5 5"` (allowed).
-- **Angle arcs**: whenever an angle (such as θ, φ, α, β, i or r) is shown or used, draw its curved mark as a `<path d="M x1 y1 A r r 0 0 1 x2 y2" class="lk" stroke-width="1.8"/>` (line, no fill), placed **after** the lines/rays it marks so it stays visible on top.
-- **Highlightable parts (`data-part`)**: give each ray, triangle side, surface, angle arc and matching label a `data-part="name"` attribute so derivation steps can highlight them via `"focus": ["name"]`.
-- **Palette tokens only**: never hard-code hex/rgb colours in SVGs or maths CSS; use only the allowed classes and the tokens from `01-tokens.css`.
-- Text: `font-size` 11–26, `text-anchor="middle"` to centre. Max ~4 words per label.
-- Only **one** amber (`h`/`hk`) highlight per picture: it is where the eye goes.
-- Inside the JSON string, every `"` in the SVG must be written `\"`.
+- **Angle arcs**: whenever an angle (such as θ, φ, α, β, i or r) is shown or used, draw it with `"op": "arc"` (`"role": "lk"`, stroke only, no fill) placed **after** the lines/rays it marks so it stays visible on top.
+- **Highlightable parts (`name`)**: give each ray, triangle side, surface, angle arc and matching label a `"name": "partName"` field so derivation steps highlight them in `var(--hl)` via `"focus": ["partName"]`.
+- **Text bounds**: keep every `text` operation inside `x: 8..252` and `y: 10..176`, with no overlapping labels.
+
+## Three.js (3D): ONLY for the meridional ray
 
-## Example (as it appears inside data.json)
+- Use Three.js (`three` field) on **one card only**: the meridional-ray card (`term: "meridional-ray"`), showing the optical axis (`C₁–C₂`), the flat meridional plane, the in-plane meridional ray, and the non-planar skew ray in 3D.
+- Every other diagram in the app must use the 2D Canvas operation list (`art` / `setup`).
+- The runtime lazy-loads `three.min.js` (`r128`) from `cdnjs.cloudflare.com` only when that card's sheet is opened. If offline, it hides the 3D box and shows the caption and text without crashing.
 
+## Example (as it appears inside `data.json`)
+
 ```json
-"art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sodium ion giving an electron to a chloride ion\"><circle cx=\"80\" cy=\"95\" r=\"50\" class=\"s\"/><text x=\"80\" y=\"104\" text-anchor=\"middle\" font-size=\"24\" class=\"t\">Na⁺</text><circle cx=\"180\" cy=\"95\" r=\"50\" class=\"f\"/><text x=\"180\" y=\"104\" text-anchor=\"middle\" font-size=\"24\" class=\"i\">Cl⁻</text><path d=\"M 112 62 Q 130 22 148 62\" class=\"hk\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\"/><circle cx=\"130\" cy=\"32\" r=\"6\" class=\"h\"/></svg>"
+"art": [
+  { "op": "circle", "cx": 80, "cy": 95, "r": 50, "role": "s", "name": "Na" },
+  { "op": "text", "x": 80, "y": 102, "text": "Na⁺", "size": 20, "align": "center", "role": "t", "name": "Na" },
+  { "op": "circle", "cx": 180, "cy": 95, "r": 50, "role": "f", "name": "Cl" },
+  { "op": "text", "x": 180, "y": 102, "text": "Cl⁻", "size": 20, "align": "center", "role": "i", "name": "Cl" },
+  { "op": "curve", "points": [[112, 62], [130, 22], [148, 62]], "role": "hk", "width": 2.5, "dash": [5, 5], "name": "transfer" },
+  { "op": "circle", "cx": 130, "cy": 32, "r": 6, "role": "h", "name": "electron" }
+]
 ```
--- a/skills/05-checklist.md
+++ b/skills/05-checklist.md
@@ -12,7 +12,7 @@
 ## JSON
 - [ ] Starts with `{` and ends with `}`. Nothing before or after. No code fence.
 - [ ] Every backslash in every string is doubled (`\\frac`, `\\(`, `\\alpha`).
-- [ ] Every `"` inside an SVG string is written `\"`.
+- [ ] No SVG strings remain in `art` or `setup`; every diagram is a JSON list of canvas2d operations.
 - [ ] No trailing commas. No comments.
 
 ## Structure
@@ -84,10 +84,12 @@
 - [ ] Every circuit has a circuit diagram card; every optics experiment has a set-up diagram and a graph.
 - [ ] Keep syllabus topics compact; retain a full model-paper question and rubric in the same sheet even when that exceeds 14 cards.
 
-## SVG
-- [ ] `viewBox="0 0 260 180"`, only allowed classes, no colours, one amber highlight.
-- [ ] Highlightable lines, arcs and labels have `data-part="name"`, and derivation steps name them in `focus`.
+## Canvas2D & Three.js diagrams
+- [ ] Every diagram (`art`, `setup`) is a list of canvas2d operations in `260×180` logical coordinates using only allowed roles (`f, s, ok, lk, gk, h, hk, t, i`).
+- [ ] Highlightable lines, arcs and labels have `"name"`, and every name in a derivation step's `focus` exists in that card's `setup` list.
+- [ ] Angle arcs (`"op": "arc"`) are drawn with stroke and no fill after the lines they mark.
+- [ ] Every definition-recall card has a canvas2d `art` drawing list rendered on its flip back.
+- [ ] Exactly one card uses `three` (the meridional-ray card), lazy-loaded from cdnjs when opened.
 - [ ] Maths and derivation styles use only the colour tokens from `01-tokens.css` (no hard-coded red or rose).
 
 When I run `python build.py`, it prints every problem with its exact location
--- a/skills/07-plain-words-and-glossary.md
+++ b/skills/07-plain-words-and-glossary.md
@@ -9,7 +9,7 @@
 Place an intuition card immediately before the technical introduction. Fields:
 `type = "intuition"`, `term` = glossary entry ID, `title`, `meaning`, `art`
-(required: one SVG drawn according to `03-svg-art.md`), `picture` (one short
-caption line under the SVG saying what to look at), `example` and `bridge`.
+(required: a Canvas2D drawing list following `03-svg-art.md`, or `three` on the meridional-ray card only), `picture` (one short
+caption line under the diagram saying what to look at), `example` and `bridge`.
 All text fields are non-empty plain text. The app renders `art` followed by the
 `picture` caption inside the scrollable reading area.
--- a/skills/08-definition-recall.md
+++ b/skills/08-definition-recall.md
@@ -7,12 +7,12 @@
 
 Enable it with meta.definitionChecks: true. Eligible cards are info cards with
-defines metadata or titles beginning “What is” / “What are”, excluding art cards.
+defines metadata or titles beginning “What is” / “What are” (eligibility does not depend on whether the card has an `art` diagram).
 An info card may retain its existing formula. Do not convert math, graphics,
 intuition or derivation cards into writing checks. Use authored defines metadata
 for new definition cards, and preserve all educational content during porting.
 
 Keep the concept, explanation and existing formula on the front. An unlocked
 definition card flips on a surface tap or explicit Recall button to a back face
-with a short editable answer box. Read flips it back. Use a 3D card-inner with
+with a Canvas2D diagram (`art`) and a short editable answer box. Read flips it back. Use a 3D card-inner with
 front/back faces, backface visibility and inert on the inactive face. Inputs,
--- a/skills/example-minimal.json
+++ b/skills/example-minimal.json
@@ -23,7 +23,13 @@
                 "\\(\\lambda\\) = decay constant",
                 "Unit: s⁻¹"
               ],
-              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Falling curve of remaining nuclei\"><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"155\" class=\"lk\" stroke-width=\"2\"/><line x1=\"30\" y1=\"155\" x2=\"245\" y2=\"155\" class=\"lk\" stroke-width=\"2\"/><path d=\"M 30 30 C 80 110 140 140 240 150\" class=\"hk\" stroke-width=\"3\"/><text x=\"40\" y=\"28\" font-size=\"14\" class=\"t\">N</text><text x=\"238\" y=\"172\" text-anchor=\"end\" font-size=\"14\" class=\"t\">t</text></svg>"
+              "art": [
+                { "op": "line", "x1": 30, "y1": 20, "x2": 30, "y2": 155, "role": "lk", "width": 2, "name": "y-axis" },
+                { "op": "line", "x1": 30, "y1": 155, "x2": 245, "y2": 155, "role": "lk", "width": 2, "name": "x-axis" },
+                { "op": "curve", "points": [[30, 30], [80, 110], [140, 140], [240, 150]], "role": "hk", "width": 3, "name": "decay" },
+                { "op": "text", "x": 40, "y": 28, "text": "N", "size": 14, "role": "t", "name": "y-axis" },
+                { "op": "text", "x": 238, "y": 172, "text": "t", "size": 14, "align": "right", "role": "t", "name": "x-axis" }
+              ]
             },
             {
               "type": "derivation",
```

---

### 3. Short Notes

1. **What changed**:
   - **Canvas2D diagrams (`02-canvas.js` + `data.json`)**: Replaced every SVG string in `art` and `setup` with a declarative JSON list of Canvas 2D operations (`line`, `arrow`, `polyline`, `polygon`, `rect`, `circle`, `ellipse`, `curve`, `arc`, `text`) in a `260 × 180` logical coordinate space. `02-canvas.js` scales by `window.devicePixelRatio`, observes size and theme changes, reads colours from `01-tokens.css` (`--violet`, `--lav-2`, `--amber`, `--hl`, `--ink`, `--ink-2`, `--on-violet`), draws angle arcs with stroke and no fill after the rays they mark, and highlights `focus` parts in `var(--hl)` during derivation steps.
   - **Three.js for the meridional ray**: Added a `three` 3D scene on the meridional-ray card (`term: "meridional-ray"`) showing the optical axis (`C₁–C₂`), the flat meridional plane, the in-plane meridional ray, and the non-planar skew ray in 3D. It lazy-loads only when that sheet is opened and hides the 3D container cleanly if offline so the caption and text still show.
   - **Diagrams on every recall card**: Added a Canvas2D `art` drawing list to all 8 definition-recall `info` cards and updated `03-definition-checks.js` to render the diagram on the flip-back while keeping recall eligibility based only on `type === 'info'` and `defines` / `"What is/are"` title so card IDs and saved progress are preserved.
   - **Textbook consistency (Ghatak, *Optics*)**:
     - Added centers of curvature `C₁` and `C₂` to the thin-lens setup (Fig. 4.5), trial point `Q` on mirror `MN` (Fig. 3.4), both surface steps of Example 4.1 (`v₁ = +180 cm` and `v = +33⅓ cm`), and the full Eq. (4.21) magnification chain `(f₂ + x₂)/(f₁ + x₁)`.
     - Note on textbook typo: On printed page 3.6, Ghatak Eq. (3.6) has a misprint (`n₁ sin θ₁ = n₁ sin θ₂`), whereas Fig. 3.5 on page 3.5 states `n₁ sin θ₁ = n₂ sin θ₂`; the deck uses the physically and mathematically correct `n₁ sin θ₁ = n₂ sin θ₂`.
2. **Pinned Three.js version**:
   - Pinned **`r128`** at `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`. It is a long-term stable release on cdnjs (over two weeks old) that provides the standalone `three.min.js` UMD global `window.THREE` without deprecation warnings.
3. **Anything not done**:
   - Everything requested was completed. Note that Ghatak §4.1 is not present in the uploaded Unit 2 PDF (`unit-2-refraction-reflection-single-spherical-surface.pdf` starts at §4.2), which remains noted in the sheet's `source` field.
