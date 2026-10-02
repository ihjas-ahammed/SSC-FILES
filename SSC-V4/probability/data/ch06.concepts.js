var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.6.1.1",
    "sec": "6.1",
    "kind": "definition",
    "tier": "core",
    "title": "Joint CDF and rectangle probabilities",
    "oneLine": "A joint CDF gives the chance two values are both below their cutoffs. To isolate a rectangle, subtract the unwanted left and bottom parts, then add their overlap back once.",
    "statement": "<p>A joint CDF gives the chance two values are both below their cutoffs. To isolate a rectangle, subtract the unwanted left and bottom parts, then add their overlap back once.</p><p>For random variables $X,Y$, define $F_{X,Y}(x,y)=P(X\\le x,Y\\le y)$. For $a_1<a_2$ and $b_1<b_2$,</p><p>$$P(a_1<X\\le a_2,\\ b_1<Y\\le b_2)=F(a_2,b_2)-F(a_1,b_2)-F(a_2,b_1)+F(a_1,b_1).$$</p>",
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
    "oneLine": "A joint probability table records the chance of each pair of values. Add across one coordinate to get the probabilities for the other coordinate alone; these are called marginal probabilities.",
    "statement": "<p>A joint probability table records the chance of each pair of values. Add across one coordinate to get the probabilities for the other coordinate alone; these are called marginal probabilities.</p><p>For discrete $X,Y$, $p_{X,Y}(x,y)=P(X=x,Y=y)$. The marginals are $p_X(x)=\\sum_y p_{X,Y}(x,y)$ and $p_Y(y)=\\sum_x p_{X,Y}(x,y)$. The joint masses are nonnegative and sum to 1.</p>",
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
    "oneLine": "A joint density spreads probability over a plane. Integrate over a region to find its probability. To keep only X, add up the density over every possible Y.",
    "statement": "<p>A joint density spreads probability over a plane. Integrate over a region to find its probability. To keep only X, add up the density over every possible Y.</p><p>A joint density $f_{X,Y}$ is nonnegative, integrates to 1 over $\\mathbb R^2$, and assigns $P((X,Y)\\in A)=\\iint_A f_{X,Y}(x,y)\\,dx\\,dy$. Marginals are $f_X(x)=\\int_{-\\infty}^{\\infty}f_{X,Y}(x,y)dy$ and $f_Y(y)=\\int_{-\\infty}^{\\infty}f_{X,Y}(x,y)dx$.</p>",
    "intuition": "A joint density is like a heat map for pairs such as height and weight. To get the height distribution alone, add up the heat across all possible weights.",
    "needs": [
      "c.prob.6.1.1"
    ],
    "traps": [
      "Set the integrand to zero outside the support before integrating.",
      "A valid density can have a complicated support; marginal integration limits may depend on the retained coordinate."
    ],
    "proof": {
      "idea": "A joint density spreads probability over a plane. Integrate over a region to find its probability. To keep only X, add up the density over every possible Y.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Keep the desired interval of X and include every Y.",
          "m": "$$P(a<X\\le b)=\\int_a^b\\int_{\\mathbb R}f_{X,Y}(x,y)\\,dy\\,dx$$",
          "meaning": "The double integral adds probability over the whole vertical strip."
        },
        {
          "why": "Add the density along Y for each fixed X.",
          "m": "$$f_X(x):=\\int_{\\mathbb R}f_{X,Y}(x,y)\\,dy$$",
          "meaning": "The result is a curve in x alone: the marginal density of X."
        },
        {
          "why": "Integrate that curve over the interval.",
          "m": "$$P(a<X\\le b)=\\int_a^b f_X(x)\\,dx$$",
          "meaning": "It gives the same strip probability, which is why it really is the density for X."
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
    "oneLine": "Independence means learning about one variable does not change the probabilities for the other. The chance of one event from each variable occurring together is the product of their separate chances.",
    "statement": "<p>Independence means learning about one variable does not change the probabilities for the other. The chance of one event from each variable occurring together is the product of their separate chances.</p><p>$X,Y$ are independent if $P(X\\in A,Y\\in B)=P(X\\in A)P(Y\\in B)$ for every measurable $A,B$. For discrete variables this is equivalent to $p_{X,Y}(x,y)=p_X(x)p_Y(y)$; for jointly continuous variables it is equivalent to $f_{X,Y}(x,y)=f_X(x)f_Y(y)$ except on a set of area zero.</p>",
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
    "oneLine": "If two inputs are independent, calculating a separate output from each does not create a connection between them. Correlation measures only a linear connection; zero correlation ensures independence for jointly normal pairs.",
    "statement": "<p>If two inputs are independent, calculating a separate output from each does not create a connection between them. Correlation measures only a linear connection; zero correlation ensures independence for jointly normal pairs.</p><p>If $X$ and $Y$ are independent and $g,h$ define valid random variables, then $g(X)$ and $h(Y)$ are independent. For a jointly normal pair, independence is equivalent to zero correlation.</p>",
    "intuition": "If two independent dice are each transformed separately—for example, one is squared and one is doubled—the results remain independent. A zero-correlation shortcut works only for a jointly normal pair, such as two coordinates from one bell-shaped cloud.",
    "needs": [
      "c.prob.6.2.1"
    ],
    "traps": [
      "Functions that reuse both variables need not preserve independence.",
      "Zero correlation implies independence for a jointly normal pair, not for arbitrary pairs."
    ],
    "proof": {
      "idea": "If two inputs are independent, calculating a separate output from each does not create a connection between them. Correlation measures only a linear connection; zero correlation ensures independence for jointly normal pairs.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Translate each output event into a condition on its input.",
          "m": "$$\\{g(X)\\in C\\}=\\{X\\in g^{-1}(C)\\},\\quad \\{h(Y)\\in D\\}=\\{Y\\in h^{-1}(D)\\}$$",
          "meaning": "The notation g inverse of C means all inputs whose output lands in C; it does not require g to have a unique inverse."
        },
        {
          "why": "Use independence for these two input conditions.",
          "m": "$$P(g(X)\\in C,h(Y)\\in D)=P(X\\in g^{-1}(C))P(Y\\in h^{-1}(D))$$",
          "meaning": "Each condition involves a separate independent variable, so their joint chance factors."
        },
        {
          "why": "Translate the two factors back into output probabilities.",
          "m": "$$P(g(X)\\in C,h(Y)\\in D)=P(g(X)\\in C)P(h(Y)\\in D)$$",
          "meaning": "The resulting product rule is exactly independence of g(X) and h(Y)."
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
    "oneLine": "A total can be made by many pairs of values. For each possible value of Y, work out the needed value of X, multiply their densities or probabilities, and add over all possible splits. This is called convolution.",
    "statement": "<p>A total can be made by many pairs of values. For each possible value of Y, work out the needed value of X, multiply their densities or probabilities, and add over all possible splits. This is called convolution.</p><p>If independent continuous $X,Y$ have densities $f_X,f_Y$, then $f_{X+Y}(s)=\\int_{-\\infty}^{\\infty}f_X(s-y)f_Y(y)dy$. Equivalently, $F_{X+Y}(s)=\\int F_X(s-y)f_Y(y)dy$. For discrete independent variables, $P(X+Y=s)=\\sum_yP(X=s-y)P(Y=y)$.</p>",
    "intuition": "To get a total of 7 from two dice, several pairs work: (1,6), (2,5), and so on. For independent variables, multiply the chance of each pair and add all pairs that reach the requested total.",
    "needs": [
      "c.prob.6.2.1"
    ],
    "traps": [
      "The convolution formula uses independence.",
      "Set the integration range from both supports; it is often not all real numbers after zeroing the densities."
    ],
    "proof": {
      "idea": "A total can be made by many pairs of values. For each possible value of Y, work out the needed value of X, multiply their densities or probabilities, and add over all possible splits. This is called convolution.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "First suppose Y has a particular value y.",
          "m": "$$F_{X+Y}(s)=P(X+Y\\le s)=\\int P(X\\le s-y\\mid Y=y)f_Y(y)dy$$",
          "meaning": "To keep the total at most s, X must be at most s minus y; average this over the possible y values."
        },
        {
          "why": "Use the same X distribution for every y.",
          "m": "$$F_{X+Y}(s)=\\int F_X(s-y)f_Y(y)dy$$",
          "meaning": "Independence means knowing Y does not change X’s probabilities."
        },
        {
          "why": "Differentiate the accumulated probability.",
          "m": "$$f_{X+Y}(s)=\\int f_X(s-y)f_Y(y)dy$$",
          "meaning": "The integral adds density over all pairs whose total is s. The change of variables (x,y) to (x+y,y) also proves the formula when differentiation under the integral is unavailable."
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
    "oneLine": "Two uniform values near 0 can make a small total in only a few ways. Totals near 1 have more possible splits. The possibilities shrink again as the total approaches 2, producing a triangular density.",
    "statement": "<p>Two uniform values near 0 can make a small total in only a few ways. Totals near 1 have more possible splits. The possibilities shrink again as the total approaches 2, producing a triangular density.</p><p>For independent $X,Y\\sim\\operatorname{Unif}(0,1)$, $S=X+Y$ has density $f_S(s)=s$ for $0<s<1$, $2-s$ for $1\\le s<2$, and $0$ otherwise.</p>",
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
    "oneLine": "Gamma variables have a shape and a rate. When independent gamma variables share a rate, their sum keeps that rate and adds their shapes.",
    "statement": "<p>Gamma variables have a shape and a rate. When independent gamma variables share a rate, their sum keeps that rate and adds their shapes.</p><p>If independent $X_i\\sim\\operatorname{Gamma}(\\alpha_i,\\lambda)$ use shape-rate parameterization, then $\\sum_iX_i\\sim\\operatorname{Gamma}(\\sum_i\\alpha_i,\\lambda)$. In particular, a sum of $n$ independent exponential$(\\lambda)$ variables is gamma$(n,\\lambda)$.</p>",
    "intuition": "If a job has several independent waiting stages with the same pace, total wait stays in the gamma family and its shape counts the combined stages.",
    "needs": [
      "c.prob.6.3.1"
    ],
    "traps": [
      "The rates must agree for this simple closure result.",
      "Check whether a source defines gamma's second parameter as rate or scale."
    ],
    "proof": {
      "idea": "Gamma variables have a shape and a rate. When independent gamma variables share a rate, their sum keeps that rate and adds their shapes.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Multiply the densities for a split into s minus y and y.",
          "m": "$$e^{-\\lambda(s-y)}(s-y)^{\\alpha-1}e^{-\\lambda y}y^{\\beta-1}=e^{-\\lambda s}(s-y)^{\\alpha-1}y^{\\beta-1}$$",
          "meaning": "With a common rate, the two exponential factors combine into one factor depending only on s."
        },
        {
          "why": "Replace y by s times a fraction between 0 and 1.",
          "m": "$$\\int_0^s(s-y)^{\\alpha-1}y^{\\beta-1}dy=s^{\\alpha+\\beta-1}B(\\alpha,\\beta)$$",
          "meaning": "The remaining integral is a beta integral. Its normalizing value is Gamma(alpha)Gamma(beta)/Gamma(alpha+beta)."
        },
        {
          "why": "Put the normalizing constants back.",
          "m": "$$X+Y\\sim\\operatorname{Gamma}(\\alpha+\\beta,\\lambda)$$",
          "meaning": "The resulting density has gamma shape alpha plus beta and the original common rate."
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
    "oneLine": "Some distribution families stay in the same family when independent variables are added. The table below tells us which parameters add and which parameters must match.",
    "statement": "<p>Some distribution families stay in the same family when independent variables are added. The table below tells us which parameters add and which parameters must match.</p><p>For independent $X_i\\sim N(\\mu_i,\\sigma_i^2)$, $\\sum_iX_i\\sim N(\\sum_i\\mu_i,\\sum_i\\sigma_i^2)$. Independent Poisson variables add to Poisson with summed rates. Independent binomial variables with common success probability $p$ add to binomial with summed trial counts.</p>",
    "intuition": "If two independent stores get Poisson customer arrivals, their combined count is Poisson with the two rates added. Two binomial counts combine the same way only when each trial has the same success chance.",
    "needs": [
      "c.prob.6.3.1"
    ],
    "traps": [
      "Normal sums remain normal under independence.",
      "Binomial closure requires a common $p$; different probabilities generally do not give a binomial sum."
    ],
    "proof": {
      "idea": "Some distribution families stay in the same family when independent variables are added. The table below tells us which parameters add and which parameters must match.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "List every split of the total k.",
          "m": "$$P(X+Y=k)=\\sum_jP(X=j)P(Y=k-j)$$",
          "meaning": "Independent component probabilities multiply; the probabilities of different splits add."
        },
        {
          "why": "Insert the Poisson probabilities and add the powers.",
          "m": "$$e^{-(\\lambda_1+\\lambda_2)}\\frac{(\\lambda_1+\\lambda_2)^k}{k!}$$",
          "meaning": "The binomial theorem turns the split sum into the combined rate raised to k."
        },
        {
          "why": "For binomials, pool the two groups of trials.",
          "m": "$$\\binom{n+m}{k}p^k(1-p)^{n+m-k}$$",
          "meaning": "With the same success chance, the pooled n plus m independent trials are binomial with that chance."
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
    "oneLine": "Given Y equals y, keep only that column of the joint probability table. Divide by its total to make the remaining probabilities add up to 1.",
    "statement": "<p>Given Y equals y, keep only that column of the joint probability table. Divide by its total to make the remaining probabilities add up to 1.</p><p>When $P(Y=y)>0$, $p_{X\\mid Y}(x\\mid y)=P(X=x\\mid Y=y)=p_{X,Y}(x,y)/p_Y(y)$. The conditional CDF is the sum of these conditional masses up to its argument.</p>",
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
    "oneLine": "Two independent Poisson sources contribute to a total count. Once the total is fixed, each event belongs to the first source with probability equal to its share of the total rate.",
    "statement": "<p>Two independent Poisson sources contribute to a total count. Once the total is fixed, each event belongs to the first source with probability equal to its share of the total rate.</p><p>If independent $X\\sim\\operatorname{Poisson}(\\lambda_1)$ and $Y\\sim\\operatorname{Poisson}(\\lambda_2)$, then $X\\mid(X+Y=n)\\sim\\operatorname{Binomial}(n,\\lambda_1/(\\lambda_1+\\lambda_2))$.</p>",
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
      "idea": "Two independent Poisson sources contribute to a total count. Once the total is fixed, each event belongs to the first source with probability equal to its share of the total rate.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Divide the probability of a particular allocation by the probability of the total.",
          "m": "$$P(X=k\\mid X+Y=n)=\\frac{P(X=k)P(Y=n-k)}{P(X+Y=n)}$$",
          "meaning": "The numerator uses independence of the two source counts."
        },
        {
          "why": "Insert the Poisson formulas and cancel common factors.",
          "m": "$$\\binom nk\\left(\\frac{\\lambda_1}{\\lambda_1+\\lambda_2}\\right)^k\\left(\\frac{\\lambda_2}{\\lambda_1+\\lambda_2}\\right)^{n-k}$$",
          "meaning": "The remaining expression is the binomial mass with success probability equal to the first source’s rate share."
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
    "oneLine": "For a continuous observation Y equals y, use the density along that slice and divide by the total density along the slice. This gives a conditional density, even though the probability of one exact Y value is zero.",
    "statement": "<p>For a continuous observation Y equals y, use the density along that slice and divide by the total density along the slice. This gives a conditional density, even though the probability of one exact Y value is zero.</p><p>For $f_Y(y)>0$, define $f_{X\\mid Y}(x\\mid y)=f_{X,Y}(x,y)/f_Y(y)$. Then $P(X\\in A\\mid Y=y)=\\int_Af_{X\\mid Y}(x\\mid y)dx$ and $F_{X\\mid Y}(a\\mid y)=\\int_{-\\infty}^a f_{X\\mid Y}(x\\mid y)dx$.</p>",
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
    "oneLine": "For a jointly normal pair, knowing Y shifts the predicted average of X along a straight line. The remaining uncertainty is also normal, with the variance stated below.",
    "statement": "<p>For a jointly normal pair, knowing Y shifts the predicted average of X along a straight line. The remaining uncertainty is also normal, with the variance stated below.</p><p>If $(X,Y)$ is bivariate normal with means $\\mu_X,\\mu_Y$, standard deviations $\\sigma_X,\\sigma_Y$ and correlation $\\rho$, then $X\\mid Y=y$ is normal with mean $\\mu_X+\\rho\\frac{\\sigma_X}{\\sigma_Y}(y-\\mu_Y)$ and variance $\\sigma_X^2(1-\\rho^2)$.</p>",
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
      "idea": "For a jointly normal pair, knowing Y shifts the predicted average of X along a straight line. The remaining uncertainty is also normal, with the variance stated below.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Normalize the joint density along the observed Y slice.",
          "m": "$$f_{X|Y}(x|y)=f_{X,Y}(x,y)/f_Y(y)$$",
          "meaning": "Dividing by the Y marginal makes the density in x integrate to 1."
        },
        {
          "why": "Collect the x terms and complete the square.",
          "m": "$$[x-\\{\\mu_X+\\rho(\\sigma_X/\\sigma_Y)(y-\\mu_Y)\\}]^2/[2\\sigma_X^2(1-\\rho^2)]$$",
          "meaning": "This rewrites the exponent around its new center: the predicted mean after observing y."
        },
        {
          "why": "Read off the center and the squared width.",
          "m": "$$X|Y=y\\sim N(\\mu_X+\\rho(\\sigma_X/\\sigma_Y)(y-\\mu_Y),\\,\\sigma_X^2(1-\\rho^2))$$",
          "meaning": "These identify the conditional normal mean and variance. The displayed ordinary density requires absolute correlation less than 1."
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
    "oneLine": "Conditioning keeps the values compatible with the observation and rescales their probabilities to total 1. Bayes uses the same rule to update an uncertain parameter: multiply the old density by how well each parameter explains the data.",
    "statement": "<p>Conditioning keeps the values compatible with the observation and rescales their probabilities to total 1. Bayes uses the same rule to update an uncertain parameter: multiply the old density by how well each parameter explains the data.</p><p>For an event $A$ with positive probability, a continuous variable has conditional density $f_{X\\mid X\\in A}(x)=f_X(x)/P(X\\in A)$ on $A$, zero outside. If a parameter $\\Theta$ has prior density $f_\\Theta$ and data $N=n$ have likelihood $L(n\\mid\\theta)$, then $f_{\\Theta\\mid N}(\\theta\\mid n)\\propto L(n\\mid\\theta)f_\\Theta(\\theta)$.</p>",
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
    "oneLine": "Sort the sample from smallest to largest. The kth sorted value is below a cutoff exactly when at least k observations are below it. That turns an ordering problem into a success-count problem.",
    "statement": "<p>Sort the sample from smallest to largest. The kth sorted value is below a cutoff exactly when at least k observations are below it. That turns an ordering problem into a success-count problem.</p><p>Let $X_1,\\ldots,X_n$ be iid continuous with CDF $F$ and density $f$, and write $X_{(k)}$ for the kth smallest. Then $F_{X_{(k)}}(x)=\\sum_{j=k}^n\\binom njF(x)^j[1-F(x)]^{n-j}$, and $f_{X_{(k)}}(x)=\\frac{n!}{(k-1)!(n-k)!}F(x)^{k-1}[1-F(x)]^{n-k}f(x)$.</p>",
    "intuition": "For 5 exam scores, the third-smallest score is at most 70 exactly when at least 3 scores are at most 70. Counting how many land below the cutoff gives the order statistic’s chance.",
    "needs": [
      "c.prob.6.1.3"
    ],
    "traps": [
      "Use $k-1$ observations below the kth value and $n-k$ above it.",
      "The joint order-statistic density lives only on the ordered region $x_1<\\cdots<x_n$."
    ],
    "proof": {
      "idea": "Sort the sample from smallest to largest. The kth sorted value is below a cutoff exactly when at least k observations are below it. That turns an ordering problem into a success-count problem.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Count how many observations are below x.",
          "m": "$$N_x=\\sum_{i=1}^n1_{\\{X_i\\le x\\}}\\sim\\operatorname{Binomial}(n,F(x))$$",
          "meaning": "Each independent observation contributes a success with chance F(x), so the count is binomial."
        },
        {
          "why": "Relate the count to the kth sorted value.",
          "m": "$$P(X_{(k)}\\le x)=P(N_x\\ge k)$$",
          "meaning": "The kth value can be below x only if at least k observations are below x, and that condition is also sufficient."
        },
        {
          "why": "Differentiate the count probability.",
          "m": "$$f_{X_{(k)}}(x)=\\frac{n!}{(k-1)!(n-k)!}F^{k-1}(1-F)^{n-k}f(x)$$",
          "meaning": "Equivalently choose k minus 1 observations below x, one near x, and the remaining observations above x. The coefficient counts those choices."
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
    "oneLine": "The range is the largest sample value minus the smallest. Once the minimum is x, a range no more than a means every other observation lies between x and x plus a.",
    "statement": "<p>The range is the largest sample value minus the smallest. Once the minimum is x, a range no more than a means every other observation lies between x and x plus a.</p><p>For $n\\ge2$ iid continuous observations, $R=X_{(n)}-X_{(1)}$. For $a\\ge0$, $P(R\\le a)=n\\int_{-\\infty}^{\\infty}[F(x+a)-F(x)]^{n-1}f(x)dx$. For $n$ iid uniform$(0,1)$ observations, $f_R(a)=n(n-1)a^{n-2}(1-a)$ for $0<a<1$.</p>",
    "intuition": "If the first observation is the smallest and sits near x, a range below a means all the other observations must fit between x and x+a. Add over every possible place for that minimum.",
    "needs": [
      "c.prob.6.6.1"
    ],
    "traps": [
      "A range condition involves both extremes, not merely the maximum.",
      "The uniform formula is supported only on $0<a<1$."
    ],
    "proof": {
      "idea": "The range is the largest sample value minus the smallest. Once the minimum is x, a range no more than a means every other observation lies between x and x plus a.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Choose which observation is smallest and which is largest.",
          "m": "$$f_{X_{(1)},X_{(n)}}(x,z)=n(n-1)[F(z)-F(x)]^{n-2}f(x)f(z),\\quad x<z$$",
          "meaning": "The other n minus 2 observations must fall between those extremes; their independent chances multiply."
        },
        {
          "why": "Allow the maximum to be no more than a beyond the minimum.",
          "m": "$$P(R\\le a)=n\\int [F(x+a)-F(x)]^{n-1}f(x)dx$$",
          "meaning": "Integrating over the allowed maximum leaves the chance that all other values lie in a width-a window."
        },
        {
          "why": "For uniforms, split the minimum into an interior and an endpoint region.",
          "m": "$$P(R\\le a)=n(1-a)a^{n-1}+a^n$$",
          "meaning": "In the interior the window has full length a. Near the right endpoint only the part up to 1 is available. Add both integrals."
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
    "oneLine": "Changing coordinates stretches or shrinks small areas. To keep each area carrying the same probability, multiply the old density by the area scale of the inverse change. This scale is the absolute Jacobian determinant.",
    "statement": "<p>Changing coordinates stretches or shrinks small areas. To keep each area carrying the same probability, multiply the old density by the area scale of the inverse change. This scale is the absolute Jacobian determinant.</p><p>Let $(Y_1,Y_2)=g(X_1,X_2)$ be one-to-one and differentiable with differentiable inverse $(x_1,x_2)=h(y_1,y_2)$. Then $f_{Y_1,Y_2}(y_1,y_2)=f_{X_1,X_2}(h(y_1,y_2))\\left|\\det Dh(y_1,y_2)\\right|$ on the transformed support. The same rule holds in $n$ dimensions.</p>",
    "intuition": "Changing from map coordinates to distance and direction stretches little patches. The Jacobian is the stretch factor, so the probability density must shrink or grow by the opposite amount to keep the same probability.",
    "needs": [
      "c.prob.6.1.3"
    ],
    "traps": [
      "Use the determinant of the inverse map when substituting into the original density.",
      "Transform the support and include all inverse branches; if the map is not one-to-one, sum branch contributions."
    ],
    "proof": {
      "idea": "Changing coordinates stretches or shrinks small areas. To keep each area carrying the same probability, multiply the old density by the area scale of the inverse change. This scale is the absolute Jacobian determinant.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Find all input points that produce the desired output region.",
          "m": "$$P(Y\\in B)=\\int_{g^{-1}(B)}f_X(x)dx$$",
          "meaning": "Its probability is the integral of the original density over those inputs."
        },
        {
          "why": "Change the integral to the new coordinates.",
          "m": "$$dx=|\\det Dh(y)|dy$$",
          "meaning": "The determinant of the inverse derivative matrix gives the local area or volume scale. The absolute value keeps volume positive."
        },
        {
          "why": "Read the density multiplying the new volume element.",
          "m": "$$f_Y(y)=f_X(h(y))|\\det Dh(y)|$$",
          "meaning": "The old density evaluated at the inverse point, times the inverse volume scale, conserves probability."
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
    "oneLine": "Two independent gamma quantities with the same rate can be described by their total and the fraction contributed by the first. The total is gamma, the fraction is beta, and knowing one gives no information about the other.",
    "statement": "<p>Two independent gamma quantities with the same rate can be described by their total and the fraction contributed by the first. The total is gamma, the fraction is beta, and knowing one gives no information about the other.</p><p>If independent $X\\sim\\operatorname{Gamma}(\\alpha,\\lambda)$ and $Y\\sim\\operatorname{Gamma}(\\beta,\\lambda)$, set $U=X+Y$ and $V=X/(X+Y)$. Then $U\\sim\\operatorname{Gamma}(\\alpha+\\beta,\\lambda)$, $V\\sim\\operatorname{Beta}(\\alpha,\\beta)$, and $U,V$ are independent.</p>",
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
      "idea": "Two independent gamma quantities with the same rate can be described by their total and the fraction contributed by the first. The total is gamma, the fraction is beta, and knowing one gives no information about the other.",
      "why": "The steps below explain why the formula works and when it applies.",
      "rungs": [
        {
          "why": "Recover the two original quantities from total and fraction.",
          "m": "$$x=uv,\\quad y=u(1-v),\\quad \\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|=u$$",
          "meaning": "They are u times v and u times one minus v; the inverse area factor is u."
        },
        {
          "why": "Substitute into the two gamma densities and include that factor.",
          "m": "$$f_{U,V}(u,v)\\propto e^{-\\lambda u}u^{\\alpha+\\beta-1}v^{\\alpha-1}(1-v)^{\\beta-1}$$",
          "meaning": "The expressions involving u separate from those involving v because the rates match."
        },
        {
          "why": "Normalize the separated factors.",
          "m": "$$f_{U,V}(u,v)=f_U(u)f_V(v)$$",
          "meaning": "They are respectively gamma and beta densities. Their product proves independence."
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
    "oneLine": "Exchangeable means relabeling the positions leaves their joint probabilities unchanged. The positions have symmetric roles, even when the observations depend on one another.",
    "statement": "<p>Exchangeable means relabeling the positions leaves their joint probabilities unchanged. The positions have symmetric roles, even when the observations depend on one another.</p><p>$X_1,\\ldots,X_n$ are exchangeable if for every permutation $\\pi$ and all measurable sets $A_1,\\ldots,A_n$, $P(X_1\\in A_1,\\ldots,X_n\\in A_n)=P(X_{\\pi(1)}\\in A_1,\\ldots,X_{\\pi(n)}\\in A_n)$. In the discrete case, the joint pmf is symmetric in its arguments.</p>",
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
    "oneLine": "Drawing without replacement has symmetric draw positions. Sharing one random success chance across trials also makes positions symmetric. Both give exchangeable sequences, although the shared information can make draws dependent.",
    "statement": "<p>Drawing without replacement has symmetric draw positions. Sharing one random success chance across trials also makes positions symmetric. Both give exchangeable sequences, although the shared information can make draws dependent.</p><p>Indicators from sampling a fixed set without replacement are exchangeable: the joint probability depends on how many ones occur, not their positions. Likewise, if $\\Theta$ is sampled once and, conditional on $\\Theta$, trials are iid Bernoulli$(\\Theta)$, the unconditional joint mass of a binary vector with $r$ ones is $E[\\Theta^r(1-\\Theta)^{n-r}]$, which depends only on $r$.</p>",
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
