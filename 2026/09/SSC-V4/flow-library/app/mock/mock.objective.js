/* ══════════════════════════════════════════════════════════════════════════
   MOCK objective bank — OMR-first questions (MCQ / MSQ / NAT).

   Placeholder content for the Level 1 review. Written in GATE/JAM style from
   the mock concept nodes; NOT extracted from any paper, and no exam, year or
   answer key is claimed. Every record carries mock:true and the app badges the
   whole bank as unvalidated. AGY owns the real bank — see "Runtime data
   contract" in HOOK_agy.md.

   Record shape the app reads:
     id sec course type marks neg negLabel time prompt
     options [{k,t}]            MCQ / MSQ only
     answer  'C' | ['A','C'] | {value, tol, dp}
     solution   the full worked answer, revealed only after the attempt is locked
     tested     the theorem / definition / trap actually being examined
     trap       where the marks get lost
     twist      { q, a } — a short changed-version follow-up (optional)
     tests      concept ids linking the question back to the notes
   ══════════════════════════════════════════════════════════════════════════ */

const MOCK_ORIGIN = {
  source: 'Mock — Claude-authored pattern question, not a past paper',
  review_required: true,
  review_note: 'Placeholder for Level 1 UI review. Mathematics self-checked; no official ' +
    'source, exam, year or answer key is claimed. Replace with validated data before use.'
};
const MO = locator => Object.assign({ locator }, MOCK_ORIGIN);

OBJECTIVE.push(

  { id: 'mo.01', course: 'ra1', sec: '2.3', type: 'MCQ', mock: true,
    marks: 2, neg: -2 / 3, negLabel: '−2/3', time: 90,
    prompt: `Let $S=\\left\\{\\,1-\\dfrac{1}{n}\\ :\\ n\\in\\mathbb{N}\\,\\right\\}$. Which statement is correct?`,
    options: [
      { k: 'A', t: `$\\sup S=1$ with $1\\in S$, and $\\inf S=0$ with $0\\in S$.` },
      { k: 'B', t: `$\\sup S=1$ but $1\\notin S$, and $\\inf S=0$ with $0\\in S$.` },
      { k: 'C', t: `$\\sup S$ does not exist, because $1\\notin S$.` },
      { k: 'D', t: `$\\sup S=1$ and $\\inf S=-1$.` }
    ],
    answer: 'B',
    solution: `<p>Write the set out: $S=\\left\\{0,\\ \\tfrac12,\\ \\tfrac23,\\ \\tfrac34,\\ \\ldots\\right\\}$.</p>
      <p><b>Upper end.</b> Every element satisfies $1-\\frac1n<1$, so $1$ is an upper bound, and it is
      the least one: given $\\varepsilon>0$ choose $n$ with $\\frac1n<\\varepsilon$, and then
      $1-\\frac1n>1-\\varepsilon$, so nothing below $1$ bounds $S$. Hence $\\sup S=1$. But
      $1-\\frac1n=1$ would need $\\frac1n=0$, so $1\\notin S$.</p>
      <p><b>Lower end.</b> The smallest element sits at $n=1$: $1-\\frac11=0$. So $\\inf S=0$, and
      here the bound <i>is</i> attained — $0=\\min S\\in S$.</p>
      <p>Option <b>B</b>: one end attained, the other not.</p>`,
    tested: `The definition of supremum and infimum, through the $\\varepsilon$-test. The real target
      is the difference between <i>supremum</i> and <i>maximum</i>.`,
    tests: ['m.2.3.2'],
    trap: `“The supremum must be an element of the set.” Only a <i>maximum</i> has to be attained.
      Option C goes further down the same road: $1\\notin S$ does not stop $1$ from being the least
      upper bound.`,
    twist: { q: `Same question for $T=\\left\\{1+\\dfrac1n:n\\in\\mathbb{N}\\right\\}$ — which end is attained now?`,
      a: `$\\sup T=2$, attained at $n=1$; $\\inf T=1$, <b>not</b> attained. The roles have swapped.` },
    provenance: MO('mock §2.3, definition of supremum') },

  { id: 'mo.02', course: 'ra1', sec: '2.3', type: 'MSQ', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 120,
    prompt: `Let $S\\subseteq\\mathbb{R}$ be nonempty and bounded above, and let $u\\in\\mathbb{R}$.
      Which of the following are <b>equivalent</b> to “$u=\\sup S$”?`,
    options: [
      { k: 'A', t: `$u$ is an upper bound of $S$, and for every $\\varepsilon>0$ there exists $s_\\varepsilon\\in S$ with $u-\\varepsilon<s_\\varepsilon$.` },
      { k: 'B', t: `$u$ is an upper bound of $S$, and no number smaller than $u$ is an upper bound of $S$.` },
      { k: 'C', t: `$u\\in S$ and $s\\le u$ for every $s\\in S$.` },
      { k: 'D', t: `For every $\\varepsilon>0$ there exists $s\\in S$ with $|s-u|<\\varepsilon$.` }
    ],
    answer: ['A', 'B'],
    solution: `<p><b>A</b> is the $\\varepsilon$-characterisation of the supremum. Both halves are
      needed: $u$ bounds $S$ above, and elements of $S$ come arbitrarily close to $u$.</p>
      <p><b>B</b> is the phrase “least upper bound” unpacked — the definition itself.</p>
      <p><b>C</b> says $u=\\max S$. That <i>implies</i> $u=\\sup S$ but is strictly stronger, so it is
      not equivalent: for $S=\\{1-\\frac1n\\}$ we have $\\sup S=1\\notin S$, so C fails while
      $u=\\sup S$ holds.</p>
      <p><b>D</b> drops the upper-bound half and collapses. Take $S=(0,1)$, $u=\\tfrac12$: every
      $\\varepsilon$-neighbourhood of $\\tfrac12$ meets $S$, so D holds — yet $\\tfrac12$ is not even
      an upper bound.</p>
      <p>Correct set: <b>A and B</b>.</p>`,
    tested: `The $\\varepsilon$-characterisation of $\\sup$ against the definition, plus the two
      standard confusions: supremum vs maximum, and “close to $S$” vs “bounds $S$”.`,
    tests: ['m.2.3.2'],
    trap: `Quoting only the second half of the $\\varepsilon$-characterisation. “There are elements
      arbitrarily close to $u$” is worth nothing alone — every interior point of $S$ has that
      property. In a written proof, dropping the upper-bound clause is where marks go.`,
    twist: { q: `If you add “and $u$ is an upper bound of $S$” to option D, does D become equivalent?`,
      a: `Yes — and then D <i>is</i> option A, because $|s-u|<\\varepsilon$ together with $s\\le u$
        forces $u-\\varepsilon<s\\le u$. The upper-bound clause is the load-bearing half.` },
    provenance: MO('mock §2.3, ε-characterisation of the supremum') },

  { id: 'mo.03', course: 'ra1', sec: '2.3', type: 'NAT', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 120,
    prompt: `Let $S=\\{\\,x\\in\\mathbb{Q}\\ :\\ x>0 \\text{ and } x^{2}<3\\,\\}$, regarded as a subset
      of $\\mathbb{R}$. Then $\\sup S$, correct to two decimal places, is ______.`,
    answer: { value: 1.73, tol: 0.01, dp: 2 },
    solution: `<p><b>Existence first.</b> $S\\neq\\emptyset$ (take $x=1$) and $S$ is bounded above: if
      $x\\ge2$ then $x^{2}\\ge4>3$, so $2$ bounds $S$. The Completeness Property therefore hands us
      $u=\\sup S\\in\\mathbb{R}$ — and it is completeness doing the work, nothing else.</p>
      <p><b>Value.</b> The standard nudging argument rules out $u^{2}<3$ (you could increase $u$
      slightly and stay in $S$) and $u^{2}>3$ (you could decrease $u$ slightly and still bound $S$),
      leaving $u^{2}=3$. So $u=\\sqrt3=1.7320508\\ldots\\approx\\mathbf{1.73}$.</p>
      <p><b>The point.</b> $S$ consists of <i>rationals</i> but its supremum is irrational. Inside
      $\\mathbb{Q}$ this set has no least upper bound at all — that failure is exactly why
      completeness is an axiom about $\\mathbb{R}$.</p>`,
    tested: `The Completeness (Supremum) Property: a nonempty set bounded above has a supremum
      <i>in $\\mathbb{R}$</i>. Also square roots as suprema.`,
    tests: ['m.2.3.6', 'm.2.3.2'],
    trap: `Answering $3$ — that bounds $x^{2}$, not $x$. The other trap is “the supremum does not
      exist because $\\sqrt3\\notin\\mathbb{Q}$”: the supremum is taken in $\\mathbb{R}$, where it
      exists.`,
    twist: { q: `What is $\\sup\\{x\\in\\mathbb{Q}:x>0,\\ x^{2}<2\\}$?`,
      a: `$\\sqrt2\\approx1.41$ — same argument, again a rational set with an irrational supremum.` },
    provenance: MO('mock §2.3, completeness property') },

  { id: 'mo.04', course: 'ra1', sec: '3.4', type: 'MCQ', mock: true,
    marks: 2, neg: -2 / 3, negLabel: '−2/3', time: 90,
    prompt: `Let $x_{n}=\\sin\\!\\left(\\dfrac{n\\pi}{2}\\right)$ for $n\\in\\mathbb{N}$. Which
      statement is correct?`,
    options: [
      { k: 'A', t: `$(x_{n})$ converges to $0$, because $x_{n}=0$ for every even $n$.` },
      { k: 'B', t: `$(x_{n})$ is divergent: it has subsequences converging to $1$, to $-1$ and to $0$.` },
      { k: 'C', t: `$(x_{n})$ is unbounded, hence divergent.` },
      { k: 'D', t: `$(x_{n})$ converges, because it is bounded.` }
    ],
    answer: 'B',
    solution: `<p>The values cycle with period $4$:
      $$x_{1}=1,\\quad x_{2}=0,\\quad x_{3}=-1,\\quad x_{4}=0,\\quad x_{5}=1,\\ \\ldots$$
      so $x_{4k+1}=1$, $x_{4k+3}=-1$ and $x_{2k}=0$ give three subsequences with three different
      limits.</p>
      <p>Every subsequence of a convergent sequence converges to the same limit, so three
      subsequential limits make convergence impossible. Option <b>B</b>.</p>
      <p><b>A</b> uses one subsequence and ignores the rest. <b>C</b> is false: $|x_{n}|\\le1$, so the
      sequence is bounded — it diverges by oscillation, not by escaping. <b>D</b> is the classic
      misreading of Bolzano–Weierstrass, which promises only a convergent <i>subsequence</i>.</p>`,
    tested: `The divergence criterion via subsequences: all subsequences of a convergent sequence
      share its limit. The trap under test is “bounded $\\Rightarrow$ convergent”.`,
    tests: ['m.3.4.8'],
    trap: `Two errors, both worth marks: concluding convergence from one well-behaved subsequence,
      and upgrading boundedness to convergence. Bounded <i>and monotone</i> converges; bounded alone
      gives only a convergent subsequence.`,
    twist: { q: `What changes for $x_{n}=\\sin(n\\pi)$?`,
      a: `$x_{n}=0$ for every $n$, so the sequence is constant and converges to $0$. Dropping the
        $\\tfrac12$ from the argument removes the oscillation entirely.` },
    provenance: MO('mock §3.4, subsequences and divergence') },

  { id: 'mo.05', course: 'ra1', sec: '3.4', type: 'MSQ', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 120,
    prompt: `Which of the following are <b>guaranteed</b> by the Bolzano–Weierstrass Theorem?`,
    options: [
      { k: 'A', t: `Every bounded sequence of real numbers has a convergent subsequence.` },
      { k: 'B', t: `Every sequence in $[0,1]$ has a subsequence converging to a point of $[0,1]$.` },
      { k: 'C', t: `Every bounded sequence of real numbers converges.` },
      { k: 'D', t: `A bounded sequence has exactly one subsequential limit.` }
    ],
    answer: ['A', 'B'],
    solution: `<p><b>A</b> is the theorem itself.</p>
      <p><b>B</b> follows in two steps: a sequence in $[0,1]$ is bounded, so some subsequence
      converges, say $x_{n_{k}}\\to x$; and $0\\le x_{n_{k}}\\le1$ passes to the limit, so
      $x\\in[0,1]$. The <i>closedness</i> of the interval is what keeps the limit inside — exactly
      the hypothesis that fails on $(0,1)$.</p>
      <p><b>C</b> is false: $x_{n}=(-1)^{n}$ is bounded and divergent. <b>D</b> is false for the same
      sequence, with subsequential limits $1$ and $-1$.</p>
      <p>Correct set: <b>A and B</b>.</p>`,
    tested: `Bolzano–Weierstrass, plus the fact that a closed interval contains the limits of its
      sequences — the pair of facts every compactness proof in §5.3 and §5.4 leans on.`,
    tests: ['m.3.4.8'],
    trap: `Reading “has a convergent subsequence” as “converges”. The theorem never promises the
      whole sequence anything; it extracts something well behaved from something badly behaved.`,
    twist: { q: `Does every sequence in the <i>open</i> interval $(0,1)$ have a subsequence
        converging to a point of $(0,1)$?`,
      a: `No. $x_{n}=1/n$ lies in $(0,1)$ but every subsequence converges to $0\\notin(0,1)$.
        Bolzano–Weierstrass still applies — the limit just need not land in the set.` },
    provenance: MO('mock §3.4, Bolzano–Weierstrass') },

  { id: 'mo.06', course: 'ra1', sec: '3.4', type: 'NAT', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 90,
    prompt: `Let $x_{n}=(-1)^{n}+\\dfrac{1}{n}$. The number of distinct subsequential limits of
      $(x_{n})$ is ______.`,
    answer: { value: 2, tol: 0, dp: 0 },
    solution: `<p>Split by parity. Even $n$: $x_{n}=1+\\frac1n\\to1$. Odd $n$: $x_{n}=-1+\\frac1n\\to-1$.
      So $1$ and $-1$ are subsequential limits.</p>
      <p>Nothing else can be: any subsequence uses infinitely many even or infinitely many odd
      indices, so it has a further subsequence tending to $1$ or to $-1$; if the subsequence itself
      converges, its limit is that value. Hence exactly $\\mathbf{2}$.</p>`,
    tested: `Subsequences and their limits: the set of subsequential limits is what decides
      convergence — one limit means convergent, more than one means divergent.`,
    tests: ['m.3.4.8'],
    trap: `Counting $0$ as a third limit because $\\frac1n\\to0$. The perturbation tends to $0$; the
      sequence never does, since $|x_{n}|\\ge1-\\frac1n$.`,
    twist: { q: `How many for $x_{n}=\\sin\\!\\left(\\frac{n\\pi}{2}\\right)$?`,
      a: `Three: $1$, $0$ and $-1$ — the period-$4$ cycle from question 4.` },
    provenance: MO('mock §3.4, subsequential limits') },

  { id: 'mo.07', course: 'ra2', sec: '5.1', type: 'MCQ', mock: true,
    marks: 2, neg: -2 / 3, negLabel: '−2/3', time: 90,
    prompt: `Which statement is the <b>Sequential Criterion</b> for continuity of
      $f:A\\to\\mathbb{R}$ at $c\\in A$?`,
    options: [
      { k: 'A', t: `$f$ is continuous at $c$ $\\iff$ for every sequence $(x_{n})$ in $A$ with $x_{n}\\to c$, $f(x_{n})\\to f(c)$.` },
      { k: 'B', t: `$f$ is continuous at $c$ $\\iff$ there exists a sequence $(x_{n})$ in $A$ with $x_{n}\\to c$ and $f(x_{n})\\to f(c)$.` },
      { k: 'C', t: `$f$ is continuous at $c$ $\\iff$ for every sequence $(x_{n})$ in $A$ with $f(x_{n})\\to f(c)$, $x_{n}\\to c$.` },
      { k: 'D', t: `$f$ is continuous at $c$ $\\iff$ for every sequence $(x_{n})$ in $A$ with $x_{n}\\to c$, the sequence $(f(x_{n}))$ is bounded.` }
    ],
    answer: 'A',
    solution: `<p><b>A</b> is the criterion, and the quantifier “for every sequence” is the whole
      content of it.</p>
      <p><b>B</b> is vacuous: the constant sequence $x_{n}=c$ satisfies $x_{n}\\to c$ and
      $f(x_{n})=f(c)\\to f(c)$ for <i>every</i> function, continuous or not. So B holds for
      $\\operatorname{sgn}$ at $0$, which is discontinuous there.</p>
      <p><b>C</b> reverses the implication, and is not even necessary: for the continuous constant
      function $f\\equiv5$ take $x_{n}=n$; then $f(x_{n})\\to5=f(c)$ while $x_{n}\\not\\to c$.</p>
      <p><b>D</b> is far too weak: for $f=\\operatorname{sgn}$ and any $x_{n}\\to0$ the images lie in
      $\\{-1,0,1\\}$, hence are bounded, yet $\\operatorname{sgn}$ is discontinuous at $0$.</p>`,
    tested: `The Sequential Criterion for continuity, and specifically its quantifier structure
      (“for every sequence”, not “for some”) and the direction of the implication.`,
    tests: ['m.5.1.3', 'm.5.1.1'],
    trap: `Swapping $\\forall$ and $\\exists$, or reversing the implication. The same slip costs marks
      in written proofs, where the criterion is usually applied in its contrapositive form.`,
    twist: { q: `What is the practical form of this criterion for proving <i>discontinuity</i>?`,
      a: `The Discontinuity Criterion: exhibit <b>one</b> sequence $x_{n}\\to c$ in $A$ with
        $f(x_{n})\\not\\to f(c)$. One witness suffices.` },
    provenance: MO('mock §5.1, sequential criterion') },

  { id: 'mo.08', course: 'ra2', sec: '5.1', type: 'NAT', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 90,
    prompt: `Let $f(x)=3x+2$ and $c=1$. For $\\varepsilon=0.06$, the largest $\\delta>0$ such that
      $|x-1|<\\delta$ guarantees $|f(x)-f(1)|<\\varepsilon$ is ______.`,
    answer: { value: 0.02, tol: 0.001, dp: 2 },
    solution: `<p>Compute the image gap exactly:
      $$|f(x)-f(1)|=|3x+2-5|=3|x-1|.$$
      So $|f(x)-f(1)|<0.06$ holds precisely when $3|x-1|<0.06$, i.e. $|x-1|<0.02$.</p>
      <p>Every $\\delta\\le0.02$ works and $\\delta=0.02$ is the largest, so
      $\\delta_{\\max}=\\mathbf{0.02}$.</p>
      <p>In general this is the Lipschitz-style recipe $\\delta=\\varepsilon/K$ with $K=3$ the slope.</p>`,
    tested: `The $\\varepsilon$–$\\delta$ definition of continuity, used forwards: converting a
      demanded $\\varepsilon$ into an actual $\\delta$ through the estimate $|f(x)-f(c)|\\le K|x-c|$.`,
    tests: ['m.5.1.1'],
    trap: `Answering $0.06$ (forgetting the factor $3$) or $0.18$ (multiplying instead of dividing).
      The slope divides the tolerance; a steeper function needs a smaller $\\delta$.`,
    twist: { q: `Does this $\\delta$ depend on the point $c$?`,
      a: `No — $\\delta=\\varepsilon/3$ works at every $c$, which is precisely why $3x+2$ is
        <i>uniformly</i> continuous on $\\mathbb{R}$.` },
    provenance: MO('mock §5.1, ε–δ definition') },

  { id: 'mo.09', course: 'ra2', sec: '5.3', type: 'MCQ', mock: true,
    marks: 2, neg: -2 / 3, negLabel: '−2/3', time: 90,
    prompt: `The function $f(x)=1/x$ is continuous on $A=(0,1]$ yet has no maximum on $A$. Which is
      the correct explanation?`,
    options: [
      { k: 'A', t: `$f$ is not continuous on $A$.` },
      { k: 'B', t: `The Maximum–Minimum Theorem requires a closed bounded interval, and $A$ is not closed.` },
      { k: 'C', t: `This contradicts the Maximum–Minimum Theorem.` },
      { k: 'D', t: `$f$ attains neither a maximum nor a minimum on $A$.` }
    ],
    answer: 'B',
    solution: `<p>The theorem applies to a <i>closed bounded</i> interval $[a,b]$. Here $A=(0,1]$ is
      bounded but not closed — the endpoint $0$ is missing — so the theorem simply does not apply,
      and there is nothing to contradict. Option <b>B</b>.</p>
      <p>And $f$ really is unbounded above on $A$: $f(1/n)=n\\to\\infty$.</p>
      <p><b>D</b> is false, which is the interesting part: on $(0,1]$ we have $1/x\\ge1$ with equality
      at $x=1$, so $f$ <i>does</i> attain the minimum value $1$. Half the conclusion survives the
      loss of the hypothesis; the other half does not.</p>`,
    tested: `The Maximum–Minimum Theorem and its hypotheses — continuity plus a closed <i>and</i>
      bounded interval — and the habit of checking hypotheses before invoking a conclusion.`,
    tests: ['m.5.3.4'],
    trap: `Remembering the conclusion without the hypotheses, and assuming that when a theorem fails
      to apply, all of its conclusions fail. Here the minimum is still attained.`,
    twist: { q: `What happens on $\\left[\\tfrac12,1\\right]$?`,
      a: `Closed and bounded, so the theorem applies: maximum $2$ at $x=\\tfrac12$ and minimum $1$ at
        $x=1$, both attained.` },
    provenance: MO('mock §5.3, maximum–minimum theorem') },

  { id: 'mo.10', course: 'ra2', sec: '5.3', type: 'MSQ', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 120,
    prompt: `Let $f$ be continuous on $[a,b]$. Which of the following follow from Bolzano's
      Intermediate Value Theorem?`,
    options: [
      { k: 'A', t: `If $f(a)f(b)<0$ then $f(c)=0$ for some $c\\in(a,b)$.` },
      { k: 'B', t: `$f$ takes every value strictly between $f(a)$ and $f(b)$ somewhere on $(a,b)$.` },
      { k: 'C', t: `If $f(c)=0$ for some $c\\in(a,b)$ then $f(a)f(b)<0$.` },
      { k: 'D', t: `$f$ is injective on $[a,b]$.` }
    ],
    answer: ['A', 'B'],
    solution: `<p><b>A</b> is the Location of Roots case: opposite signs at the endpoints means $0$
      lies strictly between $f(a)$ and $f(b)$, so it is attained.</p>
      <p><b>B</b> is the theorem itself.</p>
      <p><b>C</b> is the false converse. Take $f(x)=x^{2}$ on $[-1,1]$: there is a root at $c=0$,
      yet $f(-1)f(1)=1>0$. A root does not require a sign change.</p>
      <p><b>D</b> is false for the same $f$: $f(-1)=f(1)=1$. The IVT says the function misses no
      intermediate value, not that it hits each value once.</p>
      <p>Correct set: <b>A and B</b>.</p>`,
    tested: `The Intermediate Value Theorem and its Location of Roots case, and the direction of the
      implication (existence of a root vs a sign change).`,
    tests: ['m.5.3.7'],
    trap: `Running the IVT backwards to conclude a sign change from a root. In “show the equation has
      exactly one root” problems the IVT only supplies existence — uniqueness needs monotonicity.`,
    twist: { q: `How do you upgrade “at least one root” to “exactly one root”?`,
      a: `Add strict monotonicity: if $f'>0$ throughout the interval, $f$ is strictly increasing, so
        it can cross a level at most once.` },
    provenance: MO('mock §5.3, intermediate value theorem') },

  { id: 'mo.11', course: 'ra2', sec: '5.3', type: 'NAT', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 120,
    prompt: `The number of real roots of $p(x)=x^{3}-3x+1$ lying in the interval $(0,1)$ is ______.`,
    answer: { value: 1, tol: 0, dp: 0 },
    solution: `<p><b>At least one.</b> $p(0)=1>0$ and $p(1)=1-3+1=-1<0$, so by the Location of Roots
      case of the IVT there is a root in $(0,1)$.</p>
      <p><b>At most one.</b> $p'(x)=3x^{2}-3=3(x^{2}-1)<0$ for $0<x<1$, so $p$ is strictly decreasing
      on $[0,1]$ and can cross zero only once.</p>
      <p>Exactly $\\mathbf{1}$. (For the record $p$ has three real roots overall, near $-1.879$,
      $0.347$ and $1.532$ — only one of them is in $(0,1)$.)</p>`,
    tested: `The IVT for existence together with the sign of $p'$ for uniqueness — the standard
      two-step “exactly one root” argument.`,
    tests: ['m.5.3.7', 'm.6.2.4'],
    trap: `Answering $3$: that counts all real roots of the cubic and ignores the interval. Answering
      $0$ from “a cubic's roots are spread out” is the other version of not testing the endpoints.`,
    twist: { q: `How many roots in $(1,2)$?`,
      a: `Exactly one: $p(1)=-1<0$, $p(2)=3>0$ gives existence, and $p'>0$ on $(1,2)$ gives
        uniqueness.` },
    provenance: MO('mock §5.3, location of roots') },

  { id: 'mo.12', course: 'ra2', sec: '5.4', type: 'MCQ', mock: true,
    marks: 2, neg: -2 / 3, negLabel: '−2/3', time: 120,
    prompt: `Which function is <b>uniformly continuous</b> on the set shown?`,
    options: [
      { k: 'A', t: `$f(x)=1/x$ on $(0,1)$` },
      { k: 'B', t: `$f(x)=x^{2}$ on $\\mathbb{R}$` },
      { k: 'C', t: `$f(x)=\\sqrt{x}$ on $[0,\\infty)$` },
      { k: 'D', t: `$f(x)=\\sin(1/x)$ on $(0,1)$` }
    ],
    answer: 'C',
    solution: `<p><b>C is uniformly continuous</b>, in two overlapping pieces. On $[0,1]$: continuous
      on a closed bounded interval, so uniformly continuous by the Uniform Continuity Theorem. On
      $[1,\\infty)$:
      $$|\\sqrt{x}-\\sqrt{u}|=\\frac{|x-u|}{\\sqrt{x}+\\sqrt{u}}\\le\\tfrac12|x-u|,$$
      so $f$ is Lipschitz there, hence uniformly continuous. Given $\\varepsilon$, take the smaller
      of the two $\\delta$'s; the pieces overlap at $x=1$, which is what makes the patch legitimate.</p>
      <p><b>A</b> fails: $x_{n}=1/n$, $u_{n}=1/(n+1)$ give $|x_{n}-u_{n}|\\to0$ but
      $|f(x_{n})-f(u_{n})|=1$.</p>
      <p><b>B</b> fails: $x_{n}=n+\\frac1n$, $u_{n}=n$ give $|x_{n}-u_{n}|=\\frac1n\\to0$ but
      $|x_{n}^{2}-u_{n}^{2}|=2+\\frac1{n^{2}}\\ge2$.</p>
      <p><b>D</b> fails: with $x_{n}=\\frac{2}{(4n+1)\\pi}$ and $u_{n}=\\frac{2}{(4n+3)\\pi}$ both
      tending to $0$, $f(x_{n})=1$ and $f(u_{n})=-1$, a permanent gap of $2$.</p>`,
    tested: `Uniform continuity against its two standard sources (a closed bounded domain, or a
      Lipschitz bound) and the nonuniform continuity criterion for the failures.`,
    tests: ['m.5.4.1', 'm.5.4.3'],
    trap: `Two beliefs to unlearn: that uniform continuity needs a bounded or compact domain
      ($\\sqrt{x}$ on $[0,\\infty)$ is fine), and that it implies Lipschitz ($\\sqrt{x}$ on $[0,1]$
      is uniformly continuous but not Lipschitz).`,
    twist: { q: `Is $\\sqrt{x}$ Lipschitz on $[0,1]$?`,
      a: `No: $\\dfrac{\\sqrt{x}-\\sqrt{0}}{x-0}=\\dfrac{1}{\\sqrt{x}}\\to\\infty$ as $x\\to0^{+}$, so no
        constant $K$ works. Uniformly continuous does not imply Lipschitz.` },
    provenance: MO('mock §5.4, uniform continuity') },

  { id: 'mo.13', course: 'ra2', sec: '5.4', type: 'MSQ', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 120,
    prompt: `Which of the following statements are true?`,
    options: [
      { k: 'A', t: `Every Lipschitz function on $A\\subseteq\\mathbb{R}$ is uniformly continuous on $A$.` },
      { k: 'B', t: `Every uniformly continuous function on $A$ is Lipschitz on $A$.` },
      { k: 'C', t: `Every continuous function on a closed bounded interval is uniformly continuous there.` },
      { k: 'D', t: `Every uniformly continuous function on $\\mathbb{R}$ is bounded.` }
    ],
    answer: ['A', 'C'],
    solution: `<p><b>A</b> is true with the explicit choice $\\delta=\\varepsilon/K$: if
      $|f(x)-f(u)|\\le K|x-u|$ then $|x-u|<\\varepsilon/K$ forces $|f(x)-f(u)|<\\varepsilon$, and this
      $\\delta$ does not depend on the point.</p>
      <p><b>C</b> is the Uniform Continuity Theorem.</p>
      <p><b>B</b> is false: $\\sqrt{x}$ on $[0,1]$ is uniformly continuous (closed bounded interval)
      but not Lipschitz, since $1/\\sqrt{x}$ is unbounded near $0$.</p>
      <p><b>D</b> is false: $f(x)=x$ is Lipschitz with $K=1$, hence uniformly continuous on
      $\\mathbb{R}$, and plainly unbounded.</p>
      <p>Correct set: <b>A and C</b>.</p>`,
    tested: `The implication chain Lipschitz $\\Rightarrow$ uniformly continuous $\\Rightarrow$
      continuous, and the Uniform Continuity Theorem — with the reminder that neither arrow reverses.`,
    tests: ['m.5.4.1', 'm.5.4.3'],
    trap: `Reading the implications as equivalences, and confusing uniform continuity with
      boundedness. Uniform continuity controls <i>differences</i> of values, not their size.`,
    twist: { q: `On a closed bounded interval, does continuous $\\Rightarrow$ Lipschitz?`,
      a: `No. $\\sqrt{x}$ on $[0,1]$ is continuous, hence uniformly continuous, but not Lipschitz.
        Compactness buys uniformity, never a Lipschitz constant.` },
    provenance: MO('mock §5.4, Lipschitz and uniform continuity') },

  { id: 'mo.14', course: 'ra2', sec: '6.2', type: 'NAT', mock: true,
    marks: 2, neg: 0, negLabel: 'none', time: 90,
    prompt: `For $f(x)=x^{2}$ on $[1,3]$, the value $c\\in(1,3)$ supplied by the Mean Value Theorem
      satisfies $c=$ ______.`,
    answer: { value: 2, tol: 0, dp: 0 },
    solution: `<p>The MVT requires $f'(c)$ to equal the average rate of change:
      $$f'(c)=\\frac{f(3)-f(1)}{3-1}=\\frac{9-1}{2}=4.$$
      Since $f'(x)=2x$, this gives $2c=4$, so $c=\\mathbf{2}$ — which does lie in $(1,3)$.</p>
      <p>For any quadratic the MVT point is the midpoint of the interval; that is special to
      quadratics.</p>`,
    tested: `The Mean Value Theorem, used computationally: the conclusion is an equation
      $f'(c)=\\dfrac{f(b)-f(a)}{b-a}$ to be solved for $c$.`,
    tests: ['m.6.2.4'],
    trap: `Averaging the function <i>values</i> — $(9+1)/2=5$ — instead of solving for the point
      where the derivative equals the average rate of change.`,
    twist: { q: `Find $c$ for $f(x)=x^{3}$ on $[0,3]$.`,
      a: `$3c^{2}=\\frac{27-0}{3}=9$, so $c=\\sqrt3\\approx1.73$ — <i>not</i> the midpoint $1.5$.` },
    provenance: MO('mock §6.2, mean value theorem') },

  { id: 'mo.15', course: 'ra2', sec: '6.2', type: 'MCQ', mock: true,
    marks: 2, neg: -2 / 3, negLabel: '−2/3', time: 90,
    prompt: `On which of these functions do the hypotheses of <b>Rolle's Theorem</b> fail on
      $[-1,1]$?`,
    options: [
      { k: 'A', t: `$f(x)=|x|$` },
      { k: 'B', t: `$f(x)=x^{2}-1$` },
      { k: 'C', t: `$f(x)=\\sin(\\pi x)$` },
      { k: 'D', t: `$f(x)=\\cos(\\pi x)$` }
    ],
    answer: 'A',
    solution: `<p>Rolle needs three things: continuity on $[a,b]$, differentiability on $(a,b)$, and
      $f(a)=f(b)$.</p>
      <p><b>A.</b> $|x|$ is continuous on $[-1,1]$ and $f(-1)=1=f(1)$ — the two easy hypotheses hold,
      which is exactly why this case is tempting. But $|x|$ is not differentiable at
      $0\\in(-1,1)$, so Rolle does not apply; and its conclusion genuinely fails, since
      $f'(x)=\\pm1$ wherever it exists and is never $0$.</p>
      <p><b>B.</b> Polynomial, $f(-1)=0=f(1)$: Rolle applies and $c=0$ works.</p>
      <p><b>C.</b> $\\sin(-\\pi)=0=\\sin(\\pi)$: Rolle applies, e.g. $c=\\pm\\tfrac12$.</p>
      <p><b>D.</b> $\\cos(-\\pi)=-1=\\cos(\\pi)$: Rolle applies and $c=0$ works.</p>`,
    tested: `Rolle's Theorem — all three hypotheses, and the fact that differentiability is required
      on the open interval but is genuinely required there.`,
    tests: ['m.6.2.4'],
    trap: `Checking only $f(a)=f(b)$ and continuity. $|x|$ is the standard counterexample showing
      differentiability cannot be dropped, and a corner is easy to miss when you only look at values.`,
    twist: { q: `What about $f(x)=x^{2/3}$ on $[-1,1]$?`,
      a: `Same failure: $f(-1)=f(1)=1$ and $f$ is continuous, but $f'(x)=\\tfrac23x^{-1/3}$ does not
        exist at $0$ and is never $0$ — so Rolle again does not apply.` },
    provenance: MO('mock §6.2, Rolle’s theorem') },

  { id: 'mo.16', course: 'ra2', sec: '5.4', type: 'MCQ', mock: true,
    marks: 2, neg: -2 / 3, negLabel: '−2/3', time: 90,
    prompt: `The Maximum–Minimum Theorem and the Uniform Continuity Theorem are both proved by
      contradiction, and both proofs turn on the <i>same</i> underlying theorem. Which one?`,
    options: [
      { k: 'A', t: `The Archimedean Property` },
      { k: 'B', t: `The Bolzano–Weierstrass Theorem` },
      { k: 'C', t: `The Intermediate Value Theorem` },
      { k: 'D', t: `The Cauchy Convergence Criterion` }
    ],
    answer: 'B',
    solution: `<p>Both proofs have the same four moves. Assume the conclusion fails; build a sequence
      in the closed bounded interval that witnesses the failure ($|f(x_{n})|>n$ for boundedness; a
      pair of points closer than $1/n$ whose images stay $\\varepsilon_{0}$ apart for uniform
      continuity); extract a convergent subsequence — this is <b>Bolzano–Weierstrass</b>, and it is
      available because the interval is bounded; note the limit lies in the interval because it is
      closed; then contradict continuity at that limit.</p>
      <p>The IVT comes from a different argument (bisection / location of roots), Cauchy's criterion
      is not needed, and the Archimedean property appears only incidentally.</p>`,
    tested: `Proof architecture rather than a statement: Bolzano–Weierstrass is the compactness
      engine behind the interval theorems of §5.3 and §5.4.`,
    tests: ['m.3.4.8', 'm.5.3.4', 'm.5.4.3'],
    trap: `Learning theorem statements without their engines. In written exams the
      extract-a-subsequence step is where the marks sit, and it is the step students omit.`,
    twist: { q: `Which hypothesis makes the engine usable in both proofs?`,
      a: `Closed <i>and</i> bounded. Bounded gives the convergent subsequence; closed keeps its limit
        inside the interval — which is exactly why both theorems fail on $(0,1]$.` },
    provenance: MO('mock §5.3–5.4, shared proof structure') }

);
