import { Unit } from '../types';

export const UNIT_2_2_2: Unit = {
  id: "unit-2-2-2",
  title: "Neighborhoods",
  description: "Solving inequalities and defining neighborhoods",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-2-2-1", title: "Example 2.2.6(a): Solving Inequalities", description: "Applying absolute value rules to intervals", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2.2.6(a)", content: "Determine the set $A$ of $x \\in \\mathbb{R}$ such that $|2x + 3| < 7$.\n\n*Try solving it algebraically before proceeding!*" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the interval for x.**", interactiveSteps: [
            { stepText: "Recall Theorem 2.2.2(c): $|a| < c \\iff -c < a < c$." },
            { prompt: "Apply this to our inequality $|2x + 3| < 7$. What does it become?", options: [{ id: "A", text: "$-7 < 2x + 3 < 7$", isCorrect: true, explanation: "This sets up a compound inequality." }, { id: "B", text: "$2x + 3 < 7$", isCorrect: false, explanation: "This ignores the negative boundary." }], stepText: "It becomes $-7 < 2x + 3 < 7$." },
            { stepText: "Subtract 3 from all parts of the inequality to isolate the $2x$ term." },
            { stepText: "This gives $-10 < 2x < 4$." },
            { stepText: "Divide by 2 to solve for $x$: $-5 < x < 2$." },
            { stepText: "So $A = \\{x \\in \\mathbb{R} : -5 < x < 2\\}$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Numerical Check", content: "What is the largest integer that satisfies $|2x + 3| < 7$?", numericAnswer: 1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-2-2", title: "Example 2.2.6(b): Double Absolute Value", description: "Solving |x - 1| < |x|", icon: "Scissors",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2.2.6(b)", content: "Determine the set $B := \\{x \\in \\mathbb{R} : |x - 1| < |x|\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution: Method of Squaring", content: "**Goal: Use properties of squares to remove absolute values.**", interactiveSteps: [
            { stepText: "Since both sides are $\\ge 0$, we can square the inequality without changing its meaning: $|x - 1|^2 < |x|^2$." },
            { prompt: "Recall that $|a|^2 = a^2$. What does our inequality become?", options: [{ id: "A", text: "$(x - 1)^2 < x^2$", isCorrect: true, explanation: "The absolute value signs drop out completely when squared!" }, { id: "B", text: "$x^2 - 1 < x^2$", isCorrect: false, explanation: "You must square the entire quantity (x-1)." }], stepText: "It becomes $(x - 1)^2 < x^2$." },
            { stepText: "Expand the left side: $x^2 - 2x + 1 < x^2$." },
            { stepText: "Subtract $x^2$ from both sides: $-2x + 1 < 0$." },
            { stepText: "Solve for $x$: $1 < 2x \\implies x > 1/2$." },
            { stepText: "Thus, $B = \\{x \\in \\mathbb{R} : x > 1/2\\}$. Goal reached!" }
        ]},
        { id: "s2", type: "interactive_canvas", title: "Visualizing the Solution", content: "Look at the graphs of $y = |x|$ and $y = |x-1|$. The inequality asks where the red line ($|x-1|$) is UNDER the blue line ($|x|$).", interactiveCanvasId: "absolute-value-canvas" }
      ]
    },
    {
      id: "les-2-2-2-3", title: "Definition 2.2.7: Epsilon Neighborhoods", description: "Formalizing closeness", icon: "Maximize",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If someone asks for all numbers 'within a distance of 2 from the number 5', what is the range?", options: [{ id: "A", text: "Between 3 and 7", isCorrect: true, explanation: "5 - 2 = 3, 5 + 2 = 7." }, { id: "B", text: "Between -2 and 2", isCorrect: false, explanation: "You must center it at 5." }] },
        { id: "s1", type: "theory", title: "Definition 2.2.7: Neighborhoods", content: "Let $a \\in \\mathbb{R}$ and $\\varepsilon > 0$ (epsilon). \n\nThen the **$\\varepsilon$-neighborhood** of $a$ is the set:\n$$V_\\varepsilon(a) := \\{x \\in \\mathbb{R} : |x - a| < \\varepsilon\\}$$\n\nThis is equivalent to saying $x$ belongs to the open interval $(a - \\varepsilon, a + \\varepsilon)$.\n\n$- \\varepsilon < x - a < \\varepsilon \\iff a - \\varepsilon < x < a + \\varepsilon$" },
        { id: "s2", type: "interactive_canvas", title: "Visualizing Epsilon Neighborhoods", content: "Change $\\varepsilon$ to see how the neighborhood $V_\\varepsilon(a)$ expands and contracts.", interactiveCanvasId: "epsilon-neighborhood-canvas" },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "The interval representation of $V_\\varepsilon(a)$ is an ___ interval.", blankAnswer: "open" }
      ]
    },
    {
      id: "les-2-2-2-4", title: "Theorem 2.2.8: Intersection of Neighborhoods", description: "When closeness implies equality", icon: "Crosshair",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a number $x$ is within a distance of 0.1 from 5, and also within 0.001 from 5, and within EVERY possible positive distance from 5, what must $x$ be?", options: [{ id: "A", text: "5", isCorrect: true, explanation: "Only 5 is infinitely close to 5." }, { id: "B", text: "4.99999", isCorrect: false, explanation: "4.99999 fails for a distance of 0.0000001." }] },
        { id: "s1", type: "theory", title: "Theorem 2.2.8", content: "**Theorem 2.2.8:** Let $a \\in \\mathbb{R}$. If $x$ belongs to the neighborhood $V_\\varepsilon(a)$ for *every* $\\varepsilon > 0$, then $x = a$.\n\nThis is a geometric rephrasing of Theorem 2.1.9 ($0 \\le |x-a| < \\varepsilon \\implies |x-a|=0$). It is incredibly important in limits and calculus." },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Prove $x = a$ given the neighborhood condition.**", interactiveSteps: [
            { stepText: "By definition, $x \\in V_\\varepsilon(a)$ means $|x - a| < \\varepsilon$." },
            { stepText: "The hypothesis states this is true for EVERY $\\varepsilon > 0$." },
            { prompt: "Since $|x - a|$ is an absolute value, what is its minimum possible value?", options: [{ id: "A", text: "0", isCorrect: true, explanation: "Absolute values are non-negative." }, { id: "B", text: "$-\\varepsilon$", isCorrect: false, explanation: "Absolute values can't be negative." }], stepText: "Thus, we know $0 \\le |x - a| < \\varepsilon$ for all $\\varepsilon > 0$." },
            { stepText: "By Theorem 2.1.9, any non-negative number smaller than every positive $\\varepsilon$ must be exactly 0." },
            { stepText: "Therefore, $|x - a| = 0$, which implies $x = a$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-2-5", title: "Example 2.2.9: Subsets and Neighborhoods", description: "Containing neighborhoods within sets", icon: "BoxSelect",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2.2.9 (a & b)", content: "(a) Let $U := (0, 1)$. If $a \\in U$, show that there exists an $\\varepsilon$-neighborhood of $a$ entirely contained in $U$.\n(b) Let $I := [0, 1]$. Show that for $a=0$, no $\\varepsilon$-neighborhood $V_\\varepsilon(0)$ is fully contained in $I$." },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Find an $\\varepsilon$ that keeps $V_\\varepsilon(a)$ inside $(0, 1)$.**", interactiveSteps: [
            { stepText: "We are given $a \\in (0, 1)$, meaning $0 < a < 1$." },
            { prompt: "What are the distances from $a$ to the endpoints 0 and 1?", options: [{ id: "A", text: "$a$ and $1-a$", isCorrect: true, explanation: "Distance to 0 is a-0=a. Distance to 1 is 1-a." }, { id: "B", text: "$a$ and $a-1$", isCorrect: false, explanation: "a-1 would be negative." }], stepText: "The distances are $a$ and $1-a$." },
            { stepText: "To avoid spilling over the edges, we must pick an $\\varepsilon$ smaller than both distances." },
            { stepText: "Let $\\varepsilon = \\min(a, 1-a)$. Then $V_\\varepsilon(a) = (a-\\varepsilon, a+\\varepsilon)$ will strictly stay between 0 and 1. Goal reached!" }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Show $V_\\varepsilon(0)$ spills out of $[0, 1]$.**", interactiveSteps: [
            { stepText: "Consider the neighborhood $V_\\varepsilon(0)$ for any $\\varepsilon > 0$. This is the interval $(-\\varepsilon, \\varepsilon)$." },
            { prompt: "Does this interval contain numbers not in $[0, 1]$?", options: [{ id: "A", text: "Yes, negative numbers", isCorrect: true, explanation: "Any number slightly less than 0 is in the neighborhood but not in I." }, { id: "B", text: "No", isCorrect: false, explanation: "It spans from -e to +e." }], stepText: "Yes, it contains negative numbers." },
            { stepText: "For example, $x = -\\varepsilon/2$ is in $V_\\varepsilon(0)$ but not in $[0, 1]$. Thus, $V_\\varepsilon(0) \\not\\subseteq I$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-2-6", title: "Example 2.2.9(c): Adding Neighborhoods", description: "How epsilon errors compound", icon: "PlusSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2.2.9 (c)", content: "If $x \\in V_\\varepsilon(a)$ and $y \\in V_\\varepsilon(b)$, show that $(x+y)$ belongs to the $2\\varepsilon$-neighborhood of $(a+b)$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Bound the distance between $(x+y)$ and $(a+b)$.**", interactiveSteps: [
            { stepText: "We are given $|x - a| < \\varepsilon$ and $|y - b| < \\varepsilon$." },
            { stepText: "We want to evaluate the distance $|(x + y) - (a + b)|$." },
            { prompt: "How can we regroup the terms inside the absolute value to use what we know?", options: [{ id: "A", text: "$|(x - a) + (y - b)|$", isCorrect: true, explanation: "Group x with a, and y with b." }, { id: "B", text: "$|(x - b) + (y - a)|$", isCorrect: false, explanation: "We don't know the distance between x and b." }], stepText: "Regroup: $|(x - a) + (y - b)|$." },
            { stepText: "By the Triangle Inequality (Theorem 2.2.3), $|(x - a) + (y - b)| \\le |x - a| + |y - b|$." },
            { stepText: "Since $|x - a| < \\varepsilon$ and $|y - b| < \\varepsilon$, their sum is strictly less than $\\varepsilon + \\varepsilon = 2\\varepsilon$." },
            { stepText: "Thus $|(x + y) - (a + b)| < 2\\varepsilon$, meaning $(x+y) \\in V_{2\\varepsilon}(a+b)$. Goal reached!" }
        ]}
      ]
    }
  ]
};