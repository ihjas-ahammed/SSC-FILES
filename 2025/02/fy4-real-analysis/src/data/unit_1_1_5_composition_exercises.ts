import { Unit } from '../types';

export const UNIT_1_1_5: Unit = {
  id: "unit-1-1-5",
  title: "Composition & Images",
  description: "Exercises 13-18: Proofs involving images and composite functions",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-5-ex13", title: "Exercise 13: Image of a Difference", description: "Why f(E \\ F) != f(E) \\ f(F)", icon: "MinusCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Let $f$ and $E, F$ be as in Exercise 12: $f(x) = x^2, E = [-1, 0], F = [0, 1]$.\n\nFind the sets $E \\setminus F$ and $f(E) \\setminus f(F)$ and show that it is not true that $f(E \\setminus F) \\subseteq f(E) \\setminus f(F)$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate the sets to show the mismatch.**", interactiveSteps: [
            { stepText: "First, $E \\setminus F$ removes the point $0$ from $E$, leaving $[-1, 0)$." },
            { prompt: "What is the image $f(E \\setminus F)$?", options: [{ id: "A", text: "$(0, 1]$", isCorrect: true, explanation: "Squaring the interval [-1, 0) gives (0, 1]." }, { id: "B", text: "$[0, 1]$", isCorrect: false, explanation: "0 was removed, so x=0 cannot be squared to yield 0." }], stepText: "$f(E \\setminus F) = (0, 1]$." },
            { stepText: "Next, we calculate $f(E) \\setminus f(F)$. We know $f(E) = [0, 1]$ and $f(F) = [0, 1]$." },
            { stepText: "Removing $[0, 1]$ from $[0, 1]$ leaves the empty set $\\emptyset$." },
            { stepText: "Since $(0, 1]$ is clearly not a subset of $\\emptyset$, the statement $f(E \\setminus F) \\subseteq f(E) \\setminus f(F)$ is false. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-5-ex14", title: "Exercise 14: Image Rules", description: "Proving distribution of functions over unions", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Show that if $f : A \\to B$ and $E, F$ are subsets of $A$, then:\n$f(E \\cup F) = f(E) \\cup f(F)$\nand\n$f(E \\cap F) \\subseteq f(E) \\cap f(F)$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Union", content: "**Goal: Prove $f(E \\cup F) = f(E) \\cup f(F)$.**", interactiveSteps: [
            { stepText: "Let $y \\in f(E \\cup F)$. By definition, there exists $x \\in E \\cup F$ such that $f(x) = y$." },
            { prompt: "Since $x \\in E \\cup F$, where is $x$?", options: [{ id: "A", text: "In E or in F", isCorrect: true, explanation: "Definition of union." }, { id: "B", text: "In both E and F", isCorrect: false, explanation: "That's intersection." }], stepText: "Thus, $x \\in E$ or $x \\in F$." },
            { stepText: "If $x \\in E$, then $f(x) \\in f(E)$. If $x \\in F$, then $f(x) \\in f(F)$." },
            { stepText: "Therefore, $y = f(x) \\in f(E) \\cup f(F)$. This proves the forward inclusion. The reverse inclusion is similarly straightforward." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Intersection", content: "**Goal: Prove $f(E \\cap F) \\subseteq f(E) \\cap f(F)$.**", interactiveSteps: [
            { stepText: "Let $y \\in f(E \\cap F)$. Then there exists an $x \\in E \\cap F$ such that $f(x) = y$." },
            { stepText: "Since $x \\in E \\cap F$, we know $x \\in E$ AND $x \\in F$." },
            { stepText: "Because $x \\in E$, we have $y = f(x) \\in f(E)$. Because $x \\in F$, we have $y = f(x) \\in f(F)$." },
            { stepText: "Since $y$ is in both images, $y \\in f(E) \\cap f(F)$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-5-ex15", title: "Exercise 15: Inverse Image Rules", description: "Inverse images preserve set operations perfectly", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Show that if $f : A \\to B$ and $G, H$ are subsets of $B$, then:\n$f^{-1}(G \\cup H) = f^{-1}(G) \\cup f^{-1}(H)$\nand\n$f^{-1}(G \\cap H) = f^{-1}(G) \\cap f^{-1}(H)$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Union", content: "**Goal: Prove $f^{-1}(G \\cup H) = f^{-1}(G) \\cup f^{-1}(H)$**", interactiveSteps: [
            { stepText: "Let $x \\in f^{-1}(G \\cup H)$. By definition of inverse image, $f(x) \\in G \\cup H$." },
            { prompt: "This means $f(x) \\in G$ or $f(x) \\in H$. What does this imply for $x$?", options: [{ id: "A", text: "$x \\in f^{-1}(G)$ or $x \\in f^{-1}(H)$", isCorrect: true, explanation: "By the definition of inverse image applied to the individual sets." }, { id: "B", text: "$x \\in G$ or $x \\in H$", isCorrect: false, explanation: "x is in the domain A, not the range B." }], stepText: "Therefore, $x \\in f^{-1}(G) \\cup f^{-1}(H)$." },
            { stepText: "Since the logic is completely reversible at every step, we establish equality. Goal reached!" }
        ]},
        { id: "s2", type: "theory", title: "Why Inverse is 'Better'", content: "Notice how the direct image of an intersection $f(E \\cap F)$ is only a *subset* of $f(E) \\cap f(F)$, but the inverse image preserves intersection perfectly with an *equality*.\n\nThis makes inverse images much more robust in mathematical proofs!" }
      ]
    },
    {
      id: "les-1-1-5-ex16", title: "Exercise 16: Finding a Bijection", description: "Proving a function maps R to (-1,1)", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "Show that the function $f$ defined by $f(x) := x / \\sqrt{x^2 + 1}$, $x \\in \\mathbb{R}$, is a bijection of $\\mathbb{R}$ onto $(-1, 1)$." },
        { id: "s1", type: "solution", title: "Interactive Proof: Injectivity", content: "**Goal: Show $f$ is injective (one-to-one).**", interactiveSteps: [
            { stepText: "Assume $f(x_1) = f(x_2)$. Then $x_1 / \\sqrt{x_1^2 + 1} = x_2 / \\sqrt{x_2^2 + 1}$." },
            { stepText: "Squaring both sides gives $x_1^2 / (x_1^2 + 1) = x_2^2 / (x_2^2 + 1)$." },
            { prompt: "Cross-multiply and simplify. What do you get?", options: [{ id: "A", text: "$x_1^2 = x_2^2$", isCorrect: true, explanation: "$x_1^2(x_2^2+1) = x_2^2(x_1^2+1) \\implies x_1^2 = x_2^2$." }, { id: "B", text: "$x_1 = x_2$", isCorrect: false, explanation: "Not yet, we only have their squares equal." }], stepText: "This simplifies to $x_1^2 = x_2^2$." },
            { stepText: "Since the original equation dictates that $f(x)$ has the same sign as $x$, $x_1$ and $x_2$ must have the same sign. Thus $x_1 = x_2$, proving injectivity." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Proof: Surjectivity", content: "**Goal: Show $f$ is surjective onto $(-1, 1)$.**", interactiveSteps: [
            { stepText: "Let $y \\in (-1, 1)$. We need to find $x \\in \\mathbb{R}$ such that $y = x / \\sqrt{x^2 + 1}$." },
            { stepText: "Square both sides: $y^2 = x^2 / (x^2 + 1)$." },
            { prompt: "Solve for $x^2$. What is $x^2$ equal to?", options: [{ id: "A", text: "$y^2 / (1 - y^2)$", isCorrect: true, explanation: "$y^2(x^2+1) = x^2 \\implies x^2(1-y^2) = y^2$." }, { id: "B", text: "$1 / y^2$", isCorrect: false, explanation: "Algebra incorrect." }], stepText: "We get $x^2 = y^2 / (1 - y^2)$." },
            { stepText: "Since $y \\in (-1, 1)$, $1 - y^2 > 0$, so we can take the square root. Choosing the sign matching $y$ gives $x = y / \\sqrt{1 - y^2} \\in \\mathbb{R}$. Thus $f$ is surjective. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-1-1-5-ex17", title: "Exercise 17: Explicit Bijection", description: "Mapping arbitrary open intervals", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "For $a, b \\in \\mathbb{R}$ with $a < b$, find an explicit bijection of $A := \\{x : a < x < b\\}$ onto $B := \\{y : 0 < y < 1\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Construct a linear mapping $f(x) = mx + c$.**", interactiveSteps: [
            { stepText: "We want to map the left endpoint $a$ to $0$, and the right endpoint $b$ to $1$." },
            { prompt: "To shift the interval so it starts at 0, what should we subtract from $x$?", options: [{ id: "A", text: "$a$", isCorrect: true, explanation: "If we use $(x-a)$, then when $x=a$, the value is 0." }, { id: "B", text: "$b$", isCorrect: false, explanation: "That would make the right endpoint 0." }], stepText: "Start with $f(x) = x - a$." },
            { stepText: "Currently, when $x = b$, $f(b) = b - a$. We want it to be $1$." },
            { prompt: "How do we scale $f(x)$ so the max value is 1?", options: [{ id: "A", text: "Divide by $(b - a)$", isCorrect: true, explanation: "Scaling by the length of the interval normalizes it to 1." }, { id: "B", text: "Multiply by $(b - a)$", isCorrect: false, explanation: "That would make the interval larger." }], stepText: "The final function is $f(x) = \\frac{x - a}{b - a}$." },
            { stepText: "This is a linear function with a non-zero slope, making it a clear bijection! Goal reached." }
        ]},
        { id: "s2", type: "numerical", title: "Apply the mapping", content: "Using your new function for the interval $(2, 6)$, what does the value $x=5$ map to?", numericAnswer: 0.75, numericTolerance: 0.01 }
      ]
    },
    {
      id: "les-1-1-5-ex18", title: "Exercise 18: Composition Commutativity", description: "Counterexamples in composition", icon: "Repeat",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "(a) Give an example of two functions $f, g$ on $\\mathbb{R}$ to $\\mathbb{R}$ such that $f \\neq g$, but such that $f \\circ g = g \\circ f$.\n\n(b) Give an example of three functions $f, g, h$ on $\\mathbb{R}$ such that $f \\circ (g + h) \\neq f \\circ g + f \\circ h$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find appropriate counterexamples.**", interactiveSteps: [
            { stepText: "For (a), we need two different functions that commute. Think of functions in the same 'family', like powers or scalar multiples." },
            { prompt: "Which pair of functions commute?", options: [{ id: "A", text: "$f(x) = 2x$ and $g(x) = 3x$", isCorrect: true, explanation: "$f(g(x)) = 2(3x) = 6x$. $g(f(x)) = 3(2x) = 6x$." }, { id: "B", text: "$f(x) = x^2$ and $g(x) = x+1$", isCorrect: false, explanation: "We saw earlier these do not commute." }], stepText: "Example (a): $f(x) = x^3$ and $g(x) = x^5$ also works, as $(x^5)^3 = x^{15} = (x^3)^5$." },
            { stepText: "For (b), we want to show composition does NOT distribute over addition: $f(g(x) + h(x)) \\neq f(g(x)) + f(h(x))$." },
            { stepText: "If we choose a non-linear function for $f$, this usually fails. Let $f(x) = x^2$, $g(x) = x$, $h(x) = x$." },
            { stepText: "Then $f(g(x) + h(x)) = f(2x) = 4x^2$. But $f(g(x)) + f(h(x)) = x^2 + x^2 = 2x^2$. $4x^2 \\neq 2x^2$. Goal reached!" }
        ]}
      ]
    }
  ]
};