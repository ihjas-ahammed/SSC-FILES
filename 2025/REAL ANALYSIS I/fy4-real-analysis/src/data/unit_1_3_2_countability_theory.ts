import { Unit } from '../types';

export const UNIT_1_3_2: Unit = {
  id: "unit-1-3-2",
  title: "Countability Theory",
  description: "Denumerable sets, Cantor's Diagonalization, and Uncountability",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-2-d1", title: "Definition 1.3.6: Countable Sets", description: "Different sizes of infinity", icon: "ListOrdered",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Are all infinite sets exactly the same size?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Some infinities are strictly larger than others!" }, { id: "B", text: "Yes", isCorrect: false, explanation: "This was Cantor's great breakthrough." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What does it mean for a set to be 'countable'?", options: [{ id: "A", text: "You can list its elements in an order 1, 2, 3...", isCorrect: true, explanation: "Even if it takes forever, you can put them in a list." }, { id: "B", text: "It must be finite.", isCorrect: false, explanation: "Infinite sets can be countable too." }] },
        { id: "s2", type: "theory", title: "Definition 1.3.6: Countability", content: "**(a)** A set $S$ is said to be **denumerable** (or **countably infinite**) if there exists a bijection of $\\mathbb{N}$ onto $S$.\n**(b)** A set $S$ is said to be **countable** if it is either finite or denumerable.\n**(c)** A set $S$ is said to be **uncountable** if it is not countable.\n\nIf a set is denumerable, it means we can \"list\" its elements: $s_1, s_2, s_3, \\dots$ covering the whole set eventually." },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "An infinite set that can be put into a one-to-one correspondence with $\\mathbb{N}$ is called ___.", blankAnswer: "denumerable" }
      ]
    },
    {
      id: "les-1-3-2-e1", title: "Examples 1.3.7: Countable Sets", description: "Mapping N to Even numbers and Integers", icon: "Repeat",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1.3.7", content: "**Are these sets denumerable?**\n(a) The set of even natural numbers $E := \\{2n : n \\in \\mathbb{N}\\}$\n(b) The set of all integers $\\mathbb{Z}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Evens", content: "**Goal: Find a bijection from $\\mathbb{N}$ to $E$.**", interactiveSteps: [
            { stepText: "We need a function $f: \\mathbb{N} \\to E$ that hits every even number exactly once." },
            { prompt: "What is the simplest formula for $f(n)$?", options: [{ id: "A", text: "$f(n) = 2n$", isCorrect: true, explanation: "1->2, 2->4, 3->6. A perfect bijection." }, { id: "B", text: "$f(n) = n+2$", isCorrect: false, explanation: "1->3, which isn't even." }], stepText: "Using $f(n) = 2n$, we see that $\\mathbb{N}$ and $E$ have the exact same cardinality!" }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Integers $\\mathbb{Z}$", content: "**Goal: Find a way to list ALL integers, positive and negative.**", interactiveSteps: [
            { stepText: "If we try to list them $0, 1, 2, 3\\dots$ we will never reach the negative numbers." },
            { prompt: "How can we arrange the list so we hit both sides?", options: [{ id: "A", text: "Alternate: 0, 1, -1, 2, -2, 3, -3...", isCorrect: true, explanation: "This way, every integer is eventually reached." }, { id: "B", text: "All negatives first, then positives", isCorrect: false, explanation: "You can't finish an infinite list of negatives to start the positives." }], stepText: "We list them as: $0, 1, -1, 2, -2, 3, -3 \\dots$" },
            { stepText: "Since we can put $\\mathbb{Z}$ into a single sequential list, it is denumerable! $\\mathbb{Z}$ is the same 'size' of infinity as $\\mathbb{N}$." }
        ]},
        { id: "s3", type: "interactive_canvas", title: "Visualizing N to Z", content: "See how we can perfectly pair the natural numbers with all integers by bouncing back and forth.", interactiveCanvasId: "z-mapping-canvas" }
      ]
    },
    {
      id: "les-1-3-2-t8", title: "Theorem 1.3.8: N x N", description: "The Cartesian product of N with itself", icon: "Grid3X3",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Is the set of all pairs of natural numbers $\\mathbb{N} \\times \\mathbb{N}$ 'larger' than just $\\mathbb{N}$?", options: [{ id: "A", text: "No, they have the same cardinality.", isCorrect: true, explanation: "Amazingly, a 2D infinite grid can be flattened into a 1D list." }, { id: "B", text: "Yes, it's infinity squared.", isCorrect: false, explanation: "While it looks larger, we can still list them all." }] },
        { id: "s1", type: "theory", title: "Theorem 1.3.8", content: "**Theorem:** The set $\\mathbb{N} \\times \\mathbb{N}$ is denumerable.\n\nTo prove this, we must find a way to list all pairs $(m, n)$ without missing any. If we try to list $(1,1), (1,2), (1,3) \\dots$, we will get stuck on the first row forever and never reach $(2,1)$.\n\nCantor's brilliant solution is the **Diagonal Procedure**." },
        { id: "s2", type: "interactive_canvas", title: "Cantor's Diagonal Traversal", content: "Watch how weaving diagonally through the grid guarantees every pair is eventually visited.", interactiveCanvasId: "diagonal-counting-canvas" },
        { id: "s3", type: "numerical", title: "Calculating the Path", content: "Based on the diagonal counting formula $h(m,n) = \\frac{1}{2}(m+n-2)(m+n-1) + m$, what is the position of $(3, 2)$?", numericAnswer: 9, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-3-2-t11", title: "Theorem 1.3.11: The Rationals", description: "Fractions are countable!", icon: "DivideSquare",
      slides: [
        { id: "s0", type: "example_q", title: "The Rational Numbers $\\mathbb{Q}$", content: "**Theorem 1.3.11:** The set $\\mathbb{Q}$ of all rational numbers is denumerable.\n\nBetween any two integers, there are infinitely many fractions. It seems impossible to list them all. How can we?" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $\\mathbb{Q}^+$ is countable.**", interactiveSteps: [
            { stepText: "Every positive rational number can be written as a fraction $m/n$, where $m,n \\in \\mathbb{N}$." },
            { prompt: "What previous structure does a pair of natural numbers $(m,n)$ resemble?", options: [{ id: "A", text: "$\\mathbb{N} \\times \\mathbb{N}$", isCorrect: true, explanation: "Each fraction is just a point on the 2D grid!" }, { id: "B", text: "$\\mathbb{Z}$", isCorrect: false, explanation: "No, fractions need two components." }], stepText: "We can map $m/n$ to the grid point $(m,n)$ in $\\mathbb{N} \\times \\mathbb{N}$." },
            { stepText: "We already know $\\mathbb{N} \\times \\mathbb{N}$ is countable via the diagonal procedure. Therefore, the fractions $m/n$ can be listed in the same diagonal way!" },
            { stepText: "We just skip any fractions that aren't simplified (e.g., skip 2/4 since we already counted 1/2). Since $\\mathbb{Q}^+$ is a subset of this countable grid, it is countable. Goal reached!" }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "Because $\\mathbb{Q}$ can be put into a one-to-one correspondence with $\\mathbb{N}$, we say $\\mathbb{Q}$ is ___.", blankAnswer: "denumerable" }
      ]
    },
    {
      id: "les-1-3-2-t13", title: "Theorem 1.3.13: Cantor's Theorem", description: "Discovering larger infinities", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Is there an infinity bigger than the infinity of the natural numbers $\\mathbb{N}$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Cantor proved there are strictly larger infinities." }, { id: "B", text: "No, infinity is infinity.", isCorrect: false, explanation: "This was a shocking mathematical discovery in 1891." }] },
        { id: "s1", type: "theory", title: "Cantor's Theorem", content: "**Theorem 1.3.13:** If $A$ is any set, then there is no surjection from $A$ onto the set $\\mathcal{P}(A)$ of all subsets of $A$.\n\nThis means the Power Set $\\mathcal{P}(A)$ is strictly strictly larger than $A$ itself. For finite sets, if $|A| = n$, $|\\mathcal{P}(A)| = 2^n$. \nBut amazingly, this holds for infinite sets too! $\\mathcal{P}(\\mathbb{N})$ is strictly larger than $\\mathbb{N}$." },
        { id: "s2", type: "proof", title: "Interactive Proof: The Diagonal Argument", content: "**Goal: Prove no surjection $\\varphi : A \\to \\mathcal{P}(A)$ exists.**", interactiveSteps: [
            { stepText: "Assume for contradiction that a surjection $\\varphi$ does exist. This means every subset of $A$ is \"hit\" by some element in $A$." },
            { stepText: "Let's construct a devious subset $D$. For any $a \\in A$, $\\varphi(a)$ is a subset of $A$. So $a$ is either IN $\\varphi(a)$, or NOT IN $\\varphi(a)$." },
            { prompt: "Define $D = \\{a \\in A : a \\notin \\varphi(a)\\}$. Since $\\varphi$ is supposedly surjective, $D$ must be hit by some element. Let's say $D = \\varphi(a_0)$. Where is $a_0$?", options: [{ id: "A", text: "It must be either in D or not in D.", isCorrect: true, explanation: "Law of excluded middle." }, { id: "B", text: "It doesn't exist.", isCorrect: false, explanation: "We assumed it does." }], stepText: "Case 1: Suppose $a_0 \\in D$. By definition of $D$, $a_0 \\notin \\varphi(a_0)$. But $\\varphi(a_0) = D$, so $a_0 \\notin D$. Contradiction!" },
            { stepText: "Case 2: Suppose $a_0 \\notin D$. Then $a_0 \\notin \\varphi(a_0)$. But by definition of $D$, this means $a_0$ SHOULD be in $D$. Contradiction!" },
            { stepText: "Since both cases lead to a logical paradox, our assumption that a surjection $\\varphi$ exists must be false. Goal reached!" }
        ]}
      ]
    }
  ]
};