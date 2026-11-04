import { Unit } from '../types';

export const UNIT_1_3_1: Unit = {
  id: "unit-1-3-1",
  title: "Cardinality Theory",
  description: "Defining Finite and Infinite Sets mathematically",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-1-d1", title: "Definition 1.3.1: Finite Sets", description: "What does it mean to have n elements?", icon: "List123",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "How do we mathematically 'count' a set's elements?", options: [{ id: "A", text: "By creating a bijection to a known set of numbers", isCorrect: true, explanation: "We match each item to the numbers {1, 2, 3...n}." }, { id: "B", text: "By measuring its size in memory", isCorrect: false, explanation: "We need an abstract mathematical definition." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Is the empty set $\\emptyset$ considered finite?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "It is specifically defined to have 0 elements, making it finite." }, { id: "B", text: "No", isCorrect: false, explanation: "It is finite." }] },
        { id: "s2", type: "theory", title: "Definition 1.3.1: Finite & Infinite", content: "**(a)** The empty set $\\emptyset$ is said to have $0$ elements.\n**(b)** If $n \\in \\mathbb{N}$, a set $S$ has $n$ elements if there exists a **bijection** from the set $\\mathbb{N}_n := \\{1, 2, \\dots, n\\}$ onto $S$.\n**(c)** A set $S$ is **finite** if it is either empty or it has $n$ elements for some $n \\in \\mathbb{N}$.\n**(d)** A set $S$ is **infinite** if it is not finite." },
        { id: "s3", type: "interactive_canvas", title: "Visualizing a Bijection", content: "To prove a set has 3 elements, we must show a perfect one-to-one mapping to {1, 2, 3}.", interactiveCanvasId: "finite-mapping-canvas" },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "To prove a set has exactly $n$ elements, we must find a ___ from $\\mathbb{N}_n$ to the set.", blankAnswer: "bijection" }
      ]
    },
    {
      id: "les-1-3-1-t2", title: "Theorem 1.3.2: Uniqueness", description: "Can a set have both 3 and 4 elements?", icon: "Fingerprint",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Is it possible for a set to be bijectively mapped to {1,2,3} and ALSO to {1,2,3,4}?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "This seems obvious, but it requires rigorous proof in set theory!" }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would break the rules of counting." }] },
        { id: "s1", type: "theory", title: "Theorem 1.3.2: Uniqueness Theorem", content: "**Theorem:** If $S$ is a finite set, then the number of elements in $S$ is a unique number in $\\mathbb{N}$.\n\nThis theorem assures us that our definitions do not lead to conclusions that conflict with our basic experience of counting. A set cannot have $n$ elements and $m$ elements simultaneously if $n \\neq m$." }
      ]
    },
    {
      id: "les-1-3-1-t3", title: "Theorem 1.3.3: N is Infinite", description: "The set of natural numbers never ends", icon: "Infinity",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "According to our strict definition, why is $\\mathbb{N}$ infinite?", options: [{ id: "A", text: "Because you can't create a bijection from $\\mathbb{N}_n$ to $\\mathbb{N}$ for any $n$.", isCorrect: true, explanation: "No matter how large $n$ is, $\\mathbb{N}$ always has more elements." }, { id: "B", text: "Because it has numbers larger than 1 billion.", isCorrect: false, explanation: "Magnitude is not cardinality." }] },
        { id: "s1", type: "theory", title: "Theorem 1.3.3", content: "**Theorem:** The set $\\mathbb{N}$ of natural numbers is an infinite set.\n\nWhile this feels completely obvious, mathematically it means we can prove that for *any* chosen integer $n$, there is no possible bijective function from $\\mathbb{N}_n = \\{1, 2, \\dots, n\\}$ that can cover all elements of $\\mathbb{N}$. Since it cannot be finite for any $n$, it is infinite by definition." }
      ]
    },
    {
      id: "les-1-3-1-t4", title: "Theorem 1.3.4: Finite Algebra", description: "Unions and differences of finite sets", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Theorem 1.3.4: Properties", content: "**Theorem 1.3.4:**\n**(a)** If $A$ has $m$ elements, $B$ has $n$ elements, and $A \\cap B = \\emptyset$, then $A \\cup B$ has $m+n$ elements.\n**(b)** If $A$ has $m \\in \\mathbb{N}$ elements and $C \\subseteq A$ has $1$ element, then $A \\setminus C$ has $m-1$ elements.\n**(c)** If $C$ is an infinite set and $B$ is a finite set, then $C \\setminus B$ is an infinite set." },
        { id: "s1", type: "proof", title: "Interactive Proof of (a)", content: "**Goal: Construct a bijection from $\\mathbb{N}_{m+n}$ to $A \\cup B$.**", interactiveSteps: [
            { stepText: "We know there is a bijection $f: \\mathbb{N}_m \\to A$, and a bijection $g: \\mathbb{N}_n \\to B$." },
            { prompt: "We want to define a new function $h$ on $\\mathbb{N}_{m+n}$. For the first $m$ numbers ($1 \\le i \\le m$), what should $h(i)$ equal?", options: [{ id: "A", text: "$f(i)$", isCorrect: true, explanation: "We just map the first m elements exactly as f did to A." }, { id: "B", text: "$g(i)$", isCorrect: false, explanation: "g only takes inputs up to n." }], stepText: "Let $h(i) = f(i)$ for $i = 1, \\dots, m$." },
            { prompt: "Now for the remaining numbers ($m+1 \\le i \\le m+n$). We want to use $g$, but $g$ expects inputs from 1 to $n$. How do we shift the input?", options: [{ id: "A", text: "$h(i) = g(i - m)$", isCorrect: true, explanation: "If i=m+1, then i-m = 1, which perfectly feeds into g." }, { id: "B", text: "$h(i) = g(i)$", isCorrect: false, explanation: "i is too large for g." }], stepText: "Let $h(i) = g(i-m)$ for $i = m+1, \\dots, m+n$." },
            { stepText: "Since $A$ and $B$ are disjoint, these two pieces never overlap in output. Thus $h$ is a perfect bijection from $\\mathbb{N}_{m+n}$ to $A \\cup B$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-3-1-t5", title: "Theorem 1.3.5: Subsets and Cardinality", description: "Subsets of finite vs infinite sets", icon: "Minimize2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If you take a subset of a finite set, could it possibly be infinite?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "You can't pull an infinite amount of items from a finite bucket." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That defies logic." }] },
        { id: "s1", type: "theory", title: "Theorem 1.3.5", content: "Suppose that $S$ and $T$ are sets and that $T \\subseteq S$.\n\n**(a)** If $S$ is a finite set, then $T$ is a finite set.\n**(b)** If $T$ is an infinite set, then $S$ is an infinite set.\n\nNotice that (b) is simply the **contrapositive** of (a). If a subset is already infinite, the larger set encompassing it must also be infinite." },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "If $T$ is infinite and $T \\subseteq S$, then $S$ must be ___.", blankAnswer: "infinite" }
      ]
    }
  ]
};