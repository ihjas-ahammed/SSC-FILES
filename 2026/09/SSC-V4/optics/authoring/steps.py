# Per-step teaching layer for every Optics proof: the plain-language meaning of each step, the
# diagram (kind, stage) that goes with it, and the simulation a concept hosts.
#
#   S(concept_id, diagram_kind, [stage per step | None], [plain-language meaning per step], sim=None)
#
# A meaning explains WHAT THE STEP IS DOING AND WHY in ordinary words — not the notation again.
# tools/author.py merges this onto the proofs (and refuses a length mismatch); tools/audit_steps.py
# checks that no step that needs a picture is missing one.

S('c.1.1.2', 'reflect', [1, 2, 3, 4], [
  "We describe the whole journey with a single number — its total length — that depends on just one thing we are free to choose: where on the mirror the ray touches down. Everything that follows asks which touch-down point is special.",
  "If nudging the touch-down point a tiny bit barely changes the total length, we are at the bottom of the curve. That “flat spot” test is how Fermat's principle picks out the path light really takes.",
  "Each fraction is “sideways distance over slanted distance” for one half of the journey, which is exactly the sine of the angle that leg makes with the vertical. So the flat-spot condition is secretly a statement about angles, and it says the two angles are equal.",
  "Equal angles are not the whole law: the two legs and the vertical must also lie in one flat sheet. If the touch-down point wandered sideways out of that sheet, the path could only get longer, so the real ray never leaves it."],
  sim='reflect')

S('c.1.1.3', 'snell', [1, 2, 3, 4], [
  "The two halves of the journey are now in different materials, and light “pays” more for every centimetre in the denser one. So we add up the cost — length times refractive index for each half — and again let the crossing point be the only free choice.",
  "We look for the crossing point where nudging it changes the total cost only at second order: the bottom of the cost curve. Because the two materials charge different rates, that balance point is no longer the straight line.",
  "Each fraction is the sideways part of one leg divided by the leg itself, which is the sine of that leg's angle to the normal. So the balance condition is really a condition on the two angles.",
  "Putting the sines back in gives the familiar rule: the ray bends until “index × sine of the angle” is the same on both sides. Light arranges its path so that the cost is balanced across the boundary."],
  sim='snell')

S('c.1.1.4', 'parabola', [1, 2, 3], [
  "This is the special property of a parabola: every point on it is exactly as far from the focus as it is from a straight line called the directrix. It lets us swap a slanted distance for a straight one.",
  "Follow a ray that arrives parallel to the axis. After it bounces, its remaining distance to the focus equals the straight-across distance from the mirror point to the directrix, because the parabola's property swaps the two one-for-one.",
  "That straight-across distance runs from a fixed wavefront to a fixed line, so it is the same wherever on the mirror the ray landed. Every ray therefore takes exactly the same optical path to the focus — which is what it means to be focused perfectly."])

S('c.1.2.2', 'sphref', [1, 2, 3, 4], [
  "We track three small angles the ray makes on its way — with the axis, with the radius of the surface, and after refraction — and use the fact that an outside angle of a triangle is the sum of the two inside angles it does not touch. That turns the geometry into simple angle bookkeeping.",
  "Snell's law is normally about sines, but when angles are tiny a sine and the angle itself are almost the same number. Near the axis we can use the angles directly, which makes everything linear and easy to combine.",
  "For a ray close to the axis an angle is simply “how high the ray is” divided by “how far away it is”. So every angle can be swapped for a height over a distance, with a minus sign where the object lies to the left.",
  "The height appears in every term, so it cancels. That is the whole point: it does not matter how high the ray hit the surface — every ray from the object ends at the same place, and that shared place is what we call the image."],
  sim='surface')

S('c.1.2.4', 'mirrorfold', [1, 2, 3], [
  "We already know how a curved boundary between two materials bends light. A mirror is the same curved surface, so we start from that result instead of beginning again.",
  "A mirror sends the light back the way it came. The equations can describe that by pretending the second material has the opposite index. It is bookkeeping for “the direction of travel has reversed”, not a real negative material.",
  "The common factor drops out, and the formula no longer mentions any refractive index — as it should, because a mirror focuses according to its shape alone, not according to the medium around it."],
  sim='mirror')

S('c.1.2.5', 'surfmag', [1, 2, 3], [
  "To find how big the image is, follow the one ray that is easy to trace: the ray to the centre of the surface, where the surface is simply a flat face turned toward the axis.",
  "At that centre point the ordinary law of refraction applies directly, and because the angles are small it becomes a plain proportion between the ray's slopes on the two sides.",
  "Slopes are heights divided by distances, so the proportion becomes a relation between image height and object height. Their ratio is the magnification, and its sign says whether the image is upside down."],
  sim='surface')

S('c.1.3.1', 'thinlens', [1, 2, 3, 4], [
  "Treat the lens as two curved surfaces in a row. The first takes light from the object and forms a first image — even though the light never actually gets there, because the second surface is in the way.",
  "That first image becomes the object for the second surface. In a thin lens the two surfaces are practically in the same place, so we do not need to worry about the gap between them.",
  "Adding the two equations makes the awkward in-between image disappear: it appears with opposite signs and cancels. What is left connects only the real object and the real final image.",
  "What remains on the right-hand side depends only on the lens — its material and its curvatures — so we give it a name, 1/f. An object at infinity is focused at distance f, which is why f is called the focal length."],
  sim='lens')

S('c.1.3.3', 'twolens', [1, 2, 3, 4], [
  "Send in a ray parallel to the axis at some height. The first lens bends it toward its own focal point, and how sharply it bends depends on the ray's height and on the lens's strength.",
  "After the first lens the ray simply travels straight for a distance d. Because it is now sloping toward the axis, it reaches the second lens lower down than it started.",
  "The second lens bends the ray again, by an amount that depends on how high the ray is where it arrives — which is lower than before. That is why two separated lenses do not just add their strengths; they would only do that if they touched.",
  "Whatever single lens would bend a parallel ray to the same final slope is the “equivalent” lens. Reading its focal length off that final slope gives the combination formula."],
  sim='twolens')

S('c.1.4.1', 'newton', [1, None, 3, 4], [
  "Newton's trick is to measure distances from the focal points instead of from the lens. We shift the ruler: the object distance becomes its distance from the first focus, and the image distance becomes its distance from the second.",
  "We rewrite the ordinary lens formula without fractions — multiplying everything through — so the algebra of the next steps is easy.",
  "Now we swap the lens-based distances for the focus-based ones using the shift from the first step. This is the same physics; we are only moving where we put the zero of the ruler.",
  "After expanding, most terms cancel and only a product survives: the two focus-based distances multiply to a constant that depends on the lens alone. That simple product is Newton's formula."],
  sim='lens')

S('c.1.4.2', 'lensmag', [1, 2, 3], [
  "The ray through the centre of a thin lens goes straight on, and it makes two similar triangles, one on each side of the lens. Similar triangles mean heights are in the same ratio as distances.",
  "We now describe those same distances measured from the focal points, using the shift from the previous result.",
  "Using Newton's formula to tidy up, the magnification can be written two neat ways: in terms of the object's distance from the first focus, or of the image's distance from the second."],
  sim='lens')

S('c.1.4.3', 'longmag', [1, 2], [
  "If you move the object a tiny bit along the axis, the image moves too. To find out how much, we ask how a small change in one distance in the lens formula changes the other.",
  "The rate at which the image moves compared with the object works out to the square of the sideways magnification. That is why the image of a deep object looks stretched or squashed: depth is magnified by the square, sideways only by the first power."],
  sim='lens')

S('c.2.1.1', 'phasor2', [1, 2, 3, 4], [
  "Each wave is a smooth up-and-down motion. Adding two of them means adding two cosines, and the trick is to split each into a “cosine part” and a “sine part” so we can add like with like.",
  "The sum is again a smooth up-and-down motion of the same frequency, so it can be described by its own amplitude and phase. Matching the cosine and sine parts tells us what those are.",
  "Squaring and adding removes the unknown phase and leaves the amplitude alone. The cross term contains the angle between the two waves — that is where interference lives.",
  "Brightness is proportional to amplitude squared. So the pattern swings between a bright maximum where the waves agree and a minimum where they oppose. The energy is not lost; it is moved from dark places to bright ones."],
  sim='phasors')

S('c.2.1.3', 'phasorN', [1, 2, 3], [
  "Each wave is an arrow, and each arrow is turned a little more than the one before. Adding N waves means laying the arrows head to tail, one after another.",
  "Because every arrow has the same length and turns by the same angle, the arrows sit on a circle, and the sum of the whole chain is the chord of that circle.",
  "The chord and a single arrow are both a circle radius times a sine. Dividing one by the other gives the amplitude formula — the pattern behind a diffraction grating."],
  sim='nslit')

S('c.2.3.1', 'young', [1, 2, 3, 4], [
  "We place the slits, the screen and a point on the screen, and write down the two distances from the slits to that point. The whole experiment comes down to these two distances.",
  "The difference of the two squared distances is easy: almost everything cancels, and only a product of the slit separation and the screen height is left.",
  "On a screen far from the slits the two distances are almost equal, so their difference is simply the slit separation times the tiny angle to the point — which is the screen height divided by the distance to the screen.",
  "A bright fringe appears wherever the path difference is a whole number of wavelengths. Successive bright fringes therefore sit evenly along the screen, and that even spacing is the fringe width."],
  sim='young')

S('c.2.3.2', 'youngI', [1, 2, 3], [
  "The phase difference is just the path difference counted in wavelengths and multiplied by 2π. It grows steadily as you move up the screen.",
  "With two beams of equal strength the general interference formula simplifies to a squared cosine: the intensity rises to four times one beam alone and falls to exactly zero.",
  "Putting the screen position back in tells us where the bright and dark bands sit: the squared cosine repeats every fringe width."],
  sim='young')

S('c.2.3.4', 'plateshift', [1, 2, 3], [
  "Light travels slower inside glass, so a slab of glass over one slit delays that beam as if it had travelled extra distance. Only the extra beyond the same thickness of air counts.",
  "The old central fringe was where both beams had travelled equal distances. Now one beam is delayed, so the place where they balance again has to move toward the delayed beam's slit, where its route is shorter.",
  "Solving for that shift shows it is proportional to the plate's thickness and to how much the glass slows light. Counting how many fringes the pattern moves therefore measures the plate's thickness."],
  sim='plate')

S('c.2.4.1', 'fmirrors', [1, 2, 3], [
  "Each mirror makes a mirror-image of the slit. An image lies as far behind the mirror as the slit lies in front of it, so both images sit on one circle around the point where the mirrors meet.",
  "The two images sit on that circle a small angle apart — twice the angle between the mirrors — so they are separated by a short chord of the circle.",
  "We now have exactly Young's set-up: two coherent point sources a known distance apart and a screen a known distance away. So Young's fringe-width result applies directly."],
  sim='young')

S('c.2.4.2', 'biprism', [1, 2, 3, 4], [
  "A very thin prism bends every ray by the same small angle, wherever the ray enters. That angle depends only on the prism's angle and on how strongly the glass bends light.",
  "Looking back through each half of the biprism, the rays seem to come from a point shifted sideways from the real slit, by the distance to the biprism times the bending angle.",
  "One half shifts the apparent source up and the other shifts it down, so the two apparent sources are twice that shift apart.",
  "Again we have two coherent sources and a screen, so Young's result gives the fringe width. The distance to the screen is measured from the sources, so it is the sum of the two distances."],
  sim='young')

S('c.2.5.3', 'stokes', [1, 2, 3, 4], [
  "A wave hitting a boundary splits into a reflected part and a transmitted part. We give names to how much of the wave's height each part keeps.",
  "Physics works the same forwards and backwards in time. So if we run the two outgoing rays in reverse they must retrace the journey — but each of them splits again at the boundary.",
  "Running the film backwards must give back exactly the single wave we started with. So the extra waves must cancel each other, and the rest must add up to one.",
  "Solving those two conditions shows that the reflection from the other side is exactly the negative of the first. One of the two reflections must turn the wave upside down — the origin of the half-wavelength shift in thin films."])

S('c.2.6.1', 'film', [1, 2, 3, 4], [
  "Two beams come back from a thin film: one bounces off the top, the other goes in, bounces off the bottom and comes out. We follow both and compare the two routes.",
  "To compare them fairly we stop the first beam at the point where the second beam re-emerges, because from there on they travel side by side. By then the first beam has covered a little more ground in air.",
  "Using the law of refraction the two route lengths combine into one neat result: film thickness times the film's index times the cosine of the angle inside the film.",
  "One of the two reflections turns the wave upside down, which counts as an extra half wavelength. It is why a very thin film looks dark rather than bright."],
  sim='film')

S('c.2.6.2', 'arcoat', [1, 2, 3], [
  "In an anti-reflection coating both surfaces reflect from a denser material, so both reflections are flipped in the same way. The flips cancel, and only the extra distance travelled inside the coating matters.",
  "For the two reflections to cancel, the extra round trip must be half a wavelength, so the coating is a quarter of a wavelength thick, measured inside the material.",
  "Cancelling completely also needs the two reflected beams to be equally strong. That fixes the coating's index at the geometric mean of the two materials it sits between."],
  sim='film')

S('c.2.6.3', 'filmmulti', [1, 2, 3], [
  "Inside a real film the light bounces back and forth many times, and a little escapes upward at each bounce. The first is the plain reflection; every later one has made an extra round trip and is a bit weaker.",
  "Each round trip multiplies the escaping amplitude by the same factor, so the escaping beams form a geometric series that can be added exactly.",
  "The strength of the total reflection is the square of that sum. It rises and falls as the phase changes, and its two limits are the values when successive beams reinforce or oppose each other."],
  sim='film')

S('c.2.7.1', 'wedge', [1, 2, 3], [
  "At each spot the film is almost flat, so the thin-film condition applies locally: the reflection is dark wherever the thickness is a whole number of half-wavelengths inside the material.",
  "In a wedge the thickness grows steadily as you move away from the thin edge, in proportion to the distance times the wedge's tiny angle.",
  "Since the thickness grows steadily, the dark bands are equally spaced. The spacing is one half-wavelength of extra thickness divided by the wedge angle — which is how something as thin as a hair can be measured."],
  sim='wedge')

S('c.2.7.3', 'rings', [1, 2, 3, 4], [
  "Under a curved lens the air gap grows as you move away from the centre. Using the geometry of a circle, the gap at a distance r from the centre is simply r squared divided by twice the radius of curvature.",
  "A dark ring appears wherever the round trip through the gap is a whole number of wavelengths, once the flip on one of the reflections is accounted for. Putting in the gap gives the ring radii.",
  "Rings are usually measured across, not from the centre, so we double the radius. The square of a diameter then grows in equal steps from one ring to the next.",
  "The contact between lens and plate is never perfect, and that shifts every ring by the same amount. Subtracting two rings cancels that unknown, so the wavelength can be found without knowing the ring numbers exactly."],
  sim='rings')

S('c.2.7.4', 'michelson', [1, 2, 3, 4], [
  "The mirror in one arm has an image, and the two beams behave as if reflected from a film of air between the first mirror and that image. So the interferometer is a thin film in disguise.",
  "For rays leaving at different angles the path difference changes with the angle, which gives rings; each ring is one order of interference.",
  "Moving the mirror changes the film's thickness. Each time it changes by half a wavelength another fringe passes through the centre, so counting fringes measures the distance moved.",
  "With two nearby wavelengths, each makes its own fringe pattern. Sometimes the two patterns line up and sometimes they cancel, and the mirror distance between two blurrings reveals how close the wavelengths are."],
  sim='michelson')

S('c.3.1.2', 'slit', [1, 2, 3, 4], [
  "Light passing through the slit is treated as many tiny sources side by side. Measured from the centre of the slit, each has a slightly different route to a far-away point, and so a different phase.",
  "Adding all these tiny waves with their phases is an integral, and it works out to a sine divided by its own argument.",
  "Brightness is amplitude squared, and we divide by the value straight ahead so that the middle of the pattern is exactly 1.",
  "The pattern is dark wherever the sine in the top of the fraction is zero — where the little waves, laid head to tail, curl round into a closed circle and cancel exactly."],
  sim='slit')

S('c.3.1.3', 'sinc', [1, 2, 3], [
  "The bright bands between the dark ones are the peaks of the curve, so we look for the places where its slope is zero.",
  "One kind of zero slope is the dark spot itself. The other kind is a genuine peak, and it occurs where the tangent of the angle equals the angle.",
  "That equation cannot be solved with pencil algebra, but its first non-trivial answer is near 4.49. Putting it back into the intensity shows the first side band is only about five percent of the central peak."],
  sim='slit')

S('c.3.2.1', 'dslit', [1, 2, 3], [
  "Each slit sends out the single-slit wave. Because the slits are a distance apart, their waves reach a far point with a small phase difference. Moving a slit only adds a phase; it does not change the shape of its wave.",
  "Adding the two gives cosine fringes multiplied by the single-slit result. The bright fringes of two-slit interference are shaped by the wide single-slit hump.",
  "When a bright fringe of the two-slit pattern falls exactly on a dark spot of the single-slit pattern it vanishes — there is no light there to interfere. Those orders are the missing ones."],
  sim='dslit')

S('c.3.3.1', 'nslit', [1, 2, 3], [
  "With many slits, each slit still sends out the single-slit wave, and neighbouring slits differ by the same phase step each time. So we are adding N equal waves, each turned by an equal angle.",
  "Adding waves whose phases step by the same amount each time is exactly the geometric-series sum we did for N waves earlier, and it gives a ratio of two sines.",
  "Squaring gives the intensity. Between the sharp main peaks it produces N − 1 dark spots and N − 2 weak bumps, and the more slits there are, the sharper the peaks become."],
  sim='nslit')

S('c.3.3.2', 'grating', [1, 2, 3], [
  "A bright peak appears where every slit's wave arrives in step with its neighbour's, which means the path difference between neighbours is a whole number of wavelengths.",
  "We ask how the direction of a peak changes when we change the wavelength slightly, keeping the order fixed.",
  "Solving gives the angular spread per unit of wavelength: bigger for higher orders and for finer gratings. That is how a grating fans white light out into a spectrum."],
  sim='grating')

S('c.3.3.3', 'resolve', [1, 2, 3], [
  "How sharp a peak is depends on how far you must turn before the waves from all the slits cancel — the first zero next to it.",
  "Two wavelengths are “just resolved” when the peak of one sits exactly on the first zero of the other.",
  "Setting the peak of the longer line equal to that first zero and solving shows that resolving power is the order times the number of lit lines. More lines, or a higher order, means finer detail."],
  sim='grating')

S('c.3.4.1', 'zones', [1, 2, 3], [
  "Cut the wavefront into rings so that each ring is half a wavelength farther from the observer than the one before it. These are the half-period zones.",
  "Squaring the distance and ignoring the tiny wavelength-squared term gives the ring radii: they grow like the square root of the ring number.",
  "The area between neighbouring circles comes out the same for every ring. Each zone sends about the same amount of light, but in opposite phase to its neighbour."],
  sim='zones')

S('c.3.4.2', 'zonespiral', [1, 2, 3], [
  "Each zone's light opposes the one before it, so the total is an alternating sum. The contributions get slowly smaller as the zones tilt farther away.",
  "Group the terms so each bracket is a zone minus half of each of its neighbours. Because the contributions change slowly, each bracket is almost zero.",
  "What survives is only half of the first zone's contribution. An unobstructed wave therefore has half the amplitude of its first zone alone."],
  sim='zones')

S('c.3.4.3', 'zoneplate', [1, 2, 3], [
  "For a chosen point on the axis the half-period zones have known radii. A zone plate is simply built with exactly those radii.",
  "If the plate blocks every other zone, the wave from every open zone arrives at the focus in step. That fixes the focal length in terms of the first ring's radius and the wavelength.",
  "At a third of that distance each open zone covers three half-zones, an odd number, so the open zones still add in step and there is a weaker focus there too."],
  sim='zones')

S('c.3.5.1', 'cornu', [1, 2, 3], [
  "Close to the edge, the extra distance a wavelet travels grows with the square of how far along the wavefront it starts. That squared growth is what brings in the Fresnel integrals.",
  "We split the sum of wavelets into real and imaginary parts, so the total is a point in a plane. As we include more of the wavefront that point traces out the Cornu spiral.",
  "The brightness is the square of the distance from that point to where the spiral would begin if nothing were blocked. That gives the intensity anywhere near the edge."],
  sim='edge')

S('c.3.5.2', 'edge', [1, 2, 3], [
  "Exactly at the edge of the geometric shadow half of the wavefront is blocked, so only half the light amplitude arrives — a quarter of the intensity.",
  "As you move into the lit region the spiral point overshoots its final position before settling, which is why the first bright band is brighter than the unobstructed light.",
  "Deep in the shadow the point sits at the spiral's centre and the amplitude falls smoothly to nothing, with no fringes."],
  sim='edge')

S('c.4.1.2', 'ellipse', [1, 2, 3, 4], [
  "Light is two perpendicular wiggles at once. We write each as a function of time and let the second lag behind the first by a phase δ.",
  "To find the shape they trace out we want to get rid of time. So we isolate the piece of the second wiggle that changes differently from the first.",
  "Squaring, and using “sine squared plus cosine squared equals one”, removes time altogether and leaves an equation connecting only the two coordinates.",
  "That is the equation of an ellipse whose shape is controlled by δ. It flattens to a line, opens into an ellipse, or becomes a circle, depending on the phase difference."],
  sim='waveplate')

S('c.4.2.1', 'brewster', [1, 2, 3], [
  "Brewster found that reflected light is completely polarised exactly when the reflected and refracted rays are at right angles to each other. That fixes the angle of refraction in terms of the angle of incidence.",
  "The law of refraction links the two angles. With a right angle between the rays, the sine of one angle becomes the cosine of the other.",
  "Dividing the sine by the cosine gives the tangent, so the special angle obeys a very simple rule: its tangent is the refractive index."],
  sim='brewster')

S('c.4.3.1', 'malus', [1, 2, 3], [
  "A polariser lets through only the part of the electric field that lies along its axis. So we split the incoming field into a part along the axis and a part across it.",
  "Only the along-axis part gets through, and brightness is proportional to the square of the field, so brightness goes as the cosine squared of the angle.",
  "Dividing by the intensity that went in gives Malus's law — a smooth swing from full brightness when the axes are aligned to complete darkness when they are crossed."],
  sim='malus')

S('c.4.5.1', 'waveplate', [1, 2, 3], [
  "Inside a crystal the two components of the light see different refractive indices, so they travel at different speeds. Over the thickness of the plate one component gets ahead of the other.",
  "Both components cross the same thickness, but at different effective speeds, so one ends up ahead by the thickness times the difference between the two refractive indices — the optical path difference.",
  "Turning that path difference into a phase difference — multiplying by 2π over the wavelength — shows that a quarter of a wavelength gives a 90° shift and half a wavelength a 180° shift. Those are the quarter-wave and half-wave plates."],
  sim='waveplate')

S('c.4.5.2', 'qwhwp', [1, 2, 3, 4], [
  "Choose the plate's fast and slow directions as the coordinate axes. Any straight-line vibration can then be split into a part along one axis and a part along the other.",
  "After the plate the two parts are no longer in step: one is delayed by the plate's phase shift.",
  "For a quarter-wave plate the delay is a quarter of a cycle, which turns the two wiggles into an ellipse with axes along the plate's axes. If the two parts are equal, the ellipse is a circle.",
  "For a half-wave plate the delay flips the sign of one part. The direction of vibration is reflected in the plate's axis, which turns the plane of vibration through twice the angle it made with the axis."],
  sim='waveplate')

S('c.4.6.3', None, [None, None, None, None], [
  "We split a straight back-and-forth wiggle into two oppositely spinning wheels of equal radius turning at the same rate. Inside the material one wheel spins forward through space slightly faster than the other, because the material offers different resistance to right-handed and left-handed spirals.",
  "Adding together the horizontal pushes from the two spinning wheels produces a single horizontal wiggle whose strength is scaled by how far out of step the two wheels have drifted. The rapid back-and-forth vibration continues at the average pace of the two waves.",
  "Adding the vertical pushes gives another wiggle that vibrates in exact time with the horizontal one, but with an amplitude that depends on the sine of the accumulated drift angle instead of the cosine. Because both axes vibrate completely in synchrony, their combination never opens into an oval; it remains a pure straight line.",
  "Taking the ratio of the vertical amplitude to the horizontal amplitude shows that the direction of the straight line has tilted by exactly half the phase difference accumulated between the two spinning wheels. Over any distance travelled, this tilt angle is proportional to the distance and to the difference between the two circular refractive indices."])

S('c.1.1.5', 'fermat_stationary', [1, 2, 3, 4], [
  "We write down the geometric distance travelled through both media as a function of the deflection angle at the center of curvature and expand the cosine up to its second power.",
  "Differentiating the optical path with respect to the deflection angle gives the rate of change of travel time, which must vanish identically along any genuine physical ray path.",
  "Setting the first derivative to zero identifies the position of the paraxial image point, and substituting this relation into the second derivative reveals how the path curvature scales with distance.",
  "Checking the algebraic sign of the second derivative proves that paths before the focus are true minima, paths beyond the focus are local maxima, and paths at the exact conjugate image are perfectly stationary."])

S('c.2.2.3', 'spatial_coherence', [1, 2, 3, 4], [
  "We consider an independent emitting point displaced laterally across the source slit and compute the additional geometric path difference it introduces between the two primary slits.",
  "Setting the net path difference to zero locates where the central interference maximum lands on the observation screen, demonstrating that the entire pattern shifts sideways.",
  "Multiplying this transverse shift rate across the full width of the source slit gives the total displacement between the fringe patterns produced by its two opposite edges.",
  "Requiring this total fringe displacement to remain strictly smaller than half a fringe width prevents opposing fringes from washing each other out, defining the spatial coherence threshold."])

S('c.3.4.4', 'schuster', [1, 2, 3, 4], [
  "We express the net optical disturbance at the observation point as an alternating series where each successive half-period zone contributes with an opposing sign.",
  "We split the first zone contribution in half and regroup every intermediate zone amplitude with half of its two immediately adjacent neighbours in parentheses.",
  "Because the obliquity factor changes smoothly and continuously, each intermediate zone amplitude closely equals the arithmetic average of its neighbours, causing every parenthesized difference to vanish.",
  "Dropping the negligible boundary contribution from the distant outer edge leaves exactly half the amplitude of the central zone, meaning the whole unobstructed wavefront yields one quarter the intensity."])

S('c.4.1.3', 'ellipse_axes', [1, 2, 3, 4], [
  "We define a rotated coordinate system inclined at an unknown angle phi and write the standard transformation relating the original electric field components to the new axes.",
  "We substitute these rotated components directly into the general second-order equation of the polarisation ellipse to transform the quadratic curve into the new reference frame.",
  "We collect all terms multiplying the mixed product of the rotated coordinates and demand that this cross-coupling vanishes so that the new axes align with the principal ellipse directions.",
  "Applying standard trigonometric double-angle formulas simplifies the vanishing cross-term condition into an explicit formula for the tangent of twice the tilt angle in terms of the amplitudes and phase difference."])

# ── steps that need no picture, and proofs with no simulation — each with the reason ─────────────
NF('c.1.4.1', 1, "clearing the denominators of the thin-lens formula is pure algebra; the picture is the one before and the one after")
NF('c.4.6.3', 0, "needs a new diagram: Fresnel decomposition of linear polarization into counter-rotating circular components at z=0 and after propagating distance z")
NF('c.4.6.3', 1, "needs a new diagram: Fresnel decomposition of linear polarization into counter-rotating circular components at z=0 and after propagating distance z")
NF('c.4.6.3', 2, "needs a new diagram: Fresnel decomposition of linear polarization into counter-rotating circular components at z=0 and after propagating distance z")
NF('c.4.6.3', 3, "needs a new diagram: Fresnel decomposition of linear polarization into counter-rotating circular components at z=0 and after propagating distance z")
NS('c.1.1.4', "an exact geometric identity of the parabola (focus–directrix); the stage-by-stage diagram is the whole content")
NS('c.2.5.3', "Stokes' relations follow from time-reversal of a single split; nothing continuous to vary")
NS('c.4.6.3', "rotatory polarization is a static rotation of the plane of vibration; the stage-by-stage vector diagram is the whole content")
NS('c.1.1.5', "calculus extremum classification of Fermat optical path length; the geometric ray diagram and derivative sign test provide the complete physics")
NS('c.2.2.3', "spatial coherence criterion derived from geometric overlap of independent fringe patterns; static ray geometry and visibility threshold provide the complete picture")
NS('c.3.4.4', "algebraic summation method for Fresnel half-period zones; the geometric zone diagram and algebraic regrouping provide the complete explanation")
NS('c.4.1.3', "geometric orientation of principal ellipse axes; the rotated coordinate ellipse diagram provides the complete physical intuition")
