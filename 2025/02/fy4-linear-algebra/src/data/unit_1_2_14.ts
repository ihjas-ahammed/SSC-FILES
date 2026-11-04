import { Unit } from '../types';

export const UNIT_1_2_14: Unit = {
  id: "unit-1-2-14",
  title: "Linear Transformations",
  description: "Exercises 29-33: Theory and Polynomials.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-14-ex29", title: "Exercise 29: Col A Proof", description: "Range of transformation", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 29", content: "**Problem:** Use the definition of $\\text{Col } A$ as the set of all vectors $\\mathbf{b}$ such that $\\mathbf{b} = A\\mathbf{x}$ for some $\\mathbf{x}$ to prove that $\\text{Col } A$ is a subspace of $\\mathbb{R}^m$." },
        { id: "s1", type: "solution", title: "Solution", content: "This is essentially establishing that the range of the linear transformation $T(\\mathbf{x}) = A\\mathbf{x}$ is a subspace.\n\n1. **Zero:** $\\mathbf{0} = A\\mathbf{0}$, so $\\mathbf{0} \\in \\text{Col } A$.\n2. **Addition:** If $\\mathbf{b}_1 = A\\mathbf{x}_1$ and $\\mathbf{b}_2 = A\\mathbf{x}_2$, then $\\mathbf{b}_1 + \\mathbf{b}_2 = A\\mathbf{x}_1 + A\\mathbf{x}_2 = A(\\mathbf{x}_1 + \\mathbf{x}_2)$. This is in $\\text{Col } A$.\n3. **Scalar Mult:** If $\\mathbf{b} = A\\mathbf{x}$, then $c\\mathbf{b} = c(A\\mathbf{x}) = A(c\\mathbf{x})$, which is in $\\text{Col } A$." }
      ]
    },
    {
      id: "les-1-2-14-ex30", title: "Exercise 30: Range Subspace", description: "General Linear Transformation", icon: "Share2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** Let $T: V \\to W$ be a linear transformation. Show that the range of $T$ is a subspace of $W$. \n\n(Range consists of all $T(\\mathbf{x})$ for $\\mathbf{x} \\in V$)." },
        { id: "s1", type: "solution", title: "Interactive Proof", content: "**Goal: Verify subspace properties for Range(T).**", interactiveSteps: [
           { stepText: "1. Zero: $T(\\mathbf{0}_V) = \\mathbf{0}_W$ because $T$ is linear. So $\\mathbf{0}_W$ is in the range." },
           { prompt: "2. Addition: Let $\\mathbf{y}_1, \\mathbf{y}_2$ be in the range. Then $\\mathbf{y}_1 = T(\\mathbf{u})$ and $\\mathbf{y}_2 = T(\\mathbf{v})$. What is $\\mathbf{y}_1 + \\mathbf{y}_2$?", options: [{id:"A", text:"$T(\\mathbf{u} + \\mathbf{v})$", isCorrect:true, explanation:"Linearity: $T(\\mathbf{u}) + T(\\mathbf{v}) = T(\\mathbf{u} + \\mathbf{v})$."}, {id:"B", text:"$T(\\mathbf{u}\\mathbf{v})$", isCorrect:false, explanation:""}], stepText: "Since $\\mathbf{u}+\\mathbf{v}$ is in $V$, its image $T(\\mathbf{u}+\\mathbf{v})$ is in the range. So the range is closed under addition." },
           { stepText: "3. Scalar Mult: $c\\mathbf{y}_1 = cT(\\mathbf{u}) = T(c\\mathbf{u})$. Since $c\\mathbf{u} \\in V$, its image is in the range. Closed." },
           { stepText: "Conclusion: The range of $T$ is a subspace of $W$." }
        ]}
      ]
    },
    {
      id: "les-1-2-14-ex31", title: "Exercise 31: Polynomial Range", description: "Mapping P2 to R2", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 31", content: "**Problem:** Define $T: \\mathbb{P}_2 \\to \\mathbb{R}^2$ by $T(\\mathbf{p}) = \\begin{bmatrix} \\mathbf{p}(0) \\\\ \\mathbf{p}(1) \\end{bmatrix}$.\n\nFor instance, if $\\mathbf{p}(t) = 3 + 5t + 7t^2$, then $T(\\mathbf{p}) = \\begin{bmatrix} 3 \\\\ 15 \\end{bmatrix}$.\n\na. Show that $T$ is a linear transformation.\nb. Find a polynomial $\\mathbf{p}$ in $\\mathbb{P}_2$ that spans the kernel of $T$." },
        { id: "s1", type: "solution", title: "Part A: Linearity", content: "Let $\\mathbf{p}, \\mathbf{q} \\in \\mathbb{P}_2$.\n\n$$ T(\\mathbf{p} + \\mathbf{q}) = \\begin{bmatrix} (\\mathbf{p}+\\mathbf{q})(0) \\\\ (\\mathbf{p}+\\mathbf{q})(1) \\end{bmatrix} = \\begin{bmatrix} \\mathbf{p}(0) + \\mathbf{q}(0) \\\\ \\mathbf{p}(1) + \\mathbf{q}(1) \\end{bmatrix} = \\begin{bmatrix} \\mathbf{p}(0) \\\\ \\mathbf{p}(1) \\end{bmatrix} + \\begin{bmatrix} \\mathbf{q}(0) \\\\ \\mathbf{q}(1) \\end{bmatrix} = T(\\mathbf{p}) + T(\\mathbf{q}) $$\n\nSimilarly, $T(c\\mathbf{p}) = \\begin{bmatrix} c\\mathbf{p}(0) \\\\ c\\mathbf{p}(1) \\end{bmatrix} = cT(\\mathbf{p})$.\nThus, $T$ is linear." },
        { id: "s2", type: "solution", title: "Part B: Kernel", content: "**Goal: Find $\\mathbf{p}$ such that $T(\\mathbf{p}) = \\mathbf{0}$.**\n\nThis means $\\mathbf{p}(0) = 0$ AND $\\mathbf{p}(1) = 0$.\nA polynomial with roots at 0 and 1 has factors $t$ and $(t-1)$.\n\nSince degree $\\le 2$, let $\\mathbf{p}(t) = at(t-1) = a(t^2 - t)$.\n\nThe kernel is the set of all multiples of $t^2 - t$.\nSpanning vector: $\\mathbf{p}(t) = t^2 - t$." }
      ]
    },
    {
      id: "les-1-2-14-ex32", title: "Exercise 32: Restricted Range", description: "Mapping P2 to R2 again", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 32", content: "**Problem:** Define $T: \\mathbb{P}_2 \\to \\mathbb{R}^2$ by $T(\\mathbf{p}) = \\begin{bmatrix} \\mathbf{p}(0) \\\\ \\mathbf{p}(0) \\end{bmatrix}$.\n\nFind a spanning set for the range of $T$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Analyze the output vectors.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{p}(t) = a + bt + ct^2$. Then $\\mathbf{p}(0) = a$." },
           { prompt: "What does the output vector $T(\\mathbf{p})$ look like?", options: [{id:"A", text:"$\\begin{bmatrix} a \\\\ a \\end{bmatrix}$", isCorrect:true, explanation:"Both components are p(0)."}, {id:"B", text:"$\\begin{bmatrix} a \\\\ 0 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "The output is always of the form $\\begin{bmatrix} a \\\\ a \\end{bmatrix} = a \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Since $a$ can be any real number (by choosing constant polynomials), the range spans the line generated by $\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Spanning set for Range: $\\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} \\right\\}$." }
        ]}
      ]
    },
    {
      id: "les-1-2-14-ex33", title: "Exercise 33: Matrix Transformation", description: "M2x2 Space", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 33", content: "**Problem:** Let $M_{2 \\times 2}$ be the vector space of $2 \\times 2$ matrices. Define $T: M_{2 \\times 2} \\to M_{2 \\times 2}$ by $T(A) = A + A^T$.\n\na. Show that $T$ is a linear transformation.\nb. Let $B$ be any element of $M_{2 \\times 2}$ such that $B^T = B$ (symmetric). Find an $A$ such that $T(A) = B$." },
        { id: "s1", type: "solution", title: "Part A: Linearity", content: "**Check Addition:**\n$T(A+C) = (A+C) + (A+C)^T = A + C + A^T + C^T = (A+A^T) + (C+C^T) = T(A) + T(C)$.\n\n**Check Scalar Mult:**\n$T(cA) = cA + (cA)^T = cA + cA^T = c(A+A^T) = cT(A)$.\n\nThus, $T$ is linear." },
        { id: "s2", type: "solution", title: "Part B: Pre-image", content: "**Goal: Solve $A + A^T = B$ for A, given $B$ is symmetric.**\n\nWe need to find *some* $A$. Let's try guessing $A$ related to $B$.\n\nIf we let $A = \\frac{1}{2}B$, then:\n$T(A) = \\frac{1}{2}B + (\\frac{1}{2}B)^T = \\frac{1}{2}B + \\frac{1}{2}B^T$.\n\nSince $B$ is symmetric ($B^T = B$), this becomes:\n$\\frac{1}{2}B + \\frac{1}{2}B = B$.\n\nSo $A = \\frac{1}{2}B$ works. This shows the range of $T$ includes all symmetric matrices." }
      ]
    }
  ]
};