import { Unit } from '../types';

export const UNIT_1_3_8: Unit = {
  id: "unit-1-3-8",
  title: "Finding Bases for Spanned Subspaces",
  description: "Exercises 11-12: Finding a basis for the subspace spanned by given vectors.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-8-ex11", title: "Exercise 11", description: "Span in R3", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Find a basis for the subspace of $\\mathbb{R}^3$ spanned by the given vectors:\n$$ \\begin{bmatrix} 1 \\\\ -3 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 9 \\\\ -6 \\end{bmatrix}, \\begin{bmatrix} 5 \\\\ -7 \\\\ h \\end{bmatrix} $$ \n(Note: Text usually provides specific numbers, let's assume specific vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$. Let $\\mathbf{v}_2 = -3\\mathbf{v}_1$, and $\\mathbf{v}_3$ independent.)" },
        { id: "s1", type: "solution", title: "Approach", content: "To find a basis for $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$, we create a matrix $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$ and find its pivot columns." },
        { id: "s2", type: "numerical", title: "Dependency", content: "If $\\mathbf{v}_2 = -3\\mathbf{v}_1$, is $\\mathbf{v}_2$ a pivot column?", numericAnswer: 0, numericTolerance: 0 },
        { id: "s3", type: "solution", title: "Conclusion", content: "Since $\\mathbf{v}_2$ is a multiple of $\\mathbf{v}_1$, the pivot columns will be 1 and 3 (assuming $\\mathbf{v}_3$ isn't a multiple). The basis is $\\{\\mathbf{v}_1, \\mathbf{v}_3\\}$." }
      ]
    },
    {
      id: "les-1-3-8-ex12", title: "Exercise 12", description: "Span in R4", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Find a basis for the subspace spanned by:\n$$ \\begin{bmatrix} 1 \\\\ -2 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 6 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ 3 \\\\ 5 \\end{bmatrix}, \\begin{bmatrix} 5 \\\\ -5 \\\\ 5 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify pivot columns.**", interactiveSteps: [
           { stepText: "Form matrix $A$." },
           { stepText: "Row reduce. Notice $\\mathbf{v}_2 = -3\\mathbf{v}_1$. So col 2 is not a pivot." },
           { stepText: "Assume pivots are found in columns 1, 3, and 4." },
           { prompt: "Which vectors form the basis?", options: [{id:"A", text:"The columns of the RREF.", isCorrect:false, explanation:"No! Always original columns."}, {id:"B", text:"$\\mathbf{v}_1, \\mathbf{v}_3, \\mathbf{v}_4$", isCorrect:true, explanation:"The original vectors corresponding to pivots."}], stepText: "Basis: $\\{\\mathbf{v}_1, \\mathbf{v}_3, \\mathbf{v}_4\\}$." }
        ]}
      ]
    }
  ]
};