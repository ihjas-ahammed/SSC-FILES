import { problem, chk } from "./dsl.js";
const r = String.raw;

// Part A: binomial identities by counting two ways. Ross, Chapter 1, Theoretical Exercises 8, 9, 10, 11, 12, 14.
export default [
  problem({
    id: "vandermonde",
    name: "Vandermonde's Identity",
    group: "binomial",
    symbol: r`\binom{n+m}{r}`,
    prerequisites: ["Combination", "Counting Two Ways", "Counting by Cases", "Summation Notation"],
    ross: { n: 8, section: "A", page: 3 },
    title: "Choosing r from n men and m women",
    statement: r`Prove that $$\binom{n+m}{r}=\binom{n}{0}\binom{m}{r}+\binom{n}{1}\binom{m}{r-1}+\cdots+\binom{n}{r}\binom{m}{0}.$$ Hint: consider a group of $n$ men and $m$ women. How many groups of size $r$ are possible?`,
    meaning: r`Choose $r$ people from a mixed crowd in one go, or split by how many of the $r$ are men. Both ways must agree.`,
    linkedFormal: r`For whole numbers $n,m,r\ge0$: $\displaystyle\binom{n+m}{r}=\sum_{i=0}^{r}\binom ni\binom m{r-i}$, with $\binom ni=0$ when $i>n$. The left side counts all [[Combination|groups]] of $r$ people from $n+m$; the right side sorts those groups by the number $i$ of men.`,
    example: r`$n=m=2$ and $r=2$. Left: $\binom42=6$. Right: $\binom20\binom22+\binom21\binom21+\binom22\binom20=1+4+1=6$.`,
    pretest: {
      prompt: r`A class has 3 boys and 2 girls. A team of 2 is chosen. How many teams have exactly one boy?`,
      options: [r`$6$`, r`$5$`, r`$10$`],
      correct: 0,
      explanation: r`Pick the boy in 3 ways and the girl in 2 ways: $3\cdot2=6$. Ten is the number of all teams.`,
    },
    check: chk(
      r`With $n$ men and $m$ women, how many groups of $r$ people contain exactly $i$ men?`,
      r`$\binom ni\binom m{r-i}$`,
      r`$\binom ni+\binom m{r-i}$`,
      r`$\binom{n+m}{r}$`,
      r`Choose the men and, independently, the women, then multiply.`,
    ),
    faq: [
      { q: r`What does the identity say in plain words?`, a: r`Picking $r$ people from everyone is the same as picking some men and some women whose numbers add up to $r$, and adding over every possible number of men.` },
      { q: r`What if $r$ is bigger than $n$?`, a: r`Then the terms with $i>n$ are 0 because you cannot pick more men than there are. The identity still holds.` },
      { q: r`Is there an algebra proof too?`, a: r`Yes: the number in front of $x^r$ in $(1+x)^{n+m}=(1+x)^n(1+x)^m$ is $\binom{n+m}r$ on one side and $\sum\binom ni\binom m{r-i}$ on the other. The story proof below avoids all algebra.` },
    ],
    proof: {
      idea: r`Count the groups of $r$ people from $n$ men and $m$ women in two ways: all at once, or sorted by how many men they contain.`,
      steps: [
        {
          title: "Set the scene",
          text: r`Imagine $n$ men and $m$ women, $n+m$ people in all. Let $S$ be the set of all groups of exactly $r$ of these people.`,
          check: chk(r`How many groups of $r$ people can be chosen from $n+m$ people?`, r`$\binom{n+m}{r}$`, r`$\binom nr+\binom mr$`, r`$\binom nr\binom mr$`, r`The people are just $n+m$ individuals, so this is an ordinary [[Combination|combination]].`, "Combination"),
        },
        {
          title: "First way: count them all together",
          text: r`Ignoring who is a man and who is a woman, the groups are the $r$-person choices from $n+m$ people, so $|S|=\binom{n+m}{r}$. This is the left side.`,
          check: chk(r`Which side of the identity is this first count?`, r`The left side, $\binom{n+m}{r}$`, r`The right side, the sum`, r`Neither`, r`We did not look at men and women at all, so we get the single number $\binom{n+m}r$.`, "Counting Two Ways"),
        },
        {
          title: "Second way: sort by the number of men",
          text: r`Every group has some number $i$ of men, and then exactly $r-i$ women. The number $i$ can be $0,1,\ldots,r$. A group has only one value of $i$, so the cases do not overlap, and every group is in one of them.`,
          check: chk(r`A group of $r$ people has exactly $i$ men. How many women does it have?`, r`$r-i$`, r`$m-i$`, r`$i$`, r`The group has $r$ people in total, $i$ of them men.`, "Counting by Cases"),
        },
        {
          title: "Count one case",
          text: r`Fix $i$. Choose the $i$ men from $n$ men in $\binom ni$ ways. For each such choice, choose the $r-i$ women from $m$ women in $\binom m{r-i}$ ways. By the [[Basic Counting Principle|counting principle]] this case has $\binom ni\binom m{r-i}$ groups.`,
          check: chk(r`Why do we multiply $\binom ni$ and $\binom m{r-i}$?`, r`Choosing the men AND the women are two steps, one after the other`, r`Either the men OR the women are chosen`, r`Because $i$ and $r-i$ are equal`, r`Two steps in a row multiply; alternatives add.`, "Basic Counting Principle"),
        },
        {
          title: "Add the cases",
          text: r`Adding over all $i$ from $0$ to $r$ gives $|S|=\sum_{i=0}^{r}\binom ni\binom m{r-i}$. If $i>n$ or $r-i>m$ a term is $0$, which is correct because that case is impossible.`,
          check: chk(r`Why can we simply add the counts of the cases?`, r`Every group lies in exactly one case`, r`The cases have equal sizes`, r`The groups are all different people`, r`Cases that do not overlap and cover everything can be added.`, "Counting by Cases"),
        },
      ],
      conclusion: r`We counted the same set $S$ two ways, so $\binom{n+m}{r}=\sum_{i=0}^{r}\binom ni\binom m{r-i}$. $\blacksquare$`,
      example: {
        text: r`$n=2$ men $\{A,B\}$, $m=2$ women $\{a,b\}$, $r=2$. All groups: $AB,Aa,Ab,Ba,Bb,ab$, which is $\binom42=6$. By men: 0 men: $ab$ (1 group, $\binom20\binom22=1$); 1 man: $Aa,Ab,Ba,Bb$ (4 groups, $\binom21\binom21=4$); 2 men: $AB$ (1 group, $\binom22\binom20=1$). $1+4+1=6$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does $\binom{n}{i}$ mean?`, a: r`The number of ways to choose $i$ things out of $n$ when order does not matter. See [[Combination|Combination]].` },
        { q: r`Do I have to use algebra?`, a: r`No. The hint points to a story proof: count one set of groups in two ways. That is a complete proof.` },
        { q: r`Why bring in men and women?`, a: r`They split the crowd into two kinds, which lets us sort the groups by how many of each kind they contain. That produces the sum on the right.` },
        { q: r`What is the sum running over?`, a: r`Over $i$, the number of men in the group, from $0$ up to $r$.` },
        { q: r`What if there are fewer than $i$ men?`, a: r`Then $\binom ni=0$ and that term vanishes.` },
        { q: r`How do I know my proof is complete?`, a: r`You should say which set you count, give the first count, give the second count with its cases, and say why the cases neither overlap nor miss anything.` },
      ],
      keywords: [
        "Vandermonde's identity|Vandermonde", "combinatorial proof|combinatorial argument|story proof", "counting two ways|double counting|count twice",
        "binomial coefficient|n choose r|combination", "committee|group of people|team", "n men|men", "m women|women",
        "n plus m people|n+m people|all the people", "group of size r|r people|choose r", "exactly i men|i men", "r minus i women|r-i women",
        "cases|case split", "no overlap|disjoint|mutually exclusive|do not overlap", "covers everything|every group is in a case|exhaustive",
        "counting principle|multiplication principle|multiply", "choose the men and the women|independent choices|two steps", "sum over i|summation|add the cases",
        "i from 0 to r|zero to r", "zero terms|C(n,i)=0 when i>n|impossible cases", "left side", "right side", "same set counted two ways|same set",
        "coefficient of x^r|polynomial coefficients|generating function",
      ],
      retryPrompt: r`Without looking, explain in your own words why $\binom{n+m}{r}$ equals the sum over $i$, using men and women. Then write the identity in the LaTeX box and recall the key words.`,
      sourcePageText: r`8. Prove that (n+m choose r) = (n choose 0)(m choose r) + (n choose 1)(m choose r-1) + ... + (n choose r)(m choose 0). Hint: Consider a group of n men and m women. How many groups of size r are possible?`,
    },
  }),

  problem({
    id: "sum-of-squared-binomials",
    name: "Sum of Squared Binomials",
    group: "binomial",
    symbol: r`\sum\binom nk^2`,
    prerequisites: ["Vandermonde's Identity", "Choosing Is Leaving Out", "Summation Notation"],
    ross: { n: 9, section: "A", page: 3 },
    title: "C(2n, n) as a sum of squares",
    statement: r`Use [[Vandermonde's Identity|Theoretical Exercise 8]] to prove that $$\binom{2n}{n}=\sum_{k=0}^{n}\binom{n}{k}^2.$$`,
    meaning: r`Choosing $n$ people from $2n$ equals the sum of the squares of one whole row of binomial coefficients.`,
    linkedFormal: r`$\displaystyle\binom{2n}{n}=\sum_{k=0}^{n}\binom nk^2$. It follows from [[Vandermonde's Identity|Vandermonde's identity]] with $m=r=n$ and the symmetry [[Choosing Is Leaving Out|$\binom nk=\binom n{n-k}$]].`,
    example: r`$n=3$: $\binom63=20$ and $\binom30^2+\binom31^2+\binom32^2+\binom33^2=1+9+9+1=20$.`,
    pretest: {
      prompt: r`What is $\binom{3}{0}^2+\binom{3}{1}^2+\binom{3}{2}^2+\binom{3}{3}^2$?`,
      options: [r`$20$`, r`$8$`, r`$64$`],
      correct: 0,
      explanation: r`$1+9+9+1=20$, which is $\binom63$. The numbers themselves add to 8; their squares add to 20.`,
    },
    check: chk(r`Which step turns $\binom ni\binom n{n-i}$ into $\binom ni^2$?`, r`$\binom n{n-i}=\binom ni$`, r`$\binom ni=\binom{n}{i+1}$`, r`$\binom ni\binom ni=\binom{2n}{2i}$`, r`Choosing $n-i$ to take is the same as choosing $i$ to leave out.`),
    faq: [
      { q: r`Why may I use [[Vandermonde's Identity|Exercise 8]]?`, a: r`The exercise tells you to. [[Vandermonde's Identity|Exercise 8]] is true for all $n,m,r$, so you may pick the values you like.` },
      { q: r`Which values do I choose in [[Vandermonde's Identity|Exercise 8]]?`, a: r`Take $m=n$ and $r=n$, so that $n+m=2n$.` },
      { q: r`Where do the squares come from?`, a: r`Each term becomes "the same number times itself" once you swap $\binom n{n-k}$ for $\binom nk$.` },
    ],
    proof: {
      idea: r`Plug $m=n$, $r=n$ into Vandermonde, then swap one factor in each term using symmetry.`,
      steps: [
        {
          title: "Choose the values",
          text: r`[[Vandermonde's Identity|Vandermonde's identity]] says $\binom{n+m}{r}=\sum_{i=0}^{r}\binom ni\binom m{r-i}$ for every $n,m,r$. Take $m=n$ and $r=n$.`,
          check: chk(r`Which values of $m$ and $r$ make the left side $\binom{2n}{n}$?`, r`$m=n$ and $r=n$`, r`$m=2n$ and $r=n$`, r`$m=n$ and $r=2n$`, r`$n+m=2n$ needs $m=n$, and we want to pick $r=n$ people.`, "Vandermonde's Identity"),
        },
        {
          title: "Write the identity out",
          text: r`The left side is $\binom{2n}{n}$. The right side is $\sum_{i=0}^{n}\binom ni\binom n{n-i}$, because $r-i=n-i$.`,
          check: chk(r`After the substitution, the second factor in each term is…`, r`$\binom n{n-i}$`, r`$\binom{2n}{n-i}$`, r`$\binom n{i}$ already`, r`With $m=n$ and $r=n$ the second factor is $\binom m{r-i}=\binom n{n-i}$.`, "Summation Notation"),
        },
        {
          title: "Use symmetry",
          text: r`By [[Choosing Is Leaving Out|choosing is leaving out]], $\binom n{n-i}=\binom ni$ for $0\le i\le n$. Replace the second factor in every term.`,
          check: chk(r`What does the symmetry $\binom n{n-i}=\binom ni$ say?`, r`Choosing $n-i$ to take equals choosing $i$ to leave behind`, r`Both are always equal to 1`, r`Both equal $n$`, r`The complement of an $i$-group is an $(n-i)$-group, and the matching is one-to-one.`, "Choosing Is Leaving Out"),
        },
        {
          title: "Finish",
          text: r`Each term is now $\binom ni\cdot\binom ni=\binom ni^2$. Renaming the index $i$ as $k$, $\binom{2n}{n}=\sum_{k=0}^{n}\binom nk^2$. $\blacksquare$`,
          check: chk(r`Why can the index letter be changed from $i$ to $k$?`, r`It is a dummy index: only the range and formula matter`, r`Because $i=k$ in every term`, r`It cannot be changed`, r`The sum is the same whatever letter is used.`, "Summation Notation"),
        },
      ],
      conclusion: r`So $\binom{2n}{n}=\sum_{k=0}^n\binom nk^2$.`,
      example: {
        text: r`$n=2$: Vandermonde gives $\binom42=\binom20\binom22+\binom21\binom21+\binom22\binom20=1+4+1=6$. Since $\binom22=\binom20=1$, this is $1^2+2^2+1^2$, and indeed $\binom42=6$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does $\binom{2n}{n}$ mean?`, a: r`The ways to choose $n$ things from $2n$ things. It is the biggest number in row $2n$ of Pascal's triangle.` },
        { q: r`What is the sum asking for?`, a: r`Take every number in row $n$ of Pascal's triangle, square it, and add.` },
        { q: r`How can [[Vandermonde's Identity|Exercise 8]] help?`, a: r`Its right side already has products $\binom ni\binom m{r-i}$. Choosing $m$ and $r$ well turns them into squares.` },
        { q: r`What is the symmetry rule?`, a: r`$\binom nk=\binom n{n-k}$. See [[Choosing Is Leaving Out|Choosing Is Leaving Out]].` },
        { q: r`Is a new story needed?`, a: r`No. A short chain of substitutions from [[Vandermonde's Identity|Exercise 8]] proves it.` },
      ],
      keywords: [
        "Vandermonde's identity|Vandermonde|Exercise 8", "substitute m equals n|m equals n|set m=n", "r equals n|set r=n", "2n choose n|central binomial coefficient|C(2n,n)",
        "symmetry|choosing is leaving out|n choose n minus k", "complement|leave out", "square|squared|each term squared", "sum of squares",
        "row of Pascal's triangle|Pascal's triangle|row n", "dummy index|rename the index|index letter", "binomial coefficient|combination", "same factor twice|product of equal factors",
        "n men and n women|two groups of n", "committee of size n|group of n", "replace the second factor|substitution", "range zero to n|i from 0 to n",
      ],
      retryPrompt: r`Explain how Exercise 8 gives the sum of squares: which numbers you substitute, and which rule you use afterwards.`,
      sourcePageText: r`9. Use Theoretical Exercise 8 to prove that (2n choose n) = sum_{k=0}^{n} (n choose k)^2.`,
    },
  }),

  problem({
    id: "committee-and-chairperson",
    name: "Committee and Chairperson",
    group: "binomial",
    symbol: r`k\binom nk`,
    prerequisites: ["Counting Two Ways", "Combination", "Factorial", "Basic Counting Principle"],
    ross: { n: 10, section: "A", page: 3 },
    title: "One committee, three ways to build it",
    statement: r`From a group of $n$ people, suppose that we want to choose a committee of $k$, $k\le n$, one of whom is to be designated as chairperson. (a) By focusing first on the choice of the committee and then on the choice of the chair, argue that there are $\binom nk k$ possible choices. (b) By focusing first on the choice of the nonchair committee members and then on the choice of the chair, argue that there are $\binom n{k-1}(n-k+1)$ possible choices. (c) By focusing first on the choice of the chair and then on the choice of the other committee members, argue that there are $n\binom{n-1}{k-1}$ possible choices. (d) Conclude from (a), (b) and (c) that $$k\binom nk=(n-k+1)\binom n{k-1}=n\binom{n-1}{k-1}.$$ (e) Use the factorial definition of $\binom mr$ to verify the identity in (d).`,
    meaning: r`Build a committee with a boss in three different orders. All three orders count the same thing, so the three counts are equal.`,
    linkedFormal: r`For $1\le k\le n$: $\displaystyle k\binom nk=(n-k+1)\binom n{k-1}=n\binom{n-1}{k-1}$. Each expression counts the pairs (committee of size $k$, chairperson chosen from it) from $n$ people.`,
    example: r`$n=4,\ k=2$: $2\binom42=12$, $(4-2+1)\binom41=3\cdot4=12$, $4\binom31=4\cdot3=12$.`,
    pretest: {
      prompt: r`From 4 people we choose a committee of 2 and name one of the two as chair. How many outcomes?`,
      options: [r`$12$`, r`$6$`, r`$8$`],
      correct: 0,
      explanation: r`There are 6 committees and 2 possible chairs for each: $6\cdot2=12$. Six forgets the chair.`,
    },
    check: chk(r`Choose the chair first, then the other members. For $n$ people and a committee of $k$, the count is…`, r`$n\binom{n-1}{k-1}$`, r`$n\binom{n}{k-1}$`, r`$\binom{n}{k}$`, r`$n$ ways for the chair, then $k-1$ others from the remaining $n-1$.`),
    faq: [
      { q: r`Are the three counts really the same set?`, a: r`Yes: each counts every pair "(committee, its chair)" exactly once. We only change the order of the decisions.` },
      { q: r`Why is the second count $(n-k+1)$?`, a: r`After choosing $k-1$ ordinary members, the chair must be someone else. $n-(k-1)=n-k+1$ people remain.` },
      { q: r`Why do I need part (e)?`, a: r`It confirms the story proof with plain algebra, which is a good check on both.` },
    ],
    proof: {
      idea: r`Count the pairs (committee of $k$, a chair from that committee) three times, deciding things in a different order each time.`,
      steps: [
        {
          title: "Part (a): committee first",
          text: r`Choose the committee of $k$ from $n$ people: $\binom nk$ ways. Now pick one of its $k$ members as chair: $k$ ways. By the [[Basic Counting Principle|counting principle]] there are $k\binom nk$ outcomes.`,
          check: chk(r`After the committee of $k$ is chosen, how many choices are there for the chair?`, r`$k$`, r`$n$`, r`$n-k$`, r`The chair must be one of the $k$ committee members.`, "Basic Counting Principle"),
        },
        {
          title: "Part (b): ordinary members first",
          text: r`Choose the $k-1$ non-chair members from the $n$ people: $\binom n{k-1}$ ways. The chair must be someone else, so there are $n-(k-1)=n-k+1$ people to pick from. Total $(n-k+1)\binom n{k-1}$.`,
          check: chk(r`After choosing the $k-1$ ordinary members from $n$ people, how many people can be the chair?`, r`$n-k+1$`, r`$n-k$`, r`$k$`, r`The $k-1$ chosen people are used up, leaving $n-(k-1)=n-k+1$.`, "Combination"),
        },
        {
          title: "Part (c): chair first",
          text: r`Pick the chair: $n$ ways. The other $k-1$ members come from the remaining $n-1$ people: $\binom{n-1}{k-1}$ ways. Total $n\binom{n-1}{k-1}$.`,
          check: chk(r`If the chair is already chosen, how many people are left to choose the other members from?`, r`$n-1$`, r`$n$`, r`$k-1$`, r`The chair cannot also be an ordinary member.`, "Combination"),
        },
        {
          title: "Part (d): put it together",
          text: r`(a), (b) and (c) each count the same set: all pairs (committee of size $k$, chair). A set has one size, so $k\binom nk=(n-k+1)\binom n{k-1}=n\binom{n-1}{k-1}$.`,
          check: chk(r`Why are the three counts equal?`, r`They count the same set in different orders`, r`They have the same formula`, r`Because $n=k$`, r`Counting Two Ways: one set, different correct counts.`, "Counting Two Ways"),
        },
        {
          title: "Part (e): check with factorials",
          text: r`First: $k\binom nk=k\dfrac{n!}{k!(n-k)!}=\dfrac{n!}{(k-1)!(n-k)!}$. Second: $(n-k+1)\binom n{k-1}=(n-k+1)\dfrac{n!}{(k-1)!(n-k+1)!}=\dfrac{n!}{(k-1)!(n-k)!}$. Third: $n\binom{n-1}{k-1}=n\dfrac{(n-1)!}{(k-1)!(n-k)!}=\dfrac{n!}{(k-1)!(n-k)!}$. All three equal $\dfrac{n!}{(k-1)!(n-k)!}$. $\blacksquare$`,
          check: chk(r`Which simplification is right?`, r`$k\cdot\dfrac1{k!}=\dfrac1{(k-1)!}$`, r`$k\cdot\dfrac1{k!}=\dfrac1{k^2}$`, r`$k\cdot\dfrac1{k!}=\dfrac{k}{(k-1)!}$`, r`$k!=k\cdot(k-1)!$, so the $k$ cancels.`, "Factorial"),
        },
      ],
      conclusion: r`So $k\binom nk=(n-k+1)\binom n{k-1}=n\binom{n-1}{k-1}$.`,
      example: {
        text: r`People $A,B,C,D$ and committees of size $2$. (a) 6 committees and 2 chairs each: 12. (c) chair first: 4 people, then one partner from the other 3: $4\cdot3=12$. (b) one ordinary member in 4 ways, then the chair is any of the other $3$: $4\cdot3=12$. All 12 pairs, for example "$A$ and $B$, chair $B$".`,
      },
    },
    question: {
      faq: [
        { q: r`What is a "chairperson" here?`, a: r`One member of the committee who is singled out. Two outcomes with the same people but different chairs are different outcomes.` },
        { q: r`What is $\binom{n}{k-1}$?`, a: r`Choosing $k-1$ people from $n$ people, order ignored. See [[Combination|Combination]].` },
        { q: r`Why do the three parts give different-looking numbers?`, a: r`They decide in different orders, so the formulas look different. Part (d) says they are equal.` },
        { q: r`What does "argue" mean in (a) to (c)?`, a: r`Explain in words what is being chosen at each stage and how many ways there are. No algebra is needed.` },
        { q: r`What is part (e) asking for?`, a: r`Write each of the three expressions with factorials and show that all of them simplify to the same fraction.` },
      ],
      keywords: [
        "committee", "chairperson|chair", "committee of size k|k members", "n people", "committee first|choose the committee first", "then the chair|choose the chair from the committee",
        "k choices for the chair|k ways", "non-chair members|other members|ordinary members", "k minus 1 members|k-1", "n minus k plus 1|n-k+1|remaining people",
        "chair first|choose the chair first", "n choices for the chair|n ways", "n minus 1 people|n-1 remaining", "same set|pairs of committee and chair", "counting two ways|double counting|three ways",
        "counting principle|multiplication principle|multiply", "binomial coefficient|combination|n choose k", "factorial|factorial definition", "cancel|simplify", "common value|n factorial over k minus 1 factorial",
        "k times k factorial|k over k!", "identity",
      ],
      retryPrompt: r`Explain the three ways of building a committee with a chairperson and why they all give the same number. Then show the factorial check in LaTeX.`,
      sourcePageText: r`10. From a group of n people, suppose that we want to choose a committee of k, k <= n, one of whom is to be designated as chairperson. (a) By focusing first on the choice of the committee and then on the choice of the chair, argue that there are (n choose k) k possible choices. (b) By focusing first on the choice of the nonchair committee members and then on the choice of the chair, argue that there are (n choose k-1)(n-k+1) possible choices. (c) By focusing first on the choice of the chair and then on the choice of the other committee members, argue that there are n (n-1 choose k-1) possible choices. (d) Conclude from parts (a), (b), and (c) that k(n choose k) = (n-k+1)(n choose k-1) = n(n-1 choose k-1). (e) Use the factorial definition of (m choose r) to verify the identity in part (d).`,
    },
  }),

  problem({
    id: "fermats-combinatorial-identity",
    name: "Fermat's Combinatorial Identity",
    group: "binomial",
    symbol: r`\sum\binom{i-1}{k-1}`,
    prerequisites: ["Counting by Cases", "Counting Two Ways", "Combination", "Summation Notation"],
    ross: { n: 11, section: "A", page: 3 },
    title: "Sorting subsets by their largest number",
    statement: r`The following identity is known as Fermat's combinatorial identity: $$\binom nk=\sum_{i=k}^{n}\binom{i-1}{k-1},\qquad n\ge k.$$ Give a combinatorial argument (no computations are needed) to establish this identity. Hint: Consider the set of numbers $1$ through $n$. How many subsets of size $k$ have $i$ as their highest numbered member?`,
    meaning: r`Sort all $k$-element subsets of $\{1,\ldots,n\}$ by their largest element, and count each pile.`,
    linkedFormal: r`For $n\ge k\ge1$: $\displaystyle\binom nk=\sum_{i=k}^{n}\binom{i-1}{k-1}$. The term for $i$ counts the $k$-element [[Set and Subset|subsets]] of $\{1,\ldots,n\}$ whose largest element is $i$.`,
    example: r`$n=4,\ k=2$: $\binom42=6$ and $\binom11+\binom21+\binom31=1+2+3=6$.`,
    pretest: {
      prompt: r`How many 2-element subsets of $\{1,2,3,4,5\}$ have 4 as the larger element?`,
      options: [r`$3$`, r`$4$`, r`$6$`],
      correct: 0,
      explanation: r`The other element must be one of $1,2,3$: three subsets.`,
    },
    check: chk(r`How many $k$-element subsets of $\{1,\ldots,n\}$ have largest element $i$?`, r`$\binom{i-1}{k-1}$`, r`$\binom{i}{k}$`, r`$\binom{n-i}{k-1}$`, r`Put $i$ in, then choose the other $k-1$ elements from the smaller numbers $1,\ldots,i-1$.`),
    faq: [
      { q: r`Why does $i$ start at $k$?`, a: r`A subset with $k$ different numbers has largest element at least $k$. For $i<k$ there are not enough smaller numbers, and $\binom{i-1}{k-1}=0$ anyway.` },
      { q: r`Why is "highest member" a good thing to sort by?`, a: r`Every subset has exactly one highest member, so the piles do not overlap and nothing is missed.` },
      { q: r`What is the shape of this identity called?`, a: r`It is also known as the hockey-stick identity because of how it looks in Pascal's triangle.` },
    ],
    proof: {
      idea: r`Every $k$-subset of $\{1,\ldots,n\}$ has exactly one largest element. Pile the subsets by that element and count each pile.`,
      steps: [
        {
          title: "Name the set",
          text: r`Let $S$ be the set of all subsets of size $k$ of $\{1,2,\ldots,n\}$. Its size is $|S|=\binom nk$. This is the left side.`,
          check: chk(r`How many $k$-element subsets does $\{1,\ldots,n\}$ have?`, r`$\binom nk$`, r`$\binom{n}{k-1}$`, r`$n^k$`, r`A subset is a [[Combination|combination]]: order does not matter.`, "Combination"),
        },
        {
          title: "Pile them by the largest element",
          text: r`Each subset in $S$ has exactly one largest number $i$. Since there must be $k-1$ smaller numbers too, $i\ge k$. So $i$ can be $k,k+1,\ldots,n$. Piles for different $i$ do not overlap, and together they contain every subset.`,
          check: chk(r`Why do the piles for different $i$ not overlap?`, r`A subset has only one largest element`, r`The piles have different sizes`, r`$i$ is always $n$`, r`One subset cannot have two different largest elements.`, "Counting by Cases"),
        },
        {
          title: "Count one pile",
          text: r`Fix $i$. A subset in the pile contains $i$, and its other $k-1$ elements must all be smaller than $i$, so they come from $\{1,\ldots,i-1\}$. Any such $k-1$ numbers work. So the pile has $\binom{i-1}{k-1}$ subsets.`,
          check: chk(r`The largest element is $i$. From which numbers are the other $k-1$ elements chosen?`, r`$1,2,\ldots,i-1$`, r`$1,2,\ldots,n$`, r`$i+1,\ldots,n$`, r`Anything bigger than $i$ would be a larger element than $i$.`, "Counting by Cases"),
        },
        {
          title: "Add the piles",
          text: r`Adding over $i=k,\ldots,n$ gives $|S|=\sum_{i=k}^{n}\binom{i-1}{k-1}$. We counted $S$ in two ways, so $\binom nk=\sum_{i=k}^{n}\binom{i-1}{k-1}$. $\blacksquare$`,
          check: chk(r`Why may we add the pile sizes?`, r`Piles do not overlap and cover every subset`, r`Piles are all of equal size`, r`Because $n\ge k$`, r`That is the rule for counting by cases.`, "Counting Two Ways"),
        },
      ],
      conclusion: r`So $\binom nk=\sum_{i=k}^{n}\binom{i-1}{k-1}$.`,
      example: {
        text: r`$n=4,\ k=2$. The six subsets: $\{1,2\},\{1,3\},\{2,3\},\{1,4\},\{2,4\},\{3,4\}$. Largest element 2: $\{1,2\}$, that is $\binom11=1$. Largest 3: $\{1,3\},\{2,3\}$, that is $\binom21=2$. Largest 4: $\{1,4\},\{2,4\},\{3,4\}$, that is $\binom31=3$. $1+2+3=6$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a combinatorial argument?`, a: r`A proof where you explain what is being counted and why both sides count it. See [[Counting Two Ways|Counting Two Ways]].` },
        { q: r`What does "highest numbered member" mean?`, a: r`The biggest number in the subset. In $\{2,5,7\}$ it is 7.` },
        { q: r`What does the sum $\sum_{i=k}^{n}$ stand for?`, a: r`One term for each possible value of the largest element.` },
        { q: r`Why is $\binom{i-1}{k-1}$ and not $\binom ik$ the pile size?`, a: r`$i$ itself is already in the subset, so only $k-1$ places remain, and only $i-1$ smaller numbers are available.` },
        { q: r`Do I have to compute anything?`, a: r`No. The exercise says no computations are needed.` },
      ],
      keywords: [
        "Fermat's combinatorial identity|Fermat|hockey stick identity|hockey-stick", "combinatorial argument|combinatorial proof|story proof", "counting two ways|double counting",
        "set of numbers 1 to n|one through n|{1,...,n}", "subsets of size k|k-element subsets|k subsets", "binomial coefficient|n choose k|combination", "largest element|highest member|highest numbered member|maximum",
        "sort by the largest|pile|case by largest element", "i from k to n|range of i", "at least k|i is at least k|enough smaller numbers", "smaller numbers|numbers below i|1 to i minus 1",
        "choose k minus 1|k-1 others|other k-1 elements", "i minus 1 choose k minus 1|C(i-1,k-1)", "no overlap|disjoint|each subset has one largest element", "covers every subset|exhaustive|nothing missed",
        "add the piles|sum over i|summation", "left side", "right side", "same set|same collection",
      ],
      retryPrompt: r`Explain, with the set $\{1,\ldots,n\}$ and its $k$-element subsets, why the identity is true.`,
      sourcePageText: r`11. The following identity is known as Fermat's combinatorial identity: (n choose k) = sum_{i=k}^{n} (i-1 choose k-1), n >= k. Give a combinatorial argument (no computations are needed) to establish this identity. Hint: Consider the set of numbers 1 through n. How many subsets of size k have i as their highest numbered member?`,
    },
  }),

  problem({
    id: "committees-with-officers",
    name: "Committees with Officers",
    group: "binomial",
    symbol: r`\sum k^j\binom nk`,
    prerequisites: ["Committee and Chairperson", "Counting Two Ways", "Counting by Cases", "Set and Subset", "Summation Notation"],
    ross: { n: 12, section: "A", page: 3 },
    title: "Weighting committees by powers of their size",
    statement: r`Consider the combinatorial identity $\sum_{k=1}^{n}k\binom nk=n\cdot2^{n-1}$. (a) Present a combinatorial argument for this identity by considering a set of $n$ people and determining, in two ways, the number of possible selections of a committee of any size and a chairperson for the committee. Hint: (i) How many possible selections are there of a committee of size $k$ and its chairperson? (ii) How many possible selections are there of a chairperson and the other committee members? (b) Verify the following identity for $n=1,2,3,4,5$: $$\sum_{k=1}^{n}\binom nk k^2=2^{n-2}n(n+1).$$ For a combinatorial proof of the preceding, consider a set of $n$ people and argue that both sides of the identity represent the number of different selections of a committee, its chairperson, and its secretary (possibly the same as the chairperson). Hint: (i) How many different selections result in the committee containing exactly $k$ people? (ii) How many different selections are there in which the chairperson and the secretary are the same? (ANSWER: $n2^{n-1}$.) (iii) How many different selections result in the chairperson and the secretary being different? (c) Now argue that $$\sum_{k=1}^{n}\binom nk k^3=2^{n-3}n^2(n+3).$$`,
    meaning: r`Count committees together with some office holders. Pick the office holders first, and everyone else is simply in or out.`,
    linkedFormal: r`$\displaystyle\sum_{k=1}^{n}k\binom nk=n2^{n-1},\quad\sum_{k=1}^{n}k^2\binom nk=2^{n-2}n(n+1),\quad\sum_{k=1}^{n}k^3\binom nk=2^{n-3}n^2(n+3)$. The factor $k^j$ counts $j$ office holders chosen from a committee of size $k$; the same officers can hold several offices.`,
    example: r`$n=3$. $\sum k\binom3k=3+6+3=12=3\cdot2^2$. $\sum k^2\binom3k=3+12+9=24=2^1\cdot3\cdot4$.`,
    pretest: {
      prompt: r`A committee of any size (at least 1) is chosen from 3 people and one member becomes chair. How many outcomes?`,
      options: [r`$12$`, r`$7$`, r`$24$`],
      correct: 0,
      explanation: r`By size: $1\cdot3+2\cdot3+3\cdot1=12$. Or chair first (3 ways), then each of the other two is in or out ($2\cdot2$): $3\cdot4=12$.`,
    },
    check: chk(r`Chair and secretary are two different people on a committee drawn from $n$ people. The number of outcomes is…`, r`$n(n-1)2^{n-2}$`, r`$n(n-1)2^{n}$`, r`$\binom n2 2^{n-2}$`, r`Pick the two officers in order ($n(n-1)$ ways); both must be on the committee; each of the other $n-2$ people is in or out.`),
    faq: [
      { q: r`Why does $k$ appear as a multiplier?`, a: r`In a committee of size $k$ there are $k$ ways to pick the chair. For chair plus secretary (who may be the same person) there are $k\cdot k=k^2$ ways.` },
      { q: r`What does "in or out" mean?`, a: r`Once the officers are fixed, every other person independently either joins the committee or does not: 2 choices each. That is $2^{\text{(number of others)}}$ committees.` },
      { q: r`Does the formula work when $n$ is small, like 1 or 2?`, a: r`Yes. For example $n=1$: $\sum k^2\binom1k=1$ and $2^{-1}\cdot1\cdot2=1$. A term like $n(n-1)(n-2)$ is $0$ when there are not enough people, so it is harmless.` },
    ],
    proof: {
      idea: r`Count the committees with $j$ office holders in two ways: sum over the committee size, or choose the office holders first and let everyone else be in or out.`,
      steps: [
        {
          title: "Part (a), first way: by size",
          text: r`Count pairs (committee of any size, chairperson). A committee of size $k$ can be chosen in $\binom nk$ ways and its chair in $k$ ways. Adding over $k=1,\ldots,n$ gives $\sum_{k=1}^{n}k\binom nk$.`,
          check: chk(r`How many (committee of size $k$, chair) pairs are there?`, r`$k\binom nk$`, r`$\binom nk$`, r`$n\binom nk$`, r`There are $\binom nk$ committees, each with $k$ possible chairs.`, "Committee and Chairperson"),
        },
        {
          title: "Part (a), second way: chair first",
          text: r`Choose the chairperson: $n$ ways. Each of the other $n-1$ people is either on the committee or not, independently, so there are $2^{n-1}$ choices. Total $n2^{n-1}$. Both counts are of the same set of pairs, so $\sum_{k=1}^{n}k\binom nk=n2^{n-1}$.`,
          check: chk(r`After the chair is chosen, how many ways are there to decide who else is on the committee?`, r`$2^{n-1}$`, r`$2^{n}$`, r`$n-1$`, r`Each of the other $n-1$ people has two options: in or out.`, "Set and Subset"),
        },
        {
          title: "Part (b), the check for small n",
          text: r`$n=1$: $1=2^{-1}\cdot1\cdot2=1$. $n=2$: $2\cdot1+1\cdot4=6=2^0\cdot2\cdot3$. $n=3$: $3\cdot1+3\cdot4+1\cdot9=24=2^1\cdot3\cdot4$. $n=4$: $4\cdot1+6\cdot4+4\cdot9+1\cdot16=80=2^2\cdot4\cdot5$. $n=5$: $5\cdot1+10\cdot4+10\cdot9+5\cdot16+1\cdot25=240=2^3\cdot5\cdot6$. All five agree.`,
          check: chk(r`For $n=3$, what is $\sum_{k=1}^{3}\binom3kk^2$?`, r`$24$`, r`$12$`, r`$36$`, r`$3\cdot1+3\cdot4+1\cdot9=3+12+9=24$.`, "Summation Notation"),
        },
        {
          title: "Part (b), the combinatorial proof",
          text: r`Count (committee, chairperson, secretary), the secretary possibly being the chair. By size $k$ there are $\binom nk k^2$ ways, so the total is $\sum\binom nk k^2$. Now choose the officers first. If chair and secretary are the same person: $n$ ways, and the others are in or out: $2^{n-1}$, giving $n2^{n-1}$. If they are different: $n(n-1)$ ordered pairs, both on the committee, others in or out: $2^{n-2}$, giving $n(n-1)2^{n-2}$. The total is $n2^{n-1}+n(n-1)2^{n-2}=2^{n-2}n\,[2+(n-1)]=2^{n-2}n(n+1)$.`,
          check: chk(r`Chair and secretary are different people. How many ways to choose them as an ordered pair?`, r`$n(n-1)$`, r`$n^2$`, r`$\binom n2$`, r`The chair has $n$ options; the secretary must be one of the other $n-1$.`, "Counting by Cases"),
        },
        {
          title: "Part (c), choose three officers first",
          text: r`Count (committee, chairperson, secretary, treasurer), the three roles possibly sharing people. By size this is $\sum\binom nk k^3$. Choose the three officers first, as a list $(c,s,t)$, and sort by how many different people appear. One person: $n$ lists, others in or out: $2^{n-1}$. Two people: choose which two roles share a person (3 ways), then $n(n-1)$ people, so $3n(n-1)$ lists with $2^{n-2}$ committees each. Three people: $n(n-1)(n-2)$ lists with $2^{n-3}$ committees each.`,
          check: chk(r`How many lists $(c,s,t)$ use exactly two different people?`, r`$3n(n-1)$`, r`$n(n-1)$`, r`$n(n-1)(n-2)$`, r`Choose which two of the three roles are held by the same person (3 ways), then an ordered pair of different people: $n(n-1)$.`, "Counting by Cases"),
        },
        {
          title: "Part (c), add and simplify",
          text: r`Total $=n2^{n-1}+3n(n-1)2^{n-2}+n(n-1)(n-2)2^{n-3}=2^{n-3}n\,[4+6(n-1)+(n-1)(n-2)]=2^{n-3}n\,(n^2+3n)=2^{n-3}n^2(n+3)$. $\blacksquare$`,
          check: chk(r`What is $4+6(n-1)+(n-1)(n-2)$?`, r`$n^2+3n$`, r`$n^2+6n$`, r`$n^2-3n$`, r`$4+6n-6+n^2-3n+2=n^2+3n$.`, "Summation Notation"),
        },
      ],
      conclusion: r`So $\sum k\binom nk=n2^{n-1}$, $\sum k^2\binom nk=2^{n-2}n(n+1)$ and $\sum k^3\binom nk=2^{n-3}n^2(n+3)$.`,
      example: {
        text: r`$n=2$, people $A,B$. Committee, chair and secretary: by size, $k=1$: 2 committees, 1 way each: 2; $k=2$: 1 committee, $2\cdot2=4$ ways: 4. Total 6. Officers first: same person: $A$ or $B$, 2 ways, others in or out: $2^{1}$ each... 2 people $\times\,2^1=4$; different: ordered pairs $(A,B),(B,A)$, 2 ways, committee must be $\{A,B\}$: 1 way each: 2. Total $4+2=6=2^0\cdot2\cdot3$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does a "committee of any size" include?`, a: r`Any group from 1 person up to everyone. In the sums, $k$ runs from 1 to $n$.` },
        { q: r`What is the secretary "possibly the same as the chairperson"?`, a: r`One person may hold both jobs. That is why there are $k^2$ ways, not $k(k-1)$, to pick the two officers from $k$ members.` },
        { q: r`How do I verify for $n=1,\ldots,5$?`, a: r`Compute both sides for each $n$. For example for $n=2$: left $\binom21\cdot1+\binom22\cdot4=6$, right $2^0\cdot2\cdot3=6$.` },
        { q: r`What does part (c) ask me to do?`, a: r`Prove the cubic formula by the same idea, now with three offices: chair, secretary and treasurer.` },
        { q: r`Why do exponents like $2^{n-3}$ appear?`, a: r`After three different officers are chosen, $n-3$ people remain and each is in or out: $2^{n-3}$.` },
        { q: r`Is it all just algebra?`, a: r`No. The key step is a story: count a set of (committee, officers) in two ways.` },
      ],
      keywords: [
        "committee of any size|any size", "chairperson|chair", "secretary", "treasurer", "officers|office holders", "same person holds two offices|possibly the same|same person",
        "different people|distinct people|different officers", "choose the officers first|officers first", "everyone else in or out|in or out|rest are free", "2 to the n minus 1|2^{n-1}",
        "subsets|each person in or out", "counting two ways|double counting|two ways", "sum by committee size|sum over k", "k times binomial|k C(n,k)", "k squared|k^2",
        "k cubed|k^3", "n times 2 to the n minus 1|n 2^{n-1}", "n(n-1)|ordered pair of different people", "3n(n-1)|three ways to share", "n(n-1)(n-2)|three different people", "cases by number of distinct officers|patterns",
        "verify small n|check n equals 1 to 5", "combinatorial argument|combinatorial proof", "binomial coefficient",
      ],
      retryPrompt: r`Explain how choosing the officers first leads to the formulas for $k$, $k^2$ and $k^3$. Write the final identity for $k^3$ in LaTeX.`,
      sourcePageText: r`12. Consider the following combinatorial identity: sum_{k=1}^{n} k (n choose k) = n 2^{n-1}. a. Present a combinatorial argument for this identity by considering a set of n people and determining, in two ways, the number of possible selections of a committee of any size and a chairperson for the committee. b. Verify the following identity for n = 1,2,3,4,5: sum_{k=1}^{n} (n choose k) k^2 = 2^{n-2} n(n+1). For a combinatorial proof of the preceding, consider a set of n people and argue that both sides of the identity represent the number of different selections of a committee, its chairperson, and its secretary (possibly the same as the chairperson). c. Now argue that sum_{k=1}^{n} (n choose k) k^3 = 2^{n-3} n^2 (n+3).`,
    },
  }),

  problem({
    id: "committee-and-subcommittee",
    name: "Committee and Subcommittee",
    group: "binomial",
    symbol: r`\binom nj\binom ji`,
    prerequisites: ["Alternating Binomial Sum", "Binomial Theorem", "Counting Two Ways", "Combination", "Summation Notation"],
    ross: { n: 14, section: "A", page: 4 },
    title: "A committee with a subcommittee inside it",
    statement: r`From a set of $n$ people, a committee of size $j$ is to be chosen, and from this committee, a subcommittee of size $i$, $i\le j$, is also to be chosen. (a) Derive a combinatorial identity by computing, in two ways, the number of possible choices of the committee and subcommittee: first by supposing that the committee is chosen first and then the subcommittee is chosen, and second by supposing that the subcommittee is chosen first and then the remaining members of the committee are chosen. (b) Use part (a) to prove the following combinatorial identity: $$\sum_{j=i}^{n}\binom nj\binom ji=\binom ni2^{n-i},\qquad i\le n.$$ (c) Use part (a) and [[Alternating Binomial Sum|Theoretical Exercise 13]] to show that $$\sum_{j=i}^{n}\binom nj\binom ji(-1)^{n-j}=0,\qquad i<n.$$`,
    meaning: r`Count pairs (committee, subcommittee inside it) in two orders, then add over all committee sizes.`,
    linkedFormal: r`(a) $\displaystyle\binom nj\binom ji=\binom ni\binom{n-i}{j-i}$. (b) $\displaystyle\sum_{j=i}^{n}\binom nj\binom ji=\binom ni2^{n-i}$. (c) $\displaystyle\sum_{j=i}^{n}\binom nj\binom ji(-1)^{n-j}=0$ for $i<n$.`,
    example: r`$n=3,\ i=1$. (a) with $j=2$: $\binom32\binom21=6=\binom31\binom21$. (b) $3+6+3=12=\binom31\,2^2$. (c) $3-6+3=0$.`,
    pretest: {
      prompt: r`From 4 people we choose a committee of 3, and from it a subcommittee of 2. How many (committee, subcommittee) pairs are there?`,
      options: [r`$12$`, r`$6$`, r`$24$`],
      correct: 0,
      explanation: r`$\binom43=4$ committees, each with $\binom32=3$ subcommittees: $4\cdot3=12$.`,
    },
    check: chk(r`Choose the subcommittee of size $i$ first from $n$ people. How many ways to complete the committee to size $j$?`, r`$\binom{n-i}{j-i}$`, r`$\binom{n}{j-i}$`, r`$\binom{n-i}{j}$`, r`$j-i$ more members come from the $n-i$ people not yet chosen.`),
    faq: [
      { q: r`Why is the subcommittee inside the committee?`, a: r`Every subcommittee member must also be a committee member, so pairs are nested: subcommittee $\subseteq$ committee.` },
      { q: r`Where does the factor $2^{n-i}$ come from in (b)?`, a: r`Fix the subcommittee. Each of the other $n-i$ people is independently in the committee or not, which gives $2^{n-i}$ committees of any size containing it.` },
      { q: r`What is the sign $(-1)^{n-j}$ doing in (c)?`, a: r`It alternates plus and minus as $j$ grows. After factoring out $\binom ni$ the alternating sum is the one from [[Alternating Binomial Sum|Exercise 13]], which is 0.` },
    ],
    proof: {
      idea: r`Count (committee, subcommittee) pairs in two orders for (a); add over all committee sizes for (b); put alternating signs in for (c) and use the zero alternating sum.`,
      steps: [
        {
          title: "Part (a): committee first",
          text: r`Choose the committee of size $j$ from $n$ people: $\binom nj$ ways. Then choose its subcommittee of size $i$ from the $j$ committee members: $\binom ji$ ways. Total $\binom nj\binom ji$.`,
          check: chk(r`With the committee already chosen, how many ways are there to pick the subcommittee?`, r`$\binom ji$`, r`$\binom ni$`, r`$\binom{n-j}{i}$`, r`It must come from the $j$ committee members.`, "Combination"),
        },
        {
          title: "Part (a): subcommittee first",
          text: r`Choose the subcommittee of size $i$ from all $n$ people: $\binom ni$ ways. The committee needs $j-i$ more members, who are not in the subcommittee, so they come from the other $n-i$ people: $\binom{n-i}{j-i}$ ways. Total $\binom ni\binom{n-i}{j-i}$. Both orders count the same pairs, so $\binom nj\binom ji=\binom ni\binom{n-i}{j-i}$.`,
          check: chk(r`Why are the two totals equal?`, r`They count the same set of (committee, subcommittee) pairs`, r`$j$ and $i$ are equal`, r`The formulas simplify to 1`, r`That is Counting Two Ways.`, "Counting Two Ways"),
        },
        {
          title: "Part (b): add over all committee sizes",
          text: r`Use (a) in every term: $\sum_{j=i}^{n}\binom nj\binom ji=\binom ni\sum_{j=i}^{n}\binom{n-i}{j-i}$. Put $m=j-i$, which runs from $0$ to $n-i$. Then $\sum_{m=0}^{n-i}\binom{n-i}{m}=2^{n-i}$ by the [[Binomial Theorem|binomial theorem]] with $x=y=1$. So the sum is $\binom ni2^{n-i}$.`,
          check: chk(r`What is $\sum_{m=0}^{N}\binom Nm$?`, r`$2^N$`, r`$N^2$`, r`$N!$`, r`$(1+1)^N=2^N$ by the binomial theorem.`, "Binomial Theorem"),
        },
        {
          title: "Part (c): bring in the signs",
          text: r`Use (a) again: $\sum_{j=i}^{n}\binom nj\binom ji(-1)^{n-j}=\binom ni\sum_{j=i}^{n}\binom{n-i}{j-i}(-1)^{n-j}$. Write $N=n-i$ and $m=j-i$, so $n-j=N-m$ and $m$ runs from $0$ to $N$.`,
          check: chk(r`With $N=n-i$ and $m=j-i$, the sign $(-1)^{n-j}$ becomes…`, r`$(-1)^{N-m}$`, r`$(-1)^{N+i}$`, r`$(-1)^{m}$ only`, r`$n-j=(n-i)-(j-i)=N-m$.`, "Summation Notation"),
        },
        {
          title: "Part (c): use Exercise 13",
          text: r`$(-1)^{N-m}=(-1)^N(-1)^m$, so the inner sum is $(-1)^N\sum_{m=0}^{N}(-1)^m\binom Nm$. Because $i<n$ we have $N>0$, and the [[Alternating Binomial Sum|alternating binomial sum]] is $0$. The whole expression is $\binom ni\cdot(-1)^N\cdot0=0$. $\blacksquare$`,
          check: chk(r`Why do we need $i<n$ in part (c)?`, r`So that $N=n-i>0$ and the alternating sum is 0`, r`So that $\binom ni\ne0$`, r`So that $2^{n-i}$ is defined`, r`For $N=0$ the sum is just $1$, not $0$.`, "Alternating Binomial Sum"),
        },
      ],
      conclusion: r`Hence (a) $\binom nj\binom ji=\binom ni\binom{n-i}{j-i}$, (b) $\sum_{j=i}^n\binom nj\binom ji=\binom ni2^{n-i}$, and (c) the alternating version equals $0$ for $i<n$.`,
      example: {
        text: r`$n=3,\ i=1$. (a) $j=2$: committees of 2 from $\{A,B,C\}$ ($AB,AC,BC$), each with 2 choices of subcommittee (one member): 6 pairs. Subcommittee first: 3 choices, then one more committee member from the 2 others: $3\cdot2=6$. (b) $j=1,2,3$ give $3,6,3$, total 12 and $\binom31 2^2=12$. (c) $3-6+3=0$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a subcommittee?`, a: r`A smaller group chosen from inside a committee. All its members are also on the committee.` },
        { q: r`What does "derive an identity in two ways" mean for (a)?`, a: r`Count the same pairs twice, in the two orders given, and set the two answers equal.` },
        { q: r`What is "Theoretical Exercise 13"?`, a: r`That $\sum_{i=0}^{n}(-1)^i\binom ni=0$ for $n>0$. See [[Alternating Binomial Sum|Alternating Binomial Sum]].` },
        { q: r`Why $j$ from $i$ to $n$?`, a: r`A committee must be at least as big as its subcommittee ($j\ge i$) and cannot exceed $n$ people.` },
        { q: r`How do (b) and (c) use (a)?`, a: r`Part (a) rewrites each term with $\binom{n-i}{j-i}$, whose sums are known (the binomial theorem, and the alternating sum).` },
      ],
      keywords: [
        "committee", "subcommittee", "committee of size j|j members", "subcommittee of size i|i members", "n people", "committee first|choose the committee first",
        "subcommittee first|choose the subcommittee first", "remaining members|j minus i more|other committee members", "n minus i people|n-i remaining", "counting two ways|double counting|two orders",
        "same pairs|same set of pairs", "nested|subset of the committee|inside the committee", "binomial theorem|(1+1)^n", "two to the n minus i|2^{n-i}", "re-index|shift the index|m equals j minus i",
        "alternating sum|alternating binomial sum|Exercise 13", "sign (-1)^{n-j}|sign|plus and minus", "zero|sum is zero|equals zero", "i less than n|N positive|n minus i positive", "factor out binomial n choose i|C(n,i)",
        "binomial coefficient|combination", "summation", "identity",
      ],
      retryPrompt: r`Explain the two ways of counting committee and subcommittee, then how parts (b) and (c) follow from (a).`,
      sourcePageText: r`14. From a set of n people, a committee of size j is to be chosen, and from this committee, a subcommittee of size i, i <= j, is also to be chosen. a. Derive a combinatorial identity by computing, in two ways, the number of possible choices of the committee and subcommittee: first by supposing that the committee is chosen first and then the subcommittee is chosen, and second by supposing that the subcommittee is chosen first and then the remaining members of the committee are chosen. b. Use part (a) to prove the following combinatorial identity: sum_{j=i}^{n} (n choose j)(j choose i) = (n choose i) 2^{n-i}, i <= n. c. Use part (a) and Theoretical Exercise 13 to show that sum_{j=i}^{n} (n choose j)(j choose i)(-1)^{n-j} = 0, i < n.`,
    },
  }),
];
