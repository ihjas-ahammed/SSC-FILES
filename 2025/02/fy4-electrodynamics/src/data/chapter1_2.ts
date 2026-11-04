
import { Section } from '../types';

export const SECTION_1_2: Section = {
  id: "section-1-2",
  title: "Section 1.2: Differential Calculus",
  description: "The Del operator, Gradient, Divergence, Curl, and Second Derivatives.",
  color: "duo-blue",
  units: [
    {
      id: "unit-121",
      title: "1.2.1 The Gradient",
      description: "Derivatives in 3D space and the Del operator on scalars.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-121-1",
          title: "Ordinary vs. Partial Derivatives",
          description: "Understanding derivatives in multiple dimensions.",
          icon: "FunctionSquare",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "If a function depends on multiple variables (x, y, z), what does an ordinary derivative $df/dx$ imply?",
              options: [
                { id: "A", text: "It treats y and z as constants.", isCorrect: false, explanation: "That is a partial derivative." },
                { id: "B", text: "It is ill-defined unless y and z are functions of x.", isCorrect: true, explanation: "An ordinary derivative requires a single independent variable." }
              ]
            },
            {
              id: "s1",
              type: "quiz",
              title: "Conceptual Check",
              content: "What symbol denotes a partial derivative?",
              options: [
                { id: "A", text: "$d$", isCorrect: false, explanation: "Used for ordinary differentials." },
                { id: "B", text: "$\\partial$", isCorrect: true, explanation: "The 'curly d' denotes partial differentiation." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Partial Derivatives",
              content: "In one dimension, $df/dx$ tells us how $f$ changes when $x$ changes. In three dimensions, $T(x,y,z)$ depends on three variables.\n\nWe use **partial derivatives** to describe change. $\\frac{\\partial T}{\\partial x}$ tells us how $T$ changes when $x$ varies, *holding y and z constant*.\n\nThe total change $dT$ is the sum of changes from all directions:\n$$dT = \\frac{\\partial T}{\\partial x} dx + \\frac{\\partial T}{\\partial y} dy + \\frac{\\partial T}{\\partial z} dz$$"
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Visualizing Change",
              content: "Notice how a function can change differently along different axes.",
              interactiveCanvasId: "gradient-interactive"
            },
            {
              id: "s4",
              type: "proof",
              title: "Theorem: Total Differential",
              content: "**Goal:** $dT = (\\nabla T) \\cdot d\\mathbf{l}$",
              proofSteps: [
                "Define the vector $\\nabla T = \\frac{\\partial T}{\\partial x}\\hat{x} + \\frac{\\partial T}{\\partial y}\\hat{y} + \\frac{\\partial T}{\\partial z}\\hat{z}$",
                "Define displacement $d\\mathbf{l} = dx\\hat{x} + dy\\hat{y} + dz\\hat{z}$",
                "Take the dot product: $(\\nabla T) \\cdot d\\mathbf{l} = \\frac{\\partial T}{\\partial x}dx + \\frac{\\partial T}{\\partial y}dy + \\frac{\\partial T}{\\partial z}dz$",
                "This matches the total differential formula."
              ]
            },
            {
              id: "s5",
              type: "numerical",
              title: "Calculation",
              content: "If $T = 2x + 3y$, what is the change $dT$ if we move by $dx=1$ and $dy=1$?",
              numericAnswer: 5,
              numericTolerance: 0.1
            },
            {
              id: "s6",
              type: "quiz",
              title: "Notation",
              content: "The term $\\nabla T$ is a:",
              options: [
                { id: "A", text: "Scalar", isCorrect: false, explanation: "" },
                { id: "B", text: "Vector", isCorrect: true, explanation: "It has three components." }
              ]
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The total differential $dT$ can be written as the ___ product of the gradient and the displacement.",
              blankAnswer: "dot"
            }
          ]
        },
        {
          id: "les-121-2",
          title: "Definition of Gradient",
          description: "The vector $\\nabla T$.",
          icon: "ArrowUpRight",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "The gradient operator $\\nabla$ acts on a:",
              options: [
                { id: "A", text: "Scalar function", isCorrect: true, explanation: "It turns a scalar field into a vector field." },
                { id: "B", text: "Vector function", isCorrect: false, explanation: "Acting on a vector is divergence or curl." }
              ]
            },
            {
              id: "s1",
              type: "quiz",
              title: "Conceptual Check",
              content: "Does the gradient depend on the choice of coordinates?",
              options: [
                { id: "A", text: "Yes", isCorrect: false, explanation: "" },
                { id: "B", text: "No", isCorrect: true, explanation: "It is a physical vector quantity, independent of the grid." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "The Gradient",
              content: "The **gradient** of a scalar function $T$ is defined as:\n\n$$\\nabla T \\equiv \\frac{\\partial T}{\\partial x}\\hat{x} + \\frac{\\partial T}{\\partial y}\\hat{y} + \\frac{\\partial T}{\\partial z}\\hat{z}$$\n\nIt is a vector quantity. The symbol $\\nabla$ is called 'del'.\n\n$dT = \\nabla T \\cdot d\\mathbf{l}$"
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Gradient Field",
              content: "Arrows point in the direction of greatest increase of the function.",
              interactiveCanvasId: "gradient-interactive"
            },
            {
              id: "s4",
              type: "proof",
              title: "Proof: Gradient as Slope",
              content: "**Goal:** Show $|\\nabla T|$ is the maximum slope.",
              proofSteps: [
                "From $dT = \\nabla T \\cdot d\\mathbf{l} = |\\nabla T||d\\mathbf{l}|\\cos\\theta$.",
                "For a fixed step size $|d\\mathbf{l}|$, the change $dT$ is maximized when $\\cos\\theta = 1$.",
                "This happens when we move parallel to $\\nabla T$.",
                "Thus $\\nabla T$ points in the direction of steepest ascent."
              ]
            },
            {
              id: "s5",
              type: "numerical",
              title: "Magnitude",
              content: "If $\\nabla T = 3\\hat{x} + 4\\hat{y}$, what is the maximum rate of change of T?",
              numericAnswer: 5,
              numericTolerance: 0.1
            },
            {
              id: "s6",
              type: "quiz",
              title: "Zero Gradient",
              content: "If $\\nabla T = 0$ at a point, that point is:",
              options: [
                { id: "A", text: "A stationary point (max, min, or saddle)", isCorrect: true, explanation: "Just like zero derivative in 1D." },
                { id: "B", text: "Undefined", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The gradient vector points in the direction of maximum ___ of the function.",
              blankAnswer: "increase"
            }
          ]
        },
        {
          id: "les-121-3",
          title: "Geometric Interpretation",
          description: "Steepest ascent.",
          icon: "Mountain",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "Imagine a hill. The gradient points:",
              options: [
                { id: "A", text: "Along the contour line (level)", isCorrect: false, explanation: "That would be zero change." },
                { id: "B", text: "Uphill", isCorrect: true, explanation: "Steepest ascent." }
              ]
            },
            {
              id: "s1",
              type: "quiz",
              title: "Conceptual Check",
              content: "What is the angle between the gradient and the contour lines (lines of constant T)?",
              options: [
                { id: "A", text: "90 degrees", isCorrect: true, explanation: "Steepest ascent is perpendicular to level ground." },
                { id: "B", text: "0 degrees", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Steepest Ascent",
              content: "The gradient $\\nabla T$ has specific geometric meanings:\n1. **Direction**: Points in the direction of maximum increase of the function $T$.\n2. **Magnitude**: Gives the slope (rate of increase) along this maximal direction.\n3. **Orthogonality**: Is perpendicular to surfaces of constant $T$ (equipotentials)."
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Climbing the Hill",
              content: "Visualize the red gradient vector pointing uphill, perpendicular to the ring contours.",
              interactiveCanvasId: "gradient-interactive"
            },
            {
              id: "s4",
              type: "proof",
              title: "Proof: Orthogonality",
              content: "**Goal:** $\\nabla T \\perp$ surface $T=c$.",
              proofSteps: [
                "Let $d\\mathbf{l}$ be a displacement *along* the surface of constant T.",
                "Then the change in T is $dT = 0$.",
                "But $dT = \\nabla T \\cdot d\\mathbf{l}$.",
                "Since the dot product is 0, $\\nabla T$ must be perpendicular to $d\\mathbf{l}$."
              ]
            },
            {
              id: "s5",
              type: "numerical",
              title: "Slope Calculation",
              content: "On a map, height increases 10m for every 2m North. What is the gradient magnitude?",
              numericAnswer: 5,
              numericTolerance: 0.1
            },
            {
              id: "s6",
              type: "quiz",
              title: "Descent",
              content: "In what direction does $-\\nabla T$ point?",
              options: [
                { id: "A", text: "Steepest Ascent", isCorrect: false, explanation: "" },
                { id: "B", text: "Steepest Descent", isCorrect: true, explanation: "Opposite to the gradient." }
              ]
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The gradient is always ___ to the level surfaces (contours) of the function.",
              blankAnswer: "perpendicular"
            }
          ]
        },
        {
          id: "les-121-4",
          title: "Example 1.3: Radial Gradient",
          description: "Gradient of r.",
          icon: "Target",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Example 1.3",
              content: "**Problem:** Find the gradient of $r = \\sqrt{x^2 + y^2 + z^2}$ (the magnitude of the position vector)."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "**Goal:** Calculate $\\nabla r$. \n\n1. $\\frac{\\partial r}{\\partial x} = \\frac{\\partial}{\\partial x}(x^2+y^2+z^2)^{1/2} = \\frac{1}{2}(...)^{-1/2}(2x) = \\frac{x}{r}$.\n2. By symmetry, $\\frac{\\partial r}{\\partial y} = \\frac{y}{r}$ and $\\frac{\\partial r}{\\partial z} = \\frac{z}{r}$.\n3. $\\nabla r = \\frac{x\\hat{x} + y\\hat{y} + z\\hat{z}}{r} = \\frac{\\mathbf{r}}{r} = \\hat{r}$.\n\nThe gradient of distance is the unit radial vector."
            },
            {
              id: "s2",
              type: "quiz",
              title: "Interpretation",
              content: "Does $\\nabla r = \\hat{r}$ make sense geometrically?",
              options: [
                { id: "A", text: "No, distance increases in all directions.", isCorrect: false, explanation: "" },
                { id: "B", text: "Yes, distance increases fastest radially outward with slope 1.", isCorrect: true, explanation: "If you move 1 unit away from origin, r increases by 1." }
              ]
            },
            {
              id: "s3",
              type: "quiz",
              title: "Magnitude",
              content: "What is $|\\nabla r|$?",
              options: [
                { id: "A", text: "1", isCorrect: true, explanation: "It is a unit vector." },
                { id: "B", text: "r", isCorrect: false, explanation: "" }
              ]
            }
          ]
        },
        {
          id: "les-121-5",
          title: "Problem 1.12: The Hill",
          description: "Topography example.",
          icon: "TrendingUp",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.12",
              content: "**Problem:** The height of a hill is $h(x,y) = 10(2xy - 3x^2 - 4y^2 - 18x + 28y + 12)$. Find the location $(x,y)$ of the top of the hill."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "**Goal:** Find where $\\nabla h = 0$. \n\n1. $\\frac{\\partial h}{\\partial x} = 10(2y - 6x - 18) = 0 \\implies y - 3x = 9$.\n2. $\\frac{\\partial h}{\\partial y} = 10(2x - 8y + 28) = 0 \\implies x - 4y = -14$.\n3. Solve the system: From (1), $y = 3x+9$. Plug into (2): $x - 4(3x+9) = -14$.\n4. $x - 12x - 36 = -14 \\implies -11x = 22 \\implies x = -2$.\n5. $y = 3(-2) + 9 = 3$.\n\nTop is at $(-2, 3)$."
            },
            {
              id: "s2",
              type: "numerical",
              title: "Height",
              content: "Using the solution $(-2, 3)$, what is the height $h$ of the hill?",
              numericAnswer: 720,
              numericTolerance: 1
            },
            {
              id: "s3",
              type: "quiz",
              title: "Steepest Slope",
              content: "To find the direction of steepest slope at any point, we would calculate:",
              options: [
                { id: "A", text: "The value of h", isCorrect: false, explanation: "" },
                { id: "B", text: "The vector $\\nabla h$", isCorrect: true, explanation: "" }
              ]
            }
          ]
        },
        {
          id: "les-121-6",
          title: "Problem 1.13: Separation Vector",
          description: "Gradient of separation distance.",
          icon: "Minus",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.13",
              content: "**Problem:** Let $\\cal{r}$ be the distance from a fixed source point $(x', y', z')$ to field point $(x, y, z)$. Calculate $\\nabla (\\cal{r}^2)$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "**Goal:** Find $\\nabla ({\\cal{r}}^2)$. \n\n1. ${\\cal{r}}^2 = (x-x')^2 + (y-y')^2 + (z-z')^2$.\n2. $\\frac{\\partial}{\\partial x} (x-x')^2 = 2(x-x')$.\n3. Similarly for y and z.\n4. $\\nabla({\\cal{r}}^2) = 2(x-x')\\hat{x} + 2(y-y')\\hat{y} + 2(z-z')\\hat{z}$.\n5. This is simply $2{\\cal{r}}$ (twice the separation vector)."
            },
            {
              id: "s2",
              type: "quiz",
              title: "Gradient of 1/r",
              content: "It can also be shown that $\\nabla(1/\\cal{r})$ equals:",
              options: [
                { id: "A", text: "$-\\hat{\\cal{r}} / {\\cal{r}}^2$", isCorrect: true, explanation: "This is crucial for the electric field of a point charge." },
                { id: "B", text: "$\\hat{\\cal{r}} / \\cal{r}$", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Source and Field",
              content: "Visualize the separation vector from source to field point.",
              interactiveCanvasId: "vector-addition-interactive"
            }
          ]
        }
      ]
    },
    {
      id: "unit-122",
      title: "1.2.2 The Del Operator",
      description: "Treating ∇ as a vector.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-122-1",
          title: "Definition of Del",
          description: "The vector differential operator.",
          icon: "Triangle",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "Is $\\nabla$ a vector?",
              options: [
                { id: "A", text: "Yes, exactly like velocity.", isCorrect: false, explanation: "It doesn't have a value until it acts on something." },
                { id: "B", text: "It is a vector operator.", isCorrect: true, explanation: "It mimics a vector but contains derivatives." }
              ]
            },
            {
              id: "s1",
              type: "quiz",
              title: "Conceptual Check",
              content: "How many components does $\\nabla$ have in 3D?",
              options: [
                { id: "A", text: "1", isCorrect: false, explanation: "" },
                { id: "B", text: "3", isCorrect: true, explanation: "d/dx, d/dy, d/dz." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "The Del Operator",
              content: "The gradient $\\nabla T$ looks like a vector $\\nabla$ 'multiplying' a scalar $T$. We define $\\nabla$ (del or nabla) as:\n\n$$\\nabla = \\hat{x}\\frac{\\partial}{\\partial x} + \\hat{y}\\frac{\\partial}{\\partial y} + \\hat{z}\\frac{\\partial}{\\partial z}$$\n\nIt is an instruction to differentiate. Standing alone, it means nothing. It must act on a function (scalar or vector) to the right."
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Operator Visualization",
              content: "Think of Del as a machine that takes a field and outputs a derivative field.",
              interactiveCanvasId: "gradient-interactive"
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The symbol $\\nabla$ is called the ___ operator.",
              blankAnswer: "del"
            }
          ]
        },
        {
          id: "les-122-2",
          title: "Del as a Vector",
          description: "Vector properties of operators.",
          icon: "LayoutList",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "Since $\\nabla$ is a vector, can we take its dot product with another vector?",
              options: [
                { id: "A", text: "Yes", isCorrect: true, explanation: "That is the Divergence." },
                { id: "B", text: "No", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Vector Properties",
              content: "Because $\\nabla$ transforms like a vector, it obeys the rules of vector algebra, *provided* you respect its operator nature (it must act on something).\n\nFor example, $\\nabla \\cdot \\mathbf{A}$ (Divergence) resembles $\\mathbf{A} \\cdot \\mathbf{B}$.\n$\\nabla \\times \\mathbf{A}$ (Curl) resembles $\\mathbf{A} \\times \\mathbf{B}$."
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "We can treat $\\nabla$ as a vector in algebraic manipulations as long as we remember it is an ___.",
              blankAnswer: "operator"
            }
          ]
        },
        {
          id: "les-122-3",
          title: "Three Ways to Act",
          description: "Grad, Div, Curl.",
          icon: "List",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "How many ways can a vector multiply?",
              options: [
                { id: "A", text: "One", isCorrect: false, explanation: "" },
                { id: "B", text: "Three (Scalar, Dot, Cross)", isCorrect: true, explanation: "Multiply by scalar, dot product, cross product." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Three Operations",
              content: "Just as a vector $\\mathbf{A}$ can multiply in three ways, $\\nabla$ acts in three ways:\n\n1. On a scalar $T$: $\\nabla T$ (**Gradient**)\n2. On a vector $\\mathbf{v}$ via dot product: $\\nabla \\cdot \\mathbf{v}$ (**Divergence**)\n3. On a vector $\\mathbf{v}$ via cross product: $\\nabla \\times \\mathbf{v}$ (**Curl**)"
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "The Trinity",
              content: "Visualize the three operations: Gradient (Slope), Divergence (Spread), Curl (Swirl).",
              interactiveCanvasId: "divergence-interactive"
            },
            {
              id: "s6",
              type: "quiz",
              title: "Result Types",
              content: "Divergence produces a ___.",
              options: [
                { id: "A", text: "Vector", isCorrect: false, explanation: "" },
                { id: "B", text: "Scalar", isCorrect: true, explanation: "It's a dot product." }
              ]
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The gradient acts on a scalar, while divergence and curl act on a ___.",
              blankAnswer: "vector"
            }
          ]
        },
        {
          id: "les-122-4",
          title: "Review of Del",
          description: "Quick check.",
          icon: "CheckCircle",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Knowledge Check",
              content: "What is $\\nabla f$?",
              options: [
                { id: "A", text: "Gradient", isCorrect: true, explanation: "" },
                { id: "B", text: "Divergence", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s1",
              type: "quiz",
              title: "Knowledge Check",
              content: "What is $\\nabla \\cdot \\mathbf{v}$?",
              options: [
                { id: "A", text: "Gradient", isCorrect: false, explanation: "" },
                { id: "B", text: "Divergence", isCorrect: true, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "quiz",
              title: "Knowledge Check",
              content: "What is $\\nabla \\times \\mathbf{v}$?",
              options: [
                { id: "A", text: "Curl", isCorrect: true, explanation: "" },
                { id: "B", text: "Laplacian", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The operator $\\nabla$ mimics a vector, but does not ___ with functions.",
              blankAnswer: "commute"
            }
          ]
        }
      ]
    },
    {
      id: "unit-123",
      title: "1.2.3 Divergence",
      description: "Spreading out of a vector field.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-123-1",
          title: "Definition of Divergence",
          description: "Mathematical formula.",
          icon: "Maximize",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "Divergence uses which vector product?",
              options: [
                { id: "A", text: "Dot product", isCorrect: true, explanation: "$\\nabla \\cdot \\mathbf{v}$" },
                { id: "B", text: "Cross product", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s1",
              type: "quiz",
              title: "Conceptual Check",
              content: "Is the result of divergence a vector?",
              options: [
                { id: "A", text: "Yes", isCorrect: false, explanation: "" },
                { id: "B", text: "No", isCorrect: true, explanation: "It is a scalar field." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Definition",
              content: "The **divergence** of a vector field $\\mathbf{v}$ is written $\\nabla \\cdot \\mathbf{v}$.\n\n$$\\nabla \\cdot \\mathbf{v} = \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z}$$\n\nIt sums the rates of change of components along their own axes."
            },
            {
              id: "s5",
              type: "numerical",
              title: "Simple Calc",
              content: "If $\\mathbf{v} = x\\hat{x} + y\\hat{y} + z\\hat{z}$, what is $\\nabla \\cdot \\mathbf{v}$?",
              numericAnswer: 3,
              numericTolerance: 0.1
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "Divergence is a scalar quantity derived from a ___ field.",
              blankAnswer: "vector"
            }
          ]
        },
        {
          id: "les-123-2",
          title: "Geometric Interpretation",
          description: "Sources and sinks.",
          icon: "Sun",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "A positive divergence indicates:",
              options: [
                { id: "A", text: "Spreading out (Source)", isCorrect: true, explanation: "Like a faucet." },
                { id: "B", text: "Converging in (Sink)", isCorrect: false, explanation: "That is negative divergence." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Spreading Out",
              content: "$\\nabla \\cdot \\mathbf{v}$ measures how much the vector $\\mathbf{v}$ spreads out (diverges) from the point.\n\n*   **Positive divergence:** Source (faucet).\n*   **Negative divergence:** Sink (drain).\n*   **Zero divergence:** Incompressible flow."
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Divergence Visualizer",
              content: "See vectors radiating from a source point.",
              interactiveCanvasId: "divergence-interactive"
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "A point of positive divergence acts like a ___ of the field.",
              blankAnswer: "source"
            }
          ]
        },
        {
          id: "les-123-3",
          title: "Example 1.4: Calculations",
          description: "Practice with fields.",
          icon: "Target",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Example 1.4",
              content: "**Problem:** Find the divergence of $\\mathbf{v}_a = x^2\\hat{x} + 3xz^2\\hat{y} - 2xz\\hat{z}$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "**Goal:** $\\partial_x v_x + \\partial_y v_y + \\partial_z v_z$. \n\n1. $\\partial_x (x^2) = 2x$.\n2. $\\partial_y (3xz^2) = 0$.\n3. $\\partial_z (-2xz) = -2x$.\n4. Sum: $2x + 0 - 2x = 0$.\n\nThis field has zero divergence everywhere!"
            },
            {
              id: "s2",
              type: "quiz",
              title: "Field Type",
              content: "A field with zero divergence is called:",
              options: [
                { id: "A", text: "Solenoidal", isCorrect: true, explanation: "Like a magnetic field." },
                { id: "B", text: "Conservative", isCorrect: false, explanation: "That means zero curl." }
              ]
            }
          ]
        },
        {
          id: "les-123-4",
          title: "Problem 1.15",
          description: "More practice.",
          icon: "CheckSquare",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.15",
              content: "**Problem:** Calculate the divergence of $\\mathbf{v} = xy\\hat{x} + 2yz\\hat{y} + 3zx\\hat{z}$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "1. $\\partial_x (xy) = y$.\n2. $\\partial_y (2yz) = 2z$.\n3. $\\partial_z (3zx) = 3x$.\n\n$\\nabla \\cdot \\mathbf{v} = y + 2z + 3x$."
            },
            {
              id: "s5",
              type: "numerical",
              title: "Evaluate",
              content: "What is the divergence at (1, 1, 1)?",
              numericAnswer: 6,
              numericTolerance: 0.1
            }
          ]
        },
        {
          id: "les-123-5",
          title: "Problem 1.16: The Paradox",
          description: "1/r^2 field.",
          icon: "AlertTriangle",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.16",
              content: "**Problem:** Calculate the divergence of $\\mathbf{v} = \\frac{\\hat{r}}{r^2} = \\frac{1}{r^2} \\frac{\\mathbf{r}}{r} = \\frac{x\\hat{x}+y\\hat{y}+z\\hat{z}}{(x^2+y^2+z^2)^{3/2}}$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "**Goal:** Differentiate directly. \n\n$\\frac{\\partial}{\\partial x} (x (x^2+y^2+z^2)^{-3/2}) = (..)^{-3/2} + x(-3/2)(..)^{-5/2}(2x)$ \n$= r^{-3} - 3x^2 r^{-5}$.\n\nSumming x, y, z terms: $3r^{-3} - 3(x^2+y^2+z^2)r^{-5} = 3r^{-3} - 3r^2 r^{-5} = 0$."
            },
            {
              id: "s2",
              type: "theory",
              title: "The Paradox",
              content: "We calculated that the divergence is zero. But geometrically, this field spreads out purely radially! How can it have zero divergence?\n\nAnswer: The calculation fails at $r=0$ where it blows up. The divergence is actually a **Dirac Delta function** centered at the origin."
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The divergence of $\\hat{r}/r^2$ is zero everywhere except at the ___.",
              blankAnswer: "origin"
            }
          ]
        },
        {
          id: "les-123-6",
          title: "Divergence of r",
          description: "Simple radial field.",
          icon: "Circle",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.17 variant",
              content: "**Problem:** Find the divergence of the position vector $\\mathbf{r} = x\\hat{x} + y\\hat{y} + z\\hat{z}$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "1. $\\partial_x (x) = 1$.\n2. $\\partial_y (y) = 1$.\n3. $\\partial_z (z) = 1$.\n\nSum: $1+1+1 = 3$."
            },
            {
              id: "s2",
              type: "numerical",
              title: "Result",
              content: "What is the divergence of r?",
              numericAnswer: 3,
              numericTolerance: 0.1
            }
          ]
        },
        {
          id: "les-123-7",
          title: "Summary: Divergence",
          description: "Review of section 1.2.3.",
          icon: "BookOpen",
          slides: [
            {
              id: "s0",
              type: "theory",
              title: "Summary",
              content: "1. **Divergence** ($\\nabla \\cdot \\mathbf{v}$) is a scalar derivative.\n2. It measures the 'spreading out' of a vector field.\n3. Calculated as sum of partials: $\\partial_x v_x + \\partial_y v_y + \\partial_z v_z$.\n4. Important for Gauss's Law."
            }
          ]
        }
      ]
    },
    {
      id: "unit-124",
      title: "1.2.4 The Curl",
      description: "Rotation of a vector field.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-124-1",
          title: "Definition of Curl",
          description: "Mathematical formula.",
          icon: "RotateCw",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "Curl uses which vector product?",
              options: [
                { id: "A", text: "Dot product", isCorrect: false, explanation: "" },
                { id: "B", text: "Cross product", isCorrect: true, explanation: "$\\nabla \\times \\mathbf{v}$" }
              ]
            },
            {
              id: "s1",
              type: "quiz",
              title: "Conceptual Check",
              content: "Is the result of curl a vector?",
              options: [
                { id: "A", text: "Yes", isCorrect: true, explanation: "It has direction (axis of rotation)." },
                { id: "B", text: "No", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Definition",
              content: "The **curl** of a vector field $\\mathbf{v}$ is written $\\nabla \\times \\mathbf{v}$.\n\n$$\\nabla \\times \\mathbf{v} = \\begin{vmatrix} \\hat{x} & \\hat{y} & \\hat{z} \\\\ \\partial/\\partial x & \\partial/\\partial y & \\partial/\\partial z \\\\ v_x & v_y & v_z \\end{vmatrix}$$\n\nx-component: $\\frac{\\partial v_z}{\\partial y} - \\frac{\\partial v_y}{\\partial z}$"
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The curl of $\\mathbf{v}$ is a measure of how much the field ___.",
              blankAnswer: "swirls"
            }
          ]
        },
        {
          id: "les-124-2",
          title: "Geometric Interpretation",
          description: "Swirls and eddies.",
          icon: "Wind",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "If you place a paddlewheel in a field with non-zero curl, it will:",
              options: [
                { id: "A", text: "Flow downstream", isCorrect: false, explanation: "" },
                { id: "B", text: "Rotate", isCorrect: true, explanation: "Curl measures rotation." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Swirl",
              content: "$\\nabla \\times \\mathbf{v}$ measures the rotation or 'swirl' of the field.\n\n*   **Non-zero curl:** Vortex, whirlpool.\n*   **Zero curl:** Irrotational (like electrostatic fields).\n\nThe direction of the curl vector is the axis of rotation (Right Hand Rule)."
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Curl Visualizer",
              content: "Observe the rotational nature of the field.",
              interactiveCanvasId: "curl-interactive"
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "A field with zero curl is called ___.",
              blankAnswer: "irrotational"
            }
          ]
        },
        {
          id: "les-124-3",
          title: "Example 1.5: Calculations",
          description: "Practice with curl.",
          icon: "Target",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Example 1.5",
              content: "**Problem:** Find the curl of $\\mathbf{v}_a = -y\\hat{x} + x\\hat{y}$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "**Goal:** Calculate determinant. \n\n1. x-comp: $\\partial_y(0) - \\partial_z(x) = 0$.\n2. y-comp: $\\partial_z(-y) - \\partial_x(0) = 0$.\n3. z-comp: $\\partial_x(x) - \\partial_y(-y) = 1 - (-1) = 2$.\n\n$\\nabla \\times \\mathbf{v}_a = 2\\hat{z}$."
            },
            {
              id: "s2",
              type: "numerical",
              title: "Magnitude",
              content: "What is the magnitude of the curl?",
              numericAnswer: 2,
              numericTolerance: 0.1
            },
            {
              id: "s3",
              type: "theory",
              title: "Interpretation",
              content: "The field $-y\\hat{x} + x\\hat{y}$ represents rigid body rotation around the z-axis. The curl is constant ($2\\hat{z}$), indicating uniform rotation everywhere."
            }
          ]
        },
        {
          id: "les-124-4",
          title: "Problem 1.18",
          description: "More practice.",
          icon: "CheckSquare",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.18",
              content: "**Problem:** Calculate the curl of $\\mathbf{v} = x^2\\hat{x} + 3xz^2\\hat{y} - 2xz\\hat{z}$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "1. x-comp: $\\partial_y(-2xz) - \\partial_z(3xz^2) = 0 - 6xz = -6xz$.\n2. y-comp: $\\partial_z(x^2) - \\partial_x(-2xz) = 0 - (-2z) = 2z$.\n3. z-comp: $\\partial_x(3xz^2) - \\partial_y(x^2) = 3z^2 - 0 = 3z^2$.\n\nResult: $-6xz\\hat{x} + 2z\\hat{y} + 3z^2\\hat{z}$."
            },
            {
              id: "s5",
              type: "numerical",
              title: "Evaluate",
              content: "What is the z-component at z=2?",
              numericAnswer: 12,
              numericTolerance: 0.1
            }
          ]
        },
        {
          id: "les-124-5",
          title: "Problem 1.19: Circular Field",
          description: "Visualizing curl.",
          icon: "Eye",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.19",
              content: "**Problem:** Construct a vector function that has zero divergence and zero curl everywhere (besides a constant)."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "Try $\\mathbf{v} = y\\hat{x} + x\\hat{y}$.\n\nDivergence: $\\partial_x(y) + \\partial_y(x) = 0$.\nCurl (z): $\\partial_x(x) - \\partial_y(y) = 1 - 1 = 0$.\n\nSo $\\mathbf{v} = y\\hat{x} + x\\hat{y}$ works!"
            }
          ]
        },
        {
          id: "les-124-6",
          title: "Geometric Rules",
          description: "Curl direction.",
          icon: "Compass",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Rule of Thumb",
              content: "If a field points in $\\hat{y}$ but depends on $x$, does it have curl?",
              options: [
                { id: "A", text: "Yes", isCorrect: true, explanation: "$\\partial v_y / \\partial x$ contributes to the z-component of curl." },
                { id: "B", text: "No", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Shear is Curl",
              content: "Curl doesn't just mean loops. A 'shearing' flow (like water flowing faster in the middle of a river than at the banks) also has curl, because a paddlewheel placed there would rotate due to the speed difference on its paddles."
            }
          ]
        },
        {
          id: "les-124-7",
          title: "Summary: Curl",
          description: "Review of section 1.2.4.",
          icon: "BookOpen",
          slides: [
            {
              id: "s0",
              type: "theory",
              title: "Summary",
              content: "1. **Curl** ($\\nabla \\times \\mathbf{v}$) is a vector derivative.\n2. It measures the 'rotation' or 'shear' of a vector field.\n3. Calculated using the determinant method.\n4. Important for Stokes' Theorem."
            }
          ]
        }
      ]
    },
    {
      id: "unit-125",
      title: "1.2.5 Second Derivatives",
      description: "Laplacian and Identities.",
      color: "duo-blue",
      lessons: [
        {
          id: "les-125-1",
          title: "Constructing Second Derivatives",
          description: "Possibilities with Del.",
          icon: "Layers",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "Can you take the gradient of a vector?",
              options: [
                { id: "A", text: "Yes", isCorrect: false, explanation: "Not in standard vector calc (that's a tensor)." },
                { id: "B", text: "No", isCorrect: true, explanation: "Gradient acts on scalars." }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Five Possibilities",
              content: "By applying $\\nabla$ twice, we can construct:\n1. Divergence of Gradient ($\\nabla \\cdot \\nabla T$)\n2. Curl of Gradient ($\\nabla \\times \\nabla T$)\n3. Gradient of Divergence ($\\nabla (\\nabla \\cdot \\mathbf{v})$)\n4. Divergence of Curl ($\\nabla \\cdot (\\nabla \\times \\mathbf{v})$)\n5. Curl of Curl ($\\nabla \\times (\\nabla \\times \\mathbf{v})$)"
            }
          ]
        },
        {
          id: "les-125-2",
          title: "The Laplacian",
          description: "Div of Grad.",
          icon: "Activity",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "The divergence of a gradient is called:",
              options: [
                { id: "A", text: "The Hessian", isCorrect: false, explanation: "" },
                { id: "B", text: "The Laplacian", isCorrect: true, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "The Laplacian",
              content: "$$\\nabla \\cdot (\\nabla T) = \\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} + \\frac{\\partial^2 T}{\\partial z^2}$$\n\nThis is denoted $\\nabla^2 T$. It is a scalar operator.\nIt is fundamental to physics (wave equation, heat equation, Poisson's equation)."
            },
            {
              id: "s3",
              type: "interactive_canvas",
              title: "Visualizing Laplacian",
              content: "It measures the difference between the value at a point and the average of its surroundings (curvature).",
              interactiveCanvasId: "laplacian-interactive"
            },
            {
              id: "s7",
              type: "fill_in_blank",
              title: "Summary",
              content: "The Laplacian $\\nabla^2$ is the divergence of the ___.",
              blankAnswer: "gradient"
            }
          ]
        },
        {
          id: "les-125-3",
          title: "Identity 1: Curl of Grad",
          description: "Always zero.",
          icon: "XCircle",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "What is $\\nabla \\times (\\nabla T)$?",
              options: [
                { id: "A", text: "Zero", isCorrect: true, explanation: "Gradients have no curl." },
                { id: "B", text: "$\\nabla^2 T$", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Curl of Gradient",
              content: "$$\\nabla \\times (\\nabla T) = 0$$\n\nProof concept: Cross derivatives are equal ($\\partial_{xy} = \\partial_{yx}$). The terms in the curl cancel out exactly.\n\n**Physics implication:** Conservative fields (like electrostatic E) can be written as gradients of potentials because they have zero curl."
            },
            {
              id: "s4",
              type: "proof",
              title: "Proof: z-component",
              content: "**Goal:** Show $(\\nabla \\times \\nabla T)_z = 0$",
              proofSteps: [
                "z-comp of curl is $\\partial_x v_y - \\partial_y v_x$.",
                "Here $\\mathbf{v} = \\nabla T$, so $v_y = \\partial_y T$ and $v_x = \\partial_x T$.",
                "Substitute: $\\partial_x (\\partial_y T) - \\partial_y (\\partial_x T)$.",
                "$\\frac{\\partial^2 T}{\\partial x \\partial y} - \\frac{\\partial^2 T}{\\partial y \\partial x} = 0$. (Equality of mixed partials)."
              ]
            }
          ]
        },
        {
          id: "les-125-4",
          title: "Identity 2: Div of Curl",
          description: "Always zero.",
          icon: "XCircle",
          slides: [
            {
              id: "s0",
              type: "quiz",
              title: "Conceptual Check",
              content: "What is $\\nabla \\cdot (\\nabla \\times \\mathbf{v})$?",
              options: [
                { id: "A", text: "Zero", isCorrect: true, explanation: "Divergence of a curl is zero." },
                { id: "B", text: "$\\nabla^2 v$", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Divergence of Curl",
              content: "$$\\nabla \\cdot (\\nabla \\times \\mathbf{v}) = 0$$\n\n**Physics implication:** Magnetic fields (B) have zero divergence, so they can be written as the curl of a vector potential (A). Solenoidal fields are curls."
            },
            {
              id: "s4",
              type: "proof",
              title: "Proof",
              content: "**Goal:** Show terms cancel.",
              proofSteps: [
                "Expand $\\nabla \\cdot (\\nabla \\times \\mathbf{v})$.",
                "Term 1: $\\partial_x (\\partial_y v_z - \\partial_z v_y) = \\partial_{xy} v_z - \\partial_{xz} v_y$.",
                "Do this for y and z.",
                "All terms cancel in pairs (e.g. $+\\partial_{xy} v_z$ cancels with $-\\partial_{yx} v_z$)."
              ]
            }
          ]
        },
        {
          id: "les-125-5",
          title: "Problem 1.25: Product Rules",
          description: "Vector calculus rules.",
          icon: "CheckSquare",
          slides: [
            {
              id: "s2",
              type: "theory",
              title: "Product Rules",
              content: "Like $d(fg)/dx$, $\\nabla$ has product rules. But since we have scalars and vectors, there are 6 rules.\n\nExample: $\\nabla \\cdot (f\\mathbf{A}) = f(\\nabla \\cdot \\mathbf{A}) + \\mathbf{A} \\cdot (\\nabla f)$.\n\n(It acts on the first, plus acting on the second)."
            },
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.25",
              content: "**Problem:** Calculate $\\nabla \\cdot (x^2 \\hat{x})$. Use the product rule with $f=x$ and $\\mathbf{A}=x\\hat{x}$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "$f=x$, $\\mathbf{A}=x\\hat{x}$.\n1. $\\nabla \\cdot \\mathbf{A} = 1$.\n2. $\\nabla f = \\hat{x}$.\n3. Formula: $x(1) + (x\\hat{x}) \\cdot (\\hat{x}) = x + x = 2x$.\n\nCheck direct: $\\nabla \\cdot (x^2\\hat{x}) = \\partial_x(x^2) = 2x$. Matches!"
            }
          ]
        },
        {
          id: "les-125-6",
          title: "Problem 1.26: Laplacian Calc",
          description: "Computing $\\nabla^2$.",
          icon: "Target",
          slides: [
            {
              id: "s0",
              type: "example_q",
              title: "Problem 1.26",
              content: "**Problem:** Calculate the Laplacian of $T = x^2 + 2xy + 3z + 4$."
            },
            {
              id: "s1",
              type: "solution",
              title: "Solution",
              content: "1. $\\partial_x^2 (x^2 + 2xy) = \\partial_x (2x + 2y) = 2$.\n2. $\\partial_y^2 (2xy) = 0$.\n3. $\\partial_z^2 (3z) = 0$.\n\n$\\nabla^2 T = 2$."
            },
            {
              id: "s5",
              type: "numerical",
              title: "Evaluate",
              content: "What is the Laplacian?",
              numericAnswer: 2,
              numericTolerance: 0.1
            }
          ]
        },
        {
          id: "les-125-7",
          title: "Product Rules Theory",
          description: "Reference guide.",
          icon: "List",
          slides: [
            {
              id: "s2",
              type: "theory",
              title: "Key Rules",
              content: "1. $\\nabla(fg) = f\\nabla g + g\\nabla f$\n2. $\\nabla(\\mathbf{A}\\cdot\\mathbf{B}) = ...$ (complex)\n3. $\\nabla\\cdot(f\\mathbf{A}) = f(\\nabla\\cdot\\mathbf{A}) + \\mathbf{A}\\cdot(\\nabla f)$\n4. $\\nabla\\cdot(\\mathbf{A}\\times\\mathbf{B}) = \\mathbf{B}\\cdot(\\nabla\\times\\mathbf{A}) - \\mathbf{A}\\cdot(\\nabla\\times\\mathbf{B})$\n5. $\\nabla\\times(f\\mathbf{A}) = f(\\nabla\\times\\mathbf{A}) - \\mathbf{A}\\times(\\nabla f)$"
            }
          ]
        },
        {
          id: "les-125-8",
          title: "Quotient Rules",
          description: "Div/Grad/Curl of f/g.",
          icon: "Divide",
          slides: [
            {
              id: "s2",
              type: "theory",
              title: "Quotients",
              content: "Just like $(f/g)'$, we have:\n\n$\\nabla(f/g) = \\frac{g\\nabla f - f\\nabla g}{g^2}$\n\n$\\nabla \\cdot (\\mathbf{A}/g) = \\frac{g(\\nabla \\cdot \\mathbf{A}) - \\mathbf{A} \\cdot (\\nabla g)}{g^2}$"
            }
          ]
        },
        {
          id: "les-125-9",
          title: "Summary: 2nd Derivatives",
          description: "Review of section 1.2.5.",
          icon: "BookOpen",
          slides: [
            {
              id: "s0",
              type: "theory",
              title: "Summary",
              content: "1. **Laplacian** $\\nabla^2 T$ is the most important second derivative.\n2. **Identities:** Curl(Grad)=0 and Div(Curl)=0.\n3. These identities classify vector fields into conservative (irrotational) and solenoidal types."
            }
          ]
        }
      ]
    },
    {
      id: "unit-section-summary",
      title: "Section 1.2 Summary",
      description: "Review of Differential Calculus.",
      color: "duo-green",
      lessons: [
        {
          id: "les-sec-sum-1",
          title: "Gradient Review",
          description: "Derivative of scalar.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Gradient", content: "$\\nabla T$: Vector. Points uphill. Magnitude is slope. $\\nabla T \\perp$ contours." }
          ]
        },
        {
          id: "les-sec-sum-2",
          title: "Divergence Review",
          description: "Spreading.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Divergence", content: "$\\nabla \\cdot \\mathbf{v}$: Scalar. Measures source/sink. $\\partial_x v_x + ...$" }
          ]
        },
        {
          id: "les-sec-sum-3",
          title: "Curl Review",
          description: "Rotation.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Curl", content: "$\\nabla \\times \\mathbf{v}$: Vector. Measures swirl. Computed via determinant." }
          ]
        },
        {
          id: "les-sec-sum-4",
          title: "Second Derivatives Review",
          description: "Laplacian and Identities.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "2nd Derivatives", content: "$\\nabla^2 T$: Laplacian (scalar).\n$\\nabla \\times (\\nabla T) = 0$.\n$\\nabla \\cdot (\\nabla \\times \\mathbf{v}) = 0$." }
          ]
        },
        {
          id: "les-sec-sum-5",
          title: "Del Operator Review",
          description: "The machine.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Nabla", content: "$\\nabla$ is a vector operator. It obeys vector algebra rules but acts as a derivative (product rule applies)." }
          ]
        }
      ]
    }
  ]
};