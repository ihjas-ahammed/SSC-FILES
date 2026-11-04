import { Unit } from '../types';

export const UNIT_1_2_8: Unit = {
  id: "unit-1-2-8",
  title: "Finding Explicit Null Sets",
  description: "Exercises 3-6: Solving for spanning sets.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-8-ex3", title: "Exercise 3", description: "2 Equations, 4 Variables", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Find an explicit description of $\\text{Nul } A$ by listing vectors that span the null space.\n$$ A = \\begin{bmatrix} 1 & 2 & 4 & 0 \\\\ 0 & 1 & 3 & -2 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Parametric Vector Form.**", interactiveSteps: [
           { stepText: "The matrix is already in row echelon form. The pivot columns are 1 and 2. Free variables are $x_3, x_4$." },
           { stepText: "From Row 2: $x_2 + 3x_3 - 2x_4 = 0 \\implies x_2 = -3x_3 + 2x_4$." },
           { prompt: "Substitute $x_2$ into Row 1: $x_1 + 2x_2 + 4x_3 = 0$.", options: [{id:"A", text:"$x_1 + 2(-3x_3 + 2x_4) + 4x_3 = 0$", isCorrect:true, explanation:"Substitute the expression for $x_2$."}, {id:"B", text:"$x_1 + 2x_2 + 4x_3 = 0$", isCorrect:false, explanation:"You need to eliminate $x_2$."}], stepText: "$x_1 - 6x_3 + 4x_4 + 4x_3 = 0 \\implies x_1 - 2x_3 + 4x_4 = 0 \\implies x_1 = 2x_3 - 4x_4$." },
           { stepText: "Vector form:\n$$ \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\end{bmatrix} = x_3 \\begin{bmatrix} 2 \\\\ -3 \\\\ 1 \\\\ 0 \\end{bmatrix} + x_4 \\begin{bmatrix} -4 \\\\ 2 \\\\ 0 \\\\ 1 \\end{bmatrix} $$" },
           { stepText: "Spanning set: $\\{ [2, -3, 1, 0]^T, [-4, 2, 0, 1]^T \\}$." }
        ]}
      ]
    },
    {
      id: "les-1-2-8-ex4", title: "Exercise 4", description: "Zero Row", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Find the spanning set for $\\text{Nul } A$ where:\n$$ A = \\begin{bmatrix} 1 & -3 & 2 & 0 \\\\ 0 & 0 & 3 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify free variables.**", interactiveSteps: [
           { stepText: "Pivot in col 1 ($x_1$) and col 3 ($x_3$). Free variables are $x_2, x_4$." },
           { prompt: "Solve Row 2: $3x_3 = 0$.", options: [{id:"A", text:"$x_3 = 0$", isCorrect:true, explanation:""}, {id:"B", text:"$x_3$ is free", isCorrect:false, explanation:"There is a pivot in column 3."}], stepText: "$x_3 = 0$." },
           { stepText: "Solve Row 1: $x_1 - 3x_2 + 2x_3 = 0 \\implies x_1 - 3x_2 + 0 = 0 \\implies x_1 = 3x_2$." },
           { stepText: "Vector form:\n$$ \\begin{bmatrix} 3x_2 \\\\ x_2 \\\\ 0 \\\\ x_4 \\end{bmatrix} = x_2 \\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix} + x_4 \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} $$" },
           { stepText: "Spanning set: $\\{ [3, 1, 0, 0]^T, [0, 0, 0, 1]^T \\}$." }
        ]}
      ]
    },
    {
      id: "les-1-2-8-ex5-6", title: "Exercises 5 & 6", description: "More reduction practice", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Find the spanning set for the null space of:\n$$ A = \\begin{bmatrix} 1 & -4 & 0 & 2 & 0 \\\\ 0 & 0 & 1 & -5 & 0 \\\\ 0 & 0 & 0 & 0 & 2 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution Ex 5", content: "Pivots in cols 1, 3, 5. Free variables: $x_2, x_4$.\n\nFrom R3: $2x_5 = 0 \\implies x_5 = 0$.\nFrom R2: $x_3 - 5x_4 = 0 \\implies x_3 = 5x_4$.\nFrom R1: $x_1 - 4x_2 + 2x_4 = 0 \\implies x_1 = 4x_2 - 2x_4$.\n\nBasis vectors correspond to $x_2$ and $x_4$:\n$\\mathbf{u} = [4, 1, 0, 0, 0]^T$\n$\\mathbf{v} = [-2, 0, 5, 1, 0]^T$" },
        { id: "s2", type: "example_q", title: "Exercise 6", content: "Find the spanning set for the null space of:\n$$ A = \\begin{bmatrix} 1 & 3 & -4 & -3 & 1 \\\\ 0 & 1 & -3 & 1 & 0 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$" },
        { id: "s3", type: "solution", title: "Solution Ex 6", content: "Pivots in cols 1, 2. Free: $x_3, x_4, x_5$.\n\nR2: $x_2 = 3x_3 - x_4$.\nR1: $x_1 + 3(3x_3 - x_4) - 4x_3 - 3x_4 + x_5 = 0$\n$x_1 + 9x_3 - 3x_4 - 4x_3 - 3x_4 + x_5 = 0$\n$x_1 = -5x_3 + 6x_4 - x_5$.\n\nSpanning set:\n1. For $x_3$: $[-5, 3, 1, 0, 0]^T$\n2. For $x_4$: $[6, -1, 0, 1, 0]^T$\n3. For $x_5$: $[-1, 0, 0, 0, 1]^T$" }
      ]
    }
  ]
};