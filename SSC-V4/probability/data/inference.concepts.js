CONCEPTS.push(
{
  "id": "c.prob.DA.1",
  "sec": "DA.1",
  "kind": "definition",
  "tier": "core",
  "title": "Mean, median, mode and standard deviation",
  "oneLine": "Mean balances the data; median splits ordered mass; mode identifies the most concentrated value. Standard deviation measures spread in the original units.",
  "statement": "For observations $x_1,\\ldots,x_n$, $\\bar x=n^{-1}\\sum_i x_i$. Sort the data to find the median (the central value, or average of the two central values). Modes are values with greatest frequency; there may be several. A population median $m$ satisfies $P(X\\le m)\\ge1/2$ and $P(X\\ge m)\\ge1/2$. Population standard deviation is $\\sqrt{\\operatorname{Var}(X)}$. Sample variance is $s^2=\\sum_i(x_i-\\bar x)^2/(n-1)$ for $n>1$. A continuous density mode maximizes the density when such a maximum exists.",
  "intuition": "Mean balances the data; median splits ordered mass; mode identifies the most concentrated value. Standard deviation measures spread in the original units.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.2",
  "sec": "DA.1",
  "kind": "theorem",
  "tier": "core",
  "title": "Sampling distribution and standard error",
  "oneLine": "An estimator varies across repeated samples. Its standard error concerns uncertainty in the estimator, whereas standard deviation concerns variability of individual observations.",
  "statement": "For iid observations with finite mean $\\mu$ and variance $\\sigma^2$, $E[\\bar X]=\\mu$ and $\\operatorname{Var}(\\bar X)=\\sigma^2/n$. Standard error is $\\sigma/\\sqrt n$, estimated by $s/\\sqrt n$. If observations are normal, $\\bar X$ is exactly normal; otherwise the CLT supplies a large-sample approximation under its hypotheses.",
  "intuition": "An estimator varies across repeated samples. Its standard error concerns uncertainty in the estimator, whereas standard deviation concerns variability of individual observations.",
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
    "idea": "Use linearity and variance of an independent sum.",
    "why": "Averaging rescales the sum by 1/n.",
    "rungs": [
      {
        "why": "Apply linearity.",
        "m": "$E[\\bar X]=\\frac1n\\sum_i\\mu=\\mu$",
        "meaning": "Each observation contributes the same mean."
      },
      {
        "why": "Use independence to remove covariance terms.",
        "m": "$\\operatorname{Var}(\\bar X)=\\frac1{n^2}\\sum_i\\sigma^2=\\sigma^2/n$",
        "meaning": "Correlated data need the covariance terms instead."
      }
    ],
    "ends": "This explains the square-root sample-size law."
  }
},
{
  "id": "c.prob.DA.3",
  "sec": "DA.1",
  "kind": "definition",
  "tier": "core",
  "title": "Chi-squared distribution",
  "oneLine": "Squared standardized fluctuations add into a positive measure of total deviation.",
  "statement": "If $Z_1,\\ldots,Z_\\nu$ are independent standard normal variables, $V=\\sum_i Z_i^2\\sim\\chi^2_\\nu$, where $\\nu$ is a positive integer. Its density is $v^{\\nu/2-1}e^{-v/2}/[2^{\\nu/2}\\Gamma(\\nu/2)]$ for $v>0$; it is Gamma(shape $\\nu/2$, rate $1/2$). $E[V]=\\nu$ and $\\operatorname{Var}(V)=2\\nu$. Independent chi-squared variables add their degrees of freedom.",
  "intuition": "Squared standardized fluctuations add into a positive measure of total deviation.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.4",
  "sec": "DA.1",
  "kind": "definition",
  "tier": "core",
  "title": "Student t distribution",
  "oneLine": "Estimating the denominator adds uncertainty; heavy tails account for it. As degrees of freedom grow, t approaches standard normal.",
  "statement": "If $Z\\sim N(0,1)$ and $V\\sim\\chi^2_\\nu$ are independent, then $T=Z/\\sqrt{V/\\nu}\\sim t_\\nu$. Its density is $\\Gamma((\\nu+1)/2)[1+t^2/\\nu]^{-(\\nu+1)/2}/[\\sqrt{\\nu\\pi}\\Gamma(\\nu/2)]$. It is symmetric with heavier tails than normal; mean is zero for $\\nu>1$, variance $\\nu/(\\nu-2)$ for $\\nu>2$. For a normal iid sample, $(\\bar X-\\mu)/(S/\\sqrt n)\\sim t_{n-1}$.",
  "intuition": "Estimating the denominator adds uncertainty; heavy tails account for it. As degrees of freedom grow, t approaches standard normal.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.5",
  "sec": "DA.2",
  "kind": "theorem",
  "tier": "core",
  "title": "Confidence interval meaning and known-variance mean interval",
  "oneLine": "The procedure captures the fixed parameter in a stated fraction of repeated samples. Once observed, the endpoints are fixed.",
  "statement": "A $(1-\\alpha)$ confidence procedure $[L(X),U(X)]$ satisfies $P_\\theta(L(X)\\le\\theta\\le U(X))=1-\\alpha$ under its model (or approximately for an asymptotic procedure). For iid normal data with known $\\sigma$, the two-sided mean interval is $\\bar X\\pm z_{1-\\alpha/2}\\sigma/\\sqrt n$, where $P(Z\\le z_q)=q$. For nonnormal iid data it is a CLT approximation, not an exact finite-sample assertion.",
  "intuition": "The procedure captures the fixed parameter in a stated fraction of repeated samples. Once observed, the endpoints are fixed.",
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
    "idea": "Invert a standardized probability statement.",
    "why": "Solve both inequalities for the unknown mean.",
    "rungs": [
      {
        "why": "Standardize the mean.",
        "m": "$P(-z_{1-\\alpha/2}\\le(\\bar X-\\mu)/(\\sigma/\\sqrt n)\\le z_{1-\\alpha/2})=1-\\alpha$",
        "meaning": "The normal pivot has a parameter-free distribution."
      },
      {
        "why": "Rearrange the inequalities.",
        "m": "$P(\\bar X-z_{1-\\alpha/2}\\sigma/\\sqrt n\\le\\mu\\le\\bar X+z_{1-\\alpha/2}\\sigma/\\sqrt n)=1-\\alpha$",
        "meaning": "The random endpoints give repeated-sample coverage."
      }
    ],
    "ends": "The confidence level belongs to the procedure."
  }
},
{
  "id": "c.prob.DA.6",
  "sec": "DA.2",
  "kind": "definition",
  "tier": "core",
  "title": "Unknown-variance mean interval",
  "oneLine": "Replace the known population spread with an estimate and widen the critical value to account for that estimation.",
  "statement": "For an iid normal sample of size $n>1$ with unknown variance, an exact two-sided interval for $\\mu$ is $\\bar X\\pm t_{n-1,1-\\alpha/2}S/\\sqrt n$. Here $S^2$ uses denominator $n-1$ and $P(t_\\nu\\le t_{\\nu,q})=q$. This is not an exact small-sample interval for arbitrary distributions.",
  "intuition": "Replace the known population spread with an estimate and widen the critical value to account for that estimation.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.7",
  "sec": "DA.2",
  "kind": "definition",
  "tier": "core",
  "title": "Variance confidence interval",
  "oneLine": "The unknown variance occurs in the denominator of a positive pivot, so solving reverses the reciprocal order of the critical values.",
  "statement": "For iid normal observations, $V=(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$. With lower-tail quantiles $\\chi^2_{\\nu,q}$, a two-sided interval for variance is $[(n-1)S^2/\\chi^2_{n-1,1-\\alpha/2},\\;(n-1)S^2/\\chi^2_{n-1,\\alpha/2}]$. Square-root its endpoints for a standard-deviation interval.",
  "intuition": "The unknown variance occurs in the denominator of a positive pivot, so solving reverses the reciprocal order of the critical values.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.8",
  "sec": "DA.2",
  "kind": "definition",
  "tier": "core",
  "title": "Proportion intervals and precision",
  "oneLine": "Intervals shrink at the square-root rate, so doubling precision takes about four times as much data.",
  "statement": "For iid Bernoulli trials, $\\hat p=X/n$ with $X\\sim\\operatorname{Bin}(n,p)$. A large-sample Wald interval is $\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\hat p(1-\\hat p)/n}$, requiring both success and failure counts sufficiently large; it is unreliable near 0 or 1 and for small n. Planning for half-width $\\epsilon$ uses $n\\ge z_{1-\\alpha/2}^2p(1-p)/\\epsilon^2$, rounded up; without a prior p, use $p(1-p)\\le1/4$.",
  "intuition": "Intervals shrink at the square-root rate, so doubling precision takes about four times as much data.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.9",
  "sec": "DA.3",
  "kind": "definition",
  "tier": "core",
  "title": "Null hypothesis, p-value and errors",
  "oneLine": "A test asks whether the observation is unusually incompatible with the null model; it does not estimate the probability the null is true.",
  "statement": "A test chooses a rejection region under $H_0$. Type I error rejects a true null, controlled at level $\\alpha$; Type II error fails to reject a false null, with probability $\\beta$ depending on the alternative. Power is $1-\\beta$. A p-value is the probability, computed under $H_0$, of a test statistic at least as extreme as observed according to the specified alternative. Reject when p-value $\\le\\alpha$ by the chosen convention.",
  "intuition": "A test asks whether the observation is unusually incompatible with the null model; it does not estimate the probability the null is true.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.10",
  "sec": "DA.3",
  "kind": "definition",
  "tier": "core",
  "title": "z-test and t-test for a mean",
  "oneLine": "A difference is measured in standard errors, then compared with the relevant null sampling distribution.",
  "statement": "For $H_0:\\mu=\\mu_0$, known-sigma normal-sample statistic is $Z=(\\bar X-\\mu_0)/(\\sigma/\\sqrt n)$. With unknown sigma in an iid normal sample, $T=(\\bar X-\\mu_0)/(S/\\sqrt n)\\sim t_{n-1}$ under $H_0$. Two-sided tests reject for $|Z|>z_{1-\\alpha/2}$ or $|T|>t_{n-1,1-\\alpha/2}$; upper/lower alternatives use the corresponding single tail. The two-sided mean interval excludes $\\mu_0$ exactly when the matching test rejects, aside from boundary conventions.",
  "intuition": "A difference is measured in standard errors, then compared with the relevant null sampling distribution.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.11",
  "sec": "DA.3",
  "kind": "definition",
  "tier": "core",
  "title": "Chi-squared tests: variance, goodness of fit and independence",
  "oneLine": "Expected counts come from the null model. Squared relative discrepancies measure how far the observed table departs from it.",
  "statement": "For a normal-sample variance null $\\sigma^2=\\sigma_0^2$, use $(n-1)S^2/\\sigma_0^2\\sim\\chi^2_{n-1}$ and the specified tail(s). Goodness of fit uses $\\sum_i(O_i-E_i)^2/E_i$, asymptotically $\\chi^2_{k-1-r}$ when k categories have positive expected counts and r parameters are estimated under regular conditions. For an $a\\times b$ independence table, $E_{ij}=O_{i+}O_{+j}/n$ and degrees of freedom $(a-1)(b-1)$. Count tests reject in the upper tail; sparse cells may invalidate the approximation.",
  "intuition": "Expected counts come from the null model. Squared relative discrepancies measure how far the observed table departs from it.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
},
{
  "id": "c.prob.DA.12",
  "sec": "DA.3",
  "kind": "definition",
  "tier": "core",
  "title": "Two samples and paired measurements",
  "oneLine": "Pairing and pooling answer different modelling questions. Pairing retains within-pair dependence; pooling assumes equal population variances.",
  "statement": "For independent normal samples with a common unknown variance, $S_p^2=[(n_1-1)S_1^2+(n_2-1)S_2^2]/(n_1+n_2-2)$ and $T=(\\bar X_1-\\bar X_2-\\delta_0)/[S_p\\sqrt{1/n_1+1/n_2}]$ has $n_1+n_2-2$ degrees of freedom under the difference null. Without equal variances, use Welch standard error $\\sqrt{S_1^2/n_1+S_2^2/n_2}$ and approximate Welch degrees of freedom. For paired measurements, form each difference $D_i$ and perform a one-sample test on iid normal differences.",
  "intuition": "Pairing and pooling answer different modelling questions. Pairing retains within-pair dependence; pooling assumes equal population variances.",
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
  "provenance": "Original GATE DA supplement; not a Ross section. NIST Engineering Statistics Handbook, https://www.itl.nist.gov/div898/handbook/eda/section3/"
}
);
