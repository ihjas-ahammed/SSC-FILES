import { Unit } from '../types';

export const UNIT_1_1_1: Unit = {
  id: "unit-1-1-1",
  title: "Definition of Vector Spaces",
  description: "Axioms of Vector Space, Properties, and Examples 1-5 from Section 4.1.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-1-def", title: "Definition of a Vector Space", description: "The 10 axioms", icon: "List",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Is a vector space limited to just geometric arrows pointing in 2D or 3D space?", options: [{ id: "A", text: "Yes, vectors are only geometric arrows.", isCorrect: false, explanation: "Vector spaces are abstract! They can contain polynomials, matrices, and functions!" }, { id: "B", text: "No, vectors can be any objects satisfying specific rules.", isCorrect: true, explanation: "Vectors are general abstract objects that satisfy the 10 specific mathematical axioms." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What are the two fundamental operations defined on any vector space?", options: [{ id: "A", text: "Addition and Scalar Multiplication", isCorrect: true, explanation: "Correct. All 10 axioms are based entirely on defining how these two operations work." }, { id: "B", text: "Dot Product and Cross Product", isCorrect: false, explanation: "These are specific to inner product spaces and $\\mathbb{R}^3$, not general vector spaces." }] },
        {
  "id": "s2",
  "type": "theory",
  "title": "Definition of a Vector Space",
  "content": "A **vector space** is a nonempty set $V$ of objects, called *vectors*, on which two operations are defined: **vector addition** and **scalar multiplication** (by real numbers $\\mathbb{R}$).\n\nFor $V$ to be a vector space, the following ten axioms must hold for all vectors $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ in $V$ and all scalars $c, d$:\n\n1.  **Closure under addition:** The sum $\\mathbf{u} + \\mathbf{v}$ is in $V$.\n2.  **Commutativity of addition:** $\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}$.\n3.  **Associativity of addition:** $(\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w})$.\n4.  **Additive identity:** There exists a zero vector $\\mathbf{0}$ in $V$ such that $\\mathbf{u} + \\mathbf{0} = \\mathbf{u}$.\n5.  **Additive inverse:** For each $\\mathbf{u}$ in $V$, there exists a vector $-\\mathbf{u}$ in $V$ such that $\\mathbf{u} + (-\\mathbf{u}) = \\mathbf{0}$.\n6.  **Closure under scalar multiplication:** The scalar multiple $c\\mathbf{u}$ is in $V$.\n7.  **Distributivity over vector addition:** $c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}$.\n8.  **Distributivity over scalar"
        },{ id: "s3", type: "interactive_canvas", title: "Vector Addition Axioms", content: "Drag the tips of $\\mathbf{u}$ and $\\mathbf{v}$ to observe how addition works geometrically via the parallelogram rule. This naturally satisfies commutative and closure axioms in $\\mathbb{R}^2$.", interactiveCanvasId: "vector-space-interactive" },
        {
          id: "s4", type: "proof", title: "Interactive Proof: Uniqueness of Zero", content: "**Goal: Prove that the zero vector $\\mathbf{0}$ is unique.**\n\nAssume there is *another* zero vector $\\mathbf{w}$ such that $\\mathbf{u} + \\mathbf{w} = \\mathbf{u}$ for all $\\mathbf{u}$.", interactiveSteps: [
            { stepText: "Since $\\mathbf{w}$ acts as a zero vector, choosing $\\mathbf{u} = \\mathbf{0}$ gives $\\mathbf{0} + \\mathbf{w} = \\mathbf{0}$." },
            { prompt: "But $\\mathbf{0}$ is *also* a zero vector. What does $\\mathbf{w} + \\mathbf{0}$ equal by the property of $\\mathbf{0}$?", options: [{ id: "A", text: "$\\mathbf{w}$", isCorrect: true, explanation: "Adding the standard zero vector to $\\mathbf{w}$ leaves $\\mathbf{w}$ unchanged." }, { id: "B", text: "$\\mathbf{0}$", isCorrect: false, explanation: "No, adding $\\mathbf{0}$ to a vector leaves the original vector unchanged." }], stepText: "By the property of $\\mathbf{0}$, $\\mathbf{w} + \\mathbf{0} = \\mathbf{w}$." },
            { prompt: "Axiom 2 states addition is commutative. Therefore, $\\mathbf{0} + \\mathbf{w} = \\mathbf{w} + \\mathbf{0}$. Substituting our previous steps gives:", options: [{ id: "A", text: "$\\mathbf{0} = \\mathbf{w}$", isCorrect: true, explanation: "Exactly! The two assumed zero vectors must be exactly the same." }, { id: "B", text: "$\\mathbf{w} = \\mathbf{u}$", isCorrect: false, explanation: "Incorrect substitution." }], stepText: "$\\mathbf{0} = \\mathbf{w}$. The zero vector is perfectly unique! Goal reached." }
          ]
        },
        { id: "s5", type: "numerical", title: "Axiom Verification", content: "To check Axiom 8, we evaluate $(3 + 4)\\mathbf{u} = 7\\mathbf{u}$. What is the scalar coefficient of $\\mathbf{u}$ when expanded to $3\\mathbf{u} + c\\mathbf{u}$?", numericAnswer: 4, numericTolerance: 0 },
        { id: "s6", type: "fill_in_blank", title: "Axiom Check", content: "Axioms 1 and 6 assert that the vector space is uniquely ___ under the operations of addition and scalar multiplication.", blankAnswer: "closed" }
      ]
    },
    {
      id: "les-1-1-2-prop", title: "Properties of Vector Spaces", description: "Theorems derived from Axioms", icon: "Activity",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Is it possible to mathematically prove $0\\mathbf{u} = \\mathbf{0}$ using *only* the 10 axioms?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Yes, it is a direct consequence of the axioms, not an assumption." }, { id: "B", text: "No, it must be assumed", isCorrect: false, explanation: "It is a theorem proven strictly from the axioms, not an independent axiom." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What is the result of scaling the zero vector by any scalar $c$?", options: [{ id: "A", text: "$\\mathbf{0}$", isCorrect: true, explanation: "Scaling the zero vector yields the zero vector." }, { id: "B", text: "$c$", isCorrect: false, explanation: "The result must be a vector in $V$, not a scalar." }] },
        { id: "s2", type: "theory", title: "Simple Properties", content: "Using only the 10 axioms, we can prove three essential properties that apply to *every* vector space $V$:\n\nFor each $\\mathbf{u}$ in $V$ and scalar $c$:\n1. $0\\mathbf{u} = \\mathbf{0}$\n2. $c\\mathbf{0} = \\mathbf{0}$\n3. $-\\mathbf{u} = (-1)\\mathbf{u}$\n\n*Note*: The $0$ on the left of property 1 is the scalar zero, while $\\mathbf{0}$ on the right is the zero vector." },
        { id: "s3", type: "interactive_canvas", title: "Scaling Vectors", content: "Drag the slider to scale vector $\\mathbf{u}$. Notice that scaling by $0$ collapses it to the zero vector at the origin.", interactiveCanvasId: "vector-scale-interactive" },
        {
          id: "s4", type: "proof", title: "Interactive Proof: $0\\mathbf{u} = \\mathbf{0}$", content: "**Goal: Prove that $0\\mathbf{u} = \\mathbf{0}$.**\n\nWe start with the scalar fact that $0 = 0 + 0$.", interactiveSteps: [
            { stepText: "Write $0\\mathbf{u} = (0 + 0)\\mathbf{u}$." },
            { prompt: "By Axiom 8 (distributivity of scalars), what does $(0 + 0)\\mathbf{u}$ expand to?", options: [{ id: "A", text: "$0\\mathbf{u} + 0\\mathbf{u}$", isCorrect: true, explanation: "Correct expansion using Axiom 8." }, { id: "B", text: "$0(\\mathbf{u} + \\mathbf{u})$", isCorrect: false, explanation: "That is Axiom 7." }], stepText: "So, $0\\mathbf{u} = 0\\mathbf{u} + 0\\mathbf{u}$." },
            { prompt: "Now, add the negative vector $-(0\\mathbf{u})$ to both sides. What is $0\\mathbf{u} + -(0\\mathbf{u})$?", options: [{ id: "A", text: "$\\mathbf{0}$", isCorrect: true, explanation: "A vector plus its negative is the zero vector (Axiom 5)." }, { id: "B", text: "0", isCorrect: false, explanation: "The result is the zero vector, not the scalar zero." }], stepText: "$\\mathbf{0} = (0\\mathbf{u} + 0\\mathbf{u}) + -(0\\mathbf{u})$." },
            { stepText: "Using associativity (Axiom 3), $\\mathbf{0} = 0\\mathbf{u} + (0\\mathbf{u} + -(0\\mathbf{u})) = 0\\mathbf{u} + \\mathbf{0} = 0\\mathbf{u}$. Goal reached!" }
          ]
        },
        { id: "s5", type: "numerical", title: "Scalar Cancellation", content: "If $c\\mathbf{u} = \\mathbf{0}$ and $c = 5$, what must the magnitude of the vector $\\mathbf{u}$ be?", numericAnswer: 0, numericTolerance: 0 },
        { id: "s6", type: "fill_in_blank", title: "Property Check", content: "The vector $-\\mathbf{u}$ is defined uniquely as the ___ of $\\mathbf{u}$.", blankAnswer: "negative" }
      ]
    },
    {
      id: "les-1-1-3-ex12", title: "Examples 1 & 2: Rn and Arrows", description: "Geometric Vectors", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Examples 1 & 2", content: "**Problem:** Show that the space $\\mathbb{R}^n$ (lists of $n$ numbers) and the geometric space $V$ of 3D arrows are vector spaces." },
        {
          id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify they satisfy the vector space definition.**", interactiveSteps: [
            { stepText: "For $\\mathbb{R}^n$, addition is component-wise: $(u_1, u_2) + (v_1, v_2) = (u_1+v_1, u_2+v_2)$." },
            { stepText: "Since real numbers commute ($u_1+v_1 = v_1+u_1$), the vectors commute: $\\mathbf{u}+\\mathbf{v} = \\mathbf{v}+\\mathbf{u}$." },
            { prompt: "What represents the zero vector in $\\mathbb{R}^n$?", options: [{ id: "A", text: "A list of $n$ zeros: $(0, 0, \\dots, 0)$", isCorrect: true, explanation: "Adding this to any vector leaves it unchanged." }, { id: "B", text: "The scalar $0$", isCorrect: false, explanation: "A vector space needs a zero *vector*." }], stepText: "The zero vector is $(0, \\dots, 0)$." },
            { stepText: "For geometric arrows, addition is defined by the parallelogram rule, and scalar mult scales the arrow length. This inherently satisfies all axioms! Goal reached." }
          ]
        },
        { id: "s2", type: "quiz", title: "Objective Check 1", content: "If two arrows have the same length and direction but start at different points, are they the same vector in $V$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Vectors in this space are defined only by length and direction, not starting point." }, { id: "B", text: "No", isCorrect: false, explanation: "Starting point does not matter for free vectors." }] },
        { id: "s3", type: "quiz", title: "Objective Check 2", content: "Is $\\mathbb{R}^1$ (the real line) a vector space?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "It trivially satisfies all 10 axioms as just standard real number arithmetic." }, { id: "B", text: "No", isCorrect: false, explanation: "It satisfies all properties." }] },
        { id: "s4", type: "numerical", title: "Components", content: "In $\\mathbb{R}^4$, how many components does each individual vector have?", numericAnswer: 4, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-4-ex3", title: "Example 3: Infinite Sequences", description: "Space of signals", icon: "Waves",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Let $\\mathbb{S}$ be the space of all doubly infinite sequences of numbers: $\\{y_k\\} = (\\dots, y_{-2}, y_{-1}, y_0, y_1, y_2, \\dots)$. Show this is a vector space." },
        {
          id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Define operations and check axioms.**", interactiveSteps: [
            { stepText: "Define addition term-by-term: $\\{y_k\\} + \\{z_k\\} = \\{y_k + z_k\\}$." },
            { prompt: "Define scalar multiplication. What is $c\\{y_k\\}$?", options: [{ id: "A", text: "$\\{cy_k\\}$", isCorrect: true, explanation: "Multiply every term in the sequence by c." }, { id: "B", text: "$\\{c+y_k\\}$", isCorrect: false, explanation: "That would be addition, not multiplication." }], stepText: "Scalar mult: $c\\{y_k\\} = \\{cy_k\\}$." },
            { stepText: "Because operations are performed element-wise on real numbers, all 10 axioms are inherited directly from the properties of $\\mathbb{R}$. Goal reached!" }
          ]
        },
        { id: "s2", type: "quiz", title: "Application", content: "What is a common application of the vector space of infinite sequences?", options: [{ id: "A", text: "Discrete-time signals in engineering", isCorrect: true, explanation: "Signals measured at discrete times form exactly this vector space." }, { id: "B", text: "Calculating the area of a circle", isCorrect: false, explanation: "This isn't a direct application of infinite sequences." }] },
        { id: "s3", type: "quiz", title: "Zero Sequence", content: "What is the zero vector in $\\mathbb{S}$?", options: [{ id: "A", text: "A sequence of all zeros.", isCorrect: true, explanation: "(\\dots, 0, 0, 0, \\dots)" }, { id: "B", text: "An empty sequence.", isCorrect: false, explanation: "A zero vector must exist and match the structure of the space." }] },
        { id: "s4", type: "numerical", title: "Addition", content: "If $y_k = 2$ for all $k$ and $z_k = 3$ for all $k$, what is the value of the sequence element $(y+z)_5$?", numericAnswer: 5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-5-ex4", title: "Example 4: Polynomials", description: "The space P_n", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Example 4", content: "**Problem:** Let $\\mathbb{P}_n$ be the set of all polynomials of degree at most $n$: $\\mathbf{p}(t) = a_0 + a_1 t + \\dots + a_n t^n$. Show it is a vector space.", interactiveCanvasId: "polynomial-space-interactive" },
        {
          id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify closure under addition and scalar multiplication.**", interactiveSteps: [
            { stepText: "Take two polynomials $\\mathbf{p}(t)$ and $\\mathbf{q}(t)$. Their sum is $(a_0+b_0) + (a_1+b_1)t + \\dots + (a_n+b_n)t^n$." },
            { prompt: "Does this sum have a degree greater than $n$?", options: [{ id: "A", text: "No, it is at most $n$.", isCorrect: true, explanation: "Adding terms of degree up to $n$ can't spontaneously create a degree $n+1$ term." }, { id: "B", text: "Yes, it could be $2n$.", isCorrect: false, explanation: "Degrees don't multiply when adding." }], stepText: "The sum is still in $\\mathbb{P}_n$. Closure under addition holds!" },
            { stepText: "Scalar multiplication $c\\mathbf{p}(t) = (ca_0) + (ca_1)t + \\dots + (ca_n)t^n$. This also clearly has degree $\\le n$." },
            { stepText: "The zero vector is the zero polynomial $\\mathbf{0}(t) = 0$. All 10 axioms hold! Goal reached." }
          ]
        },
        { id: "s2", type: "quiz", title: "Degree Exactly n?", content: "Is the set of polynomials of degree EXACTLY $n$ a vector space?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "Think about the zero vector." }, { id: "B", text: "No", isCorrect: true, explanation: "It lacks the zero polynomial, and adding $t^n$ and $-t^n$ yields degree 0, which breaks closure." }] },
        { id: "s3", type: "quiz", title: "The Zero Polynomial", content: "What is the degree of the zero polynomial?", options: [{ id: "A", text: "0", isCorrect: false, explanation: "A constant non-zero polynomial like $p(t)=5$ has degree 0." }, { id: "B", text: "Undefined (or negative infinity)", isCorrect: true, explanation: "Its coefficients are all zero, so it doesn't have a formal highest power." }] },
        { id: "s4", type: "numerical", title: "Evaluation", content: "Let $\\mathbf{p}(t) = 2 + 3t$. What is the value of $(2\\mathbf{p})(1)$?", numericAnswer: 10, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-6-ex5", title: "Example 5: Real-Valued Functions", description: "Functions as vectors", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Example 5", content: "**Problem:** Let $V$ be the set of all real-valued functions defined on a set $\\mathbb{D}$. Show that $V$ is a vector space.", interactiveCanvasId: "function-space-interactive" },
        {
          id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Define the vector operations for functions.**", interactiveSteps: [
            { stepText: "Define addition: $(\\mathbf{f} + \\mathbf{g})(t) = \\mathbf{f}(t) + \\mathbf{g}(t)$." },
            { prompt: "Define scalar multiplication: $(c\\mathbf{f})(t) = ?$ ", options: [{ id: "A", text: "$c\\mathbf{f}(t)$", isCorrect: true, explanation: "Scale the output of the function at each point." }, { id: "B", text: "$\\mathbf{f}(ct)$", isCorrect: false, explanation: "This scales the input, not the vector." }], stepText: "Scalar mult is $(c\\mathbf{f})(t) = c\\mathbf{f}(t)$." },
            { stepText: "The zero vector is the function $\\mathbf{f}(t) = 0$ for all $t$." },
            { stepText: "Since $\\mathbb{R}$ is a vector space, evaluating at every $t$ inherits all 10 axioms. Goal reached!" }
          ]
        },
        { id: "s2", type: "quiz", title: "Equality of Functions", content: "When are two function vectors $\\mathbf{f}$ and $\\mathbf{g}$ considered equal?", options: [{ id: "A", text: "If $\\mathbf{f}(t) = \\mathbf{g}(t)$ for all $t$ in $\\mathbb{D}$", isCorrect: true, explanation: "They must match at every single point in the domain." }, { id: "B", text: "If their derivatives are equal", isCorrect: false, explanation: "Functions with same derivatives can differ by a constant." }] },
        { id: "s3", type: "quiz", title: "A Point in Space", content: "In this vector space, a single 'point' (vector) is:", options: [{ id: "A", text: "A coordinate $(x,y)$", isCorrect: false, explanation: "That is a point in $\\mathbb{R}^2$." }, { id: "B", text: "An entire function $\\mathbf{f}$", isCorrect: true, explanation: "The whole function is just one element of this infinite-dimensional space!" }] },
        { id: "s4", type: "numerical", title: "Function Addition", content: "If $\\mathbf{f}(t) = 1 + 2t$ and $\\mathbf{g}(t) = 3t$, what is the combined evaluation $(\\mathbf{f}+\\mathbf{g})(2)$?", numericAnswer: 11, numericTolerance: 0 }
      ]
    }
  ]
};