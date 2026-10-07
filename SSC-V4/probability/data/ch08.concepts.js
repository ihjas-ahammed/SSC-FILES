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
    "provenance": "Ross, 10e, §8.1, introduction, PDF p. 391.",
    "proof": {
      "idea": "Use sample-average moments to explain what LLN and CLT statements measure.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X_i be iid with mean μ and finite positive variance σ², and let bar(X_n) be their average.",
          "m": "$$E[\\bar X_n]=\\mu,\\quad\\operatorname{Var}(\\bar X_n)=\\sigma^2/n$$",
          "meaning": "Linearity, independence and the variance scale rule give these equations."
        },
        {
          "why": "Chebyshev bounds any fixed error margin ε>0.",
          "m": "$$P(|\\bar X_n-\\mu|\\ge\\epsilon)\\le\\sigma^2/(n\\epsilon^2)\\to0$$",
          "meaning": "This proves the weak law under finite variance: a large error becomes unlikely."
        },
        {
          "why": "The strong law describes an entire infinite sequence’s eventual limit.",
          "m": "$$P(\\lim_n\\bar X_n=\\mu)=1$$",
          "meaning": "Its fuller finite-absolute-mean proof is given in the strong-law note; it is a stronger statement than the preceding probability-at-each-n limit."
        },
        {
          "why": "To retain the shrinking fluctuations, measure them in their own shrinking standard-deviation units.",
          "m": "$$Z_n=\\frac{\\bar X_n-\\mu}{\\sigma/\\sqrt n}$$",
          "meaning": "The numerator’s spread is σ/sqrt(n), so this scale gives variance 1."
        },
        {
          "why": "The CLT describes the limiting distribution of those normalized fluctuations.",
          "m": "$$P(Z_n\\le a)\\to\\Phi(a)$$",
          "meaning": "This invokes the CLT proved in its own note; it does not claim the raw observations or the raw sum converge almost surely to a normal variable."
        }
      ],
      "ends": "LLN explains closeness to the mean; CLT explains the probability shape of centered fluctuations measured in the correct units."
    }
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
      "idea": "Bound a large-value flag, then apply that same bound to squared deviations.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X≥0 and a>0, and set I=1 when X≥a and 0 otherwise.",
          "m": "$$I=\\mathbf1_{\\{X\\ge a\\}}$$",
          "meaning": "This flag identifies the tail event we want to bound."
        },
        {
          "why": "If X≥a then aI=a≤X; if X<a then aI=0≤X.",
          "m": "$$aI\\le X$$",
          "meaning": "Checking both cases proves the inequality at every allowed outcome."
        },
        {
          "why": "Averaging preserves an inequality between nonnegative quantities.",
          "m": "$$aE[I]\\le E[X]$$",
          "meaning": "This is order preservation of expectation, proved from nonnegative weights."
        },
        {
          "why": "The flag’s weighted average is its success probability.",
          "m": "$$E[I]=1P(X\\ge a)+0P(X<a)=P(X\\ge a)$$",
          "meaning": "Substitute this into the preceding comparison."
        },
        {
          "why": "Divide by the positive threshold a.",
          "m": "$$P(X\\ge a)\\le\\frac{E[X]}a$$",
          "meaning": "This is Markov’s inequality; if the mean is infinite the bound is true but uninformative."
        },
        {
          "why": "For a variable with mean μ and finite variance σ², choose a new nonnegative quantity Y.",
          "m": "$$Y=(X-\\mu)^2,\\quad E[Y]=\\sigma^2$$",
          "meaning": "Squaring makes Y nonnegative, and its mean is the definition of variance."
        },
        {
          "why": "For k>0, taking squares is equivalent to comparing absolute distances.",
          "m": "$$\\{|X-\\mu|\\ge k\\}=\\{Y\\ge k^2\\}$$",
          "meaning": "Both sides describe deviations at least k in either direction."
        },
        {
          "why": "Apply Markov to Y with threshold k².",
          "m": "$$P(|X-\\mu|\\ge k)\\le\\frac{E[Y]}{k^2}=\\frac{\\sigma^2}{k^2}$$",
          "meaning": "This proves Chebyshev’s inequality without a distribution-specific formula."
        }
      ],
      "ends": "Markov bounds nonnegative upper tails; Chebyshev applies it to squared distance from the mean."
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
      "idea": "Compute the sample average’s mean and variance explicitly, then use Chebyshev.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Take n independent identically distributed observations with finite variance σ² and mean μ.",
          "m": "$$\\bar X_n=\\frac1n\\sum_{i=1}^nX_i$$",
          "meaning": "Identically distributed means the same probability law; independent means the joint law factors."
        },
        {
          "why": "Apply linearity to the average.",
          "m": "$$E[\\bar X_n]=\\frac1n\\sum_{i=1}^n\\mu=\\frac{n\\mu}{n}=\\mu$$",
          "meaning": "The estimator is centered at the true mean for every n."
        },
        {
          "why": "Independence makes all distinct-pair covariances zero, so variances of the sum add.",
          "m": "$$\\operatorname{Var}\\left(\\sum_{i=1}^nX_i\\right)=n\\sigma^2$$",
          "meaning": "This is where the independence assumption enters."
        },
        {
          "why": "Dividing a variable by n divides its variance by n².",
          "m": "$$\\operatorname{Var}(\\bar X_n)=\\frac{n\\sigma^2}{n^2}=\\frac{\\sigma^2}{n}$$",
          "meaning": "The scale rule follows from squaring centered deviations."
        },
        {
          "why": "Choose any fixed error tolerance ε>0 and apply Chebyshev to the average.",
          "m": "$$P(|\\bar X_n-\\mu|\\ge\\epsilon)\\le\\frac{\\sigma^2}{n\\epsilon^2}$$",
          "meaning": "Its mean and variance were computed in the preceding steps."
        },
        {
          "why": "For any desired probability bound δ>0, choose n greater than σ²/(δε²).",
          "m": "$$n>\\frac{\\sigma^2}{\\delta\\epsilon^2}\\ \\Longrightarrow\\ P(|\\bar X_n-\\mu|\\ge\\epsilon)<\\delta$$",
          "meaning": "Solving the upper-bound inequality shows quantitatively why the error chance tends to zero."
        },
        {
          "why": "Since δ can be made arbitrarily small, this is convergence in probability.",
          "m": "$$P(|\\bar X_n-\\mu|\\ge\\epsilon)\\longrightarrow0$$",
          "meaning": "It concerns the error chance at each n; it does not yet establish convergence of entire infinite sample paths."
        }
      ],
      "ends": "This elementary finite-variance proof gives the weak law with an explicit error-probability bound."
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
      "idea": "Explain the standardization, then give the characteristic-function proof with its advanced prerequisites stated.",
      "why": "The full proof uses Taylor expansion, dominated convergence and the characteristic-function continuity theorem. The standardization and algebra are derived here; the named analysis theorems are prerequisites beyond high school mathematics.",
      "rungs": [
        {
          "why": "Take iid X_i with mean μ and finite positive variance σ², and standardize each observation.",
          "m": "$$Y_i=\\frac{X_i-\\mu}{\\sigma},\\quad E[Y_i]=0,\\quad E[Y_i^2]=1$$",
          "meaning": "Subtracting the mean centers values; division by σ makes variance 1."
        },
        {
          "why": "The sum of the standardized observations has variance n, so divide by sqrt(n).",
          "m": "$$Z_n=\\frac1{\\sqrt n}\\sum_iY_i=\\frac{\\sum_iX_i-n\\mu}{\\sigma\\sqrt n}$$",
          "meaning": "This explains both the centering nμ and the scale σsqrt(n) using earlier mean and variance rules."
        },
        {
          "why": "Encode a distribution by its characteristic function ψ.",
          "m": "$$\\psi_Y(t)=E[e^{itY}],\\quad i^2=-1$$",
          "meaning": "By Euler’s identity e^(iu)=cos(u)+i sin(u), its absolute value is 1, so this average exists even when an MGF does not."
        },
        {
          "why": "The second-order exponential expansion has an error controlled by u².",
          "m": "$$e^{iu}=1+iu-u^2/2+r(u),\\quad r(u)/u^2\\to0,\\quad|r(u)|\\le C u^2$$",
          "meaning": "Taylor’s theorem proves the small-u limit; for large |u| the bound follows from |e^(iu)|=1 and the polynomial terms. C is a fixed finite constant."
        },
        {
          "why": "Put u=tY and average the expansion.",
          "m": "$$\\psi_Y(t)=1+itE[Y]-\\frac{t^2}2E[Y^2]+E[r(tY)]=1-\\frac{t^2}2+o(t^2)$$",
          "meaning": "Dominated convergence applies to r(tY)/t², bounded by CY² with finite mean. Taylor’s theorem and dominated convergence are calculus prerequisites, not high school algebra."
        },
        {
          "why": "Independence factors the encoding of the sum, and scaling changes its argument.",
          "m": "$$\\psi_{Z_n}(t)=\\prod_{i=1}^n\\psi_Y(t/\\sqrt n)=[\\psi_Y(t/\\sqrt n)]^n$$",
          "meaning": "This follows from e^(itΣY_i/sqrt(n)) being the product of the individual exponentials."
        },
        {
          "why": "Insert the small-argument expansion at fixed t.",
          "m": "$$\\psi_{Z_n}(t)=[1-t^2/(2n)+o(1/n)]^n\\longrightarrow e^{-t^2/2}$$",
          "meaning": "The exponential limit follows by taking the local logarithm: n log(1+u_n)=nu_n+O(n|u_n|²)→−t²/2."
        },
        {
          "why": "Verify this limiting encoding belongs to a standard normal G with density φ.",
          "m": "$$\\psi_G'(t)=-t\\psi_G(t),\\quad\\psi_G(0)=1\\ \\Longrightarrow\\ \\psi_G(t)=e^{-t^2/2}$$",
          "meaning": "Differentiate the normal integral and integrate by parts using φ'(x)=−xφ(x); boundary terms vanish, giving the displayed differential equation."
        },
        {
          "why": "Apply the characteristic-function continuity theorem.",
          "m": "$$P(Z_n\\le a)\\longrightarrow\\Phi(a)\\quad\\text{for every real }a$$",
          "meaning": "This advanced theorem says pointwise convergence of characteristic functions to one continuous at zero implies convergence in distribution; the normal CDF is continuous everywhere."
        }
      ],
      "ends": "The mean/variance standardization is elementary. The full finite-variance CLT also uses Taylor expansion, dominated convergence and the characteristic-function continuity theorem, each identified at its point of use."
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
    "provenance": "Ross, 10e, §8.3, Examples 3a–3e, PDF pp. 396–400.",
    "proof": {
      "idea": "Translate a total or average cutoff into the same standardized sum.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For iid observations define total T_n and average bar(X_n).",
          "m": "$$T_n=\\sum_iX_i,\\quad\\bar X_n=T_n/n$$",
          "meaning": "Use finite positive variance σ² and mean μ."
        },
        {
          "why": "Compute their centers and spreads.",
          "m": "$$E[T_n]=n\\mu,\\quad\\operatorname{SD}(T_n)=\\sigma\\sqrt n,\\quad\\operatorname{SD}(\\bar X_n)=\\sigma/\\sqrt n$$",
          "meaning": "Independence adds total variance nσ²; dividing by n rescales standard deviation by 1/n."
        },
        {
          "why": "Subtract the center and divide by spread for a total cutoff x.",
          "m": "$$P(T_n\\le x)=P\\left(\\frac{T_n-n\\mu}{\\sigma\\sqrt n}\\le\\frac{x-n\\mu}{\\sigma\\sqrt n}\\right)$$",
          "meaning": "Positive spread preserves the cutoff inequality."
        },
        {
          "why": "Replace the standardized sum’s CDF by the CLT’s standard-normal limit for a large sample.",
          "m": "$$P(T_n\\le x)\\approx\\Phi\\left(\\frac{x-n\\mu}{\\sigma\\sqrt n}\\right)$$",
          "meaning": "This is an approximation, not an equality; the CLT alone supplies no finite-sample error bound."
        },
        {
          "why": "For an average cutoff a, use the average’s own center and spread.",
          "m": "$$P(\\bar X_n\\le a)\\approx\\Phi\\left(\\frac{a-\\mu}{\\sigma/\\sqrt n}\\right)$$",
          "meaning": "Algebraically this is the same normalized sum since T_n=n bar(X_n)."
        },
        {
          "why": "For a count on a grid of spacing d, a bar centered at k extends half a grid step to either side.",
          "m": "$$P(T_n\\le k)\\approx\\Phi\\left(\\frac{k+d/2-n\\mu}{\\sigma\\sqrt n}\\right)$$",
          "meaning": "This explains the usual half-unit correction when d=1; choose the boundary matching the event and actual grid."
        }
      ],
      "ends": "Use the mean and standard deviation of the quantity being compared, then translate its cutoff before consulting a normal CDF."
    }
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
      "idea": "Cut off rare extreme values, control the resulting variances, and explain how a convergent series gives a convergent average.",
      "why": "The full finite-absolute-mean argument uses nonnegative integration, dominated convergence and the independent-series convergence theorem. The counting, telescoping bound and needed averaging lemma are derived here; the independent-series theorem remains an advanced prerequisite.",
      "rungs": [
        {
          "why": "Assume iid real X_n with E[|X_1|]<∞ and mean μ, and discard only observations larger in size than their index.",
          "m": "$$X'_n=X_n\\mathbf1_{\\{|X_n|\\le n\\}}$$",
          "meaning": "The truncated variables remain independent because each uses only its own X_n."
        },
        {
          "why": "For a fixed nonnegative z, the number of positive integers below z is at most z.",
          "m": "$$\\sum_{n\\ge1}\\mathbf1_{\\{z>n\\}}\\le z$$",
          "meaning": "For z=3.4, the counted integers are 1,2,3."
        },
        {
          "why": "Average this counting bound at z=|X_1| using nonnegative summation.",
          "m": "$$\\sum_{n\\ge1}P(X_n\\ne X'_n)=\\sum_{n\\ge1}P(|X_1|>n)\\le E[|X_1|]<\\infty$$",
          "meaning": "Identical distribution gives the middle equality; Tonelli’s theorem justifies adding the nonnegative indicator averages."
        },
        {
          "why": "The probability of any cut after index m is bounded by the remaining sum of cut probabilities.",
          "m": "$$P\\left(\\bigcup_{n\\ge m}\\{X_n\\ne X'_n\\}\\right)\\le\\sum_{n\\ge m}P(|X_1|>n)\\longrightarrow0$$",
          "meaning": "The union bound proves the first Borel–Cantelli conclusion here: with probability one, there are only finitely many cuts."
        },
        {
          "why": "Variance is second moment minus a nonnegative squared mean.",
          "m": "$$\\operatorname{Var}(X'_n)\\le E[(X'_n)^2]=E[X_1^2\\mathbf1_{\\{|X_1|\\le n\\}}]$$",
          "meaning": "The original second moment may be infinite; truncation makes each separate truncated second moment finite."
        },
        {
          "why": "For integer n≥1, compare reciprocal squares with a telescoping fraction.",
          "m": "$$\\frac1{n^2}\\le\\frac2{n(n+1)}=2\\left(\\frac1n-\\frac1{n+1}\\right)$$",
          "meaning": "The inequality is equivalent to n+1≤2n."
        },
        {
          "why": "For z>0, start summing at m=max(1,ceil(z)); the telescoping bound controls the weighted tail.",
          "m": "$$z^2\\sum_{n\\ge m}\\frac1{n^2}\\le\\frac{2z^2}{m}\\le2z$$",
          "meaning": "Here ceil(z) is the smallest integer at least z, so m≥z; for z=0 both sides are zero."
        },
        {
          "why": "Sum the variance bounds and average the preceding bound at z=|X_1|.",
          "m": "$$\\sum_{n\\ge1}\\frac{\\operatorname{Var}(X'_n)}{n^2}\\le2E[|X_1|]<\\infty$$",
          "meaning": "Nonnegative summation permits interchanging the expectation and sum."
        },
        {
          "why": "Set D_n=X'_n−E[X'_n]. The independent-series convergence theorem applies to the centered variables D_n/n.",
          "m": "$$\\sum_{n\\ge1}\\frac{D_n}{n}\\quad\\text{converges almost surely}$$",
          "meaning": "The theorem requires independent zero-mean terms with summable variances, exactly established above. Its proof uses Kolmogorov’s maximal inequality and is an advanced probability prerequisite."
        },
        {
          "why": "For any sample path where that series converges, let s_n be its partial sums and s_0=0.",
          "m": "$$D_i=i(s_i-s_{i-1}),\\quad\\frac1n\\sum_{i=1}^nD_i=s_n-\\frac1n\\sum_{i=1}^{n-1}s_i$$",
          "meaning": "Expand the finite sum and cancel consecutive coefficients; this is summation by parts, proved by direct algebra."
        },
        {
          "why": "If s_n tends to s, the running average of its earlier values also tends to s.",
          "m": "$$s_n\\to s\\ \\Longrightarrow\\ \\frac1n\\sum_{i=1}^{n-1}s_i\\to s$$",
          "meaning": "Split the average into a fixed finite initial segment and the later terms within ε of s; the initial segment divided by n vanishes. Thus the centered truncated average tends to 0. This derives the needed case of Kronecker’s lemma."
        },
        {
          "why": "Truncated means approach μ because their removed absolute tail has vanishing mean.",
          "m": "$$|E[X'_n]-\\mu|\\le E[|X_1|\\mathbf1_{\\{|X_1|>n\\}}]\\longrightarrow0$$",
          "meaning": "Dominated convergence applies since the tail tends pointwise to zero and is bounded by the integrable |X_1|."
        },
        {
          "why": "The same running-average argument gives the limit of the means.",
          "m": "$$\\frac1n\\sum_{i=1}^nE[X'_i]\\to\\mu$$",
          "meaning": "Adding this to the centered-average limit proves that the truncated sample average tends to μ almost surely."
        },
        {
          "why": "Only finitely many observations were cut on almost every path; their total difference is then a fixed finite number.",
          "m": "$$\\frac1n\\sum_{i=1}^n(X_i-X'_i)\\longrightarrow0$$",
          "meaning": "A fixed numerator divided by growing n tends to zero, so restoring those observations leaves the limit unchanged."
        }
      ],
      "ends": "Thus the original sample average converges to μ almost surely under finite absolute mean. The independent-series theorem and dominated convergence remain explicit advanced prerequisites; the other bounds and averaging steps have been derived here."
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
      "idea": "Shift a squared deviation and choose the best shift by completing a square.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Write Y=X−μ, so E[Y]=0 and E[Y²]=σ².",
          "m": "$$Y\\ge a\\ \\Longrightarrow\\ Y+c\\ge a+c>0\\quad(c\\ge0,a>0)$$",
          "meaning": "Adding c preserves order and makes both compared quantities positive on this event."
        },
        {
          "why": "Square these positive quantities to get an event containment.",
          "m": "$$\\{Y\\ge a\\}\\subseteq\\{(Y+c)^2\\ge(a+c)^2\\}$$",
          "meaning": "The squared event can contain other outcomes too, so only containment is claimed."
        },
        {
          "why": "Apply Markov to the nonnegative squared quantity.",
          "m": "$$P(Y\\ge a)\\le\\frac{E[(Y+c)^2]}{(a+c)^2}$$",
          "meaning": "The denominator is positive."
        },
        {
          "why": "Expand the square and use E[Y]=0.",
          "m": "$$E[(Y+c)^2]=\\sigma^2+2cE[Y]+c^2=\\sigma^2+c^2$$",
          "meaning": "The centered cross term vanishes."
        },
        {
          "why": "Compare this family of bounds with σ²/(a²+σ²) using a common denominator.",
          "m": "$$\\frac{\\sigma^2+c^2}{(a+c)^2}-\\frac{\\sigma^2}{a^2+\\sigma^2}=\\frac{(ac-\\sigma^2)^2}{(a+c)^2(a^2+\\sigma^2)}\\ge0$$",
          "meaning": "Expanding the numerator shows the equality; it is a square divided by a positive number."
        },
        {
          "why": "If σ²>0, choose c=σ²/a to make the square zero.",
          "m": "$$P(X-\\mu\\ge a)\\le\\frac{\\sigma^2}{a^2+\\sigma^2}$$",
          "meaning": "This choice is therefore optimal among these shifted-square bounds without differentiating."
        },
        {
          "why": "If σ²=0, Y=0 almost surely; to obtain the lower-tail version replace Y by −Y.",
          "m": "$$P(X-\\mu\\le-a)\\le\\frac{\\sigma^2}{a^2+\\sigma^2}$$",
          "meaning": "A mean-zero variable with zero mean square is zero almost surely; −Y has the same mean and variance as Y."
        }
      ],
      "ends": "Cantelli’s one-sided bound follows from Markov and a completed square."
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
      "idea": "Turn a tail event into an exponential tail and apply Markov.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Fix t>0 with finite M_X(t)=E[e^(tX)].",
          "m": "$$x\\ge a\\ \\Longleftrightarrow\\ e^{tx}\\ge e^{ta}$$",
          "meaning": "The exponential is strictly increasing and multiplication by positive t preserves order."
        },
        {
          "why": "The random quantity e^(tX) is nonnegative at every outcome.",
          "m": "$$P(X\\ge a)=P(e^{tX}\\ge e^{ta})$$",
          "meaning": "This exact event equality lets us use Markov with threshold e^(ta)>0."
        },
        {
          "why": "Insert its expectation into Markov’s bound.",
          "m": "$$P(X\\ge a)\\le\\frac{E[e^{tX}]}{e^{ta}}=e^{-ta}M_X(t)$$",
          "meaning": "Dividing by an exponential is multiplying by its reciprocal e^(−ta)."
        },
        {
          "why": "Each admissible positive t gives a valid upper bound.",
          "m": "$$P(X\\ge a)\\le\\inf_{t>0:M_X(t)<\\infty}e^{-ta}M_X(t)$$",
          "meaning": "Infimum means the greatest lower limit of all these upper bounds, or their smallest achievable limiting value."
        },
        {
          "why": "For t<0, multiplication reverses the original order before exponentiation.",
          "m": "$$x\\le a\\ \\Longleftrightarrow\\ e^{tx}\\ge e^{ta}$$",
          "meaning": "The same Markov argument now bounds the lower tail."
        },
        {
          "why": "For an independent sum, factor the exponential expectations.",
          "m": "$$P\\left(\\sum_iX_i\\ge a\\right)\\le e^{-ta}\\prod_iM_{X_i}(t)\\quad(t>0)$$",
          "meaning": "Independence gives the product rule proved earlier; use only t where all necessary factors are finite."
        }
      ],
      "ends": "Chernoff bounds are Markov bounds after exponential transformation, optimized over allowed t."
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
      "idea": "Explain the tangent-line comparison, then average it; cover nondifferentiable convex functions too.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A convex function satisfies the chord inequality for any two inputs and 0≤θ≤1.",
          "m": "$$g(\\theta x+(1-\\theta)y)\\le\\theta g(x)+(1-\\theta)g(y)$$",
          "meaning": "This is the definition of a graph lying below each joining chord."
        },
        {
          "why": "At an interior point μ of its domain, a convex function has a supporting line of slope s.",
          "m": "$$g(x)\\ge g(\\mu)+s(x-\\mu)$$",
          "meaning": "For differentiable g, s=g'(μ). More generally slopes of left chords are no larger than slopes of right chords, so choosing s between them gives this inequality on both sides."
        },
        {
          "why": "Set μ=E[X] and assume the support lies in the convex domain, with the required averages defined.",
          "m": "$$g(X)\\ge g(\\mu)+s(X-\\mu)$$",
          "meaning": "The supporting-line inequality applies separately to each observation."
        },
        {
          "why": "Average both sides using order preservation.",
          "m": "$$E[g(X)]\\ge g(\\mu)+s(E[X]-\\mu)$$",
          "meaning": "The supporting line is affine, so its average is found by linearity."
        },
        {
          "why": "The bracket equals zero by the choice of μ.",
          "m": "$$E[g(X)]\\ge g(E[X])$$",
          "meaning": "This proves Jensen’s inequality; if the mean is a domain endpoint, the supported variable must equal that endpoint almost surely and the conclusion is immediate."
        },
        {
          "why": "For g(x)=x², the supporting-line gap can be checked without calculus.",
          "m": "$$x^2-[\\mu^2+2\\mu(x-\\mu)]=(x-\\mu)^2\\ge0$$",
          "meaning": "Averaging yields E[X²]≥E[X]², the same nonnegativity behind variance."
        },
        {
          "why": "If g is concave, −g is convex, so apply the proved inequality to −g and reverse signs.",
          "m": "$$E[g(X)]\\le g(E[X])\\quad\\text{for concave }g$$",
          "meaning": "This handles cap-shaped functions such as log on positive inputs."
        }
      ],
      "ends": "Averaging a convex graph stays above its value at the average input; supporting lines justify the result even without a derivative."
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
      "idea": "Separate the large-number choosing factor from the small-probability factor.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let λ>0 and p_r=r/(r+λ), and count failures X before the r-th success.",
          "m": "$$q_r=1-p_r=\\frac\\lambda{r+\\lambda}$$",
          "meaning": "Failures become rare as r grows."
        },
        {
          "why": "For X=k, the last trial is a success and the first r+k−1 trials contain k failures.",
          "m": "$$P(X=k)=\\binom{r+k-1}k p_r^r q_r^k$$",
          "meaning": "The choosing coefficient locates those k failures; independent trial probabilities multiply."
        },
        {
          "why": "Write the choosing coefficient as a product of k consecutive factors.",
          "m": "$$\\binom{r+k-1}k q_r^k=\\frac{\\lambda^k}{k!}\\prod_{j=0}^{k-1}\\frac{r+j}{r+\\lambda}$$",
          "meaning": "All denominators r+λ are combined with the growing numerator factors."
        },
        {
          "why": "Keep k fixed while r tends to infinity.",
          "m": "$$\\prod_{j=0}^{k-1}\\frac{r+j}{r+\\lambda}\\longrightarrow1$$",
          "meaning": "This is a finite product of factors tending to 1; for k=0 the empty product is 1."
        },
        {
          "why": "Take logs of the success factor.",
          "m": "$$\\log(p_r^r)=-r\\log(1+\\lambda/r)\\longrightarrow-\\lambda$$",
          "meaning": "The elementary-calculus limit log(1+u)/u→1 gives the exponent limit."
        },
        {
          "why": "Exponentiate and multiply the two limits.",
          "m": "$$P(X=k)\\longrightarrow e^{-\\lambda}\\frac{\\lambda^k}{k!}$$",
          "meaning": "Continuity of the exponential turns the log limit into p_r^r→e^(−λ)."
        },
        {
          "why": "These limiting masses sum to 1 by the exponential series.",
          "m": "$$\\sum_{k=0}^{\\infty}e^{-\\lambda}\\frac{\\lambda^k}{k!}=1$$",
          "meaning": "Thus the fixed-count limits describe a complete Poisson distribution, rather than losing probability at infinity."
        }
      ],
      "ends": "The failure count approaches Poisson(λ) as r increases with the specified success probabilities."
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
      "idea": "Construct close Bernoulli and Poisson counts, then bound the probability that the sums disagree.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For each i draw an independent P_i~Poisson(p_i) and an independent uniform U_i, with 0≤p_i≤1.",
          "m": "$$P(P_i=0)=e^{-p_i},\\quad P(P_i\\ge1)=1-e^{-p_i}$$",
          "meaning": "These auxiliary variables will construct a Bernoulli B_i on the same probability space; this is called a coupling."
        },
        {
          "why": "The inequality e^(−p)≥1−p gives a nonnegative missing success mass.",
          "m": "$$d_i=p_i-(1-e^{-p_i})\\ge0$$",
          "meaning": "For example, the inequality follows from the exponential graph lying above its tangent at zero."
        },
        {
          "why": "When P_i≥1 set B_i=1; when P_i=0 set B_i=1 with chance d_i/e^(−p_i).",
          "m": "$$B_i=1\\text{ if }P_i\\ge1\\text{ or }[P_i=0,\\ U_i\\le d_i/e^{-p_i}]$$",
          "meaning": "The latter chance is between 0 and 1 because 0≤d_i≤e^(−p_i), using p_i≤1."
        },
        {
          "why": "Calculate the total success probability of this constructed flag.",
          "m": "$$P(B_i=1)=1-e^{-p_i}+e^{-p_i}\\frac{d_i}{e^{-p_i}}=p_i$$",
          "meaning": "Thus B_i is Bernoulli(p_i); constructions for different indices are independent."
        },
        {
          "why": "The pair disagrees only when P_i≥2 or when P_i=0 and the extra flag is set.",
          "m": "$$P(B_i\\ne P_i)=1-e^{-p_i}(1+p_i)+d_i=p_i(1-e^{-p_i})$$",
          "meaning": "Substitute d_i=p_i−1+e^(−p_i) to verify the cancellation."
        },
        {
          "why": "Since 1−e^(−p_i)≤p_i, the pairwise disagreement has a simple bound.",
          "m": "$$P(B_i\\ne P_i)\\le p_i^2$$",
          "meaning": "This is the same exponential tangent inequality used earlier."
        },
        {
          "why": "If all pairs agree, their sums agree; use the union bound on possible mismatches.",
          "m": "$$P\\left(\\sum_iB_i\\ne\\sum_iP_i\\right)\\le\\sum_ip_i^2$$",
          "meaning": "A mismatch can sometimes cancel in the sum, which is why this is an upper bound."
        },
        {
          "why": "The independent Poisson counts sum to a Poisson with rate λ=Σp_i.",
          "m": "$$Z=\\sum_iP_i\\sim\\operatorname{Poisson}(\\lambda),\\quad W=\\sum_iB_i$$",
          "meaning": "W has exactly the target independent-Bernoulli sum law."
        },
        {
          "why": "For any set A of counts, membership flags differ only when the counts differ.",
          "m": "$$|P(W\\in A)-P(Z\\in A)|\\le E[|\\mathbf1_{\\{W\\in A\\}}-\\mathbf1_{\\{Z\\in A\\}}|]\\le\\sum_ip_i^2$$",
          "meaning": "The first inequality is the triangle inequality for an average; the second uses the disagreement bound."
        }
      ],
      "ends": "The approximation error is bounded uniformly over count events by the sum of squared individual success probabilities."
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
    "provenance": "Ross, 10e, §8.7, definition and Eq. (7.1), PDF pp. 414–415.",
    "proof": {
      "idea": "Add the incomes of the poorest population fraction using quantiles.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume nonnegative incomes with finite positive mean μ and define their quantile q(u).",
          "m": "$$q(u)=\\inf\\{x:F(x)\\ge u\\}\\quad(0<u<1)$$",
          "meaning": "The generalized inverse works with tied incomes as well as continuous laws."
        },
        {
          "why": "A uniform population rank U produces income q(U) with the original law.",
          "m": "$$X\\text{ has the law of }q(U),\\quad\\mu=\\int_0^1q(u)du$$",
          "meaning": "Inverse-transform sampling justifies the first fact; uniform LOTUS gives the mean integral."
        },
        {
          "why": "The lowest population fraction p occupies ranks 0 through p.",
          "m": "$$L(p)=\\frac1\\mu\\int_0^pq(u)du$$",
          "meaning": "This defines its share of total income, correctly splitting any tied-income group by rank."
        },
        {
          "why": "For a continuous law without atoms, the lowest p incomes are those below ξ_p=q(p), with F(ξ_p)=p.",
          "m": "$$L(p)=\\frac{E[X\\mathbf1_{\\{X\\le\\xi_p\\}}]}{E[X]}$$",
          "meaning": "The quantile-rank and cutoff formulations then select the same population mass."
        },
        {
          "why": "Because q(u) is nonnegative and nondecreasing, accumulated income is increasing and has nondecreasing slope.",
          "m": "$$L'(p)=q(p)/\\mu\\quad\\text{where differentiable}$$",
          "meaning": "This yields an increasing convex curve; the endpoints are L(0)=0 and L(1)=1."
        },
        {
          "why": "The poorest p ranks have mean income no larger than the whole-population mean.",
          "m": "$$\\frac1p\\int_0^pq(u)du\\le\\mu\\quad(0<p\\le1)$$",
          "meaning": "Nondecreasing q makes the remaining ranks’ mean at least the lower ranks’ mean; the overall mean is their weighted average."
        },
        {
          "why": "Multiply the preceding inequality by p/μ.",
          "m": "$$L(p)\\le p$$",
          "meaning": "Thus the Lorenz curve lies at or below the equal-income line; if everyone earns μ then q(u)=μ and L(p)=p."
        }
      ],
      "ends": "The Lorenz curve accumulates quantile-ranked income, and its geometry follows from the nondecreasing income quantile."
    }
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
    "provenance": "Ross, 10e, §8.7, Gini index formula, PDF p. 416.",
    "proof": {
      "idea": "Normalize the area gap from the equal-income line.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "The equal-income Lorenz curve is the straight line L_equal(p)=p.",
          "m": "$$\\int_0^1p\\,dp=1/2$$",
          "meaning": "The area under this line is a right triangle of base and height 1, or the integral of p."
        },
        {
          "why": "The actual Lorenz curve lies between 0 and that line.",
          "m": "$$A=\\int_0^1[p-L(p)]dp\\ge0$$",
          "meaning": "A is the area between the two curves."
        },
        {
          "why": "Define Gini as this gap divided by the equality-line area.",
          "m": "$$G=\\frac A{1/2}=2A$$",
          "meaning": "This chooses a scale on which the largest possible gap has limiting value 1."
        },
        {
          "why": "Distribute the integral and insert the equality-line area.",
          "m": "$$G=2\\left[\\frac12-\\int_0^1L(p)dp\\right]=1-2\\int_0^1L(p)dp$$",
          "meaning": "This derives the usual formula from the geometric definition."
        },
        {
          "why": "Use 0≤L(p)≤p to bound the area and index.",
          "m": "$$0\\le G\\le1$$",
          "meaning": "Equal incomes give L=p and G=0; increasing concentration can make the curve area approach zero and G approach 1."
        }
      ],
      "ends": "The Gini formula is twice the Lorenz area gap, because the equality-line triangle has area one-half."
    }
  }
]
);
