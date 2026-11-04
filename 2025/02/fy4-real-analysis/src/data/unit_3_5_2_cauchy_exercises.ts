import { Unit } from '../types';

export const UNIT_3_5_2: Unit = {
  id: "unit-3-5-2",
  title: "Cauchy Exercises",
  description: "Exercises 1-7: Testing for the Cauchy Property",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-5-2-ex1", title: "Exercise 1: Bounded but Not Cauchy", description: "Not all bounded sequences converge", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Give an example of a bounded sequence that is not a Cauchy sequence." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find a sequence that stays within bounds but whose terms never settle close to each other.**", interactiveSteps: [
            { stepText: "By the Cauchy Convergence Criterion, a sequence in $\\mathbb{R}$ is Cauchy if and only if it converges." },
            { prompt: "Thus, to find a bounded sequence that is not Cauchy, what kind of sequence must we look for?", options: [{ id: "A", text: "A bounded divergent sequence", isCorrect: true, explanation: "Since it diverges, it cannot be Cauchy." }, { id: "B", text: "An unbounded convergent sequence", isCorrect: false, explanation: "Convergent sequences are always bounded." }], stepText: "We need a bounded sequence that diverges." },
            { stepText: "A classic example of a bounded divergent sequence is the alternating sequence $x_n = (-1)^n$." },
            { stepText: "It is bounded between -1 and 1. However, the distance between consecutive terms is $|(-1)^{n+1} - (-1)^n| = 2$. Since this distance never gets smaller than 2, it is not a Cauchy sequence. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-2-ex2", title: "Exercise 2: Proving Cauchy Directly", description: "Using the definition to prove Cauchy", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Show directly from the definition that the following are Cauchy sequences:\n(a) $(\\frac{n+1}{n})$\n(b) $(1 + \\frac{1}{2!} + \\dots + \\frac{1}{n!})$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Show $|x_n - x_m| < \\epsilon$ for large $n, m$.**", interactiveSteps: [
            { stepText: "Let $x_n = \\frac{n+1}{n} = 1 + \\frac{1}{n}$." },
            { prompt: "Calculate the distance $|x_n - x_m|$. What does it simplify to?", options: [{ id: "A", text: "$|\\frac{1}{n} - \\frac{1}{m}|$", isCorrect: true, explanation: "The 1s cancel out." }, { id: "B", text: "$|\\frac{1}{n} + \\frac{1}{m}|$", isCorrect: false, explanation: "We are subtracting the terms." }], stepText: "The distance is $|\\frac{1}{n} - \\frac{1}{m}|$." },
            { stepText: "By the Triangle Inequality, $|\\frac{1}{n} - \\frac{1}{m}| \\le \\frac{1}{n} + \\frac{1}{m}$." },
            { stepText: "For any $\\epsilon > 0$, by the Archimedean Property, we can choose $H > 2/\\epsilon$. Then if $n, m \\ge H$, we have $\\frac{1}{n} \\le \\frac{1}{H} < \\epsilon/2$ and $\\frac{1}{m} < \\epsilon/2$." },
            { stepText: "Thus, the sum is strictly less than $\\epsilon/2 + \\epsilon/2 = \\epsilon$. Therefore, it is a Cauchy sequence." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Bound the tail of the factorial sum.**", interactiveSteps: [
            { stepText: "Let $x_n = 1 + \\frac{1}{2!} + \\dots + \\frac{1}{n!}$. Assume $m > n$. Then $|x_m - x_n| = \\frac{1}{(n+1)!} + \\dots + \\frac{1}{m!}$." },
            { stepText: "Recall that $k! \\ge 2^{k-1}$. So $\\frac{1}{k!} \\le \\frac{1}{2^{k-1}}$." },
            { stepText: "Substitute this bound into our sum: $|x_m - x_n| \\le \\frac{1}{2^n} + \\frac{1}{2^{n+1}} + \\dots + \\frac{1}{2^{m-1}}$." },
            { stepText: "This is a geometric series. The sum is bounded by $\\frac{1/2^n}{1 - 1/2} = \\frac{1}{2^{n-1}}$." },
            { stepText: "Since $\\lim(1/2^{n-1}) = 0$, we can make this distance arbitrarily small by choosing a sufficiently large $n$. Thus, it is Cauchy." }
        ]}
      ]
    },
    {
      id: "les-3-5-2-ex3", title: "Exercise 3: Proving Not Cauchy", description: "Using the negation of the definition", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Show directly from the definition that the following are NOT Cauchy sequences:\n(a) $((-1)^n)$\n(b) $(n + \\frac{(-1)^n}{n})$\n(c) $(\\ln n)$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Find an $\\epsilon_0$ and large indices where distance $\\ge \\epsilon_0$.**", interactiveSteps: [
            { stepText: "Let $x_n = n + \\frac{(-1)^n}{n}$. Let's calculate the distance between consecutive terms: $|x_{n+1} - x_n|$." },
            { prompt: "What happens to the $n$ and $n+1$ parts of the expression?", options: [{ id: "A", text: "They result in a difference of at least 1.", isCorrect: true, explanation: "$(n+1) - n = 1$. The fractional parts go to 0." }, { id: "B", text: "They cancel out completely.", isCorrect: false, explanation: "n and n+1 do not cancel." }], stepText: "The difference contains $(n+1) - n = 1$." },
            { stepText: "Specifically, $|x_{n+1} - x_n| = |1 + \\frac{(-1)^{n+1}}{n+1} - \\frac{(-1)^n}{n}|$. For large $n$, the fractional parts are very small, so the distance is very close to 1." },
            { stepText: "Let $\\epsilon_0 = 1/2$. For any $H$, pick an $n > H$. Then $|x_{n+1} - x_n| \ge 1 - (\\frac{1}{n+1} + \\frac{1}{n})$. If $n \ge 4$, this distance is $\\ge 1 - (1/5 + 1/4) > 1/2 = \\epsilon_0$." },
            { stepText: "Since we can always find terms that stay far apart, it is not Cauchy." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (c)", content: "**Goal: Show logarithmic distances don't vanish for specific multiples.**", interactiveSteps: [
            { stepText: "Let $x_n = \\ln n$. To show it's not Cauchy, we must find a consistent gap." },
            { prompt: "Let $m = 2n$. What is the distance $|x_{2n} - x_n|$ using logarithm rules?", options: [{ id: "A", text: "$\\ln(2n) - \\ln n = \\ln 2$", isCorrect: true, explanation: "$\\ln(a) - \\ln(b) = \\ln(a/b)$." }, { id: "B", text: "$\\ln(n)$", isCorrect: false, explanation: "Logarithms don't subtract linearly." }], stepText: "The distance is $\\ln(2n/n) = \\ln 2$." },
            { stepText: "Let $\\epsilon_0 = \\ln 2 > 0$. For any $H$, we can pick $n > H$ and $m = 2n > H$. The distance is exactly $\\ln 2 \ge \\epsilon_0$." },
            { stepText: "Since the distance never drops below $\\ln 2$ for these chosen pairs, it is not Cauchy." }
        ]}
      ]
    },
    {
      id: "les-3-5-2-ex4", title: "Exercise 4: Algebra of Cauchy Sequences", description: "Sums and products of Cauchy sequences", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Show directly from the definition that if $(x_n)$ and $(y_n)$ are Cauchy sequences, then $(x_n + y_n)$ and $(x_n y_n)$ are Cauchy sequences." },
        { id: "s1", type: "proof", title: "Interactive Proof: Sums", content: "**Goal: Bound the distance for the sum sequence.**", interactiveSteps: [
            { stepText: "We want to bound $|(x_n + y_n) - (x_m + y_m)|$." },
            { prompt: "How can we regroup this to use the Cauchy property of $X$ and $Y$?", options: [{ id: "A", text: "$|(x_n - x_m) + (y_n - y_m)|$", isCorrect: true, explanation: "Group the x terms and y terms." }, { id: "B", text: "$|(x_n - y_n) + (x_m - y_m)|$", isCorrect: false, explanation: "This mixes the two sequences." }], stepText: "Regroup as $|(x_n - x_m) + (y_n - y_m)|$." },
            { stepText: "By the Triangle Inequality, this is $\\le |x_n - x_m| + |y_n - y_m|$." },
            { stepText: "Since $X$ and $Y$ are Cauchy, we can find an $H$ such that for $n, m \\ge H$, both $|x_n - x_m| < \\epsilon/2$ and $|y_n - y_m| < \\epsilon/2$." },
            { stepText: "Thus, the total distance is $< \\epsilon$. The sum is a Cauchy sequence." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Products", content: "**Goal: Bound the distance for the product sequence.**", interactiveSteps: [
            { stepText: "We want to bound $|x_n y_n - x_m y_m|$. We add and subtract $x_n y_m$ inside the absolute value." },
            { stepText: "This gives $|x_n y_n - x_n y_m + x_n y_m - x_m y_m| \\le |x_n||y_n - y_m| + |y_m||x_n - x_m|$." },
            { prompt: "Since $X$ and $Y$ are Cauchy, what do we know about $|x_n|$ and $|y_m|$?", options: [{ id: "A", text: "They are bounded by some constant M.", isCorrect: true, explanation: "By the Lemma stating Cauchy sequences are bounded." }, { id: "B", text: "They approach zero.", isCorrect: false, explanation: "Cauchy sequences converge, but not necessarily to zero." }], stepText: "Cauchy sequences are bounded. Let $M > 0$ be a bound for both $|x_n|$ and $|y_m|$." },
            { stepText: "Then the distance is $\\le M|y_n - y_m| + M|x_n - x_m|$." },
            { stepText: "By forcing $|y_n - y_m| < \\epsilon/(2M)$ and $|x_n - x_m| < \\epsilon/(2M)$ for large enough $n, m$, the total distance is strictly less than $\\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-2-ex5", title: "Exercise 5: Pseudo-Cauchy (Square Roots)", description: "Distance between consecutive terms goes to 0", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "If $x_n := \\sqrt{n}$, show that $(x_n)$ satisfies $\\lim |x_{n+1} - x_n| = 0$, but that it is not a Cauchy sequence." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the consecutive distance goes to zero, but it diverges.**", interactiveSteps: [
            { stepText: "First, compute $|x_{n+1} - x_n| = \\sqrt{n+1} - \\sqrt{n}$." },
            { prompt: "To simplify this, what algebraic technique should we use?", options: [{ id: "A", text: "Multiply by the conjugate: $\\frac{\\sqrt{n+1} + \\sqrt{n}}{\\sqrt{n+1} + \\sqrt{n}}$", isCorrect: true, explanation: "This clears the square roots in the numerator." }, { id: "B", text: "Square the entire expression", isCorrect: false, explanation: "You can't square an expression without changing its value." }], stepText: "Multiply by the conjugate to get $\\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$." },
            { stepText: "As $n \\to \\infty$, the denominator grows without bound, so this fraction clearly converges to $0$." },
            { stepText: "However, a sequence is Cauchy if and only if it is bounded (and converges). Is the sequence $x_n = \\sqrt{n}$ bounded?" },
            { stepText: "By the Archimedean property, $\\sqrt{n}$ is unbounded. Thus, it cannot be a Cauchy sequence. Goal reached!" }
        ]},
        { id: "s2", type: "theory", title: "The Pseudo-Cauchy Trap", content: "This is a classic counterexample. A sequence where consecutive terms get infinitely close ($\\lim |x_{n+1} - x_n| = 0$) is **not** necessarily a Cauchy sequence.\n\nFor a sequence to be Cauchy, the distance between *any* two terms in the tail must be arbitrarily small, not just consecutive ones. Small steps can still add up to an infinite journey!" }
      ]
    },
    {
      id: "les-3-5-2-ex6", title: "Exercise 6: Generalized Pseudo-Cauchy", description: "Distance between p-apart terms goes to 0", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Let $p$ be a given natural number. Give an example of a sequence $(x_n)$ that is not a Cauchy sequence, but that satisfies $\\lim |x_{n+p} - x_n| = 0$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find a slowly diverging sequence.**", interactiveSteps: [
            { stepText: "Let's test the natural logarithm sequence, $x_n = \\ln n$." },
            { prompt: "Calculate $|x_{n+p} - x_n|$. What does it simplify to?", options: [{ id: "A", text: "$\\ln(1 + p/n)$", isCorrect: true, explanation: "$\\ln(n+p) - \\ln(n) = \\ln((n+p)/n) = \\ln(1 + p/n)$." }, { id: "B", text: "$\\ln(p)$", isCorrect: false, explanation: "Logarithms do not distribute." }], stepText: "The difference is $\\ln(1 + p/n)$." },
            { stepText: "As $n \\to \\infty$, the fraction $p/n \\to 0$. Since $\\ln(x)$ is continuous at $x=1$, $\\lim \\ln(1 + p/n) = \\ln(1) = 0$." },
            { stepText: "Thus, the distance between terms separated by $p$ steps goes to 0." },
            { stepText: "But as we know, $\\ln n$ grows infinitely large (it is unbounded), so it cannot be a Cauchy sequence. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-2-ex7", title: "Exercise 7: Integer Cauchy Sequence", description: "When a Cauchy sequence only uses integers", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Let $(x_n)$ be a Cauchy sequence such that $x_n$ is an integer for every $n \\in \\mathbb{N}$. Show that $(x_n)$ is ultimately constant." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the Cauchy definition with a strict $\\epsilon$.**", interactiveSteps: [
            { stepText: "Since $(x_n)$ is Cauchy, for any $\\epsilon > 0$, there exists an $H$ such that $|x_n - x_m| < \\epsilon$ for all $n, m \\ge H$." },
            { prompt: "What is a clever choice for $\\epsilon$ knowing that the terms are integers?", options: [{ id: "A", text: "$\\epsilon = 1/2$", isCorrect: true, explanation: "The distance between any two distinct integers is at least 1." }, { id: "B", text: "$\\epsilon = 2$", isCorrect: false, explanation: "This would allow integers separated by 1." }], stepText: "Let $\\epsilon = 1/2$." },
            { stepText: "Then for all $n, m \\ge H$, we have $|x_n - x_m| < 1/2$." },
            { stepText: "But $x_n$ and $x_m$ are integers. The absolute difference between any two integers must be an integer (0, 1, 2, ...)." },
            { stepText: "The only integer strictly less than $1/2$ is $0$. Therefore, $|x_n - x_m| = 0$, which means $x_n = x_m$ for all $n, m \\ge H$." },
            { stepText: "This means that from the $H$-th term onwards, all terms are exactly the same. The sequence is ultimately constant! Goal reached." }
        ]}
      ]
    }
  ]
};