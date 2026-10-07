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
    "statement": "<p>For a jointly normal pair, knowing $Y$ shifts the predicted average of $X$ along a straight line. The remaining uncertainty is normal.</p><p>Assume $\\sigma_X,\\sigma_Y>0$. For $|\\rho|<1$, $X\\mid Y=y$ is normal with mean $\\mu_X+\\rho(\\sigma_X/\\sigma_Y)(y-\\mu_Y)$ and variance $\\sigma_X^2(1-\\rho^2)$. When $|\\rho|=1$, the same center describes a point-mass conditional law of variance zero; the nonsingular joint-density calculation does not apply.</p>",
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
