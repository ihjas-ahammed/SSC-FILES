import { Unit } from '../types';

export const UNIT_2_1_4: Unit = {
  id: "unit-2-1-4",
  title: "The Coordinate Mapping Isomorphism",
  description: "Theorem 8, Isomorphisms, and Examples 5-7.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-4-iso", title: "Theorem 8: Isomorphisms", description: "Mapping abstract spaces to R^n", icon: "Share2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Does the mapping $\\mathbf{x} \\mapsto [\\mathbf{x}]_\\mathcal{B}$ preserve vector addition?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Because if you add two vectors, their coordinate weights simply add together."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s1", type: "theory", title: "Theorem 8", content: "Let $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ be a basis for a vector space $V$.\n\nThen the coordinate mapping $\\mathbf{x} \\mapsto [\\mathbf{x}]_\\mathcal{B}$ is a **one-to-one linear transformation** from $V$ onto $\\mathbb{R}^n$." },
        { id: "s2", type: "proof", title: "Proof Sketch of Linearity", content: "**Goal: Show $[\\mathbf{u} + \\mathbf{w}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{w}]_\\mathcal{B}$.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{u} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n$ and $\\mathbf{w} = d_1\\mathbf{b}_1 + \\dots + d_n\\mathbf{b}_n$." },
           { prompt: "What is $\\mathbf{u} + \\mathbf{w}$?", options: [{id:"A", text:"$(c_1+d_1)\\mathbf{b}_1 + \\dots + (c_n+d_n)\\mathbf{b}_n$", isCorrect:true, explanation:"Combine like terms."}, {id:"B", text:"$c_1 d_1 \\mathbf{b}_1 + \\dots$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u} + \\mathbf{w} = (c_1+d_1)\\mathbf{b}_1 + \\dots + (c_n+d_n)\\mathbf{b}_n$." },
           { stepText: "The coordinates of the sum are exactly the sums of the coordinates! $[\\mathbf{u} + \\mathbf{w}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{w}]_\\mathcal{B}$. Scalar multiplication works exactly the same way." }
        ]},
        { id: "s3", type: "theory", title: "Isomorphism", content: "A one-to-one linear transformation from a vector space $V$ onto a vector space $W$ is called an **isomorphism** (from Greek: *iso* meaning 'same', and *morph* meaning 'form').\n\nEvery vector space calculation in $V$ is accurately reproduced in $W$, and vice versa. An abstract vector space with an $n$-vector basis is mathematically indistinguishable from $\\mathbb{R}^n$!" }
      ]
    },
    {
      id: "les-2-1-4-ex5-6", title: "Examples 5 & 6", description: "Polynomial Isomorphisms", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Example 5", content: "Let $\\mathcal{B}$ be the standard basis of the space $\\mathbb{P}_3$ of polynomials: $\\mathcal{B} = \\{1, t, t^2, t^3\\}$.\n\nA typical element $\\mathbf{p}$ in $\\mathbb{P}_3$ has the form:\n$\\mathbf{p}(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$.\n\nWhat is the coordinate vector $[\\mathbf{p}]_\\mathcal{B}$?" },
        { id: "s1", type: "solution", title: "Solution Ex 5", content: "Since $\\mathbf{p}$ is already displayed as a linear combination of standard basis vectors, the coordinate vector is simply the vector of coefficients:\n$$ [\\mathbf{p}]_\\mathcal{B} = \\begin{bmatrix} a_0 \\\\ a_1 \\\\ a_2 \\\\ a_3 \\end{bmatrix} $$\nThus, the mapping $\\mathbf{p} \\mapsto [\\mathbf{p}]_\\mathcal{B}$ is an isomorphism from $\\mathbb{P}_3$ onto $\\mathbb{R}^4$." },
        { id: "s2", type: "example_q", title: "Example 6", content: "**Problem:** Use coordinate vectors to verify that the polynomials $1+2t^2$, $4+t+5t^2$, and $3+2t$ are linearly dependent in $\\mathbb{P}_2$." },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Map to $\\mathbb{R}^3$ and check for dependence.**", interactiveSteps: [
           { stepText: "Map each polynomial to its coordinate vector in $\\mathbb{R}^3$ using basis $\\{1, t, t^2\\}$." },
           { prompt: "What is the coordinate vector of $1+2t^2$?", options: [{id:"A", text:"$[1, 0, 2]^T$", isCorrect:true, explanation:"Constant is 1, t is 0, t^2 is 2."}, {id:"B", text:"$[1, 2, 0]^T$", isCorrect:false, explanation:""}], stepText: "Vector 1: $[1, 0, 2]^T$." },
           { stepText: "Vector 2 ($4+t+5t^2$): $[4, 1, 5]^T$.\nVector 3 ($3+2t$): $[3, 2, 0]^T$." },
           { stepText: "Place these as columns in a matrix $A$ and row reduce:\n$\\begin{bmatrix} 1 & 4 & 3 \\\\ 0 & 1 & 2 \\\\ 2 & 5 & 0 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 4 & 3 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{bmatrix}$" },
           { stepText: "Since there is a row of zeros (and only 2 pivots for 3 columns), the columns are linearly dependent. Because of the isomorphism, the original polynomials are also linearly dependent!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex7", title: "Example 7", description: "Subspaces and Isomorphisms", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Example 7", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 3 \\\\ 6 \\\\ 2 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 3 \\\\ 12 \\\\ 7 \\end{bmatrix}$, and let $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2\\}$. \n\nThen $\\mathcal{B}$ is a basis for $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$. Determine if $\\mathbf{x}$ is in $H$, and if so, find $[\\mathbf{x}]_\\mathcal{B}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "Set up the augmented matrix $[\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ | \\ \\mathbf{x}]$." },
           { stepText: "Matrix is $\\begin{bmatrix} 3 & -1 & 3 \\\\ 6 & 0 & 12 \\\\ 2 & 1 & 7 \\end{bmatrix}$." },
           { prompt: "Row reduce. Is the system consistent?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Row reduction gives [1 0 2; 0 1 3; 0 0 0]."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "The RREF is $\\begin{bmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 0 \\end{bmatrix}$. The system is consistent, so $\\mathbf{x}$ is in $H$!" },
           { stepText: "From the RREF, $c_1 = 2$ and $c_2 = 3$. Therefore, $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$." }
        ]},
        { id: "s2", type: "theory", title: "Geometric Meaning", content: "Even though $H$ lives inside 3-dimensional space $\\mathbb{R}^3$, the coordinate mapping identifies $H$ completely with $\\mathbb{R}^2$. The coordinate system on $H$ determined by $\\mathcal{B}$ makes $H$ isomorphic to $\\mathbb{R}^2$." }
      ]
    }
  ]
};