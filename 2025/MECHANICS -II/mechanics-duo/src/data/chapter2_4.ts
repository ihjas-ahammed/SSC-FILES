import { Section } from '../types';

export const SECTION_2_4: Section = {
  "id": "section-2-4",
  "title": "Section 2.4: Applications of Supremum",
  "description": "Archimedean Property, Existence of Roots, and Density of Rationals.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-2-4-1",
      "title": "The Archimedean Property",
      "description": "The integers are unbounded in the reals.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-4-archimedean",
          "title": "Archimedean Property",
          "description": "Theorem 2.4.3: $\\mathbb{N}$ has no upper bound.",
          "icon": "ArrowUp",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Theorem 2.4.3",
              "content": "If $x \\in \\mathbb{R}$, then there exists $n_x \\in \\mathbb{N}$ such that $x \\le n_x$.\n\nIn simpler terms: The set of natural numbers $\\mathbb{N}$ is not bounded above in $\\mathbb{R}$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof by Contradiction",
              "content": "Assume $\\mathbb{N}$ IS bounded above.",
              "proofSteps": [
                "By the Completeness Property, $\\mathbb{N}$ must have a supremum $u = \\sup \\mathbb{N}$.",
                "Since $u$ is the *least* upper bound, $u-1$ is NOT an upper bound.",
                "So there exists $m \\in \\mathbb{N}$ such that $u-1 < m$.",
                "This implies $u < m+1$.",
                "But $m+1 \\in \\mathbb{N}$, so $m+1 \\le u$ (since $u$ is an upper bound).",
                "Contradiction: $u < m+1 \\le u$."
              ]
            },
            {
              "id": "s3-consequences",
              "type": "theory",
              "title": "Corollaries (2.4.4 - 2.4.6)",
              "content": "Useful forms of Archimedean Property:\n\n1.  If $y > 0$, there exists $n \\in \\mathbb{N}$ such that $1/n < y$. (Infimum of $\{1/n\}$ is 0).\n2.  If $y > 0$, there exists $n \\in \\mathbb{N}$ such that $n-1 \\le y < n$."
            },
            {
              "id": "q-limit",
              "type": "quiz",
              "title": "Concept Check",
              "content": "Does the set $\\{1/n : n \\in \\mathbb{N}\\}$ contain 0?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "1 divided by a finite number is never exactly 0." },
                { "id": "2", "text": "No", "isCorrect": true, "explanation": "But 0 is the infimum of the set." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-4-2",
      "title": "Existence of Square Roots",
      "description": "Proving $\\sqrt{2}$ exists in $\\mathbb{R}$.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-4-root2",
          "title": "Theorem 2.4.7: $\\sqrt{2}$",
          "description": "Constructing the number whose square is 2.",
          "icon": "Zap",
          "slides": [
            {
              "id": "s1-goal",
              "type": "theory",
              "title": "The Goal",
              "content": "We know $\\sqrt{2}$ is not rational (Thm 2.1.4). Now we use the Supremum Property to prove there IS a real number $x$ such that $x^2 = 2$."
            },
            {
              "id": "s2-set",
              "type": "theory",
              "title": "Defining the Set",
              "content": "Let $S = \\{s \\in \\mathbb{R} : 0 \\le s, s^2 < 2\\}$.\n\n1.  **Non-empty:** $1 \\in S$ since $1^2 = 1 < 2$.\n2.  **Bounded Above:** If $t > 2$, then $t^2 > 4 > 2$, so $t \\notin S$. Thus 2 is an upper bound.\n\nTherefore, $x = \\sup S$ exists."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Proof that $x^2 = 2$",
              "content": "We rule out $x^2 < 2$ and $x^2 > 2$.",
              "proofSteps": [
                "**Case 1 ($x^2 < 2$):** We can find a small $n$ such that $(x + 1/n)^2 < 2$. This puts $x+1/n$ in $S$, contradicting that $x$ is the *supremum* (upper bound).",
                "**Case 2 ($x^2 > 2$):** We can find $m$ such that $(x - 1/m)^2 > 2$. This makes $x-1/m$ an upper bound smaller than $x$, contradicting that $x$ is the *least* upper bound.",
                "**Conclusion:** Must have $x^2 = 2$."
              ]
            },
            {
              "id": "q-root-uniq",
              "type": "quiz",
              "title": "Uniqueness",
              "content": "How many positive real numbers square to 2?",
              "options": [
                { "id": "1", "text": "Exactly one", "isCorrect": true, "explanation": "If $y > x$, $y^2 > x^2 = 2$. If $0 < y < x$, $y^2 < 2$." },
                { "id": "2", "text": "Two", "isCorrect": false, "explanation": "The other root is negative ($-\\sqrt{2}$)." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-4-3",
      "title": "Density of Rational Numbers",
      "description": "Rationals are everywhere.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-4-density",
          "title": "The Density Theorem",
          "description": "Theorem 2.4.8: Rationals between Reals.",
          "icon": "MoreHorizontal",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Theorem 2.4.8",
              "content": "If $x$ and $y$ are any real numbers with $x < y$, then there exists a rational number $r \\in \\mathbb{Q}$ such that $x < r < y$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof Strategy",
              "content": "We need $r = m/n$. So we need $x < m/n < y$, or $nx < m < ny$.",
              "proofSteps": [
                "Since $y-x > 0$, by Archimedean Property, choose $n$ such that $n(y-x) > 1$.",
                "This ensures the gap between $nx$ and $ny$ is wider than 1.",
                "Therefore, an integer $m$ must exist inside that gap.",
                "Divide by $n$ to get the result."
              ]
            },
            {
              "id": "s3-corollary",
              "type": "theory",
              "title": "Corollary 2.4.9: Irrationals",
              "content": "If $x < y$, there also exists an **irrational** number $z$ such that $x < z < y$.\n\nProof idea: Apply Density Theorem to $x/\\sqrt{2}$ and $y/\\sqrt{2}$."
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-4-ex",
      "title": "Exercises 2.4",
      "description": "Practice with Sup and Density.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "ex-2-4-sup",
          "title": "Supremum Problems",
          "description": "Q1, Q4: Calculating Sup.",
          "icon": "Edit3",
          "slides": [
            {
              "id": "q1",
              "type": "theory",
              "title": "Exercise 1",
              "content": "Show that $\\sup \\{1 - 1/n : n \\in \\mathbb{N}\\} = 1$.\n\n$1$ is clearly an upper bound (since $1/n > 0$).\nFor any $\\epsilon > 0$, we can find $n$ such that $1/n < \\epsilon$. Then $1 - 1/n > 1 - \\epsilon$.\nSo 1 is the *least* upper bound."
            },
            {
              "id": "q4",
              "type": "theory",
              "title": "Exercise 4",
              "content": "Let $S = \\{u \\in \\mathbb{R} : u^3 < 2\\}$. Show $\\sup S = 2^{1/3}$.\n\nThis follows the exact logic of Theorem 2.4.7 ($\\sqrt{2}$). If $x^3 < 2$, we can nudge it up. If $x^3 > 2$, we can nudge it down."
            }
          ]
        },
        {
          "id": "ex-2-4-density",
          "title": "Density Problems",
          "description": "Q19: Density of dyadic rationals.",
          "icon": "Grid",
          "slides": [
            {
              "id": "q19",
              "type": "proof",
              "title": "Exercise 19",
              "content": "Show numbers of the form $m/2^n$ are dense in $\\mathbb{R}$.",
              "proofSteps": [
                "Given $x < y$, we want $m/2^n$ in $(x,y)$.",
                "Choose $n$ large enough so $1/2^n < y - x$.",
                "Then the steps of size $1/2^n$ are smaller than the gap width.",
                "One of these steps must land inside the interval."
              ]
            }
          ]
        }
      ]
    }
  ]
};