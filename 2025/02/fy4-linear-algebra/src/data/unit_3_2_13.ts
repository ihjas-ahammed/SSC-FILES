import { Unit } from '../types';

export const UNIT_3_2_13: Unit = {
  id: "unit-3-2-13",
  title: "Proofs on Orthogonality",
  description: "Exercises 25-34: Rigorous proofs involving orthogonal matrices and projections.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-13-ex25", title: "Exercise 25", description: "Length preserving proof", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** Prove Theorem 7(a): If $U$ has orthonormal columns, compute $\\|U\\mathbf{x}\\|^2$ and show it equals $\\|\\mathbf{x}\\|^2$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use $U^T U = I$.**", interactiveSteps: [
           { stepText: "By definition of length, $\\|U\\mathbf{x}\\|^2 = (U\\mathbf{x}) \\cdot (U\\mathbf{x})$." },
           { prompt: "Rewrite the dot product using transposes.", options: [{id:"A", text:"$(U\\mathbf{x})^T (U\\mathbf{x})$", isCorrect:true, explanation:""}, {id:"B", text:"$U^T \\mathbf{x}^T U \\mathbf{x}$", isCorrect:false, explanation:"Transpose of product reverses order."}], stepText: "It equals $(U\\mathbf{x})^T (U\\mathbf{x}) = \\mathbf{x}^T U^T U \\mathbf{x}$." },
           { stepText: "By Theorem 6, since $U$ has orthonormal columns, $U^T U = I$." },
           { stepText: "Thus, $\\mathbf{x}^T I \\mathbf{x} = \\mathbf{x}^T \\mathbf{x} = \\|\\mathbf{x}\\|^2$. Goal reached." }
        ]}
      ]
    },
    {
      id: "les-3-2-13-ex26", title: "Exercise 26", description: "Orthogonal dimension", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** Suppose $W$ is a subspace of $\\mathbb{R}^n$ spanned by $n$ nonzero orthogonal vectors. Explain why $W = \\mathbb{R}^n$." },
        { id: "s1", type: "solution", title: "Solution", content: "By Theorem 4, a set of $n$ nonzero orthogonal vectors is linearly independent.\n\nSince they span $W$, they form a basis for $W$, meaning $\\dim W = n$.\n\nBy the properties of dimension, if a subspace of $\\mathbb{R}^n$ has dimension $n$, it must be the entire space $\\mathbb{R}^n$." }
      ]
    },
    {
      id: "les-3-2-13-ex27", title: "Exercise 27", description: "Orthogonal Matrix Invertibility", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Let $U$ be a square matrix with orthonormal columns. Explain why $U$ is invertible." },
        { id: "s1", type: "solution", title: "Solution", content: "By Theorem 6, since $U$ has orthonormal columns, $U^T U = I$.\n\nFor square matrices, if there is a matrix $C$ such that $CU = I$, then $U$ is invertible and $C = U^{-1}$.\n\nThus, $U$ is invertible, and its inverse is simply its transpose, $U^T$." }
      ]
    },
    {
      id: "les-3-2-13-ex28", title: "Exercise 28", description: "Rows of an Orthogonal Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Let $U$ be an $n \\times n$ orthogonal matrix. Show that the rows of $U$ form an orthonormal basis of $\\mathbb{R}^n$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show that the columns of $U^T$ are orthonormal.**", interactiveSteps: [
           { stepText: "Since $U$ is an orthogonal matrix, it is invertible and $U^{-1} = U^T$." },
           { prompt: "Because a matrix times its inverse is the identity, what does $U U^T$ equal?", options: [{id:"A", text:"$I$", isCorrect:true, explanation:"$U U^{-1} = I$."}, {id:"B", text:"$U^2$", isCorrect:false, explanation:""}], stepText: "We have $U U^T = I$." },
           { stepText: "Recall that $U = (U^T)^T$. So we can write this as $(U^T)^T (U^T) = I$." },
           { stepText: "By Theorem 6, if a matrix $M$ satisfies $M^T M = I$, its columns are orthonormal." },
           { stepText: "Here $M = U^T$. The columns of $U^T$ (which are the rows of $U$) are orthonormal." }
        ]}
      ]
    },
    {
      id: "les-3-2-13-ex29", title: "Exercise 29", description: "Product of Orthogonal Matrices", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 29", content: "**Problem:** Let $U$ and $V$ be $n \\times n$ orthogonal matrices. Explain why $UV$ is an orthogonal matrix. [That is, explain why $UV$ is invertible and its inverse is $(UV)^T$]." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Compute $(UV)^T (UV)$.**", interactiveSteps: [
           { stepText: "We need to check if $(UV)^T (UV) = I$." },
           { prompt: "What is $(UV)^T$?", options: [{id:"A", text:"$V^T U^T$", isCorrect:true, explanation:"Order reverses!"}, {id:"B", text:"$U^T V^T$", isCorrect:false, explanation:""}], stepText: "It expands to $V^T U^T (UV) = V^T (U^T U) V$." },
           { stepText: "Since $U$ is orthogonal, $U^T U = I$. The expression becomes $V^T I V = V^T V$." },
           { stepText: "Since $V$ is orthogonal, $V^T V = I$." },
           { stepText: "Thus, $(UV)^T (UV) = I$, making $UV$ an orthogonal matrix." }
        ]}
      ]
    },
    {
      id: "les-3-2-13-ex30", title: "Exercise 30", description: "Sign changes", icon: "RefreshCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** Let $U$ be an orthogonal matrix, and construct $V$ by interchanging some of the columns of $U$ or multiplying them by -1. Explain why $V$ is an orthogonal matrix." },
        { id: "s1", type: "solution", title: "Solution", content: "The definition of an orthogonal matrix requires its columns to be an orthonormal set.\n\n- Multiplying a unit vector by -1 doesn't change its length: $\|-\mathbf{u}\| = |-1|\|\mathbf{u}\| = 1$.\n- The dot product of a vector with a negated vector is just the negative of their original dot product: $\mathbf{u}_i \cdot (-\mathbf{u}_j) = -(\mathbf{u}_i \cdot \mathbf{u}_j) = 0$.\n- Changing the order of the columns just changes the index labels, but every distinct pair is still orthogonal.\n\nThus, $V$ still has orthonormal columns, making it an orthogonal matrix." }
      ]
    },
    {
      id: "les-3-2-13-ex31", title: "Exercise 31", description: "Projection invariance", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 31", content: "**Problem:** Show that the orthogonal projection of $\\mathbf{y}$ onto a line $L$ does not depend on the choice of the nonzero vector $\\mathbf{u}$ in $L$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Replace $\\mathbf{u}$ with $c\\mathbf{u}$.**", interactiveSteps: [
           { stepText: "Any other nonzero vector on $L$ can be written as $c\\mathbf{u}$ for some scalar $c \\neq 0$." },
           { stepText: "Plug $c\\mathbf{u}$ into the projection formula: $\\hat{\\mathbf{y}}_{new} = \\frac{\\mathbf{y} \\cdot (c\\mathbf{u})}{(c\\mathbf{u}) \\cdot (c\\mathbf{u})} (c\\mathbf{u})$." },
           { prompt: "Pull the scalars out. What happens?", options: [{id:"A", text:"The $c$'s cancel out perfectly.", isCorrect:true, explanation:"Numerator has c*c. Denominator has c*c."}, {id:"B", text:"We are left with a $c$ term.", isCorrect:false, explanation:""}], stepText: "Numerator: $c(\\mathbf{y} \\cdot \\mathbf{u}) c\\mathbf{u} = c^2 (\\mathbf{y} \\cdot \\mathbf{u}) \\mathbf{u}$." },
           { stepText: "Denominator: $c^2 (\\mathbf{u} \\cdot \\mathbf{u})$." },
           { stepText: "The $c^2$ terms cancel, leaving exactly the original projection formula." }
        ]}
      ]
    },
    {
      id: "les-3-2-13-ex32", title: "Exercise 32", description: "Scaling Orthogonal Sets", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 32", content: "**Problem:** Let $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ be an orthogonal set of nonzero vectors, and let $c_1, c_2$ be nonzero scalars. Show that $\\{c_1\\mathbf{v}_1, c_2\\mathbf{v}_2\\}$ is an orthogonal set." },
        { id: "s1", type: "solution", title: "Solution", content: "To show they are orthogonal, compute their dot product:\n\n$(c_1\\mathbf{v}_1) \\cdot (c_2\\mathbf{v}_2) = c_1 c_2 (\\mathbf{v}_1 \\cdot \\mathbf{v}_2)$\n\nSince the original set is orthogonal, $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0$.\n\nThus, $c_1 c_2 (0) = 0$. The scaled vectors are orthogonal." }
      ]
    },
    {
      id: "les-3-2-13-ex33", title: "Exercise 33", description: "Linearity of Projection", icon: "Share2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 33", content: "**Problem:** Given $\\mathbf{u} \\neq \\mathbf{0}$, let $L = \\text{Span}\\{\\mathbf{u}\\}$. Show that the mapping $\\mathbf{x} \\mapsto \\text{proj}_L \\mathbf{x}$ is a linear transformation." },
        { id: "s1", type: "solution", title: "Solution", content: "Define $T(\\mathbf{x}) = \\frac{\\mathbf{x} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}} \\mathbf{u}$. Let $k = \\frac{1}{\\mathbf{u} \\cdot \\mathbf{u}}$.\n\n1. Additivity: $T(\\mathbf{x}+\\mathbf{y}) = k((\\mathbf{x}+\\mathbf{y})\\cdot\\mathbf{u})\\mathbf{u} = k(\\mathbf{x}\\cdot\\mathbf{u} + \\mathbf{y}\\cdot\\mathbf{u})\\mathbf{u} = k(\\mathbf{x}\\cdot\\mathbf{u})\\mathbf{u} + k(\\mathbf{y}\\cdot\\mathbf{u})\\mathbf{u} = T(\\mathbf{x}) + T(\\mathbf{y})$.\n\n2. Scalar Mult: $T(c\\mathbf{x}) = k((c\\mathbf{x})\\cdot\\mathbf{u})\\mathbf{u} = k(c(\\mathbf{x}\\cdot\\mathbf{u}))\\mathbf{u} = c[k(\\mathbf{x}\\cdot\\mathbf{u})\\mathbf{u}] = cT(\\mathbf{x})$.\n\nSince both properties hold, it is linear." }
      ]
    },
    {
      id: "les-3-2-13-ex34", title: "Exercise 34", description: "Linearity of Reflection", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 34", content: "**Problem:** Given $\\mathbf{u} \\neq \\mathbf{0}$, let $L = \\text{Span}\\{\\mathbf{u}\\}$. For $\\mathbf{y}$ in $\\mathbb{R}^n$, the reflection of $\\mathbf{y}$ in $L$ is defined by $\\text{refl}_L \\mathbf{y} = 2\\text{proj}_L \\mathbf{y} - \\mathbf{y}$.\n\nShow that this mapping is a linear transformation." },
        { id: "s1", type: "solution", title: "Solution", content: "Let $T(\\mathbf{y}) = \\text{proj}_L \\mathbf{y}$ (which we know is linear from Ex 33), and $I(\\mathbf{y}) = \\mathbf{y}$ (the identity transformation).\n\nThe reflection mapping is $R(\\mathbf{y}) = 2T(\\mathbf{y}) - I(\\mathbf{y})$.\n\nSince the sum or difference of linear transformations is a linear transformation, and scalar multiples of linear transformations are linear, $R$ is a linear transformation." }
      ]
    }
  ]
};