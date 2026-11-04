import { Unit } from '../types';

export const UNIT_1_1_7: Unit = {
  id: "unit-1-1-7",
  title: "Finding Spanning Sets",
  description: "Exercises 15-18: Decomposing vectors into linear combinations.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-7-ex15", title: "Exercise 15: 3 Variables", description: "Vectors with r, s, t", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Find a set of vectors $\\{ \\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\}$ in $\\mathbb{R}^4$ that spans the subspace $W$ of all vectors of the form:\n$$ \\begin{bmatrix} 2s + t \\\\ r - s + 2t \\\\ 3r + s \\\\ 2r - s - t \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Isolate the variables $r, s, t$.**", interactiveSteps: [
           { stepText: "Decompose the vector into a sum of three vectors, one for each variable." },
           { prompt: "What is the vector corresponding to $r$?", options: [{id:"A", text:"$r \\begin{bmatrix} 0 \\\\ 1 \\\\ 3 \\\\ 2 \\end{bmatrix}$", isCorrect:true, explanation:"Correct coefficients for r: 0, 1, 3, 2."}, {id:"B", text:"$r \\begin{bmatrix} 1 \\\\ 1 \\\\ 3 \\\\ 2 \\end{bmatrix}$", isCorrect:false, explanation:"The first entry $2s+t$ has no $r$, so the first coefficient must be 0."}], stepText: "Vector for $r$: $\\mathbf{u} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 3 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "Vector for $s$: $\\mathbf{v} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\\\ -1 \\end{bmatrix}$.\nVector for $t$: $\\mathbf{w} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 0 \\\\ -1 \\end{bmatrix}$." },
           { stepText: "Thus, $W = \\text{Span}\\{ \\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\}$." }
        ]}
      ]
    },
    {
      id: "les-1-1-7-ex16", title: "Exercise 16: 3 Variables", description: "Vectors with b, c, d", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Let $W$ be the set of all vectors of the form $\\begin{bmatrix} b - c \\\\ 2b + 3d \\\\ b + 3c - 3d \\\\ c + d \\end{bmatrix}$. Find a spanning set for $W$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Factor out $b, c, d$.**", interactiveSteps: [
           { stepText: "Write the general vector as a linear combination: $b\\mathbf{v}_1 + c\\mathbf{v}_2 + d\\mathbf{v}_3$." },
           { prompt: "Identify $\\mathbf{v}_1$ (coefficients of $b$).", options: [{id:"A", text:"$[1, 2, 1, 0]^T$", isCorrect:true, explanation:"Coefficients of $b$ are 1, 2, 1, 0."}, {id:"B", text:"$[1, 2, 1, 1]^T$", isCorrect:false, explanation:"The last entry is $c+d$, which has 0 $b$."}], stepText: "$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "Similarly, $\\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 3 \\\\ 1 \\end{bmatrix}$ and $\\mathbf{v}_3 = \\begin{bmatrix} 0 \\\\ 3 \\\\ -3 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "The set $\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3 \\}$ spans $W$." }
        ]}
      ]
    },
    {
      id: "les-1-1-7-ex17", title: "Exercise 17: The Trap", description: "Constants vs Scalars", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Let $W$ be the set of vectors of the form $\\begin{bmatrix} 2a + 3b \\\\ -1 \\\\ 2a - 5b \\end{bmatrix}$. \n\nEither find a spanning set for $W$ or explain why $W$ is not a vector space." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check the zero vector.**", interactiveSteps: [
           { prompt: "Can the vector $\\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$ exist in $W$?", options: [{id:"A", text:"Yes, if $a=0, b=0$.", isCorrect:false, explanation:"That gives $[0, -1, 0]^T$."}, {id:"B", text:"No, the second entry is fixed at -1.", isCorrect:true, explanation:"The constant -1 prevents the vector from ever being zero."}], stepText: "The second entry is always $-1$, so the zero vector $\\mathbf{0}$ is never in $W$." },
           { stepText: "Since $W$ does not contain the zero vector, it is **not** a vector space." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Concept", content: "A spanning set implies the set is a subspace. If a set is not a subspace, it cannot have a spanning set in the vector space sense because it fails ___.", blankAnswer: "closure" }
      ]
    },
    {
      id: "les-1-1-7-ex18", title: "Exercise 18: 3 Variables", description: "Vectors with a, b, c", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Find a spanning set for the set of vectors of the form $\\begin{bmatrix} 4a + 3b \\\\ 0 \\\\ a + 3b + c \\\\ 3b - 2c \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Decompose.**", interactiveSteps: [
           { stepText: "Split into components for $a, b, c$." },
           { prompt: "Identify the vector for $c$.", options: [{id:"A", text:"$[0, 0, 1, -2]^T$", isCorrect:true, explanation:"Coefficients of c."}, {id:"B", text:"$[0, 0, 1, 2]^T$", isCorrect:false, explanation:"Check the sign on the last entry."}], stepText: "The spanning set is $\\left\\{ \\begin{bmatrix} 4 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 3 \\\\ 0 \\\\ 3 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\\\ -2 \\end{bmatrix} \\right\\}$." },
           { stepText: "Since the set can be written as a Span, it is a vector space." }
        ]}
      ]
    }
  ]
};