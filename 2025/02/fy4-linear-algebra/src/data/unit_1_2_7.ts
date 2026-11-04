import { Unit } from '../types';

export const UNIT_1_2_7: Unit = {
  id: "unit-1-2-7",
  title: "Checking Null Space Membership",
  description: "Exercises 1-2: Verifying solutions to Ax = 0.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-7-ex1", title: "Exercise 1", description: "Is w in Nul A?", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Determine if $\\mathbf{w} = \\begin{bmatrix} 1 \\\\ 3 \\\\ -4 \\end{bmatrix}$ is in the null space of the matrix $A = \\begin{bmatrix} 3 & -5 & -3 \\\\ 6 & -2 & 0 \\\\ -8 & 4 & 1 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check if $A\\mathbf{w} = \\mathbf{0}$.**", interactiveSteps: [
           { stepText: "Compute the first component of $A\\mathbf{w}$: $3(1) + (-5)(3) + (-3)(-4)$." },
           { prompt: "What is the result?", options: [{id:"A", text:"$3 - 15 + 12 = 0$", isCorrect:true, explanation:""}, {id:"B", text:"$3 - 15 - 12 = -24$", isCorrect:false, explanation:"Check the signs."}], stepText: "First component is 0." },
           { stepText: "Compute the second component: $6(1) + (-2)(3) + 0(-4) = 6 - 6 + 0 = 0$." },
           { stepText: "Compute the third component: $-8(1) + 4(3) + 1(-4) = -8 + 12 - 4 = 0$." },
           { stepText: "Since $A\\mathbf{w} = \\mathbf{0}$, $\\mathbf{w}$ is in $\\text{Nul } A$." }
        ]}
      ]
    },
    {
      id: "les-1-2-7-ex2", title: "Exercise 2", description: "Matrix Multiplication Check", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Determine if $\\mathbf{w} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}$ is in $\\text{Nul } A$, where $A = \\begin{bmatrix} 2 & 6 & 4 \\\\ -3 & 2 & 5 \\\\ -5 & -4 & 1 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate $A\\mathbf{w}$.**", interactiveSteps: [
           { stepText: "Row 1 dot $\\mathbf{w}$: $2(1) + 6(-1) + 4(1) = 2 - 6 + 4 = 0$." },
           { stepText: "Row 2 dot $\\mathbf{w}$: $-3(1) + 2(-1) + 5(1) = -3 - 2 + 5 = 0$." },
           { prompt: "Row 3 dot $\\mathbf{w}$: $-5(1) + (-4)(-1) + 1(1) = ?$", options: [{id:"A", text:"$-5 + 4 + 1 = 0$", isCorrect:true, explanation:""}, {id:"B", text:"$-5 - 4 + 1 = -8$", isCorrect:false, explanation:""}], stepText: "All entries are zero." },
           { stepText: "Conclusion: Yes, $\\mathbf{w}$ is in $\\text{Nul } A$." }
        ]}
      ]
    }
  ]
};