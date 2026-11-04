import { Unit } from '../types';

export const UNIT_3_2_3: Unit = {
  id: "unit-3-2-3",
  title: "Orthogonal Projections",
  description: "Example 3: Decomposing a vector into orthogonal components.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-3-e3", title: "Example 3: Projection Formula", description: "y hat and z", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "theory", title: "Orthogonal Projections", content: "Given a nonzero vector $\\mathbf{u}$, consider the problem of decomposing a vector $\\mathbf{y}$ into the sum of two vectors:\n$$ \\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z} $$\nwhere $\\hat{\\mathbf{y}}$ is a scalar multiple of $\\mathbf{u}$, and $\\mathbf{z}$ is orthogonal to $\\mathbf{u}$.\n\nThe vector $\\hat{\\mathbf{y}}$ is called the **orthogonal projection of y onto u**, given by:\n$$ \\hat{\\mathbf{y}} = \\text{proj}_L \\mathbf{y} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}} \\mathbf{u} $$\nwhere $L = \\text{Span}\\{\\mathbf{u}\\}$." },
        { id: "s1", type: "example_q", title: "Example 3", content: "**Problem:** Let $\\mathbf{y} = \\begin{bmatrix} 7 \\\\ 6 \\end{bmatrix}$ and $\\mathbf{u} = \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix}$.\n\nFind the orthogonal projection of $\\mathbf{y}$ onto $\\mathbf{u}$. Then write $\\mathbf{y}$ as the sum of two orthogonal vectors, one in Span$\\{\\mathbf{u}\\}$ and one orthogonal to $\\mathbf{u}$." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\hat{\\mathbf{y}}$ and $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$.**", interactiveSteps: [
           { prompt: "Compute the numerator $\\mathbf{y} \\cdot \\mathbf{u}$.", options: [{id:"A", text:"40", isCorrect:true, explanation:"$7(4) + 6(2) = 28 + 12 = 40$."}, {id:"B", text:"26", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} \\cdot \\mathbf{u} = 40$." },
           { prompt: "Compute the denominator $\\mathbf{u} \\cdot \\mathbf{u}$.", options: [{id:"A", text:"20", isCorrect:true, explanation:"$4(4) + 2(2) = 16 + 4 = 20$."}, {id:"B", text:"10", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u} \\cdot \\mathbf{u} = 20$." },
           { stepText: "Calculate the projection: $\\hat{\\mathbf{y}} = \\frac{40}{20} \\mathbf{u} = 2 \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 4 \\end{bmatrix}$." },
           { stepText: "Find the orthogonal component $\\mathbf{z}$: $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 7 \\\\ 6 \\end{bmatrix} - \\begin{bmatrix} 8 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "The decomposition is $\\mathbf{y} = \\begin{bmatrix} 8 \\\\ 4 \\end{bmatrix} + \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$." }
        ]},
        { id: "s3", type: "quiz", title: "Verification", content: "How can you verify that your calculation for $\\mathbf{z}$ is correct?", options: [{id:"A", text:"Check that $\\mathbf{z} \\cdot \\mathbf{u} = 0$.", isCorrect:true, explanation:"$[-1, 2] \\cdot [4, 2] = -4 + 4 = 0$. Perfect!"}, {id:"B", text:"Check that $\\mathbf{z}$ is a multiple of $\\mathbf{y}$.", isCorrect:false, explanation:"No, it should be orthogonal to u."}] }
      ]
    }
  ]
};