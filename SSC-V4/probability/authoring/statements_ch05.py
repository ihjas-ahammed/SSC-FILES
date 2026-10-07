# Module 5: Continuous Random Variables (16 concepts)
# Explains formal mathematical statement, mathematical terms, and reason behind each statement.

STATEMENTS_CH05 = {
    'c.prob.5.1.1': (
        r"""<p><b>Statement:</b> A random variable $X$ is <b>continuous</b> with probability density function (PDF) $f_X: \mathbb{R} \to [0, \infty)$ if for all Borel sets $B \subseteq \mathbb{R}$:"""
        r"""$$P(X \in B) = \int_B f_X(x) \, dx$$"""
        r"""The PDF satisfies non-negativity $f_X(x) \ge 0$ and total normalization $\int_{-\infty}^\infty f_X(x) \, dx = 1$. Its cumulative distribution function is $F_X(x) = P(X \le x) = \int_{-\infty}^x f_X(t) \, dt$, which implies $P(a < X \le b) = F_X(b) - F_X(a) = \int_a^b f_X(t) \, dt$ and $P(X = c) = 0$ for every single point $c \in \mathbb{R}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $f_X(x)$ is the probability density function (PDF); $F_X(x)$ is the continuous CDF; $\int_B f_X(x)dx$ is the Lebesgue / Riemann integral representing accumulated probability area; $P(X=c) = 0$ means individual points have measure zero.</p>"""
        r"""<p><b>Reason:</b> In continuous spaces, probability corresponds to area under the density curve, rather than discrete point masses. The integral of a single point $\int_c^c f(x)dx = 0$, so individual values have zero probability, but non-degenerate intervals $[a, b]$ carry positive probability equal to the area under $f$ over $[a, b]$. Total normalization $\int_{-\infty}^\infty f(x)dx = 1$ ensures $P(\mathbb{R}) = 1$ in accordance with Kolmogorov's second axiom.</p>"""
    ),
    'c.prob.5.1.2': (
        r"""<p><b>Statement:</b> By the Fundamental Theorem of Calculus, if $f(x)$ is continuous at $x$, the cumulative distribution function $F(x) = \int_{-\infty}^x f(t) \, dt$ is differentiable at $x$ with derivative:"""
        r"""$$F^\prime(x) = \frac{d}{dx} F(x) = f(x)$$"""
        r"""For an infinitesimal interval of width $h > 0$, the probability is locally linear in $h$: $P(x \le X \le x + h) = \int_x^{x+h} f(t) \, dt = f(x) h + o(h)$ as $h \downarrow 0$.</p>"""
        r"""<p><b>Mathematical terms:</b> $F^\prime(x)$ is the derivative of the CDF; $f(x)$ is the local density height; $o(h)$ represents higher-order terms satisfying $\lim_{h \to 0} \frac{o(h)}{h} = 0$.</p>"""
        r"""<p><b>Reason:</b> The CDF $F(x)$ accumulates probability area from $-\infty$ up to $x$. By the Fundamental Theorem of Calculus, the rate of change of accumulated area with respect to the right endpoint is precisely the height of the curve $f(x)$ at that point. Over a very narrow window $[x, x+h]$, $f(t) \approx f(x)$, approximating the region as a rectangle of height $f(x)$ and width $h$, giving area $f(x)h$.</p>"""
    ),
    'c.prob.5.2.1': (
        r"""<p><b>Statement:</b> The <b>Law of the Unconscious Statistician (LOTUS)</b> for a continuous random variable $X$ with PDF $f_X(x)$ states that for any measurable function $g: \mathbb{R} \to \mathbb{R}$, the expectation of $Y = g(X)$ is given by:"""
        r"""$$E[g(X)] = \int_{-\infty}^\infty g(x) f_X(x) \, dx$$"""
        r"""provided $\int_{-\infty}^\infty |g(x)| f_X(x) \, dx < \infty$, computing $E[g(X)]$ directly without first determining the density of $g(X)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $g(x)$ is the transformation function; $f_X(x)$ is the original density; absolute integrability $\int |g(x)|f_X(x)dx < \infty$ ensures the expectation is well-defined and finite.</p>"""
        r"""<p><b>Reason:</b> Approximating $X$ by a sequence of simple discrete variables $X_n$ partitions $\mathbb{R}$ into intervals of width $\Delta x$, where each slice $[x_k, x_k + \Delta x]$ has probability mass $f_X(x_k)\Delta x$. Applying discrete LOTUS yields $\sum g(x_k) f_X(x_k)\Delta x$. Taking the limit as the partition mesh $\Delta x \to 0$, the Riemann-Stieltjes sum converges by the dominated convergence theorem to the Lebesgue integral $\int_{-\infty}^\infty g(x) f_X(x) dx$.</p>"""
    ),
    'c.prob.5.2.2': (
        r"""<p><b>Statement:</b> For a continuous random variable $X$ with PDF $f(x)$, finite mean $\mu = E[X] = \int_{-\infty}^\infty x f(x) \, dx$, and finite variance $\operatorname{Var}(X) = E[(X-\mu)^2] = \int_{-\infty}^\infty (x-\mu)^2 f(x) \, dx = E[X^2] - \mu^2$, affine transformations satisfy:"""
        r"""$$\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X), \qquad \operatorname{SD}(aX + b) = |a| \operatorname{SD}(X)$$</p>"""
        r"""<p>for any real constants $a, b \in \mathbb{R}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\mu$ is the continuous mean; $\operatorname{Var}(X) \ge 0$ is the variance; $aX + b$ is the affine scaling and shift; $a^2$ reflects squared scaling of deviations.</p>"""
        r"""<p><b>Reason:</b> By linearity of integration, $E[aX + b] = \int (ax+b)f(x)dx = a\int xf(x)dx + b\int f(x)dx = a\mu + b$. The deviation from the mean is $(aX+b) - (a\mu+b) = a(X-\mu)$. Squaring this gives $a^2(X-\mu)^2$. Taking the expectation gives $\int a^2(x-\mu)^2 f(x)dx = a^2 \int (x-\mu)^2 f(x)dx = a^2 \operatorname{Var}(X)$.</p>"""
    ),
    'c.prob.5.2.3': (
        r"""<p><b>Statement:</b> For any continuous non-negative random variable $X \ge 0$ almost surely with survival function $S(x) = 1 - F(x) = P(X > x)$, its expectation can be evaluated by the <b>tail integral formula</b>:"""
        r"""$$E[X] = \int_0^\infty P(X > x) \, dx = \int_0^\infty [1 - F(x)] \, dx$$"""
        r"""More generally, for any $\alpha > 0$, $E[X^\alpha] = \int_0^\infty \alpha x^{\alpha-1} P(X > x) \, dx$.</p>"""
        r"""<p><b>Mathematical terms:</b> $X \ge 0$ is non-negative; $P(X > x)$ is the complementary CDF (tail probability / survival function); $\alpha > 0$ is the moment exponent.</p>"""
        r"""<p><b>Reason:</b> Express the survival probability as an integral: $P(X > x) = \int_x^\infty f(t) dt = \int_0^\infty \mathbf{1}_{\{t > x\}} f(t) dt$. Substituting this into $\int_0^\infty P(X > x) dx$ yields the double integral $\int_0^\infty \int_0^\infty \mathbf{1}_{\{0 < x < t\}} f(t) dt \, dx$. By Tonelli's theorem for non-negative integrands, reversing the order of integration gives $\int_0^\infty f(t) \left(\int_0^t 1 \, dx\right) dt = \int_0^\infty t f(t) dt = E[X]$.</p>"""
    ),
    'c.prob.5.3.1': (
        r"""<p><b>Statement:</b> A continuous random variable $X$ is <b>uniformly distributed</b> on the interval $(\alpha, \beta)$ with $\alpha < \beta$ ($X \sim \operatorname{Uniform}(\alpha, \beta)$) if its PDF is constant over the interval and zero elsewhere:"""
        r"""$$f(x) = \frac{1}{\beta - \alpha}, \quad x \in (\alpha, \beta)$$</p>"""
        r"""<p>Its cumulative distribution function is $F(x) = 0$ for $x \le \alpha$, $F(x) = \frac{x - \alpha}{\beta - \alpha}$ for $\alpha < x < \beta$, and $F(x) = 1$ for $x \ge \beta$. For any sub-interval $[c, d] \subseteq [\alpha, \beta]$, $P(c \le X \le d) = \frac{d - c}{\beta - \alpha}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\alpha, \beta$ are the interval endpoints; $\beta - \alpha$ is the interval length; $f(x) = \frac{1}{\beta-\alpha}$ is the constant height; $\frac{d-c}{\beta-\alpha}$ is the length proportion.</p>"""
        r"""<p><b>Reason:</b> Uniformity means that any sub-interval of given length has probability proportional only to its length, so the density must be constant: $f(x) = c$. Total normalization requires $\int_\alpha^\beta c \, dx = c(\beta - \alpha) = 1$, forcing the unique constant density $c = \frac{1}{\beta - \alpha}$. Integrating $f(t)$ from $\alpha$ to $x$ yields $F(x) = \int_\alpha^x \frac{1}{\beta-\alpha} dt = \frac{x-\alpha}{\beta-\alpha}$.</p>"""
    ),
    'c.prob.5.3.2': (
        r"""<p><b>Statement:</b> For $X \sim \operatorname{Uniform}(\alpha, \beta)$, the expectation, second moment, and variance are:"""
        r"""$$E[X] = \frac{\alpha + \beta}{2}, \qquad E[X^2] = \frac{\alpha^2 + \alpha\beta + \beta^2}{3}, \qquad \operatorname{Var}(X) = \frac{(\beta - \alpha)^2}{12}$$"""
        r"""and the standard deviation is $\operatorname{SD}(X) = \frac{\beta - \alpha}{\sqrt{12}}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\frac{\alpha+\beta}{2}$ is the interval midpoint; $\beta - \alpha$ is the range width; $\frac{(\beta-\alpha)^2}{12}$ is the universal continuous uniform variance.</p>"""
        r"""<p><b>Reason:</b> By definition: $E[X] = \int_\alpha^\beta x \frac{1}{\beta-\alpha} dx = \frac{1}{\beta-\alpha} \left[\frac{x^2}{2}\right]_\alpha^\beta = \frac{\beta^2 - \alpha^2}{2(\beta-\alpha)} = \frac{\alpha+\beta}{2}$. The second moment is $E[X^2] = \int_\alpha^\beta x^2 \frac{1}{\beta-\alpha} dx = \frac{\beta^3 - \alpha^3}{3(\beta-\alpha)} = \frac{\alpha^2 + \alpha\beta + \beta^2}{3}$. Subtracting $(E[X])^2 = \frac{\alpha^2 + 2\alpha\beta + \beta^2}{4}$ gives $\frac{4(\alpha^2+\alpha\beta+\beta^2) - 3(\alpha^2+2\alpha\beta+\beta^2)}{12} = \frac{\alpha^2 - 2\alpha\beta + \beta^2}{12} = \frac{(\beta-\alpha)^2}{12}$.</p>"""
    ),
    'c.prob.5.4.1': (
        r"""<p><b>Statement:</b> A random variable $X$ has a <b>Normal (Gaussian) distribution</b> with parameters $\mu \in \mathbb{R}$ and $\sigma^2 > 0$ ($X \sim \mathcal{N}(\mu, \sigma^2)$) if its PDF is:"""
        r"""$$f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right), \quad x \in \mathbb{R}$$"""
        r"""The <b>standard normal</b> random variable $Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$ has PDF $\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$ and CDF $\Phi(z) = \int_{-\infty}^z \phi(t) \, dt$, satisfying symmetry $\Phi(-z) = 1 - \Phi(z)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\mu \in \mathbb{R}$ is the location (mean); $\sigma > 0$ is the scale (standard deviation); $\phi(z)$ is the standard normal density; $\Phi(z)$ is the standard normal CDF; $Z = \frac{X-\mu}{\sigma}$ is the standard score ($z$-score).</p>"""
        r"""<p><b>Reason:</b> Evaluating the Gaussian integral $\int_{-\infty}^\infty e^{-z^2/2} dz = \sqrt{2\pi}$ using polar coordinates $(r, \theta)$ establishes that $\phi(z) = \frac{1}{\sqrt{2\pi}}e^{-z^2/2}$ integrates to 1. The Bell curve is strictly symmetric about $\mu$, meaning $f(\mu - x) = f(\mu + x)$. This symmetry forces $\Phi(-z) = P(Z \le -z) = P(Z \ge z) = 1 - \Phi(z)$. Standardizing any $X \sim \mathcal{N}(\mu, \sigma^2)$ maps $P(a \le X \le b) = \Phi(\frac{b-\mu}{\sigma}) - \Phi(\frac{a-\mu}{\sigma})$.</p>"""
    ),
    'c.prob.5.4.2': (
        r"""<p><b>Statement:</b> For $X \sim \mathcal{N}(\mu, \sigma^2)$:"""
        r"""<br>(1) $E[X] = \mu$ and $\operatorname{Var}(X) = \sigma^2$."""
        r"""<br>(2) Any affine transformation $Y = aX + b$ (with $a \ne 0$) remains strictly normally distributed:"""
        r"""$$Y = aX + b \sim \mathcal{N}\left(a\mu + b, \, a^2\sigma^2\right)$$</p>"""
        r"""<p><b>Mathematical terms:</b> Affine transformation $aX + b$; location shifts by $b$ and scales by $a$; variance scales by $a^2$; closure under affine maps is a defining property of the Gaussian family.</p>"""
        r"""<p><b>Reason:</b> Standardize $X = \mu + \sigma Z$ with $Z \sim \mathcal{N}(0, 1)$. Then $Y = a(\mu + \sigma Z) + b = (a\mu + b) + (|a|\sigma) Z^\prime$, where $Z^\prime = \operatorname{sgn}(a)Z$. By symmetry, $-Z$ has the identical distribution to $Z$, so $Z^\prime \sim \mathcal{N}(0, 1)$. Because $Y$ is a linear function of a standard normal with coefficient $|a|\sigma$ and shift $a\mu+b$, its PDF retains the exact Gaussian functional form with mean $a\mu+b$ and variance $a^2\sigma^2$.</p>"""
    ),
    'c.prob.5.4.3': (
        r"""<p><b>Statement:</b> The <b>De Moivre-Laplace Limit Theorem</b> states that for $S_n \sim \operatorname{Binomial}(n, p)$, as $n \to \infty$ with $p \in (0, 1)$ fixed, the standardized binomial converges in distribution to the standard normal:"""
        r"""$$Z_n = \frac{S_n - np}{\sqrt{np(1-p)}} \xrightarrow{d} \mathcal{N}(0, 1)$$"""
        r"""In practical computation, the <b>continuity correction</b> accounts for discrete integer steps: $P(a \le S_n \le b) \approx \Phi\left(\frac{b + 0.5 - np}{\sqrt{np(1-p)}}\right) - \Phi\left(\frac{a - 0.5 - np}{\sqrt{np(1-p)}}\right)$.</p>"""
        r"""<p><b>Mathematical terms:</b> $S_n$ is the binomial count; $np$ is the mean; $\sqrt{np(1-p)}$ is the standard deviation; $\pm 0.5$ is the continuity correction adjusting discrete histogram bars to continuous area.</p>"""
        r"""<p><b>Reason:</b> Represent $S_n = \sum_{i=1}^n I_i$ as the sum of $n$ independent and identically distributed Bernoulli variables. By Stirling's approximation $n! \sim \sqrt{2\pi n}(n/e)^n$, the discrete histogram rectangles $\binom{n}{k}p^k(1-p)^{n-k}$ converge pointwise to the Gaussian bell curve $\phi(z)$. Because a discrete integer $k$ corresponds to the continuous interval $[k - 0.5, k + 0.5]$, the continuity correction integrates the density over $[a - 0.5, b + 0.5]$, drastically reducing approximation error.</p>"""
    ),
    'c.prob.5.5.1': (
        r"""<p><b>Statement:</b> A random variable $X$ has an <b>Exponential distribution</b> with rate parameter $\lambda > 0$ ($X \sim \operatorname{Exponential}(\lambda)$) if its PDF and CDF are:"""
        r"""$$f(x) = \lambda e^{-\lambda x}, \quad F(x) = 1 - e^{-\lambda x}, \quad x \ge 0$$"""
        r"""The survival function is $P(X > t) = e^{-\lambda t}$. The exponential is the unique continuous distribution possessing the <b>memoryless property</b>: for all $s, t \ge 0$,"""
        r"""$$P(X > s + t \mid X > s) = P(X > t)$$"""
        r"""Its mean and variance are $E[X] = \frac{1}{\lambda}$ and $\operatorname{Var}(X) = \frac{1}{\lambda^2}$.</p>"""
        r"""<p><b>Mathematical terms:</b> $\lambda > 0$ is the failure rate; $e^{-\lambda t}$ is the tail survival probability; memorylessness means elapsed survival time $s$ does not age the item.</p>"""
        r"""<p><b>Reason:</b> Evaluating the conditional survival probability: $P(X > s + t \mid X > s) = \frac{P(X > s + t \cap X > s)}{P(X > s)} = \frac{P(X > s + t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)$. Cauchy's functional equation $g(s+t) = g(s)g(t)$ on $[0, \infty)$ for right-continuous probabilities forces $g(t) = e^{-\lambda t}$, proving uniqueness. Integrating $t \lambda e^{-\lambda t}$ by parts yields $E[X] = 1/\lambda$ and $E[X^2] = 2/\lambda^2$, giving $\operatorname{Var}(X) = 2/\lambda^2 - 1/\lambda^2 = 1/\lambda^2$.</p>"""
    ),
    'c.prob.5.5.2': (
        r"""<p><b>Statement:</b> For a continuous non-negative lifetime $X$ with PDF $f(t)$ and survival function $S(t) = P(X > t) > 0$, the <b>hazard rate</b> (failure rate function) $h(t)$ is defined by:"""
        r"""$$h(t) = \lim_{\Delta t \downarrow 0} \frac{P(t < X \le t + \Delta t \mid X > t)}{\Delta t} = \frac{f(t)}{S(t)} = -\frac{d}{dt} \ln S(t)$$"""
        r"""The survival function is completely recovered from the hazard function by:"""
        r"""$$S(t) = \exp\left(-\int_0^t h(u) \, du\right), \quad t \ge 0$$"""
        r"""where $H(t) = \int_0^t h(u) \, du$ is the <b>cumulative hazard function</b>.</p>"""
        r"""<p><b>Mathematical terms:</b> $h(t)$ is the instantaneous hazard rate (risk per unit time); $S(t) = 1 - F(t)$ is survival; $H(t) = \int_0^t h(u)du$ is cumulative hazard; $f(t) = h(t) \exp(-\int_0^t h(u)du)$.</p>"""
        r"""<p><b>Reason:</b> The conditional probability of failure in $(t, t+\Delta t]$ given survival up to $t$ is $\frac{F(t+\Delta t) - F(t)}{S(t)} \approx \frac{f(t)\Delta t}{S(t)}$. Dividing by $\Delta t$ yields $h(t) = f(t)/S(t)$. Since $f(t) = -S^\prime(t)$, this is the differential equation $h(t) = -S^\prime(t)/S(t) = -\frac{d}{dt}\ln S(t)$. Integrating both sides over $[0, t]$ with initial condition $S(0) = 1$ gives $\ln S(t) - \ln S(0) = -\int_0^t h(u) du$, and exponentiating yields $S(t) = \exp(-\int_0^t h(u) du)$.</p>"""
    ),
    'c.prob.5.6.1': (
        r"""<p><b>Statement:</b> Three standard continuous parametric families generalize the exponential distribution:"""
        r"""<br>(1) <b>Gamma:</b> $X \sim \operatorname{Gamma}(\alpha, \lambda)$ with shape $\alpha > 0$, rate $\lambda > 0$, PDF $f(x) = \frac{\lambda^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\lambda x}$ ($x > 0$), mean $\alpha/\lambda$, variance $\alpha/\lambda^2$."""
        r"""<br>(2) <b>Beta:</b> $X \sim \operatorname{Beta}(a, b)$ on $(0, 1)$ with PDF $f(x) = \frac{1}{B(a, b)} x^{a-1} (1-x)^{b-1}$, mean $\frac{a}{a+b}$, variance $\frac{ab}{(a+b)^2(a+b+1)}$."""
        r"""<br>(3) <b>Weibull:</b> $X \sim \operatorname{Weibull}(\alpha, \beta)$ with hazard $h(t) = \alpha \beta t^{\beta-1}$ and survival $S(t) = e^{-\alpha t^\beta}$ ($t > 0$).</p>"""
        r"""<p><b>Mathematical terms:</b> $\Gamma(\alpha) = \int_0^\infty u^{\alpha-1}e^{-u}du$ is the Gamma function; $B(a, b) = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}$ is the Beta function; $\beta$ in Weibull controls aging (wear-out if $\beta > 1$, infant mortality if $\beta < 1$, memoryless if $\beta = 1$).</p>"""
        r"""<p><b>Reason:</b> The Gamma distribution represents the sum of $\alpha$ independent $\operatorname{Exponential}(\lambda)$ lifetimes when $\alpha \in \mathbb{N}$ (Erlang distribution), with normalization constant provided by Euler's Gamma integral. The Beta distribution provides the conjugate prior for binomial proportions on $(0, 1)$. The Weibull distribution generalizes the exponential by allowing the hazard rate to vary as a power law $h(t) \propto t^{\beta-1}$, modeling progressive mechanical wear-out or fatigue.</p>"""
    ),
    'c.prob.5.6.2': (
        r"""<p><b>Statement:</b> Heavy-tailed and asymmetric lifetime distributions:"""
        r"""<br>(1) <b>Cauchy:</b> $f(x) = \frac{1}{\pi (1 + x^2)}$ for $x \in \mathbb{R}$. The mean and higher moments are undefined because $\int_{-\infty}^\infty |x| f(x) dx = \infty$."""
        r"""<br>(2) <b>Pareto:</b> $f(x) = \frac{\alpha x_m^\alpha}{x^{\alpha+1}}$ for $x \ge x_m > 0$ with shape $\alpha > 0$. $E[X] = \frac{\alpha x_m}{\alpha - 1}$ for $\alpha > 1$; variance is finite only for $\alpha > 2$."""
        r"""<br>(3) <b>Lognormal:</b> $X = e^Y$ where $Y \sim \mathcal{N}(\mu, \sigma^2)$, with PDF $f(x) = \frac{1}{x \sigma \sqrt{2\pi}} \exp\left(-\frac{(\ln x - \mu)^2}{2\sigma^2}\right)$ ($x > 0$), mean $e^{\mu + \sigma^2/2}$, variance $e^{2\mu + \sigma^2}(e^{\sigma^2} - 1)$.</p>"""
        r"""<p><b>Mathematical terms:</b> Heavy tails describe decay slower than exponential; Cauchy has tail decay $O(x^{-2})$; Pareto has power-law tail $P(X > x) = (x_m/x)^\alpha$; Lognormal models multiplicative processes.</p>"""
        r"""<p><b>Reason:</b> For the Cauchy distribution, the integrand $x/(1+x^2) \sim 1/x$ as $x \to \infty$, giving divergent integrals $\int_0^\infty x/(1+x^2)dx = \infty$, so absolute convergence fails and no expectation exists. For the Pareto distribution, integrating $x \cdot x^{-(\alpha+1)} = x^{-\alpha}$ converges if and only if $\alpha > 1$. The lognormal arises via the Central Limit Theorem applied to the product of positive independent random variables, since $\ln(\prod X_i) = \sum \ln X_i \approx \mathcal{N}$.</p>"""
    ),
    'c.prob.5.7.1': (
        r"""<p><b>Statement:</b> The <b>CDF Method</b> determines the PDF of $Y = g(X)$ from continuous $X$ with PDF $f_X(x)$:"""
        r"""<br>1. Express the CDF $F_Y(y) = P(Y \le y) = P(g(X) \le y) = \int_{\{x: g(x) \le y\}} f_X(x) \, dx$."""
        r"""<br>2. Differentiate $F_Y(y)$ with respect to $y$ to obtain the PDF $f_Y(y) = F_Y^\prime(y)$."""
        r"""<p>If $g$ is strictly monotonic and differentiable with inverse $x = g^{-1}(y)$, the <b>Jacobian transformation formula</b> is:"""
        r"""$$f_Y(y) = f_X(g^{-1}(y)) \left|\frac{d}{dy} g^{-1}(y)\right| = \frac{f_X(x)}{|g^\prime(x)|}$$</p>"""
        r"""<p><b>Mathematical terms:</b> $g^{-1}(y)$ is the inverse mapping; $\frac{d}{dy}g^{-1}(y) = \frac{1}{g^\prime(x)}$ is the derivative of the inverse function; $|\cdot|$ is the absolute value (Jacobian).</p>"""
        r"""<p><b>Reason:</b> If $g$ is strictly increasing, $P(g(X) \le y) = P(X \le g^{-1}(y)) = F_X(g^{-1}(y))$. By the chain rule, $f_Y(y) = \frac{d}{dy} F_X(g^{-1}(y)) = f_X(g^{-1}(y)) \frac{d}{dy}g^{-1}(y)$. If $g$ is strictly decreasing, $P(g(X) \le y) = P(X \ge g^{-1}(y)) = 1 - F_X(g^{-1}(y))$, whose derivative is $-f_X(g^{-1}(y))\frac{d}{dy}g^{-1}(y)$. Since $\frac{d}{dy}g^{-1}(y) < 0$ when decreasing, the minus sign is absorbed into the absolute value $|\frac{d}{dy}g^{-1}(y)|$, preserving non-negativity of density.</p>"""
    ),
    'c.prob.5.7.2': (
        r"""<p><b>Statement:</b> When $Y = g(X)$ is a non-monotonic (many-to-one) transformation, partition the support of $X$ into countably many disjoint intervals $I_1, I_2, \ldots$ on each of which $g$ is strictly monotonic. Then the PDF of $Y$ is the sum of the density contributions across all pre-image branches:"""
        r"""$$f_Y(y) = \sum_{k} f_X(x_k) \left|\frac{dx_k}{dy}\right| = \sum_{k: g(x_k) = y} \frac{f_X(x_k)}{|g^\prime(x_k)|}$$"""
        r"""For example, for $Y = X^2$, $f_Y(y) = \frac{1}{2\sqrt{y}} [f_X(\sqrt{y}) + f_X(-\sqrt{y})]$ for $y > 0$.</p>"""
        r"""<p><b>Mathematical terms:</b> $x_k = g_k^{-1}(y)$ are the roots of $g(x) = y$; $|\frac{dx_k}{dy}|$ is the local Jacobian expansion factor of branch $k$.</p>"""
        r"""<p><b>Reason:</b> For $Y = X^2$ and $y > 0$, the event $\{Y \le y\}$ is $\{-\sqrt{y} \le X \le \sqrt{y}\} = F_X(\sqrt{y}) - F_X(-\sqrt{y})$. Differentiating with respect to $y$ via the chain rule gives $f_Y(y) = \frac{d}{dy}[F_X(\sqrt{y}) - F_X(-\sqrt{y})] = f_X(\sqrt{y})\frac{1}{2\sqrt{y}} - f_X(-\sqrt{y})(-\frac{1}{2\sqrt{y}}) = \frac{1}{2\sqrt{y}}[f_X(\sqrt{y}) + f_X(-\sqrt{y})]$. Each branch where $g(x)=y$ contributes a probability mass $f_X(x_k)|dx_k| = f_X(x_k)|\frac{dx_k}{dy}|dy$; summing these disjoint infinitesimal slices yields $f_Y(y)dy$.</p>"""
    ),
}
