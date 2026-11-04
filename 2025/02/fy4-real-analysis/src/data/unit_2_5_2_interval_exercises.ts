import { Unit } from '../types';

export const UNIT_2_5_2: Unit = {
  id: "unit-2-5-2",
  title: "Interval Exercises",
  description: "Exercises 1-9: Nested Intervals and Cantor Sets",
  color: "duo-gray",
  lessons: [
    {
      id: "les-2-5-2-ex1", title: "Exercise 1: Interval Subset", description: "When is [a, b] inside [c, d]?", icon: "Shrink",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "If $I := [a, b]$ and $I' := [a', b']$ are closed intervals in $\\mathbb{R}$, show that $I \\subseteq I'$ if and only if $a' \\le a$ and $b \\le b'$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume $I \\subseteq I'$ and prove endpoint inequalities.**", interactiveSteps: [
            { stepText: "Assume $I \\subseteq I'$. Since $a \\in I$, it must be that $a \\in I'$." },
            { prompt: "Since $a \\in [a', b']$, what does this imply?", options: [{ id: "A", text: "$a' \\le a \\le b'$", isCorrect: true, explanation: "Definition of belonging to the interval." }, { id: "B", text: "$a \\le a'$", isCorrect: false, explanation: "That would mean a is outside to the left." }], stepText: "So $a' \\le a$." },
            { stepText: "Similarly, $b \\in I \\implies b \\in I'$. Thus $a' \\le b \\le b'$. So $b \\le b'$." },
            { stepText: "We have proved $a' \\le a$ and $b \\le b'$. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Backward Direction", content: "**Goal: Assume inequalities, prove subset.**", interactiveSteps: [
            { stepText: "Assume $a' \\le a$ and $b \\le b'$. Let $x \\in I = [a, b]$." },
            { stepText: "Then $a \\le x \\le b$." },
            { prompt: "Using transitivity with our assumptions, bound x by a' and b'.", options: [{ id: "A", text: "$a' \\le x \\le b'$", isCorrect: true, explanation: "$a' \\le a \\le x \\le b \\le b'$." }, { id: "B", text: "$a \\le x \\le a'$", isCorrect: false, explanation: "Incorrect order." }], stepText: "Thus $x \\in [a', b'] = I'$. Therefore $I \\subseteq I'$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex2", title: "Exercise 2: Bounded Sets and Intervals", description: "Relating bounds to containing intervals", icon: "BoxSelect",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "If $S \\subseteq \\mathbb{R}$ is nonempty, show that $S$ is bounded if and only if there exists a closed bounded interval $I$ such that $S \\subseteq I$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward", content: "**Goal: Construct interval from bounds.**", interactiveSteps: [
            { stepText: "Assume $S$ is bounded. Then there exist lower bound $w$ and upper bound $u$." },
            { prompt: "Construct interval $I$.", options: [{ id: "A", text: "$I = [w, u]$", isCorrect: true, explanation: "This interval covers the range of S." }, { id: "B", text: "$I = [u, w]$", isCorrect: false, explanation: "Intervals are written [min, max]." }], stepText: "Let $I = [w, u]$. For any $s \\in S$, $w \\le s \\le u$, so $s \\in I$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Backward", content: "**Goal: Get bounds from interval.**", interactiveSteps: [
            { stepText: "Assume $S \\subseteq [a, b]$. Then for all $s \\in S$, $a \\le s \\le b$." },
            { stepText: "Thus $a$ is a lower bound and $b$ is an upper bound. So $S$ is bounded." }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex3", title: "Exercise 3: Approximating Sup/Inf", description: "Intervals of bounds", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "If $S \\subseteq \\mathbb{R}$ is a nonempty bounded set, and $I_S := [\\inf S, \\sup S]$, show that $S \\subseteq I_S$. \n\nMoreover, if $J$ is any closed bounded interval containing $S$, show that $I_S \\subseteq J$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the smallest interval property.**", interactiveSteps: [
            { stepText: "Part 1: Let $w = \\inf S$ and $u = \\sup S$. For any $s \\in S$, $w \\le s \\le u$ by definition. Thus $S \\subseteq [w, u] = I_S$." },
            { stepText: "Part 2: Let $J = [a, b]$ be a closed interval with $S \\subseteq J$." },
            { prompt: "Since all $s \\in S$ satisfy $s \\ge a$, what is $a$?", options: [{ id: "A", text: "A lower bound of S", isCorrect: true, explanation: "It is less than all elements." }, { id: "B", text: "An upper bound", isCorrect: false, explanation: "Incorrect." }], stepText: "So $a$ is a lower bound. Thus $a \\le \\inf S$ (since inf is greatest)." },
            { stepText: "Similarly, $b$ is an upper bound, so $\\sup S \\le b$." },
            { stepText: "Therefore $[\\inf S, \\sup S] \\subseteq [a, b]$, i.e., $I_S \\subseteq J$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex4", title: "Exercise 4: Why x, y exist", description: "Justifying steps in Theorem 2.5.1", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "In the proof of Case (ii) of Theorem 2.5.1 (S bounded above by b but not below), we claimed: 'if $z < b$, there exist $x, y \\in S$ such that $z \\in [x, y]$'. Explain why." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $x$ and $y$.**", interactiveSteps: [
            { stepText: "We need $y \\in S$ such that $z < y$. Since $z < b$ and $b = \\sup S$..." },
            { prompt: "Why does $y$ exist?", options: [{ id: "A", text: "$z$ is not an upper bound.", isCorrect: true, explanation: "If z < sup S, z cannot be an upper bound, so there's an element greater than it." }, { id: "B", text: "$z$ is a lower bound.", isCorrect: false, explanation: "Irrelevant." }], stepText: "So there exists $y \\in S$ with $y > z$." },
            { stepText: "We need $x \\in S$ such that $x < z$. Since $S$ is NOT bounded below..." },
            { stepText: "For any number $K$ (like $z$), there must be an element less than it. So there exists $x \\in S$ with $x < z$." },
            { stepText: "Thus $x < z < y$, meaning $z \\in [x, y]$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex5", title: "Exercise 5: Unbounded Intervals", description: "Completing Theorem 2.5.1", icon: "MoreHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Write out the details of the proof of Case (iv) in Theorem 2.5.1: If $S$ is neither bounded above nor below, then $S = \\mathbb{R}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show any real number z is in S.**", interactiveSteps: [
            { stepText: "Let $z \\in \\mathbb{R}$ be arbitrary." },
            { prompt: "Since $S$ is not bounded above, what exists?", options: [{ id: "A", text: "$y \\in S$ such that $y > z$", isCorrect: true, explanation: "No upper bound means we can exceed any number." }, { id: "B", text: "$y \\in S$ such that $y < z$", isCorrect: false, explanation: "That's not bounded below." }], stepText: "There exists $y \\in S$ with $y > z$." },
            { stepText: "Since $S$ is not bounded below, there exists $x \\in S$ with $x < z$." },
            { stepText: "Thus $x < z < y$. By the interval property of $S$, $[x, y] \\subseteq S$, so $z \\in S$." },
            { stepText: "Since $z$ was arbitrary, $S = \\mathbb{R} = (-\\infty, \\infty)$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex6", title: "Exercise 6: Nested Interval Containment", description: "Comparing endpoints", icon: "ChevronsRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "If $I_1 \\supseteq I_2 \\supseteq \\dots$ is a nested sequence of intervals where $I_n = [a_n, b_n]$, show that $a_1 \\le a_2 \\le \\dots \\le a_n \\le \\dots$ and $b_1 \\ge b_2 \\ge \\dots \\ge b_n \\ge \\dots$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use Exercise 1.**", interactiveSteps: [
            { stepText: "We are given $I_{n+1} \\subseteq I_n$." },
            { prompt: "From Exercise 1, what does $[a_{n+1}, b_{n+1}] \subseteq [a_n, b_n]$ imply?", options: [{ id: "A", text: "$a_n \\le a_{n+1}$ and $b_{n+1} \\le b_n$", isCorrect: true, explanation: "The inner interval must have tighter bounds." }, { id: "B", text: "$a_{n+1} \\le a_n$", isCorrect: false, explanation: "That would mean the inner interval extends further left." }], stepText: "So the sequence of left endpoints $a_n$ is increasing." },
            { stepText: "And the sequence of right endpoints $b_n$ is decreasing. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex7", title: "Exercise 7: Rational Intersection", description: "Nested intervals of rationals", icon: "Minimize2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Let $I_n := [0, 1/n]$ for $n \\in \\mathbb{N}$. Prove that $\\bigcap_{n=1}^\\infty I_n = \\{0\\}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show 0 is the only common element.**", interactiveSteps: [
            { stepText: "Clearly $0 \in I_n$ for all $n$, since $0 \\le 0 \\le 1/n$. Thus $\\{0\\} \subseteq \\bigcap I_n$." },
            { prompt: "Let $x > 0$. Does $x$ belong to the intersection?", options: [{ id: "A", text: "No, Archimedean Property.", isCorrect: true, explanation: "There exists n such that 1/n < x, so x is not in [0, 1/n]." }, { id: "B", text: "Yes, it's always smaller.", isCorrect: false, explanation: "Eventually the intervals get smaller than x." }], stepText: "If $x > 0$, there exists $n$ such that $1/n < x$. Thus $x \notin [0, 1/n] = I_n$. So $x$ is not in the intersection." },
            { stepText: "If $x < 0$, $x \notin I_1$, so not in intersection." },
            { stepText: "Thus only 0 remains. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex8", title: "Exercise 8: Empty Intersection (Open)", description: "Why closedness matters", icon: "CircleOff",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Let $J_n := (0, 1/n)$ for $n \\in \\mathbb{N}$. Prove that $\\bigcap_{n=1}^\\infty J_n = \\emptyset$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show no real number is in all $J_n$.**", interactiveSteps: [
            { stepText: "Let $x \in \\mathbb{R}$. If $x \\le 0$, $x \\notin J_1 = (0, 1)$, so $x$ is not in the intersection." },
            { prompt: "If $x > 0$, is it in the intersection?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Archimedean Property again: exists n with 1/n < x." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Eventually excluded." }], stepText: "For $x > 0$, find $n$ such that $1/n < x$. Then $x \notin (0, 1/n) = J_n$." },
            { stepText: "Since no real number satisfies the condition for all $n$, the intersection is empty. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-5-2-ex9", title: "Exercise 9: Empty Intersection (Unbounded)", description: "Why boundedness matters", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Let $K_n := (n, \\infty)$ for $n \\in \\mathbb{N}$. Prove that $\\bigcap_{n=1}^\\infty K_n = \\emptyset$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show no number is arbitrarily large.**", interactiveSteps: [
            { stepText: "Let $x \in \\mathbb{R}$. We want to know if $x \in (n, \\infty)$ for all $n$." },
            { prompt: "This would mean $x > n$ for all $n \\in \\mathbb{N}$. Is this possible?", options: [{ id: "A", text: "No, Archimedean Property.", isCorrect: true, explanation: "N is not bounded above by x." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Reals are finite." }], stepText: "There exists $n_x \in \\mathbb{N}$ such that $n_x \ge x$." },
            { stepText: "Thus $x \notin (n_x, \\infty) = K_{n_x}$. So the intersection is empty. Goal reached!" }
        ]}
      ]
    }
  ]
};