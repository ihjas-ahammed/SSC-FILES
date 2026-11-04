# Pedagogy brief: wave optics for weak learners
Source note: written from memory of the PER literature (no live search). Cited: Ambrose, Shaffer, Steinberg & McDermott 1999 (Am. J. Phys. 67, 146; interference/diffraction); Wosilait, Heron, Shaffer & McDermott 1999 (Am. J. Phys. 67, 1999 - light & shadow/two-source/ray vs wave); Ambrose 1999 PhD / Tutorials in Introductory Physics (McDermott); Hecht, Optics (phasors, Cornu); Feynman Lectures Vol I ch. 29-33 (arrows). Verify page-level claims before quoting.

## Part 1. Misconceptions -> one-sentence fix
1. Ray/wave mixing (light "goes straight through slits as rays, then bends"). Fix: Rays are only the arrows showing wave direction; once the opening is comparable to the wavelength, add up waves, not rays.
2. Dark fringe = no light arrived (Ambrose: students think light "can't get there" or is blocked). Fix: Light arrives from both slits at a dark spot, but the two crests-and-troughs cancel; cover one slit and that spot gets brighter.
3. Interference as light "colliding" or waves permanently altering each other. Fix: Waves pass through each other unchanged; they only add where they overlap, point by point.
5. Fringe spacing depends on slit width. Fix: Spacing β = λD/d depends on slit SEPARATION d; slit WIDTH a only sets the overall envelope (single-slit pattern) that dims the fringes.
6. Path difference vs phase difference (and "path difference = zero means dark"). Fix: Phase difference = 2π × (path difference / λ); path difference is a length, phase difference an angle - convert before comparing.
7. Phase change on reflection (π attached to every reflection, or the wrong side). Fix: A π jump occurs only for reflection at a boundary where n rises (light going into the denser medium); reflection from the rarer side has none.
8. Thin film: "the film colour is paint/pigment" or only one reflection counts (Wosilait/McDermott). Fix: Two reflected waves (top and bottom surface) interfere; the extra path is 2nt cos r, plus any π jump.
10. Single-slit: "narrower slit gives narrower pattern". Fix: Narrower slit gives a WIDER central maximum (θ ≈ λ/a).
12. Polaroid as "slits" or picket fence (see Part 3). Fix: A polariser keeps only the component of E along its transmission axis; it is a component-projector, not a sieve.
14. Malus: students think a second polariser at 90 degrees "blocks" regardless; and cannot explain 3-polariser surprise. Fix: Each polariser re-projects the field onto its own axis; a middle polariser at 45 degrees gives each stage a new nonzero component.
15. Circular polarisation = "ray spiralling/rotating in space". Fix: Look at one fixed point: the E arrow rotates at constant length once per period; it is two perpendicular oscillations 90 degrees out of phase and equal in size.
16. Brewster: "reflected light is polarised because the surface blocks the rest". Fix: At Brewster's angle the reflected and refracted rays are 90 degrees apart, so the p-component cannot radiate along the reflected direction (dipoles don't radiate along their axis).
17. Birefringence: "two beams = two speeds in same medium for same light"; o and e rays confused. Fix: The crystal has direction-dependent speed; the o-ray has equal speed in all directions, the e-ray's speed depends on direction, and each has its own polarisation.
18. Quarter-wave plate "rotates" the light or "absorbs half". Fix: It does not rotate anything; it delays one perpendicular component by λ/4 (90 degrees), changing the shape of the E-tip path.
20. Newton's rings: centre is bright "because glass touches". Fix: Centre is dark because top-bottom reflections differ by one π jump (only one is a reflection from the denser side) while path difference ≈ 0.

## Part 2. Maths scaffolding (weak learners)
General rules: start every topic with the arrow; no algebra before the picture; every formula after a picture gets a "what the arrow does" sentence. Use degrees first, then radians (class 10 = degrees). Feynman uses arrows for the same reason (Vol I ch. 29, 30).

### 2.1 Phase as angle on a circle
- Intuition: A point moving round a circle; phase = how far round (angle) it is. Wave value = height of the point (a shadow on the vertical axis).
- Picture (SVG): unit circle, arrow from centre at angle φ=40 deg, dashed vertical drop to a side graph of cos; on the right a cosine curve with x-axis labelled "angle 0, 90, 180, 270, 360". Mark one full lap = one period = 360 degrees.
- Micro example: One wavelength = 360 degrees. A path of λ/4 = 90 degrees. A path of 3λ/2 = 540 degrees = 180 degrees (laps don't matter).
- Error: Mixing "path" and "phase". Pre-empt: always write "Δφ = 360 degrees × Δ/λ" in one line.
- Remind me: Phase is an angle; one wavelength of path equals one full lap.

### 2.2 Phasor addition / adding two cosines
- Intuition: Adding two waves of the same frequency = adding two arrows tip-to-tail; they spin together so only their angle between them matters.
- Picture: arrows A1 (length 1, angle 0) and A2 (length 1, angle δ) tip-to-tail, resultant drawn from the origin; show δ=0 (length 2), δ=90 degrees (length 1.41), δ=180 degrees (length 0).
- Micro example: Equal arrows length A, angle δ. Resultant R = 2A cos(δ/2). δ=60 degrees gives R = 2A·cos30 = 1.73A. So intensity ratio to one beam = 3 (not 4).
- Error: Adding intensities, or adding lengths ignoring angle. Pre-empt: "Add arrows first, square after."
- Remind me: Add arrows, then square the length.

### 2.3 Complex exponentials as arrows
- Intuition: e^{iφ} is just a unit arrow at angle φ; i means "turn 90 degrees". Real part = shadow on the x-axis.
- Picture: Argand plane, unit circle, arrow at φ with label e^{iφ}=cosφ+i sinφ; mark 1, i, -1, -i at 0, 90, 180, 270 degrees.
- Micro example: e^{i0}+e^{iπ} = 1 + (-1) = 0 (arrows opposite). e^{iπ/2} = i.
- Error: Thinking "i" makes the wave unphysical. Pre-empt: "Real part = the real wave; complex is bookkeeping for the arrow."
- Remind me: e^{iφ} = unit arrow at angle φ.

### 2.4 Intensity = |amplitude|^2 and cos^2 averages to 1/2
- Intuition: Energy goes with the square of the field (a spring's energy goes as x^2). A detector averages over many cycles.
- Picture: plot of cos^2 θ over one cycle, shifted between 0 and 1, with horizontal dashed line at 1/2; highlight equal areas above/below.
- Micro example: cos^2 + sin^2 = 1 and the two graphs are mirror images, so each averages to 1/2. Hence I ∝ A^2 (the 1/2 is common and dropped). Two equal beams in phase: A→2A, I→4I.
- Error: Using A rather than A^2 for the screen brightness. Pre-empt: "Intensity of an arrow = length squared."
- Remind me: Brightness is the length of the arrow squared.

### 2.5 Geometric series of phasors -> sin(Nγ)/sin(γ) (N slits)
- Intuition: N equal arrows each turned γ more than the last form part of a regular polygon (an arc of a circle); the total is the chord.
- Picture: N=5 arrows chained tip-to-tail, each turned by δ, closing as an arc; circle of radius r through the vertices; chord R drawn from start to end; the central angle Nδ with half-angle Nδ/2 marked.
- Micro example: Chord R = 2r sin(Nδ/2); one arrow a = 2r sin(δ/2). So R = a·sin(Nδ/2)/sin(δ/2). Principal max when δ=0 or 2π: R = N a, I = N^2 I1. Zeros when Nδ = 2π, 4π... (not when δ = 2π).
- Error: Thinking intensity maximum scales as N. Pre-empt: Peak ∝ N^2 and width ∝ 1/N, so total energy ∝ N.
- Remind me: N arrows turning evenly form an arc; the chord is the answer.

### 2.6 Integration as infinitely many small phasors (single slit -> sinc; Cornu)
- Intuition: Cut the slit into a very large number of strips, each a tiny arrow; the arrows form a smooth circular arc (single slit) or an unwinding curve (Fresnel). The straight length of arrow bunch is the chord.
- Picture (single slit): at θ=0 a straight line of length A0; at a small θ an arc of the same total length curving; at the first zero the arc closes into a full circle (chord = 0). Mark total arc angle 2β where β = π a sin θ/λ; chord = A0 sinβ/β.
- Picture (Cornu): a double spiral through origin, with coordinates (C(v), S(v)) approaching (±0.5, ±0.5); mark the straight-edge: the arrow from the far spiral end (-0.5,-0.5) to the point at v; the shadow-edge point is at the origin with the arrow length half the full (intensity 1/4).
- Micro example: Single slit: arc length A0 fixed; arc closes when the total turn is 2π: a sinθ = λ. Intensity I = I0 (sinβ/β)^2; first side lobe ≈ 4.5% of I0. Straight edge: unobstructed = |arrow from (-0.5,-0.5) to (0.5,0.5)|; at the geometric shadow edge half of it; I = 1/4.
- Error: Reading Cornu coordinates as space positions. Pre-empt: "Cornu axes are Fresnel integrals C and S (arrow components), not screen coordinates; the spiral parameter v measures screen position."
- Remind me: A smooth slit is an arc of arrows; zero when the arc closes into a circle.

### 2.7 Ellipse from two perpendicular SHMs (Lissajous)
- Intuition: x = a cos ωt, y = b cos(ωt+δ). The tip moves along a line, ellipse or circle depending on δ.
- Picture: 3x3 grid: columns δ = 0, 90, 180 degrees (with a=b → line "/", circle, line "\"); with a≠b the middle gives an upright ellipse; for 45 degrees tilted ellipse. Draw bounding box of half-sides a and b, mark the tip starting point and direction of rotation.
- Micro example: a=b, δ=90 degrees: x=a cos t, y=-a sin t, so x^2+y^2=a^2. Circle. (Rotation sense decides left/right circular.)
- Error: Believing δ=0 gives the circle. Pre-empt: "Zero lag = line, quarter lag = circle."
- Remind me: Two perpendicular wiggles 90 degrees apart and equal give a circle.

## Part 3. Analogies with explicit limits
- Water ripples (two dippers; double slit). Keeps: crest/trough addition, nodal lines, spacing grows with wavelength. Limits: ripples are scalar height-waves (no polarisation); ripples are visible in the plane but light fringes appear on a screen; slits for water often not "narrow" enough. Use for: superposition, why the pattern is stationary only if sources are in step.
- Noise-cancelling headphones. Keeps: cancellation of two sounds exactly out of phase; energy is not "destroyed" at one place but the speaker adds the opposite sound. Limits: active electronics generate the opposite wave (and in the ear only); sound is longitudinal, light is transverse; works only for low frequency/known pattern. Use for: destructive interference doesn't mean "no wave source".
- Rope through a fence (picket fence for polarisers). Keeps: transverse wave direction matters; it makes polarisation visible; crossed fences block. Limits (important): (1) Fence passes vertical rope waves but the real wire-grid polariser (e.g. radio/IR) TRANSMITS the field PERPENDICULAR to the wires, the opposite of the fence (electrons are driven along the wires, re-radiate and absorb that component). (2) A fence can't explain Malus' cos^2 (a rope wave at 45 degrees is either blocked or not) - the component idea does. (3) A fence can't explain the three-polariser result without components. (4) Most visible-light polaroids are dichroic polymer chains (iodine) not slits. Use: show the fence for "transverse vs longitudinal" then drop it and use the arrow-component picture (E arrow split into parallel/perpendicular parts).
- General rule for the writer: after each analogy add a line "Where this picture lies:" with 1-2 items above.

## Writer checklist
- Put path/phase conversion and the denser-medium rule in a pinned "two numbers" box.
- Pair every dark fringe discussion with "light arrives from both; cover one slit and it brightens".
- Use arrow pictures for every formula (slit width, N-slit, Cornu); introduce each as "add arrows" then name it.
- Keep angles in degrees first; switch to radians with one sentence (180 degrees = π).
- Quick check question after each section, with a typical wrong answer listed.
