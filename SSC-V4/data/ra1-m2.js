/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis I · Module 2: The Real Numbers
   Sections: 2.1 (Algebraic & Order Properties of ℝ), 2.2 (Absolute Value & Real Line)
   Written in warm, rigorous, Indian English medium Class 12 style.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.2.1.1', bartle: '2.1.1', sec: '2.1', kind: 'definition', tier: 'core',
    title: 'Algebraic Properties of ℝ: The Field Axioms',
    oneLine: 'Real numbers can be added, subtracted, multiplied, and divided (except by 0) while obeying familiar rules.',
    statement: `On the set $\\mathbb{R}$ of real numbers, there exist two binary operations, <b>addition</b> $+$ and <b>multiplication</b> $\\cdot$, satisfying the <b>Field Axioms</b>:
      <p>• <b>(A1) Commutative:</b> $a + b = b + a$.</p>
      <p>• <b>(A2) Associative:</b> $(a + b) + c = a + (b + c)$.</p>
      <p>• <b>(A3) Zero Element:</b> $\\exists 0 \\in \\mathbb{R}$ such that $a + 0 = a$.</p>
      <p>• <b>(A4) Additive Inverse:</b> For each $a$, $\\exists (-a) \\in \\mathbb{R}$ such that $a + (-a) = 0$.</p>
      <p>• <b>(M1) Commutative:</b> $a \\cdot b = b \\cdot a$.</p>
      <p>• <b>(M2) Associative:</b> $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$.</p>
      <p>• <b>(M3) Unit Element:</b> $\\exists 1 \\in \\mathbb{R}$ ($1 \\ne 0$) such that $a \\cdot 1 = a$.</p>
      <p>• <b>(M4) Multiplicative Inverse:</b> For each $a \\ne 0$, $\\exists (1/a) \\in \\mathbb{R}$ such that $a \\cdot (1/a) = 1$.</p>
      <p>• <b>(D) Distributive:</b> $a \\cdot (b + c) = (a \\cdot b) + (a \\cdot c)$.</p>`,
    intuition: `<p>In high school, we took these basic arithmetic rules for granted. In Real Analysis, we recognise them formally as a <b>Field</b> structure.</p>
      <p>A field is simply any system where arithmetic behaves properly: you can add, multiply, invert non-zero quantities, and cancel equal terms. Both $\\mathbb{Q}$ (rationals) and $\\mathbb{R}$ (reals) are fields, but integers $\\mathbb{Z}$ are NOT a field because fractions like $1/2$ do not belong to $\\mathbb{Z}$.</p>`,
    needs: ['s.quantifier'],
    traps: [
      `Division by zero is undefined because $0$ has no multiplicative inverse ($0 \\cdot x = 1$ has no solution in any field).`,
      `Assuming every field is $\\mathbb{R}$. The field axioms alone do NOT distinguish $\\mathbb{R}$ from $\\mathbb{Q}$ — for that, we need the Completeness Property!`
    ],
    cards: [
      { q: 'Why is the set of integers $\\mathbb{Z}$ not a field?', a: 'Because integers lack multiplicative inverses: for $a = 2 \\in \\mathbb{Z}$, the inverse $1/2 \\notin \\mathbb{Z}$.', kind: 'apply' },
      { q: 'State the distributive property in a field $\\mathbb{R}$.', a: '$a \\cdot (b + c) = (a \\cdot b) + (a \\cdot c)$ for all $a, b, c \\in \\mathbb{R}$.', kind: 'state' }
    ]
  },

  {
    id: 'c.2.1.7', bartle: '2.1.7', sec: '2.1', kind: 'definition', tier: 'core',
    title: 'Order Properties of ℝ and Trichotomy',
    oneLine: 'Numbers line up from left to right: any number is strictly positive, strictly negative, or zero.',
    statement: `There is a non-empty subset $P \\subset \\mathbb{R}$ (the set of strictly positive real numbers) satisfying:
      <p>(1) If $a, b \\in P$, then $a + b \\in P$ (closure under addition).</p>
      <p>(2) If $a, b \\in P$, then $a \\cdot b \\in P$ (closure under multiplication).</p>
      <p>(3) <b>Trichotomy Property:</b> For any $a \\in \\mathbb{R}$, exactly one of the following holds:
      $$a \\in P, \\quad a = 0, \\quad -a \\in P$$</p>
      <p>We write $a < b$ (or $b > a$) to mean $b - a \\in P$.</p>`,
    intuition: `<p>Think of the standard real number line you have drawn since school. Zero sits in the middle:</p>
      <p>To the right are strictly positive numbers ($P$). To the left are strictly negative numbers ($-a \\in P$). Every single number has to be on the right, on the left, or right at the origin. It cannot be two of them at once!</p>
      <p>Because of this, you can always compare any two real numbers: either $a < b$, $a = b$, or $a > b$.</p>`,
    needs: ['c.2.1.1'],
    traps: [
      `Multiplying an inequality by a negative number reverses the direction: if $a < b$ and $c < 0$, then $a c > b c$!`,
      `Complex numbers $\\mathbb{C}$ cannot be ordered like this because $i^2 = -1 < 0$, while squares in an ordered field must always be non-negative.`
    ],
    cards: [
      { q: 'State the Trichotomy Property for any real number $a \\in \\mathbb{R}$.', a: 'Exactly one of the three holds: $a > 0$, $a = 0$, or $a < 0$.', kind: 'state' },
      { q: 'Can the set of complex numbers $\\mathbb{C}$ be made into an ordered field?', a: 'No, because in any ordered field $x^2 \\ge 0$ for all $x$, but in $\\mathbb{C}$, $i^2 = -1 < 0$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.2.2.1', bartle: '2.2.1', sec: '2.2', kind: 'definition', tier: 'core',
    title: 'Absolute Value and the Triangle Inequality',
    oneLine: '|a| measures distance from 0; the direct shortcut is always shorter than taking a detour.',
    statement: `The <b>absolute value</b> of $a \\in \\mathbb{R}$ is defined by:
      $$|a| = \\begin{cases} a & \\text{if } a \\ge 0 \\\\ -a & \\text{if } a < 0 \\end{cases}$$
      <b>The Triangle Inequality:</b> For all $a, b \\in \\mathbb{R}$,
      $$|a + b| \\le |a| + |b|$$
      <b>Corollary (Reverse Triangle Inequality):</b>
      $$||a| - |b|| \\le |a - b|$$`,
    intuition: `<p>In Class 12 vectors, going directly from point $A$ to point $B$ is always shorter than visiting a third point in between. On the real line, $|a|$ is just the physical distance from $a$ to the origin $0$.</p>
      <p>The Triangle Inequality is the most frequently used tool in real analysis proofs! Whenever you need to bound a messy sum like $|f(x) - L|$, you break it apart into $|f(x) - g(x)| + |g(x) - L|$.</p>`,
    needs: ['c.2.1.7'],
    traps: [
      `$|a - b| \\le |a| - |b|$ is completely FALSE! The correct upper bound is $|a - b| \\le |a| + |b|$.`,
      `Forgetting that $|x - c| < \\delta$ means $c - \\delta < x < c + \\delta$ (an open symmetric window of radius $\\delta$ centered at $c$).`
    ],
    proof: {
      idea: `Use $-|a| \\le a \\le |a|$ and $-|b| \\le b \\le |b|$ and add the two inequalities.`,
      why: `Because $-x \\le y \\le x$ is logically equivalent to $|y| \\le x$.`,
      rungs: [
        { why: 'Write the fundamental bounds for both $a$ and $b$.', m: '$-|a| \\le a \\le |a| \\quad \\text{and} \\quad -|b| \\le b \\le |b|$' },
        { why: 'Add the two inequalities together.', m: '-(|a| + |b|) \\le a + b \\le (|a| + |b|)' },
        { why: 'Translate this double inequality back into absolute value notation.', m: '|a + b| \\le |a| + |b|' }
      ],
      ends: 'The Triangle Inequality $|a+b| \\le |a|+|b|$ is established.'
    },
    cards: [
      { q: 'State the Triangle Inequality for real numbers.', a: '$|a + b| \\le |a| + |b|$ for all $a, b \\in \\mathbb{R}$.', kind: 'state' },
      { q: 'What is the Reverse Triangle Inequality bound on $|a - b|$?', a: '$|a - b| \\ge ||a| - |b||$.', kind: 'recall' },
      { q: 'Rewrite the inequality $|x - 5| < 2$ as an open interval.', a: '$5 - 2 < x < 5 + 2$, which is $(3, 7)$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.2.2.7', bartle: '2.2.7', sec: '2.2', kind: 'definition', tier: 'core',
    title: 'ε-Neighborhood on the Real Line',
    oneLine: 'V_ε(c) is an open bubble around c of radius ε.',
    statement: `Let $c \\in \\mathbb{R}$ and $\\varepsilon > 0$. The <b>$\\varepsilon$-neighborhood</b> of $c$ is the set:
      $$V_\\varepsilon(c) = \\{x \\in \\mathbb{R} : |x - c| < \\varepsilon\\} = (c - \\varepsilon, c + \\varepsilon)$$
      A point $x$ belongs to $V_\\varepsilon(c)$ if and only if its distance from $c$ is strictly less than $\\varepsilon$.`,
    intuition: `<p>Think of $V_\\varepsilon(c)$ as a protective buffer zone or "bubble" around $c$. You are standing at point $c$, and you draw a circle of radius $\\varepsilon$ to the left and to the right.</p>
      <p>In real analysis, statements like "limit is $L$" simply mean: whatever tiny neighborhood $V_\\varepsilon(L)$ your examiner picks around the target, you can find a corresponding neighborhood around the input that lands entirely inside it!</p>`,
    needs: ['c.2.2.1'],
    traps: [
      `Neighborhoods are OPEN intervals — they never include the endpoints $c - \\varepsilon$ and $c + \\varepsilon$.`,
      `$\\varepsilon$ is ALWAYS strictly positive ($\\varepsilon > 0$). A neighborhood of radius zero would just be a single point, not a neighborhood!`
    ],
    cards: [
      { q: 'What is the geometric meaning of $V_\\varepsilon(c)$?', a: 'The open symmetric interval $(c - \\varepsilon, c + \\varepsilon)$ centered at $c$ with radius $\\varepsilon$.', kind: 'state' },
      { q: 'If $x \\in V_{\\varepsilon/2}(c)$ and $y \\in V_{\\varepsilon/2}(c)$, what is the maximum possible distance between $x$ and $y$?', a: 'Strictly less than $\\varepsilon$, because $|x - y| \\le |x - c| + |c - y| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$.', kind: 'apply' }
    ]
  }
);
