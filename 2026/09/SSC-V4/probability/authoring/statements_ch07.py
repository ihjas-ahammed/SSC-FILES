# Module 7: Properties of Expectation (18 concepts)
# Explains formal mathematical statement, mathematical terms, and reason behind each statement.

STATEMENTS_CH07 = {
    'c.prob.7.1.1': (
        r"""<p><b>Statement:</b> The expectation operator preserves inequalities and bounds almost surely:"""
        r"""<br>(1) If $a \le X \le b$ with probability 1, then $a \le E[X] \le b$."""
        r"""<br>(2) <b>Monotonicity:</b> If $X \le Y$ with probability 1 and both expectations exist, then $E[X] \le E[Y]$."""
        r"""<br>(3) <b>Triangle Inequality:</b> $|E[X]| \le E[|X|]$.</p>"""
        r"""<p><b>Mathematical terms:</b> Almost surely (with probability 1) means $P(a \le X \le b) = 1$; $E[X]$ is the expectation; monotonicity means order is preserved under integration.</p>"""
        r"""<p><b>Reason:</b> (1) If $X \ge a$ almost surely, then $X - a \ge 0$, so $E[X - a] = \int (x - a) f(x) dx \ge 0$ because the integrand is non-negative everywhere, implying $E[X] \ge a$. Applying the same logic to $b - X \ge 0$ gives $E[X] \le b$. (2) If $X \le Y$, then $Z = Y - X \ge 0$ almost surely, so $E[Y - X] \ge 0 \iff E[Y] \ge E[X]$. (3) Since $-|X| \le X \le |X|$ holds pointwise, applying monotonicity yields $-E[|X|] \le E[X] \le E[|X|]$, which is equivalent to $|E[X]| \le E[|X|]$.</p>"""
    ),
    'c.prob.7.2.1': (
        r"""<p><b>Statement:</b> <b>Linearity of Expectation:</b> For any collection of random variables $X_1, \ldots, X_n$ with finite expectations and any constants $a_1, \ldots, a_n, c \in \mathbb{R}$:"""
        r"""$$E\left[\sum_{i=1}^n a_i X_i + c\right] = \sum_{i=1}^n a_i E[X_i] + c$$"""
        r"""This identity holds universally, without requiring independence among $X_1, \ldots, X_n$.</p>"""
        r"""<p><b>Mathematical terms:</b> Linear operator; $a_i, c$ are real constants; $\sum a_i X_i$ is a linear combination of random variables.</p>"""
        r"""<p><b>Reason:</b> Expectation is integration against the underlying probability measure $P$: $E[\sum a_i X_i] = \int_\Omega (\sum a_i X_i(\omega)) dP(\omega)$. By the fundamental linearity of the integral with respect to measurable functions on a measure space, the integral of a finite linear combination is identically the linear combination of the integrals: $\sum a_i \int_\Omega X_i(\omega) dP(\omega) = \sum a_i E[X_i]$. Because this property relies strictly on the algebraic linearity of real addition on each outcome $\omega$, no independence assumption is ever needed.</p>"""
    ),
    'c.prob.7.2.2': (
        r"""<p><b>Statement:</b> For continuous random variables $(X, Y)$ with joint density $f_{X,Y}(x, y)$ and any real-valued function $g: \mathbb{R}^2 \to \mathbb{R}$, 2D LOTUS gives:"""
        r"""$$E[g(X, Y)] = \int_{-\infty}^\infty \int_{-\infty}^\infty g(x, y) f_{X,Y}(x, y) \, dx \, dy$$"""
        r"""provided $\iint |g(x, y)| f_{X,Y}(x, y) dx dy < \infty$. For discrete $(X, Y)$, $E[g(X, Y)] = \sum_x \sum_y g(x, y) p_{X,Y}(x, y)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $g(X, Y)$ is a joint transformation; $f_{X,Y}(x, y)$ is the joint density; $p_{X,Y}(x, y)$ is the joint PMF; 2D LOTUS evaluates the expectation without deriving the 1D distribution of $g(X, Y)$.</p>"""
        r"""<p><b>Reason:</b> Partition $\mathbb{R}^2$ into a grid of small rectangles $\Delta x \times \Delta y$, where the probability mass of the cell at $(x_i, y_j)$ is approximately $f_{X,Y}(x_i, y_j)\Delta x \Delta y$. By discrete LOTUS on fibers $g^{-1}(z)$, the expected value is approximated by the 2D Riemann sum $\sum \sum g(x_i, y_j) f_{X,Y}(x_i, y_j)\Delta x \Delta y$. In the continuum limit $\Delta x, \Delta y \to 0$, this sum converges to the double integral by the dominated convergence theorem.</p>"""
    ),
    'c.prob.7.3.1': (
        r"""<p><b>Statement:</b> For any collection of events $A_1, \ldots, A_n$ in a sample space $S$, let $I_i = \mathbf{1}_{A_i}$ be the indicator variable of event $A_i$ ($I_i = 1$ if $A_i$ occurs, $0$ otherwise). The total number of events that occur is $X = \sum_{i=1}^n I_i$, and its expectation is:"""
        r"""$$E[X] = \sum_{i=1}^n E[I_i] = \sum_{i=1}^n P(A_i)$$</p>"""
        r"""<p>If the events have a common marginal probability $P(A_i) = p$, then $E[X] = np$, regardless of any dependence structure between the events.</p>"""
        r"""<p><b>Mathematical terms:</b> $I_i = \mathbf{1}_{A_i}$ is an indicator random variable; $X = \sum I_i$ is the count of realized events; $E[I_i] = P(A_i)$ converts expectation to event probability.</p>"""
        r"""<p><b>Reason:</b> On every elementary outcome $\omega \in S$, $X(\omega) = \sum_{i=1}^n I_i(\omega)$ counts exactly how many events $A_i$ contain $\omega$. Because expectation is linear, $E[X] = E[\sum I_i] = \sum E[I_i]$. For each indicator, $E[I_i] = 1 \cdot P(A_i) + 0 \cdot P(A_i^c) = P(A_i)$. Substituting this gives $\sum P(A_i)$. This method solves complex counting problems (e.g. coupon collector, matching problems) without requiring the joint distribution of the count $X$.</p>"""
    ),
    'c.prob.7.3.2': (
        r"""<p><b>Statement:</b> For an event count $X = \sum_{i=1}^n \mathbf{1}_{A_i}$, the <b>falling-factorial moments</b> count joint occurrences of subsets of events:"""
        r"""$$E[(X)_k] = E[X(X-1)\cdots(X-k+1)] = k! \sum_{1 \le i_1 < i_2 < \cdots < i_k \le n} P(A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_k})$$"""
        r"""In particular, for $k = 2$, $E[X(X-1)] = 2 \sum_{i < j} P(A_i \cap A_j)$, which determines variance via $\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2$.</p>"""
        r"""<p><b>Mathematical terms:</b> $(X)_k = \frac{X!}{(X-k)!}$ is the $k$-th falling factorial; $k! \sum P(\bigcap A_{i_r})$ sums over all ordered $k$-tuples of distinct events; $P(A_i \cap A_j)$ is the joint pairwise probability.</p>"""
        r"""<p><b>Reason:</b> Expand the product $(X)_2 = X(X-1) = (\sum I_i)(\sum I_j - 1) = \sum_i \sum_{j \ne i} I_i I_j$. Note that $I_i I_j = \mathbf{1}_{A_i \cap A_j}$, so $E[I_i I_j] = P(A_i \cap A_j)$. Summing over all $i \ne j$ gives $\sum_{i \ne j} P(A_i \cap A_j) = 2 \sum_{i < j} P(A_i \cap A_j)$. By induction, $E[(X)_k] = \sum_{i_1, \ldots, i_k \text{ distinct}} E[I_{i_1}\cdots I_{i_k}] = k! \sum_{i_1 < \cdots < i_k} P(\bigcap_{r=1}^k A_{i_r})$.</p>"""
    ),
    'c.prob.7.4.1': (
        r"""<p><b>Statement:</b> The <b>covariance</b> between random variables $X$ and $Y$ measures their joint linear variability:"""
        r"""$$\operatorname{Cov}(X, Y) = E[(X - \mu_X)(Y - \mu_Y)] = E[XY] - E[X]E[Y]$$"""
        r"""The <b>Pearson correlation coefficient</b> is the dimensionless normalized covariance:"""
        r"""$$\rho(X, Y) = \frac{\operatorname{Cov}(X, Y)}{\operatorname{SD}(X) \operatorname{SD}(Y)} \in [-1, 1]$$"""
        r"""where $|\rho| = 1$ if and only if $Y = aX + b$ almost surely for some constants $a \ne 0, b \in \mathbb{R}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\operatorname{Cov}(X, Y)$ is covariance; $\rho$ is the correlation coefficient; $\operatorname{Cov}(X, X) = \operatorname{Var}(X)$; $|\rho| \le 1$ is Cauchy-Schwarz inequality for random variables.</p>"""
        r"""<p><b>Reason:</b> Expanding $E[(X - \mu_X)(Y - \mu_Y)] = E[XY - \mu_X Y - \mu_Y X + \mu_X \mu_Y] = E[XY] - \mu_X\mu_Y - \mu_Y\mu_X + \mu_X\mu_Y = E[XY] - E[X]E[Y]$. For any $t \in \mathbb{R}$, $E[((X-\mu_X)t + (Y-\mu_Y))^2] = t^2 \sigma_X^2 + 2t \operatorname{Cov}(X, Y) + \sigma_Y^2 \ge 0$. Because this quadratic polynomial in $t$ is non-negative everywhere, its discriminant must be non-positive: $\Delta = 4\operatorname{Cov}(X, Y)^2 - 4\sigma_X^2\sigma_Y^2 \le 0 \iff |\operatorname{Cov}(X, Y)| \le \sigma_X \sigma_Y$, proving $|\rho| \le 1$. Equality occurs when the squared deviation is zero almost surely, forcing an exact linear relationship.</p>"""
    ),
    'c.prob.7.4.2': (
        r"""<p><b>Statement:</b> Bilinearity of covariance and variance of general linear combinations:"""
        r"""<br>(1) <b>Bilinearity:</b> $\operatorname{Cov}(\sum_{i=1}^m a_i X_i, \, \sum_{j=1}^n b_j Y_j) = \sum_{i=1}^m \sum_{j=1}^n a_i b_j \operatorname{Cov}(X_i, Y_j)$."""
        r"""<br>(2) <b>Variance of a linear combination:</b>"""
        r"""$$\operatorname{Var}\left(\sum_{i=1}^n a_i X_i\right) = \sum_{i=1}^n a_i^2 \operatorname{Var}(X_i) + 2 \sum_{1 \le i < j \le n} a_i a_j \operatorname{Cov}(X_i, X_j)$$</p>"""
        r"""<p>In particular, $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$ and $\operatorname{Var}(X - Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) - 2\operatorname{Cov}(X, Y)$.</p>"""
        r"""<p><b>Mathematical terms:</b> Bilinear form; symmetric covariance matrix $\boldsymbol{\Sigma} = [\operatorname{Cov}(X_i, X_j)]$; quadratic form $\mathbf{a}^T \boldsymbol{\Sigma} \mathbf{a}$.</p>"""
        r"""<p><b>Reason:</b> Expand $\operatorname{Var}(\sum a_i X_i) = \operatorname{Cov}(\sum a_i X_i, \sum a_j X_j)$. By linearity in both arguments, the double sum expands into $\sum_{i=1}^n \sum_{j=1}^n a_i a_j \operatorname{Cov}(X_i, X_j)$. Separating the diagonal terms $i = j$ (where $\operatorname{Cov}(X_i, X_i) = \operatorname{Var}(X_i)$) from the off-diagonal terms $i \ne j$, and using the symmetry $\operatorname{Cov}(X_i, X_j) = \operatorname{Cov}(X_j, X_i)$, pairs the symmetric off-diagonal terms to yield $2 \sum_{i < j} a_i a_j \operatorname{Cov}(X_i, X_j)$.</p>"""
    ),
    'c.prob.7.5.1': (
        r"""<p><b>Statement:</b> The <b>conditional expectation</b> of $X$ given $Y$, denoted $E[X \mid Y]$, is a random variable that is a measurable function of $Y$: $E[X \mid Y] = g(Y)$, where the function $g(y)$ evaluates the conditional mean $g(y) = E[X \mid Y = y]$. For discrete variables, $g(y) = \sum_x x \, p_{X \mid Y}(x \mid y)$; for continuous variables, $g(y) = \int_{-\infty}^\infty x f_{X \mid Y}(x \mid y) \, dx$.</p>"""
        r"""<p><b>Mathematical terms:</b> $E[X \mid Y = y]$ is a fixed real number; $E[X \mid Y]$ is a random variable; $g(Y)$ inherits its randomness entirely from the realized value of $Y$.</p>"""
        r"""<p><b>Reason:</b> Before $Y$ is observed, the predicted conditional average of $X$ is unknown and varies depending on which outcome $\omega$ occurs through $Y(\omega)$. Therefore, $E[X \mid Y]$ is itself a random variable defined on $\Omega$ taking the specific numerical value $E[X \mid Y = y]$ whenever the trial yields $Y(\omega) = y$. It represents the best available forecast of $X$ based on the information provided by $Y$.</p>"""
    ),
    'c.prob.7.5.2': (
        r"""<p><b>Statement:</b> The <b>Law of Total Expectation</b> (Adam's Law / Tower Property) states that the expected value of the conditional expectation equals the unconditional expectation:"""
        r"""$$E[E[X \mid Y]] = E[X]$$"""
        r"""For discrete variables, $E[X] = \sum_y E[X \mid Y = y] p_Y(y)$; for continuous variables, $E[X] = \int_{-\infty}^\infty E[X \mid Y = y] f_Y(y) \, dy$.</p>"""
        r"""<p><b>Mathematical terms:</b> Outer expectation is with respect to $Y$; inner expectation is with respect to $X \mid Y$; tower property: $E[X] = E_Y[E_{X \mid Y}[X \mid Y]]$.</p>"""
        r"""<p><b>Reason:</b> Under continuous definitions: $E[E[X \mid Y]] = \int_{-\infty}^\infty E[X \mid Y = y] f_Y(y) dy = \int_{-\infty}^\infty \left(\int_{-\infty}^\infty x \frac{f_{X,Y}(x, y)}{f_Y(y)} dx\right) f_Y(y) dy$. The marginal densities $f_Y(y)$ cancel out in the product, leaving $\int_{-\infty}^\infty \int_{-\infty}^\infty x f_{X,Y}(x, y) dx dy = E[X]$ by 2D LOTUS. The unconditional average is obtained by averaging the conditional averages weighted by the probability of each conditioning state.</p>"""
    ),
    'c.prob.7.5.3': (
        r"""<p><b>Statement:</b> The <b>Law of Total Variance</b> (Eve's Law) decomposes the total variance of $X$ into the sum of the expectation of the conditional variance and the variance of the conditional expectation:"""
        r"""$$\operatorname{Var}(X) = E[\operatorname{Var}(X \mid Y)] + \operatorname{Var}(E[X \mid Y])$$</p>"""
        r"""<p>where $\operatorname{Var}(X \mid Y = y) = E[(X - E[X \mid Y = y])^2 \mid Y = y]$ is the conditional variance.</p>"""
        r"""<p><b>Mathematical terms:</b> $E[\operatorname{Var}(X \mid Y)]$ is the unexplained (within-group) variance; $\operatorname{Var}(E[X \mid Y])$ is the explained (between-group) variance.</p>"""
        r"""<p><b>Reason:</b> By the variance formula, $\operatorname{Var}(X \mid Y) = E[X^2 \mid Y] - (E[X \mid Y])^2$. Taking expectations of both sides gives $E[\operatorname{Var}(X \mid Y)] = E[E[X^2 \mid Y]] - E[(E[X \mid Y])^2] = E[X^2] - E[(E[X \mid Y])^2]$ by the Law of Total Expectation. Now consider the variance of $E[X \mid Y]$: $\operatorname{Var}(E[X \mid Y]) = E[(E[X \mid Y])^2] - (E[E[X \mid Y]])^2 = E[(E[X \mid Y])^2] - (E[X])^2$. Adding these two equations cancels the $E[(E[X \mid Y])^2]$ terms, leaving $E[X^2] - (E[X])^2 = \operatorname{Var}(X)$.</p>"""
    ),
    'c.prob.7.6.1': (
        r"""<p><b>Statement:</b> Among all measurable functions $g(Y)$ of $Y$, the conditional expectation $g^*(Y) = E[X \mid Y]$ is the unique <b>minimum mean squared error (MMSE) predictor</b> of $X$:"""
        r"""$$E[(X - E[X \mid Y])^2] \le E[(X - g(Y))^2]$$"""
        r"""with equality if and only if $g(Y) = E[X \mid Y]$ almost surely. The residual prediction error $X - E[X \mid Y]$ is orthogonal to any function $h(Y)$: $E[(X - E[X \mid Y]) h(Y)] = 0$.</p>"""
        r"""<p><b>Mathematical terms:</b> MMSE predictor; orthogonal projection; $E[(X - g(Y))^2]$ is the mean squared error (MSE); $E[X \mid Y]$ is the projection of $X$ onto the subspace of $Y$-measurable functions.</p>"""
        r"""<p><b>Reason:</b> Add and subtract $E[X \mid Y]$: $X - g(Y) = (X - E[X \mid Y]) + (E[X \mid Y] - g(Y))$. Squaring this identity yields $(X - g(Y))^2 = (X - E[X \mid Y])^2 + (E[X \mid Y] - g(Y))^2 + 2(X - E[X \mid Y])(E[X \mid Y] - g(Y))$. Take expectations of the cross-product using the Tower Property: $E[(X - E[X \mid Y]) h(Y)] = E_Y[E_{X \mid Y}[(X - E[X \mid Y]) h(Y) \mid Y]] = E_Y[h(Y) (E[X \mid Y] - E[X \mid Y])] = 0$. Therefore, $E[(X - g(Y))^2] = E[(X - E[X \mid Y])^2] + E[(E[X \mid Y] - g(Y))^2]$. Because the second term is non-negative, the MSE is strictly minimized when $g(Y) = E[X \mid Y]$.</p>"""
    ),
    'c.prob.7.6.2': (
        r"""<p><b>Statement:</b> The <b>Best Linear Predictor (BLP)</b> of $Y$ given $X$ minimizes the mean squared error $E[(Y - (aX + b))^2]$ over all linear functions $aX + b$. The optimal coefficients are:"""
        r"""$$a^* = \frac{\operatorname{Cov}(X, Y)}{\operatorname{Var}(X)} = \rho \frac{\sigma_Y}{\sigma_X}, \qquad b^* = \mu_Y - a^* \mu_X$$"""
        r"""yielding the linear regression line $\hat{Y} = \mu_Y + \rho \frac{\sigma_Y}{\sigma_X}(X - \mu_X)$, with minimum mean squared error $E[(Y - \hat{Y})^2] = \sigma_Y^2(1 - \rho^2)$.</p>"""
        r"""<p><b>Mathematical terms:</b> Linear regression line; $a^*$ is the slope; $b^*$ is the intercept; $\rho$ is the correlation; $\sigma_Y^2(1-\rho^2)$ is the minimum MSE.</p>"""
        r"""<p><b>Reason:</b> Expand the MSE: $M(a, b) = E[(Y - aX - b)^2] = E[((Y - \mu_Y) - a(X - \mu_X) + (\mu_Y - a\mu_X - b))^2]$. For any fixed $a$, the choice of $b$ that minimizes the expectation is $b = \mu_Y - a\mu_X$, eliminating the constant shift. The MSE then becomes $E[((Y - \mu_Y) - a(X - \mu_X))^2] = \sigma_Y^2 - 2a \operatorname{Cov}(X, Y) + a^2 \sigma_X^2$. Differentiating with respect to $a$ and setting to zero gives $-2\operatorname{Cov}(X, Y) + 2a\sigma_X^2 = 0 \iff a^* = \frac{\operatorname{Cov}(X, Y)}{\sigma_X^2} = \rho \frac{\sigma_Y}{\sigma_X}$. Substituting $a^*$ back yields $\sigma_Y^2 - 2\rho^2\sigma_Y^2 + \rho^2\sigma_Y^2 = \sigma_Y^2(1 - \rho^2)$.</p>"""
    ),
    'c.prob.7.7.1': (
        r"""<p><b>Statement:</b> The <b>Moment Generating Function (MGF)</b> of a random variable $X$ is defined by:"""
        r"""$$M_X(t) = E\left[e^{tX}\right], \quad t \in (-h, h)$$"""
        r"""for some $h > 0$. If $M_X(t)$ exists in an open neighborhood around $t = 0$, all moments $E[X^n]$ exist and are generated by derivatives at zero: $E[X^n] = M_X^{(n)}(0) = \left.\frac{d^n}{dt^n} M_X(t)\right|_{t=0}$. Moreover, the MGF uniquely determines the distribution.</p>"""
        r"""<p><b>Mathematical terms:</b> $M_X(t)$ is the MGF; $t$ is a real parameter; $M_X(0) = E[e^0] = 1$; $M_X^{(n)}(0)$ is the $n$-th derivative evaluated at $t = 0$; uniqueness means identical MGFs imply identical CDFs.</p>"""
        r"""<p><b>Reason:</b> Expand $e^{tX}$ as a Taylor series: $e^{tX} = \sum_{n=0}^\infty \frac{(tX)^n}{n!} = 1 + tX + \frac{t^2 X^2}{2!} + \cdots + \frac{t^n X^n}{n!} + \cdots$. Taking expectations term-by-term (justified by dominated convergence when the MGF converges in a neighborhood of 0) gives $M_X(t) = 1 + tE[X] + \frac{t^2}{2!}E[X^2] + \cdots + \frac{t^n}{n!}E[X^n] + \cdots$. Differentiating $n$ times with respect to $t$ and evaluating at $t = 0$ eliminates all other terms, isolating $M_X^{(n)}(0) = E[X^n]$.</p>"""
    ),
    'c.prob.7.7.2': (
        r"""<p><b>Statement:</b> If $X$ and $Y$ are independent random variables with MGFs $M_X(t)$ and $M_Y(t)$, then the MGF of their sum $Z = X + Y$ is the product of their individual MGFs:"""
        r"""$$M_{X+Y}(t) = M_X(t) \cdot M_Y(t)$$"""
        r"""More generally, for independent $X_1, \ldots, X_n$, $M_{\sum a_i X_i}(t) = \prod_{i=1}^n M_{X_i}(a_i t)$.</p>"""
        r"""<p><b>Mathematical terms:</b> Product MGF formula; convolution in probability space transforms into point-wise multiplication in MGF space.</p>"""
        r"""<p><b>Reason:</b> By definition, $M_{X+Y}(t) = E[e^{t(X+Y)}] = E[e^{tX + tY}] = E[e^{tX} e^{tY}]$. Because $X$ and $Y$ are independent, any functions of them $g(X) = e^{tX}$ and $h(Y) = e^{tY}$ are also independent. By the product expectation property for independent variables, $E[e^{tX} e^{tY}] = E[e^{tX}] E[e^{tY}] = M_X(t) M_Y(t)$. This converts complicated convolution integrals into elementary algebraic multiplication.</p>"""
    ),
    'c.prob.7.7.3': (
        r"""<p><b>Statement:</b> Let $S_N = \sum_{i=1}^N X_i$ be a <b>random sum</b>, where $N$ is a non-negative integer-valued random variable independent of the sequence of iid terms $X_1, X_2, \ldots$ with common MGF $M_X(t)$. The MGF of $S_N$ is given by the composition:"""
        r"""$$M_{S_N}(t) = E\left[(M_X(t))^N\right] = G_N(M_X(t))$$"""
        r"""where $G_N(s) = E[s^N]$ is the probability generating function of $N$. By Wald's Identities, $E[S_N] = E[N] E[X]$ and $\operatorname{Var}(S_N) = E[N] \operatorname{Var}(X) + (E[X])^2 \operatorname{Var}(N)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $S_N$ is a random sum; $G_N(s) = E[s^N]$ is the PGF of $N$; $M_{S_N}(t)$ is the composite MGF; Wald's identity gives the mean and variance.</p>"""
        r"""<p><b>Reason:</b> Condition on $N$: $E[e^{t S_N} \mid N = n] = E[e^{t(X_1+\cdots+X_n)}] = (M_X(t))^n$ because the terms $X_i$ are iid and independent of $N$. Applying the Law of Total Expectation gives $M_{S_N}(t) = E[E[e^{t S_N} \mid N]] = E[(M_X(t))^N]$. Differentiating once yields $E[S_N] = E[N]E[X]$, and applying the Law of Total Variance gives $\operatorname{Var}(S_N) = E[\operatorname{Var}(S_N \mid N)] + \operatorname{Var}(E[S_N \mid N]) = E[N \operatorname{Var}(X)] + \operatorname{Var}(N E[X]) = E[N]\operatorname{Var}(X) + (E[X])^2\operatorname{Var}(N)$.</p>"""
    ),
    'c.prob.7.8.1': (
        r"""<p><b>Statement:</b> Random variables $X_1, \ldots, X_n$ are <b>jointly normal</b> (multivariate Gaussian) if and only if every linear combination $Y = \sum_{i=1}^n a_i X_i$ is a univariate normal random variable for all constants $a_1, \ldots, a_n \in \mathbb{R}$. The distribution of $(X_1, \ldots, X_n)$ is completely determined by the mean vector $\boldsymbol{\mu} = [E[X_i]]$ and covariance matrix $\boldsymbol{\Sigma} = [\operatorname{Cov}(X_i, X_j)]$. In particular, jointly normal variables are independent if and only if they are uncorrelated ($\operatorname{Cov}(X_i, X_j) = 0$).</p>"""
        r"""<p><b>Mathematical terms:</b> Joint normality; mean vector $\boldsymbol{\mu}$; covariance matrix $\boldsymbol{\Sigma}$; zero covariance implies independence for jointly normal variables.</p>"""
        r"""<p><b>Reason:</b> The joint characteristic function of $\mathbf{X}$ is $\phi_{\mathbf{X}}(\mathbf{t}) = E[\exp(i \mathbf{t}^T \mathbf{X})]$. Because any linear combination $\mathbf{t}^T \mathbf{X}$ is univariate normal with mean $\mathbf{t}^T \boldsymbol{\mu}$ and variance $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}$, the joint characteristic function is $\phi_{\mathbf{X}}(\mathbf{t}) = \exp(i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t})$. When $\operatorname{Cov}(X_i, X_j) = 0$ for $i \ne j$, $\boldsymbol{\Sigma}$ is diagonal, so $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = \sum t_i^2 \sigma_i^2$, which factors $\phi_{\mathbf{X}}(\mathbf{t}) = \prod \phi_{X_i}(t_i)$, proving mutual independence.</p>"""
    ),
    'c.prob.7.8.2': (
        r"""<p><b>Statement:</b> Let $X_1, \ldots, X_n \overset{\text{iid}}{\sim} \mathcal{N}(\mu, \sigma^2)$ be a random sample from a normal distribution. Define the <b>sample mean</b> $\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i$ and <b>sample variance</b> $S^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X})^2$. Then:"""
        r"""<br>(1) $\bar{X} \sim \mathcal{N}\left(\mu, \, \frac{\sigma^2}{n}\right)$."""
        r"""<br>(2) $\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$ (Chi-square distribution with $n-1$ degrees of freedom)."""
        r"""<br>(3) $\bar{X}$ and $S^2$ are statistically <b>independent</b>.</p>"""
        r"""<p><b>Mathematical terms:</b> Sample mean $\bar{X}$; sample variance $S^2$; $\chi^2(n-1)$ is the sum of $n-1$ squared independent standard normals; independence of $\bar{X}$ and $S^2$ is Basu's theorem / Helmert's transformation.</p>"""
        r"""<p><b>Reason:</b> Apply an orthogonal (Helmert) matrix transformation $\mathbf{Y} = \mathbf{O}\mathbf{Z}$, where $Z_i = \frac{X_i-\mu}{\sigma} \overset{\text{iid}}{\sim} \mathcal{N}(0, 1)$ and the first row of $\mathbf{O}$ is $(\frac{1}{\sqrt{n}}, \ldots, \frac{1}{\sqrt{n}})$. Because $\mathbf{O}$ is orthogonal ($\mathbf{O}^T \mathbf{O} = \mathbf{I}$), $\mathbf{Y} \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$, so $Y_1, \ldots, Y_n$ are independent standard normals. Notice $Y_1 = \frac{\sqrt{n}(\bar{X}-\mu)}{\sigma}$, so $\bar{X} = \mu + \frac{\sigma}{\sqrt{n}} Y_1$. Furthermore, $\sum_{i=1}^n Z_i^2 = \mathbf{Z}^T \mathbf{Z} = \mathbf{Y}^T \mathbf{Y} = Y_1^2 + \sum_{j=2}^n Y_j^2$. Since $\sum Z_i^2 = Y_1^2 + \frac{(n-1)S^2}{\sigma^2}$, this forces $\frac{(n-1)S^2}{\sigma^2} = \sum_{j=2}^n Y_j^2$. Because $S^2$ depends only on $Y_2, \ldots, Y_n$, while $\bar{X}$ depends only on $Y_1$, they are strictly independent.</p>"""
    ),
    'c.prob.7.9.1': (
        r"""<p><b>Statement:</b> The general expectation of a random variable $X$ with cumulative distribution function $F(x)$ is defined via the <b>Riemann-Stieltjes integral</b>:"""
        r"""$$E[X] = \int_{-\infty}^\infty x \, dF(x)$$"""
        r"""which unifies discrete distributions ($dF(x) = p(x)$ at atoms, giving $\sum x p(x)$), continuous distributions ($dF(x) = f(x)dx$, giving $\int x f(x)dx$), and mixed distributions ($E[X] = \sum x_i p_i + \int x f(x)dx$).</p>"""
        r"""<p><b>Mathematical terms:</b> Riemann-Stieltjes integral $\int x dF(x)$; $dF(x)$ is the Stieltjes probability measure; mixed distribution combines discrete atoms and continuous densities.</p>"""
        r"""<p><b>Reason:</b> A cumulative distribution function $F$ defines a unique Borel probability measure $\mu_F$ on $\mathbb{R}$ such that $\mu_F((a, b]) = F(b) - F(a)$. By the Lebesgue decomposition theorem, any distribution decomposes into $F = \alpha F_{\text{discrete}} + (1-\alpha) F_{\text{continuous}}$. Integrating against $dF$ naturally integrates against the discrete point masses at jump discontinuities while integrating against the continuous density derivative $f(x) = F^\prime(x)$ elsewhere, providing a single, universal foundation for expectation across all random variables.</p>"""
    ),
}
