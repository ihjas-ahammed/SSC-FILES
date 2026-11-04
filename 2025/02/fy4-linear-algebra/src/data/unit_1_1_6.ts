import { Unit } from '../types';

export const UNIT_1_1_6: Unit = {
  id: "unit-1-1-6",
  title: "Spanning Sets Exercises",
  description: "Exercises 9-15: Describing subspaces as Spans.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-6-ex9", title: "Exercise 9", description: "Find vector v", icon: "ArrowRightCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Let $H$ be the set of all vectors of the form $\\begin{bmatrix} -2t \\\\ 5t \\\\ 3t \\end{bmatrix}$. Find a vector $\\mathbf{v}$ in $\\mathbb{R}^3$ such that $H = \\text{Span}\\{\\mathbf{v}\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Factor out the parameter $t$.**", interactiveSteps: [
           { stepText: "Write the general vector: $\\mathbf{x} = \\begin{bmatrix} -2t \\\\ 5t \\\\ 3t \\end{bmatrix}$." },
           { prompt: "Factor out $t$ from the vector.", options: [{id:"A", text:"$t \\begin{bmatrix} -2 \\\\ 5 \\\\ 3 \\end{bmatrix}$", isCorrect:true, explanation:"Correct scalar multiplication."}, {id:"B", text:"$t \\begin{bmatrix} -2 \\\\ 5 \\\\ 0 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x} = t \\begin{bmatrix} -2 \\\\ 5 \\\\ 3 \\end{bmatrix}$." },
           { stepText: "Thus, every vector in $H$ is a multiple of $\\mathbf{v} = \\begin{bmatrix} -2 \\\\ 5 \\\\ 3 \\end{bmatrix}$. So $H = \\text{Span}\\{\\mathbf{v}\\}$." }
        ]},
        { id: "s2", type: "quiz", title: "Subspace Check", content: "Is $H$ a subspace of $\\mathbb{R}^3$?", options: [{id:"A", text:"Yes, because it is a Span.", isCorrect:true, explanation:"Theorem 1: Any span of vectors is a subspace."}, {id:"B", text:"No", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-1-1-6-ex10", title: "Exercise 10", description: "Another Span", icon: "ArrowRightCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Let $H$ be the set of all vectors of the form $\\begin{bmatrix} 3t \\\\ 0 \\\\ -7t \\end{bmatrix}$, where $t$ is any real number. Show that $H$ is a subspace of $\\mathbb{R}^3$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Express as a Span.**", interactiveSteps: [
           { prompt: "Factor out $t$.", options: [{id:"A", text:"$t \\begin{bmatrix} 3 \\\\ 1 \\\\ -7 \\end{bmatrix}$", isCorrect:false, explanation:"The middle entry is 0, not $t$."}, {id:"B", text:"$t \\begin{bmatrix} 3 \\\\ 0 \\\\ -7 \\end{bmatrix}$", isCorrect:true, explanation:"Correct."}], stepText: "$H = \\text{Span} \\left\\{ \\begin{bmatrix} 3 \\\\ 0 \\\\ -7 \\end{bmatrix} \\right\\}$." },
           { stepText: "Since $H$ is the subspace spanned by a vector, it is a subspace of $\\mathbb{R}^3$." }
        ]}
      ]
    },
    {
      id: "les-1-1-6-ex11", title: "Exercise 11", description: "Plane through Origin", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Let $W$ be the set of all vectors of the form $\\begin{bmatrix} 2b + 3c \\\\ -b \\\\ 2c \\end{bmatrix}$, where $b$ and $c$ are arbitrary. Find vectors $\\mathbf{u}$ and $\\mathbf{v}$ such that $W = \\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Decompose the vector.**", interactiveSteps: [
           { stepText: "Separate the terms involving $b$ and $c$:\n$\\begin{bmatrix} 2b \\\\ -b \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 3c \\\\ 0 \\\\ 2c \\end{bmatrix}$." },
           { prompt: "Factor $b$ and $c$.", options: [{id:"A", text:"$b \\begin{bmatrix} 2 \\\\ -1 \\\\ 0 \\end{bmatrix} + c \\begin{bmatrix} 3 \\\\ 0 \\\\ 2 \\end{bmatrix}$", isCorrect:true, explanation:""}, {id:"B", text:"$b \\begin{bmatrix} 2 \\\\ 1 \\\\ 0 \\end{bmatrix} + c \\begin{bmatrix} 3 \\\\ 0 \\\\ 2 \\end{bmatrix}$", isCorrect:false, explanation:"Check the sign on the second entry."}], stepText: "So $\\mathbf{u} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 3 \\\\ 0 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "Thus $W = \\text{Span}\\{\\mathbf{u}, \\mathbf{v}\\}$." }
        ]}
      ]
    },
    {
      id: "les-1-1-6-ex12", title: "Exercise 12", description: "Vectors in R4", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Let $W$ be the set of vectors of the form $\\begin{bmatrix} 2s + 4t \\\\ 2s \\\\ 2s - 3t \\\\ 5t \\end{bmatrix}$. Show that $W$ is a subspace of $\\mathbb{R}^4$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Write as Span.**", interactiveSteps: [
           { stepText: "Decompose into $s$-vector and $t$-vector:\n$s \\begin{bmatrix} 2 \\\\ 2 \\\\ 2 \\\\ 0 \\end{bmatrix} + t \\begin{bmatrix} 4 \\\\ 0 \\\\ -3 \\\\ 5 \\end{bmatrix}$." },
           { stepText: "This shows $W$ is the span of two vectors in $\\mathbb{R}^4$." },
           { stepText: "Therefore, $W$ is a subspace by Theorem 1." }
        ]}
      ]
    },
    {
      id: "les-1-1-6-ex13-14", title: "Exercise 13 & 14", description: "Membership in Subspaces", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 2 \\\\ 1 \\\\ 3 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 4 \\\\ 2 \\\\ 6 \\end{bmatrix}, \\mathbf{w} = \\begin{bmatrix} 3 \\\\ 1 \\\\ 2 \\end{bmatrix}$.\n\na. Is $\\mathbf{w}$ in $\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3 \\}$?" },
        { id: "s1", type: "quiz", title: "Part A Check", content: "Is $\\mathbf{w}$ literally one of the vectors in the set?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"[3,1,2] is not [1,0,-1], [2,1,3], or [4,2,6]."}, {id:"B", text:"No", isCorrect:true, explanation:"It is distinct from the three listed vectors."}] },
        { id: "s2", type: "example_q", title: "Part B", content: "b. Is $\\mathbf{w}$ in $\\text{Span}\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3 \\}$?" },
        { id: "s3", type: "solution", title: "Solution Part B", content: "We must solve $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3 = \\mathbf{w}$.\n\nNotice that $\\mathbf{w} = \\mathbf{v}_1 + \\mathbf{v}_2$: \n$\\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix} + \\begin{bmatrix} 2 \\\\ 1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 1 \\\\ 2 \\end{bmatrix}$.\n\nSo **Yes**, $\\mathbf{w}$ is in the span." }
      ]
    },
    {
      id: "les-1-1-6-ex15", title: "Exercise 15", description: "Column Space Construction", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Let $W$ be the set of all vectors of the form $\\begin{bmatrix} 3a - 5b \\\\ 3b + c \\\\ a \\end{bmatrix}$. Find a matrix $A$ such that $W = \\text{Col } A$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify the columns.**", interactiveSteps: [
           { stepText: "Expand the general vector: $a \\begin{bmatrix} 3 \\\\ 0 \\\\ 1 \\end{bmatrix} + b \\begin{bmatrix} -5 \\\\ 3 \\\\ 0 \\end{bmatrix} + c \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}$." },
           { prompt: "The matrix $A$ consists of these vectors as columns. What is $A$?", options: [{id:"A", text:"$\\begin{bmatrix} 3 & -5 & 0 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 0 \\end{bmatrix}$", isCorrect:true, explanation:"Correct columns."}, {id:"B", text:"$\\begin{bmatrix} 3 & 0 & 1 \\\\ -5 & 3 & 0 \\\\ 0 & 1 & 0 \\end{bmatrix}$", isCorrect:false, explanation:"Those are the rows, not columns."}], stepText: "So $A = \\begin{bmatrix} 3 & -5 & 0 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 0 \\end{bmatrix}$." }
        ]}
      ]
    }
  ]
};