import { Unit } from '../types';

export const UNIT_2_4_2: Unit = {
  id: "unit-2-4-2",
  title: "Density Exercises",
  description: "Exercises 1-10: Suprema and Rational Density",
  color: "duo-gray",
  lessons: [
    {
      id: "les-2-4-2-ex1", title: "Exercise 1: Supremum of 1 - 1/n", description: "Finding the limit of a sequence using sup", icon: "ArrowUpRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Show that $\\sup\\{1 - 1/n : n \\in \\mathbb{N}\\} = 1$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Show 1 is the least upper bound.**", interactiveSteps: [
            { stepText: "First, for any $n \\ge 1$, $1/n > 0$, so $1 - 1/n < 1$. Thus, 1 is an upper bound." },
            { prompt: "To show 1 is the *least* upper bound, let $v < 1$. We must find an element $s$ in the set such that $v < s$. What is equivalent to $v < 1 - 1/n$?", options: [{ id: "A", text: "$1/n < 1 - v$", isCorrect: true, explanation: "Rearrange the inequality." }, { id: "B", text: "$n < 1 - v$", isCorrect: false, explanation: "Check your algebra." }], stepText: "We need $1/n < 1 - v$. Let $\\varepsilon = 1 - v > 0$." },
            { stepText: "By the Archimedean Property, there exists $n \\in \\mathbb{N}$ such that $1/n < \\varepsilon$." },
            { stepText: "This implies $1 - 1/n > 1 - \\varepsilon = v$. Thus we found an element greater than $v$. So $\\sup = 1$." }
        ]},
        { id: "s2", type: "numerical", title: "Calculate", content: "What is $\\inf\\{1 - 1/n : n \\in \\mathbb{N}\\}$?", numericAnswer: 0, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-4-2-ex2", title: "Exercise 2: Inf and Sup of Set S", description: "Bounds of {1/n - 1/m}", icon: "ArrowRightLeft",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "If $S := \\{1/n - 1/m : n, m \\in \\mathbb{N}\\}$, find $\\inf S$ and $\\sup S$." },
        { id: "s1", type: "solution", title: "Interactive Solution: Supremum", content: "**Goal: Maximize 1/n - 1/m.**", interactiveSteps: [
            { stepText: "To make $1/n - 1/m$ as large as possible, we want $1/n$ large and $1/m$ small." },
            { prompt: "What is the maximum value of $1/n$?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "When n=1." }, { id: "B", text: "Infinity", isCorrect: false, explanation: "n is a natural number." }], stepText: "Max $1/n = 1$." },
            { stepText: "We can make $1/m$ arbitrarily close to 0 (by Archimedean Property), but never negative. So $\\sup S = 1 - 0 = 1$." },
            { stepText: "Wait, is 1 in the set? No, because $1/m > 0$. But we can get arbitrarily close to 1 (e.g., $1 - 1/1000$). Thus $\\sup S = 1$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Infimum", content: "**Goal: Minimize 1/n - 1/m.**", interactiveSteps: [
            { stepText: "To minimize, we want $1/n$ small (close to 0) and $1/m$ large (close to 1)." },
            { prompt: "What is the result?", options: [{ id: "A", text: "-1", isCorrect: true, explanation: "Limit of 0 - 1." }, { id: "B", text: "0", isCorrect: false, explanation: "We can get negative values like 1/100 - 1." }], stepText: "We can get arbitrarily close to $0 - 1 = -1$." },
            { stepText: "Thus $\\inf S = -1$." }
        ]}
      ]
    },
    {
      id: "les-2-4-2-ex3", title: "Exercise 3: Converse of Supremum", description: "Characterizing sup S via 1/n", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Let $S \\subseteq \\mathbb{R}$ be nonempty. Prove that if $u \in \\mathbb{R}$ satisfies:\n(i) for every $n$, $u - 1/n$ is not an upper bound,\n(ii) for every $n$, $u + 1/n$ is an upper bound,\nthen $u = \\sup S$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show u satisfies the definition of supremum.**", interactiveSteps: [
            { stepText: "First, we show $u$ is an upper bound. Assume it's not. Then exists $s > u$. Let $\\varepsilon = s - u > 0$." },
            { prompt: "By Archimedean Property, find $n$ such that $1/n < \\varepsilon$. What does this imply?", options: [{ id: "A", text: "$u + 1/n < s$", isCorrect: true, explanation: "$u + 1/n < u + (s-u) = s$." }, { id: "B", text: "$u + 1/n > s$", isCorrect: false, explanation: "Check algebra." }], stepText: "This implies $u + 1/n < s$. But condition (ii) says $u + 1/n$ is an upper bound, so $s \\le u + 1/n$. Contradiction! Thus $u$ is an upper bound." },
            { stepText: "Second, show it's the *least* upper bound. Let $v < u$. Then $u - v > 0$. Find $n$ such that $1/n < u - v$, so $v < u - 1/n$." },
            { stepText: "Condition (i) says $u - 1/n$ is NOT an upper bound. Since $v$ is even smaller, $v$ cannot be an upper bound. Thus $u = \\sup S$." }
        ]}
      ]
    },
    {
      id: "les-2-4-2-ex4", title: "Exercise 4: Sup/Inf of aS and bS", description: "Scaling sets by positive and negative numbers", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Let $S$ be a bounded set in $\\mathbb{R}$.\n(a) Let $a > 0$. Show $\\inf(aS) = a \\inf S$ and $\\sup(aS) = a \\sup S$.\n(b) Let $b < 0$. Show $\\inf(bS) = b \\sup S$ and $\\sup(bS) = b \\inf S$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (b) Sup", content: "**Goal: Prove $\\sup(bS) = b \\inf S$ for $b < 0$.**", interactiveSteps: [
            { stepText: "Let $w = \\inf S$. Then $w \\le s$ for all $s \\in S$." },
            { prompt: "Multiply by $b < 0$. What happens to the inequality?", options: [{ id: "A", text: "$bw \\ge bs$", isCorrect: true, explanation: "Negative multiplication flips the sign." }, { id: "B", text: "$bw \\le bs$", isCorrect: false, explanation: "Forgot to flip." }], stepText: "We get $bs \\le bw$ for all $s \\in S$. Thus $bw$ is an upper bound for $bS$." },
            { stepText: "To show it's the least upper bound, let $v < bw$. Then $v/b > w$ (dividing by negative). Since $w = \\inf S$, there exists $s \in S$ such that $s < v/b$." },
            { stepText: "Multiply by $b$ again: $bs > v$. Thus $v$ is not an upper bound. So $bw = \\sup(bS)$." }
        ]}
      ]
    },
    {
      id: "les-2-4-2-ex5", title: "Exercise 5: Sup of Squares", description: "Relating sup S to sup S²", icon: "Square",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Let $S$ be a bounded set of *nonnegative* real numbers. Let $T := \\{x^2 : x \\in S\\}$. Prove that if $u = \\sup S$, then $u^2 = \\sup T$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $u^2$ is the least upper bound of T.**", interactiveSteps: [
            { stepText: "Since $x \le u$ for all $x \in S$ and $x \ge 0$, we have $x^2 \\le u^2$. Thus $u^2$ is an upper bound of $T$." },
            { prompt: "Let $v < u^2$. We need to find an element in $T$ larger than $v$. What should we look for in $S$?", options: [{ id: "A", text: "An element $x > \\sqrt{v}$", isCorrect: true, explanation: "If $x > \\sqrt{v}$, then $x^2 > v$." }, { id: "B", text: "An element $x > v^2$", isCorrect: false, explanation: "Dimensionally wrong." }], stepText: "Since $v < u^2$, $\\sqrt{v} < u$. Since $u = \\sup S$, there exists $x \in S$ such that $x > \\sqrt{v}$." },
            { stepText: "Squaring gives $x^2 > v$. Since $x^2 \in T$, we found an element in $T$ greater than $v$. Thus $u^2 = \\sup T$." }
        ]},
        { id: "s2", type: "quiz", title: "Negative Case", content: "If $S = \\{-5, 1\\}$, then $u=1$. Is $u^2 = 1$ the supremum of $T = \\{25, 1\\}$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Sup T is 25. The theorem fails if negative numbers are allowed." }, { id: "B", text: "Yes", isCorrect: false, explanation: "1 is not 25." }] }
      ]
    },
    {
      id: "les-2-4-2-ex6", title: "Exercise 6: Sup of a Function Sum", description: "Relationship between sup(f+a) and sup(f)", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Let $X$ be a nonempty set and $f: X \\to \\mathbb{R}$ have bounded range. Let $a \in \\mathbb{R}$.\n\nShow that $\\sup\\{a + f(x) : x \\in X\\} = a + \\sup\\{f(x) : x \\in X\\}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Apply the properties of sets.**", interactiveSteps: [
            { stepText: "Let $S = \\{f(x) : x \\in X\\}$. Then the set on the LHS is $a + S = \\{a + s : s \\in S\\}$." },
            { stepText: "We already know from Exercise 2.4.1(a) (or basic properties) that $\\sup(a + S) = a + \\sup S$." },
            { prompt: "This is because adding a constant...", options: [{ id: "A", text: "Shifts the entire set rigidly", isCorrect: true, explanation: "Everything moves by +a, including the upper bound." }, { id: "B", text: "Scales the set", isCorrect: false, explanation: "That's multiplication." }], stepText: "Shifting the set shifts the supremum by exactly the same amount." }
        ]}
      ]
    },
    {
      id: "les-2-4-2-ex7", title: "Exercise 7: Sup of Sum of Sets", description: "sup(A+B) = sup A + sup B", icon: "Combine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Let $A$ and $B$ be bounded nonempty sets. Let $A + B := \\{a + b : a \\in A, b \\in B\\}$. \n\nProve that $\\sup(A + B) = \\sup A + \\sup B$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove inequalities both ways.**", interactiveSteps: [
            { stepText: "Let $u_A = \\sup A$ and $u_B = \\sup B$. For any $x \in A+B$, $x = a+b$ where $a \le u_A$ and $b \le u_B$." },
            { prompt: "Thus, what is an upper bound for $A+B$?", options: [{ id: "A", text: "$u_A + u_B$", isCorrect: true, explanation: "$a+b \le u_A+u_B$." }, { id: "B", text: "$u_A u_B$", isCorrect: false, explanation: "We are adding." }], stepText: "So $\\sup(A+B) \le u_A + u_B$." },
            { stepText: "Now let $\\varepsilon > 0$. There exist $a \in A$ and $b \in B$ such that $a > u_A - \\varepsilon/2$ and $b > u_B - \\varepsilon/2$." },
            { stepText: "Then $a+b > u_A + u_B - \\varepsilon$. Since $a+b \in A+B$, we have found an element arbitrarily close to the sum. Thus $\\sup(A+B) \ge u_A + u_B$." },
            { stepText: "Combining inequalities proves equality." }
        ]}
      ]
    },
    {
      id: "les-2-4-2-ex8", title: "Exercise 8: Sup of Functions", description: "sup(f+g) vs sup(f) + sup(g)", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Let $f, g$ be bounded functions on $X$. Show that $\\sup\\{f(x) + g(x)\\} \\le \\sup\\{f(x)\\} + \\sup\\{g(x)\\}$.\n\nGive an example where the inequality is strict." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Establish the inequality.**", interactiveSteps: [
            { stepText: "For any specific $x$, $f(x) \\le \\sup f$ and $g(x) \\le \\sup g$." },
            { prompt: "Adding these, what is true for $f(x) + g(x)$?", options: [{ id: "A", text: "$f(x) + g(x) \\le \\sup f + \\sup g$", isCorrect: true, explanation: "Sum of upper bounds is an upper bound for the sum." }, { id: "B", text: "$f(x) + g(x) = \\sup f + \\sup g$", isCorrect: false, explanation: "Not necessarily equal." }], stepText: "Since $\\sup f + \\sup g$ is an upper bound for the set of sums, the supremum of the sums must be $\\le$ this bound." },
            { stepText: "Counterexample: Let $X = \\{1, 2\\}$. $f(1)=1, f(2)=0$. $g(1)=0, g(2)=1$. $\\sup f = 1, \\sup g = 1$. Sum is 2." },
            { stepText: "But $(f+g)(1) = 1, (f+g)(2) = 1$. So $\\sup(f+g) = 1$. $1 < 2$. Strict inequality holds!" }
        ]}
      ]
    },
    {
      id: "les-2-4-2-ex9", title: "Exercise 9: Supremum of Iterated Functions", description: "Iterated suprema", icon: "ListOrdered",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Let $X = Y = \\{x \\in \\mathbb{R} : 0 < x < 1\\}$. Define $h(x, y) := 2x + y$.\n\n(a) For each $x$, find $F(x) = \\sup\\{h(x, y) : y \in Y\\}$.\n(b) Find $\\inf\\{F(x) : x \in X\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute stepwise.**", interactiveSteps: [
            { stepText: "$h(x, y) = 2x + y$. We hold $x$ constant and vary $y \in (0, 1)$." },
            { prompt: "What is $\\sup\\{y : y \in (0, 1)\\}$?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "The upper limit of the interval." }, { id: "B", text: "0.99", isCorrect: false, explanation: "We can get closer to 1." }], stepText: "So $F(x) = 2x + 1$." },
            { stepText: "Now we want $\\inf\\{2x + 1 : x \in (0, 1)\\}$." },
            { stepText: "As $x \to 0$, $2x + 1 \to 1$. Thus the infimum is 1." }
        ]}
      ]
    },
    {
      id: "les-2-4-2-ex10", title: "Exercise 10: Diagonal Function", description: "A slightly more complex function", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Perform the computations for $h(x, y) = 0$ if $x < y$, and $1$ if $x \\ge y$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $F(x)$ and $G(y)$.**", interactiveSteps: [
            { stepText: "For a fixed $x \in (0, 1)$, does there exist a $y \in (0, 1)$ such that $x < y$?" },
            { prompt: "Yes, $y$ can be between $x$ and 1. In this case, $h(x, y) = 0$. Can we force $h(x, y) = 1$?", options: [{ id: "A", text: "Yes, pick $y < x$", isCorrect: true, explanation: "If we pick a small y, $x \ge y$, so h=1." }, { id: "B", text: "No", isCorrect: false, explanation: "We can vary y freely." }], stepText: "So for any $x$, the set of values is $\\{0, 1\\}$. Thus $F(x) = \\sup \\{0, 1\\} = 1$." },
            { stepText: "Then $\\inf \\{F(x)\\} = 1$." },
            { stepText: "Now consider $g(y) = \\inf\\{h(x, y) : x \in X\\}$. For fixed $y$, can we make $x < y$?" },
            { stepText: "Yes. So $h$ can be 0. Can we make $x \ge y$? Yes. So values are $\\{0, 1\\}$. $\\inf$ is 0. So $g(y) = 0$." },
            { stepText: "Then $\\sup \\{g(y)\\} = 0$. Note $0 \ne 1$, so order of sup/inf matters!" }
        ]}
      ]
    }
  ]
};