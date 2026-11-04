var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.DA.1",
    "sec": "DA.1",
    "kind": "definition",
    "tier": "core",
    "title": "Mean, median, mode and standard deviation",
    "oneLine": "Picture the data on a number line: the mean is its balance point, the median is the middle after sorting, and the mode is the most common value. Standard deviation is a typical distance from the mean, measured in the same units as the data.",
    "statement": "For observations $x_1,\\ldots,x_n$, $\\bar x=n^{-1}\\sum_i x_i$. Sort the data to find the median (the central value, or average of the two central values). Modes are values with greatest frequency; there may be several. A population median $m$ satisfies $P(X\\le m)\\ge1/2$ and $P(X\\ge m)\\ge1/2$. Population standard deviation is $\\sigma=\\sqrt{\\operatorname{Var}(X)}$. Sample variance is $s^2=\\sum_i(x_i-\\bar x)^2/(n-1)$ and sample standard deviation is $s=\\sqrt{s^2}$ for $n>1$. A continuous density mode maximizes the density when such a maximum exists.",
    "intuition": "Picture the data on a number line: the mean is its balance point, the median is the middle after sorting, and the mode is the most common value. Standard deviation is a typical distance from the mean, measured in the same units as the data.",
    "needs": [],
    "traps": [
      "Population and sample variance have different denominators; a mean need not equal a median or a mode."
    ],
    "cards": [
      {
        "q": "Define the sample mean and unbiased sample variance.",
        "a": "$\\bar x=\\sum_i x_i/n$, $s^2=\\sum_i(x_i-\\bar x)^2/(n-1)$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Explain data-summary definitions and derive why sample variance divides by n−1.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "The sample mean is the equally weighted average of n observations.",
          "m": "$$\\bar x=\\frac1n\\sum_{i=1}^nx_i$$",
          "meaning": "This is a definition. Sorting the observations defines the middle-position median; the most frequent values define the modes."
        },
        {
          "why": "Deviations from the sample mean sum to zero.",
          "m": "$$\\sum_i(x_i-\\bar x)=\\sum_ix_i-n\\bar x=0$$",
          "meaning": "After n−1 deviations are specified, the last is fixed by this constraint."
        },
        {
          "why": "For iid observations with mean μ and finite variance σ², expand deviations around μ.",
          "m": "$$\\sum_i(X_i-\\bar X)^2=\\sum_i(X_i-\\mu)^2-n(\\bar X-\\mu)^2$$",
          "meaning": "Expanding the squares and using Σ(X_i−μ)=n(bar(X)−μ) cancels the cross term into the displayed subtraction."
        },
        {
          "why": "Average this identity using E[(X_i−μ)²]=σ² and Var(bar(X))=σ²/n.",
          "m": "$$E\\left[\\sum_i(X_i-\\bar X)^2\\right]=n\\sigma^2-n(\\sigma^2/n)=(n-1)\\sigma^2$$",
          "meaning": "The sample mean has mean μ, so its centered mean square equals its variance."
        },
        {
          "why": "Divide by n−1 when n>1 to get an unbiased estimator of variance.",
          "m": "$$S^2=\\frac{\\sum_i(X_i-\\bar X)^2}{n-1},\\quad E[S^2]=\\sigma^2$$",
          "meaning": "The denominator is justified by this calculation, not only by naming degrees of freedom."
        },
        {
          "why": "Take a square root to express spread in the original units.",
          "m": "$$S=\\sqrt{S^2}$$",
          "meaning": "S estimates standard deviation, but square rooting does not preserve unbiasedness in general."
        },
        {
          "why": "For a population median m, at least half the probability lies on each weak side.",
          "m": "$$P(X\\le m)\\ge1/2,\\quad P(X\\ge m)\\ge1/2$$",
          "meaning": "This definition allows ties and more than one possible median; a density mode instead maximizes density height."
        }
      ],
      "ends": "The summaries have explicit definitions, and the sample-variance denominator is derived from its expected squared-deviation total."
    }
  },
  {
    "id": "c.prob.DA.2",
    "sec": "DA.1",
    "kind": "theorem",
    "tier": "core",
    "title": "Sampling distribution and standard error",
    "oneLine": "Imagine taking many samples and calculating the mean each time. The sample means bunch around the true mean, and their standard deviation (the standard error) shrinks as the samples get larger.",
    "statement": "For iid observations with finite mean $\\mu$ and variance $\\sigma^2$, $E[\\bar X]=\\mu$ and $\\operatorname{Var}(\\bar X)=\\sigma^2/n$. Standard error is $\\sigma/\\sqrt n$, estimated by $s/\\sqrt n$. If observations are normal, $\\bar X$ is exactly normal; otherwise the CLT supplies a large-sample approximation under its hypotheses.",
    "intuition": "Imagine taking many samples and calculating the mean each time. The sample means bunch around the true mean, and their standard deviation (the standard error) shrinks as the samples get larger.",
    "needs": [],
    "traps": [
      "Increasing sample size by a factor of four halves standard error; independence is needed for the stated variance."
    ],
    "cards": [
      {
        "q": "What is the standard error of an iid sample mean?",
        "a": "$\\sigma/\\sqrt n$; estimate it by $s/\\sqrt n$ when needed.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Derive the mean, variance and standard error of an iid sample mean.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X_i be iid with mean μ and finite variance σ², and define the sample mean.",
          "m": "$$\\bar X=\\frac1n\\sum_{i=1}^nX_i$$",
          "meaning": "Each observation uses the same probability law."
        },
        {
          "why": "Distribute expectation through the finite sum and the fixed multiplier.",
          "m": "$$E[\\bar X]=\\frac1n\\sum_{i=1}^nE[X_i]=\\frac{n\\mu}{n}=\\mu$$",
          "meaning": "This is linearity; independence is not needed for this step."
        },
        {
          "why": "Independence removes all covariance terms in the sum variance.",
          "m": "$$\\operatorname{Var}\\left(\\sum_iX_i\\right)=\\sum_i\\sigma^2=n\\sigma^2$$",
          "meaning": "The full variance formula would retain covariance terms for correlated data."
        },
        {
          "why": "Scaling the sum by 1/n multiplies its variance by 1/n².",
          "m": "$$\\operatorname{Var}(\\bar X)=\\frac{n\\sigma^2}{n^2}=\\sigma^2/n$$",
          "meaning": "This gives sampling spread of the mean, rather than spread of individual observations."
        },
        {
          "why": "Standard error is defined as standard deviation of the estimator.",
          "m": "$$\\operatorname{SE}(\\bar X)=\\sqrt{\\sigma^2/n}=\\sigma/\\sqrt n$$",
          "meaning": "Replace unknown σ with sample standard deviation S to estimate this error as S/sqrt(n)."
        },
        {
          "why": "Independent normal observations sum to a normal, so in that model the sampling law is exact.",
          "m": "$$\\bar X\\sim N(\\mu,\\sigma^2/n)\\quad\\text{for normal iid data}$$",
          "meaning": "Otherwise the finite-variance CLT gives a large-sample normal approximation under its stated conditions."
        }
      ],
      "ends": "Sample means preserve the population center and reduce independent-sample standard deviation by sqrt(n)."
    }
  },
  {
    "id": "c.prob.DA.3",
    "sec": "DA.1",
    "kind": "definition",
    "tier": "core",
    "title": "Chi-squared distribution",
    "oneLine": "Start with independent standard-normal scores and square each one. The squares are never negative, so their total measures how large the combined departures are; this total has a chi-squared distribution.",
    "statement": "If $Z_1,\\ldots,Z_\\nu$ are independent standard normal variables, $V=\\sum_i Z_i^2\\sim\\chi^2_\\nu$, where $\\nu$ is a positive integer. Its density is $v^{\\nu/2-1}e^{-v/2}/[2^{\\nu/2}\\Gamma(\\nu/2)]$ for $v>0$; it is Gamma(shape $\\nu/2$, rate $1/2$). $E[V]=\\nu$ and $\\operatorname{Var}(V)=2\\nu$. Independent chi-squared variables add their degrees of freedom.",
    "intuition": "Start with independent standard-normal scores and square each one. The squares are never negative, so their total measures how large the combined departures are; this total has a chi-squared distribution.",
    "needs": [],
    "traps": [
      "Chi-squared is asymmetric and supported on nonnegative values; do not use symmetric critical values."
    ],
    "cards": [
      {
        "q": "Define a chi-squared variable and give its mean and variance.",
        "a": "$V=\\sum_{i=1}^{\\nu} Z_i^2$ for independent $N(0,1)$ variables; $E[V]=\\nu$, $\\operatorname{Var}(V)=2\\nu$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Transform a squared normal and then use gamma addition.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Take Z standard normal and let Q=Z². Its output q>0 has two input roots ±sqrt(q).",
          "m": "$$f_Q(q)=\\frac{\\phi(\\sqrt q)+\\phi(-\\sqrt q)}{2\\sqrt q}$$",
          "meaning": "The many-to-one density formula uses |(z²)'|=2sqrt(q) for either root."
        },
        {
          "why": "Normal symmetry combines the two equal numerator terms.",
          "m": "$$f_Q(q)=\\frac{q^{-1/2}e^{-q/2}}{\\sqrt{2\\pi}}$$",
          "meaning": "This is gamma shape 1/2 and rate 1/2; Γ(1/2)=sqrt(π), obtained by t=z²/2 in the Gaussian area integral."
        },
        {
          "why": "Define chi-squared with integer degrees of freedom ν as the sum of ν independent squared standard normals.",
          "m": "$$V=\\sum_{i=1}^{\\nu}Z_i^2$$",
          "meaning": "Independence of the original normals is retained by their separate square functions."
        },
        {
          "why": "Apply the common-rate gamma-sum theorem.",
          "m": "$$V\\sim\\operatorname{Gamma}(\\nu/2,1/2)$$",
          "meaning": "Its shape is ν copies of 1/2, and the common rate remains 1/2."
        },
        {
          "why": "Insert these parameters into the gamma density and moments.",
          "m": "$$f_V(v)=\\frac{v^{\\nu/2-1}e^{-v/2}}{2^{\\nu/2}\\Gamma(\\nu/2)},\\quad E[V]=\\nu,\\quad\\operatorname{Var}(V)=2\\nu$$",
          "meaning": "The gamma moments a/λ and a/λ² were derived by gamma-integral recurrence in the family note."
        },
        {
          "why": "Independent chi-squared variables therefore add their degrees of freedom.",
          "m": "$$V_1+V_2\\sim\\chi^2_{\\nu_1+\\nu_2}$$",
          "meaning": "Both have the same gamma rate, so shapes add; the law extends to positive real degrees of freedom via its gamma definition."
        }
      ],
      "ends": "Chi-squared density and moments follow from squaring normals and adding common-rate gamma variables."
    }
  },
  {
    "id": "c.prob.DA.4",
    "sec": "DA.1",
    "kind": "definition",
    "tier": "core",
    "title": "Student t distribution",
    "oneLine": "A t score is like a z score, except its spread is estimated from the sample. That extra uncertainty makes extreme scores more common; with more data, the t curve gets closer to the standard normal curve.",
    "statement": "If $Z\\sim N(0,1)$ and $V\\sim\\chi^2_\\nu$ are independent, then $T=Z/\\sqrt{V/\\nu}\\sim t_\\nu$. Its density is $\\Gamma((\\nu+1)/2)[1+t^2/\\nu]^{-(\\nu+1)/2}/[\\sqrt{\\nu\\pi}\\Gamma(\\nu/2)]$. It is symmetric with heavier tails than normal; mean is zero for $\\nu>1$, variance $\\nu/(\\nu-2)$ for $\\nu>2$. For a normal iid sample, $(\\bar X-\\mu)/(S/\\sqrt n)\\sim t_{n-1}$.",
    "intuition": "A t score is like a z score, except its spread is estimated from the sample. That extra uncertainty makes extreme scores more common; with more data, the t curve gets closer to the standard normal curve.",
    "needs": [],
    "traps": [
      "Unknown sigma alone does not make a small-sample t calculation exact: the normal-sample model is essential."
    ],
    "cards": [
      {
        "q": "What ratio defines t, and which independence condition is required?",
        "a": "$Z/\\sqrt{V/\\nu}$ with $Z\\sim N(0,1)$ independent of $V\\sim\\chi^2_\\nu$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Derive the t density from a normal divided by an independent random scale.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Take independent Z~N(0,1) and V~chi²_ν with ν>0, and define T=Z/sqrt(V/ν).",
          "m": "$$z=t\\sqrt{v/\\nu},\\quad v=v$$",
          "meaning": "The denominator is positive almost surely, and the inverse transformation keeps v as a second coordinate."
        },
        {
          "why": "The inverse area determinant is the slope of z with respect to t at fixed v.",
          "m": "$$\\left|\\det\\frac{\\partial(z,v)}{\\partial(t,v)}\\right|=\\sqrt{v/\\nu}$$",
          "meaning": "The derivative matrix is triangular with diagonal sqrt(v/ν),1."
        },
        {
          "why": "Multiply the independent densities, include this factor, and integrate out v.",
          "m": "$$f_T(t)=\\frac1{\\sqrt{2\\pi\\nu}\\,2^{\\nu/2}\\Gamma(\\nu/2)}\\int_0^{\\infty}v^{(\\nu+1)/2-1}e^{-[1+t^2/\\nu]v/2}dv$$",
          "meaning": "The normal exponential and chi-squared exponential combine; the scale factor raises the v power by 1/2."
        },
        {
          "why": "For a,b>0 the substitution u=bv gives a standard gamma integral.",
          "m": "$$\\int_0^{\\infty}v^{a-1}e^{-bv}dv=\\Gamma(a)/b^a$$",
          "meaning": "The powers contribute b^(−(a−1)) and the differential contributes one more b^(−1)."
        },
        {
          "why": "Use a=(ν+1)/2 and b=(1+t²/ν)/2 and cancel powers of 2.",
          "m": "$$f_T(t)=\\frac{\\Gamma((\\nu+1)/2)}{\\sqrt{\\nu\\pi}\\Gamma(\\nu/2)}(1+t^2/\\nu)^{-(\\nu+1)/2}$$",
          "meaning": "This derives the t density, symmetric because it depends on t²."
        },
        {
          "why": "Its tails behave as |t|^(−ν−1), so the absolute mean exists only for ν>1 and the second moment only for ν>2.",
          "m": "$$E[T]=0\\quad(\\nu>1)$$",
          "meaning": "Symmetry gives mean zero only when the positive and negative parts are integrable."
        },
        {
          "why": "For ν>2 use independence and the reciprocal gamma moment.",
          "m": "$$E[T^2]=\\nu E[Z^2]E[1/V]=\\nu\\frac{(1/2)\\Gamma(\\nu/2-1)}{\\Gamma(\\nu/2)}=\\frac\\nu{\\nu-2}$$",
          "meaning": "E[Z²]=1 and Γ(a)=(a−1)Γ(a−1); the reciprocal moment exists only for a>1."
        },
        {
          "why": "For normal iid observations, the standardized mean Z and V=(n−1)S²/σ² are independent by the normal-sample proof.",
          "m": "$$\\frac{\\bar X-\\mu}{S/\\sqrt n}=\\frac{\\sqrt n(\\bar X-\\mu)/\\sigma}{\\sqrt{[(n-1)S^2/\\sigma^2]/(n-1)}}\\sim t_{n-1}$$",
          "meaning": "Cancelling σ shows exactly why replacing the unknown spread produces this t pivot."
        }
      ],
      "ends": "The t law arises from an independent normal divided by a chi-squared random scale; its exact sample application requires normal data."
    }
  },
  {
    "id": "c.prob.DA.5",
    "sec": "DA.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Confidence interval meaning and known-variance mean interval",
    "oneLine": "A confidence interval is made by a rule that works well over many repeated samples. A 95% rule catches the true fixed value about 95 times out of 100; after one sample, its two endpoints are fixed.",
    "statement": "A $(1-\\alpha)$ confidence procedure $[L(X),U(X)]$ satisfies $P_\\theta(L(X)\\le\\theta\\le U(X))=1-\\alpha$ under its model (or approximately for an asymptotic procedure). For iid normal data with known $\\sigma$, the two-sided mean interval is $\\bar X\\pm z_{1-\\alpha/2}\\sigma/\\sqrt n$, where $P(Z\\le z_q)=q$. For nonnormal iid data it is a CLT approximation, not an exact finite-sample assertion.",
    "intuition": "A confidence interval is made by a rule that works well over many repeated samples. A 95% rule catches the true fixed value about 95 times out of 100; after one sample, its two endpoints are fixed.",
    "needs": [],
    "traps": [
      "A realized frequentist interval does not assign 95% probability to the fixed parameter. Use alpha/2 in each tail for a two-sided interval."
    ],
    "cards": [
      {
        "q": "State the known-sigma normal mean confidence interval.",
        "a": "$\\bar X\\pm z_{1-\\alpha/2}\\sigma/\\sqrt n$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Invert the central normal probability interval one inequality at a time.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For normal iid data with known σ>0, define SE=σ/sqrt(n) and the standardized mean Z.",
          "m": "$$Z=\\frac{\\bar X-\\mu}{\\mathrm{SE}}\\sim N(0,1)$$",
          "meaning": "The exact normal sample-mean law justifies this parameter-free distribution."
        },
        {
          "why": "Let 0<α<1 and choose z so the upper tail has probability α/2.",
          "m": "$$z=z_{1-\\alpha/2},\\quad P(Z>z)=\\alpha/2$$",
          "meaning": "A lower-tail quantile z_q is defined by P(Z≤z_q)=q."
        },
        {
          "why": "Symmetry makes the lower tail at −z also α/2, so the middle has probability 1−α.",
          "m": "$$P(-z\\le Z\\le z)=1-\\alpha$$",
          "meaning": "Subtract the two disjoint tail probabilities from 1."
        },
        {
          "why": "Insert the sample-mean pivot and multiply both bounds by positive SE.",
          "m": "$$-z\\mathrm{SE}\\le\\bar X-\\mu\\le z\\mathrm{SE}$$",
          "meaning": "Multiplication by a positive value preserves order."
        },
        {
          "why": "The right inequality gives μ≥bar(X)−zSE; the left gives μ≤bar(X)+zSE.",
          "m": "$$\\bar X-z\\mathrm{SE}\\le\\mu\\le\\bar X+z\\mathrm{SE}$$",
          "meaning": "Solve separately by subtraction; moving the unknown mean reverses its side in the bounds."
        },
        {
          "why": "The equivalence of these events preserves their probability.",
          "m": "$$P\\left(\\bar X-z\\frac\\sigma{\\sqrt n}\\le\\mu\\le\\bar X+z\\frac\\sigma{\\sqrt n}\\right)=1-\\alpha$$",
          "meaning": "The endpoints vary with the random sample while μ is a fixed parameter."
        },
        {
          "why": "After observing one sample, calculate its numerical endpoints.",
          "m": "$$[\\bar x-z\\sigma/\\sqrt n,\\ \\bar x+z\\sigma/\\sqrt n]$$",
          "meaning": "The confidence level describes coverage over repeated samples; it is not a new probability assigned to the fixed μ after those endpoints are observed."
        }
      ],
      "ends": "The exact known-σ normal confidence interval comes from algebraic inversion of a central normal pivot; nonnormal use is only a CLT approximation."
    }
  },
  {
    "id": "c.prob.DA.6",
    "sec": "DA.2",
    "kind": "definition",
    "tier": "core",
    "title": "Unknown-variance mean interval",
    "oneLine": "When the population spread is unknown, use the sample spread. Because that estimate can wobble, use a t cutoff that leaves a little more room than the normal cutoff.",
    "statement": "For an iid normal sample of size $n>1$ with unknown variance, an exact two-sided interval for $\\mu$ is $\\bar X\\pm t_{n-1,1-\\alpha/2}S/\\sqrt n$. Here $S^2$ uses denominator $n-1$ and $P(t_\\nu\\le t_{\\nu,q})=q$. This is not an exact small-sample interval for arbitrary distributions.",
    "intuition": "When the population spread is unknown, use the sample spread. Because that estimate can wobble, use a t cutoff that leaves a little more room than the normal cutoff.",
    "needs": [],
    "traps": [
      "Use n−1 degrees of freedom and a t quantile, rather than replacing sigma with s while keeping a z quantile for an exact small-sample result."
    ],
    "cards": [
      {
        "q": "State the exact normal-sample mean interval with unknown variance.",
        "a": "$\\bar X\\pm t_{n-1,1-\\alpha/2}S/\\sqrt n$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Use the exact normal-sample t pivot and solve its central event for μ.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For an iid normal sample of size n>1 with σ>0, the standardized mean is standard normal.",
          "m": "$$Z=\\sqrt n(\\bar X-\\mu)/\\sigma\\sim N(0,1)$$",
          "meaning": "This is the normal sample-mean law."
        },
        {
          "why": "The normal-sample variance proof gives a chi-squared scale independent of this mean.",
          "m": "$$V=(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1},\\quad V\\text{ independent of }Z$$",
          "meaning": "Both normality and independence of observations are needed for this exact property."
        },
        {
          "why": "Divide the independent pivot by its random scale and cancel σ.",
          "m": "$$T=\\frac Z{\\sqrt{V/(n-1)}}=\\frac{\\bar X-\\mu}{S/\\sqrt n}\\sim t_{n-1}$$",
          "meaning": "This is the defining t ratio derived in the t-distribution note."
        },
        {
          "why": "Let t=t_(n−1,1−α/2); the symmetric central t event has probability 1−α.",
          "m": "$$P(-t\\le T\\le t)=1-\\alpha$$",
          "meaning": "Two tails each have α/2 probability."
        },
        {
          "why": "Multiply the two inequalities by positive S/sqrt(n), which is positive almost surely in this model.",
          "m": "$$-tS/\\sqrt n\\le\\bar X-\\mu\\le tS/\\sqrt n$$",
          "meaning": "The observed scale is random, but multiplication still preserves each sample’s event inequalities."
        },
        {
          "why": "Solve for μ as in the known-σ calculation.",
          "m": "$$\\bar X-tS/\\sqrt n\\le\\mu\\le\\bar X+tS/\\sqrt n$$",
          "meaning": "This proves the interval endpoints and their exact repeated-sample coverage."
        }
      ],
      "ends": "The unknown-variance mean interval uses t with n−1 degrees of freedom; its finite-sample exactness comes from the normal-sample pivot."
    }
  },
  {
    "id": "c.prob.DA.7",
    "sec": "DA.2",
    "kind": "definition",
    "tier": "core",
    "title": "Variance confidence interval",
    "oneLine": "A chi-squared score compares the sample spread with a proposed population spread. Solving the comparison for the unknown spread puts each cutoff underneath it, so the larger cutoff gives the smaller endpoint.",
    "statement": "For iid normal observations, $V=(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$. With lower-tail quantiles $\\chi^2_{\\nu,q}$, a two-sided interval for variance is $[(n-1)S^2/\\chi^2_{n-1,1-\\alpha/2},\\;(n-1)S^2/\\chi^2_{n-1,\\alpha/2}]$. Square-root its endpoints for a standard-deviation interval.",
    "intuition": "A chi-squared score compares the sample spread with a proposed population spread. Solving the comparison for the unknown spread puts each cutoff underneath it, so the larger cutoff gives the smaller endpoint.",
    "needs": [],
    "traps": [
      "The larger chi-square quantile goes in the lower endpoint; normality is required for the exact pivot."
    ],
    "cards": [
      {
        "q": "Which chi-square quantile appears in the lower variance endpoint?",
        "a": "The upper lower-tail quantile $\\chi^2_{n-1,1-\\alpha/2}$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Invert a positive chi-squared ratio and show why the larger quantile gives the lower endpoint.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For iid normal data with n>1 and σ>0, set A=(n−1)S².",
          "m": "$$V=A/\\sigma^2\\sim\\chi^2_{n-1}$$",
          "meaning": "This exact pivot follows from the independent residual-normal directions."
        },
        {
          "why": "Let q_L and q_U be the α/2 and 1−α/2 lower-tail quantiles.",
          "m": "$$P(q_L\\le V\\le q_U)=1-\\alpha,\\quad0<q_L<q_U$$",
          "meaning": "The central event removes α/2 from each asymmetric chi-squared tail."
        },
        {
          "why": "Insert the ratio in that event.",
          "m": "$$q_L\\le A/\\sigma^2\\le q_U$$",
          "meaning": "A and σ² are positive almost surely in the nondegenerate normal model."
        },
        {
          "why": "The upper ratio bound implies A≤q_U σ², so divide by positive q_U.",
          "m": "$$A/\\sigma^2\\le q_U\\ \\Longrightarrow\\ \\sigma^2\\ge A/q_U$$",
          "meaning": "This gives the lower variance endpoint."
        },
        {
          "why": "The lower ratio bound implies q_L σ²≤A, giving the upper endpoint.",
          "m": "$$q_L\\le A/\\sigma^2\\ \\Longrightarrow\\ \\sigma^2\\le A/q_L$$",
          "meaning": "A smaller positive divisor gives a larger endpoint."
        },
        {
          "why": "Combine the bounds and restore A’s sample expression.",
          "m": "$$\\frac{(n-1)S^2}{\\chi^2_{n-1,1-\\alpha/2}}\\le\\sigma^2\\le\\frac{(n-1)S^2}{\\chi^2_{n-1,\\alpha/2}}$$",
          "meaning": "The same event therefore has exact normal-model coverage 1−α."
        },
        {
          "why": "The square-root function increases on positive values, so root both endpoints for σ.",
          "m": "$$\\sqrt{A/q_U}\\le\\sigma\\le\\sqrt{A/q_L}$$",
          "meaning": "This changes a variance interval to a standard-deviation interval without changing its coverage."
        }
      ],
      "ends": "The reciprocal ratio explains the reversed quantile placement; normality is essential for the exact variance pivot."
    }
  },
  {
    "id": "c.prob.DA.8",
    "sec": "DA.2",
    "kind": "definition",
    "tier": "core",
    "title": "Proportion intervals and precision",
    "oneLine": "A sample proportion is the fraction of successes in a poll or experiment. Larger samples make that fraction steadier, but to make the margin of error half as wide you need about four times as many observations.",
    "statement": "For iid Bernoulli trials, $\\hat p=X/n$ with $X\\sim\\operatorname{Bin}(n,p)$. A large-sample Wald interval is $\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\hat p(1-\\hat p)/n}$, requiring both success and failure counts sufficiently large; it is unreliable near 0 or 1 and for small n. Planning for half-width $\\epsilon$ uses $n\\ge z_{1-\\alpha/2}^2p(1-p)/\\epsilon^2$, rounded up; without a prior p, use $p(1-p)\\le1/4$.",
    "intuition": "A sample proportion is the fraction of successes in a poll or experiment. Larger samples make that fraction steadier, but to make the margin of error half as wide you need about four times as many observations.",
    "needs": [],
    "traps": [
      "Do not call the Wald interval exact; its endpoints can fall outside [0,1], exposing a poor approximation."
    ],
    "cards": [
      {
        "q": "What is the conservative sample-size bound for a proportion half-width epsilon?",
        "a": "$n\\ge z_{1-\\alpha/2}^2/(4\\epsilon^2)$, rounded upward.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Derive proportion error and sample-size planning from binomial variance.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For n independent Bernoulli trials with success chance p, let X count successes.",
          "m": "$$\\hat p=X/n,\\quad E[\\hat p]=p$$",
          "meaning": "The binomial mean is np, and division by n preserves the target proportion."
        },
        {
          "why": "Apply the variance scale rule to the binomial count.",
          "m": "$$\\operatorname{Var}(\\hat p)=\\frac{np(1-p)}{n^2}=\\frac{p(1-p)}n$$",
          "meaning": "The standard error is its positive square root."
        },
        {
          "why": "For an interior p and sufficiently large success/failure counts, the CLT approximates the standardized proportion by a normal.",
          "m": "$$\\frac{\\hat p-p}{\\sqrt{p(1-p)/n}}\\approx N(0,1)$$",
          "meaning": "This approximation is poor near boundaries and at small n."
        },
        {
          "why": "Estimate p in the error formula by hat(p) to get the Wald interval.",
          "m": "$$\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\hat p(1-\\hat p)/n}$$",
          "meaning": "This plug-in step is approximate; it is not an exact coverage statement and may give endpoints outside [0,1]."
        },
        {
          "why": "For a planned half-width ε>0, require z sqrt(p(1−p)/n)≤ε.",
          "m": "$$z^2p(1-p)/n\\le\\epsilon^2$$",
          "meaning": "Squaring nonnegative sides preserves the inequality."
        },
        {
          "why": "Multiply by n and divide by positive ε² to solve for sample size.",
          "m": "$$n\\ge\\frac{z^2p(1-p)}{\\epsilon^2}$$",
          "meaning": "Round upward because n is an integer; this plans the normal-approximation width rather than an exact coverage guarantee."
        },
        {
          "why": "Without an assumed p, complete the square in its variance factor.",
          "m": "$$p(1-p)=1/4-(p-1/2)^2\\le1/4$$",
          "meaning": "The largest spread occurs at p=1/2."
        },
        {
          "why": "Use that maximum for conservative width planning.",
          "m": "$$n\\ge\\frac{z^2}{4\\epsilon^2}$$",
          "meaning": "Halving ε multiplies the required sample size by 4."
        }
      ],
      "ends": "Proportion precision follows from binomial variance; the Wald interval and normal-based sample-size rule remain approximations."
    }
  },
  {
    "id": "c.prob.DA.9",
    "sec": "DA.3",
    "kind": "definition",
    "tier": "core",
    "title": "Null hypothesis, p-value and errors",
    "oneLine": "A hypothesis test asks: if the starting claim were true, would results like these be unusual? A small p-value says “unusual under that claim”; it does not tell us the chance that the claim itself is true.",
    "statement": "A test chooses a rejection region under $H_0$. Type I error rejects a true null, controlled at level $\\alpha$; Type II error fails to reject a false null, with probability $\\beta$ depending on the alternative. Power is $1-\\beta$. A p-value is the probability, computed under $H_0$, of a test statistic at least as extreme as observed according to the specified alternative. Reject when p-value $\\le\\alpha$ by the chosen convention.",
    "intuition": "A hypothesis test asks: if the starting claim were true, would results like these be unusual? A small p-value says “unusual under that claim”; it does not tell us the chance that the claim itself is true.",
    "needs": [],
    "traps": [
      "Failure to reject is not proof of equality. Choose the alternative before seeing results; p-value is not P(H0 | data)."
    ],
    "cards": [
      {
        "q": "Define a p-value, Type I error and power.",
        "a": "p-value is a null-model tail probability for at least the observed extremeness; Type I error rejects a true null; power is the rejection probability at a specified alternative.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Explain test errors as conditional-model probabilities and compute a null tail p-value.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A test specifies a statistic T and a rejection region R before using the sample.",
          "m": "$$\\text{reject }H_0\\text{ when }T\\in R$$",
          "meaning": "This rule defines the test’s outcome."
        },
        {
          "why": "Under a particular null parameter value, rejecting is a Type I error.",
          "m": "$$P_{H_0}(T\\in R)\\le\\alpha$$",
          "meaning": "Controlling this chance under the null is the meaning of significance level α; composite nulls require control at all allowed null parameter values."
        },
        {
          "why": "At a specified alternative, failing to reject is a Type II error.",
          "m": "$$\\beta=P_{H_1}(T\\notin R)$$",
          "meaning": "β generally depends on which alternative value generated the data."
        },
        {
          "why": "Rejection and nonrejection partition the alternative experiment.",
          "m": "$$\\text{power}=P_{H_1}(T\\in R)=1-\\beta$$",
          "meaning": "This derives the complement relationship between power and Type II error."
        },
        {
          "why": "For an upper-tail statistic observed at t_obs, define the p-value as the null-model exceedance chance.",
          "m": "$$p\\text{-value}=P_{H_0}(T\\ge t_{\\mathrm{obs}})$$",
          "meaning": "For an exact continuous pivot this tail is computed from its null CDF, not from a probability assigned to H_0 itself."
        },
        {
          "why": "For a symmetric normal two-sided statistic z_obs, both equally extreme tails count.",
          "m": "$$p\\text{-value}=2[1-\\Phi(|z_{\\mathrm{obs}}|)]$$",
          "meaning": "Symmetry gives equal tail areas at ±|z_obs|; one-sided alternatives instead use their specified single tail."
        },
        {
          "why": "Compare the chosen p-value to the prespecified significance level.",
          "m": "$$p\\text{-value}\\le\\alpha\\ \\Longrightarrow\\ \\text{reject }H_0$$",
          "meaning": "Failure to reject says only that this decision rule did not find sufficient evidence; it does not prove the null true."
        }
      ],
      "ends": "p-values are probabilities of extreme data under a specified null model; power and errors are probabilities of the test’s decision under the corresponding model."
    }
  },
  {
    "id": "c.prob.DA.10",
    "sec": "DA.3",
    "kind": "definition",
    "tier": "core",
    "title": "z-test and t-test for a mean",
    "oneLine": "Subtract the value claimed by the null, then count how many standard errors away the sample result lies. Compare that distance with a z or t curve, using the tail named by the question.",
    "statement": "For $H_0:\\mu=\\mu_0$, known-sigma normal-sample statistic is $Z=(\\bar X-\\mu_0)/(\\sigma/\\sqrt n)$. With unknown sigma in an iid normal sample, $T=(\\bar X-\\mu_0)/(S/\\sqrt n)\\sim t_{n-1}$ under $H_0$. Two-sided tests reject for $|Z|>z_{1-\\alpha/2}$ or $|T|>t_{n-1,1-\\alpha/2}$; upper/lower alternatives use the corresponding single tail. The two-sided mean interval excludes $\\mu_0$ exactly when the matching test rejects, aside from boundary conventions.",
    "intuition": "Subtract the value claimed by the null, then count how many standard errors away the sample result lies. Compare that distance with a z or t curve, using the tail named by the question.",
    "needs": [],
    "traps": [
      "Use the hypothesized null mean in the numerator and select tails from H1, not from the observed sign."
    ],
    "cards": [
      {
        "q": "Give the one-sample t statistic and its null degrees of freedom.",
        "a": "$T=(\\bar X-\\mu_0)/(S/\\sqrt n)$, with $n-1$ degrees of freedom for iid normal data.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Standardize the mean under the null and connect the two-sided cutoff to interval exclusion.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Under H_0:μ=μ_0 with known σ>0 and normal iid data, the sample-mean law has center μ_0 and spread σ/sqrt(n).",
          "m": "$$Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)$$",
          "meaning": "Subtract the hypothesized mean and divide by sampling standard deviation."
        },
        {
          "why": "With unknown variance under the same normal model, use the exact independent chi-squared sample scale.",
          "m": "$$T=\\frac{\\bar X-\\mu_0}{S/\\sqrt n}\\sim t_{n-1}$$",
          "meaning": "The t ratio was derived from normal mean/variance independence; unknown σ alone is not enough for exactness with arbitrary data."
        },
        {
          "why": "For a two-sided level-α test, assign α/2 to each symmetric tail.",
          "m": "$$\\text{reject if }|Z|>z_{1-\\alpha/2}\\quad\\text{or }|T|>t_{n-1,1-\\alpha/2}$$",
          "meaning": "The respective null probability beyond these two cutoffs is α."
        },
        {
          "why": "For an upper alternative, all α goes in the upper tail; a lower alternative uses the lower tail.",
          "m": "$$Z>z_{1-\\alpha}\\quad\\text{or}\\quad Z<z_\\alpha$$",
          "meaning": "Select the alternative before observing the sign; the t case uses the corresponding t quantiles."
        },
        {
          "why": "The two-sided nonrejection inequality can be multiplied by its positive standard error.",
          "m": "$$|\\bar X-\\mu_0|\\le c\\,\\mathrm{SE}$$",
          "meaning": "Here c is the matching z or t cutoff and SE its corresponding known or estimated standard error."
        },
        {
          "why": "Resolve the absolute-value inequality into an interval for the hypothesized mean.",
          "m": "$$\\bar X-c\\mathrm{SE}\\le\\mu_0\\le\\bar X+c\\mathrm{SE}$$",
          "meaning": "Thus the matching confidence interval contains the null exactly when the two-sided test does not reject, aside from boundary conventions."
        }
      ],
      "ends": "The mean test is a null-centered z or t pivot with prespecified tails; interval equivalence follows by rearranging its cutoff inequality."
    }
  },
  {
    "id": "c.prob.DA.11",
    "sec": "DA.3",
    "kind": "definition",
    "tier": "core",
    "title": "Chi-squared tests: variance, goodness of fit and independence",
    "oneLine": "First ask what counts the null claim predicts. The chi-squared score adds up how far the actual counts miss those predictions; a large total is evidence against the claim.",
    "statement": "For a normal-sample variance null $\\sigma^2=\\sigma_0^2$, use $(n-1)S^2/\\sigma_0^2\\sim\\chi^2_{n-1}$ and the specified tail(s). Goodness of fit uses $\\sum_i(O_i-E_i)^2/E_i$, asymptotically $\\chi^2_{k-1-r}$ when k categories have positive expected counts and r parameters are estimated under regular conditions. For an $a\\times b$ independence table, $E_{ij}=O_{i+}O_{+j}/n$ and degrees of freedom $(a-1)(b-1)$. Count tests reject in the upper tail; sparse cells may invalidate the approximation.",
    "intuition": "First ask what counts the null claim predicts. The chi-squared score adds up how far the actual counts miss those predictions; a large total is evidence against the claim.",
    "needs": [],
    "traps": [
      "Do not confuse the exact variance pivot with approximate categorical tests. Subtract fitted parameters from goodness-of-fit degrees of freedom."
    ],
    "cards": [
      {
        "q": "State the independence-table expected count and degrees of freedom.",
        "a": "$E_{ij}=O_{i+}O_{+j}/n$, $\\nu=(a-1)(b-1)$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Derive expected categorical counts and their free-coordinate counts; distinguish exact and asymptotic references.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a normal-sample variance null σ²=σ_0², insert the null variance into the exact pivot.",
          "m": "$$(n-1)S^2/\\sigma_0^2\\sim\\chi^2_{n-1}\\quad\\text{under }H_0$$",
          "meaning": "This law was proved from independent normal residual coordinates; choose the tail(s) specified by the variance alternative."
        },
        {
          "why": "For k categorical values with known null probabilities p_i, each observed count O_i has mean np_i.",
          "m": "$$E_i=np_i$$",
          "meaning": "A count is a sum of n flags, each averaging to p_i; expected count is the denominator used in the Pearson score."
        },
        {
          "why": "Scale squared count discrepancies by expected count and add.",
          "m": "$$Q=\\sum_{i=1}^k\\frac{(O_i-E_i)^2}{E_i}$$",
          "meaning": "This defines Pearson’s statistic; assume positive expected counts. Large values measure departures from the null, so categorical rejection uses the upper tail."
        },
        {
          "why": "The counts sum to n, leaving only k−1 freely variable discrepancies.",
          "m": "$$\\sum_i(O_i-E_i)=0$$",
          "meaning": "The multinomial CLT and a quadratic-form limit theorem give an asymptotic chi-squared reference with k−1 degrees of freedom; estimating r regular model parameters removes r additional directions, giving k−1−r. Those limit theorems are explicit advanced prerequisites."
        },
        {
          "why": "For an a-by-b independence table, null cell probability factors into row chance times column chance.",
          "m": "$$p_{ij}=p_{i+}p_{+j}$$",
          "meaning": "This is the independence model for the two classifications."
        },
        {
          "why": "Estimate row and column chances by their observed marginal fractions, then multiply by n.",
          "m": "$$E_{ij}=n\\frac{O_{i+}}n\\frac{O_{+j}}n=\\frac{O_{i+}O_{+j}}n$$",
          "meaning": "This derives the fitted expected count rather than assuming all cells should be equal."
        },
        {
          "why": "An unrestricted table has ab−1 free probabilities; an independent model estimates (a−1)+(b−1) parameters.",
          "m": "$$\\nu=(ab-1)-(a-1)-(b-1)=(a-1)(b-1)$$",
          "meaning": "This count gives the asymptotic reference degrees of freedom under regular conditions, not a proof of exact finite-sample chi-squared behavior."
        },
        {
          "why": "Sparse expected counts can undermine the categorical limit approximation.",
          "m": "$$Q\\approx\\chi^2_\\nu\\quad\\text{under a suitable large-sample null model}$$",
          "meaning": "The categorical law is approximate, whereas the normal variance pivot in the first step is exact."
        }
      ],
      "ends": "Expected counts come from null probabilities; degree counts explain the reference dimension, while the asymptotic law still requires its limit theorem."
    }
  },
  {
    "id": "c.prob.DA.12",
    "sec": "DA.3",
    "kind": "definition",
    "tier": "core",
    "title": "Two samples and paired measurements",
    "oneLine": "For matched people or before-and-after measurements, compare each pair directly. For two separate groups, compare their averages; combine their spread estimates only if equal population spreads are a reasonable assumption.",
    "statement": "For independent normal samples with a common unknown variance, $S_p^2=[(n_1-1)S_1^2+(n_2-1)S_2^2]/(n_1+n_2-2)$ and $T=(\\bar X_1-\\bar X_2-\\delta_0)/[S_p\\sqrt{1/n_1+1/n_2}]$ has $n_1+n_2-2$ degrees of freedom under the difference null. Without equal variances, use Welch standard error $\\sqrt{S_1^2/n_1+S_2^2/n_2}$ and approximate Welch degrees of freedom. For paired measurements, form each difference $D_i$ and perform a one-sample test on iid normal differences.",
    "intuition": "For matched people or before-and-after measurements, compare each pair directly. For two separate groups, compare their averages; combine their spread estimates only if equal population spreads are a reasonable assumption.",
    "needs": [],
    "traps": [
      "Do not treat paired before/after observations as independent samples or pool variances without justification."
    ],
    "cards": [
      {
        "q": "How should paired data be reduced for a mean-difference test?",
        "a": "Form $D_i=X_i-Y_i$, then use $T=(\\bar D-\\delta_0)/(S_D/\\sqrt n)$ with $n-1$ degrees of freedom for iid normal differences.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Derive the difference’s standard error, the pooled variance law, and the paired-data reduction.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For independent samples, the mean difference D has center δ=μ_1−μ_2.",
          "m": "$$D=\\bar X_1-\\bar X_2,\\quad E[D]=\\delta$$",
          "meaning": "Linearity subtracts the group means."
        },
        {
          "why": "Independence of groups removes their covariance, and a minus sign is squared in variance.",
          "m": "$$\\operatorname{Var}(D)=\\sigma_1^2/n_1+\\sigma_2^2/n_2$$",
          "meaning": "Add independent sample-mean variances, each derived earlier."
        },
        {
          "why": "If the normal groups share variance σ², factor that common scale.",
          "m": "$$\\operatorname{Var}(D)=\\sigma^2(1/n_1+1/n_2)$$",
          "meaning": "This is the equal-variance assumption needed by a pooled test."
        },
        {
          "why": "Their scaled sample variances are independent chi-squared variables; add their residual sums.",
          "m": "$$\\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{\\sigma^2}\\sim\\chi^2_{\\nu},\\quad\\nu=n_1+n_2-2$$",
          "meaning": "Independent groups have independent residual coordinates, so the chi-squared degrees of freedom add."
        },
        {
          "why": "Divide the combined residual sum by its degrees of freedom to define the pooled estimate.",
          "m": "$$S_p^2=\\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}$$",
          "meaning": "Weighting by group residual degrees of freedom makes this an unbiased estimate of the common variance."
        },
        {
          "why": "The normal difference pivot is independent of the pooled residual scale, so its scaled ratio is t.",
          "m": "$$T=\\frac{D-\\delta_0}{S_p\\sqrt{1/n_1+1/n_2}}\\sim t_\\nu\\quad\\text{under }H_0:\\delta=\\delta_0$$",
          "meaning": "The normal-sample independence proof applies within each group and group independence joins the pieces."
        },
        {
          "why": "For unequal variances, estimate the independent difference variance directly instead of pooling.",
          "m": "$$\\mathrm{SE}_{W}=\\sqrt{S_1^2/n_1+S_2^2/n_2}$$",
          "meaning": "Welch’s approximate degrees of freedom are (S_1²/n_1+S_2²/n_2)²/[(S_1²/n_1)²/(n_1−1)+(S_2²/n_2)²/(n_2−1)], obtained by matching the variance of the estimated scale to a scaled chi-squared variable; the resulting t reference is approximate."
        },
        {
          "why": "For paired measurements, form each within-pair difference before averaging.",
          "m": "$$D_i=X_i-Y_i,\\quad T=\\frac{\\bar D-\\delta_0}{S_D/\\sqrt n}\\sim t_{n-1}$$",
          "meaning": "This exact law needs iid normal differences; it retains within-pair covariance rather than falsely assuming the two measurements independent."
        }
      ],
      "ends": "Independent groups need a difference-variance calculation; pooling additionally needs equal normal variances, while paired data require a one-sample analysis of differences."
    }
  },
  {
    "id": "c.prob.DA.13",
    "sec": "DA.2",
    "kind": "definition",
    "tier": "core",
    "title": "Confidence interval for a difference of means",
    "oneLine": "To compare two groups, start with the observed difference in their averages and add a margin for sampling wobble. Matched pairs are handled by first finding each pair’s difference; separate groups need an extra equal-spread assumption for the pooled formula.",
    "statement": "For two independent normal samples with equal unknown variances, a $(1-\\alpha)$ interval for $\\mu_1-\\mu_2$ is $(\\bar X_1-\\bar X_2)\\pm t_{n_1+n_2-2,1-\\alpha/2}S_p\\sqrt{1/n_1+1/n_2}$. For paired data, apply the one-sample t interval to the within-pair differences. Without equal variances, use a Welch interval with approximate degrees of freedom.",
    "intuition": "To compare two groups, start with the observed difference in their averages and add a margin for sampling wobble. Matched pairs are handled by first finding each pair’s difference; separate groups need an extra equal-spread assumption for the pooled formula.",
    "needs": [],
    "traps": [
      "The pooled interval assumes independent normal samples and equal population variances; pairing calls for differences instead."
    ],
    "cards": [
      {
        "q": "State the pooled two-sample t interval for a difference of means.",
        "a": "$(\\bar X_1-\\bar X_2)\\pm t_{n_1+n_2-2,1-\\alpha/2}S_p\\sqrt{1/n_1+1/n_2}$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Invert the appropriate two-sample or paired t pivot for the population mean difference.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For independent normal groups with equal positive variance, let δ=μ_1−μ_2 and D=bar(X_1)−bar(X_2).",
          "m": "$$T=\\frac{D-\\delta}{S_p\\sqrt{1/n_1+1/n_2}}\\sim t_{\\nu},\\quad\\nu=n_1+n_2-2$$",
          "meaning": "The preceding proof derives both the pooled scale and this pivot."
        },
        {
          "why": "Set SE=S_p sqrt(1/n_1+1/n_2) and c=t_(ν,1−α/2).",
          "m": "$$P(-c\\le T\\le c)=1-\\alpha$$",
          "meaning": "Symmetric t tails each contain α/2 probability."
        },
        {
          "why": "Multiply the inequalities by the positive standard error.",
          "m": "$$-c\\mathrm{SE}\\le D-\\delta\\le c\\mathrm{SE}$$",
          "meaning": "This event transformation preserves probability."
        },
        {
          "why": "Solve each side for δ.",
          "m": "$$D-c\\mathrm{SE}\\le\\delta\\le D+c\\mathrm{SE}$$",
          "meaning": "The confidence interval is centered at the observed mean difference."
        },
        {
          "why": "Insert the scale definition to display both endpoints.",
          "m": "$$(\\bar X_1-\\bar X_2)\\pm t_{\\nu,1-\\alpha/2}S_p\\sqrt{1/n_1+1/n_2}$$",
          "meaning": "This exact coverage belongs to the independent equal-variance normal model."
        },
        {
          "why": "For paired data apply the same one-sample t inversion to D_i=X_i−Y_i.",
          "m": "$$\\bar D\\pm t_{n-1,1-\\alpha/2}S_D/\\sqrt n$$",
          "meaning": "For unequal independent-group variances use Welch’s estimated scale and approximate degrees of freedom instead; exact pooled coverage cannot then be claimed."
        }
      ],
      "ends": "Difference intervals follow by inverting the matching pivot, with the sampling design determining the correct standard error and degrees of freedom."
    }
  },
  {
    "id": "c.prob.DA.14",
    "sec": "DA.3",
    "kind": "definition",
    "tier": "core",
    "title": "Large-sample z-tests for proportions",
    "oneLine": "When the data are success/failure counts, compare the observed fraction with the fraction claimed by the null. For two groups, pool their successes only to estimate the shared fraction assumed by the null; the resulting z score is a large-sample approximation.",
    "statement": "For iid Bernoulli trials, under $H_0:p=p_0$, the one-proportion statistic is $Z=(\\hat p-p_0)/\\sqrt{p_0(1-p_0)/n}$, approximately standard normal when null expected success and failure counts are sufficiently large. For two independent samples under $H_0:p_1=p_2$, use the pooled estimate $\\hat p=(X_1+X_2)/(n_1+n_2)$ in the standard error $\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}$.",
    "intuition": "When the data are success/failure counts, compare the observed fraction with the fraction claimed by the null. For two groups, pool their successes only to estimate the shared fraction assumed by the null; the resulting z score is a large-sample approximation.",
    "needs": [],
    "traps": [
      "These are large-sample tests, not exact small-sample procedures.",
      "For a two-sample test, use the pooled fraction in the null standard error; separate sample fractions belong in an unpooled confidence interval."
    ],
    "cards": [
      {
        "q": "State the null standard error for a two-proportion z-test.",
        "a": "$\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}$, where $\\hat p=(X_1+X_2)/(n_1+n_2)$ under $H_0:p_1=p_2$.",
        "kind": "state"
      }
    ],
    "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/",
    "proof": {
      "idea": "Use null-model Bernoulli variance and derive the pooled proportion for a shared-proportion null.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For n independent Bernoulli trials under H_0:p=p_0 with 0<p_0<1, hat(p)=X/n.",
          "m": "$$E[\\hat p]=p_0,\\quad\\operatorname{Var}(\\hat p)=p_0(1-p_0)/n$$",
          "meaning": "Insert the null probability into the previously derived binomial mean and variance."
        },
        {
          "why": "Center at the null and divide by the null standard deviation.",
          "m": "$$Z=\\frac{\\hat p-p_0}{\\sqrt{p_0(1-p_0)/n}}\\approx N(0,1)$$",
          "meaning": "The binomial CLT justifies a large-sample approximation when null expected successes and failures are sufficiently numerous."
        },
        {
          "why": "For two independent groups under H_0:p_1=p_2=p, their proportion difference has mean zero.",
          "m": "$$E[\\hat p_1-\\hat p_2]=0$$",
          "meaning": "The shared null proportion cancels."
        },
        {
          "why": "Add independent group proportion variances.",
          "m": "$$\\operatorname{Var}(\\hat p_1-\\hat p_2)=p(1-p)(1/n_1+1/n_2)$$",
          "meaning": "Subtracting the second group does not change its variance contribution because the coefficient is squared."
        },
        {
          "why": "Under a shared probability, combine all successes and all trials to estimate p.",
          "m": "$$\\hat p=\\frac{X_1+X_2}{n_1+n_2}$$",
          "meaning": "This is the pooled Bernoulli sample average; it also maximizes the common-proportion likelihood, whose log derivative is total successes/p minus total failures/(1−p)."
        },
        {
          "why": "Substitute this estimate into the null difference variance.",
          "m": "$$Z=\\frac{\\hat p_1-\\hat p_2}{\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}}\\approx N(0,1)$$",
          "meaning": "Consistency of the pooled estimate and the CLT justify this plug-in approximation; the scale must be nonzero."
        },
        {
          "why": "Use the alternative’s specified normal tail cutoff.",
          "m": "$$|Z|>z_{1-\\alpha/2}\\quad\\text{for a two-sided test}$$",
          "meaning": "Without the shared-proportion null, an unpooled confidence interval instead estimates p_1(1−p_1)/n_1+p_2(1−p_2)/n_2 separately."
        }
      ],
      "ends": "Proportion tests use null-model sampling spread, with pooling only under the equal-proportion null; these are large-sample rather than exact small-sample laws."
    }
  }
]
);
