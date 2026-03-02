import { Course, Section, Lesson, Slide } from '../types';

const Q1_LESSON: Lesson = {
  id: "pyq-1",
  title: "Q1: Coordinate Elements",
  description: "Cartesian, Spherical, Cylindrical",
  icon: "Globe",
  slides: [
    {
      id: "s1", type: 'fill_in_blank', title: "Q1: Cartesian", 
      content: "In Cartesian coordinates, the differential volume element $d\\tau$ is given by $dx$ ___ $dz$.", 
      blankAnswer: "dy" 
    },
    {
      id: "s2", type: 'solution', title: "Detailed Solution", 
      content: "**Displacement ($d\\mathbf{l}$):**\n*   Cartesian: $dx\\mathbf{\\hat{x}} + dy\\mathbf{\\hat{y}} + dz\\mathbf{\\hat{z}}$\n*   Cylindrical: $ds\\mathbf{\\hat{s}} + s d\\phi\\mathbf{\\hat{\\phi}} + dz\\mathbf{\\hat{z}}$\n*   Spherical: $dr\\mathbf{\\hat{r}} + r d\\theta\\mathbf{\\hat{\\theta}} + r \\sin\\theta d\\phi\\mathbf{\\hat{\\phi}}$\n\n**Volume ($d\\tau$):**\n*   Cartesian: $dx dy dz$\n*   Cylindrical: $s ds d\\phi dz$\n*   Spherical: $r^2 \\sin\\theta dr d\\theta d\\phi$"
    },
    {
      id: "s3", type: 'interactive_canvas', title: "Coordinate Visualizer", content: "Explore the different volume elements.", interactiveCanvasId: "coord-system-interactive"
    }
  ]
};

// ... Q2, Q3, Q4 same as before ... 
const Q2_LESSON: Lesson = {
  id: "pyq-2", title: "Q2: Divergence Theorem", description: "Statement and meaning", icon: "BookOpen",
  slides: [
    { id: "s1", type: 'fill_in_blank', title: "Q2: The Theorem", content: "Gauss's Divergence Theorem relates a volume integral of divergence to a ___ integral of flux.", blankAnswer: "surface" },
    { id: "s2", type: 'solution', title: "Detailed Solution", content: "**Statement:**\n$$ \\int_V (\\nabla \\cdot \\mathbf{v}) d\\tau = \\oint_S \\mathbf{v} \\cdot d\\mathbf{a} $$\n\n**Explanation:**\nThe total outward flux of a vector field $\\mathbf{v}$ through a closed surface $S$ is equal to the integral of the divergence of $\\mathbf{v}$ over the volume $V$ enclosed by that surface.\n\nPhysically, it means the net flow of a fluid out of a region equals the sum of all sources and sinks inside that region." }
  ]
};

const Q3_LESSON: Lesson = {
  id: "pyq-3", title: "Q3: Dirac Delta", description: "Definition and integrals", icon: "Target",
  slides: [
    { id: "s1", type: 'theory', title: "Definition", content: "The **Dirac Delta function** $\\delta(x)$ is defined by:\n1. $\\delta(x) = 0$ if $x \\neq 0$\n2. $\\delta(x) = \\infty$ if $x = 0$\n3. $\\int_{-\\infty}^{\\infty} \\delta(x) dx = 1$\n\nIt acts as a generalized function that picks out values: $\\int f(x) \\delta(x-a) dx = f(a)$." },
    { id: "s2", type: 'numerical', title: "Part (a)", content: "Evaluate $\\int x^3 \\delta(x+1) dx$. (Note the +1)", numericAnswer: -1, numericTolerance: 0 },
    { id: "s3", type: 'numerical', title: "Part (b)", content: "Evaluate $\\int x^3 \\delta(x-1) dx$.", numericAnswer: 1, numericTolerance: 0 },
    { id: "s4", type: 'solution', title: "Detailed Solution", content: "**Part (a):** $\\int_{-\\infty}^{\\infty} x^3 \\delta(x+1) dx$. The spike is at $x=-1$. Evaluate $x^3$ at $-1$: $(-1)^3 = -1$.\n\n**Part (b):** $\\int_{-\\infty}^{\\infty} x^3 \\delta(x-1) dx$. The spike is at $x=1$. Evaluate $x^3$ at $1$: $(1)^3 = 1$." }
  ]
};

const Q4_LESSON: Lesson = {
  id: "pyq-4", title: "Q4: Poisson & Laplace", description: "Derivation from Gauss", icon: "Activity",
  slides: [
    { id: "s1", type: 'proof', title: "Derivation Steps", content: "Derive Poisson's Eq from $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$.", proofSteps: [
      "Start with Gauss's Law in differential form: $\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0}$.",
      "Recall the definition of scalar potential: $\\mathbf{E} = -\\nabla V$.",
      "Substitute E into Gauss's Law: $\\nabla \\cdot (-\\nabla V) = \\frac{\\rho}{\\epsilon_0}$.",
      "Apply the divergence of a gradient (Laplacian): $-\\nabla^2 V = \\frac{\\rho}{\\epsilon_0}$.",
      "Rearrange to get **Poisson's Equation**: $\\nabla^2 V = -\\frac{\\rho}{\\epsilon_0}$.",
      "If $\\rho = 0$ (vacuum), this becomes **Laplace's Equation**: $\\nabla^2 V = 0$."
    ]}
  ]
};

const Q5_LESSON: Lesson = {
  id: "pyq-5", title: "Q5: Infinite Line Charge", description: "Gauss's Law Application", icon: "Minus",
  slides: [
    { id: "s1", type: 'example_q', title: "Try it", content: "Use Gauss's law to find E for an infinite line charge $\\lambda$." },
    { id: "s2", type: 'solution', title: "Detailed Solution", content: "**1. Symmetry:** The field must be radially outward ($\\mathbf{\\hat{s}}$) and depend only on distance $s$.\n\n**2. Gaussian Surface:** Choose a cylinder of radius $s$ and length $L$ coaxial with the line.\n\n**3. Flux:** Flux through end caps is 0 (E is parallel to surface). Flux through curved side is $\\int \\mathbf{E} \\cdot d\\mathbf{a} = E (2\\pi s L)$.\n\n**4. Enclosed Charge:** $Q_{enc} = \\lambda L$.\n\n**5. Solve:** $E (2\\pi s L) = \\frac{\\lambda L}{\\epsilon_0} \\implies E = \\frac{\\lambda}{2\\pi\\epsilon_0 s}$." },
    { id: "s3", type: 'interactive_canvas', title: "Gaussian Cylinder", content: "Visualize the cylindrical surface enclosing the line charge.", interactiveCanvasId: "gaussian-cylinder-interactive" }
  ]
};

// ... Q6 to Q15 same as before ...
const Q6_LESSON: Lesson = {
  id: "pyq-6", title: "Q6: Conductor Properties", description: "Electrostatic Equilibrium", icon: "Shield",
  slides: [
    { id: "s1", type: 'quiz', title: "Interior Field", content: "Inside an ideal conductor in electrostatic equilibrium, the electric field is:", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "If it weren't, charges would move." }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" }] },
    { id: "s2", type: 'solution', title: "Two Properties", content: "1. **$\\mathbf{E} = 0$ inside the conductor.**\n   *Reason:* Conductors have free charge. If there were a net field inside, charges would accelerate ($F=qE$). They move until they cancel the field.\n\n2. **Net charge resides entirely on the surface.**\n   *Reason:* From Gauss's Law, $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$. Since $\\mathbf{E}=0$ inside, $\\nabla \\cdot \\mathbf{E} = 0$, so $\\rho=0$ everywhere inside." }
  ]
};

const Q7_LESSON: Lesson = {
  id: "pyq-7", title: "Q7: Superposition", description: "Statement", icon: "PlusCircle",
  slides: [
    { id: "s1", type: 'theory', title: "Superposition Theorem", content: "**Statement:**\nThe total electric force (or field) on a test charge due to a collection of source charges is the **vector sum** of the forces (or fields) that each source charge would exert individually if the others were not present.\n\n$$\\mathbf{E}_{total} = \\mathbf{E}_1 + \\mathbf{E}_2 + \\dots + \\mathbf{E}_n$$\n\nThis relies on the linearity of Maxwell's equations." }
  ]
};

const Q8_LESSON: Lesson = {
  id: "pyq-8", title: "Q8: Verify Curl Theorem", description: "5 Marks - Calculation", icon: "RotateCw",
  slides: [
    { id: "s1", type: 'example_q', title: "The Problem", content: "Verify Stokes' Theorem for $\\mathbf{F} = (2xz + 3y^2)\\mathbf{\\hat{y}} + 4yz^2\\mathbf{\\hat{z}}$ on a square surface of unit side with one corner at origin. (Assume square is in yz plane? Or xy? 'Unit side... coinciding with origin' usually implies axes. Let's assume **yz-plane** at x=0 for consistency with the vector components, or **xy-plane**? Looking at F, it has no x-component. Let's try a square in the **y-z plane** at $x=0$.)" },
    { id: "s2", type: 'solution', title: "Step 1: Curl", content: "**Calculate $\\nabla \\times \\mathbf{F}$:**\n$$\\begin{vmatrix} \\mathbf{\\hat{x}} & \\mathbf{\\hat{y}} & \\mathbf{\\hat{z}} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ 0 & 2xz+3y^2 & 4yz^2 \\end{vmatrix}$$\n\nx-comp: $\\partial_y(4yz^2) - \\partial_z(2xz+3y^2) = 4z^2 - 2x$.\ny-comp: $\\partial_z(0) - \\partial_x(4yz^2) = 0$.\nz-comp: $\\partial_x(2xz+3y^2) - \\partial_y(0) = 2z$.\n\n$\\nabla \\times \\mathbf{F} = (4z^2-2x)\\mathbf{\\hat{x}} + 2z\\mathbf{\\hat{z}}$." },
    { id: "s3", type: 'solution', title: "Step 2: Surface Integral", content: "Choose square in **y-z plane** ($x=0$) from $y=0..1, z=0..1$.\n$d\\mathbf{a} = dy dz \\mathbf{\\hat{x}}$.\nEvaluate Curl at $x=0$: $(4z^2)\\mathbf{\\hat{x}} + 2z\\mathbf{\\hat{z}}$.\nDot product with $d\\mathbf{a}$: $4z^2$.\nIntegral: $\\int_0^1 \\int_0^1 4z^2 dy dz = \\int_0^1 4z^2 dz = [\\frac{4}{3}z^3]_0^1 = \\mathbf{4/3}$." },
    { id: "s4", type: 'solution', title: "Step 3: Line Integral", content: "Path around square in y-z plane (counter-clockwise facing +x).\n1. $(0,0)\\to(0,1)$ ($z=0$): $\\mathbf{F}=3y^2\\mathbf{\\hat{y}}$. $d\\mathbf{l}=dy\\mathbf{\\hat{y}}$. $\\int_0^1 3y^2 dy = 1$.\n2. $(0,1)\\to(1,1)$ ($y=1$): $\\mathbf{F}=(0+3)\\mathbf{\\hat{y}}+4z^2\\mathbf{\\hat{z}}$. $d\\mathbf{l}=dz\\mathbf{\\hat{z}}$. $\\int_0^1 4z^2 dz = 4/3$.\n3. $(1,1)\\to(1,0)$ ($z=1$): $\\mathbf{F}=...\\mathbf{\\hat{y}}+...$. $d\\mathbf{l}=dy\\mathbf{\\hat{y}}$ (backwards). $\\int_1^0 (3y^2) dy = -1$.\n4. $(1,0)\\to(0,0)$ ($y=0$): $\\mathbf{F}=0$. Integral 0.\n\nSum: $1 + 4/3 - 1 + 0 = \\mathbf{4/3}$.\n\n**Theorem Verified.**" }
  ]
};

const Q9_LESSON: Lesson = {
  id: "pyq-9", title: "Q9: Gradient Calculation", description: "5 Marks - Spherical Coords", icon: "Mountain",
  slides: [
    { id: "s1", type: 'example_q', title: "The Problem", content: "Compute the gradient of $T = r(\\cos\\theta + \\sin\\theta\\cos\\phi)$ in spherical coordinates." },
    { id: "s2", type: 'solution', title: "Detailed Steps", content: "Formula: $\\nabla T = \\frac{\\partial T}{\\partial r}\\mathbf{\\hat{r}} + \\frac{1}{r}\\frac{\\partial T}{\\partial \\theta}\\mathbf{\\hat{\\theta}} + \\frac{1}{r\\sin\\theta}\\frac{\\partial T}{\\partial \\phi}\\mathbf{\\hat{\\phi}}$\n\n1.  **Radial:** $\\frac{\\partial T}{\\partial r} = \\cos\\theta + \\sin\\theta\\cos\\phi$.\n2.  **Theta:** $\\frac{\\partial T}{\\partial \\theta} = r(-\\sin\\theta + \\cos\\theta\\cos\\phi)$. Divide by $r$: $-\\sin\\theta + \\cos\\theta\\cos\\phi$.\n3.  **Phi:** $\\frac{\\partial T}{\\partial \\phi} = r\\sin\\theta(-\\sin\\phi)$. Divide by $r\\sin\\theta$: $-\\sin\\phi$.\n\n**Result:** $\\nabla T = (\\cos\\theta + \\sin\\theta\\cos\\phi)\\mathbf{\\hat{r}} + (\\cos\\theta\\cos\\phi - \\sin\\theta)\\mathbf{\\hat{\\theta}} - (\\sin\\phi)\\mathbf{\\hat{\\phi}}$." }
  ]
};

const Q10_LESSON: Lesson = {
  id: "pyq-10", title: "Q10: Boundary Conditions", description: "5 Marks - Derivation", icon: "Divide",
  slides: [
    { id: "s1", type: 'proof', title: "Derivation", content: "Derive electrostatic BCs at an interface with surface charge $\\sigma$.", proofSteps: [
      "**1. Normal Component:**",
      "Apply $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = Q_{enc}/\\epsilon_0$ to a thin Gaussian pillbox straddling the surface.",
      "As thickness $\\to 0$, side flux vanishes. Only top/bottom flux remains: $E^{\\perp}_{above} A - E^{\\perp}_{below} A$.",
      "Enclosed charge $Q = \\sigma A$.",
      "Result: $E^{\\perp}_{above} - E^{\\perp}_{below} = \\frac{\\sigma}{\\epsilon_0}$.",
      "**2. Tangential Component:**",
      "Apply $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$ to a thin rectangular loop straddling the surface.",
      "As height $\\to 0$, vertical sides vanish.",
      "Result: $E^{\\parallel}_{above} L - E^{\\parallel}_{below} L = 0 \\implies E^{\\parallel}_{above} = E^{\\parallel}_{below}$."
    ]}
  ]
};

const Q11_LESSON: Lesson = {
  id: "pyq-11", title: "Q11: Continuous Energy", description: "5 Marks - Formula", icon: "Zap",
  slides: [
    { id: "s1", type: 'proof', title: "Derivation", content: "Obtain expression for energy of continuous charge distribution.", proofSteps: [
      "Start with discrete energy: $W = \\frac{1}{2} \\sum q_i V(\\mathbf{r}_i)$.",
      "For a volume distribution, replace the discrete charge $q_i$ with an infinitesimal charge element $dq = \\rho d\\tau$.",
      "Replace the sum with an integral: $W = \\frac{1}{2} \\int \\rho(\\mathbf{r}) V(\\mathbf{r}) d\\tau$.",
      "Note: The potential $V$ here is the potential due to the entire distribution itself."
    ]}
  ]
};

const Q12_LESSON: Lesson = {
  id: "pyq-12", title: "Q12: Two Charges Field", description: "5 Marks - Midpoint Axis", icon: "Target",
  slides: [
    { id: "s1", type: 'example_q', title: "The Problem", content: "What is the electric field at $z$ distance above the midpoint of two equal charges $q$ placed $d$ distance apart?" },
    { id: "s2", type: 'solution', title: "Solution", content: "**Setup:** Charges at $x = \\pm d/2$. Point P at $(0,0,z)$.\n\n1.  **Distance:** From each charge to P is $\\cal{r} = \\sqrt{z^2 + (d/2)^2}$.\n2.  **Magnitudes:** $|E_1| = |E_2| = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{\\cal{r}^2}$.\n3.  **Components:** Horizontal components cancel by symmetry. Vertical z-components add.\n4.  **Projection:** $\\cos\\theta = \\frac{z}{\\cal{r}}$. $E_z = 2 |E_1| \\cos\\theta$.\n5.  **Combine:** $E_{net} = 2 \\left( \\frac{q}{4\\pi\\epsilon_0 (z^2+d^2/4)} \\right) \\frac{z}{\\sqrt{z^2+d^2/4}}$.\n\n**Result:** $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2qz}{(z^2 + d^2/4)^{3/2}} \\mathbf{\\hat{z}}$." }
  ]
};

const Q13_LESSON: Lesson = {
  id: "pyq-13", title: "Q13: Circular Loop Field", description: "5 Marks - Axis", icon: "Circle",
  slides: [
    { id: "s1", type: 'example_q', title: "The Problem", content: "Find the electric field at $z$ distance above the midpoint of a circular loop of radius $R$ carrying charge $q$." },
    { id: "s2", type: 'solution', title: "Solution", content: "1.  **Symmetry:** On the z-axis, horizontal components of $d\\mathbf{E}$ cancel. Only $dE_z$ survives.\n2.  **Element:** Charge $dq$ on rim. Distance to P is $\\cal{r} = \\sqrt{R^2+z^2}$.\n3.  **Component:** $dE_z = dE \\cos\\theta = \\frac{1}{4\\pi\\epsilon_0} \\frac{dq}{\\cal{r}^2} \\frac{z}{\\cal{r}}$.\n4.  **Integration:** $z$ and $\\cal{r}$ are constant for the whole loop. $\\int dq = q$.\n\n**Result:** $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{qz}{(R^2+z^2)^{3/2}} \\mathbf{\\hat{z}}$." }
  ]
};

const Q14_LESSON: Lesson = {
  id: "pyq-14", title: "Q14: Integral Gauss", description: "5 Marks - Derivation", icon: "Box",
  slides: [
    { id: "s1", type: 'proof', title: "Derivation", content: "Derive Integral Gauss Law from Coulomb's Law.", proofSteps: [
      "Consider a point charge $q$ at origin.",
      "Field is $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\mathbf{\\hat{r}}$.",
      "Calculate flux through sphere of radius $r$: $\\oint \\mathbf{E} \\cdot d\\mathbf{a}$.",
      "$d\\mathbf{a} = r^2 \\sin\\theta d\\theta d\\phi \\mathbf{\\hat{r}}$.",
      "$\\mathbf{E} \\cdot d\\mathbf{a} = \\frac{q}{4\\pi\\epsilon_0 r^2} (r^2 \\sin\\theta d\\theta d\\phi) = \\frac{q}{4\\pi\\epsilon_0} \\sin\\theta d\\theta d\\phi$.",
      "Integrate over sphere: $\\int_0^{2\\pi} d\\phi \\int_0^\\pi \\sin\\theta d\\theta = 2\\pi(2) = 4\\pi$.",
      "Total Flux $\\Phi = \\frac{q}{4\\pi\\epsilon_0} (4\\pi) = q/\\epsilon_0$.",
      "By superposition, this holds for any charge distribution."
    ]}
  ]
};

const Q15_LESSON: Lesson = {
  id: "pyq-15", title: "Q15: Differential Gauss", description: "5 Marks - Conversion", icon: "Minimize",
  slides: [
    { id: "s1", type: 'proof', title: "Derivation", content: "Obtain Differential form from Integral form.", proofSteps: [
      "Start with Integral form: $\\oint_S \\mathbf{E} \\cdot d\\mathbf{a} = \\frac{Q_{enc}}{\\epsilon_0}$.",
      "Rewrite $Q_{enc}$ as volume integral of density: $Q_{enc} = \\int_V \\rho d\\tau$.",
      "Apply **Divergence Theorem** to LHS: $\\oint_S \\mathbf{E} \\cdot d\\mathbf{a} = \\int_V (\\nabla \\cdot \\mathbf{E}) d\\tau$.",
      "Equate integrals: $\\int_V (\\nabla \\cdot \\mathbf{E}) d\\tau = \\int_V \\left( \\frac{\\rho}{\\epsilon_0} \\right) d\\tau$.",
      "Since this holds for *any* volume V, the integrands must be equal.",
      "**Result:** $\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0}$."
    ]}
  ]
};

const Q16_LESSON: Lesson = {
  id: "pyq-16", title: "Q16: Plane Sheet Field", description: "5 Marks - Gauss Application", icon: "Square",
  slides: [
    { id: "s1", type: 'example_q', title: "The Problem", content: "Find the electric field due to a plane sheet of charge density $\\sigma$. Then find field between two plates $+\\sigma$ and $-\\sigma$." },
    { id: "s2", type: 'solution', title: "Part 1: Single Sheet", content: "1. **Gaussian Surface:** Pillbox of area $A$ straddling the sheet.\n2. **Flux:** Field points away. Flux through top and bottom is $EA + EA = 2EA$.\n3. **Charge:** $Q_{enc} = \\sigma A$.\n4. **Solve:** $2EA = \\sigma A / \\epsilon_0 \\implies E = \\frac{\\sigma}{2\\epsilon_0}$." },
    { id: "s3", type: 'interactive_canvas', title: "Gaussian Pillbox", content: "Visualize flux through the top and bottom of the pillbox.", interactiveCanvasId: "gaussian-pillbox-interactive" },
    { id: "s4", type: 'solution', title: "Part 2: Two Sheets", content: "1. **Between plates:** Fields add. $\\frac{\\sigma}{2\\epsilon_0} + \\frac{\\sigma}{2\\epsilon_0} = \\frac{\\sigma}{\\epsilon_0}$.\n2. **Outside:** Fields cancel ($E_+ - E_- = 0$).\n\n**Result:** $E_{net} = \\sigma/\\epsilon_0$ between, 0 outside." }
  ]
};

const Q17_LESSON: Lesson = {
  id: "pyq-17", title: "Q17: Spherical Shell", description: "5 Marks - Gauss Application", icon: "Globe",
  slides: [
    { id: "s1", type: 'solution', title: "Solution", content: "**Inside ($r < R$):**\n*   Gaussian surface: Sphere $r < R$.\n*   $Q_{enc} = 0$.\n*   $\\oint E da = E(4\\pi r^2) = 0 \\implies \\mathbf{E} = 0$.\n\n**Outside ($r > R$):**\n*   Gaussian surface: Sphere $r > R$.\n*   $Q_{enc} = \\text{total charge } Q = 4\\pi R^2 \\sigma$.\n*   $E(4\\pi r^2) = Q/\\epsilon_0 \\implies \\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}\\mathbf{\\hat{r}}$." }
  ]
};

const Q18_LESSON: Lesson = {
  id: "pyq-18", title: "Q18: Conservative Field", description: "5 Marks - Line Integral", icon: "TrendingUp",
  slides: [
    { id: "s1", type: 'proof', title: "Derivation", content: "Show $\\nabla \\times \\mathbf{E} = 0$.", proofSteps: [
      "For a point charge at origin, $\\mathbf{E} = k \\frac{1}{r^2} \\mathbf{\\hat{r}}$.",
      "Calculate line integral from $\\mathbf{a}$ to $\\mathbf{b}$: $\\int_a^b \\mathbf{E} \\cdot d\\mathbf{l}$.",
      "In spherical coords, $d\\mathbf{l} = dr \\mathbf{\\hat{r}} + r d\\theta \\mathbf{\\hat{\\theta}} + \\dots$",
      "Dot product picks only radial part: $\\mathbf{E} \\cdot d\\mathbf{l} = k \\frac{1}{r^2} dr$.",
      "Integral is $\\int_a^b k r^{-2} dr = [-k/r]_a^b = k(1/r_a - 1/r_b)$.",
      "This depends only on endpoints $r_a, r_b$, not the path.",
      "For a closed loop, $r_a = r_b$, so $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$.",
      "By Stokes' Theorem, $\\nabla \\times \\mathbf{E} = 0$."
    ]}
  ]
};

const Q19_LESSON: Lesson = {
  id: "pyq-19", title: "Q19: Solid Sphere Field", description: "10 Marks - Full Derivation", icon: "Circle",
  slides: [
    { id: "s1", type: 'example_q', title: "The Problem", content: "Find the electric field due to a uniformly charged solid sphere (radius $R$, charge $Q$) both inside and outside using Gauss's Law. Plot the variation." },
    { id: "s2", type: 'solution', title: "Part 1: Outside (r > R)", content: "**Gaussian Surface:** Sphere of radius $r > R$.\n\n*   **Enclosed Charge:** All of it. $Q_{enc} = Q$.\n*   **Flux:** $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = E(4\\pi r^2)$.\n*   **Gauss:** $E(4\\pi r^2) = Q/\\epsilon_0$.\n*   **Result:** $\\mathbf{E}_{out} = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2} \\mathbf{\\hat{r}}$." },
    { id: "s3", type: 'solution', title: "Part 2: Inside (r < R)", content: "**Gaussian Surface:** Sphere of radius $r < R$.\n\n*   **Enclosed Charge:** Fraction of volume. $Q_{enc} = \\rho (\\frac{4}{3}\\pi r^3)$.\n*   Density $\\rho = \\frac{Q}{\\frac{4}{3}\\pi R^3}$. So $Q_{enc} = Q \\frac{r^3}{R^3}$.\n*   **Flux:** $E(4\\pi r^2)$.\n*   **Gauss:** $E(4\\pi r^2) = \\frac{Q r^3}{\\epsilon_0 R^3}$.\n*   **Result:** $\\mathbf{E}_{in} = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q r}{R^3} \\mathbf{\\hat{r}}$." },
    { id: "s4", type: 'theory', title: "Part 3: The Plot", content: "*   **Inside ($0 < r < R$):** Linear increase ($E \\propto r$).\n*   **Surface ($r=R$):** Max value $E_{max} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{R^2}$.\n*   **Outside ($r > R$):** Inverse square decay ($E \\propto 1/r^2$)." },
    { id: "s5", type: 'interactive_canvas', title: "Interactive Plot", content: "Visualize the linear rise inside and curve decay outside. Drag the point to see value.", interactiveCanvasId: "solid-sphere-plot" }
  ]
};

const Q20_LESSON: Lesson = {
  id: "pyq-20", title: "Q20: Energy of System", description: "10 Marks - Derivation", icon: "Layers",
  slides: [
    { id: "s1", type: 'proof', title: "Derivation", content: "Obtain expression for electrostatic energy of $n$ point charges.", proofSteps: [
      "**Step 1:** Bring in $q_1$. No field exists yet. Work $W_1 = 0$.",
      "**Step 2:** Bring in $q_2$ to position $\\mathbf{r}_2$. Potential from $q_1$ is $V_1(\\mathbf{r}_2) = k q_1 / \\cal{r}_{12}$. Work $W_2 = q_2 V_1 = k \\frac{q_1 q_2}{\\cal{r}_{12}}$.",
      "**Step 3:** Bring in $q_3$. It feels $q_1$ and $q_2$. Work $W_3 = q_3 (V_1 + V_2) = k q_3 (\\frac{q_1}{\\cal{r}_{13}} + \\frac{q_2}{\\cal{r}_{23}})$.",
      "**Step 4:** Generalize. Total Work $W = k \\sum_{i=1}^n \\sum_{j<i} \\frac{q_i q_j}{\\cal{r}_{ij}}$.",
      "**Step 5:** Rewrite to sum over all $i$ and $j$ ($i \\neq j$). This counts every pair twice.",
      "**Final Formula:** $W = \\frac{1}{2} \\sum_{i=1}^n q_i \\left( \\sum_{j \\neq i} \\frac{1}{4\\pi\\epsilon_0} \\frac{q_j}{\\cal{r}_{ij}} \\right) = \\frac{1}{2} \\sum_{i=1}^n q_i V(\\mathbf{r}_i)$."
    ]}
  ]
};

const Q21_LESSON: Lesson = {
  id: "pyq-21", title: "Q21: Boundary Conditions", description: "10 Marks - Full Detail", icon: "Divide",
  slides: [
    { id: "s1", type: 'theory', title: "Overview", content: "We must derive the behavior of $\\mathbf{E}$ components across a surface with charge density $\\sigma$. We use Gauss's Law for normal components and the conservative nature of E for tangential components." },
    { id: "s2", type: 'proof', title: "Normal Component", content: "Derive $E^{\\perp}_{above} - E^{\\perp}_{below} = \\sigma/\\epsilon_0$.", proofSteps: [
      "Construct a small Gaussian 'pillbox' of area $A$ and negligible height $\\epsilon$ extending through the surface.",
      "Apply $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = Q_{enc}/\\epsilon_0$.",
      "Flux through sides $\\to 0$ as $\\epsilon \\to 0$.",
      "Flux through top = $E^{\\perp}_{above} A$. Flux through bottom = $-E^{\\perp}_{below} A$.",
      "Total Flux = $(E^{\\perp}_{above} - E^{\\perp}_{below}) A$.",
      "Enclosed Charge = $\\sigma A$.",
      "Thus $(E^{\\perp}_{above} - E^{\\perp}_{below}) A = \\sigma A / \\epsilon_0$. Divide by A."
    ]},
    { id: "s3", type: 'interactive_canvas', title: "Pillbox Visualization", content: "See the flux coming out of the pillbox.", interactiveCanvasId: "gaussian-pillbox-interactive" },
    { id: "s4", type: 'proof', title: "Tangential Component", content: "Derive $E^{\\parallel}_{above} - E^{\\parallel}_{below} = 0$.", proofSteps: [
      "Construct a small rectangular loop of length $L$ and negligible height $\\epsilon$.",
      "Apply $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$.",
      "Work along sides $\\to 0$ as $\\epsilon \\to 0$.",
      "Work along top = $E^{\\parallel}_{above} L$. Work along bottom = $-E^{\\parallel}_{below} L$ (direction opposes path).",
      "Total Integral = $(E^{\\parallel}_{above} - E^{\\parallel}_{below}) L = 0$.",
      "Thus $E^{\\parallel}_{above} = E^{\\parallel}_{below}$."
    ]},
    { id: "s5", type: 'theory', title: "Conclusion", content: "The electric field undergoes a discontinuous jump in the normal direction proportional to surface charge, but remains continuous in the tangential direction.\n\nVector Form:\n$$ \\mathbf{E}_{above} - \\mathbf{E}_{below} = \\frac{\\sigma}{\\epsilon_0} \\mathbf{\\hat{n}} $$" },
    { id: "s6", type: 'interactive_canvas', title: "Vector Jump", content: "Visualize the net field vector changing direction across the boundary.", interactiveCanvasId: "electric-boundary-interactive" }
  ]
};

export const PRACTICE_SECTION: Section = {
  id: "practice-section",
  title: "PYQ 2024-28 Assessment",
  description: "21 Practice Questions from the Open Book Assessment",
  color: "duo-red",
  units: [
    {
      id: "practice-unit",
      title: "Assessment Questions",
      description: "Step-by-step solutions",
      color: "duo-red",
      lessons: [
        Q1_LESSON, Q2_LESSON, Q3_LESSON, Q4_LESSON, Q5_LESSON,
        Q6_LESSON, Q7_LESSON, Q8_LESSON, Q9_LESSON, Q10_LESSON,
        Q11_LESSON, Q12_LESSON, Q13_LESSON, Q14_LESSON, Q15_LESSON,
        Q16_LESSON, Q17_LESSON, Q18_LESSON, Q19_LESSON, Q20_LESSON,
        Q21_LESSON
      ]
    }
  ]
};

export const PRACTICE_COURSE: Course = {
  id: 'practice-mode',
  title: 'Practice Mode',
  description: 'Exam preparation',
  sections: [PRACTICE_SECTION]
};