import { Unit } from '../types';

export const UNIT_2_1_5: Unit = {
  id: "unit-2-1-5",
  title: "Practice Problems",
  description: "Applying coordinate formulas.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-5-pp1", title: "Practice Problem 1", description: "Matrix inverses and coordinates", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Let $\\mathbf{b}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\mathbf{b}_2 = \\begin{bmatrix} -3 \\\\ 4 \\\\ 0 \\end{bmatrix}, \\mathbf{b}_3 = \\begin{bmatrix} 3 \\\\ -6 \\\\ 3 \\end{bmatrix}$, and $\\mathbf{x} = \\begin{bmatrix} -8 \\\\ 2 \\\\ 3 \\end{bmatrix}$.\n\n$\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2, \\mathbf{b}_3\\}$ is a basis for $\\mathbb{R}^3$.\nFind the coordinate vector $[\\mathbf{x}]_\\mathcal{B}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $[\\mathbf{x}]_\\mathcal{B} = P_\\mathcal{B}^{-1} \\mathbf{x}$, or solve $P_\\mathcal{B} \\mathbf{c} = \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "Form the change-of-coordinates matrix $P_\\mathcal{B} = [\\mathbf{b}_1 \\ \\mathbf{b}_2 \\ \\mathbf{b}_3]$." },
           { stepText: "Because $P_\\mathcal{B}$ is a lower triangular matrix (actually upper triangular looking at it: $\\begin{bmatrix} 1 & -3 & 3 \\\\ 0 & 4 & -6 \\\\ 0 & 0 & 3 \\end{bmatrix}$), solving the augmented matrix is very fast via back-substitution." },
           { prompt: "Let's solve $[P_\\mathcal{B} \\ | \\ \\mathbf{x}]$. What is the equation for the third row?", options: [{id:"A", text:"$3c_3 = 3$", isCorrect:true, explanation:""}, {id:"B", text:"$3c_1 = 3$", isCorrect:false, explanation:""}], stepText: "Row 3: $3c_3 = 3 \\implies c_3 = 1$." },
           { prompt: "Now Row 2: $4c_2 - 6c_3 = 2$. Find $c_2$.", options: [{id:"A", text:"$c_2 = 2$", isCorrect:true, explanation:"$4c_2 - 6(1) = 2 \\implies 4c_2 = 8 \\implies c_2 = 2$."}, {id:"B", text:"$c_2 = -2$", isCorrect:false, explanation:""}], stepText: "We get $c_2 = 2$." },
           { stepText: "Row 1: $c_1 - 3c_2 + 3c_3 = -8 \\implies c_1 - 6 + 3 = -8 \\implies c_1 = -5$." },
           { stepText: "So $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -5 \\\\ 2 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-5-pp2", title: "Practice Problem 2", description: "Polynomial Coordinates", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 2", content: "**Problem:** The set $\\mathcal{B} = \\{1+t, 1+t^2, t+t^2\\}$ is a basis for $\\mathbb{P}_2$. \n\nFind the coordinate vector of $\\mathbf{p}(t) = 6 + 3t - t^2$ relative to $\\mathcal{B}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $c_1, c_2, c_3$ such that $c_1(1+t) + c_2(1+t^2) + c_3(t+t^2) = 6 + 3t - t^2$.**", interactiveSteps: [
           { stepText: "Group the like powers of $t$ on the left side:\n$(c_1 + c_2) + (c_1 + c_3)t + (c_2 + c_3)t^2$." },
           { stepText: "Equate coefficients to the right side:\n1) $c_1 + c_2 = 6$\n2) $c_1 + c_3 = 3$\n3) $c_2 + c_3 = -1$" },
           { prompt: "Subtract equation 2 from equation 1 to eliminate $c_1$. What do you get?", options: [{id:"A", text:"$c_2 - c_3 = 3$", isCorrect:true, explanation:"$(c_1+c_2) - (c_1+c_3) = 6 - 3$."}, {id:"B", text:"$c_2 + c_3 = 3$", isCorrect:false, explanation:""}], stepText: "We get $c_2 - c_3 = 3$." },
           { stepText: "Now add this to equation 3 ($c_2 + c_3 = -1$):\n$(c_2 - c_3) + (c_2 + c_3) = 3 + (-1) \\implies 2c_2 = 2 \\implies c_2 = 1$." },
           { stepText: "Substitute $c_2=1$ into eq 3: $1 + c_3 = -1 \\implies c_3 = -2$." },
           { stepText: "Substitute $c_2=1$ into eq 1: $c_1 + 1 = 6 \\implies c_1 = 5$." },
           { stepText: "The coordinate vector is $[\\mathbf{p}]_\\mathcal{B} = \\begin{bmatrix} 5 \\\\ 1 \\\\ -2 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};