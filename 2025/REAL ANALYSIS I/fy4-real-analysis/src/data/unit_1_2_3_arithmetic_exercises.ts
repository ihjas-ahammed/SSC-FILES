import { Unit } from '../types';

export const UNIT_1_2_3: Unit = {
  id: "unit-1-2-3",
  title: "Arithmetic Exercises",
  description: "Exercises 1-10: Finite Sums and Divisibility",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-3-ex1", title: "Exercise 1: Fraction Sums", description: "Proving a telescoping-like sum", icon: "PlusSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Prove that for all $n \\in \\mathbb{N}$:\n$$\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\dots + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove by Mathematical Induction.**", interactiveSteps: [
            { stepText: "Base Case ($n=1$): LHS is $\\frac{1}{1\\cdot 2} = \\frac{1}{2}$. RHS is $\\frac{1}{1+1} = \\frac{1}{2}$. True." },
            { stepText: "Assume true for $n=k$: Sum is $\\frac{k}{k+1}$." },
            { prompt: "To prove for $n=k+1$, what term do we add to both sides?", options: [{ id: "A", text: "$\\frac{1}{(k+1)(k+2)}$", isCorrect: true, explanation: "Substitute n = k+1 into the general term." }, { id: "B", text: "$\\frac{1}{k(k+1)}$", isCorrect: false, explanation: "This is the kth term." }], stepText: "Add $\\frac{1}{(k+1)(k+2)}$ to $\\frac{k}{k+1}$." },
            { stepText: "Find a common denominator: $\\frac{k(k+2) + 1}{(k+1)(k+2)} = \\frac{k^2+2k+1}{(k+1)(k+2)}$." },
            { stepText: "Factor the numerator to $(k+1)^2$. Cancel one $(k+1)$ to get $\\frac{k+1}{k+2}$. This matches the formula for $n=k+1$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex2", title: "Exercise 2: Sum of Cubes", description: "Proving the cube sum equals the squared triangular number", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Prove that for all $n \\in \\mathbb{N}$:\n$$1^3 + 2^3 + \\dots + n^3 = \\left[\\frac{1}{2}n(n+1)\\right]^2$$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Apply the inductive step algebraically.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $1^3 = 1$. $[\\frac{1}{2}(1)(2)]^2 = 1^2 = 1$. True." },
            { stepText: "Assume true for $k$: Sum $= \\frac{1}{4}k^2(k+1)^2$." },
            { stepText: "Add $(k+1)^3$ to both sides. We get $\\frac{1}{4}k^2(k+1)^2 + (k+1)^3$." },
            { prompt: "What common factor can we extract from both terms?", options: [{ id: "A", text: "$(k+1)^2$", isCorrect: true, explanation: "Both terms have at least a squared $(k+1)$." }, { id: "B", text: "$\\frac{1}{4}k^2$", isCorrect: false, explanation: "The second term does not have $k^2$." }], stepText: "Factor out $\\frac{1}{4}(k+1)^2$." },
            { stepText: "We are left with $\\frac{1}{4}(k+1)^2 [ k^2 + 4(k+1) ] = \\frac{1}{4}(k+1)^2 (k^2+4k+4)$." },
            { stepText: "Since $k^2+4k+4 = (k+2)^2$, the result is $[\\frac{1}{2}(k+1)(k+2)]^2$, matching the formula. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Calculation", content: "What is $1^3 + 2^3 + 3^3 + 4^3$?", numericAnswer: 100, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-2-3-ex3", title: "Exercise 3: Arithmetic Sequence Sum", description: "Summing $8n-5$", icon: "ListPlus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Prove that $3 + 11 + \\dots + (8n-5) = 4n^2 - n$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Confirm the algebraic bridge.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $8(1)-5 = 3$. RHS: $4(1)^2 - 1 = 3$. True." },
            { stepText: "Assume for $k$: sum is $4k^2 - k$." },
            { prompt: "To get the $k+1$ sum, we add the $(k+1)$-th term. What is it?", options: [{ id: "A", text: "$8k + 3$", isCorrect: true, explanation: "$8(k+1) - 5 = 8k + 8 - 5 = 8k + 3$." }, { id: "B", text: "$8k - 5$", isCorrect: false, explanation: "That's the kth term." }], stepText: "Add $8k + 3$ to $4k^2 - k$." },
            { stepText: "This yields $4k^2 - k + 8k + 3 = 4k^2 + 7k + 3$." },
            { stepText: "Now check RHS for $k+1$: $4(k+1)^2 - (k+1) = 4(k^2+2k+1) - k - 1 = 4k^2+8k+4-k-1 = 4k^2+7k+3$. They match! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex4", title: "Exercise 4: Odd Squares Sum", description: "Summing squares of odd numbers", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Prove that $1^2 + 3^2 + \\dots + (2n-1)^2 = (4n^3 - n)/3$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Factor the cubic expansion properly.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $1^2 = 1$. RHS: $(4 - 1)/3 = 1$. True." },
            { stepText: "Assume for $k$: sum is $(4k^3 - k)/3$." },
            { stepText: "Add $(2k+1)^2 = 4k^2 + 4k + 1$ to both sides. Find a common denominator of 3." },
            { prompt: "What is the new numerator before simplifying?", options: [{ id: "A", text: "$4k^3 - k + 12k^2 + 12k + 3$", isCorrect: true, explanation: "Multiply the added polynomial by 3." }, { id: "B", text: "$4k^3 - k + 4k^2 + 4k + 1$", isCorrect: false, explanation: "You forgot the common denominator multiplier." }], stepText: "The numerator is $4k^3 + 12k^2 + 11k + 3$." },
            { stepText: "Now expand the target RHS for $n=k+1$: $4(k+1)^3 - (k+1) = 4(k^3+3k^2+3k+1) - k - 1 = 4k^3 + 12k^2 + 11k + 3$. The numerators match! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex5", title: "Exercise 5: Alternating Squares", description: "Handling alternating signs in sums", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Prove that $1^2 - 2^2 + 3^2 + \\dots + (-1)^{n+1}n^2 = (-1)^{n+1}n(n+1)/2$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Handle the $(-1)$ exponent carefully.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $(-1)^2(1^2) = 1$. RHS: $(-1)^2(1)(2)/2 = 1$. True." },
            { stepText: "Assume for $k$: sum is $(-1)^{k+1}k(k+1)/2$." },
            { stepText: "Add the next term: $(-1)^{k+2}(k+1)^2$. We need to add this to our assumption." },
            { prompt: "To factor out $(-1)^{k+2}$, how do we rewrite the assumed sum?", options: [{ id: "A", text: "$-(-1)^{k+2}k(k+1)/2$", isCorrect: true, explanation: "$(-1)^{k+1} = -(-1)^{k+2}$." }, { id: "B", text: "$(-1)^{k+2}k(k+1)/2$", isCorrect: false, explanation: "This changes the sign incorrectly." }], stepText: "The assumed sum is $-(-1)^{k+2}k(k+1)/2$." },
            { stepText: "Adding them: $(-1)^{k+2}(k+1) \\left[ (k+1) - \\frac{k}{2} \\right]$." },
            { stepText: "The bracket simplifies to $\\frac{k+2}{2}$. So the result is $(-1)^{k+2}(k+1)(k+2)/2$, exactly matching the formula for $n=k+1$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex6", title: "Exercise 6: Divisibility by 6", description: "Proving a polynomial is a multiple of 6", icon: "Divide",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Prove that $n^3 + 5n$ is divisible by $6$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $(k+1)^3 + 5(k+1) = 6M$.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $1^3 + 5(1) = 6$. Divisible by 6. True." },
            { stepText: "Assume for $k$: $k^3 + 5k = 6m$ for some integer $m$." },
            { stepText: "Expand for $k+1$: $(k^3 + 3k^2 + 3k + 1) + (5k + 5)$." },
            { prompt: "Group the terms to expose the induction hypothesis ($k^3 + 5k$). What remains?", options: [{ id: "A", text: "$3k^2 + 3k + 6$", isCorrect: true, explanation: "Correct algebraic grouping." }, { id: "B", text: "$3k^2 + 6$", isCorrect: false, explanation: "You lost the 3k." }], stepText: "We have $(k^3 + 5k) + 3(k^2 + k + 2)$." },
            { stepText: "We know $(k^3 + 5k) = 6m$. What about $3(k^2 + k)$? Notice $k^2+k = k(k+1)$. The product of two consecutive integers is always even (divisible by 2)." },
            { stepText: "Thus $3 \\cdot 2p = 6p$. Since all parts are multiples of 6, their sum is divisible by 6. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex7", title: "Exercise 7: Divisibility by 8", description: "Proving exponential divisibility", icon: "Percent",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Prove that $5^{2n} - 1$ is divisible by $8$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $5^{2(k+1)} - 1$ is a multiple of 8.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $5^2 - 1 = 24$. Divisible by 8. True." },
            { stepText: "Assume for $k$: $5^{2k} - 1 = 8m$ for some $m \\in \\mathbb{Z}$." },
            { prompt: "Write $5^{2(k+1)} - 1$ using exponent rules. Which is correct?", options: [{ id: "A", text: "$25 \\cdot 5^{2k} - 1$", isCorrect: true, explanation: "$5^{2k+2} = 5^{2k} \\cdot 5^2 = 25 \\cdot 5^{2k}$." }, { id: "B", text: "$10 \\cdot 5^{2k} - 1$", isCorrect: false, explanation: "You add exponents, but the base is 5, so $5^2=25$." }], stepText: "We have $25 \\cdot 5^{2k} - 1$." },
            { stepText: "Rewrite 25 as $24 + 1$ to utilize the assumption: $(24 + 1)5^{2k} - 1 = 24 \\cdot 5^{2k} + (5^{2k} - 1)$." },
            { stepText: "The first term is clearly divisible by 8 (since $24 = 8 \\times 3$). The second term is $8m$ by our assumption. Thus the whole expression is divisible by 8. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex8", title: "Exercise 8: Divisibility by 16", description: "A slightly more complex divisibility rule", icon: "Share2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Prove that $5^n - 4n - 1$ is divisible by $16$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Algebraic manipulation to extract 16.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $5^1 - 4(1) - 1 = 0$. 0 is divisible by 16. True." },
            { stepText: "Assume for $k$: $5^k - 4k - 1 = 16m$." },
            { stepText: "For $k+1$, we have $5^{k+1} - 4(k+1) - 1 = 5 \\cdot 5^k - 4k - 5$." },
            { prompt: "To use the assumption, we want to create the expression $5(5^k - 4k - 1)$. If we subtract $20k$ and $5$, what must we add back to maintain equality?", options: [{ id: "A", text: "$16k$", isCorrect: true, explanation: "We originally had $-4k$. If we use $-20k$ in the grouping, we must add $+16k$." }, { id: "B", text: "$4k$", isCorrect: false, explanation: "Check the math." }], stepText: "Rewrite as: $5(5^k - 4k - 1) + 16k$." },
            { stepText: "The first term is $5(16m)$ by the inductive hypothesis. The second term is $16k$. Both are multiples of 16. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex9", title: "Exercise 9: Divisibility by 9", description: "Summing consecutive cubes", icon: "BoxSelect",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Prove that $n^3 + (n+1)^3 + (n+2)^3$ is divisible by $9$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Compare $P(k+1)$ and $P(k)$.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36$. Divisible by 9. True." },
            { stepText: "Assume $P(k) = k^3 + (k+1)^3 + (k+2)^3 = 9m$." },
            { stepText: "Look at $P(k+1) = (k+1)^3 + (k+2)^3 + (k+3)^3$." },
            { prompt: "If we compute $P(k+1) - P(k)$, which terms cancel out?", options: [{ id: "A", text: "$(k+1)^3$ and $(k+2)^3$", isCorrect: true, explanation: "They appear in both expressions." }, { id: "B", text: "$k^3$ and $(k+3)^3$", isCorrect: false, explanation: "These are the terms that remain." }], stepText: "The difference is $(k+3)^3 - k^3$." },
            { stepText: "Expand $(k+3)^3 - k^3 = (k^3 + 9k^2 + 27k + 27) - k^3 = 9k^2 + 27k + 27$." },
            { stepText: "This difference is $9(k^2 + 3k + 3)$, clearly a multiple of 9. Since $P(k)$ is a multiple of 9, adding a multiple of 9 means $P(k+1)$ is also a multiple of 9. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-3-ex10", title: "Exercise 10: Conjecture and Prove", description: "Finding the pattern yourself", icon: "Lightbulb",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Conjecture a formula for the sum:\n$$\\frac{1}{1\\cdot 3} + \\frac{1}{3\\cdot 5} + \\dots + \\frac{1}{(2n-1)(2n+1)}$$\nand prove your conjecture by Mathematical Induction." },
        { id: "s1", type: "solution", title: "Interactive Solution: Conjecturing", content: "**Goal: Evaluate the first few sums to find the pattern.**", interactiveSteps: [
            { stepText: "Let's find $S_1$ (when $n=1$): $\\frac{1}{1\\cdot 3} = \\frac{1}{3}$." },
            { prompt: "Calculate $S_2$ (when $n=2$): $\\frac{1}{3} + \\frac{1}{3\\cdot 5}$. What does this equal?", options: [{ id: "A", text: "$2/5$", isCorrect: true, explanation: "1/3 + 1/15 = 5/15 + 1/15 = 6/15 = 2/5." }, { id: "B", text: "$3/8$", isCorrect: false, explanation: "Check your fraction addition." }], stepText: "$S_2 = \\frac{2}{5}$." },
            { stepText: "Calculate $S_3$: $\\frac{2}{5} + \\frac{1}{5\\cdot 7} = \\frac{14}{35} + \\frac{1}{35} = \\frac{15}{35} = \\frac{3}{7}$." },
            { stepText: "The sequence of sums is $1/3, 2/5, 3/7 \\dots$ The pattern is clear: $S_n = \\frac{n}{2n+1}$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Prove $S_n = \\frac{n}{2n+1}$.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $1/3 = 1/(2(1)+1) = 1/3$. True." },
            { stepText: "Assume $S_k = \\frac{k}{2k+1}$." },
            { stepText: "Add the $(k+1)$-th term: $\\frac{k}{2k+1} + \\frac{1}{(2k+1)(2k+3)}$." },
            { stepText: "Common denominator is $(2k+1)(2k+3)$. The numerator becomes $k(2k+3) + 1 = 2k^2 + 3k + 1$." },
            { stepText: "Factor the numerator: $(2k+1)(k+1)$. Cancel $(2k+1)$ from top and bottom." },
            { stepText: "Result: $\\frac{k+1}{2k+3}$, which is exactly $\\frac{k+1}{2(k+1)+1}$. Goal reached!" }
        ]}
      ]
    }
  ]
};