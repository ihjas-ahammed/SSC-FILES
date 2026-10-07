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
    "statement": "<p>A density is a curve whose area tells us probability. The total area is 1. To find the chance of landing in an interval, take the area above that interval.</p><p>A continuous random variable $X$ has density $f$ when $f(x)\\ge0$, $\\int_{-\\infty}^{\\infty}f(x)\\,dx=1$, and $P(X\\in A)=\\int_A f(x)\\,dx$ for any measurable set $A$ (an allowed event). Its distribution function is $F(x)=P(X\\le x)=\\int_{-\\infty}^x f(t)\\,dt$.</p><p>Consequently $P(a<X\\le b)=F(b)-F(a)=\\int_a^b f(t)\\,dt$ and $P(X=a)=0$.</p>",
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
    "statement": "<p>The CDF adds up the area to the left of a cutoff. In a very short interval, the curve is nearly flat, so probability is approximately height times width.</p><p>For a density $f$, $F(x)=\\int_{-\\infty}^x f(t)\\,dt$. At a continuity point $x$ of $f$, $P(x\\le X\\le x+h)=h f(x)+o(h)$ as $h\\downarrow0$.</p>",
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
    "statement": "<p>To average a quantity calculated from X, weight its value at each x by how likely values near x are. An integral is the continuous version of this weighted sum.</p><p>If $X$ has density $f$ and $g(X)$ has finite $E[|g(X)|]$, then $E[g(X)]=\\int_{-\\infty}^{\\infty}g(x)f(x)\\,dx$. In particular, $E[X]=\\int x f(x)\\,dx$ and $E[X^2]=\\int x^2f(x)\\,dx$ when finite.</p>",
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
    "statement": "<p>Variance averages the squared distance from the mean. Adding a constant shifts all values together; multiplying by a stretches the distances by a, so squared distances stretch by a squared.</p><p>When $E[X^2]$ is finite, $\\operatorname{Var}(X)=E[(X-\\mu)^2]=E[X^2]-(E[X])^2$. For constants $a,b$, $E[aX+b]=aE[X]+b$ and $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$.</p>",
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
    "statement": "<p>A nonnegative value can be built from all the thresholds below it. Averaging those threshold indicators gives the area under the probability of exceeding each threshold.</p><p>If $X\\ge0$, then $E[X]=\\int_0^\\infty P(X>t)\\,dt$, allowing $+\\infty$. More generally, if $X$ is real and has finite $E[|X|]$, $E[X]=\\int_0^\\infty P(X>t)dt-\\int_0^\\infty P(X<-t)dt$.</p>",
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
    "statement": "<p>Uniform means equal-length intervals inside the allowed range have equal probability. Divide the length of the part you want by the full interval length.</p><p>If $X\\sim\\operatorname{Unif}(a,b)$ with $a<b$, its density is $1/(b-a)$ on $(a,b)$ and zero elsewhere; $F(x)=0$ for $x\\le a$, $(x-a)/(b-a)$ for $a<x<b$, and $1$ for $x\\ge b$. Thus $P(c<X<d)$ is the length of $(c,d)\\cap(a,b)$ divided by $b-a$.</p>",
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
    "statement": "<p>A uniform distribution balances at the midpoint of its interval. Its spread depends on the interval length, not where the interval starts.</p><p>For $X\\sim\\operatorname{Unif}(a,b)$, $E[X]=(a+b)/2$ and $\\operatorname{Var}(X)=(b-a)^2/12$.</p>",
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
    "statement": "<p>A normal curve is a bell-shaped model. The mean locates its center and the standard deviation sets its width. Subtract the center and divide by the width to use the standard normal table.</p><p>$X\\sim N(\\mu,\\sigma^2)$, $\\sigma>0$, has density $f(x)=\\frac1{\\sigma\\sqrt{2\\pi}}\\exp[-(x-\\mu)^2/(2\\sigma^2)]$. Then $Z=(X-\\mu)/\\sigma\\sim N(0,1)$ and $P(X\\le x)=\\Phi((x-\\mu)/\\sigma)$.</p>",
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
    "statement": "<p>Shifting or stretching a normal variable produces another normal variable. Change the mean in the same way; multiply the variance by the square of the stretch.</p><p>If $X\\sim N(\\mu,\\sigma^2)$, then $aX+b\\sim N(a\\mu+b,a^2\\sigma^2)$ for $a\\ne0$ (and is constant for $a=0$). Consequently $E[X]=\\mu$ and $\\operatorname{Var}(X)=\\sigma^2$.</p>",
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
    "statement": "<p>A binomial counts successes. When both expected successes and expected failures are sufficiently numerous, a normal curve can approximate its bars. Move integer boundaries by half a unit to include whole bars.</p><p>If $B\\sim\\operatorname{Bin}(n,p)$ and both $np$ and $n(1-p)$ are reasonably large, approximate $B$ by $N(np,np(1-p))$. For integer cutoffs, use continuity correction: e.g. $P(B\\le k)\\approx\\Phi((k+0.5-np)/\\sqrt{np(1-p)})$.</p>",
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
    "statement": "<p>An exponential variable models a waiting time with a constant failure rate. If it has lasted until now, its remaining waiting time has the same distribution as a fresh wait.</p><p>For rate $\\lambda>0$, $X\\sim\\operatorname{Exp}(\\lambda)$ has $f(x)=\\lambda e^{-\\lambda x}$ for $x\\ge0$, $P(X>t)=e^{-\\lambda t}$, $E[X]=1/\\lambda$, and $\\operatorname{Var}(X)=1/\\lambda^2$. It is memoryless: $P(X>s+t\\mid X>s)=P(X>t)$ for $s,t\\ge0$.</p>",
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
    "statement": "<p>The hazard describes the risk of failure per unit time among items still working. A high hazard after a given age means survivors are more likely to fail soon.</p><p>For a nonnegative lifetime with density $f$ and survival $S(t)=P(X>t)>0$, its hazard rate is $h(t)=f(t)/S(t)$. Since $S\\prime(t)=-f(t)$ almost everywhere, $S(t)=\\exp[-\\int_0^t h(u)du]$ on intervals where survival is positive and $h$ is locally integrable. For a density lifetime $S(0)=1$; if survival reaches zero at a finite endpoint, the formula is interpreted by its limiting value there.</p>",
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
    "statement": "<p>Different continuous families describe different shapes: gamma for positive waiting times, beta for proportions between 0 and 1, and Weibull for lifetimes whose failure risk may change with age.</p><p>Gamma$(\\alpha,\\lambda)$ (shape $\\alpha$, rate $\\lambda$) has density $\\lambda^\\alpha x^{\\alpha-1}e^{-\\lambda x}/\\Gamma(\\alpha)$ for $x>0$. Beta$(\\alpha,\\beta)$ has density proportional to $x^{\\alpha-1}(1-x)^{\\beta-1}$ on $(0,1)$. Weibull$(k,\\lambda)$ has survival $e^{-(\\lambda t)^k}$ on $t\\ge0$.</p>",
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
    "statement": "<p>Some distributions put much more probability on very large values than a normal model. Their averages or variances may fail to exist, so check the tail before applying familiar formulas.</p><p>The standard Cauchy density is $1/[\\pi(1+x^2)]$ on $\\mathbb R$ and has no finite mean. A Pareto$(a,\\lambda)$ variable has $P(X>x)=(a/x)^\\lambda$ for $x\\ge a$. A lognormal variable satisfies $\\log X\\sim N(\\mu,\\sigma^2)$.</p>",
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
    "statement": "<p>When Y is calculated from X, translate the event Y at most y into a condition on X. Find that probability first; then differentiate the CDF to find a density when differentiation is valid.</p><p>For any function $g$ that defines a random variable, $F_{g(X)}(y)=P(g(X)\\le y)$. If $g$ is strictly increasing and differentiable with inverse $g^{-1}$, then $f_{g(X)}(y)=f_X(g^{-1}(y))|(g^{-1})'(y)|$ on the transformed support. If $g$ is decreasing, reverse the inequality when forming the CDF.</p>",
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
    "statement": "<p>Several input values can produce the same output. For example, both x and minus x give the same square. Find every allowed input and add its contribution to the output density.</p><p>If $g$ is differentiable and piecewise one-to-one, then at output values $y$ whose contributing inputs have nonzero derivative, $f_Y(y)=\\sum_{x:g(x)=y} f_X(x)/|g'(x)|$. Each inverse branch contributes, and only preimages in the support of $X$ are included.</p>",
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
