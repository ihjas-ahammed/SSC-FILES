import { Unit } from '../types';

export const UNIT_2_2_1: Unit = {
  id: "unit-2-2-1",
  title: "Absolute Value",
  description: "Distance from zero and the Triangle Inequality",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-2-1-1", title: "Definition 2.2.1: Absolute Value", description: "Formalizing distance from zero", icon: "SplitSquareHorizontal",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Can the absolute value of a real number ever be negative?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Absolute value represents distance, which is always >= 0." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Even for negative inputs, the absolute value is positive." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If $a$ is already a strictly negative number, how do you express its absolute value mathematically?", options: [{ id: "A", text: "$-a$", isCorrect: true, explanation: "Since a is negative, multiplying by -1 makes it positive." }, { id: "B", text: "$a$", isCorrect: false, explanation: "That would leave it negative." }] },
        { id: "s2", type: "theory", title: "Definition 2.2.1", content: "The **absolute value** of a real number $a$, denoted by $|a|$, is defined piece-wise by:\n\n$|a| := \\begin{cases} a & \\text{if } a > 0, \\\\ 0 & \\text{if } a = 0, \\\\ -a & \\text{if } a < 0. \\end{cases}$\n\nFrom this definition, we see that $|a| \\ge 0$ for all $a \\in \\mathbb{R}$, and that $|a| = 0$ if and only if $a = 0$. Also, $|-a| = |a|$ for all $a \\in \\mathbb{R}$." },
        { id: "s3", type: "numerical", title: "Numerical Check", content: "Evaluate $|-5| + |3|$.", numericAnswer: 8, numericTolerance: 0 },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "For any real number $a$, the absolute value of $-a$ is always equal to the absolute value of ___.", blankAnswer: "a" }
      ]
    },
    {
      id: "les-2-2-1-2", title: "Theorem 2.2.2: Properties of Absolute Value", description: "Rules for manipulating absolute values", icon: "Settings",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Does the absolute value of a product equal the product of the absolute values? (i.e. $|ab| = |a||b|$)", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "This holds true for all real numbers." }, { id: "B", text: "No", isCorrect: false, explanation: "It does, try evaluating |-2 * 3|." }] },
        { id: "s1", type: "theory", title: "Theorem 2.2.2", content: "For all $a, b \\in \\mathbb{R}$:\n\n(a) **Product Rule:** $|ab| = |a||b|$\n(b) **Squares:** $|a|^2 = a^2$\n(c) **Bounds:** If $c \\ge 0$, then $|a| \\le c$ if and only if $-c \\le a \\le c$.\n(d) **Self-Bounds:** $-|a| \\le a \\le |a|$ for all $a \\in \\mathbb{R}$." },
        { id: "s2", type: "proof", title: "Interactive Proof: Proving part (c)", content: "**Goal: Prove $|a| \\le c \\iff -c \\le a \\le c$ (for $c \\ge 0$).**", interactiveSteps: [
            { stepText: "First, let's assume $|a| \\le c$." },
            { prompt: "Since $a$ can be positive or negative, what two inequalities must be true because of $|a| \\le c$?", options: [{ id: "A", text: "$a \\le c$ and $-a \\le c$", isCorrect: true, explanation: "Depending on the sign of a, its absolute value is either a or -a." }, { id: "B", text: "$a \\le c$ and $a \\ge c$", isCorrect: false, explanation: "That would mean a=c." }], stepText: "We have both $a \\le c$ and $-a \\le c$." },
            { stepText: "If we multiply $-a \\le c$ by $-1$, we flip the inequality to get $a \\ge -c$." },
            { stepText: "Combining $a \\ge -c$ and $a \\le c$ yields exactly $-c \\le a \\le c$." },
            { stepText: "The converse holds by reversing these steps. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-1-3", title: "Theorem 2.2.3: Triangle Inequality", description: "The most important inequality in analysis", icon: "Triangle",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If you add $a$ and $b$, then take the absolute value, is it always equal to $|a| + |b|$?", options: [{ id: "A", text: "No, it could be less", isCorrect: true, explanation: "If a and b have opposite signs, they cancel out, making the sum smaller." }, { id: "B", text: "Yes, always equal", isCorrect: false, explanation: "Try a=5, b=-2. |5 + -2| = 3. |5| + |-2| = 7." }] },
        { id: "s1", type: "theory", title: "The Triangle Inequality", content: "**Theorem 2.2.3 (Triangle Inequality):** If $a, b \\in \\mathbb{R}$, then\n$$|a + b| \\le |a| + |b|$$\n\nEquality occurs if and only if $ab \\ge 0$, which means $a$ and $b$ have the same sign." },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Prove $|a + b| \\le |a| + |b|$ using Theorem 2.2.2.**", interactiveSteps: [
            { stepText: "From Theorem 2.2.2(d), we know that any number is bounded by its absolute value." },
            { prompt: "Write this self-bound for both $a$ and $b$.", options: [{ id: "A", text: "$-|a| \\le a \\le |a|$ and $-|b| \\le b \\le |b|$", isCorrect: true, explanation: "This bounds both numbers between their negative and positive absolute values." }, { id: "B", text: "$0 \\le a \\le |a|$ and $0 \\le b \\le |b|$", isCorrect: false, explanation: "a and b could be negative." }], stepText: "We have $-|a| \\le a \\le |a|$ and $-|b| \\le b \\le |b|$." },
            { stepText: "Now, add these two compound inequalities together." },
            { stepText: "We get: $-(|a| + |b|) \\le a + b \\le (|a| + |b|)$." },
            { stepText: "Let $c = |a| + |b|$. Since $-c \\le a+b \\le c$, Theorem 2.2.2(c) states this is equivalent to $|a+b| \\le c$." },
            { stepText: "Therefore, $|a + b| \\le |a| + |b|$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-1-4", title: "Corollary 2.2.4: Variations", description: "Reverse Triangle Inequality and subtraction", icon: "Activity",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Is the distance between $a$ and $b$ ($|a-b|$) related to $|a| + |b|$?", options: [{ id: "A", text: "Yes, $|a-b| \\le |a| + |b|$", isCorrect: true, explanation: "Because |a - b| = |a + (-b)| <= |a| + |-b| = |a| + |b|." }, { id: "B", text: "No, there is no relation", isCorrect: false, explanation: "We can use the triangle inequality." }] },
        { id: "s1", type: "theory", title: "Corollary 2.2.4", content: "If $a, b \\in \\mathbb{R}$, then:\n\n(a) **Reverse Triangle Inequality:** $\\big| |a| - |b| \\big| \\le |a - b|$\n(b) **Subtraction Triangle Inequality:** $|a - b| \\le |a| + |b|$" },
        { id: "s2", type: "proof", title: "Interactive Proof: Reverse Triangle Inequality", content: "**Goal: Prove $\\big||a| - |b|\\big| \\le |a - b|$.**", interactiveSteps: [
            { stepText: "We want to find a bound for $|a| - |b|$. Let's start with a clever rewrite of $a$." },
            { prompt: "How can we write $a$ using $a - b$ and $b$?", options: [{ id: "A", text: "$a = (a - b) + b$", isCorrect: true, explanation: "The -b and +b cancel, leaving just a." }, { id: "B", text: "$a = (a + b) - b$", isCorrect: false, explanation: "While true, this doesn't introduce the |a-b| term we need." }], stepText: "Write $a = a - b + b$." },
            { stepText: "Apply the standard Triangle Inequality: $|a| = |(a - b) + b| \\le |a - b| + |b|$." },
            { stepText: "Subtract $|b|$ from both sides to get: $|a| - |b| \\le |a - b|$." },
            { stepText: "Similarly, writing $b = b - a + a$ yields $|b| - |a| \\le |b - a| = |a - b|$." },
            { stepText: "Since both $(|a| - |b|)$ and $-(|a| - |b|)$ are $\\le |a - b|$, their absolute value is $\\le |a - b|$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-2-1-5", title: "Corollary 2.2.5: Generalized Form", description: "Extending to n terms", icon: "MoreHorizontal",
      slides: [
        { id: "s0", type: "theory", title: "Generalized Triangle Inequality", content: "**Corollary 2.2.5:** If $a_1, a_2, \\dots, a_n$ are any real numbers, then\n$$|a_1 + a_2 + \\dots + a_n| \\le |a_1| + |a_2| + \\dots + |a_n|$$\n\nThis is proven via a straightforward application of Mathematical Induction, applying the standard 2-term Triangle Inequality repeatedly." },
        { id: "s1", type: "numerical", title: "Test the limits", content: "If $a_1 = -5, a_2 = 3, a_3 = -2$, evaluate the right side (the sum of absolute values).", numericAnswer: 10, numericTolerance: 0 },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "The Triangle Inequality ensures that the absolute value of a sum is never ___ than the sum of their absolute values.", blankAnswer: "greater" }
      ]
    }
  ]
};