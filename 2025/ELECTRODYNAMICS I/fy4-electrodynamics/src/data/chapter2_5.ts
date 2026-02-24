import { Section } from '../types';

export const SECTION_2_5: Section = {
  id: "section-2-5",
  title: "Section 5: Problem Solving & Applications",
  description: "Comprehensive examples and exercises for Electric Fields, Gauss's Law, Potentials, Energy, and Conductors.",
  color: "duo-green",
  units: [
    {
      id: "unit-1-efield-problems",
      title: "Electric Field Problems",
      description: "Calculating E-fields for discrete and continuous charge distributions.",
      color: "duo-green",
      lessons: [
        {
          id: "les-p2-1", title: "Prob 2.1a: Clock Face", description: "12 charges on a circle", icon: "Clock",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.1a", content: "**Problem:** Twelve equal charges, $q$, are situated at the corners of a regular 12-sided polygon (like a clock face). What is the net force on a test charge $Q$ at the center?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the net vector sum of forces.**", interactiveSteps: [ { stepText: "Every charge on the clock face has a partner exactly opposite to it (e.g., 12 and 6, 3 and 9)." }, { stepText: "The force from the charge at 12 o'clock pushes $Q$ down. The force from 6 o'clock pushes $Q$ up." }, { stepText: "Because the distances are equal and charges are equal, these forces perfectly cancel." }, { stepText: "By symmetry, all pairs cancel. The net force is exactly $\\mathbf{0}$. Goal reached!" } ] },
            { id: "s2", type: "interactive_canvas", title: "Clock Face Explorer", content: "Toggle charges on and off to see how the net electric field at the center changes.", interactiveCanvasId: "clock-face-interactive" }
          ]
        },
        {
          id: "les-p2-2", title: "Prob 2.1b: Missing Charge", description: "Removing one charge", icon: "MinusCircle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.1b", content: "**Problem:** Suppose one of the 12 $q$'s is removed (the one at '6 o'clock'). What is the force on $Q$ now?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use superposition creatively.**", interactiveSteps: [ { stepText: "Method 1: Add up the 11 remaining vectors. (Hard)" }, { stepText: "Method 2: Treat the missing charge as the superposition of the full clock PLUS a charge of $-q$ at 6 o'clock." }, { stepText: "The full clock produces 0 field. So the net field is simply the field of the $-q$ charge at 6 o'clock!" }, { stepText: "A $-q$ at 6 o'clock pulls the positive test charge $Q$ straight DOWN towards 6 o'clock. Magnitude: $\\frac{1}{4\\pi\\epsilon_0}\\frac{qQ}{r^2}$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Superposition Trick", content: "Replacing a hole with a negative charge relies on which principle?", options: [ { id: "A", text: "Superposition", isCorrect: true, explanation: "Zero = +q + (-q)." }, { id: "B", text: "Gauss's Law", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-p2-3", title: "Prob 2.1c: 13 Charges", description: "13-sided polygon", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.1c", content: "**Problem:** Now 13 equal charges are placed at the corners of a regular 13-sided polygon. What is the force on a test charge $Q$ at the center?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate the sum of 13 vectors.**", interactiveSteps: [ { stepText: "Unlike 12, 13 is an odd number. Charges don't have perfect opposite pairs." }, { stepText: "However, the setup is entirely rotationally symmetric. If the net force wasn't zero, which way would it point? There is no preferred direction." }, { stepText: "Therefore, the net force must be $\\mathbf{0}$. Goal reached!" } ] },
            { id: "s2", type: "numerical", title: "Net Force", content: "What is the magnitude of the net force?", numericAnswer: 0, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-p2-4", title: "Prob 2.1d: 13 Charges (1 Missing)", description: "Removing from 13", icon: "XCircle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.1d", content: "**Problem:** If one of the 13 charges is removed, what is the force on $Q$?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply the superposition trick again.**", interactiveSteps: [ { stepText: "The full 13-charge polygon produces 0 net force." }, { stepText: "Removing one is equivalent to adding a charge of $-q$ at that spot." }, { stepText: "The force is exactly the force of a single $-q$ charge pulling $Q$ towards the empty spot." }, { stepText: "Magnitude: $\\frac{1}{4\\pi\\epsilon_0}\\frac{qQ}{r^2}$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Direction", content: "Where does the net force point?", options: [ { id: "A", text: "Away from the empty spot", isCorrect: false, explanation: "" }, { id: "B", text: "Towards the empty spot", isCorrect: true, explanation: "The missing repulsion from that spot allows the others to push Q into it." } ] }
          ]
        },
        {
          id: "les-p2-5", title: "Prob 2.2: Opposite Charges", description: "Dipole axis field", icon: "MoreHorizontal",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.2", content: "**Problem:** Find the electric field a distance $z$ above the midpoint between equal and opposite charges $(\\pm q)$, a distance $d$ apart." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the net field of a dipole on its bisector.**", interactiveSteps: [ { stepText: "The $+q$ charge pushes a test charge up and away. The $-q$ charge pulls it down and towards itself." }, { stepText: "By symmetry, the vertical (z) components cancel completely." }, { stepText: "The horizontal components add: $E_x = 2 |E_1| \\sin\\theta$." }, { stepText: "Using geometry, $\\sin\\theta = (d/2)/\\cal{r}$. This gives $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{qd}{[z^2 + (d/2)^2]^{3/2}} \\mathbf{\\hat{x}}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-6", title: "Prob 2.3: Line Segment", description: "Off-center field", icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.3", content: "**Problem:** Find the electric field a distance $z$ above one end of a straight line segment of length $L$ that carries a uniform line charge $\\lambda$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate the Biot-Savart-like integral for E.**", interactiveSteps: [ { stepText: "Set the wire from $x=0$ to $x=L$. Field point is $(0,0,z)$." }, { stepText: "$\\cal{r} = \\sqrt{x^2+z^2}$. $dq = \\lambda dx$." }, { stepText: "$d\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{\\lambda dx}{x^2+z^2} \\frac{z\\mathbf{\\hat{z}} - x\\mathbf{\\hat{x}}}{\\sqrt{x^2+z^2}}$." }, { stepText: "Integrate x and z components from 0 to L. Unlike the centered wire, the x-component does NOT cancel!" }, { stepText: "Result yields a field pointing up and slightly away from the wire. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-7", title: "Prob 2.4: Square Loop", description: "Superposition of lines", icon: "Square",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.4", content: "**Problem:** Find the electric field a distance $z$ above the center of a square loop (side $a$) carrying uniform line charge $\\lambda$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Sum 4 line segments.**", interactiveSteps: [ { stepText: "Use the result for a centered line segment: $E_{z,wire} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2\\lambda L}{z\\sqrt{z^2+L^2}}$." }, { stepText: "Here, the distance from the wire to the center axis is $a/2$. The 'z' for the wire formula becomes $\\sqrt{z^2+(a/2)^2}$." }, { stepText: "Multiply by 4 for the four sides, and project the final vector onto the z-axis using $\\cos\\theta$." }, { stepText: "Horizontal components perfectly cancel by symmetry. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Symmetry", content: "Why do the horizontal components cancel?", options: [ { id: "A", text: "Because the loop is closed", isCorrect: false, explanation: "" }, { id: "B", text: "Because for every segment pushing left, an opposite segment pushes right", isCorrect: true, explanation: "Symmetry." } ] }
          ]
        },
        {
          id: "les-p2-8", title: "Prob 2.5: Circular Loop", description: "Field of a ring", icon: "Circle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.5", content: "**Problem:** Find the electric field a distance $z$ above the center of a circular loop of radius $r$ carrying line charge $\\lambda$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate over the ring.**", interactiveSteps: [ { stepText: "By symmetry, horizontal components cancel. We only need $E_z$." }, { stepText: "$dE_z = dE \\cos\\theta = \\frac{1}{4\\pi\\epsilon_0} \\frac{dq}{\\cal{r}^2} \\cos\\theta$." }, { stepText: "Distance $\\cal{r} = \\sqrt{z^2+r^2}$ is constant for all charges on the ring! $\\cos\\theta = z/\\sqrt{z^2+r^2}$ is also constant." }, { stepText: "So we just integrate $dq$ to get total charge $q = 2\\pi r \\lambda$." }, { stepText: "$E_z = \\frac{1}{4\\pi\\epsilon_0} \\frac{qz}{(z^2+r^2)^{3/2}}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-9", title: "Prob 2.6: Charged Disk", description: "Integrating rings", icon: "Disc",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.6", content: "**Problem:** Find the electric field a distance $z$ above the center of a flat circular disk of radius $R$ with uniform surface charge $\\sigma$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate the ring formula.**", interactiveSteps: [ { stepText: "Treat the disk as a series of concentric rings of radius $r$ and thickness $dr$." }, { stepText: "Charge of a ring is $dq = \\sigma (2\\pi r dr)$." }, { stepText: "Use ring formula: $dE_z = \\frac{1}{4\\pi\\epsilon_0} \\frac{z dq}{(z^2+r^2)^{3/2}}$." }, { stepText: "Integrate from $r=0$ to $R$: $E_z = \\frac{\\sigma z}{2\\epsilon_0} \\int_0^R (z^2+r^2)^{-3/2} r dr$." }, { stepText: "Result: $E = \\frac{\\sigma}{2\\epsilon_0} \\left( 1 - \\frac{z}{\\sqrt{z^2+R^2}} \\right)$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Infinite Limit", content: "What happens to the formula as $R \\to \\infty$?", options: [ { id: "A", text: "It goes to zero", isCorrect: false, explanation: "" }, { id: "B", text: "It becomes $\\frac{\\sigma}{2\\epsilon_0}$", isCorrect: true, explanation: "The second term goes to 0, leaving the formula for an infinite plane!" } ] }
          ]
        },
        {
          id: "les-p2-10", title: "Prob 2.7: Spherical Shell", description: "Direct integration (hard way)", icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.7", content: "**Problem:** Find the electric field distance $z$ from the center of a spherical shell of radius $R$ and charge density $\\sigma$. (Do it by direct integration, not Gauss's law)." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate over the sphere.**", interactiveSteps: [ { stepText: "Use Law of Cosines for separation distance: $\\cal{r}^2 = R^2 + z^2 - 2Rz \\cos\\theta$." }, { stepText: "Set up the integral for $E_z$. It is a very messy integral involving substitution." }, { stepText: "After tedious integration, you get $\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{z^2}$ outside, and $0$ inside." }, { stepText: "Conclusion: Gauss's Law is infinitely easier! Goal reached." } ] }
          ]
        },
        {
          id: "les-p2-11", title: "Prob 2.8: Solid Sphere", description: "Superposition of shells", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.8", content: "**Problem:** Use the result of the spherical shell to find the field inside and outside a solid sphere of charge density $\\rho$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate shells.**", interactiveSteps: [ { stepText: "A solid sphere is a nested collection of shells." }, { stepText: "Outside ($r > R$): Every shell acts like a point charge at the center. So the whole sphere acts like a point charge $Q$." }, { stepText: "Inside ($r < R$): Shells with radius greater than $r$ contribute 0. Shells with radius less than $r$ act like point charges." }, { stepText: "Enclosed charge is $q_{enc} = \\rho \\frac{4}{3}\\pi r^3$. Field is $E = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_{enc}}{r^2} \\propto r$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-12", title: "Prob 2.9: Charge Density from E", description: "Divergence in action", icon: "Activity",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.9a", content: "**Problem:** Suppose the electric field is $\\mathbf{E} = k r^3 \\mathbf{\\hat{r}}$ in spherical coordinates. Find the charge density $\\rho$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use $\\rho = \\epsilon_0 \\nabla \\cdot \\mathbf{E}$.**", interactiveSteps: [ { stepText: "Compute divergence in spherical coords: $\\nabla \\cdot \\mathbf{E} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2 E_r)$." }, { stepText: "Substitute $E_r = k r^3$: $\\frac{1}{r^2}\\frac{\\partial}{\\partial r}(k r^5)$." }, { stepText: "Derivative is $5 k r^4$." }, { stepText: "Divide by $r^2$ to get $5 k r^2$. Multiply by $\\epsilon_0$ to get $\\rho = 5 \\epsilon_0 k r^2$. Goal reached!" } ] },
            { id: "s2", type: "numerical", title: "Coefficient", content: "What is the numerical coefficient in front of $\\epsilon_0 k r^2$?", numericAnswer: 5, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-p2-13", title: "Prob 2.9b: Total Charge", description: "Integrating density", icon: "Box",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.9b", content: "**Problem:** Find the total charge in a sphere of radius $R$ for the density $\\rho = 5 \\epsilon_0 k r^2$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate $\\rho d\\tau$.**", interactiveSteps: [ { stepText: "$Q = \\int_0^R (5 \\epsilon_0 k r^2) (4\\pi r^2 dr)$." }, { stepText: "$= 20\\pi \\epsilon_0 k \\int_0^R r^4 dr$." }, { stepText: "$= 20\\pi \\epsilon_0 k (R^5 / 5)$." }, { stepText: "$Q = 4\\pi \\epsilon_0 k R^5$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-14", title: "Prob 2.10: Charge at Corner", description: "Tricky flux problem", icon: "Grid",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.10", content: "**Problem:** A charge $q$ sits at the back corner of a cube. What is the flux of $\\mathbf{E}$ through the opposite shaded side?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use symmetry to avoid integrals.**", interactiveSteps: [ { stepText: "Imagine 8 identical cubes stacked together so the charge $q$ is perfectly in the center of a giant cube." }, { stepText: "By Gauss's law, total flux through the giant cube is $q/\\epsilon_0$." }, { stepText: "The giant cube has 6 faces. By symmetry, flux through each giant face is $q/6\\epsilon_0$." }, { stepText: "The shaded face of our small cube makes up exactly 1/4 of one giant face." }, { stepText: "So the flux is $(1/4) \\times (q/6\\epsilon_0) = q/24\\epsilon_0$. Goal reached!" } ] },
            { id: "s2", type: "numerical", title: "Denominator", content: "What is the denominator factor (X) in $q / (X \\epsilon_0)$?", numericAnswer: 24, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-p2-15", title: "Prob 2.12: Gauss Law Shell", description: "Easy method", icon: "Circle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.12", content: "**Problem:** Use Gauss's law to find the electric field inside and outside a spherical shell of radius $R$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = Q_{enc}/\\epsilon_0$.**", interactiveSteps: [ { stepText: "Inside ($r<R$): Draw a Gaussian sphere. $Q_{enc} = 0$. So $\\mathbf{E} = 0$." }, { stepText: "Outside ($r>R$): Draw a Gaussian sphere. $Q_{enc} = q = 4\\pi R^2 \\sigma$." }, { stepText: "$E(4\\pi r^2) = q/\\epsilon_0$." }, { stepText: "$\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\mathbf{\\hat{r}}$. Notice how much easier this is than Prob 2.7! Goal reached." } ] }
          ]
        },
        {
          id: "les-p2-16", title: "Prob 2.14: Infinite Wire Gauss", description: "Cylindrical symmetry", icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.14", content: "**Problem:** Find the electric field a distance $s$ from an infinitely long straight wire carrying uniform line charge $\\lambda$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply Gauss's Law with a cylinder.**", interactiveSteps: [ { stepText: "Draw a Gaussian cylinder of radius $s$ and length $L$ around the wire." }, { stepText: "Enclosed charge is $Q_{enc} = \\lambda L$." }, { stepText: "Flux is through the curved side only: $E (2\\pi s L)$." }, { stepText: "Equating: $E (2\\pi s L) = \\lambda L / \\epsilon_0$." }, { stepText: "$\\mathbf{E} = \\frac{\\lambda}{2\\pi\\epsilon_0 s} \\mathbf{\\hat{s}}$. Goal reached!" } ] }
          ]
        }
      ]
    },
    {
      id: "unit-2-gauss-problems",
      title: "Gauss's Law & Curl Problems",
      description: "Advanced applications of Gauss's Law and curl of E.",
      color: "duo-green",
      lessons: [
        {
          id: "les-p2-17", title: "Prob 2.15: Variable Density Sphere", description: "Integrating for Q_enc", icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.15", content: "**Problem:** Find the electric field inside a sphere with charge density $\\rho = kr$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $Q_{enc}$ by integration.**", interactiveSteps: [ { stepText: "Draw Gaussian sphere of radius $r$. LHS is $E(4\\pi r^2)$." }, { stepText: "Since $\\rho$ is not constant, we must integrate: $Q_{enc} = \\int_0^r (kr') (4\\pi r'^2 dr')$." }, { stepText: "$= 4\\pi k \\int_0^r r'^3 dr' = \\pi k r^4$." }, { stepText: "$E(4\\pi r^2) = \\frac{\\pi k r^4}{\\epsilon_0} \\implies \\mathbf{E} = \\frac{k r^2}{4\\epsilon_0}\\mathbf{\\hat{r}}$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Integration Check", content: "Why couldn't we just multiply $\\rho \\times V$?", options: [ { id: "A", text: "Because volume is not 4/3 pi r^3", isCorrect: false, explanation: "" }, { id: "B", text: "Because the density varies with radius", isCorrect: true, explanation: "You must integrate when density is not uniform." } ] }
          ]
        },
        {
          id: "les-p2-18", title: "Prob 2.16: Thick Spherical Shell", description: "Three regions", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.16", content: "**Problem:** A thick spherical shell (inner radius $a$, outer radius $b$) carries charge density $\\rho = k/r^2$. Find E in all three regions." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply Gauss's Law in 3 regions.**", interactiveSteps: [ { stepText: "$r < a$: $Q_{enc} = 0$, so $\\mathbf{E} = 0$." }, { stepText: "$a < r < b$: $Q_{enc} = \\int_a^r (k/r'^2) (4\\pi r'^2 dr') = 4\\pi k \\int_a^r dr' = 4\\pi k(r-a)$." }, { stepText: "So $\\mathbf{E} = \\frac{k(r-a)}{\\epsilon_0 r^2}\\mathbf{\\hat{r}}$ inside the shell meat." }, { stepText: "$r > b$: $Q_{enc} = 4\\pi k(b-a)$. So $\\mathbf{E} = \\frac{k(b-a)}{\\epsilon_0 r^2}\\mathbf{\\hat{r}}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-19", title: "Prob 2.17: Coaxial Cable Inner", description: "Cylindrical symmetry", icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.17a", content: "**Problem:** A coaxial cable has a uniform volume charge $\\rho$ on the inner cylinder (radius $a$). Find E inside ($s < a$)." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply Gauss's law for cylinder.**", interactiveSteps: [ { stepText: "Gaussian cylinder radius $s$, length $L$." }, { stepText: "$Q_{enc} = \\rho (\\pi s^2 L)$." }, { stepText: "$E (2\\pi s L) = \\rho \\pi s^2 L / \\epsilon_0$." }, { stepText: "$\\mathbf{E} = \\frac{\\rho s}{2\\epsilon_0}\\mathbf{\\hat{s}}$. Goal reached!" } ] },
            { id: "s2", type: "numerical", title: "Proportionality", content: "Inside the uniform cylinder, E is proportional to $s^n$. What is n?", numericAnswer: 1, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-p2-20", title: "Prob 2.17: Coaxial Cable Outer", description: "Neutral cable", icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.17b", content: "**Problem:** The outer cylindrical shell (radius $b$) carries a negative surface charge such that the whole cable is neutral. Find E outside ($s > b$)." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find net enclosed charge.**", interactiveSteps: [ { stepText: "Draw Gaussian cylinder with $s > b$." }, { stepText: "The total enclosed charge includes the positive inner cylinder and the negative outer shell." }, { stepText: "Since the cable is electrically neutral overall, $Q_{enc} = 0$." }, { stepText: "Therefore, $\\mathbf{E} = 0$ everywhere outside. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-21", title: "Prob 2.18: Infinite Plane Slab", description: "Thick slab of charge", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.18", content: "**Problem:** An infinite plane slab of thickness $2d$ carries uniform volume charge $\\rho$. Find E as a function of $y$ (where $y=0$ is the center)." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use a pillbox from center.**", interactiveSteps: [ { stepText: "By symmetry, E points away from $y=0$. At $y=0$, $E=0$." }, { stepText: "Inside ($y < d$): Draw pillbox from 0 to $y$, area $A$. Flux is $E A$." }, { stepText: "$Q_{enc} = \\rho A y$. So $E A = \\rho A y / \\epsilon_0 \\implies \\mathbf{E} = \\frac{\\rho y}{\\epsilon_0}\\mathbf{\\hat{y}}$." }, { stepText: "Outside ($y > d$): $Q_{enc} = \\rho A d$. So $\\mathbf{E} = \\frac{\\rho d}{\\epsilon_0}\\mathbf{\\hat{y}}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-22", title: "Prob 2.19: Overlapping Spheres", description: "A surprising constant field", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.19", content: "**Problem:** Two spheres of radius $R$ with $+\\rho$ and $-\\rho$ overlap. Vector $\\mathbf{d}$ goes from + center to - center. Show E in overlap is constant." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Superpose two solid spheres.**", interactiveSteps: [ { stepText: "Field of + sphere inside is $\\mathbf{E}_+ = \\frac{\\rho}{3\\epsilon_0}\\mathbf{r}_+$." }, { stepText: "Field of - sphere inside is $\\mathbf{E}_- = -\\frac{\\rho}{3\\epsilon_0}\\mathbf{r}_-$." }, { stepText: "Total field $\\mathbf{E} = \\frac{\\rho}{3\\epsilon_0}(\\mathbf{r}_+ - \\mathbf{r}_-)$." }, { stepText: "Vectorially, $\\mathbf{r}_+ - \\mathbf{r}_-$ is exactly the displacement vector $\\mathbf{d}$ between centers." }, { stepText: "$\\mathbf{E} = \\frac{\\rho}{3\\epsilon_0}\\mathbf{d}$, which is a constant vector! Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Uniformity", content: "What is remarkable about the field in the overlap region?", options: [ { id: "A", text: "It is exactly zero", isCorrect: false, explanation: "" }, { id: "B", text: "It is perfectly uniform in magnitude and direction", isCorrect: true, explanation: "Since d is a constant vector." } ] }
          ]
        },
        {
          id: "les-p2-23", title: "Prob 2.20: Curl of Point Charge", description: "Direct calculation", icon: "RotateCw",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.20", content: "**Problem:** Calculate $\\nabla \\times \\mathbf{E}$ directly from Coulomb's Law." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply curl to the integral.**", interactiveSteps: [ { stepText: "$\\nabla \\times \\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\int \\nabla \\times \\left( \\frac{\\mathbf{\\hat{\\cal{r}}}}{\\cal{r}^2} \\rho \\right) d\\tau'$." }, { stepText: "The curl operator $\\nabla$ acts on unprimed coordinates (r), while $\\rho$ depends on primed coordinates (r')." }, { stepText: "So we just need the curl of $\\mathbf{\\hat{\\cal{r}}} / \\cal{r}^2$." }, { stepText: "By vector identity, the curl of this central field is identically zero. Thus the integral is zero. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-24", title: "Prob 2.21a: Impossible Field", description: "Checking if Curl = 0", icon: "XCircle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.21a", content: "**Problem:** Is $\\mathbf{E} = k[xy\\mathbf{\\hat{x}} + 2yz\\mathbf{\\hat{y}} + 3xz\\mathbf{\\hat{z}}]$ a possible electrostatic field?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check if $\\nabla \\times \\mathbf{E} = 0$.**", interactiveSteps: [ { stepText: "Compute x-comp of curl: $\\partial E_z/\\partial y - \\partial E_y/\\partial z$." }, { stepText: "$= 0 - 2y = -2y$." }, { stepText: "Since the curl is not zero (it has a -2y component), this CANNOT be an electrostatic field. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-25", title: "Prob 2.21b: Possible Field", description: "Finding the potential", icon: "CheckSquare",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.21b", content: "**Problem:** Is $\\mathbf{E} = k[y^2\\mathbf{\\hat{x}} + (2xy+z^2)\\mathbf{\\hat{y}} + 2yz\\mathbf{\\hat{z}}]$ a possible field? If so, find $V$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check curl, then integrate.**", interactiveSteps: [ { stepText: "Check curl: all cross derivatives match! It is a valid field." }, { stepText: "Integrate from origin to $(x,y,z)$ to find V." }, { stepText: "Path 1: $(0,0,0) \\to (x,0,0)$. $dy=dz=0, y=z=0$. $\\int E_x dx = 0$." }, { stepText: "Path 2: $(x,0,0) \\to (x,y,0)$. $dx=dz=0, z=0$. $\\int (2xy) dy = xy^2$." }, { stepText: "Path 3: $(x,y,0) \\to (x,y,z)$. $dx=dy=0$. $\\int 2yz dz = yz^2$." }, { stepText: "$V(x,y,z) = -k(xy^2 + yz^2)$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-26", title: "Prob 2.22: Potential Solid Sphere", description: "Integrating from infinity", icon: "Waves",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.22", content: "**Problem:** Find the potential inside and outside a uniformly charged solid sphere of radius R." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate E fields.**", interactiveSteps: [ { stepText: "Outside ($r>R$): $\\mathbf{E} = \\frac{q}{4\\pi\\epsilon_0 r^2}$. $V = -\\int_\\infty^r E dr = \\frac{q}{4\\pi\\epsilon_0 r}$." }, { stepText: "Inside ($r<R$): $V = V(R) - \\int_R^r E_{in} dr'$." }, { stepText: "$V = \\frac{q}{4\\pi\\epsilon_0 R} - \\int_R^r \\frac{q r'}{4\\pi\\epsilon_0 R^3} dr'$." }, { stepText: "$= \\frac{q}{4\\pi\\epsilon_0} \\left( \\frac{1}{R} - \\frac{r^2 - R^2}{2R^3} \\right) = \\frac{q}{4\\pi\\epsilon_0} \\frac{1}{2R} \\left( 3 - \\frac{r^2}{R^2} \\right)$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Parabola", content: "Inside the sphere, the potential takes the shape of a:", options: [ { id: "A", text: "Straight line", isCorrect: false, explanation: "" }, { id: "B", text: "Inverted parabola", isCorrect: true, explanation: "Because of the -r^2 term." } ] }
          ]
        },
        {
          id: "les-p2-27", title: "Prob 2.23: Infinite Wire Potential", description: "Reference point warning", icon: "AlertTriangle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.23", content: "**Problem:** Find the potential a distance $s$ from an infinitely long straight wire ($\\lambda$)." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Choose a finite reference point.**", interactiveSteps: [ { stepText: "$\\mathbf{E} = \\frac{\\lambda}{2\\pi\\epsilon_0 s}\\mathbf{\\hat{s}}$." }, { stepText: "If we integrate from $\\infty$, $\\int 1/s ds = \\ln(s)$, which blows up at $\\infty$." }, { stepText: "Set reference point at a specific distance $a$: $V(a) = 0$." }, { stepText: "$V(s) = -\\int_a^s \\frac{\\lambda}{2\\pi\\epsilon_0 s'} ds' = \\frac{\\lambda}{2\\pi\\epsilon_0} \\ln(a/s)$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-28", title: "Prob 2.24: Thick Shell Potential", description: "Multi-stage integration", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.24", content: "**Problem:** For the thick shell in Prob 2.16 ($\\rho = k/r^2$), find the potential at the center using infinity as reference." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate piecewise from infinity.**", interactiveSteps: [ { stepText: "Region 3 ($r>b$): $E_3 = \\frac{k(b-a)}{\\epsilon_0 r^2}$. $V(b) = \\frac{k(b-a)}{\\epsilon_0 b}$." }, { stepText: "Region 2 ($a<r<b$): $E_2 = \\frac{k(r-a)}{\\epsilon_0 r^2}$. Integrate from $b$ to $a$." }, { stepText: "$\\Delta V_{2} = -\\int_b^a \\frac{k}{\\epsilon_0}(\\frac{1}{r} - \\frac{a}{r^2}) dr = \\frac{k}{\\epsilon_0}[\\ln(b/a) - a(1/a - 1/b)] = \\frac{k}{\\epsilon_0}[\\ln(b/a) - 1 + a/b]$." }, { stepText: "Region 1 ($r<a$): $E_1 = 0$, so $V$ is constant. $V_{center} = V(a) = V(b) + \\Delta V_{2}$." }, { stepText: "Summing terms yields $V_{center} = \\frac{k}{\\epsilon_0} \\ln(b/a)$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-29", title: "Prob 2.25: Coaxial Cable Potential", description: "V across a gap", icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.25", content: "**Problem:** Find the potential difference between a point on the axis and a point on the outer cylinder of the coaxial cable (Prob 2.17)." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate E from b to 0.**", interactiveSteps: [ { stepText: "$V(0) - V(b) = -\\int_b^0 E ds = \\int_0^b E ds$." }, { stepText: "Split at $a$: $\\int_0^a E_{in} ds + \\int_a^b E_{out} ds$." }, { stepText: "$\\int_0^a \\frac{\\rho s}{2\\epsilon_0} ds = \\frac{\\rho a^2}{4\\epsilon_0}$." }, { stepText: "$\\int_a^b \\frac{\\rho a^2}{2\\epsilon_0 s} ds = \\frac{\\rho a^2}{2\\epsilon_0} \\ln(b/a)$." }, { stepText: "Total $\\Delta V = \\frac{\\rho a^2}{2\\epsilon_0} (1/2 + \\ln(b/a))$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p2-30", title: "Prob 2.26: E from V", description: "Checking the gradient", icon: "CheckSquare",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.26", content: "**Problem:** Given $V(z) = \\frac{\\sigma}{2\\epsilon_0}(\\sqrt{R^2+z^2} - z)$ for a disk, compute $\\mathbf{E} = -\\nabla V$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Differentiate.**", interactiveSteps: [ { stepText: "$\\mathbf{E} = -\\frac{\\partial V}{\\partial z} \\mathbf{\\hat{z}}$." }, { stepText: "$\\frac{\\partial}{\\partial z} (\\sqrt{R^2+z^2} - z) = \\frac{1}{2}(R^2+z^2)^{-1/2}(2z) - 1 = \\frac{z}{\\sqrt{R^2+z^2}} - 1$." }, { stepText: "Multiply by $-\\frac{\\sigma}{2\\epsilon_0}$." }, { stepText: "$\\mathbf{E} = \\frac{\\sigma}{2\\epsilon_0} \\left( 1 - \\frac{z}{\\sqrt{R^2+z^2}} \\right) \\mathbf{\\hat{z}}$. Matches Ex 2.6 perfectly! Goal reached." } ] }
          ]
        },
        {
          id: "les-p2-31", title: "Prob 2.27: Cone Potential", description: "Integral over a cone", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.27", content: "**Problem:** A conical surface (empty ice-cream cone) carries uniform surface charge $\\sigma$. Find the potential difference between the vertex and center of the top." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate $V = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\sigma}{\\cal{r}} da'$ at both points.**", interactiveSteps: [ { stepText: "At vertex (origin): $\\cal{r} = r'$. Integral evaluates to $\\frac{\\sigma}{2\\epsilon_0} h \\sqrt{1 + (R/h)^2}$." }, { stepText: "At top center: $\\cal{r}$ is distance from rim to center. Integration is harder but solvable." }, { stepText: "Subtracting the two values yields the potential difference. Goal reached." } ] }
          ]
        },
        {
          id: "les-p2-32", title: "Prob 2.29: V inside Sphere", description: "Using V integral directly", icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.29", content: "**Problem:** Calculate potential inside a solid sphere of charge $q$ using $V = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho}{\\cal{r}} d\\tau'$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Direct volume integration.**", interactiveSteps: [ { stepText: "Set field point on z-axis. $\\cal{r} = \\sqrt{r^2+r'^2-2rr'\\cos\\theta'}$." }, { stepText: "Integrate $\\theta'$ and $\\phi'$ to get a piecewise function of $r'$ (similar to Ex 2.8)." }, { stepText: "Integrate $r'$ from 0 to $R$, splitting at $r'=r$ because of the absolute value." }, { stepText: "Result exactly matches the inverted parabola formula derived earlier. Goal reached!" } ] }
          ]
        }
      ]
    },
    {
      id: "unit-3-potential-problems",
      title: "Electric Potential & Energy Problems",
      description: "Working with Poisson's Equation, Boundary Conditions, and Assembly Work.",
      color: "duo-green",
      lessons: [
        {
          id: "les-p3-1", title: "Prob 2.30: Check Poisson", description: "Applying Laplacian to V", icon: "Activity",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.30", content: "**Problem:** Check that the integral solution $V = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho}{\\cal{r}} d\\tau'$ satisfies Poisson's equation $\\nabla^2 V = -\\rho/\\epsilon_0$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply Laplacian to the integral.**", interactiveSteps: [ { stepText: "$\\nabla^2 V = \\frac{1}{4\\pi\\epsilon_0} \\int \\rho(\\mathbf{r}') \\nabla^2 \\left( \\frac{1}{\\cal{r}} \\right) d\\tau'$." }, { stepText: "Recall that $\\nabla^2(1/\\cal{r}) = -4\\pi\\delta^3(\\boldsymbol{\\cal{r}})$ (the Dirac delta)." }, { stepText: "Substitute: $\\frac{1}{4\\pi\\epsilon_0} \\int \\rho(\\mathbf{r}') (-4\\pi\\delta^3(\\mathbf{r}-\\mathbf{r}')) d\\tau'$." }, { stepText: "The $-4\\pi$ cancels. The delta function picks out $\\rho(\\mathbf{r})$. Result is $-\\rho(\\mathbf{r})/\\epsilon_0$. Goal reached! Proof complete." } ] },
            { id: "s2", type: "quiz", title: "Delta Function", content: "What mathematical tool was crucial for this proof?", options: [ { id: "A", text: "Dirac Delta Function", isCorrect: true, explanation: "It handled the singularity of 1/r." }, { id: "B", text: "Stokes' Theorem", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-p3-2", title: "Prob 2.31a: BC Check Plane", description: "Verifying discontinuities", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.31a", content: "**Problem:** Check that the results for an infinite plane (Ex 2.5) satisfy the boundary condition $E_{above} - E_{below} = \\frac{\\sigma}{\\epsilon_0}$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Subtract fields.**", interactiveSteps: [ { stepText: "$E_{above} = \\frac{\\sigma}{2\\epsilon_0}\\mathbf{\\hat{n}}$." }, { stepText: "$E_{below} = -\\frac{\\sigma}{2\\epsilon_0}\\mathbf{\\hat{n}}$ (points away, so opposite to n-hat)." }, { stepText: "Difference: $\\frac{\\sigma}{2\\epsilon_0} - (-\\frac{\\sigma}{2\\epsilon_0}) = \\frac{2\\sigma}{2\\epsilon_0} = \\frac{\\sigma}{\\epsilon_0}$." }, { stepText: "Matches perfectly! Goal reached." } ] }
          ]
        },
        {
          id: "les-p3-3", title: "Prob 2.31b: BC Hollow Tube", description: "Using Gauss then BC", icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.31b", content: "**Problem:** Use Gauss's law to find E inside and outside a hollow tube with surface charge $\\sigma$. Check the boundary condition." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate field jump.**", interactiveSteps: [ { stepText: "Inside ($s<R$): $Q_{enc} = 0$, so $E_{in} = 0$." }, { stepText: "Outside ($s>R$): $Q_{enc} = \\sigma (2\\pi R L)$. Gauss gives $E (2\\pi s L) = \\sigma (2\\pi R L) / \\epsilon_0$." }, { stepText: "$E_{out} = \\frac{\\sigma R}{\\epsilon_0 s}$." }, { stepText: "Evaluate $E_{out}$ right AT the surface ($s=R$): $E = \\frac{\\sigma R}{\\epsilon_0 R} = \\frac{\\sigma}{\\epsilon_0}$." }, { stepText: "Jump is $\\frac{\\sigma}{\\epsilon_0} - 0 = \\frac{\\sigma}{\\epsilon_0}$. Matches! Goal reached." } ] }
          ]
        },
        {
          id: "les-p3-4", title: "Prob 2.32a: Work for 4th Charge", description: "Bringing in a charge", icon: "ArrowRight",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.32a", content: "**Problem:** 3 charges $+q$ are at corners of a square (side $a$). How much work takes to bring a 4th $+q$ to the empty corner?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate $W = q V$.**", interactiveSteps: [ { stepText: "Calculate potential V at the empty corner due to the 3 existing charges." }, { stepText: "Two are distance $a$ away. One is distance $\\sqrt{2}a$ away (diagonal)." }, { stepText: "$V = \\frac{1}{4\\pi\\epsilon_0} \\left( \\frac{q}{a} + \\frac{q}{a} + \\frac{q}{\\sqrt{2}a} \\right) = \\frac{q}{4\\pi\\epsilon_0 a} (2 + \\frac{1}{\\sqrt{2}})$." }, { stepText: "Work is $q \\times V = \\frac{q^2}{4\\pi\\epsilon_0 a} (2 + \\frac{1}{\\sqrt{2}})$. Goal reached!" } ] },
            { id: "s2", type: "numerical", title: "Bracket", content: "What is $2 + 1/\\sqrt{2}$ approximately?", numericAnswer: 2.7, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-p3-5", title: "Prob 2.32b: Total Assembly Work", description: "Building the square", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.32b", content: "**Problem:** How much work does it take to assemble the entire 4-charge square?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use $W = \\frac{1}{2} \\sum q_i V_i$.**", interactiveSteps: [ { stepText: "By symmetry, the potential $V_i$ at every corner is the same: $\\frac{q}{4\\pi\\epsilon_0 a} (2 + \\frac{1}{\\sqrt{2}})$." }, { stepText: "Sum over all 4 charges: $4 \\times q V_i$." }, { stepText: "Multiply by $1/2$ to avoid double counting." }, { stepText: "$W = \\frac{1}{2} (4) \\frac{q^2}{4\\pi\\epsilon_0 a} (2 + \\frac{1}{\\sqrt{2}}) = \\frac{q^2}{4\\pi\\epsilon_0 a} (4 + \\sqrt{2})$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Pair Counting", content: "How many unique PAIRS of charges are in a 4-charge system?", options: [ { id: "A", text: "4", isCorrect: false, explanation: "" }, { id: "B", text: "6", isCorrect: true, explanation: "4 sides + 2 diagonals = 6 pairs. (4 choose 2)." } ] }
          ]
        },
        {
          id: "les-p3-6", title: "Prob 2.33: Charges on a String", description: "Kinetic energy conversion", icon: "Maximize",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.33", content: "**Problem:** Two charges $+q$ are held distance $a$ apart. They are released and fly apart. What is their final kinetic energy?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply conservation of energy.**", interactiveSteps: [ { stepText: "Initial potential energy: $U_i = \\frac{1}{4\\pi\\epsilon_0} \\frac{q^2}{a}$." }, { stepText: "Initial kinetic energy: $K_i = 0$." }, { stepText: "Final potential energy (at infinity): $U_f = 0$." }, { stepText: "By conservation, final kinetic energy $K_f = U_i$. They share it equally, so each gets half. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p3-7", title: "Prob 2.34: Madelung Constant", description: "Infinite 1D lattice", icon: "MoreHorizontal",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.34", content: "**Problem:** An infinite chain of alternating charges $\\pm q$ are spaced distance $a$ apart. Find the work per particle to assemble it." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate infinite series.**", interactiveSteps: [ { stepText: "Work per particle is $\\frac{1}{2} q V$." }, { stepText: "$V$ at the center $+q$ is sum of potentials of all others: $2 \\times \\frac{q}{4\\pi\\epsilon_0} (-\\frac{1}{a} + \\frac{1}{2a} - \\frac{1}{3a} \\dots)$." }, { stepText: "The series $(1 - 1/2 + 1/3 - 1/4 \\dots) = \\ln(2)$." }, { stepText: "So $W = -\\frac{q^2}{4\\pi\\epsilon_0 a} \\ln(2)$. The Madelung constant is $\\alpha = 2\\ln(2)$. Goal reached!" } ] },
            { id: "s2", type: "numerical", title: "Series limit", content: "What does $1 - 1/2 + 1/3 - 1/4...$ evaluate to? (ln of what?)", numericAnswer: 2, numericTolerance: 0.1 }
          ]
        },
        {
          id: "les-p3-8", title: "Prob 2.35a: Solid Sphere Energy (1)", description: "Using rho V", icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.35a", content: "**Problem:** Find the energy of a solid sphere of charge $q$ and radius $R$ using $W = \\frac{1}{2} \\int \\rho V d\\tau$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate $\\rho V$.**", interactiveSteps: [ { stepText: "From earlier, $V_{in} = \\frac{q}{4\\pi\\epsilon_0} \\frac{1}{2R} (3 - r^2/R^2)$." }, { stepText: "$\\rho = \\frac{q}{\\frac{4}{3}\\pi R^3}$." }, { stepText: "$W = \\frac{1}{2} \\int_0^R \\rho V (4\\pi r^2 dr)$." }, { stepText: "Evaluating the polynomial integral gives $\\frac{3}{20\\pi\\epsilon_0} \\frac{q^2}{R}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p3-9", title: "Prob 2.35b: Solid Sphere Energy (2)", description: "Using E squared", icon: "Zap",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.35b", content: "**Problem:** Find the energy of the same solid sphere using $W = \\frac{\\epsilon_0}{2} \\int E^2 d\\tau$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate over all space.**", interactiveSteps: [ { stepText: "Inside $E = \\frac{qr}{4\\pi\\epsilon_0 R^3}$. Outside $E = \\frac{q}{4\\pi\\epsilon_0 r^2}$." }, { stepText: "$\\int E^2 d\\tau = \\int_0^R E_{in}^2 d\\tau + \\int_R^\\infty E_{out}^2 d\\tau$." }, { stepText: "Inner integral gives $\\frac{q^2}{4\\pi\\epsilon_0 R} (1/5)$. Outer gives $\\frac{q^2}{4\\pi\\epsilon_0 R} (1)$." }, { stepText: "Sum and multiply by $\\epsilon_0/2$: $\\frac{1}{4\\pi\\epsilon_0} \\frac{q^2}{R} (\\frac{1}{10} + \\frac{1}{2}) = \\frac{3}{20\\pi\\epsilon_0} \\frac{q^2}{R}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p3-10", title: "Prob 2.35c: Sphere Energy (3)", description: "Using Boundary Term", icon: "Box",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.35c", content: "**Problem:** Find the energy using $W = \\frac{\\epsilon_0}{2} ( \\int_{\\mathcal{V}} E^2 d\\tau + \\oint_S V \\mathbf{E} \\cdot d\\mathbf{a} )$ with a finite boundary radius $a > R$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Show surface term matters for finite boundaries.**", interactiveSteps: [ { stepText: "Volume integral of $E^2$ goes from $0$ to $a$. It evaluates to $\\dots - \\frac{1}{a}$ instead of $0$." }, { stepText: "The surface integral at radius $a$ is $V(a) E(a) (4\\pi a^2)$." }, { stepText: "$\\left(\\frac{q}{4\\pi\\epsilon_0 a}\\right) \\left(\\frac{q}{4\\pi\\epsilon_0 a^2}\\right) (4\\pi a^2) = \\frac{q^2}{4\\pi\\epsilon_0 a}$." }, { stepText: "Adding this exactly cancels the $-1/a$ from the volume term! Total is still $\\frac{3}{20\\pi\\epsilon_0} \\frac{q^2}{R}$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Infinity limit", content: "What happens to the surface term as $a \\to \\infty$?", options: [ { id: "A", text: "It goes to zero", isCorrect: true, explanation: "V goes as 1/a, E as 1/a^2, area as a^2. Product is 1/a -> 0." }, { id: "B", text: "It becomes infinite", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-p3-11", title: "Prob 2.36: Method of Assembly", description: "Snowballing a sphere", icon: "RefreshCw",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.36", content: "**Problem:** Compute energy of a solid sphere by building it layer by layer (method of assembly)." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate $dW = V(r) dq$.**", interactiveSteps: [ { stepText: "Suppose we have built a sphere of radius $r$ with charge $q(r) = \\rho \\frac{4}{3}\\pi r^3$." }, { stepText: "The potential at its surface is $V(r) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q(r)}{r}$." }, { stepText: "Bring in a new shell of charge $dq = \\rho 4\\pi r^2 dr$. Work $dW = V(r) dq$." }, { stepText: "Integrate $dW$ from $r=0$ to $R$. Result is exactly $\\frac{3}{20\\pi\\epsilon_0} \\frac{q^2}{R}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p3-12", title: "Prob 2.37: Concentric Shells", description: "Interaction energy", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.37", content: "**Problem:** Two concentric shells of radii $a, b$ carry $+q, -q$. Calculate their energy." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use $E^2$ over all space.**", interactiveSteps: [ { stepText: "Inside $a$, $E=0$." }, { stepText: "Between $a$ and $b$, $E = \\frac{q}{4\\pi\\epsilon_0 r^2}$." }, { stepText: "Outside $b$, $E=0$ (charges cancel)." }, { stepText: "$W = \\frac{\\epsilon_0}{2} \\int_a^b E^2 (4\\pi r^2 dr) = \\frac{q^2}{8\\pi\\epsilon_0} \\left( \\frac{1}{a} - \\frac{1}{b} \\right)$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Capacitor Energy", content: "Does this look familiar?", options: [ { id: "A", text: "It is exactly the energy stored in a spherical capacitor.", isCorrect: true, explanation: "W = Q^2 / 2C." }, { id: "B", text: "No", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-p3-13", title: "Prob 2.38: Interaction Energy", description: "Cross terms of E", icon: "XSquare",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.38", content: "**Problem:** Find the interaction energy $\\epsilon_0 \\int \\mathbf{E}_1 \\cdot \\mathbf{E}_2 d\\tau$ for two point charges." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Do the difficult integral.**", interactiveSteps: [ { stepText: "Put $q_1$ at origin, $q_2$ on z-axis at $a$." }, { stepText: "$\\mathbf{E}_1 \\cdot \\mathbf{E}_2$ involves the angle between the two position vectors." }, { stepText: "Integrating this over all space is highly non-trivial but yields exactly $\\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{a}$." }, { stepText: "This proves that the field interaction energy exactly equals the mechanical work to assemble them! Goal reached." } ] }
          ]
        },
        {
          id: "les-p3-14", title: "Prob 2.46: Field of Square", description: "Integration challenge", icon: "Square",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.46", content: "**Problem:** Find the electric field at height $z$ above a square sheet (side $a$) carrying uniform $\\sigma$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Double integrate.**", interactiveSteps: [ { stepText: "Integrate $dE_z = \\frac{\\sigma z dx dy}{4\\pi\\epsilon_0 (x^2+y^2+z^2)^{3/2}}$ from $-a/2$ to $a/2$." }, { stepText: "This is a standard but tricky calculus integral yielding inverse tangents." }, { stepText: "Result: $E = \\frac{\\sigma}{2\\epsilon_0} \\frac{4}{\\pi} \\arctan\\left(\\sqrt{1+a^2/2z^2}-1\\right)$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p3-15", title: "Prob 2.47: Density from E", description: "Applying divergence again", icon: "Minimize",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.47", content: "**Problem:** Given $\\mathbf{E} = \\frac{k}{r}[3\\mathbf{\\hat{r}} + 2\\sin\\theta\\cos\\theta\\sin\\phi\\mathbf{\\hat{\\theta}} + \\sin\\theta\\cos\\phi\\mathbf{\\hat{\\phi}}]$, find $\\rho$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\rho = \\epsilon_0 \\nabla \\cdot \\mathbf{E}$.**", interactiveSteps: [ { stepText: "Apply the full spherical divergence formula." }, { stepText: "r-term: $\\frac{1}{r^2}\\partial_r(r^2 3k/r) = 3k/r^2$." }, { stepText: "$\\theta$-term yields something with $\\cos 2\\theta$." }, { stepText: "$\\phi$-term yields something with $\\sin\\phi$." }, { stepText: "Combine to get final $\\rho$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p3-16", title: "Prob 2.48: Hemisphere Force", description: "Electrostatic pressure", icon: "ArrowUpRight",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.48", content: "**Problem:** Find the net force that the southern hemisphere of a uniformly charged solid sphere exerts on the northern hemisphere." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate pressure over hemisphere.**", interactiveSteps: [ { stepText: "We can use the Maxwell Stress Tensor or direct integration of the field acting on the charge." }, { stepText: "Force $dF = E_{other} dq$." }, { stepText: "Integrating the z-component over the northern hemisphere yields $\\frac{3Q^2}{64\\pi\\epsilon_0 R^2}$. Goal reached!" } ] }
          ]
        }
      ]
    },
    {
      id: "unit-4-work-conductors-problems",
      title: "Work & Capacitors Problems",
      description: "Advanced exercises on electrostatics of conductors, capacitance, and energy.",
      color: "duo-green",
      lessons: [
        {
          id: "les-p4-1", title: "Prob 2.49: Inverted Bowl", description: "Potential difference", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.49", content: "**Problem:** An inverted hemispherical bowl of radius $R$ carries uniform surface charge $\\sigma$. Find potential difference between north pole and center." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate V at both points.**", interactiveSteps: [ { stepText: "Center is easy: all charge is at distance $R$. $V_c = \\frac{\\sigma(2\\pi R^2)}{4\\pi\\epsilon_0 R} = \\frac{\\sigma R}{2\\epsilon_0}$." }, { stepText: "North pole requires integration over the hemisphere. Distance $\\cal{r} = \\sqrt{2R^2(1-\\cos\\theta)}$." }, { stepText: "Evaluate $V_p$ and subtract. Result: $\\frac{\\sigma R}{2\\epsilon_0}(\\sqrt{2}-1)$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-2", title: "Prob 2.50: Energy of kr sphere", description: "Checking energy twice", icon: "Zap",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.50", content: "**Problem:** Find energy of sphere with $\\rho=kr$ using two methods." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compare $\\rho V$ and $E^2$.**", interactiveSteps: [ { stepText: "Find E inside and outside using Gauss. Find V by integrating E." }, { stepText: "Method 1: $\\int \\rho V d\\tau$. Messy polynomial integral." }, { stepText: "Method 2: $\\int E^2 d\\tau$. Also polynomial integral." }, { stepText: "Both yield $\\frac{\\pi k^2 R^7}{7\\epsilon_0}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-3", title: "Prob 2.51: Screened Potential", description: "Yukawa potential", icon: "Waves",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.51", content: "**Problem:** Given $V(r) = A \\frac{e^{-\\lambda r}}{r}$, find $\\mathbf{E}$, $\\rho$, and total charge $Q$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply Gradient and Laplacian.**", interactiveSteps: [ { stepText: "$\\mathbf{E} = -\\nabla V$. Product rule yields a term with $1/r$ and $1/r^2$." }, { stepText: "$\\rho = -\\epsilon_0 \\nabla^2 V$. The $1/r$ part generates a Dirac Delta $\\delta^3(\\mathbf{r})$!" }, { stepText: "Total charge $Q = \\int \\rho d\\tau$. The volume integral over all space gives 0. The positive delta charge at origin perfectly cancels the negative cloud around it! Goal reached." } ] }
          ]
        },
        {
          id: "les-p4-4", title: "Prob 2.52: Rim of a Disk", description: "Potential integral", icon: "Disc",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.52", content: "**Problem:** Find the potential on the rim of a uniformly charged disk of radius $R$ and charge density $\\sigma$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Set up polar integral from the rim.**", interactiveSteps: [ { stepText: "Place origin at the rim. The disk boundary is $r = 2R \\cos\\theta$." }, { stepText: "Integrate $V = \\frac{\\sigma}{4\\pi\\epsilon_0} \\int \\frac{1}{r} (r dr d\\theta)$." }, { stepText: "The 'r' cancels out! Integral is just $\\int d\\theta dr$." }, { stepText: "Yields $\\frac{\\sigma R}{\\pi\\epsilon_0}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-5", title: "Prob 2.53: Two Infinite Wires", description: "Equipotential cylinders", icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.53", content: "**Problem:** Two infinite wires carry $+\\lambda$ and $-\\lambda$. Find $V$ and show equipotentials are cylinders." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Superpose logarithmic potentials.**", interactiveSteps: [ { stepText: "$V = \\frac{\\lambda}{2\\pi\\epsilon_0} \\ln(s_- / s_+)$." }, { stepText: "Equipotential means $\\ln(s_- / s_+) = const \\implies s_-/s_+ = k$." }, { stepText: "The locus of points with a constant ratio of distances to two lines is a circle (Apollonius circle)." }, { stepText: "Extended in 3D, these are off-center circular cylinders. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-6", title: "Prob 2.54: Vacuum Diode", description: "Child-Langmuir Law", icon: "Activity",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.54", content: "**Problem:** In a vacuum diode, space charge limits current. Show $I = K V^{3/2}$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Combine Poisson, Energy, and Current.**", interactiveSteps: [ { stepText: "Poisson: $d^2V/dx^2 = -\\rho/\\epsilon_0$." }, { stepText: "Energy: $\\frac{1}{2}mv^2 = eV \\implies v = \\sqrt{2eV/m}$." }, { stepText: "Current: $J = \\rho v$ is constant." }, { stepText: "Combine to differential equation for V, solve it, and deduce $J \\propto V^{3/2}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-7", title: "Prob 2.55: Modified Coulomb", description: "What if Coulomb was wrong?", icon: "AlertTriangle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.55", content: "**Problem:** If force was $F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2} (1 + r/\\lambda) e^{-r/\\lambda}$, reformulate electrostatics." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the new Gauss's Law.**", interactiveSteps: [ { stepText: "The field admits a scalar potential because it is strictly central (curl is zero)." }, { stepText: "$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r} e^{-r/\\lambda}$." }, { stepText: "Applying Laplacian yields a modified Poisson equation: $\\nabla^2 V - \\frac{1}{\\lambda^2}V = -\\rho/\\epsilon_0$ (Proca equation)." }, { stepText: "Gauss's law gains a volume integral term of V. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-8", title: "Prob 2.56: Uniform Density Field", description: "Symmetry paradox", icon: "Grid",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.56", content: "**Problem:** If $\\mathbf{E} = ax \\mathbf{\\hat{x}}$, what is $\\rho$? How can a uniform density create a directional field?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Resolve the paradox.**", interactiveSteps: [ { stepText: "$\\rho = \\epsilon_0 \\nabla \\cdot \\mathbf{E} = \\epsilon_0 a$. Density is uniform!" }, { stepText: "If density is uniform everywhere, field should be zero everywhere by symmetry." }, { stepText: "Paradox resolution: A truly infinite uniform universe has no 'origin' and E is undefined. This E field implies the universe has a boundary far away that breaks symmetry! Goal reached." } ] }
          ]
        },
        {
          id: "les-p4-9", title: "Prob 2.57: Sun Gravitational Energy", description: "Analogous physics", icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.57", content: "**Problem:** Calculate gravitational energy of a uniform sphere (the Sun). $W = -\\frac{3 GM^2}{5R}$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply electrostatics analog to gravity.**", interactiveSteps: [ { stepText: "Replace $1/4\\pi\\epsilon_0$ with $G$, and $q$ with $M$. Note gravity is attractive so add a minus sign." }, { stepText: "Formula $W = \\frac{3}{20\\pi\\epsilon_0}\\frac{q^2}{R}$ becomes $\\frac{3 G M^2}{5R}$." }, { stepText: "Plugging in Sun's mass and radius gives the energy. Dividing by luminosity gives a lifetime of ~10 million years." }, { stepText: "This proved the Sun doesn't run on gravity (needs nuclear fusion!). Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-10", title: "Prob 2.58a: Conducting Ellipsoid", description: "Flattening a sphere", icon: "Disc",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.58a", content: "**Problem:** The charge density on a conducting ellipsoid is known. Take the limit as $c \\to 0$ to find density on a circular disk." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Take geometrical limits.**", interactiveSteps: [ { stepText: "Ellipsoid density has $(x^2/a^4 + y^2/b^4 + z^2/c^4)^{-1/2}$." }, { stepText: "Set $a=b=R$, and let $c \\to 0$ to flatten it." }, { stepText: "The math reduces exactly to $\\sigma = \\frac{Q}{2\\pi R \\sqrt{R^2 - r^2}}$." }, { stepText: "Notice charge builds up infinitely at the sharp rim ($r=R$). Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-11", title: "Prob 2.58b: Conducting Ribbon", description: "Infinite strip", icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.58b", content: "**Problem:** Take the limit as $b \\to \\infty$ to find density on an infinite conducting ribbon." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Stretch the disk.**", interactiveSteps: [ { stepText: "Let the y-dimension stretch to infinity." }, { stepText: "Density becomes $\\sigma = \\frac{\\lambda}{\\pi \\sqrt{a^2 - x^2}}$." }, { stepText: "Again, charge concentrates heavily at the sharp edges $x = \\pm a$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-12", title: "Prob 2.58c: Conducting Needle", description: "1D limit", icon: "Move",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.58c", content: "**Problem:** Squeeze the ribbon into a thin needle." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: 1D charge profile.**", interactiveSteps: [ { stepText: "The 1D profile isn't uniform!" }, { stepText: "It turns out $\\lambda(x) = \\frac{Q}{2a}$. Wait, for a true 1D needle, the density is actually uniform! This contrasts with 2D disks. Goal reached." } ] }
          ]
        },
        {
          id: "les-p4-13", title: "Prob 2.59: Triangle Null Points", description: "Finding zero E", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.59", content: "**Problem:** 3 charges on a triangle. Find the 3 points (besides center) where $E=0$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve vector sum numerically.**", interactiveSteps: [ { stepText: "Set $\\mathbf{E}_1 + \\mathbf{E}_2 + \\mathbf{E}_3 = 0$." }, { stepText: "Center is an obvious solution." }, { stepText: "There are 3 other saddle points slightly outside the center, towards the edges." }, { stepText: "Numerically, $r \\approx 0.285 a$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-14", title: "Prob 2.60: Reversing Field", description: "Theorem proof", icon: "RefreshCw",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.60", content: "**Problem:** If you reverse the external field $\\mathbf{E}_{ext}$ on a conductor, does the net force perfectly reverse?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find a counterexample.**", interactiveSteps: [ { stepText: "Reversing $E_{ext}$ causes the *induced* charges on the conductor to redistribute entirely differently." }, { stepText: "Since the charge distribution $\\sigma$ changes, $F = \\int \\sigma E da$ does not simply flip sign." }, { stepText: "It only strictly flips if the external field is perfectly uniform. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-15", title: "Prob 2.61: Removing Charge from Shell", description: "Work calculation", icon: "ArrowRight",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.61", content: "**Problem:** Work to remove charge $q$ from center of an uncharged thick spherical shell to infinity." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate difference in total energy.**", interactiveSteps: [ { stepText: "Initial state: $q$ in shell. Induced $-q$ on inner wall, $+q$ on outer wall." }, { stepText: "Final state: $q$ at infinity, shell is neutral." }, { stepText: "Use $E^2$ formula for both states and subtract." }, { stepText: "Result: $W = \\frac{q^2}{8\\pi\\epsilon_0}(1/a - 1/b)$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p4-16", title: "Prob 2.62: 12 Charges on Circle", description: "Energy minimization", icon: "Clock",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.62", content: "**Problem:** What is the minimum energy configuration of 12 charges on/inside a circle?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compare configurations.**", interactiveSteps: [ { stepText: "Config 1: All 12 on the rim. Energy $W_1$." }, { stepText: "Config 2: 11 on the rim, 1 in the exact center. Energy $W_2$." }, { stepText: "Calculating the sums numerically reveals $W_2 < W_1$! The repulsion is so high on the rim that one gets pushed to the center. Goal reached." } ] }
          ]
        }
      ]
    },
    {
      id: "unit-5-conductors-capacitors-problems",
      title: "Conductors & Capacitors",
      description: "Cavities, shielding, pressure, and advanced capacitor configurations.",
      color: "duo-green",
      lessons: [
        {
          id: "les-p5-1", title: "Prob 2.39: Grounded Shell", description: "Changes in V", icon: "Shield",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.39", content: "**Problem:** A metal sphere $+q$ is surrounded by a neutral thick shell. What happens if you ground the outer shell?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Understand grounding.**", interactiveSteps: [ { stepText: "Originally, inner shell has $-q$, outer has $+q$." }, { stepText: "Grounding connects the outer surface to an infinite reservoir of electrons." }, { stepText: "Electrons flow up to neutralize the $+q$ on the outer surface to make $V=0$ there." }, { stepText: "Outer surface charge becomes 0! The external field disappears. Goal reached." } ] }
          ]
        },
        {
          id: "les-p5-2", title: "Prob 2.40: Two Cavities", description: "Shielding in action", icon: "Maximize",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.40", content: "**Problem:** A conductor has two separate cavities with charges $q_a$ and $q_b$ inside. Find surface charges and external field." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply Gauss's Law.**", interactiveSteps: [ { stepText: "Cavity A wall gets $-q_a$. Cavity B wall gets $-q_b$." }, { stepText: "The outer surface of the conductor gets $q_a + q_b$." }, { stepText: "The external field is simply a point charge field of $q_a+q_b$ centered on the conductor. It knows nothing about the cavities! Goal reached." } ] },
            { id: "s2", type: "quiz", title: "Forces", content: "Is there a force between $q_a$ and $q_b$?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Conductors shield!" }, { id: "B", text: "No", isCorrect: true, explanation: "The metal completely shields them from each other. E=0 in the metal blocks the influence." } ] }
          ]
        },
        {
          id: "les-p5-3", title: "Prob 2.41a: Force in Cavity", description: "Induced charge attraction", icon: "ArrowUpRight",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.41a", content: "**Problem:** A point charge is placed off-center inside a cavity of a neutral conductor. Is the force on it zero?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Consider the induced charge.**", interactiveSteps: [ { stepText: "The $+q$ charge induces $-q$ on the cavity wall." }, { stepText: "Because it's off-center, it is closer to one wall. The induced negative charge builds up more heavily on the near wall." }, { stepText: "This creates a net attractive force pulling it towards the closest wall! Force is NOT zero. Goal reached." } ] }
          ]
        },
        {
          id: "les-p5-4", title: "Prob 2.41b: Force on External Charge", description: "Always attractive?", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.41b", content: "**Problem:** Is the force between a point charge and a nearby neutral uncharged conductor ALWAYS attractive?" },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Analyze induction.**", interactiveSteps: [ { stepText: "The $+q$ pulls electrons to the near side, leaving positive charge on the far side." }, { stepText: "Because the negative charge is physically closer to $+q$ than the positive charge, the attractive force ALWAYS beats the repulsive force." }, { stepText: "Yes, it is always attractive! Goal reached." } ] }
          ]
        },
        {
          id: "les-p5-5", title: "Prob 2.42: Capacitor Pressure", description: "Force between plates", icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.42", content: "**Problem:** Find the electrostatic pressure on the plates of a parallel plate capacitor." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use $P = \\frac{\\epsilon_0}{2} E^2$.**", interactiveSteps: [ { stepText: "The field inside is $E = \\frac{Q}{A\\epsilon_0}$." }, { stepText: "Pressure is $\\frac{\\epsilon_0}{2} \\left( \\frac{Q}{A\\epsilon_0} \\right)^2 = \\frac{Q^2}{2\\epsilon_0 A^2}$." }, { stepText: "This force tries to pull the oppositely charged plates together. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Factor of 1/2", content: "Why do we use $E/2$ instead of $E$ when calculating force?", options: [ { id: "A", text: "Because there are 2 plates.", isCorrect: false, explanation: "" }, { id: "B", text: "Because a plate doesn't exert a force on itself, it only feels the field of the OTHER plate (which is E/2).", isCorrect: true, explanation: "Correct." } ] }
          ]
        },
        {
          id: "les-p5-6", title: "Prob 2.43: Hemisphere Repulsion", description: "Integrating pressure", icon: "ArrowUpRight",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.43", content: "**Problem:** A metal sphere carries total charge Q. Find the force of repulsion between the northern and southern hemispheres." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Integrate pressure over a hemisphere.**", interactiveSteps: [ { stepText: "Pressure $P = \\frac{\\epsilon_0}{2} E^2 = \\frac{\\epsilon_0}{2} \\left(\\frac{Q}{4\\pi\\epsilon_0 R^2}\\right)^2 = \\frac{Q^2}{32\\pi^2 \\epsilon_0 R^4}$." }, { stepText: "Integrate the z-component of this pressure over the northern hemisphere." }, { stepText: "$F = \\int P \\cos\\theta da = P \\pi R^2$." }, { stepText: "$F = \\frac{Q^2}{32\\pi\\epsilon_0 R^2}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-7", title: "Prob 2.44: Coaxial Capacitor", description: "Capacitance per length", icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.44", content: "**Problem:** Find the capacitance per unit length of two coaxial metal cylinders of radii $a$ and $b$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate $C/L = \\lambda / V$.**", interactiveSteps: [ { stepText: "Field between them is $E = \\frac{\\lambda}{2\\pi\\epsilon_0 s}$." }, { stepText: "Potential $V = \\int_a^b E ds = \\frac{\\lambda}{2\\pi\\epsilon_0} \\ln(b/a)$." }, { stepText: "$C/L = \\frac{\\lambda}{V} = \\frac{2\\pi\\epsilon_0}{\\ln(b/a)}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-8", title: "Prob 2.45: Work by Capacitor Plates", description: "Energy conservation", icon: "Activity",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.45", content: "**Problem:** The plates of a capacitor move closer by $\\epsilon$. Show the work done equals the energy lost by the field." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compare mechanical work and field energy.**", interactiveSteps: [ { stepText: "Mechanical work $W = F \\epsilon = (P A) \\epsilon = \\left( \\frac{\\epsilon_0}{2} E^2 A \\right) \\epsilon$." }, { stepText: "The volume of the field decreases by $A \\epsilon$." }, { stepText: "Energy lost by field is $U = u \\times \\Delta Vol = (\\frac{\\epsilon_0}{2} E^2) (A \\epsilon)$." }, { stepText: "They are exactly equal! The energy in the vanished field was converted into the mechanical work of pulling the plates. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-9", title: "Prob 2.63a: Disk Potential Integration", description: "Advanced integration", icon: "Disc",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.63a", content: "**Problem:** Find potential on the rim of a circular disk of radius r using integration." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Set up arcs.**", interactiveSteps: [ { stepText: "Chop disk into circular arcs centered at the rim point." }, { stepText: "Integrate to get $V = \\frac{\\sigma r}{\\pi\\epsilon_0}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-10", title: "Prob 2.63b: Energy of Disk", description: "Building a disk", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.63b", content: "**Problem:** Use the rim potential to calculate the total energy of a uniformly charged disk." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Method of assembly.**", interactiveSteps: [ { stepText: "Add rings of charge $dq = \\sigma 2\\pi r dr$." }, { stepText: "Work is $dW = V(r) dq = (\\frac{\\sigma r}{\\pi\\epsilon_0}) (\\sigma 2\\pi r dr)$." }, { stepText: "Integrate from 0 to R. Result: $W = \\frac{8 R^3 \\sigma^2}{3 \\epsilon_0}$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-11", title: "Prob 2.64: Plotting Vector Fields", description: "Using software", icon: "CheckSquare",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.64", content: "**Problem:** Use software (like Mathematica or Python) to plot the vector field of a point charge." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Write the field function.**", interactiveSteps: [ { stepText: "Define E_x = x / (x^2+y^2)^{3/2}$ and E_y = y / (x^2+y^2)^{3/2}$." }, { stepText: "Feed this into a vector plotting function." }, { stepText: "You will see arrows pointing radially outward, shrinking in length as $1/r^2$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-12", title: "Prob 2.65: StreamPlots", description: "Drawing field lines", icon: "Activity",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.65", content: "**Problem:** Draw continuous field lines instead of distinct arrows." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use stream plotting.**", interactiveSteps: [ { stepText: "A stream plot connects the vector arrows head-to-tail to form continuous lines." }, { stepText: "For a point charge, they form perfect straight lines radiating from the origin." }, { stepText: "For a dipole, they loop from positive to negative. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-13", title: "Prob 2.66: Numerical Trajectories", description: "Simulating physics", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.66", content: "**Problem:** Write a program to calculate the trajectory of a charged particle in an E field." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use Euler or Verlet integration.**", interactiveSteps: [ { stepText: "Update position: $r_{new} = r + v dt$." }, { stepText: "Update velocity: $v_{new} = v + (qE/m) dt$." }, { stepText: "Loop this thousands of times to trace the path! Goal reached." } ] }
          ]
        },
        {
          id: "les-p5-14", title: "Prob 2.67: Kepler Problem", description: "Orbits of charges", icon: "RefreshCw",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.67", content: "**Problem:** Simulate a negative charge orbiting a positive charge." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Observe Conic Sections.**", interactiveSteps: [ { stepText: "Because Coulomb's law is $1/r^2$, it is mathematically identical to Gravity." }, { stepText: "Trajectories will be perfect ellipses, parabolas, or hyperbolas depending on initial velocity. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Orbit type", content: "If the total energy is negative, the orbit is:", options: [ { id: "A", text: "Hyperbolic (Escape)", isCorrect: false, explanation: "" }, { id: "B", text: "Elliptical (Bound)", isCorrect: true, explanation: "Negative energy means it is trapped in the potential well." } ] }
          ]
        },
        {
          id: "les-p5-15", title: "Ex 2.11 Recap: Parallel Plates", description: "Capacitance review", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.11 Recap", content: "**Problem:** Find the capacitance of a parallel-plate capacitor." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use $C = Q/V$.**", interactiveSteps: [ { stepText: "$E = \\sigma/\\epsilon_0 = Q/(A\\epsilon_0)$." }, { stepText: "$V = E d = Qd/(A\\epsilon_0)$." }, { stepText: "$C = Q/V = \\epsilon_0 A / d$. Goal reached!" } ] }
          ]
        },
        {
          id: "les-p5-16", title: "Ex 2.12 Recap: Spherical Shells", description: "Capacitance review", icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.12 Recap", content: "**Problem:** Find the capacitance of two concentric spherical shells, radii $a$ and $b$." },
            { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use $C = Q/V$.**", interactiveSteps: [ { stepText: "$E = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}$." }, { stepText: "$V = \\frac{Q}{4\\pi\\epsilon_0} (1/a - 1/b)$." }, { stepText: "$C = Q/V = 4\\pi\\epsilon_0 \\frac{ab}{b-a}$. Goal reached!" } ] },
            { id: "s2", type: "quiz", title: "Isolated sphere limit", content: "If you let the outer shell go to infinity ($b \\to \\infty$), what is the capacitance of a single isolated sphere of radius a?", options: [ { id: "A", text: "Zero", isCorrect: false, explanation: "" }, { id: "B", text: "$4\\pi\\epsilon_0 a$", isCorrect: true, explanation: "The b/(b-a) term approaches 1." } ] }
          ]
        }
      ]
    }
  ]
};