import { Unit } from '../types';

export const UNIT_1_2_4: Unit = {
  id: "unit-1-2-4",
  title: "Inequality Exercises",
  description: "Exercises 11-20: Sequences, Exponents, and Inequalities",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-4-ex11", title: "Exercise 11: Sum of Odd Numbers", description: "Conjecture and prove the sum of odd integers", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Conjecture a formula for the sum of the first $n$ odd natural numbers $1 + 3 + \\dots + (2n-1)$, and prove your formula by using Mathematical Induction." },
        { id: "s1", type: "solution", title: "Interactive Solution: Conjecturing", content: "**Goal: Find the pattern.**", interactiveSteps: [
            { stepText: "$S_1 = 1$" },
            { stepText: "$S_2 = 1 + 3 = 4$" },
            { prompt: "What is $S_3$?", options: [{ id: "A", text: "9", isCorrect: true, explanation: "1 + 3 + 5 = 9." }, { id: "B", text: "8", isCorrect: false, explanation: "Check your addition." }], stepText: "$S_3 = 9$. The sequence is $1, 4, 9, 16 \\dots$ so $S_n = n^2$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Prove $S_n = n^2$.**", interactiveSteps: [
            { stepText: "Base Case: $S_1 = 1^2 = 1$. True." },
            { stepText: "Assume $S_k = k^2$." },
            { stepText: "Add the next odd number $(2k+1)$ to both sides: $S_{k+1} = k^2 + 2k + 1$." },
            { stepText: "Factor the right side: $k^2 + 2k + 1 = (k+1)^2$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex12", title: "Exercise 12: Proving Modified Induction", description: "Establishing Theorem 1.2.3", icon: "Milestone",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Prove the Principle of Mathematical Induction 1.2.3 (second version). \nAssume $P(n_0)$ is true, and $P(k) \\implies P(k+1)$ for $k \\ge n_0$. Prove $P(n)$ is true for all $n \\ge n_0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Shift the index to use standard induction.**", interactiveSteps: [
            { stepText: "Let $S$ be the set of natural numbers where $P(n)$ is true. We define a new statement $Q(m)$ as $P(m + n_0 - 1)$ for $m \\in \\mathbb{N}$." },
            { prompt: "When $m=1$, what statement does $Q(1)$ represent?", options: [{ id: "A", text: "$P(n_0)$", isCorrect: true, explanation: "$1 + n_0 - 1 = n_0$." }, { id: "B", text: "$P(1)$", isCorrect: false, explanation: "Check the algebra." }], stepText: "$Q(1)$ is exactly $P(n_0)$, which we know is true! So Base Case holds for $Q$." },
            { stepText: "Now assume $Q(m)$ is true. This means $P(m + n_0 - 1)$ is true." },
            { stepText: "By the hypothesis for $P$, if $P(k)$ is true, $P(k+1)$ is true. Thus $P(m + n_0)$ is true, which is exactly $Q(m+1)$. Thus standard induction holds for $Q(m)$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex13", title: "Exercise 13: Linear vs Exponential", description: "Proving $n < 2^n$", icon: "MoveUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Prove that $n < 2^n$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $k+1 < 2^{k+1}$.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $1 < 2^1 = 2$. True." },
            { stepText: "Assume $k < 2^k$." },
            { stepText: "Add 1 to both sides: $k + 1 < 2^k + 1$." },
            { prompt: "Since $k \\ge 1$, we know $1 \\le 2^k$. Substitute this in. What do we get?", options: [{ id: "A", text: "$2^k + 1 \\le 2^k + 2^k$", isCorrect: true, explanation: "Replacing 1 with a larger number $2^k$ maintains the inequality." }, { id: "B", text: "$2^k + 1 \\le 2^{k+1} + 1$", isCorrect: false, explanation: "This doesn't help us simplify to $2^{k+1}$." }], stepText: "Thus, $k + 1 < 2^k + 2^k$." },
            { stepText: "Since $2^k + 2^k = 2(2^k) = 2^{k+1}$, we get $k+1 < 2^{k+1}$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex14", title: "Exercise 14: Factorials dominate", description: "Proving $2^n < n!$", icon: "ChevronsUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Prove that $2^n < n!$ for all $n \\ge 4, n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Handle the $n \\ge 4$ base case.**", interactiveSteps: [
            { prompt: "What is our base case and is it true?", options: [{ id: "A", text: "$n=4: 16 < 24$ (True)", isCorrect: true, explanation: "2^4 = 16, 4! = 24." }, { id: "B", text: "$n=1: 2 < 1$ (False)", isCorrect: false, explanation: "The problem states for $n \\ge 4$." }], stepText: "Base case $n=4$: $16 < 24$. True." },
            { stepText: "Assume $2^k < k!$ for $k \\ge 4$." },
            { stepText: "Multiply by 2: $2^{k+1} < 2(k!)$." },
            { stepText: "Since $k \\ge 4$, we know $2 < k+1$. Therefore $2(k!) < (k+1)(k!) = (k+1)!$." },
            { stepText: "Combining inequalities gives $2^{k+1} < (k+1)!$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex15", title: "Exercise 15: Shifted Exponentials", description: "Proving $2n - 3 \\le 2^{n-2}$", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Prove that $2n - 3 \\le 2^{n-2}$ for all $n \\ge 5, n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Bound the linear step by the exponential step.**", interactiveSteps: [
            { stepText: "Base case ($n=5$): $2(5)-3 = 7$. $2^{5-2} = 2^3 = 8$. $7 \\le 8$. True." },
            { stepText: "Assume $2k - 3 \\le 2^{k-2}$ for $k \\ge 5$." },
            { stepText: "We want to prove $2(k+1) - 3 \\le 2^{k-1}$. Rewrite the left side: $2k - 1$." },
            { prompt: "How can we rewrite $2k - 1$ to use our assumption ($2k-3$)?", options: [{ id: "A", text: "$(2k - 3) + 2$", isCorrect: true, explanation: "Extracting the assumed term." }, { id: "B", text: "$(2k - 3) - 2$", isCorrect: false, explanation: "Math error." }], stepText: "Rewrite as $(2k - 3) + 2$." },
            { stepText: "Apply assumption: $(2k-3) + 2 \\le 2^{k-2} + 2$." },
            { stepText: "Since $k \\ge 5$, $2^{k-2} \\ge 2^3 = 8 > 2$. Thus $2^{k-2} + 2 \\le 2^{k-2} + 2^{k-2} = 2^{k-1}$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex16", title: "Exercise 16: Finding the Threshold", description: "When does $2^n$ overtake $n^2$?", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Find all natural numbers $n$ such that $n^2 < 2^n$. Prove your assertion." },
        { id: "s1", type: "solution", title: "Interactive Solution: Finding the threshold", content: "**Goal: Test small values.**", interactiveSteps: [
            { stepText: "Test $n=1$: $1 < 2$. (True)" },
            { stepText: "Test $n=2$: $4 < 4$. (False)" },
            { stepText: "Test $n=3$: $9 < 8$. (False)" },
            { stepText: "Test $n=4$: $16 < 16$. (False)" },
            { prompt: "Test $n=5$: What are the values?", options: [{ id: "A", text: "25 < 32 (True)", isCorrect: true, explanation: "From $n=5$ onwards, the exponential dominates." }, { id: "B", text: "25 < 16 (False)", isCorrect: false, explanation: "2^5 is 32." }], stepText: "$n=5$ is True. We assert it holds for $n=1$ and $n \\ge 5$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof for $n \\ge 5$", content: "**Goal: Prove by induction for $n \\ge 5$.**", interactiveSteps: [
            { stepText: "Assume $k^2 < 2^k$ for $k \\ge 5$." },
            { stepText: "We need to show $(k+1)^2 < 2^{k+1}$. Note that $(k+1)^2 = k^2 + 2k + 1$." },
            { stepText: "By assumption, $k^2 + 2k + 1 < 2^k + 2k + 1$." },
            { stepText: "We need $2k + 1 \\le 2^k$. We already proved in Ex 1.2.4(d) that $2k+1 < 2^k$ for $k \\ge 3$." },
            { stepText: "Thus $2^k + 2k + 1 < 2^k + 2^k = 2^{k+1}$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex17", title: "Exercise 17: Maximum Divisor", description: "Finding the largest constant divisor", icon: "DivideSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Find the largest natural number $m$ such that $n^3 - n$ is divisible by $m$ for all $n \\in \\mathbb{N}$. Prove your assertion." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test values and factor.**", interactiveSteps: [
            { stepText: "If $n=1$: $1^3 - 1 = 0$. (Divisible by anything)." },
            { stepText: "If $n=2$: $2^3 - 2 = 6$." },
            { stepText: "If $n=3$: $3^3 - 3 = 24$." },
            { prompt: "What is the largest number that divides both 6 and 24?", options: [{ id: "A", text: "6", isCorrect: true, explanation: "The greatest common divisor." }, { id: "B", text: "12", isCorrect: false, explanation: "12 does not divide 6." }], stepText: "The largest possible $m$ is 6." },
            { stepText: "Proof: Factor $n^3 - n = n(n^2 - 1) = (n-1)n(n+1)$." },
            { stepText: "This is the product of 3 consecutive integers. At least one is even (divisible by 2), and exactly one is a multiple of 3. Thus the product is always divisible by $2 \\times 3 = 6$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex18", title: "Exercise 18: Sum of Inverse Roots", description: "Proving an inequality with square roots", icon: "SquareSigma",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Prove that $\\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\dots + \\frac{1}{\\sqrt{n}} > \\sqrt{n}$ for all $n \\in \\mathbb{N}, n \\ge 2$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show the sum grows faster than the root of n.**", interactiveSteps: [
            { stepText: "Base case ($n=2$): $1 + \\frac{1}{\\sqrt{2}} \\approx 1.707$. $\\sqrt{2} \\approx 1.414$. $1.707 > 1.414$. True." },
            { stepText: "Assume true for $k$: sum $> \\sqrt{k}$." },
            { stepText: "Add the $k+1$ term to both sides: sum $+ \\frac{1}{\\sqrt{k+1}} > \\sqrt{k} + \\frac{1}{\\sqrt{k+1}}$." },
            { prompt: "Find a common denominator for the right side.", options: [{ id: "A", text: "$\\frac{\\sqrt{k(k+1)} + 1}{\\sqrt{k+1}}$", isCorrect: true, explanation: "Multiply $\\sqrt{k}$ by $\\sqrt{k+1}/\\sqrt{k+1}$." }, { id: "B", text: "$\\frac{k+1}{\\sqrt{k+1}}$", isCorrect: false, explanation: "That would mean $\\sqrt{k}\\sqrt{k+1} = k$, which is false." }], stepText: "RHS is $\\frac{\\sqrt{k^2+k} + 1}{\\sqrt{k+1}}$." },
            { stepText: "Since $\\sqrt{k^2+k} > \\sqrt{k^2} = k$, the numerator is strictly greater than $k + 1$." },
            { stepText: "So RHS $> \\frac{k+1}{\\sqrt{k+1}} = \\sqrt{k+1}$. This establishes the $k+1$ case. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex19", title: "Exercise 19: Cauchy's Induction", description: "Induction going forwards and backwards", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** Let $S$ be a subset of $\\mathbb{N}$ such that:\n(a) $2^k \\in S$ for all $k \\in \\mathbb{N}$.\n(b) If $k \\in S$ and $k \\ge 2$, then $k-1 \\in S$.\nProve that $S = \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show any arbitrary $n \\in \\mathbb{N}$ is in $S$.**", interactiveSteps: [
            { stepText: "Let $n$ be any natural number. We know powers of 2 grow indefinitely." },
            { prompt: "Therefore, we can always find some integer $m$ such that:", options: [{ id: "A", text: "$2^m \\ge n$", isCorrect: true, explanation: "We can always pick a power of 2 larger than n." }, { id: "B", text: "$2^m \le n$", isCorrect: false, explanation: "We want to start above n and work down." }], stepText: "Pick $m$ such that $2^m \\ge n$." },
            { stepText: "By rule (a), $2^m \\in S$." },
            { stepText: "By rule (b), we can step backwards by 1 repeatedly. If $2^m \\in S$, then $2^m - 1 \\in S$, and so on." },
            { stepText: "Applying rule (b) exactly $(2^m - n)$ times brings us exactly to $n$. Therefore, $n \\in S$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-2-4-ex20", title: "Exercise 20: Strong Induction on Sequences", description: "Averaging previous terms", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Let the numbers $x_n$ be defined as $x_1 := 1, x_2 := 2$, and $x_{n+2} := \\frac{1}{2}(x_{n+1} + x_n)$.\nUse Strong Induction to show that $1 \\le x_n \\le 2$ for all $n \\in \\mathbb{N}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use multiple previous base cases to prove the next.**", interactiveSteps: [
            { stepText: "Base cases ($n=1, 2$): $x_1 = 1$, $x_2 = 2$. Both are clearly in the range $[1, 2]$." },
            { prompt: "Strong Induction Hypothesis: Assume $1 \\le x_j \\le 2$ for all $j$ from 1 up to what?", options: [{ id: "A", text: "$k$", isCorrect: true, explanation: "We assume it holds for ALL previous terms." }, { id: "B", text: "$k-1$", isCorrect: false, explanation: "We need up to k to evaluate k+1." }], stepText: "Assume $1 \\le x_j \\le 2$ for $j = 1, 2, \\dots k$." },
            { stepText: "We must prove $1 \\le x_{k+1} \\le 2$. By definition, $x_{k+1} = \\frac{1}{2}(x_k + x_{k-1})$." },
            { stepText: "By the strong hypothesis, both $x_k \\ge 1$ and $x_{k-1} \\ge 1$. Their sum is $\\ge 2$, so their average is $\\ge 1$." },
            { stepText: "Likewise, both are $\\le 2$, so their sum is $\\le 4$, and their average is $\\le 2$. Thus $1 \\le x_{k+1} \\le 2$. Goal reached!" }
        ]}
      ]
    }
  ]
};