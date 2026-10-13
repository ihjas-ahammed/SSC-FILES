export default {
 "concepts": [
  {
   "id": "c.1.1.1",
   "name": "Optical Path and Fermat's Principle",
   "group": "fermat",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-5",
    "Q-A-6",
    "Q-A-7",
    "Q-C-1"
   ],
   "prerequisites": [
    "Light Ray",
    "Refractive Index",
    "Wavefront"
   ],
   "symbol": "",
   "meaning": "Light between two points takes a path along which the optical path length ∫n ds is stationary.",
   "linkedFormal": "In a medium of refractive index $n(x,y,z)$ the light takes time $d\\tau = n\\,ds/c$ to cover an element of path $ds$. The <b>optical path length</b> from $A$ to $B$ along a curve $C$ is\n$$L_{\\rm op}=\\int_{A(C)}^{B} n\\,ds = c\\,\\tau .$$\n<b>Fermat's principle.</b> The actual ray from $A$ to $B$ is the path along which $L_{\\rm op}$ is <i>stationary</i> against small changes of the path:\n$$\\delta\\int_A^B n\\,ds = 0 .$$\nStationary means a minimum, a maximum or a point of inflection — not always a minimum.",
   "formal": "In a medium of refractive index $n(x,y,z)$ the light takes time $d\\tau = n\\,ds/c$ to cover an element of path $ds$. The <b>optical path length</b> from $A$ to $B$ along a curve $C$ is\n$$L_{\\rm op}=\\int_{A(C)}^{B} n\\,ds = c\\,\\tau .$$\n<b>Fermat's principle.</b> The actual ray from $A$ to $B$ is the path along which $L_{\\rm op}$ is <i>stationary</i> against small changes of the path:\n$$\\delta\\int_A^B n\\,ds = 0 .$$\nStationary means a minimum, a maximum or a point of inflection — not always a minimum.",
   "example": "$n\\,ds$ is \"how far light would have gone in vacuum in the same time\". Fermat's principle says nature charges every path in that currency and the ray sits where a tiny detour changes the bill only at second order. In a uniform medium $n$ is constant, so the stationary path is the shortest one — a straight line — which is the whole content of \"light travels in straight lines\".\n\nTake 10 cm of air ($n=1$) followed by 10 cm of glass ($n=1.5$). The optical path is $1\\times10+1.5\\times10=25$ cm, although the geometric length is only 20 cm.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Saying light takes the path of <i>least time</i>. That is the usual case, not the law. Reflection from a concave mirror that curves more sharply than the ellipsoid (foci $A$, $B$) touching it at the reflection point gives a path <i>longer</i> than its neighbours — a maximum — and it is still a genuine ray."
    },
    {
     "q": "Where students go wrong",
     "a": "Comparing geometric lengths instead of optical ones. A shorter route through glass can cost more optical path than a longer route through air."
    },
    {
     "q": "Is the optical path the same as geometric length?",
     "a": "No. It is the geometric length weighted by the refractive index, so a short path through glass can have a large optical path."
    },
    {
     "q": "Why integrate $n\\,ds$ rather than $ds$?",
     "a": "Light's time is proportional to the optical path, so nature makes that quantity stationary, not the geometric length."
    },
    {
     "q": "Can the optical path be shorter than the geometric length?",
     "a": "No. For $n\\ge1$ the optical path is at least the geometric length, with equality in vacuum."
    }
   ],
   "pretest": {
    "prompt": "Light goes from $A$ to $B$ through a medium of index $n$. What does the actual ray make stationary?",
    "options": [
     "The optical path $\\int n\\,ds$",
     "The geometric length only",
     "The frequency"
    ],
    "correct": 0,
    "explanation": "Fermat's principle uses the optical path, which weights each element of path by $n$. Geometric length alone is not the criterion."
   },
   "check": {
    "prompt": "The actual ray satisfies:",
    "options": [
     "$\\delta\\int n\\,ds=0$",
     "$\\int ds=0$",
     "$n=1$"
    ],
    "correct": 0,
    "explanation": "The optical path is stationary under small changes of the path."
   },
   "depth": 2
  },
  {
   "id": "c.1.1.2",
   "name": "Law of Reflection from Fermat's Principle",
   "group": "fermat",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-6",
    "Q-C-1"
   ],
   "prerequisites": [
    "Optical Path and Fermat's Principle",
    "Reflection and Refraction at an Interface",
    "Plane Mirror"
   ],
   "symbol": "",
   "meaning": "Stationary optical path forces the incident ray, the normal and the reflected ray into one plane with i = r.",
   "linkedFormal": "For a plane mirror $MN$, light from $A$ reaches $B$ by reflection at a point $P$ of the mirror only if $P$ makes $AP+PB$ stationary. This happens exactly when\n$$\\text{the incident ray, the normal at }P\\text{ and the reflected ray are coplanar, and}\\quad i=r .$$",
   "formal": "For a plane mirror $MN$, light from $A$ reaches $B$ by reflection at a point $P$ of the mirror only if $P$ makes $AP+PB$ stationary. This happens exactly when\n$$\\text{the incident ray, the normal at }P\\text{ and the reflected ray are coplanar, and}\\quad i=r .$$",
   "example": "Fold the picture along the mirror. The reflected leg $PB$ becomes a continuation of the incident leg $AP$ into the mirror world, and the shortest way between two points in one world is the straight line. A straight line through the fold is exactly the law of reflection.\n\nA source 3 cm above a plane mirror and a point 4 cm above it, 7 cm apart horizontally. Stationarity puts the reflection point 3 cm from the foot of the source. Both legs then make $\\sin\\theta=1/\\sqrt2$ with the normal, so $\\theta_i=\\theta_r=45^\\circ$.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Measuring $i$ and $r$ from the mirror surface instead of from the normal — the law is about angles to the <b>normal</b>."
    },
    {
     "q": "Where students go wrong",
     "a": "Forgetting the coplanarity half of the law: it is as much a part of the statement as $i=r$."
    },
    {
     "q": "Is this derivation for a plane mirror only?",
     "a": "Here yes. The normal is fixed for a plane, which makes the sine comparison direct."
    },
    {
     "q": "Does the reflection point depend on the heights?",
     "a": "Yes, the point moves with the heights, but the angle rule $\\theta_i=\\theta_r$ holds for every choice."
    },
    {
     "q": "Why are both angles on the same side of the normal?",
     "a": "The reflected ray returns into the same medium, so both angles are measured from the normal on the same side."
    }
   ],
   "pretest": {
    "prompt": "A ray reflects off a plane mirror. Which angle equals the angle of incidence?",
    "options": [
     "The angle of reflection",
     "The angle of refraction",
     "Zero"
    ],
    "correct": 0,
    "explanation": "Fermat's principle gives equal angles with the normal on the same side of it."
   },
   "check": {
    "prompt": "Stationarity of the reflected path gives:",
    "options": [
     "$\\sin\\theta_i=\\sin\\theta_r$, so $\\theta_i=\\theta_r$",
     "$\\theta_i=2\\theta_r$",
     "$\\theta_i=90^\\circ$"
    ],
    "correct": 0,
    "explanation": "The derivative of the path with respect to the reflection point gives equal sines."
   },
   "depth": 4
  },
  {
   "id": "c.1.1.3",
   "name": "Snell's Law of Refraction from Fermat's Principle",
   "group": "fermat",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-6"
   ],
   "prerequisites": [
    "Optical Path and Fermat's Principle",
    "Law of Reflection from Fermat's Principle",
    "Refractive Index",
    "Reflection and Refraction at an Interface"
   ],
   "symbol": "",
   "meaning": "Stationary optical path across a plane interface gives n₁ sin θ₁ = n₂ sin θ₂.",
   "linkedFormal": "At a plane interface between media of refractive indices $n_1$ and $n_2$, the ray from $A$ (in medium 1) to $B$ (in medium 2) is the one for which\n$$n_1\\sin\\theta_1=n_2\\sin\\theta_2 ,$$\nwith the incident ray, refracted ray and normal in one plane. $\\theta_1,\\theta_2$ are measured from the normal.",
   "formal": "At a plane interface between media of refractive indices $n_1$ and $n_2$, the ray from $A$ (in medium 1) to $B$ (in medium 2) is the one for which\n$$n_1\\sin\\theta_1=n_2\\sin\\theta_2 ,$$\nwith the incident ray, refracted ray and normal in one plane. $\\theta_1,\\theta_2$ are measured from the normal.",
   "example": "Crossing the boundary costs less per metre on the side with the smaller $n$, so the ray spends more of its journey there and bends toward the normal in the denser medium. It is exactly the lifeguard problem: run farther on sand where you are fast, swim less where you are slow.\n\nLight from air ($n_1=1$) hits water ($n_2=1.33$) at $\\theta_1=45^\\circ$. Then $\\sin\\theta_2=\\sin45^\\circ/1.33\\approx0.532$, so $\\theta_2\\approx32.1^\\circ$.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Writing the law with the wrong ratio: it is $n_1\\sin\\theta_1=n_2\\sin\\theta_2$, so the ray bends <i>toward</i> the normal on entering the higher index."
    },
    {
     "q": "Where students go wrong",
     "a": "Using the angle to the surface instead of the normal."
    },
    {
     "q": "Where students go wrong",
     "a": "Applying it beyond the critical angle: for $n_1>n_2$ and $\\sin\\theta_1>n_2/n_1$ no real $\\theta_2$ exists (total internal reflection)."
    },
    {
     "q": "Why does the ray bend towards the normal?",
     "a": "The stationary path spends less time in the slow medium when it crosses closer to the normal."
    },
    {
     "q": "What is the critical angle?",
     "a": "Going from a denser to a rarer medium, $\\sin\\theta_c=n_2/n_1$. Beyond $\\theta_c$ Snell's law has no solution, and the ray is totally reflected."
    },
    {
     "q": "Does Snell's law depend on wavelength?",
     "a": "The indices depend on wavelength (dispersion), so the bending does too. The law keeps the same form for each colour."
    }
   ],
   "pretest": {
    "prompt": "Light enters glass of index 1.5 from air at $30^\\circ$ incidence. What is $\\sin\\theta_2$?",
    "options": [
     "$0.5/1.5\\approx0.333$",
     "$0.5\\times1.5=0.75$",
     "$0.5$"
    ],
    "correct": 0,
    "explanation": "Snell's law: $\\sin\\theta_2=n_1\\sin\\theta_1/n_2=0.5/1.5\\approx0.333$."
   },
   "check": {
    "prompt": "Entering a denser medium, a ray bends:",
    "options": [
     "Towards the normal",
     "Away from the normal",
     "Not at all"
    ],
    "correct": 0,
    "explanation": "The slower medium makes the stationary path cross the interface at a smaller angle to the normal."
   },
   "depth": 5
  },
  {
   "id": "c.1.1.4",
   "name": "Equal Optical Path and Perfect Imaging",
   "group": "fermat",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-5",
    "Q-B-2",
    "Q-C-2"
   ],
   "prerequisites": [
    "Optical Path and Fermat's Principle",
    "Law of Reflection from Fermat's Principle",
    "Ellipse and Focal Distances",
    "Axial Point Image"
   ],
   "symbol": "",
   "meaning": "A surface images $P$ exactly onto $Q$ only if every ray from $P$ to $Q$ has the same optical path.",
   "linkedFormal": "If all rays leaving $P$ are brought together at $Q$ by a reflecting or refracting surface, then by Fermat's principle every one of those rays must have the <b>same optical path length</b>:\n$$L_{\\rm op}(P\\to Q)=\\text{constant for every ray}.$$\nExamples: a paraboloidal mirror sends rays parallel to its axis through its focus; an ellipsoidal mirror sends rays from one focus through the other.",
   "formal": "If all rays leaving $P$ are brought together at $Q$ by a reflecting or refracting surface, then by Fermat's principle every one of those rays must have the <b>same optical path length</b>:\n$$L_{\\rm op}(P\\to Q)=\\text{constant for every ray}.$$\nExamples: a paraboloidal mirror sends rays parallel to its axis through its focus; an ellipsoidal mirror sends rays from one focus through the other.",
   "example": "Stationarity is not enough for a whole family of rays: if a hundred different paths all connect $P$ to $Q$ and are all genuine rays, none can be longer than the others or Fermat's principle would single one out. An image is a point where all optical paths tie — the same statement as \"all waves arrive in phase\".\n\nAn ellipse with $a=5$ cm and foci 6 cm apart (so the centre-to-focus distance is $c=3$ cm and $b=4$ cm). For every point $P$ on it, $F_1P+PF_2=2a=10$ cm, so every reflected path has the same optical length.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Assuming a spherical mirror focuses perfectly. It has equal optical path only for rays near the axis (paraxial), which is exactly why spherical aberration exists."
    },
    {
     "q": "Can a sphere image a point perfectly?",
     "a": "Not in general. Spherical surfaces give perfect imaging only for the axial point in the paraxial limit."
    },
    {
     "q": "What makes an image perfect?",
     "a": "Every ray from an object point meets at one image point with equal optical path, so the image is sharp for all rays."
    },
    {
     "q": "Why do ordinary spherical surfaces fail?",
     "a": "Their path differences appear at order $h^4$, which is spherical aberration. See Axial Point Image."
    }
   ],
   "pretest": {
    "prompt": "If a family of paths from $A$ to $B$ all have equal optical path, what does that mean for the image?",
    "options": [
     "The rays meet at $B$, forming a perfect image",
     "The rays are parallel",
     "The rays diverge"
    ],
    "correct": 0,
    "explanation": "Equal optical path means every ray arrives at the same point in phase, which is the definition of a perfect image."
   },
   "check": {
    "prompt": "The reflecting surface that makes all paths from $F_1$ to $F_2$ equal is:",
    "options": [
     "An ellipse",
     "A straight line",
     "A hyperbola"
    ],
    "correct": 0,
    "explanation": "Only the ellipse has constant sum of focal distances, which is the equal-path condition."
   },
   "depth": 5
  },
  {
   "id": "c.1.2.1",
   "name": "Sign Convention and the Paraxial Approximation",
   "group": "surface",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-B-1",
    "Q-C-2"
   ],
   "prerequisites": [
    "Object and Image Distances",
    "Small-Angle and Binomial Approximations"
   ],
   "symbol": "",
   "meaning": "Distances run from the vertex, positive along the light; only rays close to the axis are treated.",
   "linkedFormal": "<b>Cartesian sign convention.</b> Light travels left to right. All distances are measured from the vertex $O$ of the surface (or the centre of the lens): positive to the right, negative to the left; heights are positive above the axis. A radius $R$ is positive when the centre of curvature $C$ lies to the right of $O$.\n<b>Paraxial approximation.</b> Rays making small angles $\\alpha$ with the axis, so $\\sin\\alpha\\simeq\\tan\\alpha\\simeq\\alpha$ and $\\cos\\alpha\\simeq1$.",
   "formal": "<b>Cartesian sign convention.</b> Light travels left to right. All distances are measured from the vertex $O$ of the surface (or the centre of the lens): positive to the right, negative to the left; heights are positive above the axis. A radius $R$ is positive when the centre of curvature $C$ lies to the right of $O$.\n<b>Paraxial approximation.</b> Rays making small angles $\\alpha$ with the axis, so $\\sin\\alpha\\simeq\\tan\\alpha\\simeq\\alpha$ and $\\cos\\alpha\\simeq1$.",
   "example": "The formulas of the next sections need one rule for signs so that a single equation covers convex, concave, real and virtual cases. The paraxial limit throws away the cubic corrections in $\\sin$, which is what makes every ray from one point meet at one image point.\n\nAn object 20 cm in front of a surface has $u=-20$ cm. A real image 30 cm behind it has $v=+30$ cm. A virtual image 10 cm in front of it, on the object side, has $v=-10$ cm.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Forgetting that a real object to the <i>left</i> of a surface has a <b>negative</b> $u$."
    },
    {
     "q": "Where students go wrong",
     "a": "Mixing the Cartesian convention here with the \"real-is-positive\" convention of school texts inside one calculation."
    },
    {
     "q": "Why is the approximation called paraxial?",
     "a": "Paraxial rays stay close to the axis, so $\\sin\\theta\\approx\\theta$ and the $h^2$ expansions are valid."
    },
    {
     "q": "Why use one sign convention?",
     "a": "One consistent rule covers every case, so a single formula works for real, virtual, converging and diverging systems."
    },
    {
     "q": "Do all textbooks use the same signs?",
     "a": "No. Check the convention before using a formula, because the same formula can change sign between books."
    }
   ],
   "pretest": {
    "prompt": "In Cartesian signs with light travelling left to right, a real object distance $u$ is:",
    "options": [
     "Negative",
     "Positive",
     "Zero"
    ],
    "correct": 0,
    "explanation": "Real objects lie on the incident side, so $u$ is negative in the Cartesian convention."
   },
   "check": {
    "prompt": "A real image formed on the far side of a refracting surface has $v$:",
    "options": [
     "Positive",
     "Negative",
     "Infinite"
    ],
    "correct": 0,
    "explanation": "Real images lie on the far side of the surface, so $v$ is positive."
   },
   "depth": 2
  },
  {
   "id": "c.1.2.2",
   "name": "Refraction at a Single Spherical Surface",
   "group": "surface",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-B-1",
    "Q-C-2"
   ],
   "prerequisites": [
    "Snell's Law of Refraction from Fermat's Principle",
    "Sign Convention and the Paraxial Approximation",
    "Normal to a Surface",
    "Sagitta",
    "Refractive Index"
   ],
   "symbol": "",
   "meaning": "A spherical boundary of radius R between n₁ and n₂ obeys n₂/v − n₁/u = (n₂ − n₁)/R.",
   "linkedFormal": "For a spherical surface of radius $R$ separating a medium of index $n_1$ (object side) from $n_2$, a paraxial point object at distance $u$ forms an image at distance $v$ with\n$$\\boxed{\\frac{n_2}{v}-\\frac{n_1}{u}=\\frac{n_2-n_1}{R}}$$\nThe right side is the <b>power</b> of the surface. Distances follow the Cartesian convention.",
   "formal": "For a spherical surface of radius $R$ separating a medium of index $n_1$ (object side) from $n_2$, a paraxial point object at distance $u$ forms an image at distance $v$ with\n$$\\boxed{\\frac{n_2}{v}-\\frac{n_1}{u}=\\frac{n_2-n_1}{R}}$$\nThe right side is the <b>power</b> of the surface. Distances follow the Cartesian convention.",
   "example": "The surface converts a diverging spherical wave into a converging one. The amount of extra curvature it adds is the difference $n_2-n_1$ divided by $R$ — a more strongly curved boundary or a bigger index step bends more, and the equation just says \"curvature out = curvature in + power\".\n\nAir to glass ($n_2=1.5$), $R=20$ cm, object 40 cm in front: $\\dfrac{1}{-40}+\\dfrac{1.5}{v}=\\dfrac{0.5}{20}$, so $\\dfrac{1.5}{v}=0.05$ and $v=30$ cm.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Using $u$ as a positive number and forgetting the sign: for a real object $u$ is negative, so $-n_1/u=+n_1/|u|$."
    },
    {
     "q": "Where students go wrong",
     "a": "Swapping $n_1$ and $n_2$: $n_1$ is always the medium the light comes <i>from</i>."
    },
    {
     "q": "What does the formula predict when $n_1=n_2$?",
     "a": "The right side is zero, so the surface produces no image and no refraction."
    },
    {
     "q": "Why are the terms weighted by the indices?",
     "a": "Each leg of the optical path is weighted by its index, so the balance of the $h^2$ terms involves $n/$distance."
    },
    {
     "q": "Does a mirror follow this formula?",
     "a": "No. A mirror has its own relation, $1/u+1/v=2/R$, from the same stationarity argument with reflection."
    }
   ],
   "pretest": {
    "prompt": "For a plane surface, $R\\to\\infty$. The image condition then gives:",
    "options": [
     "$n_1/u+n_2/v=0$",
     "$u=v$",
     "$n_1=n_2$"
    ],
    "correct": 0,
    "explanation": "The right side $(n_2-n_1)/R$ vanishes as $R\\to\\infty$."
   },
   "check": {
    "prompt": "$n_1=1$, $n_2=1.5$, $R=30$ cm and $u=-60$ cm. Find $v$.",
    "options": [
     "$45$ cm",
     "$30$ cm",
     "$60$ cm"
    ],
    "correct": 0,
    "explanation": "$\\dfrac{1}{-60}+\\dfrac{1.5}{v}=\\dfrac{0.5}{30}$ gives $\\dfrac{1.5}{v}=0.0333$, so $v=45$ cm."
   },
   "depth": 6
  },
  {
   "id": "c.1.2.3",
   "name": "Principal Foci and Focal Lengths of a Surface",
   "group": "surface",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [],
   "prerequisites": [
    "Refraction at a Single Spherical Surface",
    "Radius of Curvature",
    "Refractive Index"
   ],
   "symbol": "",
   "meaning": "The first and second focal lengths are f₁ = −n₁R/(n₂−n₁) and f₂ = n₂R/(n₂−n₁).",
   "linkedFormal": "The <b>second focal point</b> $F_2$ is the image of an object at infinity ($u\\to-\\infty$): its distance from the vertex is\n$$f_2=\\frac{n_2R}{n_2-n_1}.$$\nThe <b>first focal point</b> $F_1$ is the object point whose image is at infinity ($v\\to\\infty$):\n$$f_1=-\\frac{n_1R}{n_2-n_1}.$$\nThey satisfy $\\dfrac{f_2}{f_1}=-\\dfrac{n_2}{n_1}$ and the surface power is $P=\\dfrac{n_2}{f_2}=-\\dfrac{n_1}{f_1}=\\dfrac{n_2-n_1}{R}$.",
   "formal": "The <b>second focal point</b> $F_2$ is the image of an object at infinity ($u\\to-\\infty$): its distance from the vertex is\n$$f_2=\\frac{n_2R}{n_2-n_1}.$$\nThe <b>first focal point</b> $F_1$ is the object point whose image is at infinity ($v\\to\\infty$):\n$$f_1=-\\frac{n_1R}{n_2-n_1}.$$\nThey satisfy $\\dfrac{f_2}{f_1}=-\\dfrac{n_2}{n_1}$ and the surface power is $P=\\dfrac{n_2}{f_2}=-\\dfrac{n_1}{f_1}=\\dfrac{n_2-n_1}{R}$.",
   "example": "Put $u\\to\\infty$ in the surface equation and the left term $-n_1/u$ vanishes, so $v=f_2$; put $v\\to\\infty$ and $n_2/v$ vanishes, so $u=f_1$. Because the two media differ, the two focal lengths differ — their ratio is minus the ratio of the indices.\n\nAir ($n_1=1$) to glass ($n_2=1.5$), $R=30$ cm: $f_1=-\\dfrac{n_1R}{n_2-n_1}=-60$ cm on the object side, and $f_2=\\dfrac{n_2R}{n_2-n_1}=90$ cm on the image side.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Assuming $f_1=f_2$ in magnitude. That is true only for a thin lens with the same medium on both sides, not for a single surface."
    },
    {
     "q": "Why are $f_1$ and $f_2$ different?",
     "a": "The media differ, so the focal lengths scale with the refractive indices."
    },
    {
     "q": "Why are the two focal lengths different?",
     "a": "The two media have different indices, and the focal lengths scale with $n_1$ and $n_2$."
    },
    {
     "q": "Which focal length is the surface's focal length?",
     "a": "Both belong to the surface. $f_2$ is the image-side one, and the sign of $f_1$ shows that it lies on the object side."
    }
   ],
   "pretest": {
    "prompt": "For a surface separating $n_1$ from $n_2$, the two focal lengths satisfy:",
    "options": [
     "$f_2/n_2=-f_1/n_1$",
     "$f_1=f_2$",
     "$f_2=n_1f_1$"
    ],
    "correct": 0,
    "explanation": "$f_1=-n_1R/(n_2-n_1)$ and $f_2=n_2R/(n_2-n_1)$, so $f_2/n_2=-f_1/n_1$."
   },
   "check": {
    "prompt": "For $n_1=1$, $n_2=1.5$ and $R=30$ cm, $f_2$ is:",
    "options": [
     "$90$ cm",
     "$60$ cm",
     "$30$ cm"
    ],
    "correct": 0,
    "explanation": "$f_2=n_2R/(n_2-n_1)=1.5\\times30/0.5=90$ cm."
   },
   "depth": 7
  },
  {
   "id": "c.1.2.4",
   "name": "Reflection at a Spherical Mirror",
   "group": "surface",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-B-2"
   ],
   "prerequisites": [
    "Refraction at a Single Spherical Surface",
    "Ray Through the Centre of Curvature",
    "Radius of Curvature"
   ],
   "symbol": "",
   "meaning": "A spherical mirror of radius R obeys 1/v + 1/u = 2/R, so its focal length is f = R/2.",
   "linkedFormal": "A spherical mirror is a refracting surface with $n_2=-n_1$ (the light reverses direction). Setting this in the refraction formula gives\n$$\\boxed{\\frac1v+\\frac1u=\\frac2R}$$\nThe focal length is $f=R/2$: parallel rays focus at half the radius.",
   "formal": "A spherical mirror is a refracting surface with $n_2=-n_1$ (the light reverses direction). Setting this in the refraction formula gives\n$$\\boxed{\\frac1v+\\frac1u=\\frac2R}$$\nThe focal length is $f=R/2$: parallel rays focus at half the radius.",
   "example": "Reflection is \"refraction into a medium of negative index\" only as bookkeeping, but it saves a separate derivation: the sign of $n_2$ carries the reversal of direction. A concave mirror ($C$ on the incoming side, $R<0$) has $f<0$ — a real focus in front of it.\n\nA concave mirror of focal length 10 cm and an object 30 cm away: $\\dfrac{1}{30}+\\dfrac{1}{v}=\\dfrac{1}{10}$ gives $v=15$ cm in front, a real image with magnification $-0.5$, inverted and half size.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Using $f=R/2$ without a sign: in the Cartesian convention a concave mirror has $R<0$ and $f<0$."
    },
    {
     "q": "Is a concave mirror always converging?",
     "a": "Yes. For light arriving from its front it converges parallel rays to the focus."
    },
    {
     "q": "Why is the focal length half the radius?",
     "a": "Parallel rays near the axis reflect through the point halfway to the centre, which is the paraxial result."
    },
    {
     "q": "Why is a real image from a concave mirror inverted?",
     "a": "Rays from an object beyond $f$ cross after reflection, so the image is upside down."
    }
   ],
   "pretest": {
    "prompt": "The focal length of a concave mirror of radius $R$ is:",
    "options": [
     "$R/2$",
     "$R$",
     "$2R$"
    ],
    "correct": 0,
    "explanation": "A spherical mirror has focal length half its radius."
   },
   "check": {
    "prompt": "For a concave mirror with $u=R/4$, the virtual image lies at $|v|=$",
    "options": [
     "$R/2$",
     "$R/4$",
     "$R$"
    ],
    "correct": 0,
    "explanation": "$1/u-1/v=2/R$ with $u=R/4$ gives $1/v=2/R$, so $|v|=R/2$."
   },
   "depth": 7
  },
  {
   "id": "c.1.2.5",
   "name": "Lateral Magnification at a Single Surface",
   "group": "surface",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [],
   "prerequisites": [
    "Refraction at a Single Spherical Surface",
    "Object and Image Distances"
   ],
   "symbol": "",
   "meaning": "The transverse magnification of a spherical surface is m = n₁v/(n₂u).",
   "linkedFormal": "The <b>lateral magnification</b> is $m=h_{\\rm i}/h_{\\rm o}$, the image height over the object height (both with sign). For a single spherical surface,\n$$\\boxed{m=\\frac{n_1\\,v}{n_2\\,u}}$$\n$m<0$ means the image is inverted; $|m|>1$ means enlarged.",
   "formal": "The <b>lateral magnification</b> is $m=h_{\\rm i}/h_{\\rm o}$, the image height over the object height (both with sign). For a single spherical surface,\n$$\\boxed{m=\\frac{n_1\\,v}{n_2\\,u}}$$\n$m<0$ means the image is inverted; $|m|>1$ means enlarged.",
   "example": "The ray through the vertex is the easy one to follow: it meets the surface at a tiny angle and bends by Snell's law with no help from the curvature. Similar triangles on either side of the vertex, joined by $n_1\\theta_1=n_2\\theta_2$, give the ratio.\n\nAir to glass, $R=30$ cm, object 60 cm in front: the image forms at $v=45$ cm. The magnification is $m=\\dfrac{n_1v}{n_2u}=\\dfrac{45}{1.5\\times(-60)}=-0.5$, so the image is inverted and half size.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Dropping the index ratio: $m=v/u$ holds only when the medium is the same on both sides (thin lens or mirror)."
    },
    {
     "q": "Why is the sign of $m$ important?",
     "a": "It records whether the image is erect or inverted, which the size alone does not show."
    },
    {
     "q": "Why is the magnification $n_1v/(n_2u)$?",
     "a": "The refracted ray's slope changes by the index ratio, so the height ratio includes $n_1/n_2$. For a thin lens $n_1=n_2$ and it reduces to $v/u$."
    },
    {
     "q": "Why does the sign of $m$ matter?",
     "a": "A negative $m$ marks an inverted image, which is what a real image from a convex surface usually is."
    }
   ],
   "pretest": {
    "prompt": "Lateral magnification at a refracting surface is defined as:",
    "options": [
     "$h_i/h_o$",
     "$u/v$",
     "$v/f$"
    ],
    "correct": 0,
    "explanation": "Lateral magnification is the ratio of image height to object height."
   },
   "check": {
    "prompt": "A lateral magnification of $+2$ means the image is:",
    "options": [
     "Erect and twice as tall",
     "Inverted and twice as tall",
     "Half as tall"
    ],
    "correct": 0,
    "explanation": "The positive sign gives an erect image, and the magnitude 2 gives twice the height."
   },
   "depth": 7
  },
  {
   "id": "c.1.3.1",
   "name": "Thin-Lens Formula and the Lens-Maker's Equation",
   "group": "lens",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-1",
    "Q-A-4",
    "Q-B-3",
    "Q-C-3"
   ],
   "prerequisites": [
    "Refraction at a Single Spherical Surface",
    "Principal Foci and Focal Lengths of a Surface",
    "Converging and Diverging Lens",
    "Optical Centre"
   ],
   "symbol": "",
   "meaning": "A thin lens of index n in air obeys 1/v − 1/u = 1/f with 1/f = (n−1)(1/R₁ − 1/R₂).",
   "linkedFormal": "A thin lens of index $n$ in air, with surfaces of radii $R_1$ (first) and $R_2$ (second), forms an image at $v$ of an object at $u$ with\n$$\\boxed{\\frac1v-\\frac1u=\\frac1f},\\qquad \\boxed{\\frac1f=(n-1)\\Big(\\frac1{R_1}-\\frac1{R_2}\\Big)}$$\nthe second is the <b>lens-maker's equation</b>.",
   "formal": "A thin lens of index $n$ in air, with surfaces of radii $R_1$ (first) and $R_2$ (second), forms an image at $v$ of an object at $u$ with\n$$\\boxed{\\frac1v-\\frac1u=\\frac1f},\\qquad \\boxed{\\frac1f=(n-1)\\Big(\\frac1{R_1}-\\frac1{R_2}\\Big)}$$\nthe second is the <b>lens-maker's equation</b>.",
   "example": "A thin lens is two refracting surfaces with nothing between them, so the image formed by the first is the object of the second and the two powers simply add: $P=P_1+P_2$. The result depends on $n$, $R_1$, $R_2$ only, which is why a lens can be designed on paper.\n\nA plano-convex glass lens ($n=1.5$) with $R_1=15$ cm and a plane second face ($1/R_2=0$): $\\dfrac{1}{f}=0.5\\times\\dfrac{1}{15}$, so $f=30$ cm.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Losing the sign in $1/R_1-1/R_2$: for a biconvex lens $R_1>0$ and $R_2<0$, so the bracket is positive and $f>0$."
    },
    {
     "q": "Where students go wrong",
     "a": "Using $1/v+1/u=1/f$ (the \"real is positive\" form) with the Cartesian signs of this course — the sign of $u$ flips the equation."
    },
    {
     "q": "Which index does the lens-maker's equation use in a medium?",
     "a": "The index of the lens relative to the medium surrounding it, $n_g/n_m$."
    },
    {
     "q": "Why is $(n-1)$ equal to 0.5 here?",
     "a": "The bracket is $n_{lens}/n_{medium}-1$. In air with $n=1.5$ it is $0.5$."
    },
    {
     "q": "Does the formula also cover a diverging lens?",
     "a": "Yes. A biconcave lens has $R_1<0$ and $R_2>0$, which makes $1/f$ negative, so the lens diverges."
    }
   ],
   "pretest": {
    "prompt": "A biconvex lens of glass ($n=1.5$) has $R_1=20$ cm and $R_2=-20$ cm, in air. Its $1/f$ is:",
    "options": [
     "$0.05$ cm$^{-1}$",
     "$0.5$ cm$^{-1}$",
     "$0.025$ cm$^{-1}$"
    ],
    "correct": 0,
    "explanation": "$1/f=(1.5-1)(1/20+1/20)=0.05$ cm$^{-1}$."
   },
   "check": {
    "prompt": "In Cartesian signs the thin-lens formula is:",
    "options": [
     "$1/v-1/u=1/f$",
     "$1/u+1/v=2/f$",
     "$1/v+1/u=0$"
    ],
    "correct": 0,
    "explanation": "With $u$ negative for real objects, $1/v-1/u=1/f$ is the Cartesian form."
   },
   "depth": 8
  },
  {
   "id": "c.1.3.2",
   "name": "Principal Foci and Focal Length of a Thin Lens",
   "group": "lens",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-1",
    "Q-A-2",
    "Q-B-3",
    "Q-C-3"
   ],
   "prerequisites": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Real and Virtual Images",
    "Converging and Diverging Lens"
   ],
   "symbol": "",
   "meaning": "The second focus F₂ is where parallel light converges; in air f₂ = −f₁ = f.",
   "linkedFormal": "The <b>second principal focus</b> $F_2$ is the point where rays parallel to the axis converge (or appear to diverge from). The <b>first principal focus</b> $F_1$ is the point whose rays emerge parallel. For a thin lens with the same medium on both sides\n$$f_2=f,\\qquad f_1=-f,\\qquad P=\\frac1f\\ \\text{(in dioptres when $f$ is in metres)}.$$\nA convex (converging) lens has $f>0$; a concave (diverging) lens has $f<0$.",
   "formal": "The <b>second principal focus</b> $F_2$ is the point where rays parallel to the axis converge (or appear to diverge from). The <b>first principal focus</b> $F_1$ is the point whose rays emerge parallel. For a thin lens with the same medium on both sides\n$$f_2=f,\\qquad f_1=-f,\\qquad P=\\frac1f\\ \\text{(in dioptres when $f$ is in metres)}.$$\nA convex (converging) lens has $f>0$; a concave (diverging) lens has $f<0$.",
   "example": "Send light in from infinity and it collapses to $F_2$; reverse the arrows and light from $F_1$ leaves parallel. Both statements come from the same lens equation with $u\\to-\\infty$ or $v\\to\\infty$. Because the media are the same on both sides, the two focal lengths are equal and opposite in this sign convention.\n\nA converging lens with $f=10$ cm and an object 15 cm in front: $\\dfrac{1}{v}-\\dfrac{1}{-15}=\\dfrac{1}{10}$ gives $v=30$ cm. The magnification is $m=v/u=-2$, a real, inverted image twice the size.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Reading \"$f_1=-f$\" as saying the lens has a negative focal length. It only says the first focus is on the opposite side of the lens from the second."
    },
    {
     "q": "Are the two foci equally far from a thin lens in air?",
     "a": "Yes, both are at distance $f$ from the optical centre."
    },
    {
     "q": "Why define the focal points by an image at infinity?",
     "a": "It fixes $f$ unambiguously. Object and image positions then follow from one thin-lens formula."
    },
    {
     "q": "Are the two foci the same distance from the lens?",
     "a": "In air, yes. Both equal $f$, measured from the optical centre."
    }
   ],
   "pretest": {
    "prompt": "A converging lens has $f=10$ cm. An object is 20 cm away. The real image is at:",
    "options": [
     "$20$ cm",
     "$10$ cm",
     "$5$ cm"
    ],
    "correct": 0,
    "explanation": "$1/v-1/u=1/f$ with $u=-20$ gives $1/v=1/10-1/20=1/20$, so $v=20$ cm."
   },
   "check": {
    "prompt": "For a converging lens, an object at $F_1$ forms its image:",
    "options": [
     "At infinity",
     "At $F_2$",
     "At the lens"
    ],
    "correct": 0,
    "explanation": "Parallel emergent rays meet only at infinity."
   },
   "depth": 9
  },
  {
   "id": "c.1.3.3",
   "name": "Two Thin Lenses Separated by a Distance",
   "group": "lens",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [],
   "prerequisites": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Optical Centre",
    "Real and Virtual Images"
   ],
   "symbol": "",
   "meaning": "Two thin lenses f₁, f₂ a distance d apart act as one lens: 1/F = 1/f₁ + 1/f₂ − d/(f₁f₂).",
   "linkedFormal": "Two thin lenses of focal lengths $f_1$ and $f_2$ in air, separated by a distance $d$, are equivalent (for paraxial rays) to a single system of focal length $F$:\n$$\\boxed{\\frac1F=\\frac1{f_1}+\\frac1{f_2}-\\frac{d}{f_1f_2}}$$\nFor $d\\to0$ the powers add: $P=P_1+P_2$.",
   "formal": "Two thin lenses of focal lengths $f_1$ and $f_2$ in air, separated by a distance $d$, are equivalent (for paraxial rays) to a single system of focal length $F$:\n$$\\boxed{\\frac1F=\\frac1{f_1}+\\frac1{f_2}-\\frac{d}{f_1f_2}}$$\nFor $d\\to0$ the powers add: $P=P_1+P_2$.",
   "example": "The second lens does not see the object but the image made by the first. If the light is still converging when it reaches lens 2, lens 2 sees a smaller effective bundle, which is where the $-d/(f_1f_2)$ correction comes from. This is the relation verified in the two-lens practical.\n\nLenses $f_1=+10$ cm and $f_2=-20$ cm, separated by $d=5$ cm: $\\dfrac{1}{F}=\\dfrac{1}{10}-\\dfrac{1}{20}+\\dfrac{5}{200}=0.075$, so $F\\approx13.3$ cm.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Forgetting the separation term and simply adding powers. That is right only for lenses in contact."
    },
    {
     "q": "Where students go wrong",
     "a": "The focal length $F$ is measured from the <i>principal planes</i> of the combination, not from either lens."
    },
    {
     "q": "Why does the separation matter?",
     "a": "The second lens sees the image of the first lens, not the original object."
    },
    {
     "q": "Can two thin lenses act as a telescope?",
     "a": "Yes. When $d=f_1+f_2$, parallel light entering the system leaves parallel, which is an afocal system."
    },
    {
     "q": "Why does the second lens see a different object?",
     "a": "It sees the image formed by the first lens, so its object distance is set by the first lens's image."
    }
   ],
   "pretest": {
    "prompt": "Two thin lenses of focal length 10 cm each are touching. The combined focal length is:",
    "options": [
     "$5$ cm",
     "$10$ cm",
     "$20$ cm"
    ],
    "correct": 0,
    "explanation": "$1/F=1/10+1/10=0.2$, so $F=5$ cm."
   },
   "check": {
    "prompt": "Two thin lenses $f_1=f_2=10$ cm are separated by $d=5$ cm. The combined $F$ is:",
    "options": [
     "$6.67$ cm",
     "$5$ cm",
     "$10$ cm"
    ],
    "correct": 0,
    "explanation": "$1/F=1/f_1+1/f_2-d/(f_1f_2)=0.2-0.05=0.15$, so $F\\approx6.67$ cm."
   },
   "depth": 9
  },
  {
   "id": "c.1.3.4",
   "name": "Locating an Image by Ray Construction",
   "group": "lens",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-C-4"
   ],
   "prerequisites": [
    "Principal Foci and Focal Length of a Thin Lens",
    "Optical Centre",
    "Converging and Diverging Lens"
   ],
   "symbol": "",
   "meaning": "Two of three special rays fix the image: the parallel ray, the central ray and the ray through the first focus.",
   "linkedFormal": "To find the image of an off-axis object point $P$ through a thin lens, draw any two of:\n<ul><li>a ray from $P$ <b>parallel to the axis</b>, which after the lens passes through $F_2$;</li>\n<li>a ray from $P$ through the <b>centre</b> of the lens, which goes straight on;</li>\n<li>a ray from $P$ through the <b>first focus</b> $F_1$, which emerges parallel to the axis.</li></ul>\nTheir intersection is the image point $P^{\\prime}$. A diverging lens is drawn the same way, with the rays traced back (dotted) to a virtual image.",
   "formal": "To find the image of an off-axis object point $P$ through a thin lens, draw any two of:\n<ul><li>a ray from $P$ <b>parallel to the axis</b>, which after the lens passes through $F_2$;</li>\n<li>a ray from $P$ through the <b>centre</b> of the lens, which goes straight on;</li>\n<li>a ray from $P$ through the <b>first focus</b> $F_1$, which emerges parallel to the axis.</li></ul>\nTheir intersection is the image point $P^{\\prime}$. A diverging lens is drawn the same way, with the rays traced back (dotted) to a virtual image.",
   "example": "These three rays are the special cases of the thin-lens formula: parallel-in means $u\\to\\infty$, so it goes to $F_2$; through-the-centre means the lens is locally a flat plate. Where any two meet, all the other rays from $P$ meet too — that is what \"image\" means.\n\nA converging lens with $f=10$ cm and a 4 cm object 15 cm away: the image forms at $v=30$ cm and is 8 cm tall, inverted. The three rays through the optical centre, parallel to the axis and through $F_1$ all meet at that image point.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Using the refraction \"kink\" at both faces of the lens for ray construction. For a thin lens the ray bends once, at the lens plane."
    },
    {
     "q": "Which two rays are enough?",
     "a": "Any two traced rays from the object tip; where they cross, the image forms."
    },
    {
     "q": "Which two rays should I draw?",
     "a": "Any two traced rays from the object tip will do. The three standard rays are the simplest, and they serve as a check."
    },
    {
     "q": "What if the rays do not meet?",
     "a": "They diverge after the lens. Extend them backwards to find a virtual image on the object side."
    }
   ],
   "pretest": {
    "prompt": "To locate an image by rays, which ray passes through the optical centre?",
    "options": [
     "The undeviated ray",
     "A ray parallel to the axis",
     "A ray through $F_1$"
    ],
    "correct": 0,
    "explanation": "A ray through the optical centre of a thin lens is not deviated."
   },
   "check": {
    "prompt": "The three standard rays from an object tip include the ray:",
    "options": [
     "Through the optical centre, undeviated",
     "Back along itself",
     "Perpendicular to the lens"
    ],
    "correct": 0,
    "explanation": "The undeviated ray, the ray parallel to the axis, and the ray through $F_1$ are the three standard rays."
   },
   "depth": 10
  },
  {
   "id": "c.1.4.1",
   "name": "Newton's Formula",
   "group": "newton",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-C-4"
   ],
   "prerequisites": [
    "Principal Foci and Focal Length of a Thin Lens",
    "Object and Image Distances"
   ],
   "symbol": "",
   "meaning": "Measured from the foci, object and image distances satisfy x·x′ = f₁f₂ (= −f² for a thin lens in air).",
   "linkedFormal": "Let $x$ be the object's distance from the first focus $F_1$ and $x^{\\prime}$ the image's distance from the second focus $F_2$ (both signed, positive to the right). Then\n$$\\boxed{x\\,x^{\\prime}=f_1f_2}\\qquad\\Big(=-f^2\\ \\text{for a thin lens in air}\\Big).$$",
   "formal": "Let $x$ be the object's distance from the first focus $F_1$ and $x^{\\prime}$ the image's distance from the second focus $F_2$ (both signed, positive to the right). Then\n$$\\boxed{x\\,x^{\\prime}=f_1f_2}\\qquad\\Big(=-f^2\\ \\text{for a thin lens in air}\\Big).$$",
   "example": "The thin-lens formula is written with distances from the lens; Newton's version measures from the foci instead and turns the sum of reciprocals into a single product. It shows immediately that an object approaching $F_1$ ($x\\to0$) sends its image to infinity.\n\nAn object 15 cm from a lens with $f=10$ cm forms its image at 30 cm. Then $x_1=15-10=5$ cm and $x_2=30-10=20$ cm, and $x_1x_2=100=f^2$.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Measuring $x$ and $x^{\\prime}$ from the lens. They are measured from $F_1$ and $F_2$ respectively."
    },
    {
     "q": "Where students go wrong",
     "a": "Dropping the sign: for a real object and real image in air, $x<0$ and $x^{\\prime}>0$, so $xx^{\\prime}=-f^2<0$."
    },
    {
     "q": "Is Newton's formula the same as the lens formula?",
     "a": "It is an equivalent form, with distances measured from the foci."
    },
    {
     "q": "Are $x_1$ and $x_2$ always positive?",
     "a": "In this example yes, because the object is outside $F_1$ and the image outside $F_2$. A virtual image changes the signs."
    },
    {
     "q": "When is Newton's form easier than the lens formula?",
     "a": "When the distances are already measured from the foci. Otherwise the thin-lens formula with $u$ and $v$ is quicker."
    }
   ],
   "pretest": {
    "prompt": "In Newton's formula, if $x_1=5$ cm and $f=10$ cm, then $x_2$ is:",
    "options": [
     "$20$ cm",
     "$5$ cm",
     "$10$ cm"
    ],
    "correct": 0,
    "explanation": "$x_1x_2=f^2$ gives $x_2=100/5=20$ cm."
   },
   "check": {
    "prompt": "Newton's formula measures distances from:",
    "options": [
     "The foci $F_1$ and $F_2$",
     "The lens edges",
     "The centre of curvature"
    ],
    "correct": 0,
    "explanation": "$x_1$ is measured from $F_1$ and $x_2$ from $F_2$."
   },
   "depth": 10
  },
  {
   "id": "c.1.4.2",
   "name": "Lateral Magnification of a Thin Lens",
   "group": "newton",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-3",
    "Q-C-4"
   ],
   "prerequisites": [
    "Newton's Formula",
    "Lateral Magnification at a Single Surface",
    "Object and Image Distances"
   ],
   "symbol": "",
   "meaning": "m = h′/h = v/u = −f₁/x = −x′/f₂; for a real object and real image the image is inverted.",
   "linkedFormal": "For a thin lens in air the lateral magnification is\n$$\\boxed{m=\\frac{h^{\\prime}}{h}=\\frac vu=\\frac fx=-\\frac{x^{\\prime}}{f}}$$\nwhere $x$ and $x^{\\prime}$ are the Newton distances. $|m|>1$: enlarged; $m<0$: inverted.",
   "formal": "For a thin lens in air the lateral magnification is\n$$\\boxed{m=\\frac{h^{\\prime}}{h}=\\frac vu=\\frac fx=-\\frac{x^{\\prime}}{f}}$$\nwhere $x$ and $x^{\\prime}$ are the Newton distances. $|m|>1$: enlarged; $m<0$: inverted.",
   "example": "Using the ray through the lens centre, the object and image subtend the same angle at the lens, so $h^{\\prime}/h=v/u$. The Newton form says the magnification is fixed entirely by how far the object sits from a focus: bring the object close to $F_1$ and the image grows without bound.\n\nWith $f=10$ cm and $x_1=5$ cm, $|m|=f/x_1=2$. With $x_2=20$ cm, $|m|=x_2/f=2$ as well. The image is inverted, so $m=-2$.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Reading $m=v/u$ as a ratio of magnitudes: with signs, $v>0>u$ for a real image, so $m<0$ (inverted)."
    },
    {
     "q": "Why are both forms of $m$ equal?",
     "a": "Newton's formula $x_1x_2=f^2$ makes $f/x_1=x_2/f$."
    },
    {
     "q": "Why is the magnitude $f/x_1$?",
     "a": "Newton's formula makes $f/x_1=x_2/f$. The minus sign records that a real image is inverted."
    },
    {
     "q": "When is the image smaller than the object?",
     "a": "When $x_1>f$, which means the object is beyond $2f$. Then $|m|<1$."
    }
   ],
   "pretest": {
    "prompt": "With $f=10$ cm and $x_1=5$ cm, the lateral magnification $m=f/x_1$ is:",
    "options": [
     "$2$",
     "$0.5$",
     "$-2$"
    ],
    "correct": 0,
    "explanation": "$m=f/x_1=10/5=2$."
   },
   "check": {
    "prompt": "With $x_2=20$ cm and $f=10$ cm, $m=x_2/f$ is:",
    "options": [
     "$2$",
     "$1/2$",
     "$200$"
    ],
    "correct": 0,
    "explanation": "$m=x_2/f=20/10=2$, the same value as $f/x_1$."
   },
   "depth": 11
  },
  {
   "id": "c.1.4.3",
   "name": "Longitudinal Magnification",
   "group": "newton",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [],
   "prerequisites": [
    "Lateral Magnification of a Thin Lens",
    "Object and Image Distances"
   ],
   "symbol": "",
   "meaning": "For a small object, the axial magnification is m_L = dv/du = m².",
   "linkedFormal": "A short object of length $\\delta u$ along the axis has an image of length $\\delta v$ with\n$$m_L=\\frac{\\delta v}{\\delta u}=m^{2}\\ \\ (>0).$$\nThe longitudinal magnification is always positive: the image of an object with its near end toward the lens has its near end toward the lens too.",
   "formal": "A short object of length $\\delta u$ along the axis has an image of length $\\delta v$ with\n$$m_L=\\frac{\\delta v}{\\delta u}=m^{2}\\ \\ (>0).$$\nThe longitudinal magnification is always positive: the image of an object with its near end toward the lens has its near end toward the lens too.",
   "example": "Lateral magnification grows as $m$, but depth is stretched twice over — the image distance changes at the same time as the object distance moves — so a 3-D object is imaged as a distorted, pancaked or elongated version of itself unless $m=\\pm1$.\n\nIf $|m|=2$ and the object moves 0.1 cm towards the lens, the image moves about $m^2\\times0.1=0.4$ cm. The longitudinal displacement is much larger than the transverse one.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Confusing $m_L=m^2$ with $m_L=m$. A magnification of 3 stretches depth by 9, not 3."
    },
    {
     "q": "Why is it the square of $m$?",
     "a": "A small step of the object moves the image by about $m^2$ times as much along the axis."
    },
    {
     "q": "Why are the two displacements in opposite directions?",
     "a": "For a converging lens, moving the object towards $F_1$ moves the image away from the lens, so the displacements oppose each other."
    },
    {
     "q": "Why is the longitudinal magnification $m^2$?",
     "a": "Locally the image shift along the axis scales with the square of the transverse magnification, which is what the derivative of the lens formula gives."
    }
   ],
   "pretest": {
    "prompt": "Longitudinal magnification is defined as:",
    "options": [
     "The change in image position divided by the change in object position",
     "$h_i/h_o$",
     "$f/x$"
    ],
    "correct": 0,
    "explanation": "It is the ratio of small displacements along the axis."
   },
   "check": {
    "prompt": "If the transverse magnification is $m=2$, the magnitude of the longitudinal magnification is:",
    "options": [
     "$4$",
     "$2$",
     "$1/2$"
    ],
    "correct": 0,
    "explanation": "The longitudinal magnification has magnitude $m^2$."
   },
   "depth": 12
  },
  {
   "id": "c.1.1.5",
   "name": "Fermat Stationarity and the Second Derivative of Optical Path",
   "group": "fermat",
   "kind": "idea",
   "minutes": 6,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-7"
   ],
   "prerequisites": [
    "Optical Path and Fermat's Principle",
    "Sign Convention and the Paraxial Approximation",
    "Small-Angle and Binomial Approximations"
   ],
   "symbol": "",
   "meaning": "The second derivative d²L/dθ² = r²n₂(1/y − 1/y₀) shows Fermat's path is a minimum for y < y₀, maximum for y > y₀, and stationary at the image y = y₀.",
   "linkedFormal": "Fermat's principle states that the actual ray path between two points makes the optical path length stationary ($\\delta L = 0$). For a spherical refracting surface of radius $r$ separating media $n_1$ and $n_2$, the second derivative of the optical path with respect to the paraxial ray angle $\\theta$ is\n$$\\boxed{\\frac{d^2 L}{d\\theta^2} = r^2 n_2 \\left(\\frac{1}{y} - \\frac{1}{y_0}\\right)},$$\nwhere $y_0$ is the paraxial image distance given by $\\frac{n_2}{y_0} + \\frac{n_1}{x} = \\frac{n_2 - n_1}{r}$.\n<ul>\n<li>If $y < y_0$ (observation point before the image), $\\frac{d^2 L}{d\\theta^2} > 0$: the actual path is a <b>minimum</b>.</li>\n<li>If $y > y_0$ (observation point beyond the image), $\\frac{d^2 L}{d\\theta^2} < 0$: the actual path is a <b>maximum</b>.</li>\n<li>If $y = y_0$ (at the paraxial image), $\\frac{d^2 L}{d\\theta^2} = 0$: the optical path is <b>stationary</b> to second order, so all paraxial rays take exactly the same travel time.</li>\n</ul>",
   "formal": "Fermat's principle states that the actual ray path between two points makes the optical path length stationary ($\\delta L = 0$). For a spherical refracting surface of radius $r$ separating media $n_1$ and $n_2$, the second derivative of the optical path with respect to the paraxial ray angle $\\theta$ is\n$$\\boxed{\\frac{d^2 L}{d\\theta^2} = r^2 n_2 \\left(\\frac{1}{y} - \\frac{1}{y_0}\\right)},$$\nwhere $y_0$ is the paraxial image distance given by $\\frac{n_2}{y_0} + \\frac{n_1}{x} = \\frac{n_2 - n_1}{r}$.\n<ul>\n<li>If $y < y_0$ (observation point before the image), $\\frac{d^2 L}{d\\theta^2} > 0$: the actual path is a <b>minimum</b>.</li>\n<li>If $y > y_0$ (observation point beyond the image), $\\frac{d^2 L}{d\\theta^2} < 0$: the actual path is a <b>maximum</b>.</li>\n<li>If $y = y_0$ (at the paraxial image), $\\frac{d^2 L}{d\\theta^2} = 0$: the optical path is <b>stationary</b> to second order, so all paraxial rays take exactly the same travel time.</li>\n</ul>",
   "example": "Between conjugate image points, every ray takes the same time to travel from object to image. If you test an observation point placed before the focus, the straight axial path is quicker than any slanted alternative, making it a minimum. But if you test a point placed beyond the focus, where the rays have already crossed, the axial path is actually longer than the detour, making it a local maximum. At the exact image point, all nearby paths balance perfectly.\n\nNear $x=0$, take $L(x)=x^2$. Then $L'(0)=0$ and $L''(0)=2>0$, so the stationary point is a minimum. Take $L(x)=x^3$ instead: $L'(0)=0$ and $L''(0)=0$, the point is an inflection, and $L$ changes sign.",
   "faq": [
    {
     "q": "Where students go wrong",
     "a": "Assuming Fermat's principle always requires a minimum optical path: between conjugate foci all rays take identical time (stationarity), and beyond the focus the axial ray is a local maximum."
    },
    {
     "q": "Is a zero first derivative enough?",
     "a": "No. The second derivative (or higher terms) decides the type of stationary point."
    },
    {
     "q": "Why does the second derivative matter?",
     "a": "When several paths compete, it tells which stationary path is a local minimum and which is not."
    },
    {
     "q": "Is a zero first derivative always a stationary path?",
     "a": "Yes. Stationary means the first derivative vanishes, whatever the second derivative is."
    }
   ],
   "pretest": {
    "prompt": "At a stationary point of $L(x)$, the first derivative $dL/dx$ equals:",
    "options": [
     "$0$",
     "$1$",
     "$L$"
    ],
    "correct": 0,
    "explanation": "A stationary point is where the first derivative vanishes."
   },
   "check": {
    "prompt": "A stationary point with $d^2L/dx^2>0$ is:",
    "options": [
     "A minimum",
     "A maximum",
     "Always an inflection"
    ],
    "correct": 0,
    "explanation": "A positive second derivative at a zero first derivative means a local minimum."
   },
   "depth": 3
  },
  {
   "id": "c.1.s.1",
   "name": "Light Ray",
   "group": "foundations",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-2",
    "Q-A-6"
   ],
   "prerequisites": [],
   "symbol": "",
   "meaning": "A ray is the path along which light energy travels, in the limit where the wavelength is negligible.",
   "linkedFormal": "A ray is an infinitely thin pencil of light, the limit of a beam as the wavelength tends to zero. Its direction is the direction of energy flow. In a uniform medium rays are straight lines, and the path a ray takes is the one that makes the [[Optical Path and Fermat's Principle|optical path]] stationary.",
   "formal": "A ray is an infinitely thin pencil of light, the limit of a beam as the wavelength tends to zero. Its direction is the direction of energy flow. In a uniform medium rays are straight lines, and the path a ray takes is the one that makes the optical path stationary.",
   "example": "A narrow beam from a pinhole much larger than the wavelength still looks like a ray. A pinhole much smaller than the wavelength spreads the light, which is diffraction, outside the ray picture.",
   "faq": [
    {
     "q": "Do rays exist physically?",
     "a": "Only as a limit. A real beam has finite width, and the ray is what remains when the wavelength is taken to zero."
    }
   ],
   "pretest": {
    "prompt": "In geometrical optics, a ray is best described as:",
    "options": [
     "An infinitely thin pencil of light showing the energy flow",
     "A wavelength of light",
     "A beam with finite width"
    ],
    "correct": 0,
    "explanation": "The ray is the zero-wavelength limit of a narrow beam; it marks the direction of energy flow."
   },
   "check": {
    "prompt": "In a uniform medium, rays travel:",
    "options": [
     "In straight lines",
     "In circles",
     "At random"
    ],
    "correct": 0,
    "explanation": "In a uniform medium the stationary optical path is a straight line."
   },
   "depth": 0
  },
  {
   "id": "c.1.s.2",
   "name": "Refractive Index",
   "group": "foundations",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-4",
    "Q-A-6"
   ],
   "prerequisites": [
    "Light Ray"
   ],
   "symbol": "",
   "meaning": "The refractive index $n=c/v$ is the ratio of the speed of light in vacuum to its speed in the medium.",
   "linkedFormal": "$n=c/v$. Light slows in a transparent medium, so $n>1$. Water has $n\\approx1.33$ and common glass about $1.5$. Snell's law and the lens-maker's equation use ratios of indices, such as $n_g/n_m$, so only relative values matter when the surrounding medium is not air.",
   "formal": "$n=c/v$. Light slows in a transparent medium, so $n>1$. Water has $n\\approx1.33$ and common glass about $1.5$. Snell's law and the lens-maker's equation use ratios of indices, such as $n_g/n_m$, so only relative values matter when the surrounding medium is not air.",
   "example": "In glass with $n=1.5$ light travels at $c/1.5=2\\times10^8$ m/s, which is two thirds of its vacuum speed.",
   "faq": [
    {
     "q": "Why do only ratios of indices matter in some formulas?",
     "a": "The bending at a boundary depends on how the two media compare, so the ratio $n_2/n_1$ is what enters."
    }
   ],
   "pretest": {
    "prompt": "Light travels at $c/1.5$ in glass. Its speed in glass is about:",
    "options": [
     "$2\\times10^8$ m/s",
     "$3\\times10^8$ m/s",
     "$4.5\\times10^8$ m/s"
    ],
    "correct": 0,
    "explanation": "$c/n=3\\times10^8/1.5=2\\times10^8$ m/s."
   },
   "check": {
    "prompt": "Light in water, with $n=1.33$, travels:",
    "options": [
     "Slower than in vacuum",
     "Faster than in vacuum",
     "At the same speed"
    ],
    "correct": 0,
    "explanation": "Any transparent medium has $n>1$, so light is slower there."
   },
   "depth": 1
  },
  {
   "id": "c.1.s.3",
   "name": "Reflection and Refraction at an Interface",
   "group": "fermat",
   "kind": "idea",
   "minutes": 5,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-6",
    "Q-C-1"
   ],
   "prerequisites": [
    "Light Ray",
    "Refractive Index",
    "Normal to a Surface"
   ],
   "symbol": "",
   "meaning": "At a boundary, a ray is partly reflected and partly refracted, with angles measured from the normal.",
   "linkedFormal": "At a boundary the reflected ray leaves at the same angle to the normal as the incident ray, $\\theta_i=\\theta_r$, and the refracted ray obeys $n_1\\sin\\theta_1=n_2\\sin\\theta_2$. Both results follow from stationarity of the optical path, which is the [[Law of Reflection from Fermat's Principle|law of reflection]] and [[Snell's Law of Refraction from Fermat's Principle|Snell's law]].",
   "formal": "At a boundary the reflected ray leaves at the same angle to the normal as the incident ray, $\\theta_i=\\theta_r$, and the refracted ray obeys $n_1\\sin\\theta_1=n_2\\sin\\theta_2$. Both results follow from stationarity of the optical path, which is the law of reflection and Snell's law.",
   "example": "A ray going from air ($n=1$) into glass ($n=1.5$) at $30^\\circ$ bends to $\\sin\\theta_2=0.5/1.5$, so $\\theta_2\\approx19.5^\\circ$.",
   "faq": [
    {
     "q": "Is a ray always partly reflected too?",
     "a": "Yes. The reflected and refracted rays are both present; the problems here concern the directions of the two rays."
    }
   ],
   "pretest": {
    "prompt": "A ray hits a flat boundary. Its reflected angle, measured from the normal, is:",
    "options": [
     "Equal to the angle of incidence",
     "Twice the angle of incidence",
     "Zero"
    ],
    "correct": 0,
    "explanation": "The law of reflection gives equal angles on the same side of the normal."
   },
   "check": {
    "prompt": "Going from air into glass, the refracted ray bends:",
    "options": [
     "Towards the normal",
     "Away from the normal",
     "Not at all"
    ],
    "correct": 0,
    "explanation": "A denser medium has the larger index, so $\\sin\\theta_2$ is smaller and the ray bends towards the normal."
   },
   "depth": 3
  },
  {
   "id": "c.1.s.4",
   "name": "Normal to a Surface",
   "group": "surface",
   "kind": "idea",
   "minutes": 3,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-B-1"
   ],
   "prerequisites": [
    "Pole and Principal Axis"
   ],
   "symbol": "",
   "meaning": "The normal is the line perpendicular to a surface at the point of incidence. Angles of incidence and refraction are measured from it.",
   "linkedFormal": "The normal at $P$ is perpendicular to the tangent plane of the surface. For a sphere it points along the radius $CP$ through the centre of curvature $C$. The angles $\\theta_i$ and $\\theta_r$ are measured from this line, not from the surface.",
   "formal": "The normal at $P$ is perpendicular to the tangent plane of the surface. For a sphere it points along the radius $CP$ through the centre of curvature $C$. The angles $\\theta_i$ and $\\theta_r$ are measured from this line, not from the surface.",
   "example": "For a sphere of centre $C$, a ray that meets the surface at $P$ has its normal along $CP$. A ray aimed at $C$ meets the surface along the normal.",
   "faq": [
    {
     "q": "Why not measure from the surface?",
     "a": "The refraction law is about the change of direction relative to the normal, which sets how much the ray bends."
    }
   ],
   "pretest": {
    "prompt": "For a spherical surface, the normal at $P$ lies along:",
    "options": [
     "The radius $CP$",
     "The tangent at $P$",
     "The axis only"
    ],
    "correct": 0,
    "explanation": "The normal to a sphere is the radius through the point."
   },
   "check": {
    "prompt": "Angles of incidence are measured from:",
    "options": [
     "The normal",
     "The surface",
     "The axis"
    ],
    "correct": 0,
    "explanation": "Angles are always measured from the normal, not the surface."
   },
   "depth": 2
  },
  {
   "id": "c.1.s.5",
   "name": "Pole and Principal Axis",
   "group": "surface",
   "kind": "idea",
   "minutes": 3,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-B-1"
   ],
   "prerequisites": [
    "Light Ray"
   ],
   "symbol": "",
   "meaning": "The principal axis of a spherical surface is the line through the centre of curvature, and the pole is where it meets the surface.",
   "linkedFormal": "For a spherical surface, the principal axis is the line joining the centre of curvature $C$ and the pole $V$, the vertex of the surface. Axial objects and images lie on this line, and distances are measured from $V$.",
   "formal": "For a spherical surface, the principal axis is the line joining the centre of curvature $C$ and the pole $V$, the vertex of the surface. Axial objects and images lie on this line, and distances are measured from $V$.",
   "example": "For a concave mirror, the pole is the centre of the mirror face, and the axis runs from the pole to the centre of the sphere.",
   "faq": [
    {
     "q": "Is the pole always at the middle of the surface?",
     "a": "For a symmetric cap, yes. In general the pole is wherever the axis crosses the surface."
    }
   ],
   "pretest": {
    "prompt": "The pole of a spherical surface is:",
    "options": [
     "The point where the axis meets the surface",
     "The centre of curvature",
     "Any point on the rim"
    ],
    "correct": 0,
    "explanation": "The pole, or vertex, is where the principal axis cuts the surface."
   },
   "check": {
    "prompt": "Distances for a single surface are measured from:",
    "options": [
     "The pole",
     "The centre of curvature",
     "The rim"
    ],
    "correct": 0,
    "explanation": "The standard convention measures object and image distances from the pole."
   },
   "depth": 1
  },
  {
   "id": "c.1.s.6",
   "name": "Radius of Curvature",
   "group": "surface",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-1",
    "Q-B-2",
    "Q-B-3",
    "Q-C-2",
    "Q-C-3"
   ],
   "prerequisites": [
    "Pole and Principal Axis"
   ],
   "symbol": "",
   "meaning": "The radius $R$ of a spherical surface is positive when its centre lies on the far side of the light, and negative otherwise.",
   "linkedFormal": "The sign of $R$ follows from where the centre $C$ lies relative to the incoming light. With light from the left, $R>0$ when $C$ is on the image side, and $R<0$ when $C$ is on the incident side. A plane surface has $R\\to\\infty$.",
   "formal": "The sign of $R$ follows from where the centre $C$ lies relative to the incoming light. With light from the left, $R>0$ when $C$ is on the image side, and $R<0$ when $C$ is on the incident side. A plane surface has $R\\to\\infty$.",
   "example": "A biconvex lens has $R_1>0$ for its first face and $R_2<0$ for its second, because the second centre lies on the incident side.",
   "faq": [
    {
     "q": "Why does the sign of $R$ matter?",
     "a": "The sign sets the bending of rays in every surface and lens formula. A wrong sign gives a wrong image position."
    }
   ],
   "pretest": {
    "prompt": "For light from the left, a convex surface facing the object has its centre:",
    "options": [
     "On the image side, so $R>0$",
     "On the object side, so $R>0$",
     "At the pole"
    ],
    "correct": 0,
    "explanation": "A surface that bulges towards the object has its centre beyond it, on the image side."
   },
   "check": {
    "prompt": "A plane surface has radius of curvature:",
    "options": [
     "Infinite",
     "Zero",
     "Equal to the thickness"
    ],
    "correct": 0,
    "explanation": "A plane is the limit of a sphere of infinite radius."
   },
   "depth": 2
  },
  {
   "id": "c.1.s.7",
   "name": "Sagitta",
   "group": "surface",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-B-1",
    "Q-B-2",
    "Q-C-2"
   ],
   "prerequisites": [
    "Small-Angle and Binomial Approximations"
   ],
   "symbol": "",
   "meaning": "The sagitta is how far a spherical surface lies back from its tangent plane at the pole, measured along the axis, at a given height $h$.",
   "linkedFormal": "A sphere of radius $R$ has sag $z=R-\\sqrt{R^2-h^2}$ at height $h$ above the axis. For $h\\ll R$ this is $z\\approx h^2/(2R)$. The $h^2$ term is what the paraxial expansions of optical path rely on.",
   "formal": "A sphere of radius $R$ has sag $z=R-\\sqrt{R^2-h^2}$ at height $h$ above the axis. For $h\\ll R$ this is $z\\approx h^2/(2R)$. The $h^2$ term is what the paraxial expansions of optical path rely on.",
   "example": "For $R=50$ cm and $h=1$ cm, the sag is about $1/100$ cm $=0.01$ cm, which is tiny compared with $R$.",
   "faq": [
    {
     "q": "Why is the $h^2$ term important?",
     "a": "It is the first term that makes rays at different heights differ, which is why equal optical path needs it to vanish."
    }
   ],
   "pretest": {
    "prompt": "For a sphere of radius $R$ and small height $h$, the sag is approximately:",
    "options": [
     "$h^2/(2R)$",
     "$h/R$",
     "$R/h$"
    ],
    "correct": 0,
    "explanation": "Expanding $R-\\sqrt{R^2-h^2}$ for small $h$ gives $h^2/(2R)$."
   },
   "check": {
    "prompt": "Doubling $h$ multiplies the sag by:",
    "options": [
     "$4$",
     "$2$",
     "$\\tfrac12$"
    ],
    "correct": 0,
    "explanation": "The sag depends on $h^2$, so doubling $h$ multiplies it by four."
   },
   "depth": 1
  },
  {
   "id": "c.1.s.8",
   "name": "Small-Angle and Binomial Approximations",
   "group": "foundations",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-B-1"
   ],
   "prerequisites": [],
   "symbol": "",
   "meaning": "For small $x$: $\\sin x\\approx x$, $\\cos x\\approx 1-x^2/2$, and $\\sqrt{a^2+x^2}\\approx a+x^2/(2a)$ when $x\\ll a$.",
   "linkedFormal": "The paraxial limit uses $\\sin\\theta\\approx\\theta$ for small angles and $\\sqrt{a^2+h^2}\\approx a+\\dfrac{h^2}{2a}$ for $h\\ll a$. Expanding each leg of an optical path to second order in $h$ gives the $h^2$ terms that fix the image conditions.",
   "formal": "The paraxial limit uses $\\sin\\theta\\approx\\theta$ for small angles and $\\sqrt{a^2+h^2}\\approx a+\\dfrac{h^2}{2a}$ for $h\\ll a$. Expanding each leg of an optical path to second order in $h$ gives the $h^2$ terms that fix the image conditions.",
   "example": "$\\sqrt{50^2+1^2}\\approx 50+\\dfrac{1}{100}=50.01$, which is accurate to about one part in ten thousand.",
   "faq": [
    {
     "q": "Why only second order?",
     "a": "The first-order terms cancel for paraxial rays, so the first term that can differ between rays is the $h^2$ term."
    }
   ],
   "pretest": {
    "prompt": "For small $h$, $\\sqrt{u^2+h^2}$ is approximately:",
    "options": [
     "$u+h^2/(2u)$",
     "$u+h$",
     "$u$ exactly"
    ],
    "correct": 0,
    "explanation": "The binomial expansion gives $u+h^2/(2u)$ to second order in $h$."
   },
   "check": {
    "prompt": "$\\sin(0.05)$ is approximately:",
    "options": [
     "$0.05$",
     "$0.0005$",
     "$0.5$"
    ],
    "correct": 0,
    "explanation": "For small angles in radians $\\sin x\\approx x$."
   },
   "depth": 0
  },
  {
   "id": "c.1.s.9",
   "name": "Object and Image Distances",
   "group": "lens",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-3",
    "Q-B-3",
    "Q-C-4"
   ],
   "prerequisites": [
    "Light Ray"
   ],
   "symbol": "",
   "meaning": "$u$ is the object distance and $v$ the image distance, measured from the optical centre or pole with signs.",
   "linkedFormal": "In the Cartesian convention with light travelling left to right: $u<0$ for a real object on the incident side, $v>0$ for a real image on the far side, and $v<0$ for a virtual image on the object side. These signs make a single set of formulas valid for every case.",
   "formal": "In the Cartesian convention with light travelling left to right: $u<0$ for a real object on the incident side, $v>0$ for a real image on the far side, and $v<0$ for a virtual image on the object side. These signs make a single set of formulas valid for every case.",
   "example": "A real object 20 cm in front of a lens has $u=-20$ cm. A virtual image 15 cm in front of the lens has $v=-15$ cm.",
   "faq": [
    {
     "q": "Do I always need signs?",
     "a": "Yes, once a convention is chosen. The formulas are only valid with the convention used to derive them."
    }
   ],
   "pretest": {
    "prompt": "In Cartesian signs, a real object in front of a lens has $u$:",
    "options": [
     "Negative",
     "Positive",
     "Zero"
    ],
    "correct": 0,
    "explanation": "Real objects lie on the incident side, so $u<0$."
   },
   "check": {
    "prompt": "A virtual image on the object side of a lens has $v$:",
    "options": [
     "Negative",
     "Positive",
     "Infinite"
    ],
    "correct": 0,
    "explanation": "Virtual images on the incident side give $v<0$."
   },
   "depth": 1
  },
  {
   "id": "c.1.s.10",
   "name": "Optical Centre",
   "group": "lens",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-1"
   ],
   "prerequisites": [
    "Object and Image Distances"
   ],
   "symbol": "",
   "meaning": "The optical centre is the point on a thin lens's axis through which rays pass without deviation.",
   "linkedFormal": "For a thin lens the optical centre $O$ is where the axis meets the lens. A ray through $O$ is undeviated, because near $O$ the two faces are almost parallel and cancel their bending. Object and image distances are measured from $O$.",
   "formal": "For a thin lens the optical centre $O$ is where the axis meets the lens. A ray through $O$ is undeviated, because near $O$ the two faces are almost parallel and cancel their bending. Object and image distances are measured from $O$.",
   "example": "A ray from an object tip through $O$ leaves the lens along the same line, so it marks the image height directly.",
   "faq": [
    {
     "q": "Why is it called the centre?",
     "a": "It is the one point on the axis whose ray direction is unchanged, which is why it is a convenient reference."
    }
   ],
   "pretest": {
    "prompt": "A ray passing through the optical centre of a thin lens is:",
    "options": [
     "Undeviated",
     "Bent towards the axis",
     "Reflected"
    ],
    "correct": 0,
    "explanation": "At the optical centre the two faces act like a thin plate, so the ray is not deviated."
   },
   "check": {
    "prompt": "For a thin lens, object and image distances are measured from:",
    "options": [
     "The optical centre",
     "The rim",
     "The focal point"
    ],
    "correct": 0,
    "explanation": "The optical centre is the reference point for a thin lens."
   },
   "depth": 2
  },
  {
   "id": "c.1.s.11",
   "name": "Real and Virtual Images",
   "group": "foundations",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-2",
    "Q-A-3",
    "Q-B-2",
    "Q-B-3"
   ],
   "prerequisites": [
    "Object and Image Distances"
   ],
   "symbol": "",
   "meaning": "A real image is where rays actually converge and can be projected. A virtual image is where their extensions appear to converge.",
   "linkedFormal": "A real image can be caught on a screen. A virtual image cannot, because rays only appear to come from it. A converging lens gives a real image for an object beyond $f$, and a virtual image on the object side for an object inside $f$.",
   "formal": "A real image can be caught on a screen. A virtual image cannot, because rays only appear to come from it. A converging lens gives a real image for an object beyond $f$, and a virtual image on the object side for an object inside $f$.",
   "example": "A slide projector forms a real image on a screen. A magnifying glass held inside its focal length forms a virtual, erect image you see through the lens.",
   "faq": [
    {
     "q": "Can a virtual image be magnified?",
     "a": "Yes. A magnifying glass gives an erect, magnified virtual image."
    }
   ],
   "pretest": {
    "prompt": "A real image can be:",
    "options": [
     "Projected on a screen",
     "Seen only through the rays' extensions",
     "Only found by calculation"
    ],
    "correct": 0,
    "explanation": "Rays actually meet at a real image, so a screen placed there shows it."
   },
   "check": {
    "prompt": "A converging lens forms a real image for an object:",
    "options": [
     "Beyond its focal length",
     "Inside its focal length",
     "At the optical centre"
    ],
    "correct": 0,
    "explanation": "Inside $f$ the rays diverge after the lens, giving only a virtual image."
   },
   "depth": 2
  },
  {
   "id": "c.1.s.12",
   "name": "Converging and Diverging Lens",
   "group": "lens",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-2",
    "Q-A-4",
    "Q-C-3"
   ],
   "prerequisites": [
    "Real and Virtual Images",
    "Optical Centre"
   ],
   "symbol": "",
   "meaning": "A converging lens has positive focal length and brings parallel rays to a focus. A diverging lens has negative focal length.",
   "linkedFormal": "For $1/f>0$ the lens is converging: parallel rays meet at $F_2$. For $1/f<0$ it is diverging, and parallel rays spread as if from a point on the object side. A biconvex lens of glass in air is converging, since $n_g>1$ and both faces bulge outward.",
   "formal": "For $1/f>0$ the lens is converging: parallel rays meet at $F_2$. For $1/f<0$ it is diverging, and parallel rays spread as if from a point on the object side. A biconvex lens of glass in air is converging, since $n_g>1$ and both faces bulge outward.",
   "example": "A biconvex glass lens in air focuses sunlight to a point. A biconcave lens of the same glass spreads the same beam.",
   "faq": [
    {
     "q": "Can one lens be converging in air and diverging in water?",
     "a": "Yes, if the index of the lens drops below that of the medium, the sign of $1/f$ reverses."
    }
   ],
   "pretest": {
    "prompt": "A biconvex glass lens in air is:",
    "options": [
     "Converging",
     "Diverging",
     "Neither"
    ],
    "correct": 0,
    "explanation": "Its focal length is positive because $(n_g-1)>0$ and both faces bulge outward."
   },
   "check": {
    "prompt": "A diverging lens makes parallel rays:",
    "options": [
     "Spread out, as if from a point on the object side",
     "Converge to a focus",
     "Stay parallel"
    ],
    "correct": 0,
    "explanation": "Negative focal length means the rays spread after the lens."
   },
   "depth": 3
  },
  {
   "id": "c.1.s.13",
   "name": "Plane Mirror",
   "group": "surface",
   "kind": "idea",
   "minutes": 3,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-6",
    "Q-C-1"
   ],
   "prerequisites": [
    "Normal to a Surface",
    "Radius of Curvature"
   ],
   "symbol": "",
   "meaning": "A plane mirror is a reflecting surface of infinite radius of curvature.",
   "linkedFormal": "A plane mirror has $R\\to\\infty$, so it has no curvature term and only the law of reflection acts. The image of a point object is virtual and lies as far behind the mirror as the object is in front of it.",
   "formal": "A plane mirror has $R\\to\\infty$, so it has no curvature term and only the law of reflection acts. The image of a point object is virtual and lies as far behind the mirror as the object is in front of it.",
   "example": "An object 30 cm in front of a plane mirror forms a virtual image 30 cm behind it, the same size and upright.",
   "faq": [
    {
     "q": "Why does a plane mirror not focus?",
     "a": "Its rays stay parallel after reflection, so there is no focal point at finite distance."
    }
   ],
   "pretest": {
    "prompt": "The image in a plane mirror is:",
    "options": [
     "Virtual, the same size, as far behind as the object is in front",
     "Real and inverted",
     "Magnified"
    ],
    "correct": 0,
    "explanation": "A plane mirror gives a virtual image of unit magnification at equal distance."
   },
   "check": {
    "prompt": "The radius of curvature of a plane mirror is:",
    "options": [
     "Infinite",
     "Zero",
     "Equal to its width"
    ],
    "correct": 0,
    "explanation": "A plane is a sphere of infinite radius."
   },
   "depth": 3
  },
  {
   "id": "c.1.s.14",
   "name": "Ellipse and Focal Distances",
   "group": "fermat",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [
    "Q-A-5"
   ],
   "prerequisites": [
    "Light Ray"
   ],
   "symbol": "",
   "meaning": "An ellipse is the set of points whose distances from two foci add up to a constant.",
   "linkedFormal": "An ellipse with foci $F_1$ and $F_2$ and semi-major axis $a$ is the set of points $P$ with $F_1P+PF_2=2a$. This constant-sum property is what makes every reflected path from one focus to the other equal in length.",
   "formal": "An ellipse with foci $F_1$ and $F_2$ and semi-major axis $a$ is the set of points $P$ with $F_1P+PF_2=2a$. This constant-sum property is what makes every reflected path from one focus to the other equal in length.",
   "example": "For $a=5$ cm and foci 6 cm apart, every point $P$ on the ellipse has $F_1P+PF_2=10$ cm.",
   "faq": [
    {
     "q": "Is an ellipse a circle with two centres?",
     "a": "No. A circle is the special case where both foci coincide, so the distance sum is constant from one centre."
    }
   ],
   "pretest": {
    "prompt": "For a point $P$ on an ellipse with foci $F_1$, $F_2$:",
    "options": [
     "$F_1P+PF_2$ is constant",
     "$F_1P\\cdot PF_2$ is constant",
     "$F_1P-PF_2$ is zero"
    ],
    "correct": 0,
    "explanation": "The defining property of an ellipse is a constant sum of focal distances."
   },
   "check": {
    "prompt": "Doubling the semi-major axis $a$ doubles:",
    "options": [
     "The constant sum $F_1P+PF_2$",
     "The focal distance $F_1F_2$ only",
     "Nothing"
    ],
    "correct": 0,
    "explanation": "The constant sum is $2a$, so it doubles with $a$."
   },
   "depth": 1
  },
  {
   "id": "c.1.s.15",
   "name": "Wavefront",
   "group": "foundations",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [],
   "prerequisites": [
    "Light Ray"
   ],
   "symbol": "",
   "meaning": "A wavefront is a surface of constant phase, and rays are normal to it.",
   "linkedFormal": "Rays are the normals to wavefronts. A point source gives spherical wavefronts. A lens or mirror changes the curvature of the wavefront, so that rays converge to, or appear to come from, a point.",
   "formal": "Rays are the normals to wavefronts. A point source gives spherical wavefronts. A lens or mirror changes the curvature of the wavefront, so that rays converge to, or appear to come from, a point.",
   "example": "Light from a distant star arrives as nearly plane wavefronts. A converging lens turns them into spherical wavefronts centred on the focus.",
   "faq": [
    {
     "q": "Does a lens change the wavefront?",
     "a": "Yes. It changes the wavefront's curvature, which is why the image forms where the wavefronts converge."
    }
   ],
   "pretest": {
    "prompt": "A wavefront is:",
    "options": [
     "A surface of constant phase",
     "A ray",
     "A beam with finite width"
    ],
    "correct": 0,
    "explanation": "The wavefront is the surface on which all points have the same phase."
   },
   "check": {
    "prompt": "Rays are everywhere:",
    "options": [
     "Normal to the wavefronts",
     "Parallel to the wavefronts",
     "Tangent to the source"
    ],
    "correct": 0,
    "explanation": "The ray direction is the normal to the wavefront."
   },
   "depth": 1
  },
  {
   "id": "c.1.s.16",
   "name": "Axial Point Image",
   "group": "surface",
   "kind": "idea",
   "minutes": 4,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [],
   "prerequisites": [
    "Sagitta",
    "Small-Angle and Binomial Approximations"
   ],
   "symbol": "",
   "meaning": "A surface images an axial object point to an axial image point only in the paraxial limit; wide rays are imaged less sharply.",
   "linkedFormal": "For paraxial rays, a spherical surface images an axial object point to an axial image point, because the $h^2$ terms cancel. For rays far from the axis the $h^4$ terms do not cancel, which is spherical aberration. The image formulas in this module are therefore paraxial results.",
   "formal": "For paraxial rays, a spherical surface images an axial object point to an axial image point, because the $h^2$ terms cancel. For rays far from the axis the $h^4$ terms do not cancel, which is spherical aberration. The image formulas in this module are therefore paraxial results.",
   "example": "A spherical mirror brings rays near the axis to a sharp focus, while rays near the rim meet slightly closer to the mirror.",
   "faq": [
    {
     "q": "Is the paraxial result wrong for wide rays?",
     "a": "It is only approximate there. It is the right model for the rays that the formulas describe."
    }
   ],
   "pretest": {
    "prompt": "A spherical surface images an axial point sharply for:",
    "options": [
     "Paraxial rays",
     "All rays at any height",
     "Only oblique rays"
    ],
    "correct": 0,
    "explanation": "The $h^2$ terms cancel only for rays close to the axis."
   },
   "check": {
    "prompt": "The effect that spoils the image of wide rays from a sphere is:",
    "options": [
     "Spherical aberration",
     "Refraction",
     "Diffraction"
    ],
    "correct": 0,
    "explanation": "Wide rays fail the paraxial cancellation, which is spherical aberration."
   },
   "depth": 2
  },
  {
   "id": "c.1.s.17",
   "name": "Ray Through the Centre of Curvature",
   "group": "surface",
   "kind": "idea",
   "minutes": 3,
   "aliases": [],
   "verify": false,
   "status": "unknown",
   "usedIn": [],
   "prerequisites": [
    "Radius of Curvature",
    "Normal to a Surface"
   ],
   "symbol": "",
   "meaning": "A ray aimed at the centre of curvature meets the surface along its normal, so it is not deviated.",
   "linkedFormal": "A ray from $O$ through $C$ strikes the surface normally, so $\\theta_i=0$ and the refracted or reflected ray goes straight back along the same line. This gives a simple way to check where the image of a point on the axis lies.",
   "formal": "A ray from $O$ through $C$ strikes the surface normally, so $\\theta_i=0$ and the refracted or reflected ray goes straight back along the same line. This gives a simple way to check where the image of a point on the axis lies.",
   "example": "For a concave mirror with centre $C$, a ray from an object point through $C$ returns along its own path.",
   "faq": [
    {
     "q": "Does this ray work for a plane surface?",
     "a": "No. A plane has no centre of curvature, so the construction needs a curved surface."
    }
   ],
   "pretest": {
    "prompt": "A ray aimed at the centre of curvature of a sphere is:",
    "options": [
     "Along the normal, so it is not deviated",
     "Deviated towards the axis",
     "Parallel to the axis"
    ],
    "correct": 0,
    "explanation": "A ray along the radius meets the sphere normally."
   },
   "check": {
    "prompt": "For a ray through $C$, the angle of incidence is:",
    "options": [
     "$0$",
     "$90^\\circ$",
     "Equal to the refraction angle"
    ],
    "correct": 0,
    "explanation": "The ray is along the normal, so the incidence angle is zero."
   },
   "depth": 3
  }
 ],
 "questions": [
  {
   "id": "Q-A-1",
   "section": "A",
   "number": 1,
   "title": "Definition of a Thin Lens",
   "text": "Define a thin lens.",
   "terms": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Principal Foci and Focal Length of a Thin Lens",
    "Optical Centre"
   ],
   "conceptName": "Thin-Lens Formula and the Lens-Maker's Equation",
   "sourceLabel": "CU Nov · Q1",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "Which quantity must be small for a lens to count as thin?",
     "options": [
      "Its thickness $t$",
      "Its refractive index",
      "Its diameter"
     ],
     "correct": 0,
     "explanation": "Only the thickness must be small compared with the radii and the distances. That lets every distance be measured from one plane.",
     "term": "Optical Centre"
    },
    {
     "prompt": "What is the radius of curvature of a plane face?",
     "options": [
      "Infinite",
      "Zero",
      "Equal to the thickness"
     ],
     "correct": 0,
     "explanation": "A plane is a sphere of infinite radius, so a plane face is the special case $R\\to\\infty$.",
     "term": "Radius of Curvature"
    },
    {
     "prompt": "Where are all distances measured from for a thin lens?",
     "options": [
      "One plane through the optical centre",
      "The front surface only",
      "The lens edge"
     ],
     "correct": 0,
     "explanation": "The optical centre is the single reference point for object and image distances once the thickness is dropped.",
     "term": "Optical Centre"
    }
   ],
   "solutionBlocks": [
    {
     "title": "What must be small",
     "text": "Measure the lens thickness $t$, the radii $R_1$ and $R_2$, and the object distance $u$. The lens is thin when $t$ is much smaller than these lengths.",
     "checkIndex": 0,
     "hint": "Only the thickness must be small compared with the radii and the distances. That lets every distance be measured from one plane.",
     "symbols": []
    },
    {
     "title": "Which faces can bound it",
     "text": "Each face is a spherical surface of radius $R$, or a plane face with $R$ infinite. Two spherical faces, or one plane and one spherical face, are enough.",
     "checkIndex": 1,
     "hint": "A plane is a sphere of infinite radius, so a plane face is the special case $R\\to\\infty$.",
     "symbols": []
    },
    {
     "title": "Why thinness helps",
     "text": "With negligible thickness the two refractions can be measured from one plane through the optical centre. That is what makes the thin-lens formulas simple.",
     "checkIndex": 2,
     "hint": "The optical centre is the single reference point for object and image distances once the thickness is dropped.",
     "symbols": []
    }
   ],
   "linkedAnswer": "A thin lens is one whose thickness is negligible, so both of its refractions can be treated as happening at one plane.\n\nMeasure the lens thickness $t$, the radii $R_1$ and $R_2$, and the object distance $u$. The lens is thin when $t$ is much smaller than these lengths.\n\nEach face is a spherical surface of radius $R$, or a plane face with $R$ infinite. Two spherical faces, or one plane and one spherical face, are enough.\n\nWith negligible thickness the two refractions can be measured from one plane through the optical centre. That is what makes the thin-lens formulas simple.\n\nA thin lens is bounded by spherical or plane faces whose separation is negligible compared with the radii and distances. All distances are then measured from its optical centre.",
   "answer": "A thin lens is one whose thickness is negligible, so both of its refractions can be treated as happening at one plane.\n\nMeasure the lens thickness $t$, the radii $R_1$ and $R_2$, and the object distance $u$. The lens is thin when $t$ is much smaller than these lengths.\n\nEach face is a spherical surface of radius $R$, or a plane face with $R$ infinite. Two spherical faces, or one plane and one spherical face, are enough.\n\nWith negligible thickness the two refractions can be measured from one plane through the optical centre. That is what makes the thin-lens formulas simple.\n\nA thin lens is bounded by spherical or plane faces whose separation is negligible compared with the radii and distances. All distances are then measured from its optical centre.",
   "faq": [
    {
     "q": "What is a radius of curvature?",
     "a": "It is the radius of the sphere that a curved surface is cut from. A flat face behaves like a sphere of infinite radius."
    },
    {
     "q": "What is the optical centre of a lens?",
     "a": "It is the point on the axis through which a ray passes without bending. Distances to objects and images are measured from it."
    }
   ],
   "keywords": [
    "thin lens|thin",
    "thickness|negligible thickness",
    "spherical surface|spherical face",
    "plane face|plane surface|infinite radius",
    "optical centre|optical center"
   ],
   "retryPrompt": "Without notes, say what must be negligible for a lens to count as thin, and name the two kinds of face that can bound it.",
   "graphTerms": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Principal Foci and Focal Length of a Thin Lens",
    "Optical Centre"
   ],
   "symbols": [],
   "sourcePageText": "Define a thin lens."
  },
  {
   "id": "Q-A-2",
   "section": "A",
   "number": 2,
   "title": "First Principal Focus of a Lens",
   "text": "Define first principal focus of a lens.",
   "terms": [
    "Principal Foci and Focal Length of a Thin Lens"
   ],
   "conceptName": "Principal Foci and Focal Length of a Thin Lens",
   "sourceLabel": "CU Nov · Q2",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "Where is $F_1$ for a converging lens?",
     "options": [
      "On the object side, on the axis",
      "On the image side, on the axis",
      "At the lens edge"
     ],
     "correct": 0,
     "explanation": "The first focus is defined on the object side.",
     "term": "Converging and Diverging Lens"
    },
    {
     "prompt": "What does a ray through $F_1$ do after the lens?",
     "options": [
      "Emerges parallel to the axis",
      "Passes straight through",
      "Converges to $F_1$"
     ],
     "correct": 0,
     "explanation": "That parallel emergence is the defining property of the first focus.",
     "term": "Light Ray"
    },
    {
     "prompt": "An object placed at $F_1$ forms its image where?",
     "options": [
      "At infinity",
      "At the lens",
      "At $F_2$"
     ],
     "correct": 0,
     "explanation": "Parallel emergent rays meet only at infinity, which is why the image is at infinity.",
     "term": "Real and Virtual Images"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Where F1 lies",
     "text": "$F_1$ lies on the axis on the object side of a converging lens. A point source placed there sends out a parallel beam.",
     "checkIndex": 0,
     "hint": "The first focus is defined on the object side.",
     "symbols": []
    },
    {
     "title": "A ray through F1",
     "text": "A ray through the optical centre is undeviated. A ray through $F_1$ is bent by the lens into a path parallel to the axis.",
     "checkIndex": 1,
     "hint": "That parallel emergence is the defining property of the first focus.",
     "symbols": []
    },
    {
     "title": "Name by the image",
     "text": "An object at $F_1$ therefore forms its image at infinity. So $F_1$ is defined as the object point whose image is at infinity.",
     "checkIndex": 2,
     "hint": "Parallel emergent rays meet only at infinity, which is why the image is at infinity.",
     "symbols": []
    }
   ],
   "linkedAnswer": "The first focus is the object point whose light leaves the lens parallel to the axis.\n\n$F_1$ lies on the axis on the object side of a converging lens. A point source placed there sends out a parallel beam.\n\nA ray through the optical centre is undeviated. A ray through $F_1$ is bent by the lens into a path parallel to the axis.\n\nAn object at $F_1$ therefore forms its image at infinity. So $F_1$ is defined as the object point whose image is at infinity.\n\n$F_1$ is the object point whose image is at infinity. Its distance from the optical centre is the first focal length $f_1$.",
   "answer": "The first focus is the object point whose light leaves the lens parallel to the axis.\n\n$F_1$ lies on the axis on the object side of a converging lens. A point source placed there sends out a parallel beam.\n\nA ray through the optical centre is undeviated. A ray through $F_1$ is bent by the lens into a path parallel to the axis.\n\nAn object at $F_1$ therefore forms its image at infinity. So $F_1$ is defined as the object point whose image is at infinity.\n\n$F_1$ is the object point whose image is at infinity. Its distance from the optical centre is the first focal length $f_1$.",
   "faq": [
    {
     "q": "What is a focal point on the axis?",
     "a": "A point on the axis that a lens links to two special kinds of ray: rays through it, and rays arriving parallel to the axis."
    },
    {
     "q": "What is an undeviated ray?",
     "a": "A ray that passes straight through the optical centre without changing direction."
    }
   ],
   "keywords": [
    "first principal focus|F1|first focus",
    "parallel to the axis|parallel",
    "image at infinity|infinity",
    "optical centre|centre",
    "object side|front"
   ],
   "retryPrompt": "Without notes, say where $F_1$ lies and what a ray through $F_1$ does after the lens.",
   "graphTerms": [
    "Principal Foci and Focal Length of a Thin Lens"
   ],
   "symbols": [],
   "sourcePageText": "Define first principal focus of a lens."
  },
  {
   "id": "Q-A-3",
   "section": "A",
   "number": 3,
   "title": "Lateral Magnification",
   "text": "Define lateral magnification.",
   "terms": [
    "Lateral Magnification of a Thin Lens",
    "Object and Image Distances"
   ],
   "conceptName": "Lateral Magnification of a Thin Lens",
   "sourceLabel": "CU Nov · Q3",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "Which ratio is the lateral magnification?",
     "options": [
      "$h_i/h_o$",
      "$h_o/h_i$",
      "$u/v$"
     ],
     "correct": 0,
     "explanation": "Magnification is the image height over the object height.",
     "term": "Object and Image Distances"
    },
    {
     "prompt": "For a thin lens, $m$ equals:",
     "options": [
      "$v/u$",
      "$u/v$",
      "$f/v$"
     ],
     "correct": 0,
     "explanation": "The triangles through the optical centre give the ratio of image and object distances.",
     "term": "Object and Image Distances"
    },
    {
     "prompt": "A real image from a converging lens has $m$:",
     "options": [
      "Negative, so it is inverted",
      "Positive, so it is erect",
      "Equal to 1"
     ],
     "correct": 0,
     "explanation": "Real images are inverted, which gives a negative magnification.",
     "term": "Real and Virtual Images"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Define the heights",
     "text": "Let the object have transverse height $h_o$ and the image height $h_i$, both measured perpendicular to the axis.",
     "checkIndex": 0,
     "hint": "Magnification is the image height over the object height.",
     "symbols": []
    },
    {
     "title": "Express with distances",
     "text": "For a thin lens with object distance $u$ and image distance $v$, similar triangles give $m=v/u$.",
     "checkIndex": 1,
     "hint": "The triangles through the optical centre give the ratio of image and object distances.",
     "symbols": []
    },
    {
     "title": "Read the sign",
     "text": "$m>0$ means an erect image and $m<0$ an inverted one. A real image from a converging lens is inverted, so $m$ is negative there.",
     "checkIndex": 2,
     "hint": "Real images are inverted, which gives a negative magnification.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Lateral magnification compares image height with object height, and its sign records orientation.\n\nLet the object have transverse height $h_o$ and the image height $h_i$, both measured perpendicular to the axis.\n\nFor a thin lens with object distance $u$ and image distance $v$, similar triangles give $m=v/u$.\n\n$m>0$ means an erect image and $m<0$ an inverted one. A real image from a converging lens is inverted, so $m$ is negative there.\n\n$m=h_i/h_o=v/u$. Its sign shows whether the image is erect or inverted.",
   "answer": "Lateral magnification compares image height with object height, and its sign records orientation.\n\nLet the object have transverse height $h_o$ and the image height $h_i$, both measured perpendicular to the axis.\n\nFor a thin lens with object distance $u$ and image distance $v$, similar triangles give $m=v/u$.\n\n$m>0$ means an erect image and $m<0$ an inverted one. A real image from a converging lens is inverted, so $m$ is negative there.\n\n$m=h_i/h_o=v/u$. Its sign shows whether the image is erect or inverted.",
   "faq": [
    {
     "q": "What is a transverse height?",
     "a": "The height of an object or image measured perpendicular to the optical axis, not along it."
    },
    {
     "q": "How are similar triangles used in lens problems?",
     "a": "Two triangles are similar when their angles match, so their sides are in a fixed ratio. Lines drawn from the object and image through the lens give such triangles."
    }
   ],
   "keywords": [
    "lateral magnification|transverse magnification|magnification",
    "image height|h i|h_i",
    "object height|h o|h_o",
    "erect|upright",
    "inverted",
    "v over u|v/u"
   ],
   "retryPrompt": "Define lateral magnification in words, give its formula for a thin lens, and say what a negative value means.",
   "graphTerms": [
    "Lateral Magnification of a Thin Lens",
    "Object and Image Distances"
   ],
   "symbols": [],
   "sourcePageText": "Define lateral magnification."
  },
  {
   "id": "Q-A-4",
   "section": "A",
   "number": 4,
   "title": "Biconvex Glass Lens Immersed in Water",
   "text": "Refractive index of glass is $1.5$ and that of water is $1.33$. If a biconvex lens of glass is immersed in water, will it act as a converging lens? Justify your answer.",
   "terms": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Refractive Index"
   ],
   "conceptName": "Thin-Lens Formula and the Lens-Maker's Equation",
   "sourceLabel": "CU Nov · Q1",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "Which factor sets the medium-dependent part?",
     "options": [
      "$n_g/n_m-1$",
      "$n_m$ alone",
      "$1/R_1+1/R_2$"
     ],
     "correct": 0,
     "explanation": "The bracket $n_g/n_m-1$ carries the medium, and it decides the sign.",
     "term": "Refractive Index"
    },
    {
     "prompt": "For a biconvex lens, is $\\dfrac{1}{R_1}-\\dfrac{1}{R_2}$ positive?",
     "options": [
      "Yes",
      "No",
      "Only if $n_g>1$"
     ],
     "correct": 0,
     "explanation": "With the Cartesian signs for a biconvex shape, the geometric bracket is positive.",
     "term": "Converging and Diverging Lens"
    },
    {
     "prompt": "Is $1.5/1.33$ greater than 1?",
     "options": [
      "Yes, about 1.13",
      "No, about 0.89",
      "Equal to 1"
     ],
     "correct": 0,
     "explanation": "Glass is still more refractive than water, so the ratio exceeds 1.",
     "term": "Refractive Index"
    },
    {
     "prompt": "When would a biconvex glass lens diverge in water?",
     "options": [
      "If $n_{glass}<n_{water}$",
      "If $n_{glass}>n_{water}$",
      "Never"
     ],
     "correct": 0,
     "explanation": "Divergence needs the glass to be less refractive than the medium.",
     "term": "Converging and Diverging Lens"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Lens-maker in a medium",
     "text": "For a lens in a medium of index $n_m$, $\\dfrac{1}{f}=\\left(\\dfrac{n_g}{n_m}-1\\right)\\left(\\dfrac{1}{R_1}-\\dfrac{1}{R_2}\\right)$.",
     "checkIndex": 0,
     "hint": "The bracket $n_g/n_m-1$ carries the medium, and it decides the sign.",
     "symbols": []
    },
    {
     "title": "Biconvex geometry",
     "text": "For a biconvex lens with light from the left, $R_1>0$ and $R_2<0$, so $\\dfrac{1}{R_1}-\\dfrac{1}{R_2}>0$.",
     "checkIndex": 1,
     "hint": "With the Cartesian signs for a biconvex shape, the geometric bracket is positive.",
     "symbols": []
    },
    {
     "title": "Evaluate the ratio",
     "text": "$1.5/1.33\\approx 1.13$, which is above 1. So $n_g/n_m-1>0$ and $1/f>0$.",
     "checkIndex": 2,
     "hint": "Glass is still more refractive than water, so the ratio exceeds 1.",
     "symbols": []
    },
    {
     "title": "Conclusion",
     "text": "A positive focal length means a converging lens. In water the focal length is longer than in air, because the bracket is smaller. The lens diverges only if $n_g<n_m$.",
     "checkIndex": 3,
     "hint": "Divergence needs the glass to be less refractive than the medium.",
     "symbols": []
    }
   ],
   "linkedAnswer": "The power of a lens depends on its index relative to the surrounding medium, so the sign test uses $n_g/n_w$.\n\nFor a lens in a medium of index $n_m$, $\\dfrac{1}{f}=\\left(\\dfrac{n_g}{n_m}-1\\right)\\left(\\dfrac{1}{R_1}-\\dfrac{1}{R_2}\\right)$.\n\nFor a biconvex lens with light from the left, $R_1>0$ and $R_2<0$, so $\\dfrac{1}{R_1}-\\dfrac{1}{R_2}>0$.\n\n$1.5/1.33\\approx 1.13$, which is above 1. So $n_g/n_m-1>0$ and $1/f>0$.\n\nA positive focal length means a converging lens. In water the focal length is longer than in air, because the bracket is smaller. The lens diverges only if $n_g<n_m$.\n\nThe biconvex glass lens still converges in water because $n_g/n_w>1$, but its power is weaker and its focal length longer.",
   "answer": "The power of a lens depends on its index relative to the surrounding medium, so the sign test uses $n_g/n_w$.\n\nFor a lens in a medium of index $n_m$, $\\dfrac{1}{f}=\\left(\\dfrac{n_g}{n_m}-1\\right)\\left(\\dfrac{1}{R_1}-\\dfrac{1}{R_2}\\right)$.\n\nFor a biconvex lens with light from the left, $R_1>0$ and $R_2<0$, so $\\dfrac{1}{R_1}-\\dfrac{1}{R_2}>0$.\n\n$1.5/1.33\\approx 1.13$, which is above 1. So $n_g/n_m-1>0$ and $1/f>0$.\n\nA positive focal length means a converging lens. In water the focal length is longer than in air, because the bracket is smaller. The lens diverges only if $n_g<n_m$.\n\nThe biconvex glass lens still converges in water because $n_g/n_w>1$, but its power is weaker and its focal length longer.",
   "faq": [
    {
     "q": "What is a refractive index?",
     "a": "It is the ratio of the speed of light in vacuum to its speed in the medium."
    },
    {
     "q": "What does it mean for a lens to be immersed in a liquid?",
     "a": "The lens is surrounded by another medium, so light enters and leaves it from a different medium than air."
    }
   ],
   "keywords": [
    "lens-maker|lens maker's equation",
    "refractive index|index",
    "1.5 over 1.33|n g over n w",
    "converging|convergent",
    "diverging|divergent",
    "biconvex"
   ],
   "retryPrompt": "Explain in one line why the glass lens still converges in water, using the ratio of refractive indices.",
   "graphTerms": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Refractive Index"
   ],
   "symbols": [],
   "sourcePageText": "Refractive index of glass is $1.5$ and that of water is $1.33$. If a biconvex lens of glass is immersed in water, will it act as a converging lens? Justify your answer."
  },
  {
   "id": "Q-A-5",
   "section": "A",
   "number": 5,
   "title": "Fermat's Principle and the Elliptical Reflector",
   "text": "State Fermat's principle of stationary time. Explain with respect to an elliptical reflector.",
   "terms": [
    "Optical Path and Fermat's Principle",
    "Equal Optical Path and Perfect Imaging"
   ],
   "conceptName": "Optical Path and Fermat's Principle",
   "sourceLabel": "CU Nov · Q11",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "For a point $P$ on an ellipse, $F_1P+PF_2$ equals:",
     "options": [
      "$2a$, the major axis",
      "$a$",
      "$F_1F_2$"
     ],
     "correct": 0,
     "explanation": "The defining property of an ellipse fixes the sum of the two focal distances.",
     "term": "Ellipse and Focal Distances"
    },
    {
     "prompt": "Where does a source at $F_1$ send its reflected rays?",
     "options": [
      "Through $F_2$",
      "Through $F_1$ again",
      "Parallel to the axis"
     ],
     "correct": 0,
     "explanation": "The two foci are the source and the image point of the reflector.",
     "term": "Ellipse and Focal Distances"
    },
    {
     "prompt": "Do all reflected paths from $F_1$ to $F_2$ take the same time?",
     "options": [
      "Yes, all equal to $2a/c$",
      "No, they differ",
      "Only the shortest one"
     ],
     "correct": 0,
     "explanation": "Equal optical length in air gives equal time, $2a/c$.",
     "term": "Optical Path and Fermat's Principle"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Set the foci",
     "text": "An ellipse has foci $F_1$ and $F_2$, and every point $P$ on it satisfies $F_1P+PF_2=2a$, the major axis.",
     "checkIndex": 0,
     "hint": "The defining property of an ellipse fixes the sum of the two focal distances.",
     "symbols": []
    },
    {
     "title": "Source at F1",
     "text": "A point source at $F_1$ sends rays that reflect off the ellipse at any point $P$ and pass through $F_2$.",
     "checkIndex": 1,
     "hint": "The two foci are the source and the image point of the reflector.",
     "symbols": []
    },
    {
     "title": "Compare times",
     "text": "Every reflected path $F_1PF_2$ has the same length $2a$, so the travel time is the same for every $P$. The time is stationary, with no first-order change between neighbouring paths.",
     "checkIndex": 2,
     "hint": "Equal optical length in air gives equal time, $2a/c$.",
     "symbols": []
    }
   ],
   "linkedAnswer": "The elliptical reflector sends every reflected path F1-P-F2 the same total length, which makes the travel time stationary.\n\nAn ellipse has foci $F_1$ and $F_2$, and every point $P$ on it satisfies $F_1P+PF_2=2a$, the major axis.\n\nA point source at $F_1$ sends rays that reflect off the ellipse at any point $P$ and pass through $F_2$.\n\nEvery reflected path $F_1PF_2$ has the same length $2a$, so the travel time is the same for every $P$. The time is stationary, with no first-order change between neighbouring paths.\n\nFermat's principle holds for every reflected path, so the ellipse images a point source at one focus onto the other focus.",
   "answer": "The elliptical reflector sends every reflected path F1-P-F2 the same total length, which makes the travel time stationary.\n\nAn ellipse has foci $F_1$ and $F_2$, and every point $P$ on it satisfies $F_1P+PF_2=2a$, the major axis.\n\nA point source at $F_1$ sends rays that reflect off the ellipse at any point $P$ and pass through $F_2$.\n\nEvery reflected path $F_1PF_2$ has the same length $2a$, so the travel time is the same for every $P$. The time is stationary, with no first-order change between neighbouring paths.\n\nFermat's principle holds for every reflected path, so the ellipse images a point source at one focus onto the other focus.",
   "faq": [
    {
     "q": "What are the foci of an ellipse?",
     "a": "Two fixed points inside the ellipse. The ellipse is defined using their distances from any point on it."
    },
    {
     "q": "What is the semi-major axis of an ellipse?",
     "a": "Half of the longest diameter of the ellipse, usually written $a$."
    }
   ],
   "keywords": [
    "ellipse|elliptical",
    "focus|foci|F1|F2",
    "major axis|2a",
    "stationary|stationarity",
    "source at one focus|point source",
    "same time|equal time|equal path"
   ],
   "retryPrompt": "Explain why every reflected path $F_1PF_2$ takes the same time, and what that says about Fermat's principle.",
   "graphTerms": [
    "Optical Path and Fermat's Principle",
    "Equal Optical Path and Perfect Imaging"
   ],
   "symbols": [],
   "sourcePageText": "State Fermat's principle of stationary time. Explain with respect to an elliptical reflector."
  },
  {
   "id": "Q-A-6",
   "section": "A",
   "number": 6,
   "title": "Three Results of Fermat's Principle",
   "text": "Write down the three results obtained from Fermat's principle.",
   "terms": [
    "Optical Path and Fermat's Principle",
    "Law of Reflection from Fermat's Principle",
    "Snell's Law of Refraction from Fermat's Principle",
    "Light Ray",
    "Refractive Index"
   ],
   "conceptName": "Optical Path and Fermat's Principle",
   "sourceLabel": "CU Nov · Q11",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "What does Fermat's principle give in a uniform medium?",
     "options": [
      "Rectilinear propagation",
      "Circular rays",
      "Constant intensity"
     ],
     "correct": 0,
     "explanation": "Stationarity of the straight path is rectilinear propagation.",
     "term": "Light Ray"
    },
    {
     "prompt": "Which law comes from varying the reflection point?",
     "options": [
      "The law of reflection",
      "Ohm's law",
      "Gauss's law"
     ],
     "correct": 0,
     "explanation": "That is the derivation of the law of reflection from stationarity.",
     "term": "Plane Mirror"
    },
    {
     "prompt": "Which law comes from stationarity at an interface?",
     "options": [
      "Snell's law",
      "Coulomb's law",
      "Boyle's law"
     ],
     "correct": 0,
     "explanation": "Snell's law is the refraction result of the same principle.",
     "term": "Reflection and Refraction at an Interface"
    },
    {
     "prompt": "How many results does the question ask for?",
     "options": [
      "Three",
      "Two",
      "Four"
     ],
     "correct": 0,
     "explanation": "The question asks for the three standard results.",
     "term": "Refractive Index"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Straight line",
     "text": "In a uniform medium the optical path is stationary along a straight line. So light travels in straight lines.",
     "checkIndex": 0,
     "hint": "Stationarity of the straight path is rectilinear propagation.",
     "symbols": []
    },
    {
     "title": "Reflection",
     "text": "Varying the reflection point on a plane mirror makes the time stationary only when the angle of incidence equals the angle of reflection.",
     "checkIndex": 1,
     "hint": "That is the derivation of the law of reflection from stationarity.",
     "symbols": []
    },
    {
     "title": "Refraction",
     "text": "Varying the crossing point at an interface gives $n_1\\sin\\theta_1=n_2\\sin\\theta_2$.",
     "checkIndex": 2,
     "hint": "Snell's law is the refraction result of the same principle.",
     "symbols": []
    },
    {
     "title": "Count them",
     "text": "The three results are rectilinear propagation, the law of reflection, and Snell's law.",
     "checkIndex": 3,
     "hint": "The question asks for the three standard results.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Fermat's principle, applied to straight and bent paths, gives three standard results.\n\nIn a uniform medium the optical path is stationary along a straight line. So light travels in straight lines.\n\nVarying the reflection point on a plane mirror makes the time stationary only when the angle of incidence equals the angle of reflection.\n\nVarying the crossing point at an interface gives $n_1\\sin\\theta_1=n_2\\sin\\theta_2$.\n\nThe three results are rectilinear propagation, the law of reflection, and Snell's law.\n\nFermat's principle yields rectilinear propagation, the law of reflection and Snell's law.",
   "answer": "Fermat's principle, applied to straight and bent paths, gives three standard results.\n\nIn a uniform medium the optical path is stationary along a straight line. So light travels in straight lines.\n\nVarying the reflection point on a plane mirror makes the time stationary only when the angle of incidence equals the angle of reflection.\n\nVarying the crossing point at an interface gives $n_1\\sin\\theta_1=n_2\\sin\\theta_2$.\n\nThe three results are rectilinear propagation, the law of reflection, and Snell's law.\n\nFermat's principle yields rectilinear propagation, the law of reflection and Snell's law.",
   "faq": [
    {
     "q": "What is a homogeneous medium?",
     "a": "A medium whose refractive index is the same at every point, so light travels at one speed in it."
    },
    {
     "q": "What is a stationary path?",
     "a": "A path along which a small change does not change the quantity to first order."
    }
   ],
   "keywords": [
    "rectilinear propagation|straight line",
    "law of reflection|angle of incidence|angle of reflection",
    "Snell's law|refraction",
    "stationary|variation|extremum",
    "three results"
   ],
   "retryPrompt": "List the three results of Fermat's principle and name the variation that produces each.",
   "graphTerms": [
    "Optical Path and Fermat's Principle",
    "Law of Reflection from Fermat's Principle",
    "Snell's Law of Refraction from Fermat's Principle",
    "Light Ray",
    "Refractive Index"
   ],
   "symbols": [],
   "sourcePageText": "Write down the three results obtained from Fermat's principle."
  },
  {
   "id": "Q-A-7",
   "section": "A",
   "number": 7,
   "title": "Fermat's Principle of Extremum Path",
   "text": "Explain Fermat's principle of extremum path.",
   "terms": [
    "Optical Path and Fermat's Principle",
    "Fermat Stationarity and the Second Derivative of Optical Path"
   ],
   "conceptName": "Optical Path and Fermat's Principle",
   "sourceLabel": "CU Nov · Q11",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "What does the optical path $L$ equal?",
     "options": [
      "$\\int n\\,ds$",
      "$\\int ds/n$",
      "$n$ times the geometric length at one point"
     ],
     "correct": 0,
     "explanation": "The optical path weights each element of path by the index $n$.",
     "term": "Optical Path and Fermat's Principle"
    },
    {
     "prompt": "What condition does the actual ray satisfy?",
     "options": [
      "$\\delta L=0$",
      "$L=0$",
      "$L$ is always maximal"
     ],
     "correct": 0,
     "explanation": "Stationarity is the first-order condition for the actual path.",
     "term": "Fermat Stationarity and the Second Derivative of Optical Path"
    },
    {
     "prompt": "Can the optical path be a maximum for the actual ray?",
     "options": [
      "Yes, sometimes",
      "Never",
      "Only in air"
     ],
     "correct": 0,
     "explanation": "Least time is the usual case, but a maximum is possible.",
     "term": "Fermat Stationarity and the Second Derivative of Optical Path"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Write the optical path",
     "text": "The optical path $L=\\int n\\,ds$ depends on the whole path, not on a single point.",
     "checkIndex": 0,
     "hint": "The optical path weights each element of path by the index $n$.",
     "symbols": []
    },
    {
     "title": "State the condition",
     "text": "Fermat's principle says $\\delta L=0$ for the actual ray. Small variations of the path change $L$ only at second order.",
     "checkIndex": 1,
     "hint": "Stationarity is the first-order condition for the actual path.",
     "symbols": []
    },
    {
     "title": "Types of extremum",
     "text": "The stationary point may be a minimum, a maximum or an inflection. The second derivative decides which.",
     "checkIndex": 2,
     "hint": "Least time is the usual case, but a maximum is possible.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Stationary means the first variation vanishes. The point may be a minimum, a maximum or an inflection.\n\nThe optical path $L=\\int n\\,ds$ depends on the whole path, not on a single point.\n\nFermat's principle says $\\delta L=0$ for the actual ray. Small variations of the path change $L$ only at second order.\n\nThe stationary point may be a minimum, a maximum or an inflection. The second derivative decides which.\n\nThe actual ray makes the optical path stationary: a minimum, a maximum or an inflection, not necessarily a minimum.",
   "answer": "Stationary means the first variation vanishes. The point may be a minimum, a maximum or an inflection.\n\nThe optical path $L=\\int n\\,ds$ depends on the whole path, not on a single point.\n\nFermat's principle says $\\delta L=0$ for the actual ray. Small variations of the path change $L$ only at second order.\n\nThe stationary point may be a minimum, a maximum or an inflection. The second derivative decides which.\n\nThe actual ray makes the optical path stationary: a minimum, a maximum or an inflection, not necessarily a minimum.",
   "faq": [
    {
     "q": "What is a derivative used for?",
     "a": "It gives the rate at which a function changes. Where it is zero the function is flat at that point."
    },
    {
     "q": "What are the possible shapes of a stationary point?",
     "a": "A local minimum, a local maximum, or a point of inflection where the curve flattens and then keeps going in the same direction."
    }
   ],
   "keywords": [
    "extremum|stationary|stationarity",
    "optical path|optical path length",
    "minimum|maximum|inflection",
    "variation|small change",
    "second derivative"
   ],
   "retryPrompt": "Explain in your own words what extremum means and why the optical path need not be a minimum.",
   "graphTerms": [
    "Optical Path and Fermat's Principle",
    "Fermat Stationarity and the Second Derivative of Optical Path"
   ],
   "symbols": [],
   "sourcePageText": "Explain Fermat's principle of extremum path."
  },
  {
   "id": "Q-B-1",
   "section": "B",
   "number": 1,
   "title": "Image Condition for a Refracting Surface",
   "text": "Derive the condition for image plane with respect to a refracting surface.",
   "terms": [
    "Sign Convention and the Paraxial Approximation",
    "Refraction at a Single Spherical Surface",
    "Normal to a Surface",
    "Sagitta"
   ],
   "conceptName": "Sign Convention and the Paraxial Approximation",
   "sourceLabel": "CU Nov · Q18",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "4 marks",
   "steps": [
    {
     "prompt": "For a convex surface with light from the left, where is the centre of curvature?",
     "options": [
      "On the image side, at $+R$",
      "On the object side",
      "At the pole"
     ],
     "correct": 0,
     "explanation": "A convex surface bulges towards the object, so its centre lies on the image side.",
     "term": "Pole and Principal Axis"
    },
    {
     "prompt": "What is the sagitta to second order in $h$?",
     "options": [
      "$h^2/(2R)$",
      "$h/R$",
      "$R/h^2$"
     ],
     "correct": 0,
     "explanation": "The sagitta is the second-order sag of a sphere.",
     "term": "Sagitta"
    },
    {
     "prompt": "Which term of $OP$ carries the dependence on $h$?",
     "options": [
      "$\\tfrac{h^2}{2}\\left(\\tfrac1u+\\tfrac1R\\right)$",
      "$u$ alone",
      "$h/u$"
     ],
     "correct": 0,
     "explanation": "Only the second-order term depends on $h$; the constant $u$ does not.",
     "term": "Small-Angle and Binomial Approximations"
    },
    {
     "prompt": "The $h^2$ coefficient must:",
     "options": [
      "Vanish",
      "Double",
      "Be negative"
     ],
     "correct": 0,
     "explanation": "If the coefficient did not vanish, rays at different heights would reach different points.",
     "term": "Refraction at a Single Spherical Surface"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Set up the geometry",
     "text": "Take the pole $V$ as origin with light travelling left to right. Object $O$ is at $-u$, image $I$ at $+v$, and the centre $C$ at $+R$. A ray from $O$ meets the surface at $P$, at height $h$.",
     "checkIndex": 0,
     "hint": "A convex surface bulges towards the object, so its centre lies on the image side.",
     "symbols": []
    },
    {
     "title": "The sagitta",
     "text": "The surface at height $h$ sits at $z_P\\simeq h^2/(2R)$ from the pole.",
     "checkIndex": 1,
     "hint": "The sagitta is the second-order sag of a sphere.",
     "symbols": []
    },
    {
     "title": "Expand the two legs",
     "text": "$OP\\simeq u+\\tfrac{h^2}{2}\\left(\\tfrac1u+\\tfrac1R\\right)$ and $PI\\simeq v+\\tfrac{h^2}{2}\\left(\\tfrac1v-\\tfrac1R\\right)$.",
     "checkIndex": 2,
     "hint": "Only the second-order term depends on $h$; the constant $u$ does not.",
     "symbols": []
    },
    {
     "title": "Stationarity",
     "text": "Equal optical path needs the $h^2$ coefficient of $n_1OP+n_2PI$ to vanish. That gives $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$.",
     "checkIndex": 3,
     "hint": "If the coefficient did not vanish, rays at different heights would reach different points.",
     "symbols": []
    }
   ],
   "linkedAnswer": "The image condition comes from requiring the optical path from $O$ to $I$ to be the same for all paraxial rays.\n\nTake the pole $V$ as origin with light travelling left to right. Object $O$ is at $-u$, image $I$ at $+v$, and the centre $C$ at $+R$. A ray from $O$ meets the surface at $P$, at height $h$.\n\nThe surface at height $h$ sits at $z_P\\simeq h^2/(2R)$ from the pole.\n\n$OP\\simeq u+\\tfrac{h^2}{2}\\left(\\tfrac1u+\\tfrac1R\\right)$ and $PI\\simeq v+\\tfrac{h^2}{2}\\left(\\tfrac1v-\\tfrac1R\\right)$.\n\nEqual optical path needs the $h^2$ coefficient of $n_1OP+n_2PI$ to vanish. That gives $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$.\n\nFor one refracting surface, $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$, the image condition from equal optical path.",
   "answer": "The image condition comes from requiring the optical path from $O$ to $I$ to be the same for all paraxial rays.\n\nTake the pole $V$ as origin with light travelling left to right. Object $O$ is at $-u$, image $I$ at $+v$, and the centre $C$ at $+R$. A ray from $O$ meets the surface at $P$, at height $h$.\n\nThe surface at height $h$ sits at $z_P\\simeq h^2/(2R)$ from the pole.\n\n$OP\\simeq u+\\tfrac{h^2}{2}\\left(\\tfrac1u+\\tfrac1R\\right)$ and $PI\\simeq v+\\tfrac{h^2}{2}\\left(\\tfrac1v-\\tfrac1R\\right)$.\n\nEqual optical path needs the $h^2$ coefficient of $n_1OP+n_2PI$ to vanish. That gives $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$.\n\nFor one refracting surface, $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$, the image condition from equal optical path.",
   "faq": [
    {
     "q": "What is a sagitta?",
     "a": "The distance along the axis between a curved surface's vertex plane and its surface at a given height above the axis."
    },
    {
     "q": "Why do paraxial calculations keep only low powers of small heights?",
     "a": "For small heights the square-root and sine expansions converge quickly, so the leading corrections are enough."
    }
   ],
   "keywords": [
    "image condition|image plane",
    "paraxial|paraxial approximation",
    "optical path|equal optical path",
    "sagitta",
    "pole|vertex",
    "centre of curvature|C",
    "h squared|h²"
   ],
   "retryPrompt": "Derive the image condition for one refracting surface from equal optical path, naming the sagitta and the $h^2$ term.",
   "graphTerms": [
    "Sign Convention and the Paraxial Approximation",
    "Refraction at a Single Spherical Surface",
    "Normal to a Surface",
    "Sagitta"
   ],
   "symbols": [],
   "sourcePageText": "Derive the condition for image plane with respect to a refracting surface."
  },
  {
   "id": "Q-B-2",
   "section": "B",
   "number": 2,
   "title": "Mirror Equation for an Object Inside R/2",
   "text": "Use Fermat's principle to determine the mirror equation for an object point at a distance less than $R/2$ from a concave mirror of radius of curvature $R$.",
   "terms": [
    "Reflection at a Spherical Mirror",
    "Equal Optical Path and Perfect Imaging",
    "Real and Virtual Images",
    "Radius of Curvature"
   ],
   "conceptName": "Reflection at a Spherical Mirror",
   "sourceLabel": "CU Nov · Q25",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "4 marks",
   "steps": [
    {
     "prompt": "For an object inside $R/2$ of a concave mirror, where is the image?",
     "options": [
      "Virtual, behind the mirror",
      "Real, in front of the mirror",
      "At infinity"
     ],
     "correct": 0,
     "explanation": "The reflected rays diverge, so their extensions meet behind the mirror.",
     "term": "Real and Virtual Images"
    },
    {
     "prompt": "What is stationary in this derivation?",
     "options": [
      "The path $OP+PI$ with respect to $P$",
      "The object distance",
      "The focal length"
     ],
     "correct": 0,
     "explanation": "Fermat's principle fixes the reflection point by stationarity of the path.",
     "term": "Equal Optical Path and Perfect Imaging"
    },
    {
     "prompt": "The concave mirror sagitta to second order is:",
     "options": [
      "$h^2/(2R)$",
      "$h/R$",
      "$2R/h^2$"
     ],
     "correct": 0,
     "explanation": "It is the same second-order sag as for a refracting sphere.",
     "term": "Sagitta"
    },
    {
     "prompt": "Which form applies with $v$ a positive distance behind a concave mirror?",
     "options": [
      "$1/u-1/v=2/R$",
      "$1/u+1/v=2/R$",
      "$1/u+1/v=R/2$"
     ],
     "correct": 0,
     "explanation": "The virtual image flips the sign of the image term.",
     "term": "Radius of Curvature"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Reflection at P",
     "text": "The ray from $O$ reflects at $P$ on the mirror, and the reflected ray appears to come from a virtual image $I$ behind the mirror.",
     "checkIndex": 0,
     "hint": "The reflected rays diverge, so their extensions meet behind the mirror.",
     "symbols": []
    },
    {
     "title": "Stationary path",
     "text": "The path $OP+PI$ is stationary with respect to the position of $P$. Expanding to second order in $h$ gives a constant plus an $h^2$ term.",
     "checkIndex": 1,
     "hint": "Fermat's principle fixes the reflection point by stationarity of the path.",
     "symbols": []
    },
    {
     "title": "Sagitta and coefficient",
     "text": "The concave sagitta $h^2/(2R)$ enters the $h^2$ coefficient. Requiring that coefficient to vanish gives the mirror relation.",
     "checkIndex": 2,
     "hint": "It is the same second-order sag as for a refracting sphere.",
     "symbols": []
    },
    {
     "title": "Sign for a virtual image",
     "text": "For a real image $1/u+1/v=2/R$. With $v$ a positive distance behind the mirror for a virtual image, $1/u-1/v=2/R$.",
     "checkIndex": 3,
     "hint": "The virtual image flips the sign of the image term.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Equal optical path through the reflection point gives the mirror equation. An object inside $R/2$ gives a virtual image behind the mirror.\n\nThe ray from $O$ reflects at $P$ on the mirror, and the reflected ray appears to come from a virtual image $I$ behind the mirror.\n\nThe path $OP+PI$ is stationary with respect to the position of $P$. Expanding to second order in $h$ gives a constant plus an $h^2$ term.\n\nThe concave sagitta $h^2/(2R)$ enters the $h^2$ coefficient. Requiring that coefficient to vanish gives the mirror relation.\n\nFor a real image $1/u+1/v=2/R$. With $v$ a positive distance behind the mirror for a virtual image, $1/u-1/v=2/R$.\n\nFor $u<R/2$, $1/u-1/v=2/R$ with $v$ the virtual image distance behind the mirror, equivalent to $f=R/2$.",
   "answer": "Equal optical path through the reflection point gives the mirror equation. An object inside $R/2$ gives a virtual image behind the mirror.\n\nThe ray from $O$ reflects at $P$ on the mirror, and the reflected ray appears to come from a virtual image $I$ behind the mirror.\n\nThe path $OP+PI$ is stationary with respect to the position of $P$. Expanding to second order in $h$ gives a constant plus an $h^2$ term.\n\nThe concave sagitta $h^2/(2R)$ enters the $h^2$ coefficient. Requiring that coefficient to vanish gives the mirror relation.\n\nFor a real image $1/u+1/v=2/R$. With $v$ a positive distance behind the mirror for a virtual image, $1/u-1/v=2/R$.\n\nFor $u<R/2$, $1/u-1/v=2/R$ with $v$ the virtual image distance behind the mirror, equivalent to $f=R/2$.",
   "faq": [
    {
     "q": "What is a virtual image?",
     "a": "A point from which rays appear to diverge, although they do not actually pass through it."
    },
    {
     "q": "Where is the centre of curvature of a concave mirror?",
     "a": "At the centre of the sphere the mirror is cut from, on the reflecting side of the mirror."
    }
   ],
   "keywords": [
    "mirror equation|mirror formula",
    "concave mirror|concave",
    "virtual image|virtual",
    "R over 2|focal length|f equals R/2",
    "reflection point|point P",
    "magnification"
   ],
   "retryPrompt": "Give the mirror equation for an object inside $R/2$ of a concave mirror, and say where the image lies.",
   "graphTerms": [
    "Reflection at a Spherical Mirror",
    "Equal Optical Path and Perfect Imaging",
    "Real and Virtual Images",
    "Radius of Curvature"
   ],
   "symbols": [],
   "sourcePageText": "Use Fermat's principle to determine the mirror equation for an object point at a distance less than $R/2$ from a concave mirror of radius of curvature $R$."
  },
  {
   "id": "Q-B-3",
   "section": "B",
   "number": 3,
   "title": "Object Distance for a Given Image Distance",
   "text": "A biconvex lens of refractive index $1.5$ has radii of curvatures of $50$ cm and $100$ cm. Find the distance to the object if the image has to be formed at $60$ cm from the lens.",
   "terms": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Principal Foci and Focal Length of a Thin Lens",
    "Object and Image Distances",
    "Real and Virtual Images"
   ],
   "conceptName": "Thin-Lens Formula and the Lens-Maker's Equation",
   "sourceLabel": "CU Nov · Q13",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "5 marks",
   "steps": [
    {
     "prompt": "What is $R_2$ in Cartesian signs?",
     "options": [
      "$-100$ cm",
      "$+100$ cm",
      "$0$"
     ],
     "correct": 0,
     "explanation": "For a biconvex lens the second surface's centre lies on the incident side, so $R_2$ is negative.",
     "term": "Radius of Curvature"
    },
    {
     "prompt": "What is $f$?",
     "options": [
      "About 66.7 cm",
      "200 cm",
      "50 cm"
     ],
     "correct": 0,
     "explanation": "The bracket $1/R_1-1/R_2=0.03$ per cm gives $f\\approx 66.7$ cm.",
     "term": "Thin-Lens Formula and the Lens-Maker's Equation"
    },
    {
     "prompt": "Is a real image at 60 cm possible here?",
     "options": [
      "No, 60 cm is less than $f$",
      "Yes, always",
      "Only in water"
     ],
     "correct": 0,
     "explanation": "A real image must lie beyond the focal length, so the image must be virtual.",
     "term": "Real and Virtual Images"
    },
    {
     "prompt": "Solving gives $u\\approx$",
     "options": [
      "$-31.6$ cm",
      "$-600$ cm",
      "$+60$ cm"
     ],
     "correct": 0,
     "explanation": "The object is 31.6 cm in front of the lens, inside $f$. Taking $u=-600$ cm would give $v=75$ cm, not 60 cm.",
     "term": "Thin-Lens Formula and the Lens-Maker's Equation"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Sign convention",
     "text": "Light travels left to right. $R_1=+50$ cm for the first surface. The second surface curves towards the incident side, so $R_2=-100$ cm.",
     "checkIndex": 0,
     "hint": "For a biconvex lens the second surface's centre lies on the incident side, so $R_2$ is negative.",
     "symbols": []
    },
    {
     "title": "Focal length",
     "text": "$\\dfrac{1}{f}=(1.5-1)\\left(\\dfrac{1}{50}+\\dfrac{1}{100}\\right)=0.5\\times0.03=0.015\\ \\text{cm}^{-1}$, so $f\\approx66.7$ cm.",
     "checkIndex": 1,
     "hint": "The bracket $1/R_1-1/R_2=0.03$ per cm gives $f\\approx 66.7$ cm.",
     "symbols": []
    },
    {
     "title": "Is the image real?",
     "text": "A real image of a converging lens lies beyond $f$. Since 60 cm is less than $f=66.7$ cm, the image cannot be real, so $v=-60$ cm.",
     "checkIndex": 2,
     "hint": "A real image must lie beyond the focal length, so the image must be virtual.",
     "symbols": []
    },
    {
     "title": "Solve for u",
     "text": "$\\dfrac{1}{v}-\\dfrac{1}{u}=\\dfrac{1}{f}$ with $v=-60$ gives $-\\dfrac{1}{60}-\\dfrac{1}{u}=0.015$, so $\\dfrac1u\\approx-0.0317$ and $u\\approx-31.6$ cm.",
     "checkIndex": 3,
     "hint": "The object is 31.6 cm in front of the lens, inside $f$. Taking $u=-600$ cm would give $v=75$ cm, not 60 cm.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Find the focal length from the lens-maker's equation, then find $u$ from the image position. The sign of $v$ decides whether the image is real or virtual.\n\nLight travels left to right. $R_1=+50$ cm for the first surface. The second surface curves towards the incident side, so $R_2=-100$ cm.\n\n$\\dfrac{1}{f}=(1.5-1)\\left(\\dfrac{1}{50}+\\dfrac{1}{100}\\right)=0.5\\times0.03=0.015\\ \\text{cm}^{-1}$, so $f\\approx66.7$ cm.\n\nA real image of a converging lens lies beyond $f$. Since 60 cm is less than $f=66.7$ cm, the image cannot be real, so $v=-60$ cm.\n\n$\\dfrac{1}{v}-\\dfrac{1}{u}=\\dfrac{1}{f}$ with $v=-60$ gives $-\\dfrac{1}{60}-\\dfrac{1}{u}=0.015$, so $\\dfrac1u\\approx-0.0317$ and $u\\approx-31.6$ cm.\n\nThe object lies about 31.6 cm in front of the lens, inside $f$, and the image is virtual. No real-image solution exists with these radii.",
   "answer": "Find the focal length from the lens-maker's equation, then find $u$ from the image position. The sign of $v$ decides whether the image is real or virtual.\n\nLight travels left to right. $R_1=+50$ cm for the first surface. The second surface curves towards the incident side, so $R_2=-100$ cm.\n\n$\\dfrac{1}{f}=(1.5-1)\\left(\\dfrac{1}{50}+\\dfrac{1}{100}\\right)=0.5\\times0.03=0.015\\ \\text{cm}^{-1}$, so $f\\approx66.7$ cm.\n\nA real image of a converging lens lies beyond $f$. Since 60 cm is less than $f=66.7$ cm, the image cannot be real, so $v=-60$ cm.\n\n$\\dfrac{1}{v}-\\dfrac{1}{u}=\\dfrac{1}{f}$ with $v=-60$ gives $-\\dfrac{1}{60}-\\dfrac{1}{u}=0.015$, so $\\dfrac1u\\approx-0.0317$ and $u\\approx-31.6$ cm.\n\nThe object lies about 31.6 cm in front of the lens, inside $f$, and the image is virtual. No real-image solution exists with these radii.",
   "faq": [
    {
     "q": "What do the Cartesian sign rules say?",
     "a": "Distances are measured from the reference point, positive along the direction of light and negative against it."
    },
    {
     "q": "What quantities does the lens-maker's equation use?",
     "a": "The refractive index of the lens material and its surrounding medium, and the radii of its two faces with their signs."
    }
   ],
   "keywords": [
    "biconvex|converging lens",
    "lens-maker's equation",
    "virtual image|virtual",
    "real image|real",
    "sign convention|Cartesian",
    "focal length|f",
    "object distance|u"
   ],
   "retryPrompt": "State the sign of $R_2$ for a biconvex lens, find $f$, and say why the image at 60 cm must be virtual.",
   "graphTerms": [
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Principal Foci and Focal Length of a Thin Lens",
    "Object and Image Distances",
    "Real and Virtual Images"
   ],
   "symbols": [],
   "sourcePageText": "A biconvex lens of refractive index $1.5$ has radii of curvatures of $50$ cm and $100$ cm. Find the distance to the object if the image has to be formed at $60$ cm from the lens."
  },
  {
   "id": "Q-C-1",
   "section": "C",
   "number": 1,
   "title": "Law of Reflection from Fermat's Principle",
   "text": "State Fermat's principle of stationary time. Using this principle, derive the law of reflection for a ray reflected at a plane surface.",
   "terms": [
    "Law of Reflection from Fermat's Principle",
    "Optical Path and Fermat's Principle",
    "Plane Mirror"
   ],
   "conceptName": "Law of Reflection from Fermat's Principle",
   "sourceLabel": "Module I practice · Q1",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "What is the horizontal distance from $A$'s foot to $P$?",
     "options": [
      "$x$",
      "$d$",
      "$a$"
     ],
     "correct": 0,
     "explanation": "$x$ is the position of the reflection point along the mirror.",
     "term": "Plane Mirror"
    },
    {
     "prompt": "Which term is $\\sqrt{b^2+(d-x)^2}$?",
     "options": [
      "The path from $P$ to $B$",
      "The path from $A$ to $P$",
      "The total time"
     ],
     "correct": 0,
     "explanation": "The second term is the leg from the reflection point to $B$.",
     "term": "Law of Reflection from Fermat's Principle"
    },
    {
     "prompt": "Which condition fixes the reflection point?",
     "options": [
      "$dL/dx=0$",
      "$L=0$",
      "$d^2L/dx^2=0$ always"
     ],
     "correct": 0,
     "explanation": "Stationarity is the first-order condition on the reflection point.",
     "term": "Optical Path and Fermat's Principle"
    },
    {
     "prompt": "From equal sines with acute angles we get:",
     "options": [
      "$\\theta_i=\\theta_r$",
      "$\\theta_i=2\\theta_r$",
      "$\\theta_i+\\theta_r=90^\\circ$"
     ],
     "correct": 0,
     "explanation": "Equal sines of acute angles mean equal angles.",
     "term": "Reflection and Refraction at an Interface"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Set up the distances",
     "text": "Put source $A$ at height $a$ and point $B$ at height $b$ above a plane mirror, with horizontal separation $d$. A ray reflects at $P$, a horizontal distance $x$ from the foot of $A$'s perpendicular.",
     "checkIndex": 0,
     "hint": "$x$ is the position of the reflection point along the mirror.",
     "symbols": []
    },
    {
     "title": "Write the path",
     "text": "The total path is $L(x)=\\sqrt{a^2+x^2}+\\sqrt{b^2+(d-x)^2}$.",
     "checkIndex": 1,
     "hint": "The second term is the leg from the reflection point to $B$.",
     "symbols": []
    },
    {
     "title": "Stationarity",
     "text": "Fermat gives $dL/dx=0$, so $\\dfrac{x}{\\sqrt{a^2+x^2}}=\\dfrac{d-x}{\\sqrt{b^2+(d-x)^2}}$.",
     "checkIndex": 2,
     "hint": "Stationarity is the first-order condition on the reflection point.",
     "symbols": []
    },
    {
     "title": "Angles",
     "text": "The left side is $\\sin\\theta_i$ and the right side is $\\sin\\theta_r$. Both angles are acute, so $\\theta_i=\\theta_r$.",
     "checkIndex": 3,
     "hint": "Equal sines of acute angles mean equal angles.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Stationarity of the travel time with respect to the reflection point gives the reflection law.\n\nPut source $A$ at height $a$ and point $B$ at height $b$ above a plane mirror, with horizontal separation $d$. A ray reflects at $P$, a horizontal distance $x$ from the foot of $A$'s perpendicular.\n\nThe total path is $L(x)=\\sqrt{a^2+x^2}+\\sqrt{b^2+(d-x)^2}$.\n\nFermat gives $dL/dx=0$, so $\\dfrac{x}{\\sqrt{a^2+x^2}}=\\dfrac{d-x}{\\sqrt{b^2+(d-x)^2}}$.\n\nThe left side is $\\sin\\theta_i$ and the right side is $\\sin\\theta_r$. Both angles are acute, so $\\theta_i=\\theta_r$.\n\nStationary travel time at the reflection point gives $\\sin\\theta_i=\\sin\\theta_r$, that is $\\theta_i=\\theta_r$.",
   "answer": "Stationarity of the travel time with respect to the reflection point gives the reflection law.\n\nPut source $A$ at height $a$ and point $B$ at height $b$ above a plane mirror, with horizontal separation $d$. A ray reflects at $P$, a horizontal distance $x$ from the foot of $A$'s perpendicular.\n\nThe total path is $L(x)=\\sqrt{a^2+x^2}+\\sqrt{b^2+(d-x)^2}$.\n\nFermat gives $dL/dx=0$, so $\\dfrac{x}{\\sqrt{a^2+x^2}}=\\dfrac{d-x}{\\sqrt{b^2+(d-x)^2}}$.\n\nThe left side is $\\sin\\theta_i$ and the right side is $\\sin\\theta_r$. Both angles are acute, so $\\theta_i=\\theta_r$.\n\nStationary travel time at the reflection point gives $\\sin\\theta_i=\\sin\\theta_r$, that is $\\theta_i=\\theta_r$.",
   "faq": [
    {
     "q": "What is a plane mirror?",
     "a": "A flat reflecting surface."
    },
    {
     "q": "What does setting a derivative to zero find?",
     "a": "The points where the function has a stationary value, such as a minimum."
    }
   ],
   "keywords": [
    "plane mirror|plane surface",
    "reflection point|point P",
    "stationary|dL/dx",
    "angle of incidence|theta i",
    "angle of reflection|theta r",
    "normal"
   ],
   "retryPrompt": "Derive the law of reflection from stationary travel time, showing the derivative and the sine equation.",
   "graphTerms": [
    "Law of Reflection from Fermat's Principle",
    "Optical Path and Fermat's Principle",
    "Plane Mirror"
   ],
   "symbols": [],
   "sourcePageText": "State Fermat's principle of stationary time. Using this principle, derive the law of reflection for a ray reflected at a plane surface."
  },
  {
   "id": "Q-C-2",
   "section": "C",
   "number": 2,
   "title": "Refraction at a Convex Spherical Surface",
   "text": "A point object $O$ lies on the axis of a convex spherical surface of radius $R$ which separates a medium of refractive index $n_1$ (containing $O$) from a medium of refractive index $n_2$. The object is at distance $u$ from the pole of the surface and its image is formed at distance $v$ from the pole. Using the paraxial approximation, derive the relation $$\\frac{n_1}{u}+\\frac{n_2}{v}=\\frac{n_2-n_1}{R}.$$ Draw a labelled ray diagram for the refraction.",
   "terms": [
    "Refraction at a Single Spherical Surface",
    "Sign Convention and the Paraxial Approximation",
    "Radius of Curvature"
   ],
   "conceptName": "Refraction at a Single Spherical Surface",
   "sourceLabel": "Module I practice · Q2",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "3 marks",
   "steps": [
    {
     "prompt": "For a convex surface with light from the left, where is $C$?",
     "options": [
      "On the image side",
      "On the object side",
      "At $O$"
     ],
     "correct": 0,
     "explanation": "A convex surface curves towards the object, so the centre is on the image side.",
     "term": "Radius of Curvature"
    },
    {
     "prompt": "What must be equal for all rays from $O$ to $I$?",
     "options": [
      "$n_1 OP+n_2 PI$",
      "$OP$ alone",
      "The angles only"
     ],
     "correct": 0,
     "explanation": "Equal optical path is the condition for a perfect image.",
     "term": "Equal Optical Path and Perfect Imaging"
    },
    {
     "prompt": "The sagitta of the convex surface is:",
     "options": [
      "$h^2/(2R)$",
      "$R/h$",
      "$h/(2R)$"
     ],
     "correct": 0,
     "explanation": "The sag of a sphere to second order is $h^2/(2R)$.",
     "term": "Sagitta"
    },
    {
     "prompt": "Which relation results?",
     "options": [
      "$\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$",
      "$n_1+n_2=0$",
      "$u=v$"
     ],
     "correct": 0,
     "explanation": "That is the refraction formula for a convex surface.",
     "term": "Refraction at a Single Spherical Surface"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Draw the diagram",
     "text": "Draw the axis, the pole $V$, the centre $C$ at distance $R$ on the image side, the object $O$ at $u$ on the left, the image $I$ at $v$ on the right, the ray from $O$ meeting the surface at $P$, the normal $CP$, and the refracted ray $PI$.",
     "checkIndex": 0,
     "hint": "A convex surface curves towards the object, so the centre is on the image side.",
     "symbols": []
    },
    {
     "title": "Optical path",
     "text": "The optical path $n_1\\,OP+n_2\\,PI$ must be the same for all paraxial rays from $O$ that reach $I$.",
     "checkIndex": 1,
     "hint": "Equal optical path is the condition for a perfect image.",
     "symbols": []
    },
    {
     "title": "Expand",
     "text": "With sagitta $h^2/(2R)$: $OP\\simeq u+\\tfrac{h^2}{2}\\left(\\tfrac1u+\\tfrac1R\\right)$ and $PI\\simeq v+\\tfrac{h^2}{2}\\left(\\tfrac1v-\\tfrac1R\\right)$.",
     "checkIndex": 2,
     "hint": "The sag of a sphere to second order is $h^2/(2R)$.",
     "symbols": []
    },
    {
     "title": "Result",
     "text": "The coefficient of $h^2$ must vanish, giving $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$.",
     "checkIndex": 3,
     "hint": "That is the refraction formula for a convex surface.",
     "symbols": []
    }
   ],
   "linkedAnswer": "The same paraxial argument as the image condition applies, and the answer needs a labelled diagram.\n\nDraw the axis, the pole $V$, the centre $C$ at distance $R$ on the image side, the object $O$ at $u$ on the left, the image $I$ at $v$ on the right, the ray from $O$ meeting the surface at $P$, the normal $CP$, and the refracted ray $PI$.\n\nThe optical path $n_1\\,OP+n_2\\,PI$ must be the same for all paraxial rays from $O$ that reach $I$.\n\nWith sagitta $h^2/(2R)$: $OP\\simeq u+\\tfrac{h^2}{2}\\left(\\tfrac1u+\\tfrac1R\\right)$ and $PI\\simeq v+\\tfrac{h^2}{2}\\left(\\tfrac1v-\\tfrac1R\\right)$.\n\nThe coefficient of $h^2$ must vanish, giving $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$.\n\nThe paraxial equal-optical-path condition gives $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$, shown on a labelled diagram.",
   "answer": "The same paraxial argument as the image condition applies, and the answer needs a labelled diagram.\n\nDraw the axis, the pole $V$, the centre $C$ at distance $R$ on the image side, the object $O$ at $u$ on the left, the image $I$ at $v$ on the right, the ray from $O$ meeting the surface at $P$, the normal $CP$, and the refracted ray $PI$.\n\nThe optical path $n_1\\,OP+n_2\\,PI$ must be the same for all paraxial rays from $O$ that reach $I$.\n\nWith sagitta $h^2/(2R)$: $OP\\simeq u+\\tfrac{h^2}{2}\\left(\\tfrac1u+\\tfrac1R\\right)$ and $PI\\simeq v+\\tfrac{h^2}{2}\\left(\\tfrac1v-\\tfrac1R\\right)$.\n\nThe coefficient of $h^2$ must vanish, giving $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$.\n\nThe paraxial equal-optical-path condition gives $\\dfrac{n_1}{u}+\\dfrac{n_2}{v}=\\dfrac{n_2-n_1}{R}$, shown on a labelled diagram.",
   "faq": [
    {
     "q": "What does a ray diagram for refraction usually show?",
     "a": "The axis, the pole, the centre of curvature, the object and image points, the ray, the normal at the point of incidence, and the angles."
    },
    {
     "q": "What is a paraxial ray?",
     "a": "A ray that stays close to the axis, so its angles are small."
    }
   ],
   "keywords": [
    "labelled diagram|ray diagram",
    "pole|vertex",
    "centre of curvature|C",
    "paraxial|paraxial approximation",
    "convex surface",
    "equal optical path"
   ],
   "retryPrompt": "Draw the labelled diagram and state the equal-optical-path condition that gives the refraction formula.",
   "graphTerms": [
    "Refraction at a Single Spherical Surface",
    "Sign Convention and the Paraxial Approximation",
    "Radius of Curvature"
   ],
   "symbols": [],
   "sourcePageText": "A point object $O$ lies on the axis of a convex spherical surface of radius $R$ which separates a medium of refractive index $n_1$ (containing $O$) from a medium of refractive index $n_2$. The object is at distance $u$ from the pole of the surface and its image is formed at distance $v$ from the pole. Using the paraxial approximation, derive the relation $$\\frac{n_1}{u}+\\frac{n_2}{v}=\\frac{n_2-n_1}{R}.$$ Draw a labelled ray diagram for the refraction."
  },
  {
   "id": "Q-C-3",
   "section": "C",
   "number": 3,
   "title": "Principal Foci and Focal Length of a Thin Biconvex Lens",
   "text": "Define the first principal focus and the second principal focus of a thin lens. A thin biconvex lens made of glass of refractive index $1.5$ has both surfaces of radius of curvature $20$ cm and is placed in air. Find its focal length.",
   "terms": [
    "Principal Foci and Focal Length of a Thin Lens",
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Converging and Diverging Lens"
   ],
   "conceptName": "Principal Foci and Focal Length of a Thin Lens",
   "sourceLabel": "Module I practice · Q3",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "2 marks",
   "steps": [
    {
     "prompt": "What does an object at $F_1$ produce?",
     "options": [
      "An image at infinity",
      "A virtual image at the lens",
      "No image"
     ],
     "correct": 0,
     "explanation": "That is the definition of the first principal focus.",
     "term": "Converging and Diverging Lens"
    },
    {
     "prompt": "Where is the image of an object at infinity?",
     "options": [
      "At $F_2$",
      "At $F_1$",
      "At the lens"
     ],
     "correct": 0,
     "explanation": "That is the definition of the second principal focus.",
     "term": "Converging and Diverging Lens"
    },
    {
     "prompt": "For a biconvex lens with light from the left, what is $R_2$?",
     "options": [
      "$-20$ cm",
      "$+20$ cm",
      "$0$"
     ],
     "correct": 0,
     "explanation": "The second surface's centre is on the incident side, so $R_2$ is negative.",
     "term": "Radius of Curvature"
    },
    {
     "prompt": "What is $f$?",
     "options": [
      "$20$ cm",
      "$10$ cm",
      "$40$ cm"
     ],
     "correct": 0,
     "explanation": "The lens-maker bracket is $0.05$ per cm, so $f=20$ cm.",
     "term": "Thin-Lens Formula and the Lens-Maker's Equation"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Define F1",
     "text": "$F_1$ is the object point whose image is at infinity.",
     "checkIndex": 0,
     "hint": "That is the definition of the first principal focus.",
     "symbols": []
    },
    {
     "title": "Define F2",
     "text": "$F_2$ is the image point for an object at infinity.",
     "checkIndex": 1,
     "hint": "That is the definition of the second principal focus.",
     "symbols": []
    },
    {
     "title": "Sign convention",
     "text": "For a biconvex lens with light from the left, $R_1=+20$ cm and $R_2=-20$ cm.",
     "checkIndex": 2,
     "hint": "The second surface's centre is on the incident side, so $R_2$ is negative.",
     "symbols": []
    },
    {
     "title": "Focal length",
     "text": "$\\dfrac{1}{f}=(1.5-1)\\left(\\dfrac{1}{20}+\\dfrac{1}{20}\\right)=0.05\\ \\text{cm}^{-1}$, so $f=20$ cm.",
     "checkIndex": 3,
     "hint": "The lens-maker bracket is $0.05$ per cm, so $f=20$ cm.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Define the foci by their images first, then use the lens-maker's equation with $R_1=+20$ cm and $R_2=-20$ cm.\n\n$F_1$ is the object point whose image is at infinity.\n\n$F_2$ is the image point for an object at infinity.\n\nFor a biconvex lens with light from the left, $R_1=+20$ cm and $R_2=-20$ cm.\n\n$\\dfrac{1}{f}=(1.5-1)\\left(\\dfrac{1}{20}+\\dfrac{1}{20}\\right)=0.05\\ \\text{cm}^{-1}$, so $f=20$ cm.\n\n$F_1$ and $F_2$ are defined by their images, and the focal length of the biconvex lens is $f=20$ cm.",
   "answer": "Define the foci by their images first, then use the lens-maker's equation with $R_1=+20$ cm and $R_2=-20$ cm.\n\n$F_1$ is the object point whose image is at infinity.\n\n$F_2$ is the image point for an object at infinity.\n\nFor a biconvex lens with light from the left, $R_1=+20$ cm and $R_2=-20$ cm.\n\n$\\dfrac{1}{f}=(1.5-1)\\left(\\dfrac{1}{20}+\\dfrac{1}{20}\\right)=0.05\\ \\text{cm}^{-1}$, so $f=20$ cm.\n\n$F_1$ and $F_2$ are defined by their images, and the focal length of the biconvex lens is $f=20$ cm.",
   "faq": [
    {
     "q": "What is a biconvex lens?",
     "a": "A lens whose two faces both bulge outward."
    },
    {
     "q": "What does an object at infinity mean?",
     "a": "A distant object whose rays arrive at the lens essentially parallel to the axis."
    }
   ],
   "keywords": [
    "first principal focus|F1",
    "second principal focus|F2",
    "image at infinity|infinity",
    "biconvex",
    "lens-maker's equation",
    "focal length"
   ],
   "retryPrompt": "Define both principal foci and compute the focal length of the biconvex lens with radii 20 cm.",
   "graphTerms": [
    "Principal Foci and Focal Length of a Thin Lens",
    "Thin-Lens Formula and the Lens-Maker's Equation",
    "Converging and Diverging Lens"
   ],
   "symbols": [],
   "sourcePageText": "Define the first principal focus and the second principal focus of a thin lens. A thin biconvex lens made of glass of refractive index $1.5$ has both surfaces of radius of curvature $20$ cm and is placed in air. Find its focal length."
  },
  {
   "id": "Q-C-4",
   "section": "C",
   "number": 4,
   "title": "Newton's Formula",
   "text": "For a thin converging lens of focal length $f$, let an object be at distance $x_1$ from the first principal focus and let its image be at distance $x_2$ from the second principal focus. Derive Newton's formula $$x_1x_2=f^2$$ and show that the lateral magnification is $$m=\\frac{f}{x_1}=\\frac{x_2}{f}.$$",
   "terms": [
    "Newton's Formula",
    "Lateral Magnification of a Thin Lens",
    "Object and Image Distances",
    "Locating an Image by Ray Construction"
   ],
   "conceptName": "Newton's Formula",
   "sourceLabel": "Module I practice · Q4",
   "source": "module1.md",
   "page": 0,
   "verify": null,
   "type": "proof",
   "marks_style": "3 marks",
   "steps": [
    {
     "prompt": "Which relation comes from the ray through $F_1$?",
     "options": [
      "$h_i/h_o=f/x_1$",
      "$h_i/h_o=x_1/f$",
      "$h_i/h_o=1$"
     ],
     "correct": 0,
     "explanation": "That ray gives the ratio of the focal length to $x_1$.",
     "term": "Object and Image Distances"
    },
    {
     "prompt": "Which relation comes from the parallel ray?",
     "options": [
      "$h_i/h_o=x_2/f$",
      "$h_i/h_o=f/x_2$",
      "$h_i/h_o=x_2f$"
     ],
     "correct": 0,
     "explanation": "That ray gives $x_2/f$.",
     "term": "Newton's Formula"
    },
    {
     "prompt": "Cross-multiplying $f/x_1=x_2/f$ gives:",
     "options": [
      "$x_1x_2=f^2$",
      "$x_1+x_2=f$",
      "$x_1=x_2$"
     ],
     "correct": 0,
     "explanation": "Cross-multiplication is the step that produces Newton's formula.",
     "term": "Newton's Formula"
    },
    {
     "prompt": "Which expression is the magnification?",
     "options": [
      "$f/x_1=x_2/f$",
      "$x_1/f$ only",
      "$f+x_2$"
     ],
     "correct": 0,
     "explanation": "Both forms of the magnification follow from the two triangle pairs.",
     "term": "Lateral Magnification of a Thin Lens"
    }
   ],
   "solutionBlocks": [
    {
     "title": "Ray through F1",
     "text": "A ray from the top of the object through $F_1$ emerges parallel to the axis. Similar triangles give $\\dfrac{h_i}{h_o}=\\dfrac{f}{x_1}$.",
     "checkIndex": 0,
     "hint": "That ray gives the ratio of the focal length to $x_1$.",
     "symbols": []
    },
    {
     "title": "Ray parallel to the axis",
     "text": "A ray from the top parallel to the axis passes through $F_2$. Similar triangles give $\\dfrac{h_i}{h_o}=\\dfrac{x_2}{f}$.",
     "checkIndex": 1,
     "hint": "That ray gives $x_2/f$.",
     "symbols": []
    },
    {
     "title": "Equate",
     "text": "$\\dfrac{f}{x_1}=\\dfrac{x_2}{f}$, hence $x_1x_2=f^2$.",
     "checkIndex": 2,
     "hint": "Cross-multiplication is the step that produces Newton's formula.",
     "symbols": []
    },
    {
     "title": "Magnification",
     "text": "So $m=\\dfrac{h_i}{h_o}=\\dfrac{f}{x_1}=\\dfrac{x_2}{f}$.",
     "checkIndex": 3,
     "hint": "Both forms of the magnification follow from the two triangle pairs.",
     "symbols": []
    }
   ],
   "linkedAnswer": "Two pairs of similar triangles, one through each focus, give the magnification two ways. Equating them gives Newton's formula.\n\nA ray from the top of the object through $F_1$ emerges parallel to the axis. Similar triangles give $\\dfrac{h_i}{h_o}=\\dfrac{f}{x_1}$.\n\nA ray from the top parallel to the axis passes through $F_2$. Similar triangles give $\\dfrac{h_i}{h_o}=\\dfrac{x_2}{f}$.\n\n$\\dfrac{f}{x_1}=\\dfrac{x_2}{f}$, hence $x_1x_2=f^2$.\n\nSo $m=\\dfrac{h_i}{h_o}=\\dfrac{f}{x_1}=\\dfrac{x_2}{f}$.\n\nNewton's formula $x_1x_2=f^2$ follows from two similar-triangle pairs, and the magnification is $m=f/x_1=x_2/f$.",
   "answer": "Two pairs of similar triangles, one through each focus, give the magnification two ways. Equating them gives Newton's formula.\n\nA ray from the top of the object through $F_1$ emerges parallel to the axis. Similar triangles give $\\dfrac{h_i}{h_o}=\\dfrac{f}{x_1}$.\n\nA ray from the top parallel to the axis passes through $F_2$. Similar triangles give $\\dfrac{h_i}{h_o}=\\dfrac{x_2}{f}$.\n\n$\\dfrac{f}{x_1}=\\dfrac{x_2}{f}$, hence $x_1x_2=f^2$.\n\nSo $m=\\dfrac{h_i}{h_o}=\\dfrac{f}{x_1}=\\dfrac{x_2}{f}$.\n\nNewton's formula $x_1x_2=f^2$ follows from two similar-triangle pairs, and the magnification is $m=f/x_1=x_2/f$.",
   "faq": [
    {
     "q": "What is a similar triangle?",
     "a": "Two triangles with equal angles, so corresponding sides are in the same ratio."
    },
    {
     "q": "How is a focal length measured along the axis?",
     "a": "From the optical centre to the focal point."
    }
   ],
   "keywords": [
    "Newton's formula|x1 x2 = f²",
    "similar triangles",
    "magnification|m",
    "ray through F1",
    "ray parallel to axis",
    "F1|F2"
   ],
   "retryPrompt": "Draw the two rays from the top of the object and derive $x_1x_2=f^2$, then give $m$ in two forms.",
   "graphTerms": [
    "Newton's Formula",
    "Lateral Magnification of a Thin Lens",
    "Object and Image Distances",
    "Locating an Image by Ray Construction"
   ],
   "symbols": [],
   "sourcePageText": "For a thin converging lens of focal length $f$, let an object be at distance $x_1$ from the first principal focus and let its image be at distance $x_2$ from the second principal focus. Derive Newton's formula $$x_1x_2=f^2$$ and show that the lateral magnification is $$m=\\frac{f}{x_1}=\\frac{x_2}{f}.$$"
  }
 ],
 "report": {
  "created": 34,
  "reused": 0,
  "verifyFlags": 0,
  "reviewed": "2026-10-09"
 }
};
