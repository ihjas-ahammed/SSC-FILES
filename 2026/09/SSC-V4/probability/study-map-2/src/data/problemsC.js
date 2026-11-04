import { problem, chk } from "./dsl.js";
const r = String.raw;

// Part C: counting recursions. Ross, Chapter 2, Theoretical Exercises 8, 17, 18, 21 and Self-Test Problem 16.
export default [
  problem({
    id: "bell-partitions",
    name: "Counting Set Partitions",
    group: "counting",
    symbol: r`T_n`,
    prerequisites: ["Set Partition", "Special Element Trick", "Combination", "Counting by Cases", "Recurrence Relation"],
    ross: { n: 8, section: "C", page: 76 },
    title: "How many ways can n items be cut into groups?",
    statement: r`Let $S$ be a given set. If, for some $k>0$, $S_1,S_2,\ldots,S_k$ are mutually exclusive nonempty subsets of $S$ such that $\bigcup_{i=1}^{k}S_i=S$, then $\{S_1,\ldots,S_k\}$ is called a partition of $S$. Let $T_n$ denote the number of different partitions of $\{1,2,\ldots,n\}$. Thus $T_1=1$ and $T_2=2$. (a) Show, by computing all partitions, that $T_3=5$ and $T_4=15$. (b) Show that $$T_{n+1}=1+\sum_{k=1}^{n}\binom nk T_k$$ and use this equation to compute $T_{10}$. Hint: one way of choosing a partition of $n+1$ items is to call one of the items special. Then we obtain different partitions by first choosing $k$, $k=0,1,\ldots,n$, then a subset of size $n-k$ of the non-special items, and then any of the $T_k$ partitions of the remaining $k$ non-special items. By adding the special item to the subset of size $n-k$, we obtain a partition of all $n+1$ items.`,
    meaning: r`Cut $n$ labelled items into unlabelled groups in every possible way. Make one item special: it sits in some group, and what is left outside that group is a smaller copy of the same problem.`,
    linkedFormal: r`With $T_0=1$ (the empty set has exactly one partition, with no blocks), $T_{n+1}=\sum_{k=0}^{n}\binom nk T_k=1+\sum_{k=1}^{n}\binom nk T_k$. Make one item special ([[Special Element Trick|special element trick]]). If the special item shares its [[Set Partition|block]] with $n-k$ other items, there are $\binom n{n-k}=\binom nk$ ways to choose them ([[Combination|combination]]) and $T_k$ ways to partition the $k$ items left outside; the cases for $k=0,\ldots,n$ are added ([[Counting by Cases|cases]]). The values are $T_1,\ldots,T_{10}=1,2,5,15,52,203,877,4140,21147,115975$.`,
    example: r`$n=2$, items $\{1,2\}$ plus the special item $3$. $k=0$: $3$ takes both, $\{\{1,2,3\}\}$, $1$ way. $k=1$: $3$ takes one companion ($2$ choices) and the other item stays alone: $\{\{3,2\},\{1\}\}$, $\{\{3,1\},\{2\}\}$. $k=2$: $3$ is alone and $\{1,2\}$ is partitioned in $T_2=2$ ways. Total $1+2+2=5=T_3$.`,
    pretest: {
      prompt: r`In how many ways can the three items $a,b,c$ be put into groups, if no group is empty, the order of the groups does not matter, and the order inside a group does not matter?`,
      options: [r`$5$`, r`$6$`, r`$3$`],
      correct: 0,
      explanation: r`$abc$; $ab|c$, $ac|b$, $bc|a$; $a|b|c$. Six would count orders, and three misses the single group and the all-separate case.`,
    },
    check: chk(
      r`How many partitions of $\{1,2,3,4\}$ consist of two blocks of size $2$?`,
      r`$3$`,
      r`$6$`,
      r`$4$`,
      r`Item $1$'s partner can be $2$, $3$ or $4$, and then the other two items form the second block. Six would count $\{1,2\},\{3,4\}$ and $\{3,4\},\{1,2\}$ as different.`,
    ),
    faq: [
      { q: r`Why is $T_0=1$?`, a: r`The empty set can be cut into blocks in exactly one way: with no blocks at all. This is what makes the term $k=0$ equal to $1$.` },
      { q: r`Is a partition with one block allowed?`, a: r`Yes. $\{\{1,2,3\}\}$ is a partition of $\{1,2,3\}$ with $k=1$ block.` },
      { q: r`Are $\{\{1\},\{2,3\}\}$ and $\{\{2,3\},\{1\}\}$ different partitions?`, a: r`No. Only the blocks matter, not the order they are listed in.` },
    ],
    proof: {
      idea: r`Pick one item and call it special. Sort the partitions by how many items stay outside the special item's block. Each case is a choice of companions times a smaller partition problem, and adding up gives the recurrence.`,
      steps: [
        {
          title: "Part (a): list the partitions for n = 3 and n = 4",
          text: r`For $\{1,2,3\}$: one block $\{\{1,2,3\}\}$ ($1$); two blocks, choose the lonely item ($3$ ways): $\{\{1,2\},\{3\}\}$, $\{\{1,3\},\{2\}\}$, $\{\{2,3\},\{1\}\}$; three blocks $\{\{1\},\{2\},\{3\}\}$ ($1$). So $T_3=1+3+1=5$. For $\{1,2,3,4\}$ sort by block sizes: size $4$: $1$; sizes $3+1$: $4$ (choose the lonely item); sizes $2+2$: $3$ (item $1$'s partner can be $2$, $3$ or $4$); sizes $2+1+1$: $6$ (choose the pair); sizes $1+1+1+1$: $1$. So $T_4=1+4+3+6+1=15$.`,
          check: chk(r`In the count for $\{1,2,3,4\}$, how many partitions have block sizes $3$ and $1$?`, r`$4$`, r`$3$`, r`$6$`, r`Choose the lonely item in $4$ ways; the other three items form the big block.`, "Set Partition"),
        },
        {
          title: "Make one item special",
          text: r`Take $n+1$ items and call the last one special. In any partition, the special item sits in exactly one block. Suppose that block holds the special item plus $n-k$ other items, where $k$ is some number from $0$ to $n$. Then exactly $k$ of the non-special items are outside the special block. Each partition has one value of $k$, so these cases do not overlap and together cover every partition.`,
          check: chk(r`The special item's block holds $n-k$ other items. How many non-special items are in the other blocks?`, r`$k$`, r`$n-k$`, r`$n+1-k$`, r`There are $n$ non-special items in all, $n-k$ of them with the special item, so $k$ are left over.`, "Special Element Trick"),
        },
        {
          title: "Count one case",
          text: r`Fix $k$. First choose which $n-k$ non-special items join the special item: $\binom n{n-k}=\binom nk$ ways. These items together with the special item form one block. Then the $k$ items left over must be cut into blocks among themselves, which can be done in $T_k$ ways. A choice of companions and a partition of the rest give one partition of all $n+1$ items, and every partition in this case arises from exactly one such pair. So this case has $\binom nk T_k$ partitions.`,
          check: chk(r`How many partitions of $\{1,2,3,4,5\}$ have the special item $5$ with exactly $2$ other items, and the other two items split among themselves?`, r`$12$`, r`$6$`, r`$8$`, r`Choose the two companions: $\binom42=6$ ways. The other two items have $T_2=2$ partitions. $6\cdot2=12$.`, "Combination"),
        },
        {
          title: "Add the cases",
          text: r`Adding over $k=0,1,\ldots,n$ gives $T_{n+1}=\sum_{k=0}^{n}\binom nk T_k$. The term $k=0$ is $\binom n0T_0=1$: all $n$ other items join the special item in one big block. Writing that term separately, $T_{n+1}=1+\sum_{k=1}^{n}\binom nkT_k$.`,
          check: chk(r`Which single partition does the term $k=0$ count?`, r`The one-block partition, where the special item has everyone with it`, r`The partition into single items`, r`No partition at all`, r`With $k=0$ no item is left outside, so the special block contains everything.`, "Counting by Cases"),
        },
        {
          title: "Part (b): run the recurrence up to T10",
          text: r`$T_2=1+\binom11T_1=2$. $T_3=1+2\cdot1+1\cdot2=5$. $T_4=1+3\cdot1+3\cdot2+1\cdot5=15$. $T_5=1+4\cdot1+6\cdot2+4\cdot5+1\cdot15=52$. Continuing the same way, $T_6=203$, $T_7=877$, $T_8=4140$, $T_9=21147$. Finally $T_{10}=1+9\cdot1+36\cdot2+84\cdot5+126\cdot15+126\cdot52+84\cdot203+36\cdot877+9\cdot4140+1\cdot21147=115975$.`,
          check: chk(r`What is $T_5$?`, r`$52$`, r`$51$`, r`$25$`, r`$T_5=1+4\cdot1+6\cdot2+4\cdot5+15=52$. Forgetting the leading $1$ gives $51$.`, "Recurrence Relation"),
        },
      ],
      conclusion: r`So $T_{n+1}=1+\sum_{k=1}^n\binom nkT_k$, with $T_3=5$, $T_4=15$ and $T_{10}=115975$. $\blacksquare$`,
      example: {
        text: r`$n=3$: $T_4=1+\binom31T_1+\binom32T_2+\binom33T_3=1+3\cdot1+3\cdot2+1\cdot5=15$. Concretely, special item $4$: $k=0$ gives $\{\{1,2,3,4\}\}$; $k=1$ gives the $3$ partitions where $4$ has two companions and one item is alone ($\{\{4,2,3\},\{1\}\}$ and so on), each with $T_1=1$; $k=2$ gives $3$ choices of one companion times $T_2=2$ partitions of the other two, $6$ in all; $k=3$ gives $4$ alone and $T_3=5$ partitions of the rest. $1+3+6+5=15$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a partition?`, a: r`A way of cutting a set into non-empty blocks so that each item is in exactly one block. See [[Set Partition|Set Partition]].` },
        { q: r`Does the order of the blocks matter?`, a: r`No. $\{\{1\},\{2,3\}\}$ and $\{\{2,3\},\{1\}\}$ are the same partition.` },
        { q: r`Why does the hint make one item special?`, a: r`It lets us sort every partition by what happens to that item, and the rest is a smaller version of the same problem. See [[Special Element Trick|Special Element Trick]].` },
        { q: r`What is the $k=0$ term in the sum?`, a: r`When $k=0$ nobody is left outside the special block, so the whole set is one block. That one partition is the leading $1$.` },
        { q: r`Do I have to list all $115975$ partitions for $T_{10}$?`, a: r`No. You use the recurrence from part (b) again and again, starting from $T_1=1$.` },
      ],
      keywords: [
        "partition|set partition|partition of a set", "block|blocks|nonempty subsets", "mutually exclusive|disjoint|no overlap", "union is S|covers the whole set|union equals S",
        "order does not matter|unordered blocks", "T_n|T sub n|number of partitions", "T_3=5|five partitions", "T_4=15|fifteen partitions", "block sizes|shape of the partition",
        "special item|special element|distinguished item", "n minus k companions|n-k other items|companions of the special item", "choose k|C(n,k)|binomial coefficient",
        "k items left over|remaining k items|leftover items", "T_k partitions|partition the rest", "cases by k|case split|sum over k", "k equals zero|T_0=1|one big block",
        "add the special item|special block", "recurrence|recursion|recursive formula", "T_10=115975|115975", "Bell numbers|Bell",
      ],
      retryPrompt: r`Without looking, explain in your own words why $T_{n+1}=1+\sum_{k=1}^{n}\binom nk T_k$, using a special item, and then say how you get $T_4=15$.`,
      sourcePageText: r`8. Let S be a given set. If, for some k > 0, S_1, S_2, ..., S_k are mutually exclusive nonempty subsets of S such that union of S_i = S, then we call the set {S_1, S_2, ..., S_k} a partition of S. Let T_n denote the number of different partitions of {1, 2, ..., n}. Thus, T_1 = 1 (the only partition being S_1 = {1}) and T_2 = 2 (the two partitions being {{1,2}}, {{1},{2}}). a. Show, by computing all partitions, that T_3 = 5, T_4 = 15. b. Show that T_{n+1} = 1 + sum_{k=1}^{n} C(n,k) T_k and use this equation to compute T_10. Hint: One way of choosing a partition of n+1 items is to call one of the items special. Then we obtain different partitions by first choosing k, k = 0, 1, ..., n, then a subset of size n - k of the nonspecial items, and then any of the T_k partitions of the remaining k nonspecial items. By adding the special item to the subset of size n - k, we obtain a partition of all n + 1 items.`,
    },
  }),

  problem({
    id: "stirling-recursion",
    name: "Partitions into k Blocks",
    group: "counting",
    symbol: r`T_k(n)`,
    prerequisites: ["Set Partition", "Special Element Trick", "Counting by Cases", "Recurrence Relation"],
    ross: { n: "S16", label: "Self-Test Problem 16", section: "C", page: 79 },
    title: "Partitions with exactly k groups",
    statement: r`Let $T_k(n)$ denote the number of partitions of the set $\{1,\ldots,n\}$ into $k$ nonempty subsets, where $1\le k\le n$. (See [[Counting Set Partitions|Theoretical Exercise 8]] for the definition of a partition.) Argue that $$T_k(n)=kT_k(n-1)+T_{k-1}(n-1).$$ Hint: in how many partitions is $\{1\}$ a subset, and in how many is $1$ an element of a subset that contains other elements?`,
    meaning: r`Count the partitions of $n$ items into exactly $k$ groups by looking at where item $1$ goes: alone, or tucked into one of the groups that remain after removing it.`,
    linkedFormal: r`With the conventions $T_0(0)=1$ and $T_k(m)=0$ if $k>m$ or $k=0<m$, $T_k(n)=T_{k-1}(n-1)+kT_k(n-1)$. Make item $1$ special ([[Special Element Trick|special element trick]]). If $\{1\}$ is a block by itself, the other $k-1$ blocks partition $\{2,\ldots,n\}$: $T_{k-1}(n-1)$ [[Set Partition|partitions]]. Otherwise item $1$ shares its block; delete it and the other $n-1$ items are in $k$ blocks, and item $1$ can be put back into any one of those $k$ blocks: $kT_k(n-1)$. These two [[Counting by Cases|cases]] add.`,
    example: r`$n=4$, $k=2$: $T_2(4)=2\,T_2(3)+T_1(3)=2\cdot3+1=7$. The seven partitions are $\{1\}\{2,3,4\}$ (item $1$ alone) and $\{1,2\}\{3,4\}$, $\{1,3\}\{2,4\}$, $\{1,4\}\{2,3\}$, $\{1,2,3\}\{4\}$, $\{1,2,4\}\{3\}$, $\{1,3,4\}\{2\}$ (item $1$ with others).`,
    pretest: {
      prompt: r`In how many ways can $\{1,2,3\}$ be split into exactly two non-empty blocks?`,
      options: [r`$3$`, r`$6$`, r`$2$`],
      correct: 0,
      explanation: r`Choose the item that is alone: $3$ ways, and the other two form the second block. Six would count the two blocks as an ordered pair.`,
    },
    check: chk(
      r`How many partitions of $\{1,2,3\}$ into $2$ blocks have $\{1\}$ as one of the blocks?`,
      r`$1$`,
      r`$3$`,
      r`$2$`,
      r`Only $\{1\},\{2,3\}$: once $\{1\}$ is a block, the remaining items $2,3$ must form the other block.`,
    ),
    faq: [
      { q: r`What does $T_k(n)$ count?`, a: r`Partitions of $n$ items into exactly $k$ non-empty blocks. For example $T_1(n)=1$ and $T_n(n)=1$.` },
      { q: r`How is this different from $T_n$ in [[Counting Set Partitions|Exercise 8]]?`, a: r`There $T_n$ allows any number of blocks. Here the number of blocks is fixed at $k$; adding $T_k(n)$ over $k$ gives the earlier $T_n$.` },
      { q: r`Why does the factor $k$ appear?`, a: r`After removing item $1$ there are $k$ blocks, and item $1$ may be placed into any one of them.` },
    ],
    proof: {
      idea: r`Look at item $1$. Either it stands alone as a block, or it shares a block with other items. Count each kind by removing item $1$ and seeing what smaller partition is left.`,
      steps: [
        {
          title: "Split by what happens to item 1",
          text: r`Take any partition of $\{1,\ldots,n\}$ into $k$ blocks. Item $1$ is in one block. Either that block is just $\{1\}$ (kind A), or it contains at least one other item (kind B). A partition is of exactly one kind, so the kinds do not overlap and together cover all partitions.`,
          check: chk(r`Which pair of cases splits all partitions of $\{1,\ldots,n\}$ by what happens to item $1$?`, r`$\{1\}$ is a block on its own, or item $1$ shares a block with others`, r`Item $1$ is in the first block, or item $1$ is in the last block`, r`Item $1$ is in a block of size $2$, or in a block of size $3$`, r`Every partition has exactly one of these two situations; the other splits miss partitions or are not about item $1$.`, "Special Element Trick"),
        },
        {
          title: "Kind A: item 1 is alone",
          text: r`Remove the block $\{1\}$. What is left is a partition of $\{2,\ldots,n\}$, which has $n-1$ items, into $k-1$ blocks. Conversely, any partition of $\{2,\ldots,n\}$ into $k-1$ blocks becomes a kind A partition of $\{1,\ldots,n\}$ by adding the block $\{1\}$. So kind A partitions match one-to-one with such partitions, and there are $T_{k-1}(n-1)$ of them.`,
          check: chk(r`Removing the lone block $\{1\}$ leaves a partition of how many items into how many blocks?`, r`$n-1$ items into $k-1$ blocks`, r`$n-1$ items into $k$ blocks`, r`$n$ items into $k-1$ blocks`, r`Item $1$ is gone, so $n-1$ items remain, and one of the $k$ blocks is gone.`, "Set Partition"),
        },
        {
          title: "Kind B: remove item 1 from its block",
          text: r`In kind B the block of item $1$ has other items, so after we delete item $1$ it is still non-empty. All $k$ blocks survive, and we have a partition of $\{2,\ldots,n\}$ into $k$ blocks. There are $T_k(n-1)$ such smaller partitions, but one smaller partition can come from several kind B partitions, because item $1$ might have been in any of its blocks.`,
          check: chk(r`In kind B, after deleting item $1$, how many blocks remain?`, r`$k$`, r`$k-1$`, r`$k+1$`, r`The block that held item $1$ still has the other items, so no block disappears.`, "Set Partition"),
        },
        {
          title: "Kind B: put item 1 back",
          text: r`Run the process backwards. Start with any partition of $\{2,\ldots,n\}$ into $k$ blocks and choose one of its $k$ blocks to put item $1$ into. Each of these $k$ choices gives a different kind B partition, and every kind B partition is obtained from exactly one smaller partition and one choice of block. By the [[Basic Counting Principle|counting principle]] there are $k\cdot T_k(n-1)$ kind B partitions.`,
          check: chk(r`Given a partition of $\{2,\ldots,n\}$ into $k$ blocks, in how many ways can item $1$ be added to one of its blocks?`, r`$k$`, r`$1$`, r`$k+1$`, r`One way for each block. A $(k+1)$-th way, a new block, would make item $1$ alone, which is kind A.`, "Basic Counting Principle"),
        },
        {
          title: "Add the two kinds",
          text: r`$T_k(n)=T_{k-1}(n-1)+kT_k(n-1)$. For the extreme cases we use $T_0(0)=1$ and $T_k(m)=0$ when $k>m$ or when $k=0<m$. For instance $T_n(n)=T_{n-1}(n-1)+n\,T_n(n-1)=1+0=1$, as it should, since the only partition into $n$ blocks has all items alone.`,
          check: chk(r`Using $T_2(3)=3$ and $T_1(3)=1$, what is $T_2(4)$?`, r`$7$`, r`$4$`, r`$5$`, r`$T_2(4)=2\,T_2(3)+T_1(3)=2\cdot3+1=7$.`, "Recurrence Relation"),
        },
      ],
      conclusion: r`Kind A gives $T_{k-1}(n-1)$ partitions, kind B gives $kT_k(n-1)$, and every partition is exactly one kind. So $T_k(n)=kT_k(n-1)+T_{k-1}(n-1)$. $\blacksquare$`,
      example: {
        text: r`$n=4$, $k=2$. Kind A: $\{1\}\{2,3,4\}$, which is $T_1(3)=1$. Kind B: take the $T_2(3)=3$ partitions of $\{2,3,4\}$ into two blocks, $\{2\}\{3,4\}$, $\{3\}\{2,4\}$, $\{4\}\{2,3\}$, and put item $1$ into either block: $2\cdot3=6$ partitions, e.g. $\{1,2\}\{3,4\}$ and $\{2\}\{1,3,4\}$. Total $1+6=7=T_2(4)$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does $T_k(n)$ mean?`, a: r`The number of partitions of $\{1,\ldots,n\}$ into exactly $k$ non-empty blocks. See [[Set Partition|Set Partition]].` },
        { q: r`Why look at item $1$ only?`, a: r`Singling out one item turns the problem into a smaller one. That is the [[Special Element Trick|Special Element Trick]], and the hint tells you to use it.` },
        { q: r`What does "$\{1\}$ is a subset" mean in the hint?`, a: r`It means item $1$ is a block by itself. The other case is that its block has other items too.` },
        { q: r`Where does the factor $k$ come from?`, a: r`Once item $1$ is removed there are $k$ blocks, and item $1$ can be put back into any of them.` },
        { q: r`What if $k=1$ or $k=n$?`, a: r`The formula still works with the conventions $T_0(0)=1$ and $T_k(m)=0$ for $k>m$ or $k=0<m$.` },
      ],
      keywords: [
        "partition|set partition|partition of a set", "k blocks|k nonempty subsets|exactly k blocks", "T_k(n)|T sub k of n|number of partitions into k blocks", "special item|special element|item 1|element 1",
        "{1} is a block|one is alone|alone", "shares a block|with other items|not alone", "two cases|case split|cases", "no overlap|disjoint cases|each partition once", "cover everything|exhaustive",
        "remove the block|delete the block {1}", "k minus 1 blocks|k-1 blocks", "T_{k-1}(n-1)|T sub k minus 1 of n minus 1", "n minus 1 items|{2,...,n}|remaining items",
        "delete item 1|remove 1 from its block|take out 1", "still k blocks|block stays nonempty|k blocks remain", "put 1 back|insert item 1|add item 1 to a block", "k choices|choose one of k blocks|factor k",
        "multiply|counting principle|k times", "k T_k(n-1)", "recurrence|recursion|recursive formula", "bijection|one to one|reverse the process",
      ],
      retryPrompt: r`In your own words, explain why $T_k(n)=kT_k(n-1)+T_{k-1}(n-1)$ by looking at where item $1$ sits, and say where the factor $k$ comes from.`,
      sourcePageText: r`16. Let T_k(n) denote the number of partitions of the set {1, ..., n} into k nonempty subsets, where 1 <= k <= n. (See Theoretical Exercise 8 for the definition of a partition.) Argue that T_k(n) = k T_k(n - 1) + T_{k-1}(n - 1). Hint: In how many partitions is {1} a subset, and in how many is 1 an element of a subset that contains other elements?`,
    },
  }),

  problem({
    id: "matching-recursion",
    name: "Hat-Matching Recursion",
    group: "recursion",
    symbol: r`A_N`,
    prerequisites: ["Derangement", "Special Element Trick", "Factorial and Permutations", "Counting by Cases", "Recurrence Relation"],
    ross: { n: 17, section: "C", page: 77 },
    title: "Nobody gets their own hat",
    statement: r`Consider the matching problem, [[Derangement|Example 5m]], and define $A_N$ to be the number of ways in which the $N$ men can select their hats so that no man selects his own. Argue that $$A_N=(N-1)(A_{N-1}+A_{N-2}).$$ This formula, along with the boundary conditions $A_1=0$, $A_2=1$, can then be solved for $A_N$, and the desired probability of no matches would be $A_N/N!$. Hint: after the first man selects a hat that is not his own, there remain $N-1$ men to select among a set of $N-1$ hats that does not contain the hat of one of these men. Thus there is one extra man and one extra hat. Argue that we can get no matches either with the extra man selecting the extra hat or with the extra man not selecting the extra hat.`,
    meaning: r`Man $1$ takes some hat $j\ne1$. Then either man $j$ takes hat $1$ (a swap, leaving $N-2$ men) or he does not, and then he behaves like a man whose "own" hat is hat $1$ (leaving a problem with $N-1$ men).`,
    linkedFormal: r`$A_N=(N-1)(A_{N-1}+A_{N-2})$ for $N\ge3$, with $A_1=0$, $A_2=1$, so $A_3,A_4,A_5,\ldots=2,9,44,\ldots$. Man $1$ has $N-1$ choices of a hat $j\ne1$ ([[Special Element Trick|special element trick]]). For each such $j$ there are $A_{N-2}+A_{N-1}$ ways to finish with no match ([[Counting by Cases|cases]]: man $j$ takes hat $1$, or not), and the choices are multiplied. The chance of no match is $A_N/N!$ ([[Derangement|derangement]]).`,
    example: r`$N=4$: $A_4=3(A_3+A_2)=3(2+1)=9$. Out of $4!=24$ ways to give out the hats, exactly $9$ leave nobody with his own hat, so the probability of no match is $9/24=3/8$.`,
    pretest: {
      prompt: r`Three men throw their hats in a pile and each takes one, in one of the $6$ possible ways. In how many of these $6$ ways does nobody get his own hat?`,
      options: [r`$2$`, r`$3$`, r`$1$`],
      correct: 0,
      explanation: r`Only the two ways in which the hats go "round the circle" work: man 1 gets 2, man 2 gets 3, man 3 gets 1, and the reverse. Any other way matches at least one man.`,
    },
    check: chk(
      r`With $3$ men, suppose man $1$ takes hat $2$. In how many ways can men $2$ and $3$ then take the remaining hats with nobody holding his own?`,
      r`$1$`,
      r`$2$`,
      r`$0$`,
      r`The hats left are $1$ and $3$. Man $3$ must not take hat $3$, so he takes hat $1$ and man $2$ takes hat $3$. That is $A_2+A_1=1+0=1$ way.`,
    ),
    faq: [
      { q: r`What is $A_N$ counting?`, a: r`The ways $N$ men can take hats so that nobody takes his own. See [[Derangement|Derangement]].` },
      { q: r`Why is the factor $N-1$ in front?`, a: r`The first man can take any hat except his own: $N-1$ choices. The number of ways to finish turns out to be the same for each of these choices.` },
      { q: r`What is the "extra man" and "extra hat" in the hint?`, a: r`After man $1$ takes hat $j$, man $j$ has lost his own hat to man $1$, while hat $1$ belongs to nobody still choosing. They are the extra pair.` },
      { q: r`Do I need to solve the recurrence for all $N$?`, a: r`No. You only argue why it is true, and then you can use it to compute values such as $A_4$ and $A_5$.` },
    ],
    proof: {
      idea: r`Let man $1$ take hat $j$. Count the ways to finish, separately for "man $j$ takes hat $1$" and "man $j$ does not", and notice both are smaller copies of the same matching problem.`,
      steps: [
        {
          title: "Man 1 picks a hat that is not his",
          text: r`Man $1$ must not take hat $1$, so he takes some hat $j$ with $j\ne1$. That is $N-1$ possible values of $j$. By symmetry (just rename the men and the hats) the number of ways to finish with nobody matched is the same for every $j$. So $A_N=(N-1)\times$ (number of ways to finish once man $1$ has hat $j$).`,
          check: chk(r`With $N$ men, how many different hats can man $1$ take without getting his own?`, r`$N-1$`, r`$N$`, r`$1$`, r`He can take any hat except hat $1$.`, "Basic Counting Principle"),
        },
        {
          title: "Split on man j",
          text: r`Fix $j$. Man $1$ has hat $j$, so man $j$ cannot get his own hat $j$ anyway. Hat $1$ is still on the table. Man $j$ either takes hat $1$ (case 1: man $1$ and man $j$ have swapped) or takes some other hat (case 2). These cases do not overlap and cover all possibilities.`,
          check: chk(r`After man $1$ holds hat $j$, which two cases cover all choices of man $j$?`, r`He takes hat $1$, or he takes some other hat`, r`He takes hat $j$, or he takes hat $1$`, r`He takes his own hat, or he takes man $1$'s hat`, r`His own hat is $j$, which is gone. Hat $1$ is the special hat that man $1$ left behind. Everything else is "some other hat".`, "Counting by Cases"),
        },
        {
          title: "Case 1: man j takes hat 1",
          text: r`Now men $1$ and $j$ both have hats, and hats $1$ and $j$ are gone. The remaining $N-2$ men $\{2,\ldots,N\}\setminus\{j\}$ choose among the remaining $N-2$ hats, which are exactly their own hats. Nobody may take his own hat, so it is the same problem with $N-2$ men: $A_{N-2}$ ways.`,
          check: chk(r`If men $1$ and $j$ swap hats, how many men are left, and in how many ways can they all avoid their own hats?`, r`$N-2$ men, $A_{N-2}$ ways`, r`$N-1$ men, $A_{N-1}$ ways`, r`$N-2$ men, $(N-2)!$ ways`, r`The $N-2$ remaining men and hats form a matching problem of size $N-2$, with no match allowed.`, "Derangement"),
        },
        {
          title: "Case 2: man j does not take hat 1",
          text: r`Now $N-1$ men ($2,\ldots,N$) are left and $N-1$ hats ($1,\ldots,N$ except $j$). Every man $i\ne j$ still must avoid hat $i$, which is still there. Man $j$ must avoid hat $1$ (that is case 2), and his own hat is gone. So every man has exactly one forbidden hat, and the forbidden hats are all different. Calling hat $1$ "man $j$'s own hat", this is the matching problem with $N-1$ men: $A_{N-1}$ ways.`,
          check: chk(r`In case 2, the situation is equivalent to a matching problem with how many men?`, r`$N-1$`, r`$N-2$`, r`$N$`, r`The men $2,\ldots,N$ remain, each with exactly one forbidden hat among the $N-1$ hats left.`, "Derangement"),
        },
        {
          title: "Combine and compute",
          text: r`For each $j$ the number of ways to finish is $A_{N-2}+A_{N-1}$, so $A_N=(N-1)(A_{N-1}+A_{N-2})$. With $A_1=0$ and $A_2=1$: $A_3=2(1+0)=2$, $A_4=3(2+1)=9$, $A_5=4(9+2)=44$. The probability of no match among $5$ men is $A_5/5!=44/120=11/30$.`,
          check: chk(r`What is $A_4=3(A_3+A_2)$ if $A_3=2$ and $A_2=1$?`, r`$9$`, r`$6$`, r`$12$`, r`$3(2+1)=9$.`, "Recurrence Relation"),
        },
      ],
      conclusion: r`Man $1$ has $N-1$ choices of hat, and for each choice there are $A_{N-2}+A_{N-1}$ ways to finish, so $A_N=(N-1)(A_{N-1}+A_{N-2})$. $\blacksquare$`,
      example: {
        text: r`$N=4$, man $1$ takes hat $2$. Case 1: man $2$ takes hat $1$; men $3,4$ must swap, $1=A_2$ way. Case 2: man $2$ does not take hat $1$; among men $2,3,4$ and hats $1,3,4$ with man $2$ avoiding hat $1$, man $3$ avoiding $3$, man $4$ avoiding $4$ we get $2=A_3$ ways: $(2\to3,3\to4,4\to1)$ and $(2\to4,3\to1,4\to3)$. So $A_2+A_3=3$ ways, and $3\cdot3=9=A_4$ in total.`,
      },
    },
    question: {
      faq: [
        { q: r`What is the matching problem?`, a: r`$N$ men throw their hats in a pile and each takes one at random. A match means a man gets his own hat. See [[Derangement|Derangement]].` },
        { q: r`Why does the formula start from the first man?`, a: r`That is the [[Special Element Trick|Special Element Trick]]. We follow one man and see what is left.` },
        { q: r`What are the boundary conditions for?`, a: r`The formula refers to $A_{N-1}$ and $A_{N-2}$, so it needs starting values $A_1=0$ and $A_2=1$.` },
        { q: r`What does "one extra man and one extra hat" mean?`, a: r`After man $1$ takes hat $j$ there are $N-1$ men and $N-1$ hats, but man $j$'s own hat has been taken while hat $1$ is free. So man $j$ and hat $1$ are the extra pair.` },
        { q: r`How do I get the probability of no match?`, a: r`Divide $A_N$ by the total number of ways to give out the hats, $N!$.` },
      ],
      keywords: [
        "matching problem|hat problem|hat-matching problem", "derangement|no fixed point|nobody gets own hat", "A_N|A sub N|number of ways with no match", "man 1|first man|special man", "N minus 1 choices|N-1 choices|any hat but his own",
        "hat j|man 1 takes hat j", "symmetry|same for every j|rename", "man j|his own hat is gone", "hat 1|the extra hat", "swap|man j takes hat 1|exchange hats", "two cases|case split|cases",
        "A_{N-2}|N minus 2 men", "N minus 2 men left|remaining N-2 men", "extra man|extra hat|one extra", "A_{N-1}|N minus 1 men|treat hat 1 as his own", "forbidden hat|one forbidden hat each|avoid exactly one hat",
        "add the cases|A_{N-1}+A_{N-2}|sum of the two cases", "multiply by N minus 1|(N-1) times", "A_1=0|boundary condition|starting values", "A_2=1", "A_N over N factorial|probability of no match|A_N/N!",
      ],
      retryPrompt: r`In your own words, explain why $A_N=(N-1)(A_{N-1}+A_{N-2})$ by following what man $1$ and then man $j$ do. Then use it to find $A_4$.`,
      sourcePageText: r`17. Consider the matching problem, Example 5m, and define A_N to be the number of ways in which the N men can select their hats so that no man selects his own. Argue that A_N = (N - 1)(A_{N-1} + A_{N-2}). This formula, along with the boundary conditions A_1 = 0, A_2 = 1, can then be solved for A_N, and the desired probability of no matches would be A_N / N!. Hint: After the first man selects a hat that is not his own, there remain N - 1 men to select among a set of N - 1 hats that does not contain the hat of one of these men. Thus, there is one extra man and one extra hat. Argue that we can get no matches either with the extra man selecting the extra hat or with the extra man not selecting the extra hat.`,
    },
  }),

  problem({
    id: "no-successive-heads",
    name: "No Two Heads in a Row",
    group: "recursion",
    symbol: r`f_n`,
    prerequisites: ["Fibonacci Numbers", "Recurrence Relation", "Counting by Cases", "Equally Likely Outcomes", "Sample Space"],
    ross: { n: 18, section: "C", page: 77 },
    title: "Coin tosses without successive heads",
    statement: r`Let $f_n$ denote the number of ways of tossing a coin $n$ times such that successive heads never appear. Argue that $$f_n=f_{n-1}+f_{n-2},\qquad n\ge2,$$ where $f_0\equiv1$, $f_1\equiv2$. Hint: how many outcomes are there that start with a head, and how many start with a tail? If $P_n$ denotes the probability that successive heads never appear when a coin is tossed $n$ times, find $P_n$ (in terms of $f_n$) when all possible outcomes of the $n$ tosses are assumed equally likely. Compute $P_{10}$.`,
    meaning: r`Count H/T strings with no $HH$. Look at the first toss: if it is a tail, the rest is any good string of length $n-1$; if it is a head, the next must be a tail and the rest is any good string of length $n-2$.`,
    linkedFormal: r`$f_0=1$, $f_1=2$ and $f_n=f_{n-1}+f_{n-2}$ for $n\ge2$ (a [[Fibonacci Numbers|Fibonacci-type]] rule), so $f_2,\ldots,f_{10}=3,5,8,13,21,34,55,89,144$. Split the good strings by their first toss ([[Counting by Cases|cases]]): starting with $T$ gives $f_{n-1}$ strings, starting with $H$ forces $T$ next and gives $f_{n-2}$. All $2^n$ outcomes are [[Equally Likely Outcomes|equally likely]], so $P_n=f_n/2^n$, and $P_{10}=144/1024=9/64$.`,
    example: r`$n=3$: the good strings are $TTT,TTH,THT,HTT,HTH$, so $f_3=5=f_2+f_1=3+2$. Starting with $T$: $TTT,TTH,THT$ ($f_2=3$). Starting with $H$: $HTT,HTH$ ($f_1=2$). The chance of no $HH$ in $3$ tosses is $5/8$.`,
    pretest: {
      prompt: r`Of the $8$ possible outcomes of $3$ coin tosses, how many have no two heads next to each other?`,
      options: [r`$5$`, r`$6$`, r`$4$`],
      correct: 0,
      explanation: r`The outcomes with two heads in a row are $HHH$, $HHT$, $THH$. Remove them from $8$ to get $5$.`,
    },
    check: chk(
      r`How many of the good $3$-toss sequences (no $HH$) start with $T$?`,
      r`$3$`,
      r`$5$`,
      r`$2$`,
      r`After the $T$ the other two tosses can be any good two-toss string: $TT,TH,HT$. That is $f_2=3$.`,
    ),
    faq: [
      { q: r`Why is $f_0=1$?`, a: r`There is exactly one way to toss a coin zero times: do nothing. It has no heads, so no successive heads. It makes the recurrence work for $n=2$.` },
      { q: r`Is this the Fibonacci sequence?`, a: r`The rule is the same ($f_n=f_{n-1}+f_{n-2}$), but the start is $1,2$ instead of $1,1$, so it is the Fibonacci numbers shifted by one place. See [[Fibonacci Numbers|Fibonacci Numbers]].` },
      { q: r`What does "successive heads" mean?`, a: r`Two heads in neighbouring tosses, $HH$ somewhere in the string. Heads that are not next to each other are fine.` },
    ],
    proof: {
      idea: r`Sort the good strings by their first toss. A tail first leaves a free good string of length $n-1$. A head first forces a tail second and leaves a free good string of length $n-2$.`,
      steps: [
        {
          title: "Small values and the setting",
          text: r`$f_0=1$ (the empty string) and $f_1=2$ ($H$ and $T$). For $n=2$ the four outcomes are $HH,HT,TH,TT$ and only $HH$ is bad, so $f_2=3$. We want a rule for $f_n$ in general, $n\ge2$.`,
          check: chk(r`Of the $4$ outcomes of two tosses, how many have no two successive heads?`, r`$3$`, r`$4$`, r`$2$`, r`Only $HH$ is bad.`, "Sample Space"),
        },
        {
          title: "The first toss is a tail",
          text: r`If the first toss is $T$, a head in the second place cannot form $HH$ with it, so the only condition left is that tosses $2,\ldots,n$ have no successive heads. Those $n-1$ tosses can be any good string of length $n-1$. So there are $f_{n-1}$ good strings that start with $T$.`,
          check: chk(r`How many good strings of length $n$ start with $T$?`, r`$f_{n-1}$`, r`$f_n$`, r`$f_{n-2}$`, r`The $T$ puts no restriction on the rest, which is any good string of length $n-1$.`, "Recurrence Relation"),
        },
        {
          title: "The first toss is a head",
          text: r`If the first toss is $H$ and $n\ge2$, the second toss must be $T$, otherwise we would have $HH$. After $HT$, the remaining $n-2$ tosses can be any good string, since the $T$ before them blocks any $HH$ with the first head. So there are $f_{n-2}$ good strings that start with $H$.`,
          check: chk(r`A good string of length $n\ge2$ starts with $H$. What is its second toss?`, r`$T$`, r`$H$`, r`Either one`, r`A second $H$ would give $HH$.`, "Counting by Cases"),
        },
        {
          title: "Add the two cases",
          text: r`Every good string starts with exactly one of $T$ or $H$, so the two groups do not overlap and together contain all good strings. Hence $f_n=f_{n-1}+f_{n-2}$ for $n\ge2$.`,
          check: chk(r`Why can we add the counts $f_{n-1}$ and $f_{n-2}$?`, r`Each good string starts with exactly one of $T$ or $H$`, r`Both counts are equal`, r`Strings starting with $H$ and with $T$ share the same tails`, r`Cases that never overlap and cover everything add up to the total.`, "Counting by Cases"),
        },
        {
          title: "The probability, and P10",
          text: r`There are $2^n$ equally likely outcomes of $n$ tosses, and $f_n$ of them have no successive heads, so $P_n=f_n/2^n$. Running the rule from $f_0=1$, $f_1=2$: $f_2,f_3,\ldots,f_{10}=3,5,8,13,21,34,55,89,144$. So $P_{10}=f_{10}/2^{10}=144/1024=9/64\approx0.14$.`,
          check: chk(r`What is $f_5$, given $f_3=5$ and $f_4=8$?`, r`$13$`, r`$16$`, r`$10$`, r`$f_5=f_4+f_3=8+5=13$.`, "Fibonacci Numbers"),
        },
      ],
      conclusion: r`So $f_n=f_{n-1}+f_{n-2}$, $P_n=f_n/2^n$, and $P_{10}=144/1024=9/64$. $\blacksquare$`,
      example: {
        text: r`$n=4$: starting with $T$, the rest is any good string of length $3$: $T\,TTT$, $T\,TTH$, $T\,THT$, $T\,HTT$, $T\,HTH$ ($f_3=5$). Starting with $H$, the next toss is $T$ and then any good string of length $2$: $HT\,TT$, $HT\,TH$, $HT\,HT$ ($f_2=3$). Total $5+3=8=f_4$.`,
      },
    },
    question: {
      faq: [
        { q: r`What counts as a "good" outcome?`, a: r`A sequence of $n$ tosses with no two heads next to each other.` },
        { q: r`Why does the hint ask about the first toss?`, a: r`The first toss splits the good strings into two cases, and each case leaves a shorter problem of the same kind.` },
        { q: r`Why is the second toss forced after a head?`, a: r`If it were a head we would already have $HH$, which is not allowed.` },
        { q: r`What are the equally likely outcomes here?`, a: r`All $2^n$ strings of heads and tails. See [[Equally Likely Outcomes|Equally Likely Outcomes]].` },
        { q: r`Do I have to know the Fibonacci numbers?`, a: r`No. You prove the recurrence yourself and then use it to get the numbers. Knowing the Fibonacci rule helps you recognise the pattern.` },
      ],
      keywords: [
        "no successive heads|no two heads in a row|no HH", "f_n|f sub n|number of good outcomes", "coin tosses|n tosses|sequences of heads and tails", "first toss|look at the first toss",
        "starts with a tail|first toss is T", "tail first|T followed by anything", "f_{n-1}|f sub n minus 1|n minus 1 tosses left", "starts with a head|first toss is H",
        "second toss must be a tail|head forces tail|H then T", "f_{n-2}|f sub n minus 2|n minus 2 tosses left", "two cases|case split|cases", "no overlap|disjoint|each string once",
        "add the cases|f_{n-1}+f_{n-2}|sum", "recurrence|recursion|recursive formula", "Fibonacci|Fibonacci numbers|Fibonacci type", "f_0=1|empty string|zero tosses", "f_1=2|one toss",
        "2^n outcomes|equally likely|2 to the n", "P_n=f_n/2^n|probability f_n over 2^n|f_n divided by 2^n", "f_10=144|144", "P_10=144/1024|9/64|nine sixty-fourths",
      ],
      retryPrompt: r`In your own words, explain why $f_n=f_{n-1}+f_{n-2}$ using the first toss, and then say how you get $P_{10}$.`,
      sourcePageText: r`18. Let f_n denote the number of ways of tossing a coin n times such that successive heads never appear. Argue that f_n = f_{n-1} + f_{n-2}, n >= 2, where f_0 = 1, f_1 = 2. Hint: How many outcomes are there that start with a head, and how many start with a tail? If P_n denotes the probability that successive heads never appear when a coin is tossed n times, find P_n (in terms of f_n) when all possible outcomes of the n tosses are assumed equally likely. Compute P_10.`,
    },
  }),

  problem({
    id: "total-runs",
    name: "Total Number of Runs",
    group: "counting",
    symbol: r`P\{2k\text{ runs}\}`,
    prerequisites: ["Runs in a Sequence", "Compositions of an Integer", "Combination", "Equally Likely Outcomes", "Basic Counting Principle"],
    ross: { n: 21, section: "C", page: 77 },
    title: "Win runs plus loss runs",
    statement: r`Consider [[Runs in a Sequence|Example 5o]], which is concerned with the number of runs of wins obtained when $n$ wins and $m$ losses are randomly permuted (all $\binom{m+n}{n}$ arrangements equally likely). Now consider the total number of runs, that is, win runs plus loss runs, and show that $$P\{2k\text{ runs}\}=\frac{2\binom{m-1}{k-1}\binom{n-1}{k-1}}{\binom{m+n}{n}},$$ $$P\{2k+1\text{ runs}\}=\frac{\binom{m-1}{k-1}\binom{n-1}{k}+\binom{m-1}{k}\binom{n-1}{k-1}}{\binom{m+n}{n}}.$$`,
    meaning: r`Arrange $n$ wins and $m$ losses in a row. The runs alternate between win runs and loss runs, so the number of runs says how many of each there are. Count the ways to cut the wins and the losses into the right number of runs.`,
    linkedFormal: r`There are $\binom{m+n}{n}$ equally likely arrangements. The [[Runs in a Sequence|runs]] alternate. For $2k$ runs there are $k$ win runs and $k$ loss runs, and the row can start with either type; the wins can be cut into $k$ ordered parts in $\binom{n-1}{k-1}$ ways and the losses in $\binom{m-1}{k-1}$ ways ([[Compositions of an Integer|compositions]]), giving $2\binom{m-1}{k-1}\binom{n-1}{k-1}$. For $2k+1$ runs, either $k+1$ win runs and $k$ loss runs, or the other way round, which gives the two terms of the second formula. Divide by $\binom{m+n}{n}$.`,
    example: r`$n=m=2$: the $6$ arrangements $WWLL,WLWL,WLLW,LWWL,LWLW,LLWW$ have $2,4,3,3,4,2$ runs. Formula: $P\{2\text{ runs}\}=2\binom10\binom10/6=2/6$, $P\{3\text{ runs}\}=(\binom10\binom11+\binom11\binom10)/6=2/6$, $P\{4\text{ runs}\}=2\binom11\binom11/6=2/6$. The three add to $1$.`,
    pretest: {
      prompt: r`The $6$ arrangements of two $W$ and two $L$ in a row are $WWLL,WLWL,WLLW,LWWL,LWLW,LLWW$. How many of them have exactly $2$ runs?`,
      options: [r`$2$`, r`$1$`, r`$4$`],
      correct: 0,
      explanation: r`$WWLL$ and $LLWW$, one win run and one loss run each. $WLWL$ and $LWLW$ have $4$ runs; the other two have $3$.`,
    },
    check: chk(
      r`In how many ordered ways can $4$ losses be split into $2$ loss runs, each run having at least one loss?`,
      r`$3$`,
      r`$6$`,
      r`$4$`,
      r`The two run lengths are $1+3$, $2+2$, $3+1$: $\binom{4-1}{2-1}=3$ ways.`,
    ),
    faq: [
      { q: r`What is a run?`, a: r`A maximal block of equal results in a row, such as $WWW$ inside $LWWWL$. See [[Runs in a Sequence|Runs in a Sequence]].` },
      { q: r`Why do the two formulas look different?`, a: r`With an even number of runs the win runs and loss runs are equally many and the first can be either type, so we multiply by $2$. With an odd number one type has one more run than the other, and the start is forced, so we add two cases.` },
      { q: r`What if $k$ is too large?`, a: r`Then some binomial coefficient is $0$ (for example $\binom{m-1}{k-1}=0$ if $k-1>m-1$), meaning that many runs are impossible with so few wins or losses.` },
    ],
    proof: {
      idea: r`Arrange the wins and losses by first deciding how many runs of each type there are and which type starts. Then the run lengths for wins and for losses can be chosen independently, as compositions of $n$ and $m$. Divide by the total number of arrangements.`,
      steps: [
        {
          title: "Runs alternate",
          text: r`Wins runs and loss runs follow one another alternately, because two neighbouring runs of the same type would be one longer run. So with $2k$ runs there are $k$ win runs and $k$ loss runs, and the row may start with a win run or a loss run. With $2k+1$ runs, one type has $k+1$ runs and the other has $k$, and the row starts and ends with the type that has $k+1$.`,
          check: chk(r`A row has exactly $6$ runs. How many win runs does it have?`, r`$3$`, r`$2$`, r`$6$`, r`Win and loss runs alternate, so $6$ runs split into $3$ and $3$.`, "Runs in a Sequence"),
        },
        {
          title: "Cutting the wins into runs",
          text: r`Suppose there are $j$ win runs. Their lengths, taken in order along the row, are $j$ positive numbers adding to $n$. The number of such ordered lists is $\binom{n-1}{j-1}$ (cut $n$ wins in a line at $j-1$ of the $n-1$ gaps). In the same way $j'$ loss runs can be cut in $\binom{m-1}{j'-1}$ ways. Once we know the type that starts and all run lengths, the row is completely determined, and different choices give different rows.`,
          check: chk(r`In how many ordered ways can $5$ wins be split into $3$ win runs?`, r`$6$`, r`$10$`, r`$3$`, r`$\binom{5-1}{3-1}=\binom42=6$. Using $\binom53=10$ forgets that only the $4$ gaps between wins can be used as cuts.`, "Compositions of an Integer"),
        },
        {
          title: "Exactly 2k runs",
          text: r`Now there are $k$ win runs and $k$ loss runs. Choose the win run lengths in $\binom{n-1}{k-1}$ ways, the loss run lengths in $\binom{m-1}{k-1}$ ways, and the starting type in $2$ ways (the row may start with $W$ or with $L$, and both give $2k$ runs). By the [[Basic Counting Principle|counting principle]] the number of arrangements with $2k$ runs is $2\binom{m-1}{k-1}\binom{n-1}{k-1}$.`,
          check: chk(r`Why is there a factor $2$ for $2k$ runs?`, r`The row can start with a win run or with a loss run, and both give $2k$ runs`, r`There are two kinds of runs, so we double the count`, r`Wins and losses are equally likely`, r`Starting type is a free choice when the numbers of win runs and loss runs are equal.`, "Basic Counting Principle"),
        },
        {
          title: "Exactly 2k+1 runs",
          text: r`Here there are two kinds of arrangement. Either $k+1$ win runs and $k$ loss runs (the row starts and ends with $W$): $\binom{n-1}{k}\binom{m-1}{k-1}$ arrangements. Or $k$ win runs and $k+1$ loss runs (it starts and ends with $L$): $\binom{n-1}{k-1}\binom{m-1}{k}$ arrangements. The start is forced in each kind, so there is no factor $2$. The kinds do not overlap, so we add them.`,
          check: chk(r`A row has $2k+1$ runs, of which $k+1$ are win runs. With which symbol does the row start?`, r`$W$`, r`$L$`, r`Either one`, r`The runs alternate, and the type that has one more run must be first and last.`, "Runs in a Sequence"),
        },
        {
          title: "Divide by all arrangements",
          text: r`A row is a choice of which $n$ of the $m+n$ positions hold wins, so there are $\binom{m+n}{n}$ arrangements, all [[Equally Likely Outcomes|equally likely]]. Dividing each count by $\binom{m+n}{n}$ gives the two formulas.`,
          check: chk(r`For $n=m=2$, what is $P\{4\text{ runs}\}=\dfrac{2\binom11\binom11}{\binom42}$?`, r`$\dfrac13$`, r`$\dfrac16$`, r`$\dfrac23$`, r`$2\cdot1\cdot1=2$ arrangements ($WLWL$ and $LWLW$) out of $6$.`, "Equally Likely Outcomes"),
        },
      ],
      conclusion: r`So $P\{2k\text{ runs}\}=2\binom{m-1}{k-1}\binom{n-1}{k-1}\big/\binom{m+n}{n}$ and $P\{2k+1\text{ runs}\}=\Big[\binom{m-1}{k-1}\binom{n-1}{k}+\binom{m-1}{k}\binom{n-1}{k-1}\Big]\big/\binom{m+n}{n}$. $\blacksquare$`,
      example: {
        text: r`$n=3$ wins, $m=2$ losses, $2k+1=3$ runs ($k=1$). Either $2$ win runs and $1$ loss run: wins $3=1+2$ or $2+1$ ($\binom21=2$ ways), loss run $LL$ ($\binom10=1$ way): $WLLWW$, $WWLLW$. Or $1$ win run and $2$ loss runs: win run $WWW$ ($\binom20=1$), losses $2=1+1$ ($\binom11=1$): $LWWWL$. Total $3$ of $\binom53=10$ arrangements, matching $\binom{1}{0}\binom{2}{1}+\binom11\binom20$ with $m-1=1$, $n-1=2$: $1\cdot2+1\cdot1=3$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a run?`, a: r`A maximal block of equal results next to each other. See [[Runs in a Sequence|Runs in a Sequence]].` },
        { q: r`What is Example 5o?`, a: r`It counts only the win runs (a run of wins), with $n$ wins and $m$ losses randomly arranged. Here we count both kinds of run together.` },
        { q: r`Why do $2k$ and $2k+1$ need separate formulas?`, a: r`The runs alternate, so an even total has equally many of each type and either type can come first, while an odd total has one more of one type, which also fixes the first and last symbol.` },
        { q: r`Where do $\binom{n-1}{k-1}$-type numbers come from?`, a: r`Cutting $n$ wins in a row into $k$ non-empty runs means choosing $k-1$ of the $n-1$ gaps. See [[Compositions of an Integer|Compositions of an Integer]].` },
        { q: r`What does "equally likely" mean here?`, a: r`Each of the $\binom{m+n}{n}$ ways to place the wins in the row has the same chance.` },
      ],
      keywords: [
        "run|runs|maximal block", "win run|run of wins", "loss run|run of losses", "runs alternate|alternate|win run then loss run", "total number of runs|win runs plus loss runs",
        "2k runs|even number of runs|k win runs and k loss runs", "2k+1 runs|odd number of runs", "k+1 win runs|one more win run", "starts with a win|starts with W|first run is a win run",
        "starts with a loss|starts with L", "factor 2|two choices of start|which type comes first", "split the wins|cut the wins into runs|composition of n", "C(n-1,k-1)|n minus 1 choose k minus 1|gaps between wins",
        "C(m-1,k-1)|m minus 1 choose k minus 1|gaps between losses", "positive parts|each run at least one|non-empty runs", "independent choices|multiply|counting principle", "two sub-cases|add the cases|odd case",
        "C(m+n,n)|total arrangements|m+n choose n", "equally likely|all arrangements equally likely", "divide by the total|probability = favourable over total", "binomial coefficient|choose|combination",
      ],
      retryPrompt: r`In your own words, explain why $P\{2k\text{ runs}\}$ has a factor $2$ and why $P\{2k+1\text{ runs}\}$ has two terms. Then check both formulas for $n=m=2$.`,
      sourcePageText: r`21. Consider Example 5o, which is concerned with the number of runs of wins obtained when n wins and m losses are randomly permuted. Now consider the total number of runs - that is, win runs plus loss runs - and show that P{2k runs} = 2 C(m-1, k-1) C(n-1, k-1) / C(m+n, n) and P{2k+1 runs} = [C(m-1, k-1) C(n-1, k) + C(m-1, k) C(n-1, k-1)] / C(m+n, n).`,
    },
  }),
];
