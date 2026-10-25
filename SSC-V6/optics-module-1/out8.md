Here are the four items for **Optics Module 3 — Diffraction (items 12–16)**:

1. **`data-module3.json`** — full JSON file with Module 3 glossary terms (`optics-m3-…`) and two sections covering Syllabus Units 12–16 from Ghatak, *Optics* (6th ed., Chapters 18 and 20).
2. **`update_module1.py`** — generalised merge script that detects the module prefix from the new module file (`optics-m3-`), refuses to overwrite an existing module backup (`data.before-module3.json`), checks for duplicate IDs across all modules, merges glossary entries and sections into `data/data.json`, and runs `python3 build.py --check`.
3. **`data-module1-updates.json`** — `[]` (no existing Module 1 or Module 2 cards need changes).
4. **Unified diff for `build.py`** and plain-English notes.

---

### 1. `data-module3.json`

```json
{
  "glossary": [
    {
      "id": "optics-m3-fraunhofer-diffraction",
      "term": "Fraunhofer diffraction",
      "aliases": [
        "Fraunhofer class",
        "far-field diffraction"
      ],
      "definition": "Fraunhofer diffraction is the bending of light at an opening when both the light source and the screen are effectively at infinite distance, so the waves entering and leaving the opening are flat plane waves.",
      "example": "A convex lens placed before the slit makes the incoming rays parallel, and a second convex lens focuses parallel diffracted rays onto the screen."
    },
    {
      "id": "optics-m3-single-slit-diffraction",
      "term": "single-slit diffraction pattern",
      "aliases": [
        "single-slit diffraction",
        "central maximum"
      ],
      "definition": "The single-slit diffraction pattern is the band of light formed by a narrow slit of width b, having a wide bright central maximum and much weaker side maxima separated by dark minima at b sin θ = mλ.",
      "example": "For a slit of width b = 0.2 mm and wavelength λ = 5 × 10⁻⁵ cm, the first dark minimum appears at θ ≈ 2.5 × 10⁻³ rad on each side of the center."
    },
    {
      "id": "optics-m3-double-slit-diffraction",
      "term": "two-slit Fraunhofer pattern",
      "aliases": [
        "double-slit diffraction",
        "two-slit diffraction"
      ],
      "definition": "The two-slit Fraunhofer pattern is the intensity pattern of two parallel slits of width b and separation d, equal to the single-slit diffraction pattern multiplied by the two-point-source interference pattern.",
      "example": "Narrow cos²γ interference fringes sit inside a wider (sin²β / β²) single-slit diffraction envelope."
    },
    {
      "id": "optics-m3-missing-orders",
      "term": "missing orders",
      "aliases": [
        "missing order",
        "absent order"
      ],
      "definition": "Missing orders are interference bright fringes that disappear because their diffraction angle θ lands right on a zero-intensity minimum of the single-slit diffraction envelope.",
      "example": "When slit separation d is three times slit width b (d = 3b), the 3rd, 6th, and 9th interference bright fringes are missing."
    },
    {
      "id": "optics-m3-principal-maxima",
      "term": "principal maxima",
      "aliases": [
        "principal maximum",
        "secondary minima",
        "secondary maxima"
      ],
      "definition": "Principal maxima are the sharp, intense bright peaks of an N-slit diffraction pattern where waves from all N slits arrive in phase at d sin θ = mλ, separated by N - 1 dark secondary minima.",
      "example": "For N = 5 slits, each principal maximum has 25 times the single-slit intensity, with 4 dark secondary minima and 3 weak secondary maxima between adjacent peaks."
    },
    {
      "id": "optics-m3-diffraction-grating",
      "term": "diffraction grating",
      "aliases": [
        "grating",
        "grating element",
        "grating spectrum",
        "normal spectrum"
      ],
      "definition": "A diffraction grating is an optical flat with thousands of parallel, equally spaced slits of spacing d (the grating element) that bends different wavelengths to different angles according to d sin θ = mλ.",
      "example": "Rowland's grating has 14,438 lines per inch, giving a grating element d = 2.54 / 14438 ≈ 1.759 × 10⁻⁴ cm."
    },
    {
      "id": "optics-m3-resolving-power-grating",
      "term": "resolving power of a grating",
      "aliases": [
        "Rayleigh criterion",
        "chromatic resolving power"
      ],
      "definition": "The resolving power R = λ / Δλ of a diffraction grating is its ability to separate two close wavelengths λ and λ + Δλ, equal to the product of spectral order m and total illuminated rulings N.",
      "example": "To separate the two yellow sodium D₁ and D₂ lines (λ ≈ 5890 Å, Δλ = 6 Å) in the first order (m = 1), the beam must cover at least N ≈ 1000 grating lines."
    },
    {
      "id": "optics-m3-fresnel-half-period-zones",
      "term": "Fresnel half-period zones",
      "aliases": [
        "half-period zone",
        "half-period zones",
        "Fresnel zones"
      ],
      "definition": "Fresnel half-period zones are concentric ring areas on a wavefront whose outer edges are successively λ/2 farther from screen point P, so waves from adjacent zones arrive at P out of phase by π.",
      "example": "The n-th zone on a plane wavefront has radius r_n ≈ √(nλd), and every zone has the same area πλd."
    },
    {
      "id": "optics-m3-poisson-spot",
      "term": "Poisson spot",
      "aliases": [
        "Arago spot",
        "Poisson's spot"
      ],
      "definition": "The Poisson spot is the bright point of light that always forms at the exact center of the geometric shadow behind an opaque circular disc lit by a plane wave.",
      "example": "If a circular coin blocks the first p half-period zones, the remaining unblocked zones sum to amplitude u_{p+1} / 2 and create a central bright spot."
    },
    {
      "id": "optics-m3-zone-plate",
      "term": "zone plate",
      "aliases": [
        "Fresnel zone plate",
        "zone-plate"
      ],
      "definition": "A zone plate is a flat screen of concentric circles with radii proportional to √n in which every second ring is blackened, so all open half-period zones add in phase at focal distance f = r₁² / λ.",
      "example": "A zone plate with radii r_n = 0.1√n cm and λ = 5 × 10⁻⁵ cm forms its brightest focus at f = 200 cm and weaker foci at 200/3 cm and 200/5 cm."
    },
    {
      "id": "optics-m3-fresnel-integrals",
      "term": "Fresnel integrals",
      "aliases": [
        "Fresnel integral"
      ],
      "definition": "The Fresnel integrals C(τ) = ∫₀^τ cos(πu²/2) du and S(τ) = ∫₀^τ sin(πu²/2) du give the horizontal and vertical components of the diffracted wave amplitude in Fresnel diffraction.",
      "example": "Both C(τ) and S(τ) are zero at τ = 0 and approach 1/2 as τ goes to infinity."
    },
    {
      "id": "optics-m3-cornus-spiral",
      "term": "Cornu's spiral",
      "aliases": [
        "Cornu spiral"
      ],
      "definition": "Cornu's spiral is the double-spiral curve obtained by plotting C(τ) on the horizontal axis and S(τ) on the vertical axis as τ runs from -∞ to +∞.",
      "example": "The straight chord length between two points τ₁ and τ₂ on Cornu's spiral gives the resultant wave amplitude from that portion of the wavefront."
    },
    {
      "id": "optics-m3-straight-edge-diffraction",
      "term": "straight-edge diffraction",
      "aliases": [
        "diffraction at a straight edge",
        "geometrical shadow edge"
      ],
      "definition": "Straight-edge diffraction is the Fresnel pattern behind a sharp half-plane barrier: intensity is I₀ / 4 at the shadow edge, drops smoothly to zero in the shadow, and ripples up to 1.37 I₀ in the lit region.",
      "example": "Right on the geometrical shadow boundary y = 0, half the wavefront is blocked so amplitude is u₀ / 2 and intensity is I₀ / 4."
    }
  ],
  "sections": [
    {
      "short": "Fraunhofer",
      "title": "Fraunhofer Diffraction & Gratings",
      "sheets": [
        {
          "id": "optics-m3-single-slit-fraunhofer",
          "title": "Single-slit Fraunhofer diffraction",
          "icon": "wave",
          "source": "Unit 12 · Ghatak §§18.1–18.2 (PDF pp. 280–283); syllabus item 12",
          "cards": [
            {
              "type": "intuition",
              "term": "optics-m3-fraunhofer-diffraction",
              "title": "Moving the source and screen to infinity with two lenses",
              "meaning": "Fraunhofer diffraction happens when the incoming wave and the outgoing diffracted waves are flat plane waves, which we easily get by using two convex lenses.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"14\" y1=\"96\" x2=\"244\" y2=\"96\" class=\"gk\"/><path d=\"M 62 34 Q 52 96 62 158 Q 72 96 62 34 Z\" class=\"s ok\"/><path d=\"M 156 30 Q 144 96 156 162 Q 168 96 156 30 Z\" class=\"s ok\"/><line x1=\"104\" y1=\"18\" x2=\"104\" y2=\"64\" class=\"ik\"/><line x1=\"104\" y1=\"128\" x2=\"104\" y2=\"172\" class=\"ik\"/><line x1=\"228\" y1=\"20\" x2=\"228\" y2=\"170\" class=\"ik\"/><line x1=\"22\" y1=\"96\" x2=\"62\" y2=\"54\" class=\"lk\"/><line x1=\"22\" y1=\"96\" x2=\"62\" y2=\"138\" class=\"lk\"/><line x1=\"62\" y1=\"54\" x2=\"104\" y2=\"54\" class=\"lk\"/><line x1=\"62\" y1=\"138\" x2=\"104\" y2=\"138\" class=\"lk\"/><line x1=\"104\" y1=\"72\" x2=\"156\" y2=\"52\" class=\"lk\"/><line x1=\"104\" y1=\"120\" x2=\"156\" y2=\"100\" class=\"lk\"/><line x1=\"156\" y1=\"52\" x2=\"228\" y2=\"56\" class=\"lk\"/><line x1=\"156\" y1=\"100\" x2=\"228\" y2=\"56\" class=\"lk\"/><circle cx=\"22\" cy=\"96\" r=\"3.5\" class=\"f\"/><circle cx=\"228\" cy=\"56\" r=\"3.5\" class=\"f\"/><circle cx=\"228\" cy=\"96\" r=\"3.5\" class=\"f\"/><text x=\"16\" y=\"84\" class=\"t\">S</text><text x=\"94\" y=\"99\" class=\"t\">b</text><text x=\"128\" y=\"84\" class=\"t\">θ</text><text x=\"156\" y=\"24\" text-anchor=\"middle\" class=\"t\">L</text><text x=\"192\" y=\"158\" text-anchor=\"middle\" class=\"t\">f</text><text x=\"236\" y=\"60\" class=\"t\">P</text><text x=\"236\" y=\"100\" class=\"t\">O</text></svg>",
              "picture": "Look at the two lenses: the first turns light from S into a parallel beam on slit b, and lens L focuses parallel rays at angle θ to point P.",
              "example": "In a school laboratory spectrometer, the collimator provides parallel rays and the telescope focuses them onto the crosswires.",
              "bridge": "Inside the slit of width b, we model the plane wavefront as n equally spaced Huygens point sources A₁, A₂, …, A_n with spacing Δ so b = (n - 1)Δ."
            },
            {
              "type": "info",
              "label": "01 · §§18.1–18.2 Definition",
              "title": "What is Fraunhofer diffraction at a single slit?",
              "defines": [
                "optics-m3-fraunhofer-diffraction"
              ],
              "body": "Fraunhofer diffraction occurs when source and screen are effectively at infinity using lenses. A plane wave hitting a slit of width b excites n point sources of spacing Δ that send parallel rays at angle θ to P.",
              "tex": "b = (n - 1)\\Delta, \\quad \\Delta_{\\text{path}} = A_2 A_2' = \\Delta\\sin\\theta, \\quad \\phi = \\frac{2\\pi}{\\lambda}\\Delta\\sin\\theta",
              "examples": [
                "Fresnel: finite distance",
                "Fraunhofer: plane waves",
                "Spectrometer setup"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "fraunhofer",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          14,
                          90
                        ],
                        "p2": [
                          234,
                          90
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "axis"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          54,
                          166
                        ],
                        "p2": [
                          54,
                          128
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "slit"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          54,
                          52
                        ],
                        "p2": [
                          54,
                          14
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "slit"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            146,
                            154
                          ],
                          [
                            134,
                            90
                          ],
                          [
                            146,
                            26
                          ],
                          [
                            158,
                            90
                          ],
                          [
                            146,
                            154
                          ]
                        ],
                        "closed": true,
                        "role": "s ok",
                        "name": "L"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          228,
                          164
                        ],
                        "p2": [
                          228,
                          16
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          16,
                          114
                        ],
                        "p2": [
                          50,
                          114
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "inc"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          16,
                          66
                        ],
                        "p2": [
                          50,
                          66
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "inc"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            54,
                            118
                          ],
                          [
                            146,
                            138
                          ],
                          [
                            228,
                            134
                          ]
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "ray1"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            54,
                            62
                          ],
                          [
                            146,
                            82
                          ],
                          [
                            228,
                            134
                          ]
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "ray2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          54,
                          118
                        ],
                        "p2": [
                          66,
                          65
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.6,
                        "name": "perp"
                      },
                      {
                        "type": "point",
                        "coords": [
                          54,
                          118
                        ],
                        "id": "A1",
                        "role": "f",
                        "name": "A1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          54,
                          62
                        ],
                        "id": "An",
                        "role": "f",
                        "name": "An"
                      },
                      {
                        "type": "point",
                        "coords": [
                          228,
                          90
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "O"
                      },
                      {
                        "type": "point",
                        "coords": [
                          228,
                          134
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          40,
                          120
                        ],
                        "text": "A₁",
                        "size": 11,
                        "role": "t",
                        "name": "A1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          38,
                          90
                        ],
                        "text": "b",
                        "size": 11,
                        "role": "t",
                        "name": "slit"
                      },
                      {
                        "type": "label",
                        "coords": [
                          92,
                          112
                        ],
                        "text": "θ",
                        "size": 11,
                        "role": "t",
                        "name": "ray1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          92,
                          52
                        ],
                        "text": "b sin θ",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "perp"
                      },
                      {
                        "type": "label",
                        "coords": [
                          146,
                          162
                        ],
                        "text": "L (f)",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "L"
                      },
                      {
                        "type": "label",
                        "coords": [
                          240,
                          90
                        ],
                        "text": "O",
                        "size": 11,
                        "role": "t",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          240,
                          134
                        ],
                        "text": "P",
                        "size": 11,
                        "role": "t",
                        "name": "P"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "label": "02 · §18.2 Derivation",
              "title": "Single-slit Fraunhofer amplitude and intensity",
              "legend": "Slit of width \\(b = (n-1)\\Delta\\) with \\(n\\) Huygens point sources \\(A_1, A_2, \\dots\\), diffraction angle \\(\\theta\\), and \\(\\beta = \\frac{\\pi b\\sin\\theta}{\\lambda}\\) (Eqs. 18.1–18.10, Fig. 18.3).",
              "setup": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "Phase step",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          14,
                          90
                        ],
                        "p2": [
                          234,
                          90
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "axis"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          56,
                          164
                        ],
                        "p2": [
                          56,
                          132
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "b"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          56,
                          48
                        ],
                        "p2": [
                          56,
                          16
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "b"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          56,
                          122
                        ],
                        "p2": [
                          146,
                          144
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "A1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          56,
                          96
                        ],
                        "p2": [
                          146,
                          118
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "A2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          56,
                          122
                        ],
                        "p2": [
                          62,
                          97
                        ],
                        "role": "ik",
                        "width": 2,
                        "name": "Delta"
                      },
                      {
                        "type": "point",
                        "coords": [
                          56,
                          122
                        ],
                        "id": "A1",
                        "role": "f",
                        "name": "A1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          56,
                          96
                        ],
                        "id": "A2",
                        "role": "f",
                        "name": "A2"
                      },
                      {
                        "type": "point",
                        "coords": [
                          56,
                          70
                        ],
                        "id": "A3",
                        "role": "f",
                        "name": "b"
                      },
                      {
                        "type": "label",
                        "coords": [
                          38,
                          122
                        ],
                        "text": "A₁",
                        "size": 11,
                        "role": "t",
                        "name": "A1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          38,
                          96
                        ],
                        "text": "A₂",
                        "size": 11,
                        "role": "t",
                        "name": "A2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          24,
                          109
                        ],
                        "text": "Δ",
                        "size": 11,
                        "role": "t",
                        "name": "Delta"
                      },
                      {
                        "type": "label",
                        "coords": [
                          38,
                          62
                        ],
                        "text": "b",
                        "size": 11,
                        "role": "t",
                        "name": "b"
                      },
                      {
                        "type": "label",
                        "coords": [
                          86,
                          106
                        ],
                        "text": "Δ sin θ",
                        "size": 10,
                        "role": "t",
                        "name": "theta"
                      }
                    ]
                  },
                  {
                    "step": 1,
                    "name": "Sum wavelets",
                    "objects": [
                      {
                        "type": "curve",
                        "points": [
                          [
                            146,
                            154
                          ],
                          [
                            134,
                            90
                          ],
                          [
                            146,
                            26
                          ],
                          [
                            158,
                            90
                          ],
                          [
                            146,
                            154
                          ]
                        ],
                        "closed": true,
                        "role": "s ok",
                        "name": "lens"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          228,
                          162
                        ],
                        "p2": [
                          228,
                          18
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          146,
                          144
                        ],
                        "p2": [
                          228,
                          136
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "P"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          146,
                          118
                        ],
                        "p2": [
                          228,
                          136
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "P"
                      },
                      {
                        "type": "point",
                        "coords": [
                          228,
                          136
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "point",
                        "coords": [
                          228,
                          90
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          240,
                          136
                        ],
                        "text": "P",
                        "size": 11,
                        "role": "t",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          240,
                          90
                        ],
                        "text": "O",
                        "size": 11,
                        "role": "t",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          188,
                          24
                        ],
                        "text": "f",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "lens"
                      }
                    ]
                  },
                  {
                    "step": 3,
                    "name": "Continuous limit",
                    "objects": [
                      {
                        "type": "label",
                        "coords": [
                          130,
                          166
                        ],
                        "text": "β = (π b sin θ) / λ",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "beta"
                      }
                    ]
                  }
                ]
              },
              "phases": [
                {
                  "name": "Phase step",
                  "why": "write phase lag φ between adjacent point sources separated by Δ"
                },
                {
                  "name": "Sum wavelets",
                  "why": "add the n cosine waves and sum the trigonometric series"
                },
                {
                  "name": "Continuous limit",
                  "why": "let n → ∞ and Δ → 0 with nΔ → b so nφ/2 → β"
                },
                {
                  "name": "Intensity law",
                  "why": "square the field amplitude to obtain the sinc-squared intensity"
                }
              ],
              "steps": [
                {
                  "phase": "Phase step",
                  "focus": [
                    "A1",
                    "A2",
                    "Delta",
                    "theta"
                  ],
                  "tex": "\\phi = \\frac{2\\pi}{\\lambda}\\Delta\\sin\\theta",
                  "note": "Adjacent sources \\(A_1, A_2\\) at spacing \\(\\Delta\\) have path difference \\(\\Delta\\sin\\theta\\) (Eq. 18.2)."
                },
                {
                  "phase": "Sum wavelets",
                  "focus": [
                    "A1",
                    "A2",
                    "P",
                    "lens"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Superpose the n secondary wavelets at P (Eq. 18.3)"
                  },
                  "tex": "E = a[\\cos\\omega t + \\cos(\\omega t - \\phi) + \\dots + \\cos(\\omega t - (n - 1)\\phi)]",
                  "note": "Each point source sends a wave of amplitude \\(a\\) shifted in phase by \\(\\phi\\) from its neighbour (Eq. 18.3).",
                  "ask": {
                    "q": "What is the amplitude \\(E_\\theta\\) of this sum of \\(n\\) cosine terms?",
                    "options": [
                      "\\(a\\sin(n\\phi/2)/\\sin(\\phi/2)\\)",
                      "\\(na\\cos(n\\phi)\\)",
                      "\\(a\\sin(\\phi/2)/\\sin(n\\phi/2)\\)",
                      "\\(2a\\cos(\\phi/2)\\)"
                    ],
                    "answer": 0,
                    "why": "Summing \\(n\\) harmonic waves with uniform phase step \\(\\phi\\) gives amplitude \\(a\\frac{\\sin(n\\phi/2)}{\\sin(\\phi/2)}\\) (Eq. 18.6)."
                  }
                },
                {
                  "focus": [
                    "P",
                    "b"
                  ],
                  "move": {
                    "type": "identity",
                    "by": "\\sum_{k=0}^{n-1}\\cos(\\omega t - k\\phi) = \\frac{\\sin(n\\phi/2)}{\\sin(\\phi/2)}\\cos(\\omega t - \\tfrac{1}{2}(n-1)\\phi)"
                  },
                  "tex": "E_\\theta = a\\frac{\\sin(n\\phi / 2)}{\\sin(\\phi / 2)}",
                  "note": "Write the resultant amplitude \\(E_\\theta\\) of the \\(n\\) interfering point sources (Eq. 18.6)."
                },
                {
                  "phase": "Continuous limit",
                  "focus": [
                    "b",
                    "Delta",
                    "beta"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "n\\Delta \\to b"
                  },
                  "tex": "\\frac{n\\phi}{2} = \\frac{\\pi b\\sin\\theta}{\\lambda}",
                  "note": "In the continuous limit \\(n \\to \\infty, \\Delta \\to 0\\) with \\(n\\Delta \\to b\\), \\(n\\phi/2\\) becomes \\((\\pi b\\sin\\theta)/\\lambda\\).",
                  "ask": {
                    "q": "As \\(n \\to \\infty\\) and \\(\\Delta \\to 0\\), what does the product \\(n\\Delta\\) approach?",
                    "options": [
                      "Wavelength \\(\\lambda\\)",
                      "Slit width \\(b\\)",
                      "Focal length \\(f\\)",
                      "Zero"
                    ],
                    "answer": 1,
                    "why": "Since \\(b = (n - 1)\\Delta\\), letting \\(n \\to \\infty\\) and \\(\\Delta \\to 0\\) makes \\(n\\Delta\\) approach the total slit width \\(b\\)."
                  }
                },
                {
                  "focus": [
                    "beta",
                    "b",
                    "theta"
                  ],
                  "move": {
                    "type": "define",
                    "by": "\\beta = \\frac{\\pi b\\sin\\theta}{\\lambda}"
                  },
                  "tex": "\\beta = \\frac{\\pi b\\sin\\theta}{\\lambda}",
                  "note": "Define the dimensionless diffraction variable \\(\\beta\\) as half the phase difference across the whole slit (Eq. 18.8).",
                  "ask": {
                    "q": "Since \\(\\phi/2 = \\beta/n\\) is very small as \\(n \\to \\infty\\), what replaces \\(\\sin(\\phi/2)\\)?",
                    "options": [
                      "\\(1\\)",
                      "\\(n\\beta\\)",
                      "\\(\\beta / n\\)",
                      "\\(\\cos\\beta\\)"
                    ],
                    "answer": 2,
                    "why": "For an infinitesimally small angle \\(\\phi/2 = \\beta/n\\), \\(\\sin(\\phi/2) \\approx \\phi/2 = \\beta/n\\)."
                  }
                },
                {
                  "focus": [
                    "beta",
                    "P"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "\\sin(\\phi / 2) \\approx \\frac{\\beta}{n},\\,A = na"
                  },
                  "tex": "E_\\theta = A\\frac{\\sin\\beta}{\\beta}",
                  "note": "Replace \\(\\sin(\\phi/2)\\) by \\(\\beta/n\\) and set \\(A = na\\) for the central amplitude at \\(\\theta = 0\\) (Eq. 18.7)."
                },
                {
                  "focus": [
                    "beta",
                    "P",
                    "O"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Include the harmonic time factor cos(ωt - β) (Eq. 18.9)"
                  },
                  "tex": "E = A\\frac{\\sin\\beta}{\\beta}\\cos(\\omega t - \\beta)",
                  "note": "Since \\(\\frac{1}{2}(n-1)\\phi \\to \\beta\\), the resultant electric field at \\(P\\) is Eq. (18.9).",
                  "ask": {
                    "q": "Since intensity \\(I\\) is proportional to \\(E_\\theta^2\\), how does \\(I\\) depend on \\(\\beta\\)?",
                    "options": [
                      "\\(I = I_0 \\cos^2\\beta\\)",
                      "\\(I = I_0 (\\sin\\beta / \\beta)\\)",
                      "\\(I = I_0 (\\beta^2 / \\sin^2\\beta)\\)",
                      "\\(I = I_0 (\\sin^2\\beta / \\beta^2)\\)"
                    ],
                    "answer": 3,
                    "why": "Squaring the amplitude \\(E_\\theta = A(\\sin\\beta/\\beta)\\) gives \\(I = I_0(\\sin^2\\beta/\\beta^2)\\) (Eq. 18.10)."
                  }
                },
                {
                  "phase": "Intensity law",
                  "focus": [
                    "beta",
                    "P",
                    "O",
                    "screen"
                  ],
                  "move": {
                    "type": "power",
                    "by": "2",
                    "label": "Square the amplitude and set I₀ ∝ A² (Eq. 18.10)"
                  },
                  "tex": "I = I_0\\frac{\\sin^2\\beta}{\\beta^2}",
                  "note": "This is the single-slit Fraunhofer intensity distribution, where \\(I_0\\) is the intensity at \\(\\theta = 0\\) (Eq. 18.10)."
                }
              ]
            },
            {
              "type": "intuition",
              "term": "optics-m3-single-slit-diffraction",
              "title": "Why the top and bottom halves of a slit cancel at the first dark band",
              "meaning": "At the first dark minimum (b sin θ = λ), we can pair every point in the upper half of the slit with a twin point b/2 below it that is half a wavelength out of step.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"64\" y1=\"14\" x2=\"64\" y2=\"40\" class=\"ik\"/><line x1=\"64\" y1=\"144\" x2=\"64\" y2=\"170\" class=\"ik\"/><line x1=\"64\" y1=\"92\" x2=\"54\" y2=\"92\" class=\"gk\"/><line x1=\"64\" y1=\"46\" x2=\"196\" y2=\"22\" class=\"lk\"/><line x1=\"64\" y1=\"66\" x2=\"196\" y2=\"42\" class=\"ik\"/><line x1=\"64\" y1=\"98\" x2=\"196\" y2=\"74\" class=\"lk\"/><line x1=\"64\" y1=\"118\" x2=\"196\" y2=\"94\" class=\"ik\"/><line x1=\"64\" y1=\"46\" x2=\"73\" y2=\"96\" class=\"gk\"/><circle cx=\"64\" cy=\"46\" r=\"3.5\" class=\"f\"/><circle cx=\"64\" cy=\"66\" r=\"3.5\" class=\"f\"/><circle cx=\"64\" cy=\"98\" r=\"3.5\" class=\"f\"/><circle cx=\"64\" cy=\"118\" r=\"3.5\" class=\"f\"/><text x=\"48\" y=\"50\" class=\"t\">A</text><text x=\"48\" y=\"70\" class=\"t\">B</text><text x=\"46\" y=\"102\" class=\"t\">A'</text><text x=\"46\" y=\"122\" class=\"t\">B'</text><text x=\"18\" y=\"76\" class=\"t\">b/2</text><text x=\"18\" y=\"118\" class=\"t\">b/2</text><text x=\"152\" y=\"130\" text-anchor=\"middle\" class=\"t\">(b/2) sin θ = λ/2 → phase π</text><text x=\"152\" y=\"152\" text-anchor=\"middle\" class=\"t\">Pairs (A, A') and (B, B') cancel!</text></svg>",
              "picture": "Look at twin points A and A' separated by b/2: when b sin θ = λ, their path difference is λ/2 so they cancel completely.",
              "example": "In the same way, when b sin θ = 2λ, dividing the slit into 4 equal quarters makes adjacent quarters cancel in pairs.",
              "bridge": "Between the zero-intensity minima at β = mπ (m = ±1, ±2, …), differentiating I(β) gives secondary maxima where tan β = β."
            },
            {
              "type": "info",
              "label": "03 · §18.2.1 Definition",
              "title": "What is the single-slit diffraction pattern?",
              "defines": [
                "optics-m3-single-slit-diffraction"
              ],
              "body": "The single-slit pattern has a central maximum I = I₀ at θ = 0 (since sin β/β → 1), dark minima I = 0 at b sin θ = mλ (m = ±1, ±2, …), and weak secondary maxima at the roots of tan β = β.",
              "tex": "b\\sin\\theta = m\\lambda \\;(m = \\pm 1, \\pm 2, \\dots\\text{ minima}), \\quad \\tan\\beta = \\beta \\;(\\text{maxima})",
              "examples": [
                "Central peak: β = 0 (I₀)",
                "1st max: β = 1.43π (4.96%)",
                "2nd max: β = 2.46π (1.68%)"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "halves",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          166
                        ],
                        "p2": [
                          64,
                          140
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "wall"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          36
                        ],
                        "p2": [
                          64,
                          10
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "wall"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          132
                        ],
                        "p2": [
                          200,
                          156
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "rayA"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          112
                        ],
                        "p2": [
                          200,
                          136
                        ],
                        "role": "ik",
                        "width": 2,
                        "name": "rayB"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          80
                        ],
                        "p2": [
                          200,
                          104
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "rayAp"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          60
                        ],
                        "p2": [
                          200,
                          84
                        ],
                        "role": "ik",
                        "width": 2,
                        "name": "rayBp"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          132
                        ],
                        "p2": [
                          73,
                          82
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.6,
                        "name": "perp"
                      },
                      {
                        "type": "point",
                        "coords": [
                          64,
                          132
                        ],
                        "id": "A",
                        "role": "f",
                        "name": "A"
                      },
                      {
                        "type": "point",
                        "coords": [
                          64,
                          112
                        ],
                        "id": "B",
                        "role": "f",
                        "name": "B"
                      },
                      {
                        "type": "point",
                        "coords": [
                          64,
                          80
                        ],
                        "id": "Ap",
                        "role": "f",
                        "name": "Ap"
                      },
                      {
                        "type": "point",
                        "coords": [
                          64,
                          60
                        ],
                        "id": "Bp",
                        "role": "f",
                        "name": "Bp"
                      },
                      {
                        "type": "label",
                        "coords": [
                          48,
                          132
                        ],
                        "text": "A",
                        "size": 11,
                        "role": "t",
                        "name": "A"
                      },
                      {
                        "type": "label",
                        "coords": [
                          48,
                          112
                        ],
                        "text": "B",
                        "size": 11,
                        "role": "t",
                        "name": "B"
                      },
                      {
                        "type": "label",
                        "coords": [
                          46,
                          80
                        ],
                        "text": "A'",
                        "size": 11,
                        "role": "t",
                        "name": "Ap"
                      },
                      {
                        "type": "label",
                        "coords": [
                          46,
                          60
                        ],
                        "text": "B'",
                        "size": 11,
                        "role": "t",
                        "name": "Bp"
                      },
                      {
                        "type": "label",
                        "coords": [
                          22,
                          106
                        ],
                        "text": "b/2",
                        "size": 11,
                        "role": "t",
                        "name": "A"
                      },
                      {
                        "type": "label",
                        "coords": [
                          154,
                          42
                        ],
                        "text": "b sin θ = λ (1st minimum)",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "perp"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "04 · §18.2.1 Intensity graph",
              "title": "Single-slit intensity distribution I = I₀(sin²β/β²) (Fig. 18.4)",
              "body": "The central maximum at β = 0 reaches I₀, flanked by zero minima at β = ±π, ±2π, ±3π. Secondary maxima at roots of tan β = β (β = ±1.43π, ±2.46π) have heights 4.96% and 1.68% of I₀.",
              "examples": [
                "Minima: β = ±mπ",
                "1st side peak: 4.96% I₀",
                "2nd side peak: 1.68% I₀"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "sinc2",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          12,
                          36
                        ],
                        "p2": [
                          248,
                          36
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "xaxis"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          130,
                          20
                        ],
                        "p2": [
                          130,
                          164
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "yaxis"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            20.0,
                            36.0
                          ],
                          [
                            21.8,
                            36.3
                          ],
                          [
                            23.7,
                            37.1
                          ],
                          [
                            25.5,
                            38.2
                          ],
                          [
                            27.3,
                            39.4
                          ],
                          [
                            29.2,
                            40.5
                          ],
                          [
                            31.0,
                            41.4
                          ],
                          [
                            32.8,
                            41.9
                          ],
                          [
                            34.7,
                            42.1
                          ],
                          [
                            36.5,
                            41.9
                          ],
                          [
                            38.3,
                            41.3
                          ],
                          [
                            40.2,
                            40.4
                          ],
                          [
                            42.0,
                            39.4
                          ],
                          [
                            43.8,
                            38.3
                          ],
                          [
                            45.7,
                            37.3
                          ],
                          [
                            47.5,
                            36.5
                          ],
                          [
                            49.3,
                            36.1
                          ],
                          [
                            51.2,
                            36.0
                          ],
                          [
                            53.0,
                            36.4
                          ],
                          [
                            54.8,
                            37.2
                          ],
                          [
                            56.7,
                            36.0
                          ],
                          [
                            58.5,
                            36.1
                          ],
                          [
                            60.3,
                            36.4
                          ],
                          [
                            62.2,
                            36.7
                          ],
                          [
                            64.0,
                            37.1
                          ],
                          [
                            65.8,
                            37.5
                          ],
                          [
                            67.7,
                            37.7
                          ],
                          [
                            69.5,
                            37.8
                          ],
                          [
                            71.3,
                            37.8
                          ],
                          [
                            73.2,
                            37.6
                          ],
                          [
                            75.0,
                            37.2
                          ],
                          [
                            76.8,
                            36.8
                          ],
                          [
                            78.7,
                            36.4
                          ],
                          [
                            80.5,
                            36.1
                          ],
                          [
                            82.3,
                            36.0
                          ],
                          [
                            84.2,
                            36.2
                          ],
                          [
                            86.0,
                            36.7
                          ],
                          [
                            87.8,
                            37.5
                          ],
                          [
                            89.7,
                            38.5
                          ],
                          [
                            91.5,
                            39.6
                          ],
                          [
                            93.3,
                            36.0
                          ],
                          [
                            95.2,
                            36.3
                          ],
                          [
                            97.0,
                            37.2
                          ],
                          [
                            98.8,
                            38.4
                          ],
                          [
                            100.7,
                            39.8
                          ],
                          [
                            102.5,
                            40.9
                          ],
                          [
                            104.3,
                            41.5
                          ],
                          [
                            106.2,
                            41.3
                          ],
                          [
                            108.0,
                            40.1
                          ],
                          [
                            109.8,
                            37.9
                          ],
                          [
                            111.7,
                            47.1
                          ],
                          [
                            113.5,
                            56.1
                          ],
                          [
                            115.3,
                            66.9
                          ],
                          [
                            117.2,
                            79.1
                          ],
                          [
                            119.0,
                            92.2
                          ],
                          [
                            120.8,
                            105.5
                          ],
                          [
                            122.7,
                            118.2
                          ],
                          [
                            124.5,
                            129.6
                          ],
                          [
                            126.3,
                            138.5
                          ],
                          [
                            128.2,
                            144.1
                          ],
                          [
                            130.0,
                            146.0
                          ],
                          [
                            131.8,
                            144.1
                          ],
                          [
                            133.7,
                            138.5
                          ],
                          [
                            135.5,
                            129.6
                          ],
                          [
                            137.3,
                            118.2
                          ],
                          [
                            139.2,
                            105.5
                          ],
                          [
                            141.0,
                            92.2
                          ],
                          [
                            142.8,
                            79.1
                          ],
                          [
                            144.7,
                            66.9
                          ],
                          [
                            146.5,
                            56.1
                          ],
                          [
                            148.3,
                            47.1
                          ],
                          [
                            150.2,
                            37.9
                          ],
                          [
                            152.0,
                            40.1
                          ],
                          [
                            153.8,
                            41.3
                          ],
                          [
                            155.7,
                            41.5
                          ],
                          [
                            157.5,
                            40.9
                          ],
                          [
                            159.3,
                            39.8
                          ],
                          [
                            161.2,
                            38.4
                          ],
                          [
                            163.0,
                            37.2
                          ],
                          [
                            164.8,
                            36.3
                          ],
                          [
                            166.7,
                            36.0
                          ],
                          [
                            168.5,
                            39.6
                          ],
                          [
                            170.3,
                            38.5
                          ],
                          [
                            172.2,
                            37.5
                          ],
                          [
                            174.0,
                            36.7
                          ],
                          [
                            175.8,
                            36.2
                          ],
                          [
                            177.7,
                            36.0
                          ],
                          [
                            179.5,
                            36.1
                          ],
                          [
                            181.3,
                            36.4
                          ],
                          [
                            183.2,
                            36.8
                          ],
                          [
                            185.0,
                            37.2
                          ],
                          [
                            186.8,
                            37.6
                          ],
                          [
                            188.7,
                            37.8
                          ],
                          [
                            190.5,
                            37.8
                          ],
                          [
                            192.3,
                            37.7
                          ],
                          [
                            194.2,
                            37.5
                          ],
                          [
                            196.0,
                            37.1
                          ],
                          [
                            197.8,
                            36.7
                          ],
                          [
                            199.7,
                            36.4
                          ],
                          [
                            201.5,
                            36.1
                          ],
                          [
                            203.3,
                            36.0
                          ]
                        ],
                        "role": "lk",
                        "width": 2.4,
                        "name": "curve"
                      },
                      {
                        "type": "label",
                        "coords": [
                          116,
                          154
                        ],
                        "text": "I/I₀",
                        "size": 11,
                        "role": "t",
                        "name": "yaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          93,
                          22
                        ],
                        "text": "-π",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          57,
                          22
                        ],
                        "text": "-2π",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          167,
                          22
                        ],
                        "text": "π",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          203,
                          22
                        ],
                        "text": "2π",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          240,
                          22
                        ],
                        "text": "β",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          182,
                          54
                        ],
                        "text": "1.43π (4.96%)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "curve"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "05 · §18.2.1 Examples 18.1–18.2",
              "title": "Worked example: minima spacing and central maximum width",
              "tex": "\\theta_1 \\approx \\frac{\\lambda}{b} = \\frac{5\\times 10^{-5}\\text{ cm}}{2\\times 10^{-2}\\text{ cm}} = 2.5\\times 10^{-3}\\text{ rad}, \\quad W = 2\\theta_1 D = 1.5\\text{ cm}",
              "body": "For \\(b = 0.2\\text{ mm}\\) and \\(\\lambda = 5\\times 10^{-5}\\text{ cm}\\), first and second minima are at \\(2.5\\times 10^{-3}\\) and \\(5\\times 10^{-3}\\text{ rad}\\), separated by \\(0.05\\text{ cm}\\) on a focal plane with \\(f = 20\\text{ cm}\\). At screen distance \\(D = 3\\text{ m}\\), total central width is \\(2\\theta_1 D = 1.5\\text{ cm}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "Where do zero-intensity minima occur in single-slit Fraunhofer diffraction?",
              "options": [
                "\\(b\\sin\\theta = m\\lambda\\; (m = \\pm 1, \\pm 2, \\dots)\\)",
                "\\(b\\sin\\theta = (m + 1/2)\\lambda\\)",
                "\\(\\tan\\beta = \\beta\\)",
                "\\(\\beta = 0\\) only"
              ],
              "answer": 0,
              "why": "Intensity \\(I = I_0(\\sin^2\\beta/\\beta^2)\\) vanishes when \\(\\beta = m\\pi\\) with \\(m \\neq 0\\), giving \\(b\\sin\\theta = m\\lambda\\) (Eq. 18.12)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "Which equation gives the positions of single-slit secondary maxima?",
              "options": [
                "\\(\\sin\\beta = 1\\)",
                "\\(\\tan\\beta = \\beta\\)",
                "\\(\\cos\\beta = 0\\)",
                "\\(\\beta = m\\pi\\)"
              ],
              "answer": 1,
              "why": "Setting \\(dI/d\\beta = 0\\) yields \\(\\sin\\beta(\\beta - \\tan\\beta) = 0\\), so maxima satisfy \\(\\tan\\beta = \\beta\\) (Eq. 18.16)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 45,
              "q": "At the first minimum \\(b\\sin\\theta = \\lambda\\), the two equal ______ of the slit cancel each other.",
              "answer": "halves|half-zones|halfs",
              "why": "Dividing the slit into two halves of width \\(b/2\\) pairs every point \\(A\\) with a point \\(A'\\) having path difference \\(\\lambda/2\\) (Fig. 18.5)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "A slit of width \\(b = 0.1\\text{ mm}\\) is lit by \\(\\lambda = 500\\text{ nm}\\). Find first minimum angle \\(\\theta_1\\) in mrad.",
              "answer": 5,
              "tolerance": 0.05,
              "unit": "mrad",
              "why": "\\(\\theta_1 \\approx \\frac{\\lambda}{b} = \\frac{5\\times 10^{-7}\\text{ m}}{10^{-4}\\text{ m}} = 5\\times 10^{-3}\\text{ rad} = 5\\text{ mrad}\\)."
            }
          ]
        },
        {
          "id": "optics-m3-two-slit-fraunhofer",
          "title": "Two-slit Fraunhofer diffraction",
          "icon": "graph",
          "source": "Unit 13 · Ghatak §18.6 (PDF pp. 294–296); syllabus item 13",
          "cards": [
            {
              "type": "intuition",
              "term": "optics-m3-double-slit-diffraction",
              "title": "Interference fringes tucked inside a diffraction envelope",
              "meaning": "When two slits each have width b and center-to-center distance d, each slit creates a wide diffraction envelope while the two slits interfere to carve narrow fringes inside it.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"46\" y1=\"16\" x2=\"46\" y2=\"48\" class=\"ik\"/><line x1=\"46\" y1=\"68\" x2=\"46\" y2=\"112\" class=\"ik\"/><line x1=\"46\" y1=\"132\" x2=\"46\" y2=\"164\" class=\"ik\"/><path d=\"M 134 26 Q 122 90 134 154 Q 146 90 134 26 Z\" class=\"s ok\"/><line x1=\"216\" y1=\"18\" x2=\"216\" y2=\"162\" class=\"ik\"/><line x1=\"46\" y1=\"58\" x2=\"134\" y2=\"44\" class=\"lk\"/><line x1=\"46\" y1=\"122\" x2=\"134\" y2=\"108\" class=\"lk\"/><line x1=\"134\" y1=\"44\" x2=\"216\" y2=\"52\" class=\"lk\"/><line x1=\"134\" y1=\"108\" x2=\"216\" y2=\"52\" class=\"lk\"/><line x1=\"46\" y1=\"58\" x2=\"54\" y2=\"120\" class=\"gk\"/><circle cx=\"46\" cy=\"58\" r=\"3\" class=\"f\"/><circle cx=\"46\" cy=\"122\" r=\"3\" class=\"f\"/><circle cx=\"216\" cy=\"52\" r=\"3.5\" class=\"f\"/><circle cx=\"216\" cy=\"90\" r=\"3.5\" class=\"f\"/><text x=\"26\" y=\"62\" class=\"t\">b</text><text x=\"26\" y=\"94\" class=\"t\">d</text><text x=\"26\" y=\"126\" class=\"t\">b</text><text x=\"82\" y=\"138\" class=\"t\">d sin θ</text><text x=\"176\" y=\"158\" text-anchor=\"middle\" class=\"t\">f</text><text x=\"226\" y=\"56\" class=\"t\">P</text><text x=\"226\" y=\"94\" class=\"t\">O</text></svg>",
              "picture": "Look at the two slits of width b separated by distance d: corresponding points (A₁, B₁) have path difference d sin θ to point P.",
              "example": "If the slits become very narrow (b → 0 so sin β / β ≈ 1), the diffraction factor stays near 1 and we recover Young's cos²γ interference fringes.",
              "bridge": "Adding the fields E₁ and E₂ from the two slits gives intensity I = 4I₀(sin²β / β²) cos²γ, the product of diffraction and interference factors."
            },
            {
              "type": "info",
              "label": "01 · §18.6 Definition",
              "title": "What is the two-slit Fraunhofer diffraction pattern?",
              "defines": [
                "optics-m3-double-slit-diffraction"
              ],
              "body": "The two-slit Fraunhofer pattern of two parallel slits (width b, separation d) has intensity equal to the product of the single-slit diffraction factor (sin²β/β²) and the two-source interference factor (cos²γ).",
              "tex": "I = 4I_0\\frac{\\sin^2\\beta}{\\beta^2}\\cos^2\\gamma, \\quad \\beta = \\frac{\\pi b\\sin\\theta}{\\lambda}, \\quad \\gamma = \\frac{\\pi d\\sin\\theta}{\\lambda}",
              "examples": [
                "Diffraction: sin²β / β²",
                "Interference: cos²γ",
                "Small b → Young's fringes"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "doubleslit",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          166
                        ],
                        "p2": [
                          48,
                          134
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "wall"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          112
                        ],
                        "p2": [
                          48,
                          68
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "wall"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          46
                        ],
                        "p2": [
                          48,
                          14
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "wall"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            138,
                            154
                          ],
                          [
                            126,
                            90
                          ],
                          [
                            138,
                            26
                          ],
                          [
                            150,
                            90
                          ],
                          [
                            138,
                            154
                          ]
                        ],
                        "closed": true,
                        "role": "s ok",
                        "name": "lens"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          224,
                          162
                        ],
                        "p2": [
                          224,
                          18
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            48,
                            124
                          ],
                          [
                            138,
                            140
                          ],
                          [
                            224,
                            132
                          ]
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "A1"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            48,
                            56
                          ],
                          [
                            138,
                            72
                          ],
                          [
                            224,
                            132
                          ]
                        ],
                        "role": "ik",
                        "width": 2,
                        "name": "B1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          124
                        ],
                        "p2": [
                          58,
                          58
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "dsin"
                      },
                      {
                        "type": "point",
                        "coords": [
                          48,
                          124
                        ],
                        "id": "A1",
                        "role": "f",
                        "name": "A1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          48,
                          56
                        ],
                        "id": "B1",
                        "role": "f",
                        "name": "B1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          90
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "O"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          132
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          30,
                          124
                        ],
                        "text": "A₁ (b)",
                        "size": 10,
                        "role": "t",
                        "name": "A1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          30,
                          90
                        ],
                        "text": "d",
                        "size": 11,
                        "role": "t",
                        "name": "dsin"
                      },
                      {
                        "type": "label",
                        "coords": [
                          30,
                          56
                        ],
                        "text": "B₁ (b)",
                        "size": 10,
                        "role": "t",
                        "name": "B1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          90,
                          48
                        ],
                        "text": "d sin θ",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "dsin"
                      },
                      {
                        "type": "label",
                        "coords": [
                          236,
                          90
                        ],
                        "text": "O",
                        "size": 11,
                        "role": "t",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          236,
                          132
                        ],
                        "text": "P",
                        "size": 11,
                        "role": "t",
                        "name": "P"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "label": "02 · §18.6 Derivation",
              "title": "Two-slit Fraunhofer field and intensity distribution",
              "legend": "Two slits of width \\(b\\) separated by distance \\(d\\), phase lag \\(\\Phi_1 = 2\\gamma = \\frac{2\\pi}{\\lambda}d\\sin\\theta\\) between corresponding points \\((A_1, B_1)\\) (Eqs. 18.44–18.45, Fig. 18.29).",
              "setup": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "Slit fields",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          164
                        ],
                        "p2": [
                          48,
                          134
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "slit1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          112
                        ],
                        "p2": [
                          48,
                          68
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "d"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          46
                        ],
                        "p2": [
                          48,
                          16
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "slit2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          124
                        ],
                        "p2": [
                          140,
                          142
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "E1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          48,
                          124
                        ],
                        "id": "A1",
                        "role": "f",
                        "name": "E1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          28,
                          124
                        ],
                        "text": "A₁ (b)",
                        "size": 10,
                        "role": "t",
                        "name": "E1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          30,
                          90
                        ],
                        "text": "d",
                        "size": 11,
                        "role": "t",
                        "name": "d"
                      }
                    ]
                  },
                  {
                    "step": 1,
                    "name": "Phase lag",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          56
                        ],
                        "p2": [
                          140,
                          74
                        ],
                        "role": "ik",
                        "width": 2,
                        "name": "E2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          124
                        ],
                        "p2": [
                          58,
                          58
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.6,
                        "name": "Phi1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          48,
                          56
                        ],
                        "id": "B1",
                        "role": "f",
                        "name": "E2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          28,
                          56
                        ],
                        "text": "B₁ (b)",
                        "size": 10,
                        "role": "t",
                        "name": "E2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          92,
                          48
                        ],
                        "text": "Φ₁ = (2π/λ) d sin θ",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "Phi1"
                      }
                    ]
                  },
                  {
                    "step": 2,
                    "name": "Superpose",
                    "objects": [
                      {
                        "type": "curve",
                        "points": [
                          [
                            140,
                            154
                          ],
                          [
                            128,
                            90
                          ],
                          [
                            140,
                            26
                          ],
                          [
                            152,
                            90
                          ],
                          [
                            140,
                            154
                          ]
                        ],
                        "closed": true,
                        "role": "s ok",
                        "name": "P"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          224,
                          162
                        ],
                        "p2": [
                          224,
                          18
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "P"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          140,
                          142
                        ],
                        "p2": [
                          224,
                          132
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "P"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          140,
                          74
                        ],
                        "p2": [
                          224,
                          132
                        ],
                        "role": "ik",
                        "width": 2,
                        "name": "P"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          132
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          236,
                          132
                        ],
                        "text": "P",
                        "size": 11,
                        "role": "t",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          136,
                          166
                        ],
                        "text": "γ = Φ₁/2 = (π d sin θ)/λ",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "gamma"
                      }
                    ]
                  }
                ]
              },
              "phases": [
                {
                  "name": "Slit fields",
                  "why": "write the diffracted field E₁ from the first slit of width b"
                },
                {
                  "name": "Phase lag",
                  "why": "find phase difference Φ₁ between corresponding points separated by d"
                },
                {
                  "name": "Superpose",
                  "why": "add E₁ + E₂ and factor with the cosine sum identity"
                },
                {
                  "name": "Product law",
                  "why": "define γ = Φ₁/2 and square the amplitude to get intensity"
                }
              ],
              "steps": [
                {
                  "phase": "Slit fields",
                  "focus": [
                    "E1",
                    "slit1"
                  ],
                  "tex": "E_1 = A\\frac{\\sin\\beta}{\\beta}\\cos(\\omega t - \\beta)",
                  "note": "The first slit of width \\(b\\) produces the single-slit field \\(E_1\\) at point \\(P\\) (Eq. 18.9)."
                },
                {
                  "phase": "Phase lag",
                  "focus": [
                    "E1",
                    "E2",
                    "d",
                    "Phi1"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Write phase lag Φ₁ between corresponding points (A₁, B₁)"
                  },
                  "tex": "\\Phi_1 = \\frac{2\\pi}{\\lambda}d\\sin\\theta",
                  "note": "Corresponding points \\((A_1, B_1)\\) are separated by \\(d\\), giving path difference \\(d\\sin\\theta\\) and phase lag \\(\\Phi_1\\).",
                  "ask": {
                    "q": "With phase lag \\(\\Phi_1\\), what is the field \\(E_2\\) from the second slit?",
                    "options": [
                      "\\(A(\\sin\\beta/\\beta)\\cos(\\omega t - \\beta - \\Phi_1)\\)",
                      "\\(A(\\sin\\beta/\\beta)\\sin(\\omega t)\\)",
                      "\\(A\\cos(\\omega t - \\Phi_1)\\)",
                      "\\(0\\)"
                    ],
                    "answer": 0,
                    "why": "The second slit has the same width \\(b\\) (same amplitude \\(A\\sin\\beta/\\beta\\)) delayed in phase by \\(\\Phi_1\\)."
                  }
                },
                {
                  "phase": "Superpose",
                  "focus": [
                    "E1",
                    "E2",
                    "P"
                  ],
                  "move": {
                    "type": "add",
                    "by": "E_2",
                    "label": "Add fields E₁ and E₂ at screen point P"
                  },
                  "tex": "E = A\\frac{\\sin\\beta}{\\beta}[\\cos(\\omega t - \\beta) + \\cos(\\omega t - \\beta - \\Phi_1)]",
                  "note": "Superpose \\(E_1\\) and \\(E_2\\) and factor out the common single-slit amplitude \\(A(\\sin\\beta/\\beta)\\).",
                  "ask": {
                    "q": "What does \\(\\cos C + \\cos D\\) equal by trigonometry?",
                    "options": [
                      "\\(\\cos(C - D)\\)",
                      "\\(2\\cos\\frac{C-D}{2}\\cos\\frac{C+D}{2}\\)",
                      "\\(2\\sin C\\sin D\\)",
                      "\\(\\cos C\\cos D\\)"
                    ],
                    "answer": 1,
                    "why": "By the sum-to-product identity, \\(\\cos C + \\cos D = 2\\cos\\frac{C-D}{2}\\cos\\frac{C+D}{2}\\)."
                  }
                },
                {
                  "focus": [
                    "P",
                    "Phi1"
                  ],
                  "move": {
                    "type": "identity",
                    "by": "\\cos C + \\cos D = 2\\cos\\tfrac{C-D}{2}\\cos\\tfrac{C+D}{2}"
                  },
                  "tex": "E = 2A\\frac{\\sin\\beta}{\\beta}\\cos\\left(\\frac{\\Phi_1}{2}\\right)\\cos\\left(\\omega t - \\beta - \\frac{1}{2}\\Phi_1\\right)",
                  "note": "Combine the two cosines using half the phase difference \\(\\Phi_1 / 2\\)."
                },
                {
                  "phase": "Product law",
                  "focus": [
                    "gamma",
                    "Phi1",
                    "d"
                  ],
                  "move": {
                    "type": "define",
                    "by": "\\gamma = \\frac{\\Phi_1}{2} = \\frac{\\pi}{\\lambda}d\\sin\\theta"
                  },
                  "tex": "\\gamma = \\frac{\\pi}{\\lambda}d\\sin\\theta",
                  "note": "Define the interference phase parameter \\(\\gamma = \\Phi_1 / 2\\) (Eq. 18.44).",
                  "ask": {
                    "q": "What is the ratio \\(\\gamma / \\beta\\) for slit separation \\(d\\) and width \\(b\\)?",
                    "options": [
                      "\\(b / d\\)",
                      "\\(\\lambda / d\\)",
                      "\\(d / b\\)",
                      "\\(2\\pi\\)"
                    ],
                    "answer": 2,
                    "why": "Since \\(\\gamma = (\\pi d\\sin\\theta)/\\lambda\\) and \\(\\beta = (\\pi b\\sin\\theta)/\\lambda\\), their ratio is \\(\\gamma/\\beta = d/b\\)."
                  }
                },
                {
                  "focus": [
                    "gamma",
                    "P"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "\\frac{\\Phi_1}{2} = \\gamma"
                  },
                  "tex": "E = 2A\\frac{\\sin\\beta}{\\beta}\\cos\\gamma\\cos(\\omega t - \\beta - \\gamma)",
                  "note": "Substitute \\(\\gamma = \\Phi_1 / 2\\) into the resultant electric field.",
                  "ask": {
                    "q": "When we square the amplitude \\(2A(\\sin\\beta/\\beta)\\cos\\gamma\\), what is the intensity \\(I\\)?",
                    "options": [
                      "\\(I_0(\\sin^2\\beta/\\beta^2)\\)",
                      "\\(2I_0\\cos^2\\gamma\\)",
                      "\\(4I_0(\\sin\\beta/\\beta)\\cos\\gamma\\)",
                      "\\(4I_0(\\sin^2\\beta/\\beta^2)\\cos^2\\gamma\\)"
                    ],
                    "answer": 3,
                    "why": "Since \\(I_0\\) corresponds to \\(A^2\\), squaring the amplitude gives \\(I = 4I_0(\\sin^2\\beta/\\beta^2)\\cos^2\\gamma\\) (Eq. 18.45)."
                  }
                },
                {
                  "focus": [
                    "gamma",
                    "P",
                    "E1",
                    "E2"
                  ],
                  "move": {
                    "type": "power",
                    "by": "2",
                    "label": "Square the amplitude and set I₀ ∝ A² (Eq. 18.45)"
                  },
                  "tex": "I = 4I_0\\frac{\\sin^2\\beta}{\\beta^2}\\cos^2\\gamma",
                  "note": "The resultant intensity is the product of the single-slit diffraction pattern and two-slit interference pattern (Eq. 18.45)."
                }
              ]
            },
            {
              "type": "intuition",
              "term": "optics-m3-missing-orders",
              "title": "When a bright interference fringe lands on a dark diffraction zero",
              "meaning": "A missing order happens when the two slits try to make a bright interference peak at the exact angle where each individual slit sends zero light.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"144\" x2=\"242\" y2=\"144\" class=\"lk\"/><line x1=\"130\" y1=\"22\" x2=\"130\" y2=\"156\" class=\"gk\"/><path d=\"M 34 144 Q 56 130 74 144 Q 102 22 130 22 Q 158 22 186 144 Q 204 130 226 144\" class=\"gk\"/><polyline points=\"74,144 81,126 88,144 95,88 102,144 109,46 116,144 123,25 130,22 137,25 144,144 151,46 158,144 165,88 172,144 179,126 186,144\" class=\"lk\"/><circle cx=\"74\" cy=\"144\" r=\"8\" class=\"s ok\"/><circle cx=\"186\" cy=\"144\" r=\"8\" class=\"s ok\"/><text x=\"74\" y=\"164\" text-anchor=\"middle\" class=\"t\">-π (missing)</text><text x=\"186\" y=\"164\" text-anchor=\"middle\" class=\"t\">+π (missing)</text><text x=\"130\" y=\"16\" text-anchor=\"middle\" class=\"t\">d = 4b → 4th order missing at β = ±π</text></svg>",
              "picture": "Look at the two small circles at β = ±π: the dashed diffraction envelope touches zero right where the 4th interference peak would sit.",
              "example": "Because 0 × 1 = 0, the zero of sin²β / β² wipes out the interference peak where cos²γ = 1.",
              "bridge": "Mathematically, missing orders occur when d sin θ = nλ and b sin θ = mλ hold together, so n / m = d / b."
            },
            {
              "type": "info",
              "label": "03 · §18.6.1 Definition",
              "title": "What are maxima, minima, and missing orders in two-slit diffraction?",
              "defines": [
                "optics-m3-missing-orders"
              ],
              "body": "Diffraction minima occur at b sin θ = mλ (m = 1, 2, …) and interference minima at d sin θ = (n + ½)λ. Missing orders occur when an interference maximum d sin θ = nλ coincides with a diffraction minimum b sin θ = mλ.",
              "tex": "b\\sin\\theta = m\\lambda \\;\\text{and}\\; d\\sin\\theta = n\\lambda \\implies \\frac{d}{b} = \\frac{n}{m}",
              "examples": [
                "Diff. min: β = mπ",
                "Interf. min: γ = (n+½)π",
                "Missing: d/b = n/m"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "missing",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          16,
                          36
                        ],
                        "p2": [
                          244,
                          36
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "xaxis"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          130,
                          20
                        ],
                        "p2": [
                          130,
                          162
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "yaxis"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            56,
                            36
                          ],
                          [
                            130,
                            150
                          ],
                          [
                            204,
                            36
                          ]
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.8,
                        "name": "env"
                      },
                      {
                        "type": "circle",
                        "center": [
                          56,
                          36
                        ],
                        "r": 8,
                        "role": "s ok",
                        "name": "m1"
                      },
                      {
                        "type": "circle",
                        "center": [
                          204,
                          36
                        ],
                        "r": 8,
                        "role": "s ok",
                        "name": "m2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          56,
                          18
                        ],
                        "text": "-λ/b",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "m1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          204,
                          18
                        ],
                        "text": "+λ/b",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "m2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          130,
                          164
                        ],
                        "text": "Missing order at sin θ = mλ/b = nλ/d",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "env"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "04 · §18.6.1 Intensity graph",
              "title": "Double-slit intensity distribution with missing order (Fig. 18.31)",
              "body": "For d = 4b, rapid cos²(4β) interference fringes sit inside the sin²β/β² diffraction envelope. The n = ±4 interference maxima fall on the m = ±1 diffraction minima at β = ±π and are missing (circled).",
              "examples": [
                "7 bright fringes in center",
                "n = ±4 missing at β = ±π",
                "8 minima per side"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "2slitgraph",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          12,
                          36
                        ],
                        "p2": [
                          248,
                          36
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "xaxis"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          130,
                          20
                        ],
                        "p2": [
                          130,
                          164
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "yaxis"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            20.0,
                            40.2
                          ],
                          [
                            29.2,
                            41.4
                          ],
                          [
                            38.3,
                            40.7
                          ],
                          [
                            47.5,
                            38.3
                          ],
                          [
                            56.7,
                            36.0
                          ],
                          [
                            65.8,
                            40.1
                          ],
                          [
                            75.0,
                            54.3
                          ],
                          [
                            84.2,
                            77.1
                          ],
                          [
                            93.3,
                            104.5
                          ],
                          [
                            102.5,
                            129.9
                          ],
                          [
                            111.7,
                            146.0
                          ],
                          [
                            120.8,
                            138.6
                          ],
                          [
                            130.0,
                            146.0
                          ],
                          [
                            139.2,
                            138.6
                          ],
                          [
                            148.3,
                            146.0
                          ],
                          [
                            157.5,
                            129.9
                          ],
                          [
                            166.7,
                            104.5
                          ],
                          [
                            175.8,
                            77.1
                          ],
                          [
                            185.0,
                            54.3
                          ],
                          [
                            194.2,
                            40.1
                          ],
                          [
                            203.3,
                            36.0
                          ],
                          [
                            212.5,
                            38.3
                          ],
                          [
                            221.7,
                            40.7
                          ],
                          [
                            230.8,
                            41.4
                          ],
                          [
                            240.0,
                            40.2
                          ]
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.4,
                        "name": "envelope"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            20.0,
                            40.2
                          ],
                          [
                            21.8,
                            39.4
                          ],
                          [
                            23.7,
                            37.3
                          ],
                          [
                            25.5,
                            36.0
                          ],
                          [
                            27.3,
                            36.9
                          ],
                          [
                            29.2,
                            39.4
                          ],
                          [
                            31.0,
                            41.4
                          ],
                          [
                            32.8,
                            41.1
                          ],
                          [
                            34.7,
                            38.9
                          ],
                          [
                            36.5,
                            36.5
                          ],
                          [
                            38.3,
                            36.2
                          ],
                          [
                            40.2,
                            37.9
                          ],
                          [
                            42.0,
                            39.8
                          ],
                          [
                            43.8,
                            39.7
                          ],
                          [
                            45.7,
                            38.0
                          ],
                          [
                            47.5,
                            36.3
                          ],
                          [
                            49.3,
                            36.1
                          ],
                          [
                            51.2,
                            36.9
                          ],
                          [
                            53.0,
                            37.2
                          ],
                          [
                            54.8,
                            36.6
                          ],
                          [
                            56.7,
                            36.0
                          ],
                          [
                            58.5,
                            36.2
                          ],
                          [
                            60.3,
                            36.2
                          ],
                          [
                            62.2,
                            36.0
                          ],
                          [
                            64.0,
                            37.3
                          ],
                          [
                            65.8,
                            41.3
                          ],
                          [
                            67.7,
                            45.4
                          ],
                          [
                            69.5,
                            45.7
                          ],
                          [
                            71.3,
                            41.0
                          ],
                          [
                            73.2,
                            36.2
                          ],
                          [
                            75.0,
                            37.9
                          ],
                          [
                            76.8,
                            47.7
                          ],
                          [
                            78.7,
                            61.1
                          ],
                          [
                            80.5,
                            70.0
                          ],
                          [
                            82.3,
                            67.1
                          ],
                          [
                            84.2,
                            52.6
                          ],
                          [
                            86.0,
                            37.6
                          ],
                          [
                            87.8,
                            39.4
                          ],
                          [
                            89.7,
                            58.2
                          ],
                          [
                            91.5,
                            85.4
                          ],
                          [
                            93.3,
                            104.5
                          ],
                          [
                            95.2,
                            102.6
                          ],
                          [
                            97.0,
                            79.3
                          ],
                          [
                            98.8,
                            48.9
                          ],
                          [
                            100.7,
                            36.1
                          ],
                          [
                            102.5,
                            51.6
                          ],
                          [
                            104.3,
                            87.9
                          ],
                          [
                            106.2,
                            123.3
                          ],
                          [
                            108.0,
                            135.9
                          ],
                          [
                            109.8,
                            116.4
                          ],
                          [
                            111.7,
                            74.8
                          ],
                          [
                            113.5,
                            40.7
                          ],
                          [
                            115.3,
                            41.2
                          ],
                          [
                            117.2,
                            76.4
                          ],
                          [
                            119.0,
                            121.4
                          ],
                          [
                            120.8,
                            144.1
                          ],
                          [
                            122.7,
                            130.0
                          ],
                          [
                            124.5,
                            86.6
                          ],
                          [
                            126.3,
                            44.4
                          ],
                          [
                            128.2,
                            38.5
                          ],
                          [
                            130.0,
                            146.0
                          ],
                          [
                            131.8,
                            38.5
                          ],
                          [
                            133.7,
                            44.4
                          ],
                          [
                            135.5,
                            86.6
                          ],
                          [
                            137.3,
                            130.0
                          ],
                          [
                            139.2,
                            144.1
                          ],
                          [
                            141.0,
                            121.4
                          ],
                          [
                            142.8,
                            76.4
                          ],
                          [
                            144.7,
                            41.2
                          ],
                          [
                            146.5,
                            40.7
                          ],
                          [
                            148.3,
                            74.8
                          ],
                          [
                            150.2,
                            116.4
                          ],
                          [
                            152.0,
                            135.9
                          ],
                          [
                            153.8,
                            123.3
                          ],
                          [
                            155.7,
                            87.9
                          ],
                          [
                            157.5,
                            51.6
                          ],
                          [
                            159.3,
                            36.1
                          ],
                          [
                            161.2,
                            48.9
                          ],
                          [
                            163.0,
                            79.3
                          ],
                          [
                            164.8,
                            102.6
                          ],
                          [
                            166.7,
                            104.5
                          ],
                          [
                            168.5,
                            85.4
                          ],
                          [
                            170.3,
                            58.2
                          ],
                          [
                            172.2,
                            39.4
                          ],
                          [
                            174.0,
                            37.6
                          ],
                          [
                            175.8,
                            52.6
                          ],
                          [
                            177.7,
                            67.1
                          ],
                          [
                            179.5,
                            70.0
                          ],
                          [
                            181.3,
                            61.1
                          ],
                          [
                            183.2,
                            47.7
                          ],
                          [
                            185.0,
                            37.9
                          ],
                          [
                            186.8,
                            36.2
                          ],
                          [
                            188.7,
                            41.0
                          ],
                          [
                            190.5,
                            45.7
                          ],
                          [
                            192.3,
                            45.4
                          ],
                          [
                            194.2,
                            41.3
                          ],
                          [
                            196.0,
                            37.3
                          ],
                          [
                            197.8,
                            36.0
                          ],
                          [
                            199.7,
                            36.2
                          ],
                          [
                            201.5,
                            36.2
                          ],
                          [
                            203.3,
                            36.0
                          ],
                          [
                            205.2,
                            36.6
                          ],
                          [
                            207.0,
                            37.2
                          ],
                          [
                            208.8,
                            36.9
                          ],
                          [
                            210.7,
                            36.1
                          ],
                          [
                            212.5,
                            36.3
                          ],
                          [
                            214.3,
                            38.0
                          ],
                          [
                            216.2,
                            39.7
                          ],
                          [
                            218.0,
                            39.8
                          ],
                          [
                            219.8,
                            37.9
                          ],
                          [
                            221.7,
                            36.2
                          ],
                          [
                            223.5,
                            36.5
                          ],
                          [
                            225.3,
                            38.9
                          ],
                          [
                            227.2,
                            41.1
                          ],
                          [
                            229.0,
                            41.4
                          ],
                          [
                            230.8,
                            39.4
                          ],
                          [
                            232.7,
                            36.9
                          ],
                          [
                            234.5,
                            36.0
                          ],
                          [
                            236.3,
                            37.3
                          ],
                          [
                            238.2,
                            39.4
                          ],
                          [
                            240.0,
                            40.2
                          ]
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "fringes"
                      },
                      {
                        "type": "circle",
                        "center": [
                          56.7,
                          36
                        ],
                        "r": 7,
                        "role": "s ok",
                        "name": "missL"
                      },
                      {
                        "type": "circle",
                        "center": [
                          203.3,
                          36
                        ],
                        "r": 7,
                        "role": "s ok",
                        "name": "missR"
                      },
                      {
                        "type": "label",
                        "coords": [
                          116,
                          154
                        ],
                        "text": "I/I_max",
                        "size": 10,
                        "role": "t",
                        "name": "yaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          57,
                          20
                        ],
                        "text": "-π (missing)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "missL"
                      },
                      {
                        "type": "label",
                        "coords": [
                          203,
                          20
                        ],
                        "text": "+π (missing)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "missR"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "05 · §18.6.1 Example 18.9",
              "title": "Worked example: interference minima and fringe width",
              "tex": "\\sin\\theta = \\left(n + \\frac{1}{2}\\right)\\frac{\\lambda}{d} < \\frac{\\lambda}{b} \\implies n = 0,1,\\dots,7 \\;(\\text{16 minima}), \\quad \\beta_{\\text{fringe}} = \\frac{\\lambda D}{d} \\approx 0.0413\\text{ cm}",
              "body": "For \\(b = 8.8\\times 10^{-3}\\text{ cm}\\), \\(d = 7.0\\times 10^{-2}\\text{ cm}\\), and \\(\\lambda = 6.328\\times 10^{-5}\\text{ cm}\\), the first diffraction minimum is at \\(\\sin\\theta = \\lambda/b = 7.19\\times 10^{-3}\\) (\\(0.412^\\circ\\)), enclosing 8 interference minima on each side (16 total). At \\(D = 15\\text{ ft}\\), fringe width is \\(0.0413\\text{ cm}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "In \\(I = 4I_0(\\sin^2\\beta/\\beta^2)\\cos^2\\gamma\\), what does \\(\\cos^2\\gamma\\) represent?",
              "options": [
                "Two-source interference pattern",
                "Single-slit diffraction pattern",
                "Polarisation of the wave",
                "Absorption by the glass lens"
              ],
              "answer": 0,
              "why": "The factor \\(\\cos^2\\gamma\\) is the interference pattern of two point sources separated by \\(d\\), while \\(\\sin^2\\beta/\\beta^2\\) is the single-slit diffraction factor (§18.6)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "Which condition gives the interference minima in a two-slit pattern?",
              "options": [
                "\\(b\\sin\\theta = m\\lambda\\)",
                "\\(d\\sin\\theta = (n + 1/2)\\lambda\\)",
                "\\(d\\sin\\theta = n\\lambda\\)",
                "\\(\\tan\\beta = \\beta\\)"
              ],
              "answer": 1,
              "why": "The interference factor \\(\\cos^2\\gamma\\) vanishes when \\(\\gamma = (n + 1/2)\\pi\\), which gives \\(d\\sin\\theta = (n + 1/2)\\lambda\\) (Eq. 18.46)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "In a double slit with \\(d = 3b\\), which positive interference order \\(n\\) is the first missing order?",
              "answer": 3,
              "tolerance": 0,
              "unit": "",
              "why": "From \\(n/m = d/b = 3\\), the first diffraction minimum (\\(m = 1\\)) eliminates the \\(n = 3\\) interference maximum."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "If \\(d = 4b\\), how many bright interference maxima appear strictly inside the central diffraction envelope?",
              "answer": 7,
              "tolerance": 0,
              "unit": "",
              "why": "Orders \\(n = 0, \\pm 1, \\pm 2, \\pm 3\\) lie inside \\(|\\sin\\theta| < \\lambda/b\\), while \\(n = \\pm 4\\) fall on the first diffraction zero, giving \\(2(4) - 1 = 7\\) bright fringes."
            }
          ]
        },
        {
          "id": "optics-m3-n-slit-grating",
          "title": "N-slit diffraction & grating",
          "icon": "sigma",
          "source": "Unit 14 · Ghatak §§18.7–18.8 (PDF pp. 297–302); syllabus item 14",
          "cards": [
            {
              "type": "intuition",
              "term": "optics-m3-principal-maxima",
              "title": "Why adding more slits makes the bright peaks needle-sharp",
              "meaning": "When N slits send waves in step (d sin θ = mλ), all N amplitudes add to N times a single slit, while just off that angle the N waves cancel at N - 1 dark minima.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"146\" x2=\"242\" y2=\"146\" class=\"lk\"/><polyline points=\"30,146 42,24 54,146 66,138 78,146 90,140 102,146 114,138 126,146 138,24 150,146 162,138 174,146 186,140 198,146 210,138 222,146 234,24\" class=\"lk\"/><circle cx=\"42\" cy=\"24\" r=\"3.5\" class=\"f\"/><circle cx=\"138\" cy=\"24\" r=\"3.5\" class=\"f\"/><circle cx=\"234\" cy=\"24\" r=\"3.5\" class=\"f\"/><text x=\"42\" y=\"162\" text-anchor=\"middle\" class=\"t\">-π</text><text x=\"138\" y=\"162\" text-anchor=\"middle\" class=\"t\">0</text><text x=\"234\" y=\"162\" text-anchor=\"middle\" class=\"t\">+π</text><text x=\"138\" y=\"18\" text-anchor=\"middle\" class=\"t\">Principal maxima: height N²</text><text x=\"90\" y=\"124\" text-anchor=\"middle\" class=\"t\">N - 1 minima</text></svg>",
              "picture": "Look at the tall principal maxima of height N² at γ = -π, 0, +π separated by N - 1 zero secondary minima.",
              "example": "With N = 5 slits, the peak height is N² = 25 and the first minimum sits only Δγ = π/5 away from the peak.",
              "bridge": "Summing N slit fields gives intensity I = I₀(sin²β / β²)(sin²Nγ / sin²γ), where sin Nγ / sin γ → ±N as γ → mπ."
            },
            {
              "type": "info",
              "label": "01 · §18.7 Definition",
              "title": "What are principal maxima and secondary minima in N-slit diffraction?",
              "defines": [
                "optics-m3-principal-maxima"
              ],
              "body": "For N slits of width b and spacing d, principal maxima occur at γ = mπ (d sin θ = mλ) with intensity N²I₀(sin²β/β²). Between adjacent principal maxima lie (N - 1) secondary minima and (N - 2) weak secondary maxima.",
              "tex": "I = I_0\\frac{\\sin^2\\beta}{\\beta^2}\\frac{\\sin^2 N\\gamma}{\\sin^2\\gamma}, \\quad d\\sin\\theta = m\\lambda \\;(\\text{principal maxima})",
              "examples": [
                "Peak: N²I₀(sin²β/β²)",
                "N - 1 secondary minima",
                "N - 2 secondary maxima"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "nslitsetup",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          164
                        ],
                        "p2": [
                          48,
                          144
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "s1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          126
                        ],
                        "p2": [
                          48,
                          106
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "s2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          88
                        ],
                        "p2": [
                          48,
                          68
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "s3"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          48,
                          50
                        ],
                        "p2": [
                          48,
                          30
                        ],
                        "role": "ik",
                        "width": 3,
                        "name": "s4"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            140,
                            156
                          ],
                          [
                            128,
                            90
                          ],
                          [
                            140,
                            24
                          ],
                          [
                            152,
                            90
                          ],
                          [
                            140,
                            156
                          ]
                        ],
                        "closed": true,
                        "role": "s ok",
                        "name": "lens"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          224,
                          162
                        ],
                        "p2": [
                          224,
                          18
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            48,
                            135
                          ],
                          [
                            140,
                            148
                          ],
                          [
                            224,
                            132
                          ]
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "r1"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            48,
                            97
                          ],
                          [
                            140,
                            110
                          ],
                          [
                            224,
                            132
                          ]
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "r2"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            48,
                            59
                          ],
                          [
                            140,
                            72
                          ],
                          [
                            224,
                            132
                          ]
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "r3"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          132
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          26,
                          116
                        ],
                        "text": "d",
                        "size": 11,
                        "role": "t",
                        "name": "s2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          26,
                          135
                        ],
                        "text": "b",
                        "size": 11,
                        "role": "t",
                        "name": "s1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          92,
                          152
                        ],
                        "text": "θ",
                        "size": 11,
                        "role": "t",
                        "name": "r1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          236,
                          132
                        ],
                        "text": "P",
                        "size": 11,
                        "role": "t",
                        "name": "P"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "label": "02 · §§18.7.1–18.7.2 Derivation",
              "title": "N-slit intensity, principal maxima, and angular half-width",
              "legend": "\\(N\\) parallel slits of width \\(b\\) and spacing \\(d\\), \\(\\gamma = \\frac{\\pi}{\\lambda}d\\sin\\theta\\), \\(m\\)-th principal maximum at \\(\\theta_m\\) with half-width \\(\\Delta\\theta_m\\) (Eqs. 18.48–18.63, Fig. 18.32).",
              "setup": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "Sum N slits",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          44,
                          160
                        ],
                        "p2": [
                          44,
                          20
                        ],
                        "role": "ik",
                        "width": 2.4,
                        "name": "Nslits"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          220,
                          162
                        ],
                        "p2": [
                          220,
                          18
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          44,
                          90
                        ],
                        "p2": [
                          220,
                          126
                        ],
                        "role": "lk",
                        "width": 2.4,
                        "name": "thetam"
                      },
                      {
                        "type": "point",
                        "coords": [
                          220,
                          126
                        ],
                        "id": "Pm",
                        "role": "f",
                        "name": "thetam"
                      },
                      {
                        "type": "label",
                        "coords": [
                          26,
                          90
                        ],
                        "text": "N, d",
                        "size": 11,
                        "role": "t",
                        "name": "Nslits"
                      },
                      {
                        "type": "label",
                        "coords": [
                          130,
                          118
                        ],
                        "text": "θ_m (d sin θ_m = mλ)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "thetam"
                      }
                    ]
                  },
                  {
                    "step": 4,
                    "name": "Adjacent minimum",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          44,
                          90
                        ],
                        "p2": [
                          220,
                          148
                        ],
                        "role": "gk",
                        "width": 1.8,
                        "name": "deltatheta"
                      },
                      {
                        "type": "arc",
                        "center": [
                          44,
                          90
                        ],
                        "r": 54,
                        "start": 11,
                        "end": 18,
                        "role": "lk",
                        "width": 1.8,
                        "name": "deltatheta"
                      },
                      {
                        "type": "label",
                        "coords": [
                          144,
                          154
                        ],
                        "text": "θ_m + Δθ_m (mλ + λ/N)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "deltatheta"
                      }
                    ]
                  }
                ]
              },
              "phases": [
                {
                  "name": "Sum N slits",
                  "why": "add the N slit fields and sum the cosine progression"
                },
                {
                  "name": "Principal maxima",
                  "why": "take the limit γ → mπ using L'Hôpital's rule to find peak intensity"
                },
                {
                  "name": "Adjacent minimum",
                  "why": "write the condition for the first minimum at θ_m ± Δθ_m"
                },
                {
                  "name": "Angular half-width",
                  "why": "expand sin(θ_m ± Δθ_m) for small Δθ_m and solve for Δθ_m"
                }
              ],
              "steps": [
                {
                  "phase": "Sum N slits",
                  "focus": [
                    "Nslits",
                    "screen"
                  ],
                  "tex": "E = A\\frac{\\sin\\beta}{\\beta}[\\cos(\\omega t - \\beta) + \\cos(\\omega t - \\beta - \\Phi_1) + \\dots + \\cos(\\omega t - \\beta - (N - 1)\\Phi_1)]",
                  "note": "Sum the diffracted fields from all \\(N\\) parallel slits at screen point \\(P\\) (Eq. 18.48)."
                },
                {
                  "focus": [
                    "Nslits",
                    "screen"
                  ],
                  "move": {
                    "type": "identity",
                    "by": "\\sum_{k=0}^{N-1}\\cos(\\alpha - 2k\\gamma) = \\frac{\\sin N\\gamma}{\\sin\\gamma}\\cos(\\alpha - (N-1)\\gamma)"
                  },
                  "tex": "E = A\\frac{\\sin\\beta}{\\beta}\\frac{\\sin N\\gamma}{\\sin\\gamma}\\cos\\left[\\omega t - \\beta - \\frac{1}{2}(N - 1)\\Phi_1\\right]",
                  "note": "With \\(\\gamma = \\Phi_1 / 2 = (\\pi d\\sin\\theta)/\\lambda\\), sum the \\(N\\) cosines into closed form (Eq. 18.49).",
                  "ask": {
                    "q": "When we square the amplitude of Eq. (18.49), what is the intensity \\(I\\)?",
                    "options": [
                      "\\(I_0(\\sin^2\\beta/\\beta^2)(\\sin^2 N\\gamma/\\sin^2\\gamma)\\)",
                      "\\(N I_0\\cos^2\\gamma\\)",
                      "\\(I_0(\\sin^2 N\\beta/\\beta^2)\\)",
                      "\\(I_0(\\sin\\gamma/\\sin N\\gamma)\\)"
                    ],
                    "answer": 0,
                    "why": "Squaring the amplitude gives the product of the single-slit factor \\(\\sin^2\\beta/\\beta^2\\) and the \\(N\\)-slit factor \\(\\sin^2 N\\gamma/\\sin^2\\gamma\\) (Eq. 18.50)."
                  }
                },
                {
                  "focus": [
                    "Nslits",
                    "screen",
                    "thetam"
                  ],
                  "move": {
                    "type": "power",
                    "by": "2",
                    "label": "Square the amplitude to obtain intensity I (Eq. 18.50)"
                  },
                  "tex": "I = I_0\\frac{\\sin^2\\beta}{\\beta^2}\\frac{\\sin^2 N\\gamma}{\\sin^2\\gamma}",
                  "note": "This reduces to Eq. (18.10) for \\(N = 1\\) and to Eq. (18.45) for \\(N = 2\\) (Eq. 18.50)."
                },
                {
                  "phase": "Principal maxima",
                  "focus": [
                    "thetam",
                    "screen"
                  ],
                  "move": {
                    "type": "evaluate",
                    "by": "\\gamma \\to m\\pi"
                  },
                  "tex": "I_{\\max} = N^2 I_0\\frac{\\sin^2\\beta}{\\beta^2}",
                  "note": "At \\(\\gamma = m\\pi\\) (\\(d\\sin\\theta_m = m\\lambda\\)), \\(\\lim_{\\gamma\\to m\\pi}\\frac{\\sin N\\gamma}{\\sin\\gamma} = \\pm N\\), so peak intensity scales as \\(N^2\\) (Eq. 18.53).",
                  "ask": {
                    "q": "Why does \\(\\sin N\\gamma / \\sin\\gamma\\) approach \\(\\pm N\\) as \\(\\gamma \\to m\\pi\\)?",
                    "options": [
                      "Because \\(\\sin m\\pi = 1\\)",
                      "By L'Hôpital's rule \\(N\\cos N\\gamma / \\cos\\gamma = \\pm N\\)",
                      "Because \\(N = 0\\)",
                      "Because \\(\\beta = 0\\)"
                    ],
                    "answer": 1,
                    "why": "Differentiating numerator and denominator gives \\(\\lim_{\\gamma\\to m\\pi}(N\\cos N\\gamma / \\cos\\gamma) = \\pm N\\) (§18.7.1)."
                  }
                },
                {
                  "phase": "Adjacent minimum",
                  "focus": [
                    "thetam",
                    "deltatheta"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Write first minimum on either side of m-th principal maximum (Eq. 18.61)"
                  },
                  "tex": "d\\sin(\\theta_m \\pm \\Delta\\theta_m) = m\\lambda \\pm \\frac{\\lambda}{N}",
                  "note": "The first secondary minimum beside \\(d\\sin\\theta_m = m\\lambda\\) occurs at path difference \\(m\\lambda \\pm \\lambda/N\\) (Eq. 18.61).",
                  "ask": {
                    "q": "For small half-width \\(\\Delta\\theta_m\\), what approximates \\(\\sin(\\theta_m \\pm \\Delta\\theta_m)\\)?",
                    "options": [
                      "\\(\\sin\\theta_m \\pm \\Delta\\theta_m\\)",
                      "\\(\\cos\\theta_m\\)",
                      "\\(\\sin\\theta_m \\pm \\Delta\\theta_m\\cos\\theta_m\\)",
                      "\\(\\Delta\\theta_m\\sin\\theta_m\\)"
                    ],
                    "answer": 2,
                    "why": "Using \\(\\cos\\Delta\\theta_m \\approx 1\\) and \\(\\sin\\Delta\\theta_m \\approx \\Delta\\theta_m\\) gives \\(\\sin\\theta_m \\pm \\Delta\\theta_m\\cos\\theta_m\\) (Eq. 18.62)."
                  }
                },
                {
                  "phase": "Angular half-width",
                  "focus": [
                    "thetam",
                    "deltatheta"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "\\sin(\\theta_m \\pm \\Delta\\theta_m) \\approx \\sin\\theta_m \\pm \\Delta\\theta_m\\cos\\theta_m"
                  },
                  "tex": "d\\sin\\theta_m \\pm d\\Delta\\theta_m\\cos\\theta_m = m\\lambda \\pm \\frac{\\lambda}{N}",
                  "note": "Substitute the small-angle expansion Eq. (18.62) into Eq. (18.61)."
                },
                {
                  "focus": [
                    "thetam",
                    "deltatheta"
                  ],
                  "move": {
                    "type": "subtract",
                    "by": "d\\sin\\theta_m = m\\lambda"
                  },
                  "tex": "d\\Delta\\theta_m\\cos\\theta_m = \\frac{\\lambda}{N}",
                  "note": "Cancel \\(d\\sin\\theta_m = m\\lambda\\) from both sides and take the positive sign.",
                  "ask": {
                    "q": "How does the angular half-width \\(\\Delta\\theta_m\\) change as slit count \\(N\\) increases?",
                    "options": [
                      "It increases as \\(N^2\\)",
                      "It increases as \\(N\\)",
                      "It stays constant",
                      "It shrinks as \\(1 / N\\)"
                    ],
                    "answer": 3,
                    "why": "Dividing by \\(Nd\\cos\\theta_m\\) gives \\(\\Delta\\theta_m = \\lambda/(Nd\\cos\\theta_m)\\), so peaks become sharper as \\(N\\) grows (Eq. 18.63)."
                  }
                },
                {
                  "focus": [
                    "Nslits",
                    "thetam",
                    "deltatheta"
                  ],
                  "move": {
                    "type": "divide",
                    "by": "Nd\\cos\\theta_m"
                  },
                  "tex": "\\Delta\\theta_m = \\frac{\\lambda}{Nd\\cos\\theta_m}",
                  "note": "Divide by \\(Nd\\cos\\theta_m\\) to obtain the angular half-width of the \\(m\\)-th principal maximum (Eq. 18.63)."
                }
              ]
            },
            {
              "type": "info",
              "label": "03 · §18.7 Interference graph",
              "title": "N-slit interference factor sin²(Nγ)/sin²γ for N = 5 (Fig. 18.33)",
              "body": "For N = 5 slits, sharp principal maxima of height N² = 25 occur at γ = 0, ±π, ±2π. Between consecutive principal maxima lie N - 1 = 4 secondary minima (at γ = pπ/5) and N - 2 = 3 weak secondary maxima.",
              "examples": [
                "N = 5: peak N² = 25",
                "4 secondary minima",
                "3 secondary maxima"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "nslitgraph",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          12,
                          36
                        ],
                        "p2": [
                          248,
                          36
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "xaxis"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          130,
                          20
                        ],
                        "p2": [
                          130,
                          164
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "yaxis"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            20.0,
                            146.0
                          ],
                          [
                            21.8,
                            120.7
                          ],
                          [
                            23.7,
                            67.6
                          ],
                          [
                            25.5,
                            36.0
                          ],
                          [
                            27.3,
                            41.1
                          ],
                          [
                            29.2,
                            42.7
                          ],
                          [
                            31.0,
                            36.0
                          ],
                          [
                            32.8,
                            39.4
                          ],
                          [
                            34.7,
                            40.4
                          ],
                          [
                            36.5,
                            36.0
                          ],
                          [
                            38.3,
                            42.7
                          ],
                          [
                            40.2,
                            41.1
                          ],
                          [
                            42.0,
                            36.0
                          ],
                          [
                            43.8,
                            67.6
                          ],
                          [
                            45.7,
                            120.7
                          ],
                          [
                            47.5,
                            146.0
                          ],
                          [
                            49.3,
                            120.7
                          ],
                          [
                            51.2,
                            67.6
                          ],
                          [
                            53.0,
                            36.0
                          ],
                          [
                            54.8,
                            41.1
                          ],
                          [
                            56.7,
                            42.7
                          ],
                          [
                            58.5,
                            36.0
                          ],
                          [
                            60.3,
                            39.4
                          ],
                          [
                            62.2,
                            40.4
                          ],
                          [
                            64.0,
                            36.0
                          ],
                          [
                            65.8,
                            42.7
                          ],
                          [
                            67.7,
                            41.1
                          ],
                          [
                            69.5,
                            36.0
                          ],
                          [
                            71.3,
                            67.6
                          ],
                          [
                            73.2,
                            120.7
                          ],
                          [
                            75.0,
                            146.0
                          ],
                          [
                            76.8,
                            120.7
                          ],
                          [
                            78.7,
                            67.6
                          ],
                          [
                            80.5,
                            36.0
                          ],
                          [
                            82.3,
                            41.1
                          ],
                          [
                            84.2,
                            42.7
                          ],
                          [
                            86.0,
                            36.0
                          ],
                          [
                            87.8,
                            39.4
                          ],
                          [
                            89.7,
                            40.4
                          ],
                          [
                            91.5,
                            36.0
                          ],
                          [
                            93.3,
                            42.7
                          ],
                          [
                            95.2,
                            41.1
                          ],
                          [
                            97.0,
                            36.0
                          ],
                          [
                            98.8,
                            67.6
                          ],
                          [
                            100.7,
                            120.7
                          ],
                          [
                            102.5,
                            146.0
                          ],
                          [
                            104.3,
                            120.7
                          ],
                          [
                            106.2,
                            67.6
                          ],
                          [
                            108.0,
                            36.0
                          ],
                          [
                            109.8,
                            41.1
                          ],
                          [
                            111.7,
                            42.7
                          ],
                          [
                            113.5,
                            36.0
                          ],
                          [
                            115.3,
                            39.4
                          ],
                          [
                            117.2,
                            40.4
                          ],
                          [
                            119.0,
                            36.0
                          ],
                          [
                            120.8,
                            42.7
                          ],
                          [
                            122.7,
                            41.1
                          ],
                          [
                            124.5,
                            36.0
                          ],
                          [
                            126.3,
                            67.6
                          ],
                          [
                            128.2,
                            120.7
                          ],
                          [
                            130.0,
                            146.0
                          ],
                          [
                            131.8,
                            120.7
                          ],
                          [
                            133.7,
                            67.6
                          ],
                          [
                            135.5,
                            36.0
                          ],
                          [
                            137.3,
                            41.1
                          ],
                          [
                            139.2,
                            42.7
                          ],
                          [
                            141.0,
                            36.0
                          ],
                          [
                            142.8,
                            39.4
                          ],
                          [
                            144.7,
                            40.4
                          ],
                          [
                            146.5,
                            36.0
                          ],
                          [
                            148.3,
                            42.7
                          ],
                          [
                            150.2,
                            41.1
                          ],
                          [
                            152.0,
                            36.0
                          ],
                          [
                            153.8,
                            67.6
                          ],
                          [
                            155.7,
                            120.7
                          ],
                          [
                            157.5,
                            146.0
                          ],
                          [
                            159.3,
                            120.7
                          ],
                          [
                            161.2,
                            67.6
                          ],
                          [
                            163.0,
                            36.0
                          ],
                          [
                            164.8,
                            41.1
                          ],
                          [
                            166.7,
                            42.7
                          ],
                          [
                            168.5,
                            36.0
                          ],
                          [
                            170.3,
                            39.4
                          ],
                          [
                            172.2,
                            40.4
                          ],
                          [
                            174.0,
                            36.0
                          ],
                          [
                            175.8,
                            42.7
                          ],
                          [
                            177.7,
                            41.1
                          ],
                          [
                            179.5,
                            36.0
                          ],
                          [
                            181.3,
                            67.6
                          ],
                          [
                            183.2,
                            120.7
                          ],
                          [
                            185.0,
                            146.0
                          ],
                          [
                            186.8,
                            120.7
                          ],
                          [
                            188.7,
                            67.6
                          ],
                          [
                            190.5,
                            36.0
                          ],
                          [
                            192.3,
                            41.1
                          ],
                          [
                            194.2,
                            42.7
                          ],
                          [
                            196.0,
                            36.0
                          ],
                          [
                            197.8,
                            39.4
                          ],
                          [
                            199.7,
                            40.4
                          ],
                          [
                            201.5,
                            36.0
                          ],
                          [
                            203.3,
                            42.7
                          ],
                          [
                            205.2,
                            41.1
                          ],
                          [
                            207.0,
                            36.0
                          ],
                          [
                            208.8,
                            67.6
                          ],
                          [
                            210.7,
                            120.7
                          ],
                          [
                            212.5,
                            146.0
                          ],
                          [
                            214.3,
                            120.7
                          ],
                          [
                            216.2,
                            67.6
                          ],
                          [
                            218.0,
                            36.0
                          ],
                          [
                            219.8,
                            41.1
                          ],
                          [
                            221.7,
                            42.7
                          ],
                          [
                            223.5,
                            36.0
                          ],
                          [
                            225.3,
                            39.4
                          ],
                          [
                            227.2,
                            40.4
                          ],
                          [
                            229.0,
                            36.0
                          ],
                          [
                            230.8,
                            42.7
                          ],
                          [
                            232.7,
                            41.1
                          ],
                          [
                            234.5,
                            36.0
                          ],
                          [
                            236.3,
                            67.6
                          ],
                          [
                            238.2,
                            120.7
                          ],
                          [
                            240.0,
                            146.0
                          ]
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "N5curve"
                      },
                      {
                        "type": "label",
                        "coords": [
                          112,
                          146
                        ],
                        "text": "25",
                        "size": 10,
                        "role": "t",
                        "name": "yaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          75,
                          20
                        ],
                        "text": "-π",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          130,
                          12
                        ],
                        "text": "0",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          185,
                          20
                        ],
                        "text": "+π",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          198,
                          154
                        ],
                        "text": "N = 5 (sin²5γ / sin²γ)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "N5curve"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "intuition",
              "term": "optics-m3-diffraction-grating",
              "title": "Splitting white light into a rainbow with thousands of slits",
              "meaning": "A diffraction grating has around 15,000 parallel grooves per inch so that each wavelength λ in a beam is sent to its own sharp angle given by d sin θ = mλ.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"16\" y1=\"90\" x2=\"230\" y2=\"90\" class=\"gk\"/><path d=\"M 56 36 Q 48 90 56 144 Q 64 90 56 36 Z\" class=\"s ok\"/><line x1=\"96\" y1=\"28\" x2=\"96\" y2=\"152\" class=\"ik\"/><path d=\"M 148 28 Q 138 90 148 152 Q 158 90 148 28 Z\" class=\"s ok\"/><line x1=\"226\" y1=\"18\" x2=\"226\" y2=\"162\" class=\"ik\"/><line x1=\"20\" y1=\"90\" x2=\"56\" y2=\"54\" class=\"lk\"/><line x1=\"56\" y1=\"54\" x2=\"96\" y2=\"54\" class=\"lk\"/><line x1=\"96\" y1=\"54\" x2=\"148\" y2=\"54\" class=\"lk\"/><line x1=\"148\" y1=\"54\" x2=\"226\" y2=\"90\" class=\"lk\"/><line x1=\"96\" y1=\"76\" x2=\"148\" y2=\"46\" class=\"ik\"/><line x1=\"148\" y1=\"46\" x2=\"226\" y2=\"54\" class=\"ik\"/><line x1=\"96\" y1=\"76\" x2=\"148\" y2=\"34\" class=\"lk\"/><line x1=\"148\" y1=\"34\" x2=\"226\" y2=\"32\" class=\"lk\"/><circle cx=\"20\" cy=\"90\" r=\"3.5\" class=\"f\"/><circle cx=\"226\" cy=\"90\" r=\"3.5\" class=\"f\"/><circle cx=\"226\" cy=\"54\" r=\"3.5\" class=\"f\"/><circle cx=\"226\" cy=\"32\" r=\"3.5\" class=\"f\"/><text x=\"20\" y=\"108\" text-anchor=\"middle\" class=\"t\">Slit</text><text x=\"56\" y=\"158\" text-anchor=\"middle\" class=\"t\">L₁</text><text x=\"96\" y=\"166\" text-anchor=\"middle\" class=\"t\">Grating</text><text x=\"148\" y=\"166\" text-anchor=\"middle\" class=\"t\">L₂</text><text x=\"204\" y=\"104\" text-anchor=\"end\" class=\"t\">m=0 (White)</text><text x=\"218\" y=\"58\" text-anchor=\"end\" class=\"t\">Violet</text><text x=\"218\" y=\"30\" text-anchor=\"end\" class=\"t\">Red</text></svg>",
              "picture": "Look at the grating between lenses L₁ and L₂: m = 0 stays white at θ = 0, while for m ≥ 1 red bends more than violet.",
              "example": "Because sin θ = mλ / d cannot exceed 1, the highest visible order is the integer part of d / λ.",
              "bridge": "Differentiating the grating equation d sin θ = mλ with respect to λ gives the angular dispersion Δθ / Δλ = m / (d cos θ)."
            },
            {
              "type": "info",
              "label": "04 · §§18.8–18.8.1 Definition",
              "title": "What is a diffraction grating and its angular dispersion?",
              "defines": [
                "optics-m3-diffraction-grating"
              ],
              "body": "A diffraction grating has N equidistant slits of grating element d. Its principal maxima satisfy d sin θ = mλ (zeroeth order m = 0 is undispersed white), and its angular dispersion is Δθ/Δλ = m/(d cos θ).",
              "tex": "d\\sin\\theta = m\\lambda, \\quad \\frac{\\Delta\\theta}{\\Delta\\lambda} = \\frac{m}{d\\cos\\theta}, \\quad m_{\\max} \\le \\frac{d}{\\lambda}",
              "examples": [
                "m = 0: white center",
                "Small θ: normal spectrum",
                "Smaller d → larger Δθ/Δλ"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "grating",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          16,
                          90
                        ],
                        "p2": [
                          230,
                          90
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "axis"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            54,
                            146
                          ],
                          [
                            46,
                            90
                          ],
                          [
                            54,
                            34
                          ],
                          [
                            62,
                            90
                          ],
                          [
                            54,
                            146
                          ]
                        ],
                        "closed": true,
                        "role": "s ok",
                        "name": "L1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          96,
                          154
                        ],
                        "p2": [
                          96,
                          26
                        ],
                        "role": "ik",
                        "width": 2.6,
                        "name": "G"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            146,
                            154
                          ],
                          [
                            136,
                            90
                          ],
                          [
                            146,
                            26
                          ],
                          [
                            156,
                            90
                          ],
                          [
                            146,
                            154
                          ]
                        ],
                        "closed": true,
                        "role": "s ok",
                        "name": "L2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          224,
                          164
                        ],
                        "p2": [
                          224,
                          16
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            20,
                            90
                          ],
                          [
                            54,
                            126
                          ],
                          [
                            146,
                            126
                          ],
                          [
                            224,
                            90
                          ]
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "m0"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            96,
                            104
                          ],
                          [
                            146,
                            134
                          ],
                          [
                            224,
                            126
                          ]
                        ],
                        "role": "ik",
                        "width": 2,
                        "name": "violet"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            96,
                            104
                          ],
                          [
                            146,
                            146
                          ],
                          [
                            224,
                            148
                          ]
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "red"
                      },
                      {
                        "type": "point",
                        "coords": [
                          20,
                          90
                        ],
                        "id": "S",
                        "role": "f",
                        "name": "S"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          90
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "O"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          126
                        ],
                        "id": "V",
                        "role": "f",
                        "name": "violet"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          148
                        ],
                        "id": "R",
                        "role": "f",
                        "name": "red"
                      },
                      {
                        "type": "label",
                        "coords": [
                          54,
                          20
                        ],
                        "text": "L₁",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "L1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          96,
                          14
                        ],
                        "text": "Grating",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "G"
                      },
                      {
                        "type": "label",
                        "coords": [
                          146,
                          14
                        ],
                        "text": "L₂",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "L2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          216,
                          76
                        ],
                        "text": "m=0",
                        "size": 10,
                        "align": "right",
                        "role": "t",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          216,
                          122
                        ],
                        "text": "Violet",
                        "size": 10,
                        "align": "right",
                        "role": "t",
                        "name": "violet"
                      },
                      {
                        "type": "label",
                        "coords": [
                          216,
                          154
                        ],
                        "text": "Red",
                        "size": 10,
                        "align": "right",
                        "role": "t",
                        "name": "red"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "intuition",
              "term": "optics-m3-resolving-power-grating",
              "title": "When two close spectral lines are just resolved (Rayleigh criterion)",
              "meaning": "According to Rayleigh's criterion, two nearby wavelengths λ and λ + Δλ are just resolved when the peak of λ + Δλ lands right on the first dark minimum of λ.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"146\" x2=\"240\" y2=\"146\" class=\"lk\"/><path d=\"M 44 146 Q 76 146 108 34 Q 140 146 156 146\" class=\"lk\"/><path d=\"M 108 146 Q 124 146 156 34 Q 188 146 220 146\" class=\"ik\"/><line x1=\"108\" y1=\"34\" x2=\"108\" y2=\"146\" class=\"gk\"/><line x1=\"156\" y1=\"34\" x2=\"156\" y2=\"146\" class=\"gk\"/><circle cx=\"108\" cy=\"34\" r=\"3.5\" class=\"f\"/><circle cx=\"156\" cy=\"34\" r=\"3.5\" class=\"f\"/><circle cx=\"132\" cy=\"55\" r=\"3.5\" class=\"f\"/><text x=\"88\" y=\"34\" text-anchor=\"end\" class=\"t\">λ (1.0)</text><text x=\"166\" y=\"34\" class=\"t\">λ + Δλ</text><text x=\"132\" y=\"46\" text-anchor=\"middle\" class=\"t\">0.811</text><text x=\"132\" y=\"164\" text-anchor=\"middle\" class=\"t\">Peak of λ + Δλ at 1st minimum of λ → R = mN</text></svg>",
              "picture": "Look at angle θ under the second peak: it is simultaneously the m-th maximum of λ + Δλ and the first minimum of λ.",
              "example": "At the midpoint between the two just-resolved peaks, the combined intensity dips to 0.811 of either peak (Fig. 18.39).",
              "bridge": "Equating d sin θ = m(λ + Δλ) and d sin θ = mλ + λ/N immediately gives resolving power R = λ / Δλ = mN."
            },
            {
              "type": "info",
              "label": "05 · §18.8.2 Definition",
              "title": "What is the resolving power of a diffraction grating?",
              "defines": [
                "optics-m3-resolving-power-grating"
              ],
              "body": "The resolving power R = λ/Δλ of a grating is its power to distinguish two nearby spectral lines λ and λ + Δλ. By the Rayleigh criterion, R equals the product of diffraction order m and total exposed lines N.",
              "tex": "R = \\frac{\\lambda}{\\Delta\\lambda} = mN",
              "examples": [
                "Rayleigh dip: 0.811",
                "Proportional to order m",
                "Proportional to exposed N"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "rayleigh",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          20,
                          34
                        ],
                        "p2": [
                          240,
                          34
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "xaxis"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            52,
                            34
                          ],
                          [
                            108,
                            146
                          ],
                          [
                            156,
                            34
                          ]
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "lam1"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            108,
                          34
                          ],
                          [
                            156,
                            146
                          ],
                          [
                            212,
                            34
                          ]
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "lam2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          156,
                          146
                        ],
                        "p2": [
                          156,
                          34
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "common"
                      },
                      {
                        "type": "point",
                        "coords": [
                          108,
                          146
                        ],
                        "id": "P1",
                        "role": "f",
                        "name": "lam1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          156,
                          146
                        ],
                        "id": "P2",
                        "role": "f",
                        "name": "lam2"
                      },
                      {
                        "type": "point",
                        "coords": [
                          132,
                          125
                        ],
                        "id": "dip",
                        "role": "f",
                        "name": "common"
                      },
                      {
                        "type": "label",
                        "coords": [
                          84,
                          146
                        ],
                        "text": "λ (1.0)",
                        "size": 11,
                        "align": "right",
                        "role": "t",
                        "name": "lam1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          132,
                          138
                        ],
                        "text": "0.811",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "common"
                      },
                      {
                        "type": "label",
                        "coords": [
                          172,
                          146
                        ],
                        "text": "λ + Δλ",
                        "size": 11,
                        "role": "t",
                        "name": "lam2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          156,
                          18
                        ],
                        "text": "d sin θ = m(λ+Δλ) = mλ + λ/N",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "common"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "label": "06 · §§18.8.1–18.8.2 Derivation",
              "title": "Grating angular dispersion and resolving power R = mN",
              "legend": "Grating element \\(d\\), spectral order \\(m\\), total exposed lines \\(N\\), and just-resolved wavelengths \\(\\lambda\\) and \\(\\lambda + \\Delta\\lambda\\) at angle \\(\\theta\\) (Eqs. 18.64–18.69, Fig. 18.39).",
              "setup": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "Dispersion",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          20,
                          36
                        ],
                        "p2": [
                          240,
                          36
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "theta"
                      },
                      {
                        "type": "curve",
                        "points": [
                          [
                            54,
                            36
                          ],
                          [
                            108,
                            146
                          ],
                          [
                            156,
                            36
                          ]
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "peak1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          108,
                          146
                        ],
                        "id": "P1",
                        "role": "f",
                        "name": "peak1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          86,
                          146
                        ],
                        "text": "λ (d sin θ = mλ)",
                        "size": 10,
                        "align": "right",
                        "role": "t",
                        "name": "peak1"
                      }
                    ]
                  },
                  {
                    "step": 3,
                    "name": "Rayleigh match",
                    "objects": [
                      {
                        "type": "curve",
                        "points": [
                          [
                            108,
                            36
                          ],
                          [
                            156,
                            146
                          ],
                          [
                            210,
                            36
                          ]
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "peak2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          156,
                          146
                        ],
                        "p2": [
                          156,
                          36
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.6,
                        "name": "min1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          156,
                          146
                        ],
                        "id": "P2",
                        "role": "f",
                        "name": "peak2"
                      },
                      {
                        "type": "point",
                        "coords": [
                          156,
                          36
                        ],
                        "id": "M1",
                        "role": "f",
                        "name": "min1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          170,
                          146
                        ],
                        "text": "λ + Δλ",
                        "size": 11,
                        "role": "t",
                        "name": "peak2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          156,
                          20
                        ],
                        "text": "θ (1st min of λ)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "min1"
                      }
                    ]
                  }
                ]
              },
              "phases": [
                {
                  "name": "Dispersion",
                  "why": "differentiate d sin θ = mλ to find angular dispersion Δθ/Δλ"
                },
                {
                  "name": "Rayleigh match",
                  "why": "place the m-th peak of λ + Δλ on the first minimum of λ"
                },
                {
                  "name": "Equate paths",
                  "why": "equate the two expressions for d sin θ and cancel mλ"
                },
                {
                  "name": "Resolving power",
                  "why": "rearrange for R = λ / Δλ = mN"
                }
              ],
              "steps": [
                {
                  "phase": "Dispersion",
                  "focus": [
                    "peak1",
                    "theta"
                  ],
                  "tex": "d\\sin\\theta = m\\lambda",
                  "note": "Start from the grating equation for the \\(m\\)-th principal maximum (Eq. 18.64)."
                },
                {
                  "focus": [
                    "peak1",
                    "theta"
                  ],
                  "move": {
                    "type": "differentiate",
                    "wrt": "\\lambda"
                  },
                  "tex": "d\\cos\\theta\\frac{\\Delta\\theta}{\\Delta\\lambda} = m",
                  "note": "Differentiate both sides with respect to \\(\\lambda\\) for a small wavelength interval \\(\\Delta\\lambda\\).",
                  "ask": {
                    "q": "How do we isolate the angular dispersion \\(\\Delta\\theta / \\Delta\\lambda\\)?",
                    "options": [
                      "Divide both sides by \\(d\\cos\\theta\\)",
                      "Multiply both sides by \\(\\sin\\theta\\)",
                      "Subtract \\(m\\) from both sides",
                      "Set \\(\\theta = 90^\\circ\\)"
                    ],
                    "answer": 0,
                    "why": "Dividing by \\(d\\cos\\theta\\) gives \\(\\Delta\\theta/\\Delta\\lambda = m/(d\\cos\\theta)\\) (Eq. 18.65)."
                  }
                },
                {
                  "focus": [
                    "peak1",
                    "theta"
                  ],
                  "move": {
                    "type": "divide",
                    "by": "d\\cos\\theta"
                  },
                  "tex": "\\frac{\\Delta\\theta}{\\Delta\\lambda} = \\frac{m}{d\\cos\\theta}",
                  "note": "Smaller grating element \\(d\\) and higher order \\(m\\) give larger angular dispersion (Eq. 18.65)."
                },
                {
                  "phase": "Rayleigh match",
                  "focus": [
                    "peak2",
                    "theta"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Write m-th principal maximum for wavelength λ + Δλ at angle θ (Eq. 18.67)"
                  },
                  "tex": "d\\sin\\theta = m(\\lambda + \\Delta\\lambda)",
                  "note": "At common angle \\(\\theta\\), wavelength \\(\\lambda + \\Delta\\lambda\\) forms its \\(m\\)-th principal maximum (Eq. 18.67)."
                },
                {
                  "focus": [
                    "peak1",
                    "min1",
                    "theta"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Write first minimum of wavelength λ at the same angle θ (Eq. 18.68)"
                  },
                  "tex": "d\\sin\\theta = m\\lambda + \\frac{\\lambda}{N}",
                  "note": "At the same angle \\(\\theta\\), wavelength \\(\\lambda\\) has its first adjacent minimum (Eq. 18.68).",
                  "ask": {
                    "q": "By the Rayleigh criterion, why are Eqs. (18.67) and (18.68) equal?",
                    "options": [
                      "Both have \\(\\theta = 0\\)",
                      "Both hold at the same angle \\(\\theta\\)",
                      "Both have \\(\\Delta\\lambda = 0\\)",
                      "Both have \\(m = 0\\)"
                    ],
                    "answer": 1,
                    "why": "The peak of \\(\\lambda + \\Delta\\lambda\\) and the first minimum of \\(\\lambda\\) occur at the same angle \\(\\theta\\)."
                  }
                },
                {
                  "phase": "Equate paths",
                  "focus": [
                    "peak2",
                    "min1"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "d\\sin\\theta = m(\\lambda + \\Delta\\lambda)"
                  },
                  "tex": "m\\lambda + m\\Delta\\lambda = m\\lambda + \\frac{\\lambda}{N}",
                  "note": "Equate the right-hand sides of Eqs. (18.67) and (18.68) and expand \\(m(\\lambda + \\Delta\\lambda)\\).",
                  "ask": {
                    "q": "What remains after subtracting \\(m\\lambda\\) from both sides?",
                    "options": [
                      "\\(\\Delta\\lambda = \\lambda\\)",
                      "\\(m = \\lambda / N\\)",
                      "\\(m\\Delta\\lambda = \\lambda / N\\)",
                      "\\(N\\Delta\\lambda = m\\)"
                    ],
                    "answer": 2,
                    "why": "Subtracting \\(m\\lambda\\) from both sides leaves \\(m\\Delta\\lambda = \\lambda / N\\)."
                  }
                },
                {
                  "focus": [
                    "peak2",
                    "min1"
                  ],
                  "move": {
                    "type": "subtract",
                    "by": "m\\lambda"
                  },
                  "tex": "m\\Delta\\lambda = \\frac{\\lambda}{N}",
                  "note": "Subtract \\(m\\lambda\\) from both sides.",
                  "ask": {
                    "q": "How do we rearrange \\(m\\Delta\\lambda = \\lambda / N\\) to get \\(R = \\lambda / \\Delta\\lambda\\)?",
                    "options": [
                      "Divide by \\(N\\)",
                      "Add \\(N\\) to both sides",
                      "Square both sides",
                      "Multiply by \\(N / \\Delta\\lambda\\)"
                    ],
                    "answer": 3,
                    "why": "Multiplying by \\(N/\\Delta\\lambda\\) gives \\(\\lambda / \\Delta\\lambda = mN\\) (Eq. 18.69)."
                  }
                },
                {
                  "phase": "Resolving power",
                  "focus": [
                    "peak1",
                    "peak2",
                    "min1"
                  ],
                  "move": {
                    "type": "rearrange"
                  },
                  "tex": "R = \\frac{\\lambda}{\\Delta\\lambda} = mN",
                  "note": "Resolving power equals the product of spectral order \\(m\\) and total illuminated rulings \\(N\\) (Eq. 18.69)."
                }
              ]
            },
            {
              "type": "math",
              "label": "07 · §§18.8.1–18.8.2 Example 18.10",
              "title": "Worked example: overlapping orders and sodium doublet resolution",
              "tex": "d = \\frac{2.54}{15000} = 1.69\\times 10^{-4}\\text{ cm}, \\quad \\theta_{2r} \\approx 55.9^\\circ > \\theta_{3v} \\approx 45.2^\\circ, \\quad N_{\\min} = \\frac{5.89\\times 10^{-5}}{6\\times 10^{-8}} \\approx 1000",
              "body": "For 15,000 lines/inch, 2nd-order red (\\(\\lambda = 7\\times 10^{-5}\\text{ cm}, \\theta_{2r} \\approx 55.9^\\circ\\)) bends further than 3rd-order violet (\\(\\lambda = 4\\times 10^{-5}\\text{ cm}, \\theta_{3v} \\approx 45.2^\\circ\\)), so orders 2 and 3 overlap. Resolving sodium \\(D_1, D_2\\) (\\(\\Delta\\lambda = 6\\text{ \\AA}\\)) in 1st order requires \\(N \\ge 1000\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "In an \\(N\\)-slit pattern, how many secondary minima lie between two adjacent principal maxima?",
              "options": [
                "\\(N - 1\\)",
                "\\(N - 2\\)",
                "\\(N\\)",
                "\\(2N\\)"
              ],
              "answer": 0,
              "why": "Minima occur at \\(N\\gamma = p\\pi\\) for \\(p = 1, 2, \\dots, N - 1\\), giving \\(N - 1\\) secondary minima between adjacent principal maxima (§18.7.1)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "How does a grating's angular dispersion \\(\\Delta\\theta / \\Delta\\lambda\\) depend on grating element \\(d\\)?",
              "options": [
                "Directly proportional to \\(d\\)",
                "Inversely proportional to \\(d\\)",
                "Independent of \\(d\\)",
                "Proportional to \\(d^2\\)"
              ],
              "answer": 1,
              "why": "From \\(\\Delta\\theta / \\Delta\\lambda = m / (d\\cos\\theta)\\), a smaller grating element \\(d\\) produces a larger angular dispersion (Eq. 18.65)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "A grating with \\(N = 1500\\) illuminated lines is used in order \\(m = 2\\). Find resolving power \\(R\\).",
              "answer": 3000,
              "tolerance": 0,
              "unit": "",
              "why": "From \\(R = mN\\), \\(R = 2 \\times 1500 = 3000\\) (Eq. 18.69)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "Rowland's grating has \\(d = 1.759\\times 10^{-4}\\text{ cm}\\). For \\(\\lambda = 6\\times 10^{-5}\\text{ cm}\\), find the highest visible order \\(m\\).",
              "answer": 2,
              "tolerance": 0,
              "unit": "",
              "why": "Since \\(\\sin\\theta \\le 1\\), \\(m \\le d/\\lambda = 1.759\\times 10^{-4} / (6\\times 10^{-5}) = 2.93\\), so the maximum integer order is \\(2\\) (§18.8)."
            }
          ]
        }
      ]
    },
    {
      "short": "Fresnel",
      "title": "Fresnel Diffraction, Zone Plate & Straight Edge",
      "sheets": [
        {
          "id": "optics-m3-fresnel-zone-plate",
          "title": "Fresnel zones & zone plate",
          "icon": "lens",
          "source": "Unit 15 · Ghatak §§20.1–20.3 (PDF pp. 327–330); syllabus item 15",
          "cards": [
            {
              "type": "intuition",
              "term": "optics-m3-fresnel-half-period-zones",
              "title": "Slicing a wavefront into concentric rings that alternate in sign",
              "meaning": "Fresnel sliced a plane wavefront into bullseye rings whose distances to screen point P grow by λ/2 from one ring to the next, so adjacent rings arrive out of step by π.",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"68\" cy=\"90\" rx=\"26\" ry=\"64\" class=\"s ok\"/><ellipse cx=\"68\" cy=\"90\" rx=\"20\" ry=\"49\" class=\"lk\"/><ellipse cx=\"68\" cy=\"90\" rx=\"13\" ry=\"32\" class=\"ik\"/><line x1=\"68\" y1=\"90\" x2=\"222\" y2=\"90\" class=\"lk\"/><line x1=\"68\" y1=\"41\" x2=\"222\" y2=\"90\" class=\"ik\"/><line x1=\"68\" y1=\"26\" x2=\"222\" y2=\"90\" class=\"lk\"/><circle cx=\"68\" cy=\"90\" r=\"3.5\" class=\"f\"/><circle cx=\"222\" cy=\"90\" r=\"3.5\" class=\"f\"/><text x=\"54\" y=\"94\" class=\"t\">O</text><text x=\"68\" y=\"18\" text-anchor=\"middle\" class=\"t\">W (r_n ≈ √(nλd))</text><text x=\"145\" y=\"106\" text-anchor=\"middle\" class=\"t\">d</text><text x=\"154\" y=\"48\" text-anchor=\"middle\" class=\"t\">d + nλ/2</text><text x=\"232\" y=\"94\" class=\"t\">P</text><text x=\"148\" y=\"158\" text-anchor=\"middle\" class=\"t\">u(P) = u₁ - u₂ + u₃ - u₄ + … ≈ u₁/2</text></svg>",
              "picture": "Look at the concentric Fresnel zones on wavefront WW': each outer circle is λ/2 farther from P than the previous circle.",
              "example": "Every zone has the same area πλd, but amplitudes slowly decrease (u₁ > u₂ > u₃ > …) because outer zones tilt at a larger obliquity angle χ.",
              "bridge": "By Schuster's pairing method, the alternating series u₁ - u₂ + u₃ - u₄ + … for the whole unobstructed wavefront sums to u₁ / 2."
            },
            {
              "type": "info",
              "label": "01 · §20.2 Definition",
              "title": "What are Fresnel half-period zones?",
              "defines": [
                "optics-m3-fresnel-half-period-zones"
              ],
              "body": "Fresnel half-period zones are annular rings on a plane wavefront bounded by circles at distances d + nλ/2 from P. Each zone has radius r_n ≈ √(nλd), equal area πλd, and is π out of phase with its neighbours.",
              "tex": "r_n \\approx \\sqrt{n\\lambda d}, \\quad A_n \\approx \\pi\\lambda d, \\quad u(P) = u_1 - u_2 + u_3 - u_4 + \\dots \\approx \\frac{u_1}{2}",
              "examples": [
                "Radii: r_n ≈ √(nλd)",
                "Equal area: A_n ≈ πλd",
                "Whole wave: u(P) ≈ u₁/2"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "zones",
                    "objects": [
                      {
                        "type": "ellipse",
                        "center": [
                          66,
                          90
                        ],
                        "rx": 26,
                        "ry": 62,
                        "role": "s ok",
                        "name": "z3"
                      },
                      {
                        "type": "ellipse",
                        "center": [
                          66,
                          90
                        ],
                        "rx": 20,
                        "ry": 46,
                        "role": "lk",
                        "name": "z2"
                      },
                      {
                        "type": "ellipse",
                        "center": [
                          66,
                          90
                        ],
                        "rx": 12,
                        "ry": 28,
                        "role": "ik",
                        "name": "z1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          66,
                          90
                        ],
                        "p2": [
                          224,
                          90
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "PO"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          66,
                          152
                        ],
                        "p2": [
                          224,
                          90
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "QnP"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          66,
                          136
                        ],
                        "p2": [
                          224,
                          90
                        ],
                        "role": "ik",
                        "width": 1.8,
                        "name": "Qn1P"
                      },
                      {
                        "type": "point",
                        "coords": [
                          66,
                          90
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "O"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          90
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          50,
                          90
                        ],
                        "text": "O",
                        "size": 11,
                        "role": "t",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          66,
                          164
                        ],
                        "text": "Q_n",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "QnP"
                      },
                      {
                        "type": "label",
                        "coords": [
                          146,
                          76
                        ],
                        "text": "d",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "PO"
                      },
                      {
                        "type": "label",
                        "coords": [
                          154,
                          136
                        ],
                        "text": "d + nλ/2",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "QnP"
                      },
                      {
                        "type": "label",
                        "coords": [
                          236,
                          90
                        ],
                        "text": "P",
                        "size": 11,
                        "role": "t",
                        "name": "P"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "label": "02 · §20.2 Derivation",
              "title": "Radius, equal area, and Schuster sum of Fresnel half-period zones",
              "legend": "Plane wavefront at distance \\(PO = d \\gg \\lambda\\), \\(n\\)-th circle radius \\(r_n\\), zone area \\(A_n\\), and zone amplitudes \\(u_1 > u_2 > u_3 > \\dots\\) (Eqs. 20.1–20.12, Fig. 20.2).",
              "setup": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "Zone radius",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          90
                        ],
                        "p2": [
                          224,
                          90
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "d"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          90
                        ],
                        "p2": [
                          64,
                          152
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "rn"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          152
                        ],
                        "p2": [
                          224,
                          90
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "QnP"
                      },
                      {
                        "type": "point",
                        "coords": [
                          64,
                          90
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "d"
                      },
                      {
                        "type": "point",
                        "coords": [
                          64,
                          152
                        ],
                        "id": "Qn",
                        "role": "f",
                        "name": "rn"
                      },
                      {
                        "type": "point",
                        "coords": [
                          224,
                          90
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          48,
                          122
                        ],
                        "text": "r_n",
                        "size": 11,
                        "role": "t",
                        "name": "rn"
                      },
                      {
                        "type": "label",
                        "coords": [
                          144,
                          76
                        ],
                        "text": "d",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "d"
                      },
                      {
                        "type": "label",
                        "coords": [
                          154,
                          134
                        ],
                        "text": "d + nλ/2",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "QnP"
                      },
                      {
                        "type": "label",
                        "coords": [
                          236,
                          90
                        ],
                        "text": "P",
                        "size": 11,
                        "role": "t",
                        "name": "P"
                      }
                    ]
                  },
                  {
                    "step": 3,
                    "name": "Zone area",
                    "objects": [
                      {
                        "type": "ellipse",
                        "center": [
                          64,
                          90
                        ],
                        "rx": 24,
                        "ry": 62,
                        "role": "s ok",
                        "name": "An"
                      },
                      {
                        "type": "ellipse",
                        "center": [
                          64,
                          90
                        ],
                        "rx": 18,
                        "ry": 46,
                        "role": "lk",
                        "name": "An"
                      },
                      {
                        "type": "label",
                        "coords": [
                          64,
                          18
                        ],
                        "text": "A_n ≈ πλd",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "An"
                      }
                    ]
                  }
                ]
              },
              "phases": [
                {
                  "name": "Zone radius",
                  "why": "use right triangle POQ_n with d ≫ λ to find r_n ≈ √(nλd)"
                },
                {
                  "name": "Zone area",
                  "why": "subtract πr_{n-1}² from πr_n² to show all zones have area πλd"
                },
                {
                  "name": "Alternating sum",
                  "why": "sum consecutive zone amplitudes with alternating signs"
                },
                {
                  "name": "Schuster sum",
                  "why": "pair half-amplitudes to show the whole wavefront gives u₁/2"
                }
              ],
              "steps": [
                {
                  "phase": "Zone radius",
                  "focus": [
                    "rn",
                    "d",
                    "QnP"
                  ],
                  "tex": "r_n^2 = \\left(d + \\frac{n\\lambda}{2}\\right)^2 - d^2",
                  "note": "In right triangle \\(POQ_n\\), the outer radius \\(r_n\\) of the \\(n\\)-th zone satisfies Pythagoras' theorem (Fig. 20.2)."
                },
                {
                  "focus": [
                    "rn",
                    "d",
                    "QnP"
                  ],
                  "move": {
                    "type": "expand"
                  },
                  "tex": "r_n^2 = n\\lambda d + \\frac{n^2\\lambda^2}{4}",
                  "note": "Expand \\((d + n\\lambda/2)^2\\) and cancel \\(d^2 - d^2\\).",
                  "ask": {
                    "q": "For visible light where \\(d \\gg \\lambda\\), which term is negligible?",
                    "options": [
                      "\\(n^2\\lambda^2 / 4\\)",
                      "\\(n\\lambda d\\)",
                      "\\(r_n^2\\)",
                      "\\(d\\)"
                    ],
                    "answer": 0,
                    "why": "Since \\(d \\gg \\lambda\\) and \\(n\\) is not very large, \\(n\\lambda/(4d) \\ll 1\\), so \\(n^2\\lambda^2/4\\) is negligible."
                  }
                },
                {
                  "focus": [
                    "rn",
                    "d"
                  ],
                  "move": {
                    "type": "root",
                    "label": "Neglect n²λ²/4 for d ≫ λ and take the square root (Eq. 20.1)"
                  },
                  "tex": "r_n = \\sqrt{n\\lambda d}",
                  "note": "Thus the radii of Fresnel half-period zones are proportional to \\(\\sqrt{n}\\) (Eq. 20.1).",
                  "ask": {
                    "q": "How is the area \\(A_n\\) of the \\(n\\)-th annular zone defined?",
                    "options": [
                      "\\(\\pi r_n^2 + \\pi r_{n-1}^2\\)",
                      "\\(\\pi r_n^2 - \\pi r_{n-1}^2\\)",
                      "\\(2\\pi r_n\\)",
                      "\\(\\pi r_n^2 / n\\)"
                    ],
                    "answer": 1,
                    "why": "The \\(n\\)-th zone is the ring between circles \\(r_n\\) and \\(r_{n-1}\\), so its area is \\(\\pi r_n^2 - \\pi r_{n-1}^2\\)."
                  }
                },
                {
                  "phase": "Zone area",
                  "focus": [
                    "An",
                    "rn"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Write area A_n of the n-th annular ring (Eq. 20.2)"
                  },
                  "tex": "A_n = \\pi r_n^2 - \\pi r_{n-1}^2",
                  "note": "The \\(n\\)-th half-period zone is the annular region between the \\(n\\)-th and \\((n-1)\\)-th circles."
                },
                {
                  "focus": [
                    "An",
                    "rn",
                    "d"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "r_n^2 = n\\lambda d"
                  },
                  "tex": "A_n = \\pi\\lambda d",
                  "note": "Substitute \\(r_n^2 = n\\lambda d\\) and \\(r_{n-1}^2 = (n-1)\\lambda d\\); every zone has the same area \\(\\pi\\lambda d\\) (Eq. 20.2).",
                  "ask": {
                    "q": "Why do consecutive zones contribute with alternating signs in \\(u(P)\\)?",
                    "options": [
                      "Their areas are zero",
                      "Their frequencies differ",
                      "Their distances to \\(P\\) differ by \\(\\lambda/2\\) (phase \\(\\pi\\))",
                      "Light travels backward from even zones"
                    ],
                    "answer": 2,
                    "why": "Corresponding points \\(Q_n\\) and \\(Q_{n-1}\\) satisfy \\(Q_n P - Q_{n-1} P = \\lambda/2\\), which is a phase difference of \\(\\pi\\)."
                  }
                },
                {
                  "phase": "Alternating sum",
                  "focus": [
                    "An",
                    "P"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Sum zone amplitudes with alternating signs at P (Eq. 20.3)"
                  },
                  "tex": "u(P) = u_1 - u_2 + u_3 - u_4 + \\dots",
                  "note": "Due to increased obliquity \\(\\chi\\), amplitudes decrease slowly: \\(u_1 > u_2 > u_3 > \\dots\\) (Eqs. 20.3–20.5)."
                },
                {
                  "phase": "Schuster sum",
                  "focus": [
                    "P",
                    "An"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Group terms by Schuster's method (Eq. 20.6)"
                  },
                  "tex": "u(P) = \\frac{u_1}{2} + \\left(\\frac{u_1}{2} - u_2 + \\frac{u_3}{2}\\right) + \\left(\\frac{u_3}{2} - u_4 + \\frac{u_5}{2}\\right) + \\dots",
                  "note": "Rewrite Eq. (20.3) by splitting odd terms into halves and bracketing around each even term (Eq. 20.6).",
                  "ask": {
                    "q": "Since \\(u_n \\approx \\frac{1}{2}(u_{n-1} + u_{n+1})\\) and \\(u_m \\to 0\\), what is \\(u(P)\\)?",
                    "options": [
                      "\\(0\\)",
                      "\\(u_1\\)",
                      "\\(2u_1\\)",
                      "\\(u_1 / 2\\)"
                    ],
                    "answer": 3,
                    "why": "The bracketed terms cancel and \\(u_m \\to 0\\) for the full wavefront, leaving \\(u(P) \\approx u_1 / 2\\) (Eq. 20.12)."
                  }
                },
                {
                  "focus": [
                    "P",
                    "d",
                    "An"
                  ],
                  "move": {
                    "type": "simplify",
                    "label": "Use u_n ≈ (u_{n-1} + u_{n+1})/2 and u_m → 0 (Eq. 20.12)"
                  },
                  "tex": "u(P) = \\frac{u_1}{2}",
                  "note": "The resultant amplitude of the entire unobstructed wavefront is half the amplitude of the first zone alone (Eq. 20.12)."
                }
              ]
            },
            {
              "type": "intuition",
              "term": "optics-m3-poisson-spot",
              "title": "A circular hole can make the center dark, and a solid coin makes it bright!",
              "meaning": "Opening just 1 Fresnel zone gives amplitude u₁ = 2(u₁/2) and intensity 4I₀; opening 2 zones gives u₁ - u₂ ≈ 0 (dark); and blocking the first p zones with a solid disc always leaves u_{p+1}/2 (a bright Poisson spot!).",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"90\" x2=\"224\" y2=\"90\" class=\"gk\"/><ellipse cx=\"74\" cy=\"90\" rx=\"16\" ry=\"42\" class=\"s ok\"/><line x1=\"214\" y1=\"22\" x2=\"214\" y2=\"158\" class=\"ik\"/><line x1=\"20\" y1=\"58\" x2=\"66\" y2=\"58\" class=\"lk\"/><line x1=\"20\" y1=\"122\" x2=\"66\" y2=\"122\" class=\"lk\"/><line x1=\"74\" y1=\"48\" x2=\"214\" y2=\"90\" class=\"lk\"/><line x1=\"74\" y1=\"132\" x2=\"214\" y2=\"90\" class=\"lk\"/><circle cx=\"214\" cy=\"90\" r=\"4.5\" class=\"f\"/><text x=\"74\" y=\"152\" text-anchor=\"middle\" class=\"t\">Opaque disc (blocks p zones)</text><text x=\"164\" y=\"42\" text-anchor=\"middle\" class=\"t\">u(P) = u_{p+1} - u_{p+2} + …</text><text x=\"164\" y=\"60\" text-anchor=\"middle\" class=\"t\">≈ u_{p+1} / 2</text><text x=\"224\" y=\"94\" class=\"t\">P (Bright!)</text></svg>",
              "picture": "Look at the opaque disc blocking the first p zones: waves from the (p + 1)-th zone around the rim meet in phase at axial point P.",
              "example": "In 1818 Poisson predicted this bright spot to disprove Fresnel's wave theory, but Arago immediately saw the spot at the shadow center!",
              "bridge": "For a circular hole of radius a, axial maxima occur when a² = (2n + 1)λd (odd zones) and minima when a² = 2nλd (even zones)."
            },
            {
              "type": "info",
              "label": "03 · §§20.2.1–20.2.2 Definition",
              "title": "What is the Poisson spot and circular-aperture axial diffraction?",
              "defines": [
                "optics-m3-poisson-spot"
              ],
              "body": "A circular hole of radius a gives axial maxima for odd numbers of zones (1st zone alone gives u₁ and intensity 4I₀) and minima for even numbers of zones. An opaque disc blocking p zones always leaves u_{p+1}/2, forming a bright Poisson spot.",
              "tex": "d_{\\max} = \\frac{a^2}{(2n+1)\\lambda}, \\quad d_{\\min} = \\frac{a^2}{2n\\lambda}, \\quad u_{\\text{disc}}(P) \\approx \\frac{u_{p+1}}{2}",
              "examples": [
                "1st zone open: I = 4I₀",
                "2 zones open: I ≈ 0",
                "Opaque disc: bright spot"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "poisson",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          18,
                          90
                        ],
                        "p2": [
                          224,
                          90
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "axis"
                      },
                      {
                        "type": "ellipse",
                        "center": [
                          76,
                          90
                        ],
                        "rx": 16,
                        "ry": 42,
                        "role": "s ok",
                        "name": "disc"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          214,
                          158
                        ],
                        "p2": [
                          214,
                          22
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          20,
                          120
                        ],
                        "p2": [
                          64,
                          120
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "inc1"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          20,
                          60
                        ],
                        "p2": [
                          64,
                          60
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "inc2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          76,
                          132
                        ],
                        "p2": [
                          214,
                          90
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "rim1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          76,
                          48
                        ],
                        "p2": [
                          214,
                          90
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "rim2"
                      },
                      {
                        "type": "point",
                        "coords": [
                          214,
                          90
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          76,
                          32
                        ],
                        "text": "Opaque disc",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "disc"
                      },
                      {
                        "type": "label",
                        "coords": [
                          154,
                          134
                        ],
                        "text": "u(P) ≈ u_{p+1} / 2",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "rim1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          90
                        ],
                        "text": "P (Poisson)",
                        "size": 10,
                        "role": "t",
                        "name": "P"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "intuition",
              "term": "optics-m3-zone-plate",
              "title": "Blackening every second zone to build a flat diffraction lens",
              "meaning": "A zone plate blocks all the even-numbered zones (-u₂, -u₄, …) so all the odd-numbered zones (+u₁ + u₃ + u₅ + …) arrive in step and create a brilliant focus!",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"66\" cy=\"90\" r=\"52\" class=\"s ok\"/><circle cx=\"66\" cy=\"90\" r=\"45\" class=\"lk\"/><circle cx=\"66\" cy=\"90\" r=\"37\" class=\"s ok\"/><circle cx=\"66\" cy=\"90\" r=\"26\" class=\"lk\"/><line x1=\"132\" y1=\"90\" x2=\"244\" y2=\"90\" class=\"gk\"/><line x1=\"132\" y1=\"38\" x2=\"132\" y2=\"142\" class=\"ik\"/><line x1=\"132\" y1=\"46\" x2=\"232\" y2=\"90\" class=\"lk\"/><line x1=\"132\" y1=\"134\" x2=\"232\" y2=\"90\" class=\"lk\"/><line x1=\"132\" y1=\"46\" x2=\"166\" y2=\"90\" class=\"ik\"/><line x1=\"132\" y1=\"134\" x2=\"166\" y2=\"90\" class=\"ik\"/><circle cx=\"232\" cy=\"90\" r=\"4\" class=\"f\"/><circle cx=\"166\" cy=\"90\" r=\"3.5\" class=\"f\"/><circle cx=\"182\" cy=\"90\" r=\"3\" class=\"f\"/><text x=\"66\" y=\"158\" text-anchor=\"middle\" class=\"t\">r_n = √n K</text><text x=\"166\" y=\"108\" text-anchor=\"middle\" class=\"t\">P₃ (f/3)</text><text x=\"184\" y=\"76\" text-anchor=\"middle\" class=\"t\">P₂ (dark)</text><text x=\"226\" y=\"108\" text-anchor=\"middle\" class=\"t\">P₁ (f = K²/λ)</text><text x=\"190\" y=\"32\" text-anchor=\"middle\" class=\"t\">u(P₁) = u₁ + u₃ + u₅ + …</text></svg>",
              "picture": "Look at the zone plate (left) and its axis (right): odd zones add to an intense primary focus at P₁ (f = K²/λ) and weaker odd foci at f/3, f/5, …",
              "example": "At P₃ = K²/(3λ), each ring holds 3 half-period zones, so (u₁ - u₂ + u₃) + (u₇ - u₈ + u₉) + … gives a weaker secondary focus.",
              "bridge": "For a point source S at distance a and image P at distance b, requiring the first zone edge L to add path λ/2 gives the lens-like formula 1/a + 1/b = 1/f."
            },
            {
              "type": "info",
              "label": "04 · §20.3 Definition",
              "title": "What is a Fresnel zone plate?",
              "defines": [
                "optics-m3-zone-plate"
              ],
              "body": "A zone plate consists of concentric circles of radii r_n = √n K with alternate annular zones blackened. For an incident plane wave, it forms an intense primary focus at f = K²/λ and weaker foci at K²/(3λ), K²/(5λ), …",
              "tex": "r_n = \\sqrt{n}\\,K, \\quad f_m = \\frac{K^2}{(2m+1)\\lambda}, \\quad \\frac{1}{a} + \\frac{1}{b} = \\frac{1}{f} \\;\\left(f = \\frac{r_1^2}{\\lambda}\\right)",
              "examples": [
                "Primary focus: K²/λ",
                "Subsidiary: K²/3λ, K²/5λ",
                "Dark at K²/2λ"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "zoneplate",
                    "objects": [
                      {
                        "type": "circle",
                        "center": [
                          66,
                          90
                        ],
                        "r": 50,
                        "role": "s ok",
                        "name": "c4"
                      },
                      {
                        "type": "circle",
                        "center": [
                          66,
                          90
                        ],
                        "r": 43,
                        "role": "lk",
                        "name": "c3"
                      },
                      {
                        "type": "circle",
                        "center": [
                          66,
                          90
                        ],
                        "r": 35,
                        "role": "s ok",
                        "name": "c2"
                      },
                      {
                        "type": "circle",
                        "center": [
                          66,
                          90
                        ],
                        "r": 25,
                        "role": "lk",
                        "name": "c1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          132,
                          90
                        ],
                        "p2": [
                          244,
                          90
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "axis"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          132,
                          142
                        ],
                        "p2": [
                          132,
                          38
                        ],
                        "role": "ik",
                        "width": 2.4,
                        "name": "plate"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          132,
                          134
                        ],
                        "p2": [
                          232,
                          90
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "P1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          132,
                          46
                        ],
                        "p2": [
                          232,
                          90
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "P1"
                      },
                      {
                        "type": "point",
                        "coords": [
                          166,
                          90
                        ],
                        "id": "P3",
                        "role": "f",
                        "name": "P3"
                      },
                      {
                        "type": "point",
                        "coords": [
                          182,
                          90
                        ],
                        "id": "P2",
                        "role": "f",
                        "name": "P2"
                      },
                      {
                        "type": "point",
                        "coords": [
                          232,
                          90
                        ],
                        "id": "P1",
                        "role": "f",
                        "name": "P1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          66,
                          24
                        ],
                        "text": "r_n = √n K",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "c4"
                      },
                      {
                        "type": "label",
                        "coords": [
                          164,
                          72
                        ],
                        "text": "P₃ (K²/3λ)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "P3"
                      },
                      {
                        "type": "label",
                        "coords": [
                          184,
                          106
                        ],
                        "text": "P₂ (K²/2λ)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "P2"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          72
                        ],
                        "text": "P₁ (K²/λ)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "P1"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "label": "05 · §20.3 Derivation",
              "title": "Zone-plate imaging formula 1/a + 1/b = 1/f",
              "legend": "Point source \\(S\\) at distance \\(a\\) on the axis, zone plate of first-circle radius \\(r_1\\) at point \\(L\\), and bright image \\(P\\) at distance \\(b\\) (Eqs. 20.18–20.20).",
              "setup": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "Half-wave path",
                    "objects": [
                      {
                        "type": "segment",
                        "p1": [
                          24,
                          86
                        ],
                        "p2": [
                          236,
                          86
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "SP"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          126,
                          154
                        ],
                        "p2": [
                          126,
                          24
                        ],
                        "role": "ik",
                        "width": 2.4,
                        "name": "r1"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          24,
                          86
                        ],
                        "p2": [
                          126,
                          140
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "SL"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          126,
                          140
                        ],
                        "p2": [
                          236,
                          86
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "LP"
                      },
                      {
                        "type": "point",
                        "coords": [
                          24,
                          86
                        ],
                        "id": "S",
                        "role": "f",
                        "name": "S"
                      },
                      {
                        "type": "point",
                        "coords": [
                          126,
                          140
                        ],
                        "id": "L",
                        "role": "f",
                        "name": "L"
                      },
                      {
                        "type": "point",
                        "coords": [
                          236,
                          86
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          24,
                          68
                        ],
                        "text": "S",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "S"
                      },
                      {
                        "type": "label",
                        "coords": [
                          126,
                          156
                        ],
                        "text": "L",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "L"
                      },
                      {
                        "type": "label",
                        "coords": [
                          136,
                          114
                        ],
                        "text": "r₁",
                        "size": 11,
                        "role": "t",
                        "name": "r1"
                      },
                      {
                        "type": "label",
                        "coords": [
                          75,
                          68
                        ],
                        "text": "a",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "a"
                      },
                      {
                        "type": "label",
                        "coords": [
                          180,
                          68
                        ],
                        "text": "b",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "b"
                      },
                      {
                        "type": "label",
                        "coords": [
                          236,
                          68
                        ],
                        "text": "P",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "P"
                      }
                    ]
                  }
                ]
              },
              "phases": [
                {
                  "name": "Half-wave path",
                  "why": "require path difference SL + LP - SP = λ/2 at the rim L of the first circle"
                },
                {
                  "name": "Pythagoras",
                  "why": "express SL and LP using right triangles with height r₁"
                },
                {
                  "name": "Binomial",
                  "why": "expand the square roots for r₁ ≪ a, b and cancel a + b"
                },
                {
                  "name": "Lens-like law",
                  "why": "divide by r₁² / 2 and define focal length f = r₁² / λ"
                }
              ],
              "steps": [
                {
                  "phase": "Half-wave path",
                  "focus": [
                    "SL",
                    "LP",
                    "SP",
                    "L"
                  ],
                  "tex": "SL + LP - SP = \\frac{\\lambda}{2}",
                  "note": "For the first circle (radius \\(r_1\\)) to enclose the first half-period zone, point \\(L\\) must add path \\(\\lambda/2\\) (Eq. 20.18)."
                },
                {
                  "phase": "Pythagoras",
                  "focus": [
                    "SL",
                    "LP",
                    "a",
                    "b",
                    "r1"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "SL = \\sqrt{a^2 + r_1^2},\\,LP = \\sqrt{b^2 + r_1^2},\\,SP = a + b"
                  },
                  "tex": "\\sqrt{a^2 + r_1^2} + \\sqrt{b^2 + r_1^2} - (a + b) = \\frac{\\lambda}{2}",
                  "note": "Substitute the hypotenuse lengths \\(SL\\) and \\(LP\\) and axial distance \\(SP = a + b\\).",
                  "ask": {
                    "q": "In the paraxial limit \\(r_1 \\ll a\\), what approximates \\(\\sqrt{a^2 + r_1^2}\\)?",
                    "options": [
                      "\\(a + r_1^2 / (2a)\\)",
                      "\\(a + r_1\\)",
                      "\\(a + r_1^2 / a\\)",
                      "\\(r_1^2 / (2a)\\)"
                    ],
                    "answer": 0,
                    "why": "Factoring out \\(a\\) and using \\((1 + x)^{1/2} \\approx 1 + x/2\\) gives \\(a[1 + r_1^2/(2a^2)] = a + r_1^2/(2a)\\)."
                  }
                },
                {
                  "phase": "Binomial",
                  "focus": [
                    "a",
                    "b",
                    "r1"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "\\sqrt{a^2+r_1^2} \\approx a\\left(1 + \\frac{r_1^2}{2a^2}\\right)"
                  },
                  "tex": "a\\left[1 + \\frac{r_1^2}{2a^2}\\right] + b\\left[1 + \\frac{r_1^2}{2b^2}\\right] - (a + b) = \\frac{\\lambda}{2}",
                  "note": "Apply the binomial approximation \\((1 + x)^{1/2} \\approx 1 + x/2\\) to both square roots."
                },
                {
                  "focus": [
                    "a",
                    "b",
                    "r1"
                  ],
                  "move": {
                    "type": "simplify"
                  },
                  "tex": "\\frac{r_1^2}{2}\\left(\\frac{1}{a} + \\frac{1}{b}\\right) = \\frac{\\lambda}{2}",
                  "note": "Cancel \\(a + b - (a + b)\\) and factor out \\(r_1^2 / 2\\) (Eq. 20.19).",
                  "ask": {
                    "q": "Which move isolates \\(1/a + 1/b\\) on the left-hand side?",
                    "options": [
                      "Multiply by \\(r_1^2\\)",
                      "Divide both sides by \\(r_1^2 / 2\\)",
                      "Add \\(\\lambda / 2\\) to both sides",
                      "Take the square root"
                    ],
                    "answer": 1,
                    "why": "Dividing both sides by \\(r_1^2 / 2\\) cancels the prefactor and leaves \\(\\lambda / r_1^2\\) on the right."
                  }
                },
                {
                  "phase": "Lens-like law",
                  "focus": [
                    "a",
                    "b",
                    "r1"
                  ],
                  "move": {
                    "type": "divide",
                    "by": "\\frac{r_1^2}{2}"
                  },
                  "tex": "\\frac{1}{a} + \\frac{1}{b} = \\frac{\\lambda}{r_1^2}",
                  "note": "Divide both sides by \\(r_1^2 / 2\\).",
                  "ask": {
                    "q": "Comparing \\(1/a + 1/b = \\lambda/r_1^2\\) with \\(1/a + 1/b = 1/f\\), what is \\(f\\)?",
                    "options": [
                      "\\(\\lambda / r_1^2\\)",
                      "\\(r_1 / \\lambda\\)",
                      "\\(r_1^2 / \\lambda\\)",
                      "\\(2r_1^2 / \\lambda\\)"
                    ],
                    "answer": 2,
                    "why": "Matching \\(1/f = \\lambda / r_1^2\\) defines the primary focal length \\(f = r_1^2 / \\lambda\\) (Eq. 20.20)."
                  }
                },
                {
                  "focus": [
                    "S",
                    "P",
                    "a",
                    "b",
                    "r1"
                  ],
                  "move": {
                    "type": "define",
                    "by": "f = \\frac{r_1^2}{\\lambda}"
                  },
                  "tex": "\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{f}",
                  "note": "Thus a zone plate acts like a converging lens of primary focal length \\(f = r_1^2 / \\lambda\\) (Eq. 20.20).",
                  "ask": {
                    "q": "Because \\(f = r_1^2 / \\lambda\\) depends strongly on \\(\\lambda\\), what aberration does a zone plate show?",
                    "options": [
                      "No aberration at all",
                      "Only coma",
                      "Only distortion",
                      "Strong chromatic aberration"
                    ],
                    "answer": 3,
                    "why": "Since \\(f\\) is inversely proportional to wavelength \\(\\lambda\\), different colors focus at very different distances (§20.3)."
                  }
                }
              ]
            },
            {
              "type": "math",
              "label": "06 · §20.3 Examples 20.1–20.2",
              "title": "Worked example: circular aperture extrema and zone-plate foci",
              "tex": "OP_{\\max} = \\frac{(0.05)^2}{5\\times 10^{-5}} = 50\\text{ cm}, \\quad OP_{\\min} = \\frac{(0.05)^2}{2\\times 5\\times 10^{-5}} = 25\\text{ cm}; \\quad f_1 = \\frac{r_1^2}{\\lambda} = \\frac{0.01}{5\\times 10^{-5}} = 200\\text{ cm}",
              "body": "For a circular hole of radius \\(a = 0.5\\text{ mm}\\) and \\(\\lambda = 5\\times 10^{-5}\\text{ cm}\\), the brightest axial point (1 zone) is at \\(50\\text{ cm}\\) and the darkest point (2 zones) is at \\(25\\text{ cm}\\). A zone plate with \\(r_n = 0.1\\sqrt{n}\\text{ cm}\\) has foci at \\(200, 200/3, 200/5\\text{ cm}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "If a circular aperture exposes only the first Fresnel zone, what is the intensity at \\(P\\)?",
              "options": [
                "\\(4I_0\\)",
                "\\(I_0\\)",
                "\\(I_0 / 4\\)",
                "\\(0\\)"
              ],
              "answer": 0,
              "why": "The first zone gives amplitude \\(u_1 = 2(u_1/2) = 2u_{\\text{unobstructed}}\\), so the intensity is \\(2^2 I_0 = 4I_0\\) (§20.2.1)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "What happens at axial point \\(P\\) when a circular aperture contains the first two half-period zones?",
              "options": [
                "Intensity rises to \\(8I_0\\)",
                "Intensity drops almost to zero",
                "Intensity equals \\(I_0\\)",
                "A rainbow spectrum forms"
              ],
              "answer": 1,
              "why": "The first two zones are \\(\\pi\\) out of phase and have nearly equal amplitudes, so \\(u_1 - u_2 \\approx 0\\) (§20.2.1)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 45,
              "q": "The bright spot always formed on the axis behind an opaque circular disc is the ______ spot.",
              "answer": "Poisson|Poisson's|Arago",
              "why": "If a disc blocks the first \\(p\\) zones, the remaining zones sum to \\(u_{p+1}/2\\), forming the bright Poisson spot (§20.2.2)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "A zone plate has \\(r_1 = 1\\text{ mm}\\) and \\(\\lambda = 500\\text{ nm}\\). Find its primary focal length \\(f\\) in m.",
              "answer": 2,
              "tolerance": 0.01,
              "unit": "m",
              "why": "\\(f = \\frac{r_1^2}{\\lambda} = \\frac{(10^{-3}\\text{ m})^2}{5\\times 10^{-7}\\text{ m}} = 2\\text{ m}\\) (Example 20.2)."
            }
          ]
        },
        {
          "id": "optics-m3-diffraction-straight-edge",
          "title": "Diffraction by a straight edge",
          "icon": "curve",
          "source": "Unit 16 · Ghatak §20.6 (PDF pp. 334–337); syllabus item 16",
          "cards": [
            {
              "type": "intuition",
              "term": "optics-m3-cornus-spiral",
              "title": "Winding secondary wavelets into a double spiral (Cornu's spiral)",
              "meaning": "As we move away from the pole of a wavefront, the extra path grows as u², making the phase turn faster and faster so the phasor chain curls into two tight eyes at C(1/2, 1/2) and C'(-1/2, -1/2).",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"24\" y1=\"90\" x2=\"236\" y2=\"90\" class=\"gk\"/><line x1=\"130\" y1=\"14\" x2=\"130\" y2=\"166\" class=\"gk\"/><path d=\"M 130 90 Q 178 90 188 54 Q 186 24 166 28 Q 152 36 162 52 Q 174 56 172 44\" class=\"lk\"/><path d=\"M 130 90 Q 82 90 72 126 Q 74 156 94 152 Q 108 144 98 128 Q 86 124 88 136\" class=\"lk\"/><line x1=\"74\" y1=\"136\" x2=\"168\" y2=\"46\" class=\"ik\"/><circle cx=\"168\" cy=\"46\" r=\"3.5\" class=\"f\"/><circle cx=\"92\" cy=\"134\" r=\"3.5\" class=\"f\"/><circle cx=\"74\" cy=\"136\" r=\"3.5\" class=\"f\"/><circle cx=\"130\" cy=\"90\" r=\"3\" class=\"f\"/><text x=\"180\" y=\"46\" class=\"t\">C (½, ½)</text><text x=\"102\" y=\"142\" class=\"t\">C' (-½, -½)</text><text x=\"46\" y=\"138\" class=\"t\">P₁</text><text x=\"116\" y=\"76\" class=\"t\">PC</text><text x=\"216\" y=\"104\" class=\"t\">C(τ)</text><text x=\"136\" y=\"24\" class=\"t\">S(τ)</text></svg>",
              "picture": "Look at Cornu's spiral: the chord PC from point P(v₀) on the curve to the upper eye C(1/2, 1/2) gives the diffracted wave amplitude.",
              "example": "For the whole unobstructed wavefront (from C' at -∞ to C at +∞), the chord C'C has components (1, 1) and length √2.",
              "bridge": "The coordinates of any point τ on Cornu's spiral are the Fresnel integrals C(τ) = ∫₀^τ cos(πu²/2) du and S(τ) = ∫₀^τ sin(πu²/2) du."
            },
            {
              "type": "info",
              "label": "01 · §20.6 Definition",
              "title": "What are the Fresnel integrals and Cornu's spiral?",
              "defines": [
                "optics-m3-fresnel-integrals",
                "optics-m3-cornus-spiral"
              ],
              "body": "Fresnel integrals C(τ) = ∫₀^τ cos(πu²/2)du and S(τ) = ∫₀^τ sin(πu²/2)du are odd functions with C(0)=S(0)=0 and C(∞)=S(∞)=1/2. Their parametric plot is Cornu's spiral, whose chord length gives wave amplitude.",
              "tex": "C(\\tau) = \\int_0^\\tau\\cos\\left(\\frac{\\pi u^2}{2}\\right)du, \\quad S(\\tau) = \\int_0^\\tau\\sin\\left(\\frac{\\pi u^2}{2}\\right)du, \\quad C(\\infty) = S(\\infty) = \\frac{1}{2}",
              "examples": [
                "C(-τ) = -C(τ), S(-τ) = -S(τ)",
                "Eyes at (±1/2, ±1/2)",
                "Chord PQ = amplitude"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "cornu",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          20,
                          90
                        ],
                        "p2": [
                          240,
                          90
                        ],
                        "role": "gk",
                        "width": 1.6,
                        "name": "Caxis"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          130,
                          14
                        ],
                        "p2": [
                          130,
                          166
                        ],
                        "role": "gk",
                        "width": 1.6,
                        "name": "Saxis"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            90.0,
                            50.0
                          ],
                          [
                            93.5,
                            40.1
                          ],
                          [
                            72.8,
                            54.1
                          ],
                          [
                            86.6,
                            32.9
                          ],
                          [
                            100.8,
                            38.9
                          ],
                          [
                            103.3,
                            53.9
                          ],
                          [
                            90.9,
                            62.5
                          ],
                          [
                            79.0,
                            54.3
                          ],
                          [
                            85.6,
                            40.4
                          ],
                          [
                            99.0,
                            46.0
                          ],
                          [
                            94.9,
                            58.7
                          ],
                          [
                            81.5,
                            50.3
                          ],
                          [
                            92.6,
                            42.5
                          ],
                          [
                            99.0,
                            54.0
                          ],
                          [
                            84.2,
                            55.7
                          ],
                          [
                            86.6,
                            40.9
                          ],
                          [
                            100.8,
                            54.0
                          ],
                          [
                            90.9,
                            62.5
                          ],
                          [
                            72.8,
                            40.1
                          ],
                          [
                            67.6,
                            54.9
                          ],
                          [
                            72.2,
                            70.1
                          ],
                          [
                            83.5,
                            81.2
                          ],
                          [
                            98.2,
                            87.3
                          ],
                          [
                            114.0,
                            89.7
                          ],
                          [
                            130.0,
                            90.0
                          ],
                          [
                            146.0,
                            90.3
                          ],
                          [
                            161.8,
                            92.7
                          ],
                          [
                            176.5,
                            98.8
                          ],
                          [
                            187.8,
                            109.9
                          ],
                          [
                            192.4,
                            125.1
                          ],
                          [
                            187.2,
                            139.9
                          ],
                          [
                            173.4,
                            147.1
                          ],
                          [
                            159.2,
                            141.1
                          ],
                          [
                            156.7,
                            126.1
                          ],
                          [
                            169.1,
                            117.5
                          ],
                          [
                            181.0,
                            125.7
                          ],
                          [
                            174.4,
                            139.6
                          ],
                          [
                            161.0,
                            134.0
                          ],
                          [
                            165.1,
                            121.3
                          ],
                          [
                            178.5,
                            129.7
                          ],
                          [
                            167.4,
                            137.5
                          ],
                          [
                            165.1,
                            124.4
                          ],
                          [
                            177.0,
                            129.4
                          ],
                          [
                            170.0,
                            130.0
                          ]
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "spiral"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          72.8,
                          40.1
                        ],
                        "p2": [
                          170,
                          130
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "P1C"
                      },
                      {
                        "type": "point",
                        "coords": [
                          170,
                          130
                        ],
                        "id": "C",
                        "role": "f",
                        "name": "C"
                      },
                      {
                        "type": "point",
                        "coords": [
                          90,
                          50
                        ],
                        "id": "Cp",
                        "role": "f",
                        "name": "Cp"
                      },
                      {
                        "type": "point",
                        "coords": [
                          72.8,
                          40.1
                        ],
                        "id": "P1",
                        "role": "f",
                        "name": "P1C"
                      },
                      {
                        "type": "label",
                        "coords": [
                          186,
                          130
                        ],
                        "text": "C (½, ½)",
                        "size": 10,
                        "role": "t",
                        "name": "C"
                      },
                      {
                        "type": "label",
                        "coords": [
                          54,
                          36
                        ],
                        "text": "P₁ (v₀=-1.22)",
                        "size": 10,
                        "role": "t",
                        "name": "P1C"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          78
                        ],
                        "text": "C(τ)",
                        "size": 11,
                        "role": "t",
                        "name": "Caxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          144,
                          160
                        ],
                        "text": "S(τ)",
                        "size": 11,
                        "role": "t",
                        "name": "Saxis"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "intuition",
              "term": "optics-m3-straight-edge-diffraction",
              "title": "Why light leaks into the shadow and ripples outside a sharp edge",
              "meaning": "At the exact shadow boundary (y = 0), a straight edge blocks the lower half of the wavefront, leaving half the amplitude (u₀/2) and one-fourth the intensity (I₀/4)!",
              "art": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"64\" y=\"96\" width=\"12\" height=\"68\" class=\"s ok\"/><line x1=\"64\" y1=\"96\" x2=\"214\" y2=\"96\" class=\"gk\"/><line x1=\"214\" y1=\"16\" x2=\"214\" y2=\"164\" class=\"ik\"/><line x1=\"20\" y1=\"48\" x2=\"64\" y2=\"48\" class=\"lk\"/><line x1=\"20\" y1=\"82\" x2=\"64\" y2=\"82\" class=\"lk\"/><line x1=\"20\" y1=\"126\" x2=\"60\" y2=\"126\" class=\"lk\"/><line x1=\"70\" y1=\"42\" x2=\"214\" y2=\"56\" class=\"lk\"/><circle cx=\"70\" cy=\"42\" r=\"3.5\" class=\"f\"/><circle cx=\"214\" cy=\"56\" r=\"3.5\" class=\"f\"/><circle cx=\"214\" cy=\"96\" r=\"3.5\" class=\"f\"/><circle cx=\"214\" cy=\"132\" r=\"3.5\" class=\"f\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" class=\"t\">M(ξ, η)</text><text x=\"142\" y=\"40\" text-anchor=\"middle\" class=\"t\">r</text><text x=\"142\" y=\"158\" text-anchor=\"middle\" class=\"t\">d</text><text x=\"224\" y=\"60\" class=\"t\">P(0, y) [Lit]</text><text x=\"224\" y=\"100\" class=\"t\">O (I = I₀/4)</text><text x=\"224\" y=\"136\" class=\"t\">Q [Shadow]</text></svg>",
              "picture": "Look at the straight edge blocking η < 0: at O (y = 0) intensity is I₀/4, below O it fades to zero, and above O it forms bright and dark fringes.",
              "example": "As we move into the illuminated region (y > 0, v₀ < 0), the chord PC on Cornu's spiral stretches to 1.66 at v₀ ≈ -1.22, giving first peak I ≈ 1.37 I₀.",
              "bridge": "Integrating over the open upper half-plane (ξ from -∞ to +∞, η from 0 to +∞) gives I(P) = ½ I₀{[½ - C(v₀)]² + [½ - S(v₀)]²}."
            },
            {
              "type": "info",
              "label": "02 · §20.6 Definition",
              "title": "What is the straight-edge Fresnel diffraction pattern?",
              "defines": [
                "optics-m3-straight-edge-diffraction"
              ],
              "body": "For a plane wave incident on a straight edge at distance d from the screen, intensity is I₀/4 on the shadow edge (y = 0), decays monotonically to 0 in the shadow (y < 0), and oscillates (peaking at 1.37 I₀) for y > 0.",
              "tex": "I(P) = \\frac{1}{2}I_0\\left\\{\\left[\\frac{1}{2} - C(v_0)\\right]^2 + \\left[\\frac{1}{2} - S(v_0)\\right]^2\\right\\}, \\quad v_0 = -\\sqrt{\\frac{2}{\\lambda d}}\\,y",
              "examples": [
                "At y = 0: I = I₀ / 4",
                "1st max: v₀ ≈ -1.22 (1.37 I₀)",
                "1st min: v₀ ≈ -1.87 (0.778 I₀)"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "edgesetup",
                    "objects": [
                      {
                        "type": "polygon",
                        "points": [
                          [
                            64,
                            84
                          ],
                          [
                            76,
                            84
                          ],
                          [
                            76,
                            16
                          ],
                          [
                            64,
                            16
                          ]
                        ],
                        "role": "s ok",
                        "name": "edge"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          84
                        ],
                        "p2": [
                          214,
                          84
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "LLp"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          214,
                          164
                        ],
                        "p2": [
                          214,
                          16
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "screen"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          20,
                          132
                        ],
                        "p2": [
                          64,
                          132
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "inc1"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          20,
                          52
                        ],
                        "p2": [
                          58,
                          52
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "inc2"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          70,
                          138
                        ],
                        "p2": [
                          214,
                          124
                        ],
                        "role": "lk",
                        "width": 2,
                        "name": "MP"
                      },
                      {
                        "type": "point",
                        "coords": [
                          70,
                          138
                        ],
                        "id": "M",
                        "role": "f",
                        "name": "MP"
                      },
                      {
                        "type": "point",
                        "coords": [
                          214,
                          124
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "point",
                        "coords": [
                          214,
                          84
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "O"
                      },
                      {
                        "type": "point",
                        "coords": [
                          214,
                          48
                        ],
                        "id": "Q",
                        "role": "f",
                        "name": "Q"
                      },
                      {
                        "type": "label",
                        "coords": [
                          70,
                          152
                        ],
                        "text": "M(ξ, η)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "MP"
                      },
                      {
                        "type": "label",
                        "coords": [
                          142,
                          142
                        ],
                        "text": "r",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "MP"
                      },
                      {
                        "type": "label",
                        "coords": [
                          142,
                          24
                        ],
                        "text": "d",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "LLp"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          124
                        ],
                        "text": "P(0, y)",
                        "size": 10,
                        "role": "t",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          84
                        ],
                        "text": "O (I₀/4)",
                        "size": 10,
                        "role": "t",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          48
                        ],
                        "text": "Q",
                        "size": 10,
                        "role": "t",
                        "name": "Q"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "label": "03 · §20.6 Derivation",
              "title": "Straight-edge Fresnel diffraction field and intensity",
              "legend": "Aperture point \\(M(\\xi, \\eta)\\) with \\(\\eta \\ge 0\\), screen point \\(P(0, y)\\) at distance \\(d\\), and lower Fresnel limit \\(v_0 = -\\sqrt{\\frac{2}{\\lambda d}}\\,y\\) (Eqs. 20.49–20.59, Fig. 20.12).",
              "setup": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "Paraxial distance",
                    "objects": [
                      {
                        "type": "polygon",
                        "points": [
                          [
                            64,
                            84
                          ],
                          [
                            76,
                            84
                          ],
                          [
                            76,
                            18
                          ],
                          [
                            64,
                            18
                          ]
                        ],
                        "role": "s ok",
                        "name": "edge"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          64,
                          84
                        ],
                        "p2": [
                          214,
                          84
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.5,
                        "name": "O"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          214,
                          162
                        ],
                        "p2": [
                          214,
                          18
                        ],
                        "role": "ik",
                        "width": 2.2,
                        "name": "P"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          70,
                          138
                        ],
                        "p2": [
                          214,
                          124
                        ],
                        "role": "lk",
                        "width": 2.2,
                        "name": "r"
                      },
                      {
                        "type": "point",
                        "coords": [
                          70,
                          138
                        ],
                        "id": "M",
                        "role": "f",
                        "name": "M"
                      },
                      {
                        "type": "point",
                        "coords": [
                          214,
                          124
                        ],
                        "id": "P",
                        "role": "f",
                        "name": "P"
                      },
                      {
                        "type": "point",
                        "coords": [
                          214,
                          84
                        ],
                        "id": "O",
                        "role": "f",
                        "name": "O"
                      },
                      {
                        "type": "label",
                        "coords": [
                          70,
                          152
                        ],
                        "text": "M(ξ, η)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "M"
                      },
                      {
                        "type": "label",
                        "coords": [
                          142,
                          142
                        ],
                        "text": "r",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "r"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          124
                        ],
                        "text": "P(0, y)",
                        "size": 10,
                        "role": "t",
                        "name": "P"
                      },
                      {
                        "type": "label",
                        "coords": [
                          224,
                          84
                        ],
                        "text": "O (y=0)",
                        "size": 10,
                        "role": "t",
                        "name": "O"
                      }
                    ]
                  },
                  {
                    "step": 1,
                    "name": "Fresnel variables",
                    "objects": [
                      {
                        "type": "label",
                        "coords": [
                          142,
                          24
                        ],
                        "text": "v₀ = -√(2/λd) y",
                        "size": 11,
                        "align": "center",
                        "role": "t",
                        "name": "v0"
                      }
                    ]
                  }
                ]
              },
              "phases": [
                {
                  "name": "Paraxial distance",
                  "why": "expand r = MP for d ≫ ξ, η - y"
                },
                {
                  "name": "Fresnel variables",
                  "why": "define dimensionless variables u, v and lower limit v₀ at η = 0"
                },
                {
                  "name": "Evaluate integrals",
                  "why": "express the u and v integrals using C(∞)=S(∞)=1/2 and C(v₀), S(v₀)"
                },
                {
                  "name": "Intensity & shadow edge",
                  "why": "take the squared modulus for I(P) and evaluate at y = 0"
                }
              ],
              "steps": [
                {
                  "phase": "Paraxial distance",
                  "focus": [
                    "M",
                    "P",
                    "r"
                  ],
                  "tex": "r = d + \\frac{\\xi^2 + (\\eta - y)^2}{2d}",
                  "note": "Expand \\(r = MP = [\\xi^2 + (\\eta - y)^2 + d^2]^{1/2}\\) for \\(d \\gg \\xi, \\eta - y\\) (Eq. 20.49)."
                },
                {
                  "phase": "Fresnel variables",
                  "focus": [
                    "edge",
                    "v0",
                    "P"
                  ],
                  "move": {
                    "type": "define",
                    "by": "u = \\sqrt{\\frac{2}{\\lambda d}}\\,\\xi,\\,v = \\sqrt{\\frac{2}{\\lambda d}}(\\eta - y)"
                  },
                  "tex": "v_0 = -\\sqrt{\\frac{2}{\\lambda d}}\\,y",
                  "note": "At the straight edge \\(\\eta = 0\\), the lower limit of \\(v\\) is \\(v_0 = -\\sqrt{2/(\\lambda d)}\\,y\\) (Eqs. 20.51, 20.53).",
                  "ask": {
                    "q": "When observation point \\(P\\) lies on the shadow edge \\(y = 0\\), what is \\(v_0\\)?",
                    "options": [
                      "\\(0\\)",
                      "\\(1/2\\)",
                      "\\(-\\infty\\)",
                      "\\(+\\infty\\)"
                    ],
                    "answer": 0,
                    "why": "Substituting \\(y = 0\\) into \\(v_0 = -\\sqrt{2/(\\lambda d)}\\,y\\) gives \\(v_0 = 0\\) (Eq. 20.53)."
                  }
                },
                {
                  "focus": [
                    "M",
                    "P",
                    "v0"
                  ],
                  "move": {
                    "type": "rearrange",
                    "label": "Write the Fresnel diffraction integral over u and v (Eq. 20.52)"
                  },
                  "tex": "u(P) = -\\frac{i}{2}u_0\\int_{-\\infty}^{+\\infty}\\exp\\left(\\frac{i\\pi u^2}{2}\\right)du\\int_{v_0}^{\\infty}\\exp\\left(\\frac{i\\pi v^2}{2}\\right)dv",
                  "note": "Here \\(u_0 = Ae^{ikd}\\) is the unobstructed field at \\(P\\) (Eq. 20.52)."
                },
                {
                  "phase": "Evaluate integrals",
                  "focus": [
                    "M",
                    "P"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "C(\\infty) = S(\\infty) = \\frac{1}{2}"
                  },
                  "tex": "\\int_{-\\infty}^{+\\infty}\\exp\\left(\\frac{i\\pi u^2}{2}\\right)du = 1 + i",
                  "note": "Since \\(2[C(\\infty) + iS(\\infty)] = 2(1/2 + i/2) = 1 + i\\), the \\(u\\)-integral equals \\(1 + i\\) (Eq. 20.54).",
                  "ask": {
                    "q": "Splitting \\(\\int_{v_0}^{\\infty}\\) as \\(\\int_0^{\\infty} - \\int_0^{v_0}\\), what is its real part?",
                    "options": [
                      "\\(1/2 + C(v_0)\\)",
                      "\\(1/2 - C(v_0)\\)",
                      "\\(C(v_0)\\)",
                      "\\(1 - 2C(v_0)\\)"
                    ],
                    "answer": 1,
                    "why": "\\(\\int_0^\\infty\\cos(\\pi v^2/2)dv - \\int_0^{v_0}\\cos(\\pi v^2/2)dv = C(\\infty) - C(v_0) = 1/2 - C(v_0)\\) (Eq. 20.55)."
                  }
                },
                {
                  "focus": [
                    "v0",
                    "P"
                  ],
                  "move": {
                    "type": "substitute",
                    "by": "\\int_{v_0}^{\\infty}\\exp\\left(\\frac{i\\pi v^2}{2}\\right)dv = \\left[\\frac{1}{2}-C(v_0)\\right] + i\\left[\\frac{1}{2}-S(v_0)\\right]"
                  },
                  "tex": "u(P) = \\frac{1 - i}{2}u_0\\left\\{\\left[\\frac{1}{2} - C(v_0)\\right] + i\\left[\\frac{1}{2} - S(v_0)\\right]\\right\\}",
                  "note": "Substitute both integrals and use \\(-\\frac{i}{2}(1 + i) = \\frac{1 - i}{2}\\) (Eq. 20.56).",
                  "ask": {
                    "q": "What is the squared modulus \\(|(1 - i)/2|^2\\) of the prefactor in \\(u(P)\\)?",
                    "options": [
                      "\\(1\\)",
                      "\\(1 / 4\\)",
                      "\\(1 / 2\\)",
                      "\\(2\\)"
                    ],
                    "answer": 2,
                    "why": "\\(|(1 - i)/2|^2 = (1^2 + (-1)^2) / 4 = 2 / 4 = 1 / 2\\)."
                  }
                },
                {
                  "phase": "Intensity & shadow edge",
                  "focus": [
                    "P",
                    "v0"
                  ],
                  "move": {
                    "type": "power",
                    "by": "2",
                    "label": "Take the squared modulus |u(P)|² to obtain intensity I(P) (Eq. 20.58)"
                  },
                  "tex": "I(P) = \\frac{1}{2}I_0\\left\\{\\left[\\frac{1}{2} - C(v_0)\\right]^2 + \\left[\\frac{1}{2} - S(v_0)\\right]^2\\right\\}",
                  "note": "This gives the intensity at any point \\(P\\) in terms of the chord length \\(PC\\) on Cornu's spiral (Eq. 20.58).",
                  "ask": {
                    "q": "At the shadow boundary \\(y = 0\\) (\\(v_0 = 0, C(0) = S(0) = 0\\)), what is \\(I(P)\\)?",
                    "options": [
                      "\\(I_0\\)",
                      "\\(I_0 / 2\\)",
                      "\\(0\\)",
                      "\\(I_0 / 4\\)"
                    ],
                    "answer": 3,
                    "why": "At \\(v_0 = 0\\), \\(I(P) = \\frac{1}{2}I_0(1/4 + 1/4) = \\frac{1}{4}I_0\\) (Eq. 20.59)."
                  }
                },
                {
                  "focus": [
                    "O",
                    "edge"
                  ],
                  "move": {
                    "type": "evaluate",
                    "by": "v_0 = 0,\\,C(0) = S(0) = 0"
                  },
                  "tex": "I(0) = \\frac{1}{4}I_0",
                  "note": "Right on the edge of the geometrical shadow, the intensity is one-fourth of the unobstructed intensity \\(I_0\\) (Eq. 20.59)."
                }
              ]
            },
            {
              "type": "info",
              "label": "04 · §20.6 Intensity graph",
              "title": "Universal straight-edge intensity curve I/I₀ (Fig. 20.13)",
              "body": "Plotted against √(2/λd) y = -v₀, intensity is 0.25 I₀ at y = 0, drops smoothly to 0 in the shadow (y < 0), and oscillates in the lit region with maxima 1.37 I₀ (-v₀ ≈ 1.22), 1.20 I₀ (2.34), and first minimum 0.778 I₀ (1.87).",
              "examples": [
                "Shadow edge (y=0): 0.25 I₀",
                "1st max (-v₀=1.22): 1.37 I₀",
                "1st min (-v₀=1.87): 0.778 I₀"
              ],
              "art": {
                "view": {
                  "bbox": [
                    0,
                    180,
                    260,
                    0
                  ],
                  "axis": false,
                  "grid": false
                },
                "steps": [
                  {
                    "step": 0,
                    "name": "edgegraph",
                    "objects": [
                      {
                        "type": "arrow",
                        "p1": [
                          16,
                          32
                        ],
                        "p2": [
                          246,
                          32
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "xaxis"
                      },
                      {
                        "type": "arrow",
                        "p1": [
                          78,
                          18
                        ],
                        "p2": [
                          78,
                          164
                        ],
                        "role": "lk",
                        "width": 1.8,
                        "name": "yaxis"
                      },
                      {
                        "type": "segment",
                        "p1": [
                          78,
                          112
                        ],
                        "p2": [
                          240,
                          112
                        ],
                        "role": "gk",
                        "dash": 2,
                        "width": 1.4,
                        "name": "I0line"
                      },
                      {
                        "type": "polyline",
                        "points": [
                          [
                            24.0,
                            33.0
                          ],
                          [
                            26.2,
                            33.1
                          ],
                          [
                            28.3,
                            33.2
                          ],
                          [
                            30.5,
                            33.4
                          ],
                          [
                            32.6,
                            33.5
                          ],
                          [
                            34.8,
                            33.7
                          ],
                          [
                            37.0,
                            33.9
                          ],
                          [
                            39.1,
                            34.2
                          ],
                          [
                            41.3,
                            34.5
                          ],
                          [
                            43.4,
                            34.8
                          ],
                          [
                            45.6,
                            35.2
                          ],
                          [
                            47.8,
                            35.6
                          ],
                          [
                            49.9,
                            36.1
                          ],
                          [
                            52.1,
                            36.7
                          ],
                          [
                            54.2,
                            37.4
                          ],
                          [
                            56.4,
                            38.1
                          ],
                          [
                            58.6,
                            39.0
                          ],
                          [
                            60.7,
                            40.0
                          ],
                          [
                            62.9,
                            41.1
                          ],
                          [
                            65.0,
                            42.4
                          ],
                          [
                            67.2,
                            43.8
                          ],
                          [
                            69.4,
                            45.1
                          ],
                          [
                            71.5,
                            46.6
                          ],
                          [
                            73.7,
                            48.3
                          ],
                          [
                            75.8,
                            50.1
                          ],
                          [
                            78.0,
                            52.0
                          ],
                          [
                            80.2,
                            55.2
                          ],
                          [
                            82.3,
                            59.1
                          ],
                          [
                            84.5,
                            63.8
                          ],
                          [
                            86.6,
                            69.2
                          ],
                          [
                            88.8,
                            75.4
                          ],
                          [
                            91.0,
                            82.4
                          ],
                          [
                            93.1,
                            90.0
                          ],
                          [
                            95.3,
                            98.0
                          ],
                          [
                            97.4,
                            106.3
                          ],
                          [
                            99.6,
                            114.6
                          ],
                          [
                            101.8,
                            122.5
                          ],
                          [
                            103.9,
                            129.6
                          ],
                          [
                            106.1,
                            135.4
                          ],
                          [
                            108.2,
                            139.5
                          ],
                          [
                            110.4,
                            141.5
                          ],
                          [
                            112.6,
                            141.1
                          ],
                          [
                            114.7,
                            138.2
                          ],
                          [
                            116.9,
                            132.9
                          ],
                          [
                            119.0,
                            125.6
                          ],
                          [
                            121.2,
                            117.1
                          ],
                          [
                            123.4,
                            108.4
                          ],
                          [
                            125.5,
                            100.7
                          ],
                          [
                            127.7,
                            95.5
                          ],
                          [
                            129.8,
                            94.2
                          ],
                          [
                            132.0,
                            97.0
                          ],
                          [
                            134.2,
                            103.6
                          ],
                          [
                            136.3,
                            112.6
                          ],
                          [
                            138.5,
                            121.4
                          ],
                          [
                            140.6,
                            127.1
                          ],
                          [
                            142.8,
                            127.6
                          ],
                          [
                            145.0,
                            122.4
                          ],
                          [
                            147.1,
                            113.4
                          ],
                          [
                            149.3,
                            104.3
                          ],
                          [
                            151.4,
                            99.4
                          ],
                          [
                            153.6,
                            101.4
                          ],
                          [
                            155.8,
                            108.9
                          ],
                          [
                            157.9,
                            118.1
                          ],
                          [
                            160.1,
                            123.8
                          ],
                          [
                            162.2,
                            122.6
                          ],
                          [
                            164.4,
                            115.2
                          ],
                          [
                            166.6,
                            106.1
                          ],
                          [
                            168.7,
                            101.8
                          ],
                          [
                            170.9,
                            105.2
                          ],
                          [
                            173.0,
                            113.8
                          ],
                          [
                            175.2,
                            121.2
                          ],
                          [
                            177.4,
                            121.3
                          ],
                          [
                            179.5,
                            113.8
                          ],
                          [
                            181.7,
                            105.0
                          ],
                          [
                            183.8,
                            103.5
                          ],
                          [
                            186.0,
                            110.4
                          ],
                          [
                            188.2,
                            118.9
                          ],
                          [
                            190.3,
                            120.4
                          ],
                          [
                            192.5,
                            112.9
                          ],
                          [
                            194.6,
                            105.2
                          ],
                          [
                            196.8,
                            105.9
                          ],
                          [
                            199.0,
                            114.2
                          ],
                          [
                            201.1,
                            119.5
                          ],
                          [
                            203.3,
                            115.6
                          ],
                          [
                            205.4,
                            107.1
                          ],
                          [
                            207.6,
                            105.6
                          ],
                          [
                            209.8,
                            113.2
                          ],
                          [
                            211.9,
                            118.6
                          ],
                          [
                            214.1,
                            114.8
                          ],
                          [
                            216.2,
                            106.9
                          ],
                          [
                            218.4,
                            107.2
                          ],
                          [
                            220.6,
                            115.1
                          ],
                          [
                            222.7,
                            117.8
                          ],
                          [
                            224.9,
                            111.7
                          ],
                          [
                            227.0,
                            106.6
                          ],
                          [
                            229.2,
                            111.1
                          ],
                          [
                            231.4,
                            117.1
                          ],
                          [
                            233.5,
                            114.4
                          ],
                          [
                            235.7,
                            107.6
                          ],
                          [
                            237.8,
                            109.7
                          ],
                          [
                            240.0,
                            116.2
                          ]
                        ],
                        "role": "lk",
                        "width": 2.4,
                        "name": "Icurve"
                      },
                      {
                        "type": "point",
                        "coords": [
                          78,
                          52
                        ],
                        "id": "E0",
                        "role": "f",
                        "name": "yaxis"
                      },
                      {
                        "type": "point",
                        "coords": [
                          110.9,
                          141.6
                        ],
                        "id": "M1",
                        "role": "f",
                        "name": "Icurve"
                      },
                      {
                        "type": "label",
                        "coords": [
                          66,
                          154
                        ],
                        "text": "I/I₀",
                        "size": 11,
                        "role": "t",
                        "name": "yaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          62,
                          112
                        ],
                        "text": "1.0",
                        "size": 10,
                        "role": "t",
                        "name": "I0line"
                      },
                      {
                        "type": "label",
                        "coords": [
                          56,
                          56
                        ],
                        "text": "0.25",
                        "size": 10,
                        "role": "t",
                        "name": "yaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          112,
                          154
                        ],
                        "text": "1.37 I₀ (-v₀=1.22)",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "Icurve"
                      },
                      {
                        "type": "label",
                        "coords": [
                          78,
                          16
                        ],
                        "text": "0",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          132,
                          16
                        ],
                        "text": "2",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          186,
                          16
                        ],
                        "text": "4",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      },
                      {
                        "type": "label",
                        "coords": [
                          234,
                          16
                        ],
                        "text": "√(2/λd) y",
                        "size": 10,
                        "align": "center",
                        "role": "t",
                        "name": "xaxis"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "05 · §20.6 Numerical example",
              "title": "Worked example: positions of straight-edge maxima and minima",
              "tex": "y = -\\sqrt{\\frac{\\lambda d}{2}}\\,v_0 = -0.06\\,v_0\\text{ cm} \\implies y_{\\max} \\approx 0.732,\\;1.404,\\;1.848\\text{ mm}",
              "body": "For \\(\\lambda = 6\\times 10^{-5}\\text{ cm}\\) and \\(d = 120\\text{ cm}\\), \\(\\sqrt{\\lambda d / 2} = 0.06\\text{ cm} = 0.6\\text{ mm}\\). The first three maxima (\\(v_0 = -1.22, -2.34, -3.08\\)) occur at \\(y \\approx 0.732, 1.404, 1.848\\text{ mm}\\), and the first three minima (\\(v_0 = -1.87, -2.74, -3.39\\)) at \\(1.122, 1.644, 2.034\\text{ mm}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "What is the intensity right on the edge of the geometrical shadow (\\(y = 0\\)) of a straight edge?",
              "options": [
                "\\(I_0 / 4\\)",
                "\\(I_0 / 2\\)",
                "\\(I_0\\)",
                "\\(0\\)"
              ],
              "answer": 0,
              "why": "At \\(y = 0\\), \\(v_0 = 0\\) and \\(C(0) = S(0) = 0\\), giving \\(I = \\frac{1}{2}I_0(1/4 + 1/4) = I_0 / 4\\) (Eq. 20.59)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 45,
              "q": "How does the intensity vary as we move deeper into the geometrical shadow of a straight edge?",
              "options": [
                "Oscillates between \\(0\\) and \\(4I_0\\)",
                "Decreases monotonically to zero",
                "Remains constant at \\(I_0 / 4\\)",
                "Rises to \\(1.37\\,I_0\\)"
              ],
              "answer": 1,
              "why": "As \\(v_0 > 0\\) increases into the shadow, point \\(Q\\) spirals smoothly toward \\(C(1/2, 1/2)\\) and chord \\(QC\\) decreases monotonically to zero (§20.6)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "What is the limiting value of the Fresnel integral \\(C(\\infty)\\) (or \\(S(\\infty)\\)) as a decimal?",
              "answer": 0.5,
              "tolerance": 0.01,
              "unit": "",
              "why": "Both Fresnel integrals converge to \\(C(\\infty) = S(\\infty) = 1/2 = 0.5\\) (Eq. 20.47)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "In straight-edge diffraction with \\(\\sqrt{\\lambda d / 2} = 1\\text{ mm}\\), find the first maximum position \\(y_1\\) (\\(v_0 = -1.22\\)) in mm.",
              "answer": 1.22,
              "tolerance": 0.02,
              "unit": "mm",
              "why": "From \\(y = -\\sqrt{\\lambda d / 2}\\,v_0\\), \\(y_1 = -(1\\text{ mm})(-1.22) = 1.22\\text{ mm}\\)."
            }
          ]
        }
      ]
    }
  ]
}
```

---

### 2. `update_module1.py`

Run from `study-match/`:

```bash
python3 update_module1.py data/data.json data/data-module3.json data/data-module1-updates.json
```

```python
#!/usr/bin/env python3
"""
Merge a new Optics module (e.g. Module 2 or Module 3) into Study Match data.json
and apply optional card updates to existing modules.

Usage (from study-match/):
  python3 update_module1.py data/data.json data/data-module3.json data/data-module1-updates.json
"""
import json
import os
import re
import shutil
import subprocess
import sys


def load_json(path):
    if not os.path.exists(path):
        sys.exit('Error: file not found: %s' % path)
    try:
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError as e:
        sys.exit('Error: invalid JSON in %s (line %d, col %d): %s' % (path, e.lineno, e.colno, e.msg))


def sheet_card_ids(sheet):
    """Compute runtime card IDs using the exact rule in 03-render.js."""
    sid = sheet.get('id', '')
    out = []
    legacy_index = 0
    for c in sheet.get('cards', []):
        if c.get('uid'):
            cid = '%s-extra-%s' % (sid, c['uid'])
        elif c.get('type') == 'intuition':
            cid = '%s-intro-%s' % (sid, c.get('term', ''))
        else:
            cid = '%s-%d' % (sid, legacy_index)
            legacy_index += 1
        out.append(cid)
    return out


def collect_sheets(sections):
    sheets = []
    for sec in sections or []:
        for sh in sec.get('sheets', []):
            sheets.append(sh)
    return sheets


def detect_module_prefix(mod_data, mod_path):
    """Detect the module prefix (e.g. 'optics-m3-') from the new data file and verify consistency."""
    candidates = []
    for g in mod_data.get('glossary', []):
        if isinstance(g, dict) and g.get('id'):
            candidates.append(str(g['id']))
    for sh in collect_sheets(mod_data.get('sections', [])):
        if isinstance(sh, dict) and sh.get('id'):
            candidates.append(str(sh['id']))
    if not candidates:
        sys.exit('Error: %s contains no glossary or sheet IDs.' % mod_path)

    m = re.match(r'^(optics-m(\d+)-)', candidates[0])
    if not m:
        sys.exit('Error: ID %r in %s does not start with "optics-m<N>-".' % (candidates[0], mod_path))
    prefix, mod_num = m.group(1), m.group(2)

    m_file = re.search(r'module(\d+)', os.path.basename(mod_path), re.I)
    if m_file and m_file.group(1) != mod_num:
        sys.exit('Error: filename %s indicates Module %s, but IDs start with %r.'
                 % (mod_path, m_file.group(1), prefix))
    return prefix, mod_num


def main():
    args = sys.argv[1:]
    if len(args) == 0:
        data_path = os.path.join('data', 'data.json')
        mod_path = os.path.join('data', 'data-module3.json')
        if not os.path.exists(mod_path) and os.path.exists('data-module3.json'):
            mod_path = 'data-module3.json'
        upd_path = os.path.join('data', 'data-module1-updates.json')
        if not os.path.exists(upd_path) and os.path.exists('data-module1-updates.json'):
            upd_path = 'data-module1-updates.json'
    elif len(args) == 3:
        data_path, mod_path, upd_path = args
    else:
        sys.exit('Usage: python3 update_module1.py data/data.json data/data-module3.json data/data-module1-updates.json')

    data = load_json(data_path)
    new_mod = load_json(mod_path)
    updates = load_json(upd_path)

    if not isinstance(data, dict):
        sys.exit('Error: %s must be a JSON object.' % data_path)
    if not isinstance(new_mod, dict):
        sys.exit('Error: %s must be a JSON object.' % mod_path)
    if not isinstance(updates, list):
        sys.exit('Error: %s must be a JSON list of card update objects.' % upd_path)

    prefix, mod_num = detect_module_prefix(new_mod, mod_path)

    # 1. Keep a backup copy of data/data.json first; refuse if backup for this module already exists
    backup_path = os.path.join(os.path.dirname(os.path.abspath(data_path)),
                               'data.before-module%s.json' % mod_num)
    if os.path.exists(backup_path):
        sys.exit('Error: backup already exists: %s (refusing to overwrite).' % backup_path)

    # Record existing sheets and card IDs before modifying anything
    existing_sheets = collect_sheets(data.get('sections', []))
    existing_sheet_map = {}
    orig_card_ids = {}
    for sh in existing_sheets:
        sid = sh.get('id')
        if not sid:
            sys.exit('Error: existing sheet missing "id".')
        if sid in existing_sheet_map:
            sys.exit('Error: duplicate existing sheet id "%s".' % sid)
        existing_sheet_map[sid] = sh
        orig_card_ids[sid] = sheet_card_ids(sh)

    # 2. Apply optional card updates and verify card types and IDs stay unchanged
    for idx_u, upd in enumerate(updates):
        if not isinstance(upd, dict) or 'sheet' not in upd or 'index' not in upd or 'card' not in upd:
            sys.exit('Error: update[%d] must have "sheet", "index", and "card".' % idx_u)
        sid = upd['sheet']
        cidx = upd['index']
        new_card = upd['card']
        if sid not in existing_sheet_map:
            sys.exit('Error: update[%d] references unknown sheet "%s".' % (idx_u, sid))
        sh = existing_sheet_map[sid]
        cards = sh.get('cards', [])
        if not isinstance(cidx, int) or not (0 <= cidx < len(cards)):
            sys.exit('Error: update[%d] index %r out of range for sheet "%s" (0..%d).'
                     % (idx_u, cidx, sid, len(cards) - 1))
        old_card = cards[cidx]
        if not isinstance(new_card, dict) or old_card.get('type') != new_card.get('type'):
            sys.exit('Error: update[%d] on sheet "%s"[%d] changes card type from %r to %r.'
                     % (idx_u, sid, cidx, old_card.get('type'),
                        new_card.get('type') if isinstance(new_card, dict) else None))
        cards[cidx] = new_card
        new_ids = sheet_card_ids(sh)
        if new_ids != orig_card_ids[sid]:
            sys.exit('Error: update[%d] on sheet "%s"[%d] would change existing card IDs (%r -> %r).'
                     % (idx_u, sid, cidx, orig_card_ids[sid][cidx], new_ids[cidx]))

    # 3. Check for prefix rule and duplicate IDs across existing data and the new module
    seen_glossary_ids = set()
    for g in data.get('glossary', []):
        gid = g.get('id')
        if not gid:
            sys.exit('Error: existing glossary entry missing "id".')
        if gid in seen_glossary_ids:
            sys.exit('Error: duplicate glossary id "%s" in existing data.' % gid)
        seen_glossary_ids.add(gid)

    for g in new_mod.get('glossary', []):
        gid = g.get('id')
        if not gid or not str(gid).startswith(prefix):
            sys.exit('Error: Module %s glossary id %r must start with %r.' % (mod_num, gid, prefix))
        if gid in seen_glossary_ids:
            sys.exit('Error: duplicate glossary id "%s" across existing data and Module %s.' % (gid, mod_num))
        seen_glossary_ids.add(gid)

    seen_sheet_ids = set(existing_sheet_map.keys())
    new_sheets = collect_sheets(new_mod.get('sections', []))
    if not new_sheets:
        sys.exit('Error: Module %s file %s has no sheets.' % (mod_num, mod_path))
    for sh in new_sheets:
        sid = sh.get('id')
        if not sid or not str(sid).startswith(prefix):
            sys.exit('Error: Module %s sheet id %r must start with %r.' % (mod_num, sid, prefix))
        if sid in seen_sheet_ids:
            sys.exit('Error: duplicate sheet id "%s" across existing data and Module %s.' % (sid, mod_num))
        seen_sheet_ids.add(sid)

    seen_card_ids = set()
    seen_uids = set()
    for sh in existing_sheets + new_sheets:
        sid = sh.get('id', '')
        for c in sh.get('cards', []):
            if 'uid' in c:
                uid = c['uid']
                if uid in seen_uids:
                    sys.exit('Error: duplicate card uid "%s" (in sheet "%s").' % (uid, sid))
                seen_uids.add(uid)
        for cid in sheet_card_ids(sh):
            if cid in seen_card_ids:
                sys.exit('Error: duplicate runtime card id "%s" (in sheet "%s").' % (cid, sid))
            seen_card_ids.add(cid)

    # Save backup now that all validation checks have passed
    shutil.copyfile(data_path, backup_path)
    print('Backed up %s -> %s' % (data_path, backup_path))

    # 4. Append new module glossary and sections
    data.setdefault('glossary', []).extend(new_mod.get('glossary', []))
    data.setdefault('sections', []).extend(new_mod.get('sections', []))

    # 5. Write merged data.json
    with open(data_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print('Updated %d existing cards and merged %d Module %s sections (%d sheets) -> %s'
          % (len(updates), len(new_mod.get('sections', [])), mod_num, len(new_sheets), data_path))

    # 6. Run build.py --check and print its result
    build_py = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'build.py')
    if not os.path.exists(build_py):
        build_py = 'build.py'
    res = subprocess.run([sys.executable, build_py, '--check', '--data', data_path],
                         stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    print(res.stdout, end='')
    if res.returncode != 0:
        sys.exit(res.returncode)


if __name__ == '__main__':
    main()
```

---

### 3. `data-module1-updates.json`

```json
[]
```

---

### 4. Unified diff for `build.py` and notes

```diff
--- a/study-match/build.py
+++ b/study-match/build.py
@@ -410,12 +410,14 @@
 def units_for_index(data):
     # Module 2 topics have ids starting "optics-m2-"; everything else is Module 1.
     mods = {'1': {'label': 'Module 1 · Geometrical optics', 'sections': []},
-            '2': {'label': 'Module 2 · Interference', 'sections': []}}
+            '2': {'label': 'Module 2 · Interference', 'sections': []},
+            '3': {'label': 'Module 3 · Diffraction', 'sections': []}}
     for sec in data.get('sections', []):
         for sh in sec.get('sheets', []):
             if not sh.get('id'):
                 raise SystemExit('Error: every topic needs an "id" for the start page (missing in "%s").' % sh.get('title', '?'))
-            key = '2' if str(sh['id']).startswith('optics-m2-') else '1'
+            sid = str(sh['id'])
+            key = '3' if sid.startswith('optics-m3-') else ('2' if sid.startswith('optics-m2-') else '1')
             groups = mods[key]['sections']
             if not groups or groups[-1]['title'] != (sec.get('short') or sec.get('title', '')):
                 groups.append({'title': sec.get('short') or sec.get('title', ''), 'sheets': []})
```

#### Notes in plain English

- **Start page (`build.py` and `src/index.html`)**: `units_for_index` in `build.py` now groups any sheet whose `id` starts with `optics-m3-` under `'3': {'label': 'Module 3 · Diffraction', 'sections': []}`, while keeping Module 1 and Module 2 unchanged. `src/index.html` already loops over `Object.keys(MODS)` dynamically, so it needs no change.
- **Book notation and two small misprints in Ghatak**:
  1. On page 18.18 (start of §18.6), Ghatak writes *"In Sec. 18.3, we had studied the Fraunhofer diffraction pattern produced by a slit of width $b$"*; the single-slit section in Chapter 18 is actually **§18.2** (pages 18.4–18.7).
  2. On page 18.19 (top of the right-hand column, just above Eq. 18.44), the intermediate sum of the two slit fields is printed as $E = A\frac{\sin\beta}{\beta}\cos\gamma\cos\left(\omega t - \frac{1}{2}\beta - \frac{1}{2}\Phi_1\right)$, omitting the factor $2$ and writing $\frac{1}{2}\beta$ inside the cosine, whereas the next line (Eq. 18.45) uses the right squared amplitude $I = 4I_0\frac{\sin^2\beta}{\beta^2}\cos^2\gamma$. In our two-slit derivation we write the exact trigonometric sum $E = 2A\frac{\sin\beta}{\beta}\cos\gamma\cos\left(\omega t - \beta - \frac{1}{2}\Phi_1\right)$ so that squaring its amplitude directly gives Ghatak's Eq. (18.45).
  3. On page 18.26, §18.8.3 (*Resolving Power of a Prism*) starts at the bottom right column and is cut off mid-derivation at the end of the unit PDF; syllabus item 14 specifies *N-Slit Fraunhofer diffraction pattern and Grating* (§§18.7–18.8.2), which is covered in full.
