OBJECTIVE.push(
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.1"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.1",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "For the observations 1, 2, 2, 5, 10, find the sample median.",
  "answer": {
    "value": 2,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "The sorted middle observation is 2. Mean is 4; mode is 2. Squared deviations sum to 54, so sample variance is 54/4=13.5.",
  "tested": "Mean, median, mode and standard deviation",
  "trap": "The mean of 4 is not the median.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For observations $x_1,\\ldots,x_n$, $\\bar x=n^{-1}\\sum_i x_i$. Sort the data to find the median (the central value, or average of the two central values). Modes are values with greatest frequency; there may be several. A population median $m$ satisfies $P(X\\le m)\\ge1/2$ and $P(X\\ge m)\\ge1/2$. Population standard deviation is $\\sigma=\\sqrt{\\operatorname{Var}(X)}$. Sample variance is $s^2=\\sum_i(x_i-\\bar x)^2/(n-1)$ and sample standard deviation is $s=\\sqrt{s^2}$ for $n>1$. A continuous density mode maximizes the density when such a maximum exists."
  }
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.2"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.2",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "For iid observations with standard deviation 12 and n=36, find the standard error of the sample mean.",
  "answer": {
    "value": 2,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$12/\\sqrt{36}=2$.",
  "tested": "Sampling distribution and standard error",
  "trap": "Divide by square root of n, not n.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For iid observations with finite mean $\\mu$ and variance $\\sigma^2$, $E[\\bar X]=\\mu$ and $\\operatorname{Var}(\\bar X)=\\sigma^2/n$. Standard error is $\\sigma/\\sqrt n$, estimated by $s/\\sqrt n$. If observations are normal, $\\bar X$ is exactly normal; otherwise the CLT supplies a large-sample approximation under its hypotheses."
  }
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.3"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.3",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Let $V=\\sum_{i=1}^5Z_i^2$ for independent standard normal variables. Find Var(V).",
  "answer": {
    "value": 10,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$V\\sim\\chi^2_5$, so variance is $2\\cdot5=10$.",
  "tested": "Chi-squared distribution",
  "trap": "Mean is 5; variance is 10.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "If $Z_1,\\ldots,Z_\\nu$ are independent standard normal variables, $V=\\sum_i Z_i^2\\sim\\chi^2_\\nu$, where $\\nu$ is a positive integer. Its density is $v^{\\nu/2-1}e^{-v/2}/[2^{\\nu/2}\\Gamma(\\nu/2)]$ for $v>0$; it is Gamma(shape $\\nu/2$, rate $1/2$). $E[V]=\\nu$ and $\\operatorname{Var}(V)=2\\nu$. Independent chi-squared variables add their degrees of freedom."
  }
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.4"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.4",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Find the variance of $T\\sim t_6$.",
  "answer": {
    "value": 1.5,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$6/(6-2)=1.5$.",
  "tested": "Student t distribution",
  "trap": "The variance exists only above 2 degrees of freedom.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "If $Z\\sim N(0,1)$ and $V\\sim\\chi^2_\\nu$ are independent, then $T=Z/\\sqrt{V/\\nu}\\sim t_\\nu$. Its density is $\\Gamma((\\nu+1)/2)[1+t^2/\\nu]^{-(\\nu+1)/2}/[\\sqrt{\\nu\\pi}\\Gamma(\\nu/2)]$. It is symmetric with heavier tails than normal; mean is zero for $\\nu>1$, variance $\\nu/(\\nu-2)$ for $\\nu>2$. For a normal iid sample, $(\\bar X-\\mu)/(S/\\sqrt n)\\sim t_{n-1}$."
  }
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.5"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.5",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "An iid normal sample has n=100, mean 20 and known sigma=5. Use z(0.975)=1.96. Find the upper endpoint of the 95% mean interval.",
  "answer": {
    "value": 20.98,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "Standard error is 0.5. The interval is $20\\pm0.98=[19.02,20.98]$.",
  "tested": "Confidence interval meaning and known-variance mean interval",
  "trap": "Use standard error rather than sigma.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "A $(1-\\alpha)$ confidence procedure $[L(X),U(X)]$ satisfies $P_\\theta(L(X)\\le\\theta\\le U(X))=1-\\alpha$ under its model (or approximately for an asymptotic procedure). For iid normal data with known $\\sigma$, the two-sided mean interval is $\\bar X\\pm z_{1-\\alpha/2}\\sigma/\\sqrt n$, where $P(Z\\le z_q)=q$. For nonnormal iid data it is a CLT approximation, not an exact finite-sample assertion."
  }
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.6"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.6",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "An iid normal sample has n=9, mean 15 and s=3. Use t(8,0.975)=2.306. Find the lower endpoint of the 95% mean interval.",
  "answer": {
    "value": 12.694,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$15-2.306(3/3)=12.694$.",
  "tested": "Unknown-variance mean interval",
  "trap": "There are 8 degrees of freedom, not 9.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For an iid normal sample of size $n>1$ with unknown variance, an exact two-sided interval for $\\mu$ is $\\bar X\\pm t_{n-1,1-\\alpha/2}S/\\sqrt n$. Here $S^2$ uses denominator $n-1$ and $P(t_\\nu\\le t_{\\nu,q})=q$. This is not an exact small-sample interval for arbitrary distributions."
  }
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.7"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.7",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "For a normal sample with n=11 and s²=4, the relevant chi-square lower/upper quantiles are 3.247 and 20.483. Find the lower endpoint of the two-sided variance interval.",
  "answer": {
    "value": 1.9528389396084558,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$10\\cdot4/20.483\\approx1.953$. The upper endpoint is $40/3.247\\approx12.319$.",
  "tested": "Variance confidence interval",
  "trap": "Use the larger quantile in the lower endpoint.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For iid normal observations, $V=(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$. With lower-tail quantiles $\\chi^2_{\\nu,q}$, a two-sided interval for variance is $[(n-1)S^2/\\chi^2_{n-1,1-\\alpha/2},\\;(n-1)S^2/\\chi^2_{n-1,\\alpha/2}]$. Square-root its endpoints for a standard-deviation interval."
  }
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.8"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.8",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Using z=1.96 and the worst-case proportion, what sample size is needed for a planned half-width at most 0.05?",
  "answer": {
    "value": 385,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$n\\ge1.96^2/(4\\cdot0.05^2)=384.16$. Round up to 385.",
  "tested": "Proportion intervals and precision",
  "trap": "Rounding down violates the planned bound.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For iid Bernoulli trials, $\\hat p=X/n$ with $X\\sim\\operatorname{Bin}(n,p)$. A large-sample Wald interval is $\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\hat p(1-\\hat p)/n}$, requiring both success and failure counts sufficiently large; it is unreliable near 0 or 1 and for small n. Planning for half-width $\\epsilon$ uses $n\\ge z_{1-\\alpha/2}^2p(1-p)/\\epsilon^2$, rounded up; without a prior p, use $p(1-p)\\le1/4$."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.9"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.9",
  "type": "MCQ",
  "neg": -0.6666666666666666,
  "negLabel": "−2/3",
  "time": 120,
  "prompt": "A prespecified test returns p=0.03. At significance level 0.05, which conclusion is justified?",
  "options": [
    {
      "k": "A",
      "t": "The null is true with probability 0.03"
    },
    {
      "k": "B",
      "t": "Reject the null at level 0.05"
    },
    {
      "k": "C",
      "t": "Accept the null with certainty"
    },
    {
      "k": "D",
      "t": "The test has power 0.97"
    }
  ],
  "answer": "B",
  "solution": "Reject the null at the chosen significance level. This does not give the probability that the null is false.",
  "tested": "Null hypothesis, p-value and errors",
  "trap": "A p-value is a null-model tail probability.",
  "twist": {
    "q": "State the condition for using this result.",
    "a": "A test chooses a rejection region under $H_0$. Type I error rejects a true null, controlled at level $\\alpha$; Type II error fails to reject a false null, with probability $\\beta$ depending on the alternative. Power is $1-\\beta$. A p-value is the probability, computed under $H_0$, of a test statistic at least as extreme as observed according to the specified alternative. Reject when p-value $\\le\\alpha$ by the chosen convention."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.10"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.10",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "For an iid normal sample, n=25, mean=52, s=5. Under H0: mean=50, find the one-sample t statistic.",
  "answer": {
    "value": 2,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$T=(52-50)/(5/5)=2$, with 24 degrees of freedom. Use the chosen alternative to decide the tail.",
  "tested": "z-test and t-test for a mean",
  "trap": "The statistic alone does not specify a rejection decision.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For $H_0:\\mu=\\mu_0$, known-sigma normal-sample statistic is $Z=(\\bar X-\\mu_0)/(\\sigma/\\sqrt n)$. With unknown sigma in an iid normal sample, $T=(\\bar X-\\mu_0)/(S/\\sqrt n)\\sim t_{n-1}$ under $H_0$. Two-sided tests reject for $|Z|>z_{1-\\alpha/2}$ or $|T|>t_{n-1,1-\\alpha/2}$; upper/lower alternatives use the corresponding single tail. The two-sided mean interval excludes $\\mu_0$ exactly when the matching test rejects, aside from boundary conventions."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.11"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.11",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "A 2×2 count table has rows (30,20) and (10,40). Find the chi-square independence statistic.",
  "answer": {
    "value": 16.666666666666668,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "Row totals are 50 and 50; column totals are 40 and 60. Expected rows are (20,30) and (20,30). Statistic is $100/20+100/30+100/20+100/30=16.6667$, with one degree of freedom.",
  "tested": "Chi-squared tests: variance, goodness of fit and independence",
  "trap": "Expected counts use row and column totals, not equal cells.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For a normal-sample variance null $\\sigma^2=\\sigma_0^2$, use $(n-1)S^2/\\sigma_0^2\\sim\\chi^2_{n-1}$ and the specified tail(s). Goodness of fit uses $\\sum_i(O_i-E_i)^2/E_i$, asymptotically $\\chi^2_{k-1-r}$ when k categories have positive expected counts and r parameters are estimated under regular conditions. For an $a\\times b$ independence table, $E_{ij}=O_{i+}O_{+j}/n$ and degrees of freedom $(a-1)(b-1)$. Count tests reject in the upper tail; sparse cells may invalidate the approximation."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.12"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.12",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Two independent normal samples of sizes 8 and 12 have equal unknown population variance. What degrees of freedom apply to the pooled two-sample t test?",
  "answer": {
    "value": 18,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$8+12-2=18$. With unequal variances, the pooled exact model is invalid; use Welch instead.",
  "tested": "Two samples and paired measurements",
  "trap": "Subtract two because two sample means have been estimated.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For independent normal samples with a common unknown variance, $S_p^2=[(n_1-1)S_1^2+(n_2-1)S_2^2]/(n_1+n_2-2)$ and $T=(\\bar X_1-\\bar X_2-\\delta_0)/[S_p\\sqrt{1/n_1+1/n_2}]$ has $n_1+n_2-2$ degrees of freedom under the difference null. Without equal variances, use Welch standard error $\\sqrt{S_1^2/n_1+S_2^2/n_2}$ and approximate Welch degrees of freedom. For paired measurements, form each difference $D_i$ and perform a one-sample test on iid normal differences."
  }
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.13"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.13",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Two independent normal samples have $n_1=n_2=10$, means 12 and 10, and standard deviations $s_1=s_2=2$. Assume equal population variances and use $t_{18,0.975}=2.101$. Find the lower endpoint of the 95% interval for $\\mu_1-\\mu_2$.",
  "answer": {
    "value": 0.121,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "The pooled standard deviation is 2 and the standard error is $2\\sqrt{1/10+1/10}=0.8944$. The interval is $2\\pm2.101(0.8944)$, so its lower endpoint is about 0.121.",
  "tested": "Confidence interval for a difference of means",
  "trap": "Use the pooled t interval only under independent normal samples with equal unknown variances.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For two independent normal samples with equal unknown variances, a $(1-\\alpha)$ interval for $\\mu_1-\\mu_2$ is $(\\bar X_1-\\bar X_2)\\pm t_{n_1+n_2-2,1-\\alpha/2}S_p\\sqrt{1/n_1+1/n_2}$. For paired data, apply the one-sample t interval to the within-pair differences. Without equal variances, use a Welch interval with approximate degrees of freedom."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.14"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.14",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "In 100 independent trials, 60 are successes. Under $H_0:p=0.5$, find the one-proportion z statistic.",
  "answer": {
    "value": 2,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$\\hat p=0.60$ and the null standard error is $\\sqrt{0.5(0.5)/100}=0.05$. Thus $Z=(0.60-0.50)/0.05=2$.",
  "tested": "Large-sample z-tests for proportions",
  "trap": "Use the null value in the standard error; this is a large-sample approximation.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For iid Bernoulli trials, under $H_0:p=p_0$, the one-proportion statistic is $Z=(\\hat p-p_0)/\\sqrt{p_0(1-p_0)/n}$, approximately standard normal when null expected success and failure counts are sufficiently large. For two independent samples under $H_0:p_1=p_2$, use the pooled estimate $\\hat p=(X_1+X_2)/(n_1+n_2)$ in the standard error $\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}$."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.11"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.15",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "A four-outcome model predicts equal probabilities. Observed counts are 6, 14, 10, and 10. Find Pearson’s chi-square statistic.",
  "answer": {
    "value": 3.2,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "With total 40, each expected count is 10. Thus $X^2=(6-10)^2/10+(14-10)^2/10=3.2$; the two matching counts contribute zero. With no fitted parameters, the reference degrees of freedom are $4-1=3$.",
  "tested": "Chi-squared tests: variance, goodness of fit and independence",
  "trap": "Expected counts come from the null model; use the observed total to obtain them.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For a normal-sample variance null $\\sigma^2=\\sigma_0^2$, use $(n-1)S^2/\\sigma_0^2\\sim\\chi^2_{n-1}$ and the specified tail(s). Goodness of fit uses $\\sum_i(O_i-E_i)^2/E_i$, asymptotically $\\chi^2_{k-1-r}$ when k categories have positive expected counts and r parameters are estimated under regular conditions. For an $a\\times b$ independence table, $E_{ij}=O_{i+}O_{+j}/n$ and degrees of freedom $(a-1)(b-1)$. Count tests reject in the upper tail; sparse cells may invalidate the approximation."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.11"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.16",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "A normal sample has size 10 and sample variance 4. Under $H_0:\\sigma^2=2$, find the chi-square test statistic.",
  "answer": {
    "value": 18,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "$X^2=(n-1)S^2/\\sigma_0^2=9(4)/2=18$, with 9 degrees of freedom under the null.",
  "tested": "Chi-squared tests: variance, goodness of fit and independence",
  "trap": "The exact variance pivot requires a normal population.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For a normal-sample variance null $\\sigma^2=\\sigma_0^2$, use $(n-1)S^2/\\sigma_0^2\\sim\\chi^2_{n-1}$ and the specified tail(s). Goodness of fit uses $\\sum_i(O_i-E_i)^2/E_i$, asymptotically $\\chi^2_{k-1-r}$ when k categories have positive expected counts and r parameters are estimated under regular conditions. For an $a\\times b$ independence table, $E_{ij}=O_{i+}O_{+j}/n$ and degrees of freedom $(a-1)(b-1)$. Count tests reject in the upper tail; sparse cells may invalidate the approximation."
  }
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.1"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.17",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "For the data 1, 2, 3, 4, 5, find the sample standard deviation using denominator $n-1$.",
  "answer": {
    "value": 1.581,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "The mean is 3 and the squared deviations sum to 10. Thus $s^2=10/4=2.5$ and $s=\\sqrt{2.5}\\approx1.581$.",
  "tested": "Mean, median, mode and standard deviation",
  "trap": "Use denominator n−1 for the sample variance here, then take its square root.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For observations $x_1,\\ldots,x_n$, $\\bar x=n^{-1}\\sum_i x_i$. Sort the data to find the median (the central value, or average of the two central values). Modes are values with greatest frequency; there may be several. A population median $m$ satisfies $P(X\\le m)\\ge1/2$ and $P(X\\ge m)\\ge1/2$. Population standard deviation is $\\sigma=\\sqrt{\\operatorname{Var}(X)}$. Sample variance is $s^2=\\sum_i(x_i-\\bar x)^2/(n-1)$ and sample standard deviation is $s=\\sqrt{s^2}$ for $n>1$. A continuous density mode maximizes the density when such a maximum exists."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.10"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.18",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "An iid normal sample has size 36, mean 52, and known population standard deviation 6. Under $H_0:\\mu=50$, find the one-sample z statistic.",
  "answer": {
    "value": 2,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "The standard error is $6/\\sqrt{36}=1$. Therefore $Z=(52-50)/1=2$ under the null.",
  "tested": "z-test and t-test for a mean",
  "trap": "Use z when the population standard deviation is known; the given normal model makes the sampling law exact.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For $H_0:\\mu=\\mu_0$, known-sigma normal-sample statistic is $Z=(\\bar X-\\mu_0)/(\\sigma/\\sqrt n)$. With unknown sigma in an iid normal sample, $T=(\\bar X-\\mu_0)/(S/\\sqrt n)\\sim t_{n-1}$ under $H_0$. Two-sided tests reject for $|Z|>z_{1-\\alpha/2}$ or $|T|>t_{n-1,1-\\alpha/2}$; upper/lower alternatives use the corresponding single tail. The two-sided mean interval excludes $\\mu_0$ exactly when the matching test rejects, aside from boundary conventions."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.12"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.19",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Two independent normal samples have $n_1=n_2=10$, means 12 and 9, and standard deviations 2 in each group. Assume equal population variances and test $H_0:\\mu_1-\\mu_2=0$. Find the pooled t statistic.",
  "answer": {
    "value": 3.354,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "The pooled standard deviation is 2. The standard error is $2\\sqrt{1/10+1/10}=0.8944$, so $T=3/0.8944\\approx3.354$ with 18 degrees of freedom.",
  "tested": "Two samples and paired measurements",
  "trap": "Pooling requires independent normal samples with equal population variances.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For independent normal samples with a common unknown variance, $S_p^2=[(n_1-1)S_1^2+(n_2-1)S_2^2]/(n_1+n_2-2)$ and $T=(\\bar X_1-\\bar X_2-\\delta_0)/[S_p\\sqrt{1/n_1+1/n_2}]$ has $n_1+n_2-2$ degrees of freedom under the difference null. Without equal variances, use Welch standard error $\\sqrt{S_1^2/n_1+S_2^2/n_2}$ and approximate Welch degrees of freedom. For paired measurements, form each difference $D_i$ and perform a one-sample test on iid normal differences."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.12"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.20",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Four matched before-and-after differences are 2, 4, 3, and 5. Under a normal-differences model and $H_0:\\mu_D=0$, find the paired t statistic.",
  "answer": {
    "value": 5.422,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "The differences have mean 3.5 and sample variance $5/3$, so $s_D=\\sqrt{5/3}$. Thus $T=3.5/(\\sqrt{5/3}/\\sqrt4)\\approx5.422$ with 3 degrees of freedom.",
  "tested": "Two samples and paired measurements",
  "trap": "Analyze the four within-pair differences; do not treat the two measurements in each pair as independent.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For independent normal samples with a common unknown variance, $S_p^2=[(n_1-1)S_1^2+(n_2-1)S_2^2]/(n_1+n_2-2)$ and $T=(\\bar X_1-\\bar X_2-\\delta_0)/[S_p\\sqrt{1/n_1+1/n_2}]$ has $n_1+n_2-2$ degrees of freedom under the difference null. Without equal variances, use Welch standard error $\\sqrt{S_1^2/n_1+S_2^2/n_2}$ and approximate Welch degrees of freedom. For paired measurements, form each difference $D_i$ and perform a one-sample test on iid normal differences."
  }
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.14"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "o.prob.DA.21",
  "type": "NAT",
  "neg": 0,
  "negLabel": "0",
  "time": 120,
  "prompt": "Two independent samples have 60 successes in 100 trials and 40 successes in 100 trials. Under $H_0:p_1=p_2$, find the pooled two-proportion z statistic.",
  "answer": {
    "value": 2.828,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "The pooled estimate is $100/200=0.5$. The null standard error is $\\sqrt{0.5(0.5)(1/100+1/100)}=0.07071$. Therefore $Z=(0.60-0.40)/0.07071\\approx2.828$.",
  "tested": "Large-sample z-tests for proportions",
  "trap": "Pool successes to estimate the shared null proportion; this is a large-sample z approximation.",
  "twist": {
    "q": "Which assumption makes this calculation valid?",
    "a": "For iid Bernoulli trials, under $H_0:p=p_0$, the one-proportion statistic is $Z=(\\hat p-p_0)/\\sqrt{p_0(1-p_0)/n}$, approximately standard normal when null expected success and failure counts are sufficiently large. For two independent samples under $H_0:p_1=p_2$, use the pooled estimate $\\hat p=(X_1+X_2)/(n_1+n_2)$ in the standard error $\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}$."
  }
}
);
