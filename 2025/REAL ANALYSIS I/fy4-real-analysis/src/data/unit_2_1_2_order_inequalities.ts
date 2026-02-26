import { Unit } from '../types';

export const UNIT_2_1_2: Unit = {
  id: "unit-2-1-2",
  title: "Order & Inequalities",
  description: "Positivity and rules of inequalities",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-2-1", title: "Definition 2.1.5: Order Properties", description: "The set of positive real numbers", icon: "ArrowUpRight",
      slides: [
        { id: "s0", type: "theory", title: "The Order Properties of $\\mathbb{R}$", content: "**Definition 2.1.5:** There is a nonempty subset $\\mathbb{P}$ of $\\mathbb{R}$, called the set of **positive real numbers**, that satisfies the following properties:\n\n(i) If $a, b \\in \\mathbb{P}$, then $a + b \\in \\mathbb{P}$ (closure under addition).\n(ii) If $a, b \\in \\mathbb{P}$, then $a \\cdot b \\in \\mathbb{P}$ (closure under multiplication).\n(iii) **Trichotomy Property:** If $a \\in \\mathbb{R}$, then exactly ONE of the following holds:\n$$a \\in \\mathbb{P}, \\quad a = 0, \\quad -a \\in \\mathbb{P}$$" },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 1", content: "If you add two positive numbers together, what type of number do you definitively get?", options: [{ id: "A", text: "A positive number", isCorrect: true, explanation: "Positive numbers are closed under addition (Axiom i)." }, { id: "B", text: "A negative number", isCorrect: false, explanation: "Two positives cannot make a negative." }] },
        { id: "s2", type: "quiz", title: "Conceptual Warm-up 2", content: "Can a real number be both strictly positive and strictly negative at the same time?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "This relies on the Trichotomy Property, which states EXACTLY ONE condition holds." }, { id: "B", text: "Yes", isCorrect: false, explanation: "A number can only have one sign." }] },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "The property dividing all real numbers strictly into positive, zero, and negative categories is called the ___ Property.", blankAnswer: "Trichotomy" }
      ]
    },
    {
      id: "les-2-1-2-2", title: "Definition 2.1.6: Inequality", description: "Formalizing greater than and less than", icon: "ArrowRightLeft",
      slides: [
        { id: "s0", type: "theory", title: "Defining Inequality", content: "**Definition 2.1.6:** Let $a, b$ be elements of $\\mathbb{R}$.\n\n(a) If $a - b \\in \\mathbb{P}$, then we write $a > b$ or $b < a$.\n(b) If $a - b \\in \\mathbb{P} \\cup \\{0\\}$, then we write $a \\ge b$ or $b \\le a$.\n\nThe Trichotomy Property ensures that for any $a, b \\in \\mathbb{R}$, exactly one of the following holds: $a > b$, $a = b$, or $a < b$." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 1", content: "If we say $x > y$, what does that physically mean in terms of their difference?", options: [{ id: "A", text: "x - y is a positive number", isCorrect: true, explanation: "This is the formal definition of inequality." }, { id: "B", text: "y - x is a positive number", isCorrect: false, explanation: "That would mean y > x." }] },
        { id: "s2", type: "quiz", title: "Conceptual Warm-up 2", content: "What does $a \\ge b$ imply about $a - b$?", options: [{ id: "A", text: "It is either positive or zero.", isCorrect: true, explanation: "It belongs to $\\mathbb{P} \\cup \\{0\\}$." }, { id: "B", text: "It is strictly positive.", isCorrect: false, explanation: "That would be a > b." }] },
        { id: "s3", type: "numerical", title: "Evaluating Difference", content: "If $a - b = 5$, what is the strictly smaller number? (Type 1 for 'a', 0 for 'b')", numericAnswer: 0, numericTolerance: 0 },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "If $b < a$, then the difference $a - b$ must be a ___ real number.", blankAnswer: "positive" }
      ]
    },
    {
      id: "les-2-1-2-3", title: "Theorem 2.1.7: Rules of Inequalities", description: "Transitivity and operations on inequalities", icon: "Scale",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 2.1.7", content: "Let $a, b, c$ be any elements of $\\mathbb{R}$.\n\n(a) **Transitivity:** If $a > b$ and $b > c$, then $a > c$.\n(b) **Addition:** If $a > b$, then $a + c > b + c$.\n(c) **Multiplication:** \n$\\quad$ If $a > b$ and $c > 0$, then $ca > cb$.\n$\\quad$ If $a > b$ and $c < 0$, then $ca < cb$." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 1", content: "If $a > b$, what happens when you multiply both sides by a strictly negative number $c$?", options: [{ id: "A", text: "The inequality sign flips: ca < cb", isCorrect: true, explanation: "Multiplying by a negative reverses the inequality." }, { id: "B", text: "It stays the same: ca > cb", isCorrect: false, explanation: "That is only true if c is positive." }] },
        { id: "s2", type: "quiz", title: "Conceptual Warm-up 2", content: "Does adding the same negative number to both sides of an inequality flip the sign?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Addition (positive or negative) never flips the inequality." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Only multiplication/division by negatives flips the sign." }] },
        { id: "s3", type: "proof", title: "Interactive Proof: Multiplication by Negative", content: "**Goal: Prove if $a > b$ and $c < 0$, then $ca < cb$.**", interactiveSteps: [
            { stepText: "We are given $a > b$, meaning $(a - b) \\in \\mathbb{P}$. We are also given $c < 0$, which means $-c \\in \\mathbb{P}$." },
            { prompt: "What happens when we multiply the two positive elements $-c$ and $(a-b)$?", options: [{ id: "A", text: "$(-c)(a - b) \\in \\mathbb{P}$", isCorrect: true, explanation: "By the closure of P under multiplication (Axiom 2.1.5(ii))." }, { id: "B", text: "$(-c)(a - b) \\notin \\mathbb{P}$", isCorrect: false, explanation: "Multiplying two positives yields a positive." }], stepText: "By closure under multiplication, $(-c)(a - b) \\in \\mathbb{P}$." },
            { stepText: "Distributing the $-c$ yields $-ca + cb$, which is algebraically the same as $cb - ca$." },
            { stepText: "Therefore $cb - ca \\in \\mathbb{P}$. By the definition of inequality, this means $cb > ca$, or $ca < cb$. Goal reached!" }
        ]},
        { id: "s4", type: "numerical", title: "Evaluate", content: "If $x > 5$ and we multiply both sides by $-2$, we get $-2x < y$. What is $y$?", numericAnswer: -10, numericTolerance: 0 },
        { id: "s5", type: "fill_in_blank", title: "Concept Check", content: "The property stating that if $a > b$ and $b > c$ then $a > c$ is called ___.", blankAnswer: "transitivity" }
      ]
    },
    {
      id: "les-2-1-2-4", title: "Theorem 2.1.8: Positivity of Squares", description: "Why squares are always non-negative", icon: "Square",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 2.1.8", content: "**Theorem 2.1.8:**\n(a) If $a \\in \\mathbb{R}$ and $a \\neq 0$, then $a^2 > 0$.\n(b) $1 > 0$.\n(c) If $n \\in \\mathbb{N}$, then $n > 0$.\n\nA remarkable consequence of this is that no smallest positive real number can exist. If $a > 0$, then $0 < \\frac{1}{2}a < a$." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 1", content: "Can the square of any real number ever be strictly negative?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Squares of real numbers are always >= 0." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Only in complex numbers (imaginary numbers)." }] },
        { id: "s2", type: "quiz", title: "Conceptual Warm-up 2", content: "Is the number 1 a positive real number?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Since 1 = 1^2, and squares of non-zero numbers are positive, 1 > 0." }, { id: "B", text: "No", isCorrect: false, explanation: "1 is definitely positive." }] },
        { id: "s3", type: "proof", title: "Interactive Proof: Positivity of Squares", content: "**Goal: Prove if $a \\neq 0$, then $a^2 > 0$.**", interactiveSteps: [
            { stepText: "By the Trichotomy Property, since $a \\neq 0$, exactly one of these is true: either $a \\in \\mathbb{P}$ or $-a \\in \\mathbb{P}$." },
            { prompt: "Case 1: If $a \\in \\mathbb{P}$, what does closure under multiplication tell us about $a \\cdot a$?", options: [{ id: "A", text: "$a \\cdot a \\in \\mathbb{P}$", isCorrect: true, explanation: "Positive times positive is positive." }, { id: "B", text: "$a \\cdot a = 0$", isCorrect: false, explanation: "a is not zero." }], stepText: "So $a^2 \\in \\mathbb{P}$, which means $a^2 > 0$." },
            { stepText: "Case 2: If $-a \\in \\mathbb{P}$, then by closure under multiplication, $(-a)(-a) \\in \\mathbb{P}$." },
            { stepText: "Since $(-a)(-a) = a^2$, we again conclude $a^2 \\in \\mathbb{P}$, so $a^2 > 0$." },
            { stepText: "In both possible cases, $a^2 > 0$. Goal reached!" }
        ]},
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "For any real number $x$, the value of $x^2$ must be ___.", blankAnswer: "non-negative" }
      ]
    },
    {
      id: "les-2-1-2-5", title: "Theorem 2.1.9: Bounded by Epsilon", description: "A powerful proof technique", icon: "Minimize2",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 2.1.9", content: "**Theorem 2.1.9:** If $a \\in \\mathbb{R}$ is such that $0 \\le a < \\epsilon$ for every $\\epsilon > 0$, then $a = 0$.\n\nThis theorem is frequently used as a method of proof. To prove that a number $a \\ge 0$ is actually equal to zero, we simply show that $a$ is smaller than an arbitrarily small positive number $\\epsilon$." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up", content: "If a non-negative number $a$ is smaller than every single positive number you can possibly think of, what must $a$ be?", options: [{ id: "A", text: "0", isCorrect: true, explanation: "0 is the only non-negative number smaller than all positive numbers." }, { id: "B", text: "A tiny decimal", isCorrect: false, explanation: "Even a tiny decimal is greater than an even tinier decimal." }] },
        { id: "s2", type: "proof", title: "Interactive Proof: Bounded by Epsilon", content: "**Goal: Prove if $0 \\le a < \\epsilon$ for every $\\epsilon > 0$, then $a = 0$.**", interactiveSteps: [
            { stepText: "We will use a proof by contradiction. Assume the conclusion is false, meaning $a > 0$." },
            { prompt: "If $a > 0$, we can choose a specific positive $\\epsilon_0$. Which choice will cause a contradiction with $a < \\epsilon$?", options: [{ id: "A", text: "$\\epsilon_0 = a/2$", isCorrect: true, explanation: "If we pick a/2, then a > a/2, contradicting a < epsilon." }, { id: "B", text: "$\\epsilon_0 = a + 1$", isCorrect: false, explanation: "a < a + 1 does not cause a contradiction." }], stepText: "Let's pick $\\epsilon_0 = \\frac{1}{2}a$. Since $a > 0$, we know $\\epsilon_0 > 0$." },
            { stepText: "By our choice, $0 < \\epsilon_0 < a$. But the theorem hypothesis stated that $a < \\epsilon$ for EVERY $\\epsilon > 0$." },
            { stepText: "We have found an $\\epsilon_0$ where it is false that $a < \\epsilon_0$. This contradiction means our assumption $a > 0$ must be false. Since $a \\ge 0$, we must have $a = 0$. Goal reached!" }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "If $0 \\le x < \\epsilon$ for every strictly positive $\\epsilon$, then $x$ must exactly equal ___.", blankAnswer: "0" }
      ]
    },
    {
      id: "les-2-1-2-6", title: "Theorem 2.1.10: Product Rule for Inequalities", description: "Deducing signs from products", icon: "Divide",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 2.1.10", content: "**Theorem 2.1.10:** If $ab > 0$, then either:\n(i) $a > 0$ and $b > 0$, or\n(ii) $a < 0$ and $b < 0$.\n\n**Corollary 2.1.11:** If $ab < 0$, then either:\n(i) $a < 0$ and $b > 0$, or\n(ii) $a > 0$ and $b < 0$." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up", content: "If the product of two numbers is strictly positive, what do we know about their signs?", options: [{ id: "A", text: "They have the same sign", isCorrect: true, explanation: "Either both positive or both negative." }, { id: "B", text: "One is positive, one is negative", isCorrect: false, explanation: "That would make the product negative." }] },
        { id: "s2", type: "proof", title: "Interactive Proof: Product Rule", content: "**Goal: Prove if $ab > 0$, then either both are positive or both are negative.**", interactiveSteps: [
            { stepText: "First note that $ab > 0$ implies $a \\neq 0$ and $b \\neq 0$. By Trichotomy, either $a > 0$ or $a < 0$." },
            { prompt: "Case 1: Suppose $a > 0$. What can we multiply the inequality $ab > 0$ by to isolate $b$?", options: [{ id: "A", text: "$1/a$", isCorrect: true, explanation: "Since a > 0, 1/a is also > 0, preserving the inequality direction." }, { id: "B", text: "$-a$", isCorrect: false, explanation: "That would not isolate b." }], stepText: "Multiplying by $1/a$ gives $b = (1/a)(ab) > 0$. So if $a > 0$, then $b > 0$." },
            { stepText: "Case 2: Suppose $a < 0$. Then $1/a < 0$." },
            { stepText: "Multiplying the inequality $ab > 0$ by the negative number $1/a$ flips the sign, yielding $b = (1/a)(ab) < 0$. So if $a < 0$, then $b < 0$. Goal reached!" }
        ]},
        { id: "s3", type: "numerical", title: "Sign Check", content: "If $ab < 0$ and we know $a = -4$, is $b$ greater than 0? (1 for Yes, 0 for No)", numericAnswer: 1, numericTolerance: 0 },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "If $xy > 0$ and $x$ is negative, then $y$ must also be ___.", blankAnswer: "negative" }
      ]
    }
  ]
};