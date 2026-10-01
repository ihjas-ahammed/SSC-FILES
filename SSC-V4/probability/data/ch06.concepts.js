var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.6.1.1",
    "sec": "6.1",
    "kind": "definition",
    "tier": "core",
    "title": "Joint CDF and rectangle probabilities",
    "oneLine": "A joint CDF accumulates probability in the lower-left quadrant and determines rectangle probabilities by inclusion–exclusion.",
    "statement": "<p>For random variables $X,Y$, define $F_{X,Y}(x,y)=P(X\\le x,Y\\le y)$. For $a_1<a_2$ and $b_1<b_2$,</p><p>$$P(a_1<X\\le a_2,\\ b_1<Y\\le b_2)=F(a_2,b_2)-F(a_1,b_2)-F(a_2,b_1)+F(a_1,b_1).$$</p>",
    "intuition": "A joint CDF records two things together—for example, the chance a randomly chosen student is both under a height cutoff and under a shoe-size cutoff. Four corner chances isolate a rectangle of possible pairs.",
    "needs": [],
    "traps": [
      "Use four terms with alternating signs; a joint CDF is not generally a product of marginal CDFs.",
      "Boundary atoms matter for discrete variables, so preserve the stated weak and strict inequalities."
    ],
    "cards": [
      {
        "q": "State the two-variable rectangle increment formula.",
        "a": "$F(a_2,b_2)-F(a_1,b_2)-F(a_2,b_1)+F(a_1,b_1)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, A First Course in Probability, 10e, §6.1, pp. 246–247 (PDF pp. 246–247)."
  },
  {
    "id": "c.prob.6.1.2",
    "sec": "6.1",
    "kind": "technique",
    "tier": "core",
    "title": "Joint mass functions and discrete marginals",
    "oneLine": "For a discrete pair, sum the joint mass across rows or columns to recover each marginal.",
    "statement": "<p>For discrete $X,Y$, $p_{X,Y}(x,y)=P(X=x,Y=y)$. The marginals are $p_X(x)=\\sum_y p_{X,Y}(x,y)$ and $p_Y(y)=\\sum_x p_{X,Y}(x,y)$. The joint masses are nonnegative and sum to 1.</p>",
    "intuition": "Imagine a table where each row is a die’s first roll and each column is its second roll. The joint table keeps both rolls together; a marginal chance for the first roll comes from adding across all second rolls.",
    "needs": [
      "c.prob.6.1.1"
    ],
    "traps": [
      "The joint table must sum to one; a marginal is a row or column sum, not a single cell.",
      "A pair of correct marginals does not determine the joint law."
    ],
    "cards": [
      {
        "q": "How do you recover $p_X(x)$ from a joint pmf?",
        "a": "Sum over all possible values of $Y$: $p_X(x)=\\sum_y p_{X,Y}(x,y)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.1, pp. 246–249 (PDF pp. 246–249)."
  },
  {
    "id": "c.prob.6.1.3",
    "sec": "6.1",
    "kind": "theorem",
    "tier": "core",
    "title": "Joint densities and marginalization",
    "oneLine": "Integrate a joint density over regions for probabilities and integrate out a coordinate for a marginal density.",
    "statement": "<p>A joint density $f_{X,Y}$ is nonnegative, integrates to 1 over $\\mathbb R^2$, and assigns $P((X,Y)\\in A)=\\iint_A f_{X,Y}(x,y)\\,dx\\,dy$. Marginals are $f_X(x)=\\int_{-\\infty}^{\\infty}f_{X,Y}(x,y)dy$ and $f_Y(y)=\\int_{-\\infty}^{\\infty}f_{X,Y}(x,y)dx$.</p>",
    "intuition": "A joint density is like a heat map for pairs such as height and weight. To get the height distribution alone, add up the heat across all possible weights.",
    "needs": [
      "c.prob.6.1.1"
    ],
    "traps": [
      "Set the integrand to zero outside the support before integrating.",
      "A valid density can have a complicated support; marginal integration limits may depend on the retained coordinate."
    ],
    "proof": {
      "idea": "Integrate the joint density over a vertical strip and use Tonelli to identify the marginal law.",
      "why": "The marginal density must produce the probability of every interval for the retained variable.",
      "rungs": [
        {
          "why": "Express the probability that $X$ lies in an interval by integrating over all possible $Y$.",
          "m": "$$P(a<X\\le b)=\\int_a^b\\int_{\\mathbb R}f_{X,Y}(x,y)\\,dy\\,dx$$",
          "meaning": "This vertical strip includes every joint outcome whose first coordinate lies between $a$ and $b$."
        },
        {
          "why": "Exchange the order of accumulation and identify the inner integral as a function of $x$.",
          "m": "$$f_X(x):=\\int_{\\mathbb R}f_{X,Y}(x,y)\\,dy$$",
          "meaning": "Summing density over the forgotten coordinate leaves the density for $X$."
        },
        {
          "why": "The interval probability is now the integral of this marginal density.",
          "m": "$$P(a<X\\le b)=\\int_a^b f_X(x)\\,dx$$",
          "meaning": "Thus the proposed marginal reproduces every interval probability for $X$."
        }
      ],
      "ends": "The same argument with coordinates reversed gives $f_Y$; Tonelli applies because densities are nonnegative."
    },
    "cards": [
      {
        "q": "State the marginal density formula for $X$ from a joint density.",
        "a": "$f_X(x)=\\int_{-\\infty}^{\\infty}f_{X,Y}(x,y)dy$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.1, pp. 250–253 (PDF pp. 250–253)."
  },
  {
    "id": "c.prob.6.2.1",
    "sec": "6.2",
    "kind": "definition",
    "tier": "core",
    "title": "Independence of random variables",
    "oneLine": "Independence means every pair of measurable events determined by the variables has product probability.",
    "statement": "<p>$X,Y$ are independent if $P(X\\in A,Y\\in B)=P(X\\in A)P(Y\\in B)$ for every measurable $A,B$. For discrete variables this is equivalent to $p_{X,Y}(x,y)=p_X(x)p_Y(y)$; for jointly continuous variables it is equivalent to $f_{X,Y}(x,y)=f_X(x)f_Y(y)$ almost everywhere.</p>",
    "intuition": "Two fair dice are independent if knowing the first result does not change the chances for the second. For a whole probability table, independence means every pair’s chance factors into the two separate chances.",
    "needs": [
      "c.prob.6.1.2",
      "c.prob.6.1.3"
    ],
    "traps": [
      "Zero covariance alone does not imply independence in general.",
      "A product-shaped formula on a support that is not a Cartesian product may still fail independence."
    ],
    "cards": [
      {
        "q": "State the density factorization criterion for independence.",
        "a": "For a jointly continuous pair, $f_{X,Y}(x,y)=f_X(x)f_Y(y)$ almost everywhere.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.2, pp. 254–257 (PDF pp. 254–257)."
  },
  {
    "id": "c.prob.6.2.2",
    "sec": "6.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Functions preserve independence",
    "oneLine": "Separate measurable functions of independent variables remain independent.",
    "statement": "<p>If $X$ and $Y$ are independent and $g,h$ are measurable, then $g(X)$ and $h(Y)$ are independent. For a jointly normal pair, independence is equivalent to zero correlation.</p>",
    "intuition": "If two independent dice are each transformed separately—for example, one is squared and one is doubled—the results remain independent. A zero-correlation shortcut works only for a jointly normal pair, such as two coordinates from one bell-shaped cloud.",
    "needs": [
      "c.prob.6.2.1"
    ],
    "traps": [
      "Functions that reuse both variables need not preserve independence.",
      "Zero correlation implies independence for a jointly normal pair, not for arbitrary pairs."
    ],
    "proof": {
      "idea": "Preimages of measurable events under separate functions are events of the original variables; apply the defining factorization. The normal claim follows by factorizing its bivariate density at $\\rho=0$.",
      "why": "Independence is a statement about event probabilities and is preserved under separate event recodings.",
      "rungs": [
        {
          "why": "Translate events of the transformed variables to preimages.",
          "m": "$$\\{g(X)\\in C\\}=\\{X\\in g^{-1}(C)\\},\\quad \\{h(Y)\\in D\\}=\\{Y\\in h^{-1}(D)\\}$$",
          "meaning": "Each output event depends only on its corresponding original variable."
        },
        {
          "why": "Use independence of the original pair on those preimage sets.",
          "m": "$$P(g(X)\\in C,h(Y)\\in D)=P(X\\in g^{-1}(C))P(Y\\in h^{-1}(D))$$",
          "meaning": "The probability of the two transformed events separates into the product of their individual probabilities."
        },
        {
          "why": "Recognize each factor as a transformed marginal event probability.",
          "m": "$$P(g(X)\\in C,h(Y)\\in D)=P(g(X)\\in C)P(h(Y)\\in D)$$",
          "meaning": "This is precisely independence of the two functions."
        }
      ],
      "ends": "For bivariate normal variables, setting $\\rho=0$ removes the cross term and factors the joint density; conversely independence forces zero covariance."
    },
    "cards": [
      {
        "q": "If $X,Y$ are independent, what can be said of $g(X),h(Y)$?",
        "a": "They are independent for any measurable functions $g,h$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.2, pp. 254–262; bivariate normal conditional/independence result on PDF pp. 274–275."
  },
  {
    "id": "c.prob.6.3.1",
    "sec": "6.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Convolution for a sum",
    "oneLine": "For independent variables, convolve their laws to find the distribution of the sum.",
    "statement": "<p>If independent continuous $X,Y$ have densities $f_X,f_Y$, then $f_{X+Y}(s)=\\int_{-\\infty}^{\\infty}f_X(s-y)f_Y(y)dy$. Equivalently, $F_{X+Y}(s)=\\int F_X(s-y)f_Y(y)dy$. For discrete independent variables, $P(X+Y=s)=\\sum_yP(X=s-y)P(Y=y)$.</p>",
    "intuition": "To get a total of 7 from two dice, several pairs work: (1,6), (2,5), and so on. For independent variables, multiply the chance of each pair and add all pairs that reach the requested total.",
    "needs": [
      "c.prob.6.2.1"
    ],
    "traps": [
      "The convolution formula uses independence.",
      "Set the integration range from both supports; it is often not all real numbers after zeroing the densities."
    ],
    "proof": {
      "idea": "Condition on $Y=y$ and integrate the conditional sum event; differentiate the resulting CDF.",
      "why": "The sum can be built by averaging the shifted distribution of $X$ over the law of $Y$.",
      "rungs": [
        {
          "why": "Condition on the value of $Y$.",
          "m": "$$F_{X+Y}(s)=P(X+Y\\le s)=\\int P(X\\le s-y\\mid Y=y)f_Y(y)dy$$",
          "meaning": "Each possible value $y$ leaves the threshold $s-y$ for $X$."
        },
        {
          "why": "Independence removes the conditioning from the distribution of $X$.",
          "m": "$$F_{X+Y}(s)=\\int F_X(s-y)f_Y(y)dy$$",
          "meaning": "The conditional law of $X$ equals its marginal law."
        },
        {
          "why": "Differentiate with respect to $s$ when the densities permit differentiation under the integral.",
          "m": "$$f_{X+Y}(s)=\\int f_X(s-y)f_Y(y)dy$$",
          "meaning": "The density of the sum aggregates every split of the total $s$."
        }
      ],
      "ends": "The discrete version replaces the integral by a sum over the possible values."
    },
    "cards": [
      {
        "q": "State the density convolution formula for independent $X,Y$.",
        "a": "$f_{X+Y}(s)=\\int_{\\mathbb R}f_X(s-y)f_Y(y)dy$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.3, pp. 263–264 (PDF pp. 263–264)."
  },
  {
    "id": "c.prob.6.3.2",
    "sec": "6.3",
    "kind": "example",
    "tier": "core",
    "title": "Sum of two independent uniforms",
    "oneLine": "The sum of two independent U(0,1) variables has a triangular density.",
    "statement": "<p>For independent $X,Y\\sim\\operatorname{Unif}(0,1)$, $S=X+Y$ has density $f_S(s)=s$ for $0<s<1$, $2-s$ for $1\\le s<2$, and $0$ otherwise.</p>",
    "intuition": "Drop two random points on a unit line and add their locations. A total near 1 can be made in many ways, while a total near 0 or 2 has few matching pairs; that creates a triangle-shaped density.",
    "needs": [
      "c.prob.6.3.1"
    ],
    "traps": [
      "The density is triangular, not uniform; the sum has support $(0,2)$."
    ],
    "cards": [
      {
        "q": "Give the density of the sum of two independent U(0,1) variables.",
        "a": "$f(s)=s$ on $(0,1)$; $f(s)=2-s$ on $[1,2)$; zero otherwise.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.3.1, pp. 263–265 (PDF pp. 263–265)."
  },
  {
    "id": "c.prob.6.3.3",
    "sec": "6.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Gamma sums with a common rate",
    "oneLine": "Independent gamma variables with a shared rate add their shape parameters.",
    "statement": "<p>If independent $X_i\\sim\\operatorname{Gamma}(\\alpha_i,\\lambda)$ use shape-rate parameterization, then $\\sum_iX_i\\sim\\operatorname{Gamma}(\\sum_i\\alpha_i,\\lambda)$. In particular, a sum of $n$ independent exponential$(\\lambda)$ variables is gamma$(n,\\lambda)$.</p>",
    "intuition": "If a job has several independent waiting stages with the same pace, total wait stays in the gamma family and its shape counts the combined stages.",
    "needs": [
      "c.prob.6.3.1"
    ],
    "traps": [
      "The rates must agree for this simple closure result.",
      "Check whether a source defines gamma's second parameter as rate or scale."
    ],
    "proof": {
      "idea": "Convolve two gamma densities, substitute $u=y/s$, and identify the beta integral; induction gives the finite-sum case.",
      "why": "Convolution combines the powers while preserving the shared exponential tail.",
      "rungs": [
        {
          "why": "Multiply the two gamma kernels within the convolution.",
          "m": "$$e^{-\\lambda(s-y)}(s-y)^{\\alpha-1}e^{-\\lambda y}y^{\\beta-1}=e^{-\\lambda s}(s-y)^{\\alpha-1}y^{\\beta-1}$$",
          "meaning": "The shared rate makes the exponential factor independent of the split $y$."
        },
        {
          "why": "Scale the convolution variable by the total $s$.",
          "m": "$$\\int_0^s(s-y)^{\\alpha-1}y^{\\beta-1}dy=s^{\\alpha+\\beta-1}B(\\alpha,\\beta)$$",
          "meaning": "The beta integral supplies the normalization and the powers add to shape $\\alpha+\\beta$."
        },
        {
          "why": "Recognize the resulting normalized gamma density.",
          "m": "$$X+Y\\sim\\operatorname{Gamma}(\\alpha+\\beta,\\lambda)$$",
          "meaning": "The resulting sum keeps the rate and combines the shapes."
        }
      ],
      "ends": "Apply the two-variable result repeatedly to obtain the sum of any finite number of independent gamma variables with common rate."
    },
    "cards": [
      {
        "q": "What is the sum law for independent gamma variables with common rate $\\lambda$?",
        "a": "Gamma with the same rate and shape equal to the sum of the component shapes.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.3.2, pp. 265–266 (PDF pp. 265–266)."
  },
  {
    "id": "c.prob.6.3.4",
    "sec": "6.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Normal, Poisson and binomial sum laws",
    "oneLine": "Several familiar families are closed under independent addition.",
    "statement": "<p>For independent $X_i\\sim N(\\mu_i,\\sigma_i^2)$, $\\sum_iX_i\\sim N(\\sum_i\\mu_i,\\sum_i\\sigma_i^2)$. Independent Poisson variables add to Poisson with summed rates. Independent binomial variables with common success probability $p$ add to binomial with summed trial counts.</p>",
    "intuition": "If two independent stores get Poisson customer arrivals, their combined count is Poisson with the two rates added. Two binomial counts combine the same way only when each trial has the same success chance.",
    "needs": [
      "c.prob.6.3.1"
    ],
    "traps": [
      "Normal sums remain normal under independence.",
      "Binomial closure requires a common $p$; different probabilities generally do not give a binomial sum."
    ],
    "proof": {
      "idea": "Use convolution: normal density exponents complete a square; Poisson masses use the binomial theorem; binomial masses use Vandermonde's identity.",
      "why": "The family parameters combine because the independent component probabilities multiply and the possible allocations sum.",
      "rungs": [
        {
          "why": "For independent variables, convolution sums over all ways to split a total.",
          "m": "$$P(X+Y=k)=\\sum_jP(X=j)P(Y=k-j)$$",
          "meaning": "Every decomposition of the total contributes its product probability."
        },
        {
          "why": "For Poisson masses, factor the terms independent of the allocation and apply the binomial theorem.",
          "m": "$$e^{-(\\lambda_1+\\lambda_2)}\\frac{(\\lambda_1+\\lambda_2)^k}{k!}$$",
          "meaning": "The sum has the Poisson form with the combined rate."
        },
        {
          "why": "For binomial counts with shared $p$, count allocations across the two trial groups.",
          "m": "$$\\binom{n+m}{k}p^k(1-p)^{n+m-k}$$",
          "meaning": "Pooling the trials preserves a common success probability and adds their counts."
        }
      ],
      "ends": "For independent normal summands, the same convolution principle gives summed means and variances."
    },
    "cards": [
      {
        "q": "State the addition rule for independent Poisson variables.",
        "a": "Their sum is Poisson with parameter equal to the sum of the parameters.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.3.3–6.3.4, pp. 266–269 (PDF pp. 266–269)."
  },
  {
    "id": "c.prob.6.4.1",
    "sec": "6.4",
    "kind": "definition",
    "tier": "core",
    "title": "Conditional pmf",
    "oneLine": "Conditioning a discrete variable on Y=y means dividing the joint mass by the marginal mass at y.",
    "statement": "<p>When $P(Y=y)>0$, $p_{X\\mid Y}(x\\mid y)=P(X=x\\mid Y=y)=p_{X,Y}(x,y)/p_Y(y)$. The conditional CDF is the sum of these conditional masses up to its argument.</p>",
    "intuition": "Suppose a table records a customer’s chosen store X and purchase Y. After learning the purchase value y, keep only that column of the table and rescale its entries to make a new probability table for the store.",
    "needs": [
      "c.prob.6.1.2"
    ],
    "traps": [
      "The conditioning value must have positive marginal mass.",
      "Divide by $p_Y(y)$, not by $p_X(x)$."
    ],
    "cards": [
      {
        "q": "State the conditional pmf formula.",
        "a": "$p_{X\\mid Y}(x\\mid y)=p_{X,Y}(x,y)/p_Y(y)$ when $p_Y(y)>0$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.4, pp. 270–272 (PDF pp. 270–272)."
  },
  {
    "id": "c.prob.6.4.2",
    "sec": "6.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Poisson splitting conditional on a total",
    "oneLine": "Given a total of n events from two independent Poisson counts, the allocation to the first is binomial.",
    "statement": "<p>If independent $X\\sim\\operatorname{Poisson}(\\lambda_1)$ and $Y\\sim\\operatorname{Poisson}(\\lambda_2)$, then $X\\mid(X+Y=n)\\sim\\operatorname{Binomial}(n,\\lambda_1/(\\lambda_1+\\lambda_2))$.</p>",
    "intuition": "Two independent phone lines receive calls at different rates. If you know there were 10 calls altogether, a call is more likely to have come from the busier line, in proportion to its rate.",
    "needs": [
      "c.prob.6.4.1",
      "c.prob.6.3.4"
    ],
    "traps": [
      "The binomial success probability is the first rate divided by the sum of both rates.",
      "The total being conditioned on is $X+Y$, not either count separately."
    ],
    "proof": {
      "idea": "Insert the independent Poisson masses into the conditional pmf and cancel the Poisson total mass.",
      "why": "The conditional allocation law reveals how the total rate is divided among independent sources.",
      "rungs": [
        {
          "why": "Write the conditional probability as a ratio of joint mass to total mass.",
          "m": "$$P(X=k\\mid X+Y=n)=\\frac{P(X=k)P(Y=n-k)}{P(X+Y=n)}$$",
          "meaning": "Independence factors the numerator into the two component count probabilities."
        },
        {
          "why": "Substitute the Poisson formulas and simplify.",
          "m": "$$\\binom nk\\left(\\frac{\\lambda_1}{\\lambda_1+\\lambda_2}\\right)^k\\left(\\frac{\\lambda_2}{\\lambda_1+\\lambda_2}\\right)^{n-k}$$",
          "meaning": "The result has exactly the binomial pmf form."
        }
      ],
      "ends": "Thus the total is Poisson while the conditional allocation is binomial."
    },
    "cards": [
      {
        "q": "Give the conditional law of $X$ given $X+Y=n$ for independent Poisson counts.",
        "a": "$\\operatorname{Binomial}(n,\\lambda_1/(\\lambda_1+\\lambda_2))$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.4, pp. 270–271 (PDF pp. 270–271)."
  },
  {
    "id": "c.prob.6.5.1",
    "sec": "6.5",
    "kind": "definition",
    "tier": "core",
    "title": "Conditional density",
    "oneLine": "For joint continuous variables, divide the joint density by the conditioning variable’s marginal density.",
    "statement": "<p>For $f_Y(y)>0$, define $f_{X\\mid Y}(x\\mid y)=f_{X,Y}(x,y)/f_Y(y)$. Then $P(X\\in A\\mid Y=y)=\\int_Af_{X\\mid Y}(x\\mid y)dx$ and $F_{X\\mid Y}(a\\mid y)=\\int_{-\\infty}^a f_{X\\mid Y}(x\\mid y)dx$.</p>",
    "intuition": "For a continuous measurement, the chance it equals exactly 5 is zero, so “given Y=5” cannot mean dividing by that chance. Instead, look at a very thin slice near 5 and compare how much joint density it contains.",
    "needs": [
      "c.prob.6.1.3"
    ],
    "traps": [
      "The formula applies for marginal-density values $f_Y(y)>0$ (almost everywhere conventions may define versions elsewhere).",
      "The denominator is the marginal density at the observed value, not a probability of the singleton."
    ],
    "cards": [
      {
        "q": "State the conditional density of $X$ given $Y=y$.",
        "a": "$f_{X\\mid Y}(x\\mid y)=f_{X,Y}(x,y)/f_Y(y)$ where $f_Y(y)>0$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.5, pp. 273–276 (PDF pp. 273–276)."
  },
  {
    "id": "c.prob.6.5.2",
    "sec": "6.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Conditional law of a bivariate normal",
    "oneLine": "A bivariate normal slice is normal, with conditional mean shifted linearly by the observed coordinate.",
    "statement": "<p>If $(X,Y)$ is bivariate normal with means $\\mu_X,\\mu_Y$, standard deviations $\\sigma_X,\\sigma_Y$ and correlation $\\rho$, then $X\\mid Y=y$ is normal with mean $\\mu_X+\\rho\\frac{\\sigma_X}{\\sigma_Y}(y-\\mu_Y)$ and variance $\\sigma_X^2(1-\\rho^2)$.</p>",
    "intuition": "For height and weight in a bell-shaped population, a taller-than-average height shifts the predicted weight upward. The correlation tells how much to shift; stronger link means less leftover uncertainty.",
    "needs": [
      "c.prob.6.5.1",
      "c.prob.6.2.2"
    ],
    "traps": [
      "The conditional variance does not depend on $y$ for a bivariate normal pair.",
      "Use standard deviations in the mean adjustment, variances in the variance formula."
    ],
    "proof": {
      "idea": "Substitute the bivariate normal density into the conditional-density quotient and complete the square in x.",
      "why": "The completed square exposes a normal kernel in x, whose center and scale give the conditional parameters.",
      "rungs": [
        {
          "why": "Divide the joint density by the marginal density of Y.",
          "m": "$$f_{X|Y}(x|y)=f_{X,Y}(x,y)/f_Y(y)$$",
          "meaning": "In words, Divide the joint density by the marginal density of Y."
        },
        {
          "why": "Collect terms depending on x and complete their square.",
          "m": "$$[x-\\{\\mu_X+\\rho(\\sigma_X/\\sigma_Y)(y-\\mu_Y)\\}]^2/[2\\sigma_X^2(1-\\rho^2)]$$",
          "meaning": "In words, Collect terms depending on x and complete their square."
        },
        {
          "why": "Read the mean and variance from the normalized normal kernel.",
          "m": "$$X|Y=y\\sim N(\\mu_X+\\rho(\\sigma_X/\\sigma_Y)(y-\\mu_Y),\\,\\sigma_X^2(1-\\rho^2))$$",
          "meaning": "In words, Read the mean and variance from the normalized normal kernel."
        }
      ],
      "ends": "The residual variance is nonnegative for a valid correlation; at |rho|=1 the conditional law is degenerate and the density formula is understood as a limit."
    },
    "cards": [
      {
        "q": "State the conditional distribution $X\\mid Y=y$ for a bivariate normal pair.",
        "a": "Normal with mean $\\mu_X+\\rho(\\sigma_X/\\sigma_Y)(y-\\mu_Y)$ and variance $\\sigma_X^2(1-\\rho^2)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.5, bivariate normal discussion, PDF pp. 274–275."
  },
  {
    "id": "c.prob.6.5.3",
    "sec": "6.5",
    "kind": "technique",
    "tier": "extra",
    "title": "Conditioning on an event or latent variable",
    "oneLine": "When conditioning on a region, truncate and renormalize; when a continuous variable is observed through data, Bayes updates its density.",
    "statement": "<p>For an event $A$ with positive probability, a continuous variable has conditional density $f_{X\\mid X\\in A}(x)=f_X(x)/P(X\\in A)$ on $A$, zero outside. If a parameter $\\Theta$ has prior density $f_\\Theta$ and data $N=n$ have likelihood $L(n\\mid\\theta)$, then $f_{\\Theta\\mid N}(\\theta\\mid n)\\propto L(n\\mid\\theta)f_\\Theta(\\theta)$.</p>",
    "intuition": "If you learn a person tested positive, cross out the cases with a negative result and rescale the rest. If disease risk is unknown, first give each risk level its starting chance, then favor levels that make the test result more likely.",
    "needs": [
      "c.prob.6.5.1"
    ],
    "traps": [
      "The event-conditioned density denominator is the event probability $\\int_A f$, not a point density.",
      "A posterior proportionality still needs a normalizing constant."
    ],
    "cards": [
      {
        "q": "How does conditioning on a region $A$ alter a density?",
        "a": "Restrict to $A$ and divide by $P(X\\in A)$ so the retained density integrates to 1.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.5, conditioning on events and the beta posterior example, PDF pp. 275–276."
  },
  {
    "id": "c.prob.6.6.1",
    "sec": "6.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Order statistics of an iid continuous sample",
    "oneLine": "The kth smallest sample value has a binomial-count CDF and a beta-shaped density factor.",
    "statement": "<p>Let $X_1,\\ldots,X_n$ be iid continuous with CDF $F$ and density $f$, and write $X_{(k)}$ for the kth smallest. Then $F_{X_{(k)}}(x)=\\sum_{j=k}^n\\binom njF(x)^j[1-F(x)]^{n-j}$, and $f_{X_{(k)}}(x)=\\frac{n!}{(k-1)!(n-k)!}F(x)^{k-1}[1-F(x)]^{n-k}f(x)$.</p>",
    "intuition": "For 5 exam scores, the third-smallest score is at most 70 exactly when at least 3 scores are at most 70. Counting how many land below the cutoff gives the order statistic’s chance.",
    "needs": [
      "c.prob.6.1.3"
    ],
    "traps": [
      "Use $k-1$ observations below the kth value and $n-k$ above it.",
      "The joint order-statistic density lives only on the ordered region $x_1<\\cdots<x_n$."
    ],
    "proof": {
      "idea": "Count how many iid observations fall below $x$ for the CDF; partition which observation occupies the kth position for the density.",
      "why": "Ordering an iid sample converts threshold comparisons into a binomial count.",
      "rungs": [
        {
          "why": "Count the number of observations at most $x$.",
          "m": "$$N_x=\\sum_{i=1}^n1_{\\{X_i\\le x\\}}\\sim\\operatorname{Binomial}(n,F(x))$$",
          "meaning": "Each independent observation is below the threshold with probability $F(x)$."
        },
        {
          "why": "The kth value is at most $x$ exactly when at least $k$ observations are below the threshold.",
          "m": "$$P(X_{(k)}\\le x)=P(N_x\\ge k)$$",
          "meaning": "A sample needs $k$ successes in the below-threshold count for its kth order statistic to lie there."
        },
        {
          "why": "Differentiate the binomial tail or select the one observation near $x$ and the observations on either side.",
          "m": "$$f_{X_{(k)}}(x)=\\frac{n!}{(k-1)!(n-k)!}F^{k-1}(1-F)^{n-k}f(x)$$",
          "meaning": "The coefficient counts assignments to below, near, and above groups; $f(x)dx$ supplies the near-$x$ probability."
        }
      ],
      "ends": "The joint density of all ordered values is $n!\\prod_i f(x_i)$ on $x_1<\\cdots<x_n$ because each ordering of iid distinct observations has the same product density."
    },
    "cards": [
      {
        "q": "State the CDF characterization of $X_{(k)}$.",
        "a": "$X_{(k)}\\le x$ iff at least $k$ sample values are at most $x$; thus its CDF is a binomial upper tail with success probability $F(x)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.6, pp. 277–279 (PDF pp. 277–279)."
  },
  {
    "id": "c.prob.6.6.2",
    "sec": "6.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Range of an iid sample",
    "oneLine": "The sample range is largest minus smallest; its law follows from the joint law of the two extremes.",
    "statement": "<p>For iid continuous observations, $R=X_{(n)}-X_{(1)}$. For $a\\ge0$, $P(R\\le a)=n\\int_{-\\infty}^{\\infty}[F(x+a)-F(x)]^{n-1}f(x)dx$. For $n$ iid uniform$(0,1)$ observations, $f_R(a)=n(n-1)a^{n-2}(1-a)$ for $0<a<1$.</p>",
    "intuition": "If the first observation is the smallest and sits near x, a range below a means all the other observations must fit between x and x+a. Add over every possible place for that minimum.",
    "needs": [
      "c.prob.6.6.1"
    ],
    "traps": [
      "A range condition involves both extremes, not merely the maximum.",
      "The uniform formula is supported only on $0<a<1$."
    ],
    "proof": {
      "idea": "Use the joint density of the sample minimum and maximum, then integrate over pairs whose difference is at most a.",
      "why": "Once the minimum is fixed at x, all n−1 other observations must lie between x and x+a.",
      "rungs": [
        {
          "why": "The joint density of the minimum and maximum is obtained from the order-statistic density by integrating interior observations.",
          "m": "$$f_{X_{(1)},X_{(n)}}(x,z)=n(n-1)[F(z)-F(x)]^{n-2}f(x)f(z),\\quad x<z$$",
          "meaning": "In words, The joint density of the minimum and maximum is obtained from the order-statistic density by integrating interior observations."
        },
        {
          "why": "Integrate over x<z≤x+a and then integrate out z.",
          "m": "$$P(R\\le a)=n\\int [F(x+a)-F(x)]^{n-1}f(x)dx$$",
          "meaning": "In words, Integrate over x<z≤x+a and then integrate out z."
        },
        {
          "why": "For uniform(0,1), split the minimum location into the interval where x+a≤1 and the boundary strip.",
          "m": "$$P(R\\le a)=n(1-a)a^{n-1}+a^n$$",
          "meaning": "In words, For uniform(0,1), split the minimum location into the interval where x+a≤1 and the boundary strip."
        }
      ],
      "ends": "Differentiating the uniform CDF gives $f_R(a)=n(n-1)a^{n-2}(1-a)$ on (0,1)."
    },
    "cards": [
      {
        "q": "What event is used to derive the CDF of a sample range?",
        "a": "Choose the minimum at $x$ and require every other observation to fall in $(x,x+a]$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.6, pp. 279–280 (PDF pp. 279–280)."
  },
  {
    "id": "c.prob.6.7.1",
    "sec": "6.7",
    "kind": "theorem",
    "tier": "core",
    "title": "Multivariate change of variables",
    "oneLine": "A one-to-one smooth transformation changes joint density by the absolute inverse-Jacobian determinant.",
    "statement": "<p>Let $(Y_1,Y_2)=g(X_1,X_2)$ be one-to-one and differentiable with differentiable inverse $(x_1,x_2)=h(y_1,y_2)$. Then $f_{Y_1,Y_2}(y_1,y_2)=f_{X_1,X_2}(h(y_1,y_2))\\left|\\det Dh(y_1,y_2)\\right|$ on the transformed support. The same rule holds in $n$ dimensions.</p>",
    "intuition": "Changing from map coordinates to distance and direction stretches little patches. The Jacobian is the stretch factor, so the probability density must shrink or grow by the opposite amount to keep the same probability.",
    "needs": [
      "c.prob.6.1.3"
    ],
    "traps": [
      "Use the determinant of the inverse map when substituting into the original density.",
      "Transform the support and include all inverse branches; if the map is not one-to-one, sum branch contributions."
    ],
    "proof": {
      "idea": "Apply probability conservation to a small neighborhood and use the multivariable substitution theorem.",
      "why": "The Jacobian determinant is the local area or volume scale between input and output coordinates.",
      "rungs": [
        {
          "why": "Write probability in the original coordinates over the inverse image of a small output region.",
          "m": "$$P(Y\\in B)=\\int_{g^{-1}(B)}f_X(x)dx$$",
          "meaning": "In words, Write probability in the original coordinates over the inverse image of a small output region."
        },
        {
          "why": "Substitute x=h(y) in the integral.",
          "m": "$$dx=|\\det Dh(y)|dy$$",
          "meaning": "In words, Substitute x=h(y) in the integral."
        },
        {
          "why": "Read off the density in the transformed coordinates.",
          "m": "$$f_Y(y)=f_X(h(y))|\\det Dh(y)|$$",
          "meaning": "In words, Read off the density in the transformed coordinates."
        }
      ],
      "ends": "The inverse Jacobian formula applies when the transformation is one-to-one and differentiable with nonzero determinant; multiple inverse branches contribute a sum."
    },
    "cards": [
      {
        "q": "State the density change-of-variables rule using the inverse map $x=h(y)$.",
        "a": "$f_Y(y)=f_X(h(y))|\\det Dh(y)|$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.7, pp. 281–286 (PDF pp. 281–286)."
  },
  {
    "id": "c.prob.6.7.2",
    "sec": "6.7",
    "kind": "theorem",
    "tier": "extra",
    "title": "Gamma sum and proportion",
    "oneLine": "Independent equal-rate gamma variables separate into an independent total and a beta proportion.",
    "statement": "<p>If independent $X\\sim\\operatorname{Gamma}(\\alpha,\\lambda)$ and $Y\\sim\\operatorname{Gamma}(\\beta,\\lambda)$, set $U=X+Y$ and $V=X/(X+Y)$. Then $U\\sim\\operatorname{Gamma}(\\alpha+\\beta,\\lambda)$, $V\\sim\\operatorname{Beta}(\\alpha,\\beta)$, and $U,V$ are independent.</p>",
    "intuition": "For two independent gamma amounts, their sum tells total size and their ratio tells the split. With the same rate, learning the total gives no extra clue about the split.",
    "needs": [
      "c.prob.6.3.3",
      "c.prob.6.7.1"
    ],
    "traps": [
      "The gamma rates must match.",
      "Use $0<v<1$ and $u>0$; the inverse transformation is $x=uv$, $y=u(1-v)$."
    ],
    "proof": {
      "idea": "Transform $(x,y)$ to $(u,v)$ and use inverse Jacobian $u$; the resulting joint density factors into gamma and beta kernels.",
      "why": "Factorization proves both the marginal families and independence of the total and fraction.",
      "rungs": [
        {
          "why": "Invert the transformation and compute its area factor.",
          "m": "$$x=uv,\\quad y=u(1-v),\\quad \\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|=u$$",
          "meaning": "A small region in $(u,v)$ corresponds to an original area enlarged by factor $u$."
        },
        {
          "why": "Substitute the inverse into the product gamma density.",
          "m": "$$f_{U,V}(u,v)\\propto e^{-\\lambda u}u^{\\alpha+\\beta-1}v^{\\alpha-1}(1-v)^{\\beta-1}$$",
          "meaning": "The total-dependent and proportion-dependent terms separate."
        },
        {
          "why": "Normalize each factor as a gamma and beta density.",
          "m": "$$f_{U,V}(u,v)=f_U(u)f_V(v)$$",
          "meaning": "A product of marginal densities gives independence as well as the two named laws."
        }
      ],
      "ends": "This ratio result underlies beta posteriors and random proportions formed from independent gamma components."
    },
    "cards": [
      {
        "q": "For equal-rate independent gamma $X,Y$, what are $X+Y$ and $X/(X+Y)$?",
        "a": "The total is gamma$(\\alpha+\\beta,\\lambda)$; the ratio is beta$(\\alpha,\\beta)$; they are independent.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.7 Example 7c, pp. 284–285 (PDF pp. 284–285)."
  },
  {
    "id": "c.prob.6.8.1",
    "sec": "6.8",
    "kind": "definition",
    "tier": "core",
    "title": "Exchangeability",
    "oneLine": "An exchangeable sequence has a joint law unchanged by any permutation of its coordinates.",
    "statement": "<p>$X_1,\\ldots,X_n$ are exchangeable if for every permutation $\\pi$ and all measurable sets $A_1,\\ldots,A_n$, $P(X_1\\in A_1,\\ldots,X_n\\in A_n)=P(X_{\\pi(1)}\\in A_1,\\ldots,X_{\\pi(n)}\\in A_n)$. In the discrete case, the joint pmf is symmetric in its arguments.</p>",
    "intuition": "If a deck is shuffled, the chance pattern does not favor card position 1 over position 2; swapping labels leaves it unchanged. That is exchangeability. It does not mean draws are independent, as cards drawn without replacement show.",
    "needs": [
      "c.prob.6.1.2"
    ],
    "traps": [
      "Sampling without replacement is exchangeable but dependent.",
      "Equal marginal distributions alone are not enough for exchangeability."
    ],
    "cards": [
      {
        "q": "Define exchangeability and state one implication.",
        "a": "The joint law is invariant under every coordinate permutation; all coordinates then have the same marginal law.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.8, pp. 287–289 (PDF pp. 287–289)."
  },
  {
    "id": "c.prob.6.8.2",
    "sec": "6.8",
    "kind": "example",
    "tier": "extra",
    "title": "Exchangeability from sampling mechanisms",
    "oneLine": "Random permutations of a fixed composition and a shared random success probability produce exchangeable observations.",
    "statement": "<p>Indicators from sampling a fixed set without replacement are exchangeable: the joint probability depends on how many ones occur, not their positions. Likewise, if $\\Theta$ is sampled once and, conditional on $\\Theta$, trials are iid Bernoulli$(\\Theta)$, the unconditional joint mass of a binary vector with $r$ ones is $E[\\Theta^r(1-\\Theta)^{n-r}]$, which depends only on $r$.</p>",
    "intuition": "In a no-replacement draw, the first and second positions are treated alike even though they affect one another. Likewise, repeated coin flips with one unknown shared bias look alike, but seeing a head can make another head more likely.",
    "needs": [
      "c.prob.6.8.1"
    ],
    "traps": [
      "Exchangeable Bernoulli variables need not be independent.",
      "In sampling without replacement, later draws depend on earlier draws even though their positions are symmetric."
    ],
    "cards": [
      {
        "q": "Why are conditionally iid Bernoulli trials with a shared random $\\Theta$ exchangeable?",
        "a": "Their joint mass is $E[\\Theta^r(1-\\Theta)^{n-r}]$, depending on the vector only through its number $r$ of ones.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, §6.8 Examples 8a and 8c, pp. 287–288 (PDF pp. 287–288)."
  }
]
);
