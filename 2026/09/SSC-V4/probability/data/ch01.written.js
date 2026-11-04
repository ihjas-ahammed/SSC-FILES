var QUESTIONS = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
QUESTIONS.push(...
[
  {
    "id": "q.prob.1.2.1",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "License plates with position restrictions",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 1(a–b).</b> A plate has two letter positions followed by five digit positions. How many plates are possible if repetition is allowed? How many if letters cannot repeat among themselves and digits cannot repeat among themselves?</p>",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.2.2"
    ],
    "approach": "<p>Treat positions as successive choices. For the second count, the letter and digit pools each shrink independently.</p>",
    "solution": "<p>With repetition, the seven positions have 26, 26, 10, 10, 10, 10, 10 choices, so $26^2 10^5=67,600,000$.</p><p>Without repetition within each type, the count is $26\\cdot25\\cdot10\\cdot9\\cdot8\\cdot7\\cdot6=19,656,000$. Letters and digits are different pools, so a letter does not use up a digit.</p>",
    "trap": "Do not use a single falling factorial across the letter and digit pools; also do not assume “no repetition” means letters and digits cannot share the same symbol category.",
    "provenance": "Ross, 10e, Chapter 1, Problem 1(a–b), PDF p. 31; prompt and solution freshly written."
  },
  {
    "id": "q.prob.1.2.2",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Repeated die rolls as sequences",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 2.</b> A fair die is rolled four times. How many ordered outcome sequences are possible? How many sequences contain exactly two 6s?</p>",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.4.1"
    ],
    "approach": "<p>Count all roll sequences by multiplication. For the constrained count, choose the two positions occupied by 6 and fill the other positions with non-6 faces.</p>",
    "solution": "<p>Each of four ordered rolls has six choices, giving $6^4=1296$ sequences. For exactly two 6s, choose their positions in $\\binom42=6$ ways, then fill the other two positions in $5^2$ ways. The count is $6\\cdot25=150$.</p>",
    "trap": "A sequence records roll order, so permutations of positions are distinct. The remaining two rolls must be non-6, giving five choices each.",
    "provenance": "Ross, 10e, Chapter 1, Problem 2, PDF p. 31; the exactly-two-six extension is original."
  },
  {
    "id": "q.prob.1.3.1",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Repeated letters in arrangements",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 8(c).</b> How many distinct arrangements of all letters in MISSISSIPPI are there?</p>",
    "tests": [
      "c.prob.1.3.2"
    ],
    "approach": "<p>Count permutations as though identical letters were labeled, then divide by the permutations internal to each repeated-letter class.</p>",
    "solution": "<p>MISSISSIPPI has 11 letters: I appears 4 times, S appears 4 times, P appears 2 times, and M appears once. Thus the number of visible arrangements is $11!/(4!4!2!)=34,650$.</p>",
    "trap": "The four S letters and four I letters are separately repeated classes; omitting either divisor overcounts.",
    "provenance": "Ross, 10e, Chapter 1, Problem 8(c), PDF p. 32; prompt and solution freshly written."
  },
  {
    "id": "q.prob.1.3.2",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Adjacent people as a block",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 10(b).</b> Eight distinct people sit in a row. Two specified people must sit next to each other. Count the arrangements.</p>",
    "tests": [
      "c.prob.1.3.1"
    ],
    "approach": "<p>Collapse the specified pair into one block, arrange the resulting units, then restore the pair’s internal order.</p>",
    "solution": "<p>Treat the pair as a single unit. There are seven units to arrange, giving $7!$ orders, and the pair can appear in either internal order. The answer is $2\\cdot7!=10,080$.</p>",
    "trap": "The adjacent pair has two internal orders. Do not count only 7! or treat the two people as indistinguishable.",
    "provenance": "Ross, 10e, Chapter 1, Problem 10(b), PDF pp. 32–33; prompt and solution freshly written."
  },
  {
    "id": "q.prob.1.4.1",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Five-card hands",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 16.</b> How many five-card poker hands can be dealt from a standard 52-card deck?</p>",
    "tests": [
      "c.prob.1.4.1"
    ],
    "approach": "<p>A hand is a subset of five cards; the order in which cards are dealt does not change the hand.</p>",
    "solution": "<p>The count is $\\binom{52}{5}=\\frac{52!}{5!47!}=2,598,960$.</p>",
    "trap": "Using $52\\cdot51\\cdot50\\cdot49\\cdot48$ counts each hand in its 5! deal orders.",
    "provenance": "Ross, 10e, Chapter 1, Problem 16, PDF p. 32; prompt and solution freshly written."
  },
  {
    "id": "q.prob.1.4.2",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Committee with a restriction",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 21(a).</b> Choose a committee of three men and three women from eight women and six men. Two specified men refuse to serve together. How many committees are possible?</p>",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "approach": "<p>Choose the women independently. For the men, subtract the three-person selections containing both specified men from all three-person selections.</p>",
    "solution": "<p>There are $\\binom83$ ways to choose the women. Of the $\\binom63$ male groups, those containing both specified men are formed by choosing one more from the other four, so there are $\\binom41=4$ forbidden groups. The answer is $\\binom83(\\binom63-4)=56(20-4)=896$.</p>",
    "trap": "The restriction affects only male choices. The two specified men together form one forbidden pair, and there are four possible third men.",
    "provenance": "Ross, 10e, Chapter 1, Problem 21(a), PDF p. 33; prompt and solution freshly written."
  },
  {
    "id": "q.prob.1.5.1",
    "course": "prob",
    "sec": "1.5",
    "marks": 5,
    "title": "Committee divisions with roles",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 30.</b> Twelve distinct people are divided into three labeled committees of sizes 3, 4, and 5. How many divisions are possible?</p>",
    "tests": [
      "c.prob.1.5.1"
    ],
    "approach": "<p>Use a multinomial coefficient because the committee labels distinguish the groups, while order within each committee is irrelevant.</p>",
    "solution": "<p>The number is $\\binom{12}{3,4,5}=12!/(3!4!5!)=27,720$. Equivalently, choose 3 for the first committee, then 4 of the remaining 9; the final 5 are determined.</p>",
    "trap": "Do not multiply by an ordering inside committees. The sizes differ and committees are labeled, so there is no extra division by 3!.",
    "provenance": "Ross, 10e, Chapter 1, Problem 30, PDF p. 33; prompt and solution freshly written."
  },
  {
    "id": "q.prob.1.5.2",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Coefficient in a multinomial expansion",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 29.</b> Find the coefficient of $x_1^2x_2x_3$ in $(x_1+2x_2+3x_3)^4$.</p>",
    "tests": [
      "c.prob.1.5.1"
    ],
    "approach": "<p>The exponents specify how many factors contribute each variable. Multiply the multinomial coefficient by the weights contributed by those factors.</p>",
    "solution": "<p>The exponents sum to $2+1+1=4$. The coefficient is $\\frac{4!}{2!1!1!}(1)^2(2)(3)=12cdot6=72$.</p>",
    "trap": "The numerical coefficients 2 and 3 in the trinomial also contribute to the coefficient.",
    "provenance": "Ross, 10e, Chapter 1, Problem 29, PDF p. 33; asks to expand $(x_1+2x_2+3x_3)^4$."
  },
  {
    "id": "q.prob.1.6.1",
    "course": "prob",
    "sec": "1.6",
    "marks": 5,
    "title": "Nonnegative integer allocations",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 34.</b> Eight identical blackboards are divided among four schools. How many allocations are possible if a school may receive none? How many if each school must receive at least one?</p>",
    "tests": [
      "c.prob.1.6.1"
    ],
    "approach": "<p>Represent the allocation by four nonnegative counts summing to eight. For the positive case, give one board to each school first.</p>",
    "solution": "<p>Allowing zero boards, stars and bars gives $\\binom{8+4-1}{4-1}=\\binom{11}{3}=165$. If every school gets at least one, allocate one to each first; distribute the remaining four in $\\binom{4+4-1}{3}=\\binom73=35$ ways.</p>",
    "trap": "The blackboards are identical, so this is a count of integer vectors rather than assignments of eight distinct objects.",
    "provenance": "Ross, 10e, Chapter 1, Problem 34, PDF p. 34; prompt and solution freshly written."
  },
  {
    "id": "q.prob.1.6.2",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Bounded investment allocations",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 36(a).</b> Four investments must receive at least 2,000, 2,000, 3,000, and 4,000 dollars, respectively. A total of 20,000 dollars is invested in units of 1,000 dollars. How many strategies are possible?</p>",
    "tests": [
      "c.prob.1.6.1"
    ],
    "approach": "<p>Subtract the minimum allocation in each investment, then count nonnegative solutions for the remaining units.</p>",
    "solution": "<p>The minimums use 11 units of 1,000 dollars, leaving 9 units to distribute among four nonnegative increments. The count is $\\binom{9+4-1}{3}=\\binom{12}{3}=220$.</p>",
    "trap": "The minimums sum to 11 units, not 10; translate amounts to 1,000-dollar units before applying stars and bars.",
    "provenance": "Ross, 10e, Chapter 1, Problem 36(a), PDF p. 34; prompt and solution freshly written."
  },
  {
    "id": "w.prob.1.ross.example.intro",
    "course": "prob",
    "sec": "1.1",
    "marks": 4,
    "title": "Reliability of a linear antenna array",
    "prompt": "<p>A communication system aligns 4 antennas in a straight line. Exactly 2 of the 4 antennas are defective, and defectives are indistinguishable. The system functions if and only if no two defective antennas are adjacent. What is the probability that the system is functional?</p>",
    "approach": "<p>List or count the total equally likely binary patterns of defective and working antennas, then identify how many have separated defectives.</p>",
    "solution": "<p>There are $\\binom{4}{2}=6$ total configurations of the 2 defective and 2 working antennas: 1100, 1010, 1001, 0110, 0101, 0011 (where 1 is working and 0 is defective). The non-adjacent defective configurations are 1010, 0110, and 0101, which are 3 in total. Assuming all 6 configurations are equally likely, the probability is $3/6 = 1/2$.</p>",
    "trap": "Do not count permutations as if defectives were labeled distinct objects while keeping the denominator unordered.",
    "tests": [
      "c.prob.1.1.1"
    ],
    "provenance": "Ross, 10e, §1.1, PDF p. 17; introductory antenna motivation."
  },
  {
    "id": "w.prob.1.ross.example.2a",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Mother and child award selection",
    "prompt": "<p>A community has 10 mothers, and each mother has exactly 3 children. One mother and one of her own children are to be chosen for a local award. How many different pairs of mother and child can be chosen?</p>",
    "approach": "<p>Use the basic multiplication principle: pick the mother first, then pick one of her children.</p>",
    "solution": "<p>Choosing the mother is stage 1, with 10 options. For any chosen mother, choosing one of her children is stage 2, with 3 options. By the basic principle of counting, there are $10\\times 3 = 30$ possible selections.</p>",
    "trap": "Adding 10 + 3 instead of multiplying choices.",
    "tests": [
      "c.prob.1.2.1"
    ],
    "provenance": "Ross, 10e, §1.2, Example 2a, PDF p. 18."
  },
  {
    "id": "w.prob.1.ross.example.2b",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Subcommittee with one member from each class",
    "prompt": "<p>A school council has 3 freshmen, 4 sophomores, 5 juniors, and 2 seniors. A subcommittee of 4 members is to be formed by choosing exactly 1 student from each of the four year groups. How many different subcommittees can be formed?</p>",
    "approach": "<p>Apply the generalized basic principle of counting across the four sequential class choices.</p>",
    "solution": "<p>The selection involves 4 consecutive independent choices: 3 ways for the freshman, 4 for the sophomore, 5 for the junior, and 2 for the senior. By the generalized basic principle of counting, the number of distinct subcommittees is $3\\times 4\\times 5\\times 2 = 120$.</p>",
    "trap": "Do not sum the cohort sizes; each representative is chosen concurrently for a distinct seat.",
    "tests": [
      "c.prob.1.2.1"
    ],
    "provenance": "Ross, 10e, §1.2, Example 2b, PDF p. 18."
  },
  {
    "id": "w.prob.1.ross.example.2c",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Standard license plates with letter and digit blocks",
    "prompt": "<p>A vehicle license plate consists of 3 letters followed by 4 digits. If letters and digits may be freely repeated, how many different license plates can be manufactured?</p>",
    "approach": "<p>Each position has an independent pool of available symbols.</p>",
    "solution": "<p>There are 26 choices for each of the 3 letter positions and 10 choices for each of the 4 digit positions. By the multiplication rule, the total number of plates is $26^3\\times 10^4 = 17,576\\times 10,000 = 175,760,000$.</p>",
    "trap": "Mixing up the number of alphabet letters (26) with base-10 digits (10).",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.2.2"
    ],
    "provenance": "Ross, 10e, §1.2, Example 2c, PDF p. 19."
  },
  {
    "id": "w.prob.1.ross.example.2d",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Number of binary functions on a finite domain",
    "prompt": "<p>How many functions $f$ can be defined on a set of $n$ points $\\{1, 2, \\ldots, n\\}$ if each function value $f(i)$ must be either 0 or 1?</p>",
    "approach": "<p>Specify the function by making an independent binary choice at each domain point.</p>",
    "solution": "<p>For each input point $i\\in\\{1, 2, \\ldots, n\\}$, there are 2 independent choices for the output value $f(i)\\in\\{0, 1\\}$. By the generalized multiplication rule across all $n$ inputs, there are $2\\times 2\\times\\cdots\\times 2 = 2^n$ possible binary functions.</p>",
    "trap": "Confusing domain size $n$ with codomain size 2; the count is $2^n$, not $n^2$.",
    "tests": [
      "c.prob.1.2.2"
    ],
    "provenance": "Ross, 10e, §1.2, Example 2d, PDF p. 19."
  },
  {
    "id": "w.prob.1.ross.example.2e",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "License plates without symbol repetition",
    "prompt": "<p>A vehicle license plate features 3 letters followed by 4 digits. If no letter may appear more than once and no digit may appear more than once on the same plate, how many license plates are possible?</p>",
    "approach": "<p>Successive choices within each symbol block decrease by 1 as symbols are consumed.</p>",
    "solution": "<p>For the 3 letters without repetition, there are $26\\times 25\\times 24 = 15,600$ choices. For the 4 digits without repetition, there are $10\\times 9\\times 8\\times 7 = 5,040$ choices. Combining the two independent blocks gives $15,600\\times 5,040 = 78,624,000$ possible plates.</p>",
    "trap": "Assuming letters and digits compete for the same pool; letter choices do not reduce digit choices.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.2.2"
    ],
    "provenance": "Ross, 10e, §1.2, Example 2e, PDF p. 19."
  },
  {
    "id": "w.prob.1.ross.example.3a",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Batting lineups for nine baseball players",
    "prompt": "<p>A baseball manager needs to assign 9 players to the 9 batting order positions. How many different batting orders can be constructed?</p>",
    "approach": "<p>Count full permutations of 9 distinct individuals.</p>",
    "solution": "<p>This is the number of permutations of 9 distinct people, which is $9! = 9\\times 8\\times 7\\times 6\\times 5\\times 4\\times 3\\times 2\\times 1 = 362,880$.</p>",
    "trap": "Order is essential in a lineup; combinations would incorrectly treat all orders as identical.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, §1.3, Example 3a, PDF p. 20."
  },
  {
    "id": "w.prob.1.ross.example.3b",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Class exam rank orders by gender",
    "prompt": "<p>A probability class has 6 men and 4 women. A test produces a ranking of all 10 students with no tied scores. (a) How many overall rankings are possible? (b) How many outcomes are possible if men are ranked only among themselves and women only among themselves?</p>",
    "approach": "<p>For (a) arrange all 10 students. For (b) multiply independent internal permutations of each cohort.</p>",
    "solution": "<p>(a) Arranging all 10 distinct students gives $10! = 3,628,800$ possible rank orders. (b) The men can be ranked in $6! = 720$ ways and the women in $4! = 24$ ways. By the multiplication principle, there are $6!\\times 4! = 720\\times 24 = 17,280$ separate relative rankings.</p>",
    "trap": "In (b), relative gender rankings do not specify who placed higher between a man and a woman.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, §1.3, Example 3b, PDF p. 20."
  },
  {
    "id": "w.prob.1.ross.example.3c",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Bookshelf arrangement grouped by subject",
    "prompt": "<p>A student has 4 mathematics books, 3 chemistry books, 2 history books, and 1 language book. In how many ways can the 10 distinct books be placed in a row on a shelf so that all books of the same subject stand next to each other?</p>",
    "approach": "<p>Treat each subject block as a single unit, arrange the 4 units, and then permute books inside each block.</p>",
    "solution": "<p>First arrange the 4 subject blocks on the shelf in $4! = 24$ ways. Next, permute the individual books within their blocks: $4!$ for math, $3!$ for chemistry, $2!$ for history, and $1!$ for language. By the multiplication principle, the total number of arrangements is $4!\\times (4!\\times 3!\\times 2!\\times 1!) = 24\\times (24\\times 6\\times 2\\times 1) = 24\\times 288 = 6,912$.</p>",
    "trap": "Forgetting to permute the 4 subject blocks among themselves.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, §1.3, Example 3c, PDF p. 20."
  },
  {
    "id": "w.prob.1.ross.example.3d",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Permutations of letters with repeats: PEPPER",
    "prompt": "<p>How many distinct 6-letter arrangements can be formed using all the letters in the word PEPPER?</p>",
    "approach": "<p>Divide the factorial of total letter count by the factorials of repeated letter multiplicities.</p>",
    "solution": "<p>The word PEPPER has 6 letters total, consisting of 3 P’s, 2 E’s, and 1 R. If all letters were distinct, there would be $6!$ orderings. Dividing by the internal permutations of the repeated letters yields $\\frac{6!}{3!\\,2!\\,1!} = \\frac{720}{6\\times 2\\times 1} = 60$ distinct arrangements.</p>",
    "trap": "Do not forget the two E’s when dividing by repeated multiplicities.",
    "tests": [
      "c.prob.1.3.2"
    ],
    "provenance": "Ross, 10e, §1.3, Example 3d, PDF pp. 20–21."
  },
  {
    "id": "w.prob.1.ross.example.3e",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Tournament standings recorded by nationality",
    "prompt": "<p>A chess tournament has 10 participants: 4 from Russia, 3 from the United States, 2 from Great Britain, and 1 from Brazil. If the final tournament table lists only the nationalities of the players in order from 1st to 10th place, how many different national standing lists are possible?</p>",
    "approach": "<p>Apply the repeated-items permutation formula with nationality counts.</p>",
    "solution": "<p>This is the number of permutations of 10 items with repeated classes of sizes 4, 3, 2, and 1: $\\frac{10!}{4!\\,3!\\,2!\\,1!} = \\frac{3,628,800}{24\\times 6\\times 2\\times 1} = \\frac{3,628,800}{288} = 12,600$.</p>",
    "trap": "Distinguishing players individually would give 10!; the outcome records nationality alone.",
    "tests": [
      "c.prob.1.3.2"
    ],
    "provenance": "Ross, 10e, §1.3, Example 3e, PDF pp. 20–21."
  },
  {
    "id": "w.prob.1.ross.example.3f",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Signal flag sequence with repeated colors",
    "prompt": "<p>Nine flags are hung vertically on a flagpole to transmit a signal. If 4 are white, 3 are red, and 2 are blue, and flags of the same color are indistinguishable, how many different signals can be displayed?</p>",
    "approach": "<p>Count multiset permutations across the three color classes.</p>",
    "solution": "<p>The 9 flags contain 4 white, 3 red, and 2 blue. The number of distinguishable vertical sequences is $\\frac{9!}{4!\\,3!\\,2!} = \\frac{362,880}{24\\times 6\\times 2} = \\frac{362,880}{288} = 1,260$.</p>",
    "trap": "Dividing by sum of factorials instead of product of factorials.",
    "tests": [
      "c.prob.1.3.2"
    ],
    "provenance": "Ross, 10e, §1.3, Example 3f, PDF pp. 20–21."
  },
  {
    "id": "w.prob.1.ross.example.4a",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Selecting a committee of three from twenty",
    "prompt": "<p>A 3-person delegation is to be chosen from a group of 20 club members. How many different delegations can be selected?</p>",
    "approach": "<p>Delegations are unordered subsets, so evaluate a binomial coefficient.</p>",
    "solution": "<p>Because the order of selection does not matter, this is a combination of 20 items chosen 3 at a time: $\\binom{20}{3} = \\frac{20\\times 19\\times 18}{3\\times 2\\times 1} = 20\\times 19\\times 3 = 1,140$.</p>",
    "trap": "Using $20\\times 19\\times 18$ counts each 3-person committee in all 6 possible selection orders.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, §1.4, Example 4a, PDF p. 22."
  },
  {
    "id": "w.prob.1.ross.example.4b",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Committee formation with gender quotas and feuding members",
    "prompt": "<p>From 5 women and 7 men, a committee of 2 women and 3 men is to be formed. (a) How many committees are possible? (b) How many if 2 specific men refuse to serve on the committee together?</p>",
    "approach": "<p>Multiply independent gender choices; for (b), subtract committees containing both feuding men.</p>",
    "solution": "<p>(a) Choose 2 women in $\\binom{5}{2}=10$ ways and 3 men in $\\binom{7}{3}=\\frac{7\\times 6\\times 5}{6}=35$ ways. By the product rule, there are $10\\times 35 = 350$ committees. (b) The forbidden male trios contain both feuding men plus 1 of the other 5 men, giving $\\binom{5}{1}=5$ forbidden trios. Thus $35 - 5 = 30$ male trios are acceptable, yielding $10\\times 30 = 300$ permitted committees.</p>",
    "trap": "The feuding restriction only constrains the men; women choices remain unaffected.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, §1.4, Example 4b, PDF p. 22."
  },
  {
    "id": "w.prob.1.ross.example.4c",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Antenna arrangement with no adjacent defective units",
    "prompt": "<p>An array consists of $n$ antennas, of which $m$ are defective and $n-m$ are functional ($m\\le n-m+1$). All defectives look identical, and all functional units look identical. In how many linear arrangements are no two defective antennas placed consecutively?</p>",
    "approach": "<p>Place the functional units first to create spaces, then select spaces for the defectives.</p>",
    "solution": "<p>Place the $n-m$ functional antennas in a row. They create $(n-m)+1$ available spaces (including the two ends), and at most one defective antenna can occupy any single space. Choosing $m$ of these $n-m+1$ spaces gives $\\binom{n-m+1}{m}$ arrangements.</p>",
    "trap": "There are $n-m+1$ separator spaces between $n-m$ items, not $n-m$.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, §1.4, Example 4c, PDF pp. 22–23."
  },
  {
    "id": "w.prob.1.ross.example.4d",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Binomial expansion of a sum cubed",
    "prompt": "<p>Expand $(x+y)^3$ using the binomial theorem.</p>",
    "approach": "<p>Write out the binomial expansion sum term by term.</p>",
    "solution": "<p>By the binomial theorem, $(x+y)^3 = \\sum_{k=0}^3 \\binom{3}{k} x^k y^{3-k} = \\binom{3}{0}y^3 + \\binom{3}{1}xy^2 + \\binom{3}{2}x^2y + \\binom{3}{3}x^3 = y^3 + 3xy^2 + 3x^2y + x^3$.</p>",
    "trap": "Ensure binomial coefficients $\\binom{3}{1}=3$ and $\\binom{3}{2}=3$ match the powers correctly.",
    "tests": [
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, §1.4, Example 4d, PDF p. 23."
  },
  {
    "id": "w.prob.1.ross.example.4e",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Total number of subsets of a finite set",
    "prompt": "<p>How many subsets does an $n$-element set possess, and how many contain at least one element?</p>",
    "approach": "<p>Sum binomial coefficients over all subset sizes or use binary inclusion indicators.</p>",
    "solution": "<p>The number of subsets of size $k$ is $\\binom{n}{k}$. Summing over all possible sizes $k=0, 1, \\ldots, n$ gives $\\sum_{k=0}^n \\binom{n}{k} = (1+1)^n = 2^n$. Excluding the empty set (which has 0 elements) leaves $2^n - 1$ nonempty subsets.</p>",
    "trap": "Remember that the total $2^n$ includes the empty set as a valid subset.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, §1.4, Example 4e, PDF pp. 23–24."
  },
  {
    "id": "w.prob.1.ross.example.5a",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Police officer squad division",
    "prompt": "<p>A department has 10 officers. Policy assigns 5 to street patrol, 2 to station duty, and 3 to reserve duty. In how many different ways can the 10 officers be assigned to these three labeled roles?</p>",
    "approach": "<p>Apply multinomial coefficients for partitioning into labeled groups.</p>",
    "solution": "<p>This is a division of 10 distinct individuals into labeled groups of sizes 5, 2, and 3: $\\binom{10}{5, 2, 3} = \\frac{10!}{5!\\,2!\\,3!} = \\frac{3,628,800}{120\\times 2\\times 6} = \\frac{3,628,800}{1,440} = 2,520$ ways.</p>",
    "trap": "The three roles are distinct, so no additional group-symmetry division is needed.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, §1.5, Example 5a, PDF p. 25."
  },
  {
    "id": "w.prob.1.ross.example.5b",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Division of children into two labeled league teams",
    "prompt": "<p>Ten children are to be split into Team A and Team B of 5 children each, where Team A plays in one league and Team B plays in another. How many distinct divisions are possible?</p>",
    "approach": "<p>Because the teams have distinct labels, this is a standard binomial or multinomial split.</p>",
    "solution": "<p>Because the teams have distinct names and leagues, the groups are labeled. The number of ways to choose Team A is $\\binom{10}{5}$, and the remaining 5 form Team B: $\\frac{10!}{5!\\,5!} = \\frac{3,628,800}{120\\times 120} = 252$.</p>",
    "trap": "Do not divide by 2! when the teams have distinct names or league assignments.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, §1.5, Example 5b, PDF p. 25."
  },
  {
    "id": "w.prob.1.ross.example.5c",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Division of children into two unlabeled playground teams",
    "prompt": "<p>Ten children on a playground divide themselves into two teams of 5 each for an informal basketball game without designated names or home/away labels. How many distinct team pairings can be formed?</p>",
    "approach": "<p>Divide the labeled team count by $2!$ because the order of the two equal teams does not matter.</p>",
    "solution": "<p>Unlike labeled teams, swapping the two groups produces the same team partition. Dividing the labeled division count by $2!$ accounts for the interchangeable team identities: $\\frac{1}{2!}\\binom{10}{5,5} = \\frac{252}{2} = 126$.</p>",
    "trap": "Only divide by $r!$ when groups are interchangeable and have identical sizes.",
    "tests": [
      "c.prob.1.5.1",
      "c.prob.1.5.2"
    ],
    "provenance": "Ross, 10e, §1.5, Example 5c, PDF p. 25."
  },
  {
    "id": "w.prob.1.ross.example.5d",
    "course": "prob",
    "sec": "1.5",
    "marks": 5,
    "title": "Knockout tournament outcomes and brackets",
    "prompt": "<p>An eight-player single-elimination tournament pairs players into 4 matches in round 1; winners advance to round 2 (2 matches), and those winners play for the title in round 3. (a) How many match outcomes are possible for round 1? (b) How many complete tournament outcomes (recording winners of every match) are possible?</p>",
    "approach": "<p>Count pairings times winner outcomes round by round, or use the tournament-permutation bijection.</p>",
    "solution": "<p>(a) Dividing 8 players into 4 unlabeled pairs gives $\\frac{8!}{(2!)^4 4!} = 105$ pairings. Each pair has 2 possible winners, giving $105\\times 2^4 = 1,680$ first-round outcomes. Equivalently, choose 4 winners in $\\binom{8}{4}=70$ ways and match each with a loser in $4!=24$ ways: $70\\times 24 = 1,680$. (b) In round 2, the 4 winners yield $\\frac{4!}{(2!)^2 2!}\\times 2^2 = 3\\times 4 = 12$ outcomes. In round 3, the final match has 2 outcomes. Multiplying through gives $1,680\\times 12\\times 2 = 40,320 = 8!$ complete tournament outcomes. In general, an $n$-player knockout tournament with $n=2^m$ has exactly $n!$ complete bracket outcomes.</p>",
    "trap": "Forgetting that pairing players without labels requires dividing by $4!$ in the first round.",
    "tests": [
      "c.prob.1.5.1",
      "c.prob.1.5.2"
    ],
    "provenance": "Ross, 10e, §1.5, Example 5d, PDF p. 26."
  },
  {
    "id": "w.prob.1.ross.example.5e",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Trinomial quadratic expansion",
    "prompt": "<p>Use the multinomial theorem to expand $(x_1 + x_2 + x_3)^2$.</p>",
    "approach": "<p>Find multinomial coefficients for partitions of 2 into 3 parts.</p>",
    "solution": "<p>The sum is over nonnegative integer triples $(n_1, n_2, n_3)$ with $n_1+n_2+n_3=2$. Triples of type $(2,0,0)$ have coefficient $\\frac{2!}{2!0!0!} = 1$ (3 terms: $x_1^2, x_2^2, x_3^2$). Triples of type $(1,1,0)$ have coefficient $\\frac{2!}{1!1!0!} = 2$ (3 terms: $2x_1x_2, 2x_1x_3, 2x_2x_3$). Thus $(x_1+x_2+x_3)^2 = x_1^2 + x_2^2 + x_3^2 + 2x_1x_2 + 2x_1x_3 + 2x_2x_3$.</p>",
    "trap": "Check that the cross-terms receive coefficient 2 from $\\frac{2!}{1!1!0!}$.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, §1.5, Example 5e, PDF p. 26."
  },
  {
    "id": "w.prob.1.ross.example.6a",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Nonnegative integer solutions summing to three",
    "prompt": "<p>How many pairs of nonnegative integers $(x_1, x_2)$ satisfy $x_1 + x_2 = 3$?</p>",
    "approach": "<p>Apply stars and bars for nonnegative integers with $n=3$ and $r=2$.</p>",
    "solution": "<p>By stars and bars, the number of nonnegative integer solutions is $\\binom{n+r-1}{r-1}$ with $n=3$ and $r=2$: $\\binom{3+2-1}{2-1} = \\binom{4}{1} = 4$. The explicit solutions are $(0,3), (1,2), (2,1), (3,0)$.</p>",
    "trap": "Do not confuse nonnegative ($x_i\\ge 0$) with positive ($x_i\\ge 1$).",
    "tests": [
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, §1.6, Example 6a, PDF p. 28."
  },
  {
    "id": "w.prob.1.ross.example.6b",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Investment strategies in units of one thousand dollars",
    "prompt": "An investor has 20,000 dollars to allocate among four opportunities in whole units of 1,000 dollars. (a) Count plans when all 20 units must be invested. (b) Count plans when some money may remain uninvested. An opportunity may receive zero.",
    "approach": "<p>For (a) solve $x_1+x_2+x_3+x_4=20$; for (b) add a 5th slack variable for reserve funds.</p>",
    "solution": "<p>(a) Let $x_i\\ge 0$ be thousands invested in opportunity $i$. Then $x_1+x_2+x_3+x_4=20$. By stars and bars, $\\binom{20+4-1}{4-1} = \\binom{23}{3} = \\frac{23\\times 22\\times 21}{6} = 1,771$. (b) Introduce slack variable $x_5\\ge 0$ for reserve funds: $x_1+x_2+x_3+x_4+x_5=20$. The number of strategies is $\\binom{20+5-1}{5-1} = \\binom{24}{4} = \\frac{24\\times 23\\times 22\\times 21}{24} = 10,626$.</p>",
    "trap": "In (b), reserve funds act as an extra recipient, converting inequality to equality with $r=5$.",
    "tests": [
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, §1.6, Example 6b, PDF p. 28."
  },
  {
    "id": "w.prob.1.ross.example.6c",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Number of distinct terms in a multinomial expansion",
    "prompt": "<p>How many distinct monomial terms appear in the full expansion of $(x_1 + x_2 + \\cdots + x_r)^n$?</p>",
    "approach": "<p>Count nonnegative exponent vectors $(n_1, \\ldots, n_r)$ summing to $n$.</p>",
    "solution": "<p>Each distinct monomial has the form $c\\cdot x_1^{n_1}x_2^{n_2}\\cdots x_r^{n_r}$, determined uniquely by the exponent tuple of nonnegative integers satisfying $n_1+n_2+\\cdots+n_r=n$. By Proposition 6.2 (stars and bars), there are $\\binom{n+r-1}{r-1}$ such exponent vectors and hence that many distinct terms.</p>",
    "trap": "The number of distinct terms is the count of solutions, not the sum of multinomial coefficients ($r^n$).",
    "tests": [
      "c.prob.1.5.1",
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, §1.6, Example 6c, PDF pp. 28–29."
  },
  {
    "id": "w.prob.1.ross.example.6d",
    "course": "prob",
    "sec": "1.6",
    "marks": 5,
    "title": "Defective antennas separated by buffer functional units",
    "prompt": "<p>A row has $n$ antennas, $m$ defective and $n-m$ working; antennas of the same type are indistinguishable. Let $x_1$ count working antennas before the first defective, $x_2,\\ldots,x_m$ those between defectives, and $x_{m+1}$ those after the last. Count arrangements with (a) no adjacent defectives; (b) at least two working antennas between each pair of adjacent defectives.</p>",
    "approach": "<p>Set up an integer sum with lower bounds $x_i\\ge 2$ for internal gaps, and shift variables.</p>",
    "solution": "<p>(a) The gaps sum to $n-m$. Internal gaps must be at least 1; end gaps may be zero. Subtract 1 from each of the $m-1$ internal gaps. The remaining nonnegative gap values sum to $n-2m+1$, so stars and bars gives $\\binom{n-m+1}{m}$ arrangements. Equivalently, place the working antennas first and choose which of their $n-m+1$ gaps receive a defective antenna.<br/>(b) Subtract 2 from each internal gap instead. The remaining total is $n-3m+2$ in $m+1$ gaps, so there are $\\binom{n-2m+2}{m}$ arrangements. If the remaining total is negative, there are no arrangements. For $m=0$, there is one all-working arrangement.</p>",
    "trap": "The outer gaps $x_1$ and $x_{m+1}$ can be 0, while the internal $m-1$ gaps must be at least 2.",
    "tests": [
      "c.prob.1.6.1",
      "c.prob.1.6.2"
    ],
    "provenance": "Ross, 10e, §1.6, Example 6d, PDF p. 29."
  },
  {
    "id": "w.prob.1.ross.prob.3",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Assigning workers to distinct jobs",
    "prompt": "<p>Twenty workers are to be assigned to 20 different jobs, with exactly one worker assigned to each job. How many different complete job assignments are possible?</p>",
    "approach": "<p>Count permutations of 20 distinct workers across the 20 distinct jobs.</p>",
    "solution": "<p>There are 20 choices for the worker assigned to job 1, 19 for job 2, and so on down to 1 choice for job 20. The total number of assignments is $20! = 2,432,902,008,176,640,000$.</p>",
    "trap": "Jobs and workers are both distinguishable, so this is a permutation, not a combination.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 3, PDF p. 31."
  },
  {
    "id": "w.prob.1.ross.prob.4",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Quartet instrument assignments with skill constraints",
    "prompt": "<p>Four musicians (John, Jim, Jay, and Jack) form a band with 4 distinct instruments. (a) If all 4 musicians can play all 4 instruments, how many instrument assignments are possible? (b) What if John and Jim can each play all 4 instruments, but Jay and Jack can only play piano and drums?</p>",
    "approach": "<p>For (a) arrange 4 people; for (b) assign the restricted musicians first to their allowed instruments.</p>",
    "solution": "<p>(a) With no restrictions, there are $4! = 24$ assignments. (b) Jay and Jack must occupy the piano and drums positions; there are $2! = 2$ ways to assign Jay and Jack to those two instruments. John and Jim must then take the remaining two instruments, which they can do in $2! = 2$ ways. By the basic principle, there are $2\\times 2 = 4$ valid assignments.</p>",
    "trap": "In (b), fulfill the tightest constraints first before assigning the versatile players.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 4, PDF p. 31."
  },
  {
    "id": "w.prob.1.ross.prob.5",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Three-digit telephone area code counts",
    "prompt": "<p>Historic telephone area codes in North America consisted of three digits: the first digit was an integer from 2 to 9, the second was either 0 or 1, and the third was an integer from 1 to 9. (a) How many area codes were possible? (b) How many area codes starting with the digit 4 were possible?</p>",
    "approach": "<p>Multiply the counts of allowed digits in each position.</p>",
    "solution": "<p>(a) The first digit has 8 choices (2 through 9), the second has 2 choices (0 or 1), and the third has 9 choices (1 through 9). The total count is $8\\times 2\\times 9 = 144$ area codes. (b) If the first digit is fixed to 4 (1 choice), there are $1\\times 2\\times 9 = 18$ area codes.</p>",
    "trap": "Note that the third digit pool excludes 0, spanning 1 through 9 (9 options).",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 5, PDF p. 31."
  },
  {
    "id": "w.prob.1.ross.prob.6",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Multiplicative branching in the St. Ives rhyme",
    "prompt": "<p>In the traditional nursery rhyme, a traveler meets a man with 7 wives; each wife has 7 sacks, each sack has 7 cats, and each cat has 7 kittens. How many kittens did the traveler encounter?</p>",
    "approach": "<p>Apply the generalized product rule to the branching structure.</p>",
    "solution": "<p>There are 7 wives $\\times 7$ sacks/wife $\\times 7$ cats/sack $\\times 7$ kittens/cat $= 7^4 = 2,401$ kittens.</p>",
    "trap": "Do not add 7 + 7 + 7 + 7; each level multiplies the preceding count.",
    "tests": [
      "c.prob.1.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 6, PDF p. 31."
  },
  {
    "id": "w.prob.1.ross.prob.7",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Row seating for boys and girls with block restrictions",
    "prompt": "<p>In how many ways can 3 boys and 3 girls sit in a row of 6 chairs if: (a) there are no restrictions? (b) boys must sit together and girls must sit together? (c) only the boys must sit together? (d) no two people of the same sex may sit next to each other?</p>",
    "approach": "<p>Use unit blocks for groups that must sit together and alternating slot structures for gender alternation.</p>",
    "solution": "<p>(a) $6! = 720$. (b) Treat all boys as one block and all girls as one block: 2 block orders, and $3!\\times 3!$ internal orders, giving $2\\times 3!\\times 3! = 2\\times 6\\times 6 = 72$. (c) Treat the 3 boys as 1 block together with the 3 individual girls (4 units total): $4!$ unit arrangements $\\times 3!$ boy internal orders gives $24\\times 6 = 144$. (d) To alternate sexes, the pattern must be BGBGBG or GBGBGB (2 choices). For either pattern, fill boy seats in $3!$ ways and girl seats in $3!$ ways: $2\\times 3!\\times 3! = 72$.</p>",
    "trap": "In (d), there are 2 starting genders (B or G); do not forget to multiply by 2.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 7(a–d), PDF p. 31."
  },
  {
    "id": "w.prob.1.ross.prob.8",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Letter arrangements with distinct and repeated characters",
    "prompt": "<p>Using all letters in each word, find the number of distinct letter arrangements for: (a) FLUKE, (b) PROPOSE, (c) MISSISSIPPI, and (d) ARRANGE.</p>",
    "approach": "<p>For each word, divide total factorial by factorials of character counts.</p>",
    "solution": "<p>(a) FLUKE has 5 distinct letters: $5! = 120$. (b) PROPOSE has 7 letters (P:2, O:2, R:1, S:1, E:1): $\\frac{7!}{2!\\,2!} = \\frac{5,040}{4} = 1,260$. (c) MISSISSIPPI has 11 letters (M:1, I:4, S:4, P:2): $\\frac{11!}{4!\\,4!\\,2!} = \\frac{39,916,800}{24\\times 24\\times 2} = 34,650$. (d) ARRANGE has 7 letters (A:2, R:2, N:1, G:1, E:1): $\\frac{7!}{2!\\,2!} = \\frac{5,040}{4} = 1,260$.</p>",
    "trap": "Carefully count duplicate letters in each string before computing factorials.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.1.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 8(a–d), PDF pp. 31–32."
  },
  {
    "id": "w.prob.1.ross.prob.9",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Arranging colored toy blocks in a line",
    "prompt": "<p>A child has 12 blocks: 6 black, 4 red, 1 white, and 1 blue. If blocks of the same color are indistinguishable, how many different linear arrangements can be formed?</p>",
    "approach": "<p>Apply the repeated-object permutation formula across the 4 color categories.</p>",
    "solution": "<p>There are 12 blocks in total with color frequencies 6, 4, 1, 1. The number of distinct linear sequences is $\\frac{12!}{6!\\,4!\\,1!\\,1!} = \\frac{479,001,600}{720\\times 24\\times 1\\times 1} = \\frac{479,001,600}{17,280} = 27,720$.</p>",
    "trap": "Include single-count colors in the multinomial denominator as 1!.",
    "tests": [
      "c.prob.1.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 9, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.10",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Eight-person row seating under various adjacency rules",
    "prompt": "<p>In how many ways can 8 people be seated in a row if: (a) there are no restrictions? (b) persons A and B must sit together? (c) 4 men and 4 women alternate gender? (d) 5 men and 3 women are seated with all 5 men together? (e) 4 married couples sit so that each couple sits together?</p>",
    "approach": "<p>Use block bundling for adjacent groups and pattern counts for alternating layouts.</p>",
    "solution": "<p>(a) $8! = 40,320$. (b) Bundle A and B as one unit: $7!\\times 2! = 5,040\\times 2 = 10,080$. (c) Gender alternation has 2 patterns (MFMFMFMF or FMFMFMFM); seating each gender in its 4 spots gives $2\\times 4!\\times 4! = 2\\times 24\\times 24 = 1,152$. (d) Bundle the 5 men into 1 unit with the 3 individual women (4 units total): $4!\\times 5! = 24\\times 120 = 2,880$. (e) Bundle each of the 4 couples into 1 unit: arrange the 4 couple units in $4!$ ways, and permute each couple internally in $2$ ways: $4!\\times 2^4 = 24\\times 16 = 384$.</p>",
    "trap": "In (e), every couple has 2 internal arrangements, contributing $2^4 = 16$.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 10(a–e), PDF pp. 32–33."
  },
  {
    "id": "w.prob.1.ross.prob.11",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Bookshelf arrangements with subject block constraints",
    "prompt": "<p>Six books (3 novels, 2 math books, and 1 chemistry book) are arranged on a shelf. How many arrangements are possible if: (a) books can be in any order? (b) math books must be together and novels must be together? (c) novels must be together, but math and chemistry books can be in any order?</p>",
    "approach": "<p>Group books that must stay together into single blocks.</p>",
    "solution": "<p>(a) $6! = 720$. (b) Treat the 3 novels as block N, the 2 math books as block M, and the 1 chemistry book as C. Arrange these 3 blocks in $3! = 6$ ways, then permute novels in $3! = 6$ ways and math books in $2! = 2$ ways: $3!\\times (3!\\times 2!\\times 1!) = 6\\times 12 = 72$. (c) Treat the 3 novels as 1 block alongside the 2 math and 1 chemistry individual books (4 units total). The count is $4!\\times 3! = 24\\times 6 = 144$.</p>",
    "trap": "In (c), chemistry and math books do not need to stay together; only novels are bound.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 11(a–c), PDF pp. 32–33."
  },
  {
    "id": "w.prob.1.ross.prob.12",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Three-digit strings with matching digits",
    "prompt": "<p>Consider 3-digit sequences $xyz$ where $x, y, z \\in \\{0, 1, \\ldots, 9\\}$. (a) How many have at least two of their digits equal? (b) How many have exactly two equal digits?</p>",
    "approach": "<p>Use complementary counting for at least two, and choose positions and values for exactly two.</p>",
    "solution": "<p>(a) Total 3-digit strings is $10^3 = 1,000$. The number of strings with all 3 digits distinct is $10\\times 9\\times 8 = 720$. Thus, strings with at least two equal digits number $1,000 - 720 = 280$. (b) Exactly two equal digits: choose the 2 positions for the duplicated digit in $\\binom{3}{2}=3$ ways, choose which digit appears twice (10 choices), and choose the remaining distinct digit from the other 9: $3\\times 10\\times 9 = 270$. (Notice $270 + 10 = 280$, where 10 strings have all 3 digits equal).</p>",
    "trap": "Do not forget that \"at least two equal\" includes the 10 strings where all three digits match.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 12, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.13",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Permutations of all lengths from the multiset MOTTO",
    "prompt": "<p>How many different letter arrangements of any length (from length 1 to length 5) can be formed using letters from the word MOTTO?</p>",
    "approach": "<p>The available multiset is $\\{M:1, O:2, T:2\\}$. Break down by word length and character multiplicity.</p>",
    "solution": "<p>Length 1: 3 choices (M, O, T).<br/>Length 2: 2 letters distinct gives $3\\times 2 = 6$; 2 identical letters (OO, TT) gives 2. Total for length 2 is $6 + 2 = 8$.<br/>Length 3: All 3 distinct (M,O,T) gives $3! = 6$. One pair plus 1 singleton: pick the paired letter in $\\binom{2}{1}=2$ ways (O or T), pick the other letter in $\\binom{2}{1}=2$ ways, and arrange in $\\frac{3!}{2!} = 3$ ways: $2\\times 2\\times 3 = 12$. Total for length 3 is $6 + 12 = 18$.<br/>Length 4: Two pairs (O,O,T,T) gives $\\frac{4!}{2!\\,2!} = 6$. One pair and two distinct (contains M): pair is O or T (2 choices), others are the remaining two letters, arranged in $\\frac{4!}{2!} = 12$ ways: $2\\times 12 = 24$. Total for length 4 is $6 + 24 = 30$.<br/>Length 5: Uses all 5 letters (M:1, O:2, T:2): $\\frac{5!}{2!\\,2!} = \\frac{120}{4} = 30$.<br/>Summing over all lengths gives $3 + 8 + 18 + 30 + 30 = 89$ distinct arrangements.</p>",
    "trap": "Remember that duplicate letters (OO and TT) reduce the permutation counts at lengths 2 through 5.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.1.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 13, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.14",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Assigning distinct awards to a student cohort",
    "prompt": "<p>Five distinct awards are to be presented to selected students from a class of 30. How many different award outcomes are possible if: (a) each student can receive any number of awards? (b) each student can receive at most 1 award?</p>",
    "approach": "<p>Each award is a distinct assignment. In (a) recipients can repeat; in (b) recipients cannot repeat.</p>",
    "solution": "<p>(a) With repetition allowed, each of the 5 awards can be independently given to any of the 30 students: $30^5 = 24,300,000$. (b) Without repetition, the first award has 30 recipients, the second 29, down to the fifth with 26: $30\\times 29\\times 28\\times 27\\times 26 = 17,100,720$.</p>",
    "trap": "The awards are distinct (e.g. math award, citizenship award), so position matters.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 14(a–b), PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.15",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Pairwise handshakes among twenty people",
    "prompt": "<p>In a room of 20 people, every person shakes hands with every other person exactly once. How many handshakes take place?</p>",
    "approach": "<p>Each handshake corresponds to an unordered pair of 2 distinct people.</p>",
    "solution": "<p>This is the number of 2-element subsets from 20 people: $\\binom{20}{2} = \\frac{20\\times 19}{2} = 190$ handshakes.</p>",
    "trap": "A shaking hands with B is the same handshake as B shaking hands with A; do not use $20\\times 19$.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 15, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.17",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Selecting and pairing male and female dancers",
    "prompt": "<p>A dance class has 10 women and 12 men. Five men and five women are to be chosen and then paired off as dancing couples. How many different paired partner outcomes are possible?</p>",
    "approach": "<p>Choose 5 women, choose 5 men, and then pair them in 5! ways.</p>",
    "solution": "<p>First choose 5 women from 10 in $\\binom{10}{5} = \\frac{10\\times 9\\times 8\\times 7\\times 6}{120} = 252$ ways. Choose 5 men from 12 in $\\binom{12}{5} = \\frac{12\\times 11\\times 10\\times 9\\times 8}{120} = 792$ ways. Once chosen, line up the 5 women and pair them with the 5 men in $5! = 120$ ways. The total number of outcomes is $252\\times 792\\times 120 = 23,950,080$.</p>",
    "trap": "Do not stop at choosing the cohorts; they must also be paired off into dancing couples.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 17, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.18",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Selecting two books by discipline",
    "prompt": "<p>A student owns 6 math, 7 science, and 4 economics books (17 books total). If 2 books are selected to be sold, how many choices consist of: (a) both books on the same subject? (b) books on two different subjects?</p>",
    "approach": "<p>Sum combinations within subjects for (a); subtract (a) from total pairs for (b).</p>",
    "solution": "<p>(a) Same subject: choose 2 math in $\\binom{6}{2}=15$, 2 science in $\\binom{7}{2}=21$, or 2 econ in $\\binom{4}{2}=6$ ways: $15 + 21 + 6 = 42$. (b) Total ways to choose any 2 books from 17 is $\\binom{17}{2} = \\frac{17\\times 16}{2} = 136$. Subtracting same-subject pairs gives $136 - 42 = 94$ different-subject selections (or $6\\times 7 + 6\\times 4 + 7\\times 4 = 42 + 24 + 28 = 94$).</p>",
    "trap": "The categories are mutually exclusive, so simply add individual subject combinations.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 18(a–b), PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.19",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Distributing distinct gifts with at-most-one constraint",
    "prompt": "<p>Seven distinct gifts are to be distributed among 10 children so that no child receives more than one gift. How many different gift distributions are possible?</p>",
    "approach": "<p>Assign the 7 distinct gifts to 7 distinct children chosen from 10.</p>",
    "solution": "<p>Gift 1 can go to any of 10 children, gift 2 to any of the remaining 9, and so on down to gift 7 with 4 choices. This is the falling factorial $P(10, 7) = 10\\times 9\\times 8\\times 7\\times 6\\times 5\\times 4 = 604,800$. Equivalently, choose 7 children in $\\binom{10}{7}=120$ ways and assign gifts in $7!=5,040$ ways: $120\\times 5,040 = 604,800$.</p>",
    "trap": "Children and gifts are distinct, so the order of gift assignments to children matters.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 19, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.20",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Bipartisan committee selection by party quotas",
    "prompt": "<p>A committee of 7 (2 Republicans, 2 Democrats, and 3 Independents) is to be chosen from a pool of 5 Republicans, 6 Democrats, and 4 Independents. How many committees are possible?</p>",
    "approach": "<p>Multiply the independent combination choices from each party group.</p>",
    "solution": "<p>Choose 2 Republicans from 5 in $\\binom{5}{2}=10$ ways; 2 Democrats from 6 in $\\binom{6}{2}=15$ ways; and 3 Independents from 4 in $\\binom{4}{3}=4$ ways. By the product rule, there are $10\\times 15\\times 4 = 600$ possible committees.</p>",
    "trap": "Selections within each party are unordered; do not multiply by internal factorials.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 20, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.21",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Committee with interpersonal feuds across gender groups",
    "prompt": "<p>A committee of 3 women and 3 men is to be selected from 8 women and 6 men. How many committees can be formed if: (a) 2 specified men refuse to serve together? (b) 2 specified women refuse to serve together? (c) 1 specified man and 1 specified woman refuse to serve together?</p>",
    "approach": "<p>Subtract committees containing the forbidden conflicting pairs.</p>",
    "solution": "<p>Unconstrained committees: $\\binom{8}{3}\\binom{6}{3} = 56\\times 20 = 1,120$. (a) Forbidden male groups contain the 2 feuding men plus 1 other ($\\binom{4}{1}=4$), leaving $20 - 4 = 16$ male groups: $56\\times 16 = 896$. (b) Forbidden female groups contain the 2 feuding women plus 1 other ($\\binom{6}{1}=6$), leaving $56 - 6 = 50$ female groups: $50\\times 20 = 1,000$. (c) Forbidden joint committees contain the feuding man AND the feuding woman: choose 2 remaining men in $\\binom{5}{2}=10$ ways and 2 remaining women in $\\binom{7}{2}=21$ ways, giving $10\\times 21 = 210$ forbidden committees. Thus $1,120 - 210 = 910$ committees.</p>",
    "trap": "In (c), the feud is cross-gender, so forbidden combinations require selecting both specified individuals.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 21(a–c), PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.22",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Party invitations under friend compatibility rules",
    "prompt": "<p>A host has 8 friends and will invite 5 to a dinner party. (a) How many invitation sets are possible if 2 friends are feuding and will not attend together? (b) How many if 2 friends will attend only if both are invited together?</p>",
    "approach": "<p>Total combinations is $\\binom{8}{5}=56$. Partition or subtract the restricted cases.</p>",
    "solution": "<p>(a) The 2 feuding friends attend together if we invite both plus 3 of the other 6 friends: $\\binom{6}{3} = 20$. Subtracting this forbidden case gives $56 - 20 = 36$ valid invitation sets. (b) The paired friends either both attend (choose 3 more from 6 in $\\binom{6}{3}=20$ ways) or neither attends (choose all 5 from the other 6 in $\\binom{6}{5}=6$ ways). Total is $20 + 6 = 26$ valid sets.</p>",
    "trap": "In (b), \"together or not at all\" includes the case where neither is invited.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 22(a–b), PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.23",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Lattice paths from origin to destination",
    "prompt": "<p>On a rectangular grid, a path begins at point A and terminates at point B by taking only steps of one unit right or one unit up. If reaching B from A requires exactly 4 steps right and 3 steps up (7 steps in total), how many different paths are possible?</p>",
    "approach": "<p>Encode paths as 7-step sequences and choose the positions of the right moves.</p>",
    "solution": "<p>Every path consists of 7 moves, exactly 4 of which are Right (R) and 3 Up (U). Any choice of the 4 step positions out of 7 for R uniquely determines the path. Hence there are $\\binom{7}{4} = \\frac{7\\times 6\\times 5}{6} = 35$ paths.</p>",
    "trap": "Lattice paths only move in allowed directions; no backtracking is permitted.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 23, PDF p. 32."
  },
  {
    "id": "w.prob.1.ross.prob.24",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Lattice paths routed through an intermediate waypoint",
    "prompt": "<p>In Problem 23 (4 steps right, 3 steps up from A to B), suppose a specific intersection C is located 2 steps right and 2 steps up from A. How many paths from A to B pass through C?</p>",
    "approach": "<p>Multiply the path counts for segment A-to-C and segment C-to-B.</p>",
    "solution": "<p>From A to C requires 2 right and 2 up (4 moves): $\\binom{4}{2} = 6$ paths. From C to B requires the remaining 2 right and 1 up (3 moves): $\\binom{3}{2} = 3$ paths. By the multiplication principle, the number of paths passing through C is $6\\times 3 = 18$.</p>",
    "trap": "The stages are in series: path A-to-C followed by C-to-B, so multiply their counts.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 24, PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.25",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Room and bed assignments for three twin pairs",
    "prompt": "<p>A laboratory has 3 distinct bedrooms, each containing 2 distinct beds (6 beds total). Three pairs of twins are to be assigned so that each twin pair shares the same bedroom, but in different beds. How many complete assignments are possible?</p>",
    "approach": "<p>Assign twin pairs to rooms first, then assign twins within each room to beds.</p>",
    "solution": "<p>First, assign the 3 twin pairs to the 3 labeled rooms in $3! = 6$ ways. Within each room, the 2 twins can be assigned to the 2 distinct beds in $2! = 2$ ways. Across all three rooms, bed assignments yield $2\\times 2\\times 2 = 8$ choices. By the product rule, there are $6\\times 8 = 48$ assignments.</p>",
    "trap": "Beds are distinct within each room, which doubles possibilities in each bedroom.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 25, PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.26",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Binomial identity proofs via substitution",
    "prompt": "<p>(a) Show that $\\sum_{k=0}^n \\binom{n}{k} 2^k = 3^n$. (b) Simplify $\\sum_{k=0}^n \\binom{n}{k} x^k$.</p>",
    "approach": "<p>Apply the binomial expansion $(1+y)^n = \\sum_{k=0}^n \\binom{n}{k} y^k$.</p>",
    "solution": "<p>(a) Set $x=2$ and $y=1$ in the binomial theorem $(x+y)^n = \\sum_{k=0}^n \\binom{n}{k} x^k y^{n-k}$. Then $(2+1)^n = \\sum_{k=0}^n \\binom{n}{k} 2^k 1^{n-k}$, which simplifies immediately to $\\sum_{k=0}^n \\binom{n}{k} 2^k = 3^n$. (b) Similarly, setting $y=1$ yields $\\sum_{k=0}^n \\binom{n}{k} x^k = (1+x)^n$.</p>",
    "trap": "Do not attempt an induction when a direct one-line substitution into $(1+x)^n$ suffices.",
    "tests": [
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 26(a–b), PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.27",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Binomial expansion of a mixed power polynomial",
    "prompt": "<p>Expand $(3x^2 + y)^5$ using the binomial theorem.</p>",
    "approach": "<p>Apply the binomial expansion with first term $a=3x^2$ and second term $b=y$.</p>",
    "solution": "<p>By the binomial theorem, $(3x^2+y)^5 = \\sum_{k=0}^5 \\binom{5}{k} (3x^2)^k y^{5-k}$. Evaluating terms: $k=0: y^5$; $k=1: 5(3x^2)y^4 = 15x^2y^4$; $k=2: 10(9x^4)y^3 = 90x^4y^3$; $k=3: 10(27x^6)y^2 = 270x^6y^2$; $k=4: 5(81x^8)y = 405x^8y$; $k=5: (243x^{10}) = 243x^{10}$. Combining: $243x^{10} + 405x^8y + 270x^6y^2 + 90x^4y^3 + 15x^2y^4 + y^5$.</p>",
    "trap": "Raise both the coefficient 3 and variable $x^2$ to the power $k$.",
    "tests": [
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 27, PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.28",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Total number of four-player bridge deals",
    "prompt": "<p>In a game of bridge, a standard 52-card deck is dealt equally to 4 distinct players (North, South, East, West), each receiving 13 cards. How many different bridge deals are possible?</p>",
    "approach": "<p>Evaluate the multinomial coefficient for dividing 52 distinct cards into 4 labeled hands of size 13.</p>",
    "solution": "<p>Because players have distinct seats (labeled hands), the count is given by the multinomial coefficient $\\binom{52}{13, 13, 13, 13} = \\frac{52!}{(13!)^4} \\approx 5.364\\times 10^{28}$.</p>",
    "trap": "Players occupy labeled table positions, so do not divide by $4!$.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 28, PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.31",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Teacher allocation among four schools",
    "prompt": "<p>Eight newly hired teachers are to be assigned to 4 schools. (a) How many assignments are possible if there are no restrictions on school sizes? (b) How many if each school must receive exactly 2 teachers?</p>",
    "approach": "<p>In (a) each teacher chooses a school; in (b) divide into 4 labeled groups of 2.</p>",
    "solution": "<p>(a) Each of the 8 teachers can be sent to any of the 4 schools independently, giving $4^8 = 65,536$ assignments. (b) If each school gets 2 teachers, this is a labeled group division: $\\binom{8}{2, 2, 2, 2} = \\frac{8!}{(2!)^4} = \\frac{40,320}{16} = 2,520$.</p>",
    "trap": "Schools are labeled entities, so assignments of equal size are distinguished by school identity.",
    "tests": [
      "c.prob.1.2.2",
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 31, PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.32",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Weightlifting standings by country and national place quotas",
    "prompt": "<p>Ten lifters compete: 3 US, 4 Russia, 2 China, 1 Canada. The score sheet records only nationalities in rank order. (a) How many score outcomes are possible? (b) How many outcomes place 1 US lifter in the top 3 and 2 US lifters in the bottom 3?</p>",
    "approach": "<p>For (a) use repeated permutations; for (b) position US lifters first, then arrange other nations.</p>",
    "solution": "<p>(a) Nationalities order count: $\\frac{10!}{3!\\,4!\\,2!\\,1!} = \\frac{3,628,800}{6\\times 24\\times 2\\times 1} = 12,600$. (b) The US has 3 lifters. Choose 1 position among ranks 1..3 in $\\binom{3}{1}=3$ ways, and 2 positions among ranks 8..10 in $\\binom{3}{2}=3$ ways. The remaining 7 spots are filled by Russia (4), China (2), Canada (1) in $\\frac{7!}{4!\\,2!\\,1!} = \\frac{5,040}{24\\times 2} = 105$ ways. Multiplying gives $3\\times 3\\times 105 = 945$ outcomes.</p>",
    "trap": "Remember to choose the specific positions within the top 3 and bottom 3.",
    "tests": [
      "c.prob.1.3.2",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 32, PDF p. 33."
  },
  {
    "id": "w.prob.1.ross.prob.33",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Row seating with positive and negative neighbor constraints",
    "prompt": "<p>Ten international delegates (including France, England, Russia, and the United States) sit in a row. How many seating arrangements place the French and English delegates next to each other, but the Russian and US delegates NOT next to each other?</p>",
    "approach": "<p>Bundle French and English as a single unit, then subtract cases where Russian and US delegates are also adjacent.</p>",
    "solution": "<p>First bundle (F,E) into 1 unit. There are 9 units, with $9!\\times 2! = 725,760$ arrangements having F and E adjacent. From these, subtract arrangements where (R,U) are also adjacent. Treating (F,E) and (R,U) each as a unit leaves 8 units: $8!\\times 2!\\times 2! = 40,320\\times 4 = 161,280$. The number of valid arrangements is $725,760 - 161,280 = 564,480$ (equivalently $8!(18 - 4) = 14\\times 40,320 = 564,480$).</p>",
    "trap": "Do not forget internal order factors of 2! for both the (F,E) and (R,U) pairs.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 33, PDF p. 34."
  },
  {
    "id": "w.prob.1.ross.prob.35",
    "course": "prob",
    "sec": "1.6",
    "marks": 5,
    "title": "Elevator passenger discharge counts",
    "prompt": "<p>An elevator starts at the basement with 8 passengers and unloads them all on floors 1 through 6. (a) In how many ways can passengers exit if the operator sees all passengers as indistinguishable? (b) How many if the passengers consist of 5 men and 3 women, and the operator distinguishes men from women?</p>",
    "approach": "<p>Use stars and bars for nonnegative distributions to 6 floors.</p>",
    "solution": "<p>(a) Let $x_i\\ge 0$ be the number of people exiting on floor $i$ ($i=1..6$), with $x_1+\\cdots+x_6=8$. By stars and bars, there are $\\binom{8+6-1}{6-1} = \\binom{13}{5} = \\frac{13\\times 12\\times 11\\times 10\\times 9}{120} = 1,287$ discharge profiles. (b) Distribute 5 men among 6 floors in $\\binom{5+6-1}{5} = \\binom{10}{5} = 252$ ways, and 3 women among 6 floors in $\\binom{3+6-1}{5} = \\binom{8}{5} = 56$ ways. By the product rule, there are $252\\times 56 = 14,112$ perceived patterns.</p>",
    "trap": "In (b), men and women are independent allocation subproblems; multiply their solutions.",
    "tests": [
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 35, PDF p. 34."
  },
  {
    "id": "w.prob.1.ross.prob.36",
    "course": "prob",
    "sec": "1.6",
    "marks": 5,
    "title": "Capital allocation across at least three opportunities",
    "prompt": "Invest all 20,000 dollars in whole units of 1,000 dollars across four opportunities. If an opportunity receives money, its minimum is respectively 2, 2, 3, or 4 units. Count strategies when (a) all four opportunities receive money; (b) at least three receive money.",
    "approach": "<p>Sum strategies investing in all 4 with strategies investing in exactly 3.</p>",
    "solution": "<p>(a) All 4 invested: min sum is $2+2+3+4=11$, leaving 9 units for 4 opportunities: $\\binom{9+4-1}{3} = \\binom{12}{3} = 220$.<br/>(b) To count at least 3, add the all-four case to the exactly-three cases. Exactly 3 invested: 4 mutually exclusive cases depending on which opportunity receives 0:<br/>- Omit 1 (min 2): required $2+3+4=9$, remaining 11 in 3 opportunities: $\\binom{11+3-1}{2} = \\binom{13}{2} = 78$.<br/>- Omit 2 (min 2): required $2+3+4=9$, remaining 11 in 3 opportunities: $\\binom{13}{2} = 78$.<br/>- Omit 3 (min 3): required $2+2+4=8$, remaining 12 in 3 opportunities: $\\binom{12+3-1}{2} = \\binom{14}{2} = 91$.<br/>- Omit 4 (min 4): required $2+2+3=7$, remaining 13 in 3 opportunities: $\\binom{13+3-1}{2} = \\binom{15}{2} = 105$.<br/>Sum of exactly 3 cases is $78 + 78 + 91 + 105 = 352$.<br/>Adding all 4 yields $220 + 352 = 572$ investment strategies.</p>",
    "trap": "Each \"omit one\" case has a different minimum sum, so each must be calculated separately.",
    "tests": [
      "c.prob.1.6.1",
      "c.prob.1.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 36(a–b), PDF p. 34."
  },
  {
    "id": "w.prob.1.ross.prob.37",
    "course": "prob",
    "sec": "1.6",
    "marks": 5,
    "title": "Lake catch composition with trout constraints",
    "prompt": "Ten fish are caught from a lake with five types of fish, one type being trout. We record only how many of each type were caught. Count records when (a) there is no restriction; (b) exactly three fish are trout; (c) at least two are trout.",
    "approach": "<p>Apply stars and bars; for (b) fix trout count, for (c) shift trout variable.</p>",
    "solution": "(a) Let $x_i$ be the count of type $i$. The five nonnegative counts add to 10. Stars and bars gives $\\binom{10+5-1}{5-1}=\\binom{14}4=1001$. (b) Set the trout count to 3. The other four counts add to 7, giving $\\binom{7+4-1}{4-1}=\\binom{10}3=120$. (c) Reserve two trout and let the remaining eight fish be of any of the five types. The adjusted five counts add to 8, giving $\\binom{8+5-1}{5-1}=\\binom{12}4=495$. Each adjusted record corresponds to exactly one original record, so no record is counted twice.",
    "trap": "The source has five fish types, not four, and asks for three trout in part (b). Count records of type totals, not orders of individual catches.",
    "tests": [
      "c.prob.1.6.1",
      "c.prob.1.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Problem 37(a–c), PDF p. 34."
  },
  {
    "id": "w.prob.1.ross.theo.1",
    "course": "prob",
    "sec": "1.2",
    "marks": 5,
    "title": "Inductive proof of the generalized counting principle",
    "prompt": "<p>Prove the generalized basic principle of counting: If $r$ sequential experiments are performed such that experiment 1 has $n_1$ outcomes, and for each outcome of the first $i-1$ experiments, experiment $i$ has $n_i$ outcomes, then there are $n_1 n_2 \\cdots n_r$ complete outcomes.</p>",
    "approach": "<p>Apply mathematical induction on the number of stages $r$, collapsing the first $r-1$ experiments into a single composite experiment.</p>",
    "solution": "<p>Proceed by mathematical induction on $r$. For $r=2$, the basic principle shows there are $n_1 n_2$ outcomes. Assume the result holds for $r-1$ experiments; that is, the composite experiment of the first $r-1$ stages produces $N = n_1 n_2 \\cdots n_{r-1}$ outcomes. Viewing this compound stage as experiment A with $N$ outcomes and stage $r$ as experiment B (having $n_r$ outcomes for each outcome of A), the basic principle of two experiments gives $N\\times n_r = (n_1 n_2 \\cdots n_{r-1}) n_r = \\prod_{i=1}^r n_i$. By induction, the principle holds for all integers $r\\ge 2$.</p>",
    "trap": "Ensure the induction step verifies that the number of stage-r options remains constant regardless of which history occurred.",
    "tests": [
      "c.prob.1.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 1, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.2",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Summing branch sizes in variable-continuation experiments",
    "prompt": "<p>A two-stage experiment is performed. The first experiment results in any of $m$ possible outcomes $1, 2, \\ldots, m$. If the first experiment yields outcome $i$, the second experiment can yield any of $n_i$ possible outcomes ($i=1, 2, \\ldots, m$). What is the total number of possible complete outcomes of the two experiments?</p>",
    "approach": "<p>Enumerate outcomes as ordered pairs $(i, j)$ and partition by the first coordinate.</p>",
    "solution": "<p>Every complete outcome is an ordered pair $(i, j)$ where $i\\in\\{1, \\ldots, m\\}$ and $j\\in\\{1, \\ldots, n_i\\}$. Because the outcomes for distinct first-stage results $i$ are disjoint sets of pairs, the total number of outcomes is the sum of the sizes of these disjoint sets: $\\sum_{i=1}^m n_i$. (When all $n_i=n$, this reduces to $mn$, the basic counting principle).</p>",
    "trap": "Do not multiply when continuation set sizes vary; sum the individual branch sizes.",
    "tests": [
      "c.prob.1.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 2, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.3",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Ordered selection formula from first principles",
    "prompt": "<p>In how many ways can $r$ objects be selected from a set of $n$ distinct objects when the order in which the objects are selected is considered relevant ($0\\le r\\le n$)? Derive the formula.</p>",
    "approach": "<p>Count sequential choices without replacement across $r$ positions.</p>",
    "solution": "<p>The selection consists of $r$ consecutive stages. The first object can be chosen in $n$ ways. For each such choice, the second object can be chosen in $n-1$ ways, and so on. At stage $k$ ($1\\le k\\le r$), exactly $k-1$ objects have already been selected, leaving $n-(k-1) = n-k+1$ choices. By the generalized basic counting principle, the number of ordered selections is $n(n-1)(n-2)\\cdots(n-r+1) = \\frac{n!}{(n-r)!}$.</p>",
    "trap": "The final factor is $n-r+1$, not $n-r$.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 3, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.4",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Combinatorial interpretation of two-color linear arrangements",
    "prompt": "<p>Explain combinatorially why there are exactly $\\binom{n}{r}$ different linear arrangements of $n$ balls of which $r$ are black and $n-r$ are white, where balls of the same color are indistinguishable.</p>",
    "approach": "<p>Relate each linear arrangement to a subset choice of positions.</p>",
    "solution": "<p>There are $n$ available positions in a line. Because all $r$ black balls look identical and all $n-r$ white balls look identical, an arrangement is completely and uniquely determined once we specify which $r$ of the $n$ positions are occupied by the black balls (the remaining $n-r$ positions must then be filled with white balls). The number of ways to choose $r$ positions from $n$ distinct positions without regard to order is $\\binom{n}{r}$.</p>",
    "trap": "Do not distinguish balls of the same color; their internal permutations produce identical lines.",
    "tests": [
      "c.prob.1.3.2",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 4, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.5",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Binary vectors with bounded coordinate sum",
    "prompt": "<p>Determine the number of vectors $(x_1, x_2, \\ldots, x_n)$ such that each $x_i\\in\\{0, 1\\}$ and $\\sum_{i=1}^n x_i \\ge k$, where $0\\le k\\le n$.</p>",
    "approach": "<p>Partition vectors by their exact sum $i$ from $k$ to $n$.</p>",
    "solution": "<p>A binary vector $(x_1, \\ldots, x_n)$ with $\\sum x_i = i$ corresponds to choosing exactly $i$ coordinates among the $n$ to equal 1 (the remaining $n-i$ coordinates must be 0). There are $\\binom{n}{i}$ such vectors. Because vectors with different sums are disjoint, the number of vectors with sum at least $k$ is $\\sum_{i=k}^n \\binom{n}{i}$.</p>",
    "trap": "The lower limit of the sum is $k$, not 0.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 5, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.6",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Counting strictly increasing integer sequences",
    "prompt": "<p>How many vectors $(x_1, x_2, \\ldots, x_k)$ are there for which each $x_i$ is an integer such that $1\\le x_1 < x_2 < \\cdots < x_k \\le n$?</p>",
    "approach": "<p>Establish a one-to-one correspondence between increasing sequences and subsets.</p>",
    "solution": "<p>Every strictly increasing sequence of $k$ integers $x_1 < x_2 < \\cdots < x_k$ from $\\{1, 2, \\ldots, n\\}$ corresponds to a unique $k$-element subset of $\\{1, 2, \\ldots, n\\}$ (since any subset of $k$ distinct numbers can be arranged in strictly increasing order in exactly one way). Conversely, every subset of size $k$ uniquely defines one such increasing sequence. Therefore, there are exactly $\\binom{n}{k}$ such vectors.</p>",
    "trap": "Because the order is strictly fixed by inequality, there is no $k!$ permutation factor.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 6, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.7",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Analytic proof of Pascal identity",
    "prompt": "<p>Give an analytic proof using factorials that $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$ for $1\\le r\\le n$.</p>",
    "approach": "<p>Express the terms in factorials and combine over a common denominator.</p>",
    "solution": "<p>Write the right side in factorial form: $\\binom{n-1}{r-1} + \\binom{n-1}{r} = \\frac{(n-1)!}{(r-1)!(n-r)!} + \\frac{(n-1)!}{r!(n-1-r)!}$. Find a common denominator of $r!(n-r)!$: multiply the first term by $r/r$ and the second by $(n-r)/(n-r)$. This gives $\\frac{r(n-1)!}{r!(n-r)!} + \\frac{(n-r)(n-1)!}{r!(n-r)!} = \\frac{[r + (n-r)](n-1)!}{r!(n-r)!} = \\frac{n(n-1)!}{r!(n-r)!} = \\frac{n!}{r!(n-r)!} = \\binom{n}{r}$.</p>",
    "trap": "Carefully track $(n-1-r)!\\times (n-r) = (n-r)!$ in the second term.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 7, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.8",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Vandermonde convolution identity",
    "prompt": "<p>Prove Vandermonde’s convolution identity: $\\binom{n+m}{r} = \\sum_{k=0}^r \\binom{n}{k} \\binom{m}{r-k}$ for nonnegative integers $n, m, r$ with $r\\le n+m$.</p>",
    "approach": "<p>Count committees of size $r$ from a group of $n$ men and $m$ women.</p>",
    "solution": "<p>Consider a group consisting of $n$ men and $m$ women, total size $n+m$. The total number of ways to choose a committee of size $r$ from this group is $\\binom{n+m}{r}$. On the other hand, we can partition all such committees according to $k$, the number of men chosen ($0\\le k\\le r$). For a fixed $k$, there are $\\binom{n}{k}$ ways to select the $k$ men and $\\binom{m}{r-k}$ ways to select the remaining $r-k$ women. Because these cases are mutually exclusive and exhaustive across $k=0, 1, \\ldots, r$, summing gives $\\binom{n+m}{r} = \\sum_{k=0}^r \\binom{n}{k} \\binom{m}{r-k}$.</p>",
    "trap": "Sum indices range from 0 to $r$; terms with $k > n$ or $r-k > m$ vanish by convention.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 8, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.9",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Sum of squares of binomial coefficients",
    "prompt": "<p>Use Vandermonde’s identity to prove that $\\sum_{k=0}^n \\binom{n}{k}^2 = \\binom{2n}{n}$.</p>",
    "approach": "<p>Set $m=n$ and $r=n$ in Vandermonde’s identity and apply binomial symmetry.</p>",
    "solution": "<p>In Vandermonde’s identity $\\binom{n+m}{r} = \\sum_{k=0}^r \\binom{n}{k}\\binom{m}{r-k}$, set $m=n$ and $r=n$. This yields $\\binom{2n}{n} = \\sum_{k=0}^n \\binom{n}{k}\\binom{n}{n-k}$. By symmetry of the binomial coefficients, $\\binom{n}{n-k} = \\binom{n}{k}$. Substituting gives $\\binom{2n}{n} = \\sum_{k=0}^n \\binom{n}{k}\\binom{n}{k} = \\sum_{k=0}^n \\binom{n}{k}^2$.</p>",
    "trap": "Remember that $\\binom{n}{n-k} = \\binom{n}{k}$ is the identity converting the product to a square.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 9, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.10",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Committee-chair identity via three counting arguments",
    "prompt": "<p>From $n$ people, a committee of size $k$ ($1\\le k\\le n$) with one designated chair is to be chosen. (a) By choosing committee then chair, show count is $k\\binom{n}{k}$. (b) By choosing non-chairs then chair, show count is $(n-k+1)\\binom{n}{k-1}$. (c) By choosing chair then others, show count is $n\\binom{n-1}{k-1}$. (d) Conclude the algebraic equality of these three expressions. (e) Verify analytically.</p>",
    "approach": "<p>Count chaired committees from three different orders of decision.</p>",
    "solution": "<p>(a) Choose $k$ people in $\\binom{n}{k}$ ways, then pick 1 of the $k$ members as chair in $k$ ways: $k\\binom{n}{k}$.<br/>(b) Choose the $k-1$ non-chair members in $\\binom{n}{k-1}$ ways, then pick the chair from the remaining $n-(k-1) = n-k+1$ people: $(n-k+1)\\binom{n}{k-1}$.<br/>(c) Choose the chair first in $n$ ways, then choose the remaining $k-1$ members from the other $n-1$ people: $n\\binom{n-1}{k-1}$.<br/>(d) Because all three methods count the same set of chaired committees, $k\\binom{n}{k} = (n-k+1)\\binom{n}{k-1} = n\\binom{n-1}{k-1}$.<br/>(e) Analytically, $k\\binom{n}{k} = k\\frac{n!}{k!(n-k)!} = \\frac{n!}{(k-1)!(n-k)!} = n\\frac{(n-1)!}{(k-1)![(n-1)-(k-1)]!} = n\\binom{n-1}{k-1}$. Also $(n-k+1)\\binom{n}{k-1} = (n-k+1)\\frac{n!}{(k-1)!(n-k+1)!} = \\frac{n!}{(k-1)!(n-k)!} = k\\binom{n}{k}$.</p>",
    "trap": "Non-chair selection leaves $n-(k-1) = n-k+1$ candidates for the chair position.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 10(a–e), PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.11",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Fermat combinatorial identity via maximal element partition",
    "prompt": "<p>Give a combinatorial argument to prove Fermat’s combinatorial identity: $\\binom{n}{k} = \\sum_{i=k}^n \\binom{i-1}{k-1}$ for $n\\ge k$.</p>",
    "approach": "<p>Partition $k$-element subsets of $\\{1, \\ldots, n\\}$ by their maximum element $i$.</p>",
    "solution": "<p>Consider all $\\binom{n}{k}$ subsets of size $k$ chosen from $\\{1, 2, \\ldots, n\\}$. Partition these subsets according to their largest element, denoted by $i$. Since the subset has size $k$, its largest element $i$ must be at least $k$, so $i\\in\\{k, k+1, \\ldots, n\\}$. If the largest element is $i$, the remaining $k-1$ elements must be chosen from the $i-1$ integers $\\{1, 2, \\ldots, i-1\\}$, which can be done in $\\binom{i-1}{k-1}$ ways. Summing over all possible values of $i$ partitions all subsets, establishing $\\binom{n}{k} = \\sum_{i=k}^n \\binom{i-1}{k-1}$.</p>",
    "trap": "The largest element $i$ is fixed, leaving $k-1$ elements to choose from the strictly smaller numbers.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 11, PDF p. 35."
  },
  {
    "id": "w.prob.1.ross.theo.12",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Binomial coefficient moment identities",
    "prompt": "<p>(a) Combinatorially prove $\\sum_{k=1}^n k\\binom{n}{k} = n 2^{n-1}$. (b) Verify for $n=1,2,3,4,5$, then prove combinatorially that $\\sum_{k=1}^n k^2\\binom{n}{k} = n(n+1) 2^{n-2}$ by considering committees with a chair and secretary. (c) Argue that $\\sum_{k=1}^n k^3\\binom{n}{k} = n^2(n+3)2^{n-3}$.</p>",
    "approach": "<p>Count committees with designated officers in two different ways.</p>",
    "solution": "<p>(a) Consider choosing a committee of any size $k\\ge 1$ from $n$ people with a designated chairperson. Left side: choose a committee of size $k$ in $\\binom{n}{k}$ ways and pick its chair in $k$ ways, summing over $k$. Right side: choose the chairperson in $n$ ways, then each of the remaining $n-1$ people independently chooses whether to join the committee, giving $n 2^{n-1}$ ways.<br/>(b) For $n=1,2,3,4,5$, direct summation of $k^2\\binom nk$ gives $1,6,24,80,240$, respectively, matching $n(n+1)2^{n-2}$ in each case. Count selections of a committee, a chair, and a secretary (chair and secretary may be the same person). Left side: for fixed size $k$, $\\binom{n}{k}$ committees $\\times k$ chair choices $\\times k$ secretary choices $= k^2\\binom{n}{k}$. Right side: Case 1 (chair = secretary): $n 2^{n-1}$ ways by (a). Case 2 (chair $\\ne$ secretary): choose chair in $n$ ways, secretary in $n-1$ ways, and remaining members in $2^{n-2}$ ways, giving $n(n-1)2^{n-2}$. Adding: $n 2^{n-1} + n(n-1)2^{n-2} = n 2^{n-2}(2 + n - 1) = n(n+1)2^{n-2}$.<br/>(c) Similarly, for chair, secretary, and treasurer (up to 3 distinct roles): when all 3 same ($n 2^{n-1}$), 2 distinct ($3 n(n-1)2^{n-2}$), all 3 distinct ($n(n-1)(n-2)2^{n-3}$). Summing gives $n 2^{n-3}[4 + 6(n-1) + (n-1)(n-2)] = n 2^{n-3}[n^2 + 3n] = n^2(n+3)2^{n-3}$.</p>",
    "trap": "When counting officers, explicitly account for cases where multiple offices are held by the same person.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 12(a–c), PDF pp. 35–36."
  },
  {
    "id": "w.prob.1.ross.theo.13",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Vanishing alternating binomial sum",
    "prompt": "<p>Show that for $n > 0$, $\\sum_{i=0}^n (-1)^i \\binom{n}{i} = 0$.</p>",
    "approach": "<p>Substitute $x=-1$ and $y=1$ into the binomial theorem expansion.</p>",
    "solution": "<p>By the binomial theorem, $(x+y)^n = \\sum_{i=0}^n \\binom{n}{i} x^i y^{n-i}$. Set $x = -1$ and $y = 1$. Then the left-hand side is $(-1 + 1)^n = 0^n = 0$ for any $n > 0$. The right-hand side becomes $\\sum_{i=0}^n \\binom{n}{i} (-1)^i 1^{n-i} = \\sum_{i=0}^n (-1)^i \\binom{n}{i}$. Hence $\\sum_{i=0}^n (-1)^i \\binom{n}{i} = 0$.</p>",
    "trap": "The result requires $n > 0$; for $n=0$ the sum equals $0^0 = 1$.",
    "tests": [
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 13, PDF p. 36."
  },
  {
    "id": "w.prob.1.ross.theo.14",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Nested committee double counting identities",
    "prompt": "<p>From $n$ people, choose a committee of size $j$ and from it a subcommittee of size $i$ ($i\\le j\\le n$). (a) Show $\\binom{n}{j}\\binom{j}{i} = \\binom{n}{i}\\binom{n-i}{j-i}$. (b) Prove $\\sum_{j=i}^n \\binom{n}{j}\\binom{j}{i} = \\binom{n}{i} 2^{n-i}$. (c) Prove $\\sum_{j=i}^n \\binom{n}{j}\\binom{j}{i} (-1)^{n-j} = 0$ for $i < n$.</p>",
    "approach": "<p>Count nested pairs (subcommittee, committee) from two directions, then sum over committee sizes.</p>",
    "solution": "<p>(a) Choose the committee of size $j$ in $\\binom{n}{j}$ ways, then the subcommittee of size $i$ from it in $\\binom{j}{i}$ ways. Equivalently, choose the subcommittee of size $i$ from all $n$ people first in $\\binom{n}{i}$ ways, then choose the remaining $j-i$ committee members from the other $n-i$ people in $\\binom{n-i}{j-i}$ ways. Both count the same nested pairs, so $\\binom{n}{j}\\binom{j}{i} = \\binom{n}{i}\\binom{n-i}{j-i}$.<br/>(b) Sum both sides over $j=i,\\ldots,n$: $\\sum_{j=i}^n \\binom{n}{j}\\binom{j}{i} = \\binom{n}{i}\\sum_{j=i}^n \\binom{n-i}{j-i}$. Let $k=j-i$; the inner sum is $\\sum_{k=0}^{n-i}\\binom{n-i}{k} = 2^{n-i}$, yielding $\\binom{n}{i} 2^{n-i}$.<br/>(c) Similarly, $\\sum_{j=i}^n \\binom{n}{j}\\binom{j}{i}(-1)^{n-j} = \\binom{n}{i}\\sum_{k=0}^{n-i}\\binom{n-i}{k}(-1)^{(n-i)-k} = \\binom{n}{i}(1 - 1)^{n-i} = 0$ since $n-i > 0$.</p>",
    "trap": "The index shift $k=j-i$ simplifies the variable sum to $(1\\pm 1)^{n-i}$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 14(a–c), PDF p. 36."
  },
  {
    "id": "w.prob.1.ross.theo.15",
    "course": "prob",
    "sec": "1.6",
    "marks": 5,
    "title": "Weakly increasing integer tuples recurrence",
    "prompt": "<p>Let $H_k(n)$ be the number of integer vectors $(x_1, \\ldots, x_k)$ such that $1\\le x_1 \\le x_2 \\le \\cdots \\le x_k \\le n$. (a) Argue that $H_1(n) = n$ and $H_k(n) = \\sum_{j=1}^n H_{k-1}(j)$ for $k > 1$. (b) Use the recursion to compute $H_3(5)$.</p>",
    "approach": "<p>Condition on the value of the last coordinate $x_k = j$.</p>",
    "solution": "<p>(a) For $k=1$, $1\\le x_1\\le n$ has $n$ values, so $H_1(n)=n$. For $k>1$, condition on the value of $x_k = j$, which can be any integer from 1 to $n$. Once $x_k=j$ is fixed, the preceding $k-1$ coordinates must satisfy $1\\le x_1\\le\\cdots\\le x_{k-1}\\le j$, which has $H_{k-1}(j)$ solutions by definition. Summing over $j=1,\\ldots,n$ gives $H_k(n) = \\sum_{j=1}^n H_{k-1}(j)$.<br/>(b) Compute $H_2(j) = \\sum_{i=1}^j i = \\frac{j(j+1)}{2}$ for $j=1..5$: $H_2(1)=1, H_2(2)=3, H_2(3)=6, H_2(4)=10, H_2(5)=15$. Then $H_3(5) = \\sum_{j=1}^5 H_2(j) = 1 + 3 + 6 + 10 + 15 = 35$. (Note: combinatorially $H_k(n) = \\binom{n+k-1}{k} = \\binom{5+3-1}{3} = \\binom{7}{3} = 35$).</p>",
    "trap": "Weakly increasing sequences allow equal consecutive elements, distinguishing them from combinations without replacement.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 15(a–b), PDF p. 36."
  },
  {
    "id": "w.prob.1.ross.theo.16",
    "course": "prob",
    "sec": "1.5",
    "marks": 5,
    "title": "Tournament outcomes with ties recurrence",
    "prompt": "<p>In an $n$-player contest where ties are allowed, outcomes partition players into ordered tie-blocks. Let $N(n)$ denote the number of outcomes. (a) List all outcomes for $n=3$. (b) Argue that $N(n) = \\sum_{i=1}^n \\binom{n}{i} N(n-i)$ with $N(0)=1$. (c) Show $N(n) = \\sum_{i=0}^{n-1} \\binom{n}{i} N(i)$. (d) Compute $N(3)$ and $N(4)$.</p>",
    "approach": "<p>Condition on the number of contestants $i$ sharing the final ranking block.</p>",
    "solution": "<p>(a) For players A, B, C, use $>$ for a higher placing and parentheses for a tie. The six strict outcomes are A>B>C, A>C>B, B>A>C, B>C>A, C>A>B, C>B>A. The six two-block outcomes are (AB)>C, C>(AB), (AC)>B, B>(AC), (BC)>A, A>(BC). The final outcome is (ABC), a three-way tie. Thus there are 13 outcomes.<br/>(b) Condition on the number of players $i$ who tie for last place ($1\\le i\\le n$). There are $\\binom{n}{i}$ ways to choose these $i$ last-place players, and the remaining $n-i$ players can finish in any of $N(n-i)$ configurations among the higher ranks. Summing over $i=1,\\ldots,n$ gives $N(n) = \\sum_{i=1}^n \\binom{n}{i} N(n-i)$.<br/>(c) Substituting index $j = n-i$ gives $\\binom{n}{n-j} = \\binom{n}{j}$, so $N(n) = \\sum_{j=0}^{n-1} \\binom{n}{j} N(j)$.<br/>(d) $N(0)=1, N(1)=1, N(2)=3$. Then $N(3) = \\binom{3}{0}N(0) + \\binom{3}{1}N(1) + \\binom{3}{2}N(2) = 1(1) + 3(1) + 3(3) = 1 + 3 + 9 = 13$. For $n=4$: $N(4) = \\binom{4}{0}(1) + \\binom{4}{1}(1) + \\binom{4}{2}(3) + \\binom{4}{3}(13) = 1 + 4 + 18 + 52 = 75$.</p>",
    "trap": "The base case is $N(0)=1$, representing the empty contest with one trivial configuration.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 16(a–d), PDF pp. 36–37."
  },
  {
    "id": "w.prob.1.ross.theo.17",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Binomial coefficient as a two-cell multinomial",
    "prompt": "<p>Present a combinatorial explanation of why $\\binom{n}{r} = \\binom{n}{r, n-r}$.</p>",
    "approach": "<p>Show that choosing a subset partitions the universe into included and excluded blocks.</p>",
    "solution": "<p>Choosing a subset of $r$ objects from a set of $n$ distinct objects automatically partitions the $n$ objects into two labeled groups: Group 1 consisting of the $r$ selected items, and Group 2 consisting of the $n-r$ non-selected items. By definition of multinomial coefficients, dividing $n$ items into two labeled groups of sizes $r$ and $n-r$ has count $\\binom{n}{r, n-r} = \\frac{n!}{r!(n-r)!}$, which is precisely the formula for $\\binom{n}{r}$.</p>",
    "trap": "The two groups are labeled (\"selected\" vs \"unselected\"), so no $2!$ division applies.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 17, PDF p. 37."
  },
  {
    "id": "w.prob.1.ross.theo.18",
    "course": "prob",
    "sec": "1.5",
    "marks": 5,
    "title": "Multinomial recurrence by element tracking",
    "prompt": "<p>Argue combinatorially that $\\binom{n}{n_1, n_2, \\ldots, n_r} = \\sum_{i=1}^r \\binom{n-1}{n_1, \\ldots, n_i-1, \\ldots, n_r}$ where $\\sum_{i=1}^r n_i = n$.</p>",
    "approach": "<p>Track the group destination of one designated element.</p>",
    "solution": "<p>Consider dividing $n$ distinct items into $r$ labeled groups of sizes $n_1, \\ldots, n_r$. Focus on one particular item, say item 1. In any valid division, item 1 must be placed into exactly one of the $r$ groups. If item 1 is placed into group $i$, then group $i$ now requires only $n_i-1$ more items, while all other groups $j\\ne i$ still require $n_j$ items from the remaining $n-1$ objects. There are $\\binom{n-1}{n_1, \\ldots, n_i-1, \\ldots, n_r}$ such divisions. Because placing item 1 into group 1, group 2, ..., or group $r$ are mutually exclusive and exhaustive alternatives, summing over $i=1,\\ldots,r$ gives the identity.</p>",
    "trap": "Only the chosen group size $n_i$ decreases by 1; all other group sizes remain unchanged.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 18, PDF p. 37."
  },
  {
    "id": "w.prob.1.ross.theo.19",
    "course": "prob",
    "sec": "1.5",
    "marks": 5,
    "title": "Proof of the multinomial theorem",
    "prompt": "<p>Prove the multinomial theorem: $(x_1 + x_2 + \\cdots + x_r)^n = \\sum_{n_1+\\cdots+n_r=n} \\binom{n}{n_1, \\ldots, n_r} x_1^{n_1} \\cdots x_r^{n_r}$.</p>",
    "approach": "<p>Expand the product by choosing one term from each factor and group equal monomials.</p>",
    "solution": "<p>The product $(x_1 + \\cdots + x_r)^n$ is the product of $n$ identical factors $(x_1 + \\cdots + x_r)$. When expanded by distributivity, each term in the sum is formed by choosing one variable $x_j$ from each of the $n$ factors, producing a monomial of the form $x_1^{n_1} x_2^{n_2} \\cdots x_r^{n_r}$ where $n_1 + n_2 + \\cdots + n_r = n$. The coefficient of this monomial is the number of ways to choose $n_1$ factors to contribute $x_1$, $n_2$ factors to contribute $x_2$, ..., and $n_r$ factors to contribute $x_r$ out of the $n$ factors. This is precisely the number of divisions of $n$ factors into $r$ labeled groups of sizes $n_1, \\ldots, n_r$, which is the multinomial coefficient $\\binom{n}{n_1, \\ldots, n_r}$. Summing over all nonnegative integer partitions completes the proof.</p>",
    "trap": "The summation ranges over all compositions of $n$ into $r$ nonnegative integers.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 19, PDF p. 37."
  },
  {
    "id": "w.prob.1.ross.theo.20",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Ball allocation with individual minimum capacities",
    "prompt": "<p>In how many ways can $n$ identical balls be distributed into $r$ distinct urns so that the $i$th urn contains at least $m_i$ balls ($i=1, \\ldots, r$), assuming $n \\ge \\sum_{i=1}^r m_i$?</p>",
    "approach": "<p>Shift variables $y_i = x_i - m_i \\ge 0$ to reduce to standard nonnegative stars and bars.</p>",
    "solution": "<p>Let $x_i$ be the number of balls placed in urn $i$. We seek the number of integer solutions to $x_1 + \\cdots + x_r = n$ with $x_i \\ge m_i$. Make the change of variables $y_i = x_i - m_i$. Then $y_i \\ge 0$ are nonnegative integers, and their sum is $\\sum_{i=1}^r y_i = \\sum_{i=1}^r x_i - \\sum_{i=1}^r m_i = n - \\sum_{i=1}^r m_i$. By Proposition 6.2 (stars and bars for nonnegative integers), the number of solutions is $\\binom{(n - \\sum m_i) + r - 1}{r - 1}$.</p>",
    "trap": "The right-hand side shifts by the sum of all individual lower bounds $\\sum m_i$.",
    "tests": [
      "c.prob.1.6.1",
      "c.prob.1.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 20, PDF p. 37."
  },
  {
    "id": "w.prob.1.ross.theo.21",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Integer solutions with exactly k zero components",
    "prompt": "<p>Argue that there are exactly $\\binom{r}{k} \\binom{n-1}{r-k-1}$ nonnegative integer solutions to $x_1 + x_2 + \\cdots + x_r = n$ for which exactly $k$ of the $x_i$ are equal to 0 ($0\\le k < r$).</p>",
    "approach": "<p>Choose the zero coordinates first, then apply positive integer stars and bars to the remaining variables.</p>",
    "solution": "<p>First, choose which $k$ of the $r$ variables are equal to 0 in $\\binom{r}{k}$ ways. The remaining $r-k$ variables must be strictly positive integers ($x_j \\ge 1$) and must sum to $n$. By Proposition 6.1 (positive integer solutions of a sum of $r-k$ variables equal to $n$), there are $\\binom{n-1}{(r-k)-1} = \\binom{n-1}{r-k-1}$ solutions. By the multiplication principle, the total number of solutions is $\\binom{r}{k} \\binom{n-1}{r-k-1}$.</p>",
    "trap": "The remaining $r-k$ variables must be strictly positive ($\\ge 1$), not nonnegative.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 21, PDF p. 37."
  },
  {
    "id": "w.prob.1.ross.theo.22",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Higher order partial derivatives count via stars and bars",
    "prompt": "<p>A function $f(x_1, \\ldots, x_n)$ has continuous partial derivatives of all orders. How many different partial derivatives of order $r$ does $f$ possess?</p>",
    "approach": "<p>Equate the count to nonnegative integer exponent vectors summing to $r$.</p>",
    "solution": "<p>By Clairaut’s theorem on equality of mixed partials, the order of differentiation does not matter; a partial derivative of order $r$ is completely determined by the number of times differentiation is performed with respect to each variable $x_i$. Let $k_i\\ge 0$ be the order of derivative taken with respect to $x_i$. Then $k_1 + k_2 + \\cdots + k_n = r$. By stars and bars, the number of nonnegative integer solutions is $\\binom{r + n - 1}{n - 1} = \\binom{r + n - 1}{r}$.</p>",
    "trap": "Continuous partials commute, so distinct derivatives correspond to frequency tuples, not permutations.",
    "tests": [
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 22, PDF p. 37."
  },
  {
    "id": "w.prob.1.ross.theo.23",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Nonnegative integer solutions to an inequality constraint",
    "prompt": "<p>Determine the number of vectors $(x_1, \\ldots, x_n)$ such that each $x_i$ is a nonnegative integer and $\\sum_{i=1}^n x_i \\le k$.</p>",
    "approach": "<p>Convert the inequality to an equality by adding a nonnegative slack variable.</p>",
    "solution": "<p>Introduce a nonnegative slack integer variable $x_{n+1} = k - \\sum_{i=1}^n x_i \\ge 0$. Then the inequality $\\sum_{i=1}^n x_i \\le k$ is equivalent to the equality $\\sum_{i=1}^{n+1} x_i = k$ in $n+1$ nonnegative integers $x_1, \\ldots, x_{n+1}$. By stars and bars, the number of nonnegative solutions is $\\binom{k + (n+1) - 1}{(n+1) - 1} = \\binom{k + n}{n}$.</p>",
    "trap": "The slack variable increases the number of variables to $n+1$, giving denominator $n$ in the combination.",
    "tests": [
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Theoretical Exercise 23, PDF p. 37."
  },
  {
    "id": "w.prob.1.ross.selftest.1",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Arrangements of six letters under positional restrictions",
    "prompt": "<p>How many linear arrangements of the six distinct letters A, B, C, D, E, F satisfy each of the following conditions: (a) A and B are adjacent? (b) A precedes B? (c) A precedes B and B precedes C? (d) A precedes B and C precedes D? (e) A and B are adjacent, and C and D are adjacent? (f) E is not the last letter in the arrangement?</p>",
    "approach": "<p>Use block bundling for adjacency and combinatorial symmetry for relative order restrictions.</p>",
    "solution": "<p>(a) Treat (AB) as a single block. There are 5 blocks with $5!\\times 2! = 120\\times 2 = 240$ arrangements.<br/>(b) By symmetry, A precedes B in exactly half of all $6!$ permutations: $720/2 = 360$.<br/>(c) The letters A, B, C have $3!=6$ equally likely relative orders; exactly 1 is A-B-C: $720/6 = 120$.<br/>(d) The orderings of {A, B} and {C, D} are independent disjoint pairs. The proportion satisfying both is $(1/2)\\times(1/2) = 1/4$: $720/4 = 180$.<br/>(e) Treat (AB) and (CD) as two blocks. There are 4 items: $4!\\times 2!\\times 2! = 24\\times 4 = 96$ arrangements.<br/>(f) E can be placed in any of the first 5 spots, with the other 5 letters arranged in $5!$ ways: $5\\times 5! = 600$ (or $6! - 5! = 720 - 120 = 600$).</p>",
    "trap": "In (d), the pairs are disjoint, so their relative order constraints multiply independently.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 1(a–f), PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.2",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Seating by nationality blocks",
    "prompt": "<p>Four Americans, three French people, and three British people are to be seated in a row of 10 chairs. How many seating arrangements are possible if people of the same nationality must sit next to each other?</p>",
    "approach": "<p>Arrange the 3 nationality blocks, then permute the individuals within each block.</p>",
    "solution": "<p>There are 3 distinct nationality groups (American, French, British). The 3 blocks can be arranged along the row in $3! = 6$ ways. Within their respective blocks, the 4 Americans can be seated in $4! = 24$ ways, the 3 French in $3! = 6$ ways, and the 3 British in $3! = 6$ ways. By the generalized basic principle of counting, the total number of arrangements is $3!\\times 4!\\times 3!\\times 3! = 6\\times 24\\times 6\\times 6 = 5,184$.</p>",
    "trap": "Do not forget to permute the 3 nationality blocks relative to one another.",
    "tests": [
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 2, PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.3",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Electing club officers with personal constraints",
    "prompt": "<p>A president, treasurer, and secretary (all distinct individuals) are to be chosen from a club of 10 people. How many choices are possible if: (a) there are no restrictions? (b) A and B refuse to serve together? (c) C and D will serve together or not at all? (d) E must hold one of the offices? (e) F will serve only if elected president?</p>",
    "approach": "<p>Compute permutations $P(10, 3)$ and partition or subtract forbidden configurations.</p>",
    "solution": "<p>(a) Ordered selection of 3 from 10: $P(10, 3) = 10\\times 9\\times 8 = 720$.<br/>(b) Subtract committees where both A and B serve. There are $3\\times 2 = 6$ ways to assign offices to A and B, and 8 choices for the remaining office: $6\\times 8 = 48$. Valid outcomes: $720 - 48 = 672$.<br/>(c) Both C and D serve in $3\\times 2\\times 8 = 48$ ways. Neither serves in $P(8, 3) = 8\\times 7\\times 6 = 336$ ways. Total: $48 + 336 = 384$.<br/>(d) E can take any of the 3 offices, with the other 2 offices filled from the remaining 9 people: $3\\times 9\\times 8 = 216$.<br/>(e) If F is president, the other 2 offices are filled from the other 9 people in $9\\times 8 = 72$ ways. If F is not an officer, all 3 offices are filled from the other 9 people in $9\\times 8\\times 7 = 504$ ways. Total: $72 + 504 = 576$.</p>",
    "trap": "In (c), \"together or not at all\" includes the case where neither C nor D is elected.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 3(a–e), PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.4",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Examination question selection with part quotas",
    "prompt": "<p>A student must answer 7 out of 10 questions on an examination. (a) How many selections of 7 questions can she make? (b) How many choices if she must answer at least 3 of the first 5 questions?</p>",
    "approach": "<p>Compute $\\binom{10}{7}$ for (a); partition by the number of questions answered from the first 5 for (b).</p>",
    "solution": "<p>(a) Total selections: $\\binom{10}{7} = \\binom{10}{3} = \\frac{10\\times 9\\times 8}{6} = 120$.<br/>(b) The first 5 questions form one group, the remaining 5 form the second group. The student can answer 3, 4, or 5 from the first group:<br/>- 3 from first 5 and 4 from last 5: $\\binom{5}{3}\\binom{5}{4} = 10\\times 5 = 50$.<br/>- 4 from first 5 and 3 from last 5: $\\binom{5}{4}\\binom{5}{3} = 5\\times 10 = 50$.<br/>- 5 from first 5 and 2 from last 5: $\\binom{5}{5}\\binom{5}{2} = 1\\times 10 = 10$.<br/>Summing gives $50 + 50 + 10 = 110$ choices (equivalently $120 - \\binom{5}{2}\\binom{5}{5} = 120 - 10 = 110$).</p>",
    "trap": "Remember that choosing $k$ from the first 5 requires choosing $7-k$ from the last 5.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 4, PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.5",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Dividing gifts among children with designated shares",
    "prompt": "<p>In how many ways can a parent divide 7 distinct gifts among 3 children if the eldest child receives 3 gifts and the other two children receive 2 gifts each?</p>",
    "approach": "<p>Use the multinomial coefficient for dividing 7 distinct objects into labeled shares of 3, 2, and 2.</p>",
    "solution": "<p>Because the children are distinct individuals (eldest, second, third), this is a labeled group partition. The number of ways is given by the multinomial coefficient $\\binom{7}{3, 2, 2} = \\frac{7!}{3!\\,2!\\,2!} = \\frac{5,040}{6\\times 2\\times 2} = 210$.</p>",
    "trap": "The children have distinct identities; do not divide by $2!$ for the two children receiving 2 gifts each.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 5, PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.6",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "License plates with flexible letter and digit positions",
    "prompt": "<p>A seven-character license plate contains 3 letters and 4 digits. If letters and digits may be placed in any positions, and repetitions of characters are permitted, how many distinct license plates are possible?</p>",
    "approach": "<p>Choose the 3 letter positions, then fill each character slot independently.</p>",
    "solution": "<p>First choose which 3 of the 7 positions will be occupied by letters: $\\binom{7}{3} = 35$ ways. The remaining 4 positions are automatically digits. With 26 letters and 10 digits available and repetition allowed, the 3 letter positions can be filled in $26^3$ ways, and the 4 digit positions in $10^4$ ways. The total number of plates is $\\binom{7}{3}\\times 26^3\\times 10^4 = 35\\times 17,576\\times 10,000 = 6,151,600,000$.</p>",
    "trap": "Do not assume letters must precede digits; position choice $\\binom{7}{3}$ is required.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 6, PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.7",
    "course": "prob",
    "sec": "1.4",
    "marks": 3,
    "title": "Combinatorial explanation of binomial symmetry",
    "prompt": "<p>Provide a combinatorial explanation for the identity $\\binom{n}{r} = \\binom{n}{n-r}$.</p>",
    "approach": "<p>Establish a bijection between subsets and their complements.</p>",
    "solution": "<p>Selecting a subset of $r$ objects to include from a set of $n$ distinct elements uniquely specifies the complementary subset of $n-r$ objects that are excluded. Because every selection of $r$ items corresponds bijectively to exactly one selection of $n-r$ non-selected items, the number of ways to choose $r$ items must equal the number of ways to choose $n-r$ items. Thus $\\binom{n}{r} = \\binom{n}{n-r}$.</p>",
    "trap": "State the bijection explicitly: choosing what to take is identical to choosing what to leave behind.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 7, PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.8",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Digit strings with adjacency and zero-frequency rules",
    "prompt": "<p>Consider $n$-digit strings formed from the digits $\\{0, 1, \\ldots, 9\\}$. How many such strings satisfy: (a) no two consecutive digits are equal? (b) the digit 0 appears exactly $i$ times ($0\\le i\\le n$)?</p>",
    "approach": "<p>For (a) apply conditional choices sequentially; for (b) choose zero positions and fill non-zero slots.</p>",
    "solution": "<p>(a) The first digit can be any of the 10 digits. Each subsequent digit can be any of the 9 digits different from the immediately preceding digit. Thus there are $10\\times 9^{n-1}$ strings.<br/>(b) Choose which $i$ of the $n$ positions contain 0 in $\\binom{n}{i}$ ways. Each of the remaining $n-i$ positions must be chosen from the 9 non-zero digits $\\{1, \\ldots, 9\\}$ in $9^{n-i}$ ways. The total number of strings is $\\binom{n}{i} 9^{n-i}$.</p>",
    "trap": "In (a), only the immediately adjacent previous digit is forbidden, giving 9 choices for each step after the first.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 8(a–b), PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.9",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Three-class student cohort decomposition identity",
    "prompt": "<p>Three separate classes each contain $n$ students ($3n$ students in total). A group of 3 students is to be selected. (a) How many total selections are possible? (b) How many have all 3 students from the same class? (c) How many have 2 students from one class and 1 from another? (d) How many have all 3 from different classes? (e) State the resulting combinatorial identity.</p>",
    "approach": "<p>Partition total selections $\\binom{3n}{3}$ into class-membership patterns.</p>",
    "solution": "<p>(a) Total selections: $\\binom{3n}{3}$.<br/>(b) All 3 from same class: choose the class in 3 ways, then 3 students from it in $\\binom{n}{3}$ ways: $3\\binom{n}{3}$.<br/>(c) Two from one class, one from another: choose the pair's class in 3 ways, select 2 students in $\\binom{n}{2}$ ways, then choose 1 student from the remaining $2n$ students in $2n$ ways: $3\\times\\binom{n}{2}\\times 2n = 6n\\binom{n}{2}$.<br/>(d) One from each class: $n\\times n\\times n = n^3$.<br/>(e) Because these three scenarios partition all possible 3-student subsets, we obtain the identity: $\\binom{3n}{3} = 3\\binom{n}{3} + 6n\\binom{n}{2} + n^3$.</p>",
    "trap": "In (c), remember that the singleton student can come from either of the two remaining classes ($2n$ candidates).",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 9(a–e), PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.10",
    "course": "prob",
    "sec": "1.3",
    "marks": 5,
    "title": "Five-digit sequences with at most two duplicates per digit",
    "prompt": "<p>How many 5-digit numbers can be formed from the digits $\\{1, 2, \\ldots, 9\\}$ if no digit appears more than twice?</p>",
    "approach": "<p>Subtract invalid patterns (digits appearing 3, 4, or 5 times) from total sequences $9^5$, or sum valid partition types.</p>",
    "solution": "<p>Direct decomposition of valid frequency types for 5 digits:<br/>1. All 5 digits distinct: $P(9, 5) = 9\\times 8\\times 7\\times 6\\times 5 = 15,120$.<br/>2. One pair and 3 singles (pattern 2,1,1,1): choose pair digit in 9 ways, choose 2 of its positions in $\\binom{5}{2}=10$ ways, and fill the other 3 positions with distinct digits from 8 in $P(8, 3) = 8\\times 7\\times 6 = 336$ ways: $9\\times 10\\times 336 = 30,240$.<br/>3. Two pairs and 1 single (pattern 2,2,1): choose 2 paired digits in $\\binom{9}{2}=36$ ways, choose single digit from 7 in 7 ways, and arrange the multiset in $\\frac{5!}{2!\\,2!} = 30$ ways: $36\\times 7\\times 30 = 7,560$.<br/>Summing gives $15,120 + 30,240 + 7,560 = 52,920$ valid numbers.<br/>(Check by complement: total $9^5 = 59,049$. Invalid patterns: 5-of-a-kind $= 9$; 4-of-a-kind $= 9\\times 5\\times 8 = 360$; full house (3,2) $= 9\\times 10\\times 8 = 720$; triple and 2 singles (3,1,1) $= 9\\times 10\\times 56 = 5,040$. Sum of invalid $= 6,129$, and $59,049 - 6,129 = 52,920$).</p>",
    "trap": "Do not double-count pair roles when choosing two pairs: use $\\binom{9}{2}$, not $9\\times 8$.",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 10, PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.11",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Couple-free cohort selections",
    "prompt": "<p>From 10 married couples (20 people), a group of 6 people is to be selected such that no married couple is included. (a) How many choices are possible? (b) How many choices if the group must consist of 3 men and 3 women?</p>",
    "approach": "<p>Choose 6 distinct couples, then select spouses from those couples.</p>",
    "solution": "<p>(a) Choose 6 distinct couples from the 10 couples in $\\binom{10}{6} = 210$ ways. From each selected couple, choose 1 of the 2 spouses in $2^6 = 64$ ways. Total: $210\\times 64 = 13,440$.<br/>(b) If the group has 3 men and 3 women: choose 3 couples from 10 to supply the men in $\\binom{10}{3} = 120$ ways. From the remaining 7 couples, choose 3 couples to supply the women in $\\binom{7}{3} = 35$ ways. Total: $120\\times 35 = 4,200$.</p>",
    "trap": "In (b), the women must be drawn from couples not already contributing a man to avoid couples.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 11(a–b), PDF p. 38."
  },
  {
    "id": "w.prob.1.ross.selftest.12",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Committee gender minimum constraints",
    "prompt": "<p>A committee of 6 people is to be chosen from 7 men and 8 women. If the committee must contain at least 3 women and at least 2 men, how many different committees can be formed?</p>",
    "approach": "<p>Partition committees by valid gender splits summing to 6.</p>",
    "solution": "<p>The committee size is 6. With $\\ge 3$ women and $\\ge 2$ men, the only valid compositions are:<br/>- 2 men and 4 women: $\\binom{7}{2}\\binom{8}{4} = 21\\times 70 = 1,470$.<br/>- 3 men and 3 women: $\\binom{7}{3}\\binom{8}{3} = 35\\times 56 = 1,960$.<br/>(Note: 4 men and 2 women fails the female requirement of at least 3 women). Summing the mutually exclusive cases gives $1,470 + 1,960 = 3,430$ committees.</p>",
    "trap": "Verify that both gender lower bounds ($\\ge 2$ men, $\\ge 3$ women) are satisfied simultaneously.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 12, PDF pp. 38–39."
  },
  {
    "id": "w.prob.1.ross.selftest.13",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Auction catalog acquisition profiles",
    "prompt": "<p>An art auction features 4 paintings by Dalí, 5 by van Gogh, and 6 by Picasso. Five collectors attend. If a reporter records only the total number of paintings by each artist acquired by each collector, how many complete auction outcome profiles are possible assuming all artworks are sold?</p>",
    "approach": "<p>Apply stars and bars independently to the indistinguishable paintings of each artist across the 5 collectors.</p>",
    "solution": "<p>Because the reporter records only counts per collector for each artist, paintings by the same artist are treated as indistinguishable items distributed among 5 distinct collectors:<br/>- 4 Dalís distributed among 5 collectors: $\\binom{4 + 5 - 1}{5 - 1} = \\binom{8}{4} = 70$.<br/>- 5 van Goghs distributed among 5 collectors: $\\binom{5 + 5 - 1}{5 - 1} = \\binom{9}{4} = 126$.<br/>- 6 Picassos distributed among 5 collectors: $\\binom{6 + 5 - 1}{5 - 1} = \\binom{10}{4} = 210$.<br/>By the basic principle of counting, the total number of outcome profiles is $70\\times 126\\times 210 = 1,852,200$.</p>",
    "trap": "The allocations for the three artists are independent stages; multiply their respective combinations.",
    "tests": [
      "c.prob.1.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 13, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.14",
    "course": "prob",
    "sec": "1.6",
    "marks": 4,
    "title": "Positive integer solutions to a bounded sum inequality",
    "prompt": "<p>Determine the number of vectors $(x_1, \\ldots, x_n)$ of positive integers satisfying $\\sum_{i=1}^n x_i \\le k$, where $k\\ge n$.</p>",
    "approach": "<p>Add a nonnegative slack variable and transform to positive or standard stars and bars.</p>",
    "solution": "<p>Introduce a nonnegative slack integer $x_{n+1} = k - \\sum_{i=1}^n x_i \\ge 0$, converting the inequality to $\\sum_{i=1}^n x_i + x_{n+1} = k$ with $x_1, \\ldots, x_n \\ge 1$ and $x_{n+1} \\ge 0$. Let $y_i = x_i - 1 \\ge 0$ for $i=1, \\ldots, n$ and $y_{n+1} = x_{n+1} \\ge 0$. Then $\\sum_{i=1}^{n+1} y_i = k - n$ in $n+1$ nonnegative integers. By stars and bars, the number of solutions is $\\binom{(k - n) + (n+1) - 1}{(n+1) - 1} = \\binom{k}{n}$. (Equivalently, summing positive solutions for each total sum $s$ from $n$ to $k$ gives $\\sum_{s=n}^k \\binom{s-1}{n-1} = \\binom{k}{n}$).</p>",
    "trap": "The slack variable is nonnegative ($x_{n+1} \\ge 0$), while the original variables are strictly positive ($x_i \\ge 1$).",
    "tests": [
      "c.prob.1.6.1",
      "c.prob.1.6.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 14, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.15",
    "course": "prob",
    "sec": "1.3",
    "marks": 4,
    "title": "Ordered pass list outcomes on an actuarial exam",
    "prompt": "<p>A class of $n$ students sits for an actuarial probability exam. The posted results will list the names of only those students who passed, sorted in strictly decreasing order of score. Assuming all exam scores are distinct, how many different posted results are possible?</p>",
    "approach": "<p>Sum over all possible numbers of passing students $k$ and count ordered rankings.</p>",
    "solution": "<p>Let $k$ be the number of students who pass, where $k$ can be any integer from 0 to $n$. A posted result specifying $k$ passing students in rank order is an ordered sequence of $k$ distinct students chosen from $n$, which has $P(n, k) = \\frac{n!}{(n-k)!}$ possibilities. Summing over all possible values of $k$ yields $\\sum_{k=0}^n \\frac{n!}{(n-k)!} = n! \\sum_{j=0}^n \\frac{1}{j!}$. (When $k=0$, the result is the empty list, representing the single outcome where no one passes).</p>",
    "trap": "The list is ordered by score; do not omit the $k!$ permutation factor for the passing cohort.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 15, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.16",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Subsets intersecting a specified key set",
    "prompt": "<p>How many 4-element subsets of the set $S = \\{1, 2, \\ldots, 20\\}$ contain at least one element from $\\{1, 2, 3, 4, 5\\}$?</p>",
    "approach": "<p>Subtract subsets disjoint from the target set from the total number of 4-element subsets.</p>",
    "solution": "<p>The total number of 4-element subsets chosen from the 20 elements of $S$ is $\\binom{20}{4} = \\frac{20\\times 19\\times 18\\times 17}{24} = 4,845$. The subsets that contain NONE of the elements $\\{1, 2, 3, 4, 5\\}$ must be chosen entirely from the remaining $20 - 5 = 15$ elements, giving $\\binom{15}{4} = \\frac{15\\times 14\\times 13\\times 12}{24} = 1,365$. By the complement rule, the number of subsets containing at least one target element is $4,845 - 1,365 = 3,480$.</p>",
    "trap": "Direct casework with inclusion-exclusion is much slower than using the complement.",
    "tests": [
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 16, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.17",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Two-block partition identity for pairs",
    "prompt": "<p>Verify analytically and combinatorially that $\\binom{n}{2} = \\binom{k}{2} + k(n-k) + \\binom{n-k}{2}$ for $1\\le k\\le n$.</p>",
    "approach": "<p>Expand factorials algebraically and partition pairs by membership in two disjoint subsets of sizes $k$ and $n-k$.</p>",
    "solution": "<p>Analytic: $\\frac{k(k-1)}{2} + k(n-k) + \\frac{(n-k)(n-k-1)}{2} = \\frac{k^2 - k + 2kn - 2k^2 + n^2 - 2kn + k^2 - n + k}{2} = \\frac{n^2 - n}{2} = \\frac{n(n-1)}{2} = \\binom{n}{2}$.<br/>Combinatorial: Partition a set of $n$ people into group A of size $k$ and group B of size $n-k$. Choosing a pair of 2 people from all $n$ gives $\\binom{n}{2}$ total pairs. Every chosen pair falls into one of three disjoint cases: (1) both from group A: $\\binom{k}{2}$; (2) one from group A and one from group B: $k(n-k)$; (3) both from group B: $\\binom{n-k}{2}$. Summing establishes the identity.</p>",
    "trap": "Algebraic terms $2kn - 2kn$ and $k - k$ cancel exactly, leaving $n(n-1)/2$.",
    "tests": [
      "c.prob.1.4.1",
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 17, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.18",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Parent-child selection from diverse family structures",
    "prompt": "<p>A neighborhood has 3 families with 1 parent and 1 child, 3 families with 1 parent and 2 children, 5 families with 2 parents and 1 child, 7 families with 2 parents and 2 children, and 6 families with 2 parents and 3 children. In how many ways can one parent and one child from the same family be chosen?</p>",
    "approach": "<p>Sum the number of parent-child pairs contributed by each family category.</p>",
    "solution": "<p>A family with $p$ parents and $c$ children produces $p\\times c$ parent-child pairs. We multiply by the number of families in each category:<br/>- 3 families of $(1, 1)$: $3\\times(1\\times 1) = 3$.<br/>- 3 families of $(1, 2)$: $3\\times(1\\times 2) = 6$.<br/>- 5 families of $(2, 1)$: $5\\times(2\\times 1) = 10$.<br/>- 7 families of $(2, 2)$: $7\\times(2\\times 2) = 28$.<br/>- 6 families of $(2, 3)$: $6\\times(2\\times 3) = 36$.<br/>Summing across all categories gives $3 + 6 + 10 + 28 + 36 = 83$ possible choices.</p>",
    "trap": "The pair must be from the same family, so calculate pairs within each family type rather than choosing parent and child globally.",
    "tests": [
      "c.prob.1.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 18, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.19",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "License plates with non-repeating characters and digit contiguity",
    "prompt": "<p>An 8-place license plate consists of 5 letters and 3 digits with no repeated letters and no repeated digits. (a) How many plates are possible if characters may appear in any order? (b) How many plates are possible if the 3 digits must appear consecutively?</p>",
    "approach": "<p>Use combinations for slot selection and permutations without replacement for character assignments.</p>",
    "solution": "<p>(a) Choose 5 of the 8 positions for letters in $\\binom{8}{5} = 56$ ways. Fill the letter slots with 5 non-repeating letters in $P(26, 5) = 26\\times 25\\times 24\\times 23\\times 22 = 7,893,600$ ways, and fill the 3 digit slots with non-repeating digits in $P(10, 3) = 10\\times 9\\times 8 = 720$ ways. Total: $56\\times 7,893,600\\times 720 = 318,267,801,600$.<br/>(b) Treat the 3 consecutive digit slots as a single block. In an 8-place string, a 3-slot block can begin at index 1, 2, 3, 4, 5, or 6 (6 possible locations). For any location, fill the 3 digit slots in $P(10, 3) = 720$ ways and the 5 letter slots in $P(26, 5) = 7,893,600$ ways. Total: $6\\times 720\\times 7,893,600 = 34,100,352,000$.</p>",
    "trap": "A length-3 consecutive subsegment in an 8-slot plate has $8 - 3 + 1 = 6$ possible starting positions.",
    "tests": [
      "c.prob.1.3.1",
      "c.prob.1.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 19, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.20",
    "course": "prob",
    "sec": "1.5",
    "marks": 5,
    "title": "Sum of multinomial coefficients over all compositions",
    "prompt": "<p>Verify that $\\sum_{x_1+\\cdots+x_r=n,\\, x_i\\ge 0} \\frac{n!}{x_1!\\,x_2!\\,\\cdots\\,x_r!} = r^n$: (a) combinatorially via letter sequences; (b) using the multinomial theorem.</p>",
    "approach": "<p>Count length-$n$ strings from an alphabet of size $r$, and apply the multinomial theorem with all variables equal to 1.</p>",
    "solution": "<p>(a) Consider all strings of length $n$ formed from an alphabet of $r$ distinct letters. By the product rule, there are $r^n$ total words. Partition these words by the count $x_i$ of times letter $i$ appears ($x_1+\\cdots+x_r=n$). For any fixed composition $(x_1, \\ldots, x_r)$, the number of words with these letter counts is the multinomial coefficient $\\binom{n}{x_1, \\ldots, x_r} = \\frac{n!}{x_1!\\cdots x_r!}$. Summing over all compositions yields $r^n$.<br/>(b) By the multinomial theorem, $(y_1 + \\cdots + y_r)^n = \\sum_{x_1+\\cdots+x_r=n} \\binom{n}{x_1, \\ldots, x_r} y_1^{x_1}\\cdots y_r^{x_r}$. Setting $y_1 = y_2 = \\cdots = y_r = 1$ immediately gives $(1 + \\cdots + 1)^n = r^n = \\sum_{x_1+\\cdots+x_r=n} \\frac{n!}{x_1!\\cdots x_r!}$.</p>",
    "trap": "Ensure the sum includes all compositions into nonnegative integers $x_i\\ge 0$.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 20(a–b), PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.selftest.21",
    "course": "prob",
    "sec": "1.4",
    "marks": 4,
    "title": "Evaluation of an alternating binomial sum",
    "prompt": "<p>Simplify the alternating sum $n - \\binom{n}{2} + \\binom{n}{3} - \\cdots + (-1)^{n+1}\\binom{n}{n}$.</p>",
    "approach": "<p>Relate the sum to the binomial expansion of $(1 - 1)^n$.</p>",
    "solution": "<p>Write the sum as $S = \\sum_{k=1}^n (-1)^{k+1} \\binom{n}{k} = - \\sum_{k=1}^n (-1)^k \\binom{n}{k}$. By the binomial theorem, $(1 - 1)^n = \\sum_{k=0}^n \\binom{n}{k} (-1)^k$. For $n\\ge 1$, $(1 - 1)^n = 0^n = 0$. Separating the $k=0$ term gives $0 = \\binom{n}{0} + \\sum_{k=1}^n (-1)^k \\binom{n}{k} = 1 - S$. Therefore $1 - S = 0$, which proves $S = 1$.</p>",
    "trap": "The sum starts at $k=1$ with a positive sign, so $S = 1 - (1-1)^n = 1$.",
    "tests": [
      "c.prob.1.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 1, Self-Test Problem 21, PDF p. 39."
  },
  {
    "id": "w.prob.1.ross.problem.1",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "License plates with position restrictions",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 1(a–b).</b> A plate has two letter positions followed by five digit positions. How many plates are possible if repetition is allowed? How many if letters cannot repeat among themselves and digits cannot repeat among themselves?</p>",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.2.2"
    ],
    "approach": "<p>Treat positions as successive choices. For the second count, the letter and digit pools each shrink independently.</p>",
    "solution": "<p>With repetition, the seven positions have 26, 26, 10, 10, 10, 10, 10 choices, so $26^2 10^5=67,600,000$.</p><p>Without repetition within each type, the count is $26\\cdot25\\cdot10\\cdot9\\cdot8\\cdot7\\cdot6=19,656,000$. Letters and digits are different pools, so a letter does not use up a digit.</p>",
    "trap": "Do not use a single falling factorial across the letter and digit pools; also do not assume “no repetition” means letters and digits cannot share the same symbol category.",
    "provenance": "Ross, 10e, Chapter 1, Problem 1; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.1.ross.problem.2",
    "course": "prob",
    "sec": "1.2",
    "marks": 4,
    "title": "Repeated die rolls as sequences",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 2.</b> A fair die is rolled four times. How many ordered outcome sequences are possible? How many sequences contain exactly two 6s?</p>",
    "tests": [
      "c.prob.1.2.1",
      "c.prob.1.4.1"
    ],
    "approach": "<p>Count all roll sequences by multiplication. For the constrained count, choose the two positions occupied by 6 and fill the other positions with non-6 faces.</p>",
    "solution": "<p>Each of four ordered rolls has six choices, giving $6^4=1296$ sequences. For exactly two 6s, choose their positions in $\\binom42=6$ ways, then fill the other two positions in $5^2$ ways. The count is $6\\cdot25=150$.</p>",
    "trap": "A sequence records roll order, so permutations of positions are distinct. The remaining two rolls must be non-6, giving five choices each.",
    "provenance": "Ross, 10e, Chapter 1, Problem 2; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.1.ross.problem.16",
    "course": "prob",
    "sec": "1.4",
    "marks": 5,
    "title": "Five-card hands",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 16.</b> How many five-card poker hands can be dealt from a standard 52-card deck?</p>",
    "tests": [
      "c.prob.1.4.1"
    ],
    "approach": "<p>A hand is a subset of five cards; the order in which cards are dealt does not change the hand.</p>",
    "solution": "<p>The count is $\\binom{52}{5}=\\frac{52!}{5!47!}=2,598,960$.</p>",
    "trap": "Using $52\\cdot51\\cdot50\\cdot49\\cdot48$ counts each hand in its 5! deal orders.",
    "provenance": "Ross, 10e, Chapter 1, Problem 16; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.1.ross.problem.29",
    "course": "prob",
    "sec": "1.5",
    "marks": 4,
    "title": "Expand a weighted three-term expression",
    "prompt": "Expand $(x_1+2x_2+3x_3)^4$. Explain how the coefficient of each term is counted.",
    "tests": [
      "c.prob.1.5.1"
    ],
    "approach": "<p>The exponents specify how many factors contribute each variable. Multiply the multinomial coefficient by the weights contributed by those factors.</p>",
    "solution": "Choose nonnegative exponents $i,j,k$ adding to 4. The term with those exponents is $[4!/(i!j!k!)]2^j3^k x_1^ix_2^jx_3^k$. The multinomial coefficient counts which of the four brackets supplied each variable; the factors 2 and 3 contribute their powers. The complete expansion is $x_1^4+8x_1^3x_2+12x_1^3x_3+24x_1^2x_2^2+72x_1^2x_2x_3+54x_1^2x_3^2+32x_1x_2^3+144x_1x_2^2x_3+216x_1x_2x_3^2+108x_1x_3^3+16x_2^4+96x_2^3x_3+216x_2^2x_3^2+216x_2x_3^3+81x_3^4$. As a check, at $x_1=x_2=x_3=1$ the coefficients add to $6^4=1296$.",
    "trap": "The numerical coefficients 2 and 3 in the trinomial also contribute to the coefficient.",
    "provenance": "Ross, 10e, Chapter 1, Problem 29; full expansion. Earlier coefficient-only practice remains under its original ID."
  },
  {
    "id": "w.prob.1.ross.problem.30",
    "course": "prob",
    "sec": "1.5",
    "marks": 5,
    "title": "Committee divisions with roles",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 30.</b> Twelve distinct people are divided into three labeled committees of sizes 3, 4, and 5. How many divisions are possible?</p>",
    "tests": [
      "c.prob.1.5.1"
    ],
    "approach": "<p>Use a multinomial coefficient because the committee labels distinguish the groups, while order within each committee is irrelevant.</p>",
    "solution": "<p>The number is $\\binom{12}{3,4,5}=12!/(3!4!5!)=27,720$. Equivalently, choose 3 for the first committee, then 4 of the remaining 9; the final 5 are determined.</p>",
    "trap": "Do not multiply by an ordering inside committees. The sizes differ and committees are labeled, so there is no extra division by 3!.",
    "provenance": "Ross, 10e, Chapter 1, Problem 30; independently rewritten full item and solution."
  },
  {
    "id": "w.prob.1.ross.problem.34",
    "course": "prob",
    "sec": "1.6",
    "marks": 5,
    "title": "Nonnegative integer allocations",
    "prompt": "<p><b>Adapted from Ross, Chapter 1, Problem 34.</b> Eight identical blackboards are divided among four schools. How many allocations are possible if a school may receive none? How many if each school must receive at least one?</p>",
    "tests": [
      "c.prob.1.6.1"
    ],
    "approach": "<p>Represent the allocation by four nonnegative counts summing to eight. For the positive case, give one board to each school first.</p>",
    "solution": "<p>Allowing zero boards, stars and bars gives $\\binom{8+4-1}{4-1}=\\binom{11}{3}=165$. If every school gets at least one, allocate one to each first; distribute the remaining four in $\\binom{4+4-1}{3}=\\binom73=35$ ways.</p>",
    "trap": "The blackboards are identical, so this is a count of integer vectors rather than assignments of eight distinct objects.",
    "provenance": "Ross, 10e, Chapter 1, Problem 34; independently rewritten full item and solution."
  }
]
);
