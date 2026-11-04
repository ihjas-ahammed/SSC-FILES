import { Unit } from '../types';

export const UNIT_1_2_2: Unit = {
  id: "unit-1-2-2",
  title: "Induction Examples",
  description: "Divisibility, Inequalities, and Geometric Progressions",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-2-e4c", title: "Example 1.2.4(c): Divisibility", description: "Proving polynomial factoring rules", icon: "Percent",
      slides: [
        { id: "s0", type: "example_q", title: "Divisibility Rules", content: "**Problem:** Given two real numbers $a$ and $b$, prove that $(a - b)$ is a factor of $(a^n - b^n)$ for all $n \\in \\mathbb{N}$." },
        {
          id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $a^n - b^n = (a-b)Q$ for some polynomial $Q$.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $a^1 - b^1 = a - b$, which is clearly divisible by $(a-b)$." },
            { stepText: "Inductive step: Assume $(a-b)$ is a factor of $a^k - b^k$." },
            { prompt: "Now consider $a^{k+1} - b^{k+1}$. To use our assumption, we need to create an $a^k - b^k$ term. What algebraic trick helps?", options: [{ id: "A", text: "Add and subtract $ab^k$", isCorrect: true, explanation: "This clever trick allows us to factor out $a$ and $b^k$." }, { id: "B", text: "Divide by $a-b$", isCorrect: false, explanation: "We don't know it's divisible yet." }], stepText: "Rewrite: $a^{k+1} - b^{k+1} = a^{k+1} - ab^k + ab^k - b^{k+1}$." },
            { stepText: "Factor the terms: $a(a^k - b^k) + b^k(a - b)$." },
            { stepText: "By the induction hypothesis, $(a-b)$ divides $(a^k - b^k)$. It also clearly divides $b^k(a-b)$. Since it divides both terms, it divides their sum. Goal reached!" }
          ]
        },
        { id: "s2", type: "numerical", title: "Apply It", content: "Since $11 - 7 = 4$, we know that $11^n - 7^n$ is always divisible by what number?", numericAnswer: 4, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-2-2-e4d", title: "Example 1.2.4(d): Exponentials vs Linear", description: "Proving $2^n > 2n + 1$", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Inequality: Exponential vs Linear", content: "**Problem:** Prove that $2^n > 2n + 1$ for all $n \\ge 3$." },
        {
          id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the inequality using a modified base case.**", interactiveSteps: [
            { stepText: "Notice the condition $n \\ge 3$. If $n=1$, $2^1 > 3$ is false. If $n=2$, $4 > 5$ is false. The base case must be $n_0 = 3$." },
            { stepText: "Base case ($n=3$): $2^3 = 8$, and $2(3)+1 = 7$. $8 > 7$ is true." },
            { stepText: "Assume true for $k \\ge 3$: $2^k > 2k + 1$." },
            { prompt: "To build the $(k+1)$ term on the left, we need $2^{k+1}$. How do we get that from $2^k$?", options: [{ id: "A", text: "Multiply both sides by 2", isCorrect: true, explanation: "Since 2 is positive, multiplying preserves the inequality." }, { id: "B", text: "Add 2 to both sides", isCorrect: false, explanation: "$2^k + 2 \\neq 2^{k+1}$." }], stepText: "Multiply by 2: $2^{k+1} > 4k + 2$." },
            { stepText: "Rewrite $4k + 2$ as $2k + 2k + 2$." },
            { prompt: "Since $k \\ge 3$, we know $2k \\ge 6 > 1$. Therefore, what can we say about $2k + (2k + 2)$?", options: [{ id: "A", text: "It is strictly greater than $2k + 3$", isCorrect: true, explanation: "Since the first $2k > 1$, replacing it with 1 makes the expression strictly smaller." }, { id: "B", text: "It equals $2k+3$", isCorrect: false, explanation: "No, $2k > 1$." }], stepText: "Thus, $4k + 2 > 2k + 3$." },
            { stepText: "Note that $2k + 3 = 2(k+1) + 1$. Chaining the inequalities gives $2^{k+1} > 2(k+1) + 1$. Goal reached!" }
          ]
        },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "To prove a property for all $n \\ge 5$, our ___ case must be $n=5$.", blankAnswer: "base" }
      ]
    },
    {
      id: "les-1-2-2-e4e", title: "Example 1.2.4(e): Exponentials vs Factorials", description: "Proving $2^n \\le (n+1)!$", icon: "MoveUp",
      slides: [
        { id: "s0", type: "example_q", title: "Inequality: Exponentials vs Factorials", content: "**Problem:** Prove that $2^n \\le (n+1)!$ for all $n \\in \\mathbb{N}$." },
        {
          id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Establish the dominance of factorials over powers of 2.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $2^1 = 2$, and $(1+1)! = 2! = 2$. $2 \\le 2$ is true." },
            { stepText: "Assume true for $k$: $2^k \\le (k+1)!$." },
            { stepText: "Multiply both sides by 2: $2^{k+1} \\le 2 \\cdot (k+1)!$." },
            { prompt: "Since $k \\ge 1$, how does the number 2 compare to $(k+2)$?", options: [{ id: "A", text: "$2 \\le k+2$", isCorrect: true, explanation: "Because $k \ge 1$, $k+2 \ge 3$, so $2 < k+2$." }, { id: "B", text: "$2 > k+2$", isCorrect: false, explanation: "k is positive, so k+2 is at least 3." }], stepText: "We know $2 \\le k+2$." },
            { stepText: "Substitute this into the inequality: $2 \\cdot (k+1)! \\le (k+2) \\cdot (k+1)!$." },
            { stepText: "By the definition of factorials, $(k+2) \\cdot (k+1)! = (k+2)!$. Thus, $2^{k+1} \\le (k+2)!$, which is the statement for $n=k+1$. Goal reached!" }
          ]
        },
        { id: "s2", type: "numerical", title: "Factorial Check", content: "What is the value of $4!$?", numericAnswer: 24, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-2-2-e4f", title: "Example 1.2.4(f): Geometric Progression", description: "Summing a geometric series", icon: "BarChart3",
      slides: [
        { id: "s0", type: "example_q", title: "Geometric Progression", content: "**Problem:** If $r \\in \\mathbb{R}, r \\neq 1$, and $n \\in \\mathbb{N}$, prove the formula for the sum of a geometric progression:\n$$1 + r + r^2 + \\dots + r^n = \\frac{1 - r^{n+1}}{1 - r}$$" },
        {
          id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the geometric sum formula.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): The sum is $1 + r$. The right side is $\\frac{1 - r^2}{1 - r} = \\frac{(1-r)(1+r)}{1-r} = 1+r$. True." },
            { stepText: "Assume true for $k$: $1 + r + \\dots + r^k = \\frac{1 - r^{k+1}}{1 - r}$." },
            { stepText: "Add the next term, $r^{k+1}$, to both sides." },
            { prompt: "To combine $\\frac{1 - r^{k+1}}{1 - r} + r^{k+1}$, what must we do?", options: [{ id: "A", text: "Find a common denominator of $(1-r)$", isCorrect: true, explanation: "Multiply $r^{k+1}$ by $\\frac{1-r}{1-r}$." }, { id: "B", text: "Cross multiply", isCorrect: false, explanation: "We are adding fractions, not equating them." }], stepText: "We rewrite $r^{k+1}$ as $\\frac{r^{k+1}(1-r)}{1-r} = \\frac{r^{k+1} - r^{k+2}}{1-r}$." },
            { stepText: "Add the numerators: $(1 - r^{k+1}) + (r^{k+1} - r^{k+2})$." },
            { stepText: "The $r^{k+1}$ terms cancel out, leaving $\\frac{1 - r^{k+2}}{1 - r}$. This matches the formula for $n=k+1$. Goal reached!" }
          ]
        },
        { id: "s2", type: "numerical", title: "Alternative Method", content: "Let $S = 1 + r + r^2 + r^3$. If you calculate $S - rS$, how many terms remain un-canceled in the numerator?", numericAnswer: 2, numericTolerance: 0 }
      ]
    }
  ]
};