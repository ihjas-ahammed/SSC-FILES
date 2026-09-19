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
        {
          why: 'Write the fundamental bounds for both $a$ and $b$.',
          m: '$$-|a| \\le a \\le |a| \\quad \\text{and} \\quad -|b| \\le b \\le |b|$$',
          meaning: 'What this really means: Any real number is trapped between its own negative magnitude and positive magnitude. Think of it as a symmetric fence around zero that safely contains the number.'
        },
        {
          why: 'Add the two inequalities together.',
          m: '$$-( |a| + |b| ) \\le a + b \\le (|a| + |b|)$$',
          meaning: 'What this really means: When you add the two numbers together, their sum cannot possibly drift beyond the sum of their individual fences on either side.'
        },
        {
          why: 'Translate this double inequality back into absolute value notation.',
          m: '$$|a + b| \\le |a| + |b|$$',
          meaning: 'What this really means: Being boxed in symmetrically between $-M$ and $+M$ is identical to saying your total distance from zero is at most $M$. This confirms the direct route is never longer than taking the two steps separately.'
        }
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
    id: 'c.2.1.9', bartle: '2.1.9', sec: '2.1', kind: 'theorem', tier: 'core',
    title: 'Order Limit Property (Positive Margin Theorem)',
    oneLine: 'If a nonnegative number is strictly smaller than every positive number, it has no choice but to be exactly 0.',
    statement: `If $a \\in \\mathbb{R}$ is such that:
      $$0 \\le a < \\varepsilon \\quad \\text{for every } \\varepsilon > 0$$
      then $a = 0$.`,
    intuition: `<p>Think of $\\varepsilon > 0$ as a challenge: no matter how tiny a microscopic gap you demand (e.g. $\\varepsilon = 10^{-100}$)$, a$ is forced to be strictly smaller than it.</p>
      <p>Could $a$ be positive, say $a = 0.0001$? No, because the examiner could simply pick $\\varepsilon = a/2 = 0.00005$, and then $a < \\varepsilon$ would fail! Since $a$ cannot be positive and cannot be negative ($a \\ge 0$), it must be exactly $0$.</p>
      <p>This theorem is used repeatedly throughout real analysis to prove that two numbers $x$ and $y$ are equal: just show that $|x - y| < \\varepsilon$ for every $\\varepsilon > 0$.</p>`,
    needs: ['c.2.1.7'],
    traps: [
      `Assuming $a < \\varepsilon$ for just ONE $\\varepsilon$ proves $a = 0$. It must hold for ALL $\\varepsilon > 0$!`,
      `Forgetting the nonnegativity hypothesis $a \\ge 0$: any negative number like $a = -5$ is strictly less than every $\\varepsilon > 0$, but is not $0$.`
    ],
    proof: {
      idea: `Use proof by contradiction: suppose $a > 0$, then choose $\\varepsilon_0 := a/2 > 0$ to contradict the hypothesis $a < \\varepsilon$.`,
      why: `Because if $a$ were positive, the midpoint $\\varepsilon_0 = a/2$ would be a valid positive number that is strictly smaller than $a$.`,
      rungs: [
        {
          why: 'Suppose for contradiction that $a > 0$.',
          m: '$$a > 0$$',
          meaning: 'What this really means: We set a trap by pretending that $a$ manages to be strictly on the positive side of zero, leaving a positive gap between itself and origin.'
        },
        {
          why: 'Choose a specific positive tolerance strictly smaller than $a$, namely its half.',
          m: '$$\\varepsilon_0 := \\frac{a}{2} > 0$$',
          meaning: 'What this really means: Since $a$ is positive, the halfway mark between $0$ and $a$ is a legitimate positive tolerance that is strictly tighter than $a$ itself.'
        },
        {
          why: 'Apply the hypothesis to this specific $\\varepsilon_0$.',
          m: '$$a < \\varepsilon_0 = \\frac{a}{2} \\implies 2a < a \\implies a < 0$$',
          meaning: 'What this really means: The rule says $a$ must be smaller than EVERY positive test number, so testing it against its own half forces $a$ to be smaller than half of itself, which algebraically drags $a$ below zero.'
        },
        {
          why: 'This contradicts the assumption that $a > 0$.',
          m: '$$a < 0 \\text{ contradicts } a > 0 \\implies\\Leftarrow$$',
          meaning: 'What this really means: A number cannot simultaneously be strictly positive and strictly negative! The only way out of this paradox is that $a$ could never have been strictly positive in the first place.'
        }
      ],
      ends: 'Therefore $a = 0$. This fundamental result is the backbone of limit uniqueness and infimum bounds.'
    },
    cards: [
      { q: 'State Theorem 2.1.9 for a real number $a \\in \\mathbb{R}$.', a: 'If $0 \\le a < \\varepsilon$ for every $\\varepsilon > 0$, then $a = 0$.', kind: 'state' },
      { q: 'How does the proof of Theorem 2.1.9 deduce a contradiction if $a > 0$?', a: 'By setting $\\varepsilon_0 = a/2 > 0$, which yields $a < a/2$, implying $a < 0$, a contradiction.', kind: 'recall' },
      { q: 'Why is the condition $a \\ge 0$ essential in Theorem 2.1.9?', a: 'Because negative numbers also satisfy $a < \\varepsilon$ for every $\\varepsilon > 0$, yet they are not zero.', kind: 'trap' }
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
  },

  {
    id: 'c.2.1.4', bartle: '2.1.4', sec: '2.1', kind: 'theorem', tier: 'core',
    title: 'Irrationality of √2',
    oneLine: 'There is no rational number whose square is 2 — the rationals have holes.',
    statement: `There does not exist a rational number $r \\in \\mathbb{Q}$ such that:
      $$r^2 = 2$$
      Consequently, $\\sqrt{2}$ is an <b>irrational number</b> ($\\,\\sqrt{2} \\notin \\mathbb{Q}$).`,
    intuition: `<p>This is one of the oldest and most celebrated proofs in mathematics, discovered by the ancient Pythagoreans. In Class 10, we learned that $\\sqrt{2}$ is irrational, but in Real Analysis, this theorem plays a foundational role: it shows that the rational field $\\mathbb{Q}$ has serious gaps!</p>
      <p>If you construct a right triangle with legs of length $1$, the hypotenuse has length $\\sqrt{2}$. Even though this length physically exists in Euclidean geometry, it cannot be measured by any ratio of integers $p/q$.</p>`,
    needs: ['c.2.1.1', 's.contradiction'],
    traps: [
      `Assuming every real number is rational. The set $\\mathbb{R} \\setminus \\mathbb{Q}$ of irrationals is not only non-empty, but actually uncountable!`,
      `Forgetting the coprimality condition $\\gcd(p, q) = 1$: the entire contradiction rests on the fact that $p/q$ can be written in lowest terms, yet both $p$ and $q$ are forced to be even.`
    ],
    proof: {
      idea: `Assume $r = p/q$ in lowest terms satisfies $r^2 = 2$. Deduce that both $p$ and $q$ must be even, contradicting coprimality.`,
      why: `The square of an odd integer is always odd, so if $p^2$ is even, $p$ itself must be even.`,
      rungs: [
        {
          why: 'Suppose for contradiction that there exists a rational number $r = p/q$ with $r^2 = 2$. By cancelling common factors, choose positive integers $p, q \\in \\mathbb{N}$ with $\\gcd(p, q) = 1$.',
          m: '$$\\left(\\frac{p}{q}\\right)^2 = 2, \\quad \\gcd(p, q) = 1$$',
          meaning: 'What this really means: We assume $\\sqrt{2}$ can be written as a simple fraction stripped down to its cleanest form, where the top and bottom share no common factors (they cannot both be even).'
        },
        {
          why: 'Square both sides and clear the denominator.',
          m: '$$p^2 = 2q^2$$',
          meaning: 'What this really means: Clearing the fraction turns division into multiplication, showing that squaring the numerator produces an exact double of $q^2$.'
        },
        {
          why: 'Since $p^2 = 2q^2$, $p^2$ is an even integer. Because the square of an odd number $(2m+1)^2 = 4m^2 + 4m + 1 = 2(2m^2+2m)+1$ is always odd, $p$ itself must be even.',
          m: '$$p^2 \\text{ is even} \\implies p = 2k \\quad \\text{for some } k \\in \\mathbb{N}$$',
          meaning: 'What this really means: Because $p^2$ is a multiple of $2$, it is even. But odd numbers squared always stay odd, so the only way $p^2$ could be even is if the original number $p$ is already an even number.'
        },
        {
          why: 'Substitute $p = 2k$ back into the equation $p^2 = 2q^2$.',
          m: '$$(2k)^2 = 4k^2 = 2q^2 \\implies q^2 = 2k^2$$',
          meaning: 'What this really means: Plugging $2k$ into the equation gives $4k^2 = 2q^2$, which simplifies to show that $q^2$ is also an exact double of an integer.'
        },
        {
          why: 'By the same parity argument, $q^2$ is even, which implies $q$ must also be even.',
          m: '$$q^2 \\text{ is even} \\implies q \\text{ is even}$$',
          meaning: 'What this really means: The exact same logic strikes the denominator: since $q^2$ is even, $q$ itself must be an even number as well.'
        },
        {
          why: 'Since both $p$ and $q$ are even, $2$ divides both $p$ and $q$, directly contradicting $\\gcd(p, q) = 1$.',
          m: '$$2 \\mid p \\ \\text{and} \\ 2 \\mid q \\implies \\gcd(p, q) \\ge 2 \\implies\\Leftarrow$$',
          meaning: 'What this really means: Both top and bottom turned out to be divisible by $2$, directly contradicting our starting guarantee that all common factors had been completely cancelled out. No such fraction can exist.'
        }
      ],
      ends: 'Therefore, the assumption that $r \\in \\mathbb{Q}$ is false. There is no rational number whose square is 2.'
    },
    cards: [
      { q: 'State Theorem 2.1.4 (Irrationality of $\\sqrt{2}$).', a: 'There does not exist a rational number $r \\in \\mathbb{Q}$ such that $r^2 = 2$.', kind: 'state' },
      { q: 'Why must $p$ be even if $p^2$ is even?', a: 'Because the square of any odd integer $(2m+1)^2 = 2(2m^2+2m)+1$ is odd; only an even integer can have an even square.', kind: 'recall' },
      { q: 'What fundamental contradiction concludes the proof of the irrationality of $\\sqrt{2}$?', a: 'Both $p$ and $q$ are shown to be divisible by 2, contradicting that $\\gcd(p, q) = 1$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.2.1.13', bartle: '2.1.13', sec: '2.1', kind: 'theorem', tier: 'core',
    title: "Bernoulli's Inequality",
    oneLine: 'Compounding at positive interest always beats simple interest: (1 + x)^n ≥ 1 + nx for x > -1.',
    statement: `If $x \\in \\mathbb{R}$ with $x > -1$, then for all $n \\in \\mathbb{N}$:
      $$(1 + x)^n \\ge 1 + nx$$
      Equality holds if and only if $n = 1$ or $x = 0$.`,
    intuition: `<p>In financial mathematics, if you invest 1 rupee at rate $x$, simple interest after $n$ years yields $1 + nx$, while compound interest yields $(1 + x)^n$. Bernoulli's Inequality states that compound interest is always greater than or equal to simple interest!</p>
      <p>In Real Analysis, Bernoulli's Inequality is an indispensable weapon for calculating limits. Whenever you need to show that a power $c^n$ blows up to infinity or that $c^{1/n}$ approaches $1$, Bernoulli gives the simplest linear bound to tame the exponential growth.</p>`,
    needs: ['c.2.1.7', 'c.1.2.1'],
    traps: [
      `Forgetting the essential condition $x > -1$. If $x = -2$ and $n = 2$, $(1 - 2)^2 = 1$, while $1 + 2(-2) = -3$, which holds, but for $n = 3$, $(1 - 2)^3 = -1 < 1 + 3(-2) = -5$ fails! The condition $1 + x > 0$ is needed so multiplying preserves the inequality.`,
      `Thinking it only holds for $x > 0$. It holds for ALL $x > -1$, including negative fractions like $x = -0.5$.`
    ],
    proof: {
      idea: `Use Mathematical Induction on $n$. Multiplying by $1 + x > 0$ preserves the inequality, and dropping the positive quadratic term $k x^2 \\ge 0$ completes the step.`,
      why: `Because $x > -1$ guarantees $1 + x > 0$, enabling valid multiplication without reversing inequality signs.`,
      rungs: [
        {
          why: 'Base step ($n = 1$): Evaluate both sides for $n = 1$.',
          m: '$$(1 + x)^1 = 1 + x = 1 + 1 \\cdot x \\quad \\text{(holds with equality)}$$',
          meaning: 'What this really means: For the very first step $n = 1$, both sides are identical formulas, so the inequality safely holds right at the starting line.'
        },
        {
          why: 'Inductive hypothesis: Assume the inequality holds for some $k \\in \\mathbb{N}$.',
          m: '$$(1 + x)^k \\ge 1 + kx$$',
          meaning: 'What this really means: We assume the inequality stands true for some rung $k$ on our ladder, giving us solid ground to test the very next step.'
        },
        {
          why: 'Multiply both sides by $(1 + x)$. Since $x > -1$, we have $1 + x > 0$, so the inequality direction is strictly preserved.',
          m: '$$(1 + x)^{k+1} = (1 + x)^k(1 + x) \\ge (1 + kx)(1 + x)$$',
          meaning: 'What this really means: We take one more step forward by multiplying by $(1 + x)$. Because $x > -1$, $(1 + x)$ is strictly positive, guaranteeing the inequality direction never flips.'
        },
        {
          why: 'Expand the algebraic product on the right-hand side.',
          m: '$$(1 + kx)(1 + x) = 1 + kx + x + kx^2 = 1 + (k + 1)x + kx^2$$',
          meaning: 'What this really means: Multiplying out the brackets reveals the target expression $1 + (k + 1)x$ plus an extra bonus term $kx^2$.'
        },
        {
          why: 'Since $k \\ge 1$ and $x^2 \\ge 0$, the quadratic term $kx^2 \\ge 0$. Dropping it gives a smaller or equal quantity.',
          m: '$$kx^2 \\ge 0 \\implies 1 + (k + 1)x + kx^2 \\ge 1 + (k + 1)x$$',
          meaning: 'What this really means: Squares are never negative, so the extra term $kx^2$ is pure positive padding. Throwing it away can only make the expression smaller, leaving our required target.'
        },
        {
          why: 'Chain the inequalities together to conclude the inductive step.',
          m: '$$(1 + x)^{k+1} \\ge 1 + (k + 1)x$$',
          meaning: 'What this really means: The ladder step holds! Since the base case works and step $k$ always carries over to step $k + 1$, the inequality holds for every positive integer.'
        }
      ],
      ends: 'By the Principle of Mathematical Induction, $(1 + x)^n \\ge 1 + nx$ for all $n \\in \\mathbb{N}$ and all $x > -1$.'
    },
    cards: [
      { q: "State Bernoulli's Inequality.", a: 'If $x > -1$, then $(1 + x)^n \\ge 1 + nx$ for all $n \\in \\mathbb{N}$.', kind: 'state' },
      { q: "Why is the condition $x > -1$ required in Bernoulli's Inequality?", a: 'To ensure $1 + x > 0$, so that multiplying the inductive inequality by $(1 + x)$ preserves the inequality sign.', kind: 'recall' },
      { q: 'What term is dropped to finish the inductive step $(1 + kx)(1 + x) \\ge 1 + (k+1)x$?', a: 'The non-negative term $kx^2 \\ge 0$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.2.4.7', bartle: '2.4.7', sec: '2.4', kind: 'theorem', tier: 'core',
    title: 'Existence of √2 in ℝ',
    oneLine: 'Completeness fills the hole: there exists a unique positive real number x such that x² = 2.',
    statement: `There exists a positive real number $x \\in \\mathbb{R}$ such that:
      $$x^2 = 2$$
      This unique positive number is denoted by $\\sqrt{2}$.`,
    intuition: `<p>Earlier we proved Theorem 2.1.4: there is NO rational number whose square is $2$. If we lived only in $\\mathbb{Q}$, $\\sqrt{2}$ would be a ghost — a missing hole on the line.</p>
      <p>This theorem demonstrates the true triumph of the <b>Completeness Property of $\\mathbb{R}$</b>. By collecting all positive numbers whose squares are less than $2$ into a set $S$, completeness guarantees that $S$ has a supremum $x = \\sup S$. We then prove that $x^2$ cannot be less than $2$ (or we could step slightly to the right) and cannot be greater than $2$ (or we could step slightly to the left). Thus, $x^2$ is exactly $2$!</p>`,
    needs: ['c.2.3.6', 'c.2.4.3', 'c.2.1.4'],
    traps: [
      `Assuming this can be proved from Field Axioms alone. It CANNOT! $\\mathbb{Q}$ satisfies all Field and Order axioms, but $\\sqrt{2} \\notin \\mathbb{Q}$. Completeness is essential.`,
      `Thinking the square root algorithm in school arithmetic is a proof. Calculating digits like $1.414...$ merely defines a sequence of rational approximations; the Completeness Property is what proves the limit actually exists as a real number!`
    ],
    proof: {
      idea: `Let $S = \\{s \\in \\mathbb{R} : s > 0, s^2 < 2\\}$. Since $S$ is non-empty and bounded above by $2$, $x := \\sup S$ exists. Rule out $x^2 < 2$ and $x^2 > 2$ using the Archimedean Property.`,
      why: `Trichotomy ensures exactly one of $x^2 < 2$, $x^2 > 2$, or $x^2 = 2$ must hold. Contradicting the first two establishes $x^2 = 2$.`,
      rungs: [
        {
          why: 'Define $S := \\{s \\in \\mathbb{R} : s > 0, s^2 < 2\\}$. Check that $S$ is non-empty and bounded above.',
          m: '$$1 \\in S \\implies S \\ne \\emptyset; \\quad s > 2 \\implies s^2 > 4 > 2 \\implies s \\notin S \\implies 2 \\text{ is an upper bound}$$',
          meaning: 'What this really means: We gather all positive numbers whose squares are undershooting $2$. The set is not empty because $1^2 = 1 < 2$, and numbers larger than $2$ overshoot $2$, providing a solid ceiling at $2$.'
        },
        {
          why: 'By the Completeness Property of $\\mathbb{R}$, $S$ has a supremum $x \\in \\mathbb{R}$. Note $x \\ge 1 > 0$.',
          m: '$$x := \\sup S \\in \\mathbb{R}, \\quad x \\ge 1$$',
          meaning: 'What this really means: Since the set has members and a ceiling, the Completeness Property guarantees there is an exact tightest ceiling (least upper bound) $x$ sitting right at the frontier.'
        },
        {
          why: 'Suppose for contradiction that $x^2 < 2$. Then $2 - x^2 > 0$. For any $n \\in \\mathbb{N}$, estimate $(x + 1/n)^2$.',
          m: '$$\\left(x + \\frac{1}{n}\\right)^2 = x^2 + \\frac{2x}{n} + \\frac{1}{n^2} \\le x^2 + \\frac{2x + 1}{n}$$',
          meaning: 'What this really means: If $x^2$ were less than $2$, there would still be breathing room to the right. We test nudging $x$ slightly larger by $1/n$ and measure how much its square grows.'
        },
        {
          why: 'By the Archimedean Property, choose $n \\in \\mathbb{N}$ large enough so that $\\frac{1}{n} < \\frac{2 - x^2}{2x + 1}$.',
          m: '$$\\frac{2x + 1}{n} < 2 - x^2 \\implies \\left(x + \\frac{1}{n}\\right)^2 < x^2 + (2 - x^2) = 2$$',
          meaning: 'What this really means: The Archimedean property lets us choose an $n$ so huge that the tiny step $1/n$ is small enough to fit completely inside that leftover breathing room without overshooting $2$.'
        },
        {
          why: 'This means $x + 1/n \\in S$. But $x + 1/n > x = \\sup S$, contradicting that $x$ is an upper bound for $S$. Thus $x^2 < 2$ is false.',
          m: '$$x + \\frac{1}{n} \\in S \\text{ and } x + \\frac{1}{n} > x = \\sup S \\implies\\Leftarrow$$',
          meaning: 'What this really means: This creates a member of $S$ that stands strictly above $x$, which is impossible because $x$ was claimed to be the ceiling for all members of $S$. So $x^2$ cannot be less than $2$.'
        },
        {
          why: 'Next suppose for contradiction that $x^2 > 2$. Then $x^2 - 2 > 0$. Estimate $(x - 1/m)^2$.',
          m: '$$\\left(x - \\frac{1}{m}\\right)^2 = x^2 - \\frac{2x}{m} + \\frac{1}{m^2} > x^2 - \\frac{2x}{m}$$',
          meaning: 'What this really means: If $x^2$ were greater than $2$, $x$ would be overshooting. We test backing up slightly by taking a small step $1/m$ to the left.'
        },
        {
          why: 'By the Archimedean Property, choose $m \\in \\mathbb{N}$ such that $\\frac{1}{m} < \\frac{x^2 - 2}{2x}$.',
          m: '$$\\frac{2x}{m} < x^2 - 2 \\implies \\left(x - \\frac{1}{m}\\right)^2 > x^2 - (x^2 - 2) = 2$$',
          meaning: 'What this really means: We pick $m$ large enough so the leftward nudge is subtle enough that its square still remains strictly greater than $2$.'
        },
        {
          why: 'If $s \\in S$, then $s^2 < 2 < (x - 1/m)^2$, so $s < x - 1/m$. Thus $x - 1/m$ is an upper bound for $S$, contradicting that $x$ is the LEAST upper bound.',
          m: '$$x - \\frac{1}{m} < x \\text{ is an upper bound of } S \\implies\\Leftarrow$$',
          meaning: 'What this really means: Every member of $S$ is smaller than $x - 1/m$, meaning $x - 1/m$ is already a valid ceiling for $S$. But $x - 1/m$ is lower than $x$, which destroys the claim that $x$ was the lowest possible ceiling!'
        },
        {
          why: 'By the Trichotomy Property, since $x^2 < 2$ and $x^2 > 2$ are both impossible, we must have $x^2 = 2$.',
          m: '$$x^2 = 2$$',
          meaning: 'What this really means: Since $x^2$ cannot be less than $2$ and cannot be greater than $2$, it has nowhere left to hide: $x^2$ must equal $2$ exactly, proving that $\\sqrt{2}$ truly exists as a real number.'
        }
      ],
      ends: 'There exists a unique positive real number $x = \\sup S$ such that $x^2 = 2$. This establishes the rigorous existence of $\\sqrt{2} \\in \\mathbb{R}$.'
    },
    cards: [
      { q: 'State Theorem 2.4.7 (Existence of $\\sqrt{2}$ in $\\mathbb{R}$).', a: 'There exists a positive real number $x \\in \\mathbb{R}$ such that $x^2 = 2$.', kind: 'state' },
      { q: 'How is $\\sqrt{2}$ constructed in the proof of Theorem 2.4.7?', a: 'As the supremum of the set $S = \\{s \\in \\mathbb{R} : s > 0, s^2 < 2\\}$ via the Completeness Property.', kind: 'recall' },
      { q: 'Why does the proof require the Archimedean Property?', a: 'To choose an integer $n$ large enough that $(x + 1/n)^2 < 2$ (if $x^2 < 2$) or $(x - 1/m)^2 > 2$ (if $x^2 > 2$).', kind: 'apply' }
    ]
  }
);
