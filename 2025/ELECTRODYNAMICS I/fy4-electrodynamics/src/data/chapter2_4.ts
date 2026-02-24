import { Section } from '../types';

export const SECTION_2_4: Section = {
  id: "section-2-4",
  title: "Section 4: Work, Energy & Conductors",
  description: "Electrostatic energy, properties of ideal conductors, shielding, and capacitors.",
  color: "duo-blue",
  units: [
    {
      id: "unit-8-work-energy",
      title: "Work & Energy",
      description: "Work done to move charges and energy stored in electric fields.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-8-1-work-move", title: "Work to Move a Charge", description: "W = Q(V_b - V_a)", icon: "Move",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "To move a positive test charge *against* an electric field (towards another positive charge), you must do:", options: [ { id: "A", text: "Positive work", isCorrect: true, explanation: "You must push it against the repulsive force." }, { id: "B", text: "Negative work", isCorrect: false, explanation: "The field does negative work; YOU do positive work." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Does the work you do depend on the path you take?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Electrostatic fields are conservative, so work is path-independent." } ] },
            { id: "s2", type: "theory", title: "The Work to Move a Charge", content: "Suppose you have a stationary configuration of source charges, and you want to move a test charge $Q$ from point $\\mathbf{a}$ to point $\\mathbf{b}$.\n\nThe electric force is $\\mathbf{F}_{elec} = Q\\mathbf{E}$. The force *you* must exert to move it at constant speed is exactly opposite: $\\mathbf{F}_{you} = -Q\\mathbf{E}$.\n\nThe work you do is:\n$W = \\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{F}_{you} \\cdot d\\mathbf{l} = -Q \\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l}$\n\nBy definition of potential, this is exactly:\n$W = Q[V(\\mathbf{b}) - V(\\mathbf{a})]$" },
            { id: "s3", type: "interactive_canvas", title: "Path Independence", content: "Drag the charge from A to B. Notice that regardless of how much you wander around, the total net work done solely depends on the starting and ending potentials.", interactiveCanvasId: "work-path-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Bringing from Infinity", 
              content: "**Goal: Find the work to bring a charge from far away.**", 
              interactiveSteps: [
                {
                  stepText: "Let point $\\mathbf{a}$ be at infinity, and point $\\mathbf{b}$ be our target location $\\mathbf{r}$."
                },
                {
                  prompt: "By convention, what is $V(\\infty)$?",
                  options: [
                    { id: "A", text: "0", isCorrect: true, explanation: "Infinity is our standard reference point." },
                    { id: "B", text: "1", isCorrect: false, explanation: "" }
                  ],
                  stepText: "Since $V(\\infty) = 0$, the formula simplifies."
                },
                {
                  stepText: "The work to bring a charge $Q$ from infinity to point $\\mathbf{r}$ is simply $W = Q V(\\mathbf{r})$. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Calculate Work", content: "If the potential at point P is 12 Volts, how much work (in Joules) does it take to bring a 3 Coulomb charge from infinity to P?", numericAnswer: 36, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Potential Definition", content: "Based on $W = Q V(\\mathbf{r})$, what is another way to define Electric Potential?", options: [ { id: "A", text: "Force per unit charge", isCorrect: false, explanation: "That is the Electric Field." }, { id: "B", text: "Potential Energy per unit charge", isCorrect: true, explanation: "V = W / Q." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The potential difference between two points is the ___ required per unit charge to move a particle between them.", blankAnswer: "work" }
          ]
        },
        {
          id: "les-8-2-energy-point-charges", title: "Energy of Point Charges", description: "Assembling a collection", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "How much work does it take to place the very FIRST charge in an empty universe?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "There's no field to fight against yet!" }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If you bring in a second charge $q_2$ near $q_1$, the work depends on:", options: [ { id: "A", text: "Only $q_2$", isCorrect: false, explanation: "" }, { id: "B", text: "Both $q_1$ and $q_2$ and their distance", isCorrect: true, explanation: "Work is $q_2 V_1$." } ] },
            { id: "s2", type: "theory", title: "Energy of a Point Charge Distribution", content: "To assemble a collection of point charges, you bring them in one by one. \n- $q_1$ takes 0 work.\n- $q_2$ takes $W_2 = q_2 V_1(\\mathbf{r}_2) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{\\cal{r}_{12}}$.\n- $q_3$ takes $W_3 = q_3 (V_1 + V_2)$.\n\nSumming all pairs gives the total energy stored in the configuration:\n$W = \\frac{1}{2} \\sum_{i=1}^n q_i V(\\mathbf{r}_i)$\n\n*(The 1/2 prevents double-counting each pair).*" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: The Factor of 1/2", 
              content: "**Goal: Understand why the 1/2 is necessary.**", 
              interactiveSteps: [
                {
                  stepText: "Consider just two charges. The total work is $W = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{\\cal{r}_{12}}$."
                },
                {
                  prompt: "If we evaluate $\\sum q_i V(\\mathbf{r}_i)$, we get $q_1 V(\\mathbf{r}_1) + q_2 V(\\mathbf{r}_2)$. What is $V(\\mathbf{r}_1)$ here?",
                  options: [
                    { id: "A", text: "The potential due to $q_2$", isCorrect: true, explanation: "The potential AT q1 is created BY q2." },
                    { id: "B", text: "The potential due to $q_1$", isCorrect: false, explanation: "A charge doesn't feel its own potential in this sum." }
                  ],
                  stepText: "$V(\\mathbf{r}_1) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_2}{\\cal{r}_{12}}$ and $V(\\mathbf{r}_2) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1}{\\cal{r}_{12}}$."
                },
                {
                  stepText: "So the sum gives $q_1 (k \\frac{q_2}{\\cal{r}}) + q_2 (k \\frac{q_1}{\\cal{r}}) = 2 \\left( k \\frac{q_1 q_2}{\\cal{r}} \\right)$. It counted the pair twice!"
                },
                {
                  stepText: "Multiplying by 1/2 corrects this double-counting. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Two Charges", content: "Two charges, each 2 C, are separated by 1 meter. Assuming $\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9$, what is the stored energy in Joules? (Write your answer divided by $10^9$)", numericAnswer: 36, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Sign of Energy", content: "Can the total electrostatic energy of a point charge distribution be negative?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "If attractive forces dominate, you extract energy bringing them together (negative work)." }, { id: "B", text: "No", isCorrect: false, explanation: "It can be negative for opposite charges." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The total work required to assemble a charge distribution represents the ___ energy stored in the configuration.", blankAnswer: "potential" }
          ]
        },
        {
          id: "les-8-3-energy-continuous", title: "Continuous Energy", description: "Integrating over volume", icon: "Cloud",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "To convert the discrete sum $W = \\frac{1}{2} \\sum q_i V_i$ into a continuous formula, what does $q_i$ become?", options: [ { id: "A", text: "$\\rho d\\tau$", isCorrect: true, explanation: "Charge density times volume element." }, { id: "B", text: "$E d\\tau$", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Energy of a Continuous Charge Distribution", content: "For a volume charge density $\\rho$, the sum translates directly into an integral:\n\n$W = \\frac{1}{2} \\int \\rho V d\\tau$\n\nIf the charge is localized to surfaces or lines, we use $\\sigma$ or $\\lambda$ respectively:\n$W = \\frac{1}{2} \\int \\sigma V da$\n$W = \\frac{1}{2} \\int \\lambda V dl$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Eliminating Rho", 
              content: "**Goal: Prepare to express energy solely in terms of fields.**", 
              interactiveSteps: [
                {
                  stepText: "We have $W = \\frac{1}{2} \\int \\rho V d\\tau$."
                },
                {
                  prompt: "By Gauss's law, how can we rewrite $\\rho$ in terms of the electric field?",
                  options: [
                    { id: "A", text: "$\\rho = \\epsilon_0 \\nabla \\cdot \\mathbf{E}$", isCorrect: true, explanation: "Differential form of Gauss's Law." },
                    { id: "B", text: "$\\rho = -\\nabla V$", isCorrect: false, explanation: "That's E." }
                  ],
                  stepText: "Substitute this in: $W = \\frac{\\epsilon_0}{2} \\int (\\nabla \\cdot \\mathbf{E}) V d\\tau$."
                },
                {
                  stepText: "This sets the stage for integration by parts, which we will do in the next lesson to find a beautiful new formula!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Factor of 1/2", content: "Does the continuous energy formula still require the factor of 1/2?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "It inherits the 1/2 from the discrete sum (avoiding double counting)." }, { id: "B", text: "No", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "For a continuous volume charge, the energy is one-half the integral of $\\rho$ times ___.", blankAnswer: "V" }
          ]
        },
        {
          id: "les-8-4-energy-field", title: "Energy in the Field", description: "Integrating E-squared", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Can energy be stored in empty space where there is no charge?", options: [ { id: "A", text: "Yes, in the electric field itself.", isCorrect: true, explanation: "The field carries energy." }, { id: "B", text: "No, only matter holds energy.", isCorrect: false, explanation: "Fields have physical reality and carry energy." } ] },
            { id: "s2", type: "theory", title: "Energy Stored in the Electric Field", content: "Using integration by parts on $W = \\frac{\\epsilon_0}{2} \\int (\\nabla \\cdot \\mathbf{E}) V d\\tau$, we can transfer the derivative from $\\mathbf{E}$ to $V$.\n\nSince $\\nabla V = -\\mathbf{E}$, and assuming we integrate over *all space* so the boundary surface terms vanish at infinity, we obtain a magnificent result:\n\n$W = \\frac{\\epsilon_0}{2} \\int_{\\text{all space}} E^2 d\\tau$\n\nThis implies that energy is stored directly in the electric field, with an **energy density** of $\\frac{\\epsilon_0}{2} E^2$." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation", 
              content: "**Goal: Derive the $E^2$ formula.**", 
              interactiveSteps: [
                {
                  stepText: "Start with $\\frac{\\epsilon_0}{2} \\int_{\\mathcal{V}} (\\nabla \\cdot \\mathbf{E}) V d\\tau$."
                },
                {
                  stepText: "Use the product rule: $\\nabla \\cdot (V\\mathbf{E}) = V(\\nabla \\cdot \\mathbf{E}) + \\mathbf{E} \\cdot (\\nabla V)$."
                },
                {
                  prompt: "Substitute $V(\\nabla \\cdot \\mathbf{E}) = \\nabla \\cdot (V\\mathbf{E}) - \\mathbf{E} \\cdot (\\nabla V)$. What does $-\\mathbf{E} \\cdot (\\nabla V)$ become?",
                  options: [
                    { id: "A", text: "$E^2$", isCorrect: true, explanation: "Since -Grad V = E, it becomes E dot E = E^2." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The integral splits: $\\frac{\\epsilon_0}{2} \\int E^2 d\\tau + \\frac{\\epsilon_0}{2} \\int \\nabla \\cdot (V\\mathbf{E}) d\\tau$."
                },
                {
                  stepText: "By the Divergence Theorem, the second term becomes a surface integral $\\oint V\\mathbf{E} \\cdot d\\mathbf{a}$. If we expand the volume to all space, V and E go to zero at infinity, killing the surface term. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Limits of Integration", content: "To use the formula $W = \\frac{\\epsilon_0}{2} \\int E^2 d\\tau$, over what region MUST you integrate?", options: [ { id: "A", text: "Only where the charge is.", isCorrect: false, explanation: "E extends beyond the charge." }, { id: "B", text: "Over all space.", isCorrect: true, explanation: "To ensure the boundary surface integral goes to zero at infinity." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The quantity $\\frac{\\epsilon_0}{2} E^2$ represents the electrostatic energy ___ in space.", blankAnswer: "density" }
          ]
        },
        {
          id: "les-8-5-energy-location", title: "Where is the Energy?", description: "Charge vs Field", icon: "MapPin",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "We have two formulas for energy: one integrating $\\rho V$ and one integrating $E^2$. Which is physically 'correct'?", options: [ { id: "A", text: "Both give the exact same total energy.", isCorrect: true, explanation: "They are mathematically equivalent over all space." }, { id: "B", text: "Only the E-field one is correct.", isCorrect: false, explanation: "Both yield the correct total." } ] },
            { id: "s2", type: "theory", title: "Where is the Energy Stored?", content: "Equations $W = \\frac{1}{2} \\int \\rho V d\\tau$ and $W = \\frac{\\epsilon_0}{2} \\int E^2 d\\tau$ offer two different views.\n\n- The first implies energy is stored **in the charge**.\n- The second implies energy is stored **in the electric field**.\n\nIn electrostatics, there is no way to prove one over the other; it's a matter of bookkeeping. However, in electrodynamics (when radiation and light carry energy across empty space), it becomes absolutely essential to view the energy as being stored in the **field**." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Point Charge Dilemma", 
              content: "**Goal: See why $E^2$ gives infinity for a point charge.**", 
              interactiveSteps: [
                {
                  stepText: "A point charge has field $E = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2}$."
                },
                {
                  prompt: "If we try to find its self-energy using $\\int E^2 d\\tau$, what is the integrand proportional to?",
                  options: [
                    { id: "A", text: "$1/r^4$", isCorrect: true, explanation: "Squaring E squares the 1/r^2." },
                    { id: "B", text: "$1/r^2$", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The integral is $\\int_0^\\infty (1/r^4) (r^2 dr) \\sim \\int (1/r^2) dr$."
                },
                {
                  stepText: "Evaluated at the lower limit (r=0), this integral blows up to infinity! The $E^2$ formula includes the infinite 'fabrication' energy of the point charges themselves."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Inconsistency?", content: "Why do we use the discrete sum $\\frac{1}{2}\\sum q_i V_i$ for point charges if it ignores this infinite self-energy?", options: [ { id: "A", text: "Because we only care about the work to *assemble* them, not create the particles themselves.", isCorrect: true, explanation: "The electrons already exist; we just move them." }, { id: "B", text: "Because the E^2 formula is wrong.", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "In general relativity and advanced electrodynamics, energy is strictly regarded as being stored in the ___.", blankAnswer: "field" }
          ]
        },
        {
          id: "les-8-6-superposition-energy", title: "Superposition and Energy", description: "Cross terms", icon: "XSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you double the charge everywhere in a system, what happens to the total electric field?", options: [ { id: "A", text: "It doubles", isCorrect: true, explanation: "E is linear with charge." }, { id: "B", text: "It quadruples", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If you double the charge everywhere, what happens to the total stored ENERGY?", options: [ { id: "A", text: "It doubles", isCorrect: false, explanation: "Energy depends on E squared!" }, { id: "B", text: "It quadruples", isCorrect: true, explanation: "Since W ~ E^2, doubling E makes it 4 times larger." } ] },
            { id: "s2", type: "theory", title: "Energy does NOT obey Superposition", content: "Because electrostatic energy is quadratic in the fields (it depends on $E^2$ or $\\rho V$), it **does not** obey the superposition principle.\n\nIf you have two systems, the total energy is NOT $W_1 + W_2$. \n$W_{tot} = \\frac{\\epsilon_0}{2} \\int (\\mathbf{E}_1 + \\mathbf{E}_2)^2 d\\tau$\n$W_{tot} = \\frac{\\epsilon_0}{2} \\int (E_1^2 + E_2^2 + 2\\mathbf{E}_1 \\cdot \\mathbf{E}_2) d\\tau$\n\n$W_{tot} = W_1 + W_2 + \\epsilon_0 \\int (\\mathbf{E}_1 \\cdot \\mathbf{E}_2) d\\tau$\n\nThe third term is the **interaction energy**. It represents the work required to bring the two systems together." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Interaction Energy", 
              content: "**Goal: Understand the meaning of the cross term.**", 
              interactiveSteps: [
                {
                  prompt: "If system 1 and system 2 are infinitely far apart, what is their interaction energy?",
                  options: [
                    { id: "A", text: "Zero", isCorrect: true, explanation: "E1 and E2 don't overlap significantly anywhere, so E1 dot E2 is zero." },
                    { id: "B", text: "Infinite", isCorrect: false, explanation: "" }
                  ],
                  stepText: "If they are far apart, the cross term vanishes."
                },
                {
                  stepText: "As you bring them together, the fields overlap. The integral $\\epsilon_0 \\int (\\mathbf{E}_1 \\cdot \\mathbf{E}_2) d\\tau$ exactly equals the mechanical work you did to push system 2 into the field of system 1!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Quadratic Nature", content: "Which of the following quantities does NOT obey the superposition principle?", options: [ { id: "A", text: "Electric Field", isCorrect: false, explanation: "It does." }, { id: "B", text: "Electric Potential", isCorrect: false, explanation: "It does." }, { id: "C", text: "Electrostatic Energy", isCorrect: true, explanation: "It is quadratic." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The energy of a combined system includes the self-energies plus the ___ energy.", blankAnswer: "interaction" }
          ]
        },
        {
          id: "les-8-7-ex2-9-shell", title: "Example 2.9: Energy of a Shell", description: "Using the V formula", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.9", content: "**Problem:** Find the energy of a uniformly charged spherical shell of total charge $q$ and radius $R$.\n\n*Hint:* Use the surface charge formula $W = \\frac{1}{2} \\int \\sigma V da$. Recall that $V$ is constant on the surface." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Evaluate $W = \\frac{1}{2} \\int \\sigma V da$.**", 
              interactiveSteps: [
                {
                  prompt: "From earlier examples, what is the potential $V$ exactly on the surface of the shell?",
                  options: [
                    { id: "A", text: "$\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R}$", isCorrect: true, explanation: "Correct." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "$V = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R}$."
                },
                {
                  stepText: "Since V is a constant, it pulls out of the integral: $W = \\frac{1}{2} V \\int \\sigma da$."
                },
                {
                  prompt: "What is $\\int \\sigma da$ (the surface density integrated over the surface)?",
                  options: [
                    { id: "A", text: "The total charge $q$", isCorrect: true, explanation: "Definition of total charge." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "It evaluates to $q$."
                },
                {
                  stepText: "Therefore, $W = \\frac{1}{2} \\left(\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{R}\\right) q = \\frac{1}{8\\pi\\epsilon_0}\\frac{q^2}{R}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Alternate Method", content: "Could we have solved this using the $E^2$ formula?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "We would integrate E^2 from R to infinity (since E=0 inside). It gives the exact same result." }, { id: "B", text: "No", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-8-8-ex-solid-sphere", title: "Energy of a Solid Sphere", description: "Using the E-squared formula", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.35", content: "**Problem:** Find the energy stored in a uniformly charged *solid* sphere of radius $R$ and total charge $q$.\n\n*Hint:* Use $W = \\frac{\\epsilon_0}{2} \\int E^2 d\\tau$. Remember to integrate over ALL space (inside AND outside the sphere)." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Evaluate the $E^2$ integral over all space.**", 
              interactiveSteps: [
                {
                  stepText: "We must split the integral: $\\int_{inside} E_{in}^2 d\\tau + \\int_{outside} E_{out}^2 d\\tau$."
                },
                {
                  prompt: "What is $E_{in}$ and $E_{out}$?",
                  options: [
                    { id: "A", text: "$E_{in} \\propto r$, $E_{out} \\propto 1/r^2$", isCorrect: true, explanation: "Inside it grows linearly, outside it falls off like a point charge." },
                    { id: "B", text: "$E_{in} = 0$, $E_{out} \\propto 1/r^2$", isCorrect: false, explanation: "That's a hollow shell, not a solid sphere." }
                  ],
                  stepText: "$E_{in} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q r}{R^3}$ and $E_{out} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}$."
                },
                {
                  stepText: "Inside integral: $\\int_0^R (\\frac{q r}{R^3})^2 (4\\pi r^2 dr) = \\frac{4\\pi q^2}{R^6} \\int_0^R r^4 dr = \\frac{4\\pi q^2}{5 R}$."
                },
                {
                  stepText: "Outside integral: $\\int_R^\\infty (\\frac{q}{r^2})^2 (4\\pi r^2 dr) = 4\\pi q^2 \\int_R^\\infty \\frac{1}{r^2} dr = \\frac{4\\pi q^2}{R}$."
                },
                {
                  stepText: "Adding them and multiplying by $\\frac{\\epsilon_0}{2 (4\\pi\\epsilon_0)^2}$ gives $W = \\frac{3}{20\\pi\\epsilon_0} \\frac{q^2}{R}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "numerical", title: "Compare Energies", content: "The energy of the shell was $\\frac{1}{8\\pi\\epsilon_0} \\frac{q^2}{R}$. The solid sphere is $\\frac{3}{20\\pi\\epsilon_0} \\frac{q^2}{R}$. Which has a higher coefficient (1/8 or 3/20)? (Answer in decimals)", numericAnswer: 0.15, numericTolerance: 0.01 }
          ]
        }
      ]
    },
    {
      id: "unit-9-conductors",
      title: "Conductors",
      description: "Properties of ideal conductors, shielding, and capacitors.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-9-1-conductor-properties", title: "Ideal Conductors", description: "Basic electrostatic properties", icon: "Zap",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "In a metal, what is free to move?", options: [ { id: "A", text: "Protons", isCorrect: false, explanation: "Protons are locked in the lattice." }, { id: "B", text: "Electrons", isCorrect: true, explanation: "Conduction electrons can roam freely." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If you place a conductor in an external electric field, what happens?", options: [ { id: "A", text: "The field passes straight through unchanged.", isCorrect: false, explanation: "" }, { id: "B", text: "The free charges move until they cancel the internal field.", isCorrect: true, explanation: "They rearrange to kill the field inside." } ] },
            { id: "s2", type: "theory", title: "Basic Properties of Conductors", content: "An ideal conductor contains an unlimited supply of free charges. From this, several electrostatic properties strictly follow:\n\n1. **$\\mathbf{E} = 0$ inside:** If there were a field, charges would move. They stop moving only when the field is exactly canceled.\n2. **$\\rho = 0$ inside:** Since $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$, and $\\mathbf{E}=0$, the net charge density inside must be zero.\n3. **Net charge resides on the surface:** Since it can't be inside, any excess charge must sit on the outer boundary.\n4. **It is an equipotential:** Since $\\mathbf{E}=0$ inside, $\\Delta V = 0$ between any two points. The whole conductor is at a single uniform potential.\n5. **$\\mathbf{E}$ is perpendicular to the surface:** If it had a tangential component, surface charges would flow." },
            { id: "s3", type: "interactive_canvas", title: "Charge Rearrangement", content: "When an external field is applied, electrons rush to one side, leaving positive nuclei exposed on the other, creating an opposing internal field.", interactiveCanvasId: "conductor-charges-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: E is Perpendicular", 
              content: "**Goal: Understand why field lines hit metals exactly at 90 degrees.**", 
              interactiveSteps: [
                {
                  prompt: "Suppose a field line hits the surface of a metal at an angle, meaning it has a component parallel (tangential) to the surface. What will happen to a free electron sitting there?",
                  options: [
                    { id: "A", text: "It will be pushed along the surface.", isCorrect: true, explanation: "The tangential force causes lateral current." },
                    { id: "B", text: "It will sit still.", isCorrect: false, explanation: "It's free to move!" }
                  ],
                  stepText: "A tangential field creates a surface current."
                },
                {
                  stepText: "But we are studying electro*statics*. All charges must be at rest. Therefore, the tangential field must be exactly zero."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Charge location", content: "If you inject 5 Coulombs of charge deep into the interior of a solid block of copper, where does it end up?", options: [ { id: "A", text: "It stays in the interior.", isCorrect: false, explanation: "" }, { id: "B", text: "It immediately flows to the outer surface.", isCorrect: true, explanation: "Because rho must be zero inside." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The entire volume and surface of a conductor forms a single ___ volume (same V everywhere).", blankAnswer: "equipotential" }
          ]
        },
        {
          id: "les-9-2-induced-charges", title: "Induced Charges", description: "Shielding and Cavities", icon: "Shield",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you bring a positive charge near a neutral block of metal, the metal will:", options: [ { id: "A", text: "Repel the charge", isCorrect: false, explanation: "Think about what the electrons do." }, { id: "B", text: "Attract the charge", isCorrect: true, explanation: "Electrons are drawn near, creating a net attractive force." } ] },
            { id: "s2", type: "theory", title: "Induced Charges & Cavities", content: "When a charge is brought near a conductor, it pulls opposite charges near and pushes like charges away. These are **induced charges**.\n\n**Cavities:** If there is a hollow cavity inside a conductor, and you put a charge $+q$ inside it, it induces $-q$ on the inner wall to cancel the field in the metal. If the conductor is neutral, a $+q$ charge must appear on the *outer* surface.\n\nRemarkably, the external field outside the conductor knows *nothing* about the exact location or shape of the cavity inside; it only 'sees' the uniform $+q$ distributed on the outer surface. The conductor completely isolates the inside from the outside!" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Faraday Cage", 
              content: "**Goal: Understand why an empty cavity has no field.**", 
              interactiveSteps: [
                {
                  stepText: "Suppose an empty cavity is inside a conductor subjected to a massive external lightning storm."
                },
                {
                  prompt: "Could a field line cross the empty cavity? If it did, it must start on a + charge and end on a - charge on the cavity walls. What does $\\oint \\mathbf{E} \\cdot d\\mathbf{l}$ equal for a loop tracing that line and returning through the metal?",
                  options: [
                    { id: "A", text: "Zero", isCorrect: true, explanation: "Loop integrals must be zero." },
                    { id: "B", text: "Positive", isCorrect: false, explanation: "It can't be." }
                  ],
                  stepText: "The integral through the metal is 0. If the cavity had a field, the total loop wouldn't be 0, violating electrostatics."
                },
                {
                  stepText: "Conclusion: An empty cavity inside a conductor has absolutely NO electric field, regardless of external storms. This is a Faraday Cage."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Car in a storm", content: "Why are you safe inside a metal car during a lightning strike?", options: [ { id: "A", text: "Rubber tires block the electricity.", isCorrect: false, explanation: "Lightning just jumped miles of air, an inch of rubber won't stop it." }, { id: "B", text: "The metal chassis acts as a Faraday cage, keeping E=0 inside.", isCorrect: true, explanation: "Charges flow over the skin of the car." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A grounded metallic enclosure used to block out external electric fields is called a ___ cage.", blankAnswer: "Faraday" }
          ]
        },
        {
          id: "les-9-3-surface-force", title: "Force on a Conductor", description: "Electrostatic pressure", icon: "ArrowUpRight",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you have a patch of positive charge on a surface, does it push itself away?", options: [ { id: "A", text: "Yes, the charges repel each other.", isCorrect: true, explanation: "Like charges repel, creating an outward pressure." }, { id: "B", text: "No", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Surface Charge and Force", content: "The field just outside a conductor is $\\mathbf{E} = \\frac{\\sigma}{\\epsilon_0}\\mathbf{\\hat{n}}$.\n\nThe charge on the surface experiences a force due to this field. But wait! The field is discontinuous (it's 0 inside, and $E$ outside). Which field value does the surface charge 'feel'?\n\nIt feels the **average** of the field above and below it: $\\mathbf{E}_{avg} = \\frac{1}{2}(\\mathbf{E}_{out} + \\mathbf{E}_{in}) = \\frac{1}{2}(\\frac{\\sigma}{\\epsilon_0}\\mathbf{\\hat{n}} + 0)$.\n\nThe force per unit area (pressure) is $\\mathbf{f} = \\sigma \\mathbf{E}_{avg} = \\frac{\\sigma^2}{2\\epsilon_0}\\mathbf{\\hat{n}}$." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Why the Average?", 
              content: "**Goal: Understand why we use $1/2$ the field.**", 
              interactiveSteps: [
                {
                  stepText: "A patch of charge cannot exert a net force on *itself*. It only feels the field produced by *other* charges."
                },
                {
                  prompt: "The total field outside is $\\mathbf{E}_{patch} + \\mathbf{E}_{other}$. The field inside is $-\\mathbf{E}_{patch} + \\mathbf{E}_{other} = 0$. From this, what is $\\mathbf{E}_{other}$?",
                  options: [
                    { id: "A", text: "$\\mathbf{E}_{patch}$", isCorrect: true, explanation: "Because they must cancel inside." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "$\\mathbf{E}_{other} = \\mathbf{E}_{patch}$. Thus the total field outside is $2\\mathbf{E}_{other}$."
                },
                {
                  stepText: "The patch only feels $\\mathbf{E}_{other}$, which is exactly HALF of the total external field. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Pressure Calculation", content: "If $E_{outside} = 100$ V/m, what is the electrostatic pressure $P = \\frac{\\epsilon_0}{2} E^2$ in terms of $\\epsilon_0$?", numericAnswer: 5000, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Pressure Direction", content: "Does the electrostatic pressure pull the conductor outward, or push it inward?", options: [ { id: "A", text: "Always outward (pulls into the field)", isCorrect: true, explanation: "Because sigma squared is always positive." }, { id: "B", text: "Inward for negative charges.", isCorrect: false, explanation: "Negative times negative is positive." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The outward force per unit area on a conductor is known as electrostatic ___.", blankAnswer: "pressure" }
          ]
        },
        {
          id: "les-9-4-capacitors", title: "Capacitors", description: "Storing charge", icon: "Battery",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you have two metal plates and put +Q on one and -Q on the other, the voltage between them is:", options: [ { id: "A", text: "Proportional to Q", isCorrect: true, explanation: "E is proportional to Q, so V is too." }, { id: "B", text: "Independent of Q", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Capacitance", content: "Suppose we have two conductors, carrying charge $+Q$ and $-Q$. Since $V$ is constant over each conductor, there is a well-defined potential difference $V$ between them.\n\nBecause the electric field is proportional to $Q$, the potential difference $V$ is also strictly proportional to $Q$.\nThe constant of proportionality is called **Capacitance** ($C$):\n\n$C \\equiv \\frac{Q}{V}$\n\nCapacitance is a purely geometrical quantity, depending only on the size, shape, and separation of the conductors. It is measured in **Farads** (Coulombs per Volt)." },
            { id: "s3", type: "interactive_canvas", title: "Parallel Plate Capacitor", content: "Adjust the distance between the plates. Notice that bringing them closer increases the capacitance (ability to store charge at a given voltage).", interactiveCanvasId: "capacitor-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Parallel Plates", 
              content: "**Goal: Find $C$ for two plates of area $A$ separated by $d$.**", 
              interactiveSteps: [
                {
                  prompt: "The field of a single plate is $\\frac{\\sigma}{2\\epsilon_0}$. Between two opposite plates, the fields add. What is the total $E$?",
                  options: [
                    { id: "A", text: "$\\frac{\\sigma}{\\epsilon_0}$", isCorrect: true, explanation: "Half plus half is a whole." },
                    { id: "B", text: "0", isCorrect: false, explanation: "That's outside the plates." }
                  ],
                  stepText: "$E = \\frac{\\sigma}{\\epsilon_0} = \\frac{Q}{A\\epsilon_0}$."
                },
                {
                  stepText: "The potential difference is $V = E d = \\frac{Q d}{A \\epsilon_0}$."
                },
                {
                  stepText: "Substitute into $C = Q/V$. We get $C = \\frac{\\epsilon_0 A}{d}$. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Calculate Capacitance", content: "If $Q = 10 \\mu\\text{C}$ and $V = 5$ Volts, what is the capacitance in microfarads ($\\mu\\text{F}$)?", numericAnswer: 2, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Geometrical Nature", content: "If you double the charge on a capacitor, what happens to its capacitance?", options: [ { id: "A", text: "It doubles", isCorrect: false, explanation: "Voltage doubles too, ratio is constant." }, { id: "B", text: "It stays exactly the same", isCorrect: true, explanation: "Capacitance is strictly based on physical geometry." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The SI unit of capacitance is the ___, which equals one Coulomb per Volt.", blankAnswer: "Farad" }
          ]
        },
        {
          id: "les-9-5-work-capacitor", title: "Charging a Capacitor", description: "Work required", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Is it harder to put the first electron on a capacitor plate, or the last electron?", options: [ { id: "A", text: "First", isCorrect: false, explanation: "The plate is neutral at first." }, { id: "B", text: "Last", isCorrect: true, explanation: "You must fight the repulsion of all the electrons already there." } ] },
            { id: "s2", type: "theory", title: "Work to Charge a Capacitor", content: "To 'charge up' a capacitor, you have to rip electrons off the positive plate and shove them onto the negative plate, fighting the electric field the whole way.\n\nIf the current charge is $q$, the voltage is $v = q/C$. The work $dW$ to move a tiny extra charge $dq$ across this voltage is $dW = v dq = \\frac{q}{C} dq$.\n\nIntegrating from $q=0$ to $q=Q$ gives the total work:\n$W = \\int_0^Q \\frac{q}{C} dq = \\frac{1}{2} \\frac{Q^2}{C}$\n\nUsing $Q=CV$, this is equivalently $W = \\frac{1}{2} C V^2$." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Comparing Formulas", 
              content: "**Goal: Connect this to the field energy formula.**", 
              interactiveSteps: [
                {
                  stepText: "We know $W = \\frac{1}{2} C V^2$. Let's test this on a parallel plate capacitor where $C = \\epsilon_0 A / d$ and $V = E d$."
                },
                {
                  prompt: "Substitute these in: $W = \\frac{1}{2} (\\frac{\\epsilon_0 A}{d}) (E d)^2$. What does this simplify to?",
                  options: [
                    { id: "A", text: "$\\frac{1}{2} \\epsilon_0 E^2 (A d)$", isCorrect: true, explanation: "Correct algebraic simplification." },
                    { id: "B", text: "$\\frac{1}{2} \\epsilon_0 E^2$", isCorrect: false, explanation: "Don't forget the volume." }
                  ],
                  stepText: "It simplifies to $\\frac{\\epsilon_0}{2} E^2 \\times (A d)$."
                },
                {
                  stepText: "Notice that $A \\times d$ is exactly the VOLUME of the capacitor! This perfectly matches our fundamental formula $W = \\int \\frac{\\epsilon_0}{2} E^2 d\\tau$."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Stored Energy", content: "A $2 \\mu\\text{F}$ capacitor is charged to 10 Volts. What is the stored energy in microjoules?", numericAnswer: 100, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Factor of 1/2", content: "Why is the energy $\\frac{1}{2} Q V$ and not simply $Q V$?", options: [ { id: "A", text: "Because the voltage starts at 0 and grows to V, so the average voltage is V/2.", isCorrect: true, explanation: "Exactly. The first charges are 'free' to move." }, { id: "B", text: "Because there are two plates.", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The energy stored in a capacitor can be written as one-half $C$ times $V$ ___.", blankAnswer: "squared" }
          ]
        }
      ]
    },
    {
      id: "unit-10-summary-2-4",
      title: "Section Summary",
      description: "Recap of Work, Energy, and Conductors.",
      color: "duo-green",
      lessons: [
        {
          id: "les-10-1-recap",
          title: "Work & Conductors Recap",
          description: "Review of Units 8 & 9",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "Electrostatic energy is stored in the electric field with a density proportional to:", options: [ { id: "A", text: "$E$", isCorrect: false, explanation: "" }, { id: "B", text: "$E^2$", isCorrect: true, explanation: "Energy density is $\\frac{\\epsilon_0}{2} E^2$." } ] },
            { id: "s1", type: "quiz", title: "Knowledge Check 2", content: "Inside an ideal conductor in electrostatics, the electric field is always:", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "Charges rearrange to kill any internal field." }, { id: "B", text: "Constant, but non-zero", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Section 4 Summary", content: "**Work and Energy:** The work required to assemble a charge distribution represents stored potential energy. It can be calculated by summing over the charges ($\\frac{1}{2}\\int \\rho V d\\tau$) or by integrating over the field ($\\frac{\\epsilon_0}{2}\\int E^2 d\\tau$). Because it depends on $E^2$, energy does *not* obey superposition.\n\n**Conductors:** In electrostatics, ideal conductors have $\\mathbf{E}=0$ and $\\rho=0$ inside. Any net charge resides on the surface. The entire conductor is an equipotential, and the external field is perpendicular to the surface. Capacitors store charge and energy, with $C = Q/V$ and $W = \\frac{1}{2}CV^2$." }
          ]
        }
      ]
    }
  ]
};