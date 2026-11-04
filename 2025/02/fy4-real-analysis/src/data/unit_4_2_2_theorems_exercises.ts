import { Unit } from '../types';

export const UNIT_4_2_2: Unit = {
  id: "unit-4-2-2",
  title: "Theorems Exercises",
  description: "Exercises 1-15: Proving and Applying Limit Laws",
  color: "duo-red",
  lessons: [
    {
      id: "les-4-2-2-ex1", title: "Exercise 1: Applying Limit Theorems", description: "Direct evaluation of algebraic limits", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Apply Theorem 4.2.4 to determine the following limits:\n(a) $\\lim_{x\\to 1} (x+1)(2x+3)$\n(b) $\\lim_{x\\to 1} \\frac{x^2+2}{x^2-2}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Use the product rule.**", interactiveSteps: [
            { stepText: "By the polynomial limit theorem, $\\lim_{x\\to 1} (x+1) = 1+1 = 2$." },
            { stepText: "Similarly, $\\lim_{x\\to 1} (2x+3) = 2(1)+3 = 5$." },
            { prompt: "Applying the product rule for limits, what is the final answer?", options: [{ id: "A", text: "10", isCorrect: true, explanation: "2 * 5 = 10." }, { id: "B", text: "7", isCorrect: false, explanation: "We are multiplying, not adding." }], stepText: "The limit is $2 \\times 5 = 10$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Use the quotient rule.**", interactiveSteps: [
            { stepText: "First, find the limit of the denominator: $\\lim_{x\\to 1} (x^2-2) = 1^2 - 2 = -1$." },
            { prompt: "Since the denominator's limit is not 0, we can use the quotient rule. What is the limit of the numerator?", options: [{ id: "A", text: "3", isCorrect: true, explanation: "1^2 + 2 = 3." }, { id: "B", text: "1", isCorrect: false, explanation: "Check the arithmetic." }], stepText: "The numerator's limit is $3$." },
            { stepText: "Thus, the quotient limit is $\\frac{3}{-1} = -3$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex1b", title: "Exercise 1: More Limit Theorems", description: "Fractions and Rational functions", icon: "Divide",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1 (c & d)", content: "Determine the following limits:\n(c) $\\lim_{x\\to 2} (\\frac{1}{x+1} - \\frac{1}{2x})$\n(d) $\\lim_{x\\to 0} \\frac{x+1}{x^2+2}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (c)", content: "**Goal: Use the difference and quotient rules.**", interactiveSteps: [
            { stepText: "Evaluate the first term: $\\lim_{x\\to 2} \\frac{1}{x+1} = \\frac{1}{2+1} = \\frac{1}{3}$." },
            { stepText: "Evaluate the second term: $\\lim_{x\\to 2} \\frac{1}{2x} = \\frac{1}{4}$." },
            { prompt: "Subtract the two limits. What is $1/3 - 1/4$?", options: [{ id: "A", text: "1/12", isCorrect: true, explanation: "4/12 - 3/12 = 1/12." }, { id: "B", text: "1/7", isCorrect: false, explanation: "You must find a common denominator." }], stepText: "The limit is $\\frac{1}{12}$." }
        ]},
        { id: "s2", type: "numerical", title: "Evaluate Part (d)", content: "What is $\\lim_{x\\to 0} \\frac{x+1}{x^2+2}$? (Enter as a decimal)", numericAnswer: 0.5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-4-2-2-ex2", title: "Exercise 2: Factoring Limits", description: "Handling 0/0 indeterminate forms", icon: "Scissors",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Determine the following limits:\n(a) $\\lim_{x\\to 2} \\frac{x^2-4}{x-2}$\n(b) $\\lim_{x\\to 0} \\frac{(x+1)^2-1}{x}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Factor the numerator to cancel the problematic denominator.**", interactiveSteps: [
            { stepText: "Direct substitution yields $0/0$. We must factor." },
            { prompt: "How does $x^2 - 4$ factor?", options: [{ id: "A", text: "$(x-2)(x+2)$", isCorrect: true, explanation: "Difference of squares." }, { id: "B", text: "$(x-2)^2$", isCorrect: false, explanation: "That would be $x^2-4x+4$." }], stepText: "The numerator is $(x-2)(x+2)$." },
            { stepText: "For $x \\neq 2$, the fraction simplifies to $x+2$." },
            { stepText: "Applying the polynomial limit theorem, $\\lim_{x\\to 2} (x+2) = 4$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Expand and cancel.**", interactiveSteps: [
            { stepText: "Direct substitution yields $0/0$." },
            { stepText: "Expand the numerator: $(x^2 + 2x + 1) - 1 = x^2 + 2x$." },
            { stepText: "Divide by $x$ (valid since $x \\neq 0$): $\\frac{x(x+2)}{x} = x+2$." },
            { stepText: "The limit as $x \to 0$ of $x+2$ is $2$." }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex3", title: "Exercise 3: Complex Conjugates", description: "Evaluating $\\lim \\frac{\\sqrt{1+2x}-\\sqrt{1+3x}}{x+2x^2}$", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Find $\\lim_{x\\to 0} \\frac{\\sqrt{1+2x} - \\sqrt{1+3x}}{x+2x^2}$ where $x > 0$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Multiply by the conjugate.**", interactiveSteps: [
            { stepText: "Direct substitution yields $0/0$. Let's multiply the numerator and denominator by the conjugate of the numerator: $\\sqrt{1+2x} + \\sqrt{1+3x}$." },
            { prompt: "What does the numerator become after multiplying by the conjugate?", options: [{ id: "A", text: "$-x$", isCorrect: true, explanation: "$(1+2x) - (1+3x) = -x$." }, { id: "B", text: "$5x$", isCorrect: false, explanation: "Watch the subtraction sign." }], stepText: "The new numerator is $-x$." },
            { stepText: "The new denominator is $(x+2x^2)(\\sqrt{1+2x} + \\sqrt{1+3x})$." },
            { stepText: "Factor $x$ out of the first part of the denominator: $x(1+2x)(\\dots)$." },
            { stepText: "Cancel the $x$ from the numerator and denominator: $\\frac{-1}{(1+2x)(\\sqrt{1+2x} + \\sqrt{1+3x})}$." },
            { stepText: "Now substitute $x = 0$. The denominator becomes $(1)(\\sqrt{1} + \\sqrt{1}) = 2$." },
            { stepText: "The limit is $-1/2$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex4", title: "Exercise 4: Squeezing Cosine", description: "Comparing $\\cos(1/x)$ and $x\\cos(1/x)$", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Prove that $\\lim_{x\\to 0} \\cos(1/x)$ does not exist, but that $\\lim_{x\\to 0} x\\cos(1/x) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Non-existence", content: "**Goal: Use sequential criterion.**", interactiveSteps: [
            { stepText: "To show $\\cos(1/x)$ doesn't have a limit at 0, we find two sequences $(x_n)$ and $(y_n)$ converging to 0 with different function limits." },
            { prompt: "We want $\\cos(1/x_n) = 1$. What should $x_n$ be?", options: [{ id: "A", text: "$x_n = \\frac{1}{2n\\pi}$", isCorrect: true, explanation: "Then $1/x_n = 2n\\pi$, and $\\cos(2n\\pi) = 1$." }, { id: "B", text: "$x_n = \\frac{1}{n\\pi}$", isCorrect: false, explanation: "Cosine alternates between 1 and -1 here." }], stepText: "Let $x_n = \\frac{1}{2n\\pi}$. Then $\\lim \\cos(1/x_n) = 1$." },
            { stepText: "Let $y_n = \\frac{1}{\\pi + 2n\\pi}$. Then $\\lim \\cos(1/y_n) = -1$." },
            { stepText: "Since the limits differ, $\\lim_{x\\to 0} \\cos(1/x)$ does not exist." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Squeeze Theorem", content: "**Goal: Squeeze $x\\cos(1/x)$.**", interactiveSteps: [
            { stepText: "We know that for all $y$, $-1 \\le \\cos(y) \\le 1$." },
            { stepText: "Substituting $y = 1/x$ and multiplying by $|x|$ gives $-|x| \\le x\\cos(1/x) \\le |x|$." },
            { stepText: "Since $\\lim_{x\\to 0} |x| = 0$ and $\\lim_{x\\to 0} -|x| = 0$, the Squeeze Theorem forces $\\lim_{x\\to 0} x\\cos(1/x) = 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex5", title: "Exercise 5: Bounded x Null = Null", description: "Proving fg -> 0", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Let $f, g$ be defined on $A$, and let $c$ be a cluster point. Suppose $f$ is bounded on a neighborhood of $c$ and that $\\lim_{x\\to c} g = 0$. \nProve that $\\lim_{x\\to c} fg = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Bound the product.**", interactiveSteps: [
            { stepText: "Since $f$ is bounded near $c$, there exists a $\\delta_1$ and $M > 0$ such that $|f(x)| \\le M$ for $0 < |x-c| < \\delta_1$." },
            { stepText: "We want to make $|f(x)g(x) - 0| < \\epsilon$." },
            { prompt: "Using the bound for $f$, what is $|f(x)g(x)|$ bounded by?", options: [{ id: "A", text: "$M|g(x)|$", isCorrect: true, explanation: "$|f(x)g(x)| = |f(x)||g(x)| \\le M|g(x)|$." }, { id: "B", text: "$M$", isCorrect: false, explanation: "You must include g(x)." }], stepText: "It is bounded by $M|g(x)|$." },
            { stepText: "Since $g(x) \to 0$, there exists $\\delta_2$ such that if $0 < |x-c| < \\delta_2$, then $|g(x) - 0| < \\epsilon/M$." },
            { stepText: "Let $\\delta = \\min(\\delta_1, \\delta_2)$. For these $x$, $|f(x)g(x)| \\le M|g(x)| < M(\\epsilon/M) = \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex6", title: "Exercise 6: Epsilon-Delta Proof of Sum Limit", description: "Direct proof of Theorem 4.2.4(a)", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Use the definition of the limit to prove that if $\\lim f = L$ and $\\lim g = M$, then $\\lim (f+g) = L+M$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Epsilon/2 trick.**", interactiveSteps: [
            { stepText: "Let $\\epsilon > 0$. We want to show $|(f(x)+g(x)) - (L+M)| < \\epsilon$." },
            { prompt: "How do we rearrange the terms inside the absolute value?", options: [{ id: "A", text: "$|(f(x)-L) + (g(x)-M)|$", isCorrect: true, explanation: "Group the function with its respective limit." }, { id: "B", text: "$|(f(x)-M) + (g(x)-L)|$", isCorrect: false, explanation: "This mixes up the limits." }], stepText: "Rearrange to $|(f(x)-L) + (g(x)-M)|$." },
            { stepText: "By Triangle Inequality, this is $\\le |f(x)-L| + |g(x)-M|$." },
            { stepText: "Since $\\lim f = L$, there exists $\\delta_1$ such that $|f(x)-L| < \\epsilon/2$. Similarly, there exists $\\delta_2$ such that $|g(x)-M| < \\epsilon/2$." },
            { stepText: "Let $\\delta = \\min(\\delta_1, \\delta_2)$. Then the total sum is strictly less than $\\epsilon/2 + \\epsilon/2 = \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex7", title: "Exercise 7: Sequential Proof of Quotient", description: "Proof of Theorem 4.2.4(b)", icon: "ListOrdered",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Use the sequential formulation of the limit to prove Theorem 4.2.4(b): If $\\lim f = L$ and $\\lim h = H \\neq 0$, then $\\lim (f/h) = L/H$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Pass to sequences.**", interactiveSteps: [
            { stepText: "Let $(x_n)$ be any sequence in $A$ converging to $c$ with $x_n \\neq c$." },
            { prompt: "By the Sequential Criterion for $f$ and $h$, what do $f(x_n)$ and $h(x_n)$ converge to?", options: [{ id: "A", text: "$L$ and $H$", isCorrect: true, explanation: "The sequences of outputs converge to the respective limits." }, { id: "B", text: "$c$ and $c$", isCorrect: false, explanation: "The inputs converge to c." }], stepText: "We have $\\lim f(x_n) = L$ and $\\lim h(x_n) = H$." },
            { stepText: "Since $h(x) \\neq 0$ and $H \\neq 0$, the sequence $(h(x_n))$ consists of non-zero terms converging to a non-zero limit." },
            { stepText: "By the quotient rule for sequences (Theorem 3.2.3b), $\\lim \\frac{f(x_n)}{h(x_n)} = \\frac{L}{H}$." },
            { stepText: "Since this holds for every valid sequence, by the Sequential Criterion, $\\lim_{x\\to c} (f/h)(x) = L/H$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex8", title: "Exercise 8: Squeezing Powers", description: "Proving x^n -> 0", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Let $n \\in \\mathbb{N}$ be such that $n \\ge 3$. Derive the inequality $-x^2 \\le x^n \\le x^2$ for $-1 < x < 1$. \nThen use the fact that $\\lim_{x\\to 0} x^2 = 0$ to show that $\\lim_{x\\to 0} x^n = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Set up the squeeze theorem.**", interactiveSteps: [
            { stepText: "Let $-1 < x < 1$. This means $|x| < 1$." },
            { prompt: "If $|x| < 1$ and $n \\ge 3$, how does $|x|^n$ compare to $|x|^2$?", options: [{ id: "A", text: "$|x|^n < |x|^2$", isCorrect: true, explanation: "Multiplying a fraction by itself makes it smaller." }, { id: "B", text: "$|x|^n > |x|^2$", isCorrect: false, explanation: "That's true for |x| > 1." }], stepText: "We have $|x|^n \\le |x|^2$." },
            { stepText: "This is equivalent to $-|x|^2 \\le x^n \\le |x|^2$." },
            { stepText: "Since $|x|^2 = x^2$, we get $-x^2 \\le x^n \\le x^2$." },
            { stepText: "We know $\\lim_{x\\to 0} -x^2 = 0$ and $\\lim_{x\\to 0} x^2 = 0$. By the Squeeze Theorem, $\\lim_{x\\to 0} x^n = 0$." }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex9", title: "Exercise 9: Dependent Limits", description: "Extracting limit of g from f and combinations", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Let $f, g$ be defined on $A$ and $c$ be a cluster point.\n(a) Show that if $\\lim f$ and $\\lim (f+g)$ exist, then $\\lim g$ exists.\n(b) If $\\lim f$ and $\\lim fg$ exist, does it follow that $\\lim g$ exists?" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Express g in terms of f and f+g.**", interactiveSteps: [
            { stepText: "We know limits for $f$ and $h = (f+g)$ exist." },
            { prompt: "How can we write $g(x)$ purely in terms of $f(x)$ and $h(x)$?", options: [{ id: "A", text: "$g(x) = h(x) - f(x)$", isCorrect: true, explanation: "Simple algebra: (f+g) - f = g." }, { id: "B", text: "$g(x) = h(x) / f(x)$", isCorrect: false, explanation: "That's for products." }], stepText: "We can write $g = h - f$." },
            { stepText: "By the Algebraic Limit Theorem for differences, if $h$ and $f$ have limits, their difference $h-f$ has a limit." },
            { stepText: "Therefore, $\\lim g$ must exist." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Find a counterexample for the product.**", interactiveSteps: [
            { stepText: "We need $\\lim f$ and $\\lim fg$ to exist, but $g$ to have no limit. This is easiest if $f$ forces the product to 0." },
            { stepText: "Let $f(x) = 0$ for all $x$. Then $\\lim f = 0$." },
            { stepText: "Let $g(x) = \\sin(1/x)$. We know $\\lim g$ does not exist at 0." },
            { stepText: "However, $(fg)(x) = 0 \\times \\sin(1/x) = 0$. So $\\lim fg = 0$ exists." },
            { stepText: "Thus, the existence of $\\lim f$ and $\\lim fg$ does NOT guarantee $\\lim g$ exists." }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex10", title: "Exercise 10: Divergent Components", description: "When f and g diverge but f+g converges", icon: "Shuffle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Give examples of functions $f$ and $g$ such that $f$ and $g$ do not have limits at a point $c$, but such that both $f+g$ and $fg$ have limits at $c$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find functions that cancel out each other's divergence.**", interactiveSteps: [
            { stepText: "We need a function that jumps at $c$. Let $c=0$. We previously saw $f(x) = \\text{sgn}(x)$ diverges at 0." },
            { prompt: "What should $g(x)$ be so that $f(x) + g(x)$ is a nice, constant function?", options: [{ id: "A", text: "$g(x) = -\\text{sgn}(x)$", isCorrect: true, explanation: "Then their sum is exactly 0 everywhere." }, { id: "B", text: "$g(x) = \\text{sgn}(x)$", isCorrect: false, explanation: "Then the sum is 2sgn(x), which still diverges." }], stepText: "Let $g(x) = -\\text{sgn}(x)$." },
            { stepText: "The sum is $(f+g)(x) = 0$ for all $x \\neq 0$. The limit of the constant 0 is 0." },
            { stepText: "The product is $(fg)(x) = -(\\text{sgn}(x))^2 = -1$ for all $x \\neq 0$." },
            { stepText: "The limit of the constant -1 is -1. Both limits exist! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex11", title: "Exercise 11: Trigonometric Limits", description: "Evaluating oscillating limits at 0", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Determine whether the following limits exist at $x=0$:\n(a) $\\lim \\sin(1/x^2)$\n(b) $\\lim x\\sin(1/x^2)$\n(c) $\\lim \\text{sgn}(\\sin(1/x))$\n(d) $\\lim \\sqrt{x}\\sin(1/x^2)$ ($x>0$)" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply previous knowledge of oscillation and squeeze.**", interactiveSteps: [
            { stepText: "(a) $\\sin(1/x^2)$ oscillates wildly between -1 and 1 as $x \\to 0$. Just like $\\sin(1/x)$, it does not converge. (Diverges)" },
            { prompt: "For (b) $x\\sin(1/x^2)$, what theorem should we apply?", options: [{ id: "A", text: "Squeeze Theorem", isCorrect: true, explanation: "Bounded by -|x| and |x|." }, { id: "B", text: "Product Rule", isCorrect: false, explanation: "The limit of sine doesn't exist, so product rule fails." }], stepText: "By the Squeeze Theorem, since $|x\\sin(1/x^2)| \\le |x|$, the limit is 0." },
            { stepText: "(c) $\\text{sgn}(\\sin(1/x))$ jumps between -1, 0, and 1 rapidly near 0. It diverges." },
            { stepText: "(d) $\\sqrt{x}\\sin(1/x^2)$ is bounded by $-\\sqrt{x}$ and $\\sqrt{x}$. Since $\\sqrt{x} \\to 0$, the Squeeze Theorem forces the limit to 0." }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex12", title: "Exercise 12: Cauchy's Functional Equation", description: "f(x+y) = f(x)+f(y)", icon: "Network",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be such that $f(x+y) = f(x)+f(y)$. Assume $\\lim_{x\\to 0} f = L$ exists.\n(a) Prove $L=0$.\n(b) Prove $f$ has a limit at every $c \\in \\mathbb{R}$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Evaluate f(2x) to find L.**", interactiveSteps: [
            { stepText: "From the property, $f(2x) = f(x+x) = f(x) + f(x) = 2f(x)$." },
            { prompt: "Take the limit of both sides as $x \\to 0$. What is the resulting equation for $L$?", options: [{ id: "A", text: "$L = 2L$", isCorrect: true, explanation: "As x approaches 0, 2x also approaches 0. So lim f(2x) = L, and lim 2f(x) = 2L." }, { id: "B", text: "$2L = 2L$", isCorrect: false, explanation: "Limit of f(2x) as x goes to 0 is just L." }], stepText: "We get $L = 2L$." },
            { stepText: "Subtracting $L$ gives $L = 0$. So $\\lim_{x\\to 0} f(x) = 0$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Use limit at 0 to find limit at c.**", interactiveSteps: [
            { stepText: "We want to evaluate $\\lim_{x\\to c} f(x)$." },
            { stepText: "Let $x = c + h$. As $x \\to c$, we have $h \\to 0$." },
            { stepText: "So $\\lim_{x\\to c} f(x) = \\lim_{h\\to 0} f(c+h)$." },
            { stepText: "Using the functional equation: $f(c+h) = f(c) + f(h)$." },
            { stepText: "Thus the limit is $\\lim_{h\\to 0} [f(c) + f(h)] = f(c) + \\lim_{h\\to 0} f(h) = f(c) + 0 = f(c)$. Limit exists and is $f(c)$." }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex13", title: "Exercise 13: Composition Traps", description: "Why lim g(f(x)) != g(lim f(x)) sometimes", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Let $f(x) := x+1$ and let $g(x) := 2$ if $x \\neq 1$, and $g(1) := 0$.\n(a) Find $\\lim_{x\\to 0} g(f(x))$ and compare to $g(\\lim_{x\\to 0} f(x))$.\n(b) Find $\\lim_{x\\to 1} f(g(x))$ and compare to $f(\\lim_{x\\to 1} g(x))$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate limits carefully.**", interactiveSteps: [
            { stepText: "(a) As $x \\to 0$, $f(x) = x+1 \to 1$." },
            { prompt: "Since $f(x)$ gets close to 1 but NEVER equals 1 (for $x \\neq 0$), what is the value of $g(f(x))$ for $x \\neq 0$?", options: [{ id: "A", text: "2", isCorrect: true, explanation: "Because the input to g is close to 1 but NOT 1, g outputs 2." }, { id: "B", text: "0", isCorrect: false, explanation: "g only outputs 0 if the input is exactly 1." }], stepText: "For $x \\neq 0$, $g(f(x)) = 2$. Thus $\\lim_{x\\to 0} g(f(x)) = 2$." },
            { stepText: "However, $g(\\lim_{x\\to 0} f(x)) = g(1) = 0$. They are not equal! (This is because $g$ is discontinuous at 1)." },
            { stepText: "(b) As $x \\to 1$, $g(x) = 2$ for all $x \\neq 1$. So $\\lim_{x\\to 1} g(x) = 2$." },
            { stepText: "Since $g(x)$ is constantly 2 near 1, $f(g(x)) = f(2) = 3$. Thus $\\lim_{x\\to 1} f(g(x)) = 3$." },
            { stepText: "And $f(\\lim_{x\\to 1} g(x)) = f(2) = 3$. Here they ARE equal." }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex14", title: "Exercise 14: Limits of Absolute Values", description: "Proof of Theorem on Absolute values", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Let $A \\subseteq \\mathbb{R}$, $f: A \\to \\mathbb{R}$, and $c$ be a cluster point. \nIf $\\lim f = L$ exists, prove that $\\lim |f| = |\\lim f| = |L|$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Reverse Triangle Inequality.**", interactiveSteps: [
            { stepText: "We are given that for any $\\epsilon > 0$, there exists $\\delta > 0$ such that $0 < |x-c| < \\delta \\implies |f(x) - L| < \\epsilon$." },
            { prompt: "By the Reverse Triangle Inequality, what is an upper bound for $||f(x)| - |L||$?", options: [{ id: "A", text: "$|f(x) - L|$", isCorrect: true, explanation: "This is exactly Corollary 2.2.4(a)." }, { id: "B", text: "$|f(x)| + |L|$", isCorrect: false, explanation: "That's the standard triangle inequality, which is a loose bound." }], stepText: "We have $||f(x)| - |L|| \\le |f(x) - L|$." },
            { stepText: "Since $|f(x) - L| < \\epsilon$ for our $\\delta$-neighborhood, it strictly follows that $||f(x)| - |L|| < \\epsilon$." },
            { stepText: "This satisfies the exact definition for $\\lim_{x\\to c} |f(x)| = |L|$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-2-ex15", title: "Exercise 15: Limits of Square Roots", description: "Proof of Theorem on Roots", icon: "Root",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Let $f(x) \\ge 0$ for all $x \\in A$. If $\\lim f = L$ exists, prove that $\\lim \\sqrt{f} = \\sqrt{L}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the conjugate for positive limits.**", interactiveSteps: [
            { stepText: "Since $f(x) \\ge 0$, by Theorem 4.2.6 (Order Preservation), $L \\ge 0$." },
            { stepText: "Case 1: $L = 0$. For any $\\epsilon > 0$, we want $\\sqrt{f(x)} < \\epsilon$. This is equivalent to $f(x) < \\epsilon^2$." },
            { stepText: "Since $\\lim f = 0$, we can choose $\\delta$ such that $|f(x)| < \\epsilon^2$. This solves the $L=0$ case." },
            { prompt: "Case 2: $L > 0$. We want to bound $|\\sqrt{f(x)} - \\sqrt{L}|$. Multiply by the conjugate over itself. What do you get?", options: [{ id: "A", text: "$\\frac{|f(x) - L|}{\\sqrt{f(x)} + \\sqrt{L}}$", isCorrect: true, explanation: "Standard difference of squares." }, { id: "B", text: "$\\sqrt{f(x) - L}$", isCorrect: false, explanation: "Roots do not distribute over subtraction." }], stepText: "We get $\\frac{|f(x) - L|}{\\sqrt{f(x)} + \\sqrt{L}}$." },
            { stepText: "Since $\\sqrt{f(x)} \\ge 0$, the denominator is $\\ge \\sqrt{L}$. Thus the fraction is $\\le \\frac{|f(x) - L|}{\\sqrt{L}}$." },
            { stepText: "To make the error $< \\epsilon$, we force $|f(x) - L| < \\epsilon\\sqrt{L}$ by choosing the appropriate $\\delta$. Goal reached!" }
        ]}
      ]
    }
  ]
};