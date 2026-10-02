var QUESTIONS = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
QUESTIONS.push(...
[
  {
    "id": "w.prob.6.1.1",
    "sec": "6.1",
    "marks": 5,
    "title": "Adaptation of Ross Problem 6.1(c)",
    "prompt": "Two fair dice are rolled. Let $X$ be the smaller result and $Y$ the larger result. Give the joint pmf in a formula, including its support.",
    "approach": "There are 36 ordered outcomes. When the values differ, either order of the dice produces the same pair; when equal, there is one outcome.",
    "solution": "For $1\\le i\\le j\\le6$, $P(X=i,Y=j)=1/36$ if $i=j$, and $2/36$ if $i<j$. It is zero otherwise. The total mass is $6/36+2\\binom62/36=1$.",
    "trap": "Do not give off-diagonal pairs only one ordered outcome; both die orders count.",
    "tests": [
      "c.prob.6.1.1",
      "c.prob.6.1.2"
    ]
  },
  {
    "id": "w.prob.6.1.2",
    "sec": "6.1",
    "marks": 4,
    "title": "Original drill: marginal from a joint density",
    "prompt": "A joint density is $f(x,y)=2$ on $0<x<y<1$ and zero elsewhere. Find $f_X(x)$ and $f_Y(y)$.",
    "approach": "For fixed $x$, integrate over $x<y<1$; for fixed $y$, integrate over $0<x<y$.",
    "solution": "$f_X(x)=\\int_x^1 2dy=2(1-x)$ for $0<x<1$. $f_Y(y)=\\int_0^y2dx=2y$ for $0<y<1$. Both are zero outside $(0,1)$. Each integrates to one.",
    "trap": "The triangular support makes the inner limits depend on the coordinate held fixed.",
    "tests": [
      "c.prob.6.1.3"
    ]
  },
  {
    "id": "w.prob.6.2.1",
    "sec": "6.2",
    "marks": 4,
    "title": "Adaptation of Ross Problem 6.20",
    "prompt": "Let $f(x,y)=x e^{-(x+y)}$ for $x>0,y>0$, zero otherwise. Determine whether $X,Y$ are independent.",
    "approach": "Compute both marginals and test whether their product equals the joint density across the support.",
    "solution": "$f_X(x)=\\int_0^\\infty xe^{-(x+y)}dy=xe^{-x}$ and $f_Y(y)=\\int_0^\\infty xe^{-(x+y)}dx=e^{-y}$. Their product is $xe^{-(x+y)}=f(x,y)$ on the support, so $X,Y$ are independent.",
    "trap": "A factorization must use the normalized marginal densities and agree on the whole support.",
    "tests": [
      "c.prob.6.1.3",
      "c.prob.6.2.1"
    ]
  },
  {
    "id": "w.prob.6.2.2",
    "sec": "6.2",
    "marks": 4,
    "title": "Original drill: uncorrelated does not imply independent",
    "prompt": "Let $X$ be uniform on $(-1,1)$ and set $Y=X^2$. Show that $\\operatorname{Cov}(X,Y)=0$ but that $X,Y$ are dependent.",
    "approach": "Use symmetry to compute $E[X]$ and $E[X^3]$. Then note that $Y$ is determined by $X$.",
    "solution": "By symmetry $E[X]=E[X^3]=0$, so $\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=E[X^3]=0$. But $Y=X^2$ is a nonconstant function of $X$, so it cannot be independent of $X$: for example, $P(Y<1/4\\mid |X|<1/2)=1$ while $P(Y<1/4)=1/2$.",
    "trap": "Zero covariance is weaker than independence outside special families such as jointly normal pairs.",
    "tests": [
      "c.prob.6.2.1",
      "c.prob.6.2.2"
    ]
  },
  {
    "id": "w.prob.6.3.1",
    "sec": "6.3",
    "marks": 5,
    "title": "Adaptation of Ross Problem 6.29(a)",
    "prompt": "Daily sales are independent normal variables with mean $2200$ and standard deviation $230$. Find the probability the two-day total exceeds $5000$, expressing the answer using $\\Phi$ and giving an approximation.",
    "approach": "The independent normal sum has summed means and variances; standardize the threshold.",
    "solution": "The total has mean $4400$ and variance $2(230)^2$, so standard deviation $230\\sqrt2$. Hence $P(S>5000)=1-\\Phi(600/(230\\sqrt2))=1-\\Phi(1.844)\\approx0.033$.",
    "trap": "Standard deviations do not add; variances add for independent variables.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.4"
    ]
  },
  {
    "id": "w.prob.6.3.2",
    "sec": "6.3",
    "marks": 4,
    "title": "Original drill: uniform convolution",
    "prompt": "For independent $X,Y\\sim\\operatorname{Unif}(0,1)$, derive the density of $S=X+Y$ and compute $P(S<1)$.",
    "approach": "Convolve the densities and split at the point where the integration limits stop expanding.",
    "solution": "For $0<s<1$, $f_S(s)=\\int_0^s1\\,dy=s$. For $1\\le s<2$, the overlap length is $2-s$, so $f_S(s)=2-s$. Otherwise the density is zero. Thus $P(S<1)=\\int_0^1s\\,ds=1/2$.",
    "trap": "The support is $(0,2)$; a sum of two uniforms is not itself uniform.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.2"
    ]
  },
  {
    "id": "w.prob.6.4.1",
    "sec": "6.4",
    "marks": 5,
    "title": "Adaptation of Ross Problem 6.12",
    "prompt": "In one hour, independent male and female arrival counts are Poisson with rates $4$ and $6$. Given 10 total arrivals, find the conditional distribution of the number of male arrivals and the probability there are at most 3.",
    "approach": "Use the conditional allocation theorem for independent Poisson variables, then sum four binomial masses.",
    "solution": "If $M$ is the male count, $M\\mid(M+F=10)\\sim\\operatorname{Binomial}(10,4/10)$. Therefore $P(M\\le3\\mid M+F=10)=\\sum_{k=0}^3\\binom{10}{k}(0.4)^k(0.6)^{10-k}\\approx0.3823$.",
    "trap": "The conditional probability is the male rate divided by the combined rate.",
    "tests": [
      "c.prob.6.4.1",
      "c.prob.6.4.2"
    ]
  },
  {
    "id": "w.prob.6.4.2",
    "sec": "6.4",
    "marks": 4,
    "title": "Original drill: conditioned Bernoulli order",
    "prompt": "Among 5 iid Bernoulli$(p)$ trials, given there are exactly 2 successes, what is the probability that the first two trials are the successes?",
    "approach": "All choices of the two success positions have the same conditional probability.",
    "solution": "There are $\\binom52=10$ equally likely position sets conditional on two successes. Exactly one set is $\\{1,2\\}$, so the probability is $1/10$.",
    "trap": "Do not retain the factor $p^2(1-p)^3$ after conditioning; it cancels for every ordering.",
    "tests": [
      "c.prob.6.4.1"
    ]
  },
  {
    "id": "w.prob.6.5.1",
    "sec": "6.5",
    "marks": 5,
    "title": "Adaptation of Ross Problem 6.45",
    "prompt": "A joint density is $f(x,y)=2$ on $0<x<y<1$ and zero elsewhere. Find $f_{X\\mid Y}(x\\mid y)$ and $P(X<1/2\\mid Y=y)$ for $0<y<1$.",
    "approach": "First compute $f_Y(y)$, then divide the joint density by that marginal and integrate over the requested event.",
    "solution": "$f_Y(y)=2y$ for $0<y<1$. Therefore $f_{X\\mid Y}(x\\mid y)=1/y$ on $0<x<y$. The conditional probability is $1$ if $y\\le1/2$; if $y>1/2$, it is $(1/2)/y=1/(2y)$.",
    "trap": "The conditional support depends on the observed value $y$.",
    "tests": [
      "c.prob.6.1.3",
      "c.prob.6.5.1"
    ]
  },
  {
    "id": "w.prob.6.5.2",
    "sec": "6.5",
    "marks": 5,
    "title": "Original drill: conditional bivariate normal",
    "prompt": "A bivariate normal pair has $\\mu_X=1$, $\\mu_Y=2$, $\\sigma_X=3$, $\\sigma_Y=4$, and $\\rho=1/2$. Give the law of $X\\mid Y=6$.",
    "approach": "Substitute into the conditional mean and variance formulas.",
    "solution": "The mean is $1+(1/2)(3/4)(6-2)=1+1.5=2.5$. The variance is $3^2(1-1/4)=27/4$. Thus $X\\mid Y=6\\sim N(2.5,27/4)$.",
    "trap": "The mean uses a standard-deviation ratio; the variance uses $\\sigma_X^2$.",
    "tests": [
      "c.prob.6.5.1",
      "c.prob.6.5.2"
    ]
  },
  {
    "id": "w.prob.6.6.1",
    "sec": "6.6",
    "marks": 5,
    "title": "Adaptation of Ross Problem 6.50",
    "prompt": "Three independent points are uniform on a road segment of length 1. Find the probability no pair is within distance $d=0.2$.",
    "approach": "Order the locations and use the spacing formula for the minimum gap condition.",
    "solution": "For $n=3$ and $d\\le1/(n-1)$, the probability is $[1-(n-1)d]^n$. Hence $[1-2(0.2)]^3=0.6^3=0.216$.",
    "trap": "The condition applies to both consecutive spacings; verify $d\\le1/2$.",
    "tests": [
      "c.prob.6.6.1",
      "c.prob.6.6.2"
    ]
  },
  {
    "id": "w.prob.6.6.2",
    "sec": "6.6",
    "marks": 4,
    "title": "Original drill: sample maximum",
    "prompt": "For 4 iid observations with CDF $F$, derive the CDF and density of the maximum $X_{(4)}$.",
    "approach": "The maximum is at most $x$ exactly when all four observations are at most $x$.",
    "solution": "$F_{X_{(4)}}(x)=P(X_1\\le x,\\ldots,X_4\\le x)=F(x)^4$. If $F$ has density $f$, differentiation gives $f_{X_{(4)}}(x)=4F(x)^3f(x)$.",
    "trap": "Independence is required to raise the marginal CDF to the fourth power.",
    "tests": [
      "c.prob.6.6.1"
    ]
  },
  {
    "id": "w.prob.6.7.1",
    "sec": "6.7",
    "marks": 5,
    "title": "Adaptation of Ross Problem 6.27",
    "prompt": "Let $X\\sim\\operatorname{Exp}(1)$ and $Y\\sim\\operatorname{Exp}(2)$ independently. Find the density of $Z=X/Y$ and compute $P(X<Y)$.",
    "approach": "Transform $(X,Y)$ to $(Z,Y)$ with $X=ZY$, then integrate out $Y$.",
    "solution": "The inverse map $(z,y)\\mapsto(zy,y)$ has Jacobian $y$. Thus $f_{Z,Y}(z,y)=2y e^{-(z+2)y}$ for $z,y>0$. Integrating in $y$ gives $f_Z(z)=2/(z+2)^2$. Therefore $P(X<Y)=P(Z<1)=\\int_0^1 2/(z+2)^2dz=1/3$.",
    "trap": "The Jacobian factor $y$ is required; $P(X<Y)$ is then the ratio CDF below 1.",
    "tests": [
      "c.prob.6.7.1"
    ]
  },
  {
    "id": "w.prob.6.7.2",
    "sec": "6.7",
    "marks": 4,
    "title": "Original drill: gamma proportion",
    "prompt": "Independent $X\\sim\\operatorname{Gamma}(2,3)$ and $Y\\sim\\operatorname{Gamma}(5,3)$ use shape-rate parameters. Identify the joint law of $U=X+Y$ and $V=X/(X+Y)$.",
    "approach": "Apply the equal-rate gamma total/proportion transformation.",
    "solution": "$U\\sim\\operatorname{Gamma}(7,3)$ and $V\\sim\\operatorname{Beta}(2,5)$, independently.",
    "trap": "The rate must be common for this independence result; here both rates are 3.",
    "tests": [
      "c.prob.6.3.3",
      "c.prob.6.7.2"
    ]
  },
  {
    "id": "w.prob.6.8.1",
    "sec": "6.8",
    "marks": 4,
    "title": "Adaptation of Ross Problem 6.2",
    "prompt": "Three balls are drawn without replacement from 5 white and 8 red balls. Let $X_i=1$ if draw $i$ is white and 0 otherwise. Show $P(X_1=1,X_2=0)=P(X_1=0,X_2=1)$ and explain what it shows.",
    "approach": "Compute each ordered pattern by sequential conditional probabilities.",
    "solution": "$P(1,0)=(5/13)(8/12)=10/39$. Also $P(0,1)=(8/13)(5/12)=10/39$. The labels of the draw positions can be permuted without changing the joint law, illustrating exchangeability. The draws remain dependent because the first color changes the composition.",
    "trap": "Symmetry under permutations does not mean the draws are independent.",
    "tests": [
      "c.prob.6.8.1",
      "c.prob.6.8.2"
    ]
  },
  {
    "id": "w.prob.6.8.2",
    "course": "prob",
    "sec": "6.8",
    "marks": 4,
    "title": "Original drill: latent shared probability",
    "prompt": "Let $\\Theta\\sim\\operatorname{Unif}(0,1)$ and conditional on $\\Theta$ let $X_1,X_2$ be iid Bernoulli$(\\Theta)$. Show the pair is exchangeable but dependent.",
    "approach": "Compute the joint probabilities by averaging over $\\Theta$.",
    "solution": "$P(X_1=1,X_2=0)=E[\\Theta(1-\\Theta)]=1/6$, and by symmetry $P(X_1=0,X_2=1)=1/6$, so the joint law is permutation-invariant. But $P(X_1=1)=E[\\Theta]=1/2$ and $P(X_1=1,X_2=1)=E[\\Theta^2]=1/3\\ne1/4$, so the pair is dependent.",
    "trap": "Conditional independence given $\\Theta$ does not imply unconditional independence after averaging over a shared random parameter.",
    "tests": [
      "c.prob.6.8.1",
      "c.prob.6.8.2"
    ]
  },
  {
    "id": "w.prob.6.ross.example.1a",
    "course": "prob",
    "sec": "6.1",
    "marks": 5,
    "title": "Ross Example 1a: Urn ball selection joint PMF",
    "prompt": "Suppose that 3 balls are randomly selected without replacement from an urn containing 3 red, 4 white, and 5 blue balls. Let $X$ and $Y$ denote, respectively, the number of red and white balls chosen. (a) Find the joint probability mass function $p(i, j) = P(X = i, Y = j)$. (b) Determine the marginal probability mass functions of $X$ and $Y$.",
    "approach": "Use the multivariate hypergeometric distribution for joint selection without replacement and marginalize by row or column summation.",
    "solution": "(a) Total balls $N = 3 + 4 + 5 = 12$, and sample size is 3. The number of equally likely samples is $\\binom{12}{3} = 220$. For nonnegative integers $i, j$ with $i \\le 3$, $j \\le 4$, and $i + j \\le 3$, the joint pmf is $p(i, j) = \\frac{\\binom{3}{i}\\binom{4}{j}\\binom{5}{3-i-j}}{\\binom{12}{3}}$. Explicit values: $p(0,0) = \\binom{5}{3}/220 = 10/220$; $p(0,1) = \\binom{4}{1}\\binom{5}{2}/220 = 40/220$; $p(0,2) = \\binom{4}{2}\\binom{5}{1}/220 = 30/220$; $p(0,3) = \\binom{4}{3}/220 = 4/220$; $p(1,0) = \\binom{3}{1}\\binom{5}{2}/220 = 30/220$; $p(1,1) = \\binom{3}{1}\\binom{4}{1}\\binom{5}{1}/220 = 60/220$; $p(1,2) = \\binom{3}{1}\\binom{4}{2}/220 = 18/220$; $p(2,0) = \\binom{3}{2}\\binom{5}{1}/220 = 15/220$; $p(2,1) = \\binom{3}{2}\\binom{4}{1}/220 = 12/220$; $p(3,0) = \\binom{3}{3}/220 = 1/220$. All other $p(i,j) = 0$. (b) Marginal of $X$: $P(X = i) = \\frac{\\binom{3}{i}\\binom{9}{3-i}}{\\binom{12}{3}}$, so $P(X=0) = 84/220 = 21/55$, $P(X=1) = 108/220 = 27/55$, $P(X=2) = 27/220$, $P(X=3) = 1/220$. Marginal of $Y$: $P(Y = j) = \\frac{\\binom{4}{j}\\binom{8}{3-j}}{\\binom{12}{3}}$, so $P(Y=0) = 56/220 = 14/55$, $P(Y=1) = 112/220 = 28/55$, $P(Y=2) = 48/220 = 12/55$, $P(Y=3) = 4/220 = 1/55$.",
    "trap": "The support requires $i + j \\le 3$; balls that are neither red nor white are blue.",
    "tests": [
      "c.prob.6.1.1",
      "c.prob.6.1.2"
    ],
    "provenance": "Ross, 10e, §6.1, Example 1a, PDF p. 246."
  },
  {
    "id": "w.prob.6.ross.example.1b",
    "legacyId": "w.prob.6.ross.ex.6.1.1b",
    "course": "prob",
    "sec": "6.1",
    "marks": 5,
    "title": "Ross Example 1b: Number of boys and girls in community families",
    "prompt": "In a community, 15% of families have 0 children, 20% have 1 child, 35% have 2 children, and 30% have 3 children. In each family, each child is independently equally likely to be a boy or a girl. For a randomly selected family, let $B$ be the number of boys and $G$ the number of girls. (a) Compute the joint probability mass function $P(B = i, G = j)$. (b) Find the marginal distributions of $B$ and $G$.",
    "approach": "Condition on the total number of children $K = B + G$ and use binomial probabilities with $p = 1/2$.",
    "solution": "(a) Let $K = B + G$. By the law of total probability, $P(B = i, G = j) = P(K = i + j) \\binom{i+j}{i} (1/2)^{i+j}$. Evaluated entries: For $K=0$: $P(B=0, G=0) = 0.15$. For $K=1$: $P(B=0, G=1) = 0.20 \\times 0.5 = 0.10$, $P(B=1, G=0) = 0.10$. For $K=2$: $P(B=0, G=2) = 0.35 \\times 0.25 = 0.0875$, $P(B=1, G=1) = 0.35 \\times 0.50 = 0.175$, $P(B=2, G=0) = 0.0875$. For $K=3$: $P(B=0, G=3) = 0.30 \\times 0.125 = 0.0375$, $P(B=1, G=2) = 0.30 \\times 0.375 = 0.1125$, $P(B=2, G=1) = 0.1125$, $P(B=3, G=0) = 0.0375$. All other pairs have probability 0. (b) Marginal of $B$ by row sums: $P(B=0) = 0.15 + 0.10 + 0.0875 + 0.0375 = 0.375$; $P(B=1) = 0.10 + 0.175 + 0.1125 = 0.3875$; $P(B=2) = 0.0875 + 0.1125 = 0.200$; $P(B=3) = 0.0375$. By gender symmetry, $P(G=j) = P(B=j)$ for all $j \\in \\{0, 1, 2, 3\\}$.",
    "trap": "Do not assume $B$ and $G$ are independent; $B + G$ is constrained by the family size distribution.",
    "tests": [
      "c.prob.6.1.1",
      "c.prob.6.1.2"
    ],
    "provenance": "Ross, 10e, §6.1, Example 1b, PDF pp. 247–248."
  },
  {
    "id": "w.prob.6.ross.example.1c",
    "course": "prob",
    "sec": "6.1",
    "marks": 5,
    "title": "Ross Example 1c: Joint PMF of waiting times for successes and failures",
    "prompt": "Independent trials each result in a success with probability $p$ and a failure with probability $1-p$. Let $X_r$ denote the trial number on which the $r$-th success occurs, and let $Y_s$ denote the trial number on which the $s$-th failure occurs. Derive the joint probability mass function $P(X_r = i, Y_s = j)$ for (a) $i < j$, and (b) $j < i$.",
    "approach": "Condition on the earlier event and recognize the remaining waiting time as an independent negative binomial variable.",
    "solution": "(a) For $i < j$: $P(X_r = i, Y_s = j) = P(X_r = i) P(Y_s = j \\mid X_r = i)$. The $r$-th success occurs on trial $i$ with negative binomial probability $P(X_r = i) = \\binom{i-1}{r-1} p^r (1-p)^{i-r}$. At trial $i$, exactly $i - r$ failures have occurred. For the $s$-th failure to occur at trial $j$, an additional $s - (i - r) = s - i + r$ failures must occur in the remaining $j - i$ trials, meaning trial $j$ is the $(s - i + r)$-th failure among trials starting after trial $i$. This is negative binomial with parameters $(s - i + r, 1-p)$: $P(Y_{s-i+r} = j - i) = \\binom{j-i-1}{s-i+r-1} (1-p)^{s-i+r} p^{(j-i)-(s-i+r)} = \\binom{j-i-1}{s-i+r-1} (1-p)^{s-i+r} p^{j-s-r}$. Multiplying: $P(X_r = i, Y_s = j) = \\binom{i-1}{r-1}\\binom{j-i-1}{s-i+r-1} p^{j-s} (1-p)^s$ for $i < j$ with $i \\ge r$ and $j - i \\ge s - i + r$. (b) By symmetry, for $j < i$: trial $j$ is the $s$-th failure with prob $\\binom{j-1}{s-1}(1-p)^s p^{j-s}$. Then $j - s$ successes occurred by trial $j$, needing an additional $r - j + s$ successes in the remaining $i - j$ trials: $P(X_r = i, Y_s = j) = \\binom{j-1}{s-1}\\binom{i-j-1}{r-j+s-1} p^r (1-p)^{i-r}$.",
    "trap": "A single trial cannot be both a success and a failure, so $P(X_r = i, Y_s = i) = 0$.",
    "tests": [
      "c.prob.6.1.1",
      "c.prob.6.1.2"
    ],
    "provenance": "Ross, 10e, §6.1, Example 1c, PDF p. 248."
  },
  {
    "id": "w.prob.6.ross.example.1d",
    "legacyId": "w.prob.6.ross.ex.6.1.1d",
    "course": "prob",
    "sec": "6.1",
    "marks": 5,
    "title": "Ross Example 1d: Joint exponential density and probability calculations",
    "prompt": "The joint probability density function of $X$ and $Y$ is given by $f(x, y) = 2 e^{-x} e^{-2y}$ for $x > 0, y > 0$, and 0 otherwise. Compute (a) $P(X > 1, Y < 1)$, (b) $P(X < Y)$, and (c) $P(X < a)$ for $a > 0$.",
    "approach": "Set up the double integrals over the specified planar regions using the factorized density.",
    "solution": "(a) The region is $x > 1$ and $0 < y < 1$: $P(X > 1, Y < 1) = \\int_0^1 \\int_1^\\infty 2 e^{-x} e^{-2y} dx dy = [\\int_1^\\infty e^{-x} dx] [\\int_0^1 2 e^{-2y} dy] = e^{-1} [-e^{-2y}]_0^1 = e^{-1}(1 - e^{-2}) \\approx 0.3679 \\times 0.8647 \\approx 0.3181$. (b) The region is $0 < x < y < \\infty$: $P(X < Y) = \\int_0^\\infty \\int_0^y 2 e^{-x} e^{-2y} dx dy = \\int_0^\\infty 2 e^{-2y} (1 - e^{-y}) dy = \\int_0^\\infty 2 e^{-2y} dy - \\int_0^\\infty 2 e^{-3y} dy = 1 - 2/3 = 1/3$. (c) The region is $0 < x < a$ and $0 < y < \\infty$: $P(X < a) = \\int_0^a \\int_0^\\infty 2 e^{-x} e^{-2y} dy dx = [\\int_0^a e^{-x} dx] [\\int_0^\\infty 2 e^{-2y} dy] = (1 - e^{-a}) \\times 1 = 1 - e^{-a}$.",
    "trap": "Check the integration limits carefully; for $P(X < Y)$, $x$ runs from $0$ to $y$ while $y$ runs from $0$ to $\\infty$.",
    "tests": [
      "c.prob.6.1.3"
    ],
    "provenance": "Ross, 10e, §6.1, Example 1d, PDF pp. 249–250."
  },
  {
    "id": "w.prob.6.ross.example.1e",
    "course": "prob",
    "sec": "6.1",
    "marks": 5,
    "title": "Ross Example 1e: Uniform distribution on a circular disk",
    "prompt": "A point $(X, Y)$ is chosen uniformly at random within a circle of radius $R$ centered at the origin: $f(x, y) = c$ for $x^2 + y^2 \\le R^2$, and 0 otherwise. (a) Determine the constant $c$. (b) Find the marginal densities of $X$ and $Y$. (c) Find the distribution of the distance $D = \\sqrt{X^2 + Y^2}$ from the origin. (d) Compute $E[D]$.",
    "approach": "Integrate in Cartesian coordinates for marginals and use area ratios for the radial distance.",
    "solution": "(a) Normalization requires $c \\iint_{x^2+y^2 \\le R^2} dx dy = c (\\pi R^2) = 1$, so $c = 1/(\\pi R^2)$. (b) For $|x| \\le R$, $y$ ranges from $-\\sqrt{R^2 - x^2}$ to $\\sqrt{R^2 - x^2}$: $f_X(x) = \\int_{-\\sqrt{R^2-x^2}}^{\\sqrt{R^2-x^2}} \\frac{1}{\\pi R^2} dy = \\frac{2}{\\pi R^2} \\sqrt{R^2 - x^2}$ for $|x| \\le R$, and 0 otherwise. By circular symmetry, $f_Y(y) = \\frac{2}{\\pi R^2} \\sqrt{R^2 - y^2}$ for $|y| \\le R$. (c) For $0 \\le a \\le R$, $F_D(a) = P(D \\le a) = P(X^2 + Y^2 \\le a^2) = \\frac{\\text{Area of disk of radius } a}{\\text{Area of disk of radius } R} = \\frac{\\pi a^2}{\\pi R^2} = \\frac{a^2}{R^2}$. Differentiating gives $f_D(a) = \\frac{2a}{R^2}$ for $0 \\le a \\le R$. (d) $E[D] = \\int_0^R a f_D(a) da = \\int_0^R \\frac{2a^2}{R^2} da = [\\frac{2a^3}{3R^2}]_0^R = \\frac{2}{3} R$.",
    "trap": "The marginal density is not uniform; the cross-sectional slice length varies with $x$.",
    "tests": [
      "c.prob.6.1.3"
    ],
    "provenance": "Ross, 10e, §6.1, Example 1e, PDF pp. 250–251."
  },
  {
    "id": "w.prob.6.ross.example.1f",
    "course": "prob",
    "sec": "6.1",
    "marks": 4,
    "title": "Ross Example 1f: Density of the ratio of independent standard exponentials",
    "prompt": "Let $X$ and $Y$ have joint probability density function $f(x, y) = e^{-(x+y)}$ for $x > 0, y > 0$, and 0 otherwise. Find the probability density function of the ratio $Z = X / Y$.",
    "approach": "First determine the cumulative distribution function $F_Z(a) = P(X/Y \\le a)$ by double integration, then differentiate with respect to $a$.",
    "solution": "For $a > 0$: $F_Z(a) = P(X/Y \\le a) = \\iint_{x/y \\le a} e^{-(x+y)} dx dy = \\int_0^\\infty [\\int_0^{ay} e^{-x} dx] e^{-y} dy = \\int_0^\\infty (1 - e^{-ay}) e^{-y} dy = \\int_0^\\infty e^{-y} dy - \\int_0^\\infty e^{-(a+1)y} dy = 1 - \\frac{1}{a+1} = \\frac{a}{a+1}$. Differentiating with respect to $a$: $f_Z(a) = \\frac{d}{da}(1 - \\frac{1}{a+1}) = \\frac{1}{(a+1)^2}$ for $a > 0$, and 0 for $a \\le 0$.",
    "trap": "The ratio has support on $(0, \\infty)$, not on $(0, 1)$. Note that $E[Z] = \\int_0^\\infty \\frac{a}{(a+1)^2} da = \\infty$.",
    "tests": [
      "c.prob.6.1.3"
    ],
    "provenance": "Ross, 10e, §6.1, Example 1f, PDF pp. 251–252."
  },
  {
    "id": "w.prob.6.ross.example.1g",
    "course": "prob",
    "sec": "6.1",
    "marks": 5,
    "title": "Ross Example 1g: Multinomial distribution and extended birthday problem",
    "prompt": "(a) Define the multinomial distribution for $n$ independent trials with $r$ mutually exclusive outcomes having probabilities $p_1, \\ldots, p_r$. (b) A fair die is rolled 9 times. Find the probability that 1 appears three times, 2 and 3 twice each, 4 and 5 once each, and 6 not at all. (c) In a group of $n$ people, express the probability that no 3 people share a birthday.",
    "approach": "Use the multinomial probability mass formula and partition the 365 calendar days by their occupancy counts.",
    "solution": "(a) For $\\sum_{i=1}^r n_i = n$ with $n_i \\ge 0$, $P(X_1 = n_1, \\ldots, X_r = n_r) = \\frac{n!}{n_1! n_2! \\cdots n_r!} p_1^{n_1} p_2^{n_2} \\cdots p_r^{n_r}$. (b) Here $n = 9$, $r = 6$, each $p_i = 1/6$. The counts are $n_1 = 3, n_2 = 2, n_3 = 2, n_4 = 1, n_5 = 1, n_6 = 0$. The probability is $\\frac{9!}{3! 2! 2! 1! 1! 0!} (1/6)^9 = \\frac{362880}{6 \\times 2 \\times 2 \\times 1 \\times 1 \\times 1} (1/6)^9 = \\frac{15120}{10077696} = \\frac{7560}{6^9} \\approx 0.000750$. (c) No 3 people share a birthday if each of the 365 days has at most 2 birthdays. If $i$ days have 2 birthdays, then $n - 2i$ days have 1 birthday, and $365 - n + i$ days have 0 birthdays. Summing over all feasible $i \\le n/2$: $P(\\text{no 3 share a birthday}) = \\sum_{i=0}^{\\lfloor n/2 \\rfloor} \\frac{365!}{i! (n-2i)! (365 - n + i)!} \\frac{n!}{2^i} (\\frac{1}{365})^n$. For example, at $n = 88$, this probability evaluates to $\\approx 0.504$.",
    "trap": "In multinomial probabilities, the exponent base is $(1/6)$ for each trial outcome, and the counts must sum to $n$.",
    "tests": [
      "c.prob.6.1.1",
      "c.prob.6.1.2"
    ],
    "provenance": "Ross, 10e, §6.1, Example 1g, PDF pp. 252–253."
  },
  {
    "id": "w.prob.6.ross.example.2a",
    "legacyId": "w.prob.6.ross.ex.6.2.2a",
    "course": "prob",
    "sec": "6.2",
    "marks": 4,
    "title": "Ross Example 2a: Independence of binomial counts from disjoint trial sets",
    "prompt": "Suppose $n + m$ independent trials, each with success probability $p$, are performed. Let $X$ be the number of successes in the first $n$ trials and $Y$ the number of successes in the final $m$ trials. (a) Prove that $X$ and $Y$ are independent random variables. (b) Explain why $X$ and the total number of successes $Z = X + Y$ are dependent.",
    "approach": "Compute the joint pmf $P(X = x, Y = y)$ and factorize it into the product of marginals.",
    "solution": "(a) Since trials are mutually independent, the outcomes of the first $n$ trials do not affect the final $m$ trials. For any integers $0 \\le x \\le n$ and $0 \\le y \\le m$: $P(X = x, Y = y) = [\\binom{n}{x} p^x (1-p)^{n-x}] [\\binom{m}{y} p^y (1-p)^{m-y}] = P(X = x) P(Y = y)$. Because the joint pmf factors into the product of the marginal pmfs for all $(x, y)$, $X$ and $Y$ are independent. (b) For $Z = X + Y$, knowing $Z = 0$ implies $X = 0$ with certainty ($P(X = 0 \\mid Z = 0) = 1 \\ne P(X = 0) = (1-p)^n$). Thus $X$ and $Z$ share information and are dependent.",
    "trap": "Disjoint sets of independent trials generate independent variables; variables that share summands are dependent.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2a, PDF p. 254."
  },
  {
    "id": "w.prob.6.ross.example.2b",
    "course": "prob",
    "sec": "6.2",
    "marks": 5,
    "title": "Ross Example 2b: Poisson thinning into independent streams",
    "prompt": "Suppose the number of people $N$ entering a facility in a day is a Poisson random variable with parameter $\\lambda$. Each person is independently male with probability $p$ and female with probability $1-p$. Prove that the number of males $X$ and the number of females $Y$ are independent Poisson random variables with respective parameters $\\lambda p$ and $\\lambda(1-p)$.",
    "approach": "Condition on the total $N = X + Y = i + j$ and evaluate $P(X = i, Y = j)$ by the law of total probability.",
    "solution": "We compute $P(X = i, Y = j) = P(X = i, Y = j \\mid X + Y = i + j) P(X + Y = i + j)$. Given $X + Y = i + j$ total people, the number of males is $\\text{Binomial}(i + j, p)$: $P(X = i, Y = j \\mid X + Y = i + j) = \\binom{i+j}{i} p^i (1-p)^j$. Since $X + Y = N \\sim \\text{Poisson}(\\lambda)$: $P(X + Y = i + j) = e^{-\\lambda} \\frac{\\lambda^{i+j}}{(i+j)!}$. Multiplying gives $P(X = i, Y = j) = \\frac{(i+j)!}{i! j!} p^i (1-p)^j e^{-\\lambda} \\frac{\\lambda^{i+j}}{(i+j)!} = e^{-\\lambda} \\frac{(\\lambda p)^i}{i!} \\frac{(\\lambda(1-p))^j}{j!}$. Since $e^{-\\lambda} = e^{-\\lambda p} e^{-\\lambda(1-p)}$, this factors as $[e^{-\\lambda p} \\frac{(\\lambda p)^i}{i!}] [e^{-\\lambda(1-p)} \\frac{(\\lambda(1-p))^j}{j!}] = P(X = i) P(Y = j)$. Thus $X \\sim \\text{Poisson}(\\lambda p)$ and $Y \\sim \\text{Poisson}(\\lambda(1-p))$ independently.",
    "trap": "This remarkable independence holds only for a Poisson distributed total; for a fixed number of trials, $X$ and $Y$ are negatively correlated.",
    "tests": [
      "c.prob.6.2.1",
      "c.prob.6.4.2"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2b, PDF pp. 254–255."
  },
  {
    "id": "w.prob.6.ross.example.2c",
    "course": "prob",
    "sec": "6.2",
    "marks": 4,
    "title": "Ross Example 2c: Meeting problem and waiting time",
    "prompt": "A man and a woman agree to meet at a certain location between 12:00 noon and 1:00 p.m. If their arrival times are independent and each is uniformly distributed over $(0, 60)$ minutes past 12, find the probability that the first to arrive has to wait longer than 10 minutes.",
    "approach": "Represent the arrival times as independent coordinates $(X, Y)$ on $[0, 60]^2$ and compute the area of $|X - Y| > 10$.",
    "solution": "Let $X, Y \\sim \\text{Unif}(0, 60)$ independently. The joint density is $f(x, y) = 1/3600$ on the square $[0, 60] \\times [0, 60]$. The first arrival waits more than 10 minutes if $|X - Y| > 10$. By symmetry, $P(|X - Y| > 10) = 2 P(Y - X > 10) = 2 P(X + 10 < Y)$. The region $X + 10 < Y$ in $[0, 60]^2$ is a right triangle with vertices $(0, 10), (0, 60), (50, 60)$. Its base is 50 and height is 50, so its area is $\\frac{1}{2} \\times 50^2 = 1250$. By symmetry, the region $Y + 10 < X$ also has area 1250. The total area is $2500$, so $P(|X - Y| > 10) = \\frac{2500}{3600} = \\frac{25}{36} \\approx 0.6944$.",
    "trap": "Remember that either person can arrive first, so both triangles $Y - X > 10$ and $X - Y > 10$ must be included.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2c, PDF pp. 255–256."
  },
  {
    "id": "w.prob.6.ross.example.2d",
    "course": "prob",
    "sec": "6.2",
    "marks": 5,
    "title": "Ross Example 2d: Buffon needle problem",
    "prompt": "A horizontal table is ruled with equidistant parallel lines a distance $D$ apart. A needle of length $L \\le D$ is randomly dropped onto the table. Find the probability that the needle intersects one of the parallel lines.",
    "approach": "Parameterize the needle by the distance $X \\in (0, D/2)$ from its midpoint to the nearest line and its orientation angle $\\Theta \\in (0, \\pi/2)$, then integrate the indicator condition.",
    "solution": "Let $X$ be the distance from the midpoint of the needle to the nearest parallel line, so $X \\sim \\text{Unif}(0, D/2)$ with density $2/D$. Let $\\Theta$ be the acute angle between the needle and the perpendicular to the parallel lines, so $\\Theta \\sim \\text{Unif}(0, \\pi/2)$ with density $2/\\pi$. Assuming $X$ and $\\Theta$ are independent, their joint density is $f(x, \\theta) = \\frac{4}{\\pi D}$ on $(0, D/2) \\times (0, \\pi/2)$. The needle intersects a line if and only if $X < \\frac{L}{2} \\cos \\Theta$. Therefore: $P(\\text{intersection}) = \\int_0^{\\pi/2} \\int_0^{\\frac{L}{2}\\cos\\theta} \\frac{4}{\\pi D} dx d\\theta = \\frac{4}{\\pi D} \\int_0^{\\pi/2} \\frac{L}{2} \\cos \\theta d\\theta = \\frac{2L}{\\pi D} [\\sin \\theta]_0^{\\pi/2} = \\frac{2L}{\\pi D}$.",
    "trap": "The condition $L \\le D$ is required; if $L > D$, the upper limit in $x$ would be truncated by $D/2$.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2d, PDF p. 256."
  },
  {
    "id": "w.prob.6.ross.example.2e",
    "course": "prob",
    "sec": "6.2",
    "marks": 5,
    "title": "Ross Example 2e: Herschel-Maxwell normal characterization",
    "prompt": "Let $X$ and $Y$ denote the horizontal and vertical miss distances when aiming at a target. Suppose that (1) $X$ and $Y$ are independent continuous random variables with differentiable densities $f_X, f_Y$, and (2) the joint density $f(x, y)$ depends on $(x, y)$ only through the squared distance $x^2 + y^2$. Prove that $X$ and $Y$ must be zero-mean normally distributed with a common variance $\\sigma^2$.",
    "approach": "Differentiate the relation $f_X(x) f_Y(y) = g(x^2 + y^2)$ with respect to $x$ and separate variables.",
    "solution": "We have $f_X(x) f_Y(y) = g(x^2 + y^2)$. Differentiating with respect to $x$: $f_X'(x) f_Y(y) = 2x g'(x^2 + y^2)$. Dividing by the original equation gives $\\frac{f_X'(x)}{2x f_X(x)} = \\frac{g'(x^2 + y^2)}{g(x^2 + y^2)}$. Since the right-hand side is symmetric in $x$ and $y$, the left-hand side must be constant for all $x$: $\\frac{f_X'(x)}{x f_X(x)} = c$. Integrating with respect to $x$: $\\frac{d}{dx}[\\ln f_X(x)] = cx \\implies \\ln f_X(x) = a + \\frac{c x^2}{2} \\implies f_X(x) = k e^{c x^2 / 2}$. For $f_X$ to be a valid probability density that integrates to 1, $c$ must be negative; set $c = -1/\\sigma^2$. Then $f_X(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-x^2 / (2\\sigma^2)}$, which is $N(0, \\sigma^2)$. By symmetry, $f_Y(y) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-y^2 / (2\\sigma^2)}$. Thus $X$ and $Y$ are i.i.d. $N(0, \\sigma^2)$.",
    "trap": "Independence together with circular symmetry uniquely characterizes the bivariate Gaussian distribution.",
    "tests": [
      "c.prob.6.2.1",
      "c.prob.6.2.2"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2e, PDF pp. 256–257."
  },
  {
    "id": "w.prob.6.ross.example.2f",
    "course": "prob",
    "sec": "6.2",
    "marks": 4,
    "title": "Ross Example 2f: Testing independence from joint density formula and support",
    "prompt": "Determine whether $X$ and $Y$ are independent in each case: (a) $f(x, y) = 6 e^{-2x} e^{-3y}$ for $x > 0, y > 0$, and 0 otherwise. (b) $f(x, y) = 24xy$ for $0 < x < 1, 0 < y < 1, x + y < 1$, and 0 otherwise.",
    "approach": "Check whether the joint density factors as $f_X(x) f_Y(y)$ on a product domain $A \\times B$.",
    "solution": "(a) On the product region $(0, \\infty) \\times (0, \\infty)$, $f(x, y) = (2 e^{-2x})(3 e^{-3y})$. The marginals are $f_X(x) = 2 e^{-2x}$ for $x > 0$ and $f_Y(y) = 3 e^{-3y}$ for $y > 0$. Since $f(x, y) = f_X(x) f_Y(y)$ everywhere, $X$ and $Y$ are independent exponential random variables with rates 2 and 3. (b) The formula $24xy$ factors as $(cx)(dy)$, but the support is the triangular region $x > 0, y > 0, x + y < 1$. Because the range of $y$ ($0 < y < 1 - x$) depends on $x$, the support is not a Cartesian product of intervals. In particular, $P(X > 1/2, Y > 1/2) = 0$, but $P(X > 1/2) > 0$ and $P(Y > 1/2) > 0$, violating $P(X \\in A, Y \\in B) = P(X \\in A)P(Y \\in B)$. Hence $X$ and $Y$ are dependent.",
    "trap": "A formulaic product $h(x)g(y)$ only establishes independence if the support is also a Cartesian product of intervals.",
    "tests": [
      "c.prob.6.1.3",
      "c.prob.6.2.1"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2f, PDF p. 258."
  },
  {
    "id": "w.prob.6.ross.example.2g",
    "course": "prob",
    "sec": "6.2",
    "marks": 5,
    "title": "Ross Example 2g: Recursive indicator algorithm for generating a uniform random subset",
    "prompt": "To select a random subset of size $k$ from $\\{1, 2, \\ldots, n\\}$, consider generating $n$ binary indicators $I_1, \\ldots, I_n$ sequentially such that $P(I_1 = 1) = k/n$ and $P(I_{i+1} = 1 \\mid I_1, \\ldots, I_i) = \\frac{k - \\sum_{j=1}^i I_j}{n - i}$ for $1 \\le i < n$. Prove by induction on $k + n$ that every subset of size $k$ has equal probability $1/\\binom{n}{k}$.",
    "approach": "Use induction on $k + n$ and condition on whether the first element is selected ($I_1 = 1$ vs $I_1 = 0$).",
    "solution": "Base case: $k + n = 2$ means $k = 1, n = 1$, where $P(I_1 = 1) = 1/\\binom{1}{1} = 1$. Induction hypothesis: Assume the result holds for all $k + n \\le l$. Now consider $k + n = l + 1$ and any specific subset $S = \\{i_1, i_2, \\ldots, i_k\\}$. Case 1 ($1 \\in S$, so $i_1 = 1$): $P(I_1 = 1) = k/n$. Given $I_1 = 1$, the remaining $k-1$ elements must be chosen from $\\{2, \\ldots, n\\}$ (size $n-1$). By the induction hypothesis, this conditional probability is $1/\\binom{n-1}{k-1}$. Thus $P(S) = (k/n) \\times [1/\\binom{n-1}{k-1}] = \\frac{k}{n} \\frac{(k-1)!(n-k)!}{(n-1)!} = \\frac{k!(n-k)!}{n!} = 1/\\binom{n}{k}$. Case 2 ($1 \\notin S$, so $i_1 > 1$): $P(I_1 = 0) = 1 - k/n = (n-k)/n$. Given $I_1 = 0$, all $k$ elements are chosen from $\\{2, \\ldots, n\\}$. By the induction hypothesis, the conditional probability is $1/\\binom{n-1}{k}$. Thus $P(S) = \\frac{n-k}{n} [1/\\binom{n-1}{k}] = \\frac{n-k}{n} \\frac{k!(n-1-k)!}{(n-1)!} = \\frac{k!(n-k)!}{n!} = 1/\\binom{n}{k}$. In all cases, $P(S) = 1/\\binom{n}{k}$.",
    "trap": "The probability of selecting element $i+1$ changes dynamically based on how many elements remain to be chosen.",
    "tests": [
      "c.prob.6.2.1",
      "c.prob.6.4.1"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2g, PDF pp. 259–260."
  },
  {
    "id": "w.prob.6.ross.example.2h",
    "course": "prob",
    "sec": "6.2",
    "marks": 4,
    "title": "Ross Example 2h: Extremes of independent standard uniform random variables",
    "prompt": "Let $X, Y, Z$ be independent random variables, each uniformly distributed over $(0, 1)$. Compute $P(X \\ge YZ)$.",
    "approach": "Set up the triple integral over the unit cube with the condition $x \\ge yz$.",
    "solution": "Since $X, Y, Z$ are independent $\\text{Unif}(0, 1)$, their joint density is $f(x, y, z) = 1$ on $[0, 1]^3$. The event ${X \\ge YZ}$ requires $yz \\le x \\le 1$. Integrating: $P(X \\ge YZ) = \\int_0^1 \\int_0^1 [\\int_{yz}^1 1 dx] dy dz = \\int_0^1 \\int_0^1 (1 - yz) dy dz$. Inner integral with respect to $y$: $\\int_0^1 (1 - yz) dy = [y - \\frac{y^2 z}{2}]_0^1 = 1 - \\frac{z}{2}$. Outer integral with respect to $z$: $\\int_0^1 (1 - \\frac{z}{2}) dz = [z - \\frac{z^2}{4}]_0^1 = 1 - \\frac{1}{4} = \\frac{3}{4}$.",
    "trap": "The product $YZ$ takes values in $(0, 1)$; integrating $x$ first from $yz$ to 1 is the cleanest order.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2h, PDF p. 260."
  },
  {
    "id": "w.prob.6.ross.example.2i",
    "course": "prob",
    "sec": "6.2",
    "marks": 4,
    "title": "Ross Example 2i: Probabilistic modeling of half-life and proton decay",
    "prompt": "Under the probabilistic interpretation of half-life $h$, individual particle lifetimes are independent exponential random variables with median $h$, so $P(L > t) = 2^{-t/h}$. (a) Show that the decay rate is $\\lambda = (\\ln 2)/h$. (b) A grand unified theory predicts protons decay with half-life $h = 10^{30}$ years. Suppose $10^{30}$ protons are observed for 2 years. Compare the expected number of decays with the probability of observing 0 decays.",
    "approach": "Use the Poisson approximation for the sum of many independent, rare exponential decay events.",
    "solution": "(a) Median $h$ means $P(L > h) = e^{-\\lambda h} = 1/2$, which yields $\\lambda = (\\ln 2)/h$. (b) For $n = 10^{30}$ protons and $t = 2$ years with $h = 10^{30}$ years, the probability a given proton decays in 2 years is $p = 1 - 2^{-2/10^{30}} = 1 - e^{-2\\ln 2 / 10^{30}} \\approx \\frac{2 \\ln 2}{10^{30}}$. The expected number of decays is $\\mu = n p = 10^{30} \\times \\frac{2 \\ln 2}{10^{30}} = 2 \\ln 2 \\approx 1.3863$. The deterministic model expects $1.3863$ decays. Under the Poisson approximation $\\text{Poisson}(\\mu = 1.3863)$, the probability of observing exactly 0 decays is $P(N = 0) = e^{-1.3863} = e^{-2\\ln 2} = 2^{-2} = 1/4 = 0.25$. Thus, observing 0 decays in 2 years has a 25% chance of occurring by chance and does not rule out the hypothesis.",
    "trap": "The deterministic prediction of 1.39 decays does not mean observing zero decays refutes the model; the Poisson zero-tail is 25%.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2i, PDF pp. 260–261."
  },
  {
    "id": "w.prob.6.ross.example.2j",
    "course": "prob",
    "sec": "6.2",
    "marks": 4,
    "title": "Ross Example 2j: Independence of record value events and stopping counts",
    "prompt": "(a) A pair of fair dice is repeatedly thrown until the sum is either 4 or 7. Let $N$ be the number of rolls needed, and let $X$ be the final sum obtained ($X \\in \\{4, 7\\}$). Show that $X$ and $N$ are independent. (b) Let $X_1, X_2, \\ldots$ be i.i.d. continuous random variables. Let $A_n$ be the event that $X_n$ is a record value ($X_n > \\max(X_1, \\ldots, X_{n-1})$). Show that $P(A_n) = 1/n$ and that $A_n$ is independent of $A_{n+1}$.",
    "approach": "Show that the conditional probability matches the marginal probability using symmetry and memoryless properties.",
    "solution": "(a) On each roll, $P(\\text{sum} = 4) = 3/36 = 1/12$ and $P(\\text{sum} = 7) = 6/36 = 1/6$. The stopping probability is $p = 1/12 + 1/6 = 1/4$. The trial $N$ on which the game stops is geometric: $P(N = n) = (3/4)^{n-1}(1/4)$. On that $n$-th roll, given stopping occurred, $P(X = 4 \\mid N = n) = \\frac{1/12}{1/4} = 1/3$ regardless of $n$. Hence $P(X = 4, N = n) = (1/3) P(N = n) = P(X = 4)P(N = n)$, establishing independence. (b) For $n$ i.i.d. continuous variables, all $n!$ relative orderings are equally likely. By symmetry, each of the $n$ variables is equally likely to be the largest, so $P(A_n) = 1/n$. To show $A_{n+1}$ is independent of $A_n$: conditioning on $A_{n+1}$ (that $X_{n+1}$ is the largest of the first $n+1$) gives zero information about the relative ranking among the first $n$ variables. Thus $P(A_n \\mid A_{n+1}) = 1/n = P(A_n)$, proving independence.",
    "trap": "In (b), turning the conditioning around ($P(A_n \\mid A_{n+1})$) makes the independence intuitive because the rank of $X_{n+1}$ is independent of the internal permutation of $X_1, \\ldots, X_n$.",
    "tests": [
      "c.prob.6.2.1",
      "c.prob.6.2.2"
    ],
    "provenance": "Ross, 10e, §6.2, Example 2j, PDF p. 262."
  },
  {
    "id": "w.prob.6.ross.example.3a",
    "legacyId": "w.prob.6.ross.ex.6.3.3a",
    "course": "prob",
    "sec": "6.3",
    "marks": 5,
    "title": "Ross Example 3a: Convolution of two independent uniform random variables",
    "prompt": "Let $X$ and $Y$ be independent $\\text{Unif}(0, 1)$ random variables. (a) Derive the probability density function of $S = X + Y$. (b) Prove by induction that for $n$ i.i.d. $\\text{Unif}(0, 1)$ variables, $F_n(x) = P(\\sum_{i=1}^n X_i \\le x) = x^n / n!$ for $0 \\le x \\le 1$. (c) If $N = \\min\\{n : \\sum_{i=1}^n X_i > 1\\}$, find $E[N]$.",
    "approach": "Evaluate the convolution integral piecewise; use induction for the simplex volume, and sum tail probabilities for $E[N]$.",
    "solution": "(a) By convolution, $f_S(a) = \\int_0^1 f_X(a - y) dy$. For $0 \\le a \\le 1$, $0 \\le a - y \\le 1 \\implies 0 \\le y \\le a$, so $f_S(a) = \\int_0^a 1 dy = a$. For $1 < a < 2$, $a - 1 \\le y \\le 1$, so $f_S(a) = \\int_{a-1}^1 1 dy = 2 - a$. Outside $(0, 2)$, $f_S(a) = 0$. This is the symmetric triangular density. (b) Base case $n = 1$: $F_1(x) = x = x^1/1!$. Assume $F_{n-1}(x) = x^{n-1}/(n-1)!$ for $0 \\le x \\le 1$. Since $X_n \\ge 0$, for $0 \\le x \\le 1$: $F_n(x) = \\int_0^x F_{n-1}(x - y) dy = \\int_0^x \\frac{(x-y)^{n-1}}{(n-1)!} dy = [-\\frac{(x-y)^n}{n!}]_0^x = \\frac{x^n}{n!}$, completing the induction. (c) $N > n \\iff \\sum_{i=1}^n X_i \\le 1$, so $P(N > n) = F_n(1) = 1/n!$ for $n \\ge 0$. Using the tail sum formula for integer variables: $E[N] = \\sum_{n=0}^\\infty P(N > n) = \\sum_{n=0}^\\infty \\frac{1}{n!} = e \\approx 2.7183$.",
    "trap": "The formula $x^n/n!$ is valid only for $x \\le 1$; above 1, overlapping boundaries require inclusion-exclusion.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.2"
    ],
    "provenance": "Ross, 10e, §6.3.1, Example 3a, PDF pp. 263–265."
  },
  {
    "id": "w.prob.6.ross.example.3b",
    "course": "prob",
    "sec": "6.3",
    "marks": 5,
    "title": "Ross Example 3b: Sum of independent exponential variables and chi-squared distribution",
    "prompt": "(a) Let $X_1, \\ldots, X_n$ be independent exponential random variables with common parameter $\\lambda$. Identify the distribution of $\\sum_{i=1}^n X_i$. (b) If $Z_1, \\ldots, Z_n$ are independent standard normal random variables, derive the density function of $Y = \\sum_{i=1}^n Z_i^2$ (the chi-squared distribution with $n$ degrees of freedom).",
    "approach": "Use gamma parameterization and closure under convolution for equal rate parameters.",
    "solution": "(a) An $\\text{Exp}(\\lambda)$ variable is $\\text{Gamma}(1, \\lambda)$. By Proposition 3.1, the sum of independent gamma variables with common rate $\\lambda$ has shape parameter equal to the sum of the shapes: $\\sum_{i=1}^n X_i \\sim \\text{Gamma}(n, \\lambda)$ with density $f(y) = \\frac{\\lambda e^{-\\lambda y}(\\lambda y)^{n-1}}{(n-1)!}$ for $y > 0$. (b) For a single standard normal $Z$, let $W = Z^2$. The CDF is $F_W(y) = P(-\\sqrt{y} < Z < \\sqrt{y}) = 2\\Phi(\\sqrt{y}) - 1$. Differentiating gives $f_W(y) = \\frac{1}{\\sqrt{2\\pi}} y^{-1/2} e^{-y/2} = \\frac{(1/2)^{1/2}}{\\Gamma(1/2)} y^{1/2 - 1} e^{-y/2}$, which is $\\text{Gamma}(1/2, 1/2)$ since $\\Gamma(1/2) = \\sqrt{\\pi}$. Since $Y = \\sum_{i=1}^n Z_i^2$ is the sum of $n$ independent $\\text{Gamma}(1/2, 1/2)$ variables, $Y \\sim \\text{Gamma}(n/2, 1/2) = \\chi^2_n$. Its density is $f_Y(y) = \\frac{1}{2^{n/2}\\Gamma(n/2)} y^{n/2 - 1} e^{-y/2}$ for $y > 0$.",
    "trap": "Chi-squared degrees of freedom equal the number of squared independent standard normals; its rate is $1/2$ and its shape is $n/2$.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.3"
    ],
    "provenance": "Ross, 10e, §6.3.2, Example 3b, PDF pp. 265–266."
  },
  {
    "id": "w.prob.6.ross.example.3c",
    "legacyId": "w.prob.6.ross.ex.6.3.3c",
    "course": "prob",
    "sec": "6.3",
    "marks": 5,
    "title": "Ross Example 3c: Normal approximation for basketball season wins",
    "prompt": "A basketball team plays 26 games against class A teams (win probability 0.4 per game) and 18 games against class B teams (win probability 0.7 per game), all independently. Approximate the probability that (a) the team wins at least 25 games, and (b) the team wins more games against class A than class B.",
    "approach": "Sum the binomial means and variances, apply the central limit theorem with continuity correction, and evaluate via standard normal probabilities.",
    "solution": "Let $X_A \\sim \\text{Bin}(26, 0.4)$ and $X_B \\sim \\text{Bin}(18, 0.7)$. $E[X_A] = 26(0.4) = 10.4$, $\\text{Var}(X_A) = 26(0.4)(0.6) = 6.24$. $E[X_B] = 18(0.7) = 12.6$, $\\text{Var}(X_B) = 18(0.7)(0.3) = 3.78$. (a) Total wins $S = X_A + X_B$ has mean $10.4 + 12.6 = 23$ and variance $6.24 + 3.78 = 10.02$, so $\\sigma = \\sqrt{10.02} \\approx 3.1654$. With continuity correction: $P(S \\ge 25) = P(S \\ge 24.5) \\approx P(Z \\ge \\frac{24.5 - 23}{3.1654}) = P(Z \\ge 0.4739) = 1 - \\Phi(0.4739) \\approx 1 - 0.6822 = 0.3178$. (b) Difference $D = X_A - X_B$ has mean $10.4 - 12.6 = -2.2$ and variance $6.24 + 3.78 = 10.02$. The integer event $X_A > X_B \\iff D \\ge 1$ with continuity correction is $D \\ge 0.5$: $P(D \\ge 0.5) \\approx P(Z \\ge \\frac{0.5 - (-2.2)}{3.1654}) = P(Z \\ge \\frac{2.7}{3.1654}) = P(Z \\ge 0.8530) = 1 - \\Phi(0.8530) \\approx 1 - 0.8032 = 0.1968$.",
    "trap": "Variances add for the difference of independent variables: $\\text{Var}(X_A - X_B) = \\text{Var}(X_A) + \\text{Var}(X_B)$, not the difference.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.4"
    ],
    "provenance": "Ross, 10e, §6.3.3, Example 3c, PDF pp. 267–268."
  },
  {
    "id": "w.prob.6.ross.example.3d",
    "course": "prob",
    "sec": "6.3",
    "marks": 4,
    "title": "Ross Example 3d: Lognormal stock price ratios",
    "prompt": "Weekly price ratios $S(n)/S(n-1)$ for a stock are modeled as independent lognormal random variables with parameters $\\mu = 0.0165$ and $\\sigma = 0.0730$. Find the probability that (a) the price increases in each of the next two weeks, and (b) the price after two weeks is higher than today.",
    "approach": "Take logarithms to convert products of lognormal variables into sums of independent normals.",
    "solution": "Let $R_n = S(n)/S(n-1)$, so $\\ln R_n \\sim N(\\mu, \\sigma^2)$ with $\\mu = 0.0165, \\sigma = 0.0730$. (a) The price increases in week 1 iff $R_1 > 1 \\iff \\ln R_1 > 0$: $P(\\ln R_1 > 0) = P(Z > \\frac{0 - 0.0165}{0.0730}) = P(Z > -0.2260) = \\Phi(0.2260) \\approx 0.5894$. Since weekly ratios are independent, the probability of increasing in both weeks is $[P(R_1 > 1)]^2 \\approx (0.5894)^2 \\approx 0.3474$. (b) Overall increase over two weeks means $S(2)/S(0) = R_1 R_2 > 1 \\iff \\ln R_1 + \\ln R_2 > 0$. The sum $W = \\ln R_1 + \\ln R_2$ is normal with mean $2\\mu = 0.0330$ and variance $2\\sigma^2 = 2(0.0730)^2$, so standard deviation is $\\sigma \\sqrt{2} = 0.0730 \\sqrt{2} \\approx 0.1032$. Then $P(W > 0) = P(Z > \\frac{-0.0330}{0.1032}) = P(Z > -0.3197) = \\Phi(0.3197) \\approx 0.6254$.",
    "trap": "The product of lognormal variables is lognormal because their logarithms sum as independent normal variables.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.4"
    ],
    "provenance": "Ross, 10e, §6.3.3, Example 3d, PDF p. 268."
  },
  {
    "id": "w.prob.6.ross.example.3e",
    "course": "prob",
    "sec": "6.3",
    "marks": 5,
    "title": "Ross Example 3e: Convolution of independent Poisson random variables",
    "prompt": "Let $X \\sim \\text{Poisson}(\\lambda_1)$ and $Y \\sim \\text{Poisson}(\\lambda_2)$ be independent. Using discrete convolution, prove that $X + Y \\sim \\text{Poisson}(\\lambda_1 + \\lambda_2)$.",
    "approach": "Use $P(X + Y = n) = \\sum_{k=0}^n P(X = k) P(Y = n - k)$ and apply the binomial theorem.",
    "solution": "For any nonnegative integer $n$: $P(X + Y = n) = \\sum_{k=0}^n P(X = k) P(Y = n - k) = \\sum_{k=0}^n [e^{-\\lambda_1} \\frac{\\lambda_1^k}{k!}] [e^{-\\lambda_2} \\frac{\\lambda_2^{n-k}}{(n-k)!}] = e^{-(\\lambda_1 + \\lambda_2)} \\sum_{k=0}^n \\frac{\\lambda_1^k \\lambda_2^{n-k}}{k! (n-k)!}$. Multiply and divide by $n!$: $P(X + Y = n) = \\frac{e^{-(\\lambda_1 + \\lambda_2)}}{n!} \\sum_{k=0}^n \\binom{n}{k} \\lambda_1^k \\lambda_2^{n-k}$. By the binomial theorem, the summation equals $(\\lambda_1 + \\lambda_2)^n$. Thus $P(X + Y = n) = e^{-(\\lambda_1 + \\lambda_2)} \\frac{(\\lambda_1 + \\lambda_2)^n}{n!}$ for $n = 0, 1, 2, \\ldots$, which is precisely the pmf of a $\\text{Poisson}(\\lambda_1 + \\lambda_2)$ distribution.",
    "trap": "Remember to factor out $e^{-(\\lambda_1+\\lambda_2)}$ and $1/n!$ to recognize the binomial expansion.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.4"
    ],
    "provenance": "Ross, 10e, §6.3.4, Example 3e, PDF pp. 268–269."
  },
  {
    "id": "w.prob.6.ross.example.3f",
    "course": "prob",
    "sec": "6.3",
    "marks": 4,
    "title": "Ross Example 3f: Sum of independent binomial random variables",
    "prompt": "Let $X \\sim \\text{Bin}(n, p)$ and $Y \\sim \\text{Bin}(m, p)$ be independent binomial variables with common success parameter $p$. Prove analytically that $X + Y \\sim \\text{Bin}(n + m, p)$.",
    "approach": "Write the discrete convolution sum and evaluate using Vandermonde's combinatorial identity.",
    "solution": "For any integer $k \\in \\{0, 1, \\ldots, n + m\\}$: $P(X + Y = k) = \\sum_{i=0}^k P(X = i) P(Y = k - i) = \\sum_{i=0}^k [\\binom{n}{i} p^i (1-p)^{n-i}] [\\binom{m}{k-i} p^{k-i} (1-p)^{m-(k-i)}]$. Since $p^i p^{k-i} = p^k$ and $(1-p)^{n-i} (1-p)^{m-k+i} = (1-p)^{n+m-k}$ are constant across the index $i$, factor them out: $P(X + Y = k) = p^k (1-p)^{n+m-k} \\sum_{i=0}^k \\binom{n}{i} \\binom{m}{k-i}$. By Vandermonde's identity, $\\sum_{i=0}^k \\binom{n}{i} \\binom{m}{k-i} = \\binom{n+m}{k}$. Thus $P(X + Y = k) = \\binom{n+m}{k} p^k (1-p)^{n+m-k}$, which is the pmf of $\\text{Bin}(n + m, p)$.",
    "trap": "Binomial convolution closure requires a shared success probability $p$; if probabilities differ, the sum is not binomial.",
    "tests": [
      "c.prob.6.3.1",
      "c.prob.6.3.4"
    ],
    "provenance": "Ross, 10e, §6.3.4, Example 3f, PDF p. 269."
  },
  {
    "id": "w.prob.6.ross.example.4a",
    "legacyId": "w.prob.6.ross.ex.6.4.4a",
    "course": "prob",
    "sec": "6.4",
    "marks": 4,
    "title": "Ross Example 4a: Conditional PMF of discrete bivariate pair",
    "prompt": "Let the joint probability mass function of $X$ and $Y$ be given by $p(0,0) = 0.4, p(0,1) = 0.2, p(1,0) = 0.1, p(1,1) = 0.3$. Calculate the conditional probability mass function of $X$ given that $Y = 1$.",
    "approach": "Compute the marginal mass $p_Y(1)$ by summing column entries, then divide joint masses by $p_Y(1)$.",
    "solution": "First compute the marginal mass of $Y$ at $1$: $p_Y(1) = \\sum_x p(x, 1) = p(0, 1) + p(1, 1) = 0.2 + 0.3 = 0.5$. The conditional probability mass function of $X$ given $Y = 1$ is $p_{X|Y}(x \\mid 1) = \\frac{p(x, 1)}{p_Y(1)}$. For $x = 0$: $p_{X|Y}(0 \\mid 1) = \\frac{0.2}{0.5} = \\frac{2}{5} = 0.4$. For $x = 1$: $p_{X|Y}(1 \\mid 1) = \\frac{0.3}{0.5} = \\frac{3}{5} = 0.6$. The conditional masses sum to $2/5 + 3/5 = 1$.",
    "trap": "Divide by the marginal probability of the conditioned event $p_Y(1)$, not $p_X(x)$.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Ross, 10e, §6.4, Example 4a, PDF p. 270."
  },
  {
    "id": "w.prob.6.ross.example.4b",
    "course": "prob",
    "sec": "6.4",
    "marks": 5,
    "title": "Ross Example 4b: Conditional distribution of Poisson variable given the sum",
    "prompt": "Let $X \\sim \\text{Poisson}(\\lambda_1)$ and $Y \\sim \\text{Poisson}(\\lambda_2)$ be independent. Prove that the conditional distribution of $X$ given that $X + Y = n$ is binomial with parameters $n$ and $\\frac{\\lambda_1}{\\lambda_1 + \\lambda_2}$.",
    "approach": "Compute $P(X = k \\mid X + Y = n) = \\frac{P(X = k, Y = n - k)}{P(X + Y = n)}$ using independent Poisson masses.",
    "solution": "For $k \\in \\{0, 1, \\ldots, n\\}$: $P(X = k \\mid X + Y = n) = \\frac{P(X = k, X + Y = n)}{P(X + Y = n)} = \\frac{P(X = k) P(Y = n - k)}{P(X + Y = n)}$. Substituting Poisson masses: numerator is $[e^{-\\lambda_1} \\frac{\\lambda_1^k}{k!}] [e^{-\\lambda_2} \\frac{\\lambda_2^{n-k}}{(n-k)!}]$, and denominator is $e^{-(\\lambda_1 + \\lambda_2)} \\frac{(\\lambda_1 + \\lambda_2)^n}{n!}$. The exponential factors $e^{-(\\lambda_1 + \\lambda_2)}$ cancel completely: $\\frac{n!}{k!(n-k)!} \\frac{\\lambda_1^k \\lambda_2^{n-k}}{(\\lambda_1 + \\lambda_2)^n} = \\binom{n}{k} (\\frac{\\lambda_1}{\\lambda_1 + \\lambda_2})^k (\\frac{\\lambda_2}{\\lambda_1 + \\lambda_2})^{n-k}$. Since $\\frac{\\lambda_2}{\\lambda_1 + \\lambda_2} = 1 - \\frac{\\lambda_1}{\\lambda_1 + \\lambda_2}$, this is exactly the $\\text{Binomial}(n, \\frac{\\lambda_1}{\\lambda_1 + \\lambda_2})$ distribution.",
    "trap": "The total count $n$ becomes the number of binomial trials, and the success probability is the rate proportion.",
    "tests": [
      "c.prob.6.4.1",
      "c.prob.6.4.2"
    ],
    "provenance": "Ross, 10e, §6.4, Example 4b, PDF pp. 270–271."
  },
  {
    "id": "w.prob.6.ross.example.4c",
    "course": "prob",
    "sec": "6.4",
    "marks": 5,
    "title": "Ross Example 4c: Conditional distribution in the multinomial distribution",
    "prompt": "Consider the multinomial vector $(X_1, \\ldots, X_k) \\sim \\text{Multinomial}(n, p_1, \\ldots, p_k)$. Suppose it is given that $X_j = n_j$ for $j = r + 1, \\ldots, k$, with $\\sum_{j=r+1}^k n_j = m \\le n$. Show that the conditional distribution of $(X_1, \\ldots, X_r)$ is multinomial with $n - m$ trials and outcome probabilities $p_i / \\sum_{l=1}^r p_l$ for $i = 1, \\ldots, r$.",
    "approach": "Form the ratio of the joint multinomial probability to the marginal probability of the fixed outcomes.",
    "solution": "Let $F_r = \\sum_{i=1}^r p_i = 1 - \\sum_{j=r+1}^k p_j$. The marginal probability $P(X_{r+1} = n_{r+1}, \\ldots, X_k = n_k)$ pools the first $r$ categories into a single composite category with probability $F_r$ and count $n - m$: $P(X_{r+1} = n_{r+1}, \\ldots, X_k = n_k) = \\frac{n!}{(n-m)! n_{r+1}! \\cdots n_k!} F_r^{n-m} p_{r+1}^{n_{r+1}} \\cdots p_k^{n_k}$. For any tuple $(n_1, \\ldots, n_r)$ with $\\sum_{i=1}^r n_i = n - m$, the joint probability is $\\frac{n!}{n_1! \\cdots n_k!} p_1^{n_1} \\cdots p_k^{n_k}$. Dividing joint by marginal: $\\frac{P(X_1 = n_1, \\ldots, X_k = n_k)}{P(X_{r+1} = n_{r+1}, \\ldots, X_k = n_k)} = \\frac{(n-m)!}{n_1! \\cdots n_r!} \\frac{p_1^{n_1} \\cdots p_r^{n_r}}{F_r^{n-m}} = \\frac{(n-m)!}{n_1! \\cdots n_r!} (\\frac{p_1}{F_r})^{n_1} \\cdots (\\frac{p_r}{F_r})^{n_r}$. This is precisely the $\\text{Multinomial}(n - m, \\frac{p_1}{F_r}, \\ldots, \\frac{p_r}{F_r})$ distribution.",
    "trap": "The number of trials in the conditional multinomial shrinks to $n - m$, and the probabilities are normalized by $F_r$.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Ross, 10e, §6.4, Example 4c, PDF pp. 271–272."
  },
  {
    "id": "w.prob.6.ross.example.4d",
    "course": "prob",
    "sec": "6.4",
    "marks": 4,
    "title": "Ross Example 4d: Conditional distribution of trial orderings given total successes",
    "prompt": "Consider $n$ independent Bernoulli trials, each having success probability $p$. Given that a total of $k$ successes occur, show that all $\\binom{n}{k}$ possible orderings of $k$ successes and $n - k$ failures are equally likely, each having conditional probability $1/\\binom{n}{k}$.",
    "approach": "Divide the probability of any specific binary sequence of successes and failures by the overall binomial probability.",
    "solution": "Let $X$ denote the total number of successes in the $n$ trials, so $X \\sim \\text{Bin}(n, p)$. Let $\\mathbf{o}$ denote any specific sequence of length $n$ containing exactly $k$ successes and $n - k$ failures (for instance, $s, s, \\ldots, s, f, \\ldots, f$). Because the trials are independent, the probability of obtaining this specific sequence is $P(\\mathbf{o}) = p^k (1-p)^{n-k}$. Since the sequence $\\mathbf{o}$ uniquely specifies $X = k$, the joint event $\\{\\mathbf{o}, X = k\\}$ is just $\\{\\mathbf{o}\\}$. Therefore: $P(\\mathbf{o} \\mid X = k) = \\frac{P(\\mathbf{o}, X = k)}{P(X = k)} = \\frac{P(\\mathbf{o})}{P(X = k)} = \\frac{p^k (1-p)^{n-k}}{\\binom{n}{k} p^k (1-p)^{n-k}} = \\frac{1}{\\binom{n}{k}}$. This is completely independent of $p$ and equal for all $\\binom{n}{k}$ sequences.",
    "trap": "The parameter $p$ cancels completely; conditional on the total count, every ordering is equally likely.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Ross, 10e, §6.4, Example 4d, PDF p. 272."
  },
  {
    "id": "w.prob.6.ross.example.5a",
    "legacyId": "w.prob.6.ross.ex.6.5.5a",
    "course": "prob",
    "sec": "6.5",
    "marks": 4,
    "title": "Ross Example 5a: Conditional density for joint polynomial on unit square",
    "prompt": "The joint density of $X$ and $Y$ is given by $f(x, y) = \\frac{12}{5} x(2 - x - y)$ for $0 < x < 1, 0 < y < 1$, and 0 elsewhere. Compute the conditional density of $X$ given that $Y = y$ for $0 < y < 1$.",
    "approach": "First integrate $f(x, y)$ over $x \\in (0, 1)$ to get the marginal density $f_Y(y)$, then divide $f(x, y)$ by $f_Y(y)$.",
    "solution": "The marginal density of $Y$ is $f_Y(y) = \\int_0^1 \\frac{12}{5} x(2 - x - y) dx = \\frac{12}{5} [x^2 - \\frac{x^3}{3} - \\frac{x^2 y}{2}]_0^1 = \\frac{12}{5} [1 - \\frac{1}{3} - \\frac{y}{2}] = \\frac{12}{5} [\\frac{2}{3} - \\frac{y}{2}] = \\frac{12}{5} [\\frac{4 - 3y}{6}] = \\frac{2(4 - 3y)}{5}$ for $0 < y < 1$. The conditional density of $X$ given $Y = y$ is: $f_{X|Y}(x \\mid y) = \\frac{f(x, y)}{f_Y(y)} = \\frac{\\frac{12}{5} x(2 - x - y)}{\\frac{2}{5}(4 - 3y)} = \\frac{6x(2 - x - y)}{4 - 3y}$ for $0 < x < 1$. For any $y \\in (0, 1)$, $\\int_0^1 \\frac{6x(2 - x - y)}{4 - 3y} dx = \\frac{6[2/3 - y/2]}{4 - 3y} = \\frac{4 - 3y}{4 - 3y} = 1$.",
    "trap": "The marginal $f_Y(y)$ must be evaluated by integrating over $x$; verify that the conditional density integrates to 1 over $x \\in (0, 1)$.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Ross, 10e, §6.5, Example 5a, PDF p. 273."
  },
  {
    "id": "w.prob.6.ross.example.5b",
    "course": "prob",
    "sec": "6.5",
    "marks": 4,
    "title": "Ross Example 5b: Conditional density with exponential factor and tail probability",
    "prompt": "Let the joint density of $X$ and $Y$ be $f(x, y) = \\frac{1}{y} e^{-x/y} e^{-y}$ for $x > 0, y > 0$, and 0 otherwise. (a) Find the conditional density of $X$ given $Y = y$. (b) Compute $P(X > 1 \\mid Y = y)$.",
    "approach": "Factor out terms in $y$ to find the marginal density $f_Y(y)$, form $f_{X|Y}(x \\mid y)$, and integrate the conditional tail.",
    "solution": "(a) Marginal of $Y$: $f_Y(y) = \\int_0^\\infty \\frac{1}{y} e^{-x/y} e^{-y} dx = e^{-y} \\int_0^\\infty \\frac{1}{y} e^{-x/y} dx = e^{-y} [-e^{-x/y}]_0^\\infty = e^{-y}$ for $y > 0$. The conditional density of $X$ given $Y = y$ is $f_{X|Y}(x \\mid y) = \\frac{f(x, y)}{f_Y(y)} = \\frac{(1/y) e^{-x/y} e^{-y}}{e^{-y}} = \\frac{1}{y} e^{-x/y}$ for $x > 0$. This is an exponential density with rate parameter $1/y$ (and mean $y$). (b) $P(X > 1 \\mid Y = y) = \\int_1^\\infty \\frac{1}{y} e^{-x/y} dx = [-e^{-x/y}]_1^\\infty = e^{-1/y}$.",
    "trap": "Given $Y = y$, $X$ is exponential with mean $y$; the conditional probability $e^{-1/y}$ approaches 1 as $y \\to \\infty$ and 0 as $y \\to 0$.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Ross, 10e, §6.5, Example 5b, PDF pp. 273–274."
  },
  {
    "id": "w.prob.6.ross.example.5c",
    "course": "prob",
    "sec": "6.5",
    "marks": 5,
    "title": "Ross Example 5c: Derivation of the Student t-distribution density",
    "prompt": "Let $Z \\sim N(0, 1)$ and $Y \\sim \\chi^2_n$ be independent random variables. The random variable $T$ is defined by $T = \\frac{Z}{\\sqrt{Y/n}}$. Derive the probability density function of $T$ (the Student $t$-distribution with $n$ degrees of freedom).",
    "approach": "Condition on $Y = y$ to find the conditional density $f_{T|Y}(t \\mid y)$, form the joint density $f_{T,Y}(t, y)$, and integrate out $y$.",
    "solution": "Given $Y = y$, $T = \\frac{Z}{\\sqrt{y/n}}$ is a linear scale of a standard normal: $T \\mid (Y = y) \\sim N(0, n/y)$. Thus $f_{T|Y}(t \\mid y) = \\frac{1}{\\sqrt{2\\pi n/y}} e^{-t^2 y / (2n)}$. The density of $Y \\sim \\chi^2_n$ is $f_Y(y) = \\frac{1}{2^{n/2} \\Gamma(n/2)} y^{n/2 - 1} e^{-y/2}$ for $y > 0$. The joint density is $f_{T,Y}(t, y) = f_{T|Y}(t \\mid y) f_Y(y) = \\frac{1}{\\sqrt{2\\pi n} 2^{n/2} \\Gamma(n/2)} y^{(n-1)/2} \\exp\\{-[\\frac{t^2 + n}{2n}]y\\}$. Set $c = \\frac{t^2 + n}{2n}$. Integrating out $y$: $f_T(t) = \\int_0^\\infty f_{T,Y}(t, y) dy = \\frac{1}{\\sqrt{\\pi n} 2^{(n+1)/2} \\Gamma(n/2)} \\int_0^\\infty y^{(n+1)/2 - 1} e^{-cy} dy$. Substituting $x = cy$ gives $\\int_0^\\infty y^{(n-1)/2} e^{-cy} dy = c^{-(n+1)/2} \\Gamma(\\frac{n+1}{2}) = (\\frac{2n}{t^2 + n})^{(n+1)/2} \\Gamma(\\frac{n+1}{2})$. Simplifying: $f_T(t) = \\frac{\\Gamma(\\frac{n+1}{2})}{\\sqrt{n\\pi} \\Gamma(\\frac{n}{2})} (1 + \\frac{t^2}{n})^{-(n+1)/2}$ for $-\\infty < t < \\infty$.",
    "trap": "Remember that conditional on $Y = y$, the variance of $T$ is $n/y$, which places $\\sqrt{y}$ in the numerator of the joint density.",
    "tests": [
      "c.prob.6.5.1",
      "c.prob.6.3.3"
    ],
    "provenance": "Ross, 10e, §6.5, Example 5c, PDF pp. 274–275."
  },
  {
    "id": "w.prob.6.ross.example.5d",
    "course": "prob",
    "sec": "6.5",
    "marks": 5,
    "title": "Ross Example 5d: Bivariate normal conditional distribution",
    "prompt": "Let $(X, Y)$ have a bivariate normal distribution with parameters $\\mu_X, \\mu_Y, \\sigma_X^2, \\sigma_Y^2, \\rho$. (a) Derive the conditional distribution of $X$ given $Y = y$. (b) Show that $X$ and $Y$ are independent if and only if $\\rho = 0$.",
    "approach": "Complete the square in $x$ within the bivariate normal exponent to reveal the Gaussian conditional parameters.",
    "solution": "(a) The bivariate normal joint density has exponent $-\\frac{1}{2(1-\\rho^2)} [(\\frac{x-\\mu_X}{\\sigma_X})^2 + (\\frac{y-\\mu_Y}{\\sigma_Y})^2 - 2\\rho (\\frac{x-\\mu_X}{\\sigma_X})(\\frac{y-\\mu_Y}{\\sigma_Y})]$. Collecting terms in $x$: $[\\frac{x-\\mu_X}{\\sigma_X} - \\rho \\frac{y-\\mu_Y}{\\sigma_Y}]^2 + (1-\\rho^2)(\\frac{y-\\mu_Y}{\\sigma_Y})^2$. Expanding the first bracket and dividing by $f_Y(y)$ yields the conditional density $f_{X|Y}(x \\mid y) = \\frac{1}{\\sqrt{2\\pi}\\sigma_X\\sqrt{1-\\rho^2}} \\exp\\{-\\frac{[x - (\\mu_X + \\rho\\frac{\\sigma_X}{\\sigma_Y}(y - \\mu_Y))]^2}{2\\sigma_X^2(1-\\rho^2)}\\}$. Thus $X \\mid Y = y \\sim N(\\mu_X + \\rho \\frac{\\sigma_X}{\\sigma_Y}(y - \\mu_Y), \\sigma_X^2(1-\\rho^2))$. (b) If $\\rho = 0$, the conditional mean is $\\mu_X$ and conditional variance is $\\sigma_X^2$, so $f_{X|Y}(x \\mid y) = f_X(x)$, proving independence. Conversely, if $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0 \\implies \\rho = 0$.",
    "trap": "The conditional variance $\\sigma_X^2(1-\\rho^2)$ does not depend on the observed value $y$.",
    "tests": [
      "c.prob.6.5.1",
      "c.prob.6.5.2"
    ],
    "provenance": "Ross, 10e, §6.5, Example 5d, PDF pp. 274–275."
  },
  {
    "id": "w.prob.6.ross.example.5e",
    "course": "prob",
    "sec": "6.5",
    "marks": 4,
    "title": "Ross Example 5e: Bayesian updating of success probability with uniform prior",
    "prompt": "A coin has an unknown success probability $X$ distributed as $\\text{Unif}(0, 1) = \\text{Beta}(1, 1)$. In $n + m$ independent tosses given $X = x$, exactly $n$ successes and $m$ failures are observed. Derive the conditional (posterior) density of $X$ given this data.",
    "approach": "Apply Bayes' formula for a continuous parameter given discrete observation count.",
    "solution": "The prior density is $f_X(x) = 1$ for $0 < x < 1$. Given $X = x$, the number of successes $N$ in $n + m$ trials is $\\text{Binomial}(n + m, x)$: $P(N = n \\mid X = x) = \\binom{n+m}{n} x^n (1-x)^m$. By Bayes' formula for densities: $f_{X|N}(x \\mid n) = \\frac{P(N = n \\mid X = x) f_X(x)}{P(N = n)} = \\frac{\\binom{n+m}{n} x^n (1-x)^m \\times 1}{\\int_0^1 \\binom{n+m}{n} u^n (1-u)^m du} = c x^n (1-x)^m$. The integral $\\int_0^1 x^n (1-x)^m dx$ is the Beta function $B(n+1, m+1) = \\frac{n! m!}{(n+m+1)!}$. Thus $f_{X|N}(x \\mid n) = \\frac{(n+m+1)!}{n! m!} x^n (1-x)^m$ for $0 < x < 1$. This is the $\\text{Beta}(n + 1, m + 1)$ distribution.",
    "trap": "The exponents in the Beta posterior are incremented by 1 from the prior: $\\alpha = 1 + n, \\beta = 1 + m$.",
    "tests": [
      "c.prob.6.5.1",
      "c.prob.6.5.3"
    ],
    "provenance": "Ross, 10e, §6.5, Example 5e, PDF pp. 275–276."
  },
  {
    "id": "w.prob.6.ross.example.5f",
    "course": "prob",
    "sec": "6.5",
    "marks": 4,
    "title": "Ross Example 5f: Truncation property of the Pareto distribution",
    "prompt": "A Pareto random variable $X$ with parameters $a > 0$ and $\\lambda > 0$ has distribution function $F(x) = 1 - (a/x)^\\lambda$ for $x > a$. For any threshold $x_0 > a$, prove that the conditional distribution of $X$ given $X > x_0$ is also a Pareto distribution with parameters $x_0$ and $\\lambda$.",
    "approach": "Compute the conditional survival function $P(X > x \\mid X > x_0)$ for $x > x_0$.",
    "solution": "The density of $X$ is $f(x) = F'(x) = \\lambda a^\\lambda x^{-\\lambda - 1}$ for $x > a$. For $x_0 > a$ and $x > x_0$, the conditional density is $f_{X|X > x_0}(x) = \\frac{f(x)}{P(X > x_0)} = \\frac{\\lambda a^\\lambda x^{-\\lambda - 1}}{(a/x_0)^\\lambda} = \\lambda x_0^\\lambda x^{-\\lambda - 1}$ for $x > x_0$. The conditional cumulative distribution function for $x > x_0$ is $F_{X|X > x_0}(x) = 1 - P(X > x \\mid X > x_0) = 1 - \\frac{P(X > x)}{P(X > x_0)} = 1 - \\frac{(a/x)^\\lambda}{(a/x_0)^\\lambda} = 1 - (\\frac{x_0}{x})^\\lambda$. This matches the Pareto distribution with scale parameter $x_0$ and shape parameter $\\lambda$.",
    "trap": "The scale parameter updates to the threshold $x_0$, while the tail index $\\lambda$ remains unchanged.",
    "tests": [
      "c.prob.6.5.1",
      "c.prob.6.5.3"
    ],
    "provenance": "Ross, 10e, §6.5, Example 5f, PDF p. 276."
  },
  {
    "id": "w.prob.6.ross.example.6a",
    "legacyId": "w.prob.6.ross.ex.6.6.6a",
    "course": "prob",
    "sec": "6.6",
    "marks": 5,
    "title": "Ross Example 6a: Spacing between people distributed along a road",
    "prompt": "Along a road of length 1, 3 people are independently and uniformly distributed. (a) Find the probability that no two people are less than a distance $d$ apart (where $d \\le 1/2$). (b) State the general formula when $n$ people are independently and uniformly distributed on $[0, 1]$.",
    "approach": "Integrate the joint density of the order statistics over the separated simplex region $x_{(i)} - x_{(i-1)} > d$.",
    "solution": "(a) Let $X_{(1)} < X_{(2)} < X_{(3)}$ be the order statistics. Their joint density is $f(x_1, x_2, x_3) = 3! = 6$ on $0 < x_1 < x_2 < x_3 < 1$. The condition is $X_{(2)} - X_{(1)} > d$ and $X_{(3)} - X_{(2)} > d$. The probability is $P = 6 \\int_0^{1-2d} \\int_{x_1+d}^{1-d} \\int_{x_2+d}^1 dx_3 dx_2 dx_1 = 6 \\int_0^{1-2d} \\int_{x_1+d}^{1-d} (1 - d - x_2) dx_2 dx_1$. Substituting $y_2 = 1 - d - x_2$ yields $6 \\int_0^{1-2d} [\\int_0^{1-2d-x_1} y_2 dy_2] dx_1 = 3 \\int_0^{1-2d} (1 - 2d - x_1)^2 dx_1 = [-(1 - 2d - x_1)^3]_0^{1-2d} = (1 - 2d)^3$. (b) By identical reasoning on the $n$-simplex, when $n$ people are distributed at random over $[0, 1]$ and $d \\le 1/(n-1)$, the probability that all consecutive spacings exceed $d$ is $[1 - (n-1)d]^n$.",
    "trap": "There are $n-1$ pairwise gaps between $n$ points; the condition $d \\le 1/(n-1)$ is necessary for the event to be possible.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Ross, 10e, §6.6, Example 6a, PDF pp. 277–278."
  },
  {
    "id": "w.prob.6.ross.example.6b",
    "course": "prob",
    "sec": "6.6",
    "marks": 4,
    "title": "Ross Example 6b: Distribution of the sample median for uniform sample",
    "prompt": "A sample of size 3 is drawn from $\\text{Unif}(0, 1)$. Find the probability that the sample median lies between $1/4$ and $3/4$.",
    "approach": "Use the order statistic density formula for the 2nd order statistic $X_{(2)}$ of $n = 3$ uniforms.",
    "solution": "For $n = 3$, the sample median is the second order statistic $X_{(2)}$. With $F(x) = x$ and $f(x) = 1$ on $(0, 1)$, the density is $f_{X_{(2)}}(x) = \\frac{3!}{(2-1)!(3-2)!} x^{2-1} (1-x)^{3-2} (1) = 6x(1-x)$ for $0 < x < 1$. The desired probability is $P(1/4 < X_{(2)} < 3/4) = 6 \\int_{1/4}^{3/4} (x - x^2) dx = 6 [\\frac{x^2}{2} - \\frac{x^3}{3}]_{1/4}^{3/4}$. At $x = 3/4$: $6 [\\frac{9/16}{2} - \\frac{27/64}{3}] = 6 [\\frac{9}{32} - \\frac{9}{64}] = 6 [\\frac{9}{64}] = \\frac{54}{64} = \\frac{27}{32}$. At $x = 1/4$: $6 [\\frac{1/16}{2} - \\frac{1/64}{3}] = 6 [\\frac{1}{32} - \\frac{1}{192}] = 6 [\\frac{5}{192}] = \\frac{5}{32}$. The difference is $\\frac{27}{32} - \\frac{5}{32} = \\frac{22}{32} = \\frac{11}{16} = 0.6875$.",
    "trap": "For $n = 2m + 1$, the median is $X_{(m+1)}$, which follows a Beta distribution with parameters $(m+1, m+1)$.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Ross, 10e, §6.6, Example 6b, PDF p. 278."
  },
  {
    "id": "w.prob.6.ross.example.6c",
    "course": "prob",
    "sec": "6.6",
    "marks": 5,
    "title": "Ross Example 6c: Distribution of sample range",
    "prompt": "Let $X_1, \\ldots, X_n$ be i.i.d. continuous random variables with CDF $F$ and density $f$. (a) Derive the general formula for the CDF of the sample range $R = X_{(n)} - X_{(1)}$. (b) Evaluate the CDF and density of $R$ when the observations are $\\text{Unif}(0, 1)$.",
    "approach": "Integrate the joint density of the minimum and maximum over $x_n - x_1 \\le a$.",
    "solution": "(a) The joint density of $X_{(1)}$ and $X_{(n)}$ is $f_{X_{(1)}, X_{(n)}}(x_1, x_n) = n(n-1) [F(x_n) - F(x_1)]^{n-2} f(x_1) f(x_n)$ for $x_1 < x_n$. For $a \\ge 0$, $P(R \\le a) = \\int_{-\\infty}^\\infty [\\int_{x_1}^{x_1+a} n(n-1) [F(x_n) - F(x_1)]^{n-2} f(x_n) dx_n] f(x_1) dx_1$. Substituting $y = F(x_n) - F(x_1)$ with $dy = f(x_n) dx_n$, the inner integral evaluates to $[y^{n-1}]_0^{F(x_1+a)-F(x_1)} = [F(x_1+a) - F(x_1)]^{n-1}$. Thus $P(R \\le a) = n \\int_{-\\infty}^\\infty [F(x+a) - F(x)]^{n-1} f(x) dx$. (b) For $\\text{Unif}(0, 1)$, $F(x) = x$ and $f(x) = 1$ on $(0, 1)$. For $0 \\le a \\le 1$: when $0 < x < 1 - a$, $F(x+a) - F(x) = a$. When $1 - a \\le x < 1$, $F(x+a) - F(x) = 1 - x$. Integrating: $P(R \\le a) = n \\int_0^{1-a} a^{n-1} dx + n \\int_{1-a}^1 (1-x)^{n-1} dx = n(1-a)a^{n-1} + a^n$. Differentiating with respect to $a$: $f_R(a) = n(n-1)(1-a)a^{n-2} - n a^{n-1} + n a^{n-1} = n(n-1) a^{n-2} (1 - a)$ for $0 < a < 1$. This is $\\text{Beta}(n-1, 2)$.",
    "trap": "Remember to split the integral at $x = 1 - a$ because $F(x+a) = 1$ once $x + a \\ge 1$.",
    "tests": [
      "c.prob.6.6.1",
      "c.prob.6.6.2"
    ],
    "provenance": "Ross, 10e, §6.6, Example 6c, PDF pp. 279–280."
  },
  {
    "id": "w.prob.6.ross.example.7a",
    "legacyId": "w.prob.6.ross.ex.6.7.7a",
    "course": "prob",
    "sec": "6.7",
    "marks": 5,
    "title": "Ross Example 7a: Polar coordinates of independent standard normals",
    "prompt": "Let $X_1$ and $X_2$ be independent standard normal random variables, $X_1, X_2 \\sim N(0, 1)$. Define polar coordinates by $X_1 = R \\cos \\Theta, X_2 = R \\sin \\Theta$ with $R > 0$ and $0 < \\Theta < 2\\pi$. (a) Find the joint density of $R$ and $\\Theta$. (b) Deduce that $R^2 \\sim \\text{Exp}(1/2)$ and $\\Theta \\sim \\text{Unif}(0, 2\\pi)$ are independent.",
    "approach": "Apply the bivariate Jacobian transformation $(x_1, x_2) \\mapsto (r, \\theta)$ with Jacobian determinant $r$.",
    "solution": "(a) The joint density of $(X_1, X_2)$ is $f(x_1, x_2) = \\frac{1}{2\\pi} e^{-(x_1^2 + x_2^2)/2}$. The inverse transformation is $x_1 = r \\cos \\theta, x_2 = r \\sin \\theta$. The Jacobian is $J = \\det \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix} = r(\\cos^2\\theta + \\sin^2\\theta) = r$. Therefore, the joint density of $(R, \\Theta)$ is $f(r, \\theta) = f(r\\cos\\theta, r\\sin\\theta) |J| = \\frac{1}{2\\pi} r e^{-r^2/2}$ for $r > 0, 0 < \\theta < 2\\pi$. (b) The joint density factors as $[r e^{-r^2/2}] [\\frac{1}{2\\pi}]$ on $(0, \\infty) \\times (0, 2\\pi)$, establishing that $R$ and $\\Theta$ are independent. $\\Theta$ is uniform on $(0, 2\\pi)$. Letting $W = R^2$, $dw = 2r dr$, so $f_W(w) = \\frac{1}{2} e^{-w/2}$ for $w > 0$, which is $\\text{Exp}(\\lambda = 1/2)$.",
    "trap": "Do not forget the Jacobian factor $r$; without it, probability mass is not conserved.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Ross, 10e, §6.7, Example 7a, PDF pp. 281–282."
  },
  {
    "id": "w.prob.6.ross.example.7b",
    "course": "prob",
    "sec": "6.7",
    "marks": 5,
    "title": "Ross Example 7b: Box-Muller simulation method",
    "prompt": "Let $U_1$ and $U_2$ be independent $\\text{Unif}(0, 1)$ random variables. Prove that $X_1 = \\sqrt{-2\\ln U_1}\\cos(2\\pi U_2)$ and $X_2 = \\sqrt{-2\\ln U_1}\\sin(2\\pi U_2)$ are independent standard normal random variables.",
    "approach": "Invert Example 7a: show $R^2 = -2\\ln U_1 \\sim \\text{Exp}(1/2)$ and $\\Theta = 2\\pi U_2 \\sim \\text{Unif}(0, 2\\pi)$, then map back to Cartesian coordinates.",
    "solution": "For $U_1 \\sim \\text{Unif}(0, 1)$, let $W = -2\\ln U_1$. For $w > 0$, $P(W \\le w) = P(\\ln U_1 \\ge -w/2) = P(U_1 \\ge e^{-w/2}) = 1 - e^{-w/2}$. Thus $W \\sim \\text{Exp}(1/2)$. For $U_2 \\sim \\text{Unif}(0, 1)$, $\\Theta = 2\\pi U_2 \\sim \\text{Unif}(0, 2\\pi)$. Since $U_1$ and $U_2$ are independent, $W$ and $\\Theta$ are independent. Setting $R = \\sqrt{W}$, $(R, \\Theta)$ has joint density $\\frac{1}{2\\pi} r e^{-r^2/2}$ as in Example 7a. Transforming back to Cartesian coordinates $(X_1, X_2) = (R\\cos\\Theta, R\\sin\\Theta)$, the Jacobian of $(r, \\theta) \\mapsto (x_1, x_2)$ is $1/r$. The joint density is $f(x_1, x_2) = \\frac{1}{2\\pi} r e^{-(x_1^2+x_2^2)/2} (1/r) = [\\frac{1}{\\sqrt{2\\pi}} e^{-x_1^2/2}] [\\frac{1}{\\sqrt{2\\pi}} e^{-x_2^2/2}]$. This proves $X_1, X_2$ are independent $N(0, 1)$ random variables.",
    "trap": "This Box-Muller transformation efficiently generates pairs of independent Gaussian random numbers from two uniforms.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Ross, 10e, §6.7, Example 7b, PDF pp. 282–284."
  },
  {
    "id": "w.prob.6.ross.example.7c",
    "course": "prob",
    "sec": "6.7",
    "marks": 5,
    "title": "Ross Example 7c: Sum and ratio of independent gamma random variables",
    "prompt": "Let $X \\sim \\text{Gamma}(\\alpha, \\lambda)$ and $Y \\sim \\text{Gamma}(\\beta, \\lambda)$ be independent. Define $U = X + Y$ and $V = \\frac{X}{X + Y}$. Prove that $U$ and $V$ are independent, with $U \\sim \\text{Gamma}(\\alpha + \\beta, \\lambda)$ and $V \\sim \\text{Beta}(\\alpha, \\beta)$.",
    "approach": "Use the bivariate change-of-variables theorem with inverse transformation $x = uv, y = u(1-v)$ and Jacobian determinant $u$.",
    "solution": "The joint density of $(X, Y)$ is $f_{X,Y}(x, y) = \\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha)\\Gamma(\\beta)} e^{-\\lambda(x+y)} x^{\\alpha-1} y^{\\beta-1}$ for $x > 0, y > 0$. The transformation is $u = x + y, v = x/(x + y)$, so the inverse map is $x = uv, y = u(1-v)$ on $u > 0, 0 < v < 1$. The Jacobian matrix is $J = \\begin{pmatrix} v & u \\\\ 1-v & -u \\end{pmatrix}$, with $|\\det J| = |-uv - u(1-v)| = u$. Therefore: $f_{U,V}(u, v) = f_{X,Y}(uv, u(1-v)) |\\det J| = \\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha)\\Gamma(\\beta)} e^{-\\lambda u} (uv)^{\\alpha-1} [u(1-v)]^{\\beta-1} u = [\\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha+\\beta)} e^{-\\lambda u} u^{\\alpha+\\beta-1}] [\\frac{\\Gamma(\\alpha+\\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)} v^{\\alpha-1} (1-v)^{\\beta-1}]$. Since the joint density factors into a $\\text{Gamma}(\\alpha+\\beta, \\lambda)$ density in $u$ and a $\\text{Beta}(\\alpha, \\beta)$ density in $v$ on $(0, \\infty) \\times (0, 1)$, $U$ and $V$ are independent.",
    "trap": "The common rate parameter $\\lambda$ is essential for the exponential terms to combine into $e^{-\\lambda u}$.",
    "tests": [
      "c.prob.6.7.1",
      "c.prob.6.7.2"
    ],
    "provenance": "Ross, 10e, §6.7, Example 7c, PDF pp. 284–285."
  },
  {
    "id": "w.prob.6.ross.example.7d",
    "course": "prob",
    "sec": "6.7",
    "marks": 5,
    "title": "Ross Example 7d: Linear transformation of three standard normal variables",
    "prompt": "Let $X_1, X_2, X_3$ be independent standard normal random variables. Define $Y_1 = X_1 + X_2 + X_3$, $Y_2 = X_1 - X_2$, and $Y_3 = X_1 - X_3$. Compute the joint density function of $Y_1, Y_2, Y_3$.",
    "approach": "Compute the linear system inverse, find the Jacobian determinant $J = 3$, and substitute into the multivariate normal product density.",
    "solution": "The transformation is linear: $\\begin{pmatrix} Y_1 \\\\ Y_2 \\\\ Y_3 \\end{pmatrix} = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 1 & 0 & -1 \\end{pmatrix} \\begin{pmatrix} X_1 \\\\ X_2 \\\\ X_3 \\end{pmatrix}$. The determinant of the transformation matrix is $1(1 - 0) - 1(-1 - 0) + 1(0 - (-1)) = 1 + 1 + 1 = 3$. Solving for $X_i$: $X_1 = \\frac{Y_1 + Y_2 + Y_3}{3}$, $X_2 = \\frac{Y_1 - 2Y_2 + Y_3}{3}$, $X_3 = \\frac{Y_1 + Y_2 - 2Y_3}{3}$. The inverse Jacobian determinant is $|J|^{-1} = 1/3$. The joint density of $(X_1, X_2, X_3)$ is $(2\\pi)^{-3/2} \\exp\\{-\\frac{1}{2}(x_1^2 + x_2^2 + x_3^2)\\}$. Expressing $x_1^2 + x_2^2 + x_3^2$ in $y_i$: $\\frac{1}{9}[(y_1+y_2+y_3)^2 + (y_1-2y_2+y_3)^2 + (y_1+y_2-2y_3)^2] = \\frac{1}{9}[3y_1^2 + 6y_2^2 + 6y_3^2 - 6y_2 y_3] = \\frac{y_1^2 + 2y_2^2 + 2y_3^2 - 2y_2 y_3}{3}$. Thus $f_{Y_1,Y_2,Y_3}(y_1, y_2, y_3) = \\frac{1}{3(2\\pi)^{3/2}} \\exp\\{-\\frac{y_1^2 + 2y_2^2 + 2y_3^2 - 2y_2 y_3}{6}\\}$. Notice $Y_1$ is independent of $(Y_2, Y_3)$ because no cross-terms with $y_1$ appear in the exponent.",
    "trap": "Divide by the determinant 3 when changing variables; check that $\\text{Cov}(Y_1, Y_2) = \\text{Cov}(X_1+X_2+X_3, X_1-X_2) = 1 - 1 = 0$.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Ross, 10e, §6.7, Example 7d, PDF p. 285."
  },
  {
    "id": "w.prob.6.ross.example.7e",
    "course": "prob",
    "sec": "6.7",
    "marks": 5,
    "title": "Ross Example 7e: Partial sums of exponentials and uniform order statistics",
    "prompt": "Let $X_1, \\ldots, X_n$ be i.i.d. $\\text{Exp}(\\lambda)$ random variables. Define partial sums $Y_i = \\sum_{j=1}^i X_j$ for $i = 1, \\ldots, n$. (a) Find the joint density of $Y_1, \\ldots, Y_n$. (b) Find the conditional distribution of $(Y_1, \\ldots, Y_{n-1})$ given $Y_n = t$.",
    "approach": "The transformation $y_i = x_1 + \\cdots + x_i$ has triangular Jacobian with determinant 1. Divide by the gamma marginal of $Y_n$.",
    "solution": "(a) The inverse transformation is $x_1 = y_1, x_i = y_i - y_{i-1}$ for $i = 2, \\ldots, n$, on $0 < y_1 < y_2 < \\cdots < y_n < \\infty$. The Jacobian matrix is lower triangular with 1s on the diagonal, so $|J| = 1$. The joint density of $X_1, \\ldots, X_n$ is $\\prod_{i=1}^n \\lambda e^{-\\lambda x_i} = \\lambda^n e^{-\\lambda \\sum x_i} = \\lambda^n e^{-\\lambda y_n}$. Hence $f_{Y_1,\\ldots,Y_n}(y_1, \\ldots, y_n) = \\lambda^n e^{-\\lambda y_n}$ for $0 < y_1 < y_2 < \\cdots < y_n < \\infty$. (b) $Y_n = \\sum_{i=1}^n X_i \\sim \\text{Gamma}(n, \\lambda)$, with density $f_{Y_n}(t) = \\frac{\\lambda e^{-\\lambda t}(\\lambda t)^{n-1}}{(n-1)!}$. The conditional density is $f_{Y_1,\\ldots,Y_{n-1}\\mid Y_n}(y_1, \\ldots, y_{n-1} \\mid t) = \\frac{f(y_1, \\ldots, y_{n-1}, t)}{f_{Y_n}(t)} = \\frac{\\lambda^n e^{-\\lambda t}}{\\frac{\\lambda^n t^{n-1} e^{-\\lambda t}}{(n-1)!}} = \\frac{(n-1)!}{t^{n-1}}$ for $0 < y_1 < y_2 < \\cdots < y_{n-1} < t$. This is exactly the joint density of the order statistics of $n - 1$ independent $\\text{Unif}(0, t)$ random variables.",
    "trap": "Poisson process arrival times conditioned on $N(t) = n - 1$ are distributed as uniform order statistics on $[0, t]$.",
    "tests": [
      "c.prob.6.7.1",
      "c.prob.6.6.1"
    ],
    "provenance": "Ross, 10e, §6.7, Example 7e, PDF pp. 285–286."
  },
  {
    "id": "w.prob.6.ross.example.8a",
    "legacyId": "w.prob.6.ross.ex.6.8.8a",
    "course": "prob",
    "sec": "6.8",
    "marks": 4,
    "title": "Ross Example 8a: Exchangeability of urn draws without replacement",
    "prompt": "An urn contains $n$ red and $m$ blue balls. A sample of $k$ balls is drawn without replacement ($k \\le n + m$). Let $X_i = 1$ if the $i$-th ball drawn is red, and 0 otherwise. Show that the sequence $X_1, \\ldots, X_k$ is exchangeable.",
    "approach": "Calculate the probability of any specific binary sequence $(x_1, \\ldots, x_k)$ containing $r$ ones and show it depends only on $r$.",
    "solution": "Consider any sequence $(x_1, \\ldots, x_k)$ with $\\sum_{i=1}^k x_i = r$ ones (red balls) and $k - r$ zeros (blue balls). Total selections of $k$ balls from $n + m$ ordered without replacement is $(n+m)(n+m-1)\\cdots(n+m-k+1)$. The number of ways the red balls can appear in the specified $r$ positions and blue in the $k-r$ positions is $[n(n-1)\\cdots(n-r+1)][m(m-1)\\cdots(m-(k-r)+1)]$. Thus $P(X_1 = x_1, \\ldots, X_k = x_k) = \\frac{n!}{(n-r)!} \\frac{m!}{(m-k+r)!} \\frac{(n+m-k)!}{(n+m)!} = \\frac{\\binom{n}{r}\\binom{m}{k-r}}{\\binom{n+m}{k} \\binom{k}{r}}$. Since this probability depends only on the number of ones $r$ and not on their locations, the joint probability is invariant under any permutation of the coordinates. Therefore $X_1, \\ldots, X_k$ are exchangeable.",
    "trap": "Exchangeability is permutation symmetry of the joint distribution; it does NOT imply independence ($P(X_2 = 1 \\mid X_1 = 1) = \\frac{n-1}{n+m-1} \\ne \\frac{n}{n+m}$).",
    "tests": [
      "c.prob.6.8.1"
    ],
    "provenance": "Ross, 10e, §6.8, Example 8a, PDF p. 287."
  },
  {
    "id": "w.prob.6.ross.example.8b",
    "course": "prob",
    "sec": "6.8",
    "marks": 5,
    "title": "Ross Example 8b: Exchangeability of waiting intervals in urn sampling",
    "prompt": "In successive drawings of balls without replacement from an urn containing $n$ red and $k$ special blue balls, let $Y_i$ denote the number of red balls observed between the $(i-1)$-th and $i$-th blue ball ($i = 1, \\ldots, k$). Prove that $Y_1, \\ldots, Y_k$ are exchangeable random variables.",
    "approach": "Relate the interval vector $(Y_1, \\ldots, Y_k)$ to the positions of the $k$ blue balls in the sequence.",
    "solution": "The event $\\{Y_1 = i_1, Y_2 = i_2, \\ldots, Y_k = i_k\\}$ occurs if and only if the blue balls appear at exact cumulative positions $i_1 + 1, i_1 + i_2 + 2, \\ldots, \\sum_{j=1}^k i_j + k$. Because all $\\binom{n+k}{k}$ subsets of $k$ positions for the blue balls are equally likely, each specific valid position set has probability $1/\\binom{n+k}{k} = \\frac{k! n!}{(n+k)!}$. This probability is constant for all nonnegative integer tuples $(i_1, \\ldots, i_k)$ such that $\\sum_{j=1}^k i_j \\le n$. Since $P(Y_1 = i_1, \\ldots, Y_k = i_k)$ is a symmetric function of $(i_1, \\ldots, i_k)$, the random variables $Y_1, \\ldots, Y_k$ are exchangeable.",
    "trap": "The intervals between occurrences of a rare item in a random permutation are exchangeable and identically distributed.",
    "tests": [
      "c.prob.6.8.1"
    ],
    "provenance": "Ross, 10e, §6.8, Example 8b, PDF p. 288."
  },
  {
    "id": "w.prob.6.ross.example.8c",
    "course": "prob",
    "sec": "6.8",
    "marks": 5,
    "title": "Ross Example 8c: Exchangeability in the Polya urn model",
    "prompt": "An urn initially contains $n$ red and $m$ blue balls. At each stage, a ball is drawn, its color noted, and it is replaced along with another ball of the same color. Let $X_i = 1$ if the $i$-th ball is red and 0 if blue. Prove that the sequence $X_1, X_2, \\ldots, X_k$ is exchangeable, and deduce $P(X_i = 1) = \\frac{n}{n+m}$ for all $i$.",
    "approach": "Compute the probability of any sequence containing $r$ ones and $k - r$ zeros, and observe cancellation under permutation.",
    "solution": "Consider any binary sequence $x_1, \\ldots, x_k$ with $r$ ones and $k - r$ zeros. At step $j$, the total balls in the urn is $n + m + j - 1$. The red balls drawn have counts $n, n+1, \\ldots, n+r-1$, and blue balls drawn have counts $m, m+1, \\ldots, m+k-r-1$, regardless of the order in which they appear! Therefore: $P(X_1 = x_1, \\ldots, X_k = x_k) = \\frac{[n(n+1)\\cdots(n+r-1)][m(m+1)\\cdots(m+k-r-1)]}{(n+m)(n+m+1)\\cdots(n+m+k-1)}$. This depends only on the total number of red balls $r$, not their order. Hence the sequence is exchangeable. Since exchangeability implies identical marginal distributions: $P(X_i = 1) = P(X_1 = 1) = \\frac{n}{n+m}$ for every $i \\ge 1$.",
    "trap": "Although the composition changes after every draw, the probability that the $i$-th draw is red is always $n/(n+m)$.",
    "tests": [
      "c.prob.6.8.1",
      "c.prob.6.8.2"
    ],
    "provenance": "Ross, 10e, §6.8, Example 8c, PDF p. 288."
  },
  {
    "id": "w.prob.6.ross.example.8d",
    "course": "prob",
    "sec": "6.8",
    "marks": 5,
    "title": "Ross Example 8d: Exchangeability of uniform order statistic spacings",
    "prompt": "Let $X_1, \\ldots, X_n$ be i.i.d. $\\text{Unif}(0, 1)$ random variables with order statistics $X_{(1)} < X_{(2)} < \\cdots < X_{(n)}$. Define the spacings $Y_1 = X_{(1)}$ and $Y_i = X_{(i)} - X_{(i-1)}$ for $i = 2, \\ldots, n$. Prove that $Y_1, \\ldots, Y_n$ are exchangeable random variables.",
    "approach": "Compute the joint density of $(Y_1, \\ldots, Y_n)$ using the Jacobian transformation from $(X_{(1)}, \\ldots, X_{(n)})$ and verify symmetry.",
    "solution": "The order statistics have joint density $f(x_1, \\ldots, x_n) = n!$ on $0 < x_1 < x_2 < \\cdots < x_n < 1$. The transformation is $y_1 = x_1$ and $y_i = x_i - x_{i-1}$ for $i = 2, \\ldots, n$. The inverse transformation is $x_i = \\sum_{j=1}^i y_j$ for $i = 1, \\ldots, n$. The Jacobian matrix is lower triangular with 1s on the diagonal, so $|J| = 1$. The region $0 < x_1 < \\cdots < x_n < 1$ maps to $y_i > 0$ for all $i$ and $\\sum_{i=1}^n y_i < 1$. Therefore, the joint density of $(Y_1, \\ldots, Y_n)$ is $f_{Y_1,\\ldots,Y_n}(y_1, \\ldots, y_n) = n!$ on $\\{y_i > 0 : \\sum_{i=1}^n y_i < 1\\}$, and 0 elsewhere. Because this joint density and its support are completely symmetric functions of $(y_1, \\ldots, y_n)$, the random variables $Y_1, \\ldots, Y_n$ are exchangeable.",
    "trap": "The spacings partition the unit interval into $n + 1$ exchangeable pieces; each spacing has the exact same marginal distribution.",
    "tests": [
      "c.prob.6.8.1"
    ],
    "provenance": "Ross, 10e, §6.8, Example 8d, PDF pp. 288–289."
  },
  {
    "id": "w.prob.6.ross.prob.8",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 8: An even-in-x density",
    "prompt": "$f(x,y)=c(y^2-x^2)e^{-y}$ for $y>0,-y<x<y$. Find (a) $c$; (b) both marginal densities; (c) $E[X]$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Integrating over x gives $4y^3/3$. Its integral against $e^{-y}$ is $(4/3)3!=8$, so $c=1/8$. (b) $f_Y(y)=y^3e^{-y}/6$ for $y>0$. For fixed x, integrate y from $|x|$ to infinity: $f_X(x)=\\frac18\\int_{|x|}^\\infty(y^2-x^2)e^{-y}dy=(|x|+1)e^{-|x|}/4$, for real x. (c) The marginal is symmetric and has finite first absolute moment, so $E[X]=0$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 8."
  },
  {
    "id": "w.prob.6.ross.prob.15",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 15: Uniform regions",
    "prompt": "A joint density is constant $c$ on a plane region $R$, zero elsewhere. (a) Show $1/c$ is its area. When the region is the square $(-1,1)^2$, (b) show X and Y are independent uniforms; (c) find $P(X^2+Y^2\\le1)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The total integral is $c\\operatorname{area}(R)=1$. (b) For the square c is $1/4$, and each marginal has density $1/2$ on $(-1,1)$; their product is the joint density. (c) The disk is fully inside the square; area ratio gives $\\pi/4$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 15."
  },
  {
    "id": "w.prob.6.ross.prob.22",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 22: A nonproduct square density",
    "prompt": "$f(x,y)=x+y$ on $0<x,y<1$. (a) Are X and Y independent? (b) Find $f_X$; (c) find $P(X+Y<1)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(b) $f_X(x)=x+1/2$, and similarly $f_Y(y)=y+1/2$. (a) Their product $(x+1/2)(y+1/2)$ is not x+y, so no. (c) Integrate over $0<y<1-x$: $\\int_0^1[x(1-x)+(1-x)^2/2]dx=1/3$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 22."
  },
  {
    "id": "w.prob.6.ross.prob.31",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 31: Breakfast proportions",
    "prompt": "Independent samples of 200 men and 200 women have probabilities .252 and .236 of never eating breakfast. Approximate (a) the chance at least 110 of all 400 never do; (b) the chance the female count is at least the male count.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Let M and W be independent binomial counts. Their means are 50.4 and 47.2, variances $200(.252)(.748)$ and $200(.236)(.764)$. (a) The total mean is 97.6 and variance 73.76, so use $1-\\Phi((109.5-97.6)/\\sqrt{73.76})$. (b) The difference W minus M has mean -3.2 and the same variance, so use $1-\\Phi((-.5+3.2)/\\sqrt{73.76})$. These are continuity-corrected approximations, not exact binomial sums.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 31."
  },
  {
    "id": "w.prob.6.ross.prob.42",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Problem 42: Choose a number then a smaller one",
    "prompt": "Choose X uniformly from $1,\\ldots,5$, then Y uniformly from $1,\\ldots,X$. (a) Find the joint pmf; (b) find $X\\mid Y=i$ for each $i=1,\\ldots,5$; (c) check independence.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) $p(x,y)=1/(5x)$ for $1\\le y\\le x\\le5$, zero otherwise. (b) Let $h_i=\\sum_{r=i}^5 1/r$. Then $P(X=x\\mid Y=i)=1/(xh_i)$ for $x=i,\\ldots,5$. The respective h values are $137/60,77/60,47/60,9/20,1/5$, so this formula gives every requested conditional table. (c) They are dependent: Y=5 forces X=5, whereas unconditionally X=5 has probability 1/5.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 42."
  },
  {
    "id": "w.prob.6.ross.prob.52",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 52: Smallest and largest exponential times",
    "prompt": "Five iid exponential$(\\lambda)$ variables are sampled. Find (a) $P(\\min_i X_i\\le a)$; (b) $P(\\max_iX_i\\le a)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For $a\\ge0$, (a) all five exceed a with probability $e^{-5\\lambda a}$, so the answer is $1-e^{-5\\lambda a}$. (b) All five are at most a with probability $(1-e^{-\\lambda a})^5$. Both requested probabilities are zero for $a<0$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 52."
  },
  {
    "id": "w.prob.6.ross.theor.3",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Theoretical 3: Estimate pi with a needle",
    "prompt": "A needle of length L no greater than the distance D between parallel lines is dropped with uniform orientation and midpoint. How can repeated drops estimate pi?",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The crossing probability is $q=2L/(\\pi D)$. After N independent drops let C be the crossing count. Its proportion C/N estimates q, so for C>0 use $\\widehat\\pi=2LN/(DC)$. With L=D the estimate is $2N/C$. The law of large numbers makes it approach pi as N grows; a small number of crossings gives an unstable estimate, and C=0 gives no finite estimate.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 3."
  },
  {
    "id": "w.prob.6.ross.theor.9",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Theoretical 9: Minimum of equal-rate exponentials",
    "prompt": "Find the distribution of the minimum of n independent exponential$(\\lambda)$ variables.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "For t at least zero, all n exceed t with probability $(e^{-\\lambda t})^n=e^{-n\\lambda t}$. Thus the minimum is exponential with rate $n\\lambda$, CDF $1-e^{-n\\lambda t}$ and density $n\\lambda e^{-n\\lambda t}$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 9."
  },
  {
    "id": "w.prob.6.ross.theor.17",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Theoretical 17: Shared-component Poisson counts",
    "prompt": "Independent Poisson $X_1,X_2,X_3$ have means $\\lambda_1,\\lambda_2,\\lambda_3$. Set $X=X_1+X_2$, $Y=X_2+X_3$. Find their joint pmf.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "If X=n and Y=m, the shared count X_2 can equal k from 0 through min(n,m); then X_1=n-k and X_3=m-k. Independence gives $P(X=n,Y=m)=e^{-(\\lambda_1+\\lambda_2+\\lambda_3)}\\sum_{k=0}^{\\min(n,m)}\\lambda_1^{n-k}\\lambda_2^k\\lambda_3^{m-k}/[(n-k)!k!(m-k)!]$ for nonnegative integers n,m. The cases in this sum are disjoint.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 17."
  },
  {
    "id": "w.prob.6.ross.theor.26",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 26: Separated uniform points",
    "prompt": "n at least two points are independently uniform on a road of length L. Find the chance every pair is at least distance D apart for D at least zero.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Order the points, then require each consecutive gap to be at least D. Subtract $(i-1)D$ from the ith ordered coordinate. The transformed ordered region has length $L-(n-1)D$ and Jacobian 1. Its volume is that length raised to n divided by n factorial. Multiplying by the ordered density n factorial over L to the n gives $[1-(n-1)D/L]^n$ if $D\\le L/(n-1)$. For larger D it is impossible, so probability zero.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 26."
  },
  {
    "id": "w.prob.6.ross.selftest.3",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 3: A nonsymmetric triangular-exponential density",
    "prompt": "$f(x,y)=C(y-x)e^{-y}$ on $y>0,-y<x<y$. Find (a) C; (b) $f_X$; (c) $f_Y$; (d) $E[X]$; (e) $E[Y]$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The integral over x is $2y^2$, and its integral against $e^{-y}$ is 4, so C=1/4. (b) $f_X(x)=\\frac14\\int_{|x|}^\\infty(y-x)e^{-y}dy=\\frac14(|x|+1-x)e^{-|x|}$ for real x. (c) $f_Y(y)=y^2e^{-y}/2$, y>0, a gamma$(3,1)$ density. (e) Its mean is 3. (d) Given Y=y, $f_{X\\mid Y}(x\\mid y)=(y-x)/(2y^2)$ on (-y,y). Integrating x times this gives $E[X\\mid Y=y]=-y/3$, so E[X]=-1.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 3."
  },
  {
    "id": "w.prob.6.ross.selftest.9",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Selftest 9: Uniform advertisement sampling",
    "prompt": "A directory has m pages with n(i) advertisements on page i, all at most B; let A be the positive total. (a) Is choosing a uniform page then uniform ad unbiased? Instead repeatedly choose a uniform page, accept it with probability n(i)/B, and choose a uniform ad after acceptance. Find (b) chance one iteration accepts page i; (c) chance it accepts any ad; (d) chance it ends at iteration k with specified ad j on page i; (e) final chance of that ad; (f) expected iterations.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) A specified ad on page i would have chance $1/[mn(i)]$, so pages with fewer ads are overrepresented. (b) Acceptance from page i is n(i)/(mB). (c) Total acceptance chance is q=A/(mB). (d) A specified ad has single-iteration selection chance $[1/m][n(i)/B][1/n(i)]=1/(mB)$, so the requested chance is $(1-q)^{k-1}/(mB)$. (e) Sum the geometric series: $1/(mBq)=1/A$, identical for every ad. (f) Geometric waiting time has mean $1/q=mB/A$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 9."
  },
  {
    "id": "w.prob.6.ross.selftest.15",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Selftest 15: A uniform value and its sum",
    "prompt": "Independent X,Y are uniform$(0,1)$. (a) Find the joint density of U=X,V=X+Y; (b) derive the density of V.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Invert x=u,y=v-u with Jacobian 1. The density is 1 on $0<u<1,u<v<u+1$, zero elsewhere. (b) At fixed v the allowed u interval is $(\\max(0,v-1),\\min(1,v))$. Its length is v for 0<v<1 and 2-v for 1 at most v<2. Thus V has the triangular density, zero outside (0,2).",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 15."
  },
  {
    "id": "w.prob.6.ross.selftest.21",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 21: A joint survival identity",
    "prompt": "Prove $P(X\\le s,Y\\le t)=P(X\\le s)+P(Y\\le t)+P(X>s,Y>t)-1$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Let A={X at most s} and B={Y at most t}. The event both exceeding the cutoffs is the complement of A union B. Thus its probability is $1-P(A)-P(B)+P(A\\cap B)$ by inclusion-exclusion. Rearranging gives the required identity, with no independence assumption.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 21."
  },
  {
    "id": "w.prob.6.ross.problem.1",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 1: Two-dice joint laws",
    "prompt": "Two fair dice show $A,B$. Find the joint pmf for (a) $X=\\max(A,B),Y=A+B$; (b) $X=A,Y=\\max(A,B)$; (c) $X=\\min(A,B),Y=\\max(A,B)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "All 36 ordered pairs are equally likely. (a) For $1\\le i\\le6$, $i+1\\le j<2i$, the mass is $2/36$; at $j=2i$ it is $1/36$. (b) For $1\\le i\\le6$, at $j=i$ there are $i$ possible second-die values, so mass $i/36$; at $i<j\\le6$ mass is $1/36$. (c) On $1\\le i\\le j\\le6$, mass is $1/36$ for $i=j$, $2/36$ otherwise. In every case the mass is zero outside the stated support.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 1."
  },
  {
    "id": "w.prob.6.ross.problem.2",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 2: Colors without replacement",
    "prompt": "Draw three balls from 5 white and 8 red, without replacement. Let $X_i$ indicate that draw $i$ is white. Find the joint pmfs of (a) $(X_1,X_2)$ and (b) $(X_1,X_2,X_3)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For a specified binary pattern of length $k=2$ or $3$ containing $r$ ones, multiply the successive color probabilities: $P(\\text{pattern})=(5)_r(8)_{k-r}/(13)_k$, where $(a)_b=a(a-1)\\cdots(a-b+1)$. Thus for (a), $p(1,1)=5/39$, $p(1,0)=p(0,1)=10/39$, $p(0,0)=14/39$. For (b), each pattern with $r=0,1,2,3$ ones has probability $28/143,70/429,40/429,5/143$, respectively. These are per-pattern probabilities, not probabilities of the count.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 2."
  },
  {
    "id": "w.prob.6.ross.problem.3",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 3: Which numbered balls are selected?",
    "prompt": "In a sample of three balls from the same 13-ball urn without replacement, $Y_i$ indicates that numbered white ball $i$ is among the sample. Find the joint laws of (a) $Y_1,Y_2$; (b) $Y_1,Y_2,Y_3$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For $k=2$ or $3$ specified white balls and a specified pattern with $r$ included, choose the remaining $3-r$ balls from the $13-k$ balls whose status is unspecified. The mass is $\\binom{13-k}{3-r}/\\binom{13}{3}$. (a) The masses for patterns $00,10,01,11$ are $165,55,55,11$, divided by 286. (b) Each pattern with $r=0,1,2,3$ has mass $120,45,10,1$, divided by 286.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 3."
  },
  {
    "id": "w.prob.6.ross.problem.4",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 4: Colors with replacement",
    "prompt": "Repeat the two- and three-draw color joint laws when each drawn ball is replaced before the next draw.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Each color is now independent with white chance $5/13$. A particular binary pattern of length $k=2$ or $3$ with $r$ ones has mass $(5/13)^r(8/13)^{k-r}$. This gives every requested joint mass. Replacement keeps the urn composition fixed.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 4."
  },
  {
    "id": "w.prob.6.ross.problem.5",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 5: Presence of two numbered balls",
    "prompt": "Three balls are sampled with replacement from 13 numbered balls. Let $Y_1,Y_2$ indicate whether two specified white balls appear at least once. Find their joint pmf.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "$p(0,0)=(11/13)^3$. To obtain $10$, avoid ball 2 but do not avoid both: $p(1,0)=(12/13)^3-(11/13)^3$; $p(0,1)$ is the same. Inclusion–exclusion gives $p(1,1)=1-2(12/13)^3+(11/13)^3$. These four masses sum to one.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 5."
  },
  {
    "id": "w.prob.6.ross.problem.6",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 6: Cancer grades before and after",
    "prompt": "Before-treatment grade $X$ and after-treatment grade $Y$ take values 1 to 4. Their joint table has rows $(.08,.06,.04,.02)$, $(.06,.12,.08,.04)$, $(.03,.09,.12,.06)$, $(.01,.03,.07,.09)$. Find (a) the marginals; (b) their means; (c) their variances.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Add rows: $p_X=(.2,.3,.3,.2)$. Add columns: $p_Y=(.18,.30,.31,.21)$. (b) Weighted sums give $E[X]=2.5$, $E[Y]=2.55$. (c) $E[X^2]=7.3$, $E[Y^2]=7.53$. Subtract squared means: $\\operatorname{Var}(X)=1.05$, $\\operatorname{Var}(Y)=1.0275$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 6."
  },
  {
    "id": "w.prob.6.ross.problem.7",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 7: Failures between successes",
    "prompt": "Independent trials succeed with chance $p>0$. $X_1$ counts failures before the first success, and $X_2$ failures between the first two successes. Find their joint law.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The specified pattern is $i$ failures, a success, $j$ failures, a success. Its probability is $p^2(1-p)^{i+j}$ for integers $i,j\\ge0$. This equals $[p(1-p)^i][p(1-p)^j]$, so the two counts are independent geometric failure counts.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 7."
  },
  {
    "id": "w.prob.6.ross.problem.9",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 9: A polynomial density on a rectangle",
    "prompt": "Let $f(x,y)=\\frac6{7}(x^2+xy/2)$ on $0<x<1,0<y<2$, zero elsewhere. (a) Verify normalization; (b) find $f_X$; (c) find $P(X>Y)$; (d) find $P(Y>1/2\\mid X<1/2)$; (e,f) find both means. The flattened source prints xy2; the fraction $xy/2$ is the interpretation that makes the stated density integrate to one.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The double integral is $\\frac67(2/3+1/2)=1$, and the function is nonnegative. (b) Integrating over $y$ gives $f_X(x)=\\frac67(2x^2+x)$, $0<x<1$. (c) Integrating over $0<y<x<1$ gives $\\frac67\\int_0^1(x^3+x^3/4)dx=15/56$. (d) The numerator is $\\frac67\\int_0^{1/2}(3x^2/2+15x/16)dx=\\frac67(23/128)$; the denominator is $\\frac67\\int_0^{1/2}(2x^2+x)dx=\\frac67(5/24)$; their ratio is $69/80$. (e) $E[X]=\\frac67\\int_0^1(2x^3+x^2)dx=5/7$. (f) Integrating $yf(x,y)$ over the rectangle gives $\\frac67(2/3+2/3)=8/7$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 9."
  },
  {
    "id": "w.prob.6.ross.problem.10",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 10: Two exponential coordinates",
    "prompt": "Let $f(x,y)=e^{-(x+y)}$ on $x,y>0$. Find (a) $P(X<Y)$; (b) $P(X<a)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The density factors into two identical exponential densities. (a) By symmetry and zero tie probability, $P(X<Y)=1/2$. Directly, $\\int_0^\\infty e^{-x}\\int_x^\\infty e^{-y}dy\\,dx=1/2$. (b) Integrating the marginal $e^{-x}$ gives $1-e^{-a}$ for $a>0$, and zero for $a\\le0$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 10."
  },
  {
    "id": "w.prob.6.ross.problem.11",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 11: Check an exponential joint density",
    "prompt": "Verify that $f(x,y)=2e^{-x-2y}$ on $x,y>0$ is a density.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "It is nonnegative. Its integral is $(\\int_0^\\infty e^{-x}dx)(\\int_0^\\infty2e^{-2y}dy)=1\\cdot1=1$. Set it to zero outside the positive quadrant.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 11."
  },
  {
    "id": "w.prob.6.ross.problem.12",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Problem 12: Men given a women count",
    "prompt": "The number entering a drugstore in an hour is Poisson with mean 10. Find the probability of at most three men given ten women, stating the extra assumptions required.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The total count alone does not determine gender counts. Assume each arrival is independently male with probability $p$ and female otherwise, independently of the arrival process. Poisson splitting gives independent $M\\sim\\operatorname{Pois}(10p)$ and $W\\sim\\operatorname{Pois}(10(1-p))$. Hence $P(M\\le3\\mid W=10)=e^{-10p}\\sum_{k=0}^3(10p)^k/k!$. If genders are equally likely, $p=1/2$ gives $e^{-5}(1+5+25/2+125/6)\\approx.2650$. Conditioning on ten women is different from conditioning on ten total arrivals.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 12."
  },
  {
    "id": "w.prob.6.ross.problem.13",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 13: Meeting times",
    "prompt": "A man arrives uniformly between 12:15 and 12:45; a woman independently arrives uniformly between noon and 1 p.m. (a) What is the probability the earlier arrival waits at most five minutes? (b) What is the probability the man arrives first?",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Use minutes after noon: $15<X<45$, $0<Y<60$, with density $1/1800$. (a) For every $x$, the acceptable $y$ interval $[x-5,x+5]$ has length 10, so the area is $30\\cdot10$ and probability $1/6$. (b) For fixed $x$, $P(Y>x)=1-x/60$; average over $X$, whose mean is 30, to get $1-30/60=1/2$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 13."
  },
  {
    "id": "w.prob.6.ross.problem.14",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 14: Ambulance distance",
    "prompt": "An accident and ambulance are independently uniform along a road of length $L$. Find the distribution of their distance $D$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The two coordinates fill an $L\\times L$ square uniformly. The event $D>d$ comprises two corner triangles with total area $(L-d)^2$. Thus $F_D(d)=0$ for $d<0$, $1-(1-d/L)^2$ for $0\\le d\\le L$, and 1 for $d>L$. Differentiation gives $f_D(d)=2(L-d)/L^2$ on $(0,L)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 14."
  },
  {
    "id": "w.prob.6.ross.problem.16",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 16: Points in a semicircle",
    "prompt": "$n\\ge2$ independent uniform points lie on a circle. Let $A_i$ mean all points fit in the clockwise semicircle starting at point $i$. (a) Express the event $A$ that some semicircle contains all points; (b) discuss mutual exclusion; (c) find its probability.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Rotate any containing semicircle until its first boundary reaches a sample point: $A=\\bigcup_i A_i$. (b) Two such events can overlap only in boundary configurations (for example antipodal points), whose probability is zero for continuous sampling; they are disjoint almost surely, though not literally disjoint as sets. (c) Given point $i$, each of the other $n-1$ points has independent chance $1/2$ to fall in its semicircle. Hence $P(A)=n/2^{n-1}$. For $n=1$ it is 1.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 16."
  },
  {
    "id": "w.prob.6.ross.problem.17",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 17: The middle of three random points",
    "prompt": "Three points are sampled independently from the same continuous distribution on a line. What is the probability point 2 lies between points 1 and 3?",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "All six strict orders are equally likely. Two have point 2 in the middle: $1<2<3$ and $3<2<1$. The answer is $2/6=1/3$. The identical-distribution and no-tie assumptions are needed.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 17."
  },
  {
    "id": "w.prob.6.ross.problem.18",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 18: Products and sums of binomials",
    "prompt": "Independent $X_i\\sim\\operatorname{Bin}(n_i,p_i)$, $i=1,2$. Find (a) $P(X_1X_2=0)$; (b) $P(X_1+X_2=1)$; (c) $P(X_1+X_2=2)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Write $b_i(k)=\\binom{n_i}{k}p_i^k(1-p_i)^{n_i-k}$, taken as zero for impossible $k$. (a) Inclusion–exclusion gives $b_1(0)+b_2(0)-b_1(0)b_2(0)$. (b) The two possibilities give $b_1(0)b_2(1)+b_1(1)b_2(0)$. (c) The three possibilities give $b_1(0)b_2(2)+b_1(1)b_2(1)+b_1(2)b_2(0)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 18."
  },
  {
    "id": "w.prob.6.ross.problem.19",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 19: Density on a triangle",
    "prompt": "For $f(x,y)=1/x$ on $0<y<x<1$, (a) verify normalization and find $f_Y$; (b) find $f_X$; (c,d) find the means.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The inner integral over $0<y<x$ is 1, and integrating over $0<x<1$ gives 1. (a) $f_Y(y)=\\int_y^1dx/x=-\\ln y$ for $0<y<1$. (b) $f_X(x)=1$ for $0<x<1$. (c) $E[X]=1/2$. (d) Conditional on $X=x$, $Y$ is uniform on $(0,x)$; so $E[Y]=E[X/2]=1/4$, also obtainable by integrating $-y\\ln y$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 19."
  },
  {
    "id": "w.prob.6.ross.problem.20",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 20: Factorization and support",
    "prompt": "Are $X,Y$ independent for (a) $f(x,y)=xe^{-(x+y)}$ on $x,y>0$; (b) $f(x,y)=2$ on $0<x<y<1$?",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The marginals are $xe^{-x}$ and $e^{-y}$; their product equals the joint density, so yes. (b) The marginals are $2(1-x)$ and $2y$ on $(0,1)$. Their product is positive even for $x>y$, where the joint density is zero. Thus they are dependent.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 20."
  },
  {
    "id": "w.prob.6.ross.problem.21",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Problem 21: A weighted triangle",
    "prompt": "$f(x,y)=24xy$ on $x,y>0,x+y<1$. (a) Verify it is a density; (b,c) find both means.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Integrate $y$ first: $f_X(x)=12x(1-x)^2$. Its integral is $12(1/2-2/3+1/4)=1$, and the density is nonnegative. Then $E[X]=12\\int_0^1x^2(1-x)^2dx=12(1/3-1/2+1/5)=2/5$. Symmetry gives $E[Y]=2/5$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 21."
  },
  {
    "id": "w.prob.6.ross.problem.23",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 23: Product polynomial density",
    "prompt": "$f(x,y)=12xy(1-x)$ on $0<x,y<1$. (a) Are the variables independent? (b,c) Find the means; (d,e) find the variances.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The marginals are $f_X(x)=6x(1-x)$ and $f_Y(y)=2y$. Their product is the joint density, so they are independent. $X$ is beta$(2,2)$: $E[X]=1/2$, $E[X^2]=3/10$, variance $1/20$. For $Y$, $E[Y]=2/3$, $E[Y^2]=1/2$, variance $1/18$. Each value follows by integrating the corresponding power against its marginal.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 23."
  },
  {
    "id": "w.prob.6.ross.problem.24",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 24: Wait for a nonzero outcome",
    "prompt": "Independent trials have outcomes $0,1,\\ldots,k$ with probabilities $p_j$, where $p_0<1$. $N$ is the first nonzero trial and $X$ its outcome. (a) Find the law of $N$; (b) find the law of $X$; (c) prove independence; (d,e) explain independence in either direction.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) $P(N=n)=p_0^{n-1}(1-p_0)$, $n\\ge1$. (b) Sum over $n$: $P(X=j)=p_j/(1-p_0)$, $j\\ge1$. (c) The joint probability is $p_0^{n-1}p_j$, the product of these marginals. (d,e) Zero results determine how long we wait; once a nonzero result occurs, its relative probabilities are always the same, regardless of the number of preceding zeros. Conversely, knowing its type gives no information about that wait.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 24."
  },
  {
    "id": "w.prob.6.ross.problem.25",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 25: Many independent arrival times",
    "prompt": "One million people independently choose arrival times uniformly over one million hours. Approximate the probability exactly $i$ arrive in the first hour.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The exact count is binomial$(10^6,10^{-6})$. Its mean is 1 and the success chance is tiny, so the Poisson approximation gives $P(N=i)\\approx e^{-1}/i!$, $i\\ge0$. This follows from $\\binom Ni(1/N)^i(1-1/N)^{N-i}\\to e^{-1}/i!$. The units must match: the source interval and first-hour cutoff are expressed in hours.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 25."
  },
  {
    "id": "w.prob.6.ross.problem.26",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 26: Random quadratic roots",
    "prompt": "$A,B,C$ are independent uniform$(0,1)$. (a) Find their joint CDF; (b) find the probability $Ax^2+Bx+C=0$ has real roots.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Let $h(t)=0$ for $t\\le0$, $t$ for $0<t<1$, and 1 for $t\\ge1$. The CDF is $h(a)h(b)h(c)$. (b) Real roots require $AC\\le B^2/4$. For $0<z<1$, $P(AC\\le z)=\\int_0^z1\\,da+\\int_z^1z/a\\,da=z(1-\\ln z)$. Average this at $z=b^2/4$: $\\int_0^1\\frac{b^2}{4}[1-\\ln(b^2/4)]db=5/36+(\\ln4)/12$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 26."
  },
  {
    "id": "w.prob.6.ross.problem.27",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 27: Ratio of exponential variables",
    "prompt": "Independent $X_1,X_2$ are exponential with rates $\\lambda_1,\\lambda_2>0$. Find the distribution of $Z=X_1/X_2$ and $P(X_1<X_2)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For $z\\ge0$, $P(Z>z)=\\int_0^\\infty e^{-\\lambda_1zy}\\lambda_2e^{-\\lambda_2y}dy=\\lambda_2/(\\lambda_2+\\lambda_1z)$. Thus $F_Z(z)=\\lambda_1z/(\\lambda_2+\\lambda_1z)$ and $f_Z(z)=\\lambda_1\\lambda_2/(\\lambda_2+\\lambda_1z)^2$, $z>0$. At $z=1$, $P(X_1<X_2)=\\lambda_1/(\\lambda_1+\\lambda_2)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 27."
  },
  {
    "id": "w.prob.6.ross.problem.28",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 28: Which service finishes first?",
    "prompt": "Independent car service durations have exponential rate 1. (a) A starts at 0 and M at $t\\ge0$. Find the chance M finishes first. (b) If M starts only after A finishes, find the chance both finish by time 2.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Given M duration $y$, A must last more than $t+y$. Integrating gives $\\int_0^\\infty e^{-t-y}e^{-y}dy=e^{-t}/2$. (b) The total has gamma$(2,1)$ density $se^{-s}$, so $P(S<2)=\\int_0^2se^{-s}ds=1-3e^{-2}$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 28."
  },
  {
    "id": "w.prob.6.ross.problem.29",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 29: Independent normal sales",
    "prompt": "Daily sales are normal with mean 2200 dollars and standard deviation 230 dollars. Assume independent days. Find (a) the chance two-day sales exceed 5000 dollars; (b) the chance at least two of three days exceed 2000 dollars.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The two-day sum is normal with mean 4400 and variance $2(230)^2$, giving $1-\\Phi(600/(230\\sqrt2))\\approx.0325$. (b) A single-day success chance is $p=\\Phi(200/230)$. The three-day success count is binomial$(3,p)$, so the answer is $3p^2(1-p)+p^3$. Independence is assumed between days, in addition to each marginal normal model.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 29."
  },
  {
    "id": "w.prob.6.ross.problem.30",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 30: Comparing bowling scores",
    "prompt": "Independent Jill and Jack scores are approximately normal$(170,20^2)$ and normal$(160,15^2)$. Find (a) the chance Jack scores higher; (b) the chance their total exceeds 350.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Jack minus Jill is normal with mean $-10$ and variance $15^2+20^2=625$, giving $1-\\Phi(10/25)\\approx.3446$. (b) Their sum has mean 330 and standard deviation 25, giving $1-\\Phi(20/25)\\approx.2119$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 30."
  },
  {
    "id": "w.prob.6.ross.problem.32",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 32: Six months of normal sales",
    "prompt": "Independent monthly sales are normal$(100,5^2)$. Find (a) the chance exactly three of the next six exceed 100; (b) the chance total sales over four months exceed 420.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Symmetry gives single-month chance $1/2$, so $\\binom63/2^6=5/16$. (b) The four-month sum is normal with mean 400 and standard deviation $5\\sqrt4=10$. The chance is $1-\\Phi(2)\\approx.02275$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 32."
  },
  {
    "id": "w.prob.6.ross.problem.33",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 33: Compare normal tail events",
    "prompt": "Independent $X_1,X_2$ are normal$(10,\\sigma^2)$ with $\\sigma>0$. Compare $P(X_1>15)$ with (a) $P(X_1+X_2>25)$; (b) $P(X_1+X_2>30)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The single-variable standardized cutoff is $5/\\sigma$. The sum has mean 20 and standard deviation $\\sqrt2\\sigma$. (a) Its cutoff is $5/(\\sqrt2\\sigma)$, which is smaller, so the sum probability is larger. (b) Its cutoff is $10/(\\sqrt2\\sigma)=5\\sqrt2/\\sigma$, which is larger, so the single-variable probability is larger.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 33."
  },
  {
    "id": "w.prob.6.ross.problem.34",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 34: Matching normal tails",
    "prompt": "Independent $X,Y$ are normal$(10,4)$. Find $x$ such that $P(X+Y>x)=P(X>15)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Equal standard-normal upper-tail probabilities require equal cutoffs. Since $X+Y$ has mean 20 and standard deviation $2\\sqrt2$, $(x-20)/(2\\sqrt2)=(15-10)/2=2.5$. Thus $x=20+5\\sqrt2$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 34."
  },
  {
    "id": "w.prob.6.ross.problem.35",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 35: Wins in a league",
    "prompt": "Four teams play each opponent ten times, independently across games. Team 1 beats teams 2,3,4 with probabilities $.6,.7,.75$; team 2 beats teams 1,3,4 with $.4,.6,.7$. (a) Approximate the chance team 1 wins at least 20. Let $X$ be team 2 wins against 1, $Y$ its wins against 3 and 4, and $Z$ team 1 wins against 3 and 4. (b) Are these independent? (c) Express team 2 having at least as many wins as 1; (d) approximate that chance.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Team 1 has mean $20.5$ and variance $10[.6(.4)+.7(.3)+.75(.25)]=6.375$. A continuity-corrected normal approximation gives $1-\\Phi((19.5-20.5)/\\sqrt{6.375})$. (b) $X,Y,Z$ involve disjoint games, so they are independent under the stated game independence. (c) Team 2 wins $X+Y$; team 1 wins $10-X+Z$. Thus $2X+Y-Z\\ge10$. (d) Its mean is $8+13-14.5=6.5$ and variance $4(2.4)+4.5+3.975=18.075$. The approximation is $1-\\Phi((9.5-6.5)/\\sqrt{18.075})$. Treating the teams total wins as independent would overlook their shared head-to-head games.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 35."
  },
  {
    "id": "w.prob.6.ross.problem.36",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 36: Sample values around a median",
    "prompt": "Ten iid observations have continuous CDF $F$ and population median $m$ with $F(m)=1/2$. (a) Find the law of $N$, the count below $m$; (b) find $P(X_{(2)}<m<X_{(8)})$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Each observation falls below $m$ independently with chance $1/2$, so $N\\sim\\operatorname{Bin}(10,1/2)$. (b) The event is exactly $2\\le N\\le7$. Its probability is $2^{-10}\\sum_{r=2}^7\\binom{10}{r}=957/1024$. Ties with $m$ have zero probability.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 36."
  },
  {
    "id": "w.prob.6.ross.problem.37",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 37: Typographical errors",
    "prompt": "The average number of errors per page is .2. Find the chance a ten-page article has (a) no errors; (b) at least two. Explain the model needed.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The average alone does not determine the probabilities. If errors form an independent Poisson process across pages at rate .2 per page, the ten-page total is Poisson$(2)$. Then (a) $e^{-2}$; (b) $1-e^{-2}(1+2)=1-3e^{-2}$. Other distributions with the same mean could give different answers.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 37."
  },
  {
    "id": "w.prob.6.ross.problem.38",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Problem 38: Counts of airline crashes",
    "prompt": "The monthly worldwide average crash count is 2.2. Under a constant-rate Poisson model with independent increments, find the chances of (a) more than two next month; (b) more than four in two months; (c) more than five in three months. Explain why the model matters.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Over $t$ months, the count is Poisson$(2.2t)$. Thus (a) $1-e^{-2.2}\\sum_{j=0}^2 2.2^j/j!$; (b) $1-e^{-4.4}\\sum_{j=0}^4 4.4^j/j!$; (c) $1-e^{-6.6}\\sum_{j=0}^5 6.6^j/j!$. The mean information alone does not imply a Poisson law; the independent-increment, constant-rate assumptions supply it.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 38."
  },
  {
    "id": "w.prob.6.ross.problem.39",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Problem 39: Conditional colors with replacement",
    "prompt": "In three draws with replacement from five white and eight red balls, let $X_i$ indicate white. Find the pmf of $X_1$ given (a) $X_2=1$; (b) $X_2=0$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Replacement makes the draws independent. Under either condition, $P(X_1=1\\mid X_2)=5/13$ and $P(X_1=0\\mid X_2)=8/13$. Conditioning on the other draw changes nothing.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 39."
  },
  {
    "id": "w.prob.6.ross.problem.40",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Problem 40: Conditional numbered-ball inclusion",
    "prompt": "Three of 13 balls are selected without replacement. $Y_i$ indicates inclusion of numbered ball $i$. Find the pmf of $Y_1$ given (a) $Y_2=1$; (b) $Y_2=0$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Once ball 2 is included, the other two slots are sampled from 12 balls. Hence $P(Y_1=1\\mid Y_2=1)=2/12=1/6$, and the zero probability is $5/6$. (b) If ball 2 is absent, three slots are sampled from the other 12, so $P(Y_1=1\\mid Y_2=0)=3/12=1/4$, with zero probability $3/4$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 40."
  },
  {
    "id": "w.prob.6.ross.problem.41",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Problem 41: Joint independence implies pair independence",
    "prompt": "If integer-valued $X,Y,Z$ satisfy $P(X=i,Y=j,Z=k)=P(X=i)P(Y=j)P(Z=k)$ for all indices, prove $X,Y$ are independent.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Sum the joint mass over $k$. Then $P(X=i,Y=j)=P(X=i)P(Y=j)\\sum_kP(Z=k)=P(X=i)P(Y=j)$. The nonnegative sum is valid even on infinite integer supports.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 41."
  },
  {
    "id": "w.prob.6.ross.problem.43",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Problem 43: Smallest die given the largest",
    "prompt": "Two fair dice are rolled. $X$ is the larger and $Y$ the smaller result. Find the pmf of $Y$ given $X=i$, for $i=1,\\ldots,6$. Are they independent?",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "There are $i^2-(i-1)^2=2i-1$ ordered outcomes with maximum $i$. For $1\\le j<i$, two have minimum $j$, so conditional mass is $2/(2i-1)$. At $j=i$ one outcome gives mass $1/(2i-1)$. Other values have zero mass. The conditional law changes with $i$; for example $X=1$ forces $Y=1$, so they are dependent.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 43."
  },
  {
    "id": "w.prob.6.ross.problem.44",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Problem 44: Condition a small joint table",
    "prompt": "The masses at $(X,Y)=(1,1),(1,2),(2,1),(2,2)$ are $1/8,1/4,1/8,1/2$. (a) Find $X\\mid Y=1$ and $X\\mid Y=2$; (b) check independence; (c) find $P(XY\\le3)$, $P(X+Y>2)$ and $P(X/Y>1)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The $Y$ masses are $1/4,3/4$. Divide the entries: $X\\mid Y=1$ gives $(1/2,1/2)$; $X\\mid Y=2$ gives $(1/3,2/3)$. (b) These differ, so no independence. (c) The first event excludes only $(2,2)$, so $1/2$. The second excludes only $(1,1)$, so $7/8$. The third includes only $(2,1)$, so $1/8$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 44."
  },
  {
    "id": "w.prob.6.ross.problem.45",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Problem 45: Conditionals and a product",
    "prompt": "$f(x,y)=xe^{-x(y+1)}$ on $x,y>0$. (a) Find $f_{X\\mid Y}$ and $f_{Y\\mid X}$; (b) find the density of $Z=XY$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The marginals are $f_X(x)=e^{-x}$ and $f_Y(y)=1/(1+y)^2$. (a) Division gives $f_{X\\mid Y}(x\\mid y)=(1+y)^2xe^{-(1+y)x}$, $x>0$, and $f_{Y\\mid X}(y\\mid x)=xe^{-xy}$, $y>0$. (b) Conditional on $X=x$, scaling $Y\\sim\\operatorname{Exp}(x)$ by $x$ gives $Z\\sim\\operatorname{Exp}(1)$, independent of the given $x$. Equivalently, $f_Z(z)=\\int_0^\\infty f(x,z/x)dx/x=e^{-z}\\int_0^\\infty e^{-x}dx=e^{-z}$, $z>0$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 45."
  },
  {
    "id": "w.prob.6.ross.problem.46",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Problem 46: Conditional symmetric coordinate",
    "prompt": "$f(x,y)=c(x^2-y^2)e^{-x}$ on $x>0,-x<y<x$. Find $Y\\mid X=x$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Integrating $x^2-y^2$ over $-x<y<x$ gives $4x^3/3$. The factors $c e^{-x}$ cancel when dividing by the marginal. Hence $f_{Y\\mid X}(y\\mid x)=3(x^2-y^2)/(4x^3)$ for $-x<y<x$, and zero elsewhere, for each $x>0$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 46."
  },
  {
    "id": "w.prob.6.ross.problem.47",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Problem 47: Accident-rate posterior",
    "prompt": "A person has rate $\\Lambda\\sim\\operatorname{Gamma}(s,\\alpha)$ (shape-rate). Given the rate, yearly accidents are independent Poisson$(\\Lambda)$. After observing $n$ accidents in year one, find (a) the rate posterior; (b) the expected number next year.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The prior kernel is $\\lambda^{s-1}e^{-\\alpha\\lambda}$. Multiply by the likelihood $e^{-\\lambda}\\lambda^n/n!$ to get $\\lambda^{s+n-1}e^{-(\\alpha+1)\\lambda}$. After normalizing, (a) $\\Lambda\\mid N=n\\sim\\operatorname{Gamma}(s+n,\\alpha+1)$. (b) Given $\\Lambda$, the next-year mean is $\\Lambda$, so the posterior predictive mean is $(s+n)/(\\alpha+1)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 47."
  },
  {
    "id": "w.prob.6.ross.problem.48",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 48: Largest exceeds the other two",
    "prompt": "Three independent uniform$(0,1)$ values are sampled. Find the probability that the largest exceeds the sum of the other two.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The three events $X_i>X_j+X_k$ are disjoint. For $X_1=x$, the other two must lie in a triangle of area $x^2/2$ inside the unit square. Thus the answer is $3\\int_0^1x^2/2\\,dx=1/2$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 48."
  },
  {
    "id": "w.prob.6.ross.problem.49",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 49: Lifetime of a three-of-five system",
    "prompt": "Five independent motor lifetimes have density $f(t)=te^{-t}$ for $t>0$. The machine works while at least three motors work. Find its lifetime density.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The machine fails at the third smallest lifetime. The motor CDF is $F(t)=1-(1+t)e^{-t}$. The density of the third order statistic is $\\frac{5!}{2!2!}F(t)^2[1-F(t)]^2f(t)=30[1-(1+t)e^{-t}]^2(1+t)^2te^{-3t}$, $t>0$. The combinatorial factor chooses two earlier failures and two later failures.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 49."
  },
  {
    "id": "w.prob.6.ross.problem.50",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 50: Separated breakdowns",
    "prompt": "Three independent uniform points mark breakdowns on a road of length $L$. Find the chance every pair is at least distance $d$ apart, where $0\\le d\\le L/2$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Order the points $x_1<x_2<x_3$ and require $x_2-x_1\\ge d$, $x_3-x_2\\ge d$. Set $y_1=x_1,y_2=x_2-d,y_3=x_3-2d$. The allowed ordered region is now $0<y_1<y_2<y_3<L-2d$, whose volume is $(L-2d)^3/3!$. Multiply by ordered density $3!/L^3$ to get $(1-2d/L)^3$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 50."
  },
  {
    "id": "w.prob.6.ross.problem.51",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 51: Median in a central interval",
    "prompt": "Five iid uniform$(0,1)$ observations are taken. Find the chance their median lies between $1/4$ and $3/4$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The median is the third order statistic. It is at most $1/4$ when at least three observations are at most $1/4$, a probability $\\sum_{k=3}^5\\binom5k(1/4)^k(3/4)^{5-k}=53/512$. By symmetry the upper-tail probability beyond $3/4$ is the same. Therefore the answer is $1-106/512=203/256$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 51."
  },
  {
    "id": "w.prob.6.ross.problem.53",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 53: Maximum given all preceding ordered values",
    "prompt": "For $n$ iid uniform$(0,1)$ observations, find $X_{(n)}$ given $X_{(1)}=s_1,\\ldots,X_{(n-1)}=s_{n-1}$, with $0<s_1<\\cdots<s_{n-1}<1$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The ordered joint density is $n!$ for increasing coordinates. With the first $n-1$ coordinates fixed, the last coordinate can range from $s_{n-1}$ to 1 and the density remains constant. Normalize that constant: $f(x\\mid s_1,\\ldots,s_{n-1})=1/(1-s_{n-1})$ on $(s_{n-1},1)$. Thus the conditional law is uniform on that interval.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 53."
  },
  {
    "id": "w.prob.6.ross.problem.54",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 54: A bivariate normal construction",
    "prompt": "Independent $Z_1,Z_2$ are standard normal. Set $X=Z_1,Y=Z_1+Z_2$. Show that $(X,Y)$ is bivariate normal and identify its parameters.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Invert: $z_1=x,z_2=y-x$, with absolute Jacobian 1. Thus $f_{X,Y}(x,y)=(2\\pi)^{-1}e^{-[x^2+(y-x)^2]/2}$ for real $x,y$. This is the bivariate normal density with means 0, variances 1 and 2, covariance 1 and correlation $1/\\sqrt2$. Equivalently every linear combination $aX+bY=(a+b)Z_1+bZ_2$ is normal.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 54."
  },
  {
    "id": "w.prob.6.ross.problem.55",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Problem 55: Range of two observations",
    "prompt": "Two iid observations have density $f(x)=2x$ on $(0,1)$. Find the distribution of their range $R=|X_1-X_2|$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For $0<r<1$, the two possible orders give $f_R(r)=2\\int_0^{1-r}f(x)f(x+r)dx=8\\int_0^{1-r}x(x+r)dx=\\frac43(1-r)^2(2+r)$. Integrating from 0 to $r$ gives $F_R(r)=\\frac83r-2r^2+\\frac13r^4$. Outside the support the CDF is 0 or 1.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 55."
  },
  {
    "id": "w.prob.6.ross.problem.56",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 56: Polar coordinates in a disk",
    "prompt": "A point is uniform in the unit disk: $f(x,y)=1/\\pi$ for $x^2+y^2<1$. Find the joint density of $R=\\sqrt{X^2+Y^2}$ and the full polar angle $\\Theta\\in[0,2\\pi)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Use $x=r\\cos\\theta,y=r\\sin\\theta$. The absolute inverse Jacobian is $r$, so $f_{R,\\Theta}=r/\\pi$ on $0<r<1,0\\le\\theta<2\\pi$, zero elsewhere. It factors as $(2r)(1/(2\\pi))$, giving independent radius and uniform angle. A one-argument arctangent loses quadrant information, so the angle is understood as the full polar angle.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 56."
  },
  {
    "id": "w.prob.6.ross.problem.57",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 57: Squared radius in a square",
    "prompt": "$X,Y$ are independent uniform$(0,1)$. Find the joint density of $R=X^2+Y^2$ and $\\Theta=\\arctan(Y/X)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Invert with $x=\\sqrt r\\cos\\theta,y=\\sqrt r\\sin\\theta$. The Jacobian absolute value is $1/2$. Hence the joint density is $1/2$ on $0<\\theta<\\pi/2$, $0<r<\\min(\\sec^2\\theta,\\csc^2\\theta)$, and zero elsewhere. The angle-dependent upper bound records the square boundaries; it prevents independence.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 57."
  },
  {
    "id": "w.prob.6.ross.problem.58",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 58: Normal variables from a radius and angle",
    "prompt": "$U$ is uniform$(0,2\\pi)$ and $Z$ is independent exponential with rate 1. Show directly that $X=\\sqrt{2Z}\\cos U$, $Y=\\sqrt{2Z}\\sin U$ are independent standard normals.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The starting density is $e^{-z}/(2\\pi)$. Since $z=(x^2+y^2)/2$ and $u$ is the full angle, the inverse Jacobian from $(x,y)$ to $(z,u)$ has absolute value 1 away from the origin and angle boundary. Thus $f_{X,Y}(x,y)=e^{-(x^2+y^2)/2}/(2\\pi)=\\phi(x)\\phi(y)$ for all real coordinates, proving the claim.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 58."
  },
  {
    "id": "w.prob.6.ross.problem.59",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 59: Product and ratio of Pareto coordinates",
    "prompt": "$f(x,y)=1/(x^2y^2)$ on $x,y\\ge1$. (a) Find the joint density of $U=XY,V=X/Y$; (b) find both marginal densities.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Invert: $x=\\sqrt{uv},y=\\sqrt{u/v}$, with absolute Jacobian $1/(2v)$. The conditions become $u\\ge1$, $1/u\\le v\\le u$. Thus (a) $f_{U,V}(u,v)=1/(2vu^2)$ on that region. (b) Integrating $v$ gives $f_U(u)=\\ln u/u^2$, $u>1$. For fixed $v>0$, $u\\ge\\max(v,1/v)$, so $f_V(v)=1/[2v\\max(v,1/v)]$: it is $1/2$ for $0<v<1$ and $1/(2v^2)$ for $v\\ge1$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 59."
  },
  {
    "id": "w.prob.6.ross.problem.60",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 60: Three transformations of uniforms",
    "prompt": "Independent $X,Y$ are uniform$(0,1)$. Find joint densities for (a) $U=X+Y,V=X/Y$; (b) $U=X,V=X/Y$; (c) $U=X+Y,V=X/(X+Y)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Invert $x=uv/(1+v),y=u/(1+v)$, with Jacobian $u/(1+v)^2$. Thus density is that expression on $v>0,0<u<\\min(1+v,(1+v)/v)$. (b) Invert $x=u,y=u/v$ with Jacobian $u/v^2$. The density is $u/v^2$ on $0<u<1,v>u$. (c) Invert $x=uv,y=u(1-v)$ with Jacobian $u$. The density is $u$ on $0<v<1,0<u<\\min(1/v,1/(1-v))$. All densities vanish outside their regions.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 60."
  },
  {
    "id": "w.prob.6.ross.problem.61",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 61: Three transformations of exponentials",
    "prompt": "Repeat the sum/ratio transformations of Problem 60 for independent rate-1 exponentials: (a) $(X+Y,X/Y)$; (b) $(X,X/Y)$; (c) $(X+Y,X/(X+Y))$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Use the same inverse maps and Jacobians, but substitute joint density $e^{-(x+y)}$. (a) $f(u,v)=u e^{-u}/(1+v)^2$, $u,v>0$. (b) $f(u,v)=(u/v^2)e^{-u-u/v}$, $u,v>0$. (c) $f(u,v)=u e^{-u}$, $u>0,0<v<1$, showing gamma$(2,1)$ sum independent of uniform proportion. Set each to zero outside its support.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 61."
  },
  {
    "id": "w.prob.6.ross.problem.62",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 62: Sum and exponentiated coordinate",
    "prompt": "Independent $X_1,X_2$ have exponential rate $\\lambda$. Find the joint density of $Y_1=X_1+X_2,Y_2=e^{X_1}$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Write $u=Y_1,v=Y_2$. Invert with $x_1=\\ln v,x_2=u-\\ln v$; the absolute Jacobian is $1/v$. The support is $v>1,u>\\ln v$, or $u>0,1<v<e^u$. Therefore $f(u,v)=\\lambda^2e^{-\\lambda u}/v$ there, zero elsewhere.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 62."
  },
  {
    "id": "w.prob.6.ross.problem.63",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Problem 63: Three pairwise sums",
    "prompt": "Independent $X,Y,Z$ have rate-1 exponential densities. Derive the joint density of $U=X+Y,V=X+Z,W=Y+Z$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Invert: $x=(u+v-w)/2$, $y=(u+w-v)/2$, $z=(v+w-u)/2$. The inverse matrix has absolute determinant $1/2$. Thus $f_{U,V,W}(u,v,w)=\\frac12e^{-(u+v+w)/2}$ when all three triangle inequalities $u+v>w,u+w>v,v+w>u$ hold with positive coordinates. It is zero elsewhere.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 63."
  },
  {
    "id": "w.prob.6.ross.problem.64",
    "course": "prob",
    "sec": "6.8",
    "marks": 6,
    "title": "Ross Problem 64: Exchangeable gaps between special balls",
    "prompt": "Randomly order $n$ balls, of which $k$ are special. Let $Y_1$ count draws through the first special ball and $Y_j$ count further draws through the $j$th special. Set $Y_{k+1}=n+1-\\sum_{j=1}^kY_j$. Show all $k+1$ gaps are exchangeable.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The special positions are a uniform $k$-subset of $\\{1,\\ldots,n\\}$. They correspond one-to-one to positive integer gap vectors $(y_1,\\ldots,y_{k+1})$ whose sum is $n+1$. Each such vector has probability $1/\\binom nk$, regardless of the order of its coordinates. Permuting coordinates preserves the positive-sum condition and the probability; hence the gaps are exchangeable.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.8.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 64."
  },
  {
    "id": "w.prob.6.ross.problem.65",
    "course": "prob",
    "sec": "6.8",
    "marks": 6,
    "title": "Ross Problem 65: Indicators of a uniform subset",
    "prompt": "A uniform sample of $k$ distinct balls is drawn from $n$ numbered balls. Let $X_i$ indicate that ball $i$ is selected. Show the indicator vector is exchangeable.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Each binary vector with exactly $k$ ones represents one selected subset and has mass $1/\\binom nk$. Vectors with a different number of ones have mass zero. Permuting the coordinates preserves the number of ones and therefore every joint mass. This is exactly exchangeability.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.8.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, problem 65."
  },
  {
    "id": "w.prob.6.ross.theoretical.1",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Theoretical 1: Recover marginal CDFs",
    "prompt": "How can $F_X$ and $F_Y$ be obtained from the joint CDF $F(x,y)$?",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "As $y\\to\\infty$, the events $\\{X\\le x,Y\\le y\\}$ increase to $\\{X\\le x\\}$. Continuity of probability gives $F_X(x)=\\lim_{y\\to\\infty}F(x,y)$. Likewise $F_Y(y)=\\lim_{x\\to\\infty}F(x,y)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 1."
  },
  {
    "id": "w.prob.6.ross.theoretical.2",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Theoretical 2: Discrete differences of a CDF",
    "prompt": "For integer-valued $X,Y$ with joint CDF $F(i,j)$, express (a) $P(X=i,Y\\le j)$; (b) $P(X=i,Y=j)$ in terms of $F$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) Subtract the event $X\\le i-1$ from $X\\le i$: $F(i,j)-F(i-1,j)$. (b) Subtract the same expression at $j-1$: $F(i,j)-F(i-1,j)-F(i,j-1)+F(i-1,j-1)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 2."
  },
  {
    "id": "w.prob.6.ross.theoretical.4",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Theoretical 4: Buffon needle longer than line spacing",
    "prompt": "Parallel lines are distance $D$ apart. A needle of length $L>D$ has a uniform angle and midpoint modulo the lines. Find the probability it intersects at least one line.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Let $\\theta=\\arccos(D/L)$. Use angle $\\phi\\in(0,\\pi/2)$ measured from the normal to the lines; it has density $2/\\pi$. Given $\\phi$, the crossing chance is $\\min(1,L\\cos\\phi/D)$. Integrate: $P=\\frac2\\pi[\\int_0^\\theta1\\,d\\phi+\\int_\\theta^{\\pi/2}(L/D)\\cos\\phi\\,d\\phi]=2\\theta/\\pi+2L(1-\\sin\\theta)/(\\pi D)$. Saturating the conditional probability at 1 accounts for the longer needle.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 4."
  },
  {
    "id": "w.prob.6.ross.theoretical.5",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Theoretical 5: General ratio and product densities",
    "prompt": "Independent positive continuous $X,Y$ have densities $f_X,f_Y$. Find the density of (a) $X/Y$; (b) $XY$. Specialize to exponential rates $\\lambda,\\mu$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) Invert $x=zy$, with Jacobian $y$, giving $f_{X/Y}(z)=\\int_0^\\infty y f_X(zy)f_Y(y)dy$, $z>0$. For exponentials, this is $\\lambda\\mu/(\\mu+\\lambda z)^2$. (b) Invert $y=z/x$, with Jacobian $1/x$, giving $f_{XY}(z)=\\int_0^\\infty f_X(x)f_Y(z/x)dx/x$. For exponentials, $f_{XY}(z)=\\lambda\\mu\\int_0^\\infty e^{-\\lambda x-\\mu z/x}dx/x$ for $z>0$, a complete integral expression (also $2\\lambda\\mu K_0(2\\sqrt{\\lambda\\mu z})$). Both densities vanish for nonpositive $z$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 5."
  },
  {
    "id": "w.prob.6.ross.theoretical.6",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Theoretical 6: Sum without independence",
    "prompt": "Show a jointly continuous pair with density $f$ has sum density $f_{X+Y}(t)=\\int_{-\\infty}^\\infty f(x,t-x)dx$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Transform $(x,y)$ to $(x,t=x+y)$. The inverse is $(x,t-x)$ with absolute Jacobian 1. The transformed joint density is $f(x,t-x)$. Integrate out $x$ to obtain the displayed density. Independence is unnecessary here; with independence it becomes convolution.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 6."
  },
  {
    "id": "w.prob.6.ross.theoretical.7",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Theoretical 7: Scaling gamma and chi-square",
    "prompt": "(a) If $X$ is gamma$(t,\\lambda)$ in shape-rate form, identify $cX$ for $c>0$. (b) Show $\\chi^2_{2n}/(2\\lambda)$ is gamma$(n,\\lambda)$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) $f_{cX}(y)=f_X(y/c)/c=(\\lambda/c)^ty^{t-1}e^{-(\\lambda/c)y}/\\Gamma(t)$ for $y>0$. Thus the shape stays $t$ and rate becomes $\\lambda/c$. (b) A chi-square with $2n$ degrees of freedom is gamma$(n,1/2)$. Applying part (a) with $c=1/(2\\lambda)$ gives rate $\\lambda$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 7."
  },
  {
    "id": "w.prob.6.ross.theoretical.8",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Theoretical 8: Hazard of the first failure",
    "prompt": "Independent nonnegative continuous lifetimes $X,Y$ have hazard functions $h_X,h_Y$. For $W=\\min(X,Y)$, (a) find its CDF; (b) prove $h_W=h_X+h_Y$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) Independence gives survival $S_W(t)=S_X(t)S_Y(t)$, so $F_W(t)=1-S_X(t)S_Y(t)$. (b) Differentiate: $f_W=f_XS_Y+f_YS_X$. Divide by $S_W$ wherever positive to obtain $h_W=f_X/S_X+f_Y/S_Y=h_X+h_Y$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 8."
  },
  {
    "id": "w.prob.6.ross.theoretical.10",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Theoretical 10: Flashlight with spare batteries",
    "prompt": "A flashlight needs two working batteries. You have $n\\ge2$ batteries with independent exponential lifetimes of rate $\\lambda$ while in use. Replace a failed battery immediately until only one working battery remains. Find the total operating-time law.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "While two batteries are running, the next failure time is exponential$(2\\lambda)$. After each replacement, memorylessness makes the surviving active battery as good as a fresh exponential battery, independently of the next fresh battery. The flashlight stops at the $(n-1)$st failure. Therefore its operating time is the sum of $n-1$ independent exponential$(2\\lambda)$ waiting times: gamma$(n-1,2\\lambda)$. Its density is $(2\\lambda)^{n-1}t^{n-2}e^{-2\\lambda t}/(n-2)!$. For $n<2$ the time is zero.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 10."
  },
  {
    "id": "w.prob.6.ross.theoretical.11",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 11: A prescribed order of five values",
    "prompt": "Five iid continuous observations have CDF $F$ and density $f$. (a) Show $P(X_1<X_2<X_3<X_4<X_5)$ does not depend on $F$; (b) evaluate it; (c) explain intuitively.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) In the density integral over increasing coordinates, the substitutions $u_i=F(x_i)$ convert the measure to $du_1\\cdots du_5$ on $0<u_1<\\cdots<u_5<1$ (the probability-integral-transform interpretation also handles intervals of zero density). (b) This ordered simplex is one of $5!$ equal-volume pieces of the unit cube, giving $1/120$. (c) Exchangeability makes every strict ordering equally likely, and continuity makes ties have probability zero.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 11."
  },
  {
    "id": "w.prob.6.ross.theoretical.12",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Theoretical 12: Factorization into unnormalized factors",
    "prompt": "Prove a joint density or pmf is independent exactly when it can be written $\\prod_{i=1}^n g_i(x_i)$ for nonnegative one-variable functions.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Independence immediately gives this form with the marginals as $g_i$. Conversely let $a_i=\\int g_i$ (or the corresponding sum). Because the product integrates to 1, Tonelli gives $\\prod_i a_i=1$, and every $a_i$ is positive and finite. The $i$th marginal is $g_i\\prod_{j\\ne i}a_j=g_i/a_i$. Multiplying those normalized marginals gives $\\prod_i g_i/\\prod_i a_i=\\prod_i g_i$, the given joint law. Thus the variables are independent.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 12."
  },
  {
    "id": "w.prob.6.ross.theoretical.13",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Theoretical 13: Success counts versus specified positions",
    "prompt": "A shared unknown success chance has a uniform prior on $(0,1)$. After $n$ successes and $m$ failures, would its posterior change if we specified exactly which trials were successes?",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "No. A specified order has likelihood $p^n(1-p)^m$. The count-only likelihood is $\\binom{n+m}{n}p^n(1-p)^m$. The binomial coefficient does not depend on $p$, so it cancels during normalization. Both observations give beta$(n+1,m+1)$ posterior density $p^n(1-p)^m/B(n+1,m+1)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 13."
  },
  {
    "id": "w.prob.6.ross.theoretical.14",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Theoretical 14: Geometric waiting times given their sum",
    "prompt": "Independent $X,Y$ are geometric$(p)$ on $1,2,\\ldots$. (a) Guess $P(X=i\\mid X+Y=n)$; (b) verify it.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) The first head among two heads with the second on flip $n$ can be at any of the first $n-1$ positions, suggesting a uniform law. (b) For $1\\le i<n$, $P(X=i,Y=n-i)=p^2(1-p)^{n-2}$, independent of $i$. Summing these $n-1$ equal masses and dividing gives $1/(n-1)$. Outside this range the probability is zero. Assume $0<p<1$ and $n\\ge2$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 14."
  },
  {
    "id": "w.prob.6.ross.theoretical.15",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Theoretical 15: Success positions given the last success",
    "prompt": "In independent Bernoulli$(p)$ trials with $0<p<1$, suppose the $k$th success occurs at trial $n$. Show all first-$n-1$ patterns with $k-1$ successes are equally likely.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Each allowed full pattern ends in success and has $k$ successes and $n-k$ failures. Its probability is $p^k(1-p)^{n-k}$. There are $\\binom{n-1}{k-1}$ such patterns, so after conditioning every first-$n-1$ pattern has probability $1/\\binom{n-1}{k-1}$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 15."
  },
  {
    "id": "w.prob.6.ross.theoretical.16",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Theoretical 16: Binomial allocation given a total",
    "prompt": "Independent $X,Y$ are binomial$(n,p)$ with $0<p<1$. Prove $X\\mid X+Y=m$ is hypergeometric in two ways.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Divide joint by total: $P(X=i\\mid X+Y=m)=\\binom ni\\binom n{m-i}/\\binom{2n}m$, for $\\max(0,m-n)\\le i\\le\\min(n,m)$. The powers $p^m(1-p)^{2n-m}$ cancel, and Vandermonde normalizes the denominator. Alternatively, given $m$ heads in $2n$ independent flips, their positions form a uniform $m$-subset. Count how many positions belong to the first group of $n$; this is sampling from $n$ first-group and $n$ second-group positions.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 16."
  },
  {
    "id": "w.prob.6.ross.theoretical.18",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Theoretical 18: Recover a joint law from two conditionals",
    "prompt": "Let $p(i\\mid j)=P(X=i\\mid Y=j)$ and $q(j\\mid i)=P(Y=j\\mid X=i)$. Derive a formula for $P(X=i,Y=j)$ using these conditionals, noting any positivity requirement.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "For a fixed $j$ with positive probability and every $i$ with $p(i\\mid j)>0$, Bayes gives $p(i\\mid j)/q(j\\mid i)=P(X=i)/P(Y=j)$. If all positive-mass values of $X$ have $q(j\\mid i)>0$, summing gives $\\sum_i p(i\\mid j)/q(j\\mid i)=1/P(Y=j)$. Hence $P(X=i,Y=j)=p(i\\mid j)/[\\sum_r p(r\\mid j)/q(j\\mid r)]$. Without the positivity condition, the sum only recovers the mass of the $X$ values compatible with $j$; the conditionals need not uniquely identify disconnected parts of the joint law. Avoid undefined $0/0$ terms.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 18."
  },
  {
    "id": "w.prob.6.ross.theoretical.19",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 19: Conditional rankings of three values",
    "prompt": "Three iid continuous values have no ties. Find (a) $P(X_1>X_2\\mid X_1>X_3)$; (b) $P(X_1>X_2\\mid X_1<X_3)$; (c) $P(X_1>X_2\\mid X_2>X_3)$; (d) $P(X_1>X_2\\mid X_2<X_3)$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Each conditioning event has probability $1/2$. (a) $X_1$ must be the maximum, probability $1/3$, giving $2/3$. (b) Only the ordering $X_3>X_1>X_2$ works, probability $1/6$, giving $1/3$. (c) Only $X_1>X_2>X_3$ works, giving $1/3$. (d) $X_2$ must be the minimum, probability $1/3$, giving $2/3$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 19."
  },
  {
    "id": "w.prob.6.ross.theoretical.20",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Theoretical 20: A truncated uniform law",
    "prompt": "$U$ is uniform$(0,1)$ and $0<a<1$. Find its conditional distribution given (a) $U>a$; (b) $U<a$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) For $a<u<1$, $P(U\\le u\\mid U>a)=(u-a)/(1-a)$, so the law is uniform$(a,1)$, density $1/(1-a)$. (b) For $0<u<a$, the conditional CDF is $u/a$, so uniform$(0,a)$, density $1/a$. In both cases the CDF is 0 below the lower endpoint and 1 above the upper endpoint.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 20."
  },
  {
    "id": "w.prob.6.ross.theoretical.21",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Theoretical 21: Gamma prior and Poisson observation",
    "prompt": "$W$ is gamma$(t,\\beta)$ in shape-rate form, and $N\\mid W=w$ is Poisson$(w)$. Prove $W\\mid N=n$ is gamma$(t+n,\\beta+1)$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Multiply prior density kernel $w^{t-1}e^{-\\beta w}$ by the Poisson likelihood $e^{-w}w^n/n!$. The resulting kernel is $w^{t+n-1}e^{-(\\beta+1)w}$. Its integral is $\\Gamma(t+n)/(\\beta+1)^{t+n}$, so the normalized posterior is $(\\beta+1)^{t+n}w^{t+n-1}e^{-(\\beta+1)w}/\\Gamma(t+n)$ for $w>0$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 21."
  },
  {
    "id": "w.prob.6.ross.theoretical.22",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Theoretical 22: Gamma prior and exponential observations",
    "prompt": "$W\\sim\\operatorname{Gamma}(t,\\beta)$. Given $W=w$, $X_1,\\ldots,X_n$ are independent exponential$(w)$. Identify $W$ given observed positive values $x_1,\\ldots,x_n$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The conditional likelihood is $w^n e^{-w\\sum_i x_i}$. Multiply by prior kernel $w^{t-1}e^{-\\beta w}$ to obtain $w^{t+n-1}e^{-(\\beta+\\sum_i x_i)w}$. Hence the posterior is gamma with shape $t+n$ and rate $\\beta+\\sum_i x_i$. Normalization follows by the gamma integral.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 22."
  },
  {
    "id": "w.prob.6.ross.theoretical.23",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 23: Random saddlepoint",
    "prompt": "An $n$-row, $m$-column array contains independent draws from the same continuous distribution. A saddlepoint is smallest in its row and largest in its column. What is the chance the array contains one?",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "For a fixed entry of quantile $u$, the other $m-1$ row entries must exceed it and the other $n-1$ column entries must be below it. Its probability is $\\int_0^1(1-u)^{m-1}u^{n-1}du=(n-1)!(m-1)!/(n+m-1)!$. With distinct entries there cannot be two saddlepoints: cross-comparing their rows and columns would give contradictory strict inequalities. Thus sum over the $nm$ entries: $P= n!m!/(n+m-1)!$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 23."
  },
  {
    "id": "w.prob.6.ross.theoretical.24",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Theoretical 24: Integer and fractional parts of an exponential",
    "prompt": "$X$ is exponential$(\\lambda)$. For integer $n\\ge0$ and $0\\le x\\le1$, find $P(\\lfloor X\\rfloor=n,X-\\lfloor X\\rfloor\\le x)$. Are the two parts independent?",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The event is $n\\le X\\le n+x$, giving $e^{-\\lambda n}(1-e^{-\\lambda x})$. The integer-part mass is $e^{-\\lambda n}(1-e^{-\\lambda})$. Summing over $n$ gives fractional-part CDF $(1-e^{-\\lambda x})/(1-e^{-\\lambda})$. Their product equals the joint expression, proving independence.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 24."
  },
  {
    "id": "w.prob.6.ross.theoretical.25",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 25: Two new CDFs from an old one",
    "prompt": "For a CDF $F$ and positive integer $n$, show $F(x)^n$ and $1-[1-F(x)]^n$ are CDFs.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Take independent $X_1,\\ldots,X_n$ with CDF $F$. Their maximum is at most $x$ exactly when all $X_i\\le x$, giving $F(x)^n$. Their minimum exceeds $x$ exactly when all $X_i>x$, giving survival $[1-F(x)]^n$. Hence its CDF is the second expression. Both are CDFs because they describe actual random variables.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 25."
  },
  {
    "id": "w.prob.6.ross.theoretical.27",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Theoretical 27: An exponential coordinate given its total",
    "prompt": "$n\\ge2$ iid exponential$(\\lambda)$ variables sum to $T$. (a) Find $f_{X_1\\mid T}(x\\mid t)$; (b) find its conditional CDF.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "For $0<x<t$, divide $f_{X_1}(x)f_{T-X_1}(t-x)$ by $f_T(t)$. All exponential and rate factors cancel, leaving $(n-1)(t-x)^{n-2}/t^{n-1}$. Integrating from 0 to $x$ gives $1-(1-x/t)^{n-1}$. The CDF is 0 below 0 and 1 above $t$. Thus $X_1/t$ is beta$(1,n-1)$ given $T=t$. For $n=1$, conditioning forces $X_1=t$ rather than a continuous density.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 27."
  },
  {
    "id": "w.prob.6.ross.theoretical.28",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 28: Differentiate the order-statistic CDF",
    "prompt": "For $n$ iid continuous observations with CDF $F$ and density $f$, derive the density of the $i$th ordered value by differentiating its CDF.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The CDF is $\\sum_{k=i}^n\\binom nk F(x)^k[1-F(x)]^{n-k}$. Differentiate termwise. Use $k\\binom nk=n\\binom{n-1}{k-1}$ and $(n-k)\\binom nk=n\\binom{n-1}k$. The negative contribution from term $k$ cancels the positive contribution from term $k+1$; only the first positive boundary term remains. Thus $f_{(i)}(x)=n\\binom{n-1}{i-1}F(x)^{i-1}[1-F(x)]^{n-i}f(x)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 28."
  },
  {
    "id": "w.prob.6.ross.theoretical.29",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 29: Median of an odd uniform sample",
    "prompt": "Prove the median of $2n+1$ iid uniform$(0,1)$ observations is beta$(n+1,n+1)$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The median is ordered value $n+1$. The order-statistic formula gives density $(2n+1)!x^n(1-x)^n/(n!n!)$, $0<x<1$. Since $B(n+1,n+1)=n!n!/(2n+1)!$, this is exactly the normalized beta density.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 29."
  },
  {
    "id": "w.prob.6.ross.theoretical.30",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 30: A single peak in an ordered sequence",
    "prompt": "For $n$ iid continuous values, find $P(X_1<\\cdots<X_j>X_{j+1}>\\cdots>X_n)$ for a specified $j$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "All $n!$ rank permutations are equally likely. The largest rank must occupy position $j$. Choose which $j-1$ of the remaining $n-1$ ranks lie left of it; the left ranks must be increasing and the right ranks decreasing, leaving exactly one arrangement for each choice. Thus the probability is $\\binom{n-1}{j-1}/n!=1/[n(j-1)!(n-j)!]$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 30."
  },
  {
    "id": "w.prob.6.ross.theoretical.31",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 31: Density of a general sample range",
    "prompt": "For $n\\ge2$ iid continuous observations with density $f$ and CDF $F$, derive the density of $R=X_{(n)}-X_{(1)}$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The minimum $x$ and maximum $y$ have density $n(n-1)f(x)f(y)[F(y)-F(x)]^{n-2}$ for $x<y$: choose their labels and put the remaining observations between them. Transform $y=x+r$ with Jacobian 1, then integrate $x$. Hence $f_R(r)=n(n-1)\\int_{-\\infty}^\\infty f(x)f(x+r)[F(x+r)-F(x)]^{n-2}dx$ for $r>0$. For $n=1$, the range is identically zero.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 31."
  },
  {
    "id": "w.prob.6.ross.theoretical.32",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 32: Equal laws for uniform spacings",
    "prompt": "Let $X_{(1)}<\\cdots<X_{(n)}$ order iid uniform$(0,1)$ values, and set endpoints $X_{(0)}=0$, $X_{(n+1)}=1$. Show each gap has $P(X_{(k)}-X_{(k-1)}>t)=(1-t)^n$, $0<t<1$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The ordered sample has constant density $n!$. Its $n+1$ nonnegative gaps sum to 1 and are uniform on that simplex, so permuting gaps leaves the law unchanged. Requiring one gap to exceed $t$ and subtracting $t$ from it yields a simplex whose remaining total is $1-t$. It has $n$ free coordinates, so its volume is $(1-t)^n$ times the original volume. Thus every gap has the displayed survival probability.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 32."
  },
  {
    "id": "w.prob.6.ross.theoretical.33",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 33: Rank of one new observation",
    "prompt": "$X$ is an independent additional draw from the same continuous distribution as $X_1,\\ldots,X_n$. Find (a) $P(X>X_{(n)})$; (b) $P(X>X_{(1)})$; (c) $P(X_{(i)}<X<X_{(j)})$, $i<j$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Among all $n+1$ observations, the new observation has uniform rank on $1,\\ldots,n+1$. (a) Only top rank works: $1/(n+1)$. (b) Every rank except bottom works: $n/(n+1)$. (c) The possible ranks are $i+1,\\ldots,j$, so the chance is $(j-i)/(n+1)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 33."
  },
  {
    "id": "w.prob.6.ross.theoretical.34",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Theoretical 34: CDF of the midrange",
    "prompt": "For $n\\ge2$ iid continuous observations, let $M=(X_{(1)}+X_{(n)})/2$. Prove $F_M(m)=n\\int_{-\\infty}^m[F(2m-x)-F(x)]^{n-1}f(x)dx$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Choose which of the $n$ observations is smallest and let its value be $x$. For $M\\le m$, we need $x\\le m$ and every remaining observation to lie between $x$ and $2m-x$. Their independent probability is $[F(2m-x)-F(x)]^{n-1}$. Multiply by $n f(x)dx$ and integrate over $x\\le m$ to obtain the result. For $n=1$, $M=X_1$ directly.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 34."
  },
  {
    "id": "w.prob.6.ross.theoretical.35",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Theoretical 35: Uniform range and midrange together",
    "prompt": "For $n\\ge2$ iid uniform$(0,1)$ observations find the joint density of $R=X_{(n)}-X_{(1)}$ and $M=(X_{(n)}+X_{(1)})/2$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The extreme-values density is $n(n-1)(y-x)^{n-2}$ for $0<x<y<1$. Invert $x=m-r/2,y=m+r/2$. The inverse Jacobian has absolute value 1. Hence $f_{R,M}(r,m)=n(n-1)r^{n-2}$ on $0<r<1$, $r/2<m<1-r/2$, zero elsewhere.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 35."
  },
  {
    "id": "w.prob.6.ross.theoretical.36",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Theoretical 36: Normal product and Cauchy ratio",
    "prompt": "Independent $X,Y$ are standard normal. Find the joint density of $U=X,V=XY$, then show $X/Y$ is Cauchy.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "Invert $x=u,y=v/u$, with Jacobian $1/|u|$. Thus $f_{U,V}(u,v)=\\exp[-(u^2+v^2/u^2)/2]/(2\\pi|u|)$ for $u\\ne0$. To find the ratio $R=X/Y$, instead use $x=ry,y=y$, Jacobian $|y|$. Integrate: $f_R(r)=\\int_{-\\infty}^\\infty|y|e^{-(1+r^2)y^2/2}dy/(2\\pi)=1/[\\pi(1+r^2)]$. This is the standard Cauchy density. The lines where an inverse is undefined have probability zero.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 36."
  },
  {
    "id": "w.prob.6.ross.theoretical.37",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Theoretical 37: Affine bivariate normal transformations",
    "prompt": "A bivariate normal pair has means $\\mu_X,\\mu_Y$, positive standard deviations $\\sigma_X,\\sigma_Y$, and correlation $\\rho$. (a) Identify its standardized pair; (b) identify $(aX+b,cY+d)$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) Subtract the means and divide by the standard deviations. The resulting pair is bivariate normal with means 0, variances 1 and correlation $\\rho$, as substitution into the density and the Jacobian shows. (b) The means become $a\\mu_X+b,c\\mu_Y+d$; variances are $a^2\\sigma_X^2,c^2\\sigma_Y^2$ and covariance $ac\\rho\\sigma_X\\sigma_Y$. For nonzero $a,c$, correlation is $\\operatorname{sgn}(ac)\\rho$. If either coefficient is zero the law is a degenerate bivariate normal and correlation is undefined.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 37."
  },
  {
    "id": "w.prob.6.ross.theoretical.38",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Theoretical 38: Beta-binomial posterior",
    "prompt": "$X$ has beta$(a,b)$ prior and $N\\mid X=x$ is binomial$(n+m,x)$. Show $X\\mid N=n$ is beta$(n+a,m+b)$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The prior is proportional to $x^{a-1}(1-x)^{b-1}$. The likelihood is $\\binom{n+m}n x^n(1-x)^m$. Their product, ignoring constants independent of $x$, is $x^{n+a-1}(1-x)^{m+b-1}$. Dividing by $B(n+a,m+b)$ gives the stated beta posterior on $(0,1)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 38."
  },
  {
    "id": "w.prob.6.ross.theoretical.39",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Theoretical 39: Uniform probability vectors",
    "prompt": "A density constant $C$ is placed on positive $(p_1,\\ldots,p_{n-1})$ with sum less than 1; define $p_n=1-\\sum_{i<n}p_i$. (a) Find $C$; (b) relate it to independent uniforms conditioned on their sum below 1; (c) clarify the Dirichlet law of uniform order-statistic gaps.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) The $(n-1)$-dimensional simplex volume is $1/(n-1)!$, so $C=(n-1)!$. (b) Independent uniform coordinates have constant joint density 1; conditioning on this simplex divides by its volume, giving the same density. (c) For $n$ uniform observations, the FULL $n+1$ gaps $U_{(1)},U_{(2)}-U_{(1)},\\ldots,U_{(n)}-U_{(n-1)},1-U_{(n)}$ sum to 1 and have Dirichlet$(1,\\ldots,1)$ law: the first $n$ coordinates have constant density $n!$ on their simplex, since the gap transformation has determinant 1 and the ordered density is $n!$. The source lists only the first $n$ gaps; their omitted final gap must be understood as one minus their sum. These are coordinates of an $(n+1)$-component Dirichlet vector.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 39."
  },
  {
    "id": "w.prob.6.ross.theoretical.40",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Theoretical 40: Joint CDF derivatives",
    "prompt": "For a jointly continuous vector with density $f$, show its joint CDF differentiates to $f$.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "The joint CDF is the iterated integral $F(x_1,\\ldots,x_n)=\\int_{-\\infty}^{x_1}\\cdots\\int_{-\\infty}^{x_n}f(t_1,\\ldots,t_n)dt_n\\cdots dt_1$. Differentiating once with respect to each upper limit removes each integral by the fundamental theorem of calculus. Thus $\\partial^n F/(\\partial x_1\\cdots\\partial x_n)=f(x_1,\\ldots,x_n)$ at continuity points of the density; for merely integrable densities the equality holds almost everywhere.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 40."
  },
  {
    "id": "w.prob.6.ross.theoretical.41",
    "course": "prob",
    "sec": "6.7",
    "marks": 6,
    "title": "Ross Theoretical 41: Scale each coordinate",
    "prompt": "For $Y_i=c_iX_i$ with all $c_i>0$, (a) express the joint CDF of $Y$; (b) express its density; (c) verify by the general transformation rule.",
    "approach": "Translate the statement into probabilities or densities, and explain each cancellation.",
    "solution": "(a) Because every scale is positive, $Y_i\\le y_i$ is equivalent to $X_i\\le y_i/c_i$. Hence $F_Y(y)=F_X(y_1/c_1,\\ldots,y_n/c_n)$. (b) Differentiate: $f_Y(y)=f_X(y_1/c_1,\\ldots,y_n/c_n)/\\prod_i c_i$. (c) The inverse map is diagonal with entries $1/c_i$, so its absolute Jacobian is $1/\\prod_i c_i$, agreeing with part (b).",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.7.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, theoretical 41."
  },
  {
    "id": "w.prob.6.ross.selftest.1",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 1: An unfair die and repeated counts",
    "prompt": "A die gives each odd face probability $C$ and each even face probability $2C$. (a) Find $C$; (b) find the joint pmf of even-face indicator $X$ and above-three indicator $Y$. In 12 independent rolls find (c) the chance each face occurs twice; (d) the chance four rolls fall in each pair $\\{1,2\\},\\{3,4\\},\\{5,6\\}$; (e) the chance at least eight rolls are even.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) $3C+6C=1$, so $C=1/9$. (b) The masses $(X,Y)=00,01,10,11$ are $2/9,1/9,2/9,4/9$. (c) The multinomial probability is $12!/(2!)^6\\,(1/9)^6(2/9)^6$. (d) Each pair has chance $1/3$, so $12!/(4!)^3\\,(1/3)^{12}$. (e) The even count is binomial$(12,2/3)$: $\\sum_{k=8}^{12}\\binom{12}k(2/3)^k(1/3)^{12-k}$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 1."
  },
  {
    "id": "w.prob.6.ross.selftest.2",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 2: Expectations from a three-variable table",
    "prompt": "The four triples $(1,2,3),(2,1,1),(2,2,1),(2,3,2)$ each have probability $1/4$. Find (a) $E[XYZ]$; (b) $E[XY+XZ+YZ]$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The four products are $6,2,4,12$, so the mean is $24/4=6$. (b) The pair-product sums are $11,5,8,16$, so the mean is $40/4=10$. We average functions of each whole triple; individual-variable independence is unavailable.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 2."
  },
  {
    "id": "w.prob.6.ross.selftest.4",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Selftest 4: Merge multinomial categories",
    "prompt": "A multinomial experiment has $r$ categories. Group consecutive categories into $k$ blocks of sizes $r_1,\\ldots,r_k$ summing to $r$. Show the block count vector is multinomial.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For each original trial, replace its category by its block label. If block $i$ contains indices $B_i$, the block probability is $q_i=\\sum_{j\\in B_i}p_j$. Independence of trials remains true after relabeling. Thus for $N$ trials the block counts have mass $N!\\prod_iq_i^{y_i}/\\prod_i y_i!$ on $\\sum_i y_i=N$. The counts are multinomial$(N;q_1,\\ldots,q_k)$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 4."
  },
  {
    "id": "w.prob.6.ross.selftest.5",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 5: Functions of independent binary values",
    "prompt": "$X,Y,Z$ are independent, each taking 1 and 2 with equal probability. Find the pmfs of (a) $XYZ$; (b) $XY+XZ+YZ$; (c) $X^2+YZ$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "All eight triples have probability $1/8$. (a) With zero, one, two, three twos, the product is $1,2,4,8$ with probabilities $1/8,3/8,3/8,1/8$. (b) The corresponding sums are $3,5,8,12$ with those same probabilities. (c) If $X=1$, the values are $2,3,5$ with probabilities $1/8,2/8,1/8$; if $X=2$, values are $5,6,8$ with probabilities $1/8,2/8,1/8$. Combining gives masses $1/8,1/4,1/4,1/4,1/8$ at $2,3,5,6,8$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 5."
  },
  {
    "id": "w.prob.6.ross.selftest.6",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 6: Normalize an additive density",
    "prompt": "Let $f(x,y)=x/5+cy$ on $0<x<1,1<y<5$. (a) Find $c$; (b) decide independence; (c) find $P(X+Y>3)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) The total integral is $2/5+12c$, so $c=1/20$. (b) The marginal densities are $4x/5+3/5$ and $1/10+y/20$; their product has an $xy$ term absent from the joint density, so no independence. (c) Integrate over $0<x<1,3-x<y<5$: $\\int_0^1[ x(2+x)/5+(25-(3-x)^2)/40]dx=11/15$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 6."
  },
  {
    "id": "w.prob.6.ross.selftest.7",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Selftest 7: Independent product density",
    "prompt": "$f(x,y)=xy$ on $0<x<1,0<y<2$. (a) Check independence; (b,c) find marginals; (d) find the joint CDF; (e) find $E[Y]$; (f) find $P(X+Y<1)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(b,c) Integration gives $f_X(x)=2x$ on $(0,1)$, $f_Y(y)=y/2$ on $(0,2)$. (a) Their product is $xy$, so independent. (d) The joint CDF is $H_1(x)H_2(y)$, where $H_1$ is 0 below 0, $x^2$ on $(0,1)$, 1 above 1; $H_2$ is 0 below 0, $y^2/4$ on $(0,2)$, 1 above 2. (e) $E[Y]=\\int_0^2y^2/2\\,dy=4/3$. (f) $\\int_0^1\\int_0^{1-x}xy\\,dy\\,dx=1/24$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 7."
  },
  {
    "id": "w.prob.6.ross.selftest.8",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Selftest 8: Common shocks",
    "prompt": "Three independent exponential shock times have rates $\\lambda_1,\\lambda_2,\\lambda_3$. Shock 1 kills component 1, shock 2 kills component 2, and shock 3 kills both. For component failure times $X_1,X_2$, find $P(X_1>s,X_2>t)$, $s,t\\ge0$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Component 1 survival requires shock times 1 and 3 exceed $s$; component 2 survival requires times 2 and 3 exceed $t$. Together the independent shock times must exceed $s,t,\\max(s,t)$ respectively. The answer is $\\exp[-\\lambda_1s-\\lambda_2t-\\lambda_3\\max(s,t)]$. This law can place positive mass on $X_1=X_2$ due to the common shock.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 8."
  },
  {
    "id": "w.prob.6.ross.selftest.10",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Selftest 10: Uniform draws for an advertisement sampler",
    "prompt": "A directory has $m$ pages with $n(i)\\le B$ advertisements on page $i$. A sampler repeatedly chooses a uniform page and accepts it with chance $n(i)/B$, then chooses a uniform advertisement there. (a) Show $X=\\lfloor mU\\rfloor+1$ chooses a uniform page; (b) write acceptance and final choice using fresh independent uniform$(0,1)$ values.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) $X=i$ exactly when $(i-1)/m\\le U<i/m$, an interval of length $1/m$. (b) Draw a fresh $V$ and accept page $X$ if $V<n(X)/B$; otherwise restart with fresh random values. Upon acceptance, draw $W$ and choose advertisement $J=\\lfloor n(X)W\\rfloor+1$. Empty pages have acceptance probability zero. Each random stage uses an independent uniform value.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 10."
  },
  {
    "id": "w.prob.6.ross.selftest.11",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Selftest 11: First uniform value above a cutoff",
    "prompt": "Iid uniform$(0,1)$ draws are made until the first value exceeding $c$, where $0<c<1$. Let $N$ be its position. Is $N$ independent of the accepted value $X_N$?",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For $n\\ge1$ and $c<x<1$, $P(N=n,X_N\\le x)=c^{n-1}(x-c)$. Since $P(N=n)=c^{n-1}(1-c)$ and the accepted-value CDF is $(x-c)/(1-c)$, the joint probability factors. Thus $N$ and $X_N$ are independent, with geometric$(1-c)$ wait and uniform$(c,1)$ accepted value. Rejected draws tell us how long we waited, while every accepted draw has the same conditional law.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 11."
  },
  {
    "id": "w.prob.6.ross.selftest.12",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 12: Dartboard scores",
    "prompt": "Darts independently land uniformly in a square of side 6. Concentric disks of radii 1,2,3 award scores 30,20,10 in successive rings; the rest scores 0. Find (a) chance of score 20; (b) score at least 20; (c) score 0; (d) expected score; (e) two scores at least 10; (f) two-score total 30.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The score probabilities at $30,20,10,0$ are $\\pi/36,3\\pi/36,5\\pi/36,1-9\\pi/36$. Thus (a) $\\pi/12$; (b) $\\pi/9$; (c) $1-\\pi/4$; (d) $(30+60+50)\\pi/36=35\\pi/9$; (e) $(\\pi/4)^2$ by independence; (f) the possible pairs are $(30,0),(0,30),(20,10),(10,20)$, giving $2(\\pi/36)(1-\\pi/4)+2(\\pi/12)(5\\pi/36)=\\pi/18+\\pi^2/108$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 12."
  },
  {
    "id": "w.prob.6.ross.selftest.13",
    "course": "prob",
    "sec": "6.3",
    "marks": 6,
    "title": "Ross Selftest 13: Normal basketball point differences",
    "prompt": "Each quarter home-minus-away score is independently normal with mean 1.5 and variance 6. Find (a) chance of a home win; (b) chance of a win given a five-point halftime deficit; (c) chance of a win given a five-point lead after quarter one.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Four-quarter total is normal$(6,24)$, so chance $\\Phi(6/\\sqrt{24})$. (b) Remaining two quarters sum to normal$(3,12)$, independently of the first half. They must exceed 5, giving $1-\\Phi(2/\\sqrt{12})$. (c) The remaining three sum to normal$(4.5,18)$; they must exceed $-5$, giving $\\Phi(9.5/\\sqrt{18})$. The no-tie continuous model is understood.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.3.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 13."
  },
  {
    "id": "w.prob.6.ross.selftest.14",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Selftest 14: Geometric mixing of gamma times",
    "prompt": "$N$ is geometric$(p)$ on positive integers, with $0<p<1$. Given $N=n$, $X$ is gamma$(n,\\lambda)$. Find the posterior pmf of $N$ given $X=x>0$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "The joint density-mass is $p(1-p)^{n-1}\\lambda^nx^{n-1}e^{-\\lambda x}/(n-1)!$. Sum over $n$ to obtain $f_X(x)=p\\lambda e^{-p\\lambda x}$. Dividing gives $P(N=n\\mid X=x)=e^{-(1-p)\\lambda x}[(1-p)\\lambda x]^{n-1}/(n-1)!$. Thus $N-1$ given $X=x$ is Poisson with mean $(1-p)\\lambda x$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 14."
  },
  {
    "id": "w.prob.6.ross.selftest.16",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Selftest 16: Optimal bid",
    "prompt": "You value an object at 10000 dollars for immediate resale. Three other bids are independent uniform between 7000 and 10000 dollars. What bid maximizes expected profit?",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For $7000\\le b\\le10000$, win chance is $[(b-7000)/3000]^3$, so expected profit is $(10000-b)[(b-7000)/3000]^3$. Write $z=b-7000$; differentiate $(3000-z)z^3$: derivative $z^2(9000-4z)$. The interior maximum is $z=2250$, so bid 9250 dollars. Below 7000 the win chance is zero; above 10000 profit is nonpositive.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 16."
  },
  {
    "id": "w.prob.6.ross.selftest.17",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Selftest 17: Every label appears once",
    "prompt": "$X_1,\\ldots,X_n$ are independent draws from $1,\\ldots,n$. Find the chance their values form a permutation when (a) all labels are equally likely; (b) each draw uses probabilities $p_1,\\ldots,p_n$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "There are $n!$ disjoint permutations. (a) Each has probability $n^{-n}$, giving $n!/n^n$. (b) Each has probability $\\prod_{j=1}^n p_j$, since each label appears once, giving $n!\\prod_jp_j$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 17."
  },
  {
    "id": "w.prob.6.ross.selftest.18",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Selftest 18: Distance between fixed-weight binary vectors",
    "prompt": "Two independent binary length-$n$ vectors each contain exactly $k$ ones, uniformly among such vectors. Let $M$ count positions with $X_i=1,Y_i=0$ and $N$ count all differing positions. Find (a) their relation; (b) the law of $M$; (c) $E[N]$; (d) $\\operatorname{Var}(N)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Equal total numbers of ones force the counts of $10$ and $01$ positions to match, so $N=2M$. (b) Fix the $Y$ vector. Choosing the $k$ positions of the $X$ ones samples $k$ positions from $n$, of which $n-k$ are $Y$ zeros. Hence $P(M=m)=\\binom{n-k}m\\binom k{k-m}/\\binom nk$. (c) $E[N]=2k(n-k)/n$. (d) For $n>1$, hypergeometric variance gives $\\operatorname{Var}(N)=4k^2(n-k)^2/[n^2(n-1)]$. For $n=1$ the variance is zero.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 18."
  },
  {
    "id": "w.prob.6.ross.selftest.19",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Selftest 19: Normal partial sums given a sum",
    "prompt": "Independent $Z_i$ are standard normal and $S_j=\\sum_{i=1}^jZ_i$. (a) Find $S_n\\mid S_k=y$ for $k<n$; (b) find $S_k\\mid S_n=x$ for $1\\le k\\le n$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) $S_n=y+\\sum_{i=k+1}^nZ_i$, with the remaining sum independent of $S_k$, so normal$(y,n-k)$. (b) The pair $(S_k,S_n)$ is bivariate normal with variances $k,n$ and covariance $k$. The conditional mean is $(k/n)x$ and variance $k-k^2/n=k(n-k)/n$. One can see independence of the residual $S_k-(k/n)S_n$ and $S_n$ from their zero covariance and joint normality. At $k=n$, the law is the point mass at $x$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 19."
  },
  {
    "id": "w.prob.6.ross.selftest.20",
    "course": "prob",
    "sec": "6.6",
    "marks": 6,
    "title": "Ross Selftest 20: A new observation after a known maximum",
    "prompt": "Six iid continuous observations are sampled. Given $X_1$ is largest among the first five, find (a) $P(X_6>X_1)$; (b) $P(X_6>X_2)$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "All ranks of the six labels are equally likely. (a) For $X_6>X_1$, the sixth observation must have overall top rank; its chance remains $1/6$ under the ordering condition on the first five. (b) Conditional on $X_1$ being first-five maximum, $X_2$ has uniform rank among the lower four first-five values. Among these four labels and label 6, label 6 has expected number two of these four below it if it is below $X_1$, while if it is above $X_1$ it exceeds all four. More directly, among the six sorted values insert label 6 in one of six equally likely slots: the counts of first-five nonmaximum labels below it are $0,1,2,3,4,4$. Average over slots and four symmetric labels: $(0+1+2+3+4+4)/(6\\cdot4)=7/12$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.6.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 20."
  },
  {
    "id": "w.prob.6.ross.selftest.22",
    "course": "prob",
    "sec": "6.1",
    "marks": 6,
    "title": "Ross Selftest 22: Multinomial cumulative counts, reversed thresholds",
    "prompt": "Independent Bernoulli$(p)$ trials continue indefinitely, with $0<p<1$. $X_r$ is the trial of the $r$th success, $Y_s$ the trial of the $s$th failure. Find $P(X_r=i,Y_s=j)$ for $j<i$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "First $Y_s=j$ has probability $\\binom{j-1}{s-1}(1-p)^sp^{j-s}$. At trial $j$, there are $j-s$ successes. After it, another $r-j+s$ successes are needed, with the last at trial $i$. That additional negative-binomial probability is $\\binom{i-j-1}{r-j+s-1}p^{r-j+s}(1-p)^{i-r-s}$. Multiplying gives $\\binom{j-1}{s-1}\\binom{i-j-1}{r-j+s-1}p^r(1-p)^{i-r}$. This applies when $j\\ge s$, $j-s<r$, $i>j$, and $i-r\\ge s$; otherwise the probability is zero. The terminal trials cannot coincide because one is a success and the other a failure.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.1.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 22."
  },
  {
    "id": "w.prob.6.ross.selftest.23",
    "course": "prob",
    "sec": "6.4",
    "marks": 6,
    "title": "Ross Selftest 23: Pareto after a higher threshold",
    "prompt": "$X$ has Pareto survival $P(X>x)=(a/x)^\\lambda$ for $x\\ge a$, with $a,\\lambda>0$. For $x_0>a$, find the law of $X$ given $X>x_0$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "For $x\\ge x_0$, $P(X>x\\mid X>x_0)=P(X>x)/P(X>x_0)=(x_0/x)^\\lambda$. Below $x_0$ the conditional survival is 1. Thus the conditional law is Pareto with new scale $x_0$ and the same tail exponent $\\lambda$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.4.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 23."
  },
  {
    "id": "w.prob.6.ross.selftest.24",
    "course": "prob",
    "sec": "6.5",
    "marks": 6,
    "title": "Ross Selftest 24: Mixture of conditional densities",
    "prompt": "Prove $f_X(x)=\\int_{-\\infty}^\\infty f_{X\\mid Y}(x\\mid y)f_Y(y)dy$.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Where $f_Y(y)>0$, the conditional density is $f_{X,Y}(x,y)/f_Y(y)$. Multiplying restores the joint density. Values of $y$ with zero marginal density contribute zero and can be assigned any conditional density. Integrating the joint density over $y$ gives $f_X(x)$, proving the identity almost everywhere.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.5.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 24."
  },
  {
    "id": "w.prob.6.ross.selftest.25",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Selftest 25: An elimination contest",
    "prompt": "$n\\ge2$ players advance independently each round, player $i$ with probability $p_i\\in(0,1)$. Zero advances makes all current players co-winners; one advance makes that player the sole winner. Two or more advances leads to another round. $X_i$ is rounds played by player $i$. Find (a) $P(X_i\\ge k)$; (b) chance player $i$ is a winner or co-winner; (c) chance player $i$ is sole winner.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "Imagine each player continues independently until their first failure. Let $T_i$ be that failure-round index; $P(T_i\\ge k)=p_i^{k-1}$. (a) To play round $k\\ge2$, player $i$ and at least one other must survive the first $k-1$ rounds: $P(X_i\\ge k)=p_i^{k-1}[1-\\prod_{j\\ne i}(1-p_j^{k-1})]$. At $k=1$ the probability is 1. (b) Winners are exactly players attaining the largest $T$. Sum by $T_i=r$: $\\sum_{r=1}^\\infty(1-p_i)p_i^{r-1}\\prod_{j\\ne i}(1-p_j^r)$. (c) A sole winner has strictly largest failure index: $\\sum_{r=1}^\\infty(1-p_i)p_i^{r-1}\\prod_{j\\ne i}(1-p_j^{r-1})$. If multiple players share the largest index they all fail together and are co-winners. The source hint for part (a) contains an off-by-one typo: playing the $k$th round requires $k-1$ preceding advances.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 25."
  },
  {
    "id": "w.prob.6.ross.selftest.26",
    "course": "prob",
    "sec": "6.2",
    "marks": 6,
    "title": "Ross Selftest 26: Parity of an independent sum",
    "prompt": "Independent nonnegative integer-valued $X_i$ satisfy $P(X_i\\text{ is even})=\\alpha_i$. Let $Y_i=1$ for even $X_i$, $-1$ otherwise. (a) Complete: the sum is even exactly when the number of odd summands is __. (b) Complete: exactly when $\\prod_iY_i$ is __. (c) Find its expectation; (d) find the probability of an even sum.",
    "approach": "Write down which outcomes satisfy the event, then add their probabilities or integrate their density.",
    "solution": "(a) Even. (b) $+1$. (c) Independence gives $E[\\prod_iY_i]=\\prod_iE[Y_i]=\\prod_i(2\\alpha_i-1)$. (d) If $p$ is the even-sum probability, the same expectation is $p-(1-p)=2p-1$. Hence $p=[1+\\prod_i(2\\alpha_i-1)]/2$.",
    "trap": "Check the allowed values before using the formula.",
    "tests": [
      "c.prob.6.2.1"
    ],
    "provenance": "Original worked adaptation of Ross, A First Course in Probability, 10e, Chapter 6, selftest 26."
  }
]
);
