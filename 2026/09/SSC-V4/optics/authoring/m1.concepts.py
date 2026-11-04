# Module I — Fermat's Principle and the geometrical optics that follows from it.
# Ghatak, Optics 6e, §3.1–3.2 and §4.1–4.7.  Sign convention throughout: Cartesian,
# distances measured from the vertex, positive in the direction the light travels.

# ── 1.1  Laws of reflection and refraction from Fermat's principle ─────────────
C('c.1.1.1', '1.1', 'definition', "Optical Path and Fermat's Principle",
  "Light between two points takes a path along which the optical path length ∫n ds is stationary.",
  r'''In a medium of refractive index $n(x,y,z)$ the light takes time $d\tau = n\,ds/c$ to cover an element of path $ds$. The <b>optical path length</b> from $A$ to $B$ along a curve $C$ is
$$L_{\rm op}=\int_{A(C)}^{B} n\,ds = c\,\tau .$$
<b>Fermat's principle.</b> The actual ray from $A$ to $B$ is the path along which $L_{\rm op}$ is <i>stationary</i> against small changes of the path:
$$\delta\int_A^B n\,ds = 0 .$$
Stationary means a minimum, a maximum or a point of inflection — not always a minimum.''',
  r'''$n\,ds$ is "how far light would have gone in vacuum in the same time". Fermat's principle says nature charges every path in that currency and the ray sits where a tiny detour changes the bill only at second order. In a uniform medium $n$ is constant, so the stationary path is the shortest one — a straight line — which is the whole content of "light travels in straight lines".''',
  needs=[],
  traps=[r'Saying light takes the path of <i>least time</i>. That is the usual case, not the law. Reflection from a concave mirror that curves more sharply than the ellipsoid (foci $A$, $B$) touching it at the reflection point gives a path <i>longer</i> than its neighbours — a maximum — and it is still a genuine ray.',
         r'Comparing geometric lengths instead of optical ones. A shorter route through glass can cost more optical path than a longer route through air.'],
  cards=[('State Fermat\'s principle and the definition of optical path length.',
          r'$\delta\int_A^B n\,ds=0$: the ray is a path of stationary optical path length $L_{\rm op}=\int n\,ds$ (equal to $c$ times the transit time).'),
         ('Why does light travel in straight lines in a homogeneous medium?',
          r'$n$ is constant, so $L_{\rm op}=n\times$(geometric length); stationarity means the geometric length is stationary, which is a straight line.'),
         ('Is the Fermat path always the path of minimum time?',
          r'No. It is a path of <i>stationary</i> optical length: a minimum, a maximum or an inflection.')])

C('c.1.1.2', '1.1', 'theorem', "Law of Reflection from Fermat's Principle",
  "Stationary optical path forces the incident ray, the normal and the reflected ray into one plane with i = r.",
  r'''For a plane mirror $MN$, light from $A$ reaches $B$ by reflection at a point $P$ of the mirror only if $P$ makes $AP+PB$ stationary. This happens exactly when
$$\text{the incident ray, the normal at }P\text{ and the reflected ray are coplanar, and}\quad i=r .$$''',
  r'''Fold the picture along the mirror. The reflected leg $PB$ becomes a continuation of the incident leg $AP$ into the mirror world, and the shortest way between two points in one world is the straight line. A straight line through the fold is exactly the law of reflection.''',
  needs=['c.1.1.1'],
  traps=[r'Measuring $i$ and $r$ from the mirror surface instead of from the normal — the law is about angles to the <b>normal</b>.',
         r'Forgetting the coplanarity half of the law: it is as much a part of the statement as $i=r$.'],
  cards=[('State the law of reflection.',
          r'The incident ray, the reflected ray and the normal lie in one plane (the plane of incidence) and the angle of incidence equals the angle of reflection, $i=r$.'),
         ('What single geometric trick turns Fermat\'s principle into $i=r$?',
          r'Reflect $A$ in the mirror to $A^{\prime}$. Then $AP=A^{\prime}P$, and $A^{\prime}P+PB$ is least when $A^{\prime},P,B$ are collinear.')],
  proof=dict(
      idea="Replace the reflected path by a straight line using the mirror image of $A$.",
      why="The total path length $AP+PB$ is what Fermat's principle asks us to extremise; the image point removes the kink.",
      rungs=[
        ("Put the mirror on the line $y=0$, $A=(0,a)$, $B=(d,b)$, and let the ray touch the mirror at $P=(x,0)$. Write the path length.",
         r'$$L(x)=\sqrt{a^{2}+x^{2}}+\sqrt{b^{2}+(d-x)^{2}}$$',
         "One free parameter $x$: the point where the ray meets the mirror."),
        ("Demand that the path length be stationary.",
         r'$$\frac{dL}{dx}=\frac{x}{\sqrt{a^{2}+x^{2}}}-\frac{d-x}{\sqrt{b^{2}+(d-x)^{2}}}=0$$',
         "The two terms are exactly $\\sin i$ and $\\sin r$ measured from the vertical normal."),
        ("Read the two fractions as sines of the angles the legs make with the normal.",
         r'$$\sin i=\sin r\;\Longrightarrow\; i=r$$',
         "Both angles lie in $[0,\\pi/2]$, so equal sines mean equal angles."),
        ("Coplanarity: $A$, $B$ and the normal at $P$ all lie in the vertical plane through $A$ and $B$. Had $P$ been displaced sideways out of that plane, $AP+PB$ would only grow.",
         r'$$\text{plane of incidence}\ni AP,\;PB,\;\text{normal}$$',
         "So the sideways variation is automatically stationary at zero displacement.")],
      ends=r"The law of reflection, $i=r$ with all three lines in one plane."))

C('c.1.1.3', '1.1', 'theorem', "Snell's Law of Refraction from Fermat's Principle",
  "Stationary optical path across a plane interface gives n₁ sin θ₁ = n₂ sin θ₂.",
  r'''At a plane interface between media of refractive indices $n_1$ and $n_2$, the ray from $A$ (in medium 1) to $B$ (in medium 2) is the one for which
$$n_1\sin\theta_1=n_2\sin\theta_2 ,$$
with the incident ray, refracted ray and normal in one plane. $\theta_1,\theta_2$ are measured from the normal.''',
  r'''Crossing the boundary costs less per metre on the side with the smaller $n$, so the ray spends more of its journey there and bends toward the normal in the denser medium. It is exactly the lifeguard problem: run farther on sand where you are fast, swim less where you are slow.''',
  needs=['c.1.1.1', 'c.1.1.2'],
  traps=[r'Writing the law with the wrong ratio: it is $n_1\sin\theta_1=n_2\sin\theta_2$, so the ray bends <i>toward</i> the normal on entering the higher index.',
         r'Using the angle to the surface instead of the normal.',
         r'Applying it beyond the critical angle: for $n_1>n_2$ and $\sin\theta_1>n_2/n_1$ no real $\theta_2$ exists (total internal reflection).'],
  cards=[("State Snell's law.",
          r'$n_1\sin\theta_1=n_2\sin\theta_2$, with incident ray, refracted ray and normal coplanar.'),
         ('In the Fermat derivation of Snell\'s law, what is the function that is made stationary?',
          r'$L(x)=n_1\sqrt{a^2+x^2}+n_2\sqrt{b^2+(d-x)^2}$, with $x$ the crossing point along the interface.'),
         ('Light enters glass ($n=1.5$) from air at $30^\\circ$. What is the refraction angle?',
          r'$\sin\theta_2=\sin30^\circ/1.5=1/3$, so $\theta_2\approx19.5^\circ$.')],
  proof=dict(
      idea="Write the optical path through a crossing point $x$ on the interface and set its derivative to zero.",
      why="Only the crossing point is free; the two legs are straight because each lies in a uniform medium.",
      rungs=[
        (r"Let the interface be $y=0$, $A=(0,a)$ in medium 1 above it, $B=(d,-b)$ in medium 2 below, and $R=(x,0)$ the crossing point.",
         r'$$L(x)=n_1\sqrt{a^{2}+x^{2}}+n_2\sqrt{b^{2}+(d-x)^{2}}$$',
         "The optical path is $n_1\\,AR+n_2\\,RB$."),
        ("Stationarity.",
         r'$$\frac{dL}{dx}=n_1\frac{x}{\sqrt{a^{2}+x^{2}}}-n_2\frac{d-x}{\sqrt{b^{2}+(d-x)^{2}}}=0$$',
         "Each fraction is the sine of the angle its leg makes with the vertical normal."),
        ("Identify the sines.",
         r'$$\sin\theta_1=\frac{x}{\sqrt{a^{2}+x^{2}}},\qquad \sin\theta_2=\frac{d-x}{\sqrt{b^{2}+(d-x)^{2}}}$$',
         "$\\theta_1$ is the angle in medium 1, $\\theta_2$ in medium 2."),
        ("Substitute.",
         r'$$n_1\sin\theta_1=n_2\sin\theta_2$$',
         "Snell's law. Coplanarity follows as in the reflection case.")],
      ends="Snell's law of refraction."))

C('c.1.1.4', '1.1', 'theorem', "Equal Optical Path and Perfect Imaging",
  "A surface images $P$ exactly onto $Q$ only if every ray from $P$ to $Q$ has the same optical path.",
  r'''If all rays leaving $P$ are brought together at $Q$ by a reflecting or refracting surface, then by Fermat's principle every one of those rays must have the <b>same optical path length</b>:
$$L_{\rm op}(P\to Q)=\text{constant for every ray}.$$
Examples: a paraboloidal mirror sends rays parallel to its axis through its focus; an ellipsoidal mirror sends rays from one focus through the other.''',
  r'''Stationarity is not enough for a whole family of rays: if a hundred different paths all connect $P$ to $Q$ and are all genuine rays, none can be longer than the others or Fermat's principle would single one out. An image is a point where all optical paths tie — the same statement as "all waves arrive in phase".''',
  needs=['c.1.1.1', 'c.1.1.2'],
  traps=[r'Assuming a spherical mirror focuses perfectly. It has equal optical path only for rays near the axis (paraxial), which is exactly why spherical aberration exists.'],
  cards=[('What condition must all rays from $P$ to its perfect image $Q$ satisfy?',
          r'They must all have the same optical path length from $P$ to $Q$.'),
         ('Why does a paraboloidal mirror focus parallel light perfectly?',
          r'Because $PQ+QS=PQ+QL^{\prime}=PL^{\prime}$ for every ray, where $L^{\prime}$ lies on the directrix: the optical path to the focus is the same for every reflection point.')],
  proof=dict(
      idea="Use the focus–directrix property of the parabola to show that all reflected paths have equal length.",
      why="Equal path length is the criterion; the parabola's definition supplies the equal length.",
      rungs=[
        ("A parabola has focus $S$ and directrix $AB$; every point $Q$ on it satisfies $QS=QL^{\\prime}$, where $QL^{\\prime}$ is the perpendicular to the directrix.",
         r'$$QS=QL^{\prime}$$',
         "This is the defining property of the parabola."),
        ("Take a ray parallel to the axis, from a point $P$ on a fixed plane wavefront, striking the mirror at $Q$. The path from $P$ to $S$ is",
         r'$$L_{\rm op}=PQ+QS=PQ+QL^{\prime}=PL^{\prime}$$',
         "$P$, $Q$, $L^{\\prime}$ are collinear because the ray is parallel to the axis and $QL^{\\prime}$ is perpendicular to the directrix."),
        ("$PL^{\\prime}$ is the perpendicular distance from the wavefront to the directrix.",
         r'$$PL^{\prime}=\text{const, the same for every }Q$$',
         "Every reflection point gives the same optical path to $S$.")],
      ends="All parallel rays reach the focus with equal optical path, so the paraboloid images the point at infinity perfectly onto $S$."))

# ── 1.2  Refraction and reflection at a single spherical surface ───────────────
C('c.1.2.1', '1.2', 'definition', "Sign Convention and the Paraxial Approximation",
  "Distances run from the vertex, positive along the light; only rays close to the axis are treated.",
  r'''<b>Cartesian sign convention.</b> Light travels left to right. All distances are measured from the vertex $O$ of the surface (or the centre of the lens): positive to the right, negative to the left; heights are positive above the axis. A radius $R$ is positive when the centre of curvature $C$ lies to the right of $O$.
<b>Paraxial approximation.</b> Rays making small angles $\alpha$ with the axis, so $\sin\alpha\simeq\tan\alpha\simeq\alpha$ and $\cos\alpha\simeq1$.''',
  r'''The formulas of the next sections need one rule for signs so that a single equation covers convex, concave, real and virtual cases. The paraxial limit throws away the cubic corrections in $\sin$, which is what makes every ray from one point meet at one image point.''',
  needs=[],
  traps=[r'Forgetting that a real object to the <i>left</i> of a surface has a <b>negative</b> $u$.',
         r'Mixing the Cartesian convention here with the "real-is-positive" convention of school texts inside one calculation.'],
  cards=[('In the Cartesian sign convention, what is the sign of $u$ for a real object and of $R$ for a surface convex toward the incoming light?',
          r'$u<0$ (the object is left of the vertex); $R>0$ (the centre of curvature lies to the right of the vertex).'),
         ('What does the paraxial approximation replace?',
          r'$\sin\alpha$ and $\tan\alpha$ by $\alpha$, and $\cos\alpha$ by $1$, for small angles to the axis.')])

C('c.1.2.2', '1.2', 'theorem', "Refraction at a Single Spherical Surface",
  "A spherical boundary of radius R between n₁ and n₂ obeys n₂/v − n₁/u = (n₂ − n₁)/R.",
  r'''For a spherical surface of radius $R$ separating a medium of index $n_1$ (object side) from $n_2$, a paraxial point object at distance $u$ forms an image at distance $v$ with
$$\boxed{\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}}$$
The right side is the <b>power</b> of the surface. Distances follow the Cartesian convention.''',
  r'''The surface converts a diverging spherical wave into a converging one. The amount of extra curvature it adds is the difference $n_2-n_1$ divided by $R$ — a more strongly curved boundary or a bigger index step bends more, and the equation just says "curvature out = curvature in + power".''',
  needs=['c.1.1.3', 'c.1.2.1'],
  traps=[r'Using $u$ as a positive number and forgetting the sign: for a real object $u$ is negative, so $-n_1/u=+n_1/|u|$.',
         r'Swapping $n_1$ and $n_2$: $n_1$ is always the medium the light comes <i>from</i>.'],
  cards=[('State the refraction equation for a single spherical surface.',
          r'$\dfrac{n_2}{v}-\dfrac{n_1}{u}=\dfrac{n_2-n_1}{R}$ (Cartesian convention, paraxial rays).'),
         ('Air to glass ($n=1.5$), convex surface $R=+10$ cm, object at $u=-30$ cm. Where is the image?',
          r'$\dfrac{1.5}{v}=\dfrac{1}{-30}+\dfrac{0.5}{10}=0.0167$ cm$^{-1}$, so $v=+90$ cm (real image inside the glass).')],
  proof=dict(
      idea="Apply Snell's law in the small-angle form at the point of incidence and relate every angle to $u$, $v$ and $R$.",
      why="Small angles turn the trigonometry into similar-triangle algebra and produce a linear relation among $1/u$, $1/v$ and $1/R$.",
      rungs=[
        ("A ray from the axis point $O_{\\rm b}$ (distance $u$) strikes the surface at height $h$ and meets the axis again at $I$. With the centre of curvature $C$, let the ray make angles $\\alpha$ (with the axis), $\\gamma$ (radius $CP$ with the axis) and $\\beta$ (refracted ray with the axis).",
         r'$$\theta_1=\alpha+\gamma,\qquad \theta_2=\gamma-\beta$$',
         "Exterior angles of the two triangles $O_{\\rm b}PC$ and $PIC$."),
        ("Snell's law in the paraxial limit: $n_1\\theta_1=n_2\\theta_2$.",
         r'$$n_1(\alpha+\gamma)=n_2(\gamma-\beta)$$',
         "$\\sin\\theta\\simeq\\theta$ for every angle here."),
        ("In the paraxial limit the angles are height over distance, keeping signs.",
         r'$$\alpha\simeq-\frac{h}{u},\qquad \beta\simeq\frac{h}{v},\qquad \gamma\simeq\frac{h}{R}$$',
         "The minus sign for $\\alpha$ is because $u<0$ while $\\alpha>0$ for a ray inclined toward the axis."),
        ("Substitute and cancel $h$.",
         r'$$n_1\Big(\frac{h}{R}-\frac{h}{u}\Big)=n_2\Big(\frac{h}{R}-\frac{h}{v}\Big)\;\Longrightarrow\;\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}$$',
         "$h$ cancels, so all paraxial rays from the object converge to the same $v$: a genuine image.")],
      ends="The refraction formula for a single spherical surface."))

C('c.1.2.3', '1.2', 'definition', "Principal Foci and Focal Lengths of a Surface",
  "The first and second focal lengths are f₁ = −n₁R/(n₂−n₁) and f₂ = n₂R/(n₂−n₁).",
  r'''The <b>second focal point</b> $F_2$ is the image of an object at infinity ($u\to-\infty$): its distance from the vertex is
$$f_2=\frac{n_2R}{n_2-n_1}.$$
The <b>first focal point</b> $F_1$ is the object point whose image is at infinity ($v\to\infty$):
$$f_1=-\frac{n_1R}{n_2-n_1}.$$
They satisfy $\dfrac{f_2}{f_1}=-\dfrac{n_2}{n_1}$ and the surface power is $P=\dfrac{n_2}{f_2}=-\dfrac{n_1}{f_1}=\dfrac{n_2-n_1}{R}$.''',
  r'''Put $u\to\infty$ in the surface equation and the left term $-n_1/u$ vanishes, so $v=f_2$; put $v\to\infty$ and $n_2/v$ vanishes, so $u=f_1$. Because the two media differ, the two focal lengths differ — their ratio is minus the ratio of the indices.''',
  needs=['c.1.2.2'],
  traps=[r'Assuming $f_1=f_2$ in magnitude. That is true only for a thin lens with the same medium on both sides, not for a single surface.'],
  cards=[('Give $f_1$ and $f_2$ for a spherical surface, and their ratio.',
          r'$f_1=-\dfrac{n_1R}{n_2-n_1}$, $f_2=\dfrac{n_2R}{n_2-n_1}$, and $f_2/f_1=-n_2/n_1$.'),
         ('What is the power of a spherical refracting surface?',
          r'$P=\dfrac{n_2-n_1}{R}=\dfrac{n_2}{f_2}$.')])

C('c.1.2.4', '1.2', 'theorem', "Reflection at a Spherical Mirror",
  "A spherical mirror of radius R obeys 1/v + 1/u = 2/R, so its focal length is f = R/2.",
  r'''A spherical mirror is a refracting surface with $n_2=-n_1$ (the light reverses direction). Setting this in the refraction formula gives
$$\boxed{\frac1v+\frac1u=\frac2R}$$
The focal length is $f=R/2$: parallel rays focus at half the radius.''',
  r'''Reflection is "refraction into a medium of negative index" only as bookkeeping, but it saves a separate derivation: the sign of $n_2$ carries the reversal of direction. A concave mirror ($C$ on the incoming side, $R<0$) has $f<0$ — a real focus in front of it.''',
  needs=['c.1.2.2'],
  traps=[r'Using $f=R/2$ without a sign: in the Cartesian convention a concave mirror has $R<0$ and $f<0$.'],
  cards=[('State the mirror formula and focal length in the Cartesian convention.',
          r'$\dfrac1v+\dfrac1u=\dfrac2R$ and $f=R/2$.'),
         ('How do you get the mirror formula from the refraction formula?',
          r'Put $n_2=-n_1$: $-n_1/v-n_1/u=-2n_1/R$, i.e. $1/v+1/u=2/R$.')],
  proof=dict(
      idea="Reflection reverses the direction of travel, which the refraction formula encodes as a negative index.",
      why="This is a one-line derivation from a result already proved.",
      rungs=[
        ("Start from the refraction formula.",
         r'$$\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}$$',
         "The formula holds for any two media."),
        ("Set $n_2=-n_1$: after reflection the ray travels backward, and $v$ is measured against it.",
         r'$$-\frac{n_1}{v}-\frac{n_1}{u}=\frac{-2n_1}{R}$$',
         "The index stays $n_1$ in magnitude because the medium is unchanged."),
        ("Cancel $-n_1$.",
         r'$$\frac1v+\frac1u=\frac2R$$',
         "Set $u\\to-\\infty$ to read off the focal point at $v=R/2$.")],
      ends=r"The mirror formula, and $f=R/2$."))

C('c.1.2.5', '1.2', 'theorem', "Lateral Magnification at a Single Surface",
  "The transverse magnification of a spherical surface is m = n₁v/(n₂u).",
  r'''The <b>lateral magnification</b> is $m=h_{\rm i}/h_{\rm o}$, the image height over the object height (both with sign). For a single spherical surface,
$$\boxed{m=\frac{n_1\,v}{n_2\,u}}$$
$m<0$ means the image is inverted; $|m|>1$ means enlarged.''',
  r'''The ray through the vertex is the easy one to follow: it meets the surface at a tiny angle and bends by Snell's law with no help from the curvature. Similar triangles on either side of the vertex, joined by $n_1\theta_1=n_2\theta_2$, give the ratio.''',
  needs=['c.1.2.2'],
  traps=[r'Dropping the index ratio: $m=v/u$ holds only when the medium is the same on both sides (thin lens or mirror).'],
  cards=[('Give the lateral magnification at a single spherical refracting surface.',
          r'$m=\dfrac{n_1v}{n_2u}$.'),
         ('What does a negative $m$ mean?',
          r'The image is inverted relative to the object.')],
  proof=dict(
      idea="Follow the single ray that goes through the vertex, where the surface is locally flat.",
      why="At the vertex the normal is the axis, so Snell's law applies with the ray's own angles.",
      rungs=[
        ("An object of height $h_{\\rm o}$ at distance $u$ sends a ray to the vertex $O$; it makes angle $\\theta_1$ with the axis, and after refraction angle $\\theta_2$.",
         r'$$\theta_1\simeq\frac{h_{\rm o}}{u},\qquad \theta_2\simeq\frac{h_{\rm i}}{v}$$',
         "Signed slopes of the incident and refracted rays (both measured from the axis, which is the normal at the vertex); $u<0$ makes $\\theta_1<0$ for an upright object, i.e. the ray descends."),
        ("Paraxial Snell's law at the vertex.",
         r'$$n_1\theta_1=n_2\theta_2\;\Rightarrow\;n_1\frac{h_{\rm o}}{u}=n_2\frac{h_{\rm i}}{v}$$',
         "Small angles: $\\sin\\theta\\simeq\\tan\\theta$."),
        ("Solve for the ratio of heights.",
         r'$$m=\frac{h_{\rm i}}{h_{\rm o}}=\frac{n_1\,v}{n_2\,u}$$',
         "For a real object and a real image $v>0>u$, so $m<0$: inverted.")],
      ends=r"$m=n_1v/(n_2u)$."))

# ── 1.3  The thin lens ─────────────────────────────────────────────────────────
C('c.1.3.1', '1.3', 'theorem', "Thin-Lens Formula and the Lens-Maker's Equation",
  "A thin lens of index n in air obeys 1/v − 1/u = 1/f with 1/f = (n−1)(1/R₁ − 1/R₂).",
  r'''A thin lens of index $n$ in air, with surfaces of radii $R_1$ (first) and $R_2$ (second), forms an image at $v$ of an object at $u$ with
$$\boxed{\frac1v-\frac1u=\frac1f},\qquad \boxed{\frac1f=(n-1)\Big(\frac1{R_1}-\frac1{R_2}\Big)}$$
the second is the <b>lens-maker's equation</b>.''',
  r'''A thin lens is two refracting surfaces with nothing between them, so the image formed by the first is the object of the second and the two powers simply add: $P=P_1+P_2$. The result depends on $n$, $R_1$, $R_2$ only, which is why a lens can be designed on paper.''',
  needs=['c.1.2.2', 'c.1.2.3'],
  traps=[r'Losing the sign in $1/R_1-1/R_2$: for a biconvex lens $R_1>0$ and $R_2<0$, so the bracket is positive and $f>0$.',
         r'Using $1/v+1/u=1/f$ (the "real is positive" form) with the Cartesian signs of this course — the sign of $u$ flips the equation.'],
  cards=[('State the thin-lens formula and the lens-maker\'s equation.',
          r'$\dfrac1v-\dfrac1u=\dfrac1f$ and $\dfrac1f=(n-1)\Big(\dfrac1{R_1}-\dfrac1{R_2}\Big)$.'),
         ('A biconvex lens has $R_1=+20$ cm, $R_2=-20$ cm, $n=1.5$. Find $f$.',
          r'$1/f=0.5(1/20+1/20)=0.05$ cm$^{-1}$, so $f=+20$ cm.'),
         ('Why do the two surface powers just add for a thin lens?',
          r'The image from surface 1 is the object for surface 2 and the thickness between them is negligible, so $1/v-1/u=(n-1)/R_1+(1-n)/R_2$.')],
  proof=dict(
      idea="Apply the single-surface formula twice; the intermediate image is the object of the second surface.",
      why="Thin means the vertex separation is negligible, so $v_1$ can be used directly as $u_2$.",
      rungs=[
        ("Surface 1 (air $\\to$ glass) forms an intermediate image at $v_1$ from the object at $u$.",
         r'$$\frac{n}{v_1}-\frac{1}{u}=\frac{n-1}{R_1}$$',
         "First surface: $n_1=1$, $n_2=n$."),
        ("Surface 2 (glass $\\to$ air) treats that image as its object, at distance $v_1$ (thin lens), and forms the final image at $v$.",
         r'$$\frac{1}{v}-\frac{n}{v_1}=\frac{1-n}{R_2}$$',
         "Second surface: $n_1=n$, $n_2=1$."),
        ("Add the two equations; the term $n/v_1$ cancels.",
         r'$$\frac1v-\frac1u=(n-1)\Big(\frac1{R_1}-\frac1{R_2}\Big)$$',
         "The left side is independent of $u$ except through $u,v$; the right side is constant."),
        ("Define the constant as $1/f$: the image of an object at infinity is at $v=f$.",
         r'$$\frac1v-\frac1u=\frac1f,\qquad \frac1f=(n-1)\Big(\frac1{R_1}-\frac1{R_2}\Big)$$',
         "Both the thin-lens and lens-maker's equations.")],
      ends="The thin-lens formula and the lens-maker's equation."))

C('c.1.3.2', '1.3', 'definition', "Principal Foci and Focal Length of a Thin Lens",
  "The second focus F₂ is where parallel light converges; in air f₂ = −f₁ = f.",
  r'''The <b>second principal focus</b> $F_2$ is the point where rays parallel to the axis converge (or appear to diverge from). The <b>first principal focus</b> $F_1$ is the point whose rays emerge parallel. For a thin lens with the same medium on both sides
$$f_2=f,\qquad f_1=-f,\qquad P=\frac1f\ \text{(in dioptres when $f$ is in metres)}.$$
A convex (converging) lens has $f>0$; a concave (diverging) lens has $f<0$.''',
  r'''Send light in from infinity and it collapses to $F_2$; reverse the arrows and light from $F_1$ leaves parallel. Both statements come from the same lens equation with $u\to-\infty$ or $v\to\infty$. Because the media are the same on both sides, the two focal lengths are equal and opposite in this sign convention.''',
  needs=['c.1.3.1'],
  traps=[r'Reading "$f_1=-f$" as saying the lens has a negative focal length. It only says the first focus is on the opposite side of the lens from the second.'],
  cards=[('Define the two principal foci of a thin lens and give $f_1$, $f_2$.',
          r'$F_2$: image of an object at infinity ($v=f$); $F_1$: object whose image is at infinity ($u=-f$). In air $f_2=f=-f_1$.'),
         ('What is the power of a thin lens?',
          r'$P=1/f$ (dioptres for $f$ in metres); $P=(n-1)(1/R_1-1/R_2)$.')])

C('c.1.3.3', '1.3', 'theorem', "Two Thin Lenses Separated by a Distance",
  "Two thin lenses f₁, f₂ a distance d apart act as one lens: 1/F = 1/f₁ + 1/f₂ − d/(f₁f₂).",
  r'''Two thin lenses of focal lengths $f_1$ and $f_2$ in air, separated by a distance $d$, are equivalent (for paraxial rays) to a single system of focal length $F$:
$$\boxed{\frac1F=\frac1{f_1}+\frac1{f_2}-\frac{d}{f_1f_2}}$$
For $d\to0$ the powers add: $P=P_1+P_2$.''',
  r'''The second lens does not see the object but the image made by the first. If the light is still converging when it reaches lens 2, lens 2 sees a smaller effective bundle, which is where the $-d/(f_1f_2)$ correction comes from. This is the relation verified in the two-lens practical.''',
  needs=['c.1.3.1'],
  traps=[r'Forgetting the separation term and simply adding powers. That is right only for lenses in contact.',
         r'The focal length $F$ is measured from the <i>principal planes</i> of the combination, not from either lens.'],
  cards=[('State the equivalent focal length of two thin lenses a distance $d$ apart.',
          r'$\dfrac1F=\dfrac1{f_1}+\dfrac1{f_2}-\dfrac{d}{f_1f_2}$.'),
         ('Two lenses $f_1=f_2=10$ cm are 5 cm apart. Find $F$.',
          r'$1/F=1/10+1/10-5/100=0.15$, so $F\approx6.67$ cm.')],
  proof=dict(
      idea="Trace a ray parallel to the axis through both lenses using the ray-transfer of a thin lens.",
      why="A parallel ray tells us the second focus, which fixes $F$.",
      rungs=[
        ("A ray at height $h_1$ parallel to the axis meets lens 1, which bends it toward its focus. Just after lens 1 its slope is",
         r'$$\alpha_1=-\frac{h_1}{f_1}$$',
         "A thin lens changes slope by $-h/f$ and leaves height unchanged."),
        ("It travels a distance $d$ to lens 2, so its height there is",
         r'$$h_2=h_1+d\,\alpha_1=h_1\Big(1-\frac{d}{f_1}\Big)$$',
         "Straight-line propagation between the two lenses."),
        ("Lens 2 changes the slope again.",
         r'$$\alpha_2=\alpha_1-\frac{h_2}{f_2}=-\frac{h_1}{f_1}-\frac{h_1}{f_2}\Big(1-\frac{d}{f_1}\Big)$$',
         "Slope after the second lens."),
        ("Define the effective focal length by $\\alpha_2=-h_1/F$.",
         r'$$\frac1F=\frac1{f_1}+\frac1{f_2}-\frac{d}{f_1f_2}$$',
         "The slope of the exit ray for a unit-height parallel input is $-1/F$.")],
      ends="The two-lens focal-length formula."))

C('c.1.3.4', '1.3', 'technique', "Locating an Image by Ray Construction",
  "Two of three special rays fix the image: the parallel ray, the central ray and the ray through the first focus.",
  r'''To find the image of an off-axis object point $P$ through a thin lens, draw any two of:
<ul><li>a ray from $P$ <b>parallel to the axis</b>, which after the lens passes through $F_2$;</li>
<li>a ray from $P$ through the <b>centre</b> of the lens, which goes straight on;</li>
<li>a ray from $P$ through the <b>first focus</b> $F_1$, which emerges parallel to the axis.</li></ul>
Their intersection is the image point $P^{\prime}$. A diverging lens is drawn the same way, with the rays traced back (dotted) to a virtual image.''',
  r'''These three rays are the special cases of the thin-lens formula: parallel-in means $u\to\infty$, so it goes to $F_2$; through-the-centre means the lens is locally a flat plate. Where any two meet, all the other rays from $P$ meet too — that is what "image" means.''',
  needs=['c.1.3.2'],
  traps=[r'Using the refraction "kink" at both faces of the lens for ray construction. For a thin lens the ray bends once, at the lens plane.'],
  cards=[('Name the three special rays used in thin-lens ray construction.',
          r'A ray parallel to the axis (to $F_2$), a ray through the lens centre (undeviated) and a ray through $F_1$ (emerges parallel).')])

# ── 1.4  Newton's formula and lateral magnification ────────────────────────────
C('c.1.4.1', '1.4', 'theorem', "Newton's Formula",
  "Measured from the foci, object and image distances satisfy x·x′ = f₁f₂ (= −f² for a thin lens in air).",
  r'''Let $x$ be the object's distance from the first focus $F_1$ and $x^{\prime}$ the image's distance from the second focus $F_2$ (both signed, positive to the right). Then
$$\boxed{x\,x^{\prime}=f_1f_2}\qquad\Big(=-f^2\ \text{for a thin lens in air}\Big).$$''',
  r'''The thin-lens formula is written with distances from the lens; Newton's version measures from the foci instead and turns the sum of reciprocals into a single product. It shows immediately that an object approaching $F_1$ ($x\to0$) sends its image to infinity.''',
  needs=['c.1.3.2'],
  traps=[r'Measuring $x$ and $x^{\prime}$ from the lens. They are measured from $F_1$ and $F_2$ respectively.',
         r'Dropping the sign: for a real object and real image in air, $x<0$ and $x^{\prime}>0$, so $xx^{\prime}=-f^2<0$.'],
  cards=[("State Newton's formula.",
          r'$x\,x^{\prime}=f_1f_2$, which for a thin lens in air is $x\,x^{\prime}=-f^2$; $x$ is measured from $F_1$, $x^{\prime}$ from $F_2$.'),
         ('An object is $40$ cm in front of the first focus of a thin lens with $f=10$ cm. Find $x^{\\prime}$.',
          r'$x=-40$ cm; $xx^{\prime}=-100$ so $x^{\prime}=+2.5$ cm (image 2.5 cm beyond $F_2$).')],
  proof=dict(
      idea="Rewrite $u$ and $v$ in the thin-lens formula in terms of $x=u-f_1$ and $x^{\\prime}=v-f_2$.",
      why="Substituting the focal-based coordinates turns the equation into a product.",
      rungs=[
        ("For a thin lens in air $f_2=f$, $f_1=-f$. Define the foci-based coordinates.",
         r'$$x=u-f_1=u+f,\qquad x^{\prime}=v-f_2=v-f$$',
         "Shifting the origin from the lens to the two foci."),
        ("Start from the thin-lens formula and clear denominators.",
         r'$$\frac1v-\frac1u=\frac1f\;\Longrightarrow\; f(u-v)=uv$$',
         "Multiply through by $uvf$."),
        ("Express $uv$ and $u-v$ in the new variables: $u=x-f$, $v=x^{\\prime}+f$.",
         r'$$f\big[(x-f)-(x^{\prime}+f)\big]=(x-f)(x^{\prime}+f)$$',
         "Substitute."),
        ("Expand and cancel the common terms.",
         r'$$fx-fx^{\prime}-2f^2=xx^{\prime}+fx-fx^{\prime}-f^2\;\Longrightarrow\; xx^{\prime}=-f^2$$',
         "Newton's formula, $xx^{\\prime}=f_1f_2$ with $f_1f_2=-f^2$.")],
      ends="Newton's formula."))

C('c.1.4.2', '1.4', 'theorem', "Lateral Magnification of a Thin Lens",
  "m = h′/h = v/u = −f₁/x = −x′/f₂; for a real object and real image the image is inverted.",
  r'''For a thin lens in air the lateral magnification is
$$\boxed{m=\frac{h^{\prime}}{h}=\frac vu=\frac fx=-\frac{x^{\prime}}{f}}$$
where $x$ and $x^{\prime}$ are the Newton distances. $|m|>1$: enlarged; $m<0$: inverted.''',
  r'''Using the ray through the lens centre, the object and image subtend the same angle at the lens, so $h^{\prime}/h=v/u$. The Newton form says the magnification is fixed entirely by how far the object sits from a focus: bring the object close to $F_1$ and the image grows without bound.''',
  needs=['c.1.4.1', 'c.1.2.5'],
  traps=[r'Reading $m=v/u$ as a ratio of magnitudes: with signs, $v>0>u$ for a real image, so $m<0$ (inverted).'],
  cards=[('Give the lateral magnification of a thin lens in three equivalent forms.',
          r'$m=v/u=f/x=-x^{\prime}/f$.'),
         ('A thin lens ($f=10$ cm) makes a real image of an object $15$ cm away. Find $m$.',
          r'$u=-15$: $1/v=1/10-1/15=1/30$, $v=30$; $m=v/u=-2$ (inverted, twice as large).')],
  proof=dict(
      idea="Use the undeviated ray through the lens centre for $h^{\\prime}/h=v/u$, then Newton's formula for the other forms.",
      why="The central ray is straight, so similar triangles give the ratio immediately.",
      rungs=[
        ("The ray from the top of the object through the lens centre goes straight; similar triangles on either side of the lens.",
         r'$$\frac{h^{\prime}}{h}=\frac{v}{u}$$',
         "Signed heights and distances: an inverted real image has $h^{\\prime}<0$."),
        ("Express $v$ and $u$ through the Newton distances: $u=x-f$, $v=x^{\\prime}+f$ and $xx^{\\prime}=-f^2$.",
         r'$$m=\frac{x^{\prime}+f}{x-f}=\frac{-f^2/x+f}{x-f}=\frac{f}{x}$$',
         "Simplify: $-f^2/x+f=f(x-f)/x$."),
        ("Use $xx^{\\prime}=-f^2$ again.",
         r'$$m=\frac fx=-\frac{x^{\prime}}{f}$$',
         "Two more forms of the same magnification.")],
      ends=r"$m=v/u=f/x=-x^{\prime}/f$."))

C('c.1.4.3', '1.4', 'theorem', "Longitudinal Magnification",
  "For a small object, the axial magnification is m_L = dv/du = m².",
  r'''A short object of length $\delta u$ along the axis has an image of length $\delta v$ with
$$m_L=\frac{\delta v}{\delta u}=m^{2}\ \ (>0).$$
The longitudinal magnification is always positive: the image of an object with its near end toward the lens has its near end toward the lens too.''',
  r'''Lateral magnification grows as $m$, but depth is stretched twice over — the image distance changes at the same time as the object distance moves — so a 3-D object is imaged as a distorted, pancaked or elongated version of itself unless $m=\pm1$.''',
  needs=['c.1.4.2'],
  traps=[r'Confusing $m_L=m^2$ with $m_L=m$. A magnification of 3 stretches depth by 9, not 3.'],
  cards=[('What is the longitudinal magnification of a thin lens?',
          r'$m_L=dv/du=m^2$, always positive.')],
  proof=dict(
      idea="Differentiate the thin-lens formula.",
      why="A small displacement of the object moves the image by a small amount fixed by the lens equation.",
      rungs=[
        ("Differentiate $1/v-1/u=1/f$ with respect to $u$.",
         r'$$-\frac{1}{v^2}\,dv+\frac{1}{u^2}\,du=0$$',
         "$f$ is a constant."),
        ("Solve for the ratio.",
         r'$$\frac{dv}{du}=\frac{v^2}{u^2}=m^2$$',
         "Since $m=v/u$.")],
      ends=r"$m_L=m^2$."))
