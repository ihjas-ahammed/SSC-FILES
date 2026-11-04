import { Unit } from '../types';

export const UNIT_3_3_2: Unit = {
  id: "unit-3-3-2",
  title: "Orthogonal Basis Decomposition",
  description: "Example 2: Detailed calculation with a given basis.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-2-ex2", title: "Example 2", description: "Projection onto W", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** The set $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ is an orthogonal basis for $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$. Write $\\mathbf{y}$ as the sum of a vector in $W$ and a vector orthogonal to $W$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 2 \\\\ 5 \\\\ -1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{y} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate $\\hat{\\mathbf{y}}$ term by term.**", interactiveSteps: [
           { stepText: "We need $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y}\\cdot\\mathbf{u}_1}{\\|\\mathbf{u}_1\\|^2}\\mathbf{u}_1 + \\frac{\\mathbf{y}\\cdot\\mathbf{u}_2}{\\|\\mathbf{u}_2\\|^2}\\mathbf{u}_2$." },
           { prompt: "Calculate the first coefficient $\\frac{\\mathbf{y}\\cdot\\mathbf{u}_1}{\\|\\mathbf{u}_1\\|^2}$.", options: [{id:"A", text:"$9/30 = 3/10$", isCorrect:true, explanation:"$(2+10-3) / (4+25+1) = 9/30$."}, {id:"B", text:"$15/30 = 1/2$", isCorrect:false, explanation:"Check the dot product."}], stepText: "Coeff 1 is $0.3$." },
           { prompt: "Calculate the second coefficient $\\frac{\\mathbf{y}\\cdot\\mathbf{u}_2}{\\|\\mathbf{u}_2\\|^2}$.", options: [{id:"A", text:"$3/6 = 1/2$", isCorrect:true, explanation:"$(-2+2+3) / (4+1+1) = 3/6$."}, {id:"B", text:"$1/6$", isCorrect:false, explanation:""}], stepText: "Coeff 2 is $0.5$." },
           { stepText: "$\\hat{\\mathbf{y}} = 0.3 \\begin{bmatrix} 2 \\\\ 5 \\\\ -1 \\end{bmatrix} + 0.5 \\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0.6 \\\\ 1.5 \\\\ -0.3 \\end{bmatrix} + \\begin{bmatrix} -1 \\\\ 0.5 \\\\ 0.5 \\end{bmatrix} = \\begin{bmatrix} -0.4 \\\\ 2.0 \\\\ 0.2 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} - \\begin{bmatrix} -0.4 \\\\ 2.0 \\\\ 0.2 \\end{bmatrix} = \\begin{bmatrix} 1.4 \\\\ 0 \\\\ 2.8 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "quiz", title: "Checking Orthogonality", content: "Is $\\mathbf{z} \\in W^\\perp$?", options: [{id:"A", text:"Yes, because $\\mathbf{z} \\cdot \\mathbf{u}_1 = 0$ and $\\mathbf{z} \\cdot \\mathbf{u}_2 = 0$.", isCorrect:true, explanation:"Since it is orthogonal to the basis vectors, it is orthogonal to the entire subspace W."}, {id:"B", text:"No, because it is not the zero vector.", isCorrect:false, explanation:"Non-zero vectors can be in the orthogonal complement."}] },
        { id: "s3", type: "quiz", title: "Decomposition", content: "Is the decomposition $\\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z}$ unique?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Theorem 8 guarantees uniqueness."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s4", type: "numerical", title: "Value", content: "What is the second component of $\\hat{\\mathbf{y}}$?", numericAnswer: 2, numericTolerance: 0 }
      ]
    }
  ]
};