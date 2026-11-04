#!/usr/bin/env python3
"""
Generates sources/section_inventory.md for the second pass audit of Optics.
Item-by-item comparison of textbook (Ghatak 6e) against the authoring pool.
"""
import os, sys
from pathlib import Path

inventory_lines = []

def sec(mod, unit, num, title, pages):
    inventory_lines.append(f"\n## {mod} | {unit} | Section {num}: {title} (Ghatak pp. {pages})\n")

def item(category, name, book_ref, status, details):
    # status: PRESENT, DIFFERENT, ABSENT
    # details: citation of id, or comparison quote, or exam relevance
    inventory_lines.append(f"- **[{status}]** `{category}` **{name}** ({book_ref}): {details}")

# ==============================================================================
# MODULE I: FERMAT'S PRINCIPLE
# ==============================================================================

# Sec 3.1
sec("Module I", "Unit 1", "3.1", "Introduction", "56–58")
item("Heading", "3.1 Introduction", "p. 56", "PRESENT", "Cited in `c.1.1.1`")
item("Definition", "Geometrical optics as short-wavelength limit (λ -> 0) of wave optics", "p. 56", "PRESENT", "Cited in `c.1.1.1`")
item("Definition", "Concept of light ray as normal to wavefront", "p. 56", "PRESENT", "Cited in `c.1.1.1`")
item("Key Formula", "Transit time t = (1/c) ∫ n ds", "Eq. 3.1, p. 57", "PRESENT", "Cited in `c.1.1.1`")
item("Key Formula", "Optical path length L = ∫ n ds", "Eq. 3.2, p. 57", "PRESENT", "Cited in `c.1.1.1`")
item("Definition", "Fermat's Principle of stationary optical path δ ∫ n ds = 0", "Eq. 3.3, p. 57", "PRESENT", "Cited in `c.1.1.1`")
item("Stated Result", "Rectilinear propagation in homogeneous medium (n = const)", "p. 57, Fig. 3.3", "PRESENT", "Cited in `c.1.1.1`")
item("Remark", "Existence of multiple ray paths connecting two points when reflectors present", "p. 58", "PRESENT", "Cited in `c.1.1.1`, `c.1.1.2`")
item("Milestone", "Historical milestones: Hero of Alexandria (100 AD), Snell (1621), Descartes (1637), Fermat (1657)", "p. 56", "PRESENT", "Cited in `c.1.1.1` cards and notes")

# Sec 3.2
sec("Module I", "Unit 1", "3.2", "Laws of Reflection and Refraction from Fermat's Principle", "58–61")
item("Heading", "3.2 Laws of Reflection and Refraction from Fermat's Principle", "p. 58", "PRESENT", "Cited in `c.1.1.2`, `c.1.1.3`")
item("Derivation", "Law of reflection at a plane mirror via Fermat's principle", "p. 58", "PRESENT", "Cited in `c.1.1.2` with full step-by-step proof")
item("Key Formula", "Law of reflection: angle i = angle r and coplanarity of rays and normal", "p. 58", "PRESENT", "Cited in `c.1.1.2`")
item("Derivation", "Snell's law of refraction via Fermat's principle: dL/dx = 0", "Eq. 3.4–3.5, p. 58", "PRESENT", "Cited in `c.1.1.3` with full step-by-step proof")
item("Key Formula", "Snell's law: n1 sin θ1 = n2 sin θ2", "Eq. 3.6, p. 58", "PRESENT", "Cited in `c.1.1.3`")
item("Stated Result", "Second derivative d²L/dx² > 0 confirming path is a true minimum for plane refraction", "p. 58–59", "PRESENT", "Cited in `c.1.1.3` proof step 3")
item("Example", "Example 3.1: Paraboloidal reflector: parallel rays reflect through focus with equal optical path", "p. 59", "PRESENT", "Cited in `q.op.1.01` (Paraboloidal Reflector Focus)")
item("Example", "Example 3.2: Ellipsoidal reflector: rays from focus S1 reflect to S2 with equal optical path", "p. 60", "PRESENT", "Cited in `q.op.1.02` (Elliptical Reflector Conjugates)")
item("Derivation", "Paraxial refraction at spherical surface via Fermat: dL/dθ = 0 yielding Gaussian formula", "Eq. 3.8–3.10, pp. 60–61", "PRESENT", "Cited in `c.1.2.2`, `q.op.1.03`")
item("Stated Result", "Fermat stationarity condition: d²L/dθ² = r² n2 (1/y - 1/y0) showing max, min, or stationary", "p. 61", "ABSENT", "The second-derivative condition distinguishing maximum, minimum, and stationary optical paths is missing from the app")
item("Example", "Example 3.3: Spherical refracting surface paraxial imaging via Fermat's principle", "pp. 60–61", "PRESENT", "Cited in `q.op.1.03`")
item("Example", "Example 3.4: Virtual image paraxial extremum condition: n1 OS - n2 SI = const", "Eq. 3.11–3.12, p. 61", "PRESENT", "Cited in `q.op.1.04`")

# Sec 4.1
sec("Module I", "Unit 2", "4.1", "Introduction to Spherical Surfaces", "79–80")
item("Heading", "4.1 Introduction", "p. 79", "PRESENT", "Cited in `c.1.2.1`")
item("Definition", "Paraxial approximation: small angle approximation sin θ ≈ tan θ ≈ θ, cos θ ≈ 1", "pp. 79–80", "PRESENT", "Cited in `c.1.2.1`")
item("Definition", "Optical axis as rotational symmetry axis of spherical surfaces", "p. 80", "PRESENT", "Cited in `c.1.2.1`")

# Sec 4.2
sec("Module I", "Unit 2", "4.2", "Refraction at a Single Spherical Surface", "80–82")
item("Heading", "4.2 Refraction at a Single Spherical Surface", "p. 80", "PRESENT", "Cited in `c.1.2.2`")
item("Heading", "4.2.1 The Sign Convention", "p. 80", "PRESENT", "Cited in `c.1.2.1`")
item("Definition", "Cartesian sign convention: vertex at origin, +z along incident light, heights positive above axis, slope angle sign", "pp. 80–81", "PRESENT", "Cited in `c.1.2.1`")
item("Heading", "4.2.2 The Gaussian Formula for a Single Spherical Surface", "p. 81", "PRESENT", "Cited in `c.1.2.2`")
item("Derivation", "Paraxial Snell's law n1 θ1 = n2 θ2 with θ1 = α + φ, θ2 = φ - β", "Eq. 4.1–4.4, pp. 80–81", "PRESENT", "Cited in `c.1.2.2` proof")
item("Key Formula", "Gaussian formula for single spherical surface: (n2/v) - (n1/u) = (n2 - n1)/R", "Eq. 4.5, p. 81", "PRESENT", "Cited in `c.1.2.2`")
item("Definition", "First principal focus F1 and focal length f1 = -n1 R / (n2 - n1)", "p. 81", "PRESENT", "Cited in `c.1.2.3`")
item("Definition", "Second principal focus F2 and focal length f2 = n2 R / (n2 - n1)", "p. 81", "PRESENT", "Cited in `c.1.2.3`")
item("Key Formula", "Relation between focal lengths: f1/n1 + f2/n2 = 0 <=> f2/f1 = -n2/n1", "p. 81", "PRESENT", "Cited in `c.1.2.3`")
item("Example", "Example 4.1: Medium n=1.5 bounded by spherical surfaces R1=+15 cm, R2=-25 cm, thickness 30 cm, object at 40 cm; image position", "pp. 81–82", "PRESENT", "Cited in `q.op.1.13` (Successive Refractions Through Two Spherical Surfaces)")

# Sec 4.3
sec("Module I", "Unit 2", "4.3", "Reflection by a Single Spherical Surface", "82–83")
item("Heading", "4.3 Reflection by a Single Spherical Surface", "p. 82", "PRESENT", "Cited in `c.1.2.4`")
item("Derivation", "Derivation of spherical mirror formula by substituting n2 = -n1 in Eq. 4.5", "p. 82", "PRESENT", "Cited in `c.1.2.4` proof")
item("Key Formula", "Mirror focal length f = R/2", "Eq. 4.6, p. 82", "PRESENT", "Cited in `c.1.2.4`")
item("Key Formula", "Spherical mirror formula: (1/v) + (1/u) = 2/R = 1/f", "Eq. 4.7, p. 82", "PRESENT", "Cited in `c.1.2.4`")
item("Stated Result", "Reflection law θ2 = -θ1 as special case of Snell's law with n2 = -n1", "p. 82", "PRESENT", "Cited in `c.1.2.4`")
item("Example", "Example 4.2: Optical system of concave mirror (R1=-60 cm) and convex mirror (R2=+20 cm), d=40 cm, object at 80 cm; final image", "pp. 82–83", "PRESENT", "Cited in `q.op.1.14` (Two-Mirror Optical System)")

# Sec 4.4
sec("Module I", "Unit 3", "4.4", "The Thin Lens", "83–84")
item("Heading", "4.4 The Thin Lens", "p. 83", "PRESENT", "Cited in `c.1.3.1`")
item("Derivation", "Thin lens formula via successive refractions at two surfaces as thickness t -> 0", "Eq. 4.8–4.10, p. 83", "PRESENT", "Cited in `c.1.3.1` proof")
item("Key Formula", "General thin lens formula: (n3/v) - (n1/u) = (n2 - n1)/R1 + (n3 - n2)/R2", "Eq. 4.10, p. 83", "PRESENT", "Cited in `c.1.3.1`")
item("Key Formula", "Thin lens formula in symmetric medium (n1 = n3 = 1): (1/v) - (1/u) = 1/f", "Eq. 4.11, p. 84", "PRESENT", "Cited in `c.1.3.1`")
item("Key Formula", "Lens maker's formula: 1/f = (n - 1)(1/R1 - 1/R2)", "Eq. 4.12, p. 84", "PRESENT", "Cited in `c.1.3.1`")

# Sec 4.5
sec("Module I", "Unit 3", "4.5", "The Principal Foci and Focal Lengths of a Lens", "84–85")
item("Heading", "4.5 The Principal Foci and Focal Lengths of a Lens", "p. 84", "PRESENT", "Cited in `c.1.3.2`")
item("Definition", "First and second principal foci F1, F2 of thin lens", "p. 84", "PRESENT", "Cited in `c.1.3.2`")
item("Key Formula", "Focal length relations: f1/f2 = -n1/n3; f2 = -f1 = f when n1 = n3", "Eq. 4.13–4.14, p. 84", "PRESENT", "Cited in `c.1.3.2`")
item("Key Formula", "First focal length: f1 = -n1 / [(n2 - n1)/R1 + (n3 - n2)/R2]", "Eq. 4.15, p. 84", "PRESENT", "Cited in `c.1.3.2`")
item("Key Formula", "Second focal length: f2 = n3 / [(n2 - n1)/R1 + (n3 - n2)/R2]", "Eq. 4.16, p. 84", "PRESENT", "Cited in `c.1.3.2`")
item("Technique", "Ray construction rules: rays through F1, F2, and optical center P", "pp. 84–85", "PRESENT", "Cited in `c.1.3.4`")

# Sec 4.6
sec("Module I", "Unit 4", "4.6", "The Newton Formula", "85")
item("Heading", "4.6 The Newton Formula", "p. 85", "PRESENT", "Cited in `c.1.4.1`")
item("Derivation", "Newton's formula derived from similar triangles: y2/y1 = -f1/x1 = -x2/f2", "Eq. 4.17–4.18, p. 85", "PRESENT", "Cited in `c.1.4.1` proof")
item("Key Formula", "Newton's formula: x1 x2 = f1 f2", "Eq. 4.19, p. 85", "PRESENT", "Cited in `c.1.4.1`")
item("Key Formula", "Newton's formula in symmetric medium: x x' = -f²", "Eq. 4.20, p. 85", "PRESENT", "Cited in `c.1.4.1`")

# Sec 4.7
sec("Module I", "Unit 4", "4.7", "Lateral Magnification", "85–87")
item("Heading", "4.7 Lateral Magnification", "p. 85", "PRESENT", "Cited in `c.1.2.5`, `c.1.4.2`")
item("Definition", "Lateral magnification m = y2 / y1", "Eq. 4.21, p. 85", "PRESENT", "Cited in `c.1.2.5`, `c.1.4.2`")
item("Key Formula", "Thin lens magnification: m = v/u = -f1/x1 = -x2/f2", "Eq. 4.21, p. 85", "PRESENT", "Cited in `c.1.4.2`")
item("Derivation", "Single spherical surface magnification derivation m = (n1 v)/(n2 u)", "Eq. 4.22–4.23, p. 86", "PRESENT", "Cited in `c.1.2.5` proof")
item("Key Formula", "Composite system magnification: m = m1 m2 ... mk", "Eq. 4.24, p. 86", "PRESENT", "Cited in `c.1.3.3`, `q.op.1.15`")
item("Example", "Example 4.3: Two thin lenses (f1=+20 cm, f2=-10 cm, d=8 cm, object height 1 cm at 40 cm); final image position v=-14.5 cm and size", "pp. 86–87", "PRESENT", "Cited in `q.op.1.15` (Two-Lens System)")

# ==============================================================================
# MODULE II: INTERFERENCE
# ==============================================================================

# Sec 13.5
sec("Module II", "Unit 5", "13.5", "Superposition of Two Sinusoidal Waves", "198–201")
item("Heading", "13.5 Superposition of Two Sinusoidal Waves", "p. 198", "PRESENT", "Cited in `c.2.1.1`")
item("Derivation", "Algebraic addition of y1 = a1 cos(ωt - θ1) and y2 = a2 cos(ωt - θ2)", "Eq. 13.20–13.24, p. 198", "PRESENT", "Cited in `c.2.1.1` proof")
item("Key Formula", "Resultant amplitude A² = a1² + a2² + 2 a1 a2 cos δ", "Eq. 13.24, p. 198", "PRESENT", "Cited in `c.2.1.1`")
item("Key Formula", "Resultant phase tan θ = (a1 sin θ1 + a2 sin θ2)/(a1 cos θ1 + a2 cos θ2)", "Eq. 13.25, p. 198", "PRESENT", "Cited in `c.2.1.1`")
item("Heading", "13.6 The Graphical Method", "pp. 198–200", "PRESENT", "Cited in `c.2.1.3`")
item("Technique", "Phasor addition method for adding harmonic vibrations", "pp. 198–200", "PRESENT", "Cited in `c.2.1.3`")
item("Heading", "13.7 The Complex Representation", "pp. 200–201", "PRESENT", "Cited in `c.2.1.1`, `c.2.1.3`")
item("Technique", "Complex amplitude representation y = Re[A exp(i(ωt - θ))]", "pp. 200–201", "PRESENT", "Cited in `c.2.1.1`")

# Sec 14.1
sec("Module II", "Unit 6", "14.1", "Introduction to Interference", "202–203")
item("Heading", "14.1 Introduction", "p. 202", "PRESENT", "Cited in `c.2.2.1`")
item("Definition", "Interference as redistribution of energy without violation of energy conservation", "p. 202", "PRESENT", "Cited in `c.2.2.1`")
item("Definition", "Division of wavefront vs division of amplitude", "p. 203", "PRESENT", "Cited in `c.2.2.1`")

# Sec 14.3
sec("Module II", "Unit 6", "14.3", "Coherence", "205–207")
item("Heading", "14.3 Coherence", "p. 205", "PRESENT", "Cited in `c.2.2.1`, `c.2.2.2`")
item("Definition", "Coherent vs incoherent sources and necessity of constant phase difference", "p. 205", "PRESENT", "Cited in `c.2.2.1`")
item("Definition", "Temporal coherence, coherence time τc, and coherence length lc = c τc ≈ λ²/Δλ", "pp. 205–206", "PRESENT", "Cited in `c.2.2.2`")
item("Example", "Example 14.2: Water ripples interference: locus of points of zero amplitude is a family of hyperbolas", "p. 205", "PRESENT", "Cited in `c.2.3.3`, `q.op.2.04`")
item("Example", "Example 14.3: Screen parallel to line of sources: straight fringes parallel to y-axis", "p. 206", "PRESENT", "Cited in `c.2.3.1`")
item("Example", "Example 14.4: Sources with initial phase difference φ0: pattern shifted by x0 = D φ0 / (k d)", "p. 206", "PRESENT", "Cited in `q.op.2.04`")

# Sec 14.4
sec("Module II", "Unit 7", "14.4", "Interference of Light Waves", "207–208")
item("Heading", "14.4 Interference of Light Waves", "p. 207", "PRESENT", "Cited in `c.2.3.1`")
item("Derivation", "Young's double-hole geometry: optical path difference Δ = S2P - S1P ≈ y d / D", "Eq. 14.16–14.19, pp. 207–208", "PRESENT", "Cited in `c.2.3.1` proof")
item("Key Formula", "Phase difference δ = (2π/λ) (y d / D)", "Eq. 14.20, p. 208", "PRESENT", "Cited in `c.2.3.1`")

# Sec 14.5
sec("Module II", "Unit 7", "14.5", "The Interference Pattern", "208")
item("Heading", "14.5 The Interference Pattern", "p. 208", "PRESENT", "Cited in `c.2.3.1`")
item("Key Formula", "Bright fringe positions: yn = n λ D / d (n = 0, ±1, ±2, ...)", "Eq. 14.17, p. 208", "PRESENT", "Cited in `c.2.3.1`")
item("Key Formula", "Dark fringe positions: yn = (n + 1/2) λ D / d", "p. 208", "PRESENT", "Cited in `c.2.3.1`")
item("Key Formula", "Fringe width β = λ D / d", "Eq. 14.21, p. 208", "PRESENT", "Cited in `c.2.3.1`")

# Sec 14.6
sec("Module II", "Unit 7", "14.6", "The Intensity Distribution", "208–214")
item("Heading", "14.6 The Intensity Distribution", "p. 208", "PRESENT", "Cited in `c.2.3.2`")
item("Derivation", "Intensity distribution I = 4 I0 cos²(δ/2) = 2 I0 [1 + cos((2π/λ) y d / D)]", "Eq. 14.26, p. 209", "PRESENT", "Cited in `c.2.3.2` proof")
item("Definition", "Fringe visibility V = (Imax - Imin)/(Imax + Imin)", "Eq. 14.28, p. 209", "PRESENT", "Cited in `c.2.1.2`")
item("Example", "Example 14.5: Finite length slit sources parallel to y-axis", "p. 209", "PRESENT", "Cited in `c.2.3.1` notes")
item("Example", "Example 14.6: Two point sources on normal to screen (z-axis): circular concentric rings rm ≈ √(m λ D² / d)", "p. 210", "PRESENT", "Cited in `q.op.2.11`, `q.op.2.12`")
item("Example", "Example 14.7: Interference of point source and its mirror image", "p. 211", "PRESENT", "Cited in `c.2.5.2`")
item("Derivation", "Condition for sustained fringes with extended source: slit width w < λ D / d", "pp. 211–213", "ABSENT", "The quantitative spatial coherence derivation for source width w < λD/d is missing")
item("Remark", "Hyperbolic fringes in space: surfaces of constant path difference are hyperboloids of revolution", "pp. 213–214", "PRESENT", "Cited in `c.2.3.3`")

# Sec 14.7
sec("Module II", "Unit 8", "14.7", "Fresnel's Two-Mirror Arrangement", "214–215")
item("Heading", "14.7 Fresnel's Two-Mirror Arrangement", "p. 214", "PRESENT", "Cited in `c.2.4.1`")
item("Derivation", "Two-mirror virtual source separation d = 2 b θ", "p. 214", "PRESENT", "Cited in `c.2.4.1` proof")
item("Key Formula", "Fringe width in two-mirror setup: β = λ D / (2 b θ)", "p. 215", "PRESENT", "Cited in `c.2.4.1`")
item("Example", "Example 14.8: Fresnel two-mirror numerical calculations", "p. 214", "PRESENT", "Cited in `q.op.2.15`")

# Sec 14.8
sec("Module II", "Unit 8", "14.8", "Fresnel Biprism", "215–216")
item("Heading", "14.8 Fresnel Biprism", "p. 215", "PRESENT", "Cited in `c.2.4.2`")
item("Derivation", "Biprism deviation angle δd = (n - 1) α, virtual source separation d = 2 a (n - 1) α", "p. 215", "DIFFERENT", "App `c.2.4.2` uses symbol μ for refractive index: d = 2 a (μ - 1) α; Ghatak uses n (p. 215)")
item("Key Formula", "Determination of wavelength λ = β d / D", "p. 216", "PRESENT", "Cited in `c.2.4.2`")
item("Technique", "Lens displacement method to determine virtual source separation d = √(d1 d2)", "p. 216", "PRESENT", "Cited in `q.op.2.14`")
item("Constant", "Typical biprism base angle α ≈ 20' = 5.8 x 10^-3 rad, n = 1.5, a = 10 cm => d = 0.58 mm", "p. 216", "ABSENT", "Exact textbook numerical parameters for biprism not included in concept text")

# Sec 14.9
sec("Module II", "Unit 9", "14.9", "Interference with White Light", "216")
item("Heading", "14.9 Interference with White Light", "p. 216", "PRESENT", "Cited in `c.2.5.1`")
item("Physical Result", "Central fringe (zero path difference) is achromatic white; lateral fringes are coloured and fade into uniform white", "p. 216", "PRESENT", "Cited in `c.2.5.1`")

# Sec 14.10
sec("Module II", "Unit 9", "14.10", "Displacement of Fringes", "216–217")
item("Heading", "14.10 Displacement of Fringes", "p. 216", "PRESENT", "Cited in `c.2.3.4`")
item("Derivation", "Optical path difference with thin plate of thickness t: Δ = (n - 1) t + (y d / D)", "Eq. 14.35, p. 216", "DIFFERENT", "App `c.2.3.4` uses refractive index symbol μ: Δy = (μ - 1) t D / d; Ghatak uses n (Eq. 14.36, p. 217)")
item("Key Formula", "Fringe displacement Δy = (n - 1) t D / d", "Eq. 14.36, p. 217", "DIFFERENT", "App `c.2.3.4` writes Δy = (μ - 1) t D / d")
item("Example", "Example 14.10: Double slit with transparent plate t=1.2 x 10^-3 cm, n=1.5, λ=6 x 10^-5 cm; fringe shift = 10 fringes", "pp. 216–217", "PRESENT", "Cited in `q.op.2.18`, `q.op.2.19`")
item("Example", "Example 14.11: Determination of thickness of mica sheet from fringe shift", "p. 217", "PRESENT", "Cited in `q.op.2.20`")

# Sec 14.11
sec("Module II", "Unit 9", "14.11", "The Lloyd's Mirror Arrangement", "217–218")
item("Heading", "14.11 The Lloyd's Mirror Arrangement", "p. 217", "PRESENT", "Cited in `c.2.5.2`")
item("Physical Result", "Lloyd's mirror setup: direct wave interferes with grazing reflection wave; central fringe is dark", "pp. 217–218", "PRESENT", "Cited in `c.2.5.2`")
item("Derivation", "Net path difference Δ = y d / D ± λ/2 due to phase shift on reflection", "p. 218", "PRESENT", "Cited in `c.2.5.2` proof")

# Sec 14.12
sec("Module II", "Unit 9", "14.12", "Phase Change on Reflection", "218–220")
item("Heading", "14.12 Phase Change on Reflection", "p. 218", "PRESENT", "Cited in `c.2.5.3`")
item("Derivation", "Stokes' principle of reversibility for reflection and refraction coefficients", "Eq. 14.38–14.39, p. 218", "PRESENT", "Cited in `c.2.5.3` proof")
item("Key Formula", "Stokes' relations: r2 = -r1 and t1 t2 = 1 - r1²", "Eq. 14.38–14.39, p. 218", "PRESENT", "Cited in `c.2.5.3`")
item("Stated Result", "Reflection at rarer-to-denser interface introduces phase change of π (path change λ/2)", "p. 219", "PRESENT", "Cited in `c.2.5.3`")

# Sec 15.1
sec("Module II", "Unit 10", "15.1", "Introduction to Amplitude Division", "222")
item("Heading", "15.1 Introduction", "p. 222", "PRESENT", "Cited in `c.2.6.1`")
item("Definition", "Interference by division of amplitude: partial reflection and transmission at boundary", "p. 222", "PRESENT", "Cited in `c.2.6.1`")

# Sec 15.2
sec("Module II", "Unit 10", "15.2", "Interference by Plane Parallel Film illuminated by Plane Wave", "222–223")
item("Heading", "15.2 Interference by a Plane Parallel Film when Illuminated by a Plane Wave", "p. 222", "PRESENT", "Cited in `c.2.6.1`")
item("Derivation", "Path difference between rays reflected from upper and lower surfaces", "pp. 222–223", "PRESENT", "Cited in `c.2.6.1`")

# Sec 15.3
sec("Module II", "Unit 10", "15.3", "The Cosine Law", "223–224")
item("Heading", "15.3 The Cosine Law", "p. 223", "PRESENT", "Cited in `c.2.6.1`")
item("Derivation", "Geometric derivation of Cosine Law Δ = 2 n d cos r", "Eq. 15.8–15.9, pp. 223–224", "DIFFERENT", "App `c.2.6.1` writes Δ = 2 μ t cos r (using μ for index and t for thickness); Ghatak writes Δ = 2 n d cos r (Eq. 15.9, p. 224)")
item("Key Formula", "Cosine law optical path difference: Δ = 2 n d cos r", "Eq. 15.9, p. 224", "DIFFERENT", "App `c.2.6.1` writes Δ = 2 μ t cos r")
item("Key Formula", "Reflected maxima: 2 n d cos r = (m + 1/2) λ; Reflected minima: 2 n d cos r = m λ", "Eq. 15.10a–15.10b, p. 224", "DIFFERENT", "App `c.2.6.1` uses μ, t instead of n, d")
item("Key Formula", "Transmitted maxima: 2 n d cos r = m λ; Transmitted minima: 2 n d cos r = (m + 1/2) λ", "p. 224", "PRESENT", "Cited in `c.2.6.1`")

# Sec 15.4
sec("Module II", "Unit 10", "15.4", "Non-reflecting Films", "224–228")
item("Heading", "15.4 Non-reflecting Films", "p. 224", "PRESENT", "Cited in `c.2.6.2`")
item("Derivation", "Destructive interference in reflection: optical thickness nf d = λ0 / 4", "Eq. 15.19, p. 226", "PRESENT", "Cited in `c.2.6.2`")
item("Key Formula", "Anti-reflection index condition: nf = √(na ng)", "Eq. 15.26, p. 226", "PRESENT", "Cited in `c.2.6.2`")
item("Heading", "15.4.2 Rigorous Expressions for Reflectivity", "p. 227", "PRESENT", "Cited in `c.2.6.3`")
item("Key Formula", "Reflectivity formula: R = (r1² + r2² + 2r1 r2 cos 2δ1) / (1 + r1² r2² + 2r1 r2 cos 2δ1)", "Eq. 15.30, p. 227", "PRESENT", "Cited in `c.2.6.3`")
item("Constant", "MgF2 coating: nf = 1.38 on glass ng = 1.50 gives R ≈ 1.4% (down from 4% for bare glass)", "p. 226", "PRESENT", "Cited in `c.2.6.2`, `q.op.2.23`")

# Sec 15.8
sec("Module II", "Unit 11", "15.8", "Wedge-Shaped Film (Two Non-parallel Surfaces)", "235–238")
item("Heading", "15.8 Interference by a Film with Two Non-parallel Reflecting Surfaces", "p. 235", "PRESENT", "Cited in `c.2.7.1`")
item("Derivation", "Path difference in thin wedge film Δ = 2 n d cos r ± λ/2, straight fringes of equal thickness", "pp. 235–236", "DIFFERENT", "App `c.2.7.1` uses μ, α for index and wedge angle: β = λ/(2μα); Ghatak uses n, θ: β = λ/(2nθ) (Eq. 15.60, p. 235)")
item("Key Formula", "Fringe width in wedge film: β = λ / (2 n θ)", "Eq. 15.60, p. 235", "DIFFERENT", "App `c.2.7.1` writes β = λ / (2 μ α)")
item("Physical Result", "Edge of wedge (d = 0) is dark in reflection", "p. 236", "PRESENT", "Cited in `c.2.7.1`")
item("Example", "Example 15.1: Thin wedge film reflection amplitudes and fringe visibility", "p. 237", "PRESENT", "Cited in `q.op.2.22`")

# Sec 15.9
sec("Module II", "Unit 11", "15.9", "Colors of Thin Films", "238–239")
item("Heading", "15.9 Colors of Thin Films", "p. 238", "PRESENT", "Cited in `c.2.7.2`")
item("Physical Result", "Thin film in white light appears coloured due to selective constructive/destructive interference for specific wavelengths", "p. 238", "PRESENT", "Cited in `c.2.7.2`")

# Sec 15.10
sec("Module II", "Unit 11", "15.10", "Newton's Rings", "239–242")
item("Heading", "15.10 Newton's Rings", "p. 239", "PRESENT", "Cited in `c.2.7.3`")
item("Derivation", "Air film thickness under spherical surface: t ≈ r² / (2R)", "Eq. 15.64, p. 239", "PRESENT", "Cited in `c.2.7.3` proof")
item("Key Formula", "Dark ring radii in reflection: rm = √(m λ R)", "Eq. 15.66, p. 239", "PRESENT", "Cited in `c.2.7.3`")
item("Key Formula", "Bright ring radii in reflection: rm = √[(m + 1/2) λ R]", "p. 240", "PRESENT", "Cited in `c.2.7.3`")
item("Physical Result", "Central spot is dark in reflected light due to λ/2 phase shift at lower glass plate", "p. 240", "PRESENT", "Cited in `c.2.7.3`")
item("Key Formula", "Dark ring radii with liquid film of index n: rm = √(m λ R / n)", "Eq. 15.69, p. 240", "DIFFERENT", "App `c.2.7.3` writes index as μ: rm = √(m λ R / μ); Ghatak uses n (Eq. 15.69)")
item("Key Formula", "Determination of wavelength: λ = (Dm² - Dn²) / [4(m - n)R]", "p. 241", "PRESENT", "Cited in `c.2.7.3`, `q.op.2.29`")
item("Example", "Example 15.2: Plano-convex lens R=100 cm, λ=5893 Å; radii of 1st, 2nd, 3rd dark rings: 0.0768 cm, 0.1086 cm, 0.1330 cm", "p. 240", "PRESENT", "Cited in `c.2.7.3` cards, `q.op.2.28`")
item("Example", "Example 15.3: Newton's rings with liquid n=1.33: ring radii shrink by factor √1.33", "p. 241", "PRESENT", "Cited in `q.op.2.29` notes")

# Sec 15.11
sec("Module II", "Unit 11", "15.11", "The Michelson Interferometer", "242–246")
item("Heading", "15.11 The Michelson Interferometer", "p. 242", "PRESENT", "Cited in `c.2.7.4`")
item("Definition", "Beam splitter and compensating plate functions", "p. 242", "PRESENT", "Cited in `c.2.7.4`")
item("Definition", "Circular fringes of equal inclination (M1 parallel to M2') vs localized straight fringes of equal thickness (M1 inclined to M2')", "pp. 243–244", "PRESENT", "Cited in `c.2.7.4`, `c.2.7.5`")
item("Key Formula", "Condition for circular fringes: 2 d cos θ = m λ", "Eq. 15.74, p. 245", "PRESENT", "Cited in `c.2.7.4`, `c.2.7.5`")
item("Key Formula", "Mirror displacement for fringe count: Δd = m (λ/2)", "p. 245", "PRESENT", "Cited in `c.2.7.4`, `q.op.2.32`")
item("Key Formula", "Wavelength difference (doublet resolution): Δd = λ² / (2 Δλ)", "p. 245", "PRESENT", "Cited in `c.2.7.4`, `q.op.2.31`")
item("Example", "Example 15.4: Sodium doublet (5890 Å, 5896 Å): mirror displacement between consecutive disappearances Δd = 0.0289 cm", "p. 245", "PRESENT", "Cited in `q.op.2.31`")

# ==============================================================================
# MODULE III: DIFFRACTION
# ==============================================================================

# Sec 18.1
sec("Module III", "Unit 12", "18.1", "Introduction to Diffraction", "279–280")
item("Heading", "18.1 Introduction", "p. 279", "PRESENT", "Cited in `c.3.1.1`")
item("Definition", "Diffraction defined as bending of light around obstacles/apertures", "p. 279", "PRESENT", "Cited in `c.3.1.1`")
item("Definition", "Fresnel diffraction (source and screen at finite distances) vs Fraunhofer diffraction (source and screen effectively at infinity)", "pp. 279–280", "PRESENT", "Cited in `c.3.1.1`")

# Sec 18.2
sec("Module III", "Unit 12", "18.2", "Single-Slit Diffraction Pattern", "280–285")
item("Heading", "18.2 Single-slit Diffraction Pattern", "p. 280", "PRESENT", "Cited in `c.3.1.2`")
item("Derivation", "Single-slit field integral: E = C ∫_{-b/2}^{b/2} exp(i k y sin θ) dy = E0 (sin β / β)", "Eq. 18.2–18.9, pp. 280–281", "DIFFERENT", "App `c.3.1.2` uses slit width a: β = (π a sin θ)/λ; Ghatak uses slit width b: β = (1/2) k b sin θ = (π b sin θ)/λ (Eq. 18.9, p. 281)")
item("Key Formula", "Single-slit intensity distribution: I(θ) = I0 (sin β / β)²", "Eq. 18.10, p. 281", "DIFFERENT", "App `c.3.1.2` defines β with slit width a; Ghatak defines β with slit width b")
item("Heading", "18.2.1 Positions of Maxima and Minima", "p. 281", "PRESENT", "Cited in `c.3.1.2`, `c.3.1.3`")
item("Key Formula", "Minima condition: b sin θ = m λ (m = ±1, ±2, ...)", "p. 281", "DIFFERENT", "App `c.3.1.2` writes a sin θ = m λ; Ghatak writes b sin θ = m λ")
item("Derivation", "Transcendental equation for secondary maxima: dI/dβ = 0 => tan β = β", "Eq. 18.15–18.16, p. 282", "PRESENT", "Cited in `c.3.1.3` proof")
item("Key Formula", "Roots of tan β = β: β ≈ 0, ±1.430 π, ±2.459 π, ±3.471 π", "p. 282", "PRESENT", "Cited in `c.3.1.3`")
item("Key Formula", "Relative peak intensities: 1 : 0.0472 : 0.0165 : 0.0083", "p. 282", "PRESENT", "Cited in `c.3.1.3`")
item("Example", "Example 18.1: Slit width b = 0.02 cm, λ = 6 x 10^-5 cm, D = 200 cm; angular half-width = 3 x 10^-3 rad, linear width = 1.2 cm", "p. 282", "PRESENT", "Cited in `q.op.3.01`")
item("Example", "Example 18.2: Ratio of secondary maxima intensities to central maximum", "p. 283", "PRESENT", "Cited in `c.3.1.3`, `q.op.3.01`")

# Sec 18.6
sec("Module III", "Unit 13", "18.6", "Two-Slit Fraunhofer Diffraction Pattern", "294–297")
item("Heading", "18.6 Two-slit Fraunhofer Diffraction Pattern", "p. 294", "PRESENT", "Cited in `c.3.2.1`")
item("Derivation", "Two-slit field integral: E = E0 (sin β / β) [exp(i γ) + exp(-i γ)] with d = a + b", "Eq. 18.44, p. 294", "DIFFERENT", "App `c.3.2.1` uses slit width a and center separation d; Ghatak uses slit width b, opaque width a, and center separation d = a + b (p. 294)")
item("Key Formula", "Two-slit intensity: I(θ) = 4 I0 (sin β / β)² cos² γ", "Eq. 18.45, p. 294", "DIFFERENT", "App `c.3.2.1` defines β = (π a sin θ)/λ, γ = (π d sin θ)/λ; Ghatak defines β = (π b sin θ)/λ, γ = (π d sin θ)/λ with d = a + b")
item("Heading", "18.6.1 Positions of Maxima and Minima", "p. 295", "PRESENT", "Cited in `c.3.2.1`")
item("Key Formula", "Missing orders condition: d / b = m / p", "p. 295", "DIFFERENT", "App `c.3.2.1` writes d / a = m / p; Ghatak writes d / b = m / p (p. 295)")
item("Example", "Example 18.9: Two slits with b = 8.8 x 10^-3 cm, d = 7.0 x 10^-2 cm, λ = 5.89 x 10^-5 cm; number of fringes in central envelope = 15; missing orders", "p. 296", "ABSENT", "Ghatak's specific two-slit worked Example 18.9 with these exact parameters is absent from written exercises (`q.op.3.03` uses arbitrary mock data)")

# Sec 18.7
sec("Module III", "Unit 14", "18.7", "N-Slit Fraunhofer Diffraction Pattern", "297–300")
item("Heading", "18.7 N-slit Fraunhofer Diffraction Pattern", "p. 297", "PRESENT", "Cited in `c.3.3.1`")
item("Derivation", "Summation of geometric series of N coherent phasors", "Eq. 18.47–18.49, p. 297", "PRESENT", "Cited in `c.3.3.1` proof")
item("Key Formula", "N-slit intensity: I(θ) = I0 (sin β / β)² (sin Nγ / sin γ)²", "Eq. 18.50, p. 297", "PRESENT", "Cited in `c.3.3.1`")
item("Heading", "18.7.1 Positions of Maxima and Minima", "p. 297", "PRESENT", "Cited in `c.3.3.1`")
item("Key Formula", "Principal maxima: d sin θ = m λ (γ = m π), peak intensity = N² I0 (sin β / β)²", "Eq. 18.51–18.53, p. 298", "PRESENT", "Cited in `c.3.3.1`")
item("Key Formula", "Minima condition: N γ = p π (p not a multiple of N); N - 1 minima between principal maxima", "p. 298", "PRESENT", "Cited in `c.3.3.1`")
item("Key Formula", "Secondary maxima: N - 2 secondary maxima between consecutive principal maxima", "p. 298", "PRESENT", "Cited in `c.3.3.1`")

# Sec 18.8
sec("Module III", "Unit 14", "18.8", "The Diffraction Grating", "300–304")
item("Heading", "18.8 The Diffraction Grating", "p. 300", "PRESENT", "Cited in `c.3.3.2`")
item("Heading", "18.8.1 The Grating Spectrum", "p. 300", "PRESENT", "Cited in `c.3.3.2`")
item("Key Formula", "Grating equation (normal incidence): (a + b) sin θ = m λ", "Eq. 18.64, p. 300", "DIFFERENT", "App `c.3.3.2` writes d sin θ = m λ; Ghatak explicitly emphasizes grating element (a + b)")
item("Key Formula", "Grating equation (oblique incidence): (a + b) (sin θ ± sin i) = m λ", "Eq. 18.76, p. 303", "PRESENT", "Cited in `c.3.3.2`")
item("Key Formula", "Angular dispersion: dθ/dλ = m / [(a + b) cos θ]", "p. 301", "DIFFERENT", "App `c.3.3.2` writes dθ/dλ = m / (d cos θ)")
item("Heading", "18.8.2 Resolving Power of a Grating", "p. 300", "PRESENT", "Cited in `c.3.3.3`")
item("Derivation", "Resolving power via Rayleigh criterion: mth principal maximum of λ + Δλ falls on first minimum of λ", "p. 301", "PRESENT", "Cited in `c.3.3.3` proof")
item("Key Formula", "Chromatic resolving power: R = λ / Δλ = m N", "Eq. 18.66, p. 301", "PRESENT", "Cited in `c.3.3.3`")
item("Example", "Example 18.10: Grating 15,000 lines/inch (d = 1.693 x 10^-4 cm), λ = 5890 Å; angles of 1st, 2nd order; max order = 2; resolving power for sodium doublet R = 982, min lines = 982", "pp. 302–303", "ABSENT", "Ghatak's standard textbook Example 18.10 (15,000 lines/inch grating) is absent from written exercises (`q.op.3.04` and `q.op.3.05` use metric lines/cm)")

# Sec 20.1
sec("Module III", "Unit 15", "20.1", "Fresnel Diffraction Introduction", "326–327")
item("Heading", "20.1 Introduction", "p. 326", "PRESENT", "Cited in `c.3.4.1`")
item("Definition", "Huygens-Fresnel principle: division of unobstructed wavefront into secondary wavelets", "p. 326", "PRESENT", "Cited in `c.3.4.1`")

# Sec 20.2
sec("Module III", "Unit 15", "20.2", "Fresnel Half-Period Zones", "327–330")
item("Heading", "20.2 Fresnel Half-period Zones", "p. 327", "PRESENT", "Cited in `c.3.4.1`")
item("Derivation", "Annular zone radii: rm = √(m λ d) for plane wave", "Eq. 20.9, p. 328", "DIFFERENT", "App `c.3.4.1` uses symbol b for screen distance: rm = √(m b λ); Ghatak uses d: rm = √(m λ d) (Eq. 20.9, p. 328)")
item("Key Formula", "Zone area: Sm ≈ π λ d = const", "p. 328", "DIFFERENT", "App `c.3.4.1` writes π b λ; Ghatak writes π λ d")
item("Derivation", "Schuster's method of summation: u = u1/2 + (u1 - 2u2 + u3)/2 + ... ≈ u1/2", "Eq. 20.6–20.12, pp. 328–329", "ABSENT", "Schuster's formal grouping derivation for half-period zones is missing from `c.3.4.1` proof")
item("Key Formula", "Resultant unobstructed amplitude: u(P) = u1 / 2, intensity I = I1 / 4", "Eq. 20.12, p. 329", "PRESENT", "Cited in `c.3.4.1`")
item("Heading", "20.2.1 Diffraction by a Circular Aperture", "p. 329", "PRESENT", "Cited in `c.3.4.2`")
item("Key Formula", "Circular aperture on-axis intensity: I(P) = 4 I0 sin²(n π / 2)", "Eq. 20.27, p. 330", "PRESENT", "Cited in `c.3.4.2`, `q.op.3.08`")
item("Example", "Example 20.1: Plane wave λ = 5 x 10^-5 cm, d = 100 cm; radius of 1st zone r1 = 0.0707 cm, area = 0.157 mm²", "p. 329", "PRESENT", "Cited in `q.op.3.07`")

# Sec 20.3
sec("Module III", "Unit 15", "20.3", "The Zone-Plate", "330–332")
item("Heading", "20.3 The Zone-plate", "p. 330", "PRESENT", "Cited in `c.3.4.3`")
item("Definition", "Zone plate construction: alternate transparent and opaque annular half-period zones", "p. 330", "PRESENT", "Cited in `c.3.4.3`")
item("Derivation", "On-axis amplitude: u = u1 + u3 + u5 + ... ≈ N u1, intensity enhanced by factor N²", "Eq. 20.14, p. 330", "PRESENT", "Cited in `c.3.4.3` proof")
item("Key Formula", "Zone plate focal length (odd orders): fm = r1² / (m λ) for m = 1, 3, 5, ...", "Eq. 20.17, p. 331", "PRESENT", "Cited in `c.3.4.3`")
item("Key Formula", "Zone plate conjugate relation: 1/u + 1/v = 1/f1", "Eq. 20.20, p. 331", "PRESENT", "Cited in `c.3.4.3`")
item("Example", "Example 20.2: Zone plate with r1 = 0.05 cm, λ = 5 x 10^-5 cm; primary focus f1 = 50 cm, secondary foci f3 = 16.7 cm, f5 = 10 cm", "p. 331", "PRESENT", "Cited in `q.op.3.09`")

# Sec 20.6
sec("Module III", "Unit 16", "20.6", "Diffraction at a Straight Edge", "334–339")
item("Heading", "20.6 Diffraction at a Straight Edge", "p. 334", "PRESENT", "Cited in `c.3.5.1`, `c.3.5.2`")
item("Definition", "Fresnel integrals C(v) = ∫_0^v cos(π u² / 2) du and S(v) = ∫_0^v sin(π u² / 2) du", "Eq. 20.42–20.43, p. 335", "PRESENT", "Cited in `c.3.5.1`")
item("Key Formula", "Dimensionless parameter: v = x √(2 / (λ d)) for plane wave", "Eq. 20.49, p. 336", "DIFFERENT", "App `c.3.5.1` uses symbol b for screen distance: v = x √(2 / (λ b)); Ghatak uses d: v = x √(2 / (λ d))")
item("Definition", "Cornu spiral: parametric plot of (C(v), S(v)) with arc length v, curvature κ = π v", "pp. 335–336", "PRESENT", "Cited in `c.3.5.1`")
item("Key Formula", "Intensity at edge of geometrical shadow (v = 0): I = I0 / 4", "p. 337", "PRESENT", "Cited in `c.3.5.2`")
item("Key Formula", "Positions of fringes: 1st max at v = 1.22 (I = 1.37 I0), 1st min at v = 1.87 (I = 0.78 I0)", "p. 337", "PRESENT", "Cited in `c.3.5.2`")
item("Example", "Example 20.3: Straight edge diffraction λ = 0.6328 μm, d = 50 cm; scale factor x0 = 0.398 mm; first maximum at x1 = 0.485 mm", "p. 338", "ABSENT", "Ghatak's He-Ne laser Example 20.3 (λ = 0.6328 μm, d = 50 cm) is absent from written exercises (`q.op.3.10` uses λ = 500 nm, d = 1 m)")

# ==============================================================================
# MODULE IV: POLARISATION
# ==============================================================================

# Sec 22.1
sec("Module IV", "Unit 17", "22.1", "Introduction to Polarization", "355–358")
item("Heading", "22.1 Introduction", "p. 355", "PRESENT", "Cited in `c.4.1.1`")
item("Definition", "Transverse nature of light waves: E and H oscillate perpendicular to propagation direction k", "pp. 355–356", "PRESENT", "Cited in `c.4.1.1`")
item("Definition", "Linearly polarized (plane-polarized) light", "Eq. 22.4, p. 356", "PRESENT", "Cited in `c.4.1.1`")
item("Definition", "Unpolarized light as rapidly and randomly fluctuating direction of vibration", "p. 356", "PRESENT", "Cited in `c.4.1.1`")

# Sec 22.2
sec("Module IV", "Unit 19", "22.2", "Malus' Law", "358")
item("Heading", "22.2 Malus' Law", "p. 358", "PRESENT", "Cited in `c.4.3.1`")
item("Derivation", "Malus' law derivation: transmitted amplitude E = E0 cos θ => intensity I = I0 cos² θ", "Eq. 22.9, p. 358", "PRESENT", "Cited in `c.4.3.1` proof")
item("Key Formula", "Malus' law: I = I0 cos² θ", "Eq. 22.9, p. 358", "PRESENT", "Cited in `c.4.3.1`")

# Sec 22.3
sec("Module IV", "Unit 18, 19", "22.3", "Production of Polarized Light", "358–362")
item("Heading", "22.3 Production of Polarized Light", "p. 358", "PRESENT", "Cited in `c.4.2.2`")
item("Heading", "22.3.1 Wire Grid and Polaroid (Dichroism)", "pp. 358–359", "PRESENT", "Cited in `c.4.2.2`")
item("Definition", "Dichroism: selective absorption of vibrations parallel to alignment (PVA with iodine)", "p. 359", "PRESENT", "Cited in `c.4.2.2`")
item("Key Formula", "Transmission of unpolarized light through ideal polarizer: I = I0 / 2", "p. 359", "PRESENT", "Cited in `c.4.3.1`, `c.4.3.2`")
item("Heading", "22.3.2 Polarization by Reflection", "p. 359", "PRESENT", "Cited in `c.4.2.1`")
item("Key Formula", "Brewster's law: tan ip = n (or tan θp = n2/n1)", "Eq. 22.10, p. 359", "DIFFERENT", "App `c.4.2.1` uses refractive index symbol μ: tan ip = μ; Ghatak uses n (Eq. 22.10)")
item("Heading", "22.3.3 Polarization by Double Refraction", "pp. 359–361", "PRESENT", "Cited in `c.4.2.3`")
item("Definition", "Nicol prism construction: calcite rhomb cut along shorter diagonal and cemented with Canada balsam (n = 1.55)", "p. 360", "PRESENT", "Cited in `c.4.2.3`")
item("Constant", "Calcite refractive indices: no = 1.658, ne = 1.486; balsam n = 1.55 => TIR of ordinary ray at balsam interface", "p. 360", "PRESENT", "Cited in `c.4.2.3`, `q.op.4.03`")
item("Heading", "22.3.4 Polarization by Scattering", "pp. 361–362", "PRESENT", "Cited in `c.4.2.2`")
item("Definition", "Rayleigh scattering of sunlight by air molecules producing linear polarization at 90° to sun", "p. 361", "PRESENT", "Cited in `c.4.2.2`")

# Sec 22.4
sec("Module IV", "Unit 17, 22", "22.4", "Superposition of Two Disturbances (Polarisation Ellipse)", "362–366")
item("Heading", "22.4 Superposition of Two Disturbances", "p. 362", "PRESENT", "Cited in `c.4.1.2`")
item("Derivation", "Superposition of two orthogonal harmonic vibrations Ex = a1 cos(kz - ωt), Ey = a2 cos(kz - ωt + δ)", "Eq. 22.18–22.20, pp. 362–363", "PRESENT", "Cited in `c.4.1.2` proof")
item("Key Formula", "General equation of polarisation ellipse: (x/a1)² + (y/a2)² - (2 x y / a1 a2) cos δ = sin² δ", "Eq. 22.21, p. 363", "PRESENT", "Cited in `c.4.1.2`")
item("Derivation", "Orientation of principal axes of polarisation ellipse: tan 2φ = (2 a1 a2 cos δ) / (a1² - a2²)", "Eq. 22.35, p. 365", "ABSENT", "The derivation of the tilt angle tan 2φ of the ellipse axes is missing from `c.4.1.2`")
item("Example", "Example 22.1: Superposition with a1 = a2 = a, δ = π/4: right-handed elliptically polarized wave", "p. 363", "ABSENT", "Ghatak's Example 22.1 (δ = π/4 right-handed ellipse with tabular time steps) is absent")
item("Example", "Example 22.2: Phase difference δ = 3π/2, b = a: left-handed circularly polarized wave", "p. 364", "ABSENT", "Ghatak's Example 22.2 is absent from written exercises")
item("Example", "Example 22.3 & 22.4: Phase difference δ = π/3 and 2π/3: ellipse orientations", "p. 364", "ABSENT", "Ghatak's Examples 22.3 and 22.4 are absent from written exercises")
item("Example", "Example 22.5: Phase difference δ = π/2, b = a: circular polarization; ellipse rotated by 45°", "p. 365", "PRESENT", "Cited in `c.4.1.2` special cases")

# Sec 22.5
sec("Module IV", "Unit 20", "22.5", "The Phenomenon of Double Refraction", "366–370")
item("Heading", "22.5 The Phenomenon of Double Refraction", "p. 366", "PRESENT", "Cited in `c.4.4.1`, `c.4.4.2`")
item("Definition", "Ordinary (o) ray obeying Snell's law vs Extraordinary (e) ray with direction-dependent velocity", "p. 366", "PRESENT", "Cited in `c.4.4.1`")
item("Definition", "Optic axis: direction in uniaxial crystal along which o- and e-rays travel with identical speeds", "p. 366", "PRESENT", "Cited in `c.4.4.1`")
item("Definition", "Negative crystals (ve > vo, ne < no, e.g. calcite) vs Positive crystals (ve < vo, ne > no, e.g. quartz)", "p. 367", "DIFFERENT", "App `c.4.4.1` uses symbols μo, μe; Ghatak uses no, ne (p. 367)")
item("Definition", "Huygens' wave surfaces: spherical wave surface for o-ray, ellipsoid of revolution for e-ray", "pp. 367–368", "PRESENT", "Cited in `c.4.4.2`")
item("Heading", "22.5.1 Normal Incidence", "p. 367", "PRESENT", "Cited in `c.4.4.2`")
item("Derivation", "Huygens' construction for normal incidence: (a) optic axis inclined, (b) optic axis parallel to surface, (c) optic axis perpendicular", "pp. 367–369", "PRESENT", "Cited in `c.4.4.2`")
item("Heading", "22.5.2 Oblique Incidence", "p. 369", "PRESENT", "Cited in `c.4.4.2`")
item("Derivation", "Huygens' construction for oblique incidence", "pp. 369–370", "PRESENT", "Cited in `c.4.4.2`")

# Sec 22.6
sec("Module IV", "Unit 21", "22.6", "Wave Plates (Quarter-Wave and Half-Wave Plates)", "370–372")
item("Heading", "22.6 Interference of Polarized Light: Quarter Wave Plates and Half Wave Plates", "p. 370", "PRESENT", "Cited in `c.4.5.1`")
item("Derivation", "Phase difference introduced by crystal plate: δ = (2π/λ0) |no - ne| d", "Eq. 22.50, p. 370", "DIFFERENT", "App `c.4.5.1` uses symbols μo, μe: δ = (2π/λ0)|μo - μe|d; Ghatak uses no, ne (Eq. 22.50)")
item("Key Formula", "Quarter-wave plate (QWP) thickness: d = λ0 / [4 |no - ne|]", "Eq. 22.52, p. 371", "DIFFERENT", "App `c.4.5.1` writes d = λ0 / (4|μo - μe|)")
item("Key Formula", "Half-wave plate (HWP) thickness: d = λ0 / [2 |no - ne|]", "Eq. 22.54, p. 371", "DIFFERENT", "App `c.4.5.1` writes d = λ0 / (2|μo - μe|)")
item("Physical Result", "Action of QWP: converts linearly polarized light at 45° to circular light, and vice versa", "p. 371", "PRESENT", "Cited in `c.4.5.2`")
item("Physical Result", "Action of HWP: rotates plane of vibration of linearly polarized light by 2θ", "p. 371", "PRESENT", "Cited in `c.4.5.2`")
item("Example", "Example 22.6: Calcite QWP and HWP thickness for sodium light λ0 = 5893 Å, no = 1.6583, ne = 1.4864 (dQWP = 0.857 μm, dHWP = 1.714 μm)", "p. 371", "ABSENT", "Ghatak's Example 22.6 specifically for CALCITE is absent (`q.op.4.06` computes Quartz)")
item("Example", "Example 22.7: Left circularly polarized beam incident on QWP emerges linearly polarized at 45° to optic axis", "p. 371", "ABSENT", "Ghatak's Example 22.7 is absent from written exercises")
item("Example", "Example 22.8: Left circularly polarized beam incident on HWP emerges right circularly polarized", "p. 372", "ABSENT", "Ghatak's Example 22.8 is absent from written exercises")

# Sec 22.7
sec("Module IV", "Unit 22", "22.7", "Analysis of Polarized Light", "372–373")
item("Heading", "22.7 Analysis of Polarized Light", "p. 372", "PRESENT", "Cited in `c.4.6.2`")
item("Technique", "Systematic procedure for analyzing unknown beam: Polaroid rotation followed by QWP insertion and second Polaroid rotation", "pp. 372–373", "PRESENT", "Cited in `c.4.6.2`")
item("Physical Result", "Identification table distinguishing unpolarized, partially polarized, linearly polarized, circularly polarized, and elliptically polarized light", "p. 372", "PRESENT", "Cited in `c.4.6.2`")

# Sec 22.8
sec("Module IV", "Unit 22", "22.8", "Optical Activity", "373–377")
item("Heading", "22.8 Optical Activity", "p. 373", "PRESENT", "Cited in `c.4.6.3`")
item("Definition", "Optical activity (rotatory polarization): rotation of plane of polarization by active substance", "p. 373", "PRESENT", "Cited in `c.4.6.3`")
item("Definition", "Dextrorotatory (d or +, right-handed) vs Laevorotatory (l or -, left-handed) substances", "p. 373", "PRESENT", "Cited in `c.4.6.3`")
item("Derivation", "Fresnel's mathematical theory of optical rotation: decomposition into LCP and RCP modes", "Eq. 22.56–22.58, p. 373", "PRESENT", "Cited in `c.4.6.3` proof (elevated in first pass)")
item("Key Formula", "Optical rotation angle: θ(z) = (π z / λ0) (nL - nR)", "Eq. 22.58, p. 373", "DIFFERENT", "App `c.4.6.3` uses refractive index symbols μL, μR: θ = (π z / λ0)(μL - μR); Ghatak uses nL, nR (Eq. 22.58)")
item("Key Formula", "Specific rotation: S = θ / (l c) with l in decimetres, c in g/cm³", "p. 374", "PRESENT", "Cited in `c.4.6.3`, `q.op.4.09`")
item("Constant", "Turpentine rotation: θ = +37° for z = 10 cm; Quartz circular birefringence nL - nR ≈ 7 x 10^-5 giving θ = 21.7°/mm at λ0 = 6000 Å", "pp. 373–374", "PRESENT", "Cited in `c.4.6.3` statement and cards")
item("Example", "Example 22.9: Optical fiber SOP change / quartz optical rotation", "p. 374", "ABSENT", "Ghatak's numerical Example 22.9 is absent")

# Sec 24.5
sec("Module IV", "Unit 18", "24.5", "Polarization by Reflection: Brewster's Law", "422–424")
item("Heading", "24.5 Polarization by Reflection: Brewster's Law", "p. 422", "PRESENT", "Cited in `c.4.2.1`")
item("Derivation", "Fresnel reflection coefficient for parallel polarization: r_parallel = tan(θ1 - θ2) / tan(θ1 + θ2) vanishes when θ1 + θ2 = π/2", "Eq. 24.54–24.57, pp. 422–423", "PRESENT", "Cited in `c.4.2.1` proof")
item("Key Formula", "Brewster's angle: tan θp = n2 / n1 (or tan ip = n)", "Eq. 24.57, p. 423", "DIFFERENT", "App `c.4.2.1` writes tan ip = μ; Ghatak writes tan θp = n2/n1 or tan ip = n (Eq. 24.57)")
item("Physical Result", "Reflected ray and refracted ray are mutually perpendicular at Brewster angle: θp + θr = 90°", "p. 423", "PRESENT", "Cited in `c.4.2.1`")
item("Key Formula", "Brewster condition for external reflection at glass (n = 1.5): θp ≈ 56.3°", "p. 423", "PRESENT", "Cited in `c.4.2.1`, `q.op.4.02`")

header = """# Item-by-Item Section Inventory: Textbook (Ghatak 6e) vs Optics App

**Course**: B.Sc. Physics Honours, Semester V (CU-FYUGP), *Optics*  
**Prescribed Textbooks**:
1. Ajoy Ghatak, *Optics*, 6th Edition (McGraw Hill).
2. Subrahmanyam, Brij Lal & Avadhanulu (Book 2 unavailable; Module IV evaluated against Ghatak 6e Chapters 22 & 24.5).

This inventory lists EVERY item the textbook gives across all 47 prescribed sections: subsection headings, definitions, derivations with equation numbers, key formulas with equation numbers, worked examples (number, given data, final answer), numerical constants, and physical results.

Each item is strictly marked:
- **PRESENT**: The app states the SAME result with the SAME formula and symbols/sign convention.
- **DIFFERENT**: The app has it, but the formula, symbol convention, definition, or number differs (quoted and cited).
- **ABSENT**: The app has no such statement, derivation step, or worked example.

---
"""

full_content = header + "\n".join(inventory_lines) + "\n"

out_path = Path(__file__).resolve().parent.parent / 'sources' / 'section_inventory.md'
out_path.parent.mkdir(parents=True, exist_ok=True)
with open(out_path, "w") as f:
    f.write(full_content)

print(f"Generated {out_path} with {len(inventory_lines)} items.")
