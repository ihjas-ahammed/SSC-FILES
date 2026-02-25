import { Unit } from '../types';

export const UNIT_2_1_1: Unit = {
  id: "unit-2-1-1",
  title: "Field Axioms",
  description: "Algebraic Properties of the Real Numbers",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-1-1", title: "Algebraic Properties of R", description: "The foundational axioms of real numbers", icon: "Layers",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you add two numbers, does the order matter?", options: [{ id: "A", text: "No, a+b = b+a", isCorrect: true, explanation: "This is known as the commutative property of addition." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Addition in real numbers is commutative." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What is the result of multiplying any real number by 1?", options: [{ id: "A", text: "The number itself", isCorrect: true, explanation: "1 is the multiplicative identity." }, { id: "B", text: "1", isCorrect: false, explanation: "That would be true if we multiplied by 0." }] },
        { id: "s2", type: "theory", title: "Algebraic Properties of $\\mathbb{R}$", content: "The real numbers $\\mathbb{R}$ possess two binary operations, **addition** ($+$) and **multiplication** ($\\cdot$), satisfying the Field Axioms:\n\n**Addition Properties:**\n(A1) Commutative: $a + b = b + a$\n(A2) Associative: $(a + b) + c = a + (b + c)$\n(A3) Identity: There exists an element $0$ such that $a + 0 = a$\n(A4) Inverse: For each $a$, there exists $-a$ such that $a + (-a) = 0$\n\n**Multiplication Properties:**\n(M1) Commutative: $a \\cdot b = b \\cdot a$\n(M2) Associative: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$\n(M3) Identity: There exists $1 \\neq 0$ such that $a \\cdot 1 = a$\n(M4) Inverse: For each $a \\neq 0$, there exists $1/a$ such that $a \\cdot (1/a) = 1$\n\n**Distributive Property:**\n(D) $a \\cdot (b + c) = a \\cdot b + a \\cdot c$" },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "The property that states $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$ is called the ___ property of multiplication.", blankAnswer: "associative" }
      ]
    },
    {
      id: "les-2-1-1-2", title: "Theorem 2.1.2: Uniqueness Properties", description: "Proving that 0 and 1 are unique", icon: "Fingerprint",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If adding a mysterious number $z$ to $a$ gives you exactly $a$ back, what must $z$ be?", options: [{ id: "A", text: "0", isCorrect: true, explanation: "0 is the unique additive identity." }, { id: "B", text: "1", isCorrect: false, explanation: "1 is the multiplicative identity." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What is always the result of multiplying any real number by 0?", options: [{ id: "A", text: "0", isCorrect: true, explanation: "Multiplying by zero always yields zero." }, { id: "B", text: "The number itself", isCorrect: false, explanation: "That's multiplying by 1." }] },
        { id: "s2", type: "theory", title: "Theorem 2.1.2", content: "**Theorem 2.1.2** establishes three vital uniqueness facts derived strictly from the Field Axioms:\n\n(a) If $z$ and $a$ are elements in $\\mathbb{R}$ with $z + a = a$, then $z = 0$.\n(b) If $u$ and $b \\neq 0$ are elements in $\\mathbb{R}$ with $u \\cdot b = b$, then $u = 1$.\n(c) If $a \\in \\mathbb{R}$, then $a \\cdot 0 = 0$." },
        { id: "s3", type: "proof", title: "Interactive Proof: Uniqueness of Zero", content: "**Goal: Prove $z + a = a \\implies z = 0$.**", interactiveSteps: [
            { stepText: "By the existence of the zero element (A3), we can start with $z = z + 0$." },
            { stepText: "By the existence of negative elements (A4), $a + (-a) = 0$. Substituting this gives $z = z + (a + (-a))$." },
            { prompt: "By the associative property of addition (A2), how can we regroup $z + (a + (-a))$?", options: [{ id: "A", text: "$(z + a) + (-a)$", isCorrect: true, explanation: "We group z and a together." }, { id: "B", text: "$(z + (-a)) + a$", isCorrect: false, explanation: "This regroups differently." }], stepText: "We rewrite it as $(z + a) + (-a)$." },
            { stepText: "By our initial assumption, $z + a = a$. Substituting this in yields $a + (-a)$." },
            { stepText: "Finally, $a + (-a) = 0$ by (A4). Therefore, $z = 0$. Goal reached!" }
        ]},
        { id: "s4", type: "proof", title: "Interactive Proof: Multiplying by Zero", content: "**Goal: Prove $a \\cdot 0 = 0$.**", interactiveSteps: [
            { stepText: "Consider the expression $a + a \\cdot 0$. By the identity property (M3), $a = a \\cdot 1$. Thus, $a + a \\cdot 0 = a \\cdot 1 + a \\cdot 0$." },
            { prompt: "By the distributive property (D), what does $a \\cdot 1 + a \\cdot 0$ simplify to?", options: [{ id: "A", text: "$a \\cdot (1 + 0)$", isCorrect: true, explanation: "We factor out the 'a'." }, { id: "B", text: "$a \\cdot 1 \\cdot 0$", isCorrect: false, explanation: "Addition doesn't turn into multiplication." }], stepText: "It factors to $a \\cdot (1 + 0)$." },
            { stepText: "Since $1 + 0 = 1$ by (A3), we have $a \\cdot (1 + 0) = a \\cdot 1 = a$." },
            { stepText: "We have established $a + a \\cdot 0 = a$. By part (a) of this theorem, any number added to $a$ that results in $a$ must be $0$. Thus $a \\cdot 0 = 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-1-1-3", title: "Theorem 2.1.3: Zero Product Property", description: "Dealing with reciprocals and zeros", icon: "CircleDot",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If $ab = 1$, can either $a$ or $b$ be zero?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Because anything multiplied by 0 is 0, not 1." }, { id: "B", text: "Yes", isCorrect: false, explanation: "0 has no reciprocal." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If a product of two numbers is zero ($ab=0$), what can we conclude?", options: [{ id: "A", text: "At least one of the numbers must be 0", isCorrect: true, explanation: "This is the Zero Product Property." }, { id: "B", text: "Both numbers must be 0", isCorrect: false, explanation: "Only one needs to be 0." }] },
        { id: "s2", type: "theory", title: "Theorem 2.1.3", content: "**Theorem 2.1.3** establishes two more fundamental rules of algebra:\n\n(a) If $a \\neq 0$ and $b$ in $\\mathbb{R}$ are such that $a \\cdot b = 1$, then $b = 1/a$.\n(b) If $a \\cdot b = 0$, then either $a = 0$ or $b = 0$." },
        { id: "s3", type: "proof", title: "Interactive Proof: Zero Product", content: "**Goal: Prove if $a \\cdot b = 0$, then either $a = 0$ or $b = 0$.**", interactiveSteps: [
            { stepText: "Let's assume $a \\cdot b = 0$. We want to show that if $a$ is not zero, then $b$ must be zero. Assume $a \\neq 0$." },
            { stepText: "Since $a \\neq 0$, the inverse property (M4) guarantees the existence of a reciprocal $1/a$. Let's multiply both sides of $a \\cdot b = 0$ by $1/a$." },
            { prompt: "Using the associative property (M2), how does $(1/a)(a \\cdot b)$ group?", options: [{ id: "A", text: "$((1/a) \\cdot a) \\cdot b$", isCorrect: true, explanation: "We group the inverses together." }, { id: "B", text: "$(1/a) \\cdot b$", isCorrect: false, explanation: "You dropped the 'a'." }], stepText: "We get $((1/a) \\cdot a) \\cdot b = (1/a) \\cdot 0$." },
            { stepText: "The right side $(1/a) \\cdot 0 = 0$ by Theorem 2.1.2(c). The left side is $1 \\cdot b = b$." },
            { stepText: "Therefore, equating them yields $b = 0$. We have proven that if $a \\neq 0$, then $b$ MUST be $0$. Goal reached!" }
        ]},
        { id: "s4", type: "numerical", title: "Application", content: "If $(x-3)(x-5) = 0$ and we know $x \\neq 3$, what must $x$ be?", numericAnswer: 5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-1-1-4", title: "Theorem 2.1.4: Irrationality of √2", description: "Why rational numbers are incomplete", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Are all real numbers perfectly expressible as fractions of integers?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Irrational numbers cannot be expressed as fractions." }, { id: "B", text: "Yes", isCorrect: false, explanation: "The Greeks discovered this was false long ago." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If the square of an integer $p^2$ is an even number, what must be true about $p$ itself?", options: [{ id: "A", text: "p must be even", isCorrect: true, explanation: "The square of an odd number is always odd." }, { id: "B", text: "p could be odd", isCorrect: false, explanation: "An odd times an odd is always odd." }] },
        { id: "s2", type: "theory", title: "Theorem 2.1.4: No rational square root of 2", content: "**Theorem 2.1.4:** There does not exist a rational number $r$ such that $r^2 = 2$.\n\nThis is a historic proof (attributed to the Pythagoreans) that shattered the Greek belief that all lengths could be represented as ratios of integers. It proves the existence of **irrational numbers**." },
        { id: "s3", type: "proof", title: "Interactive Proof: Irrationality of √2", content: "**Goal: Prove no rational $r$ satisfies $r^2 = 2$ by contradiction.**", interactiveSteps: [
            { stepText: "Assume for contradiction that a rational number exists such that $(p/q)^2 = 2$. We assume $p$ and $q$ are positive integers with NO common factors other than 1 (lowest terms)." },
            { stepText: "Squaring both sides gives $p^2/q^2 = 2$, which rearranges to $p^2 = 2q^2$. Since $p^2$ is a multiple of 2, $p^2$ is even." },
            { prompt: "Since $p^2$ is even, what do we know about $p$?", options: [{ id: "A", text: "p is even", isCorrect: true, explanation: "If p were odd, p squared would be odd." }, { id: "B", text: "p is odd", isCorrect: false, explanation: "An odd times an odd is odd." }], stepText: "Thus, $p$ is even. This means we can write $p = 2m$ for some integer $m$." },
            { stepText: "Substitute $p = 2m$ back into our equation: $(2m)^2 = 2q^2$, which simplifies to $4m^2 = 2q^2$." },
            { stepText: "Divide by 2 to get $2m^2 = q^2$. This implies that $q^2$ is even, which in turn means $q$ must be even." },
            { stepText: "If both $p$ and $q$ are even, they share a common factor of 2. But we initially assumed they had no common factors! This contradiction means our initial assumption is false. Goal reached!" }
        ]},
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "A real number that cannot be written as a ratio of integers is called an ___ number.", blankAnswer: "irrational" }
      ]
    }
  ]
};