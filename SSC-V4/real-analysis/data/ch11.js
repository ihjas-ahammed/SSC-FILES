/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis I · Module 5 (Extension): Topology of the Line
   Sections: 11.1 (Open and Closed Sets in ℝ), 11.2 (Compact Sets)
   Diagrams: c.11.1.7, c.11.2.5, c.11.2.6
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.11.1.1', bartle: '11.1.1', sec: '11.1', kind: 'definition', tier: 'ext',
    title: 'Open Sets and Interior Points in ℝ',
    oneLine: 'A set is open if every point inside it has some breathing room — an entire neighborhood that stays completely inside.',
    statement: `Let $G \\subseteq \\mathbb{R}$.
      <p>(a) A point $x \\in G$ is an <b>interior point</b> of $G$ if there exists an $\\varepsilon > 0$ such that the $\\varepsilon$-neighborhood $V_\\varepsilon(x) \\subseteq G$.</p>
      <p>(b) The set $G$ is <b>open</b> in $\\mathbb{R}$ if every point in $G$ is an interior point of $G$. In other words, for every $x \\in G$, there exists $\\varepsilon > 0$ such that $(x - \\varepsilon, x + \\varepsilon) \\subseteq G$.</p>`,
    intuition: `<p>Think of an open set as a territory where nobody lives directly on the border fence. Wherever you stand inside $G$, you can take a step in any direction without falling off the edge of $G$.</p>
      <p>• Every open interval $(a, b)$ is an open set.</p>
      <p>• The empty set $\\emptyset$ and the entire real line $\\mathbb{R}$ are both open.</p>
      <p>• A single point set $\\{x\\}$ is NOT open, because any neighborhood of $x$ spills over into outside points.</p>`,
    needs: ['c.2.2.7'],
    traps: [
      `Thinking sets are like doors: either open or closed. Completely FALSE in topology! Sets can be BOTH open and closed ($\\emptyset$ and $\\mathbb{R}$), or NEITHER open nor closed (like $[0, 1)$).`,
      `Forgetting that the radius $\\varepsilon$ can depend on the point $x$. As you get closer to the boundary, $\\varepsilon$ gets smaller, but it is always $> 0$.`
    ],
    cards: [
      { q: 'What is the definition of an open set in $\\mathbb{R}$?', a: 'A set $G$ such that for every $x \\in G$, there exists $\\varepsilon > 0$ with $V_\\varepsilon(x) \\subseteq G$.', kind: 'state' },
      { q: 'Is the half-open interval $[0, 1)$ open in $\\mathbb{R}$?', a: 'No, because $0 \\in [0, 1)$ is not an interior point: any neighborhood $(-\\varepsilon, \\varepsilon)$ contains negative numbers outside the set.', kind: 'apply' }
    ]
  },

  {
    id: 'c.11.1.5', bartle: '11.1.5', sec: '11.1', kind: 'definition', tier: 'ext',
    title: 'Closed Sets and Limit Points',
    oneLine: 'A set is closed if its complement is open, or equivalently, if it catches all points its elements can converge to.',
    statement: `Let $F \\subseteq \\mathbb{R}$.
      <p>(a) The set $F$ is <b>closed</b> in $\\mathbb{R}$ if its complement $\\mathbb{R} \\setminus F$ is open in $\\mathbb{R}$.</p>
      <p>(b) A point $x \\in \\mathbb{R}$ is a <b>cluster point</b> (limit point) of $F$ if every neighborhood $V_\\varepsilon(x)$ contains at least one point of $F$ distinct from $x$.</p>
      <p>(c) <b>Characterisation Theorem:</b> A set $F \\subseteq \\mathbb{R}$ is closed if and only if $F$ contains all of its cluster points (equivalently: if $(x_n)$ is in $F$ and $x_n \\to x$, then $x \\in F$).</p>`,
    intuition: `<p>A closed set has a firm perimeter fence that traps its own boundaries:</p>
      <p>• $[a, b]$ is closed because both boundary endpoints $a$ and $b$ belong to the set.</p>
      <p>• If elements in $F$ rush towards a destination $x_n \\to x$, that destination $x$ CANNOT escape: it is locked inside $F$.</p>
      <p>• $(0, 1)$ fails to be closed because the sequence $1/n \\to 0$, but $0$ is missing from $(0, 1)$.</p>`,
    needs: ['c.11.1.1', 'c.3.1.3'],
    traps: [
      `"Not open" does NOT mean "closed"! The interval $[2, 5)$ is neither open nor closed.`,
      `Thinking a finite set cannot be closed. Any finite set $\\{x_1, \\dots, x_n\\}$ is closed because it contains all its cluster points (it has none!).`
    ],
    cards: [
      { q: 'State the sequential characterisation of a closed set in $\\mathbb{R}$.', a: '$F$ is closed iff for every sequence $(x_n)$ in $F$ with $x_n \\to x$, the limit $x \\in F$.', kind: 'state' },
      { q: 'Why is $(0, 1)$ not closed in $\\mathbb{R}$?', a: 'Because $x_n = 1/n \\in (0, 1)$ converges to $0$, but $0 \\notin (0, 1)$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.11.1.7', bartle: '11.1.7', sec: '11.1', kind: 'theorem', tier: 'ext',
    title: 'Open and Closed Sets: Unions and Intersections',
    oneLine: 'Any union of open sets is open; finite intersections of open sets are open. Flip for closed sets.',
    statement: `(a) The union of an <b>arbitrary</b> collection of open sets is open.
      <p>(b) The intersection of a <b>finite</b> collection of open sets is open.</p>
      <p>(c) The intersection of an <b>arbitrary</b> collection of closed sets is closed.</p>
      <p>(d) The union of a <b>finite</b> collection of closed sets is closed.</p>`,
    intuition: `<p>Why does infinite intersection of open sets fail to stay open?</p>
      <p>Look at this classic Indian university exam counterexample:</p>
      $$G_n = \\left(-\\frac{1}{n}, \\frac{1}{n}\\right)$$
      <p>Each $G_n$ is an open interval. But what is their infinite intersection? $\\bigcap_{n=1}^\\infty G_n = \\{0\\}$, which is a single point — CLOSED, not open! The openness got crushed away at infinity.</p>`,
    needs: ['c.11.1.1', 'c.11.1.5'],
    traps: [
      `Assuming infinite intersections of open sets are always open. The counterexample $\\bigcap (-1/n, 1/n) = \\{0\\}$ is tested constantly in GATE and university papers!`,
      `Assuming infinite unions of closed sets are always closed: $\\bigcup [1/n, 1] = (0, 1]$, which is not closed!`
    ],
    cards: [
      { q: 'Give an example of a countable intersection of open sets that is NOT open.', a: '$\\bigcap_{n=1}^\\infty \\left(-\\frac{1}{n}, \\frac{1}{n}\\right) = \\{0\\}$, which is a closed set (a single point).', kind: 'apply' },
      { q: 'Is the union of an infinite collection of open sets always open?', a: 'Yes, arbitrary unions of open sets are always open.', kind: 'recall' }
    ]
  },

  {
    id: 'c.11.2.1', bartle: '11.2.1', sec: '11.2', kind: 'definition', tier: 'ext',
    title: 'Open Covers and Compactness',
    oneLine: 'A set is compact if however many open blankets you use to cover it, a finite number of blankets would already suffice.',
    statement: `Let $K \\subseteq \\mathbb{R}$.
      <p>(a) An <b>open cover</b> of $K$ is a family $\\mathcal{G} = \\{G_\\alpha\\}$ of open sets in $\\mathbb{R}$ such that:
      $$K \\subseteq \\bigcup_\\alpha G_\\alpha$$</p>
      <p>(b) A <b>subcover</b> of $\\mathcal{G}$ is a subfamily $\\mathcal{G}' \\subseteq \\mathcal{G}$ that still covers $K$.</p>
      <p>(c) A set $K$ is <b>compact</b> if <b>every</b> open cover of $K$ contains a <b>finite subcover</b>.</p>`,
    intuition: `<p>Compactness is the gold standard in higher mathematics. It generalises the safety of "finite sets" to infinite sets!</p>
      <p>Imagine you have infinitely many tiny overlapping umbrellas covering a park $K$. If $K$ is compact, you don't need all infinite umbrellas — you can always throw away all but a finite list ($10$, or $50$, or $1000$) of them, and the park is still 100% sheltered.</p>
      <p>On the real line $\\mathbb{R}$, this happens exactly when the set is <b>closed and bounded</b> (The Heine-Borel Theorem!).</p>`,
    needs: ['c.11.1.1'],
    traps: [
      `Checking only ONE particular open cover: to prove compactness by definition, you must show EVERY conceivable open cover has a finite subcover.`,
      `Thinking $(0, 1)$ is compact: the open cover $\\{(1/n, 1) : n \\ge 2\\}$ has NO finite subcover because points near $0$ escape any finite collection.`
    ],
    cards: [
      { q: 'Define what it means for a set $K \\subset \\mathbb{R}$ to be compact.', a: 'Every open cover of $K$ has a finite subcover.', kind: 'state' },
      { q: 'Why is the open interval $(0, 1)$ not compact?', a: 'The open cover $\\mathcal{G} = \\{(1/n, 1) : n \\in \\mathbb{N}, n \\ge 2\\}$ covers $(0, 1)$, but no finite subcover can ever cover points smaller than the minimum $1/n$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.11.2.5', bartle: '11.2.5', sec: '11.2', kind: 'theorem', tier: 'ext',
    title: 'The Heine–Borel Theorem',
    oneLine: 'In ℝ, compact is exactly identical to closed and bounded.',
    statement: `A subset $K \\subseteq \\mathbb{R}$ is <b>compact</b> if and only if it is both:
      <p>1. <b>Closed</b> in $\\mathbb{R}$, and</p>
      <p>2. <b>Bounded</b> (there exists $M > 0$ such that $|x| \\le M$ for all $x \\in K$).</p>`,
    intuition: `<p>This is one of the crown jewels of Real Analysis! Testing the open cover definition directly is often difficult. The Heine-Borel Theorem gives you an easy, two-point checklist for any set in $\\mathbb{R}$:</p>
      <p>1. <b>Is it closed?</b> (Does it contain all its boundary endpoints?)</p>
      <p>2. <b>Is it bounded?</b> (Can you box it inside some finite interval $[-M, M]$?)</p>
      <p>If BOTH are Yes, the set is compact! For example, $[0, 1]$ is compact. But $(0, 1)$ fails because it is not closed, and $[0, \\infty)$ fails because it is not bounded.</p>`,
    needs: ['c.11.2.1', 'c.11.1.5', 'c.2.3.1'],
    traps: [
      `Assuming Heine-Borel holds in every metric space: on general infinite-dimensional spaces, closed and bounded does NOT guarantee compactness! But on $\\mathbb{R}$ (and $\\mathbb{R}^n$), it is an exact if-and-only-if.`,
      `Forgetting that the Maximum-Minimum Theorem (5.3.4) and Uniform Continuity Theorem (5.4.3) are direct consequences of Heine-Borel compactness on $[a, b]$!`
    ],
    cards: [
      { q: 'State the Heine–Borel Theorem for the real line $\\mathbb{R}$.', a: 'A subset $K \\subseteq \\mathbb{R}$ is compact if and only if it is closed and bounded.', kind: 'state' },
      { q: 'Is the set of integers $\\mathbb{Z}$ compact in $\\mathbb{R}$?', a: 'No, because $\\mathbb{Z}$ is unbounded (numbers go to $\\pm\\infty$), even though it is closed.', kind: 'apply' },
      { q: 'Is the closed interval $[a, b]$ compact in $\\mathbb{R}$?', a: 'Yes, because it is both closed (contains its endpoints) and bounded (length is $b - a$).', kind: 'recall' }
    ]
  },

  {
    id: 'c.11.2.6', bartle: '11.2.6', sec: '11.2', kind: 'theorem', tier: 'ext',
    title: 'Topological Bolzano–Weierstrass Theorem',
    oneLine: 'Every infinite subset inside a compact set has a limit point inside that set.',
    statement: `If $K$ is a compact subset of $\\mathbb{R}$, then every infinite subset $S \\subseteq K$ has at least one <b>cluster point</b> (limit point) that belongs to $K$.`,
    intuition: `<p>If you pack infinitely many points into a finite, closed box $K$, they have nowhere to run. They must crowd around each other so tightly that at least one accumulation point forms inside the box.</p>
      <p>This is the topological version of the Bolzano-Weierstrass theorem for sequences (3.4.8): an infinite set inside $[a, b]$ cannot spread out thinly forever; points must condense.</p>`,
    needs: ['c.11.2.5', 'c.3.4.8'],
    traps: [
      `If the set is not bounded, points can march off to infinity without clustering (e.g. $\\mathbb{N} \\subset \\mathbb{R}$ has no cluster points).`,
      `If the set is not closed, the cluster point can fall outside the set (e.g. $S = \\{1/n : n \\in \\mathbb{N}\\} \\subset (0, 1)$ has cluster point $0 \\notin (0, 1)$).`
    ],
    cards: [
      { q: 'State the Topological Bolzano–Weierstrass Theorem.', a: 'Every infinite subset of a compact set $K \\subseteq \\mathbb{R}$ has a cluster point in $K$.', kind: 'state' },
      { q: 'Why does the set $S = \\{1, 2, 3, 4, \\ldots\\}$ have no cluster point in $\\mathbb{R}$?', a: 'Because points are spaced distance $\\ge 1$ apart and the set is unbounded.', kind: 'apply' }
    ]
  },

  {
    id: 'c.11.3.1', bartle: '11.3.1', sec: '11.3', kind: 'theorem', tier: 'ext',
    title: 'Global Continuity via Open Sets',
    oneLine: 'A function is continuous if and only if the inverse image of every open set is open.',
    statement: `Let $f: \\mathbb{R} \\to \\mathbb{R}$.
      <p>Then $f$ is <b>continuous on $\\mathbb{R}$</b> if and only if for every open set $G \\subseteq \\mathbb{R}$, the preimage:
      $$f^{-1}(G) = \\{x \\in \\mathbb{R} : f(x) \\in G\\}$$
      is an <b>open set</b> in $\\mathbb{R}$.</p>`,
    intuition: `<p>This is the modern topological definition of continuity! In elementary calculus, you learned the $\\varepsilon$-$\\delta$ definition at a single point.</p>
      <p>Topology eliminates $\\varepsilon$, $\\delta$, and points entirely: <i>"Continuous means pulling open sets back into open sets."</i></p>
      <p>Notice the direction: it is the <b>INVERSE IMAGE</b> $f^{-1}(G)$ that is open, NOT the forward image $f(G)$! (Forward images of open sets can fail to be open: for $f(x) = x^2$, the open interval $(-1, 1)$ gets mapped to $[0, 1)$, which is NOT open!)</p>`,
    needs: ['c.11.1.1', 'c.5.1.1'],
    traps: [
      `Forward image $f(G)$ of an open set is NOT necessarily open (e.g. $f(x) = x^2$ maps $(-1, 1)$ to $[0, 1)$). It is ONLY the preimage $f^{-1}(G)$ that is guaranteed to be open!`,
      `The same holds for closed sets: $f$ is continuous iff $f^{-1}(F)$ is closed for every closed set $F$.`
    ],
    proof: {
      idea: '(=>) Let G be open, c in f^(-1)(G). Then f(c) in G; choose epsilon neighborhood in G, and continuity gives delta neighborhood around c that maps into G. (<=) Given epsilon, the epsilon-ball around f(c) is open, so its preimage is open, yielding the required delta.',
      why: 'Preimage definition aligns open balls with epsilon-delta neighborhoods.',
      rungs: [
        {
          why: '(=>) Assume $f$ is continuous on $\\mathbb{R}$. Let $G \\subseteq \\mathbb{R}$ be an open set. We show $f^{-1}(G)$ is open. Let $c \\in f^{-1}(G)$.',
          m: '$$c \\in f^{-1}(G) \\implies f(c) \\in G$$',
          meaning: 'What this really means: Pick an arbitrary point in the preimage; its output lands safely inside the target open set.'
        },
        {
          why: 'Since $G$ is open and $f(c) \\in G$, there exists $\\varepsilon > 0$ such that $V_\\varepsilon(f(c)) = (f(c) - \\varepsilon, f(c) + \\varepsilon) \\subseteq G$.',
          m: '$$V_\\varepsilon(f(c)) \\subseteq G$$',
          meaning: 'What this really means: Openness gives breathing room around the output point.'
        },
        {
          why: 'Since $f$ is continuous at $c$, for this $\\varepsilon > 0$ there exists $\\delta > 0$ such that $|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$.',
          m: '$$f(V_\\delta(c)) \\subseteq V_\\varepsilon(f(c)) \\subseteq G$$',
          meaning: 'What this really means: Continuity guarantees a small window around the input gets squeezed inside that breathing room.'
        },
        {
          why: 'This implies $V_\\delta(c) \\subseteq f^{-1}(G)$. Thus $c$ is an interior point of $f^{-1}(G)$, proving $f^{-1}(G)$ is open.',
          m: '$$V_\\delta(c) \\subseteq f^{-1}(G) \\implies f^{-1}(G) \\text{ is open}$$',
          meaning: 'What this really means: Every point in the preimage has an entire protective ball around it, so the preimage is open.'
        },
        {
          why: '(<=) Conversely, assume preimages of open sets are open. Let $c \\in \\mathbb{R}$ and $\\varepsilon > 0$. The ball $V_\\varepsilon(f(c))$ is open.',
          m: '$$U = f^{-1}(V_\\varepsilon(f(c))) \\text{ is open and contains } c$$',
          meaning: 'What this really means: The target epsilon ball is open, so its backward pull must be an open set containing the source point.'
        },
        {
          why: 'Since $U$ is open and $c \\in U$, there exists $\\delta > 0$ such that $V_\\delta(c) \\subseteq U$. This means $|x - c| < \\delta \\implies f(x) \\in V_\\varepsilon(f(c))$, proving continuity at $c$.',
          m: '$$V_\\delta(c) \\subseteq f^{-1}(V_\\varepsilon(f(c))) \\implies |x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$$',
          meaning: 'What this really means: The open preimage supplies the exact delta needed to satisfy the epsilon-delta test.'
        }
      ],
      ends: 'Therefore $f$ is continuous on $\\mathbb{R}$ if and only if preimages of open sets are open.'
    },
    cards: [
      { q: 'State the topological definition of continuity.', a: '$f$ is continuous iff $f^{-1}(G)$ is open for every open set $G$.', kind: 'state' },
      { q: 'Why is $f(G)$ not necessarily open when $f$ is continuous and $G$ is open?', a: 'Because continuous functions can have local extrema that map open intervals to half-open intervals (e.g. $x^2$ maps $(-1, 1)$ to $[0, 1)$).', kind: 'apply' }
    ]
  },

  {
    id: 'c.11.3.2', bartle: '11.3.3', sec: '11.3', kind: 'theorem', tier: 'ext',
    title: 'Preservation of Compactness under Continuous Maps',
    oneLine: 'The continuous image of a compact set is ALWAYS compact: compactness transfers across continuous functions.',
    statement: `Let $K \\subseteq \\mathbb{R}$ be a compact set, and let $f: K \\to \\mathbb{R}$ be continuous on $K$.
      <p>Then the image set $f(K) = \\{f(x) : x \\in K\\}$ is a <b>compact set</b> in $\\mathbb{R}$.</p>`,
    intuition: `<p>Take an open cover $\\{G_\\alpha\\}$ of the image $f(K)$. Pull each umbrella backwards using $f^{-1}(G_\\alpha)$. By the continuity theorem, those preimages form an open cover of the original set $K$!</p>
      <p>Because $K$ is compact, you only need finitely many umbrellas to cover $K$. Push those lucky umbrellas forward again: they cover $f(K)$! Done in 3 lines.</p>
      <p>This master theorem immediately proves:
      <br>1. <b>The Boundedness Theorem:</b> $f(K)$ is compact $\\implies$ bounded!
      <br>2. <b>The Maximum-Minimum Theorem:</b> $f(K)$ is compact $\\implies$ closed and bounded $\\implies$ attains its inf and sup!</p>`,
    needs: ['c.11.2.1', 'c.11.3.1'],
    traps: [
      `Continuous images preserve compactness and connectedness, but do NOT preserve openness (open sets can become closed or half-open) or boundedness alone.`
    ],
    proof: {
      idea: 'Pull any open cover {G_alpha} of f(K) back to {f^(-1)(G_alpha)}, which covers K; extract a finite subcover of K by compactness, then push forward.',
      why: 'Preimage of open cover is an open cover of the domain.',
      rungs: [
        {
          why: 'Let $\\mathcal{G} = \\{G_\\alpha\\}_{\\alpha \\in A}$ be an arbitrary open cover of $f(K)$.',
          m: '$$f(K) \\subseteq \\bigcup_{\\alpha \\in A} G_\\alpha$$',
          meaning: 'What this really means: Start with any collection of open sets covering the image.'
        },
        {
          why: 'For each $\\alpha$, since $G_\\alpha$ is open and $f$ is continuous, the preimage $f^{-1}(G_\\alpha)$ is open in $K$.',
          m: '$$K \\subseteq f^{-1}(f(K)) \\subseteq f^{-1}\\left(\\bigcup_{\\alpha \\in A} G_\\alpha\\right) = \\bigcup_{\\alpha \\in A} f^{-1}(G_\\alpha)$$',
          meaning: 'What this really means: Pull the umbrellas backwards to cover the original domain set.'
        },
        {
          why: 'Since $K$ is compact, the open cover $\\{f^{-1}(G_\\alpha)\\}$ has a finite subcover: there exist indices $\\alpha_1, \\dots, \\alpha_m$ such that $K \\subseteq \\bigcup_{j=1}^m f^{-1}(G_{\\alpha_j})$.',
          m: '$$K \\subseteq \\bigcup_{j=1}^m f^{-1}(G_{\\alpha_j})$$',
          meaning: 'What this really means: Compactness of the domain lets us discard all but a finite handful of umbrellas.'
        },
        {
          why: 'Apply $f$ to both sides: $f(K) \\subseteq f\\left(\\bigcup_{j=1}^m f^{-1}(G_{\\alpha_j})\\right) = \\bigcup_{j=1}^m f(f^{-1}(G_{\\alpha_j})) \\subseteq \\bigcup_{j=1}^m G_{\\alpha_j}$.',
          m: '$$f(K) \\subseteq \\bigcup_{j=1}^m G_{\\alpha_j}$$',
          meaning: 'What this really means: Pushing that finite selection forward completely covers the image set.'
        }
      ],
      ends: 'Since $\\{G_{\\alpha_1}, \\dots, G_{\\alpha_m}\\}$ is a finite subcover of $f(K)$, $f(K)$ is compact.'
    },
    cards: [
      { q: 'State the Preservation of Compactness Theorem.', a: 'If $K$ is compact and $f$ is continuous, then $f(K)$ is compact.', kind: 'state' },
      { q: 'How does the Extreme Value Theorem follow from this theorem?', a: 'Since $f(K)$ is compact in $\\mathbb{R}$, by Heine-Borel it is closed and bounded; hence it contains its supremum and infimum.', kind: 'recall' }
    ]
  },

  {
    id: 'c.11.4.1', bartle: '11.4.1', sec: '11.4', kind: 'definition', tier: 'ext',
    title: 'Metric Spaces: Definitions and Axioms',
    oneLine: 'A metric space replaces the distance |x - y| with an abstract distance function d(x, y) satisfying three simple axioms.',
    statement: `A <b>metric space</b> $(M, d)$ consists of a non-empty set $M$ and a function $d: M \\times M \\to \\mathbb{R}$ (called a <b>metric</b> or distance) satisfying for all $x, y, z \\in M$:
      <p>(1) <b>Positivity:</b> $d(x, y) \\ge 0$, and $d(x, y) = 0 \\iff x = y$.</p>
      <p>(2) <b>Symmetry:</b> $d(x, y) = d(y, x)$.</p>
      <p>(3) <b>Triangle Inequality:</b> $d(x, z) \\le d(x, y) + d(y, z)$.</p>
      <p>The <b>open ball</b> of radius $r > 0$ centered at $x_0$ is $B(x_0, r) = \\{x \\in M : d(x, x_0) < r\\}$.</p>`,
    intuition: `<p>Everything you learned in Real Analysis on the real line $\\mathbb{R}$ used distance $|x - y|$.</p>
      <p>A metric space frees analysis from numbers! You can measure distance between:
      <br>• Vectors in $\\mathbb{R}^n$: Euclidean metric $\\sqrt{\\sum (x_i - y_i)^2}$.
      <br>• Continuous functions in $C[a, b]$: Uniform metric $d_\\infty(f, g) = \\sup |f(x) - g(x)|$.
      <br>• Sequences in $\\ell^2$: $d(x, y) = \\sqrt{\\sum (x_k - y_k)^2}$.</p>
      <p>All limit laws, continuity, and Cauchy criteria immediately generalize!</p>`,
    needs: ['c.2.2.1'],
    traps: [
      `A metric space has NO ordering ($x < y$ is meaningless for functions or vectors!), and NO addition or multiplication (unless it is also a normed vector space). Only distance exists!`
    ],
    cards: [
      { q: 'State the three axioms of a metric space.', a: '(1) Positivity: $d(x,y) \\ge 0$ with equality iff $x=y$; (2) Symmetry: $d(x,y) = d(y,x)$; (3) Triangle Inequality: $d(x,z) \\le d(x,y) + d(y,z)$.', kind: 'state' },
      { q: 'Define the open ball $B(x_0, r)$ in a metric space $(M, d)$.', a: '$B(x_0, r) = \\{x \\in M : d(x, x_0) < r\\}$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.11.4.2', bartle: '11.4.3', sec: '11.4', kind: 'definition', tier: 'ext',
    title: 'Completeness and Cauchy Sequences in Metric Spaces',
    oneLine: 'A metric space is complete if every sequence whose terms cluster together is guaranteed to converge to a limit inside the space.',
    statement: `Let $(M, d)$ be a metric space.
      <p>(a) A sequence $(x_n)$ in $M$ is a <b>Cauchy sequence</b> if for every $\\varepsilon > 0$, there exists $K \\in \\mathbb{N}$ such that:
      $$m, n \\ge K \\implies d(x_m, x_n) < \\varepsilon$$</p>
      <p>(b) The metric space $(M, d)$ is said to be <b>complete</b> if every Cauchy sequence in $M$ converges to an element in $M$.</p>
      <p><b>Examples:</b>
      <br>• $(\\mathbb{R}, |\\cdot|)$ and $(\\mathbb{R}^n, d_2)$ are <b>complete</b>.
      <br>• $(C[a, b], d_\\infty)$ is <b>complete</b> (uniform limit of continuous functions is continuous!).
      <br>• $(\\mathbb{Q}, |\\cdot|)$ is <b>incomplete</b> (sequences of rationals like $(1 + 1/n)^n$ converge to $e \\notin \\mathbb{Q}$).</p>`,
    intuition: `<p>A metric space is "complete" if it has no missing points or holes.</p>
      <p>$\\mathbb{Q}$ has infinitely many holes (all the irrationals like $\\sqrt{2}$ and $\\pi$ are missing). $\\mathbb{R}$ filled in all those holes using Dedekind cuts and the Completeness Property.</p>
      <p>In higher analysis, completeness is what powers the <b>Banach Fixed-Point Theorem</b> (which proves solutions to differential and integral equations exist!).</p>`,
    needs: ['c.11.4.1', 'c.3.5.1', 'c.2.3.6'],
    traps: [
      `In every metric space, convergent sequences are ALWAYS Cauchy; but Cauchy sequences converge ONLY IF the space is complete!`,
      `$(0, 1)$ with standard metric is INCOMPLETE (the Cauchy sequence $1/n$ tries to converge to $0$, which is missing).`
    ],
    cards: [
      { q: 'Define a complete metric space.', a: 'A metric space in which every Cauchy sequence converges to a point in the space.', kind: 'state' },
      { q: 'Why is $(\\mathbb{Q}, |\\cdot|)$ not a complete metric space?', a: 'Because a Cauchy sequence of rational numbers can converge to an irrational limit (e.g. approximations to $\\sqrt{2}$), which does not belong to $\\mathbb{Q}$.', kind: 'apply' }
    ]
  }
);

