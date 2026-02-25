import { Unit } from '../types';

export const UNIT_3_1_1: Unit = {
  id: "unit-3-1-1",
  title: "The Inner Product",
  description: "Definitions, computations, and fundamental properties of the inner (dot) product.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-1-def", title: "Definition of Inner Product", description: "The dot product formula", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "Definition 1", content: "If $\\mathbf{u}$ and $\\mathbf{v}$ are vectors in $\\mathbb{R}^n$, we regard them as $n \\times 1$ matrices. The transpose $\\mathbf{u}^T$ is a $1 \\times n$ matrix.\n\nThe matrix product $\\mathbf{u}^T \\mathbf{v}$ is a $1 \\times 1$ matrix, which we write as a single real number (a scalar) without brackets.\n\nThe number $\\mathbf{u}^T \\mathbf{v}$ is called the **inner product** of $\\mathbf{u}$ and $\\mathbf{v}$, and is often written as $\\mathbf{u} \\cdot \\mathbf{v}$.\n$$ \\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^T \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\dots + u_n v_n $$" },
        { id: "s1", type: "quiz", title: "Conceptual Check 1", content: "Is the inner product of two vectors a vector or a scalar?", options: [{id:"A", text:"A vector", isCorrect:false, explanation:"No, it sums up the products of components, resulting in a single number."}, {id:"B", text:"A scalar", isCorrect:true, explanation:"The result is a single real number."}] },
        { id: "s2", type: "quiz", title: "Conceptual Check 2", content: "Does the order matter? Is $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$?", options: [{id:"A", text:"Yes, always.", isCorrect:true, explanation:"Real number multiplication commutes: $u_i v_i = v_i u_i$."}, {id:"B", text:"No, never.", isCorrect:false, explanation:"Matrix multiplication generally doesn't, but dot product does."}] },
        { id: "s3", type: "interactive_canvas", title: "Interactive Dot Product", content: "Drag the vectors to see how their coordinates affect the inner product.", interactiveCanvasId: "dot-product-interactive" },
        { id: "s4", type: "proof", title: "Proof: Commutativity", content: "**Theorem:** $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$.", interactiveSteps: [
           { stepText: "By definition, $\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + \\dots + u_n v_n$." },
           { prompt: "How can we rewrite $u_i v_i$ using real number properties?", options: [{id:"A", text:"$v_i u_i$", isCorrect:true, explanation:"Multiplication of real numbers is commutative."}, {id:"B", text:"$u_i / v_i$", isCorrect:false, explanation:""}], stepText: "So $\\mathbf{u} \\cdot \\mathbf{v} = v_1 u_1 + \\dots + v_n u_n$." },
           { stepText: "This sum is exactly the definition of $\\mathbf{v} \\cdot \\mathbf{u}$. Thus $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$. Goal reached." }
        ]},
        { id: "s5", type: "numerical", title: "Computation", content: "Compute $\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} \\cdot \\begin{bmatrix} 4 \\\\ -1 \\end{bmatrix}$.", numericAnswer: 5, numericTolerance: 0 },
        { id: "s6", type: "fill_in_blank", title: "Terminology", content: "The inner product is also referred to as the ___ product.", blankAnswer: "dot" }
      ]
    },
    {
      id: "les-3-1-1-ex1", title: "Example 1", description: "Computing inner products", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Compute $\\mathbf{u} \\cdot \\mathbf{v}$ and $\\mathbf{v} \\cdot \\mathbf{u}$ for $\\mathbf{u} = \\begin{bmatrix} 2 \\\\ -5 \\\\ -1 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 3 \\\\ 2 \\\\ -3 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Perform the calculation.**", interactiveSteps: [
           { stepText: "Multiply corresponding components: $(2)(3) + (-5)(2) + (-1)(-3)$." },
           { prompt: "What is the sum?", options: [{id:"A", text:"$6 - 10 + 3 = -1$", isCorrect:true, explanation:"Correct arithmetic."}, {id:"B", text:"$6 + 10 + 3 = 19$", isCorrect:false, explanation:"Watch the signs."}], stepText: "The result is -1." },
           { stepText: "Since the dot product is commutative, $\\mathbf{v} \\cdot \\mathbf{u}$ is also -1." }
        ]},
        { id: "s2", type: "quiz", title: "Significance", content: "What does the negative sign imply about the angle between vectors?", options: [{id:"A", text:"Acute angle", isCorrect:false, explanation:""}, {id:"B", text:"Obtuse angle", isCorrect:true, explanation:"A negative dot product means the angle is greater than 90 degrees."}] },
        { id: "s3", type: "numerical", title: "Try Another", content: "Calculate $\\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} \\cdot \\begin{bmatrix} 5 \\\\ 2 \\\\ -5 \\end{bmatrix}$.", numericAnswer: 0, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-1-1-thm1", title: "Theorem 1: Properties", description: "Algebraic rules", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 1", content: "Let $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ be vectors in $\\mathbb{R}^n$, and $c$ be a scalar. Then:\n\na. $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$\nb. $(\\mathbf{u} + \\mathbf{v}) \\cdot \\mathbf{w} = \\mathbf{u} \\cdot \\mathbf{w} + \\mathbf{v} \\cdot \\mathbf{w}$\nc. $(c\\mathbf{u}) \\cdot \\mathbf{v} = c(\\mathbf{u} \\cdot \\mathbf{v}) = \\mathbf{u} \\cdot (c\\mathbf{v})$\nd. $\\mathbf{u} \\cdot \\mathbf{u} \\ge 0$, and $\\mathbf{u} \\cdot \\mathbf{u} = 0$ if and only if $\\mathbf{u} = \\mathbf{0}$." },
        { id: "s1", type: "quiz", title: "Conceptual Check 1", content: "Can the dot product of a vector with itself be negative?", options: [{id:"A", text:"Yes, if the coordinates are negative.", isCorrect:false, explanation:"$(-2)(-2) = 4$. Squares are always non-negative."}, {id:"B", text:"No, it is always non-negative.", isCorrect:true, explanation:"It is the sum of squares."}] },
        { id: "s2", type: "quiz", title: "Conceptual Check 2", content: "Which property is analogous to the distributive law in real numbers?", options: [{id:"A", text:"Property (b)", isCorrect:true, explanation:"Distributing the dot product over vector addition."}, {id:"B", text:"Property (d)", isCorrect:false, explanation:""}] },
        { id: "s3", type: "proof", title: "Proof: Distributivity (b)", content: "**Goal: Show $(\\mathbf{u} + \\mathbf{v}) \\cdot \\mathbf{w} = \\mathbf{u} \\cdot \\mathbf{w} + \\mathbf{v} \\cdot \\mathbf{w}$.**", interactiveSteps: [
           { stepText: "Let the $i$-th components be $u_i, v_i, w_i$." },
           { prompt: "What is the $i$-th component of $\\mathbf{u} + \\mathbf{v}$?", options: [{id:"A", text:"$u_i + v_i$", isCorrect:true, explanation:""}, {id:"B", text:"$u_i v_i$", isCorrect:false, explanation:""}], stepText: "The inner product is $\\sum (u_i + v_i)w_i$." },
           { prompt: "Expand the term $(u_i + v_i)w_i$.", options: [{id:"A", text:"$u_i w_i + v_i w_i$", isCorrect:true, explanation:"Distributive property of real numbers."}, {id:"B", text:"$u_i v_i w_i$", isCorrect:false, explanation:""}], stepText: "Sum becomes $\\sum (u_i w_i + v_i w_i) = \\sum u_i w_i + \\sum v_i w_i$." },
           { stepText: "This equals $\\mathbf{u} \\cdot \\mathbf{w} + \\mathbf{v} \\cdot \\mathbf{w}$. Goal reached." }
        ]},
        { id: "s4", type: "fill_in_blank", title: "Positivity", content: "The property $\\mathbf{u} \\cdot \\mathbf{u} \\ge 0$ is called the ___ property of the inner product.", blankAnswer: "positivity" }
      ]
    }
  ]
};