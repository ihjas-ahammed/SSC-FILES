import { Unit } from '../types';

export const UNIT_2_2_4: Unit = {
  id: "unit-2-2-4",
  title: "Line Exercises",
  description: "Exercises 11-19: Intervals & Geometric Proofs",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-2-4-ex11", title: "Exercise 11: Graphing Absolute Values", description: "Sketching y = |x| - |x - 1|", icon: "LineChart",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Sketch the graph of the equation $y = |x| - |x - 1|$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Define the piecewise function.**", interactiveSteps: [
            { stepText: "The critical points are $x=0$ and $x=1$. We break the function into three domains." },
            { prompt: "If $x < 0$, then $|x| = -x$ and $|x-1| = -(x-1)$. What is $y$?", options: [{ id: "A", text: "$y = -x - (-x + 1) = -1$", isCorrect: true, explanation: "y = -x + x - 1 = -1." }, { id: "B", text: "$y = -2x + 1$", isCorrect: false, explanation: "Check the signs carefully." }], stepText: "For $x < 0$, $y = -1$." },
            { stepText: "If $0 \\le x < 1$, then $|x| = x$ and $|x-1| = -(x-1)$. Then $y = x - (-x + 1) = 2x - 1$." },
            { stepText: "If $x \\ge 1$, then $|x| = x$ and $|x-1| = x-1$. Then $y = x - (x - 1) = 1$." },
            { stepText: "The graph is a horizontal line at $y=-1$, a line with slope 2 from $(0,-1)$ to $(1,1)$, and a horizontal line at $y=1$." }
        ]},
        { id: "s2", type: "numerical", title: "Evaluate", content: "What is the value of $y$ when $x = 0.75$?", numericAnswer: 0.5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-4-ex12", title: "Exercise 12: Bounded Distance Sum", description: "Solving $4 < |x + 2| + |x - 1| < 5$", icon: "ListPlus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Find all $x \\in \\mathbb{R}$ that satisfy the inequality $4 < |x + 2| + |x - 1| < 5$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Analyze the function $f(x) = |x + 2| + |x - 1|$.**", interactiveSteps: [
            { stepText: "Critical points are $-2$ and $1$." },
            { prompt: "In the middle region ($-2 \\le x \\le 1$), $f(x) = (x+2) - (x-1)$. What is the value?", options: [{ id: "A", text: "3", isCorrect: true, explanation: "The x terms cancel, leaving 2 - (-1) = 3." }, { id: "B", text: "2x + 1", isCorrect: false, explanation: "The x terms cancel out." }], stepText: "In the middle, $f(x) = 3$. This never satisfies $4 < 3 < 5$, so no solutions here." },
            { stepText: "Right region ($x > 1$): $f(x) = (x+2) + (x-1) = 2x + 1$. We solve $4 < 2x + 1 < 5 \\implies 3 < 2x < 4 \\implies 1.5 < x < 2$." },
            { stepText: "Left region ($x < -2$): $f(x) = -(x+2) - (x-1) = -2x - 1$. We solve $4 < -2x - 1 < 5 \\implies 5 < -2x < 6 \\implies -3 < x < -2.5$." },
            { stepText: "Solution set: $(-3, -2.5) \\cup (1.5, 2)$." }
        ]}
      ]
    },
    {
      id: "les-2-2-4-ex13", title: "Exercise 13: Simultaneous Inequalities", description: "Intersecting solution sets", icon: "Merge",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Find all $x \\in \\mathbb{R}$ that satisfy both $|2x - 3| < 5$ and $|x + 1| > 2$ simultaneously." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve each inequality independently, then find the intersection.**", interactiveSteps: [
            { stepText: "First inequality: $|2x - 3| < 5 \\implies -5 < 2x - 3 < 5$." },
            { stepText: "Add 3: $-2 < 2x < 8$. Divide by 2: $-1 < x < 4$. So $x \\in (-1, 4)$." },
            { prompt: "Second inequality: $|x + 1| > 2$. What are the two pieces of this solution?", options: [{ id: "A", text: "$x > 1$ or $x < -3$", isCorrect: true, explanation: "x+1 > 2 implies x > 1. x+1 < -2 implies x < -3." }, { id: "B", text: "$-3 < x < 1$", isCorrect: false, explanation: "That would be for |x+1| < 2." }], stepText: "This gives $x > 1$ or $x < -3$." },
            { stepText: "Now intersect $(-1, 4)$ with $(-\\infty, -3) \\cup (1, \\infty)$." },
            { stepText: "The interval $(-1, 4)$ only overlaps with the $x > 1$ part. The intersection is $(1, 4)$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-4-ex14", title: "Exercise 14: 2D Absolute Value Equations", description: "Shapes in the Cartesian plane", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Determine and sketch the set of pairs $(x, y)$ in $\\mathbb{R} \\times \\mathbb{R}$ that satisfy:\n(a) $|x| = |y|$\n(b) $|x| + |y| = 1$\n(c) $|xy| = 2$\n(d) $|x| - |y| = 2$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify the geometric shapes.**", interactiveSteps: [
            { stepText: "(a) $|x| = |y| \\implies x = y$ or $x = -y$. This forms an 'X' shape composed of two diagonal lines passing through the origin." },
            { prompt: "For (b) $|x| + |y| = 1$, consider the first quadrant where $x, y \\ge 0$. The equation is $x + y = 1$. What shape does this make when mirrored into all four quadrants?", options: [{ id: "A", text: "A square (diamond shape)", isCorrect: true, explanation: "The vertices are (1,0), (0,1), (-1,0), (0,-1)." }, { id: "B", text: "A circle", isCorrect: false, explanation: "A circle would be x^2 + y^2 = 1." }], stepText: "(b) It forms a diamond/square with vertices at $(\\pm1, 0)$ and $(0, \\pm1)$." },
            { stepText: "(c) $|xy| = 2 \\implies xy = 2$ or $xy = -2$. These are four hyperbolic curves in the four quadrants." },
            { stepText: "(d) $|x| - |y| = 2$. In Q1, $x - y = 2 \\implies y = x - 2$. Mirroring this to all quadrants yields a set of rays forming an hourglass shape pointing left and right." }
        ]}
      ]
    },
    {
      id: "les-2-2-4-ex15", title: "Exercise 15: 2D Absolute Value Inequalities", description: "Filled regions in the Cartesian plane", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Determine and sketch the set of pairs $(x, y)$ in $\\mathbb{R} \\times \\mathbb{R}$ that satisfy:\n(a) $|x| \\le |y|$\n(b) $|x| + |y| \\le 1$\n(c) $|xy| \\le 2$\n(d) $|x| - |y| \\ge 2$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify the shaded regions.**", interactiveSteps: [
            { stepText: "These are the filled-in versions of the shapes from Exercise 14." },
            { prompt: "For (a) $|x| \\le |y|$, where is this region relative to the 'X' shape of $y = \\pm x$?", options: [{ id: "A", text: "Top and bottom wedges", isCorrect: true, explanation: "For a given x, y must be larger in magnitude. E.g., (1, 5) satisfies 1 <= 5." }, { id: "B", text: "Left and right wedges", isCorrect: false, explanation: "That would be |x| >= |y|." }], stepText: "(a) Shaded regions are the upper and lower quadrants bounded by $y = \\pm x$." },
            { stepText: "(b) $|x| + |y| \\le 1$ represents the *interior* of the diamond shape." },
            { stepText: "(c) $|xy| \\le 2$ represents the cross-shaped region situated *between* the hyperbola branches, containing the origin." },
            { stepText: "(d) $|x| - |y| \\ge 2 \\implies |x| \\ge |y| + 2$. These are the regions strictly to the left of $x = -2$ and right of $x = 2$, bounded by the rays from Ex 14d." }
        ]}
      ]
    },
    {
      id: "les-2-2-4-ex16", title: "Exercise 16: Neighborhood Operations", description: "Intersections and Unions of Neighborhoods", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "Let $\\epsilon > 0$ and $\\delta > 0$, and $a \\in \\mathbb{R}$. \n\nShow that $V_\\epsilon(a) \\cap V_\\delta(a)$ and $V_\\epsilon(a) \\cup V_\\delta(a)$ are $\\gamma$-neighborhoods of $a$ for appropriate values of $\\gamma$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $\\gamma$ for both cases.**", interactiveSteps: [
            { stepText: "A neighborhood $V_\\epsilon(a)$ is an interval $(a - \\epsilon, a + \\epsilon)$. One neighborhood is always completely contained inside the other, depending on which radius is smaller." },
            { prompt: "What is the intersection $V_\\epsilon(a) \\cap V_\\delta(a)$ equal to?", options: [{ id: "A", text: "$V_\\gamma(a)$ where $\\gamma = \\min(\\epsilon, \\delta)$", isCorrect: true, explanation: "The intersection of two nested intervals is the smaller interval." }, { id: "B", text: "$V_\\gamma(a)$ where $\\gamma = \\max(\\epsilon, \\delta)$", isCorrect: false, explanation: "That would be the union." }], stepText: "The intersection is $V_{\\min(\\epsilon, \\delta)}(a)$." },
            { stepText: "Similarly, the union of the two nested intervals is simply the larger interval." },
            { stepText: "Therefore, the union $V_\\epsilon(a) \\cup V_\\delta(a)$ is $V_{\\max(\\epsilon, \\delta)}(a)$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-4-ex17", title: "Exercise 17: Disjoint Neighborhoods", description: "Separating distinct points", icon: "SplitSquareHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "Show that if $a, b \\in \\mathbb{R}$, and $a \\neq b$, then there exist $\\epsilon$-neighborhoods $U$ of $a$ and $V$ of $b$ such that $U \\cap V = \\emptyset$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Find an $\\epsilon$ that guarantees separation.**", interactiveSteps: [
            { stepText: "Since $a \\neq b$, the distance between them is $|a - b| > 0$." },
            { prompt: "To prevent the neighborhoods from touching, we should set their radius $\\epsilon$ to be at most what fraction of the total distance?", options: [{ id: "A", text: "Half the distance: $|a - b|/2$", isCorrect: true, explanation: "If they both reach out exactly halfway, they won't overlap." }, { id: "B", text: "The full distance: $|a - b|$", isCorrect: false, explanation: "They would overlap heavily." }], stepText: "Let $\\epsilon = \\frac{|a - b|}{2}$. Since $a \\neq b$, $\\epsilon > 0$." },
            { stepText: "Let $U = V_\\epsilon(a)$ and $V = V_\\epsilon(b)$." },
            { stepText: "Assume for contradiction there is some $x \\in U \\cap V$. Then $|x - a| < \\epsilon$ and $|x - b| < \\epsilon$." },
            { stepText: "By the Triangle Inequality: $|a - b| = |a - x + x - b| \\le |x - a| + |x - b| < \\epsilon + \\epsilon = 2\\epsilon$." },
            { stepText: "But $2\\epsilon = |a - b|$. So we get $|a - b| < |a - b|$, a contradiction. Thus $U \\cap V = \\emptyset$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-4-ex18", title: "Exercise 18: Formulas for Min and Max", description: "Absolute value formulations for maximums", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "Show that if $a, b \\in \\mathbb{R}$ then:\n(a) $\\max\\{a, b\\} = \\frac{1}{2}(a + b + |a - b|)$\n(b) $\\min\\{a, b\\} = \\frac{1}{2}(a + b - |a - b|)$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Max Formula", content: "**Goal: Verify the formula by evaluating cases.**", interactiveSteps: [
            { stepText: "Since $a$ and $b$ are symmetric in the formula, we can assume without loss of generality that $a \\ge b$." },
            { prompt: "If $a \\ge b$, what does $|a - b|$ simplify to?", options: [{ id: "A", text: "$a - b$", isCorrect: true, explanation: "Since a >= b, a-b is positive, so the absolute value does nothing." }, { id: "B", text: "$b - a$", isCorrect: false, explanation: "That would be if b > a." }], stepText: "It simplifies to $a - b$." },
            { stepText: "Plug this into the formula: $\\frac{1}{2}(a + b + a - b)$." },
            { stepText: "The $b$ terms cancel: $\\frac{1}{2}(2a) = a$." },
            { stepText: "Since we assumed $a \\ge b$, $\\max\\{a,b\\} = a$. The formula yields $a$. It works perfectly! (A similar substitution verifies the Min formula)." }
        ]},
        { id: "s2", type: "numerical", title: "Calculate", content: "Evaluate the Max formula for $a = 10, b = 4$. What is $|a-b|$ here?", numericAnswer: 6, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-4-ex19", title: "Exercise 19: The Middle Number", description: "Finding the median of three numbers", icon: "SlidersHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "Show that if $a, b, c \\in \\mathbb{R}$, then the \"middle number\" is:\n$\\operatorname{mid}\\{a, b, c\\} = \\min\\{\\max\\{a, b\\}, \\max\\{b, c\\}, \\max\\{c, a\\}\\}$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Test an ordered arrangement.**", interactiveSteps: [
            { stepText: "Since the formula is symmetric, we can assume a specific ordering without loss of generality. Let's assume $a \\le b \\le c$." },
            { prompt: "Under this assumption, what is the 'middle' number we expect the formula to output?", options: [{ id: "A", text: "$b$", isCorrect: true, explanation: "It is between a and c." }, { id: "B", text: "$a$", isCorrect: false, explanation: "a is the minimum." }], stepText: "We expect the result to be $b$." },
            { stepText: "Let's evaluate the inner terms: $\\max\\{a, b\\} = b$. $\\max\\{b, c\\} = c$. $\\max\\{c, a\\} = c$." },
            { stepText: "Now plug these into the outer function: $\\min\\{b, c, c\\}$." },
            { stepText: "The minimum of $b$ and $c$ is $b$. The formula outputs $b$! Since ordering doesn't matter for the formula, it always yields the median. Goal reached!" }
        ]}
      ]
    }
  ]
};