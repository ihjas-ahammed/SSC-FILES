# Module 4: Random Variables (Discrete) (25 concepts)
# Explains formal mathematical statement, mathematical terms, and reason behind each statement.

STATEMENTS_CH04 = {
    'c.prob.4.1.1': (
        r"""<p><b>Statement:</b> A <b>random variable</b> $X$ on a probability space $(\Omega, \mathcal{F}, P)$ is a measurable function mapping the sample space to the real numbers: $X: \Omega \to \mathbb{R}$, such that for every $x \in \mathbb{R}$, the pre-image $\{\omega \in \Omega : X(\omega) \le x\} \in \mathcal{F}$. Its <b>cumulative distribution function</b> (CDF) $F_X: \mathbb{R} \to [0, 1]$ is defined by:"""
        r"""$$F_X(x) = P(X \le x) = P(\{\omega \in \Omega : X(\omega) \le x\})$$</p>"""
        r"""<p><b>Mathematical terms:</b> $\Omega$ is the sample space; $\mathcal{F}$ is the event $\sigma$-algebra; $X(\omega) \in \mathbb{R}$ is the numerical value realized by outcome $\omega$; $F_X(x)$ is the cumulative distribution function; $\{\omega : X(\omega) \le x\}$ is the inverse image event.</p>"""
        r"""<p><b>Reason:</b> Random variables map complex, non-numerical outcomes (such as sequences of coin flips or quantum states) into real numbers so that mathematical and statistical operations can be applied. Measurability ensures that questions of the form "$X \le x$" correspond to legitimate events in $\mathcal{F}$ to which the probability measure $P$ can assign a well-defined value.</p>"""
    ),
    'c.prob.4.1.2': (
        r"""<p><b>Statement:</b> Every cumulative distribution function $F(x) = P(X \le x)$ satisfies three fundamental properties:"""
        r"""<br>(1) <b>Monotonicity:</b> $F$ is non-decreasing; if $x_1 < x_2$, then $F(x_1) \le F(x_2)$."""
        r"""<br>(2) <b>Limits at infinity:</b> $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to \infty} F(x) = 1$."""
        r"""<br>(3) <b>Right-continuity:</b> For every $x \in \mathbb{R}$, $\lim_{h \downarrow 0} F(x + h) = F(x^+)$ equals $F(x)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $F(x)$ is the CDF; $F(x^+)$ is the right-hand limit $\lim_{h \to 0^+} F(x+h)$; $F(x^-)$ is the left-hand limit $\lim_{h \to 0^+} F(x-h)$; $P(X = x) = F(x) - F(x^-)$ is the probability mass (atom) at $x$.</p>"""
        r"""<p><b>Reason:</b> (1) If $x_1 < x_2$, the event $\{X \le x_1\} \subseteq \{X \le x_2\}$; by monotonicity of probability, $F(x_1) \le F(x_2)$. (2) As $x \to -\infty$, the nested events $\{X \le -n\}$ decrease to $\varnothing$, so $F(x) \to P(\varnothing) = 0$ by continuity from above. As $x \to \infty$, $\{X \le n\}$ increases to $\Omega$, so $F(x) \to P(\Omega) = 1$ by continuity from below. (3) The sequence of events $\{X \le x + 1/n\}$ decreases monotonically to $\{X \le x\}$; by continuity from above, $\lim F(x + 1/n) = F(x)$, establishing right-continuity.</p>"""
    ),
    'c.prob.4.2.1': (
        r"""<p><b>Statement:</b> A random variable $X$ is <b>discrete</b> if its range (support) is a countable set $\mathcal{X} = \{x_1, x_2, \ldots\} \subset \mathbb{R}$. Its <b>probability mass function</b> (PMF) $p_X: \mathbb{R} \to [0, 1]$ is defined by $p_X(x) = P(X = x)$, and satisfies:"""
        r"""<br>(1) $p_X(x) \ge 0$ for all $x \in \mathcal{X}$, and $p_X(x) = 0$ for $x \notin \mathcal{X}$."""
        r"""<br>(2) Normalization: $\sum_{x \in \mathcal{X}} p_X(x) = 1$."""
        r"""<br>(3) For any Borel set $B \subseteq \mathbb{R}$, $P(X \in B) = \sum_{x \in B \cap \mathcal{X}} p_X(x)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\mathcal{X}$ is the countable support of $X$; $p_X(x)$ is the PMF; $\sum_{x \in \mathcal{X}}$ sums over all distinct mass points in the support; $P(X \in B)$ is the probability that $X$ takes a value in set $B$.</p>"""
        r"""<p><b>Reason:</b> Because the range $\mathcal{X}$ is countable, the event $\{X \in B\}$ is the countable union of mutually disjoint singletons $\bigcup_{x \in B \cap \mathcal{X}} \{X = x\}$. By countable additivity of Kolmogorov's third axiom, the probability of the union equals the series sum of the individual point probabilities, $\sum p_X(x)$. Setting $B = \mathbb{R}$ forces the total mass to equal $P(\Omega) = 1$.</p>"""
    ),
    'c.prob.4.3.1': (
        r"""<p><b>Statement:</b> The <b>expected value</b> (mean) of a discrete random variable $X$ with support $\mathcal{X}$ and PMF $p(x) = P(X = x)$ is defined by:"""
        r"""$$E[X] = \sum_{x \in \mathcal{X}} x \, p(x)$$"""
        r"""provided the expectation exists, meaning $\sum_{x \in \mathcal{X}} |x| p(x) < \infty$ (absolute convergence).</p>"""
        r"""<p><b>Mathematical terms:</b> $E[X]$ (or $\mu$) is the expectation / population mean; $x$ is the realized value; $p(x)$ is the probability weight; absolute convergence means $E[|X|] < \infty$, preventing conditional convergence ambiguities.</p>"""
        r"""<p><b>Reason:</b> The expected value represents the probability-weighted center of mass of the distribution. Each possible value $x$ is weighted by its asymptotic relative frequency $p(x)$. Absolute convergence $\sum |x|p(x) < \infty$ is mathematically required so that the series sum is independent of the order of summation by the Riemann rearrangement theorem, guaranteeing a stable physical mean.</p>"""
    ),
    'c.prob.4.3.2': (
        r"""<p><b>Statement:</b> For any discrete random variables $X_1, \ldots, X_n$ with finite expectations $E[|X_i|] < \infty$ and any real constants $a_1, \ldots, a_n, c \in \mathbb{R}$, the expectation operator is strictly <b>linear</b>:"""
        r"""$$E\left[\sum_{i=1}^n a_i X_i + c\right] = \sum_{i=1}^n a_i E[X_i] + c$$"""
        r"""This identity holds universally, regardless of whether the random variables are independent or dependent.</p>"""
        r"""<p><b>Mathematical terms:</b> $a_i, c$ are fixed constants; $\sum a_i X_i$ is a linear combination of random variables; linearity holds without any assumption of independence.</p>"""
        r"""<p><b>Reason:</b> By definition on the sample space, $X_i$ is a function $X_i(\omega)$. The expectation is the sum over elementary outcomes $E[\sum a_i X_i] = \sum_{\omega \in \Omega} (\sum a_i X_i(\omega)) P(\{\omega\})$. Because finite sums and scalar multiplication distribute across real additions, the summation re-groups as $\sum a_i \sum_{\omega} X_i(\omega) P(\{\omega\}) = \sum a_i E[X_i]$. Because this rearrangement depends only on the linearity of addition on each outcome $\omega$, no independence hypothesis is required.</p>"""
    ),
    'c.prob.4.4.1': (
        r"""<p><b>Statement:</b> The <b>Law of the Unconscious Statistician (LOTUS)</b> states that for a discrete random variable $X$ with PMF $p_X(x)$ and any real-valued function $g: \mathbb{R} \to \mathbb{R}$, the expected value of $Y = g(X)$ is given by:"""
        r"""$$E[g(X)] = \sum_{x \in \mathcal{X}} g(x) \, p_X(x)$$"""
        r"""provided $\sum_{x \in \mathcal{X}} |g(x)| p_X(x) < \infty$, eliminating the need to derive the explicit PMF of $Y$.</p>"""
        r"""<p><b>Mathematical terms:</b> $g(X)$ is a transformed random variable; $p_X(x)$ is the original PMF of $X$; LOTUS computes the expectation using the distribution of $X$ directly.</p>"""
        r"""<p><b>Reason:</b> Let $Y = g(X)$ have support $\mathcal{Y}$. By definition of expectation, $E[Y] = \sum_{y \in \mathcal{Y}} y \, P(Y = y)$. The event $\{Y = y\}$ partitions into pre-images: $\{Y = y\} = \bigcup_{x: g(x)=y} \{X = x\}$. Therefore $P(Y = y) = \sum_{x: g(x)=y} p_X(x)$. Substituting this into the expectation gives $\sum_{y} y \sum_{x: g(x)=y} p_X(x) = \sum_{y} \sum_{x: g(x)=y} g(x) p_X(x) = \sum_{x} g(x) p_X(x)$, summing over the fiber partition.</p>"""
    ),
    'c.prob.4.5.1': (
        r"""<p><b>Statement:</b> For a random variable $X$ with finite mean $\mu = E[X]$ and finite second moment $E[X^2] < \infty$, the <b>variance</b> $\operatorname{Var}(X)$ (or $\sigma^2$) is the expected squared deviation from the mean:"""
        r"""$$\operatorname{Var}(X) = E\left[(X - \mu)^2\right] = E[X^2] - (E[X])^2$$"""
        r"""The <b>standard deviation</b> is $\operatorname{SD}(X) = \sigma = \sqrt{\operatorname{Var}(X)} \ge 0$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\mu = E[X]$ is the center; $(X - \mu)^2$ is the squared distance from the mean; $\operatorname{Var}(X) \ge 0$ measures dispersion; $\operatorname{SD}(X)$ has the same physical units as $X$.</p>"""
        r"""<p><b>Reason:</b> Squaring the deviation $(X - \mu)$ ensures all non-zero deviations contribute positive weight, preventing positive and negative fluctuations from canceling out. Expanding the square gives $E[(X - \mu)^2] = E[X^2 - 2\mu X + \mu^2] = E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - 2\mu^2 + \mu^2 = E[X^2] - \mu^2$, providing the standard computational shortcut.</p>"""
    ),
    'c.prob.4.5.2': (
        r"""<p><b>Statement:</b> For any constants $a, b \in \mathbb{R}$ and random variable $X$ with finite variance, the affine transformation rules for variance and standard deviation are:"""
        r"""$$\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X), \qquad \operatorname{SD}(aX + b) = |a| \operatorname{SD}(X)$$</p>"""
        r"""<p>In particular, variance is invariant under constant shifts ($\operatorname{Var}(X + b) = \operatorname{Var}(X)$) and scales quadratically under multiplication.</p>"""
        r"""<p><b>Mathematical terms:</b> $a$ is a multiplicative scale factor; $b$ is an additive shift; $|a|$ is the absolute value; $a^2$ reflects quadratic scaling of squared units.</p>"""
        r"""<p><b>Reason:</b> By linearity of expectation, $E[aX + b] = a\mu + b$. The deviation of $aX + b$ from its mean is $(aX + b) - (a\mu + b) = a(X - \mu)$. The additive shift $b$ cancels out completely. Squaring this deviation yields $[a(X - \mu)]^2 = a^2 (X - \mu)^2$. Taking expectations gives $E[a^2 (X - \mu)^2] = a^2 E[(X - \mu)^2] = a^2 \operatorname{Var}(X)$. Taking the square root gives $\sqrt{a^2 \sigma^2} = |a|\sigma$.</p>"""
    ),
    'c.prob.4.6.1': (
        r"""<p><b>Statement:</b> A <b>Bernoulli</b> random variable $I \sim \operatorname{Bernoulli}(p)$ has PMF $P(I = 1) = p$ and $P(I = 0) = 1-p = q$ for $p \in [0, 1]$. A <b>Binomial</b> random variable $X \sim \operatorname{Binomial}(n, p)$ models the total number of successes in $n$ independent and identically distributed Bernoulli trials, with PMF:"""
        r"""$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k \in \{0, 1, \ldots, n\}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $n \in \mathbb{N}$ is the fixed trial count; $p \in [0, 1]$ is the success probability per trial; $k$ is the number of successes; $\binom{n}{k}$ is the binomial coefficient; $p^k(1-p)^{n-k}$ is the probability of any single specific sequence containing $k$ successes.</p>"""
        r"""<p><b>Reason:</b> In $n$ independent trials, any specific ordered sequence of $k$ successes and $n-k$ failures has probability $p^k(1-p)^{n-k}$ by mutual independence. Because there are $\binom{n}{k}$ distinct sequences containing exactly $k$ successes, and each sequence represents a mutually disjoint outcome in the sample space, summing their probabilities yields $\binom{n}{k} p^k(1-p)^{n-k}$.</p>"""
    ),
    'c.prob.4.6.2': (
        r"""<p><b>Statement:</b> For $X \sim \operatorname{Binomial}(n, p)$, the expectation and variance are:"""
        r"""$$E[X] = np, \qquad \operatorname{Var}(X) = np(1-p) = npq$$"""
        r"""where $q = 1-p$.</p>"""
        r"""<p><b>Mathematical terms:</b> $n$ is the number of trials; $p$ is the success probability; $q = 1-p$ is the failure probability; $X = \sum_{i=1}^n I_i$ is represented as the sum of independent indicators.</p>"""
        r"""<p><b>Reason:</b> Represent $X = \sum_{i=1}^n I_i$, where $I_i$ is the indicator of success on trial $i$. For each trial, $E[I_i] = 1(p) + 0(q) = p$, and $\operatorname{Var}(I_i) = E[I_i^2] - (E[I_i])^2 = p - p^2 = p(1-p)$. By linearity of expectation, $E[X] = \sum_{i=1}^n E[I_i] = np$. Because the trials are mutually independent, the covariances between distinct trials vanish, so the variance of the sum is the sum of the variances: $\operatorname{Var}(X) = \sum_{i=1}^n \operatorname{Var}(I_i) = np(1-p)$.</p>"""
    ),
    'c.prob.4.6.3': (
        r"""<p><b>Statement:</b> The binomial PMF $p(k) = P(X = k)$ satisfies the ratio recursion:"""
        r"""$$\frac{p(k)}{p(k-1)} = \frac{n - k + 1}{k} \cdot \frac{p}{1-p}, \quad k \in \{1, \ldots, n\}$$"""
        r"""The PMF increases while $k \le (n+1)p$, reaching its mode at $k^* = \lfloor(n+1)p\rfloor$, and decreases thereafter.</p>"""
        r"""<p><b>Mathematical terms:</b> $p(k)$ is the PMF value at $k$; $\frac{p(k)}{p(k-1)}$ is the step ratio; $k^*$ is the mode (most likely value); $\lfloor\cdot\rfloor$ is the floor function.</p>"""
        r"""<p><b>Reason:</b> Expanding the ratio of consecutive terms: $\frac{\binom{n}{k} p^k q^{n-k}}{\binom{n}{k-1} p^{k-1} q^{n-k+1}} = \frac{n!/[k!(n-k)!]}{n!/[(k-1)!(n-k+1)!]} \cdot \frac{p}{q} = \frac{n-k+1}{k} \cdot \frac{p}{q}$. The condition for $p(k) \ge p(k-1)$ is $\frac{n-k+1}{k} \frac{p}{1-p} \ge 1 \iff (n-k+1)p \ge kq \iff np + p \ge k(p+q) \iff k \le (n+1)p$. This provides a numerically stable recurrence for CDF evaluation without evaluating astronomical factorials.</p>"""
    ),
    'c.prob.4.7.1': (
        r"""<p><b>Statement:</b> A random variable $X$ has a <b>Poisson distribution</b> with parameter $\lambda > 0$ ($X \sim \operatorname{Poisson}(\lambda)$) if its PMF is:"""
        r"""$$P(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}, \quad k \in \{0, 1, 2, \ldots\}$$"""
        r"""By the Poisson Paradigm (Law of Rare Events), if $n \to \infty$ and $p_n \to 0$ such that $n p_n \to \lambda$, then $\operatorname{Binomial}(n, p_n) \to \operatorname{Poisson}(\lambda)$ pointwise for every $k$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\lambda > 0$ is the mean rate of occurrence; $k \in \mathbb{N}_0$ is the realized count; $e^{-\lambda}$ is the normalization factor ensuring $\sum_{k=0}^\infty P(X = k) = e^{-\lambda} \sum \frac{\lambda^k}{k!} = e^{-\lambda} e^\lambda = 1$.</p>"""
        r"""<p><b>Reason:</b> In the binomial PMF with $p = \lambda/n$, write $\binom{n}{k} (\frac{\lambda}{n})^k (1 - \frac{\lambda}{n})^{n-k} = \frac{n(n-1)\cdots(n-k+1)}{n^k} \frac{\lambda^k}{k!} (1 - \frac{\lambda}{n})^n (1 - \frac{\lambda}{n})^{-k}$. As $n \to \infty$ with $k$ fixed, $\frac{n(n-1)\cdots(n-k+1)}{n^k} \to 1$, $(1 - \frac{\lambda}{n})^n \to e^{-\lambda}$, and $(1 - \frac{\lambda}{n})^{-k} \to 1$. The product converges precisely to $e^{-\lambda} \frac{\lambda^k}{k!}$.</p>"""
    ),
    'c.prob.4.8.1': (
        r"""<p><b>Statement:</b> A <b>Geometric</b> random variable $X \sim \operatorname{Geometric}(p)$ models the number of independent Bernoulli trials until the first success occurs ($p \in (0, 1]$). Its PMF and CDF are:"""
        r"""$$P(X = k) = (1-p)^{k-1} p, \quad k \in \{1, 2, \ldots\}, \qquad F_X(k) = 1 - (1-p)^k$$"""
        r"""It is the unique discrete distribution possessing the <b>memoryless property</b>: $P(X > s + t \mid X > s) = P(X > t)$ for $s, t \in \mathbb{N}$. Its mean and variance are $E[X] = \frac{1}{p}$ and $\operatorname{Var}(X) = \frac{1-p}{p^2}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $p$ is the success probability per trial; $k$ is the trial index of the first success; $(1-p)^{k-1}$ is the probability of $k-1$ initial consecutive failures; $P(X > k) = (1-p)^k$ is the tail survival probability.</p>"""
        r"""<p><b>Reason:</b> The first success occurs at trial $k$ if and only if trials $1, \ldots, k-1$ are failures and trial $k$ is a success. By independence, multiplying these probabilities gives $(1-p)^{k-1}p$. For the memoryless property, the event $\{X > s + t\}$ conditioned on $\{X > s\}$ requires $t$ additional failures; because trials are independent, the previous $s$ failures provide zero information about future trials: $P(X > s + t \mid X > s) = \frac{(1-p)^{s+t}}{(1-p)^s} = (1-p)^t = P(X > t)$.</p>"""
    ),
    'c.prob.4.8.2': (
        r"""<p><b>Statement:</b> A <b>Negative Binomial</b> random variable $X \sim \operatorname{NegBin}(r, p)$ models the number of independent Bernoulli trials required to achieve $r$ successes ($r \in \mathbb{N}, p \in (0, 1]$). Its PMF is:"""
        r"""$$P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k \in \{r, r+1, \ldots\}$$"""
        r"""Its mean and variance are $E[X] = \frac{r}{p}$ and $\operatorname{Var}(X) = \frac{r(1-p)}{p^2}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $r$ is the specified target number of successes; $k$ is the total trial count; $\binom{k-1}{r-1}$ selects positions of earlier successes; $p^r(1-p)^{k-r}$ is the probability of any sequence with $r$ successes and $k-r$ failures.</p>"""
        r"""<p><b>Reason:</b> For the $r$-th success to occur exactly on trial $k$, two independent events must occur simultaneously: (1) exactly $r-1$ successes must occur in the first $k-1$ trials (which occurs in $\binom{k-1}{r-1}$ ways, each with probability $p^{r-1}(1-p)^{(k-1)-(r-1)}$), and (2) trial $k$ must be a success (probability $p$). Multiplying these independent probabilities gives $\binom{k-1}{r-1} p^r(1-p)^{k-r}$. Representing $X = \sum_{j=1}^r G_j$ as the sum of $r$ independent $\operatorname{Geometric}(p)$ variables gives $E[X] = r/p$ and $\operatorname{Var}(X) = r(1-p)/p^2$.</p>"""
    ),
    'c.prob.4.8.3': (
        r"""<p><b>Statement:</b> A <b>Hypergeometric</b> random variable $X \sim \operatorname{Hypergeometric}(N, m, n)$ models the number of successes in an unordered sample of size $n$ drawn <i>without replacement</i> from a finite population of size $N$ containing $m$ successes. Its PMF is:"""
        r"""$$P(X = k) = \frac{\binom{m}{k} \binom{N-m}{n-k}}{\binom{N}{n}}, \quad \max(0, n - (N-m)) \le k \le \min(n, m)$$"""
        r"""Its mean is $E[X] = n \frac{m}{N}$ and its variance is $\operatorname{Var}(X) = n \frac{m}{N} \left(1 - \frac{m}{N}\right) \left(\frac{N-n}{N-1}\right)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $N$ is population size; $m$ is success items in population; $n$ is sample size; $k$ is observed sample successes; $\frac{N-n}{N-1}$ is the <b>finite population correction factor</b>.</p>"""
        r"""<p><b>Reason:</b> There are $\binom{N}{n}$ equally likely ways to draw an unordered sample of size $n$. To obtain exactly $k$ successes and $n-k$ failures, one must choose $k$ items from the $m$ successes (in $\binom{m}{k}$ ways) and $n-k$ items from the $N-m$ failures (in $\binom{N-m}{n-k}$ ways). By the counting principle, the product $\binom{m}{k}\binom{N-m}{n-k}$ gives the favorable outcome count. The finite population correction factor $\frac{N-n}{N-1} < 1$ reflects the reduced variance caused by negative covariance between draws without replacement.</p>"""
    ),
    'c.prob.4.8.4': (
        r"""<p><b>Statement:</b> A random variable $X$ follows a <b>Zeta (Zipf) distribution</b> with parameter $\alpha > 1$ if its PMF is:"""
        r"""$$P(X = k) = \frac{1}{\zeta(\alpha)} \frac{1}{k^\alpha}, \quad k \in \{1, 2, 3, \ldots\}$$"""
        r"""where $\zeta(\alpha) = \sum_{n=1}^\infty n^{-\alpha}$ is the Riemann Zeta function. The $m$-th moment $E[X^m]$ is finite if and only if $\alpha > m + 1$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\alpha > 1$ is the power-law shape parameter; $\zeta(\alpha)$ is the Riemann zeta normalization constant; heavy-tailed means tail probabilities decay polynomially rather than exponentially.</p>"""
        r"""<p><b>Reason:</b> The normalization constant $C$ must satisfy $\sum_{k=1}^\infty C k^{-\alpha} = 1$, which forces $C = 1/\sum_{k=1}^\infty k^{-\alpha} = 1/\zeta(\alpha)$. The $p$-series $\sum k^{-\alpha}$ converges if and only if $\alpha > 1$. The $m$-th moment sum $\sum_{k=1}^\infty k^m \frac{1}{\zeta(\alpha) k^\alpha} = \frac{1}{\zeta(\alpha)} \sum k^{-(\alpha - m)}$ converges if and only if the exponent $\alpha - m > 1$, establishing that moments exist only when $\alpha > m + 1$.</p>"""
    ),
    'c.prob.4.9.1': (
        r"""<p><b>Statement:</b> The <b>Indicator Method</b> evaluates the expected count of events $X = \sum_{i=1}^n I_i$ by decomposing $X$ into indicator variables $I_i = \mathbf{1}_{A_i}$, where $I_i = 1$ if event $A_i$ occurs and $0$ otherwise. Because $E[I_i] = P(A_i)$ and expectation is linear, the expected total count is:"""
        r"""$$E[X] = E\left[\sum_{i=1}^n I_i\right] = \sum_{i=1}^n E[I_i] = \sum_{i=1}^n P(A_i)$$</p>"""
        r"""<p>This identity holds without requiring independence among the events $A_i$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\mathbf{1}_{A_i}$ is the indicator random variable of event $A_i$; $X$ is the total number of events that occur; $E[I_i] = P(A_i)$ converts expectation directly into event probability.</p>"""
        r"""<p><b>Reason:</b> An indicator variable takes value 1 with probability $P(A_i)$ and 0 with probability $1 - P(A_i)$; its expectation is $1 \cdot P(A_i) + 0 \cdot (1 - P(A_i)) = P(A_i)$. By linearity of expectation, the expectation of a sum is always the sum of the expectations, irrespective of whether the indicators $I_i$ are independent or heavily correlated. This reduces computing complex expected totals to evaluating marginal probabilities of individual events.</p>"""
    ),
    'c.prob.4.9.2': (
        r"""<p><b>Statement:</b> For a sum of random variables $X = \sum_{i=1}^n X_i$, the variance is given by the sum of individual variances plus all pairwise covariance corrections:"""
        r"""$$\operatorname{Var}\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n \operatorname{Var}(X_i) + 2 \sum_{1 \le i < j \le n} \operatorname{Cov}(X_i, X_j) = \sum_{i=1}^n \sum_{j=1}^n \operatorname{Cov}(X_i, X_j)$$</p>"""
        r"""<p>where $\operatorname{Cov}(X_i, X_j) = E[(X_i - \mu_i)(X_j - \mu_j)] = E[X_i X_j] - E[X_i]E[X_j]$. When $X_i$ are pairwise uncorrelated ($\operatorname{Cov} = 0$), the variance simplifies to $\sum \operatorname{Var}(X_i)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\operatorname{Cov}(X_i, X_j)$ is the covariance; $\operatorname{Cov}(X_i, X_i) = \operatorname{Var}(X_i)$; pairwise uncorrelated means $\operatorname{Cov}(X_i, X_j) = 0$ for all $i \ne j$.</p>"""
        r"""<p><b>Reason:</b> Expand the definition $\operatorname{Var}(\sum X_i) = E[(\sum (X_i - \mu_i))^2]$. Expanding the square of an $n$-term sum produces $n$ diagonal terms $(X_i - \mu_i)^2$ and $2\binom{n}{2}$ off-diagonal cross-product terms $(X_i - \mu_i)(X_j - \mu_j)$. Distributing the expectation gives $\sum E[(X_i - \mu_i)^2] + 2 \sum_{i < j} E[(X_i - \mu_i)(X_j - \mu_j)] = \sum \operatorname{Var}(X_i) + 2 \sum_{i < j} \operatorname{Cov}(X_i, X_j)$.</p>"""
    ),
    'c.prob.4.10.1': (
        r"""<p><b>Statement:</b> For any real numbers $a < b$, a cumulative distribution function $F(x) = P(X \le x)$ determines interval probabilities through the fundamental evaluation formulas:"""
        r"""<br>(1) Half-open interval: $P(a < X \le b) = F(b) - F(a)$."""
        r"""<br>(2) Closed interval: $P(a \le X \le b) = F(b) - F(a^-)$."""
        r"""<br>(3) Open interval: $P(a < X < b) = F(b^-) - F(a)$."""
        r"""<br>(4) Point mass (atom): $P(X = a) = F(a) - F(a^-)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $F(a) = \lim_{x \downarrow a} F(x)$ is the right-continuous value; $F(a^-) = \lim_{x \uparrow a} F(x)$ is the left-hand limit; an atom is a discontinuity jump where $F(a) > F(a^-)$.</p>"""
        r"""<p><b>Reason:</b> Partition the event $\{X \le b\}$ into the disjoint union $\{X \le a\} \cup \{a < X \le b\}$. By finite additivity, $P(X \le b) = P(X \le a) + P(a < X \le b)$, which rearranges to $P(a < X \le b) = F(b) - F(a)$. For a point mass, write $\{X = a\} = \{X \le a\} \setminus \{X < a\}$; since $\{X < a\} = \bigcup_{n=1}^\infty \{X \le a - 1/n\}$, continuity from below yields $P(X < a) = \lim F(a - 1/n) = F(a^-)$, giving $P(X = a) = F(a) - F(a^-)$.</p>"""
    ),
    'c.prob.4.2.2': (
        r"""<p><b>Statement:</b> Given a random variable $X: \Omega \to \mathbb{R}$ on a discrete sample space with outcome probabilities $P(\{\omega\})$, the probability mass function $p_X(x)$ at each value $x \in \mathbb{R}$ is the sum of the probabilities of all outcomes that map to $x$:"""
        r"""$$p_X(x) = P(X = x) = \sum_{\omega \in \Omega : X(\omega) = x} P(\{\omega\})$$</p>"""
        r"""<p><b>Mathematical terms:</b> The set $X^{-1}(x) = \{\omega \in \Omega : X(\omega) = x\}$ is the fiber (pre-image) of $x$; $p_X(x)$ is the aggregated mass.</p>"""
        r"""<p><b>Reason:</b> The event $\{X = x\}$ is by definition the pre-image set $\{\omega \in \Omega : X(\omega) = x\}$. Because each distinct outcome $\omega$ represents an elementary, disjoint event in the discrete sample space, the probability of the pre-image event is the sum of the individual probabilities of its constituent outcomes by countable additivity.</p>"""
    ),
    'c.prob.4.4.2': (
        r"""<p><b>Statement:</b> For a non-linear function $g(x)$, the expectation of the function is in general strictly unequal to the function of the expectation: $E[g(X)] \ne g(E[X])$. If $g$ is convex ($g^{\prime\prime}(x) \ge 0$), <b>Jensen's Inequality</b> guarantees:"""
        r"""$$E[g(X)] \ge g(E[X])$$</p>"""
        r"""<p>with equality if and only if $g$ is linear on the support of $X$ or $X$ is almost surely constant.</p>"""
        r"""<p><b>Mathematical terms:</b> Non-linear function $g$; convex function means chords lie on or above the curve; $E[X^2] \ge (E[X])^2$ is the quadratic special case since $\operatorname{Var}(X) = E[X^2] - (E[X])^2 \ge 0$.</p>"""
        r"""<p><b>Reason:</b> For a strictly convex function like $g(x) = x^2$, the tangent line at the mean $\mu = E[X]$ satisfies $g(x) \ge g(\mu) + g^\prime(\mu)(x - \mu)$ for all $x$. Taking expectations of both sides preserves the inequality: $E[g(X)] \ge g(\mu) + g^\prime(\mu) E[X - \mu] = g(E[X]) + 0 = g(E[X])$. Only when $g$ is affine does the tangent line coincide with $g$ everywhere, permitting $E[g(X)] = g(E[X])$.</p>"""
    ),
    'c.prob.4.7.2': (
        r"""<p><b>Statement:</b> For $X \sim \operatorname{Poisson}(\lambda)$, the $r$-th <b>falling-factorial moment</b> for any integer $r \ge 1$ is given exactly by:"""
        r"""$$E[(X)_r] = E[X(X-1)\cdots(X-r+1)] = \lambda^r$$"""
        r"""In particular, $E[X] = \lambda$, $E[X(X-1)] = \lambda^2$, and $\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2 = \lambda^2 + \lambda - \lambda^2 = \lambda$.</p>"""
        r"""<p><b>Mathematical terms:</b> $(X)_r = \frac{X!}{(X-r)!}$ is the falling factorial of order $r$; $\lambda$ is the Poisson parameter; $\operatorname{Var}(X) = \lambda$ reflects equal mean and variance.</p>"""
        r"""<p><b>Reason:</b> Apply LOTUS: $E[(X)_r] = \sum_{k=0}^\infty k(k-1)\cdots(k-r+1) e^{-\lambda} \frac{\lambda^k}{k!}$. For $k < r$, the factorial term is zero. For $k \ge r$, the factorials cancel: $\frac{k!}{(k-r)!} \frac{\lambda^k}{k!} = \frac{\lambda^k}{(k-r)!}$. Factoring out $\lambda^r e^{-\lambda}$ and shifting indices with $j = k - r$ yields $\lambda^r e^{-\lambda} \sum_{j=0}^\infty \frac{\lambda^j}{j!} = \lambda^r e^{-\lambda} e^\lambda = \lambda^r$.</p>"""
    ),
    'c.prob.4.10.2': (
        r"""<p><b>Statement:</b> When evaluating probabilities for discrete integer-valued random variables using the CDF $F(x) = P(X \le x)$, strict and non-strict inequalities must be converted precisely using the continuity points and integers:"""
        r"""<br>(1) $P(X \ge k) = 1 - P(X \le k - 1) = 1 - F(k - 1)$."""
        r"""<br>(2) $P(X > k) = 1 - P(X \le k) = 1 - F(k)$."""
        r"""<br>(3) $P(j \le X \le k) = F(k) - F(j - 1)$ for integers $j \le k$."""
        r"""<br>(4) $P(j < X \le k) = F(k) - F(j)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $k, j \in \mathbb{Z}$ are integer thresholds; $F(k) = P(X \le k)$ is the CDF evaluated at integer $k$; $F(k-1)$ subtracts all probability mass strictly below $k$.</p>"""
        r"""<p><b>Reason:</b> For integer-valued random variables, the open condition $X < k$ is logically identical to the non-strict condition $X \le k - 1$, because there are no possible values strictly between $k-1$ and $k$. Therefore, the complement of $\{X \ge k\}$ is $\{X < k\} = \{X \le k - 1\}$, so $P(X \ge k) = 1 - F(k-1)$. Similarly, $P(j \le X \le k) = P(X \le k) - P(X \le j - 1) = F(k) - F(j-1)$.</p>"""
    ),
    'c.prob.4.2.3': (
        r"""<p><b>Statement:</b> A random variable $X$ has a <b>Discrete Uniform distribution</b> on consecutive integers $\{a, a+1, \ldots, b\}$ with $N = b - a + 1$ possible values if its PMF is:"""
        r"""$$P(X = k) = \frac{1}{b - a + 1} = \frac{1}{N}, \quad k \in \{a, \ldots, b\}$$"""
        r"""Its mean is the midpoint $E[X] = \frac{a + b}{2}$ and its variance is $\operatorname{Var}(X) = \frac{(b - a + 1)^2 - 1}{12} = \frac{N^2 - 1}{12}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $a$ is the minimum value; $b$ is the maximum value; $N = b - a + 1$ is the total count of consecutive integers; $\frac{N^2 - 1}{12}$ is the discrete uniform variance formula.</p>"""
        r"""<p><b>Reason:</b> Normalization across $N$ equally likely points forces $p(k) = 1/N$. By symmetry around the center, $E[X] = \frac{1}{N} \sum_{k=a}^b k = \frac{1}{N} \frac{N(a+b)}{2} = \frac{a+b}{2}$. Shifting $X$ to $\{1, \ldots, N\}$ does not alter variance. Using the sum of squares formula $\sum_{k=1}^N k^2 = \frac{N(N+1)(2N+1)}{6}$, the second moment is $E[X^2] = \frac{(N+1)(2N+1)}{6}$. Subtracting $(E[X])^2 = (\frac{N+1}{2})^2$ yields $\frac{(N+1)(2N+1)}{6} - \frac{(N+1)^2}{4} = \frac{(N+1)(4N+2 - 3N - 3)}{12} = \frac{(N+1)(N-1)}{12} = \frac{N^2 - 1}{12}$.</p>"""
    ),
    'c.prob.4.2.4': (
        r"""<p><b>Statement:</b> For a discrete uniform random variable on $N = 4$ consecutive values, such as $X \in \{1, 2, 3, 4\}$, the PMF is $P(X = k) = \frac{1}{4}$ for each $k \in \{1, 2, 3, 4\}$. The mean is $E[X] = \frac{1+4}{2} = 2.5$, the second moment is $E[X^2] = \frac{1+4+9+16}{4} = \frac{30}{4} = 7.5$, and the variance is $\operatorname{Var}(X) = 7.5 - (2.5)^2 = 7.5 - 6.25 = 1.25 = \frac{4^2 - 1}{12} = \frac{15}{12}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $N = 4$; support $\{1, 2, 3, 4\}$; uniform probability $p = 1/4 = 0.25$; mean $\mu = 2.5$; variance $\sigma^2 = 1.25 = 5/4$.</p>"""
        r"""<p><b>Reason:</b> Direct arithmetic evaluation of LOTUS sums: $E[X] = \frac{1}{4}(1 + 2 + 3 + 4) = \frac{10}{4} = 2.5$. $E[X^2] = \frac{1}{4}(1^2 + 2^2 + 3^2 + 4^2) = \frac{30}{4} = 7.5$. The variance formula $\operatorname{Var}(X) = E[X^2] - (E[X])^2$ gives $7.5 - 6.25 = 1.25$, matching the general formula $\frac{N^2 - 1}{12} = \frac{16 - 1}{12} = \frac{15}{12} = 1.25$ exactly.</p>"""
    ),
}
