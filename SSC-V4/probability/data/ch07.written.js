if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }
QUESTIONS.push(...
[
  {
    "id": "w.prob.7.2.1",
    "course": "prob",
    "sec": "7.2",
    "marks": 4,
    "title": "Adaptation of Ross Problem 7.6: expected dice total",
    "prompt": "Ten fair dice are rolled. Find the expected sum without enumerating possible totals.",
    "approach": "Write the total as a sum of ten individual face values and use linearity.",
    "solution": "Each die has mean $(1+2+3+4+5+6)/6=7/2$. Hence the sum has expectation $10(7/2)=35$, regardless of the fact the rolls are independent.",
    "trap": "The result uses linearity; independence would matter for variance, not this mean.",
    "tests": [
      "c.prob.7.2.1",
      "c.prob.7.3.1"
    ],
    "provenance": "Ross, 10e, §7.2–7.3, Problem 7.6, PDF pp. 311, 325."
  },
  {
    "id": "w.prob.7.2.2",
    "course": "prob",
    "sec": "7.2",
    "marks": 4,
    "title": "Original drill: dependent variables and linearity",
    "prompt": "Let $Y=2X+1$, where $E[X]=3$. Find $E[4X-Y]$. Explain whether independence is relevant.",
    "approach": "Substitute the relation for Y, then apply linearity.",
    "solution": "$4X-Y=4X-(2X+1)=2X-1$, so $E[4X-Y]=2E[X]-1=5$. The variables are dependent by construction; no independence assumption is needed.",
    "trap": "Never infer that dependence blocks linearity of expectation.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original item aligned with Ross §7.2."
  },
  {
    "id": "w.prob.7.3.1",
    "course": "prob",
    "sec": "7.3",
    "marks": 4,
    "title": "Adaptation of Ross Problem 7.9: empty urns",
    "prompt": "Ten balls are independently placed uniformly into ten urns. Let N count empty urns. Find E[N].",
    "approach": "Use one indicator per urn and add their probabilities.",
    "solution": "For urn j, let $I_j$ indicate emptiness. Its probability is $(9/10)^{10}$. Since $N=\\sum_{j=1}^{10}I_j$, $E[N]=10(9/10)^{10}\\approx3.487$.",
    "trap": "Indicators are dependent, but their expectation still adds.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Ross, 10e, §7.3, adaptation of Problem 7.9, PDF p. 325."
  },
  {
    "id": "w.prob.7.3.2",
    "course": "prob",
    "sec": "7.3",
    "marks": 4,
    "title": "Original drill: expected number of matching birthdays",
    "prompt": "Among n independent people, each birthday is uniform among 365 days. Let C count pairs sharing a birthday. Find E[C].",
    "approach": "Index each unordered pair and indicate whether it matches.",
    "solution": "There are $\\binom n2$ pairs. For each pair the match probability is $1/365$. Therefore $E[C]=\\binom n2/365$. Pair-match indicators are dependent, but linearity remains valid.",
    "trap": "Use unordered pairs; ordered pairs would double-count matches.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original item aligned with Ross §7.3."
  },
  {
    "id": "w.prob.7.4.1",
    "course": "prob",
    "sec": "7.4",
    "marks": 4,
    "title": "Adaptation of Ross Problem 7.31: variance of dice sum",
    "prompt": "Ten independent fair dice are rolled. Find the variance of their sum.",
    "approach": "Compute one die variance, then add variances using independence.",
    "solution": "For one die, $E[X]=7/2$ and $E[X^2]=91/6$, so $\\operatorname{Var}(X)=91/6-49/4=35/12$. The sum variance is $10(35/12)=175/6$.",
    "trap": "Independence, unlike for the mean, is used to eliminate covariance terms.",
    "tests": [
      "c.prob.7.4.2"
    ],
    "provenance": "Ross, 10e, §7.4, adaptation of Problem 7.31, PDF pp. 331–332."
  },
  {
    "id": "w.prob.7.4.2",
    "course": "prob",
    "sec": "7.4",
    "marks": 4,
    "title": "Original drill: zero covariance need not mean independence",
    "prompt": "Let X be equally likely -1, 0, 1 and let $Y=X^2$. Compute covariance and explain why X and Y are not independent.",
    "approach": "Find the means and product expectation; compare the joint behavior with independence.",
    "solution": "By symmetry $E[X]=0$, while $E[Y]=2/3$ and $E[XY]=E[X^3]=0$, so $\\operatorname{Cov}(X,Y)=0$. But $Y$ is determined by X and is not constant; for example $P(Y=0\\mid X=0)=1\ne P(Y=0)=1/3$. Thus they are dependent.",
    "trap": "Uncorrelated variables need not be independent.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original item aligned with Ross §7.4."
  },
  {
    "id": "w.prob.7.5.1",
    "course": "prob",
    "sec": "7.5",
    "marks": 4,
    "title": "Adaptation of Ross Problem 7.55: expected completion time",
    "prompt": "A traveler faces three mutually exclusive outcomes: with probabilities 0.5, 0.3, and 0.2, they spend 2 days and return, spend 4 days and return, or spend 1 day reaching freedom. Find expected time to freedom if the pattern repeats after a return.",
    "approach": "Let T be total time. Condition on the first leg and solve the resulting expectation equation.",
    "solution": "The first leg always takes either 2, 4, or 1 day. On the first two outcomes the same expected future time E[T] remains. Thus $E[T]=0.5(2+E[T])+0.3(4+E[T])+0.2(1)$. Rearranging gives $0.2E[T]=2.4$, so $E[T]=12$ days.",
    "trap": "The 2- and 4-day outcomes include a return to the same starting state; do not omit the repeated future time.",
    "tests": [
      "c.prob.7.5.1",
      "c.prob.7.5.2"
    ],
    "provenance": "Ross, 10e, §7.5, Problem 7.55, PDF pp. 344–345."
  },
  {
    "id": "w.prob.7.5.2",
    "course": "prob",
    "sec": "7.5",
    "marks": 4,
    "title": "Original drill: total variance in two groups",
    "prompt": "A fair coin selects group A or B. Conditional on A, X is 0 or 2 equally likely; conditional on B, X=4. Find Var(X) using total variance.",
    "approach": "Compute the conditional means and variances, then average within-group variance and between-group mean variance.",
    "solution": "$E[X\\mid A]=1$, $\\operatorname{Var}(X\\mid A)=1$; for B these are 4 and 0. Hence $E[X]=\\tfrac12(1)+\\tfrac12(4)=2.5$. The within term is $\\tfrac12(1)+\\tfrac12(0)=0.5$ and the between term is $\\tfrac12(1-2.5)^2+\\tfrac12(4-2.5)^2=2.25$. Total variance is 2.75.",
    "trap": "Total variance has both within-group spread and spread among conditional means.",
    "tests": [
      "c.prob.7.5.2"
    ],
    "provenance": "Original item aligned with Ross §7.5."
  },
  {
    "id": "w.prob.7.6.1",
    "course": "prob",
    "sec": "7.6",
    "marks": 4,
    "title": "Best linear predictor",
    "prompt": "Let X,Y have finite second moments with Var(X)>0. Find the slope and intercept of the affine predictor a+bX minimizing $E[(Y-a-bX)^2]$.",
    "approach": "Set the derivatives of the quadratic mean-square error with respect to a and b equal to zero.",
    "solution": "The normal equations give $a=E[Y]-bE[X]$ and $b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$. Thus the predictor is $E[Y]+\\frac{\\operatorname{Cov}(X,Y)}{\\operatorname{Var}(X)}(X-E[X])$. Its minimum MSE is $\\operatorname{Var}(Y)(1-\\rho^2)$.",
    "trap": "This minimizes only among affine predictors; it equals $E[Y\\mid X]$ only in special cases such as a suitable jointly normal model.",
    "tests": [
      "c.prob.7.6.1",
      "c.prob.7.6.2"
    ],
    "provenance": "Ross, 10e, §7.6, Proposition 6.1, PDF pp. 349–351."
  },
  {
    "id": "w.prob.7.6.2",
    "course": "prob",
    "sec": "7.6",
    "marks": 4,
    "title": "Original drill: regression line",
    "prompt": "For $E[X]=2$, $E[Y]=5$, $\\operatorname{Var}(X)=4$, and $\\operatorname{Cov}(X,Y)=3$, find the best linear predictor of Y from X.",
    "approach": "Use the covariance-to-variance slope and center the predictor at the means.",
    "solution": "The slope is $b=3/4$. The intercept is $a=5-(3/4)2=7/2$. Hence $\\widehat Y=7/2+(3/4)X$.",
    "trap": "The regression slope uses Var(X), the predictor’s variable, in the denominator.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original item aligned with Ross §7.6."
  },
  {
    "id": "w.prob.7.7.1",
    "course": "prob",
    "sec": "7.7",
    "marks": 4,
    "title": "MGF moments and sums",
    "prompt": "Let X have MGF finite near 0. State how to obtain its first two moments and the MGF of a sum of independent variables.",
    "approach": "Differentiate the MGF at zero; use independence to factor the exponential expectation.",
    "solution": "$M_X^{(r)}(0)=E[X^r]$ when differentiation under expectation is justified. For independent $X_i$, $M_{\\sum X_i}(t)=\\prod_iM_{X_i}(t)$ wherever all factors exist. For example, $E[X]=M\\prime_X(0)$ and $\\operatorname{Var}(X)=M\\prime\\prime_X(0)-(M\\prime_X(0))^2$.",
    "trap": "The MGF is not guaranteed to exist for every distribution; moment differentiation needs a neighborhood of zero or another valid interchange condition.",
    "tests": [
      "c.prob.7.7.1",
      "c.prob.7.7.2"
    ],
    "provenance": "Ross, 10e, §7.7, moment and sum properties, PDF pp. 353–359."
  },
  {
    "id": "w.prob.7.7.2",
    "course": "prob",
    "sec": "7.7",
    "marks": 4,
    "title": "Original drill: identify a distribution from its MGF",
    "prompt": "If $M_X(t)=e^{2(e^t-1)}$, identify the distribution of X and calculate E[X] and Var(X).",
    "approach": "Match the expression to a standard MGF and then read its moments.",
    "solution": "A Poisson($\\lambda$) variable has MGF $e^{\\lambda(e^t-1)}$, so $X\\sim\\operatorname{Poisson}(2)$. Therefore $E[X]=2$ and $\\operatorname{Var}(X)=2$.",
    "trap": "Matching the parameter inside the exponent identifies the Poisson mean; do not confuse it with a rate for continuous time.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original item aligned with Ross, 10e, §7.7, MGF properties, PDF pp. 353–359."
  },
  {
    "id": "w.prob.7.8.1",
    "course": "prob",
    "sec": "7.8",
    "marks": 4,
    "title": "Normal sample mean and variance",
    "prompt": "For iid normal observations with mean μ and variance σ², state the laws and independence relation for sample mean and sample variance.",
    "approach": "Use the orthogonal decomposition of a normal vector into the mean direction and residual subspace.",
    "solution": "$\\bar X\\sim N(\\mu,\\sigma^2/n)$; $(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$; and $\\bar X$ and $S^2$ are independent. The chi-square result comes from the squared length of the standardized residual projection, which has rank n−1.",
    "trap": "The independence and chi-square law rely on normal sampling; they are not general iid facts.",
    "tests": [
      "c.prob.7.8.1",
      "c.prob.7.8.2"
    ],
    "provenance": "Ross, 10e, §7.8, Proposition 8.1, PDF pp. 360–363."
  },
  {
    "id": "w.prob.7.8.2",
    "course": "prob",
    "sec": "7.8",
    "marks": 4,
    "title": "Original drill: standardize a sample variance",
    "prompt": "A sample of n=6 is drawn from a normal population with variance 9. What is the distribution of $5S^2/9$?",
    "approach": "Apply the normal-sample chi-square result with n−1 degrees of freedom.",
    "solution": "For a normal sample, $(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$. Here this is $5S^2/9\\sim\\chi^2_5$.",
    "trap": "The degrees of freedom are n−1 because estimating the sample mean imposes one linear constraint on residuals.",
    "tests": [
      "c.prob.7.8.2"
    ],
    "provenance": "Original item aligned with Ross §7.8."
  },
  {
    "id": "w.prob.7.9.1",
    "course": "prob",
    "sec": "7.9",
    "marks": 4,
    "title": "Stieltjes expectation for a mixed law",
    "prompt": "Let X have a distribution with both atoms and a continuous component. How can E[g(X)] be written without splitting into cases?",
    "approach": "Integrate g against the probability measure induced by the CDF.",
    "solution": "The general expression is $E[g(X)]=\\int_{-\\infty}^{\\infty}g(x)\\,dF_X(x)$ when integrable. At atoms the Stieltjes integral includes jumps of F; on a density region it agrees with $\\int g(x)f_X(x)dx$.",
    "trap": "A mixed distribution has no single ordinary density capturing its point masses.",
    "tests": [
      "c.prob.7.9.1"
    ],
    "provenance": "Ross, 10e, §7.9, expectation with respect to a distribution function, PDF pp. 364–366."
  },
  {
    "id": "w.prob.7.9.2",
    "course": "prob",
    "sec": "7.9",
    "marks": 4,
    "title": "Original drill: atom plus continuous mass",
    "prompt": "Let X equal 0 with probability 1/2 and otherwise be uniform on (0,2), with the continuous component chosen with probability 1/2. Find E[X²].",
    "approach": "Condition on the discrete mixture component and average its second moments.",
    "solution": "The atom contributes $\\tfrac12(0^2)=0$. A Uniform(0,2) variable has second moment $4/3$, contributing $\\tfrac12(4/3)=2/3$. Thus $E[X^2]=2/3$.",
    "trap": "The continuous component has total probability 1/2, so weight its conditional moment by 1/2.",
    "tests": [
      "c.prob.7.9.1"
    ],
    "provenance": "Original item aligned with Ross §7.9."
  }
]
);
