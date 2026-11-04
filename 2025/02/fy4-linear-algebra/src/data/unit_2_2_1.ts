import { Unit } from '../types';

export const UNIT_2_2_1: Unit = {
  id: "unit-2-2-1",
  title: "The Dimension of a Vector Space",
  description: "Theorems 9 & 10, Definitions, and Examples 1-4.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-1-thm9-10", title: "Definition & Theorems", description: "Dimension basics", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "Definition: Dimension", content: "If a vector space $V$ is spanned by a finite set, then $V$ is said to be **finite-dimensional**, and the **dimension** of $V$, written as $\\dim V$, is the number of vectors in a basis for $V$.\n\nThe dimension of the zero vector space $\\{\\mathbf{0}\\}$ is defined to be zero.\n\nIf $V$ is not spanned by a finite set, $V$ is said to be **infinite-dimensional**." },
        { id: "s1", type: "quiz", title: "Conceptual Check 1", content: "What determines the dimension of a vector space?", options: [{id:"A", text:"The total number of vectors in the space.", isCorrect:false, explanation:"A vector space usually contains infinitely many vectors."}, {id:"B", text:"The number of vectors in a basis.", isCorrect:true, explanation:"A basis is the minimal spanning set, so its count defines dimension."}] },
        { id: "s2", type: "quiz", title: "Conceptual Check 2", content: "Can a finite-dimensional space have a basis with infinite vectors?", options: [{id:"A", text:"Yes, if it's really big.", isCorrect:false, explanation:""}, {id:"B", text:"No, finite-dimensional means the basis is finite.", isCorrect:true, explanation:"By definition, it is spanned by a finite set."}] },
        { id: "s3", type: "interactive_canvas", title: "Visualizing Dimension", content: "Dimension corresponds to degrees of freedom: 0 (point), 1 (line), 2 (plane), 3 (space).", interactiveCanvasId: "subspace-dimensions-interactive" },
        { id: "s4", type: "proof", title: "Proof: Theorem 9", content: "**Theorem 9:** If a vector space $V$ has a basis $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$, then any set in $V$ containing more than $n$ vectors must be linearly dependent.\n\n**Proof Steps:**", interactiveSteps: [
           { stepText: "Let $S = \\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ be a set in $V$ with $p > n$." },
           { prompt: "Consider the coordinate vectors $[\\mathbf{u}_1]_\\mathcal{B}, \\dots, [\\mathbf{u}_p]_\\mathcal{B}$ in $\\mathbb{R}^n$. How many vectors are there?", options: [{id:"A", text:"$n$ vectors", isCorrect:false, explanation:""}, {id:"B", text:"$p$ vectors", isCorrect:true, explanation:"There are $p$ vectors in the set S."}], stepText: "There are $p$ coordinate vectors in $\\mathbb{R}^n$." },
           { prompt: "Since $p > n$, what do we know about any set of $p$ vectors in $\\mathbb{R}^n$?", options: [{id:"A", text:"They must be linearly dependent.", isCorrect:true, explanation:"More vectors than entries implies dependence (Theorem 8 in Ch 1)."}, {id:"B", text:"They must be independent.", isCorrect:false, explanation:""}], stepText: "The coordinate vectors are linearly dependent." },
           { stepText: "Since the coordinate mapping is an isomorphism (preserves independence), the original set $S$ in $V$ must also be linearly dependent." }
        ]},
        { id: "s5", type: "numerical", title: "Check Dimension", content: "What is the dimension of $\\mathbb{R}^5$?", numericAnswer: 5, numericTolerance: 0 },
        { id: "s6", type: "fill_in_blank", title: "Theorem 10", content: "Theorem 10 states that if a vector space $V$ has a basis of $n$ vectors, then every basis of $V$ must consist of exactly ___ vectors.", blankAnswer: "n" }
      ]
    },
    {
      id: "les-2-2-1-ex1-4", title: "Examples of Dimension", description: "Standard spaces & subspaces", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1: Standard Spaces", content: "**Problem:** Find the dimension of $\\mathbb{R}^n$ and $\\mathbb{P}_n$." },
        { id: "s1", type: "solution", title: "Solution", content: "The standard basis for $\\mathbb{R}^n$ contains $n$ vectors $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$. Thus $\\dim \\mathbb{R}^n = n$.\n\nThe standard basis for $\\mathbb{P}_n$ is $\\{1, t, t^2, \\dots, t^n\\}$. Counting these, we find there are $n+1$ vectors.\nThus $\\dim \\mathbb{P}_n = n+1$." },
        { id: "s2", type: "example_q", title: "Example 2: Subspace H", content: "**Problem:** Let $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ where $\\mathbf{v}_1 = [3, 6, 2]^T$ and $\\mathbf{v}_2 = [-1, 0, 1]^T$. Find $\\dim H$." },
        { id: "s3", type: "solution", title: "Solution", content: "Since $\\mathbf{v}_1$ and $\\mathbf{v}_2$ are not multiples of each other, they are linearly independent.\nThus $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is a basis for $H$.\nCounting the basis vectors, we see $\\dim H = 2$." },
        { id: "s4", type: "numerical", title: "Quick Check", content: "What is the dimension of the subspace of $\\mathbb{R}^3$ spanned by $\\{[1,0,0], [0,1,0], [0,0,1], [1,1,1]\\}$?", numericAnswer: 3, numericTolerance: 0 },
        { id: "s5", type: "example_q", title: "Example 4: Subspaces of R3", content: "Subspaces of $\\mathbb{R}^3$ can be classified by dimension:\n- 0-dim: The zero subspace (Origin).\n- 1-dim: Lines through the origin.\n- 2-dim: Planes through the origin.\n- 3-dim: $\\mathbb{R}^3$ itself." }
      ]
    },
    {
      id: "les-2-2-1-ex3", title: "Example 3: Constructing a Basis", description: "Finding dimension", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Find the dimension of the subspace $H$ of $\\mathbb{R}^4$ defined by:\n$$ H = \\left\\{ \\begin{bmatrix} a - 3b + 6c \\\\ 5a + 4d \\\\ b - 2c - d \\\\ 5d \\end{bmatrix} : a,b,c,d \\in \\mathbb{R} \\right\\} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Extract spanning vectors.**", interactiveSteps: [
           { stepText: "Decompose the generic vector into linear combinations of $a, b, c, d$." },
           { prompt: "What is the vector for $a$?", options: [{id:"A", text:"$[1, 5, 0, 0]^T$", isCorrect:true, explanation:"Coefficients of a."}, {id:"B", text:"$[1, 5, 1, 0]^T$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{v}_1 = [1, 5, 0, 0]^T$." },
           { stepText: "Similarly: $\\mathbf{v}_2 = [-3, 0, 1, 0]^T$ (for $b$)\n$\\mathbf{v}_3 = [6, 0, -2, 0]^T$ (for $c$)\n$\\mathbf{v}_4 = [0, 4, -1, 5]^T$ (for $d$)." },
           { stepText: "Observe that $\\mathbf{v}_3 = -2\\mathbf{v}_2$. So $\\mathbf{v}_3$ is redundant." },
           { stepText: "The remaining vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_4\\}$ are linearly independent (verify by looking at zeros). Thus, they form a basis. $\\dim H = 3$." }
        ]}
      ]
    }
  ]
};