import { Unit } from '../types';

export const UNIT_3_2_9: Unit = {
  id: "unit-3-2-9",
  title: "Orthogonal Projections",
  description: "Exercises 11-14: Computing projections and orthogonal decompositions.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-9-ex11", title: "Exercise 11", description: "Projection onto a line", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Compute the orthogonal projection of $\\mathbf{y} = \\begin{bmatrix} 1 \\\\ 7 \\end{bmatrix}$ onto the line through $\\mathbf{u} = \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix}$ and the origin." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\mathbf{u}$.**", interactiveSteps: [
           { prompt: "Compute the dot products.", options: [{id:"A", text:"$\\mathbf{y} \\cdot \\mathbf{u} = 10, \\mathbf{u} \\cdot \\mathbf{u} = 20$", isCorrect:true, explanation:"$-4 + 14 = 10$, and $16 + 4 = 20$."}, {id:"B", text:"$\\mathbf{y} \\cdot \\mathbf{u} = 18, \\mathbf{u} \\cdot \\mathbf{u} = 20$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} \\cdot \\mathbf{u} = 10$ and $\\mathbf{u} \\cdot \\mathbf{u} = 20$." },
           { stepText: "The scalar is $\\frac{10}{20} = \\frac{1}{2}$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\frac{1}{2} \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} -2 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-2-9-ex12", title: "Exercise 12", description: "Projection onto a line 2", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Compute the orthogonal projection of $\\mathbf{y} = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$ onto the line through $\\mathbf{u} = \\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$ and the origin." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{y} \\cdot \\mathbf{u} = 1(-1) + (-1)(3) = -4$.\n$\\mathbf{u} \\cdot \\mathbf{u} = (-1)^2 + 3^2 = 10$.\n\nScalar = $-4/10 = -2/5$.\n\n$\\hat{\\mathbf{y}} = -\\frac{2}{5} \\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 2/5 \\\\ -6/5 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-2-9-ex13", title: "Exercise 13", description: "Orthogonal Decomposition", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Let $\\mathbf{y} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$ and $\\mathbf{u} = \\begin{bmatrix} 4 \\\\ -7 \\end{bmatrix}$. Write $\\mathbf{y}$ as the sum of two orthogonal vectors, one in $\\text{Span}\\{\\mathbf{u}\\}$ and one orthogonal to $\\mathbf{u}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\hat{\\mathbf{y}}$ and $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$.**", interactiveSteps: [
           { stepText: "$\\mathbf{y} \\cdot \\mathbf{u} = 2(4) + 3(-7) = 8 - 21 = -13$." },
           { stepText: "$\\mathbf{u} \\cdot \\mathbf{u} = 4^2 + (-7)^2 = 16 + 49 = 65$." },
           { prompt: "Calculate $\\hat{\\mathbf{y}}$.", options: [{id:"A", text:"$\\hat{\\mathbf{y}} = -\\frac{1}{5}\\mathbf{u} = \\begin{bmatrix} -4/5 \\\\ 7/5 \\end{bmatrix}$", isCorrect:true, explanation:"$-13/65 = -1/5$."}, {id:"B", text:"$\\hat{\\mathbf{y}} = \\begin{bmatrix} 4/5 \\\\ -7/5 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$\\hat{\\mathbf{y}} = \\begin{bmatrix} -4/5 \\\\ 7/5 \\end{bmatrix}$." },
           { stepText: "Now find $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} - \\begin{bmatrix} -4/5 \\\\ 7/5 \\end{bmatrix} = \\begin{bmatrix} 14/5 \\\\ 8/5 \\end{bmatrix}$." },
           { stepText: "Final decomposition: $\\mathbf{y} = \\begin{bmatrix} -4/5 \\\\ 7/5 \\end{bmatrix} + \\begin{bmatrix} 14/5 \\\\ 8/5 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-2-9-ex14", title: "Exercise 14", description: "Orthogonal Decomposition 2", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Let $\\mathbf{y} = \\begin{bmatrix} 2 \\\\ 6 \\end{bmatrix}$ and $\\mathbf{u} = \\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix}$. Write $\\mathbf{y}$ as the sum of a vector in $\\text{Span}\\{\\mathbf{u}\\}$ and a vector orthogonal to $\\mathbf{u}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{y} \\cdot \\mathbf{u} = 14 + 6 = 20$.\n$\\mathbf{u} \\cdot \\mathbf{u} = 49 + 1 = 50$.\n\n$\\hat{\\mathbf{y}} = \\frac{20}{50} \\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 14/5 \\\\ 2/5 \\end{bmatrix}$.\n\n$\\mathbf{z} = \\begin{bmatrix} 2 \\\\ 6 \\end{bmatrix} - \\begin{bmatrix} 14/5 \\\\ 2/5 \\end{bmatrix} = \\begin{bmatrix} -4/5 \\\\ 28/5 \\end{bmatrix}$.\n\nDecomposition: $\\mathbf{y} = \\begin{bmatrix} 14/5 \\\\ 2/5 \\end{bmatrix} + \\begin{bmatrix} -4/5 \\\\ 28/5 \\end{bmatrix}$." }
      ]
    }
  ]
};