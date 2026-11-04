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
    "statement": "<p><b>Statement:</b> The two foundational limit theorems of probability describe complementary aspects of sample averages $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ for an iid sequence with finite mean $\\mu$ and variance $\\sigma^2$:<br>(1) <b>Law of Large Numbers (LLN):</b> Establishes that the sample mean converges to the true population mean: $\\bar{X}_n \\to \\mu$ (in probability for WLLN, almost surely for SLLN), demonstrating stability of long-run averages.<br>(2) <b>Central Limit Theorem (CLT):</b> Quantifies the magnitude and shape of fluctuations around the mean, showing that $\\sqrt{n}(\\bar{X}_n - \\mu) = \\frac{\\sum X_i - n\\mu}{\\sigma \\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$ converges to a universal Gaussian bell curve.</p><p><b>Mathematical terms:</b> $\\bar{X}_n$ is the sample mean; $\\mu$ is the population mean; convergence in probability means $P(|\\bar{X}_n - \\mu| > \\epsilon) \\to 0$; almost sure convergence means $P(\\lim \\bar{X}_n = \\mu) = 1$; $\\xrightarrow{d}$ denotes convergence in distribution.</p><p><b>Reason:</b> As sample size $n$ increases, the variance of the average $\\operatorname{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n} \\to 0$ collapses to zero, concentrating all probability mass at the point $\\mu$ (the LLN). However, magnifying these microscopic deviations by the factor $\\sqrt{n}$ balances the collapsing variance $\\operatorname{Var}(\\sqrt{n}(\\bar{X}_n - \\mu)) = n \\frac{\\sigma^2}{n} = \\sigma^2$, revealing that the macroscopic distribution of random fluctuations is universally Gaussian regardless of the underlying distribution of the original variables.</p>",
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
    "statement": "<p><b>Statement:</b> Fundamental probability tail bounds:<br>(1) <b>Markov's Inequality:</b> For any non-negative random variable $X \\ge 0$ and any threshold $a > 0$:$$P(X \\ge a) \\le \\frac{E[X]}{a}$$<br>(2) <b>Chebyshev's Inequality:</b> For any random variable $X$ with finite mean $\\mu$ and finite variance $\\sigma^2$, and any $k > 0$:$$P(|X - \\mu| \\ge k) \\le \\frac{\\sigma^2}{k^2}$$Equivalently, setting $k = c\\sigma$ for $c > 0$, $P(|X - \\mu| \\ge c\\sigma) \\le \\frac{1}{c^2}$.</p><p><b>Mathematical terms:</b> $X \\ge 0$ is non-negative; $a > 0$ is the tail threshold; $|X - \\mu| \\ge k$ is the deviation from the mean; $\\sigma^2 = \\operatorname{Var}(X)$ is variance; $k^2$ is the squared distance threshold.</p><p><b>Reason:</b> (1) For non-negative $X$, the step function $a \\mathbf{1}_{\\{X \\ge a\\}} \\le X$ holds pointwise everywhere, because when $X < a$ the left side is 0, and when $X \\ge a$ the left side is $a \\le X$. Taking expectations preserves the inequality: $a E[\\mathbf{1}_{\\{X \\ge a\\}}] = a P(X \\ge a) \\le E[X]$. Dividing by $a > 0$ yields Markov's bound. (2) Define $Y = (X - \\mu)^2 \\ge 0$. Notice that $|X - \\mu| \\ge k \\iff Y \\ge k^2$. Applying Markov's inequality to $Y$ with threshold $k^2$ gives $P(Y \\ge k^2) \\le \\frac{E[Y]}{k^2} = \\frac{\\operatorname{Var}(X)}{k^2} = \\frac{\\sigma^2}{k^2}$.</p>",
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
    "statement": "<p><b>Statement:</b> The <b>Weak Law of Large Numbers (WLLN)</b>: Let $X_1, X_2, \\ldots$ be a sequence of uncorrelated (or independent) random variables with common mean $E[X_i] = \\mu$ and bounded variance $\\operatorname{Var}(X_i) \\le \\sigma^2 < \\infty$. Define the sample average $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$. Then for every $\\epsilon > 0$:$$\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\ge \\epsilon) = 0$$that is, the sample average $\\bar{X}_n$ converges in probability to $\\mu$ ($\\bar{X}_n \\xrightarrow{P} \\mu$).</p><p><b>Mathematical terms:</b> $\\bar{X}_n$ is the sample mean; $\\epsilon > 0$ is any arbitrarily small tolerance threshold; convergence in probability means the probability of any non-zero estimation error vanishes as $n \\to \\infty$.</p><p><b>Reason:</b> By linearity of expectation, $E[\\bar{X}_n] = \\frac{1}{n}\\sum E[X_i] = \\mu$. Since the variables are uncorrelated, the variance of the average is $\\operatorname{Var}(\\bar{X}_n) = \\frac{1}{n^2} \\sum \\operatorname{Var}(X_i) \\le \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}$. Applying Chebyshev's inequality to $\\bar{X}_n$ with threshold $\\epsilon > 0$ yields $P(|\\bar{X}_n - \\mu| \\ge \\epsilon) \\le \\frac{\\operatorname{Var}(\\bar{X}_n)}{\\epsilon^2} \\le \\frac{\\sigma^2}{n \\epsilon^2}$. As $n \\to \\infty$, the upper bound $\\frac{\\sigma^2}{n\\epsilon^2} \\to 0$ for any fixed $\\epsilon > 0$, forcing $P(|\\bar{X}_n - \\mu| \\ge \\epsilon) \\to 0$ by the squeeze theorem.</p>",
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
    "statement": "<p><b>Statement:</b> The <b>Classical Central Limit Theorem (Lindeberg-Lévy CLT)</b>: Let $X_1, X_2, \\ldots$ be an independent and identically distributed (iid) sequence of random variables with finite mean $\\mu = E[X_i]$ and finite non-zero variance $\\sigma^2 = \\operatorname{Var}(X_i) > 0$. Define the partial sum $S_n = \\sum_{i=1}^n X_i$ and sample mean $\\bar{X}_n = S_n / n$. Then the standardized sum converges in distribution to the standard normal distribution:$$Z_n = \\frac{S_n - n\\mu}{\\sigma \\sqrt{n}} = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$$meaning that for every $z \\in \\mathbb{R}$, $\\lim_{n \\to \\infty} P(Z_n \\le z) = \\Phi(z) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^z e^{-t^2/2} \\, dt$.</p><p><b>Mathematical terms:</b> $S_n$ is the sum of $n$ iid terms; $n\\mu$ is the expected sum; $\\sigma\\sqrt{n}$ is the standard deviation of the sum; $\\Phi(z)$ is the standard normal cumulative distribution function; $\\xrightarrow{d}$ denotes convergence in distribution.</p><p><b>Reason:</b> Let $Y_i = \\frac{X_i - \\mu}{\\sigma}$, so $E[Y_i] = 0$ and $\\operatorname{Var}(Y_i) = 1$. The standardized sum is $Z_n = \\frac{1}{\\sqrt{n}} \\sum_{i=1}^n Y_i$. Its characteristic function is $\\phi_{Z_n}(t) = \\left[\\phi_Y\\left(\\frac{t}{\\sqrt{n}}\\right)\\right]^n$. Expand $\\phi_Y(u)$ in a Taylor series around $u = 0$: $\\phi_Y(u) = 1 + i u E[Y] - \\frac{u^2}{2} E[Y^2] + o(u^2) = 1 - \\frac{u^2}{2} + o(u^2)$. Substituting $u = t/\\sqrt{n}$ gives $\\phi_{Z_n}(t) = \\left(1 - \\frac{t^2}{2n} + o\\left(\\frac{t^2}{n}\\right)\\right)^n$. As $n \\to \\infty$, this limit is well known: $\\lim_{n \\to \\infty} (1 - \\frac{t^2/2}{n})^n = e^{-t^2/2}$, which is the characteristic function of $\\mathcal{N}(0, 1)$. By Lévy's Continuity Theorem, convergence of characteristic functions implies convergence in distribution.</p>",
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
    "statement": "<p><b>Statement:</b> Practical implementation of the Central Limit Theorem: for sufficiently large sample size (typically $n \\ge 30$), the partial sum $S_n = \\sum_{i=1}^n X_i$ of iid variables with mean $\\mu$ and variance $\\sigma^2$ is approximately normal $S_n \\approx \\mathcal{N}(n\\mu, n\\sigma^2)$, and the sample mean is approximately normal $\\bar{X}_n \\approx \\mathcal{N}(\\mu, \\sigma^2/n)$. For any thresholds $a < b$:$$P(a \\le S_n \\le b) \\approx \\Phi\\left(\\frac{b - n\\mu}{\\sigma \\sqrt{n}}\\right) - \\Phi\\left(\\frac{a - n\\mu}{\\sigma \\sqrt{n}}\\right)$$</p><p>For integer-valued discrete sums, applying continuity correction replaces $a$ with $a - 0.5$ and $b$ with $b + 0.5$.</p><p><b>Mathematical terms:</b> $n\\mu$ is the center of the sum; $\\sigma\\sqrt{n}$ is the standard error of the sum; $\\sigma/\\sqrt{n}$ is the standard error of the sample mean; $\\Phi(\\cdot)$ evaluates standard normal probabilities.</p><p><b>Reason:</b> Standardizing the event $\\{a \\le S_n \\le b\\}$ subtracts the expected value $n\\mu$ and divides by the standard deviation $\\sigma\\sqrt{n}$ across all terms: $P\\left(\\frac{a - n\\mu}{\\sigma\\sqrt{n}} \\le \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\le \\frac{b - n\\mu}{\\sigma\\sqrt{n}}\\right)$. By the CLT, the standardized variable $Z_n$ is approximately $\\mathcal{N}(0, 1)$, so the probability is given by the difference of standard normal CDF values $\\Phi(z_{\\text{upper}}) - \\Phi(z_{\\text{lower}})$.</p>",
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
    "statement": "<p><b>Statement:</b> The <b>Strong Law of Large Numbers (SLLN)</b>: Let $X_1, X_2, \\ldots$ be a sequence of independent and identically distributed random variables with finite mean $E[|X_1|] < \\infty$ and $\\mu = E[X_1]$. Define the sample average $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$. Then $\\bar{X}_n$ converges to $\\mu$ <b>almost surely</b> (with probability 1):$$P\\left(\\lim_{n \\to \\infty} \\bar{X}_n = \\mu\\right) = 1$$Unlike the WLLN, which bounds the probability of error at a fixed sample size $n$, the SLLN asserts that with probability 1, the entire infinite trajectory $\\bar{X}_n(\\omega)$ converges to $\\mu$.</p><p><b>Mathematical terms:</b> Almost sure convergence ($X_n \\xrightarrow{a.s.} \\mu$); $P(\\lim \\bar{X}_n = \\mu) = 1$ means the event where the sample average fails to converge has probability zero; finite absolute expectation $E[|X|] < \\infty$ is a necessary and sufficient condition.</p><p><b>Reason:</b> When fourth moments exist ($E[X^4] < \\infty$), expand $E[(\\bar{X}_n - \\mu)^4] = \\frac{1}{n^4} E[(\\sum (X_i - \\mu))^4] = \\frac{1}{n^4} [n E[(X_1-\\mu)^4] + 3n(n-1)\\sigma^4] = O(1/n^2)$. By Markov's inequality, $P(|\\bar{X}_n - \\mu| > \\epsilon) \\le \\frac{E[(\\bar{X}_n - \\mu)^4]}{\\epsilon^4} \\le \\frac{C}{n^2 \\epsilon^4}$. Because the $p$-series $\\sum_{n=1}^\\infty \\frac{1}{n^2} < \\infty$ converges, the Borel-Cantelli Lemma implies that the event $\\{|\\bar{X}_n - \\mu| > \\epsilon\\}$ occurs for infinitely many $n$ with probability 0. In the general case where only $E[|X|] < \\infty$, truncation and Kolmogorov's inequality establish almost sure convergence.</p>",
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
    "statement": "<p><b>Statement:</b> <b>Cantelli's Inequality (One-Sided Chebyshev Inequality):</b> Let $X$ be a random variable with mean $\\mu$ and finite variance $\\sigma^2$. Then for any $k > 0$, the probability of an extreme deviation in a single specified direction is bounded by:$$P(X - \\mu \\ge k) \\le \\frac{\\sigma^2}{\\sigma^2 + k^2}$$and symmetrically, $P(X - \\mu \\le -k) \\le \\frac{\\sigma^2}{\\sigma^2 + k^2}$. This bound strictly improves the two-sided Chebyshev bound $\\frac{\\sigma^2}{k^2}$ whenever $k > 0$.</p><p><b>Mathematical terms:</b> $k > 0$ is a positive deviation; $\\frac{\\sigma^2}{\\sigma^2 + k^2} < \\frac{\\sigma^2}{k^2}$ is the one-sided bound; optimal parameter shift $c = \\frac{\\sigma^2}{k}$.</p><p><b>Reason:</b> For any real constant $c > 0$, notice $X - \\mu \\ge k \\iff (X - \\mu + c) \\ge (k + c) > 0$. Therefore, $\\{X - \\mu \\ge k\\} \\subseteq \\{(X - \\mu + c)^2 \\ge (k + c)^2\\}$. Applying Markov's inequality to the non-negative variable $(X - \\mu + c)^2$ gives $P(X - \\mu \\ge k) \\le \\frac{E[(X - \\mu + c)^2]}{(k + c)^2} = \\frac{\\sigma^2 + c^2}{(k + c)^2}$. Minimizing this function of $c$ by differentiating yields the optimal value $c^* = \\sigma^2/k$. Substituting $c^*$ into the bound gives $\\frac{\\sigma^2 + (\\sigma^2/k)^2}{(k + \\sigma^2/k)^2} = \\frac{\\sigma^2(1 + \\sigma^2/k^2)}{(k^2 + \\sigma^2)^2/k^2} = \\frac{\\sigma^2}{k^2 + \\sigma^2}$.</p>",
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
    "statement": "<p><b>Statement:</b> <b>Chernoff Bounds:</b> Let $X$ be a random variable with moment generating function $M_X(t) = E[e^{tX}]$ defined for $t > 0$. For any threshold $a \\in \\mathbb{R}$, the tail probability is bounded by minimizing the exponential Markov bound:$$P(X \\ge a) \\le \\inf_{t > 0} e^{-ta} M_X(t) = \\exp\\left(-\\sup_{t > 0} [ta - \\ln M_X(t)]\\right)$$</p><p>where $I(a) = \\sup_{t > 0} [ta - \\ln M_X(t)]$ is the <b>Fenchel-Legendre transform</b> (rate function) of $X$, providing exponentially decaying bounds on large deviations.</p><p><b>Mathematical terms:</b> $M_X(t) = E[e^{tX}]$ is the MGF; $t > 0$ is a free tuning parameter; $\\inf_{t > 0}$ is the infimum over all positive $t$; $\\ln M_X(t)$ is the cumulant generating function; $I(a)$ is the large deviation rate function.</p><p><b>Reason:</b> Because $t > 0$, the exponential function is strictly increasing, so the event $\\{X \\ge a\\}$ is logically identical to $\\{e^{tX} \\ge e^{ta}\\}$. Because $e^{tX} > 0$ is strictly positive, applying Markov's inequality yields $P(X \\ge a) = P(e^{tX} \\ge e^{ta}) \\le \\frac{E[e^{tX}]}{e^{ta}} = e^{-ta} M_X(t)$. Because this inequality holds for every valid choice of $t > 0$, taking the infimum over all $t > 0$ yields the tightest possible upper bound, which decays exponentially fast in the distance of $a$ from the mean.</p>",
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
    "statement": "<p><b>Statement:</b> <b>Jensen's Inequality:</b> Let $X$ be an integrable random variable, and let $g: \\mathbb{R} \\to \\mathbb{R}$ be a <b>convex function</b> (i.e. $g(\\lambda x + (1-\\lambda)y) \\le \\lambda g(x) + (1-\\lambda)g(y)$ for all $\\lambda \\in [0, 1]$). If $E[X]$ and $E[g(X)]$ exist, then:$$g(E[X]) \\le E[g(X)]$$If $g$ is concave, the inequality reverses: $g(E[X]) \\ge E[g(X)]$. Strict inequality holds if $g$ is strictly convex and $X$ is not almost surely constant.</p><p><b>Mathematical terms:</b> Convex function $g$ (tangents lie below the graph); concave function (tangents lie above); $g(E[X])$ is the function evaluated at the mean; $E[g(X)]$ is the expected transformed value.</p><p><b>Reason:</b> Because $g$ is convex, at the point $\\mu = E[X]$ there exists a sub-gradient (supporting tangent line) $L(x) = g(\\mu) + c(x - \\mu)$ such that $g(x) \\ge L(x)$ for all $x \\in \\mathbb{R}$. Replacing $x$ by the random variable $X$ gives the inequality $g(X) \\ge g(\\mu) + c(X - \\mu)$ almost surely. Taking expectations of both sides preserves the inequality by monotonicity of expectation: $E[g(X)] \\ge E[g(\\mu) + c(X - \\mu)] = g(\\mu) + c(E[X] - \\mu) = g(E[X]) + c(0) = g(E[X])$.</p>",
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
    "statement": "<p><b>Statement:</b> Let $Y \\sim \\operatorname{NegBin}(r, p_n)$ be the number of failures before achieving $r$ successes in independent Bernoulli trials. If $r \\to \\infty$ and failure probability $q_n = 1 - p_n \\to 0$ such that $r q_n \\to \\lambda > 0$, then the distribution of failures converges to a <b>Poisson distribution</b>:$$Y \\xrightarrow{d} \\operatorname{Poisson}(\\lambda)$$ pointwise for every $k \\in \\{0, 1, 2, \\ldots\\}$.</p><p><b>Mathematical terms:</b> $r$ is the success target; $q_n = 1 - p_n$ is the small failure probability; $r q_n \\to \\lambda$ is the expected failure total; convergence in distribution to $\\operatorname{Poisson}(\\lambda)$.</p><p><b>Reason:</b> Write the Negative Binomial PMF for failures: $P(Y = k) = \\binom{k + r - 1}{k} p_n^r (1 - p_n)^k = \\frac{(r + k - 1)\\cdots r}{k!} (1 - q_n)^r q_n^k$. Substitute $q_n = \\lambda/r$: the product $(r + k - 1)\\cdots r \\approx r^k$, which cancels the denominator of $q_n^k = \\frac{\\lambda^k}{r^k}$, leaving $\\frac{\\lambda^k}{k!}$. Furthermore, $(1 - q_n)^r = (1 - \\frac{\\lambda}{r})^r \\to e^{-\\lambda}$ as $r \\to \\infty$. Combining these limits yields $\\lim_{r \\to \\infty} P(Y = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}$, matching the Poisson PMF.</p>",
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
    "statement": "<p><b>Statement:</b> <b>Le Cam's Theorem (Poisson Approximation to Independent Bernoulli Sums):</b> Let $X_1, \\ldots, X_n$ be independent Bernoulli random variables with success probabilities $P(X_i = 1) = p_i$. Define $S_n = \\sum_{i=1}^n X_i$ and $\\lambda = \\sum_{i=1}^n p_i = E[S_n]$. Then the total variation distance between the distribution of $S_n$ and $\\operatorname{Poisson}(\\lambda)$ is bounded by:$$d_{\\mathrm{TV}}\\left(\\mathcal{L}(S_n), \\, \\operatorname{Poisson}(\\lambda)\\right) = \\frac{1}{2} \\sum_{k=0}^\\infty |P(S_n = k) - e^{-\\lambda} \\frac{\\lambda^k}{k!}| \\le \\sum_{i=1}^n p_i^2$$</p><p><b>Mathematical terms:</b> $d_{\\mathrm{TV}}$ is total variation distance; $\\mathcal{L}(S_n)$ is the law of the sum; $\\lambda = \\sum p_i$ is the total rate; $\\sum p_i^2$ is the Le Cam error bound.</p><p><b>Reason:</b> Couple each Bernoulli variable $X_i$ with an independent Poisson variable $Y_i \\sim \\operatorname{Poisson}(p_i)$ on the same probability space such that $P(X_i \\ne Y_i) \\le p_i^2$. Because $\\sum Y_i \\sim \\operatorname{Poisson}(\\sum p_i) = \\operatorname{Poisson}(\\lambda)$, the total variation distance between the sums is bounded by the probability that the coupled sequences differ anywhere: $d_{\\mathrm{TV}} \\le P(\\sum X_i \\ne \\sum Y_i) \\le P(\\bigcup \\{X_i \\ne Y_i\\}) \\le \\sum_{i=1}^n P(X_i \\ne Y_i) \\le \\sum_{i=1}^n p_i^2$. When all $p_i$ are small, $\\sum p_i^2$ is negligible even if $n$ is large and the $p_i$ are unequal.</p>",
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
    "statement": "<p><b>Statement:</b> For a non-negative continuous random variable $X \\ge 0$ (such as income or wealth) with CDF $F(x)$, finite mean $\\mu = E[X] > 0$, and quantile function $Q(u) = F^{-1}(u)$ for $u \\in [0, 1]$, the <b>Lorenz Curve</b> $L(u): [0, 1] \\to [0, 1]$ represents the cumulative proportion of total population wealth possessed by the bottom $u$-quantile of the population:$$L(u) = \\frac{1}{\\mu} \\int_0^u Q(t) \\, dt = \\frac{\\int_0^{F^{-1}(u)} x f(x) \\, dx}{\\int_0^\\infty x f(x) \\, dx}$$The curve satisfies $L(0) = 0$, $L(1) = 1$, is convex ($L^{\\prime\\prime}(u) \\ge 0$), and lies below the diagonal line of perfect equality $L(u) \\le u$.</p><p><b>Mathematical terms:</b> $u \\in [0, 1]$ is the population fraction; $Q(u) = F^{-1}(u)$ is the quantile; $L(u)$ is the cumulative share of total resources; $L(u) = u$ is the 45-degree line of perfect equality.</p><p><b>Reason:</b> By definition, $Q(t) = F^{-1}(t)$ is the wealth level of an individual at percentile $t$. Because $F^{-1}(t)$ is non-decreasing in $t$, integrating $F^{-1}(t)$ from 0 to $u$ sums the total wealth held by the poorest fraction $u$ of the population. Dividing by the total population wealth $\\mu = \\int_0^1 F^{-1}(t) dt$ scales the ratio to $[0, 1]$. Because $L^\\prime(u) = \\frac{F^{-1}(u)}{\\mu}$ is non-decreasing, the second derivative $L^{\\prime\\prime}(u) \\ge 0$, establishing that the Lorenz curve is convex and bows downward beneath the line of equality.</p>",
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
    "statement": "<p><b>Statement:</b> The <b>Gini Index</b> (Gini Coefficient) $G \\in [0, 1]$ is defined as twice the area between the line of perfect equality ($L(u) = u$) and the Lorenz curve $L(u)$:$$G = 2 \\int_0^1 (u - L(u)) \\, du = 1 - 2 \\int_0^1 L(u) \\, du$$Equivalently, for independent copies $X_1, X_2 \\overset{\\text{iid}}{\\sim} F$, $G$ equals half the relative mean absolute difference: $G = \\frac{E[|X_1 - X_2|]}{2E[X_1]}$. A Gini coefficient of $0$ indicates perfect equality ($L(u) = u$), while $1$ indicates maximal inequality.</p><p><b>Mathematical terms:</b> $G \\in [0, 1]$ is the Gini index; $\\int_0^1 (u - L(u))du$ is the inequality gap area; $E[|X_1 - X_2|]$ is the mean absolute pairwise disparity.</p><p><b>Reason:</b> The total area under the diagonal of perfect equality on $[0, 1]$ is $\\int_0^1 u du = 1/2$. The area between the diagonal and the Lorenz curve is $\\int_0^1 (u - L(u)) du = 1/2 - \\int_0^1 L(u) du$. Normalizing by the total area $1/2$ of the lower triangle scales the metric so that complete equality yields $G = \\frac{1/2 - 1/2}{1/2} = 0$, while concentrated wealth yields $G \\to 1$. By integrating $E[|X_1 - X_2|] = \\iint |x_1 - x_2| dF(x_1)dF(x_2)$ by parts, it directly evaluates to $4\\mu \\int_0^1 (u - L(u)) du$, confirming that $G$ measures the average pairwise disparity scaled by the mean.</p>",
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
