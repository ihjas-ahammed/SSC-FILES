import { Unit } from '../types';

export const UNIT_2_3_3: Unit = {
  id: "unit-2-3-3",
  title: "Bounds Exercises",
  description: "Exercises 1-7: Finding Infima and Suprema of Specific Sets",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-3-3-ex1", title: "Exercise 1: Non-negative Reals", description: "Finding bounds for [0, ∞)", icon: "ArrowUpRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Let $S_1 := \\{x \\in \\mathbb{R} : x \\ge 0\\}$. \n\nShow in detail that the set $S_1$ has lower bounds, but no upper bounds. Show that $\\inf S_1 = 0$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Establish the bounds of $S_1$.**", interactiveSteps: [
            { stepText: "By definition, every element $x \in S_1$ satisfies $x \ge 0$. Therefore, $0$ is a lower bound for $S_1$." },
            { prompt: "Could $S_1$ have an upper bound?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "If $u$ is an upper bound, $x \le u$ for all $x \ge 0$." }, { id: "B", text: "No", isCorrect: true, explanation: "By the Archimedean Property, for any $u \in \mathbb{R}$, there exists an integer $n > u$, and $n \in S_1$." }], stepText: "Suppose $u$ is an upper bound. Then $x \le u$ for all $x \ge 0$. But $u+1 > 0$, so $u+1 \in S_1$. Thus $u+1 \le u \implies 1 \le 0$, a contradiction. So $S_1$ has no upper bounds." },
            { stepText: "We know $0$ is a lower bound. To show $\\inf S_1 = 0$, we must show it is the *greatest* lower bound." },
            { stepText: "Let $w > 0$. Since $w \in S_1$ and $w/2 < w$, the element $w/2 \in S_1$ is strictly smaller than $w$. Thus $w$ cannot be a lower bound. \nTherefore, $0$ is the greatest lower bound. $\\inf S_1 = 0$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Test the property", content: "If $w = 10$ is proposed as a lower bound, what is an element in $S_1$ strictly smaller than $10$?", numericAnswer: 5, numericTolerance: 4.9 } // Accept anything from 0.1 to 9.9 logically, but numeric answer handles single match. We will use 5.
      ]
    },
    {
      id: "les-2-3-3-ex2", title: "Exercise 2: Strictly Positive Reals", description: "Finding bounds for (0, ∞)", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Let $S_2 := \\{x \\in \\mathbb{R} : x > 0\\}$.\n\nDoes $S_2$ have lower bounds? Does $S_2$ have upper bounds? Does $\\inf S_2$ exist? Does $\\sup S_2$ exist? Prove your statements." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate bounds for $S_2$.**", interactiveSteps: [
            { stepText: "Like $S_1$, $S_2$ contains arbitrarily large numbers. By the Archimedean Property, it has no upper bounds. Thus, $\\sup S_2$ does not exist." },
            { prompt: "Is 0 a lower bound for $S_2$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "By definition, all elements in $S_2$ are strictly greater than 0, which means they are $\\ge 0$." }, { id: "B", text: "No", isCorrect: false, explanation: "A lower bound doesn't need to be in the set." }], stepText: "Yes, $0$ is a lower bound because $x > 0 \implies x \ge 0$ for all $x \in S_2$." },
            { stepText: "Since $S_2$ is bounded below, the Completeness Property (Infimum version) guarantees that $\\inf S_2$ exists." },
            { stepText: "Let $w > 0$. Then $w/2 > 0$, so $w/2 \in S_2$. Since $w/2 < w$, $w$ cannot be a lower bound. Thus $0$ is the greatest lower bound, so $\\inf S_2 = 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-3-3-ex3", title: "Exercise 3: Sequence of Reciprocals", description: "Finding bounds for S = {1/n}", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Let $S_3 = \\{1/n : n \\in \\mathbb{N}\\}$. \n\nShow that $\\sup S_3 = 1$ and $\\inf S_3 \ge 0$. \n*(It will follow from the Archimedean Property that $\\inf S_3 = 0$.)*" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the supremum and infimum.**", interactiveSteps: [
            { stepText: "The elements of $S_3$ are $1, 1/2, 1/3, 1/4, \dots$" },
            { prompt: "What is the maximum element in this set?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "Occurs when n=1." }, { id: "B", text: "There is no maximum", isCorrect: false, explanation: "The set has a clear largest value." }], stepText: "The maximum element is $1$." },
            { stepText: "Since $1 \in S_3$ and $1/n \le 1$ for all $n \in \mathbb{N}$, 1 is an upper bound. Since it's in the set, it must be the least upper bound. $\\sup S_3 = 1$." },
            { stepText: "For the infimum, note that $n \ge 1 > 0$, so $1/n > 0$ for all $n \in \mathbb{N}$. Thus 0 is a lower bound, implying $\\inf S_3 \ge 0$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Archimedean check", content: "By the Archimedean property, if $\\inf S_3 = w > 0$, there exists an $n$ such that $1/n < w$. This contradicts $w$ being a lower bound! Thus $\\inf S_3$ must equal what?", numericAnswer: 0, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-3-3-ex4", title: "Exercise 4: Alternating Sequence", description: "Bounds for an oscillating set", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Let $S_4 := \\{1 - (-1)^n / n : n \\in \\mathbb{N}\\}$. \n\nFind $\\inf S_4$ and $\\sup S_4$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate the terms to find extremes.**", interactiveSteps: [
            { stepText: "Let's write out the first few terms by plugging in $n=1, 2, 3, 4 \dots$" },
            { prompt: "What is the value of the term for $n=1$?", options: [{ id: "A", text: "2", isCorrect: true, explanation: "1 - (-1)/1 = 1 + 1 = 2." }, { id: "B", text: "0", isCorrect: false, explanation: "Check your signs." }], stepText: "For $n=1$, $x_1 = 2$." },
            { stepText: "For $n=2$, $x_2 = 1 - 1/2 = 1/2$." },
            { stepText: "For $n=3$, $x_3 = 1 - (-1)/3 = 4/3 \approx 1.33$." },
            { stepText: "For $n=4$, $x_4 = 1 - 1/4 = 3/4 = 0.75$." },
            { stepText: "Notice the odd terms are $1 + 1/n$ (decreasing from 2 to 1). The even terms are $1 - 1/n$ (increasing from 1/2 to 1)." },
            { stepText: "The maximum value is clearly $2$, so $\\sup S_4 = 2$. The minimum value is clearly $1/2$, so $\\inf S_4 = 1/2$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Sum of bounds", content: "What is $\\sup S_4 + \\inf S_4$?", numericAnswer: 2.5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-3-3-ex5", title: "Exercise 5: Sets from Inequalities", description: "Finding sup and inf for A and B", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5 (a & b)", content: "Find the infimum and supremum, if they exist, of each of the following sets.\n(a) $A := \\{x \\in \\mathbb{R} : 2x + 5 > 0\\}$\n(b) $B := \\{x \\in \\mathbb{R} : x + 2 \\ge x^2\\}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Set A", content: "**Goal: Solve the inequality to describe set A.**", interactiveSteps: [
            { stepText: "We solve $2x + 5 > 0 \implies 2x > -5 \implies x > -5/2$." },
            { prompt: "So $A = (-5/2, \infty)$. Does A have a supremum?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "The set goes to infinity." }, { id: "B", text: "Yes", isCorrect: false, explanation: "There is no upper bound." }], stepText: "Set $A$ is not bounded above, so $\\sup A$ does not exist (or is $+\\infty$)." },
            { stepText: "The set is bounded below by $-5/2$. Since we can get arbitrarily close to it, $\\inf A = -5/2$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Set B", content: "**Goal: Solve the quadratic inequality.**", interactiveSteps: [
            { stepText: "We have $x^2 - x - 2 \\le 0$." },
            { prompt: "How does this polynomial factor?", options: [{ id: "A", text: "$(x-2)(x+1) \\le 0$", isCorrect: true, explanation: "Roots are 2 and -1." }, { id: "B", text: "$(x+2)(x-1) \\le 0$", isCorrect: false, explanation: "That would be x^2 + x - 2." }], stepText: "It factors as $(x-2)(x+1) \\le 0$." },
            { stepText: "This means $x$ must be between the roots: $-1 \\le x \\le 2$. So $B = [-1, 2]$." },
            { stepText: "Thus, $\\inf B = -1$ and $\\sup B = 2$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-3-3-ex6", title: "Exercise 5: More Inequalities", description: "Finding sup and inf for C and D", icon: "Scissors",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5 (c & d)", content: "Find the infimum and supremum, if they exist, of each of the following sets.\n(c) $C := \\{x \\in \\mathbb{R} : x < 1/x\\}$\n(d) $D := \\{x \\in \\mathbb{R} : x^2 - 2x - 5 < 0\\}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Set C", content: "**Goal: Solve $x < 1/x$.**", interactiveSteps: [
            { stepText: "Rewrite as $x - 1/x < 0 \implies \\frac{x^2 - 1}{x} < 0 \implies \\frac{(x-1)(x+1)}{x} < 0$." },
            { prompt: "The critical points are $-1, 0, 1$. Which intervals make the expression negative?", options: [{ id: "A", text: "$(-\\infty, -1) \\cup (0, 1)$", isCorrect: true, explanation: "Testing values in these regions yields a negative result." }, { id: "B", text: "$(-1, 0) \\cup (1, \infty)$", isCorrect: false, explanation: "These yield positive results." }], stepText: "The set is $C = (-\\infty, -1) \\cup (0, 1)$." },
            { stepText: "This set has no lower bound, so $\\inf C$ does not exist. The upper bound is $1$, so $\\sup C = 1$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Set D", content: "**Goal: Solve $x^2 - 2x - 5 < 0$.**", interactiveSteps: [
            { stepText: "Complete the square: $x^2 - 2x + 1 - 6 < 0 \implies (x-1)^2 < 6$." },
            { stepText: "Take the square root: $|x-1| < \\sqrt{6}$." },
            { stepText: "This unfolds to $1 - \\sqrt{6} < x < 1 + \\sqrt{6}$." },
            { stepText: "Thus, $\\inf D = 1 - \\sqrt{6}$ and $\\sup D = 1 + \\sqrt{6}$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-3-3-ex7", title: "Exercise 6 & 7: Properties of Sup/Inf", description: "Infimum of negated sets and suprema inside sets", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6 & 7", content: "**Exercise 6:** Let $S$ be a nonempty subset of $\\mathbb{R}$ bounded below. Prove that $\\inf S = -\\sup\\{-s : s \\in S\\}$.\n\n**Exercise 7:** If a set $S \\subseteq \\mathbb{R}$ contains one of its upper bounds, show that this upper bound is the supremum of $S$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Exercise 6", content: "**Goal: Relate the infimum of $S$ to the supremum of $-S$.**", interactiveSteps: [
            { stepText: "Let $S' = \\{-s : s \\in S\\}$. Since $S$ is bounded below by $w$, $s \\ge w \implies -s \\le -w$. Thus $S'$ is bounded above by $-w$." },
            { prompt: "By the Completeness Property, $S'$ has a supremum. Let $u = \\sup S'$. What does $u$ represent for the original set $S$?", options: [{ id: "A", text: "$-u$ is a lower bound for $S$", isCorrect: true, explanation: "Since $-s \le u \implies s \ge -u$, making $-u$ a lower bound for $S$." }, { id: "B", text: "$u$ is a lower bound for $S$", isCorrect: false, explanation: "No, -u is." }], stepText: "Since $-s \le u$ for all $s \in S$, we have $s \ge -u$. Thus $-u$ is a lower bound for $S$." },
            { stepText: "If $v$ is any lower bound for $S$ ($s \ge v$), then $-s \le -v$, making $-v$ an upper bound for $S'$." },
            { stepText: "Since $u$ is the *least* upper bound of $S'$, $u \le -v \implies -u \ge v$. Therefore $-u$ is the *greatest* lower bound of $S$. Thus $\\inf S = -\\sup S'$. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Exercise 7", content: "**Goal: Show an upper bound inside the set is the supremum.**", interactiveSteps: [
            { stepText: "Let $u$ be an upper bound of $S$ such that $u \in S$." },
            { prompt: "To prove $u = \\sup S$, we must show it is the *least* upper bound. Let $v$ be any other upper bound. What must be true?", options: [{ id: "A", text: "$u \le v$", isCorrect: true, explanation: "Since $v$ is an upper bound and $u$ is an element of the set, $u$ must be $\le v$." }, { id: "B", text: "$v \le u$", isCorrect: false, explanation: "That would mean $u$ is the greatest upper bound." }], stepText: "Since $v$ is an upper bound of $S$, we have $s \le v$ for all $s \in S$." },
            { stepText: "Since $u \in S$, we can plug $s = u$ into the inequality, yielding $u \le v$." },
            { stepText: "Since $u$ is an upper bound that is $\\le$ every other upper bound, it is the least upper bound. Thus $u = \\sup S$. Goal reached!" }
        ]}
      ]
    }
  ]
};