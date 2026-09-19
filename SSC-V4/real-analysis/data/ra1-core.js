/* RA1 concepts that Chapter 5 depends on */
CONCEPTS.push(
  { id:'c.2.3.1', bartle:'2.3.1', sec:'2.3', kind:'definition', tier:'core',
    title:'Upper and lower bounds; bounded sets',
    oneLine:'A set is bounded above if some single number sits at or above every element of it.',
    statement:`<p>Let $S$ be a nonempty subset of $\\mathbb{R}$.</p>
      <p>(a) $S$ is <b>bounded above</b> if there exists $u\\in\\mathbb{R}$ such that $s\\le u$ for all $s\\in S$. Any such $u$ is an <b>upper bound</b> of $S$.</p>
      <p>(b) $S$ is <b>bounded below</b> if there exists $w\\in\\mathbb{R}$ such that $w\\le s$ for all $s\\in S$. Any such $w$ is a <b>lower bound</b> of $S$.</p>
      <p>(c) $S$ is <b>bounded</b> if it is both bounded above and bounded below; otherwise it is <b>unbounded</b>.</p>`,
    intuition:`<p>An upper bound is a fence that no element of $S$ can climb over. There is never just one such fence: if $u$ works, so does $u+1$, $u+2$, and every number above $u$ — a set with one upper bound automatically has infinitely many.</p>
      <p><b>Worked micro-example:</b> $S=\\{x\\in\\mathbb{R}: x<2\\}$. It is bounded above (by $2$, or by $2.001$, or by $1000$ — all work). It has NO lower bound at all (numbers in $S$ go to $-\\infty$), so $S$ is unbounded even though it is bounded above.</p>`,
    needs:['s.quantifier'],
    traps:[
      `Confusing "an upper bound" (there are infinitely many, none special) with "the least upper bound" (there is only one — see <code>c.2.3.2</code>).`,
      `Assuming a set bounded above must also be bounded below (or vice versa) — false, as the worked example shows.`
    ],
    cards:[
      { q:`Define "upper bound of S".`, a:`A number $u$ with $s\\le u$ for every $s\\in S$.`, kind:'state' },
      { q:`If $u$ is an upper bound of $S$, is $u+5$ also an upper bound?`, a:`Yes — any number $\\ge u$ is automatically an upper bound too.`, kind:'recall' },
      { q:`Is $S=\\{x: x<2\\}$ bounded?`, a:`No — it is bounded above (e.g. by $2$) but unbounded below, so it is not bounded overall.`, kind:'apply' }
    ]
  },

  { id:'c.2.3.2', bartle:'2.3.2', sec:'2.3', kind:'definition', tier:'core',
    title:'Supremum and infimum',
    oneLine:'The supremum is the tightest possible upper bound — the least of all of them.',
    statement:`<p>Let $S$ be a nonempty subset of $\\mathbb{R}$.</p>
      <p>(a) If $S$ is bounded above, $u$ is the <b>supremum</b> (least upper bound) of $S$, written $u=\\sup S$, if:<br>
      (1) $u$ is an upper bound of $S$, and (2) if $v$ is any upper bound of $S$, then $u\\le v$.</p>
      <p>(b) If $S$ is bounded below, $w$ is the <b>infimum</b> (greatest lower bound) of $S$, written $w=\\inf S$, if:<br>
      (1) $w$ is a lower bound of $S$, and (2) if $t$ is any lower bound of $S$, then $t\\le w$.</p>
      <p>The supremum (when it exists) is unique: if $u_1$ and $u_2$ both satisfy the definition, condition (2) applied to each forces $u_1\\le u_2$ and $u_2\\le u_1$, so $u_1=u_2$.</p>`,
    intuition:`<p>Among all the possible ceilings you could put over a room, the supremum is the <b>lowest</b> one that still clears everyone's head — condition (1) says it IS a ceiling, condition (2) says no lower ceiling would still work. This is exactly the everyday "least upper bound" idea from <code>s.sup-inf-school</code>, now made precise with two checkable conditions.</p>
      <p><b>Worked micro-example:</b> $S=[0,1)$. $u=1$: it's an upper bound (condition 1 ✓); and any $v<1$ fails to be an upper bound since some element of $S$ (e.g. $\\max(v,0.5)$, adjusted to lie in $S$) exceeds it — so no smaller number works, giving condition (2) ✓. Hence $\\sup S=1$, even though $1\\notin S$.</p>`,
    needs:['c.2.3.1','s.sup-inf-school'],
    figs:['fig.sup-inf'],
    traps:[
      `Thinking $\\sup S$ must belong to $S$ — false in general (see the worked example).`,
      `Checking only condition (1) (that $u$ is AN upper bound) and forgetting condition (2) (that it's the LEAST one).`,
      `Talking about "the" supremum before confirming it's unique — always a safe habit, but worth knowing WHY it's safe (see the uniqueness argument above).`
    ],
    cards:[
      { q:`State both conditions in the definition of $u=\\sup S$.`, a:`(1) $u$ is an upper bound of $S$; (2) every other upper bound $v$ satisfies $u\\le v$.`, kind:'state' },
      { q:`Must $\\sup S \\in S$?`, a:`No — e.g. $\\sup(0,1)=1$ but $1\\notin(0,1)$.`, kind:'recall' },
      { q:`Find $\\sup S$ and $\\inf S$ for $S=\\{1/n : n\\in\\mathbb{N}\\}$.`, a:`$\\sup S = 1$ (attained at $n=1$); $\\inf S = 0$ (not attained, but no positive number is a lower bound).`, kind:'apply' }
    ]
  },

  { id:'c.2.3.4', bartle:'2.3.4', sec:'2.3', kind:'lemma', tier:'core',
    title:'ε-characterisation of the supremum',
    oneLine:'u is the supremum of S exactly when, however close to u you stand from below, some point of S is even closer.',
    statement:`<p>An upper bound $u$ of a nonempty $S\\subseteq\\mathbb{R}$ is $\\sup S$ if and only if for every $\\varepsilon>0$ there exists $s_\\varepsilon\\in S$ such that $u-\\varepsilon < s_\\varepsilon$.</p>`,
    intuition:`<p>This restates "$u$ is the LEAST upper bound" in a form built for $\\varepsilon$-arguments: however small a margin $\\varepsilon$ you allow yourself below the ceiling $u$, the set $S$ still has a point that gets inside that margin — otherwise $u-\\varepsilon$ would itself be a smaller working ceiling, contradicting that $u$ is the least one.</p>
      <p><b>Worked micro-example:</b> $S=(0,1)$, $u=1$. Given any $\\varepsilon>0$, pick $s_\\varepsilon := 1-\\varepsilon/2 \\in S$ (as long as $\\varepsilon<2$, which we may assume). Then $u-\\varepsilon = 1-\\varepsilon < 1-\\varepsilon/2 = s_\\varepsilon$, as required.</p>`,
    needs:['c.2.3.2','s.abs-ineq'],
    traps:[
      `Checking the condition for just one $\\varepsilon$ instead of "for every $\\varepsilon>0$".`,
      `Forgetting this lemma SUPPLEMENTS condition (1) (still need $u$ to be an upper bound) rather than replacing it.`
    ],
    proof:{
      idea:`Prove both directions. (⇐) is a direct translation using $\\varepsilon:=u-v$. (⇒) argues that if $u=\\sup S$, then $u-\\varepsilon$ is too small to be an upper bound, so something in $S$ must beat it.`,
      why:`The whole point is that "least upper bound" (condition (2), phrased with an arbitrary competing bound $v$) and "for every $\\varepsilon$, some point of $S$ beats $u-\\varepsilon$" are just two ways of saying the same thing — one compares against other bounds, the other measures a margin directly.`,
      rungs:[
        {
          why:`(⇐) Assume $u$ is an upper bound satisfying the $\\varepsilon$-condition. Take any $v<u$ and turn the gap into an $\\varepsilon$.`,
          m:`$$\\varepsilon := u-v > 0$$`,
          meaning:`What this really means: If someone proposes a competitor $v$ strictly below $u$, the space between them is a genuine positive gap $\\varepsilon$.`
        },
        {
          why:`Apply the hypothesis with this specific $\\varepsilon$ to get a point of $S$ beating $v$.`,
          m:`$$\\exists\\, s_\\varepsilon\\in S:\\ u-\\varepsilon < s_\\varepsilon \\iff v < s_\\varepsilon$$`,
          meaning:`What this really means: By dipping slightly below $u$ by that exact gap, the condition guarantees a set member pops up inside the gap, standing strictly taller than $v$.`
        },
        {
          why:`So no $v<u$ can be an upper bound of $S$ — exactly condition (2) of the supremum definition.`,
          m:`$$v<u \\Rightarrow v \\text{ is not an upper bound} \\Rightarrow u=\\sup S$$`,
          meaning:`What this really means: Because an element of the set pokes above $v$, $v$ fails to be a ceiling. Since every number below $u$ fails to be a ceiling, $u$ is crowned the lowest possible ceiling.`
        },
        {
          why:`(⇒) Conversely, suppose $u=\\sup S$ and let $\\varepsilon>0$ be given. Since $u$ is the LEAST upper bound, anything strictly below it fails to be one.`,
          m:`$$u-\\varepsilon < u \\Rightarrow u-\\varepsilon \\text{ is not an upper bound of } S$$`,
          meaning:`What this really means: In the opposite direction, shaving off any positive amount $\\varepsilon$ from the least upper bound drops you below the ceiling threshold.`
        },
        {
          why:`"Not an upper bound" means, by definition, some element of $S$ slips past it.`,
          m:`$$\\exists\\, s_\\varepsilon\\in S:\\ u-\\varepsilon < s_\\varepsilon$$`,
          meaning:`What this really means: If $u - \\varepsilon$ were higher than every set member, it would be a ceiling, which contradicts $u$ being the lowest ceiling. Thus, some element must stick its head above $u - \\varepsilon$.`
        }
      ],
      ends:`Both directions hold, so the $\\varepsilon$-form and the original least-upper-bound form say exactly the same thing. The $\\varepsilon$-form is the one you will actually reach for inside limit proofs.`
    },
    cards:[
      { q:`State the ε-characterisation of $\\sup S$.`, a:`$u$ is an upper bound of $S$, and for every $\\varepsilon>0$ there exists $s_\\varepsilon\\in S$ with $u-\\varepsilon < s_\\varepsilon$.`, kind:'state' },
      { q:`For $S=(0,1)$ and $u=1$, exhibit $s_\\varepsilon$ for a given small $\\varepsilon>0$.`, a:`$s_\\varepsilon = 1-\\varepsilon/2$ works, since $1-\\varepsilon<1-\\varepsilon/2<1$.`, kind:'apply' },
      { q:`Trap: does verifying the ε-condition for ONE value of $\\varepsilon$ prove $u=\\sup S$?`, a:`No — it must hold for EVERY $\\varepsilon>0$; a single success proves nothing.`, kind:'trap' }
    ]
  },

  { id:'c.2.3.6', bartle:'2.3.6', sec:'2.3', kind:'theorem', tier:'core',
    title:'The Completeness (Supremum) Property of ℝ',
    oneLine:'Every nonempty set of real numbers with an upper bound actually has a supremum — no gaps.',
    statement:`<p>Every nonempty subset of $\\mathbb{R}$ that has an upper bound also has a supremum in $\\mathbb{R}$. ($\\mathbb{R}$ is a <b>complete ordered field</b>.) Equivalently, every nonempty subset of $\\mathbb{R}$ that has a lower bound also has an infimum in $\\mathbb{R}$.</p>`,
    intuition:`<p>$\\mathbb{Q}$ has "holes": the set $\\{x\\in\\mathbb{Q}: x^2<2\\}$ is bounded above (e.g. by $2$) but has no LEAST rational upper bound — you can always find a slightly smaller rational upper bound, forever, because the true ceiling $\\sqrt2$ isn't rational. $\\mathbb{R}$ is built precisely so this can't happen.</p>
      <p>This property cannot be derived from the algebraic and order axioms of $\\mathbb{R}$ alone — it is genuinely extra information about what $\\mathbb{R}$ is, so it is simply postulated as an axiom. Nearly every "does a limit exist" argument later in the course secretly leans on this fact whenever it needs a number to converge to, or a bound to exist.</p>`,
    needs:['c.2.3.1','c.2.3.2'],
    figs:['fig.gap'],
    traps:[
      `Trying to "prove" completeness from the field and order axioms alone — it cannot be done; it is an independent axiom.`,
      `Forgetting the infimum version isn't a separate axiom — it follows from the supremum version by flipping signs (see the proof).`
    ],
    proof:{
      idea:`The supremum version is taken as the axiom. The infimum version is then FREE: turn a "bounded below" question into a "bounded above" question by flipping every sign.`,
      why:`Negating a set turns lower bounds into upper bounds and vice versa, so completeness-for-suprema automatically delivers completeness-for-infima once you translate through $S':=\\{-s:s\\in S\\}$.`,
      rungs:[
        {
          why:`Start from a nonempty $S$ bounded below by $w$; build the sign-flipped set.`,
          m:`$$S' := \\{-s : s\\in S\\}$$`,
          meaning:`What this really means: We mirror the entire set across zero on the number line, turning all its depths into heights.`
        },
        {
          why:`"$w$ is a lower bound of $S$" becomes, after flipping signs, "$-w$ is an upper bound of $S'$".`,
          m:`$$s\\ge w\\ \\forall s\\in S \\iff -s\\le -w\\ \\forall s\\in S \\ \\Rightarrow\\ S' \\text{ bounded above by } -w$$`,
          meaning:`What this really means: Multiplying by $-1$ flips inequalities: what used to be a floor under $S$ now becomes a ceiling over the flipped set $S'$.`
        },
        {
          why:`Now apply the Completeness Property (the axiom) to the bounded-above set $S'$.`,
          m:`$$u := \\sup S' \\text{ exists, by the axiom}$$`,
          meaning:`What this really means: Because $S'$ has elements and a ceiling, the completeness axiom immediately grants it an exact least upper bound $u$.`
        },
        {
          why:`Claim $-u = \\inf S$; check both defining conditions by flipping signs back.`,
          m:`$$-u \\le s\\ \\forall s\\in S \\quad(\\text{lower bound}),\\qquad t\\le s\\ \\forall s\\in S \\Rightarrow t\\le -u \\quad(\\text{greatest such})$$`,
          meaning:`What this really means: Flipping back across zero turns the highest point of the mirrored world into the deepest, greatest lower bound of our original set, giving infima for free.`
        }
      ],
      ends:`So the infimum property is not a second, independent assumption — it is a consequence of the supremum property. $\\mathbb{R}$ is complete for both suprema and infima.`
    },
    cards:[
      { q:`State the Completeness Property of $\\mathbb{R}$.`, a:`Every nonempty subset of $\\mathbb{R}$ that is bounded above has a supremum in $\\mathbb{R}$.`, kind:'state' },
      { q:`Can the Completeness Property be proved from the field and order axioms of $\\mathbb{R}$?`, a:`No — it is an independent axiom; $\\mathbb{Q}$ satisfies the same field and order axioms but fails completeness.`, kind:'recall' },
      { q:`How is "every bounded-below set has an infimum" derived without a second axiom?`, a:`Apply the supremum axiom to the sign-flipped set $S'=\\{-s:s\\in S\\}$ and set $\\inf S := -\\sup S'$.`, kind:'apply' }
    ]
  },

  { id:'c.3.1.3', bartle:'3.1.3', sec:'3.1', kind:'definition', tier:'core',
    title:'Convergence of a sequence (the ε-K definition)',
    oneLine:'A sequence converges to x if, for any tolerance ε you pick, all terms eventually (past some point) land within ε of x.',
    statement:`<p>A sequence $X=(x_n)$ in $\\mathbb{R}$ <b>converges</b> to $x\\in\\mathbb{R}$, written $\\lim(x_n)=x$, if for every $\\varepsilon>0$ there exists a natural number $K(\\varepsilon)$ such that $n\\ge K(\\varepsilon)$ implies $|x_n-x|<\\varepsilon$. If no such $x$ exists, the sequence <b>diverges</b>.</p>`,
    intuition:`<p>However small a tolerance $\\varepsilon$ you demand, the sequence must EVENTUALLY (from some index $K$ onward) stay within that tolerance of $x$ forever after — not just occasionally get close. $K$ is allowed to depend on $\\varepsilon$: a tighter tolerance will generally need a larger $K$.</p>
      <p><b>Worked micro-example:</b> $\\lim(1/n)=0$. Given $\\varepsilon=0.01$, we need $1/n<0.01$, i.e. $n>100$, so $K=101$ works — and any tighter $\\varepsilon$ just pushes $K$ higher.</p>`,
    needs:['s.abs-ineq','s.quantifier'],
    traps:[
      `Thinking it's enough for the terms to get close to $x$ sometimes — the condition must hold for ALL $n\\ge K$, permanently, not intermittently.`,
      `Believing one single $K$ must work for every $\\varepsilon$ — the opposite is true and expected: $K$ is allowed to (and generally must) grow as $\\varepsilon$ shrinks.`,
      `Confusing "converges to $x$" with "gets arbitrarily close to $x$ infinitely often" — the latter is much weaker and does not imply convergence (e.g. $(-1)^n$ gets close to $1$ infinitely often but does not converge to $1$).`
    ],
    cards:[
      { q:`State the ε-K definition of $\\lim(x_n)=x$.`, a:`For every $\\varepsilon>0$ there is $K(\\varepsilon)\\in\\mathbb{N}$ such that $n\\ge K(\\varepsilon) \\Rightarrow |x_n-x|<\\varepsilon$.`, kind:'state' },
      { q:`For $x_n=1/n$ and $\\varepsilon=0.01$, find a valid $K$.`, a:`Any $K\\ge101$ works, since $n\\ge101 \\Rightarrow 1/n\\le1/101<0.01$.`, kind:'apply' },
      { q:`Trap: does $x_n=(-1)^n$ converge to $0$ because $|x_n-0|\\le1$ is "close-ish" for all $n$?`, a:`No — convergence needs $|x_n-x|<\\varepsilon$ for EVERY $\\varepsilon>0$ eventually; taking $\\varepsilon=0.5$, no $K$ works since $x_n$ keeps hitting $\\pm1$ forever.`, kind:'trap' }
    ]
  },

  { id:'c.3.1.4', bartle:'3.1.4', sec:'3.1', kind:'theorem', tier:'core',
    title:'Uniqueness of limits',
    oneLine:'A sequence cannot converge to two different numbers.',
    statement:`<p>A sequence in $\\mathbb{R}$ can have at most one limit. That is, if a sequence $X = (x_n)$ of real numbers converges to $x' \\in \\mathbb{R}$ and also converges to $x'' \\in \\mathbb{R}$, then:
      $$x' = x''$$</p>`,
    intuition:`<p>If $x'$ and $x''$ were both limits, then eventually the terms would be simultaneously trapped close to both — but two fixed numbers can't both be "arbitrarily close" to the same wandering terms unless they are, in fact, the same number. The clean way to see this: compare $x'$ to $x''$ by routing the comparison through a term $x_n$ of the sequence, using the add-and-subtract trick.</p>`,
    needs:['c.3.1.3','s.triangle-ineq'],
    traps:[
      `Trying to compare $x'$ and $x''$ directly without introducing a THIRD point ($x_n$) to route the comparison through — the triangle-inequality trick always needs a common middle term.`,
      `Using two different indices for the two convergences without justifying why a common $K=\\max\\{K',K''\\}$ works for both simultaneously.`
    ],
    proof:{
      idea:`Suppose both $x'$ and $x''$ were limits. Show $|x'-x''|$ is smaller than every positive number — which forces it to be exactly $0$.`,
      why:`Both $x'$ and $x''$ satisfy the convergence definition, so eventually the terms are simultaneously close to both; the only way to compare $x'$ to $x''$ directly is by routing the comparison through a shared term $x_n$ — exactly what the triangle inequality's add-and-subtract trick does.`,
      rungs:[
        {
          why:`Suppose, for contradiction, both $x'$ and $x''$ are limits of $(x_n)$.`,
          m:`$$\\lim(x_n)=x' \\text{ and } \\lim(x_n)=x''$$`,
          meaning:`What this really means: We imagine a scenario where a single sequence somehow manages to converge simultaneously to two different destinations.`
        },
        {
          why:`Split an arbitrary tolerance in half — one half for each limit — so the two errors will add up to exactly $\\varepsilon$ at the end.`,
          m:`$$\\text{given }\\varepsilon>0,\\ \\exists K': n\\ge K' \\Rightarrow |x_n-x'|<\\varepsilon/2$$ $$\\exists K'': n\\ge K'' \\Rightarrow |x_n-x''|<\\varepsilon/2$$`,
          meaning:`What this really means: We give each candidate limit half of our error budget $\\varepsilon/2$, so their combined distances won't exceed our total tolerance $\\varepsilon$.`
        },
        {
          why:`Take $n$ large enough to satisfy both conditions simultaneously.`,
          m:`$$K := \\max\\{K',K''\\},\\qquad n\\ge K$$`,
          meaning:`What this really means: We wait until the sequence passes the later of the two cutoff points, ensuring both closeness guarantees are active at the exact same moment.`
        },
        {
          why:`Insert and subtract $x_n$ (add-and-subtract trick), then apply the triangle inequality.`,
          m:`$$|x'-x''| = |x'-x_n+x_n-x''| \\le |x'-x_n|+|x_n-x''| < \\varepsilon/2+\\varepsilon/2 = \\varepsilon$$`,
          meaning:`What this really means: We measure the gap between the two limits by taking a detour through the shared sequence term $x_n$. Because this gap is smaller than every positive number, the two limits must be the identical point.`
        }
      ],
      ends:`Since $\\varepsilon>0$ was arbitrary, $|x'-x''|<\\varepsilon$ for every $\\varepsilon>0$, which forces $x'-x''=0$, i.e. $x'=x''$. A sequence cannot converge to two different numbers.`
    },
    cards:[
      { q:`What does the Uniqueness of Limits theorem say?`, a:`A sequence of real numbers can converge to at most one number.`, kind:'state' },
      { q:`What is the key algebraic trick in its proof?`, a:`Insert and subtract $x_n$: $|x'-x''|=|x'-x_n+x_n-x''|\\le|x'-x_n|+|x_n-x''|$, then bound each piece by $\\varepsilon/2$.`, kind:'recall' },
      { q:`Trap: why split the tolerance as $\\varepsilon/2+\\varepsilon/2$ rather than using $\\varepsilon$ for both?`, a:`Using $\\varepsilon$ for both would only bound $|x'-x''|$ by $2\\varepsilon$, which is still fine since $\\varepsilon$ is arbitrary — but the standard convention splits evenly so the final bound reads exactly $\\varepsilon$.`, kind:'trap' }
    ]
  },

  {
    id: 'c.3.1.10', bartle: '3.1.10', sec: '3.1', kind: 'theorem', tier: 'core',
    title: 'Standard Sequence Limits',
    oneLine: 'Five foundational limits: 1/n → 0, 1/n² → 0, bⁿ → 0 (|b|<1), c^(1/n) → 1 (c>0), and n^(1/n) → 1.',
    statement: `The following limits hold for sequences in $\\mathbb{R}$:
      <p>(a) $\\lim_{n\\to\\infty} \\left(\\dfrac{1}{n}\\right) = 0$.</p>
      <p>(b) $\\lim_{n\\to\\infty} \\left(\\dfrac{1}{n^2}\\right) = 0$.</p>
      <p>(c) If $0 < b < 1$, then $\\lim_{n\\to\\infty} (b^n) = 0$.</p>
      <p>(d) If $c > 0$, then $\\lim_{n\\to\\infty} (c^{1/n}) = 1$.</p>
      <p>(e) $\\lim_{n\\to\\infty} (n^{1/n}) = 1$.</p>`,
    intuition: `<p>These five limits are the bedrock of real analysis and calculus computations:</p>
      <p>• $1/n \\to 0$ is the direct translation of the Archimedean Property into the language of limits.</p>
      <p>• For $b^n \\to 0$ ($0 < b < 1$), we write $b = \\frac{1}{1 + a}$ with $a > 0$. Bernoulli's Inequality gives $(1 + a)^n \\ge 1 + na > na$, which traps $b^n < \\frac{1}{na} \\to 0$. Linear growth in the denominator crushes the fraction to zero!</p>
      <p>• For $n^{1/n} \\to 1$: even though $n$ explodes to infinity, the $n$-th root extracts almost all the magnitude, pulling the sequence all the way down to $1$. Using the Binomial Theorem, $(1 + d_n)^n \\ge \\frac{n(n-1)}{2} d_n^2$, so $d_n \\le \\sqrt{2/n} \\to 0$.</p>`,
    needs: ['c.3.1.3', 'c.2.4.3', 'c.2.1.13'],
    traps: [
      `Writing $0^0$ or $\\infty^0$ is an indeterminate form: $n^{1/n} \\to 1$, but other expressions of the type $\\infty^0$ may converge to other values or diverge.`,
      `Assuming $b^n \\to 0$ holds when $b = 1$ ($1^n \\to 1$) or $b > 1$ ($b^n \\to +\\infty$). The strict condition $0 < b < 1$ (or $|b| < 1$) is required.`
    ],
    proof: {
      idea: `Use the Archimedean property for (a), Bernoulli's Inequality for (c), and the Binomial Theorem for (e).`,
      why: `Algebraic inequalities convert power growth into linear or quadratic bounds, allowing elementary ε-K verification.`,
      rungs: [
        {
          why: 'Proof of (a): Given $\\varepsilon > 0$, apply the Archimedean Property (2.4.3) to find $K \\in \\mathbb{N}$ with $K > 1/\\varepsilon$.',
          m: '$$n \\ge K > \\frac{1}{\\varepsilon} \\implies \\left|\\frac{1}{n} - 0\\right| = \\frac{1}{n} \\le \\frac{1}{K} < \\varepsilon \\implies \\lim\\left(\\frac{1}{n}\\right) = 0$$',
          meaning: 'What this really means: To shrink $1/n$ below any tiny target $\\varepsilon$, pick an integer past $1/\\varepsilon$. As $n$ grows larger, the fractions are squashed closer to $0$ than any target.'
        },
        {
          why: 'Proof of (c): Since $0 < b < 1$, write $b = \\frac{1}{1 + a}$ where $a = \\frac{1}{b} - 1 > 0$. Apply Bernoulli\'s Inequality (2.1.13).',
          m: '$$(1 + a)^n \\ge 1 + na > na \\implies 0 < b^n = \\frac{1}{(1 + a)^n} < \\frac{1}{na}$$',
          meaning: 'What this really means: We express a fraction less than $1$ as $1/(1+a)$. Using Bernoulli, the denominator grows at least linearly ($na$), which forces the whole fraction below $1/(na)$.'
        },
        {
          why: 'Given $\\varepsilon > 0$, choose $K \\in \\mathbb{N}$ with $K > \\frac{1}{a \\varepsilon}$.',
          m: '$$n \\ge K \\implies |b^n - 0| < \\frac{1}{na} \\le \\frac{1}{Ka} < \\varepsilon \\implies \\lim(b^n) = 0$$',
          meaning: 'What this really means: Because $b^n$ is trapped under $1/(na)$, picking $n$ large enough drives this simple linear fraction below $\\varepsilon$, proving powers of $b$ decay to $0$.'
        },
        {
          why: 'Proof of (e): Let $x_n := n^{1/n} - 1$. Since $n \\ge 1$, $x_n \\ge 0$. Expand $n = (1 + x_n)^n$ via the Binomial Theorem for $n \\ge 2$.',
          m: '$$n = (1 + x_n)^n = 1 + n x_n + \\frac{n(n - 1)}{2} x_n^2 + \\cdots \\ge 1 + \\frac{n(n - 1)}{2} x_n^2$$',
          meaning: 'What this really means: We measure how much $n^{1/n}$ exceeds $1$ by writing it as $1 + x_n$. Expanding $(1+x_n)^n$ via the Binomial Theorem keeps the quadratic term while dropping the rest.'
        },
        {
          why: 'Isolate $x_n^2$: subtract 1 and divide by $\\frac{n(n - 1)}{2} > 0$.',
          m: '$$n - 1 \\ge \\frac{n(n - 1)}{2} x_n^2 \\implies x_n^2 \\le \\frac{2}{n} \\implies 0 \\le x_n \\le \\sqrt{\\frac{2}{n}}$$',
          meaning: 'What this really means: Rearranging the inequality traps the surplus $x_n$ beneath $\\sqrt{2/n}$, showing the excess above $1$ is controlled by a simple shrinking root.'
        },
        {
          why: 'Given $\\varepsilon > 0$, choose $K > 2/\\varepsilon^2$. Then $n \\ge K \\implies |n^{1/n} - 1| = x_n \\le \\sqrt{2/n} < \\varepsilon$.',
          m: '$$\\lim_{n\\to\\infty} (n^{1/n}) = 1$$',
          meaning: 'What this really means: For huge $n$, $\\sqrt{2/n}$ drops below any tolerance $\\varepsilon$, extinguishing the surplus and pulling $n^{1/n}$ all the way down to $1$.'
        }
      ],
      ends: 'The limits $\\lim(1/n) = 0$, $\\lim(b^n) = 0$ for $0 < b < 1$, and $\\lim(n^{1/n}) = 1$ are rigorously established.'
    },
    cards: [
      { q: 'State the limits of $(b^n)$ for $0 < b < 1$ and $(n^{1/n})$ as $n \\to \\infty$.', a: '$\\lim(b^n) = 0$ and $\\lim(n^{1/n}) = 1$.', kind: 'state' },
      { q: "How is Bernoulli's Inequality used to prove $\\lim(b^n) = 0$?", a: 'Writing $b = 1/(1+a)$ with $a > 0$ yields $b^n \\le 1/(1+na) < 1/(na)$, which tends to 0 by the Archimedean property.', kind: 'recall' },
      { q: 'Why does the proof of $\\lim(n^{1/n}) = 1$ keep the quadratic term in the binomial expansion rather than just the linear term?', a: 'Because the linear term gives $n \\ge 1 + nx_n \\implies x_n \\le (n-1)/n < 1$, which is too weak to force $x_n \\to 0$; the quadratic term gives $x_n \\le \\sqrt{2/n} \\to 0$.', kind: 'trap' }
    ]
  },

  { id:'c.3.4.1', bartle:'3.4.1', sec:'3.4', kind:'definition', tier:'core',
    title:'Subsequence',
    oneLine:'A subsequence picks out infinitely many terms from a sequence, keeping their original left-to-right order.',
    statement:`<p>Let $X=(x_n)$ be a sequence and let $n_1 < n_2<\\cdots < n_k<\\cdots$ be a strictly increasing sequence of natural numbers. Then $X'=(x_{n_k})=(x_{n_1},x_{n_2},\\ldots)$ is a <b>subsequence</b> of $X$.</p>`,
    intuition:`<p>You choose infinitely many indices, but they must strictly increase — you can skip ahead as much as you like, but never go backwards and never repeat an index.</p>
      <p><b>Worked micro-example:</b> $X=(1/n)$. Selecting the even indices gives the subsequence $(1/2,1/4,1/6,\\ldots)$. By contrast, a "sequence" built by jumping around out of order, like $(1/2,1/1,1/4,1/3,\\ldots)$, is NOT a subsequence — the index order must strictly increase.</p>`,
    needs:['c.3.1.3'],
    traps:[
      `Picking indices out of increasing order — that is not a subsequence, even if every term still comes from $X$.`,
      `Confusing a subsequence with the SET of values taken — $((-1)^n)$ has value-set $\\{-1,1\\}$ but infinitely many distinct subsequences (constant $-1$, constant $1$, alternating ones, etc.).`
    ],
    cards:[
      { q:`What condition must the chosen indices $n_1,n_2,\\ldots$ satisfy to define a subsequence?`, a:`They must be strictly increasing natural numbers: $n_1 < n_2 < n_3<\\cdots$.`, kind:'state' },
      { q:`Give the subsequence of $X=(1/n)$ using odd indices.`, a:`$(1,\\,1/3,\\,1/5,\\ldots)$.`, kind:'apply' },
      { q:`Trap: is $(x_2,x_1,x_4,x_3,\\ldots)$ a subsequence of $(x_n)$?`, a:`No — the indices $2,1,4,3,\\ldots$ are not strictly increasing.`, kind:'trap' }
    ]
  },

  { id:'c.3.4.2', bartle:'3.4.2', sec:'3.4', kind:'theorem', tier:'core',
    title:'Subsequences of convergent sequences converge to the same limit',
    oneLine:'Thinning out a sequence that already homes in on x cannot make the survivors wander off.',
    statement:`<p>If $X=(x_n)$ converges to $x$, then every subsequence $X'=(x_{n_k})$ of $X$ also converges to $x$.</p>`,
    intuition:`<p>A subsequence only removes terms and relabels the rest with new indices $k=1,2,\\ldots$ — it introduces no new, wilder terms. Once the ORIGINAL sequence is trapped near $x$ past some index, every surviving (relabelled) term is trapped too, just under a new name.</p>`,
    needs:['c.3.4.1','c.3.1.3'],
    traps:[
      `Thinking a subsequence could somehow converge to a DIFFERENT limit than the parent sequence — impossible once the parent converges.`,
      `Skipping the justification that $n_k\\ge k$ — this index-growth fact is the entire engine of the proof.`
    ],
    proof:{
      idea:`Show the same $K(\\varepsilon)$ from the original sequence's convergence still works for the relabelled subsequence, using that the $k$-th chosen index $n_k$ is never smaller than $k$.`,
      why:`A subsequence only removes terms and relabels the rest — it can't introduce any term that wasn't already trapped near $x$ once $n$ was large enough; the one thing to verify is that the relabelled indices keep pace with (or outrun) their new labels.`,
      rungs:[
        {
          why:`Start from what convergence of $X$ already gives us.`,
          m:`$$\\text{given }\\varepsilon>0,\\ \\exists K(\\varepsilon): n\\ge K(\\varepsilon) \\Rightarrow |x_n-x|<\\varepsilon$$`,
          meaning:`What this really means: Because the parent sequence converges, all terms past milestone index $K$ are permanently trapped inside the safe target zone around $x$.`
        },
        {
          why:`Key fact about any strictly increasing sequence of indices: by induction, the $k$-th chosen index is never smaller than $k$ itself.`,
          m:`$$n_k \\ge k \\quad \\text{for all } k\\in\\mathbb{N}$$`,
          meaning:`What this really means: When skipping through a sequence, your pointer $n_k$ always advances at least as fast as your step counter $k$ ($n_1 \\ge 1, n_2 \\ge 2, \\dots$); you can never fall behind.`
        },
        {
          why:`So once $k$ reaches $K(\\varepsilon)$, the corresponding original index $n_k$ has already reached $K(\\varepsilon)$ too, and the original bound applies.`,
          m:`$$k\\ge K(\\varepsilon) \\Rightarrow n_k\\ge k\\ge K(\\varepsilon) \\Rightarrow |x_{n_k}-x|<\\varepsilon$$`,
          meaning:`What this really means: By the time your sub-list counter hits $K$, your actual position in the parent sequence is already at or past $K$, so every plucked term is already safely inside the target zone.`
        }
      ],
      ends:`The subsequence satisfies the same ε-K definition, with the same $\\varepsilon$ and $K$ — so it converges to $x$ as well.`
    },
    cards:[
      { q:`If $\\lim(x_n)=5$, what is $\\lim(x_{2n})$?`, a:`Also $5$ — every subsequence of a convergent sequence converges to the same limit.`, kind:'state' },
      { q:`What index fact drives the proof?`, a:`$n_k\\ge k$ for every $k$, since the indices are strictly increasing naturals.`, kind:'recall' },
      { q:`Trap: does this theorem say every subsequence converges (period)?`, a:`No — it only applies when the PARENT sequence already converges. A divergent sequence can still have convergent subsequences (see the divergence criteria).`, kind:'trap' }
    ]
  },

  { id:'c.3.4.5', bartle:'3.4.5', sec:'3.4', kind:'theorem', tier:'core',
    title:'Divergence Criteria (for sequences)',
    oneLine:'A sequence is divergent if it has two subsequences with different limits, or if it is unbounded.',
    statement:`<p>If a sequence $X=(x_n)$ has either of the following properties, then $X$ is divergent:</p>
      <p>(i) $X$ has two convergent subsequences $X'$ and $X''$ whose limits are not equal; or</p>
      <p>(ii) $X$ is unbounded.</p>`,
    intuition:`<p>(i) is just the contrapositive of <code>c.3.4.2</code>: since every subsequence of a convergent sequence must agree on the same limit, two subsequences disagreeing is proof by itself that no limit exists at all. (ii) uses that every convergent sequence is automatically bounded (its tail huddles near the limit, and the finitely many terms before that are trivially bounded) — so an unbounded sequence cannot possibly converge.</p>`,
    needs:['c.3.4.2'],
    traps:[
      `Thinking boundedness alone implies convergence — false; e.g. $((-1)^n)$ is bounded but divergent, caught only by criterion (i), not (ii).`,
      `Using criterion (ii) loosely ("it doesn't look like it's settling") instead of actually proving unboundedness.`
    ],
    proof:{
      idea:`Both parts reuse facts already established: (i) is the direct contrapositive of "all subsequences of a convergent sequence share its limit"; (ii) reuses that convergence forces the whole sequence to be bounded.`,
      why:`Both halves reuse facts already established: (i) is the direct contrapositive of <code>c.3.4.2</code>; (ii) reuses that convergence forces eventual closeness to a fixed number, which automatically caps the size of the whole sequence, leading terms included.`,
      rungs:[
        {
          why:`(i) If $X$ converged to some $x$, then by <code>c.3.4.2</code> every subsequence — including $X'$ and $X''$ — would have to converge to that same $x$.`,
          m:`$$X\\to x \\ \\Rightarrow\\ X'\\to x \\text{ and } X''\\to x$$`,
          meaning:`What this really means: If a sequence truly possessed a limit, every sub-stream sampled from it would be forced to march toward that exact same destination.`
        },
        {
          why:`But we are given two subsequences with DIFFERENT limits — contradiction, so $X$ cannot converge.`,
          m:`$$\\lim X' \\ne \\lim X'' \\ \\Rightarrow\\ \\text{no such } x \\text{ can exist}$$`,
          meaning:`What this really means: Catching two sub-streams heading toward two conflicting targets proves the sequence has no unified destination, destroying any possibility of convergence.`
        },
        {
          why:`(ii) A convergent sequence eventually sits inside a fixed neighbourhood of its limit; the finitely many terms before that are automatically bounded (any finite set of numbers is bounded).`,
          m:`$$n\\ge K(1) \\Rightarrow |x_n-x|<1 \\Rightarrow |x_n|<|x|+1$$ $$M := \\max\\{|x_1|,\\ldots,|x_{K-1}|,\\ |x|+1\\}$$`,
          meaning:`What this really means: Convergence cages all tail terms inside a radius of $1$ around $x$, while the finitely many early terms have a finite maximum, putting a rigid box around the entire sequence.`
        },
        {
          why:`So convergent $\\Rightarrow$ bounded; taking the contrapositive gives unbounded $\\Rightarrow$ divergent.`,
          m:`$$\\text{unbounded} \\ \\Rightarrow\\ \\text{not convergent}$$`,
          meaning:`What this really means: Since every convergent sequence must fit inside a finite box, any sequence that escapes all boxes (unbounded) cannot possibly converge.`
        }
      ],
      ends:`Either mismatched subsequential limits or plain unboundedness is, alone, enough to certify divergence — without ever having to negate the ε-K definition directly.`
    },
    cards:[
      { q:`Name the two divergence criteria for sequences.`, a:`(i) two convergent subsequences with different limits; (ii) the sequence is unbounded.`, kind:'state' },
      { q:`Use a divergence criterion to show $((-1)^n)$ diverges.`, a:`The even-indexed subsequence is constantly $1\\to1$; the odd-indexed subsequence is constantly $-1\\to-1$; different limits, so by criterion (i) the sequence diverges.`, kind:'apply' },
      { q:`Trap: does a bounded sequence have to converge?`, a:`No — bounded is necessary but not sufficient; $((-1)^n)$ is bounded yet divergent.`, kind:'trap' }
    ]
  },

  { id:'c.3.4.7', bartle:'3.4.7', sec:'3.4', kind:'theorem', tier:'core',
    title:'Monotone Subsequence Theorem',
    oneLine:'Every sequence, however wild, hides a monotone subsequence inside it.',
    statement:`<p>If $X=(x_n)$ is a sequence of real numbers, then $X$ has a subsequence that is monotone (either increasing or decreasing).</p>`,
    intuition:`<p>Call a term $x_m$ a "peak" if no later term ever beats it ($x_m\\ge x_n$ for all $n\\ge m$). Either infinitely many peaks exist — string them together in order and you automatically get a decreasing subsequence, since each peak, being a peak, is at least as big as every later one including the next peak. Or only finitely many peaks exist, so past the last one, every term is eventually beaten by something later — chase that "something later, bigger" term over and over to build an increasing subsequence.</p>`,
    needs:['c.3.4.1'],
    traps:[
      `Assuming the monotone subsequence must be made of CONSECUTIVE terms — it can skip around arbitrarily; only its own index order needs to increase.`,
      `Mixing up which case (infinitely many peaks vs. finitely many) produces the decreasing vs. increasing subsequence.`
    ],
    proof:{
      idea:`Split into two cases by whether the sequence has infinitely many "peaks" (terms never later exceeded) or only finitely many; each case hands you a monotone subsequence directly.`,
      why:`This argument is purely combinatorial — no $\\varepsilon$'s needed — it is entirely about the ORDER structure of the sequence's terms.`,
      rungs:[
        {
          why:`Define what makes a term unbeatable from that point onward.`,
          m:`$$x_m \\text{ is a peak if } x_m \\ge x_n \\text{ for all } n\\ge m$$`,
          meaning:`What this really means: A term is a "peak" if it looks forward into the infinite future and sees nothing taller than itself—it is the reigning local champion from that moment on.`
        },
        {
          why:`Case 1 — infinitely many peaks exist. List them in increasing order of index; being a peak means each one is $\\ge$ every later term, in particular the next peak.`,
          m:`$$x_{m_1}\\ge x_{m_2}\\ge x_{m_3}\\ge\\cdots \\quad\\text{(a decreasing subsequence)}$$`,
          meaning:`What this really means: If there is an endless supply of peaks, hopping from peak to peak naturally creates a sequence that never climbs higher—giving a decreasing subsequence for free!`
        },
        {
          why:`Case 2 — only finitely many peaks exist. Start just past the last peak, where nothing is a peak any longer.`,
          m:`$$s_1 := (\\text{index after the last peak})$$`,
          meaning:`What this really means: If peak champions run out, walk past the very last peak. From here on, every single term is guaranteed to be beaten by something later.`
        },
        {
          why:`"Not a peak" means, by definition, some strictly later term beats it. Chase that bigger term, then repeat the chase from there, forever.`,
          m:`$$x_{s_1}\\text{ not a peak} \\Rightarrow \\exists\\, s_2>s_1: x_{s_2}>x_{s_1} \\Rightarrow \\exists\\, s_3>s_2: x_{s_3}>x_{s_2} \\Rightarrow \\cdots$$`,
          meaning:`What this really means: Because nobody can hold the crown anymore, whatever term you stand on is beaten by a taller term ahead. Chasing strictly taller terms forever builds an increasing subsequence!`
        }
      ],
      ends:`Exactly one of the two cases must occur, and each produces a monotone subsequence. So every sequence, however chaotic, hides an increasing or decreasing thread inside it — the fact the Bolzano–Weierstrass Theorem builds on directly.`
    },
    cards:[
      { q:`Define a "peak" at index $m$.`, a:`$x_m$ is a peak if $x_m\\ge x_n$ for every $n\\ge m$ — no later term ever beats it.`, kind:'state' },
      { q:`If a sequence has infinitely many peaks, what kind of subsequence do they form?`, a:`A decreasing (non-increasing) subsequence, listed in index order.`, kind:'recall' },
      { q:`Trap: can a monotone subsequence skip non-consecutive terms of the original sequence?`, a:`Yes, and it usually must — monotone subsequences are rarely made of consecutive terms.`, kind:'trap' }
    ]
  },

  { id:'c.3.4.8', bartle:'3.4.8', sec:'3.4', kind:'theorem', tier:'core',
    title:'The Bolzano–Weierstrass Theorem',
    oneLine:'Every bounded sequence of real numbers has a convergent subsequence.',
    statement:`<p>A bounded sequence of real numbers has a convergent subsequence.</p>
      <p>Explicitly: if $X=(x_n)$ is a sequence in $\\mathbb{R}$ and there exists $M > 0$ such that $|x_n| \\le M$ for all $n \\in \\mathbb{N}$, then there exists a subsequence $X'=(x_{n_k})$ of $X$ and a real number $x^* \\in \\mathbb{R}$ such that:
      $$\\lim_{k\\to\\infty} x_{n_k} = x^*$$</p>`,
    intuition:`<p>A bounded sequence lives inside some fixed interval $[a,b]$ forever. The Monotone Subsequence Theorem (<code>c.3.4.7</code>) already guarantees SOME monotone subsequence hides inside any sequence at all; that subsequence, being monotone AND trapped inside $[a,b]$, has nowhere left to run off to — it must settle down to a limit. (This "monotone + bounded $\\Rightarrow$ convergent" fact is the Monotone Convergence Theorem of §3.3, and it is itself ultimately a consequence of the Completeness Property <code>c.2.3.6</code>: a bounded increasing sequence converges to its own supremum.)</p>`,
    needs:['c.3.4.7','c.3.3.2'],
    figs:['fig.bw'],
    traps:[
      `Thinking Bolzano–Weierstrass says the WHOLE sequence converges — it doesn't. A bounded sequence can still diverge overall (e.g. $((-1)^n)$) while having convergent subsequences (here, to $-1$ and to $+1$).`,
      `Forgetting boundedness is essential — an unbounded sequence (e.g. $(n)$) can fail to have ANY convergent subsequence at all.`,
      `Citing the theorem without being able to say WHICH subsequence or WHERE the limit lands — Chapter 5 applications often need this extra tracking (e.g. showing the limit point lands back inside $[a,b]$).`
    ],
    proof:{
      idea:`Combine two already-proved facts: (1) any sequence has a monotone subsequence (<code>c.3.4.7</code>); (2) a monotone sequence that is also bounded must converge (Monotone Convergence Theorem, §3.3 — ultimately a consequence of the Completeness Property <code>c.2.3.6</code>). Chain them together.`,
      why:`Monotonicity alone doesn't guarantee convergence (an increasing sequence can run off to $+\\infty$); boundedness alone doesn't either (a sequence can wander forever inside a bounded interval without settling, e.g. $((-1)^n)$). It's the COMBINATION that traps a sequence into settling at a single value, and completeness is exactly what gives "no room left to run" real teeth: a bounded increasing sequence converges to its supremum.`,
      rungs:[
        {
          why:`Start from what we already proved about the ORDER of any sequence — it always hides a monotone thread inside it.`,
          m:`$$X=(x_n) \\text{ bounded} \\ \\Rightarrow\\ X \\text{ has a monotone subsequence } X'=(x_{n_k}) \\quad\\text{(by Monotone Subsequence Thm, §3.4)}$$`,
          meaning:`What this really means: We don't care how wildly the sequence oscillates; by the Monotone Subsequence Theorem, an organized sub-stream that moves in only one direction always hides inside it.`
        },
        {
          why:`A subsequence of a bounded sequence is still bounded — you have only removed terms, never added any wilder new ones.`,
          m:`$$|x_n|\\le M\\ \\forall n \\ \\Rightarrow\\ |x_{n_k}|\\le M\\ \\forall k$$`,
          meaning:`What this really means: Filtering down to a sub-stream cannot introduce new spikes: since the full sequence was trapped between floors and ceilings, the sub-stream remains trapped too.`
        },
        {
          why:`Now $X'$ is BOTH monotone and bounded — exactly the hypothesis of the Monotone Convergence Theorem, whose proof is where completeness actually gets used: a bounded increasing sequence converges to its supremum.`,
          m:`$$X' \\text{ monotone} + \\text{bounded} \\ \\Rightarrow\\ X' \\text{ converges} \\quad\\text{(Monotone Convergence Thm, §3.3, via Completeness, §2.3)}$$`,
          meaning:`What this really means: Our sub-stream is one-directional and fenced in. Because real numbers have no holes (Completeness), a fenced one-way path is forced to settle at a limit.`
        },
        {
          why:`That convergent $X'$ IS a subsequence of the original $X$ — exactly what we set out to find.`,
          m:`$$\\therefore\\ X \\text{ has a convergent subsequence } X'$$`,
          meaning:`What this really means: Mission accomplished: out of any bounded chaos, we have extracted a disciplined sub-stream that smoothly locks onto a definite destination.`
        }
      ],
      ends:`Every bounded sequence — no matter how wildly it oscillates — has at least one subsequence that settles down to a genuine limit. This is the single fact Chapter 5 leans on hardest, to guarantee that a continuous function on a closed bounded interval actually attains a maximum and a minimum (rather than merely approaching one).`
    },
    cards:[
      { q:`State the Bolzano–Weierstrass Theorem.`, a:`Every bounded sequence of real numbers has a convergent subsequence.`, kind:'state' },
      { q:`Which two earlier results does the proof chain together?`, a:`The Monotone Subsequence Theorem (<code>c.3.4.7</code>) and the Monotone Convergence Theorem (§3.3, itself resting on completeness <code>c.2.3.6</code>).`, kind:'recall' },
      { q:`Find a convergent subsequence of $x_n=(-1)^n+1/n$.`, a:`The even-indexed subsequence $x_{2n}=1+1/(2n)\\to1$ converges (also the odd-indexed one converges to $-1$).`, kind:'apply' },
      { q:`Trap: does Bolzano–Weierstrass mean $((-1)^n)$ converges?`, a:`No — the theorem only guarantees SOME subsequence converges, not the whole sequence; $((-1)^n)$ itself is divergent, but its even and odd subsequences each converge.`, kind:'trap' }
    ]
  },

  {
    id: 'c.3.4.10', bartle: '3.4.10', sec: '3.4', kind: 'definition', tier: 'core',
    title: 'Limit Superior and Limit Inferior',
    oneLine: 'For any bounded sequence, limsup is the limit of tail suprema and liminf is the limit of tail infima.',
    statement: `Let $X = (x_n)$ be a bounded sequence of real numbers. For each $m \\in \\mathbb{N}$, define the tail bounds:
      $$v_m = \\sup\\{x_n : n \\ge m\\}, \\qquad u_m = \\inf\\{x_n : n \\ge m\\}$$
      The sequence $(v_m)$ is decreasing and bounded below; the sequence $(u_m)$ is increasing and bounded above.
      <p>(a) The <b>limit superior</b> (or upper limit) of $(x_n)$ is:
      $$\\limsup(x_n) = \\lim_{m\\to\\infty} v_m = \\inf_{m\\ge 1} \\left(\\sup_{n\\ge m} x_n\\right)$$</p>
      <p>(b) The <b>limit inferior</b> (or lower limit) of $(x_n)$ is:
      $$\\liminf(x_n) = \\lim_{m\\to\\infty} u_m = \\sup_{m\\ge 1} \\left(\\inf_{n\\ge m} x_n\\right)$$</p>`,
    intuition: `<p>Ordinary limits don't always exist: an oscillating sequence like $x_n = (-1)^n$ has no limit. But $\\limsup$ and $\\liminf$ <b>ALWAYS exist</b> for every bounded sequence!</p>
      <p>Think of $v_m$ as looking at the sequence from index $m$ onwards and finding the highest ceiling. As you look further ahead (larger $m$), you are considering fewer terms, so the ceiling $v_m$ can only decrease or stay the same. By the Monotone Convergence Theorem, $(v_m)$ must settle down to a limit: that is $\\limsup(x_n)$.</p>
      <p>Similarly, the floor $u_m$ rises as $m$ increases, settling down to $\\liminf(x_n)$. They capture the ultimate upper and lower bounds of oscillation.</p>`,
    needs: ['c.3.3.2', 'c.2.3.2', 'c.3.1.3'],
    traps: [
      `Confusing $\\sup(x_n)$ with $\\limsup(x_n)$: the supremum is the peak of ALL terms (including early outliers), while $\\limsup$ is the eventual peak ignoring any finite number of initial terms.`,
      `Assuming $\\limsup$ and $\\liminf$ can only be defined if the sequence converges. Their greatest strength is that they exist even when the sequence diverges!`
    ],
    cards: [
      { q: 'State the definition of $\\limsup(x_n)$ for a bounded sequence.', a: '$\\limsup(x_n) = \\lim_{m\\to\\infty} (\\sup\\{x_n : n \\ge m\\}) = \\inf_{m\\ge 1} (\\sup_{n\\ge m} x_n)$.', kind: 'state' },
      { q: 'Why is the sequence of tail suprema $v_m = \\sup\\{x_n : n \\ge m\\}$ guaranteed to converge?', a: 'Because $(v_m)$ is decreasing and bounded below, so the Monotone Convergence Theorem guarantees its convergence.', kind: 'recall' },
      { q: 'Compute $\\limsup(x_n)$ and $\\liminf(x_n)$ for $x_n = (-1)^n + 1/n$.', a: '$\\limsup(x_n) = 1$ and $\\liminf(x_n) = -1$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.3.4.11', bartle: '3.4.11', sec: '3.4', kind: 'theorem', tier: 'core',
    title: 'Convergence Criterion via limsup and liminf',
    oneLine: 'A bounded sequence converges if and only if limsup equals liminf, in which case both equal the limit.',
    statement: `Let $X = (x_n)$ be a bounded sequence of real numbers.
      <p>Then $(x_n)$ converges if and only if:
      $$\\limsup(x_n) = \\liminf(x_n)$$</p>
      <p>In this case, the ordinary limit exists and satisfies:
      $$\\lim_{n\\to\\infty} x_n = \\limsup_{n\\to\\infty} x_n = \\liminf_{n\\to\\infty} x_n$$</p>`,
    intuition: `<p>$\\limsup$ is the ceiling and $\\liminf$ is the floor of the sequence's long-term behavior. If the ceiling and the floor collapse into the exact same value $L$, the sequence has zero room to oscillate — it is squashed into convergence at $L$!</p>
      <p>Conversely, if a sequence converges to $L$, both its tail suprema and tail infima must squeeze in toward $L$. This gives a powerful test: to show a bounded sequence diverges, simply show $\\limsup(x_n) \\ne \\liminf(x_n)$.</p>`,
    needs: ['c.3.4.10', 'c.3.2.4', 'c.3.1.3'],
    traps: [
      `Forgetting that the sequence must be bounded: unbounded sequences can have $\\limsup$ or $\\liminf$ equal to $\\pm\\infty$.`,
      `Thinking that because $\\limsup$ exists, the sequence must converge. It converges ONLY when $\\limsup = \\liminf$.`
    ],
    proof: {
      idea: `Observe that $u_m \\le x_m \\le v_m$ for all $m$. If $\\lim u_m = \\lim v_m = L$, the Squeeze Theorem forces $\\lim x_m = L$. The converse follows directly from the ε-definition of limits.`,
      why: `Every term $x_m$ is bounded below by the infimum of its tail $u_m$ and above by the supremum of its tail $v_m$.`,
      rungs: [
        {
          why: 'Notice that for every $m \\in \\mathbb{N}$, $x_m \\in \\{x_n : n \\ge m\\}$, which directly gives the fundamental sandwich inequality.',
          m: '$$u_m = \\inf\\{x_n : n \\ge m\\} \\le x_m \\le \\sup\\{x_n : n \\ge m\\} = v_m \\quad \\text{for all } m \\in \\mathbb{N}$$',
          meaning: 'What this really means: Looking forward from term $m$, $x_m$ is naturally sandwiched between the absolute floor ($u_m$) and absolute ceiling ($v_m$) of all future terms.'
        },
        {
          why: '(⇐) Suppose $\\limsup(x_n) = \\liminf(x_n) = L$. By definition of limit superior and inferior, $\\lim(u_m) = L$ and $\\lim(v_m) = L$.',
          m: '$$\\lim_{m\\to\\infty} u_m = L \\quad \\text{and} \\quad \\lim_{m\\to\\infty} v_m = L$$',
          meaning: 'What this really means: If the upper horizons and lower horizons converge to the exact same value $L$, the floor and ceiling are closing in on each other.'
        },
        {
          why: 'Apply the Squeeze Theorem (3.2.4) to the inequality $u_m \\le x_m \\le v_m$.',
          m: '$$u_m \\le x_m \\le v_m \\implies \\lim_{m\\to\\infty} x_m = L$$',
          meaning: 'What this really means: Trapped between a rising floor and a descending ceiling that meet at $L$, the terms in the middle have no wiggle room and are squeezed into $L$.'
        },
        {
          why: '(⇒) Conversely, suppose $\\lim(x_n) = x$. Given $\\varepsilon > 0$, choose $K \\in \\mathbb{N}$ such that $x - \\varepsilon < x_n < x + \\varepsilon$ for all $n \\ge K$.',
          m: '$$n \\ge K \\implies x - \\varepsilon < x_n < x + \\varepsilon$$',
          meaning: 'What this really means: If the sequence already converges to $x$, all future terms past some checkpoint $K$ are permanently confined within a narrow band around $x$.'
        },
        {
          why: 'Then for any $m \\ge K$, $x + \\varepsilon$ is an upper bound and $x - \\varepsilon$ is a lower bound for the tail $\\{x_n : n \\ge m\\}$.',
          m: '$$x - \\varepsilon \\le u_m \\le v_m \\le x + \\varepsilon \\quad \\text{for all } m \\ge K$$',
          meaning: 'What this really means: Because all tail terms sit inside this band, the lowest floor and highest ceiling of the tail are also captured entirely inside this narrow band.'
        },
        {
          why: 'Take the limit as $m \\to \\infty$ to conclude that both $\\liminf$ and $\\limsup$ lie in $[x - \\varepsilon, x + \\varepsilon]$.',
          m: '$$x - \\varepsilon \\le \\liminf(x_n) \\le \\limsup(x_n) \\le x + \\varepsilon$$',
          meaning: 'What this really means: As $m$ rolls forward, both extreme horizons are locked within distance $\\varepsilon$ of the limit $x$.'
        },
        {
          why: 'Since $\\varepsilon > 0$ was arbitrary, this forces equality.',
          m: '$$\\limsup(x_n) = \\liminf(x_n) = x = \\lim(x_n)$$',
          meaning: 'What this really means: Because this clamping holds for arbitrarily microscopic $\\varepsilon$, the floor and ceiling horizons must coincide identically with $x$.'
        }
      ],
      ends: 'A bounded sequence converges if and only if its limit superior equals its limit inferior, and both equal the sequence limit.'
    },
    cards: [
      { q: 'State Theorem 3.4.11 (Convergence via limsup and liminf).', a: 'A bounded sequence $(x_n)$ converges if and only if $\\limsup(x_n) = \\liminf(x_n) = \\lim(x_n)$.', kind: 'state' },
      { q: 'How does the Squeeze Theorem prove the sufficiency of $\\limsup = \\liminf$?', a: 'Because $u_m \\le x_m \\le v_m$, if both $(u_m)$ and $(v_m)$ converge to $L$, $(x_m)$ is squeezed to $L$.', kind: 'recall' },
      { q: 'If $(x_n)$ is bounded and $\\limsup(x_n) = 3$ while $\\liminf(x_n) = -1$, does $(x_n)$ converge?', a: 'No, because $\\limsup(x_n) \\ne \\liminf(x_n)$.', kind: 'apply' }
    ]
  },

  { id:'c.4.1.1', bartle:'4.1.1', sec:'4.1', kind:'definition', tier:'core',
    title:'Cluster point of a set',
    oneLine:'c is a cluster point of A if points of A other than c itself pile up arbitrarily close to c.',
    statement:`<p>Let $A\\subseteq\\mathbb{R}$. A point $c\\in\\mathbb{R}$ is a <b>cluster point</b> of $A$ if for every $\\delta>0$ there exists at least one point $x\\in A$, $x\\ne c$, such that $|x-c|<\\delta$.</p>`,
    intuition:`<p>Points of $A$, excluding $c$ itself, must get arbitrarily close to $c$. Notice $c$ does NOT need to belong to $A$ at all — and even if $c\\in A$, its own membership is ignored when deciding whether it's a cluster point.</p>
      <p><b>Worked micro-example:</b> $A=(0,1)$. Every point of $[0,1]$ is a cluster point of $A$ — including the endpoints $0$ and $1$, even though neither belongs to $A$. By contrast, $A=\\{1,2\\}$ has NO cluster points: pick $\\delta=1/2$ around either point and no other point of $A$ falls within $\\delta$.</p>`,
    needs:['s.abs-ineq','s.quantifier'],
    traps:[
      `Assuming $c$ must belong to $A$ to be a cluster point of $A$ — false; e.g. $0,1$ are cluster points of $(0,1)$ without being members.`,
      `Assuming EVERY point of $A$ is automatically a cluster point of $A$ — false for isolated points, e.g. none of the points $1/n$ is a cluster point of $\\{1/n : n\\in\\mathbb{N}\\}$; only $0$ is (and $0\\notin A$).`
    ],
    cards:[
      { q:`Define "cluster point of A" in your own words.`, a:`A point that points of $A$ (other than itself) get arbitrarily close to — every neighbourhood of it contains some point of $A$ different from itself.`, kind:'state' },
      { q:`Is $1$ a cluster point of $A=\\{1,2\\}$?`, a:`No — a small enough neighbourhood of $1$ (e.g. radius $1/2$) contains no other point of $A$.`, kind:'apply' },
      { q:`Trap: is $0$ a cluster point of $A=\\{1/n : n\\in\\mathbb{N}\\}$, even though $0\\notin A$?`, a:`Yes — cluster points need not belong to the set; the terms $1/n$ pile up arbitrarily close to $0$.`, kind:'trap' }
    ]
  },

  { id:'c.4.1.4', bartle:'4.1.4', sec:'4.1', kind:'definition', tier:'core',
    title:'The ε-δ definition of the limit of a function',
    oneLine:'f has limit L at c if, for any output-tolerance ε, some input-tolerance δ guarantees every nearby x lands f(x) within ε of L.',
    statement:`<p>Let $A\\subseteq\\mathbb{R}$, let $c$ be a cluster point of $A$, and let $f:A\\to\\mathbb{R}$. A number $L$ is the <b>limit of $f$ at $c$</b>, written $\\lim_{x\\to c}f(x)=L$, if for every $\\varepsilon>0$ there exists $\\delta>0$ such that $x\\in A$ and $0<|x-c|<\\delta$ implies $|f(x)-L|<\\varepsilon$.</p>`,
    intuition:`<p>You get to demand any output-tolerance $\\varepsilon$ you like; the definition promises you can always find an input-tolerance $\\delta$ so that every $x\\in A$ within $\\delta$ of $c$ (but NOT equal to $c$ — that's what "$0<|x-c|$" enforces) lands $f(x)$ within $\\varepsilon$ of $L$. Since $x=c$ is deliberately excluded, $f$ need not even be defined at $c$, and even when it is, $f(c)$'s value is completely irrelevant to the limit.</p>
      <p><b>Worked micro-example:</b> $\\lim_{x\\to c}x^2=c^2$. Given $\\varepsilon>0$, one valid choice is $\\delta:=\\min\\{1,\\ \\varepsilon/(2|c|+1)\\}$: whenever $|x-c|<\\delta\\le1$, $|x+c|<2|c|+1$, so $|x^2-c^2|=|x+c||x-c|<(2|c|+1)\\cdot\\delta\\le\\varepsilon$.</p>`,
    needs:['c.4.1.1','s.abs-ineq','s.quantifier'],
    traps:[
      `Forgetting $c$ must be a cluster point of $A$ — the definition is meaningless (or vacuous) at an isolated point of $A$.`,
      `Dropping the "$0<|x-c|$" and accidentally requiring something about $f(c)$ itself — the limit never depends on $f(c)$, only on nearby values.`,
      `Confusing which variable depends on which — $\\delta$ depends on $\\varepsilon$ (and possibly $c$), never the reverse; writing "$\\delta:=\\varepsilon$" without actually checking it controls $|f(x)-L|$.`
    ],
    cards:[
      { q:`State the ε-δ definition of $\\lim_{x\\to c}f(x)=L$.`, a:`For every $\\varepsilon>0$ there exists $\\delta>0$ such that $x\\in A,\\ 0<|x-c|<\\delta \\Rightarrow |f(x)-L|<\\varepsilon$.`, kind:'state' },
      { q:`Why does the definition require $0<|x-c|$ rather than just $|x-c|<\\delta$?`, a:`To exclude $x=c$ itself, since the limit describes behaviour NEAR $c$, not at $c$ — $f$ need not even be defined there.`, kind:'recall' },
      { q:`Find a valid $\\delta$ for $\\lim_{x\\to c}x^2=c^2$ given $\\varepsilon>0$.`, a:`$\\delta:=\\min\\{1,\\ \\varepsilon/(2|c|+1)\\}$.`, kind:'apply' }
    ]
  },

  { id:'c.4.1.8', bartle:'4.1.8', sec:'4.1', kind:'theorem', tier:'core',
    title:'Sequential Criterion for Limits',
    oneLine:'f has limit L at c exactly when every sequence approaching c (avoiding c itself) has images approaching L.',
    statement:`<p>Let $f:A\\to\\mathbb{R}$ and let $c$ be a cluster point of $A$. The following are equivalent:</p>
      <p>(i) $\\lim_{x\\to c}f(x)=L$.</p>
      <p>(ii) For every sequence $(x_n)$ in $A$ with $x_n\\ne c$ for all $n$, and $\\lim(x_n)=c$, the image sequence $(f(x_n))$ converges to $L$.</p>`,
    intuition:`<p>The $\\varepsilon$-$\\delta$ definition talks about ALL $x$ near $c$ at once, directly. The sequential version says exactly the same thing using only sequences — which lets you reuse everything already proved about sequence limits (uniqueness, divergence criteria, algebra of limits) to attack function limits, and gives the single best tool for PROVING a function limit does NOT exist: just exhibit one bad sequence whose images misbehave.</p>`,
    needs:['c.4.1.4','c.3.1.3','c.4.1.1'],
    traps:[
      `Using the criterion with only ONE "good" sequence to try to PROVE a limit exists — one sequence behaving well proves nothing; the criterion needs EVERY valid sequence to behave.`,
      `To prove a limit does NOT exist, forgetting that just ONE bad sequence is enough — no need to check all of them in that direction.`,
      `Forgetting the requirement $x_n\\ne c$ in the hypothesis sequence, or (in the harder direction) forgetting to check the constructed sequence actually stays inside $A$ and genuinely converges to $c$.`
    ],
    proof:{
      idea:`Two directions. (⇒) is direct substitution: feed the $\\delta$ from the function-limit definition into the $K$ that comes from the sequence's own convergence to $c$. (⇐) is the harder direction, proved by contrapositive: assume the function limit FAILS, build one explicit bad sequence using shrinking $1/n$-neighbourhoods, and show it breaks the hypothesis.`,
      why:`Matching $\\delta$ and $K(\\delta)$ bridges continuous geometry to discrete sequential indices, while contrapositive with $\\delta=1/n$ constructs a counterexample sequence.`,
      rungs:[
        {
          why:`(⇒) Assume $\\lim_{x\\to c}f=L$; take ANY sequence $(x_n)$ in $A\\setminus\\{c\\}$ with $(x_n)\\to c$. We must show $(f(x_n))\\to L$. Start from the $\\varepsilon$-$\\delta$ promise.`,
          m:`$$\\text{given }\\varepsilon>0,\\ \\exists\\delta>0: x\\in A,\\ 0<|x-c|<\\delta \\Rightarrow |f(x)-L|<\\varepsilon$$`,
          meaning:`What this really means: The function limit provides a security guarantee: whenever an input lands within radius $\\delta$ of $c$, its output is guaranteed to land within $\\varepsilon$ of $L$.`
        },
        {
          why:`Now use $(x_n)\\to c$: feed THIS $\\delta$ into the sequence\'s own convergence to $c$ to get an index $K$ that traps $x_n$ within $\\delta$ of $c$.`,
          m:`$$(x_n)\\to c \\ \\Rightarrow\\ \\exists K(\\delta): n\\ge K(\\delta) \\Rightarrow |x_n-c|<\\delta$$`,
          meaning:`What this really means: Because our stepping stones $(x_n)$ approach $c$, past step $K$ they all step inside that exact required radius $\\delta$.`
        },
        {
          why:`Combine: past $K$, $x_n$ is within $\\delta$ of $c$ (and $\\ne c$ by hypothesis), so the $\\delta$-promise from step 1 fires and controls $f(x_n)$.`,
          m:`$$n\\ge K(\\delta) \\ \\Rightarrow\\ 0<|x_n-c|<\\delta \\ \\Rightarrow\\ |f(x_n)-L|<\\varepsilon$$`,
          meaning:`What this really means: The two pieces click together: because the stepping stones land inside the $\\delta$-zone, the function's guarantee activates and drives the outputs within $\\varepsilon$ of $L$.`
        },
        {
          why:`(⇐) Prove the CONTRAPOSITIVE instead: assume $f$ does NOT have limit $L$ at $c$, and construct one specific bad sequence. Negating "$\\forall\\varepsilon\\,\\exists\\delta\\ldots$" means one bad $\\varepsilon_0$ defeats every $\\delta$.`,
          m:`$$\\exists\\,\\varepsilon_0>0:\\ \\forall\\delta>0,\\ \\exists x_\\delta\\in A,\\ 0<|x_\\delta-c|<\\delta,\\ |f(x_\\delta)-L|\\ge\\varepsilon_0$$`,
          meaning:`What this really means: If the limit fails, there is a fixed error barrier $\\varepsilon_0$ such that no matter how narrow a window $\\delta$ you build around $c$, at least one rogue point inside misses the target.`
        },
        {
          why:`Apply this with $\\delta=1/n$ for each $n\\in\\mathbb{N}$ — one bad point per shrinking neighbourhood — to manufacture a whole sequence.`,
          m:`$$\\forall n\\in\\mathbb{N},\\ \\exists x_n\\in A,\\ 0<|x_n-c|<1/n,\\ |f(x_n)-L|\\ge\\varepsilon_0$$`,
          meaning:`What this really means: We set shrinking radii $1, 1/2, 1/3, \\dots$ and harvest one rogue point from each circle, manufacturing a custom-made sequence of troublemakers.`
        },
        {
          why:`Check this sequence really does converge to $c$ (the $1/n$ bound forces it, by squeeze), while its image sequence provably never gets close to $L$.`,
          m:`$$(x_n)\\to c, \\quad\\text{but } (f(x_n))\\not\\to L \\quad(\\text{since } |f(x_n)-L|\\ge\\varepsilon_0 \\text{ always})$$`,
          meaning:`What this really means: The rogue sequence marches directly into $c$, yet its function values stubbornly refuse to approach $L$, proving that failure of the function limit always spawns a failing sequence.`
        }
      ],
      ends:`We've shown: no function limit $\\Rightarrow$ some bad sequence exists (the contrapositive of (⇐)). Combined with the direct (⇒) direction, the $\\varepsilon$-$\\delta$ limit and "every valid sequence has the right image limit" are exactly equivalent statements.`
    },
    cards:[
      { q:`State the Sequential Criterion for Limits.`, a:`$\\lim_{x\\to c}f(x)=L$ iff for every sequence $(x_n)$ in $A\\setminus\\{c\\}$ with $(x_n)\\to c$, the image sequence $(f(x_n))\\to L$.`, kind:'state' },
      { q:`To prove $\\lim_{x\\to c}f(x)\\ne L$, how many sequences do you need to check, and how many do you need to exhibit?`, a:`You need it to fail for at least one sequence (so exhibiting ONE bad sequence suffices) — but to prove it DOES equal $L$, you need it to hold for EVERY valid sequence, which the $\\varepsilon$-$\\delta$ definition (or a general argument) must establish.`, kind:'recall' },
      { q:`How does the (⇐) direction construct its bad sequence?`, a:`It uses the negation of the $\\varepsilon$-$\\delta$ definition with a single fixed $\\varepsilon_0$, then plugs in $\\delta=1/n$ for each $n$ to get points $x_n\\to c$ whose images stay $\\ge\\varepsilon_0$ from $L$.`, kind:'apply' }
    ]
  },

  { id:'c.4.1.9', bartle:'4.1.9', sec:'4.1', kind:'theorem', tier:'core',
    title:'Divergence Criteria (for functions)',
    oneLine:'To disprove a function limit, exhibit one sequence heading to c whose images misbehave.',
    statement:`<p>Let $f:A\\to\\mathbb{R}$ and let $c$ be a cluster point of $A$.</p>
      <p>(a) $f$ does NOT have limit $L$ at $c$ if and only if there is a sequence $(x_n)$ in $A$, $x_n\\ne c$, with $(x_n)\\to c$, such that $(f(x_n))$ does not converge to $L$.</p>
      <p>(b) $f$ has no limit at all at $c$ if and only if there is such a sequence $(x_n)\\to c$ for which $(f(x_n))$ does not converge in $\\mathbb{R}$ at all.</p>`,
    intuition:`<p>This is simply the Sequential Criterion (<code>c.4.1.8</code>) read backwards, turned into a practical recipe. Instead of fighting the $\\varepsilon$-$\\delta$ definition head-on to show a limit fails, build ONE concrete sequence heading to $c$ whose images misbehave — that alone is a complete proof.</p>
      <p><b>Worked micro-example:</b> $\\lim_{x\\to0}\\sin(1/x)$ does not exist. Take $x_n=1/(n\\pi)\\to0$, giving $\\sin(1/x_n)=0$ always; and $y_n=1/(\\pi/2+2n\\pi)\\to0$, giving $\\sin(1/y_n)=1$ always. Two sequences heading to the same point $0$, but different image limits ($0$ vs $1$) — so by part (b), no limit exists.</p>`,
    needs:['c.4.1.8'],
    traps:[
      `Using a sequence that doesn't actually satisfy $x_n\\ne c$, or doesn't actually converge to $c$ — invalidates the whole argument.`,
      `Showing $f(x_n)$ diverges for one sequence and then worrying you haven't "checked enough" sequences — for DISPROVING a limit, one bad sequence is sufficient; there's no need to check all of them.`
    ],
    proof: {
      idea: 'Negate the Sequential Criterion for Function Limits (Theorem 4.1.8).',
      why: 'By Theorem 4.1.8, $\\lim_{x\\to c} f(x) = L$ holds if and only if every punctured sequence $x_n \\to c$ satisfies $f(x_n) \\to L$.',
      rungs: [
        {
          why: 'State the Sequential Criterion (c.4.1.8): $\\lim_{x\\to c} f(x) = L$ iff for all sequences $(x_n)$ in $A \\setminus \\{c\\}$ with $x_n \\to c$, $f(x_n) \\to L$.',
          m: '$$\\lim_{x\\to c} f(x) = L \\iff (\\forall (x_n) \\subseteq A\\setminus\\{c\\},\\, x_n \\to c \\implies f(x_n) \\to L)$$',
          meaning: 'What this really means: For a function limit to exist, every possible sequence of stepping stones approaching $c$ must force the function values to approach the exact same target $L$.'
        },
        {
          why: 'Negate the equivalence for part (a): $\\lim_{x\\to c} f(x) \\ne L$ if and only if there is at least one sequence $(x_n)$ with $x_n \\to c$ but $f(x_n) \\not\\to L$.',
          m: '$$\\lim_{x\\to c} f(x) \\ne L \\iff \\exists (x_n) \\subseteq A\\setminus\\{c\\}: x_n \\to c \\text{ and } f(x_n) \\not\\to L$$',
          meaning: 'What this really means: To disprove that $L$ is the limit, you don\'t have to test infinitely many sequences—you only need to find a single rogue path heading to $c$ whose values miss $L$.'
        },
        {
          why: 'For part (b), $f$ has no limit in $\\mathbb{R}$ at all if and only if no candidate $L$ works; either some $(f(x_n))$ diverges entirely, or two sequences produce distinct limits.',
          m: '$$\\exists (x_n) \\subseteq A\\setminus\\{c\\}: x_n \\to c \\text{ and } (f(x_n)) \\text{ diverges in } \\mathbb{R}$$',
          meaning: 'What this really means: To prove a function has no limit whatsoever, produce two separate sequences heading to $c$ that end up at two completely different destinations, or one sequence whose values shoot off to infinity or oscillate wildly.'
        }
      ],
      ends: 'Thus a single bad sequence is necessary and sufficient to disprove the existence of a limit.'
    },
    cards:[
      { q:`To show $f$ has no limit at $c$, how many sequences suffice, and what must they satisfy?`, a:`One sequence $(x_n)$ in $A\\setminus\\{c\\}$ with $(x_n)\\to c$ but $(f(x_n))$ not converging (or two such sequences converging to different image limits) is enough.`, kind:'state' },
      { q:`Show $\\lim_{x\\to0}\\sin(1/x)$ does not exist, using two sequences.`, a:`$x_n=1/(n\\pi)\\to0$ gives $f(x_n)=0\\to0$; $y_n=1/(\\pi/2+2n\\pi)\\to0$ gives $f(y_n)=1\\to1$. Different image limits from sequences converging to the same point, so no limit exists.`, kind:'apply' },
      { q:`Trap: does disproving convergence for one sequence prove the limit exists and equals something else?`, a:`No — it only proves the limit is NOT that particular candidate value (or does not exist at all, per part (b)); it says nothing else about what, if anything, the limit could be.`, kind:'trap' }
    ]
  }
);
