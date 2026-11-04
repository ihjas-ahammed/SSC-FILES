import { Unit } from '../types';

export const UNIT_3_3_6: Unit = {
  id: "unit-3-3-6",
  title: "Decomposition with Orthogonal Sets",
  description: "Exercises 1-2: Decomposing vectors using large orthogonal sets in R4.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-6-ex1", title: "Exercise 1: R4 Decomposition", description: "Splitting a vector", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Let $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3, \\mathbf{u}_4\\}$ be an orthogonal basis for $\\mathbb{R}^4$. Write $\\mathbf{x}$ as the sum of two vectors, one in $\\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$ and the other in $\\text{Span}\\{\\mathbf{u}_4\\}$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 0 \\\\ 1 \\\\ -4 \\\\ -1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 3 \\\\ 5 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\\\ -4 \\end{bmatrix}, \\mathbf{u}_4 = \\begin{bmatrix} 5 \\\\ -3 \\\\ -1 \\\\ 1 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 10 \\\\ -8 \\\\ 2 \\\\ 0 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute projections.**", interactiveSteps: [
           { stepText: "Let $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$. We want $\\mathbf{x} = \\mathbf{v} + \mathbf{w}$ where $\\mathbf{v} \\in W$ and $\\mathbf{w} \\in \\text{Span}\\{\\mathbf{u}_4\\}$." },
           { prompt: "Since the basis is orthogonal, how can we find $\\mathbf{w}$ (the part in Span $\\mathbf{u}_4$)?", options: [{id:"A", text:"Compute $\\frac{\\mathbf{x} \\cdot \\mathbf{u}_4}{\\mathbf{u}_4 \\cdot \\mathbf{u}_4}\\mathbf{u}_4$", isCorrect:true, explanation:"This is the orthogonal projection of x onto u4."}, {id:"B", text:"Compute $\\mathbf{x} - \\mathbf{u}_4$", isCorrect:false, explanation:""}], stepText: "Let's compute the projection onto $\\mathbf{u}_4$. $\\mathbf{x} \\cdot \\mathbf{u}_4 = 10(5) + (-8)(-3) + 2(-1) + 0 = 50 + 24 - 2 = 72$." },
           { stepText: "$\\mathbf{u}_4 \\cdot \\mathbf{u}_4 = 25 + 9 + 1 + 1 = 36$." },
           { stepText: "The component is $\\frac{72}{36}\\mathbf{u}_4 = 2\\mathbf{u}_4 = \\begin{bmatrix} 10 \\\\ -6 \\\\ -2 \\\\ 2 \\end{bmatrix}$." },
           { prompt: "Now, how do we find the vector in $W$?", options: [{id:"A", text:"Calculate projections onto $\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3$ and sum them.", isCorrect:true, explanation:"$v = \\text{proj}_{u1}x + \\text{proj}_{u2}x + \\text{proj}_{u3}x$."}, {id:"B", text:"Subtract the $\\mathbf{u}_4$ part from $\\mathbf{x}$.", isCorrect:true, explanation:"Since the set spans R4, $\\mathbf{x} = \\text{proj}_W \\mathbf{x} + \\text{proj}_{u4} \\mathbf{x}$. So $\\mathbf{v} = \\mathbf{x} - \\mathbf{w}$."}], stepText: "Using the subtraction method is faster: $\\mathbf{v} = \\mathbf{x} - 2\\mathbf{u}_4 = \\begin{bmatrix} 10 \\\\ -8 \\\\ 2 \\\\ 0 \\end{bmatrix} - \\begin{bmatrix} 10 \\\\ -6 \\\\ -2 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -2 \\\\ 4 \\\\ -2 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-3-6-ex2", title: "Exercise 2: Subspace Selection", description: "Choosing the right projection", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Using the same vectors as Exercise 1, write $\\mathbf{v}$ as the sum of two vectors, one in $\\text{Span}\\{\\mathbf{u}_1\\}$ and the other in $\\text{Span}\\{\\mathbf{u}_2, \\mathbf{u}_3, \\mathbf{u}_4\\}$.\n\nLet $\\mathbf{v} = \\begin{bmatrix} 4 \\\\ 5 \\\\ -3 \\\\ 3 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Project onto $\\mathbf{u}_1$ first.**", interactiveSteps: [
           { stepText: "Calculate projection onto $\\mathbf{u}_1$: $\\frac{\\mathbf{v} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\mathbf{u}_1$." },
           { stepText: "$\\mathbf{v} \\cdot \\mathbf{u}_1 = 4(0) + 5(1) + (-3)(-4) + 3(-1) = 0 + 5 + 12 - 3 = 14$." },
           { stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 0 + 1 + 16 + 1 = 18$." },
           { stepText: "Projection $\\mathbf{p}_1 = \\frac{14}{18}\\mathbf{u}_1 = \\frac{7}{9}\\begin{bmatrix} 0 \\\\ 1 \\\\ -4 \\\\ -1 \\end{bmatrix}$." },
           { stepText: "The rest of the vector is $\\mathbf{v} - \\mathbf{p}_1$, which must lie in the orthogonal complement of $\\text{Span}\\{\\mathbf{u}_1\\}$. Since the basis is orthogonal, this complement is exactly $\\text{Span}\\{\\mathbf{u}_2, \\mathbf{u}_3, \\mathbf{u}_4\\}$." }
        ]}
      ]
    }
  ]
};