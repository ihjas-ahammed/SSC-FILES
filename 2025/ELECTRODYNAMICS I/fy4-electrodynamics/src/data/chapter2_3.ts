import { Section } from '../types';

export const SECTION_2_3: Section = {
  id: "section-2-3",
  title: "Section 3: Electric Potential & Boundary Conditions",
  description: "Electric Potential, Poisson's and Laplace's Equations, and Electrostatic Boundary Conditions.",
  color: "duo-blue",
  units: [
    {
      id: "unit-7-potential",
      title: "Electric Potential",
      description: "Scalar potential, Poisson's Equation, and Boundary Conditions.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-7-1-potential-intro", title: "Introduction to Potential", description: "Path independence of E", icon: "TrendingUp",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you push a charge around any closed loop in an electrostatic field, returning exactly to the start, what is the net work done by the field?", options: [ { id: "A", text: "Positive", isCorrect: false, explanation: "You don't gain free energy." }, { id: "B", text: "Zero", isCorrect: true, explanation: "Electrostatic fields are conservative; net work on a closed loop is always zero." }, { id: "C", text: "Negative", isCorrect: false, explanation: "You don't lose energy either." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What mathematical property of the electric field guarantees that its line integral is path-independent?", options: [ { id: "A", text: "Its divergence is zero", isCorrect: false, explanation: "Divergence relates to flux, not path integrals." }, { id: "B", text: "Its curl is zero", isCorrect: true, explanation: "Because $\\nabla \\times \\mathbf{E} = 0$, Stokes' theorem ensures $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$." } ] },
            { id: "s2", type: "theory", title: "Path Independence", content: "The electric field $\\mathbf{E}$ is a very special kind of vector function: its curl is always zero ($\\nabla \\times \\mathbf{E} = 0$).\n\nBecause the curl is zero, Stokes' theorem dictates that the line integral of $\\mathbf{E}$ around *any* closed loop is zero:\n$\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$\n\nConsequently, the line integral of $\\mathbf{E}$ from point $\\mathbf{a}$ to point $\\mathbf{b}$ is the **same for all paths**. This path independence is the crucial property that allows us to define the scalar Electric Potential." },
            { id: "s3", type: "interactive_canvas", title: "Irrotational Field", content: "A field with zero curl does not swirl back on itself, meaning no matter how you travel from A to B, the 'wind' helps or hinders you by the exact same total amount.", interactiveCanvasId: "curl-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Path Independence", 
              content: "**Goal: Understand why a zero closed loop implies path independence.**", 
              interactiveSteps: [
                {
                  prompt: "Suppose you go from $\\mathbf{a}$ to $\\mathbf{b}$ via Path 1, and return from $\\mathbf{b}$ to $\\mathbf{a}$ via Path 2. What is the total integral around this closed loop?",
                  options: [
                    { id: "A", text: "Zero", isCorrect: true, explanation: "Because it's a closed loop in an electrostatic field." },
                    { id: "B", text: "Depends on the paths", isCorrect: false, explanation: "The curl is zero, so the loop integral is exactly zero." }
                  ],
                  stepText: "$\\int_{\\text{Path 1}} \\mathbf{E} \\cdot d\\mathbf{l} + \\int_{\\text{Path 2 (return)}} \\mathbf{E} \\cdot d\\mathbf{l} = 0$."
                },
                {
                  stepText: "Reversing the direction of Path 2 flips its sign: $\\int_{\\text{return}} = - \\int_{\\text{forward}}$."
                },
                {
                  stepText: "Therefore, $\\int_{\\text{Path 1}} \\mathbf{E} \\cdot d\\mathbf{l} - \\int_{\\text{Path 2 (forward)}} \\mathbf{E} \\cdot d\\mathbf{l} = 0$, meaning the two paths give the exact same result! Goal reached."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Work along a Path", content: "If the line integral of $\\mathbf{E}$ from $\\mathbf{a}$ to $\\mathbf{b}$ along a straight line is 5 J/C, what is the integral along a wildly zig-zagging path between the same two points?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Conservative Fields", content: "A vector field whose line integral is independent of the path taken is called a:", options: [ { id: "A", text: "Solenoidal field", isCorrect: false, explanation: "That means divergence is zero." }, { id: "B", text: "Conservative field", isCorrect: true, explanation: "Electrostatic fields are conservative." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Because the electrostatic field is path-independent, we say it is a ___ field.", blankAnswer: "conservative" }
          ]
        },
        {
          id: "les-7-2-potential-def", title: "Definition of Potential", description: "V(r)", icon: "Zap",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "What is the primary mathematical advantage of working with Electric Potential instead of the Electric Field?", options: [ { id: "A", text: "It is a scalar instead of a vector", isCorrect: true, explanation: "Scalars have only 1 component, vectors have 3. It's much easier to add scalars!" }, { id: "B", text: "It is always zero", isCorrect: false, explanation: "It is not always zero." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "The potential difference between two points is most closely related to:", options: [ { id: "A", text: "The force between them", isCorrect: false, explanation: "" }, { id: "B", text: "The work required to move a charge between them", isCorrect: true, explanation: "Potential is closely related to potential energy." } ] },
            { id: "s2", type: "theory", title: "Definition of Electric Potential", content: "Because the line integral of $\\mathbf{E}$ is independent of path, we can define a scalar function called the **Electric Potential** $V(\\mathbf{r})$:\n\n$V(\\mathbf{r}) \\equiv - \\int_{\\mathcal{O}}^{\\mathbf{r}} \\mathbf{E} \\cdot d\\mathbf{l}$\n\nHere, $\\mathcal{O}$ is some standard reference point we agree on beforehand. The potential $V$ then depends *only* on the position $\\mathbf{r}$." },
            { id: "s3", type: "interactive_canvas", title: "Potential Landscape", content: "Think of potential as the 'height' or 'altitude' of a landscape. The electric field points downhill.", interactiveCanvasId: "gradient-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Potential Difference", 
              content: "**Goal: Find the potential difference between two points $\\mathbf{a}$ and $\\mathbf{b}$.**", 
              interactiveSteps: [
                {
                  stepText: "By definition, $V(\\mathbf{b}) - V(\\mathbf{a}) = \\left( - \\int_{\\mathcal{O}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l} \\right) - \\left( - \\int_{\\mathcal{O}}^{\\mathbf{a}} \\mathbf{E} \\cdot d\\mathbf{l} \\right)$."
                },
                {
                  prompt: "Combining these integrals, we go from $\\mathbf{a}$ back to $\\mathcal{O}$, and then from $\\mathcal{O}$ to $\\mathbf{b}$. This is equivalent to a single integral from:",
                  options: [
                    { id: "A", text: "$\\mathbf{a}$ to $\\mathbf{b}$", isCorrect: true, explanation: "Correct! The path through the reference point simply links the two." },
                    { id: "B", text: "$\\mathbf{b}$ to $\\mathbf{a}$", isCorrect: false, explanation: "Check the signs." }
                  ],
                  stepText: "It simplifies to: $V(\\mathbf{b}) - V(\\mathbf{a}) = - \\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l}$. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Potential Difference", content: "If $V(\\mathbf{a}) = 10$ V and the integral $\\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l} = -4$ V, what is the potential at point $\\mathbf{b}$?", numericAnswer: 14, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Why the minus sign?", content: "Why is there a minus sign in the definition of potential?", options: [ { id: "A", text: "To make the potential of a positive charge positive", isCorrect: true, explanation: "It's a convention that ensures positive charges create potential 'hills'." }, { id: "B", text: "Because electric fields are negative", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The scalar quantity that represents the line integral of the electric field from a reference point is called the electric ___.", blankAnswer: "potential" }
          ]
        },
        {
          id: "les-7-3-gradient-relation", title: "E as the Gradient of V", description: "Extracting field from potential", icon: "Mountain",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you know the potential $V$ everywhere in space, can you find the electric field $\\mathbf{E}$?", options: [ { id: "A", text: "Yes, by taking the gradient", isCorrect: true, explanation: "The gradient extracts the vector field from the scalar potential." }, { id: "B", text: "No, information is lost", isCorrect: false, explanation: "No information is lost because curl is zero." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Does the electric field point towards higher or lower potential?", options: [ { id: "A", text: "Higher", isCorrect: false, explanation: "Positive charges are repelled towards lower potential." }, { id: "B", text: "Lower", isCorrect: true, explanation: "Like a ball rolling downhill, E points towards lower V." } ] },
            { id: "s2", type: "theory", title: "The Gradient Relation", content: "We established that the potential difference is $V(\\mathbf{b}) - V(\\mathbf{a}) = - \\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l}$.\n\nBut the Fundamental Theorem for Gradients states that $V(\\mathbf{b}) - V(\\mathbf{a}) = \\int_{\\mathbf{a}}^{\\mathbf{b}} (\\nabla V) \\cdot d\\mathbf{l}$.\n\nSince this holds for *any* points $\\mathbf{a}$ and $\\mathbf{b}$, the integrands must be equal:\n$\\mathbf{E} = -\\nabla V$\n\nThe electric field is the negative gradient of the potential." },
            { id: "s3", type: "interactive_canvas", title: "Gradient Explorer", content: "The gradient points in the direction of steepest ascent. The minus sign means E points in the direction of steepest *descent*.", interactiveCanvasId: "gradient-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: One Function vs Three", 
              content: "**Goal: Understand how a scalar $V$ contains all info for vector $\\mathbf{E}$.**", 
              interactiveSteps: [
                {
                  prompt: "$\\mathbf{E}$ has 3 components ($E_x, E_y, E_z$). $V$ has only 1. How can 1 function carry the information of 3?",
                  options: [
                    { id: "A", text: "Because the 3 components of E are not truly independent", isCorrect: true, explanation: "The condition $\\nabla \\times \\mathbf{E} = 0$ locks them together!" },
                    { id: "B", text: "It's magic", isCorrect: false, explanation: "It's vector calculus." }
                  ],
                  stepText: "Because $\\nabla \\times \\mathbf{E} = 0$, the components are interrelated (e.g., $\\partial E_x / \\partial y = \\partial E_y / \\partial x$)."
                },
                {
                  stepText: "The potential formulation exploits this perfectly, reducing a vector problem to a much simpler scalar one."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Calculate E", content: "If $V = 3x^2 + 2y$, what is the x-component of the electric field ($E_x$) at $x = 2$?", numericAnswer: -12, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Equipotentials", content: "A region where the potential is completely constant is called an equipotential. What is the electric field inside such a region?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "The gradient of a constant is zero." }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The electric field is the negative ___ of the scalar potential.", blankAnswer: "gradient" }
          ]
        },
        {
          id: "les-7-4-reference-point", title: "The Reference Point", description: "Where is V = 0?", icon: "MapPin",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you add 5 Volts to the potential everywhere in the universe, does the electric field change?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Electric fields depend on differences in potential." }, { id: "B", text: "No", isCorrect: true, explanation: "The derivative (gradient) of a constant is zero." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Where is the 'natural' place to set the reference point (where $V=0$) for a localized group of charges?", options: [ { id: "A", text: "At the origin", isCorrect: false, explanation: "Usually there's charge there, making V blow up." }, { id: "B", text: "Infinitely far away", isCorrect: true, explanation: "Like sea level for altitude, $\\infty$ is the natural baseline." } ] },
            { id: "s2", type: "theory", title: "The Reference Point", content: "There is an essential ambiguity in defining $V$: changing the reference point $\\mathcal{O}$ simply adds a constant $K$ to the potential.\n\nSince $\\nabla(V + K) = \\nabla V$, the physical electric field is completely unaffected. Potential is like altitude; only *differences* have intrinsic physical meaning.\n\nNormally, we set the zero of potential at **infinity**. However, if the charge distribution itself extends to infinity (like an infinite wire or plane), this convention fails, and we must pick a specific finite point." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Infinite Distributions", 
              content: "**Goal: Understand why infinity fails as a reference for infinite planes.**", 
              interactiveSteps: [
                {
                  stepText: "The electric field of an infinite plane is $E = \\frac{\\sigma}{2\\epsilon_0}$ (constant)."
                },
                {
                  prompt: "If we integrate a constant field from infinity to $z$: $\\int_{\\infty}^z (\\text{constant}) dz$. What happens?",
                  options: [
                    { id: "A", text: "It evaluates to a finite number", isCorrect: false, explanation: "Infinity times a constant is infinity." },
                    { id: "B", text: "It blows up (becomes infinite)", isCorrect: true, explanation: "The integral diverges." }
                  ],
                  stepText: "The potential blows up! This is the symptom that you must choose a finite reference point."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Shift in V", content: "If $V(\\mathbf{r}) = 15$ V using the origin as reference, and you shift the reference point such that $V(\\text{origin}) = 10$ V instead of 0, what is the new $V(\\mathbf{r})$?", numericAnswer: 25, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Physical Meaning", content: "Which of the following has absolute physical significance?", options: [ { id: "A", text: "The potential at point a", isCorrect: false, explanation: "Depends on reference." }, { id: "B", text: "The potential difference between a and b", isCorrect: true, explanation: "Independent of reference point." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "For localized charges, we customarily set the zero of potential at ___.", blankAnswer: "infinity" }
          ]
        },
        {
          id: "les-7-5-superposition-v", title: "Superposition & Units", description: "Adding potentials", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "What is the SI unit of Electric Potential?", options: [ { id: "A", text: "Newton", isCorrect: false, explanation: "That's force." }, { id: "B", text: "Volt", isCorrect: true, explanation: "1 Volt = 1 Joule/Coulomb." }, { id: "C", text: "Ampere", isCorrect: false, explanation: "That's current." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If charge A creates a potential of 5V at point P, and charge B creates 3V at point P, what is the total potential at P?", options: [ { id: "A", text: "8V", isCorrect: true, explanation: "Potentials add as simple scalars!" }, { id: "B", text: "Depends on the angle", isCorrect: false, explanation: "Potential is a scalar, not a vector." } ] },
            { id: "s2", type: "theory", title: "Superposition Principle for V", content: "Because Force obeys superposition, so does the Electric Field ($\\mathbf{E} = \\mathbf{E}_1 + \\mathbf{E}_2 + \\dots$).\n\nSince integration is a linear operation, the Potential also obeys the superposition principle:\n$V = V_1 + V_2 + \\dots$\n\nThis is a massive advantage: you can add the contributions of individual charges as **ordinary numbers** (scalars) instead of doing complicated vector addition.\n\n**Units:** $V$ is measured in Joules per Coulomb, which is defined as a **Volt (V)**." },
            { id: "s3", type: "interactive_canvas", title: "Vector vs Scalar Addition", content: "Adding vectors requires matching tip-to-tail and doing trigonometry. Adding potentials is just adding numbers: 5 + 3 = 8.", interactiveCanvasId: "vector-addition-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Superposition Proof", 
              content: "**Goal: Formally show $V$ obeys superposition.**", 
              interactiveSteps: [
                {
                  stepText: "Start with $\\mathbf{E} = \\mathbf{E}_1 + \\mathbf{E}_2$."
                },
                {
                  prompt: "Substitute this into the definition $V = - \\int \\mathbf{E} \\cdot d\\mathbf{l}$. What is $- \\int (\\mathbf{E}_1 + \\mathbf{E}_2) \\cdot d\\mathbf{l}$?",
                  options: [
                    { id: "A", text: "$- \\int \\mathbf{E}_1 \\cdot d\\mathbf{l} - \\int \\mathbf{E}_2 \\cdot d\\mathbf{l}$", isCorrect: true, explanation: "The integral of a sum is the sum of the integrals." },
                    { id: "B", text: "$- \\int (\\mathbf{E}_1 \\cdot \\mathbf{E}_2) d\\mathbf{l}$", isCorrect: false, explanation: "Integration distributes over addition." }
                  ],
                  stepText: "The integral splits into two: $V = V_1 + V_2$. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Total Potential", content: "Three charges each produce a potential of -2 V at the origin. What is the total potential at the origin?", numericAnswer: -6, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Simplicity of V", content: "Why is it often easier to calculate V first, then find E?", options: [ { id: "A", text: "Because V is a scalar, so we don't have to worry about vector components.", isCorrect: true, explanation: "Scalar addition is vastly simpler." }, { id: "B", text: "Because V is always zero.", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "One Joule per Coulomb is defined as one ___.", blankAnswer: "Volt" }
          ]
        },
        {
          id: "les-7-6-ex2-7-out", title: "Example 2.7 (Outside)", description: "Potential of a spherical shell", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.7 (Part 1)", content: "**Problem:** Find the potential *outside* a spherical shell of radius $R$ that carries a uniform surface charge. Set the reference point at infinity.\n\n*Hint:* Use Gauss's law to find $\\mathbf{E}$ first, then integrate." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Calculate $V(r)$ for $r > R$.**", 
              interactiveSteps: [
                {
                  prompt: "From Gauss's law, what is the electric field outside the sphere ($r > R$)?",
                  options: [
                    { id: "A", text: "$\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\mathbf{\\hat{r}}$", isCorrect: true, explanation: "It acts just like a point charge at the origin." },
                    { id: "B", text: "0", isCorrect: false, explanation: "That's the field inside the shell." }
                  ],
                  stepText: "$\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\mathbf{\\hat{r}}$."
                },
                {
                  stepText: "Now integrate from $\\infty$ to $r$: $V(r) = - \\int_{\\infty}^r \\mathbf{E} \\cdot d\\mathbf{l}$."
                },
                {
                  prompt: "What is the integral of $1/r^2 dr'$?",
                  options: [
                    { id: "A", text: "$-1/r'$", isCorrect: true, explanation: "Power rule for integration." },
                    { id: "B", text: "$\\ln(r')$", isCorrect: false, explanation: "That's for 1/r." }
                  ],
                  stepText: "$V(r) = - \\frac{q}{4\\pi\\epsilon_0} \\left[ -\\frac{1}{r'} \\right]_{\\infty}^r$."
                },
                {
                  stepText: "Evaluating the limits: $V(r) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Comparison", content: "How does the potential outside the spherical shell compare to that of a point charge at the origin?", options: [ { id: "A", text: "It is exactly the same", isCorrect: true, explanation: "Both the field and potential look like all charge is at the center." }, { id: "B", text: "It falls off faster", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-7-7-ex2-7-in", title: "Example 2.7 (Inside)", description: "Potential inside a spherical shell", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.7 (Part 2)", content: "**Problem:** Find the potential *inside* the same spherical shell ($r < R$).\n\n*Hint:* You must integrate from infinity all the way into the sphere, breaking the integral into two pieces (outside and inside)." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Calculate $V(r)$ for $r < R$.**", 
              interactiveSteps: [
                {
                  stepText: "Break the integral into two regions: $V(r) = - \\int_{\\infty}^R \\mathbf{E}_{out} \\cdot d\\mathbf{l} - \\int_R^r \\mathbf{E}_{in} \\cdot d\\mathbf{l}$."
                },
                {
                  stepText: "We already know the first piece (the potential at the surface): $\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R}$."
                },
                {
                  prompt: "What is $\\mathbf{E}_{in}$ inside the spherical shell?",
                  options: [
                    { id: "A", text: "0", isCorrect: true, explanation: "By Gauss's law, Q_enc is zero inside a hollow shell." },
                    { id: "B", text: "$\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\mathbf{\\hat{r}}$", isCorrect: false, explanation: "That's outside." }
                  ],
                  stepText: "Since $\\mathbf{E}_{in} = 0$, the second integral evaluates to 0."
                },
                {
                  stepText: "Therefore, $V(r) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R} + 0 = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Is V zero?", content: "Even though the electric field inside the shell is zero, the potential is NOT zero. Why?", options: [ { id: "A", text: "Because it takes work to push a charge from infinity up to the surface.", isCorrect: true, explanation: "Once inside, no MORE work is needed, so V stays constant at the surface value." }, { id: "B", text: "Because of quantum fluctuations.", isCorrect: false, explanation: "" } ] },
            { id: "s3", type: "fill_in_blank", title: "Fill in the blank", content: "Inside the shell, the electric field is zero, which means the potential is ___ everywhere inside.", blankAnswer: "constant" }
          ]
        },
        {
          id: "les-7-8-poisson", title: "Poisson's Equation", description: "Relating V directly to rho", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Gauss's law in differential form connects the electric field to charge density. What operator is used?", options: [ { id: "A", text: "Gradient", isCorrect: false, explanation: "Gradient creates a vector from a scalar." }, { id: "B", text: "Divergence", isCorrect: true, explanation: "$\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If $\\mathbf{E} = -\\nabla V$, what is the divergence of $\\mathbf{E}$?", options: [ { id: "A", text: "The Laplacian of V", isCorrect: true, explanation: "$\\nabla \\cdot (-\\nabla V) = -\\nabla^2 V$." }, { id: "B", text: "The Curl of V", isCorrect: false, explanation: "Curl is a cross product." } ] },
            { id: "s2", type: "theory", title: "Poisson's Equation", content: "We know two fundamental things:\n1. $\\mathbf{E} = -\\nabla V$\n2. $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$ (Gauss's Law)\n\nSubstituting the first into the second gives:\n$\\nabla \\cdot (-\\nabla V) = \\rho/\\epsilon_0$\n\n$\\nabla^2 V = -\\frac{\\rho}{\\epsilon_0}$\n\nThis is **Poisson's Equation**. It is a second-order differential equation directly relating the scalar potential to the charge density." },
            { id: "s3", type: "interactive_canvas", title: "Laplacian Explorer", content: "The Laplacian measures 'concavity'. At a positive charge, the potential peaks (concave down), so the Laplacian is negative.", interactiveCanvasId: "laplacian-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Significance", 
              content: "**Goal: Understand why Poisson's Eq is so important.**", 
              interactiveSteps: [
                {
                  prompt: "To find V using the previous methods, we had to find E first, then integrate. Does Poisson's equation require E?",
                  options: [
                    { id: "A", text: "Yes", isCorrect: false, explanation: "Look at the formula: it only involves V and rho." },
                    { id: "B", text: "No", isCorrect: true, explanation: "It bypasses E entirely, relating V directly to the source charges." }
                  ],
                  stepText: "Poisson's equation allows us to solve for V directly from $\\rho$, bypassing the vector field $\\mathbf{E}$."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Laplacian Value", content: "If in a certain region $\\rho = 8.85 \\times 10^{-12}$ C/m$^3$, and $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$, what is the value of $\\nabla^2 V$?", numericAnswer: -1, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Order of Differential Equation", content: "Poisson's equation is what type of differential equation?", options: [ { id: "A", text: "First-order", isCorrect: false, explanation: "It involves the Laplacian, which has second derivatives." }, { id: "B", text: "Second-order", isCorrect: true, explanation: "Because $\\nabla^2$ involves second spatial derivatives." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The equation $\\nabla^2 V = -\\rho/\\epsilon_0$ is known as ___'s equation.", blankAnswer: "Poisson" }
          ]
        },
        {
          id: "les-7-9-laplace", title: "Laplace's Equation", description: "Empty space potential", icon: "Wind",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If a region of space has absolutely no charge in it, what is $\\rho$?", options: [ { id: "A", text: "Infinity", isCorrect: false, explanation: "" }, { id: "B", text: "Zero", isCorrect: true, explanation: "No charge means zero density." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What happens to Poisson's equation when $\\rho = 0$?", options: [ { id: "A", text: "$\\nabla^2 V = 0$", isCorrect: true, explanation: "The right side vanishes." }, { id: "B", text: "$\\nabla V = 0$", isCorrect: false, explanation: "The second derivative is zero, not necessarily the first." } ] },
            { id: "s2", type: "theory", title: "Laplace's Equation", content: "In regions where there is no charge ($\\rho = 0$), Poisson's equation reduces to:\n\n$\\nabla^2 V = 0$\n\nThis is **Laplace's Equation**. It is arguably the most important differential equation in all of physics. Solutions to Laplace's equation are called *harmonic functions*, and we will devote all of Chapter 3 to studying them." },
            { id: "s3", type: "interactive_canvas", title: "Harmonic Surfaces", content: "A harmonic function has no local maxima or minima; it stretches smoothly like a tightly pulled rubber sheet over a frame.", interactiveCanvasId: "laplacian-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: 1D Laplace", 
              content: "**Goal: See what Laplace's equation means in 1D.**", 
              interactiveSteps: [
                {
                  prompt: "In one dimension (x), Laplace's equation is $d^2V/dx^2 = 0$. What kind of function has a second derivative of zero?",
                  options: [
                    { id: "A", text: "A parabola ($x^2$)", isCorrect: false, explanation: "The second derivative is a constant, not necessarily zero." },
                    { id: "B", text: "A straight line ($mx + b$)", isCorrect: true, explanation: "The first derivative is m, the second is 0." }
                  ],
                  stepText: "In 1D, V must be a straight line."
                },
                {
                  stepText: "A straight line has no peaks or valleys. This property holds true in 3D as well: Solutions to Laplace's equation have no local maxima or minima within the region."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Testing Laplace", content: "Does $V = 3x + 4y - 2z$ satisfy Laplace's equation? (Evaluate $\\nabla^2 V$)", numericAnswer: 0, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Extrema", content: "Because $\\nabla^2 V = 0$, where must the maximum and minimum values of V occur in a charge-free region?", options: [ { id: "A", text: "In the center", isCorrect: false, explanation: "It can't have a local maximum in the middle." }, { id: "B", text: "On the boundaries", isCorrect: true, explanation: "Like a stretched rubber sheet, the highest and lowest points are where the frame holds it." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Solutions to Laplace's equation are called ___ functions.", blankAnswer: "harmonic" }
          ]
        },
        {
          id: "les-7-10-point-charges", title: "Potential of Point Charges", description: "Inverting Poisson's eq", icon: "Target",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "What is the potential of a single point charge at the origin?", options: [ { id: "A", text: "$\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r}$", isCorrect: true, explanation: "Correct." }, { id: "B", text: "$\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}$", isCorrect: false, explanation: "That's the electric field." } ] },
            { id: "s2", type: "theory", title: "Potential of a Localized Charge", content: "Typically we know the charge distribution and want to find V. Poisson's equation gives us $\\rho$ if we know $V$, so we need to 'invert' it.\n\nFor a single point charge $q$ at the origin, $V(r) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r}$.\nIf the charge is not at the origin, we use the separation distance $\\cal{r}$:\n$V(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{\\cal{r}}$\n\nFor a collection of point charges, by superposition:\n$V(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\sum_{i=1}^n \\frac{q_i}{\\cal{r}_i}$" },
            { id: "s3", type: "interactive_canvas", title: "Superposition of V", content: "Adding scalar potentials is much simpler than vector fields.", interactiveCanvasId: "vector-addition-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Inversion", 
              content: "**Goal: Appreciate why this is the 'solution' to Poisson's equation.**", 
              interactiveSteps: [
                {
                  stepText: "Poisson's equation is $\\nabla^2 V = -\\rho/\\epsilon_0$."
                },
                {
                  prompt: "By giving us a formula for $V$ directly constructed from $q$ (or $\\rho$), we have effectively done what to the differential equation?",
                  options: [
                    { id: "A", text: "Solved it (Integrated it)", isCorrect: true, explanation: "We went from the derivative relation to the explicit function." },
                    { id: "B", text: "Differentiated it", isCorrect: false, explanation: "" }
                  ],
                  stepText: "This sum (and its integral form) is the explicit mathematical solution to Poisson's equation for localized sources."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Vector vs Scalar", content: "Why is the sum for V easier to compute than the sum for E?", options: [ { id: "A", text: "There are no unit vectors $\\mathbf{\\hat{\\cal{r}}}_i$ to worry about.", isCorrect: true, explanation: "It's just adding numbers." }, { id: "B", text: "There are fewer charges.", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The potential of a single point charge falls off as $1/$___.", blankAnswer: "r" }
          ]
        },
        {
          id: "les-7-11-continuous-v", title: "Potential of Continuous Charge", description: "Volume integral for V", icon: "Box",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "How do we transition from a discrete sum of point charges to a continuous volume of charge?", options: [ { id: "A", text: "Change sum to integral, $q$ to $\\rho d\\tau$", isCorrect: true, explanation: "Standard calculus limit." }, { id: "B", text: "Take the derivative", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Volume Charge Potential", content: "For a continuous volume charge distribution $\\rho$, the sum becomes an integral:\n\n$V(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\mathbf{r}')}{\\cal{r}} d\\tau'$\n\nCompare this to the electric field integral: $\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho}{\\cal{r}^2} \\mathbf{\\hat{\\cal{r}}} d\\tau'$.\nThe pesky unit vector $\\mathbf{\\hat{\\cal{r}}}$ is completely gone, making this a much easier integral to evaluate in practice!" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Reference Warning", 
              content: "**Goal: Identify the hidden assumption in this integral.**", 
              interactiveSteps: [
                {
                  stepText: "We derived this integral starting from $V = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r}$."
                },
                {
                  prompt: "Where was the reference point $\\mathcal{O}$ implicitly set when we established $V(r) = q / (4\\pi\\epsilon_0 r)$?",
                  options: [
                    { id: "A", text: "At the origin", isCorrect: false, explanation: "If it were at the origin, V would be infinity." },
                    { id: "B", text: "At infinity", isCorrect: true, explanation: "The integral bounds were from infinity to r." }
                  ],
                  stepText: "This formula strictly assumes the reference point is at infinity!"
                },
                {
                  stepText: "Therefore, if the charge distribution $\\rho$ itself extends to infinity, this integral will diverge (blow up), and you cannot use it."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "When to use it", content: "If you have an infinitely long charged cylinder, can you use this integral to find V?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "The charge extends to infinity, so the integral will diverge." }, { id: "B", text: "No", isCorrect: true, explanation: "You must use Gauss's law to find E first, then integrate E with a finite reference point." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The integral formula for V is predicated on the assumption that the reference point is at ___.", blankAnswer: "infinity" }
          ]
        },
        {
          id: "les-7-12-line-surface-v", title: "Line & Surface Potentials", description: "1D and 2D continuous distributions", icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If charge is smeared on a flat sheet, what density do we use?", options: [ { id: "A", text: "Volume density", isCorrect: false, explanation: "" }, { id: "B", text: "Surface density (sigma)", isCorrect: true, explanation: "Charge per unit area." } ] },
            { id: "s2", type: "theory", title: "Line and Surface Potentials", content: "Following the same logic, if the charge is constrained to a 1D line or a 2D surface, we use the respective charge densities $\\lambda$ and $\\sigma$:\n\n**Line Charge:**\n$V(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\lambda(\\mathbf{r}')}{\\cal{r}} dl'$\n\n**Surface Charge:**\n$V(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\sigma(\\mathbf{r}')}{\\cal{r}} da'$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Why bother?", 
              content: "**Goal: Understand why we prefer finding V first over finding E directly.**", 
              interactiveSteps: [
                {
                  prompt: "In the integral for $\\mathbf{E}$, there are 3 components (x, y, z) hidden in the $\\mathbf{\\hat{\\cal{r}}}$ vector. How many components are in the integral for $V$?",
                  options: [
                    { id: "A", text: "1", isCorrect: true, explanation: "It's a pure scalar." },
                    { id: "B", text: "3", isCorrect: false, explanation: "There are no vectors inside." }
                  ],
                  stepText: "V only requires evaluating 1 scalar integral."
                },
                {
                  stepText: "Once you suffer through 1 integral to get V, you get all 3 components of E for free simply by taking derivatives ($\\mathbf{E} = -\\nabla V$). Derivatives are much easier than integrals!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Integral count", content: "How many separate scalar integrals must you evaluate to find E directly using Coulomb's law? (Assume no symmetry)", numericAnswer: 3, numericTolerance: 0.1 },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "For a wire, the charge element $dq$ becomes $\\lambda$ ___.", blankAnswer: "dl'" }
          ]
        },
        {
          id: "les-7-13-ex2-8", title: "Example 2.8: Direct Integration", description: "Spherical shell potential directly", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.8", content: "**Problem:** Find the potential of a uniformly charged spherical shell of radius $R$ and total charge $q$, by integrating directly over the surface.\n\n*Hint:* Use $V = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\sigma}{\\cal{r}} da'$. Set the field point on the z-axis to make $\\cal{r}$ easier to write using the Law of Cosines." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Evaluate the surface integral for V.**", 
              interactiveSteps: [
                {
                  stepText: "By the Law of Cosines, the distance $\\cal{r}$ from a patch on the sphere to the point $z$ on the axis is $\\sqrt{R^2 + z^2 - 2Rz \\cos\\theta'}$."
                },
                {
                  prompt: "The area element on a sphere is $R^2 \\sin\\theta' d\\theta' d\\phi'$. After integrating $d\\phi'$ to get $2\\pi$, we must integrate $\\frac{\\sin\\theta' d\\theta'}{\\sqrt{R^2 + z^2 - 2Rz \\cos\\theta'}}$. What is the result of this integral from $0$ to $\\pi$?",
                  options: [
                    { id: "A", text: "$\\frac{1}{Rz} \\left( \\sqrt{R^2+z^2+2Rz} - \\sqrt{R^2+z^2-2Rz} \\right)$", isCorrect: true, explanation: "Correct evaluation of the integral." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "It evaluates to $\\frac{1}{Rz} \\left[ (R+z) - |R-z| \\right]$."
                },
                {
                  prompt: "Notice the absolute value $|R-z|$. If we are OUTSIDE the sphere ($z > R$), what is $|R-z|$?",
                  options: [
                    { id: "A", text: "$R-z$", isCorrect: false, explanation: "That would be negative." },
                    { id: "B", text: "$z-R$", isCorrect: true, explanation: "Since z is larger, z-R is positive." }
                  ],
                  stepText: "Outside, $|R-z| = z-R$. The term becomes $(R+z) - (z-R) = 2R$."
                },
                {
                  stepText: "Inside ($z < R$), $|R-z| = R-z$. The term becomes $(R+z) - (R-z) = 2z$."
                },
                {
                  stepText: "Substituting these back gives $V_{out} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{z}$ and $V_{in} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R}$. Goal reached! (Same as Ex 2.7)"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Method Comparison", content: "Which method was easier to find V for the spherical shell?", options: [ { id: "A", text: "Gauss's Law to find E, then integrating E (Ex 2.7)", isCorrect: true, explanation: "Symmetry made Gauss's law trivial." }, { id: "B", text: "Direct surface integration (Ex 2.8)", isCorrect: false, explanation: "The integral was tricky with the absolute values." } ] }
          ]
        },
        {
          id: "les-7-14-bc-normal", title: "Boundary Conditions: Normal E", description: "Discontinuity of the electric field", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Is the electric field continuous everywhere in space?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Charges disrupt the field." }, { id: "B", text: "No, it jumps across surface charges.", isCorrect: true, explanation: "Surface charges create sudden discontinuities." } ] },
            { id: "s2", type: "theory", title: "Discontinuity of Normal E", content: "When you cross a boundary containing a surface charge density $\\sigma$, the electric field undergoes a sharp discontinuity.\n\nApplying Gauss's Law to a wafer-thin pillbox straddling the surface reveals that the component of $\\mathbf{E}$ perpendicular (normal) to the surface jumps:\n\n$E_{above}^{\\perp} - E_{below}^{\\perp} = \\frac{\\sigma}{\\epsilon_0}$\n\nIf there is no surface charge ($\\sigma = 0$), then the normal component is continuous." },
            { id: "s3", type: "interactive_canvas", title: "Pillbox Flux", content: "Imagine a pillbox. Field lines piercing the top and bottom faces measure the normal component. The charge inside causes a difference between what goes in and what goes out.", interactiveCanvasId: "divergence-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Normal BC", 
              content: "**Goal: Derive the discontinuity using Gauss's Law.**", 
              interactiveSteps: [
                {
                  stepText: "Draw a thin Gaussian pillbox of area $A$ straddling the surface."
                },
                {
                  prompt: "As we shrink the thickness of the pillbox to zero, what happens to the flux through the sides?",
                  options: [
                    { id: "A", text: "It goes to zero", isCorrect: true, explanation: "The area of the sides becomes zero." },
                    { id: "B", text: "It becomes infinite", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The sides contribute nothing. The only flux is through the top ($E_{above}^{\\perp} A$) and bottom ($-E_{below}^{\\perp} A$)."
                },
                {
                  stepText: "Gauss's law says total flux = $Q_{enc}/\\epsilon_0$. Here $Q_{enc} = \\sigma A$."
                },
                {
                  stepText: "So $(E_{above}^{\\perp} - E_{below}^{\\perp}) A = \\frac{\\sigma A}{\\epsilon_0}$. Canceling A gives the result. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Calculate Discontinuity", content: "If a surface has $\\sigma = 8.85 \\times 10^{-12}$ C/m$^2$, and $\\epsilon_0 = 8.85 \\times 10^{-12}$, what is the jump in the normal electric field ($E_{above} - E_{below}$) in V/m?", numericAnswer: 1, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "No Surface Charge", content: "What happens to the normal component of E if you cross a boundary where $\\sigma = 0$?", options: [ { id: "A", text: "It drops to zero", isCorrect: false, explanation: "" }, { id: "B", text: "It is continuous", isCorrect: true, explanation: "The jump is zero, so it doesn't change." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The ___ component of the electric field is discontinuous across a surface charge.", blankAnswer: "normal" }
          ]
        },
        {
          id: "les-7-15-bc-tangential", title: "Boundary Conditions: Tangential E", description: "Continuity along the surface", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "We know the normal component of E jumps across a surface charge. What about the component parallel (tangential) to the surface?", options: [ { id: "A", text: "It also jumps", isCorrect: false, explanation: "" }, { id: "B", text: "It is continuous", isCorrect: true, explanation: "It does not break." } ] },
            { id: "s2", type: "theory", title: "Continuity of Tangential E", content: "While Gauss's law dictates the normal component, the condition that $\\nabla \\times \\mathbf{E} = 0$ dictates the tangential component.\n\nApplying $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$ to a thin rectangular loop straddling the surface reveals that the component of $\\mathbf{E}$ parallel (tangential) to the surface is always continuous:\n\n$E_{above}^{\\parallel} = E_{below}^{\\parallel}$\n\nCombining both rules, the full vector boundary condition is:\n$\\mathbf{E}_{above} - \\mathbf{E}_{below} = \\frac{\\sigma}{\\epsilon_0}\\mathbf{\\hat{n}}$" },
            { id: "s3", type: "interactive_canvas", title: "Loop Integral", content: "A loop straddling the boundary has 0 net work. The top and bottom legs must exactly cancel, proving tangential E is identical.", interactiveCanvasId: "curl-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Tangential BC", 
              content: "**Goal: Derive continuity using a closed loop.**", 
              interactiveSteps: [
                {
                  stepText: "Draw a thin rectangular loop of length $L$ parallel to the surface, half above and half below."
                },
                {
                  prompt: "As we shrink the height of the loop to zero, what happens to the integral along the short vertical sides?",
                  options: [
                    { id: "A", text: "They go to zero", isCorrect: true, explanation: "The path length becomes zero." },
                    { id: "B", text: "They become infinite", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The sides contribute nothing. The integral is $E_{above}^{\\parallel} L - E_{below}^{\\parallel} L$."
                },
                {
                  stepText: "Since the total loop integral must be zero ($\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$), we have $(E_{above}^{\\parallel} - E_{below}^{\\parallel}) L = 0$."
                },
                {
                  stepText: "Canceling L gives $E_{above}^{\\parallel} = E_{below}^{\\parallel}$. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Summary Equation", content: "The equation $\\mathbf{E}_{above} - \\mathbf{E}_{below} = \\frac{\\sigma}{\\epsilon_0}\\mathbf{\\hat{n}}$ implies that:", options: [ { id: "A", text: "Only the normal component changes", isCorrect: true, explanation: "Because the change is entirely in the n-hat (normal) direction." }, { id: "B", text: "Both components change", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The component of E parallel to the surface is called the ___ component.", blankAnswer: "tangential" }
          ]
        },
        {
          id: "les-7-16-bc-potential", title: "Boundary Conditions: Potential", description: "Continuity of V", icon: "Waves",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If the electric field is discontinuous across a boundary, does the potential V also jump abruptly?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "V is an integral of E. Integrals smooth things out." }, { id: "B", text: "No", isCorrect: true, explanation: "The potential is always continuous." } ] },
            { id: "s2", type: "theory", title: "Boundary Conditions on V", content: "The electric potential is **always continuous** across any boundary:\n\n$V_{above} = V_{below}$\n\nWhy? Because $V_{above} - V_{below} = -\\int \\mathbf{E} \\cdot d\\mathbf{l}$. As the path length across the boundary shrinks to zero, the integral goes to zero.\n\nHowever, the *gradient* of V inherits the discontinuity of E. Specifically, the normal derivative of V jumps:\n$\\frac{\\partial V_{above}}{\\partial n} - \\frac{\\partial V_{below}}{\\partial n} = -\\frac{\\sigma}{\\epsilon_0}$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Normal Derivative", 
              content: "**Goal: Understand the normal derivative notation.**", 
              interactiveSteps: [
                {
                  stepText: "We know $\\mathbf{E} = -\\nabla V$."
                },
                {
                  prompt: "The normal component $E^{\\perp}$ is the dot product $\\mathbf{E} \\cdot \\mathbf{\\hat{n}}$. What does this equal in terms of V?",
                  options: [
                    { id: "A", text: "$-\\nabla V \\cdot \\mathbf{\\hat{n}}$", isCorrect: true, explanation: "Substitute E = -Grad V." },
                    { id: "B", text: "$\\nabla V$", isCorrect: false, explanation: "You need the dot product." }
                  ],
                  stepText: "$E^{\\perp} = -\\nabla V \\cdot \\mathbf{\\hat{n}}$."
                },
                {
                  stepText: "The quantity $\\nabla V \\cdot \\mathbf{\\hat{n}}$ is simply the rate of change of V in the normal direction, written as $\\frac{\\partial V}{\\partial n}$. Substituting this into the E boundary condition gives the result."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Kink in V", content: "Since V is continuous but its derivative is not, what does a graph of V(z) look like as it crosses a sheet of charge?", options: [ { id: "A", text: "It has a broken gap", isCorrect: false, explanation: "It is continuous, so no gaps." }, { id: "B", text: "It has a sharp kink or corner", isCorrect: true, explanation: "Continuous but not differentiable implies a kink." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "While the electric field can be discontinuous, the electric potential is always ___.", blankAnswer: "continuous" }
          ]
        }
      ]
    },
    {
      id: "unit-8-summary-2-3",
      title: "Section Summary",
      description: "Recap of Electric Potential and Boundary Conditions.",
      color: "duo-green",
      lessons: [
        {
          id: "les-8-1-recap",
          title: "Potential & BCs Recap",
          description: "Review of Unit 7",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "The fact that the electric field is irrotational means it can be written as the gradient of a:", options: [ { id: "A", text: "Vector", isCorrect: false, explanation: "" }, { id: "B", text: "Scalar Potential", isCorrect: true, explanation: "E = -Grad V" } ] },
            { id: "s1", type: "quiz", title: "Knowledge Check 2", content: "Across a surface charge, which component of the electric field is discontinuous?", options: [ { id: "A", text: "Tangential", isCorrect: false, explanation: "" }, { id: "B", text: "Normal", isCorrect: true, explanation: "The perpendicular component jumps by sigma/eps0." } ] },
            { id: "s2", type: "theory", title: "Section 3 Summary", content: "Because electrostatic fields are irrotational ($\\nabla \\times \\mathbf{E} = 0$), their line integrals are path-independent. This allows us to define the scalar **Electric Potential** $V$, with $\\mathbf{E} = -\\nabla V$.\n\nCombining this with Gauss's Law yields **Poisson's Equation** ($\\nabla^2 V = -\\rho/\\epsilon_0$), which reduces to Laplace's Equation in empty space. Finally, we learned that across any surface charge $\\sigma$, the **normal component** of $\\mathbf{E}$ jumps by $\\sigma/\\epsilon_0$, while the tangential component and the potential $V$ remain continuous." }
          ]
        }
      ]
    }
  ]
};