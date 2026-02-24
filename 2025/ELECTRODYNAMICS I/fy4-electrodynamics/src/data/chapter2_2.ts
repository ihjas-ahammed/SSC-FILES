import { Section } from '../types';

export const SECTION_2_2: Section = {
  id: "section-2-2",
  title: "Section 2: Divergence and Curl of Electrostatic Fields",
  description: "Field lines, Gauss's Law, calculating divergence and curl, and Maxwell's equations for electrostatics.",
  color: "duo-blue",
  units: [
    {
      id: "unit-6-div-curl",
      title: "Divergence and Curl of E",
      description: "Gauss's Law and the irrotational nature of static electric fields.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-6-1-field-lines", title: "Electric Field Lines", description: "Visualizing the electric field", icon: "Eye",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Can two electric field lines ever cross each other?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "If they crossed, the field would point in two directions at once!" }, { id: "B", text: "No", isCorrect: true, explanation: "The field has a unique direction at every point in space." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Where do electric field lines originate and terminate?", options: [ { id: "A", text: "Originate on negative, terminate on positive", isCorrect: false, explanation: "" }, { id: "B", text: "Originate on positive, terminate on negative", isCorrect: true, explanation: "They can also extend to infinity." } ] },
            { id: "s2", type: "theory", title: "Electric Field Lines", content: "We visualize vector fields using **field lines**.\n\n- The tangent to a field line at any point gives the **direction** of $\\mathbf{E}$.\n- The **density** of the lines (number per unit cross-sectional area) is proportional to the **magnitude** of $\\mathbf{E}$.\n\nLines begin on positive charges and end on negative ones (or extend to infinity). They can never cross." },
            { id: "s3", type: "interactive_canvas", title: "Field Line Density", content: "Notice how the lines spread out. As area increases with $r^2$, density drops as $1/r^2$, perfectly matching Coulomb's law.", interactiveCanvasId: "divergence-interactive" },
            { id: "s6", type: "quiz", title: "Line Density", content: "If a point charge $+q$ has 8 field lines drawn coming out of it, how many should be drawn for a $+2q$ charge?", options: [ { id: "A", text: "8", isCorrect: false, explanation: "Density must be proportional to charge." }, { id: "B", text: "16", isCorrect: true, explanation: "Double the charge, double the field, double the lines." }, { id: "C", text: "4", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Electric field lines point away from ___ charges.", blankAnswer: "positive" }
          ]
        },
        {
          id: "les-6-2-flux", title: "Electric Flux", description: "Number of field lines passing through a surface", icon: "Grid",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you hold a net perpendicular to a river's flow, you catch maximum water. What if you hold it parallel to the flow?", options: [ { id: "A", text: "Maximum water", isCorrect: false, explanation: "" }, { id: "B", text: "Zero water", isCorrect: true, explanation: "The water just flows past the net, not through it." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Flux depends on the electric field and the...", options: [ { id: "A", text: "Area of the surface", isCorrect: true, explanation: "More area = more field lines intercepted." }, { id: "B", text: "Charge of the test particle", isCorrect: false, explanation: "Flux is a property of the field itself." } ] },
            { id: "s2", type: "theory", title: "Electric Flux", content: "The **flux** of $\\mathbf{E}$ through a surface $\\mathcal{S}$ is defined as:\n\n$\\Phi_E \\equiv \\int_{\\mathcal{S}} \\mathbf{E} \\cdot d\\mathbf{a}$\n\nIt is a measure of the \"number of field lines\" passing through $\\mathcal{S}$. For a closed surface, flux represents the net flow outward from the enclosed volume." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Dot Product", 
              content: "**Goal: Understand why we use the dot product in flux.**", 
              interactiveSteps: [
                {
                  prompt: "The area vector $d\\mathbf{a}$ points perpendicular (normal) to the surface. If the electric field $\\mathbf{E}$ is parallel to the surface, what is the angle between $\\mathbf{E}$ and $d\\mathbf{a}$?",
                  options: [
                    { id: "A", text: "0 degrees", isCorrect: false, explanation: "That would mean E is perpendicular to the surface." },
                    { id: "B", text: "90 degrees", isCorrect: true, explanation: "E is along the surface, da is perpendicular to it." }
                  ],
                  stepText: "The angle is $90^\\circ$."
                },
                {
                  stepText: "Since $\\cos(90^\\circ) = 0$, the dot product $\\mathbf{E} \\cdot d\\mathbf{a} = 0$, perfectly capturing that NO field lines poke through the surface."
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Calculate Flux", content: "A uniform field of magnitude $E = 5$ N/C passes perpendicularly through a flat surface of area $A = 2$ m$^2$. What is the flux?", numericAnswer: 10, numericTolerance: 0.1 },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The flux through a surface is a measure of the number of field ___ passing through it.", blankAnswer: "lines" }
          ]
        },
        {
          id: "les-6-3-gauss-integral", title: "Gauss's Law (Integral)", description: "Flux relates to enclosed charge", icon: "Box",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you put a charge +q inside a closed box, a certain number of field lines poke out. If you make the box twice as large, how many lines poke out?", options: [ { id: "A", text: "Half as many", isCorrect: false, explanation: "" }, { id: "B", text: "The exact same amount", isCorrect: true, explanation: "The lines don't stop; they just keep going and pierce the larger box too." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Does the shape of the closed box matter for the total number of lines poking out?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Any closed surface enclosing the charge will intercept all its lines." } ] },
            { id: "s2", type: "theory", title: "Gauss's Law (Integral Form)", content: "For *any* closed surface, the total electric flux is directly proportional to the total charge enclosed within it:\n\n$\\oint \\mathbf{E} \\cdot d\\mathbf{a} = \\frac{1}{\\epsilon_0} Q_{enc}$\n\nThis is Gauss's Law. It is a direct consequence of the $1/r^2$ nature of Coulomb's Law." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Point Charge Flux", 
              content: "**Goal: Show that flux equals $q/\\epsilon_0$ for a sphere.**", 
              interactiveSteps: [
                {
                  stepText: "Place a charge $q$ at the origin. Surround it with a sphere of radius $r$."
                },
                {
                  prompt: "What is $\\mathbf{E} \\cdot d\\mathbf{a}$ on the surface?",
                  options: [
                    { id: "A", text: "$E \\, da$", isCorrect: true, explanation: "E and da both point radially outward, so cos(0)=1." },
                    { id: "B", text: "0", isCorrect: false, explanation: "" }
                  ],
                  stepText: "Since $\\mathbf{E}$ is radial, $\\mathbf{E} \\cdot d\\mathbf{a} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} da$."
                },
                {
                  stepText: "Integrating over the sphere, $\\int da = 4\\pi r^2$."
                },
                {
                  stepText: "Multiply them: $\\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} (4\\pi r^2)$. The $4\\pi r^2$ completely cancels out, leaving exactly $q/\\epsilon_0$. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Charges Outside", content: "If a charge $q$ is placed OUTSIDE the closed surface, what is its contribution to the net flux?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "Its field lines enter one side and exit the other, netting zero." }, { id: "B", text: "q / eps_0", isCorrect: false, explanation: "Only enclosed charge matters." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Gauss's Law states that the flux through a closed surface is proportional to the ___ charge.", blankAnswer: "enclosed" }
          ]
        },
        {
          id: "les-6-4-gauss-diff", title: "Gauss's Law (Differential)", description: "Local charge density", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Gauss's theorem (from calculus) converts a closed surface integral into a...", options: [ { id: "A", text: "Line integral", isCorrect: false, explanation: "" }, { id: "B", text: "Volume integral of a divergence", isCorrect: true, explanation: "$\\oint \\mathbf{v} \\cdot d\\mathbf{a} = \\int (\\nabla \\cdot \\mathbf{v}) d\\tau$" } ] },
            { id: "s2", type: "theory", title: "Gauss's Law (Differential Form)", content: "By applying the divergence theorem to the integral form of Gauss's Law, we obtain its differential form:\n\n$\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0}$\n\nThis states that the divergence of the electric field at any point in space is equal to the volume charge density $\\rho$ at that exact point divided by $\\epsilon_0$." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Differential Form", 
              content: "**Goal: Convert Integral Gauss to Differential Gauss.**", 
              interactiveSteps: [
                {
                  stepText: "Start with $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = \\frac{1}{\\epsilon_0} Q_{enc}$."
                },
                {
                  stepText: "Rewrite $Q_{enc}$ as a volume integral of charge density: $Q_{enc} = \\int_V \\rho \\, d\\tau$."
                },
                {
                  prompt: "Use the Divergence Theorem on the left side. What does $\\oint \\mathbf{E} \\cdot d\\mathbf{a}$ become?",
                  options: [
                    { id: "A", text: "$\\int_V (\\nabla \\cdot \\mathbf{E}) d\\tau$", isCorrect: true, explanation: "Converts surface flux to volume divergence." },
                    { id: "B", text: "$\\int_V (\\nabla \\times \\mathbf{E}) d\\tau$", isCorrect: false, explanation: "That's curl, not divergence." }
                  ],
                  stepText: "We get $\\int_V (\\nabla \\cdot \\mathbf{E}) d\\tau = \\int_V \\frac{\\rho}{\\epsilon_0} d\\tau$."
                },
                {
                  stepText: "Since this holds for ANY arbitrary volume V, the integrands must be equal: $\\nabla \\cdot \\mathbf{E} = \\rho / \\epsilon_0$. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Meaning of Differential Form", content: "What does $\\nabla \\cdot \\mathbf{E} = \\rho / \\epsilon_0$ mean physically?", options: [ { id: "A", text: "Electric fields swirl around charges.", isCorrect: false, explanation: "Divergence measures outflow, not swirl." }, { id: "B", text: "Electric charge acts as a local source (or sink) of electric field lines.", isCorrect: true, explanation: "Exactly." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The differential form of Gauss's law relates the ___ of the electric field to the charge density.", blankAnswer: "divergence" }
          ]
        },
        {
          id: "les-6-5-div-direct", title: "Divergence of E (Direct)", description: "Using the Dirac Delta", icon: "Target",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "We know $\\nabla \\cdot (\\mathbf{\\hat{r}}/r^2) = 0$ everywhere EXCEPT at the origin. What is it at the origin?", options: [ { id: "A", text: "0", isCorrect: false, explanation: "There's a source there!" }, { id: "B", text: "Infinity (handled by Dirac delta)", isCorrect: true, explanation: "It blows up to create a finite flux." } ] },
            { id: "s2", type: "theory", title: "Direct Calculation", content: "If we calculate the divergence of $\\mathbf{E}$ directly from Coulomb's Law, we encounter the term $\\nabla \\cdot \\left(\\frac{\\boldsymbol{\\hat{\\cal{r}}}}{\\cal{r}^2}\\right)$.\n\nFrom Chapter 1, we know this is exactly $4\\pi\\delta^3(\\boldsymbol{\\cal{r}})$.\n\n$\\nabla \\cdot \\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\int \\nabla \\cdot \\left(\\frac{\\boldsymbol{\\hat{\\cal{r}}}}{\\cal{r}^2}\\right) \\rho(\\mathbf{r}') d\\tau'$\nThis simplifies exactly to $\\rho(\\mathbf{r})/\\epsilon_0$." },
            { id: "s6", type: "quiz", title: "Dirac Delta Magic", content: "What happens when you integrate a function $f(x)$ multiplied by $\\delta(x-a)$?", options: [ { id: "A", text: "You get 0", isCorrect: false, explanation: "" }, { id: "B", text: "You get f(a)", isCorrect: true, explanation: "The delta function picks out the value of the function at the spike." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The mathematical function used to represent the density of a point charge is the ___ Delta function.", blankAnswer: "Dirac" }
          ]
        },
        {
          id: "les-6-6-symmetry", title: "Symmetry & Gauss's Law", description: "When is Gauss's Law useful?", icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Is Gauss's Law ALWAYS true?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "It's a fundamental law of physics." }, { id: "B", text: "No, only for symmetrical objects", isCorrect: false, explanation: "It is always true, but only USEFUL for symmetric objects." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "If Gauss's law is always true, why don't we use it for every problem?", options: [ { id: "A", text: "Because we can't pull |E| out of the integral without symmetry.", isCorrect: true, explanation: "If E varies over the surface, you can't solve for it." }, { id: "B", text: "Because it's mathematically harder.", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "The Three Symmetries", content: "Gauss's law is always true, but it is only *useful* for calculating fields when symmetry allows us to pull $|\\mathbf{E}|$ outside the integral.\n\nThis requires the field magnitude to be constant over the chosen Gaussian surface. There are only three symmetries that work:\n1. **Spherical symmetry**: Use a concentric Gaussian sphere.\n2. **Cylindrical symmetry**: Use a coaxial Gaussian cylinder.\n3. **Plane symmetry**: Use a Gaussian 'pillbox' straddling the surface." },
            { id: "s6", type: "quiz", title: "Choosing a surface", content: "For a uniformly charged infinite straight wire, what Gaussian surface should you choose?", options: [ { id: "A", text: "A sphere", isCorrect: false, explanation: "The field is not constant over a sphere here." }, { id: "B", text: "A cylinder", isCorrect: true, explanation: "The field is constant at a fixed radius from the wire." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "To use Gauss's law effectively, we choose a Gaussian surface over which the magnitude of the electric field is ___.", blankAnswer: "constant" }
          ]
        },
        {
          id: "les-6-7-sphere-out", title: "Example: Solid Sphere (Outside)", description: "Applying spherical symmetry", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.3", content: "**Problem:** Find the electric field outside a uniformly charged solid sphere of radius $R$ and total charge $q$.\n\n*Hint:* Draw a Gaussian sphere of radius $r > R$." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find E outside the sphere.**", 
              interactiveSteps: [
                {
                  stepText: "Draw a Gaussian sphere of radius $r > R$. The enclosed charge is simply $q$."
                },
                {
                  prompt: "By symmetry, which way does $\\mathbf{E}$ point?",
                  options: [
                    { id: "A", text: "Radially outward", isCorrect: true, explanation: "There is no preferred 'north/south' or 'east/west' direction." },
                    { id: "B", text: "Along the z-axis", isCorrect: false, explanation: "The sphere is symmetric in all directions." }
                  ],
                  stepText: "$\\mathbf{E}$ points radially outward, parallel to $d\\mathbf{a}$."
                },
                {
                  stepText: "So $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = \\oint |E| da = |E| \\oint da = |E| (4\\pi r^2)$."
                },
                {
                  stepText: "By Gauss's Law: $|E| (4\\pi r^2) = \\frac{q}{\\epsilon_0}$. Thus $\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\mathbf{\\hat{r}}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Amazing Fact", content: "What is remarkable about this result?", options: [ { id: "A", text: "It is zero.", isCorrect: false, explanation: "" }, { id: "B", text: "The field outside is exactly the same as if all charge were concentrated at the center.", isCorrect: true, explanation: "Just like a point charge!" } ] }
          ]
        },
        {
          id: "les-6-8-sphere-in", title: "Example: Solid Sphere (Inside)", description: "Field inside a volume charge", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 2.13", content: "**Problem:** Find the electric field *inside* a uniformly charged solid sphere of radius $R$ and total charge $q$.\n\n*Hint:* For a Gaussian sphere of radius $r < R$, how much charge is enclosed?" },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find E inside the sphere ($r < R$).**", 
              interactiveSteps: [
                {
                  stepText: "Draw a Gaussian sphere of radius $r < R$ inside the object. The LHS of Gauss's Law is still $|E| 4\\pi r^2$."
                },
                {
                  prompt: "Is the enclosed charge $q$?",
                  options: [
                    { id: "A", text: "Yes", isCorrect: false, explanation: "The Gaussian sphere doesn't cover the whole object." },
                    { id: "B", text: "No, it's only a fraction of the total charge.", isCorrect: true, explanation: "We only enclose the charge within radius r." }
                  ],
                  stepText: "The enclosed charge is $Q_{enc} = \\rho V_{enc}$."
                },
                {
                  stepText: "Since $\\rho = \\frac{q}{\\frac{4}{3}\\pi R^3}$ and $V_{enc} = \\frac{4}{3}\\pi r^3$, we get $Q_{enc} = q \\frac{r^3}{R^3}$."
                },
                {
                  stepText: "Equating: $|E| 4\\pi r^2 = \\frac{1}{\\epsilon_0} q \\frac{r^3}{R^3} \\implies \\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q r}{R^3} \\mathbf{\\hat{r}}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Center of the Sphere", content: "Based on the formula $E \\propto r$, what is the electric field at the exact center of the sphere ($r=0$)?", options: [ { id: "A", text: "Infinity", isCorrect: false, explanation: "" }, { id: "B", text: "Zero", isCorrect: true, explanation: "All forces push equally from all sides." } ] }
          ]
        },
        {
          id: "les-6-9-cylinder", title: "Example: Infinite Cylinder", description: "Applying cylindrical symmetry", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.4", content: "**Problem:** A long cylinder carries a charge density proportional to the distance from the axis: $\\rho = k s$, for some constant $k$. Find the electric field inside." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find E inside the cylinder.**", 
              interactiveSteps: [
                {
                  stepText: "Draw a Gaussian cylinder of length $l$ and radius $s$."
                },
                {
                  stepText: "Integrate to find $Q_{enc}$: $\\int (ks')(s' ds' d\\phi dz) = 2\\pi k l \\int_0^s s'^2 ds' = \\frac{2}{3}\\pi k l s^3$."
                },
                {
                  prompt: "What is the flux $\\oint \\mathbf{E} \\cdot d\\mathbf{a}$ through the Gaussian cylinder?",
                  options: [
                    { id: "A", text: "$|E| 2\\pi s l$", isCorrect: true, explanation: "The ends contribute nothing; only the curved surface area matters." },
                    { id: "B", text: "$|E| \\pi s^2$", isCorrect: false, explanation: "That's the area of the caps, where flux is zero." }
                  ],
                  stepText: "The flux is $|E| 2\\pi s l$."
                },
                {
                  stepText: "Equating them: $|E| 2\\pi s l = \\frac{1}{\\epsilon_0} \\frac{2}{3}\\pi k l s^3 \\implies \\mathbf{E} = \\frac{1}{3\\epsilon_0} k s^2 \\mathbf{\\hat{s}}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "End Caps", content: "Why do the flat ends of the Gaussian cylinder contribute nothing to the flux?", options: [ { id: "A", text: "The field is zero there", isCorrect: false, explanation: "" }, { id: "B", text: "The field is parallel to the end caps", isCorrect: true, explanation: "E points radially outward (s-hat), which is perpendicular to the normal (z-hat) of the caps." } ] }
          ]
        },
        {
          id: "les-6-10-plane", title: "Example: Infinite Plane", description: "Applying planar symmetry", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.5", content: "**Problem:** An infinite plane carries a uniform surface charge $\\sigma$. Find its electric field." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find E for an infinite sheet.**", 
              interactiveSteps: [
                {
                  stepText: "Draw a 'Gaussian pillbox' extending equal distances above and below the plane, with cross-sectional area $A$."
                },
                {
                  prompt: "By symmetry, E must point strictly away from the plane. Which parts of the pillbox have non-zero flux?",
                  options: [
                    { id: "A", text: "The sides", isCorrect: false, explanation: "E is parallel to the sides." },
                    { id: "B", text: "The top and bottom lids", isCorrect: true, explanation: "E pierces straight through the lids." }
                  ],
                  stepText: "Only the top and bottom lids contribute. Total flux = $2 A |E|$."
                },
                {
                  stepText: "The enclosed charge is $Q_{enc} = \\sigma A$."
                },
                {
                  stepText: "Gauss's Law: $2 A |E| = \\frac{\\sigma A}{\\epsilon_0} \\implies \\mathbf{E} = \\frac{\\sigma}{2\\epsilon_0} \\mathbf{\\hat{n}}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Distance Dependence", content: "Does the field of an infinite plane depend on how far away you are ($z$)?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Look at the formula." }, { id: "B", text: "No", isCorrect: true, explanation: "The formula is simply $\\sigma / 2\\epsilon_0$, which is constant!" } ] },
            { id: "s3", type: "theory", title: "Why constant?", content: "It seems surprising that the field doesn't fall off. But as you move farther away, more and more of the infinite charge comes into your 'field of view', exactly compensating for the $1/r^2$ drop-off of individual pieces." }
          ]
        },
        {
          id: "les-6-11-two-planes", title: "Example: Two Parallel Planes", description: "Superposition of infinite sheets", icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Example 2.6", content: "**Problem:** Two infinite parallel planes carry equal but opposite uniform charge densities $+\\sigma$ and $-\\sigma$. Find the field (i) to the left, (ii) between them, and (iii) to the right." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Apply superposition to the fields.**", 
              interactiveSteps: [
                {
                  stepText: "From the previous example, a single plate produces a constant field $E = \\frac{\\sigma}{2\\epsilon_0}$ pointing away from positive, toward negative."
                },
                {
                  prompt: "In the region strictly BETWEEN the plates, what are the directions of the two fields?",
                  options: [
                    { id: "A", text: "They point in opposite directions", isCorrect: false, explanation: "Think about the signs of the plates." },
                    { id: "B", text: "They point in the same direction (towards the negative plate)", isCorrect: true, explanation: "The + plate pushes right, the - plate pulls right." }
                  ],
                  stepText: "Between the plates, they add up: $\\frac{\\sigma}{2\\epsilon_0} + \\frac{\\sigma}{2\\epsilon_0} = \\frac{\\sigma}{\\epsilon_0}$."
                },
                {
                  stepText: "Outside the plates (regions i and iii), the fields point in opposite directions and exactly cancel each other out to 0. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Capacitor Field", content: "This configuration (two parallel plates) is a simple model for a:", options: [ { id: "A", text: "Capacitor", isCorrect: true, explanation: "Ideal parallel plate capacitor." }, { id: "B", text: "Solenoid", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-6-12-curl-line", title: "Line Integral of E", description: "Evaluating closed loops", icon: "RotateCw",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you move a charge in a closed loop in a purely electrostatic field, what is the net work done?", options: [ { id: "A", text: "Positive", isCorrect: false, explanation: "" }, { id: "B", text: "Zero", isCorrect: true, explanation: "Electrostatic fields are conservative." } ] },
            { id: "s2", type: "theory", title: "Line Integral of Point Charge", content: "Let's calculate the line integral of $\\mathbf{E}$ for a point charge from $\\mathbf{a}$ to $\\mathbf{b}$.\n\n$\\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\mathbf{\\hat{r}}$\n$d\\mathbf{l} = dr\\mathbf{\\hat{r}} + r d\\theta\\mathbf{\\hat{\\theta}} + r\\sin\\theta d\\phi\\mathbf{\\hat{\\phi}}$\n\nBecause $\\mathbf{E}$ is entirely radial, $\\mathbf{E} \\cdot d\\mathbf{l} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} dr$." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Integration", 
              content: "**Goal: Evaluate $\\int_a^b \\mathbf{E} \\cdot d\\mathbf{l}$**", 
              interactiveSteps: [
                {
                  stepText: "We need to integrate $\\frac{q}{4\\pi\\epsilon_0} \\int_{r_a}^{r_b} \\frac{1}{r^2} dr$."
                },
                {
                  prompt: "What is the integral of $1/r^2$?",
                  options: [
                    { id: "A", text: "-1/r", isCorrect: true, explanation: "Power rule: r^(-2) -> -r^(-1)." },
                    { id: "B", text: "ln(r)", isCorrect: false, explanation: "That's the integral of 1/r." }
                  ],
                  stepText: "The integral evaluates to $[-\\frac{1}{r}]_{r_a}^{r_b}$."
                },
                {
                  stepText: "So, $\\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l} = \\frac{1}{4\\pi\\epsilon_0} (\\frac{q}{r_a} - \\frac{q}{r_b})$."
                }
              ]
            }
          ]
        },
        {
          id: "les-6-13-path-indep", title: "Path Independence of E", description: "Why paths don't matter", icon: "TrendingUp",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "In the previous lesson, did the result $\\frac{1}{4\\pi\\epsilon_0} (\\frac{q}{r_a} - \\frac{q}{r_b})$ depend on the angular path taken?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Angles don't appear in the formula." }, { id: "B", text: "No", isCorrect: true, explanation: "It only depends on the starting and ending radii." } ] },
            { id: "s2", type: "theory", title: "Path Independence", content: "Because $\\mathbf{E} \\cdot d\\mathbf{l}$ only picks up the radial component $dr$, the line integral from $\\mathbf{a}$ to $\\mathbf{b}$ depends *only* on the radial distances $r_a$ and $r_b$ from the origin.\n\nIt makes absolutely no reference to the specific path taken between those points. The electrostatic field is **path-independent**." },
            { id: "s6", type: "quiz", title: "Superposition", content: "If a single point charge's field is path independent, what about a collection of many charges?", options: [ { id: "A", text: "It might depend on path", isCorrect: false, explanation: "" }, { id: "B", text: "It is also path independent", isCorrect: true, explanation: "By the principle of superposition, the sum of path-independent fields is path-independent." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A force field whose line integral is independent of path is called a ___ field.", blankAnswer: "conservative" }
          ]
        },
        {
          id: "les-6-14-closed-loop", title: "Closed Loop Integral", description: "Zero circulation", icon: "RotateCcw",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If a line integral is path-independent, what must its value be around a closed loop?", options: [ { id: "A", text: "Infinity", isCorrect: false, explanation: "" }, { id: "B", text: "Zero", isCorrect: true, explanation: "Start and end points are the same." } ] },
            { id: "s2", type: "theory", title: "Zero Circulation", content: "Since the integral $\\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l} = \\frac{1}{4\\pi\\epsilon_0} (\\frac{q}{r_a} - \\frac{q}{r_b})$, what happens if the path is closed?\n\nFor a closed path, point $\\mathbf{a}$ and point $\\mathbf{b}$ are the exact same location, so $r_a = r_b$.\n\nTherefore, $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$." },
            { id: "s6", type: "quiz", title: "Escher Stairs", content: "Could an electrostatic field push a charge around a loop in a way that it continually gains energy forever (like an Escher staircase)?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "The closed loop integral is exactly zero. You can't extract infinite free energy." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The line integral of the electrostatic field around any closed loop is exactly ___.", blankAnswer: "zero" }
          ]
        },
        {
          id: "les-6-15-curl-e", title: "Curl of E", description: "Applying Stokes' Theorem", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Stokes' theorem connects a closed line integral to the flux of the...", options: [ { id: "A", text: "Divergence", isCorrect: false, explanation: "" }, { id: "B", text: "Curl", isCorrect: true, explanation: "$\\oint \\mathbf{E} \\cdot d\\mathbf{l} = \\int (\\nabla \\times \\mathbf{E}) \\cdot d\\mathbf{a}$" } ] },
            { id: "s2", type: "theory", title: "Curl of E", content: "We established that for any closed path, $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$.\n\nBy applying Stokes' Theorem:\n$\\oint \\mathbf{E} \\cdot d\\mathbf{l} = \\int_{\\mathcal{S}} (\\nabla \\times \\mathbf{E}) \\cdot d\\mathbf{a} = 0$\n\nSince this is true for *any* arbitrary surface $\\mathcal{S}$, the integrand itself must be zero:\n$\\nabla \\times \\mathbf{E} = 0$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Significance", 
              content: "**Goal: Understand what $\\nabla \\times \\mathbf{E} = 0$ means.**", 
              interactiveSteps: [
                {
                  prompt: "If the curl is zero, does the electric field have local 'swirls' or 'eddies'?",
                  options: [
                    { id: "A", text: "Yes", isCorrect: false, explanation: "" },
                    { id: "B", text: "No", isCorrect: true, explanation: "Zero curl means it is irrotational." }
                  ],
                  stepText: "Electrostatic fields never swirl back on themselves."
                },
                {
                  stepText: "Because $\\nabla \\times \\mathbf{E} = 0$, we know from vector calculus identities that $\\mathbf{E}$ can always be written as the gradient of a scalar potential. This is a massive simplification we will use in the next section!"
                }
              ]
            }
          ]
        },
        {
          id: "les-6-16-maxwell-es", title: "Maxwell's Electrostatic Equations", description: "Summary of Divergence and Curl", icon: "Star",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "According to Helmholtz's theorem, a vector field is uniquely determined if you know its:", options: [ { id: "A", text: "Divergence and Curl", isCorrect: true, explanation: "Knowing both completely defines the field (with boundary conditions)." }, { id: "B", text: "Magnitude and direction at one point", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Maxwell's Equations for Electrostatics", content: "We have now derived the two fundamental differential equations of electrostatics:\n\n1. **Divergence**: $\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0}$ (Gauss's Law)\n2. **Curl**: $\\nabla \\times \\mathbf{E} = 0$ (Irrotational nature)\n\nTogether with the boundary condition that $\\mathbf{E} \\to 0$ far from all charges, these equations completely determine the electrostatic field for any given charge distribution $\\rho$." },
            { id: "s6", type: "quiz", title: "Moving Charges", content: "Are these two equations exactly correct if the source charges are accelerating rapidly?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "These are for ELECTROSTATICS." }, { id: "B", text: "No", isCorrect: true, explanation: "In electrodynamics, a changing magnetic field creates a non-zero curl of E (Faraday's Law)." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Because $\\nabla \\times \\mathbf{E} = 0$, the electrostatic field is said to be ___.", blankAnswer: "irrotational" }
          ]
        }
      ]
    },
    {
      id: "unit-7-summary-2-2",
      title: "Section 2 Summary",
      description: "Recap of Divergence, Curl, and Gauss's Law.",
      color: "duo-green",
      lessons: [
        {
          id: "les-7-1-divcurl-recap", title: "Divergence and Curl Recap", description: "Review of Unit 6", icon: "CheckSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "What does the divergence of E equal?", options: [ { id: "A", text: "Zero", isCorrect: false, explanation: "" }, { id: "B", text: "rho / epsilon_0", isCorrect: true, explanation: "Gauss's Law in differential form." } ] },
            { id: "s1", type: "quiz", title: "Knowledge Check 2", content: "What does the curl of a static E field equal?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "Electrostatic fields are irrotational." }, { id: "B", text: "rho / epsilon_0", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Section 2 Summary", content: "**Gauss's Law** states that the flux of $\\mathbf{E}$ through a closed surface is proportional to the enclosed charge ($Q_{enc}/\\epsilon_0$). In differential form, $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$. This provides a powerful tool for calculating fields of highly symmetric charge distributions (spheres, cylinders, planes).\n\nFurthermore, the line integral of a static $\\mathbf{E}$ field around any closed loop is zero, meaning the field is path-independent and its **curl is zero** ($\\nabla \\times \\mathbf{E} = 0$)." }
          ]
        }
      ]
    }
  ]
};