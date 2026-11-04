import { Unit } from '../types';

export const UNIT_1_2_10: Unit = {
  id: "unit-1-2-10",
  title: "Subspace Dimensions",
  description: "Exercises 15-16: Determining the vector space $\\mathbb{R}^k$.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-10-ex15", title: "Exercise 15: 3x4 Matrix", description: "Analysis of A", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Let $A = \\begin{bmatrix} 2 & 4 & -2 & 1 \\\\ -2 & -5 & 7 & 3 \\\\ 3 & 7 & -8 & 6 \\end{bmatrix}$.\n\na. Find $k$ such that $\\text{Nul } A$ is a subspace of $\\mathbb{R}^k$.\nb. Find $k$ such that $\\text{Col } A$ is a subspace of $\\mathbb{R}^k$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify dimensions $m$ and $n$.**", interactiveSteps: [
           { stepText: "The matrix $A$ has $m=3$ rows and $n=4$ columns." },
           { prompt: "The Null Space consists of vectors $\\mathbf{x}$ such that $A\\mathbf{x}=\\mathbf{0}$. For the multiplication to be defined, how many entries must $\\mathbf{x}$ have?", options: [{id:"A", text:"3 (rows)", isCorrect:false, explanation:"No, we multiply rows by columns."}, {id:"B", text:"4 (columns)", isCorrect:true, explanation:"$A$ has 4 columns, so $\\mathbf{x}$ must be $4 \\times 1$."}], stepText: "Since $\\mathbf{x}$ has 4 entries, $\\text{Nul } A$ is a subspace of $\\mathbb{R}^4$. ($k=4$)" },
           { prompt: "The Column Space is the span of the columns. How many entries does each column have?", options: [{id:"A", text:"3 (rows)", isCorrect:true, explanation:"Each column is a vector in $\\mathbb{R}^3$."}, {id:"B", text:"4 (columns)", isCorrect:false, explanation:""}], stepText: "Since the columns live in $\\mathbb{R}^3$, $\\text{Col } A$ is a subspace of $\\mathbb{R}^3$. ($k=3$)" }
        ]}
      ]
    },
    {
      id: "les-1-2-10-ex16", title: "Exercise 16: 4x5 Matrix", description: "Analysis of A", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Let $A = \\begin{bmatrix} 1 & 3 & 4 & -1 & 2 \\\\ 2 & 6 & 6 & 0 & -3 \\\\ 3 & 9 & 3 & 6 & -3 \\\\ 3 & 9 & 0 & 9 & 0 \\end{bmatrix}$.\n\nFind $k$ for $\\text{Nul } A$ and $\\text{Col } A$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Count Rows and Columns.**", interactiveSteps: [
           { stepText: "Count the dimensions of $A$." },
           { prompt: "How many columns does $A$ have?", options: [{id:"A", text:"4", isCorrect:false, explanation:""}, {id:"B", text:"5", isCorrect:true, explanation:"Columns correspond to the input variables."}], stepText: "$A$ has 5 columns. Thus, any solution $\\mathbf{x}$ to $A\\mathbf{x}=\\mathbf{0}$ must have 5 entries. $\\text{Nul } A \\subseteq \\mathbb{R}^5$." },
           { prompt: "How many rows does $A$ have?", options: [{id:"A", text:"4", isCorrect:true, explanation:"Rows determine the height of the column vectors."}, {id:"B", text:"5", isCorrect:false, explanation:""}], stepText: "$A$ has 4 rows. Thus, the columns are vectors with 4 entries. $\\text{Col } A \\subseteq \\mathbb{R}^4$." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "General Rule", content: "For an $m \\times n$ matrix, the Null Space is in $\\mathbb{R}^n$ and the Column Space is in $\\mathbb{R}^m$. The exponent $k$ corresponds to the number of ___ for Nul A and ___ for Col A.", blankAnswer: "columns rows" }
      ]
    }
  ]
};