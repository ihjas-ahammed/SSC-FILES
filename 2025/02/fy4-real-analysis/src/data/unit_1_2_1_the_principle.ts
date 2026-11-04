import { Unit } from '../types';

export const UNIT_1_2_1: Unit = {
  id: "unit-1-2-1",
  title: "The Principle",
  description: "Well-Ordering Property and the Principle of Mathematical Induction",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-1-t1", title: "Theorem 1.2.1: Well-Ordering Property", description: "The foundation of induction", icon: "ArrowDownToLine",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you pick any random, non-empty collection of positive whole numbers, will there always be a strictly smallest number in your collection?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Because they are discrete and bounded below by 1, there's always a smallest element." }, { id: "B", text: "No", isCorrect: false, explanation: "You can't go lower than 1, and you can't have infinite fractions between integers." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Does the set of all integers ($\\mathbb{Z}$) have this same property?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "What is the smallest integer? -100? -1,000,000? There is no minimum." }, { id: "B", text: "No", isCorrect: true, explanation: "The set of integers extends infinitely in the negative direction, so there is no absolute minimum." }] },
        { id: "s2", type: "theory", title: "Well-Ordering Property of $\\mathbb{N}$", content: "**Theorem 1.2.1:** Every nonempty subset of $\\mathbb{N}$ has a least element.\n\nA more detailed statement: If $S$ is a subset of $\\mathbb{N}$ and if $S \\neq \\emptyset$, then there exists $m \\in S$ such that $m \\le k$ for all $k \\in S$.\n\nThis simple, intuitive property is the logical bedrock upon which Mathematical Induction is built." },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "The Well-Ordering Property guarantees that every nonempty subset of $\\mathbb{N}$ has a ___ element.", blankAnswer: "least" }
      ]
    },
    {
      id: "les-1-2-1-t2", title: "Theorem 1.2.2: Principle of Mathematical Induction", description: "The domino effect of mathematics", icon: "AlignEndHorizontal",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If I prove that knocking down domino $k$ will always knock down domino $k+1$, is that enough to knock down the whole line?", options: [{ id: "A", text: "Yes, always", isCorrect: false, explanation: "What if you never push the first domino?" }, { id: "B", text: "No, you must also knock down the first domino", isCorrect: true, explanation: "The 'bridge' is useless without a 'base case' to start the chain reaction." }] },
        { id: "s1", type: "theory", title: "Principle of Mathematical Induction", content: "**Theorem 1.2.2:** Let $S$ be a subset of $\\mathbb{N}$ that possesses the two properties:\n\n1.  The number $1 \\in S$.\n2.  For every $k \\in \\mathbb{N}$, if $k \\in S$, then $k + 1 \\in S$.\n\nThen we have $S = \\mathbb{N}$." },
        {
          id: "s2", type: "proof", title: "Interactive Proof: Why Induction Works", content: "**Goal: Prove Theorem 1.2.2 using the Well-Ordering Property.**", interactiveSteps: [
            { stepText: "Let's use a Proof by Contradiction. Assume $S \\neq \\mathbb{N}$. This means the set of missing numbers, $\\mathbb{N} \\setminus S$, is not empty." },
            { prompt: "Because $\\mathbb{N} \\setminus S$ is a non-empty subset of natural numbers, what does the Well-Ordering Property guarantee?", options: [{ id: "A", text: "It has a greatest element.", isCorrect: false, explanation: "WOP only guarantees a minimum, not a maximum." }, { id: "B", text: "It has a least element.", isCorrect: true, explanation: "Let's call this least missing element $m$." }], stepText: "By the Well-Ordering Property, $\\mathbb{N} \\setminus S$ has a least element, let's call it $m$." },
            { prompt: "Since condition (1) states $1 \\in S$, what do we know about $m$?", options: [{ id: "A", text: "$m > 1$", isCorrect: true, explanation: "Since 1 is in S, the missing element m cannot be 1." }, { id: "B", text: "$m = 1$", isCorrect: false, explanation: "But we know 1 is in S." }], stepText: "We know $m > 1$. This means $m - 1$ is a valid natural number." },
            { stepText: "Since $m$ is the strictly *smallest* number not in $S$, the number just below it, $m - 1$, MUST be in $S$." },
            { stepText: "But condition (2) says that if $(m-1) \\in S$, then $(m-1) + 1 = m$ must also be in $S$. This contradicts $m \\notin S$! Thus, our assumption that $S \\neq \\mathbb{N}$ is false. Goal reached!" }
          ]
        },
        { id: "s3", type: "fill_in_blank", title: "Terminology", content: "In induction, assuming the property holds for $k$ to prove it for $k+1$ is known as the induction ___.", blankAnswer: "hypothesis" }
      ]
    },
    {
      id: "les-1-2-1-t3", title: "Theorem 1.2.3: Modified Induction", description: "Starting somewhere other than 1", icon: "Milestone",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Can we use induction to prove a property that is false for $n=1$ and $n=2$, but true for $n=3$ and beyond?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "We can just change the 'base case' to start at n=3." }, { id: "B", text: "No", isCorrect: false, explanation: "Induction is flexible; it doesn't strictly have to start at 1." }] },
        { id: "s1", type: "theory", title: "Modified Principle of Induction", content: "**Theorem 1.2.3:** Let $n_0 \\in \\mathbb{N}$ and let $P(n)$ be a statement for each natural number $n \\ge n_0$. Suppose that:\n\n1.  **The Base:** The statement $P(n_0)$ is true.\n2.  **The Bridge:** For all $k \\ge n_0$, the truth of $P(k)$ implies the truth of $P(k+1)$.\n\nThen $P(n)$ is true for all $n \\ge n_0$." }
      ]
    },
    {
      id: "les-1-2-1-e4a", title: "Example 1.2.4(a): Sum of first n integers", description: "Proving the famous arithmetic sum formula", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Sum of First n Integers", content: "**Problem:** Prove by Mathematical Induction that for each $n \\in \\mathbb{N}$, the sum of the first $n$ natural numbers is given by:\n$$1 + 2 + \\dots + n = \\frac{1}{2}n(n+1)$$" },
        {
          id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Establish the formula for all $n \\in \\mathbb{N}$.**", interactiveSteps: [
            { stepText: "Step 1: The Base Case. Let $n = 1$. The left side is $1$. The right side is $\\frac{1}{2}(1)(1+1) = 1$. The base case holds." },
            { prompt: "Step 2: The Inductive Hypothesis. What do we assume is true?", options: [{ id: "A", text: "$1 + 2 + \\dots + k = \\frac{1}{2}k(k+1)$", isCorrect: true, explanation: "We assume the formula holds for an arbitrary $k$." }, { id: "B", text: "$1 + 2 + \\dots + k = k^2$", isCorrect: false, explanation: "This is a different formula entirely." }], stepText: "Assume $1 + 2 + \\dots + k = \\frac{1}{2}k(k+1)$." },
            { stepText: "Step 3: The Inductive Step. We must prove the formula holds for $k+1$. Add $(k+1)$ to both sides of our assumed equality:\n$$1 + \\dots + k + (k+1) = \\frac{1}{2}k(k+1) + (k+1)$$" },
            { prompt: "Factor out the common term $(k+1)$ from the right side. What remains?", options: [{ id: "A", text: "$(k+1)[\\frac{1}{2}k + 1]$", isCorrect: true, explanation: "Correct algebraic factoring." }, { id: "B", text: "$(k+1)[k + 1]$", isCorrect: false, explanation: "You lost the 1/2 multiplier." }], stepText: "This factors to $(k+1)[\\frac{1}{2}k + 1]$." },
            { stepText: "Find a common denominator: $(k+1)\\left[\\frac{k+2}{2}\\right] = \\frac{1}{2}(k+1)(k+2)$. This is exactly the target formula evaluated at $n=k+1$. Goal reached!" }
          ]
        },
        { id: "s2", type: "numerical", title: "Calculate", content: "Using the proven formula, what is the sum of the first 100 natural numbers?", numericAnswer: 5050, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-2-1-e4b", title: "Example 1.2.4(b): Sum of Squares", description: "Proving the sum of squares formula", icon: "Grid3X3",
      slides: [
        { id: "s0", type: "example_q", title: "Sum of Squares", content: "**Problem:** Prove that for each $n \\in \\mathbb{N}$, the sum of the squares of the first $n$ natural numbers is given by:\n$$1^2 + 2^2 + \\dots + n^2 = \\frac{1}{6}n(n+1)(2n+1)$$" },
        {
          id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the formula via induction.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): Left side is $1^2 = 1$. Right side is $\\frac{1}{6}(1)(2)(3) = 1$. It holds." },
            { stepText: "Assume true for $k$: $1^2 + \\dots + k^2 = \\frac{1}{6}k(k+1)(2k+1)$." },
            { prompt: "What term should we add to both sides to advance to $k+1$?", options: [{ id: "A", text: "$(k+1)^2$", isCorrect: true, explanation: "We are summing squares, so the next term is $(k+1)^2$." }, { id: "B", text: "$(k+1)$", isCorrect: false, explanation: "That would be the term for a simple arithmetic sum, not a sum of squares." }], stepText: "Add $(k+1)^2$ to both sides." },
            { stepText: "Right side becomes: $\\frac{1}{6}k(k+1)(2k+1) + (k+1)^2$.\nFactor out $\\frac{1}{6}(k+1)$ to get: $\\frac{1}{6}(k+1)[k(2k+1) + 6(k+1)]$" },
            { stepText: "Expand the bracket: $2k^2 + k + 6k + 6 = 2k^2 + 7k + 6$." },
            { prompt: "Does $2k^2 + 7k + 6$ factor into $(k+2)(2k+3)$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Expand $(k+2)(2k+3) = 2k^2 + 3k + 4k + 6 = 2k^2 + 7k + 6$." }, { id: "B", text: "No", isCorrect: false, explanation: "Check the multiplication." }], stepText: "Yes, it factors perfectly to $(k+2)(2k+3)$." },
            { stepText: "Thus, the right side is $\\frac{1}{6}(k+1)(k+2)(2k+3)$, which is the exact formula for $n=k+1$. Goal reached!" }
          ]
        },
        { id: "s2", type: "numerical", title: "Calculate", content: "What is $1^2 + 2^2 + 3^2 + 4^2$?", numericAnswer: 30, numericTolerance: 0 }
      ]
    }
  ]
};