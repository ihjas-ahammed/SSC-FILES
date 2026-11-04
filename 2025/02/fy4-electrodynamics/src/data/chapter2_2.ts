import { Section } from '../types';

export const SECTION_2_2: Section = {
  id: "section-2-2",
  title: "Section 2.2: Divergence, Curl, and Potential",
  description: "The core theory of Electrostatics: Gauss's Law, scalar potential, and energy.",
  color: "duo-blue",
  units: [
    {
      id: "unit-221",
      title: "2.2.1 Gauss's Law",
      description: "Field lines, Flux, and the Divergence of E.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-221-1",
          title: "Electric Field Lines",
          description: "Visualizing the field.",
          icon: "Eye",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Do electric field lines ever cross?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "If they crossed, the field would have two directions at one point." }, { id: "B", text: "No", isCorrect: true, explanation: "The field direction is unique at every point in space." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Field lines start and end on:", options: [{ id: "A", text: "Start (+) End (-)", isCorrect: true, explanation: "They diverge from positive and converge to negative." }, { id: "B", text: "Start (-) End (+)", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Field Lines", content: "Field lines provide a visual map of $\\mathbf{E}$.\n\n1. Tangent gives direction.\n2. Density (lines per area) gives magnitude.\n3. Start on $+$ charges, end on $-$ charges (or infinity)." },
            { id: "s3", type: "interactive_canvas", title: "Visualizing Field Lines", content: "See how lines spread from a point source.", interactiveCanvasId: "divergence-interactive" },
            { id: "s4", type: "proof", title: "Density Property", content: "**Goal:** Show density $\\propto 1/r^2$.", proofSteps: ["Total lines $N$ is constant.", "At radius $r$, area is $4\\pi r^2$.", "Density = $N / 4\\pi r^2 \\propto 1/r^2$.", "Matches Coulomb's law magnitude."] },
            { id: "s5", type: "numerical", title: "Line Count", content: "If a 1C charge has 8 lines, how many lines for a 4C charge?", numericAnswer: 32, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Uniform Field", content: "What do lines of a uniform field look like?", options: [{ id: "A", text: "Parallel and equally spaced", isCorrect: true, explanation: "" }, { id: "B", text: "Radially diverging", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The number of field lines per unit area perpendicular to the lines is proportional to the field ___.", blankAnswer: "magnitude" }
          ]
        },
        {
          id: "les-221-2",
          title: "Electric Flux",
          description: "Flow of field through a surface.",
          icon: "Grid",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Flux depends on:", options: [{ id: "A", text: "Field strength only", isCorrect: false, explanation: "" }, { id: "B", text: "Field strength, Area, and Angle", isCorrect: true, explanation: "It's a dot product." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Flux is maximum when the surface normal is:", options: [{ id: "A", text: "Parallel to E", isCorrect: true, explanation: "Surface is perpendicular to field." }, { id: "B", text: "Perpendicular to E", isCorrect: false, explanation: "Then no lines pass through." }] },
            { id: "s2", type: "theory", title: "Definition of Flux", content: "Electric Flux $\\Phi_E$ is the measure of flow of $\\mathbf{E}$ through a surface $S$.\n\n$$ \\Phi_E \\equiv \\int_S \\mathbf{E} \\cdot d\\mathbf{a} $$\n\nFor a closed surface, $d\\mathbf{a}$ points outward." },
            { id: "s3", type: "interactive_canvas", title: "Flux Explorer", content: "Field lines passing through a boundary.", interactiveCanvasId: "divergence-interactive" },
            { id: "s4", type: "proof", title: "Units", content: "**Goal:** Determine flux units.", proofSteps: ["E is N/C.", "Area is $m^2$.", "Flux is $(N/C) \\cdot m^2$ or $V \\cdot m$."] },
            { id: "s5", type: "numerical", title: "Flat Surface", content: "E = 100 N/C (x-dir). Square plate 2m side in yz-plane. Flux?", numericAnswer: 400, numericTolerance: 1 },
            { id: "s6", type: "quiz", title: "Closed Cube", content: "If a cube is in a uniform field, net flux is:", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "What goes in comes out." }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The dot product $\\mathbf{E} \\cdot d\\mathbf{a}$ picks out the component of E ___ to the surface.", blankAnswer: "normal" }
          ]
        },
        {
          id: "les-221-3",
          title: "Gauss's Law (Integral)",
          description: "Flux equals enclosed charge.",
          icon: "Box",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Does the shape of the Gaussian surface matter?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "As long as it is closed." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What constant relates flux and charge?", options: [{ id: "A", text: "$\\mu_0$", isCorrect: false, explanation: "" }, { id: "B", text: "$\\epsilon_0$", isCorrect: true, explanation: "Permittivity of free space." }] },
            { id: "s2", type: "theory", title: "Gauss's Law", content: "The total flux through any closed surface equals the enclosed charge divided by $\\epsilon_0$.\n\n$$ \\oint \\mathbf{E} \\cdot d\\mathbf{a} = \\frac{Q_{enc}}{\\epsilon_0} $$\n\nThis is one of Maxwell's equations." },
            { id: "s3", type: "interactive_canvas", title: "Enclosed Charge", content: "Flux depends only on what's inside.", interactiveCanvasId: "divergence-interactive" },
            { id: "s4", type: "proof", title: "Derivation (Sphere)", content: "**Goal:** Prove for point charge.", proofSteps: ["Place $q$ at center of sphere radius $R$.", "$E = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R^2}$ is constant on surface.", "Area $A = 4\\pi R^2$.", "Flux $\\Phi = E A = \\frac{q}{\\epsilon_0}$."] },
            { id: "s5", type: "numerical", title: "Flux Calc", content: "Charge q = 8.85 pC inside a box. Flux? ($\\epsilon_0 \\approx 8.85 \\times 10^{-12}$)", numericAnswer: 1, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "External Charge", content: "A charge is outside the surface. Net flux?", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "Field lines enter and exit." }, { id: "B", text: "Non-zero", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Gauss's Law relates net flux to the ___ charge.", blankAnswer: "enclosed" }
          ]
        },
        {
          id: "les-221-4",
          title: "Gauss's Law (Differential)",
          description: "Local relationship.",
          icon: "Minimize",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "The differential form applies to:", options: [{ id: "A", text: "A large volume", isCorrect: false, explanation: "" }, { id: "B", text: "A specific point", isCorrect: true, explanation: "It relates local divergence to local density." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What operator is used?", options: [{ id: "A", text: "Divergence ($\\nabla \\cdot$)", isCorrect: true, explanation: "" }, { id: "B", text: "Curl ($\\nabla \\times$)", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Differential Form", content: "By applying the Divergence Theorem to the integral law:\n\n$$ \\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0} $$\n\nCharge density $\\rho$ is the source of the electric field's divergence." },
            { id: "s3", type: "interactive_canvas", title: "Source Visualization", content: "Positive divergence means vectors spreading out.", interactiveCanvasId: "divergence-interactive" },
            { id: "s4", type: "proof", title: "Derivation", content: "**Goal:** Integral to Differential.", proofSteps: ["$\\oint \\mathbf{E} \\cdot d\\mathbf{a} = \\int (\\nabla \\cdot \\mathbf{E}) d\\tau$.", "$Q_{enc} = \\int \\rho d\\tau$.", "$\\int (\\nabla \\cdot \\mathbf{E}) d\\tau = \\int (\\rho/\\epsilon_0) d\\tau$.", "Integrands must be equal."] },
            { id: "s5", type: "numerical", title: "Density", content: "If div E = 1000 SI units, what is $\\rho$? (Use $\\epsilon_0 \\approx 9 \\times 10^{-12}$)", numericAnswer: 9e-9, numericTolerance: 1e-9 },
            { id: "s6", type: "quiz", title: "Empty Space", content: "In vacuum (no charge), $\\nabla \\cdot \\mathbf{E}$ is:", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "" }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The equation $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$ is the first of ___ equations.", blankAnswer: "Maxwell's" }
          ]
        },
        {
          id: "les-221-5",
          title: "Divergence of E",
          description: "Direct calculation check.",
          icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What is $\\nabla \\cdot \\frac{\\hat{r}}{r^2}$ away from origin?", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "Mathematically zero for r > 0." }, { id: "B", text: "Positive", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What happens at r=0?", options: [{ id: "A", text: "Nothing special", isCorrect: false, explanation: "" }, { id: "B", text: "Singularity (Delta function)", isCorrect: true, explanation: "Infinite divergence." }] },
            { id: "s2", type: "theory", title: "The Dirac Delta", content: "Calculating divergence of point charge field $\\mathbf{E} \\propto \\frac{\\hat{r}}{r^2}$ yields zero everywhere except origin. \n\n$$ \\nabla \\cdot \\left( \\frac{\\hat{r}}{r^2} \\right) = 4\\pi \\delta^3(\\mathbf{r}) $$\n\nThis confirms $\\nabla \\cdot \\mathbf{E} = \\frac{q}{\\epsilon_0} \\delta^3(\\mathbf{r}) = \\rho/\\epsilon_0$." },
            { id: "s4", type: "proof", title: "Zero Div Calculation", content: "**Goal:** Show zero for $r>0$.", proofSteps: ["Use spherical coords.", "$\\nabla \\cdot \\mathbf{v} = \\frac{1}{r^2} \\frac{\\partial}{\\partial r} (r^2 v_r)$.", "$v_r = 1/r^2$, so $r^2 v_r = 1$.", "Derivative of 1 is 0."] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The divergence of the Coulomb field involves the ___ delta function.", blankAnswer: "Dirac" }
          ]
        },
        {
          id: "les-221-6",
          title: "Curl of E",
          description: "Introduction to irrotational fields.",
          icon: "RotateCcw",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What is the line integral of E around a closed loop (electrostatics)?", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "Conservative field." }, { id: "B", text: "Flux", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What does this imply for $\\nabla \\times \\mathbf{E}$?", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "By Stokes' Theorem." }, { id: "B", text: "Non-zero", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Curl of E", content: "For any static charge distribution:\n\n$$ \\nabla \\times \\mathbf{E} = 0 $$\n\nThis means the electrostatic field is **irrotational** (no swirl). This property allows us to define a scalar potential." },
            { id: "s3", type: "interactive_canvas", title: "Curl Visualization", content: "Electrostatic fields don't loop.", interactiveCanvasId: "curl-interactive" },
            { id: "s4", type: "proof", title: "Proof for Point Charge", content: "**Goal:** Curl is zero.", proofSteps: ["$\\mathbf{E} \\propto \\hat{r}$.", "Radial fields have zero curl (by symmetry or calculation).", "$\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$ as $E$ is radial and depends only on r.", "Superposition extends this to any static distribution."] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The curl of any static electric field is ___.", blankAnswer: "zero" }
          ]
        }
      ]
    },
    {
      id: "unit-222",
      title: "2.2.2 Applications of Gauss",
      description: "Solving for E using symmetry.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-222-1",
          title: "Symmetry Arguments",
          description: "When to use Gauss's Law.",
          icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Gauss's Law is always true, but is it always useful for finding E?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "Math can be too hard." }, { id: "B", text: "No, only with symmetry", isCorrect: true, explanation: "We need to pull E out of the integral." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Which symmetry is NOT standard for Gauss problems?", options: [{ id: "A", text: "Spherical", isCorrect: false, explanation: "" }, { id: "B", text: "Elliptical", isCorrect: true, explanation: "Too complex for constant E surface." }] },
            { id: "s2", type: "theory", title: "Gaussian Surfaces", content: "To solve $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = Q/\\epsilon_0$ for E, we need a surface $S$ where:\n1. $\\mathbf{E}$ is constant magnitude.\n2. $\\mathbf{E}$ is parallel to $d\\mathbf{a}$ (or perpendicular to surface).\n\nUse Spheres, Cylinders, or Pillboxes." },
            { id: "s3", type: "interactive_canvas", title: "Symmetry Selection", content: "Visualize Gaussian surfaces.", interactiveCanvasId: "component-form-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "We choose a Gaussian surface such that $|E|$ is ___ on the surface.", blankAnswer: "constant" }
          ]
        },
        {
          id: "les-222-2",
          title: "Example 2.3: Sphere",
          description: "Field of a charged sphere.",
          icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.3", content: "**Problem:** Find the field outside a uniformly charged solid sphere of radius R and charge q." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** $E = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\hat{r}$\n\n1. Symmetry: Radial field.\n2. Surface: Sphere radius $r > R$.\n3. $\\oint E da = E (4\\pi r^2)$.\n4. $E(4\\pi r^2) = q/\\epsilon_0$." },
            { id: "s2", type: "quiz", title: "Conclusion", content: "Outside the sphere, it behaves like:", options: [{ id: "A", text: "A point charge", isCorrect: true, explanation: "Shell theorem." }, { id: "B", text: "A plane", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "numerical", title: "Calc", content: "q=1nC, r=1m. E?", numericAnswer: 9, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-222-3",
          title: "Problem 2.8: Sphere Inside",
          description: "Field inside the sphere.",
          icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.8", content: "**Problem:** Find E inside a uniform sphere of charge density $\\rho$." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** Proportional to r.\n\n1. Surface: Sphere $r < R$.\n2. $Q_{enc} = \\rho (\\frac{4}{3}\\pi r^3)$.\n3. $E(4\\pi r^2) = Q_{enc}/\\epsilon_0$.\n4. $E = \\frac{\\rho r}{3\\epsilon_0}$." },
            { id: "s2", type: "quiz", title: "Center", content: "Field at center?", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "" }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" }] },
            { id: "s5", type: "numerical", title: "Linearity", content: "If E at r=1 is 10, what is E at r=0.5?", numericAnswer: 5, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-222-4",
          title: "Example 2.4: Cylinder",
          description: "Infinite line charge.",
          icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.4", content: "**Problem:** Find E distance s from infinite line charge $\\lambda$." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** $E = \\frac{\\lambda}{2\\pi\\epsilon_0 s}\\hat{s}$\n\n1. Symmetry: Radial (cylindrical).\n2. Surface: Cylinder radius s, length L.\n3. Flux only through curved side: $E(2\\pi s L)$.\n4. $Q_{enc} = \\lambda L$." },
            { id: "s2", type: "quiz", title: "Falloff", content: "Field drops as:", options: [{ id: "A", text: "1/s", isCorrect: true, explanation: "Line charge." }, { id: "B", text: "1/s^2", isCorrect: false, explanation: "Point charge." }] }
          ]
        },
        {
          id: "les-222-5",
          title: "Example 2.5: Plane",
          description: "Infinite sheet.",
          icon: "Square",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.5", content: "**Problem:** Find E from infinite sheet, density $\\sigma$." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** $\\frac{\\sigma}{2\\epsilon_0}$\n\n1. Symmetry: Perpendicular to plane.\n2. Surface: Pillbox area A.\n3. Flux through top and bottom: $2EA$.\n4. $Q_{enc} = \\sigma A$.\n5. $2EA = \\sigma A / \\epsilon_0$." },
            { id: "s2", type: "quiz", title: "Independence", content: "Does E depend on distance?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Constant field." }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-222-6",
          title: "Example 2.6: Capacitor",
          description: "Two planes.",
          icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.6", content: "**Problem:** Two plates $+\\sigma$ and $-\\sigma$. Find E." },
            { id: "s1", type: "solution", title: "Solution", content: "Superposition of two sheets.\n\nBetween: Fields add -> $\\sigma/\\epsilon_0$.\nOutside: Fields cancel -> 0." },
            { id: "s2", type: "quiz", title: "Direction", content: "Direction between plates?", options: [{ id: "A", text: "Plus to Minus", isCorrect: true, explanation: "" }, { id: "B", text: "Minus to Plus", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-222-7",
          title: "Summary: Applications",
          description: "Recap.",
          icon: "List",
          slides: [
            { id: "s0", type: "theory", title: "Key Results", content: "Sphere: $1/r^2$ (out), $r$ (in).\nLine: $1/s$.\nPlane: Constant." }
          ]
        }
      ]
    },
    {
      id: "unit-223",
      title: "2.2.3 Electric Potential",
      description: "Scalar potential V and its relation to E.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-223-1",
          title: "Path Independence",
          description: "Conservative field.",
          icon: "TrendingUp",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Since $\\nabla \\times \\mathbf{E} = 0$, line integrals are:", options: [{ id: "A", text: "Path Independent", isCorrect: true, explanation: "" }, { id: "B", text: "Zero always", isCorrect: false, explanation: "Only for closed loops." }] },
            { id: "s2", type: "theory", title: "Conservative Nature", content: "$$ \\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0 $$\n\nThis implies we can define a potential function $V(\\mathbf{r})$." },
            { id: "s3", type: "interactive_canvas", title: "Path Independence", content: "Work done is same regardless of path.", interactiveCanvasId: "work-path-interactive" }
          ]
        },
        {
          id: "les-223-2",
          title: "Definition of V",
          description: "Line integral from reference.",
          icon: "Zap",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "V is defined as:", options: [{ id: "A", text: "$\\int \\mathbf{E} \\cdot d\\mathbf{l}$", isCorrect: false, explanation: "Missing minus." }, { id: "B", text: "$-\\int \\mathbf{E} \\cdot d\\mathbf{l}$", isCorrect: true, explanation: "Work per unit charge against field." }] },
            { id: "s2", type: "theory", title: "Electric Potential", content: "$$ V(\\mathbf{r}) \\equiv -\\int_O^\\mathbf{r} \\mathbf{E} \\cdot d\\mathbf{l} $$\n\n$O$ is the reference point (usually infinity)." },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Potential is measured in ___.", blankAnswer: "Volts" }
          ]
        },
        {
          id: "les-223-3",
          title: "Relation to E",
          description: "Gradient.",
          icon: "ArrowDown",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "How to get E from V?", options: [{ id: "A", text: "$\\mathbf{E} = -\\nabla V$", isCorrect: true, explanation: "" }, { id: "B", text: "$\\mathbf{E} = \\nabla V$", isCorrect: false, explanation: "Needs minus." }] },
            { id: "s2", type: "theory", title: "Gradient Relation", content: "$$ \\mathbf{E} = -\\nabla V $$\n\nE points downhill (to lower potential)." },
            { id: "s3", type: "interactive_canvas", title: "Potential Hill", content: "E is slope.", interactiveCanvasId: "gradient-interactive" }
          ]
        },
        {
          id: "les-223-4",
          title: "Poisson & Laplace",
          description: "Differential equations.",
          icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Combining $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$ and $\\mathbf{E} = -\\nabla V$ gives:", options: [{ id: "A", text: "Poisson's Eq", isCorrect: true, explanation: "" }, { id: "B", text: "Ampere's Eq", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Poisson's Equation", content: "$$ \\nabla^2 V = -\\frac{\\rho}{\\epsilon_0} $$\n\nIf $\\rho=0$, it becomes **Laplace's Equation**: $\\nabla^2 V = 0$." },
            { id: "s3", type: "interactive_canvas", title: "Laplacian", content: "Curvature of field.", interactiveCanvasId: "laplacian-interactive" }
          ]
        },
        {
          id: "les-223-5",
          title: "Localized Charges",
          description: "Standard formula.",
          icon: "Target",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Potential of point charge q?", options: [{ id: "A", text: "$q/r$", isCorrect: true, explanation: "With constants." }, { id: "B", text: "$q/r^2$", isCorrect: false, explanation: "That's E." }] },
            { id: "s2", type: "theory", title: "Point Charge Potential", content: "$$ V(r) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r} $$\n\nReference at infinity." },
            { id: "s5", type: "numerical", title: "Calc", content: "q=1nC, r=1m. V approx?", numericAnswer: 9, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-223-6",
          title: "Continuous Distribution",
          description: "Integral for V.",
          icon: "Cloud",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "To find V of blob, integrate:", options: [{ id: "A", text: "$\\rho/r d\\tau$", isCorrect: true, explanation: "" }, { id: "B", text: "$\\rho/r^2 d\\tau$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Continuous V", content: "$$ V(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\mathbf{r}')}{\\mathcal{r}} d\\tau' $$\n\nScalar integral (easier than E)." }
          ]
        },
        {
          id: "les-223-7",
          title: "Ex 2.7: Spherical Shell",
          description: "V of shell.",
          icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.7", content: "**Problem:** Find V inside and outside spherical shell radius R, charge q." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:**\nOut: $k q/r$ (like point).\nIn: $k q/R$ (constant).\n\nPotential is continuous at surface." }
          ]
        },
        {
          id: "les-223-8",
          title: "Ex 2.8: Uniform Sphere",
          description: "V of solid sphere.",
          icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem (Solid Sphere)", content: "**Problem:** Find V inside solid sphere." },
            { id: "s1", type: "solution", title: "Solution", content: "Integrate E from infinity.\n$V(r) = \\frac{q}{8\\pi\\epsilon_0 R} (3 - r^2/R^2)$." }
          ]
        }
      ]
    },
    {
      id: "unit-224",
      title: "2.2.4 Boundary & Energy",
      description: "Boundary conditions, Work, Energy, Capacitors.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-224-1",
          title: "BC on E (Normal)",
          description: "Discontinuity.",
          icon: "ArrowUp",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Normal E component jumps by:", options: [{ id: "A", text: "$\\sigma/\\epsilon_0$", isCorrect: true, explanation: "" }, { id: "B", text: "Zero", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Normal Boundary Condition", content: "$$ E_{above}^{\\perp} - E_{below}^{\\perp} = \\frac{\\sigma}{\\epsilon_0} $$\n\nDue to surface charge flux." },
            { id: "s3", type: "interactive_canvas", title: "Field Jump", content: "Visualize discontinuity.", interactiveCanvasId: "electric-boundary-interactive" }
          ]
        },
        {
          id: "les-224-2",
          title: "BC on E (Tangential)",
          description: "Continuity.",
          icon: "ArrowRight",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Tangential E is:", options: [{ id: "A", text: "Continuous", isCorrect: true, explanation: "Loop integral is zero." }, { id: "B", text: "Discontinuous", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Tangential BC", content: "$$ \\mathbf{E}_{above}^{\\parallel} = \\mathbf{E}_{below}^{\\parallel} $$\n\nFollows from $\\nabla \\times \\mathbf{E} = 0$." },
            { id: "s3", type: "interactive_canvas", title: "Tangential Continuity", content: "Vectors match along surface.", interactiveCanvasId: "electric-boundary-interactive" }
          ]
        },
        {
          id: "les-224-3",
          title: "BC on Potential",
          description: "Continuity of V.",
          icon: "Waves",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Is V continuous across a charge sheet?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "No infinite field." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Potential BC", content: "$$ V_{above} = V_{below} $$\n\nPotential is continuous. Its gradient (E) is not." }
          ]
        },
        {
          id: "les-224-4",
          title: "Work to Move Charge",
          description: "W = Q Delta V.",
          icon: "Move",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Work done moving Q from a to b:", options: [{ id: "A", text: "$Q(V(b)-V(a))$", isCorrect: true, explanation: "" }, { id: "B", text: "$Q(V(a)-V(b))$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Work", content: "Work against field:\n$$ W = Q [V(\\mathbf{b}) - V(\\mathbf{a})] $$" },
            { id: "s3", type: "interactive_canvas", title: "Work Path", content: "Path independent work.", interactiveCanvasId: "work-path-interactive" }
          ]
        },
        {
          id: "les-224-5",
          title: "Energy of Point Charges",
          description: "Assembly work.",
          icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Work to assemble system:", options: [{ id: "A", text: "$\\frac{1}{2} \\sum q_i V_i$", isCorrect: true, explanation: "1/2 avoids double counting." }, { id: "B", text: "$\\sum q_i V_i$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Discrete Energy", content: "$$ W = \\frac{1}{2} \\sum_{i=1}^n q_i V(\\mathbf{r}_i) $$\n\nExcludes self-energy of points." },
            { id: "s5", type: "numerical", title: "Two Charges", content: "q1=q2=1C, dist=1m. Energy? (k=9e9)", numericAnswer: 4.5e9, numericTolerance: 0.1e9, notes: "k q^2 / r" }
          ]
        },
        {
          id: "les-224-6",
          title: "Energy of Continuous",
          description: "Integral rho V.",
          icon: "Cloud",
          slides: [
            { id: "s2", type: "theory", title: "Continuous Energy", content: "$$ W = \\frac{1}{2} \\int \\rho V d\\tau $$\n\nGeneralization for smooth distributions." }
          ]
        },
        {
          id: "les-224-7",
          title: "Energy in Field",
          description: "E squared.",
          icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Energy density of E field:", options: [{ id: "A", text: "$\\frac{\\epsilon_0}{2} E^2$", isCorrect: true, explanation: "" }, { id: "B", text: "$\\epsilon_0 E$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Field Energy", content: "$$ W = \\frac{\\epsilon_0}{2} \\int_{all space} E^2 d\\tau $$\n\nEnergy is stored in the field itself." }
          ]
        },
        {
          id: "les-224-8",
          title: "Conductors",
          description: "E=0 inside.",
          icon: "Shield",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Inside a conductor:", options: [{ id: "A", text: "E = 0", isCorrect: true, explanation: "" }, { id: "B", text: "E is constant", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Conductor Properties", content: "1. $E=0$ inside.\n2. $\\rho=0$ inside.\n3. Charge on surface.\n4. Conductor is equipotential." },
            { id: "s3", type: "interactive_canvas", title: "Conductor Shield", content: "Charges move to surface.", interactiveCanvasId: "conductor-charges-interactive" }
          ]
        },
        {
          id: "les-224-9",
          title: "Capacitors",
          description: "C = Q/V.",
          icon: "Battery",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Capacitance depends on:", options: [{ id: "A", text: "Geometry only", isCorrect: true, explanation: "" }, { id: "B", text: "Charge Q", isCorrect: false, explanation: "Q/V is constant." }] },
            { id: "s2", type: "theory", title: "Capacitance", content: "$$ C \\equiv \\frac{Q}{V} $$\n\nDepends on shape and size. Energy $W = \\frac{1}{2}CV^2$." },
            { id: "s3", type: "interactive_canvas", title: "Plate Capacitor", content: "Adjust distance.", interactiveCanvasId: "capacitor-interactive" }
          ]
        },
        {
          id: "les-224-10",
          title: "Example 2.10: Plates",
          description: "Parallel Plate C.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.10", content: "**Problem:** Find C of parallel plates area A, dist d." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** $C = \\frac{\\epsilon_0 A}{d}$\n\n1. Field $E = \\sigma/\\epsilon_0 = Q/A\\epsilon_0$.\n2. $V = Ed = Qd/A\\epsilon_0$.\n3. $C = Q/V$." }
          ]
        }
      ]
    },
    {
      id: "unit-2-2-summary",
      title: "Section 2.2 Summary",
      description: "Review of Divergence, Curl, Potential, and Energy.",
      color: "duo-green",
      lessons: [
        {
          id: "les-22-sum-1",
          title: "Gauss & Potential Recap",
          description: "Key laws.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Maxwell's Equations (Electrostatics)", content: "$\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$ (Gauss)\n$\\nabla \\times \\mathbf{E} = 0$ (Conservative)\n\nPotential: $\\mathbf{E} = -\\nabla V$." }
          ]
        },
        {
          id: "les-22-sum-2",
          title: "Energy & Conductors Recap",
          description: "Properties.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Energy", content: "Stored in field: $W = \\frac{\\epsilon_0}{2} \\int E^2 d\\tau$.\nConductors: Equipotentials, E=0 inside." }
          ]
        }
      ]
    }
  ]
};