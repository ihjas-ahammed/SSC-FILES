#!/usr/bin/env python3
"""
Complete authoring of data/rae.js for Real Analysis for Entrance (GATE / JAM / CUSAT).
Total 30 concepts across 7 modules:
  E1: General Metric Spaces (c.e1.1 - c.e1.5)
  E2: Completeness and Baire Category (c.e2.1 - c.e2.4)
  E3: Compactness and Connectedness (c.e3.1 - c.e3.5)
  E4: Equicontinuity and Ascoli–Arzelà (c.e4.1 - c.e4.3)
  E5: Inverse and Implicit Function Theorems (c.e5.1 - c.e5.3)
  E6: Lebesgue Measure on ℝ (c.e6.1 - c.e6.5)
  E7: Lebesgue Integration and Convergence Theorems (c.e7.1 - c.e7.5)
"""

import json

with open("tools/scratch/rae_part1.json", "r") as f:
    part1 = json.load(f)

part2 = [
  # ══════════════════════════════════════════════════════════════════════════
  # MODULE E3: Compactness and Connectedness in Metric Spaces
  # ══════════════════════════════════════════════════════════════════════════
  {
    "id": "c.e3.1", "sec": "E3", "kind": "definition", "tier": "core",
    "title": "Compactness and Open Covers",
    "oneLine": "A subset is compact if every open cover can be thinned out to a finite subcover.",
    "statement": """Let $(X, d)$ be a metric space.
      <p>(a) An <b>open cover</b> of $K \\subseteq X$ is a collection $\\{U_\\alpha\\}_{\\alpha \\in I}$ of open sets such that $K \\subseteq \\bigcup_{\\alpha \\in I} U_\\alpha$.</p>
      <p>(b) $K$ is <b>compact</b> if every open cover of $K$ contains a <b>finite subcover</b>: there exist $\\alpha_1, \\ldots, \\alpha_m \\in I$ such that:
      $$K \\subseteq U_{\\alpha_1} \\cup \\cdots \\cup U_{\\alpha_m}$$</p>
      <p>(c) <b>Heine–Borel Theorem in $\\mathbb{R}^n$:</b> A subset $K \\subseteq \\mathbb{R}^n$ is compact if and only if it is both <b>closed and bounded</b>.</p>""",
    "intuition": """<p>Compactness is the next best thing to being a finite set! An infinite set can have points drifting off to infinity or disappearing into open holes.</p>
      <p>A compact set is completely self-contained and finite-like: no matter how many tiny open patches you need to cover it, you can always discard almost all of them and finish the job with just a finite handful.</p>""",
    "needs": ["c.e1.2", "c.e1.3"],
    "traps": [
      "The Heine-Borel theorem (compact ⇔ closed + bounded) is FALSE in infinite-dimensional metric spaces! In $C[0, 1]$ or $\\ell^2$, the closed unit ball is NOT compact.",
      "An open interval $(0, 1)$ is bounded but NOT compact because the cover $\{(1/n, 1) : n \\ge 2\}$ has no finite subcover."
    ],
    "cards": [
      { "q": "Define a compact subset of a metric space.", "a": "A set $K$ where every open cover has a finite subcover.", "kind": "state" },
      { "q": "When does closed and bounded imply compact?", "a": "In $\\mathbb{R}^n$ (by the Heine-Borel Theorem). It fails in infinite-dimensional metric spaces.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 2"
  },

  {
    "id": "c.e3.2", "sec": "E3", "kind": "theorem", "tier": "core",
    "title": "Sequential Compactness and Total Boundedness",
    "oneLine": "In metric spaces, compact = sequentially compact = complete and totally bounded.",
    "statement": """Let $(X, d)$ be a metric space and $K \\subseteq X$. The following are logically equivalent:
      <p>(1) $K$ is <b>compact</b> (every open cover has a finite subcover).</p>
      <p>(2) $K$ is <b>sequentially compact</b>: every sequence in $K$ has a subsequence converging to a point in $K$.</p>
      <p>(3) $K$ is <b>complete and totally bounded</b>.</p>
      <p>Here $K$ is <b>totally bounded</b> if for every $\\varepsilon > 0$, $K$ can be covered by finitely many open balls of radius $\\varepsilon$.</p>""",
    "intuition": """<p>Sequential compactness is the working mathematician's definition of compactness: you cannot get lost in $K$. Any infinite sequence of points in $K$ is forced to pile up around at least one accumulator point that stays inside $K$ (Bolzano–Weierstrass on steroids!).</p>
      <p>Total boundedness means you can blanket the entire set with a finite number of $\\varepsilon$-coins, no matter how small $\\varepsilon$ is.</p>""",
    "needs": ["c.e3.1", "c.e2.1", "c.3.4.8"],
    "traps": [
      "Bounded does NOT mean totally bounded in general spaces! The infinite orthonormal basis $\\{e_n\\}$ in $\\ell^2$ is bounded ($d(e_n, 0) = 1$) but requires infinitely many $1/2$-balls to cover.",
      "Total boundedness is a metric property, not a topological one."
    ],
    "proof": {
      "idea": "Show sequentially compact implies totally bounded (construct an ε-net) and complete (Cauchy sequences with convergent subsequences converge).",
      "why": "If an ε-net could not be finite, an infinite sequence with mutual distances ≥ ε would have no convergent subsequence, contradicting sequential compactness.",
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
      { "q": "State the equivalence theorem for compactness in metric spaces.", "a": "A metric space is compact iff it is sequentially compact iff it is complete and totally bounded.", "kind": "state" },
      { "q": "Define total boundedness of a metric set $K$.", "a": "For every $\\varepsilon > 0$, $K$ can be covered by finitely many open balls of radius $\\varepsilon$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Rudin Ch. 2, Munkres Ch. 3"
  },

  {
    "id": "c.e3.3", "sec": "E3", "kind": "theorem", "tier": "core",
    "title": "Continuous Mappings on Compact Metric Spaces",
    "oneLine": "Continuous images of compact sets are compact, attain their extrema, and are uniformly continuous.",
    "statement": """Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces, with $K \\subseteq X$ <b>compact</b>, and let $f: K \\to Y$ be continuous.
      <p>(1) <b>Preservation of Compactness:</b> The image $f(K)$ is compact in $Y$.</p>
      <p>(2) <b>Extreme Value Theorem:</b> If $f: K \\to \\mathbb{R}$, then $f$ is bounded and attains its maximum and minimum values on $K$.</p>
      <p>(3) <b>Heine–Cantor Theorem:</b> $f$ is <b>uniformly continuous</b> on $K$.</p>
      <p>(4) <b>Compact-to-Hausdorff Bijection:</b> If $f: K \\to Y$ is a continuous bijection and $Y$ is a metric space, then $f^{-1}$ is automatically continuous (so $f$ is a homeomorphism).</p>""",
    "intuition": """<p>Compactness is the ultimate stabilizer for continuous functions: it prevents functions from blowing up to infinity, guarantees that optimal solutions (max/min) actually exist, and upgrades ordinary continuity to uniform continuity!</p>""",
    "needs": ["c.e3.1", "c.e1.5", "c.5.3.4", "c.5.4.3"],
    "traps": [
      "Compactness of the DOMAIN is mandatory: $f(x) = 1/x$ on $(0, 1)$ is continuous but NOT bounded and NOT uniformly continuous because $(0, 1)$ is not compact.",
      "A continuous bijection between metric spaces is NOT always a homeomorphism unless the domain is compact (or open mapping theorem applies)."
    ],
    "proof": {
      "idea": "Pull back an open cover of f(K) to an open cover of K via continuity, and thin it out using compactness of K.",
      "why": "If {V_α} covers f(K), then {f^{-1}(V_α)} covers K and consists of open sets. A finite subcover pushes forward to a finite subcover of f(K).",
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
      { "q": "State the theorem on the continuous image of a compact set.", "a": "If $f: X \\to Y$ is continuous and $K \\subseteq X$ is compact, then $f(K)$ is compact in $Y$.", "kind": "state" },
      { "q": "Under what condition is a continuous bijection between metric spaces guaranteed to be a homeomorphism?", "a": "When the domain space is compact.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 4"
  },

  {
    "id": "c.e3.4", "sec": "E3", "kind": "definition", "tier": "core",
    "title": "Connectedness in Metric Spaces",
    "oneLine": "A metric space is connected if it cannot be split into two disjoint non-empty open pieces.",
    "statement": """Let $(X, d)$ be a metric space.
      <p>(a) A <b>separation</b> of $X$ is a pair of non-empty, disjoint open sets $A, B \\subseteq X$ such that $X = A \\cup B$.</p>
      <p>(b) $X$ is <b>connected</b> if no separation of $X$ exists. Equivalently, the ONLY subsets of $X$ that are both open and closed (clopen) are $\\emptyset$ and $X$.</p>
      <p>(c) A subset $E \\subseteq X$ is connected if it is connected in the subspace metric.</p>
      <p>(d) <b>Preservation of Connectedness:</b> If $f: X \\to Y$ is continuous and $X$ is connected, then $f(X)$ is connected in $Y$.</p>""",
    "intuition": """<p>Connectedness means 'in one piece': you cannot cut the space in two without cutting through at least one open boundary.</p>
      <p>The Intermediate Value Theorem is simply the statement that continuous functions map connected sets to connected sets: connected subsets of $\\mathbb{R}$ are intervals!</p>""",
    "needs": ["c.e1.2", "c.5.3.7"],
    "traps": [
      "Connected does NOT imply path-connected (e.g. the Topologist's Sine Curve is connected but NOT path-connected).",
      "In $\\mathbb{Q}$, every set with more than one point is disconnected (totally disconnected)."
    ],
    "cards": [
      { "q": "Define a connected metric space.", "a": "A space that cannot be partitioned into two non-empty disjoint open sets; equivalently, its only clopen sets are $\\emptyset$ and $X$.", "kind": "state" },
      { "q": "What are the connected subsets of the real line $\\mathbb{R}$?", "a": "Precisely the intervals (open, closed, half-open, rays, or single points).", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, JAM MA, Rudin Ch. 2, Munkres Ch. 3"
  },

  {
    "id": "c.e3.5", "sec": "E3", "kind": "theorem", "tier": "core",
    "title": "Path-Connectedness and Components",
    "oneLine": "Path-connected means any two points can be joined by a continuous curve; it implies connectedness.",
    "statement": """Let $(X, d)$ be a metric space.
      <p>(a) A <b>path</b> from $x$ to $y$ in $X$ is a continuous map $\\gamma: [0, 1] \\to X$ with $\\gamma(0) = x$ and $\\gamma(1) = y$.</p>
      <p>(b) $X$ is <b>path-connected</b> if every pair of points can be joined by a path.</p>
      <p>(c) <b>Path-Connected $\\implies$ Connected:</b> Every path-connected metric space is connected. The converse is false in general (Topologist's Sine Curve), but TRUE for open subsets of $\\mathbb{R}^n$.</p>""",
    "intuition": """<p>Path-connectedness is the intuitive notion of connected: an ant can crawl continuously from point $A$ to point $B$ without jumping over a chasm.</p>
      <p>For open regions in $\\mathbb{R}^n$ (like in multivariable calculus and complex analysis), connected and path-connected mean the exact same thing!</p>""",
    "needs": ["c.e3.4"],
    "traps": [
      "The Topologist’s Sine Curve $T = \\{(x, \\sin(1/x)) : x \\in (0, 1]\\} \\cup \\{(0, y) : -1 \\le y \\le 1\\}$ is connected, but NOT path-connected!",
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
          "meaning": "What this really means: This forces the continuous time interval $[0, 1]$ to crack into two pieces—an outright contradiction because $[0, 1]$ is connected!"
        }
      ],
      "ends": "Every path-connected metric space is connected."
    },
    "cards": [
      { "q": "Does path-connected imply connected?", "a": "Yes, every path-connected space is connected.", "kind": "state" },
      { "q": "Give the standard counterexample of a space that is connected but not path-connected.", "a": "The Topologist's Sine Curve: $T = \\{(x, \\sin(1/x)) : x \\in (0, 1]\\} \\cup (\\{0\\} \\times [-1, 1])$.", "kind": "recall" }
    ],
    "provenance": "GATE MA Section 3, Munkres Ch. 3"
  }
]

with open("tools/scratch/rae_part2.json", "w") as f:
    json.dump(part2, f, indent=2)
print("Part 2 written successfully")
