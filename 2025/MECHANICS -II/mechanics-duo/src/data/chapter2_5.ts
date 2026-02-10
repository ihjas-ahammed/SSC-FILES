import { Section } from '../types';

export const SECTION_2_5: Section = {
  "id": "section-2-5",
  "title": "Section 2.5: Intervals",
  "description": "Topology of the real line: Nested Intervals and Binary Representations.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-2-5-1",
      "title": "Characterization of Intervals",
      "description": "What exactly defines an interval?",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-5-char",
          "title": "Defining Intervals",
          "description": "Theorem 2.5.1: The Betweenness Property.",
          "icon": "Minimize",
          "slides": [
            {
              "id": "s1-notation",
              "type": "theory",
              "title": "Interval Notation",
              "content": "Recall standard notation:\n*   Open: $(a, b) = \\{x : a < x < b\\}$\n*   Closed: $[a, b] = \\{x : a \\le x \\le b\\}$\n*   Half-open: $[a, b)$, $(a, b]$\n*   Infinite rays: $(a, \\infty)$, $(-\\infty, b]$, etc."
            },
            {
              "id": "s2-theorem",
              "type": "theory",
              "title": "Theorem 2.5.1: Characterization",
              "content": "A subset $S$ of $\\mathbb{R}$ is an **interval** if and only if:\n\nFor any $x, y \\in S$ with $x < y$, if $z$ satisfies $x < z < y$, then $z \\in S$.\n\nBasically, an interval has no \"holes\"."
            },
            {
              "id": "q-check",
              "type": "quiz",
              "title": "Concept Check",
              "content": "Is the set $S = [0, 1] \\cup [2, 3]$ an interval?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "It is a union of two intervals." },
                { "id": "2", "text": "No", "isCorrect": true, "explanation": "Take $x=1, y=2$. $1.5$ is between them but NOT in $S$." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-5-2",
      "title": "Nested Intervals",
      "description": "Sequences of intervals contracting to a point.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-5-nested",
          "title": "Nested Intervals Property",
          "description": "Theorem 2.5.2 & 2.5.3: Intersection of closed intervals.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1-def",
              "type": "theory",
              "title": "Nested Sequence",
              "content": "A sequence of intervals $I_n$ is **nested** if:\n$$I_1 \\supseteq I_2 \\supseteq I_3 \\supseteq ...$$"
            },
            {
              "id": "s2-theorem",
              "type": "theory",
              "title": "Theorem 2.5.2",
              "content": "If $I_n = [a_n, b_n]$ is a nested sequence of **closed, bounded** intervals, then there exists a number $\\xi$ such that $\\xi \\in I_n$ for all $n$.\n\nProof idea: Let $\\xi = \\sup \\{a_n\\}$. It must be $\\le$ all $b_n$."
            },
            {
              "id": "s3-uniqueness",
              "type": "theory",
              "title": "Theorem 2.5.3: Uniqueness",
              "content": "If, in addition, the lengths of the intervals approach zero ($\\inf(b_n - a_n) = 0$), then the common element $\\xi$ is **unique**."
            },
            {
              "id": "q-open-nested",
              "type": "quiz",
              "title": "Warning",
              "content": "Does this hold for open intervals like $J_n = (0, 1/n)$?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "" },
                { "id": "2", "text": "No", "isCorrect": true, "explanation": "The intersection is empty. The limit 0 is not in any of the intervals." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-5-3",
      "title": "Uncountability of R",
      "description": "Proving real numbers are uncountable.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-5-cantor-2",
          "title": "Uncountability of R",
          "description": "Theorem 2.5.4: Cantor's second proof.",
          "icon": "Hash",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Theorem 2.5.4",
              "content": "The set $\\mathbb{R}$ of real numbers is **uncountable**.\n\nWe will prove the interval $[0, 1]$ is uncountable using Nested Intervals."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof by Contradiction",
              "content": "Assume $I = [0, 1]$ is countable. Enumerate it: $x_1, x_2, x_3, ...$",
              "proofSteps": [
                "Divide $I$ into 3 subintervals. Choose one, $I_1$, that does NOT contain $x_1$.",
                "Divide $I_1$ into 3. Choose $I_2 \\subseteq I_1$ that does NOT contain $x_2$.",
                "Continue: Choose $I_n$ avoiding $x_n$.",
                "By Nested Interval Property, there is a point $\\xi \\in \\bigcap I_n$.",
                "$\;\\xi \\neq x_1$ (since $\\xi \\in I_1$), $\\xi \\neq x_2$, etc.",
                "So $\\xi$ is a real number not in our 'complete' list. Contradiction."
              ]
            }
          ]
        },
        {
          "id": "lesson-2-5-binary",
          "title": "Binary Representations",
          "description": "Decimal and Binary expansions.",
          "icon": "Code",
          "slides": [
            {
              "id": "s1-binary",
              "type": "theory",
              "title": "Binary Representation",
              "content": "We can represent any $x \\in [0, 1]$ using a sequence of 0s and 1s, obtained by repeatedly bisecting the interval.\n\n$x = (.a_1 a_2 a_3 ...)_2 = \\sum_{n=1}^\\infty \\frac{a_n}{2^n}$"
            },
            {
              "id": "q-uniq",
              "type": "quiz",
              "title": "Uniqueness",
              "content": "Is the binary representation always unique?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "Example: $0.1000...$ (1/2) is the same as $0.0111...$" },
                { "id": "2", "text": "No", "isCorrect": true, "explanation": "Numbers ending in infinite 1s are equivalent to terminating binaries." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-5-ex",
      "title": "Exercises 2.5",
      "description": "Practice with Intervals.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "ex-2-5-proofs",
          "title": "Interval Proofs",
          "description": "Q2, Q3: Set logic.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "q2",
              "type": "theory",
              "title": "Exercise 2",
              "content": "If $S \\subseteq \\mathbb{R}$ is nonempty, show that $S$ is bounded if and only if there exists a closed bounded interval $I$ such that $S \\subseteq I$.\n\n**Hint:** If $S$ is bounded, it has $\\inf S$ and $\\sup S$. Let $I = [\\inf S, \\sup S]$."
            },
            {
              "id": "q3",
              "type": "theory",
              "title": "Exercise 3",
              "content": "Why is the intersection of a nested sequence of OPEN intervals sometimes empty?\n\nConsider $I_n = (0, 1/n)$.\nIf $x > 0$, by Archimedean property, there is $n$ such that $1/n < x$, so $x \\notin I_n$.\n$0$ is not in any interval.\nSo intersection is empty."
            }
          ]
        }
      ]
    }
  ]
};