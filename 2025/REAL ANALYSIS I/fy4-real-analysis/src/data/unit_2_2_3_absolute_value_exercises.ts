import { Unit } from '../types';

export const UNIT_2_2_3: Unit = {
  id: "unit-2-2-3",
  title: "Absolute Value Exercises",
  description: "Exercises 1-10: Basic Properties & Inequalities",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-2-3-ex1", title: "Exercise 1: Alternate Definitions", description: "Proving absolute value via squares and division", icon: "FunctionSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "If $a, b \\in \\mathbb{R}$ and $b \\neq 0$, show that:\n(a) $|a| = \\sqrt{a^2}$\n(b) $|a/b| = |a|/|b|$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Prove $|a| = \\sqrt{a^2}$.**", interactiveSteps: [
            { stepText: "By Theorem 2.2.2(b), we know that $|a|^2 = a^2$." },
            { prompt: "Since $|a| \\ge 0$, what happens if we take the principal (positive) square root of both sides?", options: [{ id: "A", text: "$\\sqrt{|a|^2} = \\sqrt{a^2}$", isCorrect: true, explanation: "Taking the square root of both sides maintains equality." }, { id: "B", text: "$a = \\sqrt{a^2}$", isCorrect: false, explanation: "Not necessarily, because 'a' could be negative." }], stepText: "We obtain $\\sqrt{|a|^2} = \\sqrt{a^2}$." },
            { stepText: "Since $|a|$ is non-negative, the principal square root of $|a|^2$ is exactly $|a|$." },
            { stepText: "Therefore, $|a| = \\sqrt{a^2}$. Goal reached!" }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Prove $|a/b| = |a|/|b|$.**", interactiveSteps: [
            { stepText: "We know that division is defined as multiplication by the inverse: $a/b = a(1/b)$." },
            { stepText: "Using the product rule for absolute values (Theorem 2.2.2a): $|a(1/b)| = |a| \\cdot |1/b|$." },
            { prompt: "To finish, we need to show $|1/b| = 1/|b|$. If we multiply $|1/b|$ by $|b|$, what do we get by the product rule?", options: [{ id: "A", text: "$|(1/b) \\cdot b| = |1| = 1$", isCorrect: true, explanation: "The product rule applies in reverse to combine them." }, { id: "B", text: "$1/|b^2|$", isCorrect: false, explanation: "Check the algebra." }], stepText: "We get $|(1/b) \\cdot b| = |1| = 1$." },
            { stepText: "Since $|1/b| \\cdot |b| = 1$, we divide by $|b|$ (which is $>0$) to get $|1/b| = 1/|b|$." },
            { stepText: "Substitute back: $|a/b| = |a|(1/|b|) = |a|/|b|$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-3-ex2", title: "Exercise 2: Triangle Equality", description: "When does the Triangle Inequality become equal?", icon: "Triangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "If $a, b \\in \\mathbb{R}$, show that $|a + b| = |a| + |b|$ if and only if $ab \\ge 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use squares to establish the equivalence.**", interactiveSteps: [
            { stepText: "Since both sides of $|a + b| = |a| + |b|$ are non-negative, the equation holds if and only if their squares are equal." },
            { prompt: "Expand the square of the left side: $|a + b|^2$. What is it equivalent to?", options: [{ id: "A", text: "$(a + b)^2 = a^2 + 2ab + b^2$", isCorrect: true, explanation: "By Theorem 2.2.2(b), the absolute value squared is just the expression squared." }, { id: "B", text: "$a^2 + b^2$", isCorrect: false, explanation: "You missed the cross term 2ab." }], stepText: "Left side squared: $a^2 + 2ab + b^2$." },
            { stepText: "Expand the square of the right side: $(|a| + |b|)^2 = |a|^2 + 2|a||b| + |b|^2$." },
            { stepText: "Using properties of absolute value, this simplifies to $a^2 + 2|ab| + b^2$." },
            { prompt: "Equating the two expansions, we get $a^2 + 2ab + b^2 = a^2 + 2|ab| + b^2$. What does this simplify to?", options: [{ id: "A", text: "$ab = |ab|$", isCorrect: true, explanation: "Subtract a^2 and b^2, then divide by 2." }, { id: "B", text: "$ab = 0$", isCorrect: false, explanation: "Not necessarily 0." }], stepText: "This simplifies exactly to $ab = |ab|$." },
            { stepText: "A number equals its absolute value if and only if that number is $\\ge 0$. Thus, $ab \\ge 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-3-ex3", title: "Exercise 3: Betweenness", description: "Geometric interpretation of points on a line", icon: "AlignHorizontalJustifyCenter",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "If $x, y, z \\in \\mathbb{R}$ and $x \\le z$, show that $x \\le y \\le z$ if and only if $|x - y| + |y - z| = |x - z|$. \n\nInterpret this geometrically." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume $x \\le y \\le z$, prove the equation.**", interactiveSteps: [
            { stepText: "If $x \\le y \\le z$, we can determine the signs of the differences." },
            { prompt: "What are the signs of $(x-y)$ and $(y-z)$?", options: [{ id: "A", text: "Both are $\\le 0$", isCorrect: true, explanation: "Since x <= y, x-y is non-positive. Same for y-z." }, { id: "B", text: "Both are $\\ge 0$", isCorrect: false, explanation: "That would be true if x >= y >= z." }], stepText: "Both $(x-y)$ and $(y-z)$ are $\\le 0$." },
            { stepText: "Since they are non-positive, their absolute values are the negatives of themselves: $|x-y| = -(x-y) = y-x$, and $|y-z| = -(y-z) = z-y$." },
            { stepText: "Add them together: $(y-x) + (z-y) = z - x$." },
            { stepText: "Since $x \\le z$, $z - x \\ge 0$, so $z - x = |x - z|$. Thus, $|x-y| + |y-z| = |x-z|$. Forward direction proved!" }
        ]},
        { id: "s2", type: "theory", title: "Geometric Interpretation", content: "Geometrically, $|a - b|$ represents the **distance** between points $a$ and $b$ on the real line.\n\nThe equation $|x - y| + |y - z| = |x - z|$ says that the distance from $x$ to $y$, plus the distance from $y$ to $z$, equals the total distance from $x$ to $z$.\n\nThis perfectly defines the concept of **betweenness**: a point $y$ lies on the line segment connecting $x$ and $z$." }
      ]
    },
    {
      id: "les-2-2-3-ex4", title: "Exercise 4: Expanding Epsilon", description: "Proving the neighborhood definition", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Show that $|x - a| < \\epsilon$ if and only if $a - \\epsilon < x < a + \\epsilon$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Establish the compound inequality.**", interactiveSteps: [
            { stepText: "By Theorem 2.2.2(c), we know that for any $y$ and $c \\ge 0$, $|y| < c \\iff -c < y < c$." },
            { prompt: "Let $y = (x - a)$ and $c = \\epsilon$. What does the inequality become?", options: [{ id: "A", text: "$-\\epsilon < x - a < \\epsilon$", isCorrect: true, explanation: "Direct substitution." }, { id: "B", text: "$a - \\epsilon < x < a + \\epsilon$", isCorrect: false, explanation: "That's the final step, but what is the immediate substitution?" }], stepText: "We substitute to get $-\\epsilon < x - a < \\epsilon$." },
            { stepText: "Now, apply the addition rule for inequalities (Theorem 2.1.7b) by adding $a$ to all three parts." },
            { stepText: "This yields $a - \\epsilon < x < a + \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-3-ex5", title: "Exercise 5: Distance in an Interval", description: "Bounding the distance between two points in an interval", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "If $a < x < b$ and $a < y < b$, show that $|x - y| < b - a$. \n\nInterpret this geometrically." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use inequalities to bound the difference.**", interactiveSteps: [
            { stepText: "We are given $a < x < b$. Multiply the second inequality $a < y < b$ by $-1$." },
            { prompt: "What does $a < y < b$ become when multiplied by $-1$?", options: [{ id: "A", text: "$-b < -y < -a$", isCorrect: true, explanation: "Multiply by -1 and flip the inequalities." }, { id: "B", text: "$-a < -y < -b$", isCorrect: false, explanation: "This states that a larger negative is greater than a smaller negative, which is false." }], stepText: "It becomes $-b < -y < -a$." },
            { stepText: "Now add this compound inequality to $a < x < b$." },
            { stepText: "Lower bounds: $a + (-b) = a - b$. Middle: $x + (-y) = x - y$. Upper bounds: $b + (-a) = b - a$." },
            { stepText: "So we have $a - b < x - y < b - a$. Notice that $a - b = -(b - a)$." },
            { stepText: "This is precisely $-(b - a) < x - y < (b - a)$, which by Theorem 2.2.2(c) is $|x - y| < b - a$. Goal reached!" }
        ]},
        { id: "s2", type: "theory", title: "Geometric Interpretation", content: "Geometrically, $x$ and $y$ are both points situated strictly inside the open interval $(a, b)$.\n\nThe distance between any two points inside an interval must be strictly less than the total length of the interval, which is $b - a$." }
      ]
    },
    {
      id: "les-2-2-3-ex6", title: "Exercise 6: Solving Absolute Inequalities", description: "Isolating x in linear and quadratic forms", icon: "AlignEndHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Find all $x \\in \\mathbb{R}$ that satisfy the following inequalities:\n(a) $|4x - 5| \\le 13$\n(b) $|x^2 - 1| \\le 3$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Solve $|4x - 5| \\le 13$.**", interactiveSteps: [
            { stepText: "Open the absolute value into a compound inequality: $-13 \\le 4x - 5 \\le 13$." },
            { prompt: "What is the next algebraic step?", options: [{ id: "A", text: "Add 5 to all parts", isCorrect: true, explanation: "To isolate 4x." }, { id: "B", text: "Divide by 4", isCorrect: false, explanation: "You must handle the addition/subtraction first." }], stepText: "Add 5: $-8 \\le 4x \\le 18$." },
            { stepText: "Divide by 4 (a positive number, so signs don't flip): $-2 \\le x \\le 18/4$." },
            { stepText: "Simplify the fraction: $-2 \\le x \\le 4.5$. Solution is $[-2, 4.5]$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Solve $|x^2 - 1| \\le 3$.**", interactiveSteps: [
            { stepText: "Open the absolute value: $-3 \\le x^2 - 1 \\le 3$." },
            { stepText: "Add 1 to all parts: $-2 \\le x^2 \\le 4$." },
            { prompt: "We know $x^2$ must be $\\le 4$, but what about the lower bound?", options: [{ id: "A", text: "$x^2$ is always $\\ge 0$", isCorrect: true, explanation: "Squares of real numbers are never negative, so $-2 \\le x^2$ is always true." }, { id: "B", text: "$x \\ge -\\sqrt{2}$", isCorrect: false, explanation: "You cannot take the square root of a negative number in the reals." }], stepText: "Since $x^2 \\ge 0$ is trivially true for all real $x$, the effective inequality is $0 \\le x^2 \\le 4$." },
            { stepText: "Taking the square root gives $|x| \\le 2$." },
            { stepText: "This means $-2 \\le x \\le 2$. Solution is $[-2, 2]$." }
        ]},
        { id: "s3", type: "numerical", title: "Numerical Check", content: "What is the largest integer in the solution set for part (b)?", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-3-ex7", title: "Exercise 7: Absolute Value Equations", description: "Solving equations with multiple absolute values", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Find all $x \\in \\mathbb{R}$ that satisfy the equation $|x + 1| + |x - 2| = 7$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test intervals based on the roots of the absolute values.**", interactiveSteps: [
            { stepText: "The expressions change sign at $x = -1$ and $x = 2$. We divide the real line into three regions: $x < -1$, $-1 \\le x \\le 2$, and $x > 2$." },
            { prompt: "Case 1: $x < -1$. Both expressions are negative. What is the equation?", options: [{ id: "A", text: "$-(x+1) - (x-2) = 7$", isCorrect: true, explanation: "Drop absolute values by negating both." }, { id: "B", text: "$(x+1) - (x-2) = 7$", isCorrect: false, explanation: "x+1 is negative here." }], stepText: "We solve $-2x + 1 = 7 \\implies -2x = 6 \\implies x = -3$. Since $-3 < -1$, this is a valid solution." },
            { stepText: "Case 2: $-1 \\le x \\le 2$. $(x+1)$ is positive, $(x-2)$ is negative. The equation is $(x+1) - (x-2) = 7$." },
            { stepText: "This simplifies to $3 = 7$, which is a contradiction. No solutions in this interval." },
            { stepText: "Case 3: $x > 2$. Both are positive. $(x+1) + (x-2) = 7 \\implies 2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$. Since $4 > 2$, this is valid." },
            { stepText: "The solutions are exactly $x = -3$ and $x = 4$." }
        ]},
        { id: "s2", type: "numerical", title: "Sum of Solutions", content: "What is the sum of the solutions to the equation?", numericAnswer: 1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-3-ex8", title: "Exercise 8: Single Absolute Value Equations", description: "Solving $x + 1 = |2x - 1|$", icon: "Scissors",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Find all values of $x$ that satisfy the equations:\n(a) $x + 1 = |2x - 1|$\n(b) $2x - 1 = |x - 5|$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Split based on the sign of $(2x - 1)$.**", interactiveSteps: [
            { stepText: "The expression $2x - 1$ changes sign at $x = 0.5$." },
            { prompt: "Case 1: $x \\ge 0.5$. The equation is $x + 1 = 2x - 1$. What is $x$?", options: [{ id: "A", text: "2", isCorrect: true, explanation: "Subtract x and add 1." }, { id: "B", text: "0", isCorrect: false, explanation: "Check algebra." }], stepText: "Solving gives $x = 2$. Since $2 \\ge 0.5$, this is a valid solution." },
            { stepText: "Case 2: $x < 0.5$. The equation is $x + 1 = -(2x - 1)$, which is $x + 1 = -2x + 1$." },
            { stepText: "Solving gives $3x = 0 \\implies x = 0$. Since $0 < 0.5$, this is also valid." },
            { stepText: "The solutions are $x = 0, 2$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Solve $2x - 1 = |x - 5|$.**", interactiveSteps: [
            { stepText: "Note that since an absolute value equals $2x - 1$, we MUST have $2x - 1 \\ge 0$, so $x \\ge 0.5$ for any valid solution." },
            { stepText: "Case 1: $x \\ge 5$. The equation is $2x - 1 = x - 5$." },
            { prompt: "Solving gives $x = -4$. Is this valid?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "We assumed x >= 5." }, { id: "B", text: "Yes", isCorrect: false, explanation: "-4 is not >= 5." }], stepText: "It is invalid, no solution here." },
            { stepText: "Case 2: $x < 5$. The equation is $2x - 1 = -(x - 5) = -x + 5$." },
            { stepText: "Solving gives $3x = 6 \\implies x = 2$. Since $0.5 \\le 2 < 5$, this is valid." },
            { stepText: "The only solution is $x = 2$." }
        ]}
      ]
    },
    {
      id: "les-2-2-3-ex9", title: "Exercise 9: Plotting Absolute Inequalities", description: "Solving $|x - 2| \\le x + 1$", icon: "LayoutGrid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Find all values of $x$ that satisfy the following inequalities. Sketch graphs.\n(a) $|x - 2| \\le x + 1$\n(b) $3|x| \\le 2 - x$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Solve $|x - 2| \\le x + 1$.**", interactiveSteps: [
            { stepText: "Note that we must have $x + 1 \\ge 0$, so $x \\ge -1$." },
            { prompt: "Case 1: $x \\ge 2$. The inequality is $x - 2 \\le x + 1$. What does this simplify to?", options: [{ id: "A", text: "$-2 \\le 1$", isCorrect: true, explanation: "The x terms cancel out." }, { id: "B", text: "$2x \\le 3$", isCorrect: false, explanation: "Subtract x from both sides." }], stepText: "It simplifies to $-2 \\le 1$, which is ALWAYS true. So all $x \\ge 2$ are solutions." },
            { stepText: "Case 2: $x < 2$. The inequality is $-(x - 2) \\le x + 1 \\implies -x + 2 \\le x + 1$." },
            { stepText: "Solving this gives $1 \\le 2x \\implies x \\ge 0.5$. Since we are in the case $x < 2$, the valid range is $[0.5, 2)$." },
            { stepText: "Union of the cases: $[0.5, 2) \\cup [2, \\infty) = [0.5, \\infty)$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Solve $3|x| \\le 2 - x$.**", interactiveSteps: [
            { stepText: "Case 1: $x \\ge 0$. The inequality is $3x \\le 2 - x$." },
            { stepText: "Add $x$: $4x \\le 2 \\implies x \\le 0.5$. In this case, the valid range is $[0, 0.5]$." },
            { prompt: "Case 2: $x < 0$. The inequality is $-3x \\le 2 - x$. Solve for $x$.", options: [{ id: "A", text: "$x \\ge -1$", isCorrect: true, explanation: "Add x: -2x <= 2. Divide by -2 (flip sign): x >= -1." }, { id: "B", text: "$x \\le -1$", isCorrect: false, explanation: "Don't forget to flip the inequality sign when dividing by a negative." }], stepText: "Solving gives $x \\ge -1$. In this case, the valid range is $[-1, 0)$." },
            { stepText: "Union of cases: $[-1, 0) \\cup [0, 0.5] = [-1, 0.5]$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-3-ex10", title: "Exercise 10: Squaring vs Cases", description: "Solving $|x - 1| > |x + 1|$", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Find all $x \\in \\mathbb{R}$ that satisfy the following inequalities.\n(a) $|x - 1| > |x + 1|$\n(b) $|x| + |x + 1| < 2$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Use the squaring method for $|x - 1| > |x + 1|$.**", interactiveSteps: [
            { stepText: "Since both sides are non-negative, squaring preserves the inequality: $(x - 1)^2 > (x + 1)^2$." },
            { prompt: "Expand both sides.", options: [{ id: "A", text: "$x^2 - 2x + 1 > x^2 + 2x + 1$", isCorrect: true, explanation: "Standard binomial expansion." }, { id: "B", text: "$x^2 + 1 > x^2 + 1$", isCorrect: false, explanation: "Don't forget the middle terms!" }], stepText: "We have $x^2 - 2x + 1 > x^2 + 2x + 1$." },
            { stepText: "Subtract $x^2 + 1$ from both sides: $-2x > 2x$." },
            { stepText: "Subtract $2x$: $-4x > 0$. Divide by $-4$ (flip sign): $x < 0$. Solution is $(-\\infty, 0)$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Solve $|x| + |x + 1| < 2$ using cases.**", interactiveSteps: [
            { stepText: "Critical points are $0$ and $-1$. We test three intervals." },
            { stepText: "Case 1: $x < -1$. Both are negative. $-x - (x + 1) < 2 \\implies -2x - 1 < 2 \\implies -2x < 3 \\implies x > -1.5$. Range: $(-1.5, -1)$." },
            { prompt: "Case 2: $-1 \\le x < 0$. $x$ is negative, $x+1$ is positive. What is the equation?", options: [{ id: "A", text: "$-x + (x + 1) < 2$", isCorrect: true, explanation: "Correct signs for this interval." }, { id: "B", text: "$x + (x + 1) < 2$", isCorrect: false, explanation: "x is negative, so |x| = -x." }], stepText: "Equation: $-x + x + 1 < 2 \\implies 1 < 2$. This is ALWAYS true. Range: $[-1, 0)$." },
            { stepText: "Case 3: $x \\ge 0$. Both are positive. $x + x + 1 < 2 \\implies 2x < 1 \\implies x < 0.5$. Range: $[0, 0.5)$." },
            { stepText: "Union of all three parts: $(-1.5, -1) \\cup [-1, 0) \\cup [0, 0.5) = (-1.5, 0.5)$." }
        ]}
      ]
    }
  ]
};