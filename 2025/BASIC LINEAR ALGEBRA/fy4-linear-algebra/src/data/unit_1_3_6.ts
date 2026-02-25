import { Unit } from '../types';

export const UNIT_1_3_6: Unit = {
  id: "unit-1-3-6",
  title: "Basis Checks in R3",
  description: "Exercises 1-8: Determining if sets are bases for R3.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-6-ex1", title: "Exercise 1", description: "3 vectors in R3", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check independence and span.**", interactiveSteps: [
           { stepText: "Form a matrix with these vectors as columns: $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix}$." },
           { prompt: "Is this matrix invertible?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"It is upper triangular with non-zero diagonals."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "The determinant is $1 \\cdot 1 \\cdot 1 = 1 \\neq 0$. The columns are linearly independent and span $\\mathbb{R}^3$." },
           { stepText: "Yes, it is a basis." }
        ]}
      ]
    },
    {
      id: "les-1-3-6-ex2", title: "Exercise 2", description: "3 vectors, one zero?", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check linear independence.**", interactiveSteps: [
           { prompt: "Does the set contain the zero vector?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"The second vector is zero."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Any set containing the zero vector is linearly dependent." },
           { stepText: "Since it is linearly dependent, it cannot be a basis." }
        ]}
      ]
    },
    {
      id: "les-1-3-6-ex3", title: "Exercise 3", description: "3 vectors, collinear?", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ -3 \\end{bmatrix}, \\begin{bmatrix} 3 \\\\ 1 \\\\ -4 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ -1 \\\\ 1 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Row reduce.**", interactiveSteps: [
           { stepText: "Matrix $A = \\begin{bmatrix} 1 & 3 & -2 \\\\ 0 & 1 & -1 \\\\ -3 & -4 & 1 \\end{bmatrix}$. Row reduce." },
           { stepText: "$R_3 + 3R_1 \\to R_3$: $\\begin{bmatrix} 1 & 3 & -2 \\\\ 0 & 1 & -1 \\\\ 0 & 5 & -5 \\end{bmatrix}$." },
           { prompt: "Next step: $R_3 - 5R_2$. What is the new $R_3$?", options: [{id:"A", text:"$[0, 0, 0]$", isCorrect:true, explanation:"$5 - 5(1) = 0$, $-5 - 5(-1) = 0$."}, {id:"B", text:"$[0, 0, 1]$", isCorrect:false, explanation:""}], stepText: "The matrix has only 2 pivots. The columns are dependent." },
           { stepText: "Not a basis." }
        ]}
      ]
    },
    {
      id: "les-1-3-6-ex4", title: "Exercise 4", description: "3 vectors", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ -3 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} -8 \\\\ 5 \\\\ 4 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Construct the matrix. \n$$ \\begin{bmatrix} 2 & 2 & -8 \\\\ -1 & -3 & 5 \\\\ 1 & 2 & 4 \\end{bmatrix} $$\nRow reduction shows 3 pivots. The matrix is invertible.\n\n**Yes**, it is a basis." }
      ]
    },
    {
      id: "les-1-3-6-ex5", title: "Exercise 5", description: "4 vectors in R3", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} 3 \\\\ -3 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 7 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ -3 \\\\ 5 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "There are 4 vectors in $\\mathbb{R}^3$. \n\nBy Theorem, any set of more than $n$ vectors in $\\mathbb{R}^n$ is linearly dependent.\n\n**No**, not a basis (dependent)." }
      ]
    },
    {
      id: "les-1-3-6-ex6", title: "Exercise 6", description: "2 vectors in R3", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ -4 \\end{bmatrix}, \\begin{bmatrix} -4 \\\\ 3 \\\\ 6 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "There are only 2 vectors in $\\mathbb{R}^3$.\n\nA basis for $\\mathbb{R}^3$ must have exactly 3 vectors.\n\n**No**, not a basis (does not span)." }
      ]
    },
    {
      id: "les-1-3-6-ex7", title: "Exercise 7", description: "Vector Expansion", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} -2 \\\\ 3 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 6 \\\\ -1 \\\\ 5 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Only 2 vectors. Cannot span $\\mathbb{R}^3$.\n\n**No**, not a basis." }
      ]
    },
    {
      id: "les-1-3-6-ex8", title: "Exercise 8", description: "4 vectors, non-zero", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Determine if the set is a basis for $\\mathbb{R}^3$:\n$$ \\left\\{ \\begin{bmatrix} 1 \\\\ -2 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 3 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ -1 \\\\ 5 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ -1 \\end{bmatrix} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "4 vectors in $\\mathbb{R}^3$. Must be linearly dependent.\n\n**No**, not a basis." }
      ]
    }
  ]
};