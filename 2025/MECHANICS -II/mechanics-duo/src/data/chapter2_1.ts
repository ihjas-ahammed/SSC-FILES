import { Section } from "../types";

export const SECTION_2_1: Section = {
    "id": "section-2-1",
    "title": "Section 2.1: Algebraic & Order Properties",
    "description": "The Field Axioms, Order Properties, and Inequalities of Real Numbers.",
    "color": "duo-green",
    "units": [
      {
        "id": "unit-2-1-1",
        "title": "The Algebraic Structure",
        "description": "The nine fundamental Field Axioms and their immediate algebraic consequences.",
        "color": "duo-green",
        "lessons": [
          {
            "id": "lesson-2-1-axioms",
            "title": "The Field Axioms",
            "description": "The 9 rules defining addition and multiplication in R.",
            "icon": "List",
            "slides": [
              {
                "id": "s1-add",
                "type": "theory",
                "title": "Addition Axioms (A1-A4)",
                "content": "On the set $\\mathbb{R}$, there is an operation **Addition** satisfying:\n\n*   **(A1) Commutativity:** $a + b = b + a$\n*   **(A2) Associativity:** $(a + b) + c = a + (b + c)$\n*   **(A3) Zero Element:** There exists $0$ such that $0 + a = a$\n*   **(A4) Negative Element:** For every $a$, there exists $-a$ such that $a + (-a) = 0$"
              },
              {
                "id": "q-axiom-add",
                "type": "quiz",
                "title": "Check Your Understanding",
                "content": "Which axiom justifies moving parentheses, e.g., $(2+3)+4 = 2+(3+4)$?",
                "options": [
                  { "id": "1", "text": "A1 (Commutativity)", "isCorrect": false, "explanation": "Commutativity changes order, not grouping." },
                  { "id": "2", "text": "A2 (Associativity)", "isCorrect": true, "explanation": "Associativity deals with the grouping of operations." }
                ]
              },
              {
                "id": "s2-mult",
                "type": "theory",
                "title": "Multiplication Axioms (M1-M4)",
                "content": "There is an operation **Multiplication** satisfying:\n\n*   **(M1) Commutativity:** $a \\cdot b = b \\cdot a$\n*   **(M2) Associativity:** $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$\n*   **(M3) Unit Element:** There exists $1 \\neq 0$ such that $1 \\cdot a = a$\n*   **(M4) Reciprocals:** For $a \\neq 0$, there exists $1/a$ such that $a \\cdot (1/a) = 1$"
              },
              {
                "id": "s3-dist",
                "type": "theory",
                "title": "The Distributive Property (D)",
                "content": "The axiom that connects Addition and Multiplication:\n\n*   **(D) Distributivity:** $a \\cdot (b + c) = (a \\cdot b) + (a \\cdot c)$"
              },
              {
                "id": "q-axiom-dist",
                "type": "quiz",
                "title": "Check Your Understanding",
                "content": "Why is the Distributive Property special?",
                "options": [
                  { "id": "1", "text": "It defines subtraction.", "isCorrect": false, "explanation": "Subtraction is defined via negatives (A4)." },
                  { "id": "2", "text": "It links the two binary operations.", "isCorrect": true, "explanation": "It tells us how multiplication interacts with addition." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-2-basic-theorems",
            "title": "Basic Algebraic Theorems",
            "description": "Theorem 2.1.2: Uniqueness of Zero and Multiplication by Zero.",
            "icon": "CheckCircle",
            "slides": [
              {
                "id": "s1-unique-zero",
                "type": "theory",
                "title": "Theorem 2.1.2(a): Uniqueness of Zero",
                "content": "We know $0$ is an additive identity. Is it the *only* one?\n\n**Theorem:** If $z, a \\in \\mathbb{R}$ such that $z + a = a$, then $z = 0$.\n\nThis proves that the element $0$ described in Axiom (A3) is unique."
              },
              {
                "id": "s2-proof-zero",
                "type": "proof",
                "title": "Proof: Uniqueness of Zero",
                "content": "How to prove $z=0$ using only axioms:",
                "proofSteps": [
                  "Assume $z + a = a$.",
                  "Add $-a$ to both sides: $(z + a) + (-a) = a + (-a)$.",
                  "Use Associativity (A2): $z + (a + (-a)) = 0$.",
                  "Use Inverse (A4): $z + 0 = 0$.",
                  "Use Identity (A3): $z = 0$."
                ]
              },
              {
                "id": "q-unique-zero",
                "type": "quiz",
                "title": "Understanding the Proof",
                "content": "Which axiom allowed us to replace $a + (-a)$ with $0$?",
                "options": [
                  { "id": "1", "text": "(A4) Existence of Negatives", "isCorrect": true, "explanation": "A4 defines the relationship $a + (-a) = 0$." },
                  { "id": "2", "text": "(A3) Existence of Zero", "isCorrect": false, "explanation": "A3 defines $a+0=a$, not how inverses cancel." }
                ]
              },
              {
                "id": "s3-mult-zero",
                "type": "theory",
                "title": "Theorem 2.1.2(c): Multiplication by Zero",
                "content": "It is a known fact that $a \\cdot 0 = 0$. But this isn't an axiom. We must prove it.\n\n**Strategy:** We start with $0+0=0$ and distribute $a$."
              },
              {
                "id": "s4-proof-mult-zero",
                "type": "proof",
                "title": "Proof: a ⋅ 0 = 0",
                "content": "Follow the logic step-by-step:",
                "proofSteps": [
                  "Write $a \\cdot 0$ as $a(0 + 0)$ (since $0+0=0$).",
                  "Apply Distributivity (D): $a \\cdot 0 = a \\cdot 0 + a \\cdot 0$.",
                  "This implies $x = x + x$ where $x = a \\cdot 0$.",
                  "Add $-x$ (or $-(a \\cdot 0)$) to both sides.",
                  "$0 = x + (-x) = (x + x) + (-x) = x + (x + -x) = x + 0 = x$.",
                  "Therefore, $a \\cdot 0 = 0$."
                ]
              },
              {
                "id": "q-mult-zero",
                "type": "quiz",
                "title": "Critical Thinking",
                "content": "Why can we not just divide by $a$ to show $0=0$?",
                "options": [
                  { "id": "1", "text": "Because division is not an axiom.", "isCorrect": false, "explanation": "Division is multiplication by reciprocal." },
                  { "id": "2", "text": "Because 'a' might be zero.", "isCorrect": true, "explanation": "We cannot assume $1/a$ exists if $a=0$. The proof must hold for all $a$." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-3-reciprocals",
            "title": "Reciprocals & Zero Product",
            "description": "Theorem 2.1.3: Uniqueness of inverses and the Zero Product Property.",
            "icon": "Divide",
            "slides": [
              {
                "id": "s1-thm-recip",
                "type": "theory",
                "title": "Theorem 2.1.3(a): Uniqueness of Inverse",
                "content": "**Theorem:** If $a \\neq 0$ and $b$ are in $\\mathbb{R}$ such that $a \\cdot b = 1$, then $b = 1/a$.\n\nThis means the multiplicative inverse is unique."
              },
              {
                "id": "s2-proof-recip",
                "type": "proof",
                "title": "Proof: b = 1/a",
                "content": "Let's assume $a \\cdot b = 1$.",
                "proofSteps": [
                  "Multiply both sides by $(1/a)$, which exists because $a \\neq 0$.",
                  "$(1/a) \\cdot (a \\cdot b) = (1/a) \\cdot 1$.",
                  "Associativity (M2): $((1/a) \\cdot a) \\cdot b = 1/a$.",
                  "Inverse (M4): $1 \\cdot b = 1/a$.",
                  "Identity (M3): $b = 1/a$."
                ]
              },
              {
                "id": "q-recip",
                "type": "quiz",
                "title": "Axiom Check",
                "content": "Which axiom guarantees $1 \\cdot b = b$?",
                "options": [
                  { "id": "1", "text": "M3 (Unit Element)", "isCorrect": true, "explanation": "M3 defines 1 as the identity." },
                  { "id": "2", "text": "M1 (Commutativity)", "isCorrect": false, "explanation": "" }
                ]
              },
              {
                "id": "s3-zero-prod",
                "type": "theory",
                "title": "Theorem 2.1.3(b): Zero Product Property",
                "content": "**Theorem:** If $a \\cdot b = 0$, then either $a = 0$ or $b = 0$.\n\nThis is fundamental for solving equations like $(x-1)(x-2) = 0$."
              },
              {
                "id": "s4-proof-zero-prod",
                "type": "proof",
                "title": "Proof: No Zero Divisors",
                "content": "Strategy: Assume $a \\neq 0$ and prove $b$ must be $0$.",
                "proofSteps": [
                  "Assume $a \\cdot b = 0$ and $a \\neq 0$.",
                  "Since $a \\neq 0$, $1/a$ exists.",
                  "Multiply equation by $1/a$: $(1/a)(a \\cdot b) = (1/a) \\cdot 0$.",
                  "LHS: $((1/a)a)b = 1 \\cdot b = b$.",
                  "RHS: $(1/a) \\cdot 0 = 0$ (from Thm 2.1.2).",
                  "Therefore, $b = 0$."
                ]
              },
              {
                "id": "q-zero-prod",
                "type": "quiz",
                "title": "Application",
                "content": "If $x^2 = x$, does this imply $x=1$?",
                "options": [
                  { "id": "1", "text": "Yes, divide by x.", "isCorrect": false, "explanation": "You cannot divide by x if x might be 0." },
                  { "id": "2", "text": "No, x could be 0.", "isCorrect": true, "explanation": "$x(x-1)=0$ implies $x=0$ or $x=1$." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-4-rationals",
            "title": "Rational & Irrational Numbers",
            "description": "Theorem 2.1.4: The existence of irrational numbers (Square root of 2).",
            "icon": "Hash",
            "slides": [
              {
                "id": "s1-defs",
                "type": "theory",
                "title": "Rational vs Irrational",
                "content": "**Rational Numbers ($\\mathbb{Q}$):** Elements of the form $b/a$ where $a,b \\in \\mathbb{Z}$ and $a \\neq 0$.\n\n**Irrational Numbers:** Elements of $\\mathbb{R}$ that are not in $\\mathbb{Q}$.\n\nExample: $\\sqrt{2}$ is irrational."
              },
              {
                "id": "s2-proof-root2",
                "type": "proof",
                "title": "Theorem 2.1.4: √2 is Irrational",
                "content": "Proof by Contradiction:",
                "proofSteps": [
                  "Assume $\\sqrt{2} = p/q$ where $p, q \\in \\mathbb{N}$.",
                  "**Crucial Assumption:** $p, q$ share no common factors (fraction is reduced).",
                  "Square it: $2 = p^2/q^2 \\implies p^2 = 2q^2$.",
                  "Thus $p^2$ is even $\\implies p$ is even ($p=2m$).",
                  "Substitute: $(2m)^2 = 2q^2 \\implies 4m^2 = 2q^2 \\implies 2m^2 = q^2$.",
                  "Thus $q^2$ is even $\\implies q$ is even.",
                  "Contradiction: Both $p$ and $q$ are even, but we assumed no common factors."
                ]
              },
              {
                "id": "q-root2",
                "type": "quiz",
                "title": "Proof Logic",
                "content": "Why was the 'reduced fraction' assumption necessary?",
                "options": [
                  { "id": "1", "text": "To make the arithmetic easier.", "isCorrect": false, "explanation": "" },
                  { "id": "2", "text": "To create the contradiction.", "isCorrect": true, "explanation": "Showing they both have a factor of 2 contradicts the assumption that they didn't." }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "unit-2-1-2",
        "title": "Order Properties",
        "description": "The axioms of Positivity and the rules of Inequalities.",
        "color": "duo-green",
        "lessons": [
          {
            "id": "lesson-2-1-5-positivity",
            "title": "The Positive Set",
            "description": "Definition 2.1.5 and 2.1.6: Defining order via a positive set.",
            "icon": "TrendingUp",
            "slides": [
              {
                "id": "s1-pos-def",
                "type": "theory",
                "title": "Definition 2.1.5: Positive Numbers",
                "content": "There exists a subset $\\mathbb{P} \\subset \\mathbb{R}$ called **positive real numbers** satisfying:\n\n*   (i) If $a, b \\in \\mathbb{P}$, then $a+b \\in \\mathbb{P}$.\n*   (ii) If $a, b \\in \\mathbb{P}$, then $ab \\in \\mathbb{P}$.\n*   (iii) **Trichotomy Property:** For any $a \\in \\mathbb{R}$, exactly one holds: $a \\in \\mathbb{P}$, $a=0$, or $-a \\in \\mathbb{P}$."
              },
              {
                "id": "q-pos",
                "type": "quiz",
                "title": "Understanding Trichotomy",
                "content": "Can a number be both positive and zero?",
                "options": [
                  { "id": "1", "text": "No", "isCorrect": true, "explanation": "Trichotomy says *exactly one* condition holds." },
                  { "id": "2", "text": "Yes", "isCorrect": false, "explanation": "" }
                ]
              },
              {
                "id": "s2-ineq-def",
                "type": "theory",
                "title": "Definition 2.1.6: Inequalities",
                "content": "We define $a > b$ (or $b < a$) to mean:\n$$a - b \\in \\mathbb{P}$$\n\nWe define $a \\ge b$ (or $b \\le a$) to mean:\n$$a - b \\in \\mathbb{P} \\cup \\{0\\}$$"
              },
              {
                "id": "q-ineq",
                "type": "quiz",
                "title": "Application",
                "content": "How do we write \"a is strictly negative\" using P?",
                "options": [
                  { "id": "1", "text": "$a \\in \\mathbb{P}$", "isCorrect": false, "explanation": "" },
                  { "id": "2", "text": "$-a \\in \\mathbb{P}$", "isCorrect": true, "explanation": "If $-a$ is positive, $a$ is negative." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-7-order-rules",
            "title": "Rules of Order",
            "description": "Theorem 2.1.7 and 2.1.8: Transitivity and Multiplication rules.",
            "icon": "Shuffle",
            "slides": [
              {
                "id": "s1-thm-rules",
                "type": "theory",
                "title": "Theorem 2.1.7: Basic Rules",
                "content": "Let $a, b, c \\in \\mathbb{R}$.\n\n*   (a) **Transitivity:** $a > b$ and $b > c \\implies a > c$.\n*   (b) **Addition:** $a > b \\implies a + c > b + c$.\n*   (c) **Multiplication:** \n    *   If $c > 0$, then $a > b \\implies ac > bc$.\n    *   If $c < 0$, then $a > b \\implies ac < bc$ (Sign Flip)."
              },
              {
                "id": "s2-proof-flip",
                "type": "proof",
                "title": "Proof: Negative Multiplier",
                "content": "Why does multiplying by a negative flip the inequality?",
                "proofSteps": [
                  "Assume $a > b$ (so $a-b \\in \\mathbb{P}$) and $c < 0$ (so $-c \\in \\mathbb{P}$).",
                  "By closure of multiplication, $(a-b)(-c) \\in \\mathbb{P}$.",
                  "Expand: $-ac + bc \\in \\mathbb{P}$.",
                  "Rewrite: $bc - ac \\in \\mathbb{P}$.",
                  "By definition, this means $bc > ac$ (or $ac < bc$)."
                ]
              },
              {
                "id": "q-rules",
                "type": "quiz",
                "title": "Check Point",
                "content": "If $x > y$ and $z = -2$, what is true?",
                "options": [
                  { "id": "1", "text": "$-2x > -2y$", "isCorrect": false, "explanation": "Multiplying by negative flips the sign." },
                  { "id": "2", "text": "$-2x < -2y$", "isCorrect": true, "explanation": "" }
                ]
              },
              {
                "id": "s3-thm-squares",
                "type": "theory",
                "title": "Theorem 2.1.8: Squares & Naturals",
                "content": "Important consequences:\n\n*   (a) For any $a \\neq 0$, $a^2 > 0$.\n*   (b) $1 > 0$ (since $1 = 1^2$).\n*   (c) For any natural number $n$, $n > 0$."
              },
              {
                "id": "q-squares",
                "type": "quiz",
                "title": "Concept",
                "content": "Why is there no smallest positive real number?",
                "options": [
                  { "id": "1", "text": "Because $1 > 0$.", "isCorrect": false, "explanation": "" },
                  { "id": "2", "text": "If $a > 0$, then $a/2$ is smaller and positive.", "isCorrect": true, "explanation": "$0 < a/2 < a$." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-9-infinitesimals",
            "title": "Comparing to Epsilon",
            "description": "Theorem 2.1.9: Proving equality via small numbers.",
            "icon": "Minimize",
            "slides": [
              {
                "id": "s1-thm-eps",
                "type": "theory",
                "title": "Theorem 2.1.9",
                "content": "**Theorem:** If $a \\in \\mathbb{R}$ such that $0 \\le a < \\epsilon$ for **every** $\\epsilon > 0$, then $a = 0$.\n\nThis is a standard technique in Analysis: to show a number is zero, show it is smaller than any positive amount."
              },
              {
                "id": "s2-proof-eps",
                "type": "proof",
                "title": "Proof by Contradiction",
                "content": "Suppose $a > 0$. Can we find a contradiction?",
                "proofSteps": [
                  "Assume $a > 0$.",
                  "Choose $\\epsilon_0 = a/2$.",
                  "Since $a > 0$, $\\epsilon_0 > 0$.",
                  "The hypothesis says $a < \\epsilon$ for ALL $\\epsilon$.",
                  "So we must have $a < a/2$.",
                  "This implies $1 < 1/2$, which is false.",
                  "Therefore, $a$ cannot be positive. Since $a \\ge 0$, $a=0$."
                ]
              },
              {
                "id": "q-eps",
                "type": "quiz",
                "title": "Logic Check",
                "content": "If we only knew $a < 0.0001$, is $a=0$?",
                "options": [
                  { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "$a$ could be $0.00001$." },
                  { "id": "2", "text": "No", "isCorrect": true, "explanation": "The theorem requires $a < \\epsilon$ for *every* possible $\\epsilon$." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-10-products",
            "title": "Signs of Products",
            "description": "Theorems 2.1.10 and 2.1.11: Determining signs of factors.",
            "icon": "X",
            "slides": [
              {
                "id": "s1-pos-prod",
                "type": "theory",
                "title": "Theorem 2.1.10: Positive Product",
                "content": "If $ab > 0$, then either:\n\n*   (i) $a > 0$ and $b > 0$, OR\n*   (ii) $a < 0$ and $b < 0$.\n\nFactors must have the **same sign**."
              },
              {
                "id": "s2-neg-prod",
                "type": "theory",
                "title": "Corollary 2.1.11: Negative Product",
                "content": "If $ab < 0$, then either:\n\n*   (i) $a < 0$ and $b > 0$, OR\n*   (ii) $a > 0$ and $b < 0$.\n\nFactors must have **opposite signs**."
              },
              {
                "id": "q-prod-sign",
                "type": "quiz",
                "title": "Quick Check",
                "content": "If $(x-1)(x+2) < 0$, what do we know?",
                "options": [
                  { "id": "1", "text": "Both factors are negative.", "isCorrect": false, "explanation": "That would make the product positive." },
                  { "id": "2", "text": "One is positive, one is negative.", "isCorrect": true, "explanation": "Corollary 2.1.11." }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "unit-2-1-3",
        "title": "Inequalities Applications",
        "description": "Solving inequalities and famous inequalities (AGM, Bernoulli).",
        "color": "duo-green",
        "lessons": [
          {
            "id": "lesson-2-1-12-solving",
            "title": "Solving Inequalities",
            "description": "Example 2.1.12: Finding solution sets.",
            "icon": "Search",
            "slides": [
              {
                "id": "s1-ex-b",
                "type": "theory",
                "title": "Example 2.1.12(b): Quadratic",
                "content": "Determine the set $B = \\{x \\in \\mathbb{R} : x^2 + x > 2 \\}$.\n\nRewrite as $x^2 + x - 2 > 0$, then $(x-1)(x+2) > 0$.\n\nApply Thm 2.1.10 (Same signs):\n1.  $x-1 > 0$ AND $x+2 > 0 \\implies x > 1$.\n2.  $x-1 < 0$ AND $x+2 < 0 \\implies x < -2$."
              },
              {
                "id": "q-sol-set",
                "type": "quiz",
                "title": "Solution Set",
                "content": "What is the final set B?",
                "options": [
                  { "id": "1", "text": "$\\{x : x > 1\\}$", "isCorrect": false, "explanation": "Missed the negative case." },
                  { "id": "2", "text": "$\\{x : x > 1 \\} \\cup \\{x : x < -2\\}$", "isCorrect": true, "explanation": "Union of both valid cases." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-13-agm",
            "title": "Mean Inequalities",
            "description": "Example 2.1.13: Arithmetic-Geometric Mean.",
            "icon": "BarChart",
            "slides": [
              {
                "id": "s1-agm",
                "type": "theory",
                "title": "Arithmetic-Geometric Mean (AGM)",
                "content": "For positive numbers $a, b$:\n$$\\sqrt{ab} \\le \\frac{1}{2}(a+b)$$\n\nThe geometric mean is always less than or equal to the arithmetic mean."
              },
              {
                "id": "s2-proof-agm",
                "type": "proof",
                "title": "Proof of AGM",
                "content": "We rely on $(\\sqrt{a} - \\sqrt{b})^2 \\ge 0$.",
                "proofSteps": [
                  "Expand the square: $a - 2\\sqrt{ab} + b \\ge 0$.",
                  "Rearrange: $a + b \\ge 2\\sqrt{ab}$.",
                  "Divide by 2: $\\frac{1}{2}(a+b) \\ge \\sqrt{ab}$."
                ]
              },
              {
                "id": "q-agm",
                "type": "quiz",
                "title": "Equality Condition",
                "content": "When does equality hold ($\sqrt{ab} = (a+b)/2$)?",
                "options": [
                  { "id": "1", "text": "Always", "isCorrect": false, "explanation": "" },
                  { "id": "2", "text": "Only when $a = b$", "isCorrect": true, "explanation": "Because $(\\sqrt{a}-\\sqrt{b})^2 = 0$ implies $\\sqrt{a}=\\sqrt{b}$." }
                ]
              }
            ]
          },
          {
            "id": "lesson-2-1-13-bernoulli",
            "title": "Bernoulli's Inequality",
            "description": "Example 2.1.13(c): A powerful tool for limits.",
            "icon": "ChevronsUp",
            "slides": [
              {
                "id": "s1-bern",
                "type": "theory",
                "title": "Statement",
                "content": "If $x > -1$, then for all $n \\in \\mathbb{N}$:\n$$(1+x)^n \\ge 1 + nx$$"
              },
              {
                "id": "s2-proof-induct",
                "type": "proof",
                "title": "Proof by Induction",
                "content": "Base case $n=1$: $(1+x) \\ge 1+x$ (True).",
                "proofSteps": [
                  "Assume $(1+x)^k \\ge 1+kx$.",
                  "Multiply by $(1+x)$. Since $x > -1$, $(1+x) > 0$, so order is preserved.",
                  "$(1+x)^{k+1} \\ge (1+kx)(1+x) = 1 + x + kx + kx^2$.",
                  "Drop the positive term $kx^2$: $1 + x + kx + kx^2 \\ge 1 + (k+1)x$.",
                  "Conclusion holds for $k+1$."
                ]
              },
              {
                "id": "q-bern",
                "type": "quiz",
                "title": "Critical Step",
                "content": "Why did we need $x > -1$?",
                "options": [
                  { "id": "1", "text": "To ensure $(1+x)$ is positive when multiplying.", "isCorrect": true, "explanation": "If $(1+x)$ were negative, the inequality would flip." },
                  { "id": "2", "text": "So that $nx$ is defined.", "isCorrect": false, "explanation": "" }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "unit-2-1-exercises",
        "title": "Exercises for Section 2.1",
        "description": "Practice problems categorized by difficulty.",
        "color": "duo-green",
        "lessons": [
          {
            "id": "ex-easy",
            "title": "Set A: Basic Concepts",
            "description": "Questions 1-5, 11, 13 (Basic Algebra & Axioms).",
            "icon": "Circle",
            "slides": [
              {
                "id": "ex-1-3",
                "type": "theory",
                "title": "Questions 1 & 2: Negative Rules",
                "content": "1. Prove: If $a+b=0$, then $b=-a$.\n2. Prove: $-(-a) = a$ and $(-1)a = -a$.\n\n*Try to prove these using only Axioms A3, A4, M3.*"
              },
              {
                "id": "sol-1-3",
                "type": "theory",
                "title": "Solution Sketch",
                "content": "1. Add $-a$ to $a+b=0$. $(-a)+a+b = -a \to 0+b = -a \to b=-a$.\n2. $a + (-a) = 0$ implies $a$ is the unique inverse of $-a$, so $-(-a)=a$."
              },
              {
                "id": "q-ex-basic",
                "type": "quiz",
                "title": "Concept Check",
                "content": "In Q3 (Solving equations), to solve $2x+5=8$, which properties are used?",
                "options": [
                  { "id": "1", "text": "Existence of negatives and reciprocals.", "isCorrect": true, "explanation": "Add -5, then multiply by 1/2." },
                  { "id": "2", "text": "Trichotomy property.", "isCorrect": false, "explanation": "" }
                ]
              },
              {
                "id": "ex-13",
                "type": "theory",
                "title": "Question 13: Sum of Squares",
                "content": "Prove that $a^2 + b^2 = 0$ if and only if $a=0$ and $b=0$.\n\n*Hint: Use Thm 2.1.8 ($x^2 \\ge 0$).*"
              },
              {
                "id": "sol-13",
                "type": "theory",
                "title": "Solution 13",
                "content": "Since $a^2 \\ge 0$ and $b^2 \\ge 0$, if either is positive, the sum is positive.\nThe only way the sum of non-negative numbers is zero is if each term is zero."
              }
            ]
          },
          {
            "id": "ex-med",
            "title": "Set B: Inequalities & Rationals",
            "description": "Questions 6-10, 14-16 (Roots, Order, Rationals).",
            "icon": "Triangle",
            "slides": [
              {
                "id": "ex-6-7",
                "type": "theory",
                "title": "Questions 6 & 7: Irrational Roots",
                "content": "Show there is no rational $s$ such that $s^2 = 6$ or $t^2 = 3$.\n\n*Try adapting the proof for $\\sqrt{2}$.*"
              },
              {
                "id": "sol-6-7",
                "type": "theory",
                "title": "Solution Strategy",
                "content": "Assume $p/q$ is in lowest terms. $p^2 = 3q^2$. Then $p$ is divisible by 3. $p=3k$. $9k^2 = 3q^2 \to 3k^2 = q^2$. Then $q$ is divisible by 3. Contradiction."
              },
              {
                "id": "ex-15",
                "type": "theory",
                "title": "Question 15: Roots and Reciprocals",
                "content": "If $0 < a < b$, show:\n(a) $a < \\sqrt{ab} < b$\n(b) $1/b < 1/a$\n\n*Try yourself.*"
              },
              {
                "id": "sol-15",
                "type": "theory",
                "title": "Solution 15",
                "content": "(a) Multiply $a < b$ by $a$ ($a^2 < ab$) and by $b$ ($ab < b^2$). Take roots.\n(b) Multiply $a < b$ by positive number $(1/a)(1/b)$. Result: $1/b < 1/a$."
              },
              {
                "id": "q-ex-med",
                "type": "quiz",
                "title": "Check",
                "content": "In Q16, to solve $1/x < x$, what cases must we consider?",
                "options": [
                  { "id": "1", "text": "Just x > 0.", "isCorrect": false, "explanation": "" },
                  { "id": "2", "text": "Case x > 0 and Case x < 0.", "isCorrect": true, "explanation": "Multiplying by x flips the sign if x < 0." }
                ]
              }
            ]
          },
          {
            "id": "ex-hard",
            "title": "Set C: Advanced Proofs",
            "description": "Questions 17-26 (Induction, Analysis Logic).",
            "icon": "Hexagon",
            "slides": [
              {
                "id": "ex-18",
                "type": "theory",
                "title": "Question 18: Epsilon Logic",
                "content": "If $a \\le b + \\epsilon$ for every $\\epsilon > 0$, show $a \\le b$.\n\n*Hint: Proof by contradiction. Assume $a > b$.*"
              },
              {
                "id": "sol-18",
                "type": "theory",
                "title": "Solution 18",
                "content": "Assume $a > b$. Let $\\epsilon = a - b > 0$. The hypothesis fails for $\\epsilon/2$. (Or, set $\\epsilon = (a-b)/2$, leading to $a \\le b + (a-b)/2 \to a/2 \\le b/2 + a/2$, which doesn't directly contradict easily. Better: Let $\\epsilon_0 = a-b$. Then $a \\le b + (a-b) = a$. No contradiction yet. Actually, use $a > b$ means $a - b > 0$. Set $\\epsilon = (a-b)/2$. Hypothesis says $a \\le b + (a-b)/2 \to a - b \\le (a-b)/2$. Divide by positive $(a-b)$: $1 \\le 1/2$. Contradiction.)"
              },
              {
                "id": "ex-23",
                "type": "theory",
                "title": "Question 23: Powers Induction",
                "content": "If $a, b > 0$, show $a < b$ if and only if $a^n < b^n$.\n\n*Use Mathematical Induction.*"
              },
              {
                "id": "sol-23",
                "type": "theory",
                "title": "Solution 23",
                "content": "Base case $n=1$ is trivial. Assume $a^k < b^k$. Multiply by $a < b$ (carefully). Actually, use $b^n - a^n = (b-a)(b^{n-1} + ... + a^{n-1})$. Since terms are positive, sign of difference depends only on $b-a$."
              },
              {
                "id": "q-ex-hard",
                "type": "quiz",
                "title": "Final Check",
                "content": "Q26: $a^{m+n} = a^m a^n$. How is this proved?",
                "options": [
                  { "id": "1", "text": "Induction on n, treating m as fixed.", "isCorrect": true, "explanation": "Base case n=1 uses definition $a^{m+1} = a^m a$." },
                  { "id": "2", "text": "By definition of addition.", "isCorrect": false, "explanation": "" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }