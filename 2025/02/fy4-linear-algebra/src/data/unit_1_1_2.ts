import { Unit } from '../types';

export const UNIT_1_1_2: Unit = {
  id: "unit-1-1-2",
  title: "Subspaces",
  description: "Definition of Subspaces, Theorem 1, and Examples 6-12.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-2-def", title: "Definition of a Subspace", description: "What makes a subset a subspace?", icon: "BoxSelect",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If a vector space is a large set of vectors, what do you think a *subspace* is?", options: [{id:"A", text:"A smaller subset that also behaves exactly like a vector space.", isCorrect:true, explanation:"Exactly! A subspace is a vector space completely contained within another."}, {id:"B", text:"Any random collection of vectors from the vector space.", isCorrect:false, explanation:"Not any collection will work; it must follow specific rules to still be a vector space."}] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "To prove a subset is a subspace, do we need to check all 10 vector space axioms again?", options: [{id:"A", text:"Yes, all 10 are required.", isCorrect:false, explanation:"Actually, many properties like commutativity are inherited automatically!"}, {id:"B", text:"No, we only need to check a few specific ones.", isCorrect:true, explanation:"We only need to check 3 specific properties: zero vector, closure under addition, and closure under scalar multiplication."}] },
        { id: "s2", type: "theory", title: "Definition of a Subspace", content: "A **subspace** of a vector space $V$ is a subset $H$ of $V$ that has three properties:\n\na. The zero vector of $V$ is in $H$.\n\nb. $H$ is closed under vector addition. That is, for each $\\mathbf{u}$ and $\\mathbf{v}$ in $H$, the sum $\\mathbf{u} + \\mathbf{v}$ is in $H$.\n\nc. $H$ is closed under multiplication by scalars. That is, for each $\\mathbf{u}$ in $H$ and each scalar $c$, the vector $c\\mathbf{u}$ is in $H$." },
        { id: "s3", type: "theory", title: "Why only 3 properties?", content: "Properties (a), (b), and (c) guarantee that a subspace $H$ of $V$ is itself a *vector space*, under the vector space operations already defined in $V$.\n\nAxioms 2, 3, and 7-10 are automatically true in $H$ because they apply to all elements of $V$, including those in $H$.\nAxiom 5 (additive inverse) is also true in $H$ because if $\\mathbf{u}$ is in $H$, then $(-1)\\mathbf{u}$ is in $H$ by property (c), and $(-1)\\mathbf{u} = -\\mathbf{u}$.\n\nSo every subspace is a vector space. Conversely, every vector space is a subspace (of itself)." },
        { id: "s4", type: "numerical", title: "Quick Check", content: "If subset $H$ contains $\\mathbf{u}$ but does NOT contain $0\\mathbf{u}$, what is the minimum number of subspace properties it fails?", numericAnswer: 2, numericTolerance: 0 },
        { id: "s5", type: "fill_in_blank", title: "Definition Summary", content: "The easiest way to check if a subset is NOT a subspace is to see if the ___ vector is missing.", blankAnswer: "zero" }
      ]
    },
    {
      id: "les-1-1-2-ex6", title: "Example 6: The Zero Subspace", description: "The smallest possible subspace", icon: "Circle",
      slides: [
        { id: "s0", type: "example_q", title: "Example 6", content: "**Problem:** Let $H$ be the set consisting of *only* the zero vector in a vector space $V$. Written as $H = \\{\\mathbf{0}\\}$.\n\nShow that $H$ is a subspace of $V$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify the 3 properties of a subspace for $H = \\{\\mathbf{0}\\}$.**", interactiveSteps: [
           { prompt: "Property (a): Is the zero vector in $H$?", options: [{id:"A", text:"Yes, it's the only element.", isCorrect:true, explanation:"$H$ is literally defined as containing only $\\mathbf{0}$."}, {id:"B", text:"No", isCorrect:false, explanation:"Check the definition of H."}], stepText: "The zero vector is in $H$." },
           { stepText: "Property (b): Let $\\mathbf{u}$ and $\\mathbf{v}$ be in $H$. Since $\\mathbf{0}$ is the only element, $\\mathbf{u} = \\mathbf{0}$ and $\\mathbf{v} = \\mathbf{0}$. Their sum is $\\mathbf{0} + \\mathbf{0} = \\mathbf{0}$, which is in $H$." },
           { prompt: "Property (c): Let $\\mathbf{u}$ be in $H$ and $c$ be a scalar. What is $c\\mathbf{u}$?", options: [{id:"A", text:"$c$", isCorrect:false, explanation:"The result is a vector, not a scalar."}, {id:"B", text:"$\\mathbf{0}$", isCorrect:true, explanation:"Since $\\mathbf{u}$ must be $\\mathbf{0}$, $c\\mathbf{0} = \\mathbf{0}$."}], stepText: "For any scalar $c$, $c\\mathbf{0} = \\mathbf{0}$, which is in $H$." },
           { stepText: "All three properties hold. Thus, $H$ is a subspace of $V$. It is called the **zero subspace**." }
        ]},
        { id: "s2", type: "quiz", title: "Smallest Subspace", content: "Is it possible to have a subspace with NO vectors in it (an empty set)?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"A subspace must contain at least the zero vector."}, {id:"B", text:"No", isCorrect:true, explanation:"Property (a) requires the zero vector to be in the subspace, so it can never be empty."}] }
      ]
    },
    {
      id: "les-1-1-2-ex7", title: "Example 7: Subspaces of Polynomials", description: "Polynomials within Functions", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Example 7", content: "**Problem:** Let $\\mathbb{P}$ be the set of all polynomials with real coefficients, with operations defined as for functions. \n\nShow that $\\mathbb{P}$ is a subspace of the space of all real-valued functions defined on $\\mathbb{R}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify the 3 properties for $\\mathbb{P}$.**", interactiveSteps: [
           { stepText: "The zero polynomial $\\mathbf{p}(t) = 0$ is a real-valued function, so the zero vector is in $\\mathbb{P}$." },
           { prompt: "If you add two polynomials, is the result always a polynomial?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Adding terms like $t^2 + t^3$ still yields a polynomial function."}, {id:"B", text:"No", isCorrect:false, explanation:"Think about polynomial addition."}], stepText: "The sum of two polynomials is a polynomial. Closed under addition." },
           { stepText: "Multiplying a polynomial by a scalar $c$ scales the coefficients, yielding another polynomial. Closed under scalar multiplication." },
           { stepText: "Thus, $\\mathbb{P}$ is a subspace of the space of all functions." }
        ]},
        { id: "s2", type: "theory", title: "Nested Subspaces", content: "Also, for each $n \\ge 0$, $\\mathbb{P}_n$ (polynomials of degree at most $n$) is a subspace of $\\mathbb{P}$.\n\nBecause $\\mathbb{P}_n$ is a subset of $\\mathbb{P}$ that contains the zero polynomial, the sum of two polynomials in $\\mathbb{P}_n$ is also in $\\mathbb{P}_n$, and a scalar multiple of a polynomial in $\\mathbb{P}_n$ is also in $\\mathbb{P}_n$." },
        { id: "s3", type: "fill_in_blank", title: "Polynomial inclusion", content: "The space $\\mathbb{P}_3$ is a subspace of $\\mathbb{P}_4$, but $\\mathbb{P}_4$ is ___ a subspace of $\\mathbb{P}_3$.", blankAnswer: "not" }
      ]
    },
    {
      id: "les-1-1-2-ex8", title: "Example 8: Subspaces vs Subsets", description: "R2 inside R3?", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Example 8", content: "**Problem:** Is the vector space $\\mathbb{R}^2$ a subspace of $\\mathbb{R}^3$?", interactiveCanvasId: "subspace-r3-interactive" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Analyze the structures of $\\mathbb{R}^2$ and $\\mathbb{R}^3$.**", interactiveSteps: [
           { stepText: "The vector space $\\mathbb{R}^2$ consists of vectors with exactly TWO entries, like $\\begin{bmatrix} s \\\\ t \\end{bmatrix}$." },
           { stepText: "The vector space $\\mathbb{R}^3$ consists of vectors with exactly THREE entries." },
           { prompt: "Can a vector from $\\mathbb{R}^2$ physically be an element of $\\mathbb{R}^3$?", options: [{id:"A", text:"Yes, we can just assume a third coordinate is zero.", isCorrect:false, explanation:"While we can map it that way, strictly speaking, a 2-element list is NOT a 3-element list."}, {id:"B", text:"No, it does not have the right number of entries.", isCorrect:true, explanation:"Exactly. A subspace must be a SUBSET. If the elements are different types, it can't be a subset."}], stepText: "Because $\\mathbb{R}^2$ vectors have only two entries, $\\mathbb{R}^2$ is not even a subset of $\\mathbb{R}^3$." },
           { stepText: "Therefore, $\\mathbb{R}^2$ is **not** a subspace of $\\mathbb{R}^3$." }
        ]},
        { id: "s2", type: "theory", title: "A Plane in R3", content: "However, consider the set $H$ in $\\mathbb{R}^3$:\n$$ H = \\left\\{ \\begin{bmatrix} s \\\\ t \\\\ 0 \\end{bmatrix} : s \\text{ and } t \\text{ are real} \\right\\} $$\nThis $H$ is a subset of $\\mathbb{R}^3$ that \"looks\" and \"acts\" exactly like $\\mathbb{R}^2$, although it is logically distinct from $\\mathbb{R}^2$.\n\nBecause the zero vector is in $H$, and $H$ is closed under addition and scalar multiplication, $H$ **is** a subspace of $\\mathbb{R}^3$." },
        { id: "s3", type: "quiz", title: "Understanding the distinction", content: "Why is $H$ a subspace but $\\mathbb{R}^2$ is not?", options: [{id:"A", text:"Because elements in $H$ have 3 entries (one is 0), so it is a valid subset of R3.", isCorrect:true, explanation:"Subsets must contain items of the same form."}, {id:"B", text:"Because R2 doesn't have a zero vector.", isCorrect:false, explanation:"R2 does have a zero vector [0, 0]."}] }
      ]
    },
    {
      id: "les-1-1-2-ex9", title: "Example 9: Planes & Lines", description: "The necessity of the origin", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Example 9", content: "**Problem:** Is a plane in $\\mathbb{R}^3$ not through the origin a subspace of $\\mathbb{R}^3$?", interactiveCanvasId: "line-not-origin-interactive" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test the three subspace properties.**", interactiveSteps: [
           { prompt: "What is the first property a subspace must satisfy?", options: [{id:"A", text:"It must be closed under addition.", isCorrect:false, explanation:"While true, there is a much easier first check."}, {id:"B", text:"It must contain the zero vector.", isCorrect:true, explanation:"Always check for the zero vector first!"}], stepText: "Property (a): It must contain the zero vector $\\mathbf{0}$." },
           { stepText: "The zero vector $\\mathbf{0}$ in $\\mathbb{R}^3$ is the origin $(0,0,0)$." },
           { stepText: "Because the plane does *not* pass through the origin, it does not contain the zero vector." },
           { stepText: "Therefore, the plane is **not** a subspace of $\\mathbb{R}^3$." }
        ]},
        { id: "s2", type: "theory", title: "Lines not through the origin", content: "Similarly, a line in $\\mathbb{R}^2$ not through the origin is **not** a subspace of $\\mathbb{R}^2$.\n\nNot only does it fail to contain $\\mathbf{0}$, but it is also not closed under addition or scalar multiplication. As seen in the interactive visual, adding two vectors on a shifted line pushes the resulting vector off the line entirely!" },
        { id: "s3", type: "fill_in_blank", title: "Geometric Rule", content: "A line or a plane in $\\mathbb{R}^n$ must pass through the ___ to be a subspace.", blankAnswer: "origin" }
      ]
    },
    {
      id: "les-1-1-2-ex10", title: "Example 10: Span of 2 Vectors", description: "Proving the Span is a subspace", icon: "Expand",
      slides: [
        { id: "s0", type: "example_q", title: "Example 10", content: "**Problem:** Given vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$ in a vector space $V$, let $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$. \n\nShow that $H$ is a subspace of $V$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify properties for $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$.**", interactiveSteps: [
           { stepText: "The zero vector is in $H$ because $\\mathbf{0} = 0\\mathbf{v}_1 + 0\\mathbf{v}_2$." },
           { prompt: "Let $\\mathbf{u} = s_1\\mathbf{v}_1 + s_2\\mathbf{v}_2$ and $\\mathbf{w} = t_1\\mathbf{v}_1 + t_2\\mathbf{v}_2$ be in $H$. What is $\\mathbf{u} + \\mathbf{w}$?", options: [{id:"A", text:"$(s_1+t_1)\\mathbf{v}_1 + (s_2+t_2)\\mathbf{v}_2$", isCorrect:true, explanation:"Grouping terms by $\\mathbf{v}_1$ and $\\mathbf{v}_2$."}, {id:"B", text:"$s_1t_1\\mathbf{v}_1 + s_2t_2\\mathbf{v}_2$", isCorrect:false, explanation:"We are adding, not multiplying."}], stepText: "$\\mathbf{u} + \\mathbf{w} = (s_1+t_1)\\mathbf{v}_1 + (s_2+t_2)\\mathbf{v}_2$. Since this is a linear combination of $\\mathbf{v}_1$ and $\\mathbf{v}_2$, it is in $H$!" },
           { stepText: "Furthermore, for any scalar $c$, $c\\mathbf{u} = c(s_1\\mathbf{v}_1 + s_2\\mathbf{v}_2) = (cs_1)\\mathbf{v}_1 + (cs_2)\\mathbf{v}_2$." },
           { stepText: "This shows $c\\mathbf{u}$ is in $H$, closing it under scalar multiplication. $H$ is a subspace of $V$!" }
        ]},
        { id: "s2", type: "quiz", title: "Span meaning", content: "What does $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ represent geometrically in $\\mathbb{R}^3$ if they are not multiples of each other?", options: [{id:"A", text:"A line through the origin", isCorrect:false, explanation:"A single non-zero vector spans a line."}, {id:"B", text:"A plane through the origin", isCorrect:true, explanation:"Two linearly independent vectors span a 2D plane through the origin."}] }
      ]
    },
    {
      id: "les-1-1-2-th1", title: "Theorem 1: Span is a Subspace", description: "The Spanning Set Theorem", icon: "BookOpen",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Based on Example 10, if we take the span of 5 vectors instead of 2, will it still be a subspace?", options: [{id:"A", text:"Yes, the logic applies to any number of vectors.", isCorrect:true, explanation:"Exactly! The same proof extends to any $p$ vectors."}, {id:"B", text:"No, it only works for up to 3 vectors.", isCorrect:false, explanation:"Span always creates a subspace, regardless of the number of vectors."}] },
        { id: "s1", type: "theory", title: "Theorem 1", content: "The argument in Example 10 easily generalizes to prove the following theorem:\n\n**Theorem 1:**\nIf $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ are in a vector space $V$, then $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is a subspace of $V$.\n\nWe call $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ the **subspace spanned (or generated) by** $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$." },
        { id: "s2", type: "theory", title: "Spanning Sets", content: "Given any subspace $H$ of $V$, a **spanning (or generating) set** for $H$ is a set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ in $H$ such that $H = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$.\n\nThis is one of the most common ways of describing a subspace in linear algebra!" },
        { id: "s3", type: "numerical", title: "Spanning dimension", content: "If $H = \\text{Span}\\{\\mathbf{v}_1\\}$ and $\\mathbf{v}_1 \\neq \\mathbf{0}$ in $\\mathbb{R}^3$, what geometric shape is $H$ (in terms of dimension, 1 for line, 2 for plane, 3 for space)?", numericAnswer: 1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-2-ex11", title: "Example 11: Parametric Forms", description: "Using Theorem 1", icon: "Sliders",
      slides: [
        { id: "s0", type: "example_q", title: "Example 11", content: "**Problem:** Let $H$ be the set of all vectors of the form $(a - 3b, b - a, a, b)$, where $a$ and $b$ are arbitrary scalars. That is,\n$$ H = \\left\\{ \\begin{bmatrix} a - 3b \\\\ b - a \\\\ a \\\\ b \\end{bmatrix} : a \\text{ and } b \\text{ in } \\mathbb{R} \\right\\} $$\nShow that $H$ is a subspace of $\\mathbb{R}^4$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Write the set as a Span of vectors.**", interactiveSteps: [
           { stepText: "Write the vectors in $H$ as column vectors." },
           { prompt: "Separate the vector into a sum of two vectors: one with $a$'s and one with $b$'s. What does the $a$ vector look like?", options: [{id:"A", text:"$a \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$", isCorrect:true, explanation:"Extracting just the coefficients of $a$."}, {id:"B", text:"$a \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 1 \\end{bmatrix}$", isCorrect:false, explanation:"Check the 2nd and 4th entries."}], stepText: "Vector splits as: $a \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\\\ 0 \\end{bmatrix} + b \\begin{bmatrix} -3 \\\\ 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "This calculation shows that $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, where $\\mathbf{v}_1$ and $\\mathbf{v}_2$ are the vectors above." },
           { stepText: "By Theorem 1, since $H$ is a span of vectors, it is automatically a subspace of $\\mathbb{R}^4$!" }
        ]},
        { id: "s2", type: "quiz", title: "Strategy", content: "Why is expressing $H$ as a span so powerful?", options: [{id:"A", text:"It proves it is a subspace immediately without checking the 3 properties manually.", isCorrect:true, explanation:"Theorem 1 does the heavy lifting for us!"}, {id:"B", text:"It reduces the dimension of the space.", isCorrect:false, explanation:"It doesn't change dimensions, just reveals the structure."}] },
        { id: "s3", type: "numerical", title: "Coefficient extraction", content: "In the vector $(4a + 2b, -a, b)$, what is the second entry of $\\mathbf{v}_1$ (the vector scaled by $a$)?", numericAnswer: -1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-2-ex12", title: "Example 12: Is it in the Subspace?", description: "Connecting to Linear Systems", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Example 12", content: "**Problem:** For what value(s) of $h$ will $\\mathbf{y}$ be in the subspace of $\\mathbb{R}^3$ spanned by $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$, if:\n\n$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ -1 \\\\ -2 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 5 \\\\ -4 \\\\ -7 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} -3 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\mathbf{y} = \\begin{bmatrix} -4 \\\\ 3 \\\\ h \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Determine when $\\mathbf{y}$ is a linear combination of $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$.**", interactiveSteps: [
           { stepText: "This means we must solve the system $x_1\\mathbf{v}_1 + x_2\\mathbf{v}_2 + x_3\\mathbf{v}_3 = \\mathbf{y}$." },
           { prompt: "To solve this, we use an augmented matrix. What is the matrix?", options: [{id:"A", text:"$[\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3 \\ | \\ \\mathbf{y}]$", isCorrect:true, explanation:"Standard augmented matrix for a linear combination."}, {id:"B", text:"$[\\mathbf{y} \\ | \\ \\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$", isCorrect:false, explanation:"The target vector goes on the right."}], stepText: "We row reduce the augmented matrix $[\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3 \\ | \\ \\mathbf{y}]$." },
           { stepText: "Row reducing this matrix (as done in Chapter 1) reveals that the system is consistent if and only if there is no pivot in the rightmost column." },
           { stepText: "The row reduction leads to a bottom row of $[0 \\ 0 \\ 0 \\ | \\ h - 5]$. Thus, it is consistent if and only if $h = 5$." }
        ]},
        { id: "s2", type: "numerical", title: "Consistency", content: "If $h=5$, the system is consistent. What is the value of $h$ required?", numericAnswer: 5, numericTolerance: 0 },
        { id: "s3", type: "fill_in_blank", title: "Spanning Concept", content: "Checking if a vector is in the subspace spanned by a set is equivalent to checking if the corresponding linear system is ___.", blankAnswer: "consistent" }
      ]
    }
  ]
};