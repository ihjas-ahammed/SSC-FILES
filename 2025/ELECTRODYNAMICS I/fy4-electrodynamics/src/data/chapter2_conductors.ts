import { Section } from '../types';

export const SECTION_CONDUCTORS: Section = {
  id: "section-2-3-conductors",
  title: "Section 2.3: Conductors",
  description: "Properties of ideal conductors, induced charges, shielding, and advanced electrostatic problems.",
  color: "duo-blue",
  units: [
    {
      id: "unit-231-properties",
      title: "2.3.1 Basic Properties",
      description: "Ideal conductors, shielding, and pressure.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-231-1",
          title: "Ideal Conductors",
          description: "Fundamental definition.",
          icon: "Zap",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Definition",
              content: "What defines an **ideal conductor**?",
              options: [
                { id: "A", text: "It has zero resistance", isCorrect: false, explanation: "That is a superconductor (dynamic property)." },
                { id: "B", text: "It contains unlimited free charges", isCorrect: true, explanation: "Charges that can roam freely throughout the volume." }
              ]
            },
            {
              id: "s1",
              type: "theory",
              title: "Basic Properties",
              content: "Because charges are free to move, they will circulate until equilibrium is reached. In **electrostatics** (charges at rest), this implies:\n\n1. **$\\mathbf{E} = 0$ inside.** (If not, charges would move).\n2. **$\\rho = 0$ inside.** (By Gauss's Law, $\\nabla \\cdot \\mathbf{E} = 0$).\n3. **Net charge resides on the surface.**\n4. **It is an equipotential.** ($V$ is constant throughout)."
            },
            {
              id: "s2",
              type: "interactive_canvas",
              title: "Charge Migration",
              content: "See how charges instantly migrate to the surface to cancel any internal field.",
              interactiveCanvasId: "conductor-charges-interactive"
            }
          ]
        },
        {
          id: "les-231-2",
          title: "Field at Surface",
          description: "Perpendicularity and magnitude.",
          icon: "ArrowUp",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Direction",
              content: "Just outside a conductor, the electric field must be:",
              options: [
                { id: "A", text: "Parallel to the surface", isCorrect: false, explanation: "That would push surface charges along the surface." },
                { id: "B", text: "Perpendicular to the surface", isCorrect: true, explanation: "Tangential component must be zero in statics." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Field at Surface",
              content: "Since the tangential field is zero, $\\mathbf{E}$ is perpendicular to the surface.\n\nFrom the boundary condition $\\mathbf{E}_{out} - \\mathbf{E}_{in} = (\\sigma/\\epsilon_0)\\hat{n}$, and knowing $\\mathbf{E}_{in}=0$, we get:\n\n$$ \\mathbf{E} = \\frac{\\sigma}{\\epsilon_0} \\hat{n} $$\n\nThe field strength is directly proportional to the local surface charge density."
            }
          ]
        },
        {
          id: "les-231-3",
          title: "Induced Charges",
          description: "Reaction to external fields.",
          icon: "Magnet",
          slides: [
            {
              id: "s0",
              type: "theory",
              title: "Induction",
              content: "If you bring a charge $+q$ near a neutral conductor, it attracts negative charges to the near side and repels positive charges to the far side.\n\nThese **induced charges** create their own field $\\mathbf{E}_{induced}$ which exactly cancels the external field $\\mathbf{E}_{q}$ inside the conductor."
            },
            {
              id: "s1",
              type: "interactive_canvas",
              title: "Induction Visualization",
              content: "Notice how the field lines bend to hit the conductor at 90 degrees.",
              interactiveCanvasId: "conductor-charges-interactive"
            },
            {
              id: "s2",
              type: "quiz",
              title: "Net Force",
              content: "The force between a point charge and a neutral conductor is:",
              options: [
                { id: "A", text: "Always attractive", isCorrect: true, explanation: "Induced opposite charges are closer than like charges." },
                { id: "B", text: "Zero", isCorrect: false, explanation: "" }
              ]
            }
          ]
        },
        {
          id: "les-231-4",
          title: "Faraday Cages",
          description: "Cavities and shielding.",
          icon: "Shield",
          slides: [
            {
              id: "s0",
              type: "theory",
              title: "Field in a Cavity",
              content: "If a conductor contains an empty cavity, the field inside that cavity is **zero**, regardless of the external field.\n\nThis is the principle of the **Faraday Cage**. The induced charges on the outer surface cancel the external field everywhere inside the metal *and* the cavity."
            },
            {
              id: "s1",
              type: "proof",
              title: "Proof",
              content: "**Goal: Show E=0 in empty cavity.**",
              proofSteps: [
                "Assume a field line exists in the cavity.",
                "It must start on a + charge and end on a - charge on the cavity wall.",
                "Close the loop through the conductor (where E=0).",
                "$\\oint \\mathbf{E} \\cdot d\\mathbf{l} \\neq 0$, violating electrostatics.",
                "Thus, no field lines can exist in the cavity."
              ]
            },
            {
              id: "s2",
              type: "quiz",
              title: "Charge inside",
              content: "What if there is a charge $+q$ *inside* the cavity?",
              options: [
                { id: "A", text: "Field is still zero", isCorrect: false, explanation: "Gauss's law requires flux." },
                { id: "B", text: "Total charge on inner wall is $-q$", isCorrect: true, explanation: "To shield the outer conductor from the inner charge." }
              ]
            }
          ]
        },
        {
          id: "les-231-5",
          title: "Example 2.10",
          description: "Charge in a weird cavity.",
          icon: "Box",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Example 2.10",
              content: "**Problem:** An uncharged spherical conductor centered at the origin has a cavity of irregular shape. A charge $q$ is placed inside the cavity. What is the field outside the sphere?"
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "1. The charge $q$ induces $-q$ on the cavity wall.\n2. The conductor is neutral, so $+q$ must distribute on the *outer* surface.\n3. The charge on the outer surface distributes itself **uniformly** (spherical symmetry) because the internal field is shielded.\n4. The external field is simply that of a point charge $q$ at the origin: $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\hat{r}$."
            },
            {
              id: "s2",
              type: "quiz",
              title: "Information Loss",
              content: "Can an external observer tell where $q$ is located within the cavity?",
              options: [
                { id: "A", text: "Yes", isCorrect: false, explanation: "" },
                { id: "B", text: "No", isCorrect: true, explanation: "The spherical shell shields all internal asymmetry." }
              ]
            }
          ]
        },
        {
          id: "les-231-6",
          title: "Electrostatic Pressure",
          description: "Force on the surface.",
          icon: "Minimize",
          slides: [
            {
              id: "s0",
              type: "theory",
              title: "Force per unit area",
              content: "Charges on the surface repel each other, creating an outward **electrostatic pressure**.\n\n$$ f = \\frac{\\epsilon_0}{2} E^2 = \\frac{\\sigma^2}{2\\epsilon_0} $$\n\nThis force always pulls the conductor *into* the field."
            },
            {
              id: "s1",
              type: "proof",
              title: "Why 1/2?",
              content: "**Goal: Origin of factor 1/2.**",
              proofSteps: [
                "Field just outside is $E = \\sigma/\\epsilon_0$.",
                "Field inside is 0.",
                "A patch of charge cannot exert force on itself.",
                "It feels the field of *all other charges*, which is the average: $E_{avg} = \\frac{1}{2}(E_{out} + E_{in}) = \\frac{\\sigma}{2\\epsilon_0}$."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "unit-232-advanced",
      title: "2.3.2 Advanced Electrostatics",
      description: "Problems 2.31–2.67.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-232-1", title: "Prob 2.39: Grounding", description: "Sphere with shell.", icon: "Anchor",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.39", content: "A metal sphere radius $R$ ($+q$) is inside a neutral shell ($a, b$). (a) Find surface charges. (b) If outer shell is grounded?" },
            { id: "s1", type: "solution", title: "Solution", content: "(a) Inner sphere: $+q$ on surface $R$. Shell inner surface $a$: $-q$ (induced). Shell outer surface $b$: $+q$ (neutrality).\n(b) **Grounding** ($V=0$ at $b$): Electrons flow from ground to neutralize the outer surface. Outer charge becomes 0. Inner charges unaffected." }
          ]
        },
        {
          id: "les-232-2", title: "Prob 2.40: Two Cavities", description: "Superposition.", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.40", content: "Two cavities ($a, b$) in a conductor contain $q_a, q_b$. Find surface charges and field." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Surface $a$: $-q_a$. Surface $b$: $-q_b$.\n2. Outer surface $R$: Total charge $q_a + q_b$ distributes uniformly.\n3. Field outside: Like a point charge $(q_a+q_b)$ at center.\n4. Field in cavity $a$: Only due to $q_a$ (shielded from $q_b$)." }
          ]
        },
        {
          id: "les-232-3", title: "Prob 2.42: Capacitor Force", description: "Plates attraction.", icon: "ArrowDown",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.42", content: "Find the force between capacitor plates using pressure." },
            { id: "s1", type: "solution", title: "Solution", content: "Field $E = Q / A\\epsilon_0$. Pressure $P = \\epsilon_0 E^2 / 2$. Force $F = P A = \\frac{\\epsilon_0}{2} (\\frac{Q}{A\\epsilon_0})^2 A = \\frac{Q^2}{2\\epsilon_0 A}$. Attractive." }
          ]
        },
        {
          id: "les-232-4", title: "Prob 2.43: Hemisphere Force", description: "Splitting a sphere.", icon: "Divide",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.43", content: "Force of repulsion between northern and southern hemispheres of a charged metal sphere." },
            { id: "s1", type: "solution", title: "Solution", content: "Pressure $P = \\frac{\\sigma^2}{2\\epsilon_0}$. Force is $\\int P \\cos\\theta da$.\n$F = \\frac{Q^2}{32\\pi\\epsilon_0 R^2}$. (The effective area is the cross-sectional area $\\pi R^2$)." }
          ]
        },
        {
          id: "les-232-5", title: "Prob 2.44: Coaxial C", description: "Capacitance calc.", icon: "Battery",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.44", content: "Find capacitance per unit length of coaxial cylinders $a, b$." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Place $+\\lambda$ on inner, $-\\lambda$ on outer.\n2. Field $E = \\lambda / 2\\pi\\epsilon_0 s$.\n3. $V = \\int_a^b E ds = \\frac{\\lambda}{2\\pi\\epsilon_0} \\ln(b/a)$.\n4. $C/L = \\lambda / V = \\frac{2\\pi\\epsilon_0}{\\ln(b/a)}$." }
          ]
        },
        {
          id: "les-232-6", title: "Prob 2.47: Charge from Field", description: "Divergence.", icon: "Activity",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.47", content: "Given $\\mathbf{E} = k r^3 \\hat{r}$ (spherical), find $\\rho$." },
            { id: "s1", type: "solution", title: "Solution", content: "Use $\\rho = \\epsilon_0 \\nabla \\cdot \\mathbf{E}$.\n$\\nabla \\cdot (r^3 \\hat{r}) = \\frac{1}{r^2} \\frac{\\partial}{\\partial r} (r^2 \cdot r^3) = \\frac{1}{r^2} (5r^4) = 5r^2$.\n$\\rho = 5 \\epsilon_0 k r^2$." }
          ]
        },
        {
          id: "les-232-7", title: "Prob 2.50: Energy Check", description: "Integrating energy.", icon: "Zap",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.50", content: "Find energy of sphere with $\\rho = kr$." },
            { id: "s1", type: "solution", title: "Solution", content: "Method 1: $\\int \\frac{\\epsilon_0}{2} E^2 d\\tau$. Calculate E via Gauss ($E \\propto r^2$ inside, $1/r^2$ outside).\nMethod 2: $\\frac{1}{2} \\int \\rho V d\\tau$. Need V.\nResult: $\\frac{\\pi k^2 R^7}{7\\epsilon_0}$." }
          ]
        },
        {
          id: "les-232-8", title: "Prob 2.52: Disk Potential", description: "Edge effects.", icon: "Disc",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.52", content: "Potential on the rim of a uniformly charged disk." },
            { id: "s1", type: "solution", title: "Solution", content: "Set origin at rim. $V = \\frac{\\sigma}{4\\pi\\epsilon_0} \\int \\frac{1}{r} da$. Area element in polar coords centered at rim.\nResult: $V = \\frac{\\sigma R}{\\pi \\epsilon_0}$." }
          ]
        },
        {
          id: "les-232-9", title: "Prob 2.54: Vacuum Diode", description: "Child-Langmuir Law.", icon: "Cpu",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.54", content: "Derive current $I$ vs $V$ for space-charge limited diode." },
            { id: "s1", type: "solution", title: "Derivation", content: "1. Poisson: $V'' = -\\rho/\\epsilon_0$.\n2. Conservation: $mv^2/2 = eV \\implies v \\propto \\sqrt{V}$.\n3. Continuity: $J = \\rho v =$ const.\n4. Combine: $V'' \\propto V^{-1/2}$.\nResult: $J = \\frac{4\\epsilon_0}{9} \\sqrt{\\frac{2e}{m}} \\frac{V^{3/2}}{d^2}$." }
          ]
        },
        {
          id: "les-232-10", title: "Prob 2.55: New Coulomb", description: "Theoretical Physics.", icon: "HelpCircle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.55", content: "Suppose $F \\propto (1+r/\\lambda)e^{-r/\\lambda}/r^2$. Find Potentials." },
            { id: "s1", type: "solution", title: "Result", content: "This is the Yukawa potential $V \sim \frac{e^{-r/\\lambda}}{r}$.\nGauss's Law gains a mass term: $\\nabla \cdot \\mathbf{E} + \\mu^2 V \sim \\rho$ (Proca Equation)." }
          ]
        },
        {
          id: "les-232-11", title: "Prob 2.58: Conductors", description: "Ellipsoid to Needle.", icon: "Move",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.58", content: "Charge density on a metal ellipsoid." },
            { id: "s1", type: "theory", title: "Insight", content: "Charge tends to concentrate at points of high curvature.\n- **Disk**: $\\sigma \\propto 1/\\sqrt{R^2-r^2}$ (Infinite at rim).\n- **Needle**: $\\lambda$ is constant (Surprising result for 1D limit!)." }
          ]
        },
        {
          id: "les-232-12", title: "Prob 2.61: Work", description: "Removing charge.", icon: "LogOut",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.61", content: "Work to move $q$ from center of neutral shell ($a, b$) to infinity." },
            { id: "s1", type: "solution", title: "Solution", content: "Compare energy of system before and after.\nBefore: $q$ at center, induced $-q$ at $a$, $+q$ at $b$. Energy stored in fields in shell gap.\nAfter: Point charge at infinity.\nDifference depends on $(1/a - 1/b)$." }
          ]
        }
      ]
    }
  ]
};