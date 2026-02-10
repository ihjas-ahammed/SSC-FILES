import { Section } from '../types';

export const SECTION_2_2: Section = {
  "id": "section-2-2",
  "title": "Section 2.2: Absolute Value and the Real Line",
  "description": "Understanding distance, magnitude, and neighborhoods on the real line.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-2-2-1",
      "title": "Absolute Value",
      "description": "Definition and basic algebraic properties.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-2-def",
          "title": "Definition & Basic Properties",
          "description": "Def 2.2.1 & Thm 2.2.2: Magnitude of a number.",
          "icon": "Maximize",
          "slides": [
            {
              "id": "s1-def",
              "type": "theory",
              "title": "Definition 2.2.1",
              "content": "From the Trichotomy Property, for any $a \\in \\mathbb{R}$, exactly one of $a$ or $-a$ is positive (unless $a=0$).\n\nThe **absolute value** $|a|$ is defined as:\n\n$$|a| := \\begin{cases} a & \\text{if } a > 0 \\\\ 0 & \\text{if } a = 0 \\\\ -a & \\text{if } a < 0 \\end{cases}$$\n\nIt represents the magnitude of $a$."
            },
            {
              "id": "s2-thm-2-2-2",
              "type": "theory",
              "title": "Theorem 2.2.2: Properties",
              "content": "For any $a, b \\in \\mathbb{R}$:\n\n*   (a) $|ab| = |a||b|$\n*   (b) $|a|^2 = a^2$\n*   (c) If $c \\ge 0$, then $|a| \\le c \\iff -c \\le a \\le c$.\n*   (d) $-|a| \\le a \\le |a|$"
            },
            {
              "id": "s3-proof-c",
              "type": "proof",
              "title": "Proof of 2.2.2(c)",
              "content": "Prove $|a| \\le c \\iff -c \\le a \\le c$.",
              "proofSteps": [
                "**Forward ($|a| \\le c \\implies -c \\le a \\le c$):**",
                "If $|a| \\le c$, then since $a \\le |a|$ and $-a \\le |a|$, we have $a \\le c$ and $-a \\le c$.",
                "$-a \\le c$ implies $a \\ge -c$. Thus $-c \\le a \\le c$.",
                "**Reverse ($-c \\le a \\le c \\implies |a| \\le c$):**",
                "If $-c \\le a \\le c$, then $a \\le c$ and $-a \\le c$.",
                "Since $|a|$ is either $a$ or $-a$, in both cases $|a| \\le c$."
              ]
            }
          ]
        },
        {
          "id": "lesson-2-2-triangle",
          "title": "The Triangle Inequality",
          "description": "Theorem 2.2.3: The most famous inequality.",
          "icon": "Triangle",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "Theorem 2.2.3: Triangle Inequality",
              "content": "For any $a, b \\in \\mathbb{R}$:\n\n$$|a + b| \\le |a| + |b|$$\n\nIdeally, the \"straight path\" ($a+b$) is shorter or equal to the \"detour\" via origin ($|a|+|b|$)."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof of Triangle Inequality",
              "content": "We use the property $-|x| \\le x \\le |x|$.",
              "proofSteps": [
                "We have $-|a| \\le a \\le |a|$ and $-|b| \\le b \\le |b|$.",
                "Add them: $-(|a| + |b|) \\le a + b \\le |a| + |b|$.",
                "Let $c = |a| + |b|$. Then $-c \\le a+b \\le c$.",
                "By Thm 2.2.2(c), this implies $|a+b| \\le c = |a| + |b|$."
              ]
            },
            {
              "id": "s3-corollary",
              "type": "theory",
              "title": "Corollary 2.2.4",
              "content": "Useful variations derived from the Triangle Inequality:\n\n*   (a) $||a| - |b|| \\le |a - b|$\n*   (b) $|a - b| \\le |a| + |b|$"
            },
            {
              "id": "s4-proof-cor",
              "type": "proof",
              "title": "Proof of ||a| - |b|| <= |a - b|",
              "content": "Apply Triangle Inequality cleverly.",
              "proofSteps": [
                "Write $a = a - b + b$.",
                "$|a| = |(a-b) + b| \\le |a-b| + |b|$.",
                "Rearrange: $|a| - |b| \\le |a-b|$.",
                "Swap a and b: $|b| - |a| \\le |b-a| = |a-b|$.",
                "Since both $X$ and $-X$ are $\\le |a-b|$, then $|X| \\le |a-b|$."
              ]
            }
          ]
        },
        {
          "id": "lesson-2-2-solving",
          "title": "Solving Inequalities",
          "description": "Example 2.2.6: Finding solution sets.",
          "icon": "Search",
          "slides": [
            {
              "id": "s1-ex-a",
              "type": "theory",
              "title": "Example 2.2.6(a)",
              "content": "Solve $|2x + 3| < 7$.\n\nUsing Thm 2.2.2(c) ($|u|<c \\iff -c<u<c$):\n$-7 < 2x + 3 < 7$.\nSubtract 3: $-10 < 2x < 4$.\nDivide by 2: $-5 < x < 2$.\n\nSolution Set: $\\{x \\in \\mathbb{R} : -5 < x < 2\\}$."
            },
            {
              "id": "s2-ex-b",
              "type": "theory",
              "title": "Example 2.2.6(b)",
              "content": "Solve $|x - 1| < |x|$.\n\nMethod: Square both sides (valid since both positive).\n$|x-1|^2 < |x|^2 \\implies (x-1)^2 < x^2$.\n$x^2 - 2x + 1 < x^2$.\n$-2x + 1 < 0$.\n$1 < 2x \\implies x > 1/2$.\n\nSolution Set: $\\{x \\in \\mathbb{R} : x > 1/2\\}$."
            },
            {
              "id": "q-check",
              "type": "quiz",
              "title": "Check Your Skill",
              "content": "Solve $|x| \\le 2$.",
              "options": [
                { "id": "1", "text": "$x \\le 2$", "isCorrect": false, "explanation": "This allows -5, but |-5|=5 > 2." },
                { "id": "2", "text": "$-2 \\le x \\le 2$", "isCorrect": true, "explanation": "Definition of absolute value inequality." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-2-2",
      "title": "The Real Line & Neighborhoods",
      "description": "Geometric interpretation and topology basics.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-2-distance",
          "title": "The Real Line",
          "description": "Visualizing distance.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-dist",
              "type": "theory",
              "title": "Distance",
              "content": "The distance between two real numbers $a$ and $b$ is given by $|a - b|$.\n\nGeometric Interpretation:\n*   $|a|$ is distance from origin 0.\n*   $|a-b|$ is length of segment between a and b."
            },
            {
              "id": "q-dist",
              "type": "quiz",
              "title": "Calculate Distance",
              "content": "What is the distance between -2 and 3?",
              "options": [
                { "id": "1", "text": "1", "isCorrect": false, "explanation": "That's 3 + (-2)." },
                { "id": "2", "text": "5", "isCorrect": true, "explanation": "$|(-2) - 3| = |-5| = 5$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-2-neighborhood",
          "title": "Neighborhoods",
          "description": "Definition 2.2.7: Describing 'closeness'.",
          "icon": "Circle",
          "slides": [
            {
              "id": "s1-def",
              "type": "theory",
              "title": "Definition 2.2.7: $\\varepsilon$-Neighborhood",
              "content": "Let $a \\in \\mathbb{R}$ and $\\varepsilon > 0$.\n\nThe $\\varepsilon$-neighborhood of $a$ is the set $V_\\varepsilon(a)$ defined by:\n$$V_\\varepsilon(a) := \\{x \\in \\mathbb{R} : |x - a| < \\varepsilon\\}$$\n\nThis is equivalent to the open interval $(a - \\varepsilon, a + \\varepsilon)$."
            },
            {
              "id": "s2-theorem",
              "type": "theory",
              "title": "Theorem 2.2.8",
              "content": "Let $a \\in \\mathbb{R}$. If $x$ belongs to the neighborhood $V_\\varepsilon(a)$ for **every** $\\varepsilon > 0$, then $x = a$.\n\nThis connects to Theorem 2.1.9: if $|x-a|$ is smaller than any positive number, it must be 0."
            },
            {
              "id": "q-neighbor",
              "type": "quiz",
              "title": "Visualization",
              "content": "If $x \\in V_\\varepsilon(a)$, how far can $x$ be from $a$?",
              "options": [
                { "id": "1", "text": "Exactly $\\varepsilon$", "isCorrect": false, "explanation": "The inequality is strict (<)." },
                { "id": "2", "text": "Less than $\\varepsilon$", "isCorrect": true, "explanation": "$|x-a| < \\varepsilon$." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-2-ex",
      "title": "Exercises 2.2",
      "description": "Practice with absolute values and neighborhoods.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "ex-2-2-easy",
          "title": "Basic Calculations",
          "description": "Q1, Q3, Q5: Evaluating absolute values.",
          "icon": "Edit3",
          "slides": [
            {
              "id": "q1",
              "type": "theory",
              "title": "Exercise 1",
              "content": "If $a, b \\in \\mathbb{R}$ and $b \\neq 0$, show that:\n(a) $|a| = \\sqrt{a^2}$\n(b) $|a/b| = |a|/|b|$\n\n**Hint:** For (a), consider cases $a \\ge 0$ and $a < 0$. Since $\\sqrt{x}$ denotes the non-negative root, $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$."
            },
            {
              "id": "q5",
              "type": "quiz",
              "title": "Exercise 5",
              "content": "Find $x$ such that $|x - 1| < b$ is equivalent to $a < x < b$. Interpret geometrically.",
              "options": [
                { "id": "1", "text": "This is impossible.", "isCorrect": false, "explanation": "" },
                { "id": "2", "text": "Requires $b$ to represent neighborhood radius.", "isCorrect": true, "explanation": "Actually, the question is usually: If $a < x < b$, finding center and radius. Center = $(a+b)/2$, Radius = $(b-a)/2$." }
              ]
            }
          ]
        },
        {
          "id": "ex-2-2-ineq",
          "title": "Inequality Solving",
          "description": "Q6-10: Finding solution sets.",
          "icon": "CheckSquare",
          "slides": [
            {
              "id": "q6a",
              "type": "theory",
              "title": "Exercise 6(a)",
              "content": "Solve $|4x - 5| \\le 13$.\n\n$-13 \\le 4x - 5 \\le 13$.\n$-8 \\le 4x \\le 18$.\n$-2 \\le x \\le 4.5$."
            },
            {
              "id": "q6b",
              "type": "theory",
              "title": "Exercise 6(b)",
              "content": "Solve $|x^2 - 1| \\le 3$.\n\n$-3 \\le x^2 - 1 \\le 3$.\n$-2 \\le x^2 \\le 4$.\n\nSince $x^2 \\ge 0$, the left part $-2 \\le x^2$ is always true.\nSo we just need $x^2 \\le 4 \\implies |x| \\le 2 \\implies -2 \\le x \\le 2$."
            }
          ]
        },
        {
          "id": "ex-2-2-adv",
          "title": "Advanced Proofs",
          "description": "Q12, Q16, Q17: Neighborhood properties.",
          "icon": "Award",
          "slides": [
            {
              "id": "q12",
              "type": "proof",
              "title": "Exercise 12",
              "content": "Find all $x$ satisfying $|x| + |x+1| < 2$.",
              "proofSteps": [
                "Case 1: $x \\ge 0$. Then $x + x+1 < 2 \\implies 2x < 1 \\implies x < 1/2$. Interval: $[0, 1/2)$.",
                "Case 2: $-1 \\le x < 0$. Then $-x + (x+1) < 2 \\implies 1 < 2$. Always true. Interval: $[-1, 0)$.",
                "Case 3: $x < -1$. Then $-x - (x+1) < 2 \\implies -2x - 1 < 2 \\implies -2x < 3 \\implies x > -1.5$. Interval: $(-1.5, -1)$.",
                "Union: $(-1.5, 0.5)$."
              ]
            },
            {
              "id": "q17",
              "type": "theory",
              "title": "Exercise 17: Disjoint Neighborhoods",
              "content": "Show that if $a \\neq b$, there exist $\\varepsilon$-neighborhoods $U$ of $a$ and $V$ of $b$ such that $U \\cap V = \\emptyset$.\n\n**Strategy:** Let $\\varepsilon = |a-b|/2$. The neighborhoods will touch at the midpoint but usually we pick $\\varepsilon < |a-b|/2$ to have a gap, or open intervals don't contain the endpoint so touching is fine."
            }
          ]
        }
      ]
    }
  ]
};