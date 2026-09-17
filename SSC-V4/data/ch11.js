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
  }
);
