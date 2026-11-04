#!/usr/bin/env python3
"""
Generates data/rae.js: Complete Real Analysis for Entrance (GATE / JAM / CUSAT) course.
Contains 30 foundational entrance concepts across 7 modules (E1 - E7):
  E1: General Metric Spaces (c.e1.1 - c.e1.5)
  E2: Completeness and Baire Category (c.e2.1 - c.e2.4)
  E3: Compactness and Connectedness (c.e3.1 - c.e3.5)
  E4: Equicontinuity and Ascoli–Arzelà (c.e4.1 - c.e4.3)
  E5: Inverse and Implicit Function Theorems (c.e5.1 - c.e5.3)
  E6: Lebesgue Measure on ℝ (c.e6.1 - c.e6.5)
  E7: Lebesgue Integration and Convergence Theorems (c.e7.1 - c.e7.5)
"""

import json

rae_concepts = [
  # ══════════════════════════════════════════════════════════════════════════
  # MODULE E1: General Metric Spaces
  # ══════════════════════════════════════════════════════════════════════════
  {
    "id": "c.e1.1", "sec": "E1", "kind": "definition", "tier": "core",
    "title": "Metric Space Definition and Standard Metrics",
    "oneLine": "A metric space generalizes real-line distance using positivity, symmetry, and triangle inequality.",
    "statement": """A <b>metric space</b> is a pair $(X, d)$ where $X$ is a non-empty set and $d: X \\times X \\to \\mathbb{R}$ is a function satisfying for all $x, y, z \\in X$:
      <p>(1) <b>Positivity:</b> $d(x, y) \\ge 0$, with $d(x, y) = 0 \\iff x = y$.</p>
      <p>(2) <b>Symmetry:</b> $d(x, y) = d(y, x)$.</p>
      <p>(3) <b>Triangle Inequality:</b> $d(x, z) \\le d(x, y) + d(y, z)$.</p>
      <p>Key metrics on $\\mathbb{R}^n$: Euclidean $d_2(x,y) = \\sqrt{\\sum_{i=1}^n (x_i-y_i)^2}$, taxicab $d_1(x,y) = \\sum |x_i-y_i|$, Chebyshev $d_\\infty(x,y) = \\max |x_i-y_i|$. On any set, the <b>discrete metric</b> has $d(x,y)=1$ for $x \\ne y$. On $C[a, b]$, the uniform metric is $d_\\infty(f, g) = \\sup_{t \\in [a, b]} |f(t) - g(t)|$.</p>""",
    "intuition": """<p>On the real line, distance is the 1D gap $|x - y|$. Metric spaces extend this to $n$-dimensional space, function spaces, and abstract sets!</p>
      <p>Distance behaves just as you expect: it is never negative, distance zero means you haven't moved, reversing direction doesn't change distance, and detour cannot beat the direct path.</p>""",
    "needs": ["c.2.2.1"],
    "traps": [
      "Assuming $d(x, y) = 0$ can occur for distinct points; if that happens, $d$ is merely a *pseudometric*.",
      "The discrete metric makes every subset simultaneously open and closed."
    ],
    "cards": [
      { "q": "State the three axioms of a metric $d$ on a set $X$.", "a": "(1) $d(x, y) \\ge 0$ with equality iff $x = y$; (2) $d(x, y) = d(y, x)$; (3) $d(x, z) \\le d(x, y) + d(y, z)$.", "kind": "state" },
      { "q": "What is the uniform metric on the space of continuous functions $C[a, b]$?", "a": "$d_\\infty(f, g) = \\sup_{t \\in [a, b]} |f(t) - g(t)|$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 2"
  },

  {
    "id": "c.e1.2", "sec": "E1", "kind": "definition", "tier": "core",
    "title": "Open Balls and Open Sets in Metric Spaces",
    "oneLine": "Open balls are neighborhoods with wiggle room; open sets are arbitrary unions of open balls.",
    "statement": """Let $(X, d)$ be a metric space.
      <p>(a) The <b>open ball</b> of radius $r > 0$ centered at $x_0 \\in X$ is:
      $$B(x_0, r) = \\{x \\in X : d(x, x_0) < r\\}$$</p>
      <p>(b) A subset $U \\subseteq X$ is <b>open</b> if for every $x \\in U$, there exists $r > 0$ such that $B(x, r) \\subseteq U$.</p>
      <p>(c) The empty set $\\emptyset$ and whole space $X$ are open. Any arbitrary union of open sets is open; any finite intersection of open sets is open.</p>""",
    "intuition": """<p>Standing inside an open set means you have protective padding in every direction: you can step a small distance $\\delta$ anywhere without leaving the set.</p>
      <p>In $\\mathbb{R}$, an open ball is an interval $(x_0 - r, x_0 + r)$. In $\\mathbb{R}^2$, it is an open circular disk.</p>""",
    "needs": ["c.e1.1"],
    "traps": [
      "Infinite intersections of open sets need not be open! $\\bigcap_{n=1}^\\infty (-1/n, 1/n) = \\{0\\}$, which is closed.",
      "In the discrete metric, $B(x, 1) = \\{x\\}$, so every single singleton is an open set!"
    ],
    "cards": [
      { "q": "Define an open set in a metric space $(X, d)$.", "a": "A set $U$ where every point $x \\in U$ has an open ball $B(x, r) \\subseteq U$ for some $r > 0$.", "kind": "state" },
      { "q": "Why is an infinite intersection of open sets not necessarily open?", "a": "Because the radii can shrink to zero, producing a closed set or singleton, e.g. $\\bigcap (-1/n, 1/n) = \\{0\\}$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 2"
  },

  {
    "id": "c.e1.3", "sec": "E1", "kind": "theorem", "tier": "core",
    "title": "Closed Sets, Limit Points, and Closure",
    "oneLine": "A set is closed iff it contains all its limit points; its closure is the smallest closed set containing it.",
    "statement": """Let $(X, d)$ be a metric space and $E \\subseteq X$.
      <p>(a) A point $x \\in X$ is a <b>limit point</b> of $E$ if every punctured open ball $B(x, r) \\setminus \\{x\\}$ contains a point of $E$. The set of limit points is denoted $E'$.</p>
      <p>(b) $E$ is <b>closed</b> if its complement $X \\setminus E$ is open. Equivalently, $E$ is closed if and only if $E' \\subseteq E$.</p>
      <p>(c) The <b>closure</b> of $E$ is $\\overline{E} = E \\cup E'$. A subset $E$ is <b>dense</b> in $X$ if $\\overline{E} = X$.</p>""",
    "intuition": """<p>A closed set has no escape points on its boundary: if points inside $E$ creep up on a limit point, that limit point is already inside $E$.</p>
      <p>For instance, the rationals $\\mathbb{Q}$ have $\\overline{\\mathbb{Q}} = \\mathbb{R}$, so $\\mathbb{Q}$ is dense in $\\mathbb{R}$.</p>""",
    "needs": ["c.e1.2"],
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
      { "q": "State the limit point criterion for a closed set in a metric space.", "a": "$E$ is closed if and only if $E' \\subseteq E$ (it contains all its limit points).", "kind": "state" },
      { "q": "What does it mean for a subset $E$ to be dense in $X$?", "a": "Its closure is the entire space: $\\overline{E} = X$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 2"
  },

  {
    "id": "c.e1.4", "sec": "E1", "kind": "theorem", "tier": "core",
    "title": "Convergence of Sequences in Metric Spaces",
    "oneLine": "Sequential convergence means d(x_n, x) → 0; limits are unique and characterize closed sets.",
    "statement": """Let $(X, d)$ be a metric space.
      <p>(a) A sequence $(x_n)$ <b>converges</b> to $x \\in X$ ($x_n \\to x$) if:
      $$\\forall \\varepsilon > 0, \\; \\exists K \\in \\mathbb{N} : n \\ge K \\implies d(x_n, x) < \\varepsilon$$</p>
      <p>(b) <b>Uniqueness:</b> The limit of a convergent sequence in a metric space is unique.</p>
      <p>(c) <b>Sequential Closedness:</b> A set $E \\subseteq X$ is closed if and only if for every convergent sequence $(x_n)$ in $E$ with $x_n \\to x$, the limit $x$ lies in $E$.</p>""",
    "intuition": """<p>Metric convergence translates directly into real numbers: $x_n \\to x$ in $X$ simply means the real-valued distances $d(x_n, x) \\to 0$ in $\\mathbb{R}$.</p>
      <p>A closed set is sequentially airtight: sequences trapped inside $E$ cannot escape when taking limits.</p>""",
    "needs": ["c.e1.1", "c.3.1.4"],
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
      { "q": "State the uniqueness of limits theorem in metric spaces.", "a": "If a sequence $(x_n)$ in a metric space converges, its limit is unique.", "kind": "state" },
      { "q": "How is closedness of a set characterized by sequences in metric spaces?", "a": "$E$ is closed iff whenever $(x_n) \\subseteq E$ converges to $x$, the limit $x \\in E$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 2"
  },

  {
    "id": "c.e1.5", "sec": "E1", "kind": "theorem", "tier": "core",
    "title": "Continuity of Mappings Between Metric Spaces",
    "oneLine": "A mapping is continuous iff the inverse image of every open set is open.",
    "statement": """Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces, and $f: X \\to Y$.
      <p>(a) $f$ is <b>continuous at $c \\in X$</b> if:
      $$\\forall \\varepsilon > 0, \\; \\exists \\delta > 0 : d_X(x, c) < \\delta \\implies d_Y(f(x), f(c)) < \\varepsilon$$</p>
      <p>(b) <b>Global Open Set Criterion:</b> $f$ is continuous on $X$ if and only if for every open set $V \\subseteq Y$, the pre-image $f^{-1}(V)$ is open in $X$.</p>
      <p>(c) <b>Sequential Continuity:</b> $f$ is continuous at $c$ if and only if for every sequence $x_n \\to c$ in $X$, $f(x_n) \\to f(c)$ in $Y$.</p>""",
    "intuition": """<p>The topological characterization $f^{-1}(\\text{open}) = \\text{open}$ is elegant because it bypasses $\\varepsilon$ and $\\delta$ completely!</p>
      <p>Continuous functions don't tear spaces apart: points that start close together remain close together under $f$.</p>""",
    "needs": ["c.e1.2", "c.5.1.2"],
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
      { "q": "State the global open set characterization of continuity.", "a": "$f: X \\to Y$ is continuous iff $f^{-1}(V)$ is open in $X$ for every open set $V \\subseteq Y$.", "kind": "state" },
      { "q": "State the sequential criterion for continuity in metric spaces.", "a": "$f$ is continuous at $c$ iff $x_n \\to c \\implies f(x_n) \\to f(c)$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 4"
  },

  # ══════════════════════════════════════════════════════════════════════════
  # MODULE E2: Completeness and Baire Category
  # ══════════════════════════════════════════════════════════════════════════
  {
    "id": "c.e2.1", "sec": "E2", "kind": "definition", "tier": "core",
    "title": "Complete Metric Spaces and Cauchy Sequences",
    "oneLine": "A metric space is complete if every sequence whose terms cluster together converges to a limit inside the space.",
    "statement": """Let $(X, d)$ be a metric space.
      <p>(a) A sequence $(x_n)$ in $X$ is a <b>Cauchy sequence</b> if:
      $$\\forall \\varepsilon > 0, \\; \\exists N \\in \\mathbb{N} : m, n \\ge N \\implies d(x_m, x_n) < \\varepsilon$$</p>
      <p>(b) $(X, d)$ is a <b>complete metric space</b> if every Cauchy sequence in $X$ converges to a limit in $X$.</p>
      <p>(c) $\\mathbb{R}^n$ with Euclidean metric, $\\ell^p$ spaces ($1 \\le p \\le \\infty$), and $C[a, b]$ with the uniform metric are complete. $\\mathbb{Q}$ and the open interval $(0, 1)$ are NOT complete.</p>
      <p>(d) A subspace of a complete metric space is complete if and only if it is closed.</p>""",
    "intuition": """<p>In Real Analysis I, the completeness of $\\mathbb{R}$ was the fundamental axiom: there are no 'holes' on the line. In general metric spaces, completeness means the exact same thing: any sequence whose terms pack infinitely tight together cannot slip through a missing hole.</p>
      <p>For example, in $\\mathbb{Q}$, the sequence $1, 1.4, 1.41, 1.414, \\dots$ is Cauchy, but its target $\\sqrt{2}$ is missing from $\\mathbb{Q}$, so $\\mathbb{Q}$ is incomplete.</p>""",
    "needs": ["c.e1.4", "c.3.5.5"],
    "traps": [
      "Every convergent sequence is Cauchy, but the converse holds ONLY in complete spaces!",
      "An open subset of a complete space is almost never complete (e.g. $(0, 1)$ with $1/n$ is Cauchy but limit $0 \\notin (0, 1)$)."
    ],
    "cards": [
      { "q": "Define a complete metric space.", "a": "A metric space in which every Cauchy sequence converges to a point in the space.", "kind": "state" },
      { "q": "When is a subspace $Y$ of a complete metric space $(X, d)$ complete?", "a": "If and only if $Y$ is a closed subset of $X$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 3"
  },

  {
    "id": "c.e2.2", "sec": "E2", "kind": "theorem", "tier": "core",
    "title": "The Banach Contraction Mapping Principle",
    "oneLine": "A strict contraction on a complete metric space has a unique fixed point, found by repeated iteration.",
    "statement": """Let $(X, d)$ be a <b>non-empty complete metric space</b> and let $T: X \\to X$ be a <b>contraction mapping</b>, meaning there exists $k \\in [0, 1)$ such that:
      $$d(T(x), T(y)) \\le k \\, d(x, y) \\quad \\text{for all } x, y \\in X$$
      Then:
      <p>(1) $T$ has a <b>unique fixed point</b> $x^* \\in X$ satisfying $T(x^*) = x^*$.</p>
      <p>(2) For ANY starting point $x_0 \\in X$, the sequence of Picard iterates $x_{n+1} = T(x_n)$ converges to $x^*$, with error estimate:
      $$d(x_n, x^*) \\le \\frac{k^n}{1 - k} d(x_0, x_1)$$</p>""",
    "intuition": """<p>Think of a photocopier that shrinks an image by a factor of $k = 0.5$ and prints it on the same sheet. If you put the copy back on the glass and repeat, the images zoom in on exactly one pixel that never moves: the fixed point!</p>
      <p>This theorem is one of the most powerful engines in modern mathematics: it proves the existence of solutions to differential equations (Picard-Lindelöf), integral equations, and the Inverse Function Theorem!</p>""",
    "needs": ["c.e2.1", "c.3.5.8"],
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
      { "q": "State the Banach Contraction Mapping Theorem.", "a": "A contraction mapping $T$ with factor $k < 1$ on a non-empty complete metric space has a unique fixed point $x^*$, and Picard iterates converge to $x^*$.", "kind": "state" },
      { "q": "What is the error bound after $n$ iterations in Banach fixed-point theorem?", "a": "$d(x_n, x^*) \\le \\frac{k^n}{1 - k} d(x_0, x_1)$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, JAM MA, Trench Ch. 9"
  },

  {
    "id": "c.e2.3", "sec": "E2", "kind": "definition", "tier": "core",
    "title": "Dense, Nowhere Dense, and Meager Sets",
    "oneLine": "Nowhere dense sets have no interior even after closing; meager sets are countable unions of them.",
    "statement": """Let $(X, d)$ be a metric space and $E \\subseteq X$.
      <p>(a) $E$ is <b>dense</b> in $X$ if its closure is the whole space: $\\overline{E} = X$.</p>
      <p>(b) $E$ is <b>nowhere dense</b> if the interior of its closure is empty: $\\operatorname{int}(\\overline{E}) = \\emptyset$. Equivalently, $\\overline{E}$ contains no open balls.</p>
      <p>(c) $E$ is of <b>first category (meager)</b> if it is a countable union of nowhere dense sets: $E = \\bigcup_{n=1}^\\infty E_n$ with each $E_n$ nowhere dense.</p>
      <p>(d) $E$ is of <b>second category (non-meager)</b> if it is not of first category.</p>""",
    "intuition": """<p>Nowhere dense sets are topological 'swiss cheese with almost no cheese': even if you take their closure, they cannot fill up any open ball, no matter how small.</p>
      <p>Single points $\\{x\\}$ in $\\mathbb{R}$ are nowhere dense. The rationals $\\mathbb{Q} = \\bigcup_{q \\in \\mathbb{Q}} \\{q\\}$ are a countable union of singletons, so $\\mathbb{Q}$ is meager (first category)!</p>""",
    "needs": ["c.e1.3"],
    "traps": [
      "Nowhere dense is MUCH stronger than having empty interior: $\\mathbb{Q}$ has empty interior in $\\mathbb{R}$, but $\\overline{\\mathbb{Q}} = \\mathbb{R}$, so $\\mathbb{Q}$ is NOT nowhere dense!",
      "A set can be dense and meager at the same time: $\\mathbb{Q}$ is dense in $\\mathbb{R}$ and also meager."
    ],
    "cards": [
      { "q": "Define a nowhere dense subset of a metric space.", "a": "A set $E$ whose closure has empty interior: $\\operatorname{int}(\\overline{E}) = \\emptyset$.", "kind": "state" },
      { "q": "What is a meager (first category) set?", "a": "A set that can be written as a countable union of nowhere dense sets.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Hunter & Nachtergaele Ch. 1"
  },

  {
    "id": "c.e2.4", "sec": "E2", "kind": "theorem", "tier": "core",
    "title": "The Baire Category Theorem",
    "oneLine": "A complete metric space cannot be made of meager crumbs: it is of second category in itself.",
    "statement": """Let $(X, d)$ be a <b>complete metric space</b>.
      <p>(1) If $U_1, U_2, U_3, \\dots$ are dense open subsets of $X$, then their countable intersection is dense in $X$:
      $$\\overline{\\bigcap_{n=1}^\\infty U_n} = X$$</p>
      <p>(2) <b>Equivalent Category Form:</b> $X$ is of <b>second category (non-meager)</b> in itself. That is, $X$ CANNOT be written as a countable union of nowhere dense sets.</p>
      <p>(3) <b>Immediate Consequence:</b> $\\mathbb{R}$ is uncountable, because if $\\mathbb{R}$ were countable, it would be a countable union of singletons (nowhere dense sets), contradicting Baire's theorem!</p>""",
    "intuition": """<p>Baire's theorem says that complete spaces are topologically 'fat' and robust: you cannot exhaust a complete space by scraping together countably many thin, nowhere dense crumbs.</p>
      <p>This explains why the irrationals $\\mathbb{R} \\setminus \\mathbb{Q}$ are massive while the rationals $\\mathbb{Q}$ are tiny: $\\mathbb{Q}$ is meager, so $\\mathbb{R} \\setminus \\mathbb{Q}$ is a dense $G_\\delta$ set of second category.</p>""",
    "needs": ["c.e2.1", "c.e2.3", "c.2.5.2"],
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
      { "q": "State the Baire Category Theorem for complete metric spaces.", "a": "In a complete metric space, the countable intersection of dense open sets is dense; equivalently, the space is non-meager.", "kind": "state" },
      { "q": "Why does Baire's Theorem imply that $\\mathbb{R}$ is uncountable?", "a": "Because if $\\mathbb{R}$ were countable, it would be a countable union of singletons (nowhere dense sets), contradicting that complete spaces are non-meager.", "kind": "apply" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 2, Hunter & Nachtergaele Ch. 1"
  }
]

print(f"Total concepts defined: {len(rae_concepts)}")
with open("tools/scratch/rae_part1.json", "w") as f:
    json.dump(rae_concepts, f, indent=2)
