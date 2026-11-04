import { problem, chk } from "./dsl.js";
const r = String.raw;

// Part B: recursions and multinomials. Ross, Chapter 1, Theoretical Exercises 15, 16, 18, 19.
export default [
  problem({
    id: "weakly-increasing-vectors",
    name: "Weakly Increasing Vectors",
    group: "recursion",
    symbol: r`H_k(n)`,
    prerequisites: ["Recurrence Relation", "Counting by Cases", "Summation Notation", "Ordered List"],
    ross: { n: 15, section: "B", page: 3 },
    title: "Counting x1 ≤ x2 ≤ … ≤ xk",
    statement: r`Let $H_k(n)$ be the number of vectors $x_1,\ldots,x_k$ of whole numbers with $1\le x_i\le n$ and $x_1\le x_2\le\cdots\le x_k$. (a) Without computing, argue that $H_1(n)=n$ and $$H_k(n)=\sum_{j=1}^{n}H_{k-1}(j).$$ Hint: how many vectors have $x_k=j$? (b) Use this to compute $H_3(5)$.`,
    meaning: r`Count lists whose entries never go down. Fix the last entry $j$; what is left is the same problem with a smaller list and a smaller ceiling $j$.`,
    linkedFormal: r`$H_1(n)=n$ and $H_k(n)=\sum_{j=1}^{n}H_{k-1}(j)$ for $k\ge2$. This is a [[Recurrence Relation|recurrence]]: split the vectors by the value $j$ of the last entry ([[Counting by Cases|cases]]), and the first $k-1$ entries form a smaller [[Ordered List|list]] of the same kind, bounded by $j$.`,
    example: r`$H_2(3)$: the pairs $x_1\le x_2$ from $\{1,2,3\}$ are $11,12,13,22,23,33$, so $6=H_1(1)+H_1(2)+H_1(3)=1+2+3$.`,
    pretest: {
      prompt: r`How many pairs $(x_1,x_2)$ with $1\le x_1\le x_2\le 3$ are there?`,
      options: [r`$6$`, r`$9$`, r`$3$`],
      correct: 0,
      explanation: r`List them: $11,12,13,22,23,33$. Nine would allow $x_1>x_2$ too.`,
    },
    check: chk(
      r`In a weakly increasing vector with $x_k=j$, what must be true about $x_1,\ldots,x_{k-1}$?`,
      r`They are weakly increasing and all between $1$ and $j$`,
      r`They are all equal to $j$`,
      r`They are strictly increasing and above $j$`,
      r`Since $x_{k-1}\le x_k=j$ and the list never goes down, everything before is at most $j$.`,
    ),
    faq: [
      { q: r`What does "weakly increasing" mean?`, a: r`Each entry is at least the one before it. Equal neighbours such as $2,2,5$ are allowed.` },
      { q: r`Why is $H_1(n)=n$?`, a: r`A vector with one entry is just a number from $1$ to $n$: $n$ choices.` },
      { q: r`What is $H_{k-1}(j)$ doing inside the sum?`, a: r`Once the last entry is $j$, the earlier $k-1$ entries are a weakly increasing vector with entries from $1$ to $j$. That is exactly what $H_{k-1}(j)$ counts.` },
      { q: r`Do I need a formula for $H_k(n)$?`, a: r`No. The task is the recurrence, and then to run it numerically for $H_3(5)$.` },
    ],
    proof: {
      idea: r`Sort the vectors by the value $j$ of their last entry. For each $j$ the rest of the vector is a smaller copy of the same counting problem.`,
      steps: [
        {
          title: "The case k = 1",
          text: r`A vector with one entry is one number from $\{1,\ldots,n\}$, and there is no ordering condition. So $H_1(n)=n$.`,
          check: chk(r`How many one-entry vectors $(x_1)$ with $1\le x_1\le n$ are there?`, r`$n$`, r`$1$`, r`$n^2$`, r`Each of the $n$ numbers gives one vector.`, "Ordered List"),
        },
        {
          title: "Sort by the last entry",
          text: r`For $k\ge2$, the last entry $x_k$ is one of $1,2,\ldots,n$. Call its value $j$. Every vector has exactly one last entry, so the groups "last entry $=j$" for $j=1,\ldots,n$ do not overlap and together contain every vector.`,
          check: chk(r`Why can we add the group sizes for $j=1,\ldots,n$?`, r`Each vector has exactly one last entry, so it lies in exactly one group`, r`All groups have the same size`, r`$j$ always equals $k$`, r`Groups that never overlap and cover everything add up to the total.`, "Counting by Cases"),
        },
        {
          title: "What is left once x_k = j",
          text: r`If $x_k=j$, the other entries must satisfy $x_1\le\cdots\le x_{k-1}\le j$. Conversely any weakly increasing vector $(x_1,\ldots,x_{k-1})$ with entries in $\{1,\ldots,j\}$ can be followed by $j$ and still never goes down. So the vectors with last entry $j$ match one-to-one with such shorter vectors.`,
          check: chk(r`How many vectors of length $k$ have last entry $j$?`, r`$H_{k-1}(j)$`, r`$H_{k-1}(n)$`, r`$H_k(j)$`, r`The first $k-1$ entries are weakly increasing with a ceiling of $j$.`, "Recurrence Relation"),
        },
        {
          title: "Add up",
          text: r`Adding the group sizes over $j=1,\ldots,n$ gives $H_k(n)=\sum_{j=1}^{n}H_{k-1}(j)$.`,
          check: chk(r`Which formula do we get for $H_k(n)$?`, r`$\sum_{j=1}^{n}H_{k-1}(j)$`, r`$n\cdot H_{k-1}(n)$`, r`$\sum_{j=1}^{n}H_{k}(j)$`, r`Group sizes $H_{k-1}(j)$ added over the possible last entries $j$.`, "Summation Notation"),
        },
        {
          title: "Part (b): run the recurrence",
          text: r`First $H_2(j)=\sum_{i=1}^{j}H_1(i)=1+2+\cdots+j$, which gives $H_2(1),\ldots,H_2(5)=1,3,6,10,15$. Then $H_3(5)=\sum_{j=1}^{5}H_2(j)=1+3+6+10+15=35$.`,
          check: chk(r`What is $H_2(4)$?`, r`$10$`, r`$16$`, r`$8$`, r`$H_2(4)=H_1(1)+H_1(2)+H_1(3)+H_1(4)=1+2+3+4=10$.`, "Recurrence Relation"),
        },
      ],
      conclusion: r`So $H_1(n)=n$, $H_k(n)=\sum_{j=1}^nH_{k-1}(j)$, and $H_3(5)=35$. $\blacksquare$`,
      example: {
        text: r`$k=3$, $n=3$. Vectors with last entry $1$: $111$ (1 vector $=H_2(1)$). Last entry $2$: $112,122,222$ (3 vectors $=H_2(2)$). Last entry $3$: $113,123,133,223,233,333$ (6 vectors $=H_2(3)$). Total $1+3+6=10=H_3(3)$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a vector here?`, a: r`Just an ordered list of $k$ numbers, like $(2,2,5)$. See [[Ordered List|Ordered List]].` },
        { q: r`Why must I not compute?`, a: r`Part (a) asks for an argument. Reason about the structure of the vectors; only part (b) needs numbers.` },
        { q: r`Why does the hint focus on $x_k$?`, a: r`The largest entry sits last, and fixing it gives a smaller problem of the same shape.` },
        { q: r`What is $H_3(5)$ asking?`, a: r`Weakly increasing triples with entries from $1$ to $5$.` },
      ],
      keywords: [
        "weakly increasing|non-decreasing|never decreasing", "vector|ordered list|tuple", "H_k(n)|H sub k of n", "entries from 1 to n|between 1 and n", "recurrence|recursion|recursive",
        "base case|H_1(n)=n|k equals one", "last entry|x_k|largest entry", "fix the last entry|condition on x_k|x_k equals j", "cases|case split|group by last entry", "do not overlap|disjoint|each vector once",
        "cover every vector|exhaustive", "smaller problem|k minus 1 entries|shorter vector", "ceiling j|entries at most j|from 1 to j", "H_{k-1}(j)|H sub k minus 1 of j", "sum over j|summation|add over j",
        "one to one|bijection|match", "append j|add j at the end", "H_2(j)|1+2+...+j|triangular numbers", "1, 3, 6, 10, 15|triangular", "H_3(5)=35|thirty five|35", "run the recurrence|compute numerically|build the table",
      ],
      retryPrompt: r`Explain why $H_k(n)=\sum_{j}H_{k-1}(j)$ in your own words, then show how you get $H_3(5)=35$.`,
      sourcePageText: r`15. Let H_k(n) be the number of vectors x_1, ..., x_k for which each x_i is a positive integer satisfying 1 <= x_i <= n and x_1 <= x_2 <= ... <= x_k. a. Without any computations, argue that H_1(n) = n and H_k(n) = sum_{j=1}^{n} H_{k-1}(j). Hint: How many vectors are there in which x_k = j? b. Use the preceding recursion to compute H_3(5).`,
    },
  }),

  problem({
    id: "tournament-with-ties",
    name: "Tournament with Ties",
    group: "recursion",
    symbol: r`N(n)`,
    prerequisites: ["Recurrence Relation", "Counting by Cases", "Choosing Is Leaving Out", "Combination", "Summation Notation"],
    ross: { n: 16, section: "B", page: 3 },
    title: "Rankings of n contestants when ties are allowed",
    statement: r`In a tournament of $n$ contestants, ties are possible. Let $N(n)$ be the number of possible outcomes. For instance $N(2)=3$ (either wins, or they tie). (a) List all the outcomes for $n=3$. (b) With $N(0)\equiv1$, show that $$N(n)=\sum_{i=1}^{n}\binom ni N(n-i).$$ Hint: how many outcomes have $i$ contestants tied for last place? (c) Show that $$N(n)=\sum_{j=0}^{n-1}\binom nj N(j).$$ (d) Find $N(3)$ and $N(4)$.`,
    meaning: r`An outcome is a ranking where several people may share a place. Pick the group tied for the top (or last) place; the rest rank themselves in the same kind of way.`,
    linkedFormal: r`$N(0)=1$ and $N(n)=\sum_{i=1}^{n}\binom ni N(n-i)=\sum_{j=0}^{n-1}\binom nj N(j)$. Sort the outcomes by the size $i$ of the group tied for last place ([[Counting by Cases|cases]]), choose that group ([[Combination|combination]]) and rank the others ([[Recurrence Relation|recurrence]]). The second form comes from [[Choosing Is Leaving Out|$\binom ni=\binom n{n-i}$]] with $j=n-i$.`,
    example: r`$N(3)=\binom31N(2)+\binom32N(1)+\binom33N(0)=3\cdot3+3\cdot1+1=13$.`,
    pretest: {
      prompt: r`Two contestants $A,B$. How many different outcomes are possible if ties are allowed?`,
      options: [r`$3$`, r`$2$`, r`$4$`],
      correct: 0,
      explanation: r`$A$ wins, $B$ wins, or they tie. Two would ignore ties.`,
    },
    check: chk(
      r`How many ways can $i$ contestants be chosen from $n$ to share last place?`,
      r`$\binom ni$`,
      r`$i!$`,
      r`$n^i$`,
      r`Who is in the last-place group is a choice of $i$ people from $n$, order irrelevant.`,
    ),
    faq: [
      { q: r`What exactly counts as one outcome?`, a: r`A full ranking in which tied contestants share a place. "A and B tie for first, C is third" is one outcome.` },
      { q: r`Why is $N(0)=1$?`, a: r`With nobody left to rank there is exactly one way: do nothing. It makes the formula work when all $n$ are tied.` },
      { q: r`What is the difference between (b) and (c)?`, a: r`Same numbers written differently. In (b) $i$ is the size of the tied group; in (c) $j=n-i$ is the number of people ranked above it.` },
      { q: r`Does the order of the tied group matter?`, a: r`No. Tied people are not ordered among themselves, so only who they are matters.` },
    ],
    proof: {
      idea: r`Look at the group of contestants who share last place. Choose who is in it, then rank everyone else with the same rule.`,
      steps: [
        {
          title: "Part (a): n = 3",
          text: r`Name the contestants $A,B,C$. All three tied: 1 outcome. Exactly two tied for first place, third place alone: 3 outcomes. One alone first, other two tied: 3 outcomes. No ties at all: $3!=6$ outcomes. Total $1+3+3+6=13$.`,
          check: chk(r`How many outcomes for $n=3$ have no ties at all?`, r`$6$`, r`$3$`, r`$1$`, r`Strict rankings of 3 people are $3!=6$.`, "Ordered List"),
        },
        {
          title: "Sort by the last-place group",
          text: r`In any outcome some group of $i$ contestants shares last place, where $1\le i\le n$. Different values of $i$ give different groups of outcomes, and each outcome has exactly one last-place group. So the cases do not overlap and cover everything.`,
          check: chk(r`Why is every outcome in exactly one case $i=1,\ldots,n$?`, r`It has exactly one last-place group, of some size between $1$ and $n$`, r`Because $i$ is always $n$`, r`Because ties are not allowed`, r`Each ranking has one last place, shared by $i\ge1$ contestants.`, "Counting by Cases"),
        },
        {
          title: "Count one case",
          text: r`Fix $i$. Choose which $i$ contestants tie for last in $\binom ni$ ways. The other $n-i$ contestants finish above them, and they can be ranked among themselves in $N(n-i)$ ways. Choosing and ranking are two steps in a row, so this case has $\binom ni N(n-i)$ outcomes. For $i=n$ nobody is left, which is why $N(0)=1$.`,
          check: chk(r`How many outcomes have exactly $i$ contestants tied for last?`, r`$\binom ni N(n-i)$`, r`$\binom ni N(i)$`, r`$N(n)-N(i)$`, r`Choose the last group, then rank the $n-i$ others in $N(n-i)$ ways.`, "Combination"),
        },
        {
          title: "Part (b): add the cases",
          text: r`Adding over $i=1,\ldots,n$ gives $N(n)=\sum_{i=1}^{n}\binom ni N(n-i)$.`,
          check: chk(r`Which sum is $N(n)$?`, r`$\sum_{i=1}^{n}\binom ni N(n-i)$`, r`$\sum_{i=1}^{n}N(i)$`, r`$\sum_{i=1}^{n}\binom ni N(i)$`, r`The case sizes of the last step, added over $i$.`, "Summation Notation"),
        },
        {
          title: "Part (c): relabel the sum",
          text: r`Put $j=n-i$. When $i$ runs from $1$ to $n$, $j$ runs from $n-1$ down to $0$. Since $\binom ni=\binom n{n-i}=\binom nj$ (choosing a group is the same as choosing who to leave out), $N(n)=\sum_{j=0}^{n-1}\binom nj N(j)$.`,
          check: chk(r`Why does $\binom ni$ turn into $\binom nj$ when $j=n-i$?`, r`Because $\binom ni=\binom n{n-i}$`, r`Because $i=j$`, r`Because $\binom ni$ is always $1$`, r`Choosing $i$ to take is the same as choosing the $n-i$ to leave out.`, "Choosing Is Leaving Out"),
        },
        {
          title: "Part (d): run the recurrence",
          text: r`$N(0)=1$. $N(1)=\binom10N(0)=1$. $N(2)=\binom20N(0)+\binom21N(1)=1+2=3$. $N(3)=\binom30N(0)+\binom31N(1)+\binom32N(2)=1+3+9=13$ (agrees with part (a)). $N(4)=1+\binom41\cdot1+\binom42\cdot3+\binom43\cdot13=1+4+18+52=75$.`,
          check: chk(r`What is $N(4)$?`, r`$75$`, r`$24$`, r`$52$`, r`$1+4\cdot1+6\cdot3+4\cdot13=75$.`, "Recurrence Relation"),
        },
      ],
      conclusion: r`We showed (b) and (c), and $N(3)=13$, $N(4)=75$. $\blacksquare$`,
      example: {
        text: r`$n=3$ sorted by last-place size. $i=1$: choose the loser (3 ways) and rank the other two (3 ways: $A$ first, $B$ first, tie): 9 outcomes. $i=2$: choose the two tied for last (3 ways), the remaining one is first: 3 outcomes. $i=3$: all tie: 1 outcome. $9+3+1=13$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does a tie mean for the count?`, a: r`Tied contestants share a position and are not ordered among themselves.` },
        { q: r`Why last place and not first?`, a: r`The hint uses last place, but first place works the same way. Either one splits the outcomes into non-overlapping cases.` },
        { q: r`Why does the second formula start at $j=0$?`, a: r`$j=n-i$ and $i$ goes up to $n$, so $j$ reaches $0$, which is the all-tied outcome with $N(0)=1$.` },
        { q: r`Is part (a) a listing of 13 things?`, a: r`Yes. Writing them by the shape of the ties (all tied, 2+1, 1+2, none) is the neat way.` },
        { q: r`What is a recursion for here?`, a: r`To get $N(4)$ we reuse $N(3),N(2),N(1),N(0)$ that we already found. See [[Recurrence Relation|Recurrence Relation]].` },
      ],
      keywords: [
        "tournament|contest|competition", "ties allowed|tie|shared place", "outcome|ranking|final standing", "N(n)|number of outcomes", "N(0)=1|empty tournament|nobody left",
        "last place|tied for last|bottom group", "group of size i|i contestants|i tied", "choose who is tied|binomial coefficient|n choose i", "rank the rest|remaining n minus i|others", "N(n-i)|N of n minus i",
        "cases by i|case split|sort by i", "do not overlap|each outcome once|one last place group", "multiply|two steps|counting principle", "sum over i|summation|add the cases", "recurrence|recursion",
        "relabel|substitute j=n-i|change of index", "symmetry|n choose i equals n choose n-i|leave out", "N(1)=1", "N(2)=3|three outcomes", "N(3)=13|thirteen", "N(4)=75|seventy five",
        "no ties|3! strict orders|six", "all tied|everyone ties",
      ],
      retryPrompt: r`Explain how the last-place group gives the recurrence, why the second form follows, and how you get $N(3)=13$ and $N(4)=75$.`,
      sourcePageText: r`16. In a tournament of n contestants, ties are possible, and we denote by N(n) the number of possible outcomes. a. List all the possible outcomes when n = 3. b. With N(0) = 1, show that N(n) = sum_{i=1}^{n} C(n,i) N(n-i). Hint: How many outcomes are there in which i players tie for last place? c. Show that the formula of part (b) is equivalent to N(n) = sum_{i=0}^{n-1} C(n,i) N(i). d. Use the recursion to find N(3) and N(4).`,
    },
  }),

  problem({
    id: "multinomial-pascal",
    name: "Multinomial Pascal Identity",
    group: "multinomial",
    symbol: r`\binom{n}{n_1,\ldots,n_r}`,
    prerequisites: ["Multinomial Coefficient", "Pascal's Identity", "Counting by Cases"],
    ross: { n: 18, section: "B", page: 4 },
    title: "A Pascal's identity for multinomial coefficients",
    statement: r`Prove that $$\binom{n}{n_1,n_2,\ldots,n_r}=\binom{n-1}{n_1-1,n_2,\ldots,n_r}+\binom{n-1}{n_1,n_2-1,\ldots,n_r}+\cdots+\binom{n-1}{n_1,n_2,\ldots,n_r-1},$$ where $n_1+\cdots+n_r=n$. Hint: use an argument like the one that proved Equation (4.1).`,
    meaning: r`Splitting $n$ people into labelled teams: look at one special person and ask which team they joined. What is left is a smaller split with one fewer place in that team.`,
    linkedFormal: r`For $n_1+\cdots+n_r=n$: $\displaystyle\binom{n}{n_1,\ldots,n_r}=\sum_{i=1}^{r}\binom{n-1}{n_1,\ldots,n_i-1,\ldots,n_r}$, where a term is $0$ if $n_i=0$. It is the [[Multinomial Coefficient|multinomial]] version of [[Pascal's Identity|Pascal's identity]], and is proved by [[Counting by Cases|cases]] on the team of one special person.`,
    example: r`$n=3$, sizes $(1,1,1)$: $\binom{3}{1,1,1}=6$ and $\binom{2}{0,1,1}+\binom{2}{1,0,1}+\binom{2}{1,1,0}=2+2+2=6$.`,
    pretest: {
      prompt: r`Three people $A,B,C$ go to three different teams with one place each (team 1, 2, 3). In how many ways can this be done?`,
      options: [r`$6$`, r`$3$`, r`$9$`],
      correct: 0,
      explanation: r`$3!=6$: choose the team-1 person (3), then team-2 (2), then team-3 (1).`,
    },
    check: chk(
      r`In how many ways can $n$ people be split into labelled teams of sizes $n_1,\ldots,n_r$?`,
      r`$\dfrac{n!}{n_1!\,n_2!\cdots n_r!}$`,
      r`$\dfrac{n!}{n_1+n_2+\cdots+n_r}$`,
      r`$n^r$`,
      r`This is the multinomial coefficient; dividing by each $n_i!$ removes the order inside each team.`,
    ),
    faq: [
      { q: r`What is the multinomial coefficient?`, a: r`The number of ways to split $n$ distinct people into $r$ labelled teams of given sizes $n_1,\ldots,n_r$. See [[Multinomial Coefficient|Multinomial Coefficient]].` },
      { q: r`What is Equation (4.1)?`, a: r`Pascal's identity $\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}$, proved by asking whether a special person is chosen.` },
      { q: r`What if some $n_i=0$?`, a: r`Team $i$ has no places, so the special person cannot be on it and that term is $0$.` },
      { q: r`Why $n-1$ on the right?`, a: r`The special person is placed, so $n-1$ people are left to place.` },
    ],
    proof: {
      idea: r`Count the ways to form labelled teams of sizes $n_1,\ldots,n_r$ from $n$ people. Sort them by the team that one chosen person belongs to.`,
      steps: [
        {
          title: "Set the scene",
          text: r`Take $n$ people and pick one of them, call her Pat. Let $S$ be the set of all ways to split the $n$ people into labelled teams $1,\ldots,r$ with $n_i$ places in team $i$. Then $|S|=\binom{n}{n_1,\ldots,n_r}$.`,
          check: chk(r`What is the size of $S$?`, r`$\dbinom{n}{n_1,\ldots,n_r}$`, r`$\dbinom{n-1}{n_1,\ldots,n_r}$`, r`$r^n$`, r`That is the definition of the multinomial coefficient.`, "Multinomial Coefficient"),
        },
        {
          title: "Sort by Pat's team",
          text: r`In every split Pat is on exactly one team $i$, where $1\le i\le r$. So the splits fall into $r$ groups, one per team, with no overlap and nothing missed.`,
          check: chk(r`Why do the $r$ groups not overlap?`, r`Pat is on exactly one team`, r`The teams have equal sizes`, r`Pat is on every team`, r`One person cannot be on two teams, so each split lies in one group.`, "Counting by Cases"),
        },
        {
          title: "Count one group",
          text: r`Say Pat is on team $i$. Then team $i$ still needs $n_i-1$ more people, and the other teams still need $n_j$ people. The remaining $n-1$ people must fill these places, which is a split of $n-1$ people into labelled teams of sizes $n_1,\ldots,n_i-1,\ldots,n_r$. Every such split together with "Pat on team $i$" gives exactly one split in $S$. So the group has $\binom{n-1}{n_1,\ldots,n_i-1,\ldots,n_r}$ elements. If $n_i=0$ the group is empty and the term is $0$.`,
          check: chk(r`After Pat joins team $i$, how many places are left on team $i$?`, r`$n_i-1$`, r`$n_i$`, r`$n_i+1$`, r`One place of the $n_i$ is used by Pat.`, "Multinomial Coefficient"),
        },
        {
          title: "Add the groups",
          text: r`Adding the $r$ groups gives $\binom{n}{n_1,\ldots,n_r}=\sum_{i=1}^{r}\binom{n-1}{n_1,\ldots,n_i-1,\ldots,n_r}$.`,
          check: chk(r`With $r=2$ this identity becomes which familiar one?`, r`Pascal's identity $\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}$`, r`The binomial theorem`, r`$\binom nk=\binom n{n-k}$`, r`With two teams of sizes $k$ and $n-k$ the multinomial coefficient is $\binom nk$, and the two terms are Pascal's two cases.`, "Pascal's Identity"),
        },
      ],
      conclusion: r`Counting the splits in $S$ by the team of one fixed person proves the identity. $\blacksquare$`,
      example: {
        text: r`People $A,B,C$ and team sizes $(1,1,1)$. Take Pat $=A$. If $A$ is on team 1, $B,C$ fill teams 2, 3 in 2 ways. Same if $A$ is on team 2 or on team 3. $2+2+2=6=\binom{3}{1,1,1}$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is the special person for?`, a: r`Fixing one person lets us sort the splits by where she goes, which produces one term per team.` },
        { q: r`Does it matter which person is special?`, a: r`No. Any one person works; the answer is the same.` },
        { q: r`Where is Equation (4.1) from?`, a: r`Ross proves Pascal's identity by asking whether a particular item is in the chosen group. We do the same with many groups.` },
        { q: r`What are the $r$ terms?`, a: r`One for each team that the special person might be on.` },
      ],
      keywords: [
        "multinomial coefficient|n over n1 n2 nr", "n!/(n1! n2! ... nr!)|factorial formula", "labelled teams|labeled groups|numbered groups", "team sizes|n1+...+nr=n|sizes add to n", "split n people|divide into groups",
        "special person|one fixed person|Pat", "which team|team of the special person", "cases by team|r cases|one case per team", "no overlap|exactly one team|disjoint", "covers everything|exhaustive",
        "places left|n_i minus 1|one fewer place", "n-1 remaining people|the others", "smaller split|smaller multinomial", "sum over i|summation|add the cases", "Pascal's identity|Pascal|equation 4.1",
        "r=2|two teams|binomial case", "zero term|n_i=0|empty team", "combinatorial proof|counting argument|story proof", "same set counted two ways",
      ],
      retryPrompt: r`Explain, with a special person, why the multinomial coefficient equals the sum of $r$ smaller ones. Then say how it contains Pascal's identity.`,
      sourcePageText: r`18. Prove that C(n; n_1, n_2, ..., n_r) = C(n-1; n_1 - 1, n_2, ..., n_r) + C(n-1; n_1, n_2 - 1, ..., n_r) + ... + C(n-1; n_1, n_2, ..., n_r - 1). Hint: Use an argument similar to the one used to establish Equation (4.1).`,
    },
  }),

  problem({
    id: "multinomial-theorem",
    name: "Multinomial Theorem",
    group: "multinomial",
    symbol: r`(x_1+\cdots+x_r)^n`,
    prerequisites: ["Multinomial Coefficient", "Binomial Theorem", "Summation Notation"],
    ross: { n: 19, section: "B", page: 4 },
    title: "Expanding (x1 + … + xr)^n",
    statement: r`Prove the multinomial theorem: $$(x_1+x_2+\cdots+x_r)^n=\sum_{\substack{(n_1,\ldots,n_r):\\ n_1+\cdots+n_r=n}}\binom{n}{n_1,n_2,\ldots,n_r}x_1^{n_1}x_2^{n_2}\cdots x_r^{n_r}.$$`,
    meaning: r`When you multiply out $n$ copies of the same bracket, each term picks one variable from every bracket. The coefficient of $x_1^{n_1}\cdots x_r^{n_r}$ counts the ways to pick.`,
    linkedFormal: r`The sum runs over all whole-number lists $(n_1,\ldots,n_r)$ with sum $n$; the coefficient is the [[Multinomial Coefficient|multinomial coefficient]]. For $r=2$ it is the [[Binomial Theorem|binomial theorem]].`,
    example: r`$r=3$, $n=2$: $(x+y+z)^2=x^2+y^2+z^2+2xy+2xz+2yz$. Here $\binom{2}{1,1,0}=2$ is the coefficient of $xy$.`,
    pretest: {
      prompt: r`In $(x+y+z)^2$, what is the coefficient of $xy$?`,
      options: [r`$2$`, r`$1$`, r`$3$`],
      correct: 0,
      explanation: r`$(x+y+z)(x+y+z)$ gives $xy$ twice: $x$ from the first bracket and $y$ from the second, or the other way round.`,
    },
    check: chk(
      r`Expanding $(x_1+\cdots+x_r)^n$ without simplifying, how many products of one variable from each of the $n$ brackets are there?`,
      r`$r^n$`,
      r`$n^r$`,
      r`$r\cdot n$`,
      r`Each of the $n$ brackets offers $r$ choices, so by the counting principle there are $r^n$ products.`,
    ),
    faq: [
      { q: r`What does the strange summation under $\Sigma$ mean?`, a: r`It runs over every list of whole numbers $(n_1,\ldots,n_r)$ that add to $n$, with zeros allowed.` },
      { q: r`Is this the same as the binomial theorem?`, a: r`For $r=2$ yes: $n_1=k$, $n_2=n-k$ and the coefficient is $\binom nk$.` },
      { q: r`Why not induction?`, a: r`Induction with the identity in T18 works too, but the counting proof is shorter and shows why the coefficient is what it is.` },
      { q: r`Why do we collect terms?`, a: r`Many of the $r^n$ products are the same monomial, for example $xy$ and $yx$. We group equal ones.` },
    ],
    proof: {
      idea: r`Multiply out the $n$ brackets. Every product picks one variable from each bracket. Group the products that give the same monomial and count each group.`,
      steps: [
        {
          title: "Write the product out",
          text: r`$(x_1+\cdots+x_r)^n$ is the product of $n$ brackets, each equal to $x_1+\cdots+x_r$. Multiplying out, we add up every product obtained by choosing one variable from each bracket. There are $r^n$ such products.`,
          check: chk(r`What does multiplying out the brackets add up?`, r`Every product of one variable chosen from each bracket`, r`Only the products with equal variables`, r`The sum of the variables, $n$ times`, r`Distributing a product of sums gives the sum of all ways of picking one term from each factor.`, "Summation Notation"),
        },
        {
          title: "Which monomial does a choice make?",
          text: r`Suppose a choice uses $x_1$ in exactly $n_1$ brackets, $x_2$ in $n_2$ brackets, and so on. The product is $x_1^{n_1}\cdots x_r^{n_r}$ and every bracket is used once, so $n_1+\cdots+n_r=n$.`,
          check: chk(r`If $x_1$ is picked from $n_1$ brackets and $x_2$ from $n_2$ brackets, what do $n_1,\ldots,n_r$ add up to?`, r`$n$, the number of brackets`, r`$r$, the number of variables`, r`$r^n$`, r`Every one of the $n$ brackets gives exactly one variable.`, "Multinomial Coefficient"),
        },
        {
          title: "Count the choices for one monomial",
          text: r`Fix $(n_1,\ldots,n_r)$ with sum $n$. A choice that produces $x_1^{n_1}\cdots x_r^{n_r}$ is the same as telling each bracket which variable to give, so that $n_1$ brackets give $x_1$, $n_2$ give $x_2$, and so on. Think of the brackets as $n$ people and the variables as $r$ labelled teams of sizes $n_1,\ldots,n_r$. The number of such choices is $\binom{n}{n_1,\ldots,n_r}$.`,
          check: chk(r`How many choices give $x_1^{n_1}\cdots x_r^{n_r}$?`, r`$\dbinom{n}{n_1,\ldots,n_r}$`, r`$1$`, r`$r^n$`, r`Sharing out $n$ brackets into labelled teams of sizes $n_i$ is the multinomial coefficient.`, "Multinomial Coefficient"),
        },
        {
          title: "Add all monomials",
          text: r`Every choice gives some monomial with exponents adding to $n$, so adding over all lists $(n_1,\ldots,n_r)$ with sum $n$ collects all $r^n$ products. This gives the theorem.`,
          check: chk(r`For $r=2$, what does the theorem say?`, r`$(x+y)^n=\sum_{k}\binom nk x^ky^{n-k}$`, r`$(x+y)^n=x^n+y^n$`, r`$(x+y)^n=2^nxy$`, r`With $n_1=k$ and $n_2=n-k$ we get the binomial theorem.`, "Binomial Theorem"),
        },
      ],
      conclusion: r`Grouping the $r^n$ products by their exponents gives the multinomial theorem. $\blacksquare$`,
      example: {
        text: r`$(x+y+z)^2$: nine picks $xx,xy,xz,yx,yy,yz,zx,zy,zz$. Grouping: $x^2$ once, $y^2$ once, $z^2$ once, $xy$ twice ($xy,yx$), $xz$ twice, $yz$ twice. The coefficient of $xy$ is $\binom{2}{1,1,0}=\frac{2!}{1!1!0!}=2$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is being proved?`, a: r`That the coefficient of each monomial in the expansion is the multinomial coefficient.` },
        { q: r`What is $x^0$?`, a: r`It is $1$. A variable that is never picked does not appear in the monomial.` },
        { q: r`Where do the numbers $n_i$ come from?`, a: r`They are exponents: how many brackets gave variable $i$.` },
        { q: r`Can I use T18?`, a: r`Yes for an induction proof. But a direct counting proof needs only the definition of the multinomial coefficient.` },
      ],
      keywords: [
        "multinomial theorem|multinomial expansion", "multiply out|expand|distribute", "n brackets|n copies|n factors", "r variables|x_1 to x_r", "choose one variable from each bracket|pick one term from each factor",
        "r^n products|r to the n|total picks", "monomial|term|x_1^{n_1}...x_r^{n_r}", "exponents add to n|n_1+...+n_r=n", "group equal products|collect like terms", "xy and yx|order of picking|same monomial",
        "multinomial coefficient|n!/(n_1!...n_r!)", "labelled teams|labeled groups", "brackets as people|assign brackets to variables", "sum over all lists|summation over n_i", "zero exponent|x^0=1|variable unused",
        "binomial theorem|r=2", "counting principle|multiplication principle", "coefficient|number of ways", "induction|T18|Pascal for multinomials",
      ],
      retryPrompt: r`Explain why the coefficient of $x_1^{n_1}\cdots x_r^{n_r}$ is a multinomial coefficient, in your own words, then write the theorem in the LaTeX box.`,
      sourcePageText: r`19. Prove the multinomial theorem: (x_1 + x_2 + ... + x_r)^n = sum over (n_1, ..., n_r) with n_1 + ... + n_r = n of C(n; n_1, ..., n_r) x_1^{n_1} x_2^{n_2} ... x_r^{n_r}.`,
    },
  }),
];
