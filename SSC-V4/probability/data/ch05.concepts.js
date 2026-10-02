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
    "provenance": "Ross, A First Course in Probability, 10e, §5.1, pp. 195–198 (PDF pp. 195–198)."
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
      "idea": "The CDF adds up the area to the left of a cutoff. In a very short interval, the curve is nearly flat, so probability is approximately height times width.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Take the area over the short interval.",
          "m": "$$P(x<X\\le x+h)=\\int_x^{x+h}f(t)\\,dt$$",
          "meaning": "This is the exact probability, before making an approximation."
        },
        {
          "why": "Divide by the interval width.",
          "m": "$$\\frac1h\\int_x^{x+h}f(t)\\,dt\\longrightarrow f(x)$$",
          "meaning": "If the curve is continuous at x, its average height over a shrinking interval approaches its height at x."
        },
        {
          "why": "Multiply the average height by the width again.",
          "m": "$$P(x<X\\le x+h)=h f(x)+o(h)$$",
          "meaning": "The term o(h) is an error that becomes small compared with h as h goes to zero."
        }
      ],
      "ends": "The density is the derivative of accumulated probability wherever the derivative is defined."
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
      "idea": "To average a quantity calculated from X, weight its value at each x by how likely values near x are. An integral is the continuous version of this weighted sum.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Build the average of a nonnegative value from threshold probabilities.",
          "m": "$$E[Y]=\\int_0^\\infty P(Y>y)\\,dy$$",
          "meaning": "Each value y contributes every threshold below it, so the area under the exceedance curve gives the mean."
        },
        {
          "why": "Use the density to calculate each threshold probability, then sum in the other order.",
          "m": "$$\\int_0^\\infty\\!\\int_{g(x)>y}f(x)\\,dx\\,dy=\\int g(x)f(x)\\,dx$$",
          "meaning": "For a fixed x, the thresholds below g(x) occupy an interval of length g(x). All contributions are nonnegative, so Tonelli’s theorem allows this change in order."
        }
      ],
      "ends": "Positive and negative parts give the stated formula whenever $g(X)$ has finite expected absolute value."
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
      "idea": "Variance averages the squared distance from the mean. Adding a constant shifts all values together; multiplying by a stretches the distances by a, so squared distances stretch by a squared.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Expand the square and average each term.",
          "m": "$$E[(X-\\mu)^2]=E[X^2]-2\\mu E[X]+\\mu^2=E[X^2]-\\mu^2$$",
          "meaning": "Since the mean is mu, the middle term simplifies and leaves second moment minus mean squared."
        },
        {
          "why": "Subtract the mean after shifting and scaling.",
          "m": "$$aX+b-E[aX+b]=a(X-E[X])$$",
          "meaning": "The added constant disappears; the remaining distance from the mean is multiplied by a."
        },
        {
          "why": "Square that distance and take its average.",
          "m": "$$\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$$",
          "meaning": "Squaring the multiplier gives a squared, so this is the new variance."
        }
      ],
      "ends": "The same algebra applies to discrete variables and to any random variable with finite $E[X^2]$."
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
      "idea": "A nonnegative value can be built from all the thresholds below it. Averaging those threshold indicators gives the area under the probability of exceeding each threshold.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Represent a value by all the thresholds below it.",
          "m": "$$X=\\int_0^\\infty 1_{\\{X>t\\}}\\,dt$$",
          "meaning": "The indicator is 1 until the threshold t reaches X, and 0 afterward; its area is exactly X."
        },
        {
          "why": "Average this identity.",
          "m": "$$E[X]=\\int_0^\\infty E[1_{\\{X>t\\}}]dt=\\int_0^\\infty P(X>t)dt$$",
          "meaning": "The average of an indicator is the chance its event happens. Nonnegative contributions can be added before or after averaging; this is Tonelli’s theorem."
        }
      ],
      "ends": "For signed with finite expected absolute value variables, apply the identity separately to positive and negative parts."
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
      "idea": "Uniform means equal-length intervals inside the allowed range have equal probability. Divide the length of the part you want by the full interval length.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Make the rectangle under the curve have area 1.",
          "m": "$$c(b-a)=1\\quad\\Rightarrow\\quad c=\\frac1{b-a}$$",
          "meaning": "Width times height is total probability, so the height must be one divided by the interval length."
        },
        {
          "why": "Measure the area from the left endpoint to x.",
          "m": "$$F(x)=\\int_a^x\\frac{dt}{b-a}=\\frac{x-a}{b-a}$$",
          "meaning": "The accumulated area is its length x minus a, divided by the full length b minus a."
        },
        {
          "why": "Check cutoffs outside the allowed interval.",
          "m": "$$F(x)=0\\ (x\\le a),\\qquad F(x)=1\\ (x\\ge b)$$",
          "meaning": "Before the interval no probability has accumulated; after it all probability has accumulated."
        }
      ],
      "ends": "Endpoint inclusion does not change probabilities for this continuous distribution."
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
      "idea": "A uniform distribution balances at the midpoint of its interval. Its spread depends on the interval length, not where the interval starts.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Average x against the constant density.",
          "m": "$$E[X]=\\frac1{b-a}\\int_a^b x\\,dx=\\frac{a+b}{2}$$",
          "meaning": "The integral balances halfway between the two endpoints."
        },
        {
          "why": "Average the square of the distance from that midpoint.",
          "m": "$$\\operatorname{Var}(X)=\\frac1{b-a}\\int_a^b\\left(x-\\frac{a+b}{2}\\right)^2dx=\\frac{(b-a)^2}{12}$$",
          "meaning": "The symmetric squared-distance integral gives interval length squared divided by 12."
        }
      ],
      "ends": "These formulas also follow by scaling $U\\sim\\operatorname{Unif}(0,1)$ as $X=a+(b-a)U$."
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
    "provenance": "Ross, §5.4, pp. 207–215 (PDF pp. 207–215)."
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
      "idea": "Shifting or stretching a normal variable produces another normal variable. Change the mean in the same way; multiply the variance by the square of the stretch.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "For a positive stretch a, translate the cutoff back to X.",
          "m": "$$P(aX+b\\le y)=\\Phi\\!\\left(\\frac{y-(a\\mu+b)}{a\\sigma}\\right)$$",
          "meaning": "The event aX plus b at most y means X at most (y minus b) divided by a."
        },
        {
          "why": "Recognize the standard-normal cutoff.",
          "m": "$$aX+b\\sim N(a\\mu+b,a^2\\sigma^2)$$",
          "meaning": "The new center is a times the old mean plus b; its standard deviation is a times the old one."
        },
        {
          "why": "Use the standard-normal mean and variance.",
          "m": "$$E[X]=\\mu,\\qquad \\operatorname{Var}(X)=\\sigma^2$$",
          "meaning": "The density is symmetric, giving mean zero. Integrating z squared times the standard density by parts gives variance 1; shifting and scaling then give the stated parameters."
        }
      ],
      "ends": "The density change-of-variables argument also handles $a<0$ by reversing the inequality."
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
    "provenance": "Ross, §5.4.1, pp. 213–215 (PDF pp. 213–215)."
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
      "idea": "An exponential variable models a waiting time with a constant failure rate. If it has lasted until now, its remaining waiting time has the same distribution as a fresh wait.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Integrate the density above time t.",
          "m": "$$P(X>t)=\\int_t^\\infty\\lambda e^{-\\lambda x}dx=e^{-\\lambda t}$$",
          "meaning": "This area is the chance the wait has not ended by t."
        },
        {
          "why": "Divide the chance of surviving s plus t by the chance of surviving s.",
          "m": "$$P(X>s+t\\mid X>s)=\\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}}=e^{-\\lambda t}$$",
          "meaning": "The factor involving past time s cancels. The remaining chance is exactly the fresh-wait survival chance at t."
        },
        {
          "why": "Average the lifetime and its square using the density.",
          "m": "$$E[X]=\\lambda^{-1},\\qquad \\operatorname{Var}(X)=\\lambda^{-2}$$",
          "meaning": "Integration by parts gives E[X] equal to 1/lambda and E[X squared] equal to 2/lambda squared. Subtracting the squared mean gives the variance."
        }
      ],
      "ends": "The residual waiting time after any fixed survival time has the original exponential distribution."
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
    "statement": "<p>The hazard describes the risk of failure per unit time among items still working. A high hazard after a given age means the survivors are then more likely to fail soon.</p><p>For a lifetime with density $f$ and survival $S(t)=P(X>t)>0$, its hazard rate is $h(t)=f(t)/S(t)$. Since $S'(t)=-f(t)$, $S(t)=\\exp[-\\int_0^t h(u)du]$ when $X\\ge0$ and the hazard has finite $E[|g(X)|]$.</p>",
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
    "provenance": "Ross, §5.5.1, pp. 220–221 (PDF pp. 220–221)."
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
    "provenance": "Ross, §5.6.1, §5.6.2 and §5.6.4, pp. 222–227 (PDF pp. 222–227)."
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
    "provenance": "Ross, §5.6.3 and §5.6.5, pp. 224–227; lognormal definition in §5.7 Example 7e (PDF pp. 224–227)."
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
    "provenance": "Ross, §5.7, pp. 228–232 (PDF pp. 228–232)."
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
      "idea": "Several input values can produce the same output. For example, both x and minus x give the same square. Find every allowed input and add its contribution to the output density.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Separate the input into pieces that each have a unique inverse.",
          "m": "$$\\{x:g(x)\\in dy\\}=\\bigcup_j \\{x_j(y)\\in dx_j\\}$$",
          "meaning": "For a square, use one negative-input piece and one positive-input piece. Each can be handled on its own."
        },
        {
          "why": "Match probability in a short input interval to its output interval.",
          "m": "$$f_X(x_j)\\,dx_j=\\frac{f_X(x_j(y))}{|g'(x_j(y))|}\\,dy$$",
          "meaning": "The derivative tells us how much the interval stretches. Divide the input density by the absolute stretch to get its output contribution."
        },
        {
          "why": "Add every allowed contribution.",
          "m": "$$f_Y(y)=\\sum_{x:g(x)=y}\\frac{f_X(x)}{|g'(x)|}$$",
          "meaning": "Different input pieces are disjoint, so their probabilities add even when they produce the same output."
        }
      ],
      "ends": "Restrict the sum to valid input values in the support and output values whose contributing inputs have nonzero derivative."
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
