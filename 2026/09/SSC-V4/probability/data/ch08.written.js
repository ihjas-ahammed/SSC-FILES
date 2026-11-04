var QUESTIONS = typeof QUESTIONS !== "undefined" ? QUESTIONS : [];
QUESTIONS.push(...[
  {
    "id": "w.prob.8.2.1",
    "course": "prob",
    "sec": "8.2",
    "marks": 4,
    "title": "Adaptation of Ross Problem 8.2(a,b): Markov and Chebyshev",
    "prompt": "A nonnegative test score X has mean 75 and variance 25. Give a Markov upper bound for P(X≥85), then a Chebyshev bound for P(65≤X≤85).",
    "approach": "Scores are nonnegative, so use Markov directly. For the central interval use the complement of a two-sided deviation.",
    "solution": "Markov gives $P(X\\ge85)\\le75/85=15/17$. Chebyshev gives $P(|X-75|<10)\\ge1-25/100=3/4$, so $P(65<X<85)\\ge0.75$; endpoint versions depend on whether atoms occur at the endpoints.",
    "trap": "Markov needs X≥0. Chebyshev controls the outside tail and therefore supplies a lower bound on the inside probability.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Problem 8.2(a,b), PDF p. 419."
  },
  {
    "id": "w.prob.8.2.2",
    "course": "prob",
    "sec": "8.2",
    "marks": 4,
    "title": "Adaptation of Ross Problem 8.2(c): sample size by WLLN bound",
    "prompt": "Scores are iid with variance 25. Find a sufficient n so the probability that their average differs from 75 by at least 5 is at most 0.1, using Chebyshev.",
    "approach": "Apply the finite-variance weak-law bound and solve for n.",
    "solution": "$P(|\\bar X_n-75|\\ge5)\\le25/(25n)=1/n$. It suffices that $1/n\\le0.1$, so n≥10 students. This is a sufficient guarantee from the bound, not necessarily the smallest n for the true score law.",
    "trap": "Keep the sample-average variance as σ²/n.",
    "tests": [
      "c.prob.8.2.2"
    ],
    "provenance": "Ross, 10e, §8.2, Problem 8.2(c), PDF p. 419."
  },
  {
    "id": "w.prob.8.3.1",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Adaptation of Ross Problem 8.5: rounding errors",
    "prompt": "Fifty independent rounding errors are Uniform(-0.5,0.5). Approximate the probability that the total error has absolute value greater than 3.",
    "approach": "Compute the error mean and variance, standardize the sum, and use the normal approximation.",
    "solution": "Each error has mean 0 and variance $1/12$. Thus the sum has mean 0 and variance $50/12$, with standard deviation $\\sqrt{50/12}$. The CLT approximation is $P(|S|>3)\\approx2[1-\\Phi(3/\\sqrt{50/12})]\\approx0.141$.",
    "trap": "Standardize the sum with sd $\\sqrt{n\\sigma^2}$; the question asks a two-sided tail.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.5, PDF p. 419."
  },
  {
    "id": "w.prob.8.3.2",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Adaptation of Ross Problem 8.7: surviving bulb supply",
    "prompt": "One hundred independent bulb lifetimes are exponential with mean 5 hours. Approximate the probability that the hundredth bulb is still working after 525 hours when each failed bulb is replaced immediately.",
    "approach": "The time to exhaust the stock is the sum of 100 exponential lifetimes; apply the CLT to this sum.",
    "solution": "Each lifetime has mean 5 and variance 25. The total T has mean 500 and sd 50. “A working bulb after 525 hours” means $T>525$, so $P(T>525)\\approx1-\\Phi((525-500)/50)=1-\\Phi(0.5)\\approx0.309$.",
    "trap": "The stock is exhausted at the sum of all 100 lifetimes; compare the elapsed time with that sum.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.7, PDF p. 419."
  },
  {
    "id": "w.prob.8.4.1",
    "course": "prob",
    "sec": "8.4",
    "marks": 4,
    "title": "Strong law and long-run frequencies",
    "prompt": "State the strong law for iid integrable variables and deduce the long-run frequency of event A in independent repeated trials.",
    "approach": "Apply the theorem to indicator variables.",
    "solution": "For iid $X_i$ with $E|X_1|<\\infty$, $\\bar X_n\\to E[X_1]$ almost surely. Set $X_i=1_{A_i}$, where the replications make these iid Bernoulli variables with mean P(A); then $n^{-1}\\sum_i1_{A_i}\\to P(A)$ almost surely.",
    "trap": "The strong law gives almost-sure convergence; the weak law gives only convergence in probability.",
    "tests": [
      "c.prob.8.4.1"
    ],
    "provenance": "Ross, 10e, §8.4, Theorem 4.1 and frequency interpretation, PDF pp. 401–402."
  },
  {
    "id": "w.prob.8.4.2",
    "course": "prob",
    "sec": "8.4",
    "marks": 4,
    "title": "Original drill: compare convergence modes",
    "prompt": "Explain the difference between the weak and strong laws for iid variables with finite variance.",
    "approach": "Name each mode of convergence and its event/probability meaning.",
    "solution": "The weak law says for every ε>0, $P(|\\bar X_n-\\mu|>ε)\\to0$. The strong law says $P(\\bar X_n\\to\\mu)=1$. Almost-sure convergence implies convergence in probability, but the statements are not interchangeable.",
    "trap": "“With probability tending to one at each n” is not the same assertion as “almost every infinite path converges.”",
    "tests": [
      "c.prob.8.2.2",
      "c.prob.8.4.1"
    ],
    "provenance": "Original item aligned with Ross §§8.2, 8.4."
  },
  {
    "id": "w.prob.8.5.1",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Chernoff bound practice",
    "prompt": "Suppose X has MGF $M_X(t)$ finite for t>0. Derive an upper bound on P(X≥a) and explain parameter choice.",
    "approach": "Apply Markov to $e^{tX}$ and then minimize over allowed positive t.",
    "solution": "For t>0, $P(X\\ge a)=P(e^{tX}\\ge e^{ta})\\le e^{-ta}E[e^{tX}]=e^{-ta}M_X(t)$. Any admissible positive t gives a bound; the infimum over such t is strongest.",
    "trap": "The exponential is increasing only for positive t; a negative t is used for a lower-tail event.",
    "tests": [
      "c.prob.8.5.2"
    ],
    "provenance": "Ross, 10e, §8.5, Proposition 5.2, PDF pp. 407–408."
  },
  {
    "id": "w.prob.8.5.2",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Jensen inequality application",
    "prompt": "Let X be integrable with E[X]=0. Use Jensen to compare $E[e^X]$ with 1.",
    "approach": "The exponential is convex, so apply Jensen directly.",
    "solution": "Since $e^x$ is convex, $e^{E[X]}\\le E[e^X]$. With E[X]=0, this yields $E[e^X]\\ge1$ (when the expectation exists).",
    "trap": "For a concave function the inequality reverses.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Proposition 5.3, PDF p. 409."
  },
  {
    "id": "w.prob.8.6.1",
    "course": "prob",
    "sec": "8.6",
    "marks": 4,
    "title": "Poisson approximation bound",
    "prompt": "Independent Bernoulli variables have probabilities $p_1=0.1,p_2=0.2,p_3=0.05$. State the Poisson approximation parameter and Ross bound on the error for any event A.",
    "approach": "Sum the probabilities for the Poisson mean and sum their squares for the bound.",
    "solution": "Here $\\lambda=0.35$. For $W=\\sum X_i$ and $Z\\sim\\operatorname{Poisson}(0.35)$, $|P(W\\in A)-P(Z\\in A)|\\le0.1^2+0.2^2+0.05^2=0.0525$ for every set A of nonnegative integers.",
    "trap": "The squared probabilities quantify approximation error; λ is their unsquared sum.",
    "tests": [
      "c.prob.8.6.1"
    ],
    "provenance": "Ross, 10e, §8.6, coupling bound, PDF pp. 412–413."
  },
  {
    "id": "w.prob.8.6.2",
    "course": "prob",
    "sec": "8.6",
    "marks": 4,
    "title": "Original drill: approximate zero successes",
    "prompt": "For 100 independent Bernoulli trials with p=0.01, approximate the probability of no successes using a Poisson law and give the stated error bound.",
    "approach": "Use λ=np and evaluate P(Poisson(λ)=0).",
    "solution": "Here λ=1, so the approximation is $e^{-1}\\approx0.3679$. Ross’s bound for this event is $\\sum_i p_i^2=100(0.01)^2=0.01$.",
    "trap": "The approximation probability is the Poisson zero mass; the bound controls absolute probability error.",
    "tests": [
      "c.prob.8.6.1"
    ],
    "provenance": "Original item aligned with Ross §8.6."
  },
  {
    "id": "w.prob.8.7.1",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Lorenz curve and Gini calculation",
    "prompt": "For a uniform income distribution on (0,b), derive the Lorenz curve and Gini index.",
    "approach": "Find the p-quantile and lower-p income contribution, then integrate.",
    "solution": "The quantile is $\\xi_p=bp$. Then $E[X1_{X\\le bp}]=(1/b)\\int_0^{bp}x\\,dx=bp^2/2$ while E[X]=b/2, so $L(p)=p^2$. Hence $G=1-2\\int_0^1p^2dp=1/3$.",
    "trap": "The Lorenz ordinate is a share of total income, so divide the partial expectation by E[X].",
    "tests": [
      "c.prob.8.7.1",
      "c.prob.8.7.2"
    ],
    "provenance": "Ross, 10e, §8.7, uniform example and Gini formula, PDF pp. 416–417."
  },
  {
    "id": "w.prob.8.7.2",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Interpretation of Lorenz dominance",
    "prompt": "Two positive-income populations have Lorenz curves L1 and L2, with L1(p)≤L2(p) for all p. Which population has the greater or equal Gini index?",
    "approach": "Compare the areas beneath the curves in the Gini formula.",
    "solution": "Since $G_j=1-2\\int_0^1L_j(p)dp$, the pointwise inequality implies $\\int L_1\\le\\int L_2$, so $G_1\\ge G_2$. The first population is at least as unequal by this measure.",
    "trap": "A lower Lorenz curve means less cumulative income reaches the lower population shares and therefore a larger Gini index.",
    "tests": [
      "c.prob.8.7.2"
    ],
    "provenance": "Original item aligned with Ross §8.7."
  },
  {
    "id": "w.prob.8.ross.example.2a",
    "course": "prob",
    "sec": "8.2",
    "marks": 4,
    "title": "Ross Example 2a: Factory production bounds",
    "prompt": "A factory's weekly production is a nonnegative random variable X with mean 50 items. (a) Find an upper bound for the probability that this week's production exceeds 75. (b) If the variance of weekly production is 25, find a lower bound for the probability that production is between 40 and 60 items.",
    "approach": "Apply Markov's inequality for the tail bound with only the mean known. Apply Chebyshev's inequality centered at the mean to bound deviation from the average.",
    "solution": "(a) Because $X \\ge 0$, Markov's inequality gives $P(X > 75) \\le P(X \\ge 76) \\le E[X]/75 = 50/75 = 2/3$. (b) With mean $\\mu = 50$ and variance $\\sigma^2 = 25$, the event that production is between 40 and 60 is $|X - 50| < 10$. Chebyshev's inequality gives $P(|X - 50| \\ge 10) \\le \\sigma^2/10^2 = 25/100 = 1/4$. Taking complements yields $P(40 < X < 60) \\ge 1 - 1/4 = 3/4 = 0.75$.",
    "trap": "Markov requires nonnegativity and bounds only one tail; Chebyshev bounds two-sided deviations.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Example 2a, PDF pp. 392–393."
  },
  {
    "id": "w.prob.8.ross.example.2b",
    "course": "prob",
    "sec": "8.2",
    "marks": 4,
    "title": "Ross Example 2b: Chebyshev bound versus exact probability",
    "prompt": "Suppose X is uniformly distributed on the interval (0, 10). (a) Use Chebyshev's inequality to bound $P(|X - 5| > 4)$. (b) Compute the exact probability and compare. (c) Compare the Chebyshev bound on $P(|Y - \\mu| > 2\\sigma)$ with the exact probability when Y is normal.",
    "approach": "Compute the uniform mean and variance, apply Chebyshev's inequality, and compare with direct geometric and normal probabilities.",
    "solution": "(a) For $X \\sim \\text{Uniform}(0,10)$, $E[X] = 5$ and $\\operatorname{Var}(X) = 10^2/12 = 25/3$. Chebyshev's inequality gives $P(|X - 5| \\ge 4) \\le (25/3)/16 = 25/48 \\approx 0.5208$. (b) The exact probability is $P(X < 1 \\text{ or } X > 9) = 1/10 + 1/10 = 0.20$. Chebyshev's bound (0.52) is guaranteed for any distribution but conservative. (c) For $Y \\sim N(\\mu, \\sigma^2)$, Chebyshev gives $P(|Y - \\mu| \\ge 2\\sigma) \\le 1/2^2 = 0.25$, whereas the exact value is $2(1 - \\Phi(2)) \\approx 0.0456$.",
    "trap": "Chebyshev is distribution-free, so it is rarely tight for light-tailed continuous distributions.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Example 2b, PDF p. 393."
  },
  {
    "id": "w.prob.8.ross.example.3a",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Example 3a: Sample size for astronomical measurement",
    "prompt": "An astronomer estimates the distance d to a star by averaging n independent measurements, each having mean d and variance 4 light-years squared. (a) Using the central limit theorem, find the number of observations needed to be 95% confident that the estimate is within 0.5 light-years. (b) How many observations would Chebyshev's inequality require for the same guarantee?",
    "approach": "Standardize the sample mean using standard error $\\sigma/\\sqrt{n}$. Equate the normal probability to 0.95 and solve for n; repeat with Chebyshev's inequality.",
    "solution": "(a) The sample mean $\\bar{X}_n$ has mean d and variance $4/n$, with standard error $2/\\sqrt{n}$. By the CLT, $(\\bar{X}_n - d)/(2/\\sqrt{n}) \\approx Z \\sim N(0,1)$. The condition $P(|\\bar{X}_n - d| \\le 0.5) \\ge 0.95$ translates to $2\\Phi(0.5 / (2/\\sqrt{n})) - 1 = 2\\Phi(\\sqrt{n}/4) - 1 \\ge 0.95$, so $\\Phi(\\sqrt{n}/4) \\ge 0.975$. Thus $\\sqrt{n}/4 \\ge 1.96$, yielding $n \\ge (7.84)^2 \\approx 61.47$, so $n = 62$ measurements suffice. (b) Chebyshev gives $P(|\\bar{X}_n - d| \\ge 0.5) \\le (4/n)/(0.5)^2 = 16/n \\le 0.05$, which requires $n \\ge 16/0.05 = 320$ measurements.",
    "trap": "The standard deviation of the average is $\\sigma/\\sqrt{n}$, not $\\sigma/n$.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Example 3a, PDF pp. 397–398."
  },
  {
    "id": "w.prob.8.ross.example.3b",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Example 3b: Course enrollment Poisson split",
    "prompt": "Enrollment in a lecture course is Poisson distributed with mean 100. If 120 or more students enroll, a second section must be opened. Approximate the probability that two sections are needed, including a continuity correction.",
    "approach": "Treat Poisson(100) as a sum of 100 independent Poisson(1) variables, apply CLT with mean 100 and variance 100, and apply continuity correction.",
    "solution": "For $X \\sim \\operatorname{Poisson}(100)$, $E[X] = 100$ and $\\operatorname{Var}(X) = 100$, so $\\sigma = 10$. The integer event $X \\ge 120$ corresponds to the continuous interval $[119.5, \\infty)$. Standardizing: $Z = (119.5 - 100)/10 = 1.95$. Hence $P(X \\ge 120) \\approx 1 - \\Phi(1.95) \\approx 1 - 0.9744 = 0.0256$.",
    "trap": "Remember the continuity correction: $X \\ge 120$ becomes $X \\ge 119.5$, shifting downward by 0.5.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Example 3b, PDF p. 398."
  },
  {
    "id": "w.prob.8.ross.example.3c",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Example 3c: Sum of ten dice rolls",
    "prompt": "Ten fair six-sided dice are rolled. Approximate the probability that their total score lies between 30 and 40 inclusive.",
    "approach": "Find the mean and variance of a single die roll, sum them for 10 dice, apply the continuity correction to [29.5, 40.5], and evaluate with the standard normal c.d.f.",
    "solution": "For a single die $X_i$, $E[X_i] = 7/2 = 3.5$ and $\\operatorname{Var}(X_i) = 35/12$. For the sum $S_{10} = \\sum_{i=1}^{10} X_i$, $E[S_{10}] = 35$ and $\\operatorname{Var}(S_{10}) = 350/12 = 175/6 \\approx 29.1667$, so $\\sigma = \\sqrt{175/6} \\approx 5.4006$. With continuity correction, $P(30 \\le S_{10} \\le 40) = P(29.5 \\le S_{10} \\le 40.5) \\approx P(-1.0184 \\le Z \\le 1.0184) = 2\\Phi(1.02) - 1 \\approx 2(0.8461) - 1 = 0.6922$.",
    "trap": "Without the continuity correction, standardizing 30 and 40 directly undercounts the probability at the integer boundary points.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Example 3c, PDF pp. 398–399."
  },
  {
    "id": "w.prob.8.ross.example.3d",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Example 3d: Sum of ten uniform random variables",
    "prompt": "Let $X_1, \\ldots, X_{10}$ be independent Uniform(0,1) random variables. Calculate a normal approximation to $P(\\sum_{i=1}^{10} X_i > 6)$.",
    "approach": "Compute the sum's exact mean and variance, standardize the threshold, and use the standard normal upper tail.",
    "solution": "Each $X_i$ has mean $1/2$ and variance $1/12$. The sum $S_{10}$ has mean $10(1/2) = 5$ and variance $10/12 = 5/6$, so $\\operatorname{SD}(S_{10}) = \\sqrt{5/6} \\approx 0.91287$. Then $P(S_{10} > 6) = P(Z > (6 - 5)/\\sqrt{5/6}) = P(Z > 1.0954) = 1 - \\Phi(1.10) \\approx 1 - 0.8643 = 0.1357$.",
    "trap": "Continuous uniform sums need no continuity correction because point probabilities are zero.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Example 3d, PDF p. 399."
  },
  {
    "id": "w.prob.8.ross.example.3e",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Example 3e: Sequentially grading exams",
    "prompt": "An instructor grades 50 exams sequentially. Grading times are independent with mean 20 minutes and standard deviation 4 minutes. Approximate the probability that at least 25 exams are finished in the first 450 minutes.",
    "approach": "Reframe the count event 'at least 25 finished' as the waiting time event 'the 25th exam is completed by minute 450' and apply the CLT.",
    "solution": "Let $X_i$ be the grading time of exam i. At least 25 exams are completed within 450 minutes if and only if $T_{25} = \\sum_{i=1}^{25} X_i \\le 450$. We have $E[T_{25}] = 25(20) = 500$ minutes and $\\operatorname{Var}(T_{25}) = 25(4^2) = 400$, so $\\sigma = 20$ minutes. Standardizing gives $P(T_{25} \\le 450) \\approx P(Z \\le (450 - 500)/20) = P(Z \\le -2.50) = 1 - \\Phi(2.50) \\approx 0.0062$.",
    "trap": "Do not approximate the count directly without noting the exact equivalence between event counts and arrival sums.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Example 3e, PDF p. 399."
  },
  {
    "id": "w.prob.8.ross.example.5a",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5a: One-sided Chebyshev factory production",
    "prompt": "A factory's weekly output X has mean 100 units and variance 400. Use the one-sided Chebyshev inequality to obtain an upper bound on the probability that weekly output is at least 120 units, and compare it with Markov's bound.",
    "approach": "Apply $P(X - \\mu \\ge a) \\le \\sigma^2/(\\sigma^2 + a^2)$ with $a = 20$, then evaluate Markov's bound $E[X]/120$.",
    "solution": "Here $\\mu = 100$, $\\sigma^2 = 400$, and deviation $a = 120 - 100 = 20$. One-sided Chebyshev gives $P(X \\ge 120) = P(X - 100 \\ge 20) \\le 400 / (400 + 20^2) = 400 / 800 = 1/2$. By contrast, Markov's inequality gives only $P(X \\ge 120) \\le E[X]/120 = 100/120 = 5/6$. The one-sided Chebyshev bound is significantly sharper.",
    "trap": "Two-sided Chebyshev would yield $\\sigma^2/a^2 = 400/400 = 1$, which is completely uninformative.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5a, PDF p. 406."
  },
  {
    "id": "w.prob.8.ross.example.5b",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5b: Random pairing of men and women",
    "prompt": "A group of 100 men and 100 women is randomly paired into 100 couples. Let X be the number of mixed-gender (man-woman) couples. Derive E[X] and Var(X), and bound the probability that at most 30 couples are mixed using Chebyshev inequalities.",
    "approach": "Express X as a sum of indicators, compute joint pair probabilities via hypergeometric conditioning, and compare two-sided with one-sided Chebyshev bounds.",
    "solution": "Let $I_i = 1$ if man i is paired with a woman. $P(I_i = 1) = 100/199$, so $E[X] = 100(100/199) \\approx 50.2513$. For $i \\ne j$, $P(I_i=1, I_j=1) = (100/199)(99/197)$, yielding $\\operatorname{Cov}(I_i, I_j) = (100/199)[99/197 - 100/199] \\approx 0.0000128182$. Summing variances and covariances gives $\\operatorname{Var}(X) = 100(100/199)(99/199) + 2\\binom{100}{2}\\operatorname{Cov}(I_1, I_2) \\approx 25.126$. Deviation is $a = 50.2513 - 30 = 20.2513$. Two-sided Chebyshev: $P(X \\le 30) \\le 25.126 / (20.2513)^2 \\approx 0.0613$. One-sided Chebyshev: $P(X - \\mu \\le -a) \\le 25.126 / (25.126 + 20.2513^2) \\approx 0.0577$.",
    "trap": "The indicator pairings are negatively correlated; omitting the covariance terms would give an incorrect variance.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5b, PDF p. 407."
  },
  {
    "id": "w.prob.8.ross.example.5c",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5c: Chernoff bound for standard normal",
    "prompt": "Let Z be a standard normal random variable. Derive the Chernoff upper bound for $P(Z \\ge a)$ when $a > 0$.",
    "approach": "Apply Markov's inequality to $e^{tZ}$ using the normal MGF $M(t) = e^{t^2/2}$ and minimize the exponent over $t > 0$.",
    "solution": "For any $t > 0$, $P(Z \\ge a) = P(e^{tZ} \\ge e^{ta}) \\le e^{-ta} E[e^{tZ}] = e^{-ta + t^2/2}$. To find the tightest bound, minimize $g(t) = t^2/2 - ta$. Setting $g'(t) = t - a = 0$ gives optimal $t^* = a > 0$. Evaluating at $t = a$ yields $P(Z \\ge a) \\le e^{-a^2 + a^2/2} = e^{-a^2/2}$. By symmetry, $P(Z \\le -a) \\le e^{-a^2/2}$ for $a > 0$.",
    "trap": "The optimization requires $t > 0$ for upper tails and $t < 0$ for lower tails.",
    "tests": [
      "c.prob.8.5.2"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5c, PDF pp. 407–408."
  },
  {
    "id": "w.prob.8.ross.example.5d",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5d: Chernoff bound for Poisson variable",
    "prompt": "Let X be a Poisson random variable with parameter $\\lambda$. For an integer $i > \\lambda$, derive the Chernoff upper bound on $P(X \\ge i)$.",
    "approach": "Use the Poisson MGF $M(t) = \\exp(\\lambda(e^t - 1))$, set up $e^{-it} M(t)$, and optimize over positive t.",
    "solution": "For $t > 0$, Chernoff gives $P(X \\ge i) \\le e^{-it} \\exp(\\lambda(e^t - 1)) = \\exp(\\lambda(e^t - 1) - it)$. Differentiating the exponent with respect to t gives $\\lambda e^t - i = 0$, so $e^t = i/\\lambda$, which means $t = \\ln(i/\\lambda)$. Since $i > \\lambda$, $t > 0$ is valid. Substituting $e^t = i/\\lambda$ into the bound: $\\exp(\\lambda(i/\\lambda - 1) - i\\ln(i/\\lambda)) = \\exp(i - \\lambda) (\\lambda/i)^i = e^{-\\lambda} (e\\lambda/i)^i$.",
    "trap": "The optimal $t = \\ln(i/\\lambda)$ is positive only when $i > \\lambda$; for $i < \\lambda$, this formula applies to the lower tail.",
    "tests": [
      "c.prob.8.5.2"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5d, PDF p. 408."
  },
  {
    "id": "w.prob.8.ross.example.5e",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5e: Random walk tail bound",
    "prompt": "A gambler wins or loses 1 unit with probability 1/2 each on each round. Let $S_n = \\sum_{i=1}^n X_i$ be the net fortune after n rounds. (a) Derive an exponential Chernoff bound for $P(S_n \\ge a)$ when $a > 0$. (b) Evaluate for $n = 10, a = 6$ and compare with the exact binomial probability.",
    "approach": "Bound the single-step MGF $E[e^{tX}] = \\cosh(t) \\le e^{t^2/2}$, raise to the n-th power, minimize over t, and evaluate.",
    "solution": "(a) For each step, $E[e^{tX_i}] = (e^t + e^{-t})/2 = \\sum_{k=0}^\\infty t^{2k}/(2k)! \\le \\sum_{k=0}^\\infty (t^2/2)^k / k! = e^{t^2/2}$. By independence, $E[e^{tS_n}] \\le e^{nt^2/2}$. Chernoff gives $P(S_n \\ge a) \\le e^{-ta + nt^2/2}$. Minimizing at $t = a/n > 0$ gives $P(S_n \\ge a) \\le e^{-a^2/(2n)}$. (b) For $n = 10, a = 6$: $P(S_{10} \\ge 6) \\le e^{-36/20} = e^{-1.8} \\approx 0.1653$. Exactly, $S_{10} \\ge 6$ means winning at least 8 of 10 bets, which has probability $[\\binom{10}{8} + \\binom{10}{9} + \\binom{10}{10}]/2^{10} = (45 + 10 + 1)/1024 = 56/1024 \\approx 0.0547$.",
    "trap": "Net score $S_{10} = 2W - 10$, where W is the number of wins; $S_{10} \\ge 6$ corresponds to $W \\ge 8$.",
    "tests": [
      "c.prob.8.5.2"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5e, PDF pp. 408–409."
  },
  {
    "id": "w.prob.8.ross.example.5f",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5f: Risk preference and Jensen's inequality",
    "prompt": "An investor can choose between a risky asset with random return X having mean m, and a risk-free asset guaranteeing return m. Decisions maximize expected utility $E[u(R)]$. Using Jensen's inequality, characterize choices for concave versus convex utility functions.",
    "approach": "Apply Jensen's inequality to $E[u(X)]$ versus $u(E[X]) = u(m)$ for both curvature directions.",
    "solution": "By Jensen's inequality: (1) If utility u is concave ($u'' \\le 0$), $E[u(X)] \\le u(E[X]) = u(m)$. The guaranteed return delivers higher expected utility; this models risk aversion. (2) If utility u is convex ($u'' \\ge 0$), $E[u(X)] \\ge u(E[X]) = u(m)$. The risky gamble delivers higher expected utility; this models risk-seeking behavior. (3) If utility is linear ($u'' = 0$), $E[u(X)] = u(m)$, representing risk neutrality.",
    "trap": "The direction of Jensen's inequality is reversed for concave functions compared to convex functions.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5f, PDF p. 409."
  },
  {
    "id": "w.prob.8.ross.example.5g",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5g: Shared birthdays and popular days",
    "prompt": "Suppose days in a year are ordered so that daily birth probabilities satisfy $p_1 \\le p_2 \\le \\cdots \\le p_m$. Show that learning two individuals share a birthday increases the expected index of their birth date.",
    "approach": "Express the conditional expectation using Bayes' formula and apply the covariance inequality for monotone functions (Proposition 5.4).",
    "solution": "Let $X, Y$ be independent birthdays with $P(X=r) = p_r$. The event that persons 1 and 2 share a birthday is $A = \\{X = Y\\}$. Then $P(A) = \\sum_r p_r^2$, and $P(X=r \\mid A) = p_r^2 / \\sum_k p_k^2$. Thus $E[X \\mid A] = \\sum_r r p_r^2 / \\sum_k p_k^2$. The inequality $E[X \\mid A] \\ge E[X]$ is equivalent to $\\sum_r r p_r^2 \\ge (\\sum_r r p_r)(\\sum_k p_k^2)$, or $E[X p_X] \\ge E[X] E[p_X]$. Since both $f(r) = r$ and $g(r) = p_r$ are nondecreasing functions of r, Proposition 5.4 establishes that $\\operatorname{Cov}(f(X), g(X)) \\ge 0$, proving $E[X \\mid A] \\ge E[X]$.",
    "trap": "The two functions must both be nondecreasing for their product expectation to dominate the product of expectations.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5g, PDF pp. 410–411."
  },
  {
    "id": "w.prob.8.ross.example.5h",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Example 5h: Poisson limit of negative binomial failures",
    "prompt": "Let X be the number of failures before r successes in independent trials with success probability $p_r = r/(r + \\lambda)$. Prove that as $r \\to \\infty$, X converges in distribution to Poisson($\\lambda$).",
    "approach": "Write out the negative binomial pmf for fixed k failures and compute its limit as $r \\to \\infty$ using Stirling/product asymptotics.",
    "solution": "For fixed integer $k \\ge 0$, $P(X = k) = \\binom{r+k-1}{k} p_r^r (1 - p_r)^k$. Substituting $p_r = r/(r+\\lambda)$ and $1 - p_r = \\lambda/(r+\\lambda)$: $\\binom{r+k-1}{k} = \\frac{(r+k-1)(r+k-2)\\cdots r}{k!} = \\frac{r^k}{k!} (1 + O(1/r))$. The success power is $p_r^r = (1 + \\lambda/r)^{-r} \\to e^{-\\lambda}$. The failure factor is $(1 - p_r)^k = (\\lambda/(r+\\lambda))^k = (\\lambda/r)^k (1 + \\lambda/r)^{-k} \\sim (\\lambda/r)^k$. Multiplying these limits: $P(X = k) = \\frac{r^k}{k!} e^{-\\lambda} \\frac{\\lambda^k}{r^k} (1 + o(1)) \\to \\frac{e^{-\\lambda} \\lambda^k}{k!}$, which is the Poisson($\\lambda$) pmf.",
    "trap": "Keep the number of failures k fixed while taking the limit in the success count r.",
    "tests": [
      "c.prob.8.5.4"
    ],
    "provenance": "Ross, 10e, §8.5, Example 5h, PDF pp. 410–411."
  },
  {
    "id": "w.prob.8.ross.example.7a",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Ross Example 7a: Lorenz curve for uniform earnings",
    "prompt": "Income X is distributed uniformly on the interval (a, b) with $0 \\le a < b$. (a) Derive the quantile function $\\xi_p$ and the Lorenz curve L(p). (b) Specialize to $a = 0$.",
    "approach": "Find $\\xi_p$ from $F(\\xi_p) = p$, compute partial expectation $\\int_a^{\\xi_p} x f(x) dx$, divide by the population mean, and simplify.",
    "solution": "(a) For $X \\sim \\text{Uniform}(a,b)$, $F(x) = (x-a)/(b-a)$. Setting $F(\\xi_p) = p$ yields quantile $\\xi_p = a + (b-a)p$. The population mean is $E[X] = (a+b)/2$. The lower-p income integral is $\\int_a^{\\xi_p} \\frac{x}{b-a} dx = \\frac{\\xi_p^2 - a^2}{2(b-a)} = \\frac{(a + (b-a)p)^2 - a^2}{2(b-a)} = \\frac{2a(b-a)p + (b-a)^2 p^2}{2(b-a)} = \\frac{2ap + (b-a)p^2}{2}$. Dividing by $E[X] = (a+b)/2$ gives $L(p) = \\frac{2ap + (b-a)p^2}{a+b}$. (b) If $a = 0$, $L(p) = \\frac{bp^2}{b} = p^2$.",
    "trap": "The Lorenz curve must satisfy $L(0) = 0$ and $L(1) = 1$; always check boundary values.",
    "tests": [
      "c.prob.8.7.1"
    ],
    "provenance": "Ross, 10e, §8.7, Example 7a, PDF pp. 414–415."
  },
  {
    "id": "w.prob.8.ross.example.7b",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Ross Example 7b: Lorenz curve for exponential earnings",
    "prompt": "Income X follows an exponential distribution with mean 1. Derive its Lorenz curve L(p) and show that the bottom 50% of the population earns approximately 15.3% of total income.",
    "approach": "Determine the quantile $\\xi_p$, use the memoryless property to evaluate the upper-tail income $E[X \\mid X > \\xi_p](1-p)$, and subtract from 1.",
    "solution": "For $X \\sim \\operatorname{Exp}(1)$, $F(x) = 1 - e^{-x}$, so $1 - e^{-\\xi_p} = p$ gives $\\xi_p = -\\ln(1-p)$. By memorylessness, $E[X \\mid X > \\xi_p] = \\xi_p + E[X] = \\xi_p + 1$. Using the upper-tail identity: $1 - L(p) = \\frac{E[X \\mid X > \\xi_p](1-p)}{E[X]} = (1 - \\ln(1-p))(1-p) = 1 - p - (1-p)\\ln(1-p)$. Hence $L(p) = p + (1-p)\\ln(1-p)$. At $p = 0.5$, $L(0.5) = 0.5 + 0.5\\ln(0.5) = 0.5(1 - \\ln 2) \\approx 0.5(1 - 0.69315) = 0.1534$, or about 15.3%.",
    "trap": "Natural logarithm is negative for $1-p < 1$, so $(1-p)\\ln(1-p)$ is negative, pulling L(p) below p as required.",
    "tests": [
      "c.prob.8.7.1"
    ],
    "provenance": "Ross, 10e, §8.7, Example 7b, PDF p. 415."
  },
  {
    "id": "w.prob.8.ross.example.7c",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Ross Example 7c: Lorenz curve for Pareto distribution",
    "prompt": "Earnings follow a Pareto distribution with parameters $\\lambda > 1$ and scale $a > 0$, so $F(x) = 1 - (a/x)^\\lambda$ for $x \\ge a$. Derive the Lorenz curve L(p).",
    "approach": "Find $\\xi_p$, compute $E[X]$ and conditional expectation $E[X \\mid X > \\xi_p]$ for Pareto, and apply the upper-tail Lorenz identity.",
    "solution": "From $1 - (a/\\xi_p)^\\lambda = p$, the quantile is $\\xi_p = a(1-p)^{-1/\\lambda}$. For $\\lambda > 1$, $E[X] = \\frac{\\lambda a}{\\lambda - 1}$. The conditional distribution of X given $X > \\xi_p$ is Pareto with parameters $\\lambda$ and minimum value $\\xi_p$, so $E[X \\mid X > \\xi_p] = \\frac{\\lambda \\xi_p}{\\lambda - 1}$. Then $1 - L(p) = \\frac{E[X \\mid X > \\xi_p](1-p)}{E[X]} = \\frac{\\xi_p(1-p)}{a} = (1-p)^{-1/\\lambda}(1-p) = (1-p)^{1 - 1/\\lambda} = (1-p)^{(\\lambda - 1)/\\lambda}$. Thus $L(p) = 1 - (1-p)^{(\\lambda - 1)/\\lambda}$.",
    "trap": "The Pareto mean exists only when $\\lambda > 1$; for $\\lambda \\le 1$ the Lorenz curve is undefined.",
    "tests": [
      "c.prob.8.7.1"
    ],
    "provenance": "Ross, 10e, §8.7, Example 7c, PDF p. 415."
  },
  {
    "id": "w.prob.8.ross.example.7d",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Ross Example 7d: Gini index for uniform and exponential laws",
    "prompt": "Using the formula $G = 1 - 2\\int_0^1 L(p) dp$, calculate the Gini index for (a) the Uniform(0,1) distribution and (b) the Exponential(1) distribution, and interpret which is more unequal.",
    "approach": "Substitute the known Lorenz curves $L(p) = p^2$ and $L(p) = p + (1-p)\\ln(1-p)$ into the Gini area integral.",
    "solution": "(a) For Uniform(0,1), $L(p) = p^2$. $\\int_0^1 p^2 dp = 1/3$, so $G = 1 - 2(1/3) = 1/3 \\approx 0.3333$. (b) For Exponential(1), $L(p) = p + (1-p)\\ln(1-p)$. Let $x = 1-p$: $\\int_0^1 L(p) dp = \\int_0^1 (1 - x + x\\ln x) dx = [x - x^2/2]_0^1 + \\int_0^1 x\\ln x dx = 1/2 + [\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}]_0^1 = 1/2 - 1/4 = 1/4$. Thus $G = 1 - 2(1/4) = 1/2 = 0.50$. Since $1/2 > 1/3$, the exponential distribution exhibits greater income inequality than the uniform.",
    "tests": [
      "c.prob.8.7.1",
      "c.prob.8.7.2"
    ],
    "provenance": "Ross, 10e, §8.7, Example 7d, PDF pp. 416–417."
  },
  {
    "id": "w.prob.8.ross.prob.1",
    "course": "prob",
    "sec": "8.2",
    "marks": 4,
    "title": "Ross Problem 8.1: Chebyshev bound on two-sided interval",
    "prompt": "A random variable X has mean 20 and variance 20. What lower bound does Chebyshev's inequality provide for the probability $P(0 < X < 40)$?",
    "approach": "Recognize that $0 < X < 40$ is the deviation event $|X - 20| < 20$, apply Chebyshev's inequality to the complement, and subtract from 1.",
    "solution": "The interval $(0, 40)$ can be written as $\\{|X - 20| < 20\\}$. By Chebyshev's inequality with $\\mu = 20, \\sigma^2 = 20$, and $k = 20$: $P(|X - 20| \\ge 20) \\le \\sigma^2/k^2 = 20/20^2 = 20/400 = 1/20 = 0.05$. Therefore, $P(0 < X < 40) \\ge 1 - 0.05 = 0.95$.",
    "trap": "The bound is a lower bound on the interior probability, obtained by subtracting the upper-tail bound from 1.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Problem 8.1, PDF p. 419."
  },
  {
    "id": "w.prob.8.ross.prob.3",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.3: Sample size by central limit theorem",
    "prompt": "Scores on an exam have mean 75 and standard deviation 5. Using the central limit theorem, determine how many students must take the exam to ensure with probability at least 0.90 that the class average is within 5 points of 75.",
    "approach": "Standardize the sample mean using the standard normal distribution and compare the sample size with Chebyshev's distribution-free requirement.",
    "solution": "Let $\\bar{X}_n$ be the class average of n students. Then $E[\\bar{X}_n] = 75$ and $\\operatorname{SD}(\\bar{X}_n) = 5/\\sqrt{n}$. The condition is $P(|\\bar{X}_n - 75| \\le 5) \\ge 0.90$, which in standardized form becomes $P(|Z| \\le 5/(5/\\sqrt{n})) = P(|Z| \\le \\sqrt{n}) \\ge 0.90$. Thus $2\\Phi(\\sqrt{n}) - 1 \\ge 0.90$, so $\\Phi(\\sqrt{n}) \\ge 0.95$. From normal tables, $z_{0.05} \\approx 1.645$, which requires $\\sqrt{n} \\ge 1.645$, hence $n \\ge (1.645)^2 \\approx 2.71$. Rounding up, $n = 3$ students are needed under the normal approximation (compared to $n \\ge 10$ from Chebyshev's bound in Problem 8.2(c)). This is only the formal normal-approximation answer. Three observations are too few for a distribution-free CLT guarantee; under just the stated mean and variance, Chebyshev gives the sufficient guarantee n ≥ 10. Independence and the same score distribution are required.",
    "trap": "CLT provides an approximation; for very small n like 3, the true distribution shape matters more than for large n.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.3, PDF p. 419."
  },
  {
    "id": "w.prob.8.ross.prob.4",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.4: Bounds for sum of Poisson variables",
    "prompt": "Let $X_1, \\ldots, X_{20}$ be independent Poisson random variables with mean 1, and let $S = \\sum_{i=1}^{20} X_i$. (a) Use Markov's inequality to obtain an upper bound on $P(S > 15)$. (b) Use the central limit theorem to approximate $P(S > 15)$.",
    "approach": "The sum S is Poisson with mean 20 and variance 20. Apply Markov's inequality to $S \\ge 16$ or $S > 15$, then apply CLT with continuity correction.",
    "solution": "(a) For integer Poisson count S, $S > 15$ means $S \\ge 16$. Markov's inequality yields $P(S \\ge 16) \\le E[S]/16 = 20/16 = 1.25$. Since probabilities cannot exceed 1, the bound is $\\min(1.25, 1) = 1$ (or $P(S > 15) \\le 20/15 = 4/3 \\Rightarrow 1$). (b) Since S has mean 20 and variance 20 (standard deviation $\\sqrt{20} \\approx 4.4721$), applying the CLT with continuity correction to $S \\ge 15.5$ gives $P(S \\ge 15.5) \\approx P(Z \\ge (15.5 - 20)/\\sqrt{20}) = P(Z \\ge -4.5/4.4721) = P(Z \\ge -1.006) = \\Phi(1.01) \\approx 0.8438$ (without continuity correction: $P(Z > -5/\\sqrt{20}) = \\Phi(1.12) \\approx 0.8686$).",
    "trap": "Markov's inequality can exceed 1 when the threshold is below the mean, providing no useful restriction.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.4, PDF p. 419."
  },
  {
    "id": "w.prob.8.ross.prob.6",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.6: Rolls until dice total exceeds 300",
    "prompt": "A fair die is continually rolled until the cumulative sum exceeds 300. Approximate the probability that at least 80 rolls are required.",
    "approach": "Recognize that 'at least 80 rolls are required' is equivalent to the sum after 79 rolls being at most 300: $S_{79} \\le 300$. Apply CLT to $S_{79}$.",
    "solution": "At least 80 rolls are needed if and only if the sum of the first 79 rolls does not exceed 300: $S_{79} = \\sum_{i=1}^{79} X_i \\le 300$. Each die roll $X_i$ has mean $7/2 = 3.5$ and variance $35/12$. For $n = 79$: $E[S_{79}] = 79(3.5) = 276.5$, and $\\operatorname{Var}(S_{79}) = 79(35/12) = 2765/12 \\approx 230.4167$, so $\\sigma = \\sqrt{230.4167} \\approx 15.1795$. With continuity correction, we evaluate $P(S_{79} \\le 300.5) \\approx P(Z \\le (300.5 - 276.5)/15.1795) = P(Z \\le 24/15.1795) = \\Phi(1.581) \\approx 0.9431$.",
    "trap": "The condition 'at least 80 rolls needed' means $S_{79} \\le 300$, not $S_{80} \\le 300$.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.6, PDF p. 419."
  },
  {
    "id": "w.prob.8.ross.prob.8",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.8: Bulb lifetimes with random replacement delays",
    "prompt": "One hundred light bulbs have independent exponential lifetimes with mean 5 hours. Each replacement takes a random time uniformly distributed over (0, 0.5) hours. Approximate the probability that all 100 bulbs have burned out by time 550 hours.",
    "approach": "Model the total time as the sum of 100 independent cycles (lifetime + replacement delay) and apply the central limit theorem.",
    "solution": "There are 100 lifetimes but only 99 replacements before the last bulb fails. Assume all lifetimes and replacement delays are independent. Write $T=\\sum_{i=1}^{100}L_i+\\sum_{i=1}^{99}R_i$. Each lifetime has mean 5 and variance 25; each delay has mean 0.25 and variance $1/48$. Hence $E[T]=500+99(0.25)=524.75$ and $\\operatorname{Var}(T)=2500+99/48=2502.0625$. A normal approximation gives $P(T\\le550)\\approx\\Phi((550-524.75)/\\sqrt{2502.0625})\\approx0.6931$. Do not include a replacement after the hundredth bulb has already failed.",
    "trap": "The delay adds to both the mean and the variance of each cycle; independence allows variances to add.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.8, PDF p. 419."
  },
  {
    "id": "w.prob.8.ross.prob.9",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.9: Sample size for gamma relative precision",
    "prompt": "Let X have a gamma distribution with parameters (n, 1). Using the central limit theorem, approximately how large must n be so that $P(|X/n - 1| > 0.01) < 0.01$?",
    "approach": "Represent Gamma(n,1) as the sum of n iid standard exponentials, standardize the sample mean $X/n$, and solve for n using the normal tail quantile.",
    "solution": "A Gamma(n, 1) random variable X can be viewed as the sum of n independent Exponential(1) variables, each having mean 1 and variance 1. Then $\\bar{X} = X/n$ has mean 1 and standard deviation $1/\\sqrt{n}$. By the CLT, $\\sqrt{n}(X/n - 1) \\approx Z \\sim N(0,1)$. The requirement $P(|X/n - 1| > 0.01) < 0.01$ is equivalent to $P(|Z| > 0.01\\sqrt{n}) < 0.01$, or $2[1 - \\Phi(0.01\\sqrt{n})] < 0.01$. Thus $\\Phi(0.01\\sqrt{n}) > 0.995$. From standard normal tables, $z_{0.005} \\approx 2.576$. Solving $0.01\\sqrt{n} \\ge 2.576$ gives $\\sqrt{n} \\ge 257.6$, which yields $n \\ge (257.6)^2 \\approx 66,358$.",
    "trap": "By comparison, Chebyshev's inequality would require $(1/n)/(0.01)^2 \\le 0.01 \\implies n \\ge 1,000,000$, which is about 15 times larger.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.9, PDF p. 419."
  },
  {
    "id": "w.prob.8.ross.prob.10",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.10: Bridge structural load limit",
    "prompt": "A bridge span can withstand a weight W normally distributed with mean 400 and standard deviation 40 (in thousands of pounds). Cars have independent weights with mean 3 and standard deviation 0.3. Approximately how many cars must be on the span for the probability of structural damage to exceed 0.10?",
    "approach": "Let $T_n$ be the total weight of n cars. Damage occurs when $T_n > W$. Form the difference $D_n = T_n - W$, find its mean and variance, and equate the normal tail to 0.10.",
    "solution": "Total car weight $T_n = \\sum_{i=1}^n C_i$ has mean $3n$ and variance $0.09n$. The bridge capacity $W \\sim N(400, 1600)$ is independent of the cars. Structural damage occurs when $T_n - W > 0$. The difference $D_n = T_n - W$ is approximately normal with mean $3n - 400$ and variance $0.09n + 1600$. We require $P(D_n > 0) > 0.10$. Standardizing: $P(Z > -(3n - 400)/\\sqrt{0.09n + 1600}) > 0.10$, which implies $(400 - 3n)/\\sqrt{0.09n + 1600} < 1.282$ (since $\\Phi(1.282) = 0.90$). Squaring or testing integer values: for $n = 116$, $(400 - 348)/\\sqrt{10.44 + 1600} = 52/40.13 = 1.296 > 1.282$. For $n = 117$, $(400 - 351)/\\sqrt{10.53 + 1600} = 49/40.13 = 1.221 < 1.282$. Thus approximately $n = 117$ cars are needed.",
    "trap": "The variance of the difference of independent variables is the sum of their variances: $\\operatorname{Var}(T_n - W) = \\operatorname{Var}(T_n) + \\operatorname{Var}(W)$.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.10, PDF p. 419."
  },
  {
    "id": "w.prob.8.ross.prob.11",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.11: Stock price ten-day bound",
    "prompt": "Daily changes in a company's stock price are independent with mean 0 and variance $\\sigma^2 = 1$. The price today is 100. What can be said about the probability that the price exceeds 105 after 10 days using (a) Chebyshev inequalities and (b) the central limit theorem?",
    "approach": "The price after 10 days is $Y_{10} = 100 + S_{10}$. Compute mean and variance of $S_{10}$, apply two-sided and one-sided Chebyshev, and compare with the normal approximation.",
    "solution": "The net change is $S_{10} = \\sum_{i=1}^{10} X_i$, with $E[S_{10}] = 0$ and $\\operatorname{Var}(S_{10}) = 10(1) = 10$. The event $Y_{10} > 105$ is $S_{10} > 5$. (a) Two-sided Chebyshev gives $P(S_{10} \\ge 5) \\le P(|S_{10}| \\ge 5) \\le 10/5^2 = 10/25 = 0.40$. One-sided Chebyshev gives $P(S_{10} \\ge 5) \\le 10 / (10 + 5^2) = 10/35 = 2/7 \\approx 0.2857$. (b) By the CLT, $S_{10}/\\sqrt{10} \\approx Z \\sim N(0,1)$. Then $P(S_{10} > 5) \\approx 1 - \\Phi(5/\\sqrt{10}) = 1 - \\Phi(1.581) \\approx 1 - 0.9431 = 0.0569$.",
    "trap": "One-sided Chebyshev improves the two-sided bound from 40% to 28.6%, while the CLT approximation estimates the actual probability near 5.7%.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1",
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.11, PDF pp. 419–420."
  },
  {
    "id": "w.prob.8.ross.prob.12",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.12: Sequential components with increasing means",
    "prompt": "One hundred components are used sequentially. Component i has mean lifetime $\\mu_i = 10 + i/10$ for $i = 1, \\ldots, 100$. Estimate the probability that total lifetime exceeds 1200 if components are (a) exponential, and (b) uniform on $(0, 20 + i/5)$.",
    "approach": "Compute the sum of means and sum of variances for both distributions and use the independent central limit theorem.",
    "solution": "Total mean is $\\mu_T = \\sum_{i=1}^{100} (10 + i/10) = 1000 + (1/10)(100 \\times 101/2) = 1000 + 505 = 1505$. (a) For exponential lifetimes, $\\operatorname{Var}(X_i) = \\mu_i^2 = (10 + i/10)^2 = 100 + 2i + i^2/100$. Total variance is $\\sum_{i=1}^{100} (100 + 2i + i^2/100) = 10000 + 2(5050) + (1/100)(100 \\times 101 \\times 201/6) = 10000 + 10100 + 3383.5 = 23483.5$, so $\\sigma_T = \\sqrt{23483.5} \\approx 153.24$. Then $P(T > 1200) \\approx P(Z > (1200 - 1505)/153.24) = P(Z > -1.99) = \\Phi(1.99) \\approx 0.9767$. (b) For Uniform$(0, 20 + i/5)$, mean is $(20 + i/5)/2 = 10 + i/10$ (same $\\mu_T = 1505$). Variance is $(20 + i/5)^2/12 = 4(10 + i/10)^2/12 = \\mu_i^2/3$. Total variance is $23483.5/3 \\approx 7827.83$, so $\\sigma_T = \\sqrt{7827.83} \\approx 88.47$. Then $P(T > 1200) \\approx P(Z > -305/88.47) = P(Z > -3.45) = \\Phi(3.45) \\approx 0.9997$.",
    "trap": "The uniform variance is $1/3$ the exponential variance for equal means, which tightens the distribution considerably.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.12, PDF pp. 419–420."
  },
  {
    "id": "w.prob.8.ross.prob.13",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.13: Comparing averages of two class sizes",
    "prompt": "Student exam scores have mean 74 and standard deviation 14. An instructor gives exams to two classes of sizes 25 and 64. Approximate: (a) $P(\\bar{X}_{25} > 80)$, (b) $P(\\bar{X}_{64} > 80)$, (c) $P(\\bar{X}_{64} - \\bar{X}_{25} > 2.2)$, and (d) $P(\\bar{X}_{25} - \\bar{X}_{64} > 2.2)$.",
    "approach": "Compute standard errors $\\sigma/\\sqrt{n}$ for both classes, standardize the single-class averages, and find the variance of the difference to evaluate parts (c) and (d).",
    "solution": "For class 1 ($n_1 = 25$): $\\operatorname{SE}_1 = 14/\\sqrt{25} = 2.8$. For class 2 ($n_2 = 64$): $\\operatorname{SE}_2 = 14/\\sqrt{64} = 1.75$. (a) $P(\\bar{X}_{25} > 80) = P(Z > (80 - 74)/2.8) = P(Z > 2.14) \\approx 1 - 0.9838 = 0.0162$. (b) $P(\\bar{X}_{64} > 80) = P(Z > (80 - 74)/1.75) = P(Z > 3.43) \\approx 1 - 0.9997 = 0.0003$. (c) Difference $D = \\bar{X}_{64} - \\bar{X}_{25}$ has mean $74 - 74 = 0$ and variance $2.8^2 + 1.75^2 = 7.84 + 3.0625 = 10.9025$, so $\\operatorname{SD}(D) = \\sqrt{10.9025} \\approx 3.3019$. Then $P(D > 2.2) = P(Z > 2.2/3.3019) = P(Z > 0.67) \\approx 1 - 0.7486 = 0.2514$. (d) By symmetry about 0, $P(\\bar{X}_{25} - \\bar{X}_{64} > 2.2) = P(-D > 2.2) \\approx 0.2514$.",
    "trap": "The variance of the difference of two independent averages is the sum of their individual variances.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.13, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.14",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.14: Critical component stock size",
    "prompt": "A critical electrical component has mean lifetime 100 hours and standard deviation 30 hours. How many components must be kept in stock so that the probability of continual operation for at least 2000 hours is at least 0.95?",
    "approach": "Set up the sum of n component lifetimes $S_n$, express $P(S_n \\ge 2000) \\ge 0.95$ using the CLT, and solve the quadratic inequality in $\\sqrt{n}$.",
    "solution": "Let $S_n = \\sum_{i=1}^n X_i$. Then $E[S_n] = 100n$ and $\\operatorname{Var}(S_n) = 900n$, so $\\sigma_n = 30\\sqrt{n}$. We require $P(S_n \\ge 2000) \\ge 0.95$, which standardizes to $(2000 - 100n)/(30\\sqrt{n}) \\le -1.645$. Multiplying by $30\\sqrt{n}$ gives $2000 - 100n \\le -49.35\\sqrt{n}$, or $100n - 49.35\\sqrt{n} - 2000 \\ge 0$. Let $u = \\sqrt{n}$. By the quadratic formula, $u \\ge (49.35 + \\sqrt{49.35^2 + 800000})/200 = (49.35 + 895.79)/200 = 4.7257$. Squaring yields $n \\ge (4.7257)^2 \\approx 22.33$. Rounding up to the next integer, $n = 23$ components are required.",
    "trap": "Do not divide 2000 by 100 to get 20; the stock must provide an extra safety buffer to cover random fluctuations.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.14, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.15",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.15: Insurance portfolio total claim tail",
    "prompt": "An insurance company has 10,000 policyholders. Yearly claims per policyholder have mean 240 dollars and standard deviation 800 dollars. Approximate the probability that total yearly claims exceed 2.7 million dollars.",
    "approach": "Calculate the portfolio total claim mean and standard deviation, standardize 2,700,000 dollars, and evaluate using normal tail probability.",
    "solution": "For $n = 10000$ policyholders, total claims $S = \\sum_{i=1}^{10000} X_i$ has mean $E[S] = 10000(240) = 2,400,000$ dollars. The variance is $\\operatorname{Var}(S) = 10000(800^2) = 6.4 \\times 10^9$, so $\\operatorname{SD}(S) = \\sqrt{6.4 \\times 10^9} = 80,000$ dollars. Standardizing 2.7 million gives $Z = (2,700,000 - 2,400,000)/80,000 = 300,000/80,000 = 3.75$. Therefore, $P(S > 2,700,000) \\approx 1 - \\Phi(3.75) \\approx 0.0001$.",
    "trap": "The standard deviation scales as $\\sqrt{n}\\sigma = 100 \\times 800 = 80,000$, not $10000 \\times 800$.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.15, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.16",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.16: Job processing race between two workers",
    "prompt": "A.J. has 20 sequential jobs with mean 50 min and sd 10 min each. M.J. has 20 sequential jobs with mean 52 min and sd 15 min each. Find: (a) $P(\\text{A.J. finishes} < 900\\text{ min})$, (b) $P(\\text{M.J. finishes} < 900\\text{ min})$, and (c) $P(\\text{A.J. finishes before M.J.})$.",
    "approach": "Compute means and variances for each worker's total time, standardize for individual thresholds, and evaluate the difference variable for the head-to-head comparison.",
    "solution": "Let $T_A = \\sum_{i=1}^{20} A_i$: $E[T_A] = 20(50) = 1000$, $\\operatorname{Var}(T_A) = 20(100) = 2000$, $\\sigma_A = \\sqrt{2000} \\approx 44.721$. Let $T_M = \\sum_{i=1}^{20} M_i$: $E[T_M] = 20(52) = 1040$, $\\operatorname{Var}(T_M) = 20(225) = 4500$, $\\sigma_M = \\sqrt{4500} \\approx 67.082$. (a) $P(T_A < 900) \\approx P(Z < (900 - 1000)/44.721) = P(Z < -2.236) = 1 - \\Phi(2.24) \\approx 0.0125$. (b) $P(T_M < 900) \\approx P(Z < (900 - 1040)/67.082) = P(Z < -2.087) = 1 - \\Phi(2.09) \\approx 0.0183$. (c) A.J. finishes before M.J. if $D = T_A - T_M < 0$. Here $E[D] = 1000 - 1040 = -40$, $\\operatorname{Var}(D) = 2000 + 4500 = 6500$, $\\sigma_D = \\sqrt{6500} \\approx 80.623$. Then $P(D < 0) = P(Z < (0 - (-40))/80.623) = \\Phi(40/80.623) = \\Phi(0.496) \\approx 0.6900$.",
    "trap": "Even though M.J.'s expected time is 40 minutes longer, his larger variance gives him a slightly higher chance of finishing under 900 minutes than A.J.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.16, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.17",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.17: Normal approximation for mixed-gender pairs",
    "prompt": "Redo Example 5b assuming the number of man-woman pairs X is approximately normal, with mean 50.25 and variance 25.13. Assess whether this normal approximation is reasonable.",
    "approach": "Apply the continuity correction to $X \\le 30$ and compare the normal tail probability with the Chebyshev bound.",
    "solution": "With $E[X] \\approx 50.25$ and $\\sigma = \\sqrt{25.13} \\approx 5.013$, the discrete event $X \\le 30$ maps under continuity correction to $X \\le 30.5$. The standardized score is $Z = (30.5 - 50.25)/5.013 = -19.75/5.013 \\approx -3.94$. The normal approximation gives $P(X \\le 30) \\approx \\Phi(-3.94) = 1 - \\Phi(3.94) \\approx 0.000041$. The supposition of approximate normality is reasonable for the bulk of the distribution because X is a sum of weakly dependent indicators. This tail is nearly four standard deviations from the mean. The CLT alone does not guarantee an accurate relative tail error here. Also X must be even, so the interval boundary between X=30 and X=32 is 31; an even-lattice correction gives approximately Φ((31−50.25)/5.013) ≈ 0.0000615. Both normal estimates should be treated cautiously; an exact calculation is needed to establish the true tail.",
    "trap": "The normal approximation yields $\\approx 0.00004$, far below the distribution-free upper bound of 0.058 from one-sided Chebyshev.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.17, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.18",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Problem 8.18: One-sided Chebyshev test score bound",
    "prompt": "A student's exam score X has mean 75 and variance 25. Repeat Problem 8.2(a) by using the one-sided Chebyshev inequality to bound $P(X \\ge 85)$, and contrast with Markov's bound.",
    "approach": "Use $P(X - \\mu \\ge a) \\le \\sigma^2/(\\sigma^2 + a^2)$ with $\\mu = 75, \\sigma^2 = 25, a = 10$.",
    "solution": "Here deviation $a = 85 - 75 = 10$. The one-sided Chebyshev inequality gives $P(X \\ge 85) = P(X - 75 \\ge 10) \\le \\frac{\\sigma^2}{\\sigma^2 + a^2} = \\frac{25}{25 + 10^2} = \\frac{25}{125} = \\frac{1}{5} = 0.20$. In Problem 8.2(a), Markov's inequality yielded $P(X \\ge 85) \\le 75/85 = 15/17 \\approx 0.8824$. Incorporating the variance sharpens the bound from 88.2% down to 20%.",
    "trap": "Markov uses only the mean; the one-sided Chebyshev inequality uses both the mean and the variance to provide a much tighter one-tailed bound.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, §8.5, Problem 8.18, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.19",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Problem 8.19: Coupon collector bounds on fishing trials",
    "prompt": "A lake has 4 equally likely fish species. Let Y be the number of fish caught to obtain at least one of each type. (a) Find an interval (a, b) such that $P(a \\le Y \\le b) \\ge 0.90$ using Chebyshev's inequality. (b) Use one-sided Chebyshev to find how many fish to plan on catching to be at least 90% certain of getting all 4 types.",
    "approach": "Express Y as the sum of independent geometric waiting times to find E[Y] and Var(Y), then apply two-sided and one-sided Chebyshev bounds.",
    "solution": "Let $Y = \\sum_{i=1}^4 X_i$, where $X_i \\sim \\text{Geom}(p_i)$ with $p_1 = 4/4 = 1, p_2 = 3/4, p_3 = 2/4, p_4 = 1/4$. Then $E[Y] = 1 + 4/3 + 2 + 4 = 25/3 \\approx 8.333$. Since the $X_i$ are independent, $\\operatorname{Var}(Y) = 0 + \\frac{1/4}{(3/4)^2} + \\frac{2/4}{(2/4)^2} + \\frac{3/4}{(1/4)^2} = 4/9 + 2 + 12 = 130/9 \\approx 14.444$, so $\\sigma = \\sqrt{130}/3 \\approx 3.7997$. (a) To guarantee $P(|Y - \\mu| < k\\sigma) \\ge 0.90$, choose $1 - 1/k^2 = 0.90 \\implies k = \\sqrt{10} \\approx 3.162$. Then $k\\sigma = \\sqrt{1300}/3 \\approx 12.0185$. The interval is $(\\mu - k\\sigma, \\mu + k\\sigma) = (8.333 - 12.019, 8.333 + 12.019) = (-3.69, 20.35)$. Since $Y \\ge 4$, the effective integer range is $[4, 20]$. (b) For 90% certainty of obtaining all 4 types, we require $P(Y \\le n) \\ge 0.90$, or $P(Y - \\mu \\ge n - \\mu) \\le 0.10$. One-sided Chebyshev gives $\\frac{\\sigma^2}{\\sigma^2 + (n - \\mu)^2} \\le 0.10 \\implies (n - \\mu)^2 \\ge 9\\sigma^2 \\implies n - \\mu \\ge 3\\sigma = 3(3.7997) \\approx 11.40$. Thus $n \\ge 8.333 + 11.40 = 19.73$. Planning on $n = 20$ fish guarantees at least 90% probability.",
    "trap": "The geometric distributions correspond to successful new species draws; their variances add because successive stages are independent.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, §8.5, Problem 8.19, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.20",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Problem 8.20: Jensen bounds for positive random variable",
    "prompt": "Let X be a nonnegative random variable with mean $E[X] = 25$. Use Jensen's inequality to bound: (a) $E[X^3]$, (b) $E[\\sqrt{X}]$, (c) $E[\\log X]$, and (d) $E[e^{-X}]$. For the logarithm, require X>0 almost surely and a well-defined expected logarithm.",
    "approach": "Determine the second derivative and convexity of each transformation, then apply Jensen's inequality.",
    "solution": "(a) For $f(x) = x^3$ on $x \\ge 0$, $f''(x) = 6x \\ge 0$, so $f$ is convex. By Jensen's inequality, $E[X^3] \\ge (E[X])^3 = 25^3 = 15,625$. (b) For $f(x) = \\sqrt{x}$, $f''(x) = -1/(4x^{3/2}) \\le 0$, so $f$ is concave. Thus $E[\\sqrt{X}] \\le \\sqrt{E[X]} = \\sqrt{25} = 5$. (c) For $f(x) = \\log x$, $f''(x) = -1/x^2 < 0$, so $f$ is concave. Thus $E[\\log X] \\le \\log(E[X]) = \\log 25$. (d) For $f(x) = e^{-x}$, $f''(x) = e^{-x} > 0$, so $f$ is convex. Thus $E[e^{-X}] \\ge e^{-E[X]} = e^{-25}$. If X can be zero, log X is not a finite real value there. With log 0 = −∞ the upper bound can be understood in the extended sense, but a finite logarithmic expectation needs an additional assumption.",
    "trap": "Check whether the function curves upward (convex) or downward (concave) to set the correct inequality sign.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Problem 8.20, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.21",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Problem 8.21: Monotonicity of power means via Jensen",
    "prompt": "Let X be a nonnegative random variable. Prove that $E[X] \\le (E[X^2])^{1/2} \\le (E[X^3])^{1/3} \\le \\cdots$ using Jensen's inequality.",
    "approach": "For any integers $1 \\le j < k$, consider the convex transformation $g(u) = u^{k/j}$ applied to $Y = X^j$.",
    "solution": "Let $j < k$ be positive integers and define $g(u) = u^{k/j}$ for $u \\ge 0$. Since $k/j > 1$, $g''(u) = \\frac{k}{j}(\\frac{k}{j} - 1) u^{k/j - 2} \\ge 0$, so $g$ is convex. Let $Y = X^j$. Applying Jensen's inequality to $g(Y)$: $g(E[Y]) \\le E[g(Y)]$. Substituting $Y = X^j$ yields $(E[X^j])^{k/j} \\le E[(X^j)^{k/j}] = E[X^k]$. Taking the $(1/k)$-th power on both sides gives $(E[X^j])^{1/j} \\le (E[X^k])^{1/k}$. Setting $j = 1, 2, \\ldots$ yields $E[X] \\le (E[X^2])^{1/2} \\le (E[X^3])^{1/3} \\le \\cdots$.",
    "trap": "The exponent $k/j$ must exceed 1 to ensure that $g(u) = u^{k/j}$ is convex on $[0, \\infty)$.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Problem 8.21, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.22",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Problem 8.22: Split investment under risk-averse utility",
    "prompt": "In the setting of Example 5f, suppose the investor can divide her wealth, investing fraction $\\alpha \\in (0,1)$ in the risky venture (return X with mean m) and $1 - \\alpha$ in the risk-free asset (return m). Show that for a strictly concave utility function, the investor strictly prefers the pure risk-free asset to any split, but prefers a split to the 100% risky venture.",
    "approach": "Evaluate the expected utility of $R_\\alpha = \\alpha X + (1 - \\alpha)m$ using strict concavity of u and Jensen's inequality.",
    "solution": "The split return is $R_\\alpha = \\alpha X + (1 - \\alpha)m$. Its expectation is $E[R_\\alpha] = \\alpha E[X] + (1 - \\alpha)m = m$. Because $u$ is strictly concave, Jensen's inequality gives $E[u(R_\\alpha)] < u(E[R_\\alpha]) = u(m)$ for any non-degenerate X. Thus the 100% risk-free choice ($\\alpha = 0$) achieves the strictly highest expected utility $u(m)$. On the other hand, by definition of strict concavity for $\\alpha \\in (0,1)$, $u(\\alpha X + (1 - \\alpha)m) > \\alpha u(X) + (1 - \\alpha)u(m)$. Taking expectations yields $E[u(R_\\alpha)] > \\alpha E[u(X)] + (1 - \\alpha)u(m) > E[u(X)]$ because $u(m) > E[u(X)]$. Thus diversifying is strictly superior to investing entirely in the risky asset.",
    "trap": "Diversification reduces risk and improves expected utility over pure risk, but does not surpass the guaranteed risk-free asset when their means are identical.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Problem 8.22, PDF p. 420."
  },
  {
    "id": "w.prob.8.ross.prob.23",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Problem 8.23: Comparative bounds for Poisson tail",
    "prompt": "Let X be a Poisson random variable with mean 20. Bound or approximate $p = P(X \\ge 26)$ using: (a) Markov's inequality, (b) one-sided Chebyshev, (c) Chernoff bound, (d) central limit theorem, and (e) exact calculation.",
    "approach": "Calculate each bound sequentially using mean 20, variance 20, MGF optimization, continuity-corrected normal tail, and Poisson summation.",
    "solution": "(a) Markov gives $P(X\\ge26)\\le20/26\\approx0.7692$. (b) The one-sided variance bound gives $20/(20+6^2)=5/14\\approx0.3571$. (c) The Chernoff formula is $\\exp(26-20-26\\log(26/20))\\approx0.4398$. It is valid but, for this threshold, less sharp than the one-sided variance bound. (d) A normal approximation with continuity correction gives $1-\\Phi((25.5-20)/\\sqrt{20})\\approx0.1094$. (e) The exact tail is $1-\\sum_{k=0}^{25}e^{-20}20^k/k!\\approx0.1122$. Bounds are guarantees; normal approximation is an estimate. Different bounds need not rank in the same order for every threshold.",
    "trap": "Chernoff is a provable mathematical upper bound (0.1457), whereas CLT is an asymptotic approximation (0.1093); both dramatically outperform Markov and Chebyshev.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1",
      "c.prob.8.5.2",
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, §8.5, Problem 8.23, PDF pp. 420–421."
  },
  {
    "id": "w.prob.8.ross.prob.24",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Problem 8.24: Order of magnitude of Poisson(100) tail",
    "prompt": "If X is a Poisson random variable with mean 100, which value is $P(X > 120)$ closest to: (a) 0.02, (b) 0.50, or (c) 0.30?",
    "approach": "Use the normal approximation with mean 100 and standard deviation 10 to identify the correct option.",
    "solution": "For $X \\sim \\operatorname{Poisson}(100)$, $E[X] = 100$ and $\\operatorname{SD}(X) = \\sqrt{100} = 10$. The event $X > 120$ corresponds to $X \\ge 121$. With continuity correction, standardizing gives $Z = (120.5 - 100)/10 = 2.05$. Then $P(X > 120) \\approx 1 - \\Phi(2.05) \\approx 1 - 0.9798 = 0.0202$. This matches choice (a) 0.02.",
    "trap": "Without calculating, some guess 0.30 or 0.50; 20 units above mean 100 is 2 full standard deviations, placing it in the 2% tail.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Problem 8.24, PDF p. 421."
  },
  {
    "id": "w.prob.8.ross.prob.25",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Ross Problem 8.25: Pareto 80-20 income distribution",
    "prompt": "Earnings follow a Pareto law with parameter $\\lambda = \\frac{\\log 5}{\\log 4} \\approx 1.161$. (a) Show that the top 20% of earners receive 80% of total earnings. (b) Show that the top 20% of that top 20% (the top 4% overall) earn 80% of the top 20%'s earnings (64% of total earnings).",
    "approach": "Use the Pareto Lorenz identity $1 - L(p) = (1-p)^{(\\lambda - 1)/\\lambda}$ from Example 7c and evaluate at selected percentiles.",
    "solution": "From Example 7c, the fraction of income earned by the top $1-p$ proportion of the population is $1 - L(p) = (1-p)^{(\\lambda - 1)/\\lambda}$. Here $\\frac{\\lambda - 1}{\\lambda} = 1 - \\frac{1}{\\lambda} = 1 - \\frac{\\log 4}{\\log 5} = \\frac{\\log 5 - \\log 4}{\\log 5} = \\frac{\\log(5/4)}{\\log 5}$. (a) For the top 20%, let $1 - p = 0.20 = 1/5$. Then $1 - L(0.80) = (1/5)^{\\frac{\\log(5/4)}{\\log 5}} = 5^{-\\frac{\\log(5/4)}{\\log 5}} = (5^{\\frac{1}{\\log 5}})^{-\\log(5/4)} = e^{-\\ln(5/4)} = 4/5 = 0.80$. Thus the top 20% earn 80% of total income. (b) The top 20% of the top 20% corresponds to overall share $1 - p = (0.20)(0.20) = 0.04 = 1/25$. Then $1 - L(0.96) = (1/25)^{\\frac{\\log(5/4)}{\\log 5}} = [(1/5)^{\\frac{\\log(5/4)}{\\log 5}}]^2 = (4/5)^2 = 16/25 = 0.64$. As a proportion of the top 20%'s income: $0.64 / 0.80 = 0.80$ (80%).",
    "trap": "The Pareto distribution is scale invariant, so its inequality exponent applies recursively inside any upper quantile bracket.",
    "tests": [
      "c.prob.8.7.1"
    ],
    "provenance": "Ross, 10e, §8.7, Problem 8.25, PDF p. 421."
  },
  {
    "id": "w.prob.8.ross.prob.26",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Problem 8.26: Opposite monotonicity covariance inequality",
    "prompt": "Let X be a random variable. If f is nondecreasing and g is nonincreasing, prove that $E[f(X)g(X)] \\le E[f(X)] E[g(X)]$.",
    "approach": "Introduce an independent identical copy Y of X and consider $(f(X) - f(Y))(g(X) - g(Y)) \\le 0$.",
    "solution": "Let Y be an independent random variable with the same distribution as X. If $X > Y$, then $f(X) \\ge f(Y)$ (since f is nondecreasing) and $g(X) \\le g(Y)$ (since g is nonincreasing), so $(f(X) - f(Y))(g(X) - g(Y)) \\le 0$. If $X < Y$, then $f(X) \\le f(Y)$ and $g(X) \\ge g(Y)$, so the product is again nonpositive. Thus $(f(X) - f(Y))(g(X) - g(Y)) \\le 0$ holds with probability 1. Taking expectations: $E[(f(X) - f(Y))(g(X) - g(Y))] \\le 0$. Expanding: $E[f(X)g(X)] - E[f(X)g(Y)] - E[f(Y)g(X)] + E[f(Y)g(Y)] \\le 0$. By independence and identical distribution, $E[f(X)g(Y)] = E[f(Y)g(X)] = E[f(X)]E[g(X)]$, and $E[f(Y)g(Y)] = E[f(X)g(X)]$. Thus $2E[f(X)g(X)] - 2E[f(X)]E[g(X)] \\le 0$, yielding $E[f(X)g(X)] \\le E[f(X)] E[g(X)]$.",
    "trap": "When both functions have the same monotonicity direction the covariance is $\\ge 0$; with opposite directions it is $\\le 0$.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Problem 8.26, PDF p. 421."
  },
  {
    "id": "w.prob.8.ross.prob.27",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Ross Problem 8.27: Lorenz curve conditional expectation identity",
    "prompt": "Let L(p) be the Lorenz curve associated with a continuous positive random variable X. Prove that $L(p) = \\frac{E[X \\mid X < \\xi_p] p}{E[X]}$, where $\\xi_p$ is the p-th quantile.",
    "approach": "Apply the definition $L(p) = E[X \\mathbf{1}_{X \\le \\xi_p}] / E[X]$ and compute the numerator by conditioning on the event $X < \\xi_p$.",
    "solution": "By definition, $L(p) = \\frac{E[X \\mathbf{1}_{\\{X < \\xi_p\\}}]}{E[X]}$. Let A be the event $\\{X < \\xi_p\\}$. For continuous X, $P(A) = F(\\xi_p) = p$. By the law of total expectation: $E[X \\mathbf{1}_A] = E[X \\mathbf{1}_A \\mid A] P(A) + E[X \\mathbf{1}_A \\mid A^c] P(A^c) = E[X \\mid X < \\xi_p] p + 0 = p E[X \\mid X < \\xi_p]$. Dividing by $E[X]$ yields $L(p) = \\frac{E[X \\mid X < \\xi_p] p}{E[X]}$.",
    "trap": "The indicator $\\mathbf{1}_A$ is zero on $A^c$, so the second conditional expectation term vanishes completely.",
    "tests": [
      "c.prob.8.7.1"
    ],
    "provenance": "Ross, 10e, §8.7, Problem 8.27, PDF p. 421."
  },
  {
    "id": "w.prob.8.ross.prob.28",
    "course": "prob",
    "sec": "8.7",
    "marks": 4,
    "title": "Ross Problem 8.28: Transformations of the Lorenz curve",
    "prompt": "Let L(p) be the Lorenz curve of X. For constant $c > 0$: (a) Find the Lorenz curve of $cX$. (b) Show the Lorenz curve of $X + c$ is $L_c(p) = \\frac{L(p)E[X] + pc}{E[X] + c}$. (c) Verify that (b) matches Example 7a when $X \\sim \\text{Uniform}(0, b-a)$ and $c = a$.",
    "approach": "Determine quantile shifts and scaled expectations under affine transformations $cX$ and $X+c$, then substitute into the uniform Lorenz formula.",
    "solution": "(a) For $Y = cX$, quantile $\\xi_p(Y) = c\\xi_p(X)$ and $E[Y] = cE[X]$. Then $E[Y \\mathbf{1}_{Y \\le c\\xi_p}] = cE[X \\mathbf{1}_{X \\le \\xi_p}]$. Dividing by $cE[X]$ gives $L_{cX}(p) = L_X(p)$; the Lorenz curve is scale invariant. (b) For $Y = X + c$, $\\xi_p(Y) = \\xi_p(X) + c$ and $E[Y] = E[X] + c$. Then $E[(X+c) \\mathbf{1}_{X+c \\le \\xi_p+c}] = E[X \\mathbf{1}_{X \\le \\xi_p}] + c P(X \\le \\xi_p) = L(p)E[X] + pc$. Dividing by $E[Y]$ yields $L_c(p) = \\frac{L(p)E[X] + pc}{E[X] + c}$. (c) Let $X \\sim \\text{Uniform}(0, b-a)$ with $c = a$. Then $X + a \\sim \\text{Uniform}(a, b)$. For $X$, $E[X] = (b-a)/2$ and $L(p) = p^2$. Formula (b) gives $L_a(p) = \\frac{p^2 (b-a)/2 + pa}{(b-a)/2 + a} = \\frac{p^2(b-a) + 2pa}{b-a + 2a} = \\frac{2pa + (b-a)p^2}{a+b}$, in exact agreement with Example 7a.",
    "trap": "Adding a constant c equalizes relative distribution because it adds a larger percentage to lower incomes than to higher incomes, pulling $L_c(p)$ closer to the line of equality $p$.",
    "tests": [
      "c.prob.8.7.1"
    ],
    "provenance": "Ross, 10e, §8.7, Problem 8.28, PDF p. 421."
  },
  {
    "id": "w.prob.8.ross.te.1",
    "course": "prob",
    "sec": "8.2",
    "marks": 3,
    "title": "Ross Theoretical Exercise 8.1: Chebyshev in standard deviation units",
    "prompt": "If X has mean $\\mu$ and strictly positive finite standard deviation $\\sigma$, prove that $P(|X - \\mu| \\ge k\\sigma) \\le 1/k^2$ for any $k > 0$.",
    "approach": "Set threshold distance $c = k\\sigma$ in Chebyshev's inequality $P(|X - \\mu| \\ge c) \\le \\sigma^2/c^2$.",
    "solution": "By Chebyshev's inequality, for any positive cutoff $c > 0$, $P(|X - \\mu| \\ge c) \\le \\frac{\\sigma^2}{c^2}$. Setting $c = k\\sigma$ where $k > 0$: $P(|X - \\mu| \\ge k\\sigma) \\le \\frac{\\sigma^2}{(k\\sigma)^2} = \\frac{\\sigma^2}{k^2\\sigma^2} = \\frac{1}{k^2}$. This expresses Chebyshev's inequality directly in units of standard deviation from the mean.",
    "trap": "The bound $1/k^2$ depends only on the number of standard deviations k, independent of both $\\mu$ and $\\sigma$.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Theoretical Exercise 8.1, PDF p. 422."
  },
  {
    "id": "w.prob.8.ross.te.2",
    "course": "prob",
    "sec": "8.2",
    "marks": 4,
    "title": "Ross Theoretical Exercise 8.2: Signal-to-noise ratio and relative deviation",
    "prompt": "Let X have mean $\\mu \\ne 0$ and strictly positive finite standard deviation $\\sigma$. The measurement signal-to-noise ratio is $r = |\\mu|/\\sigma$. Define the relative deviation from the signal as $D = |(X - \\mu)/\\mu|$. Prove that for any $\\alpha > 0$, $P(D \\le \\alpha) \\ge 1 - \\frac{1}{r^2\\alpha^2}$.",
    "approach": "Convert the condition $D \\le \\alpha$ into a deviation condition on $|X - \\mu|$ and apply Chebyshev's inequality.",
    "solution": "The event $D \\le \\alpha$ is equivalent to $|(X - \\mu)/\\mu| \\le \\alpha$, or $|X - \\mu| \\le \\alpha|\\mu|$. Consider the complement event $|X - \\mu| > \\alpha|\\mu|$. By Chebyshev's inequality with cutoff $c = \\alpha|\\mu|$: $P(|X - \\mu| > \\alpha|\\mu|) \\le P(|X - \\mu| \\ge \\alpha|\\mu|) \\le \\frac{\\sigma^2}{(\\alpha|\\mu|)^2} = \\frac{1}{(|\\mu|/\\sigma)^2 \\alpha^2} = \\frac{1}{r^2\\alpha^2}$. Taking complements yields $P(D \\le \\alpha) \\ge 1 - \\frac{1}{r^2\\alpha^2}$. A higher signal-to-noise ratio r guarantees that relative deviations from the mean are confined to small intervals with high probability.",
    "trap": "Remember $r = |\\mu|/\\sigma$, so $\\sigma^2/\\mu^2 = 1/r^2$.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Theoretical Exercise 8.2, PDF p. 422."
  },
  {
    "id": "w.prob.8.ross.te.3",
    "course": "prob",
    "sec": "8.2",
    "marks": 5,
    "title": "Ross Theoretical Exercise 8.3: Signal-to-noise ratios of standard distributions",
    "prompt": "Compute the measurement signal-to-noise ratio $r = |\\mu|/\\sigma$ for: (a) Poisson($\\lambda$), (b) Binomial(n,p), (c) Geometric(p) with mean $1/p$, (d) Uniform(a,b) with $0 \\le a < b$, (e) Exponential($\\lambda$), and (f) Normal($\\mu, \\sigma^2$).",
    "approach": "Retrieve the mean and variance for each distribution and compute $|E[X]|/\\sqrt{\\operatorname{Var}(X)}$.",
    "solution": "(a) Poisson($\\lambda$): $\\mu = \\lambda, \\sigma = \\sqrt{\\lambda}$, so $r = \\lambda/\\sqrt{\\lambda} = \\sqrt{\\lambda}$. (b) Binomial(n,p): $\\mu = np, \\sigma = \\sqrt{np(1-p)}$, so $r = np/\\sqrt{np(1-p)} = \\sqrt{\\frac{np}{1-p}}$. (c) Geometric(p) on $\\{1,2,\\ldots\\}$: $\\mu = 1/p, \\sigma^2 = (1-p)/p^2$, so $\\sigma = \\sqrt{1-p}/p$, giving $r = (1/p)/(\\sqrt{1-p}/p) = 1/\\sqrt{1-p}$. (d) Uniform(a,b): $\\mu = (a+b)/2, \\sigma = (b-a)/\\sqrt{12}$, so $r = \\frac{(a+b)/2}{(b-a)/(2\\sqrt{3})} = \\sqrt{3}\\frac{a+b}{b-a}$. (e) Exponential($\\lambda$): $\\mu = 1/\\lambda, \\sigma = 1/\\lambda$, so $r = (1/\\lambda)/(1/\\lambda) = 1$. (f) Normal($\\mu, \\sigma^2$): $r = |\\mu|/\\sigma$.",
    "trap": "For the exponential distribution, the signal-to-noise ratio is identically 1 regardless of the parameter $\\lambda$.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Theoretical Exercise 8.3, PDF p. 422."
  },
  {
    "id": "w.prob.8.ross.te.4",
    "course": "prob",
    "sec": "8.2",
    "marks": 5,
    "title": "Ross Theoretical Exercise 8.4: Continuous mapping for convergence in probability",
    "prompt": "Let $Z_n$ be a sequence of random variables and c a constant such that for each $\\epsilon > 0$, $P(|Z_n - c| > \\epsilon) \\to 0$ as $n \\to \\infty$. Prove that for any bounded continuous function g, $E[g(Z_n)] \\to g(c)$ as $n \\to \\infty$.",
    "approach": "Split the expectation into two regions: within $\\delta$ of c (controlled by continuity) and beyond $\\delta$ of c (controlled by convergence in probability and boundedness).",
    "solution": "Because g is bounded, let $|g(x)| \\le M$ for all x. Given any $\\epsilon > 0$, continuity of g at c implies there exists $\\delta > 0$ such that $|x - c| \\le \\delta \\implies |g(x) - g(c)| \\le \\epsilon/2$. Now decompose the error: $|E[g(Z_n)] - g(c)| \\le E[|g(Z_n) - g(c)|] = E[|g(Z_n) - g(c)| \\mathbf{1}_{\\{|Z_n - c| \\le \\delta\\}}] + E[|g(Z_n) - g(c)| \\mathbf{1}_{\\{|Z_n - c| > \\delta\\}}] \\le (\\epsilon/2) P(|Z_n - c| \\le \\delta) + 2M P(|Z_n - c| > \\delta) \\le \\epsilon/2 + 2M P(|Z_n - c| > \\delta)$. Since $Z_n \\to c$ in probability, $P(|Z_n - c| > \\delta) \\to 0$. Thus there exists N such that for all $n \\ge N$, $2M P(|Z_n - c| > \\delta) < \\epsilon/2$. Hence for all $n \\ge N$, $|E[g(Z_n)] - g(c)| < \\epsilon$, proving $E[g(Z_n)] \\to g(c)$.",
    "trap": "Boundedness of g is crucial to prevent rare extreme values of $Z_n$ from distorting the expectation limit.",
    "tests": [
      "c.prob.8.2.2"
    ],
    "provenance": "Ross, 10e, §8.2, Theoretical Exercise 8.4, PDF p. 422."
  },
  {
    "id": "w.prob.8.ross.te.5",
    "course": "prob",
    "sec": "8.2",
    "marks": 5,
    "title": "Ross Theoretical Exercise 8.5: Probabilistic proof of Weierstrass approximation",
    "prompt": "For a continuous function f on [0, 1], define the Bernstein polynomial $B_n(x) = \\sum_{k=0}^n f(k/n) \\binom{n}{k} x^k (1-x)^{n-k}$. Prove that $\\lim_{n \\to \\infty} B_n(x) = f(x)$ for all $x \\in [0, 1]$.",
    "approach": "Recognize $B_n(x)$ as $E[f(S_n/n)]$ where $S_n \\sim \\text{Binomial}(n,x)$, show $S_n/n \\to x$ in probability via Chebyshev, and apply Theoretical Exercise 8.4.",
    "solution": "Let $X_1, \\ldots, X_n$ be iid Bernoulli$(x)$ random variables, so $S_n = \\sum_{i=1}^n X_i \\sim \\operatorname{Binomial}(n, x)$. Then $P(S_n = k) = \\binom{n}{k} x^k (1-x)^{n-k}$. The average $\\bar{X}_n = S_n/n$ takes value $k/n$ with this probability, so $B_n(x) = E[f(S_n/n)]$. The mean is $E[\\bar{X}_n] = x$ and variance is $\\operatorname{Var}(\\bar{X}_n) = x(1-x)/n \\le 1/(4n)$. By Chebyshev's inequality, for any $\\epsilon > 0$, $P(|\\bar{X}_n - x| > \\epsilon) \\le \\frac{x(1-x)}{n\\epsilon^2} \\le \\frac{1}{4n\\epsilon^2} \\to 0$ as $n \\to \\infty$, so $\\bar{X}_n \\to x$ in probability. Because f is continuous on the compact interval $[0, 1]$, f is bounded. Applying Theoretical Exercise 8.4 directly yields $\\lim_{n \\to \\infty} E[f(\\bar{X}_n)] = f(x)$, establishing $\\lim_{n \\to \\infty} B_n(x) = f(x)$.",
    "trap": "The Bernstein polynomial is an expectation of a function of a binomial average; the weak law guarantees that the average concentrates at x.",
    "tests": [
      "c.prob.8.2.2"
    ],
    "provenance": "Ross, 10e, §8.2, Theoretical Exercise 8.5, PDF p. 422."
  },
  {
    "id": "w.prob.8.ross.te.6",
    "course": "prob",
    "sec": "8.2",
    "marks": 5,
    "title": "Ross Theoretical Exercise 8.6: Density bounds from monotone tails",
    "prompt": "(a) Let X be a discrete random variable on positive integers $\\{1, 2, \\ldots\\}$. If $P(X=k)$ is nonincreasing in k, prove that $P(X=k) \\le 2E[X]/k^2$. (b) Let X be a continuous nonnegative random variable with a nonincreasing density $f(x)$. Prove that $f(x) \\le 2E[X]/x^2$ for all $x > 0$.",
    "approach": "Bound the expectation from below by truncating the sum or integral at k (or x) and pulling out the minimal probability value.",
    "solution": "(a) For discrete X, since $p_i = P(X=i)$ is nonincreasing, $p_i \\ge p_k$ for every $1 \\le i \\le k$. Then: $E[X] = \\sum_{i=1}^\\infty i p_i \\ge \\sum_{i=1}^k i p_i \\ge p_k \\sum_{i=1}^k i = p_k \\frac{k(k+1)}{2} \\ge p_k \\frac{k^2}{2}$. Multiplying by 2 and dividing by $k^2$ gives $P(X=k) \\le \\frac{2E[X]}{k^2}$. (b) For continuous nonnegative X with nonincreasing density $f$, $f(t) \\ge f(x)$ for all $0 \\le t \\le x$. Then: $E[X] = \\int_0^\\infty t f(t) dt \\ge \\int_0^x t f(t) dt \\ge f(x) \\int_0^x t dt = f(x) [t^2/2]_0^x = f(x) \\frac{x^2}{2}$. Therefore $f(x) \\le \\frac{2E[X]}{x^2}$ for all $x > 0$.",
    "trap": "The factor 2 comes from the integral/sum of the linear factor $t$ (or $i$), which averages to $x/2$ (or $(k+1)/2$) over the interval.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, §8.2, Theoretical Exercise 8.6, PDF p. 422."
  },
  {
    "id": "w.prob.8.ross.te.7",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Theoretical Exercise 8.7: Normal approximation for dice product",
    "prompt": "A fair die is rolled 100 times, producing outcomes $X_1, \\ldots, X_{100}$. For $1 < a < 6$, compute an approximation for $P(\\prod_{i=1}^{100} X_i \\le a^{100})$.",
    "approach": "Take natural logarithms to convert the product into a sum of iid variables $Y_i = \\ln X_i$, compute the mean and variance of $Y_i$, and apply the CLT.",
    "solution": "Taking logarithms: $\\prod_{i=1}^{100} X_i \\le a^{100} \\iff \\sum_{i=1}^{100} \\ln X_i \\le 100 \\ln a$. Let $Y_i = \\ln X_i$ for $i = 1, \\ldots, 100$. Each $Y_i$ takes values $\\ln 1, \\ln 2, \\ldots, \\ln 6$ each with probability $1/6$. Mean: $\\mu = \\frac{1}{6} \\sum_{k=1}^6 \\ln k = \\frac{1}{6} \\ln(720) \\approx 1.09654$. Second moment: $E[Y_i^2] = \\frac{1}{6} \\sum_{k=1}^6 (\\ln k)^2 = \\frac{1}{6}[0 + (0.69315)^2 + (1.09861)^2 + (1.38629)^2 + (1.60944)^2 + (1.79176)^2] = \\frac{1}{6}[0 + 0.48045 + 1.20695 + 1.92181 + 2.59031 + 3.21040] = \\frac{9.40992}{6} \\approx 1.56832$. Variance: $\\sigma^2 = E[Y_i^2] - \\mu^2 = 1.56832 - (1.09654)^2 = 1.56832 - 1.20240 = 0.36592$, so $\\sigma \\approx 0.6049$. For the sum $S = \\sum_{i=1}^{100} Y_i$, $E[S] = 100\\mu \\approx 109.654$ and $\\operatorname{SD}(S) = 10\\sigma \\approx 6.049$. By the CLT: $P(\\prod_{i=1}^{100} X_i \\le a^{100}) = P(S \\le 100\\ln a) \\approx \\Phi\\left(\\frac{100\\ln a - 109.654}{6.049}\\right)$.",
    "trap": "Do not average the $X_i$ directly; a product of positive random variables standardizes via the sum of their logarithms.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, §8.3, Theoretical Exercise 8.7, PDF pp. 422–423."
  },
  {
    "id": "w.prob.8.ross.te.8",
    "course": "prob",
    "sec": "8.3",
    "marks": 3,
    "title": "Ross Theoretical Exercise 8.8: Asymptotic normality of gamma distribution",
    "prompt": "Explain why a gamma random variable with parameters $(t, \\lambda)$ has an approximately normal distribution when t is large.",
    "approach": "Decompose an integer-parameter gamma variable into a sum of independent exponentials and apply the central limit theorem.",
    "solution": "When t is a positive integer n, a Gamma$(n, \\lambda)$ random variable X represents the arrival time of the n-th event in a Poisson process of rate $\\lambda$. Therefore $X = \\sum_{i=1}^n T_i$, where the $T_i$ are independent and identically distributed Exponential$(\\lambda)$ random variables. Each $T_i$ has finite mean $\\mu = 1/\\lambda$ and finite variance $\\sigma^2 = 1/\\lambda^2 > 0$. By the classical Central Limit Theorem, the standardized sum $\\frac{X - n/\\lambda}{\\sqrt{n}/\\lambda}$ converges in distribution to $N(0, 1)$ as $n \\to \\infty$. For non-integer large t, write $t = \\lfloor t \\rfloor + \\{t\\}$; represent X as the independent sum of Gamma(floor(t), λ) and Gamma(t−floor(t), λ). The second variable has mean at most 1/λ and variance at most 1/λ², so after division by √t/λ its contribution tends to zero in probability. Its value need not be bounded. This extends the same normal limit to noninteger shapes.",
    "trap": "The approximation holds for large shape parameter t, regardless of the rate parameter $\\lambda$.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, §8.3, Theoretical Exercise 8.8, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.9",
    "course": "prob",
    "sec": "8.4",
    "marks": 4,
    "title": "Ross Theoretical Exercise 8.9: SLLN swamps but does not compensate",
    "prompt": "A fair coin is tossed 1000 times. If the first 100 tosses all yield heads, what proportion of heads is expected on the final 900 tosses? Explain the aphorism 'The strong law of large numbers swamps but does not compensate.'",
    "approach": "Apply independence of trials for the remaining tosses, compute total expected heads, and explain why the running average converges without biased future trials.",
    "solution": "Because coin tosses are independent, past outcomes have no effect on future tosses. The expected proportion of heads on the remaining 900 tosses is exactly $1/2 = 0.50$ (450 heads). Across the entire 1000 tosses, the total expected heads is $100 + 450 = 550$, giving an overall proportion of $550/1000 = 0.55$. The statement 'The strong law swamps but does not compensate' highlights a widespread misconception (the 'gambler's fallacy'). The law of large numbers does not 'compensate' by producing an excess of tails to cancel the 50 extra heads. Instead, the fixed initial surplus of 50 heads is 'swamped' by being divided by a larger and larger denominator n: as $n \\to \\infty$, $(100 + 0.5(n-100))/n = 0.5 + 50/n \\to 0.5$.",
    "trap": "The law of large numbers operates by dilution across a growing sample size, never by a compensating bias in future trials.",
    "tests": [
      "c.prob.8.4.1"
    ],
    "provenance": "Ross, 10e, §8.4, Theoretical Exercise 8.9, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.10",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Theoretical Exercise 8.10: Poisson Chernoff lower-tail bound",
    "prompt": "Let X be a Poisson random variable with mean $\\lambda$. For an integer $0 < i < \\lambda$, prove the Chernoff lower-tail bound $P(X \\le i) \\le e^{-\\lambda} \\frac{(e\\lambda)^i}{i^i}$.",
    "approach": "For $t < 0$, apply Markov's inequality to $e^{tX}$, substitute the Poisson MGF, and optimize over negative t.",
    "solution": "For any $t < 0$, $X \\le i \\iff e^{tX} \\ge e^{ti}$. By Markov's inequality: $P(X \\le i) = P(e^{tX} \\ge e^{ti}) \\le e^{-ti} E[e^{tX}] = e^{-ti} \\exp(\\lambda(e^t - 1))$. To find the optimal bound, minimize the exponent $h(t) = \\lambda(e^t - 1) - ti$. Differentiating gives $h'(t) = \\lambda e^t - i = 0$, so $e^t = i/\\lambda$, which gives $t = \\ln(i/\\lambda)$. Because $i < \\lambda$, $i/\\lambda < 1$, so $t = \\ln(i/\\lambda) < 0$, which is in the valid domain. Substituting $e^t = i/\\lambda$ and $t = \\ln(i/\\lambda)$ into the bound: $\\exp(\\lambda(i/\\lambda - 1) - i\\ln(i/\\lambda)) = \\exp(i - \\lambda) (\\lambda/i)^i = e^{-\\lambda} e^i (\\lambda/i)^i = e^{-\\lambda} \\frac{(e\\lambda)^i}{i^i}$. At i=0 the tail is exactly P(X=0)=exp(−λ); obtain that case directly or by the limiting convention.",
    "trap": "For lower tails, the parameter t must be negative, which is precisely satisfied when $i < \\lambda$ so that $\\ln(i/\\lambda) < 0$.",
    "tests": [
      "c.prob.8.5.2"
    ],
    "provenance": "Ross, 10e, §8.5, Theoretical Exercise 8.10, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.11",
    "course": "prob",
    "sec": "8.5",
    "marks": 5,
    "title": "Ross Theoretical Exercise 8.11: Binomial Chernoff bound derivation",
    "prompt": "Let X be a Binomial(n, p) random variable. For an integer $np < i < n$, with 0 < p < 1, show that: (a) the minimum of $e^{-ti} E[e^{tX}]$ occurs when $e^t = \\frac{i(1-p)}{(n-i)p}$, and (b) the resulting Chernoff bound is $P(X \\ge i) \\le \\left(\\frac{np}{i}\\right)^i \\left(\\frac{n(1-p)}{n-i}\\right)^{n-i}$.",
    "approach": "Express the MGF as $(pe^t + q)^n$, minimize $e^{-ti}(pe^t + q)^n$ by setting the derivative of its logarithm to zero, and substitute the optimal $e^t$.",
    "solution": "Let $q = 1-p$. The MGF is $M(t) = (pe^t + q)^n$. For $t > 0$, Chernoff gives $P(X \\ge i) \\le e^{-ti}(pe^t + q)^n$. Let $g(t) = -ti + n\\ln(pe^t + q)$. (a) Setting $g'(t) = -i + \\frac{npe^t}{pe^t + q} = 0$ yields $npe^t = i(pe^t + q) = ipe^t + iq$. Rearranging: $(n - i)pe^t = iq$, so $e^t = \\frac{iq}{(n-i)p} = \\frac{i(1-p)}{(n-i)p}$. Since $i > np$, $\\frac{i}{n-i} > \\frac{p}{1-p}$, ensuring $e^t > 1$ and $t > 0$. (b) With this optimal $e^t$, $pe^t + q = p\\frac{iq}{(n-i)p} + q = q\\left(\\frac{i}{n-i} + 1\\right) = \\frac{nq}{n-i}$. Substituting into the bound: $e^{-ti}(pe^t + q)^n = \\left(e^t\\right)^{-i} \\left(\\frac{nq}{n-i}\\right)^n = \\left(\\frac{(n-i)p}{iq}\\right)^i \\left(\\frac{nq}{n-i}\\right)^n = \\left(\\frac{np}{i}\\right)^i \\left(\\frac{nq}{n-i}\\right)^{n-i} = \\left(\\frac{np}{i}\\right)^i \\left(\\frac{n(1-p)}{n-i}\\right)^{n-i}$. At i=n the optimum is a limit as t→∞, giving the exact tail p^n. For i>n the event is impossible.",
    "trap": "The optimal $e^t$ balances the odds ratio of the target cutoff $i/(n-i)$ against the population odds $p/(1-p)$.",
    "tests": [
      "c.prob.8.5.2"
    ],
    "provenance": "Ross, 10e, §8.5, Theoretical Exercise 8.11, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.12",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Theoretical Exercise 8.12: Sharpened normal tail bound",
    "prompt": "The Chernoff bound on a standard normal variable Z gives $P(Z > a) \\le e^{-a^2/2}$ for $a > 0$. By examining the integral of the normal density, show that this bound can be improved by a factor of 2: $P(Z > a) \\le \\frac{1}{2} e^{-a^2/2}$.",
    "approach": "Substitute $x = a + y$ into the tail integral $\\int_a^\\infty e^{-x^2/2} dx$, bound $e^{-ay} \\le 1$, and evaluate the remaining half-Gaussian integral.",
    "solution": "For $a > 0$, $P(Z > a) = \\frac{1}{\\sqrt{2\\pi}} \\int_a^\\infty e^{-x^2/2} dx$. Make the change of variable $x = a + y$ with $dx = dy$: $\\int_a^\\infty e^{-x^2/2} dx = \\int_0^\\infty e^{-(a+y)^2/2} dy = \\int_0^\\infty e^{-(a^2 + 2ay + y^2)/2} dy = e^{-a^2/2} \\int_0^\\infty e^{-ay} e^{-y^2/2} dy$. Because $a > 0$ and $y \\ge 0$, the linear cross term satisfies $ay \\ge 0$, so $e^{-ay} \\le 1$ for all $y \\ge 0$. Therefore: $\\int_0^\\infty e^{-ay} e^{-y^2/2} dy < \\int_0^\\infty e^{-y^2/2} dy = \\frac{\\sqrt{2\\pi}}{2}$. Multiplying by $\\frac{1}{\\sqrt{2\\pi}}$ gives $P(Z > a) < \\frac{1}{\\sqrt{2\\pi}} e^{-a^2/2} \\frac{\\sqrt{2\\pi}}{2} = \\frac{1}{2} e^{-a^2/2}$.",
    "trap": "The standard Chernoff bound $e^{-a^2/2}$ omits the factor $1/2$ that arises naturally from integrating over only the positive half-line.",
    "tests": [
      "c.prob.8.5.2"
    ],
    "provenance": "Ross, 10e, §8.5, Theoretical Exercise 8.12, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.13",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Theoretical Exercise 8.13: Convexity and sign of root in Lundberg-type equation",
    "prompt": "Suppose $E[X] < 0$ and there exists $\\theta \\ne 0$ such that $E[e^{\\theta X}] = 1$. Prove that $\\theta > 0$.",
    "approach": "Define the cumulant/MGF function $\\phi(t) = E[e^{tX}]$, analyze its value and derivative at $t = 0$, and use strict convexity.",
    "solution": "Assume E[X] is finite and negative. For every real number z, $e^z\\ge1+z$. If θ<0, substitute z=θX and average: $E[e^{\\theta X}]\\ge1+\\theta E[X]>1$, because θ and E[X] are both negative. This contradicts the stated equality. Since θ is not zero, it must be positive. This argument needs no unproved differentiation of the moment generating function.",
    "trap": "Strict convexity guarantees that the tangent line at $t=0$ lies strictly below the curve, ruling out roots on the negative axis.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Theoretical Exercise 8.13, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.14",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Ross Theoretical Exercise 8.14: Failure of CLT approximation for rare-event sums",
    "prompt": "The CLT guarantees that standardized sums of iid variables converge to a normal distribution, but gives no universal threshold for sample size n. Give an example of a distribution F with finite mean and variance such that the distribution of $\\sum_{i=1}^{100} X_i$ is far from normal.",
    "approach": "Construct a Poisson or Bernoulli variable with an extremely small parameter so that the sum of 100 variables remains concentrated at zero.",
    "solution": "Let $X_1, \\ldots, X_{100}$ be iid Poisson random variables with parameter $\\lambda = 0.001$. Then $E[X_i] = 0.001$ and $\\operatorname{Var}(X_i) = 0.001$, both finite. The sum $S_{100} = \\sum_{i=1}^{100} X_i$ has a Poisson distribution with parameter $\\mu = 100(0.001) = 0.1$. The probability distribution of $S_{100}$ is: $P(S_{100} = 0) = e^{-0.1} \\approx 0.9048$, $P(S_{100} = 1) = 0.1 e^{-0.1} \\approx 0.0905$, and $P(S_{100} \\ge 2) \\approx 0.0047$. This distribution places over 90% of its mass at a single point (0) and is severely skewed, bearing no resemblance to a continuous symmetric bell curve despite having $n = 100$ summands.",
    "trap": "The rule of thumb '$n \\ge 30$' fails when the underlying distribution has extreme skewness, such as rare Poisson or Bernoulli events.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, §8.3, Theoretical Exercise 8.14, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.15",
    "course": "prob",
    "sec": "8.5",
    "marks": 4,
    "title": "Ross Theoretical Exercise 8.15: Nonnegativity of Kullback-Leibler divergence",
    "prompt": "Let f and g be probability densities positive on the same support. The Kullback-Leibler divergence is $D_{\\text{KL}}(f \\parallel g) = E_f[\\log(f(X)/g(X))]$. (a) Show that $D_{\\text{KL}}(f \\parallel f) = 0$. (b) Use Jensen's inequality to prove that $D_{\\text{KL}}(f \\parallel g) \\ge 0$.",
    "approach": "Use $\\log 1 = 0$ for part (a). Write the divergence as $-E_f[\\log(g(X)/f(X))]$ and apply Jensen's inequality to the strictly convex function $-\\log(u)$.",
    "solution": "(a) If $g = f$, then $\\log(f(x)/f(x)) = \\log(1) = 0$ for all x, so $D_{\\text{KL}}(f \\parallel f) = E_f[0] = 0$. (b) Rewrite: $D_{\\text{KL}}(f \\parallel g) = \\int f(x) \\log\\left(\\frac{f(x)}{g(x)}\\right) dx = -\\int f(x) \\log\\left(\\frac{g(x)}{f(x)}\\right) dx = -E_f\\left[\\log\\left(\\frac{g(X)}{f(X)}\\right)\\right]$. The function $\\phi(u) = -\\log(u)$ is strictly convex for $u > 0$ because $\\phi''(u) = 1/u^2 > 0$. By Jensen's inequality, $E_f[-\\log Y] \\ge -\\log(E_f[Y])$ for any positive variable Y. Setting $Y = g(X)/f(X)$: $D_{\\text{KL}}(f \\parallel g) \\ge -\\log\\left(E_f\\left[\\frac{g(X)}{f(X)}\\right]\\right) = -\\log\\left(\\int \\frac{g(x)}{f(x)} f(x) dx\\right) = -\\log\\left(\\int g(x) dx\\right) = -\\log(1) = 0$.",
    "trap": "The expectation is taken under the distribution f, not g; multiplying $g(x)/f(x)$ by $f(x)$ integrates to 1.",
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Ross, 10e, §8.5, Theoretical Exercise 8.15, PDF p. 423."
  },
  {
    "id": "w.prob.8.ross.te.16",
    "course": "prob",
    "sec": "8.7",
    "marks": 5,
    "title": "Ross Theoretical Exercise 8.16: Integral representation and convexity of Lorenz curve",
    "prompt": "Let L(p) be the Lorenz curve of a continuous distribution F with density f and mean $\\mu$. (a) Show $L(p) = \\frac{1}{\\mu} \\int_0^p F^{-1}(y) dy$. (b) Prove L(p) is convex. (c) Show $\\int_0^1 L(p) dp = \\frac{1}{\\mu} \\int_0^\\infty (1 - F(x)) x f(x) dx$. (d) Verify (c) for Uniform(0,1) and Exponential(1).",
    "approach": "Use substitution $y = F(x)$ in the quantile definition, differentiate $L(p)$ via the fundamental theorem of calculus, exchange integrals for part (c), and evaluate.",
    "solution": "(a) By definition, $L(p) = \\frac{1}{\\mu} \\int_0^{\\xi_p} x f(x) dx$. Substitute $y = F(x)$, so $dy = f(x) dx$ and $x = F^{-1}(y)$. As x runs from 0 to $\\xi_p$, y runs from $F(0) = 0$ to $F(\\xi_p) = p$. Hence $L(p) = \\frac{1}{\\mu} \\int_0^p F^{-1}(y) dy$. (b) Differentiating: $L'(p) = \\frac{F^{-1}(p)}{\\mu}$. Because $F(x)$ is nondecreasing, its inverse $F^{-1}(p)$ is nondecreasing. Since $L'(p)$ is nondecreasing, $L''(p) \\ge 0$, proving L(p) is convex. (c) Integrate by parts or exchange integrals: $\\int_0^1 L(p) dp = \\frac{1}{\\mu} \\int_0^1 \\int_0^p F^{-1}(y) dy dp = \\frac{1}{\\mu} \\int_0^1 F^{-1}(y) (1 - y) dy$. Substituting $y = F(x), dy = f(x) dx, F^{-1}(y) = x$ yields $\\frac{1}{\\mu} \\int_0^\\infty x (1 - F(x)) f(x) dx$. (d) For Uniform(0,1): $\\mu = 1/2, f(x) = 1, F(x) = x$, so $\\frac{1}{1/2} \\int_0^1 x(1-x) dx = 2(1/2 - 1/3) = 2/6 = 1/3$. For Exponential(1): $\\mu = 1, f(x) = e^{-x}, 1 - F(x) = e^{-x}$, so $\\int_0^\\infty x e^{-2x} dx = 1/2^2 = 1/4$.",
    "trap": "The integrand in (c) contains both $(1 - F(x))$ and $f(x)$ from changing variables back from the probability integral.",
    "tests": [
      "c.prob.8.7.1",
      "c.prob.8.7.2"
    ],
    "provenance": "Ross, 10e, §8.7, Theoretical Exercise 8.16, PDF pp. 423–424."
  },
  {
    "id": "w.prob.8.ross.st.1",
    "course": "prob",
    "sec": "8.2",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.1: Markov bounds on automobile dealership sales",
    "prompt": "The number of cars sold weekly at a dealership has expected value 16. Using Markov's inequality, find an upper bound on the probability that next week's sales exceed (a) 18, and (b) 25.",
    "approach": "Since sales $X$ is a nonnegative integer-valued random variable, $X > 18 \\iff X \\ge 19$ and $X > 25 \\iff X \\ge 26$. Apply Markov's inequality $P(X \\ge a) \\le E[X]/a$.",
    "solution": "(a) Since sales must be an integer, the event that sales exceed 18 is $X \\ge 19$. By Markov's inequality: $P(X > 18) = P(X \\ge 19) \\le \\frac{E[X]}{19} = \\frac{16}{19} \\approx 0.8421$. (If treated continuous as $P(X \\ge 18)$, the bound is $\\frac{16}{18} = \\frac{8}{9} \\approx 0.8889$.) (b) Similarly, exceeding 25 means $X \\ge 26$. By Markov's inequality: $P(X > 25) = P(X \\ge 26) \\le \\frac{E[X]}{26} = \\frac{16}{26} = \\frac{8}{13} \\approx 0.6154$. (If treated as $P(X \\ge 25)$, the bound is $\\frac{16}{25} = 0.64$.)",
    "trap": "For integer-valued random variables, using the integer threshold $X \\ge k+1$ for $X > k$ yields a strictly sharper Markov bound than using $k$.",
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.1, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.2",
    "course": "prob",
    "sec": "8.2",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.2: Two-sided and one-sided Chebyshev bounds on sales",
    "prompt": "Suppose the weekly car sales $X$ from Self-Test 8.1 has mean $\\mu = 16$ and variance $\\sigma^2 = 9$. (a) Give a lower bound to the probability that next week's sales are between 10 and 22, inclusively. (b) Give an upper bound to the probability that next week's sales exceed 18.",
    "approach": "For (a), express the interval as $|X - 16| \\le 6$ and apply Chebyshev's inequality. For (b), apply the one-sided Chebyshev inequality to $P(X - \\mu \\ge a)$.",
    "solution": "(a) The event $10 \\le X \\le 22$ is equivalent to $|X - 16| \\le 6$. By Chebyshev's inequality: $P(|X - 16| \\le 6) = 1 - P(|X - 16| \\ge 7) \\ge 1 - P(|X - 16| > 6) \\ge 1 - \\frac{\\sigma^2}{6^2} = 1 - \\frac{9}{36} = 1 - \\frac{1}{4} = 0.75$. (b) Exceeding 18 means $X \\ge 19$, so $X - 16 \\ge 3$. Applying the one-sided Chebyshev inequality with $a = 3$: $P(X \\ge 19) = P(X - 16 \\ge 3) \\le \\frac{\\sigma^2}{\\sigma^2 + a^2} = \\frac{9}{9 + 3^2} = \\frac{9}{18} = \\frac{1}{2} = 0.5$. (If evaluated at $a = 2$, i.e. $X \\ge 18$, the bound is $\\frac{9}{9 + 4} = \\frac{9}{13} \\approx 0.6923$.)",
    "trap": "Two-sided Chebyshev bounds deviations in both directions, whereas one-sided Chebyshev gives a much tighter bound when looking only at an upper tail.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.2, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.3",
    "course": "prob",
    "sec": "8.5",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.3: Chebyshev and one-sided Chebyshev bounds for difference of correlated variables",
    "prompt": "If $E[X] = 75, E[Y] = 75, \\operatorname{Var}(X) = 10, \\operatorname{Var}(Y) = 12$, and $\\operatorname{Cov}(X,Y) = -3$, give an upper bound to: (a) $P(|X - Y| > 15)$, (b) $P(X > Y + 15)$, (c) $P(Y > X + 15)$.",
    "approach": "Define $W = X - Y$. Compute the mean and variance of $W$, then apply two-sided Chebyshev for (a) and one-sided Chebyshev for (b) and (c).",
    "solution": "Let $W = X - Y$. Then $E[W] = E[X] - E[Y] = 75 - 75 = 0$. $\\operatorname{Var}(W) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) - 2\\operatorname{Cov}(X,Y) = 10 + 12 - 2(-3) = 22 + 6 = 28$. (a) By Chebyshev's inequality: $P(|W| > 15) \\le \\frac{\\operatorname{Var}(W)}{15^2} = \\frac{28}{225} \\approx 0.1244$. (b) Using the one-sided Chebyshev inequality for $P(W > 15)$ with mean 0 and variance 28: $P(X - Y > 15) \\le \\frac{\\sigma^2}{\\sigma^2 + a^2} = \\frac{28}{28 + 15^2} = \\frac{28}{28 + 225} = \\frac{28}{253} \\approx 0.1107$. (c) The random variable $Y - X = -W$ also has mean 0 and variance 28. By the one-sided Chebyshev inequality: $P(Y - X > 15) \\le \\frac{28}{28 + 225} = \\frac{28}{253} \\approx 0.1107$.",
    "trap": "Remember that negative covariance increases the variance of the difference: $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) - 2\\operatorname{Cov}(X,Y)$.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.3, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.4",
    "course": "prob",
    "sec": "8.5",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.4: Upper bound on factory production difference",
    "prompt": "Daily output at factory A has mean 20 and standard deviation 3. Daily output at factory B has mean 18 and standard deviation 6. Assuming independent production, derive an upper bound for the probability that more units are produced today at factory B than at factory A.",
    "approach": "Define $D = B - A$. Find $E[D]$ and $\\operatorname{Var}(D)$, and apply the one-sided Chebyshev inequality to $P(D > 0)$.",
    "solution": "Let $A$ and $B$ denote the outputs of factories A and B. Then $E[A] = 20, \\operatorname{Var}(A) = 3^2 = 9$, and $E[B] = 18, \\operatorname{Var}(B) = 6^2 = 36$. Define $D = B - A$. By linearity and independence: $E[D] = E[B] - E[A] = 18 - 20 = -2$, and $\\operatorname{Var}(D) = \\operatorname{Var}(B) + \\operatorname{Var}(A) = 36 + 9 = 45$. We seek an upper bound on $P(B > A) = P(D > 0) = P(D - E[D] > 0 - (-2)) = P(D - (-2) > 2)$. Applying the one-sided Chebyshev inequality with $a = 2$ and $\\sigma^2 = 45$: $P(D > 0) \\le \\frac{\\sigma^2}{\\sigma^2 + a^2} = \\frac{45}{45 + 2^2} = \\frac{45}{49} \\approx 0.9184$.",
    "trap": "Don't forget to center $D$ around its negative mean $E[D] = -2$, so that the event $D > 0$ becomes $D - (-2) > 2$.",
    "tests": [
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.4, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.5",
    "course": "prob",
    "sec": "8.4",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.5: Long-term component failure rate via strong law",
    "prompt": "Component lifetimes $X_i$ are iid with density $f(x) = 2x$ for $0 < x < 1$. Each failed component is immediately replaced. Let $S_n = \\sum_{i=1}^n X_i$ be the time of the $n$-th failure. Determine the long-term failure rate $r = \\lim_{n \\to \\infty} \\frac{n}{S_n}$.",
    "approach": "Compute the mean lifetime $E[X_i]$ and apply the strong law of large numbers to $S_n / n$.",
    "solution": "The mean lifetime of a component is $E[X_i] = \\int_0^1 x (2x) dx = 2 \\int_0^1 x^2 dx = 2 \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{2}{3}$. By the strong law of large numbers, since the $X_i$ are iid with finite mean, $\\lim_{n \\to \\infty} \\frac{S_n}{n} = E[X_1] = \\frac{2}{3}$ with probability 1. Therefore, the reciprocal converges almost surely: $r = \\lim_{n \\to \\infty} \\frac{n}{S_n} = \\frac{1}{E[X_1]} = \\frac{1}{2/3} = \\frac{3}{2} = 1.5$ failures per unit time.",
    "trap": "The long-term rate is the reciprocal of the mean lifetime, not the mean of the reciprocals.",
    "tests": [
      "c.prob.8.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.5, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.6",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.6: Stock sizing for 90% survival probability",
    "prompt": "For the components in Self-Test 8.5 (iid with density $f(x) = 2x, 0 < x < 1$), how many components $n$ must be stocked so that with approximately 90% probability the supply lasts at least 35 days?",
    "approach": "Calculate $E[X_i]$ and $\\operatorname{Var}(X_i)$, set up the CLT normal approximation for $P(S_n \\ge 35) \\approx 0.90$, and solve the resulting quadratic equation for $\\sqrt{n}$.",
    "solution": "From Self-Test 8.5, $E[X_i] = 2/3$. The second moment is $E[X_i^2] = \\int_0^1 x^2 (2x) dx = 2 \\int_0^1 x^3 dx = 2/4 = 1/2$. Thus $\\operatorname{Var}(X_i) = 1/2 - (2/3)^2 = 1/2 - 4/9 = 1/18$. For $n$ independent components, total lifetime $S_n$ has mean $2n/3$ and variance $n/18$. By the Central Limit Theorem, $P(S_n \\ge 35) = P\\left( \\frac{S_n - 2n/3}{\\sqrt{n/18}} \\ge \\frac{35 - 2n/3}{\\sqrt{n/18}} \\right) \\approx 1 - \\Phi\\left( \\frac{35 - 2n/3}{\\sqrt{n/18}} \\right) = 0.90$. Hence $\\Phi\\left( \\frac{35 - 2n/3}{\\sqrt{n/18}} \\right) = 0.10$, so $\\frac{35 - 2n/3}{\\sqrt{n/18}} = -z_{0.10} \\approx -1.282$. Rearranging: $\\frac{2}{3} n - 1.282 \\frac{\\sqrt{n}}{\\sqrt{18}} - 35 = 0$. Let $u = \\sqrt{n}$. Then $\\frac{2}{3} u^2 - 0.30217 u - 35 = 0$, or $2 u^2 - 0.9065 u - 105 = 0$. Using the quadratic formula: $u = \\frac{0.9065 + \\sqrt{0.9065^2 + 4(2)(105)}}{4} = \\frac{0.9065 + \\sqrt{0.8218 + 840}}{4} \\approx \\frac{0.9065 + 28.997}{4} \\approx 7.476$. Squaring gives $n = u^2 \\approx 7.476^2 \\approx 55.89$. Rounding up to ensure at least 90% certainty gives $n = 56$ components.",
    "trap": "Since $n$ must be an integer and the stock must satisfy the minimum probability, always round up the fractional solution.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.6, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.7",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.7: Two-stage machine servicing completion probability",
    "prompt": "Servicing a machine takes two independent stages: step 1 is Exponential with mean 0.2 hr, and step 2 is Exponential with mean 0.3 hr. If a technician services 20 machines sequentially, approximate the probability that all work is completed within 8 hours.",
    "approach": "Find the mean and variance for one machine's service time, sum over the 20 independent machines, and apply the CLT.",
    "solution": "For each machine $i$, service time is $T_i = X_{1,i} + X_{2,i}$. Since $X_{1,i} \\sim \\operatorname{Exp}(\\text{mean } 0.2)$ and $X_{2,i} \\sim \\operatorname{Exp}(\\text{mean } 0.3)$ are independent: $E[T_i] = 0.2 + 0.3 = 0.5$ hour, and $\\operatorname{Var}(T_i) = \\operatorname{Var}(X_{1,i}) + \\operatorname{Var}(X_{2,i}) = (0.2)^2 + (0.3)^2 = 0.04 + 0.09 = 0.13 \\text{ hr}^2$. For 20 independent machines, the total time is $T = \\sum_{i=1}^{20} T_i$. Then $E[T] = 20(0.5) = 10$ hours, and $\\operatorname{Var}(T) = 20(0.13) = 2.6 \\text{ hr}^2$, giving $\\sigma_T = \\sqrt{2.6} \\approx 1.6125$ hours. By the Central Limit Theorem: $P(T \\le 8) \\approx \\Phi\\left( \\frac{8 - 10}{\\sqrt{2.6}} \\right) = \\Phi\\left( \\frac{-2}{1.6125} \\right) = \\Phi(-1.24) = 1 - \\Phi(1.24) \\approx 1 - 0.8925 = 0.1075$.",
    "trap": "Remember that an exponential random variable with mean $\\mu$ has variance $\\mu^2$, not $\\mu$.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.7, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.8",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.8: Gambler losing after 100 bets",
    "prompt": "On each bet, a gambler loses 1 dollar with probability 0.7, loses 2 dollars with probability 0.2, or wins 10 dollars with probability 0.1. Approximate the probability that the gambler is losing after 100 independent bets.",
    "approach": "Find the mean and variance of the payout on a single bet, find the distribution of the sum after 100 bets, and apply the CLT to find $P(S_{100} < 0)$.",
    "solution": "Let $W_i$ be the net gain on bet $i$. The distribution of $W_i$ is $P(W_i = -1) = 0.7$, $P(W_i = -2) = 0.2$, and $P(W_i = 10) = 0.1$. The expected gain per bet is $E[W_i] = (-1)(0.7) + (-2)(0.2) + (10)(0.1) = -0.7 - 0.4 + 1.0 = -0.1$. The second moment is $E[W_i^2] = (-1)^2(0.7) + (-2)^2(0.2) + (10)^2(0.1) = 0.7 + 0.8 + 10.0 = 11.5$. Thus $\\operatorname{Var}(W_i) = 11.5 - (-0.1)^2 = 11.5 - 0.01 = 11.49$. For $n = 100$ independent bets, total gain is $S_{100} = \\sum_{i=1}^{100} W_i$. $E[S_{100}] = 100(-0.1) = -10$, and $\\operatorname{Var}(S_{100}) = 100(11.49) = 1149$, so $\\sigma = \\sqrt{1149} \\approx 33.897$. The gambler is losing if $S_{100} < 0$. By the Central Limit Theorem: $P(S_{100} < 0) \\approx \\Phi\\left( \\frac{0 - (-10)}{\\sqrt{1149}} \\right) = \\Phi\\left( \\frac{10}{33.897} \\right) = \\Phi(0.295) \\approx 0.616$.",
    "trap": "Even though the expected net win per bet is negative, the large variance (due to the occasional $+10$ payout) leaves a significant $\\approx 38.4\\%$ chance of being ahead after 100 bets.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.8, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.9",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.9: Time required for 95% service completion",
    "prompt": "Determine $t$ so that the probability that the technician in Self-Test 8.7 finishes servicing all 20 machines within time $t$ is approximately 0.95.",
    "approach": "Using the total time mean $E[T] = 10$ and variance $\\operatorname{Var}(T) = 2.6$ from Self-Test 8.7, invert the standard normal quantile for $P(T \\le t) = 0.95$.",
    "solution": "From Self-Test 8.7, the total time $T$ to service 20 machines has mean $\\mu_T = 10$ hours and standard deviation $\\sigma_T = \\sqrt{2.6} \\approx 1.6125$ hours. We want $P(T \\le t) \\approx \\Phi\\left( \\frac{t - 10}{1.6125} \\right) = 0.95$. The 95th percentile of the standard normal distribution is $z_{0.95} \\approx 1.645$. Setting $\\frac{t - 10}{1.6125} = 1.645$, we solve for $t$: $t = 10 + 1.645(1.6125) \\approx 10 + 2.652 = 12.65$ hours (or approximately 12 hours and 39 minutes).",
    "trap": "Be sure to use $z = 1.645$ for a one-sided 95% probability, not the two-sided critical value 1.96.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.9, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.10",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.10: Cigarette nicotine claim testing via sample mean CLT",
    "prompt": "A manufacturer claims cigarette nicotine content has mean 2.2 mg and standard deviation 0.3 mg. A sample of 100 cigarettes has an average nicotine content of 3.1 mg. Approximate the probability that the sample average would be at least 3.1 mg if the claim were true.",
    "approach": "Use the sampling distribution of the sample mean $\\bar{X} \\sim \\mathcal{N}(\\mu, \\sigma^2/n)$ under the null hypothesis and compute the tail probability.",
    "solution": "The standard error is $0.3/\\sqrt{100}=0.03$ mg. Thus the observed average lies $(3.1-2.2)/0.03=30$ standard errors above the claimed mean. The requested formal normal estimate is $1-\\Phi(30)$, about $4.9\\times10^{-198}$. This tiny value is exact only for normally distributed independent cigarette contents; the CLT by itself does not justify such an extreme-tail estimate from only a mean and variance. Under just independent samples with the stated moments, the one-sided Chebyshev bound gives $P(\\bar X\\ge3.1)\\le0.0009/(0.0009+0.9^2)=1/901\\approx0.00111$. Both calculations indicate how unusual the observation is, but their assumptions differ.",
    "trap": "Dividing $\\sigma$ by $\\sqrt{n}$ is essential: the spread of the sample mean shrinks by a factor of 10 for $n=100$.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.10, PDF p. 424."
  },
  {
    "id": "w.prob.8.ross.st.11",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.11: Mixture vs stratified battery life approximation",
    "prompt": "A collection has 40 batteries. Type A has mean 50, SD 15; Type B has mean 30, SD 6. Approximate the probability that total lifetime exceeds 1700 if: (a) each battery is equally likely Type A or B independently; (b) exactly 20 are Type A and 20 are Type B.",
    "approach": "For (a), compute the unconditional mean and variance using the law of total variance. For (b), sum the deterministic counts of each type.",
    "solution": "(a) When each battery is Type A or B with equal probability $1/2$: $E[L] = \\frac{1}{2}(50) + \\frac{1}{2}(30) = 40$. By the law of total variance, $\\operatorname{Var}(L) = E[\\operatorname{Var}(L|T)] + \\operatorname{Var}(E[L|T]) = \\frac{15^2 + 6^2}{2} + \\left[ \\frac{1}{2}(50 - 40)^2 + \\frac{1}{2}(30 - 40)^2 \\right] = \\frac{225 + 36}{2} + 100 = 130.5 + 100 = 230.5$. For $n = 40$ independent batteries: total mean is $40(40) = 1600$, variance is $40(230.5) = 9220$, and standard deviation is $\\sqrt{9220} \\approx 96.02$. By CLT: $P(S_{40} > 1700) \\approx 1 - \\Phi\\left( \\frac{1700 - 1600}{96.02} \\right) = 1 - \\Phi(1.041) \\approx 1 - 0.8510 = 0.1490$. (b) When exactly 20 of each type are chosen: total mean is $20(50) + 20(30) = 1000 + 600 = 1600$. Total variance is $20(15^2) + 20(6^2) = 20(225) + 20(36) = 4500 + 720 = 5220$, so standard deviation is $\\sqrt{5220} \\approx 72.25$. By CLT: $P(S_{40} > 1700) \\approx 1 - \\Phi\\left( \\frac{1700 - 1600}{72.25} \\right) = 1 - \\Phi(1.384) \\approx 1 - 0.9168 = 0.0832$.",
    "trap": "In part (a), the randomness of battery type adds an extra variance component $\\operatorname{Var}(E[L|T]) = 100$ per battery, making the total variance significantly higher than in the fixed-count case (b).",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.11, PDF pp. 424–425."
  },
  {
    "id": "w.prob.8.ross.st.12",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.12: Compound Poisson clinic patient count and normal approximation",
    "prompt": "A clinic has $N \\in \\{2, 3, 4\\}$ volunteer doctors with equal probability $1/3$. Each doctor sees a Poisson(30) number of patients independently. Let $X$ be total patients seen. Find: (a) $E[X]$, (b) $\\operatorname{Var}(X)$, and (c) approximate $P(X > 65)$.",
    "approach": "Condition on $N$ to find $E[X]$ and $\\operatorname{Var}(X)$ via the law of total expectation and law of total variance, then apply the normal approximation.",
    "solution": "Given N=n doctors, $X\\sim\\operatorname{Poisson}(30n)$. (a) $E[N]=3$, so $E[X]=30E[N]=90$. (b) $\\operatorname{Var}(N)=2/3$. Split the variation into variation within a fixed doctor count and variation between doctor counts: $\\operatorname{Var}(X)=E[30N]+\\operatorname{Var}(30N)=90+900(2/3)=690$. (c) Condition on N before using the normal table. For each n=2,3,4, approximate its Poisson tail separately, then average: $P(X>65)\\approx\\frac13\\sum_{n=2}^4[1-\\Phi((65.5-30n)/\\sqrt{30n})]\\approx0.7446$. There are only three possible doctor counts. Mixing their three Poisson laws does not automatically produce one normal law with mean 90 and variance 690.",
    "trap": "The variance of $X$ is not just $30 E[N]$; the variation in the number of doctors adds an additional term $900 \\operatorname{Var}(N) = 600$.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.12, PDF p. 425."
  },
  {
    "id": "w.prob.8.ross.st.13",
    "course": "prob",
    "sec": "8.4",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.13: Almost sure limit of geometric averages",
    "prompt": "If $X_1, X_2, \\dots$ are iid positive random variables with $E[|\\ln X_1|] < \\infty$, find the almost sure limit of the successive geometric averages $G_n = \\left( \\prod_{i=1}^n X_i \\right)^{1/n}$ as $n \\to \\infty$.",
    "approach": "Take the logarithm of the geometric mean, convert it to an arithmetic average of $\\ln X_i$, apply the strong law of large numbers, and exponentiate.",
    "solution": "Taking the natural logarithm of $G_n$: $\\ln G_n = \\ln \\left( \\prod_{i=1}^n X_i \\right)^{1/n} = \\frac{1}{n} \\sum_{i=1}^n \\ln X_i$. Define $Y_i = \\ln X_i$. Since the $X_i$ are iid positive random variables, the $Y_i$ are iid random variables with finite expectation $E[Y_1] = E[\\ln X_1]$. By the Strong Law of Large Numbers, $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{i=1}^n Y_i = E[Y_1] = E[\\ln X_1]$ with probability 1. Because the exponential function $f(u) = e^u$ is continuous everywhere, the continuous mapping theorem implies: $\\lim_{n \\to \\infty} G_n = \\lim_{n \\to \\infty} \\exp(\\ln G_n) = \\exp\\left( \\lim_{n \\to \\infty} \\ln G_n \\right) = \\exp(E[\\ln X_1]) = e^{E[\\ln X_1]}$ with probability 1.",
    "trap": "The limit of the geometric mean is $e^{E[\\ln X_1]}$, which by Jensen's inequality is strictly less than $E[X_1]$ unless $X_1$ is constant.",
    "tests": [
      "c.prob.8.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.13, PDF p. 425."
  },
  {
    "id": "w.prob.8.ross.st.14",
    "course": "prob",
    "sec": "8.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.14: Normal approximation for book processing times",
    "prompt": "Donated book processing time has mean 10 min and standard deviation 3 min. For 40 books: (a) approximate the probability that processing all 40 takes more than 420 minutes; (b) approximate the probability that at least 25 books are processed in the first 240 minutes. State the assumptions made.",
    "approach": "For (a), apply CLT to the sum of 40 processing times. For (b), note that finishing at least 25 books in 240 minutes is equivalent to the total time for the first 25 books being $\\le 240$ minutes.",
    "solution": "Assume the processing times $X_1, X_2, \\dots$ are independent and identically distributed with $E[X_i] = 10$ and $\\operatorname{Var}(X_i) = 3^2 = 9$. (a) The total time for 40 books is $S_{40} = \\sum_{i=1}^{40} X_i$. Then $E[S_{40}] = 40(10) = 400$ and $\\operatorname{Var}(S_{40}) = 40(9) = 360$, giving $\\sigma = \\sqrt{360} \\approx 18.974$. By the CLT: $P(S_{40} > 420) \\approx P\\left( Z > \\frac{420 - 400}{18.974} \\right) = P(Z > 1.054) = 1 - \\Phi(1.05) \\approx 1 - 0.8531 = 0.1469$. (b) Processing at least 25 books within 240 minutes means the total time required for 25 books is at most 240 minutes: $S_{25} \\le 240$. For $n = 25$, $E[S_{25}] = 25(10) = 250$ and $\\operatorname{Var}(S_{25}) = 25(9) = 225$, so $\\sigma = 15$. By the CLT: $P(S_{25} \\le 240) \\approx \\Phi\\left( \\frac{240 - 250}{15} \\right) = \\Phi\\left( -\\frac{10}{15} \\right) = \\Phi(-0.667) = 1 - \\Phi(0.67) \\approx 1 - 0.7486 = 0.2514$.",
    "trap": "In part (b), convert the renewal count event $\\{N(240) \\ge 25\\}$ to the equivalent hitting-time event $\\{S_{25} \\le 240\\}$.",
    "tests": [
      "c.prob.8.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.14, PDF p. 425."
  },
  {
    "id": "w.prob.8.ross.st.15",
    "course": "prob",
    "sec": "8.5",
    "marks": 5,
    "title": "Ross Self-Test Problem 8.15: Proof of Chebyshev's sum inequality",
    "prompt": "Prove Chebyshev's sum inequality: if $a_1 \\ge a_2 \\ge \\dots \\ge a_n$ and $b_1 \\ge b_2 \\ge \\dots \\ge b_n$, then $n \\sum_{i=1}^n a_i b_i \\ge \\left( \\sum_{i=1}^n a_i \\right) \\left( \\sum_{i=1}^n b_i \\right)$.",
    "approach": "Express the difference as a double sum of the non-negative products $(a_i - a_j)(b_i - b_j)$ and expand, or use covariance of comonotonic uniform random variables.",
    "solution": "Since both sequences are sorted in nonincreasing order, $(a_i - a_j)$ and $(b_i - b_j)$ have the same sign for all $1 \\le i, j \\le n$. Therefore, their product is always nonnegative: $(a_i - a_j)(b_i - b_j) \\ge 0$ for all $i, j$. Summing this inequality over all pairs $(i, j)$ from 1 to $n$: $\\sum_{i=1}^n \\sum_{j=1}^n (a_i - a_j)(b_i - b_j) \\ge 0$. Expanding the summand: $(a_i - a_j)(b_i - b_j) = a_i b_i - a_i b_j - a_j b_i + a_j b_j$. Now sum term-by-term: $\\sum_{i=1}^n \\sum_{j=1}^n a_i b_i = n \\sum_{i=1}^n a_i b_i$, $\\sum_{i=1}^n \\sum_{j=1}^n a_i b_j = \\left( \\sum_{i=1}^n a_i \\right) \\left( \\sum_{j=1}^n b_j \\right)$, $\\sum_{i=1}^n \\sum_{j=1}^n a_j b_i = \\left( \\sum_{j=1}^n a_j \\right) \\left( \\sum_{i=1}^n b_i \\right)$, and $\\sum_{i=1}^n \\sum_{j=1}^n a_j b_j = n \\sum_{j=1}^n a_j b_j = n \\sum_{i=1}^n a_i b_i$. Combining these yields: $2n \\sum_{i=1}^n a_i b_i - 2 \\left( \\sum_{i=1}^n a_i \\right) \\left( \\sum_{i=1}^n b_i \\right) \\ge 0$. Dividing by 2 gives the desired inequality: $n \\sum_{i=1}^n a_i b_i \\ge \\left( \\sum_{i=1}^n a_i \\right) \\left( \\sum_{i=1}^n b_i \\right)$. (Equivalently, dividing by $n^2$ gives $\\frac{1}{n} \\sum a_i b_i \\ge (\\frac{1}{n}\\sum a_i)(\\frac{1}{n}\\sum b_i)$, meaning the covariance of similarly ordered random variables is nonnegative.)",
    "trap": "The double sum runs over all $n^2$ pairs $(i, j)$, which produces two identical $n \\sum a_i b_i$ terms and two identical cross-product terms.",
    "tests": [
      "c.prob.8.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 8, Self-Test Problem 8.15, PDF p. 425."
  },
  {
    "id": "w.prob.8.ross.problem.2",
    "course": "prob",
    "sec": "8.2",
    "marks": 4,
    "title": "Adaptation of Ross Problem 8.2(a,b): Markov and Chebyshev",
    "prompt": "A nonnegative test score X has mean 75 and variance 25. Give a Markov upper bound for P(X≥85), then a Chebyshev bound for P(65≤X≤85). (c) How large an independent class must we use to guarantee at least 90% probability that its average is within 5 points of 75?",
    "approach": "Scores are nonnegative, so use Markov directly. For the central interval use the complement of a two-sided deviation.",
    "solution": "Markov gives $P(X\\ge85)\\le75/85=15/17$. Chebyshev gives $P(|X-75|<10)\\ge1-25/100=3/4$, so $P(65<X<85)\\ge0.75$; endpoint versions depend on whether atoms occur at the endpoints. (c) $P(|\\bar X_n-75|\\ge5)\\le25/(25n)=1/n$. It suffices that $1/n\\le0.1$, so n≥10 students. This is a sufficient guarantee from the bound, not necessarily the smallest n for the true score law.",
    "trap": "Markov needs X≥0. Chebyshev controls the outside tail and therefore supplies a lower bound on the inside probability.",
    "tests": [
      "c.prob.8.2.1",
      "c.prob.8.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 8, Problem 2; original wording and worked explanation."
  },
  {
    "id": "w.prob.8.ross.problem.5",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Adaptation of Ross Problem 8.5: rounding errors",
    "prompt": "Fifty independent rounding errors are Uniform(-0.5,0.5). Approximate the probability that the total error has absolute value greater than 3.",
    "approach": "Compute the error mean and variance, standardize the sum, and use the normal approximation.",
    "solution": "Each error has mean 0 and variance $1/12$. Thus the sum has mean 0 and variance $50/12$, with standard deviation $\\sqrt{50/12}$. The CLT approximation is $P(|S|>3)\\approx2[1-\\Phi(3/\\sqrt{50/12})]\\approx0.141$.",
    "trap": "Standardize the sum with sd $\\sqrt{n\\sigma^2}$; the question asks a two-sided tail.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 8, Problem 5; original wording and worked explanation."
  },
  {
    "id": "w.prob.8.ross.problem.7",
    "course": "prob",
    "sec": "8.3",
    "marks": 4,
    "title": "Adaptation of Ross Problem 8.7: surviving bulb supply",
    "prompt": "One hundred independent bulb lifetimes are exponential with mean 5 hours. Approximate the probability that the hundredth bulb is still working after 525 hours when each failed bulb is replaced immediately.",
    "approach": "The time to exhaust the stock is the sum of 100 exponential lifetimes; apply the CLT to this sum.",
    "solution": "Each lifetime has mean 5 and variance 25. The total T has mean 500 and sd 50. “A working bulb after 525 hours” means $T>525$, so $P(T>525)\\approx1-\\Phi((525-500)/50)=1-\\Phi(0.5)\\approx0.309$.",
    "trap": "The stock is exhausted at the sum of all 100 lifetimes; compare the elapsed time with that sum.",
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 8, Problem 7; original wording and worked explanation."
  }
]);
