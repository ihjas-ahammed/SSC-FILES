import { Unit } from '../types';

export const UNIT_1_2_15: Unit = {
  id: "unit-1-2-15",
  title: "Transformation Properties",
  description: "Exercises 33-36: Linear maps on abstract spaces.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-15-ex33", title: "Exercise 33: Matrix Map", description: "Review of T(A) = A + A^T", icon: "Repeat",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 33 (Review)", content: "**Problem:** Let $T: M_{2 \\times 2} \\to M_{2 \\times 2}$ be defined by $T(A) = A + A^T$.\n\n(a) Show that $T$ is linear.\n(b) Let $B$ be a symmetric matrix ($B^T=B$). Find an $A$ such that $T(A)=B$." },
        { id: "s1", type: "solution", title: "Solution", content: "**Linearity:**\n$T(cA + D) = (cA + D) + (cA + D)^T$\n$= cA + D + cA^T + D^T$\n$= c(A + A^T) + (D + D^T)$\n$= cT(A) + T(D)$.\n\n**Pre-image:**\nWe want $A + A^T = B$. Since $B$ is symmetric, $B/2 + (B/2)^T = B/2 + B/2 = B$.\nSo $A = B/2$ works." }
      ]
    },
    {
      id: "les-1-2-15-ex34", title: "Exercise 34: Calculus Map", description: "Integration as a transformation", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 34", content: "**Problem:** Define $T: C[0, 1] \\to C[0, 1]$ as follows: For $\\mathbf{f}$ in $C[0, 1]$, let $T(\\mathbf{f})$ be the antiderivative $\\mathbf{F}$ of $\\mathbf{f}$ such that $\\mathbf{F}(0) = 0$.\n\nShow that $T$ is linear and describe the kernel of $T$." },
        { id: "s1", type: "solution", title: "Part A: Linearity", content: "The transformation is defined by integration:\n$$ T(\\mathbf{f})(x) = \\int_0^x \\mathbf{f}(t) dt $$\nFrom calculus, the integral is linear:\n1. $\\int (f+g) = \\int f + \\int g$\n2. $\\int (cf) = c \\int f$\n\nThus $T$ is a linear transformation." },
        { id: "s2", type: "solution", title: "Part B: Kernel", content: "The kernel consists of all functions $\\mathbf{f}$ such that $T(\\mathbf{f}) = \\mathbf{0}$ (the zero function).\n\n$$ \\int_0^x \\mathbf{f}(t) dt = 0 \\quad \\text{for all } x \\in [0, 1] $$\n\nDifferentiating both sides with respect to $x$ (Fundamental Theorem of Calculus):\n$$ \\mathbf{f}(x) = 0 $$\n\nThus, the kernel contains only the zero function, $\\{ \\mathbf{0} \\}$." }
      ]
    },
    {
      id: "les-1-2-15-ex35", title: "Exercise 35: Image of Subspace", description: "Proving T(U) is a subspace", icon: "Share2",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 35", content: "**Theorem:** Let $V$ and $W$ be vector spaces, and let $T: V \\to W$ be a linear transformation. Given a subspace $U$ of $V$, let $T(U)$ denote the set of all images of the form $T(\\mathbf{x})$, where $\\mathbf{x} \\in U$.\n\nShow that $T(U)$ is a subspace of $W$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Check 3 properties for T(U).**", interactiveSteps: [
           { stepText: "1. Zero Vector: Since $U$ is a subspace, $\\mathbf{0}_V \\in U$." },
           { prompt: "What is $T(\\mathbf{0}_V)$?", options: [{id:"A", text:"$\\mathbf{0}_W$", isCorrect:true, explanation:"Linear transformations map zero to zero."}, {id:"B", text:"Undefined", isCorrect:false, explanation:""}], stepText: "So $\\mathbf{0}_W = T(\\mathbf{0}_V)$ is in $T(U)$." },
           { stepText: "2. Addition: Let $\\mathbf{y}_1, \\mathbf{y}_2 \\in T(U)$. Then $\\mathbf{y}_1 = T(\\mathbf{x}_1)$ and $\\mathbf{y}_2 = T(\\mathbf{x}_2)$ for some $\\mathbf{x}_1, \\mathbf{x}_2 \\in U$." },
           { prompt: "Compute $\\mathbf{y}_1 + \\mathbf{y}_2$.", options: [{id:"A", text:"$T(\\mathbf{x}_1 + \\mathbf{x}_2)$", isCorrect:true, explanation:"Linearity property."}, {id:"B", text:"$T(\\mathbf{x}_1)T(\\mathbf{x}_2)$", isCorrect:false, explanation:""}], stepText: "Since $\\mathbf{x}_1 + \\mathbf{x}_2 \\in U$ (subspace closure), $T(\\mathbf{x}_1 + \\mathbf{x}_2)$ is in $T(U)$." },
           { stepText: "3. Scalar Mult: Similar logic shows $c\\mathbf{y}_1 = T(c\\mathbf{x}_1) \\in T(U)$." },
           { stepText: "Conclusion: $T(U)$ is a subspace of $W$." }
        ]}
      ]
    },
    {
      id: "les-1-2-15-ex36", title: "Exercise 36: Preimage of Subspace", description: "Proving inverse image is subspace", icon: "CornerLeftUp",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 36", content: "**Theorem:** Let $T: V \\to W$ be linear, and let $Z$ be a subspace of $W$. Let $U$ be the set of all $\\mathbf{x}$ in $V$ such that $T(\\mathbf{x})$ is in $Z$.\n\nShow that $U$ is a subspace of $V$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Verify properties for U.**", interactiveSteps: [
           { stepText: "1. Zero: $T(\\mathbf{0}_V) = \\mathbf{0}_W$. Since $Z$ is a subspace, $\\mathbf{0}_W \\in Z$." },
           { prompt: "Does this imply $\\mathbf{0}_V \\in U$?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"The condition is that the image must be in Z."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "So zero is in $U$." },
           { stepText: "2. Addition: Let $\\mathbf{x}_1, \\mathbf{x}_2 \\in U$. This means $T(\\mathbf{x}_1) \\in Z$ and $T(\\mathbf{x}_2) \\in Z$." },
           { prompt: "Is $T(\\mathbf{x}_1 + \\mathbf{x}_2)$ in $Z$?", options: [{id:"A", text:"Yes, $Z$ is closed under addition.", isCorrect:true, explanation:"$T(\\mathbf{x}_1 + \\mathbf{x}_2) = T(\\mathbf{x}_1) + T(\\mathbf{x}_2)$, which is a sum of vectors in Z."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "So $\\mathbf{x}_1 + \\mathbf{x}_2 \\in U$." },
           { stepText: "Scalar Mult: $T(c\\mathbf{x}) = cT(\\mathbf{x})$. Since $T(\\mathbf{x}) \\in Z$ and $Z$ is closed under scalars, $cT(\\mathbf{x}) \\in Z$. Thus $c\\mathbf{x} \\in U$." },
           { stepText: "Therefore, $U$ is a subspace of $V$." }
        ]}
      ]
    }
  ]
};