import { Unit } from '../types';

export const UNIT_4_3_2: Unit = {
  id: "unit-4-3-2",
  title: "Infinity Theory",
  description: "Limits at Infinity and Infinite Limits at Infinity",
  color: "duo-red",
  lessons: [
    {
      id: "les-4-3-2-d10", title: "Definition 4.3.10: Limits at Infinity", description: "Horizontal Asymptotes", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "When we evaluate the limit as $x \\to \\infty$, what are we looking at geometrically?", options: [{ id: "A", text: "The far right tail of the graph", isCorrect: true, explanation: "We are looking for a horizontal asymptote as x gets infinitely large." }, { id: "B", text: "A vertical spike in the graph", isCorrect: false, explanation: "That would be an infinite limit at a finite point c." }] },
        { id: "s1", type: "theory", title: "Definition 4.3.10: Limits at Infinity", content: "Let $(a, \\infty) \\subseteq A$. We say $L \\in \\mathbb{R}$ is a **limit of $f$ as $x \\to \\infty$**, and write $\\lim_{x \\to \\infty} f(x) = L$, if given any $\\epsilon > 0$, there exists a number $K = K(\\epsilon) > a$ such that for any $x > K$, then $|f(x) - L| < \\epsilon$.\n\n*Notice how identical this is to the definition of a limit of a sequence $(x_n)$, just replacing the integer index $n$ with a continuous real variable $x$!*" }
      ]
    },
    {
      id: "les-4-3-2-t11", title: "Theorem 4.3.11: Sequential Criterion", description: "Connecting x -> infinity to n -> infinity", icon: "List",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.3.11", content: "**Theorem:** $\\lim_{x \\to \\infty} f = L$ if and only if for *every* sequence $(x_n)$ in $(a, \\infty)$ such that $\\lim(x_n) = \\infty$, the sequence $(f(x_n))$ converges to $L$.\n\nThis means if you plug any sequence that marches off to infinity (like $n$, $n^2$, $2^n$) into the function, the resulting outputs must settle down to the same limit $L$." },
        { id: "s1", type: "example_q", title: "Example: 1/x", content: "Let $g(x) = 1/x$. As $x \\to \\infty$, we can choose $K > 1/\\epsilon$. Then for $x > K$, $|1/x - 0| = 1/x < 1/K < \\epsilon$.\nThus $\\lim_{x \\to \\infty} 1/x = 0$." }
      ]
    },
    {
      id: "les-4-3-2-d13", title: "Definition 4.3.13: Infinite limits at infinity", description: "When both variables blow up", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Infinite Limits at Infinity", content: "We can combine the two concepts: $x \\to \\infty$ and $f(x) \\to \\infty$.\n\nWe write $\\lim_{x \\to \\infty} f = \\infty$ if for every $\\alpha \\in \\mathbb{R}$ (the vertical target), there exists $K > a$ (the horizontal threshold) such that for any $x > K$, then $f(x) > \\alpha$.\n\nIn plain English: If you want the function to be larger than ANY number $\\alpha$, you just need to walk far enough to the right (past $K$)." },
        { id: "s1", type: "fill_in_blank", title: "Concept Check", content: "To prove $\\lim_{x \\to \\infty} x^2 = \\infty$, for a given $\\alpha > 0$, we can choose $K = \\sqrt{___}$.", blankAnswer: "\\alpha" }
      ]
    },
    {
      id: "les-4-3-2-t14", title: "Theorem 4.3.14: Sequential Criterion", description: "Sequences that blow up mapped to sequences that blow up", icon: "Activity",
      slides: [
        { id: "s0", type: "theory", title: "Sequential Criterion for Infinite Limits at Infinity", content: "**Theorem:** $\\lim_{x \\to \\infty} f = \\infty$ if and only if for every sequence $(x_n)$ such that $\\lim(x_n) = \\infty$, then $\\lim(f(x_n)) = \\infty$.\n\nThis is completely analogous to the previous sequential criteria." }
      ]
    },
    {
      id: "les-4-3-2-t15", title: "Theorem 4.3.15: Limit Comparison", description: "Comparing growth rates as x -> infinity", icon: "Scale",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.3.15: Limit Comparison", content: "Suppose $f, g: A \\to \\mathbb{R}$ and $(a, \\infty) \\subseteq A$. Suppose $g(x) > 0$ for all $x > a$ and that:\n$$\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L \\neq 0$$\n\n(i) If $L > 0$, then $\\lim_{x \\to \\infty} f = \\infty$ if and only if $\\lim_{x \\to \\infty} g = \\infty$.\n(ii) If $L < 0$, then $\\lim_{x \\to \\infty} f = -\\infty$ if and only if $\\lim_{x \\to \\infty} g = \\infty$.\n\n*This means $f$ and $g$ grow at the same relative 'speed' at infinity.*" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (i)", content: "**Goal: Bound $f(x)$ by a multiple of $g(x)$.**", interactiveSteps: [
            { stepText: "Since $L > 0$ and the quotient goes to $L$, there exists an $a_1 > a$ where the quotient is tightly bound around $L$." },
            { prompt: "Specifically, we can bound the quotient by $L/2$ and $3L/2$. This yields what inequality for $f(x)$?", options: [{ id: "A", text: "$\\frac{L}{2} g(x) < f(x) < \\frac{3L}{2} g(x)$", isCorrect: true, explanation: "Multiply the bounds by $g(x)$, which is positive." }, { id: "B", text: "$f(x) < L g(x)$", isCorrect: false, explanation: "L is the limit, the actual value fluctuates around it." }], stepText: "We have $\\frac{L}{2} g(x) < f(x) < \\frac{3L}{2} g(x)$ for all $x > a_1$." },
            { stepText: "If $\\lim g = \\infty$, then since $f(x) > \\frac{L}{2}g(x)$ and $L/2 > 0$, the Squeeze Theorem for infinity forces $\\lim f = \\infty$." },
            { stepText: "If $\\lim f = \\infty$, then since $g(x) > \\frac{2}{3L} f(x)$, it forces $\\lim g = \\infty$. Goal reached!" }
        ]}
      ]
    }
  ]
};