import { Section } from '../types';

export const SECTION_1_1: Section = {
  id: "section-1-1",
  title: "Section 1.1: Vector Algebra",
  description: "Foundations of vector analysis: operations, components, triple products, and separation vectors.",
  color: "duo-blue",
  units: [
    {
      id: "unit-1-1-1",
      title: "1.1.1 Operations & Geometry",
      description: "Definition of Vectors, Addition, Subtraction, and Products.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-1-1-1",
          title: "Scalars vs Vectors",
          description: "Fundamental definitions and notation.",
          icon: "ArrowRight",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Can a scalar quantity be negative?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Temperature, for example, can be -10°C." }, { id: "B", text: "No", isCorrect: false, explanation: "Scalars like charge or temperature can be negative." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Does a vector have a specific location in space?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "Vectors are defined by magnitude and direction, not location." }, { id: "B", text: "No", isCorrect: true, explanation: "A vector can be moved parallel to itself without changing." }] },
            { id: "s2", type: "theory", title: "Definition", content: "A **scalar** has magnitude only (mass, charge, density). A **vector** has both magnitude and direction (velocity, force).\n\nVectors are written in boldface ($\\mathbf{A}$) or with arrows ($\\vec{A}$). The magnitude is written as $|\\mathbf{A}|$ or $A$." },
            { id: "s3", type: "interactive_canvas", title: "Vector Visualizer", content: "Vectors are arrows. Length = Magnitude. Arrowhead = Direction.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Geometric Property", content: "**Property:** Vectors are movable.\n\nSince a vector is defined only by length and direction, you can slide the arrow around at will, as long as you don't change its length or direction.", proofSteps: ["Draw vector $\\mathbf{A}$ at the origin.", "Draw vector $\\mathbf{A}'$ at point (2,2) with same length/angle.", "Mathematically $\\mathbf{A} = \\mathbf{A}'$."] },
            { id: "s5", type: "numerical", title: "Displacement", content: "If you walk 4 miles North and 3 miles East, what is the magnitude of your total displacement vector?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Example Check", content: "Which of the following is a vector?", options: [{ id: "A", text: "Time", isCorrect: false, explanation: "" }, { id: "B", text: "Acceleration", isCorrect: true, explanation: "It has a direction." }, { id: "C", text: "Energy", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A quantity with magnitude but no direction is called a ___.", blankAnswer: "scalar" }
          ]
        },
        {
          id: "les-1-1-1-2",
          title: "Vector Addition",
          description: "Head-to-tail rule and commutativity.",
          icon: "Plus",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Is vector addition commutative (i.e., is A+B = B+A)?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "The order of addition does not matter." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "How do you geometrically add two vectors?", options: [{ id: "A", text: "Tail to Tail", isCorrect: false, explanation: "" }, { id: "B", text: "Head to Tail", isCorrect: true, explanation: "Place the tail of the second at the head of the first." }] },
            { id: "s2", type: "theory", title: "Vector Addition", content: "To add $\\mathbf{A}$ and $\\mathbf{B}$, place the tail of $\\mathbf{B}$ at the head of $\\mathbf{A}$. The sum $\\mathbf{A}+\\mathbf{B}$ is the vector from the tail of $\\mathbf{A}$ to the head of $\\mathbf{B}$.\n\nAddition is commutative:\n$$\\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A}$$" },
            { id: "s3", type: "interactive_canvas", title: "Visual Addition", content: "Manipulate the vectors to see the resultant sum.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Commutativity", content: "**Goal:** Show $\\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A}$", proofSteps: ["Construct a parallelogram with sides $\\mathbf{A}$ and $\\mathbf{B}$.", "One path is $\\mathbf{A}$ then $\\mathbf{B}$.", "The other path is $\\mathbf{B}$ then $\\mathbf{A}$.", "Both paths arrive at the same opposite corner."] },
            { id: "s5", type: "numerical", title: "Net Magnitude", content: "Vector A is 3 units East. Vector B is 4 units East. What is the magnitude of A+B?", numericAnswer: 7, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Associativity", content: "Is vector addition associative? $(\\mathbf{A}+\\mathbf{B})+\\mathbf{C} = \\mathbf{A}+(\\mathbf{B}+\\mathbf{C})$", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "" }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The geometric rule for adding vectors is often called the ___ rule.", blankAnswer: "parallelogram" }
          ]
        },
        {
          id: "les-1-1-1-3",
          title: "Vector Subtraction",
          description: "Adding the negative.",
          icon: "Minus",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What is the vector $-\\mathbf{A}$?", options: [{ id: "A", text: "A vector with negative magnitude", isCorrect: false, explanation: "Magnitude is always positive." }, { id: "B", text: "Same magnitude, opposite direction", isCorrect: true, explanation: "Correct." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "How is $\\mathbf{A} - \\mathbf{B}$ defined?", options: [{ id: "A", text: "$\\mathbf{A} + (-\\mathbf{B})$", isCorrect: true, explanation: "Addition of the opposite." }, { id: "B", text: "$\\mathbf{B} - \\mathbf{A}$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Subtraction", content: "To subtract a vector, add its opposite:\n$$\\mathbf{A} - \\mathbf{B} = \\mathbf{A} + (-\\mathbf{B})$$\n\nGeometrically, $\\mathbf{A} - \\mathbf{B}$ is the vector that goes from the head of $\\mathbf{B}$ to the head of $\\mathbf{A}$ when their tails are together." },
            { id: "s3", type: "interactive_canvas", title: "Visual Subtraction", content: "See how subtraction relates to the difference between two points.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Geometric Interpretation", content: "**Goal:** Visualize $\\mathbf{A} - \\mathbf{B}$", proofSteps: ["Place tails of $\\mathbf{A}$ and $\\mathbf{B}$ at the origin.", "Draw vector from head of $\\mathbf{B}$ to head of $\\mathbf{A}$.", "This vector is $\\mathbf{A} - \\mathbf{B}$ because $\\mathbf{B} + (\\mathbf{A} - \\mathbf{B}) = \\mathbf{A}$."] },
            { id: "s5", type: "numerical", title: "Zero Vector", content: "What is the magnitude of $\\mathbf{A} - \\mathbf{A}$?", numericAnswer: 0, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Direction", content: "If $\\mathbf{A}$ is North and $\\mathbf{B}$ is South, $\\mathbf{A}-\\mathbf{B}$ points:", options: [{ id: "A", text: "North", isCorrect: true, explanation: "North - (South) = North + North." }, { id: "B", text: "South", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Subtraction is defined as the addition of the ___ vector.", blankAnswer: "opposite" }
          ]
        },
        {
          id: "les-1-1-1-4",
          title: "Scalar Multiplication",
          description: "Scaling vectors.",
          icon: "X",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Multiplying a vector by a scalar changes its:", options: [{ id: "A", text: "Direction only", isCorrect: false, explanation: "" }, { id: "B", text: "Magnitude (and possibly direction sign)", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Is scalar multiplication distributive? $a(\\mathbf{A} + \\mathbf{B}) = a\\mathbf{A} + a\\mathbf{B}$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Correct." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Scalar Multiplication", content: "Multiplication of a vector $\\mathbf{A}$ by a positive scalar $a$ multiplies the magnitude but leaves the direction unchanged.\n\nIf $a$ is negative, the direction is reversed.\n$$|a\\mathbf{A}| = |a| |\\mathbf{A}|$$" },
            { id: "s3", type: "interactive_canvas", title: "Scaling", content: "Observe how a vector stretches or shrinks.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Distributivity", content: "**Goal:** Show $a(\\mathbf{A}+\\mathbf{B}) = a\\mathbf{A} + a\\mathbf{B}$", proofSteps: ["Form the triangle of $\\mathbf{A}$, $\\mathbf{B}$, and $\\mathbf{A}+\\mathbf{B}$.", "Scale all sides by factor $a$.", "The new triangle is similar to the old one.", "The third side is $a(\\mathbf{A}+\\mathbf{B})$ and also $a\\mathbf{A} + a\\mathbf{B}$."] },
            { id: "s5", type: "numerical", title: "Scaling", content: "If vector A has magnitude 5, what is magnitude of 3A?", numericAnswer: 15, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Unit Vector", content: "If you multiply a vector by 1 divided by its magnitude, you get:", options: [{ id: "A", text: "The zero vector", isCorrect: false, explanation: "" }, { id: "B", text: "A unit vector", isCorrect: true, explanation: "Length becomes 1." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A vector of length 1 is called a ___ vector.", blankAnswer: "unit" }
          ]
        },
        {
          id: "les-1-1-1-5",
          title: "Dot Product Definition",
          description: "The scalar product.",
          icon: "CircleDot",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "The result of a dot product is a:", options: [{ id: "A", text: "Vector", isCorrect: false, explanation: "" }, { id: "B", text: "Scalar", isCorrect: true, explanation: "Hence the name Scalar Product." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "If two vectors are perpendicular, their dot product is:", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "cos(90) = 0." }, { id: "B", text: "Maximum", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Dot Product", content: "The dot product of two vectors is defined as:\n$$\\mathbf{A} \\cdot \\mathbf{B} \\equiv AB \\cos \\theta$$\nwhere $\\theta$ is the angle between them.\n\nIt is commutative: $\\mathbf{A} \\cdot \\mathbf{B} = \\mathbf{B} \\cdot \\mathbf{A}$." },
            { id: "s3", type: "interactive_canvas", title: "Projection", content: "Visualizing A dot B as a projection.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Self-Dot", content: "**Goal:** Show $\\mathbf{A} \\cdot \\mathbf{A} = A^2$", proofSteps: ["The angle between $\\mathbf{A}$ and itself is $\\theta = 0$.", "$\\cos(0) = 1$.", "$\\mathbf{A} \\cdot \\mathbf{A} = |A| |A| (1) = A^2$."] },
            { id: "s5", type: "numerical", title: "Calculation", content: "If A=2, B=4, and angle is 60 degrees, what is A dot B?", numericAnswer: 4, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Interpretation", content: "$\\mathbf{A} \\cdot \\mathbf{B}$ equals:", options: [{ id: "A", text: "A times the projection of B along A", isCorrect: true, explanation: "" }, { id: "B", text: "The area between them", isCorrect: false, explanation: "That's cross product." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The dot product is also known as the ___ product.", blankAnswer: "scalar" }
          ]
        },
        {
          id: "les-1-1-1-6",
          title: "Dot Product Properties",
          description: "Rules of the scalar product.",
          icon: "List",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Is the dot product distributive? $\\mathbf{A} \\cdot (\\mathbf{B} + \\mathbf{C}) = \\mathbf{A} \\cdot \\mathbf{B} + \\mathbf{A} \\cdot \\mathbf{C}$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "" }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Is $(\\mathbf{A} \\cdot \\mathbf{B}) \\mathbf{C}$ the same as $\\mathbf{A} (\\mathbf{B} \\cdot \\mathbf{C})$?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "One is a vector parallel to C, the other parallel to A." }] },
            { id: "s2", type: "theory", title: "Properties", content: "1. Distributive: $\\mathbf{A} \\cdot (\\mathbf{B} + \\mathbf{C}) = \\mathbf{A} \\cdot \\mathbf{B} + \\mathbf{A} \\cdot \\mathbf{C}$\n2. Scalar Multiplier: $\\mathbf{A} \\cdot (k\\mathbf{B}) = k(\\mathbf{A} \\cdot \\mathbf{B})$\n3. Orthogonality: If $\\mathbf{A} \\cdot \\mathbf{B} = 0$ (and neither is 0), they are perpendicular." },
            { id: "s3", type: "interactive_canvas", title: "Distributivity", content: "Check the distributive law geometrically.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Law of Cosines", content: "**Goal:** Derive $C^2 = A^2 + B^2 - 2AB\\cos\\theta$", proofSteps: ["Let $\\mathbf{C} = \\mathbf{A} - \\mathbf{B}$.", "Dot $\\mathbf{C}$ with itself: $C^2 = (\\mathbf{A}-\\mathbf{B})\\cdot(\\mathbf{A}-\\mathbf{B})$.", "Expand: $A^2 + B^2 - 2\\mathbf{A}\\cdot\\mathbf{B}$.", "Substitute definition: $A^2 + B^2 - 2AB\\cos\\theta$."] },
            { id: "s5", type: "numerical", title: "Orthogonality", content: "Vector A has length 5. Vector B has length 5. Their dot product is 0. What is the angle in degrees?", numericAnswer: 90, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Negative Dot Product", content: "A negative dot product implies the angle is:", options: [{ id: "A", text: "Acute (< 90)", isCorrect: false, explanation: "" }, { id: "B", text: "Obtuse (> 90)", isCorrect: true, explanation: "Cosine is negative in the second quadrant." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "If $\\mathbf{A} \\cdot \\mathbf{B} = 0$, the vectors are said to be ___.", blankAnswer: "orthogonal" }
          ]
        },
        {
          id: "les-1-1-1-7",
          title: "Cross Product Definition",
          description: "The vector product.",
          icon: "X",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "The result of a cross product is a:", options: [{ id: "A", text: "Scalar", isCorrect: false, explanation: "" }, { id: "B", text: "Vector", isCorrect: true, explanation: "Hence the name Vector Product." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "The magnitude of $\\mathbf{A} \\times \\mathbf{B}$ is related to:", options: [{ id: "A", text: "Cosine of angle", isCorrect: false, explanation: "" }, { id: "B", text: "Sine of angle", isCorrect: true, explanation: "" }] },
            { id: "s2", type: "theory", title: "Cross Product", content: "$\\mathbf{A} \\times \\mathbf{B} \\equiv AB \\sin \\theta \\,\\mathbf{\\hat{n}}$\n\n$\\mathbf{\\hat{n}}$ is a unit vector perpendicular to both $\\mathbf{A}$ and $\\mathbf{B}$, determined by the **Right-Hand Rule**.\n\nMagnitude is the area of the parallelogram formed by $\\mathbf{A}$ and $\\mathbf{B}$." },
            { id: "s3", type: "interactive_canvas", title: "Right Hand Rule", content: "Curl fingers from A to B. Thumb points along n.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Parallel Vectors", content: "**Goal:** Show $\\mathbf{A} \\times \\mathbf{A} = 0$", proofSteps: ["Angle $\\theta = 0$.", "$\\sin(0) = 0$.", "Thus magnitude is 0."] },
            { id: "s5", type: "numerical", title: "Area", content: "A=3, B=4, angle=90. What is magnitude of A x B?", numericAnswer: 12, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Direction", content: "If A is East and B is North, A x B is:", options: [{ id: "A", text: "Up", isCorrect: true, explanation: "Right hand rule." }, { id: "B", text: "Down", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The direction of the cross product is determined by the ___ hand rule.", blankAnswer: "right" }
          ]
        },
        {
          id: "les-1-1-1-8",
          title: "Cross Product Properties",
          description: "Anti-commutativity and distributivity.",
          icon: "List",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Is the cross product commutative ($A \\times B = B \\times A$)?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "It is anti-commutative." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What is $B \\times A$ in terms of $A \\times B$?", options: [{ id: "A", text: "$-(A \\times B)$", isCorrect: true, explanation: "Sign flip." }, { id: "B", text: "$A \\times B$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Properties", content: "1. Distributive: $\\mathbf{A} \\times (\\mathbf{B} + \\mathbf{C}) = (\\mathbf{A} \\times \\mathbf{B}) + (\\mathbf{A} \\times \\mathbf{C})$\n2. Anti-commutative: $\\mathbf{B} \\times \\mathbf{A} = -(\\mathbf{A} \\times \\mathbf{B})$\n3. Not Associative: $\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C}) \\neq (\\mathbf{A} \\times \\mathbf{B}) \\times \\mathbf{C}$" },
            { id: "s3", type: "interactive_canvas", title: "Anti-commutativity", content: "Visualizing the sign flip.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Sign Flip", content: "**Goal:** Show $\\mathbf{B} \\times \\mathbf{A} = -\\mathbf{A} \\times \\mathbf{B}$", proofSteps: ["Magnitude $AB \\sin\\theta$ is same.", "Right hand rule direction flips.", "Curling B to A is opposite to A to B.", "Thus vector is negated."] },
            { id: "s5", type: "numerical", title: "Calculation", content: "If |A x B| = 5, what is |B x A|?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Zero Cross Product", content: "Cross product is zero if vectors are:", options: [{ id: "A", text: "Perpendicular", isCorrect: false, explanation: "" }, { id: "B", text: "Parallel", isCorrect: true, explanation: "Sin(0)=0." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The cross product of two parallel vectors is always ___.", blankAnswer: "zero" }
          ]
        }
      ]
    },
    {
      id: "unit-1-1-2",
      title: "1.1.2 Component Algebra",
      description: "Cartesian coordinates, Basis vectors, and Component rules.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-1-2-1",
          title: "Cartesian Coordinates",
          description: "x, y, z and basis vectors.",
          icon: "Grid",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Are the unit vectors $\\hat{x}, \\hat{y}, \\hat{z}$ constant?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "In Cartesian coords, they point in fixed directions." }, { id: "B", text: "No", isCorrect: false, explanation: "This would be true for spherical coords." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What is the magnitude of $\\hat{x}$?", options: [{ id: "A", text: "0", isCorrect: false, explanation: "" }, { id: "B", text: "1", isCorrect: true, explanation: "It is a unit vector." }] },
            { id: "s2", type: "theory", title: "Basis Vectors", content: "Any vector $\\mathbf{A}$ can be expressed as:\n$$\\mathbf{A} = A_x\\mathbf{\\hat{x}} + A_y\\mathbf{\\hat{y}} + A_z\\mathbf{\\hat{z}}$$\n\n$A_x, A_y, A_z$ are components.\n$\\mathbf{\\hat{x}}, \\mathbf{\\hat{y}}, \\mathbf{\\hat{z}}$ are mutually perpendicular unit vectors." },
            { id: "s3", type: "interactive_canvas", title: "Component Explorer", content: "See how a vector decomposes into x and y components.", interactiveCanvasId: "component-form-interactive" },
            { id: "s4", type: "proof", title: "Proof: Orthogonality", content: "**Goal:** Show $\\mathbf{\\hat{x}} \\cdot \\mathbf{\\hat{y}} = 0$", proofSteps: ["$\\mathbf{\\hat{x}}$ is perpendicular to $\\mathbf{\\hat{y}}$.", "Angle is 90 degrees.", "$\\cos(90) = 0$.", "Therefore dot product is 0."] },
            { id: "s5", type: "numerical", title: "Components", content: "If A = 3x + 4y, what is A_x?", numericAnswer: 3, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Basis", content: "The set of vectors {x, y, z} forms a:", options: [{ id: "A", text: "Basis", isCorrect: true, explanation: "They span the space." }, { id: "B", text: "Scalar", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The unit vectors along the Cartesian axes are called ___ vectors.", blankAnswer: "basis" }
          ]
        },
        {
          id: "les-1-1-2-2",
          title: "Component Operations",
          description: "Adding and Scaling.",
          icon: "Plus",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "To add two vectors in component form, you:", options: [{ id: "A", text: "Add their magnitudes", isCorrect: false, explanation: "" }, { id: "B", text: "Add like components", isCorrect: true, explanation: "(Ax+Bx, Ay+By, ...)" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "To multiply a vector by scalar k:", options: [{ id: "A", text: "Multiply only x component", isCorrect: false, explanation: "" }, { id: "B", text: "Multiply all components by k", isCorrect: true, explanation: "" }] },
            { id: "s2", type: "theory", title: "Rule (i) & (ii)", content: "**Addition:**\n$\\mathbf{A} + \\mathbf{B} = (A_x+B_x)\\mathbf{\\hat{x}} + (A_y+B_y)\\mathbf{\\hat{y}} + (A_z+B_z)\\mathbf{\\hat{z}}$\n\n**Scalar Mult:**\n$a\\mathbf{A} = aA_x\\mathbf{\\hat{x}} + aA_y\\mathbf{\\hat{y}} + aA_z\\mathbf{\\hat{z}}$" },
            { id: "s3", type: "interactive_canvas", title: "Visualizing Components", content: "Addition in grid view.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Component Addition", content: "**Goal:** Justify component rule.", proofSteps: ["Write A as sum of basis vectors.", "Write B as sum of basis vectors.", "Group terms with same basis vector (distributive law)."] },
            { id: "s5", type: "numerical", title: "Addition", content: "A = (1, 2), B = (3, 4). What is the x-component of A+B?", numericAnswer: 4, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Subtraction", content: "Subtraction works by:", options: [{ id: "A", text: "Subtracting components", isCorrect: true, explanation: "" }, { id: "B", text: "Dividing components", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "When adding vectors, we add corresponding ___.", blankAnswer: "components" }
          ]
        },
        {
          id: "les-1-1-2-3",
          title: "Dot Product (Components)",
          description: "Calculating A dot B.",
          icon: "CircleDot",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What is $\\mathbf{\\hat{x}} \\cdot \\mathbf{\\hat{x}}$?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "" }, { id: "B", text: "0", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What is $\\mathbf{\\hat{x}} \\cdot \\mathbf{\\hat{y}}$?", options: [{ id: "A", text: "1", isCorrect: false, explanation: "" }, { id: "B", text: "0", isCorrect: true, explanation: "Orthogonal." }] },
            { id: "s2", type: "theory", title: "Rule (iii)", content: "$\\mathbf{A} \\cdot \\mathbf{B} = A_x B_x + A_y B_y + A_z B_z$\n\nTo calculate dot product, multiply like components and sum them." },
            { id: "s3", type: "interactive_canvas", title: "Dot Product Calc", content: "Calculator tool.", interactiveCanvasId: "component-form-interactive" },
            { id: "s4", type: "proof", title: "Proof: Component Rule", content: "**Goal:** Derive formula.", proofSteps: ["Expand $(A_x \\hat{x} + ...) \\cdot (B_x \\hat{x} + ...)$", "This gives 9 terms.", "Cross terms like $\\hat{x} \\cdot \\hat{y}$ vanish.", "Self terms like $\\hat{x} \\cdot \\hat{x}$ become 1.", "Result: $A_x B_x + A_y B_y + A_z B_z$."] },
            { id: "s5", type: "numerical", title: "Calculation", content: "A=(1,2,3), B=(4, -5, 6). Calculate A dot B.", numericAnswer: 12, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Result Type", content: "The result is:", options: [{ id: "A", text: "A Vector", isCorrect: false, explanation: "" }, { id: "B", text: "A Scalar", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The dot product of perpendicular basis vectors is ___.", blankAnswer: "zero" }
          ]
        },
        {
          id: "les-1-1-2-4",
          title: "Cross Product (Components)",
          description: "Determinant rule.",
          icon: "Grid",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What is $\\mathbf{\\hat{x}} \\times \\mathbf{\\hat{y}}$?", options: [{ id: "A", text: "$\\mathbf{\\hat{z}}$", isCorrect: true, explanation: "Right hand cyclic." }, { id: "B", text: "$-\\mathbf{\\hat{z}}$", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "How many components does the cross product have?", options: [{ id: "A", text: "1", isCorrect: false, explanation: "" }, { id: "B", text: "3", isCorrect: true, explanation: "It is a vector." }] },
            { id: "s2", type: "theory", title: "Rule (iv)", content: "The cross product can be calculated as a determinant:\n\n$$ \\mathbf{A} \\times \\mathbf{B} = \\begin{vmatrix} \\hat{x} & \\hat{y} & \\hat{z} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix} $$" },
            { id: "s3", type: "interactive_canvas", title: "Cross Product", content: "Visualizing the orthogonal result.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Component Expansion", content: "**Goal:** Show x-component.", proofSteps: ["Expand $(A_x \\hat{x} + ...) \\times (B_x \\hat{x} + ...)$", "Terms like $\\hat{x} \\times \\hat{x}$ vanish.", "Terms like $\\hat{y} \\times \\hat{z}$ give $\\hat{x}$.", "Terms like $\\hat{z} \\times \\hat{y}$ give $-\\hat{x}$.", "Sum x terms: $A_y B_z - A_z B_y$."] },
            { id: "s5", type: "numerical", title: "Calculation", content: "A=(1,0,0), B=(0,1,0). What is z-component of A x B?", numericAnswer: 1, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Determinant", content: "The determinant method ensures:", options: [{ id: "A", text: "Correct signs and components", isCorrect: true, explanation: "" }, { id: "B", text: "Scalar result", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The cross product of $\\hat{x}$ and $\\hat{x}$ is ___.", blankAnswer: "zero" }
          ]
        },
        {
          id: "les-1-1-2-5",
          title: "Magnitude & Direction",
          description: "Using components.",
          icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "How do you find the magnitude of a vector from components?", options: [{ id: "A", text: "Sum of components", isCorrect: false, explanation: "" }, { id: "B", text: "Square root of sum of squares", isCorrect: true, explanation: "Pythagorean theorem." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What is $\\mathbf{A} \\cdot \\mathbf{A}$ in components?", options: [{ id: "A", text: "$A_x^2 + A_y^2 + A_z^2$", isCorrect: true, explanation: "" }, { id: "B", text: "$A^2$", isCorrect: true, explanation: "Both are correct." }] },
            { id: "s2", type: "theory", title: "Magnitude", content: "$$A = \\sqrt{A_x^2 + A_y^2 + A_z^2}$$\n\nThis is the 3D generalization of the Pythagorean theorem." },
            { id: "s3", type: "interactive_canvas", title: "3D Pythagorean", content: "Visualizing the diagonal of a box.", interactiveCanvasId: "component-form-interactive" },
            { id: "s4", type: "proof", title: "Proof: From Dot Product", content: "**Goal:** Show $A = \\sqrt{A \\cdot A}$", proofSteps: ["$A^2 = \\mathbf{A} \\cdot \\mathbf{A}$", "In components: $A_x A_x + A_y A_y + A_z A_z$.", "So $A = \\sqrt{\\sum A_i^2}$."] },
            { id: "s5", type: "numerical", title: "Magnitude", content: "A = (3, 4, 0). What is |A|?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Unit Vector", content: "To normalize vector A, you divide by:", options: [{ id: "A", text: "$|A|$", isCorrect: true, explanation: "" }, { id: "B", text: "$A^2$", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The magnitude is always a ___ real number.", blankAnswer: "positive" }
          ]
        },
        {
          id: "les-1-1-2-6",
          title: "Algebraic Properties",
          description: "Unit vectors and identities.",
          icon: "Book",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Are Cartesian unit vectors right-handed?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "x cross y = z." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What is $\\hat{z} \\times \\hat{x}$?", options: [{ id: "A", text: "$\\hat{y}$", isCorrect: true, explanation: "Cyclic order x-y-z-x..." }, { id: "B", text: "$-\\hat{y}$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Cyclic Permutation", content: "$\n\\hat{x} \\times \\hat{y} = \\hat{z}\n\\\\\n\\hat{y} \\times \\hat{z} = \\hat{x}\n\\\\\n\\hat{z} \\times \\hat{x} = \\hat{y}\n$\n\nReversing order flips sign." },
            { id: "s3", type: "interactive_canvas", title: "Right Hand System", content: "Check the axes.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Cyclic Property", content: "**Goal:** Visualize cycle.", proofSteps: ["Write x, y, z in a circle.", "Going clockwise (x->y->z) is positive.", "Going counter-clockwise is negative."] },
            { id: "s5", type: "numerical", title: "Cross Product", content: "If A = z, B = x. A x B = ?", numericAnswer: 1, numericTolerance: 0, notes: "Answer represents y-direction magnitude." },
            { id: "s6", type: "quiz", title: "Permutation", content: "x, y, z is a ___ permutation.", options: [{ id: "A", text: "Cyclic/Even", isCorrect: true, explanation: "" }, { id: "B", text: "Odd", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The system (x, y, z) forms a ___ handed coordinate system.", blankAnswer: "right" }
          ]
        }
      ]
    },
    {
      id: "unit-1-1-3",
      title: "1.1.3 Advanced Products",
      description: "Triple products, identities, and transformations.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-1-3-1",
          title: "Scalar Triple Product",
          description: "Volume of parallelepiped.",
          icon: "Box",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What kind of quantity is $\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C})$?", options: [{ id: "A", text: "Vector", isCorrect: false, explanation: "" }, { id: "B", text: "Scalar", isCorrect: true, explanation: "It ends with a dot product." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Geometrically, it represents:", options: [{ id: "A", text: "Area", isCorrect: false, explanation: "" }, { id: "B", text: "Volume", isCorrect: true, explanation: "Of the parallelepiped formed by A, B, C." }] },
            { id: "s2", type: "theory", title: "Scalar Triple Product", content: "$$\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C})$$\n\nThis equals the volume of the parallelepiped defined by the three vectors. \n\nProperty: $\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B} \\cdot (\\mathbf{C} \\times \\mathbf{A}) = \\mathbf{C} \\cdot (\\mathbf{A} \\times \\mathbf{B})$ (Cyclic)." },
            { id: "s3", type: "interactive_canvas", title: "Volume Visualizer", content: "Base area x Height.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Cyclic", content: "**Goal:** Show A.(BxC) = B.(CxA)", proofSteps: ["BxC is area vector of base.", "Dot with A gives altitude times area.", "Volume is invariant of which face is 'base'."] },
            { id: "s5", type: "numerical", title: "Calculation", content: "A=(1,0,0), B=(0,1,0), C=(0,0,2). Volume?", numericAnswer: 2, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Coplanar Vectors", content: "If A, B, C are in the same plane, the triple product is:", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "Volume is zero." }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The scalar triple product is invariant under ___ permutation of the vectors.", blankAnswer: "cyclic" }
          ]
        },
        {
          id: "les-1-1-3-2",
          title: "Vector Triple Product",
          description: "Ax(BxC).",
          icon: "Layers",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Is $\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C})$ a vector or scalar?", options: [{ id: "A", text: "Scalar", isCorrect: false, explanation: "" }, { id: "B", text: "Vector", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Is it associative? $(\\mathbf{A} \\times \\mathbf{B}) \\times \\mathbf{C} = \\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C})$?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Generally not." }] },
            { id: "s2", type: "theory", title: "BAC-CAB Rule", content: "$$\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B}(\\mathbf{A} \\cdot \\mathbf{C}) - \\mathbf{C}(\\mathbf{A} \\cdot \\mathbf{B})$$\n\nMnemonic: \"BAC minus CAB\"." },
            { id: "s3", type: "interactive_canvas", title: "Vector Direction", content: "Result lies in the plane of B and C.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Planarity", content: "**Goal:** Show result is in B-C plane.", proofSteps: ["$\\mathbf{D} = \\mathbf{B} \\times \\mathbf{C}$ is normal to B-C plane.", "$\\mathbf{A} \\times \\mathbf{D}$ is normal to D.", "A vector normal to the normal of a plane lies IN the plane.", "Thus result is $c_1 \\mathbf{B} + c_2 \\mathbf{C}$."] },
            { id: "s5", type: "numerical", title: "Calculation", content: "A=z, B=x, C=y. A.(C) = 0. A.(B) = 0. Result?", numericAnswer: 0, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Rule Name", content: "The identity is known as:", options: [{ id: "A", text: "ABC rule", isCorrect: false, explanation: "" }, { id: "B", text: "BAC-CAB rule", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The vector triple product $\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C})$ lies in the plane defined by ___ and ___.", blankAnswer: "B, C" }
          ]
        },
        {
          id: "les-1-1-3-3",
          title: "Triple Product Properties",
          description: "Identities.",
          icon: "Book",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Does $(\\mathbf{A} \\times \\mathbf{B}) \\times \\mathbf{C} = \\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C})$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Cross product is not associative." }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Can you swap dot and cross in scalar triple product?", options: [{ id: "A", text: "Yes: A.(BxC) = (AxB).C", isCorrect: true, explanation: "This is a property." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Identities", content: "1. Scalar Triple: Dot and Cross interchangeable.\n2. Vector Triple: Use BAC-CAB.\n3. $(\\mathbf{A} \\times \\mathbf{B}) \\times \\mathbf{C} = -\\mathbf{C} \\times (\\mathbf{A} \\times \\mathbf{B}) = -(\\mathbf{A}(\\mathbf{C} \\cdot \\mathbf{B}) - \\mathbf{B}(\\mathbf{C} \\cdot \\mathbf{A}))$." },
            { id: "s3", type: "interactive_canvas", title: "Visualization", content: "Abstract vector relations.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Non-associativity", content: "**Goal:** Counterexample.", proofSteps: ["$(x \\times x) \\times y = 0 \\times y = 0$.", "$x \\times (x \\times y) = x \\times z = -y$.", "$0 \\neq -y$."] },
            { id: "s5", type: "numerical", title: "Zero check", content: "A. (A x B) is always?", numericAnswer: 0, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Perpendicularity", content: "A x B is perpendicular to:", options: [{ id: "A", text: "Only A", isCorrect: false, explanation: "" }, { id: "B", text: "Both A and B", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The scalar triple product represents the ___ of a parallelepiped.", blankAnswer: "volume" }
          ]
        },
        {
          id: "les-1-1-3-4",
          title: "Vector Transformations",
          description: "How vectors behave under rotation.",
          icon: "RefreshCw",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "If you rotate the coordinate system, does the physical vector $\\mathbf{A}$ change?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "The vector stays, its components change." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "If you rotate coordinates, do the components $A_x, A_y, A_z$ change?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "" }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Transformation Law", content: "Under a rotation of coordinates, vector components transform as:\n$$\\bar{A}_i = \\sum_{j=1}^3 R_{ij} A_j$$\nwhere $R_{ij}$ is the rotation matrix. This is the definition of a tensor of rank 1 (a vector)." },
            { id: "s3", type: "interactive_canvas", title: "Rotation", content: "Rotating axes.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Invariance of Length", content: "**Goal:** Show $|A|$ is invariant.", proofSteps: ["$|A|^2 = \\sum A_i A_i$.", "Substitute transformed components.", "Use orthogonality of R matrix.", "Result is $\\sum \\bar{A}_i \\bar{A}_i = \\sum A_i A_i$."] },
            { id: "s5", type: "numerical", title: "Rotation", content: "Rotate vector (1,0) by 90 degrees. New x-component?", numericAnswer: 0, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Scalars", content: "How do scalars transform under rotation?", options: [{ id: "A", text: "They change", isCorrect: false, explanation: "" }, { id: "B", text: "They stay the same", isCorrect: true, explanation: "Invariant." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A vector is defined by how its components ___ under coordinate rotation.", blankAnswer: "transform" }
          ]
        },
        {
          id: "les-1-1-3-5",
          title: "Rotation Matrices (2D)",
          description: "2D rotation.",
          icon: "RotateCw",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Rotation matrix elements involve:", options: [{ id: "A", text: "Sin and Cos", isCorrect: true, explanation: "" }, { id: "B", text: "Squares", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Determinant of a proper rotation matrix is:", options: [{ id: "A", text: "1", isCorrect: true, explanation: "" }, { id: "B", text: "0", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "2D Rotation", content: "$$\\begin{pmatrix} \\bar{A}_y \\\\ \\bar{A}_z \\end{pmatrix} = \\begin{pmatrix} \\cos\\phi & \\sin\\phi \\\\ -\\sin\\phi & \\cos\\phi \\end{pmatrix} \\begin{pmatrix} A_y \\\\ A_z \\end{pmatrix}$$\n\n(Rotation about x-axis)." },
            { id: "s3", type: "interactive_canvas", title: "2D Rotation", content: "Visualizing the matrix operation.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Geometry", content: "**Goal:** Derive terms.", proofSteps: ["Project old axes onto new axes.", "$\\bar{y}$ axis is at angle $\\phi$ to y.", "$\\bar{z}$ axis is at angle $\\phi$ to z."] },
            { id: "s5", type: "numerical", title: "Cos(0)", content: "What is cos(0)?", numericAnswer: 1, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Inverse", content: "Inverse of rotation by phi is:", options: [{ id: "A", text: "Rotation by -phi", isCorrect: true, explanation: "" }, { id: "B", text: "Same rotation", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The rotation matrix is an ___ matrix.", blankAnswer: "orthogonal" }
          ]
        },
        {
          id: "les-1-1-3-6",
          title: "Rotation Matrices (3D)",
          description: "General rotations.",
          icon: "Globe",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "A 3D rotation matrix is size:", options: [{ id: "A", text: "2x2", isCorrect: false, explanation: "" }, { id: "B", text: "3x3", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "How many independent parameters define a 3D rotation?", options: [{ id: "A", text: "3 (Euler angles)", isCorrect: true, explanation: "" }, { id: "B", text: "9", isCorrect: false, explanation: "Constraints reduce it." }] },
            { id: "s2", type: "theory", title: "3D Transformation", content: "$$\\bar{A}_i = \\sum_{j=1}^3 R_{ij} A_j$$\n\n$R_{ij}$ is the cosine of the angle between the i-th new axis and the j-th old axis." },
            { id: "s3", type: "interactive_canvas", title: "3D Axes", content: "Rotating coordinate system.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Orthogonality", content: "**Goal:** $R R^T = I$", proofSteps: ["Required to preserve lengths.", "Rows are orthonormal vectors.", "Columns are orthonormal vectors."] },
            { id: "s5", type: "numerical", title: "Identity", content: "If angle is 0, what is R_11?", numericAnswer: 1, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Determinant", content: "Det(R) = 1 means:", options: [{ id: "A", text: "Proper rotation", isCorrect: true, explanation: "No reflection." }, { id: "B", text: "Improper rotation", isCorrect: false, explanation: "That would be -1." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The summation convention implies summing over repeated ___.", blankAnswer: "indices" }
          ]
        },
        {
          id: "les-1-1-3-7",
          title: "Vectors vs Pseudovectors",
          description: "Reflection properties.",
          icon: "Mirror",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "If you invert coordinates ($x \\to -x$, etc.), does a displacement vector change sign?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "It points the other way relative to new axes." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Does a cross product of two vectors change sign under inversion?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "(-A) x (-B) = A x B." }, { id: "B", text: "No", isCorrect: true, explanation: "Signs cancel." }] },
            { id: "s2", type: "theory", title: "Pseudovectors", content: "**Vector (Polar):** Changes sign under inversion (e.g., position, force).\n**Pseudovector (Axial):** Does NOT change sign under inversion (e.g., cross product, angular momentum, magnetic field)." },
            { id: "s3", type: "interactive_canvas", title: "Mirror World", content: "Visualize reflection.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Cross Product", content: "**Goal:** Check inversion.", proofSteps: ["$\\bar{\\mathbf{A}} = -\\mathbf{A}$", "$\\bar{\\mathbf{B}} = -\\mathbf{B}$", "$\\bar{\\mathbf{A}} \\times \\bar{\\mathbf{B}} = (-\\mathbf{A}) \\times (-\\mathbf{B}) = \\mathbf{A} \\times \\mathbf{B}$", "Thus it does not flip."] },
            { id: "s5", type: "numerical", title: "Sign", content: "Parity of a pseudovector is (+1 or -1)?", numericAnswer: 1, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Example", content: "Angular momentum $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ is a:", options: [{ id: "A", text: "Vector", isCorrect: false, explanation: "" }, { id: "B", text: "Pseudovector", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Vectors that do not change sign under inversion are called ___.", blankAnswer: "pseudovectors" }
          ]
        },
        {
          id: "les-1-1-3-8",
          title: "Scalars vs Pseudoscalars",
          description: "Triple product parity.",
          icon: "Circle",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Is the dot product of two vectors a scalar?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "(-A).(-B) = A.B (unchanged)." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Is the scalar triple product $\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C})$ invariant under inversion?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "(-A).(( -B)x(-C)) = - (A.(BxC)). It flips sign." }] },
            { id: "s2", type: "theory", title: "Pseudoscalars", content: "A **scalar** is invariant under inversion (e.g. mass).\nA **pseudoscalar** changes sign under inversion (e.g. scalar triple product).\n\nPseudoscalars are formed by dotting a vector with a pseudovector." },
            { id: "s3", type: "interactive_canvas", title: "Volume Reflection", content: "A right-handed volume becomes left-handed.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Triple Product", content: "**Goal:** Check sign.", proofSteps: ["$\\mathbf{B} \\times \\mathbf{C}$ is a pseudovector (no sign change).", "$\\mathbf{A}$ is a vector (sign change).", "Dot product of vector and pseudovector changes sign."] },
            { id: "s5", type: "numerical", title: "Parity", content: "Parity of a pseudoscalar (+1 or -1)?", numericAnswer: -1, numericTolerance: 0 },
            { id: "s6", type: "quiz", title: "Magnetic Flux", content: "Magnetic flux $\\int \\mathbf{B} \\cdot d\\mathbf{a}$ is a:", options: [{ id: "A", text: "Scalar", isCorrect: true, explanation: "B is pseudovector, da is pseudovector (area). Pseudo.Pseudo = Scalar." }, { id: "B", text: "Pseudoscalar", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A quantity that changes sign under inversion is called a ___.", blankAnswer: "pseudoscalar" }
          ]
        }
      ]
    },
    {
      id: "unit-1-1-4",
      title: "1.1.4 Position & Separation",
      description: "Definitions of r and script r.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-1-4-1",
          title: "Position Vector",
          description: "Coordinates as a vector.",
          icon: "MapPin",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What is the origin?", options: [{ id: "A", text: "(0,0,0)", isCorrect: true, explanation: "" }, { id: "B", text: "(1,1,1)", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Does the position vector depend on the choice of origin?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "It points FROM the origin." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Position Vector", content: "$$\\mathbf{r} \\equiv x\\mathbf{\\hat{x}} + y\\mathbf{\\hat{y}} + z\\mathbf{\\hat{z}}$$\n\nThe position vector points from the origin to the point $(x, y, z)$." },
            { id: "s3", type: "interactive_canvas", title: "Position", content: "Visualizing r.", interactiveCanvasId: "component-form-interactive" },
            { id: "s4", type: "proof", title: "Proof: Magnitude", content: "**Goal:** Find $r$.", proofSteps: ["$r = |\\mathbf{r}| = \\sqrt{\\mathbf{r} \\cdot \\mathbf{r}}$", "$= \\sqrt{x^2 + y^2 + z^2}$."] },
            { id: "s5", type: "numerical", title: "Magnitude", content: "Point (3,4,0). What is r?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Unit Vector", content: "The unit vector $\\mathbf{\\hat{r}}$ points:", options: [{ id: "A", text: "Radially outward", isCorrect: true, explanation: "" }, { id: "B", text: "Tangentially", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The vector from the origin to a point is called the ___ vector.", blankAnswer: "position" }
          ]
        },
        {
          id: "les-1-1-4-2",
          title: "Infinitesimal Displacement",
          description: "dl vector.",
          icon: "ArrowRight",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "If you move by dx, dy, dz, what is your displacement vector?", options: [{ id: "A", text: "$dx\\mathbf{\\hat{x}} + dy\\mathbf{\\hat{y}} + dz\\mathbf{\\hat{z}}$", isCorrect: true, explanation: "" }, { id: "B", text: "$dx + dy + dz$", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Is $d\\mathbf{l}$ a vector?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "" }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Displacement Vector", content: "$$d\\mathbf{l} = dx\\mathbf{\\hat{x}} + dy\\mathbf{\\hat{y}} + dz\\mathbf{\\hat{z}}$$\n\nThis represents an infinitesimal step in space." },
            { id: "s3", type: "interactive_canvas", title: "Path Step", content: "Visualizing a small step along a curve.", interactiveCanvasId: "work-path-interactive" },
            { id: "s4", type: "proof", title: "Proof: Differential", content: "**Goal:** Relate to r.", proofSteps: ["$\\mathbf{r} = x\\mathbf{\\hat{x}} + ...$", "$d\\mathbf{r} = dx\\mathbf{\\hat{x}} + ...$", "Thus $d\\mathbf{l} = d\\mathbf{r}$."] },
            { id: "s5", type: "numerical", title: "Length", content: "If dx=3, dy=4, dz=0. What is length of dl?", numericAnswer: 5, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Usage", content: "We use $d\\mathbf{l}$ in:", options: [{ id: "A", text: "Line Integrals", isCorrect: true, explanation: "" }, { id: "B", text: "Volume Integrals", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The infinitesimal displacement vector is denoted by ___.", blankAnswer: "dl" }
          ]
        },
        {
          id: "les-1-1-4-3",
          title: "Separation Vector",
          description: "Source to Field point.",
          icon: "Minus",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Electrostatics involves source charges and field points. The vector between them is:", options: [{ id: "A", text: "Position Vector", isCorrect: false, explanation: "" }, { id: "B", text: "Separation Vector", isCorrect: true, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Direction of separation vector:", options: [{ id: "A", text: "Source to Field", isCorrect: true, explanation: "" }, { id: "B", text: "Field to Source", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Separation Vector", content: "$${\\mathcal{r}} = \\mathbf{r} - \\mathbf{r}'$$\n\nWhere $\\mathbf{r}$ is the field point (observer) and $\\mathbf{r}'$ is the source point." },
            { id: "s3", type: "interactive_canvas", title: "Separation", content: "Two points and the vector between them.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Geometry", content: "**Goal:** Show $\\mathbf{r} = \\mathbf{r}' + {\\mathcal{r}}$", proofSteps: ["Vector addition head-to-tail.", "Start at origin.", "Go to source (r').", "Add separation (script r).", "Arrive at field point (r)."] },
            { id: "s5", type: "numerical", title: "Calc", content: "Field at (0,0,10). Source at (0,0,2). Separation magnitude?", numericAnswer: 8, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Notation", content: "In Griffiths, this vector is denoted by:", options: [{ id: "A", text: "Script r ($\\mathcal{r}$)", isCorrect: true, explanation: "" }, { id: "B", text: "S", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The separation vector points from the source to the ___ point.", blankAnswer: "field" }
          ]
        },
        {
          id: "les-1-1-4-4",
          title: "Calculating Separation",
          description: "Component subtraction.",
          icon: "List",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "If $\\mathbf{r} = (x,y,z)$ and $\\mathbf{r}' = (x',y',z')$, what is ${\\mathcal{r}}_x$?", options: [{ id: "A", text: "$x - x'$", isCorrect: true, explanation: "" }, { id: "B", text: "$x + x'$", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "What is $|{\\mathcal{r}}|$?", options: [{ id: "A", text: "$\\sqrt{(x-x')^2 + ...}$", isCorrect: true, explanation: "" }, { id: "B", text: "$x-x'$", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Calculation", content: "$${\\mathcal{r}} = (x-x')\\mathbf{\\hat{x}} + (y-y')\\mathbf{\\hat{y}} + (z-z')\\mathbf{\\hat{z}}$$\n\nMagnitude $\\mathcal{r} = \\sqrt{(x-x')^2 + (y-y')^2 + (z-z')^2}$." },
            { id: "s3", type: "interactive_canvas", title: "Component Diff", content: "Visualizing difference.", interactiveCanvasId: "component-form-interactive" },
            { id: "s4", type: "proof", title: "Proof: Derivation", content: "**Goal:** Formula", proofSteps: ["$\mathbf{r} = x\mathbf{\hat{x}}...$", "$\mathbf{r}' = x'\mathbf{\hat{x}}...$", "Subtract component-wise."] },
            { id: "s5", type: "numerical", title: "Calc", content: "x=5, x'=2. What is x-component of separation?", numericAnswer: 3, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Importance", content: "Why is this important?", options: [{ id: "A", text: "Coulomb's law uses this distance", isCorrect: true, explanation: "Force depends on distance between charges." }, { id: "B", text: "It's not", isCorrect: false, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The magnitude of the separation vector is the ___ between the points.", blankAnswer: "distance" }
          ]
        },
        {
          id: "les-1-1-4-5",
          title: "Unit Separation Vector",
          description: "Direction only.",
          icon: "Compass",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "How do you find $\\mathbf{\\hat{\\mathcal{r}}}$?", options: [{ id: "A", text: "${\\mathcal{r}} / \\mathcal{r}$", isCorrect: true, explanation: "Vector divided by magnitude." }, { id: "B", text: "${\\mathcal{r}}$", isCorrect: false, explanation: "" }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Does $\\mathbf{\\hat{\\mathcal{r}}}$ have units?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "Meters/Meters cancels." }] },
            { id: "s2", type: "theory", title: "Unit Vector", content: "$$\\mathbf{\\hat{\\mathcal{r}}} = \\frac{\\mathbf{r} - \\mathbf{r}'}{|\\mathbf{r} - \\mathbf{r}'|}$$\n\nUsed to denote direction in Coulomb's Law." },
            { id: "s3", type: "interactive_canvas", title: "Direction", content: "Pure direction vector.", interactiveCanvasId: "vector-addition-interactive" },
            { id: "s4", type: "proof", title: "Proof: Norm", content: "**Goal:** Show $|\\hat{\\mathcal{r}}| = 1$", proofSteps: ["$|\\mathbf{v}/v| = |\\mathbf{v}|/v = v/v = 1$."] },
            { id: "s5", type: "numerical", title: "Calc", content: "Sep vector (3, 4, 0). Magnitude 5. x-component of unit vector?", numericAnswer: 0.6, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Comparison", content: "Is $\\mathbf{\\hat{\\mathcal{r}}}$ the same as $\\mathbf{\\hat{r}}$?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "One is from source, one is from origin." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The unit separation vector has a magnitude of ___.", blankAnswer: "one" }
          ]
        }
      ]
    },
    {
      id: "unit-1-1-5",
      title: "1.1.5 Algebra Practice",
      description: "Examples and Problems 1.1-1.10.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-1-1-5-1",
          title: "Ex 1.1 Law of Cosines",
          description: "Derivation using dot product.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.1", content: "**Problem:** Use vector algebra to prove the Law of Cosines.\n\nHint: Consider a triangle formed by $\\mathbf{C} = \\mathbf{A} - \\mathbf{B}$." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Let $\\mathbf{C} = \\mathbf{A} - \\mathbf{B}$.\n2. Dot $\\mathbf{C}$ with itself: $C^2 = (\\mathbf{A}-\\mathbf{B})\\cdot(\\mathbf{A}-\\mathbf{B})$.\n3. Distribute: $A^2 + B^2 - 2\\mathbf{A}\\cdot\\mathbf{B}$.\n4. Use def: $\\mathbf{A}\\cdot\\mathbf{B} = AB\\cos\\theta$.\n5. Result: $C^2 = A^2 + B^2 - 2AB\\cos\\theta$." },
            { id: "s2", type: "quiz", title: "Review", content: "If theta=90, what does it become?", options: [{ id: "A", text: "Pythagorean Theorem", isCorrect: true, explanation: "" }, { id: "B", text: "Zero", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Step check", content: "What is $\\mathbf{B} \\cdot \\mathbf{B}$?", options: [{ id: "A", text: "$B^2$", isCorrect: true, explanation: "" }, { id: "B", text: "2B", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-2",
          title: "Ex 1.2 Cube Diagonals",
          description: "Angle between face diagonals.",
          icon: "Box",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.2", content: "**Problem:** Find the angle between the face diagonals of a cube." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Define cube edges as $\\mathbf{\\hat{x}}, \\mathbf{\\hat{y}}, \\mathbf{\\hat{z}}$.\n2. Diagonals on faces: $\\mathbf{A} = (1,0,1)$ and $\\mathbf{B} = (0,1,1)$.\n3. Dot product: $1*0 + 0*1 + 1*1 = 1$.\n4. Magnitudes: $\\sqrt{2}$.\n5. $\\cos\\theta = 1 / (\\sqrt{2}\\sqrt{2}) = 0.5$.\n6. $\\theta = 60^\\circ$." },
            { id: "s2", type: "quiz", title: "Check", content: "What are the magnitudes of the face diagonals?", options: [{ id: "A", text: "$\\sqrt{2}$", isCorrect: true, explanation: "" }, { id: "B", text: "1", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Check", content: "Angle result?", options: [{ id: "A", text: "60 degrees", isCorrect: true, explanation: "" }, { id: "B", text: "45 degrees", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-3",
          title: "Prob 1.1 Distributive",
          description: "Proving distribution.",
          icon: "List",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.1", content: "**Problem:** Prove $\\mathbf{A} \\cdot (\\mathbf{B} + \\mathbf{C}) = \\mathbf{A} \\cdot \\mathbf{B} + \\mathbf{A} \\cdot \\mathbf{C}$." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Orient x-axis along $\\mathbf{A}$.\n2. Then $\\mathbf{A} \\cdot \\mathbf{B} = A B_x$.\n3. $\\mathbf{B} + \\mathbf{C}$ has x-component $B_x + C_x$.\n4. $\\mathbf{A} \\cdot (\\mathbf{B}+\\mathbf{C}) = A(B_x + C_x) = A B_x + A C_x$.\n5. This is $\\mathbf{A} \\cdot \\mathbf{B} + \\mathbf{A} \\cdot \\mathbf{C}$." },
            { id: "s2", type: "quiz", title: "Key Insight", content: "The proof relies on the linearity of:", options: [{ id: "A", text: "Projections / Components", isCorrect: true, explanation: "" }, { id: "B", text: "Magnitude", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-4",
          title: "Prob 1.2 Associativity",
          description: "Cross product failure.",
          icon: "X",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.2", content: "**Problem:** Is $(\\mathbf{A} \\times \\mathbf{B}) \\times \\mathbf{C} = \\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C})$?" },
            { id: "s1", type: "solution", title: "Solution", content: "Counter-example:\nLet $\\mathbf{A}=\\mathbf{\\hat{x}}, \\mathbf{B}=\\mathbf{\\hat{x}}, \\mathbf{C}=\\mathbf{\\hat{y}}$.\n\nLHS: $(\\mathbf{\\hat{x}} \\times \\mathbf{\\hat{x}}) \\times \\mathbf{\\hat{y}} = 0 \\times \\mathbf{\\hat{y}} = 0$.\nRHS: $\\mathbf{\\hat{x}} \\times (\\mathbf{\\hat{x}} \\times \\mathbf{\\hat{y}}) = \\mathbf{\\hat{x}} \\times \\mathbf{\\hat{z}} = -\\mathbf{\\hat{y}}$.\n\n$0 \\neq -\\mathbf{\\hat{y}}$. Not associative." },
            { id: "s2", type: "quiz", title: "Conclusion", content: "Is it associative?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "" }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-5",
          title: "Prob 1.3 Body Diagonals",
          description: "Cube angle continued.",
          icon: "Box",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.3", content: "**Problem:** Find angle between body diagonals of a cube." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Diagonals: $\\mathbf{A}=(1,1,1)$ and $\\mathbf{B}=(1,1,-1)$ (crossing center).\n2. Dot: $1+1-1 = 1$.\n3. Magnitudes: $\\sqrt{3}$.\n4. $\\cos\\theta = 1 / (\\sqrt{3}\\sqrt{3}) = 1/3$.\n5. $\\theta \\approx 70.5^\\circ$." },
            { id: "s2", type: "quiz", title: "Comparison", content: "Is this angle larger than the face diagonal angle (60)?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "70.5 > 60." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-6",
          title: "Prob 1.4 Plane Normal",
          description: "Using cross product.",
          icon: "Compass",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.4", content: "**Problem:** Find unit normal to plane with points (1,0,0), (0,2,0), (0,0,3)." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Vectors in plane: $\\mathbf{A} = (-1, 2, 0)$ and $\\mathbf{B} = (-1, 0, 3)$.\n2. Cross: $\\mathbf{A} \\times \\mathbf{B} = (6, 3, 2)$.\n3. Magnitude: $\\sqrt{36+9+4} = 7$.\n4. Unit normal: $(6/7, 3/7, 2/7)$." },
            { id: "s2", type: "quiz", title: "Method", content: "Why use cross product?", options: [{ id: "A", text: "It gives a perpendicular vector", isCorrect: true, explanation: "" }, { id: "B", text: "It gives area", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-7",
          title: "Prob 1.5 BAC-CAB",
          description: "Proof component-wise.",
          icon: "Layers",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.5", content: "**Problem:** Prove $\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B}(\\mathbf{A}\\cdot\\mathbf{C}) - \\mathbf{C}(\\mathbf{A}\\cdot\\mathbf{B})$." },
            { id: "s1", type: "solution", title: "Solution", content: "1. Expand x-component of $\\mathbf{B} \\times \\mathbf{C}$ as $D_x$.\n2. Expand x-component of $\\mathbf{A} \\times \\mathbf{D}$.\n3. Algebra shows it equals $B_x(A_y C_y + A_z C_z) - ...$\n4. Add/subtract $A_x B_x C_x$ term.\n5. Factor into dot products." },
            { id: "s2", type: "quiz", title: "Usefulness", content: "This rule allows us to:", options: [{ id: "A", text: "Convert double cross products to dot products", isCorrect: true, explanation: "" }, { id: "B", text: "Find volume", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-8",
          title: "Prob 1.7 Separation",
          description: "Calculating r script.",
          icon: "Minus",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.7", content: "**Problem:** Source at (2,8,7), Field point at (4,6,8). Find ${\\mathcal{r}}$, magnitude, and direction." },
            { id: "s1", type: "solution", title: "Solution", content: "1. ${\\mathcal{r}} = (4-2, 6-8, 8-7) = (2, -2, 1)$.\n2. Magnitude: $\\sqrt{4+4+1} = 3$.\n3. Unit vector: $(2/3, -2/3, 1/3)$." },
            { id: "s2", type: "quiz", title: "Check", content: "Does the unit vector have length 1?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Sqrt(4/9 + 4/9 + 1/9) = 1." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-9",
          title: "Prob 1.8 Rotation",
          description: "Transforming components.",
          icon: "RefreshCw",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.8", content: "**Problem:** Show dot product is conserved under rotation." },
            { id: "s1", type: "solution", title: "Solution", content: "1. $\\bar{A}_y = A_y \\cos\\phi + A_z \\sin\\phi$, etc.\n2. Form $\\bar{A}_y \\bar{B}_y + ...$\n3. Use $\\cos^2 + \\sin^2 = 1$.\n4. Cross terms cancel.\n5. Result: $A_y B_y + A_z B_z$." },
            { id: "s2", type: "quiz", title: "Meaning", content: "Conservation means:", options: [{ id: "A", text: "Scalar value doesn't depend on coordinate system", isCorrect: true, explanation: "" }, { id: "B", text: "Vector doesn't move", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-1-1-5-10",
          title: "Prob 1.10 Transformations",
          description: "Translation vs Inversion.",
          icon: "Move",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.10", content: "**Problem:** How does a vector transform under translation? Under inversion?" },
            { id: "s1", type: "solution", title: "Solution", content: "**Translation:** Vector $\\mathbf{A}$ is a difference in coordinates $\\Delta x$. Shifts cancel. Components unchanged.\n\n**Inversion:** Coordinates flip $x \\to -x$. Vector components flip sign. $\\mathbf{A} \\to -\\mathbf{A}$." },
            { id: "s2", type: "quiz", title: "Cross Product", content: "Under inversion, $\\mathbf{A} \\times \\mathbf{B}$:", options: [{ id: "A", text: "Flips sign", isCorrect: false, explanation: "" }, { id: "B", text: "Stays same", isCorrect: true, explanation: "(-A) x (-B) = A x B. It is a pseudovector." }] }
          ]
        }
      ]
    },
    {
      id: "unit-1-1-summary",
      title: "Section 1.1 Summary",
      description: "Review of Vector Algebra.",
      color: "duo-green",
      lessons: [
        {
          id: "les-1-1-sum-1",
          title: "Summary: Operations",
          description: "Basic arithmetic.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Vectors", content: "Defined by magnitude and direction. Add via parallelogram rule. Subtraction is adding negative." },
            { id: "s1", type: "theory", title: "Products", content: "**Dot Product:** Scalar. Projection. $\\mathbf{A}\\cdot\\mathbf{B} = AB\\cos\\theta$.\n**Cross Product:** Vector. Area. $\\mathbf{A}\\times\\mathbf{B} = AB\\sin\\theta \\hat{n}$." }
          ]
        },
        {
          id: "les-1-1-sum-2",
          title: "Summary: Components",
          description: "Calculations.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Component Form", content: "Vectors expressed in basis $\\hat{x}, \\hat{y}, \\hat{z}$.\nOperations performed component-wise." },
            { id: "s1", type: "theory", title: "Formulas", content: "$$\\mathbf{A}\\cdot\\mathbf{B} = A_x B_x + ...$$\n$$\\mathbf{A}\\times\\mathbf{B} = \\text{Determinant}$$" }
          ]
        },
        {
          id: "les-1-1-sum-3",
          title: "Summary: Advanced",
          description: "Triples and Transformations.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Triple Products", content: "**Scalar Triple:** Volume. Cyclic.\n**Vector Triple:** BAC-CAB rule." },
            { id: "s1", type: "theory", title: "Transformations", content: "Vectors transform with rotation matrix R. \n**Pseudovectors** (like cross products) do not flip sign under inversion." }
          ]
        },
        {
          id: "les-1-1-sum-4",
          title: "Summary: Separation",
          description: "The r vector.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Separation Vector", content: "$${\\mathcal{r}} = \\mathbf{r} - \\mathbf{r}'$$\n\nPoints from Source to Field. Essential for Coulomb's Law." }
          ]
        }
      ]
    }
  ]
};