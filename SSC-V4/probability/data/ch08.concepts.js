if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }
CONCEPTS.push(...
[
  {
    "id": "c.prob.8.1.1",
    "sec": "8.1",
    "kind": "definition",
    "tier": "core",
    "title": "Law of large numbers versus central limit theorem",
    "oneLine": "LLNs describe convergence of averages; CLTs describe the standardized shape of sums.",
    "statement": "A law of large numbers states conditions under which sample averages converge to their population mean, in probability or almost surely. A central limit theorem describes the limiting distribution of a centered and scaled sum, typically standard normal.",
    "intuition": "The LLN gives a target and convergence mode; the CLT gives the size and shape of typical fluctuations around that target.",
    "needs": [],
    "traps": "Weak and strong laws use different modes of convergence. A CLT is distributional convergence of normalized sums, not almost-sure convergence.",
    "cards": [
      {
        "q": "What does an LLN describe, and what does a CLT describe?",
        "a": "An LLN describes convergence of averages to a mean; a CLT describes the limiting distribution of centered, scaled sums.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.1, introduction, PDF p. 391."
  },
  {
    "id": "c.prob.8.2.1",
    "sec": "8.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Markov and Chebyshev inequalities",
    "oneLine": "A mean bounds a nonnegative tail; a variance bounds deviations from the mean.",
    "statement": "If $X\\ge0$ and $a>0$, $P(X\\ge a)\\le E[X]/a$. If $E[X]=\\mu$ and $\\operatorname{Var}(X)=\\sigma^2<\\infty$, then for $k>0$, $P(|X-\\mu|\\ge k)\\le\\sigma^2/k^2$.",
    "intuition": "Markov compares the expectation to the minimum contribution from the tail event. Chebyshev applies Markov to the nonnegative square $(X-\\mu)^2$.",
    "needs": [
      "c.prob.7.2.1"
    ],
    "traps": "Markov requires nonnegativity; Chebyshev uses squared deviation, so no support restriction is needed. Strict versus weak inequality endpoints do not change the standard bound when used consistently.",
    "cards": [
      {
        "q": "State Markov’s and Chebyshev’s inequalities.",
        "a": "If X≥0, $P(X≥a)≤E[X]/a$. If X has mean μ and variance σ², $P(|X−μ|≥k)≤σ²/k²$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.2, Propositions 2.1–2.2, PDF p. 392.",
    "proof": {
      "idea": "For Markov, bound the indicator of the tail by X/a; for Chebyshev, apply Markov to squared deviation.",
      "why": "Expectations preserve pointwise inequalities.",
      "rungs": [
        {
          "why": "On $\\{X\\ge a\\}$, the indicator is at most X/a.",
          "m": "$\\mathbf1_{\\{X\\ge a\\}}\\le X/a$",
          "meaning": "Outside the event, the left side is zero; inside, X/a≥1."
        },
        {
          "why": "Take expectations.",
          "m": "$P(X\\ge a)\\le E[X]/a$",
          "meaning": "This proves Markov’s inequality."
        },
        {
          "why": "Apply Markov to $(X-\\mu)^2$ at threshold $k^2$.",
          "m": "$P((X-\\mu)^2\\ge k^2)\\le E[(X-\\mu)^2]/k^2=\\sigma^2/k^2$",
          "meaning": "The event is exactly the absolute-deviation event."
        }
      ],
      "ends": "Markov and Chebyshev bounds."
    }
  },
  {
    "id": "c.prob.8.2.2",
    "sec": "8.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Weak law of large numbers",
    "oneLine": "The sample mean of iid finite-variance variables converges in probability to their common mean.",
    "statement": "If $X_i$ are iid with $E[X_i]=\\mu$ and finite variance $\\sigma^2$, then for every $\\epsilon>0$, $P(|\\bar X_n-\\mu|\\ge\\epsilon)\\to0$. Chebyshev gives the bound $\\sigma^2/(n\\epsilon^2)$. The classical weak law holds under the weaker condition of finite mean alone.",
    "intuition": "The variance of the average shrinks like 1/n under independence; Chebyshev converts that shrinking variance into a probability bound.",
    "needs": [
      "c.prob.8.2.1",
      "c.prob.7.4.2"
    ],
    "traps": "The elementary proof uses finite variance; the general iid finite-mean theorem is stronger. Convergence in probability does not assert that all later sample means stay close on every outcome.",
    "cards": [
      {
        "q": "State the weak law and the finite-variance Chebyshev bound.",
        "a": "$P(|\\bar X_n-\\mu|\\ge\\epsilon)\\le\\sigma^2/(n\\epsilon^2)\\to0$ for iid variables with finite variance.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.2, Theorem 2.1, PDF p. 394.",
    "proof": {
      "idea": "Compute mean and variance of the average, then apply Chebyshev.",
      "why": "Independence makes variances add and the factor 1/n² reduces total variance to σ²/n.",
      "rungs": [
        {
          "why": "Use linearity for the mean.",
          "m": "$E[\\bar X_n]=\\mu$",
          "meaning": "The average is centered at the common mean."
        },
        {
          "why": "Use independence for its variance.",
          "m": "$\\operatorname{Var}(\\bar X_n)=\\sigma^2/n$",
          "meaning": "Each variance contributes σ²/n²."
        },
        {
          "why": "Apply Chebyshev at distance ε.",
          "m": "$P(|\\bar X_n-\\mu|\\ge\\epsilon)\\le\\sigma^2/(n\\epsilon^2)$",
          "meaning": "The upper bound tends to zero."
        }
      ],
      "ends": "Convergence in probability of the sample mean to μ."
    }
  },
  {
    "id": "c.prob.8.3.1",
    "sec": "8.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Classical central limit theorem",
    "oneLine": "Standardized iid sums with finite nonzero variance converge in distribution to the standard normal.",
    "statement": "If $X_i$ are iid with finite mean $\\mu$ and $0<\\sigma^2=\\operatorname{Var}(X_i)<\\infty$, then $Z_n=(\\sum_{i=1}^nX_i-n\\mu)/(\\sigma\\sqrt n)$ converges in distribution to $N(0,1)$. Equivalently, its cdf tends to $\\Phi(a)$ at every real a.",
    "intuition": "Many small independent contributions, after centering and scaling, have an approximately bell-shaped aggregate even if the individual distribution is not normal.",
    "needs": [
      "c.prob.7.4.2"
    ],
    "traps": "The standardization uses $\\sigma\\sqrt n$, not nσ. For finite n this is an approximation, and a continuity correction may improve discrete sums.",
    "cards": [
      {
        "q": "State the iid central limit theorem standardization.",
        "a": "$ (\\sum_iX_i-n\\mu)/(\\sigma\\sqrt n)\\Rightarrow N(0,1)$ for iid finite-variance variables with σ>0.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.3, Theorem 3.1, PDF p. 395.",
    "proof": {
      "idea": "Expand the characteristic function near zero for the normalized centered sum, then apply the continuity theorem.",
      "why": "Finite variance gives a second-order characteristic-function expansion; independence turns it into a power converging to the standard normal characteristic function.",
      "rungs": [
        {
          "why": "Standardize one summand to mean zero and variance one.",
          "m": "$\\varphi_Y(t)=1-t^2/2+o(t^2)$ as $t\\to0$",
          "meaning": "The second-order expansion requires only a finite second moment, not an MGF."
        },
        {
          "why": "Use independence to express the characteristic function of the normalized sum.",
          "m": "$\\varphi_{n^{-1/2}\\sum_iY_i}(t)=[\\varphi_Y(t/\\sqrt n)]^n$",
          "meaning": "Every factor is evaluated at an argument tending to zero."
        },
        {
          "why": "Take the limit of this power.",
          "m": "$[1-t^2/(2n)+o(1/n)]^n\\to e^{-t^2/2}$",
          "meaning": "The limit is the standard normal characteristic function."
        }
      ],
      "ends": "By the continuity theorem, the normalized sum converges in distribution to N(0,1)."
    }
  },
  {
    "id": "c.prob.8.3.2",
    "sec": "8.3",
    "kind": "technique",
    "tier": "core",
    "title": "Using the CLT for sums and averages",
    "oneLine": "Convert a sum event to a z-score using its exact mean and variance, then use Φ.",
    "statement": "For iid variables with mean μ and variance σ², approximate $P(\\sum_iX_i\\le x)$ by $\\Phi((x-n\\mu)/(\\sigma\\sqrt n))$ for large n. For a sample mean, use standard error $\\sigma/\\sqrt n$. For lattice-valued sums, a half-unit continuity correction is often useful.",
    "intuition": "The CLT rescales the aggregate to a standard-normal coordinate. The same arithmetic applies whether the question asks about a sum or mean.",
    "needs": [
      "c.prob.8.3.1"
    ],
    "traps": "The approximation quality depends on n and the underlying distribution; strong skewness or heavy tails can make small-n approximations poor.",
    "cards": [
      {
        "q": "What is the CLT standard error of an iid sample mean?",
        "a": "$\\sigma/\\sqrt n$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.3, Examples 3a–3e, PDF pp. 396–400."
  },
  {
    "id": "c.prob.8.4.1",
    "sec": "8.4",
    "kind": "theorem",
    "tier": "extra",
    "title": "Strong law of large numbers",
    "oneLine": "Iid integrable variables have sample averages converging almost surely to their common mean.",
    "statement": "If $X_i$ are iid and $E[|X_1|]<\\infty$, then $P(\\lim_{n\\to\\infty}\\bar X_n=\\mu)=1$, where $\\mu=E[X_1]$. In particular, sample proportions of an event in independent replications converge almost surely to the event probability.",
    "intuition": "Almost-sure convergence says that with probability one, a realized infinite sequence eventually tracks the mean arbitrarily closely. It is stronger than convergence in probability.",
    "needs": [
      "c.prob.8.2.2"
    ],
    "traps": "The result concerns almost every infinite sample path, not every path. Its assumptions are about iid sampling and finite absolute mean.",
    "cards": [
      {
        "q": "State the strong law of large numbers.",
        "a": "For iid Xᵢ with finite absolute mean μ, $\\bar X_n\\to\\mu$ almost surely.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.4, Theorem 4.1, PDF p. 401.",
    "proof": {
      "idea": "Truncate the iid variables, apply a variance summability criterion, and remove truncation.",
      "why": "Finite absolute mean makes large observations rare enough for Borel–Cantelli and controls the total variance of the truncated sequence.",
      "rungs": [
        {
          "why": "Truncate at level n and use integrability.",
          "m": "$X_nprime=X_n\\mathbf1_{\\{|X_n|\\le n\\}},\\quad\\sum_nP(X_n\\ne X_nprime)<\\infty$",
          "meaning": "Borel–Cantelli says only finitely many terms are changed almost surely."
        },
        {
          "why": "Center the truncations; their variances are summable after division by n².",
          "m": "$\\sum_n\\operatorname{Var}(X_nprime)/n^2<\\infty$",
          "meaning": "This follows by exchanging sum and expectation and using E|X₁|<∞."
        },
        {
          "why": "Apply the independent-series criterion and Kronecker lemma.",
          "m": "$n^{-1}\\sum_{i=1}^n(X_iprime-E[X_iprime])\\to0\\quad a.s.$",
          "meaning": "The centered truncated averages vanish almost surely."
        },
        {
          "why": "The truncated means converge to μ.",
          "m": "$E[X_nprime]\\to E[X_1]=\\mu$",
          "meaning": "Dominated convergence finishes the average limit; finitely many changed terms do not affect it."
        }
      ],
      "ends": "The sample averages converge to μ almost surely under the finite-absolute-mean assumption."
    }
  },
  {
    "id": "c.prob.8.5.1",
    "sec": "8.5",
    "kind": "theorem",
    "tier": "extra",
    "title": "One-sided Chebyshev inequality",
    "oneLine": "A one-sided deviation has a sharper variance-only bound than two-sided Chebyshev.",
    "statement": "For $E[X]=\\mu$, $\\operatorname{Var}(X)=\\sigma^2<\\infty$, and $a>0$, $P(X-\\mu\\ge a)\\le\\sigma^2/(\\sigma^2+a^2)$. The same bound holds for $P(X-\\mu\\le-a)$.",
    "intuition": "A shift by a positive constant lets Markov control a one-sided tail while optimizing the shift yields the sharper denominator.",
    "needs": [
      "c.prob.8.2.1"
    ],
    "traps": "Do not use this formula for a two-sided event without accounting for both tails.",
    "cards": [
      {
        "q": "State the one-sided Chebyshev bound.",
        "a": "$P(X-\\mu\\ge a)\\le\\sigma^2/(\\sigma^2+a^2)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.5, Proposition 5.1 and Corollary 5.1, PDF pp. 406–407.",
    "proof": {
      "idea": "Apply Markov to a shifted square and optimize the shift.",
      "why": "A one-sided event can be included inside a nonnegative squared-tail event whose expectation is controlled by the variance.",
      "rungs": [
        {
          "why": "For c>0, if X−μ≥a then (X−μ+c)²≥(a+c)².",
          "m": "$P(X-\\mu\\ge a)\\le E[(X-\\mu+c)^2]/(a+c)^2=(\\sigma^2+c^2)/(a+c)^2$",
          "meaning": "The centered cross term has expectation zero."
        },
        {
          "why": "Choose c=σ²/a.",
          "m": "$\\frac{\\sigma^2+\\sigma^4/a^2}{(a+\\sigma^2/a)^2}=\\frac{\\sigma^2}{\\sigma^2+a^2}$",
          "meaning": "This minimizes the bound over positive c."
        }
      ],
      "ends": "The one-sided Chebyshev (Cantelli) inequality follows."
    }
  },
  {
    "id": "c.prob.8.5.2",
    "sec": "8.5",
    "kind": "theorem",
    "tier": "extra",
    "title": "Chernoff bounds from an MGF",
    "oneLine": "An MGF gives exponential upper bounds for tails by Markov’s inequality.",
    "statement": "For t>0, $P(X\\ge a)\\le e^{-ta}M_X(t)$. For t<0, $P(X\\le a)\\le e^{-ta}M_X(t)$. Minimize over allowed t to sharpen the bound; for independent sums, multiply MGFs before optimizing.",
    "intuition": "Exponentials turn additive thresholds into multiplicative factors; Markov then gives a bound whose parameter can be tuned to the tail.",
    "needs": [
      "c.prob.7.7.1",
      "c.prob.8.2.1"
    ],
    "traps": "Use t>0 for upper tails and t<0 for lower tails. A valid MGF domain constrains the optimization.",
    "cards": [
      {
        "q": "Give the upper-tail Chernoff bound.",
        "a": "For t>0, $P(X\\ge a)\\le e^{-ta}M_X(t)$; optimize over positive t.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.5, Proposition 5.2, PDF pp. 407–408.",
    "proof": {
      "idea": "Apply Markov to the nonnegative variable $e^{tX}$.",
      "why": "For t>0, the event X≥a implies the exponential exceeds $e^{ta}$.",
      "rungs": [
        {
          "why": "Use the event implication.",
          "m": "$\\{X\\ge a\\}\\subseteq\\{e^{tX}\\ge e^{ta}\\}$",
          "meaning": "The exponential is increasing when t>0."
        },
        {
          "why": "Apply Markov.",
          "m": "$P(e^{tX}\\ge e^{ta})\\le E[e^{tX}]/e^{ta}$",
          "meaning": "The expectation is the MGF."
        }
      ],
      "ends": "The upper-tail Chernoff bound; t<0 gives the lower-tail version."
    }
  },
  {
    "id": "c.prob.8.5.3",
    "sec": "8.5",
    "kind": "theorem",
    "tier": "extra",
    "title": "Jensen’s inequality",
    "oneLine": "Convexity puts the function of a mean below the mean of the function.",
    "statement": "If g is convex and the expectations exist, $g(E[X])\\le E[g(X)]$. For concave g, the inequality reverses.",
    "intuition": "A convex graph lies above each tangent line. Averaging the tangent inequality cancels the centered linear term.",
    "needs": [],
    "traps": "Check whether the function is convex or concave before deciding the direction.",
    "cards": [
      {
        "q": "State Jensen’s inequality for convex g.",
        "a": "$g(E[X])\\le E[g(X)]$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.5, Proposition 5.3, PDF p. 409.",
    "proof": {
      "idea": "Apply the supporting-line inequality at the mean and take expectations.",
      "why": "The tangent’s linear deviation averages to zero.",
      "rungs": [
        {
          "why": "For differentiable convex g, use the tangent bound at μ=E[X].",
          "m": "$g(x)\\ge g(\\mu)+g\\prime(\\mu)(x-\\mu)$",
          "meaning": "A convex function lies above its tangent."
        },
        {
          "why": "Take expectations.",
          "m": "$E[g(X)]\\ge g(\\mu)+g\\prime(\\mu)(E[X]-\\mu)=g(E[X])$",
          "meaning": "The linear term vanishes."
        }
      ],
      "ends": "Jensen’s inequality; approximation extends to general convex functions."
    }
  },
  {
    "id": "c.prob.8.5.4",
    "sec": "8.5",
    "kind": "theorem",
    "tier": "extra",
    "title": "Poisson limit for rare failures before r successes",
    "oneLine": "With success probability tending to one and a fixed mean number of failures, a negative-binomial failure count approaches Poisson.",
    "statement": "Let trials be iid Bernoulli with success probability $p_r=r/(r+\\lambda)$, and let X be the number of failures before the r-th success. For each fixed k, $P(X=k)\\to e^{-\\lambda}\\lambda^k/k!$ as r→∞; hence X converges in distribution to Poisson(λ).",
    "intuition": "As r grows, each trial’s failure chance is small, while the total expected failures stays near λ. This is the rare-event Poisson regime.",
    "needs": [],
    "traps": "The limiting parameter is λ because $r(1-p_r)/p_r=λ$. Keep the “failures before r successes” convention distinct from total trials.",
    "cards": [
      {
        "q": "What Poisson law is the limit for failures before r successes when $p_r=r/(r+\\lambda)$?",
        "a": "Poisson with mean λ.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.5, Example 5h, PDF pp. 410–411.",
    "proof": {
      "idea": "Write the negative-binomial pmf and take its fixed-k limit.",
      "why": "For fixed k, its combinatorial factor and success/failure powers approach the Poisson mass.",
      "rungs": [
        {
          "why": "For k failures before r successes, use the negative-binomial probability.",
          "m": "$P(X=k)=\\binom{r+k-1}{k}p_r^r(1-p_r)^k$",
          "meaning": "There are the stated trial sequences with the last success fixed."
        },
        {
          "why": "Substitute $p_r=r/(r+λ)$ and take r→∞.",
          "m": "$\\binom{r+k-1}{k}p_r^r(1-p_r)^k\\to e^{-\\lambda}\\lambda^k/k!$",
          "meaning": "The three factors tend to r^k/k!, e^{-λ}, and (λ/r)^k."
        }
      ],
      "ends": "The point probabilities converge to those of Poisson(λ), hence the limit law."
    }
  },
  {
    "id": "c.prob.8.6.1",
    "sec": "8.6",
    "kind": "theorem",
    "tier": "extra",
    "title": "Poisson approximation for sums of independent Bernoulli variables",
    "oneLine": "A sum of independent rare Bernoulli events is close in event probabilities to a Poisson variable with the same mean.",
    "statement": "Let $X_i\\sim\\operatorname{Bernoulli}(p_i)$ be independent, $W=\\sum_iX_i$, and $\\lambda=\\sum_i p_i$. For every set A of nonnegative integers, Ross’s coupling bound gives $|P(W\\in A)-P(Z\\in A)|\\le\\sum_i p_i^2$, where $Z\\sim\\operatorname{Poisson}(\\lambda)$.",
    "intuition": "When all pᵢ are small, multiple Poisson counts within a component are rare; a coupling makes each Bernoulli component agree with its Poisson counterpart with high probability.",
    "needs": [
      "c.prob.8.2.1"
    ],
    "traps": "The bound depends on sum of squared probabilities, not just the mean. It applies to any event set A and assumes independent Bernoulli summands.",
    "cards": [
      {
        "q": "State Ross’s Poisson approximation bound for Bernoulli sums.",
        "a": "$|P(W\\in A)-P(Z\\in A)|\\le\\sum_i p_i^2$, with λ=Σpᵢ and Z∼Poisson(λ).",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.6, coupling argument and final bound, PDF pp. 412–413.",
    "proof": {
      "idea": "Couple each Bernoulli summand to an independent Poisson summand of mean pᵢ.",
      "why": "The Bernoulli and Poisson indicators disagree with probability at most pᵢ²; a union bound controls whether the sums differ.",
      "rungs": [
        {
          "why": "For each i, couple Bᵢ~Bernoulli(pᵢ) with Pᵢ~Poisson(pᵢ).",
          "m": "$P(B_i\\ne P_i)\\le p_i^2$",
          "meaning": "For small pᵢ, the Poisson variable is 0 or 1 with matching probabilities up to order pᵢ²."
        },
        {
          "why": "Use a union bound over components.",
          "m": "$P(\\sum_iB_i\\ne\\sum_iP_i)\\le\\sum_ip_i^2$",
          "meaning": "If the coupled sums agree, all event-set indicators agree."
        },
        {
          "why": "The Poisson components add.",
          "m": "$\\sum_iP_i\\sim\\operatorname{Poisson}(\\sum_ip_i)$",
          "meaning": "Independent Poisson variables have a Poisson sum."
        }
      ],
      "ends": "For every set A, the absolute probability difference is at most Σpᵢ²."
    }
  },
  {
    "id": "c.prob.8.7.1",
    "sec": "8.7",
    "kind": "definition",
    "tier": "extra",
    "title": "Lorenz curve and population quantiles",
    "oneLine": "The Lorenz curve gives the income share earned by the lowest p fraction of a population.",
    "statement": "For positive income X with finite mean, let $\\xi_p$ be its p-quantile, $F(\\xi_p)=p$. Then $L(p)=E[X\\mathbf1_{\\{X\\le\\xi_p\\}}]/E[X]$ (under a continuous distribution). It is increasing and convex, lies below the equality line L(p)=p, and runs from 0 to 1.",
    "intuition": "The lower p share of people contributes a fraction L(p) of total income. Equality $L(p)=p$ means proportional income shares and no inequality.",
    "needs": [],
    "traps": "At atoms, quantile conventions need care because exactly a fraction p may not lie below the quantile. This chapter’s formula assumes a positive continuous income law.",
    "cards": [
      {
        "q": "Define the Lorenz curve using the p-quantile.",
        "a": "$L(p)=E[X\\mathbf1_{\\{X\\le\\xi_p\\}}]/E[X]$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.7, definition and Eq. (7.1), PDF pp. 414–415."
  },
  {
    "id": "c.prob.8.7.2",
    "sec": "8.7",
    "kind": "definition",
    "tier": "extra",
    "title": "Gini index from the Lorenz curve",
    "oneLine": "The Gini index is twice the area between equality and the Lorenz curve.",
    "statement": "For Lorenz curve L, $G=1-2\\int_0^1L(p)\\,dp$. It equals 0 under perfect equality and approaches 1 under extreme concentration.",
    "intuition": "The area under the equality diagonal is 1/2. The area below L measures how much income is earned by the lower population shares; the normalized gap is the Gini index.",
    "needs": [
      "c.prob.8.7.1"
    ],
    "traps": "Larger G means more inequality. It is an aggregate measure and does not identify which parts of the distribution differ.",
    "cards": [
      {
        "q": "Give the Gini formula in terms of L.",
        "a": "$G=1-2\\int_0^1L(p)\\,dp$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.7, Gini index formula, PDF p. 416."
  }
]
);
