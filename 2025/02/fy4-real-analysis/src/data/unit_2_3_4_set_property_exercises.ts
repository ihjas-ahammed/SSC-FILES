import { Unit } from '../types';

export const UNIT_2_3_4: Unit = {
  id: "unit-2-3-4",
  title: "Set Property Exercises",
  description: "Exercises 8-14: Proofs on Bounded Sets",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-3-4-ex8", title: "Exercise 8: Upper Bound Equivalence", description: "If t > u implies t is not in S", icon: "ArrowUpFromLine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Let $S \\subseteq \\mathbb{R}$ be nonempty. Show that $u \\in \\mathbb{R}$ is an upper bound of $S$ if and only if the conditions $t \\in \\mathbb{R}$ and $t > u$ imply that $t \\notin S$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Prove if $u$ is an upper bound, $t > u \implies t \\notin S$.**", interactiveSteps: [
            { stepText: "Assume $u$ is an upper bound of $S$. This means $s \\le u$ for all $s \\in S$." },
            { prompt: "If we have a number $t > u$, can $t$ equal any $s \\in S$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Because all $s \le u < t$, so $s < t$." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would violate the upper bound condition." }], stepText: "Since $s \le u < t$ for all $s \in S$, no element in $S$ can equal $t$." },
            { stepText: "Therefore, $t \\notin S$. Forward direction proved." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Backward Direction", content: "**Goal: Prove if $t > u \implies t \\notin S$, then $u$ is an upper bound.**", interactiveSteps: [
            { stepText: "We use the contrapositive. Assume $u$ is NOT an upper bound of $S$." },
            { stepText: "Then there exists some element $s' \\in S$ such that $s' > u$." },
            { stepText: "Let $t = s'$. Then $t > u$." },
            { stepText: "However, $t = s' \in S$. This perfectly contradicts the condition that $t > u \implies t \\notin S$." },
            { stepText: "Thus, the condition guarantees that $u$ MUST be an upper bound. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-3-4-ex9", title: "Exercise 9: Supremum and 1/n", description: "Testing bounds with fractions", icon: "Percent",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Let $S \\subseteq \\mathbb{R}$ be nonempty. Show that if $u = \\sup S$, then for every number $n \\in \\mathbb{N}$ the number $u - 1/n$ is not an upper bound of $S$, but the number $u + 1/n$ is an upper bound of $S$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the definition of supremum.**", interactiveSteps: [
            { stepText: "Assume $u = \\sup S$. This means $u$ is the *least* upper bound." },
            { prompt: "Consider the number $u - 1/n$. How does it compare to $u$?", options: [{ id: "A", text: "It is strictly less than $u$.", isCorrect: true, explanation: "Since $n \in \mathbb{N}$, $1/n > 0$, so subtracting it makes the number smaller." }, { id: "B", text: "It is greater than $u$.", isCorrect: false, explanation: "You are subtracting a positive number." }], stepText: "Since $1/n > 0$, $u - 1/n < u$." },
            { stepText: "Because $u$ is the least upper bound, any number strictly less than $u$ cannot be an upper bound. Thus $u - 1/n$ is not an upper bound of $S$." },
            { stepText: "Now consider $u + 1/n$. Since $1/n > 0$, we have $u < u + 1/n$." },
            { stepText: "Since $u$ is an upper bound of $S$, $s \le u$ for all $s \in S$. Thus $s \le u < u + 1/n$. This makes $u + 1/n$ an upper bound of $S$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-3-4-ex10", title: "Exercise 10: Supremum of a Union", description: "The maximum of two suprema", icon: "Merge",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Show that if $A$ and $B$ are bounded subsets of $\\mathbb{R}$, then $A \\cup B$ is a bounded set. \n\nShow that $\\sup(A \\cup B) = \\sup\\{\\sup A, \\sup B\\}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show the max of the two suprema serves as the supremum of the union.**", interactiveSteps: [
            { stepText: "Let $u_A = \\sup A$ and $u_B = \\sup B$. Let $u = \\sup\\{u_A, u_B\\}$ (which is just the maximum of the two)." },
            { prompt: "Is $u$ an upper bound for $A \\cup B$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "If $x \in A \cup B$, then $x \in A$ or $x \in B$. If $x \in A$, $x \le u_A \le u$. If $x \in B$, $x \le u_B \le u$." }, { id: "B", text: "No", isCorrect: false, explanation: "Check the logic for union." }], stepText: "Yes, $u$ is an upper bound for $A \\cup B$." },
            { stepText: "To show $u$ is the *least* upper bound, let $v$ be any upper bound of $A \\cup B$." },
            { stepText: "Since $A \\subseteq A \\cup B$, $v$ must be an upper bound for $A$. Thus $v \ge u_A$." },
            { stepText: "Similarly, since $B \\subseteq A \\cup B$, $v$ must be an upper bound for $B$. Thus $v \ge u_B$." },
            { stepText: "Since $v$ is greater than or equal to both $u_A$ and $u_B$, it must be $\\ge$ their maximum. Thus $v \ge u$. Therefore, $u = \\sup(A \\cup B)$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-3-4-ex11", title: "Exercise 11: Bounds of Subsets", description: "How zooming into a set affects bounds", icon: "Shrink",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Let $S$ be a bounded set in $\\mathbb{R}$ and let $S_0$ be a nonempty subset of $S$. \n\nShow that $\\inf S \\le \\inf S_0 \\le \\sup S_0 \\le \\sup S$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove the chain of inequalities.**", interactiveSteps: [
            { stepText: "Let $u = \\sup S$. Then for all $s \in S$, $s \le u$." },
            { prompt: "Since $S_0 \subseteq S$, what is true for every element $x \in S_0$?", options: [{ id: "A", text: "$x \le u$", isCorrect: true, explanation: "Every element of $S_0$ is also in $S$." }, { id: "B", text: "$x \ge u$", isCorrect: false, explanation: "No, elements of $S_0$ are still constrained by $u$." }], stepText: "For all $x \in S_0$, $x \le u$. Thus $u$ is an upper bound for $S_0$." },
            { stepText: "Because $u$ is an upper bound for $S_0$, the *least* upper bound of $S_0$ must be $\\le u$. Thus $\\sup S_0 \\le \\sup S$." },
            { stepText: "By the exact same subset logic on the lower bounds, if $w = \\inf S$, then $w \le x$ for all $x \in S_0$, making $w$ a lower bound for $S_0$." },
            { stepText: "Thus, the *greatest* lower bound of $S_0$ must be $\\ge w$. So $\\inf S \\le \\inf S_0$." },
            { stepText: "Finally, since $S_0$ is nonempty, there is at least one element $x \in S_0$, so $\\inf S_0 \\le x \\le \\sup S_0$. Stringing them together gives the result! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-2-3-4-ex12", title: "Exercise 12: Adjoining a Point", description: "Supremum when adding one element", icon: "PlusCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Let $S \\subseteq \\mathbb{R}$ and suppose that $s^* := \\sup S$ belongs to $S$. \n\nIf $u \\notin S$, show that $\\sup(S \\cup \\{u\\}) = \\sup\\{s^*, u\\}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Evaluate the supremum of the new combined set.**", interactiveSteps: [
            { stepText: "Let $T = S \\cup \\{u\\}$. The elements of $T$ are either from $S$ or are exactly $u$." },
            { prompt: "What is an upper bound for $T$?", options: [{ id: "A", text: "The maximum of $s^*$ and $u$.", isCorrect: true, explanation: "Any element in T is $\\le s^*$ (if in S) or equals $u$. So all elements are $\\le \\max(s^*, u)$." }, { id: "B", text: "$s^* + u$", isCorrect: false, explanation: "While this might be an upper bound if both are positive, it's not the tightest or most general bound." }], stepText: "Let $m = \\sup\\{s^*, u\\} = \\max(s^*, u)$. Clearly, $t \\le m$ for all $t \\in T$, so $m$ is an upper bound of $T$." },
            { stepText: "Is it the *least* upper bound? Let $v$ be any upper bound of $T$." },
            { stepText: "Since $s^* \in S \subseteq T$, $s^*$ must be $\\le v$." },
            { stepText: "Since $u \in T$, $u$ must be $\\le v$." },
            { stepText: "Since $v$ is $\\ge s^*$ and $\\ge u$, it must be $\\ge$ their maximum, $m$. Therefore $m$ is the least upper bound! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-2-3-4-ex13", title: "Exercise 13: Finite Sets Contain Supremum", description: "Induction proof for finite sets", icon: "List123",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Show that a nonempty finite set $S \\subseteq \\mathbb{R}$ contains its supremum.\n\n*[Hint: Use Mathematical Induction and the preceding exercise.]*" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Induct on the number of elements in $S$.**", interactiveSteps: [
            { stepText: "Base case ($n=1$): $S = \\{a\\}$. The only element is $a$, which acts as both an upper bound and the least upper bound. Thus $\\sup S = a \in S$. True." },
            { prompt: "Inductive step: Assume that any set with $k$ elements contains its supremum. Now let $S$ have $k+1$ elements. How can we write $S$?", options: [{ id: "A", text: "$S = S_k \\cup \\{u\\}$ where $S_k$ has $k$ elements.", isCorrect: true, explanation: "We isolate one element to use the inductive hypothesis on the rest." }, { id: "B", text: "$S = S_k \\cup S_1$", isCorrect: false, explanation: "Same meaning, but $u$ is clearer." }], stepText: "Write $S = S_k \\cup \\{u\\}$, where $u \\notin S_k$ and $S_k$ has $k$ elements." },
            { stepText: "By the induction hypothesis, $s^* = \\sup S_k$ exists and belongs to $S_k$." },
            { stepText: "By Exercise 12, $\\sup S = \\sup(S_k \\cup \\{u\\}) = \\max(s^*, u)$." },
            { stepText: "Since both $s^* \in S$ and $u \in S$, their maximum must also be one of those two elements, and therefore must be in $S$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-3-4-ex14", title: "Exercise 14: Epsilon Characterization of Infimum", description: "The parallel lemma for greatest lower bounds", icon: "ArrowDownToLine",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Let $S$ be a set that is bounded below. \n\nProve that a lower bound $w$ of $S$ is the infimum of $S$ if and only if for any $\\varepsilon > 0$ there exists $t \\in S$ such that $t < w + \\varepsilon$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Adapt Lemma 2.3.4 for infima.**", interactiveSteps: [
            { stepText: "Forward: Assume $w = \\inf S$. Let $\\varepsilon > 0$. Then $w + \\varepsilon > w$." },
            { prompt: "Since $w$ is the *greatest* lower bound, can $w + \\varepsilon$ be a lower bound?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Anything strictly greater than the greatest lower bound fails to be a lower bound." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That contradicts $w$ being the greatest." }], stepText: "Thus $w + \\varepsilon$ is not a lower bound." },
            { stepText: "Because it's not a lower bound, there must exist some element $t \\in S$ that is strictly smaller than it. So $t < w + \\varepsilon$." },
            { stepText: "Backward: Assume the condition holds. Let $v$ be any lower bound of $S$. We must show $v \le w$." },
            { stepText: "Assume for contradiction that $v > w$. Let $\\varepsilon = v - w > 0$." },
            { stepText: "By the condition, there exists $t \\in S$ such that $t < w + (v - w) = v$." },
            { stepText: "But if $t < v$, then $v$ cannot be a lower bound of $S$! This contradiction means $v \le w$ must be true. Thus $w = \\inf S$. Goal reached!" }
        ]}
      ]
    }
  ]
};