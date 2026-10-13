// Worked proofs and guided checks for the Module I PYQs, keyed by the past-paper id in ../../data/pyq.js.
// Each question has an idea, proof steps (text + a three-option check that unlocks the step's solution block),
// a conclusion, FAQ pairs, keywords and a retry prompt. `term` must name a concept title from the Module I pool.
// The full written answer in ../../data/pyq.js stays the question-bank copy; this file is the study-map proof.
const r = String.raw;
const FOCAL = "Principal Foci and Focal Length of a Thin Lens";
const LENS = "Thin-Lens Formula and the Lens-Maker's Equation";
const SURFACE = "Refraction at a Single Spherical Surface";
const MIRROR = "Reflection at a Spherical Mirror";
const MAG = "Lateral Magnification of a Thin Lens";
const OPL = "Optical Path and Fermat's Principle";
const EQPATH = "Equal Optical Path and Perfect Imaging";
const STAT = "Fermat Stationarity and the Second Derivative of Optical Path";
const REFL = "Law of Reflection from Fermat's Principle";
const SNELL = "Snell's Law of Refraction from Fermat's Principle";
const SIGN = "Sign Convention and the Paraxial Approximation";
const NEWTON = "Newton's Formula";
const NMAG = "Lateral Magnification of a Thin Lens";

const st = (title, text, prompt, options, explanation, term, correct = 0) => ({
  title, text, check: { prompt, options, correct, explanation, term },
});
const q = (idea, steps, conclusion, faq, keywords, retryPrompt) => ({ idea, steps, conclusion, faq, keywords, retryPrompt });

export default {
  "p.cu.op.39": q(
    r`A thin lens is one whose thickness is negligible, so both of its refractions can be treated as happening at one plane.`,
    [
      st("What must be small",
        r`Measure the lens thickness $t$, the radii $R_1$ and $R_2$, and the object distance $u$. The lens is thin when $t$ is much smaller than these lengths.`,
        r`Which quantity must be small for a lens to count as thin?`,
        [r`Its thickness $t$`, r`Its refractive index`, r`Its diameter`],
        r`Only the thickness must be small compared with the radii and the distances. That lets every distance be measured from one plane.`, FOCAL),
      st("Which faces can bound it",
        r`Each face is a spherical surface of radius $R$, or a plane face with $R$ infinite. Two spherical faces, or one plane and one spherical face, are enough.`,
        r`What is the radius of curvature of a plane face?`,
        [r`Infinite`, r`Zero`, r`Equal to the thickness`],
        r`A plane is a sphere of infinite radius, so a plane face is the special case $R\to\infty$.`, FOCAL),
      st("Why thinness helps",
        r`With negligible thickness the two refractions can be measured from one plane through the optical centre. That is what makes the thin-lens formulas simple.`,
        r`Where are all distances measured from for a thin lens?`,
        [r`One plane through the optical centre`, r`The front surface only`, r`The lens edge`],
        r`The optical centre is the single reference point for object and image distances once the thickness is dropped.`, LENS),
    ],
    r`A thin lens is bounded by spherical or plane faces whose separation is negligible compared with the radii and distances. All distances are then measured from its optical centre.`,
    [
      [r`What is a radius of curvature?`, r`It is the radius of the sphere that a curved surface is cut from. A flat face behaves like a sphere of infinite radius.`],
      [r`What is the optical centre of a lens?`, r`It is the point on the axis through which a ray passes without bending. Distances to objects and images are measured from it.`],
    ],
    ["thin lens|thin", "thickness|negligible thickness", "spherical surface|spherical face", "plane face|plane surface|infinite radius", "optical centre|optical center"],
    r`Without notes, say what must be negligible for a lens to count as thin, and name the two kinds of face that can bound it.`
  ),

  "p.cu.op.40": q(
    r`The first focus is the object point whose light leaves the lens parallel to the axis.`,
    [
      st("Where F1 lies",
        r`$F_1$ lies on the axis on the object side of a converging lens. A point source placed there sends out a parallel beam.`,
        r`Where is $F_1$ for a converging lens?`,
        [r`On the object side, on the axis`, r`On the image side, on the axis`, r`At the lens edge`],
        r`The first focus is defined on the object side.`, FOCAL),
      st("A ray through F1",
        r`A ray through the optical centre is undeviated. A ray through $F_1$ is bent by the lens into a path parallel to the axis.`,
        r`What does a ray through $F_1$ do after the lens?`,
        [r`Emerges parallel to the axis`, r`Passes straight through`, r`Converges to $F_1$`],
        r`That parallel emergence is the defining property of the first focus.`, FOCAL),
      st("Name by the image",
        r`An object at $F_1$ therefore forms its image at infinity. So $F_1$ is defined as the object point whose image is at infinity.`,
        r`An object placed at $F_1$ forms its image where?`,
        [r`At infinity`, r`At the lens`, r`At $F_2$`],
        r`Parallel emergent rays meet only at infinity, which is why the image is at infinity.`, FOCAL),
    ],
    r`$F_1$ is the object point whose image is at infinity. Its distance from the optical centre is the first focal length $f_1$.`,
    [
      [r`What is a focal point on the axis?`, r`A point on the axis that a lens links to two special kinds of ray: rays through it, and rays arriving parallel to the axis.`],
      [r`What is an undeviated ray?`, r`A ray that passes straight through the optical centre without changing direction.`],
    ],
    ["first principal focus|F1|first focus", "parallel to the axis|parallel", "image at infinity|infinity", "optical centre|centre", "object side|front"],
    r`Without notes, say where $F_1$ lies and what a ray through $F_1$ does after the lens.`
  ),

  "p.cu.op.41": q(
    r`Lateral magnification compares image height with object height, and its sign records orientation.`,
    [
      st("Define the heights",
        r`Let the object have transverse height $h_o$ and the image height $h_i$, both measured perpendicular to the axis.`,
        r`Which ratio is the lateral magnification?`,
        [r`$h_i/h_o$`, r`$h_o/h_i$`, r`$u/v$`],
        r`Magnification is the image height over the object height.`, MAG),
      st("Express with distances",
        r`For a thin lens with object distance $u$ and image distance $v$, similar triangles give $m=v/u$.`,
        r`For a thin lens, $m$ equals:`,
        [r`$v/u$`, r`$u/v$`, r`$f/v$`],
        r`The triangles through the optical centre give the ratio of image and object distances.`, MAG),
      st("Read the sign",
        r`$m>0$ means an erect image and $m<0$ an inverted one. A real image from a converging lens is inverted, so $m$ is negative there.`,
        r`A real image from a converging lens has $m$:`,
        [r`Negative, so it is inverted`, r`Positive, so it is erect`, r`Equal to 1`],
        r`Real images are inverted, which gives a negative magnification.`, MAG),
    ],
    r`$m=h_i/h_o=v/u$. Its sign shows whether the image is erect or inverted.`,
    [
      [r`What is a transverse height?`, r`The height of an object or image measured perpendicular to the optical axis, not along it.`],
      [r`How are similar triangles used in lens problems?`, r`Two triangles are similar when their angles match, so their sides are in a fixed ratio. Lines drawn from the object and image through the lens give such triangles.`],
    ],
    ["lateral magnification|transverse magnification|magnification", "image height|h i|h_i", "object height|h o|h_o", "erect|upright", "inverted", "v over u|v/u"],
    r`Define lateral magnification in words, give its formula for a thin lens, and say what a negative value means.`
  ),

  "p.cu.op.42": q(
    r`The power of a lens depends on its index relative to the surrounding medium, so the sign test uses $n_g/n_w$.`,
    [
      st("Lens-maker in a medium",
        r`For a lens in a medium of index $n_m$, $\dfrac{1}{f}=\left(\dfrac{n_g}{n_m}-1\right)\left(\dfrac{1}{R_1}-\dfrac{1}{R_2}\right)$.`,
        r`Which factor sets the medium-dependent part?`,
        [r`$n_g/n_m-1$`, r`$n_m$ alone`, r`$1/R_1+1/R_2$`],
        r`The bracket $n_g/n_m-1$ carries the medium, and it decides the sign.`, LENS),
      st("Biconvex geometry",
        r`For a biconvex lens with light from the left, $R_1>0$ and $R_2<0$, so $\dfrac{1}{R_1}-\dfrac{1}{R_2}>0$.`,
        r`For a biconvex lens, is $\dfrac{1}{R_1}-\dfrac{1}{R_2}$ positive?`,
        [r`Yes`, r`No`, r`Only if $n_g>1$`],
        r`With the Cartesian signs for a biconvex shape, the geometric bracket is positive.`, LENS),
      st("Evaluate the ratio",
        r`$1.5/1.33\approx 1.13$, which is above 1. So $n_g/n_m-1>0$ and $1/f>0$.`,
        r`Is $1.5/1.33$ greater than 1?`,
        [r`Yes, about 1.13`, r`No, about 0.89`, r`Equal to 1`],
        r`Glass is still more refractive than water, so the ratio exceeds 1.`, LENS),
      st("Conclusion",
        r`A positive focal length means a converging lens. In water the focal length is longer than in air, because the bracket is smaller. The lens diverges only if $n_g<n_m$.`,
        r`When would a biconvex glass lens diverge in water?`,
        [r`If $n_{glass}<n_{water}$`, r`If $n_{glass}>n_{water}$`, r`Never`],
        r`Divergence needs the glass to be less refractive than the medium.`, LENS),
    ],
    r`The biconvex glass lens still converges in water because $n_g/n_w>1$, but its power is weaker and its focal length longer.`,
    [
      [r`What is a refractive index?`, r`It is the ratio of the speed of light in vacuum to its speed in the medium.`],
      [r`What does it mean for a lens to be immersed in a liquid?`, r`The lens is surrounded by another medium, so light enters and leaves it from a different medium than air.`],
    ],
    ["lens-maker|lens maker's equation", "refractive index|index", "1.5 over 1.33|n g over n w", "converging|convergent", "diverging|divergent", "biconvex"],
    r`Explain in one line why the glass lens still converges in water, using the ratio of refractive indices.`
  ),

  "p.cu.op.43": q(
    r`The elliptical reflector sends every reflected path F1-P-F2 the same total length, which makes the travel time stationary.`,
    [
      st("Set the foci",
        r`An ellipse has foci $F_1$ and $F_2$, and every point $P$ on it satisfies $F_1P+PF_2=2a$, the major axis.`,
        r`For a point $P$ on an ellipse, $F_1P+PF_2$ equals:`,
        [r`$2a$, the major axis`, r`$a$`, r`$F_1F_2$`],
        r`The defining property of an ellipse fixes the sum of the two focal distances.`, EQPATH),
      st("Source at F1",
        r`A point source at $F_1$ sends rays that reflect off the ellipse at any point $P$ and pass through $F_2$.`,
        r`Where does a source at $F_1$ send its reflected rays?`,
        [r`Through $F_2$`, r`Through $F_1$ again`, r`Parallel to the axis`],
        r`The two foci are the source and the image point of the reflector.`, EQPATH),
      st("Compare times",
        r`Every reflected path $F_1PF_2$ has the same length $2a$, so the travel time is the same for every $P$. The time is stationary, with no first-order change between neighbouring paths.`,
        r`Do all reflected paths from $F_1$ to $F_2$ take the same time?`,
        [r`Yes, all equal to $2a/c$`, r`No, they differ`, r`Only the shortest one`],
        r`Equal optical length in air gives equal time, $2a/c$.`, OPL),
    ],
    r`Fermat's principle holds for every reflected path, so the ellipse images a point source at one focus onto the other focus.`,
    [
      [r`What are the foci of an ellipse?`, r`Two fixed points inside the ellipse. The ellipse is defined using their distances from any point on it.`],
      [r`What is the semi-major axis of an ellipse?`, r`Half of the longest diameter of the ellipse, usually written $a$.`],
    ],
    ["ellipse|elliptical", "focus|foci|F1|F2", "major axis|2a", "stationary|stationarity", "source at one focus|point source", "same time|equal time|equal path"],
    r`Explain why every reflected path $F_1PF_2$ takes the same time, and what that says about Fermat's principle.`
  ),

  "p.cu.op.44": q(
    r`Fermat's principle, applied to straight and bent paths, gives three standard results.`,
    [
      st("Straight line",
        r`In a uniform medium the optical path is stationary along a straight line. So light travels in straight lines.`,
        r`What does Fermat's principle give in a uniform medium?`,
        [r`Rectilinear propagation`, r`Circular rays`, r`Constant intensity`],
        r`Stationarity of the straight path is rectilinear propagation.`, OPL),
      st("Reflection",
        r`Varying the reflection point on a plane mirror makes the time stationary only when the angle of incidence equals the angle of reflection.`,
        r`Which law comes from varying the reflection point?`,
        [r`The law of reflection`, r`Ohm's law`, r`Gauss's law`],
        r`That is the derivation of the law of reflection from stationarity.`, REFL),
      st("Refraction",
        r`Varying the crossing point at an interface gives $n_1\sin\theta_1=n_2\sin\theta_2$.`,
        r`Which law comes from stationarity at an interface?`,
        [r`Snell's law`, r`Coulomb's law`, r`Boyle's law`],
        r`Snell's law is the refraction result of the same principle.`, SNELL),
      st("Count them",
        r`The three results are rectilinear propagation, the law of reflection, and Snell's law.`,
        r`How many results does the question ask for?`,
        [r`Three`, r`Two`, r`Four`],
        r`The question asks for the three standard results.`, OPL),
    ],
    r`Fermat's principle yields rectilinear propagation, the law of reflection and Snell's law.`,
    [
      [r`What is a homogeneous medium?`, r`A medium whose refractive index is the same at every point, so light travels at one speed in it.`],
      [r`What is a stationary path?`, r`A path along which a small change does not change the quantity to first order.`],
    ],
    ["rectilinear propagation|straight line", "law of reflection|angle of incidence|angle of reflection", "Snell's law|refraction", "stationary|variation|extremum", "three results"],
    r`List the three results of Fermat's principle and name the variation that produces each.`
  ),

  "p.cu.op.45": q(
    r`Stationary means the first variation vanishes. The point may be a minimum, a maximum or an inflection.`,
    [
      st("Write the optical path",
        r`The optical path $L=\int n\,ds$ depends on the whole path, not on a single point.`,
        r`What does the optical path $L$ equal?`,
        [r`$\int n\,ds$`, r`$\int ds/n$`, r`$n$ times the geometric length at one point`],
        r`The optical path weights each element of path by the index $n$.`, OPL),
      st("State the condition",
        r`Fermat's principle says $\delta L=0$ for the actual ray. Small variations of the path change $L$ only at second order.`,
        r`What condition does the actual ray satisfy?`,
        [r`$\delta L=0$`, r`$L=0$`, r`$L$ is always maximal`],
        r`Stationarity is the first-order condition for the actual path.`, STAT),
      st("Types of extremum",
        r`The stationary point may be a minimum, a maximum or an inflection. The second derivative decides which.`,
        r`Can the optical path be a maximum for the actual ray?`,
        [r`Yes, sometimes`, r`Never`, r`Only in air`],
        r`Least time is the usual case, but a maximum is possible.`, STAT),
    ],
    r`The actual ray makes the optical path stationary: a minimum, a maximum or an inflection, not necessarily a minimum.`,
    [
      [r`What is a derivative used for?`, r`It gives the rate at which a function changes. Where it is zero the function is flat at that point.`],
      [r`What are the possible shapes of a stationary point?`, r`A local minimum, a local maximum, or a point of inflection where the curve flattens and then keeps going in the same direction.`],
    ],
    ["extremum|stationary|stationarity", "optical path|optical path length", "minimum|maximum|inflection", "variation|small change", "second derivative"],
    r`Explain in your own words what extremum means and why the optical path need not be a minimum.`
  ),

  "p.cu.op.46": q(
    r`The image condition comes from requiring the optical path from $O$ to $I$ to be the same for all paraxial rays.`,
    [
      st("Set up the geometry",
        r`Take the pole $V$ as origin with light travelling left to right. Object $O$ is at $-u$, image $I$ at $+v$, and the centre $C$ at $+R$. A ray from $O$ meets the surface at $P$, at height $h$.`,
        r`For a convex surface with light from the left, where is the centre of curvature?`,
        [r`On the image side, at $+R$`, r`On the object side`, r`At the pole`],
        r`A convex surface bulges towards the object, so its centre lies on the image side.`, SIGN),
      st("The sagitta",
        r`The surface at height $h$ sits at $z_P\simeq h^2/(2R)$ from the pole.`,
        r`What is the sagitta to second order in $h$?`,
        [r`$h^2/(2R)$`, r`$h/R$`, r`$R/h^2$`],
        r`The sagitta is the second-order sag of a sphere.`, SURFACE),
      st("Expand the two legs",
        r`$OP\simeq u+\tfrac{h^2}{2}\left(\tfrac1u+\tfrac1R\right)$ and $PI\simeq v+\tfrac{h^2}{2}\left(\tfrac1v-\tfrac1R\right)$.`,
        r`Which term of $OP$ carries the dependence on $h$?`,
        [r`$\tfrac{h^2}{2}\left(\tfrac1u+\tfrac1R\right)$`, r`$u$ alone`, r`$h/u$`],
        r`Only the second-order term depends on $h$; the constant $u$ does not.`, SURFACE),
      st("Stationarity",
        r`Equal optical path needs the $h^2$ coefficient of $n_1OP+n_2PI$ to vanish. That gives $\dfrac{n_1}{u}+\dfrac{n_2}{v}=\dfrac{n_2-n_1}{R}$.`,
        r`The $h^2$ coefficient must:`,
        [r`Vanish`, r`Double`, r`Be negative`],
        r`If the coefficient did not vanish, rays at different heights would reach different points.`, SURFACE),
    ],
    r`For one refracting surface, $\dfrac{n_1}{u}+\dfrac{n_2}{v}=\dfrac{n_2-n_1}{R}$, the image condition from equal optical path.`,
    [
      [r`What is a sagitta?`, r`The distance along the axis between a curved surface's vertex plane and its surface at a given height above the axis.`],
      [r`Why do paraxial calculations keep only low powers of small heights?`, r`For small heights the square-root and sine expansions converge quickly, so the leading corrections are enough.`],
    ],
    ["image condition|image plane", "paraxial|paraxial approximation", "optical path|equal optical path", "sagitta", "pole|vertex", "centre of curvature|C", "h squared|h²"],
    r`Derive the image condition for one refracting surface from equal optical path, naming the sagitta and the $h^2$ term.`
  ),

  "p.cu.op.47": q(
    r`Equal optical path through the reflection point gives the mirror equation. An object inside $R/2$ gives a virtual image behind the mirror.`,
    [
      st("Reflection at P",
        r`The ray from $O$ reflects at $P$ on the mirror, and the reflected ray appears to come from a virtual image $I$ behind the mirror.`,
        r`For an object inside $R/2$ of a concave mirror, where is the image?`,
        [r`Virtual, behind the mirror`, r`Real, in front of the mirror`, r`At infinity`],
        r`The reflected rays diverge, so their extensions meet behind the mirror.`, MIRROR),
      st("Stationary path",
        r`The path $OP+PI$ is stationary with respect to the position of $P$. Expanding to second order in $h$ gives a constant plus an $h^2$ term.`,
        r`What is stationary in this derivation?`,
        [r`The path $OP+PI$ with respect to $P$`, r`The object distance`, r`The focal length`],
        r`Fermat's principle fixes the reflection point by stationarity of the path.`, EQPATH),
      st("Sagitta and coefficient",
        r`The concave sagitta $h^2/(2R)$ enters the $h^2$ coefficient. Requiring that coefficient to vanish gives the mirror relation.`,
        r`The concave mirror sagitta to second order is:`,
        [r`$h^2/(2R)$`, r`$h/R$`, r`$2R/h^2$`],
        r`It is the same second-order sag as for a refracting sphere.`, MIRROR),
      st("Sign for a virtual image",
        r`For a real image $1/u+1/v=2/R$. With $v$ a positive distance behind the mirror for a virtual image, $1/u-1/v=2/R$.`,
        r`Which form applies with $v$ a positive distance behind a concave mirror?`,
        [r`$1/u-1/v=2/R$`, r`$1/u+1/v=2/R$`, r`$1/u+1/v=R/2$`],
        r`The virtual image flips the sign of the image term.`, MIRROR),
    ],
    r`For $u<R/2$, $1/u-1/v=2/R$ with $v$ the virtual image distance behind the mirror, equivalent to $f=R/2$.`,
    [
      [r`What is a virtual image?`, r`A point from which rays appear to diverge, although they do not actually pass through it.`],
      [r`Where is the centre of curvature of a concave mirror?`, r`At the centre of the sphere the mirror is cut from, on the reflecting side of the mirror.`],
    ],
    ["mirror equation|mirror formula", "concave mirror|concave", "virtual image|virtual", "R over 2|focal length|f equals R/2", "reflection point|point P", "magnification"],
    r`Give the mirror equation for an object inside $R/2$ of a concave mirror, and say where the image lies.`
  ),

  "p.cu.op.48": q(
    r`Find the focal length from the lens-maker's equation, then find $u$ from the image position. The sign of $v$ decides whether the image is real or virtual.`,
    [
      st("Sign convention",
        r`Light travels left to right. $R_1=+50$ cm for the first surface. The second surface curves towards the incident side, so $R_2=-100$ cm.`,
        r`What is $R_2$ in Cartesian signs?`,
        [r`$-100$ cm`, r`$+100$ cm`, r`$0$`],
        r`For a biconvex lens the second surface's centre lies on the incident side, so $R_2$ is negative.`, LENS),
      st("Focal length",
        r`$\dfrac{1}{f}=(1.5-1)\left(\dfrac{1}{50}+\dfrac{1}{100}\right)=0.5\times0.03=0.015\ \text{cm}^{-1}$, so $f\approx66.7$ cm.`,
        r`What is $f$?`,
        [r`About 66.7 cm`, r`200 cm`, r`50 cm`],
        r`The bracket $1/R_1-1/R_2=0.03$ per cm gives $f\approx 66.7$ cm.`, LENS),
      st("Is the image real?",
        r`A real image of a converging lens lies beyond $f$. Since 60 cm is less than $f=66.7$ cm, the image cannot be real, so $v=-60$ cm.`,
        r`Is a real image at 60 cm possible here?`,
        [r`No, 60 cm is less than $f$`, r`Yes, always`, r`Only in water`],
        r`A real image must lie beyond the focal length, so the image must be virtual.`, FOCAL),
      st("Solve for u",
        r`$\dfrac{1}{v}-\dfrac{1}{u}=\dfrac{1}{f}$ with $v=-60$ gives $-\dfrac{1}{60}-\dfrac{1}{u}=0.015$, so $\dfrac1u\approx-0.0317$ and $u\approx-31.6$ cm.`,
        r`Solving gives $u\approx$`,
        [r`$-31.6$ cm`, r`$-600$ cm`, r`$+60$ cm`],
        r`The object is 31.6 cm in front of the lens, inside $f$. Taking $u=-600$ cm would give $v=75$ cm, not 60 cm.`, LENS),
    ],
    r`The object lies about 31.6 cm in front of the lens, inside $f$, and the image is virtual. No real-image solution exists with these radii.`,
    [
      [r`What do the Cartesian sign rules say?`, r`Distances are measured from the reference point, positive along the direction of light and negative against it.`],
      [r`What quantities does the lens-maker's equation use?`, r`The refractive index of the lens material and its surrounding medium, and the radii of its two faces with their signs.`],
    ],
    ["biconvex|converging lens", "lens-maker's equation", "virtual image|virtual", "real image|real", "sign convention|Cartesian", "focal length|f", "object distance|u"],
    r`State the sign of $R_2$ for a biconvex lens, find $f$, and say why the image at 60 cm must be virtual.`
  ),

  "p.cu.op.49": q(
    r`Stationarity of the travel time with respect to the reflection point gives the reflection law.`,
    [
      st("Set up the distances",
        r`Put source $A$ at height $a$ and point $B$ at height $b$ above a plane mirror, with horizontal separation $d$. A ray reflects at $P$, a horizontal distance $x$ from the foot of $A$'s perpendicular.`,
        r`What is the horizontal distance from $A$'s foot to $P$?`,
        [r`$x$`, r`$d$`, r`$a$`],
        r`$x$ is the position of the reflection point along the mirror.`, REFL),
      st("Write the path",
        r`The total path is $L(x)=\sqrt{a^2+x^2}+\sqrt{b^2+(d-x)^2}$.`,
        r`Which term is $\sqrt{b^2+(d-x)^2}$?`,
        [r`The path from $P$ to $B$`, r`The path from $A$ to $P$`, r`The total time`],
        r`The second term is the leg from the reflection point to $B$.`, REFL),
      st("Stationarity",
        r`Fermat gives $dL/dx=0$, so $\dfrac{x}{\sqrt{a^2+x^2}}=\dfrac{d-x}{\sqrt{b^2+(d-x)^2}}$.`,
        r`Which condition fixes the reflection point?`,
        [r`$dL/dx=0$`, r`$L=0$`, r`$d^2L/dx^2=0$ always`],
        r`Stationarity is the first-order condition on the reflection point.`, OPL),
      st("Angles",
        r`The left side is $\sin\theta_i$ and the right side is $\sin\theta_r$. Both angles are acute, so $\theta_i=\theta_r$.`,
        r`From equal sines with acute angles we get:`,
        [r`$\theta_i=\theta_r$`, r`$\theta_i=2\theta_r$`, r`$\theta_i+\theta_r=90^\circ$`],
        r`Equal sines of acute angles mean equal angles.`, REFL),
    ],
    r`Stationary travel time at the reflection point gives $\sin\theta_i=\sin\theta_r$, that is $\theta_i=\theta_r$.`,
    [
      [r`What is a plane mirror?`, r`A flat reflecting surface.`],
      [r`What does setting a derivative to zero find?`, r`The points where the function has a stationary value, such as a minimum.`],
    ],
    ["plane mirror|plane surface", "reflection point|point P", "stationary|dL/dx", "angle of incidence|theta i", "angle of reflection|theta r", "normal"],
    r`Derive the law of reflection from stationary travel time, showing the derivative and the sine equation.`
  ),

  "p.cu.op.50": q(
    r`The same paraxial argument as the image condition applies, and the answer needs a labelled diagram.`,
    [
      st("Draw the diagram",
        r`Draw the axis, the pole $V$, the centre $C$ at distance $R$ on the image side, the object $O$ at $u$ on the left, the image $I$ at $v$ on the right, the ray from $O$ meeting the surface at $P$, the normal $CP$, and the refracted ray $PI$.`,
        r`For a convex surface with light from the left, where is $C$?`,
        [r`On the image side`, r`On the object side`, r`At $O$`],
        r`A convex surface curves towards the object, so the centre is on the image side.`, SIGN),
      st("Optical path",
        r`The optical path $n_1\,OP+n_2\,PI$ must be the same for all paraxial rays from $O$ that reach $I$.`,
        r`What must be equal for all rays from $O$ to $I$?`,
        [r`$n_1 OP+n_2 PI$`, r`$OP$ alone`, r`The angles only`],
        r`Equal optical path is the condition for a perfect image.`, EQPATH),
      st("Expand",
        r`With sagitta $h^2/(2R)$: $OP\simeq u+\tfrac{h^2}{2}\left(\tfrac1u+\tfrac1R\right)$ and $PI\simeq v+\tfrac{h^2}{2}\left(\tfrac1v-\tfrac1R\right)$.`,
        r`The sagitta of the convex surface is:`,
        [r`$h^2/(2R)$`, r`$R/h$`, r`$h/(2R)$`],
        r`The sag of a sphere to second order is $h^2/(2R)$.`, SURFACE),
      st("Result",
        r`The coefficient of $h^2$ must vanish, giving $\dfrac{n_1}{u}+\dfrac{n_2}{v}=\dfrac{n_2-n_1}{R}$.`,
        r`Which relation results?`,
        [r`$\dfrac{n_1}{u}+\dfrac{n_2}{v}=\dfrac{n_2-n_1}{R}$`, r`$n_1+n_2=0$`, r`$u=v$`],
        r`That is the refraction formula for a convex surface.`, SURFACE),
    ],
    r`The paraxial equal-optical-path condition gives $\dfrac{n_1}{u}+\dfrac{n_2}{v}=\dfrac{n_2-n_1}{R}$, shown on a labelled diagram.`,
    [
      [r`What does a ray diagram for refraction usually show?`, r`The axis, the pole, the centre of curvature, the object and image points, the ray, the normal at the point of incidence, and the angles.`],
      [r`What is a paraxial ray?`, r`A ray that stays close to the axis, so its angles are small.`],
    ],
    ["labelled diagram|ray diagram", "pole|vertex", "centre of curvature|C", "paraxial|paraxial approximation", "convex surface", "equal optical path"],
    r`Draw the labelled diagram and state the equal-optical-path condition that gives the refraction formula.`
  ),

  "p.cu.op.51": q(
    r`Define the foci by their images first, then use the lens-maker's equation with $R_1=+20$ cm and $R_2=-20$ cm.`,
    [
      st("Define F1",
        r`$F_1$ is the object point whose image is at infinity.`,
        r`What does an object at $F_1$ produce?`,
        [r`An image at infinity`, r`A virtual image at the lens`, r`No image`],
        r`That is the definition of the first principal focus.`, FOCAL),
      st("Define F2",
        r`$F_2$ is the image point for an object at infinity.`,
        r`Where is the image of an object at infinity?`,
        [r`At $F_2$`, r`At $F_1$`, r`At the lens`],
        r`That is the definition of the second principal focus.`, FOCAL),
      st("Sign convention",
        r`For a biconvex lens with light from the left, $R_1=+20$ cm and $R_2=-20$ cm.`,
        r`For a biconvex lens with light from the left, what is $R_2$?`,
        [r`$-20$ cm`, r`$+20$ cm`, r`$0$`],
        r`The second surface's centre is on the incident side, so $R_2$ is negative.`, LENS),
      st("Focal length",
        r`$\dfrac{1}{f}=(1.5-1)\left(\dfrac{1}{20}+\dfrac{1}{20}\right)=0.05\ \text{cm}^{-1}$, so $f=20$ cm.`,
        r`What is $f$?`,
        [r`$20$ cm`, r`$10$ cm`, r`$40$ cm`],
        r`The lens-maker bracket is $0.05$ per cm, so $f=20$ cm.`, LENS),
    ],
    r`$F_1$ and $F_2$ are defined by their images, and the focal length of the biconvex lens is $f=20$ cm.`,
    [
      [r`What is a biconvex lens?`, r`A lens whose two faces both bulge outward.`],
      [r`What does an object at infinity mean?`, r`A distant object whose rays arrive at the lens essentially parallel to the axis.`],
    ],
    ["first principal focus|F1", "second principal focus|F2", "image at infinity|infinity", "biconvex", "lens-maker's equation", "focal length"],
    r`Define both principal foci and compute the focal length of the biconvex lens with radii 20 cm.`
  ),

  "p.cu.op.52": q(
    r`Two pairs of similar triangles, one through each focus, give the magnification two ways. Equating them gives Newton's formula.`,
    [
      st("Ray through F1",
        r`A ray from the top of the object through $F_1$ emerges parallel to the axis. Similar triangles give $\dfrac{h_i}{h_o}=\dfrac{f}{x_1}$.`,
        r`Which relation comes from the ray through $F_1$?`,
        [r`$h_i/h_o=f/x_1$`, r`$h_i/h_o=x_1/f$`, r`$h_i/h_o=1$`],
        r`That ray gives the ratio of the focal length to $x_1$.`, NEWTON),
      st("Ray parallel to the axis",
        r`A ray from the top parallel to the axis passes through $F_2$. Similar triangles give $\dfrac{h_i}{h_o}=\dfrac{x_2}{f}$.`,
        r`Which relation comes from the parallel ray?`,
        [r`$h_i/h_o=x_2/f$`, r`$h_i/h_o=f/x_2$`, r`$h_i/h_o=x_2f$`],
        r`That ray gives $x_2/f$.`, NEWTON),
      st("Equate",
        r`$\dfrac{f}{x_1}=\dfrac{x_2}{f}$, hence $x_1x_2=f^2$.`,
        r`Cross-multiplying $f/x_1=x_2/f$ gives:`,
        [r`$x_1x_2=f^2$`, r`$x_1+x_2=f$`, r`$x_1=x_2$`],
        r`Cross-multiplication is the step that produces Newton's formula.`, NEWTON),
      st("Magnification",
        r`So $m=\dfrac{h_i}{h_o}=\dfrac{f}{x_1}=\dfrac{x_2}{f}$.`,
        r`Which expression is the magnification?`,
        [r`$f/x_1=x_2/f$`, r`$x_1/f$ only`, r`$f+x_2$`],
        r`Both forms of the magnification follow from the two triangle pairs.`, NMAG),
    ],
    r`Newton's formula $x_1x_2=f^2$ follows from two similar-triangle pairs, and the magnification is $m=f/x_1=x_2/f$.`,
    [
      [r`What is a similar triangle?`, r`Two triangles with equal angles, so corresponding sides are in the same ratio.`],
      [r`How is a focal length measured along the axis?`, r`From the optical centre to the focal point.`],
    ],
    ["Newton's formula|x1 x2 = f²", "similar triangles", "magnification|m", "ray through F1", "ray parallel to axis", "F1|F2"],
    r`Draw the two rays from the top of the object and derive $x_1x_2=f^2$, then give $m$ in two forms.`
  ),
};
