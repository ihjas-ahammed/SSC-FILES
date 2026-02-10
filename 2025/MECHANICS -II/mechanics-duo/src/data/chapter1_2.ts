import { Section } from '../types';

export const SECTION_1_2: Section = {
  "id": "section-1-2",
  "title": "Section 1.2: Mathematical Induction",
  "description": "The domino effect of mathematics: Proving statements for all natural numbers.",
  "color": "duo-green",
  "units": [
    {
      "id": "unit-1-2-1",
      "title": "The Foundation",
      "description": "Well-Ordering and the Principle of Induction.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-2-well-ordering",
          "title": "The Well-Ordering Property",
          "description": "1.2.1: The root of induction.",
          "icon": "ArrowDown",
          "slides": [
            {
              "id": "s1-intro",
              "type": "theory",
              "title": "The Natural Numbers",
              "content": "We assume familiarity with the set of natural numbers:\n$$\\mathbb{N} = \\{1, 2, 3, ...\\}$$\n\nA fundamental property of this set is that it is \"well-ordered\"."
            },
            {
              "id": "s2-well-ordering",
              "type": "theory",
              "title": "1.2.1 Well-Ordering Property",
              "content": "**Statement:** Every nonempty subset of $\\mathbb{N}$ has a **least element**.\n\nMore formally: If $S \\subseteq \\mathbb{N}$ and $S \\neq \\emptyset$, then there exists $m \\in S$ such that $m \\le k$ for all $k \\in S$."
            },
            {
              "id": "q-well-ordering",
              "type": "quiz",
              "title": "Concept Check",
              "content": "Does the set of positive Rational numbers $\\mathbb{Q}^+$ have a least element?",
              "options": [
                { "id": "1", "text": "Yes, it is 0.", "isCorrect": false, "explanation": "0 is not positive." },
                { "id": "2", "text": "Yes, a very small fraction.", "isCorrect": false, "explanation": "For any fraction $q$, $q/2$ is smaller and still positive." },
                { "id": "3", "text": "No.", "isCorrect": true, "explanation": "This distinguishes $\\mathbb{N}$ from $\\mathbb{Q}$ and $\\mathbb{R}$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-2-pmi",
          "title": "The Principle of Induction",
          "description": "1.2.2: The Domino Analogy.",
          "icon": "Zap",
          "slides": [
            {
              "id": "s1-pmi-def",
              "type": "theory",
              "title": "1.2.2 Principle of Mathematical Induction",
              "content": "Let $S$ be a subset of $\\mathbb{N}$ that possesses two properties:\n\n1.  The number $1 \\in S$.\n2.  For every $k \\in \\mathbb{N}$, if $k \\in S$, then $k + 1 \\in S$.\n\n**Conclusion:** We have $S = \\mathbb{N}$."
            },
            {
              "id": "s2-proof-pmi",
              "type": "proof",
              "title": "Proof of the Principle",
              "content": "We prove this using the Well-Ordering Property (Contradiction).",
              "proofSteps": [
                "Assume $S \\neq \\mathbb{N}$. Let $F = \\mathbb{N} \\setminus S$.",
                "Since $F$ is nonempty, by Well-Ordering, it has a least element $m$.",
                "We know $1 \\in S$, so $m \\neq 1$. Thus $m > 1$.",
                "This implies $m-1$ is a natural number.",
                "Since $m$ is the *least* element not in $S$, $m-1$ MUST be in $S$.",
                "By property (2), if $m-1 \\in S$, then $(m-1)+1 \\in S$.",
                "So $m \\in S$. This contradicts $m \\in F$.",
                "Therefore, $F$ must be empty, and $S = \\mathbb{N}$."
              ]
            },
            {
              "id": "s3-standard-form",
              "type": "theory",
              "title": "Standard Usage",
              "content": "In practice, we let $P(n)$ be a statement about $n$. We define $S = \\{n \\in \\mathbb{N} : P(n) \\text{ is true}\\}$.\n\n1.  **Basis:** Show $P(1)$ is true.\n2.  **Inductive Step:** Assume $P(k)$ is true (Inductive Hypothesis). Show $P(k+1)$ is true.\n\nConclusion: $P(n)$ is true for all $n$."
            }
          ]
        },
        {
          "id": "lesson-1-2-variants",
          "title": "Variants of Induction",
          "description": "1.2.3 & 1.2.5: Shifted Basis and Strong Induction.",
          "icon": "GitBranch",
          "slides": [
            {
              "id": "s1-shifted",
              "type": "theory",
              "title": "1.2.3 Modified Principle",
              "content": "Sometimes a statement is only true for $n \\ge n_0$ (e.g., $2^n > n^2$ is false for $n=3$ but true for $n \\ge 5$).\n\n**Strategy:**\n1.  **Base:** Show $P(n_0)$ is true.\n2.  **Step:** For $k \\ge n_0$, if $P(k)$ is true, then $P(k+1)$ is true."
            },
            {
              "id": "s2-strong",
              "type": "theory",
              "title": "1.2.5 Principle of Strong Induction",
              "content": "Sometimes knowing $P(k)$ isn't enough; we need to know it was true for *everything* before $k$.\n\n**Hypothesis:** Assume $P(1), P(2), ..., P(k)$ are ALL true.\n**Step:** Show $P(k+1)$ is true.\n\nThis is logically equivalent to standard induction but often easier to apply."
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-2-2",
      "title": "Applications: Sums & Algebra",
      "description": "Classic proofs of summation formulas.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-2-sum-n",
          "title": "Sum of Natural Numbers",
          "description": "Example 1.2.4(a): The Gauss formula.",
          "icon": "PlusSquare",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Statement",
              "content": "For each $n \\in \\mathbb{N}$, the sum of the first $n$ numbers is:\n$$1 + 2 + ... + n = \\frac{1}{2}n(n+1)$$"
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Inductive Proof",
              "content": "Let $S$ be the set of $n$ for which the formula holds.",
              "proofSteps": [
                "**Base Case (n=1):** LHS = 1. RHS = $\\frac{1}{2}(1)(2) = 1$. True.",
                "**Hypothesis:** Assume $1 + ... + k = \\frac{1}{2}k(k+1)$.",
                "**Step (k+1):** Add $(k+1)$ to both sides.",
                "LHS: $(1 + ... + k) + (k+1)$.",
                "RHS: $\\frac{1}{2}k(k+1) + (k+1)$.",
                "Factor out $(k+1)$: $(k+1)[\\frac{1}{2}k + 1]$.",
                "Simplify: $(k+1)[\\frac{k+2}{2}] = \\frac{1}{2}(k+1)(k+2)$.",
                "This is the formula for $n=k+1$. Thus valid for all $n$."
              ]
            }
          ]
        },
        {
          "id": "lesson-1-2-sum-sq",
          "title": "Sum of Squares",
          "description": "Example 1.2.4(b): Sum of n^2.",
          "icon": "Box",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Statement",
              "content": "For each $n \\in \\mathbb{N}$:\n$$1^2 + 2^2 + ... + n^2 = \\frac{1}{6}n(n+1)(2n+1)$$"
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof",
              "content": "Check n=1: $1^2 = 1$. $\\frac{1}{6}(1)(2)(3) = 1$. True.",
              "proofSteps": [
                "Assume true for $k$: $\\sum_{i=1}^k i^2 = \\frac{1}{6}k(k+1)(2k+1)$.",
                "Add $(k+1)^2$ to both sides.",
                "$\\frac{1}{6}k(k+1)(2k+1) + (k+1)^2$.",
                "Factor out $(k+1)/6$: $\\frac{k+1}{6} [k(2k+1) + 6(k+1)]$.",
                "Inside bracket: $2k^2 + k + 6k + 6 = 2k^2 + 7k + 6$.",
                "Factor quadratic: $(k+2)(2k+3)$.",
                "Result: $\\frac{1}{6}(k+1)(k+2)(2k+3)$.",
                "Note that $2(k+1)+1 = 2k+3$. The formula holds."
              ]
            }
          ]
        },
        {
          "id": "lesson-1-2-geom",
          "title": "Geometric Progression",
          "description": "Example 1.2.4(f): Sum of powers.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Statement",
              "content": "If $r \\in \\mathbb{R}, r \\neq 1$, then:\n$$1 + r + r^2 + ... + r^n = \\frac{1 - r^{n+1}}{1 - r}$$"
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof",
              "content": "Base Case n=1: $1+r = (1-r^2)/(1-r) = (1-r)(1+r)/(1-r) = 1+r$. True.",
              "proofSteps": [
                "Assume true for $k$: Sum $= \\frac{1-r^{k+1}}{1-r}$.",
                "Add $r^{k+1}$ to both sides.",
                "RHS: $\\frac{1-r^{k+1}}{1-r} + r^{k+1}$.",
                "Common denominator: $\\frac{1-r^{k+1} + r^{k+1}(1-r)}{1-r}$.",
                "Numerator: $1 - r^{k+1} + r^{k+1} - r^{k+2} = 1 - r^{k+2}$.",
                "Result: $\\frac{1 - r^{(k+1)+1}}{1-r}$."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-2-3",
      "title": "Applications: Divisibility & Inequalities",
      "description": "Advanced inductive proofs.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-2-divisibility",
          "title": "Divisibility",
          "description": "Example 1.2.4(c): Factors of powers.",
          "icon": "Divide",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Statement",
              "content": "For numbers $a, b$, prove that $a-b$ is a factor of $a^n - b^n$ for all $n$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof Strategy",
              "content": "Base n=1: $a-b$ divides $a^1-b^1$. Trivial.",
              "proofSteps": [
                "Assume $a-b$ divides $a^k - b^k$. So $a^k - b^k = (a-b)Q$.",
                "Consider $a^{k+1} - b^{k+1}$.",
                "Trick: Subtract and add $ab^k$.",
                "$a^{k+1} - ab^k + ab^k - b^{k+1}$.",
                "Factor groups: $a(a^k - b^k) + b^k(a - b)$.",
                "Substitute hypothesis: $a(a-b)Q + b^k(a-b)$.",
                "Factor out $(a-b)$: $(a-b)[aQ + b^k]$.",
                "Thus $a-b$ is a factor."
              ]
            }
          ]
        },
        {
          "id": "lesson-1-2-ineq",
          "title": "Inequalities",
          "description": "Example 1.2.4(d): 2^n growth.",
          "icon": "TrendingUp",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Statement",
              "content": "The inequality $2^n > 2n + 1$ is false for $n=1, 2$ ($2 > 3$ False, $4 > 5$ False).\n\nHowever, prove it is true for all $n \\ge 3$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof (Shifted Basis)",
              "content": "Base Case $n_0=3$: $2^3 = 8$. $2(3)+1 = 7$. $8 > 7$. True.",
              "proofSteps": [
                "Assume $2^k > 2k+1$ for some $k \\ge 3$.",
                "Multiply inequality by 2: $2^{k+1} > 4k + 2$.",
                "We want to show $2^{k+1} > 2(k+1) + 1 = 2k + 3$.",
                "Check relation between $4k+2$ and $2k+3$.",
                "$4k+2 = 2k + 3 + (2k - 1)$.",
                "Since $k \\ge 3$, $2k-1 > 0$.",
                "So $4k+2 > 2k+3$.",
                "By transitivity: $2^{k+1} > 4k+2 > 2k+3$."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-2-ex",
      "title": "Exercises 1.2",
      "description": "Complete problem set from Section 1.2.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "ex-1-2-sums",
          "title": "Summation Problems",
          "description": "Q1-5: Sums of fractions, cubes, and odd numbers.",
          "icon": "List",
          "slides": [
            {
              "id": "q1",
              "type": "proof",
              "title": "Q1: Sum of Fractions",
              "content": "Prove: $\\frac{1}{1\\cdot2} + \\frac{1}{2\\cdot3} + ... + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$",
              "proofSteps": [
                "Base n=1: $1/2 = 1/2$.",
                "Assume true for k. Add $\\frac{1}{(k+1)(k+2)}$.",
                "$\\frac{k}{k+1} + \\frac{1}{(k+1)(k+2)} = \\frac{k(k+2) + 1}{(k+1)(k+2)}$.",
                "Numerator: $k^2+2k+1 = (k+1)^2$.",
                "Result: $\\frac{(k+1)^2}{(k+1)(k+2)} = \\frac{k+1}{k+2}$."
              ]
            },
            {
              "id": "q2",
              "type": "proof",
              "title": "Q2: Sum of Cubes",
              "content": "Prove $1^3 + ... + n^3 = [\\frac{1}{2}n(n+1)]^2$.",
              "proofSteps": [
                "Base n=1: $1^3 = 1$. $[1(2)/2]^2 = 1$.",
                "Assume true for k. Add $(k+1)^3$.",
                "$[\\frac{k(k+1)}{2}]^2 + (k+1)^3 = (k+1)^2 [ \\frac{k^2}{4} + (k+1) ]$.",
                "Bracket: $\\frac{k^2 + 4k + 4}{4} = \\frac{(k+2)^2}{4}$.",
                "Result: $\\frac{(k+1)^2(k+2)^2}{4} = [\\frac{(k+1)(k+2)}{2}]^2$."
              ]
            },
            {
              "id": "q3",
              "type": "theory",
              "title": "Q3-Q5: Overview",
              "content": "Q3: $3 + 11 + ... + (8n-5) = 4n^2-n$.\nQ4: $1^2 + 3^2 + ... + (2n-1)^2 = (4n^3-n)/3$.\nQ5: $1^2 - 2^2 + 3^2 + ... + (-1)^{n+1}n^2 = (-1)^{n+1}n(n+1)/2$.\n\nThese follow the standard \"Add $(k+1)^{th}$ term to Formula(k)\" method."
            }
          ]
        },
        {
          "id": "ex-1-2-div",
          "title": "Divisibility Problems",
          "description": "Q6-9, Q17: Proving factors.",
          "icon": "Percent",
          "slides": [
            {
              "id": "q6",
              "type": "proof",
              "title": "Q6: Divisible by 6",
              "content": "Prove $n^3 + 5n$ is divisible by 6.",
              "proofSteps": [
                "Base n=1: $1+5=6$. Divisible.",
                "Assume $k^3 + 5k = 6m$.",
                "Step k+1: $(k+1)^3 + 5(k+1) = k^3 + 3k^2 + 3k + 1 + 5k + 5$.",
                "Group: $(k^3 + 5k) + (3k^2 + 3k + 6)$.",
                "First part is $6m$. Second part: $3k(k+1) + 6$.",
                "$k(k+1)$ is always even (say $2p$). So $3(2p) = 6p$.",
                "Total: $6m + 6p + 6 = 6(m+p+1)$."
              ]
            },
            {
              "id": "q7-8",
              "type": "theory",
              "title": "Q7 & Q8 Hints",
              "content": "**Q7:** $5^{2n} - 1$ divisible by 8.\nUse $5^{2(k+1)} - 1 = 25\\cdot5^{2k} - 1 = 25(5^{2k}-1) + 24$. Both divisible by 8.\n\n**Q8:** $5^n - 4n - 1$ divisible by 16.\nUse step $(k+1)$: $5(5^k) - 4(k+1) - 1$. Substitute $5^k = 16m + 4k + 1$."
            },
            {
              "id": "q9",
              "type": "theory",
              "title": "Q9: Cubic Sum",
              "content": "Prove $n^3 + (n+1)^3 + (n+2)^3$ is divisible by 9.\n\nExpansion of $(n+1)^3 + (n+2)^3 + (n+3)^3$ minus the $k^{th}$ case shows the difference is divisible by 9."
            }
          ]
        },
        {
          "id": "ex-1-2-conj",
          "title": "Conjectures & Inequalities",
          "description": "Q10-16, Q18: Finding patterns and bounds.",
          "icon": "Search",
          "slides": [
            {
              "id": "q10",
              "type": "quiz",
              "title": "Q10: Conjecture Formula",
              "content": "Find sum for $\\frac{1}{1\\cdot3} + \\frac{1}{3\\cdot5} + ... + \\frac{1}{(2n-1)(2n+1)}$.\n\nn=1: 1/3\nn=2: 1/3 + 1/15 = 6/15 = 2/5\nn=3: 2/5 + 1/35 = 15/35 = 3/7\n\nWhat is the pattern?",
              "options": [
                { "id": "1", "text": "$n / (2n+1)$", "isCorrect": true, "explanation": "Fits 1/3, 2/5, 3/7. Prove by induction." },
                { "id": "2", "text": "$1 / (2n+1)$", "isCorrect": false, "explanation": "" }
              ]
            },
            {
              "id": "q13",
              "type": "proof",
              "title": "Q13: $n < 2^n$",
              "content": "Prove $n < 2^n$ for all $n$.",
              "proofSteps": [
                "Base n=1: $1 < 2$.",
                "Assume $k < 2^k$.",
                "Step: $k+1$. We know $2^{k+1} = 2 \\cdot 2^k > 2k = k + k$.",
                "Since $k \\ge 1$, $k+k \\ge k+1$.",
                "Thus $2^{k+1} > k+1$."
              ]
            },
            {
              "id": "q14",
              "type": "proof",
              "title": "Q14: Factorial Inequality",
              "content": "Prove $2^n < n!$ for $n \\ge 4$.",
              "proofSteps": [
                "Base n=4: $16 < 24$.",
                "Assume $2^k < k!$.",
                "Consider $2^{k+1} = 2 \\cdot 2^k < 2 \\cdot k!$.",
                "Since $k \\ge 4$, we have $2 < k+1$.",
                "So $2 \\cdot k! < (k+1) \\cdot k! = (k+1)!$."
              ]
            }
          ]
        },
        {
          "id": "ex-1-2-advanced",
          "title": "Advanced Induction",
          "description": "Q19-20: Subsets and Fibonacci.",
          "icon": "Award",
          "slides": [
            {
              "id": "q19",
              "type": "theory",
              "title": "Q19: Subset Sums",
              "content": "Let $S \\subseteq \\mathbb{N}$ such that $2^k \\in S$ for all $k$, and if $k \\in S$ then $k-1 \\in S$.\n\n**Prove $S = \\mathbb{N}$:**\n1. By hypothesis, $1, 2, 4, 8...$ are in S.\n2. If $2^k \\in S$, then $2^k - 1, 2^k - 2, ...$ down to 1 are in S.\n3. Since natural numbers are unbounded, every $n$ is less than some $2^k$. Working backwards from $2^k$ reaches $n$."
            },
            {
              "id": "q20",
              "type": "theory",
              "title": "Q20: Fibonacci",
              "content": "Let $x_1=1, x_2=2, x_{n+2} = x_{n+1} + x_n$.\nProve $1 \\le x_n \\le 2^n$.\n\n**Use Strong Induction:**\nBase: $x_1=1, x_2=2$. Both $\\le 2^1, 2^2$.\nStep: Assume true for all $j \\le k$. Consider $x_{k+1} = x_k + x_{k-1}$.\n$x_{k+1} \\le 2^k + 2^{k-1} < 2^k + 2^k = 2^{k+1}$."
            }
          ]
        }
      ]
    }
  ]
};