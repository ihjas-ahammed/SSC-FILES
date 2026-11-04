### 1. Diff for `study-match/data/data.json`

```diff
--- a/study-match/data/data.json
+++ b/study-match/data/data.json
@@ -143,53 +143,89 @@
               "term": "geometrical-optics",
               "title": "When light behaves like thin straight pencils",
               "meaning": "Geometrical optics is the model of light as thin directional lines called rays when openings are much larger than the wavelength.",
-              "art": [
-                { "op": "polygon", "points": [[32, 90], [215, 34], [215, 146]], "role": "s", "name": "cone" },
-                { "op": "line", "x1": 115, "y1": 16, "x2": 115, "y2": 58, "role": "lk", "width": 3, "name": "AB" },
-                { "op": "line", "x1": 115, "y1": 122, "x2": 115, "y2": 164, "role": "lk", "width": 3, "name": "AB" },
-                { "op": "line", "x1": 215, "y1": 16, "x2": 215, "y2": 164, "role": "lk", "width": 2, "name": "SS" },
-                { "op": "line", "x1": 32, "y1": 90, "x2": 215, "y2": 34, "role": "lk", "width": 1.8, "name": "cone" },
-                { "op": "line", "x1": 32, "y1": 90, "x2": 215, "y2": 146, "role": "lk", "width": 1.8, "name": "cone" },
-                { "op": "arrow", "x1": 32, "y1": 90, "x2": 215, "y2": 90, "role": "hk", "width": 2.5, "name": "ray" },
-                { "op": "arc", "cx": 32, "cy": 90, "r": 32, "start": -17, "end": 17, "role": "lk", "width": 1.8, "name": "angle" },
-                { "op": "circle", "cx": 32, "cy": 90, "r": 4, "role": "h", "name": "P" },
-                { "op": "text", "x": 20, "y": 94, "text": "P", "size": 12, "role": "t", "name": "P" },
-                { "op": "text", "x": 115, "y": 13, "text": "A", "size": 11, "align": "center", "role": "t", "name": "AB" },
-                { "op": "text", "x": 115, "y": 175, "text": "B", "size": 11, "align": "center", "role": "t", "name": "AB" },
-                { "op": "text", "x": 162, "y": 82, "text": "Ray (λ→0)", "size": 11, "align": "center", "role": "t", "name": "ray" },
-                { "op": "text", "x": 228, "y": 28, "text": "S", "size": 11, "role": "t", "name": "SS" },
-                { "op": "text", "x": 228, "y": 160, "text": "S'", "size": 11, "role": "t", "name": "SS" }
-              ],
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "cone",
+                    "objects": [
+                      { "type": "polygon", "points": [[32, 90], [215, 146], [215, 34]], "role": "s", "name": "cone" },
+                      { "type": "segment", "p1": [115, 164], "p2": [115, 122], "role": "lk", "width": 3, "name": "AB" },
+                      { "type": "segment", "p1": [115, 58], "p2": [115, 16], "role": "lk", "width": 3, "name": "AB" },
+                      { "type": "segment", "p1": [215, 164], "p2": [215, 16], "role": "lk", "width": 2, "name": "SS" },
+                      { "type": "segment", "p1": [32, 90], "p2": [215, 146], "role": "lk", "width": 1.8, "name": "cone" },
+                      { "type": "segment", "p1": [32, 90], "p2": [215, 34], "role": "lk", "width": 1.8, "name": "cone" },
+                      { "type": "arrow", "p1": [32, 90], "p2": [215, 90], "role": "ik", "width": 2.4, "name": "ray" },
+                      { "type": "arc", "center": [32, 90], "r": 32, "start": -17, "end": 17, "role": "lk", "width": 1.8, "name": "angle" },
+                      { "type": "point", "coords": [32, 90], "id": "P", "role": "f", "name": "P" },
+                      { "type": "label", "coords": [20, 90], "text": "P", "size": 12, "role": "t", "name": "P" },
+                      { "type": "label", "coords": [115, 170], "text": "A", "size": 11, "align": "center", "role": "t", "name": "AB" },
+                      { "type": "label", "coords": [115, 10], "text": "B", "size": 11, "align": "center", "role": "t", "name": "AB" },
+                      { "type": "label", "coords": [162, 100], "text": "Ray (λ→0)", "size": 11, "align": "center", "role": "t", "name": "ray" },
+                      { "type": "label", "coords": [228, 154], "text": "S", "size": 11, "role": "t", "name": "SS" },
+                      { "type": "label", "coords": [228, 24], "text": "S'", "size": 11, "role": "t", "name": "SS" }
+                    ]
+                  }
+                ]
+              },
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
-              "art": [
-                { "op": "polygon", "points": [[34, 90], [214, 42], [214, 138]], "role": "s", "name": "patch" },
-                { "op": "line", "x1": 112, "y1": 18, "x2": 112, "y2": 62, "role": "lk", "width": 3, "name": "AB" },
-                { "op": "line", "x1": 112, "y1": 118, "x2": 112, "y2": 162, "role": "lk", "width": 3, "name": "AB" },
-                { "op": "line", "x1": 214, "y1": 18, "x2": 214, "y2": 162, "role": "lk", "width": 2, "name": "SS" },
-                { "op": "line", "x1": 34, "y1": 90, "x2": 214, "y2": 42, "role": "lk", "width": 1.8, "name": "edge1" },
-                { "op": "line", "x1": 34, "y1": 90, "x2": 214, "y2": 138, "role": "lk", "width": 1.8, "name": "edge2" },
-                { "op": "arrow", "x1": 34, "y1": 90, "x2": 210, "y2": 90, "role": "hk", "width": 2.6, "name": "ray" },
-                { "op": "arc", "cx": 34, "cy": 90, "r": 30, "start": -15, "end": 15, "role": "lk", "width": 1.8, "name": "cone" },
-                { "op": "circle", "cx": 34, "cy": 90, "r": 4, "role": "h", "name": "P" },
-                { "op": "text", "x": 20, "y": 94, "text": "P", "size": 12, "role": "t", "name": "P" },
-                { "op": "text", "x": 112, "y": 14, "text": "A", "size": 11, "align": "center", "role": "t", "name": "AB" },
-                { "op": "text", "x": 112, "y": 174, "text": "B", "size": 11, "align": "center", "role": "t", "name": "AB" },
-                { "op": "text", "x": 164, "y": 82, "text": "Ray (λ→0)", "size": 11, "align": "center", "role": "t", "name": "ray" },
-                { "op": "text", "x": 228, "y": 30, "text": "S", "size": 11, "role": "t", "name": "SS" },
-                { "op": "text", "x": 228, "y": 158, "text": "S'", "size": 11, "role": "t", "name": "SS" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "patch",
+                    "objects": [
+                      { "type": "polygon", "points": [[34, 90], [214, 138], [214, 42]], "role": "s", "name": "patch" },
+                      { "type": "segment", "p1": [112, 162], "p2": [112, 118], "role": "lk", "width": 3, "name": "AB" },
+                      { "type": "segment", "p1": [112, 62], "p2": [112, 18], "role": "lk", "width": 3, "name": "AB" },
+                      { "type": "segment", "p1": [214, 162], "p2": [214, 18], "role": "lk", "width": 2, "name": "SS" },
+                      { "type": "segment", "p1": [34, 90], "p2": [214, 138], "role": "lk", "width": 1.8, "name": "edge1" },
+                      { "type": "segment", "p1": [34, 90], "p2": [214, 42], "role": "lk", "width": 1.8, "name": "edge2" },
+                      { "type": "arrow", "p1": [34, 90], "p2": [210, 90], "role": "ik", "width": 2.4, "name": "ray" },
+                      { "type": "arc", "center": [34, 90], "r": 30, "start": -15, "end": 15, "role": "lk", "width": 1.8, "name": "cone" },
+                      { "type": "point", "coords": [34, 90], "id": "P", "role": "f", "name": "P" },
+                      { "type": "label", "coords": [20, 90], "text": "P", "size": 12, "role": "t", "name": "P" },
+                      { "type": "label", "coords": [112, 170], "text": "A", "size": 11, "align": "center", "role": "t", "name": "AB" },
+                      { "type": "label", "coords": [112, 10], "text": "B", "size": 11, "align": "center", "role": "t", "name": "AB" },
+                      { "type": "label", "coords": [164, 100], "text": "Ray (λ→0)", "size": 11, "align": "center", "role": "t", "name": "ray" },
+                      { "type": "label", "coords": [228, 152], "text": "S", "size": 11, "role": "t", "name": "SS" },
+                      { "type": "label", "coords": [228, 26], "text": "S'", "size": 11, "role": "t", "name": "SS" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "intuition",
@@ -199,138 +235,281 @@
               "term": "optical-path-length",
               "title": "Why denser media count as longer paths",
               "meaning": "Optical path length is the vacuum distance that light would travel in the same time it takes to cross a medium.",
-              "art": [
-                { "op": "rect", "x": 65, "y": 24, "w": 80, "h": 52, "rx": 6, "role": "s ok", "name": "glass" },
-                { "op": "arrow", "x1": 24, "y1": 50, "x2": 185, "y2": 50, "role": "lk", "width": 2.2, "name": "d" },
-                { "op": "line", "x1": 65, "y1": 84, "x2": 65, "y2": 142, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "guide" },
-                { "op": "line", "x1": 145, "y1": 84, "x2": 145, "y2": 112, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "guide" },
-                { "op": "arrow", "x1": 65, "y1": 130, "x2": 185, "y2": 130, "role": "hk", "width": 3, "name": "Lop" },
-                { "op": "circle", "cx": 65, "cy": 130, "r": 4, "role": "h", "name": "Lop" },
-                { "op": "circle", "cx": 185, "cy": 130, "r": 3.5, "role": "f", "name": "Lop" },
-                { "op": "text", "x": 105, "y": 43, "text": "Glass (n = 1.5)", "size": 11, "align": "center", "role": "t", "name": "glass" },
-                { "op": "text", "x": 105, "y": 68, "text": "d = 2 cm", "size": 11, "align": "center", "role": "t", "name": "d" },
-                { "op": "text", "x": 125, "y": 118, "text": "L_op = n d = 3 cm", "size": 12, "align": "center", "role": "t", "name": "Lop" },
-                { "op": "text", "x": 125, "y": 154, "text": "Same travel time τ in vacuum", "size": 11, "align": "center", "role": "t", "name": "Lop" }
-              ],
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "glass",
+                    "objects": [
+                      { "type": "polygon", "points": [[65, 156], [145, 156], [145, 104], [65, 104]], "role": "s ok", "name": "glass" },
+                      { "type": "arrow", "p1": [24, 130], "p2": [185, 130], "role": "lk", "width": 2.2, "name": "d" },
+                      { "type": "segment", "p1": [65, 96], "p2": [65, 38], "role": "gk", "dash": 2, "width": 1.5, "name": "guide" },
+                      { "type": "segment", "p1": [145, 96], "p2": [145, 68], "role": "gk", "dash": 2, "width": 1.5, "name": "guide" },
+                      { "type": "arrow", "p1": [65, 50], "p2": [185, 50], "role": "ik", "width": 2.6, "name": "Lop" },
+                      { "type": "point", "coords": [65, 50], "role": "f", "name": "Lop" },
+                      { "type": "point", "coords": [185, 50], "role": "f", "name": "Lop" },
+                      { "type": "label", "coords": [105, 142], "text": "Glass (n = 1.5)", "size": 11, "align": "center", "role": "t", "name": "glass" },
+                      { "type": "label", "coords": [105, 114], "text": "d = 2 cm", "size": 11, "align": "center", "role": "t", "name": "d" },
+                      { "type": "label", "coords": [125, 66], "text": "L_op = n d = 3 cm", "size": 12, "align": "center", "role": "t", "name": "Lop" },
+                      { "type": "label", "coords": [125, 24], "text": "Same travel time τ in vacuum", "size": 11, "align": "center", "role": "t", "name": "Lop" }
+                    ]
+                  }
+                ]
+              },
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
-              "art": [
-                { "op": "curve", "points": [[32, 138], [124, 96], [224, 38]], "role": "lk", "width": 2.4, "name": "C" },
-                { "op": "line", "x1": 114, "y1": 100, "x2": 142, "y2": 85, "role": "hk", "width": 3.5, "name": "ds" },
-                { "op": "circle", "cx": 32, "cy": 138, "r": 3.5, "role": "f", "name": "A" },
-                { "op": "circle", "cx": 128, "cy": 92, "r": 4, "role": "h", "name": "ds" },
-                { "op": "circle", "cx": 224, "cy": 38, "r": 3.5, "role": "f", "name": "B" },
-                { "op": "text", "x": 20, "y": 146, "text": "A", "size": 12, "role": "t", "name": "A" },
-                { "op": "text", "x": 86, "y": 98, "text": "C", "size": 12, "role": "t", "name": "C" },
-                { "op": "text", "x": 128, "y": 78, "text": "ds in n(x,y,z)", "size": 11, "align": "center", "role": "t", "name": "ds" },
-                { "op": "text", "x": 234, "y": 40, "text": "B", "size": 12, "role": "t", "name": "B" },
-                { "op": "text", "x": 130, "y": 152, "text": "L_op = cτ = ∫ n ds", "size": 12, "align": "center", "role": "t", "name": "C" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "C",
+                    "objects": [
+                      { "type": "curve", "points": [[32, 42], [124, 84], [224, 142]], "role": "lk", "width": 2.4, "name": "C" },
+                      { "type": "segment", "p1": [114, 80], "p2": [142, 95], "role": "ik", "width": 3.2, "name": "ds" },
+                      { "type": "point", "coords": [32, 42], "id": "A", "role": "f", "name": "A" },
+                      { "type": "point", "coords": [128, 88], "role": "f", "name": "ds" },
+                      { "type": "point", "coords": [224, 142], "id": "B", "role": "f", "name": "B" },
+                      { "type": "label", "coords": [20, 36], "text": "A", "size": 12, "role": "t", "name": "A" },
+                      { "type": "label", "coords": [86, 82], "text": "C", "size": 12, "role": "t", "name": "C" },
+                      { "type": "label", "coords": [128, 108], "text": "ds in n(x,y,z)", "size": 11, "align": "center", "role": "t", "name": "ds" },
+                      { "type": "label", "coords": [234, 142], "text": "B", "size": 12, "role": "t", "name": "B" },
+                      { "type": "label", "coords": [130, 26], "text": "L_op = cτ = ∫ n ds", "size": 12, "align": "center", "role": "t", "name": "C" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "intuition",
               "term": "fermats-principle",
               "title": "How light chooses its path",
               "meaning": "Fermat's principle says light travels along a path whose travel time is stationary compared with slightly different nearby paths.",
-              "art": [
-                { "op": "curve", "points": [[30, 138], [115, 32], [230, 42]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "ACprimeB" },
-                { "op": "curve", "points": [[30, 138], [148, 148], [230, 42]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "ADB" },
-                { "op": "curve", "points": [[30, 138], [130, 92], [230, 42]], "role": "hk", "width": 2.8, "name": "ACB" },
-                { "op": "arc", "cx": 30, "cy": 138, "r": 34, "start": -42, "end": -6, "role": "lk", "width": 1.8, "name": "ACB" },
-                { "op": "circle", "cx": 30, "cy": 138, "r": 4, "role": "h", "name": "A" },
-                { "op": "circle", "cx": 230, "cy": 42, "r": 4, "role": "f", "name": "B" },
-                { "op": "text", "x": 18, "y": 148, "text": "A", "size": 12, "role": "t", "name": "A" },
-                { "op": "text", "x": 238, "y": 42, "text": "B", "size": 12, "role": "t", "name": "B" },
-                { "op": "text", "x": 112, "y": 52, "text": "Trial path C'", "size": 11, "role": "t", "name": "ACprimeB" },
-                { "op": "text", "x": 128, "y": 88, "text": "Actual ray C", "size": 12, "role": "t", "name": "ACB" },
-                { "op": "text", "x": 162, "y": 142, "text": "δ ∫ n ds = 0", "size": 11, "role": "t", "name": "ACB" }
-              ],
-              "picture": "Look at the solid amber ray ACB between the two dashed trial paths where small shifts do not change travel time.",
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "ACB",
+                    "objects": [
+                      { "type": "curve", "points": [[30, 42], [115, 148], [230, 138]], "role": "gk", "dash": 2, "width": 1.8, "name": "ACprimeB" },
+                      { "type": "curve", "points": [[30, 42], [148, 32], [230, 138]], "role": "gk", "dash": 2, "width": 1.8, "name": "ADB" },
+                      { "type": "curve", "points": [[30, 42], [130, 88], [230, 138]], "role": "lk", "width": 2.8, "name": "ACB" },
+                      { "type": "arc", "center": [30, 42], "r": 34, "start": 6, "end": 42, "role": "lk", "width": 1.8, "name": "ACB" },
+                      { "type": "point", "coords": [30, 42], "id": "A", "role": "f", "name": "A" },
+                      { "type": "point", "coords": [230, 138], "id": "B", "role": "f", "name": "B" },
+                      { "type": "label", "coords": [18, 34], "text": "A", "size": 12, "role": "t", "name": "A" },
+                      { "type": "label", "coords": [238, 138], "text": "B", "size": 12, "role": "t", "name": "B" },
+                      { "type": "label", "coords": [112, 134], "text": "Trial path C'", "size": 11, "role": "t", "name": "ACprimeB" },
+                      { "type": "label", "coords": [128, 96], "text": "Actual ray C", "size": 12, "role": "t", "name": "ACB" },
+                      { "type": "label", "coords": [162, 36], "text": "δ ∫ n ds = 0", "size": 11, "role": "t", "name": "ACB" }
+                    ]
+                  }
+                ]
+              },
+              "picture": "Look at the solid ray ACB between the two dashed trial paths where small shifts do not change travel time.",
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
-              "art": [
-                { "op": "curve", "points": [[32, 136], [108, 36], [226, 40]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "AEB" },
-                { "op": "curve", "points": [[32, 136], [152, 146], [226, 40]], "role": "gk", "width": 1.8, "dash": [5, 4], "name": "ADB" },
-                { "op": "line", "x1": 32, "y1": 136, "x2": 226, "y2": 40, "role": "hk", "width": 2.6, "name": "ACB" },
-                { "op": "circle", "cx": 32, "cy": 136, "r": 4, "role": "h", "name": "A" },
-                { "op": "circle", "cx": 226, "cy": 40, "r": 3.5, "role": "f", "name": "B" },
-                { "op": "text", "x": 18, "y": 146, "text": "A", "size": 12, "role": "t", "name": "A" },
-                { "op": "text", "x": 106, "y": 54, "text": "E", "size": 11, "role": "t", "name": "AEB" },
-                { "op": "text", "x": 128, "y": 82, "text": "C (ray)", "size": 11, "role": "t", "name": "ACB" },
-                { "op": "text", "x": 148, "y": 132, "text": "D", "size": 11, "role": "t", "name": "ADB" },
-                { "op": "text", "x": 236, "y": 42, "text": "B", "size": 12, "role": "t", "name": "B" },
-                { "op": "text", "x": 130, "y": 164, "text": "Stationary path: δ ∫ n ds = 0", "size": 11, "align": "center", "role": "t", "name": "ACB" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "ACB",
+                    "objects": [
+                      { "type": "curve", "points": [[32, 44], [108, 144], [226, 140]], "role": "gk", "dash": 2, "width": 1.8, "name": "AEB" },
+                      { "type": "curve", "points": [[32, 44], [152, 34], [226, 140]], "role": "gk", "dash": 2, "width": 1.8, "name": "ADB" },
+                      { "type": "segment", "p1": [32, 44], "p2": [226, 140], "role": "lk", "width": 2.6, "name": "ACB" },
+                      { "type": "point", "coords": [32, 44], "id": "A", "role": "f", "name": "A" },
+                      { "type": "point", "coords": [226, 140], "id": "B", "role": "f", "name": "B" },
+                      { "type": "label", "coords": [18, 36], "text": "A", "size": 12, "role": "t", "name": "A" },
+                      { "type": "label", "coords": [106, 130], "text": "E", "size": 11, "role": "t", "name": "AEB" },
+                      { "type": "label", "coords": [128, 102], "text": "C (ray)", "size": 11, "role": "t", "name": "ACB" },
+                      { "type": "label", "coords": [148, 52], "text": "D", "size": 11, "role": "t", "name": "ADB" },
+                      { "type": "label", "coords": [236, 140], "text": "B", "size": 12, "role": "t", "name": "B" },
+                      { "type": "label", "coords": [130, 16], "text": "Stationary path: δ ∫ n ds = 0", "size": 11, "align": "center", "role": "t", "name": "ACB" }
+                    ]
+                  }
+                ]
+              }
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
-              "art": [
-                { "op": "line", "x1": 20, "y1": 115, "x2": 240, "y2": 115, "role": "lk", "width": 2.5, "name": "MN" },
-                { "op": "line", "x1": 60, "y1": 40, "x2": 60, "y2": 165, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "ARAprime" },
-                { "op": "line", "x1": 135, "y1": 35, "x2": 135, "y2": 115, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "PS" },
-                { "op": "line", "x1": 60, "y1": 165, "x2": 135, "y2": 115, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "AprimeP" },
-                { "op": "polyline", "points": [[60, 40], [168, 115], [215, 35]], "role": "gk", "width": 1.4, "dash": [3, 3], "name": "AQB" },
-                { "op": "polyline", "points": [[60, 40], [135, 115], [215, 35]], "role": "hk", "width": 2.5, "name": "APB" },
-                { "op": "arc", "cx": 135, "cy": 115, "r": 24, "start": -135, "end": -90, "role": "lk", "width": 1.8, "name": "i" },
-                { "op": "arc", "cx": 135, "cy": 115, "r": 24, "start": -90, "end": -45, "role": "lk", "width": 1.8, "name": "r" },
-                { "op": "circle", "cx": 60, "cy": 40, "r": 3.5, "role": "f", "name": "A" },
-                { "op": "circle", "cx": 60, "cy": 165, "r": 3.5, "role": "f", "name": "Aprime" },
-                { "op": "circle", "cx": 135, "cy": 115, "r": 4, "role": "h", "name": "P" },
-                { "op": "circle", "cx": 168, "cy": 115, "r": 3, "role": "f", "name": "Q" },
-                { "op": "circle", "cx": 215, "cy": 35, "r": 3.5, "role": "f", "name": "B" },
-                { "op": "text", "x": 44, "y": 42, "text": "A", "size": 12, "role": "t", "name": "A" },
-                { "op": "text", "x": 40, "y": 168, "text": "A'", "size": 12, "role": "t", "name": "Aprime" },
-                { "op": "text", "x": 68, "y": 110, "text": "R", "size": 11, "role": "t", "name": "R" },
-                { "op": "text", "x": 135, "y": 132, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
-                { "op": "text", "x": 168, "y": 132, "text": "Q", "size": 11, "align": "center", "role": "t", "name": "Q" },
-                { "op": "text", "x": 135, "y": 28, "text": "S", "size": 12, "align": "center", "role": "t", "name": "PS" },
-                { "op": "text", "x": 224, "y": 38, "text": "B", "size": 12, "role": "t", "name": "B" },
-                { "op": "text", "x": 118, "y": 78, "text": "i", "size": 12, "role": "t", "name": "i" },
-                { "op": "text", "x": 148, "y": 78, "text": "r", "size": 12, "role": "t", "name": "r" },
-                { "op": "text", "x": 26, "y": 132, "text": "M", "size": 11, "role": "t", "name": "MN" },
-                { "op": "text", "x": 236, "y": 132, "text": "N", "size": 11, "align": "right", "role": "t", "name": "MN" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "APB",
+                    "objects": [
+                      { "type": "segment", "p1": [20, 65], "p2": [240, 65], "role": "lk", "width": 2.5, "name": "MN" },
+                      { "type": "segment", "p1": [60, 140], "p2": [60, 15], "role": "gk", "dash": 2, "width": 1.5, "name": "ARAprime" },
+                      { "type": "segment", "p1": [135, 65], "p2": [135, 145], "role": "gk", "dash": 2, "width": 1.5, "name": "PS" },
+                      { "type": "segment", "p1": [60, 15], "p2": [135, 65], "role": "gk", "dash": 2, "width": 1.5, "name": "AprimeP" },
+                      { "type": "polyline", "points": [[60, 140], [168, 65], [215, 145]], "role": "gk", "dash": 2, "width": 1.4, "name": "AQB" },
+                      { "type": "polyline", "points": [[60, 140], [135, 65], [215, 145]], "role": "lk", "width": 2.5, "name": "APB" },
+                      { "type": "arc", "center": [135, 65], "r": 24, "start": 90, "end": 135, "role": "lk", "width": 1.8, "name": "i" },
+                      { "type": "arc", "center": [135, 65], "r": 24, "start": 45, "end": 90, "role": "lk", "width": 1.8, "name": "r" },
+                      { "type": "point", "coords": [60, 140], "id": "A", "role": "f", "name": "A" },
+                      { "type": "point", "coords": [60, 15], "id": "Aprime", "role": "f", "name": "Aprime" },
+                      { "type": "point", "coords": [135, 65], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [168, 65], "id": "Q", "role": "f", "name": "Q" },
+                      { "type": "point", "coords": [215, 145], "id": "B", "role": "f", "name": "B" },
+                      { "type": "label", "coords": [44, 140], "text": "A", "size": 12, "role": "t", "name": "A" },
+                      { "type": "label", "coords": [40, 15], "text": "A'", "size": 12, "role": "t", "name": "Aprime" },
+                      { "type": "label", "coords": [68, 74], "text": "R", "size": 11, "role": "t", "name": "R" },
+                      { "type": "label", "coords": [135, 50], "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [168, 50], "text": "Q", "size": 11, "align": "center", "role": "t", "name": "Q" },
+                      { "type": "label", "coords": [135, 155], "text": "S", "size": 12, "align": "center", "role": "t", "name": "PS" },
+                      { "type": "label", "coords": [224, 145], "text": "B", "size": 12, "role": "t", "name": "B" },
+                      { "type": "label", "coords": [122, 102], "text": "i", "size": 12, "role": "t", "name": "i" },
+                      { "type": "label", "coords": [148, 102], "text": "r", "size": 12, "role": "t", "name": "r" },
+                      { "type": "label", "coords": [26, 50], "text": "M", "size": 11, "role": "t", "name": "MN" },
+                      { "type": "label", "coords": [236, 50], "text": "N", "size": 11, "align": "right", "role": "t", "name": "MN" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "derivation",
               "label": "05 · §3.2 Derivation",
               "title": "Laws of refraction from Fermat's principle",
               "legend": "Interface \\(PQ\\) separates media \\(n_1, n_2\\) with perpendiculars \\(AM = h_1\\), \\(BN = h_2\\), \\(MR = x\\), and \\(RN = L - x\\) (Fig. 3.5).",
-              "setup": [
-                { "op": "line", "x1": 18, "y1": 92, "x2": 242, "y2": 92, "role": "lk", "width": 2, "name": "PQ" },
-                { "op": "line", "x1": 52, "y1": 26, "x2": 52, "y2": 92, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "AM" },
-                { "op": "line", "x1": 52, "y1": 92, "x2": 128, "y2": 92, "role": "lk", "width": 2.2, "name": "MR" },
-                { "op": "line", "x1": 128, "y1": 92, "x2": 208, "y2": 92, "role": "lk", "width": 2.2, "name": "RN" },
-                { "op": "line", "x1": 208, "y1": 92, "x2": 208, "y2": 158, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "BN" },
-                { "op": "line", "x1": 128, "y1": 22, "x2": 128, "y2": 162, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "normal" },
-                { "op": "line", "x1": 52, "y1": 26, "x2": 128, "y2": 92, "role": "hk", "width": 2.5, "name": "AR" },
-                { "op": "line", "x1": 128, "y1": 92, "x2": 208, "y2": 158, "role": "lk", "width": 2.5, "name": "RB" },
-                { "op": "arc", "cx": 52, "cy": 26, "r": 24, "start": 41, "end": 90, "role": "lk", "width": 1.8, "name": "theta1" },
-                { "op": "arc", "cx": 128, "cy": 92, "r": 26, "start": -139, "end": -90, "role": "lk", "width": 1.8, "name": "theta1" },
-                { "op": "arc", "cx": 128, "cy": 92, "r": 26, "start": 40, "end": 90, "role": "lk", "width": 1.8, "name": "theta2" },
-                { "op": "arc", "cx": 208, "cy": 158, "r": 24, "start": -140, "end": -90, "role": "lk", "width": 1.8, "name": "theta2" },
-                { "op": "circle", "cx": 52, "cy": 26, "r": 3.5, "role": "f", "name": "A" },
-                { "op": "circle", "cx": 128, "cy": 92, "r": 4, "role": "h", "name": "R" },
-                { "op": "circle", "cx": 208, "cy": 158, "r": 3.5, "role": "f", "name": "B" },
-                { "op": "text", "x": 38, "y": 28, "text": "A", "size": 12, "role": "t", "name": "A" },
-                { "op": "text", "x": 32, "y": 64, "text": "h₁", "size": 11, "role": "t", "name": "AM" },
-                { "op": "text", "x": 52, "y": 106, "text": "M", "size": 11, "align": "center", "role": "t", "name": "MR" },
-                { "op": "text", "x": 90, "y": 86, "text": "x", "size": 11, "align": "center", "role": "t", "name": "MR" },
-                { "op": "text", "x": 112, "y": 58, "text": "θ₁", "size": 11, "role": "t", "name": "theta1" },
-                { "op": "text", "x": 136, "y": 85, "text": "R", "size": 11, "role": "t", "name": "R" },
-                { "op": "text", "x": 138, "y": 132, "text": "θ₂", "size": 11, "role": "t", "name": "theta2" },
-                { "op": "text", "x": 168, "y": 106, "text": "L-x", "size": 11, "align": "center", "role": "t", "name": "RN" },
-                { "op": "text", "x": 208, "y": 86, "text": "N", "size": 11, "align": "center", "role": "t", "name": "RN" },
-                { "op": "text", "x": 220, "y": 130, "text": "h₂", "size": 11, "role": "t", "name": "BN" },
-                { "op": "text", "x": 220, "y": 162, "text": "B", "size": 12, "role": "t", "name": "B" },
-                { "op": "text", "x": 225, "y": 42, "text": "n₁", "size": 12, "role": "t", "name": "AR" },
-                { "op": "text", "x": 225, "y": 110, "text": "n₂", "size": 12, "role": "t", "name": "RB" }
-              ],
+              "setup": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "Optical path",
+                    "objects": [
+                      { "type": "segment", "p1": [18, 88], "p2": [242, 88], "role": "lk", "width": 2, "name": "PQ" },
+                      { "type": "segment", "p1": [52, 154], "p2": [128, 88], "role": "lk", "width": 2.5, "name": "AR" },
+                      { "type": "segment", "p1": [128, 88], "p2": [208, 22], "role": "lk", "width": 2.5, "name": "RB" },
+                      { "type": "point", "coords": [52, 154], "id": "A", "role": "f", "name": "A" },
+                      { "type": "point", "coords": [128, 88], "id": "R", "role": "f", "name": "R" },
+                      { "type": "point", "coords": [208, 22], "id": "B", "role": "f", "name": "B" },
+                      { "type": "label", "coords": [22, 96], "text": "P", "size": 11, "role": "t", "name": "PQ" },
+                      { "type": "label", "coords": [238, 96], "text": "Q", "size": 11, "align": "right", "role": "t", "name": "PQ" },
+                      { "type": "label", "coords": [38, 154], "text": "A", "size": 12, "role": "t", "name": "A" },
+                      { "type": "label", "coords": [138, 96], "text": "R", "size": 11, "role": "t", "name": "R" },
+                      { "type": "label", "coords": [220, 22], "text": "B", "size": 12, "role": "t", "name": "B" },
+                      { "type": "label", "coords": [225, 138], "text": "n₁", "size": 12, "role": "t", "name": "AR" },
+                      { "type": "label", "coords": [225, 68], "text": "n₂", "size": 12, "role": "t", "name": "RB" }
+                    ]
+                  },
+                  {
+                    "step": 1,
+                    "name": "First medium",
+                    "objects": [
+                      { "type": "polygon", "points": [[52, 154], [52, 88], [128, 88]], "role": "s", "name": "AM" },
+                      { "type": "segment", "p1": [52, 154], "p2": [52, 88], "role": "gk", "dash": 2, "width": 1.6, "name": "AM" },
+                      { "type": "segment", "p1": [52, 88], "p2": [128, 88], "role": "ik", "width": 2.2, "name": "MR" },
+                      { "type": "point", "coords": [52, 88], "id": "M", "role": "f", "name": "MR" },
+                      { "type": "label", "coords": [34, 120], "text": "h₁", "size": 11, "role": "t", "name": "AM" },
+                      { "type": "label", "coords": [52, 74], "text": "M", "size": 11, "align": "center", "role": "t", "name": "MR" },
+                      { "type": "label", "coords": [90, 96], "text": "x", "size": 11, "align": "center", "role": "t", "name": "MR" }
+                    ]
+                  },
+                  {
+                    "step": 2,
+                    "name": "Second medium",
+                    "objects": [
+                      { "type": "polygon", "points": [[128, 88], [208, 88], [208, 22]], "role": "s", "name": "BN" },
+                      { "type": "segment", "p1": [128, 88], "p2": [208, 88], "role": "ik", "width": 2.2, "name": "RN" },
+                      { "type": "segment", "p1": [208, 88], "p2": [208, 22], "role": "gk", "dash": 2, "width": 1.6, "name": "BN" },
+                      { "type": "point", "coords": [208, 88], "id": "N", "role": "f", "name": "RN" },
+                      { "type": "label", "coords": [168, 74], "text": "L-x", "size": 11, "align": "center", "role": "t", "name": "RN" },
+                      { "type": "label", "coords": [208, 98], "text": "N", "size": 11, "align": "center", "role": "t", "name": "RN" },
+                      { "type": "label", "coords": [222, 54], "text": "h₂", "size": 11, "role": "t", "name": "BN" },
+                      { "type": "label", "coords": [130, 12], "text": "MN = L", "size": 11, "align": "center", "role": "t", "name": "RN" }
+                    ]
+                  },
+                  {
+                    "step": 3,
+                    "name": "Stationary path",
+                    "objects": [
+                      { "type": "segment", "p1": [128, 160], "p2": [128, 16], "role": "gk", "dash": 2, "width": 1.5, "name": "normal" }
+                    ]
+                  },
+                  {
+                    "step": 5,
+                    "name": "Incidence angle",
+                    "objects": [
+                      { "type": "arc", "center": [52, 154], "r": 24, "start": -90, "end": -41, "role": "lk", "width": 1.8, "name": "theta1" },
+                      { "type": "arc", "center": [128, 88], "r": 26, "start": 90, "end": 139, "role": "lk", "width": 1.8, "name": "theta1" },
+                      { "type": "label", "coords": [64, 122], "text": "θ₁", "size": 11, "role": "t", "name": "theta1" },
+                      { "type": "label", "coords": [112, 122], "text": "θ₁", "size": 11, "role": "t", "name": "theta1" }
+                    ]
+                  },
+                  {
+                    "step": 6,
+                    "name": "Refraction angle",
+                    "objects": [
+                      { "type": "arc", "center": [128, 88], "r": 26, "start": -90, "end": -40, "role": "lk", "width": 1.8, "name": "theta2" },
+                      { "type": "arc", "center": [208, 22], "r": 24, "start": 90, "end": 140, "role": "lk", "width": 1.8, "name": "theta2" },
+                      { "type": "label", "coords": [138, 52], "text": "θ₂", "size": 11, "role": "t", "name": "theta2" },
+                      { "type": "label", "coords": [194, 54], "text": "θ₂", "size": 11, "role": "t", "name": "theta2" }
+                    ]
+                  }
+                ]
+              },
               "phases": [
                 {
                   "name": "Optical path",
@@ -586,125 +765,244 @@
               "term": "paraxial-approximation",
               "title": "Why only rays close to the axis focus sharply",
               "meaning": "The paraxial approximation keeps only rays that make very small angles with the symmetry axis of a curved surface.",
-              "art": [
-                { "op": "line", "x1": 16, "y1": 105, "x2": 244, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[132, 24], [104, 105], [132, 162]], "role": "lk", "width": 2.4, "name": "SPM" },
-                { "op": "line", "x1": 118, "y1": 56, "x2": 118, "y2": 105, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "h" },
-                { "op": "polyline", "points": [[28, 105], [118, 56], [226, 105]], "role": "hk", "width": 2.6, "name": "OSI" },
-                { "op": "arc", "cx": 28, "cy": 105, "r": 32, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
-                { "op": "arc", "cx": 226, "cy": 105, "r": 30, "start": 180, "end": 204, "role": "lk", "width": 1.8, "name": "alpha2" },
-                { "op": "circle", "cx": 28, "cy": 105, "r": 3.5, "role": "f", "name": "O" },
-                { "op": "circle", "cx": 118, "cy": 56, "r": 4, "role": "h", "name": "S" },
-                { "op": "circle", "cx": 226, "cy": 105, "r": 3.5, "role": "f", "name": "I" },
-                { "op": "text", "x": 28, "y": 122, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
-                { "op": "text", "x": 66, "y": 98, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
-                { "op": "text", "x": 126, "y": 84, "text": "h", "size": 11, "role": "t", "name": "h" },
-                { "op": "text", "x": 118, "y": 122, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
-                { "op": "text", "x": 226, "y": 122, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
-                { "op": "text", "x": 130, "y": 152, "text": "Small α₁: sin α₁ ≈ tan α₁ ≈ h/x", "size": 11, "align": "center", "role": "t", "name": "alpha1" }
-              ],
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "OSI",
+                    "objects": [
+                      { "type": "segment", "p1": [16, 75], "p2": [244, 75], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[132, 156], [104, 75], [132, 18]], "role": "lk", "width": 2.4, "name": "SPM" },
+                      { "type": "segment", "p1": [118, 124], "p2": [118, 75], "role": "gk", "dash": 2, "width": 1.5, "name": "h" },
+                      { "type": "polyline", "points": [[28, 75], [118, 124], [226, 75]], "role": "lk", "width": 2.6, "name": "OSI" },
+                      { "type": "arc", "center": [28, 75], "r": 32, "start": 0, "end": 28, "role": "lk", "width": 1.8, "name": "alpha1" },
+                      { "type": "arc", "center": [226, 75], "r": 30, "start": 156, "end": 180, "role": "lk", "width": 1.8, "name": "alpha2" },
+                      { "type": "point", "coords": [28, 75], "id": "O", "role": "f", "name": "O" },
+                      { "type": "point", "coords": [118, 124], "id": "S", "role": "f", "name": "S" },
+                      { "type": "point", "coords": [226, 75], "id": "I", "role": "f", "name": "I" },
+                      { "type": "label", "coords": [28, 58], "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
+                      { "type": "label", "coords": [66, 84], "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
+                      { "type": "label", "coords": [126, 98], "text": "h", "size": 11, "role": "t", "name": "h" },
+                      { "type": "label", "coords": [118, 58], "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [226, 58], "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
+                      { "type": "label", "coords": [130, 26], "text": "Small α₁: sin α₁ ≈ tan α₁ ≈ h/x", "size": 11, "align": "center", "role": "t", "name": "alpha1" }
+                    ]
+                  }
+                ]
+              },
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
-              "art": [
-                { "op": "line", "x1": 16, "y1": 100, "x2": 244, "y2": 100, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[128, 22], [100, 100], [128, 162]], "role": "lk", "width": 2.4, "name": "SPM" },
-                { "op": "line", "x1": 94, "y1": 34, "x2": 176, "y2": 100, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "normal" },
-                { "op": "polyline", "points": [[28, 100], [114, 52], [226, 100]], "role": "hk", "width": 2.6, "name": "OSI" },
-                { "op": "polyline", "points": [[28, 100], [116, 136], [226, 100]], "role": "lk", "width": 1.8, "name": "OSI2" },
-                { "op": "arc", "cx": 28, "cy": 100, "r": 28, "start": -29, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
-                { "op": "arc", "cx": 114, "cy": 52, "r": 20, "start": -142, "end": -115, "role": "lk", "width": 1.8, "name": "phi1" },
-                { "op": "circle", "cx": 28, "cy": 100, "r": 3.5, "role": "f", "name": "O" },
-                { "op": "circle", "cx": 114, "cy": 52, "r": 4, "role": "h", "name": "S" },
-                { "op": "circle", "cx": 176, "cy": 100, "r": 3.5, "role": "f", "name": "C" },
-                { "op": "circle", "cx": 226, "cy": 100, "r": 3.5, "role": "f", "name": "I" },
-                { "op": "text", "x": 28, "y": 118, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
-                { "op": "text", "x": 64, "y": 93, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
-                { "op": "text", "x": 88, "y": 52, "text": "φ₁", "size": 11, "role": "t", "name": "phi1" },
-                { "op": "text", "x": 114, "y": 40, "text": "S", "size": 11, "align": "center", "role": "t", "name": "S" },
-                { "op": "text", "x": 112, "y": 116, "text": "P", "size": 11, "align": "center", "role": "t", "name": "SPM" },
-                { "op": "text", "x": 176, "y": 118, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
-                { "op": "text", "x": 226, "y": 118, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "OSI",
+                    "objects": [
+                      { "type": "segment", "p1": [16, 80], "p2": [244, 80], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[128, 158], [100, 80], [128, 18]], "role": "lk", "width": 2.4, "name": "SPM" },
+                      { "type": "segment", "p1": [94, 146], "p2": [176, 80], "role": "gk", "dash": 2, "width": 1.5, "name": "normal" },
+                      { "type": "polyline", "points": [[28, 80], [114, 128], [226, 80]], "role": "lk", "width": 2.6, "name": "OSI" },
+                      { "type": "polyline", "points": [[28, 80], [116, 44], [226, 80]], "role": "ik", "width": 1.8, "name": "OSI2" },
+                      { "type": "arc", "center": [28, 80], "r": 28, "start": 0, "end": 29, "role": "lk", "width": 1.8, "name": "alpha1" },
+                      { "type": "arc", "center": [114, 128], "r": 20, "start": 115, "end": 142, "role": "lk", "width": 1.8, "name": "phi1" },
+                      { "type": "point", "coords": [28, 80], "id": "O", "role": "f", "name": "O" },
+                      { "type": "point", "coords": [114, 128], "id": "S", "role": "f", "name": "S" },
+                      { "type": "point", "coords": [176, 80], "id": "C", "role": "f", "name": "C" },
+                      { "type": "point", "coords": [226, 80], "id": "I", "role": "f", "name": "I" },
+                      { "type": "label", "coords": [28, 62], "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
+                      { "type": "label", "coords": [64, 88], "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
+                      { "type": "label", "coords": [88, 130], "text": "φ₁", "size": 11, "role": "t", "name": "phi1" },
+                      { "type": "label", "coords": [114, 142], "text": "S", "size": 11, "align": "center", "role": "t", "name": "S" },
+                      { "type": "label", "coords": [112, 64], "text": "P", "size": 11, "align": "center", "role": "t", "name": "SPM" },
+                      { "type": "label", "coords": [176, 62], "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
+                      { "type": "label", "coords": [226, 62], "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" }
+                    ]
+                  }
+                ]
+              }
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
-              "art": [
-                { "op": "line", "x1": 15, "y1": 95, "x2": 245, "y2": 95, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[145, 25], [110, 95], [145, 165]], "role": "lk", "width": 2.5, "name": "SPM" },
-                { "op": "arrow", "x1": 28, "y1": 60, "x2": 105, "y2": 60, "role": "hk", "width": 2.5, "name": "incident" },
-                { "op": "circle", "cx": 128, "cy": 95, "r": 4, "role": "h", "name": "P" },
-                { "op": "circle", "cx": 205, "cy": 95, "r": 3.5, "role": "f", "name": "C" },
-                { "op": "text", "x": 65, "y": 48, "text": "Incident light", "size": 11, "align": "center", "role": "t", "name": "incident" },
-                { "op": "text", "x": 62, "y": 118, "text": "u < 0 (left)", "size": 12, "align": "center", "role": "t", "name": "left" },
-                { "op": "text", "x": 190, "y": 118, "text": "v, R > 0 (right)", "size": 12, "align": "center", "role": "t", "name": "right" },
-                { "op": "text", "x": 122, "y": 112, "text": "P", "size": 12, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 205, "y": 85, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
-                { "op": "text", "x": 155, "y": 44, "text": "+y upward", "size": 11, "role": "t", "name": "up" },
-                { "op": "text", "x": 155, "y": 154, "text": "-y downward", "size": 11, "role": "t", "name": "down" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "SPM",
+                    "objects": [
+                      { "type": "segment", "p1": [15, 85], "p2": [245, 85], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[145, 155], [110, 85], [145, 15]], "role": "lk", "width": 2.5, "name": "SPM" },
+                      { "type": "arrow", "p1": [28, 120], "p2": [105, 120], "role": "ik", "width": 2.5, "name": "incident" },
+                      { "type": "point", "coords": [128, 85], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [205, 85], "id": "C", "role": "f", "name": "C" },
+                      { "type": "label", "coords": [65, 134], "text": "Incident light", "size": 11, "align": "center", "role": "t", "name": "incident" },
+                      { "type": "label", "coords": [62, 62], "text": "u < 0 (left)", "size": 12, "align": "center", "role": "t", "name": "left" },
+                      { "type": "label", "coords": [190, 62], "text": "v, R > 0 (right)", "size": 12, "align": "center", "role": "t", "name": "right" },
+                      { "type": "label", "coords": [122, 68], "text": "P", "size": 12, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [205, 98], "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
+                      { "type": "label", "coords": [155, 136], "text": "+y upward", "size": 11, "role": "t", "name": "up" },
+                      { "type": "label", "coords": [155, 26], "text": "-y downward", "size": 11, "role": "t", "name": "down" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "derivation",
               "label": "03 · §4.2.2 Derivation",
               "title": "The Gaussian formula for a single spherical surface",
               "legend": "Spherical surface \\(SPM\\) separating \\(n_1, n_2\\) with object \\(O\\) at \\(x = -u\\), image \\(I\\) at \\(y = v\\), center \\(C\\) at \\(r = R\\), height \\(h\\) (Fig. 4.1(a)).",
-              "setup": [
-                { "op": "line", "x1": 14, "y1": 105, "x2": 246, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[128, 24], [96, 105], [128, 162]], "role": "lk", "width": 2.5, "name": "SPM" },
-                { "op": "line", "x1": 114, "y1": 48, "x2": 114, "y2": 105, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "h" },
-                { "op": "line", "x1": 90, "y1": 26, "x2": 176, "y2": 105, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "normal" },
-                { "op": "line", "x1": 26, "y1": 105, "x2": 114, "y2": 48, "role": "hk", "width": 2.5, "name": "OS" },
-                { "op": "line", "x1": 114, "y1": 48, "x2": 232, "y2": 105, "role": "lk", "width": 2.5, "name": "SI" },
-                { "op": "arc", "cx": 26, "cy": 105, "r": 26, "start": -33, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
-                { "op": "arc", "cx": 114, "cy": 48, "r": 22, "start": -137, "end": -108, "role": "lk", "width": 1.8, "name": "phi1" },
-                { "op": "arc", "cx": 114, "cy": 48, "r": 22, "start": 26, "end": 43, "role": "lk", "width": 1.8, "name": "phi2" },
-                { "op": "arc", "cx": 176, "cy": 105, "r": 24, "start": 180, "end": 223, "role": "lk", "width": 1.8, "name": "beta" },
-                { "op": "arc", "cx": 232, "cy": 105, "r": 26, "start": 180, "end": 206, "role": "lk", "width": 1.8, "name": "alpha2" },
-                { "op": "circle", "cx": 26, "cy": 105, "r": 3.5, "role": "f", "name": "O" },
-                { "op": "circle", "cx": 114, "cy": 48, "r": 4, "role": "h", "name": "S" },
-                { "op": "circle", "cx": 176, "cy": 105, "r": 3.5, "role": "f", "name": "C" },
-                { "op": "circle", "cx": 232, "cy": 105, "r": 3.5, "role": "f", "name": "I" },
-                { "op": "text", "x": 24, "y": 122, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
-                { "op": "text", "x": 58, "y": 98, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
-                { "op": "text", "x": 86, "y": 48, "text": "φ₁", "size": 11, "role": "t", "name": "phi1" },
-                { "op": "text", "x": 138, "y": 54, "text": "φ₂", "size": 11, "role": "t", "name": "phi2" },
-                { "op": "text", "x": 114, "y": 36, "text": "S", "size": 12, "align": "center", "role": "t", "name": "S" },
-                { "op": "text", "x": 122, "y": 82, "text": "h", "size": 11, "role": "t", "name": "h" },
-                { "op": "text", "x": 112, "y": 122, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
-                { "op": "text", "x": 144, "y": 98, "text": "β", "size": 11, "role": "t", "name": "beta" },
-                { "op": "text", "x": 176, "y": 122, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
-                { "op": "text", "x": 196, "y": 98, "text": "α₂", "size": 11, "role": "t", "name": "alpha2" },
-                { "op": "text", "x": 232, "y": 122, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
-                { "op": "text", "x": 70, "y": 144, "text": "x = -u", "size": 11, "align": "center", "role": "t", "name": "x" },
-                { "op": "text", "x": 146, "y": 144, "text": "r = R", "size": 11, "align": "center", "role": "t", "name": "r" },
-                { "op": "text", "x": 174, "y": 164, "text": "y = v", "size": 11, "align": "center", "role": "t", "name": "y" },
-                { "op": "text", "x": 46, "y": 36, "text": "n₁", "size": 12, "role": "t", "name": "OS" },
-                { "op": "text", "x": 205, "y": 36, "text": "n₂", "size": 12, "role": "t", "name": "SI" }
-              ],
+              "setup": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "Snell's law",
+                    "objects": [
+                      { "type": "segment", "p1": [14, 75], "p2": [246, 75], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[128, 156], [96, 75], [128, 18]], "role": "lk", "width": 2.5, "name": "SPM" },
+                      { "type": "segment", "p1": [90, 154], "p2": [176, 75], "role": "gk", "dash": 2, "width": 1.5, "name": "normal" },
+                      { "type": "segment", "p1": [26, 75], "p2": [114, 132], "role": "lk", "width": 2.5, "name": "OS" },
+                      { "type": "segment", "p1": [114, 132], "p2": [232, 75], "role": "lk", "width": 2.5, "name": "SI" },
+                      { "type": "arc", "center": [114, 132], "r": 22, "start": 108, "end": 137, "role": "lk", "width": 1.8, "name": "phi1" },
+                      { "type": "arc", "center": [114, 132], "r": 22, "start": -43, "end": -26, "role": "lk", "width": 1.8, "name": "phi2" },
+                      { "type": "point", "coords": [26, 75], "id": "O", "role": "f", "name": "O" },
+                      { "type": "point", "coords": [114, 132], "id": "S", "role": "f", "name": "S" },
+                      { "type": "point", "coords": [112, 75], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [176, 75], "id": "C", "role": "f", "name": "C" },
+                      { "type": "point", "coords": [232, 75], "id": "I", "role": "f", "name": "I" },
+                      { "type": "label", "coords": [24, 58], "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
+                      { "type": "label", "coords": [86, 134], "text": "φ₁", "size": 11, "role": "t", "name": "phi1" },
+                      { "type": "label", "coords": [138, 126], "text": "φ₂", "size": 11, "role": "t", "name": "phi2" },
+                      { "type": "label", "coords": [114, 146], "text": "S", "size": 12, "align": "center", "role": "t", "name": "S" },
+                      { "type": "label", "coords": [108, 58], "text": "P", "size": 11, "align": "center", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [128, 10], "text": "M", "size": 11, "align": "center", "role": "t", "name": "SPM" },
+                      { "type": "label", "coords": [176, 58], "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
+                      { "type": "label", "coords": [232, 58], "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
+                      { "type": "label", "coords": [46, 144], "text": "n₁", "size": 12, "role": "t", "name": "OS" },
+                      { "type": "label", "coords": [205, 144], "text": "n₂", "size": 12, "role": "t", "name": "SI" }
+                    ]
+                  },
+                  {
+                    "step": 2,
+                    "name": "Incident angle",
+                    "objects": [
+                      { "type": "polygon", "points": [[26, 75], [114, 132], [176, 75]], "role": "s", "name": "alpha1" },
+                      { "type": "arc", "center": [26, 75], "r": 26, "start": 0, "end": 33, "role": "lk", "width": 1.8, "name": "alpha1" },
+                      { "type": "arc", "center": [176, 75], "r": 24, "start": 137, "end": 180, "role": "lk", "width": 1.8, "name": "beta" },
+                      { "type": "label", "coords": [58, 84], "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
+                      { "type": "label", "coords": [144, 84], "text": "β", "size": 11, "role": "t", "name": "beta" }
+                    ]
+                  },
+                  {
+                    "step": 3,
+                    "name": "Heights and distances",
+                    "objects": [
+                      { "type": "segment", "p1": [114, 132], "p2": [114, 75], "role": "ik", "dash": 2, "width": 1.8, "name": "h" },
+                      { "type": "label", "coords": [122, 102], "text": "h", "size": 11, "role": "t", "name": "h" },
+                      { "type": "label", "coords": [120, 62], "text": "D", "size": 10, "role": "t", "name": "h" },
+                      { "type": "label", "coords": [70, 36], "text": "x = -u", "size": 11, "align": "center", "role": "t", "name": "x" },
+                      { "type": "label", "coords": [146, 36], "text": "r = R", "size": 11, "align": "center", "role": "t", "name": "r" }
+                    ]
+                  },
+                  {
+                    "step": 4,
+                    "name": "Refracted angle",
+                    "objects": [
+                      { "type": "polygon", "points": [[114, 132], [176, 75], [232, 75]], "role": "s", "name": "alpha2" },
+                      { "type": "arc", "center": [232, 75], "r": 26, "start": 154, "end": 180, "role": "lk", "width": 1.8, "name": "alpha2" },
+                      { "type": "label", "coords": [196, 84], "text": "α₂", "size": 11, "role": "t", "name": "alpha2" }
+                    ]
+                  },
+                  {
+                    "step": 5,
+                    "name": "Image distance",
+                    "objects": [
+                      { "type": "label", "coords": [174, 16], "text": "y = v", "size": 11, "align": "center", "role": "t", "name": "y" }
+                    ]
+                  }
+                ]
+              },
               "phases": [
                 {
                   "name": "Snell's law",
@@ -867,29 +1165,29 @@
                   { "x": 0.75, "r": 0.9 }
                 ],
                 "points": [
-                  { "name": "O", "pos": [-1.85, 0, 0], "role": "h", "label": "O" },
+                  { "name": "O", "pos": [-1.85, 0, 0], "role": "f", "label": "O" },
                   { "name": "C2", "pos": [-1.25, 0, 0], "role": "f", "label": "C₂" },
-                  { "name": "S1", "pos": [-0.75, 0.72, 0], "role": "h", "label": "S₁" },
-                  { "name": "S2", "pos": [0.75, 0.56, 0], "role": "h", "label": "S₂" },
+                  { "name": "S1", "pos": [-0.75, 0.72, 0], "role": "f", "label": "S₁" },
+                  { "name": "S2", "pos": [0.75, 0.56, 0], "role": "f", "label": "S₂" },
                   { "name": "C1", "pos": [1.25, 0, 0], "role": "f", "label": "C₁" },
                   { "name": "I", "pos": [1.85, 0, 0], "role": "f", "label": "I" }
                 ],
                 "meridionalRay": {
                   "points": [[-1.85, 0, 0], [-0.75, 0.72, 0], [0.75, 0.56, 0], [1.85, 0, 0]],
-                  "role": "hk",
+                  "role": "lk",
                   "label": "Meridional ray (in plane)"
                 },
                 "skewRay": {
                   "points": [[-1.75, -0.52, 0.68], [-0.75, 0.36, 0.54], [0.75, 0.22, -0.46], [1.85, -0.58, -0.82]],
                   "role": "gk",
                   "label": "Skew ray (leaves plane)"
                 }
               },
-              "picture": "Look at the amber meridional ray inside the flat axial slice, while the dashed skew ray leaves the slice in 3D.",
+              "picture": "Look at the solid meridional ray inside the flat axial slice, while the dashed skew ray leaves the slice in 3D.",
               "example": "Every ray starting from an object point on the optical axis is automatically a meridional ray.",
               "bridge": "When a system has two spherical surfaces, the line joining their centers C₁ and C₂ defines the optical axis."
             },
             {
               "type": "info",
               "label": "04 · §4.2.2 Definition",
               "title": "What is a meridional ray?",
@@ -900,54 +1198,116 @@
                 "On-axis point: all meridional",
                 "Off-axis tilt: skew"
               ],
-              "art": [
-                { "op": "polygon", "points": [[24, 118], [76, 34], [236, 34], [184, 118]], "role": "s ok", "name": "plane" },
-                { "op": "line", "x1": 34, "y1": 76, "x2": 226, "y2": 76, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "polyline", "points": [[52, 76], [128, 48], [204, 76]], "role": "hk", "width": 2.6, "name": "meridional" },
-                { "op": "arc", "cx": 52, "cy": 76, "r": 26, "start": -20, "end": 0, "role": "lk", "width": 1.8, "name": "meridional" },
-                { "op": "polyline", "points": [[64, 108], [134, 58], [196, 144]], "role": "gk", "width": 1.8, "dash": [4, 4], "name": "skew" },
-                { "op": "circle", "cx": 52, "cy": 76, "r": 4, "role": "h", "name": "C1" },
-                { "op": "circle", "cx": 204, "cy": 76, "r": 3.5, "role": "f", "name": "C2" },
-                { "op": "text", "x": 46, "y": 92, "text": "C₁", "size": 11, "role": "t", "name": "C1" },
-                { "op": "text", "x": 208, "y": 92, "text": "C₂", "size": 11, "role": "t", "name": "C2" },
-                { "op": "text", "x": 134, "y": 26, "text": "Meridional ray (in plane)", "size": 11, "align": "center", "role": "t", "name": "meridional" },
-                { "op": "text", "x": 148, "y": 162, "text": "Skew ray (leaves plane)", "size": 11, "align": "center", "role": "t", "name": "skew" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "plane",
+                    "objects": [
+                      { "type": "polygon", "points": [[24, 62], [76, 146], [236, 146], [184, 62]], "role": "s ok", "name": "plane" },
+                      { "type": "segment", "p1": [34, 104], "p2": [226, 104], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "polyline", "points": [[52, 104], [128, 132], [204, 104]], "role": "ik", "width": 2.6, "name": "meridional" },
+                      { "type": "arc", "center": [52, 104], "r": 26, "start": 0, "end": 20, "role": "lk", "width": 1.8, "name": "meridional" },
+                      { "type": "polyline", "points": [[64, 72], [134, 122], [196, 36]], "role": "gk", "dash": 2, "width": 1.8, "name": "skew" },
+                      { "type": "point", "coords": [52, 104], "id": "C1", "role": "f", "name": "C1" },
+                      { "type": "point", "coords": [204, 104], "id": "C2", "role": "f", "name": "C2" },
+                      { "type": "label", "coords": [46, 88], "text": "C₁", "size": 11, "role": "t", "name": "C1" },
+                      { "type": "label", "coords": [208, 88], "text": "C₂", "size": 11, "role": "t", "name": "C2" },
+                      { "type": "label", "coords": [134, 158], "text": "Meridional ray (in plane)", "size": 11, "align": "center", "role": "t", "name": "meridional" },
+                      { "type": "label", "coords": [148, 18], "text": "Skew ray (leaves plane)", "size": 11, "align": "center", "role": "t", "name": "skew" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "derivation",
               "label": "05 · §4.3 Derivation",
               "title": "Reflection by a single spherical surface",
               "legend": "Spherical mirror \\(SPM\\) with object \\(O\\), center \\(C\\), and image \\(I\\) to the left of pole \\(P\\) (\\(u = -x, v = -y, R = -r\\), Fig. 4.3).",
-              "setup": [
-                { "op": "line", "x1": 14, "y1": 105, "x2": 240, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[195, 24], [222, 105], [195, 162]], "role": "lk", "width": 2.5, "name": "SPM" },
-                { "op": "line", "x1": 204, "y1": 46, "x2": 204, "y2": 105, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "h" },
-                { "op": "line", "x1": 118, "y1": 105, "x2": 204, "y2": 46, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "CS" },
-                { "op": "line", "x1": 28, "y1": 105, "x2": 204, "y2": 46, "role": "hk", "width": 2.5, "name": "OS" },
-                { "op": "line", "x1": 204, "y1": 46, "x2": 154, "y2": 105, "role": "lk", "width": 2.5, "name": "SI" },
-                { "op": "arc", "cx": 28, "cy": 105, "r": 28, "start": -19, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" },
-                { "op": "arc", "cx": 118, "cy": 105, "r": 26, "start": -34, "end": 0, "role": "lk", "width": 1.8, "name": "beta" },
-                { "op": "arc", "cx": 154, "cy": 105, "r": 24, "start": -50, "end": 0, "role": "lk", "width": 1.8, "name": "alpha2" },
-                { "op": "arc", "cx": 204, "cy": 46, "r": 25, "start": 130, "end": 161, "role": "lk", "width": 1.8, "name": "phi" },
-                { "op": "circle", "cx": 28, "cy": 105, "r": 3.5, "role": "f", "name": "O" },
-                { "op": "circle", "cx": 118, "cy": 105, "r": 3.5, "role": "f", "name": "C" },
-                { "op": "circle", "cx": 154, "cy": 105, "r": 3.5, "role": "f", "name": "I" },
-                { "op": "circle", "cx": 204, "cy": 46, "r": 4, "role": "h", "name": "S" },
-                { "op": "text", "x": 28, "y": 122, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
-                { "op": "text", "x": 64, "y": 98, "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
-                { "op": "text", "x": 118, "y": 122, "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
-                { "op": "text", "x": 132, "y": 98, "text": "β", "size": 11, "role": "t", "name": "beta" },
-                { "op": "text", "x": 154, "y": 122, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
-                { "op": "text", "x": 172, "y": 98, "text": "α₂", "size": 11, "role": "t", "name": "alpha2" },
-                { "op": "text", "x": 204, "y": 34, "text": "S", "size": 12, "align": "center", "role": "t", "name": "S" },
-                { "op": "text", "x": 156, "y": 50, "text": "φ₁=φ₂", "size": 11, "role": "t", "name": "phi" },
-                { "op": "text", "x": 214, "y": 82, "text": "h", "size": 11, "role": "t", "name": "h" },
-                { "op": "text", "x": 214, "y": 122, "text": "P", "size": 12, "role": "t", "name": "P" },
-                { "op": "text", "x": 116, "y": 146, "text": "x = -u, r = -R, y = -v", "size": 11, "align": "center", "role": "t", "name": "x" }
-              ],
+              "setup": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "Reflection law",
+                    "objects": [
+                      { "type": "segment", "p1": [14, 75], "p2": [240, 75], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[195, 156], [222, 75], [195, 18]], "role": "lk", "width": 2.5, "name": "SPM" },
+                      { "type": "segment", "p1": [118, 75], "p2": [204, 134], "role": "gk", "dash": 2, "width": 1.5, "name": "CS" },
+                      { "type": "segment", "p1": [28, 75], "p2": [204, 134], "role": "lk", "width": 2.5, "name": "OS" },
+                      { "type": "segment", "p1": [204, 134], "p2": [154, 75], "role": "lk", "width": 2.5, "name": "SI" },
+                      { "type": "arc", "center": [204, 134], "r": 25, "start": 199, "end": 230, "role": "lk", "width": 1.8, "name": "phi" },
+                      { "type": "point", "coords": [28, 75], "id": "O", "role": "f", "name": "O" },
+                      { "type": "point", "coords": [118, 75], "id": "C", "role": "f", "name": "C" },
+                      { "type": "point", "coords": [154, 75], "id": "I", "role": "f", "name": "I" },
+                      { "type": "point", "coords": [204, 134], "id": "S", "role": "f", "name": "S" },
+                      { "type": "point", "coords": [208, 75], "id": "P", "role": "f", "name": "P" },
+                      { "type": "label", "coords": [28, 58], "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
+                      { "type": "label", "coords": [118, 58], "text": "C", "size": 12, "align": "center", "role": "t", "name": "C" },
+                      { "type": "label", "coords": [154, 58], "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
+                      { "type": "label", "coords": [204, 148], "text": "S", "size": 12, "align": "center", "role": "t", "name": "S" },
+                      { "type": "label", "coords": [156, 130], "text": "φ₁=φ₂", "size": 11, "role": "t", "name": "phi" },
+                      { "type": "label", "coords": [216, 58], "text": "P", "size": 12, "role": "t", "name": "P" },
+                      { "type": "label", "coords": [195, 10], "text": "M", "size": 11, "align": "center", "role": "t", "name": "SPM" }
+                    ]
+                  },
+                  {
+                    "step": 1,
+                    "name": "Incident ray",
+                    "objects": [
+                      { "type": "polygon", "points": [[28, 75], [118, 75], [204, 134]], "role": "s", "name": "alpha1" },
+                      { "type": "arc", "center": [28, 75], "r": 28, "start": 0, "end": 19, "role": "lk", "width": 1.8, "name": "alpha1" },
+                      { "type": "arc", "center": [118, 75], "r": 26, "start": 0, "end": 34, "role": "lk", "width": 1.8, "name": "beta" },
+                      { "type": "label", "coords": [64, 84], "text": "α₁", "size": 11, "role": "t", "name": "alpha1" },
+                      { "type": "label", "coords": [132, 84], "text": "β", "size": 11, "role": "t", "name": "beta" }
+                    ]
+                  },
+                  {
+                    "step": 2,
+                    "name": "Height h",
+                    "objects": [
+                      { "type": "segment", "p1": [204, 134], "p2": [204, 75], "role": "ik", "dash": 2, "width": 1.8, "name": "h" },
+                      { "type": "label", "coords": [214, 102], "text": "h", "size": 11, "role": "t", "name": "h" },
+                      { "type": "label", "coords": [196, 62], "text": "D", "size": 10, "role": "t", "name": "h" },
+                      { "type": "label", "coords": [116, 34], "text": "x = -u, r = -R, y = -v", "size": 11, "align": "center", "role": "t", "name": "x" }
+                    ]
+                  },
+                  {
+                    "step": 3,
+                    "name": "Reflected ray",
+                    "objects": [
+                      { "type": "polygon", "points": [[118, 75], [154, 75], [204, 134]], "role": "s", "name": "alpha2" },
+                      { "type": "arc", "center": [154, 75], "r": 24, "start": 0, "end": 50, "role": "lk", "width": 1.8, "name": "alpha2" },
+                      { "type": "label", "coords": [172, 84], "text": "α₂", "size": 11, "role": "t", "name": "alpha2" }
+                    ]
+                  }
+                ]
+              },
               "phases": [
                 {
                   "name": "Reflection law",
@@ -1158,69 +1518,144 @@
               "term": "thin-lens",
               "title": "Two spherical surfaces pressed close together",
               "meaning": "A thin lens is a transparent medium bounded by two spherical surfaces whose thickness is negligible compared to all other distances.",
-              "art": [
-                { "op": "line", "x1": 12, "y1": 96, "x2": 248, "y2": 96, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[118, 26], [104, 96], [118, 164], [132, 96], [118, 26]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "polyline", "points": [[26, 96], [118, 46], [218, 96]], "role": "hk", "width": 2.6, "name": "ray" },
-                { "op": "arc", "cx": 26, "cy": 96, "r": 28, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "u" },
-                { "op": "arc", "cx": 218, "cy": 96, "r": 26, "start": 180, "end": 206, "role": "lk", "width": 1.8, "name": "v" },
-                { "op": "circle", "cx": 26, "cy": 96, "r": 3.5, "role": "f", "name": "O" },
-                { "op": "circle", "cx": 118, "cy": 96, "r": 4, "role": "h", "name": "P" },
-                { "op": "circle", "cx": 218, "cy": 96, "r": 3.5, "role": "f", "name": "I" },
-                { "op": "text", "x": 26, "y": 114, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
-                { "op": "text", "x": 118, "y": 20, "text": "t ≪ |u|, |v|", "size": 11, "align": "center", "role": "t", "name": "lens" },
-                { "op": "text", "x": 112, "y": 114, "text": "P", "size": 12, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 218, "y": 114, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
-                { "op": "text", "x": 72, "y": 138, "text": "u (from P)", "size": 11, "align": "center", "role": "t", "name": "u" },
-                { "op": "text", "x": 168, "y": 138, "text": "v (from P)", "size": 11, "align": "center", "role": "t", "name": "v" }
-              ],
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "lens",
+                    "objects": [
+                      { "type": "segment", "p1": [12, 84], "p2": [248, 84], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[118, 154], [104, 84], [118, 16], [132, 84], [118, 154]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "polyline", "points": [[26, 84], [118, 134], [218, 84]], "role": "lk", "width": 2.6, "name": "ray" },
+                      { "type": "arc", "center": [26, 84], "r": 28, "start": 0, "end": 28, "role": "lk", "width": 1.8, "name": "u" },
+                      { "type": "arc", "center": [218, 84], "r": 26, "start": 154, "end": 180, "role": "lk", "width": 1.8, "name": "v" },
+                      { "type": "point", "coords": [26, 84], "id": "O", "role": "f", "name": "O" },
+                      { "type": "point", "coords": [118, 84], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [218, 84], "id": "I", "role": "f", "name": "I" },
+                      { "type": "label", "coords": [26, 66], "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
+                      { "type": "label", "coords": [118, 162], "text": "t ≪ |u|, |v|", "size": 11, "align": "center", "role": "t", "name": "lens" },
+                      { "type": "label", "coords": [112, 66], "text": "P", "size": 12, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [218, 66], "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
+                      { "type": "label", "coords": [72, 42], "text": "u (from P)", "size": 11, "align": "center", "role": "t", "name": "u" },
+                      { "type": "label", "coords": [168, 42], "text": "v (from P)", "size": 11, "align": "center", "role": "t", "name": "v" }
+                    ]
+                  }
+                ]
+              },
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
-              "art": [
-                { "op": "line", "x1": 16, "y1": 94, "x2": 244, "y2": 94, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[130, 22], [112, 94], [130, 162], [148, 94], [130, 22]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "arrow", "x1": 120, "y1": 94, "x2": 140, "y2": 94, "role": "hk", "width": 2.4, "name": "t" },
-                { "op": "circle", "cx": 54, "cy": 94, "r": 3.5, "role": "f", "name": "C2" },
-                { "op": "circle", "cx": 130, "cy": 94, "r": 4, "role": "h", "name": "P" },
-                { "op": "circle", "cx": 206, "cy": 94, "r": 3.5, "role": "f", "name": "C1" },
-                { "op": "text", "x": 54, "y": 114, "text": "C₂ (R₂<0)", "size": 11, "align": "center", "role": "t", "name": "C2" },
-                { "op": "text", "x": 130, "y": 18, "text": "n₂ (thin: t ≪ |R₁|, |R₂|)", "size": 11, "align": "center", "role": "t", "name": "lens" },
-                { "op": "text", "x": 130, "y": 116, "text": "P (t)", "size": 11, "align": "center", "role": "t", "name": "P" },
-                { "op": "text", "x": 206, "y": 114, "text": "C₁ (R₁>0)", "size": 11, "align": "center", "role": "t", "name": "C1" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "lens",
+                    "objects": [
+                      { "type": "segment", "p1": [16, 86], "p2": [244, 86], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[130, 158], [112, 86], [130, 18], [148, 86], [130, 158]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "arrow", "p1": [120, 86], "p2": [140, 86], "role": "ik", "width": 2.2, "name": "t" },
+                      { "type": "point", "coords": [54, 86], "id": "C2", "role": "f", "name": "C2" },
+                      { "type": "point", "coords": [130, 86], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [206, 86], "id": "C1", "role": "f", "name": "C1" },
+                      { "type": "label", "coords": [54, 66], "text": "C₂ (R₂<0)", "size": 11, "align": "center", "role": "t", "name": "C2" },
+                      { "type": "label", "coords": [130, 164], "text": "n₂ (thin: t ≪ |R₁|, |R₂|)", "size": 11, "align": "center", "role": "t", "name": "lens" },
+                      { "type": "label", "coords": [130, 64], "text": "P (t)", "size": 11, "align": "center", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [206, 66], "text": "C₁ (R₁>0)", "size": 11, "align": "center", "role": "t", "name": "C1" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "derivation",
               "label": "02 · §4.4 Derivation",
               "title": "The thin lens and Lensmaker's formula",
               "legend": "Lens of index \\(n_2\\) in medium \\(n_1\\) with radii \\(R_1, R_2\\), intermediate image \\(Q\\) at \\(v'\\), final image \\(I\\) at \\(v\\), and \\(n = n_2 / n_1\\) (Fig. 4.5).",
-              "setup": [
-                { "op": "line", "x1": 12, "y1": 98, "x2": 248, "y2": 98, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[110, 28], [92, 98], [110, 164]], "role": "lk", "width": 2, "name": "surf1" },
-                { "op": "curve", "points": [[118, 28], [136, 98], [118, 164]], "role": "lk", "width": 2, "name": "surf2" },
-                { "op": "line", "x1": 118, "y1": 50, "x2": 238, "y2": 98, "role": "gk", "width": 1.5, "dash": [4, 4], "name": "rayQ" },
-                { "op": "line", "x1": 24, "y1": 98, "x2": 110, "y2": 50, "role": "hk", "width": 2.5, "name": "rayO" },
-                { "op": "line", "x1": 110, "y1": 50, "x2": 188, "y2": 98, "role": "lk", "width": 2.5, "name": "rayI" },
-                { "op": "arc", "cx": 24, "cy": 98, "r": 25, "start": -29, "end": 0, "role": "lk", "width": 1.8, "name": "rayO" },
-                { "op": "arc", "cx": 188, "cy": 98, "r": 22, "start": 180, "end": 211, "role": "lk", "width": 1.8, "name": "rayI" },
-                { "op": "circle", "cx": 24, "cy": 98, "r": 3.5, "role": "f", "name": "O" },
-                { "op": "circle", "cx": 64, "cy": 98, "r": 3, "role": "f", "name": "C2" },
-                { "op": "circle", "cx": 114, "cy": 98, "r": 3.5, "role": "f", "name": "P" },
-                { "op": "circle", "cx": 156, "cy": 98, "r": 3, "role": "f", "name": "C1" },
-                { "op": "circle", "cx": 188, "cy": 98, "r": 4, "role": "h", "name": "I" },
-                { "op": "circle", "cx": 238, "cy": 98, "r": 3.5, "role": "f", "name": "Q" },
-                { "op": "text", "x": 24, "y": 115, "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
-                { "op": "text", "x": 64, "y": 114, "text": "C₂", "size": 11, "align": "center", "role": "t", "name": "R1R2" },
-                { "op": "text", "x": 68, "y": 134, "text": "u < 0", "size": 11, "align": "center", "role": "t", "name": "u" },
-                { "op": "text", "x": 114, "y": 22, "text": "n₂", "size": 11, "align": "center", "role": "t", "name": "n2" },
-                { "op": "text", "x": 60, "y": 36, "text": "n₁", "size": 12, "role": "t", "name": "n1" },
-                { "op": "text", "x": 175, "y": 36, "text": "n₁", "size": 12, "role": "t", "name": "n1" },
-                { "op": "text", "x": 114, "y": 115, "text": "P", "size": 12, "align": "center", "role": "t", "name": "P" },
-                { "op": "text", "x": 156, "y": 114, "text": "C₁", "size": 11, "align": "center", "role": "t", "name": "R1R2" },
-                { "op": "text", "x": 152, "y": 134, "text": "v", "size": 11, "align": "center", "role": "t", "name": "v" },
-                { "op": "text", "x": 188, "y": 115, "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
-                { "op": "text", "x": 234, "y": 115, "text": "Q (v')", "size": 11, "align": "center", "role": "t", "name": "vprime" },
-                { "op": "text", "x": 130, "y": 156, "text": "R₁ > 0, R₂ < 0", "size": 11, "align": "center", "role": "t", "name": "R1R2" }
-              ],
+              "setup": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "First surface",
+                    "objects": [
+                      { "type": "segment", "p1": [12, 82], "p2": [248, 82], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[110, 152], [92, 82], [110, 16]], "role": "lk", "width": 2.2, "name": "surf1" },
+                      { "type": "segment", "p1": [24, 82], "p2": [110, 130], "role": "lk", "width": 2.5, "name": "rayO" },
+                      { "type": "segment", "p1": [110, 130], "p2": [238, 82], "role": "gk", "dash": 2, "width": 1.6, "name": "rayQ" },
+                      { "type": "arc", "center": [24, 82], "r": 25, "start": 0, "end": 29, "role": "lk", "width": 1.8, "name": "rayO" },
+                      { "type": "point", "coords": [24, 82], "id": "O", "role": "f", "name": "O" },
+                      { "type": "point", "coords": [114, 82], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [156, 82], "id": "C1", "role": "f", "name": "R1R2" },
+                      { "type": "point", "coords": [238, 82], "id": "Q", "role": "f", "name": "vprime" },
+                      { "type": "label", "coords": [24, 65], "text": "O", "size": 12, "align": "center", "role": "t", "name": "O" },
+                      { "type": "label", "coords": [68, 46], "text": "u < 0", "size": 11, "align": "center", "role": "t", "name": "u" },
+                      { "type": "label", "coords": [60, 144], "text": "n₁", "size": 12, "role": "t", "name": "n1" },
+                      { "type": "label", "coords": [114, 158], "text": "n₂", "size": 11, "align": "center", "role": "t", "name": "n2" },
+                      { "type": "label", "coords": [114, 65], "text": "P (t)", "size": 11, "align": "center", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [156, 66], "text": "C₁", "size": 11, "align": "center", "role": "t", "name": "R1R2" },
+                      { "type": "label", "coords": [232, 65], "text": "Q (v')", "size": 11, "align": "center", "role": "t", "name": "vprime" }
+                    ]
+                  },
+                  {
+                    "step": 1,
+                    "name": "Second surface",
+                    "objects": [
+                      { "type": "curve", "points": [[118, 152], [136, 82], [118, 16]], "role": "lk", "width": 2.2, "name": "surf2" },
+                      { "type": "segment", "p1": [110, 130], "p2": [188, 82], "role": "ik", "width": 2.5, "name": "rayI" },
+                      { "type": "arc", "center": [188, 82], "r": 22, "start": 149, "end": 180, "role": "lk", "width": 1.8, "name": "rayI" },
+                      { "type": "point", "coords": [64, 82], "id": "C2", "role": "f", "name": "R1R2" },
+                      { "type": "point", "coords": [188, 82], "id": "I", "role": "f", "name": "I" },
+                      { "type": "label", "coords": [64, 66], "text": "C₂", "size": 11, "align": "center", "role": "t", "name": "R1R2" },
+                      { "type": "label", "coords": [152, 46], "text": "v", "size": 11, "align": "center", "role": "t", "name": "v" },
+                      { "type": "label", "coords": [188, 65], "text": "I", "size": 12, "align": "center", "role": "t", "name": "I" },
+                      { "type": "label", "coords": [175, 144], "text": "n₁", "size": 12, "role": "t", "name": "n1" }
+                    ]
+                  },
+                  {
+                    "step": 2,
+                    "name": "Combine surfaces",
+                    "objects": [
+                      { "type": "label", "coords": [130, 24], "text": "R₁ > 0, R₂ < 0", "size": 11, "align": "center", "role": "t", "name": "R1R2" }
+                    ]
+                  }
+                ]
+              },
               "phases": [
                 {
                   "name": "First surface",
@@ -1381,105 +1816,158 @@
                 "n₂ < n₁: biconvex f < 0",
                 "n₂ < n₁: biconcave f > 0"
               ],
-              "art": [
-                { "op": "line", "x1": 14, "y1": 50, "x2": 120, "y2": 50, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "axis1" },
-                { "op": "curve", "points": [[62, 18], [50, 50], [62, 82], [74, 50], [62, 18]], "closed": true, "role": "s ok", "name": "conv" },
-                { "op": "polyline", "points": [[18, 32], [62, 32], [108, 50]], "role": "lk", "width": 2, "name": "conv" },
-                { "op": "polyline", "points": [[18, 68], [62, 68], [108, 50]], "role": "lk", "width": 2, "name": "conv" },
-                { "op": "circle", "cx": 108, "cy": 50, "r": 3.5, "role": "f", "name": "conv" },
-                { "op": "text", "x": 62, "y": 100, "text": "n₂ > n₁: converges", "size": 11, "align": "center", "role": "t", "name": "conv" },
-                { "op": "line", "x1": 140, "y1": 50, "x2": 246, "y2": 50, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "axis2" },
-                { "op": "curve", "points": [[192, 18], [180, 50], [192, 82], [204, 50], [192, 18]], "closed": true, "role": "s ok", "name": "div" },
-                { "op": "polyline", "points": [[148, 32], [192, 32], [238, 16]], "role": "hk", "width": 2.5, "name": "div" },
-                { "op": "polyline", "points": [[148, 68], [192, 68], [238, 84]], "role": "lk", "width": 2, "name": "div" },
-                { "op": "line", "x1": 156, "y1": 50, "x2": 192, "y2": 32, "role": "gk", "width": 1.5, "dash": [3, 3], "name": "div" },
-                { "op": "circle", "cx": 156, "cy": 50, "r": 4, "role": "h", "name": "div" },
-                { "op": "text", "x": 192, "y": 100, "text": "n₂ < n₁: diverges", "size": 11, "align": "center", "role": "t", "name": "div" },
-                { "op": "text", "x": 130, "y": 148, "text": "1/f = (n₂/n₁ - 1)(1/R₁ - 1/R₂)", "size": 12, "align": "center", "role": "t", "name": "formula" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "conv",
+                    "objects": [
+                      { "type": "segment", "p1": [14, 130], "p2": [120, 130], "role": "gk", "dash": 2, "width": 1.5, "name": "axis1" },
+                      { "type": "curve", "points": [[62, 162], [50, 130], [62, 98], [74, 130], [62, 162]], "closed": true, "role": "s ok", "name": "conv" },
+                      { "type": "polyline", "points": [[18, 148], [62, 148], [108, 130]], "role": "lk", "width": 2, "name": "conv" },
+                      { "type": "polyline", "points": [[18, 112], [62, 112], [108, 130]], "role": "lk", "width": 2, "name": "conv" },
+                      { "type": "point", "coords": [108, 130], "role": "f", "name": "conv" },
+                      { "type": "label", "coords": [62, 78], "text": "n₂ > n₁: converges", "size": 11, "align": "center", "role": "t", "name": "conv" },
+                      { "type": "segment", "p1": [140, 130], "p2": [246, 130], "role": "gk", "dash": 2, "width": 1.5, "name": "axis2" },
+                      { "type": "curve", "points": [[192, 162], [180, 130], [192, 98], [204, 130], [192, 162]], "closed": true, "role": "s ok", "name": "div" },
+                      { "type": "polyline", "points": [[148, 148], [192, 148], [238, 164]], "role": "ik", "width": 2.4, "name": "div" },
+                      { "type": "polyline", "points": [[148, 112], [192, 112], [238, 96]], "role": "lk", "width": 2, "name": "div" },
+                      { "type": "segment", "p1": [156, 130], "p2": [192, 148], "role": "gk", "dash": 2, "width": 1.5, "name": "div" },
+                      { "type": "point", "coords": [156, 130], "role": "f", "name": "div" },
+                      { "type": "label", "coords": [192, 78], "text": "n₂ < n₁: diverges", "size": 11, "align": "center", "role": "t", "name": "div" },
+                      { "type": "label", "coords": [130, 32], "text": "1/f = (n₂/n₁ - 1)(1/R₁ - 1/R₂)", "size": 12, "align": "center", "role": "t", "name": "formula" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "intuition",
               "term": "principal-focus",
               "title": "The two special focal points of any lens",
               "meaning": "The first principal focus F₁ turns rays from a point into parallel rays, while the second principal focus F₂ collects incoming parallel rays to a point.",
-              "art": [
-                { "op": "line", "x1": 12, "y1": 90, "x2": 248, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[130, 20], [116, 90], [130, 160], [144, 90], [130, 20]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "polyline", "points": [[56, 90], [130, 136], [238, 136]], "role": "lk", "width": 2, "name": "ray1" },
-                { "op": "polyline", "points": [[22, 44], [130, 44], [204, 90]], "role": "hk", "width": 2.6, "name": "ray2" },
-                { "op": "arc", "cx": 56, "cy": 90, "r": 20, "start": 0, "end": 32, "role": "lk", "width": 1.8, "name": "F1" },
-                { "op": "arc", "cx": 204, "cy": 90, "r": 20, "start": 180, "end": 212, "role": "lk", "width": 1.8, "name": "F2" },
-                { "op": "circle", "cx": 56, "cy": 90, "r": 3.5, "role": "f", "name": "F1" },
-                { "op": "circle", "cx": 130, "cy": 90, "r": 3.5, "role": "f", "name": "P" },
-                { "op": "circle", "cx": 204, "cy": 90, "r": 4, "role": "h", "name": "F2" },
-                { "op": "text", "x": 56, "y": 78, "text": "F₁", "size": 12, "align": "center", "role": "t", "name": "F1" },
-                { "op": "text", "x": 124, "y": 106, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 204, "y": 108, "text": "F₂", "size": 12, "align": "center", "role": "t", "name": "F2" },
-                { "op": "text", "x": 80, "y": 36, "text": "Ray 2 (parallel → F₂)", "size": 11, "align": "center", "role": "t", "name": "ray2" },
-                { "op": "text", "x": 184, "y": 152, "text": "Ray 1 (F₁ → parallel)", "size": 11, "align": "center", "role": "t", "name": "ray1" },
-                { "op": "text", "x": 92, "y": 122, "text": "f₁ < 0", "size": 11, "align": "center", "role": "t", "name": "F1" },
-                { "op": "text", "x": 168, "y": 78, "text": "f₂ > 0", "size": 11, "align": "center", "role": "t", "name": "F2" }
-              ],
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "foci",
+                    "objects": [
+                      { "type": "segment", "p1": [12, 90], "p2": [248, 90], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[130, 160], [116, 90], [130, 20], [144, 90], [130, 160]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "polyline", "points": [[56, 90], [130, 44], [238, 44]], "role": "lk", "width": 2, "name": "ray1" },
+                      { "type": "polyline", "points": [[22, 136], [130, 136], [204, 90]], "role": "ik", "width": 2.5, "name": "ray2" },
+                      { "type": "arc", "center": [56, 90], "r": 20, "start": -32, "end": 0, "role": "lk", "width": 1.8, "name": "F1" },
+                      { "type": "arc", "center": [204, 90], "r": 20, "start": 148, "end": 180, "role": "lk", "width": 1.8, "name": "F2" },
+                      { "type": "point", "coords": [56, 90], "id": "F1", "role": "f", "name": "F1" },
+                      { "type": "point", "coords": [130, 90], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [204, 90], "id": "F2", "role": "f", "name": "F2" },
+                      { "type": "label", "coords": [56, 104], "text": "F₁", "size": 12, "align": "center", "role": "t", "name": "F1" },
+                      { "type": "label", "coords": [124, 74], "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [204, 72], "text": "F₂", "size": 12, "align": "center", "role": "t", "name": "F2" },
+                      { "type": "label", "coords": [80, 146], "text": "Ray 2 (parallel → F₂)", "size": 11, "align": "center", "role": "t", "name": "ray2" },
+                      { "type": "label", "coords": [184, 28], "text": "Ray 1 (F₁ → parallel)", "size": 11, "align": "center", "role": "t", "name": "ray1" },
+                      { "type": "label", "coords": [92, 58], "text": "f₁ < 0", "size": 11, "align": "center", "role": "t", "name": "F1" },
+                      { "type": "label", "coords": [168, 104], "text": "f₂ > 0", "size": 11, "align": "center", "role": "t", "name": "F2" }
+                    ]
+                  }
+                ]
+              },
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
-              "art": [
-                { "op": "line", "x1": 14, "y1": 90, "x2": 246, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[130, 22], [116, 90], [130, 158], [144, 90], [130, 22]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "polyline", "points": [[56, 90], [130, 134], [236, 134]], "role": "lk", "width": 2, "name": "ray1" },
-                { "op": "polyline", "points": [[24, 46], [130, 46], [204, 90]], "role": "hk", "width": 2.5, "name": "ray2" },
-                { "op": "arc", "cx": 56, "cy": 90, "r": 20, "start": 0, "end": 31, "role": "lk", "width": 1.8, "name": "F1" },
-                { "op": "arc", "cx": 204, "cy": 90, "r": 20, "start": 180, "end": 211, "role": "lk", "width": 1.8, "name": "F2" },
-                { "op": "circle", "cx": 56, "cy": 90, "r": 3.5, "role": "f", "name": "F1" },
-                { "op": "circle", "cx": 130, "cy": 90, "r": 3.5, "role": "f", "name": "P" },
-                { "op": "circle", "cx": 204, "cy": 90, "r": 4, "role": "h", "name": "F2" },
-                { "op": "text", "x": 56, "y": 76, "text": "F₁ (u = f₁)", "size": 11, "align": "center", "role": "t", "name": "F1" },
-                { "op": "text", "x": 124, "y": 106, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 204, "y": 110, "text": "F₂ (v = f₂)", "size": 11, "align": "center", "role": "t", "name": "F2" },
-                { "op": "text", "x": 76, "y": 38, "text": "u = -∞ → F₂", "size": 11, "align": "center", "role": "t", "name": "ray2" },
-                { "op": "text", "x": 186, "y": 152, "text": "F₁ → v = ∞", "size": 11, "align": "center", "role": "t", "name": "ray1" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "foci",
+                    "objects": [
+                      { "type": "segment", "p1": [14, 90], "p2": [246, 90], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[130, 158], [116, 90], [130, 22], [144, 90], [130, 158]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "polyline", "points": [[56, 90], [130, 46], [236, 46]], "role": "lk", "width": 2, "name": "ray1" },
+                      { "type": "polyline", "points": [[24, 134], [130, 134], [204, 90]], "role": "ik", "width": 2.5, "name": "ray2" },
+                      { "type": "arc", "center": [56, 90], "r": 20, "start": -31, "end": 0, "role": "lk", "width": 1.8, "name": "F1" },
+                      { "type": "arc", "center": [204, 90], "r": 20, "start": 149, "end": 180, "role": "lk", "width": 1.8, "name": "F2" },
+                      { "type": "point", "coords": [56, 90], "id": "F1", "role": "f", "name": "F1" },
+                      { "type": "point", "coords": [130, 90], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [204, 90], "id": "F2", "role": "f", "name": "F2" },
+                      { "type": "label", "coords": [56, 106], "text": "F₁ (u = f₁)", "size": 11, "align": "center", "role": "t", "name": "F1" },
+                      { "type": "label", "coords": [124, 74], "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [204, 70], "text": "F₂ (v = f₂)", "size": 11, "align": "center", "role": "t", "name": "F2" },
+                      { "type": "label", "coords": [76, 144], "text": "u = -∞ → F₂", "size": 11, "align": "center", "role": "t", "name": "ray2" },
+                      { "type": "label", "coords": [186, 28], "text": "F₁ → v = ∞", "size": 11, "align": "center", "role": "t", "name": "ray1" }
+                    ]
+                  }
+                ]
+              }
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
-              "art": [
-                { "op": "line", "x1": 10, "y1": 92, "x2": 250, "y2": 92, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[125, 22], [112, 92], [125, 162], [138, 92], [125, 22]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "line", "x1": 36, "y1": 92, "x2": 36, "y2": 44, "role": "lk", "width": 2.5, "name": "OA" },
-                { "op": "line", "x1": 214, "y1": 92, "x2": 214, "y2": 140, "role": "lk", "width": 2.5, "name": "IB" },
-                { "op": "polyline", "points": [[36, 44], [125, 44], [214, 140]], "role": "lk", "width": 1.8, "name": "ray2" },
-                { "op": "polyline", "points": [[36, 44], [76, 92], [125, 140], [214, 140]], "role": "lk", "width": 1.8, "name": "ray1" },
-                { "op": "line", "x1": 36, "y1": 44, "x2": 214, "y2": 140, "role": "hk", "width": 2.5, "name": "ray3" },
-                { "op": "arc", "cx": 125, "cy": 92, "r": 25, "start": 180, "end": 208, "role": "lk", "width": 1.8, "name": "ray3" },
-                { "op": "arc", "cx": 125, "cy": 92, "r": 25, "start": 0, "end": 28, "role": "lk", "width": 1.8, "name": "ray3" },
-                { "op": "circle", "cx": 76, "cy": 92, "r": 3.5, "role": "f", "name": "F1" },
-                { "op": "circle", "cx": 125, "cy": 92, "r": 4, "role": "h", "name": "P" },
-                { "op": "circle", "cx": 174, "cy": 92, "r": 3.5, "role": "f", "name": "F2" },
-                { "op": "text", "x": 36, "y": 36, "text": "A", "size": 11, "align": "center", "role": "t", "name": "OA" },
-                { "op": "text", "x": 36, "y": 108, "text": "O", "size": 11, "align": "center", "role": "t", "name": "OA" },
-                { "op": "text", "x": 76, "y": 108, "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
-                { "op": "text", "x": 120, "y": 108, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 174, "y": 84, "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
-                { "op": "text", "x": 214, "y": 84, "text": "I", "size": 11, "align": "center", "role": "t", "name": "IB" },
-                { "op": "text", "x": 214, "y": 156, "text": "B", "size": 11, "align": "center", "role": "t", "name": "IB" },
-                { "op": "text", "x": 82, "y": 38, "text": "2", "size": 11, "role": "t", "name": "ray2" },
-                { "op": "text", "x": 96, "y": 70, "text": "3", "size": 11, "role": "t", "name": "ray3" },
-                { "op": "text", "x": 96, "y": 132, "text": "1", "size": 11, "role": "t", "name": "ray1" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "rays",
+                    "objects": [
+                      { "type": "segment", "p1": [10, 88], "p2": [250, 88], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[125, 158], [112, 88], [125, 18], [138, 88], [125, 158]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "segment", "p1": [36, 88], "p2": [36, 136], "role": "ik", "width": 2.5, "name": "OA" },
+                      { "type": "segment", "p1": [214, 88], "p2": [214, 40], "role": "ik", "width": 2.5, "name": "IB" },
+                      { "type": "polyline", "points": [[36, 136], [125, 136], [214, 40]], "role": "lk", "width": 1.8, "name": "ray2" },
+                      { "type": "polyline", "points": [[36, 136], [76, 88], [125, 40], [214, 40]], "role": "lk", "width": 1.8, "name": "ray1" },
+                      { "type": "segment", "p1": [36, 136], "p2": [214, 40], "role": "ik", "width": 2.4, "name": "ray3" },
+                      { "type": "arc", "center": [125, 88], "r": 25, "start": 152, "end": 180, "role": "lk", "width": 1.8, "name": "ray3" },
+                      { "type": "arc", "center": [125, 88], "r": 25, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "ray3" },
+                      { "type": "point", "coords": [76, 88], "id": "F1", "role": "f", "name": "F1" },
+                      { "type": "point", "coords": [125, 88], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [174, 88], "id": "F2", "role": "f", "name": "F2" },
+                      { "type": "label", "coords": [36, 146], "text": "A", "size": 11, "align": "center", "role": "t", "name": "OA" },
+                      { "type": "label", "coords": [36, 72], "text": "O", "size": 11, "align": "center", "role": "t", "name": "OA" },
+                      { "type": "label", "coords": [76, 72], "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
+                      { "type": "label", "coords": [120, 72], "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [174, 98], "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
+                      { "type": "label", "coords": [214, 98], "text": "I", "size": 11, "align": "center", "role": "t", "name": "IB" },
+                      { "type": "label", "coords": [214, 24], "text": "B", "size": 11, "align": "center", "role": "t", "name": "IB" },
+                      { "type": "label", "coords": [82, 144], "text": "2", "size": 11, "role": "t", "name": "ray2" },
+                      { "type": "label", "coords": [96, 112], "text": "3", "size": 11, "role": "t", "name": "ray3" },
+                      { "type": "label", "coords": [96, 50], "text": "1", "size": 11, "role": "t", "name": "ray1" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "math",
@@ -1564,62 +2052,126 @@
                 "x₂ from F₂",
                 "Right of focus: +"
               ],
-              "art": [
-                { "op": "line", "x1": 10, "y1": 86, "x2": 250, "y2": 86, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[125, 20], [113, 86], [125, 152], [137, 86], [125, 20]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "line", "x1": 32, "y1": 86, "x2": 32, "y2": 40, "role": "lk", "width": 2.5, "name": "obj" },
-                { "op": "line", "x1": 222, "y1": 86, "x2": 222, "y2": 132, "role": "lk", "width": 2.5, "name": "img" },
-                { "op": "polyline", "points": [[32, 40], [125, 40], [222, 132]], "role": "lk", "width": 1.8, "name": "ray2" },
-                { "op": "polyline", "points": [[32, 40], [80, 86], [125, 132], [222, 132]], "role": "hk", "width": 2.2, "name": "ray1" },
-                { "op": "arc", "cx": 80, "cy": 86, "r": 22, "start": 180, "end": 224, "role": "lk", "width": 1.8, "name": "F1" },
-                { "op": "arc", "cx": 80, "cy": 86, "r": 22, "start": 0, "end": 45, "role": "lk", "width": 1.8, "name": "F1" },
-                { "op": "circle", "cx": 80, "cy": 86, "r": 4, "role": "h", "name": "F1" },
-                { "op": "circle", "cx": 170, "cy": 86, "r": 3.5, "role": "f", "name": "F2" },
-                { "op": "text", "x": 32, "y": 32, "text": "y", "size": 11, "align": "center", "role": "t", "name": "obj" },
-                { "op": "text", "x": 32, "y": 102, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
-                { "op": "text", "x": 80, "y": 78, "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
-                { "op": "text", "x": 120, "y": 102, "text": "P", "size": 11, "align": "right", "role": "t", "name": "lens" },
-                { "op": "text", "x": 170, "y": 78, "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
-                { "op": "text", "x": 222, "y": 78, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
-                { "op": "text", "x": 236, "y": 122, "text": "(-y')", "size": 11, "align": "center", "role": "t", "name": "img" },
-                { "op": "text", "x": 56, "y": 124, "text": "-x₁", "size": 11, "align": "center", "role": "t", "name": "x1" },
-                { "op": "text", "x": 102, "y": 124, "text": "-f₁", "size": 11, "align": "center", "role": "t", "name": "f1" },
-                { "op": "text", "x": 148, "y": 124, "text": "f₂", "size": 11, "align": "center", "role": "t", "name": "f2" },
-                { "op": "text", "x": 196, "y": 124, "text": "x₂", "size": 11, "align": "center", "role": "t", "name": "x2" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "newton",
+                    "objects": [
+                      { "type": "segment", "p1": [10, 94], "p2": [250, 94], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[125, 160], [113, 94], [125, 28], [137, 94], [125, 160]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "segment", "p1": [32, 94], "p2": [32, 140], "role": "ik", "width": 2.5, "name": "obj" },
+                      { "type": "segment", "p1": [222, 94], "p2": [222, 48], "role": "ik", "width": 2.5, "name": "img" },
+                      { "type": "polyline", "points": [[32, 140], [125, 140], [222, 48]], "role": "lk", "width": 1.8, "name": "ray2" },
+                      { "type": "polyline", "points": [[32, 140], [80, 94], [125, 48], [222, 48]], "role": "lk", "width": 2.2, "name": "ray1" },
+                      { "type": "arc", "center": [80, 94], "r": 22, "start": 136, "end": 180, "role": "lk", "width": 1.8, "name": "F1" },
+                      { "type": "arc", "center": [80, 94], "r": 22, "start": -45, "end": 0, "role": "lk", "width": 1.8, "name": "F1" },
+                      { "type": "point", "coords": [80, 94], "id": "F1", "role": "f", "name": "F1" },
+                      { "type": "point", "coords": [170, 94], "id": "F2", "role": "f", "name": "F2" },
+                      { "type": "label", "coords": [32, 150], "text": "y", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [32, 78], "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [80, 104], "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
+                      { "type": "label", "coords": [120, 78], "text": "P", "size": 11, "align": "right", "role": "t", "name": "lens" },
+                      { "type": "label", "coords": [170, 104], "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
+                      { "type": "label", "coords": [222, 104], "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [236, 58], "text": "(-y')", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [56, 56], "text": "-x₁", "size": 11, "align": "center", "role": "t", "name": "x1" },
+                      { "type": "label", "coords": [102, 56], "text": "-f₁", "size": 11, "align": "center", "role": "t", "name": "f1" },
+                      { "type": "label", "coords": [148, 56], "text": "f₂", "size": 11, "align": "center", "role": "t", "name": "f2" },
+                      { "type": "label", "coords": [196, 56], "text": "x₂", "size": 11, "align": "center", "role": "t", "name": "x2" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "derivation",
               "label": "02 · §4.6 Derivation",
               "title": "The Newton formula",
               "legend": "Object height \\(y\\) at \\(x_1\\) from \\(F_1\\), image height \\(y'\\) at \\(x_2\\) from \\(F_2\\), focal lengths \\(f_1, f_2\\) (Fig. 4.8(a)).",
-              "setup": [
-                { "op": "line", "x1": 12, "y1": 88, "x2": 248, "y2": 88, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "line", "x1": 125, "y1": 24, "x2": 125, "y2": 152, "role": "lk", "width": 2, "name": "lens" },
-                { "op": "line", "x1": 34, "y1": 88, "x2": 34, "y2": 42, "role": "lk", "width": 2.5, "name": "obj" },
-                { "op": "line", "x1": 220, "y1": 88, "x2": 220, "y2": 134, "role": "lk", "width": 2.5, "name": "img" },
-                { "op": "polyline", "points": [[34, 42], [125, 42], [220, 134]], "role": "lk", "width": 1.8, "name": "ray2" },
-                { "op": "polyline", "points": [[34, 42], [82, 88], [125, 134], [220, 134]], "role": "hk", "width": 2.4, "name": "ray1" },
-                { "op": "arc", "cx": 82, "cy": 88, "r": 22, "start": 180, "end": 224, "role": "lk", "width": 1.8, "name": "F1" },
-                { "op": "arc", "cx": 82, "cy": 88, "r": 22, "start": 0, "end": 46, "role": "lk", "width": 1.8, "name": "F1" },
-                { "op": "arc", "cx": 168, "cy": 88, "r": 22, "start": 180, "end": 224, "role": "lk", "width": 1.8, "name": "F2" },
-                { "op": "arc", "cx": 168, "cy": 88, "r": 22, "start": 0, "end": 42, "role": "lk", "width": 1.8, "name": "F2" },
-                { "op": "circle", "cx": 82, "cy": 88, "r": 4, "role": "h", "name": "F1" },
-                { "op": "circle", "cx": 168, "cy": 88, "r": 3.5, "role": "f", "name": "F2" },
-                { "op": "text", "x": 24, "y": 66, "text": "y", "size": 11, "role": "t", "name": "obj" },
-                { "op": "text", "x": 34, "y": 104, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
-                { "op": "text", "x": 82, "y": 80, "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
-                { "op": "text", "x": 125, "y": 20, "text": "K", "size": 11, "align": "center", "role": "t", "name": "lens" },
-                { "op": "text", "x": 118, "y": 104, "text": "P", "size": 11, "align": "right", "role": "t", "name": "lens" },
-                { "op": "text", "x": 125, "y": 166, "text": "L", "size": 11, "align": "center", "role": "t", "name": "lens" },
-                { "op": "text", "x": 168, "y": 80, "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
-                { "op": "text", "x": 220, "y": 80, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
-                { "op": "text", "x": 236, "y": 118, "text": "(-y')", "size": 11, "align": "center", "role": "t", "name": "img" },
-                { "op": "text", "x": 58, "y": 122, "text": "-x₁", "size": 11, "align": "center", "role": "t", "name": "x1" },
-                { "op": "text", "x": 104, "y": 122, "text": "-f₁", "size": 11, "align": "center", "role": "t", "name": "f1" },
-                { "op": "text", "x": 146, "y": 122, "text": "f₂", "size": 11, "align": "center", "role": "t", "name": "f2" },
-                { "op": "text", "x": 194, "y": 122, "text": "x₂", "size": 11, "align": "center", "role": "t", "name": "x2" }
-              ],
+              "setup": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "First focus",
+                    "objects": [
+                      { "type": "segment", "p1": [12, 92], "p2": [248, 92], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "segment", "p1": [125, 156], "p2": [125, 28], "role": "lk", "width": 2, "name": "lens" },
+                      { "type": "segment", "p1": [34, 92], "p2": [34, 138], "role": "ik", "width": 2.5, "name": "obj" },
+                      { "type": "segment", "p1": [220, 92], "p2": [220, 46], "role": "ik", "width": 2.5, "name": "img" },
+                      { "type": "polygon", "points": [[34, 138], [34, 92], [82, 92]], "role": "s", "name": "F1" },
+                      { "type": "polygon", "points": [[82, 92], [125, 92], [125, 46]], "role": "s", "name": "F1" },
+                      { "type": "polyline", "points": [[34, 138], [82, 92], [125, 46], [220, 46]], "role": "lk", "width": 2.4, "name": "ray1" },
+                      { "type": "arc", "center": [82, 92], "r": 22, "start": 136, "end": 180, "role": "lk", "width": 1.8, "name": "F1" },
+                      { "type": "arc", "center": [82, 92], "r": 22, "start": -46, "end": 0, "role": "lk", "width": 1.8, "name": "F1" },
+                      { "type": "point", "coords": [82, 92], "id": "F1", "role": "f", "name": "F1" },
+                      { "type": "point", "coords": [168, 92], "id": "F2", "role": "f", "name": "F2" },
+                      { "type": "label", "coords": [34, 148], "text": "A", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [24, 114], "text": "y", "size": 11, "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [34, 76], "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [82, 102], "text": "F₁", "size": 11, "align": "center", "role": "t", "name": "F1" },
+                      { "type": "label", "coords": [125, 162], "text": "K", "size": 11, "align": "center", "role": "t", "name": "lens" },
+                      { "type": "label", "coords": [118, 76], "text": "P", "size": 11, "align": "right", "role": "t", "name": "lens" },
+                      { "type": "label", "coords": [125, 16], "text": "L", "size": 11, "align": "center", "role": "t", "name": "lens" },
+                      { "type": "label", "coords": [168, 102], "text": "F₂", "size": 11, "align": "center", "role": "t", "name": "F2" },
+                      { "type": "label", "coords": [220, 102], "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [220, 34], "text": "B", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [236, 62], "text": "(-y')", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [58, 58], "text": "-x₁", "size": 11, "align": "center", "role": "t", "name": "x1" },
+                      { "type": "label", "coords": [104, 58], "text": "-f₁", "size": 11, "align": "center", "role": "t", "name": "f1" }
+                    ]
+                  },
+                  {
+                    "step": 2,
+                    "name": "Second focus",
+                    "objects": [
+                      { "type": "polygon", "points": [[125, 138], [125, 92], [168, 92]], "role": "s", "name": "F2" },
+                      { "type": "polygon", "points": [[168, 92], [220, 92], [220, 46]], "role": "s", "name": "F2" },
+                      { "type": "polyline", "points": [[34, 138], [125, 138], [220, 46]], "role": "ik", "width": 2, "name": "ray2" },
+                      { "type": "arc", "center": [168, 92], "r": 22, "start": 136, "end": 180, "role": "lk", "width": 1.8, "name": "F2" },
+                      { "type": "arc", "center": [168, 92], "r": 22, "start": -42, "end": 0, "role": "lk", "width": 1.8, "name": "F2" },
+                      { "type": "label", "coords": [146, 58], "text": "f₂", "size": 11, "align": "center", "role": "t", "name": "f2" },
+                      { "type": "label", "coords": [194, 58], "text": "x₂", "size": 11, "align": "center", "role": "t", "name": "x2" }
+                    ]
+                  }
+                ]
+              },
               "phases": [
                 {
                   "name": "First focus",
@@ -1756,82 +2308,162 @@
               "term": "lateral-magnification",
               "title": "How tall and which way up the image is",
               "meaning": "Lateral magnification compares the height of the image to the height of the object, including a sign for orientation.",
-              "art": [
-                { "op": "line", "x1": 14, "y1": 90, "x2": 246, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[120, 22], [108, 90], [120, 158], [132, 90], [120, 22]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "line", "x1": 38, "y1": 90, "x2": 38, "y2": 38, "role": "lk", "width": 2.6, "name": "obj" },
-                { "op": "line", "x1": 216, "y1": 90, "x2": 216, "y2": 148, "role": "lk", "width": 2.6, "name": "img" },
-                { "op": "line", "x1": 38, "y1": 38, "x2": 216, "y2": 148, "role": "hk", "width": 2.5, "name": "ray3" },
-                { "op": "arc", "cx": 120, "cy": 90, "r": 28, "start": 180, "end": 212, "role": "lk", "width": 1.8, "name": "theta" },
-                { "op": "arc", "cx": 120, "cy": 90, "r": 28, "start": 0, "end": 32, "role": "lk", "width": 1.8, "name": "theta" },
-                { "op": "circle", "cx": 120, "cy": 90, "r": 4, "role": "h", "name": "P" },
-                { "op": "text", "x": 26, "y": 66, "text": "y", "size": 12, "role": "t", "name": "obj" },
-                { "op": "text", "x": 38, "y": 106, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
-                { "op": "text", "x": 84, "y": 84, "text": "θ", "size": 11, "role": "t", "name": "theta" },
-                { "op": "text", "x": 154, "y": 104, "text": "θ", "size": 11, "role": "t", "name": "theta" },
-                { "op": "text", "x": 114, "y": 108, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 216, "y": 82, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
-                { "op": "text", "x": 232, "y": 128, "text": "y'", "size": 12, "role": "t", "name": "img" },
-                { "op": "text", "x": 78, "y": 136, "text": "u < 0", "size": 11, "align": "center", "role": "t", "name": "u" },
-                { "op": "text", "x": 170, "y": 64, "text": "v > 0 (m = v/u)", "size": 11, "align": "center", "role": "t", "name": "v" }
-              ],
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "mag",
+                    "objects": [
+                      { "type": "segment", "p1": [14, 90], "p2": [246, 90], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[120, 158], [108, 90], [120, 22], [132, 90], [120, 158]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "segment", "p1": [38, 90], "p2": [38, 142], "role": "ik", "width": 2.6, "name": "obj" },
+                      { "type": "segment", "p1": [216, 90], "p2": [216, 32], "role": "ik", "width": 2.6, "name": "img" },
+                      { "type": "segment", "p1": [38, 142], "p2": [216, 32], "role": "lk", "width": 2.5, "name": "ray3" },
+                      { "type": "arc", "center": [120, 90], "r": 28, "start": 148, "end": 180, "role": "lk", "width": 1.8, "name": "theta" },
+                      { "type": "arc", "center": [120, 90], "r": 28, "start": -32, "end": 0, "role": "lk", "width": 1.8, "name": "theta" },
+                      { "type": "point", "coords": [120, 90], "id": "P", "role": "f", "name": "P" },
+                      { "type": "label", "coords": [26, 114], "text": "y", "size": 12, "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [38, 74], "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [84, 98], "text": "θ", "size": 11, "role": "t", "name": "theta" },
+                      { "type": "label", "coords": [154, 78], "text": "θ", "size": 11, "role": "t", "name": "theta" },
+                      { "type": "label", "coords": [114, 72], "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [216, 100], "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [232, 52], "text": "y'", "size": 12, "role": "t", "name": "img" },
+                      { "type": "label", "coords": [78, 44], "text": "u < 0", "size": 11, "align": "center", "role": "t", "name": "u" },
+                      { "type": "label", "coords": [170, 120], "text": "v > 0 (m = v/u)", "size": 11, "align": "center", "role": "t", "name": "v" }
+                    ]
+                  }
+                ]
+              },
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
-              "art": [
-                { "op": "line", "x1": 14, "y1": 90, "x2": 246, "y2": 90, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[120, 22], [108, 90], [120, 158], [132, 90], [120, 22]], "closed": true, "role": "s ok", "name": "lens" },
-                { "op": "arrow", "x1": 38, "y1": 90, "x2": 38, "y2": 38, "role": "lk", "width": 2.5, "name": "obj" },
-                { "op": "arrow", "x1": 214, "y1": 90, "x2": 214, "y2": 146, "role": "lk", "width": 2.5, "name": "img" },
-                { "op": "line", "x1": 38, "y1": 38, "x2": 214, "y2": 146, "role": "hk", "width": 2.4, "name": "ray3" },
-                { "op": "arc", "cx": 120, "cy": 90, "r": 26, "start": 180, "end": 212, "role": "lk", "width": 1.8, "name": "theta" },
-                { "op": "arc", "cx": 120, "cy": 90, "r": 26, "start": 0, "end": 32, "role": "lk", "width": 1.8, "name": "theta" },
-                { "op": "circle", "cx": 120, "cy": 90, "r": 4, "role": "h", "name": "P" },
-                { "op": "text", "x": 24, "y": 64, "text": "y", "size": 12, "role": "t", "name": "obj" },
-                { "op": "text", "x": 38, "y": 106, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
-                { "op": "text", "x": 114, "y": 108, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 214, "y": 82, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
-                { "op": "text", "x": 230, "y": 124, "text": "y'", "size": 12, "role": "t", "name": "img" },
-                { "op": "text", "x": 170, "y": 54, "text": "m = y'/y = v/u", "size": 11, "align": "center", "role": "t", "name": "ray3" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "mag",
+                    "objects": [
+                      { "type": "segment", "p1": [14, 90], "p2": [246, 90], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[120, 158], [108, 90], [120, 22], [132, 90], [120, 158]], "closed": true, "role": "s ok", "name": "lens" },
+                      { "type": "arrow", "p1": [38, 90], "p2": [38, 142], "role": "ik", "width": 2.5, "name": "obj" },
+                      { "type": "arrow", "p1": [214, 90], "p2": [214, 34], "role": "ik", "width": 2.5, "name": "img" },
+                      { "type": "segment", "p1": [38, 142], "p2": [214, 34], "role": "lk", "width": 2.4, "name": "ray3" },
+                      { "type": "arc", "center": [120, 90], "r": 26, "start": 148, "end": 180, "role": "lk", "width": 1.8, "name": "theta" },
+                      { "type": "arc", "center": [120, 90], "r": 26, "start": -32, "end": 0, "role": "lk", "width": 1.8, "name": "theta" },
+                      { "type": "point", "coords": [120, 90], "id": "P", "role": "f", "name": "P" },
+                      { "type": "label", "coords": [24, 116], "text": "y", "size": 12, "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [38, 74], "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [114, 72], "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [214, 100], "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [230, 56], "text": "y'", "size": 12, "role": "t", "name": "img" },
+                      { "type": "label", "coords": [170, 126], "text": "m = y'/y = v/u", "size": 11, "align": "center", "role": "t", "name": "ray3" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "derivation",
               "label": "04 · §4.7 Derivation",
               "title": "Lateral magnification of spherical surface and thin lens",
               "legend": "Object \\(OA = y\\) at \\(u\\), center of curvature \\(C\\) at \\(R\\), image \\(IB = -y'\\) at \\(v\\) (Fig. 4.9, Eqs. 4.22–4.24).",
-              "setup": [
-                { "op": "line", "x1": 14, "y1": 96, "x2": 246, "y2": 96, "role": "lk", "width": 2, "name": "axis" },
-                { "op": "curve", "points": [[110, 22], [86, 96], [110, 164]], "role": "lk", "width": 2.5, "name": "surf" },
-                { "op": "line", "x1": 28, "y1": 96, "x2": 28, "y2": 44, "role": "lk", "width": 2.5, "name": "obj" },
-                { "op": "line", "x1": 228, "y1": 96, "x2": 228, "y2": 142, "role": "lk", "width": 2.5, "name": "img" },
-                { "op": "line", "x1": 28, "y1": 44, "x2": 228, "y2": 142, "role": "hk", "width": 2.4, "name": "rayC" },
-                { "op": "arc", "cx": 154, "cy": 96, "r": 26, "start": 180, "end": 206, "role": "lk", "width": 1.8, "name": "C" },
-                { "op": "arc", "cx": 154, "cy": 96, "r": 26, "start": 0, "end": 26, "role": "lk", "width": 1.8, "name": "C" },
-                { "op": "circle", "cx": 98, "cy": 96, "r": 3.5, "role": "f", "name": "P" },
-                { "op": "circle", "cx": 154, "cy": 96, "r": 4, "role": "h", "name": "C" },
-                { "op": "text", "x": 28, "y": 36, "text": "A (y)", "size": 11, "align": "center", "role": "t", "name": "obj" },
-                { "op": "text", "x": 28, "y": 112, "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
-                { "op": "text", "x": 64, "y": 132, "text": "-u", "size": 11, "align": "center", "role": "t", "name": "u" },
-                { "op": "text", "x": 94, "y": 112, "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
-                { "op": "text", "x": 126, "y": 132, "text": "R", "size": 11, "align": "center", "role": "t", "name": "R" },
-                { "op": "text", "x": 154, "y": 84, "text": "C", "size": 11, "align": "center", "role": "t", "name": "C" },
-                { "op": "text", "x": 190, "y": 156, "text": "v", "size": 11, "align": "center", "role": "t", "name": "v" },
-                { "op": "text", "x": 228, "y": 88, "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
-                { "op": "text", "x": 228, "y": 158, "text": "B (-y')", "size": 11, "align": "center", "role": "t", "name": "img" }
-              ],
+              "setup": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "Triangles at C",
+                    "objects": [
+                      { "type": "segment", "p1": [14, 84], "p2": [246, 84], "role": "lk", "width": 2, "name": "axis" },
+                      { "type": "curve", "points": [[110, 158], [86, 84], [110, 16]], "role": "lk", "width": 2.5, "name": "surf" },
+                      { "type": "polygon", "points": [[28, 136], [28, 84], [154, 84]], "role": "s", "name": "C" },
+                      { "type": "polygon", "points": [[154, 84], [228, 84], [228, 38]], "role": "s", "name": "C" },
+                      { "type": "segment", "p1": [28, 84], "p2": [28, 136], "role": "ik", "width": 2.5, "name": "obj" },
+                      { "type": "segment", "p1": [228, 84], "p2": [228, 38], "role": "ik", "width": 2.5, "name": "img" },
+                      { "type": "segment", "p1": [28, 136], "p2": [228, 38], "role": "lk", "width": 2.4, "name": "rayC" },
+                      { "type": "arc", "center": [154, 84], "r": 26, "start": 154, "end": 180, "role": "lk", "width": 1.8, "name": "C" },
+                      { "type": "arc", "center": [154, 84], "r": 26, "start": -26, "end": 0, "role": "lk", "width": 1.8, "name": "C" },
+                      { "type": "point", "coords": [98, 84], "id": "P", "role": "f", "name": "P" },
+                      { "type": "point", "coords": [154, 84], "id": "C", "role": "f", "name": "C" },
+                      { "type": "label", "coords": [28, 146], "text": "A (y)", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [28, 68], "text": "O", "size": 11, "align": "center", "role": "t", "name": "obj" },
+                      { "type": "label", "coords": [64, 48], "text": "-u", "size": 11, "align": "center", "role": "t", "name": "u" },
+                      { "type": "label", "coords": [94, 68], "text": "P", "size": 11, "align": "right", "role": "t", "name": "P" },
+                      { "type": "label", "coords": [126, 48], "text": "R", "size": 11, "align": "center", "role": "t", "name": "R" },
+                      { "type": "label", "coords": [154, 98], "text": "C", "size": 11, "align": "center", "role": "t", "name": "C" },
+                      { "type": "label", "coords": [228, 94], "text": "I", "size": 11, "align": "center", "role": "t", "name": "img" },
+                      { "type": "label", "coords": [228, 22], "text": "B (-y')", "size": 11, "align": "center", "role": "t", "name": "img" }
+                    ]
+                  },
+                  {
+                    "step": 2,
+                    "name": "Surface law",
+                    "objects": [
+                      { "type": "label", "coords": [62, 148], "text": "n₁", "size": 12, "role": "t", "name": "surf" },
+                      { "type": "label", "coords": [168, 148], "text": "n₂", "size": 12, "role": "t", "name": "surf" },
+                      { "type": "label", "coords": [172, 24], "text": "v", "size": 11, "align": "center", "role": "t", "name": "v" }
+                    ]
+                  },
+                  {
+                    "step": 4,
+                    "name": "Lens surfaces",
+                    "objects": [
+                      { "type": "label", "coords": [176, 122], "text": "m = m₁ m₂ = v/u", "size": 11, "align": "center", "role": "t", "name": "v" }
+                    ]
+                  }
+                ]
+              },
               "phases": [
                 {
                   "name": "Triangles at C",
```

---

### 2. Diff for Code, CSS, Template, Service Worker, Build Script, and Skills

```diff
--- a/skills/00-START-HERE.md
+++ b/skills/00-START-HERE.md
@@ -56,11 +56,11 @@
 1. Plan first, privately: list the sections (big subject areas, 2–6), and inside each the topics
    ("sheets", 2–5 per section). A topic is something I can finish in 10–25 minutes.
 2. For each syllabus topic write about 6–14 cards, following `01-schema.md`:
-   - concepts first (`info` cards, one idea each, with a canvas2d `art` drawing list when a picture helps, and on every definition-recall card's flip back),
+   - concepts first (`info` cards, one idea each, with a declarative JSXGraph `art` figure when a picture helps, and on every definition-recall card's flip back),
    - a `derivation` card whenever the topic has a formula that is derived (rules in `02-derivations.md`),
    - one `math` worked example where numbers help,
    - then 3–5 questions (`mcq`, `fill`, `number`) at the end of the topic (rules in `04-questions.md`).
-2b. For physics topics also follow the canvas2d drawing rules in `03-svg-art.md`
+2b. For physics topics also follow the JSXGraph figure rules in `03-svg-art.md`
    (and three.js only for the meridional ray) and give every derivation 4 `ask` checkpoints.
 2c. For physics model-paper practice, preserve the paper's sections and question order.
    Use one sheet per exam question, with `question` → marking `eval` cards → `score`
@@ -87,7 +87,7 @@
   separate half-time and hydration settings; halves of at least 45 real minutes
   have hydration breaks at displayed 25 and 70. The app
   handles clock scaling, deadline checks, persistence and on-screen break alerts.
-- The scientific calculator (`=`), its `?` help, and maths rendering in tags.
+- The scientific calculator (`=`), its `?` help, and KaTeX maths rendering in tags.
 - The cover of each topic (built from the cards).
 - For every `derivation`: a "goal first" card, an animated step-by-step player, a one-page view of
   the whole derivation, and a "rebuild the route" recall card. You only write the steps.
--- a/skills/01-schema.md
+++ b/skills/01-schema.md
@@ -21,6 +21,7 @@
 
 Any text field (title, body, q, options, why, note, legend) may contain inline maths written as
 `\\( ... \\)`. Never use `$...$`. Keep inline maths short.
+All inline (`\\( ... \\)`) and display (`\\[ ... \\]`) maths are rendered by KaTeX (`0.19.0` with `auto-render`).
 
 The fields `tex`, `move.by`, `start` are **bare TeX** (no `\\( \\)` around them).
 
@@ -111,17 +112,25 @@
 `points` is a non-empty list. Place the Remember card after the model answer,
 then append the three word-completion OMR cards described below.
 
-### `intuition` — plain-words introduction with required Canvas2D diagram (or `three` for meridional ray)
+### `intuition` — plain-words introduction with required JSXGraph figure (or `three` for meridional ray)
 
 Place an `intuition` card immediately before a new concept's technical `info` card;
 see `07-plain-words-and-glossary.md`. Every `intuition` card **must** include an
-`art` Canvas2D drawing list (drawn according to `03-svg-art.md`), or a `three` 3D scene object on the meridional-ray card only, followed by `picture` as a short
+`art` JSXGraph figure object (`view` + construction `steps`, following `03-svg-art.md`), or a `three` 3D scene object on the meridional-ray card only, followed by `picture` as a short
 one-line caption explaining what to look at in the diagram.
 ```json
 { "type": "intuition", "term": "paraxial-approximation",
   "title": "Why only rays close to the axis focus sharply",
   "meaning": "The paraxial approximation keeps only rays that make very small angles with the axis.",
-  "art": [
-    { "op": "line", "x1": 16, "y1": 105, "x2": 244, "y2": 105, "role": "lk", "width": 2, "name": "axis" },
-    { "op": "polyline", "points": [[28, 105], [118, 56], [226, 105]], "role": "hk", "width": 2.6, "name": "OSI" },
-    { "op": "arc", "cx": 28, "cy": 105, "r": 32, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" }
-  ],
+  "art": {
+    "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+    "steps": [
+      {
+        "step": 0,
+        "name": "OSI",
+        "objects": [
+          { "type": "segment", "p1": [16, 75], "p2": [244, 75], "role": "lk", "width": 2, "name": "axis" },
+          { "type": "polyline", "points": [[28, 75], [118, 124], [226, 75]], "role": "lk", "width": 2.6, "name": "OSI" },
+          { "type": "arc", "center": [28, 75], "r": 32, "start": 0, "end": 28, "role": "lk", "width": 1.8, "name": "alpha1" }
+        ]
+      }
+    ]
+  },
   "picture": "Look at the small angle arc α near O where height h over distance x gives the angle.",
   "example": "At 0.1 rad, sin(0.1) and tan(0.1) are both very close to 0.1.",
   "bridge": "Under this small-angle rule, all paraxial rays from O meet at one image point I." }
@@ -136,20 +145,28 @@
 card's own exclusion. New worked
 examples use a unique uid so they do not shift existing cards' numeric IDs.
 With meta.definitionChecks enabled, definition info cards (cards with `defines` or a title starting with “What is/are”) use the same authored
-body as their correct statement and render their `art` Canvas2D drawing list on the flip back. Non-definition info cards render `art` on their front face.
+body as their correct statement and render their `art` JSXGraph figure on the flip back. Non-definition info cards render `art` on their front face.
 Keep the authored definition body and existing `tex` formula on the flip card's front; writing and the recall diagram belong on
 its back. Locked cards remain in the row with their original dimensions.
 ```json
 { "type": "info", "label": "01", "title": "Ionic bond",
   "body": "One atom transfers electrons to another, creating oppositely charged ions that attract.",
   "examples": ["NaCl", "MgO"],
-  "art": [
-    { "op": "circle", "cx": 80, "cy": 95, "r": 45, "role": "s", "name": "Na" },
-    { "op": "circle", "cx": 180, "cy": 95, "r": 45, "role": "f", "name": "Cl" }
-  ] }
+  "art": {
+    "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+    "steps": [
+      {
+        "step": 0,
+        "name": "ions",
+        "objects": [
+          { "type": "circle", "center": [80, 90], "r": 45, "role": "s ok", "name": "Na" },
+          { "type": "circle", "center": [180, 90], "r": 45, "role": "f", "name": "Cl" }
+        ]
+      }
+    ]
+  } }
 ```
 - `body`: 1–2 sentences, ≤ 220 characters. One idea per card.
 - `examples`: 0–3 short chips (≤ 24 chars each).
-- `art`: Canvas2D drawing list (rules in `03-svg-art.md`). Every definition-recall `info` card has an `art` list shown on its flip back; non-definition `info` cards show `art` or `"tex"` on their front.
+- `art`: Declarative JSXGraph figure (`view` + construction `steps`; rules in `03-svg-art.md`). Every definition-recall `info` card has an `art` figure shown on its flip back; non-definition `info` cards show `art` or `"tex"` on their front.
 - `three`: 3D scene object (`axis`, `plane`, `surfaces`, `points`, `meridionalRay`, `skewRay`), used **only** on the meridional-ray card.
 
 ### `math` — a formula or worked example shown large
@@ -162,15 +179,23 @@
 See `02-derivations.md`. Shape:
 ```json
 { "type": "derivation", "title": "Bond energy, step by step",
   "legend": "\\(k\\) Coulomb constant, \\(r\\) separation.",
-  "setup": [
-    { "op": "line", "x1": 40, "y1": 90, "x2": 220, "y2": 90, "role": "lk", "width": 2, "name": "sep" }
-  ],
+  "setup": {
+    "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+    "steps": [
+      {
+        "step": 0,
+        "name": "Model",
+        "objects": [
+          { "type": "segment", "p1": [40, 90], "p2": [220, 90], "role": "lk", "width": 2, "name": "sep" }
+        ]
+      }
+    ]
+  },
   "phases": [ { "name": "Model", "why": "energy = attraction + repulsion" } ],
   "steps": [ { "tex": "...", "phase": "Model", "focus": ["sep"], "note": "..." },
              { "tex": "...", "move": { "type": "differentiate", "wrt": "r" }, "focus": ["sep"], "note": "...", "ask": { ... } } ] }
 ```
-- Give each highlightable ray, side, angle arc or label in `setup` a `"name": "partName"` field.
-- Each step lists the parts it uses in `"focus": ["name1", "name2"]` so the diagram highlights them at the same time.
+- Give each ray, triangle, side, angle arc or label in `setup.steps` a `"name": "partName"` field, and build the figure up across construction steps (`"step": 0`, `"step": 1`, ...).
+- Each derivation step lists the parts it uses in `"focus": ["name1", "name2"]`. The JSXGraph board zooms smoothly into the focused region (and zooms back out to the full overview when focus ends), without using any yellow highlight.
 - Write parallel steps (such as two surfaces of a lens) one after the other as separate steps with their own phase labels, never side by side.
 - An **All steps** summary view lists every step in order (step number, equation and move) after the final step and via the top button.
--- a/skills/02-derivations.md
+++ b/skills/02-derivations.md
@@ -1,7 +1,8 @@
 # 02 — Writing derivations
 
 You write **lines of TeX** and name the **move** that produced each line. The app animates
-everything on a single card after the student flips it: the `setup` Canvas2D diagram sits next to the
+everything on a single card after the student flips it: the `setup` JSXGraph figure sits next to the
+KaTeX equations on the same board, builds up step by step, zooms into the focused part of the figure,
-equations on the same board, symbols glide to their new place, new symbols write in, and
+and glides equation spans to their new places while new spans fade in in palette violet and
 cancelled ones are struck through and vanish.
 
@@ -18,9 +19,12 @@
    each with its own phase label—never side by side. The first step has no `move`; every later step has one.
 6. Every step has a `note`: one short sentence saying *why* or what just cancelled (≤ 120 chars).
-7. Include a `"setup"` Canvas2D drawing list (following `03-svg-art.md`) showing the geometry or circuit used by
-   the derivation, with `"name": "partName"` on each highlightable ray, side, angle arc and label.
-   Each step names the parts it uses in `"focus": ["name1", "name2"]` so the picture highlights
-   those lines at the same time.
+7. Include a `"setup"` JSXGraph figure (following `03-svg-art.md`) with `"view"` and construction `"steps"`.
+   Start with the base objects at `"step": 0`, then add triangles, rays, angles, and labels in later construction steps
+   as the derivation progresses. Earlier objects stay visible on screen. Every label mentioned in a step text
+   must appear on the figure with the textbook's notation (Ghatak, *Optics*).
+   Each derivation step names the parts it uses in `"focus": ["name1", "name2"]` so the JSXGraph board zooms in on
+   that region (and zooms back out to the full overview when focus ends). Never use yellow or amber highlights.
 8. Mark 3–6 phases with `"phase"` on the step where each phase starts. List the same phases in
    `"phases"` with a one-line `why` each. Do not create separate route, step, or full-page cards;
    the card includes an **All steps** summary stage that opens after the last step or from the top button.
--- a/skills/03-svg-art.md
+++ b/skills/03-svg-art.md
@@ -1,69 +1,86 @@
-# 03 — Canvas2D diagrams (and Three.js for the meridional ray)
+# 03 — JSXGraph figures (and Three.js for the meridional ray)
 
-All 2D diagrams (`art` on `intuition`, `info`, and recall cards; `setup` on `derivation` cards)
-are drawn with the HTML Canvas 2D API from a JSON list of drawing operations.
-Never write SVG strings, JavaScript code, or hard-coded hex/RGB colours in `data.json`.
-The runtime (`02-canvas.js`) reads the palette tokens from `01-tokens.css` in light and dark mode
-and scales by `devicePixelRatio` so diagrams stay sharp on phones and desktops.
+All 2D figures (`art` on `intuition`, `info`, and definition-recall cards; `setup` on `derivation` cards)
+are rendered on JSXGraph (`1.14.0`) boards from a declarative JSON object (`view` + construction `steps`).
+Never write SVG strings, JavaScript code, or hard-coded hex/RGB colours in `data.json`.
+The runtime (`02-diagram.js`) reads the calm palette tokens from `01-tokens.css` in light and dark mode,
+resizes boards with their containers on phone and desktop, builds derivation figures up step by step,
+and zooms smoothly into focused regions without any yellow or amber highlights.
 
 ## Hard rules
 
-- Coordinate space: logical width `260`, logical height `180` (`0 <= x <= 260`, `0 <= y <= 180`). Leave ~8 units of margin.
-- Every diagram in `art` or `setup` is a non-empty JSON array of operation objects (`{ "op": "...", ... }`).
-- Allowed `op` types:
-  - `line`: `{ "op": "line", "x1": 20, "y1": 90, "x2": 240, "y2": 90, "role": "lk", "width": 2, "dash": [4, 4], "name": "axis" }`
-  - `arrow`: `{ "op": "arrow", "x1": 30, "y1": 90, "x2": 210, "y2": 90, "role": "hk", "width": 2.5, "head": 7, "name": "ray" }`
-  - `polyline`: `{ "op": "polyline", "points": [[30, 90], [120, 48], [210, 90]], "role": "hk", "width": 2.5, "dash": [4, 4], "name": "ray" }`
-  - `polygon`: `{ "op": "polygon", "points": [[32, 90], [215, 34], [215, 146]], "role": "s", "name": "cone" }`
-  - `rect`: `{ "op": "rect", "x": 65, "y": 24, "w": 80, "h": 52, "rx": 6, "role": "s ok", "name": "glass" }`
-  - `circle`: `{ "op": "circle", "cx": 120, "cy": 90, "r": 4, "role": "h", "name": "P" }`
-  - `ellipse`: `{ "op": "ellipse", "cx": 130, "cy": 90, "rx": 60, "ry": 35, "role": "s ok", "name": "mirror" }`
-  - `curve`: quadratic (`3` points), cubic (`4` points), or chained quadratic lens/surface (`5` points with `"closed": true`):
-    `{ "op": "curve", "points": [[120, 22], [108, 90], [120, 158], [132, 90], [120, 22]], "closed": true, "role": "s ok", "name": "lens" }`
-  - `arc`: `{ "op": "arc", "cx": 28, "cy": 105, "r": 28, "start": -28, "end": 0, "role": "lk", "width": 1.8, "name": "alpha1" }` (angles in degrees; stroke only, no fill).
-  - `text`: `{ "op": "text", "x": 130, "y": 152, "text": "Label", "size": 11, "align": "center", "role": "t", "name": "part" }`
+- **View (`view`)**: Cartesian bounding box `"bbox": [0, 180, 260, 0]` (`[left, top, right, bottom]`, with `+x` right `0..260` and `+y` upward `0..180`), `"axis": false`, `"grid": false`. Leave ~8 units of margin.
+- **Construction steps (`steps`)**: non-empty array of step objects:
+  `{ "step": 0, "name": "base", "objects": [ ... ] }`.
+  - On `derivation` cards (`setup`), `"step"` is the 0-based derivation step index at which those objects are added to the board. Base objects start at `"step": 0`; subsequent steps add triangles, rays, angles, and labels that animate in and remain visible for the rest of the derivation.
+  - On `intuition` and `info` cards (`art`), all steps in `art.steps` are shown.
+- **Allowed object `type`s in `objects`**:
+  - `point`: `{ "type": "point", "coords": [120, 90], "id": "P", "size": 3.5, "role": "f", "name": "P" }`
+  - `line`: `{ "type": "line", "p1": [14, 90], "p2": [246, 90], "straightFirst": true, "straightLast": true, "role": "lk", "width": 2, "name": "axis" }`
+  - `segment`: `{ "type": "segment", "p1": [52, 154], "p2": [52, 88], "role": "gk", "dash": 2, "width": 1.6, "name": "AM" }`
+  - `arrow`: `{ "type": "arrow", "p1": [34, 90], "p2": [210, 90], "role": "ik", "width": 2.4, "name": "ray" }`
+  - `polyline`: `{ "type": "polyline", "points": [[30, 90], [120, 132], [210, 90]], "role": "lk", "width": 2.4, "dash": 0, "name": "ray" }`
+  - `polygon`: `{ "type": "polygon", "points": [[34, 138], [34, 92], [82, 92]], "role": "s", "name": "F1" }`
+  - `curve`: quadratic (`3` points), cubic (`4` points), or chained quadratic lens/surface (`5` points with `"closed": true`):
+    `{ "type": "curve", "points": [[120, 158], [108, 90], [120, 22], [132, 90], [120, 158]], "closed": true, "role": "s ok", "name": "lens" }`
+  - `circle`: `{ "type": "circle", "center": [120, 90], "r": 25, "role": "s ok", "name": "cell" }`
+  - `ellipse`: `{ "type": "ellipse", "center": [130, 90], "rx": 60, "ry": 35, "role": "s ok", "name": "mirror" }`
+  - `arc`: `{ "type": "arc", "center": [28, 75], "r": 28, "start": 0, "end": 28, "role": "lk", "width": 1.8, "name": "alpha1" }` (angles in counter-clockwise degrees; stroke only, no fill).
+  - `angle`: `{ "type": "angle", "p1": [128, 130], "vertex": [128, 88], "p2": [52, 154], "r": 24, "label": "θ₁", "role": "lk", "name": "theta1" }`
+  - `label` (or `text`): `{ "type": "label", "coords": [130, 26], "text": "Label", "size": 11, "align": "center", "role": "t", "name": "part" }`
 
-## Palette roles (mapped to `01-tokens.css`)
+## Palette roles (mapped to `01-tokens.css` — NO yellow or amber)
 
 | `role` | token mapping | use for |
 |---|---|---|
 | `f` | fill `var(--violet)` | main points, centres, focal points |
-| `s` | fill `var(--lav-2)` | soft shaded areas, lenses, glass blocks |
+| `s` | fill `var(--lav-2)` | soft shaded areas, lenses, glass blocks, similar triangles |
 | `ok` | stroke `var(--violet)`, width 2 | outline on filled shapes (`"role": "s ok"`) |
 | `lk` | stroke `var(--violet)`, no fill | rays, surfaces, angle arcs, axes |
-| `gk` | stroke `var(--ink-2)` (0.55 alpha), no fill | normals, dashed construction guides |
-| `h` | fill `var(--amber)` | the ONE key point to look at |
-| `hk` | stroke `var(--amber)`, no fill | the ONE key ray or path |
-| `t` | fill `var(--ink)`, bold | text labels on light/lavender backgrounds |
+| `ik` | stroke `var(--ink)`, no fill | object/image arrows, secondary rays, key segments |
+| `gk` | stroke `var(--ink-2)` (0.68 alpha), no fill | normals, dashed construction guides |
+| `t` | color `var(--ink)`, bold | text labels on light/dark board backgrounds |
 | `i` | fill `var(--on-violet)`, bold | text labels on top of `f` shapes |
 
-- **Angle arcs**: whenever an angle (such as θ, φ, α, β, i or r) is shown or used, draw it with `"op": "arc"` (`"role": "lk"`, stroke only, no fill) placed **after** the lines/rays it marks so it stays visible on top.
-- **Highlightable parts (`name`)**: give each ray, triangle side, surface, angle arc and matching label a `"name": "partName"` field so derivation steps highlight them in `var(--hl)` via `"focus": ["partName"]`.
-- **Text bounds**: keep every `text` operation inside `x: 8..252` and `y: 10..176`, with no overlapping labels.
+- **No yellow**: never use `--amber` or `--hl` (or roles `h` / `hk`) in figures or maths.
+- **Zoom rule (`name` & `focus`)**: give each ray, triangle, surface, angle arc and matching label a `"name": "partName"` field. When a derivation step lists `"focus": ["partName"]`, the JSXGraph board zooms smoothly into the bounding box around those objects, and zooms back out to the full `view.bbox` overview when focus ends.
+- **Step-by-step build-up**: start each derivation figure with the base geometry at `"step": 0`, and add triangles, rays, angles, and labels in subsequent construction steps matching the derivation. Every label mentioned in a step text must appear on the figure with Ghatak's notation.
+- **Text bounds**: keep every `label` inside `x: 8..252` and `y: 10..172`, with no overlapping labels.
 
 ## Three.js (3D): ONLY for the meridional ray
 
 - Use Three.js (`three` field) on **one card only**: the meridional-ray card (`term: "meridional-ray"`), showing the optical axis (`C₁–C₂`), the flat meridional plane, the in-plane meridional ray, and the non-planar skew ray in 3D.
-- Every other diagram in the app must use the 2D Canvas operation list (`art` / `setup`).
+- Every other diagram in the app must use the declarative JSXGraph object (`art` / `setup`).
 - The runtime lazy-loads `three.min.js` (`r128`) from `cdnjs.cloudflare.com` only when that card's sheet is opened. If offline, it hides the 3D box and shows the caption and text without crashing.
 
 ## Example (as it appears inside `data.json`)
 
 ```json
-"art": [
-  { "op": "circle", "cx": 80, "cy": 95, "r": 50, "role": "s", "name": "Na" },
-  { "op": "text", "x": 80, "y": 102, "text": "Na⁺", "size": 20, "align": "center", "role": "t", "name": "Na" },
-  { "op": "circle", "cx": 180, "cy": 95, "r": 50, "role": "f", "name": "Cl" },
-  { "op": "text", "x": 180, "y": 102, "text": "Cl⁻", "size": 20, "align": "center", "role": "i", "name": "Cl" },
-  { "op": "curve", "points": [[112, 62], [130, 22], [148, 62]], "role": "hk", "width": 2.5, "dash": [5, 5], "name": "transfer" },
-  { "op": "circle", "cx": 130, "cy": 32, "r": 6, "role": "h", "name": "electron" }
-]
+"art": {
+  "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+  "steps": [
+    {
+      "step": 0,
+      "name": "ions",
+      "objects": [
+        { "type": "circle", "center": [80, 85], "r": 46, "role": "s ok", "name": "Na" },
+        { "type": "label", "coords": [80, 85], "text": "Na⁺", "size": 18, "align": "center", "role": "t", "name": "Na" },
+        { "type": "circle", "center": [180, 85], "r": 46, "role": "f", "name": "Cl" },
+        { "type": "label", "coords": [180, 85], "text": "Cl⁻", "size": 18, "align": "center", "role": "i", "name": "Cl" },
+        { "type": "curve", "points": [[112, 118], [130, 154], [148, 118]], "role": "ik", "width": 2.4, "dash": 2, "name": "transfer" },
+        { "type": "point", "coords": [130, 146], "size": 4, "role": "f", "name": "electron" }
+      ]
+    }
+  ]
+}
 ```
 
 ## Good subjects for a picture
--- a/skills/05-checklist.md
+++ b/skills/05-checklist.md
@@ -12,7 +12,7 @@
 ## JSON
 - [ ] Starts with `{` and ends with `}`. Nothing before or after. No code fence.
 - [ ] Every backslash in every string is doubled (`\\frac`, `\\(`, `\\alpha`).
-- [ ] No SVG strings remain in `art` or `setup`; every diagram is a JSON list of canvas2d operations.
+- [ ] No SVG strings or canvas2d lists remain in `art` or `setup`; every 2D diagram is a declarative JSXGraph object (`view` + construction `steps`).
 - [ ] No trailing commas. No comments.
 
 ## Structure
@@ -85,13 +85,15 @@
 - [ ] Every circuit has a circuit diagram card; every optics experiment has a set-up diagram and a graph.
 - [ ] Keep syllabus topics compact; retain a full model-paper question and rubric in the same sheet even when that exceeds 14 cards.
 
-## Canvas2D & Three.js diagrams
-- [ ] Every diagram (`art`, `setup`) is a list of canvas2d operations in `260×180` logical coordinates using only allowed roles (`f, s, ok, lk, gk, h, hk, t, i`).
-- [ ] Highlightable lines, arcs and labels have `"name"`, and every name in a derivation step's `focus` exists in that card's `setup` list.
-- [ ] Angle arcs (`"op": "arc"`) are drawn with stroke and no fill after the lines they mark.
-- [ ] Every definition-recall card has a canvas2d `art` drawing list rendered on its flip back.
+## JSXGraph, KaTeX & Three.js
+- [ ] Every 2D diagram (`art`, `setup`) is a declarative JSXGraph object with `view` (`bbox: [0, 180, 260, 0]`) and construction `steps` using only allowed non-yellow roles (`f, s, ok, lk, ik, gk, t, i`).
+- [ ] Derivation `setup.steps` build the figure up step by step (`step: 0, 1, ...`), keeping earlier objects visible, and every label mentioned in a step text appears on the figure with textbook notation (Ghatak, *Optics*).
+- [ ] Focused objects have `"name"`, every name in a derivation step's `focus` exists in that figure's construction `steps`, and `focus` zooms the JSXGraph board into the focused region and back out to the overview.
+- [ ] Every definition-recall card has a JSXGraph `art` figure rendered on its flip back.
+- [ ] All maths (`\\( ... \\)`, `\\[ ... \\]`, and MathFlow derivations) render with KaTeX (`0.19.0`); no MathJax calls remain.
 - [ ] Exactly one card uses `three` (the meridional-ray card), lazy-loaded from cdnjs when opened.
-- [ ] Maths and derivation styles use only the colour tokens from `01-tokens.css` (no hard-coded red or rose).
+- [ ] No yellow or amber highlight remains in figures or maths; only calm palette tokens from `01-tokens.css` are used.
 
 When I run `python build.py`, it prints every problem with its exact location
 (e.g. `sections[1].sheets[0].cards[3].steps[2]`). If I paste that output back to you, fix exactly
--- a/skills/06-match-and-tools.md
+++ b/skills/06-match-and-tools.md
@@ -98,7 +98,7 @@
 
 ## Maths and calculator
 
-Inline tags support MathJax `\\( ... \\)`; prefer explicit delimiters to bare
+Inline tags support KaTeX `\\( ... \\)`; prefer explicit delimiters to bare
 notation. The bundled scientific calculator opens with `=` or the toolbar button,
 uses RAD/DEG modes, and has `?` help. Numerical answer boxes can open it with `=`
 and receive a real scalar result through **Use answer**. Do not add a custom
--- a/skills/07-plain-words-and-glossary.md
+++ b/skills/07-plain-words-and-glossary.md
@@ -10,7 +10,7 @@
 
 Place an intuition card immediately before the technical introduction. Fields:
 `type = "intuition"`, `term` = glossary entry ID, `title`, `meaning`, `art`
-(required: a Canvas2D drawing list following `03-svg-art.md`, or `three` on the meridional-ray card only), `picture` (one short
+(required: a declarative JSXGraph figure with `view` and construction `steps` following `03-svg-art.md`, or `three` on the meridional-ray card only), `picture` (one short
 caption line under the diagram saying what to look at), `example` and `bridge`.
 All text fields are non-empty plain text. The app renders `art` followed by the
 `picture` caption inside the scrollable reading area.
--- a/skills/08-definition-recall.md
+++ b/skills/08-definition-recall.md
@@ -14,7 +14,7 @@
 
 Keep the concept, explanation and existing formula on the front. An unlocked
 definition card flips on a surface tap or explicit Recall button to a back face
-with a Canvas2D diagram (`art`) and a short editable answer box. Read flips it back. Use a 3D card-inner with
+with a JSXGraph figure (`art`) and a short editable answer box. Read flips it back. Use a 3D card-inner with
 front/back faces, backface visibility and inert on the inactive face. Inputs,
 buttons, links and selecting text must not trigger a flip. Flipping is available
 outside matches too. Off-centre cards return to their front after scrolling.
--- a/skills/example-minimal.json
+++ b/skills/example-minimal.json
@@ -22,13 +22,21 @@
                 "\\(\\lambda\\) = decay constant",
                 "Unit: s⁻¹"
               ],
-              "art": [
-                { "op": "line", "x1": 30, "y1": 20, "x2": 30, "y2": 155, "role": "lk", "width": 2, "name": "y-axis" },
-                { "op": "line", "x1": 30, "y1": 155, "x2": 245, "y2": 155, "role": "lk", "width": 2, "name": "x-axis" },
-                { "op": "curve", "points": [[30, 30], [80, 110], [140, 140], [240, 150]], "role": "hk", "width": 3, "name": "decay" },
-                { "op": "text", "x": 40, "y": 28, "text": "N", "size": 14, "role": "t", "name": "y-axis" },
-                { "op": "text", "x": 238, "y": 172, "text": "t", "size": 14, "align": "right", "role": "t", "name": "x-axis" }
-              ]
+              "art": {
+                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
+                "steps": [
+                  {
+                    "step": 0,
+                    "name": "decay",
+                    "objects": [
+                      { "type": "segment", "p1": [30, 160], "p2": [30, 25], "role": "lk", "width": 2, "name": "y-axis" },
+                      { "type": "segment", "p1": [30, 25], "p2": [245, 25], "role": "lk", "width": 2, "name": "x-axis" },
+                      { "type": "curve", "points": [[30, 150], [80, 70], [140, 40], [240, 30]], "role": "ik", "width": 3, "name": "decay" },
+                      { "type": "label", "coords": [42, 152], "text": "N", "size": 14, "role": "t", "name": "y-axis" },
+                      { "type": "label", "coords": [238, 12], "text": "t", "size": 14, "align": "right", "role": "t", "name": "x-axis" }
+                    ]
+                  }
+                ]
+              }
             },
             {
               "type": "derivation",
--- a/study-match/src/styles/05-cards.css
+++ b/study-match/src/styles/05-cards.css
@@ -22,12 +22,13 @@
 .intuition-art { min-height: 130px; margin: 6px 0; padding: 8px; }
 .art > svg { width: 100%; max-height: 100%; height: auto; overflow: visible; }
 .art > canvas { width: 100%; height: 100%; max-height: 100%; display: block; }
+.art > .sm-jxg { width: 100%; height: 100%; max-height: 100%; position: relative; overflow: hidden; border-radius: 12px; }
 .art .f { fill: var(--violet); }
 .art .s { fill: var(--lav-2); }
 .art .ok { stroke: var(--violet); stroke-width: 2; }
 .art .t { fill: var(--ink); font-family: inherit; font-weight: 700; }
 .art .i { fill: var(--on-violet); font-family: inherit; font-weight: 700; }
-.art .h { fill: var(--amber); }
-.art .hk { stroke: var(--amber); stroke-width: 2; stroke-linecap: round; fill: none; }
+.art .h { fill: var(--violet); }
+.art .hk { stroke: var(--ink); stroke-width: 2; stroke-linecap: round; fill: none; }
 .art .lk { stroke: var(--violet); stroke-width: 2; stroke-linecap: round; fill: none; }
 .art .gk { stroke: var(--ink-2); stroke-width: 1.6; stroke-linecap: round; fill: none; opacity: 0.5; }
 .math { font-size: 15px; width: 100%; text-align: center; overflow-x: auto; overflow-y: hidden; color: var(--ink); }
@@ -51,14 +52,14 @@
 /* Route card */
 .route-eq { background: var(--lav); border-radius: 14px; padding: 8px 10px; }
 .route-eq small { display: block; font-size: 10px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; color: var(--muted); margin-bottom: 2px; }
-.route-eq.goal { background: var(--amber-bg); box-shadow: inset 0 0 0 1.5px var(--amber); }
+.route-eq.goal { background: var(--lav-2); box-shadow: inset 0 0 0 1.5px var(--violet); }
 .route-list { list-style: none; display: flex; flex-direction: column; gap: 7px; counter-reset: r; }
 .route-list li { counter-increment: r; display: flex; gap: 9px; font-size: 12.5px; line-height: 1.4; color: var(--ink-2); }
 .route-list li::before { content: counter(r); flex: 0 0 20px; height: 20px; border-radius: 50%; background: var(--violet); color: var(--on-violet);
   font-size: 11px; font-weight: 800; display: grid; place-items: center; }
 .route-list b { color: var(--ink); }
 .legend { font-size: 12px; line-height: 1.45; color: var(--muted); }
-.page-math .mf-ann { fill: var(--hl); color: var(--hl); }
+.page-math .mf-ann { fill: var(--violet); color: var(--violet); }
 .card.mf-flip-card { perspective: 1200px; padding: 0; background: transparent; border: 0; box-shadow: none; overflow: visible; }
 .mf-card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1); }
 .card.mf-flip-card.is-flipped .mf-card-inner { transform: rotateY(180deg); }
@@ -84,5 +85,5 @@
 @keyframes shake { 20%, 60% { transform: translateX(-5px); } 40%, 80% { transform: translateX(5px); } }
 /* the one-page derivation scales down to fit the card instead of clipping the notes */
 .page-math { overflow: visible; }
-.page-math mjx-container { min-width: 0 !important; max-width: 100%; display: block; margin: 0 !important; }
-.page-math mjx-container svg { max-width: 100%; height: auto; }
+.page-math .katex-display { min-width: 0 !important; max-width: 100%; display: block; margin: 0 !important; overflow-x: auto; }
+.page-math .katex { font-size: 0.92em; }
--- a/study-match/src/styles/07-mathflow.css
+++ b/study-match/src/styles/07-mathflow.css
@@ -26,15 +26,9 @@
   min-height: calc((var(--sheet-h, 620px) - 22px) * 0.45);
   padding: 4px; border-radius: 12px; background: var(--card);
 }
-.mf-setup > svg { width: 100%; height: 100%; max-height: 100%; }
 .mf-setup > canvas { width: 100%; height: 100%; max-height: 100%; display: block; }
-.mf-setup svg text.mf-part-on { fill: var(--hl) !important; font-weight: 800; text-decoration: underline; }
-.mf-setup svg path.mf-part-on,
-.mf-setup svg line.mf-part-on,
-.mf-setup svg polyline.mf-part-on { stroke: var(--hl) !important; stroke-width: 2.8 !important; fill: none !important; }
-.mf-setup svg circle.mf-part-on,
-.mf-setup svg polygon.mf-part-on,
-.mf-setup svg rect.mf-part-on { stroke: var(--hl) !important; stroke-width: 2.4 !important; }
+.mf-setup > .sm-jxg { width: 100%; height: 100%; max-height: 100%; position: relative; overflow: hidden; border-radius: 10px; }
+.jxgbox { border: 0 !important; background: transparent !important; box-shadow: none !important; }
 .mf-stage { position: relative; width: 100%; flex: 0 0 auto; user-select: none; }
 .mf-stage[hidden], .mf-summary[hidden] { display: none; }
 .mf-summary { width: 100%; height: 100%; overflow-y: auto; padding: 6px; }
@@ -42,17 +36,19 @@
 .mf-sum-row { display: grid; grid-template-columns: 24px minmax(0, 1fr) auto; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 10px; background: var(--card); font-size: 12px; }
 .mf-sum-num { font-size: 10px; font-weight: 800; color: var(--violet); background: var(--lav); border-radius: 999px; padding: 2px 6px; text-align: center; }
 .mf-sum-eq { overflow-x: auto; color: var(--ink); font-weight: 600; }
-.mf-sum-mv { font-size: 11px; font-weight: 700; color: var(--hl); text-align: right; }
-.mf-sp { position: absolute; left: 0; top: 0; overflow: visible; color: var(--ink); transform-origin: 2px 2px; transition: color 0.6s ease; will-change: transform, opacity; }
-.mf-sp path, .mf-sp rect { fill: currentColor; stroke: none; }
-.mf-sp.is-new, .mf-sp.is-op { color: var(--hl); }
+.mf-sum-mv { font-size: 11px; font-weight: 700; color: var(--violet); text-align: right; }
+.mf-sp { position: absolute; left: 0; top: 0; display: inline-block; white-space: pre; overflow: visible; color: var(--ink); line-height: 1; transform-origin: 0 0; transition: color 0.6s ease; will-change: transform, opacity; pointer-events: none; }
+.mf-sp-bar { display: block; background: currentColor; border-radius: 1px; }
+.mf-sp-svg { display: block; overflow: hidden; }
+.mf-sp-svg svg { display: block; width: 100%; height: inherit; fill: currentColor; stroke: none; }
+.mf-sp.is-new, .mf-sp.is-op { color: var(--violet); }
 .mf-sp.is-out { color: var(--muted); }
 .mf-ghost { position: absolute; left: 0; top: 0; color: var(--ink-2); transform-origin: 0 0; white-space: nowrap;
   transition: transform 0.75s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.75s ease; }
-.mf-ghost svg { display: block; }
+.mf-ghost .katex-display { margin: 0 !important; }
 .mf-strike { position: absolute; left: 0; top: 0; height: 2.5px; border-radius: 2px; background: var(--muted); transform-origin: 0 50%; }
-.mf-box { position: absolute; left: 0; top: 0; overflow: visible; }
-.mf-box rect { fill: none; stroke: var(--violet); stroke-width: 2.4; }
+.mf-box { position: absolute; left: 0; top: 0; border: 2.2px solid var(--violet); border-radius: 10px; pointer-events: none; }
 .mf-err { position: absolute; left: 6px; right: 6px; font: 600 11px/1.4 ui-monospace, Menlo, monospace; color: var(--coral); background: var(--coral-bg); border-radius: 8px; padding: 6px 8px; white-space: pre-wrap; word-break: break-all; }
 .mf-note { font-size: 12px; line-height: 1.32; font-weight: 600; color: var(--ink-2); min-height: 26px; transition: opacity 0.2s ease; }
 .mf-note b { color: var(--ink); }
 .mf-dots { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; }
 .mf-dot { appearance: none; border: 0; cursor: pointer; height: 7px; width: 7px; border-radius: 999px; background: var(--lav-2); padding: 0; transition: width 0.3s ease, background 0.3s; }
-.mf-dot.is-ask { box-shadow: 0 0 0 2px var(--amber-bg), 0 0 0 3px var(--amber); }
+.mf-dot.is-ask { box-shadow: 0 0 0 2px var(--lav), 0 0 0 3px var(--violet); }
 .mf-dot.is-done { background: var(--violet); opacity: 0.45; }
 .mf-dot.is-now { width: 18px; background: var(--violet); opacity: 1; }
 .mf-ctrl { display: flex; gap: 5px; align-items: center; flex-wrap: wrap; }
@@ -62,7 +58,7 @@
 .card.mf-card.is-completed .mf-practise { display: inline-block; }
 .mf-panel, .mf-ask { display: flex; flex-direction: column; gap: 5px; flex: 0 0 auto; }
 .mf-ask[hidden], .mf-panel[hidden] { display: none; }
-.mf-ask-tag { align-self: flex-start; font-size: 10px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; background: var(--amber-bg); color: var(--hl); border-radius: 999px; padding: 3px 8px; }
+.mf-ask-tag { align-self: flex-start; font-size: 10px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; background: var(--lav-2); color: var(--violet); border-radius: 999px; padding: 3px 8px; }
 .mf-ask-q { font-size: 12.5px; font-weight: 700; line-height: 1.28; }
 .mf-ask-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
 .mf-ask-opts button { appearance: none; border: 0; cursor: pointer; background: var(--lav); color: var(--ink); border-radius: 10px; padding: 6px 8px; font-size: 11.5px; font-weight: 600; text-align: left; line-height: 1.22; overflow-wrap: anywhere; }
--- a/study-match/src/components/02-canvas.js
+++ /dev/null
@@ -1,379 +0,0 @@
-/* ==========================================================================
-   Canvas2D diagram renderer + lazy Three.js 3D scene for the meridional ray
-   ========================================================================== */
-(function () {
-  var SM = window.SM = window.SM || {};
-  var LOGICAL_W = 260, LOGICAL_H = 180;
-  var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
-  var threeLoading = null, ro = null, themeBound = false;
-  var activeThree = [];
-
-  function readTokens() {
-    var cs = getComputedStyle(document.documentElement);
-    var get = function (k, fb) { return (cs.getPropertyValue(k) || '').trim() || fb; };
-    return {
-      ink: get('--ink', '#1B2559'),
-      ink2: get('--ink-2', '#4A5480'),
-      lav: get('--lav', '#F1EDFB'),
-      lav2: get('--lav-2', '#DED6F6'),
-      violet: get('--violet', '#6A55D8'),
-      onViolet: get('--on-violet', '#FFFFFF'),
-      amber: get('--amber', '#F6B72B'),
-      hl: get('--hl', '#C98200'),
-      card: get('--card', '#FFFFFF'),
-      font: get('--font', '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif')
-    };
-  }
-
-  function hasRole(roleStr, token) {
-    if (!roleStr) return false;
-    return (' ' + roleStr + ' ').indexOf(' ' + token + ' ') !== -1;
-  }
-
-  function applyFill(ctx, role, tok) {
-    if (hasRole(role, 'h')) { ctx.fillStyle = tok.amber; return true; }
-    if (hasRole(role, 'f')) { ctx.fillStyle = tok.violet; return true; }
-    if (hasRole(role, 's')) { ctx.fillStyle = tok.lav2; return true; }
-    return false;
-  }
-
-  function applyStroke(ctx, op, tok, focused) {
-    var role = op.role || 'lk';
-    var w = op.width || (hasRole(role, 'gk') ? 1.6 : 2);
-    ctx.lineCap = 'round';
-    ctx.lineJoin = 'round';
-    ctx.setLineDash(Array.isArray(op.dash) ? op.dash : []);
-    if (focused) {
-      ctx.strokeStyle = tok.hl;
-      ctx.lineWidth = Math.max(w + 0.6, 2.8);
-      ctx.globalAlpha = 1;
-      return true;
-    }
-    if (hasRole(role, 'hk')) { ctx.strokeStyle = tok.amber; ctx.lineWidth = w; ctx.globalAlpha = 1; return true; }
-    if (hasRole(role, 'lk') || hasRole(role, 'ok')) { ctx.strokeStyle = tok.violet; ctx.lineWidth = w; ctx.globalAlpha = 1; return true; }
-    if (hasRole(role, 'gk')) { ctx.strokeStyle = tok.ink2; ctx.lineWidth = w; ctx.globalAlpha = 0.55; return true; }
-    return false;
-  }
-
-  function traceCurve(ctx, pts, closed) {
-    if (!pts || pts.length < 2) return;
-    ctx.beginPath();
-    ctx.moveTo(pts[0][0], pts[0][1]);
-    if (pts.length === 3) {
-      ctx.quadraticCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1]);
-    } else if (pts.length === 4) {
-      ctx.bezierCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1], pts[3][0], pts[3][1]);
-    } else if (pts.length >= 5 && pts.length % 2 === 1) {
-      for (var i = 1; i < pts.length - 1; i += 2) {
-        ctx.quadraticCurveTo(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
-      }
-    } else {
-      for (var j = 1; j < pts.length; j++) ctx.lineTo(pts[j][0], pts[j][1]);
-    }
-    if (closed) ctx.closePath();
-  }
-
-  function drawOps(container) {
-    var ops = container._ops;
-    if (!ops || !ops.length) return;
-    var canvas = container.querySelector('canvas.sm-canvas');
-    if (!canvas) {
-      canvas = document.createElement('canvas');
-      canvas.className = 'sm-canvas';
-      canvas.setAttribute('aria-hidden', 'true');
-      container.innerHTML = '';
-      container.appendChild(canvas);
-    }
-    var rect = canvas.getBoundingClientRect();
-    var cw = canvas.clientWidth || rect.width || 236;
-    var ch = canvas.clientHeight || rect.height || 136;
-    var dpr = Math.max(window.devicePixelRatio || 1, 1);
-    var pw = Math.max(1, Math.round(cw * dpr));
-    var ph = Math.max(1, Math.round(ch * dpr));
-    if (canvas.width !== pw || canvas.height !== ph) {
-      canvas.width = pw;
-      canvas.height = ph;
-    }
-    var ctx = canvas.getContext('2d');
-    if (!ctx) return;
-    var scale = Math.min(cw / LOGICAL_W, ch / LOGICAL_H);
-    var ox = (cw - LOGICAL_W * scale) / 2;
-    var oy = (ch - LOGICAL_H * scale) / 2;
-    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
-    ctx.clearRect(0, 0, cw, ch);
-    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * ox, dpr * oy);
-
-    var tok = readTokens();
-    var focusSet = container._focusSet || null;
-
-    ops.forEach(function (op) {
-      var name = op.name || op.part || '';
-      var focused = !!(focusSet && name && focusSet[name]);
-      var role = op.role || '';
-      ctx.save();
-      switch (op.op) {
-        case 'line':
-          ctx.beginPath();
-          ctx.moveTo(op.x1, op.y1);
-          ctx.lineTo(op.x2, op.y2);
-          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          break;
-        case 'arrow':
-          ctx.beginPath();
-          ctx.moveTo(op.x1, op.y1);
-          ctx.lineTo(op.x2, op.y2);
-          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          var ang = Math.atan2(op.y2 - op.y1, op.x2 - op.x1);
-          var head = op.head || 7;
-          ctx.setLineDash([]);
-          ctx.globalAlpha = 1;
-          ctx.fillStyle = focused ? tok.hl : (hasRole(role, 'hk') ? tok.amber : (hasRole(role, 'gk') ? tok.ink2 : tok.violet));
-          ctx.beginPath();
-          ctx.moveTo(op.x2, op.y2);
-          ctx.lineTo(op.x2 - head * Math.cos(ang - 0.42), op.y2 - head * Math.sin(ang - 0.42));
-          ctx.lineTo(op.x2 - head * Math.cos(ang + 0.42), op.y2 - head * Math.sin(ang + 0.42));
-          ctx.closePath();
-          ctx.fill();
-          break;
-        case 'polyline':
-        case 'polygon':
-          var pts = op.points || [];
-          if (pts.length >= 2) {
-            ctx.beginPath();
-            ctx.moveTo(pts[0][0], pts[0][1]);
-            for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
-            if (op.op === 'polygon') ctx.closePath();
-            if (op.op === 'polygon' && applyFill(ctx, role, tok)) ctx.fill();
-            if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          }
-          break;
-        case 'rect':
-          var rx = op.rx || 0, x = op.x, y = op.y, w = op.w, h = op.h;
-          ctx.beginPath();
-          if (rx > 0 && ctx.roundRect) ctx.roundRect(x, y, w, h, rx);
-          else ctx.rect(x, y, w, h);
-          if (applyFill(ctx, role, tok)) ctx.fill();
-          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          break;
-        case 'circle':
-          ctx.beginPath();
-          ctx.arc(op.cx, op.cy, op.r, 0, Math.PI * 2);
-          if (applyFill(ctx, role || 'f', tok)) ctx.fill();
-          if (focused || hasRole(role, 'ok') || hasRole(role, 'lk') || hasRole(role, 'hk')) {
-            if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          }
-          break;
-        case 'ellipse':
-          ctx.beginPath();
-          ctx.ellipse(op.cx, op.cy, op.rx, op.ry, 0, 0, Math.PI * 2);
-          if (applyFill(ctx, role, tok)) ctx.fill();
-          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          break;
-        case 'curve':
-          traceCurve(ctx, op.points, !!op.closed);
-          if (op.closed && applyFill(ctx, role, tok)) ctx.fill();
-          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          break;
-        case 'arc':
-          ctx.beginPath();
-          ctx.arc(op.cx, op.cy, op.r, (op.start || 0) * Math.PI / 180, (op.end || 0) * Math.PI / 180, !!op.ccw);
-          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
-          break;
-        case 'text':
-          var sz = op.size || 11;
-          var weight = focused ? '800' : '700';
-          ctx.font = weight + ' ' + sz + 'px ' + tok.font;
-          var align = op.align || 'left';
-          if (align === 'middle') align = 'center';
-          if (align === 'end') align = 'right';
-          ctx.textAlign = align;
-          ctx.textBaseline = 'alphabetic';
-          ctx.fillStyle = focused ? tok.hl : (hasRole(role, 'i') ? tok.onViolet : tok.ink);
-          var txt = String(op.text || '');
-          ctx.fillText(txt, op.x, op.y);
-          if (focused && txt) {
-            var tw = ctx.measureText(txt).width;
-            var ux = op.x;
-            if (align === 'center') ux -= tw / 2;
-            else if (align === 'right') ux -= tw;
-            ctx.strokeStyle = tok.hl;
-            ctx.lineWidth = 1.4;
-            ctx.setLineDash([]);
-            ctx.beginPath();
-            ctx.moveTo(ux, op.y + 2);
-            ctx.lineTo(ux + tw, op.y + 2);
-            ctx.stroke();
-          }
-          break;
-      }
-      ctx.restore();
-    });
-  }
-
-  function loadThreeScript(cb) {
-    if (window.THREE) { cb(true); return; }
-    if (threeLoading) { threeLoading.push(cb); return; }
-    threeLoading = [cb];
-    var s = document.createElement('script');
-    s.src = THREE_URL;
-    s.async = true;
-    s.onload = function () {
-      var list = threeLoading || [];
-      threeLoading = null;
-      list.forEach(function (fn) { fn(!!window.THREE); });
-    };
-    s.onerror = function () {
-      var list = threeLoading || [];
-      threeLoading = null;
-      list.forEach(function (fn) { fn(false); });
-    };
-    document.head.appendChild(s);
-  }
-
-  function makeLabelSprite(THREE, text, colorStr, fontStr) {
-    var c = document.createElement('canvas');
-    c.width = 256; c.height = 64;
-    var ctx = c.getContext('2d');
-    ctx.font = '700 24px ' + fontStr;
-    ctx.textAlign = 'center';
-    ctx.textBaseline = 'middle';
-    ctx.fillStyle = colorStr;
-    ctx.fillText(text, 128, 32);
-    var tex = new THREE.CanvasTexture(c);
-    var mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
-    var sp = new THREE.Sprite(mat);
-    sp.scale.set(1.35, 0.34, 1);
-    return sp;
-  }
-
-  function mountThreeScene(container, spec) {
-    if (container._threeMounted || container._threeFailed) return;
-    container._threeMounted = true;
-    loadThreeScript(function (ok) {
-      if (!ok || !window.THREE) {
-        container._threeFailed = true;
-        container.hidden = true;
-        return;
-      }
-      var THREE = window.THREE;
-      var renderer;
-      try {
-        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
-      } catch (e) {
-        container._threeFailed = true;
-        container.hidden = true;
-        return;
-      }
-      container.hidden = false;
-      container.innerHTML = '';
-      renderer.domElement.className = 'sm-canvas';
-      container.appendChild(renderer.domElement);
-      var scene = new THREE.Scene();
-      var camera = new THREE.PerspectiveCamera(34, 260 / 180, 0.1, 50);
-      camera.position.set(0, 1.05, 4.7);
-      camera.lookAt(0, 0, 0);
-      var rootGroup = new THREE.Group();
-      rootGroup.rotation.x = 0.24;
-      rootGroup.rotation.y = -0.34;
-      scene.add(rootGroup);
-
-      function buildObjects() {
-        while (rootGroup.children.length) rootGroup.remove(rootGroup.children[0]);
-        var tok = readTokens();
-        var pw = (spec.plane && spec.plane.width) || 4.4;
-        var ph = (spec.plane && spec.plane.height) || 2.1;
-        var pGeo = new THREE.PlaneGeometry(pw, ph);
-        var pMat = new THREE.MeshBasicMaterial({ color: tok.lav2, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false });
-        rootGroup.add(new THREE.Mesh(pGeo, pMat));
-
-        var bPts = [
-          new THREE.Vector3(-pw / 2, -ph / 2, 0), new THREE.Vector3(pw / 2, -ph / 2, 0),
-          new THREE.Vector3(pw / 2, ph / 2, 0), new THREE.Vector3(-pw / 2, ph / 2, 0),
-          new THREE.Vector3(-pw / 2, -ph / 2, 0)
-        ];
-        rootGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bPts), new THREE.LineBasicMaterial({ color: tok.violet })));
-
-        var ax = spec.axis || { from: [-2.2, 0, 0], to: [2.2, 0, 0] };
-        var axGeo = new THREE.BufferGeometry().setFromPoints([
-          new THREE.Vector3(ax.from[0], ax.from[1], ax.from[2]),
-          new THREE.Vector3(ax.to[0], ax.to[1], ax.to[2])
-        ]);
-        rootGroup.add(new THREE.Line(axGeo, new THREE.LineBasicMaterial({ color: tok.violet })));
-
-        (spec.surfaces || []).forEach(function (sf) {
-          var rPts = [];
-          for (var a = 0; a <= 32; a++) {
-            var th = (a / 32) * Math.PI * 2;
-            rPts.push(new THREE.Vector3(sf.x, Math.cos(th) * sf.r, Math.sin(th) * sf.r));
-          }
-          rootGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rPts), new THREE.LineBasicMaterial({ color: tok.violet, transparent: true, opacity: 0.4 })));
-        });
-
-        if (spec.meridionalRay && spec.meridionalRay.points) {
-          var mVecs = spec.meridionalRay.points.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); });
-          var mCurve = new THREE.CatmullRomCurve3(mVecs, false, 'catmullrom', 0.02);
-          var tube = new THREE.TubeGeometry(mCurve, 32, 0.038, 8, false);
-          rootGroup.add(new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: tok.amber })));
-          if (spec.meridionalRay.label) {
-            var mLbl = makeLabelSprite(THREE, spec.meridionalRay.label, tok.hl, tok.font);
-            mLbl.position.set(0, 0.88, 0);
-            rootGroup.add(mLbl);
-          }
-        }
-
-        if (spec.skewRay && spec.skewRay.points) {
-          var sVecs = spec.skewRay.points.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); });
-          var sGeo = new THREE.BufferGeometry().setFromPoints(sVecs);
-          var sLine = new THREE.Line(sGeo, new THREE.LineDashedMaterial({ color: tok.ink2, dashSize: 0.14, gapSize: 0.09 }));
-          if (sLine.computeLineDistances) sLine.computeLineDistances();
-          rootGroup.add(sLine);
-          if (spec.skewRay.label) {
-            var sLbl = makeLabelSprite(THREE, spec.skewRay.label, tok.ink2, tok.font);
-            sLbl.position.set(0.15, -0.82, 0.35);
-            rootGroup.add(sLbl);
-          }
-        }
-
-        (spec.points || []).forEach(function (pt) {
-          var spGeo = new THREE.SphereGeometry(0.068, 14, 14);
-          var col = pt.role === 'h' ? tok.amber : tok.violet;
-          var mesh = new THREE.Mesh(spGeo, new THREE.MeshBasicMaterial({ color: col }));
-          mesh.position.set(pt.pos[0], pt.pos[1], pt.pos[2]);
-          rootGroup.add(mesh);
-          if (pt.label) {
-            var lb = makeLabelSprite(THREE, pt.label, tok.ink, tok.font);
-            lb.scale.set(0.65, 0.26, 1);
-            lb.position.set(pt.pos[0], pt.pos[1] + (pt.pos[1] > 0.1 ? 0.22 : -0.22), pt.pos[2]);
-            rootGroup.add(lb);
-          }
-        });
-      }
-
-      function resizeThree() {
-        var cw = container.clientWidth || 236;
-        var ch = container.clientHeight || 136;
-        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-        renderer.setSize(cw, ch, false);
-        camera.aspect = cw / Math.max(ch, 1);
-        camera.updateProjectionMatrix();
-        renderer.render(scene, camera);
-      }
-
-      buildObjects();
-      resizeThree();
-
-      var dragging = false, lastX = 0, lastY = 0;
-      renderer.domElement.addEventListener('pointerdown', function (e) {
-        dragging = true; lastX = e.clientX; lastY = e.clientY;
-        e.stopPropagation();
-      });
-      window.addEventListener('pointermove', function (e) {
-        if (!dragging) return;
-        rootGroup.rotation.y += (e.clientX - lastX) * 0.01;
-        rootGroup.rotation.x = Math.max(-0.7, Math.min(0.8, rootGroup.rotation.x + (e.clientY - lastY) * 0.01));
-        lastX = e.clientX; lastY = e.clientY;
-        renderer.render(scene, camera);
-      });
-      window.addEventListener('pointerup', function () { dragging = false; });
-
-      activeThree.push({ container: container, rebuild: function () { buildObjects(); resizeThree(); }, resize: resizeThree });
-    });
-  }
-
-  function checkLazyThree() {
-    document.querySelectorAll('[data-three]').forEach(function (el) {
-      if (el._threeMounted || el._threeFailed) return;
-      var cardEl = el.closest('.card');
-      var sheetEl = el.closest('.sheet');
-      if (!cardEl || ! cardEl._c || !cardEl._c.three) return;
-      if (sheetEl && sheetEl.classList.contains('is-open')) {
-        mountThreeScene(el, cardEl._c.three);
-      }
-    });
-  }
-
-  function mountAll() {
-    if (!ro && 'ResizeObserver' in window) {
-      ro = new ResizeObserver(function (entries) {
-        entries.forEach(function (en) {
-          var el = en.target;
-          if (el._ops) drawOps(el);
-          else if (el.hasAttribute('data-three')) {
-            activeThree.forEach(function (item) { if (item.container === el) item.resize(); });
-          }
-        });
-      });
-    }
-    document.querySelectorAll('[data-canvas]').forEach(function (el) {
-      var cardEl = el.closest('.card');
-      var c = cardEl && cardEl._c;
-      if (!c) return;
-      var key = el.getAttribute('data-canvas');
-      var ops = key === 'setup' ? ((c.d && (c.d.setup || c.d.art)) || c.setup) : c.art;
-      if (Array.isArray(ops) && ops.length) {
-        el._ops = ops;
-        drawOps(el);
-        if (ro) ro.observe(el);
-      }
-    });
-    document.querySelectorAll('[data-three]').forEach(function (el) {
-      if (ro) ro.observe(el);
-      var sheetEl = el.closest('.sheet');
-      if (sheetEl && !sheetEl._threeObserved && 'MutationObserver' in window) {
-        sheetEl._threeObserved = true;
-        new MutationObserver(checkLazyThree).observe(sheetEl, { attributes: true, attributeFilter: ['class'] });
-      }
-    });
-    checkLazyThree();
-    if (!themeBound && 'MutationObserver' in window) {
-      themeBound = true;
-      new MutationObserver(function () { SM.Canvas.redraw(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
-      if (window.matchMedia) {
-        var mq = window.matchMedia('(prefers-color-scheme: dark)');
-        if (mq.addEventListener) mq.addEventListener('change', function () { SM.Canvas.redraw(); });
-      }
-      window.addEventListener('resize', function () { SM.Canvas.redraw(); });
-    }
-  }
-
-  SM.Canvas = {
-    mountAll: mountAll,
-    redraw: function (root) {
-      var scope = root || document;
-      scope.querySelectorAll('[data-canvas]').forEach(function (el) { if (el._ops) drawOps(el); });
-      activeThree.forEach(function (item) {
-        if (!root || root.contains(item.container)) item.rebuild();
-      });
-      checkLazyThree();
-    },
-    setFocus: function (setupEl, focusList) {
-      if (!setupEl) return;
-      var set = {};
-      (focusList || []).forEach(function (k) { if (k) set[k] = 1; });
-      setupEl._focusSet = set;
-      if (setupEl._ops) drawOps(setupEl);
-    }
-  };
-})();
--- /dev/null
+++ b/study-match/src/components/02-diagram.js
@@ -0,0 +1,575 @@
+/* ==========================================================================
+   JSXGraph 1.14.0 declarative diagram renderer + step-by-step build-up + zoom
+   Plus lazy-loaded Three.js r128 3D scene for the meridional ray only
+   ========================================================================== */
+(function () {
+  var SM = window.SM = window.SM || {};
+  var DEFAULT_BBOX = [0, 180, 260, 0];
+  var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
+  var threeLoading = null, ro = null, themeBound = false, jxgSeq = 0;
+  var activeThree = [];
+
+  function readTokens() {
+    var cs = getComputedStyle(document.documentElement);
+    var get = function (k, fb) { return (cs.getPropertyValue(k) || '').trim() || fb; };
+    return {
+      ink: get('--ink', '#1B2559'),
+      ink2: get('--ink-2', '#4A5480'),
+      muted: get('--muted', '#8C92B0'),
+      lav: get('--lav', '#F1EDFB'),
+      lav2: get('--lav-2', '#DED6F6'),
+      violet: get('--violet', '#6A55D8'),
+      onViolet: get('--on-violet', '#FFFFFF'),
+      sage: get('--sage', '#2F9466'),
+      card: get('--card', '#FFFFFF'),
+      font: get('--font', '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif')
+    };
+  }
+
+  function hasDiagram(diag) {
+    return !!(diag && typeof diag === 'object' && Array.isArray(diag.steps) && diag.steps.length > 0);
+  }
+
+  function hasRole(roleStr, token) {
+    if (!roleStr) return false;
+    return (' ' + roleStr + ' ').indexOf(' ' + token + ' ') !== -1;
+  }
+
+  function jxgReady(cb) {
+    if (window.JXG && window.JXG.JSXGraph) { cb(true); return; }
+    var tries = 0;
+    var timer = setInterval(function () {
+      tries++;
+      if (window.JXG && window.JXG.JSXGraph) {
+        clearInterval(timer);
+        cb(true);
+      } else if (tries > 250) {
+        clearInterval(timer);
+        cb(false);
+      }
+    }, 40);
+  }
+
+  function sampleCurvePoints(pts, closed) {
+    var xs = [], ys = [];
+    if (!pts || pts.length < 2) return [xs, ys];
+    function pushPt(x, y) { xs.push(x); ys.push(y); }
+    function quad(p0, p1, p2, n) {
+      for (var i = 0; i <= n; i++) {
+        var t = i / n, u = 1 - t;
+        pushPt(u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
+               u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]);
+      }
+    }
+    if (pts.length === 3) {
+      quad(pts[0], pts[1], pts[2], 32);
+    } else if (pts.length === 4) {
+      for (var k = 0; k <= 36; k++) {
+        var t = k / 36, u = 1 - t;
+        pushPt(u * u * u * pts[0][0] + 3 * u * u * t * pts[1][0] + 3 * u * t * t * pts[2][0] + t * t * t * pts[3][0],
+               u * u * u * pts[0][1] + 3 * u * u * t * pts[1][1] + 3 * u * t * t * pts[2][1] + t * t * t * pts[3][1]);
+      }
+    } else if (pts.length >= 5 && pts.length % 2 === 1) {
+      for (var j = 0; j < pts.length - 2; j += 2) {
+        quad(pts[j], pts[j + 1], pts[j + 2], 24);
+      }
+    } else {
+      for (var m = 0; m < pts.length; m++) pushPt(pts[m][0], pts[m][1]);
+    }
+    if (closed && xs.length) pushPt(xs[0], ys[0]);
+    return [xs, ys];
+  }
+
+  function boundsOfCoords(list, pad) {
+    pad = pad || 0;
+    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
+    list.forEach(function (p) {
+      if (!p || typeof p[0] !== 'number' || typeof p[1] !== 'number') return;
+      if (p[0] < minX) minX = p[0];
+      if (p[0] > maxX) maxX = p[0];
+      if (p[1] < minY) minY = p[1];
+      if (p[1] > maxY) maxY = p[1];
+    });
+    if (minX === Infinity) return { minX: 0, maxX: 260, minY: 0, maxY: 180 };
+    return { minX: minX - pad, maxX: maxX + pad, minY: minY - pad, maxY: maxY + pad };
+  }
+
+  function resolveCoords(state, ref) {
+    if (Array.isArray(ref) && ref.length >= 2) return [Number(ref[0]), Number(ref[1])];
+    if (typeof ref === 'string' && state.coordsMap[ref]) return state.coordsMap[ref].slice();
+    return [0, 0];
+  }
+
+  function makeHiddenPoint(board, xy) {
+    return board.create('point', [xy[0], xy[1]], {
+      visible: false, fixed: true, withLabel: false, name: '', showInfobox: false
+    });
+  }
+
+  function roleStyle(role, obj, tok) {
+    var strokeColor = tok.violet;
+    if (hasRole(role, 'ik')) strokeColor = tok.ink;
+    else if (hasRole(role, 'gk')) strokeColor = tok.ink2;
+    var strokeOpacity = hasRole(role, 'gk') ? 0.68 : 1;
+    var fillColor = 'none', fillOpacity = 0;
+    if (hasRole(role, 'f')) { fillColor = tok.violet; fillOpacity = 1; }
+    else if (hasRole(role, 's')) { fillColor = tok.lav2; fillOpacity = 0.55; }
+    var dash = 0;
+    if (obj.dash) dash = 2;
+    else if (hasRole(role, 'gk') && obj.dash !== 0) dash = 2;
+    var width = obj.width || (hasRole(role, 'gk') ? 1.5 : 2);
+    return {
+      strokeColor: strokeColor,
+      strokeOpacity: strokeOpacity,
+      fillColor: fillColor,
+      fillOpacity: fillOpacity,
+      dash: dash,
+      strokeWidth: width
+    };
+  }
+
+  function createObject(board, state, obj, tok, stepNum, visibleNow, stepName) {
+    var role = obj.role || 'lk';
+    var st = roleStyle(role, obj, tok);
+    var created = [];
+    var bds = null;
+    var common = {
+      fixed: true,
+      highlight: false,
+      withLabel: false,
+      visible: visibleNow
+    };
+
+    switch (obj.type) {
+      case 'point': {
+        var c = resolveCoords(state, obj.coords || [obj.x, obj.y]);
+        if (obj.id) state.coordsMap[obj.id] = c;
+        if (obj.name && !state.coordsMap[obj.name]) state.coordsMap[obj.name] = c;
+        var pt = board.create('point', c, {
+          fixed: true,
+          highlight: false,
+          showInfobox: false,
+          visible: visibleNow,
+          name: obj.label || '',
+          withLabel: !!obj.label,
+          size: obj.size || 3.2,
+          fillColor: hasRole(role, 's') ? tok.lav2 : tok.violet,
+          fillOpacity: 1,
+          strokeColor: tok.violet,
+          strokeWidth: 1.5,
+          label: {
+            offset: obj.offset || [6, 8],
+            color: tok.ink,
+            fontSize: obj.fontSize || 11,
+            highlight: false,
+            cssStyle: 'font-weight:700;font-family:' + tok.font
+          }
+        });
+        created.push(pt);
+        if (obj.id) state.points[obj.id] = pt;
+        bds = boundsOfCoords([c], 14);
+        break;
+      }
+      case 'line':
+      case 'segment':
+      case 'arrow': {
+        var p1 = resolveCoords(state, obj.p1 || [obj.x1, obj.y1]);
+        var p2 = resolveCoords(state, obj.p2 || [obj.x2, obj.y2]);
+        var hp1 = makeHiddenPoint(board, p1);
+        var hp2 = makeHiddenPoint(board, p2);
+        var lAttrs = {
+          fixed: true,
+          highlight: false,
+          visible: visibleNow,
+          withLabel: !!obj.label,
+          name: obj.label || '',
+          strokeColor: st.strokeColor,
+          strokeOpacity: st.strokeOpacity,
+          strokeWidth: st.strokeWidth,
+          dash: st.dash,
+          straightFirst: obj.type === 'line' ? (obj.straightFirst !== false) : false,
+          straightLast: obj.type === 'line' ? (obj.straightLast !== false) : false
+        };
+        if (obj.type === 'arrow') {
+          lAttrs.lastArrow = { type: 2, size: 6 };
+        }
+        var seg = board.create(obj.type === 'arrow' ? 'arrow' : (obj.type === 'line' ? 'line' : 'segment'), [hp1, hp2], lAttrs);
+        created.push(seg);
+        bds = boundsOfCoords([p1, p2], 10);
+        break;
+      }
+      case 'polygon': {
+        var rawPts = (obj.points || []).map(function (p) { return resolveCoords(state, p); });
+        if (rawPts.length >= 3) {
+          var hPts = rawPts.map(function (p) { return makeHiddenPoint(board, p); });
+          var hasBorder = hasRole(role, 'ok') || hasRole(role, 'lk') || hasRole(role, 'ik');
+          var poly = board.create('polygon', hPts, {
+            fixed: true,
+            highlight: false,
+            hasInnerPoints: false,
+            visible: visibleNow,
+            withLines: hasBorder,
+            fillColor: st.fillColor === 'none' ? tok.lav2 : st.fillColor,
+            fillOpacity: st.fillOpacity || 0.5,
+            vertices: { visible: false },
+            borders: {
+              visible: visibleNow && hasBorder,
+              highlight: false,
+              strokeColor: st.strokeColor,
+              strokeWidth: st.strokeWidth,
+              dash: st.dash
+            }
+          });
+          created.push(poly);
+          if (poly.borders) {
+            poly.borders.forEach(function (b) { created.push(b); });
+          }
+          bds = boundsOfCoords(rawPts, 8);
+        }
+        break;
+      }
+      case 'polyline':
+      case 'curve': {
+        var cPts = (obj.points || []).map(function (p) { return resolveCoords(state, p); });
+        var xy = (obj.type === 'polyline' || obj.smooth === false)
+          ? [cPts.map(function (p) { return p[0]; }), cPts.map(function (p) { return p[1]; })]
+          : sampleCurvePoints(cPts, !!obj.closed);
+        if (obj.closed && obj.type === 'polyline' && xy[0].length) {
+          xy[0].push(xy[0][0]); xy[1].push(xy[1][0]);
+        }
+        var crv = board.create('curve', [xy[0], xy[1]], {
+          fixed: true,
+          highlight: false,
+          visible: visibleNow,
+          withLabel: false,
+          strokeColor: st.strokeColor,
+          strokeOpacity: st.strokeOpacity,
+          strokeWidth: st.strokeWidth,
+          dash: st.dash,
+          fillColor: obj.closed ? st.fillColor : 'none',
+          fillOpacity: obj.closed ? st.fillOpacity : 0
+        });
+        created.push(crv);
+        bds = boundsOfCoords(cPts, 8);
+        break;
+      }
+      case 'circle': {
+        var ctr = resolveCoords(state, obj.center || [obj.cx, obj.cy]);
+        var r = Number(obj.r || 10);
+        var hCtr = makeHiddenPoint(board, ctr);
+        var cir = board.create('circle', [hCtr, r], {
+          fixed: true,
+          highlight: false,
+          visible: visibleNow,
+          withLabel: false,
+          strokeColor: (hasRole(role, 'ok') || hasRole(role, 'lk') || hasRole(role, 'ik')) ? st.strokeColor : 'none',
+          strokeWidth: st.strokeWidth,
+          fillColor: st.fillColor,
+          fillOpacity: st.fillOpacity
+        });
+        created.push(cir);
+        bds = boundsOfCoords([[ctr[0] - r, ctr[1] - r], [ctr[0] + r, ctr[1] + r]], 6);
+        break;
+      }
+      case 'ellipse': {
+        var ectr = resolveCoords(state, obj.center || [obj.cx, obj.cy]);
+        var rx = Number(obj.rx || 20), ry = Number(obj.ry || 12);
+        var ex = [], ey = [];
+        for (var a = 0; a <= 48; a++) {
+          var th = (a / 48) * Math.PI * 2;
+          ex.push(ectr[0] + rx * Math.cos(th));
+          ey.push(ectr[1] + ry * Math.sin(th));
+        }
+        var elp = board.create('curve', [ex, ey], {
+          fixed: true,
+          highlight: false,
+          visible: visibleNow,
+          withLabel: false,
+          strokeColor: st.strokeColor,
+          strokeWidth: st.strokeWidth,
+          fillColor: st.fillColor,
+          fillOpacity: st.fillOpacity
+        });
+        created.push(elp);
+        bds = boundsOfCoords([[ectr[0] - rx, ectr[1] - ry], [ectr[0] + rx, ectr[1] + ry]], 6);
+        break;
+      }
+      case 'arc': {
+        var actr = resolveCoords(state, obj.center || [obj.cx, obj.cy]);
+        var ar = Number(obj.r || 22);
+        var sDeg = Number(obj.start || 0) * Math.PI / 180;
+        var eDeg = Number(obj.end || 0) * Math.PI / 180;
+        var pStart = [actr[0] + ar * Math.cos(sDeg), actr[1] + ar * Math.sin(sDeg)];
+        var pEnd = [actr[0] + ar * Math.cos(eDeg), actr[1] + ar * Math.sin(eDeg)];
+        var hc = makeHiddenPoint(board, actr);
+        var hs = makeHiddenPoint(board, pStart);
+        var he = makeHiddenPoint(board, pEnd);
+        var arcEl = board.create('arc', [hc, hs, he], {
+          fixed: true,
+          highlight: false,
+          visible: visibleNow,
+          withLabel: false,
+          strokeColor: st.strokeColor,
+          strokeOpacity: st.strokeOpacity,
+          strokeWidth: st.strokeWidth,
+          fillColor: 'none',
+          fillOpacity: 0
+        });
+        created.push(arcEl);
+        bds = boundsOfCoords([actr, pStart, pEnd], 12);
+        break;
+      }
+      case 'angle': {
+        var ap1 = makeHiddenPoint(board, resolveCoords(state, obj.p1));
+        var av = makeHiddenPoint(board, resolveCoords(state, obj.vertex));
+        var ap2 = makeHiddenPoint(board, resolveCoords(state, obj.p2));
+        var angEl = board.create('nonreflexangle', [ap1, av, ap2], {
+          fixed: true,
+          highlight: false,
+          visible: visibleNow,
+          radius: obj.r || 22,
+          name: obj.label || '',
+          withLabel: !!obj.label,
+          fillColor: tok.lav2,
+          fillOpacity: 0.35,
+          strokeColor: st.strokeColor,
+          strokeWidth: st.strokeWidth
+        });
+        created.push(angEl);
+        bds = boundsOfCoords([resolveCoords(state, obj.vertex)], (obj.r || 22) + 12);
+        break;
+      }
+      case 'label':
+      case 'text': {
+        var tc = resolveCoords(state, obj.coords || [obj.x, obj.y]);
+        var align = obj.align || 'left';
+        if (align === 'center') align = 'middle';
+        var txtColor = hasRole(role, 'i') ? tok.onViolet : tok.ink;
+        var txtEl = board.create('text', [tc[0], tc[1], String(obj.text || '')], Object.assign({}, common, {
+          anchorX: align,
+          anchorY: 'middle',
+          fontSize: obj.size || 11,
+          color: txtColor,
+          cssStyle: 'font-weight:700;white-space:nowrap;font-family:' + tok.font
+        }));
+        created.push(txtEl);
+        var halfW = Math.max(12, String(obj.text || '').length * 3.8);
+        bds = boundsOfCoords([[tc[0] - halfW, tc[1] - 8], [tc[0] + halfW, tc[1] + 8]], 4);
+        break;
+      }
+    }
+
+    if (created.length) {
+      state.items.push({
+        name: obj.name || stepName || '',
+        step: stepNum,
+        els: created,
+        bounds: bds || { minX: 0, maxX: 260, minY: 0, maxY: 180 },
+        targetStrokeOp: st.strokeOpacity,
+        targetFillOp: st.fillOpacity,
+        visible: visibleNow
+      });
+    }
+  }
+
+  function fitBBoxToContainer(bbox, cw, ch) {
+    var x1 = bbox[0], y1 = bbox[1], x2 = bbox[2], y2 = bbox[3];
+    var w = x2 - x1, h = y1 - y2;
+    if (!cw || !ch || cw < 10 || ch < 10) return [x1, y1, x2, y2];
+    var ar = cw / ch;
+    var cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
+    if (w / h < ar) w = h * ar;
+    else h = w / ar;
+    return [cx - w / 2, cy + h / 2, cx + w / 2, cy - h / 2];
+  }
+
+  function computeFocusBBox(state, focusList) {
+    var base = state.baseBBox;
+    var cw = state.holder ? state.holder.clientWidth : 260;
+    var ch = state.holder ? state.holder.clientHeight : 180;
+    if (!focusList || !focusList.length) {
+      return fitBBoxToContainer(base, cw, ch);
+    }
+    var set = {};
+    focusList.forEach(function (k) { if (k) set[k] = 1; });
+    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, hits = 0;
+    state.items.forEach(function (it) {
+      if (!it.visible || !it.name || !set[it.name]) return;
+      hits++;
+      if (it.bounds.minX < minX) minX = it.bounds.minX;
+      if (it.bounds.maxX > maxX) maxX = it.bounds.maxX;
+      if (it.bounds.minY < minY) minY = it.bounds.minY;
+      if (it.bounds.maxY > maxY) maxY = it.bounds.maxY;
+    });
+    if (!hits) return fitBBoxToContainer(base, cw, ch);
+    var VW = base[2] - base[0], VH = base[1] - base[3];
+    var spanX = Math.max(maxX - minX, 30), spanY = Math.max(maxY - minY, 24);
+    var w = Math.min(Math.max(spanX * 1.55, VW * 0.48), VW * 0.84);
+    var h = Math.min(Math.max(spanY * 1.55, VH * 0.48), VH * 0.84);
+    var cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
+    cx = Math.max(base[0] + w * 0.42, Math.min(base[2] - w * 0.42, cx));
+    cy = Math.max(base[3] + h * 0.42, Math.min(base[1] - h * 0.42, cy));
+    return fitBBoxToContainer([cx - w / 2, cy + h / 2, cx + w / 2, cy - h / 2], cw, ch);
+  }
+
+  function animateBBox(state, targetBBox, instant) {
+    if (!state || !state.board) return;
+    if (state.zoomRaf) { cancelAnimationFrame(state.zoomRaf); state.zoomRaf = null; }
+    var from = (state.currentBBox || targetBBox).slice();
+    state.targetBBox = targetBBox.slice();
+    var diff = Math.abs(from[0] - targetBBox[0]) + Math.abs(from[1] - targetBBox[1]) +
+               Math.abs(from[2] - targetBBox[2]) + Math.abs(from[3] - targetBBox[3]);
+    if (instant || diff < 0.8) {
+      state.currentBBox = targetBBox.slice();
+      state.board.setBoundingBox(state.currentBBox, false);
+      return;
+    }
+    var start = performance.now(), dur = 400;
+    function tick(now) {
+      var t = Math.min((now - start) / dur, 1);
+      var e = 1 - Math.pow(1 - t, 3);
+      var cur = [
+        from[0] + (targetBBox[0] - from[0]) * e,
+        from[1] + (targetBBox[1] - from[1]) * e,
+        from[2] + (targetBBox[2] - from[2]) * e,
+        from[3] + (targetBBox[3] - from[3]) * e
+      ];
+      state.currentBBox = cur;
+      state.board.setBoundingBox(cur, false);
+      if (t < 1) state.zoomRaf = requestAnimationFrame(tick);
+      else state.zoomRaf = null;
+    }
+    state.zoomRaf = requestAnimationFrame(tick);
+  }
+
+  function animateFadeIn(items) {
+    if (!items.length) return;
+    var start = performance.now(), dur = 360;
+    function frame(now) {
+      var t = Math.min((now - start) / dur, 1);
+      var e = 1 - Math.pow(1 - t, 2);
+      items.forEach(function (it) {
+        it.els.forEach(function (el) {
+          var a = {};
+          if (it.targetStrokeOp > 0) a.strokeOpacity = it.targetStrokeOp * e;
+          if (it.targetFillOp > 0) a.fillOpacity = it.targetFillOp * e;
+          el.setAttribute(a);
+        });
+      });
+      if (t < 1) requestAnimationFrame(frame);
+    }
+    requestAnimationFrame(frame);
+  }
+
+  function mountBoard(container) {
+    var diag = container._diag;
+    if (!hasDiagram(diag)) return;
+    if (!window.JXG || !window.JXG.JSXGraph) {
+      jxgReady(function (ok) { if (ok) mountBoard(container); });
+      return;
+    }
+    var prev = container._jxgState;
+    var curStep = prev ? prev.stepIndex : (container._isSetupPlayer ? 0 : 999);
+    var curFocus = prev ? prev.focusList : [];
+    if (prev && prev.zoomRaf) cancelAnimationFrame(prev.zoomRaf);
+    if (prev && prev.board) {
+      try { window.JXG.JSXGraph.freeBoard(prev.board); } catch (e) {}
+    }
+
+    var holder = container.querySelector('.sm-jxg');
+    if (!holder) {
+      holder = document.createElement('div');
+      holder.className = 'sm-jxg jxgbox';
+      holder.id = 'sm-jxg-' + (++jxgSeq);
+      holder.setAttribute('aria-hidden', 'true');
+      container.innerHTML = '';
+      container.appendChild(holder);
+    }
+
+    var view = diag.view || {};
+    var baseBBox = (Array.isArray(view.bbox) && view.bbox.length === 4) ? view.bbox.slice() : DEFAULT_BBOX.slice();
+    var cw = holder.clientWidth || container.clientWidth || 240;
+    var ch = holder.clientHeight || container.clientHeight || 140;
+    var initBBox = fitBBoxToContainer(baseBBox, cw, ch);
+
+    var board = window.JXG.JSXGraph.initBoard(holder.id, {
+      boundingbox: initBBox,
+      axis: !!view.axis,
+      grid: !!view.grid,
+      keepaspectratio: false,
+      showCopyright: false,
+      showNavigation: false,
+      pan: { enabled: false },
+      zoom: { enabled: false }
+    });
+
+    var state = {
+      board: board,
+      holder: holder,
+      baseBBox: baseBBox,
+      currentBBox: initBBox.slice(),
+      targetBBox: initBBox.slice(),
+      points: {},
+      coordsMap: {},
+      items: [],
+      stepIndex: curStep,
+      focusList: curFocus,
+      zoomRaf: null
+    };
+    container._jxgState = state;
+
+    var tok = readTokens();
+    board.suspendUpdate();
+    (diag.steps || []).forEach(function (st, idx) {
+      var sNum = typeof st.step === 'number' ? st.step : idx;
+      var vis = !container._isSetupPlayer || sNum <= curStep;
+      var objs = st.objects || st.add || [];
+      objs.forEach(function (obj) {
+        createObject(board, state, obj, tok, sNum, vis, st.name || '');
+      });
+    });
+    board.unsuspendUpdate();
+
+    if (container._isSetupPlayer && curFocus && curFocus.length) {
+      animateBBox(state, computeFocusBBox(state, curFocus), true);
+    }
+  }
+
+  function resizeBoard(container) {
+    var st = container._jxgState;
+    if (!st || !st.board || !st.holder) return;
+    var cw = st.holder.clientWidth || container.clientWidth;
+    var ch = st.holder.clientHeight || container.clientHeight;
+    if (cw > 10 && ch > 10) {
+      st.board.resizeContainer(cw, ch);
+      var target = computeFocusBBox(st, st.focusList);
+      animateBBox(st, target, true);
+    }
+  }
+
+  function setStepAndFocus(setupEl, stepIndex, focusList, instant) {
+    if (!setupEl) return;
+    var st = setupEl._jxgState;
+    if (!st || !st.board) {
+      setupEl._isSetupPlayer = true;
+      mountBoard(setupEl);
+      st = setupEl._jxgState;
+      if (!st || !st.board) return;
+    }
+    var sIdx = typeof stepIndex === 'number' && stepIndex >= 0 ? stepIndex : 0;
+    var fList = Array.isArray(focusList) ? focusList : [];
+    st.stepIndex = sIdx;
+    st.focusList = fList;
+
+    var newlyShown = [];
+    st.board.suspendUpdate();
+    st.items.forEach(function (it) {
+      var shouldShow = it.step <= sIdx;
+      if (shouldShow && !it.visible) {
+        it.visible = true;
+        it.els.forEach(function (el) { el.setAttribute({ visible: true }); });
+        if (!instant && it.step === sIdx && sIdx > 0) newlyShown.push(it);
+      } else if (!shouldShow && it.visible) {
+        it.visible = false;
+        it.els.forEach(function (el) { el.setAttribute({ visible: false }); });
+      }
+    });
+    st.board.unsuspendUpdate();
+
+    if (newlyShown.length) animateFadeIn(newlyShown);
+    animateBBox(st, computeFocusBBox(st, fList), !!instant);
+  }
+
+  /* ---------- Three.js 3D scene for the meridional ray only ---------- */
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
+          rootGroup.add(new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: tok.violet })));
+          if (spec.meridionalRay.label) {
+            var mLbl = makeLabelSprite(THREE, spec.meridionalRay.label, tok.violet, tok.font);
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
+          var mesh = new THREE.Mesh(spGeo, new THREE.MeshBasicMaterial({ color: tok.violet }));
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
+      if (!cardEl || !cardEl._c || !cardEl._c.three) return;
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
+          if (el._diag) resizeBoard(el);
+          else if (el.hasAttribute('data-three')) {
+            activeThree.forEach(function (item) { if (item.container === el) item.resize(); });
+          }
+        });
+      });
+    }
+    document.querySelectorAll('[data-diagram], [data-canvas]').forEach(function (el) {
+      var cardEl = el.closest('.card');
+      var c = cardEl && cardEl._c;
+      if (!c) return;
+      var key = el.getAttribute('data-diagram') || el.getAttribute('data-canvas');
+      var diag = key === 'setup' ? ((c.d && (c.d.setup || c.d.art)) || c.setup) : c.art;
+      if (hasDiagram(diag)) {
+        el._diag = diag;
+        el._isSetupPlayer = el.classList.contains('mf-setup');
+        mountBoard(el);
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
+      new MutationObserver(function () { SM.Diagram.redraw(null, true); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
+      if (window.matchMedia) {
+        var mq = window.matchMedia('(prefers-color-scheme: dark)');
+        if (mq.addEventListener) mq.addEventListener('change', function () { SM.Diagram.redraw(null, true); });
+      }
+      window.addEventListener('resize', function () { SM.Diagram.redraw(); });
+    }
+  }
+
+  SM.Diagram = {
+    hasDiagram: hasDiagram,
+    mountAll: mountAll,
+    redraw: function (root, fullRebuild) {
+      var scope = root || document;
+      scope.querySelectorAll('[data-diagram], [data-canvas]').forEach(function (el) {
+        if (!el._diag) return;
+        if (fullRebuild || !el._jxgState) mountBoard(el);
+        else resizeBoard(el);
+      });
+      activeThree.forEach(function (item) {
+        if (!root || root.contains(item.container)) item.rebuild();
+      });
+      checkLazyThree();
+    },
+    setStepAndFocus: setStepAndFocus,
+    setFocus: function (setupEl, focusList) {
+      var st = setupEl && setupEl._jxgState;
+      setStepAndFocus(setupEl, st ? st.stepIndex : 0, focusList, false);
+    }
+  };
+  SM.Canvas = SM.Diagram;
+})();
--- a/study-match/src/components/02-mathflow.js
+++ b/study-match/src/components/02-mathflow.js
@@ -1,29 +1,52 @@
 /* ==========================================================================
-   MathFlow v4: derivations, animated
+   MathFlow v5: derivations, animated on KaTeX HTML spans
    --------------------------------------------------------------------------
    Data gives plain TeX lines plus the move that produced each one. Nothing else.
 
      { "tex": "v - u = at", "move": { "type": "subtract", "by": "u" }, "note": "...", "phase": "...", "ask": {...} }
 
    How it plays:
-   1. Every line is typeset by MathJax itself (exact TeX layout, nothing hand placed).
-   2. Each glyph and fraction bar of that typeset line becomes its own tiny sprite,
-      drawn at exactly the position MathJax gave it.
-   3. Between two lines, glyphs are matched automatically (longest common
-      subsequence of shapes, then leftovers by shape and distance):
-        matched  -> glides to its new place (arcs over "=" when it changes side)
-        new      -> writes in, amber;   gone -> struck through (for cancelling
-                    moves) and shrinks out, coral
+   1. Every line is rendered by KaTeX (0.19.0) into HTML spans.
+   2. Each character span, fraction bar, and radical sign is measured with
+      getBoundingClientRect() and becomes an animated sprite at its exact position.
+   3. Between two lines, spans are matched automatically (longest common
+      subsequence of signatures, then leftovers by signature and distance):
+        matched  -> glides to its new place (arcs over "=" when it changes side)
+        new      -> fades in, palette violet;  gone -> struck through (for
+                    cancelling moves) and shrinks out, muted
    4. Moves that act on both sides (add, multiply, differentiate, ...) first show
       the move applied inline on the same line:  L + x = R + x  , then the result.
    5. "=" stays in one column; earlier lines stay above as a faded trail.
    ========================================================================== */
 (function () {
   var SM = window.SM, T = SM.tex;
-  var NS = 'http://www.w3.org/2000/svg';
-  var PAD = 2, GHOST = 0.78, MIN_SCALE = 0.45;
+  var GHOST = 0.78, MIN_SCALE = 0.45;
   var SMOOTH = 'cubic-bezier(0.65, 0, 0.35, 1)', OUT = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
   var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
   var holder = null, holderSize = 0;
+
+  /* ---------- KaTeX readiness and auto-render ---------- */
+  SM.mathReady = function (cb) {
+    if (window.katex && window.renderMathInElement) { cb(true); return; }
+    var tries = 0;
+    var timer = setInterval(function () {
+      tries++;
+      if (window.katex && window.renderMathInElement) {
+        clearInterval(timer);
+        cb(true);
+      } else if (tries > 250) {
+        clearInterval(timer);
+        cb(false);
+      }
+    }, 40);
+  };
+
+  SM.typeset = function (el) {
+    var root = el || document.body;
+    if (!root) return;
+    if (window.renderMathInElement) {
+      try {
+        window.renderMathInElement(root, {
+          delimiters: [
+            { left: '\\[', right: '\\]', display: true },
+            { left: '\\(', right: '\\)', display: false }
+          ],
+          ignoredClasses: ['katex', 'katex-display', 'mf-stage'],
+          throwOnError: false
+        });
+      } catch (e) {}
+    } else {
+      SM.mathReady(function (ok) { if (ok) SM.typeset(root); });
+    }
+  };
 
   function getHolder(size) {
     if (!holder) {
@@ -36,41 +59,75 @@
     return holder;
   }
 
-  /* ---------- typeset one line on a single line and pull out its glyphs ---------- */
+  /* ---------- render one line with KaTeX and measure its spans ---------- */
   var mcache = {};
   function measure(tex, size) {
     var key = size + '|' + tex;
     if (mcache[key]) return mcache[key];
-    var h = getHolder(size), node = null;
-    try { node = MathJax.tex2svg(tex, { display: true }); } catch (e) { node = null; }
-    if (!node) return (mcache[key] = { error: true, tex: tex });
+    if (!window.katex) return { error: true, tex: tex };
+    var h = getHolder(size), node = document.createElement('div');
+    node.style.display = 'inline-block';
+    try {
+      window.katex.render(tex, node, { displayMode: true, throwOnError: false, output: 'html' });
+    } catch (e) {
+      return (mcache[key] = { error: true, tex: tex, msg: e.message || '' });
+    }
+    var errNode = node.querySelector('.katex-error');
+    if (errNode) {
+      return (mcache[key] = { error: true, tex: tex, msg: errNode.getAttribute('title') || errNode.textContent || '' });
+    }
     h.appendChild(node);
-    var svg = node.querySelector('svg');
-    if (!svg || svg.querySelector('[data-mml-node="merror"]')) {
-      var msg = svg ? (svg.querySelector('[data-mml-node="merror"]').getAttribute('data-mjx-error') || '') : '';
-      h.removeChild(node);
-      return (mcache[key] = { error: true, tex: tex, msg: msg });
-    }
-    var hr = h.getBoundingClientRect(), sr = svg.getBoundingClientRect();
+    var katexEl = node.querySelector('.katex-html') || node.querySelector('.katex') || node;
+    var hr = h.getBoundingClientRect(), sr = katexEl.getBoundingClientRect();
     var glyphs = [];
-    Array.prototype.forEach.call(svg.querySelectorAll('path, rect'), function (el) {
+
+    Array.prototype.forEach.call(katexEl.querySelectorAll('.frac-line, .overline-line'), function (el) {
       var r = el.getBoundingClientRect();
-      if (r.width < 0.05 && r.height < 0.05) return;
-      var m = el.getScreenCTM();
-      if (!m) return;
-      var isRect = el.tagName.toLowerCase() === 'rect';
-      var clone = el.cloneNode(false);
-      clone.removeAttribute('transform');
-      clone.removeAttribute('stroke-width');
+      if (r.width < 0.4) return;
       glyphs.push({
-        sig: isRect ? 'rect' : (el.getAttribute('data-c') || 'p'),
-        node: clone,
-        m: [m.a, m.b, m.c, m.d, m.e - hr.left, m.f - hr.top],
-        x: r.left - hr.left, y: r.top - hr.top, w: r.width, h: r.height
+        kind: 'bar',
+        sig: 'rect',
+        x: r.left - hr.left, y: r.top - hr.top,
+        w: r.width, h: Math.max(r.height, 1.5)
       });
     });
+
+    Array.prototype.forEach.call(katexEl.querySelectorAll('.hide-tail'), function (el) {
+      var r = el.getBoundingClientRect();
+      if (r.width < 0.5 || r.height < 0.5) return;
+      glyphs.push({
+        kind: 'html',
+        sig: 'sqrt',
+        html: el.outerHTML,
+        x: r.left - hr.left, y: r.top - hr.top,
+        w: r.width, h: r.height
+      });
+    });
+
+    var walker = document.createTreeWalker(katexEl, NodeFilter.SHOW_TEXT, null, false);
+    var tn, range = document.createRange();
+    while ((tn = walker.nextNode())) {
+      if (tn.parentElement && tn.parentElement.closest('svg')) continue;
+      var txt = tn.nodeValue || '';
+      if (!txt.trim()) continue;
+      var p = tn.parentElement;
+      var cs = getComputedStyle(p);
+      var fs = parseFloat(cs.fontSize) || size;
+      var ff = cs.fontFamily || 'KaTeX_Main, serif';
+      var fst = cs.fontStyle || 'normal';
+      var fw = cs.fontWeight || '400';
+      for (var ci = 0; ci < txt.length; ci++) {
+        var ch = txt.charAt(ci);
+        if (!ch.trim()) continue;
+        range.setStart(tn, ci);
+        range.setEnd(tn, ci + 1);
+        var r = range.getBoundingClientRect();
+        if (r.width < 0.05 && r.height < 0.05) continue;
+        glyphs.push({
+          kind: 'char',
+          sig: ch + '|' + (fst === 'italic' ? 'i' : 'n'),
+          ch: ch, ff: ff, fst: fst, fw: fw, fs: fs,
+          isEq: ch === '=' && fs >= size * 0.85,
+          x: r.left - hr.left, y: r.top - hr.top, w: r.width, h: r.height
+        });
+      }
+    }
+
     var eq = null;
-    glyphs.forEach(function (g) { if (g.sig === '3D' && (!eq || g.h > eq.h + 0.5)) eq = g; });
+    glyphs.forEach(function (g) { if (g.isEq && (!eq || g.fs >= eq.fs)) eq = g; });
     var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
     glyphs.forEach(function (g) { x0 = Math.min(x0, g.x); y0 = Math.min(y0, g.y); x1 = Math.max(x1, g.x + g.w); y1 = Math.max(y1, g.y + g.h); });
     if (!glyphs.length) { x0 = y0 = 0; x1 = y1 = 1; }
     var ax = eq ? eq.x + eq.w / 2 : (x0 + x1) / 2, ay = eq ? eq.y + eq.h / 2 : (y0 + y1) / 2;
     var res = { tex: tex, glyphs: glyphs, ax: ax, ay: ay, L: ax - x0, R: x1 - ax, U: ay - y0, D: y1 - ay,
-      svgHTML: svg.outerHTML, sx: sr.left - hr.left, sy: sr.top - hr.top, hasEq: !!eq };
+      svgHTML: node.innerHTML, sx: sr.left - hr.left, sy: sr.top - hr.top, hasEq: !!eq };
     h.removeChild(node);
     return (mcache[key] = res);
   }
@@ -162,48 +219,13 @@
       if (playBtn) playBtn.innerHTML = playing ? '&#10073;&#10073;' : '&#9654;';
     }
 
-    /* highlight the part of the setup SVG (labels and angle arcs) used in the current step */
-    function highlightSetup(f) {
+    /* build the setup JSXGraph figure up to step f.si and zoom into f's focus list */
+    function highlightSetup(f, instant) {
       if (!setupEl) return;
-      if (SM.Canvas && SM.Canvas.setFocus) {
+      var D = SM.Diagram || SM.Canvas;
+      if (D && D.setStepAndFocus) {
         var st0 = (f && spec.steps[f.si]) || {};
         var fl = Array.isArray(st0.focus) ? st0.focus : (st0.focus ? String(st0.focus).split(/[\s,]+/) : []);
-        SM.Canvas.setFocus(setupEl, fl);
+        D.setStepAndFocus(setupEl, f ? f.si : 0, fl, instant);
         return;
       }
-      var svg = setupEl.querySelector('svg');
-      if (!svg) return;
-      Array.prototype.forEach.call(svg.querySelectorAll('.mf-part-on'), function (el) { el.classList.remove('mf-part-on'); });
-      if (!f) return;
-      var st = spec.steps[f.si] || {};
-      var focusList = Array.isArray(st.focus) ? st.focus : (st.focus ? String(st.focus).split(/[\s,]+/) : []);
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
     }
 
     function setNote(html) {
@@ -261,7 +283,7 @@
       return pairCache[key];
     }
 
-    /* one sprite per glyph, drawn exactly where MathJax put it */
+    /* one sprite per measured KaTeX span, placed at its exact bounding box */
     function sprites(f) {
       if (f.sp) return f.sp;
       f.sp = []; f.pos = [];
@@ -278,21 +300,32 @@
       M.glyphs.forEach(function (g, j) {
         var lineShift = ((M.R - M.L) * k) / 2;
         var x = L.eqX - lineShift + (g.x - M.ax) * k, y = L.eqY + (g.y - M.ay) * k, w = g.w * k, h = g.h * k;
-        var svg = document.createElementNS(NS, 'svg');
-        svg.setAttribute('class', 'mf-sp' + (f.opSet && f.opSet[j] ? ' is-op' : ''));
-        svg.setAttribute('width', (w + 2 * PAD).toFixed(2));
-        svg.setAttribute('height', (h + 2 * PAD).toFixed(2));
-        svg.setAttribute('aria-hidden', 'true');
-        svg.style.left = (x - PAD).toFixed(2) + 'px';
-        svg.style.top = (y - PAD).toFixed(2) + 'px';
-        svg.style.opacity = '0';
-        var gg = document.createElementNS(NS, 'g'), m = g.m;
-        gg.setAttribute('transform', 'matrix(' + [k * m[0], k * m[1], k * m[2], k * m[3], k * m[4] + PAD - k * g.x, k * m[5] + PAD - k * g.y].map(function (v) { return v.toFixed(4); }).join(' ') + ')');
-        gg.appendChild(g.node.cloneNode(false));
-        svg.appendChild(gg);
-        stage.appendChild(svg);
-        f.sp.push(svg);
+        var sp = document.createElement('span');
+        sp.className = 'mf-sp' + (f.opSet && f.opSet[j] ? ' is-op' : '');
+        sp.setAttribute('aria-hidden', 'true');
+        sp.style.left = x.toFixed(2) + 'px';
+        sp.style.top = y.toFixed(2) + 'px';
+        sp.style.opacity = '0';
+        if (g.kind === 'bar') {
+          sp.classList.add('mf-sp-bar');
+          sp.style.width = Math.max(1, w).toFixed(2) + 'px';
+          sp.style.height = Math.max(1.5, h).toFixed(2) + 'px';
+        } else if (g.kind === 'html') {
+          sp.classList.add('mf-sp-svg');
+          sp.style.width = w.toFixed(2) + 'px';
+          sp.style.height = h.toFixed(2) + 'px';
+          sp.innerHTML = '<span style="display:block;width:' + g.w.toFixed(2) + 'px;height:' + g.h.toFixed(2) + 'px;transform:scale(' + k.toFixed(4) + ');transform-origin:0 0">' + g.html + '</span>';
+        } else {
+          sp.textContent = g.ch;
+          sp.style.fontFamily = g.ff;
+          sp.style.fontStyle = g.fst;
+          sp.style.fontWeight = g.fw;
+          sp.style.fontSize = (g.fs * k).toFixed(2) + 'px';
+          sp.style.lineHeight = '1';
+        }
+        stage.appendChild(sp);
+        f.sp.push(sp);
         f.pos.push({ x: x, y: y, w: w, h: h, cx: x + w / 2 });
       });
       return f.sp;
@@ -356,8 +389,8 @@
           var ga = A.pos[a], gb = B.pos[b];
           // start from where the old glyph really is right now (smooth even if interrupted)
           var from = ga;
           if (ea && ea.style.opacity !== '0') {
-            var r = ea.getBoundingClientRect(), s = (ga.w + 2 * PAD) > 0 ? r.width / (ga.w + 2 * PAD) : 1;
-            from = { x: r.left - stR.left + PAD * s, y: r.top - stR.top + PAD * s, w: ga.w * s, h: ga.h * s, cx: r.left - stR.left + r.width / 2 };
+            var r = ea.getBoundingClientRect(), s = ga.w > 0 ? r.width / ga.w : 1;
+            from = { x: r.left - stR.left, y: r.top - stR.top, w: ga.w * s, h: ga.h * s, cx: r.left - stR.left + r.width / 2 };
           }
           if (ea) ea.style.opacity = '0';
           var sx = gb.w > 0.3 ? from.w / gb.w : 1, sy = gb.h > 0.3 ? from.h / gb.h : 1;
@@ -429,21 +462,17 @@
         var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
         B.pos.forEach(function (p) { x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y); x1 = Math.max(x1, p.x + p.w); y1 = Math.max(y1, p.y + p.h); });
         var pd = 8, W = x1 - x0 + pd * 2, H = y1 - y0 + pd * 2;
-        var svg = document.createElementNS(NS, 'svg');
-        svg.setAttribute('class', 'mf-box');
-        svg.setAttribute('width', W + 4); svg.setAttribute('height', H + 4);
-        svg.style.left = (x0 - pd - 2) + 'px'; svg.style.top = (y0 - pd - 2) + 'px';
-        var rc = document.createElementNS(NS, 'rect');
-        rc.setAttribute('x', 2); rc.setAttribute('y', 2); rc.setAttribute('width', W); rc.setAttribute('height', H); rc.setAttribute('rx', 10);
-        rc.setAttribute('pathLength', '100'); rc.style.strokeDasharray = '100';
-        svg.appendChild(rc);
-        stage.appendChild(svg);
-        overlays.push(svg);
-        if (!instant) anim(rc, [{ strokeDashoffset: 100 }, { strokeDashoffset: 0 }], { duration: 900, delay: 1100 });
+        var box = document.createElement('div');
+        box.className = 'mf-box';
+        box.style.left = (x0 - pd).toFixed(2) + 'px';
+        box.style.top = (y0 - pd).toFixed(2) + 'px';
+        box.style.width = W.toFixed(2) + 'px';
+        box.style.height = H.toFixed(2) + 'px';
+        stage.appendChild(box);
+        overlays.push(box);
+        if (!instant) anim(box, [{ opacity: 0, transform: 'scale(0.95)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 500, delay: 900 });
       }
 
       api.i = i;
       placeTrail(i, instant);
       setNote(B.note);
-      highlightSetup(B);
+      highlightSetup(B, instant);
       chrome(i);
       if (i === frames.length - 1) {
         complete();
@@ -524,6 +553,7 @@
       frames.forEach(function (f) {
         if (f.sp) f.sp.forEach(function (e) { freeze(e); e.style.opacity = '0'; });
         if (f.ghost) { f.ghost.style.transition = 'none'; f.ghost.style.opacity = '0'; }
       });
       api.i = -1;
+      if (setupEl && SM.Diagram) SM.Diagram.setStepAndFocus(setupEl, 0, [], true);
     }
 
     api.play = function () {
@@ -568,6 +598,9 @@
       summaryEl.hidden = !showSum;
       stage.hidden = showSum;
       if (sumBtn) sumBtn.classList.toggle('is-on', showSum);
+      if (showSum && setupEl && SM.Diagram) {
+        SM.Diagram.setStepAndFocus(setupEl, spec.steps.length - 1, [], false);
+      } else if (!showSum && api.i >= 0) highlightSetup(frames[api.i], false);
     };
     api.practise = function () {
       if (SM.isPaused && SM.isPaused()) return;
@@ -602,7 +635,7 @@
       if (willFlip) {
         setTimeout(function () {
           rebuild();
-          if (SM.Canvas && SM.Canvas.redraw) SM.Canvas.redraw(root);
+          if (SM.Diagram && SM.Diagram.redraw) SM.Diagram.redraw(root);
           if (api.i < 0) api.play();
         }, 60);
       } else stopPlay();
@@ -633,7 +666,7 @@
     window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(rebuild, 220); });
 
     SM.mathReady(function (ok) {
-      if (!ok) { noteEl.textContent = 'MathJax did not load. Check the internet connection and reload.'; return; }
+      if (!ok) { noteEl.textContent = 'KaTeX did not load. Check the internet connection and reload.'; return; }
       build();
       if (completed) {
         root.classList.add('is-completed');
@@ -647,7 +680,7 @@
   function page(steps) {
     var lines = steps.map(function (st) {
       var p = T.split(st.tex), ann = st.move ? T.ann(st.move) : '';
-      var a = ann ? ' && \\class{mf-ann}{\\scriptstyle ' + ann + '}' : '';
+      var a = ann ? ' && {\\scriptstyle ' + ann + '}' : '';
       return p ? p[0] + ' &= ' + p[1] + a : '& ' + st.tex + a;
     });
     return '\\[\\begin{aligned}' + lines.join(' \\\\[5pt] ') + '\\end{aligned}\\]';
--- a/study-match/src/components/03-render.js
+++ b/study-match/src/components/03-render.js
@@ -6,17 +6,17 @@
   var SM = window.SM, esc = SM.esc;
 
   var ICONS = {
-    atom: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2"><ellipse cx="24" cy="24" rx="20" ry="8"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-60 24 24)"/><circle cx="24" cy="24" r="4.5" fill="#F6B72B" stroke="none"/></svg>',
-    curve: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M10 12c4 22 8 24 12 24s10-8 20-10"/><circle cx="22" cy="36" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
-    motion: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 40c8-26 28-26 36 0" stroke-dasharray="3 5"/><circle cx="24" cy="20.5" r="4.5" fill="#F6B72B" stroke="none"/><path d="M4 42h40"/></svg>',
-    graph: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M8 34L40 12"/><path d="M30 18.9V40" stroke-dasharray="3 4"/><circle cx="30" cy="18.9" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
-    wave: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 24c5-14 10-14 15 0s10 14 15 0 10-14 12-6"/><circle cx="19" cy="24" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
-    lens: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M24 4c8 10 8 30 0 40c-8-10-8-30 0-40z"/><path d="M2 16l22 8 22 8" stroke-dasharray="3 4"/><circle cx="24" cy="24" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
-    flask: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M18 4h12M20 4v14L8 40a3 3 0 0 0 3 4h26a3 3 0 0 0 3-4L28 18V4"/><circle cx="22" cy="34" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
-    cell: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4"><ellipse cx="24" cy="24" rx="20" ry="15"/><circle cx="21" cy="22" r="6"/><circle cx="21" cy="22" r="2.5" fill="#F6B72B" stroke="none"/></svg>',
-    sigma: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M36 8H12l14 16-14 16h24"/><circle cx="36" cy="40" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
-    book: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M6 8h14a4 4 0 0 1 4 4v28a3 3 0 0 0-3-3H6zM42 8H28a4 4 0 0 0-4 4v28a3 3 0 0 1 3-3h15z"/><circle cx="35" cy="18" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
-    bolt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M27 4L10 27h12l-2 17 18-24H26z"/><circle cx="38" cy="38" r="3.5" fill="#F6B72B" stroke="none"/></svg>'
+    atom: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2"><ellipse cx="24" cy="24" rx="20" ry="8"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-60 24 24)"/><circle cx="24" cy="24" r="4.5" fill="currentColor" stroke="none"/></svg>',
+    curve: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M10 12c4 22 8 24 12 24s10-8 20-10"/><circle cx="22" cy="36" r="3.5" fill="currentColor" stroke="none"/></svg>',
+    motion: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 40c8-26 28-26 36 0" stroke-dasharray="3 5"/><circle cx="24" cy="20.5" r="4.5" fill="currentColor" stroke="none"/><path d="M4 42h40"/></svg>',
+    graph: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M8 34L40 12"/><path d="M30 18.9V40" stroke-dasharray="3 4"/><circle cx="30" cy="18.9" r="3.5" fill="currentColor" stroke="none"/></svg>',
+    wave: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 24c5-14 10-14 15 0s10 14 15 0 10-14 12-6"/><circle cx="19" cy="24" r="3.5" fill="currentColor" stroke="none"/></svg>',
+    lens: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M24 4c8 10 8 30 0 40c-8-10-8-30 0-40z"/><path d="M2 16l22 8 22 8" stroke-dasharray="3 4"/><circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none"/></svg>',
+    flask: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M18 4h12M20 4v14L8 40a3 3 0 0 0 3 4h26a3 3 0 0 0 3-4L28 18V4"/><circle cx="22" cy="34" r="3.5" fill="currentColor" stroke="none"/></svg>',
+    cell: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4"><ellipse cx="24" cy="24" rx="20" ry="15"/><circle cx="21" cy="22" r="6"/><circle cx="21" cy="22" r="2.5" fill="currentColor" stroke="none"/></svg>',
+    sigma: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M36 8H12l14 16-14 16h24"/><circle cx="36" cy="40" r="3.5" fill="currentColor" stroke="none"/></svg>',
+    book: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M6 8h14a4 4 0 0 1 4 4v28a3 3 0 0 0-3-3H6zM42 8H28a4 4 0 0 0-4 4v28a3 3 0 0 1 3-3h15z"/><circle cx="35" cy="18" r="3.5" fill="currentColor" stroke="none"/></svg>',
+    bolt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M27 4L10 27h12l-2 17 18-24H26z"/><circle cx="38" cy="38" r="3.5" fill="currentColor" stroke="none"/></svg>'
   };
   SM.ICONS = ICONS;
   var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
@@ -52,20 +52,21 @@
 
   function cardHTML(c) {
     var a = ' data-card="' + c.id + '"', T = SM.tex;
+    var hasDiag = function (d) { return !!(d && d.steps && d.steps.length); };
     switch (c.type) {
       case 'intuition':
         return '<article class="card intuition-card"' + a + '><span class="card-index">In plain words</span>' +
           '<div class="intuition-content scroll-y"><h2 class="card-title">' + esc(c.title) + '</h2>' +
           '<p class="intuition-meaning">' + esc(c.meaning) + '</p>' +
           '<h3>Picture it</h3>' +
-          (c.three ? '<div class="art intuition-art" data-three="1" role="img" aria-label="' + esc(c.title) + '"></div>' : (c.art && c.art.length) ? '<div class="art intuition-art" data-canvas="art" role="img" aria-label="' + esc(c.title) + '"></div>' : '') +
+          (c.three ? '<div class="art intuition-art" data-three="1" role="img" aria-label="' + esc(c.title) + '"></div>' : hasDiag(c.art) ? '<div class="art intuition-art" data-diagram="art" role="img" aria-label="' + esc(c.title) + '"></div>' : '') +
           '<p class="card-body">' + esc(c.picture) + '</p>' +
           '<div class="intuition-example"><h3>For example</h3><p class="card-body">' + esc(c.example) + '</p></div>' +
           '<h3>Connect it to the definition</h3><p class="card-body">' + esc(c.bridge) + '</p></div></article>';
       case 'info':
         return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Concept') + '</span>' +
-          (c.three ? '<div class="art" data-three="1" role="img" aria-label="' + esc(c.title) + '"></div>' : (!SM.isDefinition(c) && c.art && c.art.length) ? '<div class="art" data-canvas="art" role="img" aria-label="' + esc(c.title) + '"></div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
+          (c.three ? '<div class="art" data-three="1" role="img" aria-label="' + esc(c.title) + '"></div>' : (!SM.isDefinition(c) && hasDiag(c.art)) ? '<div class="art" data-diagram="art" role="img" aria-label="' + esc(c.title) + '"></div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
           '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
           (c.examples && c.examples.length ? '<div class="examples" style="margin-top:9px">' + chips(c.examples) + '</div>' : '') + '</div></article>';
       case 'math':
@@ -96,7 +97,7 @@
       case 'question':
         return '<article class="card qcard' + (c.textAnswer ? ' has-text-answer' : '') + '"' + a + '><span class="card-index">' + esc(c.label || 'Question') + '</span>' +
-          ((c.art && c.art.length) ? '<div class="art" data-canvas="art" role="img" aria-label="' + esc(c.title) + '"></div>' : '') +
+          (hasDiag(c.art) ? '<div class="art" data-diagram="art" role="img" aria-label="' + esc(c.title) + '"></div>' : '') +
           '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="q-text">' + c.q + '</p></div>' +
           (c.textAnswer ? '<div class="written-answer"><div class="answer-label"><label for="answer-' + c.id + '">Your answer</label><span data-draft-status id="draft-' + c.id + '" role="status">Saves automatically on this device.</span></div>' +
             '<textarea class="answer-input" id="answer-' + c.id + '" data-written-answer rows="6" placeholder="Write your answer in your own words…" aria-describedby="draft-' + c.id + '"></textarea></div>' : '') +
@@ -119,12 +120,12 @@
           '<ol class="route-list">' + c.phases.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' +
           (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') + '</div></article>';
       case 'derive':
-        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], hasSetup = !!((c.d.setup && c.d.setup.length) || (c.d.art && c.d.art.length));
+        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], hasSetup = hasDiag(c.d.setup) || hasDiag(c.d.art);
         return '<article class="card mf-card mf-flip-card"' + a + '><div class="mf-card-inner">' +
           '<div class="mf-face mf-front">' +
           '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span><button type="button" class="chip mf-flip-btn" data-mf="flip-open">Derive &#9654;</button></div>' +
           '<h2 class="card-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
-          (hasSetup ? '<div class="art mf-front-art" data-canvas="setup" role="img" aria-label="' + esc(c.title || 'Derivation setup') + '"></div>' : '') +
+          (hasSetup ? '<div class="art mf-front-art" data-diagram="setup" role="img" aria-label="' + esc(c.title || 'Derivation setup') + '"></div>' : '') +
           '<div class="scroll-y mf-front-route">' +
           '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || dst[0].tex) + '\\)</div></div>' +
           '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || dst[dst.length - 1].tex) + '\\)</div></div>' +
@@ -137,7 +138,7 @@
           '<h2 class="card-title mf-back-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
           '<div class="mf-phases"></div>' +
           '<div class="mf-work' + (hasSetup ? ' has-setup' : '') + '">' +
-          (hasSetup ? '<div class="mf-setup art" data-canvas="setup" role="img" aria-label="' + esc(c.title || 'Derivation setup') + '"></div>' : '') +
+          (hasSetup ? '<div class="mf-setup art" data-diagram="setup" role="img" aria-label="' + esc(c.title || 'Derivation setup') + '"></div>' : '') +
           '<div class="mf-right">' +
           '<div class="mf-board"><div class="mf-stage"></div><div class="mf-summary scroll-y" hidden></div></div>' +
           '<div class="mf-panel"><p class="mf-note">Press play. It stops at each decision so you can call the next move.</p><div class="mf-dots"></div>' +
@@ -147,7 +148,7 @@
           '<button type="button" class="chip" data-mf="replay" aria-label="Replay from start">&#8634;</button>' +
           '<button type="button" class="chip mf-practise" data-mf="practise">Practise again</button></div></div>' +
           '<div class="mf-ask" hidden><span class="mf-ask-tag">Your move</span><p class="mf-ask-q"></p><div class="mf-ask-opts"></div>' +
-          '<p class="mf-ask-why" hidden></p><button type="button" class="btn amber mf-ask-go" hidden>Continue &#9654;</button></div></div></div></div></div></article>';
+          '<p class="mf-ask-why" hidden></p><button type="button" class="btn mf-ask-go" hidden>Continue &#9654;</button></div></div></div></div></div></article>';
       case 'page':
         return '<article class="card"' + a + '><span class="card-index">One page</span><h2 class="card-title">' + c.title + '</h2>' +
           '<p class="card-body">Every line, aligned on the equals sign. The amber note is the move that produced it.</p>' +
@@ -176,7 +177,8 @@
     SM.SHEETS.forEach(function (sh) { sh.el = shelf.querySelector('[data-sheet="' + sh.id + '"]'); });
     SM.CARDS.forEach(function (c) { c.el = shelf.querySelector('[data-card="' + c.id + '"]'); c.el._c = c; });
     shelf.querySelectorAll('.card-index, .chip').forEach(function (tag) { tag.innerHTML = SM.mathLabel(tag.innerHTML); });
-    if (SM.Canvas && SM.Canvas.mountAll) SM.Canvas.mountAll();
+    if (SM.Diagram && SM.Diagram.mountAll) SM.Diagram.mountAll();
+    SM.mathReady(function (ok) { if (ok) SM.typeset(shelf); });
   };
 
   /* ---------- widgets ---------- */
--- a/study-match/src/components/03-definition-checks.js
+++ b/study-match/src/components/03-definition-checks.js
@@ -66,7 +66,7 @@
     var front = c.el.querySelector('.definition-front'), rear = c.el.querySelector('.definition-back');
     front.inert = flipped; rear.inert = !flipped;
     front.setAttribute('aria-hidden', String(flipped)); rear.setAttribute('aria-hidden', String(!flipped));
-    if (SM.Canvas && SM.Canvas.redraw) SM.Canvas.redraw(c.el);
+    if (SM.Diagram && SM.Diagram.redraw) SM.Diagram.redraw(c.el);
     if (c.el.contains(document.activeElement)) document.activeElement.blur();
   }
   SM.flipDefinition = flipCard;
@@ -114,7 +114,7 @@
       back.innerHTML = '<div class="def-back-head"><span class="card-index">Your definition</span>' +
         '<button type="button" class="chip" data-def="front">Read · flip back</button></div>' +
         '<h2 class="card-title">' + SM.esc(c.title) + '</h2>' +
-        ((c.art && c.art.length) ? '<div class="art def-art" data-canvas="art" role="img" aria-label="' + SM.esc(c.title) + '"></div>' : '');
+        ((c.art && c.art.steps && c.art.steps.length) ? '<div class="art def-art" data-diagram="art" role="img" aria-label="' + SM.esc(c.title) + '"></div>' : '');
       var panel = document.createElement('div');
       panel.className = 'definition-check scroll-y';
       panel.innerHTML = '<label class="def-label" for="def-' + c.id + '">Define it in your own words</label>' +
@@ -152,7 +152,7 @@
       });
     });
     SM.S.definitionChecksVersion = 1; SM.save();
-    if (SM.Canvas && SM.Canvas.mountAll) SM.Canvas.mountAll();
+    if (SM.Diagram && SM.Diagram.mountAll) SM.Diagram.mountAll();
     SM.definitionChecksReady = true; SM.refreshDefinitionLocks();
   };
 })();
--- a/study-match/src/template.html
+++ b/study-match/src/template.html
@@ -12,16 +12,13 @@
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
+<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.14.0/jsxgraph.min.css">
+<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.19.0/katex.min.css">
 <style>
 {{STYLE}}
 </style>
-<script>
-  window.MathJax = {
-    tex: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']] },
-    svg: { fontCache: 'none' },
-    options: { enableMenu: false }
-  };
-</script>
-<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
+<script defer src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.14.0/jsxgraphcore.js"></script>
+<script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.19.0/katex.min.js"></script>
+<script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.19.0/contrib/auto-render.min.js"></script>
 </head>
 <body class="is-focused">
--- a/study-match/src/sw.js
+++ b/study-match/src/sw.js
@@ -9,7 +9,7 @@
     return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
   }).then(function () { return self.clients.claim(); }));
 });
-/* pages: network first (fresh build wins), everything else (MathJax, cdnjs.cloudflare.com three.js, fonts): cache first */
+/* pages: network first (fresh build wins), everything else (cdnjs.cloudflare.com KaTeX, JSXGraph, three.js, fonts): cache first */
 self.addEventListener('fetch', function (e) {
   if (e.request.method !== 'GET') return;
   var isPage = e.request.mode === 'navigate';
--- a/study-match/build.py
+++ b/study-match/build.py
@@ -20,8 +20,8 @@
 NEEDS_BY = {'add', 'subtract', 'multiply', 'divide', 'power'}
 BOTH = {'add', 'subtract', 'multiply', 'divide', 'power', 'root', 'reciprocal', 'negate', 'differentiate', 'integrate', 'ln', 'exp', 'apply'}
 ICONS = {'atom', 'curve', 'motion', 'graph', 'wave', 'lens', 'flask', 'cell', 'sigma', 'book', 'bolt'}
-SVG_CLASSES = {'f', 's', 'ok', 't', 'i', 'h', 'hk', 'lk', 'gk'}
-CANVAS_OPS = {'line', 'arrow', 'polyline', 'polygon', 'rect', 'circle', 'ellipse', 'curve', 'arc', 'text'}
+JXG_ROLES = {'f', 's', 'ok', 'lk', 'ik', 'gk', 't', 'i'}
+JXG_TYPES = {'point', 'line', 'segment', 'arrow', 'polyline', 'polygon', 'curve', 'circle', 'ellipse', 'arc', 'angle', 'label', 'text'}
 
 # A backslash that was not doubled in JSON turns "\frac" into form-feed + "rac", "\beta" into backspace + "eta", etc.
 CTRL_FIX = {'\f': '\\f', '\b': '\\b', '\t': '\\t', '\r': '\\r', '\v': '\\v', '\a': '\\a'}
@@ -122,38 +122,60 @@
         rep.warn(where, 'ask has no "why"; the learner sees no reason after answering')
 
 
-def check_canvas_ops(ops, where, rep):
+def _is_pt_ref(v):
+    return (isinstance(v, str) and bool(v.strip())) or (isinstance(v, list) and len(v) == 2 and all(isinstance(x, (int, float)) for x in v))
+
+
+def check_jxg_diagram(diag, where, rep):
     names = set()
-    if not isinstance(ops, list) or not ops:
-        rep.err(where, 'diagram must be a non-empty list of canvas2d drawing operations')
+    if not isinstance(diag, dict):
+        rep.err(where, 'diagram must be a declarative JSXGraph object with "view" and "steps"')
         return names
-    for i, item in enumerate(ops):
-        iw = '%s[%d]' % (where, i)
-        if not isinstance(item, dict):
-            rep.err(iw, 'drawing operation must be an object'); continue
-        op = item.get('op')
-        if op not in CANVAS_OPS:
-            rep.err(iw, 'unknown canvas op "%s" (allowed: %s)' % (op, ', '.join(sorted(CANVAS_OPS)))); continue
-        role = item.get('role', '')
-        if role:
-            for r in str(role).split():
-                if r not in SVG_CLASSES:
-                    rep.err(iw, 'unknown role "%s" (allowed: %s)' % (r, ', '.join(sorted(SVG_CLASSES))))
-        if item.get('name'):
-            names.add(item['name'])
-        if op in ('line', 'arrow'):
-            if any(not isinstance(item.get(k), (int, float)) for k in ('x1', 'y1', 'x2', 'y2')):
-                rep.err(iw, '%s needs numeric x1, y1, x2, y2' % op)
-        elif op in ('polyline', 'polygon', 'curve'):
-            pts = item.get('points')
-            if not isinstance(pts, list) or len(pts) < 2 or any(not isinstance(p, list) or len(p) != 2 for p in pts):
-                rep.err(iw, '%s needs a points list of [x, y] pairs' % op)
-        elif op == 'rect':
-            if any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y', 'w', 'h')):
-                rep.err(iw, 'rect needs numeric x, y, w, h')
-        elif op == 'circle':
-            if any(not isinstance(item.get(k), (int, float)) for k in ('cx', 'cy', 'r')):
-                rep.err(iw, 'circle needs numeric cx, cy, r')
-        elif op == 'ellipse':
-            if any(not isinstance(item.get(k), (int, float)) for k in ('cx', 'cy', 'rx', 'ry')):
-                rep.err(iw, 'ellipse needs numeric cx, cy, rx, ry')
-        elif op == 'arc':
-            if any(not isinstance(item.get(k), (int, float)) for k in ('cx', 'cy', 'r', 'start', 'end')):
-                rep.err(iw, 'arc needs numeric cx, cy, r, start, end')
-        elif op == 'text':
-            if any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y')) or not isinstance(item.get('text'), str):
-                rep.err(iw, 'text needs numeric x, y and string text')
+    view = diag.get('view')
+    if not isinstance(view, dict) or not (isinstance(view.get('bbox'), list) and len(view['bbox']) == 4 and all(isinstance(x, (int, float)) for x in view['bbox'])):
+        rep.err(where + '.view', 'view needs bbox: [left, top, right, bottom]')
+    steps = diag.get('steps')
+    if not isinstance(steps, list) or not steps:
+        rep.err(where + '.steps', 'steps must be a non-empty list of construction steps')
+        return names
+    for si, st in enumerate(steps):
+        sw = '%s.steps[%d]' % (where, si)
+        if not isinstance(st, dict):
+            rep.err(sw, 'construction step must be an object'); continue
+        if st.get('name'):
+            names.add(st['name'])
+        objs = st.get('objects') or st.get('add')
+        if not isinstance(objs, list) or not objs:
+            rep.err(sw, 'construction step needs a non-empty "objects" list'); continue
+        for oi, item in enumerate(objs):
+            iw = '%s.objects[%d]' % (sw, oi)
+            if not isinstance(item, dict):
+                rep.err(iw, 'JSXGraph object must be a dict'); continue
+            tp = item.get('type')
+            if tp not in JXG_TYPES:
+                rep.err(iw, 'unknown JSXGraph object type "%s" (allowed: %s)' % (tp, ', '.join(sorted(JXG_TYPES)))); continue
+            role = item.get('role', '')
+            if role:
+                for r in str(role).split():
+                    if r not in JXG_ROLES:
+                        rep.err(iw, 'disallowed or unknown role "%s" (allowed: %s)' % (r, ', '.join(sorted(JXG_ROLES))))
+            if item.get('name'):
+                names.add(item['name'])
+            if item.get('id'):
+                names.add(item['id'])
+            if tp == 'point':
+                if not _is_pt_ref(item.get('coords')) and any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y')):
+                    rep.err(iw, 'point needs coords: [x, y]')
+            elif tp in ('line', 'segment', 'arrow'):
+                if not (_is_pt_ref(item.get('p1')) and _is_pt_ref(item.get('p2'))) and any(not isinstance(item.get(k), (int, float)) for k in ('x1', 'y1', 'x2', 'y2')):
+                    rep.err(iw, '%s needs p1 and p2' % tp)
+            elif tp in ('polyline', 'polygon', 'curve'):
+                pts = item.get('points')
+                if not isinstance(pts, list) or len(pts) < 2 or any(not _is_pt_ref(p) for p in pts):
+                    rep.err(iw, '%s needs a points list of [x, y] pairs or point IDs' % tp)
+            elif tp == 'circle':
+                if not _is_pt_ref(item.get('center')) or not isinstance(item.get('r'), (int, float)):
+                    rep.err(iw, 'circle needs center and numeric r')
+            elif tp == 'ellipse':
+                if not _is_pt_ref(item.get('center')) or any(not isinstance(item.get(k), (int, float)) for k in ('rx', 'ry')):
+                    rep.err(iw, 'ellipse needs center and numeric rx, ry')
+            elif tp == 'arc':
+                if not _is_pt_ref(item.get('center')) or any(not isinstance(item.get(k), (int, float)) for k in ('r', 'start', 'end')):
+                    rep.err(iw, 'arc needs center and numeric r, start, end')
+            elif tp == 'angle':
+                if not all(_is_pt_ref(item.get(k)) for k in ('p1', 'vertex', 'p2')):
+                    rep.err(iw, 'angle needs p1, vertex, p2')
+            elif tp in ('label', 'text'):
+                if (not _is_pt_ref(item.get('coords')) and any(not isinstance(item.get(k), (int, float)) for k in ('x', 'y'))) or not isinstance(item.get('text'), str):
+                    rep.err(iw, 'label needs coords: [x, y] and string text')
     return names
 
 
@@ -225,7 +247,7 @@
                 if meta.get('definitionChecks') and c.get('type') == 'info':
                     if (c.get('defines') and len(c['defines'])) or re.match(r'^What (?:is|are)\b', c.get('title', ''), re.I):
                         if not c.get('art'):
-                            rep.err(cw, 'definition recall card needs a canvas2d "art" drawing list on its flip back')
+                            rep.err(cw, 'definition recall card needs a JSXGraph "art" figure on its flip back')
                 if 'uid' in c:
                     uid = c['uid']
                     if not isinstance(uid, str) or not re.fullmatch(r'[a-z][a-z0-9-]*', uid):
@@ -258,9 +280,9 @@
         for field in ('term', 'meaning', 'picture', 'example', 'bridge'):
             if not isinstance(c.get(field), str) or not c[field].strip():
                 rep.err(w, 'intuition needs a non-empty ' + field)
         if not c.get('art') and not c.get('three'):
-            rep.err(w, 'intuition card needs a canvas2d "art" list (or "three" on the meridional-ray card)')
+            rep.err(w, 'intuition card needs a JSXGraph "art" figure (or "three" on the meridional-ray card)')
     if t in ('info', 'intuition', 'question') and c.get('art') is not None:
-        check_canvas_ops(c['art'], w + '.art', rep)
+        check_jxg_diagram(c['art'], w + '.art', rep)
     if t == 'question':
         if 'textAnswer' in c and not isinstance(c['textAnswer'], bool):
             rep.err(w, 'textAnswer must be true or false')
@@ -317,7 +339,7 @@
 def check_derivation(d, w, rep):
     setup_names = set()
     if d.get('setup') is not None:
-        setup_names = check_canvas_ops(d['setup'], w + '.setup', rep)
+        setup_names = check_jxg_diagram(d['setup'], w + '.setup', rep)
     steps = d.get('steps')
     if not isinstance(steps, list) or len(steps) < 2:
         rep.err(w, 'derivation needs at least 2 steps'); return
```

---

### 3. Short Notes

#### What Changed
1. **JSXGraph (`1.14.0`) replaces Canvas2D (`02-canvas.js` → `02-diagram.js`)**:
   - Removed `study-match/src/components/02-canvas.js` and added `study-match/src/components/02-diagram.js`.
   - Every 2D diagram in `data.json` and `example-minimal.json` (`art` on `intuition`, `info`, and recall cards; `setup` on `derivation` cards) is now a declarative JSON object with `"view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false }` and construction `"steps"`.
   - Each board is sized to fit its container on phone and desktop (`ResizeObserver` + `board.resizeContainer`) and updates its colours live from `01-tokens.css` when switching between light and dark mode.
2. **Step-by-step build-up and smooth zoom instead of yellow highlights**:
   - Removed all yellow/amber highlights (`--amber`, `--hl`, roles `h` and `hk`) from figures, icons, and MathFlow equations.
   - In derivations, `setup.steps` starts with the base figure at `step: 0` and adds triangles, rays, perpendiculars, angles, and labels at subsequent steps (`step: 1, 2, ...`). Earlier objects stay on screen while newly added objects fade in.
   - When a step specifies `"focus": [...]`, the JSXGraph board calculates the bounding box around the focused objects and smoothly animates `board.setBoundingBox(...)` to zoom in on that region, then zooms back out to the full overview when focus ends or when viewing **All steps**.
3. **KaTeX (`0.19.0`) replaces MathJax (`3.2.2`)**:
   - Replaced MathJax in `template.html` with KaTeX `0.19.0` (`katex.min.css`, `katex.min.js`, and `contrib/auto-render.min.js`) from `cdnjs.cloudflare.com`.
   - Updated `SM.mathReady` and `SM.typeset` to use `window.katex` and `window.renderMathInElement` for all inline `\( … \)` and display `\[ … \]` maths.
4. **How MathFlow (`02-mathflow.js`) was rebuilt on KaTeX HTML output**:
   - In `measure(tex, size)`, each derivation line is rendered off-screen with `katex.render(tex, node, { displayMode: true, throwOnError: false, output: 'html' })`.
   - We walk the `.katex-html` tree using a `TreeWalker` + DOM `Range` (`range.getBoundingClientRect()`) to measure the exact bounding box and computed font styles (`fontFamily`, `fontSize`, `fontStyle`, `fontWeight`) of every individual character, plus `.frac-line` / `.overline-line` bars and `.hide-tail` square-root radicals.
   - Each measured piece is placed as an HTML `<span>` sprite (`.mf-sp`, `.mf-sp-bar`, `.mf-sp-svg`) aligned on the top-level `=` column, and animated between steps using the Web Animations API (gliding matched symbols, arcing across `=`, striking through cancelled terms, and fading in new terms in palette `--violet`).
5. **Three.js (`r128`) kept for the meridional-ray card only**:
   - Kept lazy-loaded from `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js` when the meridional-ray sheet opens, updated to use palette `--violet` and `--ink` with no yellow.

#### Pinned Library Versions & cdnjs Paths
- **JSXGraph `1.14.0`** (matches the official 1.14.0 API docs generated 2026-10-05, > 2 weeks old):
  - `https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.14.0/jsxgraph.min.css`
  - `https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.14.0/jsxgraphcore.js`
- **KaTeX `0.19.0`** (matches the official `0.19.0` auto-render docs):
  - `https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.19.0/katex.min.css`
  - `https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.19.0/katex.min.js`
  - `https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.19.0/contrib/auto-render.min.js`
- **Three.js `r128`** (unchanged, lazy-loaded for the meridional ray only):
  - `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`

#### JSXGraph & KaTeX Calls and Options Used
- **JSXGraph (`window.JXG.JSXGraph`)**:
  - `JXG.JSXGraph.initBoard(id, { boundingbox, axis, grid, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false } })`
  - `JXG.JSXGraph.freeBoard(board)`
  - `board.setBoundingBox([x1, y1, x2, y2], false)`
  - `board.resizeContainer(width, height)`
  - `board.suspendUpdate()` / `board.unsuspendUpdate()`
  - `board.create('point' | 'line' | 'segment' | 'arrow' | 'polygon' | 'curve' | 'circle' | 'arc' | 'nonreflexangle' | 'text', parents, attributes)`
  - `element.setAttribute({ visible, strokeOpacity, fillOpacity })`
- **KaTeX (`window.katex` & `window.renderMathInElement`)**:
  - `katex.render(tex, element, { displayMode: true, throwOnError: false, output: 'html' })`
  - `renderMathInElement(element, { delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }], ignoredClasses: ['katex', 'katex-display', 'mf-stage'], throwOnError: false })`
