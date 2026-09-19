/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis for Entrance (GATE / JAM / CUSAT)
   Course ID: rae
   Modules:
     E1: General Metric Spaces (c.e1.1 - c.e1.5)
     E2: Completeness and Baire Category (c.e2.1 - c.e2.4)
     E3: Compactness and Connectedness in Metric Spaces (c.e3.1 - c.e3.5)
     E4: Equicontinuity and Ascoli–Arzelà (c.e4.1 - c.e4.3)
     E5: Inverse and Implicit Function Theorems (c.e5.1 - c.e5.3)
     E6: Lebesgue Measure on ℝ (c.e6.1 - c.e6.5)
     E7: Lebesgue Integration and Convergence Theorems (c.e7.1 - c.e7.5)

   Written in crystal-clear Indian English (Class 12 / Undergrad friendly).
   Every proof rung contains typeset LaTeX and a dedicated 'meaning' explanation.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
{
  "id": "c.e1.1",
  "sec": "E1",
  "kind": "definition",
  "tier": "core",
  "title": "Metric Space Definition and Standard Metrics",
  "oneLine": "A metric space generalizes real-line distance using positivity, symmetry, and triangle inequality.",
  "statement": "A <b>metric space</b> is a pair $(X, d)$ where $X$ is a non-empty set and $d: X \\times X \\to \\mathbb{R}$ is a function satisfying for all $x, y, z \\in X$:\n      <p>(1) <b>Positivity:</b> $d(x, y) \\ge 0$, with $d(x, y) = 0 \\iff x = y$.</p>\n      <p>(2) <b>Symmetry:</b> $d(x, y) = d(y, x)$.</p>\n      <p>(3) <b>Triangle Inequality:</b> $d(x, z) \\le d(x, y) + d(y, z)$.</p>\n      <p>Key metrics on $\\mathbb{R}^n$: Euclidean $d_2(x,y) = \\sqrt{\\sum_{i=1}^n (x_i-y_i)^2}$, taxicab $d_1(x,y) = \\sum |x_i-y_i|$, Chebyshev $d_\\infty(x,y) = \\max |x_i-y_i|$. On any set, the <b>discrete metric</b> has $d(x,y)=1$ for $x \\ne y$. On $C[a, b]$, the uniform metric is $d_\\infty(f, g) = \\sup_{t \\in [a, b]} |f(t) - g(t)|$.</p>",
  "intuition": "<p>On the real line, distance is the 1D gap $|x - y|$. Metric spaces extend this to $n$-dimensional space, function spaces, and abstract sets!</p>\n      <p>Distance behaves just as you expect: it is never negative, distance zero means you haven't moved, reversing direction doesn't change distance, and detour cannot beat the direct path.</p>",
  "needs": [
    "c.2.2.1"
  ],
  "traps": [
    "Assuming $d(x, y) = 0$ can occur for distinct points; if that happens, $d$ is merely a *pseudometric*.",
    "The discrete metric makes every subset simultaneously open and closed."
  ],
  "cards": [
    {
      "q": "State the three axioms of a metric $d$ on a set $X$.",
      "a": "(1) $d(x, y) \\ge 0$ with equality iff $x = y$; (2) $d(x, y) = d(y, x)$; (3) $d(x, z) \\le d(x, y) + d(y, z)$.",
      "kind": "state"
    },
    {
      "q": "What is the uniform metric on the space of continuous functions $C[a, b]$?",
      "a": "$d_\\infty(f, g) = \\sup_{t \\in [a, b]} |f(t) - g(t)|$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 2"
},
{
  "id": "c.e1.2",
  "sec": "E1",
  "kind": "definition",
  "tier": "core",
  "title": "Open Balls and Open Sets in Metric Spaces",
  "oneLine": "Open balls are neighborhoods with wiggle room; open sets are arbitrary unions of open balls.",
  "statement": "Let $(X, d)$ be a metric space.\n      <p>(a) The <b>open ball</b> of radius $r > 0$ centered at $x_0 \\in X$ is:\n      $$B(x_0, r) = \\{x \\in X : d(x, x_0) < r\\}$$</p>\n      <p>(b) A subset $U \\subseteq X$ is <b>open</b> if for every $x \\in U$, there exists $r > 0$ such that $B(x, r) \\subseteq U$.</p>\n      <p>(c) The empty set $\\emptyset$ and whole space $X$ are open. Any arbitrary union of open sets is open; any finite intersection of open sets is open.</p>",
  "intuition": "<p>Standing inside an open set means you have protective padding in every direction: you can step a small distance $\\delta$ anywhere without leaving the set.</p>\n      <p>In $\\mathbb{R}$, an open ball is an interval $(x_0 - r, x_0 + r)$. In $\\mathbb{R}^2$, it is an open circular disk.</p>",
  "needs": [
    "c.e1.1"
  ],
  "traps": [
    "Infinite intersections of open sets need not be open! $\\bigcap_{n=1}^\\infty (-1/n, 1/n) = \\{0\\}$, which is closed.",
    "In the discrete metric, $B(x, 1) = \\{x\\}$, so every single singleton is an open set!"
  ],
  "cards": [
    {
      "q": "Define an open set in a metric space $(X, d)$.",
      "a": "A set $U$ where every point $x \\in U$ has an open ball $B(x, r) \\subseteq U$ for some $r > 0$.",
      "kind": "state"
    },
    {
      "q": "Why is an infinite intersection of open sets not necessarily open?",
      "a": "Because the radii can shrink to zero, producing a closed set or singleton, e.g. $\\bigcap (-1/n, 1/n) = \\{0\\}$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 2"
},
{
  "id": "c.e1.3",
  "sec": "E1",
  "kind": "theorem",
  "tier": "core",
  "title": "Closed Sets, Limit Points, and Closure",
  "oneLine": "A set is closed iff it contains all its limit points; its closure is the smallest closed set containing it.",
  "statement": "Let $(X, d)$ be a metric space and $E \\subseteq X$.\n      <p>(a) A point $x \\in X$ is a <b>limit point</b> of $E$ if every punctured open ball $B(x, r) \\setminus \\{x\\}$ contains a point of $E$. The set of limit points is denoted $E'$.</p>\n      <p>(b) $E$ is <b>closed</b> if its complement $X \\setminus E$ is open. Equivalently, $E$ is closed if and only if $E' \\subseteq E$.</p>\n      <p>(c) The <b>closure</b> of $E$ is $\\overline{E} = E \\cup E'$. A subset $E$ is <b>dense</b> in $X$ if $\\overline{E} = X$.</p>",
  "intuition": "<p>A closed set has no escape points on its boundary: if points inside $E$ creep up on a limit point, that limit point is already inside $E$.</p>\n      <p>For instance, the rationals $\\mathbb{Q}$ have $\\overline{\\mathbb{Q}} = \\mathbb{R}$, so $\\mathbb{Q}$ is dense in $\\mathbb{R}$.</p>",
  "needs": [
    "c.e1.2"
  ],
  "traps": [
    "Sets are not doors: a set can be both open and closed (like $\\emptyset$ and $X$), or neither (like $[0, 1)$ in $\\mathbb{R}$).",
    "An isolated point of $E$ belongs to $E$ but is NOT a limit point of $E$."
  ],
  "proof": {
    "idea": "Show $X \\setminus E$ is open if and only if no limit point of $E$ lives in $X \\setminus E$.",
    "why": "If a point outside $E$ were a limit point, every open ball around it would strike $E$, making it impossible for $X \\setminus E$ to contain a ball around that point.",
    "rungs": [
      {
        "why": "(=>) Suppose $E$ is closed, so $X \\setminus E$ is open. Take any $x \\in X \\setminus E$.",
        "m": "$$x \\in X \\setminus E \\implies \\exists r > 0 : B(x, r) \\subseteq X \\setminus E$$",
        "meaning": "What this really means: Points outside a closed set have their own open buffer bubble completely separated from $E$."
      },
      {
        "why": "Since $B(x, r) \\cap E = \\emptyset$, the ball contains no points of $E$, so $x$ cannot be a limit point of $E$.",
        "m": "$$B(x, r) \\cap E = \\emptyset \\implies x \\notin E'$$",
        "meaning": "What this really means: Having a personal buffer bubble proves you cannot have points of $E$ crowding arbitrarily close to you."
      },
      {
        "why": "Hence every limit point of $E$ must belong to $E$, meaning $E' \\subseteq E$.",
        "m": "$$x \\in E' \\implies x \\in E \\implies E' \\subseteq E$$",
        "meaning": "What this really means: The only way to be a limit point is to already live inside $E$."
      },
      {
        "why": "(<=) Conversely, assume $E' \\subseteq E$. Take any $x \\in X \\setminus E$.",
        "m": "$$x \\notin E \\implies x \\notin E'$$",
        "meaning": "What this really means: Since all limit points are inside $E$, any outside point is automatically not a limit point."
      },
      {
        "why": "Because $x \\notin E'$, there is some $r > 0$ with $B(x, r) \\cap E = \\emptyset$, so $B(x, r) \\subseteq X \\setminus E$. Thus $X \\setminus E$ is open, so $E$ is closed.",
        "m": "$$B(x, r) \\subseteq X \\setminus E \\implies X \\setminus E \\text{ is open} \\implies E \\text{ is closed}$$",
        "meaning": "What this really means: Every outside point has an open neighborhood inside the complement, proving the complement is open."
      }
    ],
    "ends": "A subset of a metric space is closed if and only if it contains all its limit points."
  },
  "cards": [
    {
      "q": "State the limit point criterion for a closed set in a metric space.",
      "a": "$E$ is closed if and only if $E' \\subseteq E$ (it contains all its limit points).",
      "kind": "state"
    },
    {
      "q": "What does it mean for a subset $E$ to be dense in $X$?",
      "a": "Its closure is the entire space: $\\overline{E} = X$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 2"
},
{
  "id": "c.e1.4",
  "sec": "E1",
  "kind": "theorem",
  "tier": "core",
  "title": "Convergence of Sequences in Metric Spaces",
  "oneLine": "Sequential convergence means d(x_n, x) \u2192 0; limits are unique and characterize closed sets.",
  "statement": "Let $(X, d)$ be a metric space.\n      <p>(a) A sequence $(x_n)$ <b>converges</b> to $x \\in X$ ($x_n \\to x$) if:\n      $$\\forall \\varepsilon > 0, \\; \\exists K \\in \\mathbb{N} : n \\ge K \\implies d(x_n, x) < \\varepsilon$$</p>\n      <p>(b) <b>Uniqueness:</b> The limit of a convergent sequence in a metric space is unique.</p>\n      <p>(c) <b>Sequential Closedness:</b> A set $E \\subseteq X$ is closed if and only if for every convergent sequence $(x_n)$ in $E$ with $x_n \\to x$, the limit $x$ lies in $E$.</p>",
  "intuition": "<p>Metric convergence translates directly into real numbers: $x_n \\to x$ in $X$ simply means the real-valued distances $d(x_n, x) \\to 0$ in $\\mathbb{R}$.</p>\n      <p>A closed set is sequentially airtight: sequences trapped inside $E$ cannot escape when taking limits.</p>",
  "needs": [
    "c.e1.1",
    "c.3.1.4"
  ],
  "traps": [
    "In the discrete metric, a sequence converges if and only if it is eventually constant ($x_n = x$ for all large $n$).",
    "Confusing uniform convergence in $C[a, b]$ (under $d_\\infty$) with pointwise convergence."
  ],
  "proof": {
    "idea": "Use the Triangle Inequality to prove uniqueness of limits.",
    "why": "If $x_n \\to x$ and $x_n \\to y$, then $d(x, y) \\le d(x, x_n) + d(x_n, y) < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$ for every $\\varepsilon > 0$, forcing $d(x, y) = 0$.",
    "rungs": [
      {
        "why": "Suppose for contradiction that $x_n \\to x$ and $x_n \\to y$ with $x \\ne y$, so $d(x, y) > 0$.",
        "m": "$$\\varepsilon := \\frac{d(x, y)}{2} > 0$$",
        "meaning": "What this really means: If two distinct limits existed, there would be a positive gap between them."
      },
      {
        "why": "Choose $K_1, K_2$ so $d(x_n, x) < \\varepsilon$ for $n \\ge K_1$ and $d(x_n, y) < \\varepsilon$ for $n \\ge K_2$.",
        "m": "$$n \\ge \\max(K_1, K_2) \\implies d(x_n, x) < \\frac{d(x, y)}{2} \\quad \\text{and} \\quad d(x_n, y) < \\frac{d(x, y)}{2}$$",
        "meaning": "What this really means: For large enough $n$, the terms are closer than half-the-gap to both proposed limits simultaneously."
      },
      {
        "why": "Apply the Triangle Inequality to $d(x, y)$.",
        "m": "$$d(x, y) \\le d(x, x_n) + d(x_n, y) < \\frac{d(x, y)}{2} + \\frac{d(x, y)}{2} = d(x, y)$$",
        "meaning": "What this really means: Adding the two halves creates the impossible contradiction $d(x, y) < d(x, y)$."
      },
      {
        "why": "The contradiction $d(x, y) < d(x, y)$ proves $x = y$.",
        "m": "$$d(x, y) < d(x, y) \\implies\\Leftarrow \\implies x = y$$",
        "meaning": "What this really means: The gap cannot be positive; the limit is completely unique."
      }
    ],
    "ends": "Limits in any metric space are unique, and closed sets are precisely those containing their sequential limits."
  },
  "cards": [
    {
      "q": "State the uniqueness of limits theorem in metric spaces.",
      "a": "If a sequence $(x_n)$ in a metric space converges, its limit is unique.",
      "kind": "state"
    },
    {
      "q": "How is closedness of a set characterized by sequences in metric spaces?",
      "a": "$E$ is closed iff whenever $(x_n) \\subseteq E$ converges to $x$, the limit $x \\in E$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 2"
},
{
  "id": "c.e1.5",
  "sec": "E1",
  "kind": "theorem",
  "tier": "core",
  "title": "Continuity of Mappings Between Metric Spaces",
  "oneLine": "A mapping is continuous iff the inverse image of every open set is open.",
  "statement": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces, and $f: X \\to Y$.\n      <p>(a) $f$ is <b>continuous at $c \\in X$</b> if:\n      $$\\forall \\varepsilon > 0, \\; \\exists \\delta > 0 : d_X(x, c) < \\delta \\implies d_Y(f(x), f(c)) < \\varepsilon$$</p>\n      <p>(b) <b>Global Open Set Criterion:</b> $f$ is continuous on $X$ if and only if for every open set $V \\subseteq Y$, the pre-image $f^{-1}(V)$ is open in $X$.</p>\n      <p>(c) <b>Sequential Continuity:</b> $f$ is continuous at $c$ if and only if for every sequence $x_n \\to c$ in $X$, $f(x_n) \\to f(c)$ in $Y$.</p>",
  "intuition": "<p>The topological characterization $f^{-1}(\\text{open}) = \\text{open}$ is elegant because it bypasses $\\varepsilon$ and $\\delta$ completely!</p>\n      <p>Continuous functions don't tear spaces apart: points that start close together remain close together under $f$.</p>",
  "needs": [
    "c.e1.2",
    "c.5.1.2"
  ],
  "traps": [
    "Forward images of open sets need NOT be open! $f(x) = x^2$ sends $(-1, 1)$ to $[0, 1)$, which is not open.",
    "Continuity requires pre-images of open sets to be open, not forward images."
  ],
  "proof": {
    "idea": "Show the $\\varepsilon$-$\\delta$ ball definition translates directly to pre-images of open sets.",
    "why": "A point $c \\in f^{-1}(V)$ means $f(c) \\in V$. Since $V$ is open, it contains an $\\varepsilon$-ball; continuity pulls this back to a $\\delta$-ball around $c$ inside $f^{-1}(V)$.",
    "rungs": [
      {
        "why": "(=>) Assume $f$ is continuous and $V \\subseteq Y$ is open. Take any $c \\in f^{-1}(V)$.",
        "m": "$$c \\in f^{-1}(V) \\implies f(c) \\in V$$",
        "meaning": "What this really means: Picking a point in the pre-image means its output lands safely inside $V$."
      },
      {
        "why": "Since $V$ is open, choose $\\varepsilon > 0$ such that $B_Y(f(c), \\varepsilon) \\subseteq V$.",
        "m": "$$\\exists \\varepsilon > 0 : B_Y(f(c), \\varepsilon) \\subseteq V$$",
        "meaning": "What this really means: Inside the open target set $V$, the output point has an open buffer zone."
      },
      {
        "why": "By continuity of $f$ at $c$, choose $\\delta > 0$ such that $d_X(x, c) < \\delta \\implies d_Y(f(x), f(c)) < \\varepsilon$.",
        "m": "$$f(B_X(c, \\delta)) \\subseteq B_Y(f(c), \\varepsilon) \\subseteq V$$",
        "meaning": "What this really means: Continuity guarantees a tiny input bubble whose entire image stays inside that target buffer zone."
      },
      {
        "why": "Taking pre-images gives $B_X(c, \\delta) \\subseteq f^{-1}(V)$, proving $f^{-1}(V)$ is open in $X$.",
        "m": "$$B_X(c, \\delta) \\subseteq f^{-1}(V) \\implies f^{-1}(V) \\text{ is open}$$",
        "meaning": "What this really means: Since every point in the pre-image has its own open input bubble inside the pre-image, the pre-image is open!"
      },
      {
        "why": "(<=) Conversely, if pre-images of open sets are open, for any $c$ and $\\varepsilon > 0$, the open ball $V = B_Y(f(c), \\varepsilon)$ is open, so its pre-image is open, yielding a $\\delta$-ball around $c$.",
        "m": "$$f^{-1}(B_Y(f(c), \\varepsilon)) \\text{ is open} \\implies \\exists \\delta > 0 : B_X(c, \\delta) \\subseteq f^{-1}(B_Y(f(c), \\varepsilon))$$",
        "meaning": "What this really means: The open pre-image immediately supplies the required $\\delta$-radius for any given $\\varepsilon$."
      }
    ],
    "ends": "A map between metric spaces is continuous if and only if pre-images of open sets are open."
  },
  "cards": [
    {
      "q": "State the global open set characterization of continuity.",
      "a": "$f: X \\to Y$ is continuous iff $f^{-1}(V)$ is open in $X$ for every open set $V \\subseteq Y$.",
      "kind": "state"
    },
    {
      "q": "State the sequential criterion for continuity in metric spaces.",
      "a": "$f$ is continuous at $c$ iff $x_n \\to c \\implies f(x_n) \\to f(c)$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 4"
},
{
  "id": "c.e2.1",
  "sec": "E2",
  "kind": "definition",
  "tier": "core",
  "title": "Complete Metric Spaces and Cauchy Sequences",
  "oneLine": "A metric space is complete if every sequence whose terms cluster together converges to a limit inside the space.",
  "statement": "Let $(X, d)$ be a metric space.\n      <p>(a) A sequence $(x_n)$ in $X$ is a <b>Cauchy sequence</b> if:\n      $$\\forall \\varepsilon > 0, \\; \\exists N \\in \\mathbb{N} : m, n \\ge N \\implies d(x_m, x_n) < \\varepsilon$$</p>\n      <p>(b) $(X, d)$ is a <b>complete metric space</b> if every Cauchy sequence in $X$ converges to a limit in $X$.</p>\n      <p>(c) $\\mathbb{R}^n$ with Euclidean metric, $\\ell^p$ spaces ($1 \\le p \\le \\infty$), and $C[a, b]$ with the uniform metric are complete. $\\mathbb{Q}$ and the open interval $(0, 1)$ are NOT complete.</p>\n      <p>(d) A subspace of a complete metric space is complete if and only if it is closed.</p>",
  "intuition": "<p>In Real Analysis I, the completeness of $\\mathbb{R}$ was the fundamental axiom: there are no 'holes' on the line. In general metric spaces, completeness means the exact same thing: any sequence whose terms pack infinitely tight together cannot slip through a missing hole.</p>\n      <p>For example, in $\\mathbb{Q}$, the sequence $1, 1.4, 1.41, 1.414, \\dots$ is Cauchy, but its target $\\sqrt{2}$ is missing from $\\mathbb{Q}$, so $\\mathbb{Q}$ is incomplete.</p>",
  "needs": [
    "c.e1.4",
    "c.3.5.5"
  ],
  "traps": [
    "Every convergent sequence is Cauchy, but the converse holds ONLY in complete spaces!",
    "An open subset of a complete space is almost never complete (e.g. $(0, 1)$ with $1/n$ is Cauchy but limit $0 \\notin (0, 1)$)."
  ],
  "cards": [
    {
      "q": "Define a complete metric space.",
      "a": "A metric space in which every Cauchy sequence converges to a point in the space.",
      "kind": "state"
    },
    {
      "q": "When is a subspace $Y$ of a complete metric space $(X, d)$ complete?",
      "a": "If and only if $Y$ is a closed subset of $X$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 3"
},
{
  "id": "c.e2.2",
  "sec": "E2",
  "kind": "theorem",
  "tier": "core",
  "title": "The Banach Contraction Mapping Principle",
  "oneLine": "A strict contraction on a complete metric space has a unique fixed point, found by repeated iteration.",
  "statement": "Let $(X, d)$ be a <b>non-empty complete metric space</b> and let $T: X \\to X$ be a <b>contraction mapping</b>, meaning there exists $k \\in [0, 1)$ such that:\n      $$d(T(x), T(y)) \\le k \\, d(x, y) \\quad \\text{for all } x, y \\in X$$\n      Then:\n      <p>(1) $T$ has a <b>unique fixed point</b> $x^* \\in X$ satisfying $T(x^*) = x^*$.</p>\n      <p>(2) For ANY starting point $x_0 \\in X$, the sequence of Picard iterates $x_{n+1} = T(x_n)$ converges to $x^*$, with error estimate:\n      $$d(x_n, x^*) \\le \\frac{k^n}{1 - k} d(x_0, x_1)$$</p>",
  "intuition": "<p>Think of a photocopier that shrinks an image by a factor of $k = 0.5$ and prints it on the same sheet. If you put the copy back on the glass and repeat, the images zoom in on exactly one pixel that never moves: the fixed point!</p>\n      <p>This theorem is one of the most powerful engines in modern mathematics: it proves the existence of solutions to differential equations (Picard-Lindel\u00f6f), integral equations, and the Inverse Function Theorem!</p>",
  "needs": [
    "c.e2.1",
    "c.3.5.8"
  ],
  "traps": [
    "The condition $d(Tx, Ty) < d(x, y)$ for $x \\ne y$ is NOT enough! You must have a uniform contraction factor $k < 1$. For example, $f(x) = x + 1/x$ on $[1, \\infty)$ has $|f'(x)| < 1$ but no fixed point.",
    "The space $X$ MUST be complete. On $(0, 1)$, $T(x) = x/2$ is a contraction with $k = 1/2$, but its fixed point $0$ is missing!"
  ],
  "proof": {
    "idea": "Show the Picard sequence is contractive, hence Cauchy, and completeness yields the fixed point.",
    "why": "Each step shrinks by $k$, so $d(x_n, x_{n+1}) \\le k^n d(x_0, x_1)$. The geometric series sum bounds $d(x_n, x_{n+p})$, proving $(x_n)$ is Cauchy.",
    "rungs": [
      {
        "why": "Start with arbitrary $x_0$ and define $x_{n+1} = T(x_n)$. By induction, $d(x_n, x_{n+1}) \\le k^n d(x_0, x_1)$.",
        "m": "$$d(x_n, x_{n+1}) = d(T(x_{n-1}), T(x_n)) \\le k \\, d(x_{n-1}, x_n) \\le k^n d(x_0, x_1)$$",
        "meaning": "What this really means: At every iteration, the jump distance shrinks geometrically by at least factor $k$."
      },
      {
        "why": "For any $m > n$, sum the intermediate jumps using the Triangle Inequality.",
        "m": "$$d(x_n, x_m) \\le \\sum_{j=n}^{m-1} d(x_j, x_{j+1}) \\le d(x_0, x_1) \\sum_{j=n}^{m-1} k^j < \\frac{k^n}{1 - k} d(x_0, x_1)$$",
        "meaning": "What this really means: The entire tail of the sequence is trapped inside a geometric series sum that shrinks to zero."
      },
      {
        "why": "Since $k < 1$, $k^n \\to 0$, which proves $(x_n)$ is a Cauchy sequence in $X$.",
        "m": "$$\\lim_{n\\to\\infty} \\frac{k^n}{1 - k} d(x_0, x_1) = 0 \\implies (x_n) \\text{ is Cauchy}$$",
        "meaning": "What this really means: The iterates are guaranteed to cluster infinitely tightly together."
      },
      {
        "why": "Since $X$ is complete, there exists $x^* = \\lim x_n \\in X$. Since $T$ is continuous, $T(x^*) = T(\\lim x_n) = \\lim T(x_n) = \\lim x_{n+1} = x^*$.",
        "m": "$$T(x^*) = T\\left(\\lim_{n\\to\\infty} x_n\\right) = \\lim_{n\\to\\infty} x_{n+1} = x^*$$",
        "meaning": "What this really means: Completeness gives the limit point, and continuity confirms it is an unmoving fixed point."
      },
      {
        "why": "For uniqueness, if $T(y) = y$, then $d(x^*, y) = d(T(x^*), T(y)) \\le k d(x^*, y)$. Since $k < 1$, $(1 - k) d(x^*, y) \\le 0$, forcing $d(x^*, y) = 0$.",
        "m": "$$(1 - k) d(x^*, y) \\le 0 \\text{ with } 1 - k > 0 \\implies d(x^*, y) = 0 \\implies x^* = y$$",
        "meaning": "What this really means: Two distinct fixed points would have to get strictly closer to each other, an obvious contradiction."
      }
    ],
    "ends": "The Banach Contraction Mapping Principle is proved: every contraction on a complete metric space has a unique fixed point."
  },
  "cards": [
    {
      "q": "State the Banach Contraction Mapping Theorem.",
      "a": "A contraction mapping $T$ with factor $k < 1$ on a non-empty complete metric space has a unique fixed point $x^*$, and Picard iterates converge to $x^*$.",
      "kind": "state"
    },
    {
      "q": "What is the error bound after $n$ iterations in Banach fixed-point theorem?",
      "a": "$d(x_n, x^*) \\le \\frac{k^n}{1 - k} d(x_0, x_1)$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Trench Ch. 9"
},
{
  "id": "c.e2.3",
  "sec": "E2",
  "kind": "definition",
  "tier": "core",
  "title": "Dense, Nowhere Dense, and Meager Sets",
  "oneLine": "Nowhere dense sets have no interior even after closing; meager sets are countable unions of them.",
  "statement": "Let $(X, d)$ be a metric space and $E \\subseteq X$.\n      <p>(a) $E$ is <b>dense</b> in $X$ if its closure is the whole space: $\\overline{E} = X$.</p>\n      <p>(b) $E$ is <b>nowhere dense</b> if the interior of its closure is empty: $\\operatorname{int}(\\overline{E}) = \\emptyset$. Equivalently, $\\overline{E}$ contains no open balls.</p>\n      <p>(c) $E$ is of <b>first category (meager)</b> if it is a countable union of nowhere dense sets: $E = \\bigcup_{n=1}^\\infty E_n$ with each $E_n$ nowhere dense.</p>\n      <p>(d) $E$ is of <b>second category (non-meager)</b> if it is not of first category.</p>",
  "intuition": "<p>Nowhere dense sets are topological 'swiss cheese with almost no cheese': even if you take their closure, they cannot fill up any open ball, no matter how small.</p>\n      <p>Single points $\\{x\\}$ in $\\mathbb{R}$ are nowhere dense. The rationals $\\mathbb{Q} = \\bigcup_{q \\in \\mathbb{Q}} \\{q\\}$ are a countable union of singletons, so $\\mathbb{Q}$ is meager (first category)!</p>",
  "needs": [
    "c.e1.3"
  ],
  "traps": [
    "Nowhere dense is MUCH stronger than having empty interior: $\\mathbb{Q}$ has empty interior in $\\mathbb{R}$, but $\\overline{\\mathbb{Q}} = \\mathbb{R}$, so $\\mathbb{Q}$ is NOT nowhere dense!",
    "A set can be dense and meager at the same time: $\\mathbb{Q}$ is dense in $\\mathbb{R}$ and also meager."
  ],
  "cards": [
    {
      "q": "Define a nowhere dense subset of a metric space.",
      "a": "A set $E$ whose closure has empty interior: $\\operatorname{int}(\\overline{E}) = \\emptyset$.",
      "kind": "state"
    },
    {
      "q": "What is a meager (first category) set?",
      "a": "A set that can be written as a countable union of nowhere dense sets.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Hunter & Nachtergaele Ch. 1"
},
{
  "id": "c.e2.4",
  "sec": "E2",
  "kind": "theorem",
  "tier": "core",
  "title": "The Baire Category Theorem",
  "oneLine": "A complete metric space cannot be made of meager crumbs: it is of second category in itself.",
  "statement": "Let $(X, d)$ be a <b>complete metric space</b>.\n      <p>(1) If $U_1, U_2, U_3, \\dots$ are dense open subsets of $X$, then their countable intersection is dense in $X$:\n      $$\\overline{\\bigcap_{n=1}^\\infty U_n} = X$$</p>\n      <p>(2) <b>Equivalent Category Form:</b> $X$ is of <b>second category (non-meager)</b> in itself. That is, $X$ CANNOT be written as a countable union of nowhere dense sets.</p>\n      <p>(3) <b>Immediate Consequence:</b> $\\mathbb{R}$ is uncountable, because if $\\mathbb{R}$ were countable, it would be a countable union of singletons (nowhere dense sets), contradicting Baire's theorem!</p>",
  "intuition": "<p>Baire's theorem says that complete spaces are topologically 'fat' and robust: you cannot exhaust a complete space by scraping together countably many thin, nowhere dense crumbs.</p>\n      <p>This explains why the irrationals $\\mathbb{R} \\setminus \\mathbb{Q}$ are massive while the rationals $\\mathbb{Q}$ are tiny: $\\mathbb{Q}$ is meager, so $\\mathbb{R} \\setminus \\mathbb{Q}$ is a dense $G_\\delta$ set of second category.</p>",
  "needs": [
    "c.e2.1",
    "c.e2.3",
    "c.2.5.2"
  ],
  "traps": [
    "Baire Category Theorem requires $X$ to be COMPLETE (or locally compact). It FAILS for $\\mathbb{Q}$: $\\mathbb{Q}$ IS a countable union of nowhere dense singletons!",
    "The theorem guarantees the intersection is DENSE, not merely non-empty."
  ],
  "proof": {
    "idea": "Construct a nested sequence of closed balls whose centers converge by completeness to a point in the intersection.",
    "why": "Since each $U_n$ is dense, any open ball contains a point of $U_n$; since $U_n$ is open, we can shrink to a smaller closed ball trapped inside $U_n$.",
    "rungs": [
      {
        "why": "Let $W \\subseteq X$ be an arbitrary non-empty open set. We must show $W \\cap (\\bigcap U_n) \\ne \\emptyset$.",
        "m": "$$W \\cap U_1 \\ne \\emptyset \\quad (\\text{since } U_1 \\text{ is dense})$$",
        "meaning": "What this really means: To prove density, we show the intersection meets every open target window $W$."
      },
      {
        "why": "Since $W \\cap U_1$ is open and non-empty, choose a closed ball $\\overline{B}(x_1, r_1) \\subseteq W \\cap U_1$ with $r_1 < 1$.",
        "m": "$$\\overline{B}(x_1, r_1) \\subseteq W \\cap U_1, \\quad 0 < r_1 < 1$$",
        "meaning": "What this really means: We plant our first closed stepping stone entirely inside both $W$ and the first open set."
      },
      {
        "why": "Inductively, since $U_n$ is dense, choose $\\overline{B}(x_n, r_n) \\subseteq B(x_{n-1}, r_{n-1}) \\cap U_n$ with $0 < r_n < 1/n$.",
        "m": "$$\\overline{B}(x_n, r_n) \\subseteq B(x_{n-1}, r_{n-1}) \\cap U_n, \\quad 0 < r_n < \\frac{1}{n}$$",
        "meaning": "What this really means: Each step nests deeper inside the previous ball while guaranteeing membership in the $n$-th open set."
      },
      {
        "why": "The centers $(x_n)$ form a Cauchy sequence because $d(x_n, x_m) < r_n < 1/n$ for all $m \\ge n$.",
        "m": "$$m \\ge n \\implies d(x_n, x_m) < \\frac{1}{n} \\to 0 \\implies (x_n) \\text{ is Cauchy}$$",
        "meaning": "What this really means: The centers shrink into a single focused pinprick."
      },
      {
        "why": "By completeness of $X$, $x_n \\to x^* \\in X$. Since $x^* \\in \\overline{B}(x_n, r_n) \\subseteq U_n$ for all $n$, $x^* \\in W \\cap \\bigcap_{n=1}^\\infty U_n$.",
        "m": "$$x^* = \\lim_{n\\to\\infty} x_n \\in W \\cap \\bigcap_{n=1}^\\infty U_n \\implies \\overline{\\bigcap_{n=1}^\\infty U_n} = X$$",
        "meaning": "What this really means: Completeness guarantees the pinprick point actually exists, and it lands inside every single set simultaneously."
      }
    ],
    "ends": "The Baire Category Theorem is proved: the countable intersection of dense open sets in a complete metric space is dense."
  },
  "cards": [
    {
      "q": "State the Baire Category Theorem for complete metric spaces.",
      "a": "In a complete metric space, the countable intersection of dense open sets is dense; equivalently, the space is non-meager.",
      "kind": "state"
    },
    {
      "q": "Why does Baire's Theorem imply that $\\mathbb{R}$ is uncountable?",
      "a": "Because if $\\mathbb{R}$ were countable, it would be a countable union of singletons (nowhere dense sets), contradicting that complete spaces are non-meager.",
      "kind": "apply"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 2, Hunter & Nachtergaele Ch. 1"
},
{
  "id": "c.e3.1",
  "sec": "E3",
  "kind": "definition",
  "tier": "core",
  "title": "Compactness and Open Covers",
  "oneLine": "A subset is compact if every open cover can be thinned out to a finite subcover.",
  "statement": "Let $(X, d)$ be a metric space.\n      <p>(a) An <b>open cover</b> of $K \\subseteq X$ is a collection $\\{U_\\alpha\\}_{\\alpha \\in I}$ of open sets such that $K \\subseteq \\bigcup_{\\alpha \\in I} U_\\alpha$.</p>\n      <p>(b) $K$ is <b>compact</b> if every open cover of $K$ contains a <b>finite subcover</b>: there exist $\\alpha_1, \\ldots, \\alpha_m \\in I$ such that:\n      $$K \\subseteq U_{\\alpha_1} \\cup \\cdots \\cup U_{\\alpha_m}$$</p>\n      <p>(c) <b>Heine\u2013Borel Theorem in $\\mathbb{R}^n$:</b> A subset $K \\subseteq \\mathbb{R}^n$ is compact if and only if it is both <b>closed and bounded</b>.</p>",
  "intuition": "<p>Compactness is the next best thing to being a finite set! An infinite set can have points drifting off to infinity or disappearing into open holes.</p>\n      <p>A compact set is completely self-contained and finite-like: no matter how many tiny open patches you need to cover it, you can always discard almost all of them and finish the job with just a finite handful.</p>",
  "needs": [
    "c.e1.2",
    "c.e1.3"
  ],
  "traps": [
    "The Heine-Borel theorem (compact \u21d4 closed + bounded) is FALSE in infinite-dimensional metric spaces! In $C[0, 1]$ or $\\ell^2$, the closed unit ball is NOT compact.",
    "An open interval $(0, 1)$ is bounded but NOT compact because the cover $\\{(1/n, 1) : n \\ge 2\\}$ has no finite subcover."
  ],
  "cards": [
    {
      "q": "Define a compact subset of a metric space.",
      "a": "A set $K$ where every open cover has a finite subcover.",
      "kind": "state"
    },
    {
      "q": "When does closed and bounded imply compact?",
      "a": "In $\\mathbb{R}^n$ (by the Heine-Borel Theorem). It fails in infinite-dimensional metric spaces.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 2"
},
{
  "id": "c.e3.2",
  "sec": "E3",
  "kind": "theorem",
  "tier": "core",
  "title": "Sequential Compactness and Total Boundedness",
  "oneLine": "In metric spaces, compact = sequentially compact = complete and totally bounded.",
  "statement": "Let $(X, d)$ be a metric space and $K \\subseteq X$. The following are logically equivalent:\n      <p>(1) $K$ is <b>compact</b> (every open cover has a finite subcover).</p>\n      <p>(2) $K$ is <b>sequentially compact</b>: every sequence in $K$ has a subsequence converging to a point in $K$.</p>\n      <p>(3) $K$ is <b>complete and totally bounded</b>.</p>\n      <p>Here $K$ is <b>totally bounded</b> if for every $\\varepsilon > 0$, $K$ can be covered by finitely many open balls of radius $\\varepsilon$.</p>",
  "intuition": "<p>Sequential compactness is the working mathematician's definition of compactness: you cannot get lost in $K$. Any infinite sequence of points in $K$ is forced to pile up around at least one accumulator point that stays inside $K$ (Bolzano\u2013Weierstrass on steroids!).</p>\n      <p>Total boundedness means you can blanket the entire set with a finite number of $\\varepsilon$-coins, no matter how small $\\varepsilon$ is.</p>",
  "needs": [
    "c.e3.1",
    "c.e2.1",
    "c.3.4.8"
  ],
  "traps": [
    "Bounded does NOT mean totally bounded in general spaces! The infinite orthonormal basis $\\{e_n\\}$ in $\\ell^2$ is bounded ($d(e_n, 0) = 1$) but requires infinitely many $1/2$-balls to cover.",
    "Total boundedness is a metric property, not a topological one."
  ],
  "proof": {
    "idea": "Show sequentially compact implies totally bounded (construct an \u03b5-net) and complete (Cauchy sequences with convergent subsequences converge).",
    "why": "If an \u03b5-net could not be finite, an infinite sequence with mutual distances \u2265 \u03b5 would have no convergent subsequence, contradicting sequential compactness.",
    "rungs": [
      {
        "why": "Suppose for contradiction that $K$ is sequentially compact but not totally bounded for some $\\varepsilon_0 > 0$.",
        "m": "$$\\exists \\varepsilon_0 > 0 : K \\text{ cannot be covered by finitely many } B(x, \\varepsilon_0)$$",
        "meaning": "What this really means: If total boundedness failed, a finite number of coins would leave parts of the set uncovered."
      },
      {
        "why": "Pick $x_1 \\in K$. Since $B(x_1, \\varepsilon_0)$ does not cover $K$, pick $x_2 \\notin B(x_1, \\varepsilon_0)$. Inductively pick $x_{n+1} \\notin \\bigcup_{i=1}^n B(x_i, \\varepsilon_0)$.",
        "m": "$$d(x_n, x_m) \\ge \\varepsilon_0 \\quad \\text{for all } n \\ne m$$",
        "meaning": "What this really means: We construct an infinite sequence where every single pair of points is separated by at least $\\varepsilon_0$."
      },
      {
        "why": "Since $d(x_n, x_m) \\ge \\varepsilon_0$, no subsequence can ever be Cauchy, so $(x_n)$ has NO convergent subsequence.",
        "m": "$$d(x_{n_j}, x_{n_k}) \\ge \\varepsilon_0 \\implies (x_{n_k}) \\text{ cannot converge}$$",
        "meaning": "What this really means: Points spaced $\\varepsilon_0$ apart can never cluster together to produce a limit."
      },
      {
        "why": "This contradicts that $K$ is sequentially compact. Hence $K$ must be totally bounded.",
        "m": "$$\\text{contradiction} \\implies K \\text{ is totally bounded}$$",
        "meaning": "What this really means: Sequential compactness forces the set to be coverable by finitely many small balls."
      }
    ],
    "ends": "In any metric space, compactness, sequential compactness, and completeness plus total boundedness are equivalent."
  },
  "cards": [
    {
      "q": "State the equivalence theorem for compactness in metric spaces.",
      "a": "A metric space is compact iff it is sequentially compact iff it is complete and totally bounded.",
      "kind": "state"
    },
    {
      "q": "Define total boundedness of a metric set $K$.",
      "a": "For every $\\varepsilon > 0$, $K$ can be covered by finitely many open balls of radius $\\varepsilon$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 2, Munkres Ch. 3"
},
{
  "id": "c.e3.3",
  "sec": "E3",
  "kind": "theorem",
  "tier": "core",
  "title": "Continuous Mappings on Compact Metric Spaces",
  "oneLine": "Continuous images of compact sets are compact, attain their extrema, and are uniformly continuous.",
  "statement": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces, with $K \\subseteq X$ <b>compact</b>, and let $f: K \\to Y$ be continuous.\n      <p>(1) <b>Preservation of Compactness:</b> The image $f(K)$ is compact in $Y$.</p>\n      <p>(2) <b>Extreme Value Theorem:</b> If $f: K \\to \\mathbb{R}$, then $f$ is bounded and attains its maximum and minimum values on $K$.</p>\n      <p>(3) <b>Heine\u2013Cantor Theorem:</b> $f$ is <b>uniformly continuous</b> on $K$.</p>\n      <p>(4) <b>Compact-to-Hausdorff Bijection:</b> If $f: K \\to Y$ is a continuous bijection and $Y$ is a metric space, then $f^{-1}$ is automatically continuous (so $f$ is a homeomorphism).</p>",
  "intuition": "<p>Compactness is the ultimate stabilizer for continuous functions: it prevents functions from blowing up to infinity, guarantees that optimal solutions (max/min) actually exist, and upgrades ordinary continuity to uniform continuity!</p>",
  "needs": [
    "c.e3.1",
    "c.e1.5",
    "c.5.3.4",
    "c.5.4.3"
  ],
  "traps": [
    "Compactness of the DOMAIN is mandatory: $f(x) = 1/x$ on $(0, 1)$ is continuous but NOT bounded and NOT uniformly continuous because $(0, 1)$ is not compact.",
    "A continuous bijection between metric spaces is NOT always a homeomorphism unless the domain is compact (or open mapping theorem applies)."
  ],
  "proof": {
    "idea": "Pull back an open cover of f(K) to an open cover of K via continuity, and thin it out using compactness of K.",
    "why": "If {V_\u03b1} covers f(K), then {f^{-1}(V_\u03b1)} covers K and consists of open sets. A finite subcover pushes forward to a finite subcover of f(K).",
    "rungs": [
      {
        "why": "Let $\\{V_\\alpha\\}$ be an open cover of $f(K)$ in $Y$.",
        "m": "$$f(K) \\subseteq \\bigcup_{\\alpha \\in I} V_\\alpha$$",
        "meaning": "What this really means: We wrap the output set in an arbitrary collection of open target blankets."
      },
      {
        "why": "Since $f$ is continuous, each pre-image $U_\\alpha = f^{-1}(V_\\alpha)$ is open in $K$.",
        "m": "$$U_\\alpha := f^{-1}(V_\\alpha) \\text{ is open in } K \\quad \\forall \\alpha \\in I$$",
        "meaning": "What this really means: Continuity pulls each target blanket back into an open input blanket."
      },
      {
        "why": "The collection $\\{U_\\alpha\\}$ covers $K$: $K \\subseteq \\bigcup_{\\alpha \\in I} f^{-1}(V_\\alpha)$.",
        "m": "$$x \\in K \\implies f(x) \\in V_\\alpha \\implies x \\in f^{-1}(V_\\alpha)$$",
        "meaning": "What this really means: Every input point is covered by at least one pulled-back blanket."
      },
      {
        "why": "Since $K$ is compact, select a finite subcover $K \\subseteq U_{\\alpha_1} \\cup \\cdots \\cup U_{\\alpha_m}$.",
        "m": "$$K \\subseteq \\bigcup_{j=1}^m f^{-1}(V_{\\alpha_j})$$",
        "meaning": "What this really means: Compactness of the domain lets us discard all but a finite handful of blankets."
      },
      {
        "why": "Take forward images: $f(K) \\subseteq V_{\\alpha_1} \\cup \\cdots \\cup V_{\\alpha_m}$, proving $f(K)$ is compact.",
        "m": "$$f(K) \\subseteq \\bigcup_{j=1}^m V_{\\alpha_j} \\implies f(K) \\text{ is compact}$$",
        "meaning": "What this really means: Pushing the finite subcover forward wraps the entire output set in finitely many blankets."
      }
    ],
    "ends": "The continuous image of any compact metric set is compact."
  },
  "cards": [
    {
      "q": "State the theorem on the continuous image of a compact set.",
      "a": "If $f: X \\to Y$ is continuous and $K \\subseteq X$ is compact, then $f(K)$ is compact in $Y$.",
      "kind": "state"
    },
    {
      "q": "Under what condition is a continuous bijection between metric spaces guaranteed to be a homeomorphism?",
      "a": "When the domain space is compact.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 4"
},
{
  "id": "c.e3.4",
  "sec": "E3",
  "kind": "definition",
  "tier": "core",
  "title": "Connectedness in Metric Spaces",
  "oneLine": "A metric space is connected if it cannot be split into two disjoint non-empty open pieces.",
  "statement": "Let $(X, d)$ be a metric space.\n      <p>(a) A <b>separation</b> of $X$ is a pair of non-empty, disjoint open sets $A, B \\subseteq X$ such that $X = A \\cup B$.</p>\n      <p>(b) $X$ is <b>connected</b> if no separation of $X$ exists. Equivalently, the ONLY subsets of $X$ that are both open and closed (clopen) are $\\emptyset$ and $X$.</p>\n      <p>(c) A subset $E \\subseteq X$ is connected if it is connected in the subspace metric.</p>\n      <p>(d) <b>Preservation of Connectedness:</b> If $f: X \\to Y$ is continuous and $X$ is connected, then $f(X)$ is connected in $Y$.</p>",
  "intuition": "<p>Connectedness means 'in one piece': you cannot cut the space in two without cutting through at least one open boundary.</p>\n      <p>The Intermediate Value Theorem is simply the statement that continuous functions map connected sets to connected sets: connected subsets of $\\mathbb{R}$ are intervals!</p>",
  "needs": [
    "c.e1.2",
    "c.5.3.7"
  ],
  "traps": [
    "Connected does NOT imply path-connected (e.g. the Topologist's Sine Curve is connected but NOT path-connected).",
    "In $\\mathbb{Q}$, every set with more than one point is disconnected (totally disconnected)."
  ],
  "cards": [
    {
      "q": "Define a connected metric space.",
      "a": "A space that cannot be partitioned into two non-empty disjoint open sets; equivalently, its only clopen sets are $\\emptyset$ and $X$.",
      "kind": "state"
    },
    {
      "q": "What are the connected subsets of the real line $\\mathbb{R}$?",
      "a": "Precisely the intervals (open, closed, half-open, rays, or single points).",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 2, Munkres Ch. 3"
},
{
  "id": "c.e3.5",
  "sec": "E3",
  "kind": "theorem",
  "tier": "core",
  "title": "Path-Connectedness and Components",
  "oneLine": "Path-connected means any two points can be joined by a continuous curve; it implies connectedness.",
  "statement": "Let $(X, d)$ be a metric space.\n      <p>(a) A <b>path</b> from $x$ to $y$ in $X$ is a continuous map $\\gamma: [0, 1] \\to X$ with $\\gamma(0) = x$ and $\\gamma(1) = y$.</p>\n      <p>(b) $X$ is <b>path-connected</b> if every pair of points can be joined by a path.</p>\n      <p>(c) <b>Path-Connected $\\implies$ Connected:</b> Every path-connected metric space is connected. The converse is false in general (Topologist's Sine Curve), but TRUE for open subsets of $\\mathbb{R}^n$.</p>",
  "intuition": "<p>Path-connectedness is the intuitive notion of connected: an ant can crawl continuously from point $A$ to point $B$ without jumping over a chasm.</p>\n      <p>For open regions in $\\mathbb{R}^n$ (like in multivariable calculus and complex analysis), connected and path-connected mean the exact same thing!</p>",
  "needs": [
    "c.e3.4"
  ],
  "traps": [
    "The Topologist\u2019s Sine Curve $T = \\{(x, \\sin(1/x)) : x \\in (0, 1]\\} \\cup \\{(0, y) : -1 \\le y \\le 1\\}$ is connected, but NOT path-connected!",
    "Assuming path-connected is equivalent to connected in general metric spaces."
  ],
  "proof": {
    "idea": "Show that if a path-connected space had a separation A, B, the pre-image path would separate [0, 1], contradicting that [0, 1] is connected.",
    "why": "Continuous pre-images of open sets are open, so a separation of X pulls back to a separation of [0, 1], which is impossible.",
    "rungs": [
      {
        "why": "Suppose for contradiction that $X$ is path-connected but has a separation $X = A \\cup B$ into non-empty disjoint open sets.",
        "m": "$$A \\ne \\emptyset, \\; B \\ne \\emptyset, \\; A \\cap B = \\emptyset, \\; A, B \\text{ open}$$",
        "meaning": "What this really means: We assume the space has cracked into two isolated open islands."
      },
      {
        "why": "Pick $a \\in A$ and $b \\in B$. Since $X$ is path-connected, let $\\gamma: [0, 1] \\to X$ be a continuous path with $\\gamma(0) = a$ and $\\gamma(1) = b$.",
        "m": "$$\\gamma(0) = a \\in A \\quad \\text{and} \\quad \\gamma(1) = b \\in B$$",
        "meaning": "What this really means: We draw a continuous bridge linking a point on island A to a point on island B."
      },
      {
        "why": "Pull back the open sets: $U = \\gamma^{-1}(A)$ and $V = \\gamma^{-1}(B)$ are open in $[0, 1]$ by continuity of $\\gamma$.",
        "m": "$$U = \\gamma^{-1}(A) \\text{ and } V = \\gamma^{-1}(B) \\text{ are open in } [0, 1]$$",
        "meaning": "What this really means: The two islands pull back into two open slices of the unit time interval $[0, 1]$."
      },
      {
        "why": "$U$ and $V$ are non-empty ($0 \\in U, 1 \\in V$), disjoint, and $U \\cup V = [0, 1]$. This forms a separation of $[0, 1]$.",
        "m": "$$[0, 1] = U \\cup V \\text{ is a separation of } [0, 1] \\implies\\Leftarrow$$",
        "meaning": "What this really means: This forces the continuous time interval $[0, 1]$ to crack into two pieces\u2014an outright contradiction because $[0, 1]$ is connected!"
      }
    ],
    "ends": "Every path-connected metric space is connected."
  },
  "cards": [
    {
      "q": "Does path-connected imply connected?",
      "a": "Yes, every path-connected space is connected.",
      "kind": "state"
    },
    {
      "q": "Give the standard counterexample of a space that is connected but not path-connected.",
      "a": "The Topologist's Sine Curve: $T = \\{(x, \\sin(1/x)) : x \\in (0, 1]\\} \\cup (\\{0\\} \\times [-1, 1])$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Munkres Ch. 3"
},
{
  "id": "c.e4.1",
  "sec": "E4",
  "kind": "definition",
  "tier": "core",
  "title": "Pointwise and Uniform Boundedness of Function Families",
  "oneLine": "Pointwise bounded means bounded at each location; uniformly bounded means one ceiling caps all functions everywhere.",
  "statement": "Let $X$ be a set, and let $\\mathcal{F}$ be a family of functions $f: X \\to \\mathbb{R}$.\n      <p>(a) $\\mathcal{F}$ is <b>pointwise bounded</b> on $X$ if for every $x \\in X$, there exists $M_x < \\infty$ such that:\n      $$|f(x)| \\le M_x \\quad \\text{for all } f \\in \\mathcal{F}$$</p>\n      <p>(b) $\\mathcal{F}$ is <b>uniformly bounded</b> on $X$ if there exists a single constant $M < \\infty$ such that:\n      $$|f(x)| \\le M \\quad \\text{for all } f \\in \\mathcal{F} \\text{ and all } x \\in X$$</p>",
  "intuition": "<p>Pointwise boundedness gives each point $x$ its own custom vertical ceiling $M_x$, but those ceilings could spike arbitrarily high at other points.</p>\n      <p>Uniform boundedness drops a single universal flat ceiling $M$ over the entire graph of every single function in the family simultaneously.</p>",
  "needs": [
    "c.e1.1"
  ],
  "traps": [
    "Pointwise boundedness does NOT imply uniform boundedness! For example, $f_n(x) = n x$ on $(0, 1)$ is pointwise bounded (at each $x$, $n x \\to \\infty$ is avoided by fixing $x$), but not uniformly bounded.",
    "Even on a compact interval $[0, 1]$, $f_n(x) = n x(1 - x)^n$ is pointwise bounded by 0 but spikes to height $1/e$."
  ],
  "cards": [
    {
      "q": "Distinguish between pointwise boundedness and uniform boundedness for a family $\\mathcal{F}$.",
      "a": "Pointwise: each $x$ has its own bound $M_x$ for all $f \\in \\mathcal{F}$. Uniform: a single bound $M$ works for all $x \\in X$ and all $f \\in \\mathcal{F}$.",
      "kind": "state"
    },
    {
      "q": "Give an example of a family that is pointwise bounded but not uniformly bounded.",
      "a": "$f_n(x) = n x$ on $(0, 1)$, or $f_n(x) = n^2 x e^{-n x}$ on $[0, 1]$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 7, Carothers Ch. 10"
},
{
  "id": "c.e4.2",
  "sec": "E4",
  "kind": "definition",
  "tier": "core",
  "title": "Equicontinuity of Function Families",
  "oneLine": "Equicontinuity means a single delta controls the wiggle room for all functions in the family at once.",
  "statement": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces, and let $\\mathcal{F}$ be a family of functions $f: X \\to Y$.\n      <p>(a) $\\mathcal{F}$ is <b>equicontinuous at $x_0 \\in X$</b> if for every $\\varepsilon > 0$, there exists $\\delta > 0$ such that:\n      $$d_X(x, x_0) < \\delta \\implies d_Y(f(x), f(x_0)) < \\varepsilon \\quad \\text{for ALL } f \\in \\mathcal{F}$$</p>\n      <p>(b) $\\mathcal{F}$ is <b>equicontinuous on $X$</b> if for every $\\varepsilon > 0$, there exists $\\delta > 0$ such that:\n      $$d_X(x_1, x_2) < \\delta \\implies d_Y(f(x_1), f(x_2)) < \\varepsilon \\quad \\text{for all } x_1, x_2 \\in X \\text{ and all } f \\in \\mathcal{F}$$</p>\n      <p>(c) <b>Uniform Lipschitz Criterion:</b> If there exists $L < \\infty$ such that $|f(x) - f(y)| \\le L d(x, y)$ for all $f \\in \\mathcal{F}$, then $\\mathcal{F}$ is equicontinuous (take $\\delta = \\varepsilon/L$). In particular, if $|f'(x)| \\le L$ uniformly, $\\mathcal{F}$ is equicontinuous.</p>",
  "intuition": "<p>Ordinary continuity says: give me $\\varepsilon$, and I can find a $\\delta$ for *this specific function*.</p>\n      <p>Equicontinuity says: the functions cannot oscillate or climb with infinite steepness. One single $\\delta$ reigns in the steepness of *every single member* in the infinite family at the same time!</p>",
  "needs": [
    "c.e4.1",
    "c.5.4.1"
  ],
  "traps": [
    "The sequence $f_n(x) = \\sin(n x)$ on $[0, 2\\pi]$ is uniformly bounded by 1, but NOT equicontinuous because the frequency $n$ increases without bound (derivatives $n \\cos(nx)$ explode).",
    "Equicontinuity is a property of the whole COLLECTION of functions, not individual functions."
  ],
  "cards": [
    {
      "q": "Define equicontinuity for a family $\\mathcal{F}$ of functions on a metric space.",
      "a": "For every $\\varepsilon > 0$, there exists $\\delta > 0$ such that $d(x, y) < \\delta \\implies |f(x) - f(y)| < \\varepsilon$ for all $f \\in \\mathcal{F}$ simultaneously.",
      "kind": "state"
    },
    {
      "q": "Why is $f_n(x) = x^n$ on $[0, 1]$ not equicontinuous?",
      "a": "Because near $x = 1$, the slope $n x^{n-1} \\to \\infty$, so no single $\\delta$ can keep $|x^n - 1| < 1/2$ for all $n$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Rudin Ch. 7, Carothers Ch. 10"
},
{
  "id": "c.e4.3",
  "sec": "E4",
  "kind": "theorem",
  "tier": "core",
  "title": "The Arzel\u00e0\u2013Ascoli Theorem",
  "oneLine": "In C(K) with compact K, a family has compact closure iff it is pointwise bounded and equicontinuous.",
  "statement": "Let $K$ be a <b>compact metric space</b>, and let $C(K)$ be the space of continuous functions on $K$ equipped with the uniform metric $d_\\infty(f, g) = \\sup_{x \\in K} |f(x) - g(x)|$.\n      <p>A subset $\\mathcal{F} \\subseteq C(K)$ is <b>relatively compact</b> (its closure in $C(K)$ is compact, meaning every sequence in $\\mathcal{F}$ has a uniformly convergent subsequence) if and only if:</p>\n      <p>(1) $\\mathcal{F}$ is <b>pointwise bounded</b> on $K$, and</p>\n      <p>(2) $\\mathcal{F}$ is <b>equicontinuous</b> on $K$.</p>\n      <p>Moreover, on compact $K$, pointwise boundedness + equicontinuity implies uniform boundedness.</p>",
  "intuition": "<p>In $\\mathbb{R}^n$, the Bolzano\u2013Weierstrass theorem gives convergent subsequences for free whenever points are bounded. But in the infinite-dimensional function space $C(K)$, boundedness is not enough!</p>\n      <p>Functions can oscillate wildly like $\\sin(n x)$. The Arzel\u00e0\u2013Ascoli theorem is the Bolzano\u2013Weierstrass theorem for function spaces: equicontinuity prevents wild oscillations, allowing you to extract a uniformly convergent sequence of functions!</p>",
  "needs": [
    "c.e4.2",
    "c.e3.2",
    "c.8.1.5"
  ],
  "traps": [
    "Ascoli-Arzel\u00e0 requires the domain $K$ to be COMPACT! On unbounded domains like $\\mathbb{R}$, equicontinuity and boundedness do NOT guarantee a uniformly convergent subsequence.",
    "The extracted subsequence converges UNIFORMLY, not just pointwise."
  ],
  "proof": {
    "idea": "Diagonalize on a countable dense subset of K, then use equicontinuity to upgrade pointwise convergence to uniform convergence on the whole space.",
    "why": "Compactness yields a countable dense subset {q_k}. Bolzano-Weierstrass + diagonal argument finds a subsequence converging at every q_k. Equicontinuity controls points between the q_k.",
    "rungs": [
      {
        "why": "Since $K$ is compact, it has a countable dense subset $E = \\{q_1, q_2, q_3, \\dots\\}$. Let $(f_n)$ be any sequence in $\\mathcal{F}$.",
        "m": "$$E = \\{q_k\\}_{k=1}^\\infty \\subseteq K \\quad \\text{with } \\overline{E} = K$$",
        "meaning": "What this really means: Compactness lets us pin down the entire continuous space using a countable skeleton of points."
      },
      {
        "why": "Since $\\mathcal{F}$ is pointwise bounded, $(f_n(q_1))$ is a bounded sequence in $\\mathbb{R}$, so it has a convergent subsequence $(f_{1, n})$. Inductively extract $(f_{k, n})$ convergent at $q_k$.",
        "m": "$$\\lim_{n\\to\\infty} f_{k, n}(q_j) \\text{ exists for all } 1 \\le j \\le k$$",
        "meaning": "What this really means: We filter the functions step-by-step so they settle down at each skeleton point one by one."
      },
      {
        "why": "Form the diagonal sequence $g_n = f_{n, n}$. Then $g_n(q_k)$ converges for every single $q_k \\in E$.",
        "m": "$$g_n(q_k) \\to L(q_k) \\quad \\text{for all } k \\in \\mathbb{N}$$",
        "meaning": "What this really means: Cantor's diagonal trick creates a single magic sequence that converges at every skeleton point simultaneously."
      },
      {
        "why": "Given $\\varepsilon > 0$, choose $\\delta > 0$ from equicontinuity. Cover compact $K$ with finitely many balls $B(q_1, \\delta), \\dots, B(q_m, \\delta)$.",
        "m": "$$K \\subseteq \\bigcup_{j=1}^m B(q_j, \\delta) \\quad \\text{and} \\quad d(x, y) < \\delta \\implies |g_n(x) - g_n(y)| < \\frac{\\varepsilon}{3}$$",
        "meaning": "What this really means: Equicontinuity guarantees that if two points are close, the function values cannot drift apart."
      },
      {
        "why": "For large $n, p$, bound $|g_n(x) - g_p(x)| \\le |g_n(x) - g_n(q_j)| + |g_n(q_j) - g_p(q_j)| + |g_p(q_j) - g_p(x)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$. Thus $(g_n)$ is uniformly Cauchy, hence uniformly convergent in $C(K)$.",
        "m": "$$\\sup_{x \\in K} |g_n(x) - g_p(x)| < \\varepsilon \\implies (g_n) \\text{ converges uniformly on } K$$",
        "meaning": "What this really means: Closeness on the finite skeleton forces closeness across the entire space, proving uniform convergence."
      }
    ],
    "ends": "The Arzel\u00e0\u2013Ascoli theorem is established: boundedness plus equicontinuity is necessary and sufficient for compactness in C(K)."
  },
  "cards": [
    {
      "q": "State the Arzel\u00e0\u2013Ascoli Theorem.",
      "a": "A family $\\mathcal{F} \\subseteq C(K)$ on a compact metric space $K$ is relatively compact iff it is pointwise bounded and equicontinuous.",
      "kind": "state"
    },
    {
      "q": "What proof technique is used in Arzel\u00e0\u2013Ascoli to obtain convergence on the dense subset?",
      "a": "Cantor's diagonal argument on a countable dense subset.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 7, Trench Ch. 9"
},
{
  "id": "c.e5.1",
  "sec": "E5",
  "kind": "definition",
  "tier": "core",
  "title": "Total Differentiability and the Jacobian Matrix",
  "oneLine": "Multivariable differentiability means best local linear approximation; the matrix of partial derivatives is the Jacobian.",
  "statement": "Let $U \\subseteq \\mathbb{R}^n$ be open, $f: U \\to \\mathbb{R}^m$, and $x_0 \\in U$.\n      <p>(a) $f$ is <b>differentiable at $x_0$</b> if there exists a linear map $L \\in \\mathcal{L}(\\mathbb{R}^n, \\mathbb{R}^m)$ such that:\n      $$\\lim_{h \\to 0} \\frac{\\|f(x_0 + h) - f(x_0) - L(h)\\|}{\\|h\\|} = 0$$\n      The linear map $L$ is unique, called the <b>total derivative</b> (or differential) $Df(x_0)$.</p>\n      <p>(b) <b>Jacobian Matrix:</b> With respect to standard bases, $Df(x_0)$ is represented by the $m \\times n$ matrix of partial derivatives:\n      $$J_f(x_0) = \\begin{bmatrix} \\frac{\\partial f_1}{\\partial x_1} & \\cdots & \\frac{\\partial f_1}{\\partial x_n} \\\\ \\vdots & \\ddots & \\vdots \\\\ \\frac{\\partial f_m}{\\partial x_1} & \\cdots & \\frac{\\partial f_m}{\\partial x_n} \\end{bmatrix}$$</p>\n      <p>(c) <b>$C^1$ Implies Differentiable:</b> If all partial derivatives $\\frac{\\partial f_i}{\\partial x_j}$ exist and are continuous on $U$, then $f$ is continuously differentiable ($C^1$).</p>",
  "intuition": "<p>In single variable calculus, the derivative $f'(x)$ gives the slope of the tangent line. In several variables, the derivative $Df(x_0)$ is not a number\u2014it is a linear transformation (represented by the Jacobian matrix) that maps small displacement vectors $h$ to output shifts $L(h)$.</p>\n      <p>Zooming into the curved graph of $f$ around $x_0$ makes it look completely flat, exactly like the linear map $L$!</p>",
  "needs": [
    "c.6.1.2"
  ],
  "traps": [
    "The existence of all partial derivatives does NOT imply differentiability! The partials can exist while the function is not even continuous at the point.",
    "Continuity of the partial derivatives ($C^1$) IS sufficient for differentiability."
  ],
  "cards": [
    {
      "q": "Define the total derivative of a map $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ at $x_0$.",
      "a": "A linear map $L$ such that $\\lim_{h \\to 0} \\frac{\\|f(x_0+h) - f(x_0) - L(h)\\|}{\\|h\\|} = 0$.",
      "kind": "state"
    },
    {
      "q": "Does the existence of all directional derivatives imply total differentiability?",
      "a": "No. All directional derivatives can exist even when $f$ fails to be differentiable (or even continuous).",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 9, Trench Ch. 5"
},
{
  "id": "c.e5.2",
  "sec": "E5",
  "kind": "theorem",
  "tier": "core",
  "title": "The Inverse Function Theorem",
  "oneLine": "Non-zero Jacobian determinant ensures a local, continuously differentiable inverse with inverse Jacobian.",
  "statement": "Let $U \\subseteq \\mathbb{R}^n$ be open, and let $f: U \\to \\mathbb{R}^n$ be of class $C^1$. Let $a \\in U$.\n      <p>If the derivative $Df(a)$ is invertible (equivalently, the <b>Jacobian determinant</b> $\\det J_f(a) \\ne 0$), then:</p>\n      <p>(1) There exists an open neighborhood $V$ of $a$ and an open neighborhood $W$ of $f(a)$ such that $f: V \\to W$ is a <b>bijection</b>.</p>\n      <p>(2) The inverse function $g = f^{-1}: W \\to V$ is also of class $C^1$.</p>\n      <p>(3) For all $y \\in W$ with $y = f(x)$, the derivative of the inverse is the inverse of the derivative:\n      $$Dg(y) = [Df(x)]^{-1} \\quad \\Longleftrightarrow \\quad J_{f^{-1}}(y) = [J_f(x)]^{-1}$$</p>",
  "intuition": "<p>Think of single-variable calculus: if $f'(a) \\ne 0$, the function doesn't turn around locally, so it passes the horizontal line test and has a local inverse with $(f^{-1})'(f(a)) = 1/f'(a)$.</p>\n      <p>The Inverse Function Theorem is the multidimensional generalisation: $\\det J_f(a) \\ne 0$ means the local linear map doesn't crush any dimensions, so you can invert both the linear map and the non-linear function locally!</p>",
  "needs": [
    "c.e5.1",
    "c.e2.2"
  ],
  "traps": [
    "The theorem guarantees a LOCAL inverse only! A non-zero Jacobian everywhere does NOT guarantee a global inverse. Example: $f(x, y) = (e^x \\cos y, e^x \\sin y)$ has $\\det J_f = e^{2x} > 0$ everywhere, but is not globally injective because it is periodic in $y$!",
    "The dimensions of domain and codomain must match ($n = m$)."
  ],
  "proof": {
    "idea": "Set up a perturbation equation y = f(x) and solve for x using the Banach Contraction Mapping Principle.",
    "why": "Define T_y(x) = x + [Df(a)]^{-1}(y - f(x)). The derivative of T_y is I - [Df(a)]^{-1} Df(x), which is small near a, making T_y a contraction on a small closed ball.",
    "rungs": [
      {
        "why": "Without loss of generality assume $a = 0, f(0) = 0$, and $Df(0) = I$. Define $T_y(x) = x + y - f(x)$ for fixed $y$.",
        "m": "$$T_y(x) = x \\iff f(x) = y$$",
        "meaning": "What this really means: Inverting $f(x) = y$ is transformed into finding a fixed point of an iteration map $T_y$."
      },
      {
        "why": "Compute the derivative $DT_y(x) = I - Df(x)$. Since $Df(0) = I$ and $Df$ is continuous, choose $r > 0$ such that $\\|I - Df(x)\\| \\le 1/2$ for all $\\|x\\| \\le r$.",
        "m": "$$\\|x\\| \\le r \\implies \\|DT_y(x)\\| \\le \\frac{1}{2}$$",
        "meaning": "What this really means: Close to the origin, the slope of the error map is strictly bounded below 1."
      },
      {
        "why": "By the Mean Value Inequality, $\\|T_y(x_1) - T_y(x_2)\\| \\le \\frac{1}{2} \\|x_1 - x_2\\|$, so $T_y$ is a contraction with $k = 1/2$.",
        "m": "$$\\|T_y(x_1) - T_y(x_2)\\| \\le \\frac{1}{2}\\|x_1 - x_2\\|$$",
        "meaning": "What this really means: The map is a guaranteed geometric shrinker."
      },
      {
        "why": "For $\\|y\\| \\le r/4$, $T_y$ maps the closed ball $\\overline{B}(0, r)$ into itself. By Banach's theorem, there exists a unique fixed point $x \\in \\overline{B}(0, r)$ with $f(x) = y$.",
        "m": "$$\\exists ! x \\in \\overline{B}(0, r) : f(x) = y$$",
        "meaning": "What this really means: Banach's contraction principle immediately yields a unique solution $x = f^{-1}(y)$."
      },
      {
        "why": "Differentiating $g(f(x)) = x$ via the multivariable Chain Rule yields $Dg(f(x)) \\cdot Df(x) = I$, giving $Dg(y) = [Df(x)]^{-1}$.",
        "m": "$$Dg(f(x)) \\cdot Df(x) = I \\implies Dg(y) = [Df(x)]^{-1}$$",
        "meaning": "What this really means: Differentiating the round-trip identity shows the inverse map's slope is the matrix inverse of the original slope."
      }
    ],
    "ends": "The Inverse Function Theorem is proved: invertible Jacobian implies a local C^1 inverse."
  },
  "cards": [
    {
      "q": "State the condition on the Jacobian matrix that guarantees a local C^1 inverse in the Inverse Function Theorem.",
      "a": "The Jacobian determinant must be non-zero at the point: $\\det J_f(a) \\ne 0$ (i.e. $Df(a)$ is invertible).",
      "kind": "state"
    },
    {
      "q": "Why does $\\det J_f(x) \\ne 0$ everywhere NOT imply that $f$ is globally injective?",
      "a": "Because it only guarantees local invertibility; e.g. $f(x, y) = (e^x \\cos y, e^x \\sin y)$ is periodic in $y$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 9, Trench Ch. 5"
},
{
  "id": "c.e5.3",
  "sec": "E5",
  "kind": "theorem",
  "tier": "core",
  "title": "The Implicit Function Theorem",
  "oneLine": "If F(x, y) = 0 and partial Jacobian D_y F is invertible, y can be written uniquely as a C^1 function y = g(x).",
  "statement": "Let $U \\subseteq \\mathbb{R}^n$ and $V \\subseteq \\mathbb{R}^m$ be open sets, and let $F: U \\times V \\to \\mathbb{R}^m$ be of class $C^1$. Let $(x_0, y_0) \\in U \\times V$ satisfy $F(x_0, y_0) = 0$.\n      <p>If the $m \\times m$ partial Jacobian matrix $D_y F(x_0, y_0) = \\left[\\frac{\\partial F_i}{\\partial y_j}(x_0, y_0)\\right]$ is <b>invertible</b> ($\\det D_y F(x_0, y_0) \\ne 0$), then:</p>\n      <p>(1) There exist open neighborhoods $U_0 \\subseteq U$ of $x_0$ and $V_0 \\subseteq V$ of $y_0$, and a <b>unique</b> $C^1$ function $g: U_0 \\to V_0$ such that:\n      $$g(x_0) = y_0 \\quad \\text{and} \\quad F(x, g(x)) = 0 \\quad \\text{for all } x \\in U_0$$</p>\n      <p>(2) The derivative of the implicit solution $g$ is given by:\n      $$Dg(x) = -[D_y F(x, g(x))]^{-1} \\cdot D_x F(x, g(x))$$</p>",
  "intuition": "<p>Equations like $x^2 + y^2 - 1 = 0$ define circles where you can't easily isolate $y$ globally. But locally around $(0, 1)$, $y = \\sqrt{1 - x^2}$ is a clean, single-valued function!</p>\n      <p>The Implicit Function Theorem guarantees when an algebraic constraint $F(x, y) = 0$ can be unpacked into an explicit function $y = g(x)$. All you need is that the partial derivative along $y$ is non-zero so the curve doesn't have a vertical tangent!</p>",
  "needs": [
    "c.e5.2"
  ],
  "traps": [
    "The matrix that must be invertible is $D_y F$ (the variables you want to solve for), NOT $D_x F$.",
    "If $\\det D_y F = 0$, there may be a bifurcation, self-intersection, or vertical tangent where $y$ cannot be expressed as a single-valued function of $x$."
  ],
  "proof": {
    "idea": "Construct the augmented mapping Phi(x, y) = (x, F(x, y)) from R^{n+m} to R^{n+m} and apply the Inverse Function Theorem.",
    "why": "The Jacobian of Phi has block form [I, 0; D_x F, D_y F]. Its determinant is det(D_y F) != 0, so Phi has a local C^1 inverse.",
    "rungs": [
      {
        "why": "Define $\\Phi: U \\times V \\to \\mathbb{R}^n \\times \\mathbb{R}^m$ by $\\Phi(x, y) = (x, F(x, y))$. Note $\\Phi(x_0, y_0) = (x_0, 0)$.",
        "m": "$$\\Phi(x, y) = (x, F(x, y))$$",
        "meaning": "What this really means: We pair the input $x$ with the constraint output $F(x, y)$ to create an equal-dimension map."
      },
      {
        "why": "The Jacobian matrix of $\\Phi$ at $(x_0, y_0)$ is the block matrix $\\begin{bmatrix} I_n & 0 \\\\ D_x F & D_y F \\end{bmatrix}$.",
        "m": "$$J_\\Phi(x_0, y_0) = \\begin{bmatrix} I_n & 0 \\\\ D_x F(x_0, y_0) & D_y F(x_0, y_0) \\end{bmatrix}$$",
        "meaning": "What this really means: The derivative has a clean block-triangular structure."
      },
      {
        "why": "The determinant is $\\det J_\\Phi = \\det(I_n) \\cdot \\det(D_y F) = \\det(D_y F) \\ne 0$.",
        "m": "$$\\det J_\\Phi(x_0, y_0) = \\det D_y F(x_0, y_0) \\ne 0$$",
        "meaning": "What this really means: Invertibility of the $y$-block guarantees the whole augmented map has non-zero determinant."
      },
      {
        "why": "By the Inverse Function Theorem, $\\Phi$ has a local $C^1$ inverse $\\Phi^{-1}(u, v) = (u, H(u, v))$. Define $g(x) = H(x, 0)$.",
        "m": "$$\\Phi(x, g(x)) = (x, F(x, g(x))) = (x, 0) \\implies F(x, g(x)) = 0$$",
        "meaning": "What this really means: Running the inverse map with constraint value set to zero directly computes the function $y = g(x)$."
      },
      {
        "why": "Differentiating $F(x, g(x)) = 0$ via the multivariable chain rule gives $D_x F + D_y F \\cdot Dg = 0$, yielding the derivative formula.",
        "m": "$$D_x F(x, g(x)) + D_y F(x, g(x)) \\cdot Dg(x) = 0 \\implies Dg(x) = -[D_y F]^{-1} D_x F$$",
        "meaning": "What this really means: Differentiating the constant zero identity gives the exact matrix formula for the implicit slope."
      }
    ],
    "ends": "The Implicit Function Theorem is proved via the Inverse Function Theorem."
  },
  "cards": [
    {
      "q": "State the formula for the derivative of the implicit function $g(x)$ defined by $F(x, g(x)) = 0$.",
      "a": "$Dg(x) = -[D_y F(x, g(x))]^{-1} \\cdot D_x F(x, g(x))$.",
      "kind": "state"
    },
    {
      "q": "How is the Implicit Function Theorem proved from the Inverse Function Theorem?",
      "a": "By applying the Inverse Function Theorem to the augmented map $\\Phi(x, y) = (x, F(x, y))$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 9, Trench Ch. 5"
},
{
  "id": "c.e6.1",
  "sec": "E6",
  "kind": "definition",
  "tier": "core",
  "title": "Lebesgue Outer Measure on \u211d",
  "oneLine": "Outer measure infimizes the total length of countable open interval covers of any set.",
  "statement": "Let $E \\subseteq \\mathbb{R}$. The <b>Lebesgue outer measure</b> of $E$ is defined by:\n      $$m^*(E) = \\inf \\left\\{ \\sum_{k=1}^\\infty \\ell(I_k) : E \\subseteq \\bigcup_{k=1}^\\infty I_k, \\; I_k \\text{ open bounded intervals} \\right\\}$$\n      where $\\ell(I) = b - a$ for $I = (a, b)$.\n      <p>Key properties of $m^*$:</p>\n      <p>(1) <b>Empty Set:</b> $m^*(\\emptyset) = 0$.</p>\n      <p>(2) <b>Monotonicity:</b> If $A \\subseteq B$, then $m^*(A) \\le m^*(B)$.</p>\n      <p>(3) <b>Countable Subadditivity:</b> For any sequence of sets $(E_n)$,\n      $$m^*\\left(\\bigcup_{n=1}^\\infty E_n\\right) \\le \\sum_{n=1}^\\infty m^*(E_n)$$</p>\n      <p>(4) <b>Interval Length:</b> For any interval $I$ with endpoints $a \\le b$, $m^*(I) = b - a$.</p>\n      <p>(5) <b>Countable Sets:</b> Every countable set has outer measure zero: $m^*(\\mathbb{Q}) = 0$.</p>",
  "intuition": "<p>Length is easy for an interval: $(b - a)$. But how do you measure crazy sets like fractals or the rational numbers?</p>\n      <p>Lebesgue's genius was to cover the set with a cloud of countably many open intervals, add up their lengths, and take the best possible minimum (infimum). For $\\mathbb{Q}$, we can wrap the $n$-th rational in a tiny interval of width $\\varepsilon/2^n$; the total length is $\\varepsilon$, which shrinks to $0$!</p>",
  "needs": [
    "c.2.3.1",
    "c.1.3.2"
  ],
  "traps": [
    "Outer measure is NOT countably additive on all subsets of $\\mathbb{R}$! That is why we must restrict to 'measurable sets'.",
    "Outer measure of the Cantor ternary set is 0, even though it is uncountable!"
  ],
  "cards": [
    {
      "q": "Define the Lebesgue outer measure $m^*(E)$ of a subset $E \\subseteq \\mathbb{R}$.",
      "a": "$m^*(E) = \\inf \\{ \\sum_{k=1}^\\infty \\ell(I_k) : E \\subseteq \\bigcup_{k=1}^\\infty I_k \\}$, where $I_k$ are open intervals.",
      "kind": "state"
    },
    {
      "q": "What is the outer measure of any countable set in $\\mathbb{R}$?",
      "a": "Zero ($m^*(E) = 0$).",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 2, de Barra Ch. 2"
},
{
  "id": "c.e6.2",
  "sec": "E6",
  "kind": "definition",
  "tier": "core",
  "title": "Lebesgue Measurable Sets and Carath\u00e9odory's Criterion",
  "oneLine": "A set is measurable if it splits every test set additively into inside and outside pieces.",
  "statement": "A subset $E \\subseteq \\mathbb{R}$ is said to be <b>Lebesgue measurable</b> if for <b>every</b> test set $A \\subseteq \\mathbb{R}$,\n      $$m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c)$$\n      <p>When $E$ is measurable, its <b>Lebesgue measure</b> is denoted $m(E) = m^*(E)$.</p>\n      <p><b>Fundamental Facts:</b></p>\n      <p>(1) <b>Null Sets:</b> If $m^*(E) = 0$, then $E$ is automatically measurable, and $m(E) = 0$.</p>\n      <p>(2) <b>Complements:</b> If $E$ is measurable, then its complement $E^c$ is measurable.</p>\n      <p>(3) <b>Intervals:</b> Every open interval $(a, b)$, closed interval $[a, b]$, and ray is measurable, with $m((a, b)) = b - a$.</p>",
  "intuition": "<p>Why Carath\u00e9odory's definition? If you cut a loaf of bread $A$ with a knife $E$, the pieces inside $A \\cap E$ and outside $A \\cap E^c$ should together weigh the same as the original loaf.</p>\n      <p>A set is measurable if it acts like a clean knife: it never tears, shears, or fuzzes up any test set $A$.</p>",
  "needs": [
    "c.e6.1"
  ],
  "traps": [
    "To show $E$ is measurable, one always has $m^*(A) \\le m^*(A \\cap E) + m^*(A \\cap E^c)$ for free by subadditivity. You only ever need to prove the reverse inequality: $m^*(A) \\ge m^*(A \\cap E) + m^*(A \\cap E^c)$.",
    "Assuming only bounded sets can be tested; the criterion must hold for ALL test sets $A$."
  ],
  "cards": [
    {
      "q": "State Carath\u00e9odory's criterion for a set $E \\subseteq \\mathbb{R}$ to be Lebesgue measurable.",
      "a": "For every test set $A \\subseteq \\mathbb{R}$, $m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c)$.",
      "kind": "state"
    },
    {
      "q": "Why is any set of outer measure zero automatically measurable?",
      "a": "Because $m^*(A \\cap E) \\le m^*(E) = 0$, so $m^*(A) \\le m^*(A \\cap E) + m^*(A \\cap E^c) = m^*(A \\cap E^c) \\le m^*(A)$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 2, de Barra Ch. 2"
},
{
  "id": "c.e6.3",
  "sec": "E6",
  "kind": "theorem",
  "tier": "core",
  "title": "The \u03c3-Algebra of Measurable Sets and Countable Additivity",
  "oneLine": "Measurable sets form a complete \u03c3-algebra containing all Borel sets, with exact countable additivity.",
  "statement": "The collection $\\mathcal{M}$ of all Lebesgue measurable subsets of $\\mathbb{R}$ satisfies:\n      <p>(1) <b>$\\sigma$-Algebra:</b> $\\mathcal{M}$ is a $\\sigma$-algebra: it contains $\\emptyset$ and $\\mathbb{R}$, is closed under complements, and is closed under <b>countable unions</b> and <b>countable intersections</b>.</p>\n      <p>(2) <b>Borel Hierarchy:</b> $\\mathcal{M}$ contains all <b>Borel sets</b> $\\mathcal{B}(\\mathbb{R})$ (open sets, closed sets, $G_\\delta$ sets, $F_\\sigma$ sets).</p>\n      <p>(3) <b>Countable Additivity:</b> If $\\{E_n\\}_{n=1}^\\infty$ is a sequence of pairwise disjoint measurable sets, then:\n      $$m\\left(\\bigcup_{n=1}^\\infty E_n\\right) = \\sum_{n=1}^\\infty m(E_n)$$</p>\n      <p>(4) <b>Continuity of Measure:</b> If $E_1 \\subseteq E_2 \\subseteq \\cdots$, then $m(\\bigcup E_n) = \\lim m(E_n)$. If $F_1 \\supseteq F_2 \\supseteq \\cdots$ with $m(F_1) < \\infty$, then $m(\\bigcap F_n) = \\lim m(F_n)$.</p>",
  "intuition": "<p>This is the holy grail of measure theory: you can take countable unions, intersections, complements, and limits of measurable sets, and the total measure adds up with zero leak!</p>\n      <p>Every ordinary set you encounter in calculus, analysis, and probability\u2014intervals, open sets, closed sets, Cantor sets\u2014is measurable.</p>",
  "needs": [
    "c.e6.2"
  ],
  "traps": [
    "Countable additivity requires the sets to be PAIRWISE DISJOINT ($E_i \\cap E_j = \\emptyset$).",
    "Continuity for decreasing sequences requires $m(F_1) < \\infty$! For example, $F_n = (n, \\infty)$ has $m(F_n) = \\infty$ for all $n$, but $\\bigcap F_n = \\emptyset$ (measure 0, not $\\infty$)."
  ],
  "proof": {
    "idea": "Prove finite additivity by induction with Caratheodory's criterion, then take limits to establish countable additivity.",
    "why": "Using disjoint E_1, E_2 with test set A = E_1 \\cup E_2 gives m*(E_1 \\cup E_2) = m*(E_1) + m*(E_2). Subadditivity and monotonicity complete the countable case.",
    "rungs": [
      {
        "why": "Let $E_1, E_2 \\in \\mathcal{M}$ be disjoint. Apply Carath\u00e9odory's criterion to $A = E_1 \\cup E_2$ using $E_1$.",
        "m": "$$m(E_1 \\cup E_2) = m((E_1 \\cup E_2) \\cap E_1) + m((E_1 \\cup E_2) \\cap E_1^c) = m(E_1) + m(E_2)$$",
        "meaning": "What this really means: The Carath\u00e9odory split cleanly separates the union into the sum of the two individual lengths."
      },
      {
        "why": "By induction, finite additivity holds for any finite disjoint union: $m(\\bigcup_{k=1}^n E_k) = \\sum_{k=1}^n m(E_k)$.",
        "m": "$$m\\left(\\bigcup_{k=1}^n E_k\\right) = \\sum_{k=1}^n m(E_k)$$",
        "meaning": "What this really means: Any finite number of disjoint pieces add up without overlap."
      },
      {
        "why": "For a countable disjoint union $E = \\bigcup_{n=1}^\\infty E_n$, monotonicity gives $\\sum_{k=1}^n m(E_k) = m(\\bigcup_{k=1}^n E_k) \\le m(E)$ for all $n$.",
        "m": "$$\\sum_{k=1}^\\infty m(E_k) = \\lim_{n\\to\\infty} \\sum_{k=1}^n m(E_k) \\le m(E)$$",
        "meaning": "What this really means: The sum of the individual pieces cannot exceed the measure of the whole."
      },
      {
        "why": "By countable subadditivity of outer measure, the reverse inequality $m(E) \\le \\sum_{k=1}^\\infty m(E_k)$ always holds.",
        "m": "$$m(E) \\le \\sum_{k=1}^\\infty m(E_k)$$",
        "meaning": "What this really means: Outer measure never allows the whole to exceed the sum of its parts."
      },
      {
        "why": "Sandwiching the two inequalities forces exact equality: $m(\\bigcup_{n=1}^\\infty E_n) = \\sum_{n=1}^\\infty m(E_n)$.",
        "m": "$$m\\left(\\bigcup_{n=1}^\\infty E_n\\right) = \\sum_{n=1}^\\infty m(E_n)$$",
        "meaning": "What this really means: The two bounds meet, establishing perfect countable additivity."
      }
    ],
    "ends": "Countable additivity of Lebesgue measure on the \u03c3-algebra of measurable sets is proved."
  },
  "cards": [
    {
      "q": "State the Countable Additivity property of Lebesgue measure.",
      "a": "If $\\{E_n\\}$ is a pairwise disjoint sequence of measurable sets, then $m(\\bigcup_{n=1}^\\infty E_n) = \\sum_{n=1}^\\infty m(E_n)$.",
      "kind": "state"
    },
    {
      "q": "Does the collection of Lebesgue measurable sets contain all open and closed sets?",
      "a": "Yes, it contains all Borel sets (and hence all open and closed sets).",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 2, Rudin Ch. 11"
},
{
  "id": "c.e6.4",
  "sec": "E6",
  "kind": "theorem",
  "tier": "core",
  "title": "Non-Measurable Sets and the Vitali Construction",
  "oneLine": "Assuming the Axiom of Choice, not all subsets of \u211d can be assigned a translation-invariant measure.",
  "statement": "Assume the <b>Axiom of Choice</b>. Then there exists a subset $V \\subset [0, 1)$ that is <b>NOT Lebesgue measurable</b>.\n      <p><b>Construction (Vitali):</b></p>\n      <p>(1) Define an equivalence relation on $[0, 1)$: $x \\sim y \\iff x - y \\in \\mathbb{Q}$.</p>\n      <p>(2) By the Axiom of Choice, select exactly one representative from each equivalence class to form the set $V \\subset [0, 1)$.</p>\n      <p>(3) Enumerate the rationals in $(-1, 1)$ as $\\{r_k\\}_{k=1}^\\infty$. The rational translates $V_k = V + r_k$ are <b>mutually disjoint</b>, and:\n      $$[0, 1) \\subseteq \\bigcup_{k=1}^\\infty (V + r_k) \\subseteq [-1, 2)$$</p>\n      <p>(4) If $V$ were measurable, translation invariance would imply $m(V_k) = m(V)$. Summing measures gives $1 \\le \\sum m(V) \\le 3$, which is impossible whether $m(V) = 0$ ($0 \\ge 1$) or $m(V) > 0$ ($\\infty \\le 3$)!</p>",
  "intuition": "<p>Can we just measure *every* subset of $\\mathbb{R}$? Vitali showed the answer is NO!</p>\n      <p>If you demand that (1) every set has a size, (2) shifting a set doesn't change its size (translation invariance), and (3) disjoint pieces add up, you get a direct contradiction! The Axiom of Choice creates a set so scattered and pathological that it cannot have any sensible length.</p>",
  "needs": [
    "c.e6.3"
  ],
  "traps": [
    "The Vitali construction REQUIRES the Axiom of Choice (AC). Without AC, Solovay showed it is consistent with ZF set theory that all subsets of $\\mathbb{R}$ are measurable!",
    "Vitali's set is bounded ($V \\subset [0, 1)$), showing that non-measurability is not caused by infinity."
  ],
  "cards": [
    {
      "q": "What axiom is required to construct a non-measurable set?",
      "a": "The Axiom of Choice.",
      "kind": "state"
    },
    {
      "q": "Why cannot the Vitali set $V$ have measure 0 or measure $> 0$?",
      "a": "If $m(V)=0$, the countable union covering $[0, 1)$ has measure 0 (contradicting $\\ge 1$). If $m(V)>0$, the infinite sum of identical values exceeds 3 (contradicting $\\le 3$).",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 2, Rudin Ch. 11"
},
{
  "id": "c.e6.5",
  "sec": "E6",
  "kind": "definition",
  "tier": "core",
  "title": "Measurable Functions and Simple Functions",
  "oneLine": "A function is measurable if pre-images of rays are measurable; simple functions are finite linear combinations of indicator functions.",
  "statement": "Let $E \\subseteq \\mathbb{R}$ be a measurable set.\n      <p>(a) A function $f: E \\to [-\\infty, \\infty]$ is <b>Lebesgue measurable</b> if for every $\\alpha \\in \\mathbb{R}$, the set:\n      $$\\{x \\in E : f(x) > \\alpha\\} \\in \\mathcal{M}$$\n      (Equivalently, $\\{f \\ge \\alpha\\}$, $\\{f < \\alpha\\}$, or $\\{f \\le \\alpha\\}$ is measurable for all $\\alpha$.)</p>\n      <p>(b) Every continuous function is measurable. Pointwise limits, infima, and suprema of measurable functions are measurable: $\\limsup f_n$ and $\\liminf f_n$ are measurable.</p>\n      <p>(c) A <b>simple function</b> is a finite linear combination of indicator functions of measurable sets:\n      $$\\phi(x) = \\sum_{i=1}^n c_i \\mathbf{1}_{A_i}(x), \\quad A_i \\in \\mathcal{M}$$</p>\n      <p>(d) <b>Simple Approximation Theorem:</b> If $f \\ge 0$ is measurable, there exists a sequence of simple functions $(\\phi_n)$ such that:\n      $$0 \\le \\phi_1 \\le \\phi_2 \\le \\cdots \\le f \\quad \\text{and} \\quad \\lim_{n\\to\\infty} \\phi_n(x) = f(x) \\quad \\forall x \\in E$$</p>",
  "intuition": "<p>In Riemann integration, we approximate functions using step functions based on chopping the *domain* (the $x$-axis). If the function is wild like Dirichlet's function, domain partitions fail miserably.</p>\n      <p>Lebesgue chopped the *range* (the $y$-axis)! By slicing the output into horizontal bands $(\\alpha, \\beta)$, the set of inputs $x$ where $f(x)$ falls in that band is a measurable set $A$. A simple function is just horizontal slices stacked like Lego bricks!</p>",
  "needs": [
    "c.e6.3"
  ],
  "traps": [
    "In Riemann integration, the pointwise limit of integrable functions is rarely Riemann integrable. But in Lebesgue theory, the pointwise limit of measurable functions is ALWAYS measurable!",
    "A simple function takes on only FINITELY many values."
  ],
  "cards": [
    {
      "q": "Define a Lebesgue measurable function.",
      "a": "A function $f: E \\to \\mathbb{R}$ where $\\{x \\in E : f(x) > \\alpha\\}$ is a measurable set for every $\\alpha \\in \\mathbb{R}$.",
      "kind": "state"
    },
    {
      "q": "State the Simple Approximation Theorem for non-negative measurable functions.",
      "a": "Every $f \\ge 0$ is the pointwise limit of an increasing sequence of non-negative simple functions: $0 \\le \\phi_1 \\le \\phi_2 \\le \\cdots \\le f$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 3, Rudin Ch. 11"
},
{
  "id": "c.e7.1",
  "sec": "E7",
  "kind": "definition",
  "tier": "core",
  "title": "The Lebesgue Integral of Non-Negative Functions",
  "oneLine": "The Lebesgue integral sums horizontal measure slices; zero integral implies zero almost everywhere.",
  "statement": "Let $E \\subseteq \\mathbb{R}$ be measurable.\n      <p>(a) For a non-negative <b>simple function</b> $\\phi = \\sum_{i=1}^n c_i \\mathbf{1}_{A_i}$ ($c_i \\ge 0$, $A_i$ disjoint), its integral is:\n      $$\\int_E \\phi \\, dm = \\sum_{i=1}^n c_i \\, m(A_i \\cap E)$$</p>\n      <p>(b) For any non-negative measurable function $f: E \\to [0, \\infty]$, its <b>Lebesgue integral</b> is:\n      $$\\int_E f \\, dm = \\sup \\left\\{ \\int_E \\phi \\, dm : 0 \\le \\phi \\le f, \\; \\phi \\text{ simple} \\right\\}$$</p>\n      <p>(c) A general measurable function $f$ is <b>Lebesgue integrable</b> if $\\int_E |f| \\, dm < \\infty$. In that case, writing $f = f^+ - f^-$ where $f^+ = \\max(f, 0)$ and $f^- = \\max(-f, 0)$:\n      $$\\int_E f \\, dm = \\int_E f^+ \\, dm - \\int_E f^- \\, dm$$</p>\n      <p>(d) <b>Almost Everywhere (a.e.):</b> If $f \\ge 0$ and $\\int_E f \\, dm = 0$, then $f(x) = 0$ <b>almost everywhere</b> on $E$ (i.e., $m(\\{x : f(x) \\ne 0\\}) = 0$).</p>",
  "intuition": "<p>Riemann integration asks: 'what are the vertical column slices along the $x$-axis?'</p>\n      <p>Lebesgue integration asks: 'what is the total value of each coin in your purse?' Instead of adding coin by coin in the order you pull them out, you group all the 1-rupee coins, all the 2-rupee coins, and multiply each coin value by how many you have! That is why Dirichlet's function integrates trivially to 0 under Lebesgue: 1 times $m(\\mathbb{Q}) = 1 \\times 0 = 0$!</p>",
  "needs": [
    "c.e6.5"
  ],
  "traps": [
    "In Lebesgue integration, a function is integrable IF AND ONLY IF it is ABSOLUTELY integrable: $\\int |f| < \\infty$. Conditionally convergent integrals like $\\int_0^\\infty \\frac{\\sin x}{x} dx$ exist as improper Riemann integrals, but are NOT Lebesgue integrable!",
    "Functions that agree almost everywhere have the exact same Lebesgue integral."
  ],
  "cards": [
    {
      "q": "Define the Lebesgue integral of a non-negative measurable function $f$.",
      "a": "$\\int_E f \\, dm = \\sup \\{ \\int_E \\phi \\, dm : 0 \\le \\phi \\le f, \\; \\phi \\text{ simple} \\}$.",
      "kind": "state"
    },
    {
      "q": "What does it mean if $\\int_E f \\, dm = 0$ for a non-negative function $f$?",
      "a": "It means $f = 0$ almost everywhere on $E$ ($m(\\{x \\in E : f(x) > 0\\}) = 0$).",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 4, Rudin Ch. 11"
},
{
  "id": "c.e7.2",
  "sec": "E7",
  "kind": "theorem",
  "tier": "core",
  "title": "Fatou's Lemma",
  "oneLine": "The integral of the limit inferior never exceeds the limit inferior of the integrals.",
  "statement": "Let $(f_n)$ be a sequence of <b>non-negative measurable functions</b> defined on a measurable set $E \\subseteq \\mathbb{R}$. Then:\n      $$\\int_E \\left(\\liminf_{n \\to \\infty} f_n\\right) dm \\le \\liminf_{n \\to \\infty} \\int_E f_n \\, dm$$\n      <p>Strict inequality can and does occur when mass or energy escapes to infinity or concentrates into a point.</p>\n      <p><b>Standard Counterexample for Strict Inequality:</b> Let $f_n(x) = n \\mathbf{1}_{(0, 1/n)}(x)$ on $(0, 1)$. Then for every $x > 0$, $f_n(x) = 0$ for large $n$, so $\\liminf f_n(x) = 0$, giving $\\int \\liminf f_n = 0$. But $\\int_{(0, 1)} f_n \\, dm = n \\cdot (1/n) = 1$ for all $n$, so $\\liminf \\int f_n = 1$. Here $0 < 1$!</p>",
  "intuition": "<p>Fatou's Lemma is the fundamental inequality of modern analysis: integrals cannot suddenly jump UP in the limit, but area can leak away or vanish into a spike.</p>\n      <p>It guarantees that the liminf of the areas is always at least as big as the area of the limit shape.</p>",
  "needs": [
    "c.e7.1"
  ],
  "traps": [
    "Fatou's Lemma requires the functions to be NON-NEGATIVE ($f_n \\ge 0$). If $f_n$ can take negative values, the inequality fails.",
    "Remember the direction of the inequality: integral of liminf $\\le$ liminf of integrals. (Mnemonic: 'Fatou is lesser or equal')."
  ],
  "proof": {
    "idea": "Define g_k = inf_{n >= k} f_n. Then g_k increases to liminf f_n, and apply the Monotone Convergence Theorem.",
    "why": "Since g_k <= f_n for all n >= k, integral of g_k <= inf_{n >= k} integral of f_n. Taking k -> infinity finishes the proof.",
    "rungs": [
      {
        "why": "For each $k \\in \\mathbb{N}$, define $g_k(x) = \\inf_{n \\ge k} f_n(x)$. Then $g_k$ is measurable, and $0 \\le g_1 \\le g_2 \\le \\cdots$.",
        "m": "$$g_k(x) = \\inf_{n \\ge k} f_n(x) \\implies g_k(x) \\le g_{k+1}(x) \\quad \\text{and} \\quad \\lim_{k\\to\\infty} g_k(x) = \\liminf_{n\\to\\infty} f_n(x)$$",
        "meaning": "What this really means: We construct an increasing floor function that climbs directly toward the limit inferior."
      },
      {
        "why": "For any $n \\ge k$, $g_k(x) \\le f_n(x)$. Monotonicity of the integral gives $\\int_E g_k \\, dm \\le \\int_E f_n \\, dm$.",
        "m": "$$\\int_E g_k \\, dm \\le \\int_E f_n \\, dm \\quad \\text{for all } n \\ge k$$",
        "meaning": "What this really means: The floor function is trapped below every subsequent term in the sequence."
      },
      {
        "why": "Take the infimum over $n \\ge k$ on the right side.",
        "m": "$$\\int_E g_k \\, dm \\le \\inf_{n \\ge k} \\int_E f_n \\, dm$$",
        "meaning": "What this really means: The floor's integral is bounded by the smallest future integral."
      },
      {
        "why": "Apply the Monotone Convergence Theorem to the increasing sequence $g_k \\nearrow \\liminf f_n$ as $k \\to \\infty$.",
        "m": "$$\\lim_{k\\to\\infty} \\int_E g_k \\, dm = \\int_E \\left(\\lim_{k\\to\\infty} g_k\\right) dm = \\int_E \\left(\\liminf_{n\\to\\infty} f_n\\right) dm$$",
        "meaning": "What this really means: Monotone convergence allows limit and integral to swap for the increasing floor functions."
      },
      {
        "why": "Combining the limits gives Fatou's inequality.",
        "m": "$$\\int_E \\left(\\liminf_{n\\to\\infty} f_n\\right) dm \\le \\lim_{k\\to\\infty} \\left( \\inf_{n \\ge k} \\int_E f_n \\, dm \\right) = \\liminf_{n\\to\\infty} \\int_E f_n \\, dm$$",
        "meaning": "What this really means: The limit inferior inequality is sealed."
      }
    ],
    "ends": "Fatou's Lemma is proved: integral of liminf <= liminf of integrals."
  },
  "cards": [
    {
      "q": "State Fatou's Lemma.",
      "a": "For any sequence of non-negative measurable functions $f_n \\ge 0$, $\\int_E \\liminf f_n \\, dm \\le \\liminf \\int_E f_n \\, dm$.",
      "kind": "state"
    },
    {
      "q": "Provide an example where Fatou's Lemma holds with strict inequality.",
      "a": "$f_n = n \\mathbf{1}_{(0, 1/n)}$ on $(0, 1)$: $\\int \\liminf f_n = 0 < 1 = \\liminf \\int f_n$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 4, Rudin Ch. 11"
},
{
  "id": "c.e7.3",
  "sec": "E7",
  "kind": "theorem",
  "tier": "core",
  "title": "The Monotone Convergence Theorem (MCT)",
  "oneLine": "For non-negative functions growing monotonically to f, the limit and integral can always be interchanged.",
  "statement": "Let $(f_n)$ be a sequence of measurable functions on $E \\subseteq \\mathbb{R}$ such that:\n      $$0 \\le f_1(x) \\le f_2(x) \\le f_3(x) \\le \\cdots \\quad \\text{for almost all } x \\in E$$\n      Let $f(x) = \\lim_{n \\to \\infty} f_n(x)$. Then $f$ is measurable, and:\n      $$\\lim_{n \\to \\infty} \\int_E f_n \\, dm = \\int_E f \\, dm$$\n      <p><b>Series Form:</b> If $u_k(x) \\ge 0$ are non-negative measurable functions, then:\n      $$\\int_E \\left(\\sum_{k=1}^\\infty u_k(x)\\right) dm = \\sum_{k=1}^\\infty \\int_E u_k(x) \\, dm$$\n      (Integration and infinite summation can ALWAYS be swapped for non-negative terms!).</p>",
  "intuition": "<p>In Riemann integration, swapping $\\lim$ and $\\int$ is notoriously dangerous and requires uniform convergence. But under Lebesgue integration, if functions merely grow upward monotonically, you can swap limit and integral WITHOUT ANY UNIFORM CONVERGENCE requirement!</p>\n      <p>If you build a tower by stacking positive floor slabs, the total volume is simply the sum of all slab volumes.</p>",
  "needs": [
    "c.e7.1"
  ],
  "traps": [
    "The sequence MUST be increasing ($f_n \\le f_{n+1}$). For decreasing sequences, $f_n(x) = \\frac{1}{n} \\mathbf{1}_{(0, n)}$ goes to 0 monotonically, but on $\\mathbb{R}$ each has integral 1, which works only if the first function has finite integral.",
    "The functions must be bounded below (usually $f_n \\ge 0$)."
  ],
  "proof": {
    "idea": "Use monotonicity to get lim int f_n <= int f, and test with simple functions (1 - epsilon)phi to get the reverse inequality.",
    "why": "For any simple phi <= f and 0 < c < 1, the sets E_n = {x : f_n(x) >= c phi(x)} increase to E, so lim int f_n >= c int phi. Taking c -> 1 and sup over phi gives the reverse inequality.",
    "rungs": [
      {
        "why": "Since $f_n \\le f_{n+1} \\le f$, monotonicity gives $\\int f_n \\le \\int f_{n+1} \\le \\int f$.",
        "m": "$$\\lim_{n\\to\\infty} \\int_E f_n \\, dm \\le \\int_E f \\, dm$$",
        "meaning": "What this really means: Each step in the sequence stays below the final target, so the sequence of integrals cannot overshoot."
      },
      {
        "why": "Let $\\phi$ be any simple function with $0 \\le \\phi \\le f$, and choose $c \\in (0, 1)$. Define $E_n = \\{x \\in E : f_n(x) \\ge c \\, \\phi(x)\\}$.",
        "m": "$$E_1 \\subseteq E_2 \\subseteq E_3 \\subseteq \\cdots \\quad \\text{and} \\quad \\bigcup_{n=1}^\\infty E_n = E$$",
        "meaning": "What this really means: We set a slightly relaxed target $c \\phi$, which the growing functions eventually conquer everywhere."
      },
      {
        "why": "For each $n$, $\\int_E f_n \\ge \\int_{E_n} f_n \\ge c \\int_{E_n} \\phi \\, dm$.",
        "m": "$$\\int_E f_n \\, dm \\ge c \\int_{E_n} \\phi \\, dm$$",
        "meaning": "What this really means: The $n$-th integral dominates the relaxed benchmark on the conquered territory."
      },
      {
        "why": "By continuity of measure on $E_n \\nearrow E$, $\\lim_{n\\to\\infty} \\int_{E_n} \\phi = \\int_E \\phi$.",
        "m": "$$\\lim_{n\\to\\infty} \\int_E f_n \\, dm \\ge c \\int_E \\phi \\, dm$$",
        "meaning": "What this really means: As the territory expands to the whole space, the benchmark reaches full strength."
      },
      {
        "why": "Let $c \\to 1^-$ and take the supremum over all simple $\\phi \\le f$ to get $\\lim \\int f_n \\ge \\int f$.",
        "m": "$$\\lim_{n\\to\\infty} \\int_E f_n \\, dm \\ge \\int_E f \\, dm \\implies \\lim_{n\\to\\infty} \\int_E f_n \\, dm = \\int_E f \\, dm$$",
        "meaning": "What this really means: Removing the relaxation discount forces both sides to match perfectly."
      }
    ],
    "ends": "The Monotone Convergence Theorem is established: increasing non-negative sequences admit limit-integral swap."
  },
  "cards": [
    {
      "q": "State the Monotone Convergence Theorem (MCT).",
      "a": "If $0 \\le f_1 \\le f_2 \\le \\cdots$ are measurable and $f_n \\to f$ pointwise, then $\\lim_{n\\to\\infty} \\int f_n \\, dm = \\int f \\, dm$.",
      "kind": "state"
    },
    {
      "q": "What is the series version of the Monotone Convergence Theorem?",
      "a": "For any non-negative measurable functions $u_k \\ge 0$, $\\int \\sum_{k=1}^\\infty u_k = \\sum_{k=1}^\\infty \\int u_k$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, Royden & Fitzpatrick Ch. 4, Rudin Ch. 11"
},
{
  "id": "c.e7.4",
  "sec": "E7",
  "kind": "theorem",
  "tier": "core",
  "title": "The Dominated Convergence Theorem (DCT)",
  "oneLine": "If measurable functions converge pointwise and are dominated by an integrable ceiling, limit and integral commute.",
  "statement": "Let $(f_n)$ be a sequence of measurable functions on $E \\subseteq \\mathbb{R}$ such that:\n      <p>(1) <b>Pointwise Convergence:</b> $f_n(x) \\to f(x)$ almost everywhere on $E$.</p>\n      <p>(2) <b>Domination:</b> There exists an integrable function $g \\in L^1(E)$ (with $\\int_E g \\, dm < \\infty$) such that:\n      $$|f_n(x)| \\le g(x) \\quad \\text{for all } n \\text{ and almost all } x \\in E$$</p>\n      Then $f$ is integrable on $E$ ($f \\in L^1(E)$), and:\n      $$\\lim_{n \\to \\infty} \\int_E f_n \\, dm = \\int_E f \\, dm$$\n      Moreover, $\\lim_{n \\to \\infty} \\int_E |f_n - f| \\, dm = 0$ ($L^1$-convergence).",
  "intuition": "<p>The Dominated Convergence Theorem is universally regarded as the crown jewel of Lebesgue integration.</p>\n      <p>Why did $f_n(x) = n \\mathbf{1}_{(0, 1/n)}$ fail to commute with $\\int$? Because the spike grew infinitely high! If you can find any single fixed integrable 'umbrella' $g(x)$ that covers all $f_n(x)$, no spike can escape, no area can vanish, and the limit and integral swap flawlessly!</p>",
  "needs": [
    "c.e7.2",
    "c.e7.3"
  ],
  "traps": [
    "The dominator $g$ MUST have finite integral: $\\int_E g < \\infty$. Constant $g(x) = 1$ is NOT integrable on $\\mathbb{R}$ (only on sets of finite measure).",
    "Do not confuse DCT with uniform convergence: $f_n$ needs ONLY converge pointwise almost everywhere!"
  ],
  "proof": {
    "idea": "Apply Fatou's Lemma to the non-negative sequences g + f_n >= 0 and g - f_n >= 0.",
    "why": "Fatou on g + f_n gives int f <= liminf int f_n. Fatou on g - f_n gives int f >= limsup int f_n. Together they force the limit to exist and equal int f.",
    "rungs": [
      {
        "why": "Since $|f_n| \\le g$, we have $g + f_n \\ge 0$ almost everywhere. Apply Fatou's Lemma to $(g + f_n)$.",
        "m": "$$\\int_E (g + f) \\, dm \\le \\liminf_{n\\to\\infty} \\int_E (g + f_n) \\, dm = \\int_E g \\, dm + \\liminf_{n\\to\\infty} \\int_E f_n \\, dm$$",
        "meaning": "What this really means: Fatou's lemma applied to the positive gap above $-g$ sets a lower ceiling for the limit."
      },
      {
        "why": "Since $\\int g < \\infty$, subtract $\\int g$ from both sides to obtain $\\int_E f \\, dm \\le \\liminf_{n\\to\\infty} \\int_E f_n \\, dm$.",
        "m": "$$\\int_E f \\, dm \\le \\liminf_{n\\to\\infty} \\int_E f_n \\, dm$$",
        "meaning": "What this really means: Canceling the umbrella function proves the integral cannot exceed the limit inferior."
      },
      {
        "why": "Similarly, $g - f_n \\ge 0$ almost everywhere. Apply Fatou's Lemma to $(g - f_n)$.",
        "m": "$$\\int_E (g - f) \\, dm \\le \\liminf_{n\\to\\infty} \\int_E (g - f_n) \\, dm = \\int_E g \\, dm - \\limsup_{n\\to\\infty} \\int_E f_n \\, dm$$",
        "meaning": "What this really means: Applying Fatou's lemma below the ceiling umbrella sets an upper wall for the limit superior."
      },
      {
        "why": "Subtract $\\int g$ and multiply by $-1$ (which reverses the inequality).",
        "m": "$$\\limsup_{n\\to\\infty} \\int_E f_n \\, dm \\le \\int_E f \\, dm$$",
        "meaning": "What this really means: The limit superior is trapped below the target integral."
      },
      {
        "why": "Combine both inequalities: $\\limsup \\int f_n \\le \\int f \\le \\liminf \\int f_n$. Since $\\liminf \\le \\limsup$, all three terms are equal.",
        "m": "$$\\limsup_{n\\to\\infty} \\int_E f_n \\, dm = \\liminf_{n\\to\\infty} \\int_E f_n \\, dm = \\int_E f \\, dm$$",
        "meaning": "What this really means: The lower and upper walls squeeze the limit into exact equality with the integral."
      }
    ],
    "ends": "The Dominated Convergence Theorem is proved: domination by L^1 function guarantees limit-integral interchange."
  },
  "cards": [
    {
      "q": "State the Lebesgue Dominated Convergence Theorem (DCT).",
      "a": "If $f_n \\to f$ a.e. and $|f_n| \\le g$ with $g \\in L^1$, then $\\lim_{n\\to\\infty} \\int f_n = \\int f$ and $\\int |f_n - f| \\to 0$.",
      "kind": "state"
    },
    {
      "q": "How is the Dominated Convergence Theorem proved from Fatou's Lemma?",
      "a": "By applying Fatou's Lemma to the non-negative sequences $g + f_n \\ge 0$ and $g - f_n \\ge 0$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Royden & Fitzpatrick Ch. 4, Rudin Ch. 11"
},
{
  "id": "c.e7.5",
  "sec": "E7",
  "kind": "theorem",
  "tier": "core",
  "title": "Lebesgue Criterion for Riemann Integrability and L^p Spaces",
  "oneLine": "Riemann integrable iff bounded with discontinuities of measure zero; L^p spaces are complete Banach spaces.",
  "statement": "Let $[a, b] \\subset \\mathbb{R}$ be a compact interval.\n      <p>(1) <b>Lebesgue's Criterion for Riemann Integrability:</b> A bounded function $f: [a, b] \\to \\mathbb{R}$ is <b>Riemann integrable</b> ($f \\in \\mathcal{R}[a, b]$) if and only if its set of discontinuities:\n      $$D_f = \\{x \\in [a, b] : f \\text{ is discontinuous at } x\\}$$\n      has <b>Lebesgue measure zero</b> ($m(D_f) = 0$).</p>\n      <p>(2) <b>Agreement of Integrals:</b> Whenever $f \\in \\mathcal{R}[a, b]$, $f$ is Lebesgue integrable and both integrals agree:\n      $$\\int_a^b f(x) \\, dx = \\int_{[a, b]} f \\, dm$$</p>\n      <p>(3) <b>Completeness of $L^p$ (Riesz\u2013Fischer):</b> For $1 \\le p < \\infty$, the space $L^p(E) = \\{f : \\int_E |f|^p dm < \\infty\\}$ (identifying functions equal a.e.) equipped with the norm $\\|f\\|_p = (\\int_E |f|^p dm)^{1/p}$ is a <b>complete metric space (Banach space)</b>.</p>",
  "intuition": "<p>For over a century, mathematicians wondered: 'exactly which functions can be Riemann integrated?'</p>\n      <p>Lebesgue gave the ultimate, breathtaking answer: a function is Riemann integrable if and only if its breaks and jumps are so sparse that they take up ZERO total length! Thomae's popcorn function has discontinuities at all rationals, but since $m(\\mathbb{Q}) = 0$, it is Riemann integrable! Dirichlet's function has discontinuities everywhere ($m(\\mathbb{R}) > 0$), so it is not.</p>\n      <p>Furthermore, while Riemann integrable functions do NOT form a complete space under $\\int |f - g|$, $L^p$ spaces under Lebesgue integration ARE complete!</p>",
  "needs": [
    "c.7.2.1",
    "c.e7.1",
    "c.e2.1"
  ],
  "traps": [
    "The Lebesgue criterion applies to RIEMANN integrability, not Lebesgue integrability (every measurable function with $\\int |f| < \\infty$ is Lebesgue integrable regardless of discontinuities).",
    "In $L^p$ spaces, elements are technically equivalence classes of functions modulo sets of measure zero."
  ],
  "cards": [
    {
      "q": "State Lebesgue's criterion for Riemann integrability.",
      "a": "A bounded function on $[a, b]$ is Riemann integrable iff its set of discontinuities has Lebesgue measure zero.",
      "kind": "state"
    },
    {
      "q": "State the Riesz\u2013Fischer Theorem.",
      "a": "$L^p(E)$ equipped with the $L^p$ norm is a complete normed space (Banach space) for $1 \\le p \\le \\infty$.",
      "kind": "recall"
    }
  ],
  "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 11, Bartle & Sherbert \u00a77.2"
}
);
