import { Unit } from '../types';

export const UNIT_2_3_1: Unit = {
  id: "unit-2-3-1",
  title: "Suprema & Infima",
  description: "Understanding boundaries of real number sets",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-3-1-d1", title: "Definition 2.3.1: Bounds", description: "Upper and Lower Bounds", icon: "ArrowUpFromLine",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If a set of numbers has a maximum element, is it bounded above?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "The maximum element itself serves as an upper bound." }, { id: "B", text: "No", isCorrect: false, explanation: "Bounded above just means there's some number greater than or equal to all elements." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Can a set have more than one upper bound?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "If $u$ is an upper bound, so is $u+1, u+2$, etc." }, { id: "B", text: "No", isCorrect: false, explanation: "There are infinitely many upper bounds if there is one." }] },
        { id: "s2", type: "theory", title: "Definition 2.3.1: Bounds", content: "**(a)** A subset $S$ of $\\mathbb{R}$ is **bounded above** if there exists a number $u \\in \\mathbb{R}$ such that $s \\le u$ for all $s \\in S$. Each such $u$ is an **upper bound**.\n\n**(b)** $S$ is **bounded below** if there exists $w \\in \\mathbb{R}$ such that $w \\le s$ for all $s \\in S$. Each such $w$ is a **lower bound**.\n\n**(c)** A set is **bounded** if it is both bounded above and below. Otherwise, it is **unbounded**." },
        { id: "s3", type: "numerical", title: "Find an Upper Bound", content: "For the set $S = \\{x \\in \\mathbb{R} : x < 5\\}$, what is the smallest integer that is an upper bound?", numericAnswer: 5, numericTolerance: 0 },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "A set that is bounded above and bounded below is simply called ___.", blankAnswer: "bounded" }
      ]
    },
    {
      id: "les-2-3-1-fig1", title: "Figure 2.3.1: Visualizing Bounds", description: "Infimum and Supremum", icon: "Eye",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Among all the upper bounds of a set, which one is mathematically the most interesting?", options: [{ id: "A", text: "The least upper bound", isCorrect: true, explanation: "The smallest upper bound tightly encloses the set." }, { id: "B", text: "The greatest upper bound", isCorrect: false, explanation: "There is no greatest upper bound; they go to infinity." }] },
        { id: "s1", type: "theory", title: "Infimum and Supremum", content: "In the set of upper bounds of $S$, we single out the *least* element for special attention. \n\nSimilarly, in the set of lower bounds of $S$, we single out the *greatest* element. \n\nThese are called the supremum (sup $S$) and infimum (inf $S$), respectively." },
        { id: "s2", type: "interactive_canvas", title: "Visualizing Bounds", content: "Move the boundaries to see how any number larger than the supremum is an upper bound, but the supremum is the tightest fit.", interactiveCanvasId: "bounds-canvas" }
      ]
    },
    {
      id: "les-2-3-1-d2", title: "Definition 2.3.2: Suprema & Infima", description: "Least Upper Bound and Greatest Lower Bound", icon: "MoveVertical",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If $u$ is the least upper bound of $S$, can there be another upper bound $v$ such that $v < u$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Because $u$ is the *least* upper bound." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That contradicts $u$ being the least." }] },
        { id: "s1", type: "theory", title: "Definition 2.3.2: Suprema & Infima", content: "**(a)** If $S$ is bounded above, a number $u$ is a **supremum** (or **least upper bound**) of $S$ if:\n1. $u$ is an upper bound of $S$, and\n2. if $v$ is any upper bound of $S$, then $u \\le v$.\n\n**(b)** If $S$ is bounded below, a number $w$ is an **infimum** (or **greatest lower bound**) of $S$ if:\n1. $w$ is a lower bound of $S$, and\n2. if $t$ is any lower bound of $S$, then $t \\le w$." },
        { id: "s2", type: "proof", title: "Interactive Proof: Uniqueness of Supremum", content: "**Goal: Prove a set can have at most ONE supremum.**", interactiveSteps: [
            { stepText: "Suppose that $u_1$ and $u_2$ are both suprema of $S$." },
            { prompt: "If we assume $u_1 < u_2$, what does the definition of supremum tell us about $u_2$?", options: [{ id: "A", text: "$u_1$ cannot be an upper bound, or $u_2$ is not the *least* upper bound.", isCorrect: true, explanation: "Since $u_2$ is supposed to be less than or equal to ALL upper bounds, $u_2 \\le u_1$, contradicting $u_1 < u_2$." }, { id: "B", text: "$u_2$ is the greatest lower bound.", isCorrect: false, explanation: "We are talking about upper bounds." }], stepText: "If $u_1 < u_2$, then the hypothesis that $u_2$ is a supremum (least upper bound) implies $u_2 \\le u_1$, which is impossible." },
            { stepText: "Similarly, $u_2 < u_1$ is not possible." },
            { stepText: "Therefore, we must have $u_1 = u_2$. The supremum is uniquely determined! Goal reached!" }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "The abbreviation for the least upper bound of a set $S$ is ___ $S$.", blankAnswer: "sup" }
      ]
    },
    {
      id: "les-2-3-1-l3", title: "Lemma 2.3.3: Alternate Formulation", description: "Expressing 'least' using set elements", icon: "ArrowDownUp",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If $u = \\sup S$, and I pick a number $z$ strictly less than $u$, is $z$ an upper bound of $S$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Since $u$ is the *least* upper bound, anything smaller cannot be an upper bound." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would make $z$ a smaller upper bound than $u$." }] },
        { id: "s1", type: "theory", title: "Lemma 2.3.3", content: "A number $u$ is the supremum of a nonempty subset $S \\subseteq \\mathbb{R}$ if and only if $u$ satisfies the conditions:\n\n(1) $s \\le u$ for all $s \\in S$,\n(2) if $v < u$, then there exists $s' \\in S$ such that $v < s'$.\n\n*Condition (2) simply states that any number smaller than $u$ fails to be an upper bound because we can find at least one element in $S$ that exceeds it.*" },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the equivalence of Definition 2.3.2(a) and Lemma 2.3.3.**", interactiveSteps: [
            { stepText: "Let $u = \\sup S$ according to Definition 2.3.2(a). Then (1) holds because $u$ is an upper bound." },
            { prompt: "If we take $v < u$, why can't $v$ be an upper bound?", options: [{ id: "A", text: "Because $u$ is the *least* upper bound.", isCorrect: true, explanation: "Definition 2.3.2(a)(2) says $u \\le$ any upper bound. So $v < u$ implies $v$ is not an upper bound." }, { id: "B", text: "Because $v$ is negative.", isCorrect: false, explanation: "$v$ doesn't have to be negative." }], stepText: "Since $v < u$, $v$ is not an upper bound of $S$." },
            { stepText: "By the definition of an upper bound, for $v$ NOT to be an upper bound, there must exist some element $s' \\in S$ that is strictly greater than $v$. Thus $v < s'$." },
            { stepText: "The converse holds by reversing the logic. If (1) and (2) hold, any number $< u$ isn't an upper bound, making $u$ the least upper bound. Goal reached!" }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "If $v < \\sup S$, then there exists some element $s \\in S$ such that $s$ is ___ than $v$.", blankAnswer: "greater" }
      ]
    },
    {
      id: "les-2-3-1-l4", title: "Lemma 2.3.4: Epsilon Formulation", description: "Using epsilon to test suprema", icon: "Minimize2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If $u = \\sup S$, and we subtract a tiny positive amount $\\varepsilon$ from $u$, will $u - \\varepsilon$ be an upper bound?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Any amount subtracted from the supremum makes it smaller than the supremum, hence not an upper bound." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Supremum is the absolute smallest upper bound." }] },
        { id: "s1", type: "theory", title: "Lemma 2.3.4: Epsilon Formulation", content: "An upper bound $u$ of a nonempty set $S \\subseteq \\mathbb{R}$ is the supremum of $S$ if and only if for every $\\varepsilon > 0$ there exists an $s_\\varepsilon \\in S$ such that $u - \\varepsilon < s_\\varepsilon$.\n\n*This is just Lemma 2.3.3 rewritten using $v = u - \\varepsilon$. This form is extremely useful for proofs involving limits!*" },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Prove Lemma 2.3.4.**", interactiveSteps: [
            { stepText: "Assume $u$ is an upper bound of $S$ satisfying the condition. Let $v < u$." },
            { prompt: "If we define $\\varepsilon = u - v$, is $\\varepsilon$ positive?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Since $v < u$, $u - v > 0$." }, { id: "B", text: "No", isCorrect: false, explanation: "Check the inequality." }], stepText: "Let $\\varepsilon = u - v$. Then $\\varepsilon > 0$." },
            { stepText: "By the condition, there exists $s_\\varepsilon \\in S$ such that $u - \\varepsilon < s_\\varepsilon$." },
            { stepText: "Substitute $\\varepsilon$: $u - (u - v) < s_\\varepsilon \\implies v < s_\\varepsilon$. Thus $v$ is not an upper bound, making $u = \\sup S$ by Lemma 2.3.3." },
            { stepText: "Conversely, if $u = \\sup S$ and $\\varepsilon > 0$, then $u - \\varepsilon < u$. By Lemma 2.3.3, there exists $s_\\varepsilon \\in S$ with $u - \\varepsilon < s_\\varepsilon$. Goal reached!" }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "If $u = \\sup S$, there is always an element of $S$ strictly between $u - \\varepsilon$ and ___.", blankAnswer: "u" }
      ]
    }
  ]
};