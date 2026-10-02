var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.8.1.1",
    "sec": "8.1",
    "kind": "definition",
    "tier": "core",
    "title": "Law of large numbers versus central limit theorem",
    "oneLine": "The law of large numbers explains where an average settles; the central limit theorem explains its spread.",
    "statement": "Repeat the same experiment independently many times. A law of large numbers says that the running average approaches the true mean. The weak law means a large error becomes unlikely; the strong law means that, with probability one, the whole running average eventually settles. The central limit theorem (CLT) describes the bell-shaped spread of centered, rescaled sums across repeated experiments.",
    "intuition": "Flip a fair coin many times and record the share of heads; repeat that whole experiment many times. The law of large numbers says each long-run share settles near one-half. The CLT describes the bell-shaped spread of those shares across repeated experiments after centering and rescaling, not a wiggle in one running average.",
    "needs": [],
    "traps": [
      "Weak and strong laws use different modes of convergence. A CLT is distributional convergence of normalized sums, not almost-sure convergence."
    ],
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
    "oneLine": "The average and spread limit how often very large values can occur.",
    "statement": "Markov: if $X\\ge0$ and $a>0$, then $P(X\\ge a)\\le E[X]/a$. A nonnegative quantity cannot often exceed $a$ without making its average large. Chebyshev: if the mean is $\\mu$ and the variance is finite, $\\operatorname{Var}(X)=\\sigma^2$, then for $k>0$, $P(|X-\\mu|\\ge k)\\le\\sigma^2/k^2$. This bounds the chance of being at least $k$ units from the mean.",
    "intuition": "If a nonnegative bill is at least $a$ on some days, those days must contribute at least $a$ each to the average bill. Chebyshev uses the same idea on squared distance from the average to bound far-away values.",
    "needs": [
      "c.prob.7.2.1"
    ],
    "traps": [
      "Markov requires nonnegativity; Chebyshev uses squared deviation, so no support restriction is needed. Strict versus weak inequality endpoints do not change the standard bound when used consistently."
    ],
    "cards": [
      {
        "q": "State Markov’s and Chebyshev’s inequalities.",
        "a": "If X≥0, $P(X≥a)≤E[X]/a$. If X has mean μ and variance σ², $P(|X−μ|≥k)≤σ²/k²$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.2, Propositions 2.1–2.2, PDF p. 392.",
    "proof": {
      "idea": "Use a 0-or-1 flag for a large value. Compare this flag to $X/a$, then average both sides.",
      "why": "If one quantity is never bigger than another for any result, its average cannot be bigger either.",
      "rungs": [
        {
          "why": "The flag $\\mathbf1_{\\{X\\ge a\\}}$ is 1 when $X\\ge a$ and 0 otherwise. In either case it is at most $X/a$.",
          "m": "$\\mathbf1_{\\{X\\ge a\\}}\\le X/a$",
          "meaning": "Outside the event, the left side is zero; inside, X/a≥1."
        },
        {
          "why": "Take expectations.",
          "m": "$P(X\\ge a)\\le E[X]/a$",
          "meaning": "The average of a success flag is the probability of success. This turns the comparison into Markov’s bound."
        },
        {
          "why": "Apply Markov to $(X-\\mu)^2$ at threshold $k^2$.",
          "m": "$P((X-\\mu)^2\\ge k^2)\\le E[(X-\\mu)^2]/k^2=\\sigma^2/k^2$",
          "meaning": "Squaring removes the sign: $(X-\\mu)^2\\ge k^2$ means exactly $|X-\\mu|\\ge k$. Its average is the variance."
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
    "oneLine": "For independent repeats, the chance of a fixed-sized error in the average goes to zero.",
    "statement": "Let $X_i$ be independent copies of the same random quantity, each with mean $\\mu$ and finite variance $\\sigma^2$. Write $\\bar X_n=(X_1+\\cdots+X_n)/n$. For every chosen tolerance $\\epsilon>0$, $P(|\\bar X_n-\\mu|\\ge\\epsilon)\\le\\sigma^2/(n\\epsilon^2)\\to0$. More repeats make a fixed-sized error unlikely. This proof uses finite variance; a more general weak law needs only a finite absolute mean.",
    "intuition": "For repeated fair coin flips, the share of heads becomes less jumpy as the number of flips grows. With independent repeats and finite variance, Chebyshev bounds the chance that the share misses its target by a lot.",
    "needs": [
      "c.prob.8.2.1",
      "c.prob.7.4.2"
    ],
    "traps": [
      "The elementary proof uses finite variance; the general iid finite-mean theorem is stronger. Convergence in probability does not assert that all later sample means stay close on every outcome."
    ],
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
          "why": "Use the rule that averages of sums add for the mean.",
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
    "oneLine": "After centering and rescaling, sums of many independent copies approach a standard bell curve.",
    "statement": "Let $X_i$ be independent copies with finite mean $\\mu$ and finite, positive variance $\\sigma^2$. Subtract the sum’s mean $n\\mu$ and divide by its standard deviation $\\sigma\\sqrt n$: $Z_n=(\\sum_{i=1}^nX_i-n\\mu)/(\\sigma\\sqrt n)$. Then, for each fixed real $a$, $P(Z_n\\le a)\\to\\Phi(a)$, the standard normal probability. This is a limit result; it does not say a particular small sample or extremely rare tail is accurately normal.",
    "intuition": "Add many independent test scores with a finite, nonzero spread, subtract their expected total, and measure in standard-deviation units. For a large group, the result is close to a standard bell curve even if individual scores are not bell-shaped.",
    "needs": [
      "c.prob.7.4.2"
    ],
    "traps": [
      "The standardization uses $\\sigma\\sqrt n$, not nσ. For finite n this is an approximation, and a continuity correction may improve discrete sums."
    ],
    "cards": [
      {
        "q": "State the iid central limit theorem standardization.",
        "a": "$ (\\sum_iX_i-n\\mu)/(\\sigma\\sqrt n)\\Rightarrow N(0,1)$ for iid finite-variance variables with σ>0.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.3, Theorem 3.1, PDF p. 395.",
    "proof": {
      "idea": "Advanced proof: encode a distribution by its characteristic function $\\varphi_Y(t)=E[e^{itY}]$, then show the encoding of the sum approaches that of a normal variable. Here $i$ is the imaginary unit.",
      "why": "This proof uses two results from more advanced mathematics: a finite second moment gives the expansion near zero, and the continuity theorem turns convergence of characteristic functions into convergence of distributions.",
      "rungs": [
        {
          "why": "Set $Y=(X-\\mu)/\\sigma$. Its mean is 0 and variance is 1. The characteristic-function expansion therefore starts with these two terms.",
          "m": "$\\varphi_Y(t)=1-t^2/2+o(t^2)$ as $t\\to0$",
          "meaning": "The notation $o(t^2)$ means a remainder whose ratio to $t^2$ tends to zero. A finite second moment is enough; an exponential moment is not required."
        },
        {
          "why": "Use independence to express the characteristic function of the normalized sum.",
          "m": "$\\varphi_{n^{-1/2}\\sum_iY_i}(t)=[\\varphi_Y(t/\\sqrt n)]^n$",
          "meaning": "For independent variables, the characteristic function of a sum is the product of their characteristic functions. Dividing the sum by $\\sqrt n$ divides the argument by $\\sqrt n$."
        },
        {
          "why": "Take the limit of this power.",
          "m": "$[1-t^2/(2n)+o(1/n)]^n\\to e^{-t^2/2}$",
          "meaning": "This uses the familiar exponential limit $(1+b/n)^n\\to e^b$, with a remainder smaller than $1/n$. The result $e^{-t^2/2}$ is the normal distribution’s characteristic function."
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
    "oneLine": "Turn a sum into a z-score using its mean and standard deviation.",
    "statement": "For many independent copies with mean $\\mu$ and finite positive variance $\\sigma^2$, estimate $P(\\sum_iX_i\\le x)$ by $\\Phi((x-n\\mu)/(\\sigma\\sqrt n))$. For an average, its standard deviation (standard error) is $\\sigma/\\sqrt n$. For integer counts on a unit-spaced scale, move a cutoff by half a unit when using a continuous normal curve. For other spacing, use half that spacing. Accuracy depends on the distribution and the event; the CLT alone gives no finite-sample error guarantee.",
    "intuition": "For a total, compare with n times the average; for a sample average, compare with the average itself. In either case divide by the matching standard deviation before using the bell curve.",
    "needs": [
      "c.prob.8.3.1"
    ],
    "traps": [
      "The approximation quality depends on n and the underlying distribution; strong skewness or heavy tails can make small-n approximations poor."
    ],
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
    "oneLine": "With probability one, the running average eventually settles at the true mean.",
    "statement": "Let $X_i$ be independent copies with $E[|X_1|]<\\infty$: the average size of a value, ignoring its sign, is finite. If $\\mu=E[X_1]$, then $P(\\lim_{n\\to\\infty}\\bar X_n=\\mu)=1$. This is the strong law of large numbers. Applying it to 1 for success and 0 for failure shows that the running success proportion settles at the true success probability.",
    "intuition": "Imagine an infinite sequence of fair coin flips. The strong law says that, with probability one, the share of heads eventually stays as close to one-half as you ask; it is stronger than saying large misses merely become unlikely.",
    "needs": [
      "c.prob.8.2.2"
    ],
    "traps": [
      "The result concerns almost every infinite sample path, not every path. Its assumptions are about iid sampling and finite absolute mean."
    ],
    "cards": [
      {
        "q": "State the strong law of large numbers.",
        "a": "For iid Xᵢ with finite absolute mean μ, $\\bar X_n\\to\\mu$ almost surely.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.4, Theorem 4.1, PDF p. 401.",
    "proof": {
      "idea": "Advanced proof: temporarily cut off exceptionally large observations. Prove the average of the cut-off values settles, then show the cuts do not change the final answer.",
      "why": "Three advanced results are used: Borel–Cantelli (a finite total probability means only finitely many exceptional events happen), the independent-series convergence theorem, and Kronecker’s lemma (a weighted-series limit gives an average limit). The steps below show where each is needed.",
      "rungs": [
        {
          "why": "Truncate at level n and use the finite absolute mean.",
          "m": "$X'_n=X_n\\mathbf1_{\\{|X_n|\\le n\\}},\\quad\\sum_nP(X_n\\ne X'_n)<\\infty$",
          "meaning": "Set an observation to zero only when its size exceeds its index. Since $\\sum_{n\\ge1}P(|X_1|>n)\\le E|X_1|$, the total chance of these cuts is finite. Borel–Cantelli says that, with probability one, only finitely many cuts occur."
        },
        {
          "why": "Center the truncations; their variances are summable after division by n².",
          "m": "$\\sum_n\\operatorname{Var}(X'_n)/n^2<\\infty$",
          "meaning": "Variance is at most the second moment. For a fixed size $z$, $z^2\\sum_{n\\ge\\max(1,\\lceil z\\rceil)}n^{-2}$ is at most a constant times $z$. Averaging this bound gives a finite sum because $E|X_1|$ is finite."
        },
        {
          "why": "Apply the independent-series criterion and Kronecker lemma.",
          "m": "$n^{-1}\\sum_{i=1}^n(X'_i-E[X'_i])\\to0\\quad a.s.$",
          "meaning": "The cut-off observations remain independent. The series theorem makes $\\sum_i(X_i\\prime-E[X_i\\prime])/i$ converge with probability one; Kronecker’s lemma then makes their centered averages tend to zero."
        },
        {
          "why": "The truncated means converge to μ.",
          "m": "$E[X'_n]\\to E[X_1]=\\mu$",
          "meaning": "Because $|X_1|$ has finite mean, the averages of the cut-off values approach $\\mu$ by dominated convergence. Their own running averages of means also approach $\\mu$. The finitely many altered observations contribute an amount divided by $n$, which tends to zero."
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
    "oneLine": "A one-sided variance bound is sharper than a bound covering both directions.",
    "statement": "For mean $\\mu$, finite variance $\\sigma^2$, and $a>0$, $P(X-\\mu\\ge a)\\le\\sigma^2/(\\sigma^2+a^2)$. The same bound holds for $P(X-\\mu\\le-a)$. This is Cantelli’s inequality. It uses the fact that we are asking about only one direction from the mean.",
    "intuition": "If you only worry about a score being too high, a one-sided bound uses that focus and can be sharper than a bound that also covers low scores.",
    "needs": [
      "c.prob.8.2.1"
    ],
    "traps": [
      "Do not use this formula for a two-sided event without accounting for both tails."
    ],
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
          "why": "If $\\sigma^2>0$, choose $c=\\sigma^2/a$. When $\\sigma^2=0$, $X=\\mu$ with probability one and the claimed tail probability is already zero.",
          "m": "$\\frac{\\sigma^2+\\sigma^4/a^2}{(a+\\sigma^2/a)^2}=\\frac{\\sigma^2}{\\sigma^2+a^2}$",
          "meaning": "For positive variance, differentiation or completing the square shows this is the smallest bound among $c>0$."
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
    "oneLine": "Apply Markov to an exponential, then choose the tightest available bound.",
    "statement": "Write $M_X(t)=E[e^{tX}]$. Whenever this average is finite, $P(X\\ge a)\\le e^{-ta}M_X(t)$ for $t>0$, and $P(X\\le a)\\le e^{-ta}M_X(t)$ for $t<0$. Try allowed values of $t$ and take the smallest bound. For an independent sum, its exponential average is the product of the separate exponential averages.",
    "intuition": "To bound the chance a sum is unusually large, exaggerate large outcomes with an exponential, then use its average to limit how often they can occur. Tune the exaggeration to get the strongest bound.",
    "needs": [
      "c.prob.7.7.1",
      "c.prob.8.2.1"
    ],
    "traps": [
      "Use t>0 for upper tails and t<0 for lower tails. A valid MGF domain constrains the optimization."
    ],
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
    "oneLine": "For a bowl-shaped graph, applying the function after averaging gives a smaller result.",
    "statement": "A convex function has a graph lying below the straight line joining any two of its points. If $E[X]$ is finite and the function averages are defined, Jensen’s inequality says $g(E[X])\\le E[g(X)]$. For a concave, cap-shaped graph the direction reverses. For example, $(E[X])^2\\le E[X^2]$.",
    "intuition": "For a bowl-shaped graph, the graph at the average x-value lies below the average height of points on the graph. This is why averaging squared scores is at least the square of the average score.",
    "needs": [],
    "traps": [
      "Check whether the function is convex or concave before deciding the direction."
    ],
    "cards": [
      {
        "q": "State Jensen’s inequality for convex g.",
        "a": "$g(E[X])\\le E[g(X)]$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.5, Proposition 5.3, PDF p. 409.",
    "proof": {
      "idea": "Draw a straight supporting line below the convex graph at the mean. Average the vertical comparison.",
      "why": "The line has the same value as the function at the mean. Its positive and negative horizontal deviations average to zero.",
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
      "ends": "This proves Jensen’s inequality when a tangent exists. At an interior mean where the graph has a corner, choose any supporting-line slope in place of the derivative; the same calculation works. A mean at an endpoint of the range makes $X$ equal that endpoint with probability one."
    }
  },
  {
    "id": "c.prob.8.5.4",
    "sec": "8.5",
    "kind": "theorem",
    "tier": "extra",
    "title": "Poisson limit for rare failures before r successes",
    "oneLine": "Many almost-certain successes can leave a Poisson number of rare failures.",
    "statement": "Use independent trials with success chance $p_r=r/(r+\\lambda)$, where $\\lambda>0$. Let $X$ count failures before the $r$th success. For each fixed nonnegative integer $k$, $P(X=k)\\to e^{-\\lambda}\\lambda^k/k!$ as $r$ grows. Thus the failure count approaches a Poisson law with mean $\\lambda$.",
    "intuition": "If a long sales run has very few failures, but about 3 failures on average, the failure count can be close to Poisson with mean 3.",
    "needs": [],
    "traps": [
      "The limiting parameter is λ because $r(1-p_r)/p_r=λ$. Keep the “failures before r successes” convention distinct from total trials."
    ],
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
          "meaning": "Combine the growing factor with the shrinking one: $\\binom{r+k-1}{k}(\\lambda/(r+\\lambda))^k\\to\\lambda^k/k!$. Separately, $(r/(r+\\lambda))^r\\to e^{-\\lambda}$. Multiplying gives the claimed probability."
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
    "oneLine": "Independent rare successes have a Poisson approximation with a computable error bound.",
    "statement": "Let $X_i$ be independent 0-or-1 results with success chances $p_i$. Count successes with $W=\\sum_iX_i$ and set $\\lambda=\\sum_i p_i$. If $Z$ is Poisson with mean $\\lambda$, then for any collection $A$ of nonnegative counts, $|P(W\\in A)-P(Z\\in A)|\\le\\sum_i p_i^2$. Small individual chances make this error bound small.",
    "intuition": "Suppose a thousand people each have a tiny chance of a rare event. Their total count is often close to Poisson; the approximation is strongest when no one person’s chance is large.",
    "needs": [
      "c.prob.8.2.1"
    ],
    "traps": [
      "The bound depends on sum of squared probabilities, not just the mean. It applies to any event set A and assumes independent Bernoulli summands."
    ],
    "cards": [
      {
        "q": "State Ross’s Poisson approximation bound for Bernoulli sums.",
        "a": "$|P(W\\in A)-P(Z\\in A)|\\le\\sum_i p_i^2$, with λ=Σpᵢ and Z∼Poisson(λ).",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §8.6, coupling argument and final bound, PDF pp. 412–413.",
    "proof": {
      "idea": "Construct each Bernoulli and Poisson count together so they disagree rarely, then add the disagreement chances.",
      "why": "Constructing two variables on the same experiment is called coupling. If their counts agree, they answer every question about the count in the same way.",
      "rungs": [
        {
          "why": "For each i, couple Bᵢ~Bernoulli(pᵢ) with Pᵢ~Poisson(pᵢ).",
          "m": "$P(B_i\\ne P_i)\\le p_i^2$",
          "meaning": "For Poisson $P_i$, $P(P_i\\ge1)=1-e^{-p_i}\\le p_i$. Set $B_i=1$ whenever $P_i\\ge1$, and sometimes also when $P_i=0$, until $P(B_i=1)=p_i$. The disagreement chance is $p_i(1-e^{-p_i})\\le p_i^2$. Use independent constructions for different $i$."
        },
        {
          "why": "Use a union bound over components.",
          "m": "$P(\\sum_iB_i\\ne\\sum_iP_i)\\le\\sum_ip_i^2$",
          "meaning": "Different sums require at least one mismatched pair. The union bound adds their mismatch probabilities. Also, the probability difference for any count set $A$ is at most the chance that the two sums disagree."
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
    "oneLine": "The Lorenz curve compares a share of people with their share of total income.",
    "statement": "For a continuous distribution of positive incomes with finite mean, let $\\xi_p$ be the income cutoff containing the lowest fraction $p$ of people, so $F(\\xi_p)=p$. Their share of income is $L(p)=E[X\\mathbf1_{\\{X\\le\\xi_p\\}}]/E[X]$. The curve rises from 0 to 1, bends upward, and lies below the equality line $L(p)=p$. For distributions with ties, use the quantile-integral definition to split a tied group correctly.",
    "intuition": "Sort people from lowest income upward. The Lorenz curve at p reports how much of all income the bottom p share receives; under equal incomes, bottom 30% receives 30%.",
    "needs": [],
    "traps": [
      "At atoms, quantile conventions need care because exactly a fraction p may not lie below the quantile. This chapter’s formula assumes a positive continuous income law."
    ],
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
    "oneLine": "The Gini index measures the gap between equal incomes and the Lorenz curve.",
    "statement": "If $L$ is the Lorenz curve, $G=1-2\\int_0^1L(p)\\,dp$. It is twice the area between the line $L(p)=p$ and the curve. Equal incomes give $G=0$. Increasing concentration of income can make $G$ approach 1.",
    "intuition": "Draw the equal-share diagonal and the Lorenz curve. The larger the area between them, the more income is concentrated among fewer people; the Gini index rescales that area.",
    "needs": [
      "c.prob.8.7.1"
    ],
    "traps": [
      "Larger G means more inequality. It is an aggregate measure and does not identify which parts of the distribution differ."
    ],
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
