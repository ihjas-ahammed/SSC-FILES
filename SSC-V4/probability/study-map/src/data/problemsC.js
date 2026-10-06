import { problem, chk } from "./dsl.js";
const r = String.raw;

// Part C: stars and bars. Ross, Chapter 1, Theoretical Exercises 20, 21, 22, 23.
export default [
  problem({
    id: "urns-with-minimum-loads",
    name: "Urns with Minimum Loads",
    group: "stars",
    symbol: r`x_i\ge m_i`,
    prerequisites: ["Stars and Bars", "Bijection", "Identical and Distinct Objects"],
    ross: { n: 20, section: "C", page: 4 },
    title: "Distributing n balls with a minimum in each urn",
    statement: r`There are $n$ identical balls to be put into $r$ urns, and urn $i$ must receive at least $m_i$ balls, where $n\ge\sum_{i=1}^{r}m_i$. Show that the number of ways to do this is $$\binom{n-\sum_{i=1}^{r}m_i+r-1}{r-1}.$$`,
    meaning: r`First give every urn the balls it must have. Whatever is left can go anywhere, which is the plain stars-and-bars problem.`,
    linkedFormal: r`The ways correspond one-to-one ([[Bijection|bijection]]) to the ways to put the $n-M$ leftover [[Identical and Distinct Objects|identical balls]] into $r$ urns freely, where $M=\sum m_i$. By [[Stars and Bars|stars and bars]] that is $\binom{n-M+r-1}{r-1}$.`,
    example: r`$n=5$ balls, $r=2$ urns, $m_1=1,m_2=2$. Leftover $5-3=2$ balls into 2 urns: $\binom{2+1}{1}=3$ ways, namely $(1,4),(2,3),(3,2)$ as final loads.`,
    pretest: {
      prompt: r`Put 4 identical balls into 2 urns, with no restriction. How many ways?`,
      options: [r`$5$`, r`$4$`, r`$8$`],
      correct: 0,
      explanation: r`The first urn gets $0,1,2,3$ or $4$ balls and the second gets the rest: 5 ways.`,
    },
    check: chk(
      r`$n$ identical balls go into $r$ urns with no restriction. How many ways?`,
      r`$\binom{n+r-1}{r-1}$`,
      r`$r^n$`,
      r`$\binom{n}{r}$`,
      r`That is stars and bars: arrange $n$ stars and $r-1$ bars.`,
    ),
    faq: [
      { q: r`What does "identical" mean here?`, a: r`Balls cannot be told apart, so only the number in each urn matters. See [[Identical and Distinct Objects|Identical and Distinct Objects]].` },
      { q: r`Why is the assumption $n\ge\sum m_i$ needed?`, a: r`Otherwise there are not enough balls to meet every minimum, and the count is $0$.` },
      { q: r`What is the idea in one line?`, a: r`Pay each urn's minimum first, then distribute the change freely.` },
      { q: r`Is the answer just the stars-and-bars formula?`, a: r`Yes, but with $n$ replaced by the leftover $n-\sum m_i$.` },
    ],
    proof: {
      idea: r`Shift every urn's load down by its minimum. The restricted problem turns into the free problem with fewer balls.`,
      steps: [
        {
          title: "Describe a way by the loads",
          text: r`Because the balls are identical, a way to place them is just a list of loads $(x_1,\ldots,x_r)$ with $x_i\ge m_i$ and $x_1+\cdots+x_r=n$.`,
          check: chk(r`What describes a placement of identical balls?`, r`The list of how many balls each urn gets`, r`Which ball is in which urn`, r`The order the balls were placed`, r`Identical balls cannot be told apart, so only the counts matter.`, "Identical and Distinct Objects"),
        },
        {
          title: "Take out the minimums",
          text: r`Put $y_i=x_i-m_i$. Then $y_i\ge0$ and $y_1+\cdots+y_r=n-M$ where $M=m_1+\cdots+m_r$. This is the same as first placing $m_i$ balls in urn $i$ and then placing the remaining $n-M$ balls anywhere.`,
          check: chk(r`If $y_i=x_i-m_i$, what do the $y_i$ add up to?`, r`$n-M$`, r`$n$`, r`$n+M$`, r`$\sum y_i=\sum x_i-\sum m_i=n-M$.`, "Bijection"),
        },
        {
          title: "The two lists match one-to-one",
          text: r`Given loads $x_i\ge m_i$ we get $y_i=x_i-m_i\ge0$. Given $y_i\ge0$ we get back $x_i=y_i+m_i\ge m_i$. These two steps undo each other, so the number of valid $x$-lists equals the number of free $y$-lists.`,
          check: chk(r`Why do the two counts agree?`, r`Subtracting and adding back the minimums are inverse operations, so the lists match one-to-one`, r`Both lists have the same entries`, r`Because $M=n$`, r`A bijection between two sets shows they have the same size.`, "Bijection"),
        },
        {
          title: "Use stars and bars",
          text: r`The free count is the number of ways to put $n-M$ identical balls into $r$ urns: arrange $n-M$ stars and $r-1$ bars in a row, which is $\binom{n-M+r-1}{r-1}$. This needs $n-M\ge0$, which is our assumption.`,
          check: chk(r`How many positions do the $r-1$ bars choose among $n-M+r-1$ places?`, r`$\binom{n-M+r-1}{r-1}$`, r`$\binom{n+r-1}{r-1}$`, r`$\binom{n-M}{r-1}$`, r`There are $n-M$ stars and $r-1$ bars, so $n-M+r-1$ places in total.`, "Stars and Bars"),
        },
      ],
      conclusion: r`The number of ways is $\binom{n-\sum m_i+r-1}{r-1}$. $\blacksquare$`,
      example: {
        text: r`$n=5$, $r=2$, $m=(1,2)$. Valid loads: $(1,4),(2,3),(3,2)$. Subtract the minimums: $(0,2),(1,1),(2,0)$, all the ways to put 2 balls in 2 urns. $\binom{2+1}{1}=3$.`,
      },
    },
    question: {
      faq: [
        { q: r`What are $m_i$?`, a: r`The minimum number of balls urn $i$ must get. They can be different for each urn.` },
        { q: r`What does stars and bars count?`, a: r`Ways to write $n$ as an ordered sum of $r$ whole numbers, zeros allowed. See [[Stars and Bars|Stars and Bars]].` },
        { q: r`What if some $m_i=0$?`, a: r`Then urn $i$ has no restriction, and the formula still works.` },
        { q: r`Why shift by $m_i$?`, a: r`It turns "at least $m_i$" into "at least $0$", the case we can count directly.` },
      ],
      keywords: [
        "identical balls|indistinguishable", "urns|boxes|bins", "at least m_i|minimum|lower bound", "loads|x_i|number in each urn", "x_1+...+x_r=n|sum is n|adds to n",
        "shift|subtract the minimum|y_i=x_i-m_i", "nonnegative|y_i at least 0|zeros allowed", "leftover balls|n minus M|remaining balls", "M equals sum of m_i|total minimum", "pre-load|put minimums first|pay minimums first",
        "bijection|one to one|match", "inverse|undo|add back", "stars and bars|stars bars|dividers", "n-M stars|stars", "r-1 bars|bars|dividers",
        "choose positions|binomial coefficient", "n-M+r-1 choose r-1", "n at least M|enough balls|assumption", "free problem|no restriction|unrestricted",
      ],
      retryPrompt: r`Explain how you turn the "at least $m_i$" problem into a free stars-and-bars problem, and why the two have the same count.`,
      sourcePageText: r`20. There are n identical balls to be put into r urns, with urn i required to receive at least m_i balls, where n >= sum m_i. Show that the number of ways is C(n - sum m_i + r - 1, r - 1).`,
    },
  }),

  problem({
    id: "exactly-k-zeros",
    name: "Solutions with Exactly k Zeros",
    group: "stars",
    symbol: r`\binom rk\binom{n-1}{n-r+k}`,
    prerequisites: ["Stars and Bars", "Counting by Cases", "Choosing Is Leaving Out", "Bijection"],
    ross: { n: 21, section: "C", page: 4 },
    title: "Nonnegative solutions with exactly k of the xi equal to 0",
    statement: r`Show that there are exactly $$\binom rk\binom{n-1}{n-r+k}$$ solutions of $x_1+x_2+\cdots+x_r=n$ in nonnegative integers such that exactly $k$ of the $x_i$ are equal to $0$.`,
    meaning: r`Choose which $k$ variables are zero. The rest must all be at least $1$ and still add to $n$.`,
    linkedFormal: r`Choose which $k$ of the $r$ variables are $0$ ($\binom rk$ ways, a [[Combination|choice]]). The other $r-k$ are positive and sum to $n$; there are $\binom{n-1}{r-k-1}$ such lists by [[Stars and Bars|stars and bars]], and [[Choosing Is Leaving Out|$\binom{n-1}{r-k-1}=\binom{n-1}{n-r+k}$]]. Assume $n\ge1$.`,
    example: r`$r=3$, $n=3$, $k=1$. Formula: $\binom31\binom{2}{1}=6$. The solutions are $(0,1,2),(0,2,1),(1,0,2),(2,0,1),(1,2,0),(2,1,0)$.`,
    pretest: {
      prompt: r`How many lists $(a,b)$ of positive whole numbers have $a+b=4$?`,
      options: [r`$3$`, r`$4$`, r`$5$`],
      correct: 0,
      explanation: r`$(1,3),(2,2),(3,1)$. Zero is not positive, so $(0,4)$ and $(4,0)$ do not count.`,
    },
    check: chk(
      r`How many lists of $m$ positive whole numbers add to $n$?`,
      r`$\binom{n-1}{m-1}$`,
      r`$\binom{n+m-1}{m-1}$`,
      r`$\binom{n}{m}$`,
      r`Place $m-1$ bars in the $n-1$ gaps between $n$ stars so that no two bars are adjacent and none is at the ends.`,
    ),
    faq: [
      { q: r`Why "exactly" $k$?`, a: r`The other $r-k$ variables must be nonzero; otherwise we would be counting solutions with more zeros too.` },
      { q: r`How do positive solutions get counted?`, a: r`Put $n$ stars in a row; there are $n-1$ gaps. Choose $m-1$ of those gaps for the bars.` },
      { q: r`What happens if $k=r$?`, a: r`All variables are zero, which is impossible when $n\ge1$. The formula gives $\binom{n-1}{-1}=0$.` },
      { q: r`Why does the answer look like $\binom{n-1}{n-r+k}$?`, a: r`It is $\binom{n-1}{r-k-1}$ written with the other binomial symmetry: $(n-1)-(r-k-1)=n-r+k$.` },
    ],
    proof: {
      idea: r`Decide first which $k$ variables vanish. The remaining variables are all positive, so we count positive solutions.`,
      steps: [
        {
          title: "Choose the zero variables",
          text: r`Which $k$ of $x_1,\ldots,x_r$ are $0$? There are $\binom rk$ possible sets. Different sets give different solutions, so we can count each set separately and add. Because we count each set the same way, the total is $\binom rk$ times the count for one set.`,
          check: chk(r`How many ways are there to choose which $k$ variables are zero?`, r`$\binom rk$`, r`$k!$`, r`$r^k$`, r`It is a choice of $k$ positions out of $r$.`, "Counting by Cases"),
        },
        {
          title: "The others are positive",
          text: r`Fix one such set. The other $r-k$ variables are not zero, and since they are nonnegative whole numbers, each is at least $1$. They must add up to $n$, since the zeros add nothing.`,
          check: chk(r`For the $r-k$ non-zero variables, what do we know?`, r`Each is at least $1$ and they add to $n$`, r`Each is at least $0$ and they add to $r-k$`, r`Each equals $1$`, r`Non-zero whole numbers are at least $1$, and the sum is still $n$.`, "Bijection"),
        },
        {
          title: "Count positive solutions",
          text: r`Put $n$ stars in a row. A positive solution with $m=r-k$ parts is made by cutting the row into $m$ non-empty pieces, which means choosing $m-1$ of the $n-1$ gaps between stars. So there are $\binom{n-1}{m-1}=\binom{n-1}{r-k-1}$ positive solutions.`,
          check: chk(r`How many gaps between $n$ stars can hold a bar?`, r`$n-1$`, r`$n$`, r`$n+1$`, r`Between $n$ stars in a row there are $n-1$ gaps; the ends would make an empty piece.`, "Stars and Bars"),
        },
        {
          title: "Multiply and rewrite",
          text: r`Total: $\binom rk\binom{n-1}{r-k-1}$. Since $\binom{n-1}{a}=\binom{n-1}{(n-1)-a}$ and $(n-1)-(r-k-1)=n-r+k$, this is $\binom rk\binom{n-1}{n-r+k}$.`,
          check: chk(r`What is $(n-1)-(r-k-1)$?`, r`$n-r+k$`, r`$n-r-k$`, r`$n+r-k$`, r`$n-1-r+k+1=n-r+k$.`, "Choosing Is Leaving Out"),
        },
      ],
      conclusion: r`There are exactly $\binom rk\binom{n-1}{n-r+k}$ such solutions. $\blacksquare$`,
      example: {
        text: r`$r=3$, $n=3$, $k=1$. Zero at position 1: positive pairs $(x_2,x_3)$ with sum $3$: $(1,2),(2,1)$. Same for positions 2 and 3. $3\cdot2=6$. The formula: $\binom31\binom{2}{1}=6$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a nonnegative integer?`, a: r`A whole number that is $0$ or more.` },
        { q: r`Why is the count a product?`, a: r`Two independent decisions: which variables are zero, then the values of the others.` },
        { q: r`How is this different from T22 or T23?`, a: r`Here the zero pattern is fixed first, so the other variables are strictly positive.` },
        { q: r`What if $n<r-k$?`, a: r`Then $r-k$ positive numbers cannot add up to $n$, and the formula gives $0$.` },
      ],
      keywords: [
        "nonnegative integer solutions|x_1+...+x_r=n", "exactly k zeros|exactly k are zero", "choose which are zero|r choose k|zero positions", "the rest are positive|at least 1|non-zero variables", "r-k positive variables|r minus k",
        "positive solutions|strictly positive|compositions", "stars and bars|stars bars", "n stars|stars in a row", "n-1 gaps|gaps between stars|spaces", "choose gaps|r-k-1 bars|bars in the gaps",
        "C(n-1, r-k-1)|n-1 choose r-k-1", "multiply|counting principle|two steps", "symmetry|n-1 choose n-r+k|leave out", "cases by zero set|each zero set separately", "do not overlap|different zero sets",
        "bijection|one to one", "n at least r-k|enough to be positive", "formula equals zero|impossible cases", "exactly versus at least|exactly",
      ],
      retryPrompt: r`Explain how you count solutions with exactly $k$ zeros, including why each non-zero variable is at least $1$ and where $n-1$ comes from.`,
      sourcePageText: r`21. Show that there are exactly C(r,k) C(n-1, n-r+k) solutions of x_1 + x_2 + ... + x_r = n for which exactly k of the x_i are equal to 0.`,
    },
  }),

  problem({
    id: "counting-partial-derivatives",
    name: "Counting Partial Derivatives",
    group: "stars",
    symbol: r`\binom{n+r-1}{r}`,
    prerequisites: ["Stars and Bars", "Partial Derivative", "Bijection", "Identical and Distinct Objects"],
    ross: { n: 22, section: "C", page: 4 },
    title: "How many partial derivatives of order r?",
    statement: r`Consider a function $f(x_1,\ldots,x_n)$ of $n$ variables. How many different partial derivatives of order $r$ does $f$ possess?`,
    meaning: r`The order in which you differentiate does not change the result, so a derivative is decided only by how many times you used each variable.`,
    linkedFormal: r`For a smooth $f$, mixed [[Partial Derivative|partial derivatives]] do not depend on the order of differentiation. So an order-$r$ derivative is determined by the exponents $(a_1,\ldots,a_n)$, $a_i\ge0$, $a_1+\cdots+a_n=r$ ([[Bijection|one-to-one]]). By [[Stars and Bars|stars and bars]] there are $\binom{n+r-1}{r}=\binom{n+r-1}{n-1}$ of them.`,
    example: r`$n=2$ variables $x,y$ and $r=2$: $f_{xx},f_{xy},f_{yy}$, so $3=\binom{3}{2}$. ($f_{xy}=f_{yx}$.)`,
    pretest: {
      prompt: r`For $f(x,y)$ the derivatives $f_{xy}$ and $f_{yx}$ are equal. How many different second-order partial derivatives does $f(x,y)$ have?`,
      options: [r`$3$`, r`$4$`, r`$2$`],
      correct: 0,
      explanation: r`$f_{xx}$, $f_{xy}=f_{yx}$, $f_{yy}$. Four would count $f_{xy}$ and $f_{yx}$ separately.`,
    },
    check: chk(
      r`Why can we describe a mixed partial derivative by how many times each variable is used?`,
      r`The result does not depend on the order of differentiation`,
      r`Because each variable can be used only once`,
      r`Because derivatives of different variables are always zero`,
      r`For nice functions $f_{xy}=f_{yx}$, so only the count of each variable matters.`,
    ),
    faq: [
      { q: r`What is a partial derivative?`, a: r`The derivative with respect to one variable while treating the others as constants. See [[Partial Derivative|Partial Derivative]].` },
      { q: r`What is "order $r$"?`, a: r`You differentiate $r$ times in total, each time by any of the variables.` },
      { q: r`Is it true that order does not matter?`, a: r`Yes for functions whose derivatives are continuous. The exercise assumes this.` },
      { q: r`Why not $n^r$?`, a: r`$n^r$ counts sequences of variables. Different sequences with the same counts, such as $xy$ and $yx$, give the same derivative.` },
    ],
    proof: {
      idea: r`A derivative is decided by how many times each variable is used. Counting these usage lists is a stars-and-bars count.`,
      steps: [
        {
          title: "What the order-r derivatives are",
          text: r`To take an order-$r$ derivative we choose a sequence of $r$ variables to differentiate by, one after the other. There are $n^r$ sequences, but different sequences can give the same derivative.`,
          check: chk(r`How many sequences of $r$ variables (out of $n$) are there?`, r`$n^r$`, r`$\binom nr$`, r`$rn$`, r`Each of the $r$ steps has $n$ choices.`, "Partial Derivative"),
        },
        {
          title: "Order does not matter",
          text: r`For a function with continuous derivatives, mixed partial derivatives are equal no matter in which order they are taken. So two sequences give the same derivative exactly when each variable appears the same number of times in both.`,
          check: chk(r`When do two sequences give the same derivative?`, r`When every variable appears the same number of times in both`, r`When the sequences are identical`, r`Never`, r`Reordering the differentiations does not change the result.`, "Partial Derivative"),
        },
        {
          title: "Count usage lists",
          text: r`A derivative is therefore determined by $(a_1,\ldots,a_n)$, where $a_i\ge0$ is the number of times $x_i$ is used, and $a_1+\cdots+a_n=r$. Every such list occurs, and different lists give different derivatives. So the number of derivatives equals the number of such lists.`,
          check: chk(r`What condition do the usage counts $a_1,\ldots,a_n$ satisfy?`, r`Each $a_i\ge0$ and $a_1+\cdots+a_n=r$`, r`Each $a_i\ge1$ and the sum is $n$`, r`The $a_i$ are all equal`, r`There are $r$ differentiations in total, shared among the $n$ variables.`, "Bijection"),
        },
        {
          title: "Stars and bars",
          text: r`This is the number of ways to put $r$ identical balls into $n$ urns: $\binom{n+r-1}{n-1}=\binom{n+r-1}{r}$.`,
          check: chk(r`How many nonnegative solutions does $a_1+\cdots+a_n=r$ have?`, r`$\binom{n+r-1}{r}$`, r`$\binom{n}{r}$`, r`$n^r$`, r`Arrange $r$ stars and $n-1$ bars, which is $n+r-1$ symbols.`, "Stars and Bars"),
        },
      ],
      conclusion: r`There are $\binom{n+r-1}{r}$ different partial derivatives of order $r$. $\blacksquare$`,
      example: {
        text: r`$n=3$ variables $x,y,z$ and $r=2$: $f_{xx},f_{yy},f_{zz},f_{xy},f_{xz},f_{yz}$, which is $6=\binom{4}{2}$.`,
      },
    },
    question: {
      faq: [
        { q: r`What do "different" derivatives mean?`, a: r`Derivatives that are different functions in general, so $f_{xy}$ and $f_{yx}$ count as one.` },
        { q: r`How is this like balls in urns?`, a: r`The $r$ differentiations are identical balls and the $n$ variables are urns.` },
        { q: r`Why is the result symmetric in $n-1$ and $r$?`, a: r`$\binom{n+r-1}{r}=\binom{n+r-1}{n-1}$ because choosing is leaving out.` },
        { q: r`Do I need calculus for this?`, a: r`Only the fact that order of differentiation does not matter. The rest is counting.` },
      ],
      keywords: [
        "partial derivative|derivative with respect to x_i", "order r|r times|r-th order", "n variables|x_1 to x_n", "mixed partials equal|f_xy=f_yx|order does not matter", "continuous derivatives|smooth function|Clairaut",
        "sequence of variables|n^r|ordered choices", "same derivative|equivalent sequences|reordering", "count each variable|how many times|usage count", "a_i|exponents|a_1+...+a_n=r", "nonnegative|zero allowed|a_i at least 0",
        "bijection|one to one|determined by", "identical balls|r balls", "urns|n urns|n boxes", "stars and bars|stars bars", "n-1 bars|dividers",
        "C(n+r-1, r)|n+r-1 choose r", "multiset|combination with repetition|repeats allowed", "example n=2 r=2|f_xx f_xy f_yy|three", "symmetry|n+r-1 choose n-1",
      ],
      retryPrompt: r`Explain why a partial derivative of order $r$ corresponds to a list of counts, and how this gives $\binom{n+r-1}{r}$.`,
      sourcePageText: r`22. Consider a function f(x_1, ..., x_n) of n variables. How many different partial derivatives of order r does f possess?`,
    },
  }),

  problem({
    id: "sum-at-most-k",
    name: "Sum at Most k",
    group: "stars",
    symbol: r`\sum x_i\le k`,
    prerequisites: ["Stars and Bars", "Bijection", "Identical and Distinct Objects"],
    ross: { n: 23, section: "C", page: 4 },
    title: "Nonnegative vectors with x1 + … + xn ≤ k",
    statement: r`Determine the number of vectors $(x_1,\ldots,x_n)$ such that each $x_i$ is a nonnegative integer and $$\sum_{i=1}^{n}x_i\le k.$$`,
    meaning: r`Count how many ways to share out at most $k$ items among $n$ people. Add one extra "unused" person and the sum becomes exactly $k$.`,
    linkedFormal: r`The answer is $\binom{n+k}{n}$. Add a slack variable $x_{n+1}=k-\sum x_i\ge0$; this gives a [[Bijection|one-to-one]] match with nonnegative solutions of $x_1+\cdots+x_{n+1}=k$, which [[Stars and Bars|stars and bars]] counts.`,
    example: r`$n=2$, $k=2$: $(0,0),(0,1),(0,2),(1,0),(1,1),(2,0)$ is $6=\binom42$.`,
    pretest: {
      prompt: r`How many pairs $(x_1,x_2)$ of nonnegative whole numbers have $x_1+x_2\le 2$?`,
      options: [r`$6$`, r`$3$`, r`$9$`],
      correct: 0,
      explanation: r`Sum $0$: 1 pair; sum $1$: 2 pairs; sum $2$: 3 pairs. Total $6$.`,
    },
    check: chk(
      r`If $x_1+\cdots+x_n\le k$, what is the "slack" $s=k-(x_1+\cdots+x_n)$?`,
      r`A nonnegative whole number, the unused amount`,
      r`Always $0$`,
      r`A negative number`,
      r`Because the sum is at most $k$, what is left over is $0$ or more.`,
    ),
    faq: [
      { q: r`What does $\le k$ change compared with $=k$?`, a: r`The sum may fall short of $k$. We account for the shortfall with an extra variable.` },
      { q: r`What is a slack variable?`, a: r`An extra variable that holds the unused part, so that an inequality becomes an equation.` },
      { q: r`Is there another way to count?`, a: r`Yes: add the stars-and-bars counts for each total $0,1,\ldots,k$; the hockey-stick identity gives the same answer.` },
      { q: r`Why $\binom{n+k}{n}$ and not $\binom{n+k}{k}$?`, a: r`They are equal, by choosing is leaving out.` },
    ],
    proof: {
      idea: r`Add one extra variable that records how much of $k$ is unused. Then the sum is exactly $k$ and we can use stars and bars.`,
      steps: [
        {
          title: "Introduce the slack",
          text: r`Given $(x_1,\ldots,x_n)$ with sum at most $k$, define $x_{n+1}=k-(x_1+\cdots+x_n)$. Since the sum is at most $k$, $x_{n+1}\ge0$, and the new vector has $x_1+\cdots+x_{n+1}=k$.`,
          check: chk(r`What is the sum $x_1+\cdots+x_{n+1}$?`, r`$k$`, r`$k+1$`, r`$n+1$`, r`$x_{n+1}$ is defined to make the total exactly $k$.`, "Bijection"),
        },
        {
          title: "Go back",
          text: r`Conversely, from any nonnegative $(x_1,\ldots,x_{n+1})$ with sum $k$, drop the last entry. The remaining $n$ entries are nonnegative with sum $k-x_{n+1}\le k$.`,
          check: chk(r`If $x_1+\cdots+x_{n+1}=k$ and $x_{n+1}\ge0$, what is true of $x_1+\cdots+x_n$?`, r`It is at most $k$`, r`It equals $k$`, r`It is more than $k$`, r`We removed a nonnegative amount from $k$.`, "Bijection"),
        },
        {
          title: "The two sets match",
          text: r`Adding the slack and dropping it are inverse to each other, so the vectors of length $n$ with sum at most $k$ match one-to-one with the vectors of length $n+1$ with sum exactly $k$.`,
          check: chk(r`What does a one-to-one match between two sets tell us?`, r`They have the same number of elements`, r`They have the same entries`, r`One is bigger`, r`Pairing elements without leftovers means equal size.`, "Bijection"),
        },
        {
          title: "Stars and bars",
          text: r`Nonnegative solutions of $x_1+\cdots+x_{n+1}=k$ are $k$ identical balls into $n+1$ urns: $\binom{k+(n+1)-1}{(n+1)-1}=\binom{n+k}{n}$.`,
          check: chk(r`How many nonnegative solutions does $x_1+\cdots+x_{n+1}=k$ have?`, r`$\binom{n+k}{n}$`, r`$\binom{n+k}{k+1}$`, r`$(n+1)^k$`, r`$k$ stars and $n$ bars give $n+k$ symbols, and the bars take $n$ positions.`, "Stars and Bars"),
        },
      ],
      conclusion: r`There are $\binom{n+k}{n}$ vectors. $\blacksquare$`,
      example: {
        text: r`$n=2$, $k=2$. Add slack: $(0,0)\to(0,0,2)$, $(0,1)\to(0,1,1)$, $(0,2)\to(0,2,0)$, $(1,0)\to(1,0,1)$, $(1,1)\to(1,1,0)$, $(2,0)\to(2,0,0)$. These are all 6 solutions of $a+b+c=2$, and $\binom42=6$.`,
      },
    },
    question: {
      faq: [
        { q: r`Is $k$ fixed?`, a: r`Yes, $k$ is a given whole number. We count vectors whose entries add to at most $k$.` },
        { q: r`What is a vector here?`, a: r`A list of $n$ nonnegative whole numbers.` },
        { q: r`Why add a variable?`, a: r`Equalities are easier to count with stars and bars than inequalities.` },
        { q: r`Is zero allowed?`, a: r`Yes, entries can be $0$.` },
      ],
      keywords: [
        "nonnegative integers|whole numbers at least 0", "vector|list of n numbers|tuple", "sum at most k|less than or equal to k|inequality", "slack variable|extra variable|x_{n+1}", "unused amount|leftover|k minus the sum",
        "turn inequality into equality|equation", "x_1+...+x_{n+1}=k|sum exactly k", "bijection|one to one|match", "add the slack|drop the slack|inverse", "same size|equal counts",
        "stars and bars|stars bars", "k stars|identical balls", "n bars|n dividers|n+1 urns", "n+k symbols|n+k positions", "C(n+k, n)|n+k choose n",
        "symmetry|n+k choose k", "hockey stick|sum of counts for each total", "n=2 k=2 example|six vectors", "zero allowed|entries can be zero",
      ],
      retryPrompt: r`Explain the slack-variable trick, why it gives a one-to-one match, and why the answer is $\binom{n+k}{n}$.`,
      sourcePageText: r`23. Determine the number of vectors (x_1, ..., x_n) such that each x_i is a nonnegative integer and sum_{i=1}^{n} x_i <= k.`,
    },
  }),
];
