QUESTIONS.push(
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.1"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.1",
  "title": "Summaries",
  "prompt": "For the observations 1, 2, 2, 5, 10, find the sample median.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "The sorted middle observation is 2. Mean is 4; mode is 2. Squared deviations sum to 54, so sample variance is 54/4=13.5.",
  "trap": "The mean of 4 is not the median.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.2"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.2",
  "title": "Standard error",
  "prompt": "For iid observations with standard deviation 12 and n=36, find the standard error of the sample mean.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$12/\\sqrt{36}=2$.",
  "trap": "Divide by square root of n, not n.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.3"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.3",
  "title": "Chi-square variance",
  "prompt": "Let $V=\\sum_{i=1}^5Z_i^2$ for independent standard normal variables. Find Var(V).",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$V\\sim\\chi^2_5$, so variance is $2\\cdot5=10$.",
  "trap": "Mean is 5; variance is 10.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.4"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.4",
  "title": "t variance",
  "prompt": "Find the variance of $T\\sim t_6$.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$6/(6-2)=1.5$.",
  "trap": "The variance exists only above 2 degrees of freedom.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.5"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.5",
  "title": "Normal mean interval",
  "prompt": "An iid normal sample has n=100, mean 20 and known sigma=5. Use z(0.975)=1.96. Find the upper endpoint of the 95% mean interval.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "Standard error is 0.5. The interval is $20\\pm0.98=[19.02,20.98]$.",
  "trap": "Use standard error rather than sigma.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.6"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.6",
  "title": "t mean interval",
  "prompt": "An iid normal sample has n=9, mean 15 and s=3. Use t(8,0.975)=2.306. Find the lower endpoint of the 95% mean interval.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$15-2.306(3/3)=12.694$.",
  "trap": "There are 8 degrees of freedom, not 9.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.7"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.7",
  "title": "Variance interval",
  "prompt": "For a normal sample with n=11 and s²=4, the relevant chi-square lower/upper quantiles are 3.247 and 20.483. Find the lower endpoint of the two-sided variance interval.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$10\\cdot4/20.483\\approx1.953$. The upper endpoint is $40/3.247\\approx12.319$.",
  "trap": "Use the larger quantile in the lower endpoint.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.8"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.8",
  "title": "Precision planning",
  "prompt": "Using z=1.96 and the worst-case proportion, what sample size is needed for a planned half-width at most 0.05?",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$n\\ge1.96^2/(4\\cdot0.05^2)=384.16$. Round up to 385.",
  "trap": "Rounding down violates the planned bound.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.9"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.9",
  "title": "Interpret a p-value",
  "prompt": "A prespecified test returns p=0.03. At significance level 0.05, which conclusion is justified?",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "Reject the null at the chosen significance level. This does not give the probability that the null is false.",
  "trap": "A p-value is a null-model tail probability.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.10"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.10",
  "title": "Mean test",
  "prompt": "For an iid normal sample, n=25, mean=52, s=5. Under H0: mean=50, find the one-sample t statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$T=(52-50)/(5/5)=2$, with 24 degrees of freedom. Use the chosen alternative to decide the tail.",
  "trap": "The statistic alone does not specify a rejection decision.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.11"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.11",
  "title": "Independence counts",
  "prompt": "A 2×2 count table has rows (30,20) and (10,40). Find the chi-square independence statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "Row totals are 50 and 50; column totals are 40 and 60. Expected rows are (20,30) and (20,30). Statistic is $100/20+100/30+100/20+100/30=16.6667$, with one degree of freedom.",
  "trap": "Expected counts use row and column totals, not equal cells.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.12"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.12",
  "title": "Pooled degrees of freedom",
  "prompt": "Two independent normal samples of sizes 8 and 12 have equal unknown population variance. What degrees of freedom apply to the pooled two-sample t test?",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$8+12-2=18$. With unequal variances, the pooled exact model is invalid; use Welch instead.",
  "trap": "Subtract two because two sample means have been estimated.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.2",
  "marks": 2,
  "tests": [
    "c.prob.DA.13"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.13",
  "title": "Two-sample mean interval",
  "prompt": "Two independent normal samples have $n_1=n_2=10$, means 12 and 10, and standard deviations $s_1=s_2=2$. Assume equal population variances and use $t_{18,0.975}=2.101$. Find the lower endpoint of the 95% interval for $\\mu_1-\\mu_2$.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "The pooled standard deviation is 2 and the standard error is $2\\sqrt{1/10+1/10}=0.8944$. The interval is $2\\pm2.101(0.8944)$, so its lower endpoint is about 0.121.",
  "trap": "Use the pooled t interval only under independent normal samples with equal unknown variances.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.14"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.14",
  "title": "One-proportion z statistic",
  "prompt": "In 100 independent trials, 60 are successes. Under $H_0:p=0.5$, find the one-proportion z statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$\\hat p=0.60$ and the null standard error is $\\sqrt{0.5(0.5)/100}=0.05$. Thus $Z=(0.60-0.50)/0.05=2$.",
  "trap": "Use the null value in the standard error; this is a large-sample approximation.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.11"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.15",
  "title": "Chi-square goodness of fit",
  "prompt": "A four-outcome model predicts equal probabilities. Observed counts are 6, 14, 10, and 10. Find Pearson’s chi-square statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "With total 40, each expected count is 10. Thus $X^2=(6-10)^2/10+(14-10)^2/10=3.2$; the two matching counts contribute zero. With no fitted parameters, the reference degrees of freedom are $4-1=3$.",
  "trap": "Expected counts come from the null model; use the observed total to obtain them.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.11"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.16",
  "title": "Chi-square variance statistic",
  "prompt": "A normal sample has size 10 and sample variance 4. Under $H_0:\\sigma^2=2$, find the chi-square test statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "$X^2=(n-1)S^2/\\sigma_0^2=9(4)/2=18$, with 9 degrees of freedom under the null.",
  "trap": "The exact variance pivot requires a normal population.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.1",
  "marks": 2,
  "tests": [
    "c.prob.DA.1"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.17",
  "title": "Sample standard deviation",
  "prompt": "For the data 1, 2, 3, 4, 5, find the sample standard deviation using denominator $n-1$.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "The mean is 3 and the squared deviations sum to 10. Thus $s^2=10/4=2.5$ and $s=\\sqrt{2.5}\\approx1.581$.",
  "trap": "Use denominator n−1 for the sample variance here, then take its square root.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.10"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.18",
  "title": "Known-variance mean z statistic",
  "prompt": "An iid normal sample has size 36, mean 52, and known population standard deviation 6. Under $H_0:\\mu=50$, find the one-sample z statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "The standard error is $6/\\sqrt{36}=1$. Therefore $Z=(52-50)/1=2$ under the null.",
  "trap": "Use z when the population standard deviation is known; the given normal model makes the sampling law exact.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.12"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.19",
  "title": "Pooled two-sample t statistic",
  "prompt": "Two independent normal samples have $n_1=n_2=10$, means 12 and 9, and standard deviations 2 in each group. Assume equal population variances and test $H_0:\\mu_1-\\mu_2=0$. Find the pooled t statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "The pooled standard deviation is 2. The standard error is $2\\sqrt{1/10+1/10}=0.8944$, so $T=3/0.8944\\approx3.354$ with 18 degrees of freedom.",
  "trap": "Pooling requires independent normal samples with equal population variances.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.12"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.20",
  "title": "Paired t statistic",
  "prompt": "Four matched before-and-after differences are 2, 4, 3, and 5. Under a normal-differences model and $H_0:\\mu_D=0$, find the paired t statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "The differences have mean 3.5 and sample variance $5/3$, so $s_D=\\sqrt{5/3}$. Thus $T=3.5/(\\sqrt{5/3}/\\sqrt4)\\approx5.422$ with 3 degrees of freedom.",
  "trap": "Analyze the four within-pair differences; do not treat the two measurements in each pair as independent.",
  "source": "Original DA bridge exercise"
},
{
  "course": "prob",
  "sec": "DA.3",
  "marks": 2,
  "tests": [
    "c.prob.DA.14"
  ],
  "provenance": "Original DA practice, not a textbook exercise or past paper.",
  "id": "q.prob.DA.21",
  "title": "Two-proportion z statistic",
  "prompt": "Two independent samples have 60 successes in 100 trials and 40 successes in 100 trials. Under $H_0:p_1=p_2$, find the pooled two-proportion z statistic.",
  "approach": "Identify the sampling model and its assumptions before substituting numbers.",
  "solution": "The pooled estimate is $100/200=0.5$. The null standard error is $\\sqrt{0.5(0.5)(1/100+1/100)}=0.07071$. Therefore $Z=(0.60-0.40)/0.07071\\approx2.828$.",
  "trap": "Pool successes to estimate the shared null proportion; this is a large-sample z approximation.",
  "source": "Original DA bridge exercise"
}
);
