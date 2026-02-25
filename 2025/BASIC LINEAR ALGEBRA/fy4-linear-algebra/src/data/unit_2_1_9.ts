import { Unit } from '../types';

export const UNIT_2_1_9: Unit = {
  id: "unit-2-1-9",
  title: "Using Inverses and Polynomial Bases",
  description: "Exercises 11-14: Computing coordinates with P_B^{-1} and polynomials.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-9-ex11", title: "Exercise 11", description: "Using matrix inverse", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Use an inverse matrix to find $[\\mathbf{x}]_\\mathcal{B}$ for the given $\\mathbf{x}$ and $\\mathcal{B}$.\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 5 \\end{bmatrix} \\right\\}, \\quad \\mathbf{x} = \\begin{bmatrix} 2 \\\\ -5 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $P_\\mathcal{B}^{-1} \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "$P_\\mathcal{B} = \\begin{bmatrix} 1 & -3 \\\\ -2 & 5 \\end{bmatrix}$." },
           { prompt: "What is the determinant of $P_\\mathcal{B}$?", options: [{id:"A", text:"$-1$", isCorrect:true, explanation:"$(1)(5) - (-3)(-2) = 5 - 6 = -1$."}, {id:"B", text:"$11$", isCorrect:false, explanation:""}], stepText: "Determinant is $-1$." },
           { stepText: "The inverse of a $2 \\times 2$ matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ is $\\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$." },
           { stepText: "$P_\\mathcal{B}^{-1} = -1 \\begin{bmatrix} 5 & 3 \\\\ 2 & 1 \\end{bmatrix} = \\begin{bmatrix} -5 & -3 \\\\ -2 & -1 \\end{bmatrix}$." },
           { stepText: "Multiply by $\\mathbf{x}$: $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -5 & -3 \\\\ -2 & -1 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ -5 \\end{bmatrix} = \\begin{bmatrix} -10+15 \\\\ -4+5 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-9-ex12", title: "Exercise 12", description: "Inverse matrix practice", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Use an inverse matrix to find $[\\mathbf{x}]_\\mathcal{B}$.\n\n$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} \\right\\}, \\quad \\mathbf{x} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $P_\\mathcal{B}^{-1} \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "$P_\\mathcal{B} = \\begin{bmatrix} 1 & 2 \\\\ -1 & -1 \\end{bmatrix}$." },
           { prompt: "What is $P_\\mathcal{B}^{-1}$?", options: [{id:"A", text:"$\\begin{bmatrix} -1 & -2 \\\\ 1 & 1 \\end{bmatrix}$", isCorrect:true, explanation:"Det is $(1)(-1) - (2)(-1) = 1$. Adjugate is $\\begin{bmatrix} -1 & -2 \\\\ 1 & 1 \\end{bmatrix}$."}, {id:"B", text:"$\\begin{bmatrix} 1 & -2 \\\\ 1 & 1 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$P_\\mathcal{B}^{-1} = \\begin{bmatrix} -1 & -2 \\\\ 1 & 1 \\end{bmatrix}$." },
           { stepText: "$[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -1 & -2 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} -2 - 6 \\\\ 2 + 3 \\end{bmatrix} = \\begin{bmatrix} -8 \\\\ 5 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-9-ex13", title: "Exercise 13", description: "Polynomials in P2", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** The set $\\mathcal{B} = \\{1+t^2, t+t^2, 1+2t+t^2\\}$ is a basis for $\\mathbb{P}_2$. \n\nFind the coordinate vector of $\\mathbf{p}(t) = 1 + 4t + 7t^2$ relative to $\\mathcal{B}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Map to $\\mathbb{R}^3$ using the standard basis $\\{1, t, t^2\\}$.**", interactiveSteps: [
           { stepText: "Represent the basis polynomials as columns in $\\mathbb{R}^3$: \n$\\mathbf{b}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{b}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{b}_3 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Target vector $\\mathbf{x} = \\begin{bmatrix} 1 \\\\ 4 \\\\ 7 \\end{bmatrix}$." },
           { prompt: "Set up the augmented matrix $[ \\mathbf{b}_1 \\ \\mathbf{b}_2 \\ \\mathbf{b}_3 \\ | \\ \\mathbf{x} ]$. Which row operation clears the bottom-left entry?", options: [{id:"A", text:"$R_3 - R_1$", isCorrect:true, explanation:"Since both have a 1 in the first column."}, {id:"B", text:"$R_3 + R_1$", isCorrect:false, explanation:""}], stepText: "$R_3 - R_1 \\implies \\begin{bmatrix} 1 & 0 & 1 & 1 \\\\ 0 & 1 & 2 & 4 \\\\ 0 & 1 & 0 & 6 \\end{bmatrix}$." },
           { stepText: "$R_2 - R_3 \\implies \\begin{bmatrix} 1 & 0 & 1 & 1 \\\\ 0 & 0 & 2 & -2 \\\\ 0 & 1 & 0 & 6 \\end{bmatrix}$. So $2c_3 = -2 \\implies c_3 = -1$." },
           { stepText: "From $R_3$, $c_2 = 6$." },
           { stepText: "From $R_1$, $c_1 + c_3 = 1 \\implies c_1 - 1 = 1 \\implies c_1 = 2$." },
           { stepText: "$[\\mathbf{p}]_\\mathcal{B} = \\begin{bmatrix} 2 \\\\ 6 \\\\ -1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-9-ex14", title: "Exercise 14", description: "Polynomials in P2 part 2", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** The set $\\mathcal{B} = \\{1-t^2, t-t^2, 2-t+t^2\\}$ is a basis for $\\mathbb{P}_2$. \n\nFind the coordinate vector of $\\mathbf{p}(t) = 1 + 3t - 6t^2$ relative to $\\mathcal{B}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Set up and solve the linear system.**", interactiveSteps: [
           { stepText: "Convert to vectors in $\\mathbb{R}^3$:\n$[\\mathbf{b}_1] = [1, 0, -1]^T, \\quad [\\mathbf{b}_2] = [0, 1, -1]^T, \\quad [\\mathbf{b}_3] = [2, -1, 1]^T, \\quad [\\mathbf{p}] = [1, 3, -6]^T$." },
           { stepText: "Matrix: $\\begin{bmatrix} 1 & 0 & 2 & 1 \\\\ 0 & 1 & -1 & 3 \\\\ -1 & -1 & 1 & -6 \\end{bmatrix}$." },
           { stepText: "$R_3 + R_1 \\implies [0, -1, 3 \\ | \\ -5]$." },
           { stepText: "New $R_3 + R_2 \\implies [0, 0, 2 \\ | \\ -2] \\implies c_3 = -1$." },
           { stepText: "$R_2$: $c_2 - (-1) = 3 \\implies c_2 = 2$." },
           { stepText: "$R_1$: $c_1 + 2(-1) = 1 \\implies c_1 = 3$." },
           { stepText: "$[\\mathbf{p}]_\\mathcal{B} = \\begin{bmatrix} 3 \\\\ 2 \\\\ -1 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};