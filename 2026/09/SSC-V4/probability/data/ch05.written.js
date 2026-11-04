var QUESTIONS = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
QUESTIONS.push(...
[
  {
    "id": "w.prob.5.1.1",
    "sec": "5.1",
    "marks": 4,
    "title": "Adaptation of Ross Self-Test 5.2",
    "prompt": "A variable has density $f(x)=c x^2$ for $0<x<1$ and zero otherwise. Find $c$, $F(x)$, and $P(X>1/2)$.",
    "approach": "Normalize first. Then integrate piecewise for the CDF and use the survival probability.",
    "solution": "Normalization gives $1=c\\int_0^1x^2dx=c/3$, so $c=3$. Thus $F(x)=0$ for $x\\le0$, $F(x)=x^3$ for $0<x<1$, and $F(x)=1$ for $x\\ge1$. Therefore $P(X>1/2)=1-(1/2)^3=7/8$.",
    "trap": "The support restriction matters: extending $3x^2$ to all real $x$ would not define this density.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.1.2"
    ]
  },
  {
    "id": "w.prob.5.1.2",
    "sec": "5.1",
    "marks": 3,
    "title": "Original drill: equal CDF values",
    "prompt": "Let $X$ be continuous with CDF $F$. If $F(3)=0.2$ and $F(8)=0.75$, find $P(3<X\\le8)$ and $P(X=3)$.",
    "approach": "Use CDF differences; continuous variables put zero mass at a single point.",
    "solution": "$P(3<X\\le8)=F(8)-F(3)=0.75-0.2=0.55$. Since $X$ is continuous, $P(X=3)=0$.",
    "trap": "A CDF value is cumulative probability, not density height.",
    "tests": [
      "c.prob.5.1.1"
    ]
  },
  {
    "id": "w.prob.5.2.1",
    "sec": "5.2",
    "marks": 5,
    "title": "Adaptation of Ross Self-Test 5.3",
    "prompt": "For $f(x)=c x^4$ on $0<x<2$ and zero elsewhere, find $c$, $E[X]$, and $\\operatorname{Var}(X)$.",
    "approach": "Normalize, then calculate the first and second raw moments and subtract the squared mean.",
    "solution": "$1=c\\int_0^2x^4dx=32c/5$, so $c=5/32$. Then $E[X]=(5/32)\\int_0^2x^5dx=5/3$, and $E[X^2]=(5/32)\\int_0^2x^6dx=20/7$. Hence $\\operatorname{Var}(X)=20/7-25/9=5/63$.",
    "trap": "The variance is $E[X^2]-(E[X])^2$, not the second moment alone.",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.2.2"
    ]
  },
  {
    "id": "w.prob.5.2.2",
    "sec": "5.2",
    "marks": 4,
    "title": "Original drill: tail integral",
    "prompt": "A nonnegative lifetime has survival function $P(X>t)=e^{-2t}$. Find $E[X]$ using the tail-integral formula and identify its exponential rate.",
    "approach": "Integrate the survival curve over $t\\ge0$.",
    "solution": "$E[X]=\\int_0^\\infty e^{-2t}dt=1/2$. This is an exponential lifetime with rate $\\lambda=2$.",
    "trap": "The mean is the reciprocal of the rate, not the rate itself.",
    "tests": [
      "c.prob.5.2.3",
      "c.prob.5.5.1"
    ]
  },
  {
    "id": "w.prob.5.3.1",
    "sec": "5.3",
    "marks": 4,
    "title": "Original drill: uniform interval",
    "prompt": "For $X\\sim\\operatorname{Unif}(-2,6)$, find $P(1<X<5)$, $E[X]$, and $\\operatorname{Var}(X)$.",
    "approach": "Use interval length within the support, then the uniform moment formulas.",
    "solution": "The support width is $8$ and the requested interval width is $4$, so the probability is $1/2$. The mean is $(-2+6)/2=2$. The variance is $8^2/12=16/3$.",
    "trap": "Use width $b-a$, not $a+b$, in the variance formula.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.3.2"
    ]
  },
  {
    "id": "w.prob.5.3.2",
    "sec": "5.3",
    "marks": 5,
    "title": "Original drill: minimum of reflected uniform values",
    "prompt": "Let $U\\sim\\operatorname{Unif}(0,1)$. Find the distribution of $Y=\\min(U,1-U)$.",
    "approach": "For $0\\le y\\le1/2$, compute $P(Y>y)$ as the length of the interval where both $U>y$ and $1-U>y$.",
    "solution": "For $0\\le y\\le1/2$, $Y>y$ iff $y<U<1-y$, so $P(Y>y)=1-2y$. Therefore $F_Y(y)=2y$ on $[0,1/2]$, with $F_Y=0$ below 0 and $F_Y=1$ above $1/2$. Differentiating gives density $2$ on $(0,1/2)$: $Y\\sim\\operatorname{Unif}(0,1/2)$.",
    "trap": "The map is two-to-one over the interior; counting only one side loses half the probability.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.2"
    ]
  },
  {
    "id": "w.prob.5.4.1",
    "sec": "5.4",
    "marks": 5,
    "title": "Adaptation of Ross Self-Test 5.8",
    "prompt": "An IQ score is approximately normal with mean $100$ and standard deviation $15$. Express the probability of a score above $125$ using $\\Phi$, and give a numerical value to three decimals.",
    "approach": "Standardize the cutoff, then read the upper tail of the standard normal.",
    "solution": "$z=(125-100)/15=5/3$. Thus $P(X>125)=1-\\Phi(5/3)\\approx0.048$.",
    "trap": "The stated 15 is the standard deviation; the variance would be $225$.",
    "tests": [
      "c.prob.5.4.1"
    ]
  },
  {
    "id": "w.prob.5.4.2",
    "sec": "5.4",
    "marks": 4,
    "title": "Adaptation of Ross Self-Test 5.9",
    "prompt": "Commute time is normal with mean 40 minutes and standard deviation 7 minutes. Find the latest departure buffer that keeps the probability of being late at most 5%, using $z_{0.95}=1.645$.",
    "approach": "Choose the 95th percentile of travel time.",
    "solution": "The required buffer $t$ satisfies $P(X\\le t)=0.95$, so $t=40+1.645(7)=51.515$ minutes. Leave at least about 51.5 minutes before the appointment.",
    "trap": "For an upper 5% tail, use the 95th percentile, not the 5th.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.2"
    ]
  },
  {
    "id": "w.prob.5.5.1",
    "sec": "5.5",
    "marks": 4,
    "title": "Adaptation of Ross Self-Test 5.13",
    "prompt": "Service time is exponential with mean 5 minutes. A customer is already in service. Find the probability service lasts at least 4 more minutes.",
    "approach": "The exponential is memoryless; the elapsed time does not enter the residual survival probability.",
    "solution": "The rate is $\\lambda=1/5$ per minute. By memorylessness the desired probability is $P(X>4)=e^{-4/5}\\approx0.449$.",
    "trap": "Do not add the elapsed service time unless the question asks total service duration.",
    "tests": [
      "c.prob.5.5.1"
    ]
  },
  {
    "id": "w.prob.5.5.2",
    "sec": "5.5",
    "marks": 5,
    "title": "Adaptation of Ross Self-Test 5.14",
    "prompt": "A lifetime has CDF $F(x)=1-e^{-x^2}$ for $x>0$, and $F(x)=0$ otherwise. Find its density and hazard rate for $x>0$.",
    "approach": "Differentiate the CDF and divide the density by the survival function.",
    "solution": "$f(x)=F'(x)=2xe^{-x^2}$. The survival is $S(x)=e^{-x^2}$, hence $h(x)=f(x)/S(x)=2x$ for $x>0$.",
    "trap": "Hazard divides by survival, not by the CDF.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.5.2"
    ]
  },
  {
    "id": "w.prob.5.6.1",
    "sec": "5.6",
    "marks": 4,
    "title": "Adaptation of Ross Self-Test 5.16",
    "prompt": "If $X$ is standard Cauchy with density $1/[\\pi(1+x^2)]$, use the transformation formula to find the density of $Y=1/X$.",
    "approach": "For $y\\ne0$, the inverse is $x=1/y$ and its derivative has absolute value $1/y^2$.",
    "solution": "$f_Y(y)=f_X(1/y)/y^2=[1/(\\pi(1+y^{-2}))]/y^2=1/[\\pi(1+y^2)]$, $y\\ne0$. Thus $Y$ is also standard Cauchy (the value of a density at $0$ can be assigned by continuity).",
    "trap": "The derivative factor $1/y^2$ is essential; substitution alone is insufficient.",
    "tests": [
      "c.prob.5.6.2",
      "c.prob.5.7.1"
    ]
  },
  {
    "id": "w.prob.5.6.2",
    "sec": "5.6",
    "marks": 4,
    "title": "Original drill: Pareto moments",
    "prompt": "A Pareto variable has survival $P(X>x)=(2/x)^3$ for $x\\ge2$. Find its mean by the tail-integral formula.",
    "approach": "For $0\\le t<2$, survival is 1; for $t\\ge2$, use the stated Pareto tail.",
    "solution": "$E[X]=\\int_0^2 1\\,dt+\\int_2^\\infty(2/t)^3dt=2+8[ -1/(2t^2)]_2^\\infty=2+1=3$.",
    "trap": "The survival is 1 below the lower support endpoint; do not apply the power tail there.",
    "tests": [
      "c.prob.5.2.3",
      "c.prob.5.6.2"
    ]
  },
  {
    "id": "w.prob.5.7.1",
    "sec": "5.7",
    "marks": 4,
    "title": "Adaptation of Ross Self-Test 5.22",
    "prompt": "Let $U\\sim\\operatorname{Unif}(0,1)$ and let $a<b$. Find the distribution of $Y=a+(b-a)U$.",
    "approach": "Solve the event $Y\\le y$ and track the transformed support.",
    "solution": "The support is $(a,b)$. For $a<y<b$, $P(Y\\le y)=P(U\\le(y-a)/(b-a))=(y-a)/(b-a)$. Thus $Y\\sim\\operatorname{Unif}(a,b)$.",
    "trap": "If the scale coefficient were negative, the inequality would reverse; here $b-a>0$.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ]
  },
  {
    "id": "w.prob.5.7.2",
    "course": "prob",
    "sec": "5.7",
    "marks": 5,
    "title": "Original drill: square of a symmetric variable",
    "prompt": "Let $X$ be uniform on $(-1,1)$ and $Y=X^2$. Find $F_Y(y)$ and the density of $Y$.",
    "approach": "For $0<y<1$, the event $X^2\\le y$ is an interval centered at zero.",
    "solution": "For $0<y<1$, $P(Y\\le y)=P(-\\sqrt y\\le X\\le\\sqrt y)=(2\\sqrt y)/2=\\sqrt y$. Hence $F_Y(y)=0$ for $y\\le0$, $\\sqrt y$ on $(0,1)$, and 1 for $y\\ge1$. Therefore $f_Y(y)=1/(2\\sqrt y)$ for $0<y<1$.",
    "trap": "There are two inverse branches $x=\\pm\\sqrt y$; both contribute.",
    "tests": [
      "c.prob.5.7.1",
      "c.prob.5.7.2"
    ]
  },
  {
    "id": "w.prob.5.ross.example.1a",
    "course": "prob",
    "sec": "5.1",
    "marks": 4,
    "title": "Ross Example 1a: Normalizing quadratic density and interval probability",
    "prompt": "A continuous random variable X has probability density function f(x) = C(4x - 2x^2) for 0 < x < 2, and f(x) = 0 otherwise. (a) Determine the value of the constant C. (b) Find the probability P(X > 1).",
    "approach": "Integrate the density over (0, 2) to solve for C, then integrate over (1, 2) to find P(X > 1).",
    "solution": "(a) Normalization requires int_0^2 C(4x - 2x^2) dx = 1. Evaluating: C * [2x^2 - (2/3)x^3]_0^2 = C * (8 - 16/3) = (8/3)C = 1, so C = 3/8.\n(b) P(X > 1) = int_1^2 (3/8)(4x - 2x^2) dx = (3/8) * [2x^2 - (2/3)x^3]_1^2 = (3/8) * [(8 - 16/3) - (2 - 2/3)] = (3/8) * [8/3 - 4/3] = (3/8) * (4/3) = 1/2 = 0.5.",
    "trap": "Do not integrate past x = 2; the density is 0 outside (0, 2), so P(X > 1) integrates from 1 to 2.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Ross, 10e, §5.1, Example 1a, PDF p. 196."
  },
  {
    "id": "w.prob.5.ross.example.1b",
    "course": "prob",
    "sec": "5.1",
    "marks": 5,
    "title": "Ross Example 1b: Computer breakdown time and exponential density",
    "prompt": "The operating time in hours of a computer before its first breakdown is a continuous random variable X with density f(x) = lambda * exp(-x/100) for x >= 0, and 0 otherwise. (a) Determine the normalizing constant lambda. (b) Find the probability that the computer functions between 50 and 150 hours before breaking down. (c) Find the probability that it functions for fewer than 100 hours.",
    "approach": "Integrate over [0, infty) to find lambda = 1/100, then integrate over [50, 150] and [0, 100].",
    "solution": "(a) int_0^infty lambda * exp(-x/100) dx = 100*lambda = 1, which implies lambda = 1/100.\n(b) P(50 < X < 150) = int_{50}^{150} (1/100) exp(-x/100) dx = [-exp(-x/100)]_{50}^{150} = exp(-0.5) - exp(-1.5) approx 0.6065 - 0.2231 = 0.3834.\n(c) P(X < 100) = int_0^{100} (1/100) exp(-x/100) dx = [-exp(-x/100)]_0^{100} = 1 - exp(-1) approx 1 - 0.3679 = 0.6321 (approx 63.2%).",
    "trap": "The rate parameter is 1/100, which is the reciprocal of the mean 100 hours.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, §5.1, Example 1b, PDF pp. 196–197."
  },
  {
    "id": "w.prob.5.ross.example.1c",
    "course": "prob",
    "sec": "5.1",
    "marks": 5,
    "title": "Ross Example 1c: Radio tube lifetime and binomial failure count",
    "prompt": "The lifetime X in hours of a certain type of radio tube has density f(x) = 100/x^2 for x > 100, and 0 otherwise. (a) Find the probability that a tube must be replaced within the first 150 hours of operation. (b) In a radio set with 5 such tubes operating independently, what is the probability that exactly 2 tubes must be replaced within the first 150 hours?",
    "approach": "Integrate the density from 100 to 150 to get single-tube failure probability p, then use Bin(5, p).",
    "solution": "(a) An individual tube fails within 150 hours with probability p = P(X <= 150) = int_{100}^{150} (100/x^2) dx = [-100/x]_{100}^{150} = -100/150 - (-100/100) = 1 - 2/3 = 1/3.\n(b) Let K be the number of tubes replaced within 150 hours. By independence, K ~ Bin(5, 1/3). Thus P(K = 2) = binom(5, 2) * (1/3)^2 * (2/3)^3 = 10 * (1/9) * (8/27) = 80/243 approx 0.3292.",
    "trap": "The lower limit of integration is the minimum lifetime 100, not 0.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.1.2"
    ],
    "provenance": "Ross, 10e, §5.1, Example 1c, PDF p. 197."
  },
  {
    "id": "w.prob.5.ross.example.1d",
    "course": "prob",
    "sec": "5.1",
    "marks": 4,
    "title": "Ross Example 1d: Scale transformation of a continuous variable",
    "prompt": "Let X be a continuous random variable with distribution function F_X and density f_X. Find the density function of Y = 2X by: (a) deriving and differentiating the distribution function of Y; (b) using an intuitive local probability interval approximation.",
    "approach": "Relate F_Y(a) = P(2X <= a) to F_X(a/2) and differentiate by chain rule; check with interval of length epsilon.",
    "solution": "(a) For any real a: F_Y(a) = P(Y <= a) = P(2X <= a) = P(X <= a/2) = F_X(a/2). Differentiating with respect to a gives f_Y(a) = d/da [F_X(a/2)] = (1/2) * f_X(a/2).\n(b) For small epsilon > 0: epsilon * f_Y(a) approx P(a - epsilon/2 <= Y <= a + epsilon/2) = P(a - epsilon/2 <= 2X <= a + epsilon/2) = P(a/2 - epsilon/4 <= X <= a/2 + epsilon/4) approx (epsilon/2) * f_X(a/2). Dividing by epsilon yields f_Y(a) = (1/2) * f_X(a/2).",
    "trap": "Do not omit the Jacobian scaling factor 1/2 from differentiating the argument a/2.",
    "tests": [
      "c.prob.5.1.2",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, §5.1, Example 1d, PDF pp. 197–198."
  },
  {
    "id": "w.prob.5.ross.example.2a",
    "course": "prob",
    "sec": "5.2",
    "marks": 3,
    "title": "Ross Example 2a: Expectation of a linear ramp density",
    "prompt": "Find the expected value E[X] when the probability density function of X is f(x) = 2x for 0 <= x <= 1, and 0 otherwise.",
    "approach": "Use the continuous expectation definition E[X] = int x f(x) dx.",
    "solution": "E[X] = int_0^1 x * (2x) dx = int_0^1 2x^2 dx = [2x^3/3]_0^1 = 2/3.",
    "trap": "Remember the extra factor of x in the integrand: integrate x * f(x), not f(x).",
    "tests": [
      "c.prob.5.2.1"
    ],
    "provenance": "Ross, 10e, §5.2, Example 2a, PDF p. 199."
  },
  {
    "id": "w.prob.5.ross.example.2b",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Example 2b: Expectation of an exponential function of a uniform variable",
    "prompt": "Let X have density f(x) = 1 for 0 <= x <= 1, and 0 otherwise. Find E[exp(X)] by: (a) deriving the density of Y = exp(X); (b) applying Proposition 2.1 (LOTUS).",
    "approach": "Find the CDF and PDF of Y = exp(X) on [1, e] and integrate y * f_Y(y); then integrate exp(x) * f_X(x) directly.",
    "solution": "(a) Let Y = exp(X). For 1 <= y <= e: F_Y(y) = P(exp(X) <= y) = P(X <= ln y) = ln y. Differentiating gives f_Y(y) = 1/y for 1 <= y <= e. Then E[exp(X)] = E[Y] = int_1^e y * (1/y) dy = int_1^e 1 dy = e - 1.\n(b) By LOTUS: E[exp(X)] = int_0^1 exp(x) * 1 dx = [exp(x)]_0^1 = exp(1) - exp(0) = e - 1. Both methods give e - 1 approx 1.7183.",
    "trap": "The transformed variable Y = exp(X) has support [1, e], not [0, 1].",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, §5.2, Example 2b, PDF pp. 199–200."
  },
  {
    "id": "w.prob.5.ross.example.2c",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Example 2c: Expected length of stick piece containing a specified point",
    "prompt": "A stick of length 1 is split at a point U chosen uniformly on (0, 1). Let p in [0, 1] be a fixed point on the stick. (a) Express the length L_p(U) of the piece containing p as a function of U. (b) Find E[L_p(U)]. (c) For what value of p is this expected length maximized?",
    "approach": "Write L_p(u) piecewise for u < p and u > p, then integrate against the uniform density 1.",
    "solution": "(a) If U < p, the cut is to the left of p, so the piece containing p extends from U to 1 and has length 1 - U. If U > p, the piece containing p extends from 0 to U and has length U. Thus L_p(U) = 1 - U if U < p, and U if U > p.\n(b) By LOTUS: E[L_p(U)] = int_0^p (1 - u) du + int_p^1 u du = [u - u^2/2]_0^p + [u^2/2]_p^1 = (p - p^2/2) + (1/2 - p^2/2) = 1/2 + p(1 - p).\n(c) The quadratic p(1 - p) is symmetric on [0, 1] and maximized at p = 1/2. Thus the expected length is maximized when p is the midpoint, giving expected length 1/2 + 1/4 = 3/4 = 0.75.",
    "trap": "The substick containing p changes identity depending on whether U is left or right of p; split the integral at p.",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, §5.2, Example 2c, PDF pp. 200–201."
  },
  {
    "id": "w.prob.5.ross.example.2d",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Example 2d: Optimal departure time minimizing expected cost",
    "prompt": "Travel time X to an appointment has continuous density f and CDF F. Departing t minutes before the appointment incurs earliness cost c(t - X) if X <= t, and lateness cost k(X - t) if X > t, with c, k > 0. (a) Express expected cost E[C_t(X)]. (b) Find the optimal departure time t* that minimizes expected cost.",
    "approach": "Write expected cost as the sum of early and late cost integrals, differentiate with respect to t, and set derivative to 0.",
    "solution": "(a) Cost is C_t(X) = c(t - X) for X <= t and k(X - t) for X > t. Expected cost is E[C_t(X)] = c * int_0^t (t - x) f(x) dx + k * int_t^infty (x - t) f(x) dx = c*t*F(t) - c * int_0^t x f(x) dx + k * int_t^infty x f(x) dx - k*t*(1 - F(t)).\n(b) Differentiating with respect to t using Leibniz rule: d/dt E[C_t(X)] = c*F(t) + c*t*f(t) - c*t*f(t) - k*(1 - F(t)) - k*t*f(t) + k*t*f(t) = c*F(t) - k*(1 - F(t)) = (c + k)*F(t) - k. Setting the derivative to 0 gives F(t*) = k / (k + c). Thus optimal departure time t* is the k/(k+c) quantile of travel time.",
    "trap": "The boundary terms from Leibniz rule cancel out; the derivative simplifies directly to (c + k)F(t) - k.",
    "tests": [
      "c.prob.5.2.1"
    ],
    "provenance": "Ross, 10e, §5.2, Example 2d, PDF pp. 201–202."
  },
  {
    "id": "w.prob.5.ross.example.2e",
    "course": "prob",
    "sec": "5.2",
    "marks": 4,
    "title": "Ross Example 2e: Variance of a linear ramp distribution",
    "prompt": "For the continuous random variable X with density f(x) = 2x for 0 <= x <= 1 and 0 otherwise (from Example 2a), compute: (a) E[X^2]; (b) Var(X).",
    "approach": "Evaluate second moment via LOTUS and use Var(X) = E[X^2] - (E[X])^2.",
    "solution": "(a) E[X^2] = int_0^1 x^2 * (2x) dx = int_0^1 2x^3 dx = [2x^4/4]_0^1 = 1/2.\n(b) From Example 2a, E[X] = 2/3. Thus Var(X) = E[X^2] - (E[X])^2 = 1/2 - (2/3)^2 = 1/2 - 4/9 = 1/18.",
    "trap": "Variance requires subtracting (E[X])^2 from E[X^2]; do not forget to square the mean.",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.2.2"
    ],
    "provenance": "Ross, 10e, §5.2, Example 2e, PDF p. 202."
  },
  {
    "id": "w.prob.5.ross.example.3a",
    "course": "prob",
    "sec": "5.3",
    "marks": 4,
    "title": "Ross Example 3a: Mean and variance of general uniform distribution",
    "prompt": "Let X be uniformly distributed over the interval (alpha, beta) with alpha < beta. Derive: (a) E[X]; (b) Var(X).",
    "approach": "Integrate x and x^2 against constant density 1/(beta - alpha), then simplify algebraically.",
    "solution": "(a) Density is f(x) = 1/(beta - alpha) on (alpha, beta). E[X] = int_alpha^beta x / (beta - alpha) dx = (beta^2 - alpha^2) / [2(beta - alpha)] = (alpha + beta) / 2.\n(b) E[X^2] = int_alpha^beta x^2 / (beta - alpha) dx = (beta^3 - alpha^3) / [3(beta - alpha)] = (alpha^2 + alpha*beta + beta^2) / 3. Then Var(X) = E[X^2] - (E[X])^2 = (alpha^2 + alpha*beta + beta^2)/3 - (alpha + beta)^2 / 4 = [4(alpha^2 + alpha*beta + beta^2) - 3(alpha^2 + 2*alpha*beta + beta^2)] / 12 = (alpha^2 - 2*alpha*beta + beta^2) / 12 = (beta - alpha)^2 / 12.",
    "trap": "The variance depends only on the length of the interval beta - alpha, not on its shift or absolute location.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.3.2"
    ],
    "provenance": "Ross, 10e, §5.3, Example 3a, PDF p. 204."
  },
  {
    "id": "w.prob.5.ross.example.3b",
    "course": "prob",
    "sec": "5.3",
    "marks": 4,
    "title": "Ross Example 3b: Subinterval probabilities for uniform distribution",
    "prompt": "If X is uniformly distributed over (0, 10), calculate the probability that: (a) X < 3; (b) X > 6; (c) 3 < X < 8.",
    "approach": "The density is 1/10 on (0, 10). The probability of any subinterval is its length divided by 10.",
    "solution": "(a) P(X < 3) = int_0^3 (1/10) dx = 3/10 = 0.3.\n(b) P(X > 6) = int_6^{10} (1/10) dx = (10 - 6)/10 = 4/10 = 0.4.\n(c) P(3 < X < 8) = int_3^8 (1/10) dx = (8 - 3)/10 = 5/10 = 0.5 = 1/2.",
    "trap": "For continuous uniform distributions, endpoints carry zero probability, so strict and non-strict inequalities have identical values.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, §5.3, Example 3b, PDF p. 204."
  },
  {
    "id": "w.prob.5.ross.example.3c",
    "course": "prob",
    "sec": "5.3",
    "marks": 5,
    "title": "Ross Example 3c: Bus waiting time under periodic departures",
    "prompt": "Buses arrive at a stop at 15-minute intervals starting at 7:00 a.m. (7:00, 7:15, 7:30, ...). A passenger arrives at a time uniformly distributed between 7:00 and 7:30 a.m. Find the probability that the passenger waits: (a) less than 5 minutes for a bus; (b) more than 10 minutes for a bus.",
    "approach": "Model arrival time T ~ Unif(0, 30) in minutes past 7:00. Identify intervals where waiting time meets the conditions.",
    "solution": "Buses depart at t = 15 and t = 30.\n(a) The passenger waits less than 5 minutes if arriving between 7:10 and 7:15 (10 < T < 15) or between 7:25 and 7:30 (25 < T < 30). Total favorable length is (15 - 10) + (30 - 25) = 5 + 5 = 10 minutes. Since T ~ Unif(0, 30), probability is 10/30 = 1/3.\n(b) The passenger waits more than 10 minutes if arriving between 7:00 and 7:05 (0 < T < 5) or between 7:15 and 7:20 (15 < T < 20). Total favorable length is (5 - 0) + (20 - 15) = 10 minutes. Probability is 10/30 = 1/3.",
    "trap": "Account for both bus departures at t = 15 and t = 30 within the 30-minute passenger arrival window.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, §5.3, Example 3c, PDF pp. 204–205."
  },
  {
    "id": "w.prob.5.ross.example.3d",
    "course": "prob",
    "sec": "5.3",
    "marks": 5,
    "title": "Ross Example 3d: Bertrand's random chord paradox",
    "prompt": "Consider a random chord of a circle of radius r. An equilateral triangle inscribed in the circle has side length sqrt(3)*r. Calculate the probability that the chord length exceeds the triangle side length under: (a) distance from center D ~ Unif(0, r); (b) angle with the tangent theta ~ Unif(0, 180 degrees).",
    "approach": "Geometric condition for chord length > sqrt(3)r: distance from center < r/2, or angle with tangent between 60 and 120 degrees.",
    "solution": "In a circle of radius r, an inscribed equilateral triangle has side length sqrt(3)*r and distance from center r/2. A chord has length > sqrt(3)*r if and only if its midpoint distance D to the center satisfies D < r/2.\n(a) Under the model where distance D ~ Unif(0, r): P(D < r/2) = (r/2) / r = 1/2 = 0.5.\n(b) Under the model where one endpoint is fixed and the chord angle theta with the tangent line is Unif(0, 180 degrees): the chord length exceeds sqrt(3)*r if and only if 60 < theta < 120 degrees. Thus P(60 < theta < 120) = (120 - 60)/180 = 60/180 = 1/3.\nBertrand's paradox shows that \"random chord\" is ambiguous until a precise physical or geometric sampling mechanism is defined.",
    "trap": "Different definitions of randomness correspond to different continuous probability measures on chord space.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, §5.3, Example 3d, PDF pp. 205–206."
  },
  {
    "id": "w.prob.5.ross.example.4a",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Example 4a: Normal mean and variance derivation",
    "prompt": "Let Z ~ N(0, 1) be standard normal. (a) Compute E[Z] and Var(Z). (b) If X = mu + sigma*Z ~ N(mu, sigma^2), show that E[X] = mu and Var(X) = sigma^2.",
    "approach": "Use symmetry for E[Z] = 0, integration by parts for E[Z^2] = 1, then apply affine expectation properties.",
    "solution": "(a) Standard normal density phi(z) = (1/sqrt(2*pi)) * exp(-z^2/2) is symmetric and even. Thus E[Z] = (1/sqrt(2*pi)) * int_{-infty}^infty z exp(-z^2/2) dz = 0 because the integrand is odd. For variance, integrate by parts with u = z and dv = z exp(-z^2/2) dz: Var(Z) = E[Z^2] = (1/sqrt(2*pi)) * [-z exp(-z^2/2)]_{-infty}^infty + (1/sqrt(2*pi)) * int_{-infty}^infty exp(-z^2/2) dz = 0 + 1 = 1.\n(b) For X = mu + sigma*Z: E[X] = E[mu + sigma*Z] = mu + sigma*E[Z] = mu + 0 = mu. Var(X) = Var(mu + sigma*Z) = sigma^2 * Var(Z) = sigma^2 * 1 = sigma^2.",
    "trap": "Split z^2 * exp(-z^2/2) as z * [z * exp(-z^2/2)] to integrate by parts successfully.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.2"
    ],
    "provenance": "Ross, 10e, §5.4, Example 4a, PDF pp. 208–209."
  },
  {
    "id": "w.prob.5.ross.example.4b",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Example 4b: Normal probability calculations with standardization",
    "prompt": "Let X ~ N(mu = 3, sigma^2 = 9). Find in terms of Phi and evaluate numerically: (a) P(2 < X < 5); (b) P(X > 0); (c) P(|X - 3| > 6).",
    "approach": "Standardize via Z = (X - 3)/3 and use standard normal CDF table values.",
    "solution": "Here mu = 3 and sigma = sqrt(9) = 3.\n(a) P(2 < X < 5) = P((2-3)/3 < Z < (5-3)/3) = P(-1/3 < Z < 2/3) = Phi(2/3) - Phi(-1/3) = Phi(0.67) - [1 - Phi(0.33)] approx 0.7486 - (1 - 0.6293) = 0.3779.\n(b) P(X > 0) = P(Z > (0-3)/3) = P(Z > -1) = 1 - Phi(-1) = Phi(1) approx 0.8413.\n(c) P(|X - 3| > 6) = P(|3Z| > 6) = P(|Z| > 2) = 2 * [1 - Phi(2)] approx 2 * (1 - 0.9772) = 2 * 0.0228 = 0.0456.",
    "trap": "Standard deviation is sigma = 3, not the variance 9.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, §5.4, Example 4b, PDF pp. 210–211."
  },
  {
    "id": "w.prob.5.ross.example.4c",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Example 4c: Grading on the curve percentages",
    "prompt": "An instructor grades on the curve by modeling test scores as X ~ N(mu, sigma^2). Letter grades are assigned by: A for score > mu + sigma; B for mu < score < mu + sigma; C for mu - sigma < score < mu; D for mu - 2*sigma < score < mu - sigma; and F for score < mu - 2*sigma. Determine the percentage of students receiving each letter grade.",
    "approach": "Standardize each cutoff range to standard normal Z ~ N(0, 1) and evaluate with Phi.",
    "solution": "Using Z = (X - mu)/sigma ~ N(0, 1):\n- Grade A: P(Z > 1) = 1 - Phi(1) approx 1 - 0.8413 = 0.1587 (approx 16%).\n- Grade B: P(0 < Z < 1) = Phi(1) - Phi(0) = 0.8413 - 0.5000 = 0.3413 (approx 34%).\n- Grade C: P(-1 < Z < 0) = Phi(0) - Phi(-1) = 0.5000 - 0.1587 = 0.3413 (approx 34%).\n- Grade D: P(-2 < Z < -1) = Phi(-1) - Phi(-2) = 0.1587 - 0.0228 = 0.1359 (approx 14%).\n- Grade F: P(Z < -2) = Phi(-2) approx 0.0228 (approx 2%).",
    "trap": "By symmetry around the mean, the proportion of B grades equals the proportion of C grades (34.13%).",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, §5.4, Example 4c, PDF p. 211."
  },
  {
    "id": "w.prob.5.ross.example.4d",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Example 4d: Human gestation length in a paternity suit",
    "prompt": "Gestation length X in days is modeled as N(mu = 270, sigma^2 = 100). In a paternity suit, the defendant was out of the country during a window beginning 290 days and ending 240 days before the child's birth. If the defendant is the father, what is the probability that gestation was either > 290 days or < 240 days?",
    "approach": "Standardize the two tail thresholds with mu = 270 and sigma = 10, then add probabilities.",
    "solution": "With mu = 270 and sigma = sqrt(100) = 10:\nP(X > 290) = P(Z > (290 - 270)/10) = P(Z > 2) = 1 - Phi(2) approx 1 - 0.9772 = 0.0228.\nP(X < 240) = P(Z < (240 - 270)/10) = P(Z < -3) = 1 - Phi(3) approx 1 - 0.9987 = 0.0013.\nSince these tail events are mutually exclusive, P(X > 290 or X < 240) = P(X > 290) + P(X < 240) approx 0.0228 + 0.0013 = 0.0241 (approx 2.41%).",
    "trap": "The two tail events are disjoint, so their union probability is the direct sum of individual tail probabilities.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, §5.4, Example 4d, PDF p. 211."
  },
  {
    "id": "w.prob.5.ross.example.4e",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Example 4e: Binary signal transmission with Gaussian noise",
    "prompt": "In a digital communication wire, value +2 is sent for message 1 and -2 is sent for message 0. The received signal is R = x + N, where N ~ N(0, 1) is channel noise. The receiver decodes 1 if R >= 0.5, and 0 if R < 0.5. (a) Find the probability of decoding error given message 1 was sent. (b) Find the probability of decoding error given message 0 was sent.",
    "approach": "Compute P(2 + N < 0.5) and P(-2 + N >= 0.5) using standard normal CDF.",
    "solution": "(a) If message 1 was sent (x = +2), an error occurs if R < 0.5 <=> 2 + N < 0.5 <=> N < -1.5. Thus P(error | 1 sent) = P(N < -1.5) = 1 - Phi(1.5) approx 1 - 0.9332 = 0.0668.\n(b) If message 0 was sent (x = -2), an error occurs if R >= 0.5 <=> -2 + N >= 0.5 <=> N >= 2.5. Thus P(error | 0 sent) = P(N >= 2.5) = 1 - Phi(2.5) approx 1 - 0.9938 = 0.0062.",
    "trap": "The threshold 0.5 is closer to +2 than to -2, making an error when sending 1 more likely than when sending 0.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, §5.4, Example 4e, PDF pp. 211–212."
  },
  {
    "id": "w.prob.5.ross.example.4f",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Example 4f: Value at Risk (VAR) of a normal investment",
    "prompt": "The gain X of an investment is normal with mean mu and variance sigma^2. The 1% Value at Risk (VAR) v is defined by P(-X > v) = 0.01, where -X represents the investment loss. (a) Derive an explicit expression for v in terms of mu and sigma. (b) What objective should an investor maximize to achieve the smallest VAR?",
    "approach": "Standardize the loss variable -X ~ N(-mu, sigma^2) and use normal quantile z_{0.99} = 2.33.",
    "solution": "(a) Loss is L = -X ~ N(-mu, sigma^2). The 1% condition is P(L > v) = 0.01 <=> P((L - (-mu))/sigma > (v + mu)/sigma) = 0.01 <=> 1 - Phi((v + mu)/sigma) = 0.01 <=> Phi((v + mu)/sigma) = 0.99. From normal tables, Phi(2.33) = 0.99, so (v + mu)/sigma = 2.33 <=> v = VAR = 2.33*sigma - mu.\n(b) Since VAR = 2.33*sigma - mu = -(mu - 2.33*sigma), minimizing VAR is equivalent to maximizing mu - 2.33*sigma.",
    "trap": "Notice the signs: higher mean gain mu reduces VAR, while higher volatility sigma increases VAR.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.2"
    ],
    "provenance": "Ross, 10e, §5.4, Example 4f, PDF p. 212."
  },
  {
    "id": "w.prob.5.ross.example.4g",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Example 4g: Continuity-corrected normal approximation for coin flips",
    "prompt": "A fair coin is flipped 40 times. Let X be the number of heads. Use the normal approximation with continuity correction to approximate P(X = 20) and compare it with the exact binomial value.",
    "approach": "Approximate Bin(40, 0.5) by N(20, 10) on the interval [19.5, 20.5].",
    "solution": "Let X ~ Bin(40, 0.5). Mean mu = 40 * 0.5 = 20. Variance sigma^2 = 40 * 0.5 * 0.5 = 10, so sigma = sqrt(10) approx 3.1623.\nWith continuity correction: P(X = 20) approx P(19.5 < Y < 20.5) = P((19.5 - 20)/sqrt(10) < Z < (20.5 - 20)/sqrt(10)) = P(-0.1581 < Z < 0.1581) = 2*Phi(0.16) - 1 approx 2*(0.5636) - 1 = 0.1272.\nExact binomial probability: P(X = 20) = binom(40, 20) * (1/2)^40 approx 0.1254. The approximation is remarkably accurate.",
    "trap": "Without continuity correction, the probability of any single point under a continuous normal distribution would be zero.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, §5.4.1, Example 4g, PDF pp. 213–214."
  },
  {
    "id": "w.prob.5.ross.example.4h",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Example 4h: College admissions attendance probability",
    "prompt": "A college desires an entering class of 150 students. Knowing from past experience that only 30% of accepted applicants attend, it admits 450 students. Compute the approximate probability that more than 150 students attend.",
    "approach": "Model attendance X ~ Bin(450, 0.30). Use normal approximation with continuity correction P(X >= 151) = P(Y >= 150.5).",
    "solution": "Let X ~ Bin(n = 450, p = 0.3). Mean mu = 450 * 0.3 = 135. Variance sigma^2 = 450 * 0.3 * 0.7 = 94.5, so sigma = sqrt(94.5) approx 9.721.\nWith continuity correction: P(X > 150) = P(X >= 151) approx P(Y >= 150.5) = P(Z >= (150.5 - 135)/9.721) = P(Z >= 15.5/9.721) approx P(Z >= 1.594) = 1 - Phi(1.59) approx 1 - 0.9441 = 0.0559 (approx 5.6%).",
    "trap": "The discrete condition X > 150 is equivalent to X >= 151 for integers, which continuity-corrects to 150.5.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, §5.4.1, Example 4h, PDF pp. 213–214."
  },
  {
    "id": "w.prob.5.ross.example.4i",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Example 4i: Clinical diet endorsement false-positive probability",
    "prompt": "In a study of 100 people placed on a diet, a nutritionist will endorse the diet if at least 65 people experience reduced cholesterol. What is the approximate probability of endorsement if the diet actually has no effect (each person independently has a 50% chance of a lower count purely by chance)?",
    "approach": "Under null hypothesis X ~ Bin(100, 0.5). Apply continuity-corrected normal approximation P(X >= 64.5).",
    "solution": "Under the null hypothesis, X ~ Bin(100, 0.5). Mean mu = 100 * 0.5 = 50. Standard deviation sigma = sqrt(100 * 0.5 * 0.5) = sqrt(25) = 5.\nWith continuity correction: P(X >= 65) approx P(Y >= 64.5) = P(Z >= (64.5 - 50)/5) = P(Z >= 14.5/5) = P(Z >= 2.90) = 1 - Phi(2.90) approx 1 - 0.9981 = 0.0019 (approx 0.19%).",
    "trap": "Continuity correction for X >= 65 shifts the boundary to 64.5, not 65.5.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, §5.4.1, Example 4i, PDF p. 214."
  },
  {
    "id": "w.prob.5.ross.example.4j",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Example 4j: Polling majority probability and required sample size",
    "prompt": "In a city where 52% of residents favor a referendum (p = 0.52), let S_n be the number favoring it in a random sample of size n. Approximate the probability that a majority favors the referendum (S_n > 0.5n) for: (a) n = 11; (b) n = 101; (c) n = 1001. (d) How large must n be so this probability exceeds 0.95?",
    "approach": "Standardize S_n: Z = (0.5n - 0.52n)/sqrt(n * 0.52 * 0.48) = -0.04*sqrt(n). Evaluate Phi(0.04*sqrt(n)) and solve for 0.95.",
    "solution": "Mean is 0.52n and standard deviation is sqrt(n * 0.52 * 0.48) approx 0.4996 * sqrt(n) approx 0.5 * sqrt(n).\nP(S_n > 0.5n) = P(Z > (0.5n - 0.52n)/(0.4996*sqrt(n))) approx P(Z > -0.04003*sqrt(n)) = Phi(0.04*sqrt(n)).\n(a) For n = 11: 0.04 * sqrt(11) approx 0.1328 => Phi(0.13) approx 0.5528.\n(b) For n = 101: 0.04 * sqrt(101) approx 0.4020 => Phi(0.40) approx 0.6562.\n(c) For n = 1001: 0.04 * sqrt(1001) approx 1.2665 => Phi(1.27) approx 0.8973.\n(d) For probability >= 0.95: Phi(0.04*sqrt(n)) >= 0.95 => 0.04*sqrt(n) >= 1.645 => sqrt(n) >= 1.645/0.04 = 41.125 => n >= 1691.3. Thus a sample of at least 1692 is required.",
    "trap": "Remember the sample size enters through sqrt(n) in the denominator of standard deviation, strengthening the majority signal as n grows.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, §5.4.1, Example 4j, PDF pp. 214–215."
  },
  {
    "id": "w.prob.5.ross.example.5a",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Example 5a: Moments and recurrence relation for exponential variable",
    "prompt": "Let X ~ Exp(lambda) with density f(x) = lambda * exp(-lambda * x) for x >= 0. (a) Derive the moment recurrence relation E[X^n] = (n/lambda) * E[X^{n-1}]. (b) Determine E[X] and Var(X).",
    "approach": "Integrate by parts with u = x^n and dv = lambda * exp(-lambda * x) dx, then apply for n = 1 and n = 2.",
    "solution": "(a) E[X^n] = int_0^infty x^n lambda exp(-lambda * x) dx. Using integration by parts with u = x^n and dv = lambda exp(-lambda * x) dx: E[X^n] = [-x^n exp(-lambda * x)]_0^infty + int_0^infty n x^{n-1} exp(-lambda * x) dx = 0 + (n/lambda) int_0^infty lambda exp(-lambda * x) x^{n-1} dx = (n/lambda) E[X^{n-1}].\n(b) Since E[X^0] = 1: for n = 1, E[X] = 1/lambda. For n = 2, E[X^2] = (2/lambda) * E[X] = 2/lambda^2. Hence Var(X) = E[X^2] - (E[X])^2 = 2/lambda^2 - 1/lambda^2 = 1/lambda^2.",
    "trap": "The boundary term vanishes at infty because exponential decay exp(-lambda*x) dominates x^n for any n.",
    "tests": [
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, §5.5, Example 5a, PDF p. 216."
  },
  {
    "id": "w.prob.5.ross.example.5b",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Example 5b: Phone booth wait time with exponential duration",
    "prompt": "The length of a telephone call in minutes is an exponential random variable with parameter lambda = 1/10. If someone arrives ahead of you at the booth, find the probability that you wait: (a) more than 10 minutes; (b) between 10 and 20 minutes.",
    "approach": "Use exponential survival P(X > t) = exp(-lambda * t) with lambda = 0.1.",
    "solution": "(a) P(X > 10) = 1 - F(10) = exp(-10 * 0.1) = exp(-1) approx 0.3679.\n(b) P(10 < X < 20) = F(20) - F(10) = exp(-1) - exp(-20 * 0.1) = exp(-1) - exp(-2) approx 0.3679 - 0.1353 = 0.2326.",
    "trap": "P(10 < X < 20) is P(X > 10) - P(X > 20) = e^{-1} - e^{-2}; do not subtract in reverse.",
    "tests": [
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, §5.5, Example 5b, PDF pp. 216–217."
  },
  {
    "id": "w.prob.5.ross.example.5c",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Example 5c: Post office queue and exponential memorylessness",
    "prompt": "Two postal clerks are currently serving Ms. Jones and Mr. Brown. Mr. Smith enters and will be served as soon as either clerk becomes free. Customer service times are independent Exp(lambda) random variables. What is the probability that Mr. Smith is the last of the three customers to leave the post office?",
    "approach": "Apply the memoryless property of the exponential distribution at the moment Mr. Smith enters service.",
    "solution": "Let T be the moment one of the first two customers finishes. At this moment, Mr. Smith enters service with the freed clerk, while the other customer remains in service. By the memoryless property, the remaining service time of that customer is still Exp(lambda), exactly the same as Mr. Smith's new service time. By symmetry between two independent, identically distributed continuous service times, each is equally likely to finish first. Thus the probability that the other customer finishes before Mr. Smith is 1/2, meaning the probability that Mr. Smith is the last to leave is 1/2.",
    "trap": "Past service time does not shorten remaining service time for exponential variables; memorylessness resets the distribution.",
    "tests": [
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, §5.5, Example 5c, PDF p. 217."
  },
  {
    "id": "w.prob.5.ross.example.5d",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Example 5d: Battery life over a long trip and non-exponential dependence",
    "prompt": "Car battery lifetime is exponentially distributed with mean 10,000 miles (lambda = 0.1 per thousand miles). (a) For a driver taking a 5000-mile trip, what is the probability the battery survives the trip? (b) What changes if the lifetime distribution is not exponential?",
    "approach": "Use memorylessness for (a); show dependence on prior usage t for (b).",
    "solution": "(a) Let T be battery lifetime in thousands of miles. By the memoryless property, conditional on surviving to the start of the trip, the remaining life is still Exp(lambda = 0.1). Thus P(remaining life > 5) = exp(-5 * 0.1) = exp(-0.5) approx 0.6065.\n(b) If the lifetime distribution F is not exponential, the probability is P(T > t + 5 | T > t) = [1 - F(t + 5)] / [1 - F(t)], which depends explicitly on the battery's prior mileage t. Without knowing t, the probability cannot be determined.",
    "trap": "Only exponential distributions possess the memoryless property; other distributions require knowing the item's current age.",
    "tests": [
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, §5.5, Example 5d, PDF pp. 218–219."
  },
  {
    "id": "w.prob.5.ross.example.5e",
    "course": "prob",
    "sec": "5.5",
    "marks": 5,
    "title": "Ross Example 5e: Binary transmission with Laplace channel noise",
    "prompt": "In the binary transmission system of Example 4e (+2 sent for 1, -2 for 0, decision threshold 0.5), suppose the channel noise N is Laplacian with density f(x) = (1/2)*exp(-|x|). (a) Find the error probability given 1 is sent. (b) Find the error probability given 0 is sent. (c) Compare with the Gaussian noise case.",
    "approach": "Integrate the Laplace density: F(x) = (1/2)*exp(x) for x < 0 and 1 - (1/2)*exp(-x) for x > 0.",
    "solution": "(a) When message 1 is sent (x = +2), error occurs if 2 + N < 0.5 <=> N < -1.5. Since -1.5 < 0: P(N < -1.5) = (1/2) * exp(-1.5) approx 0.5 * 0.2231 = 0.1116.\n(b) When message 0 is sent (x = -2), error occurs if -2 + N >= 0.5 <=> N >= 2.5. Since 2.5 > 0: P(N >= 2.5) = (1/2) * exp(-2.5) approx 0.5 * 0.0821 = 0.0410.\n(c) In Example 4e with standard normal noise, the error probabilities were 0.0668 and 0.0062. The Laplacian noise yields significantly higher error rates because its exponential tails are much heavier than Gaussian tails.",
    "trap": "Remember the Laplace CDF is piecewise: use (1/2)*exp(x) on the negative half-line.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.6.2"
    ],
    "provenance": "Ross, 10e, §5.5, Example 5e, PDF pp. 219–220."
  },
  {
    "id": "w.prob.5.ross.example.5f",
    "course": "prob",
    "sec": "5.5",
    "marks": 5,
    "title": "Ross Example 5f: Proportional hazard rates and survival squaring",
    "prompt": "Suppose the hazard rate of a smoker of age t is twice that of a nonsmoker: lambda_s(t) = 2*lambda_n(t). (a) Relate the survival probability from age A to B for a smoker to that of a nonsmoker. (b) If lambda_n(t) = 1/30 for 50 <= t <= 60, find the probability that a 50-year-old nonsmoker and a 50-year-old smoker reach age 60.",
    "approach": "Conditional survival is exp(-int_A^B lambda(t) dt). Doubling the hazard squares the survival probability.",
    "solution": "(a) Conditional survival probability from age A to B is exp(-int_A^B lambda(t) dt). For a smoker: exp(-int_A^B lambda_s(t) dt) = exp(-2 * int_A^B lambda_n(t) dt) = [exp(-int_A^B lambda_n(t) dt)]^2. Thus, the smoker's survival probability is the SQUARE of the nonsmoker's survival probability (not half).\n(b) For constant hazard 1/30 over [50, 60], int_{50}^{60} lambda_n(t) dt = 10/30 = 1/3. Nonsmoker survival is exp(-1/3) approx 0.7165. Smoker survival is exp(-2/3) approx 0.5134.",
    "trap": "Doubling the failure rate squares the survival probability; it does not cut survival in half.",
    "tests": [
      "c.prob.5.5.2"
    ],
    "provenance": "Ross, 10e, §5.5.1, Example 5f, PDF pp. 220–221."
  },
  {
    "id": "w.prob.5.ross.example.6a",
    "course": "prob",
    "sec": "5.6",
    "marks": 4,
    "title": "Ross Example 6a: Mean and variance of a gamma distribution",
    "prompt": "Let X ~ Gamma(alpha, lambda) with density f(x) = lambda * exp(-lambda*x) * (lambda*x)^{alpha-1} / Gamma(alpha) for x > 0. Derive: (a) E[X]; (b) Var(X).",
    "approach": "Use the functional equation Gamma(alpha + 1) = alpha * Gamma(alpha) to evaluate the moment integrals.",
    "solution": "(a) E[X] = int_0^infty x * [lambda * exp(-lambda*x) * (lambda*x)^{alpha-1} / Gamma(alpha)] dx = [1 / (lambda * Gamma(alpha))] * int_0^infty exp(-u) * u^alpha du = Gamma(alpha + 1) / [lambda * Gamma(alpha)] = alpha / lambda.\n(b) E[X^2] = [1 / (lambda^2 * Gamma(alpha))] * int_0^infty exp(-u) * u^{alpha+1} du = Gamma(alpha + 2) / [lambda^2 * Gamma(alpha)] = (alpha + 1)*alpha / lambda^2. Then Var(X) = E[X^2] - (E[X])^2 = (alpha^2 + alpha)/lambda^2 - alpha^2/lambda^2 = alpha / lambda^2.",
    "trap": "Notice the scaling: the mean is alpha/lambda and the variance is alpha/lambda^2.",
    "tests": [
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, §5.6.1, Example 6a, PDF pp. 222–223."
  },
  {
    "id": "w.prob.5.ross.example.6b",
    "course": "prob",
    "sec": "5.6",
    "marks": 4,
    "title": "Ross Example 6b: Spinning flashlight and Cauchy distribution",
    "prompt": "A spinning narrow-beam flashlight is centered 1 unit from the y-axis. When it stops, its beam makes an angle theta uniformly distributed over (-pi/2, pi/2), intersecting the y-axis at X = tan(theta). (a) Find the CDF of X. (b) Find the density function of X and identify the distribution.",
    "approach": "Express F_X(x) = P(tan(theta) <= x) = P(theta <= arctan x) and differentiate.",
    "solution": "(a) Since theta ~ Unif(-pi/2, pi/2), P(theta <= a) = (a - (-pi/2))/pi = 1/2 + a/pi for -pi/2 < a < pi/2. For any real x: F_X(x) = P(X <= x) = P(tan(theta) <= x) = P(theta <= arctan x) = 1/2 + (1/pi)*arctan(x).\n(b) Differentiating with respect to x: f_X(x) = d/dx [1/2 + (1/pi)*arctan(x)] = 1 / [pi * (1 + x^2)] for -infty < x < infty. This is the standard Cauchy distribution.",
    "trap": "The derivative d/dx[arctan x] = 1/(1 + x^2) directly yields the Cauchy density.",
    "tests": [
      "c.prob.5.6.2",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, §5.6.3, Example 6b, PDF pp. 223–224."
  },
  {
    "id": "w.prob.5.ross.example.7a",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Example 7a: Monomial transformation of uniform variable",
    "prompt": "Let X ~ Unif(0, 1) and define Y = X^n for positive integer n. Find: (a) the CDF of Y; (b) the density function of Y.",
    "approach": "Find P(X^n <= y) = P(X <= y^{1/n}) on [0, 1] and differentiate.",
    "solution": "(a) For 0 <= y <= 1: F_Y(y) = P(Y <= y) = P(X^n <= y) = P(X <= y^{1/n}) = y^{1/n}. For y < 0, F_Y(y) = 0; for y > 1, F_Y(y) = 1.\n(b) Differentiating on (0, 1): f_Y(y) = d/dy [y^{1/n}] = (1/n) * y^{1/n - 1} for 0 < y < 1, and 0 otherwise. (This is a Beta(1/n, 1) distribution).",
    "trap": "The support of Y is [0, 1]; for y outside [0, 1], the density is 0.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, §5.7, Example 7a, PDF p. 228."
  },
  {
    "id": "w.prob.5.ross.example.7b",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Example 7b: Square of a continuous random variable",
    "prompt": "Let X have probability density f_X. Derive the formula for the probability density function of Y = X^2.",
    "approach": "Use CDF method: for y > 0, {X^2 <= y} = {-sqrt(y) <= X <= sqrt(y)}, then differentiate.",
    "solution": "For y <= 0, F_Y(y) = 0. For y > 0: F_Y(y) = P(X^2 <= y) = P(-sqrt(y) <= X <= sqrt(y)) = F_X(sqrt(y)) - F_X(-sqrt(y)). Differentiating with respect to y: f_Y(y) = d/dy [F_X(sqrt(y)) - F_X(-sqrt(y))] = f_X(sqrt(y)) * (1/(2*sqrt(y))) - f_X(-sqrt(y)) * (-1/(2*sqrt(y))) = (1 / (2*sqrt(y))) * [f_X(sqrt(y)) + f_X(-sqrt(y))] for y > 0.",
    "trap": "Remember both square root branches: {X^2 <= y} requires -sqrt(y) <= X <= sqrt(y).",
    "tests": [
      "c.prob.5.7.1",
      "c.prob.5.7.2"
    ],
    "provenance": "Ross, 10e, §5.7, Example 7b, PDF p. 228."
  },
  {
    "id": "w.prob.5.ross.example.7c",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Example 7c: Absolute value of a continuous random variable",
    "prompt": "Let X have probability density f_X. Derive the density function of Y = |X|.",
    "approach": "Find F_Y(y) = P(|X| <= y) = P(-y <= X <= y) for y >= 0 and differentiate.",
    "solution": "For y < 0, F_Y(y) = 0. For y >= 0: F_Y(y) = P(|X| <= y) = P(-y <= X <= y) = F_X(y) - F_X(-y). Differentiating with respect to y: f_Y(y) = d/dy [F_X(y) - F_X(-y)] = f_X(y) - f_X(-y) * (-1) = f_X(y) + f_X(-y) for y >= 0.",
    "trap": "The minus sign from subtracting F_X(-y) combines with the chain rule derivative of -y to produce a positive sum.",
    "tests": [
      "c.prob.5.7.1",
      "c.prob.5.7.2"
    ],
    "provenance": "Ross, 10e, §5.7, Example 7c, PDF p. 228."
  },
  {
    "id": "w.prob.5.ross.example.7d",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Example 7d: Power transformation of a nonnegative variable",
    "prompt": "Let X be a continuous nonnegative random variable with density f, and let Y = X^n for n > 0. (a) Derive the density function f_Y(y) using the monotonic transformation theorem. (b) Verify that when n = 2, this agrees with Example 7b.",
    "approach": "On x >= 0, g(x) = x^n is strictly increasing with inverse g^{-1}(y) = y^{1/n}. Apply Theorem 7.1.",
    "solution": "(a) For y > 0, the inverse is g^{-1}(y) = y^{1/n}, with derivative d/dy[g^{-1}(y)] = (1/n) * y^{1/n - 1}. By Theorem 7.1: f_Y(y) = f(y^{1/n}) * |(1/n) * y^{1/n - 1}| = (1/n) * y^{1/n - 1} * f(y^{1/n}) for y > 0.\n(b) Setting n = 2 gives f_Y(y) = (1/(2*sqrt(y))) * f(sqrt(y)). Since X is nonnegative, f(-sqrt(y)) = 0, so this formula matches the result of Example 7b: f_Y(y) = (1/(2*sqrt(y))) * [f(sqrt(y)) + 0] = (1/(2*sqrt(y))) * f(sqrt(y)).",
    "trap": "The transformation g(x) = x^n is strictly monotonic because X is restricted to nonnegative values.",
    "tests": [
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, §5.7, Example 7d, PDF pp. 228–229."
  },
  {
    "id": "w.prob.5.ross.example.7e",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Example 7e: Density of the lognormal distribution",
    "prompt": "Let X ~ N(mu, sigma^2). The random variable Y = exp(X) is said to have a lognormal distribution with parameters mu and sigma^2. Use the monotonic transformation theorem (Theorem 7.1) to derive the probability density function f_Y(y) of Y.",
    "approach": "The function g(x) = exp(x) is strictly increasing from (-infty, infty) onto (0, infty) with inverse g^{-1}(y) = ln y. Differentiate and substitute into the normal density.",
    "solution": "The transformation is y = g(x) = exp(x) for x in (-infty, infty), which maps onto y > 0. The inverse transformation is x = g^{-1}(y) = ln(y). The derivative of the inverse is d/dy [g^{-1}(y)] = d/dy [ln y] = 1/y for y > 0. Since X ~ N(mu, sigma^2), its density is f_X(x) = (1 / (sqrt(2*pi) * sigma)) * exp(-(x - mu)^2 / (2*sigma^2)). By Theorem 7.1, for y > 0: f_Y(y) = f_X(g^{-1}(y)) * |d/dy g^{-1}(y)| = (1 / (sqrt(2*pi) * sigma * y)) * exp(-(ln(y) - mu)^2 / (2*sigma^2)), and f_Y(y) = 0 for y <= 0.",
    "trap": "The factor 1/y in the denominator comes from the Jacobian |dx/dy|; remember the support is strictly positive (y > 0).",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, §5.7, Example 7e, PDF pp. 229–230."
  },
  {
    "id": "w.prob.5.ross.prob.1",
    "course": "prob",
    "sec": "5.1",
    "marks": 4,
    "title": "Normalizing a symmetric polynomial density",
    "prompt": "Let X be a continuous random variable with density f(x) = c(1 - x^2) for -1 < x < 1, and 0 elsewhere. Find the constant c, the cumulative distribution function F(x), and P(X > 0.5).",
    "approach": "Integrate f(x) from -1 to 1 to find c. Integrate from -1 to x for the CDF.",
    "solution": "Normalization: int_{-1}^1 c(1 - x^2) dx = c * [x - x^3/3]_{-1}^1 = c * [(1 - 1/3) - (-1 + 1/3)] = c * [2/3 - (-2/3)] = 4c/3 = 1, so c = 3/4. For -1 < x < 1: F(x) = int_{-1}^x (3/4)(1 - t^2) dt = (3/4) * [t - t^3/3]_{-1}^x = (3/4) * (x - x^3/3 + 2/3) = (3/4)x - (1/4)x^3 + 1/2. For x <= -1, F(x) = 0; for x >= 1, F(x) = 1. Then P(X > 0.5) = 1 - F(0.5) = 1 - [(3/4)(1/2) - (1/4)(1/8) + 1/2] = 1 - [3/8 - 1/32 + 1/2] = 1 - [27/32] = 5/32 = 0.15625.",
    "trap": "The support is [-1, 1], so the lower integration limit is -1, not 0.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.1.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 1, PDF p. 233."
  },
  {
    "id": "w.prob.5.ross.problem.2",
    "course": "prob",
    "sec": "5.1",
    "marks": 4,
    "title": "Ross Problem 2: Two-unit system lifetime and survival probability",
    "prompt": "A system consisting of one original unit plus a spare functions for a random time X (measured in months) with probability density function f(x) = C * x * exp(-x/2) for x > 0, and f(x) = 0 for x <= 0. (a) Determine the normalizing constant C. (b) Find the probability that the system functions for at least 5 months.",
    "approach": "Integrate x*exp(-x/2) over (0, infty) to find C (using Gamma(2) or integration by parts), then integrate from 5 to infty for P(X >= 5).",
    "solution": "(a) Normalization requires int_0^infty C * x * exp(-x/2) dx = 1. Using substitution u = x/2 (dx = 2 du): C * int_0^infty (2u) * exp(-u) * 2 du = 4C * int_0^infty u * exp(-u) du = 4C * Gamma(2) = 4C * 1! = 4C = 1, so C = 1/4.\n(b) P(X >= 5) = int_5^infty (1/4) * x * exp(-x/2) dx. Integrate by parts with u = x/4, dv = exp(-x/2) dx (v = -2*exp(-x/2)): P(X >= 5) = [- (x/2) * exp(-x/2)]_5^infty + int_5^infty (1/2) * exp(-x/2) dx = (5/2) * exp(-5/2) + [-exp(-x/2)]_5^infty = (5/2) * exp(-5/2) + exp(-5/2) = (7/2) * exp(-5/2) approx 3.5 * 0.082085 = 0.2873.",
    "trap": "Do not forget the constant factor C = 1/4 when integrating for the probability, and remember to integrate by parts correctly.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 2, PDF p. 234."
  },
  {
    "id": "w.prob.5.ross.problem.3",
    "course": "prob",
    "sec": "5.1",
    "marks": 5,
    "title": "Ross Problem 3: Validating candidate probability density functions",
    "prompt": "Consider the functions: (a) f_1(x) = C(2x - x^3) for 0 < x < 5/2, and 0 otherwise; (b) f_2(x) = C(2x - x^2) for 0 < x < 5/2, and 0 otherwise. For each function, determine whether it could be a valid probability density function for some constant C. If so, determine C; if not, explain why.",
    "approach": "A valid density function must be nonnegative everywhere on its support and integrate to 1.",
    "solution": "(a) For f_1(x) = C(2x - x^3) on (0, 5/2): 2x - x^3 = x(2 - x^2). When 0 < x < sqrt(2), 2 - x^2 > 0; when sqrt(2) < x < 5/2, 2 - x^2 < 0. Thus the factor 2x - x^3 changes sign on (0, 5/2). If C > 0, f_1(x) < 0 for x in (sqrt(2), 5/2); if C < 0, f_1(x) < 0 for x in (0, sqrt(2)). Hence no constant C can make f_1(x) >= 0 for all x in (0, 5/2). Therefore f_1 cannot be a probability density function.\n(b) For f_2(x) = C(2x - x^2) on (0, 5/2): 2x - x^2 = x(2 - x). When 0 < x < 2, x(2 - x) > 0; when 2 < x < 5/2, x(2 - x) < 0. Again, the expression changes sign on (0, 5/2). No non-zero choice of C allows f_2(x) >= 0 everywhere on (0, 5/2). Therefore f_2 also cannot be a probability density function.",
    "trap": "Integrating to 1 is necessary but not sufficient: a density function MUST be non-negative everywhere.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 3, PDF p. 234."
  },
  {
    "id": "w.prob.5.ross.problem.4",
    "course": "prob",
    "sec": "5.1",
    "marks": 5,
    "title": "Ross Problem 4: Pareto-type device lifetime and independent batch survival",
    "prompt": "The lifetime X (in hours) of an electronic device has density f(x) = 10/x^2 for x > 10, and f(x) = 0 for x <= 10. (a) Find P(X > 20). (b) What is the cumulative distribution function F(x)? (c) What is the probability that of 6 such devices, at least 3 will function for at least 15 hours? State any assumptions.",
    "approach": "Integrate 10/x^2 to find the CDF and survival probabilities, then model the number of surviving devices out of 6 as Bin(6, p) under independence.",
    "solution": "(a) P(X > 20) = int_{20}^infty (10/x^2) dx = [-10/x]_{20}^infty = 10/20 = 1/2 = 0.5.\n(b) For x <= 10, F(x) = 0. For x > 10: F(x) = int_{10}^x (10/t^2) dt = [-10/t]_{10}^x = 1 - 10/x.\n(c) Assuming the 6 devices operate independently: the probability an individual device functions for at least 15 hours is p = P(X >= 15) = 1 - F(15) = 10/15 = 2/3. Let K be the number of devices surviving at least 15 hours; then K ~ Bin(6, 2/3). P(K >= 3) = sum_{k=3}^6 binom(6, k) * (2/3)^k * (1/3)^{6-k} = binom(6, 3)(2/3)^3(1/3)^3 + binom(6, 4)(2/3)^4(1/3)^2 + binom(6, 5)(2/3)^5(1/3)^1 + binom(6, 6)(2/3)^6 = [20*(8) + 15*(16) + 6*(32) + 1*(64)] / 729 = [160 + 240 + 192 + 64] / 729 = 656/729 approx 0.8999.",
    "trap": "The lower bound of the support is 10, so F(x) = 0 for x <= 10 and F(15) = 1 - 10/15 = 1/3.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.1.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 4, PDF p. 234."
  },
  {
    "id": "w.prob.5.ross.problem.5",
    "course": "prob",
    "sec": "5.1",
    "marks": 4,
    "title": "Ross Problem 5: Filling station gasoline capacity and stockout probability",
    "prompt": "A filling station is supplied with gasoline once a week. Its weekly volume of sales X (in thousands of gallons) has probability density function f(x) = 5(1 - x)^4 for 0 < x < 1, and 0 otherwise. What must the capacity c of the tank be (in thousands of gallons) so that the probability of the supply being exhausted in a given week is 0.01?",
    "approach": "Exhaustion occurs when demand exceeds capacity: set P(X > c) = 0.01 and solve for c in (0, 1).",
    "solution": "The supply is exhausted if weekly demand X exceeds capacity c (with 0 < c < 1): P(X > c) = int_c^1 5(1 - x)^4 dx = [-(1 - x)^5]_c^1 = (1 - c)^5. We set P(X > c) = 0.01: (1 - c)^5 = 0.01 <=> 1 - c = (0.01)^{1/5} = (10^{-2})^{0.2} = 10^{-0.4} approx 0.398107. Thus c = 1 - 0.398107 approx 0.601893 thousand gallons, or approximately 602 gallons.",
    "trap": "The question gives sales in thousands of gallons; 0.602 thousand gallons is approximately 602 gallons.",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.1.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 5, PDF p. 234."
  },
  {
    "id": "w.prob.5.ross.problem.6",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Problem 6: Expected value computation across three densities",
    "prompt": "Compute E[X] if X has density function: (a) f(x) = (1/4) x exp(-x/2) for x > 0, and 0 otherwise; (b) f(x) = c(1 - x^2) for -1 < x < 1 (where c = 3/4), and 0 otherwise; (c) f(x) = 5/x^2 for x > 5, and 0 otherwise.",
    "approach": "Apply definition E[X] = int x f(x) dx to each density, checking integrability in each case.",
    "solution": "(a) E[X] = int_0^infty x * [(1/4) x exp(-x/2)] dx = (1/4) int_0^infty x^2 exp(-x/2) dx. Let u = x/2 (x = 2u, dx = 2 du): E[X] = (1/4) int_0^infty (4u^2) exp(-u) (2 du) = 2 int_0^infty u^2 exp(-u) du = 2 * Gamma(3) = 2 * 2! = 4. (Alternatively, this is Gamma(alpha=2, lambda=1/2), with mean alpha/lambda = 2 / (1/2) = 4).\n(b) By Problem 1, c = 3/4. E[X] = int_{-1}^1 x * (3/4)(1 - x^2) dx = (3/4) int_{-1}^1 (x - x^3) dx = 0, since the integrand is an odd function integrated over a symmetric interval [-1, 1].\n(c) E[X] = int_5^infty x * (5/x^2) dx = int_5^infty (5/x) dx = 5 * [ln x]_5^infty = infty. Thus E[X] does not exist (is infinite).",
    "trap": "In (c), the integral diverges logarithmically; a density can be properly normalized (int 5/x^2 dx = 1) yet have an undefined/infinite mean.",
    "tests": [
      "c.prob.5.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 6, PDF p. 234."
  },
  {
    "id": "w.prob.5.ross.problem.7",
    "course": "prob",
    "sec": "5.2",
    "marks": 4,
    "title": "Ross Problem 7: Determining polynomial density coefficients from mean",
    "prompt": "The density function of X is given by f(x) = a + b*x^2 for 0 <= x <= 1, and 0 otherwise. If E[X] = 3/5, find the constants a and b.",
    "approach": "Set up two linear equations using normalization int_0^1 f(x) dx = 1 and the expectation int_0^1 x f(x) dx = 3/5.",
    "solution": "Normalization requires: int_0^1 (a + b*x^2) dx = [a*x + b*x^3/3]_0^1 = a + b/3 = 1 => 3a + b = 3. Expectation requires: E[X] = int_0^1 x(a + b*x^2) dx = int_0^1 (a*x + b*x^3) dx = [a*x^2/2 + b*x^4/4]_0^1 = a/2 + b/4 = 3/5 => 10a + 5b = 12. From 3a + b = 3, we have b = 3 - 3a. Substituting into the second equation: 10a + 5(3 - 3a) = 12 => 10a + 15 - 15a = 12 => -5a = -3 => a = 3/5. Then b = 3 - 3(3/5) = 3 - 9/5 = 6/5. Notice f(x) = 3/5 + (6/5)x^2 >= 0 on [0, 1], so this is a valid density.",
    "trap": "Check that the resulting parameters yield f(x) >= 0 on the entire interval [0, 1].",
    "tests": [
      "c.prob.5.1.1",
      "c.prob.5.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 7, PDF p. 234."
  },
  {
    "id": "w.prob.5.ross.problem.8",
    "course": "prob",
    "sec": "5.2",
    "marks": 4,
    "title": "Ross Problem 8: Expected lifetime of an electronic tube",
    "prompt": "The lifetime in hours of an electronic tube is a random variable X having probability density function f(x) = x * exp(-x) for x >= 0, and 0 otherwise. Compute the expected lifetime of such a tube.",
    "approach": "Integrate x * f(x) = x^2 * exp(-x) over [0, infty) using Gamma(3) = 2!.",
    "solution": "By definition: E[X] = int_0^infty x * f(x) dx = int_0^infty x^2 * exp(-x) dx. This is Euler gamma integral Gamma(3) = int_0^infty x^{3-1} exp(-x) dx = 2! = 2 hours. (Alternatively, integrating by parts twice: with u = x^2 and dv = exp(-x) dx, int x^2 exp(-x) dx = [-x^2 exp(-x)]_0^infty + int_0^infty 2x exp(-x) dx = 0 + 2*Gamma(2) = 2*1 = 2).",
    "trap": "The integrand for E[X] has x^2 * exp(-x), not x * exp(-x).",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 8, PDF p. 234."
  },
  {
    "id": "w.prob.5.ross.problem.9",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Problem 9: Continuous newsvendor model and critical fractile",
    "prompt": "Consider the inventory problem where seasonal demand X is a continuous random variable with density f and CDF F. The net profit per unit sold is b > 0 and the net loss per unit unsold is ell > 0. If s units are stocked, show that the expected profit is maximized at the order level s* satisfying F(s*) = b / (b + ell).",
    "approach": "Write expected profit as a function of order quantity s, differentiate using Leibniz rule, and set the derivative to 0.",
    "solution": "If s units are stocked and demand is X, profit is: P_s(X) = b*X - ell*(s - X) if X <= s, and b*s if X > s. Expected profit is: E[P(s)] = int_0^s [b*x - ell*(s - x)] f(x) dx + int_s^infty b*s f(x) dx = (b + ell) int_0^s x f(x) dx - ell*s*F(s) + b*s*(1 - F(s)). Differentiating with respect to s using the fundamental theorem of calculus: d/ds E[P(s)] = (b + ell)*s*f(s) - ell*F(s) - ell*s*f(s) + b*(1 - F(s)) - b*s*f(s) = b*(1 - F(s)) - ell*F(s) = b - (b + ell)*F(s). Setting the derivative to 0 gives: b - (b + ell)*F(s*) = 0 <=> F(s*) = b / (b + ell). The second derivative is -(b + ell)*f(s) < 0, confirming a unique maximum.",
    "trap": "The boundary terms from differentiating the integrals cancel out; only the integral coefficients remain.",
    "tests": [
      "c.prob.5.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 9, PDF pp. 234–235."
  },
  {
    "id": "w.prob.5.ross.problem.10",
    "course": "prob",
    "sec": "5.3",
    "marks": 5,
    "title": "Ross Problem 10: Staggered train schedules and passenger destination",
    "prompt": "Trains headed for destination A arrive at a station at 15-minute intervals starting at 7:00 a.m. (7:00, 7:15, 7:30, 7:45, ...). Trains headed for destination B arrive at 15-minute intervals starting at 7:05 a.m. (7:05, 7:20, 7:35, 7:50, ...). A passenger boards the first train that arrives. (a) If the passenger arrives at a time uniformly distributed between 7:00 and 8:00 a.m., what proportion of time does he go to destination A? (b) What if arrival is uniformly distributed between 7:10 and 8:10 a.m.?",
    "approach": "Analyze the 15-minute repeating cycle: determine the arrival intervals that result in boarding train A versus train B.",
    "solution": "In any 15-minute cycle [0, 15] (e.g. 7:00 to 7:15): train B arrives at minute 5, and train A arrives at minute 15.\n- If a passenger arrives in (0, 5], the first train is train B (interval length 5).\n- If a passenger arrives in (5, 15], the first train is train A (interval length 10).\n(a) Between 7:00 and 8:00 a.m. (60 minutes total, 4 full cycles): the passenger catches train A if arriving during (5, 15], (20, 30], (35, 45], or (50, 60]. Total time leading to train A is 4 * 10 = 40 minutes out of 60. Proportion of time going to destination A is 40/60 = 2/3.\n(b) Between 7:10 and 8:10 a.m. (also 60 minutes): in [7:10, 7:15] (length 5), goes to A; in [7:15, 7:20] (5), goes to B; in [7:20, 7:30] (10), goes to A; in [7:30, 7:35] (5), goes to B; in [7:35, 7:45] (10), goes to A; in [7:45, 7:50] (5), goes to B; in [7:50, 8:00] (10), goes to A; in [8:00, 8:05] (5), goes to B; in [8:05, 8:10] (5), goes to A. Total time for A is 5 + 10 + 10 + 10 + 5 = 40 minutes out of 60. The proportion is still 40/60 = 2/3.",
    "trap": "Even though trains to A and B have the same 15-minute frequency, the unequal 5 vs 10 minute gaps make destination A twice as likely as destination B.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 10, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.prob.11",
    "course": "prob",
    "sec": "5.3",
    "marks": 6,
    "title": "Ross Prob 11: A random cut and a length ratio",
    "prompt": "Cut a line segment of length L at a uniform random point. Find the chance the shorter piece divided by the longer is less than 1/4.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Write the cut as X uniform on (0,L). On the left half, the ratio is $X/(L-X)$; it is below 1/4 exactly when X<L/5. By symmetry the right-end event is X>4L/5. Their combined length is 2L/5, so the probability is 2/5.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 11."
  },
  {
    "id": "w.prob.5.ross.problem.12",
    "course": "prob",
    "sec": "5.3",
    "marks": 5,
    "title": "Ross Problem 12: Optimal service station locations on highway",
    "prompt": "A bus travels between cities A and B, 100 miles apart. If a breakdown occurs, the distance from city A is X ~ Unif(0, 100). There are currently service stations at miles 0 (city A), 50, and 100 (city B). It is proposed to relocate the stations to miles 25, 50, and 75. (a) Compute the expected distance to the nearest station under the current arrangement (0, 50, 100). (b) Compute the expected distance to the nearest station under the proposed arrangement (25, 50, 75). (c) Is the proposed arrangement more efficient? Explain.",
    "approach": "Calculate expected distance E[min_i |X - s_i|] by partitioning [0, 100] into intervals where each station is closest.",
    "solution": "(a) Current arrangement (stations at 0, 50, 100): By symmetry across the midpoint 50, breakdown distance X ~ Unif(0, 100) has density 1/100.\n- For 0 < x < 25, the nearest station is 0, distance is x. Expected value: int_0^{25} x (1/100) dx = (25^2/2)/100 = 625/200 = 3.125.\n- For 25 < x < 50, nearest station is 50, distance is 50 - x. Expected value: int_{25}^{50} (50 - x)(1/100) dx = 3.125.\nBy symmetry on [50, 100], the other half adds 2 * 3.125 = 6.25. Total expected distance E[D_1] = 4 * 3.125 = 12.5 miles.\n(b) Proposed arrangement (stations at 25, 50, 75):\n- For 0 < x < 37.5, nearest station is 25: distance is |x - 25|.\n  int_0^{25} (25 - x)(1/100) dx = 3.125.\n  int_{25}^{37.5} (x - 25)(1/100) dx = (12.5^2/2)/100 = 156.25/200 = 0.78125.\n- For 37.5 < x < 50, nearest station is 50: int_{37.5}^{50} (50 - x)(1/100) dx = 0.78125.\nTotal for [0, 50] is 3.125 + 0.78125 + 0.78125 = 4.6875. By symmetry across 50, total on [0, 100] is 2 * 4.6875 = 9.375 miles.\n(c) Yes, agree. The proposed arrangement reduces the expected distance from 12.5 miles to 9.375 miles (a 25% reduction in expected travel distance to the nearest station).",
    "trap": "Under the proposed arrangement, the service zones of the three stations are [0, 37.5], [37.5, 62.5], and [62.5, 100]; the boundary points between stations are the midpoints 37.5 and 62.5.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 12, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.problem.13",
    "course": "prob",
    "sec": "5.3",
    "marks": 4,
    "title": "Ross Problem 13: Bus arrival wait times and conditional uniform probability",
    "prompt": "You arrive at a bus stop at 10:00 a.m., knowing that the bus will arrive at a time uniformly distributed between 10:00 and 10:30 a.m. (a) What is the probability that you will have to wait longer than 10 minutes? (b) If at 10:15 the bus has not yet arrived, what is the probability that you will have to wait at least an additional 10 minutes?",
    "approach": "Let T ~ Unif(0, 30) be arrival time in minutes past 10:00. Use interval lengths for unconditional and conditional probabilities.",
    "solution": "Let T ~ Unif(0, 30) denote the bus arrival time in minutes past 10:00 a.m.\n(a) Waiting longer than 10 minutes means T > 10. Since T is uniform on (0, 30): P(T > 10) = (30 - 10) / 30 = 20/30 = 2/3 approx 0.6667.\n(b) At 10:15 the bus has not arrived, so T > 15. Waiting at least an additional 10 minutes means the bus arrives after 10:25, i.e., T >= 25. Thus we seek the conditional probability: P(T >= 25 | T > 15) = P(T >= 25 and T > 15) / P(T > 15) = P(T >= 25) / P(T > 15) = [(30 - 25)/30] / [(30 - 15)/30] = 5/15 = 1/3 approx 0.3333.",
    "trap": "The uniform distribution is NOT memoryless: having waited 15 minutes updates the conditioning interval from [0, 30] to [15, 30].",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 13, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.problem.14",
    "course": "prob",
    "sec": "5.3",
    "marks": 4,
    "title": "Ross Problem 14: Expected powers of a uniform variable via LOTUS and definition",
    "prompt": "Let X ~ Unif(0, 1). Compute E[X^n] for positive integer n: (a) by using LOTUS (Proposition 2.1); (b) by finding the distribution of Y = X^n and using the basic definition of expectation.",
    "approach": "Evaluate int_0^1 x^n dx directly; then derive the PDF of Y = X^n on (0, 1) and compute int y f_Y(y) dy.",
    "solution": "(a) By LOTUS (Proposition 2.1): E[X^n] = int_0^1 x^n * f_X(x) dx = int_0^1 x^n * 1 dx = [x^{n+1} / (n+1)]_0^1 = 1 / (n + 1).\n(b) Let Y = X^n. For 0 < y < 1: F_Y(y) = P(X^n <= y) = P(X <= y^{1/n}) = y^{1/n}. Differentiating gives the density: f_Y(y) = d/dy [y^{1/n}] = (1/n) * y^{1/n - 1} for 0 < y < 1. By the definition of expectation: E[Y] = int_0^1 y * f_Y(y) dy = int_0^1 y * [(1/n) * y^{1/n - 1}] dy = (1/n) int_0^1 y^{1/n} dy = (1/n) * [y^{1/n + 1} / (1/n + 1)]_0^1 = (1/n) * 1 / ((n+1)/n) = 1 / (n + 1). Both methods yield identical results.",
    "trap": "When integrating y^{1/n}, remember (1/n + 1) = (n + 1)/n; the 1/n in front cancels with the n in the numerator.",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 14, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.prob.15",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Prob 15: Five normal probabilities",
    "prompt": "$X$ is normal with mean 10 and variance 36. Find (a) P(X>5); (b) P(4<X<16); (c) P(X<8); (d) P(X<20); (e) P(X>16).",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "The standard deviation is 6. The probabilities are (a) $\\Phi(5/6)$; (b) $\\Phi(1)-\\Phi(-1)=2\\Phi(1)-1$; (c) $\\Phi(-1/3)$; (d) $\\Phi(5/3)$; (e) $1-\\Phi(1)$. Each follows from subtracting 10 and dividing the cutoff by 6.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 15."
  },
  {
    "id": "w.prob.5.ross.problem.16",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Problem 16: Annual rainfall exceedance run length",
    "prompt": "The annual rainfall (in inches) in a certain region is normally distributed with mean mu = 40 and standard deviation sigma = 4. What is the probability that, starting with this year, it will take more than 10 years before a year occurs having a rainfall of more than 50 inches? What assumptions are being made?",
    "approach": "Standardize 50 to find annual exceedance probability p = P(X > 50). Assuming independent yearly rainfalls, compute (1 - p)^{10}.",
    "solution": "Let X denote the annual rainfall in inches: X ~ N(40, 16). Standardizing 50 inches: z = (50 - 40)/4 = 10/4 = 2.50. The probability of rainfall exceeding 50 inches in any single year is p = P(X > 50) = 1 - Phi(2.50) approx 1 - 0.99379 = 0.00621. Taking more than 10 years before such a year occurs means that in each of the first 10 consecutive years, rainfall is at most 50 inches. Assuming annual rainfalls are independent and identically distributed from year to year: P(T > 10) = (1 - p)^{10} = (0.99379)^{10} approx 0.9397 (approx 94.0%).",
    "trap": "Standard deviation is sigma = 4; the prompt states mu = 40 and sigma = 4 (or variance 16).",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 16, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.problem.17",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 17: Physician salary distribution from percentiles",
    "prompt": "The salaries of physicians in a certain specialty are approximately normally distributed. If 25% earn less than 180,000 dollars and 25% earn more than 320,000 dollars, approximately what fraction earn: (a) less than 200,000 dollars? (b) between 280,000 dollars and 320,000 dollars?",
    "approach": "Use the 25th and 75th percentiles (z_{0.75} = 0.6745) to determine mean mu and standard deviation sigma, then evaluate the probabilities.",
    "solution": "By symmetry, the mean is mu = (180,000 + 320,000)/2 = 250,000 dollars. For the 75th percentile: (320,000 - 250,000)/sigma = 0.6745 => 70,000 / sigma = 0.6745 => sigma = 70,000 / 0.6745 approx 103,780.6 (in thousands: mu = 250, sigma approx 103.78).\n(a) For X < 200,000: z = (200 - 250)/103.78 = -50/103.78 approx -0.4818. P(X < 200) = Phi(-0.48) = 1 - Phi(0.48) approx 1 - 0.6844 = 0.3156 (approx 31.6%).\n(b) For 280 < X < 320: z_1 = (280 - 250)/103.78 = 30/103.78 approx 0.2891; z_2 = (320 - 250)/103.78 = 70/103.78 approx 0.6745. P(280 < X < 320) = Phi(0.6745) - Phi(0.2891) approx 0.7500 - 0.6137 = 0.1363 (approx 13.6%).",
    "trap": "The 25th and 75th percentiles are symmetric around the mean; Phi(0.6745) = 0.75.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 17, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.problem.18",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Problem 18: Normal variance from upper tail percentile",
    "prompt": "Suppose that X is a normal random variable with mean 5. If P(X > 9) = 0.20, approximately what is Var(X)?",
    "approach": "Standardize 9: (9 - 5)/sigma = z_{0.80}. Solve for sigma and square to find the variance.",
    "solution": "Standardizing: P(X > 9) = P(Z > (9 - 5)/sigma) = 1 - Phi(4/sigma) = 0.20 <=> Phi(4/sigma) = 0.80. From standard normal tables, Phi(0.8416) approx 0.80. Thus: 4/sigma = 0.8416 => sigma = 4 / 0.8416 approx 4.7528. Therefore, Var(X) = sigma^2 approx (4.7528)^2 approx 22.59 (or approx 22.6).",
    "trap": "Remember to square sigma to obtain variance: Var(X) = sigma^2.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 18, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.problem.19",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Problem 19: Normal critical cutoff value",
    "prompt": "Let X be a normal random variable with mean 12 and variance 4. Find the value of c such that P(X > c) = 0.10.",
    "approach": "Standardize with mu = 12 and sigma = 2; find the 90th percentile z_{0.90} and solve for c.",
    "solution": "With mu = 12 and sigma = sqrt(4) = 2: P(X > c) = 0.10 <=> P(Z > (c - 12)/2) = 0.10 <=> Phi((c - 12)/2) = 0.90. From standard normal tables, Phi(1.2816) approx 0.90. Setting (c - 12)/2 = 1.2816 gives c = 12 + 2 * 1.2816 = 12 + 2.5632 = 14.5632 (approx 14.56).",
    "trap": "The standard deviation is sqrt(4) = 2, not 4.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 19, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.problem.20",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 20: Normal approximation to school tax referendum poll",
    "prompt": "If 65% of the population of a large community favors a proposed rise in school taxes, approximate the probability that a random sample of 100 people contains: (a) at least 50 in favor; (b) between 60 and 70 inclusive in favor; (c) fewer than 75 in favor.",
    "approach": "Model X ~ Bin(100, 0.65). Mean mu = 65, sigma = sqrt(100*0.65*0.35) = 4.7697. Use continuity-corrected normal approximation.",
    "solution": "Let X ~ Bin(100, 0.65). Parameters: mu = 100 * 0.65 = 65, sigma = sqrt(100 * 0.65 * 0.35) = sqrt(22.75) approx 4.7697.\n(a) P(X >= 50) approx P(Y >= 49.5) = P(Z >= (49.5 - 65)/4.7697) = P(Z >= -3.2497) = Phi(3.25) approx 0.9994.\n(b) P(60 <= X <= 70) approx P(59.5 <= Y <= 70.5) = P((59.5 - 65)/4.7697 <= Z <= (70.5 - 65)/4.7697) = P(-1.153 <= Z <= 1.153) = 2*Phi(1.15) - 1 approx 2*(0.8749) - 1 = 0.7498.\n(c) P(X < 75) = P(X <= 74) approx P(Y <= 74.5) = P(Z <= (74.5 - 65)/4.7697) = P(Z <= 1.9917) approx Phi(1.99) approx 0.9767.",
    "trap": "Strict inequality X < 75 for integers means X <= 74, so continuity correction uses 74.5, not 75.5.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 20, PDF p. 235."
  },
  {
    "id": "w.prob.5.ross.problem.21",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 21: Adult male height percentiles and conditional tall club",
    "prompt": "Suppose the height X in inches of a 25-year-old man is normal with mean mu = 71 inches and variance sigma^2 = 6.25 (so sigma = 2.5 inches). (a) What percentage of 25-year-old men are taller than 6 feet, 2 inches (74 inches)? (b) What percentage of men in the \"6-footer club\" (at least 72 inches tall) are taller than 6 feet, 5 inches (77 inches)?",
    "approach": "Standardize heights with mu = 71 and sigma = 2.5; use unconditional tail for (a) and conditional probability P(X > 77 | X >= 72) for (b).",
    "solution": "Here mu = 71, sigma = sqrt(6.25) = 2.5.\n(a) 6 feet 2 inches = 74 inches. z = (74 - 71)/2.5 = 3/2.5 = 1.20. P(X > 74) = 1 - Phi(1.20) approx 1 - 0.8849 = 0.1151 (approx 11.51%).\n(b) 6 feet = 72 inches, and 6 feet 5 inches = 77 inches. z_1 = (72 - 71)/2.5 = 1/2.5 = 0.40, so P(X >= 72) = 1 - Phi(0.40) approx 1 - 0.6554 = 0.3446. z_2 = (77 - 71)/2.5 = 6/2.5 = 2.40, so P(X > 77) = 1 - Phi(2.40) approx 1 - 0.9918 = 0.0082. The conditional fraction is P(X > 77 | X >= 72) = P(X > 77) / P(X >= 72) = 0.0082 / 0.3446 approx 0.0238 (approx 2.38%).",
    "trap": "Remember to convert feet and inches to total inches: 6 ft = 72 in, 6 ft 2 in = 74 in, 6 ft 5 in = 77 in.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 21, PDF pp. 235–236."
  },
  {
    "id": "w.prob.5.ross.problem.22",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 22: Tennis serve practice quota and binomial-normal approximation",
    "prompt": "Jo practices her tennis serve until achieving 50 successful serves. Each serve is independently successful with probability p = 0.40. Approximate the probability that she needs more than 100 serves to accomplish her goal.",
    "approach": "Jo needs > 100 serves if and only if the number of successes in her first 100 serves is at most 49. Apply continuity-corrected normal approximation to Bin(100, 0.40).",
    "solution": "Needing more than 100 serves to reach 50 successes is logically equivalent to having at most 49 successes in the first 100 serves. Let X ~ Bin(n = 100, p = 0.40). Mean mu = 100 * 0.4 = 40. Standard deviation sigma = sqrt(100 * 0.4 * 0.6) = sqrt(24) approx 4.8990. We seek P(X <= 49). Applying the continuity correction: P(X <= 49) approx P(Y <= 49.5) = P(Z <= (49.5 - 40)/4.8990) = P(Z <= 9.5/4.8990) = P(Z <= 1.9392) approx Phi(1.94) approx 0.9738 (approx 97.4%).",
    "trap": "Focusing on negative binomial directly is difficult; mapping {total serves > 100} to {successes in 100 <= 49} converts it to standard binomial.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 22, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.problem.23",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 23: Die rolls frequencies and conditional five count",
    "prompt": "A fair die is rolled 1000 times independently. (a) Approximate the probability that the face 6 appears between 150 and 200 times inclusively. (b) If face 6 appears exactly 200 times, approximate the probability that face 5 appears fewer than 150 times.",
    "approach": "For (a), use Bin(1000, 1/6) normal approximation. For (b), conditioned on 200 sixes, the other 800 rolls are each equally likely to be 1, 2, 3, 4, or 5 (prob 1/5 for 5). Model as Bin(800, 1/5).",
    "solution": "(a) Let X be the number of 6s in 1000 rolls: X ~ Bin(1000, 1/6). Mean mu = 1000/6 approx 166.667. Variance sigma^2 = 1000*(1/6)*(5/6) = 5000/36 approx 138.889, so sigma approx 11.785. With continuity correction: P(150 <= X <= 200) approx P(149.5 <= Y <= 200.5) = P((149.5 - 166.667)/11.785 <= Z <= (200.5 - 166.667)/11.785) = P(-1.457 <= Z <= 2.871) = Phi(2.87) - [1 - Phi(1.46)] approx 0.9979 - (1 - 0.9279) = 0.9258 (approx 92.6%).\n(b) Given exactly 200 rolls are sixes, the remaining 800 rolls cannot be 6. By symmetry, each of the remaining 800 rolls is 5 with probability (1/6)/(5/6) = 1/5. Let W be the number of 5s in these 800 rolls: W ~ Bin(800, 0.20). Mean mu_W = 800 * 0.2 = 160. Variance sigma_W^2 = 800 * 0.2 * 0.8 = 128, so sigma_W = sqrt(128) approx 11.3137. We want P(W < 150) = P(W <= 149) approx P(Y_W <= 149.5) = P(Z <= (149.5 - 160)/11.3137) = P(Z <= -0.9281) = 1 - Phi(0.93) approx 1 - 0.8238 = 0.1762 (approx 17.6%).",
    "trap": "In part (b), conditional on 200 sixes, the trial count is 800 and the conditional probability of rolling a five is 1/5, not 1/6.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 23, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.problem.24",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 24: Computer chip life and batch defect count",
    "prompt": "The lifetimes of interactive computer chips are normally distributed with mean mu = 1.4 * 10^6 hours and standard deviation sigma = 3 * 10^5 hours. What is the approximate probability that a batch of 100 chips will contain at least 20 whose lifetimes are less than 1.8 * 10^6 hours?",
    "approach": "Find single-chip probability p = P(X < 1.8*10^6), then model batch count K ~ Bin(100, p) and approximate with normal distribution.",
    "solution": "For an individual chip: z = (1.8 * 10^6 - 1.4 * 10^6) / (3 * 10^5) = 4/3 approx 1.3333. The probability a chip lifetime is under 1.8 * 10^6 hours is p = Phi(1.33) approx 0.9082. In a batch of 100 chips, let K ~ Bin(100, p = 0.9082) be the number with lifetime < 1.8 * 10^6. Mean mu_K = 100 * 0.9082 = 90.82, and sigma_K = sqrt(100 * 0.9082 * 0.0918) approx 2.8875. We seek P(K >= 20). Since 20 is more than (90.82 - 20)/2.8875 approx 24.5 standard deviations below the mean, P(K >= 20) is virtually 1 (1 - Phi(-24.5) approx 1 - 10^{-130} = 1.0000).",
    "trap": "Notice p > 0.90, so having at least 20 chips meet the condition out of 100 is virtually a certainty.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 24, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.problem.25",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Problem 25: Manufacturing defect count normal approximation",
    "prompt": "Each item produced by a manufacturer is independently of acceptable quality with probability 0.95. Approximate the probability that at most 10 of the next 150 items produced are unacceptable.",
    "approach": "Number of unacceptable items X ~ Bin(150, 0.05). Use continuity-corrected normal approximation.",
    "solution": "Let X be the number of unacceptable items: X ~ Bin(n = 150, p = 0.05). Mean mu = 150 * 0.05 = 7.5. Variance sigma^2 = 150 * 0.05 * 0.95 = 7.125, so sigma = sqrt(7.125) approx 2.6693. We want P(X <= 10). Applying continuity correction: P(X <= 10) approx P(Y <= 10.5) = P(Z <= (10.5 - 7.5)/2.6693) = P(Z <= 3 / 2.6693) = P(Z <= 1.1239) approx Phi(1.12) approx 0.8686 (or Phi(1.124) approx 0.8695).",
    "trap": "Continuity correction for X <= 10 adds 0.5 to give cutoff 10.5.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 25, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.problem.26",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 26: Coin bias hypothesis testing error probabilities",
    "prompt": "To test whether a coin is fair (p = 0.50) or biased (p = 0.55), it is tossed 1000 times. We conclude it is biased if heads >= 525, and fair if heads < 525. (a) If the coin is actually fair, what is the probability of a false conclusion (Type I error)? (b) If the coin is actually biased (p = 0.55), what is the probability of a false conclusion (Type II error)?",
    "approach": "Apply continuity-corrected normal approximation under H_0: Bin(1000, 0.50) for heads >= 525, and under H_1: Bin(1000, 0.55) for heads < 525.",
    "solution": "(a) Under fair coin (p = 0.50): mu_0 = 1000 * 0.5 = 500, sigma_0 = sqrt(1000 * 0.5 * 0.5) = sqrt(250) approx 15.8114. False conclusion occurs if heads >= 525. With continuity correction: P(X >= 525) approx P(Y >= 524.5) = P(Z >= (524.5 - 500)/15.8114) = P(Z >= 24.5/15.8114) = P(Z >= 1.5495) = 1 - Phi(1.55) approx 1 - 0.9394 = 0.0606 (approx 6.06%).\n(b) Under biased coin (p = 0.55): mu_1 = 1000 * 0.55 = 550, sigma_1 = sqrt(1000 * 0.55 * 0.45) = sqrt(247.5) approx 15.7321. False conclusion occurs if heads < 525 <=> heads <= 524. With continuity correction: P(X <= 524) approx P(Y <= 524.5) = P(Z <= (524.5 - 550)/15.7321) = P(Z <= -25.5/15.7321) = P(Z <= -1.6209) = 1 - Phi(1.62) approx 1 - 0.9474 = 0.0526 (approx 5.26%).",
    "trap": "Continuity correction uses 524.5 in both cases: as lower bound for >= 525, and as upper bound for <= 524.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 26, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.problem.27",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Problem 27: Assessing fairness of 5800 heads in 10000 tosses",
    "prompt": "In 10,000 independent tosses of a coin, the coin landed on heads 5800 times. Is it reasonable to assume that the coin is fair? Explain using standard statistical evidence.",
    "approach": "Compute the z-score of 5800 under the fair coin model Bin(10000, 0.5) and interpret the deviation in standard deviations.",
    "solution": "Under the null hypothesis that the coin is fair (p = 0.50), the number of heads X in 10,000 tosses has mean mu = 10,000 * 0.5 = 5000, and standard deviation sigma = sqrt(10,000 * 0.5 * 0.5) = sqrt(2500) = 50. The observed value is 5800 heads. Standardizing: z = (5800 - 5000) / 50 = 800 / 50 = 16.0. An observation 16 standard deviations above the mean has a p-value of 1 - Phi(16) approx 10^{-58}. It is completely unreasonable to believe the coin is fair; the probability of observing 5800 or more heads by chance with a fair coin is essentially zero.",
    "trap": "A z-score of 16 is far beyond ordinary chance fluctuations (which rarely exceed 3 standard deviations).",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 27, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.problem.28",
    "course": "prob",
    "sec": "5.4",
    "marks": 4,
    "title": "Ross Problem 28: Left-handed student count normal approximation",
    "prompt": "Twelve percent of the population is left-handed. Approximate the probability that there are at least 20 left-handers in a school of 200 students. State your assumptions.",
    "approach": "Model X ~ Bin(200, 0.12) assuming students are independently sampled from the population; apply continuity-corrected normal approximation.",
    "solution": "Assume student handedness is independent across individuals. Let X ~ Bin(n = 200, p = 0.12). Mean mu = 200 * 0.12 = 24. Standard deviation sigma = sqrt(200 * 0.12 * 0.88) = sqrt(21.12) approx 4.5957. We seek P(X >= 20). Applying continuity correction: P(X >= 20) approx P(Y >= 19.5) = P(Z >= (19.5 - 24)/4.5957) = P(Z >= -4.5/4.5957) = P(Z >= -0.9792) = Phi(0.98) approx 0.8365 (approx 83.7%).",
    "trap": "Continuity correction for X >= 20 shifts down to 19.5, not 20.5.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 28, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.prob.29",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Prob 29: Multiplicative stock movement",
    "prompt": "Over 1000 independent periods a stock multiplies by 1.012 with probability .52, otherwise by .990. Approximate the chance its final price is at least 30 percent above its initial price.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "If K is the up count, final-to-initial ratio is $1.012^K(.990)^{1000-K}$. Taking logarithms gives $K\\ge k_0=\\lceil[\\ln(1.3)-1000\\ln(.990)]/[\\ln(1.012)-\\ln(.990)]\\rceil$. The count K is binomial$(1000,.52)$ with mean 520 and variance 249.6. A continuity-corrected normal approximation is $1-\\Phi((k_0-.5-520)/\\sqrt{249.6})$. The finite sum of binomial masses from k0 through 1000 is the exact probability.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 29."
  },
  {
    "id": "w.prob.5.ross.problem.30",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Problem 30: Image region classification threshold and prior balance",
    "prompt": "An image is partitioned into two regions: white and black. A reading taken from the white region is N(4, 4) (density f_W(x)), while a reading from the black region is N(6, 9) (density f_B(x)). A randomly chosen point gives a reading of x = 5. If the fraction of the image that is black is alpha, for what value of alpha would the probability of making an error be the same regardless of whether one decided the point was in the black or white region?",
    "approach": "Error probabilities are equal under the decision rule when the posterior probabilities given reading 5 are equal, which occurs when (1 - alpha) * f_W(5) = alpha * f_B(5). Solve for alpha.",
    "solution": "The two conditional densities at x = 5 are:\n- White: mu_W = 4, sigma_W^2 = 4 (sigma_W = 2). f_W(5) = (1 / (sqrt(2*pi) * 2)) * exp(-(5 - 4)^2 / (2 * 4)) = (1 / (2*sqrt(2*pi))) * exp(-1/8).\n- Black: mu_B = 6, sigma_B^2 = 9 (sigma_B = 3). f_B(5) = (1 / (sqrt(2*pi) * 3)) * exp(-(5 - 6)^2 / (2 * 9)) = (1 / (3*sqrt(2*pi))) * exp(-1/18).\nFor the probability of error given reading 5 to be equal whether we classify as white or black, the joint likelihoods must match: (1 - alpha) * f_W(5) = alpha * f_B(5) <=> alpha / (1 - alpha) = f_W(5) / f_B(5) = [3 / 2] * exp(-1/8 + 1/18) = 1.5 * exp(-5/72).\nSince exp(-5/72) = exp(-0.06944) approx 0.932915:\nalpha / (1 - alpha) approx 1.5 * 0.932915 approx 1.39937. Solving: alpha = 1.39937 / 2.39937 approx 0.5832 (approx 58.3%).",
    "trap": "The variances differ (4 vs 9), so the normal densities have different scale coefficients (1/2 vs 1/3) and different exponential denominators (8 vs 18).",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 30, PDF p. 236."
  },
  {
    "id": "w.prob.5.ross.problem.31",
    "course": "prob",
    "sec": "5.5",
    "marks": 5,
    "title": "Ross Problem 31: Optimal fire station location for uniform and exponential demand",
    "prompt": "A fire station is to be located along a road to minimize the expected distance E[|X - a|] from a fire at location X. (a) If the road has finite length A and X ~ Unif(0, A), where should the station be placed? (b) If the road is semi-infinite [0, infty) and X ~ Exp(lambda), where should the station be placed?",
    "approach": "E[|X - a|] is minimized at any median of the distribution of X (where F(a*) = 1/2).",
    "solution": "In general, E[|X - a|] is minimized at a median of the distribution of X. We can verify by differentiating g(a) = E[|X - a|] = int_0^a (a - x) f(x) dx + int_a^infty (x - a) f(x) dx. By Leibniz rule: g'(a) = int_0^a f(x) dx - int_a^infty f(x) dx = F(a) - (1 - F(a)) = 2F(a) - 1. Setting g'(a*) = 0 yields F(a*) = 1/2.\n(a) For X ~ Unif(0, A): F(a) = a/A. Setting a/A = 1/2 gives a* = A/2 (the midpoint of the road).\n(b) For X ~ Exp(lambda): F(a) = 1 - exp(-lambda * a). Setting 1 - exp(-lambda * a*) = 1/2 gives exp(-lambda * a*) = 1/2 => -lambda * a* = -ln 2 => a* = (ln 2) / lambda.",
    "trap": "Minimizing expected absolute deviation E[|X - a|] yields the median, not the mean (for the exponential, median is (ln 2)/lambda, whereas the mean is 1/lambda).",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 31, PDF pp. 236–237."
  },
  {
    "id": "w.prob.5.ross.problem.32",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Problem 32: Machine repair time and conditional exponential duration",
    "prompt": "The time X (in hours) required to repair a machine is exponential with parameter lambda = 1/2 (mean 2 hours). (a) What is the probability that repair time exceeds 2 hours? (b) What is the conditional probability that a repair takes at least 10 hours, given that its duration exceeds 9 hours?",
    "approach": "Use survival function P(X > t) = exp(-lambda * t) and memoryless property P(X >= 10 | X > 9) = P(X >= 1).",
    "solution": "With lambda = 1/2:\n(a) P(X > 2) = exp(-lambda * 2) = exp(-(1/2) * 2) = exp(-1) approx 0.3679.\n(b) By the memoryless property of the exponential distribution: P(X >= 10 | X > 9) = P(X >= 9 + 1 | X > 9) = P(X >= 1) = exp(-lambda * 1) = exp(-0.5) approx 0.6065.",
    "trap": "Elapsed repair time of 9 hours does not make completion more imminent; the remaining time is still Exp(1/2).",
    "tests": [
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 32, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.33",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Problem 33: Negative logarithm of uniform variable is exponential",
    "prompt": "If U is uniformly distributed on (0, 1), find the distribution of Y = -ln(U).",
    "approach": "Find the CDF F_Y(y) for y > 0 by solving the event {-ln U <= y}.",
    "solution": "Since 0 < U < 1, Y = -ln U takes values in (0, infty). For y <= 0, F_Y(y) = 0. For y > 0: F_Y(y) = P(Y <= y) = P(-ln U <= y) = P(ln U >= -y) = P(U >= exp(-y)) = 1 - P(U < exp(-y)). Since U ~ Unif(0, 1) and 0 < exp(-y) < 1, P(U < exp(-y)) = exp(-y). Therefore F_Y(y) = 1 - exp(-y) for y > 0. Differentiating gives f_Y(y) = exp(-y) for y > 0. Thus Y ~ Exp(lambda = 1) is a standard exponential random variable.",
    "trap": "Remember the inequality reverses when multiplying by -1: -ln U <= y <=> ln U >= -y.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.5.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 33, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.34",
    "course": "prob",
    "sec": "5.5",
    "marks": 5,
    "title": "Ross Problem 34: Used car additional mileage under exponential versus uniform lifetimes",
    "prompt": "A used car has been driven 10,000 miles. Compute the probability that it lasts for at least 20,000 additional miles under: (a) total lifetime mileage T is exponential with parameter lambda = 1/20 (in thousands of miles); (b) total lifetime mileage T is uniformly distributed on (0, 40) (in thousands of miles).",
    "approach": "Condition on T > 10 and compute P(T >= 30 | T > 10) under exponential memorylessness and uniform conditional probability.",
    "solution": "Let T be total lifetime in thousands of miles. The car has survived 10 thousand miles (T > 10). Lasting 20,000 additional miles means T >= 30.\n(a) If T ~ Exp(lambda = 1/20 = 0.05): By the memoryless property, P(T >= 30 | T > 10) = P(T >= 20) = exp(-lambda * 20) = exp(- (1/20) * 20) = exp(-1) approx 0.3679.\n(b) If T ~ Unif(0, 40): The conditional probability is P(T >= 30 | T > 10) = P(T >= 30 and T > 10) / P(T > 10) = P(30 <= T <= 40) / P(10 < T <= 40) = (40 - 30)/(40 - 10) = 10/30 = 1/3 approx 0.3333.",
    "trap": "Under the uniform distribution, past mileage consumes lifetime; under the exponential distribution, the remaining life is memoryless.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 34, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.35",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Problem 35: Scaling an exponential random variable",
    "prompt": "If X is an exponential random variable with parameter lambda and c > 0 is a constant, find the probability density function of Y = cX. What kind of random variable is cX?",
    "approach": "Use the linear transformation formula f_Y(y) = (1/c) * f_X(y/c) for y > 0.",
    "solution": "Since X >= 0 and c > 0, Y = cX takes values in (0, infty). For y > 0, the inverse is x = y/c with dx/dy = 1/c. By the change of variables formula: f_Y(y) = f_X(y/c) * (1/c) = [lambda * exp(-lambda * (y/c))] * (1/c) = (lambda / c) * exp(-(lambda / c) * y) for y > 0, and 0 for y <= 0. This is the density of an exponential random variable with parameter lambda / c. Therefore cX ~ Exp(lambda / c).",
    "trap": "Scaling by c divides the rate parameter by c (which multiplies the mean by c: E[cX] = c * E[X] = c / lambda).",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 35, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.36",
    "course": "prob",
    "sec": "5.5",
    "marks": 5,
    "title": "Ross Problem 36: Smoker lung cancer survival from quadratic hazard rate",
    "prompt": "The lung cancer hazard rate of a t-year-old male smoker is lambda(t) = 0.027 + 0.00025(t - 40)^2 for t >= 40. Assuming a 40-year-old male smoker survives all other hazards, what is the probability that he survives without lung cancer to: (a) age 50? (b) age 60?",
    "approach": "Conditional survival probability from age 40 to T is exp(-int_{40}^T lambda(t) dt). Evaluate the integral for T = 50 and T = 60.",
    "solution": "Survival probability from age 40 to age T is S(T | 40) = exp(-int_{40}^T lambda(t) dt). For t >= 40: int_{40}^T [0.027 + 0.00025(t - 40)^2] dt = 0.027(T - 40) + (0.00025/3)(T - 40)^3.\n(a) For age 50 (T - 40 = 10): integral = 0.027(10) + (0.00025/3)(1000) = 0.27 + 0.25/3 = 0.27 + 0.08333 = 0.35333. P(survives to 50) = exp(-0.35333) approx 0.70235 (approx 70.2%).\n(b) For age 60 (T - 40 = 20): integral = 0.027(20) + (0.00025/3)(8000) = 0.54 + 2.0/3 = 0.54 + 0.66667 = 1.20667. P(survives to 60) = exp(-1.20667) approx 0.29919 (approx 29.9%).",
    "trap": "Do not forget the cubic term (t - 40)^3 / 3 when integrating the quadratic part of the hazard rate.",
    "tests": [
      "c.prob.5.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 36, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.37",
    "course": "prob",
    "sec": "5.5",
    "marks": 5,
    "title": "Ross Problem 37: Weibull survival and conditional reliability with cubic hazard",
    "prompt": "Suppose the lifetime distribution of an item has hazard rate lambda(t) = t^3 for t > 0. What is the probability that: (a) the item survives to age 2? (b) the item lifetime is between 0.4 and 1.4? (c) a 1-year-old item survives to age 2?",
    "approach": "Survival function is S(t) = exp(-int_0^t s^3 ds) = exp(-t^4 / 4). Use S(t) for all probabilities.",
    "solution": "The cumulative hazard is Lambda(t) = int_0^t s^3 ds = t^4 / 4. Thus the survival function is S(t) = exp(-t^4 / 4) for t > 0.\n(a) P(T > 2) = S(2) = exp(-2^4 / 4) = exp(-16/4) = exp(-4) approx 0.0183156 (approx 1.83%).\n(b) P(0.4 < T < 1.4) = S(0.4) - S(1.4) = exp(-(0.4)^4 / 4) - exp(-(1.4)^4 / 4) = exp(-0.0256 / 4) - exp(-3.8416 / 4) = exp(-0.0064) - exp(-0.9604) approx 0.99362 - 0.38274 = 0.61088 (approx 61.1%).\n(c) P(T > 2 | T > 1) = S(2) / S(1) = exp(-4) / exp(-1^4 / 4) = exp(-4) / exp(-0.25) = exp(-3.75) approx 0.0235177 (approx 2.35%).",
    "trap": "P(0.4 < T < 1.4) is S(0.4) - S(1.4), because survival is a non-increasing function of time.",
    "tests": [
      "c.prob.5.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 37, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.prob.38",
    "course": "prob",
    "sec": "5.7",
    "marks": 6,
    "title": "Ross Prob 38: Absolute value of a uniform",
    "prompt": "$X$ is uniform on (-1,1). Find (a) P(|X|>1/2); (b) the density of |X|.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) The intervals (-1,-1/2) and (1/2,1) have total length 1, half the support length, so probability 1/2. (b) For 0<y<1, $P(|X|\\le y)=P(-y\\le X\\le y)=y$. Therefore |X| is uniform on (0,1), with density 1 there and zero elsewhere.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 38."
  },
  {
    "id": "w.prob.5.ross.problem.39",
    "course": "prob",
    "sec": "5.3",
    "marks": 5,
    "title": "Ross Problem 39: Quadratic equation with uniform coefficient and real roots condition",
    "prompt": "If Y is uniformly distributed over (0, 5), what is the probability that the roots of the quadratic equation 4x^2 + 4xY + Y + 2 = 0 are both real?",
    "approach": "Roots of ax^2 + bx + c = 0 are real if and only if the discriminant Delta = b^2 - 4ac >= 0. Find the corresponding condition on Y and compute its probability under Unif(0, 5).",
    "solution": "In the quadratic equation 4x^2 + (4Y)x + (Y + 2) = 0, the coefficients are a = 4, b = 4Y, and c = Y + 2. The roots are real if and only if the discriminant is non-negative: Delta = b^2 - 4ac = (4Y)^2 - 4(4)(Y + 2) = 16Y^2 - 16(Y + 2) = 16(Y^2 - Y - 2) >= 0. Factoring the quadratic: Y^2 - Y - 2 = (Y - 2)(Y + 1) >= 0. Since Y ~ Unif(0, 5), Y > 0 always, so Y + 1 > 0 is always positive. Thus the discriminant is non-negative if and only if Y - 2 >= 0 <=> Y >= 2. Since Y is uniformly distributed on (0, 5), the probability is: P(Y >= 2) = (5 - 2) / (5 - 0) = 3/5 = 0.60.",
    "trap": "The other algebraic branch Y <= -1 is outside the support (0, 5) and cannot occur.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 39, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.40",
    "course": "prob",
    "sec": "5.7",
    "marks": 5,
    "title": "Ross Problem 40: Density of the log-exponential transformation (Gumbel type)",
    "prompt": "If X is an exponential random variable with parameter lambda = 1, compute the probability density function of the random variable Y = ln(X).",
    "approach": "Use the monotonic transformation theorem with strictly increasing function g(x) = ln x, whose inverse is x = exp(y).",
    "solution": "The transformation is Y = g(X) = ln(X), where X has density f_X(x) = exp(-x) for x > 0. Since g(x) = ln x is strictly increasing from (0, infty) onto (-infty, infty), its inverse is x = g^{-1}(y) = exp(y) for -infty < y < infty. The derivative of the inverse is dx/dy = d/dy [exp(y)] = exp(y). By the transformation formula: f_Y(y) = f_X(g^{-1}(y)) * |dx/dy| = f_X(exp(y)) * exp(y) = exp(-exp(y)) * exp(y) = exp(y - exp(y)) for -infty < y < infty. (This is the standard extreme value / Gumbel density).",
    "trap": "The support of Y = ln X is the entire real line (-infty, infty), not just positive numbers.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 40, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.41",
    "course": "prob",
    "sec": "5.3",
    "marks": 4,
    "title": "Ross Problem 41: Determining uniform parameters from mean and variance",
    "prompt": "If X is uniformly distributed over (a, b), find the parameters a and b if E[X] = 10 and Var(X) = 48.",
    "approach": "Use the uniform moment formulas E[X] = (a + b)/2 and Var(X) = (b - a)^2 / 12 to set up a system of two equations.",
    "solution": "For X ~ Unif(a, b):\n1) E[X] = (a + b)/2 = 10 <=> a + b = 20.\n2) Var(X) = (b - a)^2 / 12 = 48 <=> (b - a)^2 = 12 * 48 = 576. Since b > a, b - a = sqrt(576) = 24. Adding the two equations: (a + b) + (b - a) = 20 + 24 <=> 2b = 44 <=> b = 22. Subtracting gives: (a + b) - (b - a) = 20 - 24 <=> 2a = -4 <=> a = -2. Thus a = -2 and b = 22. Check: width is 24, variance is 24^2/12 = 576/12 = 48; midpoint is (-2 + 22)/2 = 10.",
    "trap": "The lower bound a can be negative: a = -2 is valid for a uniform distribution on (-2, 22).",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 41, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.42",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Problem 42: Density of an exponential transform of uniform variable",
    "prompt": "If X is uniformly distributed over (0, 1), find the probability density function of Y = exp(X).",
    "approach": "Find CDF F_Y(y) for 1 < y < e and differentiate, or apply Theorem 7.1 with g(x) = exp(x).",
    "solution": "Since 0 < X < 1, Y = exp(X) takes values strictly in (1, e). The transformation g(x) = exp(x) is strictly increasing with inverse x = g^{-1}(y) = ln y. The derivative of the inverse is dx/dy = 1/y. Since X ~ Unif(0, 1), f_X(x) = 1 for 0 < x < 1. By the transformation theorem: f_Y(y) = f_X(ln y) * |dx/dy| = 1 * (1/y) = 1/y for 1 < y < e, and f_Y(y) = 0 otherwise. Check normalization: int_1^e (1/y) dy = [ln y]_1^e = ln e - ln 1 = 1 - 0 = 1.",
    "trap": "The support of Y is (1, e), not (0, 1) or (0, e); outside (1, e), the density is 0.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 42, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.43",
    "course": "prob",
    "sec": "5.7",
    "marks": 5,
    "title": "Ross Problem 43: Ballistics range distribution with sinusoidal angle",
    "prompt": "Find the distribution of R = A * sin(theta), where A > 0 is a fixed constant and theta is uniformly distributed on (-pi/2, pi/2). (This model arises in ballistics where projectile landing distance is proportional to sin(2*alpha)).",
    "approach": "On (-pi/2, pi/2), g(theta) = A*sin(theta) is strictly increasing from -A to A. Find inverse theta = arcsin(r/A) and differentiate.",
    "solution": "The support of theta is (-pi/2, pi/2), where the density is f_theta(t) = 1 / (pi/2 - (-pi/2)) = 1/pi. The function g(t) = A*sin(t) is strictly increasing from (-pi/2, pi/2) onto (-A, A). Its inverse is t = g^{-1}(r) = arcsin(r/A) for -A < r < A. The derivative of the inverse is: dt/dr = d/dr [arcsin(r/A)] = (1 / sqrt(1 - (r/A)^2)) * (1/A) = 1 / sqrt(A^2 - r^2). By Theorem 7.1: f_R(r) = f_theta(arcsin(r/A)) * |dt/dr| = (1/pi) * (1 / sqrt(A^2 - r^2)) = 1 / (pi * sqrt(A^2 - r^2)) for -A < r < A, and 0 otherwise. (This is the arcsine distribution on (-A, A)).",
    "trap": "The derivative of arcsin(r/A) has denominator sqrt(1 - (r/A)^2) * A = sqrt(A^2 - r^2).",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 43, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.problem.44",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Problem 44: Invariance properties of lognormal random variables",
    "prompt": "Let Y be a lognormal random variable with parameters mu and sigma^2 (meaning ln Y ~ N(mu, sigma^2)), and let c > 0 be a constant. Answer True or False with a complete mathematical explanation for each statement: (a) cY is lognormal; (b) c + Y is lognormal.",
    "approach": "Test whether the natural logarithm of each transformed variable is normally distributed.",
    "solution": "(a) True. By definition, Y is lognormal if and only if ln Y is normal. For cY: ln(cY) = ln(c) + ln(Y). Since ln Y ~ N(mu, sigma^2) and ln c is a constant, ln(cY) is a linear translation of a normal random variable: ln(cY) ~ N(mu + ln c, sigma^2). Therefore cY is lognormal with parameters mu + ln c and sigma^2.\n(b) False. By definition, c + Y would be lognormal if and only if ln(c + Y) were normally distributed. However, ln(c + Y) = ln(c + exp(X)) where X = ln Y ~ N(mu, sigma^2). The function h(x) = ln(c + exp(x)) is strictly non-linear for c > 0, so the distribution of ln(c + Y) is skewed and cannot be normal. (For example, its higher-order cumulants do not match the normal distribution). Therefore c + Y is not lognormal.",
    "trap": "Lognormal variables are closed under positive scalar multiplication, but NOT under addition of a positive constant.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Problem 44, PDF p. 237."
  },
  {
    "id": "w.prob.5.ross.theor.1",
    "course": "prob",
    "sec": "5.1",
    "marks": 6,
    "title": "Ross Theor 1: Normalize a molecular-speed density",
    "prompt": "A molecular speed has density $ax^2e^{-bx^2}$ for x at least zero, with b>0. Express a in terms of b.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "With z=sqrt(b)x, the integral of $x^2e^{-bx^2}$ is $b^{-3/2}\\int_0^\\infty z^2e^{-z^2}dz$. Integration by parts gives the latter integral $\\frac12\\int_0^\\infty e^{-z^2}dz=\\sqrt\\pi/4$. Normalization therefore requires $a=4b^{3/2}/\\sqrt\\pi$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 1."
  },
  {
    "id": "w.prob.5.ross.theoretical.2",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Theoretical 5.2: Tail integral formula for general random variables",
    "prompt": "Show that for any random variable Y with finite expectation E[|Y|] < infty:\nE[Y] = int_0^infty P(Y > y) dy - int_0^infty P(Y < -y) dy.",
    "approach": "Express P(Y > y) and P(Y < -y) in terms of integrals of the density f_Y, interchange the order of integration via Fubini theorem.",
    "solution": "Let f_Y be the density function of Y. For the first integral:\nint_0^infty P(Y > y) dy = int_0^infty [int_y^infty f_Y(x) dx] dy. By Tonelli-Fubini theorem (since the integrand is non-negative and E[|Y|] < infty), we change the order of integration: 0 < y < x < infty. Thus int_0^infty [int_0^x dy] f_Y(x) dx = int_0^infty x f_Y(x) dx.\nFor the second integral:\nint_0^infty P(Y < -y) dy = int_0^infty [int_{-infty}^{-y} f_Y(x) dx] dy. Here -infty < x < -y < 0, which is equivalent to 0 < y < -x for x in (-infty, 0). Interchanging integration order: int_{-infty}^0 [int_0^{-x} dy] f_Y(x) dx = int_{-infty}^0 (-x) f_Y(x) dx = - int_{-infty}^0 x f_Y(x) dx.\nSubtracting the second equation from the first: int_0^infty P(Y > y) dy - int_0^infty P(Y < -y) dy = int_0^infty x f_Y(x) dx - (- int_{-infty}^0 x f_Y(x) dx) = int_{-infty}^infty x f_Y(x) dx = E[Y].",
    "trap": "Notice the sign: the negative tail has P(Y < -y) integrated over y > 0, which corresponds to the negative real axis.",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 2, PDF p. 238."
  },
  {
    "id": "w.prob.5.ross.theoretical.3",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Theoretical 5.3: Tail integral derivation of continuous LOTUS",
    "prompt": "Let X have density f. Use the tail identity of Theoretical Exercise 5.2 to prove Proposition 2.1 (LOTUS) for continuous random variables: E[g(X)] = int_{-infty}^infty g(x) f(x) dx, assuming E[|g(X)|] < infty.",
    "approach": "Apply the formula to Y = g(X): express P(g(X) > y) and P(g(X) < -y) as integrals over x, then interchange the order of integration.",
    "solution": "Let Y = g(X). By Theoretical Exercise 5.2: E[g(X)] = int_0^infty P(g(X) > y) dy - int_0^infty P(g(X) < -y) dy.\nWrite the events as integrals of f(x):\nP(g(X) > y) = int_{x: g(x) > y} f(x) dx, and P(g(X) < -y) = int_{x: g(x) < -y} f(x) dx.\nFor the first term, by Fubini theorem: int_0^infty [int_{x: g(x) > y} f(x) dx] dy = int_{x: g(x) > 0} [int_0^{g(x)} dy] f(x) dx = int_{x: g(x) > 0} g(x) f(x) dx.\nFor the second term: int_0^infty [int_{x: g(x) < -y} f(x) dx] dy = int_{x: g(x) < 0} [int_0^{-g(x)} dy] f(x) dx = int_{x: g(x) < 0} (-g(x)) f(x) dx = - int_{x: g(x) < 0} g(x) f(x) dx.\nSubtracting gives: int_{x: g(x) > 0} g(x) f(x) dx - (- int_{x: g(x) < 0} g(x) f(x) dx) = int_{-infty}^infty g(x) f(x) dx = E[g(X)].",
    "trap": "Fubini theorem requires absolute integrability E[|g(X)|] < infty to justify interchanging integration.",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 3, PDF p. 238."
  },
  {
    "id": "w.prob.5.ross.theoretical.4",
    "course": "prob",
    "sec": "5.2",
    "marks": 4,
    "title": "Ross Theoretical 5.4: Linearity of expectation for continuous variables",
    "prompt": "Prove Corollary 2.1: If X is a continuous random variable with density f, then for any constants a and b, E[aX + b] = a E[X] + b.",
    "approach": "Apply LOTUS with g(x) = ax + b and use the linearity of integration.",
    "solution": "By Proposition 2.1 (LOTUS) with g(x) = ax + b: E[aX + b] = int_{-infty}^infty (ax + b) f(x) dx. By the linearity of the Riemann (or Lebesgue) integral: int_{-infty}^infty (ax + b) f(x) dx = int_{-infty}^infty ax f(x) dx + int_{-infty}^infty b f(x) dx = a int_{-infty}^infty x f(x) dx + b int_{-infty}^infty f(x) dx. By definition, int_{-infty}^infty x f(x) dx = E[X], and by normalization of the density function, int_{-infty}^infty f(x) dx = 1. Therefore: E[aX + b] = a E[X] + b * 1 = a E[X] + b.",
    "trap": "The normalization condition int f(x) dx = 1 is what turns the constant integral into b.",
    "tests": [
      "c.prob.5.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 4, PDF p. 238."
  },
  {
    "id": "w.prob.5.ross.theoretical.5",
    "course": "prob",
    "sec": "5.2",
    "marks": 5,
    "title": "Ross Theoretical 5.5: Higher moments from tail probabilities",
    "prompt": "Use the identity E[Y] = int_0^infty P(Y > t) dt for nonnegative Y to show that for any nonnegative continuous random variable X and positive integer n: E[X^n] = int_0^infty n * x^{n-1} * P(X > x) dx.",
    "approach": "Let Y = X^n in the tail formula and substitute t = x^n (so dt = n * x^{n-1} dx).",
    "solution": "Since X >= 0 and n > 0, Y = X^n is a nonnegative random variable. Applying the tail-integral formula to Y: E[X^n] = E[Y] = int_0^infty P(Y > t) dt = int_0^infty P(X^n > t) dt. For t >= 0, the event {X^n > t} is identical to {X > t^{1/n}} because the function x mapsto x^n is strictly increasing on [0, infty). Make the substitution t = x^n. Then dt = n * x^{n-1} dx. When t = 0, x = 0; as t -> infty, x -> infty. The event {X^n > t} becomes {X > x}. Substituting these into the integral yields: E[X^n] = int_0^infty P(X > x) * (n * x^{n-1} dx) = int_0^infty n * x^{n-1} P(X > x) dx.",
    "trap": "The differential dt transforms to n * x^{n-1} dx under t = x^n; this Jacobian weight gives the n*x^{n-1} factor.",
    "tests": [
      "c.prob.5.2.1",
      "c.prob.5.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 5, PDF p. 238."
  },
  {
    "id": "w.prob.5.ross.theoretical.6",
    "course": "prob",
    "sec": "5.1",
    "marks": 5,
    "title": "Ross Theoretical 5.6: Uncountable family of probability-1 events with empty intersection",
    "prompt": "Define a collection of events E_a for 0 < a < 1 having the property that P(E_a) = 1 for all a in (0, 1), but P(bigcap_{0 < a < 1} E_a) = 0.",
    "approach": "Let X ~ Unif(0, 1) and define E_a = {X != a}. Show each has probability 1, but their intersection over all a in (0, 1) is empty.",
    "solution": "Let X be a continuous random variable uniformly distributed over (0, 1). For each a in (0, 1), define the event E_a = {X != a}. Since X is continuous, the probability of any singleton is zero: P(X = a) = 0. Therefore, P(E_a) = 1 - P(X = a) = 1 - 0 = 1 for every a in (0, 1). Now consider the intersection of all such events: bigcap_{a in (0, 1)} E_a = bigcap_{a in (0, 1)} {X != a} = {omega: X(omega) != a for all a in (0, 1)}. Since X(omega) in (0, 1) for every outcome in the sample space, X(omega) must equal some specific value a in (0, 1). Hence no outcome satisfies X(omega) != a for ALL a in (0, 1). Thus bigcap_{a in (0, 1)} E_a = emptyset. Therefore P(bigcap_{a in (0, 1)} E_a) = P(emptyset) = 0. This demonstrates that countable additivity does not extend to uncountable intersections.",
    "trap": "Probability measures are countably additive, but NOT uncountably additive: each E_a has measure 1, yet the uncountable intersection has measure 0.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 6, PDF p. 238."
  },
  {
    "id": "w.prob.5.ross.theoretical.7",
    "course": "prob",
    "sec": "5.2",
    "marks": 4,
    "title": "Ross Theoretical 5.7: Standard deviation of an affine transformation",
    "prompt": "The standard deviation of X, denoted SD(X), is defined as sqrt(Var(X)). If X has variance sigma^2, find SD(aX + b) for arbitrary constants a and b.",
    "approach": "Use the property Var(aX + b) = a^2 * Var(X) and take the square root.",
    "solution": "By the properties of variance: Var(aX + b) = E[((aX + b) - E[aX + b])^2] = E[(aX - a E[X])^2] = E[a^2 (X - E[X])^2] = a^2 * Var(X) = a^2 * sigma^2. By definition, standard deviation is the non-negative square root of variance: SD(aX + b) = sqrt(Var(aX + b)) = sqrt(a^2 * sigma^2) = |a| * sigma = |a| * SD(X). The additive constant b does not affect the spread (variance or standard deviation), and a negative scale factor a produces a positive standard deviation |a|*sigma.",
    "trap": "The factor is |a|, not a; standard deviation is strictly non-negative.",
    "tests": [
      "c.prob.5.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 7, PDF p. 238."
  },
  {
    "id": "w.prob.5.ross.theor.8",
    "course": "prob",
    "sec": "5.2",
    "marks": 6,
    "title": "Ross Theor 8: Variance of a bounded variable",
    "prompt": "If $0\\le X\\le c$ with probability 1, prove $\\operatorname{Var}(X)\\le c^2/4$.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Since $X^2\\le cX$, $E[X^2]\\le c\\mu$, where mu is the mean. Hence variance is at most $c\\mu-\\mu^2=c^2/4-(\\mu-c/2)^2\\le c^2/4$. Equality occurs for equal probabilities at 0 and c. If c=0 both sides are zero.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 8."
  },
  {
    "id": "w.prob.5.ross.theoretical.9",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Theoretical 5.9: Standard normal symmetry and absolute value tail identities",
    "prompt": "Let Z be a standard normal random variable. Prove that for any x > 0: (a) P(Z > x) = P(Z < -x); (b) P(|Z| > x) = 2*P(Z > x); (c) P(|Z| < x) = 2*P(Z < x) - 1.",
    "approach": "Use the symmetry of the standard normal density phi(z) = phi(-z) and the definition of absolute value events.",
    "solution": "(a) The standard normal density phi(z) = (1/sqrt(2*pi)) * exp(-z^2/2) satisfies phi(-z) = phi(z). By substituting u = -z: P(Z > x) = int_x^infty phi(z) dz = int_{-infty}^{-x} phi(-u) du = int_{-infty}^{-x} phi(u) du = P(Z < -x).\n(b) The event {|Z| > x} is the disjoint union of {Z > x} and {Z < -x}. By additivity and part (a): P(|Z| > x) = P(Z > x) + P(Z < -x) = P(Z > x) + P(Z > x) = 2*P(Z > x).\n(c) The event {|Z| < x} is the complement of {|Z| >= x}. Using part (b) and P(Z > x) = 1 - P(Z < x): P(|Z| < x) = 1 - P(|Z| >= x) = 1 - 2*P(Z >= x) = 1 - 2*(1 - P(Z < x)) = 1 - 2 + 2*P(Z < x) = 2*P(Z < x) - 1. (In terms of CDF: P(|Z| < x) = 2*Phi(x) - 1).",
    "trap": "Endpoints carry 0 probability for continuous variables, so P(|Z| >= x) = P(|Z| > x).",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 9, PDF pp. 238–239."
  },
  {
    "id": "w.prob.5.ross.theoretical.10",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Theoretical 5.10: Inflection points of the normal density function",
    "prompt": "Let f(x) denote the probability density function of a normal random variable with mean mu and variance sigma^2. Show that x = mu - sigma and x = mu + sigma are points of inflection of f(x) by proving that f''(x) = 0 at these points and changes sign.",
    "approach": "Differentiate f(x) twice with respect to x and solve f''(x) = 0.",
    "solution": "The normal density is f(x) = (1 / (sqrt(2*pi) * sigma)) * exp(-(x - mu)^2 / (2*sigma^2)). First derivative: f'(x) = f(x) * [-(x - mu) / sigma^2]. Second derivative: using the product rule, f''(x) = f'(x) * [-(x - mu)/sigma^2] + f(x) * [-1 / sigma^2] = f(x) * [((x - mu)^2 / sigma^4) - (1 / sigma^2)] = (f(x) / sigma^4) * [(x - mu)^2 - sigma^2]. Since f(x) > 0 everywhere, f''(x) = 0 if and only if (x - mu)^2 - sigma^2 = 0 <=> (x - mu)^2 = sigma^2 <=> x - mu = +/- sigma <=> x = mu - sigma or x = mu + sigma. Furthermore, (x - mu)^2 - sigma^2 changes sign from positive to negative at mu - sigma and from negative to positive at mu + sigma, confirming these two points are genuine inflection points.",
    "trap": "Differentiating the exponential requires chain rule on -(x - mu)^2 / (2*sigma^2), producing the factor -(x - mu)/sigma^2.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 10, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.11",
    "course": "prob",
    "sec": "5.4",
    "marks": 5,
    "title": "Ross Theoretical 5.11: Stein's lemma and higher normal moments",
    "prompt": "Let Z ~ N(0, 1) and let g be a differentiable function. (a) Prove Stein's lemma: E[g'(Z)] = E[Z * g(Z)], assuming the expectations exist. (b) Use this identity with g(z) = z^n to show that E[Z^{n+1}] = n * E[Z^{n-1}]. (c) Find E[Z^4].",
    "approach": "Integrate E[g'(Z)] by parts using phi'(z) = -z * phi(z), then apply the recurrence relation to compute E[Z^4].",
    "solution": "(a) Let phi(z) = (1/sqrt(2*pi)) * exp(-z^2/2). Note that phi'(z) = -z * phi(z). Then: E[g'(Z)] = int_{-infty}^infty g'(z) phi(z) dz. Using integration by parts with u = phi(z) and dv = g'(z) dz (v = g(z)): E[g'(Z)] = [g(z) phi(z)]_{-infty}^infty - int_{-infty}^infty g(z) phi'(z) dz = 0 - int_{-infty}^infty g(z) (-z phi(z)) dz = int_{-infty}^infty z g(z) phi(z) dz = E[Z * g(Z)].\n(b) Set g(z) = z^n. Then g'(z) = n * z^{n-1}. Applying Stein's lemma: E[n * Z^{n-1}] = E[Z * Z^n] <=> n * E[Z^{n-1}] = E[Z^{n+1}].\n(c) For n = 3: E[Z^{3+1}] = E[Z^4] = 3 * E[Z^2]. Since Z ~ N(0, 1), E[Z^2] = 1. Therefore E[Z^4] = 3 * 1 = 3.",
    "trap": "The boundary term vanishes because standard normal density decay exp(-z^2/2) dominates any polynomial growth of g(z).",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 11, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.12",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Theoretical 5.12: Second moment of exponential variable via tail identity",
    "prompt": "Use the identity E[X^n] = int_0^infty n * x^{n-1} * P(X > x) dx (from Theoretical Exercise 5.5) to derive E[X^2] when X is exponential with parameter lambda.",
    "approach": "Set n = 2 and P(X > x) = exp(-lambda * x), then evaluate the integral directly or by parts.",
    "solution": "For X ~ Exp(lambda), the survival function is P(X > x) = exp(-lambda * x) for x >= 0. Applying the identity with n = 2: E[X^2] = int_0^infty 2 * x^{2-1} * P(X > x) dx = 2 int_0^infty x * exp(-lambda * x) dx. Using substitution u = lambda * x (dx = du / lambda): E[X^2] = 2 int_0^infty (u / lambda) * exp(-u) * (du / lambda) = (2 / lambda^2) int_0^infty u * exp(-u) du = (2 / lambda^2) * Gamma(2) = (2 / lambda^2) * 1! = 2 / lambda^2. Since E[X] = 1/lambda, this confirms Var(X) = E[X^2] - (E[X])^2 = 2/lambda^2 - 1/lambda^2 = 1/lambda^2.",
    "trap": "The factor of 2 in front comes from n = 2 in the tail integral formula.",
    "tests": [
      "c.prob.5.2.3",
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 12, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.13",
    "course": "prob",
    "sec": "5.3",
    "marks": 5,
    "title": "Ross Theoretical 5.13: Medians of uniform, normal, and exponential distributions",
    "prompt": "The median of a continuous random variable X with CDF F is the value m such that F(m) = 1/2. Find the median of X if X is: (a) uniform over (alpha, beta); (b) normal with parameters mu and sigma^2; (c) exponential with rate lambda.",
    "approach": "Solve F(m) = 1/2 for each distribution using its CDF.",
    "solution": "(a) For X ~ Unif(alpha, beta): F(x) = (x - alpha)/(beta - alpha) on (alpha, beta). Setting F(m) = 1/2 gives (m - alpha)/(beta - alpha) = 1/2 <=> m - alpha = (beta - alpha)/2 <=> m = (alpha + beta)/2 (the midpoint of the interval).\n(b) For X ~ N(mu, sigma^2): F(m) = Phi((m - mu)/sigma) = 1/2. Since Phi(0) = 1/2, we have (m - mu)/sigma = 0 <=> m = mu (coinciding with the mean by symmetry).\n(c) For X ~ Exp(lambda): F(m) = 1 - exp(-lambda * m) = 1/2 <=> exp(-lambda * m) = 1/2 <=> -lambda * m = -ln 2 <=> m = (ln 2) / lambda approx 0.69315 / lambda (strictly less than the mean 1/lambda due to positive skewness).",
    "trap": "In skewed distributions like the exponential, the median (ln 2)/lambda is strictly smaller than the mean 1/lambda.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.4.1",
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 13, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.14",
    "course": "prob",
    "sec": "5.3",
    "marks": 4,
    "title": "Ross Theoretical 5.14: Modes of uniform, normal, and exponential distributions",
    "prompt": "The mode of a continuous random variable having density f is the value x at which f(x) attains its global maximum. Compute the mode of X when X is: (a) uniform over (alpha, beta); (b) normal with parameters mu and sigma^2; (c) exponential with rate lambda.",
    "approach": "Maximize the density function f(x) over the support for each case.",
    "solution": "(a) For X ~ Unif(alpha, beta): f(x) = 1/(beta - alpha) is constant for all x in [alpha, beta]. Since f achieves its maximum simultaneously everywhere on its support, every point x in [alpha, beta] is a mode.\n(b) For X ~ N(mu, sigma^2): f(x) = (1/(sqrt(2*pi)*sigma)) * exp(-(x - mu)^2 / (2*sigma^2)). The negative quadratic in the exponent is maximized when (x - mu)^2 = 0, i.e., at x = mu. Thus the unique mode is x = mu.\n(c) For X ~ Exp(lambda): f(x) = lambda * exp(-lambda * x) for x >= 0. Since exp(-lambda * x) is strictly decreasing for x >= 0, f(x) achieves its maximum at the boundary x = 0 (where f(0) = lambda). Thus the unique mode is x = 0.",
    "trap": "For the exponential distribution, the mode is at the lower boundary x = 0, where the density height is largest.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.4.1",
      "c.prob.5.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 14, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.15",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Theoretical 5.15: Exponential scaling property via survival function",
    "prompt": "If X is an exponential random variable with parameter lambda and c > 0 is a constant, show that cX is an exponential random variable with parameter lambda / c.",
    "approach": "Compute the survival function P(cX > t) for t >= 0 and match with the exponential form.",
    "solution": "For any t >= 0: P(cX > t) = P(X > t/c). Since X ~ Exp(lambda), its survival function is P(X > s) = exp(-lambda * s) for s >= 0. Therefore: P(cX > t) = exp(-lambda * (t/c)) = exp(-(lambda / c) * t). The cumulative distribution function of cX is F_{cX}(t) = 1 - P(cX > t) = 1 - exp(-(lambda / c) * t) for t >= 0, and 0 for t < 0. Differentiating with respect to t gives f_{cX}(t) = (lambda / c) * exp(-(lambda / c) * t) for t >= 0. This is the CDF and PDF of an exponential random variable with parameter lambda / c.",
    "trap": "Dividing the rate parameter by c multiplies the mean by c: E[cX] = 1/(lambda/c) = c/lambda.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 15, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.16",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Theoretical 5.16: Hazard rate of a uniform random variable",
    "prompt": "Compute the hazard rate function lambda(t) of X when X is uniformly distributed over (0, A).",
    "approach": "Compute density f(t) and survival S(t) = 1 - F(t) on (0, A), then evaluate lambda(t) = f(t)/S(t).",
    "solution": "For X ~ Unif(0, A), the density is f(t) = 1/A for 0 < t < A, and the CDF is F(t) = t/A. The survival function is S(t) = 1 - F(t) = 1 - t/A = (A - t)/A for 0 < t < A. By definition, the hazard rate function is: lambda(t) = f(t) / S(t) = (1/A) / [(A - t)/A] = 1 / (A - t) for 0 < t < A. Note that as t -> A^-, lambda(t) -> infty, reflecting the fact that failure becomes certain as time approaches the upper bound A.",
    "trap": "The hazard rate is strictly increasing on (0, A) and blows up to infinity as t approaches A.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 16, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.17",
    "course": "prob",
    "sec": "5.5",
    "marks": 4,
    "title": "Ross Theoretical 5.17: Hazard rate of a scaled continuous random variable",
    "prompt": "If X is a continuous nonnegative random variable with hazard rate function lambda_X(t), compute the hazard rate function lambda_{aX}(t) of aX, where a > 0 is a constant.",
    "approach": "Relate the density and survival function of aX to those of X, then form the ratio.",
    "solution": "Let Y = aX with a > 0. The CDF of Y is F_Y(t) = P(aX <= t) = P(X <= t/a) = F_X(t/a). The survival function of Y is S_Y(t) = 1 - F_Y(t) = 1 - F_X(t/a) = S_X(t/a). The density function of Y is f_Y(t) = d/dt [F_X(t/a)] = (1/a) * f_X(t/a). By definition of the hazard rate function: lambda_Y(t) = f_Y(t) / S_Y(t) = [(1/a) * f_X(t/a)] / S_X(t/a) = (1/a) * [f_X(t/a) / S_X(t/a)] = (1/a) * lambda_X(t/a).",
    "trap": "Do not forget the factor (1/a) in front, which comes from differentiating the scaled argument t/a in the density.",
    "tests": [
      "c.prob.5.5.2",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 17, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.18",
    "course": "prob",
    "sec": "5.6",
    "marks": 4,
    "title": "Ross Theoretical 5.18: Normalization of the gamma density function",
    "prompt": "Verify that the gamma density function f(x) = (lambda * exp(-lambda*x) * (lambda*x)^{alpha - 1}) / Gamma(alpha) for x > 0 integrates to 1.",
    "approach": "Substitute u = lambda*x into the integral and apply the definition of the Euler gamma function Gamma(alpha).",
    "solution": "By definition, the gamma density is f(x) = (lambda * exp(-lambda*x) * (lambda*x)^{alpha - 1}) / Gamma(alpha) for x > 0. Consider the integral: int_0^infty f(x) dx = int_0^infty [lambda * exp(-lambda*x) * (lambda*x)^{alpha - 1} / Gamma(alpha)] dx. Make the substitution u = lambda * x, so that du = lambda * dx (or dx = du / lambda). When x = 0, u = 0; as x -> infty, u -> infty. The integral becomes: (1 / Gamma(alpha)) int_0^infty exp(-u) * u^{alpha - 1} * (lambda * dx) = (1 / Gamma(alpha)) int_0^infty exp(-u) * u^{alpha - 1} du. By the definition of the Euler gamma function, Gamma(alpha) = int_0^infty u^{alpha - 1} exp(-u) du. Therefore: int_0^infty f(x) dx = Gamma(alpha) / Gamma(alpha) = 1.",
    "trap": "The factor lambda dx combines directly to form du, leaving the pure dimensionless Gamma integral.",
    "tests": [
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 18, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.19",
    "course": "prob",
    "sec": "5.6",
    "marks": 4,
    "title": "Ross Theoretical 5.19: Higher moments of exponential variable via gamma density",
    "prompt": "If X is an exponential random variable with mean 1/lambda, show that E[X^k] = k! / lambda^k for k = 1, 2, ... using the gamma density function.",
    "approach": "Recognize the integrand x^k * lambda * exp(-lambda * x) as an unnormalized Gamma(k+1, lambda) integral.",
    "solution": "By definition of expectation: E[X^k] = int_0^infty x^k * lambda * exp(-lambda * x) dx. Multiply and divide by lambda^k: E[X^k] = (1 / lambda^k) int_0^infty (lambda * x)^k * lambda * exp(-lambda * x) dx. Make the substitution u = lambda * x (du = lambda * dx): E[X^k] = (1 / lambda^k) int_0^infty u^k * exp(-u) du. By definition of the gamma function, int_0^infty u^k exp(-u) du = Gamma(k + 1). For any positive integer k, Gamma(k + 1) = k!. Therefore: E[X^k] = Gamma(k + 1) / lambda^k = k! / lambda^k.",
    "trap": "Gamma(k + 1) = k!, not (k + 1)!.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 19, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.20",
    "course": "prob",
    "sec": "5.6",
    "marks": 4,
    "title": "Ross Theoretical 5.20: Variance of a gamma random variable",
    "prompt": "Verify that Var(X) = alpha / lambda^2 when X is a gamma random variable with parameters alpha and lambda.",
    "approach": "Compute E[X] and E[X^2] using Gamma(alpha + 1) = alpha * Gamma(alpha) and subtract (E[X])^2.",
    "solution": "For X ~ Gamma(alpha, lambda), the n-th moment is: E[X^n] = int_0^infty x^n [lambda * exp(-lambda*x) * (lambda*x)^{alpha - 1} / Gamma(alpha)] dx = [1 / (lambda^n * Gamma(alpha))] int_0^infty u^{n + alpha - 1} exp(-u) du = Gamma(alpha + n) / [lambda^n * Gamma(alpha)]. For n = 1: E[X] = Gamma(alpha + 1) / [lambda * Gamma(alpha)] = [alpha * Gamma(alpha)] / [lambda * Gamma(alpha)] = alpha / lambda. For n = 2: E[X^2] = Gamma(alpha + 2) / [lambda^2 * Gamma(alpha)] = [(alpha + 1) * alpha * Gamma(alpha)] / [lambda^2 * Gamma(alpha)] = alpha(alpha + 1) / lambda^2. Therefore, Var(X) = E[X^2] - (E[X])^2 = (alpha^2 + alpha)/lambda^2 - (alpha/lambda)^2 = alpha / lambda^2.",
    "trap": "Gamma(alpha + 2) = (alpha + 1)*alpha*Gamma(alpha) by applying the recurrence relation twice.",
    "tests": [
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 20, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.21",
    "course": "prob",
    "sec": "5.6",
    "marks": 5,
    "title": "Ross Theoretical 5.21: Evaluating Gamma(1/2) via the Gaussian integral",
    "prompt": "Show that Gamma(1/2) = sqrt(pi) by substituting y = sqrt(2x) in the definition of the gamma function and relating the result to the normal distribution.",
    "approach": "Substitute x = y^2 / 2 into Gamma(1/2) = int_0^infty x^{-1/2} exp(-x) dx and evaluate using the standard normal integral.",
    "solution": "By definition: Gamma(1/2) = int_0^infty exp(-x) * x^{-1/2} dx. Make the change of variables y = sqrt(2x), so that x = y^2 / 2 and dx = y dy. When x = 0, y = 0; as x -> infty, y -> infty. The factor x^{-1/2} becomes (y^2 / 2)^{-1/2} = sqrt(2) / y. Substituting into the integral: Gamma(1/2) = int_0^infty exp(-y^2 / 2) * (sqrt(2) / y) * (y dy) = sqrt(2) int_0^infty exp(-y^2 / 2) dy. By symmetry of the standard normal density: int_0^infty exp(-y^2 / 2) dy = (1/2) int_{-infty}^infty exp(-y^2 / 2) dy = (1/2) * sqrt(2*pi) = sqrt(pi / 2). Multiplying by sqrt(2): Gamma(1/2) = sqrt(2) * sqrt(pi / 2) = sqrt(pi).",
    "trap": "The factor y in dx = y dy cancels exactly with the y in the denominator of x^{-1/2} = sqrt(2)/y.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 21, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.22",
    "course": "prob",
    "sec": "5.6",
    "marks": 5,
    "title": "Ross Theoretical 5.22: Monotonicity of the gamma hazard rate function",
    "prompt": "Compute the hazard rate function of a gamma random variable with parameters alpha and lambda, and show that it is increasing when alpha >= 1 and decreasing when alpha <= 1.",
    "approach": "Write 1/lambda(t) = int_t^infty (x/t)^{alpha-1} exp(-lambda(x-t)) dx and examine its derivative with respect to t.",
    "solution": "For X ~ Gamma(alpha, lambda), the hazard rate is lambda(t) = f(t) / [1 - F(t)]. Take the reciprocal: 1 / lambda(t) = [int_t^infty f(x) dx] / f(t) = int_t^infty [f(x) / f(t)] dx. The density ratio is: f(x) / f(t) = [exp(-lambda*x) * x^{alpha - 1}] / [exp(-lambda*t) * t^{alpha - 1}] = exp(-lambda*(x - t)) * (x / t)^{alpha - 1}. Let u = x - t (so x = t + u, dx = du): 1 / lambda(t) = int_0^infty exp(-lambda*u) * (1 + u/t)^{alpha - 1} du. Examine the integrand as a function of t for fixed u > 0:\n- If alpha >= 1, alpha - 1 >= 0: as t increases, 1 + u/t decreases, so (1 + u/t)^{alpha - 1} is decreasing in t. Therefore 1/lambda(t) is decreasing in t, which means lambda(t) is INCREASING in t.\n- If alpha <= 1, alpha - 1 <= 0: as t increases, (1 + u/t)^{alpha - 1} increases, so 1/lambda(t) is increasing in t, which means lambda(t) is DECREASING in t.\n- When alpha = 1 (exponential), (1 + u/t)^0 = 1, so lambda(t) = lambda is constant.",
    "trap": "Working directly with 1/lambda(t) and substituting u = x - t simplifies the derivative enormously compared to differentiating f(t)/S(t) via quotient rule.",
    "tests": [
      "c.prob.5.5.2",
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 22, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theoretical.23",
    "course": "prob",
    "sec": "5.6",
    "marks": 5,
    "title": "Ross Theoretical 5.23: Monotonicity of the Weibull hazard rate function",
    "prompt": "Compute the hazard rate function of a Weibull random variable with CDF F(t) = 1 - exp(-(t/alpha)^beta) for t > 0, and show that it is increasing when beta >= 1 and decreasing when beta <= 1.",
    "approach": "Differentiate F(t) to find f(t), divide by S(t) = exp(-(t/alpha)^beta), and differentiate lambda(t).",
    "solution": "The survival function is S(t) = 1 - F(t) = exp(-(t/alpha)^beta) for t > 0. Differentiating F(t) gives the density: f(t) = F'(t) = exp(-(t/alpha)^beta) * (beta / alpha) * (t / alpha)^{beta - 1} = (beta / alpha^beta) * t^{beta - 1} * exp(-(t/alpha)^beta). The hazard rate function is: lambda(t) = f(t) / S(t) = (beta / alpha^beta) * t^{beta - 1} for t > 0. Differentiating lambda(t) with respect to t: lambda'(t) = (beta / alpha^beta) * (beta - 1) * t^{beta - 2}.\n- When beta >= 1: beta - 1 >= 0, so lambda'(t) >= 0 for all t > 0, meaning the hazard rate is increasing.\n- When beta <= 1: beta - 1 <= 0, so lambda'(t) <= 0 for all t > 0, meaning the hazard rate is decreasing.\n- When beta = 1: lambda(t) = 1/alpha is constant (the exponential distribution).",
    "trap": "The Weibull hazard rate is a simple power function (beta/alpha^beta)*t^{beta-1}; the exponential factors cancel completely.",
    "tests": [
      "c.prob.5.5.2",
      "c.prob.5.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 23, PDF p. 239."
  },
  {
    "id": "w.prob.5.ross.theor.24",
    "course": "prob",
    "sec": "5.6",
    "marks": 6,
    "title": "Ross Theor 24: A straight-line Weibull plot",
    "prompt": "A Weibull lifetime with zero location has $F(x)=1-e^{-(x/\\alpha)^\\beta}$ for x>0. Show the plot of $\\log[-\\log(1-F(x))]$ against log x is a straight line of slope beta; show about 63.2 percent of observations lie below alpha.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Take the survival logarithm: $-\\log(1-F(x))=(x/\\alpha)^\\beta$. Taking another logarithm yields $\\log[-\\log(1-F(x))]=\\beta\\log x-\\beta\\log\\alpha$, a straight line with slope beta. At x=alpha the CDF is $1-e^{-1}\\approx.63212$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 24."
  },
  {
    "id": "w.prob.5.ross.theoretical.25",
    "course": "prob",
    "sec": "5.6",
    "marks": 5,
    "title": "Ross Theoretical 5.25: Weibull connection to the standard exponential distribution",
    "prompt": "Let X be a Weibull random variable with parameters nu = 0, alpha, and beta (CDF F_X(x) = 1 - exp(-(x/alpha)^beta) for x > 0). Show that Y = (X / alpha)^beta is an exponential random variable with parameter lambda = 1, and vice versa.",
    "approach": "Find P(Y > y) for y > 0 by expressing it in terms of X.",
    "solution": "For y > 0: P(Y > y) = P((X / alpha)^beta > y) = P(X / alpha > y^{1/beta}) = P(X > alpha * y^{1/beta}). Since X is Weibull with survival S_X(x) = exp(-(x / alpha)^beta): P(X > alpha * y^{1/beta}) = exp(-((alpha * y^{1/beta}) / alpha)^beta) = exp(-(y^{1/beta})^beta) = exp(-y). Thus the survival function of Y is P(Y > y) = exp(-y) for y >= 0. This is the survival function of an exponential random variable with parameter lambda = 1.\nConversely, if Y ~ Exp(1), then X = alpha * Y^{1/beta} has survival: P(X > x) = P(alpha * Y^{1/beta} > x) = P(Y > (x / alpha)^beta) = exp(-(x / alpha)^beta), which is the Weibull distribution.",
    "trap": "The transformation Y = (X/alpha)^beta is strictly increasing for positive variables, preserving tail events directly.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.6.2",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 25, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.26",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Theoretical 5.26: Inverse transform sampling theorem",
    "prompt": "Let F be a strictly increasing continuous distribution function. If U is uniformly distributed on (0, 1), find the distribution function of Y = F^{-1}(U).",
    "approach": "Compute P(Y <= y) = P(F^{-1}(U) <= y) and apply F to both sides.",
    "solution": "Since F is continuous and strictly increasing, its inverse function F^{-1} exists and is also strictly increasing. For any real number y: F_Y(y) = P(Y <= y) = P(F^{-1}(U) <= y). Because F is strictly increasing, the event {F^{-1}(U) <= y} is identical to the event {F(F^{-1}(U)) <= F(y)}, which simplifies to {U <= F(y)}. Since U ~ Unif(0, 1), P(U <= u) = u for any u in (0, 1). Here 0 <= F(y) <= 1, so: P(U <= F(y)) = F(y). Thus F_Y(y) = F(y) for all real y. This proves that Y = F^{-1}(U) has cumulative distribution function F, which is the foundational principle of inverse transform sampling.",
    "trap": "Strict monotonicity ensures F(F^{-1}(U)) = U and preserves inequalities without ambiguity.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 26, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.27",
    "course": "prob",
    "sec": "5.3",
    "marks": 4,
    "title": "Ross Theoretical 5.27: Standardizing a general uniform variable",
    "prompt": "If X is uniformly distributed over (alpha, beta), find a linear transformation Y = cX + d that is uniformly distributed over (0, 1).",
    "approach": "Subtract the lower limit alpha and divide by the interval length beta - alpha.",
    "solution": "Let X ~ Unif(alpha, beta). The support is (alpha, beta). Consider the linear transformation: Y = (X - alpha) / (beta - alpha). Since beta > alpha, the scale factor 1/(beta - alpha) is positive. For 0 < y < 1: P(Y <= y) = P((X - alpha)/(beta - alpha) <= y) = P(X - alpha <= y(beta - alpha)) = P(X <= alpha + y(beta - alpha)). For X ~ Unif(alpha, beta), the CDF is F_X(x) = (x - alpha)/(beta - alpha) for alpha < x < beta. Thus: P(Y <= y) = [(alpha + y(beta - alpha)) - alpha] / (beta - alpha) = [y(beta - alpha)] / (beta - alpha) = y. For y <= 0, P(Y <= y) = 0; for y >= 1, P(Y <= y) = 1. Therefore Y ~ Unif(0, 1). The required linear relation is Y = (X - alpha) / (beta - alpha).",
    "trap": "Check endpoints: when X = alpha, Y = 0; when X = beta, Y = 1.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 27, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.28",
    "course": "prob",
    "sec": "5.6",
    "marks": 5,
    "title": "Ross Theoretical 5.28: Unimodal, U-shaped, and flat beta distribution modes",
    "prompt": "Consider the Beta(a, b) distribution with density f(x) = (1/B(a, b)) * x^{a-1}(1 - x)^{b-1} for 0 <= x <= 1. Prove that: (a) when a > 1 and b > 1, the density is strictly unimodal with mode (a - 1) / (a + b - 2); (b) when a <= 1, b <= 1, and a + b < 2, the density is U-shaped with modes at 0 and/or 1; (c) when a = b = 1, every point in [0, 1] is a mode.",
    "approach": "Analyze the logarithm of the density ln f(x) = (a - 1) ln x + (b - 1) ln(1 - x) + C and its derivative.",
    "solution": "Ignore the positive normalizing constant 1/B(a, b) and consider g(x) = ln f(x) = (a - 1) ln x + (b - 1) ln(1 - x) on (0, 1). The derivative is g'(x) = (a - 1)/x - (b - 1)/(1 - x) = [(a - 1)(1 - x) - (b - 1)x] / [x(1 - x)] = [(a - 1) - (a + b - 2)x] / [x(1 - x)].\n(a) When a > 1 and b > 1: a - 1 > 0 and a + b - 2 > 0. Setting g'(x) = 0 yields unique critical point x_0 = (a - 1)/(a + b - 2). Since 0 < a - 1 < a + b - 2, x_0 in (0, 1). For x < x_0, g'(x) > 0; for x > x_0, g'(x) < 0. Thus f has a unique interior mode at (a - 1)/(a + b - 2).\n(b) When a <= 1, b <= 1 with a + b < 2: at least one exponent is strictly negative. As x -> 0^+, x^{a-1} -> infty (if a < 1), and as x -> 1^-, (1 - x)^{b-1} -> infty (if b < 1). The density is U-shaped (convex) with infinities at the boundaries, so the modes are at 0 and/or 1.\n(c) When a = 1 and b = 1: f(x) = 1/B(1, 1) = 1 for all x in [0, 1] (Unif(0, 1)). Every point in [0, 1] is a mode.",
    "trap": "When exponents a - 1 or b - 1 are negative, the density blows up to infinity at the endpoints, making the boundaries the modes.",
    "tests": [
      "c.prob.5.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 28, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.29",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Theoretical 5.29: Probability integral transformation theorem",
    "prompt": "Let X be a continuous random variable having cumulative distribution function F. Define Y = F(X). Show that Y is uniformly distributed over (0, 1).",
    "approach": "Compute P(Y <= y) = P(F(X) <= y) for 0 < y < 1 using the continuity and monotonicity of F.",
    "solution": "Since F is the CDF of a continuous random variable, F is continuous and non-decreasing with range [0, 1]. For any y in (0, 1), define the generalized inverse F^{-1}(y) = inf{x: F(x) >= y}. Because F is continuous, F(F^{-1}(y)) = y. Moreover, the event {F(X) <= y} is equivalent to {X <= F^{-1}(y)}. Therefore: P(Y <= y) = P(F(X) <= y) = P(X <= F^{-1}(y)) = F(F^{-1}(y)) = y. For y <= 0, P(Y <= y) = 0; for y >= 1, P(Y <= y) = 1. A random variable with CDF F_Y(y) = y for 0 < y < 1 is by definition uniformly distributed on (0, 1). Therefore Y ~ Unif(0, 1).",
    "trap": "Continuity of F is essential; if F has jump discontinuities, Y cannot be continuous uniform.",
    "tests": [
      "c.prob.5.3.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 29, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.30",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Theoretical 5.30: General linear density transformation theorem",
    "prompt": "Let X have probability density f_X. Find the probability density function of Y = aX + b, where a != 0 and b are constants.",
    "approach": "Use the CDF method: split into cases a > 0 and a < 0, then differentiate with respect to y.",
    "solution": "Let Y = aX + b with a != 0.\n- Case 1: a > 0. F_Y(y) = P(aX + b <= y) = P(X <= (y - b)/a) = F_X((y - b)/a). Differentiating with respect to y: f_Y(y) = d/dy [F_X((y - b)/a)] = f_X((y - b)/a) * (1/a).\n- Case 2: a < 0. F_Y(y) = P(aX + b <= y) = P(X >= (y - b)/a) = 1 - F_X((y - b)/a). Differentiating with respect to y: f_Y(y) = -f_X((y - b)/a) * (1/a) = f_X((y - b)/a) * (-1/a) = f_X((y - b)/a) * (1/|a|).\nCombining both cases: f_Y(y) = (1 / |a|) * f_X((y - b) / a) for -infty < y < infty.",
    "trap": "The factor is 1/|a| with absolute value; when a < 0, the inequality reverses and the minus sign cancels with 1/a.",
    "tests": [
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 30, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.31",
    "course": "prob",
    "sec": "5.7",
    "marks": 4,
    "title": "Ross Theoretical 5.31: Derivation of the lognormal density function",
    "prompt": "Find the probability density function of Y = exp(X) when X is normally distributed with parameters mu and sigma^2. (The random variable Y is said to have a lognormal distribution).",
    "approach": "Use the monotonic transformation theorem with strictly increasing function g(x) = exp(x).",
    "solution": "The transformation is Y = g(X) = exp(X), which is strictly increasing from (-infty, infty) onto (0, infty). The inverse is x = g^{-1}(y) = ln y for y > 0, with derivative dx/dy = 1/y. Since X ~ N(mu, sigma^2), its density is f_X(x) = (1 / (sqrt(2*pi) * sigma)) * exp(-(x - mu)^2 / (2*sigma^2)). By the transformation formula, for y > 0: f_Y(y) = f_X(ln y) * |dx/dy| = (1 / (sqrt(2*pi) * sigma)) * exp(-(ln y - mu)^2 / (2*sigma^2)) * (1/y) = (1 / (sqrt(2*pi) * sigma * y)) * exp(-(ln y - mu)^2 / (2*sigma^2)), and f_Y(y) = 0 for y <= 0.",
    "trap": "The support of Y is y > 0; remember the 1/y term in the denominator from dx/dy = 1/y.",
    "tests": [
      "c.prob.5.4.1",
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 31, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.32",
    "course": "prob",
    "sec": "5.7",
    "marks": 6,
    "title": "Ross Theoretical 5.32: Probability that two random integers are relatively prime (Legendre theorem)",
    "prompt": "Let X and Y be independent random variables uniformly distributed on {1, 2, ..., N} for very large N. Let D = gcd(X, Y) and Q_k = P(D = k). (a) Give a heuristic argument that Q_k = (1/k^2) * Q_1. (b) Use part (a) and sum_{k=1}^infty (1/k^2) = pi^2/6 to show that Q_1 = 6/pi^2. (c) Argue that prod_{i=1}^infty (1 - 1/P_i^2) = 6/pi^2 where P_i is the i-th prime.",
    "approach": "For gcd(X, Y) = k, k must divide both X and Y (prob 1/k^2), and X/k, Y/k must be coprime (prob Q_1). Sum over all k = 1 to infty.",
    "solution": "(a) D = gcd(X, Y) = k if and only if k divides X, k divides Y, and gcd(X/k, Y/k) = 1. For large N, the event that k divides X has probability approx 1/k, and by independence, the probability that k divides both X and Y is (1/k) * (1/k) = 1/k^2. Conditioned on k dividing both, X/k and Y/k are effectively uniformly distributed integers whose greatest common divisor is 1 with probability Q_1. Thus Q_k = P(D = k) = (1/k^2) * Q_1.\n(b) Since D must take some positive integer value k in {1, 2, 3, ...}, the events {D = k} partition the sample space: sum_{k=1}^infty Q_k = 1 <=> sum_{k=1}^infty (1/k^2) * Q_1 = 1 <=> Q_1 * sum_{k=1}^infty (1/k^2) = 1. Using the Basel identity sum_{k=1}^infty 1/k^2 = pi^2/6: Q_1 * (pi^2 / 6) = 1 <=> Q_1 = 6 / pi^2 approx 0.6079 (approx 60.8%).\n(c) X and Y are relatively prime if and only if they share no common prime factor. For any prime P_i, the probability that P_i divides both X and Y is 1/P_i^2. Thus the probability that P_i does NOT divide both is 1 - 1/P_i^2. Assuming independence across distinct prime factors: Q_1 = prod_{i=1}^infty (1 - 1/P_i^2) = prod_{i=1}^infty (P_i^2 - 1) / P_i^2. Equating this to Q_1 from part (b) gives the Euler product identity: prod_{i=1}^infty (1 - 1/P_i^2) = 6 / pi^2.",
    "trap": "Heuristic independence of divisibility across primes mirrors Euler product formula for the Riemann zeta function zeta(2) = pi^2/6.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 32, PDF p. 240."
  },
  {
    "id": "w.prob.5.ross.theoretical.33",
    "course": "prob",
    "sec": "5.7",
    "marks": 5,
    "title": "Ross Theoretical 5.33: Transformation theorem for strictly decreasing functions",
    "prompt": "Prove Theorem 7.1 when g(x) is a strictly decreasing differentiable function: show that f_Y(y) = f_X(g^{-1}(y)) * |d/dy g^{-1}(y)|.",
    "approach": "When g is decreasing, {g(X) <= y} = {X >= g^{-1}(y)}. Differentiate 1 - F_X(g^{-1}(y)) with respect to y.",
    "solution": "Let Y = g(X) where g is strictly decreasing and differentiable. For y in the range of g, there is a unique x = g^{-1}(y) such that g(x) = y. Since g is strictly decreasing, the inequality g(X) <= y is equivalent to X >= g^{-1}(y). Thus the CDF of Y is: F_Y(y) = P(Y <= y) = P(g(X) <= y) = P(X >= g^{-1}(y)) = 1 - F_X(g^{-1}(y)). Differentiating both sides with respect to y using the chain rule: f_Y(y) = d/dy [1 - F_X(g^{-1}(y))] = 0 - f_X(g^{-1}(y)) * d/dy [g^{-1}(y)]. Since g is strictly decreasing, its derivative g'(x) < 0, and the derivative of the inverse is d/dy [g^{-1}(y)] = 1 / g'(g^{-1}(y)) < 0. Therefore -d/dy [g^{-1}(y)] = |d/dy g^{-1}(y)|. Substituting this into the density expression: f_Y(y) = f_X(g^{-1}(y)) * |d/dy g^{-1}(y)|. This completes the proof of Theorem 7.1 for the decreasing case.",
    "trap": "The minus sign from differentiating 1 - F_X combines with the negative sign of the derivative of the decreasing inverse to yield a strictly positive density.",
    "tests": [
      "c.prob.5.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 5, Theoretical Exercise 33, PDF pp. 240–241."
  },
  {
    "id": "w.prob.5.ross.selftest.1",
    "course": "prob",
    "sec": "5.1",
    "marks": 6,
    "title": "Ross Self-Test 1: Playing time from a step density",
    "prompt": "Playing time X in minutes has density .025 on (10,20), .05 on (20,30), and .025 on (30,40), zero elsewhere. Find chances of (a) more than 15 minutes; (b) between 20 and 35; (c) less than 30; (d) more than 36.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Use rectangle areas: (a) $.025(5)+.05(10)+.025(10)=.875$. (b) $.05(10)+.025(5)=.625$. (c) $.025(10)+.05(10)=.75$. (d) $.025(4)=.10$. Endpoint probabilities are zero.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 1."
  },
  {
    "id": "w.prob.5.ross.selftest.6",
    "course": "prob",
    "sec": "5.3",
    "marks": 6,
    "title": "Ross Self-Test 6: Lowest-bid construction contract",
    "prompt": "You pay a subcontractor 100000 dollars if you win. The lowest competing bid is uniform between 70000 and 140000 dollars. What bid maximizes expected profit?",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "In thousands of dollars, a bid b between 100 and 140 yields expected profit $(b-100)(140-b)/70$. Its derivative is $(240-2b)/70$, zero at b=120, where the concave quadratic is maximized. Thus bid 120000 dollars. Bids below 100 have nonpositive profit; at or above 140 you never win, apart from a zero-probability tie.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 6."
  },
  {
    "id": "w.prob.5.ross.selftest.10",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 10: Normal tire lifetime",
    "prompt": "A tire lifetime is normal with mean 34000 miles and standard deviation 4000. Find (a) chance exceeding 40000; (b) chance between 30000 and 35000; (c) chance exceeding 40000 given survival to 30000.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) $1-\\Phi(1.5)\\approx.06681$. (b) $\\Phi(.25)-\\Phi(-1)\\approx.44005$. (c) Since exceeding 40000 implies exceeding 30000, divide the tail probabilities: $[1-\\Phi(1.5)]/[1-\\Phi(-1)]\\approx.07941$. A normal lifetime is not memoryless.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 10."
  },
  {
    "id": "w.prob.5.ross.selftest.2",
    "course": "prob",
    "sec": "5.1",
    "marks": 6,
    "title": "Ross Self-Test 2: Normalize a power density",
    "prompt": "$X$ has density $cx^n$ on $(0,1)$, zero elsewhere, with $n>-1$. Find (a) $c$; (b) $P(X>x)$ for $0<x<1$.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) $1=c\\int_0^1t^n dt=c/(n+1)$, so $c=n+1$. (b) $P(X>x)=\\int_x^1(n+1)t^n dt=1-x^{n+1}$. The restriction $n>-1$ makes the integral finite.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 2."
  },
  {
    "id": "w.prob.5.ross.selftest.3",
    "course": "prob",
    "sec": "5.1",
    "marks": 6,
    "title": "Ross Self-Test 3: Moments of a fourth-power density",
    "prompt": "$X$ has density $cx^4$ on $(0,2)$. Find its mean and variance.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Normalization gives $c\\int_0^2x^4dx=c(32/5)=1$, so $c=5/32$. Then $E[X]=(5/32)(2^6/6)=5/3$, and $E[X^2]=(5/32)(2^7/7)=20/7$. Thus variance is $20/7-25/9=5/63$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 3."
  },
  {
    "id": "w.prob.5.ross.selftest.4",
    "course": "prob",
    "sec": "5.1",
    "marks": 6,
    "title": "Ross Self-Test 4: Find a density from its mean",
    "prompt": "$f(x)=ax+bx^2$ on $(0,1)$, zero elsewhere, and $E[X]=.6$. Find (a) $P(X<1/2)$; (b) $\\operatorname{Var}(X)$.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Normalization gives $a/2+b/3=1$; the mean gives $a/3+b/4=3/5$. Solving gives $a=18/5$, $b=-12/5$. This is nonnegative on $(0,1)$. (a) Integrating gives $a/8+b/24=7/20$. (b) $E[X^2]=a/4+b/5=21/50$. Subtract $(3/5)^2$ to get variance $3/50$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 4."
  },
  {
    "id": "w.prob.5.ross.selftest.5",
    "course": "prob",
    "sec": "5.3",
    "marks": 6,
    "title": "Ross Self-Test 5: A discrete uniform from a continuous uniform",
    "prompt": "$U$ is uniform$(0,1)$ and $X=\\lfloor nU\\rfloor+1$ for positive integer $n$. Show $X$ is equally likely to be each of $1,\\ldots,n$.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "$X=i$ exactly when $(i-1)/n\\le U<i/n$. This interval has length $1/n$, which is its probability under a uniform density. Endpoint conventions do not matter because each endpoint has probability zero.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 5."
  },
  {
    "id": "w.prob.5.ross.selftest.7",
    "course": "prob",
    "sec": "5.3",
    "marks": 6,
    "title": "Ross Self-Test 7: Three rounds sharing one uniform draw",
    "prompt": "A single uniform$(0,1)$ value $U$ determines all rounds. Round 1 succeeds if $U>.1$, round 2 if $U>.2$, round 3 if $U>.3$. Find (a) first-round success; (b) second-round success given the first; (c) third-round success given the first two; (d) chance of winning all three.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) $.9$. (b) $P(U>.2\\mid U>.1)=.8/.9=8/9$. (c) $P(U>.3\\mid U>.2)=.7/.8=7/8$. (d) Winning means simply $U>.3$, so $.7$. The chain product $.9(8/9)(7/8)=.7$ agrees. The rounds are dependent because they use the same draw.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 7."
  },
  {
    "id": "w.prob.5.ross.selftest.8",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 8: Normal IQ model",
    "prompt": "An IQ score is approximately normal with mean 100 and standard deviation 15. Find the chance it is (a) above 125; (b) between 90 and 110.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Standardize by $Z=(X-100)/15$. (a) $1-\\Phi(25/15)\\approx.04779$. (b) $\\Phi(10/15)-\\Phi(-10/15)=2\\Phi(2/3)-1\\approx.4950$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 8."
  },
  {
    "id": "w.prob.5.ross.selftest.9",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 9: Leave in time with 95 percent confidence",
    "prompt": "Travel time is normal with mean 40 minutes and standard deviation 7 minutes. For a 1 p.m. appointment, what latest departure time gives at least a .95 chance of arriving on time?",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "The 95th percentile of travel time is $40+7\\Phi^{-1}(.95)\\approx40+7(1.64485)=51.514$ minutes. Leave that many minutes before 1 p.m.: about 12:08:29 p.m. Rounding to whole minutes, leave by 12:08 p.m. to retain at least .95 probability.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 9."
  },
  {
    "id": "w.prob.5.ross.selftest.11",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 11: Normal rainfall over independent years",
    "prompt": "Annual rainfall is modeled as normal$(40.2,8.4^2)$ inches, independently across years. Find (a) chance next year exceeds 44 inches; (b) chance exactly three of seven years exceed 44.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) $p=1-\\Phi((44-40.2)/8.4)=1-\\Phi(19/42)$. (b) The exceedance count is binomial$(7,p)$, giving $\\binom73p^3(1-p)^4$. The independence across years is needed for this binomial formula.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 11."
  },
  {
    "id": "w.prob.5.ross.selftest.12",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 12: Salary categories and normal approximations",
    "prompt": "Historical category percentages imply women have probability $.34$ of earning at least 25000 dollars and $.534$ of at least 20000; men have probabilities $.587$ and $.745$ respectively. Independent random samples of 200 men and 200 women are chosen. Approximate (a) at least 70 women earning 25000 or more; (b) at most 60 percent of men earning 25000 or more; (c) at least three-fourths of men and at least half of women earning 20000 or more.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Use binomial means $np$, variances $np(1-p)$, and a half-unit continuity correction. (a) $1-\\Phi((69.5-68)/\\sqrt{200(.34)(.66)})$. (b) At most 120 men: $\\Phi((120.5-117.4)/\\sqrt{200(.587)(.413)})$. (c) At least 150 men and at least 100 women. Independence of the samples lets us multiply $[1-\\Phi((149.5-149)/\\sqrt{200(.745)(.255)})][1-\\Phi((99.5-106.8)/\\sqrt{200(.534)(.466)})]$. These are approximations under independent sampling using the historical percentages as model probabilities.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.3"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 12."
  },
  {
    "id": "w.prob.5.ross.selftest.13",
    "course": "prob",
    "sec": "5.5",
    "marks": 6,
    "title": "Ross Self-Test 13: Residual exponential service time",
    "prompt": "A bank service time is exponential with mean five minutes. You arrive while a customer is being served. What is the probability service continues another four minutes?",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "For a fixed elapsed service duration $s$, memorylessness gives $P(T>s+4\\mid T>s)=e^{-4/5}\\approx.4493$. The answer does not depend on $s$, so it also applies when the elapsed duration is unobserved, under the exponential service model.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.5.2"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 13."
  },
  {
    "id": "w.prob.5.ross.selftest.14",
    "course": "prob",
    "sec": "5.5",
    "marks": 6,
    "title": "Ross Self-Test 14: A squared-exponential survival",
    "prompt": "$F(x)=1-e^{-x^2}$ for $x>0$, and zero for $x\\le0$. Find (a) $P(X>2)$; (b) $P(1<X<3)$; (c) its hazard rate; (d) its mean; (e) its variance.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) $e^{-4}$. (b) $e^{-1}-e^{-9}$. (c) The density is $2xe^{-x^2}$, so hazard $h(x)=2x$. (d) The tail-integral identity gives $E[X]=\\int_0^\\infty e^{-x^2}dx=\\sqrt\\pi/2$. (e) $E[X^2]=\\int_0^\\infty2xe^{-x^2}dx=1$, so variance $1-\\pi/4$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.5.2"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 14."
  },
  {
    "id": "w.prob.5.ross.selftest.15",
    "course": "prob",
    "sec": "5.5",
    "marks": 6,
    "title": "Ross Self-Test 15: Piecewise hazard of a washing machine",
    "prompt": "A lifetime has hazard $.2$ for $0<t<2$, $.2+.3(t-2)$ for $2\\le t<5$, and $1.1$ after 5. Find (a) probability of working after six years; (b) probability of failing during years six to eight given survival to six.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) Survival is $\\exp[-\\int_0^6h(t)dt]$. The integrated hazard is $.4+[.2(3)+.15(3)^2]+1.1=3.45$, giving $e^{-3.45}$. (b) The additional integrated hazard from 6 to 8 is $1.1(2)=2.2$, so the conditional failure probability is $1-e^{-2.2}$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.5.2"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 15."
  },
  {
    "id": "w.prob.5.ross.selftest.16",
    "course": "prob",
    "sec": "5.6",
    "marks": 6,
    "title": "Ross Self-Test 16: Reciprocal of a Cauchy",
    "prompt": "If $X$ has standard Cauchy density $1/[\\pi(1+x^2)]$, show $1/X$ has the same density.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "For $Y=1/X$, the inverse is $x=1/y$ and the absolute derivative is $1/y^2$. Thus $f_Y(y)=[1/(\\pi(1+1/y^2))]/y^2=1/[\\pi(1+y^2)]$ for $y\\ne0$. Since $P(X=0)=0$ and a density value at a single point changes no probabilities, this is a standard Cauchy law.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.6.2"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 16."
  },
  {
    "id": "w.prob.5.ross.selftest.17",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 17: Roulette profit after many bets",
    "prompt": "Each independent one-dollar bet wins a net 35 dollars with probability $1/38$, and otherwise loses one dollar. Approximate the chance of being ahead after (a) 34; (b) 1000; (c) 100000 bets.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "If $W\\sim\\operatorname{Bin}(n,1/38)$ is the win count, net profit is $36W-n$, so being ahead means $W\\ge\\lfloor n/36\\rfloor+1$. (a) At $n=34$, one win suffices; exact probability $1-(37/38)^{34}\\approx.5961$ is preferable to a normal approximation with a mean below 1. (b,c) For $n=1000$ or $100000$, let $k=28$ or $2778$ respectively. The continuity-corrected normal approximation is $1-\\Phi((k-.5-n/38)/\\sqrt{n(1/38)(37/38)})$. The exact binomial tail $\\sum_{j=k}^n\\binom nj(1/38)^j(37/38)^{n-j}$ specifies the same event without approximation.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.3"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 17."
  },
  {
    "id": "w.prob.5.ross.selftest.18",
    "course": "prob",
    "sec": "5.5",
    "marks": 6,
    "title": "Ross Self-Test 18: Survival of a mixed battery type",
    "prompt": "A random battery is type $i$ with probability $p_i$, $p_1+p_2=1$. Conditional on its type, lifetime is exponential rate $\\lambda_i$. Given survival to $t$, find the chance of surviving another $s$ hours.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "The unconditional survival is $S(u)=p_1e^{-\\lambda_1u}+p_2e^{-\\lambda_2u}$. Therefore the answer is $S(t+s)/S(t)$. Equivalently the posterior type weights are $p_ie^{-\\lambda_it}/S(t)$ and we average $e^{-\\lambda_is}$ with those weights. The mixture generally lacks memorylessness because long survival shifts probability toward the longer-lived type.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.5.2"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 18."
  },
  {
    "id": "w.prob.5.ross.selftest.19",
    "course": "prob",
    "sec": "5.5",
    "marks": 6,
    "title": "Ross Self-Test 19: A threshold classification model",
    "prompt": "In a hypothetical model, an evidence score is exponential with mean 1 if innocent and mean 2 if guilty. A decision rule declares guilt when $X>c$. (a) Choose $c$ so an innocent person is not convicted with probability .95; (b) find the guilty-person conviction probability using that threshold.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) Require $1-e^{-c}=.95$, hence $c=-\\ln(.05)=\\ln20$. (b) The guilty-score rate is $1/2$, so $P(X>c\\mid\\text{guilty})=e^{-c/2}=1/\\sqrt{20}\\approx.2236$. These are conditional classification rates under the stated hypothetical distributions, not posterior guilt probabilities.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.5.1",
      "c.prob.5.5.2"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 19."
  },
  {
    "id": "w.prob.5.ross.selftest.20",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 20: Positive part of a normal variable",
    "prompt": "Write $y^+=\\max(y,0)$. (a) Find $E[(Z-c)^+]$ for standard normal $Z$; (b) extend to normal $X$ with mean $\\mu$ and variance $\\sigma^2$, $\\sigma>0$.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) Integrate $\\int_c^\\infty(z-c)\\phi(z)dz$. Since $\\phi\\prime(z)=-z\\phi(z)$, the first integral is $\\phi(c)$; the other is $c[1-\\Phi(c)]$. Thus $\\phi(c)-c[1-\\Phi(c)]$. (b) Set $a=(c-\\mu)/\\sigma$ and use $(X-c)^+=\\sigma(Z-a)^+$. The result is $\\sigma\\phi(a)+(\\mu-c)[1-\\Phi(a)]$. For $\\sigma=0$ it is $(\\mu-c)^+$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 20."
  },
  {
    "id": "w.prob.5.ross.selftest.21",
    "course": "prob",
    "sec": "5.4",
    "marks": 6,
    "title": "Ross Self-Test 21: Symmetry of the normal CDF",
    "prompt": "Which identities hold for all real $x$: (a) $\\Phi(-x)=\\Phi(x)$; (b) $\\Phi(x)+\\Phi(-x)=1$; (c) $\\Phi(-x)=1/\\Phi(x)$?",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "Symmetry of the standard normal density gives $\\Phi(-x)=1-\\Phi(x)$. Thus (b) is true for every $x$. (a) holds only at $x=0$. (c) is false: its right side exceeds 1 at every finite $x$, whereas the left side is below 1.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 21."
  },
  {
    "id": "w.prob.5.ross.selftest.22",
    "course": "prob",
    "sec": "5.3",
    "marks": 6,
    "title": "Ross Self-Test 22: Transformations of a uniform draw",
    "prompt": "$U$ is uniform$(0,1)$. (a) Identify $bU$ for $b>0$ and $b<0$; (b) identify $a+U$; (c) produce a uniform$(a,b)$ value for $a<b$; (d,e) identify $\\min(U,1-U)$ and $\\max(U,1-U)$.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) Scaling maps intervals with constant density to constant density: uniform$(0,b)$ if $b>0$, uniform$(b,0)$ if $b<0$. (b) Translating gives uniform$(a,a+1)$. (c) $a+(b-a)U$ works. (d) For $0<t<1/2$, $P(\\min(U,1-U)>t)=P(t<U<1-t)=1-2t$, so the minimum is uniform$(0,1/2)$. (e) The maximum equals one minus the minimum, so uniform$(1/2,1)$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 22."
  },
  {
    "id": "w.prob.5.ross.selftest.23",
    "course": "prob",
    "sec": "5.1",
    "marks": 6,
    "title": "Ross Self-Test 23: An exponential-flat-exponential density",
    "prompt": "$f(x)=e^x/3$ for $x<0$, $1/3$ for $0\\le x<1$, and $e^{-(x-1)}/3$ for $x\\ge1$. (a) Verify it is a density; (b) find its mean.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) It is nonnegative and each of the three pieces integrates to $1/3$, giving total 1. (b) The three contributions to the mean are $\\frac13\\int_{-\\infty}^0xe^xdx=-1/3$, $\\frac13\\int_0^1x\\,dx=1/6$, and $\\frac13\\int_1^\\infty xe^{-(x-1)}dx=2/3$. Their sum is $1/2$. Absolute first moment is finite, so this expectation exists.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 23."
  },
  {
    "id": "w.prob.5.ross.selftest.24",
    "course": "prob",
    "sec": "5.6",
    "marks": 6,
    "title": "Ross Self-Test 24: A mixture-shaped exponential density",
    "prompt": "For $\\theta>0$, let $f(x)=\\frac{\\theta^2}{1+\\theta}(1+x)e^{-\\theta x}$, $x>0$. (a) Verify normalization; (b) find its mean; (c) find its variance.",
    "approach": "Identify the event and the density or distribution needed, then show the calculation.",
    "solution": "(a) The two integrals are $1/\\theta$ and $1/\\theta^2$; multiplying their sum by $\\theta^2/(1+\\theta)$ gives 1. (b) Using $\\int_0^\\infty x^ke^{-\\theta x}dx=k!/\\theta^{k+1}$, $E[X]=\\frac{\\theta^2}{1+\\theta}(1/\\theta^2+2/\\theta^3)=(\\theta+2)/[\\theta(1+\\theta)]$. (c) $E[X^2]=2(\\theta+3)/[\\theta^2(1+\\theta)]$. Subtract the squared mean to get $(\\theta^2+4\\theta+2)/[\\theta^2(1+\\theta)^2]$.",
    "trap": "Keep the units, support and conditioning event consistent.",
    "tests": [
      "c.prob.5.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 5, Self-Test 24."
  }
]
);
