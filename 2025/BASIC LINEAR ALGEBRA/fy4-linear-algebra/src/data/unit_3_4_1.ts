import { Unit } from '../types';

export const UNIT_3_4_1: Unit = {
  id: "unit-3-4-1",
  title: "Simple Gram-Schmidt",
  description: "Example 1: Orthogonalizing a basis of two vectors.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-1-ex1", title: "Example 1: Two Vectors", description: "The basic step", icon: "Split",
      slides: [
        { id: "s0", type: "theory", title: "The Goal", content: "Given a basis $\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_p\\}$ for a subspace $W$, we want to produce an **orthogonal** basis $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ for $W$.\n\nThe Gram-Schmidt process constructs these vectors step by step." },
        { id: "s1", type: "example_q", title: "Example 1", content: "**Problem:** Let $W = \\text{Span}\\{\\mathbf{x}_1, \\mathbf{x}_2\\}$ where $\\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{x}_2 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix}$. Construct an orthogonal basis $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Step 1: Pick the first vector.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{v}_1 = \\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "**Step 2:** Find a vector $\\mathbf{v}_2$ orthogonal to $\\mathbf{v}_1$ that spans the same plane." },
           { stepText: "We define $\\mathbf{v}_2$ as the component of $\\mathbf{x}_2$ orthogonal to $\\mathbf{x}_1$: \n$$ \\mathbf{v}_2 = \\mathbf{x}_2 - \\text{proj}_{\\mathbf{v}_1} \\mathbf{x}_2 $$" },
           { prompt: "Calculate the projection $\\hat{\\mathbf{x}}_2 = \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1$.", options: [{id:"A", text:"$\\frac{15}{45}\\mathbf{v}_1$", isCorrect:true, explanation:"$3(1)+6(2)+0=15$, $9+36=45$."}, {id:"B", text:"$\\frac{10}{45}\\mathbf{v}_1$", isCorrect:false, explanation:""}], stepText: "Scalar is $1/3$. So $\\hat{\\mathbf{x}}_2 = \\frac{1}{3} \\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "Compute $\\mathbf{v}_2 = \\mathbf{x}_2 - \\hat{\\mathbf{x}}_2 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ 2 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "The orthogonal basis is $\\left\\{ \\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 2 \\end{bmatrix} \\right\\}$." }
        ]},
        { id: "s3", type: "quiz", title: "Verify", content: "Are $\\mathbf{v}_1$ and $\\mathbf{v}_2$ orthogonal?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"$3(0)+6(0)+0(2) = 0$."}, {id:"B", text:"No", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};