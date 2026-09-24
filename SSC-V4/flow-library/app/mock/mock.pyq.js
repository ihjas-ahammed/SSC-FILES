/* ══════════════════════════════════════════════════════════════════════════
   MOCK Level 4 past papers — placeholder, not production content.

   Level 4 is the last rung, and it belongs to a COURSE rather than to a note:
   a JAM question is set on Real Analysis, not on Bartle §5.3, so it cannot
   hang off one theorem. A course is "all complete" when every past-paper
   question filed against it is worked through.

   These eight are written in the shape of IIT-JAM MA questions so the level-4
   loop can be exercised before the real extraction lands. They are standard
   problems, stated correctly — but they are NOT from any real paper, and the
   answers have not been checked against an official key. AGY extracts the real
   ones from `sources/exams/jam/` into `data/pyq.ra1.js` and `data/pyq.ra2.js`
   (HOOK_agy.md → "Level 4").

   Record shape — the QUESTIONS shape, plus the four fields that make a past
   paper a past paper:

     { id, course, exam, year, paper, qno, marks,
       sec?, tests?, title?, prompt, approach?, solution?, trap?,
       type?, options?, answer? }

   `course` is the only routing field the app needs. An entry that carries
   `type` + `options` + `answer` is answered on an OMR sheet like any objective
   question; one without is worked on paper and claimed. Progress is stored
   against 'p:<id>', so ids are permanent — see HOOK_agy.md rule 1.
   ══════════════════════════════════════════════════════════════════════════ */

PYQ.push(

  /* ── Real Analysis I ──────────────────────────────────────────────────── */
  { id: 'p.mock.ra1.2019.14', course: 'ra1', exam: 'JAM', year: 2019, paper: 'MA', qno: 14,
    marks: 2, mock: true, sec: '2.3', tests: ['m.2.3.2'],
    type: 'MCQ', neg: -0.5,
    title: 'Supremum of a bounded set',
    prompt: `<p>Let $S=\\left\\{\\,\\dfrac{n}{n+1}\\ :\\ n\\in\\mathbb{N}\\,\\right\\}$.
      Which of the following is true?</p>`,
    options: [
      { k: 'A', t: '$\\sup S = 1$ and it is attained' },
      { k: 'B', t: '$\\sup S = 1$ and it is not attained' },
      { k: 'C', t: '$\\sup S$ does not exist' },
      { k: 'D', t: '$\\sup S = \\tfrac12$' }
    ],
    answer: 'B',
    solution: `<p>The terms increase and $\\frac{n}{n+1}=1-\\frac{1}{n+1}<1$ for every $n$, so $1$ is
      an upper bound. For any $u<1$ the Archimedean property gives $n$ with $\\frac{1}{n+1}<1-u$,
      hence $\\frac{n}{n+1}>u$ and $u$ is not an upper bound. So $\\sup S = 1$; and no term equals
      $1$, so the supremum is not attained.</p>`,
    tested: `<p>That a supremum need not be a maximum — the whole reason the completeness axiom
      is stated with suprema rather than with maxima.</p>`,
    trap: `The set has no greatest element, which tempts the answer "no supremum". Boundedness
      above is all completeness asks for.` },

  { id: 'p.mock.ra1.2019.22', course: 'ra1', exam: 'JAM', year: 2019, paper: 'MA', qno: 22,
    marks: 5, mock: true, sec: '2.3', tests: ['m.2.3.6'],
    title: 'Supremum of a sum',
    prompt: `<p>Let $A,B\\subseteq\\mathbb{R}$ be non-empty and bounded above, and set
      $A+B=\\{a+b : a\\in A,\\ b\\in B\\}$. Prove that $\\sup(A+B)=\\sup A+\\sup B$.</p>`,
    approach: `<p>Two inequalities. One is a bound check; the other is an $\\varepsilon$ argument
      that uses the approximation property of the supremum on each set separately, with
      $\\varepsilon/2$ each.</p>`,
    solution: `<p>Write $\\alpha=\\sup A$, $\\beta=\\sup B$. For any $a\\in A$, $b\\in B$ we have
      $a+b\\le\\alpha+\\beta$, so $\\alpha+\\beta$ is an upper bound for $A+B$ and
      $\\sup(A+B)\\le\\alpha+\\beta$.</p>
      <p>Conversely let $\\varepsilon>0$. Choose $a\\in A$ with $a>\\alpha-\\varepsilon/2$ and
      $b\\in B$ with $b>\\beta-\\varepsilon/2$. Then $a+b>\\alpha+\\beta-\\varepsilon$, so
      $\\sup(A+B)>\\alpha+\\beta-\\varepsilon$ for every $\\varepsilon>0$, giving
      $\\sup(A+B)\\ge\\alpha+\\beta$.</p>`,
    trap: `Splitting the $\\varepsilon$ is not optional: picking $a>\\alpha-\\varepsilon$ and
      $b>\\beta-\\varepsilon$ only gives $\\alpha+\\beta-2\\varepsilon$.` },

  { id: 'p.mock.ra1.2018.09', course: 'ra1', exam: 'JAM', year: 2018, paper: 'MA', qno: 9,
    marks: 2, mock: true, sec: '3.4', tests: ['m.3.4.8'],
    type: 'MSQ',
    title: 'Bounded sequences and subsequences',
    prompt: `<p>Let $(x_n)$ be a bounded sequence of real numbers. Which of the following
      must be true?</p>`,
    options: [
      { k: 'A', t: '$(x_n)$ has a convergent subsequence' },
      { k: 'B', t: '$(x_n)$ converges' },
      { k: 'C', t: '$(x_n)$ has a monotone subsequence' },
      { k: 'D', t: '$(x_n)$ is Cauchy' }
    ],
    answer: ['A', 'C'],
    solution: `<p>(A) is Bolzano–Weierstrass. (C) is the monotone subsequence lemma, which holds
      for <i>every</i> real sequence, bounded or not. (B) and (D) fail for $x_n=(-1)^n$, which is
      bounded but oscillates.</p>`,
    tested: `<p>That boundedness buys you a convergent <i>subsequence</i> and nothing more.</p>`,
    trap: `A bounded sequence is not Cauchy — Cauchy is equivalent to convergence, which is
      strictly stronger.` },

  { id: 'p.mock.ra1.2017.31', course: 'ra1', exam: 'JAM', year: 2017, paper: 'MA', qno: 31,
    marks: 10, mock: true, sec: '3.4', tests: ['m.3.4.8'],
    title: 'Nested intervals and Bolzano–Weierstrass',
    prompt: `<p>Prove the Bolzano–Weierstrass theorem: every bounded sequence of real numbers
      has a convergent subsequence. You may use the nested interval property.</p>`,
    approach: `<p>Bisection. Keep the half that still contains infinitely many terms, and choose
      one index from each half with strictly increasing indices.</p>`,
    solution: `<p>Let $|x_n|\\le M$ and put $I_1=[-M,M]$. Given $I_k$ containing $x_n$ for
      infinitely many $n$, bisect it; at least one half contains $x_n$ for infinitely many $n$ —
      call it $I_{k+1}$. The $I_k$ are nested with $|I_k|=2M/2^{k-1}\\to0$, so by the nested
      interval property $\\bigcap I_k=\\{\\xi\\}$.</p>
      <p>Choose $n_1$ with $x_{n_1}\\in I_1$, and inductively $n_{k+1}>n_k$ with
      $x_{n_{k+1}}\\in I_{k+1}$ — possible because $I_{k+1}$ holds infinitely many terms. Then
      $|x_{n_k}-\\xi|\\le|I_k|\\to0$, so $x_{n_k}\\to\\xi$.</p>`,
    trap: `"Infinitely many terms" is the induction hypothesis that keeps the index choice
      possible; "non-empty" is not enough.` },

  /* ── Real Analysis II ─────────────────────────────────────────────────── */
  { id: 'p.mock.ra2.2019.11', course: 'ra2', exam: 'JAM', year: 2019, paper: 'MA', qno: 11,
    marks: 2, mock: true, sec: '5.3', tests: ['m.5.3.4'],
    type: 'MCQ', neg: -0.5,
    title: 'Where the Maximum–Minimum Theorem fails',
    prompt: `<p>On which of the following sets is every continuous real function guaranteed to
      attain a maximum?</p>`,
    options: [
      { k: 'A', t: '$(0,1)$' },
      { k: 'B', t: '$[0,1)$' },
      { k: 'C', t: '$[0,1]$' },
      { k: 'D', t: '$\\mathbb{R}$' }
    ],
    answer: 'C',
    solution: `<p>Only a closed bounded interval. On $(0,1)$ take $f(x)=1/x$; on $[0,1)$ take
      $f(x)=1/(1-x)$; on $\\mathbb{R}$ take $f(x)=x$. Each is continuous and unbounded above.</p>`,
    tested: `<p>That both hypotheses of the Maximum–Minimum Theorem are load-bearing.</p>`,
    trap: `Half-open is not closed: one missing endpoint is enough to lose the maximum.` },

  { id: 'p.mock.ra2.2018.25', course: 'ra2', exam: 'JAM', year: 2018, paper: 'MA', qno: 25,
    marks: 5, mock: true, sec: '5.4', tests: ['m.5.4.1', 'm.5.4.3'],
    title: 'Uniform continuity on an unbounded domain',
    prompt: `<p>Show that $f(x)=x^2$ is not uniformly continuous on $\\mathbb{R}$, but is
      uniformly continuous on $[-A,A]$ for every $A>0$.</p>`,
    approach: `<p>For the negative half, produce two sequences whose difference tends to $0$ while
      the difference of their images does not. For the positive half, quote the Uniform Continuity
      Theorem on a closed bounded interval — or bound $|x+y|$ directly.</p>`,
    solution: `<p><b>Not uniform on $\\mathbb{R}$:</b> take $x_n=n+\\frac1n$ and $y_n=n$. Then
      $|x_n-y_n|=\\frac1n\\to0$, but $|f(x_n)-f(y_n)|=2+\\frac1{n^2}>2$, so the non-uniform
      continuity criterion applies with $\\varepsilon_0=2$.</p>
      <p><b>Uniform on $[-A,A]$:</b> $|x^2-y^2|=|x+y||x-y|\\le 2A|x-y|$, so
      $\\delta:=\\varepsilon/(2A)$ works for every pair at once. (Or: $[-A,A]$ is closed and
      bounded, so the Uniform Continuity Theorem applies.)</p>`,
    trap: `A $\\delta$ that depends on the base point is exactly what uniform continuity forbids —
      the failure is not that $f$ is discontinuous anywhere.` },

  { id: 'p.mock.ra2.2017.18', course: 'ra2', exam: 'JAM', year: 2017, paper: 'MA', qno: 18,
    marks: 2, mock: true, sec: '6.2', tests: ['m.6.2.4'],
    type: 'NAT',
    title: 'Mean Value Theorem, located',
    prompt: `<p>Let $f(x)=x^2$ on $[0,2]$. The Mean Value Theorem guarantees a point
      $c\\in(0,2)$ with $f'(c)=\\dfrac{f(2)-f(0)}{2-0}$. Find $c$.</p>`,
    answer: { value: 1, tol: 0.01, dp: 2 },
    solution: `<p>$\\frac{f(2)-f(0)}{2}=\\frac{4-0}{2}=2$ and $f'(c)=2c$, so $2c=2$ and $c=1$.</p>`,
    tested: `<p>That the MVT is an existence statement you can sometimes solve outright.</p>` },

  { id: 'p.mock.ra2.2016.33', course: 'ra2', exam: 'JAM', year: 2016, paper: 'MA', qno: 33,
    marks: 10, mock: true, sec: '5.3', tests: ['m.5.3.7'],
    title: 'A fixed point from the IVT',
    prompt: `<p>Let $f:[0,1]\\to[0,1]$ be continuous. Prove that there is $c\\in[0,1]$ with
      $f(c)=c$.</p>`,
    approach: `<p>Do not look for $c$. Build the auxiliary function $g(x)=f(x)-x$ and check its
      sign at the two endpoints.</p>`,
    solution: `<p>Put $g(x)=f(x)-x$, continuous on $[0,1]$ as a difference of continuous
      functions. Since $f(0)\\ge0$ we have $g(0)=f(0)\\ge0$, and since $f(1)\\le1$ we have
      $g(1)=f(1)-1\\le0$.</p>
      <p>If either endpoint gives $g=0$ we are done. Otherwise $g(0)>0>g(1)$, and Bolzano's
      Intermediate Value Theorem gives $c\\in(0,1)$ with $g(c)=0$, i.e. $f(c)=c$.</p>`,
    trap: `The endpoint cases have to be handled: the IVT as usually stated needs a strict sign
      change.` }

);
