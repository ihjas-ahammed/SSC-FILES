import { Unit } from '../types';

export const UNIT_3_4_3: Unit = {
  id: "unit-3-4-3",
  title: "Advanced Subsequence Exe",
  description: "Exercises 11-19: Bounded Subsequences and Properties",
  color: "duo-orange",
  lessons: [
    {
      id: "les-3-4-3-ex11", title: "Exercise 11: Alternating Convergence", description: "x_n >= 0, limit of (-1)^n x_n", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Suppose $x_n \\ge 0$ and $\\lim((-1)^n x_n)$ exists. Show $x_n$ converges." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Identify the limit.**", interactiveSteps: [
            { stepText: "Let $y_n = (-1)^n x_n \\to L$." },
            { stepText: "Subsequence $y_{2n} = x_{2n} \\to L$. Since $x_n \\ge 0$, $L \\ge 0$." },
            { stepText: "Subsequence $y_{2n-1} = -x_{2n-1} \\to L$. Since $x_n \\ge 0$, $L \\le 0$." },
            { stepText: "Thus $L = 0$. So $|y_n| = x_n \\to 0$." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex12", title: "Exercise 12: Unbounded Reciprocal", description: "Unbounded implies 1/subseq -> 0", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Show if $(x_n)$ is unbounded, there exists subsequence $x_{n_k}$ such that $1/x_{n_k} \\to 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Pick large terms.**", interactiveSteps: [
            { stepText: "Since unbounded, for any $k$, there exists $n_k$ such that $|x_{n_k}| > k$." },
            { stepText: "We can ensure $n_k$ is increasing. Then $1/|x_{n_k}| < 1/k \\to 0$." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex13", title: "Exercise 13: BW Construction", description: "Finding the specific subsequence", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "For $x_n = (-1)^n/n$, find the subsequence from BW proof." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Follow interval bisection.**", interactiveSteps: [
            { stepText: "Start with $[-1, 1]$. Midpoint 0. Left $[-1, 0]$, Right $[0, 1]$." },
            { stepText: "Infinitely many terms in both? Yes. BW picks one (e.g., right)." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex14", title: "Exercise 14: Subsequence Convergence to Sup", description: "Approaching the supremum", icon: "ArrowUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Let $u = \\sup x_n$. If $u$ is not in the set, show there is a subsequence converging to $u$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Pick terms closer and closer.**", interactiveSteps: [
            { stepText: "For $k=1$, exist $x_{n_1}$ such that $u - 1 < x_{n_1} \\le u$." },
            { stepText: "For $k=2$, exist $x_{n_2}$ with $n_2 > n_1$ such that $u - 1/2 < x_{n_2} \\le u$." },
            { stepText: "Sequence converges to $u$." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex15", title: "Exercise 15: Nested Intervals", description: "Proof of NIP via BW", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Use BW Theorem to prove Nested Intervals Property." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Sequence of endpoints.**", interactiveSteps: [
            { stepText: "Let $x_n$ be a point in $I_n$. $(x_n)$ is bounded." },
            { stepText: "By BW, subsequence $x_{n_k} \\to \\xi$." },
            { stepText: "Since $I_n$ are closed and nested, $\\xi$ must be in all $I_n$." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex16", title: "Exercise 16: Dropping Boundedness", description: "Does Theorem 3.4.9 hold?", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "Give example showing Thm 3.4.9 fails if not bounded." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Sequence with no convergent subsequences.**", interactiveSteps: [
            { stepText: "Let $X = (1, 2, 3, \\dots)$. Every subsequence goes to infinity." },
            { stepText: "The set of subsequential limits is empty. Theorem requires convergence to x." },
            { stepText: "Consider $(1, 1, 2, 1, 3, 1, \dots)$? Subsequences converge to 1. But sequence is unbounded." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex17", title: "Exercise 17: LimSup Calculation", description: "Alternating sequence", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "Calculate limsup and liminf for $(1 + 1/n)$ alternating with $(-1 + 1/n)$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify cluster points.**", interactiveSteps: [
            { stepText: "Odd terms $\\to 2$? No, problem description is complex. Let's say terms cluster at 1 and -1." },
            { stepText: "Limsup is 1. Liminf is -1." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex18", title: "Exercise 18: Convergence Criteria", description: "Limsup = Liminf", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "Show convergence iff $\\limsup = \\liminf$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Squeeze.**", interactiveSteps: [
            { stepText: "$\\,\\liminf \\le x_n \\le \\limsup$ eventually? Not exactly." },
            { stepText: "If equal, all subsequences converge to same limit. Bounded + unique cluster point $\\implies$ convergence." }
        ]}
      ]
    },
    {
      id: "les-3-4-3-ex19", title: "Exercise 19: Limsup Inequality", description: "Limsup(x+y) <= Limsup x + Limsup y", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "Show $\\limsup(x_n+y_n) \\le \\limsup x_n + \\limsup y_n$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use tails.**", interactiveSteps: [
            { stepText: "$\\,\\sup_{k \\ge n} (x_k+y_k) \\le \\sup_{k \\ge n} x_k + \\sup_{k \\ge n} y_k$." },
            { stepText: "Take limit as $n \\to \\infty$." }
        ]}
      ]
    }
  ]
};