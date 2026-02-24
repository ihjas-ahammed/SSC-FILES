import { Section } from '../types';

export const SECTION_2_1: Section = {
  id: "section-2-1",
  title: "Section 1: The Electric Field",
  description: "Coulomb's law, the electric field definition, and continuous charge distributions.",
  color: "duo-blue",
  units: [
    {
      id: "unit-5-electric-field",
      title: "The Electric Field",
      description: "Coulomb's Law, Point Charges, and Continuous Distributions.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-5-1-intro", title: "Introduction to Electrostatics", description: "Source charges and test charges", icon: "Zap",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you have two charges repelling each other, and you bring a third charge nearby, does the original repulsion force between the first two charges change?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Forces simply add together." }, { id: "B", text: "No", isCorrect: true, explanation: "The individual interaction remains unaffected. This is the Principle of Superposition." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "In electrostatics, we assume the 'source' charges are:", options: [ { id: "A", text: "Moving at constant velocity", isCorrect: false, explanation: "That would be magnetostatics." }, { id: "B", text: "Stationary", isCorrect: true, explanation: "Electro-STATIC means the sources are at rest." } ] },
            { id: "s2", type: "theory", title: "The Fundamental Problem", content: "The fundamental problem of electrodynamics is: given a set of **source charges** ($q_1, q_2, ...$), what force do they exert on a **test charge** ($Q$)?\n\nIn **electrostatics**, all source charges are completely stationary (though the test charge may move).\n\nWe rely on the **Principle of Superposition**: The interaction between any two charges is completely unaffected by the presence of others. We just compute the individual forces and take their vector sum." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Superposition", 
              content: "**Goal: Understand how total force is calculated.**", 
              interactiveSteps: [
                {
                  prompt: "If charge $q_1$ pulls test charge $Q$ with force $\\mathbf{F}_1$, and charge $q_2$ pushes $Q$ with force $\\mathbf{F}_2$, how do we find the total force $\\mathbf{F}$?",
                  options: [
                    { id: "A", text: "Add their magnitudes: $F_1 + F_2$", isCorrect: false, explanation: "Forces are vectors, direction matters!" },
                    { id: "B", text: "Take the vector sum: $\\mathbf{F}_1 + \\mathbf{F}_2$", isCorrect: true, explanation: "Superposition is a vector addition." }
                  ],
                  stepText: "The total force is $\\mathbf{F}_{total} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 + ...$"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Superposition Truth", content: "Is the Principle of Superposition a logical mathematical necessity?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "It is strictly an experimental fact! If electric force depended on the square of total charge, it wouldn't hold." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Charges that create the field are called ___ charges.", blankAnswer: "source" }
          ]
        },
        {
          id: "les-5-2-coulomb", title: "Coulomb's Law", description: "The force between point charges", icon: "Magnet",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you double the distance between two point charges, what happens to the electrical force between them?", options: [ { id: "A", text: "It halves", isCorrect: false, explanation: "" }, { id: "B", text: "It drops to one quarter (1/4)", isCorrect: true, explanation: "It follows an inverse-square law." }, { id: "C", text: "It doubles", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Like charges ______, and opposite charges ______.", options: [ { id: "A", text: "Repel, Attract", isCorrect: true, explanation: "Basic rule of electric charges." }, { id: "B", text: "Attract, Repel", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Coulomb's Law", content: "The force on a test charge $Q$ due to a point charge $q$ is:\n\n$\\mathbf{F} = \\frac{1}{4\\pi\\epsilon_0} \\frac{qQ}{\\cal{r}^2} {\\hat{\\cal{r}}}$\n\n- $\\epsilon_0 = 8.85 \\times 10^{-12} \\frac{C^2}{N \\cdot m^2}$ (Permittivity of free space)\n- ${\\cal{r}} = \\mathbf{r} - \\mathbf{r}'$ is the separation vector from the source to the test charge." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: The Separation Vector", 
              content: "**Goal: Understand the direction of the force.**", 
              interactiveSteps: [
                {
                  prompt: "In the formula, what does the unit vector ${\\hat{\\cal{r}}}$ do?",
                  options: [
                    { id: "A", text: "It determines the magnitude of the force", isCorrect: false, explanation: "Unit vectors have magnitude 1." },
                    { id: "B", text: "It points the force along the line connecting the charges", isCorrect: true, explanation: "It gives the force its spatial direction." }
                  ],
                  stepText: "${\\hat{\\cal{r}}}$ points directly from $q$ to $Q$."
                },
                {
                  prompt: "If the product $qQ$ is negative (opposite charges), what happens to the force vector?",
                  options: [
                    { id: "A", text: "It points in the $-{\\hat{\\cal{r}}}$ direction", isCorrect: true, explanation: "The negative sign reverses the vector, pointing it back toward the source (attraction)." },
                    { id: "B", text: "It becomes zero", isCorrect: false, explanation: "" }
                  ],
                  stepText: "A negative product means the force is attractive!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Inverse Square", content: "If the force between two charges at $1$ meter is $100$ N, what is the force in Newtons if they are moved to $2$ meters apart?", numericAnswer: 25, numericTolerance: 0.1 },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The constant $\\epsilon_0$ is called the ___ of free space.", blankAnswer: "permittivity" }
          ]
        },
        {
          id: "les-5-3-e-field", title: "The Electric Field", description: "Removing the test charge", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Does a single isolated charge create a field in space even if there are no other charges to feel it?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "The field exists independently of the test charge." }, { id: "B", text: "No", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "How is the electric field conceptually defined from force?", options: [ { id: "A", text: "Force times test charge", isCorrect: false, explanation: "" }, { id: "B", text: "Force per unit test charge", isCorrect: true, explanation: "E = F / Q" } ] },
            { id: "s2", type: "theory", title: "Definition of the Electric Field", content: "Instead of writing the force on $Q$ for every problem, we define the **Electric Field** $\\mathbf{E}$ of the source charges, such that:\n\n$\\mathbf{F} = Q\\mathbf{E}$\n\nFor a single point charge at the origin, the field is:\n$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\mathbf{\\hat{r}}$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: E-Field Nature", 
              content: "**Goal: Understand what E(r) mathematically depends on.**", 
              interactiveSteps: [
                {
                  prompt: "Does the electric field $\\mathbf{E}$ depend on the value of the test charge $Q$?",
                  options: [
                    { id: "A", text: "Yes", isCorrect: false, explanation: "The force F depends on Q, but we factored Q out to get E." },
                    { id: "B", text: "No", isCorrect: true, explanation: "E is a property of the source charges only." }
                  ],
                  stepText: "$\\mathbf{E}$ is entirely independent of $Q$."
                },
                {
                  stepText: "$\\mathbf{E}(\\mathbf{r})$ is a vector field: it assigns a specific vector (magnitude and direction) to every single point $\\mathbf{r}$ in space."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Units of E", content: "What are the SI units of the Electric Field?", options: [ { id: "A", text: "Newtons (N)", isCorrect: false, explanation: "That's force." }, { id: "B", text: "Newtons per Coulomb (N/C)", isCorrect: true, explanation: "Force divided by charge." }, { id: "C", text: "Joules (J)", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The force on a charge Q is simply Q multiplied by the ___ field.", blankAnswer: "electric" }
          ]
        },
        {
          id: "les-5-4-multiple-charges", title: "Multiple Point Charges", description: "Superposition of E-fields", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you have a positive charge pulling a test field vector Right, and a negative charge pulling it Left, how do you find the net field?", options: [ { id: "A", text: "Multiply them", isCorrect: false, explanation: "" }, { id: "B", text: "Add them as vectors", isCorrect: true, explanation: "Superposition principle applies to E-fields too." } ] },
            { id: "s2", type: "theory", title: "Superposition of Electric Fields", content: "Since Force obeys superposition, and $\\mathbf{E} = \\mathbf{F}/Q$, the Electric Field also obeys superposition. \n\nFor a collection of point charges $q_1, q_2, ... q_n$, the total field at point $\\mathbf{r}$ is:\n\n$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\sum_{i=1}^{n} \\frac{q_i}{\\cal{r}_i^2} {\\hat{\\cal{r}}}_i$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Summation", 
              content: "**Goal: Understand the summation formula.**", 
              interactiveSteps: [
                {
                  prompt: "In the formula, what does $\\cal{r}_i$ represent?",
                  options: [
                    { id: "A", text: "Distance from the origin to the i-th charge", isCorrect: false, explanation: "That would be r_i (position vector magnitude)." },
                    { id: "B", text: "Distance from the i-th source charge to the field point", isCorrect: true, explanation: "It is the separation distance for that specific charge." }
                  ],
                  stepText: "Each charge has its own separation vector pointing to the location where we are evaluating the field."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Field of nothing", content: "If there are zero source charges in the universe, what is the electric field everywhere?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "No sources, no field." }, { id: "B", text: "Undefined", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The total electric field is the vector ___ of the individual fields.", blankAnswer: "sum" }
          ]
        },
        {
          id: "les-5-5-example-2-1", title: "Example 2.1: Two Equal Charges", description: "Finding the field at the midpoint", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.1", content: "**Problem:** Find the electric field a distance $z$ directly above the midpoint between two equal charges $q$, separated by a distance $d$.\n\n*Hint:* Draw the vectors. What happens to the horizontal components?" },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find the net electric field.**", 
              interactiveSteps: [
                {
                  stepText: "Let $\\mathbf{E}_1$ be the field from the left charge, and $\\mathbf{E}_2$ from the right charge."
                },
                {
                  prompt: "By symmetry, what happens to the horizontal (x) components of the two fields?",
                  options: [
                    { id: "A", text: "They add together", isCorrect: false, explanation: "They point in opposite directions." },
                    { id: "B", text: "They perfectly cancel", isCorrect: true, explanation: "Left pushes right, right pushes left equally." }
                  ],
                  stepText: "The horizontal components cancel out."
                },
                {
                  stepText: "The vertical (z) components point in the same direction and add: $E_z = 2 |E_1| \\cos\\theta$."
                },
                {
                  stepText: "Using geometry, $\\cal{r} = \\sqrt{z^2 + (d/2)^2}$ and $\\cos\\theta = z/\\cal{r}$."
                },
                {
                  stepText: "Substituting these in: $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2qz}{[z^2 + (d/2)^2]^{3/2}} \\mathbf{\\hat{z}}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Far away limit", content: "What happens to the formula when you are very far away ($z \\gg d$)?", options: [ { id: "A", text: "It goes to zero immediately", isCorrect: false, explanation: "" }, { id: "B", text: "It looks like the field of a single charge $2q$", isCorrect: true, explanation: "The $d$ term becomes negligible, yielding $\\frac{2q}{z^2}$." } ] }
          ]
        },
        {
          id: "les-5-6-dipole", title: "Example: The Dipole", description: "Field of equal and opposite charges", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Dipole Field", content: "**Problem:** Find the electric field a distance $z$ above the midpoint between equal and *opposite* charges $+q$ and $-q$, a distance $d$ apart.\n\n*Hint:* Compare this to the previous example. Which components cancel now?" },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find the net field of a dipole on its bisector.**", 
              interactiveSteps: [
                {
                  stepText: "The $+q$ charge pushes a test charge up and away. The $-q$ charge pulls it down and towards itself."
                },
                {
                  prompt: "By symmetry, which components cancel out this time?",
                  options: [
                    { id: "A", text: "The horizontal (x) components", isCorrect: false, explanation: "They both point in the same horizontal direction now!" },
                    { id: "B", text: "The vertical (z) components", isCorrect: true, explanation: "One pushes UP, one pulls DOWN equally." }
                  ],
                  stepText: "The vertical components cancel completely."
                },
                {
                  stepText: "The horizontal components add: $E_x = 2 |E_1| \\sin\\theta$."
                },
                {
                  stepText: "Using geometry, $\\sin\\theta = (d/2)/\\cal{r}$. This gives $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{qd}{[z^2 + (d/2)^2]^{3/2}} \\mathbf{\\hat{x}}$."
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Far away limit", content: "For a dipole, when you are very far away ($z \\gg d$), how does the electric field fall off?", options: [ { id: "A", text: "Like $1/z^2$", isCorrect: false, explanation: "That's for a net point charge." }, { id: "B", text: "Like $1/z^3$", isCorrect: true, explanation: "The denominator becomes $z^3$. Dipole fields fall off faster!" } ] }
          ]
        },
        {
          id: "les-5-7-continuous", title: "Continuous Charge Distributions", description: "From sums to integrals", icon: "Cloud",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you have trillions of electrons smeared out over a wire, is it practical to sum them one by one?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "It would take forever." }, { id: "B", text: "No, we should use calculus (integration)", isCorrect: true, explanation: "Integrals are continuous sums." } ] },
            { id: "s2", type: "theory", title: "Continuous Distributions", content: "When charge is distributed continuously, the discrete sum $\\sum q_i$ becomes an integral over infinitesimal charge elements $dq$:\n\n$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{1}{\\cal{r}^2} {\\hat{\\cal{r}}} dq$\n\nWe define three types of charge densities:\n- **Line charge ($\\lambda$)**: charge per unit length. $dq = \\lambda dl'$\n- **Surface charge ($\\sigma$)**: charge per unit area. $dq = \\sigma da'$\n- **Volume charge ($\\rho$)**: charge per unit volume. $dq = \\rho d\\tau'$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Densities", 
              content: "**Goal: Understand how to rewrite $dq$.**", 
              interactiveSteps: [
                {
                  prompt: "If a wire of length $L$ has a uniform total charge $Q$, what is its line charge density $\\lambda$?",
                  options: [
                    { id: "A", text: "$Q / L$", isCorrect: true, explanation: "Total charge divided by total length." },
                    { id: "B", text: "$Q \\cdot L$", isCorrect: false, explanation: "Units would be Coulomb-meters." }
                  ],
                  stepText: "$\\lambda = Q / L$."
                },
                {
                  stepText: "For an infinitesimal slice $dl'$, the tiny charge inside is $dq = \\lambda dl'$."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Units of Volume Charge", content: "What are the SI units of volume charge density ($\\rho$)?", options: [ { id: "A", text: "C / m", isCorrect: false, explanation: "" }, { id: "B", text: "C / m^2", isCorrect: false, explanation: "" }, { id: "C", text: "C / m^3", isCorrect: true, explanation: "Coulombs per cubic meter." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "For a 2D sheet of charge, we use the ___ charge density, denoted by $\\sigma$.", blankAnswer: "surface" }
          ]
        },
        {
          id: "les-5-8-line-charges", title: "Line Charges", description: "Integrating over 1D", icon: "Minus",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "To find the field of a line charge, we integrate over:", options: [ { id: "A", text: "A volume", isCorrect: false, explanation: "" }, { id: "B", text: "A path (length)", isCorrect: true, explanation: "Using $dl'$." } ] },
            { id: "s2", type: "theory", title: "Electric Field of a Line Charge", content: "Substituting $dq = \\lambda(\\mathbf{r}') dl'$ into our continuous field equation gives:\n\n$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\lambda(\\mathbf{r}')}{\\cal{r}^2} {\\hat{\\cal{r}}} dl'$\n\nThe integral is evaluated over the path of the wire. The source coordinates are primed ($x', y', z'$) to distinguish them from the field point ($x, y, z$)." },
            { id: "s5", type: "numerical", title: "Total Charge", content: "A straight wire of length 3 meters has a uniform line charge density of $\\lambda = 2$ C/m. What is the total charge Q in Coulombs?", numericAnswer: 6, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Variable Lambda", content: "Can $\\lambda$ be pulled outside the integral?", options: [ { id: "A", text: "Yes, always", isCorrect: false, explanation: "What if it's not uniform?" }, { id: "B", text: "Only if the charge density is uniform (constant)", isCorrect: true, explanation: "If it varies with position, it must stay inside the integral." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "In integration formulas, we use primed coordinates like $x'$ to denote the position of the ___.", blankAnswer: "source" }
          ]
        },
        {
          id: "les-5-9-surface-volume", title: "Surface & Volume Charges", description: "Integrating over 2D and 3D", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "For a solid block of charge, which density do we use?", options: [ { id: "A", text: "Sigma", isCorrect: false, explanation: "That's for a surface." }, { id: "B", text: "Rho", isCorrect: true, explanation: "Volume charge density." } ] },
            { id: "s2", type: "theory", title: "Fields of Surfaces and Volumes", content: "**Surface Charge**:\n$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\sigma(\\mathbf{r}')}{\\cal{r}^2} {\\hat{\\cal{r}}} da'$\n\n**Volume Charge** (The most general form of Coulomb's Law):\n$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\mathbf{r}')}{\\cal{r}^2} {\\hat{\\cal{r}}} d\\tau'$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Most General Form", 
              content: "**Goal: Understand why Volume Charge is the ultimate form.**", 
              interactiveSteps: [
                {
                  prompt: "Can a point charge be described using a volume charge density $\\rho$?",
                  options: [
                    { id: "A", text: "No, a point has no volume.", isCorrect: false, explanation: "Think about the Dirac Delta function!" },
                    { id: "B", text: "Yes, using the Dirac Delta function.", isCorrect: true, explanation: "A point charge is just an infinitely dense volume charge at a single spot." }
                  ],
                  stepText: "Using $\\rho(\\mathbf{r}) = q \\delta^3(\\mathbf{r})$, the volume integral perfectly reduces to the point charge formula."
                },
                {
                  stepText: "Therefore, the volume charge integral is the most general and mathematically complete version of Coulomb's law."
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Surface element", content: "What is $da'$ physically?", options: [ { id: "A", text: "A tiny patch of area on the source object", isCorrect: true, explanation: "" }, { id: "B", text: "A vector pointing to the field point", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The equation for a volume charge is often just referred to generally as ___'s law.", blankAnswer: "Coulomb" }
          ]
        },
        {
          id: "les-5-10-ex2-2-setup", title: "Example 2.2: Line Segment Setup", description: "Setting up the integral", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.2", content: "**Problem:** Find the electric field a distance $z$ above the midpoint of a straight line segment of length $2L$ that carries a uniform line charge $\\lambda$." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution: Setup", 
              content: "**Goal: Define ${\\cal{r}}$ and $dl'$ for the integral.**", 
              interactiveSteps: [
                {
                  stepText: "Put the wire on the x-axis from $-L$ to $+L$. The field point is at $(0, 0, z)$."
                },
                {
                  prompt: "What is the source point $\\mathbf{r}'$?",
                  options: [
                    { id: "A", text: "$x\\mathbf{\\hat{x}}$", isCorrect: true, explanation: "A generic point along the wire." },
                    { id: "B", text: "$z\\mathbf{\\hat{z}}$", isCorrect: false, explanation: "That's the field point." }
                  ],
                  stepText: "$\\mathbf{r}' = x\\mathbf{\\hat{x}}$, and $dl' = dx$."
                },
                {
                  stepText: "The field point is $\\mathbf{r} = z\\mathbf{\\hat{z}}$. Thus the separation vector is ${\\cal{r}} = z\\mathbf{\\hat{z}} - x\\mathbf{\\hat{x}}$."
                },
                {
                  stepText: "Its magnitude is $\\cal{r} = \\sqrt{z^2+x^2}$, and ${\\hat{\\cal{r}}} = \\frac{z\\mathbf{\\hat{z}} - x\\mathbf{\\hat{x}}}{\\sqrt{z^2+x^2}}$. Setup complete!"
                }
              ]
            }
          ]
        },
        {
          id: "les-5-11-ex2-2-solve", title: "Example 2.2: Integration", description: "Evaluating the line charge", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.2 (Continued)", content: "**Problem:** Evaluate the integral: \n$\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\int_{-L}^{L} \\frac{\\lambda}{z^2+x^2} \\frac{z\\mathbf{\\hat{z}} - x\\mathbf{\\hat{x}}}{\\sqrt{z^2+x^2}} dx$" },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution: Evaluation", 
              content: "**Goal: Perform the calculus and interpret the result.**", 
              interactiveSteps: [
                {
                  prompt: "Look at the x-component integral: $\\int_{-L}^{L} \\frac{-x}{(z^2+x^2)^{3/2}} dx$. What is its value?",
                  options: [
                    { id: "A", text: "0", isCorrect: true, explanation: "It's an odd function integrated over a symmetric interval." },
                    { id: "B", text: "Infinity", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The horizontal component cancels out to zero, just as we expect from symmetry."
                },
                {
                  stepText: "We are left with the z-component: $\\frac{\\lambda z}{4\\pi\\epsilon_0} \\int_{-L}^{L} \\frac{1}{(z^2+x^2)^{3/2}} dx$."
                },
                {
                  stepText: "This evaluates to $\\frac{1}{4\\pi\\epsilon_0} \\frac{2\\lambda L}{z\\sqrt{z^2+L^2}} \\mathbf{\\hat{z}}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Infinite Wire Limit", content: "What happens if the wire is infinitely long ($L \\to \\infty$)?", options: [ { id: "A", text: "The field goes to zero", isCorrect: false, explanation: "" }, { id: "B", text: "The field becomes $\\frac{1}{4\\pi\\epsilon_0} \\frac{2\\lambda}{z}$", isCorrect: true, explanation: "The $L$ terms cancel, leaving a $1/z$ dependence." } ] }
          ]
        },
        {
          id: "les-5-12-warning", title: "The Unit Vector Caveat", description: "A crucial warning for integrals", icon: "AlertTriangle",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Can you pull a constant outside of an integral?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "Basic calculus rule." }, { id: "B", text: "No", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Is the separation unit vector ${\\hat{\\cal{r}}}$ a constant?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "It points from the source $dq$ to the field point, which changes as we integrate over different $dq$s!" } ] },
            { id: "s2", type: "theory", title: "A Crucial Warning", content: "**Warning:** The unit vector ${\\hat{\\cal{r}}}$ is *not constant*; its direction depends on the source point $\\mathbf{r}'$.\n\nHence, **it cannot be taken outside the integrals** (Eqs 2.5 - 2.8). In practice, you must always resolve ${\\hat{\\cal{r}}}$ into Cartesian components ($\\mathbf{\\hat{x}}, \\mathbf{\\hat{y}}, \\mathbf{\\hat{z}}$) before integrating, because the Cartesian unit vectors *are* constant and do come out of the integral." },
            { id: "s6", type: "quiz", title: "Curvilinear Coordinates", content: "Even if you evaluate the integral using spherical coordinates, what must you do with the unit vectors first?", options: [ { id: "A", text: "Express them in Cartesian components", isCorrect: true, explanation: "Because spherical unit vectors change direction, but Cartesian ones do not." }, { id: "B", text: "Leave them as r-hat", isCorrect: false, explanation: "That will lead to incorrect integration." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Cartesian unit vectors are safe to pull out of integrals because they are completely ___.", blankAnswer: "constant" }
          ]
        }
      ]
    },
    {
      id: "unit-6-summary",
      title: "Section 1 Summary",
      description: "Recap of The Electric Field.",
      color: "duo-green",
      lessons: [
        {
          id: "les-6-1-recap", title: "Section Recap", description: "Review of Unit 5", icon: "CheckSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "Coulomb's Law shows that force falls off as:", options: [ { id: "A", text: "1/r", isCorrect: false, explanation: "" }, { id: "B", text: "1/r^2", isCorrect: true, explanation: "Inverse square law." } ] },
            { id: "s1", type: "quiz", title: "Knowledge Check 2", content: "To calculate the field of a continuous charge, you must:", options: [ { id: "A", text: "Take a derivative", isCorrect: false, explanation: "" }, { id: "B", text: "Integrate the charge density over the region", isCorrect: true, explanation: "Using the integral form of Coulomb's Law." } ] },
            { id: "s2", type: "theory", title: "Section 1 Summary", content: "Electrostatics is governed by the **Principle of Superposition** and **Coulomb's Law**.\n\nThe **Electric Field** $\\mathbf{E}$ represents force per unit charge. \nFor continuous distributions, we replace the discrete sum with an integral over line ($\\lambda$), surface ($\\sigma$), or volume ($\\rho$) charge densities. Crucially, the separation unit vector ${\\hat{\\cal{r}}}$ must be resolved into constant Cartesian components before integrating." }
          ]
        }
      ]
    }
  ]
};