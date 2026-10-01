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
}
);
