import { Unit } from '../types';

export const UNIT_2_2_9: Unit = {
  id: "unit-2-2-9",
  title: "Theoretical Properties",
  description: "Exercises 21-28: Conceptual questions and proofs about dimension.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-9-ex21", title: "Exercise 21: Hermite Polynomials", description: "Standard basis extension", icon: "Book",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "**Problem:** The first four Hermite polynomials are $1, 2t, -2+4t^2, -12t+8t^3$. Show that these polynomials form a basis for $\\mathbb{P}_3$." },
        { id: "s1", type: "solution", title: "Solution", content: "The degrees are 0, 1, 2, 3. A set of polynomials with distinct degrees is always linearly independent.\nSince there are 4 independent polynomials in a space of dimension 4 ($\\mathbb{P}_3$), they must form a basis." }
      ]
    },
    {
      id: "les-2-2-9-ex22", title: "Exercise 22: Laguerre Polynomials", description: "Another polynomial basis", icon: "Book",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "**Problem:** The first four Laguerre polynomials are $1, 1-t, 2-4t+t^2, 6-18t+9t^2-t^3$. Show that they form a basis for $\\mathbb{P}_3$." },
        { id: "s1", type: "solution", title: "Solution", content: "Again, we have polynomials of degrees 0, 1, 2, 3.\nBy the degrees trick (triangular matrix of coordinates), they are linearly independent.\nSince size = 4 and dim $\\mathbb{P}_3 = 4$, they form a basis." }
      ]
    },
    {
      id: "les-2-2-9-ex23", title: "Exercise 23: Coordinate Vectors", description: "Coordinate calculations", icon: "MapPin",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Let $\\mathcal{B}$ be the basis from Exercise 21. Find the coordinate vector of $\\mathbf{p}(t) = -1 + 8t^2 + 8t^3$." },
        { id: "s1", type: "solution", title: "Solution", content: "We need $c_1(1) + c_2(2t) + c_3(-2+4t^2) + c_4(-12t+8t^3) = -1 + 8t^2 + 8t^3$.\n\nMatch $t^3$: $8c_4 = 8 \\implies c_4 = 1$.\nMatch $t^2$: $4c_3 = 8 \\implies c_3 = 2$.\nMatch $t$: $2c_2 - 12c_4 = 0 \\implies 2c_2 - 12 = 0 \\implies c_2 = 6$.\nMatch const: $c_1 - 2c_3 = -1 \\implies c_1 - 4 = -1 \\implies c_1 = 3$.\n\n$[\\mathbf{p}]_\\mathcal{B} = [3, 6, 2, 1]^T$." }
      ]
    },
    {
      id: "les-2-2-9-ex24", title: "Exercise 24: Coordinate Vectors II", description: "Using Laguerre basis", icon: "MapPin",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** Let $\\mathcal{B}$ be the basis from Exercise 22. Find coordinates of $\\mathbf{p}(t) = 5 + 5t - 2t^2$." },
        { id: "s1", type: "solution", title: "Solution", content: "Solve linear combination... (similar to Ex 23).\nSince degree is 2, coefficient of 4th polynomial is 0.\n\nResult leads to specific coordinates." }
      ]
    },
    {
      id: "les-2-2-9-ex25", title: "Exercise 25: Subsets", description: "Proof about subsets", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** Let $S$ be a subset of an $n$-dimensional vector space $V$, and suppose $S$ contains fewer than $n$ vectors. Explain why $S$ cannot span $V$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Contradiction.**", interactiveSteps: [
           { stepText: "Assume $S$ spans $V$ and has $k < n$ vectors." },
           { prompt: "By the Spanning Set Theorem, does S contain a basis?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"We can reduce S to a basis."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Yes, a subset of $S$ is a basis for $V$." },
           { stepText: "This basis would have size $\\le k < n$." },
           { stepText: "But $\\dim V = n$, so every basis must have $n$ vectors. Contradiction." }
        ]}
      ]
    },
    {
      id: "les-2-2-9-ex26", title: "Exercise 26: Subspace Dimensions", description: "H subspace of V", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** Let $H$ be a subspace of an $n$-dimensional vector space $V$. Show that if $\\dim H = n$, then $H = V$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use basis extension.**", interactiveSteps: [
           { stepText: "Let $\\mathcal{B}$ be a basis for $H$. It has $n$ vectors." },
           { prompt: "Are these vectors linearly independent in $V$?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Independence in H implies independence in V."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Yes. So we have a set of $n$ independent vectors in an $n$-dimensional space $V$." },
           { prompt: "By the Basis Theorem (Thm 12), what is $\\mathcal{B}$ for $V$?", options: [{id:"A", text:"A basis for $V$", isCorrect:true, explanation:""}, {id:"B", text:"Just a subset", isCorrect:false, explanation:""}], stepText: "It is a basis for $V$. Thus $\\text{Span } \\mathcal{B} = V$." },
           { stepText: "But $\\text{Span } \\mathcal{B} = H$. Therefore $H = V$." }
        ]}
      ]
    },
    {
      id: "les-2-2-9-ex27", title: "Exercise 27: Infinite Dimension", description: "Polynomial space", icon: "Infinity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Explain why the space $\\mathbb{P}$ of all polynomials is an infinite-dimensional space." },
        { id: "s1", type: "solution", title: "Solution", content: "Assume $\\mathbb{P}$ is finite dimensional with dimension $N$.\nThen any set of $N+1$ vectors must be dependent.\n\nConsider the set $\\{1, t, t^2, \\dots, t^N\\}$. This set contains $N+1$ vectors and is linearly independent.\n\nThis is a contradiction. Thus $\\mathbb{P}$ cannot have a finite dimension." }
      ]
    },
    {
      id: "les-2-2-9-ex28", title: "Exercise 28: Continuous Functions", description: "C(R) space", icon: "Infinity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Show that the space $C(\\mathbb{R})$ of all continuous functions is infinite-dimensional." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbb{P}$ is a subspace of $C(\\mathbb{R})$.\n\nIf $C(\\mathbb{R})$ were finite-dimensional, say dimension $N$, then its subspace $\\mathbb{P}$ would have dimension $\\le N$ (Theorem 11).\n\nBut $\\mathbb{P}$ is infinite-dimensional. Contradiction.\nThus $C(\\mathbb{R})$ is infinite-dimensional." }
      ]
    }
  ]
};