import { Unit } from '../types';

export const UNIT_1_3_4: Unit = {
  id: "unit-1-3-4",
  title: "Countability Exercises",
  description: "Exercises 7-13: Diagonals, Power Sets, and Subsets",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-4-ex7", title: "Exercise 7: Denumerable Equivalence", description: "Bijections between denumerable sets", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Prove that a set $T_1$ is denumerable if and only if there is a bijection from $T_1$ onto a denumerable set $T_2$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use composition of bijections.**", interactiveSteps: [
            { stepText: "Forward: Assume $T_1$ is denumerable. By definition, there is a bijection $f: \\mathbb{N} \\to T_1$." },
            { stepText: "We can simply pick $T_2 = \\mathbb{N}$. Since $\\mathbb{N}$ is denumerable and $f^{-1}: T_1 \\to \\mathbb{N}$ is a bijection, we have proved the forward direction." },
            { stepText: "Backward: Assume there is a bijection $g: T_1 \\to T_2$, and $T_2$ is denumerable." },
            { prompt: "Since $T_2$ is denumerable, what exists?", options: [{ id: "A", text: "A bijection $h: \\mathbb{N} \\to T_2$", isCorrect: true, explanation: "Definition of denumerable." }, { id: "B", text: "A bijection to the reals", isCorrect: false, explanation: "Reals are uncountable." }], stepText: "There is a bijection $h: \\mathbb{N} \\to T_2$." },
            { stepText: "To show $T_1$ is denumerable, we need a bijection from $\\mathbb{N}$ to $T_1$. The composition $g^{-1} \\circ h : \\mathbb{N} \\to T_1$ is a bijection. Thus $T_1$ is denumerable. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-3-4-ex8", title: "Exercise 8: Infinite Union of Finite Sets", description: "Countable unions", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Give an example of a countable collection of finite sets whose union is not finite." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Construct the sets $A_n$.**", interactiveSteps: [
            { stepText: "We need an infinite sequence of sets $A_1, A_2, A_3 \\dots$ where each individual $A_n$ is finite." },
            { prompt: "What is the simplest finite set we can make for an integer $n$?", options: [{ id: "A", text: "A set with just one element: $\\{n\\}$", isCorrect: true, explanation: "A singleton set is obviously finite." }, { id: "B", text: "The set of all integers up to n", isCorrect: false, explanation: "Also works, but {n} is simpler." }], stepText: "Let $A_n = \\{n\\}$ for every $n \\in \\mathbb{N}$." },
            { stepText: "Each $A_n$ is finite (size 1). The collection is countable (indexed by $\\mathbb{N}$)." },
            { stepText: "The union $\\bigcup_{n=1}^\\infty A_n = \\{1, 2, 3, \\dots\\} = \\mathbb{N}$, which is infinite! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-1-3-4-ex9", title: "Exercise 9: Union of Denumerable Sets", description: "Weaving two infinite sets together", icon: "GitMerge",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Prove in detail that if $S$ and $T$ are denumerable, then $S \\cup T$ is denumerable." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Build a new sequence that covers both.**", interactiveSteps: [
            { stepText: "Since $S$ and $T$ are denumerable, we can list them as sequences: $S = \\{s_1, s_2, s_3 \\dots\\}$ and $T = \\{t_1, t_2, t_3 \\dots\\}$." },
            { prompt: "How can we create a single list that includes elements from both without getting stuck in one?", options: [{ id: "A", text: "Interleave them: $s_1, t_1, s_2, t_2 \\dots$", isCorrect: true, explanation: "Alternating guarantees every element from both is eventually reached." }, { id: "B", text: "List all of S, then all of T", isCorrect: false, explanation: "You will never reach the end of S to start T." }], stepText: "We define a new sequence $U$: $u_{2n-1} = s_n$ and $u_{2n} = t_n$." },
            { stepText: "This creates a surjection from $\\mathbb{N}$ onto $S \\cup T$. By Theorem 1.3.10, if there is a surjection from $\\mathbb{N}$ onto a set, the set is countable." },
            { stepText: "Since $S \\cup T$ contains the infinite set $S$, it cannot be finite. A set that is countable and infinite is, by definition, denumerable. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-3-4-ex10", title: "Exercise 10: Diagonal Counting Formula", description: "Calculating exact positions on the grid", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** The counting function for $\\mathbb{N} \\times \\mathbb{N}$ is $h(m,n) = \\frac{1}{2}(m+n-2)(m+n-1) + m$.\n\n(a) If $(m,n)$ is the 6th point down the 9th diagonal, calculate its number.\n(b) Given that $h(m,3) = 19$, find $m$." },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Determine $m$ and $n$, then evaluate $h$.**", interactiveSteps: [
            { stepText: "The textbook defines the $k$-th diagonal by $k = m + n - 1$. So for the 9th diagonal, $m + n - 1 = 9 \\implies m + n = 10$." },
            { prompt: "We move 'downward' by increasing $m$. So the 1st point is $m=1$, the 2nd is $m=2$. What is $m$ for the 6th point?", options: [{ id: "A", text: "6", isCorrect: true, explanation: "The m-coordinate exactly tracks the position down the diagonal." }, { id: "B", text: "5", isCorrect: false, explanation: "We start at m=1." }], stepText: "Thus, $m = 6$. Since $m+n=10$, $n=4$." },
            { stepText: "Plug into the formula: $h(6,4) = \\frac{1}{2}(8)(9) + 6$." },
            { stepText: "$\\frac{1}{2}(72) + 6 = 36 + 6 = 42$." }
        ]},
        { id: "s2", type: "numerical", title: "Check (a)", content: "What is $h(6,4)$?", numericAnswer: 42, numericTolerance: 0 },
        { id: "s3", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Solve $h(m,3) = 19$.**", interactiveSteps: [
            { stepText: "Substitute $n=3$ into the formula: $19 = \\frac{1}{2}(m+3-2)(m+3-1) + m$." },
            { stepText: "This simplifies to $19 = \\frac{1}{2}(m+1)(m+2) + m$." },
            { prompt: "Let's test small integers. What do you get if you plug in $m=4$?", options: [{ id: "A", text: "19", isCorrect: true, explanation: "1/2(5)(6) + 4 = 15 + 4 = 19." }, { id: "B", text: "21", isCorrect: false, explanation: "Recalculate." }], stepText: "If $m=4$, the result is exactly 19." },
            { stepText: "Therefore, $m=4$." }
        ]},
        { id: "s4", type: "numerical", title: "Check (b)", content: "What is $m$?", numericAnswer: 4, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-3-4-ex11", title: "Exercise 11: Power Set Sizes", description: "Calculating cardinality of P(S)", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Determine the number of elements in $\\mathcal{P}(S)$, the collection of all subsets of $S$, for:\n(a) $S = \\{1, 2\\}$\n(b) $S = \\{1, 2, 3\\}$\n(c) $S = \\{1, 2, 3, 4\\}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: List and count subsets.**", interactiveSteps: [
            { stepText: "(a) For $\\{1, 2\\}$, the subsets are $\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}$. There are 4 subsets." },
            { prompt: "For (b) $\\{1, 2, 3\\}$, how many subsets are there?", options: [{ id: "A", text: "8", isCorrect: true, explanation: "Empty (1), Singles (3), Pairs (3), All (1). 1+3+3+1 = 8." }, { id: "B", text: "6", isCorrect: false, explanation: "You missed some combinations." }], stepText: "(b) There are 8 subsets." },
            { stepText: "(c) Based on the pattern (4, 8...), the number of subsets for $\\{1,2,3,4\\}$ is $2^4 = 16$." }
        ]},
        { id: "s2", type: "numerical", title: "Power Set Size", content: "How many subsets exist for a set with 5 elements?", numericAnswer: 32, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-3-4-ex12", title: "Exercise 12: Power Set Induction", description: "Proving |P(S)| = 2^n", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Use Mathematical Induction to prove that if the set $S$ has $n$ elements, then $\\mathcal{P}(S)$ has $2^n$ elements." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Apply induction to sets.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $S = \\{a_1\\}$. The subsets are $\\emptyset$ and $\\{a_1\\}$. Size is $2 = 2^1$. True." },
            { stepText: "Assume that for any set of size $k$, there are $2^k$ subsets." },
            { prompt: "Consider a set $S_{k+1}$ with $k+1$ elements. We can isolate the new element $x$. The subsets of $S_{k+1}$ can be split into two groups. What are they?", options: [{ id: "A", text: "Subsets that contain x, and subsets that don't.", isCorrect: true, explanation: "This perfectly divides the power set into two halves." }, { id: "B", text: "Even sized subsets and odd sized subsets.", isCorrect: false, explanation: "While true, it doesn't help us use the inductive hypothesis." }], stepText: "Group 1: Subsets without $x$. These are just the subsets of the remaining $k$ elements. By assumption, there are $2^k$ of these." },
            { stepText: "Group 2: Subsets with $x$. These are formed by taking the $2^k$ subsets from Group 1 and adding $x$ to each of them. There are exactly $2^k$ of these." },
            { stepText: "Total subsets = $2^k + 2^k = 2(2^k) = 2^{k+1}$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-3-4-ex13", title: "Exercise 13: Finite Subsets of N", description: "Proving a complex union is countable", icon: "Globe",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Prove that the collection $\\mathcal{F}(\\mathbb{N})$ of all *finite* subsets of $\\mathbb{N}$ is countable." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Express $\\mathcal{F}(\\mathbb{N})$ as a countable union of countable sets.**", interactiveSteps: [
            { stepText: "Let $A_n$ be the collection of all subsets of $\\{1, 2, \\dots, n\\}$." },
            { prompt: "Is $A_n$ a finite set?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "By the previous exercise, it has exactly $2^n$ elements." }, { id: "B", text: "No", isCorrect: false, explanation: "The number of subsets of a finite set is finite." }], stepText: "Yes, each $A_n$ is finite." },
            { stepText: "Notice that EVERY finite subset of $\\mathbb{N}$ must have a maximum element. If the maximum element is $m$, that subset is contained within $A_m$." },
            { stepText: "Therefore, $\\mathcal{F}(\\mathbb{N}) = \\bigcup_{n=1}^\\infty A_n$." },
            { stepText: "By Theorem 1.3.12, the union of a countable number of countable (in this case, finite) sets is countable. Thus $\\mathcal{F}(\\mathbb{N})$ is countable. Goal reached!" }
        ]},
        { id: "s2", type: "theory", title: "Important Distinction", content: "Note the difference:\n- The set of all **finite** subsets of $\\mathbb{N}$ is **countable**.\n- The set of **all** subsets of $\\mathbb{N}$ (the Power Set $\\mathcal{P}(\\mathbb{N})$) is **uncountable** by Cantor's Theorem.\n\nIt is the infinite subsets of $\\mathbb{N}$ that make the power set uncountable!" }
      ]
    }
  ]
};