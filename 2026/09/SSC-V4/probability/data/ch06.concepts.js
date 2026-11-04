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
    "statement": "<p><b>Statement:</b> The <b>joint cumulative distribution function</b> of random variables $X$ and $Y$ is defined for all $(x, y) \\in \\mathbb{R}^2$ by:$$F_{X,Y}(x, y) = P(X \\le x, Y \\le y)$$</p><p>For any semi-closed rectangle $(a_1, a_2] \\times (b_1, b_2]$ with $a_1 < a_2$ and $b_1 < b_2$, the rectangle probability is given by the 2D difference formula:$$P(a_1 < X \\le a_2, \\, b_1 < Y \\le b_2) = F(a_2, b_2) - F(a_1, b_2) - F(a_2, b_1) + F(a_1, b_1)$$</p><p><b>Mathematical terms:</b> $F_{X,Y}(x, y)$ is the joint CDF; $(a_1, a_2] \\times (b_1, b_2]$ is the Cartesian product rectangle in $\\mathbb{R}^2$; marginal CDFs are obtained by taking limits: $F_X(x) = \\lim_{y \\to \\infty} F(x, y)$ and $F_Y(y) = \\lim_{x \\to \\infty} F(x, y)$.</p><p><b>Reason:</b> The infinite quadrant $(-\\infty, a_2] \\times (-\\infty, b_2]$ has probability $F(a_2, b_2)$. Subtracting the left strip $F(a_1, b_2) = P(X \\le a_1, Y \\le b_2)$ and bottom strip $F(a_2, b_1) = P(X \\le a_2, Y \\le b_1)$ isolates the target rectangle. However, the lower-left corner $(-\\infty, a_1] \\times (-\\infty, b_1]$ has been subtracted twice; by the principle of inclusion-exclusion, adding back $F(a_1, b_1)$ ensures the net weight of every point in the lower-left quadrant is zero and the target rectangle is counted with net weight 1.</p>",
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
    "provenance": "Ross, A First Course in Probability, 10e, §6.1, pp. 246–247 (PDF pp. 246–247).",
    "proof": {
      "idea": "Isolate a rectangle by subtracting the lower and left strips and restoring their overlap.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Define F(x,y)=P(X≤x,Y≤y); start with the upper-right accumulated corner.",
          "m": "$$F(a_2,b_2)$$",
          "meaning": "Assume a_1<a_2 and b_1<b_2."
        },
        {
          "why": "Remove points left of or on the lower x cutoff.",
          "m": "$$F(a_2,b_2)-F(a_1,b_2)$$",
          "meaning": "The remaining strip has a_1<X≤a_2 and Y≤b_2."
        },
        {
          "why": "Remove points below or on the lower y cutoff as well.",
          "m": "$$F(a_2,b_2)-F(a_1,b_2)-F(a_2,b_1)$$",
          "meaning": "This second removed region overlaps the first in X≤a_1,Y≤b_1."
        },
        {
          "why": "The lower-left overlap was removed twice, so restore it once.",
          "m": "$$P(a_1<X\\le a_2,b_1<Y\\le b_2)=F(a_2,b_2)-F(a_1,b_2)-F(a_2,b_1)+F(a_1,b_1)$$",
          "meaning": "Inclusion–exclusion gives the exact rectangle probability, including endpoint conventions."
        },
        {
          "why": "Alternatively, factor the two interval membership flags and expand.",
          "m": "$$(\\mathbf1_{X\\le a_2}-\\mathbf1_{X\\le a_1})(\\mathbf1_{Y\\le b_2}-\\mathbf1_{Y\\le b_1})$$",
          "meaning": "This equals the rectangle flag at every outcome; averaging its four algebraic terms proves the same identity without a diagram."
        }
      ],
      "ends": "The rectangle formula is two-dimensional inclusion–exclusion, valid with atoms as well as with densities."
    }
  },
  {
    "id": "c.prob.6.1.2",
    "sec": "6.1",
    "kind": "technique",
    "tier": "core",
    "title": "Joint mass functions and discrete marginals",
    "oneLine": "A joint probability table records the chance of each pair of values. Add across one coordinate to get the probabilities for the other coordinate alone; these are called marginal probabilities.",
    "statement": "<p><b>Statement:</b> For discrete random variables $X$ and $Y$, their <b>joint probability mass function</b> (joint PMF) is $p_{X,Y}(x, y) = P(X = x, Y = y)$, satisfying $p_{X,Y}(x, y) \\ge 0$ and $\\sum_x \\sum_y p_{X,Y}(x, y) = 1$. The <b>marginal PMFs</b> of $X$ and $Y$ are obtained by summing across the other variable:$$p_X(x) = \\sum_y p_{X,Y}(x, y), \\qquad p_Y(y) = \\sum_x p_{X,Y}(x, y)$$</p><p><b>Mathematical terms:</b> $p_{X,Y}(x, y)$ is the joint PMF; $p_X(x)$ is the marginal PMF of $X$; $\\sum_y$ represents marginalization (collapsing the columns of the joint probability table).</p><p><b>Reason:</b> The event $\\{X = x\\}$ can be decomposed using the Law of Total Probability into the countable disjoint union across all possible values of $Y$: $\\{X = x\\} = \\bigcup_y \\{X = x, Y = y\\}$. By countable additivity, the probability of the union is the sum of the disjoint probabilities: $P(X = x) = \\sum_y P(X = x, Y = y) = \\sum_y p_{X,Y}(x, y)$. Symmetrically, summing over all rows $x$ yields the marginal distribution $p_Y(y)$.</p>",
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
    "provenance": "Ross, §6.1, pp. 246–249 (PDF pp. 246–249).",
    "proof": {
      "idea": "Add joint table entries to obtain marginals.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let p(x,y) be the probability of the complete numerical pair.",
          "m": "$$p(x,y)=P(X=x,Y=y)$$",
          "meaning": "All entries are nonnegative."
        },
        {
          "why": "Distinct pair events are disjoint and all pairs cover the sample distribution.",
          "m": "$$\\sum_x\\sum_yp(x,y)=1$$",
          "meaning": "This is the normalization of a joint PMF."
        },
        {
          "why": "For a fixed x, the event X=x is the union over every compatible y.",
          "m": "$$\\{X=x\\}=\\bigcup_y\\{X=x,Y=y\\}$$",
          "meaning": "Each outcome has only one Y value, so these pieces are disjoint."
        },
        {
          "why": "Add the pair probabilities in that row.",
          "m": "$$p_X(x)=\\sum_yp(x,y)$$",
          "meaning": "This yields the marginal PMF of X."
        },
        {
          "why": "Apply the same reasoning to a fixed y column.",
          "m": "$$p_Y(y)=\\sum_xp(x,y)$$",
          "meaning": "A marginal keeps one coordinate while adding all values of the other; independence is not required."
        }
      ],
      "ends": "Marginal table sums follow directly from disjoint unions of numerical pair events."
    }
  },
  {
    "id": "c.prob.6.1.3",
    "sec": "6.1",
    "kind": "theorem",
    "tier": "core",
    "title": "Joint densities and marginalization",
    "oneLine": "A joint density spreads probability over a plane. Integrate over a region to find its probability. To keep only X, add up the density over every possible Y.",
    "statement": "<p><b>Statement:</b> Continuous random variables $X$ and $Y$ have <b>joint probability density function</b> $f_{X,Y}(x, y)$ if for all Borel regions $A \\subseteq \\mathbb{R}^2$:$$P((X, Y) \\in A) = \\iint_A f_{X,Y}(x, y) \\, dx \\, dy$$The joint PDF satisfies $f_{X,Y}(x, y) \\ge 0$ and $\\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty f_{X,Y}(x, y) \\, dx \\, dy = 1$. The <b>marginal densities</b> are obtained by integrating out the unwanted coordinate:$$f_X(x) = \\int_{-\\infty}^\\infty f_{X,Y}(x, y) \\, dy, \\qquad f_Y(y) = \\int_{-\\infty}^\\infty f_{X,Y}(x, y) \\, dx$$</p><p><b>Mathematical terms:</b> $f_{X,Y}(x, y) = \\frac{\\partial^2}{\\partial x \\partial y} F_{X,Y}(x, y)$ is the joint density; $f_X(x)$ is the marginal density of $X$; the 2D integral represents volume under the surface $z = f(x, y)$.</p><p><b>Reason:</b> By definition of the marginal CDF, $F_X(x) = P(X \\le x, Y < \\infty) = \\int_{-\\infty}^x \\left(\\int_{-\\infty}^\\infty f_{X,Y}(u, y) dy\\right) du$. Differentiating $F_X(x)$ with respect to $x$ via the Fundamental Theorem of Calculus yields the marginal density $f_X(x) = F_X^\\prime(x) = \\int_{-\\infty}^\\infty f_{X,Y}(x, y) dy$. Integrating over the entire $y$-axis accumulates the total probability volume corresponding to the vertical slice at $x$.</p>",
    "intuition": "A joint density is like a heat map for pairs such as height and weight. To get the height distribution alone, add up the heat across all possible weights.",
    "needs": [
      "c.prob.6.1.1"
    ],
    "traps": [
      "Set the integrand to zero outside the support before integrating.",
      "A valid density can have a complicated support; marginal integration limits may depend on the retained coordinate."
    ],
    "proof": {
      "idea": "Add density down a vertical strip to recover the marginal distribution.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let f(x,y) be a nonnegative joint density with total integral 1.",
          "m": "$$\\iint_{\\mathbb R^2}f(x,y)\\,dx\\,dy=1$$",
          "meaning": "It assigns probability by accumulated volume over a plane region."
        },
        {
          "why": "The event a<X≤b places no restriction on Y.",
          "m": "$$\\{a<X\\le b\\}\\leftrightarrow(a,b]\\times\\mathbb R$$",
          "meaning": "Geometrically it is the entire vertical strip over that x interval."
        },
        {
          "why": "Integrate the joint density over the strip, adding y values first.",
          "m": "$$P(a<X\\le b)=\\int_a^b\\left[\\int_{-\\infty}^{\\infty}f(x,y)dy\\right]dx$$",
          "meaning": "Nonnegativity allows this iterated integral by Tonelli’s theorem, the integral extension of rearranging nonnegative sums."
        },
        {
          "why": "Name the inner integral f_X(x).",
          "m": "$$f_X(x)=\\int_{-\\infty}^{\\infty}f(x,y)dy\\ge0$$",
          "meaning": "This keeps x fixed and totals all compatible y values."
        },
        {
          "why": "Integrate this candidate over all x to check normalization.",
          "m": "$$\\int_{-\\infty}^{\\infty}f_X(x)dx=\\iint f(x,y)dy\\,dx=1$$",
          "meaning": "It is nonnegative and has total area 1."
        },
        {
          "why": "The strip equation becomes the ordinary interval-density formula.",
          "m": "$$P(a<X\\le b)=\\int_a^bf_X(x)dx$$",
          "meaning": "Thus f_X really is the marginal density, not just a formal integral."
        },
        {
          "why": "Interchange the roles of x and y to obtain the other marginal.",
          "m": "$$f_Y(y)=\\int_{-\\infty}^{\\infty}f(x,y)dx$$",
          "meaning": "The integration bounds must follow the joint support; density is zero off that support."
        }
      ],
      "ends": "Marginalization adds every compatible value of the discarded coordinate."
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
    "statement": "<p><b>Statement:</b> Random variables $X$ and $Y$ are statistically <b>independent</b> if and only if their joint cumulative distribution function factors into the product of their marginal CDFs for all $(x, y) \\in \\mathbb{R}^2$:$$F_{X,Y}(x, y) = F_X(x) F_Y(y)$$</p><p>For discrete variables, this is equivalent to $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all $x, y$. For continuous variables, it is equivalent to $f_{X,Y}(x, y) = f_X(x) f_Y(y)$ almost everywhere, which requires the support of $(X, Y)$ to be a Cartesian product product space $\\mathcal{X} \\times \\mathcal{Y}$.</p><p><b>Mathematical terms:</b> Factorization criterion; independence means $P(X \\in A, Y \\in B) = P(X \\in A) P(Y \\in B)$ for all Borel sets $A, B$; product support means the range of $Y$ cannot depend on the realized value of $X$.</p><p><b>Reason:</b> Random variables are independent if every event concerning $X$ (the pre-image $\\{X \\in A\\}$) is independent of every event concerning $Y$ ($\\{Y \\in B\\}$). Setting $A = (-\\infty, x]$ and $B = (-\\infty, y]$ gives $P(X \\le x, Y \\le y) = P(X \\le x)P(Y \\le y) = F_X(x)F_Y(y)$. Differentiating both sides with respect to $x$ and $y$ gives $f_{X,Y}(x, y) = \\frac{\\partial^2}{\\partial x \\partial y} [F_X(x)F_Y(y)] = F_X^\\prime(x)F_Y^\\prime(y) = f_X(x)f_Y(y)$. If the support boundaries of $y$ depend on $x$ (e.g. $0 < y < x < 1$), the joint density cannot factor into product functions, immediately ruling out independence.</p>",
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
    "provenance": "Ross, §6.2, pp. 254–257 (PDF pp. 254–257).",
    "proof": {
      "idea": "Explain the independence definition and derive discrete and density factorization consequences.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Independence requires the product rule for every separate-coordinate event.",
          "m": "$$P(X\\in A,Y\\in B)=P(X\\in A)P(Y\\in B)$$",
          "meaning": "This is the defining property, not something inferred only from covariance."
        },
        {
          "why": "For discrete variables choose singleton sets A={x} and B={y}.",
          "m": "$$p_{X,Y}(x,y)=p_X(x)p_Y(y)$$",
          "meaning": "The general definition implies factorization at every pair."
        },
        {
          "why": "Conversely, sum factorized pair masses over arbitrary separate sets.",
          "m": "$$\\sum_{x\\in A}\\sum_{y\\in B}p_X(x)p_Y(y)=\\left(\\sum_{x\\in A}p_X(x)\\right)\\left(\\sum_{y\\in B}p_Y(y)\\right)$$",
          "meaning": "Nonnegative summation permits this factoring, giving the full event definition."
        },
        {
          "why": "For a product joint density, the rectangle integral factors in the same way.",
          "m": "$$\\int_A\\int_Bf_X(x)f_Y(y)dy\\,dx=P(X\\in A)P(Y\\in B)$$",
          "meaning": "This proves independence from density factorization."
        },
        {
          "why": "Conversely, independent rectangle probabilities determine the product probability measure.",
          "m": "$$f_{X,Y}(x,y)=f_X(x)f_Y(y)\\quad\\text{almost everywhere}$$",
          "meaning": "The measure uniqueness theorem and uniqueness of densities justify this converse; these are advanced prerequisites, and values on zero-area sets do not matter."
        }
      ],
      "ends": "Independence means all separate events factor, with equivalent mass or almost-everywhere density factorization in the appropriate models."
    }
  },
  {
    "id": "c.prob.6.2.2",
    "sec": "6.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Functions preserve independence",
    "oneLine": "If two inputs are independent, calculating a separate output from each does not create a connection between them. Correlation measures only a linear connection; zero correlation ensures independence for jointly normal pairs.",
    "statement": "<p><b>Statement:</b> If random variables $X$ and $Y$ are independent, then for any measurable functions $g: \\mathbb{R} \\to \\mathbb{R}$ and $h: \\mathbb{R} \\to \\mathbb{R}$, the transformed random variables $g(X)$ and $h(Y)$ are also independent. In particular, their joint expectation factors:$$E[g(X) h(Y)] = E[g(X)] \\cdot E[h(Y)]$$provided the expectations exist. Consequently, $\\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0$ (independent variables are always uncorrelated).</p><p><b>Mathematical terms:</b> $g(X), h(Y)$ are single-variable transformations; product expectation formula $E[g(X)h(Y)] = E[g(X)]E[h(Y)]$; uncorrelated means zero covariance ($\\operatorname{Cov} = 0$).</p><p><b>Reason:</b> For any Borel sets $A$ and $B$, the event $\\{g(X) \\in A\\}$ is $\\{X \\in g^{-1}(A)\\}$, and $\\{h(Y) \\in B\\}$ is $\\{Y \\in h^{-1}(B)\\}$. Because $X$ and $Y$ are independent, $P(X \\in g^{-1}(A), Y \\in h^{-1}(B)) = P(X \\in g^{-1}(A)) P(Y \\in h^{-1}(B)) = P(g(X) \\in A) P(h(Y) \\in B)$, establishing independence of $g(X)$ and $h(Y)$. Under continuous LOTUS, $\\iint g(x)h(y)f_X(x)f_Y(y)dxdy = \\left(\\int g(x)f_X(x)dx\\right)\\left(\\int h(y)f_Y(y)dy\\right) = E[g(X)]E[h(Y)]$.</p>",
    "intuition": "If two independent dice are each transformed separately—for example, one is squared and one is doubled—the results remain independent. A zero-correlation shortcut works only for a jointly normal pair, such as two coordinates from one bell-shaped cloud.",
    "needs": [
      "c.prob.6.2.1"
    ],
    "traps": [
      "Functions that reuse both variables need not preserve independence.",
      "Zero correlation implies independence for a jointly normal pair, not for arbitrary pairs."
    ],
    "proof": {
      "idea": "Pull each output event back to an event involving only its own input.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let C and D be any allowed output sets, and define their input preimages.",
          "m": "$$A=\\{x:g(x)\\in C\\},\\quad B=\\{y:h(y)\\in D\\}$$",
          "meaning": "A preimage is a set of inputs, not necessarily a single-valued inverse function."
        },
        {
          "why": "The output event g(X) in C occurs exactly when X is in A.",
          "m": "$$\\{g(X)\\in C\\}=\\{X\\in A\\}$$",
          "meaning": "This equivalence follows directly from the definition of A."
        },
        {
          "why": "Translate the second output event in the same way.",
          "m": "$$\\{h(Y)\\in D\\}=\\{Y\\in B\\}$$",
          "meaning": "Both g and h must define valid measurable random variables."
        },
        {
          "why": "Apply independence of the inputs to A and B.",
          "m": "$$P(X\\in A,Y\\in B)=P(X\\in A)P(Y\\in B)$$",
          "meaning": "Independence applies to every allowed separate input event."
        },
        {
          "why": "Translate each factor back to the corresponding output event.",
          "m": "$$P(g(X)\\in C,h(Y)\\in D)=P(g(X)\\in C)P(h(Y)\\in D)$$",
          "meaning": "This is the defining independence equation for the outputs."
        },
        {
          "why": "Because C and D were arbitrary, independence holds for the entire output distributions.",
          "m": "$$g(X)\\ \\text{and}\\ h(Y)\\ \\text{are independent}$$",
          "meaning": "Applying two functions to the same input would not satisfy this argument."
        },
        {
          "why": "For a nonsingular bivariate normal, setting correlation ρ=0 makes its joint density factor into the two normal marginals.",
          "m": "$$f_{X,Y}(x,y)=f_X(x)f_Y(y)\\quad(\\rho=0)$$",
          "meaning": "Conversely, independence makes covariance zero. This extra equivalence relies on the jointly normal model; see the explicit completed square in the conditional-normal note."
        }
      ],
      "ends": "Separate functions preserve independent inputs. Zero correlation implies independence only under additional assumptions such as joint normality."
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
    "statement": "<p><b>Statement:</b> Let $X$ and $Y$ be independent continuous random variables with densities $f_X$ and $f_Y$. The probability density function of their sum $Z = X + Y$ is given by the <b>convolution</b> integral:$$f_Z(z) = (f_X * f_Y)(z) = \\int_{-\\infty}^\\infty f_X(x) f_Y(z - x) \\, dx = \\int_{-\\infty}^\\infty f_X(z - y) f_Y(y) \\, dy$$For independent non-negative integer-valued discrete variables, $P(Z = n) = \\sum_{k=0}^n p_X(k) p_Y(n - k)$.</p><p><b>Mathematical terms:</b> $(f_X * f_Y)(z)$ is the convolution operator; $z - x$ represents the required value of $Y$ to attain the sum $Z = z$ when $X = x$.</p><p><b>Reason:</b> Find the CDF of $Z$: $F_Z(z) = P(X + Y \\le z) = \\int_{-\\infty}^\\infty \\left(\\int_{-\\infty}^{z-x} f_Y(y) dy\\right) f_X(x) dx = \\int_{-\\infty}^\\infty F_Y(z - x) f_X(x) dx$. Differentiating with respect to $z$ under the integral sign using Leibniz's rule yields $f_Z(z) = F_Z^\\prime(z) = \\int_{-\\infty}^\\infty \\frac{d}{dz}F_Y(z - x) f_X(x) dx = \\int_{-\\infty}^\\infty f_Y(z - x) f_X(x) dx$. By substitution $u = z - x$, this is symmetric in $f_X$ and $f_Y$.</p>",
    "intuition": "To get a total of 7 from two dice, several pairs work: (1,6), (2,5), and so on. For independent variables, multiply the chance of each pair and add all pairs that reach the requested total.",
    "needs": [
      "c.prob.6.2.1"
    ],
    "traps": [
      "The convolution formula uses independence.",
      "Set the integration range from both supports; it is often not all real numbers after zeroing the densities."
    ],
    "proof": {
      "idea": "Collect all pairs whose sum has the requested value; use a coordinate change for densities.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let S=X+Y with independent inputs. For discrete variables, split according to Y=y.",
          "m": "$$\\{S=s\\}=\\bigcup_y\\{X=s-y,Y=y\\}$$",
          "meaning": "Different y values give disjoint events."
        },
        {
          "why": "Add their probabilities and use independence for each pair.",
          "m": "$$P(S=s)=\\sum_yP(X=s-y)P(Y=y)$$",
          "meaning": "All feasible splits are included; impossible values contribute zero."
        },
        {
          "why": "For continuous variables, an exact-value event has probability zero, so use density or a CDF.",
          "m": "$$F_S(s)=\\int P(X\\le s-y\\mid Y=y)f_Y(y)dy$$",
          "meaning": "This averages the cutoff probability over the possible y slices."
        },
        {
          "why": "Independence keeps X’s conditional law equal to its marginal law.",
          "m": "$$F_S(s)=\\int F_X(s-y)f_Y(y)dy$$",
          "meaning": "Knowing Y=y simply shifts the required X cutoff."
        },
        {
          "why": "To derive the density without an unjustified derivative interchange, use coordinates (s,y).",
          "m": "$$x=s-y,\\quad y=y,\\quad\\left|\\det\\frac{\\partial(x,y)}{\\partial(s,y)}\\right|=1$$",
          "meaning": "The derivative matrix has rows (1,−1) and (0,1); its determinant is 1."
        },
        {
          "why": "The joint density in these new coordinates is the old independent product times that unit area factor.",
          "m": "$$f_{S,Y}(s,y)=f_X(s-y)f_Y(y)$$",
          "meaning": "The change-of-variables theorem preserves probability under this shear."
        },
        {
          "why": "Integrate out y to obtain the marginal sum density.",
          "m": "$$f_S(s)=\\int_{-\\infty}^{\\infty}f_X(s-y)f_Y(y)dy$$",
          "meaning": "This is convolution; the support restricts the feasible integration values automatically."
        }
      ],
      "ends": "A sum probability or density adds contributions from every split of the total."
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
    "statement": "<p><b>Statement:</b> Let $X, Y \\overset{\\text{iid}}{\\sim} \\operatorname{Uniform}(0, 1)$ be independent standard uniform random variables. The distribution of their sum $Z = X + Y$ has a symmetric <b>triangular density</b> on $(0, 2)$:$$f_Z(z) = \\begin{cases} z, & 0 \\le z \\le 1 \\\\ 2 - z, & 1 < z \\le 2 \\\\ 0, & \\text{otherwise} \\end{cases}$$with mean $E[Z] = 1$ and variance $\\operatorname{Var}(Z) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) = \\frac{1}{12} + \\frac{1}{12} = \\frac{1}{6}$.</p><p><b>Mathematical terms:</b> $Z = X + Y$; triangular density; support $[0, 2]$; mode at $z = 1$ with peak height $f_Z(1) = 1$.</p><p><b>Reason:</b> Convolve the indicator densities $f_X(x) = \\mathbf{1}_{(0, 1)}(x)$ and $f_Y(y) = \\mathbf{1}_{(0, 1)}(y)$: $f_Z(z) = \\int_0^1 \\mathbf{1}_{(0, 1)}(z - x) dx$. The integrand is non-zero when $0 < x < 1$ and $0 < z - x < 1 \\iff z - 1 < x < z$. For $0 \\le z \\le 1$, the integration limits are from $0$ to $z$, giving $\\int_0^z 1 dx = z$. For $1 < z \\le 2$, the limits are from $z - 1$ to $1$, giving $\\int_{z-1}^1 1 dx = 1 - (z - 1) = 2 - z$. Geometrically, $f_Z(z)$ is the diagonal slice length across the unit square $[0, 1]^2$.</p>",
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
    "provenance": "Ross, §6.3.1, pp. 263–265 (PDF pp. 263–265).",
    "proof": {
      "idea": "Compute convolution as the length of the overlap between two unit intervals.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X and Y be independent uniform (0,1) variables.",
          "m": "$$f_X(x)=f_Y(x)=1\\quad(0<x<1)$$",
          "meaning": "Outside their respective intervals the densities are zero."
        },
        {
          "why": "Insert them into the convolution integral for S=X+Y.",
          "m": "$$f_S(s)=\\int f_X(s-y)f_Y(y)dy$$",
          "meaning": "Each integrand is 1 exactly when both component values are in (0,1)."
        },
        {
          "why": "The two support conditions are 0<y<1 and 0<s−y<1.",
          "m": "$$\\max(0,s-1)<y<\\min(1,s)$$",
          "meaning": "Solve the second inequality for y and intersect the allowed intervals."
        },
        {
          "why": "The integral of height 1 over this interval is its positive length.",
          "m": "$$f_S(s)=\\max(0,\\min(1,s)-\\max(0,s-1))$$",
          "meaning": "No overlap means zero density."
        },
        {
          "why": "For 0<s<1 the bounds are 0 and s; for 1≤s<2 they are s−1 and 1.",
          "m": "$$f_S(s)=s\\ (0<s<1),\\quad f_S(s)=2-s\\ (1\\le s<2)$$",
          "meaning": "Elsewhere the density is zero."
        },
        {
          "why": "Check its total area as two triangles.",
          "m": "$$\\frac12(1)(1)+\\frac12(1)(1)=1$$",
          "meaning": "The density has the required normalization and a peak at total 1."
        }
      ],
      "ends": "The triangular sum density comes from the length of all feasible splits of each total."
    }
  },
  {
    "id": "c.prob.6.3.3",
    "sec": "6.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Gamma sums with a common rate",
    "oneLine": "Gamma variables have a shape and a rate. When independent gamma variables share a rate, their sum keeps that rate and adds their shapes.",
    "statement": "<p><b>Statement:</b> If $X \\sim \\operatorname{Gamma}(s, \\lambda)$ and $Y \\sim \\operatorname{Gamma}(t, \\lambda)$ are independent Gamma random variables with the <i>same rate parameter</i> $\\lambda > 0$, then their sum is also Gamma distributed:$$Z = X + Y \\sim \\operatorname{Gamma}(s + t, \\, \\lambda)$$</p><p>In particular, the sum of $n$ independent $\\operatorname{Exponential}(\\lambda)$ variables is $\\operatorname{Gamma}(n, \\lambda)$ (Erlang distribution).</p><p><b>Mathematical terms:</b> $s, t > 0$ are shape parameters; $\\lambda > 0$ is the common rate parameter; closure under convolution holds when rate parameters are identical.</p><p><b>Reason:</b> Convolving the two densities for $z > 0$ gives $f_Z(z) = \\int_0^z \\frac{\\lambda^s}{\\Gamma(s)} x^{s-1} e^{-\\lambda x} \\frac{\\lambda^t}{\\Gamma(t)} (z-x)^{t-1} e^{-\\lambda(z-x)} dx = \\frac{\\lambda^{s+t} e^{-\\lambda z}}{\\Gamma(s)\\Gamma(t)} \\int_0^z x^{s-1}(z-x)^{t-1} dx$. Substitute $x = zu$ with $dx = z du$: the integral becomes $z^{s+t-1} \\int_0^1 u^{s-1}(1-u)^{t-1} du = z^{s+t-1} B(s, t) = z^{s+t-1} \\frac{\\Gamma(s)\\Gamma(t)}{\\Gamma(s+t)}$. The factorials cancel to leave $\\frac{\\lambda^{s+t}}{\\Gamma(s+t)} z^{s+t-1} e^{-\\lambda z}$, which is the $\\operatorname{Gamma}(s+t, \\lambda)$ density.</p>",
    "intuition": "If a job has several independent waiting stages with the same pace, total wait stays in the gamma family and its shape counts the combined stages.",
    "needs": [
      "c.prob.6.3.1"
    ],
    "traps": [
      "The rates must agree for this simple closure result.",
      "Check whether a source defines gamma's second parameter as rate or scale."
    ],
    "proof": {
      "idea": "Substitute gamma densities into convolution and show all powers and normalizing constants.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X and Y be independent gamma variables of shapes α,β>0 and common rate λ>0.",
          "m": "$$f_X(x)=\\frac{\\lambda^\\alpha}{\\Gamma(\\alpha)}x^{\\alpha-1}e^{-\\lambda x}\\quad(x>0)$$",
          "meaning": "The formula for Y replaces α by β; Γ(a)=∫_0^∞ t^(a−1)e^(−t)dt."
        },
        {
          "why": "For their positive sum s, only 0<y<s gives positive values to both inputs.",
          "m": "$$f_{X+Y}(s)=\\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha)\\Gamma(\\beta)}\\int_0^s(s-y)^{\\alpha-1}y^{\\beta-1}e^{-\\lambda(s-y)}e^{-\\lambda y}dy$$",
          "meaning": "This is convolution with both constants retained."
        },
        {
          "why": "Combine exponentials with equal rate.",
          "m": "$$e^{-\\lambda(s-y)}e^{-\\lambda y}=e^{-\\lambda s}$$",
          "meaning": "The exponent rule adds −λ(s−y) and −λy; unequal rates would leave a y-dependent exponential."
        },
        {
          "why": "Put y=sv, so dy=s dv and 0<v<1.",
          "m": "$$\\int_0^s(s-y)^{\\alpha-1}y^{\\beta-1}dy=s^{\\alpha+\\beta-1}\\int_0^1(1-v)^{\\alpha-1}v^{\\beta-1}dv$$",
          "meaning": "The powers contribute s^(α−1+β−1), and dy contributes one additional s."
        },
        {
          "why": "The last integral is B(β,α)=Γ(α)Γ(β)/Γ(α+β).",
          "m": "$$B(\\beta,\\alpha)=\\frac{\\Gamma(\\alpha)\\Gamma(\\beta)}{\\Gamma(\\alpha+\\beta)}$$",
          "meaning": "Its derivation from the product of two gamma integrals is given in the gamma/beta family note; it requires two-variable integration."
        },
        {
          "why": "Substitute the beta integral and cancel the two original gamma factors.",
          "m": "$$f_{X+Y}(s)=\\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha+\\beta)}s^{\\alpha+\\beta-1}e^{-\\lambda s}$$",
          "meaning": "Every constant now matches a gamma density of shape α+β and rate λ."
        },
        {
          "why": "Repeat this two-variable result for a finite independent list.",
          "m": "$$\\sum_iX_i\\sim\\operatorname{Gamma}\\left(\\sum_i\\alpha_i,\\lambda\\right)$$",
          "meaning": "An exponential is gamma shape 1, so n independent exponential waits give gamma shape n."
        }
      ],
      "ends": "Independent gamma shapes add when the rates match."
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
    "statement": "<p><b>Statement:</b> Stability and reproductive convolution laws for independent classical families:<br>(1) <b>Normal:</b> If $X_i \\sim \\mathcal{N}(\\mu_i, \\sigma_i^2)$ are independent, then $\\sum_{i=1}^n a_i X_i \\sim \\mathcal{N}\\left(\\sum a_i\\mu_i, \\, \\sum a_i^2\\sigma_i^2\\right)$.<br>(2) <b>Poisson:</b> If $X \\sim \\operatorname{Poisson}(\\lambda_1)$ and $Y \\sim \\operatorname{Poisson}(\\lambda_2)$ are independent, then $X + Y \\sim \\operatorname{Poisson}(\\lambda_1 + \\lambda_2)$.<br>(3) <b>Binomial:</b> If $X \\sim \\operatorname{Binomial}(n_1, p)$ and $Y \\sim \\operatorname{Binomial}(n_2, p)$ are independent with the same $p$, then $X + Y \\sim \\operatorname{Binomial}(n_1 + n_2, p)$.</p><p><b>Mathematical terms:</b> Convolution closure; independent sums remain in the same parametric family; parameters add according to physical mechanisms.</p><p><b>Reason:</b> (1) By MGF properties, $M_{\\sum a_i X_i}(t) = \\prod M_{X_i}(a_i t) = \\prod \\exp(a_i\\mu_i t + a_i^2\\sigma_i^2 t^2/2) = \\exp((\\sum a_i\\mu_i)t + (\\sum a_i^2\\sigma_i^2)t^2/2)$, uniquely identifying the normal law. (2) For Poisson, convolving gives $P(X+Y=k) = \\sum_{j=0}^k e^{-\\lambda_1}\\frac{\\lambda_1^j}{j!} e^{-\\lambda_2}\\frac{\\lambda_2^{k-j}}{(k-j)!} = \\frac{e^{-(\\lambda_1+\\lambda_2)}}{k!} \\sum_{j=0}^k \\binom{k}{j}\\lambda_1^j \\lambda_2^{k-j} = e^{-(\\lambda_1+\\lambda_2)}\\frac{(\\lambda_1+\\lambda_2)^k}{k!}$ by the binomial theorem. (3) Binomial represents total successes in $n_1 + n_2$ independent Bernoulli($p$) trials.</p>",
    "intuition": "If two independent stores get Poisson customer arrivals, their combined count is Poisson with the two rates added. Two binomial counts combine the same way only when each trial has the same success chance.",
    "needs": [
      "c.prob.6.3.1"
    ],
    "traps": [
      "Normal sums remain normal under independence.",
      "Binomial closure requires a common $p$; different probabilities generally do not give a binomial sum."
    ],
    "proof": {
      "idea": "Derive Poisson and binomial sums by counting, and normal sums by an explicitly computed MGF.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For independent Poisson variables with rates λ_1 and λ_2, split the total k at X=j.",
          "m": "$$P(X+Y=k)=\\sum_{j=0}^ke^{-\\lambda_1}\\frac{\\lambda_1^j}{j!}e^{-\\lambda_2}\\frac{\\lambda_2^{k-j}}{(k-j)!}$$",
          "meaning": "Independence multiplies the two masses for each split, and disjoint splits add."
        },
        {
          "why": "Factor the common exponential and multiply inside by k!/k!.",
          "m": "$$P(X+Y=k)=\\frac{e^{-(\\lambda_1+\\lambda_2)}}{k!}\\sum_{j=0}^k\\binom kj\\lambda_1^j\\lambda_2^{k-j}$$",
          "meaning": "The factorial ratio k!/[j!(k−j)!] is the binomial coefficient."
        },
        {
          "why": "Use the binomial theorem on the finite sum.",
          "m": "$$P(X+Y=k)=e^{-(\\lambda_1+\\lambda_2)}\\frac{(\\lambda_1+\\lambda_2)^k}{k!}$$",
          "meaning": "This is Poisson with the sum of the rates."
        },
        {
          "why": "For independent binomial counts with n and m trials and common p, pool their independent trial lists.",
          "m": "$$X+Y=\\sum_{i=1}^{n+m}I_i\\sim\\operatorname{Bin}(n+m,p)$$",
          "meaning": "The pooled flags still have the same success probability and are mutually independent."
        },
        {
          "why": "For a normal X of mean μ and variance σ², complete the square in E[e^(tX)].",
          "m": "$$tx-\\frac{(x-\\mu)^2}{2\\sigma^2}=-\\frac{(x-\\mu-\\sigma^2t)^2}{2\\sigma^2}+\\mu t+\\frac{\\sigma^2t^2}{2}$$",
          "meaning": "Expand the square on the right to verify this ordinary algebra identity."
        },
        {
          "why": "The remaining shifted normal density integrates to 1.",
          "m": "$$M_X(t)=E[e^{tX}]=e^{\\mu t+\\sigma^2t^2/2}$$",
          "meaning": "MGF means moment generating function; this calculation establishes its formula rather than assuming it."
        },
        {
          "why": "For independent normals, exponentials multiply and their expectations factor.",
          "m": "$$M_{\\sum_iX_i}(t)=\\prod_iM_{X_i}(t)=\\exp\\left(t\\sum_i\\mu_i+\\frac{t^2}{2}\\sum_i\\sigma_i^2\\right)$$",
          "meaning": "Factorization follows from the product joint distribution and iterated averaging."
        },
        {
          "why": "Recognize the computed MGF as a normal one.",
          "m": "$$\\sum_iX_i\\sim N\\left(\\sum_i\\mu_i,\\sum_i\\sigma_i^2\\right)$$",
          "meaning": "The uniqueness theorem for MGFs finite near zero identifies the distribution; that theorem is an advanced prerequisite, not elementary algebra."
        }
      ],
      "ends": "All three sum laws require independent variables. Binomials require a common p, and normal variances add because the covariances vanish."
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
    "statement": "<p><b>Statement:</b> For discrete random variables $X$ and $Y$, the <b>conditional probability mass function</b> of $X$ given $Y = y$ is defined for any $y$ with $p_Y(y) > 0$ by:$$p_{X \\mid Y}(x \\mid y) = P(X = x \\mid Y = y) = \\frac{p_{X,Y}(x, y)}{p_Y(y)} = \\frac{p_{X,Y}(x, y)}{\\sum_t p_{X,Y}(t, y)}$$For each fixed $y$, $p_{X \\mid Y}(\\cdot \\mid y)$ is a valid PMF on the support of $X$, satisfying $\\sum_x p_{X \\mid Y}(x \\mid y) = 1$. The conditional expectation is $E[X \\mid Y = y] = \\sum_x x \\, p_{X \\mid Y}(x \\mid y)$.</p><p><b>Mathematical terms:</b> $p_{X \\mid Y}(x \\mid y)$ is the conditional PMF; $p_{X,Y}(x, y)$ is the joint PMF; $p_Y(y)$ is the marginal PMF of the conditioning variable; $E[X \\mid Y = y]$ is the conditional mean.</p><p><b>Reason:</b> Observing that $Y = y$ eliminates all rows in the joint probability table except the slice corresponding to $Y = y$. Within this slice, the relative likelihoods of the various $X$ values are proportional to the joint masses $p_{X,Y}(x, y)$. Dividing each joint mass by the slice total $p_Y(y) = \\sum_x p_{X,Y}(x, y)$ normalizes the surviving row probabilities to sum to 1, creating a valid Kolmogorov probability distribution.</p>",
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
    "provenance": "Ross, §6.4, pp. 270–272 (PDF pp. 270–272).",
    "proof": {
      "idea": "Normalize one discrete joint-table slice.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Fix y with positive marginal probability p_Y(y).",
          "m": "$$p_Y(y)=\\sum_xp_{X,Y}(x,y)>0$$",
          "meaning": "The conditioning value must actually have positive probability."
        },
        {
          "why": "The joint event X=x and Y=y is the successful part of the retained Y=y event.",
          "m": "$$P(X=x\\mid Y=y)=\\frac{P(X=x,Y=y)}{P(Y=y)}$$",
          "meaning": "This is the ordinary conditional-probability definition."
        },
        {
          "why": "Use the joint and marginal PMF notation.",
          "m": "$$p_{X\\mid Y}(x\\mid y)=\\frac{p_{X,Y}(x,y)}{p_Y(y)}$$",
          "meaning": "The same column total divides every entry in the slice."
        },
        {
          "why": "Add the normalized entries and cancel the slice total.",
          "m": "$$\\sum_xp_{X\\mid Y}(x\\mid y)=\\frac{\\sum_xp_{X,Y}(x,y)}{p_Y(y)}=1$$",
          "meaning": "Thus the slice is a proper PMF."
        },
        {
          "why": "Accumulate its masses through a cutoff to obtain its conditional CDF.",
          "m": "$$F_{X\\mid Y}(a\\mid y)=\\sum_{x\\le a}p_{X\\mid Y}(x\\mid y)$$",
          "meaning": "No unconditional denominator should be reused after restricting the model."
        }
      ],
      "ends": "A conditional discrete distribution is one normalized joint slice, with positive slice total required."
    }
  },
  {
    "id": "c.prob.6.4.2",
    "sec": "6.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Poisson splitting conditional on a total",
    "oneLine": "Two independent Poisson sources contribute to a total count. Once the total is fixed, each event belongs to the first source with probability equal to its share of the total rate.",
    "statement": "<p><b>Statement:</b> If $X \\sim \\operatorname{Poisson}(\\lambda_1)$ and $Y \\sim \\operatorname{Poisson}(\\lambda_2)$ are independent, then the conditional distribution of $X$ given their sum $X + Y = n$ is <b>Binomial</b>:$$X \\mid (X + Y = n) \\sim \\operatorname{Binomial}\\left(n, \\, \\frac{\\lambda_1}{\\lambda_1 + \\lambda_2}\\right)$$</p><p>with conditional PMF $P(X = k \\mid X + Y = n) = \\binom{n}{k} \\left(\\frac{\\lambda_1}{\\lambda_1+\\lambda_2}\\right)^k \\left(\\frac{\\lambda_2}{\\lambda_1+\\lambda_2}\\right)^{n-k}$ for $k \\in \\{0, 1, \\ldots, n\\}$.</p><p><b>Mathematical terms:</b> Poisson splitting / thinning; $n$ is the total observed count; $p = \\frac{\\lambda_1}{\\lambda_1+\\lambda_2}$ is the success probability (relative rate of type 1 events).</p><p><b>Reason:</b> By definition of conditional probability: $P(X = k \\mid X+Y = n) = \\frac{P(X = k, X+Y = n)}{P(X+Y = n)} = \\frac{P(X = k, Y = n-k)}{P(X+Y = n)}$. By independence, the numerator is $e^{-\\lambda_1}\\frac{\\lambda_1^k}{k!} e^{-\\lambda_2}\\frac{\\lambda_2^{n-k}}{(n-k)!}$. The denominator is the Poisson sum law $e^{-(\\lambda_1+\\lambda_2)}\\frac{(\\lambda_1+\\lambda_2)^n}{n!}$. The exponential factors $e^{-(\\lambda_1+\\lambda_2)}$ cancel completely, and $\\frac{n!}{k!(n-k)!} \\frac{\\lambda_1^k \\lambda_2^{n-k}}{(\\lambda_1+\\lambda_2)^n} = \\binom{n}{k} (\\frac{\\lambda_1}{\\lambda_1+\\lambda_2})^k (\\frac{\\lambda_2}{\\lambda_1+\\lambda_2})^{n-k}$, exactly recovering the binomial PMF.</p>",
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
      "idea": "Divide a two-source allocation probability by the probability of the fixed total.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Take independent Poisson sources of rates λ_1,λ_2≥0 with λ_1+λ_2>0.",
          "m": "$$X+Y\\sim\\operatorname{Poisson}(\\lambda_1+\\lambda_2)$$",
          "meaning": "This sum law was proved by the binomial theorem in the preceding note."
        },
        {
          "why": "Fix total n≥0; the event X=k with this total forces Y=n−k.",
          "m": "$$\\{X=k,X+Y=n\\}=\\{X=k,Y=n-k\\}$$",
          "meaning": "The possible values are 0≤k≤n."
        },
        {
          "why": "Use conditional probability and independence in the numerator.",
          "m": "$$P(X=k\\mid X+Y=n)=\\frac{P(X=k)P(Y=n-k)}{P(X+Y=n)}$$",
          "meaning": "The denominator is positive for every n when the total rate is positive."
        },
        {
          "why": "Insert all three Poisson masses.",
          "m": "$$\\frac{e^{-\\lambda_1}\\lambda_1^k/k!\\;e^{-\\lambda_2}\\lambda_2^{n-k}/(n-k)!}{e^{-(\\lambda_1+\\lambda_2)}(\\lambda_1+\\lambda_2)^n/n!}$$",
          "meaning": "Retaining the factorials makes the cancellation visible."
        },
        {
          "why": "Cancel exponentials and bring n! to the numerator.",
          "m": "$$\\frac{n!}{k!(n-k)!}\\frac{\\lambda_1^k\\lambda_2^{n-k}}{(\\lambda_1+\\lambda_2)^n}$$",
          "meaning": "The exponential factors cancel by the exponent addition rule."
        },
        {
          "why": "Split the denominator power into k and n−k factors and set p=λ_1/(λ_1+λ_2).",
          "m": "$$P(X=k\\mid X+Y=n)=\\binom nk p^k(1-p)^{n-k}$$",
          "meaning": "Since 1−p=λ_2/(λ_1+λ_2), this is exactly a binomial mass, including deterministic endpoint cases."
        }
      ],
      "ends": "Given the total n, the first-source count is binomial with probability equal to its share of the total rate."
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
    "statement": "<p><b>Statement:</b> For continuous random variables $X$ and $Y$ with joint density $f_{X,Y}(x, y)$, the <b>conditional probability density function</b> of $X$ given $Y = y$ is defined for all $y$ where $f_Y(y) > 0$ by:$$f_{X \\mid Y}(x \\mid y) = \\frac{f_{X,Y}(x, y)}{f_Y(y)} = \\frac{f_{X,Y}(x, y)}{\\int_{-\\infty}^\\infty f_{X,Y}(u, y) \\, du}$$For each fixed $y$, $f_{X \\mid Y}(\\cdot \\mid y)$ is a valid 1D probability density on $\\mathbb{R}$, satisfying $\\int_{-\\infty}^\\infty f_{X \\mid Y}(x \\mid y) \\, dx = 1$. The conditional expectation is $E[X \\mid Y = y] = \\int_{-\\infty}^\\infty x f_{X \\mid Y}(x \\mid y) \\, dx$.</p><p><b>Mathematical terms:</b> $f_{X \\mid Y}(x \\mid y)$ is the conditional density; $f_Y(y)$ is the marginal density of $Y$; $\\int_{-\\infty}^\\infty f_{X \\mid Y}(x \\mid y)dx = 1$ is the 1D normalization condition.</p><p><b>Reason:</b> Although $P(Y = y) = 0$ for continuous variables, define conditioning as the limit of conditioning on a narrow strip: $f_{X \\mid Y}(x \\mid y)dx = \\lim_{\\Delta y \\downarrow 0} P(x \\le X \\le x+dx \\mid y \\le Y \\le y+\\Delta y) = \\lim_{\\Delta y \\to 0} \\frac{f_{X,Y}(x, y)dx\\Delta y}{f_Y(y)\\Delta y} = \\frac{f_{X,Y}(x, y)}{f_Y(y)}dx$. Dividing the 2D cross-section $f_{X,Y}(x, y)$ by the slice area $f_Y(y) = \\int f_{X,Y}(u, y)du$ normalizes the 1D curve so its area is exactly 1.</p>",
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
    "provenance": "Ross, §6.5, pp. 273–276 (PDF pp. 273–276).",
    "proof": {
      "idea": "Justify continuous conditional density by normalization and recovery of joint probabilities.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a joint density, the Y marginal is its x integral.",
          "m": "$$f_Y(y)=\\int f_{X,Y}(x,y)dx$$",
          "meaning": "Assume 0<f_Y(y)<∞ at the slice under consideration; this holds on the appropriate almost-everywhere domain."
        },
        {
          "why": "An exact continuous Y value has probability zero, so ordinary point-event division would be undefined.",
          "m": "$$P(Y=y)=0$$",
          "meaning": "Define a conditional density using density ratios instead, not 0/0 probabilities."
        },
        {
          "why": "Normalize the joint slice by its marginal density.",
          "m": "$$f_{X\\mid Y}(x\\mid y)=\\frac{f_{X,Y}(x,y)}{f_Y(y)}$$",
          "meaning": "This is nonnegative because both densities are nonnegative."
        },
        {
          "why": "Integrate the normalized slice over all x.",
          "m": "$$\\int f_{X\\mid Y}(x\\mid y)dx=1$$",
          "meaning": "The numerator integral equals the denominator f_Y(y)."
        },
        {
          "why": "Check that averaging the slice laws over Y recovers joint-region probability.",
          "m": "$$\\int_B\\left[\\int_Af_{X\\mid Y}(x\\mid y)dx\\right]f_Y(y)dy=\\int_B\\int_Af_{X,Y}(x,y)dx\\,dy$$",
          "meaning": "The marginal factor cancels; this defining conditional averaging property rigorously validates the density ratio almost everywhere."
        },
        {
          "why": "Use the normalized slice to calculate conditional sets and cutoffs.",
          "m": "$$P(X\\in A\\mid Y=y)=\\int_Af_{X\\mid Y}(x\\mid y)dx,\\quad F_{X\\mid Y}(a\\mid y)=\\int_{-\\infty}^af_{X\\mid Y}(x\\mid y)dx$$",
          "meaning": "At marginal-null values, a conditional version is not uniquely determined by the joint law."
        }
      ],
      "ends": "Continuous conditional density is validated by its normalized slices and their recovery of the joint law; it is not a ratio of exact-point event probabilities."
    }
  },
  {
    "id": "c.prob.6.5.2",
    "sec": "6.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Conditional law of a bivariate normal",
    "oneLine": "For a jointly normal pair, knowing Y shifts the predicted average of X along a straight line. The remaining uncertainty is also normal, with the variance stated below.",
    "statement": "<p><b>Statement:</b> Let $(X, Y)$ have a <b>bivariate normal distribution</b> with means $\\mu_X, \\mu_Y$, variances $\\sigma_X^2, \\sigma_Y^2 > 0$, and correlation coefficient $\\rho \\in (-1, 1)$. Then the conditional distribution of $X$ given $Y = y$ is strictly normal:$$X \\mid (Y = y) \\sim \\mathcal{N}\\left(\\mu_X + \\rho \\frac{\\sigma_X}{\\sigma_Y}(y - \\mu_Y), \\; \\sigma_X^2(1 - \\rho^2)\\right)$$</p><p>The conditional mean is linear in $y$, and the conditional variance $\\sigma_X^2(1 - \\rho^2)$ is constant, independent of the observed value $y$.</p><p><b>Mathematical terms:</b> $\\rho = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$ is the Pearson correlation coefficient; $\\mu_X + \\rho \\frac{\\sigma_X}{\\sigma_Y}(y - \\mu_Y)$ is the conditional mean (linear regression function); $\\sigma_X^2(1-\\rho^2)$ is the conditional residual variance.</p><p><b>Reason:</b> Expand the bivariate normal density exponent $-\\frac{1}{2(1-\\rho^2)}[(\\frac{x-\\mu_X}{\\sigma_X})^2 - 2\\rho(\\frac{x-\\mu_X}{\\sigma_X})(\\frac{y-\\mu_Y}{\\sigma_Y}) + (\\frac{y-\\mu_Y}{\\sigma_Y})^2]$. Completing the square in $x$ factors the quadratic into $-\\frac{(x - [\\mu_X + \\rho \\frac{\\sigma_X}{\\sigma_Y}(y - \\mu_Y)])^2}{2\\sigma_X^2(1-\\rho^2)} - \\frac{(y - \\mu_Y)^2}{2\\sigma_Y^2}$. In the quotient $f(x, y)/f_Y(y)$, the marginal $y$ factor cancels out completely, leaving an exact 1D Gaussian density in $x$ with center $\\mu_X + \\rho\\frac{\\sigma_X}{\\sigma_Y}(y-\\mu_Y)$ and variance $\\sigma_X^2(1-\\rho^2)$.</p>",
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
      "idea": "Standardize both coordinates and complete a two-variable square explicitly.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume σ_X,σ_Y>0 and |ρ|<1 for the nonsingular bivariate normal density.",
          "m": "$$u=\\frac{x-\\mu_X}{\\sigma_X},\\quad v=\\frac{y-\\mu_Y}{\\sigma_Y}$$",
          "meaning": "These are distances from the respective centers in standard-deviation units."
        },
        {
          "why": "Write the defining joint density in these standardized coordinates.",
          "m": "$$f_{X,Y}(x,y)=\\frac{\\exp[-(u^2-2\\rho uv+v^2)/(2(1-\\rho^2))]}{2\\pi\\sigma_X\\sigma_Y\\sqrt{1-\\rho^2}}$$",
          "meaning": "Joint normality, not just separate normal marginals, supplies this model."
        },
        {
          "why": "Complete the square using (u−ρv)²=u²−2ρuv+ρ²v².",
          "m": "$$u^2-2\\rho uv+v^2=(u-\\rho v)^2+(1-\\rho^2)v^2$$",
          "meaning": "Adding the second term restores the full coefficient 1 of v²."
        },
        {
          "why": "Separate the density into a v-only marginal factor and an x-dependent factor.",
          "m": "$$f_{X,Y}(x,y)=\\frac{e^{-v^2/2}}{\\sigma_Y\\sqrt{2\\pi}}\\;\\frac{e^{-(u-\\rho v)^2/[2(1-\\rho^2)]}}{\\sigma_X\\sqrt{2\\pi(1-\\rho^2)}}$$",
          "meaning": "The second factor integrates to 1 in x, by a translated and rescaled normal integral; therefore the first is f_Y(y)."
        },
        {
          "why": "Divide the joint density by the positive marginal density.",
          "m": "$$f_{X\\mid Y}(x\\mid y)=\\frac{e^{-(u-\\rho v)^2/[2(1-\\rho^2)]}}{\\sigma_X\\sqrt{2\\pi(1-\\rho^2)}}$$",
          "meaning": "Conditioning on a continuous value uses this density slice, not a ratio of zero-probability point events."
        },
        {
          "why": "Translate u−ρv back into x units.",
          "m": "$$u-\\rho v=\\frac{x-[\\mu_X+\\rho(\\sigma_X/\\sigma_Y)(y-\\mu_Y)]}{\\sigma_X}$$",
          "meaning": "Put the two standardized terms over the common denominator σ_X."
        },
        {
          "why": "Read off the center and squared width from the one-variable normal density.",
          "m": "$$X\\mid Y=y\\sim N\\left(\\mu_X+\\rho\\frac{\\sigma_X}{\\sigma_Y}(y-\\mu_Y),\\sigma_X^2(1-\\rho^2)\\right)$$",
          "meaning": "For ρ=0 the conditional density is the unchanged X marginal, also proving independence in this model."
        },
        {
          "why": "If |ρ|=1, the density division above is unavailable; instead the standardized variables obey an exact linear relation.",
          "m": "$$X=\\mu_X+\\rho\\frac{\\sigma_X}{\\sigma_Y}(Y-\\mu_Y)\\quad\\text{almost surely}$$",
          "meaning": "The variance of the difference is zero. The conditional law is a point mass with variance zero."
        }
      ],
      "ends": "The conditional normal formula follows from completed-square algebra under the jointly normal model; singular correlation endpoints require a constant conditional law."
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
    "statement": "<p><b>Statement:</b> Conditioning on an event $A$ with $P(A) > 0$ defines the conditional density $f_{X \\mid A}(x) = \\frac{f_X(x) P(A \\mid X = x)}{P(A)}$. More generally, in hierarchical models with a latent mixing parameter $\\Theta \\sim f_\\Theta(\\theta)$ where $X \\mid \\Theta = \\theta \\sim f(x \\mid \\theta)$, the marginal density of $X$ is the continuous mixture:$$f_X(x) = \\int f(x \\mid \\theta) f_\\Theta(\\theta) \\, d\\theta$$and the posterior density of the latent variable given observed $X = x$ follows Bayes' Rule: $f_{\\Theta \\mid X}(\\theta \\mid x) = \\frac{f(x \\mid \\theta) f_\\Theta(\\theta)}{f_X(x)}$.</p><p><b>Mathematical terms:</b> $f_\\Theta(\\theta)$ is the prior density; $f(x \\mid \\theta)$ is the likelihood; $f_X(x)$ is the marginal (evidence) density; $f_{\\Theta \\mid X}(\\theta \\mid x)$ is the posterior density.</p><p><b>Reason:</b> By definition of joint probability, the joint density of the observation and latent parameter is $f_{X, \\Theta}(x, \\theta) = f(x \\mid \\theta) f_\\Theta(\\theta)$. Marginalizing out the latent variable $\\theta$ by integrating across its support gives $f_X(x) = \\int f_{X,\\Theta}(x, \\theta) d\\theta$, which is the continuous version of the Law of Total Probability. Dividing the joint density by the marginal density yields the conditional posterior density by the definition of conditional distributions.</p>",
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
    "provenance": "Ross, §6.5, conditioning on events and the beta posterior example, PDF pp. 275–276.",
    "proof": {
      "idea": "Restrict and normalize density for an event, then apply the same idea to a latent parameter.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let A be a numerical set with P(X in A)>0 and X have density f_X.",
          "m": "$$P(X\\in A)=\\int_Af_X(x)dx$$",
          "meaning": "The denominator is an area probability, not a point-density height."
        },
        {
          "why": "The conditional probability of another numerical set B uses its retained intersection.",
          "m": "$$P(X\\in B\\mid X\\in A)=\\frac{\\int_{A\\cap B}f_X(x)dx}{P(X\\in A)}$$",
          "meaning": "This is ordinary positive-event conditioning."
        },
        {
          "why": "Read the density multiplying dx on the retained support.",
          "m": "$$f_{X\\mid X\\in A}(x)=\\frac{f_X(x)\\mathbf1_A(x)}{P(X\\in A)}$$",
          "meaning": "It is zero outside A and integrates to 1 inside A."
        },
        {
          "why": "Now let Θ have prior density f_Θ and discrete observed data N=n have likelihood L(n given θ).",
          "m": "$$f_{\\Theta,N}(\\theta,n)=f_\\Theta(\\theta)L(n\\mid\\theta)$$",
          "meaning": "The multiplication rule supplies prior times conditional data chance."
        },
        {
          "why": "Integrate over every parameter value to get the evidence probability.",
          "m": "$$P(N=n)=\\int L(n\\mid\\theta)f_\\Theta(\\theta)d\\theta$$",
          "meaning": "This is the continuous-parameter version of total probability."
        },
        {
          "why": "Divide by positive evidence to normalize the updated parameter density.",
          "m": "$$f_{\\Theta\\mid N}(\\theta\\mid n)=\\frac{L(n\\mid\\theta)f_\\Theta(\\theta)}{\\int L(n\\mid u)f_\\Theta(u)du}$$",
          "meaning": "The proportionality in Bayes’ rule becomes an exact formula with this denominator."
        }
      ],
      "ends": "Conditioning rescales retained probability weight; parameter updating normalizes likelihood times prior."
    }
  },
  {
    "id": "c.prob.6.6.1",
    "sec": "6.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Order statistics of an iid continuous sample",
    "oneLine": "Sort the sample from smallest to largest. The kth sorted value is below a cutoff exactly when at least k observations are below it. That turns an ordering problem into a success-count problem.",
    "statement": "<p><b>Statement:</b> Let $X_1, \\ldots, X_n$ be independent and identically distributed (iid) continuous random variables with common PDF $f(x)$ and CDF $F(x)$. Arrange them in ascending order: $X_{(1)} < X_{(2)} < \\cdots < X_{(n)}$. The <b>$k$-th order statistic</b> $X_{(k)}$ has marginal PDF:$$f_{X_{(k)}}(x) = \\frac{n!}{(k-1)! \\, (n-k)!} [F(x)]^{k-1} [1 - F(x)]^{n-k} f(x)$$In particular, the sample minimum $X_{(1)}$ has density $n[1 - F(x)]^{n-1}f(x)$, and the sample maximum $X_{(n)}$ has density $n[F(x)]^{n-1}f(x)$ with CDF $F_{X_{(n)}}(x) = [F(x)]^n$.</p><p><b>Mathematical terms:</b> $X_{(k)}$ is the $k$-th smallest value; $X_{(1)} = \\min(X_i)$; $X_{(n)} = \\max(X_i)$; $F(x)^{k-1}$ is the probability that $k-1$ observations fall below $x$; $[1 - F(x)]^{n-k}$ is the probability that $n-k$ observations exceed $x$.</p><p><b>Reason:</b> For $X_{(k)}$ to fall in the infinitesimal interval $(x, x + dx)$, three independent events must occur simultaneously: (1) exactly $k-1$ observations must fall below $x$ (each with probability $F(x)$); (2) exactly 1 observation must fall in $(x, x+dx)$ (with probability $f(x)dx$); (3) the remaining $n-k$ observations must exceed $x+dx$ (each with probability $1 - F(x)$). The multinomial coefficient $\\frac{n!}{(k-1)! 1! (n-k)!}$ counts the distinct ways to assign the $n$ sample items to these three categories. For the maximum, $P(X_{(n)} \\le x) = P(\\text{all } X_i \\le x) = [F(x)]^n$ by independence; differentiating gives $n[F(x)]^{n-1}f(x)$.</p>",
    "intuition": "For 5 exam scores, the third-smallest score is at most 70 exactly when at least 3 scores are at most 70. Counting how many land below the cutoff gives the order statistic’s chance.",
    "needs": [
      "c.prob.6.1.3"
    ],
    "traps": [
      "Use $k-1$ observations below the kth value and $n-k$ above it.",
      "The joint order-statistic density lives only on the ordered region $x_1<\\cdots<x_n$."
    ],
    "proof": {
      "idea": "Count observations below a cutoff and show the cancellation in the derivative of that count probability.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Take n independent observations with common continuous CDF F and density f; let X_(k) be the k-th smallest.",
          "m": "$$I_i(x)=\\mathbf1_{\\{X_i\\le x\\}},\\quad N_x=\\sum_{i=1}^nI_i(x)$$",
          "meaning": "The flags are independent with common success chance F(x)."
        },
        {
          "why": "The count therefore has a binomial distribution.",
          "m": "$$P(N_x=j)=\\binom njF(x)^j[1-F(x)]^{n-j}$$",
          "meaning": "Choose the j observations below the cutoff and multiply their independent probabilities."
        },
        {
          "why": "The k-th smallest is at most x exactly when at least k observations are at most x.",
          "m": "$$F_{X_{(k)}}(x)=P(N_x\\ge k)=\\sum_{j=k}^n\\binom njF(x)^j[1-F(x)]^{n-j}$$",
          "meaning": "This statement is exact, including all possibilities for j."
        },
        {
          "why": "Let u=F(x) and differentiate the finite binomial tail with respect to u.",
          "m": "$$\\frac d{du}\\sum_{j=k}^n\\binom nju^j(1-u)^{n-j}=\\sum_{j=k}^n\\binom nj\\left[ju^{j-1}(1-u)^{n-j}-(n-j)u^j(1-u)^{n-j-1}\\right]$$",
          "meaning": "Product and power rules give the two terms; the negative term is absent when j=n."
        },
        {
          "why": "Use factorial cancellation in each coefficient.",
          "m": "$$j\\binom nj=n\\binom{n-1}{j-1},\\quad(n-j)\\binom nj=n\\binom{n-1}j$$",
          "meaning": "Expanding the factorial definitions verifies each identity."
        },
        {
          "why": "Reindex the positive terms at j−1; all terms indexed k through n−1 cancel their negative counterparts.",
          "m": "$$\\frac d{du}P(N_x\\ge k)=n\\binom{n-1}{k-1}u^{k-1}(1-u)^{n-k}$$",
          "meaning": "Only the positive term indexed k−1 remains."
        },
        {
          "why": "Multiply by du/dx=f(x) by the chain rule.",
          "m": "$$f_{X_{(k)}}(x)=\\frac{n!}{(k-1)!(n-k)!}F(x)^{k-1}[1-F(x)]^{n-k}f(x)$$",
          "meaning": "The coefficient equals n times (n−1 choose k−1); the density equation holds almost everywhere."
        }
      ],
      "ends": "Order-statistic CDFs are binomial tail probabilities, and their densities follow by a finite telescoping derivative."
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
    "statement": "<p><b>Statement:</b> For an iid continuous sample $X_1, \\ldots, X_n$ with density $f$ and CDF $F$, the joint PDF of the minimum $U = X_{(1)}$ and maximum $V = X_{(n)}$ is:$$f_{X_{(1)}, X_{(n)}}(u, v) = n(n-1) [F(v) - F(u)]^{n-2} f(u) f(v), \\quad u < v$$The <b>sample range</b> $R = X_{(n)} - X_{(1)}$ has PDF $f_R(r) = n(n-1) \\int_{-\\infty}^\\infty [F(u+r) - F(u)]^{n-2} f(u) f(u+r) \\, du$ for $r > 0$.</p><p><b>Mathematical terms:</b> $R = X_{(n)} - X_{(1)} \\ge 0$ is the sample range; $F(v) - F(u)$ is the probability an observation lands strictly between $u$ and $v$; $n(n-1)$ counts the ordered assignment of minimum and maximum.</p><p><b>Reason:</b> For $X_{(1)} \\in (u, u+du)$ and $X_{(n)} \\in (v, v+dv)$ with $u < v$, there are $n$ choices for which item is the minimum, $n-1$ choices for the maximum, and the remaining $n-2$ items must all fall inside the interval $(u, v)$ (probability $F(v) - F(u)$ each). Multiplying these probabilities gives $n(n-1)[F(v)-F(u)]^{n-2} f(u)du f(v)dv$. Setting $R = V - U$ and $U = U$, the transformation has Jacobian 1; integrating out $u$ over $\\mathbb{R}$ gives the marginal distribution of range $R$.</p>",
    "intuition": "If the first observation is the smallest and sits near x, a range below a means all the other observations must fit between x and x+a. Add over every possible place for that minimum.",
    "needs": [
      "c.prob.6.6.1"
    ],
    "traps": [
      "A range condition involves both extremes, not merely the maximum.",
      "The uniform formula is supported only on $0<a<1$."
    ],
    "proof": {
      "idea": "Choose which observation is the minimum, then place all others within the allowed range.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Take n≥2 iid observations with continuous CDF F and density f.",
          "m": "$$R=X_{(n)}-X_{(1)}\\ge0$$",
          "meaning": "A continuous sample has ties with probability zero."
        },
        {
          "why": "Fix one labeled observation as the minimum near x.",
          "m": "$$f(x)\\,dx$$",
          "meaning": "This denotes its small-interval density contribution, not the probability of an exact point."
        },
        {
          "why": "For the range to be at most a≥0, every other observation must lie between x and x+a.",
          "m": "$$P(x<X_i\\le x+a)=F(x+a)-F(x)$$",
          "meaning": "This is the CDF interval formula; continuity makes endpoint choices irrelevant."
        },
        {
          "why": "Independence multiplies the n−1 other-observation chances; n labels can be the unique minimum.",
          "m": "$$P(R\\le a)=n\\int_{-\\infty}^{\\infty}[F(x+a)-F(x)]^{n-1}f(x)dx$$",
          "meaning": "Formally, partition by the minimum’s label and integrate its value against the product joint density, so the small-interval argument becomes an exact integral."
        },
        {
          "why": "Similarly choose distinct labels for a minimum x and maximum z>x.",
          "m": "$$f_{X_{(1)},X_{(n)}}(x,z)=n(n-1)[F(z)-F(x)]^{n-2}f(x)f(z)$$",
          "meaning": "The other n−2 values lie between them; there are n(n−1) choices of the two labels."
        },
        {
          "why": "For uniform (0,1) inputs and 0<a<1, split the minimum at x=1−a.",
          "m": "$$P(R\\le a)=n\\int_0^{1-a}a^{n-1}dx+n\\int_{1-a}^1(1-x)^{n-1}dx$$",
          "meaning": "In the first part the allowed interval has length a; near the upper endpoint its length is only 1−x."
        },
        {
          "why": "Evaluate both integrals using the power rule.",
          "m": "$$P(R\\le a)=n(1-a)a^{n-1}+a^n$$",
          "meaning": "The second integral is a^n/n before multiplying by n."
        },
        {
          "why": "Differentiate this finite expression and combine the a^(n−1) terms.",
          "m": "$$f_R(a)=n(n-1)a^{n-2}(1-a)\\quad(0<a<1)$$",
          "meaning": "The derivative terms −na^(n−1) and +na^(n−1) cancel; the CDF is 0 below 0 and 1 at or above 1."
        }
      ],
      "ends": "Range probabilities add all possible minima while constraining every other sample value to the allowed interval."
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
    "statement": "<p><b>Statement:</b> Let $(X_1, \\ldots, X_n)$ have joint density $f_{\\mathbf{X}}(\\mathbf{x})$ on $\\mathbb{R}^n$, and let $\\mathbf{Y} = \\mathbf{g}(\\mathbf{X})$ be an invertible, continuously differentiable mapping from open set $S \\subset \\mathbb{R}^n$ onto $T \\subset \\mathbb{R}^n$ with inverse $\\mathbf{x} = \\mathbf{g}^{-1}(\\mathbf{y}) = \\mathbf{h}(\\mathbf{y})$. The joint density of $\\mathbf{Y}$ is:$$f_{\\mathbf{Y}}(\\mathbf{y}) = f_{\\mathbf{X}}(\\mathbf{h}(\\mathbf{y})) \\cdot |J(\\mathbf{y})|, \\quad \\mathbf{y} \\in T$$where $J(\\mathbf{y}) = \\det\\left(\\left[\\frac{\\partial x_i}{\\partial y_j}\\right]_{i,j=1}^n\\right)$ is the <b>Jacobian determinant</b> of the inverse transformation.</p><p><b>Mathematical terms:</b> $\\mathbf{g}: \\mathbb{R}^n \\to \\mathbb{R}^n$ is the multivariate transformation; $\\mathbf{h} = \\mathbf{g}^{-1}$ is the inverse map; $J(\\mathbf{y}) = \\det(\\mathbf{J}_{\\mathbf{h}})$ is the Jacobian determinant; $|J|$ is the local volume dilation factor.</p><p><b>Reason:</b> Under the multi-dimensional change of variables formula for multiple integrals, probability conservation requires $P(\\mathbf{Y} \\in B) = P(\\mathbf{X} \\in \\mathbf{h}(B))$. Writing this in terms of densities gives $\\int_B f_{\\mathbf{Y}}(\\mathbf{y}) d\\mathbf{y} = \\int_{\\mathbf{h}(B)} f_{\\mathbf{X}}(\\mathbf{x}) d\\mathbf{x}$. By multivariable calculus, the differential volume element transforms as $d\\mathbf{x} = |J(\\mathbf{y})| d\\mathbf{y}$, where the absolute determinant $|J|$ represents the infinitesimal parallelotope volume scaling factor induced by the linear derivative map. Equating the integrands yields $f_{\\mathbf{Y}}(\\mathbf{y}) = f_{\\mathbf{X}}(\\mathbf{h}(\\mathbf{y})) |J(\\mathbf{y})|$.</p>",
    "intuition": "Changing from map coordinates to distance and direction stretches little patches. The Jacobian is the stretch factor, so the probability density must shrink or grow by the opposite amount to keep the same probability.",
    "needs": [
      "c.prob.6.1.3"
    ],
    "traps": [
      "Use the determinant of the inverse map when substituting into the original density.",
      "Transform the support and include all inverse branches; if the map is not one-to-one, sum branch contributions."
    ],
    "proof": {
      "idea": "Explain the area factor through a parallelogram before using the integral transformation theorem.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let y=g(x) be one-to-one on its support, with differentiable inverse x=h(y).",
          "m": "$$x_1=h_1(y_1,y_2),\\quad x_2=h_2(y_1,y_2)$$",
          "meaning": "We need the inverse map because output area must be converted back to input area."
        },
        {
          "why": "A small output displacement is approximately multiplied by the inverse derivative matrix A.",
          "m": "$$A=Dh=\\begin{pmatrix}\\partial h_1/\\partial y_1&\\partial h_1/\\partial y_2\\\\ \\partial h_2/\\partial y_1&\\partial h_2/\\partial y_2\\end{pmatrix}$$",
          "meaning": "Partial derivative means the slope when one coordinate changes and the other is held fixed."
        },
        {
          "why": "The image of a small rectangle has side vectors proportional to the two columns of A.",
          "m": "$$A=\\begin{pmatrix}a&b\\\\ c&d\\end{pmatrix},\\quad\\text{area scale}=|ad-bc|$$",
          "meaning": "The parallelogram area from vectors (a,c) and (b,d) is |ad−bc|, the high school coordinate-geometry determinant formula."
        },
        {
          "why": "Probability in an output region B equals probability in its input preimage.",
          "m": "$$P(Y\\in B)=\\int_{h(B)}f_X(x)\\,dx$$",
          "meaning": "A one-to-one transformation assigns exactly the same outcomes to these two regions."
        },
        {
          "why": "The multivariable change-of-variables theorem applies the local area factor inside the integral.",
          "m": "$$P(Y\\in B)=\\int_B f_X(h(y))|\\det Dh(y)|\\,dy$$",
          "meaning": "The small-parallelogram picture explains the factor; proving its use for general integrals is an advanced calculus theorem."
        },
        {
          "why": "The function multiplying output area is therefore the output density.",
          "m": "$$f_Y(y)=f_X(h(y))|\\det Dh(y)|$$",
          "meaning": "Use zero outside the transformed support; multiple inverse branches require adding separate contributions."
        },
        {
          "why": "For a simple stretch y_1=2x_1, y_2=3x_2, check the inverse factor.",
          "m": "$$h(y)=(y_1/2,y_2/3),\\quad|\\det Dh|=1/6$$",
          "meaning": "Output area is six times larger, so density must become six times smaller to preserve probability."
        }
      ],
      "ends": "The absolute inverse Jacobian corrects for local area or volume changes; high school geometry explains the factor, and calculus justifies the full integral rule."
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
    "statement": "<p><b>Statement:</b> If $X \\sim \\operatorname{Gamma}(s, \\lambda)$ and $Y \\sim \\operatorname{Gamma}(t, \\lambda)$ are independent Gamma variables, define their sum $U = X + Y$ and proportion $V = \\frac{X}{X + Y}$. Then:<br>(1) $U$ and $V$ are statistically <b>independent</b>.<br>(2) $U \\sim \\operatorname{Gamma}(s + t, \\, \\lambda)$ and $V \\sim \\operatorname{Beta}(s, t)$.</p><p><b>Mathematical terms:</b> $U = X + Y$ is total lifetime; $V = \\frac{X}{X+Y} \\in (0, 1)$ is the relative share; independence of sum and ratio is a characterization of Gamma variables.</p><p><b>Reason:</b> Invert the transformation: $x = uv$ and $y = u(1-v)$, mapping $u > 0$ and $v \\in (0, 1)$. The Jacobian matrix is $\\begin{pmatrix} v & u \\\\ 1-v & -u \\end{pmatrix}$, with determinant $J = -uv - u(1-v) = -u$, so $|J| = u$. The joint density is $f_{X,Y}(uv, u(1-v)) \\cdot u = \\frac{\\lambda^{s+t}}{\\Gamma(s)\\Gamma(t)} (uv)^{s-1} (u(1-v))^{t-1} e^{-\\lambda u} \\cdot u = \\left[\\frac{\\lambda^{s+t}}{\\Gamma(s+t)} u^{s+t-1} e^{-\\lambda u}\\right] \\times \\left[\\frac{\\Gamma(s+t)}{\\Gamma(s)\\Gamma(t)} v^{s-1} (1-v)^{t-1}\\right]$. Because this factors into a product $f_U(u) f_V(v)$ on $(0, \\infty) \\times (0, 1)$, $U$ and $V$ are independent Gamma and Beta variables.</p>",
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
      "idea": "Calculate the inverse Jacobian and normalize the separated gamma and beta factors.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X,Y be independent gammas with shapes α,β>0 and common rate λ>0.",
          "m": "$$U=X+Y,\\quad V=\\frac X{X+Y}$$",
          "meaning": "Since X,Y>0, the new support is u>0 and 0<v<1."
        },
        {
          "why": "Solve these two equations for the original coordinates.",
          "m": "$$x=uv,\\quad y=u(1-v)$$",
          "meaning": "The first gets fraction v of total u; the second gets the remaining fraction."
        },
        {
          "why": "Differentiate the inverse coordinates and calculate the determinant.",
          "m": "$$\\frac{\\partial(x,y)}{\\partial(u,v)}=\\begin{pmatrix}v&u\\\\1-v&-u\\end{pmatrix},\\quad|{-uv-u(1-v)}|=u$$",
          "meaning": "The absolute inverse area factor is u, which must multiply the density."
        },
        {
          "why": "Substitute the independent gamma product and that factor.",
          "m": "$$f_{U,V}(u,v)=\\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha)\\Gamma(\\beta)}(uv)^{\\alpha-1}[u(1-v)]^{\\beta-1}e^{-\\lambda u}u$$",
          "meaning": "The exponentials combine because x+y=u."
        },
        {
          "why": "Collect powers of u and v.",
          "m": "$$f_{U,V}(u,v)=\\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha)\\Gamma(\\beta)}u^{\\alpha+\\beta-1}e^{-\\lambda u}v^{\\alpha-1}(1-v)^{\\beta-1}$$",
          "meaning": "The Jacobian contributes the extra power u needed for the sum’s gamma shape."
        },
        {
          "why": "Multiply and divide by Γ(α+β) to separate two normalized factors.",
          "m": "$$f_{U,V}(u,v)=\\left[\\frac{\\lambda^{\\alpha+\\beta}}{\\Gamma(\\alpha+\\beta)}u^{\\alpha+\\beta-1}e^{-\\lambda u}\\right]\\left[\\frac{\\Gamma(\\alpha+\\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)}v^{\\alpha-1}(1-v)^{\\beta-1}\\right]$$",
          "meaning": "The beta–gamma identity derived in the family note shows the second factor integrates to 1."
        },
        {
          "why": "Each factor has its own full support independently of the other.",
          "m": "$$f_{U,V}(u,v)=f_U(u)f_V(v)$$",
          "meaning": "This product over u>0,0<v<1 proves U and V independent, with gamma(α+β,λ) and beta(α,β) marginals."
        }
      ],
      "ends": "With a common rate, gamma total and proportion are independent. Both the Jacobian and the normalizing constants are essential."
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
    "statement": "<p><b>Statement:</b> Random variables $X_1, \\ldots, X_n$ are <b>exchangeable</b> if their joint distribution is invariant under every permutation $\\pi$ of their indices:$$P(X_1 \\le x_1, \\ldots, X_n \\le x_n) = P(X_{\\pi(1)} \\le x_1, \\ldots, X_{\\pi(n)} \\le x_n)$$</p><p>for every permutation $\\pi$ of $\\{1, \\ldots, n\\}$. Any iid sequence is exchangeable, but exchangeable variables need not be independent.</p><p><b>Mathematical terms:</b> Permutation symmetry; $\\pi$ is any element of the symmetric group $S_n$; exchangeability implies identical marginal distributions and identical pairwise covariances.</p><p><b>Reason:</b> Exchangeability captures physical situations where labels or chronological positions convey no information about the underlying probability law. For iid variables, the joint CDF is the symmetric product $\\prod F(x_i)$, which is trivially permutation invariant. However, non-independent variables can also be exchangeable: for example, indicator draws of balls in Polya's urn or sampling without replacement from a finite deck are exchangeable because every ordered sequence containing $k$ red balls has identical probability, even though draws are dependent.</p>",
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
    "provenance": "Ross, §6.8, pp. 287–289 (PDF pp. 287–289).",
    "proof": {
      "idea": "Explain permutation symmetry and show why it does not imply independence.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Exchangeability means every relabeling of the observation positions preserves their joint law.",
          "m": "$$(X_1,\\ldots,X_n)\\text{ and }(X_{\\pi(1)},\\ldots,X_{\\pi(n)})\\text{ have the same law}$$",
          "meaning": "A permutation π rearranges positions, leaving their possible values intact; this is a definition of symmetry."
        },
        {
          "why": "For a discrete law, check that its mass is unchanged when arguments are reordered.",
          "m": "$$p(x_1,\\ldots,x_n)=p(x_{\\pi(1)},\\ldots,x_{\\pi(n)})$$",
          "meaning": "This equality for every vector establishes the required symmetry of probabilities."
        },
        {
          "why": "An iid joint PMF is a product of the same individual law.",
          "m": "$$p(x_1,\\ldots,x_n)=\\prod_{i=1}^np_X(x_i)$$",
          "meaning": "Reordering the factors leaves the product unchanged, so iid observations are exchangeable."
        },
        {
          "why": "For a dependent example, draw one fair Bernoulli Z and set both X_1 and X_2 equal to Z.",
          "m": "$$P((X_1,X_2)=(0,0))=P((X_1,X_2)=(1,1))=1/2$$",
          "meaning": "Swapping positions changes nothing, so the pair is exchangeable."
        },
        {
          "why": "But the chance of two ones does not equal the product of their individual chances.",
          "m": "$$1/2\\ne(1/2)(1/2)=1/4$$",
          "meaning": "This pair is dependent despite exchangeability."
        }
      ],
      "ends": "Exchangeability is a joint relabeling symmetry; independence is a separate factorization condition."
    }
  },
  {
    "id": "c.prob.6.8.2",
    "sec": "6.8",
    "kind": "example",
    "tier": "extra",
    "title": "Exchangeability from sampling mechanisms",
    "oneLine": "Drawing without replacement has symmetric draw positions. Sharing one random success chance across trials also makes positions symmetric. Both give exchangeable sequences, although the shared information can make draws dependent.",
    "statement": "<p><b>Statement:</b> Sampling mechanisms that induce exchangeability:<br>(1) <b>Sampling without replacement:</b> If $n$ cards are drawn sequentially without replacement from a deck of $N$, the indicator variables $I_1, \\ldots, I_n$ of drawing an ace are exchangeable with $P(I_j = 1) = m/N$ and $\\operatorname{Cov}(I_j, I_k) = -\\frac{m(N-m)}{N^2(N-1)} < 0$.<br>(2) <b>De Finetti's Representation Theorem:</b> An infinite sequence of exchangeable binary variables is conditionally iid Bernoulli given a latent random parameter $\\Theta \\sim F_\\Theta(\\theta)$.</p><p><b>Mathematical terms:</b> Sampling without replacement; de Finetti mixture representation; negative covariance due to competition without replacement.</p><p><b>Reason:</b> In sampling without replacement, every ordered sequence of $k$ successes and $n-k$ failures has identical probability $\\frac{m(m-1)\\cdots(m-k+1) (N-m)\\cdots(N-m-(n-k)+1)}{N(N-1)\\cdots(N-n+1)}$, regardless of the positions in which successes occur. Because all permutations of the sequence carry identical probability, the sequence is exchangeable. De Finetti's theorem establishes that infinite exchangeability is mathematically equivalent to Bayesian mixtures of independent trials.</p>",
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
    "provenance": "Ross, §6.8 Examples 8a and 8c, pp. 287–288 (PDF pp. 287–288).",
    "proof": {
      "idea": "Show that two symmetric sampling mechanisms produce probabilities depending only on success count.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Sample n objects without replacement from N with m marked objects, recording only marked/unmarked flags.",
          "m": "$$r=\\sum_{i=1}^nx_i\\quad(x_i\\in\\{0,1\\})$$",
          "meaning": "A specified binary pattern has r marked positions and n−r unmarked positions."
        },
        {
          "why": "Multiply the successive remaining-pool chances for that pattern.",
          "m": "$$P(\\text{pattern})=\\frac{(m)_r(N-m)_{n-r}}{(N)_n}$$",
          "meaning": "Here (a)_k=a(a−1)⋯(a−k+1). Reordering the draws reorders the same numerator marked and unmarked factors."
        },
        {
          "why": "The expression depends on r, not on the positions of its ones.",
          "m": "$$P(\\text{permuted pattern})=P(\\text{pattern})$$",
          "meaning": "This proves exchangeability of the indicator sample; draws remain dependent because objects are removed."
        },
        {
          "why": "For the second mechanism, draw one random Θ and then conditionally iid Bernoulli(Θ) flags.",
          "m": "$$P(\\text{pattern}\\mid\\Theta)=\\Theta^r(1-\\Theta)^{n-r}$$",
          "meaning": "Independence holds within each fixed-Θ conditional model."
        },
        {
          "why": "Average over Θ using total expectation.",
          "m": "$$P(\\text{pattern})=E[\\Theta^r(1-\\Theta)^{n-r}]$$",
          "meaning": "Again the position labels do not appear, proving exchangeability."
        },
        {
          "why": "For two flags, compute their covariance through conditional means.",
          "m": "$$E[I_1I_2]-E[I_1]E[I_2]=E[\\Theta^2]-E[\\Theta]^2=\\operatorname{Var}(\\Theta)$$",
          "meaning": "A genuinely varying shared success chance therefore creates dependence, despite symmetry."
        }
      ],
      "ends": "Sampling symmetry produces exchangeable sequences; removal or a shared latent parameter can still produce dependence."
    }
  }
]
);
