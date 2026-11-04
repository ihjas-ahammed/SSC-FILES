import { Section } from '../types';

export const SECTION_2_1: Section = {
  id: "section-2-1",
  title: "Section 2.1: The Electric Field",
  description: "Coulomb's Law, The Electric Field, and Continuous Charge Distributions.",
  color: "duo-blue",
  units: [
    {
      id: "unit-211",
      title: "2.1.1 Forces & Fields",
      description: "Coulomb's Law and the concept of the Electric Field.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-211-1",
          title: "Introduction to Electrostatics",
          description: "Source and Test Charges.",
          icon: "Zap",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "In electrostatics, we assume the source charges are:", options: [{ id: "A", text: "Moving rapidly", isCorrect: false, explanation: "That would be electrodynamics." }, { id: "B", text: "Stationary", isCorrect: true, explanation: "Electro-STATIC means at rest." }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "To probe an electric field without disturbing it, a test charge should be:", options: [{ id: "A", text: "Very large", isCorrect: false, explanation: "" }, { id: "B", text: "Very small (vanishingly small)", isCorrect: true, explanation: "So it doesn't push the source charges around." }] },
            { id: "s2", type: "theory", title: "The Basic Problem", content: "The fundamental problem of electrodynamics is: Given a set of **source charges** $q_1, q_2, ...$, what force do they exert on a **test charge** $Q$?\n\nIn electrostatics, source charges are stationary. The superposition principle allows us to calculate the force from each source independently and sum them up vectorially." },
            { id: "s3", type: "interactive_canvas", title: "Interaction", content: "Two charges interacting via force.", interactiveCanvasId: "coulomb-force-interactive" },
            { id: "s4", type: "proof", title: "Principle of Superposition", content: "**Goal:** $\\mathbf{F}_{net} = \\mathbf{F}_1 + \\mathbf{F}_2 + ...$", proofSteps: ["Assume the interaction between any two charges is unaffected by others.", "Calculate $\\mathbf{F}_1$ due to $q_1$.", "Calculate $\\mathbf{F}_2$ due to $q_2$.", "The total force is the vector sum: $\\mathbf{F}_{total} = \\sum \\mathbf{F}_i$."] },
            { id: "s5", type: "numerical", title: "Simple Sum", content: "If Force 1 is 3 N East and Force 2 is 4 N North, what is the net force magnitude?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Vector Nature", content: "Forces add like:", options: [{ id: "A", text: "Scalars (simple numbers)", isCorrect: false, explanation: "" }, { id: "B", text: "Vectors (magnitude and direction)", isCorrect: true, explanation: "Direction matters!" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The charge producing the field is called the ___ charge.", blankAnswer: "source" }
          ]
        },
        {
          id: "les-211-2",
          title: "Coulomb's Law",
          description: "The fundamental law of force.",
          icon: "Magnet",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "If distance doubles, the electric force:", options: [{ id: "A", text: "Halves", isCorrect: false, explanation: "" }, { id: "B", text: "Drops to 1/4", isCorrect: true, explanation: "Inverse square law." }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "The force direction is along:", options: [{ id: "A", text: "The line connecting the charges", isCorrect: true, explanation: "Radial direction." }, { id: "B", text: "Perpendicular to the line", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Coulomb's Law", content: "$$\\mathbf{F} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q Q}{\\mathcal{r}^2} \\mathbf{\\hat{\\mathcal{r}}}$$\n\nWhere $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$ is the permittivity of free space. $\\mathcal{r}$ is the separation distance, and $\\mathbf{\\hat{\\mathcal{r}}}$ points from source to test charge." },
            { id: "s3", type: "interactive_canvas", title: "Distance Dependence", content: "Observe how force changes with distance.", interactiveCanvasId: "coulomb-force-interactive" },
            { id: "s4", type: "proof", title: "Separation Vector", content: "**Goal:** Define $\\mathbf{\\mathcal{r}}$.", proofSteps: ["Source at $\\mathbf{r}'$.", "Test charge at $\\mathbf{r}$.", "Separation vector $\\mathbf{\\mathcal{r}} = \\mathbf{r} - \\mathbf{r}'$.", "Magnitude $\\mathcal{r} = |\\mathbf{r} - \\mathbf{r}'|.$", "Direction $\\mathbf{\\hat{\\mathcal{r}}} = \\mathbf{\\mathcal{r}} / \\mathcal{r}$."] },
            { id: "s5", type: "numerical", title: "Force Calc", content: "q=1C, Q=1C, r=1m. Calculate F approx ($k \\approx 9\\times 10^9$). Answer in billions of Newtons.", numericAnswer: 9, numericTolerance: 0.2 },
            { id: "s6", type: "quiz", title: "Third Law", content: "Does $q$ exert the same magnitude force on $Q$ as $Q$ on $q$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Newton's 3rd Law holds." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Coulomb's law follows an inverse ___ relationship with distance.", blankAnswer: "square" }
          ]
        },
        {
          id: "les-211-3",
          title: "The Principle of Superposition",
          description: "Adding forces.",
          icon: "PlusCircle",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "When multiple charges act on Q, the total force is:", options: [{ id: "A", text: "The vector sum of individual forces", isCorrect: true, explanation: "" }, { id: "B", text: "The average of individual forces", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "Does the presence of charge q2 affect the force q1 exerts on Q?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Superposition says individual interactions are independent." }] },
            { id: "s2", type: "theory", title: "Superposition", content: "$$\\mathbf{F} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\dots + \\mathbf{F}_n$$\n\n$$\\mathbf{F} = \\frac{Q}{4\\pi\\epsilon_0} \\sum_{i=1}^n \\frac{q_i}{\\mathcal{r}_i^2} \\mathbf{\\hat{\\mathcal{r}}}_i$$\n\nEach source charge $q_i$ contributes a force as if it were alone." },
            { id: "s3", type: "interactive_canvas", title: "Vector Sum", content: "Adding vectors geometrically.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof by Assertion", content: "**Goal:** $\\mathbf{F}_{total} = \\sum \\mathbf{F}_i$", proofSteps: ["This is an experimental fact.", "It is not derived from deeper logic in electrostatics.", "It assumes linearity of the electromagnetic equations."] },
            { id: "s5", type: "numerical", title: "Net Force", content: "F1 = 3N right, F2 = 3N left. Net force?", numericAnswer: 0, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Complexity", content: "With N charges, how many force pairs do we calculate for Q?", options: [{ id: "A", text: "N", isCorrect: true, explanation: "One for each source." }, { id: "B", text: "N^2", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The principle of ___ allows us to add forces linearly.", blankAnswer: "superposition" }
          ]
        },
        {
          id: "les-211-4",
          title: "The Electric Field",
          description: "Definition and concept.",
          icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "What is the Electric Field?", options: [{ id: "A", text: "Force times charge", isCorrect: false, explanation: "" }, { id: "B", text: "Force per unit charge", isCorrect: true, explanation: "E = F/Q." }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "Does the Electric Field exist if there is no test charge Q?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "It is a property of the source charges and space." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Electric Field Definition", content: "We define the electric field $\\mathbf{E}$ such that:\n\n$$\\mathbf{F} = Q \\mathbf{E}$$\n\n$$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\sum_{i=1}^n \\frac{q_i}{\\mathcal{r}_i^2} \\mathbf{\\hat{\\mathcal{r}}}_i$$\n\n$\\mathbf{E}$ is a vector field; it assigns a vector to every point in space." },
            { id: "s3", type: "interactive_canvas", title: "Field Visualization", content: "The field extends everywhere.", interactiveCanvasId: "gradient-interactive" },
            { id: "s4", type: "proof", title: "Removing Q", content: "**Goal:** $\\mathbf{E}$ is independent of $Q$.", proofSteps: ["$F \\propto Q$ (Coulomb).", "Define $\\mathbf{E} = \\mathbf{F}/Q$.", "Since $F$ scales with $Q$, the ratio $\\mathbf{E}$ remains constant for a given point."] },
            { id: "s5", type: "numerical", title: "E Calc", content: "Force on 2C is 10N. What is E?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Unit", content: "The unit of Electric Field is:", options: [{ id: "A", text: "Newtons", isCorrect: false, explanation: "" }, { id: "B", text: "Newtons per Coulomb (N/C)", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The electric field is the force per unit ___.", blankAnswer: "charge" }
          ]
        },
        {
          id: "les-211-5",
          title: "Field of a Point Charge",
          description: "Radial fields.",
          icon: "Sun",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "The field lines of a positive point charge point:", options: [{ id: "A", text: "Radially outward", isCorrect: true, explanation: "" }, { id: "B", text: "Radially inward", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "Does E increase or decrease with distance?", options: [{ id: "A", text: "Increase", isCorrect: false, explanation: "" }, { id: "B", text: "Decrease", isCorrect: true, explanation: "1/r^2 dependence." }] },
            { id: "s2", type: "theory", title: "Point Charge Field", content: "For a single point charge $q$ at the origin:\n\n$$\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\mathbf{\\hat{r}}$$\n\nIt is spherically symmetric and falls off as inverse square." },
            { id: "s3", type: "interactive_canvas", title: "Radial Field", content: "Visualizing 1/r^2.", interactiveCanvasId: "divergence-interactive" },
            { id: "s4", type: "proof", title: "Symmetry", content: "**Goal:** Spherical symmetry.", proofSteps: ["Rotate the system.", "A point charge looks the same.", "Thus the field must look the same.", "Only a radial field is rotationally invariant."] },
            { id: "s5", type: "numerical", title: "E magnitude", content: "q=1e-9 C, r=1m. k=9e9. E = ?", numericAnswer: 9, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Origin", content: "What is the field AT the location of the point charge (r=0)?", options: [{ id: "A", text: "Zero", isCorrect: false, explanation: "" }, { id: "B", text: "Undefined / Infinite", isCorrect: true, explanation: "The formula blows up." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The field of a point charge decays as one over $r$ ___.", blankAnswer: "squared" }
          ]
        },
        {
          id: "les-211-6",
          title: "Field of a System",
          description: "Vector Summation.",
          icon: "Users",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "To find the field of 3 charges, we add:", options: [{ id: "A", text: "3 scalar numbers", isCorrect: false, explanation: "" }, { id: "B", text: "3 vectors", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "Can fields cancel each other out?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "e.g. midpoint between two equal charges." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "System of Charges", content: "For multiple point charges:\n\n$$\\mathbf{E}(\\mathbf{r}) = \\sum_{i=1}^n \\mathbf{E}_i = \\frac{1}{4\\pi\\epsilon_0} \\sum_{i=1}^n \\frac{q_i}{\\mathcal{r}_i^2} \\mathbf{\\hat{\\mathcal{r}}}_i$$\n\nWe must calculate the separation vector $\\mathbf{\\mathcal{r}}_i = \\mathbf{r} - \\mathbf{r}'_i$ for each charge individually." },
            { id: "s3", type: "interactive_canvas", title: "Cancellation", content: "Fields adding and cancelling.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Vector Sum", content: "**Goal:** E is a linear operator.", proofSteps: ["$\\mathbf{F}_{tot} = \\sum \\mathbf{F}_i$.", "$\\mathbf{E}_{tot} = \\mathbf{F}_{tot}/Q$.", "$\\mathbf{E}_{tot} = \\sum (\\mathbf{F}_i/Q) = \\sum \\mathbf{E}_i$."] },
            { id: "s5", type: "numerical", title: "Midpoint", content: "+q at x=-1, +q at x=1. Field at x=0?", numericAnswer: 0, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Null Point", content: "Where is the field zero for two equal positive charges?", options: [ { id: "A", text: "At the midpoint", isCorrect: true, explanation: "" }, { id: "B", text: "Nowhere", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The total electric field is the ___ sum of individual fields.", blankAnswer: "vector" }
          ]
        }
      ]
    },
    {
      id: "unit-212",
      title: "2.1.2 Continuous Distributions",
      description: "Integrals for Line, Surface, and Volume charges.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-212-1",
          title: "Charge Densities",
          description: "Line, Surface, Volume.",
          icon: "LayoutList",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "For a charged wire, we use:", options: [{ id: "A", text: "Volume density rho", isCorrect: false, explanation: "" }, { id: "B", text: "Line density lambda", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "Units of surface charge density sigma are:", options: [{ id: "A", text: "C/m", isCorrect: false, explanation: "" }, { id: "B", text: "C/m^2", isCorrect: true, explanation: "" }] },
            { id: "s2", type: "theory", title: "Definitions", content: "Since charges are small, we often approximate them as continuous.\n\n- **Line Charge:** $\\lambda$ (C/m). $dq = \\lambda dl'$.\n- **Surface Charge:** $\\sigma$ (C/m$^2$). $dq = \\sigma da'$.\n- **Volume Charge:** $\\rho$ (C/m$^3$). $dq = \\rho d\\tau'$." },
            { id: "s3", type: "interactive_canvas", title: "Visualizing Distributions", content: "Rod vs Sheet vs Cloud.", interactiveCanvasId: "component-form-interactive" },
            { id: "s4", type: "proof", title: "Approximation", content: "**Goal:** Smoothness.", proofSteps: ["Real charge is discrete (electrons).", "Macroscopically, it looks smooth.", "We take limit $\\Delta q / \\Delta V$ as $\\Delta V \\to 0$ (macroscopically)."] },
            { id: "s5", type: "numerical", title: "Total Charge", content: "Line density 2 C/m, length 3m. Total charge?", numericAnswer: 6, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Symbol", content: "The symbol for volume charge density is:", options: [{ id: "A", text: "Sigma", isCorrect: false, explanation: "" }, { id: "B", text: "Rho", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "To find total charge, we ___ the density over the region.", blankAnswer: "integrate" }
          ]
        },
        {
          id: "les-212-2",
          title: "Setting up Integrals",
          description: "From Sum to Integral.",
          icon: "FunctionSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "In the integral $\\int \\dots d\\tau'$, what does the prime denote?", options: [{ id: "A", text: "Field point", isCorrect: false, explanation: "" }, { id: "B", text: "Source point", isCorrect: true, explanation: "Location of the charge." }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "Can the separation vector $\\mathbf{\\hat{\\mathcal{r}}}$ be pulled out of the integral?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "It changes direction for each dq." }] },
            { id: "s2", type: "theory", title: "The Integral Formula", content: "$$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{1}{\\mathcal{r}^2} \\mathbf{\\hat{\\mathcal{r}}} dq$$\n\nWhere $dq$ is $\\lambda dl'$, $\\sigma da'$, or $\\rho d\\tau'$.\n\n**Crucial:** $\\mathbf{\\mathcal{r}} = \\mathbf{r} - \\mathbf{r}'$. The vector points from the specific chunk $dq$ to the field point P." },
            { id: "s3", type: "interactive_canvas", title: "Integration Vector", content: "Move dq and see how r changes.", interactiveCanvasId: "continuous-integration-interactive" },
            { id: "s4", type: "proof", title: "Sum to Integral", content: "**Goal:** $\\sum \\to \\int$.", proofSteps: ["$\\mathbf{E} = \\sum \\Delta \\mathbf{E}_i$.", "$\\Delta \\mathbf{E}_i = k \\frac{\\Delta q}{\\mathcal{r}^2} \\hat{\\mathcal{r}}$.", "As $\\Delta q \\to 0$, sum becomes integral."] },
            { id: "s5", type: "numerical", title: "Separation", content: "P at (0,0,10). dq at (0,0,0). Distance?", numericAnswer: 10, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Vector Components", content: "To integrate a vector, you usually:", options: [{ id: "A", text: "Integrate magnitude", isCorrect: false, explanation: "" }, { id: "B", text: "Integrate components separately", isCorrect: true, explanation: "Ex, Ey, Ez." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The vector $\\mathbf{r}'$ locates the ___ charge.", blankAnswer: "source" }
          ]
        },
        {
          id: "les-212-3",
          title: "Example 2.1: Two Charges",
          description: "Vector addition practice.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.1", content: "**Problem:** Find the electric field a distance $z$ above the midpoint between two equal charges $q$, a distance $d$ apart." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Symmetry: Horizontal components cancel.\n2. Vertical components add: $E_z = 2 E_1 \\cos\\theta$.\n3. Geometry: $\\mathcal{r} = \\sqrt{z^2 + (d/2)^2}$, $\\cos\\theta = z/\\mathcal{r}$.\n4. $E_z = \\frac{1}{4\\pi\\epsilon_0} \\frac{2qz}{(z^2 + (d/2)^2)^{3/2}}$." },
            { id: "s2", type: "quiz", title: "Limit", content: "What if $z \\gg d$?", options: [{ id: "A", text: "E -> 0", isCorrect: false, explanation: "Too simple." }, { id: "B", text: "Looks like point charge 2q", isCorrect: true, explanation: "Correct." }] },
            { id: "s3", type: "quiz", title: "Center", content: "What if z=0?", options: [{ id: "A", text: "E=0", isCorrect: true, explanation: "Forces cancel." }, { id: "B", text: "E=infinite", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Opposite Charges", content: "If one was -q, what would happen?", options: [{ id: "A", text: "Vertical cancels, Horizontal adds", isCorrect: true, explanation: "" }, { id: "B", text: "Horizontal cancels", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-212-4",
          title: "Ex 2.2: Finite Line (Setup)",
          description: "Setting up the integral.",
          icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.2 Setup", content: "**Problem:** Find E at distance $z$ above the midpoint of a straight line of length $2L$ with uniform $\\lambda$." },
            { id: "s1", type: "solution", title: "Solution Setup", content: "1. Align wire on x-axis from -L to L.\n2. $dq = \\lambda dx$.\n3. $\\mathcal{r} = \\sqrt{x^2 + z^2}$.\n4. $\\cos\\theta = z/\\mathcal{r}$.\n5. By symmetry, only $E_z$ survives." },
            { id: "s2", type: "quiz", title: "Integral Variable", content: "We integrate over:", options: [{ id: "A", text: "z", isCorrect: false, explanation: "z is fixed." }, { id: "B", text: "x", isCorrect: true, explanation: "Along the wire." }] },
            { id: "s3", type: "quiz", title: "Symmetry", content: "Why does $E_x$ cancel?", options: [{ id: "A", text: "For every +x, there is a -x", isCorrect: true, explanation: "" }, { id: "B", text: "It doesn't", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Integrand", content: "The integrand for $E_z$ involves:", options: [{ id: "A", text: "$\\frac{z}{(x^2+z^2)^{3/2}}$", isCorrect: true, explanation: "From cos theta term." }, { id: "B", text: "$\\frac{1}{x^2+z^2}$", isCorrect: false, explanation: "Missing projection." }] }
          ]
        },
        {
          id: "les-212-5",
          title: "Ex 2.2: Finite Line (Calc)",
          description: "Evaluating the integral.",
          icon: "Play",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.2 Calculation", content: "**Problem:** Evaluate $\\int_{-L}^L \\frac{z}{(x^2+z^2)^{3/2}} dx$." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Integral form: $\\int \\frac{dx}{(x^2+a^2)^{3/2}} = \\frac{x}{a^2\\sqrt{x^2+a^2}}$.\n2. Here $a=z$. Limit from -L to L.\n3. Result: $\\frac{1}{4\\pi\\epsilon_0} \\frac{2\\lambda L}{z\\sqrt{z^2+L^2}}$." },
            { id: "s2", type: "quiz", title: "Check units", content: "Is the unit correct?", options: [{ id: "A", text: "Yes, $1/L^2 \times L = 1/L$", isCorrect: true, explanation: "Field is charge/dist^2." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Large z", content: "If $z \\gg L$, it looks like:", options: [{ id: "A", text: "Point charge $Q = 2\\lambda L$", isCorrect: true, explanation: "" }, { id: "B", text: "Infinite line", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Total Charge", content: "What is the total charge Q?", options: [{ id: "A", text: "$\\lambda L$", isCorrect: false, explanation: "" }, { id: "B", text: "$2\\lambda L$", isCorrect: true, explanation: "Length is 2L." }] }
          ]
        },
        {
          id: "les-212-6",
          title: "Infinite Line Charge",
          description: "Taking the limit.",
          icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "If the wire becomes infinitely long ($L \\to \\infty$), what happens to $E$?", options: [{ id: "A", text: "Becomes zero", isCorrect: false, explanation: "" }, { id: "B", text: "Becomes purely radial and simpler", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "Does the infinite wire field depend on x?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Translation symmetry." }] },
            { id: "s2", type: "theory", title: "Infinite Line Limit", content: "From the finite wire result:\n$$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{2\\lambda L}{z\\sqrt{z^2+L^2}}$$\n\nAs $L \\to \\infty$, $\\sqrt{z^2+L^2} \\approx L$.\nThe $L$s cancel.\n\n$$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{2\\lambda}{z}$$" },
            { id: "s3", type: "interactive_canvas", title: "1/r Falloff", content: "Field drops as 1/r.", interactiveCanvasId: "component-form-interactive" },
            { id: "s4", type: "proof", title: "Decay Rate", content: "**Goal:** $1/z$ vs $1/z^2$.", proofSteps: ["Point charge: $1/z^2$.", "Line charge: $1/z$.", "Plane charge: constant.", "More dimensions = slower decay."] },
            { id: "s5", type: "numerical", title: "Calc", content: "Lambda = 1 nC/m, z = 1m. E approx?", numericAnswer: 18, numericTolerance: 1 },
            { id: "s6", type: "quiz", title: "Direction", content: "The field points:", options: [{ id: "A", text: "Parallel to wire", isCorrect: false, explanation: "" }, { id: "B", text: "Radially away from wire", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The electric field of an infinite line falls off as one over ___.", blankAnswer: "distance" }
          ]
        },
        {
          id: "les-212-7",
          title: "General Integration Strategy",
          description: "Summary of method.",
          icon: "Book",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Check", content: "First step in finding E by integration?", options: [{ id: "A", text: "Integrate immediately", isCorrect: false, explanation: "" }, { id: "B", text: "Define coordinate system and $dq$", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Conceptual Check", content: "What to look for?", options: [{ id: "A", text: "Symmetry", isCorrect: true, explanation: "To cancel components." }, { id: "B", text: "Colors", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Strategy", content: "1. **Coordinates**: Place charge at origin or on axis.\n2. **Element**: Express $dq$ in terms of coordinates ($dx, r dr d\\theta$ etc).\n3. **Symmetry**: Identify canceling components.\n4. **Distance**: Write $\\mathcal{r}$ in terms of integration variables.\n5. **Integrate**." },
            { id: "s3", type: "interactive_canvas", title: "Practice", content: "Visualize setup.", interactiveCanvasId: "continuous-integration-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Always exploit ___ to simplify the vector addition.", blankAnswer: "symmetry" }
          ]
        }
      ]
    },
    {
      id: "unit-213",
      title: "2.1.3 Field Exercises",
      description: "Problems 2.1-2.8.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-213-1", title: "Prob 2.1: The Clock Face", description: "Symmetry cancellation.", icon: "Clock",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.1a", content: "**Problem:** 12 equal charges $q$ on a circle (clock face). Field at center?" },
            { id: "s1", type: "solution", title: "Solution", content: "Zero. Every charge has an opposite partner cancelling it." },
            { id: "s2", type: "quiz", title: "13 charges?", content: "If 13 charges?", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "Still symmetric vector sum." }, { id: "B", text: "Non-zero", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Missing one", content: "If one removed from 12?", options: [{ id: "A", text: "Zero", isCorrect: false, explanation: "" }, { id: "B", text: "Field of -q at hole", isCorrect: true, explanation: "Superposition: Total (0) - q = -q." }] },
            { id: "s4", type: "quiz", title: "Direction", content: "Direction if 12 o'clock removed?", options: [{ id: "A", text: "Towards 12", isCorrect: true, explanation: "Towards the hole." }, { id: "B", text: "Away", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-213-2", title: "Prob 2.2: Field Above Dipole", description: "Calculation.", icon: "Magnet",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.2", content: "**Problem:** E distance z above midpoint of +q, -q (dist d)." },
            { id: "s1", type: "solution", title: "Solution", content: "Verticals cancel. Horizontals add.\n$E = 2 E_1 \\sin\\theta$.\nResult: $\\frac{1}{4\\pi\\epsilon_0} \\frac{qd}{(z^2+(d/2)^2)^{3/2}}$ in x-direction." },
            { id: "s2", type: "quiz", title: "Far field", content: "For large z, E goes as:", options: [{ id: "A", text: "$1/z^2$", isCorrect: false, explanation: "" }, { id: "B", text: "$1/z^3$", isCorrect: true, explanation: "Dipole characteristic." }] },
            { id: "s3", type: "quiz", title: "Direction", content: "Direction?", options: [{ id: "A", text: "Parallel to axis", isCorrect: true, explanation: "" }, { id: "B", text: "Perpendicular", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Compare 2.1", content: "Differs from Ex 2.1?", options: [{ id: "A", text: "Direction and falloff", isCorrect: true, explanation: "Ex 2.1 was vertical 1/z^2." }, { id: "B", text: "Same", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-213-3", title: "Prob 2.3: Line End", description: "Off-center line.", icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.3", content: "**Problem:** E distance z above one end of line L." },
            { id: "s1", type: "solution", title: "Solution", content: "Integrate 0 to L. x-components do NOT cancel.\nNeed $E_x$ and $E_z$ separately." },
            { id: "s2", type: "quiz", title: "Symmetry", content: "Is there symmetry here?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "End point is not symmetric." }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Angle", content: "Does E point straight up?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Tips away from wire." }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Limit", content: "Far away?", options: [{ id: "A", text: "Point charge", isCorrect: true, explanation: "" }, { id: "B", text: "Zero", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-213-4", title: "Prob 2.4: Square Loop", description: "Four lines.", icon: "Square",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.4", content: "**Problem:** E at height z above center of square loop side a." },
            { id: "s1", type: "solution", title: "Solution", content: "Use result of Ex 2.2 (finite line) for each side.\nDistance from center to wire is not 0, it's a/2.\nMultiply z-component by 4." },
            { id: "s2", type: "quiz", title: "Cancellation", content: "Do horizontal components cancel?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "By symmetry." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Result", content: "Field is proportional to:", options: [{ id: "A", text: "4", isCorrect: true, explanation: "" }, { id: "B", text: "2", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Limit z=0", content: "At center of square?", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "" }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-213-5", title: "Prob 2.5: Circular Loop", description: "On axis.", icon: "Circle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.5", content: "**Problem:** E distance z above circular loop radius r." },
            { id: "s1", type: "solution", title: "Solution", content: "Cone of vectors. Horizontals cancel.\n$E = \\int dE_z = \\int dE \\cos\\theta$.\n$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{qz}{(z^2+r^2)^{3/2}}$." },
            { id: "s2", type: "quiz", title: "cos theta", content: "What is cos theta?", options: [{ id: "A", text: "z / sqrt(z^2+r^2)", isCorrect: true, explanation: "" }, { id: "B", text: "r / z", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Max Field", content: "Where is E max?", options: [{ id: "A", text: "z = r/sqrt(2)", isCorrect: true, explanation: "Differentiate to find peak." }, { id: "B", text: "z = 0", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Sign", content: "For z < 0?", options: [{ id: "A", text: "Points down", isCorrect: true, explanation: "Away from ring." }, { id: "B", text: "Points up", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-213-6", title: "Prob 2.6: Flat Disk", description: "Sum of rings.", icon: "Disc",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.6", content: "**Problem:** E distance z above flat disk radius R." },
            { id: "s1", type: "solution", title: "Solution", content: "Divide into rings radius r, width dr.\n$dq = \\sigma 2\\pi r dr$.\nIntegrate ring formula from 0 to R.\n$E = \\frac{\\sigma}{2\\epsilon_0} (1 - z/\\sqrt{z^2+R^2})$." },
            { id: "s2", type: "quiz", title: "Infinite R", content: "Limit R->infinity?", options: [{ id: "A", text: "sigma / 2 eps0", isCorrect: true, explanation: "Infinite plane." }, { id: "B", text: "Zero", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Behavior", content: "Does E blow up at surface?", options: [{ id: "A", text: "No, it is finite", isCorrect: true, explanation: "sigma/2eps0." }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Variable", content: "Integration variable was?", options: [{ id: "A", text: "r", isCorrect: true, explanation: "" }, { id: "B", text: "z", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-213-7", title: "Prob 2.7: Spherical Shell", description: "Direct integration.", icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.7", content: "**Problem:** E distance z from center of spherical shell. Direct integration." },
            { id: "s1", type: "solution", title: "Solution", content: "Use Law of Cosines for distance.\nIntegrate over theta.\nResult: $E=0$ inside, $E=q/4\\pi\\epsilon_0 z^2$ outside." },
            { id: "s2", type: "quiz", title: "Difficulty", content: "Is this easy?", options: [{ id: "A", text: "No, calculus is tricky", isCorrect: true, explanation: "" }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Gauss", content: "Easier way?", options: [{ id: "A", text: "Gauss's Law", isCorrect: true, explanation: "Trivial with Gauss." }, { id: "B", text: "Biot Savart", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Discontinuity", content: "Is E continuous at R?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Jumps from 0." }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-213-8", title: "Prob 2.8: Solid Sphere", description: "Volume integration.", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.8", content: "**Problem:** E for solid sphere radius R, charge q." },
            { id: "s1", type: "solution", title: "Solution", content: "Use shell result.\nOutside: Sum of shells = Total Q point charge.\nInside: Only shells inside r contribute. $Q_{eff} = q (r^3/R^3)$." },
            { id: "s2", type: "quiz", title: "Inside Field", content: "E inside proportional to:", options: [{ id: "A", text: "r", isCorrect: true, explanation: "Linear increase." }, { id: "B", text: "1/r^2", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Outside Field", content: "E outside:", options: [{ id: "A", text: "1/r^2", isCorrect: true, explanation: "Like point charge." }, { id: "B", text: "Constant", isCorrect: false, explanation: "" }] },
            { id: "s4", type: "quiz", title: "Surface", content: "Continuous at R?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "No surface charge layer, just volume." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] }
          ]
        }
      ]
    },
    {
      id: "unit-2-1-summary",
      title: "Section 2.1 Summary",
      description: "Recap of The Electric Field.",
      color: "duo-green",
      lessons: [
        {
          id: "les-21-sum-1",
          title: "Forces & Fields Recap",
          description: "Key concepts.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Coulomb & E", content: "Force between points: $1/r^2$. Superposition allows summing. Electric Field defined as F/Q." }
          ]
        },
        {
          id: "les-21-sum-2",
          title: "Continuous Recap",
          description: "Integration.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Densities", content: "Line $\\lambda$, Surface $\\sigma$, Volume $\\rho$. Field calculated by integrating $dq/r^2 \\hat{r}$." }
          ]
        },
        {
          id: "les-21-sum-3",
          title: "Key Geometries",
          description: "Standard results.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Formulas", content: "**Point:** $1/r^2$.\n**Line:** $1/r$.\n**Plane:** Constant.\n**Dipole:** $1/r^3$." }
          ]
        }
      ]
    }
  ]
};