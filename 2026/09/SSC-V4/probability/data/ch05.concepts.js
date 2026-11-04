var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.5.1.1",
    "sec": "5.1",
    "kind": "definition",
    "tier": "core",
    "title": "Density and distribution function",
    "oneLine": "A density is a curve whose area tells us probability. The total area is 1. To find the chance of landing in an interval, take the area above that interval.",
    "statement": "<p><b>Statement:</b> A random variable $X$ is <b>continuous</b> with probability density function (PDF) $f_X: \\mathbb{R} \\to [0, \\infty)$ if for all Borel sets $B \\subseteq \\mathbb{R}$:$$P(X \\in B) = \\int_B f_X(x) \\, dx$$The PDF satisfies non-negativity $f_X(x) \\ge 0$ and total normalization $\\int_{-\\infty}^\\infty f_X(x) \\, dx = 1$. Its cumulative distribution function is $F_X(x) = P(X \\le x) = \\int_{-\\infty}^x f_X(t) \\, dt$, which implies $P(a < X \\le b) = F_X(b) - F_X(a) = \\int_a^b f_X(t) \\, dt$ and $P(X = c) = 0$ for every single point $c \\in \\mathbb{R}$.</p><p><b>Mathematical terms:</b> $f_X(x)$ is the probability density function (PDF); $F_X(x)$ is the continuous CDF; $\\int_B f_X(x)dx$ is the Lebesgue / Riemann integral representing accumulated probability area; $P(X=c) = 0$ means individual points have measure zero.</p><p><b>Reason:</b> In continuous spaces, probability corresponds to area under the density curve, rather than discrete point masses. The integral of a single point $\\int_c^c f(x)dx = 0$, so individual values have zero probability, but non-degenerate intervals $[a, b]$ carry positive probability equal to the area under $f$ over $[a, b]$. Total normalization $\\int_{-\\infty}^\\infty f(x)dx = 1$ ensures $P(\\mathbb{R}) = 1$ in accordance with Kolmogorov's second axiom.</p>",
    "intuition": "Picture probability spread as paint along a number line. A density is the paint height; the chance that X falls in an interval is the paint area there, never the height at one exact point.",
    "needs": [],
    "traps": [
      "A density value can exceed $1$; only its integral must equal 1.",
      "For a continuous variable, endpoints do not affect interval probabilities, but this zero-singleton rule does not apply to a mixed distribution."
    ],
    "cards": [
      {
        "q": "State the density normalization and interval-probability rules.",
        "a": "$f\\ge0$, $\\int_{\\mathbb R} f=1$, and $P(a<X\\le b)=\\int_a^b f(x)\\,dx$.",
        "kind": "state"
      },
      {
        "q": "Does $f(2)=0.7$ mean $P(X=2)=0.7$?",
        "a": "No. For a continuous variable $P(X=2)=0$; density height describes local probability per unit length.",
        "kind": "trap"
      }
    ],
    "provenance": "Ross, A First Course in Probability, 10e, §5.1, pp. 195–198 (PDF pp. 195–198).",
    "proof": {
      "idea": "Explain the density model and derive its interval and point probabilities.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume a nonnegative density f with total area 1.",
          "m": "$$f(x)\\ge0,\\quad\\int_{-\\infty}^{\\infty}f(x)dx=1$$",
          "meaning": "These conditions define normalized probability weight spread over the number line; density height itself can exceed 1."
        },
        {
          "why": "The density model assigns probability to a set by its area.",
          "m": "$$P(X\\in A)=\\int_Af(x)dx$$",
          "meaning": "This is the model definition, where the integral adds height times small widths."
        },
        {
          "why": "Take A to be all values up to x.",
          "m": "$$F(x)=P(X\\le x)=\\int_{-\\infty}^xf(t)dt$$",
          "meaning": "A CDF accumulates probability, while density gives its local concentration."
        },
        {
          "why": "Subtract accumulated areas to isolate an interval.",
          "m": "$$P(a<X\\le b)=F(b)-F(a)=\\int_a^bf(t)dt$$",
          "meaning": "The integral from a to b is precisely the area left after subtraction."
        },
        {
          "why": "A singleton has zero length and therefore zero density integral.",
          "m": "$$P(X=a)=\\int_{\\{a\\}}f(x)dx=0$$",
          "meaning": "This is an integration property of sets of length zero, valid even if the density value at a is large or unspecified."
        },
        {
          "why": "Endpoint atoms vanish, so including or excluding individual interval endpoints changes no probability.",
          "m": "$$P(a<X<b)=P(a\\le X\\le b)$$",
          "meaning": "This endpoint simplification is valid for density distributions, not all random variables."
        }
      ],
      "ends": "Density is probability per unit length; only its accumulated area is a probability."
    }
  },
  {
    "id": "c.prob.5.1.2",
    "sec": "5.1",
    "kind": "theorem",
    "tier": "core",
    "title": "CDF recovery and local density meaning",
    "oneLine": "The CDF adds up the area to the left of a cutoff. In a very short interval, the curve is nearly flat, so probability is approximately height times width.",
    "statement": "<p><b>Statement:</b> By the Fundamental Theorem of Calculus, if $f(x)$ is continuous at $x$, the cumulative distribution function $F(x) = \\int_{-\\infty}^x f(t) \\, dt$ is differentiable at $x$ with derivative:$$F^\\prime(x) = \\frac{d}{dx} F(x) = f(x)$$For an infinitesimal interval of width $h > 0$, the probability is locally linear in $h$: $P(x \\le X \\le x + h) = \\int_x^{x+h} f(t) \\, dt = f(x) h + o(h)$ as $h \\downarrow 0$.</p><p><b>Mathematical terms:</b> $F^\\prime(x)$ is the derivative of the CDF; $f(x)$ is the local density height; $o(h)$ represents higher-order terms satisfying $\\lim_{h \\to 0} \\frac{o(h)}{h} = 0$.</p><p><b>Reason:</b> The CDF $F(x)$ accumulates probability area from $-\\infty$ up to $x$. By the Fundamental Theorem of Calculus, the rate of change of accumulated area with respect to the right endpoint is precisely the height of the curve $f(x)$ at that point. Over a very narrow window $[x, x+h]$, $f(t) \\approx f(x)$, approximating the region as a rectangle of height $f(x)$ and width $h$, giving area $f(x)h$.</p>",
    "intuition": "The CDF $F(x)$ answers “what is the chance X is at most x?” As you slide x to the right, the density is how fast that accumulated chance rises, like the steepness of a hill.",
    "needs": [
      "c.prob.5.1.1"
    ],
    "traps": [
      "The approximation is local as $h\\to0$, not an exact formula for a wide interval."
    ],
    "proof": {
      "idea": "Compare short-interval area with rectangles, then derive the density as a slope.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A density f assigns probability by area; the CDF accumulates that area to the left.",
          "m": "$$F(x)=\\int_{-\\infty}^xf(t)\\,dt$$",
          "meaning": "An integral is the limit of sums of small rectangle areas f(t) times their widths."
        },
        {
          "why": "Subtract two accumulated areas to leave only the strip between the cutoffs.",
          "m": "$$F(x+h)-F(x)=\\int_x^{x+h}f(t)\\,dt=P(x<X\\le x+h)$$",
          "meaning": "This is exact for h>0."
        },
        {
          "why": "Divide by the width h to obtain the average height of the curve on this strip.",
          "m": "$$\\frac{F(x+h)-F(x)}h=\\frac1h\\int_x^{x+h}f(t)\\,dt$$",
          "meaning": "Height times width is area; area divided by width is average height."
        },
        {
          "why": "If f is continuous at x, all nearby heights are within any chosen ε of f(x).",
          "m": "$$f(x)-\\epsilon\\le f(t)\\le f(x)+\\epsilon\\quad(x\\le t\\le x+h)$$",
          "meaning": "Continuity means that this bound holds for sufficiently small h."
        },
        {
          "why": "The integral is trapped between the corresponding rectangle areas.",
          "m": "$$f(x)-\\epsilon\\le\\frac{F(x+h)-F(x)}h\\le f(x)+\\epsilon$$",
          "meaning": "Divide the area bounds by positive h."
        },
        {
          "why": "Shrink h and then the arbitrary tolerance ε.",
          "m": "$$F'(x)=f(x)$$",
          "meaning": "A derivative is the limiting change in height divided by change in input; left intervals give the same limit at a continuity point."
        },
        {
          "why": "Write the short-strip error relative to its width.",
          "m": "$$P(x<X\\le x+h)=hf(x)+o(h)$$",
          "meaning": "o(h) denotes an error whose ratio to h tends to zero; it is not generally zero at finite h."
        }
      ],
      "ends": "The CDF is accumulated probability; at continuity points of the density, its slope is that density."
    },
    "cards": [
      {
        "q": "State the local probability approximation at a continuity point of $f$.",
        "a": "$P(x<X\\le x+h)=h f(x)+o(h)$ as $h\\downarrow0$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.1, pp. 195–198 (PDF pp. 195–198)."
  },
  {
    "id": "c.prob.5.2.1",
    "sec": "5.2",
    "kind": "theorem",
    "tier": "core",
    "title": "LOTUS for continuous variables",
    "oneLine": "To average a quantity calculated from X, weight its value at each x by how likely values near x are. An integral is the continuous version of this weighted sum.",
    "statement": "<p><b>Statement:</b> The <b>Law of the Unconscious Statistician (LOTUS)</b> for a continuous random variable $X$ with PDF $f_X(x)$ states that for any measurable function $g: \\mathbb{R} \\to \\mathbb{R}$, the expectation of $Y = g(X)$ is given by:$$E[g(X)] = \\int_{-\\infty}^\\infty g(x) f_X(x) \\, dx$$provided $\\int_{-\\infty}^\\infty |g(x)| f_X(x) \\, dx < \\infty$, computing $E[g(X)]$ directly without first determining the density of $g(X)$.</p><p><b>Mathematical terms:</b> $g(x)$ is the transformation function; $f_X(x)$ is the original density; absolute integrability $\\int |g(x)|f_X(x)dx < \\infty$ ensures the expectation is well-defined and finite.</p><p><b>Reason:</b> Approximating $X$ by a sequence of simple discrete variables $X_n$ partitions $\\mathbb{R}$ into intervals of width $\\Delta x$, where each slice $[x_k, x_k + \\Delta x]$ has probability mass $f_X(x_k)\\Delta x$. Applying discrete LOTUS yields $\\sum g(x_k) f_X(x_k)\\Delta x$. Taking the limit as the partition mesh $\\Delta x \\to 0$, the Riemann-Stieltjes sum converges by the dominated convergence theorem to the Lebesgue integral $\\int_{-\\infty}^\\infty g(x) f_X(x) dx$.</p>",
    "intuition": "Suppose $g(X)$ is the square of a test score. To average it, square each possible score and weight it by how often that score occurs; you need not build a new probability table first.",
    "needs": [
      "c.prob.5.1.1"
    ],
    "traps": [
      "Do not integrate $g(x)$ alone: the density factor is essential.",
      "The expectation may fail to exist; a signed integral needs integrability, commonly $E|g(X)|<\\infty$."
    ],
    "proof": {
      "idea": "Start with a nonnegative output and add all its threshold layers.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "First let g(x)≥0 and set Y=g(X). For a fixed output y_0, a unit-height strip below y_0 has area y_0.",
          "m": "$$y_0=\\int_0^{\\infty}\\mathbf1_{\\{y_0>t\\}}\\,dt$$",
          "meaning": "For example, a value 3 is built by height 1 from thresholds 0 to 3."
        },
        {
          "why": "Apply the same identity at every observation.",
          "m": "$$Y=\\int_0^{\\infty}\\mathbf1_{\\{g(X)>t\\}}\\,dt$$",
          "meaning": "The threshold t is just a dummy integration variable."
        },
        {
          "why": "Average these nonnegative layers and exchange their order.",
          "m": "$$E[Y]=\\int_0^{\\infty}P(g(X)>t)\\,dt$$",
          "meaning": "For finite nonnegative sums this is ordinary distributivity. Tonelli’s theorem extends it to nonnegative integrals; this is an advanced integration prerequisite."
        },
        {
          "why": "Compute each threshold probability from the input density.",
          "m": "$$P(g(X)>t)=\\int_{\\{x:g(x)>t\\}}f(x)\\,dx$$",
          "meaning": "The set contains exactly the inputs making that output layer count."
        },
        {
          "why": "Exchange the nonnegative integrals and integrate thresholds first.",
          "m": "$$E[Y]=\\int_{-\\infty}^{\\infty}\\left[\\int_0^{g(x)}dt\\right]f(x)\\,dx$$",
          "meaning": "For a fixed x, the included thresholds occupy an interval of length g(x)."
        },
        {
          "why": "The inner integral is that interval length.",
          "m": "$$E[g(X)]=\\int_{-\\infty}^{\\infty}g(x)f(x)\\,dx$$",
          "meaning": "This is the continuous weighted-average formula."
        },
        {
          "why": "For a signed output, split it into nonnegative positive and negative parts.",
          "m": "$$g=g_+-g_-,\\quad g_+=\\max(g,0),\\quad g_- =\\max(-g,0)$$",
          "meaning": "Finite E[|g(X)|] makes both part averages finite, so subtracting their two formulas proves the signed version."
        }
      ],
      "ends": "LOTUS weights the output g(x) by the input density f(x). The integral exchange requires nonnegativity or suitable integrability."
    },
    "cards": [
      {
        "q": "State LOTUS for $g(X)$.",
        "a": "$E[g(X)]=\\int_{\\mathbb R}g(x)f_X(x)\\,dx$, provided the expectation exists.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.2, pp. 199–202 (PDF pp. 199–202)."
  },
  {
    "id": "c.prob.5.2.2",
    "sec": "5.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Variance and affine transformations",
    "oneLine": "Variance averages the squared distance from the mean. Adding a constant shifts all values together; multiplying by a stretches the distances by a, so squared distances stretch by a squared.",
    "statement": "<p><b>Statement:</b> For a continuous random variable $X$ with PDF $f(x)$, finite mean $\\mu = E[X] = \\int_{-\\infty}^\\infty x f(x) \\, dx$, and finite variance $\\operatorname{Var}(X) = E[(X-\\mu)^2] = \\int_{-\\infty}^\\infty (x-\\mu)^2 f(x) \\, dx = E[X^2] - \\mu^2$, affine transformations satisfy:$$\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X), \\qquad \\operatorname{SD}(aX + b) = |a| \\operatorname{SD}(X)$$</p><p>for any real constants $a, b \\in \\mathbb{R}$.</p><p><b>Mathematical terms:</b> $\\mu$ is the continuous mean; $\\operatorname{Var}(X) \\ge 0$ is the variance; $aX + b$ is the affine scaling and shift; $a^2$ reflects squared scaling of deviations.</p><p><b>Reason:</b> By linearity of integration, $E[aX + b] = \\int (ax+b)f(x)dx = a\\int xf(x)dx + b\\int f(x)dx = a\\mu + b$. The deviation from the mean is $(aX+b) - (a\\mu+b) = a(X-\\mu)$. Squaring this gives $a^2(X-\\mu)^2$. Taking the expectation gives $\\int a^2(x-\\mu)^2 f(x)dx = a^2 \\int (x-\\mu)^2 f(x)dx = a^2 \\operatorname{Var}(X)$.</p>",
    "intuition": "If every test score gets 5 extra points, the class average shifts but the spread stays the same. If scores are doubled, each distance from the average doubles, so variance (average squared distance) becomes four times as large.",
    "needs": [
      "c.prob.5.2.1"
    ],
    "traps": [
      "Variance does not scale by $a$ or $|a|$: the square is required.",
      "$\\operatorname{Var}(X)$ needs a finite second moment."
    ],
    "proof": {
      "idea": "Expand a square, then track what a shift and a scale do to deviations.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Write μ for the finite mean and define variance as the mean squared deviation.",
          "m": "$$\\mu=E[X],\\quad \\operatorname{Var}(X)=E[(X-\\mu)^2]$$",
          "meaning": "Assume E[X²] is finite, so every term below exists."
        },
        {
          "why": "Expand the square using (u−v)²=u²−2uv+v².",
          "m": "$$(X-\\mu)^2=X^2-2\\mu X+\\mu^2$$",
          "meaning": "μ is a fixed number, not a new random observation."
        },
        {
          "why": "Average each term and substitute E[X]=μ.",
          "m": "$$\\operatorname{Var}(X)=E[X^2]-2\\mu^2+\\mu^2=E[X^2]-\\mu^2$$",
          "meaning": "A constant can leave an expectation unchanged, just as it leaves a weighted sum."
        },
        {
          "why": "Let Y=aX+b, with fixed real a and b, and use linearity.",
          "m": "$$E[Y]=a\\mu+b$$",
          "meaning": "Multiplying values by a and adding b changes their average in the same way."
        },
        {
          "why": "Subtract the new mean and cancel b.",
          "m": "$$Y-E[Y]=aX+b-(a\\mu+b)=a(X-\\mu)$$",
          "meaning": "A shift does not change the distances from the mean."
        },
        {
          "why": "Square this identity and average it.",
          "m": "$$\\operatorname{Var}(Y)=E[a^2(X-\\mu)^2]=a^2\\operatorname{Var}(X)$$",
          "meaning": "A stretch by a multiplies squared distances by a², even when a is negative."
        },
        {
          "why": "Take the nonnegative square root to recover standard deviation.",
          "m": "$$\\operatorname{SD}(Y)=|a|\\operatorname{SD}(X)$$",
          "meaning": "For a=0 the variable is constant and its variance is zero."
        }
      ],
      "ends": "Variance equals second moment minus squared mean. Shifts preserve variance and scales multiply it by the square of the scale."
    },
    "cards": [
      {
        "q": "Give both formulas for variance and its affine scaling law.",
        "a": "$\\operatorname{Var}(X)=E[X^2]-(E[X])^2$ and $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.2, pp. 201–202 (PDF pp. 201–202)."
  },
  {
    "id": "c.prob.5.2.3",
    "sec": "5.2",
    "kind": "lemma",
    "tier": "extra",
    "title": "Tail integral for nonnegative means",
    "oneLine": "A nonnegative value can be built from all the thresholds below it. Averaging those threshold indicators gives the area under the probability of exceeding each threshold.",
    "statement": "<p><b>Statement:</b> For any continuous non-negative random variable $X \\ge 0$ almost surely with survival function $S(x) = 1 - F(x) = P(X > x)$, its expectation can be evaluated by the <b>tail integral formula</b>:$$E[X] = \\int_0^\\infty P(X > x) \\, dx = \\int_0^\\infty [1 - F(x)] \\, dx$$More generally, for any $\\alpha > 0$, $E[X^\\alpha] = \\int_0^\\infty \\alpha x^{\\alpha-1} P(X > x) \\, dx$.</p><p><b>Mathematical terms:</b> $X \\ge 0$ is non-negative; $P(X > x)$ is the complementary CDF (tail probability / survival function); $\\alpha > 0$ is the moment exponent.</p><p><b>Reason:</b> Express the survival probability as an integral: $P(X > x) = \\int_x^\\infty f(t) dt = \\int_0^\\infty \\mathbf{1}_{\\{t > x\\}} f(t) dt$. Substituting this into $\\int_0^\\infty P(X > x) dx$ yields the double integral $\\int_0^\\infty \\int_0^\\infty \\mathbf{1}_{\\{0 < x < t\\}} f(t) dt \\, dx$. By Tonelli's theorem for non-negative integrands, reversing the order of integration gives $\\int_0^\\infty f(t) \\left(\\int_0^t 1 \\, dx\\right) dt = \\int_0^\\infty t f(t) dt = E[X]$.</p>",
    "intuition": "For a bus wait that cannot be negative, ask at each minute mark, “what is the chance I am still waiting?” Adding those chances over time gives the average wait.",
    "needs": [
      "c.prob.5.2.1"
    ],
    "traps": [
      "The one-sided formula requires nonnegativity; for signed $X$ include the negative tail."
    ],
    "proof": {
      "idea": "Build each nonnegative value as the area of its threshold flags.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a fixed nonnegative number x, the flag 1_{x>t} is 1 from t=0 up to x.",
          "m": "$$\\int_0^{\\infty}\\mathbf1_{\\{x>t\\}}\\,dt=x$$",
          "meaning": "The graph is a rectangle of height 1 and width x."
        },
        {
          "why": "Replace x by the random observed value X.",
          "m": "$$X=\\int_0^{\\infty}\\mathbf1_{\\{X>t\\}}\\,dt$$",
          "meaning": "The identity holds separately for every observation, including X=0."
        },
        {
          "why": "Average both sides.",
          "m": "$$E[X]=E\\left[\\int_0^{\\infty}\\mathbf1_{\\{X>t\\}}\\,dt\\right]$$",
          "meaning": "This asks for the average area of the random rectangle."
        },
        {
          "why": "Exchange averaging and accumulation of nonnegative layers.",
          "m": "$$E[X]=\\int_0^{\\infty}E[\\mathbf1_{\\{X>t\\}}]\\,dt$$",
          "meaning": "Tonelli’s theorem permits this even when the result is infinite; for a finite grid it is simply swapping two finite sums."
        },
        {
          "why": "A 0-or-1 flag averages to its success probability.",
          "m": "$$E[X]=\\int_0^{\\infty}P(X>t)\\,dt$$",
          "meaning": "The survival curve therefore has area equal to the mean."
        },
        {
          "why": "For a signed X with finite absolute mean, write X=X_+−X_- and apply the same argument twice.",
          "m": "$$E[X]=\\int_0^{\\infty}P(X>t)\\,dt-\\int_0^{\\infty}P(X<-t)\\,dt$$",
          "meaning": "The positive part exceeds t exactly when X>t; the negative part exceeds t exactly when X<−t."
        }
      ],
      "ends": "A nonnegative mean is area under the survival curve. For signed values, subtract the negative-tail area from the positive-tail area."
    },
    "cards": [
      {
        "q": "State the tail-integral formula for $X\\ge0$.",
        "a": "$E[X]=\\int_0^\\infty P(X>t)\\,dt$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.2, pp. 200–201; general identity stated here with standard positive/negative-part extension (PDF pp. 200–201)."
  },
  {
    "id": "c.prob.5.3.1",
    "sec": "5.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Uniform distribution on an interval",
    "oneLine": "Uniform means equal-length intervals inside the allowed range have equal probability. Divide the length of the part you want by the full interval length.",
    "statement": "<p><b>Statement:</b> A continuous random variable $X$ is <b>uniformly distributed</b> on the interval $(\\alpha, \\beta)$ with $\\alpha < \\beta$ ($X \\sim \\operatorname{Uniform}(\\alpha, \\beta)$) if its PDF is constant over the interval and zero elsewhere:$$f(x) = \\frac{1}{\\beta - \\alpha}, \\quad x \\in (\\alpha, \\beta)$$</p><p>Its cumulative distribution function is $F(x) = 0$ for $x \\le \\alpha$, $F(x) = \\frac{x - \\alpha}{\\beta - \\alpha}$ for $\\alpha < x < \\beta$, and $F(x) = 1$ for $x \\ge \\beta$. For any sub-interval $[c, d] \\subseteq [\\alpha, \\beta]$, $P(c \\le X \\le d) = \\frac{d - c}{\\beta - \\alpha}$.</p><p><b>Mathematical terms:</b> $\\alpha, \\beta$ are the interval endpoints; $\\beta - \\alpha$ is the interval length; $f(x) = \\frac{1}{\\beta-\\alpha}$ is the constant height; $\\frac{d-c}{\\beta-\\alpha}$ is the length proportion.</p><p><b>Reason:</b> Uniformity means that any sub-interval of given length has probability proportional only to its length, so the density must be constant: $f(x) = c$. Total normalization requires $\\int_\\alpha^\\beta c \\, dx = c(\\beta - \\alpha) = 1$, forcing the unique constant density $c = \\frac{1}{\\beta - \\alpha}$. Integrating $f(t)$ from $\\alpha$ to $x$ yields $F(x) = \\int_\\alpha^x \\frac{1}{\\beta-\\alpha} dt = \\frac{x-\\alpha}{\\beta-\\alpha}$.</p>",
    "intuition": "For a spinner equally likely to land anywhere along a ruler from a to b, a 2-inch section is twice as likely as a 1-inch section. Uniform means exactly this equal-chance-per-equal-length idea.",
    "needs": [
      "c.prob.5.1.1"
    ],
    "traps": [
      "Clip intervals to the support before dividing by $b-a$.",
      "The uniform assumption depends on a sampling mechanism; “random” by itself does not imply uniformity."
    ],
    "proof": {
      "idea": "Use rectangle areas to derive the continuous uniform distribution.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume a<b and a constant density c on (a,b), zero elsewhere.",
          "m": "$$f(x)=c\\quad(a<x<b)$$",
          "meaning": "A uniform model assigns equal area, hence equal probability, to equal-length intervals inside its support."
        },
        {
          "why": "The full probability is a rectangle of width b−a and height c.",
          "m": "$$c(b-a)=1$$",
          "meaning": "The total area under every density must be 1."
        },
        {
          "why": "Divide by the positive interval width.",
          "m": "$$c=\\frac1{b-a}$$",
          "meaning": "A longer support therefore needs a lower density height."
        },
        {
          "why": "For a<x<b, the area up to x has width x−a.",
          "m": "$$F(x)=c(x-a)=\\frac{x-a}{b-a}$$",
          "meaning": "The CDF is the fraction of the support’s length already covered."
        },
        {
          "why": "At x≤a there is no accumulated area; at x≥b there is all the area.",
          "m": "$$F(x)=0\\ (x\\le a),\\quad F(x)=1\\ (x\\ge b)$$",
          "meaning": "Endpoints carry zero probability because individual points have zero width."
        },
        {
          "why": "For any requested interval, retain only its overlap with (a,b).",
          "m": "$$P(c_1<X<c_2)=\\frac{\\max(0,\\min(c_2,b)-\\max(c_1,a))}{b-a}$$",
          "meaning": "The numerator is the overlap length, assumed c_1<c_2."
        }
      ],
      "ends": "Uniform interval probabilities follow from ordinary rectangle geometry."
    },
    "cards": [
      {
        "q": "State the density and CDF of $\\operatorname{Unif}(a,b)$.",
        "a": "$f=1/(b-a)$ on $(a,b)$; $F=0$ below $a$, $(x-a)/(b-a)$ inside, and $1$ at/above $b$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.3, pp. 203–206 (PDF pp. 203–206)."
  },
  {
    "id": "c.prob.5.3.2",
    "sec": "5.3",
    "kind": "corollary",
    "tier": "core",
    "title": "Uniform mean and variance",
    "oneLine": "A uniform distribution balances at the midpoint of its interval. Its spread depends on the interval length, not where the interval starts.",
    "statement": "<p><b>Statement:</b> For $X \\sim \\operatorname{Uniform}(\\alpha, \\beta)$, the expectation, second moment, and variance are:$$E[X] = \\frac{\\alpha + \\beta}{2}, \\qquad E[X^2] = \\frac{\\alpha^2 + \\alpha\\beta + \\beta^2}{3}, \\qquad \\operatorname{Var}(X) = \\frac{(\\beta - \\alpha)^2}{12}$$and the standard deviation is $\\operatorname{SD}(X) = \\frac{\\beta - \\alpha}{\\sqrt{12}}$.</p><p><b>Mathematical terms:</b> $\\frac{\\alpha+\\beta}{2}$ is the interval midpoint; $\\beta - \\alpha$ is the range width; $\\frac{(\\beta-\\alpha)^2}{12}$ is the universal continuous uniform variance.</p><p><b>Reason:</b> By definition: $E[X] = \\int_\\alpha^\\beta x \\frac{1}{\\beta-\\alpha} dx = \\frac{1}{\\beta-\\alpha} \\left[\\frac{x^2}{2}\\right]_\\alpha^\\beta = \\frac{\\beta^2 - \\alpha^2}{2(\\beta-\\alpha)} = \\frac{\\alpha+\\beta}{2}$. The second moment is $E[X^2] = \\int_\\alpha^\\beta x^2 \\frac{1}{\\beta-\\alpha} dx = \\frac{\\beta^3 - \\alpha^3}{3(\\beta-\\alpha)} = \\frac{\\alpha^2 + \\alpha\\beta + \\beta^2}{3}$. Subtracting $(E[X])^2 = \\frac{\\alpha^2 + 2\\alpha\\beta + \\beta^2}{4}$ gives $\\frac{4(\\alpha^2+\\alpha\\beta+\\beta^2) - 3(\\alpha^2+2\\alpha\\beta+\\beta^2)}{12} = \\frac{\\alpha^2 - 2\\alpha\\beta + \\beta^2}{12} = \\frac{(\\beta-\\alpha)^2}{12}$.</p>",
    "intuition": "A uniform spinner from a to b balances at the midpoint. Making the ruler wider increases spread; sliding the ruler without widening it does not.",
    "needs": [
      "c.prob.5.3.1",
      "c.prob.5.2.2"
    ],
    "traps": [
      "The variance uses the interval width $b-a$, not either endpoint by itself."
    ],
    "proof": {
      "idea": "Integrate a constant-density weighted average and evaluate every endpoint.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let L=b−a>0, so a uniform density has height 1/L.",
          "m": "$$E[X]=\\frac1L\\int_a^b x\\,dx$$",
          "meaning": "This is the continuous weighted-average rule, not an unweighted area average."
        },
        {
          "why": "The derivative of x²/2 is x, so it is an antiderivative.",
          "m": "$$\\int_a^bx\\,dx=\\frac{b^2-a^2}{2}$$",
          "meaning": "A definite integral equals the antiderivative at the upper endpoint minus its value at the lower; this is the fundamental theorem of calculus."
        },
        {
          "why": "Factor b²−a² and cancel L=b−a.",
          "m": "$$E[X]=\\frac{(b-a)(b+a)}{2(b-a)}=\\frac{a+b}2$$",
          "meaning": "The mean is the midpoint μ."
        },
        {
          "why": "Set u=x−μ; the centered interval runs from −L/2 to L/2.",
          "m": "$$\\operatorname{Var}(X)=\\frac1L\\int_{-L/2}^{L/2}u^2\\,du$$",
          "meaning": "Translation changes neither widths nor the constant density."
        },
        {
          "why": "The derivative of u³/3 is u²; evaluate at both endpoints.",
          "m": "$$\\int_{-L/2}^{L/2}u^2\\,du=\\frac{(L/2)^3-(-L/2)^3}{3}=\\frac{L^3}{12}$$",
          "meaning": "Cubing a negative number keeps its negative sign, so subtraction doubles (L/2)³."
        },
        {
          "why": "Divide the squared-deviation area by L.",
          "m": "$$\\operatorname{Var}(X)=\\frac{L^3}{12L}=\\frac{(b-a)^2}{12}$$",
          "meaning": "This result depends on width alone and is positive for a nondegenerate interval."
        }
      ],
      "ends": "The uniform mean is (a+b)/2 and variance is (b−a)²/12; the integral evaluations use the power rule from elementary calculus."
    },
    "cards": [
      {
        "q": "Give $E[X]$ and $\\operatorname{Var}(X)$ for $X\\sim\\operatorname{Unif}(a,b)$.",
        "a": "$E[X]=(a+b)/2$ and $\\operatorname{Var}(X)=(b-a)^2/12$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.3, pp. 204–205 (PDF pp. 204–205)."
  },
  {
    "id": "c.prob.5.4.1",
    "sec": "5.4",
    "kind": "definition",
    "tier": "core",
    "title": "Normal law and standardization",
    "oneLine": "A normal curve is a bell-shaped model. The mean locates its center and the standard deviation sets its width. Subtract the center and divide by the width to use the standard normal table.",
    "statement": "<p><b>Statement:</b> A random variable $X$ has a <b>Normal (Gaussian) distribution</b> with parameters $\\mu \\in \\mathbb{R}$ and $\\sigma^2 > 0$ ($X \\sim \\mathcal{N}(\\mu, \\sigma^2)$) if its PDF is:$$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right), \\quad x \\in \\mathbb{R}$$The <b>standard normal</b> random variable $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$ has PDF $\\phi(z) = \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2}$ and CDF $\\Phi(z) = \\int_{-\\infty}^z \\phi(t) \\, dt$, satisfying symmetry $\\Phi(-z) = 1 - \\Phi(z)$.</p><p><b>Mathematical terms:</b> $\\mu \\in \\mathbb{R}$ is the location (mean); $\\sigma > 0$ is the scale (standard deviation); $\\phi(z)$ is the standard normal density; $\\Phi(z)$ is the standard normal CDF; $Z = \\frac{X-\\mu}{\\sigma}$ is the standard score ($z$-score).</p><p><b>Reason:</b> Evaluating the Gaussian integral $\\int_{-\\infty}^\\infty e^{-z^2/2} dz = \\sqrt{2\\pi}$ using polar coordinates $(r, \\theta)$ establishes that $\\phi(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$ integrates to 1. The Bell curve is strictly symmetric about $\\mu$, meaning $f(\\mu - x) = f(\\mu + x)$. This symmetry forces $\\Phi(-z) = P(Z \\le -z) = P(Z \\ge z) = 1 - \\Phi(z)$. Standardizing any $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ maps $P(a \\le X \\le b) = \\Phi(\\frac{b-\\mu}{\\sigma}) - \\Phi(\\frac{a-\\mu}{\\sigma})$.</p>",
    "intuition": "A normal distribution is a bell-shaped score chart, centered at the average. The standard deviation is a typical step away from that center; a z-score tells how many such steps a score sits from average.",
    "needs": [
      "c.prob.5.2.2"
    ],
    "traps": [
      "The second parameter is variance; use $\\sigma=\\sqrt{\\sigma^2}$ in the denominator.",
      "For upper tails use $1-\\Phi(z)$; the normal curve is symmetric around its mean."
    ],
    "cards": [
      {
        "q": "How do you standardize $X\\sim N(\\mu,\\sigma^2)$?",
        "a": "$Z=(X-\\mu)/\\sigma$ is standard normal, where $\\sigma=\\sqrt{\\sigma^2}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.4, pp. 207–215 (PDF pp. 207–215).",
    "proof": {
      "idea": "Derive the Gaussian normalizer and the change to standard-normal coordinates.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Begin with the positive bell-shaped function exp(−z²/2), and call its total area I.",
          "m": "$$I=\\int_{-\\infty}^{\\infty}e^{-z^2/2}dz$$",
          "meaning": "Comparing its tails to e^(−|z|/2) shows the area is finite; the factor needed for a density will be 1/I."
        },
        {
          "why": "Multiply two identical area integrals and use nonnegative iterated integration.",
          "m": "$$I^2=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)/2}dx\\,dy$$",
          "meaning": "Tonelli’s theorem justifies this product-to-plane integral."
        },
        {
          "why": "Use polar coordinates x=r cos θ,y=r sin θ, so x²+y²=r².",
          "m": "$$dx\\,dy=r\\,dr\\,d\\theta,\\quad r\\ge0,\\ 0\\le\\theta<2\\pi$$",
          "meaning": "The factor r is the polar Jacobian: differentiating gives determinant r(cos²θ+sin²θ)=r. The geometry uses Pythagoras; the integral change uses multivariable calculus."
        },
        {
          "why": "Evaluate the radial integral using the derivative of −exp(−r²/2).",
          "m": "$$I^2=\\int_0^{2\\pi}d\\theta\\int_0^{\\infty}re^{-r^2/2}dr=2\\pi\\cdot1$$",
          "meaning": "The inner endpoint difference is 0−(−1)=1."
        },
        {
          "why": "The original area is positive, so take its positive square root.",
          "m": "$$I=\\sqrt{2\\pi},\\quad\\phi(z)=\\frac{e^{-z^2/2}}{\\sqrt{2\\pi}}$$",
          "meaning": "This derives the standard-normal normalizing constant."
        },
        {
          "why": "For X=μ+σZ with σ>0, the inverse coordinate is z=(x−μ)/σ and its slope is 1/σ.",
          "m": "$$f_X(x)=\\frac1\\sigma\\phi\\left(\\frac{x-\\mu}{\\sigma}\\right)=\\frac{e^{-(x-\\mu)^2/(2\\sigma^2)}}{\\sigma\\sqrt{2\\pi}}$$",
          "meaning": "The inverse stretch divides density height by σ so probability areas stay unchanged."
        },
        {
          "why": "Translate a cutoff using positive σ.",
          "m": "$$P(X\\le x)=P\\left(Z\\le\\frac{x-\\mu}{\\sigma}\\right)=\\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)$$",
          "meaning": "Φ denotes the accumulated standard-normal density; the standardization reverses the location and scale changes."
        }
      ],
      "ends": "Standardization is algebra; the bell curve’s sqrt(2π) normalization requires a two-dimensional integral, whose coordinate and endpoint steps are shown."
    }
  },
  {
    "id": "c.prob.5.4.2",
    "sec": "5.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Normal mean, variance and affine images",
    "oneLine": "Shifting or stretching a normal variable produces another normal variable. Change the mean in the same way; multiply the variance by the square of the stretch.",
    "statement": "<p><b>Statement:</b> For $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$:<br>(1) $E[X] = \\mu$ and $\\operatorname{Var}(X) = \\sigma^2$.<br>(2) Any affine transformation $Y = aX + b$ (with $a \\ne 0$) remains strictly normally distributed:$$Y = aX + b \\sim \\mathcal{N}\\left(a\\mu + b, \\, a^2\\sigma^2\\right)$$</p><p><b>Mathematical terms:</b> Affine transformation $aX + b$; location shifts by $b$ and scales by $a$; variance scales by $a^2$; closure under affine maps is a defining property of the Gaussian family.</p><p><b>Reason:</b> Standardize $X = \\mu + \\sigma Z$ with $Z \\sim \\mathcal{N}(0, 1)$. Then $Y = a(\\mu + \\sigma Z) + b = (a\\mu + b) + (|a|\\sigma) Z^\\prime$, where $Z^\\prime = \\operatorname{sgn}(a)Z$. By symmetry, $-Z$ has the identical distribution to $Z$, so $Z^\\prime \\sim \\mathcal{N}(0, 1)$. Because $Y$ is a linear function of a standard normal with coefficient $|a|\\sigma$ and shift $a\\mu+b$, its PDF retains the exact Gaussian functional form with mean $a\\mu+b$ and variance $a^2\\sigma^2$.</p>",
    "intuition": "If every score in a bell-shaped class is shifted or stretched, its average shifts or stretches too. A stretch by 3 makes distances 3 times bigger and variance (squared spread) 9 times bigger.",
    "needs": [
      "c.prob.5.4.1"
    ],
    "traps": [
      "The variance becomes $a^2\\sigma^2$, even when $a<0$."
    ],
    "proof": {
      "idea": "Compute standard-normal moments and then handle positive, negative and zero scales.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Write φ(z)=exp(−z²/2)/sqrt(2π) for the standard-normal density.",
          "m": "$$Z\\sim N(0,1),\\quad \\phi(-z)=\\phi(z)$$",
          "meaning": "Its normalization is derived in the standardization note; the symmetry follows by squaring −z."
        },
        {
          "why": "The weighted values at z and −z cancel in the mean integral.",
          "m": "$$E[Z]=\\int_{-\\infty}^{\\infty}z\\phi(z)\\,dz=0$$",
          "meaning": "The integral is absolutely convergent because Gaussian tails decay faster than powers."
        },
        {
          "why": "Differentiate the exponential by the chain rule.",
          "m": "$$\\phi'(z)=-z\\phi(z)$$",
          "meaning": "The chain rule multiplies by the derivative of −z²/2, namely −z."
        },
        {
          "why": "Substitute that derivative into the second-moment integral and integrate by parts.",
          "m": "$$E[Z^2]= -\\int z\\phi'(z)\\,dz=[-z\\phi(z)]_{-\\infty}^{\\infty}+\\int\\phi(z)\\,dz=1$$",
          "meaning": "Integration by parts follows by integrating (uv)'=u'v+uv'; the boundary term vanishes by Gaussian decay and the final integral is 1."
        },
        {
          "why": "Since X=μ+σZ with σ>0, apply the affine mean and variance rules.",
          "m": "$$E[X]=\\mu,\\quad\\operatorname{Var}(X)=\\sigma^2$$",
          "meaning": "The standard moments just computed are 0 and 1."
        },
        {
          "why": "For Y=aX+b, rewrite it in the same standard-normal form.",
          "m": "$$Y=a\\mu+b+a\\sigma Z$$",
          "meaning": "For a>0 this is a normal with center aμ+b and standard deviation aσ."
        },
        {
          "why": "If a<0 use the density symmetry, so −Z has the same law as Z.",
          "m": "$$a\\sigma Z=|a|\\sigma(-Z)\\quad(a<0)$$",
          "meaning": "A negative stretch reflects the symmetric curve and gives positive standard deviation |a|σ."
        },
        {
          "why": "For a≠0 read off the variance; for a=0 all values equal b.",
          "m": "$$Y\\sim N(a\\mu+b,a^2\\sigma^2)\\ (a\\ne0),\\quad Y=b\\ (a=0)$$",
          "meaning": "The zero-scale case is a constant distribution, treated separately from a positive-width density."
        }
      ],
      "ends": "Normal moments come from symmetry and one integration-by-parts calculation; all affine images are now covered."
    },
    "cards": [
      {
        "q": "State the law of $aX+b$ when $X\\sim N(\\mu,\\sigma^2)$.",
        "a": "$aX+b\\sim N(a\\mu+b,a^2\\sigma^2)$ (degenerate at $b$ if $a=0$).",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.4, pp. 208–211 (PDF pp. 208–211)."
  },
  {
    "id": "c.prob.5.4.3",
    "sec": "5.4",
    "kind": "technique",
    "tier": "core",
    "title": "Normal approximation to a binomial",
    "oneLine": "A binomial counts successes. When both expected successes and expected failures are sufficiently numerous, a normal curve can approximate its bars. Move integer boundaries by half a unit to include whole bars.",
    "statement": "<p><b>Statement:</b> The <b>De Moivre-Laplace Limit Theorem</b> states that for $S_n \\sim \\operatorname{Binomial}(n, p)$, as $n \\to \\infty$ with $p \\in (0, 1)$ fixed, the standardized binomial converges in distribution to the standard normal:$$Z_n = \\frac{S_n - np}{\\sqrt{np(1-p)}} \\xrightarrow{d} \\mathcal{N}(0, 1)$$In practical computation, the <b>continuity correction</b> accounts for discrete integer steps: $P(a \\le S_n \\le b) \\approx \\Phi\\left(\\frac{b + 0.5 - np}{\\sqrt{np(1-p)}}\\right) - \\Phi\\left(\\frac{a - 0.5 - np}{\\sqrt{np(1-p)}}\\right)$.</p><p><b>Mathematical terms:</b> $S_n$ is the binomial count; $np$ is the mean; $\\sqrt{np(1-p)}$ is the standard deviation; $\\pm 0.5$ is the continuity correction adjusting discrete histogram bars to continuous area.</p><p><b>Reason:</b> Represent $S_n = \\sum_{i=1}^n I_i$ as the sum of $n$ independent and identically distributed Bernoulli variables. By Stirling's approximation $n! \\sim \\sqrt{2\\pi n}(n/e)^n$, the discrete histogram rectangles $\\binom{n}{k}p^k(1-p)^{n-k}$ converge pointwise to the Gaussian bell curve $\\phi(z)$. Because a discrete integer $k$ corresponds to the continuous interval $[k - 0.5, k + 0.5]$, the continuity correction integrates the density over $[a - 0.5, b + 0.5]$, drastically reducing approximation error.</p>",
    "intuition": "If a student answers many independent true/false questions, the number right is a binomial count. When expected right and wrong answers are both plentiful, a bell curve is a handy approximation; the half-step adjustment centers each whole-number bar.",
    "needs": [
      "c.prob.5.4.1"
    ],
    "traps": [
      "Do not omit the $0.5$ adjustment for a count event.",
      "Poorly balanced $p$ or small expected counts can make the approximation inaccurate."
    ],
    "cards": [
      {
        "q": "What normal law approximates $\\operatorname{Bin}(n,p)$, and why use $0.5$?",
        "a": "Use $N(np,np(1-p))$ when both expected counts are sufficiently large; the $0.5$ correction maps integer bars to continuous intervals.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.4.1, pp. 213–215 (PDF pp. 213–215).",
    "proof": {
      "idea": "Derive the approximating center and spread from Bernoulli trials and explain the half-unit boundary.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For B~Bin(n,p) with 0<p<1, write B as a sum of iid success flags.",
          "m": "$$B=\\sum_{i=1}^nI_i$$",
          "meaning": "Each flag has mean p and variance p(1−p)."
        },
        {
          "why": "Add the flag moments using independence for the variance.",
          "m": "$$E[B]=np,\\quad\\operatorname{Var}(B)=np(1-p)$$",
          "meaning": "These moments were derived in the binomial note."
        },
        {
          "why": "The CLT standardizes the sum by subtracting its mean and dividing by its standard deviation.",
          "m": "$$Z=\\frac{B-np}{\\sqrt{np(1-p)}}\\approx N(0,1)$$",
          "meaning": "This is a large-n approximation for fixed p, not an exact finite-sample law."
        },
        {
          "why": "Translate a cutoff back to the standard-normal scale.",
          "m": "$$P(B\\le k)\\approx\\Phi\\left(\\frac{k-np}{\\sqrt{np(1-p)}}\\right)$$",
          "meaning": "The denominator is spread of the count, not spread of a single trial."
        },
        {
          "why": "To represent integer mass at k as a continuous bar, allocate the interval from k−1/2 to k+1/2.",
          "m": "$$P(B\\le k)\\approx\\Phi\\left(\\frac{k+1/2-np}{\\sqrt{np(1-p)}}\\right)$$",
          "meaning": "The shifted upper boundary includes the entire bar centered at k; this continuity correction is a geometric approximation, not an identity."
        },
        {
          "why": "Expected successes np and failures n(1−p) should both be reasonably numerous.",
          "m": "$$np\\text{ and }n(1-p)\\text{ large}$$",
          "meaning": "Extreme p and small samples can produce strong skewness; the CLT alone gives no guaranteed finite-n accuracy."
        }
      ],
      "ends": "The binomial normal approximation uses its derived mean and variance; half-unit boundary changes align integer bars with continuous area."
    }
  },
  {
    "id": "c.prob.5.5.1",
    "sec": "5.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Exponential lifetime and memorylessness",
    "oneLine": "An exponential variable models a waiting time with a constant failure rate. If it has lasted until now, its remaining waiting time has the same distribution as a fresh wait.",
    "statement": "<p><b>Statement:</b> A random variable $X$ has an <b>Exponential distribution</b> with rate parameter $\\lambda > 0$ ($X \\sim \\operatorname{Exponential}(\\lambda)$) if its PDF and CDF are:$$f(x) = \\lambda e^{-\\lambda x}, \\quad F(x) = 1 - e^{-\\lambda x}, \\quad x \\ge 0$$The survival function is $P(X > t) = e^{-\\lambda t}$. The exponential is the unique continuous distribution possessing the <b>memoryless property</b>: for all $s, t \\ge 0$,$$P(X > s + t \\mid X > s) = P(X > t)$$Its mean and variance are $E[X] = \\frac{1}{\\lambda}$ and $\\operatorname{Var}(X) = \\frac{1}{\\lambda^2}$.</p><p><b>Mathematical terms:</b> $\\lambda > 0$ is the failure rate; $e^{-\\lambda t}$ is the tail survival probability; memorylessness means elapsed survival time $s$ does not age the item.</p><p><b>Reason:</b> Evaluating the conditional survival probability: $P(X > s + t \\mid X > s) = \\frac{P(X > s + t \\cap X > s)}{P(X > s)} = \\frac{P(X > s + t)}{P(X > s)} = \\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = e^{-\\lambda t} = P(X > t)$. Cauchy's functional equation $g(s+t) = g(s)g(t)$ on $[0, \\infty)$ for right-continuous probabilities forces $g(t) = e^{-\\lambda t}$, proving uniqueness. Integrating $t \\lambda e^{-\\lambda t}$ by parts yields $E[X] = 1/\\lambda$ and $E[X^2] = 2/\\lambda^2$, giving $\\operatorname{Var}(X) = 2/\\lambda^2 - 1/\\lambda^2 = 1/\\lambda^2$.</p>",
    "intuition": "A light bulb with an exponential lifetime has a steady chance of failing in the next short period, regardless of its age. So after surviving 10 hours, its remaining-life chances are like a new bulb’s.",
    "needs": [
      "c.prob.5.1.1",
      "c.prob.5.2.1"
    ],
    "traps": [
      "Some texts parameterize by mean; here $\\lambda$ is rate, so the mean is $1/\\lambda$.",
      "Memorylessness is special to the exponential among continuous lifetime laws."
    ],
    "proof": {
      "idea": "Evaluate the survival integral, cancel conditional survival factors, and derive moments by parts.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For λ>0, the exponential density is λexp(−λx) on x≥0.",
          "m": "$$\\int_t^{\\infty}\\lambda e^{-\\lambda x}dx=[-e^{-\\lambda x}]_t^{\\infty}=e^{-\\lambda t}$$",
          "meaning": "The antiderivative follows because differentiating −e^(−λx) gives λe^(−λx); at infinity the exponential tends to zero."
        },
        {
          "why": "The event of surviving s+t is contained in the event of surviving s.",
          "m": "$$P(X>s+t\\mid X>s)=\\frac{P(X>s+t)}{P(X>s)}$$",
          "meaning": "The intersection in the conditional-probability numerator is the smaller event."
        },
        {
          "why": "Insert survival probabilities and apply the exponent addition rule.",
          "m": "$$\\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}}=e^{-\\lambda t}=P(X>t)$$",
          "meaning": "The past-survival factor cancels; this is memorylessness for s,t≥0."
        },
        {
          "why": "For the mean, integrate x times the density by parts with u=x and dv=λe^(−λx)dx.",
          "m": "$$E[X]=[-xe^{-\\lambda x}]_0^{\\infty}+\\int_0^{\\infty}e^{-\\lambda x}dx$$",
          "meaning": "The product derivative rule gives integration by parts; x times exponential decay has zero boundary limit."
        },
        {
          "why": "Evaluate the remaining exponential integral.",
          "m": "$$E[X]=[-e^{-\\lambda x}/\\lambda]_0^{\\infty}=1/\\lambda$$",
          "meaning": "A larger rate gives a shorter expected wait."
        },
        {
          "why": "For the second moment use u=x² in the same calculation.",
          "m": "$$E[X^2]=[-x^2e^{-\\lambda x}]_0^{\\infty}+2\\int_0^{\\infty}xe^{-\\lambda x}dx=2/\\lambda^2$$",
          "meaning": "The last integral is E[X]/λ from the mean formula."
        },
        {
          "why": "Subtract the squared mean.",
          "m": "$$\\operatorname{Var}(X)=2/\\lambda^2-(1/\\lambda)^2=1/\\lambda^2$$",
          "meaning": "Both mean and second moment are finite by exponential tail decay."
        }
      ],
      "ends": "The exponential survival is e^(−λt), its remaining wait is memoryless, and its mean and variance are 1/λ and 1/λ²."
    },
    "cards": [
      {
        "q": "State the exponential survival function and memoryless identity.",
        "a": "$P(X>t)=e^{-\\lambda t}$; $P(X>s+t\\mid X>s)=e^{-\\lambda t}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.5, pp. 216–220 (PDF pp. 216–220)."
  },
  {
    "id": "c.prob.5.5.2",
    "sec": "5.5",
    "kind": "definition",
    "tier": "core",
    "title": "Hazard rate",
    "oneLine": "The hazard describes the risk of failure per unit time among items still working. A high hazard after a given age means the survivors are then more likely to fail soon.",
    "statement": "<p><b>Statement:</b> For a continuous non-negative lifetime $X$ with PDF $f(t)$ and survival function $S(t) = P(X > t) > 0$, the <b>hazard rate</b> (failure rate function) $h(t)$ is defined by:$$h(t) = \\lim_{\\Delta t \\downarrow 0} \\frac{P(t < X \\le t + \\Delta t \\mid X > t)}{\\Delta t} = \\frac{f(t)}{S(t)} = -\\frac{d}{dt} \\ln S(t)$$The survival function is completely recovered from the hazard function by:$$S(t) = \\exp\\left(-\\int_0^t h(u) \\, du\\right), \\quad t \\ge 0$$where $H(t) = \\int_0^t h(u) \\, du$ is the <b>cumulative hazard function</b>.</p><p><b>Mathematical terms:</b> $h(t)$ is the instantaneous hazard rate (risk per unit time); $S(t) = 1 - F(t)$ is survival; $H(t) = \\int_0^t h(u)du$ is cumulative hazard; $f(t) = h(t) \\exp(-\\int_0^t h(u)du)$.</p><p><b>Reason:</b> The conditional probability of failure in $(t, t+\\Delta t]$ given survival up to $t$ is $\\frac{F(t+\\Delta t) - F(t)}{S(t)} \\approx \\frac{f(t)\\Delta t}{S(t)}$. Dividing by $\\Delta t$ yields $h(t) = f(t)/S(t)$. Since $f(t) = -S^\\prime(t)$, this is the differential equation $h(t) = -S^\\prime(t)/S(t) = -\\frac{d}{dt}\\ln S(t)$. Integrating both sides over $[0, t]$ with initial condition $S(0) = 1$ gives $\\ln S(t) - \\ln S(0) = -\\int_0^t h(u) du$, and exponentiating yields $S(t) = \\exp(-\\int_0^t h(u) du)$.</p>",
    "intuition": "Hazard means the current failure pace among items that have survived so far. For example, a hazard of 0.02 per hour means about a 2% failure chance in the next hour when the interval is short.",
    "needs": [
      "c.prob.5.1.1"
    ],
    "traps": [
      "Hazard is conditional on survival to $t$; it is not the unconditional density.",
      "A constant hazard $\\lambda$ produces the exponential survival law."
    ],
    "cards": [
      {
        "q": "Define hazard rate and relate it to survival.",
        "a": "$h(t)=f(t)/S(t)$ where $S(t)=P(X>t)$; then $S(t)=\\exp(-\\int_0^t h(u)du)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.5.1, pp. 220–221 (PDF pp. 220–221).",
    "proof": {
      "idea": "Derive hazard from a conditional short-interval failure probability and solve for survival.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a nonnegative density lifetime define survival S(t)=P(X>t)=1−F(t).",
          "m": "$$S'(t)=-f(t)$$",
          "meaning": "The CDF derivative is f where valid, so differentiating 1−F gives the negative density."
        },
        {
          "why": "Among items surviving t, failure in the next Δ time units has conditional chance.",
          "m": "$$P(t<X\\le t+\\Delta\\mid X>t)=\\frac{\\int_t^{t+\\Delta}f(u)du}{S(t)}$$",
          "meaning": "The numerator event is contained in the survival event; assume S(t)>0."
        },
        {
          "why": "Divide by Δ and shrink it at a continuity point of f.",
          "m": "$$h(t)=\\lim_{\\Delta\\downarrow0}\\frac{P(t<X\\le t+\\Delta\\mid X>t)}\\Delta=\\frac{f(t)}{S(t)}$$",
          "meaning": "Hazard is failure probability per small unit of time among survivors, not a probability at one exact time."
        },
        {
          "why": "Combine this ratio with the survival derivative.",
          "m": "$$\\frac{S'(t)}{S(t)}=-h(t)$$",
          "meaning": "The derivative of log S is S'/S while S>0."
        },
        {
          "why": "Integrate from 0 to t and use S(0)=1 for a nonnegative density lifetime.",
          "m": "$$\\log S(t)-\\log S(0)=-\\int_0^th(u)du$$",
          "meaning": "The fundamental theorem of calculus integrates the log derivative; assume locally integrable hazard while survival remains positive."
        },
        {
          "why": "Exponentiate both sides.",
          "m": "$$S(t)=\\exp\\left[-\\int_0^th(u)du\\right]$$",
          "meaning": "This derives the survival formula with the correct integration condition."
        },
        {
          "why": "For constant h(t)=λ>0 the integral is λt.",
          "m": "$$S(t)=e^{-\\lambda t}$$",
          "meaning": "Constant hazard therefore gives exponential survival."
        }
      ],
      "ends": "Hazard is the conditional failure rate per unit time; integrating it recovers survival until the survival probability reaches zero."
    }
  },
  {
    "id": "c.prob.5.6.1",
    "sec": "5.6",
    "kind": "definition",
    "tier": "core",
    "title": "Gamma, beta and Weibull families",
    "oneLine": "Different continuous families describe different shapes: gamma for positive waiting times, beta for proportions between 0 and 1, and Weibull for lifetimes whose failure risk may change with age.",
    "statement": "<p><b>Statement:</b> Three standard continuous parametric families generalize the exponential distribution:<br>(1) <b>Gamma:</b> $X \\sim \\operatorname{Gamma}(\\alpha, \\lambda)$ with shape $\\alpha > 0$, rate $\\lambda > 0$, PDF $f(x) = \\frac{\\lambda^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\lambda x}$ ($x > 0$), mean $\\alpha/\\lambda$, variance $\\alpha/\\lambda^2$.<br>(2) <b>Beta:</b> $X \\sim \\operatorname{Beta}(a, b)$ on $(0, 1)$ with PDF $f(x) = \\frac{1}{B(a, b)} x^{a-1} (1-x)^{b-1}$, mean $\\frac{a}{a+b}$, variance $\\frac{ab}{(a+b)^2(a+b+1)}$.<br>(3) <b>Weibull:</b> $X \\sim \\operatorname{Weibull}(\\alpha, \\beta)$ with hazard $h(t) = \\alpha \\beta t^{\\beta-1}$ and survival $S(t) = e^{-\\alpha t^\\beta}$ ($t > 0$).</p><p><b>Mathematical terms:</b> $\\Gamma(\\alpha) = \\int_0^\\infty u^{\\alpha-1}e^{-u}du$ is the Gamma function; $B(a, b) = \\frac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)}$ is the Beta function; $\\beta$ in Weibull controls aging (wear-out if $\\beta > 1$, infant mortality if $\\beta < 1$, memoryless if $\\beta = 1$).</p><p><b>Reason:</b> The Gamma distribution represents the sum of $\\alpha$ independent $\\operatorname{Exponential}(\\lambda)$ lifetimes when $\\alpha \\in \\mathbb{N}$ (Erlang distribution), with normalization constant provided by Euler's Gamma integral. The Beta distribution provides the conjugate prior for binomial proportions on $(0, 1)$. The Weibull distribution generalizes the exponential by allowing the hazard rate to vary as a power law $h(t) \\propto t^{\\beta-1}$, modeling progressive mechanical wear-out or fatigue.</p>",
    "intuition": "A gamma model can describe a wait made of several stages, a beta model can describe a fraction like the share of a budget, and Weibull can describe bulbs whose failure pace changes with age.",
    "needs": [
      "c.prob.5.1.1"
    ],
    "traps": [
      "Check whether a source uses rate or scale for gamma/Weibull parameters.",
      "Gamma shape 1 is exponential with matching rate."
    ],
    "cards": [
      {
        "q": "What support does gamma, beta and Weibull use?",
        "a": "Gamma and Weibull are supported on $x>0$; beta is supported on $0<x<1$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.6.1, §5.6.2 and §5.6.4, pp. 222–227 (PDF pp. 222–227).",
    "proof": {
      "idea": "Define the gamma and beta integrals, derive their relation, and differentiate Weibull survival.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a>0 define the gamma integral; for a,b>0 define the beta integral.",
          "m": "$$\\Gamma(a)=\\int_0^{\\infty}t^{a-1}e^{-t}dt,\\quad B(a,b)=\\int_0^1v^{a-1}(1-v)^{b-1}dv$$",
          "meaning": "These are names for positive finite areas; the parameter conditions ensure integrability at the endpoints."
        },
        {
          "why": "In a gamma-rate density put t=λx, so dx=dt/λ.",
          "m": "$$\\int_0^{\\infty}\\frac{\\lambda^a x^{a-1}e^{-\\lambda x}}{\\Gamma(a)}dx=\\frac1{\\Gamma(a)}\\int_0^{\\infty}t^{a-1}e^{-t}dt=1$$",
          "meaning": "Powers of λ cancel, deriving the gamma normalizing constant for λ>0."
        },
        {
          "why": "Integrate t^a e^(−t) by parts; the boundary term vanishes for a>0.",
          "m": "$$\\Gamma(a+1)=a\\Gamma(a),\\quad\\Gamma(1)=1$$",
          "meaning": "Repetition gives Γ(n)=(n−1)! for positive integers, and gives gamma moments E[X]=a/λ, E[X²]=a(a+1)/λ², Var(X)=a/λ² by the same t substitution."
        },
        {
          "why": "Multiply two gamma integrals over positive x,y and change to u=x+y,v=x/(x+y).",
          "m": "$$x=uv,\\quad y=u(1-v),\\quad\\left|\\det\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|=u$$",
          "meaning": "The inverse derivative matrix has rows (v,u),(1−v,−u), with determinant −u; the integral transformation theorem justifies its area correction."
        },
        {
          "why": "Collect powers after substitution and separate the two positive integrals.",
          "m": "$$\\Gamma(a)\\Gamma(b)=\\left[\\int_0^{\\infty}u^{a+b-1}e^{-u}du\\right]\\left[\\int_0^1v^{a-1}(1-v)^{b-1}dv\\right]=\\Gamma(a+b)B(a,b)$$",
          "meaning": "Independence is not involved; this is nonnegative integration and algebra."
        },
        {
          "why": "Divide to normalize beta density.",
          "m": "$$B(a,b)=\\frac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)},\\quad f_{\\mathrm{Beta}}(v)=\\frac{v^{a-1}(1-v)^{b-1}}{B(a,b)}$$",
          "meaning": "The denominator is exactly the total area of the unnormalized beta shape."
        },
        {
          "why": "Beta moments follow by adding one or two powers of v and using the gamma recurrence.",
          "m": "$$E[V]=\\frac{B(a+1,b)}{B(a,b)}=\\frac a{a+b},\\quad E[V^2]=\\frac{a(a+1)}{(a+b)(a+b+1)}$$",
          "meaning": "Subtracting the squared mean gives ab/[(a+b)²(a+b+1)]."
        },
        {
          "why": "For a Weibull model with k,λ>0, differentiate the defined survival.",
          "m": "$$S(t)=e^{-(\\lambda t)^k},\\quad f(t)=-S'(t)=k\\lambda^kt^{k-1}e^{-(\\lambda t)^k}\\ (t>0)$$",
          "meaning": "The chain rule differentiates (λt)^k to kλ^k t^(k−1); S(0)=1 and S(∞)=0 check total probability 1."
        },
        {
          "why": "Divide density by survival to get its varying hazard.",
          "m": "$$h(t)=k\\lambda^kt^{k-1}$$",
          "meaning": "This is constant for k=1, increases for k>1, and decreases for 0<k<1."
        }
      ],
      "ends": "The special functions are defined by integrals; their normalizing roles and the beta–gamma identity are derived rather than quoted without explanation."
    }
  },
  {
    "id": "c.prob.5.6.2",
    "sec": "5.6",
    "kind": "definition",
    "tier": "extra",
    "title": "Cauchy, Pareto and lognormal laws",
    "oneLine": "Some distributions put much more probability on very large values than a normal model. Their averages or variances may fail to exist, so check the tail before applying familiar formulas.",
    "statement": "<p><b>Statement:</b> Heavy-tailed and asymmetric lifetime distributions:<br>(1) <b>Cauchy:</b> $f(x) = \\frac{1}{\\pi (1 + x^2)}$ for $x \\in \\mathbb{R}$. The mean and higher moments are undefined because $\\int_{-\\infty}^\\infty |x| f(x) dx = \\infty$.<br>(2) <b>Pareto:</b> $f(x) = \\frac{\\alpha x_m^\\alpha}{x^{\\alpha+1}}$ for $x \\ge x_m > 0$ with shape $\\alpha > 0$. $E[X] = \\frac{\\alpha x_m}{\\alpha - 1}$ for $\\alpha > 1$; variance is finite only for $\\alpha > 2$.<br>(3) <b>Lognormal:</b> $X = e^Y$ where $Y \\sim \\mathcal{N}(\\mu, \\sigma^2)$, with PDF $f(x) = \\frac{1}{x \\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(\\ln x - \\mu)^2}{2\\sigma^2}\\right)$ ($x > 0$), mean $e^{\\mu + \\sigma^2/2}$, variance $e^{2\\mu + \\sigma^2}(e^{\\sigma^2} - 1)$.</p><p><b>Mathematical terms:</b> Heavy tails describe decay slower than exponential; Cauchy has tail decay $O(x^{-2})$; Pareto has power-law tail $P(X > x) = (x_m/x)^\\alpha$; Lognormal models multiplicative processes.</p><p><b>Reason:</b> For the Cauchy distribution, the integrand $x/(1+x^2) \\sim 1/x$ as $x \\to \\infty$, giving divergent integrals $\\int_0^\\infty x/(1+x^2)dx = \\infty$, so absolute convergence fails and no expectation exists. For the Pareto distribution, integrating $x \\cdot x^{-(\\alpha+1)} = x^{-\\alpha}$ converges if and only if $\\alpha > 1$. The lognormal arises via the Central Limit Theorem applied to the product of positive independent random variables, since $\\ln(\\prod X_i) = \\sum \\ln X_i \\approx \\mathcal{N}$.</p>",
    "intuition": "A heavy tail means rare extreme values can be much larger than usual, like an occasional huge insurance claim. For some such models, the long-run average is not a finite number even though most observations look ordinary.",
    "needs": [
      "c.prob.5.1.1",
      "c.prob.5.4.1"
    ],
    "traps": [
      "The Cauchy mean is undefined even though the density is symmetric; a symmetric principal value is not an expectation.",
      "A Pareto mean exists only for $\\lambda>1$."
    ],
    "cards": [
      {
        "q": "State the support and mean property of the standard Cauchy law.",
        "a": "Its density is $1/[\\pi(1+x^2)]$ on $\\mathbb R$ and its mean is undefined.",
        "kind": "state"
      },
      {
        "q": "Does a standard Cauchy variable have a finite expectation?",
        "a": "No. Its positive and negative tail integrals diverge, despite symmetry.",
        "kind": "trap"
      }
    ],
    "provenance": "Ross, §5.6.3 and §5.6.5, pp. 224–227; lognormal definition in §5.7 Example 7e (PDF pp. 224–227).",
    "proof": {
      "idea": "Check normalization and moment existence before using heavy-tail distribution formulas.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For the standard Cauchy, integrate its stated density using the arctangent derivative.",
          "m": "$$\\int_{-\\infty}^{\\infty}\\frac{dx}{\\pi(1+x^2)}=\\frac{\\arctan(\\infty)-\\arctan(-\\infty)}\\pi=1$$",
          "meaning": "The derivative of arctan x is 1/(1+x²); its endpoint limits are ±π/2."
        },
        {
          "why": "Compute its positive mean contribution by substituting u=1+x².",
          "m": "$$\\int_0^R\\frac{x}{\\pi(1+x^2)}dx=\\frac{\\log(1+R^2)}{2\\pi}\\longrightarrow\\infty$$",
          "meaning": "du=2x dx; this diverges as R grows. The negative contribution diverges in absolute size as well."
        },
        {
          "why": "The two infinite signed contributions cannot be subtracted to define a mean.",
          "m": "$$E[X]\\text{ is undefined for standard Cauchy}$$",
          "meaning": "Symmetry gives a zero symmetric principal value, which is not an expected value."
        },
        {
          "why": "For Pareto lower bound a>0 and tail exponent λ>0, differentiate F(x)=1−(a/x)^λ on x≥a.",
          "m": "$$f_X(x)=\\lambda a^\\lambda x^{-\\lambda-1}\\quad(x>a)$$",
          "meaning": "The derivative follows from the power rule."
        },
        {
          "why": "For any r>0, weight this density by x^r and integrate the power.",
          "m": "$$E[X^r]=\\lambda a^\\lambda\\int_a^{\\infty}x^{r-\\lambda-1}dx=\\frac{\\lambda a^r}{\\lambda-r}\\quad(\\lambda>r)$$",
          "meaning": "The upper power integral is finite exactly when λ>r; otherwise this positive moment is infinite."
        },
        {
          "why": "For lognormal X=e^Y with Y normal, use the inverse y=log x with derivative 1/x.",
          "m": "$$f_X(x)=\\frac1{x\\sigma\\sqrt{2\\pi}}\\exp\\left[-\\frac{(\\log x-\\mu)^2}{2\\sigma^2}\\right]\\quad(x>0)$$",
          "meaning": "The ordinary change-of-variable rule derives the density from the normal density."
        },
        {
          "why": "Its positive moments follow from the previously computed normal MGF.",
          "m": "$$E[X^r]=E[e^{rY}]=e^{r\\mu+r^2\\sigma^2/2}$$",
          "meaning": "In particular E[X]=e^(μ+σ²/2), and Var(X)=e^(2μ+σ²)(e^(σ²)−1) by subtracting the squared mean from the r=2 moment."
        }
      ],
      "ends": "Normalization does not guarantee moments. Cauchy has no mean, Pareto moments need λ>r, and lognormal moments follow from a normal exponential average."
    }
  },
  {
    "id": "c.prob.5.7.1",
    "sec": "5.7",
    "kind": "technique",
    "tier": "core",
    "title": "CDF method for transformed variables",
    "oneLine": "When Y is calculated from X, translate the event Y at most y into a condition on X. Find that probability first; then differentiate the CDF to find a density when differentiation is valid.",
    "statement": "<p><b>Statement:</b> The <b>CDF Method</b> determines the PDF of $Y = g(X)$ from continuous $X$ with PDF $f_X(x)$:<br>1. Express the CDF $F_Y(y) = P(Y \\le y) = P(g(X) \\le y) = \\int_{\\{x: g(x) \\le y\\}} f_X(x) \\, dx$.<br>2. Differentiate $F_Y(y)$ with respect to $y$ to obtain the PDF $f_Y(y) = F_Y^\\prime(y)$.<p>If $g$ is strictly monotonic and differentiable with inverse $x = g^{-1}(y)$, the <b>Jacobian transformation formula</b> is:$$f_Y(y) = f_X(g^{-1}(y)) \\left|\\frac{d}{dy} g^{-1}(y)\\right| = \\frac{f_X(x)}{|g^\\prime(x)|}$$</p><p><b>Mathematical terms:</b> $g^{-1}(y)$ is the inverse mapping; $\\frac{d}{dy}g^{-1}(y) = \\frac{1}{g^\\prime(x)}$ is the derivative of the inverse function; $|\\cdot|$ is the absolute value (Jacobian).</p><p><b>Reason:</b> If $g$ is strictly increasing, $P(g(X) \\le y) = P(X \\le g^{-1}(y)) = F_X(g^{-1}(y))$. By the chain rule, $f_Y(y) = \\frac{d}{dy} F_X(g^{-1}(y)) = f_X(g^{-1}(y)) \\frac{d}{dy}g^{-1}(y)$. If $g$ is strictly decreasing, $P(g(X) \\le y) = P(X \\ge g^{-1}(y)) = 1 - F_X(g^{-1}(y))$, whose derivative is $-f_X(g^{-1}(y))\\frac{d}{dy}g^{-1}(y)$. Since $\\frac{d}{dy}g^{-1}(y) < 0$ when decreasing, the minus sign is absorbed into the absolute value $|\\frac{d}{dy}g^{-1}(y)|$, preserving non-negativity of density.</p>",
    "intuition": "If Y is the square of a number X, asking whether Y is at most 4 means asking which X-values lie between -2 and 2. Starting from that event makes the new range and any flipped order easy to see.",
    "needs": [
      "c.prob.5.1.1"
    ],
    "traps": [
      "Transform the support as well as the formula.",
      "For decreasing $g$, $P(g(X)\\le y)$ becomes a right-tail event."
    ],
    "cards": [
      {
        "q": "What is the safe first step for finding the law of $Y=g(X)$?",
        "a": "Write $F_Y(y)=P(g(X)\\le y)$ and solve the event, retaining its support.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.7, pp. 228–232 (PDF pp. 228–232).",
    "proof": {
      "idea": "Translate an output cutoff back to the input and use the chain rule.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For Y=g(X), begin with the definition of its CDF.",
          "m": "$$F_Y(y)=P(g(X)\\le y)$$",
          "meaning": "This holds for any valid random-variable function, whether or not g has an inverse."
        },
        {
          "why": "If g is strictly increasing with inverse h, solve the cutoff inequality for X.",
          "m": "$$g(X)\\le y\\ \\Longleftrightarrow\\ X\\le h(y)$$",
          "meaning": "Increasing functions preserve order."
        },
        {
          "why": "Use the original CDF to compute this event.",
          "m": "$$F_Y(y)=F_X(h(y))$$",
          "meaning": "The input CDF avoids an immediate density calculation."
        },
        {
          "why": "Differentiate the composition where derivatives exist.",
          "m": "$$f_Y(y)=f_X(h(y))h'(y)$$",
          "meaning": "The chain rule multiplies the two slopes; assume X has a density and the inverse is differentiable on this branch."
        },
        {
          "why": "If g is decreasing, reverse the input inequality and use the complement probability.",
          "m": "$$F_Y(y)=1-F_X(h(y)),\\quad f_Y(y)=-f_X(h(y))h'(y)$$",
          "meaning": "X has no atoms, so ≥ and > have the same probability, and h' is negative."
        },
        {
          "why": "Combine both signs by the absolute inverse slope.",
          "m": "$$f_Y(y)=f_X(h(y))|h'(y)|$$",
          "meaning": "Set density to zero off the transformed support; for many-to-one transformations, include every branch as derived in the next note."
        }
      ],
      "ends": "CDF transformation is an event-translation method; the density formula follows by differentiating with the correct monotonicity sign."
    }
  },
  {
    "id": "c.prob.5.7.2",
    "sec": "5.7",
    "kind": "theorem",
    "tier": "core",
    "title": "Many-to-one change of variables",
    "oneLine": "Several input values can produce the same output. For example, both x and minus x give the same square. Find every allowed input and add its contribution to the output density.",
    "statement": "<p><b>Statement:</b> When $Y = g(X)$ is a non-monotonic (many-to-one) transformation, partition the support of $X$ into countably many disjoint intervals $I_1, I_2, \\ldots$ on each of which $g$ is strictly monotonic. Then the PDF of $Y$ is the sum of the density contributions across all pre-image branches:$$f_Y(y) = \\sum_{k} f_X(x_k) \\left|\\frac{dx_k}{dy}\\right| = \\sum_{k: g(x_k) = y} \\frac{f_X(x_k)}{|g^\\prime(x_k)|}$$For example, for $Y = X^2$, $f_Y(y) = \\frac{1}{2\\sqrt{y}} [f_X(\\sqrt{y}) + f_X(-\\sqrt{y})]$ for $y > 0$.</p><p><b>Mathematical terms:</b> $x_k = g_k^{-1}(y)$ are the roots of $g(x) = y$; $|\\frac{dx_k}{dy}|$ is the local Jacobian expansion factor of branch $k$.</p><p><b>Reason:</b> For $Y = X^2$ and $y > 0$, the event $\\{Y \\le y\\}$ is $\\{-\\sqrt{y} \\le X \\le \\sqrt{y}\\} = F_X(\\sqrt{y}) - F_X(-\\sqrt{y})$. Differentiating with respect to $y$ via the chain rule gives $f_Y(y) = \\frac{d}{dy}[F_X(\\sqrt{y}) - F_X(-\\sqrt{y})] = f_X(\\sqrt{y})\\frac{1}{2\\sqrt{y}} - f_X(-\\sqrt{y})(-\\frac{1}{2\\sqrt{y}}) = \\frac{1}{2\\sqrt{y}}[f_X(\\sqrt{y}) + f_X(-\\sqrt{y})]$. Each branch where $g(x)=y$ contributes a probability mass $f_X(x_k)|dx_k| = f_X(x_k)|\\frac{dx_k}{dy}|dy$; summing these disjoint infinitesimal slices yields $f_Y(y)dy$.</p>",
    "intuition": "When $Y=X^2$, both X=2 and X=-2 lead to the same Y=4, so both routes contribute chance. A steep route packs less input length into the same output interval; a flat route packs more.",
    "needs": [
      "c.prob.5.7.1"
    ],
    "traps": [
      "For $Y=X^2$, do not discard the negative inverse branch when it lies in the support.",
      "Critical points with $g'(x)=0$ require separate care; the formula applies at regular values."
    ],
    "proof": {
      "idea": "Derive a one-branch density by CDF differentiation, then add all disjoint branches.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "First suppose g is increasing and differentiable with inverse h.",
          "m": "$$F_Y(y)=P(g(X)\\le y)=F_X(h(y))$$",
          "meaning": "Increasing functions preserve the ordering of inputs; h(y) is the input producing y."
        },
        {
          "why": "Differentiate the CDF using the chain rule where derivatives exist.",
          "m": "$$f_Y(y)=f_X(h(y))h'(y)$$",
          "meaning": "The chain rule says the slope of a composition is outer slope times inner slope."
        },
        {
          "why": "Differentiate g(h(y))=y to get the inverse slope.",
          "m": "$$g'(h(y))h'(y)=1,\\quad h'(y)=1/g'(h(y))$$",
          "meaning": "This division requires a nonzero derivative at the contributing input."
        },
        {
          "why": "For a decreasing branch the cutoff inequality reverses.",
          "m": "$$F_Y(y)=1-F_X(h(y)),\\quad f_Y(y)=-f_X(h(y))h'(y)$$",
          "meaning": "Here X has a density, so there is no endpoint atom; h' is negative."
        },
        {
          "why": "Both signs can be written with an absolute value.",
          "m": "$$f_{Y,\\text{branch}}(y)=\\frac{f_X(h(y))}{|g'(h(y))|}$$",
          "meaning": "Absolute value makes the local stretch correction positive."
        },
        {
          "why": "Split a many-to-one function into disjoint input branches and add their output contributions.",
          "m": "$$f_Y(y)=\\sum_{x:g(x)=y}\\frac{f_X(x)}{|g'(x)|}$$",
          "meaning": "Only inputs in the support count; the general validity uses the one-dimensional change-of-variables theorem branch by branch, so formulas hold almost everywhere."
        },
        {
          "why": "For Y=X² and y>0, the two inverse branches are ±sqrt(y).",
          "m": "$$f_Y(y)=\\frac{f_X(\\sqrt y)+f_X(-\\sqrt y)}{2\\sqrt y}$$",
          "meaning": "The derivative 2x has absolute value 2sqrt(y) on either branch; y=0 is a zero-derivative boundary and must be handled by the CDF rather than division by zero."
        }
      ],
      "ends": "Each inverse branch contributes its input density divided by the absolute local stretch; disjoint branch contributions add."
    },
    "cards": [
      {
        "q": "State the density formula for a piecewise one-to-one transformation.",
        "a": "$f_Y(y)=\\sum_{x:g(x)=y}f_X(x)/|g'(x)|$ over support preimages where $g'(x)\\ne0$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §5.7, pp. 230–232 (PDF pp. 230–232)."
  }
]
);
