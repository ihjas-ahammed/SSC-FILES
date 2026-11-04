import { Unit } from '../types';

export const UNIT_1_1_3: Unit = {
  id: "unit-1-1-3",
  title: "Set Exercises",
  description: "Exercises 1-6: Symmetric Difference & Set Algebra",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-3-ex1", title: "Exercise 1: Evaluating Set Operations", description: "Calculating specific finite sets", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Let $A := \\{k : k \\in \\mathbb{N}, k \\le 20\\}$, $B := \\{3k - 1 : k \\in \\mathbb{N}\\}$, and $C := \\{2k + 1 : k \\in \\mathbb{N}\\}$.\n\n**Find:**\n(a) $A \\cap B \\cap C$\n(b) $(A \\cap B) \\setminus C$\n(c) $(A \\cap C) \\setminus B$\n\n*Grab some paper and try writing out the first few elements of each set!*" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate the sets.**", interactiveSteps: [
            { stepText: "First, note that within the universe of $A$ (up to 20): \n$B \\cap A = \\{2, 5, 8, 11, 14, 17, 20\\}$\n$C \\cap A = \\{3, 5, 7, 9, 11, 13, 15, 17, 19\\}$" },
            { prompt: "To find (a) $A \\cap B \\cap C$, we look for elements shared by both $B \\cap A$ and $C \\cap A$. What are they?", options: [{ id: "A", text: "{5, 11, 17}", isCorrect: true, explanation: "Correct! These are the elements present in both lists." }, { id: "B", text: "{3, 8, 15}", isCorrect: false, explanation: "These do not appear in both lists." }], stepText: "(a) $A \\cap B \\cap C = \\{5, 11, 17\\}$" },
            { prompt: "For (b) $(A \\cap B) \\setminus C$, we take $B \\cap A$ and remove elements that are in $C$ (which are the odd numbers). What remains?", options: [{ id: "A", text: "{2, 8, 14, 20}", isCorrect: true, explanation: "Correct, these are the even elements of $B \\cap A$." }, { id: "B", text: "{2, 5, 8}", isCorrect: false, explanation: "5 is in C, so it must be removed." }], stepText: "(b) $(A \\cap B) \\setminus C = \\{2, 8, 14, 20\\}$" },
            { stepText: "(c) $(A \\cap C) \\setminus B$ removes elements of $B$ from $C \\cap A$. This leaves $\\{3, 7, 9, 13, 15, 19\\}$." }
        ]},
        { id: "s2", type: "numerical", title: "Numerical Check", content: "How many elements are in the set $(A \\cap C) \\setminus B$ evaluated above?", numericAnswer: 6, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-3-ex2", title: "Exercise 2: Set Simplification", description: "Using logic to simplify set expressions", icon: "Scissors",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Draw diagrams or use logic to simplify and identify the following sets:\n\n(a) $A \\setminus (B \\setminus A)$\n(b) $A \\setminus (A \\setminus B)$\n(c) $A \\cap (B \\setminus A)$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Simplify each expression.**", interactiveSteps: [
            { stepText: "(a) The set $B \\setminus A$ consists of elements in $B$ that are strictly NOT in $A$." },
            { prompt: "If we start with $A$, and remove elements that are NOT in $A$, what happens?", options: [{ id: "A", text: "Nothing is removed; the result is A.", isCorrect: true, explanation: "Since $B \\setminus A$ shares zero elements with $A$, removing it from $A$ does nothing." }, { id: "B", text: "The result is the empty set.", isCorrect: false, explanation: "You are removing disjoint elements, not identical elements." }], stepText: "(a) $A \\setminus (B \\setminus A) = A$" },
            { prompt: "(b) $A \\setminus B$ is the part of $A$ outside $B$. If we remove the 'outside' part from the whole of $A$, what is left?", options: [{ id: "A", text: "$A \\cap B$", isCorrect: true, explanation: "The 'inside' part (the intersection) remains." }, { id: "B", text: "$B \\setminus A$", isCorrect: false, explanation: "We are only working within A." }], stepText: "(b) $A \\setminus (A \\setminus B) = A \\cap B$" },
            { stepText: "(c) $A \\cap (B \\setminus A)$ asks for elements that are simultaneously IN $A$ and NOT IN $A$. This is a contradiction, so the result is the empty set $\\emptyset$." }
        ]},
        { id: "s2", type: "quiz", title: "Logical Check", content: "Which operation is logically equivalent to $A \\setminus (A \\setminus B)$?", options: [{ id: "A", text: "$A \\cap B$", isCorrect: true, explanation: "Yes! Removing the non-overlapping part leaves only the overlapping part." }, { id: "B", text: "$A \\cup B$", isCorrect: false, explanation: "Union would add elements, not remove them." }] }
      ]
    },
    {
      id: "les-1-1-3-ex3", title: "Exercise 3: Subset Equality", description: "Proving subset equivalence", icon: "ArrowRightLeft",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "If $A$ and $B$ are sets, prove that $A \\subseteq B$ if and only if $A \\cap B = A$." },
        { id: "s1", type: "theory", title: "Properties Used", content: "To prove an 'if and only if' ($P \\iff Q$) statement, we must prove both directions:\n\n1. Forward ($\\implies$): Assume $A \\subseteq B$, prove $A \\cap B = A$.\n2. Backward ($\\impliedby$): Assume $A \\cap B = A$, prove $A \\subseteq B$.\n\nRecall that to prove set equality $X = Y$, we show $X \\subseteq Y$ and $Y \\subseteq X$." },
        { id: "s2", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume $A \\subseteq B$, prove $A \\cap B = A$.**", interactiveSteps: [
            { stepText: "First, by the definition of intersection, it is always true that $A \\cap B \\subseteq A$." },
            { prompt: "To prove equality, we need to show the reverse: $A \\subseteq A \\cap B$. Let $x \\in A$. Because we assumed $A \\subseteq B$, where else must $x$ be?", options: [{ id: "A", text: "$x \\in B$", isCorrect: true, explanation: "By definition of a subset." }, { id: "B", text: "$x \\notin B$", isCorrect: false, explanation: "That would contradict the assumption." }], stepText: "Since $x \\in A$ and $A \\subseteq B$, we have $x \\in B$." },
            { stepText: "Since $x \\in A$ and $x \\in B$, by definition $x \\in A \\cap B$. Thus $A \\subseteq A \\cap B$. Since both inclusions hold, $A \\cap B = A$." }
        ]},
        { id: "s3", type: "proof", title: "Interactive Proof: Backward Direction", content: "**Goal: Assume $A \\cap B = A$, prove $A \\subseteq B$.**", interactiveSteps: [
            { stepText: "Let $x \\in A$. We must show $x \\in B$." },
            { prompt: "Since we assumed $A = A \\cap B$, what can we substitute for $A$?", options: [{ id: "A", text: "$x \\in A \\cap B$", isCorrect: true, explanation: "We substitute $A$ with $A \\cap B$." }, { id: "B", text: "$x \\in B \\setminus A$", isCorrect: false, explanation: "This is irrelevant here." }], stepText: "Therefore, $x \\in A \\cap B$." },
            { stepText: "By the definition of intersection, $x \\in A \\cap B$ implies $x \\in A$ and $x \\in B$. Since we have shown $x \\in B$ for any arbitrary $x \\in A$, we conclude $A \\subseteq B$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-3-ex4", title: "Exercise 4: Second De Morgan Law", description: "Proving the law for intersections", icon: "SplitSquareHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Prove the second De Morgan Law:\n$$A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show both sides are subsets of each other.**", interactiveSteps: [
            { stepText: "Let $x \\in A \\setminus (B \\cap C)$. This means $x \\in A$ and $x \\notin (B \\cap C)$." },
            { prompt: "If $x$ is not in the intersection of B and C, what is true?", options: [{ id: "A", text: "$x \\notin B$ or $x \\notin C$", isCorrect: true, explanation: "It only takes missing one to fail an intersection." }, { id: "B", text: "$x \\notin B$ and $x \\notin C$", isCorrect: false, explanation: "That would mean it's missing from the union." }], stepText: "Therefore, $x \\notin B$ or $x \\notin C$." },
            { stepText: "Case 1: If $x \\notin B$, then since $x \\in A$, we have $x \\in A \\setminus B$. Case 2: If $x \\notin C$, then $x \\in A \\setminus C$." },
            { prompt: "Since either Case 1 OR Case 2 is true, what set does $x$ belong to?", options: [{ id: "A", text: "$(A \\setminus B) \\cup (A \\setminus C)$", isCorrect: true, explanation: "The 'or' translates to a union." }, { id: "B", text: "$(A \\setminus B) \\cap (A \\setminus C)$", isCorrect: false, explanation: "The 'and' translates to intersection." }], stepText: "Thus, $x \\in (A \\setminus B) \\cup (A \\setminus C)$, proving the forward inclusion. The reverse inclusion follows identical steps backwards. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-3-ex5", title: "Exercise 5: Distributive Laws", description: "Proving distribution over union and intersection", icon: "Network",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Prove the Distributive Laws:\n(a) $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$\n(b) $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$" },
        { id: "s1", type: "proof", title: "Interactive Proof for (a)", content: "**Goal: Prove $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$**", interactiveSteps: [
            { stepText: "Let $x \\in A \\cap (B \\cup C)$. Then $x \\in A$ and $x \\in (B \\cup C)$." },
            { prompt: "Since $x \\in B \\cup C$, what does this mean?", options: [{ id: "A", text: "$x \\in B$ or $x \\in C$", isCorrect: true, explanation: "Definition of union." }, { id: "B", text: "$x \\in B$ and $x \\in C$", isCorrect: false, explanation: "Definition of intersection." }], stepText: "This means either $x \\in B$ or $x \\in C$." },
            { stepText: "Case 1: If $x \\in B$, then since $x \\in A$, we have $x \\in A \\cap B$.\nCase 2: If $x \\in C$, then since $x \\in A$, we have $x \\in A \\cap C$." },
            { stepText: "Since either Case 1 OR Case 2 holds, $x \\in (A \\cap B) \\cup (A \\cap C)$. The reverse logic holds exactly, proving equality." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "The law $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$ shows that union distributes over ___.", blankAnswer: "intersection" }
      ]
    },
    {
      id: "les-1-1-3-ex6", title: "Exercise 6: Symmetric Difference", description: "Evaluating elements in A or B but not both", icon: "TriangleRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "The symmetric difference of two sets $A$ and $B$ is the set $D$ of all elements that belong to either $A$ or $B$ but not both.\n\n(a) Show that $D = (A \\setminus B) \\cup (B \\setminus A)$\n(b) Show that $D = (A \\cup B) \\setminus (A \\cap B)$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Connect the English definition to the formulas.**", interactiveSteps: [
            { stepText: "Part (a) translates the definition directly. 'Belong to A but not B' is $A \\setminus B$. 'Belong to B but not A' is $B \\setminus A$. The 'either...or' connects them with a union $\\cup$." },
            { prompt: "For Part (b), think about $(A \\cup B)$. What does this set contain?", options: [{ id: "A", text: "Elements in A, in B, or in both.", isCorrect: true, explanation: "Union includes the overlapping intersection." }, { id: "B", text: "Elements strictly in A or strictly in B.", isCorrect: false, explanation: "That's symmetric difference." }], stepText: "$(A \\cup B)$ contains everything in both sets." },
            { stepText: "To get elements in either A or B *but not both*, we must remove the elements that are in both. The elements in both are precisely $A \\cap B$." },
            { stepText: "Removing $A \\cap B$ from $A \\cup B$ gives exactly $(A \\cup B) \\setminus (A \\cap B)$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Calculate Symmetric Difference", content: "If $A=\\{1,2,3\\}$ and $B=\\{2,3,4\\}$, how many elements are in their symmetric difference?", numericAnswer: 2, numericTolerance: 0 }
      ]
    }
  ]
};