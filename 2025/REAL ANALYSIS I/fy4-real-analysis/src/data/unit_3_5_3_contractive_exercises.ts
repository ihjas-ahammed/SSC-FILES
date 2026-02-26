import { Unit } from '../types';

export const UNIT_3_5_3: Unit = {
  id: "unit-3-5-3",
  title: "Contractive Exercises",
  description: "Exercises 8-14: Error Estimation and Recursions",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-5-3-ex8", title: "Exercise 8: Monotone Bounded is Cauchy", description: "Direct proof of convergence", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Show directly that a bounded, monotone increasing sequence is a Cauchy sequence." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Apply the Supremum definition.**", interactiveSteps: [
            { stepText: "Let $(x_n)$ be bounded and monotone increasing. Since it is bounded above, by the Completeness Property, it has a supremum. Let $s = \\sup x_n$." },
            { prompt: "By the Lemma for the Epsilon Formulation of Supremum, for any $\\epsilon > 0$, what must exist?", options: [{ id: "A", text: "An index $H$ such that $s - \\epsilon < x_H \le s$", isCorrect: true, explanation: "Because s is the least upper bound." }, { id: "B", text: "An index $H$ such that $x_H > s + \\epsilon$", isCorrect: false, explanation: "No term can be larger than the supremum." }], stepText: "There exists an integer $H$ such that $s - \\epsilon < x_H \\le s$." },
            { stepText: "Because the sequence is increasing, for any $n, m \\ge H$, we have $x_n \\ge x_H$ and $x_m \\ge x_H$." },
            { stepText: "Since $s$ is an upper bound, both $x_n$ and $x_m$ are in the interval $(s - \\epsilon, s]$." },
            { stepText: "The maximum distance between any two points in this interval is strictly less than $\\epsilon$. Thus $|x_n - x_m| < \\epsilon$." },
            { stepText: "We have shown the sequence meets the definition of a Cauchy sequence. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-3-ex9", title: "Exercise 9: Exponentially Shrinking Steps", description: "Proving a sequence is Cauchy", icon: "Shrink",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "If $0 < r < 1$ and $|x_{n+1} - x_n| < r^n$ for all $n \\in \\mathbb{N}$, show that $(x_n)$ is a Cauchy sequence." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the Triangle Inequality and geometric series sum.**", interactiveSteps: [
            { stepText: "Let $m > n$. We can express the distance between $x_m$ and $x_n$ as a sum of consecutive steps: $|x_m - x_n| = |(x_m - x_{m-1}) + \\dots + (x_{n+1} - x_n)|$." },
            { prompt: "Apply the Triangle Inequality. What is the upper bound for this distance?", options: [{ id: "A", text: "$r^{m-1} + \\dots + r^n$", isCorrect: true, explanation: "Sum of the individual bounds for each step." }, { id: "B", text: "$r^m - r^n$", isCorrect: false, explanation: "We must sum the positive terms." }], stepText: "The distance is strictly bounded by the sum: $r^n + r^{n+1} + \\dots + r^{m-1}$." },
            { stepText: "This is a finite geometric series. We can factor out $r^n$: $r^n (1 + r + \\dots + r^{m-n-1})$." },
            { stepText: "This is bounded by the infinite geometric series: $r^n \\frac{1}{1-r}$." },
            { stepText: "Since $0 < r < 1$, the limit of $r^n$ as $n \\to \\infty$ is $0$. Thus, for any $\\epsilon > 0$, there exists an $H$ such that $r^H \\frac{1}{1-r} < \\epsilon$." },
            { stepText: "Therefore, for $m > n \\ge H$, the distance is $< \\epsilon$. It is a Cauchy sequence! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-3-5-3-ex10", title: "Exercise 10: Averaging Sequence", description: "Finding the limit of $x_n = \\frac{1}{2}(x_{n-2} + x_{n-1})$", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "If $x_1 < x_2$ are arbitrary real numbers and $x_n := \\frac{1}{2}(x_{n-2} + x_{n-1})$ for $n > 2$, show that $(x_n)$ is convergent. What is its limit?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify it as a contractive sequence.**", interactiveSteps: [
            { stepText: "Calculate the step size: $x_n - x_{n-1} = \\frac{1}{2}(x_{n-2} + x_{n-1}) - x_{n-1} = -\\frac{1}{2}(x_{n-1} - x_{n-2})$." },
            { prompt: "Taking the absolute value gives $|x_n - x_{n-1}| = \\frac{1}{2} |x_{n-1} - x_{n-2}|$. What does this mean for the sequence?", options: [{ id: "A", text: "It is a contractive sequence", isCorrect: true, explanation: "The step size shrinks by a constant factor $C = 1/2 < 1$." }, { id: "B", text: "It diverges to infinity", isCorrect: false, explanation: "Contractive sequences always converge." }], stepText: "By the Theorem for Contractive Convergence, the sequence converges." },
            { stepText: "To find the limit, notice that $x_n - x_{n-1} = (-1/2) (x_{n-1} - x_{n-2})$. This is a geometric sequence of differences." },
            { stepText: "We can write $x_n = x_1 + \\sum_{k=2}^n (x_k - x_{k-1})$." },
            { stepText: "This sum is $(x_2 - x_1) [1 - 1/2 + 1/4 - 1/8 + \\dots]$. As $n \\to \\infty$, the geometric series evaluates to $\\frac{1}{1 - (-1/2)} = 2/3$." },
            { stepText: "The limit is $x_1 + \\frac{2}{3}(x_2 - x_1) = \\frac{1}{3}x_1 + \\frac{2}{3}x_2$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-3-ex11", title: "Exercise 11: Weighted Averaging", description: "Finding the limit of $y_n = \\frac{1}{3}y_{n-1} + \\frac{2}{3}y_{n-2}$", icon: "SlidersHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "If $y_1 < y_2$ are arbitrary real numbers and $y_n := \\frac{1}{3}y_{n-1} + \\frac{2}{3}y_{n-2}$ for $n > 2$, show that $(y_n)$ is convergent. What is its limit?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply the contractive sequence method again.**", interactiveSteps: [
            { stepText: "Calculate the difference: $y_n - y_{n-1} = (\\frac{1}{3}y_{n-1} + \\frac{2}{3}y_{n-2}) - y_{n-1} = -\\frac{2}{3}(y_{n-1} - y_{n-2})$." },
            { prompt: "Since $|y_n - y_{n-1}| = \\frac{2}{3} |y_{n-1} - y_{n-2}|$, is the sequence contractive?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "The ratio $C = 2/3$ is strictly less than 1." }, { id: "B", text: "No", isCorrect: false, explanation: "The ratio is $2/3$, which meets the criteria." }], stepText: "It is contractive, and therefore converges." },
            { stepText: "As before, $y_n = y_1 + \\sum_{k=2}^n (y_k - y_{k-1})$. The differences form a geometric series with ratio $r = -2/3$." },
            { stepText: "The infinite sum converges to $\\frac{1}{1 - (-2/3)} = \\frac{1}{5/3} = 3/5$." },
            { stepText: "The limit is $y_1 + \\frac{3}{5}(y_2 - y_1) = \\frac{2}{5}y_1 + \\frac{3}{5}y_2$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-3-ex12", title: "Exercise 12: Reciprocal Recursion 1", description: "Limit of $x_{n+1} = (2 + x_n)^{-1}$", icon: "RefreshCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "If $x_1 > 0$ and $x_{n+1} := (2 + x_n)^{-1}$ for $n \\ge 1$, show that $(x_n)$ is a contractive sequence. Find the limit." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the contractive constant C.**", interactiveSteps: [
            { stepText: "Since $x_1 > 0$, it is clear that $x_n > 0$ for all $n$." },
            { stepText: "Compute the difference: $|x_{n+2} - x_{n+1}| = |\\frac{1}{2 + x_{n+1}} - \\frac{1}{2 + x_n}|$." },
            { stepText: "Find a common denominator: $|\\frac{2 + x_n - (2 + x_{n+1})}{(2 + x_{n+1})(2 + x_n)}| = \\frac{|x_{n+1} - x_n|}{(2 + x_{n+1})(2 + x_n)}$." },
            { prompt: "Since $x_n > 0$ for all $n$, what is a safe upper bound for the denominator $(2+x_{n+1})(2+x_n)$?", options: [{ id: "A", text: "$4$", isCorrect: true, explanation: "Since $x_k > 0$, $(2+x_k) > 2$. Thus the product is $> 4$." }, { id: "B", text: "$2$", isCorrect: false, explanation: "It is the product of two numbers greater than 2." }], stepText: "The denominator is strictly greater than $4$. Therefore, the fraction is strictly less than $\\frac{1}{4} |x_{n+1} - x_n|$." },
            { stepText: "The sequence is contractive with $C = 1/4 < 1$. Thus, it converges to some limit $L$." },
            { stepText: "Taking the limit of both sides of the recursive equation gives $L = \\frac{1}{2+L}$. Thus $L^2 + 2L - 1 = 0$." },
            { stepText: "Using the quadratic formula, the positive root is $L = \\sqrt{2} - 1$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-3-ex13", title: "Exercise 13: Reciprocal Recursion 2", description: "Limit of $x_{n+1} = 2 + 1/x_n$", icon: "Repeat",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "If $x_1 := 2$ and $x_{n+1} := 2 + 1/x_n$ for $n \\ge 1$, show that $(x_n)$ is a contractive sequence. What is its limit?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Prove it is contractive and solve for L.**", interactiveSteps: [
            { stepText: "Since $x_1 = 2$, it follows that $x_n \\ge 2$ for all $n$." },
            { stepText: "Compute the difference: $|x_{n+2} - x_{n+1}| = |(2 + \\frac{1}{x_{n+1}}) - (2 + \\frac{1}{x_n})| = |\\frac{1}{x_{n+1}} - \\frac{1}{x_n}|$." },
            { prompt: "Finding a common denominator yields $\\frac{|x_{n+1} - x_n|}{x_{n+1} x_n}$. Since $x_k \\ge 2$, what is an upper bound for $\\frac{1}{x_{n+1} x_n}$?", options: [{ id: "A", text: "$1/4$", isCorrect: true, explanation: "Since both are $\\ge 2$, their product is $\\ge 4$." }, { id: "B", text: "$1/2$", isCorrect: false, explanation: "You must multiply the lower bounds." }], stepText: "The fraction is bounded by $1/4$." },
            { stepText: "Thus $|x_{n+2} - x_{n+1}| \\le \\frac{1}{4} |x_{n+1} - x_n|$. The sequence is contractive." },
            { stepText: "Passing to the limit $L$: $L = 2 + 1/L$, which means $L^2 - 2L - 1 = 0$." },
            { stepText: "The positive root is $L = 1 + \\sqrt{2}$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-3-ex14", title: "Exercise 14: Root Finding via Contraction", description: "Calculating roots using an iterative sequence", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "The polynomial equation $x^3 - 5x + 1 = 0$ has a root $r$ with $0 < r < 1$. Use an appropriate contractive sequence to calculate $r$ within $10^{-4}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Set up the sequence and use the error estimation corollary.**", interactiveSteps: [
            { stepText: "We need an equation of the form $x = f(x)$. Rearranging the polynomial gives $5x = x^3 + 1$, or $x = \\frac{x^3 + 1}{5}$." },
            { stepText: "Let $x_1$ be in $(0,1)$, say $x_1 = 0.5$. The sequence is defined as $x_{n+1} = \\frac{x_n^3 + 1}{5}$. Note that $x_n$ will always stay in $(0, 1)$." },
            { prompt: "To check if it is contractive, evaluate $|x_{n+2} - x_{n+1}|$. What does it equal?", options: [{ id: "A", text: "$\\frac{1}{5} |x_{n+1}^3 - x_n^3|$", isCorrect: true, explanation: "Substitute the recursive definition." }, { id: "B", text: "$\\frac{1}{5} |x_{n+1} - x_n|$", isCorrect: false, explanation: "Don't forget the cubed terms." }], stepText: "We get $\\frac{1}{5} |x_{n+1}^3 - x_n^3|$." },
            { stepText: "Factor the difference of cubes: $\\frac{1}{5} |x_{n+1} - x_n| (x_{n+1}^2 + x_{n+1}x_n + x_n^2)$." },
            { stepText: "Since $x_k \\in (0, 1)$, the quadratic term is strictly less than $1 + 1 + 1 = 3$. Thus $|x_{n+2} - x_{n+1}| \\le \\frac{3}{5} |x_{n+1} - x_n|$." },
            { stepText: "The sequence is contractive with $C = 0.6$. The error estimation formula is $|x^* - x_n| \\le \\frac{C^{n-1}}{1-C} |x_2 - x_1|$." },
            { stepText: "Iterating this formula allows us to reach the $10^{-4}$ accuracy threshold easily. Goal reached!" }
        ]}
      ]
    }
  ]
};