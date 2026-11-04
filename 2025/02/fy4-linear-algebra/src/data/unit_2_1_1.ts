import { Unit } from '../types';

export const UNIT_2_1_1: Unit = {
  id: "unit-2-1-1",
  title: "Unique Representation & Coordinates",
  description: "Theorem 7, Definition of Coordinates, and Examples 1 & 2.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-1-thm7", title: "Theorem 7: Unique Representation", description: "Proving representations are unique", icon: "Anchor",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a set of vectors spans a space, can a vector be written as a linear combination of them in more than one way?", options: [{id:"A", text:"Yes, if the set is linearly dependent.", isCorrect:true, explanation:"Redundant vectors allow multiple combinations. A basis removes this redundancy."}, {id:"B", text:"No, it is always unique.", isCorrect:false, explanation:"It is only unique if the set is a basis (linearly independent)."}] },
        { id: "s1", type: "theory", title: "Theorem 7: The Unique Representation Theorem", content: "Let $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ be a basis for a vector space $V$.\n\nThen for each $\\mathbf{x}$ in $V$, there exists a **unique** set of scalars $c_1, \\dots, c_n$ such that:\n$$ \\mathbf{x} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n $$" },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the scalars $c_i$ are unique.**", interactiveSteps: [
           { stepText: "Suppose $\\mathbf{x}$ has two representations:\n$\\mathbf{x} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n$\n$\\mathbf{x} = d_1\\mathbf{b}_1 + \\dots + d_n\\mathbf{b}_n$" },
           { prompt: "Subtract the two equations. What is $\\mathbf{x} - \\mathbf{x}$?", options: [{id:"A", text:"$\\mathbf{0}$", isCorrect:true, explanation:"A vector minus itself is the zero vector."}, {id:"B", text:"$1$", isCorrect:false, explanation:""}], stepText: "Subtracting yields:\n$ \\mathbf{0} = (c_1 - d_1)\\mathbf{b}_1 + \\dots + (c_n - d_n)\\mathbf{b}_n $" },
           { prompt: "Since $\\mathcal{B}$ is a basis, its vectors are linearly independent. What does this imply about the weights $(c_i - d_i)$?", options: [{id:"A", text:"They must all be zero.", isCorrect:true, explanation:"The only solution to $w_1\\mathbf{b}_1 + \\dots = \\mathbf{0}$ for an independent set is the trivial solution."}, {id:"B", text:"They must sum to 1.", isCorrect:false, explanation:""}], stepText: "Because $\\mathcal{B}$ is independent, $c_i - d_i = 0$ for all $i$." },
           { stepText: "Therefore, $c_i = d_i$ for all $1 \\le i \\le n$. The representation is perfectly unique! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-2-1-1-def", title: "Definition: Coordinates", description: "Defining the coordinate vector", icon: "MapPin",
      slides: [
        { id: "s0", type: "theory", title: "Coordinate Definition", content: "Suppose $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ is a basis for $V$ and $\\mathbf{x}$ is in $V$. The **coordinates of x relative to the basis $\\mathcal{B}$** (or the $\\mathcal{B}$-coordinates of $\\mathbf{x}$) are the weights $c_1, \\dots, c_n$ such that $\\mathbf{x} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n$.\n\nIf $c_1, \\dots, c_n$ are the $\\mathcal{B}$-coordinates of $\\mathbf{x}$, then the vector in $\\mathbb{R}^n$\n$$ [\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} c_1 \\\\ \\vdots \\\\ c_n \\end{bmatrix} $$\nis the **coordinate vector of x (relative to $\\mathcal{B}$)**." },
        { id: "s1", type: "quiz", title: "Understanding the mapping", content: "If $V$ is a vector space of polynomials $\\mathbb{P}_2$ (which has dimension 3), in what space does the coordinate vector $[\\mathbf{x}]_\\mathcal{B}$ live?", options: [{id:"A", text:"$\\mathbb{R}^3$", isCorrect:true, explanation:"Since the basis has 3 elements, the coordinate vector will have 3 entries."}, {id:"B", text:"$\\mathbb{P}_2$", isCorrect:false, explanation:"The coordinate vector is always a column of numbers in $\\mathbb{R}^n$."}] }
      ]
    },
    {
      id: "les-2-1-1-ex1-2", title: "Examples 1 & 2", description: "Calculating and interpreting coordinates", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Consider a basis $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2\\}$ for $\\mathbb{R}^2$, where $\\mathbf{b}_1 = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{b}_2 = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$.\n\nSuppose an $\\mathbf{x}$ in $\\mathbb{R}^2$ has the coordinate vector $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -2 \\\\ 3 \\end{bmatrix}$. Find $\\mathbf{x}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use the definition of coordinates to reconstruct x.**", interactiveSteps: [
           { stepText: "The $\\mathcal{B}$-coordinates tell us how to build $\\mathbf{x}$ from the vectors in $\\mathcal{B}$." },
           { prompt: "Write out the linear combination using the coordinates.", options: [{id:"A", text:"$\\mathbf{x} = -2\\mathbf{b}_1 + 3\\mathbf{b}_2$", isCorrect:true, explanation:"The coordinates are exactly the weights for the basis vectors."}, {id:"B", text:"$\\mathbf{x} = 1(-2) + 0(3)$", isCorrect:false, explanation:"We must multiply the scalars by the vectors, not the entries of the vectors by the scalars directly."}], stepText: "$\\mathbf{x} = -2 \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + 3 \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{x} = \\begin{bmatrix} -2 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 6 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "example_q", title: "Example 2: The Standard Basis", content: "**Problem:** Notice that the entries in the vector $\\mathbf{x} = \\begin{bmatrix} 1 \\\\ 6 \\end{bmatrix}$ are exactly its coordinates relative to the standard basis $\\mathcal{E} = \\{\\mathbf{e}_1, \\mathbf{e}_2\\}$." },
        { id: "s3", type: "solution", title: "Verification", content: "Since $\\begin{bmatrix} 1 \\\\ 6 \\end{bmatrix} = 1 \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + 6 \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = 1\\mathbf{e}_1 + 6\\mathbf{e}_2$.\n\nIf $\\mathcal{E} = \\{\\mathbf{e}_1, \\mathbf{e}_2\\}$, then $[\\mathbf{x}]_\\mathcal{E} = \\mathbf{x}$.\n\nThis is why we usually don't write $[\\mathbf{x}]_\\mathcal{E}$ when working in standard coordinates!" },
        { id: "s4", type: "numerical", title: "Quick Calculation", content: "If $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2\\}$ and $\\mathbf{x} = 4\\mathbf{b}_1 - 7\\mathbf{b}_2$, what is the second entry of $[\\mathbf{x}]_\\mathcal{B}$?", numericAnswer: -7, numericTolerance: 0 }
      ]
    }
  ]
};