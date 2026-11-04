import { Unit } from '../types';

export const UNIT_2_1_3: Unit = {
  id: "unit-2-1-3",
  title: "Algebraic Exercises",
  description: "Exercises 1-13: Basic Field Property Proofs",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-3-ex1", title: "Exercise 1: Basic Addition/Multiplication", description: "Proving simple identities from axioms", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "If $a, b \\in \\mathbb{R}$, prove the following:\n(a) If $a + b = 0$, then $b = -a$\n(b) $-(-a) = a$\n(c) $(-1)a = -a$\n(d) $(-1)(-1) = 1$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove if $a + b = 0$, then $b = -a$.**", interactiveSteps: [
            { stepText: "We start with the given equation: $a + b = 0$." },
            { prompt: "To isolate $b$, what should we add to both sides?", options: [{ id: "A", text: "$-a$", isCorrect: true, explanation: "Adding the additive inverse of a will cancel it." }, { id: "B", text: "$a$", isCorrect: false, explanation: "That would give 2a + b." }], stepText: "Add $-a$ to both sides: $(-a) + (a + b) = (-a) + 0$." },
            { stepText: "Using associativity (A2), we group the left side: $((-a) + a) + b = -a$." },
            { stepText: "Since $(-a) + a = 0$ (A4), we have $0 + b = -a$, which simplifies to $b = -a$. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (c)", content: "**Goal: Prove $(-1)a = -a$.**", interactiveSteps: [
            { stepText: "We need to show that $(-1)a$ acts as the additive inverse of $a$. So we must show $a + (-1)a = 0$." },
            { prompt: "How can we rewrite $a$ to factor it?", options: [{ id: "A", text: "$1 \\cdot a$", isCorrect: true, explanation: "1 is the multiplicative identity." }, { id: "B", text: "$0 + a$", isCorrect: false, explanation: "We want to factor out 'a', so multiplication is needed." }], stepText: "Write $a + (-1)a$ as $1 \\cdot a + (-1)a$." },
            { stepText: "By the distributive property (D), this is $(1 + (-1))a$." },
            { stepText: "Since $1 + (-1) = 0$, we have $0 \\cdot a = 0$. By Theorem 2.1.2(a), this means $(-1)a$ is indeed the unique additive inverse $-a$." }
        ]},
        { id: "s3", type: "quiz", title: "Concept Check", content: "To prove $-(-a) = a$, what equation must we establish?", options: [{ id: "A", text: "$-a + a = 0$", isCorrect: true, explanation: "Since -a + a = 0, 'a' acts as the additive inverse of '-a'." }, { id: "B", text: "$-a - (-a) = 0$", isCorrect: false, explanation: "While true, the definition of the inverse of x is the number y such that x+y=0." }] }
      ]
    },
    {
      id: "les-2-1-3-ex2", title: "Exercise 2: Properties of Negatives", description: "Distributing signs and inverses", icon: "MinusSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Prove that if $a, b \\in \\mathbb{R}$, then:\n(a) $-(a + b) = (-a) + (-b)$\n(b) $(-a)(-b) = a \\cdot b$\n(c) $1/(-a) = -(1/a)$ if $a \\neq 0$\n(d) $-(a/b) = (-a)/b$ if $b \\neq 0$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove $-(a + b) = (-a) + (-b)$.**", interactiveSteps: [
            { stepText: "We must show that adding $((-a) + (-b))$ to $(a + b)$ yields $0$." },
            { stepText: "Consider $(a + b) + ((-a) + (-b))$." },
            { prompt: "Using commutativity and associativity, how can we regroup this?", options: [{ id: "A", text: "$(a + (-a)) + (b + (-b))$", isCorrect: true, explanation: "We group each element with its inverse." }, { id: "B", text: "$(a + (-b)) + (b + (-a))$", isCorrect: false, explanation: "This doesn't simplify to 0 easily." }], stepText: "Regrouping gives $(a + (-a)) + (b + (-b))$." },
            { stepText: "This simplifies to $0 + 0 = 0$. Since inverses are unique, $-(a+b)$ must be exactly $(-a) + (-b)$. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Prove $(-a)(-b) = a \\cdot b$.**", interactiveSteps: [
            { stepText: "From Ex 1(c), we know $-x = (-1)x$. So $(-a)(-b) = ((-1)a)((-1)b)$." },
            { prompt: "Using associativity and commutativity of multiplication, what does this rearrange to?", options: [{ id: "A", text: "$((-1)(-1))(ab)$", isCorrect: true, explanation: "Group the -1s together." }, { id: "B", text: "$(-1)(a(-1)b)$", isCorrect: false, explanation: "We can simplify further." }], stepText: "It rearranges to $((-1)(-1))(ab)$." },
            { stepText: "From Ex 1(d), we know $(-1)(-1) = 1$. Thus, $1 \\cdot (ab) = ab$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex3", title: "Exercise 3: Solving Equations", description: "Applying axioms to find solutions", icon: "FunctionSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Solve the following equations, justifying each step by referring to an appropriate property or theorem.\n(a) $2x + 5 = 8$\n(b) $x^2 = 2x$\n(c) $x^2 - 1 = 3$\n(d) $(x - 1)(x + 2) = 0$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Solve $2x + 5 = 8$.**", interactiveSteps: [
            { stepText: "Add $-5$ to both sides: $(2x + 5) + (-5) = 8 + (-5)$." },
            { stepText: "By associativity (A2) and inverse (A4), the left side is $2x + 0 = 2x$. The right side is $3$." },
            { prompt: "What is the next step to isolate $x$?", options: [{ id: "A", text: "Multiply both sides by $1/2$", isCorrect: true, explanation: "Use the multiplicative inverse (M4)." }, { id: "B", text: "Subtract 2 from both sides", isCorrect: false, explanation: "This is multiplication, not addition." }], stepText: "Multiply by $1/2$: $(1/2)(2x) = (1/2)(3)$." },
            { stepText: "By (M2) and (M4), $1 \\cdot x = 3/2$, so $x = 3/2$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Solve $x^2 = 2x$.**", interactiveSteps: [
            { stepText: "Add $-2x$ to both sides: $x^2 - 2x = 0$." },
            { prompt: "How can we factor the left side?", options: [{ id: "A", text: "$x(x - 2)$", isCorrect: true, explanation: "Using the distributive property (D) in reverse." }, { id: "B", text: "$(x - 1)^2 - 1$", isCorrect: false, explanation: "While true (completing the square), factoring is more direct here." }], stepText: "Factor using (D): $x(x - 2) = 0$." },
            { stepText: "By the Zero Product Property (Theorem 2.1.3b), either $x = 0$ or $x - 2 = 0$." },
            { stepText: "If $x - 2 = 0$, adding 2 to both sides gives $x = 2$. Thus $x = 0$ or $x = 2$." }
        ]},
        { id: "s3", type: "numerical", title: "Numerical Check", content: "What is the positive solution to $x^2 - 1 = 3$?", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-1-3-ex4", title: "Exercise 4: Idempotent Elements", description: "Solving a * a = a", icon: "Square",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "If $a \\in \\mathbb{R}$ satisfies $a \\cdot a = a$, prove that either $a = 0$ or $a = 1$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the Zero Product Property.**", interactiveSteps: [
            { stepText: "We are given $a^2 = a$. Let's subtract $a$ from both sides to get $a^2 - a = 0$." },
            { prompt: "How can we factor the left side $a^2 - a$?", options: [{ id: "A", text: "$a(a - 1)$", isCorrect: true, explanation: "By the distributive property, a*a - a*1 = a(a-1)." }, { id: "B", text: "$a(a - a)$", isCorrect: false, explanation: "That would be a(0) = 0." }], stepText: "By the distributive property, we can write this as $a(a - 1) = 0$." },
            { stepText: "We now have a product of two numbers equal to zero. By Theorem 2.1.3(b) (Zero Product Property), what does this imply?" },
            { stepText: "It implies that either $a = 0$ or $a - 1 = 0$." },
            { stepText: "If $a - 1 = 0$, we add 1 to both sides to get $a = 1$. Thus, either $a = 0$ or $a = 1$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex5", title: "Exercise 5: Inverse of a Product", description: "Proving 1/(ab) = (1/a)(1/b)", icon: "Divide",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "If $a \\neq 0$ and $b \\neq 0$, show that $1/(ab) = (1/a)(1/b)$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show that $(1/a)(1/b)$ acts as the multiplicative inverse of $(ab)$.**", interactiveSteps: [
            { stepText: "To prove that $x$ is the inverse of $y$, we must show that $x \\cdot y = 1$. Let's multiply $(ab)$ by $(1/a)(1/b)$." },
            { stepText: "Consider the expression $(ab) \\cdot ((1/a)(1/b))$." },
            { prompt: "Using commutativity and associativity, how can we regroup this?", options: [{ id: "A", text: "$(a \\cdot (1/a)) \\cdot (b \\cdot (1/b))$", isCorrect: true, explanation: "Group the variables with their respective inverses." }, { id: "B", text: "$(ab \\cdot (1/a)) \\cdot (1/b)$", isCorrect: false, explanation: "While true, the other option simplifies instantly." }], stepText: "We can rearrange this to $(a \\cdot (1/a)) \\cdot (b \\cdot (1/b))$." },
            { stepText: "Since $a \\neq 0$, $a \\cdot (1/a) = 1$. Similarly, $b \\cdot (1/b) = 1$." },
            { stepText: "The expression becomes $1 \\cdot 1 = 1$. Because inverses are unique (Theorem 2.1.3a), $(1/a)(1/b)$ must be exactly $1/(ab)$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Application", content: "If $a=2$ and $b=5$, what is $1/(ab)$ expressed as a decimal?", numericAnswer: 0.1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-1-3-ex6", title: "Exercise 6: Irrationality of √6", description: "Extending the proof of √2", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Use the argument in the proof of Theorem 2.1.4 to show that there does not exist a rational number $s$ such that $s^2 = 6$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove by contradiction.**", interactiveSteps: [
            { stepText: "Assume $s = p/q$ where $p, q$ are positive integers with no common factors (other than 1)." },
            { stepText: "Then $(p/q)^2 = 6$, which implies $p^2 = 6q^2$. We can write this as $p^2 = 2(3q^2)$." },
            { prompt: "Since $p^2$ is a multiple of 2, what can we say about $p$?", options: [{ id: "A", text: "$p$ is even", isCorrect: true, explanation: "If p^2 is even, p must be even." }, { id: "B", text: "$p$ is a multiple of 6", isCorrect: false, explanation: "We only know it's a multiple of 2 right now." }], stepText: "Thus $p$ is even, so we can write $p = 2m$ for some integer $m$." },
            { stepText: "Substitute $p = 2m$ back: $(2m)^2 = 6q^2$, so $4m^2 = 6q^2$, which simplifies to $2m^2 = 3q^2$." },
            { stepText: "Since $2m^2$ is even, $3q^2$ must be even. Since 3 is odd, $q^2$ must be even, so $q$ is even." },
            { stepText: "Both $p$ and $q$ are even, meaning they share a common factor of 2. This contradicts our initial assumption. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex7", title: "Exercise 7: Irrationality of √3", description: "Adapting the parity argument", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Modify the proof of Theorem 2.1.4 to show that there does not exist a rational number $t$ such that $t^2 = 3$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove by contradiction using multiples of 3.**", interactiveSteps: [
            { stepText: "Assume $t = p/q$ where $p, q$ are integers with no common factors. Then $p^2 = 3q^2$." },
            { prompt: "Since $p^2$ is a multiple of 3, what must be true about $p$?", options: [{ id: "A", text: "$p$ is a multiple of 3", isCorrect: true, explanation: "If p was not a multiple of 3, its square would not be either (e.g., (3k+1)^2 = 9k^2+6k+1, not div by 3)." }, { id: "B", text: "$p$ is odd", isCorrect: false, explanation: "Being a multiple of 3 is the key property here." }], stepText: "Thus $p = 3m$ for some integer $m$." },
            { stepText: "Substitute $p = 3m$: $(3m)^2 = 3q^2$, so $9m^2 = 3q^2$, which divides to $3m^2 = q^2$." },
            { stepText: "By the exact same logic, since $q^2$ is a multiple of 3, $q$ must be a multiple of 3." },
            { stepText: "Both $p$ and $q$ are multiples of 3, sharing a common factor. This contradicts our lowest-terms assumption. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex8", title: "Exercise 8: Mixed Operations", description: "Sums and products of rationals and irrationals", icon: "Shuffle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "(a) Show that if $x, y$ are rational numbers, then $x + y$ and $xy$ are rational numbers.\n(b) Prove that if $x$ is a rational number and $y$ is an irrational number, then $x + y$ is an irrational number. If, in addition, $x \\neq 0$, then show that $xy$ is an irrational number." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (b) Addition", content: "**Goal: Prove rational + irrational = irrational.**", interactiveSteps: [
            { stepText: "Let $x \\in \\mathbb{Q}$ and $y \\notin \\mathbb{Q}$. Assume for contradiction that $x + y = z$ where $z \\in \\mathbb{Q}$." },
            { prompt: "How can we express $y$ in terms of $z$ and $x$?", options: [{ id: "A", text: "$y = z - x$", isCorrect: true, explanation: "Standard algebra." }, { id: "B", text: "$y = z/x$", isCorrect: false, explanation: "We added x, we didn't multiply." }], stepText: "We can write $y = z - x$." },
            { stepText: "Since $z$ is rational and $x$ is rational, their difference $z - x$ must be rational (by part a)." },
            { stepText: "This implies $y$ is rational, which contradicts our premise that $y$ is irrational! Thus $x+y$ must be irrational. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b) Multiplication", content: "**Goal: Prove rational * irrational = irrational (if rational $\\neq 0$).**", interactiveSteps: [
            { stepText: "Assume $x \\in \\mathbb{Q}$ ($x \\neq 0$) and $y \\notin \\mathbb{Q}$. Assume for contradiction that $xy = w$ where $w \\in \\mathbb{Q}$." },
            { stepText: "Since $x \\neq 0$, we can divide by $x$. Thus $y = w / x$." },
            { stepText: "Since $w$ and $x$ are rational, their quotient is rational (the ratio of two fractions is a fraction). Thus $y \\in \\mathbb{Q}$." },
            { stepText: "This contradicts $y \\notin \\mathbb{Q}$. Thus $xy$ must be irrational. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex9", title: "Exercise 9: A Subfield of R", description: "Exploring the set K", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Let $K := \\{s + t\\sqrt{2} : s, t \\in \\mathbb{Q}\\}$. Show that $K$ satisfies the following:\n(a) If $x_1, x_2 \\in K$, then $x_1 + x_2 \\in K$ and $x_1x_2 \\in K$.\n(b) If $x \\neq 0$ and $x \\in K$, then $1/x \\in K$.\n\n*(Thus the set K is a subfield of $\\mathbb{R}$).* " },
        { id: "s1", type: "solution", title: "Interactive Solution: Closure under Operations", content: "**Goal: Show addition and multiplication stay inside K.**", interactiveSteps: [
            { stepText: "Let $x_1 = s_1 + t_1\\sqrt{2}$ and $x_2 = s_2 + t_2\\sqrt{2}$." },
            { stepText: "Addition: $x_1 + x_2 = (s_1 + s_2) + (t_1 + t_2)\\sqrt{2}$. Since sums of rationals are rational, this is in $K$." },
            { prompt: "Multiplication: Expand $(s_1 + t_1\\sqrt{2})(s_2 + t_2\\sqrt{2})$. What is the rational (non-root) part?", options: [{ id: "A", text: "$s_1s_2 + 2t_1t_2$", isCorrect: true, explanation: "sqrt(2)*sqrt(2) = 2, so the last term contributes 2t1t2." }, { id: "B", text: "$s_1s_2 + t_1t_2$", isCorrect: false, explanation: "You forgot to square the sqrt(2)." }], stepText: "The product is $(s_1s_2 + 2t_1t_2) + (s_1t_2 + s_2t_1)\\sqrt{2}$." },
            { stepText: "Both the coefficient of 1 and $\\sqrt{2}$ are constructed by adding and multiplying rationals, so they are rational. Thus $x_1x_2 \\in K$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Inverses", content: "**Goal: Show $1/x \\in K$.**", interactiveSteps: [
            { stepText: "Let $x = s + t\\sqrt{2} \\neq 0$. Then $1/x = \\frac{1}{s + t\\sqrt{2}}$." },
            { prompt: "To rationalize the denominator, what should we multiply top and bottom by?", options: [{ id: "A", text: "$s - t\\sqrt{2}$", isCorrect: true, explanation: "This is the conjugate, which will eliminate the square root in the denominator." }, { id: "B", text: "$s + t\\sqrt{2}$", isCorrect: false, explanation: "This would just square the denominator." }], stepText: "Multiply by $\\frac{s - t\\sqrt{2}}{s - t\\sqrt{2}}$." },
            { stepText: "This gives $\\frac{s - t\\sqrt{2}}{s^2 - 2t^2}$." },
            { stepText: "Separating the terms, we get $\\frac{s}{s^2 - 2t^2} + \\frac{-t}{s^2 - 2t^2}\\sqrt{2}$." },
            { stepText: "Since $s^2 - 2t^2 \\neq 0$ (otherwise $\\sqrt{2}$ would be rational), these coefficients are rational numbers. Thus $1/x \\in K$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex10", title: "Exercise 10: Combining Inequalities", description: "Adding and multiplying inequalities", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "(a) If $a < b$ and $c \\le d$, prove that $a + c < b + d$.\n(b) If $0 < a < b$ and $0 \\le c \\le d$, prove that $0 \\le ac \\le bd$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove $a + c < b + d$.**", interactiveSteps: [
            { stepText: "We are given $a < b$, which means $b - a \\in \\mathbb{P}$. We are also given $c \\le d$, meaning $d - c \\in \\mathbb{P} \\cup \\{0\\}$." },
            { prompt: "If we add a strictly positive number and a non-negative number, what is the result?", options: [{ id: "A", text: "Strictly positive ($\\in \\mathbb{P}$)", isCorrect: true, explanation: "Adding at least 0 to a positive number keeps it positive." }, { id: "B", text: "Could be zero", isCorrect: false, explanation: "Since the first number is >0, the sum must be >0." }], stepText: "The sum $(b - a) + (d - c)$ must be in $\\mathbb{P}$." },
            { stepText: "Rearranging this expression gives $(b + d) - (a + c) \\in \\mathbb{P}$." },
            { stepText: "By definition of inequality, this means $a + c < b + d$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex11", title: "Exercise 11: Inverses and Midpoints", description: "Positivity of inverses and the average", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "(a) Show that if $a > 0$, then $1/a > 0$ and $1/(1/a) = a$.\n(b) Show that if $a < b$, then $a < \\frac{1}{2}(a + b) < b$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove $1/a > 0$.**", interactiveSteps: [
            { stepText: "Suppose for contradiction that $1/a < 0$ (it cannot be 0 because $a \\cdot 0 = 0 \\neq 1$)." },
            { stepText: "If $a > 0$ and $1/a < 0$, then by the product rule for inequalities, their product $a(1/a)$ must be less than 0." },
            { prompt: "But what is $a(1/a)$ equal to?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "By the definition of the multiplicative inverse." }, { id: "B", text: "-1", isCorrect: false, explanation: "That's incorrect." }], stepText: "The product is 1." },
            { stepText: "This implies $1 < 0$, which is a contradiction. Thus $1/a > 0$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Prove the midpoint is strictly between $a$ and $b$.**", interactiveSteps: [
            { stepText: "We are given $a < b$. By the addition rule for inequalities, add $a$ to both sides: $a + a < a + b$, so $2a < a + b$." },
            { stepText: "Since $2 > 0$, its inverse $1/2 > 0$. Multiply by $1/2$: $a < \\frac{1}{2}(a + b)$." },
            { prompt: "To get the other half, what should we add to both sides of $a < b$?", options: [{ id: "A", text: "$b$", isCorrect: true, explanation: "This will create a+b on the left and 2b on the right." }, { id: "B", text: "$a$", isCorrect: false, explanation: "We just did that!" }], stepText: "Add $b$ to both sides: $a + b < b + b$, so $a + b < 2b$." },
            { stepText: "Multiply by $1/2$ to get $\\frac{1}{2}(a + b) < b$." },
            { stepText: "Combine the two results: $a < \\frac{1}{2}(a + b) < b$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex12", title: "Exercise 12: Multiplying Inequalities with Negatives", description: "Why signs matter when multiplying", icon: "Scale",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Let $a, b, c, d$ be numbers satisfying $0 < a < b$ and $c < d < 0$.\n\nGive an example where $ac < bd$, and one where $bd < ac$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find concrete numbers to demonstrate both cases.**", interactiveSteps: [
            { stepText: "Let $a = 1, b = 2$ (so $0 < a < b$). We need $c < d < 0$, so let's pick negative numbers." },
            { prompt: "To get $ac < bd$, which choice works?", options: [{ id: "A", text: "$c = -4, d = -1$", isCorrect: true, explanation: "ac = -4, bd = -2. -4 < -2." }, { id: "B", text: "$c = -2, d = -1$", isCorrect: false, explanation: "ac = -2, bd = -2. They are equal." }], stepText: "Example 1: $a=1, b=2, c=-4, d=-1$. Then $ac = -4$ and $bd = -2$. Indeed, $-4 < -2$." },
            { prompt: "Now, to get $bd < ac$, we want $bd$ to be very negative. Which choice works?", options: [{ id: "A", text: "$c = -3, d = -2$", isCorrect: true, explanation: "ac = -3, bd = -4. -4 < -3." }, { id: "B", text: "$c = -10, d = -1$", isCorrect: false, explanation: "ac = -10, bd = -2. -10 < -2." }], stepText: "Example 2: $a=1, b=2, c=-3, d=-2$. Then $ac = -3$ and $bd = -4$. Here, $-4 < -3$, so $bd < ac$." },
            { stepText: "This shows you cannot blindly multiply inequalities if some values are negative!" }
        ]}
      ]
    },
    {
      id: "les-2-1-3-ex13", title: "Exercise 13: Sum of Squares Zero", description: "If a sum of non-negatives is zero", icon: "PlusCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "If $a, b \\in \\mathbb{R}$, show that $a^2 + b^2 = 0$ if and only if $a = 0$ and $b = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume $a^2 + b^2 = 0$, prove $a = 0$ and $b = 0$.**", interactiveSteps: [
            { stepText: "We know from Theorem 2.1.8 that squares are non-negative: $a^2 \\ge 0$ and $b^2 \\ge 0$." },
            { prompt: "Suppose $a \\neq 0$. What must be true about $a^2$?", options: [{ id: "A", text: "$a^2 > 0$", isCorrect: true, explanation: "The square of a non-zero number is strictly positive." }, { id: "B", text: "$a^2 \\le 0$", isCorrect: false, explanation: "Squares cannot be negative." }], stepText: "If $a \\neq 0$, then $a^2 > 0$." },
            { stepText: "If $a^2 > 0$, then since $b^2 \\ge 0$, their sum $a^2 + b^2 > 0 + 0 = 0$." },
            { stepText: "But we assumed $a^2 + b^2 = 0$. This is a contradiction. Therefore $a$ must be $0$." },
            { stepText: "By the same logic, $b$ must be $0$. Goal reached!" }
        ]},
        { id: "s2", type: "theory", title: "Backward Direction", content: "The reverse direction is trivial: If $a = 0$ and $b = 0$, then $0^2 + 0^2 = 0 + 0 = 0$. \n\nThis simple property is heavily used in algebra to locate unique intersection points or solutions." }
      ]
    }
  ]
};