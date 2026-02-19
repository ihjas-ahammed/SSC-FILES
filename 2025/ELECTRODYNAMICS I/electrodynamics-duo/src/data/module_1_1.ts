import { ModuleSection } from '../types';

export const UNIT_1_1: ModuleSection = {
  id: "sec-1-1",
  title: "Unit 1: Vector Algebra",
  description: "Scalars, Vectors, Multiplication Rules, and Separation Vectors.",
  color: "duo-blue",
  units: [
    {
      id: "unit-1-1-basics",
      title: "Fundamentals",
      description: "Definitions and basic operations.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-vec-def",
          title: "Scalars & Vectors",
          description: "Physical quantities and transformation.",
          icon: "ArrowUpRight",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "What is a Vector?",
              content: "A **scalar** is specified by a single number (magnitude) and unit (e.g., Mass, Temperature, Charge).\n\nA **vector** is specified by a magnitude and a direction (e.g., Velocity, Force).\n\n**Formal Definition**: A vector is a quantity that transforms like a displacement under rotation of coordinates."
            },
            {
              id: "s2",
              type: "theory",
              title: "Vector Addition",
              content: "Vector addition is commutative and associative:\n\n$$ \\mathbf{A} + \\mathbf{B} = \\mathbf{B} + \\mathbf{A} $$\n$$ (\\mathbf{A} + \\mathbf{B}) + \\mathbf{C} = \\mathbf{A} + (\\mathbf{B} + \\mathbf{C}) $$\n\nTo subtract, we add the negative: $\\mathbf{A} - \\mathbf{B} = \\mathbf{A} + (-\\mathbf{B})$."
            },
            {
              id: "m1",
              type: "match",
              title: "Match the Property",
              content: "Match the vector operation to its geometric interpretation.",
              pairs: [
                { id: "p1", left: "$-\\mathbf{A}$", right: "Same magnitude, opposite direction" },
                { id: "p2", left: "$3\\mathbf{A}$", right: "Scales magnitude by 3" },
                { id: "p3", left: "$\\mathbf{A} + \\mathbf{B}$", right: "Head-to-tail connection" },
                { id: "p4", left: "$|\\mathbf{A}|$", right: "Length of the arrow" }
              ]
            }
          ]
        },
        {
          id: "lesson-components",
          title: "Component Form",
          description: "Unit vectors and magnitude.",
          icon: "Grid",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Unit Vectors",
              content: "In Cartesian coordinates, we use unit vectors $\\hat{x}, \\hat{y}, \\hat{z}$ pointing along the axes.\n\n$$ \\mathbf{A} = A_x \\hat{x} + A_y \\hat{y} + A_z \\hat{z} $$\n\nThe magnitude is:\n$$ |\\mathbf{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2} $$"
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Unit Vector Definition",
              content: "Complete the definition of a unit vector.",
              segments: [
                { id: "1", text: "A unit vector $\\hat{n}$ is derived from a vector $\\mathbf{A}$ by dividing $\\mathbf{A}$ by its ", isBlank: false },
                { id: "2", isBlank: true, correctValue: "magnitude" },
                { id: "3", text: ". It has a length of ", isBlank: false },
                { id: "4", isBlank: true, correctValue: "one" },
                { id: "5", text: ".", isBlank: false }
              ],
              wordBank: ["magnitude", "direction", "zero", "one", "components"]
            }
          ]
        }
      ]
    },
    {
      id: "unit-1-1-products",
      title: "Vector Products",
      description: "Dot, Cross, and Triple Products.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-dot",
          title: "The Dot Product",
          description: "Scalar product and projections.",
          icon: "Minimize",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "The **Dot Product** yields a scalar:\n\n$$ \\mathbf{A} \\cdot \\mathbf{B} = AB \\cos \\theta $$\n\nIn components: $\\mathbf{A} \\cdot \\mathbf{B} = A_x B_x + A_y B_y + A_z B_z$.\n\nIt is commutative: $\\mathbf{A} \\cdot \\mathbf{B} = \\mathbf{B} \\cdot \\mathbf{A}$."
            },
            {
              id: "s2",
              type: "theory",
              title: "Geometric Meaning",
              content: "1. **Projection**: $\\mathbf{A} \\cdot \\mathbf{B}$ is the product of $|\\mathbf{A}|$ and the component of $\\mathbf{B}$ along $\\mathbf{A}$.\n2. **Orthogonality**: If $\\mathbf{A} \\cdot \\mathbf{B} = 0$, the vectors are perpendicular."
            },
            {
              id: "m1",
              type: "match",
              title: "Product Properties",
              content: "Match the vector expression to its result type or value.",
              pairs: [
                { id: "p1", left: "$\\mathbf{A} \\cdot \\mathbf{B}$", right: "Scalar Quantity" },
                { id: "p2", left: "$\\hat{x} \\cdot \\hat{y}$", right: "0" },
                { id: "p3", left: "$\\hat{z} \\cdot \\hat{z}$", right: "1" },
                { id: "p4", left: "$\\mathbf{A} \\cdot \\mathbf{A}$", right: "$|\\mathbf{A}|^2$" }
              ]
            }
          ]
        },
        {
          id: "lesson-cross",
          title: "The Cross Product",
          description: "Vector product and area.",
          icon: "X",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "The **Cross Product** yields a vector:\n\n$$ \\mathbf{A} \\times \\mathbf{B} = AB \\sin \\theta \\, \\hat{n} $$\n\nDirection $\\hat{n}$ is given by the **Right-Hand Rule**. It is anti-commutative:\n$$ \\mathbf{B} \\times \\mathbf{A} = -(\\mathbf{A} \\times \\mathbf{B}) $$"
            },
            {
              id: "s2",
              type: "theory",
              title: "Determinant Form",
              content: "In components:\n\n$$ \\mathbf{A} \\times \\mathbf{B} = \\begin{vmatrix} \\hat{x} & \\hat{y} & \\hat{z} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix} $$\n\nGeometric Interpretation: The magnitude $|\\mathbf{A} \\times \\mathbf{B}|$ is the area of the parallelogram formed by $\\mathbf{A}$ and $\\mathbf{B}$."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Parallel Vectors",
              content: "If $\\mathbf{A}$ and $\\mathbf{B}$ are parallel to each other, what is $\\mathbf{A} \\times \\mathbf{B}$?",
              options: [
                { id: "1", text: "The product of their magnitudes", isCorrect: false, explanation: "That would be the dot product." },
                { id: "2", text: "Zero Vector ($\\mathbf{0}$)", isCorrect: true, explanation: "The angle $\\theta$ is 0, and $\\sin(0) = 0$." },
                { id: "3", text: "Infinite", isCorrect: false, explanation: "" }
              ]
            }
          ]
        },
        {
          id: "lesson-triple",
          title: "Triple Products",
          description: "BAC-CAB and Volumes.",
          icon: "Box",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Scalar Triple Product",
              content: "$$ \\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C}) $$\n\nThis represents the **volume** of the parallelepiped defined by the three vectors. It is invariant under cyclic permutation:\n\n$$ \\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B} \\cdot (\\mathbf{C} \\times \\mathbf{A}) = \\mathbf{C} \\cdot (\\mathbf{A} \\times \\mathbf{B}) $$"
            },
            {
              id: "s2",
              type: "theory",
              title: "Vector Triple Product",
              content: "$$ \\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C}) $$\n\nThis yields a vector lying in the plane of $\\mathbf{B}$ and $\\mathbf{C}$. It is simplified using the **BAC-CAB** rule:\n\n$$ \\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B}(\\mathbf{A} \\cdot \\mathbf{C}) - \\mathbf{C}(\\mathbf{A} \\cdot \\mathbf{B}) $$"
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Rule Practice",
              content: "Apply the BAC-CAB rule to $\\mathbf{A} \\times (\\mathbf{A} \\times \\mathbf{B})$.",
              segments: [
                { id: "1", text: "Result: ", isBlank: false },
                { id: "2", isBlank: true, correctValue: "A" },
                { id: "3", text: " ( $\\mathbf{A} \\cdot \\mathbf{B}$ ) - ", isBlank: false },
                { id: "4", isBlank: true, correctValue: "B" },
                { id: "5", text: " ( $\\mathbf{A} \\cdot \\mathbf{A}$ )", isBlank: false }
              ],
              wordBank: ["A", "B", "C", "Zero"]
            }
          ]
        }
      ]
    },
    {
      id: "unit-1-1-position",
      title: "Position & Separation",
      description: "Coordinate vectors.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-separation",
          title: "Separation Vectors",
          description: "Source to Field point.",
          icon: "MapPin",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Position Vectors",
              content: "**Position Vector**: $\\mathbf{r}$ points from the origin to a point $(x,y,z)$.\n$$ \\mathbf{r} = x\\hat{x} + y\\hat{y} + z\\hat{z} $$\n\n**Source Point**: $\\mathbf{r}'$ (location of charge).\n**Field Point**: $\\mathbf{r}$ (where we measure E)."
            },
            {
              id: "s2",
              type: "theory",
              title: "The Separation Vector",
              content: "Electrodynamics deals with the distance *between* charges and field points. We define the **separation vector** $\\vec{\\rcurs}$:\n\n$$ \\vec{\\rcurs} = \\mathbf{r} - \\mathbf{r}' $$\n\nIts magnitude is $|\\mathbf{r} - \\mathbf{r}'|$, and its unit vector is $\\hat{\\rcurs} = \\frac{\\mathbf{r} - \\mathbf{r}'}{|\\mathbf{r} - \\mathbf{r}'|}$."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Vector Direction",
              content: "Which way does the separation vector $\\vec{\\rcurs}$ point?",
              options: [
                { id: "1", text: "From Origin to Field Point", isCorrect: false, explanation: "That is the position vector r." },
                { id: "2", text: "From Source Point to Field Point", isCorrect: true, explanation: "It points from the charge (r') to where we measure the field (r)." },
                { id: "3", text: "From Field Point to Origin", isCorrect: false, explanation: "" }
              ]
            }
          ]
        },
        {
          id: "lesson-transform",
          title: "Transformations",
          description: "Rotation of coordinates.",
          icon: "RefreshCw",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Coordinate Rotation",
              content: "When we rotate the coordinate axes, the components of a vector $A_x, A_y, A_z$ change to $A'_x, A'_y, A'_z$, but the physical arrow remains the same.\n\nThe transformation follows the rule:\n$$ A'_i = \\sum_{j=1}^3 R_{ij} A_j $$\n\nWhere $R$ is the rotation matrix."
            },
            {
              id: "m1",
              type: "match",
              title: "Tensor Ranks",
              content: "Classify based on transformation properties.",
              pairs: [
                { id: "p1", left: "Rank 0 Tensor", right: "Scalar (Invariant)" },
                { id: "p2", left: "Rank 1 Tensor", right: "Vector (1 index)" },
                { id: "p3", left: "Rank 2 Tensor", right: "Matrix (2 indices)" },
                { id: "p4", left: "Pseudovector", right: "Flips sign on inversion" }
              ]
            }
          ]
        }
      ]
    }
  ]
};