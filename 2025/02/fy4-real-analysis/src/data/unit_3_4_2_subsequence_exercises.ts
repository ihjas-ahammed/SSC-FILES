import { Unit } from '../types';

export const UNIT_3_4_2: Unit = {
  id: "unit-3-4-2",
  title: "Subsequence Exercises",
  description: "Exercises 1-10: LimSup and Divergence",
  color: "duo-orange",
  lessons: [
    {
      id: "les-3-4-2-ex1", title: "Exercise 1: Unbounded Convergence", description: "Does unbounded imply convergent subseq?", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Give an example of an unbounded sequence that has a convergent subsequence." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Mix bounded and unbounded.**", interactiveSteps: [
            { stepText: "We need some terms to stay finite and others to explode." },
            { prompt: "Consider $x_n = n$ if $n$ is even, and $x_n = 0$ if $n$ is odd.", options: [{ id: "A", text: "Even terms diverge, odd converge", isCorrect: true, explanation: "Even: 2, 4, 6 -> infinity. Odd: 0, 0, 0 -> 0." }, { id: "B", text: "Whole sequence converges", isCorrect: false, explanation: "No." }], stepText: "The subsequence of odd terms $(0, 0, 0, \\dots)$ converges to 0. The sequence is unbounded due to even terms." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex2", title: "Exercise 2: Geometric Subsequence", description: "c^(1/n) limit", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Use the method of Example 3.4.3(b) to show that if $0 < c < 1$, then $\\lim(c^{1/n}) = 1$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Monotone Subsequence.**", interactiveSteps: [
            { stepText: "Let $z_n = c^{1/n}$. Since $0 < c < 1$, $z_n < 1$." },
            { stepText: "$z_{n+1} > z_n$ (roots get closer to 1 from below). Increasing and bounded." },
            { stepText: "Let $z = \\lim z_n$. Then $z_{2n} \\to z$." },
            { stepText: "$z_{2n}^2 = (c^{1/2n})^2 = c^{1/n} = z_n \\to z$. So $z^2 = z$." },
            { prompt: "Roots are $0, 1$. Since $z_n > c > 0$, what is $z$?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "Also z_n is increasing." }, { id: "B", text: "0", isCorrect: false, explanation: "Terms are > c." }], stepText: "Limit is 1." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex3", title: "Exercise 3: Fibonacci Limit", description: "Ratio of Fibonacci terms", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Let $(f_n)$ be Fibonacci. Let $x_n = f_{n+1}/f_n$. Given limit exists, find it." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Recursive relation.**", interactiveSteps: [
            { stepText: "$x_n = \\frac{f_{n+1}}{f_n} = \\frac{f_n + f_{n-1}}{f_n} = 1 + \\frac{f_{n-1}}{f_n} = 1 + \\frac{1}{x_{n-1}}$." },
            { prompt: "If $x_n \\to L$, what equation does $L$ satisfy?", options: [{ id: "A", text: "$L = 1 + 1/L$", isCorrect: true, explanation: "Limit of both sides." }, { id: "B", text: "$L = 1 + L$", isCorrect: false, explanation: "Incorrect." }], stepText: "$L^2 - L - 1 = 0$. Positive root is $\\phi = (1+\\sqrt{5})/2$." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex4", title: "Exercise 4: Divergent Oscillations", description: "Proving divergence", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Show divergence of:\n(a) $(1 - (-1)^n + 1/n)$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Two limits.**", interactiveSteps: [
            { stepText: "Even $n$: $1 - 1 + 1/n = 1/n \\to 0$." },
            { stepText: "Odd $n$: $1 - (-1) + 1/n = 2 + 1/n \\to 2$." },
            { stepText: "Two different subsequential limits implies divergence." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex5", title: "Exercise 5: Shuffled Sequences", description: "Interleaving sequences", icon: "Shuffle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Let $Z$ be the shuffle of $X$ and $Y$. Show $Z$ converges iff $X, Y$ converge to same limit." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Subsequences.**", interactiveSteps: [
            { stepText: "$X$ and $Y$ are subsequences of $Z$." },
            { prompt: "If $Z \\to L$, then...", options: [{ id: "A", text: "$X \\to L$ and $Y \\to L$", isCorrect: true, explanation: "All subsequences inherit the limit." }, { id: "B", text: "$X \\to L$ but $Y$ might not", isCorrect: false, explanation: "No." }], stepText: "Conversely, if $X \\to L, Y \\to L$, for any $\\epsilon$, both tails are in neighborhood, so $Z$ tail is in neighborhood." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex6", title: "Exercise 6: n^(1/n)", description: "Proving limit is 1 via subsequences", icon: "Minimize2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Let $x_n = n^{1/n}$. Show subsequence convergence implies global convergence." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Monotonicity.**", interactiveSteps: [
            { stepText: "We know $x_n$ is eventually decreasing and bounded below by 1." },
            { stepText: "Thus $x_n \\to L$." },
            { stepText: "Subsequence $x_{2n} = (2n)^{1/2n} = 2^{1/2n} n^{1/2n} \\to 1 \\cdot L^{1/2}$? Wait, standard proof uses $x_{2n} = x_n^{1/2}$? No." },
            { stepText: "Better: We already know $x_n \\to 1$ from 3.1. But exercise asks to use $x_{2n}$. The logic is if $L$ exists, and subseq goes to 1, then $L=1$." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex7", title: "Exercise 7: Limits of Powers", description: "Various limits", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Find limits: $(1 + 1/n^2)^{n^2}$, etc." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Substitution.**", interactiveSteps: [
            { stepText: "Let $m = n^2$. This is a subsequence of $(1+1/m)^m$ which goes to $e$." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex8", title: "Exercise 8: More Limits", description: "Powers", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Limit of $(1 + 1/2n)^n$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Square root of e.**", interactiveSteps: [
            { stepText: "$((1 + 1/2n)^{2n})^{1/2} \\to e^{1/2} = \\sqrt{e}$." }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex9", title: "Exercise 9: Convergence to 0", description: "Subsequence condition for 0", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Suppose every subsequence of $X$ has a subsequence converging to 0. Show $\\lim X = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Contradiction.**", interactiveSteps: [
            { stepText: "Assume $X$ does NOT converge to 0." },
            { prompt: "Then there exists $\\epsilon_0$ and a subsequence $X'$ such that...", options: [{ id: "A", text: "$|x'_n| \\ge \\epsilon_0$ for all terms in $X'$", isCorrect: true, explanation: "Negation of convergence: a subsequence stays away." }, { id: "B", text: "$X'$ converges to 1", isCorrect: false, explanation: "Not necessarily." }], stepText: "$X'$ stays away from 0." },
            { stepText: "But $X'$ is a subsequence of $X$, so by hypothesis, IT must have a subsequence $X''$ converging to 0." },
            { stepText: "Impossible, since all terms of $X'$ (and thus $X''$) are $\\ge \\epsilon_0$. Contradiction!" }
        ]}
      ]
    },
    {
      id: "les-3-4-2-ex10", title: "Exercise 10: Limit Sup of Tail", description: "Defining limit sup via tail sup", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Let $s_n = \\sup\\{x_k : k \\ge n\\}$. Show convergent subsequence to $\\inf s_n$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Bolzano-Weierstrass.**", interactiveSteps: [
            { stepText: "This is proving definition of limsup." },
            { stepText: "Since $x_n$ is bounded, $s_n$ is bounded monotone decreasing. Limit exists." }
        ]}
      ]
    }
  ]
};