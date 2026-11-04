import { Unit } from '../types';

export const UNIT_3_1_3: Unit = {
  id: "unit-3-1-3",
  title: "Unit Vectors & Distance",
  description: "Normalization and Distance definition.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-3-unit", title: "Unit Vectors", description: "Normalization", icon: "ArrowUpCircle",
      slides: [
        { id: "s0", type: "theory", title: "Definition", content: "A vector whose length is 1 is called a **unit vector**.\n\nIf $\\mathbf{v} \\neq \\mathbf{0}$, then the vector\n$$ \\mathbf{u} = \\frac{1}{\\|\\mathbf{v}\\|} \\mathbf{v} $$\nis a unit vector in the same direction as $\\mathbf{v}$. This process is called **normalizing** $\\mathbf{v}$." },
        { id: "s1", type: "quiz", title: "Concept Check", content: "What is the length of $\\mathbf{u} = \\frac{1}{\\|\\mathbf{v}\\|} \\mathbf{v}$?", options: [{id:"A", text:"1", isCorrect:true, explanation:"$\\|\\frac{1}{\\|\\mathbf{v}\\|}\\mathbf{v}\\| = |\\frac{1}{\\|\\mathbf{v}\\|}| \\|\\mathbf{v}\\| = \\frac{1}{\\|\\mathbf{v}\\|} \\|\\mathbf{v}\\| = 1$."}, {id:"B", text:"$\\|\\mathbf{v}\\|$", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-1-3-ex2", title: "Example 2: Normalizing", description: "Computation", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** Let $\\mathbf{v} = \\begin{bmatrix} 1 \\\\ -2 \\\\ 2 \\\\ 0 \\end{bmatrix}$. Find a unit vector $\\mathbf{u}$ in the same direction as $\\mathbf{v}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute norm and scale.**", interactiveSteps: [
           { stepText: "Calculate $\\|\\mathbf{v}\\|^2 = 1^2 + (-2)^2 + 2^2 + 0^2$." },
           { prompt: "What is the sum?", options: [{id:"A", text:"9", isCorrect:true, explanation:"$1 + 4 + 4 + 0 = 9$."}, {id:"B", text:"5", isCorrect:false, explanation:""}], stepText: "$\\|\\mathbf{v}\\| = \\sqrt{9} = 3$." },
           { stepText: "Divide $\\mathbf{v}$ by 3: $\\mathbf{u} = \\frac{1}{3} \\begin{bmatrix} 1 \\\\ -2 \\\\ 2 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1/3 \\\\ -2/3 \\\\ 2/3 \\\\ 0 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "numerical", title: "Verification", content: "What is the length of the resulting vector $\\mathbf{u}$?", numericAnswer: 1, numericTolerance: 0.01 }
      ]
    },
    {
      id: "les-3-1-3-ex3", title: "Example 3: Basis", description: "Spanning set", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Let $W$ be the subspace of $\\mathbb{R}^2$ spanned by $\\mathbf{x} = \\begin{bmatrix} 2/3 \\\\ 1 \\end{bmatrix}$. Find a unit vector $\\mathbf{z}$ that is a basis for $W$." },
        { id: "s1", type: "solution", title: "Solution", content: "First, scale $\\mathbf{x}$ to integers to make math easy (optional but helpful). Let $\\mathbf{y} = 3\\mathbf{x} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$.\n\nNow normalize $\\mathbf{y}$. $\\|\\mathbf{y}\\| = \\sqrt{2^2 + 3^2} = \\sqrt{13}$.\n\nUnit vector $\\mathbf{z} = \\frac{1}{\\sqrt{13}} \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 2/\\sqrt{13} \\\\ 3/\\sqrt{13} \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-1-3-dist", title: "Definition: Distance", description: "Metric in Rn", icon: "Map",
      slides: [
        { id: "s0", type: "theory", title: "Distance Definition", content: "For $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$, the **distance between u and v**, written as dist($\\mathbf{u}, \\mathbf{v}$), is the length of the vector $\\mathbf{u} - \\mathbf{v}$.\n\n$$ \\text{dist}(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\| $$" },
        { id: "s1", type: "interactive_canvas", title: "Visualizing Distance", content: "The distance corresponds to the length of the vector connecting the tips of $\\mathbf{u}$ and $\\mathbf{v}$.", interactiveCanvasId: "dot-product-interactive" }
      ]
    }
  ]
};