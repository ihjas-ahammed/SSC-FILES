# Maths tools for Optics Module I: teaching brief (compressed)

Research basis (from memory, not re-fetched): Redish 2005/2021 "Using math in physics" series (physics maths = maths + physical meaning; symbols carry meaning, so say what each symbol *is*); Redish & Kuo 2015 (epistemic framing: tell the reader which game they are in, "make sense of the world", not "plug and chug"); Tuminaro & Redish 2007 (epistemic games: mapping meaning to math, pictorial analysis, recursive plug-and-chug; weak students get stuck in the last one); Kuo et al. 2013 "blended processing" (conceptual story and equation reasoned together, e.g. "bigger denominator, smaller fraction, so smaller v"); Sherin 2001 symbolic forms (read equations as ideas: x = a + b "parts-of-a-whole", 1/u + 1/v = 1/f "sum of reciprocals"); Hewitt/Knight-style slope as "steepness" and Desmos-style "walk to the valley floor"; Needham *Visual Complex Analysis*-style unit-circle arc/chord/tangent pictures for small angles; number-line directed distances (Knight, Hecht; Indian NCERT Class 12 sign convention uses Cartesian coordinates).

## (i) Calculus minimisation / Fermat
**Intuition:** the path time T depends on one choice x. Slope of the T-vs-x graph tells if T is rising or falling. At the bottom of a valley the slope is zero, so set dT/dx = 0. "Stationary" = flat spot; three kinds: valley floor (min), hilltop (max), flat shelf (inflection). Second derivative = how the slope itself is changing: positive = bending up like a bowl (min), negative = dome (max), zero = inconclusive.
**Picture (SVG):** Panel A: x-axis, y-axis T; a smooth U curve, dot at the bottom, short horizontal tangent line, label "slope = 0". Left of the dot draw a down-sloping tangent (green "falling"), right an up-sloping tangent. Panel B: below, graph of dT/dx crossing zero from negative to positive at the same x. Panel C (small): dome (max) and S-shape (inflection) with flat tangent.
**Micro-example:** L = sqrt(a²+x²) + sqrt(b²+(d−x)²).
1. d/dx sqrt(a²+x²) = x / sqrt(a²+x²) = sin θ₁ (chain rule: outer √u gives 1/(2√u), inner u' = 2x; the 2s cancel).
2. d/dx sqrt(b²+(d−x)²) = −(d−x)/sqrt(b²+(d−x)²) = −sin θ₂ (inner derivative of (d−x)² has a minus).
3. Set sum = 0: sin θ₁ = sin θ₂ (reflection, same medium). With speeds v₁, v₂ and T = L₁/v₁ + L₂/v₂: sin θ₁ / v₁ = sin θ₂ / v₂, i.e. Snell's law.
4. Second derivative: a²/(a²+x²)^{3/2} + b²/(b²+(d−x)²)^{3/2} > 0 always, so bowl shape, a minimum.
**Common error:** forgetting the chain-rule minus sign on (d−x); thinking "stationary" always means minimum; treating θ as angle from the surface instead of the normal. **Pre-empt:** show the sign check "x grows, second distance shrinks, so its derivative must be negative"; state that x/√(a²+x²) is opposite/hypotenuse of the triangle drawn, and label angles from the normal in the figure. Note Fermat gives "stationary", not always "least" (elliptical mirror, see v).
**Remind-me box:** "Slope zero = flat spot. Differentiate, set to 0, then check bowl (f″>0) or dome (f″<0)."

## (ii) Small-angle and binomial approximations
**Intuition:** for a tiny angle the arc, the vertical chord and the tangent are almost the same length, so sin θ ≈ tan θ ≈ θ (θ in radians!). Cos θ ≈ 1 − θ²/2 because the horizontal side is a hair shorter than 1, by a second-order amount. Binomial: sqrt(1+x) ≈ 1 + x/2 for tiny x (square 1 + x/2: 1 + x + x²/4, extra x²/4 negligible).
**Picture (SVG):** unit circle quadrant, centre O, radius 1. Small angle θ at O drawn exaggerated but with ray reaching the circle at P; vertical drop PQ to x-axis (sin θ), arc from the x-axis point A to P (θ), tangent line at A meeting the ray at T (tan θ). Colour three lengths: PQ < arc AP < AT, with zoomed inset showing they nearly coincide. Second small inset: OQ = cos θ with the gap 1 − cos θ shaded. Table: θ=0.1 rad: sin=0.0998, tan=0.1003.
**Micro-example (spherical surface):** path to P on the surface at height h: AP = sqrt(h² + (s+h²/2R)²)... simplified: AP = sqrt(s² + h²(1+s/R)) with s big, so
1. Write AP = s·sqrt(1 + h²(…)/s²) with the stuff in the bracket tiny, call it ε.
2. sqrt(1+ε) ≈ 1 + ε/2.
3. So AP ≈ s + h²/(2s) (extra path from the height h). Same for the other segment: s′ + h²/(2s′).
4. h² terms are the only "leftovers", and equating them gives n₁/u + n₂/v = (n₂−n₁)/R.
**Common error:** using degrees in θ ≈ sin θ (30° is not 30); dropping a term then cancelling terms of the same order; "approximation is only a rough guess". **Pre-empt:** say "θ must be in radians: 1° = 0.0175 rad"; give the numeric table; say we keep terms up to h² and drop h⁴.
**Remind-me box:** "Small θ (in radians): sin θ ≈ tan θ ≈ θ; cos θ ≈ 1 − θ²/2; √(1+x) ≈ 1 + x/2."

## (iii) Geometry: exterior angle, similar triangles, sagitta, radians
**Intuition:** exterior angle = sum of the two far interior angles (since both it and the third angle fill a straight line, 180°). Similar triangles = same shape, so sides scale by the same factor (ratio h/u = h′/v). Radian = arc length ÷ radius, so arc = Rθ. Sagitta: for a circle of radius R and aperture height h, depth s ≈ h²/(2R) (small h).
**Picture (SVG):** (a) triangle ABC, extend BC beyond C to D; arc at C marked exterior angle, interior A and B marked same colour as the sum. (b) Two nested triangles with common vertex; parallel sides ticked; sides labelled h, u and h′, v. (c) Circle arc of radius R centred C; chord of half-length h; sagitta s between arc midpoint and chord; right triangle with sides R−s, h, R; result R² = h² + (R−s)², so h² ≈ 2Rs.
**Micro-example (angle at spherical surface):** ray hits surface at P with normal through C. Angle of incidence i = α + φ (exterior angle of triangle A-P-C at C... where α = angle at A, φ = angle at C). Small angles: α ≈ h/u, φ ≈ h/R, so i ≈ h/u + h/R. Similarly r = φ − β ≈ h/R − h/v. Snell small angle: n₁i = n₂r.
**Common error:** picking the wrong triangle for the exterior angle; mixing the angle at C with the angle at the surface; using the hypotenuse instead of the horizontal distance. **Pre-empt:** colour code each angle in the figure and write the sum line "exterior = A + B" before substituting; state that for small h, u (horizontal) ≈ the slant length.
**Remind-me box:** "Exterior angle = sum of the opposite two. Arc = Rθ. Sagitta s ≈ h²/2R."

## (iv) Reciprocals and sign convention
**Intuition:** all distances are measured from the surface (the origin) along the axis: right is +, left is −, like a number line. Light travels left to right. "Object left of the pole" gives u < 0 automatically. Then the signs are in the numbers, not in the formula. Reciprocals: 1/f = 1/v − 1/u; big distance, tiny reciprocal; adding fractions needs a common denominator. f is the "strength" in 1/f (power), so a smaller f means a stronger lens.
**Picture (SVG):** horizontal number line, origin O at the pole, tick marks −30, −20, −10, 0, +10, +20, +30; arrow "light →"; red marks at u = −30 (object on left), blue at v = +60. Underneath: "u = −30, v = +60, 1/v − 1/u = 1/60 + 1/30 = 3/60 = 1/20, so f = +20". A second mini-line for a virtual image (v negative).
**Micro-example:** u = −30, f = +20 (mirror convention differs, so state it). 1/v = 1/f + 1/u = 1/20 − 1/30 = 3/60 − 2/60 = 1/60, so v = +60 cm. Check: positive means right of the lens (real). Never flip 1/v to v before combining.
**Common error:** inverting terms separately (v = f + u); dropping the sign of u; writing u = 30 and then using the formula that expects −30; mixing the New Cartesian and "real-is-positive" conventions. **Pre-empt:** one convention only per chapter, stated in a box; "write u with its sign before you write anything else"; sanity-check answer sign against the sketch.
**Remind-me box:** "Origin at the surface, right is +, left is −. Substitute with signs. Never flip one fraction alone; combine 1/v first."

## (v) Ellipse focal property
**Intuition:** an ellipse is all points P with PF₁ + PF₂ = constant (pin-and-string picture). So every path F₁ → P → F₂ has the same length. Equal optical path = all rays arrive in phase = bright image at F₂. Reflection law is the same as Fermat for the tangent: a mirror shaped like this makes the path length stationary for every point, in fact constant.
**Picture (SVG):** ellipse with foci F₁, F₂ on the major axis; points P₁, P₂, P₃ on the curve; a string of the same length drawn F₁→P→F₂ in three colours, all sum "= 2a". Inset: a tangent at P, normal at P bisecting angle F₁PF₂, equal angles marked.
**Micro-example:** let 2a = 10. A point at the end of the minor axis with b = 3 has c = 4. Distances: F₁P = F₂P = 5, sum 10. A point at the vertex: F₁P = 1, F₂P = 9, sum 10. Same total, different split.
**Common error:** thinking only the shortest path is taken by light; thinking every point on the ellipse is equally distant from F₁. **Pre-empt:** distinguish "each distance" vs "the sum"; say that Fermat gives stationary, here constant, so all are equal.
**Remind-me box:** "Ellipse: PF₁ + PF₂ = constant. So every F₁ → mirror → F₂ path is equally long."

## 10 rules for writing derivations for weak readers
1. State the goal in one sentence before the first line (frame: "we are making sense of ...", not "we get the formula").
2. One step per line; name the step ("chain rule", "square both sides") in the right margin.
3. Draw the figure first; every symbol in the equation appears labelled in the figure.
4. Say what each symbol means in words at first use, and its units/sign.
5. Give a numeric check (plug in numbers) after each key result (blended processing: story and symbols together).
6. Tell the reader what to ignore ("drop terms of order h⁴") and why, not just that you do.
7. Read the final formula aloud as an idea (Sherin): "bigger u, smaller 1/u".
8. Flag the typical slip in a "watch out" line exactly where it occurs.
9. Do one fully-worked example, then one with blanks, before the reader tries alone (faded examples).
10. End every section with a one-line remind-me box and a sanity-check question (right sign? right size? right limit?).
