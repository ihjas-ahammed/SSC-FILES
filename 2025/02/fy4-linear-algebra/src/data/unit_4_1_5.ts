import { Unit } from '../types';

export const UNIT_4_1_5: Unit = {
  id: "unit-4-1-5",
  title: "Identifying Symmetric Matrices",
  description: "Exercises 1-6: Determine which matrices are symmetric.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-5-ex1", title: "Exercise 1", description: "2x2 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Determine if the matrix is symmetric.\n$$ \\begin{bmatrix} 3 & 5 \\\\ 5 & -7 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check if $A^T = A$.**", interactiveSteps: [
           { prompt: "Look at the off-diagonal entries. What are $A_{12}$ and $A_{21}$?", options: [{id:"A", text:"$A_{12} = 5, A_{21} = 5$", isCorrect:true, explanation:"They are equal."}, {id:"B", text:"$A_{12} = 3, A_{21} = -7$", isCorrect:false, explanation:"Those are the main diagonal entries."}], stepText: "Since $A_{12} = A_{21}$, the transpose is identical to the original matrix." },
           { stepText: "The matrix **is symmetric**." }
        ]}
      ]
    },
    {
      id: "les-4-1-5-ex2", title: "Exercise 2", description: "2x2 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Determine if the matrix is symmetric.\n$$ \\begin{bmatrix} -3 & 5 \\\\ -5 & 3 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check off-diagonal symmetry.**", interactiveSteps: [
           { prompt: "Is $A_{12}$ equal to $A_{21}$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"5 is not equal to -5."}, {id:"B", text:"No", isCorrect:true, explanation:"$5 \\neq -5$."}], stepText: "Because $A_{12} \\neq A_{21}$, the matrix is **not symmetric**." }
        ]}
      ]
    },
    {
      id: "les-4-1-5-ex3", title: "Exercise 3", description: "2x2 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Determine if the matrix is symmetric.\n$$ \\begin{bmatrix} 2 & 2 \\\\ 4 & 4 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Check the off-diagonal entries: $A_{12} = 2$ and $A_{21} = 4$.\n\nSince $2 \\neq 4$, the matrix is **not symmetric**." }
      ]
    },
    {
      id: "les-4-1-5-ex4", title: "Exercise 4", description: "3x3 Matrix", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Determine if the matrix is symmetric.\n$$ \\begin{bmatrix} 0 & 8 & 3 \\\\ 8 & 0 & -2 \\\\ 3 & -2 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check all pairs across the main diagonal.**", interactiveSteps: [
           { stepText: "Check $(1,2)$ and $(2,1)$: $A_{12} = 8$, $A_{21} = 8$. Match." },
           { stepText: "Check $(1,3)$ and $(3,1)$: $A_{13} = 3$, $A_{31} = 3$. Match." },
           { prompt: "Check $(2,3)$ and $(3,2)$. Do they match?", options: [{id:"A", text:"Yes, both are -2.", isCorrect:true, explanation:""}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "They both equal $-2$." },
           { stepText: "Since all corresponding entries match, the matrix **is symmetric**." }
        ]}
      ]
    },
    {
      id: "les-4-1-5-ex5", title: "Exercise 5", description: "3x3 Matrix", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Determine if the matrix is symmetric.\n$$ \\begin{bmatrix} -6 & 2 & 0 \\\\ 0 & -6 & 2 \\\\ 0 & 0 & -6 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Check $A_{12}$ and $A_{21}$. \n$A_{12} = 2$, but $A_{21} = 0$.\n\nSince they do not match, the matrix is **not symmetric**." }
      ]
    },
    {
      id: "les-4-1-5-ex6", title: "Exercise 6", description: "3x4 Matrix", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Determine if the matrix is symmetric.\n$$ \\begin{bmatrix} 1 & 2 & 1 & 2 \\\\ 2 & 1 & 2 & 1 \\\\ 1 & 2 & 1 & 2 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply the fundamental definition.**", interactiveSteps: [
           { prompt: "What are the dimensions of this matrix?", options: [{id:"A", text:"$3 \\times 4$", isCorrect:true, explanation:"3 rows, 4 columns."}, {id:"B", text:"$4 \\times 3$", isCorrect:false, explanation:""}], stepText: "This is a $3 \\times 4$ matrix." },
           { stepText: "By definition, a symmetric matrix satisfies $A^T = A$. If $A$ is $3 \\times 4$, its transpose $A^T$ is $4 \\times 3$." },
           { stepText: "Since a $3 \\times 4$ matrix can never equal a $4 \\times 3$ matrix, only square matrices can be symmetric!" },
           { stepText: "The matrix is **not symmetric**." }
        ]}
      ]
    }
  ]
};