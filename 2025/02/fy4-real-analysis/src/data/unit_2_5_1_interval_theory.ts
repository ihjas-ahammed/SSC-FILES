import { Unit } from '../types';

export const UNIT_2_5_1: Unit = {
  id: "unit-2-5-1",
  title: "Interval Theory",
  description: "Characterization, Nested Intervals, and Uncountability",
  color: "duo-gray",
  lessons: [
    {
      id: "les-2-5-1-t1", title: "Theorem 2.5.1: Characterization of Intervals", description: "Defining intervals by property", icon: "Minus",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a set $S$ has the property that for any two points $x, y \\in S$, every point between them is also in $S$, what shape is $S$?", options: [{ id: "A", text: "An interval", isCorrect: true, explanation: "This 'connectedness' property characterizes intervals." }, { id: "B", text: "A rational set", isCorrect: false, explanation: "Rationals have holes." }] },
        { id: "s1", type: "theory", title: "Characterization Theorem", content: "**Theorem 2.5.1:** If $S$ is a subset of $\\mathbb{R}$ that contains at least two points and has the property\n\n*If $x, y \\in S$ and $x < y$, then $[x, y] \\subseteq S$,*\n\nthen $S$ is an interval." },
        { id: "s2", type: "proof", title: "Interactive Proof: Bounded Case", content: "**Goal: Show that if $S$ is bounded, $S$ equals $(a, b)$, $[a, b]$, etc.**", interactiveSteps: [
            { stepText: "Let $a = \\inf S$ and $b = \\sup S$." },
            { prompt: "We want to show $(a, b) \\subseteq S$. Let $z$ be any number such that $a < z < b$. Why must there be elements of $S$ on both sides of $z$?", options: [{ id: "A", text: "Because $a, b$ are bounds.", isCorrect: true, explanation: "Since $a$ is infimum, there's an $x \\in S$ with $x < z$. Since $b$ is supremum, there's a $y \\in S$ with $z < y$." }, { id: "B", text: "Because $z \\in S$.", isCorrect: false, explanation: "We don't know that yet." }], stepText: "Thus, there exist $x, y \\in S$ such that $x < z < y$." },
            { stepText: "By the hypothesis, since $x, y \\in S$, the entire interval $[x, y] \\subseteq S$." },
            { stepText: "Since $z \\in [x, y]$, $z \\in S$. Thus every point in $(a, b)$ is in $S$. The endpoints $a, b$ may or may not be in $S$, determining if it's open, closed, or half-open." }
        ]}
      ]
    },
    {
      id: "les-2-5-1-t2", title: "Theorem 2.5.2: Nested Intervals Property", description: "Intersections of shrinking sets", icon: "Minimize2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If you have a sequence of closed intervals $[a_n, b_n]$ where each is inside the previous one, will their intersection be empty?", options: [{ id: "A", text: "No, there is at least one common point.", isCorrect: true, explanation: "This is a key property of R relying on Completeness." }, { id: "B", text: "Yes, eventually.", isCorrect: false, explanation: "Not if they are closed and bounded." }] },
        { id: "s1", type: "theory", title: "Nested Intervals Property", content: "**Theorem 2.5.2:** If $I_n = [a_n, b_n]$, $n \\in \\mathbb{N}$, is a nested sequence of closed bounded intervals (meaning $I_1 \\supseteq I_2 \\supseteq \\dots$), then there exists a number $\\xi \\in \\mathbb{R}$ such that $\\xi \\in I_n$ for all $n \\in \\mathbb{N}$." },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Find the common point.**", interactiveSteps: [
            { stepText: "Since the intervals are nested, $I_n \\subseteq I_1$, so $a_n \\le b_1$ for all $n$." },
            { stepText: "The set of left endpoints $A = \\{a_n : n \\in \\mathbb{N}\\}$ is bounded above (by $b_1$). Let $\\xi = \\sup A$." },
            { prompt: "We claim $\\xi$ is the common point. Is $\\xi \\ge a_n$ for all $n$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "By definition of supremum." }, { id: "B", text: "No", isCorrect: false, explanation: "Supremum is an upper bound." }], stepText: "Yes, $a_n \\le \\xi$ for all $n$." },
            { stepText: "We also need $\\xi \\le b_n$. It can be shown that every $b_n$ is an upper bound for the set $A$. Thus $\\xi \\le b_n$." },
            { stepText: "Since $a_n \\le \\xi \\le b_n$, $\\xi \\in [a_n, b_n]$ for all $n$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-1-fig1", title: "Figure 2.5.1: Visualizing Nested Intervals", description: "Canvas exploration", icon: "Eye",
      slides: [
        { id: "s0", type: "interactive_canvas", title: "Zooming In", content: "Observe how the intervals $I_n$ nest inside each other, converging towards a common point.", interactiveCanvasId: "nested-intervals-canvas" },
        { id: "s1", type: "fill_in_blank", title: "Concept Check", content: "For the Nested Intervals Property to hold, the intervals must be closed and ___.", blankAnswer: "bounded" }
      ]
    },
    {
      id: "les-2-5-1-t3", title: "Theorem 2.5.3: Unique Common Point", description: "When the intersection is a singleton", icon: "Target",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If the lengths of the nested intervals shrink to zero, how many points are in the intersection?", options: [{ id: "A", text: "Exactly one", isCorrect: true, explanation: "The intervals squeeze onto a single real number." }, { id: "B", text: "Infinitely many", isCorrect: false, explanation: "That happens if the length limit is > 0." }] },
        { id: "s1", type: "theory", title: "Theorem 2.5.3", content: "If $I_n = [a_n, b_n]$ is a nested sequence of closed bounded intervals such that $\\inf\\{b_n - a_n : n \\in \\mathbb{N}\\} = 0$, then the number $\\xi$ contained in all $I_n$ is unique." },
        { id: "s2", type: "proof", title: "Interactive Proof: Uniqueness", content: "**Goal: Prove by contradiction.**", interactiveSteps: [
            { stepText: "Assume there are two distinct points $\\xi$ and $\\eta$ in the intersection." },
            { stepText: "Then both points are in every $I_n$. Thus the length of $I_n$ must be at least the distance $|\\xi - \\eta|$." },
            { prompt: "Let $\\varepsilon = |\\xi - \\eta| > 0$. What does the hypothesis say?", options: [{ id: "A", text: "Length approaches 0", isCorrect: true, explanation: "The infimum of lengths is 0." }, { id: "B", text: "Length approaches $\\varepsilon$", isCorrect: false, explanation: "Hypothesis says inf is 0." }], stepText: "Since $\\inf(b_n - a_n) = 0$, there must be an interval with length less than $\\varepsilon$." },
            { stepText: "But we just said every interval must be larger than $\\varepsilon$. Contradiction! Thus $\\xi = \\eta$." }
        ]}
      ]
    },
    {
      id: "les-2-5-1-t4", title: "Theorem 2.5.4: Uncountability of R", description: "Cantor's Proof using Intervals", icon: "Infinity",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Is it possible to list every single real number in a sequence $x_1, x_2, x_3, \\dots$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Real numbers are uncountable." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Cantor proved otherwise." }] },
        { id: "s1", type: "theory", title: "Theorem 2.5.4: Uncountability", content: "**Theorem:** The set $\\mathbb{R}$ of real numbers is not countable.\n\n*Proof Strategy:* Assume $\\mathbb{R}$ is countable (can be listed). We will construct a nested sequence of intervals $I_n$ such that the $n$-th number in the list is NOT in $I_n$. The intersection of these intervals will contain a point that wasn't in our list." },
        { id: "s2", type: "proof", title: "Interactive Proof: Cantor's Interval Method", content: "**Goal: Construct a point not in the enumeration.**", interactiveSteps: [
            { stepText: "Assume $I = [0, 1]$ is countable: $I = \\{x_1, x_2, \\dots\\}$." },
            { stepText: "Divide $I$ into 3 subintervals. Choose one, call it $I_1$, that does NOT contain $x_1$." },
            { stepText: "Divide $I_1$ into 3 subintervals. Choose $I_2$ such that it does NOT contain $x_2$." },
            { prompt: "Continuing this, we get nested closed intervals $I_n$ such that...", options: [{ id: "A", text: "$x_n \\notin I_n$", isCorrect: true, explanation: "We deliberately avoid the nth element at step n." }, { id: "B", text: "$x_n \\in I_n$", isCorrect: false, explanation: "We avoid it." }], stepText: "We have a nested sequence of closed bounded intervals. By Theorem 2.5.2, there is a point $\\xi \\in \\bigcap I_n$." },
            { stepText: "Is $\\xi = x_k$ for any $k$? No, because $\\xi \\in I_k$, but we constructed $I_k$ specifically to exclude $x_k$. Thus $\\xi$ is a real number not in our list. Contradiction!" }
        ]}
      ]
    }
  ]
};