import { Section } from '../types';

export const SECTION_1_1: Section = {
  id: "section-1-1",
  title: "Section 1: Vector Algebra & Differential Calculus",
  description: "Vector operations, component form, gradients, divergence, and curl.",
  color: "duo-blue",
  units: [
    {
      id: "unit-1-vector-algebra",
      title: "Vector Algebra",
      description: "Vector Operations, Component Form, and Triple Products.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-1-operations", title: "Vector Operations", description: "Addition and Scalar Multiplication", icon: "ArrowUpRight",
          slides: [
            { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Is distance travelled the same as displacement?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Displacement is a vector, distance is a scalar." }, { id: "B", text: "No", isCorrect: true, explanation: "Correct! Displacement considers direction." }, { id: "C", text: "Sometimes", isCorrect: false, explanation: "Only in 1D unidirectional motion." }, { id: "D", text: "Never", isCorrect: false, explanation: "They can be equal in 1D." } ] },
            { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Can a scalar quantity be negative?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "Yes, like temperature (e.g. -5 °C)." }, { id: "B", text: "No", isCorrect: false, explanation: "Scalars can indeed be negative." }, { id: "C", text: "Only in vectors", isCorrect: false, explanation: "Scalars are independent of vectors." }, { id: "D", text: "Always", isCorrect: false, explanation: "Mass is always positive, so not always." } ] },
            { id: "s2", type: "theory", title: "Vectors vs Scalars", content: "A **scalar** has magnitude only (e.g., mass, temperature). A **vector** has magnitude and direction (e.g., velocity, displacement).\n\n**Addition**: $\\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A}$\n**Scalar Multiplication**: $a(\\mathbf{A} + \\mathbf{B}) = a\\mathbf{A} + a\\mathbf{B}$" },
            { id: "s3", type: "interactive_canvas", title: "Vector Addition", content: "Observe how vectors A and B add head-to-tail to form A+B.", interactiveCanvasId: "vector-addition-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Proof: Commutativity", 
              content: "**Goal: Prove $\\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A}$**\n\nWe will prove this geometrically using the head-to-tail method.", 
              interactiveSteps: [ 
                { 
                  prompt: "If we place the tail of vector $\\mathbf{B}$ at the head of $\\mathbf{A}$, we get a resultant vector. If we also place the tail of $\\mathbf{A}$ at the head of $\\mathbf{B}$ from the origin, what geometric shape is outlined?", 
                  options: [
                    { id: "A", text: "A Parallelogram", isCorrect: true, explanation: "Correct! The two paths form the adjacent sides of a parallelogram." },
                    { id: "B", text: "A Triangle", isCorrect: false, explanation: "A triangle only shows one path, not both simultaneously." }
                  ],
                  stepText: "The paths $\\mathbf{A}+\\mathbf{B}$ and $\\mathbf{B}+\\mathbf{A}$ form a parallelogram." 
                }, 
                { 
                  prompt: "Since opposite sides of a parallelogram are equal and parallel, where do both paths end?", 
                  options: [
                    { id: "A", text: "At different points", isCorrect: false, explanation: "Look at the geometry again." },
                    { id: "B", text: "At the exact same opposite vertex", isCorrect: true, explanation: "Because the shape closes perfectly." }
                  ],
                  stepText: "Since both paths terminate at the exact same vertex, the resultant vector is identical. Thus, $\\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A}$." 
                } 
              ] 
            },
            { id: "s5", type: "numerical", title: "Vector Scaling", content: "If vector A has a magnitude of 5, what is the magnitude of the vector $-3\\mathbf{A}$?", numericAnswer: 15, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Objective Check", content: "Which of these is a vector?", options: [ { id: "A", text: "Mass", isCorrect: false, explanation: "Mass has no direction." }, { id: "B", text: "Speed", isCorrect: false, explanation: "Speed is the scalar magnitude of velocity." }, { id: "C", text: "Momentum", isCorrect: true, explanation: "Momentum is mass times velocity (a vector)." }, { id: "D", text: "Time", isCorrect: false, explanation: "Time flows, but isn't a spatial vector." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A physical quantity that requires both a magnitude and a direction is called a ___.", blankAnswer: "vector" }
          ]
        },
        {
          id: "les-1-2-dot", title: "The Dot Product", description: "Scalar product of two vectors", icon: "CircleDot",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Does the dot product of two vectors yield a scalar or a vector?", options: [ { id: "A", text: "Scalar", isCorrect: true, explanation: "Yes, hence it's often called the scalar product." }, { id: "B", text: "Vector", isCorrect: false, explanation: "The result is just a number." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Under what condition is the dot product of two non-zero vectors exactly zero?", options: [ { id: "A", text: "When they are parallel", isCorrect: false, explanation: "The dot product is maximum then." }, { id: "B", text: "When they are perpendicular", isCorrect: true, explanation: "Because cos(90°) = 0." }, { id: "C", text: "When they are anti-parallel", isCorrect: false, explanation: "It would be maximally negative." } ] },
            { id: "s2", type: "theory", title: "Dot Product Definition", content: "$\\mathbf{A} \\cdot \\mathbf{B} \\equiv AB \\cos \\theta$\n\nGeometrically, it is the magnitude of A multiplied by the projection of B onto A. \nIt is commutative: $\\mathbf{A} \\cdot \\mathbf{B} = \\mathbf{B} \\cdot \\mathbf{A}$." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Proof: Law of Cosines", 
              content: "**Goal: Prove $C^2 = A^2 + B^2 - 2AB\\cos\\theta$ using the dot product.**\n\nConsider a triangle formed by vectors $\\mathbf{A}$, $\\mathbf{B}$, and $\\mathbf{C}$.", 
              interactiveSteps: [ 
                { 
                  prompt: "Let the third side of the triangle be $\\mathbf{C} = \\mathbf{A} - \\mathbf{B}$. How can we find the square of its magnitude, $C^2$?", 
                  options: [
                    { id: "A", text: "$\\mathbf{C} \\cdot \\mathbf{C}$", isCorrect: true, explanation: "The dot product of a vector with itself gives its magnitude squared." },
                    { id: "B", text: "$\\mathbf{C} \\times \\mathbf{C}$", isCorrect: false, explanation: "The cross product of a vector with itself is zero." }
                  ],
                  stepText: "We write $C^2 = \\mathbf{C} \\cdot \\mathbf{C} = (\\mathbf{A} - \\mathbf{B}) \\cdot (\\mathbf{A} - \\mathbf{B})$." 
                }, 
                { 
                  prompt: "Expand $(\\mathbf{A} - \\mathbf{B}) \\cdot (\\mathbf{A} - \\mathbf{B})$ using the distributive property.", 
                  options: [
                    { id: "A", text: "$\\mathbf{A}\\cdot\\mathbf{A} - \\mathbf{B}\\cdot\\mathbf{B}$", isCorrect: false, explanation: "You missed the cross terms!" },
                    { id: "B", text: "$\\mathbf{A}\\cdot\\mathbf{A} - 2\\mathbf{A}\\cdot\\mathbf{B} + \\mathbf{B}\\cdot\\mathbf{B}$", isCorrect: true, explanation: "Correctly expanded using FOIL." }
                  ],
                  stepText: "Expansion gives: $A^2 - 2(\\mathbf{A}\\cdot\\mathbf{B}) + B^2$." 
                }, 
                { 
                  prompt: "Finally, apply the geometric definition of $\\mathbf{A}\\cdot\\mathbf{B}$. What do we get?", 
                  options: [
                    { id: "A", text: "$A^2 + B^2 - 2AB \\sin \\theta$", isCorrect: false, explanation: "Dot product uses cosine, not sine." },
                    { id: "B", text: "$A^2 + B^2 - 2AB \\cos \\theta$", isCorrect: true, explanation: "Spot on!" }
                  ],
                  stepText: "Substituting $\\mathbf{A}\\cdot\\mathbf{B} = AB\\cos\\theta$, we arrive at the Law of Cosines: $C^2 = A^2 + B^2 - 2AB \\cos \\theta$." 
                } 
              ] 
            },
            { id: "s5", type: "numerical", title: "Calculate Dot Product", content: "Vector A has magnitude 2, Vector B has magnitude 3, and the angle between them is $60^\\circ$. What is $\\mathbf{A} \\cdot \\mathbf{B}$?", numericAnswer: 3, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Dot Product Property", content: "Which of the following is true for any vector A?", options: [ { id: "A", text: "A . A = 0", isCorrect: false, explanation: "" }, { id: "B", text: "A . A = A^2", isCorrect: true, explanation: "The angle is 0, cos(0)=1." }, { id: "C", text: "A . A = 1", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Because it yields a single number, the dot product is also called the ___ product.", blankAnswer: "scalar" }
          ]
        },
        {
          id: "les-1-3-cross", title: "The Cross Product", description: "Vector product of two vectors", icon: "X",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "What does the cross product of two vectors yield?", options: [ { id: "A", text: "A Scalar", isCorrect: false, explanation: "No, that's the dot product." }, { id: "B", text: "A Vector", isCorrect: true, explanation: "Yes, hence it is called the vector product." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "What is the direction of $\\mathbf{A} \\times \\mathbf{B}$ relative to A and B?", options: [ { id: "A", text: "Parallel to A", isCorrect: false, explanation: "" }, { id: "B", text: "Perpendicular to both A and B", isCorrect: true, explanation: "It points orthogonal to the plane containing A and B." }, { id: "C", text: "Random", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Cross Product Definition", content: "$\\mathbf{A} \\times \\mathbf{B} \\equiv AB \\sin \\theta \\,\\mathbf{\\hat{n}}$\n\nWhere $\\mathbf{\\hat{n}}$ is a unit vector pointing perpendicular to the plane of A and B, determined by the **right-hand rule**.\nGeometrically, $|\\mathbf{A} \\times \\mathbf{B}|$ is the area of the parallelogram generated by A and B." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Proof: Anti-commutativity", 
              content: "**Goal: Prove $\\mathbf{A} \\times \\mathbf{B} = -(\\mathbf{B} \\times \\mathbf{A})$**", 
              interactiveSteps: [ 
                { 
                  prompt: "Do the magnitudes of $\\mathbf{A} \\times \\mathbf{B}$ and $\\mathbf{B} \\times \\mathbf{A}$ differ?", 
                  options: [
                    { id: "A", text: "Yes", isCorrect: false, explanation: "Both equal AB sin(theta)." },
                    { id: "B", text: "No", isCorrect: true, explanation: "Their magnitudes are identical: $AB\\sin\\theta$." }
                  ],
                  stepText: "Magnitudes are equal: $|\\mathbf{A}\\times\\mathbf{B}| = |\\mathbf{B}\\times\\mathbf{A}| = AB\\sin\\theta$." 
                }, 
                { 
                  prompt: "Using the right-hand rule, if you curl your fingers from A to B and your thumb points UP, where does your thumb point if you curl from B to A?", 
                  options: [
                    { id: "A", text: "UP", isCorrect: false, explanation: "Try it with your right hand." },
                    { id: "B", text: "DOWN", isCorrect: true, explanation: "Your hand flips upside down to curl the other way." }
                  ],
                  stepText: "Sweeping B to A flips the normal vector $\\mathbf{\\hat{n}}$ to $-\\mathbf{\\hat{n}}$. Thus, the sign reverses: $\\mathbf{A} \\times \\mathbf{B} = -(\\mathbf{B} \\times \\mathbf{A})$." 
                } 
              ] 
            },
            { id: "s5", type: "numerical", title: "Calculate Area", content: "Vector A has length 4, Vector B has length 5, and the angle between them is $30^\\circ$. What is the magnitude of $\\mathbf{A} \\times \\mathbf{B}$?", numericAnswer: 10, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Zero Cross Product", content: "When is $\\mathbf{A} \\times \\mathbf{B} = 0$? (Assuming non-zero vectors)", options: [ { id: "A", text: "When they are perpendicular", isCorrect: false, explanation: "It is maximum then." }, { id: "B", text: "When they are parallel", isCorrect: true, explanation: "Because sin(0) = 0." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The direction of the cross product is conventionally determined by the ___ hand rule.", blankAnswer: "right" }
          ]
        },
        {
          id: "les-1-4-components", title: "Component Form", description: "Cartesian coordinates", icon: "Grid",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "What is $\\hat{x} \\cdot \\hat{x}$?", options: [ { id: "A", text: "0", isCorrect: false, explanation: "They are parallel." }, { id: "B", text: "1", isCorrect: true, explanation: "Magnitude 1, angle 0, cos(0)=1." }, { id: "C", text: "-1", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "What is $\\hat{x} \\times \\hat{y}$?", options: [ { id: "A", text: "z-hat", isCorrect: true, explanation: "Follows the cyclic right-hand rule." }, { id: "B", text: "0", isCorrect: false, explanation: "They are perpendicular, so magnitude is 1." }, { id: "C", text: "-z-hat", isCorrect: false, explanation: "That would be y cross x." } ] },
            { id: "s2", type: "theory", title: "Basis Vectors & Components", content: "An arbitrary vector can be expressed in terms of basis vectors:\n$\\mathbf{A} = A_x\\mathbf{\\hat{x}} + A_y\\mathbf{\\hat{y}} + A_z\\mathbf{\\hat{z}}$.\n\nBecause basis vectors are mutually perpendicular:\n$\\mathbf{\\hat{x}}\\cdot\\mathbf{\\hat{x}} = 1$, $\\mathbf{\\hat{x}}\\cdot\\mathbf{\\hat{y}} = 0$\n$\\mathbf{\\hat{x}}\\times\\mathbf{\\hat{y}} = \\mathbf{\\hat{z}}$" },
            { id: "s3", type: "interactive_canvas", title: "Components Explorer", content: "See how moving the vector changes its X and Y components. The vector is simply the sum of these orthogonal parts.", interactiveCanvasId: "component-form-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Dot Product in Components", 
              content: "**Goal: Derive $\\mathbf{A}\\cdot\\mathbf{B} = A_x B_x + A_y B_y + A_z B_z$**", 
              interactiveSteps: [ 
                { 
                  stepText: "Expand: $(A_x\\hat{x} + A_y\\hat{y} + A_z\\hat{z}) \\cdot (B_x\\hat{x} + B_y\\hat{y} + B_z\\hat{z})$. This yields 9 terms." 
                }, 
                { 
                  prompt: "What happens to cross-terms like $A_x B_y (\\hat{x}\\cdot\\hat{y})$?", 
                  options: [
                    { id: "A", text: "They become 1", isCorrect: false, explanation: "x and y are perpendicular." },
                    { id: "B", text: "They vanish (become 0)", isCorrect: true, explanation: "Because dot product of perpendicular vectors is 0." }
                  ],
                  stepText: "All 6 cross terms vanish because the basis vectors are orthogonal." 
                }, 
                { 
                  prompt: "What happens to terms like $A_x B_x (\\hat{x}\\cdot\\hat{x})$?", 
                  options: [
                    { id: "A", text: "They vanish", isCorrect: false, explanation: "x.x is 1." },
                    { id: "B", text: "They survive as $A_x B_x$", isCorrect: true, explanation: "Because x.x = 1." }
                  ],
                  stepText: "Only the 3 matching component terms survive, leaving $A_x B_x + A_y B_y + A_z B_z$. Goal reached!" 
                } 
              ] 
            },
            { id: "s5", type: "numerical", title: "Magnitude Calculation", content: "Find the magnitude of the vector $\\mathbf{A} = 3\\mathbf{\\hat{x}} + 4\\mathbf{\\hat{y}}$.", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Cross Product Determinant", content: "To easily calculate the cross product of two vectors in component form, we evaluate a 3x3:", options: [ { id: "A", text: "Derivative", isCorrect: false, explanation: "" }, { id: "B", text: "Determinant", isCorrect: true, explanation: "With x, y, z unit vectors in the top row." }, { id: "C", text: "Integral", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The vectors $\\hat{x}, \\hat{y}, \\hat{z}$ are called ___ vectors.", blankAnswer: "basis" }
          ]
        },
        {
          id: "les-1-5-cube-example", title: "Example 1.2: Angles in a Cube", description: "Finding the angle between face diagonals", icon: "Box",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.2", content: "**Problem:** Find the angle between the face diagonals of a cube.\n\n*Hint:* Align a cube of side length 1 with the coordinate axes. Try to find the components of the diagonals first!" },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Find the angle $\\theta$ between the diagonals.**", 
              interactiveSteps: [ 
                { 
                  prompt: "Let's take the diagonal on the $xz$-face (Vector A) and the $yz$-face (Vector B). What are their components?", 
                  options: [
                    { id: "A", text: "A=(1,0,1), B=(0,1,1)", isCorrect: true, explanation: "Correct! They go from origin to (1,0,1) and (0,1,1)." },
                    { id: "B", text: "A=(1,1,0), B=(0,1,1)", isCorrect: false, explanation: "A is on the xz face, so y=0." }
                  ],
                  stepText: "$\\mathbf{A} = 1\\hat{x} + 0\\hat{y} + 1\\hat{z}$ and $\\mathbf{B} = 0\\hat{x} + 1\\hat{y} + 1\\hat{z}$." 
                }, 
                { 
                  prompt: "What is the dot product $\\mathbf{A}\\cdot\\mathbf{B}$?", 
                  options: [
                    { id: "A", text: "2", isCorrect: false, explanation: "Multiply components: (1*0) + (0*1) + (1*1)." },
                    { id: "B", text: "1", isCorrect: true, explanation: "Only the z-components overlap: 1*1 = 1." }
                  ],
                  stepText: "$\\mathbf{A}\\cdot\\mathbf{B} = 1$." 
                }, 
                { 
                  prompt: "What is the magnitude of $\\mathbf{A}$ and $\\mathbf{B}$?", 
                  options: [
                    { id: "A", text: "Both are $\\sqrt{2}$", isCorrect: true, explanation: "sqrt(1^2 + 1^2) = sqrt(2)." },
                    { id: "B", text: "Both are 2", isCorrect: false, explanation: "Don't forget the square root." }
                  ],
                  stepText: "$A = \\sqrt{2}$, $B = \\sqrt{2}$." 
                }, 
                { 
                  stepText: "Using the abstract definition: $\\mathbf{A}\\cdot\\mathbf{B} = AB\\cos\\theta \\implies 1 = \\sqrt{2}\\sqrt{2}\\cos\\theta \\implies 1 = 2\\cos\\theta$. Thus, $\\cos\\theta = 1/2$, so $\\theta = 60^\\circ$. Goal reached!" 
                } 
              ] 
            },
            { id: "s2", type: "numerical", title: "Body Diagonal", content: "What is the squared length ($r^2$) of the main body diagonal of a unit cube?", numericAnswer: 3, numericTolerance: 0.1 },
            { id: "s3", type: "quiz", title: "Adjacent Edges", content: "What is the dot product of two adjacent edges of a cube?", options: [ { id: "A", text: "1", isCorrect: false, explanation: "" }, { id: "B", text: "0", isCorrect: true, explanation: "Edges are perpendicular, so dot product is zero." }, { id: "C", text: "sqrt(2)", isCorrect: false, explanation: "" } ] }
          ]
        },
        {
          id: "les-1-6-scalar-triple", title: "Scalar Triple Product", description: "A . (B x C)", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "What does the scalar triple product $\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C})$ represent geometrically?", options: [ { id: "A", text: "Area of a triangle", isCorrect: false, explanation: "" }, { id: "B", text: "Volume of a parallelepiped", isCorrect: true, explanation: "Base area |B x C| times perpendicular height." }, { id: "C", text: "Length of a diagonal", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "If three vectors are entirely coplanar (flat on a page), what is their scalar triple product?", options: [ { id: "A", text: "Zero", isCorrect: true, explanation: "The volume of a flat shape is zero." }, { id: "B", text: "One", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Scalar Triple Product", content: "$\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C})$ yields a scalar. It computes the volume of the parallelepiped generated by A, B, and C.\n\n**Cyclic Permutation:** Alphabetical order preserves the sign.\n$\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B} \\cdot (\\mathbf{C} \\times \\mathbf{A}) = \\mathbf{C} \\cdot (\\mathbf{A} \\times \\mathbf{B})$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Proof: Cyclic Permutation", 
              content: "**Goal: Prove $\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B} \\cdot (\\mathbf{C} \\times \\mathbf{A})$**", 
              interactiveSteps: [ 
                { 
                  stepText: "Express the scalar triple product as a 3x3 determinant with A in row 1, B in row 2, C in row 3." 
                }, 
                { 
                  prompt: "In linear algebra, what happens to the determinant if you swap two rows?", 
                  options: [
                    { id: "A", text: "It becomes zero", isCorrect: false, explanation: "" },
                    { id: "B", text: "It flips sign", isCorrect: true, explanation: "A standard property of determinants." }
                  ],
                  stepText: "Swapping two rows flips the sign of the determinant." 
                }, 
                { 
                  prompt: "How many swaps does it take to go from ABC to BCA?", 
                  options: [
                    { id: "A", text: "One swap", isCorrect: false, explanation: "ABC -> BAC (1). Then BAC -> BCA (2)." },
                    { id: "B", text: "Two swaps", isCorrect: true, explanation: "Two sign flips means the overall sign is unchanged." }
                  ],
                  stepText: "Because it takes two swaps (a cyclic shift), the sign flips twice and remains positive. Goal reached!" 
                } 
              ] 
            },
            { id: "s5", type: "numerical", title: "Volume Calculation", content: "If A=(1,0,0), B=(0,2,0), C=(0,0,3). What is A.(BxC)?", numericAnswer: 6, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Non-Cyclic Permutation", content: "What is $\\mathbf{A} \\cdot (\\mathbf{C} \\times \\mathbf{B})$?", options: [ { id: "A", text: "A . (B x C)", isCorrect: false, explanation: "You swapped B and C, which is not cyclic." }, { id: "B", text: "-(A . (B x C))", isCorrect: true, explanation: "One swap flips the sign." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The scalar triple product computes the ___ of the parallelepiped formed by three vectors.", blankAnswer: "volume" }
          ]
        },
        {
          id: "les-1-7-vector-triple", title: "Vector Triple Product", description: "A x (B x C)", icon: "Wind",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Is the cross product associative? (i.e. is A x (B x C) equal to (A x B) x C?)", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "No, the placement of parentheses completely changes the result." }, { id: "B", text: "No", isCorrect: true, explanation: "Vector products are generally not associative." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "What does A x (B x C) yield?", options: [ { id: "A", text: "A scalar", isCorrect: false, explanation: "Cross products yield vectors." }, { id: "B", text: "A vector", isCorrect: true, explanation: "It is a vector." } ] },
            { id: "s2", type: "theory", title: "BAC-CAB Rule", content: "The vector triple product can be simplified using the incredibly useful BAC-CAB rule:\n\n$\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B}(\\mathbf{A} \\cdot \\mathbf{C}) - \\mathbf{C}(\\mathbf{A} \\cdot \\mathbf{B})$\n\nNotice that the result is a linear combination of vectors B and C." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Why the B-C Plane?", 
              content: "**Goal: Understand why $\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C})$ must lie entirely in the plane of B and C.**", 
              interactiveSteps: [ 
                { 
                  stepText: "Let $\\mathbf{D} = \\mathbf{B} \\times \\mathbf{C}$. Vector D points strictly perpendicular to the plane formed by B and C." 
                }, 
                { 
                  prompt: "The final vector is $\\mathbf{A} \\times \\mathbf{D}$. By the definition of the cross product, how does this relate to D?", 
                  options: [
                    { id: "A", text: "It is parallel to D", isCorrect: false, explanation: "" },
                    { id: "B", text: "It is perpendicular to D", isCorrect: true, explanation: "Cross product results are perpendicular to their operands." }
                  ],
                  stepText: "The final vector is perpendicular to D." 
                }, 
                { 
                  stepText: "If the final vector is perpendicular to D (which is the normal to the B-C plane), it MUST lie perfectly flat within the B-C plane. Hence, it can be written as $c_1\\mathbf{B} + c_2\\mathbf{C}$. The BAC-CAB rule provides exactly these coefficients!" 
                } 
              ] 
            },
            { id: "s6", type: "quiz", title: "Resulting Plane", content: "The vector $\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C})$ lies in the plane formed by:", options: [ { id: "A", text: "A and B", isCorrect: false, explanation: "" }, { id: "B", text: "A and C", isCorrect: false, explanation: "" }, { id: "C", text: "B and C", isCorrect: true, explanation: "As proven, it's a linear combination of B and C." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The mnemonic formula for the vector triple product is called the ___-CAB rule.", blankAnswer: "BAC" }
          ]
        },
        {
          id: "les-1-8-separation", title: "Position and Separation Vectors", description: "The cursive r", icon: "MapPin",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "In electrostatics, what is the difference between a source point and a field point?", options: [ { id: "A", text: "None", isCorrect: false, explanation: "They are conceptually different." }, { id: "B", text: "Source is where the charge is, field is where we measure the effect.", isCorrect: true, explanation: "Exactly." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "In Coulomb's law denominator ($r^2$), what does 'r' represent?", options: [ { id: "A", text: "Distance from the origin", isCorrect: false, explanation: "Only true if the charge is at the origin." }, { id: "B", text: "Distance from the source charge to the field point", isCorrect: true, explanation: "It represents the separation distance." } ] },
            { id: "s2", type: "theory", title: "The Separation Vector", content: "**Position vector ($\\mathbf{r}$)**: Vector from origin to a point. $\\mathbf{r} = x\\hat{x} + y\\hat{y} + z\\hat{z}$.\n\n**Separation vector (${\\cal{r}}$)**: Vector from the source point $\\mathbf{r}'$ to the field point $\\mathbf{r}$.\n${\\cal{r}} = \\mathbf{r} - \\mathbf{r}'$" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation: Magnitude", 
              content: "**Goal: Write the magnitude of the separation vector.**", 
              interactiveSteps: [ 
                { 
                  stepText: "Let the source point be $\\mathbf{r}' = (x', y', z')$ and the field point be $\\mathbf{r} = (x, y, z)$." 
                }, 
                { 
                  prompt: "What is the vector subtraction $\\mathbf{r} - \\mathbf{r}'$?", 
                  options: [
                    { id: "A", text: "$(x-x')\\hat{x} + (y-y')\\hat{y} + (z-z')\\hat{z}$", isCorrect: true, explanation: "Subtract component by component." },
                    { id: "B", text: "$(x+x')\\hat{x} + (y+y')\\hat{y} + (z+z')\\hat{z}$", isCorrect: false, explanation: "That would be addition." }
                  ],
                  stepText: "The separation vector is $(x-x')\\hat{x} + (y-y')\\hat{y} + (z-z')\\hat{z}$." 
                }, 
                { 
                  stepText: "Applying the 3D Pythagorean theorem, the magnitude is $\\cal{r} = \\sqrt{(x-x')^2 + (y-y')^2 + (z-z')^2}$. Goal reached!" 
                } 
              ] 
            },
            { id: "s5", type: "numerical", title: "Calculate Separation", content: "A source charge is at (1,0,0) meters. You want the field at (4,4,0) meters. What is the magnitude of the separation vector (in meters)?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Unit Separation Vector", content: "How do we form the unit separation vector ${\\hat{\\cal{r}}}$?", options: [ { id: "A", text: "Divide the position vector r by its magnitude", isCorrect: false, explanation: "That gives r-hat, not script-r-hat." }, { id: "B", text: "Divide the separation vector by its magnitude", isCorrect: true, explanation: "Normalizing the vector." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The vector that points from the origin to your location is called the ___ vector.", blankAnswer: "position" }
          ]
        }
      ]
    },
    {
      id: "unit-2-differential-calculus",
      title: "Differential Calculus",
      description: "Gradient, Divergence, Curl, and Second Derivatives.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-2-1-ordinary", title: "Ordinary Derivatives", description: "Review of 1D Calculus", icon: "TrendingUp",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "What does the derivative represent geometrically?", options: [ { id: "A", text: "Area under curve", isCorrect: false, explanation: "That's the integral." }, { id: "B", text: "Slope of the tangent", isCorrect: true, explanation: "Rise over run." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "If $df/dx = 0$, the point is a:", options: [ { id: "A", text: "Stationary point", isCorrect: true, explanation: "Max, min or inflection." }, { id: "B", text: "Discontinuity", isCorrect: false, explanation: "Derivatives don't exist at discontinuities." } ] },
            { id: "s2", type: "theory", title: "The Ordinary Derivative", content: "$df = \\left(\\frac{df}{dx}\\right) dx$\n\nThe derivative tells us how rapidly the function $f(x)$ varies when we change $x$ by an infinitesimal amount $dx$." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Differentials", 
              content: "**Goal: Understand infinitesimal increments.**", 
              interactiveSteps: [ 
                { 
                  prompt: "If you move a tiny distance $dx$ along the x-axis, the function's value changes by a tiny amount. What do we call this amount?", 
                  options: [
                    { id: "A", text: "$df$", isCorrect: true, explanation: "The differential change in f." },
                    { id: "B", text: "$\\Delta x$", isCorrect: false, explanation: "That's a finite change." }
                  ],
                  stepText: "The function changes by $df$." 
                }, 
                { 
                  stepText: "The proportionality factor linking the push $dx$ to the response $df$ is precisely the derivative $df/dx$." 
                } 
              ] 
            },
            { id: "s6", type: "quiz", title: "What is dx?", content: "In calculus, what does $dx$ represent?", options: [ { id: "A", text: "A finite step", isCorrect: false, explanation: "" }, { id: "B", text: "An infinitesimal displacement", isCorrect: true, explanation: "It is infinitely small." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The derivative df/dx represents the ___ of the graph of f versus x.", blankAnswer: "slope" }
          ]
        },
        {
          id: "les-2-2-gradient", title: "Gradient Definition", description: "Generalizing derivative to 3D", icon: "Mountain",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you are standing on a hill blindfolded and want to reach the peak, which direction should you step?", options: [ { id: "A", text: "Along the flat contour", isCorrect: false, explanation: "That keeps you at the same height." }, { id: "B", text: "The direction of steepest ascent", isCorrect: true, explanation: "This is the gradient direction!" } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Is the gradient of a scalar function a scalar or a vector?", options: [ { id: "A", text: "Scalar", isCorrect: false, explanation: "It has a specific direction (steepest uphill)." }, { id: "B", text: "Vector", isCorrect: true, explanation: "It has magnitude and direction." } ] },
            { id: "s2", type: "theory", title: "The Gradient", content: "For a 3D scalar function $T(x,y,z)$, the derivative depends on the direction you move.\n\n$\\nabla T = \\frac{\\partial T}{\\partial x}\\hat{x} + \\frac{\\partial T}{\\partial y}\\hat{y} + \\frac{\\partial T}{\\partial z}\\hat{z}$\n\nThe Gradient is a vector pointing in the direction of maximum increase. Its magnitude gives the slope in that direction." },
            { id: "s3", type: "interactive_canvas", title: "Gradient Explorer", content: "Drag the probe. Notice the red gradient vector always points perpendicularly across contour lines, straight 'uphill'.", interactiveCanvasId: "gradient-interactive" },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Proof: Max Increase Direction", 
              content: "**Goal: Prove mathematically that the gradient points uphill.**\n\nThe change in T is $dT = \\nabla T \\cdot d\\mathbf{l}$.", 
              interactiveSteps: [ 
                { 
                  prompt: "Using the dot product formula, rewrite $dT = \\nabla T \\cdot d\\mathbf{l}$.", 
                  options: [
                    { id: "A", text: "$|\\nabla T| |dl| \\cos\\theta$", isCorrect: true, explanation: "Correct." },
                    { id: "B", text: "$|\\nabla T| |dl| \\sin\\theta$", isCorrect: false, explanation: "Dot product uses cosine." }
                  ],
                  stepText: "$dT = |\\nabla T| |dl| \\cos\\theta$" 
                }, 
                { 
                  prompt: "To maximize the change $dT$ for a fixed step size $|dl|$, what must $\\cos\\theta$ be?", 
                  options: [
                    { id: "A", text: "0", isCorrect: false, explanation: "That would mean no change." },
                    { id: "B", text: "1", isCorrect: true, explanation: "Max value of cosine is 1." }
                  ],
                  stepText: "$\\cos\\theta$ must be 1, meaning $\\theta = 0$. Thus, you must step exactly parallel to $\\nabla T$. Goal reached!" 
                } 
              ] 
            },
            { id: "s6", type: "quiz", title: "Stationary Point", content: "If $\\nabla T = 0$ at a point, what do we know about that point?", options: [ { id: "A", text: "It is a stationary point", isCorrect: true, explanation: "Local max, min, or saddle." }, { id: "B", text: "The function is discontinuous there", isCorrect: false, explanation: "The derivative exists and is zero." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The gradient is always ___ to the equipotential contour lines.", blankAnswer: "perpendicular" }
          ]
        },
        {
          id: "les-2-3-gradient-ex", title: "Gradient Example", description: "Gradient of r", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.3", content: "**Problem:** Find the gradient of $r = \\sqrt{x^2 + y^2 + z^2}$ (the magnitude of the position vector).\n\nTry taking the partial derivative with respect to x first." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Calculate $\\nabla r$**", 
              interactiveSteps: [
                {
                  prompt: "Using the chain rule, what is $\\frac{\\partial}{\\partial x} (x^2 + y^2 + z^2)^{1/2}$?",
                  options: [
                    { id: "A", text: "$\\frac{x}{\\sqrt{x^2+y^2+z^2}}$", isCorrect: true, explanation: "1/2 * (inner)^(-1/2) * 2x. The 2s cancel." },
                    { id: "B", text: "$2x$", isCorrect: false, explanation: "Forgot the outer square root derivative." }
                  ],
                  stepText: "$\\frac{\\partial r}{\\partial x} = \\frac{x}{r}$."
                },
                {
                  stepText: "By symmetry, the y and z derivatives are $y/r$ and $z/r$."
                },
                {
                  prompt: "Assemble the vector: $\\frac{x}{r}\\hat{x} + \\frac{y}{r}\\hat{y} + \\frac{z}{r}\\hat{z}$. What does this equal?",
                  options: [
                    { id: "A", text: "$\\mathbf{r}$", isCorrect: false, explanation: "You forgot the 1/r denominator." },
                    { id: "B", text: "$\\hat{r}$", isCorrect: true, explanation: "Vector r divided by its magnitude r is the unit vector r-hat." }
                  ],
                  stepText: "The result is $\\hat{r}$!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Physical Meaning", content: "What does $\\nabla r = \\hat{r}$ physically mean?", options: [ { id: "A", text: "Distance from the origin increases most rapidly moving straight outward.", isCorrect: true, explanation: "And the slope is exactly 1." }, { id: "B", text: "Distance is constant.", isCorrect: false, explanation: "No, it changes." } ] }
          ]
        },
        {
          id: "les-2-4-del", title: "The Del Operator", description: "Introducing Nabla", icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Is the Del ($\\nabla$) operator a standard vector?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "It doesn't 'multiply' things normally." }, { id: "B", text: "No, it's a vector operator", isCorrect: true, explanation: "It's an instruction to differentiate." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "How many ways can an ordinary vector multiply other things?", options: [ { id: "A", text: "3 ways", isCorrect: true, explanation: "By a scalar, dot product, cross product." }, { id: "B", text: "1 way", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "The Del Operator", content: "$\\nabla = \\hat{x}\\frac{\\partial}{\\partial x} + \\hat{y}\\frac{\\partial}{\\partial y} + \\hat{z}\\frac{\\partial}{\\partial z}$\n\nLike an ordinary vector, it acts in three ways:\n1. On a scalar ($T$): $\\nabla T$ (Gradient)\n2. On a vector via dot product: $\\nabla \\cdot \\mathbf{v}$ (Divergence)\n3. On a vector via cross product: $\\nabla \\times \\mathbf{v}$ (Curl)" },
            { id: "s6", type: "quiz", title: "Del Property", content: "Does Del commute like ordinary vectors? (i.e. is $\\nabla \\cdot \\mathbf{A}$ the same as $\\mathbf{A} \\cdot \\nabla$?)", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "Ordinary dot products commute, Del does not." }, { id: "B", text: "No", isCorrect: true, explanation: "$\\mathbf{A}\\cdot\\nabla$ is a completely different differential operator." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The upside-down triangle symbol $\\nabla$ is called ___.", blankAnswer: "del" }
          ]
        },
        {
          id: "les-2-5-divergence", title: "Divergence Definition", description: "Measuring outflow", icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you sprinkle sawdust on a pond and it spreads outward from a point, that point acts as a:", options: [ { id: "A", text: "Source (Faucet)", isCorrect: true, explanation: "Positive divergence." }, { id: "B", text: "Sink (Drain)", isCorrect: false, explanation: "Negative divergence." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Does the divergence of a vector field result in a scalar or a vector?", options: [ { id: "A", text: "Scalar", isCorrect: true, explanation: "It uses the dot product." }, { id: "B", text: "Vector", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "The Divergence", content: "$\\nabla \\cdot \\mathbf{v} = \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z}$\n\nIt is a **scalar** that measures how much the vector field $\\mathbf{v}$ spreads out (diverges) from the point in question.\n- Positive = Source (Faucet)\n- Negative = Sink (Drain)" },
            { id: "s3", type: "interactive_canvas", title: "Divergence Field", content: "Notice how vectors radiate outward. This is a field with positive divergence.", interactiveCanvasId: "divergence-interactive" },
            { id: "s5", type: "numerical", title: "Calculate Divergence", content: "Given $\\mathbf{v} = 2x \\hat{x} + 3y \\hat{y} - z \\hat{z}$, what is $\\nabla \\cdot \\mathbf{v}$?", numericAnswer: 4, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Incompressible Fluid", content: "Water flowing steadily in a rigid pipe can't compress. What is the divergence everywhere inside?", options: [ { id: "A", text: "Positive", isCorrect: false, explanation: "" }, { id: "B", text: "Zero", isCorrect: true, explanation: "What goes in must come out, no accumulation." }, { id: "C", text: "Negative", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A point with negative divergence acts like a ___ drawing fluid in.", blankAnswer: "sink" }
          ]
        },
        {
          id: "les-2-6-divergence-ex", title: "Divergence Example", description: "Divergence of r", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.4", content: "**Problem:** Calculate the divergence of the position vector $\\mathbf{v} = \\mathbf{r} = x\\hat{x} + y\\hat{y} + z\\hat{z}$." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Calculate $\\nabla \\cdot \\mathbf{r}$**", 
              interactiveSteps: [
                {
                  prompt: "What is the partial derivative $\\frac{\\partial}{\\partial x}(x)$?",
                  options: [
                    { id: "A", text: "1", isCorrect: true, explanation: "Derivative of x wrt x is 1." },
                    { id: "B", text: "0", isCorrect: false, explanation: "That would be wrt y or z." }
                  ],
                  stepText: "$\\frac{\\partial x}{\\partial x} = 1$."
                },
                {
                  prompt: "Since $\\frac{\\partial y}{\\partial y} = 1$ and $\\frac{\\partial z}{\\partial z} = 1$, what is the sum?",
                  options: [
                    { id: "A", text: "1", isCorrect: false, explanation: "Add all three." },
                    { id: "B", text: "3", isCorrect: true, explanation: "1 + 1 + 1 = 3." }
                  ],
                  stepText: "$\\nabla \\cdot \\mathbf{r} = 1 + 1 + 1 = 3$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Physical Meaning", content: "Since the divergence is exactly 3 everywhere, what does this mean?", options: [ { id: "A", text: "The field is spreading out uniformly everywhere.", isCorrect: true, explanation: "It's a uniform source." }, { id: "B", text: "The field has no sources.", isCorrect: false, explanation: "Divergence is not zero." } ] }
          ]
        },
        {
          id: "les-2-7-curl", title: "Curl Definition", description: "Measuring swirl", icon: "RotateCw",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If you drop a paddlewheel into a uniformly flowing river, will it spin?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "The water pushes evenly on all sides." }, { id: "B", text: "No", isCorrect: true, explanation: "Uniform flow has no swirl (curl is zero)." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Does the curl of a vector field result in a scalar or a vector?", options: [ { id: "A", text: "Scalar", isCorrect: false, explanation: "Divergence is a scalar." }, { id: "B", text: "Vector", isCorrect: true, explanation: "It uses the cross product." } ] },
            { id: "s2", type: "theory", title: "The Curl", content: "$\\nabla \\times \\mathbf{v} = \\left(\\frac{\\partial v_z}{\\partial y} - \\frac{\\partial v_y}{\\partial z}\\right)\\hat{x} + \\dots$\n\nIt is a **vector** that measures how much the field swirls around a point. The direction points along the axis of rotation of a hypothetical paddlewheel (right-hand rule)." },
            { id: "s3", type: "interactive_canvas", title: "Curl Field", content: "Notice the paddlewheel turning in the field. This indicates a non-zero curl.", interactiveCanvasId: "curl-interactive" },
            { id: "s6", type: "quiz", title: "Irrotational Field", content: "If a vector field has exactly zero curl everywhere ($\\nabla \\times \\mathbf{v} = 0$), it is called:", options: [ { id: "A", text: "Incompressible", isCorrect: false, explanation: "That means divergence is zero." }, { id: "B", text: "Irrotational", isCorrect: true, explanation: "Zero curl means no rotation." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "To test for curl, imagine dropping a tiny ___ into the field to see if it spins.", blankAnswer: "paddlewheel" }
          ]
        },
        {
          id: "les-2-8-curl-ex", title: "Curl Example", description: "Swirling Field", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.5", content: "**Problem:** Calculate the curl of the swirling field $\\mathbf{v} = -y\\hat{x} + x\\hat{y}$." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Calculate $\\nabla \\times \\mathbf{v}$**", 
              interactiveSteps: [
                {
                  stepText: "Set up the 3x3 determinant with $\\hat{x}, \\hat{y}, \\hat{z}$ in row 1, derivatives in row 2, and $-y, x, 0$ in row 3."
                },
                {
                  prompt: "Let's find the z-component: $\\frac{\\partial}{\\partial x}(x) - \\frac{\\partial}{\\partial y}(-y)$. What does this equal?",
                  options: [
                    { id: "A", text: "1 - 1 = 0", isCorrect: false, explanation: "Careful with the double negative." },
                    { id: "B", text: "1 - (-1) = 2", isCorrect: true, explanation: "Yes, 1 + 1 = 2." }
                  ],
                  stepText: "The z-component is 2."
                },
                {
                  stepText: "The x and y components evaluate to 0. Thus, the curl is $2\\hat{z}$. Goal reached!"
                }
              ]
            },
            { id: "s2", type: "quiz", title: "Follow-up Q1", content: "What does the result $2\\hat{z}$ tell us about the paddlewheel?", options: [ { id: "A", text: "It spins around the z-axis.", isCorrect: true, explanation: "The curl points along the axis of rotation." }, { id: "B", text: "It moves along the z-axis.", isCorrect: false, explanation: "Curl measures rotation, not linear push." } ] }
          ]
        },
        {
          id: "les-2-9-product-rules", title: "Product Rules Overview", description: "Calculus identities", icon: "Book",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "In 1D calculus, what is $\\frac{d}{dx}(fg)$?", options: [ { id: "A", text: "f'g'", isCorrect: false, explanation: "" }, { id: "B", text: "fg' + gf'", isCorrect: true, explanation: "The standard product rule." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Because vector calculus has dot and cross products, how many distinct product rules are there?", options: [ { id: "A", text: "2", isCorrect: false, explanation: "" }, { id: "B", text: "6", isCorrect: true, explanation: "Two for grad, two for div, two for curl." } ] },
            { id: "s2", type: "theory", title: "Vector Product Rules", content: "We can form products in multiple ways (scalar*scalar, scalar*vector, vector.vector, vector x vector).\n\nKey rules you will use often:\n$\\nabla(fg) = f\\nabla g + g\\nabla f$\n$\\nabla \\cdot (f\\mathbf{A}) = f(\\nabla\\cdot\\mathbf{A}) + \\mathbf{A}\\cdot(\\nabla f)$" },
            { id: "s6", type: "quiz", title: "Divergence of a cross product", content: "According to the rules, what is $\\nabla \\cdot (\\mathbf{A} \\times \\mathbf{B})$?", options: [ { id: "A", text: "\\mathbf{B}\\cdot(\\nabla\\times\\mathbf{A}) - \\mathbf{A}\\cdot(\\nabla\\times\\mathbf{B})", isCorrect: true, explanation: "This is Product Rule #4." }, { id: "B", text: "0", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Vector product rules are built upon the standard 1D ___ rule.", blankAnswer: "product" }
          ]
        },
        {
          id: "les-2-10-product-ex", title: "Deriving a Product Rule", description: "Interactive Proof", icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Derivation", content: "**Problem:** Derive the rule: $\\nabla \\cdot (f\\mathbf{A}) = f(\\nabla\\cdot\\mathbf{A}) + \\mathbf{A}\\cdot(\\nabla f)$." },
            { 
              id: "s1", 
              type: "solution", 
              title: "Interactive Solution", 
              content: "**Goal: Prove the divergence product rule.**", 
              interactiveSteps: [
                {
                  stepText: "Expand the divergence: $\\nabla \\cdot (f\\mathbf{A}) = \\frac{\\partial (f A_x)}{\\partial x} + \\frac{\\partial (f A_y)}{\\partial y} + \\frac{\\partial (f A_z)}{\\partial z}$."
                },
                {
                  prompt: "Apply the 1D product rule to the first term. What is $\\frac{\\partial (f A_x)}{\\partial x}$?",
                  options: [
                    { id: "A", text: "$f \\frac{\\partial A_x}{\\partial x} + A_x \\frac{\\partial f}{\\partial x}$", isCorrect: true, explanation: "Standard product rule." },
                    { id: "B", text: "$f \\frac{\\partial A_x}{\\partial x}$", isCorrect: false, explanation: "Missing the second half." }
                  ],
                  stepText: "It expands to $f \\frac{\\partial A_x}{\\partial x} + A_x \\frac{\\partial f}{\\partial x}$."
                },
                {
                  stepText: "Grouping all the $f$ terms together gives $f (\\frac{\\partial A_x}{\\partial x} + ...)$, which is exactly $f(\\nabla\\cdot\\mathbf{A})$."
                },
                {
                  stepText: "Grouping the $A$ terms together gives $A_x \\frac{\\partial f}{\\partial x} + ...$, which is exactly $\\mathbf{A}\\cdot(\\nabla f)$. Goal reached!"
                }
              ]
            }
          ]
        },
        {
          id: "les-2-11-quotient", title: "Quotient Rules", description: "Deriving from product rules", icon: "Divide",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up", content: "In 1D, how can you derive the quotient rule d(f/g)/dx?", options: [ { id: "A", text: "Apply the product rule to f * (1/g)", isCorrect: true, explanation: "Yes, product rule handles quotients too." }, { id: "B", text: "It cannot be derived", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Quotient Rules", content: "Just like in 1D, we can formulate three quotient rules for vector calculus.\nExample: $\\nabla(f/g) = \\frac{g\\nabla f - f\\nabla g}{g^2}$.\n\nHowever, they can be obtained so quickly from the product rules that we rarely memorize them separately." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Derivation", 
              content: "**Goal: Derive $\\nabla(f/g)$**", 
              interactiveSteps: [
                {
                  prompt: "To apply the product rule $\\nabla(uv) = u\\nabla v + v\\nabla u$, what should we set $u$ and $v$ to?",
                  options: [
                    { id: "A", text: "$u = f, v = 1/g$", isCorrect: true, explanation: "Correct." },
                    { id: "B", text: "$u = f, v = g$", isCorrect: false, explanation: "We want a quotient." }
                  ],
                  stepText: "Set $u = f$ and $v = 1/g$."
                },
                {
                  stepText: "$\\nabla(f \\cdot 1/g) = f \\nabla(1/g) + (1/g) \\nabla f$."
                },
                {
                  stepText: "Since $\\nabla(1/g) = -1/g^2 \\nabla g$, substituting this back gives $\\frac{g\\nabla f - f\\nabla g}{g^2}$. Goal reached!"
                }
              ]
            }
          ]
        },
        {
          id: "les-2-12-second-deriv", title: "Second Derivatives Intro", description: "Applying Del twice", icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "Since we have 3 operators (Grad, Div, Curl), how many mathematical combinations of applying Del twice exist?", options: [ { id: "A", text: "9", isCorrect: true, explanation: "3x3 combinations." }, { id: "B", text: "3", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Out of the 9 combinations, how many actually produce valid outputs (e.g. you can't take the curl of a scalar)?", options: [ { id: "A", text: "5", isCorrect: true, explanation: "Only 5 make mathematical sense." }, { id: "B", text: "9", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "The Five Second Derivatives", content: "1. Div of Grad: $\\nabla \\cdot (\\nabla T) = \\nabla^2 T$ (Laplacian)\n2. Curl of Grad: $\\nabla \\times (\\nabla T) = 0$\n3. Grad of Div: $\\nabla(\\nabla \\cdot \\mathbf{v})$\n4. Div of Curl: $\\nabla \\cdot (\\nabla \\times \\mathbf{v}) = 0$\n5. Curl of Curl: $\\nabla \\times (\\nabla \\times \\mathbf{v}) = \\nabla(\\nabla\\cdot\\mathbf{v}) - \\nabla^2\\mathbf{v}$" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Applying Divergence to a Gradient gives the ___.", blankAnswer: "Laplacian" }
          ]
        },
        {
          id: "les-2-13-laplacian", title: "The Laplacian", description: "Divergence of a Gradient", icon: "Waves",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "In 1D calculus, if the first derivative is 'slope', what is the second derivative?", options: [ { id: "A", text: "Area", isCorrect: false, explanation: "" }, { id: "B", text: "Concavity", isCorrect: true, explanation: "Exactly." } ] },
            { id: "s1", type: "quiz", title: "Warm-up 2", content: "Is the Laplacian of a scalar function a scalar or a vector?", options: [ { id: "A", text: "Scalar", isCorrect: true, explanation: "Divergence (dot product) of a gradient." }, { id: "B", text: "Vector", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "The Laplacian", content: "$\\nabla^2 T = \\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} + \\frac{\\partial^2 T}{\\partial z^2}$\n\nIt measures whether a point is a local 'hotspot' or 'coldspot' compared to its immediate surroundings (concavity). It is fundamental to Poisson's and Laplace's equations." },
            { id: "s3", type: "interactive_canvas", title: "Laplacian Explorer", content: "Drag the probe along the 1D curve. Notice it is positive in 'valleys' (concave up) and negative on 'hills' (concave down).", interactiveCanvasId: "laplacian-interactive" },
            { id: "s6", type: "quiz", title: "Laplacian of a Vector", content: "Can we take the Laplacian of a vector?", options: [ { id: "A", text: "Yes", isCorrect: true, explanation: "You apply the scalar Laplacian to each Cartesian component." }, { id: "B", text: "No", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Functions for which the Laplacian is everywhere zero are called ___ functions.", blankAnswer: "harmonic" }
          ]
        },
        {
          id: "les-2-14-curl-grad", title: "Curl of a Gradient", description: "Golden Identity 1", icon: "RotateCcw",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If a field is created purely by a scalar gradient (like a hill), does it swirl?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Gravity doesn't swirl you in circles on a hillside." } ] },
            { id: "s2", type: "theory", title: "Curl of a Gradient", content: "$\\nabla \\times (\\nabla T) = 0$\n\nThis is a tremendously important vector identity. Any gradient field is automatically irrotational." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Proof: Curl of Gradient", 
              content: "**Goal: Prove $\\nabla \\times (\\nabla T) = 0$**", 
              interactiveSteps: [
                {
                  stepText: "The gradient is $\\nabla T = \\frac{\\partial T}{\\partial x}\\hat{x} + \\frac{\\partial T}{\\partial y}\\hat{y} + \\frac{\\partial T}{\\partial z}\\hat{z}$."
                },
                {
                  prompt: "Calculate the z-component of the curl: $\\frac{\\partial}{\\partial x}(\\text{y-comp}) - \\frac{\\partial}{\\partial y}(\\text{x-comp})$. What is it?",
                  options: [
                    { id: "A", text: "$\\frac{\\partial}{\\partial x}(\\frac{\\partial T}{\\partial y}) - \\frac{\\partial}{\\partial y}(\\frac{\\partial T}{\\partial x})$", isCorrect: true, explanation: "Correct substitution." },
                    { id: "B", text: "$\\frac{\\partial^2 T}{\\partial x^2}$", isCorrect: false, explanation: "" }
                  ],
                  stepText: "The z-component is $\\frac{\\partial^2 T}{\\partial x \\partial y} - \\frac{\\partial^2 T}{\\partial y \\partial x}$."
                },
                {
                  prompt: "By Clairaut's theorem, partial derivatives commute. What does this term equal?",
                  options: [
                    { id: "A", text: "0", isCorrect: true, explanation: "They perfectly cancel." },
                    { id: "B", text: "1", isCorrect: false, explanation: "" }
                  ],
                  stepText: "It evaluates exactly to 0. Symmetrically, all components are 0. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Consequence", content: "If you know a field has zero curl everywhere, what can you definitively conclude?", options: [ { id: "A", text: "It can be written as the gradient of some scalar potential.", isCorrect: true, explanation: "This is a fundamental theorem we will use constantly." }, { id: "B", text: "It has zero divergence.", isCorrect: false, explanation: "Not necessarily." } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The curl of a gradient is always ___.", blankAnswer: "zero" }
          ]
        },
        {
          id: "les-2-15-div-curl", title: "Divergence of a Curl", description: "Golden Identity 2", icon: "Minimize",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "If a field is purely swirling in closed loops, does it have a net outward flow from a point?", options: [ { id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Swirling means it comes back around, not diverging away." } ] },
            { id: "s2", type: "theory", title: "Divergence of a Curl", content: "$\\nabla \\cdot (\\nabla \\times \\mathbf{v}) = 0$\n\nJust like the curl of a gradient, the divergence of a curl is always identically zero." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Proof: Div of Curl", 
              content: "**Goal: Prove $\\nabla \\cdot (\\nabla \\times \\mathbf{v}) = 0$**", 
              interactiveSteps: [
                {
                  stepText: "Expand the divergence dot product on the curl vector."
                },
                {
                  prompt: "What will the x-derivative term look like?",
                  options: [
                    { id: "A", text: "$\\frac{\\partial}{\\partial x} (\\frac{\\partial v_z}{\\partial y} - \\frac{\\partial v_y}{\\partial z})$", isCorrect: true, explanation: "Derivative of the x-component of the curl." },
                    { id: "B", text: "$\\frac{\\partial v_x}{\\partial x}$", isCorrect: false, explanation: "" }
                  ],
                  stepText: "You get terms like $\\frac{\\partial^2 v_z}{\\partial x \\partial y}$."
                },
                {
                  stepText: "When you expand all three components, every mixed partial derivative appears exactly twice with opposite signs (e.g., $\\frac{\\partial^2 v_z}{\\partial x \\partial y}$ and $-\\frac{\\partial^2 v_z}{\\partial y \\partial x}$). By Clairaut's theorem, they all cancel to 0. Goal reached!"
                }
              ]
            },
            { id: "s6", type: "quiz", title: "Consequence", content: "If a field has zero divergence everywhere, what can we conclude?", options: [ { id: "A", text: "It can be written as the curl of some vector potential.", isCorrect: true, explanation: "This is the basis of the Magnetic Vector Potential!" }, { id: "B", text: "It is irrotational.", isCorrect: false, explanation: "" } ] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A vector field whose divergence is zero is called a ___ field.", blankAnswer: "solenoidal" }
          ]
        },
        {
          id: "les-2-16-curl-curl", title: "Curl of a Curl", description: "Identity 3", icon: "Repeat",
          slides: [
            { id: "s0", type: "quiz", title: "Warm-up 1", content: "What kind of output do you get from taking the curl of a curl?", options: [ { id: "A", text: "Scalar", isCorrect: false, explanation: "Curl always yields a vector." }, { id: "B", text: "Vector", isCorrect: true, explanation: "Correct." } ] },
            { id: "s2", type: "theory", title: "Curl of a Curl Formula", content: "$\\nabla \\times (\\nabla \\times \\mathbf{v}) = \\nabla(\\nabla\\cdot\\mathbf{v}) - \\nabla^2\\mathbf{v}$\n\nThis is the vector calculus equivalent of the BAC-CAB rule, and it's heavily used in deriving the electromagnetic wave equation." },
            { 
              id: "s4", 
              type: "proof", 
              title: "Interactive Insight: Formula Structure", 
              content: "**Goal: Understand the components of the Curl-of-Curl formula.**\n\n$\\nabla \\times (\\nabla \\times \\mathbf{v}) = \\nabla(\\nabla\\cdot\\mathbf{v}) - \\nabla^2\\mathbf{v}$", 
              interactiveSteps: [
                {
                  prompt: "Look at the first term on the right: $\\nabla(\\nabla\\cdot\\mathbf{v})$. What operations are happening?",
                  options: [
                    { id: "A", text: "Gradient of a Divergence", isCorrect: true, explanation: "Divergence makes a scalar, then Gradient makes it a vector." },
                    { id: "B", text: "Divergence of a Gradient", isCorrect: false, explanation: "That would be the Laplacian." }
                  ],
                  stepText: "The first term is the Gradient of the Divergence."
                },
                {
                  prompt: "Look at the second term: $\\nabla^2\\mathbf{v}$. What is this?",
                  options: [
                    { id: "A", text: "The vector Laplacian", isCorrect: true, explanation: "Applying the scalar Laplacian to each component of v." },
                    { id: "B", text: "A scalar", isCorrect: false, explanation: "It remains a vector." }
                  ],
                  stepText: "The second term is the Vector Laplacian. Goal reached!"
                }
              ]
            },
            { id: "s5", type: "numerical", title: "Practice Laplacian", content: "If $T = x^2 + y^2$, what is $\\nabla^2 T$?", numericAnswer: 4, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Wave Equation Teaser", content: "In empty space, Maxwell's equations say $\\nabla \\cdot \\mathbf{E} = 0$. Using the curl of curl formula, what does $\\nabla \\times (\\nabla \\times \\mathbf{E})$ simplify to?", options: [ { id: "A", text: "$-\\nabla^2 \\mathbf{E}$", isCorrect: true, explanation: "The div term vanishes!" }, { id: "B", text: "0", isCorrect: false, explanation: "" } ] }
          ]
        }
      ]
    },
    {
      id: "unit-3-summary",
      title: "Section Summary",
      description: "Recap of Section 1",
      color: "duo-green",
      lessons: [
        {
          id: "les-3-1-vector-recap", title: "Vector Algebra Recap", description: "Review of Unit 1", icon: "CheckSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "The dot product of two vectors gives a:", options: [ { id: "A", text: "Scalar", isCorrect: true, explanation: "Correct." }, { id: "B", text: "Vector", isCorrect: false, explanation: "Cross product gives a vector." } ] },
            { id: "s1", type: "quiz", title: "Knowledge Check 2", content: "The separation vector ${\\cal{r}}$ points from:", options: [ { id: "A", text: "Field point to source point", isCorrect: false, explanation: "" }, { id: "B", text: "Source point to field point", isCorrect: true, explanation: "$\\mathbf{r} - \\mathbf{r}'$" } ] },
            { id: "s2", type: "theory", title: "Unit 1 Summary", content: "Vectors have magnitude and direction. \n\n- **Dot product**: $\\mathbf{A}\\cdot\\mathbf{B} = AB\\cos\\theta$ (Scalar).\n- **Cross product**: $\\mathbf{A}\\times\\mathbf{B} = AB\\sin\\theta \\mathbf{\\hat{n}}$ (Vector).\n- **Separation vector**: ${\\cal{r}} = \\mathbf{r} - \\mathbf{r}'$ points from source to field." }
          ]
        },
        {
          id: "les-3-2-diff-recap", title: "Differential Calculus Recap", description: "Review of Unit 2", icon: "CheckSquare",
          slides: [
            { id: "s0", type: "quiz", title: "Knowledge Check 1", content: "The divergence of a curl is always:", options: [ { id: "A", text: "0", isCorrect: true, explanation: "Fundamental identity." }, { id: "B", text: "The Laplacian", isCorrect: false, explanation: "" } ] },
            { id: "s1", type: "quiz", title: "Knowledge Check 2", content: "The curl of a gradient is always:", options: [ { id: "A", text: "0", isCorrect: true, explanation: "Fundamental identity." }, { id: "B", text: "The Laplacian", isCorrect: false, explanation: "" } ] },
            { id: "s2", type: "theory", title: "Unit 2 Summary", content: "The operator $\\nabla$ acts in three primary ways:\n\n1. **Gradients** (vectors pointing uphill).\n2. **Divergences** (scalars measuring outflow/sources).\n3. **Curls** (vectors measuring rotation/swirl).\n\n**Golden Identities**:\n- $\\nabla \\times (\\nabla T) = 0$\n- $\\nabla \\cdot (\\nabla \\times \\mathbf{v}) = 0$" }
          ]
        }
      ]
    }
  ]
};