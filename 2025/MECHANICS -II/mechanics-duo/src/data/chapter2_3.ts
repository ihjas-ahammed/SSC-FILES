import { Section } from '../types';

export const SECTION_2_3: Section = {
  "id": "section-2-3",
  "title": "Section 2.3: The Completeness Property",
  "description": "The defining property of Real Numbers: Supremum and Infimum.",
  "color": "duo-red",
  "units": [
    {
      "id": "unit-2-3-1",
      "title": "Supremum & Infimum",
      "description": "Bounds, Least Upper Bounds, and Greatest Lower Bounds.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-2-3-bounds",
          "title": "Upper & Lower Bounds",
          "description": "Definition 2.3.1: Bounded sets.",
          "icon": "ArrowUp",
          "slides": [
            {
              "id": "s1-upper",
              "type": "theory",
              "title": "Upper Bound",
              "content": "Let $S$ be a nonempty subset of $\\mathbb{R}$.\n\n*   The set $S$ is **bounded above** if there exists a number $u \\in \\mathbb{R}$ such that $s \\le u$ for all $s \\in S$.\n*   Each such number $u$ is called an **upper bound** of $S$."
            },
            {
              "id": "s2-lower",
              "type": "theory",
              "title": "Lower Bound",
              "content": "*   The set $S$ is **bounded below** if there exists a number $w \\in \\mathbb{R}$ such that $w \\le s$ for all $s \\in S$.\n*   Each such number $w$ is called a **lower bound** of $S$."
            },
            {
              "id": "s3-bounded",
              "type": "theory",
              "title": "Bounded Set",
              "content": "A set is **bounded** if it is both bounded above AND bounded below.\n\nExample: The interval $(0, 1)$ is bounded. The set $\\mathbb{N}$ is bounded below (by 1) but not above."
            },
            {
              "id": "q-bound-check",
              "type": "quiz",
              "title": "Check",
              "content": "Is the set $S = \\{x^2 : x \\in \\mathbb{R}\\}$ bounded?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "It goes to infinity." },
                { "id": "2", "text": "No", "isCorrect": true, "explanation": "It is bounded below (by 0) but not above." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-3-sup-inf",
          "title": "Supremum (Least Upper Bound)",
          "description": "Definition 2.3.2: The exact limit of a set.",
          "icon": "Maximize",
          "slides": [
            {
              "id": "s1-sup-def",
              "type": "theory",
              "title": "Definition: Supremum",
              "content": "If $S$ is bounded above, a number $u$ is a **supremum** (or least upper bound) of $S$ if:\n1.  $u$ is an upper bound of $S$.\n2.  If $v$ is any upper bound of $S$, then $u \\le v$.\n\nNotation: $u = \\sup S$."
            },
            {
              "id": "s2-inf-def",
              "type": "theory",
              "title": "Definition: Infimum",
              "content": "If $S$ is bounded below, a number $w$ is an **infimum** (or greatest lower bound) of $S$ if:\n1.  $w$ is a lower bound of $S$.\n2.  If $t$ is any lower bound of $S$, then $t \\le w$.\n\nNotation: $w = \\inf S$."
            },
            {
              "id": "q-sup-ex",
              "type": "quiz",
              "title": "Example",
              "content": "What is $\\sup \\{x \\in \\mathbb{R} : x < 2\\}$?",
              "options": [
                { "id": "1", "text": "1.999...", "isCorrect": false, "explanation": "That is just 2." },
                { "id": "2", "text": "2", "isCorrect": true, "explanation": "2 is an upper bound, and nothing smaller than 2 is an upper bound." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-3-2",
      "title": "Properties of Supremum",
      "description": "The Epsilon Lemma and Completeness Axiom.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-2-3-epsilon",
          "title": "The Epsilon Lemma",
          "description": "Lemma 2.3.3 & 2.3.4: Approximating the Sup.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1-lemma",
              "type": "theory",
              "title": "Lemma 2.3.3",
              "content": "A number $u$ is the supremum of a nonempty set $S$ if and only if:\n1.  $s \\le u$ for all $s \\in S$.\n2.  For every $\\varepsilon > 0$, there exists an $s_\\varepsilon \\in S$ such that $u - \\varepsilon < s_\\varepsilon$.\n\n**Meaning:** You can get arbitrarily close to the supremum from inside the set."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof of Lemma",
              "content": "Assume $u = \\sup S$.",
              "proofSteps": [
                "Let $\\varepsilon > 0$. Then $u - \\varepsilon < u$.",
                "Since $u$ is the *least* upper bound, $u - \\varepsilon$ is NOT an upper bound.",
                "Therefore, there must be some element in $S$ greater than $u - \\varepsilon$.",
                "Call this element $s_\\varepsilon$. Thus $u - \\varepsilon < s_\\varepsilon$."
              ]
            }
          ]
        },
        {
          "id": "lesson-2-3-completeness",
          "title": "The Completeness Property",
          "description": "2.3.6: The axiom that makes R continuous.",
          "icon": "ShieldCheck",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "The Completeness Property of R",
              "content": "**Every nonempty set of real numbers that has an upper bound has a supremum in $\\mathbb{R}$.**\n\nThis property fills in the \"gaps\" that exist in the rational numbers $\\mathbb{Q}$. For example, $S = \\{r \\in \\mathbb{Q} : r^2 < 2\\}$ has a supremum in $\\mathbb{R}$ (which is $\\sqrt{2}$), but no supremum in $\\mathbb{Q}$."
            },
            {
              "id": "s2-inf-prop",
              "type": "theory",
              "title": "Infimum Property",
              "content": "Similarly: Every nonempty set of real numbers that has a lower bound has an infimum in $\\mathbb{R}$.\n\nProof: If $S$ is bounded below, the set $-S = \\{-s : s \\in S\\}$ is bounded above. $\\inf S = -\\sup(-S)$."
            },
            {
              "id": "q-rational-gap",
              "type": "quiz",
              "title": "Understanding Gaps",
              "content": "Why is $\\mathbb{Q}$ not complete?",
              "options": [
                { "id": "1", "text": "It doesn't contain $\\pi$.", "isCorrect": false, "explanation": "True, but the definition refers to the existence of supremums for bounded sets." },
                { "id": "2", "text": "Bounded sets of rationals (like approximations of $\\sqrt{2}$) don't always have a rational supremum.", "isCorrect": true, "explanation": "The sup would be $\\sqrt{2}$, which is not in $\\mathbb{Q}$." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-3-3",
      "title": "Applications of Supremum",
      "description": "Suprema of functions and algebraic combinations.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-2-3-add-sets",
          "title": "Adding Sets",
          "description": "Example 2.4.1(a): Sup(A+B).",
          "icon": "Plus",
          "slides": [
            {
              "id": "s1-def",
              "type": "theory",
              "title": "Sum of Sets",
              "content": "If $A$ and $B$ are sets, define $A+B = \\{a+b : a \\in A, b \\in B\\}$.\n\n**Theorem:** $\\sup(A+B) = \\sup A + \\sup B$."
            },
            {
              "id": "s2-proof-1",
              "type": "proof",
              "title": "Proof Part 1: Upper Bound",
              "content": "Let $u = \\sup A$ and $v = \\sup B$.",
              "proofSteps": [
                "For any $x \\in A+B$, $x = a+b$.",
                "$a \\le u$ and $b \\le v$.",
                "So $a+b \\le u+v$.",
                "Thus $u+v$ is an upper bound for $A+B$. So $\\sup(A+B) \\le u+v$."
              ]
            },
            {
              "id": "s2-proof-2",
              "type": "proof",
              "title": "Proof Part 2: Least Upper Bound",
              "content": "Show no number smaller than $u+v$ is an upper bound.",
              "proofSteps": [
                "Let $\\varepsilon > 0$.",
                "Exist $a \\in A$ with $u - \\varepsilon/2 < a$.",
                "Exist $b \\in B$ with $v - \\varepsilon/2 < b$.",
                "Add them: $u+v - \\varepsilon < a+b$.",
                "Since $a+b \\in A+B$, $u+v-\\varepsilon$ is not an upper bound.",
                "Thus $\\sup(A+B) = u+v$."
              ]
            }
          ]
        },
        {
          "id": "lesson-2-3-funcs",
          "title": "Supremum of Functions",
          "description": "Example 2.4.2: Sup(f+g).",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Functions",
              "content": "If $f(x) \\le g(x)$ for all $x$, then $\\sup f \\le \\sup g$. \n\nHowever, for $\\sup(f+g)$, we only have:\n$$\\sup(f+g) \\le \\sup f + \\sup g$$\nEquality does not always hold because the maximums of $f$ and $g$ might occur at different points."
            },
            {
              "id": "q-func-sup",
              "type": "quiz",
              "title": "Example",
              "content": "Let $f(x)=x$ and $g(x)=-x$ on $[0,1]$.\n$\\sup f = 1$, $\\sup g = 0$. Sum = 1.\nWhat is $\\sup(f+g)$?",
              "options": [
                { "id": "1", "text": "1", "isCorrect": false, "explanation": "$f(x)+g(x) = x-x = 0$." },
                { "id": "2", "text": "0", "isCorrect": true, "explanation": "$f+g$ is the zero function. $0 < 1$, so strict inequality holds." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-3-ex",
      "title": "Exercises 2.3",
      "description": "Problems on bounds and suprema.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "ex-2-3-calc",
          "title": "Calculating Sup/Inf",
          "description": "Q1-4: Finding bounds for specific sets.",
          "icon": "Calculator",
          "slides": [
            {
              "id": "q1",
              "type": "quiz",
              "title": "Exercise 1",
              "content": "Let $S_1 = \\{x \\in \\mathbb{R} : x \\ge 0\\}$. Does $\\inf S_1$ exist? Does $\\sup S_1$ exist?",
              "options": [
                { "id": "1", "text": "Inf = 0, Sup = Does not exist", "isCorrect": true, "explanation": "Bounded below by 0, unbounded above." },
                { "id": "2", "text": "Inf = 0, Sup = $\\infty$", "isCorrect": false, "explanation": "Technically sup does not exist in R (infinity is not in R)." }
              ]
            },
            {
              "id": "q4",
              "type": "theory",
              "title": "Exercise 4: $(-1)^n/n$",
              "content": "Let $S_4 = \\{1 - (-1)^n/n : n \\in \\mathbb{N}\\}$.\n\nValues: $1 - (-1) = 2$ (n=1), $1 - 1/2 = 0.5$ (n=2), $1 - (-1/3) = 1.33$, $1 - 1/4 = 0.75$.\nSequence oscillates around 1.\n\n$\\inf S_4 = 0.5$ (at n=2).\n$\\sup S_4 = 2$ (at n=1)."
            }
          ]
        },
        {
          "id": "ex-2-3-proofs",
          "title": "Proofs with Sup",
          "description": "Q6, Q7: Properties of bounds.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "q6",
              "type": "proof",
              "title": "Exercise 6: Sup Subset",
              "content": "Let $S$ be bounded non-empty. Let $S_0 \\subseteq S$ be non-empty. Show $\\inf S \\le \\inf S_0 \\le \\sup S_0 \\le \\sup S$.",
              "proofSteps": [
                "Since $S_0 \\subseteq S$, every upper bound of $S$ is an upper bound of $S_0$.",
                "Therefore, the least upper bound of $S$ ($\\sup S$) is $\\ge$ the least upper bound of $S_0$ ($\\sup S_0$).",
                "So $\\sup S_0 \\le \\sup S$.",
                "Similarly for infimums (inequality flips)."
              ]
            }
          ]
        }
      ]
    }
  ]
};