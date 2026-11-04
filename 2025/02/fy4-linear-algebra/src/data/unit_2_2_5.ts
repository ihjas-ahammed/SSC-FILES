import { Unit } from '../types';

export const UNIT_2_2_5: Unit = {
  id: "unit-2-2-5",
  title: "Determining Dimensions of Subspaces",
  description: "Exercises 1-8: Finding bases and dimensions for subspaces defined by vectors or equations.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-5-ex1", title: "Exercise 1", description: "Subspace in R3", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Find a basis for the subspace $H$ of $\\mathbb{R}^3$ spanned by the vectors:\n$$ \\begin{bmatrix} 1 \\\\ -2 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 4 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} 5 \\\\ -6 \\\\ -1 \\end{bmatrix} $$ \nDetermine the dimension of $H$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify linearly independent vectors.**", interactiveSteps: [
           { stepText: "Let $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$. Row reduce $A$." },
           { stepText: "$\\begin{bmatrix} 1 & -3 & 5 \\\\ -2 & 4 & -6 \\\\ 0 & 1 & -1 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & -3 & 5 \\\\ 0 & -2 & 4 \\\\ 0 & 1 & -1 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & -3 & 5 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 2 \\end{bmatrix}$." },
           { prompt: "How many pivot columns are there?", options: [{id:"A", text:"2", isCorrect:false, explanation:""}, {id:"B", text:"3", isCorrect:true, explanation:"There are pivots in columns 1, 2, and 3."}], stepText: "There are 3 pivots. Thus all 3 vectors are linearly independent." },
           { stepText: "Basis: $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$. Dimension: 3." }
        ]},
        { id: "s2", type: "numerical", title: "Dimension", content: "What is $\\dim H$?", numericAnswer: 3, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-5-ex2", title: "Exercise 2", description: "Subspace in R3", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Find a basis and the dimension of the subspace spanned by:\n$$ \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 3 \\\\ 2 \\\\ 1 \\end{bmatrix}, \\begin{bmatrix} 11 \\\\ 10 \\\\ 7 \\end{bmatrix}, \\begin{bmatrix} 7 \\\\ 6 \\\\ 4 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Form the matrix $A$ and row reduce.\n\n$A = \\begin{bmatrix} 1 & 3 & 11 & 7 \\\\ 2 & 2 & 10 & 6 \\\\ 2 & 1 & 7 & 4 \\end{bmatrix}$.\n\nAfter reduction, we find pivots in columns 1 and 2.\nThe vectors corresponding to the non-pivot columns are linear combinations of the pivot columns.\n\n**Basis:** $\\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 3 \\\\ 2 \\\\ 1 \\end{bmatrix} \\right\\}$.\n**Dimension:** 2." },
        { id: "s2", type: "numerical", title: "Dimension Check", content: "What is the dimension?", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-5-ex3", title: "Exercise 3", description: "Subspace in R4", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Find the dimension of the subspace spanned by:\n$$ \\begin{bmatrix} 1 \\\\ 0 \\\\ 2 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ 1 \\\\ -1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -4 \\\\ 2 \\\\ -2 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 1 \\\\ -3 \\\\ -3 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find rank of the matrix.**", interactiveSteps: [
           { stepText: "Observe $\\mathbf{v}_3 = 2\\mathbf{v}_2$. It is redundant." },
           { stepText: "Check $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_4$. Form matrix and row reduce." },
           { prompt: "Are the remaining vectors independent?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Row reduction shows 3 pivots."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "The dimension is 3." }
        ]},
        { id: "s2", type: "numerical", title: "Count", content: "Dimension?", numericAnswer: 3, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-5-ex4", title: "Exercise 4", description: "Subspace in R4", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Find a basis and dimension for the subspace spanned by:\n$$ \\begin{bmatrix} 1 \\\\ -3 \\\\ 2 \\\\ -4 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 9 \\\\ -6 \\\\ 12 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ -1 \\\\ 4 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} -4 \\\\ 5 \\\\ -3 \\\\ 7 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Notice that $\\mathbf{v}_2 = -3\\mathbf{v}_1$. $\\mathbf{v}_2$ contributes nothing to the dimension.\n\nWe check $\\{\\mathbf{v}_1, \\mathbf{v}_3, \\mathbf{v}_4\\}$. Row reducing the matrix formed by these reveals pivots in all 3 columns.\n\n**Basis:** $\\{\\mathbf{v}_1, \\mathbf{v}_3, \\mathbf{v}_4\\}$.\n**Dimension:** 3." },
        { id: "s2", type: "numerical", title: "Dim", content: "Dimension value?", numericAnswer: 3, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-5-ex5", title: "Exercise 5", description: "Parametric Vector Form", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Let $H = \\{ \\begin{bmatrix} 2a - 3b \\\\ a + b \\\\ 3a - b \\\\ 4a \\end{bmatrix} : a, b \\in \\mathbb{R} \\}$. Find $\\dim H$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Decompose into vectors.**", interactiveSteps: [
           { stepText: "Write the vector as $a\\mathbf{u} + b\\mathbf{v}$." },
           { prompt: "Identify $\\mathbf{u}$ (coeffs of a).", options: [{id:"A", text:"$[2, 1, 3, 4]^T$", isCorrect:true, explanation:""}, {id:"B", text:"$[-3, 1, -1, 0]^T$", isCorrect:false, explanation:"Those are for b."}], stepText: "$\\mathbf{u} = [2, 1, 3, 4]^T$." },
           { stepText: "$\\mathbf{v} = [-3, 1, -1, 0]^T$." },
           { stepText: "Are $\\mathbf{u}$ and $\\mathbf{v}$ multiples? No. So they form a basis." },
           { stepText: "Dimension is 2." }
        ]},
        { id: "s2", type: "numerical", title: "Result", content: "Dimension?", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-5-ex6", title: "Exercise 6", description: "Parametric 3 variables", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Let $H = \\{ \\begin{bmatrix} 3s \\\\ -2s + t \\\\ 4t - 5s \\\\ s + 2t \\end{bmatrix} : s, t \\in \\mathbb{R} \\}$. Find $\\dim H$." },
        { id: "s1", type: "solution", title: "Solution", content: "Decompose:\n$s \\begin{bmatrix} 3 \\\\ -2 \\\\ -5 \\\\ 1 \\end{bmatrix} + t \\begin{bmatrix} 0 \\\\ 1 \\\\ 4 \\\\ 2 \\end{bmatrix}$.\n\nTwo vectors, not multiples. Independent.\nBasis size = 2.\nDimension = 2." },
        { id: "s2", type: "numerical", title: "Dimension", content: "Enter dimension:", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-5-ex7", title: "Exercise 7", description: "Implicit Subspace", icon: "Code",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Let $H = \\{ \\begin{bmatrix} a \\\\ b \\\\ c \end{bmatrix} : a - 3b + c = 0, b - 2c = 0 \\}$. Find the dimension of $H$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve the system.**", interactiveSteps: [
           { stepText: "This is $\\text{Nul } A$ for $A = \\begin{bmatrix} 1 & -3 & 1 \\\\ 0 & 1 & -2 \\end{bmatrix}$." },
           { prompt: "How many free variables?", options: [{id:"A", text:"1", isCorrect:true, explanation:"Cols 1 and 2 are pivots. Col 3 is free."}, {id:"B", text:"2", isCorrect:false, explanation:""}], stepText: "1 free variable ($c$)." },
           { stepText: "The dimension of the Null space is the number of free variables." },
           { stepText: "Dimension = 1." }
        ]},
        { id: "s2", type: "numerical", title: "Result", content: "Dimension?", numericAnswer: 1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-5-ex8", title: "Exercise 8", description: "Implicit R4", icon: "Code",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Let $H = \\{ \\begin{bmatrix} a \\\\ b \\\\ c \\\\ d \\end{bmatrix} : a - 3b + c = 0 \\}$. Find the dimension of $H$." },
        { id: "s1", type: "solution", title: "Solution", content: "The equation $a - 3b + c = 0$ corresponds to a matrix $A = [1 \\ -3 \\ 1 \\ 0]$.\n\nThere is 1 pivot (column 1).\nThere are 3 free variables ($b, c, d$).\n\nThe dimension of the null space is the number of free variables.\n\nDimension = 3." },
        { id: "s2", type: "numerical", title: "Dim", content: "Dimension?", numericAnswer: 3, numericTolerance: 0 }
      ]
    }
  ]
};