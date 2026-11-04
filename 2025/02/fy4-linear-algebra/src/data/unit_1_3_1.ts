import { Unit } from '../types';

export const UNIT_1_3_1: Unit = {
  id: "unit-1-3-1",
  title: "Linearly Independent Sets & Bases",
  description: "Theorem 4, Linear Independence in various spaces, and the Definition of a Basis.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-1-thm4", title: "Theorem 4: Characterization of Lin. Dep.", description: "Preceding vectors theorem", icon: "GitCommit",
      slides: [
        { id: "s0", type: "theory", title: "Linear Independence", content: "**Definition:** An indexed set of vectors $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ in $V$ is said to be **linearly independent** if the vector equation\n$$ c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\dots + c_p\\mathbf{v}_p = \\mathbf{0} $$\nhas *only* the trivial solution $c_1 = \\dots = c_p = 0$.\n\nOtherwise, the set is **linearly dependent**." },
        { id: "s1", type: "quiz", title: "Conceptual Check 1", content: "If a set contains the zero vector $\\mathbf{0}$, is it linearly independent?", options: [{id:"A", text:"Yes, usually.", isCorrect:false, explanation:"The zero vector can be multiplied by any non-zero scalar to equal zero."}, {id:"B", text:"No, never.", isCorrect:true, explanation:"$1 \\cdot \\mathbf{0} = \\mathbf{0}$ provides a non-trivial linear combination."}] },
        { id: "s2", type: "quiz", title: "Conceptual Check 2", content: "Geometrically, what does linear dependence of two vectors $\\mathbf{v}_1, \\mathbf{v}_2$ mean?", options: [{id:"A", text:"They are perpendicular.", isCorrect:false, explanation:"That is orthogonality."}, {id:"B", text:"One is a scalar multiple of the other.", isCorrect:true, explanation:"They lie on the same line through the origin."}] },
        { id: "s3", type: "interactive_canvas", title: "Visualizing Dependence", content: "In $\\mathbb{R}^2$, three vectors are always linearly dependent because you can reach any point (including $\\mathbf{0}$) using just two basis vectors.", interactiveCanvasId: "vector-space-interactive" },
        { id: "s4", type: "proof", title: "Proof: Theorem 4", content: "**Theorem 4:** An indexed set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ of two or more vectors, with $\\mathbf{v}_1 \\neq \\mathbf{0}$, is linearly dependent if and only if some $\\mathbf{v}_j$ (with $j > 1$) is a linear combination of the preceding vectors $\\mathbf{v}_1, \dots, \\mathbf{v}_{j-1}$.\n\n**Proof Steps:**", interactiveSteps: [
           { stepText: "Suppose $\\mathbf{v}_j = c_1\\mathbf{v}_1 + \\dots + c_{j-1}\\mathbf{v}_{j-1}$." },
           { prompt: "Rearrange this equation to equal $\\mathbf{0}$. What is the coefficient of $\\mathbf{v}_j$?", options: [{id:"A", text:"0", isCorrect:false, explanation:""}, {id:"B", text:"-1", isCorrect:true, explanation:"Subtract $\\mathbf{v}_j$ from both sides."}], stepText: "$c_1\\mathbf{v}_1 + \\dots + c_{j-1}\\mathbf{v}_{j-1} + (-1)\\mathbf{v}_j + 0\\mathbf{v}_{j+1} + \\dots + 0\\mathbf{v}_p = \\mathbf{0}$." },
           { stepText: "Since the coefficient of $\\mathbf{v}_j$ is $-1 \\neq 0$, we have a non-trivial linear combination equaling zero. Thus, the set is dependent." },
           { stepText: "Conversely, suppose the set is dependent. By definition, there exist scalars not all zero such that $c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p = \\mathbf{0}$. Let $j$ be the largest index for which $c_j \\neq 0$." },
           { prompt: "Can $j=1$ if we assume $\\mathbf{v}_1 \\neq \\mathbf{0}$?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"If $j=1$, then $c_1\\mathbf{v}_1 = \\mathbf{0} \\implies c_1=0$ (contradiction)."}, {id:"B", text:"No", isCorrect:true, explanation:"So $j > 1$."}], stepText: "Thus $j > 1$. Solving for $\\mathbf{v}_j$: $\\mathbf{v}_j = -\\frac{c_1}{c_j}\\mathbf{v}_1 - \\dots - \\frac{c_{j-1}}{c_j}\\mathbf{v}_{j-1}$." },
           { stepText: "This shows $\\mathbf{v}_j$ is a linear combination of preceding vectors. Q.E.D." }
        ]},
        { id: "s5", type: "fill_in_blank", title: "Theorem Recap", content: "Theorem 4 allows us to check for linear dependence by seeing if a vector is in the ___ of the vectors that come before it.", blankAnswer: "span" }
      ]
    },
    {
      id: "les-1-3-1-ex1", title: "Example 1: Polynomials", description: "Checking dependence in P space", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Let $\\mathbf{p}_1(t) = 1$, $\\mathbf{p}_2(t) = t$, and $\\mathbf{p}_3(t) = 4 - t$. \n\nIs the set $\\{\\mathbf{p}_1, \\mathbf{p}_2, \\mathbf{p}_3\\}$ linearly independent in $\\mathbb{P}$?", interactiveCanvasId: "polynomial-space-interactive" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check for linear relationship.**", interactiveSteps: [
           { stepText: "Look at $\\mathbf{p}_3(t) = 4 - t$." },
           { prompt: "Can we express $4 - t$ using $\\mathbf{p}_1=1$ and $\\mathbf{p}_2=t$?", options: [{id:"A", text:"No, they are different powers.", isCorrect:false, explanation:"Look at the coefficients."}, {id:"B", text:"Yes, $4(1) - 1(t)$", isCorrect:true, explanation:"$4\\mathbf{p}_1 - \\mathbf{p}_2 = 4 - t$."}], stepText: "We found $\\mathbf{p}_3 = 4\\mathbf{p}_1 - \\mathbf{p}_2$." },
           { stepText: "Rearranging gives $4\\mathbf{p}_1 - \\mathbf{p}_2 - \\mathbf{p}_3 = \\mathbf{0}$." },
           { stepText: "Since there is a non-trivial relation (coefficients 4, -1, -1), the set is **linearly dependent**." }
        ]},
        { id: "s2", type: "quiz", title: "Dependency Concept", content: "Is $\\{\\mathbf{p}_1, \\mathbf{p}_2\\}$ linearly independent?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"$c_1(1) + c_2(t) = 0$ for all $t$ implies $c_1=0, c_2=0$."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s3", type: "numerical", title: "Degree Check", content: "What is the degree of $\\mathbf{p}_3(t)$?", numericAnswer: 1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-3-1-ex2", title: "Example 2: Trig Functions", description: "Independence in C[0,1]", icon: "Waves",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** The set $\\{\\sin t, \\cos t\\}$ is in the space $C[0, 1]$ of continuous functions. Is it linearly independent?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test $c_1 \\sin t + c_2 \\cos t = 0$ for all $t$.**", interactiveSteps: [
           { stepText: "The equation must hold for *all* $t$ in $[0, 1]$. Let's test specific values." },
           { prompt: "Try $t=0$. What does the equation become?", options: [{id:"A", text:"$c_1(0) + c_2(1) = 0 \\implies c_2 = 0$", isCorrect:true, explanation:"$\\sin 0 = 0, \\cos 0 = 1$."}, {id:"B", text:"$c_1(1) + c_2(0) = 0$", isCorrect:false, explanation:"Check your trig values."}], stepText: "So $c_2$ must be 0." },
           { prompt: "Now considering $c_2=0$, try $t = \\pi/2$ (approx 1.57, outside interval? Let's use any $t$ where $\\sin t \\neq 0$, say $t=0.5$). Or better, differentiation.", options: [{id:"A", text:"Use derivative", isCorrect:false, explanation:"Not needed, simpler to just use another point."}, {id:"B", text:"Since $c_2=0$, $c_1 \\sin t = 0$.", isCorrect:true, explanation:"Since $\\sin t$ is not the zero function, $c_1$ must be 0."}], stepText: "Both $c_1$ and $c_2$ must be zero." },
           { stepText: "Therefore, the set is **linearly independent**." }
        ]},
        { id: "s2", type: "quiz", title: "Adding a vector", content: "If we add $\\sin(2t)$ to the set, is it still independent?", options: [{id:"A", text:"Yes, generally.", isCorrect:true, explanation:"$\\sin(2t) = 2\\sin t \\cos t$ is not a *linear* combination of sin and cos (it's a product)."}, {id:"B", text:"No, it depends on sin and cos.", isCorrect:false, explanation:"Linear dependence deals with constant scalars, not multiplication of functions."}] }
      ]
    },
    {
      id: "les-1-3-1-def", title: "Definition of Basis", description: "Spanning + Independence", icon: "Flag",
      slides: [
        { id: "s0", type: "theory", title: "Basis Definition", content: "Let $H$ be a subspace of a vector space $V$. An indexed set of vectors $B = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_p\\}$ in $V$ is a **basis** for $H$ if:\n\n1. $B$ is a **linearly independent** set.\n2. The subspace spanned by $B$ coincides with $H$; that is, $H = \\text{Span}\\{\\mathbf{b}_1, \\dots, \\mathbf{b}_p\\}$." },
        { id: "s1", type: "quiz", title: "Concept Check 1", content: "Does a basis contain redundant vectors?", options: [{id:"A", text:"Yes, to ensure it spans.", isCorrect:false, explanation:"Redundant vectors would make it linearly dependent."}, {id:"B", text:"No, it is efficient.", isCorrect:true, explanation:"Linear independence means no vector is redundant."}] },
        { id: "s2", type: "quiz", title: "Concept Check 2", content: "Can a subspace have more than one basis?", options: [{id:"A", text:"Yes, many bases are possible.", isCorrect:true, explanation:"E.g., for a plane, any two non-parallel vectors in it form a basis."}, {id:"B", text:"No, the basis is unique.", isCorrect:false, explanation:"The representation relative to a basis is unique, but the basis itself is not."}] },
        { id: "s3", type: "interactive_canvas", title: "Basis vs Span", content: "In $\\mathbb{R}^2$, any two non-collinear vectors form a basis. If you add a third, it's still a spanning set but not a basis (dependent).", interactiveCanvasId: "vector-addition-interactive" },
        { id: "s4", type: "fill_in_blank", title: "Summary", content: "A basis is a spanning set that is as ___ as possible.", blankAnswer: "small" }
      ]
    },
    {
      id: "les-1-3-1-ex3", title: "Example 3: Invertible Matrices", description: "Columns as Basis", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Let $A$ be an invertible $n \\times n$ matrix, say $A = [\\mathbf{a}_1 \\ \\dots \\ \\mathbf{a}_n]$.\n\nShow that the columns of $A$ form a basis for $\\mathbb{R}^n$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply the Invertible Matrix Theorem.**", interactiveSteps: [
           { stepText: "By the Invertible Matrix Theorem (IMT), if $A$ is invertible, what is true about its columns regarding independence?", options: [{id:"A", text:"They are linearly independent.", isCorrect:true, explanation:"IMT states columns of invertible matrix are independent."}, {id:"B", text:"They are dependent.", isCorrect:false, explanation:""}] },
           { stepText: "Condition 1 for basis met: Columns are linearly independent." },
           { prompt: "What does IMT say about the Span of the columns?", options: [{id:"A", text:"They span $\\mathbb{R}^n$.", isCorrect:true, explanation:"Col A = R^n if A is invertible."}, {id:"B", text:"They span the null space.", isCorrect:false, explanation:""}], stepText: "Condition 2 for basis met: Columns span $\\mathbb{R}^n$." },
           { stepText: "Thus, the columns form a basis for $\\mathbb{R}^n$." }
        ]},
        { id: "s2", type: "quiz", title: "Identity Matrix", content: "Do the columns of the Identity matrix $I_n$ form a basis?", options: [{id:"A", text:"Yes, it is the Standard Basis.", isCorrect:true, explanation:"$e_1, ..., e_n$ are the columns."}, {id:"B", text:"No", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-1-3-1-ex4-5", title: "Examples 4 & 5: Bases for R3", description: "Standard and Non-Standard", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Example 4: Standard Basis", content: "The set $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$ is called the **standard basis** for $\\mathbb{R}^n$. \n\nFor example in $\\mathbb{R}^3$:\n$\\mathbf{e}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\mathbf{e}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\mathbf{e}_3 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$." },
        { id: "s1", type: "example_q", title: "Example 5", content: "Let $\\mathbf{v}_1 = \\begin{bmatrix} 3 \\\\ 0 \\\\ -6 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} -4 \\\\ 1 \\\\ 7 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} -2 \\\\ 1 \\\\ 5 \\end{bmatrix}$.\n\nDetermine if $\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3 \\}$ is a basis for $\\mathbb{R}^3$." },
        { id: "s2", type: "solution", title: "Solution", content: "Form the matrix $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$.\n\n$$ A = \\begin{bmatrix} 3 & -4 & -2 \\\\ 0 & 1 & 1 \\\\ -6 & 7 & 5 \\end{bmatrix} $$\n\nRow reduce to find pivots.\nAdding 2 times row 1 to row 3: $\\begin{bmatrix} 3 & -4 & -2 \\\\ 0 & 1 & 1 \\\\ 0 & -1 & 1 \\end{bmatrix}$.\nAdding row 2 to row 3: $\\begin{bmatrix} 3 & -4 & -2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 2 \\end{bmatrix}$.\n\nThere are 3 pivots. The matrix is invertible. By Example 3, the columns form a basis for $\\mathbb{R}^3$." }
      ]
    },
    {
      id: "les-1-3-1-ex6", title: "Example 6: Polynomial Basis", description: "Standard basis for Pn", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Example 6", content: "**Problem:** Let $S = \\{1, t, t^2, \\dots, t^n\\}$. Verify that $S$ is a basis for $\\mathbb{P}_n$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify Span and Independence.**", interactiveSteps: [
           { stepText: "Span: Any polynomial in $\\mathbb{P}_n$ is of the form $a_0 + a_1 t + \\dots + a_n t^n$. This is literally a linear combination of elements in $S$. So $S$ spans $\\mathbb{P}_n$." },
           { prompt: "Independence: Suppose $c_0 \\cdot 1 + c_1 t + \\dots + c_n t^n = 0$ for all $t$. What does this imply?", options: [{id:"A", text:"All coefficients $c_i$ must be zero.", isCorrect:true, explanation:"The zero polynomial has all zero coefficients."}, {id:"B", text:"Only $c_n=0$.", isCorrect:false, explanation:""}], stepText: "By the Fundamental Theorem of Algebra, a non-zero polynomial of degree $n$ has at most $n$ roots. If it is zero for *all* $t$, it must be the zero polynomial." },
           { stepText: "Thus $c_0 = c_1 = \\dots = c_n = 0$. $S$ is linearly independent." },
           { stepText: "Conclusion: $S$ is a basis for $\\mathbb{P}_n$. It is called the **standard basis**." }
        ]},
        { id: "s2", type: "numerical", title: "Basis Size", content: "How many vectors are in the standard basis of $\\mathbb{P}_3$?", numericAnswer: 4, numericTolerance: 0 }
      ]
    }
  ]
};