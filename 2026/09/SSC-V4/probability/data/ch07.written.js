var QUESTIONS = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
QUESTIONS.push(...
[
  {
    "id": "w.prob.7.5.3",
    "course": "prob",
    "sec": "7.5",
    "marks": 3,
    "title": "Original drill: conditional variance within a group",
    "prompt": "A fair coin chooses group A or B. Given A, X is equally likely to be 0 or 2; given B, X is equally likely to be 3 or 5. Find $\\operatorname{Var}(X\\mid Y=A)$ and $\\operatorname{Var}(X\\mid Y=B)$.",
    "approach": "For each group, center the two possible values at their group average and average the squared distances.",
    "solution": "In either group the conditional mean is the midpoint of its two values. In A it is 1, so $\\operatorname{Var}(X\\mid Y=A)=((0-1)^2+(2-1)^2)/2=1$. In B it is 4, so $\\operatorname{Var}(X\\mid Y=B)=((3-4)^2+(5-4)^2)/2=1$. The groups have different means but the same within-group variance.",
    "trap": "Conditional variance measures spread around the conditional mean, not around the overall mean.",
    "tests": [
      "c.prob.7.5.3"
    ],
    "provenance": "Original item aligned with Ross §7.5."
  },
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
  },
  {
    "id": "w.prob.7.ross.example.2a",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2a: Distance along a road",
    "prompt": "An accident location $X$ and ambulance location $Y$ are independent uniform points on a road of length $L$. Find mean distance between them.",
    "approach": "The joint density is $1/L^2$.",
    "solution": "The joint density is $1/L^2$. For fixed $x$, splitting the inner integral at $y=x$ gives $\\int_0^L\\lvert x-y\\rvert dy=x^2-Lx+L^2/2$. Integrating $x$ from zero to $L$ and dividing by $L^2$ gives $L/3$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2a; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2g",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2g: Mean hypergeometric count",
    "prompt": "Draw $n$ balls without replacement from $N$ balls, $m$ white. Find the mean white count using both inclusion and draw indicators.",
    "approach": "Each of the $m$ white balls is included with probability $n/N$, giving mean $mn/N$.",
    "solution": "Each of the $m$ white balls is included with probability $n/N$, giving mean $mn/N$. Alternatively each of the $n$ draw positions is white with probability $m/N$, giving the same result. The indicators are dependent, but linearity still applies.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2g; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2i",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2i: Complete coupon collection",
    "prompt": "Independent coupons are uniform over $N$ types. Find mean draws to get every type.",
    "approach": "After $i$ distinct types the next is new with chance $(N-i)/N$.",
    "solution": "After $i$ distinct types the next is new with chance $(N-i)/N$. The mean wait for that new type is $N/(N-i)$. Sum from $i=0$ to $N-1$: $E[T]=NH_N$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2i; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.3a",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 example 3a: Binomial factorial moments",
    "prompt": "For $X\\sim\\operatorname{Bin}(n,p)$, find factorial moments, variance and third raw moment.",
    "approach": "The number of successful $k$-subsets is $\\binom Xk$.",
    "solution": "The number of successful $k$-subsets is $\\binom Xk$. Each of $\\binom nk$ subsets succeeds with chance $p^k$, so $E[X(X-1)\\cdots(X-k+1)]=n(n-1)\\cdots(n-k+1)p^k$. For $k=2$, $E[X^2]=n(n-1)p^2+np$ and variance $np(1-p)$. For $k=3$, expand the falling product to get $E[X^3]=n(n-1)(n-2)p^3+3n(n-1)p^2+np$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 3a; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.4a",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 example 4a: Sample mean and variance",
    "prompt": "Independent identically distributed observations have mean $\\mu$, variance $\\sigma^2$, and $n\\ge2$. Find $\\operatorname{Var}(\\bar X)$ and mean of $S^2=\\sum_i(X_i-\\bar X)^2/(n-1)$.",
    "approach": "Independence gives $\\operatorname{Var}(\\bar X)=n\\sigma^2/n^2=\\sigma^2/n$.",
    "solution": "Independence gives $\\operatorname{Var}(\\bar X)=n\\sigma^2/n^2=\\sigma^2/n$. Expand centered squares: $\\sum_i(X_i-\\bar X)^2=\\sum_i(X_i-\\mu)^2-n(\\bar X-\\mu)^2$. Its mean is $n\\sigma^2-n(\\sigma^2/n)=(n-1)\\sigma^2$, so $E[S^2]=\\sigma^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 4a; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.4c",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 example 4c: Sampling a finite population",
    "prompt": "A population has fixed values $v_1,\\ldots,v_N$. Uniformly choose $n$ people without replacement and sum their values $S$. Find mean and variance, and specialize to a zero-one population with proportion $p$ of ones.",
    "approach": "Put $\\bar v=\\sum v_i/N$ and $s_v^2=\\sum(v_i-\\bar v)^2/N$.",
    "solution": "Put $\\bar v=\\sum v_i/N$ and $s_v^2=\\sum(v_i-\\bar v)^2/N$. Inclusion indicators have mean $n/N$ and distinct-pair covariance $-n(N-n)/[N^2(N-1)]$. Expanding the weighted sum gives $E[S]=n\\bar v$, $\\operatorname{Var}(S)=n(N-n)s_v^2/(N-1)$ for $N>1$. For zero-one values this is $np$ and $n(N-n)p(1-p)/(N-1)$. The sample proportion has mean $p$ and variance $(N-n)p(1-p)/[n(N-1)]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 4c; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.4f",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 example 4f: Multinomial count covariance",
    "prompt": "In $m$ independent trials with category probabilities $p_i$, derive covariance of two different counts $N_i,N_j$.",
    "approach": "Write each count as a sum of trial indicators.",
    "solution": "Write each count as a sum of trial indicators. Indicators in different trials are independent. In the same trial different-category indicators cannot both be one, so their covariance is $-p_ip_j$. There are $m$ contributing trials, giving $\\operatorname{Cov}(N_i,N_j)=-mp_ip_j$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 4f; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5a",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5a: One binomial count given the total",
    "prompt": "Independent $X,Y$ are each binomial $(n,p)$. Find the conditional PMF and mean of $X$ given $X+Y=m$.",
    "approach": "Division of joint by total probability cancels the powers of $p$ and $1-p$: $P(X=k\\mid X+Y=m)=\\binom nk\\binom n{m-k}/\\binom{2n}m$, for $\\max(0,m-n)\\le k\\le\\min(n,m)$.",
    "solution": "Division of joint by total probability cancels the powers of $p$ and $1-p$: $P(X=k\\mid X+Y=m)=\\binom nk\\binom n{m-k}/\\binom{2n}m$, for $\\max(0,m-n)\\le k\\le\\min(n,m)$. This is hypergeometric, with mean $m/2$. The conditioning event must have positive probability.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5a; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5c",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5c: Miner's mean escape time",
    "prompt": "A miner chooses three doors equally on every visit. One exits after three hours; the others return after five or seven hours. Find mean escape time.",
    "approach": "If the mean is $m$, the three first-door cases have means $3,5+m,7+m$.",
    "solution": "If the mean is $m$, the three first-door cases have means $3,5+m,7+m$. Hence $m=(15+2m)/3$, giving $m=15$ hours.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5c; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5d",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5d: Random customer spending",
    "prompt": "A store's customer count $N$ has mean 50. Each customer's spending is independent of $N$ and has mean eight dollars. Find mean daily spending.",
    "approach": "Given $N=n$, the total spending has mean $8n$.",
    "solution": "Given $N=n$, the total spending has mean $8n$. Average this conditional mean: $E[S]=8E[N]=400$ dollars. More generally an independent random sum has mean $E[N]E[X]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5d; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.6a",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 example 6a: Predicting a son's height",
    "prompt": "Given a father's height $x$ inches, his adult son's height is normal with mean $x+1$ and variance four. What is the minimum-squared-error prediction for a father six feet tall?",
    "approach": "The best squared-error guess within a fixed father's-height group is the group's mean.",
    "solution": "The best squared-error guess within a fixed father's-height group is the group's mean. Six feet is 72 inches, so the prediction is $72+1=73$ inches. The conditional error variance is four square inches.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 6a; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7a",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7a: Binomial MGF",
    "prompt": "Derive the MGF, mean and variance for binomial $(n,p)$ $X$.",
    "approach": "The binomial theorem gives $M(t)=\\sum_k\\binom nk(pe^t)^k(1-p)^{n-k}=(1-p+pe^t)^n$.",
    "solution": "The binomial theorem gives $M(t)=\\sum_k\\binom nk(pe^t)^k(1-p)^{n-k}=(1-p+pe^t)^n$. Differentiating at zero gives $E[X]=np$, $E[X^2]=n(n-1)p^2+np$, and variance $np(1-p)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7a; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7f",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7f: Sum of independent binomials",
    "prompt": "Independent counts are binomial $(n,p)$ and $(m,p)$. Use MGFs to find their sum's law.",
    "approach": "Independence multiplies MGFs: $(1-p+pe^t)^n(1-p+pe^t)^m=(1-p+pe^t)^{n+m}$.",
    "solution": "Independence multiplies MGFs: $(1-p+pe^t)^n(1-p+pe^t)^m=(1-p+pe^t)^{n+m}$. This identifies binomial $(n+m,p)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7f; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7h",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7h: Sum of independent normals",
    "prompt": "Independent normals have means $\\mu_1,\\mu_2$ and variances $v_1,v_2$. Identify their sum with MGFs.",
    "approach": "Multiplying $e^{\\mu_1t+v_1t^2/2}$ and $e^{\\mu_2t+v_2t^2/2}$ gives $e^{(\\mu_1+\\mu_2)t+(v_1+v_2)t^2/2}$.",
    "solution": "Multiplying $e^{\\mu_1t+v_1t^2/2}$ and $e^{\\mu_2t+v_2t^2/2}$ gives $e^{(\\mu_1+\\mu_2)t+(v_1+v_2)t^2/2}$. The sum is normal with summed mean and variance.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7h; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.8a",
    "course": "prob",
    "sec": "7.8",
    "marks": 5,
    "title": "Ross 7 example 8a: Comparing correlated normals",
    "prompt": "For bivariate normal $X,Y$ with means $\\mu_X,\\mu_Y$, standard deviations $\\sigma_X,\\sigma_Y$ and correlation $\\rho$, find $P(X<Y)$.",
    "approach": "The difference is normal with mean $\\mu_X-\\mu_Y$ and variance $v=\\sigma_X^2+\\sigma_Y^2-2\\rho\\sigma_X\\sigma_Y$.",
    "solution": "The difference is normal with mean $\\mu_X-\\mu_Y$ and variance $v=\\sigma_X^2+\\sigma_Y^2-2\\rho\\sigma_X\\sigma_Y$. For $v>0$, standardize to obtain $\\Phi((\\mu_Y-\\mu_X)/\\sqrt v)$. For $v=0$, the difference is constant, so the strict-comparison probability is one if that constant is negative and zero otherwise.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.8.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 8a; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.8b",
    "course": "prob",
    "sec": "7.8",
    "marks": 5,
    "title": "Ross 7 example 8b: Posterior normal mean",
    "prompt": "$\\Theta$ is normal $(\\mu,\\sigma^2)$ and $X\\mid\\Theta=\\theta$ is normal $(\\theta,1)$. Find the law of $\\Theta\\mid X=x$.",
    "approach": "Represent $X=\\Theta+Z$ with independent standard normal $Z$.",
    "solution": "Represent $X=\\Theta+Z$ with independent standard normal $Z$. The pair is jointly normal, $E[X]=\\mu$, variance $1+\\sigma^2$ and covariance with $\\Theta$ is $\\sigma^2$. Normal conditioning gives mean $\\mu+\\sigma^2(x-\\mu)/(1+\\sigma^2)$ and variance $\\sigma^2/(1+\\sigma^2)$. A zero prior variance yields a constant posterior.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.8.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 8b; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.prob.1",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 1: Coin and die winnings",
    "prompt": "Roll a fair die and independently toss a fair coin. Receive twice the die value for heads and half its value for tails. Find the average payout.",
    "approach": "Let $D$ be the die and $C$ the multiplier.",
    "solution": "Let $D$ be the die and $C$ the multiplier. Independence gives $E[CD]=E[C]E[D]=((2+1/2)/2)(7/2)=35/8$ units.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 1; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.prob.11",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 11: Changeovers",
    "prompt": "In $n$ independent tosses with head chance $p$, find the mean number of changes between adjacent outcomes.",
    "approach": "At each of the $n-1$ boundaries, the outcomes differ with probability $p(1-p)+(1-p)p=2p(1-p)$.",
    "solution": "At each of the $n-1$ boundaries, the outcomes differ with probability $p(1-p)+(1-p)p=2p(1-p)$. Thus the mean is $2(n-1)p(1-p)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 11; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.prob.18",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 18: Rank matches",
    "prompt": "Turn over all 52 cards, predicting ace, two, through king repeatedly. Count positions whose card has the predicted rank. Find the mean.",
    "approach": "Each position matches with probability $4/52=1/13$.",
    "solution": "Each position matches with probability $4/52=1/13$. Sum 52 indicators to get 4.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 18; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.prob.37",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 37: Sum and difference",
    "prompt": "For two independent fair die values $A,B$, let $X=A+B,Y=A-B$. Find their covariance.",
    "approach": "Expand covariance: $\\operatorname{Cov}(A+B,A-B)=\\operatorname{Var}(A)-\\operatorname{Var}(B)=0$; the cross terms cancel..",
    "solution": "Expand covariance: $\\operatorname{Cov}(A+B,A-B)=\\operatorname{Var}(A)-\\operatorname{Var}(B)=0$; the cross terms cancel.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 37; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.prob.48",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 48: Casino wins share a bank roll",
    "prompt": "Two players and a bank independently roll two fair dice. A player wins if their sum strictly exceeds the bank's. Show their win indicators have positive correlation and explain.",
    "approach": "Given bank sum $B$, the indicators are independent with success chance $q(B)=P(S>B)$.",
    "solution": "Given bank sum $B$, the indicators are independent with success chance $q(B)=P(S>B)$. Total covariance gives $\\operatorname{Cov}(I_1,I_2)=\\operatorname{Var}(q(B))>0$, since $q(B)$ is not constant. A low bank sum helps both players; a high one hurts both. Each indicator has positive variance, so correlation is positive.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 48; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.prob.65",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 65: Tree treatments",
    "prompt": "A tree's infection level $U$ is uniform $(0,1)$. Given $U=u$, treatments independently cure with probability $1-u$. Find cure chance in one treatment, chance the first two fail, and chance cure first occurs at treatment $n$.",
    "approach": "Average the conditional probabilities: $P(\\text{first cure})=E[1-U]=1/2$, $P(\\text{two failures})=E[U^2]=1/3$, and $P(N=n)=\\int_0^1u^{n-1}(1-u)du=1/[n(n+1)]$.",
    "solution": "Average the conditional probabilities: $P(\\text{first cure})=E[1-U]=1/2$, $P(\\text{two failures})=E[U^2]=1/3$, and $P(N=n)=\\int_0^1u^{n-1}(1-u)du=1/[n(n+1)]$. The mean waiting time is infinite, since the tail probabilities are $P(N\\ge n)=1/n$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 65; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.prob.76",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 76: Uniform count of heads",
    "prompt": "For the randomly biased coin of Problem 75, show the head count in $n$ tosses is uniform on $0,\\ldots,n$.",
    "approach": "Condition on $P=p$ and integrate: $P(X=i)=\\binom ni\\int_0^1p^i(1-p)^{n-i}dp=\\binom ni i!(n-i)!/(n+1)!=1/(n+1)$..",
    "solution": "Condition on $P=p$ and integrate: $P(X=i)=\\binom ni\\int_0^1p^i(1-p)^{n-i}dp=\\binom ni i!(n-i)!/(n+1)!=1/(n+1)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 76; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theor.1",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 1: Best fixed squared-error guess",
    "prompt": "For a variable with finite second moment show that $E[(X-a)^2]$ is smallest at $a=E[X]$.",
    "approach": "Write $\\mu=E[X]$.",
    "solution": "Write $\\mu=E[X]$. Expanding around $\\mu$ gives $E[(X-a)^2]=\\operatorname{Var}(X)+(\\mu-a)^2$, since the cross term has mean zero. The last square is smallest, namely zero, at $a=\\mu$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 1; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theor.8",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 8: Stochastic order and means",
    "prompt": "Suppose $P(X>t)\\ge P(Y>t)$ for every real $t$. Show $E[X]\\ge E[Y]$ for nonnegative variables and for general variables with finite absolute means.",
    "approach": "For nonnegative variables integrate the ordered tails.",
    "solution": "For nonnegative variables integrate the ordered tails. For general integrable variables use $E[X]=\\int_0^\\infty P(X>t)dt-\\int_0^\\infty P(X<-t)dt$. The given order makes the first integral larger and the subtracted integral smaller, so the mean is larger.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 8; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theor.19",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 19: Multinomial covariance by variance",
    "prompt": "In $m$ trials let $N_i,N_j$ count distinct categories of probabilities $p_i,p_j$. Identify the law of $N_i+N_j$ and derive their covariance.",
    "approach": "The combined count is binomial $(m,p_i+p_j)$.",
    "solution": "The combined count is binomial $(m,p_i+p_j)$. Insert its variance into $\\operatorname{Var}(N_i+N_j)=mp_i(1-p_i)+mp_j(1-p_j)+2\\operatorname{Cov}(N_i,N_j)$. Subtracting gives covariance $-mp_ip_j$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 19; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theor.21",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 21: Conditional covariance",
    "prompt": "Define covariance given $Z$. Derive its product formula, the total covariance formula, and recover total variance.",
    "approach": "Expanding within each fixed $Z$ gives $\\operatorname{Cov}(X,Y\\mid Z)=E[XY\\mid Z]-E[X\\mid Z]E[Y\\mid Z]$.",
    "solution": "Expanding within each fixed $Z$ gives $\\operatorname{Cov}(X,Y\\mid Z)=E[XY\\mid Z]-E[X\\mid Z]E[Y\\mid Z]$. Average and add/subtract $E[X]E[Y]$ to obtain $\\operatorname{Cov}(X,Y)=E[\\operatorname{Cov}(X,Y\\mid Z)]+\\operatorname{Cov}(E[X\\mid Z],E[Y\\mid Z])$. Taking $X=Y$ gives $\\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid Z)]+\\operatorname{Var}(E[X\\mid Z])$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 21; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theor.47",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 47: Standard normal moments",
    "prompt": "Use its MGF to find every moment of standard normal $Z$.",
    "approach": "$M(t)=e^{t^2/2}=\\sum_{j\\ge0}t^{2j}/(2^jj!)$.",
    "solution": "$M(t)=e^{t^2/2}=\\sum_{j\\ge0}t^{2j}/(2^jj!)$. Compare with $\\sum_{n\\ge0}E[Z^n]t^n/n!$. Odd moments vanish and $E[Z^{2j}]=(2j)!/(2^jj!)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 47; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.2",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 2: White followed by black",
    "prompt": "Remove $n$ white and $m$ black balls in random order. Find the mean number of adjacent white-then-black pairs.",
    "approach": "With $L=n+m\\ge2$, each of $L-1$ boundaries has probability $(n/L)(m/(L-1))$.",
    "solution": "With $L=n+m\\ge2$, each of $L-1$ boundaries has probability $(n/L)(m/(L-1))$. Add the indicators to get $nm/(n+m)$. For a single ball the count is zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 2; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.8",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 8: Families leaving after Sanchez",
    "prompt": "There are $n_k$ families with $k$ checked bags. Bags arrive in a uniform random order. Sanchez has $j\\ge1$ bags. Find mean other families leaving after Sanchez.",
    "approach": "For another family with $k$ bags, inspect only its bags and Sanchez's.",
    "solution": "For another family with $k$ bags, inspect only its bags and Sanchez's. That family departs later exactly when the final bag among those $j+k$ belongs to it, with probability $k/(j+k)$. Sum over families, excluding Sanchez: $\\sum_{k\\ge1}n_k k/(j+k)-1/2$. Zero-bag families depart immediately and contribute zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 8; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.14",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 selftest 14: Aces and spades",
    "prompt": "In a uniform thirteen-card bridge hand let $X$ count aces and $Y$ spades. Show they are uncorrelated and decide whether they are independent.",
    "approach": "Let $I_c$ indicate inclusion of card $c$.",
    "solution": "Let $I_c$ indicate inclusion of card $c$. Its probability is $1/4$; distinct-card covariance is $-13\\cdot39/(52^2\\cdot51)=-1/272$. There is one overlapping card, the ace of spades. The $4\\cdot13$ cross terms therefore give $\\operatorname{Cov}(X,Y)=3/16+51(-1/272)=0$. They are not independent: given all thirteen spades, $X=1$ certainly, unlike its marginal law.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 14; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.20",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 20: Higher moments from tails",
    "prompt": "For nonnegative $X$ with CDF $F$ prove the tail-integral formula for $E[X^n]$, where $n\\ge1$.",
    "approach": "The identity $X^n=n\\int_0^\\infty x^{n-1}1_{\\{x<X\\}}dx$ follows by integration up to $X$.",
    "solution": "The identity $X^n=n\\int_0^\\infty x^{n-1}1_{\\{x<X\\}}dx$ follows by integration up to $X$. Nonnegative integration allows averaging in either order, giving $E[X^n]=n\\int_0^\\infty x^{n-1}[1-F(x)]dx$. The factor $n$ is required.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 20; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.22",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 22: Bivariate Poisson",
    "prompt": "Independent Poisson $X_1,X_2,X_3$ have means $\\lambda_1,\\lambda_2,\\lambda_3$. Set $X=X_1+X_2,Y=X_2+X_3$. Find means, covariance and joint PMF.",
    "approach": "Means are $\\lambda_1+\\lambda_2$ and $\\lambda_2+\\lambda_3$; only the shared $X_2$ contributes covariance $\\lambda_2$.",
    "solution": "Means are $\\lambda_1+\\lambda_2$ and $\\lambda_2+\\lambda_3$; only the shared $X_2$ contributes covariance $\\lambda_2$. For nonnegative integers $i,j$, condition on its value $k$: $P(X=i,Y=j)=e^{-(\\lambda_1+\\lambda_2+\\lambda_3)}\\sum_{k=0}^{\\min(i,j)}\\lambda_1^{i-k}\\lambda_2^k\\lambda_3^{j-k}/[(i-k)!k!(j-k)!]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 22; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.1",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 1: Coin and die winnings",
    "prompt": "Roll a fair die and independently toss a fair coin. Receive twice the die value for heads and half its value for tails. Find the average payout.",
    "approach": "Let $D$ be the die and $C$ the multiplier.",
    "solution": "Let $D$ be the die and $C$ the multiplier. Independence gives $E[CD]=E[C]E[D]=((2+1/2)/2)(7/2)=35/8$ units.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 1; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.2",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 2: Possible Clue solutions",
    "prompt": "There are 6 suspects, 6 weapons and 9 rooms. One of each is hidden; three of the remaining 18 cards are dealt to you. If their category counts are $S,W,R$, find the original number of possibilities, the number $X$ after seeing your hand, and $E[X]$.",
    "approach": "Initially $6\\cdot6\\cdot9=324$.",
    "solution": "Initially $6\\cdot6\\cdot9=324$. Afterwards $X=(6-S)(6-W)(9-R)$. For a fixed candidate triple, let $k$ be the number of its cards among the 18 cards available to be dealt. It survives your hand with probability $\\binom{18-k}{3}/\\binom{18}{3}$. The counts of candidate triples for $k=0,1,2,3$ are $1,18,105,200$: expand $(1+5z)^2(1+8z)$. Therefore $E[X]=[\\binom{18}{3}+18\\binom{17}{3}+105\\binom{16}{3}+200\\binom{15}{3}]/\\binom{18}{3}=20357/102\\approx199.5784$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 2; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.3",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 3: Stop at the first win",
    "prompt": "Independent fair bets win or lose one unit. Stop at the first win. For net winnings $W$, find the probabilities of a positive and negative result and the mean.",
    "approach": "If the first win is on bet $N$, then $P(N=n)=2^{-n}$ and $W=2-N$.",
    "solution": "If the first win is on bet $N$, then $P(N=n)=2^{-n}$ and $W=2-N$. Thus $P(W>0)=1/2$, $P(W<0)=P(N\\ge3)=1/4$, and $E[W]=2-E[N]=0$, since $E[N]=2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 3; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.4",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 4: Uniform within a random interval",
    "prompt": "The joint density is $f(x,y)=1/y$ for $0<x<y<1$. Find $E[XY],E[X],E[Y]$.",
    "approach": "Integrating in $x$ gives $f_Y(y)=1$, and $X$ given $Y=y$ is uniform on $(0,y)$.",
    "solution": "Integrating in $x$ gives $f_Y(y)=1$, and $X$ given $Y=y$ is uniform on $(0,y)$. Hence $E[Y]=1/2$, $E[X]=E[Y/2]=1/4$, and $E[XY]=E[Y^2/2]=1/6$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 4; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.5",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 5: Ambulance travel on a grid",
    "prompt": "An accident is uniform in a square of side 3 centered on the hospital. Roads require distance $D=\\lvert X\\rvert+\\lvert Y\\rvert$. Find $E[D]$.",
    "approach": "Each coordinate is uniform on $(-3/2,3/2)$, so $E[\\lvert X\\rvert]=E[\\lvert Y\\rvert]=3/4$.",
    "solution": "Each coordinate is uniform on $(-3/2,3/2)$, so $E[\\lvert X\\rvert]=E[\\lvert Y\\rvert]=3/4$. Add them to obtain $E[D]=3/2$ miles.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 5; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.6",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 6: Ten dice",
    "prompt": "Find the expected sum of ten fair die rolls.",
    "approach": "One die has mean $7/2$.",
    "solution": "One die has mean $7/2$. Linearity gives $10(7/2)=35$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 6; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.7",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 7: Two random selections",
    "prompt": "Two people independently choose 3 of 10 objects. Find expected counts chosen by both, by neither, and by exactly one.",
    "approach": "For a particular object the selection probability is $3/10$ for each person.",
    "solution": "For a particular object the selection probability is $3/10$ for each person. Its three probabilities are $.09,.49,.42$. Sum ten indicators: the answers are $.9,4.9,4.2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 7; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.8",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 8: Dinner tables",
    "prompt": "Each pair among $N$ arrivals are independently friends with probability $p$. An arrival opens a new table only if no earlier arrival is a friend. Find the expected table count.",
    "approach": "Arrival $i$ opens a table with probability $(1-p)^{i-1}$.",
    "solution": "Arrival $i$ opens a table with probability $(1-p)^{i-1}$. Thus $E[T]=\\sum_{i=1}^N(1-p)^{i-1}=[1-(1-p)^N]/p$ for $p>0$; for $p=0$ it is $N$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 8; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.9",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 9: Restricted urn choices",
    "prompt": "Independently, ball $i$ chooses uniformly from urns $1,\\ldots,i$, for $i=1,\\ldots,n$. Find the mean empty-urn count and the chance none is empty.",
    "approach": "Urn $j$ is empty with probability $\\prod_{i=j}^n(1-1/i)=(j-1)/n$.",
    "solution": "Urn $j$ is empty with probability $\\prod_{i=j}^n(1-1/i)=(j-1)/n$. Summing gives $(n-1)/2$. To fill all urns, ball $n$ must choose $n$, then ball $n-1$ must choose $n-1$, and so on. The probability is $1/n!$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 9; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.10",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 10: Dependent success trials",
    "prompt": "Three trials have the same success chance and their success count $X$ has mean 1.8. Find the largest and smallest possible $P(X=3)$ and give constructions.",
    "approach": "Each success probability is $.6$.",
    "solution": "Each success probability is $.6$. Since $3P(X=3)\\le E[X]$, the maximum is $.6$, attained when all three succeed together with probability $.6$. The minimum is zero: with probability $.8$ choose a uniformly random pair of successful trials, and with probability $.2$ choose a uniformly random single successful trial. Each marginal is $(.8\\cdot2+.2)/3=.6$, and $X$ never equals 3.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 10; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.11",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 11: Changeovers",
    "prompt": "In $n$ independent tosses with head chance $p$, find the mean number of changes between adjacent outcomes.",
    "approach": "At each of the $n-1$ boundaries, the outcomes differ with probability $p(1-p)+(1-p)p=2p(1-p)$.",
    "solution": "At each of the $n-1$ boundaries, the outcomes differ with probability $p(1-p)+(1-p)p=2p(1-p)$. Thus the mean is $2(n-1)p(1-p)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 11; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.12",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 12: Neighbors in a line or circle",
    "prompt": "Randomly arrange $n$ men and $n$ women. Find the mean number of men with at least one female neighbor, first in a line and then around a circle.",
    "approach": "For $n\\ge2$, a man is at an endpoint with probability $1/n$; then his neighbor is male with probability $(n-1)/(2n-1)$.",
    "solution": "For $n\\ge2$, a man is at an endpoint with probability $1/n$; then his neighbor is male with probability $(n-1)/(2n-1)$. Otherwise both neighbors are male with probability $(n-1)(n-2)/[(2n-1)(2n-2)]$. Subtract this weighted probability from 1 and multiply by $n$. In a circle the answer is $n[1-(n-1)(n-2)/((2n-1)(2n-2))]$. For $n=1$, both answers are 1.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 12; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.13",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 13: Cards matching ages",
    "prompt": "Cards numbered 1 to 1000 are dealt randomly, one per person, to 1000 people. Find the expected number whose card equals their age.",
    "approach": "Each person with an integer age in $1,\\ldots,1000$ matches with probability $1/1000$.",
    "solution": "Each person with an integer age in $1,\\ldots,1000$ matches with probability $1/1000$. Thus the mean is the number of eligible people divided by 1000, ordinarily 1 if everyone is eligible.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 13; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.14",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 14: Replacing black balls",
    "prompt": "Start with $m$ black balls. Each step replaces a black ball by a black ball with probability $p$ or a white one otherwise. Find the mean steps to remove all black balls.",
    "approach": "A white replacement reduces the black count by one.",
    "solution": "A white replacement reduces the black count by one. Each such reduction takes a geometric waiting time of mean $1/(1-p)$. There are $m$ reductions, giving $m/(1-p)$ for $p<1$; with $p=1$ and $m>0$ the time is infinite.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 14; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.15",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 15: Swapped hat pairs",
    "prompt": "In a random permutation of $N$ hats, count pairs of people who receive each other's hats. Find the mean count.",
    "approach": "For each unordered pair the swap probability is $(N-2)!/N!=1/[N(N-1)]$.",
    "solution": "For each unordered pair the swap probability is $(N-2)!/N!=1/[N(N-1)]$. There are $\\binom N2$ pairs, so the mean is $1/2$ for $N\\ge2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 15; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.16",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 16: Truncated normal",
    "prompt": "For standard normal $Z$, put $X=Z$ if $Z>x$ and zero otherwise. Find $E[X]$.",
    "approach": "With $\\phi(z)=e^{-z^2/2}/\\sqrt{2\\pi}$ and $\\phi'(z)=-z\\phi(z)$, $E[X]=\\int_x^\\infty z\\phi(z)\\,dz=\\phi(x)$..",
    "solution": "With $\\phi(z)=e^{-z^2/2}/\\sqrt{2\\pi}$ and $\\phi'(z)=-z\\phi(z)$, $E[X]=\\int_x^\\infty z\\phi(z)\\,dz=\\phi(x)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 16; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.17",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 17: Guessing shuffled cards",
    "prompt": "Guess each card in a random deck of $n$ distinct cards. Find mean correct guesses with no feedback, with each past card revealed, and when only correctness is revealed using a repeated-card-until-correct strategy.",
    "approach": "Without feedback each guess has chance $1/n$, giving 1.",
    "solution": "Without feedback each guess has chance $1/n$, giving 1. With full feedback guess any unseen card; the successive chances are $1/n,1/(n-1),\\ldots,1$, giving $H_n$. Under correctness-only feedback, take a fixed order of distinct guesses, moving to the next only after a success. At least $k$ successes occur exactly when those first $k$ named cards appear in their fixed order; that chance is $1/k!$. The tail-sum formula gives $E[N]=\\sum_{k=1}^n1/k!$, approaching $e-1$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 17; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.18",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 18: Rank matches",
    "prompt": "Turn over all 52 cards, predicting ace, two, through king repeatedly. Count positions whose card has the predicted rank. Find the mean.",
    "approach": "Each position matches with probability $4/52=1/13$.",
    "solution": "Each position matches with probability $4/52=1/13$. Sum 52 indicators to get 4.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 18; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.19",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 19: Insects before type one",
    "prompt": "Independent insect types have probabilities $p_1,\\ldots,p_r$, with $p_1>0$. Find the expected number caught before the first type 1, and the expected number of distinct other types seen first.",
    "approach": "The first type-1 time has mean $1/p_1$, so the first answer is $(1-p_1)/p_1$.",
    "solution": "The first type-1 time has mean $1/p_1$, so the first answer is $(1-p_1)/p_1$. Type $j\\ne1$ appears before type 1 with probability $p_j/(p_1+p_j)$: ignore other types and compare the first of those two. The second answer is $\\sum_{j=2}^r p_j/(p_1+p_j)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 19; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.20",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 20: Weighted removal",
    "prompt": "Balls have positive weights $w_1,\\ldots,w_n$. At each removal choose a remaining ball proportionally to its weight. Find the mean number removed before ball 1.",
    "approach": "For ball $j\\ne1$, the chance it precedes ball 1 is $w_j/(w_1+w_j)$, obtained by looking only at which of these two is removed first.",
    "solution": "For ball $j\\ne1$, the chance it precedes ball 1 is $w_j/(w_1+w_j)$, obtained by looking only at which of these two is removed first. Add these indicators: $E[N]=\\sum_{j=2}^n w_j/(w_1+w_j)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 20; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.21",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 21: Birthday counts",
    "prompt": "For 100 independent birthdays uniform on 365 days, find the mean number of days with exactly three birthdays and the mean number of different birthdays.",
    "approach": "For one day the count is binomial $(100,1/365)$.",
    "solution": "For one day the count is binomial $(100,1/365)$. The first mean is $365\\binom{100}{3}(1/365)^3(364/365)^{97}$. The second is $365[1-(364/365)^{100}]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 21; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.22",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 22: All die faces",
    "prompt": "Find the mean rolls until all six faces of a fair die have appeared.",
    "approach": "After $i$ different faces, the chance of a new face is $(6-i)/6$.",
    "solution": "After $i$ different faces, the chance of a new face is $(6-i)/6$. The successive mean waiting times sum to $6H_6=147/10=14.7$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 22; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.23",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 23: Transferring balls",
    "prompt": "Urn 1 has 5 white and 6 black balls; urn 2 has 8 white and 10 black balls. Move two random balls from 1 to 2, then draw three from 2. Find the mean white count.",
    "approach": "The transferred white count $K$ has mean $2(5/11)=10/11$.",
    "solution": "The transferred white count $K$ has mean $2(5/11)=10/11$. Given $K$, the mean white draw count is $3(8+K)/20$. Average this to get $147/110$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 23; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.24",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 24: Large and small pills",
    "prompt": "A bottle starts with $m$ large and $n$ small pills. A selected small pill is eaten; a selected large pill is halved, one half eaten and the other returned as small. Find the mean small pills $X$ remaining just after the last large pill is selected, and the mean day $Y$ of that selection.",
    "approach": "Each original small pill survives all $m$ large selections with probability $1/(m+1)$.",
    "solution": "Each original small pill survives all $m$ large selections with probability $1/(m+1)$. The half of a given large pill survives until the last large selection with probability $1/(j+1)$ when $j$ other large pills remain; the values $j=0,\\ldots,m-1$ each arise once. Hence $E[X]=n/(m+1)+H_m$. Conservation of half-pill units gives $Y+X=2m+n$, so $E[Y]=2m+n-n/(m+1)-H_m$ for $m\\ge1$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 24; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.25",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 25: First upward step",
    "prompt": "Independent identically distributed continuous values decrease until the first upward step, whose index is $N\\ge2$. Show that $E[N]=e$.",
    "approach": "The first $k$ values are in decreasing order with probability $1/k!$.",
    "solution": "The first $k$ values are in decreasing order with probability $1/k!$. Thus $P(N\\ge n)=1/(n-1)!$ for $n\\ge2$, while $P(N\\ge1)=1$. Sum tails: $E[N]=1+\\sum_{k=1}^\\infty1/k!=e$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 25; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.26",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 26: Uniform extremes",
    "prompt": "For $n$ independent uniform $(0,1)$ values find the means of the maximum and minimum.",
    "approach": "The maximum has CDF $x^n$, so its mean is $\\int_0^1(1-x^n)dx=n/(n+1)$.",
    "solution": "The maximum has CDF $x^n$, so its mean is $\\int_0^1(1-x^n)dx=n/(n+1)$. The minimum exceeds $x$ with probability $(1-x)^n$, giving mean $1/(n+1)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 26; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.27",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 27: Pigeonhole by averaging",
    "prompt": "Use a random choice argument to show that 101 objects in ten boxes force a box with at least 11 objects.",
    "approach": "Choose a box uniformly and let $X$ be its object count.",
    "solution": "Choose a box uniformly and let $X$ be its object count. Then $E[X]=101/10=10.1$. If every box had at most 10, the mean would be at most 10, a contradiction.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 27; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.28",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 28: Circular reliability",
    "prompt": "A ring of 47 components has eight failures. Show that some block of twelve consecutive components contains at least three failures.",
    "approach": "Choose the starting position uniformly.",
    "solution": "Choose the starting position uniformly. Each failed component belongs to twelve of the 47 blocks. Thus the mean failures in a block is $8\\cdot12/47=96/47>2$. Some block must have at least three; a 3-of-12-out-of-47 system cannot function.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 28; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.29",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 29: Two coupon groups",
    "prompt": "Coupon probabilities are $1/8,1/8,3/8,3/8$. Find mean draws for all four types, both first-group types, both second-group types, and both types of either group.",
    "approach": "For a specified set $A$, its complete-set mean is $\\sum_{\\varnothing\\ne S\\subseteq A}(-1)^{\\lvert S\\rvert+1}/\\sum_{i\\in S}p_i$.",
    "solution": "For a specified set $A$, its complete-set mean is $\\sum_{\\varnothing\\ne S\\subseteq A}(-1)^{\\lvert S\\rvert+1}/\\sum_{i\\in S}p_i$. For all four, expanding gives $64/3-(4+8+4/3)+(16/5+16/7)-1=437/35$. For the first pair it gives $8+8-4=12$; for the second $8/3+8/3-4/3=4$. If $T_1,T_2$ complete the groups, then $\\min(T_1,T_2)+\\max(T_1,T_2)=T_1+T_2$, and the maximum completes all four. Thus the either-group mean is $16-437/35=123/35$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 29; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.30",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 problem 30: Difference squared",
    "prompt": "Independent identically distributed $X,Y$ have mean $\\mu$ and variance $\\sigma^2$. Find $E[(X-Y)^2]$.",
    "approach": "The difference has mean zero and variance $\\sigma^2+\\sigma^2$ because independence makes the covariance zero.",
    "solution": "The difference has mean zero and variance $\\sigma^2+\\sigma^2$ because independence makes the covariance zero. Therefore the answer is $2\\sigma^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 30; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.31",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 31: Variance of ten dice",
    "prompt": "Find the variance of the sum of ten independent fair die rolls.",
    "approach": "For one die $E[D^2]=91/6$ and $\\operatorname{Var}(D)=91/6-(7/2)^2=35/12$.",
    "solution": "For one die $E[D^2]=91/6$ and $\\operatorname{Var}(D)=91/6-(7/2)^2=35/12$. Independence gives sum variance $10(35/12)=175/6$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 31; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.32",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 32: Empty-urn variance",
    "prompt": "For the restricted ball choices of Problem 9, find the variance of the number of empty urns.",
    "approach": "Let $I_j$ indicate empty urn $j$.",
    "solution": "Let $I_j$ indicate empty urn $j$. Its probability is $a_j=(j-1)/n$. For $j<k$, both empty has probability $b_{jk}=(j-1)(k-2)/[n(n-1)]$ for $n\\ge2$, from multiplying avoidance probabilities. Thus $\\operatorname{Var}(\\sum I_j)=\\sum_j a_j(1-a_j)+2\\sum_{j<k}(b_{jk}-a_ja_k)=(n+1)/12$ for $n\\ge2$; for $n=1$ the variance is zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 32; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.33",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 33: Shift and scale",
    "prompt": "If $E[X]=1$ and $\\operatorname{Var}(X)=5$, find $E[(2+X)^2]$ and $\\operatorname{Var}(4+3X)$.",
    "approach": "$E[X^2]=5+1^2=6$, so the first answer is $4+4E[X]+E[X^2]=14$.",
    "solution": "$E[X^2]=5+1^2=6$, so the first answer is $4+4E[X]+E[X^2]=14$. The second is $3^2\\cdot5=45$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 33; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.34",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 34: Couples around a table",
    "prompt": "Ten couples sit randomly around a circular table. Find the mean and variance of the number of wives next to their husbands.",
    "approach": "A specified couple is adjacent with probability $p=2/19$.",
    "solution": "A specified couple is adjacent with probability $p=2/19$. Two specified couples are both adjacent with probability $q=4/(19\\cdot18)$, by treating each as a block and allowing either orientation. Thus $E[X]=10p=20/19$, and $\\operatorname{Var}(X)=10p(1-p)+90(q-p^2)=360/361$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 34; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.35",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 35: Waiting for ranks and suits",
    "prompt": "Turn over a shuffled deck. Find mean cards until two aces, five spades, and all thirteen hearts.",
    "approach": "For $r$ selected special cards among $K$ special cards in $N$ positions, the $r$th position has mean $r(N+1)/(K+1)$ by equal expected gaps.",
    "solution": "For $r$ selected special cards among $K$ special cards in $N$ positions, the $r$th position has mean $r(N+1)/(K+1)$ by equal expected gaps. The answers are $106/5$, $265/14$, and $689/14$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 35; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.36",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 36: Counts of ones and twos",
    "prompt": "In $n$ fair die rolls let $X,Y$ count ones and twos. Find their covariance.",
    "approach": "In one roll the two indicators cannot both equal 1, so their covariance is $0-(1/6)^2=-1/36$.",
    "solution": "In one roll the two indicators cannot both equal 1, so their covariance is $0-(1/6)^2=-1/36$. Different rolls are independent. Adding gives $\\operatorname{Cov}(X,Y)=-n/36$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 36; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.37",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 37: Sum and difference",
    "prompt": "For two independent fair die values $A,B$, let $X=A+B,Y=A-B$. Find their covariance.",
    "approach": "Expand covariance: $\\operatorname{Cov}(A+B,A-B)=\\operatorname{Var}(A)-\\operatorname{Var}(B)=0$; the cross terms cancel..",
    "solution": "Expand covariance: $\\operatorname{Cov}(A+B,A-B)=\\operatorname{Var}(A)-\\operatorname{Var}(B)=0$; the cross terms cancel.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 37; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.38",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 38: A joint probability table",
    "prompt": "For rows $x=1,2,3$ and columns $y=1,2,3$, joint probabilities are $(.10,.12,.16),(.08,.12,.10),(.06,.06,.20)$. Find both means, both variances, covariance and correlation.",
    "approach": "Row probabilities are $.38,.30,.32$ and column probabilities $.24,.30,.46$.",
    "solution": "Row probabilities are $.38,.30,.32$ and column probabilities $.24,.30,.46$. Hence $E[X]=1.94,E[Y]=2.22,E[X^2]=4.46,E[Y^2]=5.58,E[XY]=4.40$. The variances are $.6964,.6516$, covariance $.0932$, and correlation $.0932/\\sqrt{.6964\\cdot.6516}\\approx.1384$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 38; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.39",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 39: Sampling red balls",
    "prompt": "Draw two balls without replacement from $n$ red and $m$ blue balls. For draw-color indicators $X_1,X_2$ and inclusion indicators $Y_1,Y_2$ of two fixed red balls, predict and calculate the two covariances.",
    "approach": "Let $N=n+m$.",
    "solution": "Let $N=n+m$. The draw indicators have $E[X_i]=n/N$ and $E[X_1X_2]=n(n-1)/[N(N-1)]$, giving $-nm/[N^2(N-1)]$. Inclusion probabilities are $2/N$ and joint $2/[N(N-1)]$, giving $-2(N-2)/[N^2(N-1)]$. Both are nonpositive: choosing one uses up a limited place.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 39; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.40",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 40: An exponential interval",
    "prompt": "The joint density is $2e^{-2x}/x$ for $0<y<x$. Find covariance.",
    "approach": "$X$ is exponential of rate 2 and $Y$ given $X=x$ is uniform $(0,x)$.",
    "solution": "$X$ is exponential of rate 2 and $Y$ given $X=x$ is uniform $(0,x)$. Thus $E[X]=1/2,E[Y]=1/4,E[XY]=E[X^2]/2=1/4$. Covariance is $1/4-1/8=1/8$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 40; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.41",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 41: Overlapping moving sums",
    "prompt": "Independent $X_i$ have common variance $\\sigma^2$. Put $Y_n=X_n+X_{n+1}+X_{n+2}$. Find $\\operatorname{Cov}(Y_n,Y_{n+j})$ for $j\\ge0$.",
    "approach": "Only shared terms contribute.",
    "solution": "Only shared terms contribute. There are $3-j$ shared terms for $0\\le j\\le2$, and none for $j\\ge3$. The covariance is $(3-j)\\sigma^2$ in the first case and zero in the second.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 41; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.42",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 42: Random exponential mean",
    "prompt": "The joint density is $e^{-y-x/y}/y$ for positive $x,y$. Find the means and covariance.",
    "approach": "$Y$ is exponential of rate 1; given $Y=y$, $X$ is exponential with mean $y$.",
    "solution": "$Y$ is exponential of rate 1; given $Y=y$, $X$ is exponential with mean $y$. Thus $E[X]=E[Y]=1$ and $E[XY]=E[Y^2]=2$. Covariance is $2-1=1$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 42; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.43",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 43: Carp sample",
    "prompt": "Of 100 fish, 30 are carp. A sample of 20 is drawn. Find mean and variance of the carp count and state assumptions.",
    "approach": "Assume sampling is uniformly without replacement and species is classified correctly.",
    "solution": "Assume sampling is uniformly without replacement and species is classified correctly. The hypergeometric mean is $20(.3)=6$; variance is $20(.3)(.7)(80/99)=112/33$. Replacement sampling would instead have variance 4.2.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 43; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.44",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 44: Random pairs",
    "prompt": "Pair ten men and ten women uniformly. Find mean and variance of mixed-sex pairs. Then pair ten married couples uniformly and find mean and variance of correctly paired couples.",
    "approach": "For mixed pairs use one indicator per man.",
    "solution": "For mixed pairs use one indicator per man. $p=10/19$, and for two men $q=(10/19)(9/17)$. Thus mean $100/19$ and variance $10p(1-p)+90(q-p^2)$. For married pairs $p=1/19,q=1/(19\\cdot17)$, giving mean $10/19$ and variance $10p(1-p)+90(q-p^2)$. The indicators are different in the two counts.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 44; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.45",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 45: Rank-sum mean and variance",
    "prompt": "Under a common continuous distribution, rank a combined sample of $n$ X-values and $m$ Y-values. Find mean and variance of the sum $R$ of X-ranks.",
    "approach": "The $n$ X-ranks are a simple random sample from $1,\\ldots,N$, where $N=n+m$.",
    "solution": "The $n$ X-ranks are a simple random sample from $1,\\ldots,N$, where $N=n+m$. That population has mean $(N+1)/2$ and variance $(N^2-1)/12$. Sampling without replacement gives $E[R]=n(N+1)/2$ and $\\operatorname{Var}(R)=nm(N+1)/12$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 45; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.46",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 46: Runs of method-one items",
    "prompt": "Rank $n$ items made by method 1 and $m$ by method 2, under equal continuous quality distributions. Find mean and variance of the number of runs of method-1 items.",
    "approach": "Every arrangement of the labels is equally likely.",
    "solution": "Every arrangement of the labels is equally likely. Put an indicator at each method-1 run start. Counting single and double starts gives $E[R]=n(m+1)/(n+m)$ and $\\operatorname{Var}(R)=nm(n-1)(m+1)/[(n+m)^2(n+m-1)]$ for $n+m>1$. The formula gives zero if one type is absent.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 46; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.47",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 47: Correlations of overlapping sums",
    "prompt": "Four pairwise uncorrelated variables have mean zero and variance one. Find correlations of $X_1+X_2$ with $X_2+X_3$, and with $X_3+X_4$.",
    "approach": "Each sum has variance 2.",
    "solution": "Each sum has variance 2. In the first covariance only the shared $X_2$ contributes, giving 1 and correlation $1/2$. In the second covariance every term is zero, giving correlation zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 47; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.48",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 48: Casino wins share a bank roll",
    "prompt": "Two players and a bank independently roll two fair dice. A player wins if their sum strictly exceeds the bank's. Show their win indicators have positive correlation and explain.",
    "approach": "Given bank sum $B$, the indicators are independent with success chance $q(B)=P(S>B)$.",
    "solution": "Given bank sum $B$, the indicators are independent with success chance $q(B)=P(S>B)$. Total covariance gives $\\operatorname{Cov}(I_1,I_2)=\\operatorname{Var}(q(B))>0$, since $q(B)$ is not constant. A low bank sum helps both players; a high one hurts both. Each indicator has positive variance, so correlation is positive.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 48; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.49",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 problem 49: Random graph degrees",
    "prompt": "Every possible edge among $n\\ge2$ vertices independently exists with probability $0<p<1$. Find the degree distribution and correlation of two distinct degrees.",
    "approach": "Each degree is binomial $(n-1,p)$ with variance $(n-1)p(1-p)$.",
    "solution": "Each degree is binomial $(n-1,p)$ with variance $(n-1)p(1-p)$. Two degrees share just their connecting edge; their covariance is $p(1-p)$. Therefore the correlation is $1/(n-1)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 49; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.50",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 50: Waiting for six given five",
    "prompt": "Successively roll a fair die. Let $X,Y$ be the first-six and first-five times. Find $E[X]$, $E[X\\mid Y=1]$, and $E[X\\mid Y=5]$.",
    "approach": "$E[X]=6$.",
    "solution": "$E[X]=6$. Given $Y=1$, the first roll is five, so $E[X\\mid Y=1]=1+6=7$. Given $Y=5$, the first four rolls independently avoid five and each has chance $1/5$ of six. For $k=0,1,2,3$, the conditional chance $X>k$ is $(4/5)^k$. If no six appears in the first four (chance $(4/5)^4$), the fifth roll is five and the remaining six-wait starts after it. The tails from $k=4$ onwards sum to $7(4/5)^4$. Therefore the mean is $\\sum_{k=0}^3(4/5)^k+7(4/5)^4=3637/625$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 50; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.51",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 51: Learning which biased coin",
    "prompt": "Choose equally between coins of head probabilities .4 and .7, then toss ten times. Given exactly two heads in the first three, find the expected total heads.",
    "approach": "The likelihoods are $3(.4)^2(.6)=.288$ and $3(.7)^2(.3)=.441$.",
    "solution": "The likelihoods are $3(.4)^2(.6)=.288$ and $3(.7)^2(.3)=.441$. Posterior mean head chance is $[.4(.288)+.7(.441)]/.729=157/270$. The expected total is the two known heads plus seven future means: $2+7(157/270)=1639/270$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 51; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.52",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 52: Conditional second moment",
    "prompt": "The joint density is $e^{-x/y-y}/y$ for positive $x,y$. Find $E[X^2\\mid Y=y]$.",
    "approach": "Given $y$, $X$ is exponential with mean $y$, hence variance $y^2$.",
    "solution": "Given $y$, $X$ is exponential with mean $y$, hence variance $y^2$. Its second moment is variance plus squared mean: $2y^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 52; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.53",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 53: Conditional third moment",
    "prompt": "The joint density is $e^{-y}/y$ for $0<x<y$, $y>0$. Find $E[X^3\\mid Y=y]$.",
    "approach": "Given $y$, $X$ is uniform $(0,y)$, so $E[X^3\\mid Y=y]=(1/y)\\int_0^y x^3dx=y^3/4$..",
    "solution": "Given $y$, $X$ is uniform $(0,y)$, so $E[X^3\\mid Y=y]=(1/y)\\int_0^y x^3dx=y^3/4$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 53; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.54",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 54: Average across groups",
    "prompt": "Group $i$ comprises proportion $p_i$ of a population and has average weight $w_i$. Find the population average.",
    "approach": "Condition on the group: $E[W]=\\sum_iP(G=i)E[W\\mid G=i]=\\sum_i p_iw_i$.",
    "solution": "Condition on the group: $E[W]=\\sum_iP(G=i)E[W\\mid G=i]=\\sum_i p_iw_i$. The proportions must sum to one.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 54; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.55",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 55: Prisoner escape time",
    "prompt": "Choose three doors independently on each visit with probabilities .5,.3,.2. The first two return after two or four days, and the third exits after one day. Find mean time $m$.",
    "approach": "Conditioning on the first door gives $m=.5(2+m)+.3(4+m)+.2(1)$.",
    "solution": "Conditioning on the first door gives $m=.5(2+m)+.3(4+m)+.2(1)$. Thus $.2m=2.4$ and $m=12$ days.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 55; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.56",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 56: Stopping at a dice threshold",
    "prompt": "Roll two dice repeatedly. A seven ends play with zero; otherwise accept the first sum at least $i$ for $i=2,\\ldots,12$. Find all mean returns and the best threshold.",
    "approach": "Let $a_s=6-\\lvert7-s\\rvert$ count ways to roll $s$ and $A_i=\\{s\\ge i:s\\ne7\\}$.",
    "solution": "Let $a_s=6-\\lvert7-s\\rvert$ count ways to roll $s$ and $A_i=\\{s\\ge i:s\\ne7\\}$. First-roll conditioning gives $m_i=\\sum_{s\\in A_i}sa_s/[6+\\sum_{s\\in A_i}a_s]$: the denominator counts terminating outcomes, including seven. For $i=2,3,4,5,6,7,8,9,10,11,12$ the means are respectively $35/6,208/35,202/33,19/3,85/13,20/3,20/3,25/4,16/3,34/9,12/7$. The maximal value $20/3$ occurs for thresholds 7 or 8; these produce the same rule because a seven always ends with zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 56; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.57",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 57: Poisson-sized duck flock",
    "prompt": "Ten hunters each hit their independently chosen target with probability .6. Flock size $N$ is Poisson with mean six. Find mean ducks hit.",
    "approach": "If $N=n\\ge1$, each duck avoids every hunter with probability $(1-.6/n)^{10}$.",
    "solution": "If $N=n\\ge1$, each duck avoids every hunter with probability $(1-.6/n)^{10}$. The conditional mean hit count is $n[1-(1-.6/n)^{10}]$; for $n=0$ it is zero. Hence the answer is $e^{-6}\\sum_{n=1}^\\infty6^n n[1-(1-.6/n)^{10}]/n!$. This accounts for multiple hunters hitting the same duck.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 57; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.58",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 58: Elevator stops",
    "prompt": "The entering passenger count is Poisson with mean ten. Each independently chooses one of $N$ floors uniformly. Find mean stops.",
    "approach": "For a fixed floor, given $K=k$, no one exits there with probability $(1-1/N)^k$.",
    "solution": "For a fixed floor, given $K=k$, no one exits there with probability $(1-1/N)^k$. Averaging the Poisson generating function gives $e^{-10/N}$. Sum floor-use indicators: $N(1-e^{-10/N})$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 58; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.59",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 59: Accident injuries",
    "prompt": "The accident count has mean five. Injury counts per accident are independent of it and each have mean 2.5. Find mean weekly injuries.",
    "approach": "Given $N=n$ accidents the mean total is $2.5n$.",
    "solution": "Given $N=n$ accidents the mean total is $2.5n$. Averaging gives $2.5E[N]=12.5$; no Poisson assumption is needed.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 59; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.60",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 60: Seeing both coin outcomes",
    "prompt": "Toss independently with head probability $0<p<1$ until both outcomes occur. Find mean tosses and the probability the last toss is heads.",
    "approach": "If the first toss is heads, wait another mean $1/(1-p)$ for tails.",
    "solution": "If the first toss is heads, wait another mean $1/(1-p)$ for tails. If it is tails, wait another mean $1/p$ for heads. Thus $E[N]=1+p/(1-p)+(1-p)/p$. The final toss is heads exactly when the first is tails, so its probability is $1-p$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 60; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.61",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 61: Both target counts",
    "prompt": "Toss a coin of head probability $0<p<1$ until at least $n$ heads and $m$ tails occur. Express the mean by conditioning on the heads $K$ in the first $n+m$ tosses.",
    "approach": "Write $L=n+m$ and $K\\sim\\operatorname{Bin}(L,p)$.",
    "solution": "Write $L=n+m$ and $K\\sim\\operatorname{Bin}(L,p)$. If $K<n$, need $n-K$ more heads, mean $(n-K)/p$. If $K>n$, need $K-n$ more tails, mean $(K-n)/(1-p)$. Thus $E[N]=L+\\sum_{k=0}^L\\binom Lk p^k(1-p)^{L-k}[(n-k)_+/p+(k-n)_+/(1-p)]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 61; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.62",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 62: Sharing a prize",
    "prompt": "Each of $n+1$ people independently wins with probability $p$. Winners share one unit; no winners means no payment. Find mean total payment, one person's mean share, and $E[1/(1+B)]$ for $B\\sim\\operatorname{Bin}(n,p)$.",
    "approach": "The mean total is the probability of at least one winner: $1-(1-p)^{n+1}$.",
    "solution": "The mean total is the probability of at least one winner: $1-(1-p)^{n+1}$. Symmetry divides this by $n+1$. For a specified person the mean is also $pE[1/(1+B)]$. Equating gives $E[1/(1+B)]=[1-(1-p)^{n+1}]/[(n+1)p]$ for $p>0$; its limit at zero is 1.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 62; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.63",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 63: Opposite predictions syndicate",
    "prompt": "For an odd number of fair coin tosses, $m$ players predict independently at random, while two partners choose opposite predictions. A pot of $m+2$ is shared by the best scorers. Find the expected partners' payment and its values for $m=1,2,3$.",
    "approach": "The partners' scores sum to the odd number of tosses, so exactly one exceeds half.",
    "solution": "The partners' scores sum to the odd number of tosses, so exactly one exceeds half. Each ordinary player exceeds half with probability $1/2$, independently; their count $X$ is binomial $(m,1/2)$. Conditional on $X$, the high-scoring partner and those $X$ players have exchangeable scores, so expected partner fraction is $1/(X+1)$. The payment is $2(m+2)[1-2^{-(m+1)}]/(m+1)$. For $m=1,2,3$ it is $9/4,7/3,75/32$, each greater than the partners' cost 2.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 63; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.64",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 64: Goals and tournament duration",
    "prompt": "A team's independent win chance is $p<1$. Goals are Poisson mean 2 in wins and mean 1 in losses, conditionally independent. Find mean next-game goals; chance of six goals in four games; and for a tournament ending at first loss find $E[X]$, $P(X=0)$, $P(N=3\\mid X=5)$.",
    "approach": "The next-game mean is $1+p$.",
    "solution": "The next-game mean is $1+p$. Given $K=k$ wins in four games, total goals are Poisson $(4+k)$, giving $\\sum_{k=0}^4\\binom4k p^k(1-p)^{4-k}e^{-(4+k)}(4+k)^6/6!$. In the tournament $P(N=n)=(1-p)p^{n-1}$ and $X\\mid N=n$ is Poisson $(2n-1)$. Thus $E[X]=2/(1-p)-1=(1+p)/(1-p)$ and $P(X=0)=(1-p)e^{-1}/(1-pe^{-2})$. Finally the requested posterior is $p^2e^{-5}5^5/[\\sum_{n\\ge1}p^{n-1}e^{-(2n-1)}(2n-1)^5]$; common factors cancel.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 64; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.65",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 65: Tree treatments",
    "prompt": "A tree's infection level $U$ is uniform $(0,1)$. Given $U=u$, treatments independently cure with probability $1-u$. Find cure chance in one treatment, chance the first two fail, and chance cure first occurs at treatment $n$.",
    "approach": "Average the conditional probabilities: $P(\\text{first cure})=E[1-U]=1/2$, $P(\\text{two failures})=E[U^2]=1/3$, and $P(N=n)=\\int_0^1u^{n-1}(1-u)du=1/[n(n+1)]$.",
    "solution": "Average the conditional probabilities: $P(\\text{first cure})=E[1-U]=1/2$, $P(\\text{two failures})=E[U^2]=1/3$, and $P(N=n)=\\int_0^1u^{n-1}(1-u)du=1/[n(n+1)]$. The mean waiting time is infinite, since the tail probabilities are $P(N\\ge n)=1/n$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 65; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.66",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 66: Maximum of a geometric sample",
    "prompt": "Independent observations have CDF $F$, and independent $N$ has geometric parameter $p$ on $1,2,\\ldots$. Let $M$ be their maximum. Find its CDF, CDF given $N=1$ or $N>1$, and recover the unconditional CDF.",
    "approach": "Put $z=F(x)$ and $H=P(M\\le x)$.",
    "solution": "Put $z=F(x)$ and $H=P(M\\le x)$. Summing $\\sum_{n\\ge1}p(1-p)^{n-1}z^n$ gives $H=pz/[1-(1-p)z]$. For $N=1$ the answer is $z$. Given $N>1$, memorylessness leaves one observation and an independent geometric remaining sample, giving $zH$. Thus $H=pz+(1-p)zH$, reproducing the result.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 66; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.67",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 67: Uniform-sum crossing time",
    "prompt": "Let $N(x)$ be the first $n$ for which the sum of independent uniform $(0,1)$ values exceeds $x$, where $0\\le x\\le1$. Prove $P(N(x)\\ge n+1)=x^n/n!$ and $E[N(x)]=e^x$.",
    "approach": "For $n=0$ the probability is one.",
    "solution": "For $n=0$ the probability is one. If the sum of $n-1$ terms is at most $x-u$, condition on the first uniform $u$ and integrate from 0 to $x$: $\\int_0^x(x-u)^{n-1}/(n-1)!\\,du=x^n/n!$. Summing these nonnegative tails gives $\\sum_{n=0}^\\infty x^n/n!=e^x$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 67; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.68",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 68: Red-blue covariance",
    "prompt": "Draw 12 balls without replacement from 30, including ten red and eight blue. Let $X,Y$ count these colors. Compute covariance using indicators and conditioning.",
    "approach": "A fixed ball is included with probability $12/30$; two fixed balls are included with probability $12\\cdot11/(30\\cdot29)$.",
    "solution": "A fixed ball is included with probability $12/30$; two fixed balls are included with probability $12\\cdot11/(30\\cdot29)$. The 80 red-blue pairs give covariance $80[12\\cdot11/(30\\cdot29)-(12/30)^2]=-96/145$. Alternatively $E[Y\\mid X]=8(12-X)/20$, so $\\operatorname{Cov}(X,Y)=-(2/5)\\operatorname{Var}(X)$, with hypergeometric variance $48/29$, giving the same value.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 68; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.69",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 69: Mixture of bulb types",
    "prompt": "A bulb is type 1 with probability $p$ and type 2 otherwise. Their lifetime means are $\\mu_1,\\mu_2$ and variances $\\sigma_1^2,\\sigma_2^2$. Find overall mean and variance.",
    "approach": "Condition on type: mean $p\\mu_1+(1-p)\\mu_2$.",
    "solution": "Condition on type: mean $p\\mu_1+(1-p)\\mu_2$. Total variance adds average within-type variance and spread of the type means: $p\\sigma_1^2+(1-p)\\sigma_2^2+p(1-p)(\\mu_1-\\mu_2)^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 69; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.70",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 70: Good and bad winters",
    "prompt": "Storm counts are Poisson mean 3 in a good year and mean 5 in a bad year. The year is good with probability .4. Find count mean and variance.",
    "approach": "Mean is $.4(3)+.6(5)=4.2$.",
    "solution": "Mean is $.4(3)+.6(5)=4.2$. Average conditional variance is also 4.2. Variance of the conditional means is $.4\\cdot.6(5-3)^2=.96$. Total variance is 5.16.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 70; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.71",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 71: Miner time variance",
    "prompt": "A miner chooses three doors equally on each attempt: door 1 exits in three hours; doors 2 and 3 return in five and seven hours. Find the variance of escape time.",
    "approach": "Let $m=15$ from $m=[3+(5+m)+(7+m)]/3$.",
    "solution": "Let $m=15$ from $m=[3+(5+m)+(7+m)]/3$. If $s=E[T^2]$, then $s=[9+(25+10m+s)+(49+14m+s)]/3$, so $s=443$. Thus variance is $443-225=218$ hours squared.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 71; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.72",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 72: Kelly betting mean",
    "prompt": "A gambler wins with chance $p>1/2$ and bets fraction $2p-1$ of the current fortune. Starting from $x$, find the expected fortune after $n$ independent bets.",
    "approach": "A win multiplies wealth by $2p$ and a loss by $2(1-p)$.",
    "solution": "A win multiplies wealth by $2p$ and a loss by $2(1-p)$. The expected multiplier is $2[p^2+(1-p)^2]$. Independence gives mean wealth $x\\{2[p^2+(1-p)^2]\\}^n$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 72; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.73",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 73: Accident-rate mixture",
    "prompt": "A person's yearly accident count is conditionally Poisson with fixed rate 2 for 60 percent of people and 3 for 40 percent. Find chances of zero and three accidents, and three next year given zero this year.",
    "approach": "The first two chances are $.6e^{-2}+.4e^{-3}$ and $.6e^{-2}2^3/3!+.4e^{-3}3^3/3!$.",
    "solution": "The first two chances are $.6e^{-2}+.4e^{-3}$ and $.6e^{-2}2^3/3!+.4e^{-3}3^3/3!$. Assuming years are independent given rate, the conditional chance is $[.6e^{-4}2^3/3!+.4e^{-6}3^3/3!]/[.6e^{-2}+.4e^{-3}]$. The zero year changes the probability of which rate the person has.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 73; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.74",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 74: Exponential accident rates",
    "prompt": "Repeat the preceding accident question when rate $\\Lambda$ is exponential of rate one.",
    "approach": "Integrating the mixture gives $P(N=k)=\\int_0^\\infty e^{-\\lambda}\\lambda^k/k!\\,e^{-\\lambda}d\\lambda=1/2^{k+1}$.",
    "solution": "Integrating the mixture gives $P(N=k)=\\int_0^\\infty e^{-\\lambda}\\lambda^k/k!\\,e^{-\\lambda}d\\lambda=1/2^{k+1}$. Thus zero has probability $1/2$, three has $1/16$. After observing zero, the rate density is $2e^{-2\\lambda}$; the next-three probability is $2\\int_0^\\infty e^{-3\\lambda}\\lambda^3/3!\\,d\\lambda=2/81$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 74; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.75",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 75: A randomly biased coin",
    "prompt": "Choose a coin whose head probability $P$ is uniform $(0,1)$ and toss it twice. Find the chance the first is heads and both are heads.",
    "approach": "Conditional head probability is $P$.",
    "solution": "Conditional head probability is $P$. Thus the answers are $E[P]=1/2$ and $E[P^2]=1/3$. The unconditional tosses are dependent because they share the hidden bias.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 75; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.76",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 76: Uniform count of heads",
    "prompt": "For the randomly biased coin of Problem 75, show the head count in $n$ tosses is uniform on $0,\\ldots,n$.",
    "approach": "Condition on $P=p$ and integrate: $P(X=i)=\\binom ni\\int_0^1p^i(1-p)^{n-i}dp=\\binom ni i!(n-i)!/(n+1)!=1/(n+1)$..",
    "solution": "Condition on $P=p$ and integrate: $P(X=i)=\\binom ni\\int_0^1p^i(1-p)^{n-i}dp=\\binom ni i!(n-i)!/(n+1)!=1/(n+1)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 76; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.77",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 problem 77: Random-bias first head",
    "prompt": "For that randomly biased coin, let $N$ be the first-head time. Find its tail probabilities, mass function and mean.",
    "approach": "$P(N\\ge i)=E[(1-P)^{i-1}]=1/i$.",
    "solution": "$P(N\\ge i)=E[(1-P)^{i-1}]=1/i$. Subtract adjacent tails: $P(N=i)=1/i-1/(i+1)=1/[i(i+1)]$. The mean $\\sum_{i\\ge1}1/i$ diverges to infinity.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 77; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.78",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 problem 78: Signal plus noise",
    "prompt": "In Ross Example 6b a sent signal $S$ is normal $(\\mu,\\sigma^2)$ and the received signal is $R=S+Z$ with independent standard normal noise. Find mean and variance of $R$, whether it is normal, and $\\operatorname{Cov}(R,S)$.",
    "approach": "Linearity gives $E[R]=\\mu$.",
    "solution": "Linearity gives $E[R]=\\mu$. Independence gives $\\operatorname{Var}(R)=\\sigma^2+1$. The sum of independent normals is normal, so $R\\sim N(\\mu,\\sigma^2+1)$. Covariance is $\\operatorname{Cov}(S+Z,S)=\\operatorname{Var}(S)+0=\\sigma^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 78; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.79",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 problem 79: Two-bin quantizer",
    "prompt": "$X$ is uniform $(0,1)$ and the bins are $(0,1/2)$ and $(1/2,1)$. Find the minimum-squared-error representative of each bin and the resulting error.",
    "approach": "The representatives are the conditional means, $1/4$ and $3/4$.",
    "solution": "The representatives are the conditional means, $1/4$ and $3/4$. Each bin has uniform width $1/2$, hence conditional variance $(1/2)^2/12=1/48$. Average them to get mean squared error $1/48$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 79; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.80",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 problem 80: Identify MGFs",
    "prompt": "Independent $X,Y$ have MGFs $e^{2e^t-2}$ and $(3e^t/4+1/4)^{10}$. Find $P(X+Y=2)$, $P(XY=0)$ and $E[XY]$.",
    "approach": "$X$ is Poisson 2 and $Y$ is binomial $(10,3/4)$.",
    "solution": "$X$ is Poisson 2 and $Y$ is binomial $(10,3/4)$. Thus $P(X+Y=2)=e^{-2}[\\binom{10}{2}(3/4)^2(1/4)^8+2\\binom{10}{1}(3/4)(1/4)^9+2(1/4)^{10}]$. Also $P(XY=0)=e^{-2}+4^{-10}-e^{-2}4^{-10}$ and $E[XY]=2(15/2)=15$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 80; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.81",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 problem 81: Joint MGF of dice",
    "prompt": "Let $X$ be the first fair die and $Y$ the sum of two independent fair dice. Find the joint MGF.",
    "approach": "If the second die is $D$, then $sX+tY=(s+t)X+tD$.",
    "solution": "If the second die is $D$, then $sX+tY=(s+t)X+tD$. Independence gives $M(s,t)=[\\sum_{i=1}^6e^{(s+t)i}/6][\\sum_{j=1}^6e^{tj}/6]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 81; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.82",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 problem 82: Normal with random mean",
    "prompt": "The joint density is $e^{-y}\\phi(x-y)$ for $y>0$. Find the joint MGF and both marginal MGFs.",
    "approach": "Given $Y=y$, $X$ is normal $(y,1)$ and $Y$ is exponential rate one.",
    "solution": "Given $Y=y$, $X$ is normal $(y,1)$ and $Y$ is exponential rate one. Hence $M(s,t)=e^{s^2/2}E[e^{(s+t)Y}]=e^{s^2/2}/(1-s-t)$ for $s+t<1$. Setting $t=0$ gives $M_X(s)=e^{s^2/2}/(1-s)$; setting $s=0$ gives $M_Y(t)=1/(1-t)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 82; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.83",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 problem 83: Two envelopes",
    "prompt": "Two fixed unknown amounts satisfy $A<B$. Show that keeping an observed amount $x$ with strictly increasing probability $F(x)$ beats always keeping. Also analyze a fixed threshold and then a random continuous threshold with support on the whole real line.",
    "approach": "Average over which envelope is first: expected return is $(A+B)/2+(B-A)[F(B)-F(A)]/2$, strictly larger because $F(B)>F(A)$.",
    "solution": "Average over which envelope is first: expected return is $(A+B)/2+(B-A)[F(B)-F(A)]/2$, strictly larger because $F(B)>F(A)$. A fixed threshold outside $(A,B)$ gives baseline; a threshold inside gives $B$ (endpoint conventions do not matter for a continuous random threshold). A full-support continuous threshold falls between $A,B$ with positive probability, so its averaged improvement is positive. This does not require knowing the amounts.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 83; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.problem.84",
    "course": "prob",
    "sec": "7.8",
    "marks": 5,
    "title": "Ross 7 problem 84: Two-week normal sales",
    "prompt": "Weekly sales, in thousands of dollars, are jointly normal with means 40, standard deviations six and correlation .6. Find the chance their total exceeds 90. Explain and calculate the change if correlation is .2.",
    "approach": "The sum is normal with mean 80 and variance $72(1+\\rho)$.",
    "solution": "The sum is normal with mean 80 and variance $72(1+\\rho)$. Thus the chance is $1-\\Phi(10/\\sqrt{72(1+\\rho)})$. For $.6$ this is about $.1758$; for $.2$ it is about $.1410$. Lower correlation reduces the variance, making a value above the mean less likely.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.8.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, problem 84; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.1",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 1: Best fixed squared-error guess",
    "prompt": "For a variable with finite second moment show that $E[(X-a)^2]$ is smallest at $a=E[X]$.",
    "approach": "Write $\\mu=E[X]$.",
    "solution": "Write $\\mu=E[X]$. Expanding around $\\mu$ gives $E[(X-a)^2]=\\operatorname{Var}(X)+(\\mu-a)^2$, since the cross term has mean zero. The last square is smallest, namely zero, at $a=\\mu$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 1; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.2",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 2: Best absolute-error guess",
    "prompt": "A continuous variable has CDF $F$ and finite first absolute moment. Show a median minimizes $E[\\lvert X-a\\rvert]$.",
    "approach": "Split the integral at $a$.",
    "solution": "Split the integral at $a$. Differentiating gives $dE[\\lvert X-a\\rvert]/da=F(a)-(1-F(a))=2F(a)-1$. This is nondecreasing, negative before a median and positive after one. Any $a$ with $F(a)=1/2$ is a minimum; a flat median interval also consists of minima.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 2; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.3",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 3: Averaging a function of two variables",
    "prompt": "Prove $E[g(X,Y)]$ equals the sum of $g(x,y)p(x,y)$ for a discrete pair, or its double density integral for a continuous pair and nonnegative $g$.",
    "approach": "Discrete: group pairs $(x,y)$ by the common value $z=g(x,y)$; summing $zP(g(X,Y)=z)$ regroups to $\\sum_{x,y}g(x,y)p(x,y)$.",
    "solution": "Discrete: group pairs $(x,y)$ by the common value $z=g(x,y)$; summing $zP(g(X,Y)=z)$ regroups to $\\sum_{x,y}g(x,y)p(x,y)$. Continuous nonnegative case: $g(X,Y)=\\int_0^\\infty 1_{\\{t<g(X,Y)\\}}dt$. Nonnegative integration may change order, giving $\\iint f(x,y)\\int_0^{g(x,y)}dt\\,dxdy=\\iint g(x,y)f(x,y)dxdy$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 3; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.4",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 4: A Taylor approximation",
    "prompt": "For mean $\\mu$, variance $\\sigma^2$ and twice differentiable $g$, derive the second-order approximation to $E[g(X)]$.",
    "approach": "Use $g(X)\\approx g(\\mu)+g'(\\mu)(X-\\mu)+g''(\\mu)(X-\\mu)^2/2$.",
    "solution": "Use $g(X)\\approx g(\\mu)+g'(\\mu)(X-\\mu)+g''(\\mu)(X-\\mu)^2/2$. Average: the linear term disappears and the square averages to $\\sigma^2$. Thus $E[g(X)]\\approx g(\\mu)+g''(\\mu)\\sigma^2/2$. This is an approximation; its quality depends on controlling the Taylor remainder over the likely values of $X$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 4; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.5",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 5: Tail formula for a transformed value",
    "prompt": "For $X\\ge0$ and differentiable $g$ with $g(0)=0$, derive $E[g(X)]=\\int_0^\\infty P(X>t)g'(t)dt$, stating a condition for changing integration order.",
    "approach": "Pointwise $g(X)=\\int_0^\\infty1_{\\{X>t\\}}g'(t)dt$.",
    "solution": "Pointwise $g(X)=\\int_0^\\infty1_{\\{X>t\\}}g'(t)dt$. Change order if $g'\\ge0$, or if $E[\\int_0^X\\lvert g'(t)\\rvert dt]<\\infty$. The expected indicator is $P(X>t)$, giving the formula. Differentiability alone does not guarantee absolute convergence.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 5; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.6",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 6: Two ways to count events",
    "prompt": "For events $A_1,\\ldots,A_n$, let $C_k$ mean that at least $k$ occur. Prove $\\sum_kP(C_k)=\\sum_iP(A_i)$.",
    "approach": "If $N$ events occur, then $N=\\sum_i1_{A_i}=\\sum_{k=1}^n1_{\\{N\\ge k\\}}$.",
    "solution": "If $N$ events occur, then $N=\\sum_i1_{A_i}=\\sum_{k=1}^n1_{\\{N\\ge k\\}}$. Average both identities to obtain the two sums.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 6; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.7",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 7: Tail integral for a nonnegative variable",
    "prompt": "Use nonnegative integration to prove $E[X]=\\int_0^\\infty P(X>t)dt$ when $X\\ge0$.",
    "approach": "For each outcome, $\\int_0^\\infty1_{\\{t<X\\}}dt=X$, the length of the interval $(0,X)$.",
    "solution": "For each outcome, $\\int_0^\\infty1_{\\{t<X\\}}dt=X$, the length of the interval $(0,X)$. Taking expectations and changing the order of nonnegative integrals gives the result, even if both sides are infinite.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 7; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.8",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 8: Stochastic order and means",
    "prompt": "Suppose $P(X>t)\\ge P(Y>t)$ for every real $t$. Show $E[X]\\ge E[Y]$ for nonnegative variables and for general variables with finite absolute means.",
    "approach": "For nonnegative variables integrate the ordered tails.",
    "solution": "For nonnegative variables integrate the ordered tails. For general integrable variables use $E[X]=\\int_0^\\infty P(X>t)dt-\\int_0^\\infty P(X<-t)dt$. The given order makes the first integral larger and the subtracted integral smaller, so the mean is larger.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 8; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.9",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 9: Increasing tests of stochastic order",
    "prompt": "Show the tail ordering $P(X>t)\\ge P(Y>t)$ is equivalent to $E[f(X)]\\ge E[f(Y)]$ for every increasing test function whose expectations are defined.",
    "approach": "For the forward direction use a common uniform $U$ and the generalized inverse CDFs: the tail order says $F_X\\le F_Y$, so $F_X^{-1}(U)\\ge F_Y^{-1}(U)$ pointwise.",
    "solution": "For the forward direction use a common uniform $U$ and the generalized inverse CDFs: the tail order says $F_X\\le F_Y$, so $F_X^{-1}(U)\\ge F_Y^{-1}(U)$ pointwise. Increasing $f$ preserves this order, and these variables have the required laws. Conversely take the increasing function $f(x)=1_{\\{x>t\\}}$ for each $t$. Its mean is the tail probability.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 9; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.10",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 10: Runs of a specified length",
    "prompt": "In $n$ independent tosses with head chance $p$, find expected runs of heads of exactly length $k$, including lengths one and two.",
    "approach": "For $1\\le k<n$, a boundary run has probability $p^k(1-p)$ at each end, and an interior run has probability $(1-p)^2p^k$.",
    "solution": "For $1\\le k<n$, a boundary run has probability $p^k(1-p)$ at each end, and an interior run has probability $(1-p)^2p^k$. There are $n-k-1$ interior starts. Mean is $p^k[2(1-p)+(n-k-1)(1-p)^2]$. For $k=n$ it is $p^n$. Substitute $k=1,2$ when allowed; no run longer than $n$ exists.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 10; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.11",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 11: Share of a positive total",
    "prompt": "Independent identically distributed positive $X_1,\\ldots,X_n$ are given. Find $E[(X_1+\\cdots+X_k)/(X_1+\\cdots+X_n)]$.",
    "approach": "All $n$ individual shares have equal means by symmetry and their sum is exactly one.",
    "solution": "All $n$ individual shares have equal means by symmetry and their sum is exactly one. Each share has mean $1/n$, so the first $k$ shares average to $k/n$. No finite mean of the original values is required because shares are bounded.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 11; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.12",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 12: Missing outcomes",
    "prompt": "In $n$ independent trials with category probabilities $p_1,\\ldots,p_r$, find the mean number of unseen categories and show it is minimized by equal probabilities.",
    "approach": "Category $i$ is absent with probability $(1-p_i)^n$.",
    "solution": "Category $i$ is absent with probability $(1-p_i)^n$. Sum gives $\\sum_i(1-p_i)^n$. For $n\\ge2$ the function $(1-p)^n$ is convex, so averaging its arguments gives a lower bound $r(1-1/r)^n$, attained at $p_i=1/r$. For $n=1$ every probability vector has mean $r-1$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 12; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.13",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 13: Cantor-distributed series",
    "prompt": "Independent variables $X_j$ each equal zero or two with equal probabilities. For $X=\\sum_{j\\ge1}X_j/3^j$, find mean and variance.",
    "approach": "Each term has mean one and variance one before scaling.",
    "solution": "Each term has mean one and variance one before scaling. The series is bounded by one, so its moments are well defined and passage from finite sums is justified. Mean is $\\sum3^{-j}=1/2$; variance is $\\sum9^{-j}=1/8$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 13; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.14",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 14: Record values",
    "prompt": "For $n$ independent identically distributed continuous observations, find mean and variance of the number of new record highs.",
    "approach": "Observation $j$ is the largest of the first $j$ with chance $1/j$, giving mean $H_n$.",
    "solution": "Observation $j$ is the largest of the first $j$ with chance $1/j$, giving mean $H_n$. For $i<j$, among the first $j$ the maximum is at $j$ with probability $1/j$; conditional on this, the relative order of the first $i$ is still uniform, giving joint probability $1/(ij)$. Record indicators are therefore pairwise uncorrelated. Variance is $\\sum_{j=1}^n(1/j)(1-1/j)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 14; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.15",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 15: Coupon waiting-time variance",
    "prompt": "For equally likely $N$ coupon types, derive the variance of the complete-set time and its large-$N$ scale.",
    "approach": "The successive independent geometric waits have parameters $(N-i)/N$, $i=0,\\ldots,N-1$.",
    "solution": "The successive independent geometric waits have parameters $(N-i)/N$, $i=0,\\ldots,N-1$. Their variances are $[i/N]/[(N-i)/N]^2=iN/(N-i)^2$. Thus variance is $\\sum_{i=1}^{N-1}iN/(N-i)^2=N^2\\sum_{j=1}^N1/j^2-NH_N$. Dividing by $N^2$ tends to $\\pi^2/6$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 15; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.16",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 16: Unequal success probabilities",
    "prompt": "Independent trials have probabilities $p_1,\\ldots,p_n$. Find mean successes and, for a fixed mean, the largest and smallest variance.",
    "approach": "Mean is $\\mu=\\sum_i p_i$ and variance is $\\mu-\\sum_i p_i^2$.",
    "solution": "Mean is $\\mu=\\sum_i p_i$ and variance is $\\mu-\\sum_i p_i^2$. Squared probabilities sum least when all are $\\mu/n$, giving maximum $\\mu(1-\\mu/n)$. For the minimum put $\\lfloor\\mu\\rfloor$ probabilities at one, one at the fractional part $r=\\mu-\\lfloor\\mu\\rfloor$, and the rest at zero. Moving mass towards endpoints increases the sum of squares, giving minimum $r(1-r)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 16; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.17",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 theoretical 17: Two-color subsets",
    "prompt": "Color each member of a finite set red or blue. For subsets $A_1,\\ldots,A_r$, show some coloring has at most $\\sum_i2^{1-\\lvert A_i\\rvert}$ monochromatic subsets.",
    "approach": "Choose colors independently and fairly.",
    "solution": "Choose colors independently and fairly. A nonempty set of size $a$ is all red or all blue with probability $2(1/2)^a$. An empty set is automatically monochromatic, with probability 1, which is still at most $2^{1-0}=2$. Hence the mean number of monochromatic subsets is at most the stated sum. Some coloring must have a count no larger than this bound.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 17; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.18",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 18: Combining two estimates",
    "prompt": "Independent estimates $X_1,X_2$ share mean $\\mu$ but variances $v_1,v_2$. Choose the minimum-variance weight in $\\lambda X_1+(1-\\lambda)X_2$.",
    "approach": "The variance is $\\lambda^2v_1+(1-\\lambda)^2v_2$.",
    "solution": "The variance is $\\lambda^2v_1+(1-\\lambda)^2v_2$. Its derivative vanishes at $\\lambda=v_2/(v_1+v_2)$, and its second derivative is positive if the denominator is positive. The minimum variance is $v_1v_2/(v_1+v_2)$. The estimator stays unbiased and puts more weight on the more precise observation. If both variances vanish, every weight is equivalent.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 18; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.19",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 19: Multinomial covariance by variance",
    "prompt": "In $m$ trials let $N_i,N_j$ count distinct categories of probabilities $p_i,p_j$. Identify the law of $N_i+N_j$ and derive their covariance.",
    "approach": "The combined count is binomial $(m,p_i+p_j)$.",
    "solution": "The combined count is binomial $(m,p_i+p_j)$. Insert its variance into $\\operatorname{Var}(N_i+N_j)=mp_i(1-p_i)+mp_j(1-p_j)+2\\operatorname{Cov}(N_i,N_j)$. Subtracting gives covariance $-mp_ip_j$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 19; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.20",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 20: Uncorrelated sum and difference",
    "prompt": "Identically distributed $X,Y$ have finite variances but may be dependent. Show their sum and difference are uncorrelated.",
    "approach": "$\\operatorname{Cov}(X+Y,X-Y)=\\operatorname{Var}(X)-\\operatorname{Cov}(X,Y)+\\operatorname{Cov}(Y,X)-\\operatorname{Var}(Y)=0$.",
    "solution": "$\\operatorname{Cov}(X+Y,X-Y)=\\operatorname{Var}(X)-\\operatorname{Cov}(X,Y)+\\operatorname{Cov}(Y,X)-\\operatorname{Var}(Y)=0$. Equal laws give equal variances and covariance is symmetric.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 20; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.21",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 21: Conditional covariance",
    "prompt": "Define covariance given $Z$. Derive its product formula, the total covariance formula, and recover total variance.",
    "approach": "Expanding within each fixed $Z$ gives $\\operatorname{Cov}(X,Y\\mid Z)=E[XY\\mid Z]-E[X\\mid Z]E[Y\\mid Z]$.",
    "solution": "Expanding within each fixed $Z$ gives $\\operatorname{Cov}(X,Y\\mid Z)=E[XY\\mid Z]-E[X\\mid Z]E[Y\\mid Z]$. Average and add/subtract $E[X]E[Y]$ to obtain $\\operatorname{Cov}(X,Y)=E[\\operatorname{Cov}(X,Y\\mid Z)]+\\operatorname{Cov}(E[X\\mid Z],E[Y\\mid Z])$. Taking $X=Y$ gives $\\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid Z)]+\\operatorname{Var}(E[X\\mid Z])$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 21; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.22",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 22: Uniform order-statistic variances",
    "prompt": "For the $i$th ordered value from $n$ independent uniform $(0,1)$ draws, calculate variance and locate the smallest and largest values across $i$.",
    "approach": "The beta density gives mean $i/(n+1)$ and second moment $i(i+1)/[(n+1)(n+2)]$.",
    "solution": "The beta density gives mean $i/(n+1)$ and second moment $i(i+1)/[(n+1)(n+2)]$. Subtract the squared mean to get $i(n+1-i)/[(n+1)^2(n+2)]$. This is smallest at $i=1,n$ and largest at the integer or integers nearest $(n+1)/2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 22; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.23",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 23: Perfect linear correlation",
    "prompt": "If $Y=a+bX$ with $b\\ne0$ and $X$ has positive finite variance, show the correlation is the sign of $b$.",
    "approach": "Covariance is $b\\operatorname{Var}(X)$, while the product of standard deviations is $\\lvert b\\rvert\\operatorname{Var}(X)$.",
    "solution": "Covariance is $b\\operatorname{Var}(X)$, while the product of standard deviations is $\\lvert b\\rvert\\operatorname{Var}(X)$. Dividing gives $b/\\lvert b\\rvert$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 23; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.24",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 24: Normal quadratic correlation",
    "prompt": "For standard normal $Z$ and $Y=a+bZ+cZ^2$, find $\\operatorname{Corr}(Y,Z)$.",
    "approach": "Normal moments give $E[Z]=E[Z^3]=0,E[Z^2]=1,E[Z^4]=3$.",
    "solution": "Normal moments give $E[Z]=E[Z^3]=0,E[Z^2]=1,E[Z^4]=3$. Thus covariance is $b$ and $\\operatorname{Var}(Y)=b^2+2c^2$. Correlation is $b/\\sqrt{b^2+2c^2}$ when the denominator is positive; for constant $Y$ it is undefined.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 24; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.25",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 theoretical 25: Cauchy-Schwarz",
    "prompt": "For finite second moments prove $(E[XY])^2\\le E[X^2]E[Y^2]$.",
    "approach": "If $E[X^2]=0$ then $X=0$ almost surely and the claim is immediate.",
    "solution": "If $E[X^2]=0$ then $X=0$ almost surely and the claim is immediate. Otherwise the nonnegative quantity $E[(tX+Y)^2]$ at $t=-E[XY]/E[X^2]$ equals $E[Y^2]-(E[XY])^2/E[X^2]$. Multiply by $E[X^2]$ to obtain the inequality.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 25; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.26",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 26: Conditioning on an independent variable",
    "prompt": "Show independence makes $E[X\\mid Y=y]=E[X]$ in discrete and continuous cases wherever the conditional law is defined.",
    "approach": "Discrete: $p(x,y)=p_X(x)p_Y(y)$, so division by positive $p_Y(y)$ leaves $p_X(x)$.",
    "solution": "Discrete: $p(x,y)=p_X(x)p_Y(y)$, so division by positive $p_Y(y)$ leaves $p_X(x)$. Continuous: divide $f_X(x)f_Y(y)$ by positive $f_Y(y)$ to leave $f_X(x)$. Averaging $x$ under that unchanged law gives $E[X]$. Conditional expectations are defined up to null sets; no claim is required at impossible conditioning values.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 26; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.27",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 27: Pulling out a known factor",
    "prompt": "Prove $E[g(X)Y\\mid X]=g(X)E[Y\\mid X]$ when the relevant products are integrable.",
    "approach": "When $X=x$ is fixed, $g(x)$ is a constant.",
    "solution": "When $X=x$ is fixed, $g(x)$ is a constant. In the conditional sum or integral it can move outside, giving $g(x)E[Y\\mid X=x]$. Substitute the random $X$ to obtain the identity almost surely.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 27; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.28",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 28: Constant conditional mean",
    "prompt": "Show that $E[Y\\mid X]=E[Y]$ implies zero covariance, and give a counterexample to the converse.",
    "approach": "By conditioning, $E[XY]=E[XE[Y\\mid X]]=E[X]E[Y]$.",
    "solution": "By conditioning, $E[XY]=E[XE[Y\\mid X]]=E[X]E[Y]$. Conversely take $X$ uniform on $\\{-1,0,1\\}$ and $Y=X^2$. Symmetry gives $E[X]=E[XY]=0$ and covariance zero, but $E[Y\\mid X]=X^2$ is not constant.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 28; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.29",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 29: Covariance with a conditional mean",
    "prompt": "Show $\\operatorname{Cov}(X,E[Y\\mid X])=\\operatorname{Cov}(X,Y)$.",
    "approach": "The tower rule gives $E[E[Y\\mid X]]=E[Y]$ and $E[XE[Y\\mid X]]=E[XY]$.",
    "solution": "The tower rule gives $E[E[Y\\mid X]]=E[Y]$ and $E[XE[Y\\mid X]]=E[XY]$. Substitute these into the covariance definition.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 29; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.30",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 30: One summand given the total",
    "prompt": "Independent identically distributed integrable $X_1,\\ldots,X_n$ have sum $S$. Find $E[X_1\\mid S=x]$.",
    "approach": "Their conditional means are equal by permutation symmetry.",
    "solution": "Their conditional means are equal by permutation symmetry. They add to $E[S\\mid S=x]=x$, so each equals $x/n$ wherever the conditional law is defined.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 30; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.31",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 31: Multinomial covariance by conditioning",
    "prompt": "Use conditional expectation to find $E[N_iN_j]$ for different multinomial categories, and hence their covariance.",
    "approach": "Given $N_i=k$, the remaining $m-k$ trials have category-$j$ probability $p_j/(1-p_i)$.",
    "solution": "Given $N_i=k$, the remaining $m-k$ trials have category-$j$ probability $p_j/(1-p_i)$. Thus $E[N_iN_j]=[p_j/(1-p_i)]E[N_i(m-N_i)]=m(m-1)p_ip_j$. Subtract $m^2p_ip_j$ to get $-mp_ip_j$. If $p_i=1$, the other count is zero and both products are zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 31; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.32",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 32: Repeated white-ball loss",
    "prompt": "An urn starts with $b$ black and $w$ white balls. Each round adds $r$ black balls, then removes $r$ random balls. Find mean white balls after $t$ rounds.",
    "approach": "Given $W_t$, each white ball survives with probability $(b+w)/(b+w+r)$; total ball count returns to $b+w$.",
    "solution": "Given $W_t$, each white ball survives with probability $(b+w)/(b+w+r)$; total ball count returns to $b+w$. Thus $E[W_{t+1}\\mid W_t]=W_t(b+w)/(b+w+r)$. Iterating from $W_0=w$ gives $E[W_t]=w[(b+w)/(b+w+r)]^t$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 32; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.33",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 33: Expectation on an event",
    "prompt": "For $P(A)>0$, prove $E[X\\mid A]=E[X1_A]/P(A)$.",
    "approach": "The product $X1_A$ is zero outside $A$.",
    "solution": "The product $X1_A$ is zero outside $A$. Average it by the cases $A,A^c$: $E[X1_A]=P(A)E[X\\mid A]+P(A^c)\\cdot0$. Divide by $P(A)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 33; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.34",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 34: Waiting for consecutive heads",
    "prompt": "Find mean tosses until $r$ consecutive heads, for independent head probability $0<p<1$.",
    "approach": "Let $m_r$ be the mean and set $m_0=0$.",
    "solution": "Let $m_r$ be the mean and set $m_0=0$. After first reaching $r-1$ consecutive heads, one extra toss succeeds with chance $p$; a tail forces a restart. Thus $m_r=m_{r-1}+1+(1-p)m_r$, so $m_r=(m_{r-1}+1)/p$. Iteration yields $m_r=\\sum_{k=1}^r p^{-k}=(1-p^r)/[(1-p)p^r]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 34; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.35",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 35: Recursion for runs",
    "prompt": "Let $T_r$ be the waiting time for $r$ consecutive heads. Find $E[T_r\\mid T_{r-1}]$, a recursion, $E[T_1]$, and the general solution.",
    "approach": "If $T_{r-1}=t$, the next toss either finishes at $t+1$ (chance $p$) or gives a tail and an independent fresh wait of mean $m_r$.",
    "solution": "If $T_{r-1}=t$, the next toss either finishes at $t+1$ (chance $p$) or gives a tail and an independent fresh wait of mean $m_r$. Hence $E[T_r\\mid T_{r-1}=t]=t+1+(1-p)m_r$. Average to get $m_r=(m_{r-1}+1)/p$. Since $m_1=1/p$, the solution is $\\sum_{k=1}^rp^{-k}$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 35; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.36",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 36: Probability generating function",
    "prompt": "A nonnegative integer $X$ has PGF $\\varphi(s)=E[s^X]$. If independent $Y$ is geometric with success parameter $1-s$, show $\\varphi(s)=P(X<Y)$ for $0<s<1$.",
    "approach": "Given $X=j$, the event $Y>j$ means its first $j$ trials fail, with probability $s^j$.",
    "solution": "Given $X=j$, the event $Y>j$ means its first $j$ trials fail, with probability $s^j$. Average over $X$ to get $P(X<Y)=\\sum_jP(X=j)s^j$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 36; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.37",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 37: Stop when one color remains",
    "prompt": "Randomly remove balls from $a$ white and $b$ black until the remaining balls have one color. Derive a recursion for mean remaining count $M_{a,b}$ and evaluate $M_{3,5}$.",
    "approach": "Boundary values are $M_{a,0}=a,M_{0,b}=b$.",
    "solution": "Boundary values are $M_{a,0}=a,M_{0,b}=b$. First-draw conditioning gives $M_{a,b}=[aM_{a-1,b}+bM_{a,b-1}]/(a+b)$. In a random ordering, the remaining count is the length of the final monochromatic run. Mean whites in such a run is $a/(b+1)$ and mean blacks is $b/(a+1)$, from equal gaps between opposite-color balls. Thus $M_{a,b}=a/(b+1)+b/(a+1)$, and $M_{3,5}=7/4$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 37; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.38",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 38: Turning black balls white",
    "prompt": "Draw from $a$ white and $b$ black balls, returning whites and replacing a drawn black with white. Find a recursion for the mean white count $M_n$, its solution and chance the next draw is white.",
    "approach": "With total $L=a+b$, the conditional expected increase is $1-W_n/L$.",
    "solution": "With total $L=a+b$, the conditional expected increase is $1-W_n/L$. Hence $M_{n+1}=(1-1/L)M_n+1$. Starting at $M_0=a$ gives $M_n=L-b(1-1/L)^n$. The next-white chance is $M_n/L$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 38; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.39",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 theoretical 39: Best predictor from two variables",
    "prompt": "Find the coefficients minimizing $E[(Y-a-bX_1-cX_2)^2]$.",
    "approach": "Center all three variables.",
    "solution": "Center all three variables. Let $v_i=\\operatorname{Var}(X_i)$, $d=\\operatorname{Cov}(X_1,X_2)$, and $u_i=\\operatorname{Cov}(Y,X_i)$. Differentiation gives $v_1b+dc=u_1$, $db+v_2c=u_2$. If $D=v_1v_2-d^2>0$, $b=(u_1v_2-u_2d)/D$, $c=(u_2v_1-u_1d)/D$, and $a=E[Y]-bE[X_1]-cE[X_2]$. For singular predictors solve the same equations; coefficients may be nonunique while the fitted value is unique.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 39; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.40",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 theoretical 40: Best quadratic predictor",
    "prompt": "Determine coefficients in $a+bX+cX^2$ minimizing mean squared prediction error of $Y$.",
    "approach": "Let $m_j=E[X^j]$ for $j=0,\\ldots,4$ with $m_0=1$, and $r_j=E[YX^j]$ for $j=0,1,2$.",
    "solution": "Let $m_j=E[X^j]$ for $j=0,\\ldots,4$ with $m_0=1$, and $r_j=E[YX^j]$ for $j=0,1,2$. Setting the three derivatives to zero gives the linear system $a+bm_1+cm_2=r_0$, $am_1+bm_2+cm_3=r_1$, $am_2+bm_3+cm_4=r_2$. Solve this $3$-by-$3$ system for the coefficients if its matrix is invertible; if singular, any solution gives a minimizing prediction. Finite required moments are assumed.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 40; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.41",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 theoretical 41: Geometric variance by conditioning",
    "prompt": "Use total variance to obtain the variance of a geometric $(p)$ waiting time on positive integers.",
    "approach": "Let $m=1/p,v=\\operatorname{Var}(X)$ and $q=1-p$.",
    "solution": "Let $m=1/p,v=\\operatorname{Var}(X)$ and $q=1-p$. After the first toss, $X=1$ for success and $X=1+X'$ otherwise, with a fresh copy $X'$. Average conditional variance is $qv$; variance of the conditional means $1$ and $1+m$ is $pq m^2$. Thus $v=qv+pq/p^2$, so $v=q/p^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 41; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.42",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 theoretical 42: Normal values with a random sign",
    "prompt": "For standard normal $X$ and independent fair Bernoulli $I$, let $Y=X$ for $I=1$ and $-X$ otherwise. Determine independence of $X,Y$, independence of $I,Y$, the law of $Y$, and covariance.",
    "approach": "$Y$ is standard normal by symmetry, and its conditional law is the same for either $I$, so $I,Y$ are independent.",
    "solution": "$Y$ is standard normal by symmetry, and its conditional law is the same for either $I$, so $I,Y$ are independent. But $\\lvert Y\\rvert=\\lvert X\\rvert$ always, so $X,Y$ are dependent. Writing $Y=(2I-1)X$ gives $E[XY]=E[2I-1]E[X^2]=0$, hence covariance zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 42; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.43",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 theoretical 43: A linear conditional mean",
    "prompt": "If $E[Y\\mid X]=a+bX$, verify the coefficients equal those of the best linear predictor.",
    "approach": "Taking means gives $a=E[Y]-bE[X]$.",
    "solution": "Taking means gives $a=E[Y]-bE[X]$. Also $\\operatorname{Cov}(X,Y)=\\operatorname{Cov}(X,E[Y\\mid X])=b\\operatorname{Var}(X)$. For positive predictor variance, $b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)=\\rho\\sigma_Y/\\sigma_X$, with the stated intercept.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 43; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.44",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 theoretical 44: Prediction error identity",
    "prompt": "For $Y=E[X\\mid Z]$ and finite $E[X^2]$, prove $E[(X-Y)^2]=E[X^2]-E[Y^2]$.",
    "approach": "Since $Y$ is a function of $Z$, $E[XY]=E[YE[X\\mid Z]]=E[Y^2]$.",
    "solution": "Since $Y$ is a function of $Z$, $E[XY]=E[YE[X\\mid Z]]=E[Y^2]$. Expand the error square and substitute: $E[X^2]-2E[XY]+E[Y^2]=E[X^2]-E[Y^2]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 44; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.45",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 theoretical 45: Branching process moments and extinction",
    "prompt": "Each individual independently has offspring count with mean $\\mu$, variance $\\sigma^2$ and probabilities $p_j$. Start with one individual. Derive mean and variance of generation size $X_n$ and an equation for extinction probability $\\pi$.",
    "approach": "Given $X_{n-1}=k$, the next size is a sum of $k$ independent offspring counts, with mean $k\\mu$ and variance $k\\sigma^2$.",
    "solution": "Given $X_{n-1}=k$, the next size is a sum of $k$ independent offspring counts, with mean $k\\mu$ and variance $k\\sigma^2$. Thus $E[X_n]=\\mu E[X_{n-1}]=\\mu^n$ and $v_n=\\sigma^2\\mu^{n-1}+\\mu^2v_{n-1}$, $v_0=0$. Solving gives $v_n=\\sigma^2\\mu^{n-1}(\\mu^n-1)/(\\mu-1)$ if $\\mu\\ne1$, and $n\\sigma^2$ if $\\mu=1$; the zero-offspring deterministic case is separately zero. Given $j$ children, extinction requires extinction of each independent family, with probability $\\pi^j$. Thus $\\pi=\\sum_jp_j\\pi^j$. The extinction probability is the smallest solution in $[0,1]$, obtained by iterating the offspring PGF from zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 45; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.46",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 46: Uniform MGF and moments",
    "prompt": "Verify the MGF, mean and variance of a uniform variable on $(a,b)$.",
    "approach": "Direct integration gives $M(t)=(e^{tb}-e^{ta})/[t(b-a)]$ for $t\\ne0$, with $M(0)=1$.",
    "solution": "Direct integration gives $M(t)=(e^{tb}-e^{ta})/[t(b-a)]$ for $t\\ne0$, with $M(0)=1$. Expanding the exponentials gives $M'(0)=(a+b)/2$ and $M''(0)=(a^2+ab+b^2)/3$. Subtracting the squared mean yields $(b-a)^2/12$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 46; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.47",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 47: Standard normal moments",
    "prompt": "Use its MGF to find every moment of standard normal $Z$.",
    "approach": "$M(t)=e^{t^2/2}=\\sum_{j\\ge0}t^{2j}/(2^jj!)$.",
    "solution": "$M(t)=e^{t^2/2}=\\sum_{j\\ge0}t^{2j}/(2^jj!)$. Compare with $\\sum_{n\\ge0}E[Z^n]t^n/n!$. Odd moments vanish and $E[Z^{2j}]=(2j)!/(2^jj!)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 47; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.48",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 48: General normal moments",
    "prompt": "For normal $X$ with mean $\\mu$ and variance $\\sigma^2$, derive $E[X^n]$ and check $n=1,2$.",
    "approach": "Write $X=\\mu+\\sigma Z$.",
    "solution": "Write $X=\\mu+\\sigma Z$. Expand the power and retain the even powers of $Z$: $E[X^n]=\\sum_{j=0}^{\\lfloor n/2\\rfloor}\\binom n{2j}\\mu^{n-2j}\\sigma^{2j}(2j)!/(2^jj!)$. The sum starts at zero; omitting that term would incorrectly omit $\\mu^n$. Checks give $E[X]=\\mu$ and $E[X^2]=\\mu^2+\\sigma^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 48; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.49",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 49: MGF of a linear transform",
    "prompt": "If $Y=aX+b$, express its MGF using that of $X$.",
    "approach": "$M_Y(t)=E[e^{t(aX+b)}]=e^{bt}M_X(at)$ on the set where the right side is finite..",
    "solution": "$M_Y(t)=E[e^{t(aX+b)}]=e^{bt}M_X(at)$ on the set where the right side is finite.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 49; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.50",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 50: Lognormal mean and variance",
    "prompt": "If $\\log X$ is normal $(\\mu,\\sigma^2)$, calculate the mean and variance of $X$.",
    "approach": "Normal MGF gives $E[X^k]=e^{k\\mu+k^2\\sigma^2/2}$.",
    "solution": "Normal MGF gives $E[X^k]=e^{k\\mu+k^2\\sigma^2/2}$. Thus mean is $e^{\\mu+\\sigma^2/2}$ and variance is $e^{2\\mu+2\\sigma^2}-e^{2\\mu+\\sigma^2}=e^{2\\mu+\\sigma^2}(e^{\\sigma^2}-1)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 50; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.51",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 51: Log-MGF curvature",
    "prompt": "For an MGF finite near zero put $\\Psi(t)=\\log M(t)$. Show $\\Psi''(0)=\\operatorname{Var}(X)$.",
    "approach": "Differentiate: $\\Psi''(t)=M''(t)/M(t)-(M'(t)/M(t))^2$.",
    "solution": "Differentiate: $\\Psi''(t)=M''(t)/M(t)-(M'(t)/M(t))^2$. At zero, $M(0)=1,M'(0)=E[X],M''(0)=E[X^2]$, giving variance.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 51; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.52",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 52: Exponential sums",
    "prompt": "Identify the distribution of a sum of $n$ independent exponential variables of rate $\\lambda$.",
    "approach": "Each MGF is $\\lambda/(\\lambda-t)$ for $t<\\lambda$.",
    "solution": "Each MGF is $\\lambda/(\\lambda-t)$ for $t<\\lambda$. The sum's MGF is $(\\lambda/(\\lambda-t))^n$, identifying the gamma law with shape $n$ and rate $\\lambda$. Its density is $\\lambda^nx^{n-1}e^{-\\lambda x}/(n-1)!$ for $x>0$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 52; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.53",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 theoretical 53: Covariance from a joint MGF",
    "prompt": "Explain how to calculate covariance from $M(s,t)=E[e^{sX+tY}]$, assuming finiteness near the origin.",
    "approach": "Differentiate at $(0,0)$: $M_s=E[X],M_t=E[Y],M_{st}=E[XY]$.",
    "solution": "Differentiate at $(0,0)$: $M_s=E[X],M_t=E[Y],M_{st}=E[XY]$. Hence covariance is $M_{st}(0,0)-M_s(0,0)M_t(0,0)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 53; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.54",
    "course": "prob",
    "sec": "7.8",
    "marks": 5,
    "title": "Ross 7 theoretical 54: Independence in a normal vector",
    "prompt": "For a multivariate normal vector show independence is equivalent to zero covariance between different coordinates.",
    "approach": "Independence always gives zero covariance when moments exist.",
    "solution": "Independence always gives zero covariance when moments exist. Conversely the joint normal MGF is $\\exp(\\sum_i\\mu_it_i+\\tfrac12\\sum_{i,j}\\Sigma_{ij}t_it_j)$. If off-diagonal covariances vanish, it factors into the marginal normal MGFs. Uniqueness of the joint MGF identifies the product law, proving independence. The normal assumption is essential.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.8.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 54; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.55",
    "course": "prob",
    "sec": "7.8",
    "marks": 5,
    "title": "Ross 7 theoretical 55: Normal and its square",
    "prompt": "Find $\\operatorname{Cov}(Z,Z^2)$ for standard normal $Z$.",
    "approach": "Symmetry gives $E[Z]=E[Z^3]=0$, so covariance $E[Z^3]-E[Z]E[Z^2]=0$.",
    "solution": "Symmetry gives $E[Z]=E[Z^3]=0$, so covariance $E[Z^3]-E[Z]E[Z^2]=0$. They remain dependent because the square is determined by $Z$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.8.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 55; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.theoretical.56",
    "course": "prob",
    "sec": "7.8",
    "marks": 5,
    "title": "Ross 7 theoretical 56: Normal plus independent noise",
    "prompt": "$Y$ is normal $(\\mu,\\sigma^2)$ and $X\\mid Y=y$ is normal $(y,1)$. Identify a representation, joint law, mean and variance of $X$, correlation, and conditional law of $Y\\mid X=x$.",
    "approach": "The pair has the same law as $(Y+Z,Y)$ with independent standard normal $Z$; its specified conditional density is identical.",
    "solution": "The pair has the same law as $(Y+Z,Y)$ with independent standard normal $Z$; its specified conditional density is identical. It is therefore bivariate normal. $E[X]=\\mu$, $\\operatorname{Var}(X)=\\sigma^2+1$, covariance $\\sigma^2$, and correlation $\\sigma/\\sqrt{1+\\sigma^2}$ for $\\sigma>0$. The conditional mean is $\\mu+\\sigma^2(x-\\mu)/(1+\\sigma^2)$ and conditional variance is $\\sigma^2/(1+\\sigma^2)$. If $\\sigma=0$, $Y$ is constant and correlation is undefined.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.8.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, theoretical 56; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.1",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 1: Estimating distinct names",
    "prompt": "A list of $m$ entries may repeat names. Let $n(i)$ count occurrences of the name at position $i$ and let $d$ be the number of distinct names. Express $d$, find the law of $X=\\lfloor mU\\rfloor+1$ for uniform $U$, and show $E[m/n(X)]=d$.",
    "approach": "Each name appearing $k$ times contributes $k(1/k)=1$ to $\\sum_i1/n(i)$, so $d=\\sum_{i=1}^m1/n(i)$.",
    "solution": "Each name appearing $k$ times contributes $k(1/k)=1$ to $\\sum_i1/n(i)$, so $d=\\sum_{i=1}^m1/n(i)$. The $m$ equal subintervals of $U$ give $P(X=i)=1/m$. Hence $E[m/n(X)]=\\sum_i[m/n(i)]/m=d$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 1; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.3",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 3: Couples at five tables",
    "prompt": "Seat ten couples at five tables of four. Find the expected couples sharing a table under unrestricted random seating, and under random seating with two men and two women at each table.",
    "approach": "Unrestricted: after one partner sits, three of the other nineteen seats share that table, giving mean $10(3/19)=30/19$.",
    "solution": "Unrestricted: after one partner sits, three of the other nineteen seats share that table, giving mean $10(3/19)=30/19$. With balanced-sex tables, each wife has two of the ten female places at her husband's table, so the mean is $10(2/10)=2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 3; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.4",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 4: Number of ones before collecting all faces",
    "prompt": "Roll a fair die until all six faces appear. Find mean occurrences of face one.",
    "approach": "Let $T$ be the completion time, with $E[T]=6H_6$.",
    "solution": "Let $T$ be the completion time, with $E[T]=6H_6$. For roll $i$, the event $T\\ge i$ is determined by earlier rolls and is independent of its face. Thus the expected ones are $\\sum_iP(T\\ge i)/6=E[T]/6=H_6=49/20$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 4; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.5",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 5: Red-card gains",
    "prompt": "Shuffle $n$ red and $n$ black cards. Each red revealed pays one if the revealed red count is then greater than the black count. Find the mean total payment.",
    "approach": "Let $G$ be the gain for one red-black ordering.",
    "solution": "Let $G$ be the gain for one red-black ordering. Reverse that ordering without changing colors and call its gain $G^*$. A red in the original order wins exactly when its preceding running red-minus-black count is nonnegative. Its corresponding red in the reversed order wins exactly when that original preceding count is negative, because total red-minus-black count is zero. Thus exactly one of the two versions wins for each red card, and $G+G^*=n$. Reversal preserves the uniform ordering distribution, so $E[G]=E[G^*]$ and $E[G]=n/2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 5; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.6",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 6: Bonferroni lower bound",
    "prompt": "For events $A_1,\\ldots,A_n$, prove $P(\\bigcap_iA_i)\\ge\\sum_iP(A_i)-(n-1)$.",
    "approach": "Let $N$ count events that occur and $I$ indicate all occur.",
    "solution": "Let $N$ count events that occur and $I$ indicate all occur. Pointwise, if $I=0$ then $N\\le n-1$; if $I=1$ then $N=n$. Thus $N\\le n-1+I$. Average and rearrange.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 6; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.7",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 7: Smallest sampled integer",
    "prompt": "Choose $k$ different numbers uniformly from $1,\\ldots,n$. Find the expected smallest one.",
    "approach": "Mark the $k$ chosen positions as special among $n$.",
    "solution": "Mark the $k$ chosen positions as special among $n$. The minimum is the position of the first special in a random ordering, with mean $(n+1)/(k+1)$ by equal expected gaps. Equivalently sum $P(X\\ge j)=\\binom{n-j+1}{k}/\\binom nk$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 7; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.9",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 9: Points on a circle",
    "prompt": "Nineteen points lie on a unit circle. Show some arc of length one contains at least four points.",
    "approach": "Choose the start of a length-one arc uniformly around the circumference $2\\pi$.",
    "solution": "Choose the start of a length-one arc uniformly around the circumference $2\\pi$. Each fixed point is included with probability $1/(2\\pi)$. Mean points in the arc is $19/(2\\pi)>3$. Some arc therefore has an integer count at least four.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 9; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.10",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 10: Square-root Poisson variance",
    "prompt": "If $X$ is Poisson mean $\\lambda$, show approximately $\\operatorname{Var}(\\sqrt X)=1/4$ for large $\\lambda$.",
    "approach": "For $g(x)=\\sqrt x$, second-order Taylor averaging gives $E[\\sqrt X]\\approx\\sqrt\\lambda-1/(8\\sqrt\\lambda)$.",
    "solution": "For $g(x)=\\sqrt x$, second-order Taylor averaging gives $E[\\sqrt X]\\approx\\sqrt\\lambda-1/(8\\sqrt\\lambda)$. Since $E[(\\sqrt X)^2]=\\lambda$, subtracting the square of this approximation gives $1/4-1/(64\\lambda)\\approx1/4$. The assertion concerns the square root, not $X$ itself, whose variance is $\\lambda$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 10; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.11",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 11: Couples at unequal tables",
    "prompt": "Ten couples sit randomly at three tables of four and four tables of two. Find mean couples at the same table.",
    "approach": "A randomly occupied seat has 3 companions with probability $12/20$ and 1 companion with probability $8/20$.",
    "solution": "A randomly occupied seat has 3 companions with probability $12/20$ and 1 companion with probability $8/20$. Thus a specified pair shares a table with probability $[(12/20)3+(8/20)1]/19=11/95$. Multiply by ten: $22/19$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 11; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.12",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 12: People who recruited no one",
    "prompt": "Person 1 recruits 2. To recruit $k$, choose its recruiter uniformly among $1,\\ldots,k-1$, independently for $k=3,\\ldots,n$. Find mean and variance of people with no recruits, and variance at $n=5$.",
    "approach": "For $i\\ge2$, the chance of no later recruits is $p_i=\\prod_{k=i+1}^n(1-1/(k-1))=(i-1)/(n-1)$; person 1 cannot qualify.",
    "solution": "For $i\\ge2$, the chance of no later recruits is $p_i=\\prod_{k=i+1}^n(1-1/(k-1))=(i-1)/(n-1)$; person 1 cannot qualify. Mean is $n/2$. For $2\\le i<j\\le n$, the joint chance is $q_{ij}=(i-1)(j-2)/[(n-1)(n-2)]$ for $n\\ge3$. Hence variance $\\sum_{i=2}^np_i(1-p_i)+2\\sum_{2\\le i<j\\le n}(q_{ij}-p_ip_j)=n/12$ for $n\\ge3$. At $n=5$ it is $5/12$; at $n=2$ the count is deterministically one.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 12; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.13",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 selftest 13: Balanced basketball triplets",
    "prompt": "Randomly split two centers, three forwards and four guards into three groups of three. Find mean and variance of groups with one of each type.",
    "approach": "A specified group is balanced with probability $p=\\binom21\\binom31\\binom41/\\binom93=2/7$.",
    "solution": "A specified group is balanced with probability $p=\\binom21\\binom31\\binom41/\\binom93=2/7$. Given it is balanced, the next is balanced with probability $\\binom11\\binom21\\binom31/\\binom63=3/10$. Thus $q=3/35$ for two groups. Mean is $3p=6/7$ and variance is $3p(1-p)+6(q-p^2)=156/245$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 13; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.15",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 15: Predicting a coin",
    "prompt": "A selected coin has head chance $P$ uniform $(0,1)$. Correct prediction pays one and wrong prediction loses one. Find mean gain without seeing $P$, the best prediction knowing $P=p$, and mean gain with that information.",
    "approach": "Without the bias each outcome has chance $1/2$, so any fixed prediction has mean zero.",
    "solution": "Without the bias each outcome has chance $1/2$, so any fixed prediction has mean zero. Given $p$, predict heads if $p>1/2$, tails if $p<1/2$, either at equality. Conditional mean gain is $\\lvert2p-1\\rvert$; its average $\\int_0^1\\lvert2p-1\\rvert dp=1/2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 15; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.16",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 16: First-occurrence name estimator",
    "prompt": "Select a uniform list position $X$ among $m$ entries. Put $I=1$ if its name has no earlier occurrence, otherwise zero. Prove $E[mI]=d$, the distinct-name count.",
    "approach": "Exactly one position, its first occurrence, qualifies for each of the $d$ names.",
    "solution": "Exactly one position, its first occurrence, qualifies for each of the $d$ names. Thus $P(I=1)=d/m$ and $E[mI]=d$. Equivalently, conditional on choosing a name occurring $k$ times, one of its $k$ positions is first, with chance $1/k$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 16; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.17",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 17: Collisions in cells",
    "prompt": "Independently place $m$ items in $n$ cells, with cell probabilities $p_j$. Count a collision whenever an item enters an occupied cell. Find its mean.",
    "approach": "Each occupied cell receives one noncollision, its first item; all its other items are collisions.",
    "solution": "Each occupied cell receives one noncollision, its first item; all its other items are collisions. Thus $C=m-D$ where $D$ is the occupied-cell count. Since $E[D]=\\sum_j[1-(1-p_j)^m]$, $E[C]=m-n+\\sum_j(1-p_j)^m$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 17; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.18",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 18: Initial run length",
    "prompt": "Uniformly permute $n$ ones and $m$ zeros. Find the mean length $X$ of the initial run.",
    "approach": "For $k\\ge1$, $P(X\\ge k)=[\\binom nk+\\binom mk]/\\binom{n+m}{k}$, with impossible coefficients zero.",
    "solution": "For $k\\ge1$, $P(X\\ge k)=[\\binom nk+\\binom mk]/\\binom{n+m}{k}$, with impossible coefficients zero. Sum these tails to obtain $E[X]$. If both counts are positive the sum simplifies to $n/(m+1)+m/(n+1)$, using the equal expected gaps of each color; if a color is absent the entire length is deterministic.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 18; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.19",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 19: Emptying two boxes",
    "prompt": "A head removes one item from an H-box initially of size $n$; a tail removes one from a T-box of size $m$. Empty boxes ignore later hits. For head chance $0<p<1$ find mean flips to empty both.",
    "approach": "After $L=n+m$ flips let $K\\sim\\operatorname{Bin}(L,p)$.",
    "solution": "After $L=n+m$ flips let $K\\sim\\operatorname{Bin}(L,p)$. If $K<n$, wait $(n-K)/p$ more flips on average; if $K>n$, wait $(K-n)/(1-p)$. Thus mean is $L+\\sum_{k=0}^L\\binom Lk p^k(1-p)^{L-k}[(n-k)_+/p+(k-n)_+/(1-p)]$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 19; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.21",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 21: A permutation with negative products",
    "prompt": "Real $a_1,\\ldots,a_n$ sum to zero and are not all zero. Prove some cyclic ordering has negative sum of adjacent products.",
    "approach": "Choose a uniform permutation and set its $(n+1)$st entry equal to the first.",
    "solution": "Choose a uniform permutation and set its $(n+1)$st entry equal to the first. Each of the $n$ adjacent ordered pairs is uniform among distinct indices. Its mean product is $[(\\sum_i a_i)^2-\\sum_i a_i^2]/[n(n-1)]=-\\sum_i a_i^2/[n(n-1)]$. The mean cyclic sum is $-\\sum_i a_i^2/(n-1)<0$, so at least one ordering has a negative sum.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 21; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.23",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 23: Correlation of paired sums",
    "prompt": "Independent identically distributed pairs $(X_i,Y_i)$ have within-pair correlation $\\rho$ and positive finite variances $v_X,v_Y$. Find the correlation of their two sums through $n$.",
    "approach": "Different pairs contribute no covariance.",
    "solution": "Different pairs contribute no covariance. Sum covariance is $n\\rho\\sqrt{v_Xv_Y}$; sum variances are $nv_X,nv_Y$. Divide to obtain the unchanged correlation $\\rho$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 23; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.24",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 24: Conditional ace counts",
    "prompt": "Choose three cards without replacement. Find the expected ace count given the ace of spades is chosen, and given at least one ace is chosen.",
    "approach": "Given the ace of spades, the other two positions sample three aces among 51 cards, giving $1+2(3/51)=19/17$.",
    "solution": "Given the ace of spades, the other two positions sample three aces among 51 cards, giving $1+2(3/51)=19/17$. The unconditional ace mean is $3(4/52)=3/13$. Since a zero-ace hand contributes zero, divide by $P(X\\ge1)=1-\\binom{48}{3}/\\binom{52}{3}$ to get the second mean.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 24; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.25",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 25: Mean normal CDF value",
    "prompt": "$X$ is normal $(\\mu,1)$ and independent $Z$ is standard normal. Put $I=1_{\\{Z<X\\}}$. Find $E[I\\mid X=x]$, connect $E[\\Phi(X)]$ to a probability, and evaluate.",
    "approach": "Conditional on $x$, the indicator mean is $P(Z<x)=\\Phi(x)$.",
    "solution": "Conditional on $x$, the indicator mean is $P(Z<x)=\\Phi(x)$. The tower rule gives $E[\\Phi(X)]=E[I]=P(X-Z>0)$. The difference is normal mean $\\mu$, variance two, so this equals $\\Phi(\\mu/\\sqrt2)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 25; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.26",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 26: First target reached",
    "prompt": "Toss with head chance $0<p<1$ until either $n$ heads or $m$ tails. Find mean tosses.",
    "approach": "Let $T$ be the stopping time.",
    "solution": "Let $T$ be the stopping time. For $0\\le k\\le n+m-2$, $T>k$ exactly when the head count $h$ in the first $k$ satisfies $h<n$ and $k-h<m$. Thus $E[T]=\\sum_{k=0}^{n+m-2}\\sum_{h=\\max(0,k-m+1)}^{\\min(k,n-1)}\\binom kh p^h(1-p)^{k-h}$. This finite tail sum accounts for both competing targets without assuming their waiting times independent.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 26; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.27",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 27: Move-to-front shuffle",
    "prompt": "Repeatedly choose a uniform random card among $n$ and move it to the front. Stop once $n-1$ distinct cards have been chosen. Find mean stages.",
    "approach": "After $i$ distinct cards have been chosen, another distinct card appears with probability $(n-i)/n$, so mean additional wait is $n/(n-i)$.",
    "solution": "After $i$ distinct cards have been chosen, another distinct card appears with probability $(n-i)/n$, so mean additional wait is $n/(n-i)$. Add for $i=0,\\ldots,n-2$: $n\\sum_{j=2}^n1/j=n(H_n-1)$. For $n=1$ no stages are needed.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 27; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.28",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 28: Capped first-success time",
    "prompt": "Perform independent trials of success probability $p$ until success or $n$ trials. Find the mean trials performed.",
    "approach": "For $1\\le k\\le n$, at least $k$ trials are done exactly when the first $k-1$ fail, with probability $(1-p)^{k-1}$.",
    "solution": "For $1\\le k\\le n$, at least $k$ trials are done exactly when the first $k-1$ fail, with probability $(1-p)^{k-1}$. The mean is $[1-(1-p)^n]/p$ for $p>0$, and $n$ for $p=0$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 28; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.29",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 29: Bernoulli covariance and independence",
    "prompt": "Show Bernoulli variables $X,Y$ are independent exactly when their covariance is zero.",
    "approach": "Independence gives zero covariance.",
    "solution": "Independence gives zero covariance. Conversely zero covariance says $P(X=1,Y=1)=P(X=1)P(Y=1)$. Subtraction from each marginal gives the factorization for $(1,0)$ and $(0,1)$, and subtraction from one gives it for $(0,0)$. All four joint probabilities factor, proving independence.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 29; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.30",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 30: Hat-size matches",
    "prompt": "There are $n_i$ people of hat size $i$ and $h_i$ hats of that size, with each total equal to $n$. Hats are allocated by a uniform permutation. Find mean size matches.",
    "approach": "A person of size $i$ gets a suitable hat with probability $h_i/n$.",
    "solution": "A person of size $i$ gets a suitable hat with probability $h_i/n$. There are $n_i$ such people. Sum indicators to obtain $\\sum_i n_ih_i/n$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 30; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.31",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 31: Standard-deviation triangle inequality",
    "prompt": "For finite-variance $X,Y$, show $\\sqrt{\\operatorname{Var}(X+Y)}\\le\\sqrt{\\operatorname{Var}(X)}+\\sqrt{\\operatorname{Var}(Y)}$.",
    "approach": "Cauchy-Schwarz for the centered variables bounds covariance by $\\sqrt{\\operatorname{Var}(X)\\operatorname{Var}(Y)}$.",
    "solution": "Cauchy-Schwarz for the centered variables bounds covariance by $\\sqrt{\\operatorname{Var}(X)\\operatorname{Var}(Y)}$. Insert this in the sum-variance formula, which is then at most the square of the right side. Both sides are nonnegative, so taking square roots preserves order. A claim without these square roots would be false in general.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 31; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.32",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 32: Expected sampled rank",
    "prompt": "Take the first $n$ entries in a uniform random permutation of $1,\\ldots,n+m$. Find the mean $i$th smallest $X$ among those entries.",
    "approach": "The $n$ selected ranks are a uniform subset.",
    "solution": "The $n$ selected ranks are a uniform subset. Its $n+1$ gaps, before/between/after selected ranks, have equal expected number $m/(n+1)$ of unselected ranks. The $i$th selected position is $i$ plus the $i$ preceding gaps, giving $E[X]=i+im/(n+1)=i(n+m+1)/(n+1)$. Equivalently each extra rank is below $X$ with probability $i/(n+1)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 32; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.selftest.33",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 selftest 33: Uniform random upper limit",
    "prompt": "$Y$ is uniform $(0,1)$; conditional on $Y=y$, $X$ is uniform $(0,y)$. Find $E[X]$, covariance, variance, CDF and density of $X$.",
    "approach": "$E[X]=E[Y/2]=1/4$.",
    "solution": "$E[X]=E[Y/2]=1/4$. $E[XY]=E[Y^2/2]=1/6$, giving covariance $1/6-1/8=1/24$. $E[X^2]=E[Y^2/3]=1/9$, so variance $1/9-1/16=7/144$. For $0<x<1$, condition on $Y$: $F_X(x)=\\int_0^x1\\,dy+\\int_x^1x/y\\,dy=x-x\\log x$. The CDF is zero for $x\\le0$ and one for $x\\ge1$. Differentiation gives density $-\\log x$ on $(0,1)$ and zero elsewhere.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, selftest 33; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2b",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2b: Order preserves the mean",
    "prompt": "If $X\\ge Y$ for every outcome and both are integrable, prove $E[X]\\ge E[Y]$.",
    "approach": "The difference $X-Y$ is nonnegative, so its weighted average is nonnegative.",
    "solution": "The difference $X-Y$ is nonnegative, so its weighted average is nonnegative. By linearity $E[X-Y]=E[X]-E[Y]\\ge0$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2b; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2c",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2c: Mean of the sample mean",
    "prompt": "Observations $X_1,\\ldots,X_n$ have common finite mean $\\mu$. Find $E[\\bar X]$ for $\\bar X=(X_1+\\cdots+X_n)/n$.",
    "approach": "Linearity gives $E[\\bar X]=\\sum_i E[X_i]/n=n\\mu/n=\\mu$.",
    "solution": "Linearity gives $E[\\bar X]=\\sum_i E[X_i]/n=n\\mu/n=\\mu$. Independence is unnecessary for this particular result.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2c; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2d",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2d: Union bound using a count",
    "prompt": "For events $A_1,\\ldots,A_n$, use indicators to prove the union bound.",
    "approach": "The indicator that at least one event occurs is at most the sum of all event indicators.",
    "solution": "The indicator that at least one event occurs is at most the sum of all event indicators. Average this pointwise inequality: $P(\\bigcup_iA_i)\\le\\sum_iP(A_i)$. Overlap can only make the sum count outcomes more than once.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2d; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2e",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2e: Mean binomial count",
    "prompt": "Use indicators to find mean successes in $n$ independent trials of success chance $p$.",
    "approach": "Each trial indicator has mean $p$.",
    "solution": "Each trial indicator has mean $p$. Their sum has mean $np$ by linearity. Independence is needed for the binomial law but not for the sum's mean.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2e; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2f",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2f: Mean negative-binomial time",
    "prompt": "With independent trials of success chance $p>0$, find mean trials to reach $r$ successes.",
    "approach": "Split the time into the wait for the first success, then the additional waits for each next success.",
    "solution": "Split the time into the wait for the first success, then the additional waits for each next success. Each is geometric with mean $1/p$. Their sum has mean $r/p$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2f; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2h",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2h: Matching hats",
    "prompt": "Randomly give $N$ people their mixed-up hats. Find mean people receiving their own hats.",
    "approach": "Each of the $N$ people receives their own hat with probability $1/N$.",
    "solution": "Each of the $N$ people receives their own hat with probability $1/N$. Add their indicators: mean matches is $N(1/N)=1$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2h; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2j",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2j: Ducks escaping hunters",
    "prompt": "Ten hunters independently select among ten ducks and independently hit their target with probability $p$. Find mean unhit ducks.",
    "approach": "A particular hunter hits a specified duck with probability $p/10$.",
    "solution": "A particular hunter hits a specified duck with probability $p/10$. A duck escapes all ten with probability $(1-p/10)^{10}$. Summing ten escape indicators gives $10(1-p/10)^{10}$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2j; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2k",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2k: Runs in a binary arrangement",
    "prompt": "Uniformly permute $n$ ones and $m$ zeros. Find mean one-runs, zero-runs and total runs.",
    "approach": "Let $L=n+m>0$.",
    "solution": "Let $L=n+m>0$. A one-run starts at the first position with chance $n/L$, or at a later zero-to-one boundary with chance $mn/[L(L-1)]$. Hence mean one-runs is $n(m+1)/L$. Similarly mean zero-runs is $m(n+1)/L$. Their sum is $1+2nm/L$; the formulas also handle one type absent.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2k; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2l",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2l: Random walk in the plane",
    "prompt": "Take $n$ independent unit steps with directions uniform on $(0,2\\pi)$, starting at the origin. Find mean squared distance $D^2$.",
    "approach": "Write each step as $(\\cos\\theta_i,\\sin\\theta_i)$.",
    "solution": "Write each step as $(\\cos\\theta_i,\\sin\\theta_i)$. Expanding the squared total gives $n+\\sum_{i\\ne j}(\\cos\\theta_i\\cos\\theta_j+\\sin\\theta_i\\sin\\theta_j)$. Each coordinate has mean zero; independence makes every cross-term average zero. Thus $E[D^2]=n$. This does not say $E[D]=\\sqrt n$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2l; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2m",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2m: Quicksort comparisons",
    "prompt": "Quicksort chooses a pivot uniformly within each current group of distinct values. Find mean comparisons to sort $n$ values and its leading size for large $n$.",
    "approach": "Label values by increasing rank.",
    "solution": "Label values by increasing rank. Ranks $i<j$ are compared exactly when the first pivot among ranks $i,\\ldots,j$ is either endpoint, with probability $2/(j-i+1)$. Sum pair indicators: $E[C]=\\sum_{i<j}2/(j-i+1)=2(n+1)H_n-4n$. Since $H_n$ grows like $\\log n$, the leading term is $2n\\log n$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2m; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2n",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2n: Inclusion-exclusion from indicators",
    "prompt": "Derive the probability of a finite union using indicators and multiplication.",
    "approach": "Let $I_i=1_{A_i}$.",
    "solution": "Let $I_i=1_{A_i}$. The expression $1-\\prod_i(1-I_i)$ is exactly the union indicator. Expand the product: $\\sum_iI_i-\\sum_{i<j}I_iI_j+\\cdots$. A product of selected indicators is the indicator of their intersection. Average the expansion to obtain the alternating inclusion-exclusion formula.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2n; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2o",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2o: Integer tail sum",
    "prompt": "For nonnegative integer-valued $X$, derive its mean using tail probabilities.",
    "approach": "Pointwise $X=\\sum_{i\\ge1}1_{\\{X\\ge i\\}}$: exactly the first $X$ indicators equal one.",
    "solution": "Pointwise $X=\\sum_{i\\ge1}1_{\\{X\\ge i\\}}$: exactly the first $X$ indicators equal one. Nonnegative terms allow averaging term by term, so $E[X]=\\sum_{i\\ge1}P(X\\ge i)$, including an infinite result if necessary.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2o; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2p",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2p: Ordering a frequently requested list",
    "prompt": "Requests for item $i$ have known probabilities $p_i$. Which fixed list order minimizes the expected requested position?",
    "approach": "Put larger probabilities earlier.",
    "solution": "Put larger probabilities earlier. If positions $a<b$ contain probabilities $u<v$, swapping them changes the mean from $au+bv$ to $av+bu$, a decrease of $(b-a)(v-u)>0$. Repeatedly remove such inversions. The minimum is $\\sum_i i p_{(i)}$ where probabilities are in decreasing order.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2p; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2q",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2q: Many Hamiltonian paths",
    "prompt": "A tournament records a winner for every pair of $n>2$ players. Show some tournament has more than $n!/2^{n-1}$ directed Hamiltonian paths.",
    "approach": "Choose each pair's winner independently and fairly.",
    "solution": "Choose each pair's winner independently and fairly. Each of the $n!$ player orders is a directed path with probability $2^{-(n-1)}$, so the path count has mean $n!/2^{n-1}$. The count is not constant: a fully ordered tournament has only one, while some outcomes have others. Therefore some outcome exceeds the mean, rather than merely equaling it.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2q; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2r",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2r: Chipmunks in consecutive trees",
    "prompt": "Fifteen chipmunks inhabit a ring of 52 trees. Show some seven consecutive trees contain at least three.",
    "approach": "Select the block's starting tree uniformly.",
    "solution": "Select the block's starting tree uniformly. Each chipmunk's tree belongs to seven of 52 blocks, so expected chipmunks in the block is $105/52>2$. Not every block can have at most two, hence one has at least three.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2r; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.2s",
    "course": "prob",
    "sec": "7.2",
    "marks": 5,
    "title": "Ross 7 example 2s: Unequal coupon probabilities",
    "prompt": "Independent coupon types have positive probabilities $p_1,\\ldots,p_n$. Find mean complete-set time.",
    "approach": "Let $T_i$ be the first occurrence time of type $i$, so completion is $\\max_iT_i$.",
    "solution": "Let $T_i$ be the first occurrence time of type $i$, so completion is $\\max_iT_i$. The identity expressing a maximum as an alternating sum of subset minima gives $E[T]=\\sum_{\\varnothing\\ne S\\subseteq\\{1,\\ldots,n\\}}(-1)^{\\lvert S\\rvert+1}/p_S$, where $p_S=\\sum_{i\\in S}p_i$ and the subset minimum is geometric $(p_S)$. Expanding a product and integrating also gives $E[T]=\\int_0^\\infty[1-\\prod_i(1-e^{-p_it})]dt$. A zero-probability required type makes the time infinite.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 2s; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.3b",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 example 3b: Hypergeometric factorial moments",
    "prompt": "Draw $n$ balls from $N$ without replacement, $m$ white; let $X$ be white count. Derive factorial moments and variance.",
    "approach": "Any specified $k$ draw positions are all white with chance $(m)_k/(N)_k$, where $(a)_k=a(a-1)\\cdots(a-k+1)$.",
    "solution": "Any specified $k$ draw positions are all white with chance $(m)_k/(N)_k$, where $(a)_k=a(a-1)\\cdots(a-k+1)$. Thus $E[(X)_k]=(n)_k(m)_k/(N)_k$. Mean is $nm/N$ and second raw moment is $n(n-1)m(m-1)/[N(N-1)]+nm/N$. Subtracting squared mean gives variance $n(m/N)(1-m/N)(N-n)/(N-1)$ for $N>1$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 3b; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.3c",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 example 3c: Moments of hat matches",
    "prompt": "For $N$ hats uniformly permuted, let $X$ count people getting their own hat. Find factorial moments and variance.",
    "approach": "Any $k$ specified people all match with chance $(N-k)!/N!$.",
    "solution": "Any $k$ specified people all match with chance $(N-k)!/N!$. There are $(N)_k$ ordered $k$-tuples, giving $E[(X)_k]=1$ for $1\\le k\\le N$. If $N\\ge2$, $E[X]=1,E[X^2]=2$, so variance is one. For $N=1$ the count is constant and variance zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 3c; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.3d",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 example 3d: Distinct coupon types after fixed draws",
    "prompt": "Coupon probabilities are $p_1,\\ldots,p_N$. Find mean and variance of the distinct-type count $Y$ after $n$ independent draws, including the equal-probability case.",
    "approach": "Let $X=N-Y$ count absent types.",
    "solution": "Let $X=N-Y$ count absent types. Put $a_i=(1-p_i)^n$ and $b_{ij}=(1-p_i-p_j)^n$. Then $E[Y]=N-\\sum_i a_i$, and variance is $\\sum_i a_i+2\\sum_{i<j}b_{ij}-(\\sum_i a_i)^2$. For equal probabilities these become $N[1-(1-1/N)^n]$ and $N(1-1/N)^n+N(N-1)(1-2/N)^n-N^2(1-1/N)^{2n}$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 3d; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.3e",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 example 3e: Negative-hypergeometric time",
    "prompt": "An urn has $n$ special and $m$ ordinary balls. Remove uniformly until $r\\le n$ special balls are seen. Find the stopping-time PMF, mean and variance, and first-spade/first-ace means for a deck.",
    "approach": "For $r\\le k\\le r+m$, $P(T=k)=\\binom n{r-1}\\binom m{k-r}/\\binom{n+m}{k-1}\\cdot(n-r+1)/(n+m-k+1)$.",
    "solution": "For $r\\le k\\le r+m$, $P(T=k)=\\binom n{r-1}\\binom m{k-r}/\\binom{n+m}{k-1}\\cdot(n-r+1)/(n+m-k+1)$. A fixed ordinary ball appears before the $r$th special with chance $r/(n+1)$; a pair both precede it with chance $r(r+1)/[(n+1)(n+2)]$. Indicator averaging gives mean $r(n+m+1)/(n+1)$ and variance $mr(n+1-r)(n+m+1)/[(n+1)^2(n+2)]$. A deck's first spade mean is $53/14$ and first ace mean $53/5$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 3e; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.3f",
    "course": "prob",
    "sec": "7.3",
    "marks": 5,
    "title": "Ross 7 example 3f: Singleton types at completion",
    "prompt": "Collect equally likely coupons until all $n$ types appear. Find mean and variance of the number $X$ of types appearing exactly once.",
    "approach": "Index types by their discovery order.",
    "solution": "Index types by their discovery order. Discovery $i$ remains a singleton with chance $a_i=1/(n+1-i)$: among itself and unseen types it must be collected last again. For $i<j$, both singleton chance is $b_{ij}=2/[(n+1-i)(n+2-j)]$, obtained by first avoiding type $i$ until discovery $j$, then putting these two types last among the remaining types. Hence $E[X]=H_n$ and variance $H_n+4\\sum_{i<j}1/[(n+1-i)(n+2-j)]-H_n^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 3f; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.4b",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 example 4b: Binomial variance from indicators",
    "prompt": "Find variance of a binomial $(n,p)$ variable using its trial indicators.",
    "approach": "Each indicator satisfies $I_i^2=I_i$, so its variance is $p-p^2=p(1-p)$.",
    "solution": "Each indicator satisfies $I_i^2=I_i$, so its variance is $p-p^2=p(1-p)$. Independent trials have no cross covariance. Add the $n$ variances to get $np(1-p)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 4b; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.4d",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 example 4d: Covariance of event indicators",
    "prompt": "Relate the covariance of $1_A,1_B$ to the change in the chance of $A$ after learning $B$.",
    "approach": "Their means are $P(A),P(B)$ and product mean $P(A\\cap B)$.",
    "solution": "Their means are $P(A),P(B)$ and product mean $P(A\\cap B)$. Thus covariance is $P(A\\cap B)-P(A)P(B)=P(B)[P(A\\mid B)-P(A)]$ when $P(B)>0$. Its sign describes whether knowing $B$ raises or lowers the chance of $A$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 4d; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.4e",
    "course": "prob",
    "sec": "7.4",
    "marks": 5,
    "title": "Ross 7 example 4e: Mean and residual covariance",
    "prompt": "Independent identically distributed observations have variance $\\sigma^2$. Show the sample mean and the deviation $X_i-\\bar X$ are uncorrelated.",
    "approach": "$\\operatorname{Cov}(X_i,\\bar X)=\\sigma^2/n$ because only its own term contributes.",
    "solution": "$\\operatorname{Cov}(X_i,\\bar X)=\\sigma^2/n$ because only its own term contributes. Subtract $\\operatorname{Var}(\\bar X)=\\sigma^2/n$ to get zero. This does not generally imply independence; that conclusion holds for a normal sample.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.4.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 4e; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5b",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5b: Conditional exponential mean",
    "prompt": "For density $f(x,y)=e^{-x/y-y}/y$ on positive $x,y$, find $E[X\\mid Y=y]$.",
    "approach": "Integrate over $x$ to get marginal $f_Y(y)=e^{-y}$.",
    "solution": "Integrate over $x$ to get marginal $f_Y(y)=e^{-y}$. Divide the joint density by it: $f_{X\\mid Y}(x\\mid y)=e^{-x/y}/y$, exponential with mean $y$. Thus the conditional expectation is $y$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5b; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5e",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5e: Craps game length",
    "prompt": "In craps, first-roll 7 or 11 wins; 2,3,12 loses; otherwise repeat until the first-roll sum or 7 appears. Find mean rolls overall, given a win, and given a loss.",
    "approach": "Let $p_i=(6-\\lvert7-i\\rvert)/36$ and $C=\\{4,5,6,8,9,10\\}$.",
    "solution": "Let $p_i=(6-\\lvert7-i\\rvert)/36$ and $C=\\{4,5,6,8,9,10\\}$. The unconditional mean is $m=1+\\sum_{i\\in C}p_i/(p_i+p_7)\\approx3.37576$. Win chance is $w=p_7+p_{11}+\\sum_{i\\in C}p_i^2/(p_i+p_7)$. For an established point, termination type is independent of its geometric waiting time. Hence $E[R1_{\\mathrm{win}}]=w+\\sum_{i\\in C}p_i^2/(p_i+p_7)^2$, giving $E[R\\mid\\mathrm{win}]\\approx2.93830$. Finally $E[R\\mid\\mathrm{loss}]=(m-wE[R\\mid\\mathrm{win}])/(1-w)\\approx3.80101$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5e; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5f",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5f: Correlation parameter of a normal density",
    "prompt": "A bivariate normal model has marginal means $\\mu_X,\\mu_Y$, standard deviations $\\sigma_X,\\sigma_Y$ and conditional mean $E[X\\mid Y]=\\mu_X+\\rho\\sigma_X(Y-\\mu_Y)/\\sigma_Y$. Verify the actual correlation is $\\rho$.",
    "approach": "Multiply the conditional mean by $Y$ and average: $E[XY]=\\mu_X\\mu_Y+\\rho(\\sigma_X/\\sigma_Y)\\operatorname{Var}(Y)=\\mu_X\\mu_Y+\\rho\\sigma_X\\sigma_Y$.",
    "solution": "Multiply the conditional mean by $Y$ and average: $E[XY]=\\mu_X\\mu_Y+\\rho(\\sigma_X/\\sigma_Y)\\operatorname{Var}(Y)=\\mu_X\\mu_Y+\\rho\\sigma_X\\sigma_Y$. Subtract marginal means and divide by the standard deviations to get $\\rho$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5f; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5g",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5g: Multinomial means after positive counts",
    "prompt": "In $n$ trials with category probabilities $p_i,p_j$, find $E[N_j\\mid N_i>0]$ and $E[N_j\\mid N_i>1]$, where conditioning events have positive probability.",
    "approach": "Put $q=1-p_i$.",
    "solution": "Put $q=1-p_i$. Given $N_i=k$, mean $N_j$ is $(n-k)p_j/q$ for $q>0$. Subtract the $k=0$ contribution from $E[N_j]=np_j$ and divide by $P(N_i>0)$: first answer $np_j(1-q^{n-1})/(1-q^n)$. Subtract $k=0,1$ contributions for the second: $np_j[1-q^{n-1}-(n-1)p_iq^{n-2}]/[1-q^n-np_iq^{n-1}]$. If $p_i=1$, $N_j=0$ and any defined conditional mean is zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5g; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5h",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5h: Geometric second moment",
    "prompt": "A first-success time $N$ has geometric parameter $p>0$. Use first-trial conditioning to derive its second moment and variance.",
    "approach": "With $q=1-p$, the first trial gives $E[N^2]=p+qE[(1+N')^2]$, where $N'$ is a fresh copy.",
    "solution": "With $q=1-p$, the first trial gives $E[N^2]=p+qE[(1+N')^2]$, where $N'$ is a fresh copy. Since $E[N']=1/p$, this becomes $E[N^2]=1+2q/p+qE[N^2]$. Solve for $E[N^2]=(2-p)/p^2$. Subtract $1/p^2$ to get variance $q/p^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5h; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5i",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5i: Fair multiplayer elimination",
    "prompt": "Players start with positive fortunes $n_1,\\ldots,n_r$ totaling $n$. Each stage two active players make a fair independent one-unit bet. Continue until one owns everything. Find mean stages.",
    "approach": "For two players with fortune $j,n-j$, first-step conditioning gives $m_j=1+(m_{j-1}+m_{j+1})/2$, with $m_0=m_n=0$.",
    "solution": "For two players with fortune $j,n-j$, first-step conditioning gives $m_j=1+(m_{j-1}+m_{j+1})/2$, with $m_0=m_n=0$. Its solution is $j(n-j)$. Viewed only at their own bet times, player $i$ follows that same fair walk, so mean stages involving them is $n_i(n-n_i)$. Every stage is counted twice across players. Thus mean total is $[n^2-\\sum_i n_i^2]/2$, independent of the method of choosing active pairs.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5i; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5j",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5j: Uniform sums crossing one",
    "prompt": "Independent uniform $(0,1)$ numbers are added until the sum exceeds one. Find mean number added, and generalize the threshold to $0\\le x\\le1$.",
    "approach": "Let $m(x)$ be the mean time.",
    "solution": "Let $m(x)$ be the mean time. Conditioning on first uniform value $u$ gives $m(x)=1+\\int_0^x m(x-u)du=1+\\int_0^xm(v)dv$. Differentiation gives $m'(x)=m(x)$, with $m(0)=1$. Therefore $m(x)=e^x$ and the requested mean is $e$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5j; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5k",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5k: Choosing the best prize",
    "prompt": "Distinct prizes arrive in a uniformly random order. Reject the first $k$ and then accept the first subsequent record. Find its chance of selecting the best, and the large-$n$ best cutoff.",
    "approach": "For $1\\le k<n$, if the best appears at position $i>k$, success requires the best of the first $i-1$ to lie in the first $k$, chance $k/(i-1)$.",
    "solution": "For $1\\le k<n$, if the best appears at position $i>k$, success requires the best of the first $i-1$ to lie in the first $k$, chance $k/(i-1)$. Average over its uniform position: $P_k=(k/n)\\sum_{i=k+1}^n1/(i-1)$. For $k=0$, the first prize is accepted, giving $1/n$. The approximation $(k/n)\\log(n/k)$ is maximized near $k=n/e$, with success near $1/e$. For finite $n$, compare the exact integer-cutoff formula.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5k; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5l",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5l: Uniform random binomial parameter",
    "prompt": "$U$ is uniform $(0,1)$ and $X\\mid U=p$ is binomial $(n,p)$. Find the PMF, also giving a symmetry explanation.",
    "approach": "Average the binomial probabilities: $P(X=i)=\\binom ni\\int_0^1p^i(1-p)^{n-i}dp=1/(n+1)$.",
    "solution": "Average the binomial probabilities: $P(X=i)=\\binom ni\\int_0^1p^i(1-p)^{n-i}dp=1/(n+1)$. For intuition, take $n$ more independent uniforms and count how many are below $U$. Given $U=p$ the count is binomial; unconditionally $U$ has an equally likely rank among $n+1$ values, giving every count $0,\\ldots,n$ equally often.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5l; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5m",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5m: Uniform random sample size",
    "prompt": "An urn has $n$ red and $m$ blue balls. Choose sample size uniformly from $1,\\ldots,n$, then sample without replacement. Find chance all sampled balls are red.",
    "approach": "Conditioning gives $a_n=(1/n)\\sum_{i=1}^n\\binom ni/\\binom{n+m}i$.",
    "solution": "Conditioning gives $a_n=(1/n)\\sum_{i=1}^n\\binom ni/\\binom{n+m}i$. For an inductive simplification, separate size one from larger sizes. In a larger sample the first ball must be red, then the remaining size is uniform $1,\\ldots,n-1$. Thus $a_n=1/(n+m)+[(n-1)/(n+m)]a_{n-1}$. From $a_1=1/(m+1)$ induction gives $a_n=1/(m+1)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5m; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5n",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5n: Which independent value is smaller",
    "prompt": "Independent continuous $X,Y$ have CDFs and densities. Express $P(X<Y)$ using one integral.",
    "approach": "Given $Y=y$, independence leaves $P(X<y)=F_X(y)$.",
    "solution": "Given $Y=y$, independence leaves $P(X<y)=F_X(y)$. Average over $Y$: $P(X<Y)=\\int_{-\\infty}^\\infty F_X(y)f_Y(y)dy$. Continuity removes any distinction between strict and non-strict inequality at a fixed point.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5n; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5o",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5o: Convolution by conditioning",
    "prompt": "Independent continuous $X,Y$ have densities. Derive the CDF and density of their sum.",
    "approach": "Given $Y=y$, $X+Y\\le a$ means $X\\le a-y$.",
    "solution": "Given $Y=y$, $X+Y\\le a$ means $X\\le a-y$. Thus $F_{X+Y}(a)=\\int F_X(a-y)f_Y(y)dy$. The sum density is its convolution $f_{X+Y}(a)=\\int f_X(a-y)f_Y(y)dy$, defined almost everywhere; one can also derive this by the change of variables $(X,Y)\\mapsto(X+Y,Y)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5o; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5p",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5p: Passengers before a random train time",
    "prompt": "Passengers arrive as a Poisson process of rate $\\lambda$. An independent first-train time $T_0$ is uniform $(0,T)$. Find mean and variance of boarding passengers.",
    "approach": "Given $T_0=t$, the count has both mean and variance $\\lambda t$.",
    "solution": "Given $T_0=t$, the count has both mean and variance $\\lambda t$. Hence mean is $\\lambda T/2$. Total variance is $E[\\lambda T_0]+\\operatorname{Var}(\\lambda T_0)=\\lambda T/2+\\lambda^2T^2/12$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5p; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.5q",
    "course": "prob",
    "sec": "7.5",
    "marks": 5,
    "title": "Ross 7 example 5q: Variance of an independent random sum",
    "prompt": "Independent identically distributed values have mean $\\mu$, variance $v$, and are independent of nonnegative integer $N$. Find variance of $S=\\sum_{i=1}^NX_i$.",
    "approach": "Given $N$, mean is $N\\mu$ and variance $Nv$.",
    "solution": "Given $N$, mean is $N\\mu$ and variance $Nv$. Total variance gives $\\operatorname{Var}(S)=E[N]v+\\mu^2\\operatorname{Var}(N)$. Finite needed moments are assumed; an empty sum is zero.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.5.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 5q; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.6b",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 example 6b: Estimating a noisy normal signal",
    "prompt": "Sent signal $S$ is normal $(\\mu,\\sigma^2)$ and $R\\mid S=s$ is normal $(s,1)$. Find the posterior law and best squared-error estimate of $S$ after receiving $r$.",
    "approach": "Multiply prior density by likelihood: the exponent in $s$ is $-(s-\\mu)^2/(2\\sigma^2)-(r-s)^2/2$.",
    "solution": "Multiply prior density by likelihood: the exponent in $s$ is $-(s-\\mu)^2/(2\\sigma^2)-(r-s)^2/2$. Completing its square identifies a normal conditional law with mean $(\\mu+\\sigma^2r)/(1+\\sigma^2)$ and variance $\\sigma^2/(1+\\sigma^2)$. The mean is the optimal prediction, a weighted average of prior mean and received signal. A zero prior variance gives the known constant signal.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 6b; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.6c",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 example 6c: Optimal quantization",
    "prompt": "Replace continuous $X$ by a representative $y_i$ whenever it falls in bin $(a_i,a_{i+1}]$. Find the best representatives for squared error, prove mean preservation, and relate output variance to error.",
    "approach": "Within each nonempty bin the best constant is its conditional mean: $y_i=\\int_{a_i}^{a_{i+1}}xf_X(x)dx/[F_X(a_{i+1})-F_X(a_i)]$.",
    "solution": "Within each nonempty bin the best constant is its conditional mean: $y_i=\\int_{a_i}^{a_{i+1}}xf_X(x)dx/[F_X(a_{i+1})-F_X(a_i)]$. Empty bins can have any representative. If $I$ is the bin index, the optimum is $Y=E[X\\mid I]$. Tower averaging gives $E[Y]=E[X]$. Total variance gives $\\operatorname{Var}(X)=E[(X-Y)^2]+\\operatorname{Var}(Y)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 6c; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.6d",
    "course": "prob",
    "sec": "7.6",
    "marks": 5,
    "title": "Ross 7 example 6d: Best predictor for normal pairs",
    "prompt": "For a nondegenerate bivariate normal pair $X,Y$, find the best prediction of $Y$ after observing $X=x$ and its error variance.",
    "approach": "The conditional mean is $\\mu_Y+\\rho(\\sigma_Y/\\sigma_X)(x-\\mu_X)$.",
    "solution": "The conditional mean is $\\mu_Y+\\rho(\\sigma_Y/\\sigma_X)(x-\\mu_X)$. Conditional expectation minimizes squared error, so this linear formula is also the best unrestricted predictor. Conditional variance, and the overall prediction mean squared error, is $\\sigma_Y^2(1-\\rho^2)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 6d; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7b",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7b: Poisson MGF",
    "prompt": "Derive the MGF, mean and variance for Poisson mean $\\lambda$.",
    "approach": "$M(t)=e^{-\\lambda}\\sum_{k\\ge0}(\\lambda e^t)^k/k!=e^{\\lambda(e^t-1)}$.",
    "solution": "$M(t)=e^{-\\lambda}\\sum_{k\\ge0}(\\lambda e^t)^k/k!=e^{\\lambda(e^t-1)}$. Its first two derivatives at zero are $\\lambda$ and $\\lambda^2+\\lambda$. Thus mean and variance both equal $\\lambda$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7b; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7c",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7c: Exponential MGF",
    "prompt": "Derive the MGF, mean and variance for exponential rate $\\lambda>0$.",
    "approach": "$M(t)=\\lambda\\int_0^\\infty e^{-(\\lambda-t)x}dx=\\lambda/(\\lambda-t)$ for $t<\\lambda$; it is infinite otherwise.",
    "solution": "$M(t)=\\lambda\\int_0^\\infty e^{-(\\lambda-t)x}dx=\\lambda/(\\lambda-t)$ for $t<\\lambda$; it is infinite otherwise. At zero its first two derivatives are $1/\\lambda$ and $2/\\lambda^2$. Mean is $1/\\lambda$ and variance $1/\\lambda^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7c; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7d",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7d: Normal MGF",
    "prompt": "Derive the MGF and first two moments of a normal $(\\mu,\\sigma^2)$ variable.",
    "approach": "For standard normal $Z$, completing the square gives $tz-z^2/2=-(z-t)^2/2+t^2/2$, so $E[e^{tZ}]=e^{t^2/2}$.",
    "solution": "For standard normal $Z$, completing the square gives $tz-z^2/2=-(z-t)^2/2+t^2/2$, so $E[e^{tZ}]=e^{t^2/2}$. For $X=\\mu+\\sigma Z$, $M_X(t)=e^{\\mu t+\\sigma^2t^2/2}$. Its derivatives give mean $\\mu$, second moment $\\mu^2+\\sigma^2$, and variance $\\sigma^2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7d; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7e",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7e: Recognizing a Poisson MGF",
    "prompt": "If $M_X(t)=e^{3(e^t-1)}$, find $P(X=0)$.",
    "approach": "This is the Poisson-3 MGF, finite near zero.",
    "solution": "This is the Poisson-3 MGF, finite near zero. MGF uniqueness identifies that distribution, so $P(X=0)=e^{-3}$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7e; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7g",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7g: Sum of independent Poissons",
    "prompt": "Independent $X,Y$ are Poisson with means $\\lambda_1,\\lambda_2$. Find the sum's law using MGFs.",
    "approach": "The product MGF is $e^{\\lambda_1(e^t-1)}e^{\\lambda_2(e^t-1)}=e^{(\\lambda_1+\\lambda_2)(e^t-1)}$.",
    "solution": "The product MGF is $e^{\\lambda_1(e^t-1)}e^{\\lambda_2(e^t-1)}=e^{(\\lambda_1+\\lambda_2)(e^t-1)}$. It identifies Poisson mean $\\lambda_1+\\lambda_2$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7g; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7i",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7i: Chi-square MGF",
    "prompt": "For $Q=Z_1^2+\\cdots+Z_n^2$ with independent standard normal values, find its MGF.",
    "approach": "For one square, $E[e^{tZ^2}]=(1-2t)^{-1/2}$ for $t<1/2$, by comparing its integral with a normal density of variance $1/(1-2t)$.",
    "solution": "For one square, $E[e^{tZ^2}]=(1-2t)^{-1/2}$ for $t<1/2$, by comparing its integral with a normal density of variance $1/(1-2t)$. Independence raises this to the $n$th power: $M_Q(t)=(1-2t)^{-n/2}$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7i; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7j",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7j: MGF of a random sum",
    "prompt": "Independent identically distributed $X_i$ have MGF $M_X$ and are independent of nonnegative integer $N$. Find the MGF, mean and variance of their random sum.",
    "approach": "Given $N=n$, the sum's MGF is $M_X(t)^n$.",
    "solution": "Given $N=n$, the sum's MGF is $M_X(t)^n$. Thus $M_S(t)=E[M_X(t)^N]=G_N(M_X(t))$ where $G_N$ is the count PGF, whenever finite. Differentiating near zero gives mean $E[N]\\mu$ and second moment $E[N]E[X^2]+E[N(N-1)]\\mu^2$. Subtracting the squared mean gives variance $E[N]\\operatorname{Var}(X)+\\mu^2\\operatorname{Var}(N)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7j; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7k",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7k: MGF of a binomial mixture",
    "prompt": "A uniform $(0,1)$ variable $P$ determines $X\\mid P=p\\sim\\operatorname{Bin}(n,p)$. Use the MGF to identify the marginal law.",
    "approach": "Average conditional MGFs: $M_X(t)=\\int_0^1(1-p+pe^t)^n dp=[e^{(n+1)t}-1]/[(n+1)(e^t-1)]$ for $t\\ne0$.",
    "solution": "Average conditional MGFs: $M_X(t)=\\int_0^1(1-p+pe^t)^n dp=[e^{(n+1)t}-1]/[(n+1)(e^t-1)]$ for $t\\ne0$. The geometric-sum identity rewrites this as $(1+e^t+\\cdots+e^{nt})/(n+1)$, with value one at zero. It is the MGF of the discrete uniform law on $0,\\ldots,n$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7k; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7l",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7l: Normal sum and difference independence",
    "prompt": "Independent $X,Y$ have the same normal $(\\mu,\\sigma^2)$ law. Show their sum and difference are independent using a joint MGF.",
    "approach": "The joint MGF is $E[e^{t(X+Y)+s(X-Y)}]=M_X(t+s)M_Y(t-s)=e^{2\\mu t+\\sigma^2t^2}e^{\\sigma^2s^2}$.",
    "solution": "The joint MGF is $E[e^{t(X+Y)+s(X-Y)}]=M_X(t+s)M_Y(t-s)=e^{2\\mu t+\\sigma^2t^2}e^{\\sigma^2s^2}$. It factors into the two marginal MGFs and is finite near the origin, proving independence. The sum is normal $(2\\mu,2\\sigma^2)$ and difference normal $(0,2\\sigma^2)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7l; checked against the local chapter PDF."
  },
  {
    "id": "w.prob.7.ross.example.7m",
    "course": "prob",
    "sec": "7.7",
    "marks": 5,
    "title": "Ross 7 example 7m: Poisson thinning",
    "prompt": "A Poisson $(\\lambda)$ number of events are independently marked with chance $p$. Show marked and unmarked counts are independent and find their laws.",
    "approach": "Given total $N=n$, the joint MGF is $(pe^s+(1-p)e^t)^n$.",
    "solution": "Given total $N=n$, the joint MGF is $(pe^s+(1-p)e^t)^n$. Average using the Poisson PGF to get $e^{\\lambda(pe^s+(1-p)e^t-1)}=e^{\\lambda p(e^s-1)}e^{\\lambda(1-p)(e^t-1)}$. This identifies independent Poisson counts of means $\\lambda p$ and $\\lambda(1-p)$.",
    "trap": "Check the assumptions and the meaning of the count before substituting into a formula.",
    "tests": [
      "c.prob.7.7.1"
    ],
    "provenance": "Original-language adaptation of Ross, A First Course in Probability, 10e, Chapter 7, example 7m; checked against the local chapter PDF."
  }
]
);
