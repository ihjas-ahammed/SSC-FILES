import { Unit } from '../types';

export const UNIT_1_1_1: Unit = {
  id: "unit-1-1-1",
  title: "Set Fundamentals",
  description: "Set Equality, Operations, and De Morgan's Laws",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-1-d1", title: "Definition 1.1.1: Set Equality", description: "When are two sets equal?", icon: "List",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If a set contains $\{1, 2\}$ and another contains $\{2, 1, 1\}$, are they the same set?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Duplicates and order don't matter in sets." }, { id: "B", text: "No", isCorrect: false, explanation: "Sets only care about distinct elements, not order or repetition." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What does $A \\subseteq B$ imply?", options: [{ id: "A", text: "Every element of A is also in B", isCorrect: true, explanation: "This is the exact definition of a subset." }, { id: "B", text: "Every element of B is also in A", isCorrect: false, explanation: "That would be $B \\subseteq A$." }] },
        { id: "s2", type: "theory", title: "Definition 1.1.1", content: "Two sets $A$ and $B$ are said to be **equal**, and we write $A = B$, if they contain the exact same elements.\n\nThus, to mathematically prove that the sets $A$ and $B$ are equal, we must show two things:\n1. $A \\subseteq B$\n2. $B \\subseteq A$" },
        { id: "s3", type: "interactive_canvas", title: "Visualizing Equality", content: "Observe how two sets must perfectly overlap in their elements to be considered equal.", interactiveCanvasId: "set-equality-canvas" },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "To prove A = B, we must show that $A \\subseteq B$ and $B \\subseteq$ ___.", blankAnswer: "A" }
      ]
    },
    {
      id: "les-1-1-1-e1", title: "Examples 1.1.2", description: "Defining Sets", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Which symbol universally represents the set of natural numbers?", options: [{ id: "A", text: "$\\mathbb{R}$", isCorrect: false, explanation: "This represents real numbers." }, { id: "B", text: "$\\mathbb{N}$", isCorrect: true, explanation: "$\\mathbb{N}$ is the set of natural numbers $\{1, 2, 3, \\dots\}$" }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Can a set be defined purely by a mathematical property?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "We often use set-builder notation $\{x \\in S : P(x)\}$ for this." }, { id: "B", text: "No", isCorrect: false, explanation: "Many infinite sets must be defined by a property because they can't be fully listed." }] },
        { id: "s2", type: "theory", title: "Defining Sets", content: "A set is normally defined by either listing its elements explicitly, or by specifying a property that determines the elements of the set. \n\nWe write $\{x \\in S : P(x)\}$ for the set of all elements $x$ in $S$ for which the property $P$ is true.\n\n**Standard Symbols:**\n- $\\mathbb{N} := \\{1, 2, 3, \\dots\\}$\n- $\\mathbb{Z} := \\{0, 1, -1, 2, -2, \\dots\\}$\n- $\\mathbb{Q} := \\{m/n : m, n \\in \\mathbb{Z} \\text{ and } n \\neq 0\\}$\n- $\\mathbb{R}$ for real numbers\n\nThe set of even natural numbers is $\\{2k : k \\in \\mathbb{N}\\}$." },
        { id: "s3", type: "numerical", title: "Solve the Set", content: "Consider the set $S = \\{x \\in \\mathbb{N} : x^2 - 3x + 2 = 0\\}$. What is the sum of the elements in this set?", numericAnswer: 3, numericTolerance: 0 },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "The set of odd natural numbers is $\\{2k - 1 : k \\in \\mathbb{N}\\}$. The first element generated when $k=1$ is ___.", blankAnswer: "1" }
      ]
    },
    {
      id: "les-1-1-1-d2", title: "Definition 1.1.3", description: "Set Operations", icon: "Layers",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Does the union of two sets include elements found in BOTH sets simultaneously?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Union is an inclusive OR. Elements in both are included." }, { id: "B", text: "No", isCorrect: false, explanation: "Union is inclusive, not an exclusive OR." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What is the intersection of two disjoint sets?", options: [{ id: "A", text: "The empty set $\\emptyset$", isCorrect: true, explanation: "Disjoint sets have no elements in common." }, { id: "B", text: "The universal set", isCorrect: false, explanation: "Intersection looks for commonalities." }] },
        { id: "s2", type: "theory", title: "Set Operations", content: "We can obtain new sets from given ones based on the meaning of the words \"or\", \"and\", and \"not\".\n\n**(a) Union:** $A \\cup B := \\{x : x \\in A \\text{ or } x \\in B\\}$\n**(b) Intersection:** $A \\cap B := \\{x : x \\in A \\text{ and } x \\in B\\}$\n**(c) Complement:** The complement of $B$ relative to $A$ is the set $A \\setminus B := \\{x : x \\in A \\text{ and } x \\notin B\\}$" },
        { id: "s3", type: "interactive_canvas", title: "Set Operations", content: "Interact with the sets to see how Union, Intersection, and Complement are formed.", interactiveCanvasId: "set-operations-canvas" },
        { id: "s4", type: "numerical", title: "Calculate Union", content: "If $A=\\{1,2,3\\}$ and $B=\\{3,4\\}$, how many distinct elements are in $A \\cup B$?", numericAnswer: 4, numericTolerance: 0 },
        { id: "s5", type: "fill_in_blank", title: "Concept Check", content: "Two sets are disjoint if their ___ is the empty set $\\emptyset$.", blankAnswer: "intersection" }
      ]
    },
    {
      id: "les-1-1-1-fig1", title: "Figure 1.1.1: Venn Diagrams", description: "Visualizing Sets", icon: "PieChart",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "What visual tool is frequently used to illustrate set operations?", options: [{ id: "A", text: "Venn Diagrams", isCorrect: true, explanation: "Venn diagrams use circles to show relationships between sets." }, { id: "B", text: "Bar Charts", isCorrect: false, explanation: "Bar charts are for frequencies, not abstract set relations." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "In a Venn diagram, what does the overlapping region of two circles represent?", options: [{ id: "A", text: "Intersection", isCorrect: true, explanation: "The overlap contains elements belonging to both sets." }, { id: "B", text: "Union", isCorrect: false, explanation: "The union would be both circles entirely shaded." }] },
        { id: "s2", type: "theory", title: "Visualizing with Venn Diagrams", content: "Venn diagrams are an excellent way to visualize set operations.\n\n- **$A \\cup B$** shades both circles entirely.\n- **$A \\cap B$** shades only the overlapping region in the center.\n- **$A \\setminus B$** shades the part of $A$ that does not overlap with $B$ (like a crescent moon)." },
        { id: "s3", type: "interactive_canvas", title: "Dynamic Venn Diagrams", content: "Click to toggle between Union, Intersection, and Complement visualizations.", interactiveCanvasId: "venn-diagrams-canvas" },
        { id: "s4", type: "numerical", title: "Set Size", content: "If A has 5 elements and B is completely contained inside A with 2 elements, how many elements are in $A \\setminus B$?", numericAnswer: 3, numericTolerance: 0 },
        { id: "s5", type: "fill_in_blank", title: "Concept Check", content: "The complement of B relative to A is written mathematically as $A \\setminus$ ___.", blankAnswer: "B" }
      ]
    },
    {
      id: "les-1-1-1-t1", title: "Theorem 1.1.4: De Morgan's Laws", description: "Distributing Complements", icon: "SplitSquareHorizontal",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "How does the complement operation distribute over a union of two sets?", options: [{ id: "A", text: "It becomes the intersection of their complements", isCorrect: true, explanation: "This is the essence of De Morgan's First Law." }, { id: "B", text: "It becomes the union of their complements", isCorrect: false, explanation: "The operation flips from union to intersection." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What is $A \\setminus (B \\cap C)$ equivalent to?", options: [{ id: "A", text: "$(A \\setminus B) \\cup (A \\setminus C)$", isCorrect: true, explanation: "De Morgan's Second Law." }, { id: "B", text: "$(A \\setminus B) \\cap (A \\setminus C)$", isCorrect: false, explanation: "The intersection must flip to a union." }] },
        { id: "s2", type: "theory", title: "De Morgan's Laws", content: "**Theorem 1.1.4:** If $A, B, C$ are sets, then:\n\n(a) $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$\n(b) $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$\n\nThese laws provide the rules for removing compound sets from a base set." },
        { id: "s3", type: "interactive_canvas", title: "De Morgan Visualized", content: "See how removing a union leaves only the intersection of the outside regions.", interactiveCanvasId: "demorgan-laws-canvas" },
        {
          id: "s4", type: "proof", title: "Interactive Proof: De Morgan's First Law", content: "**Goal: Prove $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$.**\n\nLet's prove the forward inclusion: $x \\in A \\setminus (B \\cup C)$.", interactiveSteps: [
            { stepText: "By definition, $x \\in A$ and $x \\notin (B \\cup C)$." },
            { prompt: "Since $x \\notin (B \\cup C)$, what can we say about $x$'s relation to B and C?", options: [{ id: "A", text: "$x \\notin B$ and $x \\notin C$", isCorrect: true, explanation: "If it's not in the union, it can't be in either individual set." }, { id: "B", text: "$x \\notin B$ or $x \\notin C$", isCorrect: false, explanation: "If it were in one of them, it would be in the union." }], stepText: "Therefore, $x \\notin B$ and $x \\notin C$." },
            { prompt: "Combine this with $x \\in A$. What sets does $x$ belong to?", options: [{ id: "A", text: "$x \\in A \\setminus B$ and $x \\in A \\setminus C$", isCorrect: true, explanation: "Correct! We combine $x \\in A$ with $x \\notin B$ and $x \\notin C$ separately." }, { id: "B", text: "$x \\in A \\cap B$", isCorrect: false, explanation: "We established $x \\notin B$." }], stepText: "Since $x \\in A \\setminus B$ and $x \\in A \\setminus C$..." },
            { stepText: "It directly follows that $x \\in (A \\setminus B) \\cap (A \\setminus C)$. The reverse inclusion follows identical logic backward. Goal reached!" }
          ]
        },
        { id: "s5", type: "numerical", title: "Apply the Law", content: "If $A=\\{1,2,3,4\\}$, $B=\\{2\\}$, $C=\\{3\\}$, how many elements are in $(A \\setminus B) \\cap (A \\setminus C)$?", numericAnswer: 2, numericTolerance: 0 },
        { id: "s6", type: "fill_in_blank", title: "Concept Check", content: "De Morgan's laws show that the complement of an intersection is the ___ of the individual complements.", blankAnswer: "union" }
      ]
    }
  ]
};