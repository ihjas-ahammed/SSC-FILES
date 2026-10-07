# Module 6: Jointly Distributed Random Variables (20 concepts)
# Explains formal mathematical statement, mathematical terms, and reason behind each statement.

STATEMENTS_CH06 = {
    'c.prob.6.1.1': (
        r"""<p><b>Statement:</b> The <b>joint cumulative distribution function</b> of random variables $X$ and $Y$ is defined for all $(x, y) \in \mathbb{R}^2$ by:"""
        r"""$$F_{X,Y}(x, y) = P(X \le x, Y \le y)$$</p>"""
        r"""<p>For any semi-closed rectangle $(a_1, a_2] \times (b_1, b_2]$ with $a_1 < a_2$ and $b_1 < b_2$, the rectangle probability is given by the 2D difference formula:"""
        r"""$$P(a_1 < X \le a_2, \, b_1 < Y \le b_2) = F(a_2, b_2) - F(a_1, b_2) - F(a_2, b_1) + F(a_1, b_1)$$</p>"""
        r"""<p><b>Mathematical terms:</b> $F_{X,Y}(x, y)$ is the joint CDF; $(a_1, a_2] \times (b_1, b_2]$ is the Cartesian product rectangle in $\mathbb{R}^2$; marginal CDFs are obtained by taking limits: $F_X(x) = \lim_{y \to \infty} F(x, y)$ and $F_Y(y) = \lim_{x \to \infty} F(x, y)$.</p>"""
        r"""<p><b>Reason:</b> The infinite quadrant $(-\infty, a_2] \times (-\infty, b_2]$ has probability $F(a_2, b_2)$. Subtracting the left strip $F(a_1, b_2) = P(X \le a_1, Y \le b_2)$ and bottom strip $F(a_2, b_1) = P(X \le a_2, Y \le b_1)$ isolates the target rectangle. However, the lower-left corner $(-\infty, a_1] \times (-\infty, b_1]$ has been subtracted twice; by the principle of inclusion-exclusion, adding back $F(a_1, b_1)$ ensures the net weight of every point in the lower-left quadrant is zero and the target rectangle is counted with net weight 1.</p>"""
    ),
    'c.prob.6.1.2': (
        r"""<p><b>Statement:</b> For discrete random variables $X$ and $Y$, their <b>joint probability mass function</b> (joint PMF) is $p_{X,Y}(x, y) = P(X = x, Y = y)$, satisfying $p_{X,Y}(x, y) \ge 0$ and $\sum_x \sum_y p_{X,Y}(x, y) = 1$. The <b>marginal PMFs</b> of $X$ and $Y$ are obtained by summing across the other variable:"""
        r"""$$p_X(x) = \sum_y p_{X,Y}(x, y), \qquad p_Y(y) = \sum_x p_{X,Y}(x, y)$$</p>"""
        r"""<p><b>Mathematical terms:</b> $p_{X,Y}(x, y)$ is the joint PMF; $p_X(x)$ is the marginal PMF of $X$; $\sum_y$ represents marginalization (collapsing the columns of the joint probability table).</p>"""
        r"""<p><b>Reason:</b> The event $\{X = x\}$ can be decomposed using the Law of Total Probability into the countable disjoint union across all possible values of $Y$: $\{X = x\} = \bigcup_y \{X = x, Y = y\}$. By countable additivity, the probability of the union is the sum of the disjoint probabilities: $P(X = x) = \sum_y P(X = x, Y = y) = \sum_y p_{X,Y}(x, y)$. Symmetrically, summing over all rows $x$ yields the marginal distribution $p_Y(y)$.</p>"""
    ),
    'c.prob.6.1.3': (
        r"""<p><b>Statement:</b> Continuous random variables $X$ and $Y$ have <b>joint probability density function</b> $f_{X,Y}(x, y)$ if for all Borel regions $A \subseteq \mathbb{R}^2$:"""
        r"""$$P((X, Y) \in A) = \iint_A f_{X,Y}(x, y) \, dx \, dy$$"""
        r"""The joint PDF satisfies $f_{X,Y}(x, y) \ge 0$ and $\int_{-\infty}^\infty \int_{-\infty}^\infty f_{X,Y}(x, y) \, dx \, dy = 1$. The <b>marginal densities</b> are obtained by integrating out the unwanted coordinate:"""
        r"""$$f_X(x) = \int_{-\infty}^\infty f_{X,Y}(x, y) \, dy, \qquad f_Y(y) = \int_{-\infty}^\infty f_{X,Y}(x, y) \, dx$$</p>"""
        r"""<p><b>Mathematical terms:</b> $f_{X,Y}(x, y) = \frac{\partial^2}{\partial x \partial y} F_{X,Y}(x, y)$ is the joint density; $f_X(x)$ is the marginal density of $X$; the 2D integral represents volume under the surface $z = f(x, y)$.</p>"""
        r"""<p><b>Reason:</b> By definition of the marginal CDF, $F_X(x) = P(X \le x, Y < \infty) = \int_{-\infty}^x \left(\int_{-\infty}^\infty f_{X,Y}(u, y) dy\right) du$. Differentiating $F_X(x)$ with respect to $x$ via the Fundamental Theorem of Calculus yields the marginal density $f_X(x) = F_X^\prime(x) = \int_{-\infty}^\infty f_{X,Y}(x, y) dy$. Integrating over the entire $y$-axis accumulates the total probability volume corresponding to the vertical slice at $x$.</p>"""
    ),
    'c.prob.6.2.1': (
        r"""<p><b>Statement:</b> Random variables $X$ and $Y$ are statistically <b>independent</b> if and only if their joint cumulative distribution function factors into the product of their marginal CDFs for all $(x, y) \in \mathbb{R}^2$:"""
        r"""$$F_{X,Y}(x, y) = F_X(x) F_Y(y)$$</p>"""
        r"""<p>For discrete variables, this is equivalent to $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all $x, y$. For continuous variables, it is equivalent to $f_{X,Y}(x, y) = f_X(x) f_Y(y)$ almost everywhere, which requires the support of $(X, Y)$ to be a Cartesian product product space $\mathcal{X} \times \mathcal{Y}$.</p>"""
        r"""<p><b>Mathematical terms:</b> Factorization criterion; independence means $P(X \in A, Y \in B) = P(X \in A) P(Y \in B)$ for all Borel sets $A, B$; product support means the range of $Y$ cannot depend on the realized value of $X$.</p>"""
        r"""<p><b>Reason:</b> Random variables are independent if every event concerning $X$ (the pre-image $\{X \in A\}$) is independent of every event concerning $Y$ ($\{Y \in B\}$). Setting $A = (-\infty, x]$ and $B = (-\infty, y]$ gives $P(X \le x, Y \le y) = P(X \le x)P(Y \le y) = F_X(x)F_Y(y)$. Differentiating both sides with respect to $x$ and $y$ gives $f_{X,Y}(x, y) = \frac{\partial^2}{\partial x \partial y} [F_X(x)F_Y(y)] = F_X^\prime(x)F_Y^\prime(y) = f_X(x)f_Y(y)$. If the support boundaries of $y$ depend on $x$ (e.g. $0 < y < x < 1$), the joint density cannot factor into product functions, immediately ruling out independence.</p>"""
    ),
    'c.prob.6.2.2': (
        r"""<p><b>Statement:</b> If random variables $X$ and $Y$ are independent, then for any measurable functions $g: \mathbb{R} \to \mathbb{R}$ and $h: \mathbb{R} \to \mathbb{R}$, the transformed random variables $g(X)$ and $h(Y)$ are also independent. In particular, their joint expectation factors:"""
        r"""$$E[g(X) h(Y)] = E[g(X)] \cdot E[h(Y)]$$"""
        r"""provided the expectations exist. Consequently, $\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0$ (independent variables are always uncorrelated).</p>"""
        r"""<p><b>Mathematical terms:</b> $g(X), h(Y)$ are single-variable transformations; product expectation formula $E[g(X)h(Y)] = E[g(X)]E[h(Y)]$; uncorrelated means zero covariance ($\operatorname{Cov} = 0$).</p>"""
        r"""<p><b>Reason:</b> For any Borel sets $A$ and $B$, the event $\{g(X) \in A\}$ is $\{X \in g^{-1}(A)\}$, and $\{h(Y) \in B\}$ is $\{Y \in h^{-1}(B)\}$. Because $X$ and $Y$ are independent, $P(X \in g^{-1}(A), Y \in h^{-1}(B)) = P(X \in g^{-1}(A)) P(Y \in h^{-1}(B)) = P(g(X) \in A) P(h(Y) \in B)$, establishing independence of $g(X)$ and $h(Y)$. Under continuous LOTUS, $\iint g(x)h(y)f_X(x)f_Y(y)dxdy = \left(\int g(x)f_X(x)dx\right)\left(\int h(y)f_Y(y)dy\right) = E[g(X)]E[h(Y)]$.</p>"""
    ),
    'c.prob.6.3.1': (
        r"""<p><b>Statement:</b> Let $X$ and $Y$ be independent continuous random variables with densities $f_X$ and $f_Y$. The probability density function of their sum $Z = X + Y$ is given by the <b>convolution</b> integral:"""
        r"""$$f_Z(z) = (f_X * f_Y)(z) = \int_{-\infty}^\infty f_X(x) f_Y(z - x) \, dx = \int_{-\infty}^\infty f_X(z - y) f_Y(y) \, dy$$"""
        r"""For independent non-negative integer-valued discrete variables, $P(Z = n) = \sum_{k=0}^n p_X(k) p_Y(n - k)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $(f_X * f_Y)(z)$ is the convolution operator; $z - x$ represents the required value of $Y$ to attain the sum $Z = z$ when $X = x$.</p>"""
        r"""<p><b>Reason:</b> Find the CDF of $Z$: $F_Z(z) = P(X + Y \le z) = \int_{-\infty}^\infty \left(\int_{-\infty}^{z-x} f_Y(y) dy\right) f_X(x) dx = \int_{-\infty}^\infty F_Y(z - x) f_X(x) dx$. Differentiating with respect to $z$ under the integral sign using Leibniz's rule yields $f_Z(z) = F_Z^\prime(z) = \int_{-\infty}^\infty \frac{d}{dz}F_Y(z - x) f_X(x) dx = \int_{-\infty}^\infty f_Y(z - x) f_X(x) dx$. By substitution $u = z - x$, this is symmetric in $f_X$ and $f_Y$.</p>"""
    ),
    'c.prob.6.3.2': (
        r"""<p><b>Statement:</b> Let $X, Y \overset{\text{iid}}{\sim} \operatorname{Uniform}(0, 1)$ be independent standard uniform random variables. The distribution of their sum $Z = X + Y$ has a symmetric <b>triangular density</b> on $(0, 2)$:"""
        r"""$$f_Z(z) = \begin{cases} z, & 0 \le z \le 1 \\ 2 - z, & 1 < z \le 2 \\ 0, & \text{otherwise} \end{cases}$$"""
        r"""with mean $E[Z] = 1$ and variance $\operatorname{Var}(Z) = \operatorname{Var}(X) + \operatorname{Var}(Y) = \frac{1}{12} + \frac{1}{12} = \frac{1}{6}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $Z = X + Y$; triangular density; support $[0, 2]$; mode at $z = 1$ with peak height $f_Z(1) = 1$.</p>"""
        r"""<p><b>Reason:</b> Convolve the indicator densities $f_X(x) = \mathbf{1}_{(0, 1)}(x)$ and $f_Y(y) = \mathbf{1}_{(0, 1)}(y)$: $f_Z(z) = \int_0^1 \mathbf{1}_{(0, 1)}(z - x) dx$. The integrand is non-zero when $0 < x < 1$ and $0 < z - x < 1 \iff z - 1 < x < z$. For $0 \le z \le 1$, the integration limits are from $0$ to $z$, giving $\int_0^z 1 dx = z$. For $1 < z \le 2$, the limits are from $z - 1$ to $1$, giving $\int_{z-1}^1 1 dx = 1 - (z - 1) = 2 - z$. Geometrically, $f_Z(z)$ is the diagonal slice length across the unit square $[0, 1]^2$.</p>"""
    ),
    'c.prob.6.3.3': (
        r"""<p><b>Statement:</b> If $X \sim \operatorname{Gamma}(s, \lambda)$ and $Y \sim \operatorname{Gamma}(t, \lambda)$ are independent Gamma random variables with the <i>same rate parameter</i> $\lambda > 0$, then their sum is also Gamma distributed:"""
        r"""$$Z = X + Y \sim \operatorname{Gamma}(s + t, \, \lambda)$$</p>"""
        r"""<p>In particular, the sum of $n$ independent $\operatorname{Exponential}(\lambda)$ variables is $\operatorname{Gamma}(n, \lambda)$ (Erlang distribution).</p>"""
        r"""<p><b>Mathematical terms:</b> $s, t > 0$ are shape parameters; $\lambda > 0$ is the common rate parameter; closure under convolution holds when rate parameters are identical.</p>"""
        r"""<p><b>Reason:</b> Convolving the two densities for $z > 0$ gives $f_Z(z) = \int_0^z \frac{\lambda^s}{\Gamma(s)} x^{s-1} e^{-\lambda x} \frac{\lambda^t}{\Gamma(t)} (z-x)^{t-1} e^{-\lambda(z-x)} dx = \frac{\lambda^{s+t} e^{-\lambda z}}{\Gamma(s)\Gamma(t)} \int_0^z x^{s-1}(z-x)^{t-1} dx$. Substitute $x = zu$ with $dx = z du$: the integral becomes $z^{s+t-1} \int_0^1 u^{s-1}(1-u)^{t-1} du = z^{s+t-1} B(s, t) = z^{s+t-1} \frac{\Gamma(s)\Gamma(t)}{\Gamma(s+t)}$. The factorials cancel to leave $\frac{\lambda^{s+t}}{\Gamma(s+t)} z^{s+t-1} e^{-\lambda z}$, which is the $\operatorname{Gamma}(s+t, \lambda)$ density.</p>"""
    ),
    'c.prob.6.3.4': (
        r"""<p><b>Statement:</b> Stability and reproductive convolution laws for independent classical families:"""
        r"""<br>(1) <b>Normal:</b> If $X_i \sim \mathcal{N}(\mu_i, \sigma_i^2)$ are independent, then $\sum_{i=1}^n a_i X_i \sim \mathcal{N}\left(\sum a_i\mu_i, \, \sum a_i^2\sigma_i^2\right)$."""
        r"""<br>(2) <b>Poisson:</b> If $X \sim \operatorname{Poisson}(\lambda_1)$ and $Y \sim \operatorname{Poisson}(\lambda_2)$ are independent, then $X + Y \sim \operatorname{Poisson}(\lambda_1 + \lambda_2)$."""
        r"""<br>(3) <b>Binomial:</b> If $X \sim \operatorname{Binomial}(n_1, p)$ and $Y \sim \operatorname{Binomial}(n_2, p)$ are independent with the same $p$, then $X + Y \sim \operatorname{Binomial}(n_1 + n_2, p)$.</p>"""
        r"""<p><b>Mathematical terms:</b> Convolution closure; independent sums remain in the same parametric family; parameters add according to physical mechanisms.</p>"""
        r"""<p><b>Reason:</b> (1) By MGF properties, $M_{\sum a_i X_i}(t) = \prod M_{X_i}(a_i t) = \prod \exp(a_i\mu_i t + a_i^2\sigma_i^2 t^2/2) = \exp((\sum a_i\mu_i)t + (\sum a_i^2\sigma_i^2)t^2/2)$, uniquely identifying the normal law. (2) For Poisson, convolving gives $P(X+Y=k) = \sum_{j=0}^k e^{-\lambda_1}\frac{\lambda_1^j}{j!} e^{-\lambda_2}\frac{\lambda_2^{k-j}}{(k-j)!} = \frac{e^{-(\lambda_1+\lambda_2)}}{k!} \sum_{j=0}^k \binom{k}{j}\lambda_1^j \lambda_2^{k-j} = e^{-(\lambda_1+\lambda_2)}\frac{(\lambda_1+\lambda_2)^k}{k!}$ by the binomial theorem. (3) Binomial represents total successes in $n_1 + n_2$ independent Bernoulli($p$) trials.</p>"""
    ),
    'c.prob.6.4.1': (
        r"""<p><b>Statement:</b> For discrete random variables $X$ and $Y$, the <b>conditional probability mass function</b> of $X$ given $Y = y$ is defined for any $y$ with $p_Y(y) > 0$ by:"""
        r"""$$p_{X \mid Y}(x \mid y) = P(X = x \mid Y = y) = \frac{p_{X,Y}(x, y)}{p_Y(y)} = \frac{p_{X,Y}(x, y)}{\sum_t p_{X,Y}(t, y)}$$"""
        r"""For each fixed $y$, $p_{X \mid Y}(\cdot \mid y)$ is a valid PMF on the support of $X$, satisfying $\sum_x p_{X \mid Y}(x \mid y) = 1$. The conditional expectation is $E[X \mid Y = y] = \sum_x x \, p_{X \mid Y}(x \mid y)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $p_{X \mid Y}(x \mid y)$ is the conditional PMF; $p_{X,Y}(x, y)$ is the joint PMF; $p_Y(y)$ is the marginal PMF of the conditioning variable; $E[X \mid Y = y]$ is the conditional mean.</p>"""
        r"""<p><b>Reason:</b> Observing that $Y = y$ eliminates all rows in the joint probability table except the slice corresponding to $Y = y$. Within this slice, the relative likelihoods of the various $X$ values are proportional to the joint masses $p_{X,Y}(x, y)$. Dividing each joint mass by the slice total $p_Y(y) = \sum_x p_{X,Y}(x, y)$ normalizes the surviving row probabilities to sum to 1, creating a valid Kolmogorov probability distribution.</p>"""
    ),
    'c.prob.6.4.2': (
        r"""<p><b>Statement:</b> If $X \sim \operatorname{Poisson}(\lambda_1)$ and $Y \sim \operatorname{Poisson}(\lambda_2)$ are independent, then the conditional distribution of $X$ given their sum $X + Y = n$ is <b>Binomial</b>:"""
        r"""$$X \mid (X + Y = n) \sim \operatorname{Binomial}\left(n, \, \frac{\lambda_1}{\lambda_1 + \lambda_2}\right)$$</p>"""
        r"""<p>with conditional PMF $P(X = k \mid X + Y = n) = \binom{n}{k} \left(\frac{\lambda_1}{\lambda_1+\lambda_2}\right)^k \left(\frac{\lambda_2}{\lambda_1+\lambda_2}\right)^{n-k}$ for $k \in \{0, 1, \ldots, n\}$.</p>"""
        r"""<p><b>Mathematical terms:</b> Poisson splitting / thinning; $n$ is the total observed count; $p = \frac{\lambda_1}{\lambda_1+\lambda_2}$ is the success probability (relative rate of type 1 events).</p>"""
        r"""<p><b>Reason:</b> By definition of conditional probability: $P(X = k \mid X+Y = n) = \frac{P(X = k, X+Y = n)}{P(X+Y = n)} = \frac{P(X = k, Y = n-k)}{P(X+Y = n)}$. By independence, the numerator is $e^{-\lambda_1}\frac{\lambda_1^k}{k!} e^{-\lambda_2}\frac{\lambda_2^{n-k}}{(n-k)!}$. The denominator is the Poisson sum law $e^{-(\lambda_1+\lambda_2)}\frac{(\lambda_1+\lambda_2)^n}{n!}$. The exponential factors $e^{-(\lambda_1+\lambda_2)}$ cancel completely, and $\frac{n!}{k!(n-k)!} \frac{\lambda_1^k \lambda_2^{n-k}}{(\lambda_1+\lambda_2)^n} = \binom{n}{k} (\frac{\lambda_1}{\lambda_1+\lambda_2})^k (\frac{\lambda_2}{\lambda_1+\lambda_2})^{n-k}$, exactly recovering the binomial PMF.</p>"""
    ),
    'c.prob.6.5.1': (
        r"""<p><b>Statement:</b> For continuous random variables $X$ and $Y$ with joint density $f_{X,Y}(x, y)$, the <b>conditional probability density function</b> of $X$ given $Y = y$ is defined for all $y$ where $f_Y(y) > 0$ by:"""
        r"""$$f_{X \mid Y}(x \mid y) = \frac{f_{X,Y}(x, y)}{f_Y(y)} = \frac{f_{X,Y}(x, y)}{\int_{-\infty}^\infty f_{X,Y}(u, y) \, du}$$"""
        r"""For each fixed $y$, $f_{X \mid Y}(\cdot \mid y)$ is a valid 1D probability density on $\mathbb{R}$, satisfying $\int_{-\infty}^\infty f_{X \mid Y}(x \mid y) \, dx = 1$. The conditional expectation is $E[X \mid Y = y] = \int_{-\infty}^\infty x f_{X \mid Y}(x \mid y) \, dx$.</p>"""
        r"""<p><b>Mathematical terms:</b> $f_{X \mid Y}(x \mid y)$ is the conditional density; $f_Y(y)$ is the marginal density of $Y$; $\int_{-\infty}^\infty f_{X \mid Y}(x \mid y)dx = 1$ is the 1D normalization condition.</p>"""
        r"""<p><b>Reason:</b> Although $P(Y = y) = 0$ for continuous variables, define conditioning as the limit of conditioning on a narrow strip: $f_{X \mid Y}(x \mid y)dx = \lim_{\Delta y \downarrow 0} P(x \le X \le x+dx \mid y \le Y \le y+\Delta y) = \lim_{\Delta y \to 0} \frac{f_{X,Y}(x, y)dx\Delta y}{f_Y(y)\Delta y} = \frac{f_{X,Y}(x, y)}{f_Y(y)}dx$. Dividing the 2D cross-section $f_{X,Y}(x, y)$ by the slice area $f_Y(y) = \int f_{X,Y}(u, y)du$ normalizes the 1D curve so its area is exactly 1.</p>"""
    ),
    'c.prob.6.5.2': (
        r"""<p><b>Statement:</b> Let $(X, Y)$ have a <b>bivariate normal distribution</b> with means $\mu_X, \mu_Y$, variances $\sigma_X^2, \sigma_Y^2 > 0$, and correlation coefficient $\rho \in (-1, 1)$. Then the conditional distribution of $X$ given $Y = y$ is strictly normal:"""
        r"""$$X \mid (Y = y) \sim \mathcal{N}\left(\mu_X + \rho \frac{\sigma_X}{\sigma_Y}(y - \mu_Y), \; \sigma_X^2(1 - \rho^2)\right)$$</p>"""
        r"""<p>The conditional mean is linear in $y$, and the conditional variance $\sigma_X^2(1 - \rho^2)$ is constant, independent of the observed value $y$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\rho = \frac{\operatorname{Cov}(X, Y)}{\sigma_X \sigma_Y}$ is the Pearson correlation coefficient; $\mu_X + \rho \frac{\sigma_X}{\sigma_Y}(y - \mu_Y)$ is the conditional mean (linear regression function); $\sigma_X^2(1-\rho^2)$ is the conditional residual variance.</p>"""
        r"""<p><b>Reason:</b> Expand the bivariate normal density exponent $-\frac{1}{2(1-\rho^2)}[(\frac{x-\mu_X}{\sigma_X})^2 - 2\rho(\frac{x-\mu_X}{\sigma_X})(\frac{y-\mu_Y}{\sigma_Y}) + (\frac{y-\mu_Y}{\sigma_Y})^2]$. Completing the square in $x$ factors the quadratic into $-\frac{(x - [\mu_X + \rho \frac{\sigma_X}{\sigma_Y}(y - \mu_Y)])^2}{2\sigma_X^2(1-\rho^2)} - \frac{(y - \mu_Y)^2}{2\sigma_Y^2}$. In the quotient $f(x, y)/f_Y(y)$, the marginal $y$ factor cancels out completely, leaving an exact 1D Gaussian density in $x$ with center $\mu_X + \rho\frac{\sigma_X}{\sigma_Y}(y-\mu_Y)$ and variance $\sigma_X^2(1-\rho^2)$.</p>"""
    ),
    'c.prob.6.5.3': (
        r"""<p><b>Statement:</b> Conditioning on an event $A$ with $P(A) > 0$ defines the conditional density $f_{X \mid A}(x) = \frac{f_X(x) P(A \mid X = x)}{P(A)}$. More generally, in hierarchical models with a latent mixing parameter $\Theta \sim f_\Theta(\theta)$ where $X \mid \Theta = \theta \sim f(x \mid \theta)$, the marginal density of $X$ is the continuous mixture:"""
        r"""$$f_X(x) = \int f(x \mid \theta) f_\Theta(\theta) \, d\theta$$"""
        r"""and the posterior density of the latent variable given observed $X = x$ follows Bayes' Rule: $f_{\Theta \mid X}(\theta \mid x) = \frac{f(x \mid \theta) f_\Theta(\theta)}{f_X(x)}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $f_\Theta(\theta)$ is the prior density; $f(x \mid \theta)$ is the likelihood; $f_X(x)$ is the marginal (evidence) density; $f_{\Theta \mid X}(\theta \mid x)$ is the posterior density.</p>"""
        r"""<p><b>Reason:</b> By definition of joint probability, the joint density of the observation and latent parameter is $f_{X, \Theta}(x, \theta) = f(x \mid \theta) f_\Theta(\theta)$. Marginalizing out the latent variable $\theta$ by integrating across its support gives $f_X(x) = \int f_{X,\Theta}(x, \theta) d\theta$, which is the continuous version of the Law of Total Probability. Dividing the joint density by the marginal density yields the conditional posterior density by the definition of conditional distributions.</p>"""
    ),
    'c.prob.6.6.1': (
        r"""<p><b>Statement:</b> Let $X_1, \ldots, X_n$ be independent and identically distributed (iid) continuous random variables with common PDF $f(x)$ and CDF $F(x)$. Arrange them in ascending order: $X_{(1)} < X_{(2)} < \cdots < X_{(n)}$. The <b>$k$-th order statistic</b> $X_{(k)}$ has marginal PDF:"""
        r"""$$f_{X_{(k)}}(x) = \frac{n!}{(k-1)! \, (n-k)!} [F(x)]^{k-1} [1 - F(x)]^{n-k} f(x)$$"""
        r"""In particular, the sample minimum $X_{(1)}$ has density $n[1 - F(x)]^{n-1}f(x)$, and the sample maximum $X_{(n)}$ has density $n[F(x)]^{n-1}f(x)$ with CDF $F_{X_{(n)}}(x) = [F(x)]^n$.</p>"""
        r"""<p><b>Mathematical terms:</b> $X_{(k)}$ is the $k$-th smallest value; $X_{(1)} = \min(X_i)$; $X_{(n)} = \max(X_i)$; $F(x)^{k-1}$ is the probability that $k-1$ observations fall below $x$; $[1 - F(x)]^{n-k}$ is the probability that $n-k$ observations exceed $x$.</p>"""
        r"""<p><b>Reason:</b> For $X_{(k)}$ to fall in the infinitesimal interval $(x, x + dx)$, three independent events must occur simultaneously: (1) exactly $k-1$ observations must fall below $x$ (each with probability $F(x)$); (2) exactly 1 observation must fall in $(x, x+dx)$ (with probability $f(x)dx$); (3) the remaining $n-k$ observations must exceed $x+dx$ (each with probability $1 - F(x)$). The multinomial coefficient $\frac{n!}{(k-1)! 1! (n-k)!}$ counts the distinct ways to assign the $n$ sample items to these three categories. For the maximum, $P(X_{(n)} \le x) = P(\text{all } X_i \le x) = [F(x)]^n$ by independence; differentiating gives $n[F(x)]^{n-1}f(x)$.</p>"""
    ),
    'c.prob.6.6.2': (
        r"""<p><b>Statement:</b> For an iid continuous sample $X_1, \ldots, X_n$ with density $f$ and CDF $F$, the joint PDF of the minimum $U = X_{(1)}$ and maximum $V = X_{(n)}$ is:"""
        r"""$$f_{X_{(1)}, X_{(n)}}(u, v) = n(n-1) [F(v) - F(u)]^{n-2} f(u) f(v), \quad u < v$$"""
        r"""The <b>sample range</b> $R = X_{(n)} - X_{(1)}$ has PDF $f_R(r) = n(n-1) \int_{-\infty}^\infty [F(u+r) - F(u)]^{n-2} f(u) f(u+r) \, du$ for $r > 0$.</p>"""
        r"""<p><b>Mathematical terms:</b> $R = X_{(n)} - X_{(1)} \ge 0$ is the sample range; $F(v) - F(u)$ is the probability an observation lands strictly between $u$ and $v$; $n(n-1)$ counts the ordered assignment of minimum and maximum.</p>"""
        r"""<p><b>Reason:</b> For $X_{(1)} \in (u, u+du)$ and $X_{(n)} \in (v, v+dv)$ with $u < v$, there are $n$ choices for which item is the minimum, $n-1$ choices for the maximum, and the remaining $n-2$ items must all fall inside the interval $(u, v)$ (probability $F(v) - F(u)$ each). Multiplying these probabilities gives $n(n-1)[F(v)-F(u)]^{n-2} f(u)du f(v)dv$. Setting $R = V - U$ and $U = U$, the transformation has Jacobian 1; integrating out $u$ over $\mathbb{R}$ gives the marginal distribution of range $R$.</p>"""
    ),
    'c.prob.6.7.1': (
        r"""<p><b>Statement:</b> Let $(X_1, \ldots, X_n)$ have joint density $f_{\mathbf{X}}(\mathbf{x})$ on $\mathbb{R}^n$, and let $\mathbf{Y} = \mathbf{g}(\mathbf{X})$ be an invertible, continuously differentiable mapping from open set $S \subset \mathbb{R}^n$ onto $T \subset \mathbb{R}^n$ with inverse $\mathbf{x} = \mathbf{g}^{-1}(\mathbf{y}) = \mathbf{h}(\mathbf{y})$. The joint density of $\mathbf{Y}$ is:"""
        r"""$$f_{\mathbf{Y}}(\mathbf{y}) = f_{\mathbf{X}}(\mathbf{h}(\mathbf{y})) \cdot |J(\mathbf{y})|, \quad \mathbf{y} \in T$$"""
        r"""where $J(\mathbf{y}) = \det\left(\left[\frac{\partial x_i}{\partial y_j}\right]_{i,j=1}^n\right)$ is the <b>Jacobian determinant</b> of the inverse transformation.</p>"""
        r"""<p><b>Mathematical terms:</b> $\mathbf{g}: \mathbb{R}^n \to \mathbb{R}^n$ is the multivariate transformation; $\mathbf{h} = \mathbf{g}^{-1}$ is the inverse map; $J(\mathbf{y}) = \det(\mathbf{J}_{\mathbf{h}})$ is the Jacobian determinant; $|J|$ is the local volume dilation factor.</p>"""
        r"""<p><b>Reason:</b> Under the multi-dimensional change of variables formula for multiple integrals, probability conservation requires $P(\mathbf{Y} \in B) = P(\mathbf{X} \in \mathbf{h}(B))$. Writing this in terms of densities gives $\int_B f_{\mathbf{Y}}(\mathbf{y}) d\mathbf{y} = \int_{\mathbf{h}(B)} f_{\mathbf{X}}(\mathbf{x}) d\mathbf{x}$. By multivariable calculus, the differential volume element transforms as $d\mathbf{x} = |J(\mathbf{y})| d\mathbf{y}$, where the absolute determinant $|J|$ represents the infinitesimal parallelotope volume scaling factor induced by the linear derivative map. Equating the integrands yields $f_{\mathbf{Y}}(\mathbf{y}) = f_{\mathbf{X}}(\mathbf{h}(\mathbf{y})) |J(\mathbf{y})|$.</p>"""
    ),
    'c.prob.6.7.2': (
        r"""<p><b>Statement:</b> If $X \sim \operatorname{Gamma}(s, \lambda)$ and $Y \sim \operatorname{Gamma}(t, \lambda)$ are independent Gamma variables, define their sum $U = X + Y$ and proportion $V = \frac{X}{X + Y}$. Then:"""
        r"""<br>(1) $U$ and $V$ are statistically <b>independent</b>."""
        r"""<br>(2) $U \sim \operatorname{Gamma}(s + t, \, \lambda)$ and $V \sim \operatorname{Beta}(s, t)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $U = X + Y$ is total lifetime; $V = \frac{X}{X+Y} \in (0, 1)$ is the relative share; independence of sum and ratio is a characterization of Gamma variables.</p>"""
        r"""<p><b>Reason:</b> Invert the transformation: $x = uv$ and $y = u(1-v)$, mapping $u > 0$ and $v \in (0, 1)$. The Jacobian matrix is $\begin{pmatrix} v & u \\ 1-v & -u \end{pmatrix}$, with determinant $J = -uv - u(1-v) = -u$, so $|J| = u$. The joint density is $f_{X,Y}(uv, u(1-v)) \cdot u = \frac{\lambda^{s+t}}{\Gamma(s)\Gamma(t)} (uv)^{s-1} (u(1-v))^{t-1} e^{-\lambda u} \cdot u = \left[\frac{\lambda^{s+t}}{\Gamma(s+t)} u^{s+t-1} e^{-\lambda u}\right] \times \left[\frac{\Gamma(s+t)}{\Gamma(s)\Gamma(t)} v^{s-1} (1-v)^{t-1}\right]$. Because this factors into a product $f_U(u) f_V(v)$ on $(0, \infty) \times (0, 1)$, $U$ and $V$ are independent Gamma and Beta variables.</p>"""
    ),
    'c.prob.6.8.1': (
        r"""<p><b>Statement:</b> Random variables $X_1, \ldots, X_n$ are <b>exchangeable</b> if their joint distribution is invariant under every permutation $\pi$ of their indices:"""
        r"""$$P(X_1 \le x_1, \ldots, X_n \le x_n) = P(X_{\pi(1)} \le x_1, \ldots, X_{\pi(n)} \le x_n)$$</p>"""
        r"""<p>for every permutation $\pi$ of $\{1, \ldots, n\}$. Any iid sequence is exchangeable, but exchangeable variables need not be independent.</p>"""
        r"""<p><b>Mathematical terms:</b> Permutation symmetry; $\pi$ is any element of the symmetric group $S_n$; exchangeability implies identical marginal distributions and identical pairwise covariances.</p>"""
        r"""<p><b>Reason:</b> Exchangeability captures physical situations where labels or chronological positions convey no information about the underlying probability law. For iid variables, the joint CDF is the symmetric product $\prod F(x_i)$, which is trivially permutation invariant. However, non-independent variables can also be exchangeable: for example, indicator draws of balls in Polya's urn or sampling without replacement from a finite deck are exchangeable because every ordered sequence containing $k$ red balls has identical probability, even though draws are dependent.</p>"""
    ),
    'c.prob.6.8.2': (
        r"""<p><b>Statement:</b> Sampling mechanisms that induce exchangeability:"""
        r"""<br>(1) <b>Sampling without replacement:</b> If $n$ cards are drawn sequentially without replacement from a deck of $N$, the indicator variables $I_1, \ldots, I_n$ of drawing an ace are exchangeable with $P(I_j = 1) = m/N$ and $\operatorname{Cov}(I_j, I_k) = -\frac{m(N-m)}{N^2(N-1)} < 0$."""
        r"""<br>(2) <b>De Finetti's Representation Theorem:</b> An infinite sequence of exchangeable binary variables is conditionally iid Bernoulli given a latent random parameter $\Theta \sim F_\Theta(\theta)$.</p>"""
        r"""<p><b>Mathematical terms:</b> Sampling without replacement; de Finetti mixture representation; negative covariance due to competition without replacement.</p>"""
        r"""<p><b>Reason:</b> In sampling without replacement, every ordered sequence of $k$ successes and $n-k$ failures has identical probability $\frac{m(m-1)\cdots(m-k+1) (N-m)\cdots(N-m-(n-k)+1)}{N(N-1)\cdots(N-n+1)}$, regardless of the positions in which successes occur. Because all permutations of the sequence carry identical probability, the sequence is exchangeable. De Finetti's theorem establishes that infinite exchangeability is mathematically equivalent to Bayesian mixtures of independent trials.</p>"""
    ),
}
