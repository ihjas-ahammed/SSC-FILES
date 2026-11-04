import { Unit } from '../types';

export const UNIT_2_1_4: Unit = {
  id: "unit-2-1-4",
  title: "Order Exercises",
  description: "Exercises 14-26: Advanced Inequality Proofs",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-4-ex14", title: "Exercise 14: Bounding Squares", description: "The relationship between squares and products", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "If $0 \\le a < b$, show that $a^2 \\le ab < b^2$. \n\nShow by example that it does *not* follow that $a^2 < ab < b^2$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove $a^2 \\le ab < b^2$.**", interactiveSteps: [
            { stepText: "We are given $a < b$. We can multiply this inequality by a non-negative number." },
            { prompt: "Multiply $a < b$ by $a$ (knowing $a \\ge 0$). What do you get?", options: [{ id: "A", text: "$a^2 \\le ab$", isCorrect: true, explanation: "If a=0, it's 0 <= 0. If a>0, it's a^2 < ab. Thus <= covers both." }, { id: "B", text: "$a^2 < ab$", isCorrect: false, explanation: "If a=0, this becomes 0 < 0, which is false." }], stepText: "We get $a^2 \\le ab$." },
            { stepText: "Now, we also know $a < b$ and $b > 0$ (since $b > a \\ge 0$)." },
            { stepText: "Multiply the inequality $a < b$ by the strictly positive number $b$. This yields $ab < b^2$." },
            { stepText: "Combining them: $a^2 \\le ab < b^2$. Goal reached!" }
        ]},
        { id: "s2", type: "quiz", title: "Counterexample Check", content: "To show that $a^2 < ab$ is not always true, what value must we pick for $a$?", options: [{ id: "A", text: "$a = 0$", isCorrect: true, explanation: "If a=0, then a^2 = 0 and ab = 0, so 0 is not < 0." }, { id: "B", text: "$a = -1$", isCorrect: false, explanation: "The premise requires a >= 0." }] }
      ]
    },
    {
      id: "les-2-1-4-ex15", title: "Exercise 15: Square Roots and Inverses", description: "Inequalities with roots and reciprocals", icon: "SplitSquareHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "If $0 < a < b$, show that:\n(a) $a < \\sqrt{ab} < b$\n(b) $1/b < 1/a$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove $a < \\sqrt{ab} < b$.**", interactiveSteps: [
            { stepText: "Since $0 < a < b$, we know $a > 0$. Multiply $a < b$ by $a$ to get $a^2 < ab$." },
            { stepText: "Similarly, multiply $a < b$ by $b$ to get $ab < b^2$." },
            { prompt: "So we have $a^2 < ab < b^2$. What happens if we take the square root of all terms?", options: [{ id: "A", text: "$a < \\sqrt{ab} < b$", isCorrect: true, explanation: "Square roots preserve strict inequalities for positive numbers." }, { id: "B", text: "$\\pm a < \\sqrt{ab} < \\pm b$", isCorrect: false, explanation: "a and b are strictly positive." }], stepText: "By Theorem 2.1.13(a), taking the square root yields $a < \\sqrt{ab} < b$. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Prove $1/b < 1/a$.**", interactiveSteps: [
            { stepText: "We know $a > 0$ and $b > 0$, so their product $ab > 0$. Thus $1/(ab) > 0$." },
            { stepText: "Multiply the inequality $a < b$ by the positive number $1/(ab)$." },
            { stepText: "This gives $a \\cdot \\frac{1}{ab} < b \\cdot \\frac{1}{ab}$." },
            { stepText: "Simplifying the fractions yields $1/b < 1/a$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex16", title: "Exercise 16: Solving Inequalities", description: "Finding intervals that satisfy conditions", icon: "AlignEndHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "Find all real numbers $x$ that satisfy the following inequalities:\n(a) $x^2 > 3x + 4$\n(b) $1 < x^2 < 4$\n(c) $1/x < x$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Solve $x^2 > 3x + 4$.**", interactiveSteps: [
            { stepText: "Rearrange to $x^2 - 3x - 4 > 0$." },
            { prompt: "How does this quadratic factor?", options: [{ id: "A", text: "$(x - 4)(x + 1) > 0$", isCorrect: true, explanation: "-4 * 1 = -4, -4 + 1 = -3." }, { id: "B", text: "$(x - 3)(x - 1) > 0$", isCorrect: false, explanation: "Check the expansion." }], stepText: "It factors to $(x - 4)(x + 1) > 0$." },
            { stepText: "By the Product Rule (Theorem 2.1.10), both factors must be positive, OR both must be negative." },
            { stepText: "Case 1 (both positive): $x > 4$ and $x > -1$. Result: $x > 4$." },
            { stepText: "Case 2 (both negative): $x < 4$ and $x < -1$. Result: $x < -1$." },
            { stepText: "Solution: $x \\in (-\\infty, -1) \\cup (4, \\infty)$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (c)", content: "**Goal: Solve $1/x < x$.**", interactiveSteps: [
            { stepText: "Subtract $x$: $1/x - x < 0$. Common denominator: $\\frac{1 - x^2}{x} < 0$." },
            { stepText: "Factor numerator: $\\frac{(1-x)(1+x)}{x} < 0$. We must check sign intervals based on the roots $-1, 0, 1$." },
            { prompt: "Test a value between 0 and 1, say 0.5. Is the expression negative?", options: [{ id: "A", text: "No, it's positive", isCorrect: true, explanation: "(+)(+)/(+) = Positive." }, { id: "B", text: "Yes, it's negative", isCorrect: false, explanation: "Check the signs carefully." }], stepText: "For $x \\in (0, 1)$, it is positive. We want negative." },
            { stepText: "Testing all intervals, it is negative when $x \\in (-1, 0)$ and when $x > 1$." },
            { stepText: "Solution: $x \\in (-1, 0) \\cup (1, \\infty)$." }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex17", title: "Exercise 17: Bounded by Epsilon", description: "Alternate form of Theorem 2.1.9", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "Prove the following form of Theorem 2.1.9: \nIf $a \\in \\mathbb{R}$ is such that $0 \\le a \\le \\epsilon$ for every $\\epsilon > 0$, then $a = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove by contradiction.**", interactiveSteps: [
            { stepText: "Assume for contradiction that $a > 0$." },
            { prompt: "If $a > 0$, we need to find an $\\epsilon_0 > 0$ that breaks the rule $a \\le \\epsilon_0$. What is a valid choice?", options: [{ id: "A", text: "$\\epsilon_0 = a/2$", isCorrect: true, explanation: "Since a > 0, a/2 > 0. And a is NOT <= a/2." }, { id: "B", text: "$\\epsilon_0 = 2a$", isCorrect: false, explanation: "a <= 2a is true, so this doesn't break the rule." }], stepText: "Let $\\epsilon_0 = a/2$. Because $a > 0$, we know $\\epsilon_0 > 0$." },
            { stepText: "The premise states $a \\le \\epsilon$ for EVERY positive $\\epsilon$. So it must be true that $a \\le a/2$." },
            { stepText: "But $a \\le a/2 \\implies a/2 \\le 0 \\implies a \\le 0$, which contradicts our assumption $a > 0$." },
            { stepText: "Therefore, the assumption $a > 0$ is false. Since $a \\ge 0$, we must have $a = 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex18", title: "Exercise 18: Shifting the Epsilon Bound", description: "Applying epsilon bounds to two variables", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "Let $a, b \\in \\mathbb{R}$, and suppose that for every $\\epsilon > 0$ we have $a \\le b + \\epsilon$. \n\nShow that $a \\le b$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove $a \\le b$ by contradiction.**", interactiveSteps: [
            { stepText: "Assume for contradiction that $a > b$. This implies $a - b > 0$." },
            { prompt: "Since $a - b$ is strictly positive, we can use it to construct a specific $\\epsilon_0$. Let's pick $\\epsilon_0 = \\frac{a - b}{2}$. Is $\\epsilon_0 > 0$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Because a - b > 0." }, { id: "B", text: "No", isCorrect: false, explanation: "a > b means a - b is positive." }], stepText: "Yes, $\\epsilon_0 = \\frac{a - b}{2} > 0$." },
            { stepText: "By the premise, $a \\le b + \\epsilon$ must hold for ALL $\\epsilon > 0$. Let's plug in $\\epsilon_0$: $a \\le b + \\frac{a - b}{2}$." },
            { stepText: "Simplify the right side: $b + \\frac{a}{2} - \\frac{b}{2} = \\frac{a + b}{2}$." },
            { stepText: "So we have $a \\le \\frac{a + b}{2}$. Multiply by 2: $2a \\le a + b$. Subtract $a$: $a \\le b$." },
            { stepText: "This completely contradicts our assumption that $a > b$. Thus, $a \\le b$ must be true. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex19", title: "Exercise 19: The Arithmetic-Geometric Mean", description: "Proving a fundamental inequality", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "Prove that $\\left[\\frac{1}{2}(a + b)\\right]^2 \\le \\frac{1}{2}(a^2 + b^2)$ for all $a, b \\in \\mathbb{R}$. \n\nShow that equality holds if and only if $a = b$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Expand and simplify the inequality.**", interactiveSteps: [
            { stepText: "Let's multiply both sides by 4 to clear the fractions: $(a + b)^2 \\le 2(a^2 + b^2)$." },
            { stepText: "Expand the left side: $a^2 + 2ab + b^2 \\le 2a^2 + 2b^2$." },
            { prompt: "Move all terms to the right side. What does the inequality become?", options: [{ id: "A", text: "$0 \\le a^2 - 2ab + b^2$", isCorrect: true, explanation: "Subtract a^2, 2ab, and b^2 from both sides." }, { id: "B", text: "$0 \\le a^2 + 2ab + b^2$", isCorrect: false, explanation: "Check your subtraction." }], stepText: "We get $0 \\le a^2 - 2ab + b^2$." },
            { stepText: "Factor the right side: $0 \\le (a - b)^2$." },
            { stepText: "Since the square of any real number is always $\\ge 0$ (Theorem 2.1.8a), this final statement is always true. Thus the original inequality holds!" }
        ]},
        { id: "s2", type: "quiz", title: "Equality Condition", content: "When does $0 = (a - b)^2$ occur?", options: [{ id: "A", text: "When $a = b$", isCorrect: true, explanation: "The only number whose square is 0 is 0 itself." }, { id: "B", text: "When $a = -b$", isCorrect: false, explanation: "Then it would be (2a)^2 = 0." }] }
      ]
    },
    {
      id: "les-2-1-4-ex20", title: "Exercise 20: Squaring Fractions", description: "How squaring affects numbers between 0 and 1", icon: "Shrink",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "(a) If $0 < c < 1$, show that $0 < c^2 < c < 1$.\n(b) If $1 < c$, show that $1 < c < c^2$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove $c^2 < c$ when $c \\in (0, 1)$.**", interactiveSteps: [
            { stepText: "We are given $0 < c$ and $c < 1$." },
            { prompt: "We want to know about $c^2$. Since $c > 0$, we can multiply the inequality $c < 1$ by $c$. What happens?", options: [{ id: "A", text: "$c^2 < c$", isCorrect: true, explanation: "c*c < 1*c." }, { id: "B", text: "$c^2 > c$", isCorrect: false, explanation: "Multiplying by a positive number preserves the sign." }], stepText: "We get $c^2 < c$." },
            { stepText: "Since $c > 0$, we also know $c^2 > 0$ by Theorem 2.1.8(a)." },
            { stepText: "Combining these pieces: $0 < c^2 < c < 1$. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Prove $c < c^2$ when $c > 1$.**", interactiveSteps: [
            { stepText: "We are given $1 < c$. Since $1 > 0$, it follows that $c > 0$." },
            { stepText: "Multiply the inequality $1 < c$ by the positive number $c$." },
            { stepText: "This yields $c \\cdot 1 < c \\cdot c$, which is $c < c^2$." },
            { stepText: "Combining with the given information yields $1 < c < c^2$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex21", title: "Exercise 21: No Integer between 0 and 1", description: "Using the Well-Ordering Property", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "(a) Prove there is no $n \\in \\mathbb{N}$ such that $0 < n < 1$. (Use the Well-Ordering Property of $\\mathbb{N}$.)\n(b) Prove that no natural number can be both even and odd." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove by contradiction using WOP.**", interactiveSteps: [
            { stepText: "Let $S = \\{n \\in \\mathbb{N} : 0 < n < 1\\}$. Assume for contradiction that $S$ is not empty." },
            { prompt: "By the Well-Ordering Property, what must $S$ have?", options: [{ id: "A", text: "A least element, let's call it $m$.", isCorrect: true, explanation: "Every non-empty subset of N has a least element." }, { id: "B", text: "A maximum element.", isCorrect: false, explanation: "WOP guarantees a minimum." }], stepText: "Let $m$ be the least element of $S$. So $0 < m < 1$." },
            { stepText: "Since $0 < m < 1$, multiply the inequality by the positive number $m$: $0 < m^2 < m$." },
            { stepText: "Since $m \\in \\mathbb{N}$, closure under multiplication means $m^2 \\in \\mathbb{N}$." },
            { stepText: "Thus $m^2$ is a natural number strictly between 0 and 1, so $m^2 \\in S$. But $m^2 < m$, which contradicts that $m$ was the LEAST element in $S$. Thus $S$ must be empty. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex22", title: "Exercise 22: Exponential Growth", description: "Powers of c > 1", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "(a) If $c > 1$, show that $c^n \\ge c$ for all $n \\in \\mathbb{N}$, and that $c^n > c$ for $n > 1$.\n(b) If $0 < c < 1$, show that $c^n \\le c$ for all $n \\in \\mathbb{N}$, and that $c^n < c$ for $n > 1$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove $c^n > c$ for $n > 1$ by Induction.**", interactiveSteps: [
            { stepText: "Base case: For $n = 2$, we proved in Exercise 20(b) that since $c > 1$, $c^2 > c$. True." },
            { prompt: "Inductive Hypothesis: Assume $c^k > c$ for some $k \\ge 2$. How do we progress to $k+1$?", options: [{ id: "A", text: "Multiply both sides by $c$", isCorrect: true, explanation: "Since c > 1 > 0, multiplying preserves the inequality." }, { id: "B", text: "Add $c$ to both sides", isCorrect: false, explanation: "That would give c^k + c > 2c." }], stepText: "Multiply by $c$: $c^{k+1} > c^2$." },
            { stepText: "We already know $c^2 > c$. By transitivity, $c^{k+1} > c$." },
            { stepText: "Thus, by Mathematical Induction, $c^n > c$ for all $n > 1$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex23", title: "Exercise 23: Powers and Inequalities", description: "Preserving inequality across powers", icon: "ChevronsUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "If $a > 0, b > 0$, and $n \\in \\mathbb{N}$, show that $a < b$ if and only if $a^n < b^n$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Prove $a < b \\implies a^n < b^n$ via Induction.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $a^1 < b^1$ is just $a < b$, which is our premise. True." },
            { stepText: "Assume true for $k$: $a^k < b^k$." },
            { prompt: "To build $a^{k+1} < b^{k+1}$, let's multiply $a^k < b^k$ by $a$ (since $a>0$). What do we get?", options: [{ id: "A", text: "$a^{k+1} < ab^k$", isCorrect: true, explanation: "Standard multiplication rule." }, { id: "B", text: "$a^{k+1} < b^{k+1}$", isCorrect: false, explanation: "Not quite yet, we multiplied by a, not b." }], stepText: "We get $a^{k+1} < ab^k$." },
            { stepText: "Now take the original premise $a < b$ and multiply by $b^k$ (since $b>0$). We get $ab^k < b^{k+1}$." },
            { stepText: "By transitivity, $a^{k+1} < ab^k < b^{k+1}$. Forward direction proved!" }
        ]},
        { id: "s2", type: "theory", title: "Backward Direction", content: "To prove $a^n < b^n \\implies a < b$, it's easier to prove the contrapositive: If $a \\ge b$, then $a^n \\ge b^n$.\n\nIf $a = b$, then $a^n = b^n$.\nIf $a > b$, then by the forward proof we just did, $a^n > b^n$.\nIn either case, $a^n \\ge b^n$, completing the contrapositive proof!" }
      ]
    },
    {
      id: "les-2-1-4-ex24", title: "Exercise 24: Comparing Exponents", description: "When the base is constant", icon: "BarChart3",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "(a) If $c > 1$ and $m, n \\in \\mathbb{N}$, show that $c^m > c^n$ if and only if $m > n$.\n(b) If $0 < c < 1$ and $m, n \\in \\mathbb{N}$, show that $c^m < c^n$ if and only if $m > n$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a) Forward", content: "**Goal: Prove $m > n \\implies c^m > c^n$.**", interactiveSteps: [
            { stepText: "If $m > n$, then $m - n$ is a natural number $k \\in \\mathbb{N}$." },
            { prompt: "Since $c > 1$, what do we know about $c^k$ from Exercise 22?", options: [{ id: "A", text: "$c^k > 1$", isCorrect: true, explanation: "Powers of numbers greater than 1 are greater than 1." }, { id: "B", text: "$c^k < 1$", isCorrect: false, explanation: "That's for numbers between 0 and 1." }], stepText: "We know $c^{m-n} > 1$." },
            { stepText: "Multiply both sides by $c^n$ (which is positive since $c>1$)." },
            { stepText: "This gives $c^{m-n} \\cdot c^n > 1 \\cdot c^n$, which simplifies to $c^m > c^n$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex25", title: "Exercise 25: Roots and Inequalities", description: "How fractional powers behave", icon: "Scissors",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "Assuming the existence of roots, show that if $c > 1$, then $c^{1/m} < c^{1/n}$ if and only if $m > n$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Connect fractional powers to integer powers.**", interactiveSteps: [
            { stepText: "Let $a = c^{1/m}$ and $b = c^{1/n}$. We want to show $a < b \\iff m > n$." },
            { stepText: "Raise both numbers to the power of $mn$. $a^{mn} = (c^{1/m})^{mn} = c^n$. And $b^{mn} = c^m$." },
            { prompt: "From Exercise 23, $a < b \\iff a^{mn} < b^{mn}$. Substituting our values, what does this become?", options: [{ id: "A", text: "$c^n < c^m$", isCorrect: true, explanation: "Substitute c^n for a^{mn} and c^m for b^{mn}." }, { id: "B", text: "$n < m$", isCorrect: false, explanation: "That's the next step!" }], stepText: "We get $c^n < c^m$." },
            { stepText: "From Exercise 24, we know $c^n < c^m \\iff n < m$ (which is $m > n$)." },
            { stepText: "Chaining the iff statements: $a < b \\iff a^{mn} < b^{mn} \\iff c^n < c^m \\iff m > n$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-4-ex26", title: "Exercise 26: Exponent Rules", description: "Proving laws of exponents via induction", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "Use Mathematical Induction to show that if $a \\in \\mathbb{R}$ and $m, n \\in \\mathbb{N}$, then $a^{m+n} = a^m a^n$ and $(a^m)^n = a^{mn}$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Addition Rule", content: "**Goal: Prove $a^{m+n} = a^m a^n$ by induction on $n$.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $a^{m+1} = a^m a^1 = a^m a$. This is the standard definition of exponents." },
            { stepText: "Assume true for $n=k$: $a^{m+k} = a^m a^k$." },
            { prompt: "Consider $n=k+1$. $a^{m+(k+1)} = a^{(m+k)+1}$. By the definition of exponents, what is this equal to?", options: [{ id: "A", text: "$a^{m+k} \\cdot a$", isCorrect: true, explanation: "x^{p+1} = x^p * x." }, { id: "B", text: "$(a^{m+k})^1$", isCorrect: false, explanation: "Not helpful for factoring." }], stepText: "It equals $a^{m+k} \\cdot a$." },
            { stepText: "Apply the induction hypothesis: $(a^m a^k) \\cdot a$." },
            { stepText: "By associativity (M2), this is $a^m (a^k a) = a^m a^{k+1}$. Goal reached!" }
        ]}
      ]
    }
  ]
};