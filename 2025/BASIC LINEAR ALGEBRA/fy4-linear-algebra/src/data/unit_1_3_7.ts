import { Unit } from '../types';

export const UNIT_1_3_7: Unit = {
  id: "unit-1-3-7",
  title: "Finding Bases for Null Spaces",
  description: "Exercises 9-10: Calculating bases for Nul A.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-7-ex9", title: "Exercise 9", description: "Matrix with 4 columns", icon: "Minimize2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Find a basis for the null space of the matrix:\n$$ A = \\begin{bmatrix} 1 & 0 & -2 & -2 \\\\ 0 & 1 & 1 & 4 \\\\ 3 & -1 & -7 & 3 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve $A\\mathbf{x}=\\mathbf{0}$.**", interactiveSteps: [
           { stepText: "Row reduce $A$. R3 - 3R1 gives $\\begin{bmatrix} 1 & 0 & -2 & -2 \\\\ 0 & 1 & 1 & 4 \\\\ 0 & -1 & -1 & 9 \\end{bmatrix}$." },
           { stepText: "Next, R3 + R2: $\\begin{bmatrix} 1 & 0 & -2 & -2 \\\\ 0 & 1 & 1 & 4 \\\\ 0 & 0 & 0 & 13 \\end{bmatrix}$. Then scale R3 to 1." },
           { stepText: "Eliminate above pivot in col 4. R1+2R3, R2-4R3. Matrix becomes $\\begin{bmatrix} 1 & 0 & -2 & 0 \\\\ 0 & 1 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}$." },
           { prompt: "Identify the free variable(s).", options: [{id:"A", text:"$x_3$", isCorrect:true, explanation:"Column 3 has no pivot."}, {id:"B", text:"$x_4$", isCorrect:false, explanation:"Column 4 has a pivot."}], stepText: "Solution: $x_1 = 2x_3$, $x_2 = -x_3$, $x_4 = 0$." },
           { stepText: "Vector form: $\\mathbf{x} = x_3 \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$. Basis is $\\left\\{ \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}$." }
        ]}
      ]
    },
    {
      id: "les-1-3-7-ex10", title: "Exercise 10", description: "Matrix with 5 columns", icon: "Minimize2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Find a basis for the null space of:\n$$ A = \\begin{bmatrix} 1 & 1 & -2 & 1 & 5 \\\\ 0 & 1 & 0 & -1 & -2 \\\\ 0 & 0 & -8 & 0 & 16 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve for free variables.**", interactiveSteps: [
           { stepText: "Row reduce. Divide R3 by -8: $\\begin{bmatrix} \dots & 0 & 0 & 1 & 0 & -2 \\end{bmatrix}$." },
           { stepText: "Clear above pivots. Eventually obtain RREF:\n$$ \\begin{bmatrix} 1 & 0 & 0 & 2 & 3 \\\\ 0 & 1 & 0 & -1 & -2 \\\\ 0 & 0 & 1 & 0 & -2 \\end{bmatrix} $$" },
           { prompt: "Which variables are free?", options: [{id:"A", text:"$x_4, x_5$", isCorrect:true, explanation:"Cols 4 and 5 have no pivots."}, {id:"B", text:"$x_3$", isCorrect:false, explanation:""}], stepText: "$x_1 = -2x_4 - 3x_5$\n$x_2 = x_4 + 2x_5$\n$x_3 = 2x_5$" },
           { stepText: "Basis: $\\left\\{ \\begin{bmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 2 \\\\ 2 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}$." }
        ]}
      ]
    }
  ]
};