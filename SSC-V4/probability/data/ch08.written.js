if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }
QUESTIONS.push(...
[
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
  }
]
);
