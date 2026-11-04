import { Section } from '../types';

export const SECTION_3_2: Section = {
  id: "section-3-2",
  title: "Section 2: Divergence, Curl of B & Vector Potential",
  description: "Ampère's Law, the magnetic vector potential, and magnetostatic boundary conditions.",
  color: "duo-red",
  units: [
    {
      id: "unit-12-ampere",
      title: "Divergence and Curl of B",
      description: "Ampère's Law and the absence of magnetic monopoles.",
      color: "duo-red",
      lessons: [
        {
          id: "les-12-1-div-b", title: "Divergence of B", description: "No magnetic monopoles", icon: "Minimize",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In electrostatics, electric field lines start on positive charges and end on negative charges. Where do magnetic field lines begin?", options: [ { id: "A", text: "North poles", isCorrect: false, explanation: "Magnetic field lines actually form continuous closed loops." }, { id: "B", text: "They don't begin or end anywhere", isCorrect: true, explanation: "Magnetic field lines form closed loops with no start or end." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What is the mathematical condition for a vector field having no 'sources' or 'sinks'?", options: [ { id: "A", text: "Curl is zero", isCorrect: false, explanation: "That means it's irrotational." }, { id: "B", text: "Divergence is zero", isCorrect: true, explanation: "Zero divergence means what flows into a region must flow out." } ] },
            { id: "s2", type: "theory", title: "The Divergence of B", content: "Applying the divergence operator to the Biot-Savart law yields a profound result:\n\n$\\nabla \\cdot \\mathbf{B} = 0$\n\nUnlike the electric field ($\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$), the divergence of the magnetic field is always exactly zero. This reflects the physical fact that there are no **magnetic monopoles** in classical electrodynamics. You cannot isolate a 'North' or 'South' pole; magnetic charges do not exist. Magnetic fields do not diverge away from a point; they curl around currents." },
            { id: "s3", type: "interactive_canvas", title: "Magnetic Field Lines", content: "Notice how magnetic field lines always close back on themselves. If you cut a magnet in half, you just get two smaller magnets, never an isolated pole.", interactiveCanvasId: "curl-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Gauss's Law for Magnetism", 
              content: "**Goal: Find the magnetic flux through a closed surface.**", 
              interactiveSteps: [
                {
                  stepText: "By the Divergence Theorem, the flux $\\oint \\mathbf{B} \\cdot d\\mathbf{a} = \\int (\\nabla \\cdot \\mathbf{B}) d\\tau$."
                },
                {
                  prompt: "Since $\\nabla \\cdot \\mathbf{B} = 0$, what is the total magnetic flux through ANY closed surface?",
                  options: [
                    { id: "A", text: "Zero", isCorrect: true, explanation: "The integral of zero is zero." },
                    { id: "B", text: "Depends on the current inside", isCorrect: false, explanation: "That's Ampere's law for a loop, not Gauss's law for a surface." }
                  ],
                  stepText: "The total magnetic flux through a closed surface is always exactly 0."
                },
                {
                  stepText: "This is the magnetic equivalent of Gauss's Law: Every magnetic field line that enters a closed volume must also exit it. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Magnetic Flux", content: "If a magnet is placed entirely inside a sealed plastic sphere, what is the net magnetic flux (in Weber) passing through the surface of the sphere?", numericAnswer: 0, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Maxwell's Equations", content: "Which of Maxwell's equations states that there are no magnetic monopoles?", options: [ { id: "A", text: "$\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$", isCorrect: false, explanation: "That's Ampere's Law." }, { id: "B", text: "$\\nabla \\cdot \\mathbf{B} = 0$", isCorrect: true, explanation: "Correct." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Because $\\nabla \\cdot \\mathbf{B} = 0$, magnetic field lines must always form closed ___.", blankAnswer: "loops" }
          ]
        },
        {
          id: "les-12-2-curl-b-wire", title: "Curl of B (Straight Wire)", description: "Line integral of B", icon: "RotateCw",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "For an electrostatic field, the line integral around a closed loop is zero. Is this true for a magnetic field?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Magnetic fields curl around currents!" }, { id: "B", text: "No", isCorrect: true, explanation: "The line integral of B around a current is non-zero." } ] },
            { id: "s2", type: "theory", title: "Line Integral of B", content: "Consider the magnetic field of an infinite straight wire: $B = \\frac{\\mu_0 I}{2\\pi s} \\mathbf{\\hat{\\phi}}$.\n\nIf we integrate $\\mathbf{B}$ around a circular path of radius $s$ centered on the wire, the field and the path $d\\mathbf{l}$ are parallel everywhere:\n$\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\oint \\left(\\frac{\\mu_0 I}{2\\pi s}\\right) s d\\phi = \\frac{\\mu_0 I}{2\\pi s} (2\\pi s) = \\mu_0 I$\n\nNotice that the radius $s$ completely cancels out! The line integral depends only on the current enclosed by the loop." },
            { id: "s3", type: "interactive_canvas", title: "Ampère's Loop", content: "Drag to change the radius of the loop. Notice that as the loop gets larger, B gets weaker, but the path gets longer in exact proportion, keeping the integral constant.", interactiveCanvasId: "amperes-law-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Path Independence of the Loop", 
              content: "**Goal: Understand why the shape of the loop doesn't matter.**", 
              interactiveSteps: [
                {
                  stepText: "We found $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I$ for a perfect circle."
                },
                {
                  prompt: "If we use a weird, wavy loop that still encloses the wire once, what happens to the radial movements ($ds$)?",
                  options: [
                    { id: "A", text: "They add to the integral", isCorrect: false, explanation: "B is strictly azimuthal (phi direction)." },
                    { id: "B", text: "They contribute zero to the dot product", isCorrect: true, explanation: "B dot ds = 0." }
                  ],
                  stepText: "Radial movements contribute nothing. The $\\phi$ movements must eventually add up to exactly $2\\pi$ to close the loop."
                },
                {
                  stepText: "Thus, ANY loop enclosing the wire yields exactly $\\mu_0 I$. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Loop outside", content: "If you draw a closed loop that does NOT enclose the current wire, what is $\\oint \\mathbf{B} \\cdot d\\mathbf{l}$?", options: [ { id: "A", text: "$\\mu_0 I$", isCorrect: false, explanation: "" }, { id: "B", text: "0", isCorrect: true, explanation: "The angle $\\phi$ goes out and comes back, netting zero." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The line integral of $\\mathbf{B}$ around a loop is proportional to the current ___ by that loop.", blankAnswer: "enclosed" }
          ]
        },
        {
          id: "les-12-3-ampere-integral", title: "Ampère's Law (Integral)", description: "The general theorem", icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "What is the magnetostatic equivalent of Gauss's Law for calculating fields using symmetry?", options: [ { id: "A", text: "Coulomb's Law", isCorrect: false, explanation: "" }, { id: "B", text: "Ampère's Law", isCorrect: true, explanation: "Ampère's law allows quick calculations of B for highly symmetric currents." } ] },
            { id: "s2", type: "theory", title: "Ampère's Law (Integral Form)", content: "We generalize the result from the straight wire to any bundle of steady currents. The line integral of $\\mathbf{B}$ around any closed loop is equal to $\\mu_0$ times the total current passing through the surface bounded by the loop:\n\n$\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}$\n\nThis is the integral version of **Ampère's Law**. The direction of positive current is determined by the right-hand rule with respect to the direction of integration around the loop." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Current Density", 
              content: "**Goal: Express $I_{enc}$ using current density $\\mathbf{J}$.**", 
              interactiveSteps: [
                {
                  stepText: "If the current is distributed over a volume, we describe it with the volume current density $\\mathbf{J}$."
                },
                {
                  prompt: "How do we find the total current $I_{enc}$ passing through a surface $\\mathcal{S}$ bounded by our loop?",
                  options: [
                    { id: "A", text: "$\\int_{\\mathcal{S}} \\mathbf{J} \\cdot d\\mathbf{a}$", isCorrect: true, explanation: "Current is the flux of J." },
                    { id: "B", text: "$\\int \\mathbf{J} d\\tau$", isCorrect: false, explanation: "That would integrate over a volume, not a surface." }
                  ],
                  stepText: "The enclosed current is $I_{enc} = \\int_{\\mathcal{S}} \\mathbf{J} \\cdot d\\mathbf{a}$."
                },
                {
                  stepText: "So Ampère's law becomes $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 \\int_{\\mathcal{S}} \\mathbf{J} \\cdot d\\mathbf{a}$. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Evaluate Integral", content: "A loop encloses three wires. Two wires carry 5 A upward, and one carries 3 A downward. What is $I_{enc}$ (assuming upward is positive)?", numericAnswer: 7, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Sign Convention", content: "How do you determine which direction of current is positive?", options: [ { id: "A", text: "Up is always positive", isCorrect: false, explanation: "It depends on the loop." }, { id: "B", text: "Use the Right-Hand Rule", isCorrect: true, explanation: "Fingers curl in the direction of the loop integral, thumb points to positive current." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Ampère's law relates the line integral of B to the total ___ enclosed by the loop.", blankAnswer: "current" }
          ]
        },
        {
          id: "les-12-4-ampere-diff", title: "Ampère's Law (Differential)", description: "Curl of B", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Which mathematical theorem converts a closed line integral into a surface integral of a curl?", options: [ { id: "A", text: "Divergence Theorem", isCorrect: false, explanation: "That converts a closed surface to a volume." }, { id: "B", text: "Stokes' Theorem", isCorrect: true, explanation: "Stokes' connects a loop to its bounded surface." } ] },
            { id: "s2", type: "theory", title: "Ampère's Law (Differential Form)", content: "We start with the integral form: $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 \\int_{\\mathcal{S}} \\mathbf{J} \\cdot d\\mathbf{a}$.\n\nApply Stokes' theorem to the left side: $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\int_{\\mathcal{S}} (\\nabla \\times \\mathbf{B}) \\cdot d\\mathbf{a}$.\n\nEquating the two surface integrals:\n$\\int_{\\mathcal{S}} (\\nabla \\times \\mathbf{B}) \\cdot d\\mathbf{a} = \\int_{\\mathcal{S}} \\mu_0 \\mathbf{J} \\cdot d\\mathbf{a}$\n\nSince this holds for *any* surface, the integrands must be identical:\n$\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Symmetry of Equations", 
              content: "**Goal: Compare Electrostatics and Magnetostatics.**", 
              interactiveSteps: [
                {
                  stepText: "In electrostatics, we found $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$ and $\\nabla \\times \\mathbf{E} = 0$."
                },
                {
                  prompt: "In magnetostatics, what are the corresponding equations for $\\mathbf{B}$?",
                  options: [
                    { id: "A", text: "$\\nabla \\cdot \\mathbf{B} = 0$ and $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$", isCorrect: true, explanation: "Exactly. The roles of div and curl are somewhat flipped." },
                    { id: "B", text: "$\\nabla \\cdot \\mathbf{B} = \\mu_0 \\mathbf{J}$ and $\\nabla \\times \\mathbf{B} = 0$", isCorrect: false, explanation: "Magnetic fields curl; they don't diverge." }
                  ],
                  stepText: "The equations are $\\nabla \\cdot \\mathbf{B} = 0$ and $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$."
                },
                {
                  stepText: "These represent the steady-state Maxwell's equations. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "What produces Curl?", content: "According to $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$, what physically creates the 'swirl' or curl of a magnetic field?", options: [ { id: "A", text: "Magnetic charges", isCorrect: false, explanation: "They don't exist." }, { id: "B", text: "Local current density", isCorrect: true, explanation: "J is the source of the curl of B." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The differential form of Ampère's law states that the ___ of B equals $\\mu_0 \\mathbf{J}$.", blankAnswer: "curl" }
          ]
        },
        {
          id: "les-12-5-ampere-applications", title: "Applying Ampère's Law", description: "When is it useful?", icon: "Target",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Is Ampère's Law always true for steady currents?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "It is a fundamental law of magnetostatics." }, { id: "B", text: "No, only for symmetrical ones", isCorrect: false, explanation: "It is always true, just not always USEFUL." } ] },
            { id: "s2", type: "theory", title: "When to Use Ampère's Law", content: "Like Gauss's law, Ampère's law is always true, but it is only *useful* for calculating the magnetic field when symmetry allows us to pull $|\\mathbf{B}|$ outside the integral.\n\nThe current configurations that can be handled by Ampère's law are very limited:\n1. **Infinite straight lines** (cylindrical symmetry).\n2. **Infinite planes** (planar symmetry).\n3. **Infinite solenoids**.\n4. **Toroids**.\n\nIf the problem lacks these specific symmetries, you must fall back on the Biot-Savart Law." },
            { id: "s6", type: "quiz", title: "Finite Wire", content: "Can you use Ampère's law to easily find the magnetic field of a short, 10 cm wire?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "The field is not constant along an Amperian loop." }, { id: "B", text: "No", isCorrect: true, explanation: "It lacks infinite cylindrical symmetry. Use Biot-Savart." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "To use Ampère's law effectively, we must draw an ___ loop where the field is constant.", blankAnswer: "Amperian" }
          ]
        },
        {
          id: "les-12-6-plane-current", title: "Example: Infinite Plane", description: "Surface current K", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Example 5.8", content: "**Problem:** Find the magnetic field of an infinite uniform surface current $\\mathbf{K} = K\\mathbf{\\hat{x}}$, flowing over the xy plane.\n\n*Hint:* Use an Amperian loop perpendicular to the current (in the yz plane)." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Apply Ampère's law to a rectangular loop.**", 
              interactiveSteps: [
                {
                  prompt: "By symmetry, which direction must $\\mathbf{B}$ point above the plane (if current is in +x)?",
                  options: [
                    { id: "A", text: "$-\\mathbf{\\hat{y}}$", isCorrect: true, explanation: "Right hand rule: thumb in +x, fingers curl pointing -y above the plane." },
                    { id: "B", text: "$\\mathbf{\\hat{z}}$", isCorrect: false, explanation: "B must be perpendicular to K and the normal." }
                  ],
                  stepText: "Above the plane $\\mathbf{B} = -B\\mathbf{\\hat{y}}$. Below the plane, $\\mathbf{B} = +B\\mathbf{\\hat{y}}$."
                },
                {
                  stepText: "Draw a rectangular Amperian loop of width $l$ parallel to the y-axis, extending equally above and below the plane."
                },
                {
                  stepText: "The integral $\\oint \\mathbf{B} \\cdot d\\mathbf{l}$ gets contributions only from the top and bottom horizontal segments: $B l + B l = 2 B l$."
                },
                {
                  stepText: "The enclosed current is $I_{enc} = K l$."
                },
                {
                  stepText: "Equating: $2 B l = \\mu_0 K l \\implies B = \\frac{\\mu_0 K}{2}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Distance Dependence", content: "Does the magnetic field of an infinite uniform surface current depend on the distance $z$ from the plane?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Like the electric field of an infinite charged plane, it is uniform everywhere." } ] }
          ]
        },
        {
          id: "les-12-7-solenoid", title: "Example: Infinite Solenoid", description: "Magnetic field of a coil", icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Example 5.9", content: "**Problem:** Find the magnetic field of a very long (infinite) solenoid, consisting of $n$ closely wound turns per unit length, carrying a steady current $I$.\n\n*Hint:* The field outside an infinite solenoid is zero. Use a rectangular loop partly inside, partly outside." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Apply Ampère's law to find B inside.**", 
              interactiveSteps: [
                {
                  stepText: "The magnetic field inside runs parallel to the axis (let's say the z-axis). $\\mathbf{B} = B \\mathbf{\\hat{z}}$."
                },
                {
                  stepText: "Draw a rectangular Amperian loop of length $L$ along the z-axis. One side is inside the solenoid, the other is outside."
                },
                {
                  prompt: "Since $B=0$ outside, and the radial sides are perpendicular to B, what is $\\oint \\mathbf{B} \\cdot d\\mathbf{l}$?",
                  options: [
                    { id: "A", text: "$B L$", isCorrect: true, explanation: "Only the inner vertical side contributes." },
                    { id: "B", text: "$2 B L$", isCorrect: false, explanation: "The outer side has B=0." }
                  ],
                  stepText: "The line integral is exactly $B L$."
                },
                {
                  stepText: "The number of turns enclosed by the loop is $n L$. So $I_{enc} = n L I$."
                },
                {
                  stepText: "Equating: $B L = \\mu_0 (n L I) \\implies B = \\mu_0 n I$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "numerical", title: "Calculate B", content: "A solenoid has $n = 1000$ turns per meter and carries a current $I = 2$ A. Using $\\mu_0 \\approx 1.25 \\times 10^{-6}$, what is the magnetic field inside in milliTeslas (mT)?", numericAnswer: 2.5, numericTolerance: 0.1 },
            { id: "s3", type: "quiz", title: "Uniformity", content: "Is the field stronger near the center axis or near the coils inside an ideal infinite solenoid?", options: [ { id: "A", text: "Stronger near the coils", isCorrect: false, explanation: "" }, { id: "B", text: "It is perfectly uniform everywhere inside", isCorrect: true, explanation: "The formula B = mu0 n I has no dependence on the radial distance." } ] }
          ]
        },
        {
          id: "les-12-8-toroid", title: "Example: The Toroid", description: "A donut shaped coil", icon: "Circle",
          slides: [
            { id: "s0", type: "example_q", title: "Example 5.10", content: "**Problem:** Find the magnetic field inside a toroidal coil (a donut) consisting of $N$ total turns carrying current $I$.\n\n*Hint:* Use a circular Amperian loop of radius $s$ inside the donut." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Apply Ampère's law to the toroid.**", 
              interactiveSteps: [
                {
                  stepText: "By symmetry, the magnetic field is purely circumferential ($\\mathbf{B} = B \\mathbf{\\hat{\\phi}}$)."
                },
                {
                  stepText: "Draw a circular Amperian loop of radius $s$ inside the toroid."
                },
                {
                  prompt: "What is the line integral $\\oint \\mathbf{B} \\cdot d\\mathbf{l}$?",
                  options: [
                    { id: "A", text: "$B (2\\pi s)$", isCorrect: true, explanation: "B is constant along the circle of circumference 2*pi*s." },
                    { id: "B", text: "$B s$", isCorrect: false, explanation: "Don't forget 2*pi." }
                  ],
                  stepText: "$\\oint \\mathbf{B} \\cdot d\\mathbf{l} = B (2\\pi s)$."
                },
                {
                  stepText: "The total current enclosed by this loop is exactly $N I$ (since it encloses all $N$ loops passing through the center hole)."
                },
                {
                  stepText: "Equating: $B (2\\pi s) = \\mu_0 N I \\implies B = \\frac{\\mu_0 N I}{2\\pi s}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Field Outside", content: "If you draw an Amperian loop completely OUTSIDE the toroid (enclosing the whole donut), what is the enclosed current?", options: [ { id: "A", text: "N I", isCorrect: false, explanation: "For every wire going down, one comes up." }, { id: "B", text: "Zero", isCorrect: true, explanation: "The current goes down the inner edge and up the outer edge, cancelling perfectly. Thus B=0 outside a toroid." } ] }
          ]
        }
      ]
    },
    {
      id: "unit-13-vector-potential",
      title: "Magnetic Vector Potential",
      description: "Introducing A, Coulomb gauge, and boundary conditions.",
      color: "duo-red",
      lessons: [
        {
          id: "les-13-1-intro-A", title: "Introduction to Vector Potential", description: "B = Curl A", icon: "Wind",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In electrostatics, because $\\nabla \\times \\mathbf{E} = 0$, we could define $E$ as the gradient of a scalar potential $V$. Can we do this for $\\mathbf{B}$?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "The curl of B is not generally zero (Ampere's law)." }, { id: "B", text: "No", isCorrect: true, explanation: "Because $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} \\neq 0$." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "However, we DO know that $\\nabla \\cdot \\mathbf{B} = 0$. What vector identity can we exploit here?", options: [ { id: "A", text: "The divergence of a curl is always zero", isCorrect: true, explanation: "$\\nabla \\cdot (\\nabla \\times \\mathbf{A}) = 0$." }, { id: "B", text: "The curl of a gradient is always zero", isCorrect: false, explanation: "This was used for E = -Grad V." } ] },
            { id: "s2", type: "theory", title: "The Magnetic Vector Potential", content: "Because the divergence of $\\mathbf{B}$ is everywhere zero ($\\nabla \\cdot \\mathbf{B} = 0$), a fundamental theorem of vector calculus guarantees that $\\mathbf{B}$ can be expressed as the **curl** of another vector field.\n\nWe define the **Magnetic Vector Potential** $\\mathbf{A}$ such that:\n$\\mathbf{B} = \\nabla \\times \\mathbf{A}$\n\nUnlike the electric potential $V$, which is a scalar, the magnetic potential $\\mathbf{A}$ is a vector quantity. It simplifies some calculations and plays a massive role in quantum mechanics and advanced electrodynamics." },
            { id: "s6", type: "quiz", title: "Identity check", content: "By setting $\\mathbf{B} = \\nabla \\times \\mathbf{A}$, which of Maxwell's equations is automatically satisfied?", options: [ { id: "A", text: "$\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$", isCorrect: false, explanation: "We still need to solve for this." }, { id: "B", text: "$\\nabla \\cdot \\mathbf{B} = 0$", isCorrect: true, explanation: "Because Div(Curl(A)) is mathematically identically zero." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The magnetic field $\\mathbf{B}$ is defined as the ___ of the vector potential $\\mathbf{A}$.", blankAnswer: "curl" }
          ]
        },
        {
          id: "les-13-2-coulomb-gauge", title: "Gauge Freedom", description: "Choosing Div A = 0", icon: "Sliders",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In electrostatics, we could add any constant to $V$ without changing $\\mathbf{E}$. What can we add to $\\mathbf{A}$ without changing $\\mathbf{B}$?", options: [ { id: "A", text: "A constant vector", isCorrect: false, explanation: "Yes, but we can do even more." }, { id: "B", text: "The gradient of any scalar function", isCorrect: true, explanation: "Because the curl of a gradient is zero!" } ] },
            { id: "s2", type: "theory", title: "Gauge Transformations", content: "The definition $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ specifies the *curl* of $\\mathbf{A}$, but it says absolutely nothing about its *divergence*. We are free to specify $\\nabla \\cdot \\mathbf{A}$ however we like to make the math easier.\n\nIf we have an $\\mathbf{A}_0$, we can create a new $\\mathbf{A} = \\mathbf{A}_0 + \\nabla \\lambda$. \nThe curl remains the same: $\\nabla \\times \\mathbf{A} = \\nabla \\times \\mathbf{A}_0 + \\nabla \\times (\\nabla \\lambda) = \\mathbf{B} + 0 = \\mathbf{B}$.\n\nThis freedom to choose $\\lambda$ is called **Gauge Freedom**. In magnetostatics, the smartest choice is to set:\n$\\nabla \\cdot \\mathbf{A} = 0$\nThis is known as the **Coulomb Gauge**." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Poisson's Eq for A", 
              content: "**Goal: See why the Coulomb gauge is so smart.**", 
              interactiveSteps: [
                {
                  stepText: "Plug $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ into Ampère's Law: $\\nabla \\times (\\nabla \\times \\mathbf{A}) = \\mu_0 \\mathbf{J}$."
                },
                {
                  stepText: "Use the vector identity: $\\nabla \\times (\\nabla \\times \\mathbf{A}) = \\nabla(\\nabla \\cdot \\mathbf{A}) - \\nabla^2 \\mathbf{A}$."
                },
                {
                  prompt: "If we choose the Coulomb gauge ($\\nabla \\cdot \\mathbf{A} = 0$), what does this equation collapse into?",
                  options: [
                    { id: "A", text: "$\\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}$", isCorrect: true, explanation: "The gradient of the divergence vanishes." },
                    { id: "B", text: "$\\nabla^2 \\mathbf{A} = 0$", isCorrect: false, explanation: "Ampere's law has a source J." }
                  ],
                  stepText: "It becomes $\\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}$."
                },
                {
                  stepText: "This is exactly Poisson's equation, just applied to all three components of A! Goal reached."
                }
              ]
            }
          ]
        },
        {
          id: "les-13-3-integral-form-A", title: "Calculating A", description: "The integral solution", icon: "Target",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "We know the solution to Poisson's equation $\\nabla^2 V = -\\rho/\\epsilon_0$ is $V = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho}{\\cal{r}} d\\tau$. By direct analogy, what is the solution for $\\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}$?", options: [ { id: "A", text: "$\\mathbf{A} = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{J}}{\\cal{r}} d\\tau$", isCorrect: true, explanation: "Just swap the constants and source variables." }, { id: "B", text: "$\\mathbf{A} = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{J}}{\\cal{r}^2} d\\tau$", isCorrect: false, explanation: "Potential uses 1/r, field uses 1/r^2." } ] },
            { id: "s2", type: "theory", title: "Integral Formula for A", content: "Assuming the current density $\\mathbf{J}$ goes to zero at infinity, the solution to the vector Poisson equation ($\\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}$) is exactly analogous to the electric potential:\n\n$\\mathbf{A}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{J}(\\mathbf{r}')}{\\cal{r}} d\\tau'$\n\nNotice that the vector $\\mathbf{A}$ tends to point in the same direction as the current $\\mathbf{J}$ that produces it! (A current in the +z direction produces an A field in the +z direction)." },
            { id: "s6", type: "quiz", title: "Comparison to Biot-Savart", content: "Why might evaluating $\\mathbf{A}$ be easier than evaluating $\\mathbf{B}$ directly from Biot-Savart?", options: [ { id: "A", text: "There is no cross product in the integral for A.", isCorrect: true, explanation: "Cross products in integrals are messy because they introduce changing unit vectors." }, { id: "B", text: "A is a scalar.", isCorrect: false, explanation: "A is still a vector." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The vector potential $\\mathbf{A}$ generally points in the same direction as the ___ $\\mathbf{J}$.", blankAnswer: "current" }
          ]
        },
        {
          id: "les-13-4-line-surface-A", title: "A for Line & Surface Currents", description: "1D and 2D currents", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "To adapt the formula to a surface current, we replace $\\mathbf{J} d\\tau'$ with:", options: [ { id: "A", text: "$\\mathbf{K} da'$", isCorrect: true, explanation: "Surface current density times area element." }, { id: "B", text: "$\\mathbf{I} dl'$", isCorrect: false, explanation: "That's for a line current." } ] },
            { id: "s2", type: "theory", title: "A for Lines and Surfaces", content: "Using our standard dictionary for current elements, we can write the vector potential for line and surface currents:\n\n**Line Current:**\n$\\mathbf{A}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{I}}{\\cal{r}} dl' = \\frac{\\mu_0 I}{4\\pi} \\int \\frac{1}{\\cal{r}} d\\mathbf{l}'$\n\n**Surface Current:**\n$\\mathbf{A}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{K}(\\mathbf{r}')}{\\cal{r}} da'$\n\nRemember that while these integrals look simpler than Biot-Savart, $\\mathbf{A}$ is still a vector, so you must integrate each Cartesian component separately." },
            { id: "s6", type: "quiz", title: "When the integral fails", content: "What happens to these integrals if the current extends to infinity (like an infinite straight wire)?", options: [ { id: "A", text: "They converge to zero", isCorrect: false, explanation: "" }, { id: "B", text: "They diverge (blow up)", isCorrect: true, explanation: "Just like V for an infinite line charge, you can't use these integrals if the source goes to infinity. You must use Ampere's Law for B, then deduce A." } ] }
          ]
        },
        {
          id: "les-13-5-solenoid-A", title: "Example: Vector Potential of Solenoid", description: "Finding A from B", icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Example 5.12", content: "**Problem:** Find the vector potential of an infinite solenoid with $n$ turns per length, radius $R$, and current $I$.\n\n*Hint:* We cannot use the integral formula because the current goes to infinity. But notice that $\\oint \\mathbf{A} \\cdot d\\mathbf{l} = \\int (\\nabla \\times \\mathbf{A}) \\cdot d\\mathbf{a} = \\int \\mathbf{B} \\cdot d\\mathbf{a} = \\Phi_B$. Use this like Ampère's law!" },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution: Inside", 
              content: "**Goal: Find A inside the solenoid ($s < R$).**", 
              interactiveSteps: [
                {
                  stepText: "Since current is azimuthal ($\\mathbf{\\hat{\\phi}}$), $\\mathbf{A}$ is also azimuthal. Draw a circular loop of radius $s$ inside."
                },
                {
                  prompt: "What is $\\oint \\mathbf{A} \\cdot d\\mathbf{l}$ for this loop?",
                  options: [
                    { id: "A", text: "$A (2\\pi s)$", isCorrect: true, explanation: "A is constant along the circle." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "$\\oint \\mathbf{A} \\cdot d\\mathbf{l} = A (2\\pi s)$."
                },
                {
                  stepText: "This must equal the magnetic flux $\\Phi_B$ through the loop. The field inside is uniform $B = \\mu_0 n I$."
                },
                {
                  stepText: "Flux $\\Phi_B = B(\\pi s^2) = \\mu_0 n I \\pi s^2$."
                },
                {
                  stepText: "Equating: $A(2\\pi s) = \\mu_0 n I \\pi s^2 \\implies \\mathbf{A} = \\frac{\\mu_0 n I}{2} s \\mathbf{\\hat{\\phi}}$. Goal reached!"
                }
              ]
            },
            { 
              id: "s2", 
              type: "solution", 
              title: "Interactive Solution: Outside", 
              content: "**Goal: Find A outside the solenoid ($s > R$).**", 
              interactiveSteps: [
                {
                  stepText: "Draw a circular loop of radius $s > R$. The left side is still $A(2\\pi s)$."
                },
                {
                  prompt: "What is the total magnetic flux $\\Phi_B$ through this larger loop?",
                  options: [
                    { id: "A", text: "$\\mu_0 n I (\\pi s^2)$", isCorrect: false, explanation: "The B field is ZERO outside the solenoid (r > R)!" },
                    { id: "B", text: "$\\mu_0 n I (\\pi R^2)$", isCorrect: true, explanation: "Flux only exists in the core (up to radius R)." }
                  ],
                  stepText: "The flux is capped at $\\mu_0 n I \\pi R^2$."
                },
                {
                  stepText: "Equating: $A(2\\pi s) = \\mu_0 n I \\pi R^2 \\implies \\mathbf{A} = \\frac{\\mu_0 n I R^2}{2 s} \\mathbf{\\hat{\\phi}}$. Goal reached!"
                }
              ]
            },
            { id: "s3", type: "quiz", title: "A Quantum Surprise", content: "Outside the solenoid, $\\mathbf{B} = 0$. Is $\\mathbf{A}$ zero outside?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Look at our result: it falls off as 1/s, but it's not zero." }, { id: "B", text: "No, $\\mathbf{A}$ is non-zero even where $\\mathbf{B}$ is zero!", isCorrect: true, explanation: "This leads to the famous Aharonov-Bohm effect in quantum mechanics." } ] }
          ]
        },
        {
          id: "les-13-6-bc-normal-B", title: "Boundary Conditions: Normal B", description: "Continuity of perpendicular B", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In electrostatics, the normal component of E jumps by $\\sigma/\\epsilon_0$ because $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$. What is the divergence of B?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "$\\nabla \\cdot \\mathbf{B} = 0$ everywhere." }, { id: "B", text: "$\\mu_0 J$", isCorrect: false, explanation: "That's the curl." } ] },
            { id: "s2", type: "theory", title: "Continuity of Normal B", content: "Because $\\nabla \\cdot \\mathbf{B} = 0$, applying the divergence theorem to a thin Gaussian pillbox straddling a surface current $\\mathbf{K}$ yields:\n\n$\\oint \\mathbf{B} \\cdot d\\mathbf{a} = 0$\n\nAs the pillbox thickness shrinks to zero, the flux through the sides vanishes. The flux through the top and bottom must cancel out.\n\nTherefore, the component of $\\mathbf{B}$ perpendicular to the surface is **always continuous**:\n\n$B^{\\perp}_{above} = B^{\\perp}_{below}$" },
            { id: "s3", type: "interactive_canvas", title: "Normal B Continuous", content: "No matter what surface current exists, the magnetic field lines cannot end on it. They must pass continuously through the boundary.", interactiveCanvasId: "mag-boundary-interactive" },
            { id: "s6", type: "quiz", title: "Magnetic Monopoles", content: "If magnetic monopoles DID exist and accumulated on a surface, what would happen to $B^{\\perp}$?", options: [ { id: "A", text: "It would still be continuous.", isCorrect: false, explanation: "" }, { id: "B", text: "It would be discontinuous.", isCorrect: true, explanation: "Just like electric charges cause E to jump, magnetic charges would cause B to jump." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Because there are no magnetic monopoles, the ___ component of B is always continuous.", blankAnswer: "normal" }
          ]
        },
        {
          id: "les-13-7-bc-tangential-B", title: "Boundary Conditions: Tangential B", description: "Discontinuity at surface currents", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "For a uniform surface current $\\mathbf{K}$, we found the field is $+\\frac{\\mu_0 K}{2}$ on one side and $-\\frac{\\mu_0 K}{2}$ on the other. What is the total jump?", options: [ { id: "A", text: "Zero", isCorrect: false, explanation: "They are in opposite directions." }, { id: "B", text: "$\\mu_0 K$", isCorrect: true, explanation: "$K/2 - (-K/2) = K$." } ] },
            { id: "s2", type: "theory", title: "Discontinuity of Tangential B", content: "While the normal component of B is continuous, the tangential component is discontinuous across a surface current $\\mathbf{K}$.\n\nBy applying Ampère's law ($\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}$) to a thin rectangular loop straddling the surface, we find that the parallel component of B jumps:\n\n$B^{\\parallel}_{above} - B^{\\parallel}_{below} = \\mu_0 K$\n\nVectorially, this is written combining both normal and tangential parts as:\n$\\mathbf{B}_{above} - \\mathbf{B}_{below} = \\mu_0 (\\mathbf{K} \\times \\mathbf{\\hat{n}})$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Tangential Jump", 
              content: "**Goal: Derive the tangential boundary condition.**", 
              interactiveSteps: [
                {
                  stepText: "Draw a narrow Amperian loop of length $l$ parallel to the surface, perpendicular to the current flow $\\mathbf{K}$."
                },
                {
                  stepText: "As the loop height goes to zero, the vertical sides contribute nothing."
                },
                {
                  prompt: "What is the line integral from the top and bottom edges?",
                  options: [
                    { id: "A", text: "$(B^{\\parallel}_{above} - B^{\\parallel}_{below}) l$", isCorrect: true, explanation: "Top goes forward, bottom goes backward." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The integral is $(B^{\\parallel}_{above} - B^{\\parallel}_{below}) l$."
                },
                {
                  stepText: "The enclosed current is $I_{enc} = K l$. Thus $(B^{\\parallel}_{above} - B^{\\parallel}_{below}) l = \\mu_0 K l$. Canceling $l$ gives the result. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Parallel to Current?", content: "What if you draw the Amperian loop parallel to the current flow $\\mathbf{K}$?", options: [ { id: "A", text: "The enclosed current is zero.", isCorrect: true, explanation: "Current flows ALONG the loop, not THROUGH it." }, { id: "B", text: "The enclosed current is K l.", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The tangential component of the magnetic field jumps by an amount proportional to the surface ___ density.", blankAnswer: "current" }
          ]
        },
        {
          id: "les-13-8-bc-A", title: "Boundary Conditions on A", description: "Continuity of Vector Potential", icon: "Waves",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In electrostatics, the electric field E is discontinuous at a surface charge. Is the potential V discontinuous there?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "V is an integral, so it remains continuous." }, { id: "B", text: "No, V is continuous.", isCorrect: true, explanation: "Correct." } ] },
            { id: "s2", type: "theory", title: "Boundary Conditions on A", content: "Like the scalar potential in electrostatics, the magnetic vector potential $\\mathbf{A}$ is **continuous** across any boundary:\n\n$\\mathbf{A}_{above} = \\mathbf{A}_{below}$\n\nThis holds because $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ and $\\nabla \\cdot \\mathbf{A} = 0$ (Coulomb gauge). Since B is finite, the derivatives of A must be finite, meaning A itself cannot have sudden jumps.\n\nHowever, the *derivative* of A inherits the discontinuity of B." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Derivative Jump", 
              content: "**Goal: Find the boundary condition for the derivative of A.**", 
              interactiveSteps: [
                {
                  stepText: "We know $\\mathbf{B}_{above} - \\mathbf{B}_{below} = \\mu_0 (\\mathbf{K} \\times \\mathbf{\\hat{n}})$."
                },
                {
                  stepText: "Since $\\mathbf{A}$ is continuous, any discontinuity in $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ must come from the derivatives of $\\mathbf{A}$ perpendicular to the surface."
                },
                {
                  prompt: "This is mathematically identical to the scalar case where $\\frac{\\partial V_{above}}{\\partial n} - \\frac{\\partial V_{below}}{\\partial n} = -\\frac{\\sigma}{\\epsilon_0}$. What is the magnetic equivalent for A?",
                  options: [
                    { id: "A", text: "$\\frac{\\partial \\mathbf{A}_{above}}{\\partial n} - \\frac{\\partial \\mathbf{A}_{below}}{\\partial n} = -\\mu_0 \\mathbf{K}$", isCorrect: true, explanation: "Just swap the constants and source terms." },
                    { id: "B", text: "$\\frac{\\partial \\mathbf{A}_{above}}{\\partial n} = 0$", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The normal derivative of A jumps by $-\\mu_0 \\mathbf{K}$. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Significance of Continuity", content: "The fact that A is continuous makes it useful for what mathematical technique?", options: [ { id: "A", text: "Solving differential equations across boundaries", isCorrect: true, explanation: "Matching boundary conditions is essential for solving Laplace/Poisson equations." }, { id: "B", text: "Nothing, it's useless.", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "While B has a discontinuity at a surface current, the vector potential A is always ___.", blankAnswer: "continuous" }
          ]
        },
        {
          id: "les-13-9-multipole-A", title: "Multipole Expansion of A", description: "Far field approximations", icon: "ZoomIn",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In electrostatics, the multipole expansion represents the potential as a series. What is the first term (1/r) called?", options: [ { id: "A", text: "Dipole", isCorrect: false, explanation: "Dipole is 1/r^2." }, { id: "B", text: "Monopole", isCorrect: true, explanation: "The monopole term dominates at large distances." } ] },
            { id: "s2", type: "theory", title: "Multipole Expansion of Vector Potential", content: "If you want an approximate formula for the vector potential of a localized current loop far away, we use a multipole expansion of $\\frac{1}{\\cal{r}}$.\n\n$\\mathbf{A}(\\mathbf{r}) = \\frac{\\mu_0 I}{4\\pi} \\oint \\frac{1}{\\cal{r}} d\\mathbf{l}' = \\frac{\\mu_0 I}{4\\pi} \\sum_{n=0}^{\\infty} \\frac{1}{r^{n+1}} \\oint (r')^n P_n(\\cos\\alpha) d\\mathbf{l}'$\n\nWhere $P_n$ are Legendre polynomials. \n- $n=0$: Monopole term ($1/r$)\n- $n=1$: Dipole term ($1/r^2$)\n- $n=2$: Quadrupole term ($1/r^3$)" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: The Magnetic Monopole", 
              content: "**Goal: Evaluate the magnetic monopole term.**", 
              interactiveSteps: [
                {
                  stepText: "The $n=0$ monopole term is $\\mathbf{A}_{mono} = \\frac{\\mu_0 I}{4\\pi r} \\oint d\\mathbf{l}'$."
                },
                {
                  prompt: "What is the integral of $d\\mathbf{l}'$ around a closed loop?",
                  options: [
                    { id: "A", text: "The circumference", isCorrect: false, explanation: "That's the integral of the *scalar* dl'." },
                    { id: "B", text: "Zero", isCorrect: true, explanation: "The total vector displacement around a closed loop is zero." }
                  ],
                  stepText: "$\\oint d\\mathbf{l}' = 0$."
                },
                {
                  stepText: "Therefore, the magnetic monopole term is ALWAYS zero! This mathematically reflects the physical fact that there are no magnetic monopoles. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Dominant Term", content: "Since the monopole term is zero, which term usually dominates the magnetic field of a current loop at large distances?", options: [ { id: "A", text: "Quadrupole", isCorrect: false, explanation: "" }, { id: "B", text: "Dipole", isCorrect: true, explanation: "The 1/r^2 term is the lowest non-vanishing term." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Because $\\oint d\\mathbf{l}' = 0$, there is no magnetic ___ term in the expansion.", blankAnswer: "monopole" }
          ]
        },
        {
          id: "les-13-10-magnetic-dipole", title: "Magnetic Dipole Moment", description: "m = I a", icon: "Navigation",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "An electric dipole consists of two opposite charges. A magnetic dipole is best modeled as:", options: [ { id: "A", text: "Two opposite magnetic monopoles", isCorrect: false, explanation: "Monopoles don't exist." }, { id: "B", text: "A small loop of current", isCorrect: true, explanation: "A current loop creates a dipole field." } ] },
            { id: "s2", type: "theory", title: "Magnetic Dipole Moment", content: "Since the monopole term is zero, the dominant term is the Dipole:\n$\\mathbf{A}_{dip}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\frac{\\mathbf{m} \\times \\mathbf{\\hat{r}}}{r^2}$\n\nHere, $\\mathbf{m}$ is the **magnetic dipole moment** of the loop:\n$\\mathbf{m} \\equiv I \\int d\\mathbf{a} = I \\mathbf{a}$\n\nWhere $\\mathbf{a}$ is the 'vector area' of the loop. Its magnitude is the area, and its direction is determined by the right-hand rule (fingers curl with current, thumb points to $\\mathbf{a}$)." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Independence of Origin", 
              content: "**Goal: Understand a unique property of the magnetic dipole.**", 
              interactiveSteps: [
                {
                  stepText: "In electrostatics, the electric dipole moment $\\mathbf{p} = \\sum q_i \\mathbf{r}_i'$ depends on the choice of origin UNLESS the total net charge (monopole) is zero."
                },
                {
                  prompt: "What is the total 'magnetic charge' (magnetic monopole moment) of any current loop?",
                  options: [
                    { id: "A", text: "Zero", isCorrect: true, explanation: "As proven in the previous lesson." },
                    { id: "B", text: "Depends on the current", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The magnetic monopole moment is strictly zero."
                },
                {
                  stepText: "Because the monopole moment is always zero, the magnetic dipole moment $\\mathbf{m} = I \\mathbf{a}$ is ALWAYS independent of the choice of origin!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Calculate Dipole Moment", content: "A circular wire loop of radius 2 meters carries a 3 Ampere current. What is the magnitude of its magnetic dipole moment (in A·m²)? (Use $\\pi \\approx 3.14$, round to 1 decimal place)", numericAnswer: 37.7, numericTolerance: 0.2 },
            { id: "s6", type: "quiz", title: "Dipole Field Similarity", content: "Far away, how does the structure of the magnetic field of a current loop compare to the electric field of two opposite charges?", options: [ { id: "A", text: "It is completely different.", isCorrect: false, explanation: "" }, { id: "B", text: "It is mathematically identical in structure.", isCorrect: true, explanation: "Both yield the classic 'dipole' field shape." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The magnetic dipole moment is the product of the current and the vector ___ of the loop.", blankAnswer: "area" }
          ]
        }
      ]
    },
    {
      id: "unit-14-summary-3-2",
      title: "Section Summary",
      description: "Recap of Divergence, Curl, Ampère's Law, and Vector Potential.",
      color: "duo-green",
      lessons: [
        {
          id: "les-14-1-recap",
          title: "Ampère's Law & A Recap",
          description: "Review of Units 12 & 13",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "Because there are no magnetic monopoles, which of the following is true?", options: [ { id: "A", text: "$\\nabla \\times \\mathbf{B} = 0$", isCorrect: false, explanation: "That's for electrostatics." }, { id: "B", text: "$\\nabla \\cdot \\mathbf{B} = 0$", isCorrect: true, explanation: "Divergence of B is zero everywhere." } ] },
            { id: "s1", type: "quiz", title: "Knowledge Check 2", content: "Which boundary condition states that $\\mathbf{B}$ cannot 'jump' through a surface?", options: [ { id: "A", text: "$B^{\\perp}$ is continuous", isCorrect: true, explanation: "Normal B is continuous." }, { id: "B", text: "$B^{\\parallel}$ is continuous", isCorrect: false, explanation: "Tangential B jumps by $\\mu_0 K$." } ] },
            { id: "s2", type: "theory", title: "Section 2 Summary", content: "**Ampère's Law:** The fundamental equations of magnetostatics are $\\nabla \\cdot \\mathbf{B} = 0$ (no monopoles) and $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$ (Ampère's law). The integral form $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}$ is extremely powerful for calculating fields in highly symmetric systems (infinite wires, planes, solenoids, toroids).\n\n**Vector Potential:** Because $\\nabla \\cdot \\mathbf{B} = 0$, we can express $\\mathbf{B}$ as the curl of a vector potential: $\\mathbf{B} = \\nabla \\times \\mathbf{A}$. Choosing the Coulomb gauge ($\\nabla \\cdot \\mathbf{A} = 0$) allows us to solve for $\\mathbf{A}$ using a Poisson-like integral $\\mathbf{A} = \\frac{\\mu_0}{4\\pi}\\int \\frac{\\mathbf{J}}{\\cal{r}} d\\tau$. Finally, at a surface current $\\mathbf{K}$, the tangential component of $\\mathbf{B}$ is discontinuous, while the normal component of $\\mathbf{B}$ and the entire vector potential $\\mathbf{A}$ remain continuous." }
          ]
        }
      ]
    }
  ]
};