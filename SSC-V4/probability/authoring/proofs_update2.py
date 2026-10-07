#!/usr/bin/env python3
"""Update 2: subject-owned, step-by-step derivations; never writes study maps.
Run after other content generators to restore these authored proof ladders.
"""
import json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
PROOFS = {}

def put(key, idea, steps, ends):
    if 'c.prob.' + key in PROOFS:
        raise ValueError('Duplicate concept: ' + key)
    rows = []
    for line in steps.strip().splitlines():
        if not line.strip():
            continue
        why, math, meaning = line.split(' :: ')
        if not all((why.strip(), math.strip(), meaning.strip())):
            raise ValueError('Empty explanation or equation: ' + key)
        rows.append(dict(why=why, m='$$' + math + '$$', meaning=meaning))
    PROOFS['c.prob.' + key] = dict(idea=idea, why='Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.', rungs=rows, ends=ends)

put('1.2.1', 'Build a table of complete choices, then count its rows.', r'''
Name the first-stage options 1 through m and the second-stage options 1 through n. :: (i,j) :: A pair records both choices; changing either entry changes the complete outcome.
Fix one first choice i; exactly n second choices remain by the hypothesis. :: (i,1),(i,2),\ldots,(i,n) :: This is one row containing n complete outcomes.
Different first choices create disjoint rows, since their first entries differ. :: n+n+\cdots+n\quad(m\text{ terms}) :: Adding row sizes counts every outcome once.
Multiplication is repeated addition of equal numbers. :: n+\cdots+n=mn :: For 3 shirts and 2 shoes, the table has 3 rows of 2, giving 6 outfits.
After k stages, each existing outcome has n_{k+1} continuations. :: (n_1\cdots n_k)n_{k+1} :: Multiplying the old total by the new branch size proves the rule one stage at a time.
Start with the first stage and repeat the previous step. :: N=n_1n_2\cdots n_r=\prod_{i=1}^r n_i :: The product symbol is shorthand for multiplying all listed choice counts.
''', 'The multiplication rule requires the same number of continuations after every history at a given stage; unequal rows must instead be added separately.')
put('1.3.1','Fill positions one at a time and explain the factorial cancellation.',r'''
There are n distinct objects and r ordered positions, with 0≤r≤n. :: n\text{ choices in position }1 :: Objects are used at most once.
Using one object removes exactly one option for the next position. :: n-1\text{ choices in position }2 :: This count is the same whichever first object was chosen.
Before position j, exactly j−1 objects have been used. :: n-(j-1)=n-j+1 :: At position r the count is n−r+1, not n−r.
Multiply the position counts by the counting principle. :: N=n(n-1)\cdots(n-r+1) :: Every ordered list follows one path through these choices.
Factorial n! means the product of all integers from n down to 1. :: n!=[n(n-1)\cdots(n-r+1)](n-r)! :: The unused final factors are precisely (n−r)!.
Divide by the unused product, which is positive. :: N=\frac{n!}{(n-r)!} :: For n=5,r=2, this is 5!/3!=5·4=20.
For a full arrangement r=n; for r=0 there is one empty list. :: N_{r=n}=n!,\qquad 0!=1 :: The convention 0!=1 makes the same formula work at both endpoints.
''','There are n! full orders and n!/(n−r)! ordered selections.')
put('1.3.2','Give identical copies temporary labels, then remove the resulting repeated counts.',r'''
Let type j have n_j copies; altogether there are n objects. :: n_1+\cdots+n_k=n :: Types differ visibly, but copies of one type do not.
Temporarily label every copy so all n objects become distinct. :: N_{\text{labeled}}=n! :: The ordinary permutation rule now applies.
Fix one visible arrangement and permute only the labels of type j. :: n_j! :: All these assignments leave the visible type in every position unchanged.
Choose label assignments for every type independently as a counting task. :: D=n_1!\cdots n_k! :: Each visible arrangement has exactly D labeled versions.
If V is the number of visible arrangements, counting labeled versions gives an equation. :: VD=n! :: This is division of equally sized groups, rather than a guessed correction.
Solve that equation for V. :: V=\frac{n!}{n_1!\cdots n_k!} :: For AAB, the 6 labeled orders form 3 groups of 2, giving 3 visible strings.
''','Divide by internal permutations only when the copies are indistinguishable in the recorded outcome.')
put('1.4.1','Count ordered selections first; each unordered group produces the same number of orders.',r'''
A combination records a group of r objects from n distinct objects. :: 0\le r\le n :: ABC and BAC describe the same group.
Choose and order the r objects without replacement. :: N_{\text{ordered}}=n(n-1)\cdots(n-r+1) :: Position by position, the choice counts decrease by one.
Write the product using factorial cancellation. :: N_{\text{ordered}}=\frac{n!}{(n-r)!} :: The final n−r factors of n! are not used.
One fixed r-object group can be placed in r! different orders. :: N_{\text{ordered}}=r!N_{\text{groups}} :: Every group has the same size r, so the overcount is uniform.
Divide both sides by r!. :: \binom nr=N_{\text{groups}}=\frac{n!}{r!(n-r)!} :: The symbol binomial n choose r names this group count.
Check a small example directly. :: \binom42=\frac{4\cdot3}{2\cdot1}=6 :: The pairs are AB, AC, AD, BC, BD and CD.
''','The endpoint values are n choose 0 = n choose n = 1: the empty group and the full group are unique.')
put('1.4.2','Use two disjoint cases for Pascal’s identity, and distributive multiplication for the binomial theorem.',r'''
Choose r objects from n and distinguish one particular object. :: 1\le r\le n-1 :: Every group either contains that object or omits it.
If the object is included, select the other r−1 objects from the other n−1. :: N_{\text{in}}=\binom{n-1}{r-1} :: The distinguished object has already been chosen.
If it is omitted, all r objects must come from the other n−1. :: N_{\text{out}}=\binom{n-1}{r} :: These groups cannot overlap the included case.
Add the two cases to count all groups. :: \binom nr=\binom{n-1}{r-1}+\binom{n-1}{r} :: This is Pascal’s identity; endpoint cases can use out-of-range coefficients equal to zero.
Write a power as n identical factors and use the distributive law. :: (x+y)^n=(x+y)\cdots(x+y) :: Each expanded term chooses either x or y from each factor.
To obtain x^k y^{n−k}, choose which k factors supply x. :: \binom nk x^ky^{n-k} :: All those choices yield the same monomial, so their count becomes its coefficient.
Sum over all possible counts k of x choices. :: (x+y)^n=\sum_{k=0}^n\binom nkx^ky^{n-k} :: For n=2 the choices xx, xy, yx, yy give x²+2xy+y².
''','Both identities come from counting complete, disjoint possibilities.')
put('1.5.1','Assign labeled objects to groups, then use the same count in an algebraic expansion.',r'''
There are n distinct objects and r labeled groups of specified sizes. :: n_1+\cdots+n_r=n :: The group labels distinguish assignments, even if sizes agree.
Choose the first group, then the second from the remaining objects, and continue. :: \binom n{n_1}\binom{n-n_1}{n_2}\cdots\binom{n_r}{n_r} :: The final group is forced; its binomial coefficient is 1.
Expand each choosing coefficient into factorials. :: \frac{n!}{n_1!(n-n_1)!}\frac{(n-n_1)!}{n_2!(n-n_1-n_2)!}\cdots :: Each remaining-population factorial cancels with the numerator of the next factor.
After cancellation only n! and the group-size factorials remain. :: N=\frac{n!}{n_1!\cdots n_r!} :: This is the multinomial coefficient for these specified sizes.
Expand n factors, choosing one variable from each factor. :: (x_1+\cdots+x_r)^n :: Assigning a factor to variable x_j is the same as assigning an object to group j.
For specified choice counts, collect identical monomials. :: \frac{n!}{n_1!\cdots n_r!}x_1^{n_1}\cdots x_r^{n_r} :: The coefficient counts all assignments producing that monomial.
Add the terms for every nonnegative size list summing to n. :: (x_1+\cdots+x_r)^n=\sum_{n_1+\cdots+n_r=n}\frac{n!}{n_1!\cdots n_r!}\prod_{j=1}^r x_j^{n_j} :: Every expanded term has exactly one such list, so none is missed or counted twice.
''','Labeled groups use the multinomial count; unordered groups may need a further correction that must be justified separately.')
put('1.6.1','Encode each allocation by a row of stars separated by bars.',r'''
Let x_j be the number of identical units in box j, with r≥1 and n≥0. :: x_1+\cdots+x_r=n,\quad x_j\ge0 :: The boxes are labeled, but the units are not.
Write x_1 stars, a bar, x_2 stars, and so on. :: \underbrace{*\cdots*}_{x_1}|\underbrace{*\cdots*}_{x_2}|\cdots|\underbrace{*\cdots*}_{x_r} :: Adjacent bars or a bar at an end give an empty box.
Count the symbols in this row. :: n+(r-1)=n+r-1 :: There are n stars and r−1 separators.
Choosing the separator positions fixes every star position. :: N=\binom{n+r-1}{r-1} :: Reading counts between the bars recovers exactly one allocation; the encoding works both ways.
For positive box sizes, first put one unit in every box. :: y_j=x_j-1\ge0,\quad\sum_j y_j=n-r :: This subtraction turns a positive-size problem into the nonnegative one.
Apply the previous formula to n−r remaining units. :: N_+=\binom{(n-r)+r-1}{r-1}=\binom{n-1}{r-1} :: This requires n≥r; otherwise positive allocations are impossible.
''','The formula counts integer allocations, not permutations of distinguishable objects.')
put('2.3.2','Extract finite additivity from the probability axioms.',r'''
The whole sample space S has probability 1 by the normalization axiom. :: P(S)=1 :: This is an assumption of a probability model, not a theorem proved from counting.
The list S, empty set, empty set, and so on consists of disjoint sets whose union is S. :: S=S\cup\varnothing\cup\varnothing\cup\cdots :: Empty sets contain no outcomes, so no outcome appears in two entries.
Use countable additivity on that list. :: 1=1+\sum_{i=2}^{\infty}P(\varnothing) :: Every term on the right is nonnegative by the first axiom.
A nonnegative extra term would make the right side larger than 1. :: P(\varnothing)=0 :: Subtracting the initial 1 forces every remaining term to be zero.
Now let E_1 through E_n be a finite disjoint list and append empty sets. :: \bigcup_{i=1}^{\infty}E_i=\bigcup_{i=1}^nE_i\quad(E_i=\varnothing\text{ for }i>n) :: This gives a countably infinite list to which the axiom applies.
The appended terms have zero probability, so the infinite sum reduces to a finite sum. :: P\left(\bigcup_{i=1}^nE_i\right)=\sum_{i=1}^nP(E_i) :: Only mutually exclusive events may be added this way without an overlap correction.
''','The null event has probability zero, and probabilities of finite disjoint unions add.')
put('2.4.1','Split sets into nonoverlapping pieces before adding probabilities.',r'''
The complement E^c contains exactly the outcomes in S outside E. :: E\cap E^c=\varnothing,\quad E\cup E^c=S :: Each outcome belongs to one of the two pieces.
Add their probabilities by finite additivity. :: P(E)+P(E^c)=P(S)=1 :: The final equality is normalization.
Subtract P(E) from both sides. :: P(E^c)=1-P(E) :: This explains why probabilities of an event and its failure sum to 1.
Suppose E is contained in F; separate F into E and its extra part. :: F=E\cup(F\setminus E) :: The symbol setminus removes all elements of E from F.
The pieces are disjoint, so add their probabilities. :: P(F)=P(E)+P(F\setminus E) :: No overlap is counted twice.
The extra piece has nonnegative probability. :: P(E)\le P(F) :: Containment therefore gives monotonicity of probability.
''','Complementation uses subtraction from 1; containment uses a nonnegative extra piece.')
put('2.4.2','Correct double counts, then check the general formula one outcome at a time.',r'''
Split the union into all of E and only the part of F outside E. :: P(E\cup F)=P(E)+P(F\setminus E) :: These are disjoint pieces, so their probabilities add.
Split F into the overlapping and nonoverlapping parts. :: P(F)=P(E\cap F)+P(F\setminus E) :: These parts also form a disjoint union.
Solve the second equation for the outside part and substitute into the first. :: P(E\cup F)=P(E)+P(F)-P(E\cap F) :: Adding P(E) and P(F) counted the overlap twice; subtraction leaves it once.
For m events, let a particular outcome occur in exactly k of them. :: \binom k1-\binom k2+\cdots+(-1)^{k+1}\binom kk :: It appears in each j-fold intersection exactly k choose j times.
Expand (1−1)^k by the binomial theorem when k≥1. :: 0=1+\sum_{j=1}^k(-1)^j\binom kj :: This is an algebraic identity already established in Chapter 1.
Move 1 to the left and change signs. :: \sum_{j=1}^k(-1)^{j+1}\binom kj=1 :: Each outcome inside the union has net coefficient 1; outcomes outside have coefficient 0.
Average this identity of membership flags over outcomes. :: P\left(\bigcup_{i=1}^mE_i\right)=\sum_{\varnothing\ne I\subseteq\{1,\ldots,m\}}(-1)^{|I|+1}P\left(\bigcap_{i\in I}E_i\right) :: A membership flag averages to its event probability; the finite sum can be distributed.
''','Inclusion–exclusion counts every outcome of a finite union exactly once.')
put('2.5.1','Use equal probabilities and total probability 1 to derive the counting formula.',r'''
Let the finite sample space contain N outcomes, all with probability p. :: N=|S|,\quad P(\{s\})=p :: Vertical bars around a finite set mean its number of elements.
The singleton events are disjoint and cover S. :: S=\bigcup_{s\in S}\{s\} :: A singleton contains only the named outcome.
Add their equal probabilities. :: 1=P(S)=\underbrace{p+\cdots+p}_{N\text{ terms}}=Np :: This uses normalization and finite additivity.
Since N is positive, divide by N. :: p=\frac1N :: Equal likelihood fixes the probability of each outcome.
An event E consists of |E| such singleton outcomes. :: P(E)=|E|p :: Add one equal contribution for each favorable outcome.
Substitute the value of p. :: P(E)=\frac{|E|}{|S|} :: For a fair die, E={2,4,6} gives 3/6=1/2; unequal outcome probabilities would require adding their individual masses instead.
''','Favorable count divided by total count is valid only for a finite, equally likely outcome model.')
put('2.6.1','Turn growing events into disjoint new pieces; use complements for shrinking events.',r'''
Assume E_1 is contained in E_2, which is contained in E_3, and so on. :: F_1=E_1,\quad F_n=E_n\setminus E_{n-1}\ (n\ge2) :: F_n records the outcomes entering for the first time at step n.
No outcome can enter for the first time twice. :: F_i\cap F_j=\varnothing\quad(i\ne j) :: The increments are disjoint.
After n stages, the first n increments recover the whole current event. :: E_n=\bigcup_{i=1}^nF_i :: Taking all increments gives the union of every E_n as well.
Use finite and countable additivity on the increments. :: P(E_n)=\sum_{i=1}^nP(F_i),\quad P\left(\bigcup_nE_n\right)=\sum_{i=1}^{\infty}P(F_i) :: A nonnegative infinite sum is defined as the limit of its partial sums.
Take the limit of the finite sums. :: \lim_{n\to\infty}P(E_n)=P\left(\bigcup_nE_n\right) :: This proves continuity for increasing events from an axiom.
If instead E_n decreases, its complement increases. :: E_n^c\subseteq E_{n+1}^c,\quad\bigcup_nE_n^c=\left(\bigcap_nE_n\right)^c :: The second equality is De Morgan’s law: failing at least one E_n means failing their intersection.
Apply the increasing result and the complement rule. :: \lim_nP(E_n)=1-\lim_nP(E_n^c)=P\left(\bigcap_nE_n\right) :: All quantities are probabilities between 0 and 1, so subtraction is valid.
''','Nested increasing or decreasing events have probabilities that converge to the probability of the corresponding limiting event.')
put('2.6.2','Assign each outcome to its first event and compare the resulting disjoint pieces.',r'''
The events E_n need not be nested or disjoint. :: F_1=E_1,\quad F_n=E_n\setminus\bigcup_{i<n}E_i :: Remove outcomes already recorded in earlier events.
Every outcome in the union has a first positive-integer index at which it appears. :: \bigcup_nF_n=\bigcup_nE_n,\quad F_i\cap F_j=\varnothing\ (i\ne j) :: This explains both complete coverage and absence of double counting.
Add the probabilities of the disjoint pieces. :: P\left(\bigcup_nE_n\right)=\sum_nP(F_n) :: Countable additivity applies because the F_n are disjoint.
Each new piece lies inside its original event. :: F_n\subseteq E_n\ \Longrightarrow\ P(F_n)\le P(E_n) :: Monotonicity was established by adding a nonnegative extra piece.
Add these termwise comparisons. :: P\left(\bigcup_nE_n\right)\le\sum_nP(E_n) :: This is the union bound, even if the sum on the right is infinite.
Now suppose a countably infinite list of individual outcomes all had common probability q. :: 1=\sum_{n=1}^{\infty}q :: Their disjoint union is the whole sample space.
If q=0 the sum is zero; if q>0 choose an integer M>1/q. :: q=0\Rightarrow\sum_nq=0,\quad q>0\Rightarrow Mq>1 :: Neither choice can give total probability 1, so a countably infinite uniform model is impossible.
''','The union bound does not require independence. Equal singleton probabilities cannot describe a countably infinite sample space.')
put('2.5.2','Prove that forgetting draw order preserves equal likelihood when every group has r! orders.',r'''
Draw r distinct objects successively from N, uniformly among those remaining. :: P(\text{one specified sequence})=\frac1N\frac1{N-1}\cdots\frac1{N-r+1} :: The conditional chance at each stage is the reciprocal of the remaining count.
Multiply and rewrite the denominator as a factorial ratio. :: P(\text{sequence})=\frac{(N-r)!}{N!} :: This probability is the same for every ordered sequence.
Fix an unordered group of r objects. :: r!\text{ sequences produce this group} :: Its elements can be drawn in every possible internal order.
Different sequences are mutually exclusive outcomes, so their probabilities add. :: P(\text{group})=r!\frac{(N-r)!}{N!} :: The probability of a group is the sum over its sequence outcomes.
The combination formula gives the reciprocal of this expression. :: \binom Nr=\frac{N!}{r!(N-r)!},\quad P(\text{group})=\frac1{\binom Nr} :: Every unordered group is therefore equally likely.
Check that these probabilities sum to one. :: \binom Nr\frac1{\binom Nr}=1 :: Equal-sized groups of equally likely sequences justify changing the sample-space description.
''','The argument depends on uniform sampling without replacement; forgetting order alone does not always create a uniform model.')
put('3.2.2','Rearrange the definition of conditional probability, then repeat it.',r'''
For P(F)>0, conditional probability is the fraction of F also in E. :: P(E\mid F)=\frac{P(E\cap F)}{P(F)} :: The denominator is the probability of the reduced sample space.
Multiply both sides by the positive denominator. :: P(E\cap F)=P(F)P(E\mid F) :: This is the two-event multiplication rule; it does not assume independence.
For three events, condition the last event on both earlier events. :: P(E_1\cap E_2\cap E_3)=P(E_1\cap E_2)P(E_3\mid E_1\cap E_2) :: This requires the earlier intersection to have positive probability.
Apply the two-event rule to that earlier intersection. :: P(E_1\cap E_2)=P(E_1)P(E_2\mid E_1) :: Substitute this expression into the preceding equation.
The three-event expansion now lists all sequential conditional chances. :: P(E_1\cap E_2\cap E_3)=P(E_1)P(E_2\mid E_1)P(E_3\mid E_1\cap E_2) :: The third factor must retain both earlier conditions.
Repeat the same substitution for n events. :: P\left(\bigcap_{i=1}^nE_i\right)=P(E_1)\prod_{k=2}^nP\left(E_k\mid\bigcap_{i=1}^{k-1}E_i\right) :: If an earlier intersection has probability zero, the full intersection has probability zero; do not form an undefined conditional ratio.
''','The chain rule is successive conditioning. Independence is needed only when replacing conditional factors by unconditional probabilities.')
put('3.3.1','Split the target event among all the possible cases.',r'''
Let F_i be disjoint cases covering S, with P(F_i)>0 for the cases used. :: \bigcup_iF_i=S,\quad F_i\cap F_j=\varnothing\ (i\ne j) :: Such a list is a partition: every outcome has exactly one case.
Keep only the outcomes where the target event E also occurs. :: E=\bigcup_i(E\cap F_i) :: Every outcome of E still has one and only one case.
These restricted pieces are disjoint, so add their probabilities. :: P(E)=\sum_iP(E\cap F_i) :: This addition requires disjointness, not independence.
Use the conditional-probability definition within case F_i. :: P(E\mid F_i)=\frac{P(E\cap F_i)}{P(F_i)} :: The probability inside a case can differ from the overall probability.
Multiply by P(F_i) and replace each joint probability in the sum. :: P(E)=\sum_iP(E\mid F_i)P(F_i) :: Each contribution is case probability times success probability within that case.
For two cases the formula is an ordinary weighted average. :: P(E)=P(E\mid F)P(F)+P(E\mid F^c)P(F^c) :: Zero-probability cases contribute zero joint probability and are omitted to avoid undefined conditionals.
''','The law of total probability adds contributions from exhaustive, disjoint cases.')
put('3.3.2','Compute the share of the observed evidence contributed by a particular case.',r'''
Use disjoint exhaustive cases F_i, and suppose evidence E has P(E)>0. :: P(F_j\mid E)=\frac{P(F_j\cap E)}{P(E)} :: This is the definition of the updated case probability.
Intersections are symmetric: both events happening is the same regardless of order. :: F_j\cap E=E\cap F_j :: We may compute the same joint probability in the other conditional direction.
The multiplication rule gives the contribution from case j. :: P(E\cap F_j)=P(E\mid F_j)P(F_j) :: The factors are the likelihood of the evidence and the prior case probability.
Add the contributions from all cases to get all evidence. :: P(E)=\sum_iP(E\mid F_i)P(F_i) :: This is total probability, derived by splitting E into disjoint pieces.
Substitute the numerator and denominator into the first ratio. :: P(F_j\mid E)=\frac{P(E\mid F_j)P(F_j)}{\sum_iP(E\mid F_i)P(F_i)} :: The denominator is positive by the assumption on E.
All updated case shares add to 1 because their numerators sum to the denominator. :: \sum_jP(F_j\mid E)=1 :: Bayes’ formula normalizes the evidence contributions rather than reversing a conditional by guesswork.
''','A case’s posterior is its contribution to the evidence divided by all evidence contributions.')
put('3.4.2','Use subtraction and factoring to extend independence to complements.',r'''
Assume E and F are independent. :: P(E\cap F)=P(E)P(F) :: This product equation is the definition, including zero-probability events.
Split E according to whether F occurs. :: E=(E\cap F)\cup(E\cap F^c) :: The pieces are disjoint.
Add the two pieces and isolate the second. :: P(E\cap F^c)=P(E)-P(E\cap F) :: This uses finite additivity followed by subtraction.
Insert the independence product and factor P(E). :: P(E\cap F^c)=P(E)[1-P(F)] :: The distributive identity a−ab=a(1−b) is high school algebra.
Use the complement rule on the bracket. :: P(E\cap F^c)=P(E)P(F^c) :: This proves E and F^c are independent.
Interchange E and F to obtain independence of E^c and F, then complement F once more. :: P(E^c\cap F^c)=P(E^c)P(F^c) :: The same argument applies to the newly established independent pair.
''','Independence is preserved when either or both events are replaced by their complements.')
put('3.5.1','Check every probability axiom for the model in which F is known.',r'''
Fix an event F with positive probability and define a new event-weight function. :: Q(E)=\frac{P(E\cap F)}{P(F)} :: All original probabilities are measured first, then divided by the same positive number.
The restricted event is contained in F. :: \varnothing\subseteq E\cap F\subseteq F :: Monotonicity bounds its probability between 0 and P(F).
Divide those bounds by P(F)>0. :: 0\le Q(E)\le1 :: Division by a positive number preserves inequality signs.
The full sample space includes every outcome of F. :: Q(S)=\frac{P(S\cap F)}{P(F)}=1 :: This checks normalization in the reduced model.
If E_i are disjoint, their restrictions to F are still disjoint. :: \left(\bigcup_iE_i\right)\cap F=\bigcup_i(E_i\cap F) :: Intersection distributes over union.
Use original countable additivity and divide the sum by P(F). :: Q\left(\bigcup_iE_i\right)=\frac{\sum_iP(E_i\cap F)}{P(F)}=\sum_iQ(E_i) :: This checks the remaining axiom, so all probability rules apply to Q.
''','Conditional probability is a complete probability model when the conditioning event has positive probability.')
put('3.5.2','Apply ordinary total probability and Bayes inside a previously restricted model.',r'''
Assume P(F)>0 and write Q(A)=P(A given F). :: Q(A)=\frac{P(A\cap F)}{P(F)} :: Q is a probability model by the preceding proof.
For a case E_i of positive Q-probability, define conditioning within Q. :: Q(A\mid E_i)=\frac{Q(A\cap E_i)}{Q(E_i)} :: This is ordinary conditional probability but with Q in place of P.
Substitute the two P-ratios and cancel their common denominator. :: Q(A\mid E_i)=\frac{P(A\cap E_i\cap F)}{P(E_i\cap F)}=P(A\mid E_i\cap F) :: Learning E_i inside F means keeping both conditions.
Split A among disjoint exhaustive cases E_i. :: Q(A)=\sum_{i:Q(E_i)>0}Q(A\mid E_i)Q(E_i) :: Total probability is valid because Q satisfies the axioms.
When Q(A)>0, write the reverse conditional ratio. :: Q(E_j\mid A)=\frac{Q(E_j\cap A)}{Q(A)} :: The joint numerator is Q(A given E_j) times Q(E_j).
Substitute that product and the total-probability denominator. :: P(E_j\mid A\cap F)=\frac{P(A\mid E_j\cap F)P(E_j\mid F)}{\sum_iP(A\mid E_i\cap F)P(E_i\mid F)} :: Only positive-probability cases are included; every factor retains the original F condition.
''','Bayes and total probability work inside a condition, provided all the relevant conditional denominators are positive.')
put('4.1.2','Use containment and nested-event continuity to prove the CDF properties.',r'''
Define F(x) as the probability that the recorded value X is at most x. :: F(x)=P(X\le x) :: X is assumed real-valued, so each observation is finite.
A smaller cutoff includes fewer possible values. :: x\le y\ \Longrightarrow\ \{X\le x\}\subseteq\{X\le y\} :: Every value at most x is also at most y.
Use monotonicity of probability on that containment. :: F(x)\le F(y) :: A CDF can stay flat or rise, but cannot fall.
As positive integers n grow, the events X≤n increase to the whole sample space. :: \lim_{n\to\infty}F(n)=P(S)=1 :: Every finite value is eventually included; nested-event continuity justifies the limit.
The events X≤−n decrease to the empty event. :: \lim_{n\to\infty}F(-n)=P(\varnothing)=0 :: No finite value is below every negative-integer cutoff; monotonicity extends these two limits to arbitrary real cutoffs.
If x_n decreases to x, the events X≤x_n decrease exactly to X≤x. :: \bigcap_n\{X\le x_n\}=\{X\le x\} :: A value bigger than x is eventually excluded, while x itself stays included.
Continuity for decreasing events yields right continuity. :: \lim_nF(x_n)=F(x) :: A jump can occur from the left at an atom; the value at the jump equals its right-hand limit.
''','CDFs are nondecreasing, have limits 0 and 1 at the two ends, and are right-continuous.')
for key in ('4.3.2','7.2.1'):
 put(key,'Distribute a finite sum inside a probability-weighted average.',r'''
For a discrete joint model, let p(s) be the probability of the full outcome s. :: E[X_i]=\sum_s X_i(s)p(s) :: Combining outcomes with the same X_i value recovers the usual expectation definition.
At outcome s, the total value is the sum of the component values. :: T(s)=\sum_{i=1}^nX_i(s) :: This equality describes an actual observation, before taking any average.
Insert the total into its weighted-average formula. :: E[T]=\sum_s\left(\sum_{i=1}^nX_i(s)\right)p(s) :: The same outcome probability multiplies every component at that outcome.
Use distribution of multiplication over addition and interchange the finite component sum. :: E[T]=\sum_{i=1}^n\sum_sX_i(s)p(s) :: For countably many outcomes, finite absolute means justify the rearrangement. For a joint density, integrals replace the outcome sum with the same linearity rule.
Recognize each inner average. :: E[T]=\sum_{i=1}^nE[X_i] :: Independence has not been used: even dependent components satisfy the formula.
The same argument allows fixed multipliers and an added constant b. :: E\left[b+\sum_i a_iX_i\right]=b+\sum_i a_iE[X_i] :: A constant b averages to b because the total probability is 1.
''','For a finite list with finite absolute means, expectation adds whether or not the variables are independent.')
put('4.4.1','Group outcome contributions by the value of X rather than by the value of g(X).',r'''
Let p_X(x)=P(X=x), and let Y=g(X) be the quantity to average. :: E[Y]=\sum_y yP(Y=y) :: Assume a finite absolute mean, or use nonnegative quantities so the sum is well defined.
The event Y=y consists of all X-values mapped to y. :: P(Y=y)=\sum_{x:g(x)=y}p_X(x) :: These X-value events are disjoint.
Replace each output probability by this sum. :: E[Y]=\sum_y\sum_{x:g(x)=y}y\,p_X(x) :: Several inputs can share one output; every input still belongs to exactly one output group.
In its group, y equals g(x). :: E[Y]=\sum_y\sum_{x:g(x)=y}g(x)p_X(x) :: Only the label for the same numerical value has changed.
Remove the grouping without changing any contributions. :: E[g(X)]=\sum_xg(x)p_X(x) :: Absolute summability, or nonnegativity, permits this regrouping of an infinite sum.
For the square function, this gives the second moment directly. :: E[X^2]=\sum_xx^2p_X(x) :: It does not give (E[X])²; averaging squares and squaring an average are different operations.
''','LOTUS is a weighted average of output values using the original input probabilities.')
for key in ('4.5.2','5.2.2'):
 put(key,'Expand a square, then track what a shift and a scale do to deviations.',r'''
Write μ for the finite mean and define variance as the mean squared deviation. :: \mu=E[X],\quad \operatorname{Var}(X)=E[(X-\mu)^2] :: Assume E[X²] is finite, so every term below exists.
Expand the square using (u−v)²=u²−2uv+v². :: (X-\mu)^2=X^2-2\mu X+\mu^2 :: μ is a fixed number, not a new random observation.
Average each term and substitute E[X]=μ. :: \operatorname{Var}(X)=E[X^2]-2\mu^2+\mu^2=E[X^2]-\mu^2 :: A constant can leave an expectation unchanged, just as it leaves a weighted sum.
Let Y=aX+b, with fixed real a and b, and use linearity. :: E[Y]=a\mu+b :: Multiplying values by a and adding b changes their average in the same way.
Subtract the new mean and cancel b. :: Y-E[Y]=aX+b-(a\mu+b)=a(X-\mu) :: A shift does not change the distances from the mean.
Square this identity and average it. :: \operatorname{Var}(Y)=E[a^2(X-\mu)^2]=a^2\operatorname{Var}(X) :: A stretch by a multiplies squared distances by a², even when a is negative.
Take the nonnegative square root to recover standard deviation. :: \operatorname{SD}(Y)=|a|\operatorname{SD}(X) :: For a=0 the variable is constant and its variance is zero.
''','Variance equals second moment minus squared mean. Shifts preserve variance and scales multiply it by the square of the scale.')
put('4.6.2','Write a binomial count as independent 0-or-1 success flags.',r'''
For independent trials with common success chance p, let I_j record success on trial j. :: I_j=1\text{ on success},\quad I_j=0\text{ on failure} :: The binomial count X adds all n flags.
Add the flags to count the successes. :: X=I_1+\cdots+I_n :: Each successful trial contributes exactly one.
Compute a flag’s mean by the two-value weighted average. :: E[I_j]=1\cdot p+0\cdot(1-p)=p :: Its mean is precisely its success probability.
Squaring either possible value leaves it unchanged. :: I_j^2=I_j,\quad E[I_j^2]=p :: Both 0²=0 and 1²=1.
Use variance as second moment minus squared mean. :: \operatorname{Var}(I_j)=p-p^2=p(1-p) :: Factor p from the difference.
Average the sum using linearity. :: E[X]=\sum_{j=1}^n p=np :: Equal means add without needing independence.
For i≠j, independent trials imply E[I_i I_j]=p², so their covariance is zero. :: \operatorname{Cov}(I_i,I_j)=p^2-p\cdot p=0 :: Here independence is essential.
Add variances using the variance-of-a-sum formula. :: \operatorname{Var}(X)=\sum_{j=1}^np(1-p)=np(1-p) :: The cross-covariance correction vanishes.
''','A binomial with n trials and success probability p has mean np and variance np(1−p).')
put('4.6.3','Divide neighboring binomial probabilities and show every cancellation.',r'''
Assume 0<p<1 and define p_k as the probability of k successes in n trials. :: p_k=\binom nk p^k(1-p)^{n-k} :: The powers give the probability of one pattern; the choosing coefficient counts patterns.
Increase the success count by one. :: p_{k+1}=\binom n{k+1}p^{k+1}(1-p)^{n-k-1} :: This is valid for 0≤k<n.
Divide the second formula by the first. :: \frac{p_{k+1}}{p_k}=\frac{\binom n{k+1}}{\binom nk}\frac{p^{k+1}}{p^k}\frac{(1-p)^{n-k-1}}{(1-p)^{n-k}} :: The denominator is positive under 0<p<1.
Expand the choosing coefficients and cancel n!. :: \frac{\binom n{k+1}}{\binom nk}=\frac{k!(n-k)!}{(k+1)!(n-k-1)!}=\frac{n-k}{k+1} :: Use (k+1)!=(k+1)k! and (n−k)!=(n−k)(n−k−1)!.
Cancel the powers and multiply the ratios. :: p_{k+1}=p_k\frac{n-k}{k+1}\frac p{1-p} :: This computes the next mass without recalculating large factorials.
Start at zero successes and accumulate masses to obtain the CDF. :: p_0=(1-p)^n,\quad F(k)=\sum_{j=0}^kp_j :: For p=0 or p=1 use the constant-count distribution directly; the division recursion does not apply.
''','The recursion follows from cancellation, and a CDF is the sum of masses through its cutoff.')
poisson_steps=r'''
For a Poisson variable, λ≥0 is its rate parameter; begin with λ>0. :: P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}\quad(k=0,1,\ldots) :: The λ=0 case is X=0 with probability one.
Use the exponential series to check the total probability. :: \sum_{k=0}^{\infty}e^{-\lambda}\frac{\lambda^k}{k!}=e^{-\lambda}e^\lambda=1 :: The identity e^z=Σz^k/k! can be taken as the exponential’s series definition; convergence is a calculus result.
Insert the masses into the definition of the mean; k=0 contributes zero. :: E[X]=e^{-\lambda}\sum_{k=1}^{\infty}\frac{k\lambda^k}{k!} :: Expectation weights each possible value by its probability.
Cancel k against the first factor of k!, remove one λ, and put j=k−1. :: E[X]=\lambda e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!}=\lambda :: The remaining series is e^λ, cancelling e^(−λ).
For the product X(X−1), the first two terms are zero and two factorial factors cancel. :: E[X(X-1)]=e^{-\lambda}\sum_{k=2}^{\infty}\frac{\lambda^k}{(k-2)!} :: The identity k!=k(k−1)(k−2)! explains the cancellation.
Put j=k−2 and take out λ². :: E[X(X-1)]=\lambda^2e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!}=\lambda^2 :: This is the same exponential-series calculation.
Use the algebraic identity X²=X(X−1)+X. :: E[X^2]=\lambda^2+\lambda :: Linearity adds the two already computed moments.
Subtract the squared mean to compute variance. :: \operatorname{Var}(X)=\lambda^2+\lambda-\lambda^2=\lambda :: These moments agree with the constant-zero case when λ=0.
'''
put('4.7.2','Cancel falling-factorial factors in the Poisson weighted sums.',poisson_steps,'The first two factorial moments are λ and λ²; hence both mean and variance are λ.')
put('4.7.1','First derive Poisson moments, then show the rare-event limit.',poisson_steps+r'''
For a binomial with p=λ/n, fix k while n tends to infinity. :: P(B_n=k)=\binom nk(\lambda/n)^k(1-\lambda/n)^{n-k} :: Take n≥λ so this is a valid probability model.
Combine the growing choosing coefficient with n^(−k). :: \binom nk\frac{\lambda^k}{n^k}=\frac{\lambda^k}{k!}\prod_{j=0}^{k-1}(1-j/n)\longrightarrow\frac{\lambda^k}{k!} :: For fixed k there are finitely many factors, each tending to 1.
Use the exponential limit for the remaining factor. :: (1-\lambda/n)^{n-k}=(1-\lambda/n)^n(1-\lambda/n)^{-k}\longrightarrow e^{-\lambda} :: Taking logs uses log(1+u)/u→1 as u→0, a calculus limit.
Multiply the two limits. :: P(B_n=k)\longrightarrow e^{-\lambda}\frac{\lambda^k}{k!} :: This is a limit for each fixed k; it is not an exact identity for finite n.
''','The Poisson law has mean and variance λ and is the fixed-rate rare-success limit of binomial laws.')
put('4.8.1','Use a first-trial split to derive geometric moments without differentiating an infinite series.',r'''
Let X count trials up to and including the first success, with 0<p≤1 and q=1−p. :: P(X=n)=q^{n-1}p\quad(n\ge1) :: The first n−1 trials fail and the last succeeds; independence multiplies these chances.
The tail decreases geometrically, so the first and second moments are finite. :: P(X>n)=q^n :: For 0<q<1, n²q^n is bounded by a decaying geometric sequence eventually; this justifies the moment equations below. For p=1, X=1 directly.
After a first-trial failure, a fresh independent wait X' has the same law as X. :: X=1\text{ on success},\quad X=1+X'\text{ on failure} :: Let m=E[X] and s=E[X²].
Average the two first-trial cases. :: m=p\cdot1+q(1+m)=1+qm :: Total expectation weights cases by p and q.
Move qm to the left and use 1−q=p. :: pm=1,\quad m=1/p :: This is ordinary solution of a linear equation.
Square the failure-case value and average the two cases again. :: s=p+qE[(1+X')^2]=1+2qm+qs :: Expand (1+X')²=1+2X'+X'² and substitute the equal moments of X'.
Isolate s and substitute m=1/p. :: ps=1+2q/p,\quad s=\frac{p+2q}{p^2}=\frac{1+q}{p^2} :: The simplification uses p+q=1.
Subtract the squared mean. :: \operatorname{Var}(X)=s-m^2=\frac q{p^2}=\frac{1-p}{p^2} :: For p=1 this gives mean 1 and variance 0, as required.
''','The trial-count geometric distribution starts at 1; counting failures instead shifts the mean down by 1 and leaves the variance unchanged.')
put('4.8.2','Count sequences ending in the r-th success and decompose the waiting time into geometric waits.',r'''
Let X be the trial number of the r-th success, with integer r≥1 and 0<p≤1. :: X\ge r :: At least r trials are needed for r successes.
For X=n, the final trial is a success and the preceding n−1 trials have exactly r−1 successes. :: \binom{n-1}{r-1}\text{ preceding patterns} :: Choose the positions of those earlier successes.
Every such pattern has r successes and n−r failures. :: P(X=n)=\binom{n-1}{r-1}p^r(1-p)^{n-r} :: Independence gives the same product probability to each disjoint pattern.
Separate the wait into successive blocks ending at a success. :: X=G_1+\cdots+G_r :: G_1 is the first wait; G_2 counts trials after that success until the next, and so on.
For fixed positive block lengths g_j, prescribe failures then one success in every block. :: P(G_1=g_1,\ldots,G_r=g_r)=\prod_{j=1}^r(1-p)^{g_j-1}p :: Disjoint trial positions are independent, proving that the G_j are independent geometric variables, even though block endpoints are random.
Use the previously derived geometric moments. :: E[G_j]=1/p,\quad \operatorname{Var}(G_j)=(1-p)/p^2 :: Each block restarts with the same independent trial rule.
Add means and, by independence, variances. :: E[X]=r/p,\quad\operatorname{Var}(X)=r(1-p)/p^2 :: The failure count X−r has the same variance but mean r(1−p)/p.
''','The negative binomial formula here counts trials through the r-th success; state the convention before using its mean.')
put('4.8.3','Count marked subsets and show the covariance algebra for sampling without replacement.',r'''
There are N objects, m marked, and a uniform n-object sample without replacement. :: p=m/N,\quad 0\le n\le N :: Assume N>1 for the displayed variance formula.
A sample with k marked objects chooses k from m and n−k from N−m. :: P(X=k)=\frac{\binom mk\binom{N-m}{n-k}}{\binom Nn} :: Favorable unordered samples are divided by all equally likely unordered samples; impossible choosing counts give zero.
Order the sampled objects and let I_j indicate a marked object in draw position j. :: X=\sum_{j=1}^nI_j,\quad E[I_j]=p :: Symmetry makes each position equally likely to contain any population object.
Average the sum and compute each flag’s variance. :: E[X]=np,\quad\operatorname{Var}(I_j)=p(1-p) :: This mean needs no independence.
For two distinct positions, use conditional sampling without replacement. :: E[I_iI_j]=\frac mN\frac{m-1}{N-1} :: Given a marked first object, only m−1 marked objects remain among N−1.
Subtract the product of means and simplify. :: \operatorname{Cov}(I_i,I_j)=\frac{m(m-1)}{N(N-1)}-\frac{m^2}{N^2}=-\frac{p(1-p)}{N-1} :: The common numerator is mN(m−1)−m²(N−1)=−m(N−m).
There are n(n−1)/2 unordered position pairs; the variance expansion multiplies that count by 2. :: \operatorname{Var}(X)=np(1-p)-n(n-1)\frac{p(1-p)}{N-1} :: Negative covariances reduce spread relative to independent draws.
Factor np(1−p) and combine the bracket. :: \operatorname{Var}(X)=np(1-p)\frac{N-n}{N-1} :: The bracket is 1−(n−1)/(N−1)=(N−n)/(N−1). For N=1 the count is deterministic, so variance is zero directly.
''','Without replacement, draw flags are dependent; the finite-population correction follows from their negative covariance.')
for key in ('4.9.1','7.3.1'):
 put(key,'Turn each event into a 0-or-1 flag and average the count.',r'''
For each of n events A_i, define its membership flag I_i. :: I_i=\mathbf1_{A_i} :: This notation means 1 if A_i occurs and 0 otherwise.
At any outcome, add one for each occurring event. :: N=I_1+\cdots+I_n :: This exactly equals the number of occurring events, even when they overlap.
The flag has only two possible values, so compute its weighted average. :: E[I_i]=1P(A_i)+0P(A_i^c)=P(A_i) :: No information about any other event is needed.
Average the finite sum by linearity. :: E[N]=\sum_{i=1}^nE[I_i] :: Dependence affects joint probabilities but does not prevent adding means.
Substitute the individual flag means. :: E[N]=\sum_{i=1}^nP(A_i) :: Event counts can therefore have a simple mean even when their full distribution is difficult.
For example, with event chances 0.2, 0.5 and 0.8, add those three numbers. :: E[N]=0.2+0.5+0.8=1.5 :: An expected count can be noninteger; it is an average across experiments, not the count in one experiment.
''','The indicator method computes an expected event count without assuming independent events.')
for key in ('4.9.2','7.4.2'):
 put(key,'Expand the square of a sum and identify each cross term as covariance.',r'''
Assume finite second moments and let μ_i=E[X_i]. :: T=\sum_iX_i,\quad E[T]=\sum_i\mu_i :: A finite sum has a mean by linearity.
Subtract the total mean before squaring. :: T-E[T]=\sum_i(X_i-\mu_i) :: Write D_i=X_i−μ_i for these centered deviations.
Use the repeated version of (a+b)²=a²+2ab+b². :: \left(\sum_iD_i\right)^2=\sum_iD_i^2+2\sum_{i<j}D_iD_j :: Each pair occurs twice in the full expansion; i<j lists it once.
Average every term of this finite expansion. :: \operatorname{Var}(T)=\sum_iE[D_i^2]+2\sum_{i<j}E[D_iD_j] :: This uses the definition of variance and linearity.
Recognize the mean square of each deviation as its variance and the mean product as covariance. :: \operatorname{Var}(T)=\sum_i\operatorname{Var}(X_i)+2\sum_{i<j}\operatorname{Cov}(X_i,X_j) :: Expand the covariance definition to obtain E[X_iX_j]−μ_iμ_j if desired.
For independent variables, the joint weighted average factors. :: E[X_iX_j]=E[X_i]E[X_j]\ \Longrightarrow\ \operatorname{Cov}(X_i,X_j)=0 :: Independence is sufficient; zero covariance can also occur without independence.
For fixed weights a_i, replace every D_i by a_iD_i. :: \operatorname{Var}\left(\sum_i a_iX_i\right)=\sum_i a_i^2\operatorname{Var}(X_i)+2\sum_{i<j}a_i a_j\operatorname{Cov}(X_i,X_j) :: Squared terms acquire a_i² and cross terms acquire a_i a_j.
''','Variances add only when the covariance correction is zero; the full identity always includes it.')
put('4.10.1','Isolate an interval or one exact value by subtracting nested cutoff probabilities.',r'''
For a<b, values at most b split into values at most a and values between a and b. :: \{X\le b\}=\{X\le a\}\cup\{a<X\le b\} :: The second piece excludes a so the two pieces are disjoint.
Apply finite additivity. :: F(b)=F(a)+P(a<X\le b) :: F(t)=P(X≤t) includes its endpoint t.
Subtract F(a) to isolate the interval. :: P(a<X\le b)=F(b)-F(a) :: The left endpoint is excluded and the right endpoint included.
For a fixed x, cutoffs x−1/n increase toward x but never include x. :: \bigcup_n\{X\le x-1/n\}=\{X<x\} :: Every value below x is eventually included in this union.
Continuity for increasing events gives the left limit. :: F(x^-)=\lim_{n\to\infty}F(x-1/n)=P(X<x) :: The superscript minus means approaching x from smaller values.
Split X≤x into X<x and X=x, then subtract. :: P(X=x)=F(x)-F(x^-) :: Thus a CDF jump is exactly the probability mass at that value.
For inclusive left and exclusive right endpoints, use the corresponding left limits. :: P(a\le X\le b)=F(b)-F(a^-),\quad P(a<X<b)=F(b^-)-F(a) :: Replace a cutoff by a left limit precisely when its boundary value must be removed or restored.
''','Endpoint choices matter when atoms have positive probability; a density distribution has no atoms.')
put('4.2.3','Derive the sum-of-squares formula by telescoping cubes, then compute the uniform moments.',r'''
Let X_0 be uniform on 0 through N−1, with N≥1; each value has probability 1/N. :: M=N-1,\quad P(X_0=k)=1/N\ (0\le k\le M) :: First derive the two ordinary finite sums we need.
Write 0+1+⋯+M forwards and backwards, then add the lists term by term. :: 2\sum_{k=0}^M k=(M+1)M,\quad\sum_{k=0}^M k=\frac{M(M+1)}2 :: There are M+1 pairs, each equal to M.
Expand consecutive cubes and sum the differences. :: (k+1)^3-k^3=3k^2+3k+1 :: This follows from the binomial expansion of (k+1)³.
Every intermediate cube cancels in the sum from k=0 through M. :: (M+1)^3=3\sum_{k=0}^Mk^2+3\frac{M(M+1)}2+(M+1) :: This is a telescoping sum: the right endpoint cube remains.
Solve for the sum of squares and factor the result. :: \sum_{k=0}^Mk^2=\frac{M(M+1)(2M+1)}6 :: Subtract the last two terms and divide by 3.
Divide both finite sums by N=M+1 to obtain weighted averages. :: E[X_0]=\frac{N-1}2,\quad E[X_0^2]=\frac{(N-1)(2N-1)}6 :: Equal mass 1/N makes the weighted average the ordinary list average.
Put the variance terms over denominator 12. :: \operatorname{Var}(X_0)=\frac{2(N-1)(2N-1)-3(N-1)^2}{12}=\frac{N^2-1}{12} :: Factor N−1; the remaining bracket is 4N−2−3N+3=N+1.
For a uniform law on a through b, let N=b−a+1 and X=a+X_0. :: E[X]=\frac{a+b}2,\quad\operatorname{Var}(X)=\frac{(b-a+1)^2-1}{12} :: Adding a shifts the mean by a but leaves variance unchanged.
''','The discrete uniform variance follows from elementary finite sums; it differs from the continuous uniform variance.')
put('5.1.2','Compare short-interval area with rectangles, then derive the density as a slope.',r'''
A density f assigns probability by area; the CDF accumulates that area to the left. :: F(x)=\int_{-\infty}^xf(t)\,dt :: An integral is the limit of sums of small rectangle areas f(t) times their widths.
Subtract two accumulated areas to leave only the strip between the cutoffs. :: F(x+h)-F(x)=\int_x^{x+h}f(t)\,dt=P(x<X\le x+h) :: This is exact for h>0.
Divide by the width h to obtain the average height of the curve on this strip. :: \frac{F(x+h)-F(x)}h=\frac1h\int_x^{x+h}f(t)\,dt :: Height times width is area; area divided by width is average height.
If f is continuous at x, all nearby heights are within any chosen ε of f(x). :: f(x)-\epsilon\le f(t)\le f(x)+\epsilon\quad(x\le t\le x+h) :: Continuity means that this bound holds for sufficiently small h.
The integral is trapped between the corresponding rectangle areas. :: f(x)-\epsilon\le\frac{F(x+h)-F(x)}h\le f(x)+\epsilon :: Divide the area bounds by positive h.
Shrink h and then the arbitrary tolerance ε. :: F'(x)=f(x) :: A derivative is the limiting change in height divided by change in input; left intervals give the same limit at a continuity point.
Write the short-strip error relative to its width. :: P(x<X\le x+h)=hf(x)+o(h) :: o(h) denotes an error whose ratio to h tends to zero; it is not generally zero at finite h.
''','The CDF is accumulated probability; at continuity points of the density, its slope is that density.')
put('5.2.1','Start with a nonnegative output and add all its threshold layers.',r'''
First let g(x)≥0 and set Y=g(X). For a fixed output y_0, a unit-height strip below y_0 has area y_0. :: y_0=\int_0^{\infty}\mathbf1_{\{y_0>t\}}\,dt :: For example, a value 3 is built by height 1 from thresholds 0 to 3.
Apply the same identity at every observation. :: Y=\int_0^{\infty}\mathbf1_{\{g(X)>t\}}\,dt :: The threshold t is just a dummy integration variable.
Average these nonnegative layers and exchange their order. :: E[Y]=\int_0^{\infty}P(g(X)>t)\,dt :: For finite nonnegative sums this is ordinary distributivity. Tonelli’s theorem extends it to nonnegative integrals; this is an advanced integration prerequisite.
Compute each threshold probability from the input density. :: P(g(X)>t)=\int_{\{x:g(x)>t\}}f(x)\,dx :: The set contains exactly the inputs making that output layer count.
Exchange the nonnegative integrals and integrate thresholds first. :: E[Y]=\int_{-\infty}^{\infty}\left[\int_0^{g(x)}dt\right]f(x)\,dx :: For a fixed x, the included thresholds occupy an interval of length g(x).
The inner integral is that interval length. :: E[g(X)]=\int_{-\infty}^{\infty}g(x)f(x)\,dx :: This is the continuous weighted-average formula.
For a signed output, split it into nonnegative positive and negative parts. :: g=g_+-g_-,\quad g_+=\max(g,0),\quad g_- =\max(-g,0) :: Finite E[|g(X)|] makes both part averages finite, so subtracting their two formulas proves the signed version.
''','LOTUS weights the output g(x) by the input density f(x). The integral exchange requires nonnegativity or suitable integrability.')
put('5.2.3','Build each nonnegative value as the area of its threshold flags.',r'''
For a fixed nonnegative number x, the flag 1_{x>t} is 1 from t=0 up to x. :: \int_0^{\infty}\mathbf1_{\{x>t\}}\,dt=x :: The graph is a rectangle of height 1 and width x.
Replace x by the random observed value X. :: X=\int_0^{\infty}\mathbf1_{\{X>t\}}\,dt :: The identity holds separately for every observation, including X=0.
Average both sides. :: E[X]=E\left[\int_0^{\infty}\mathbf1_{\{X>t\}}\,dt\right] :: This asks for the average area of the random rectangle.
Exchange averaging and accumulation of nonnegative layers. :: E[X]=\int_0^{\infty}E[\mathbf1_{\{X>t\}}]\,dt :: Tonelli’s theorem permits this even when the result is infinite; for a finite grid it is simply swapping two finite sums.
A 0-or-1 flag averages to its success probability. :: E[X]=\int_0^{\infty}P(X>t)\,dt :: The survival curve therefore has area equal to the mean.
For a signed X with finite absolute mean, write X=X_+−X_- and apply the same argument twice. :: E[X]=\int_0^{\infty}P(X>t)\,dt-\int_0^{\infty}P(X<-t)\,dt :: The positive part exceeds t exactly when X>t; the negative part exceeds t exactly when X<−t.
''','A nonnegative mean is area under the survival curve. For signed values, subtract the negative-tail area from the positive-tail area.')
put('5.3.1','Use rectangle areas to derive the continuous uniform distribution.',r'''
Assume a<b and a constant density c on (a,b), zero elsewhere. :: f(x)=c\quad(a<x<b) :: A uniform model assigns equal area, hence equal probability, to equal-length intervals inside its support.
The full probability is a rectangle of width b−a and height c. :: c(b-a)=1 :: The total area under every density must be 1.
Divide by the positive interval width. :: c=\frac1{b-a} :: A longer support therefore needs a lower density height.
For a<x<b, the area up to x has width x−a. :: F(x)=c(x-a)=\frac{x-a}{b-a} :: The CDF is the fraction of the support’s length already covered.
At x≤a there is no accumulated area; at x≥b there is all the area. :: F(x)=0\ (x\le a),\quad F(x)=1\ (x\ge b) :: Endpoints carry zero probability because individual points have zero width.
For any requested interval, retain only its overlap with (a,b). :: P(c_1<X<c_2)=\frac{\max(0,\min(c_2,b)-\max(c_1,a))}{b-a} :: The numerator is the overlap length, assumed c_1<c_2.
''','Uniform interval probabilities follow from ordinary rectangle geometry.')
put('5.3.2','Integrate a constant-density weighted average and evaluate every endpoint.',r'''
Let L=b−a>0, so a uniform density has height 1/L. :: E[X]=\frac1L\int_a^b x\,dx :: This is the continuous weighted-average rule, not an unweighted area average.
The derivative of x²/2 is x, so it is an antiderivative. :: \int_a^bx\,dx=\frac{b^2-a^2}{2} :: A definite integral equals the antiderivative at the upper endpoint minus its value at the lower; this is the fundamental theorem of calculus.
Factor b²−a² and cancel L=b−a. :: E[X]=\frac{(b-a)(b+a)}{2(b-a)}=\frac{a+b}2 :: The mean is the midpoint μ.
Set u=x−μ; the centered interval runs from −L/2 to L/2. :: \operatorname{Var}(X)=\frac1L\int_{-L/2}^{L/2}u^2\,du :: Translation changes neither widths nor the constant density.
The derivative of u³/3 is u²; evaluate at both endpoints. :: \int_{-L/2}^{L/2}u^2\,du=\frac{(L/2)^3-(-L/2)^3}{3}=\frac{L^3}{12} :: Cubing a negative number keeps its negative sign, so subtraction doubles (L/2)³.
Divide the squared-deviation area by L. :: \operatorname{Var}(X)=\frac{L^3}{12L}=\frac{(b-a)^2}{12} :: This result depends on width alone and is positive for a nondegenerate interval.
''','The uniform mean is (a+b)/2 and variance is (b−a)²/12; the integral evaluations use the power rule from elementary calculus.')
put('5.4.2','Compute standard-normal moments and then handle positive, negative and zero scales.',r'''
Write φ(z)=exp(−z²/2)/sqrt(2π) for the standard-normal density. :: Z\sim N(0,1),\quad \phi(-z)=\phi(z) :: Its normalization is derived in the standardization note; the symmetry follows by squaring −z.
The weighted values at z and −z cancel in the mean integral. :: E[Z]=\int_{-\infty}^{\infty}z\phi(z)\,dz=0 :: The integral is absolutely convergent because Gaussian tails decay faster than powers.
Differentiate the exponential by the chain rule. :: \phi'(z)=-z\phi(z) :: The chain rule multiplies by the derivative of −z²/2, namely −z.
Substitute that derivative into the second-moment integral and integrate by parts. :: E[Z^2]= -\int z\phi'(z)\,dz=[-z\phi(z)]_{-\infty}^{\infty}+\int\phi(z)\,dz=1 :: Integration by parts follows by integrating (uv)'=u'v+uv'; the boundary term vanishes by Gaussian decay and the final integral is 1.
Since X=μ+σZ with σ>0, apply the affine mean and variance rules. :: E[X]=\mu,\quad\operatorname{Var}(X)=\sigma^2 :: The standard moments just computed are 0 and 1.
For Y=aX+b, rewrite it in the same standard-normal form. :: Y=a\mu+b+a\sigma Z :: For a>0 this is a normal with center aμ+b and standard deviation aσ.
If a<0 use the density symmetry, so −Z has the same law as Z. :: a\sigma Z=|a|\sigma(-Z)\quad(a<0) :: A negative stretch reflects the symmetric curve and gives positive standard deviation |a|σ.
For a≠0 read off the variance; for a=0 all values equal b. :: Y\sim N(a\mu+b,a^2\sigma^2)\ (a\ne0),\quad Y=b\ (a=0) :: The zero-scale case is a constant distribution, treated separately from a positive-width density.
''','Normal moments come from symmetry and one integration-by-parts calculation; all affine images are now covered.')
put('5.5.1','Evaluate the survival integral, cancel conditional survival factors, and derive moments by parts.',r'''
For λ>0, the exponential density is λexp(−λx) on x≥0. :: \int_t^{\infty}\lambda e^{-\lambda x}dx=[-e^{-\lambda x}]_t^{\infty}=e^{-\lambda t} :: The antiderivative follows because differentiating −e^(−λx) gives λe^(−λx); at infinity the exponential tends to zero.
The event of surviving s+t is contained in the event of surviving s. :: P(X>s+t\mid X>s)=\frac{P(X>s+t)}{P(X>s)} :: The intersection in the conditional-probability numerator is the smaller event.
Insert survival probabilities and apply the exponent addition rule. :: \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}=e^{-\lambda t}=P(X>t) :: The past-survival factor cancels; this is memorylessness for s,t≥0.
For the mean, integrate x times the density by parts with u=x and dv=λe^(−λx)dx. :: E[X]=[-xe^{-\lambda x}]_0^{\infty}+\int_0^{\infty}e^{-\lambda x}dx :: The product derivative rule gives integration by parts; x times exponential decay has zero boundary limit.
Evaluate the remaining exponential integral. :: E[X]=[-e^{-\lambda x}/\lambda]_0^{\infty}=1/\lambda :: A larger rate gives a shorter expected wait.
For the second moment use u=x² in the same calculation. :: E[X^2]=[-x^2e^{-\lambda x}]_0^{\infty}+2\int_0^{\infty}xe^{-\lambda x}dx=2/\lambda^2 :: The last integral is E[X]/λ from the mean formula.
Subtract the squared mean. :: \operatorname{Var}(X)=2/\lambda^2-(1/\lambda)^2=1/\lambda^2 :: Both mean and second moment are finite by exponential tail decay.
''','The exponential survival is e^(−λt), its remaining wait is memoryless, and its mean and variance are 1/λ and 1/λ².')
put('5.7.2','Derive a one-branch density by CDF differentiation, then add all disjoint branches.',r'''
First suppose g is increasing and differentiable with inverse h. :: F_Y(y)=P(g(X)\le y)=F_X(h(y)) :: Increasing functions preserve the ordering of inputs; h(y) is the input producing y.
Differentiate the CDF using the chain rule where derivatives exist. :: f_Y(y)=f_X(h(y))h'(y) :: The chain rule says the slope of a composition is outer slope times inner slope.
Differentiate g(h(y))=y to get the inverse slope. :: g'(h(y))h'(y)=1,\quad h'(y)=1/g'(h(y)) :: This division requires a nonzero derivative at the contributing input.
For a decreasing branch the cutoff inequality reverses. :: F_Y(y)=1-F_X(h(y)),\quad f_Y(y)=-f_X(h(y))h'(y) :: Here X has a density, so there is no endpoint atom; h' is negative.
Both signs can be written with an absolute value. :: f_{Y,\text{branch}}(y)=\frac{f_X(h(y))}{|g'(h(y))|} :: Absolute value makes the local stretch correction positive.
Split a many-to-one function into disjoint input branches and add their output contributions. :: f_Y(y)=\sum_{x:g(x)=y}\frac{f_X(x)}{|g'(x)|} :: Only inputs in the support count; the general validity uses the one-dimensional change-of-variables theorem branch by branch, so formulas hold almost everywhere.
For Y=X² and y>0, the two inverse branches are ±sqrt(y). :: f_Y(y)=\frac{f_X(\sqrt y)+f_X(-\sqrt y)}{2\sqrt y} :: The derivative 2x has absolute value 2sqrt(y) on either branch; y=0 is a zero-derivative boundary and must be handled by the CDF rather than division by zero.
''','Each inverse branch contributes its input density divided by the absolute local stretch; disjoint branch contributions add.')
put('6.1.3','Add density down a vertical strip to recover the marginal distribution.',r'''
Let f(x,y) be a nonnegative joint density with total integral 1. :: \iint_{\mathbb R^2}f(x,y)\,dx\,dy=1 :: It assigns probability by accumulated volume over a plane region.
The event a<X≤b places no restriction on Y. :: \{a<X\le b\}\leftrightarrow(a,b]\times\mathbb R :: Geometrically it is the entire vertical strip over that x interval.
Integrate the joint density over the strip, adding y values first. :: P(a<X\le b)=\int_a^b\left[\int_{-\infty}^{\infty}f(x,y)dy\right]dx :: Nonnegativity allows this iterated integral by Tonelli’s theorem, the integral extension of rearranging nonnegative sums.
Name the inner integral f_X(x). :: f_X(x)=\int_{-\infty}^{\infty}f(x,y)dy\ge0 :: This keeps x fixed and totals all compatible y values.
Integrate this candidate over all x to check normalization. :: \int_{-\infty}^{\infty}f_X(x)dx=\iint f(x,y)dy\,dx=1 :: It is nonnegative and has total area 1.
The strip equation becomes the ordinary interval-density formula. :: P(a<X\le b)=\int_a^bf_X(x)dx :: Thus f_X really is the marginal density, not just a formal integral.
Interchange the roles of x and y to obtain the other marginal. :: f_Y(y)=\int_{-\infty}^{\infty}f(x,y)dx :: The integration bounds must follow the joint support; density is zero off that support.
''','Marginalization adds every compatible value of the discarded coordinate.')
put('6.2.2','Pull each output event back to an event involving only its own input.',r'''
Let C and D be any allowed output sets, and define their input preimages. :: A=\{x:g(x)\in C\},\quad B=\{y:h(y)\in D\} :: A preimage is a set of inputs, not necessarily a single-valued inverse function.
The output event g(X) in C occurs exactly when X is in A. :: \{g(X)\in C\}=\{X\in A\} :: This equivalence follows directly from the definition of A.
Translate the second output event in the same way. :: \{h(Y)\in D\}=\{Y\in B\} :: Both g and h must define valid measurable random variables.
Apply independence of the inputs to A and B. :: P(X\in A,Y\in B)=P(X\in A)P(Y\in B) :: Independence applies to every allowed separate input event.
Translate each factor back to the corresponding output event. :: P(g(X)\in C,h(Y)\in D)=P(g(X)\in C)P(h(Y)\in D) :: This is the defining independence equation for the outputs.
Because C and D were arbitrary, independence holds for the entire output distributions. :: g(X)\ \text{and}\ h(Y)\ \text{are independent} :: Applying two functions to the same input would not satisfy this argument.
For a nonsingular bivariate normal, setting correlation ρ=0 makes its joint density factor into the two normal marginals. :: f_{X,Y}(x,y)=f_X(x)f_Y(y)\quad(\rho=0) :: Conversely, independence makes covariance zero. This extra equivalence relies on the jointly normal model; see the explicit completed square in the conditional-normal note.
''','Separate functions preserve independent inputs. Zero correlation implies independence only under additional assumptions such as joint normality.')
put('6.3.1','Collect all pairs whose sum has the requested value; use a coordinate change for densities.',r'''
Let S=X+Y with independent inputs. For discrete variables, split according to Y=y. :: \{S=s\}=\bigcup_y\{X=s-y,Y=y\} :: Different y values give disjoint events.
Add their probabilities and use independence for each pair. :: P(S=s)=\sum_yP(X=s-y)P(Y=y) :: All feasible splits are included; impossible values contribute zero.
For continuous variables, an exact-value event has probability zero, so use density or a CDF. :: F_S(s)=\int P(X\le s-y\mid Y=y)f_Y(y)dy :: This averages the cutoff probability over the possible y slices.
Independence keeps X’s conditional law equal to its marginal law. :: F_S(s)=\int F_X(s-y)f_Y(y)dy :: Knowing Y=y simply shifts the required X cutoff.
To derive the density without an unjustified derivative interchange, use coordinates (s,y). :: x=s-y,\quad y=y,\quad\left|\det\frac{\partial(x,y)}{\partial(s,y)}\right|=1 :: The derivative matrix has rows (1,−1) and (0,1); its determinant is 1.
The joint density in these new coordinates is the old independent product times that unit area factor. :: f_{S,Y}(s,y)=f_X(s-y)f_Y(y) :: The change-of-variables theorem preserves probability under this shear.
Integrate out y to obtain the marginal sum density. :: f_S(s)=\int_{-\infty}^{\infty}f_X(s-y)f_Y(y)dy :: This is convolution; the support restricts the feasible integration values automatically.
''','A sum probability or density adds contributions from every split of the total.')
put('6.3.3','Substitute gamma densities into convolution and show all powers and normalizing constants.',r'''
Let X and Y be independent gamma variables of shapes α,β>0 and common rate λ>0. :: f_X(x)=\frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}\quad(x>0) :: The formula for Y replaces α by β; Γ(a)=∫_0^∞ t^(a−1)e^(−t)dt.
For their positive sum s, only 0<y<s gives positive values to both inputs. :: f_{X+Y}(s)=\frac{\lambda^{\alpha+\beta}}{\Gamma(\alpha)\Gamma(\beta)}\int_0^s(s-y)^{\alpha-1}y^{\beta-1}e^{-\lambda(s-y)}e^{-\lambda y}dy :: This is convolution with both constants retained.
Combine exponentials with equal rate. :: e^{-\lambda(s-y)}e^{-\lambda y}=e^{-\lambda s} :: The exponent rule adds −λ(s−y) and −λy; unequal rates would leave a y-dependent exponential.
Put y=sv, so dy=s dv and 0<v<1. :: \int_0^s(s-y)^{\alpha-1}y^{\beta-1}dy=s^{\alpha+\beta-1}\int_0^1(1-v)^{\alpha-1}v^{\beta-1}dv :: The powers contribute s^(α−1+β−1), and dy contributes one additional s.
The last integral is B(β,α)=Γ(α)Γ(β)/Γ(α+β). :: B(\beta,\alpha)=\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)} :: Its derivation from the product of two gamma integrals is given in the gamma/beta family note; it requires two-variable integration.
Substitute the beta integral and cancel the two original gamma factors. :: f_{X+Y}(s)=\frac{\lambda^{\alpha+\beta}}{\Gamma(\alpha+\beta)}s^{\alpha+\beta-1}e^{-\lambda s} :: Every constant now matches a gamma density of shape α+β and rate λ.
Repeat this two-variable result for a finite independent list. :: \sum_iX_i\sim\operatorname{Gamma}\left(\sum_i\alpha_i,\lambda\right) :: An exponential is gamma shape 1, so n independent exponential waits give gamma shape n.
''','Independent gamma shapes add when the rates match.')
put('6.3.4','Derive Poisson and binomial sums by counting, and normal sums by an explicitly computed MGF.',r'''
For independent Poisson variables with rates λ_1 and λ_2, split the total k at X=j. :: P(X+Y=k)=\sum_{j=0}^ke^{-\lambda_1}\frac{\lambda_1^j}{j!}e^{-\lambda_2}\frac{\lambda_2^{k-j}}{(k-j)!} :: Independence multiplies the two masses for each split, and disjoint splits add.
Factor the common exponential and multiply inside by k!/k!. :: P(X+Y=k)=\frac{e^{-(\lambda_1+\lambda_2)}}{k!}\sum_{j=0}^k\binom kj\lambda_1^j\lambda_2^{k-j} :: The factorial ratio k!/[j!(k−j)!] is the binomial coefficient.
Use the binomial theorem on the finite sum. :: P(X+Y=k)=e^{-(\lambda_1+\lambda_2)}\frac{(\lambda_1+\lambda_2)^k}{k!} :: This is Poisson with the sum of the rates.
For independent binomial counts with n and m trials and common p, pool their independent trial lists. :: X+Y=\sum_{i=1}^{n+m}I_i\sim\operatorname{Bin}(n+m,p) :: The pooled flags still have the same success probability and are mutually independent.
For a normal X of mean μ and variance σ², complete the square in E[e^(tX)]. :: tx-\frac{(x-\mu)^2}{2\sigma^2}=-\frac{(x-\mu-\sigma^2t)^2}{2\sigma^2}+\mu t+\frac{\sigma^2t^2}{2} :: Expand the square on the right to verify this ordinary algebra identity.
The remaining shifted normal density integrates to 1. :: M_X(t)=E[e^{tX}]=e^{\mu t+\sigma^2t^2/2} :: MGF means moment generating function; this calculation establishes its formula rather than assuming it.
For independent normals, exponentials multiply and their expectations factor. :: M_{\sum_iX_i}(t)=\prod_iM_{X_i}(t)=\exp\left(t\sum_i\mu_i+\frac{t^2}{2}\sum_i\sigma_i^2\right) :: Factorization follows from the product joint distribution and iterated averaging.
Recognize the computed MGF as a normal one. :: \sum_iX_i\sim N\left(\sum_i\mu_i,\sum_i\sigma_i^2\right) :: The uniqueness theorem for MGFs finite near zero identifies the distribution; that theorem is an advanced prerequisite, not elementary algebra.
''','All three sum laws require independent variables. Binomials require a common p, and normal variances add because the covariances vanish.')
put('6.4.2','Divide a two-source allocation probability by the probability of the fixed total.',r'''
Take independent Poisson sources of rates λ_1,λ_2≥0 with λ_1+λ_2>0. :: X+Y\sim\operatorname{Poisson}(\lambda_1+\lambda_2) :: This sum law was proved by the binomial theorem in the preceding note.
Fix total n≥0; the event X=k with this total forces Y=n−k. :: \{X=k,X+Y=n\}=\{X=k,Y=n-k\} :: The possible values are 0≤k≤n.
Use conditional probability and independence in the numerator. :: P(X=k\mid X+Y=n)=\frac{P(X=k)P(Y=n-k)}{P(X+Y=n)} :: The denominator is positive for every n when the total rate is positive.
Insert all three Poisson masses. :: \frac{e^{-\lambda_1}\lambda_1^k/k!\;e^{-\lambda_2}\lambda_2^{n-k}/(n-k)!}{e^{-(\lambda_1+\lambda_2)}(\lambda_1+\lambda_2)^n/n!} :: Retaining the factorials makes the cancellation visible.
Cancel exponentials and bring n! to the numerator. :: \frac{n!}{k!(n-k)!}\frac{\lambda_1^k\lambda_2^{n-k}}{(\lambda_1+\lambda_2)^n} :: The exponential factors cancel by the exponent addition rule.
Split the denominator power into k and n−k factors and set p=λ_1/(λ_1+λ_2). :: P(X=k\mid X+Y=n)=\binom nk p^k(1-p)^{n-k} :: Since 1−p=λ_2/(λ_1+λ_2), this is exactly a binomial mass, including deterministic endpoint cases.
''','Given the total n, the first-source count is binomial with probability equal to its share of the total rate.')
put('6.5.2','Standardize both coordinates and complete a two-variable square explicitly.',r'''
Assume σ_X,σ_Y>0 and |ρ|<1 for the nonsingular bivariate normal density. :: u=\frac{x-\mu_X}{\sigma_X},\quad v=\frac{y-\mu_Y}{\sigma_Y} :: These are distances from the respective centers in standard-deviation units.
Write the defining joint density in these standardized coordinates. :: f_{X,Y}(x,y)=\frac{\exp[-(u^2-2\rho uv+v^2)/(2(1-\rho^2))]}{2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}} :: Joint normality, not just separate normal marginals, supplies this model.
Complete the square using (u−ρv)²=u²−2ρuv+ρ²v². :: u^2-2\rho uv+v^2=(u-\rho v)^2+(1-\rho^2)v^2 :: Adding the second term restores the full coefficient 1 of v².
Separate the density into a v-only marginal factor and an x-dependent factor. :: f_{X,Y}(x,y)=\frac{e^{-v^2/2}}{\sigma_Y\sqrt{2\pi}}\;\frac{e^{-(u-\rho v)^2/[2(1-\rho^2)]}}{\sigma_X\sqrt{2\pi(1-\rho^2)}} :: The second factor integrates to 1 in x, by a translated and rescaled normal integral; therefore the first is f_Y(y).
Divide the joint density by the positive marginal density. :: f_{X\mid Y}(x\mid y)=\frac{e^{-(u-\rho v)^2/[2(1-\rho^2)]}}{\sigma_X\sqrt{2\pi(1-\rho^2)}} :: Conditioning on a continuous value uses this density slice, not a ratio of zero-probability point events.
Translate u−ρv back into x units. :: u-\rho v=\frac{x-[\mu_X+\rho(\sigma_X/\sigma_Y)(y-\mu_Y)]}{\sigma_X} :: Put the two standardized terms over the common denominator σ_X.
Read off the center and squared width from the one-variable normal density. :: X\mid Y=y\sim N\left(\mu_X+\rho\frac{\sigma_X}{\sigma_Y}(y-\mu_Y),\sigma_X^2(1-\rho^2)\right) :: For ρ=0 the conditional density is the unchanged X marginal, also proving independence in this model.
If |ρ|=1, the density division above is unavailable; instead the standardized variables obey an exact linear relation. :: X=\mu_X+\rho\frac{\sigma_X}{\sigma_Y}(Y-\mu_Y)\quad\text{almost surely} :: The variance of the difference is zero. The conditional law is a point mass with variance zero.
''','The conditional normal formula follows from completed-square algebra under the jointly normal model; singular correlation endpoints require a constant conditional law.')
put('6.6.1','Count observations below a cutoff and show the cancellation in the derivative of that count probability.',r'''
Take n independent observations with common continuous CDF F and density f; let X_(k) be the k-th smallest. :: I_i(x)=\mathbf1_{\{X_i\le x\}},\quad N_x=\sum_{i=1}^nI_i(x) :: The flags are independent with common success chance F(x).
The count therefore has a binomial distribution. :: P(N_x=j)=\binom njF(x)^j[1-F(x)]^{n-j} :: Choose the j observations below the cutoff and multiply their independent probabilities.
The k-th smallest is at most x exactly when at least k observations are at most x. :: F_{X_{(k)}}(x)=P(N_x\ge k)=\sum_{j=k}^n\binom njF(x)^j[1-F(x)]^{n-j} :: This statement is exact, including all possibilities for j.
Let u=F(x) and differentiate the finite binomial tail with respect to u. :: \frac d{du}\sum_{j=k}^n\binom nju^j(1-u)^{n-j}=\sum_{j=k}^n\binom nj\left[ju^{j-1}(1-u)^{n-j}-(n-j)u^j(1-u)^{n-j-1}\right] :: Product and power rules give the two terms; the negative term is absent when j=n.
Use factorial cancellation in each coefficient. :: j\binom nj=n\binom{n-1}{j-1},\quad(n-j)\binom nj=n\binom{n-1}j :: Expanding the factorial definitions verifies each identity.
Reindex the positive terms at j−1; all terms indexed k through n−1 cancel their negative counterparts. :: \frac d{du}P(N_x\ge k)=n\binom{n-1}{k-1}u^{k-1}(1-u)^{n-k} :: Only the positive term indexed k−1 remains.
Multiply by du/dx=f(x) by the chain rule. :: f_{X_{(k)}}(x)=\frac{n!}{(k-1)!(n-k)!}F(x)^{k-1}[1-F(x)]^{n-k}f(x) :: The coefficient equals n times (n−1 choose k−1); the density equation holds almost everywhere.
''','Order-statistic CDFs are binomial tail probabilities, and their densities follow by a finite telescoping derivative.')
put('6.6.2','Choose which observation is the minimum, then place all others within the allowed range.',r'''
Take n≥2 iid observations with continuous CDF F and density f. :: R=X_{(n)}-X_{(1)}\ge0 :: A continuous sample has ties with probability zero.
Fix one labeled observation as the minimum near x. :: f(x)\,dx :: This denotes its small-interval density contribution, not the probability of an exact point.
For the range to be at most a≥0, every other observation must lie between x and x+a. :: P(x<X_i\le x+a)=F(x+a)-F(x) :: This is the CDF interval formula; continuity makes endpoint choices irrelevant.
Independence multiplies the n−1 other-observation chances; n labels can be the unique minimum. :: P(R\le a)=n\int_{-\infty}^{\infty}[F(x+a)-F(x)]^{n-1}f(x)dx :: Formally, partition by the minimum’s label and integrate its value against the product joint density, so the small-interval argument becomes an exact integral.
Similarly choose distinct labels for a minimum x and maximum z>x. :: f_{X_{(1)},X_{(n)}}(x,z)=n(n-1)[F(z)-F(x)]^{n-2}f(x)f(z) :: The other n−2 values lie between them; there are n(n−1) choices of the two labels.
For uniform (0,1) inputs and 0<a<1, split the minimum at x=1−a. :: P(R\le a)=n\int_0^{1-a}a^{n-1}dx+n\int_{1-a}^1(1-x)^{n-1}dx :: In the first part the allowed interval has length a; near the upper endpoint its length is only 1−x.
Evaluate both integrals using the power rule. :: P(R\le a)=n(1-a)a^{n-1}+a^n :: The second integral is a^n/n before multiplying by n.
Differentiate this finite expression and combine the a^(n−1) terms. :: f_R(a)=n(n-1)a^{n-2}(1-a)\quad(0<a<1) :: The derivative terms −na^(n−1) and +na^(n−1) cancel; the CDF is 0 below 0 and 1 at or above 1.
''','Range probabilities add all possible minima while constraining every other sample value to the allowed interval.')
put('6.7.1','Explain the area factor through a parallelogram before using the integral transformation theorem.',r'''
Let y=g(x) be one-to-one on its support, with differentiable inverse x=h(y). :: x_1=h_1(y_1,y_2),\quad x_2=h_2(y_1,y_2) :: We need the inverse map because output area must be converted back to input area.
A small output displacement is approximately multiplied by the inverse derivative matrix A. :: A=Dh=\begin{pmatrix}\partial h_1/\partial y_1&\partial h_1/\partial y_2\\ \partial h_2/\partial y_1&\partial h_2/\partial y_2\end{pmatrix} :: Partial derivative means the slope when one coordinate changes and the other is held fixed.
The image of a small rectangle has side vectors proportional to the two columns of A. :: A=\begin{pmatrix}a&b\\ c&d\end{pmatrix},\quad\text{area scale}=|ad-bc| :: The parallelogram area from vectors (a,c) and (b,d) is |ad−bc|, the high school coordinate-geometry determinant formula.
Probability in an output region B equals probability in its input preimage. :: P(Y\in B)=\int_{h(B)}f_X(x)\,dx :: A one-to-one transformation assigns exactly the same outcomes to these two regions.
The multivariable change-of-variables theorem applies the local area factor inside the integral. :: P(Y\in B)=\int_B f_X(h(y))|\det Dh(y)|\,dy :: The small-parallelogram picture explains the factor; proving its use for general integrals is an advanced calculus theorem.
The function multiplying output area is therefore the output density. :: f_Y(y)=f_X(h(y))|\det Dh(y)| :: Use zero outside the transformed support; multiple inverse branches require adding separate contributions.
For a simple stretch y_1=2x_1, y_2=3x_2, check the inverse factor. :: h(y)=(y_1/2,y_2/3),\quad|\det Dh|=1/6 :: Output area is six times larger, so density must become six times smaller to preserve probability.
''','The absolute inverse Jacobian corrects for local area or volume changes; high school geometry explains the factor, and calculus justifies the full integral rule.')
put('6.7.2','Calculate the inverse Jacobian and normalize the separated gamma and beta factors.',r'''
Let X,Y be independent gammas with shapes α,β>0 and common rate λ>0. :: U=X+Y,\quad V=\frac X{X+Y} :: Since X,Y>0, the new support is u>0 and 0<v<1.
Solve these two equations for the original coordinates. :: x=uv,\quad y=u(1-v) :: The first gets fraction v of total u; the second gets the remaining fraction.
Differentiate the inverse coordinates and calculate the determinant. :: \frac{\partial(x,y)}{\partial(u,v)}=\begin{pmatrix}v&u\\1-v&-u\end{pmatrix},\quad|{-uv-u(1-v)}|=u :: The absolute inverse area factor is u, which must multiply the density.
Substitute the independent gamma product and that factor. :: f_{U,V}(u,v)=\frac{\lambda^{\alpha+\beta}}{\Gamma(\alpha)\Gamma(\beta)}(uv)^{\alpha-1}[u(1-v)]^{\beta-1}e^{-\lambda u}u :: The exponentials combine because x+y=u.
Collect powers of u and v. :: f_{U,V}(u,v)=\frac{\lambda^{\alpha+\beta}}{\Gamma(\alpha)\Gamma(\beta)}u^{\alpha+\beta-1}e^{-\lambda u}v^{\alpha-1}(1-v)^{\beta-1} :: The Jacobian contributes the extra power u needed for the sum’s gamma shape.
Multiply and divide by Γ(α+β) to separate two normalized factors. :: f_{U,V}(u,v)=\left[\frac{\lambda^{\alpha+\beta}}{\Gamma(\alpha+\beta)}u^{\alpha+\beta-1}e^{-\lambda u}\right]\left[\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}v^{\alpha-1}(1-v)^{\beta-1}\right] :: The beta–gamma identity derived in the family note shows the second factor integrates to 1.
Each factor has its own full support independently of the other. :: f_{U,V}(u,v)=f_U(u)f_V(v) :: This product over u>0,0<v<1 proves U and V independent, with gamma(α+β,λ) and beta(α,β) marginals.
''','With a common rate, gamma total and proportion are independent. Both the Jacobian and the normalizing constants are essential.')
put('7.1.1','Compare nonnegative differences before averaging.',r'''
Assume X≤Y except on a set of probability zero, and both have finite absolute means. :: D=Y-X\ge0\quad\text{almost surely} :: Almost surely means the inequality can fail only on outcomes of probability zero.
A nonnegative value times a nonnegative probability is nonnegative. :: E[D]\ge0 :: The same is true for an integral of a nonnegative quantity; zero-probability exceptions contribute no average.
Linearity turns the difference’s average into a difference of averages. :: E[D]=E[Y]-E[X] :: Finiteness prevents undefined subtraction of infinite quantities.
Add E[X] to the inequality E[Y]−E[X]≥0. :: E[X]\le E[Y] :: Taking expectations therefore preserves an almost-sure ordering.
If a≤X≤b, apply that comparison twice. :: E[a]\le E[X]\le E[b] :: Treat a and b as constant random variables.
A constant averages to itself because probability totals 1. :: a\le E[X]\le b :: If all observations lie in an interval, their weighted average cannot lie outside it.
''','Order preservation follows from nonnegative weighted averages, not from an assumption of independence.')
put('7.2.2','Average whole pairs; keep their joint probabilities rather than inventing independent weights.',r'''
For discrete variables, the pair (x,y) has probability p(x,y). :: p(x,y)=P(X=x,Y=y) :: This is the joint mass; it need not equal the product of marginals.
Let T=g(X,Y) be the output to average. :: E[T]=\sum_t tP(T=t) :: Use nonnegative output or finite E[|T|] so regrouping is permitted.
An output t collects all pairs mapped to t. :: P(T=t)=\sum_{(x,y):g(x,y)=t}p(x,y) :: The pair events are disjoint.
Insert this expression and replace t by its equal value g(x,y). :: E[T]=\sum_t\sum_{g(x,y)=t}g(x,y)p(x,y) :: Every pair belongs to exactly one output group.
Remove the grouping to obtain the pairwise weighted average. :: E[g(X,Y)]=\sum_x\sum_yg(x,y)p(x,y) :: There is no independence requirement.
For a joint density and g≥0, represent the output by its threshold layers. :: g(x,y)=\int_0^{\infty}\mathbf1_{\{g(x,y)>u\}}du :: The inner unit-height area has length g(x,y).
Average those layers and exchange nonnegative integrals by Tonelli’s theorem. :: E[g(X,Y)]=\iint g(x,y)f_{X,Y}(x,y)dx\,dy :: For signed integrable g, apply this to its positive and negative parts and subtract their finite averages.
''','LOTUS for a pair uses the joint law, so dependence is retained automatically.')
put('7.3.2','Count ordered groups of successful events with products of flags.',r'''
Let I_i be the 0-or-1 flag of A_i and X the number of occurring events. :: X=\sum_{i=1}^nI_i :: Fix an integer k with 1≤k≤n.
If X events occurred, choose an ordered list of k different occurring events. :: (X)_k=X(X-1)\cdots(X-k+1) :: There are X choices for the first, X−1 for the second, and so on; the count is zero when X<k.
First choosing an unordered group and then ordering it gives the same count. :: (X)_k=k!\binom Xk :: Each chosen group has exactly k! orders.
For one fixed k-index group, all its events occurred exactly when every flag is 1. :: I_{i_1}\cdots I_{i_k}=\mathbf1_{A_{i_1}\cap\cdots\cap A_{i_k}} :: A product of 0-or-1 values is 1 precisely when no factor is zero.
Add over all increasing index lists to count the successful groups. :: \binom Xk=\sum_{i_1<\cdots<i_k}I_{i_1}\cdots I_{i_k} :: Each unordered group has one increasing list of indices.
Multiply by k!, then take expectations term by term. :: E[(X)_k]=k!\sum_{i_1<\cdots<i_k}P(A_{i_1}\cap\cdots\cap A_{i_k}) :: The mean of each product flag is the joint probability of its intersection.
For k=2, use X²=X(X−1)+X. :: E[X^2]=E[X]+2\sum_{i<j}P(A_i\cap A_j) :: Subtract E[X]² to obtain variance. Independence is needed only if replacing joint probabilities by products.
''','Factorial moments count ordered selections of successful events and therefore depend on their intersection probabilities.')
put('7.5.2','Expand each group average and cancel the conditioning weight.',r'''
Assume E[|X|]<∞ and consider discrete groups Y=y of positive probability. :: m(y)=E[X\mid Y=y] :: Groups of zero probability can be omitted.
Write the within-group weighted average explicitly. :: m(y)=\sum_x xP(X=x\mid Y=y) :: This is the ordinary mean in the conditional probability model.
The average of group means weights each group by its occurrence probability. :: E[m(Y)]=\sum_y m(y)P(Y=y) :: A small group receives a small weight; an unweighted average of group means is generally wrong.
Substitute the inner mean and use the conditional-probability product rule. :: E[m(Y)]=\sum_y\sum_x xP(X=x,Y=y) :: Multiplying P(X=x given Y=y) by P(Y=y) cancels the conditioning denominator.
Interchange the sums and add all Y-groups for each x. :: E[m(Y)]=\sum_xx\sum_yP(X=x,Y=y)=\sum_xxP(X=x) :: Finite absolute mean justifies rearrangement, and the inner sum is the X marginal.
Recognize the resulting overall weighted average. :: E[E[X\mid Y]]=E[X] :: This is the law of total expectation, also called the tower rule.
For a joint density, replace sums by integrals and use the density factorization. :: \int\left[\int x f_{X\mid Y}(x\mid y)dx\right]f_Y(y)dy=\iint x f_{X,Y}(x,y)dx\,dy :: Absolute integrability justifies exchanging these integrals; the abstract conditional-expectation version follows from its defining averaging property.
''','Averaging conditional means with the correct group weights recovers the overall mean.')
put('7.5.3','Write within-group and between-group variances separately, then show their middle terms cancel.',r'''
Assume E[X²]<∞, set m(Y)=E[X given Y], and write μ=E[X]. :: E[m(Y)]=\mu :: Total expectation proves the equality of overall and averaged group means.
Within a fixed Y-group, use variance as second moment minus squared mean. :: \operatorname{Var}(X\mid Y)=E[X^2\mid Y]-m(Y)^2 :: This is the ordinary variance identity applied inside each group.
Average that identity over groups. :: E[\operatorname{Var}(X\mid Y)]=E[E[X^2\mid Y]]-E[m(Y)^2] :: Linearity applies; the conditional-mean-square bound makes these terms finite when X has finite second moment.
Apply total expectation to X². :: E[\operatorname{Var}(X\mid Y)]=E[X^2]-E[m(Y)^2] :: Averaging within-group second moments returns the overall second moment.
Compute the variance of the group mean itself. :: \operatorname{Var}(m(Y))=E[m(Y)^2]-\mu^2 :: Its mean is μ from the first step.
Add the preceding two equations and cancel E[m(Y)²]. :: E[\operatorname{Var}(X\mid Y)]+\operatorname{Var}(m(Y))=E[X^2]-\mu^2 :: The right side is the ordinary variance of X.
Recognize the total-variance identity. :: \operatorname{Var}(X)=E[\operatorname{Var}(X\mid Y)]+\operatorname{Var}(E[X\mid Y]) :: The two nonnegative terms measure average within-group spread and spread of the group means.
''','Total variance splits into within-group and between-group variation; the split follows from two variance expansions and total expectation.')
put('7.6.1','Split prediction error at the conditional mean and expand its square.',r'''
Assume E[Y²]<∞ and write m(X)=E[Y given X]. :: Y-g(X)=[Y-m(X)]+[m(X)-g(X)] :: Add and subtract m(X); the two brackets are residual noise and prediction offset.
Within a fixed X-group, m(X) and g(X) are constants. :: E[Y-m(X)\mid X]=0 :: The conditional mean is defined to be that group’s average.
Expand the square of the two brackets. :: (Y-g(X))^2=(Y-m(X))^2+2(Y-m(X))(m(X)-g(X))+(m(X)-g(X))^2 :: This is the usual three-term expansion of (a+b)².
Take the conditional average; the cross term contains a constant times a zero mean. :: E[(Y-g(X))^2\mid X]=\operatorname{Var}(Y\mid X)+(m(X)-g(X))^2 :: The first bracket’s mean square is the conditional variance.
Average over X by total expectation. :: E[(Y-g(X))^2]=E[\operatorname{Var}(Y\mid X)]+E[(m(X)-g(X))^2] :: For predictions with finite error, all cross-term operations are justified by finite second moments; infinite-error predictions cannot improve the finite-error conditional mean.
The added offset term is an average of nonnegative squares. :: E[(m(X)-g(X))^2]\ge0 :: It cannot lower the error.
Choose g(X)=m(X) to make this term zero. :: \min_g E[(Y-g(X))^2]=E[\operatorname{Var}(Y\mid X)] :: Equality requires g(X)=m(X) almost surely; arbitrary changes on zero-probability inputs do not affect the error.
''','The conditional mean gives the smallest mean squared prediction error among predictions based on X.')
put('7.6.2','Minimize an error quadratic by completing the square, avoiding differentiation.',r'''
Let μ_X=E[X], μ_Y=E[Y], V=Var(X)>0, and C=Cov(X,Y). :: U=X-\mu_X,\quad W=Y-\mu_Y :: The centered variables have mean zero and finite second moments.
For prediction a+bX, separate the mean error from centered error. :: Y-a-bX=(W-bU)+d,\quad d=\mu_Y-a-b\mu_X :: The term d is fixed.
Expand the square and average; the cross term with d vanishes. :: E[(Y-a-bX)^2]=E[(W-bU)^2]+d^2 :: This follows because E[W−bU]=0.
For any slope b, the nonnegative d² is minimized by d=0. :: a=\mu_Y-b\mu_X :: The fitted line therefore passes through the pair of means.
Expand the remaining centered square. :: E[(W-bU)^2]=\operatorname{Var}(Y)-2bC+b^2V :: The mean product E[WU] is covariance C.
Complete the square in b. :: E[(W-bU)^2]=\operatorname{Var}(Y)-\frac{C^2}{V}+V\left(b-\frac CV\right)^2 :: Expanding the final square gives Vb²−2bC+C²/V; the subtracted constant cancels the last term.
Because V>0, the final term is smallest at b=C/V. :: b^*=\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)},\quad a^*=E[Y]-b^*E[X] :: The minimum error is Var(Y)−C²/V.
If Var(Y)>0, use ρ=C/sqrt(V Var(Y)). :: \text{minimum error}=\operatorname{Var}(Y)(1-\rho^2) :: The nonnegativity of this minimum also proves |ρ|≤1. If Var(Y)=0 the constant mean predicts perfectly.
''','The best linear predictor follows entirely from centering and completing a quadratic square.')
put('7.7.2','Use the exponent addition rule and independence of the two factors.',r'''
For a real t where the required averages are finite, define the MGF. :: M_X(t)=E[e^{tX}],\quad M_Y(t)=E[e^{tY}] :: MGF abbreviates moment generating function; it need not be finite at every t.
The exponent addition rule holds at each outcome. :: e^{t(X+Y)}=e^{tX}e^{tY} :: The left side combines the sum inside the exponential.
For discrete independent variables, their joint masses factor. :: E[e^{tX}e^{tY}]=\sum_x\sum_y e^{tx}e^{ty}p_X(x)p_Y(y) :: Independence is used here, rather than in the exponent rule.
Factor the double sum into two separate sums. :: E[e^{tX}e^{tY}]=\left(\sum_xe^{tx}p_X(x)\right)\left(\sum_ye^{ty}p_Y(y)\right) :: For densities, the same calculation uses integrals; nonnegative exponential factors permit iterated integration.
Recognize the two individual MGFs. :: M_{X+Y}(t)=M_X(t)M_Y(t) :: For a finite independent list, repeat the two-variable argument.
To identify the sum law from this formula, require finiteness on an interval about zero. :: M_{\sum_iX_i}(t)=\prod_iM_{X_i}(t) :: The MGF uniqueness theorem on such an interval is an advanced prerequisite; matching a formula at only one value of t is not sufficient.
''','Independent-sum MGFs multiply wherever finite; identifying a distribution additionally uses the uniqueness theorem.')
put('7.7.3','Condition on the random number of summands before taking the overall average.',r'''
Let N be a nonnegative integer count, independent of iid summands X_i. :: S=\sum_{i=1}^NX_i :: Set S=0 when N=0, so its exponential is 1 in that case.
When N=n, independence of N leaves the summands’ distributions unchanged. :: E[e^{tS}\mid N=n]=M_X(t)^n :: This is the fixed-length MGF product rule, including M_X(t)^0=1.
Average this fixed-count expression over all possible n. :: M_S(t)=\sum_{n=0}^{\infty}P(N=n)M_X(t)^n=E[M_X(t)^N] :: Total expectation supplies the outer count weights.
For finite positive M_X(t), rewrite its n-th power with a logarithm. :: M_X(t)^n=e^{n\log M_X(t)} :: The logarithm is the inverse of the positive exponential; its argument here is positive.
Apply the definition of the count MGF at this new argument. :: M_S(t)=M_N(\log M_X(t)) :: This equation is used only where the required averages are finite.
Write μ=E[X] and σ²=Var(X); for fixed count n, add means and variances. :: E[S\mid N=n]=n\mu,\quad\operatorname{Var}(S\mid N=n)=n\sigma^2 :: For the variance identity below assume E[X²]<∞ and E[N²]<∞.
Use total expectation for the mean. :: E[S]=E[N]\mu :: Every expected summand contributes the same expected amount.
Use total variance for the two sources of spread. :: \operatorname{Var}(S)=E[N]\sigma^2+\mu^2\operatorname{Var}(N) :: The first term averages within-count variance nσ²; the second is Var(Nμ), the variability of conditional means.
''','Random sums have randomness both in individual values and in the count; conditioning separates the two.')
put('7.8.1','Express the dependent normal variables using independent standard-normal ingredients.',r'''
By the stated multivariate-normal construction, each X_j uses independent standard normals Z_k. :: X_j=\mu_j+\sum_kb_{kj}Z_k :: The X_j may share Z ingredients and therefore be dependent.
Insert this construction into a weighted sum T=Σc_j X_j. :: T=\sum_jc_j\mu_j+\sum_j\sum_kc_jb_{kj}Z_k :: The constants c_j and b_kj are fixed.
Reorder the finite sums and collect each Z_k coefficient. :: m=\sum_jc_j\mu_j,\quad d_k=\sum_jc_jb_{kj},\quad T=m+\sum_kd_kZ_k :: This is simply collecting like terms in algebra.
Use the standard-normal MGF, derived by completing the square in the normal-sum note. :: M_{d_kZ_k}(t)=e^{d_k^2t^2/2} :: Scaling a variable changes the argument of its MGF to d_k t.
Independence of the Z_k permits multiplication of their MGFs. :: M_T(t)=e^{mt}\prod_ke^{d_k^2t^2/2}=e^{mt+(t^2/2)\sum_kd_k^2} :: The shared X_j ingredients never need to be treated as independent.
MGF uniqueness identifies a normal law if v=Σd_k²>0. :: T\sim N(m,v),\quad v=\sum_kd_k^2 :: If v=0, every d_k is zero and T is the constant m.
Expand v and identify the ingredient covariance of X_i and X_j. :: v=\sum_{i,j}c_ic_j\sum_kb_{ki}b_{kj}=\sum_{i,j}c_ic_j\operatorname{Cov}(X_i,X_j) :: Independent standard-normal ingredients have covariance 0 for different indices and variance 1 for equal indices.
The characteristic function of the whole vector consequently depends only on means and covariances. :: E[e^{i\sum_jt_jX_j}]=\exp\left(i\sum_jt_j\mu_j-\frac12\sum_{i,j}t_it_j\operatorname{Cov}(X_i,X_j)\right) :: Here i²=−1. Uniqueness of multivariate characteristic functions explains why those parameters specify the whole jointly normal law.
''','Every linear combination in a jointly normal vector is normal or constant, with variance including all covariance terms.')
put('7.8.2','Separate the sample’s average direction from its perpendicular deviation directions.',r'''
Assume n≥2 independent N(μ,σ²) observations with σ>0 and standardize them. :: Z_i=\frac{X_i-\mu}{\sigma}\quad(i=1,\ldots,n) :: These are independent N(0,1) variables.
The standardized sample mean uses the unit vector with equal coordinates. :: A=\frac1{\sqrt n}\sum_iZ_i=\frac{\sqrt n(\bar X-\mu)}\sigma :: The vector (1,...,1)/sqrt(n) has squared length n/n=1, so A has mean 0 and variance 1.
Extend that unit vector to n mutually perpendicular unit directions and call the other coordinates B_1,...,B_(n−1). :: \sum_iZ_i^2=A^2+\sum_{j=1}^{n-1}B_j^2 :: Perpendicular axes preserve squared length by Pythagoras. Constructing such a basis is a linear-algebra prerequisite.
The joint standard-normal density depends only on squared length. :: f_Z(z)=(2\pi)^{-n/2}\exp\left(-\frac12\sum_i z_i^2\right) :: Independence multiplies n one-dimensional normal densities.
Rotation preserves length and has absolute determinant 1, so the transformed density factors again. :: f_{A,B}(a,b)=(2\pi)^{-n/2}e^{-a^2/2}\prod_{j=1}^{n-1}e^{-b_j^2/2} :: The change-of-variables theorem therefore proves that A and every B_j are independent standard normals, not merely uncorrelated.
Expand the centered sum of squares; ΣZ_i=sqrt(n)A. :: \sum_i(Z_i-\bar Z)^2=\sum_iZ_i^2-n\bar Z^2=\sum_iZ_i^2-A^2 :: The cross term −2bar(Z)ΣZ_i and the n copies of bar(Z)² combine into −nbar(Z)².
Use Pythagoras and undo the scale σ. :: \frac{(n-1)S^2}{\sigma^2}=\sum_{j=1}^{n-1}B_j^2\sim\chi^2_{n-1} :: A chi-squared variable is defined as a sum of that many independent squared standard normals.
The mean uses only A and the variance uses only the independent B coordinates. :: \bar X\sim N(\mu,\sigma^2/n),\quad\bar X\text{ is independent of }S^2 :: Functions of independent coordinate groups remain independent; this relies on the normal density’s rotation property.
''','Normal samples give an independent mean and variance, and n−1 deviation directions explain the chi-squared degrees of freedom.')
put('8.2.1','Bound a large-value flag, then apply that same bound to squared deviations.',r'''
Let X≥0 and a>0, and set I=1 when X≥a and 0 otherwise. :: I=\mathbf1_{\{X\ge a\}} :: This flag identifies the tail event we want to bound.
If X≥a then aI=a≤X; if X<a then aI=0≤X. :: aI\le X :: Checking both cases proves the inequality at every allowed outcome.
Averaging preserves an inequality between nonnegative quantities. :: aE[I]\le E[X] :: This is order preservation of expectation, proved from nonnegative weights.
The flag’s weighted average is its success probability. :: E[I]=1P(X\ge a)+0P(X<a)=P(X\ge a) :: Substitute this into the preceding comparison.
Divide by the positive threshold a. :: P(X\ge a)\le\frac{E[X]}a :: This is Markov’s inequality; if the mean is infinite the bound is true but uninformative.
For a variable with mean μ and finite variance σ², choose a new nonnegative quantity Y. :: Y=(X-\mu)^2,\quad E[Y]=\sigma^2 :: Squaring makes Y nonnegative, and its mean is the definition of variance.
For k>0, taking squares is equivalent to comparing absolute distances. :: \{|X-\mu|\ge k\}=\{Y\ge k^2\} :: Both sides describe deviations at least k in either direction.
Apply Markov to Y with threshold k². :: P(|X-\mu|\ge k)\le\frac{E[Y]}{k^2}=\frac{\sigma^2}{k^2} :: This proves Chebyshev’s inequality without a distribution-specific formula.
''','Markov bounds nonnegative upper tails; Chebyshev applies it to squared distance from the mean.')
put('8.2.2','Compute the sample average’s mean and variance explicitly, then use Chebyshev.',r'''
Take n independent identically distributed observations with finite variance σ² and mean μ. :: \bar X_n=\frac1n\sum_{i=1}^nX_i :: Identically distributed means the same probability law; independent means the joint law factors.
Apply linearity to the average. :: E[\bar X_n]=\frac1n\sum_{i=1}^n\mu=\frac{n\mu}{n}=\mu :: The estimator is centered at the true mean for every n.
Independence makes all distinct-pair covariances zero, so variances of the sum add. :: \operatorname{Var}\left(\sum_{i=1}^nX_i\right)=n\sigma^2 :: This is where the independence assumption enters.
Dividing a variable by n divides its variance by n². :: \operatorname{Var}(\bar X_n)=\frac{n\sigma^2}{n^2}=\frac{\sigma^2}{n} :: The scale rule follows from squaring centered deviations.
Choose any fixed error tolerance ε>0 and apply Chebyshev to the average. :: P(|\bar X_n-\mu|\ge\epsilon)\le\frac{\sigma^2}{n\epsilon^2} :: Its mean and variance were computed in the preceding steps.
For any desired probability bound δ>0, choose n greater than σ²/(δε²). :: n>\frac{\sigma^2}{\delta\epsilon^2}\ \Longrightarrow\ P(|\bar X_n-\mu|\ge\epsilon)<\delta :: Solving the upper-bound inequality shows quantitatively why the error chance tends to zero.
Since δ can be made arbitrarily small, this is convergence in probability. :: P(|\bar X_n-\mu|\ge\epsilon)\longrightarrow0 :: It concerns the error chance at each n; it does not yet establish convergence of entire infinite sample paths.
''','This elementary finite-variance proof gives the weak law with an explicit error-probability bound.')
put('8.3.1','Explain the standardization, then give the characteristic-function proof with its advanced prerequisites stated.',r'''
Take iid X_i with mean μ and finite positive variance σ², and standardize each observation. :: Y_i=\frac{X_i-\mu}{\sigma},\quad E[Y_i]=0,\quad E[Y_i^2]=1 :: Subtracting the mean centers values; division by σ makes variance 1.
The sum of the standardized observations has variance n, so divide by sqrt(n). :: Z_n=\frac1{\sqrt n}\sum_iY_i=\frac{\sum_iX_i-n\mu}{\sigma\sqrt n} :: This explains both the centering nμ and the scale σsqrt(n) using earlier mean and variance rules.
Encode a distribution by its characteristic function ψ. :: \psi_Y(t)=E[e^{itY}],\quad i^2=-1 :: By Euler’s identity e^(iu)=cos(u)+i sin(u), its absolute value is 1, so this average exists even when an MGF does not.
The second-order exponential expansion has an error controlled by u². :: e^{iu}=1+iu-u^2/2+r(u),\quad r(u)/u^2\to0,\quad|r(u)|\le C u^2 :: Taylor’s theorem proves the small-u limit; for large |u| the bound follows from |e^(iu)|=1 and the polynomial terms. C is a fixed finite constant.
Put u=tY and average the expansion. :: \psi_Y(t)=1+itE[Y]-\frac{t^2}2E[Y^2]+E[r(tY)]=1-\frac{t^2}2+o(t^2) :: Dominated convergence applies to r(tY)/t², bounded by CY² with finite mean. Taylor’s theorem and dominated convergence are calculus prerequisites, not high school algebra.
Independence factors the encoding of the sum, and scaling changes its argument. :: \psi_{Z_n}(t)=\prod_{i=1}^n\psi_Y(t/\sqrt n)=[\psi_Y(t/\sqrt n)]^n :: This follows from e^(itΣY_i/sqrt(n)) being the product of the individual exponentials.
Insert the small-argument expansion at fixed t. :: \psi_{Z_n}(t)=[1-t^2/(2n)+o(1/n)]^n\longrightarrow e^{-t^2/2} :: The exponential limit follows by taking the local logarithm: n log(1+u_n)=nu_n+O(n|u_n|²)→−t²/2.
Verify this limiting encoding belongs to a standard normal G with density φ. :: \psi_G'(t)=-t\psi_G(t),\quad\psi_G(0)=1\ \Longrightarrow\ \psi_G(t)=e^{-t^2/2} :: Differentiate the normal integral and integrate by parts using φ'(x)=−xφ(x); boundary terms vanish, giving the displayed differential equation.
Apply the characteristic-function continuity theorem. :: P(Z_n\le a)\longrightarrow\Phi(a)\quad\text{for every real }a :: This advanced theorem says pointwise convergence of characteristic functions to one continuous at zero implies convergence in distribution; the normal CDF is continuous everywhere.
''','The mean/variance standardization is elementary. The full finite-variance CLT also uses Taylor expansion, dominated convergence and the characteristic-function continuity theorem, each identified at its point of use.')
put('8.4.1','Cut off rare extreme values, control the resulting variances, and explain how a convergent series gives a convergent average.',r'''
Assume iid real X_n with E[|X_1|]<∞ and mean μ, and discard only observations larger in size than their index. :: X'_n=X_n\mathbf1_{\{|X_n|\le n\}} :: The truncated variables remain independent because each uses only its own X_n.
For a fixed nonnegative z, the number of positive integers below z is at most z. :: \sum_{n\ge1}\mathbf1_{\{z>n\}}\le z :: For z=3.4, the counted integers are 1,2,3.
Average this counting bound at z=|X_1| using nonnegative summation. :: \sum_{n\ge1}P(X_n\ne X'_n)=\sum_{n\ge1}P(|X_1|>n)\le E[|X_1|]<\infty :: Identical distribution gives the middle equality; Tonelli’s theorem justifies adding the nonnegative indicator averages.
The probability of any cut after index m is bounded by the remaining sum of cut probabilities. :: P\left(\bigcup_{n\ge m}\{X_n\ne X'_n\}\right)\le\sum_{n\ge m}P(|X_1|>n)\longrightarrow0 :: The union bound proves the first Borel–Cantelli conclusion here: with probability one, there are only finitely many cuts.
Variance is second moment minus a nonnegative squared mean. :: \operatorname{Var}(X'_n)\le E[(X'_n)^2]=E[X_1^2\mathbf1_{\{|X_1|\le n\}}] :: The original second moment may be infinite; truncation makes each separate truncated second moment finite.
For integer n≥1, compare reciprocal squares with a telescoping fraction. :: \frac1{n^2}\le\frac2{n(n+1)}=2\left(\frac1n-\frac1{n+1}\right) :: The inequality is equivalent to n+1≤2n.
For z>0, start summing at m=max(1,ceil(z)); the telescoping bound controls the weighted tail. :: z^2\sum_{n\ge m}\frac1{n^2}\le\frac{2z^2}{m}\le2z :: Here ceil(z) is the smallest integer at least z, so m≥z; for z=0 both sides are zero.
Sum the variance bounds and average the preceding bound at z=|X_1|. :: \sum_{n\ge1}\frac{\operatorname{Var}(X'_n)}{n^2}\le2E[|X_1|]<\infty :: Nonnegative summation permits interchanging the expectation and sum.
Set D_n=X'_n−E[X'_n]. The independent-series convergence theorem applies to the centered variables D_n/n. :: \sum_{n\ge1}\frac{D_n}{n}\quad\text{converges almost surely} :: The theorem requires independent zero-mean terms with summable variances, exactly established above. Its proof uses Kolmogorov’s maximal inequality and is an advanced probability prerequisite.
For any sample path where that series converges, let s_n be its partial sums and s_0=0. :: D_i=i(s_i-s_{i-1}),\quad\frac1n\sum_{i=1}^nD_i=s_n-\frac1n\sum_{i=1}^{n-1}s_i :: Expand the finite sum and cancel consecutive coefficients; this is summation by parts, proved by direct algebra.
If s_n tends to s, the running average of its earlier values also tends to s. :: s_n\to s\ \Longrightarrow\ \frac1n\sum_{i=1}^{n-1}s_i\to s :: Split the average into a fixed finite initial segment and the later terms within ε of s; the initial segment divided by n vanishes. Thus the centered truncated average tends to 0. This derives the needed case of Kronecker’s lemma.
Truncated means approach μ because their removed absolute tail has vanishing mean. :: |E[X'_n]-\mu|\le E[|X_1|\mathbf1_{\{|X_1|>n\}}]\longrightarrow0 :: Dominated convergence applies since the tail tends pointwise to zero and is bounded by the integrable |X_1|.
The same running-average argument gives the limit of the means. :: \frac1n\sum_{i=1}^nE[X'_i]\to\mu :: Adding this to the centered-average limit proves that the truncated sample average tends to μ almost surely.
Only finitely many observations were cut on almost every path; their total difference is then a fixed finite number. :: \frac1n\sum_{i=1}^n(X_i-X'_i)\longrightarrow0 :: A fixed numerator divided by growing n tends to zero, so restoring those observations leaves the limit unchanged.
''','Thus the original sample average converges to μ almost surely under finite absolute mean. The independent-series theorem and dominated convergence remain explicit advanced prerequisites; the other bounds and averaging steps have been derived here.')
put('8.5.1','Shift a squared deviation and choose the best shift by completing a square.',r'''
Write Y=X−μ, so E[Y]=0 and E[Y²]=σ². :: Y\ge a\ \Longrightarrow\ Y+c\ge a+c>0\quad(c\ge0,a>0) :: Adding c preserves order and makes both compared quantities positive on this event.
Square these positive quantities to get an event containment. :: \{Y\ge a\}\subseteq\{(Y+c)^2\ge(a+c)^2\} :: The squared event can contain other outcomes too, so only containment is claimed.
Apply Markov to the nonnegative squared quantity. :: P(Y\ge a)\le\frac{E[(Y+c)^2]}{(a+c)^2} :: The denominator is positive.
Expand the square and use E[Y]=0. :: E[(Y+c)^2]=\sigma^2+2cE[Y]+c^2=\sigma^2+c^2 :: The centered cross term vanishes.
Compare this family of bounds with σ²/(a²+σ²) using a common denominator. :: \frac{\sigma^2+c^2}{(a+c)^2}-\frac{\sigma^2}{a^2+\sigma^2}=\frac{(ac-\sigma^2)^2}{(a+c)^2(a^2+\sigma^2)}\ge0 :: Expanding the numerator shows the equality; it is a square divided by a positive number.
If σ²>0, choose c=σ²/a to make the square zero. :: P(X-\mu\ge a)\le\frac{\sigma^2}{a^2+\sigma^2} :: This choice is therefore optimal among these shifted-square bounds without differentiating.
If σ²=0, Y=0 almost surely; to obtain the lower-tail version replace Y by −Y. :: P(X-\mu\le-a)\le\frac{\sigma^2}{a^2+\sigma^2} :: A mean-zero variable with zero mean square is zero almost surely; −Y has the same mean and variance as Y.
''','Cantelli’s one-sided bound follows from Markov and a completed square.')
put('8.5.2','Turn a tail event into an exponential tail and apply Markov.',r'''
Fix t>0 with finite M_X(t)=E[e^(tX)]. :: x\ge a\ \Longleftrightarrow\ e^{tx}\ge e^{ta} :: The exponential is strictly increasing and multiplication by positive t preserves order.
The random quantity e^(tX) is nonnegative at every outcome. :: P(X\ge a)=P(e^{tX}\ge e^{ta}) :: This exact event equality lets us use Markov with threshold e^(ta)>0.
Insert its expectation into Markov’s bound. :: P(X\ge a)\le\frac{E[e^{tX}]}{e^{ta}}=e^{-ta}M_X(t) :: Dividing by an exponential is multiplying by its reciprocal e^(−ta).
Each admissible positive t gives a valid upper bound. :: P(X\ge a)\le\inf_{t>0:M_X(t)<\infty}e^{-ta}M_X(t) :: Infimum means the greatest lower limit of all these upper bounds, or their smallest achievable limiting value.
For t<0, multiplication reverses the original order before exponentiation. :: x\le a\ \Longleftrightarrow\ e^{tx}\ge e^{ta} :: The same Markov argument now bounds the lower tail.
For an independent sum, factor the exponential expectations. :: P\left(\sum_iX_i\ge a\right)\le e^{-ta}\prod_iM_{X_i}(t)\quad(t>0) :: Independence gives the product rule proved earlier; use only t where all necessary factors are finite.
''','Chernoff bounds are Markov bounds after exponential transformation, optimized over allowed t.')
put('8.5.3','Explain the tangent-line comparison, then average it; cover nondifferentiable convex functions too.',r'''
A convex function satisfies the chord inequality for any two inputs and 0≤θ≤1. :: g(\theta x+(1-\theta)y)\le\theta g(x)+(1-\theta)g(y) :: This is the definition of a graph lying below each joining chord.
At an interior point μ of its domain, a convex function has a supporting line of slope s. :: g(x)\ge g(\mu)+s(x-\mu) :: For differentiable g, s=g'(μ). More generally slopes of left chords are no larger than slopes of right chords, so choosing s between them gives this inequality on both sides.
Set μ=E[X] and assume the support lies in the convex domain, with the required averages defined. :: g(X)\ge g(\mu)+s(X-\mu) :: The supporting-line inequality applies separately to each observation.
Average both sides using order preservation. :: E[g(X)]\ge g(\mu)+s(E[X]-\mu) :: The supporting line is affine, so its average is found by linearity.
The bracket equals zero by the choice of μ. :: E[g(X)]\ge g(E[X]) :: This proves Jensen’s inequality; if the mean is a domain endpoint, the supported variable must equal that endpoint almost surely and the conclusion is immediate.
For g(x)=x², the supporting-line gap can be checked without calculus. :: x^2-[\mu^2+2\mu(x-\mu)]=(x-\mu)^2\ge0 :: Averaging yields E[X²]≥E[X]², the same nonnegativity behind variance.
If g is concave, −g is convex, so apply the proved inequality to −g and reverse signs. :: E[g(X)]\le g(E[X])\quad\text{for concave }g :: This handles cap-shaped functions such as log on positive inputs.
''','Averaging a convex graph stays above its value at the average input; supporting lines justify the result even without a derivative.')
put('8.5.4','Separate the large-number choosing factor from the small-probability factor.',r'''
Let λ>0 and p_r=r/(r+λ), and count failures X before the r-th success. :: q_r=1-p_r=\frac\lambda{r+\lambda} :: Failures become rare as r grows.
For X=k, the last trial is a success and the first r+k−1 trials contain k failures. :: P(X=k)=\binom{r+k-1}k p_r^r q_r^k :: The choosing coefficient locates those k failures; independent trial probabilities multiply.
Write the choosing coefficient as a product of k consecutive factors. :: \binom{r+k-1}k q_r^k=\frac{\lambda^k}{k!}\prod_{j=0}^{k-1}\frac{r+j}{r+\lambda} :: All denominators r+λ are combined with the growing numerator factors.
Keep k fixed while r tends to infinity. :: \prod_{j=0}^{k-1}\frac{r+j}{r+\lambda}\longrightarrow1 :: This is a finite product of factors tending to 1; for k=0 the empty product is 1.
Take logs of the success factor. :: \log(p_r^r)=-r\log(1+\lambda/r)\longrightarrow-\lambda :: The elementary-calculus limit log(1+u)/u→1 gives the exponent limit.
Exponentiate and multiply the two limits. :: P(X=k)\longrightarrow e^{-\lambda}\frac{\lambda^k}{k!} :: Continuity of the exponential turns the log limit into p_r^r→e^(−λ).
These limiting masses sum to 1 by the exponential series. :: \sum_{k=0}^{\infty}e^{-\lambda}\frac{\lambda^k}{k!}=1 :: Thus the fixed-count limits describe a complete Poisson distribution, rather than losing probability at infinity.
''','The failure count approaches Poisson(λ) as r increases with the specified success probabilities.')
put('8.6.1','Construct close Bernoulli and Poisson counts, then bound the probability that the sums disagree.',r'''
For each i draw an independent P_i~Poisson(p_i) and an independent uniform U_i, with 0≤p_i≤1. :: P(P_i=0)=e^{-p_i},\quad P(P_i\ge1)=1-e^{-p_i} :: These auxiliary variables will construct a Bernoulli B_i on the same probability space; this is called a coupling.
The inequality e^(−p)≥1−p gives a nonnegative missing success mass. :: d_i=p_i-(1-e^{-p_i})\ge0 :: For example, the inequality follows from the exponential graph lying above its tangent at zero.
When P_i≥1 set B_i=1; when P_i=0 set B_i=1 with chance d_i/e^(−p_i). :: B_i=1\text{ if }P_i\ge1\text{ or }[P_i=0,\ U_i\le d_i/e^{-p_i}] :: The latter chance is between 0 and 1 because 0≤d_i≤e^(−p_i), using p_i≤1.
Calculate the total success probability of this constructed flag. :: P(B_i=1)=1-e^{-p_i}+e^{-p_i}\frac{d_i}{e^{-p_i}}=p_i :: Thus B_i is Bernoulli(p_i); constructions for different indices are independent.
The pair disagrees only when P_i≥2 or when P_i=0 and the extra flag is set. :: P(B_i\ne P_i)=1-e^{-p_i}(1+p_i)+d_i=p_i(1-e^{-p_i}) :: Substitute d_i=p_i−1+e^(−p_i) to verify the cancellation.
Since 1−e^(−p_i)≤p_i, the pairwise disagreement has a simple bound. :: P(B_i\ne P_i)\le p_i^2 :: This is the same exponential tangent inequality used earlier.
If all pairs agree, their sums agree; use the union bound on possible mismatches. :: P\left(\sum_iB_i\ne\sum_iP_i\right)\le\sum_ip_i^2 :: A mismatch can sometimes cancel in the sum, which is why this is an upper bound.
The independent Poisson counts sum to a Poisson with rate λ=Σp_i. :: Z=\sum_iP_i\sim\operatorname{Poisson}(\lambda),\quad W=\sum_iB_i :: W has exactly the target independent-Bernoulli sum law.
For any set A of counts, membership flags differ only when the counts differ. :: |P(W\in A)-P(Z\in A)|\le E[|\mathbf1_{\{W\in A\}}-\mathbf1_{\{Z\in A\}}|]\le\sum_ip_i^2 :: The first inequality is the triangle inequality for an average; the second uses the disagreement bound.
''','The approximation error is bounded uniformly over count events by the sum of squared individual success probabilities.')
put('9.1.1','Translate short-time arrival rules into differential equations and solve them step by step.',r'''
Let p_n(t)=P(N(t)=n); the process starts at zero and has stationary independent increments. :: p_0(0)=1,\quad p_n(0)=0\ (n\ge1) :: The model has no arrivals before time zero.
In an interval of length h, subtract the chances of one or more arrivals from 1. :: P(N(h)=0)=1-\lambda h+o(h) :: Both the one-arrival remainder and the multiple-arrival probability have error divided by h tending to zero.
No arrivals by t+h requires no arrivals by t and no arrivals in the new interval. :: p_0(t+h)=p_0(t)[1-\lambda h+o(h)] :: Independent increments multiply the probabilities; stationarity lets the new interval use the length-h rule.
Subtract p_0(t), divide by h, and shrink h to zero. :: p_0'(t)=-\lambda p_0(t) :: This is the definition of the derivative; the remainder divided by h vanishes.
Multiply by e^(λt) and use the product derivative rule. :: \frac d{dt}[e^{\lambda t}p_0(t)]=e^{\lambda t}[p_0'(t)+\lambda p_0(t)]=0 :: A derivative zero gives a constant; the initial value makes that constant 1, so p_0(t)=e^(−λt).
For n≥1, a final count n comes from count n and no new arrival, or count n−1 and one new arrival. :: p_n(t+h)=p_n(t)(1-\lambda h)+p_{n-1}(t)\lambda h+o(h) :: All remaining ways involve at least two new arrivals and have total probability o(h).
Subtract, divide by h and take the limit to obtain the recursion. :: p_n'(t)+\lambda p_n(t)=\lambda p_{n-1}(t) :: The left side will again become a product derivative after multiplication by e^(λt).
Set q_n(t)=e^(λt)p_n(t), giving q_0=1 and q_n(0)=0 for n≥1. :: q_n'(t)=\lambda q_{n-1}(t) :: The exponent factor cancels the same factor in the previous-count probability.
Induct from q_0=1 and integrate the power for each next count. :: q_n(t)=\int_0^t\lambda\frac{(\lambda s)^{n-1}}{(n-1)!}ds=\frac{(\lambda t)^n}{n!} :: The derivative of s^n/n is s^(n−1), and n(n−1)!=n!.
Undo the integrating factor. :: p_n(t)=e^{-\lambda t}\frac{(\lambda t)^n}{n!} :: These are Poisson masses of parameter λt and sum to 1 by the exponential series.
''','The Poisson count law follows from the process assumptions and elementary differential-equation calculations; derivatives express the short-time limits.')
put('9.1.2','Translate the first waiting time into a count event, then restart the process and sum the waits.',r'''
Let T_1 be the first waiting time and S_n the n-th arrival time of a rate-λ process with λ>0. :: \{T_1>t\}=\{N(t)=0\}\quad(t\ge0) :: The first wait exceeds t exactly when there have been no arrivals by t.
Use the Poisson zero-count probability already derived. :: P(T_1>t)=e^{-\lambda t} :: This is the exponential survival function.
Subtract survival from 1 and differentiate the CDF. :: F_{T_1}(t)=1-e^{-\lambda t},\quad f_{T_1}(t)=\lambda e^{-\lambda t} :: The chain rule supplies the rate factor λ; the density is zero for t<0.
At an arrival time S_k, the future process restarts independently with the same rate. :: P(T_{k+1}>t\mid T_1,\ldots,T_k)=e^{-\lambda t} :: This uses the strong Markov restart property of a Poisson process at stopping times. Independent increments at fixed deterministic times alone do not justify substituting a random S_k; that extension is an explicit advanced prerequisite.
The unchanged conditional law for every previous wait proves the waits are iid exponential. :: T_1,T_2,\ldots\text{ are independent }\operatorname{Exp}(\lambda) :: Sequential conditional probabilities factor into the same exponential laws.
The n-th arrival occurs after the first n waits have elapsed. :: S_n=T_1+\cdots+T_n :: This is a definition of arrival time through accumulated interarrival times.
Use the gamma-sum law with exponential shape 1. :: S_n\sim\operatorname{Gamma}(n,\lambda),\quad f_{S_n}(s)=\frac{\lambda^n s^{n-1}e^{-\lambda s}}{(n-1)!}\ (s>0) :: The sum of n independent common-rate gamma shapes 1 has shape n; Γ(n)=(n−1)! follows by integration by parts.
Check the same arrival-time law directly from counts. :: P(S_n>t)=P(N(t)<n)=e^{-\lambda t}\sum_{j=0}^{n-1}\frac{(\lambda t)^j}{j!} :: Differentiating this finite expression and cancelling consecutive terms gives the same gamma density, independently checking the marginal arrival-time formula.
''','Waits are iid exponential once the random-time restart property is justified; their accumulated arrival times are gamma.')
put('9.2.2','Multiply conditional step probabilities for a path and add over the middle state for a long transition.',r'''
Let P_ij=P(X_(t+1)=j given X_t=i) be a time-homogeneous transition probability. :: \sum_jP_{ij}=1,\quad P_{ij}\ge0 :: Each row is the probability distribution of the next state from current state i.
Use the ordinary chain rule for one specific state path. :: P(X_0=i_0,\ldots,X_n=i_n)=P(X_0=i_0)\prod_{r=1}^nP(X_r=i_r\mid X_0=i_0,\ldots,X_{r-1}=i_{r-1}) :: This separates a joint path probability into sequential conditional factors.
The Markov property removes all but the latest known state from each factor. :: P(\text{path})=P(X_0=i_0)\prod_{r=1}^nP_{i_{r-1},i_r} :: Homogeneity means the same transition matrix applies at every step.
For a journey of r+s steps, split all possible paths by their state k after r steps. :: P(X_{r+s}=j\mid X_0=i)=\sum_kP(X_r=k,X_{r+s}=j\mid X_0=i) :: The middle-state cases are disjoint and exhaustive.
Factor each case using the conditional multiplication rule. :: P(X_r=k,X_{r+s}=j\mid X_0=i)=P_{ik}^{(r)}P_{kj}^{(s)} :: Markov and homogeneity make the continuation depend only on k and the remaining s steps.
Sum the middle-state contributions. :: P_{ij}^{(r+s)}=\sum_kP_{ik}^{(r)}P_{kj}^{(s)} :: This is Chapman–Kolmogorov, including terms of zero probability as zero contributions.
Matrix multiplication is defined by exactly this row-times-column sum. :: P^{(r+s)}=P^{(r)}P^{(s)},\quad P^{(n)}=P^n :: Starting from the one-step matrix P, induction gives the n-step matrix power; P^0 is the identity matrix.
''','Path probabilities multiply along fixed paths; transition probabilities add those products across alternative paths.')
put('9.3.2','Split a logarithm for the chain rule, then derive the logarithm bound needed for reduced average entropy.',r'''
For a finite joint distribution write p_xy=P(X=x,Y=y) and p_y=P(Y=y). :: p_{xy}=p_y p_{x\mid y} :: The conditional factorization holds on positive-probability pairs; zero terms are assigned 0 log 0=0.
Entropy is the average base-2 surprise of a pair. :: H(X,Y)=-\sum_{x,y:p_{xy}>0}p_{xy}\log_2p_{xy} :: Base 2 measures surprise in bits.
Use log(ab)=log(a)+log(b) in the conditional factorization. :: H(X,Y)=-\sum_{x,y}p_{xy}\log_2p_y-\sum_{x,y}p_{xy}\log_2p_{x\mid y} :: All terms shown are evaluated on positive-probability pairs.
In the first sum add over x, giving p_y; in the second use the definition of conditional entropy. :: H(X,Y)=H(Y)+H(X\mid Y) :: Conditional entropy is Σ_y p_y H(X given Y=y).
For u>0, establish the inequality log(u)≤u−1. :: \ln u=\int_1^u\frac{dt}{t}\le u-1 :: For u≥1 the integrand is at most 1; for 0<u<1 it is at least 1 on (u,1), and reversing the integration direction gives the same inequality. Equality holds only at u=1.
Let q_xy=P(X=x)P(Y=y), which is positive wherever p_xy is positive. :: H(X\mid Y)-H(X)=\sum_{p_{xy}>0}p_{xy}\log_2\frac{q_{xy}}{p_{xy}} :: Expand the entropy definitions and use log(p_x p_y/p_xy)=log(p_x)−log(p_(x|y)).
Apply the logarithm inequality to each q_xy/p_xy and add. :: H(X\mid Y)-H(X)\le\frac{\sum_{p_{xy}>0}q_{xy}-1}{\ln2}\le0 :: Multiplying ln(q/p)≤q/p−1 by p cancels the denominator; the q values on a subset sum to at most 1.
Equality requires every positive pair to have q_xy=p_xy and no positive q mass outside that set. :: H(X\mid Y)=H(X)\ \Longleftrightarrow\ p_{xy}=p_xp_y\text{ for all pairs} :: Those conditions are exactly independence. This compares averages over Y, not the entropy of every individual observed slice.
''','The entropy chain rule follows from a log product, and the logarithm bound proves that conditioning reduces entropy on average.')
put('9.3.3','Compare the actual masses with equal masses and prove the required log comparison.',r'''
List n possible values and let p_i be their probabilities, allowing zero values. :: u_i=1/n,\quad\sum_ip_i=\sum_iu_i=1 :: The u_i describe the uniform comparison law.
For every u>0, ln(u)≤u−1, with equality only at u=1. :: -\ln u\ge1-u :: One proof integrates 1/t from 1 to u and compares it with height 1 on either side of 1.
For each p_i>0, substitute u=u_i/p_i and multiply by p_i. :: p_i\ln(p_i/u_i)\ge p_i-u_i :: A positive probability preserves the inequality when multiplying.
Add those inequalities and divide by the positive number ln 2. :: D(p\Vert u)=\sum_{p_i>0}p_i\log_2(p_i/u_i)\ge\frac{1-\sum_{p_i>0}u_i}{\ln2}\ge0 :: Zero p_i terms contribute zero, and the selected u_i sum to at most 1.
Since log_2(u_i)=−log_2(n), expand the left side. :: D(p\Vert u)=\sum_ip_i\log_2p_i+\log_2n=\log_2n-H(X) :: The uniform constant multiplies Σp_i=1.
Rearrange the nonnegative comparison. :: H(X)\le\log_2n :: Entropy cannot exceed the surprise level of n equal possibilities.
Equality requires no missing uniform mass and equality in every logarithm comparison. :: H(X)=\log_2n\ \Longleftrightarrow\ p_i=1/n\text{ for every }i :: Thus all n outcomes must be equally likely; if fewer are possible the maximum is correspondingly smaller.
''','Uniform probabilities maximize entropy because the nonnegative logarithm comparison measures the gap from that maximum.')
put('9.4.1','Count binary-tree descendants for Kraft’s inequality, then derive both coding-length bounds.',r'''
A prefix-free binary code has integer word lengths l_i and no word begins another. :: D=\max_i l_i :: For a finite code, look at the full binary tree at depth D, with 2^D possible bit strings.
A codeword of length l_i is the prefix of exactly 2^(D−l_i) depth-D strings. :: 2^{D-l_i} :: Each of the remaining D−l_i bits has two choices by the multiplication rule.
Different prefix-free codewords cover disjoint descendant sets. :: \sum_i2^{D-l_i}\le2^D :: Their descendants must fit among all depth-D strings; this is the essential prefix-free assumption.
Divide by 2^D to obtain Kraft’s inequality. :: K=\sum_i2^{-l_i}\le1 :: A countable code follows by applying the finite bound to every finite sublist.
For positive source probabilities p_i define q_i=2^(−l_i)/K, so the q_i sum to 1. :: q_i=\frac{2^{-l_i}}K :: The earlier logarithm comparison applies to any two normalized positive distributions.
Expand the nonnegative comparison D(p||q). :: 0\le\sum_ip_i\log_2(p_i/q_i)=-H(X)+\sum_ip_il_i+\log_2K :: Use log_2(q_i)=−l_i−log_2K and Σp_i=1.
Write L=Σp_i l_i and use log_2K≤0. :: H(X)\le L+\log_2K\le L :: This proves the lower bound on average code length.
For the upper bound, select rounded surprise lengths. :: l_i=\lceil-\log_2p_i\rceil,\quad2^{-l_i}\le p_i,\quad\sum_i2^{-l_i}\le1 :: Ceiling means round upward to an integer, so these lengths satisfy Kraft’s condition.
To see these lengths can be assigned prefix-free words, process them in increasing order. :: \#\text{free nodes at depth }l_i=2^{l_i}\left(1-\sum_{j<i}2^{-l_j}\right)\ge1 :: Earlier chosen words block their descendants. The full Kraft sum ensures the remaining capacity is at least 2^(−l_i), hence at least one node is free; choosing it continues the construction.
Each rounded length is less than surprise plus 1; average this strict inequality. :: L=\sum_ip_i\lceil-\log_2p_i\rceil<H(X)+1 :: Together with the lower bound this gives H≤L<H+1. A one-value source may use the unique empty word of length zero.
''','Tree counting proves Kraft, the log comparison proves the lower coding bound, and rounded surprise lengths plus the tree construction prove existence below H+1.')
put('10.1.1','Treat simulation runs as a sample of independent Bernoulli flags.',r'''
Let I_j be 1 if the target event occurs in run j and 0 otherwise, and let its true probability be p. :: E[I_j]=1\cdot p+0\cdot(1-p)=p :: Independent runs must reproduce the same intended model.
A flag equals its own square. :: E[I_j^2]=p,\quad\operatorname{Var}(I_j)=p-p^2=p(1-p) :: This is second moment minus squared mean.
The success fraction is the average of k run flags. :: \hat p_k=\frac1k\sum_{j=1}^kI_j :: It is observable even when the exact probability p is unknown.
Average the fraction by linearity. :: E[\hat p_k]=\frac{kp}{k}=p :: This explains unbiasedness: across repeated batches, the average estimate equals p.
Independence makes the sum variance k p(1−p); averaging rescales it by 1/k². :: \operatorname{Var}(\hat p_k)=\frac{p(1-p)}k :: A single batch can still differ from p despite being unbiased.
Take the square root to find the standard error. :: \operatorname{SE}(\hat p_k)=\sqrt{p(1-p)/k}\le\frac1{2\sqrt k} :: The last bound follows from p(1−p)=1/4−(p−1/2)²≤1/4.
The iid flags are bounded, so E[|I_j|]=p is finite and the strong law applies. :: \hat p_k\longrightarrow p\quad\text{almost surely} :: This invokes the already justified strong law; it does not claim zero error for a finite simulation.
''','Monte Carlo success fractions are unbiased, have variance p(1−p)/k, and settle almost surely under independent repetition.')
put('10.1.2','Fix one desired permutation and compute its successive conditional chances.',r'''
At stage i, choose J_i uniformly among positions 1 through i and swap it into position i. :: P(J_i=j)=1/i\quad(1\le j\le i) :: Use fresh independent choices, so each choice is uniform even conditional on previous stages.
For a fixed target order, its desired last item occupies exactly one of the n current positions. :: P(\text{correct item in position }n)=1/n :: The swap selects each remaining item with the same chance.
After the last position is fixed, it is never selected again. :: P(\text{correct item in position }n-1\mid\text{last correct})=1/(n-1) :: The desired next item lies in one of the n−1 still open positions, whatever their current arrangement.
Continue this argument until only one unfilled position remains. :: \frac1n,\frac1{n-1},\ldots,\frac12,1 :: The final item is forced; it needs no new random choice.
Multiply these conditional chances by the chain rule. :: P(\text{specified target order})=\frac1n\frac1{n-1}\cdots\frac12=\frac1{n!} :: Multiplying conditional probabilities is valid even though the evolving arrangements are dependent.
There are n! target permutations, each with this same probability. :: n!\cdot\frac1{n!}=1 :: Thus all outcomes are accounted for and the shuffle is uniform, including the one-item case.
''','The successive-swap shuffle is uniform because every fixed final order requires the same sequence of conditional chances.')
put('10.2.1','Use the generalized inverse’s first crossing to equate two cutoff events.',r'''
For 0<u<1, define the generalized inverse q(u) of a CDF F. :: q(u)=\inf\{z:F(z)\ge u\} :: Infimum means greatest lower bound; the CDF’s limits 0 and 1 ensure this crossing is finite for interior u.
Right continuity makes the crossing value itself reach the level u. :: F(q(u))\ge u :: There are crossing points arbitrarily close on the right; right continuity carries their ≥u bound to q(u).
If u≤F(x), then x belongs to the crossing set, so its infimum is at most x. :: u\le F(x)\ \Longrightarrow\ q(u)\le x :: This direction follows from the meaning of an infimum.
Conversely, if q(u)≤x, monotonicity and the preceding crossing bound give the reverse implication. :: q(u)\le x\ \Longrightarrow\ F(x)\ge F(q(u))\ge u :: Thus the two cutoff conditions are equivalent, even with jumps and flat CDF pieces.
Draw U uniformly on (0,1) and set X=q(U). :: \{X\le x\}=\{U\le F(x)\} :: Apply the equivalence to the random interior probability level U.
A uniform value falls in an interval of length a with probability a. :: P(U\le a)=a\quad(0\le a\le1) :: This is the uniform rectangle-area rule.
Take probabilities of the equivalent events. :: P(X\le x)=P(U\le F(x))=F(x) :: The generated variable therefore has exactly the target CDF.
If F is continuous and strictly increasing, q is its ordinary inverse. :: F(x)=1-e^{-\lambda x}\ \Longrightarrow\ X=-\log(1-U)/\lambda :: Solve u=1−e^(−λx) by subtraction and logarithms; 1−U is also uniform, so −log(U)/λ is an equivalent generator.
''','Inverse transform sampling matches each target cutoff to an interval of the same probability length.')
put('10.2.2','Multiply proposal density by acceptance chance, then normalize the accepted sample.',r'''
Let f be the target density and g a proposal density, with f(y)≤c g(y) and c finite. :: r(y)=\frac{f(y)}{cg(y)}\quad(g(y)>0) :: Require f=0 wherever g=0; values of r on those zero-probability proposal points may be defined arbitrarily.
Both densities are nonnegative and integrate to 1, so integrate the envelope inequality. :: 1\le c,\quad0\le r(y)\le1 :: Thus r(y) is a valid probability of acceptance.
Draw Y from g and an independent U uniform on (0,1); accept when U≤r(Y). :: P(\text{accept}\mid Y=y)=r(y) :: Uniform interval length gives the conditional acceptance probability.
For any set A of proposal values, multiply and accumulate the joint acceptance contribution. :: P(Y\in A,\text{accept})=\int_Ag(y)r(y)dy=\frac1c\int_Af(y)dy :: The factor g cancels its denominator in r.
Set A to the entire support to get the acceptance rate. :: P(\text{accept})=1/c :: The target density has total integral 1.
Divide the joint acceptance probability by this positive acceptance rate. :: P(Y\in A\mid\text{accept})=\int_Af(y)dy :: This is ordinary conditional probability, proving the accepted density is f.
Repeat with fresh independent attempts until acceptance. :: P(\text{first acceptance at attempt }k)=(1-1/c)^{k-1}/c :: This geometric trial count has mean c by the previously derived geometric mean, and eventual acceptance has probability 1.
''','Rejection sampling corrects proposal weights by the acceptance ratio and returns the exact target law when the finite envelope condition holds.')
put('10.3.1','Partition the unit interval into pieces having the requested discrete probabilities.',r'''
List target values x_j with masses p_j≥0 summing to 1. :: c_0=0,\quad c_j=\sum_{i=1}^jp_i :: The cumulative endpoints never decrease and tend to 1 for a countably infinite list.
Assign value x_j to the interval between successive endpoints. :: I_j=(c_{j-1},c_j] :: A zero mass gives an empty interval.
Two different intervals do not overlap except for endpoints assigned to only one interval by this convention. :: I_i\cap I_j=\varnothing\quad(i\ne j) :: The right-closed, left-open rule prevents double assignments.
Subtract neighboring cumulative sums to get the interval width. :: c_j-c_{j-1}=p_j :: All earlier masses cancel, leaving exactly the j-th one.
For uniform U on (0,1), interval probability equals interval length. :: P(U\in I_j)=p_j :: Single endpoints have probability zero, so implementation endpoint conventions do not change the law.
Return X=x_j when U is in I_j. :: P(X=x_j)=p_j :: For every U<1 in a countable distribution, a cumulative endpoint eventually reaches U; thus a return value exists almost surely.
As a check, masses 0.2,0.5,0.3 produce endpoints 0,0.2,0.7,1. :: (0,0.2],\ (0.2,0.7],\ (0.7,1] :: Their lengths are exactly the requested probabilities.
''','Discrete inverse transform assigns intervals on the probability scale to support values.')
put('10.4.2','Preserve the average while removing the within-group variance component.',r'''
Assume E[Y²]<∞ and define m(Z)=E[Y given Z]. :: E[m(Z)]=E[Y] :: The law of total expectation proves the replacement is unbiased for the same mean.
Subtract the overall mean and split the deviation at the conditional mean. :: Y-E[Y]=[Y-m(Z)]+[m(Z)-E[Y]] :: Adding and subtracting m(Z) does not change the observation.
Within a fixed Z-group, the first bracket averages to zero. :: E[Y-m(Z)\mid Z]=0 :: The second bracket is a fixed number inside that group.
Expand the squared brackets and average; the cross-product term disappears. :: \operatorname{Var}(Y)=E[(Y-m(Z))^2]+E[(m(Z)-E[Y])^2] :: Total expectation carries the conditional-zero cross term to zero overall.
Identify the within-group and between-group terms. :: \operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid Z)]+\operatorname{Var}(m(Z)) :: This also rederives total variance in the simulation notation.
The removed within-group term is an average of nonnegative squared deviations. :: \operatorname{Var}(m(Z))\le\operatorname{Var}(Y) :: Replacing Y by its computable conditional mean removes this source of noise.
For k independent repetitions, both estimate variances divide by k. :: \operatorname{Var}\left(\frac1k\sum_jm(Z_j)\right)=\frac{\operatorname{Var}(m(Z))}k\le\frac{\operatorname{Var}(Y)}k :: Equality occurs when the removed conditional variance is zero almost surely; computational cost still affects practical efficiency.
''','Conditioning preserves the target mean and reduces variance by the average within-group variance.')
put('10.4.3','Use a zero-mean correction and minimize its variance by completing a square.',r'''
Assume finite second moments and a known mean μ_Z=E[Z]. :: W=Y+a(Z-\mu_Z) :: The coefficient a is fixed, and the centered control averages to zero.
Use linearity to find the corrected mean. :: E[W]=E[Y]+a(E[Z]-\mu_Z)=E[Y] :: The correction therefore preserves the target mean for every fixed a.
Write V=Var(Z) and C=Cov(Y,Z), and expand the variance of a sum. :: \operatorname{Var}(W)=\operatorname{Var}(Y)+a^2V+2aC :: Centering Z does not change its variance or its covariance with Y.
For V>0, complete the square in a. :: \operatorname{Var}(W)=\operatorname{Var}(Y)-\frac{C^2}V+V\left(a+\frac CV\right)^2 :: Expanding the last square returns a²V+2aC+C²/V, whose constant cancels.
A positive multiple of a square is smallest when the square is zero. :: a^*=-\frac CV=-\frac{\operatorname{Cov}(Y,Z)}{\operatorname{Var}(Z)} :: This gives the optimum without differentiation.
Substitute the optimal coefficient and, when both variances are positive, express C through correlation. :: \operatorname{Var}(W^*)=\operatorname{Var}(Y)-\frac{C^2}V=\operatorname{Var}(Y)(1-\rho^2) :: A stronger linear correlation gives a larger reduction.
If V=0, the centered control is zero almost surely and provides no correction. :: Z-\mu_Z=0\quad\text{almost surely} :: The displayed division by V must then be avoided. Estimating a from the same simulation data also needs separate analysis; this proof assumes a fixed coefficient.
''','Control variates preserve the mean through a centered correction and reduce variance through the optimal completed-square coefficient.')
put('1.1.1','Derive favorable-over-total counting from the assumption of equally likely outcomes.',r'''
List every complete outcome of the experiment in a finite sample space S. :: N=|S| :: An outcome must include everything that distinguishes one result from another.
Assume every complete outcome has the same probability p. :: P(\{s\})=p\quad(s\in S) :: Equal likelihood is a model assumption; merely listing outcomes does not establish it.
The N disjoint outcomes cover the whole experiment. :: Np=P(S)=1 :: Probabilities add for disjoint possibilities and total probability is 1.
Divide by N to obtain the probability per outcome. :: p=1/N :: N is positive because there is at least one possible result.
An event A with M=|A| favorable outcomes is their disjoint union. :: P(A)=Mp=M/N=|A|/|S| :: This derives the counting formula and explains its denominator.
For two named fair independent dice there are 6·6 complete pairs and 6 pairs totaling 7. :: P(\text{total }7)=6/36=1/6 :: Independence and fairness make those pairs equally likely; totals themselves are not equally likely.
''','Counting gives probabilities only after the finite equal-likelihood assumption is justified.')
put('1.2.2','Treat a function as one output choice for each specified input.',r'''
Label the n inputs a_1,...,a_n and list q allowed outputs. :: f\leftrightarrow(f(a_1),\ldots,f(a_n)) :: This correspondence identifies a function with its complete output table.
Each input needs exactly one output and all q values are allowed at each position. :: q\text{ choices per position} :: Different input labels create different slots, even if their outputs coincide.
Apply the multiplication principle to all n slots. :: N=\underbrace{q\cdot q\cdots q}_{n\text{ factors}}=q^n :: This is a counting product, not a probability independence assertion.
If slot i has a fixed allowed count q_i for every preceding history, multiply those counts instead. :: N=\prod_{i=1}^nq_i :: The factors may differ between positions, but not between earlier histories at the same position.
If outputs cannot repeat, the available count decreases after each choice. :: N=q(q-1)\cdots(q-n+1)\quad(n\le q) :: This counts injective functions; if n>q there are no such functions.
For three distinct English letters, use q=26,n=3. :: N=26\cdot25\cdot24 :: The second slot excludes the first letter and the third excludes both preceding letters.
''','Function counts follow from filling labeled slots under explicit repetition rules.')
put('1.5.2','Explain exactly when forgetting group labels produces an equal overcount.',r'''
First assign n distinct objects to labeled groups of specified sizes. :: N_{\text{labeled}}=\frac{n!}{\prod_jn_j!} :: Internal order is irrelevant, so each group-size factorial removes repeated object orders.
If k groups all have the same positive size, forget their labels. :: k!\text{ labelings per unlabeled partition} :: Distinct nonempty groups can receive the k labels in every order.
The labeled partitions therefore fall into equal groups of k! versions. :: N_{\text{unlabeled}}=N_{\text{labeled}}/k! :: Division is justified by the equal number of versions, not by the mere presence of k groups.
If positive group sizes differ, a group’s size already identifies its size role. :: n_1\ne n_2\ \Longrightarrow\ \text{no extra factor }2!\text{ for those roles} :: Swapping a small and a large group changes the labeled-size requirements.
For repeated positive sizes, let m_s count how many groups have size s. :: N_{\text{unlabeled, fixed sizes}}=\frac{n!}{\prod_jn_j!\prod_sm_s!} :: Only labels attached to equal-sized groups can be interchanged while preserving the size specification. Empty groups require separate care because they are not distinct blocks.
''','Always identify the exact equal-size labeling multiplicity before dividing an assignment count.')
put('1.6.2','Remove the minimum required allocation before applying stars and bars.',r'''
Let box j require at least a_j units, where each a_j is a nonnegative integer. :: x_j\ge a_j,\quad\sum_{j=1}^rx_j=n :: Units are identical and boxes are labeled.
Give every box its minimum allocation first. :: y_j=x_j-a_j\ge0 :: This subtraction is reversible: x_j=y_j+a_j.
Sum the residual counts. :: \sum_jy_j=n-\sum_ja_j=M :: M is the number of units left to distribute freely.
If M<0, there are not enough units even for the minima. :: M<0\ \Longrightarrow\ N=0 :: No nonnegative residual solution can have a negative sum.
If M≥0, apply the nonnegative stars-and-bars formula. :: N=\binom{M+r-1}{r-1} :: The residual allocation is in one-to-one correspondence with the original constrained allocation.
For n=10 and three boxes each needing 2, only four units remain. :: M=10-6=4,\quad N=\binom62=15 :: Minimum requirements change the total available stars, not the number of boxes.
''','Shifting by each minimum reduces the problem to ordinary nonnegative allocations.')
put('2.1.1','Separate the experiment, its possible outcomes, and the probability model.',r'''
Describe what one complete run records before asking for its chance. :: S=\{\text{all complete possible outcomes}\} :: This defines the sample space; it is a modeling choice.
An event is a collection of outcomes answering the question. :: A\subseteq S :: For a coin, S={H,T} and the heads event is {H}.
Choose numerical probabilities consistent with the axioms. :: P(A)\ge0,\quad P(S)=1 :: The model’s weights are assumptions or estimates, not consequences of the outcome labels alone.
For a two-outcome coin write p=P(H) and use the complement rule. :: P(T)=1-p :: The two event weights sum to 1 because the events are disjoint and exhaustive.
Only the additional fair-coin assumption sets p to one-half. :: p=1/2\quad\text{if the coin is modeled as fair} :: A biased coin has the same outcome set but different probabilities.
''','Definitions specify what is recorded; assumptions specify how probability is assigned. They should not be presented as theorems proved by listing outcomes.')
put('2.2.1','Translate event notation into membership of an outcome.',r'''
Let s be the actual outcome from sample space S. :: A\subseteq S :: A happens when s belongs to A.
The union records that at least one of two events occurs. :: s\in A\cup B\ \Longleftrightarrow\ s\in A\text{ or }s\in B :: Or includes the possibility that both occur.
The intersection records simultaneous occurrence. :: s\in A\cap B\ \Longleftrightarrow\ s\in A\text{ and }s\in B :: An outcome must satisfy both conditions.
The complement records failure of an event relative to the chosen sample space. :: A^c=S\setminus A :: Changing S can change what the complement includes.
An empty intersection means the events cannot both occur. :: A\cap B=\varnothing :: This is mutual exclusion, which is different from probabilistic independence.
''','Set operations express ordinary or, and, and failure statements about the recorded outcome.')
put('2.2.2','Prove De Morgan’s laws by checking membership of one arbitrary outcome.',r'''
An outcome outside A∪B belongs to neither A nor B. :: s\in(A\cup B)^c\ \Longleftrightarrow\ s\notin A\text{ and }s\notin B :: Negating at least one means both conditions fail.
Being in neither is the same as being in both complements. :: (A\cup B)^c=A^c\cap B^c :: The two sets have identical membership conditions for every outcome.
An outcome outside A∩B fails at least one of the two membership tests. :: s\in(A\cap B)^c\ \Longleftrightarrow\ s\notin A\text{ or }s\notin B :: Negating both means at least one fails.
Translate the failures into complements. :: (A\cap B)^c=A^c\cup B^c :: This is the second De Morgan identity.
The same membership reasoning applies to any indexed family. :: (\bigcup_iA_i)^c=\bigcap_iA_i^c,\quad(\bigcap_iA_i)^c=\bigcup_iA_i^c :: Failing every possible union member means lying in every complement; failing an intersection means at least one complement occurs.
''','Set identities are proved by identical outcome membership, without assumptions about probabilities.')
put('2.3.1','Explain the probability axioms and derive simple consequences without claiming to prove the axioms.',r'''
A probability model first requires nonnegative event weights. :: P(A)\ge0 :: This is an axiom: negative probability would not describe a chance.
The complete list of possibilities has total probability 1. :: P(S)=1 :: This normalization defines the probability scale, where 1 means certainty under the model.
For a countable disjoint list of events, the assigned weight of the union is their sum. :: P\left(\bigcup_iA_i\right)=\sum_iP(A_i) :: Countable additivity is an axiom; disjoint means no outcome lies in two listed events.
The empty event must have zero weight by adding it to S. :: P(S)=P(S)+P(\varnothing)\ \Longrightarrow\ P(\varnothing)=0 :: This conclusion is derived from additivity, unlike the assumed axioms themselves.
Split S into A and its complement and subtract. :: P(A)+P(A^c)=1\ \Longrightarrow\ 0\le P(A)\le1 :: The upper bound follows because the complement probability is nonnegative.
''','Axioms are the starting assumptions; null-event, complement and range rules are consequences of them.')
put('2.7.1','Explain coherence through a complementary pair of fair-priced unit bets.',r'''
Interpret p(A) as the fair price of a ticket paying 1 if A occurs and 0 otherwise. :: \text{payoff}=\mathbf1_A :: This is a subjective betting interpretation of assigned probability.
A ticket for A and one for A^c together pay exactly one in every outcome. :: \mathbf1_A+\mathbf1_{A^c}=1 :: Exactly one of an event and its complement occurs.
Their combined fair price must therefore be 1. :: p(A)+p(A^c)=1 :: Otherwise, buying or selling the pair against a sure unit payoff permits a guaranteed gain under this betting setup.
For disjoint events A and B, their two tickets equal a ticket for their union. :: \mathbf1_A+\mathbf1_B=\mathbf1_{A\cup B} :: Disjointness prevents a combined payout of 2.
Consistent prices must respect the same equality. :: p(A\cup B)=p(A)+p(B) :: This illustrates finite additivity. Countable additivity requires an additional continuity assumption; finite betting coherence alone does not establish it.
''','Subjective probabilities can represent beliefs while obeying coherent finite probability rules; a probability model’s full axioms must still be specified.')
put('2.7.2','Compute expected wager payoffs from the person’s stated probability model.',r'''
Let a wager pay w_A if event A happens and w_c otherwise. :: p=P(A),\quad P(A^c)=1-p :: These are the bettor’s model probabilities, not necessarily equal-likelihood counts.
Form the weighted average of its two payoffs. :: E[W]=pw_A+(1-p)w_c :: Expected payoff uses all mutually exclusive possibilities and their assigned weights.
If buying the wager costs c, subtract that fixed price. :: E[W-c]=pw_A+(1-p)w_c-c :: The price does not depend on the outcome, so its average is still c.
For a unit-win, zero-otherwise ticket this simplifies immediately. :: E[W-c]=p-c :: A positive expected gain means the subjective chance exceeds the ticket price.
Compare wagers using their respective payoff distributions and the same probability model. :: E[W_1-W_2]=E[W_1]-E[W_2] :: Expected-money comparison does not by itself model risk preferences; it derives the arithmetic payoff criterion only.
''','A wager’s expected net payoff is its probability-weighted payoff minus its fixed cost.')
put('3.2.1','Renormalize the part of the original event inside the known condition.',r'''
Suppose event F is known to have occurred and P(F)>0. :: \text{remaining outcomes lie in }F :: All outcomes outside F are excluded from the reduced model.
The part of target event E still possible is its intersection with F. :: E\cap F :: Only outcomes satisfying both requirements count as success now.
Divide this original probability by the total remaining probability. :: P(E\mid F)=\frac{P(E\cap F)}{P(F)} :: This is the definition of conditioning, chosen so the remaining space F has total weight 1.
Check that conditioning assigns certainty to F itself. :: P(F\mid F)=P(F)/P(F)=1 :: The denominator’s role is normalization.
For a fair die, let F={2,4,6} and E={4,5,6}. :: P(E\mid F)=\frac{2/6}{3/6}=2/3 :: The reduced equally likely list has two successful results, 4 and 6, out of three remaining results.
''','The conditional formula is a definition of the reduced model, with normalization explained and checked.')
put('3.2.3','Use the reduced sample space or updated draw pool after each observation.',r'''
For a finite equally likely original sample space, condition on a nonempty event F. :: P(E\mid F)=\frac{|E\cap F|/|S|}{|F|/|S|} :: Insert the equal-likelihood counting probabilities into the conditional ratio.
Cancel the common original-space factor. :: P(E\mid F)=\frac{|E\cap F|}{|F|} :: This justifies counting within a reduced sample space.
For sequential draws without replacement, update the pool after the observed draw. :: P(\text{marked second}\mid\text{marked first})=\frac{m-1}{N-1} :: One marked object and one total object have been removed.
Multiply by the first-draw chance to compute both marked. :: P(\text{both marked})=\frac mN\frac{m-1}{N-1} :: The multiplication rule uses a conditional second factor.
If draws are with replacement and independently repeated, restore the original pool. :: P(\text{both marked})=(m/N)^2 :: This different formula follows only from the changed sampling rule.
''','Conditioning changes the allowed outcomes or remaining population; the next denominator must describe that updated model.')
put('3.3.3','Turn prior and likelihood information into normalized evidence contributions.',r'''
For each case F_i assign prior probability π_i and evidence likelihood ℓ_i. :: \pi_i=P(F_i),\quad\ell_i=P(E\mid F_i) :: Cases must be disjoint and exhaustive for this sum calculation.
Multiply the prior by its within-case evidence chance. :: w_i=\pi_i\ell_i=P(F_i\cap E) :: Each w_i is the case’s contribution to observed evidence.
Add all case contributions. :: P(E)=\sum_iw_i :: Total probability explains this evidence denominator.
Provided that sum is positive, divide each contribution by it. :: P(F_i\mid E)=\frac{w_i}{\sum_jw_j} :: Bayes’ formula is normalization of the evidence weights.
For two cases of positive prior and posterior probabilities, divide their posterior probabilities. :: \frac{P(F_1\mid E)}{P(F_2\mid E)}=\frac{\pi_1}{\pi_2}\frac{\ell_1}{\ell_2} :: The common evidence denominator cancels; posterior odds equal prior odds times the likelihood ratio.
''','Updating weights requires all evidence contributions, including contributions from alternative cases.')
put('3.4.1','Distinguish the independence assumption from its conditional consequence.',r'''
Independence of E and F is defined by factorization of their joint probability. :: P(E\cap F)=P(E)P(F) :: This equation is a property to check or a justified model assumption.
If P(F)>0, write the conditional-probability ratio. :: P(E\mid F)=\frac{P(E\cap F)}{P(F)} :: Division is valid only for a positive conditioning probability.
Substitute the independence product and cancel P(F). :: P(E\mid F)=P(E) :: Knowing F does not change E’s chance.
Conversely, multiply this unchanged-chance equation by P(F). :: P(E\mid F)=P(E)\ \Longrightarrow\ P(E\cap F)=P(E)P(F) :: Thus the conditional characterization is equivalent when its denominator exists.
Disjoint positive-probability events fail the product condition. :: P(E\cap F)=0<P(E)P(F) :: Mutually exclusive positive-probability events are dependent, since learning one rules out the other.
''','Independence is joint factorization; unchanged conditional probabilities are its consequence when defined.')
put('3.4.3','Check a two-coin example pair by pair, then test the triple intersection.',r'''
Take two independent fair coins with four equally likely outcomes. :: S=\{HH,HT,TH,TT\} :: Each complete outcome has probability 1/4.
Define A as first coin heads, B as second coin heads, and C as matching coins. :: A=\{HH,HT\},\quad B=\{HH,TH\},\quad C=\{HH,TT\} :: Each event contains two outcomes, so each has probability 1/2.
Every pairwise intersection is the singleton HH. :: P(A\cap B)=P(A\cap C)=P(B\cap C)=1/4 :: This equals (1/2)(1/2), so all event pairs are independent.
The triple intersection is also HH. :: P(A\cap B\cap C)=1/4 :: Once the first two coins are heads, matching is certain, not another independent one-half chance.
Mutual independence would require the product of all three individual probabilities. :: P(A)P(B)P(C)=1/8\ne1/4 :: The triple condition fails despite all pair conditions passing.
''','Mutual independence requires every finite subcollection’s intersection probability to factor; checking only pairs is insufficient.')
put('3.1.1','Specify how the information was generated before conditioning on it.',r'''
Let A be the event of interest and F the event describing received information. :: P(A\mid F)=\frac{P(A\cap F)}{P(F)} :: This formula is usable only after the observation event F has been defined precisely and has positive probability.
For two fair coins, learning that at least one is heads excludes only TT. :: F=\{HH,HT,TH\} :: The three remaining complete outcomes still have equal conditional probability.
Within that information, both heads has one favorable outcome. :: P(HH\mid F)=\frac{1/4}{3/4}=1/3 :: The original likelihood factors cancel.
Learning instead that the first coin is heads leaves only HH and HT. :: G=\{HH,HT\},\quad P(HH\mid G)=\frac{1/4}{2/4}=1/2 :: A more specific observation produces a different reduced model.
If information is delivered through a selective reporting procedure, include that procedure’s likelihood. :: P(A\mid\text{report})\propto P(\text{report}\mid A)P(A) :: The proportionality is made into an equality by dividing by the sum of all report contributions, as in Bayes’ formula.
''','Partial-information problems depend on the observation or reporting mechanism, not merely on a phrase that sounds similar.')
put('4.1.1','Group original outcomes by their recorded numerical value.',r'''
A random variable is a rule assigning one real number to every outcome. :: X:S\to\mathbb R :: The function is fixed; the observed value varies because the outcome is random.
A numerical event corresponds to the outcomes whose assigned numbers satisfy it. :: \{X\in B\}=\{s\in S:X(s)\in B\} :: This preimage is how the original probability model induces a law on numbers.
For a discrete value x, add all original outcome probabilities in that group. :: P(X=x)=\sum_{s:X(s)=x}P(\{s\}) :: This sum form uses a discrete original model; general models use the probability of the preimage set directly.
Different x groups are disjoint and collectively cover all outcomes. :: \sum_xP(X=x)=1 :: This normalization follows from additivity, not from every x being equally likely.
For two fair dice, the sum 2 has one preimage pair and the sum 7 has six. :: P(X=2)=1/36,\quad P(X=7)=6/36 :: A function of uniform outcomes can therefore have a nonuniform distribution.
''','The distribution of a random variable is obtained by assigning original probability to its numerical preimage events.')
put('4.2.1','Explain the PMF definition and derive its normalization and CDF formula.',r'''
A discrete X takes values in a finite or countably infinite support D. :: p_X(x)=P(X=x)\quad(x\in D) :: This is the definition of its probability mass function.
Different exact-value events cannot occur together. :: \{X=x\}\cap\{X=y\}=\varnothing\quad(x\ne y) :: One observed real number cannot equal two different values.
All support-value events together have probability one. :: \sum_{x\in D}p_X(x)=1,\quad p_X(x)\ge0 :: Countable additivity and nonnegativity give the PMF requirements.
A numerical set B collects exactly its support values. :: P(X\in B)=\sum_{x\in B\cap D}p_X(x) :: The sum is over disjoint value events.
A cutoff event selects the support values not exceeding its cutoff. :: F_X(t)=\sum_{x\le t}p_X(x) :: This derives the discrete CDF from the PMF.
''','A PMF gives probability at separate values; a CDF accumulates those masses through a cutoff.')
put('4.3.1','Explain expected value as a weighted average rather than as a predicted single observation.',r'''
Suppose discrete X has values x and probabilities p_X(x). :: \sum_xp_X(x)=1 :: The probabilities provide normalized nonnegative weights.
For a finite list, form the ordinary weighted average by multiplying each value by its weight. :: E[X]=\sum_xx p_X(x) :: This defines expected value; an infinite signed list needs a convergence condition.
Separate positive and negative contributions to avoid an undefined infinity-minus-infinity expression. :: E[|X|]=\sum_x|x|p_X(x)<\infty :: This sufficient condition makes the signed sum absolutely convergent and independent of summation order.
For a fair die the six weights are all 1/6. :: E[X]=\frac{1+2+3+4+5+6}{6}=3.5 :: No die face is 3.5; the expectation is the distribution’s balance point.
A constant c has the same value at every outcome. :: E[c]=c\sum_xp_X(x)=c :: This explains why fixed constants can be treated normally in expectation algebra.
''','Expectation is a probability-weighted average, with finite absolute mean required for the finite signed calculations used here.')
put('4.5.1','Derive the variance shortcut from the definition and explain its units.',r'''
Let μ=E[X] and assume E[X²]<∞. :: D=X-\mu :: A deviation is positive above the mean and negative below it.
Deviations themselves average to zero by linearity. :: E[D]=E[X]-\mu=0 :: A signed-deviation average therefore cannot measure spread.
Define variance by averaging squared deviations. :: \operatorname{Var}(X)=E[D^2]\ge0 :: Squaring prevents positive and negative departures from cancelling; this is a definition of spread.
Expand the square and use E[X]=μ. :: E[(X-\mu)^2]=E[X^2]-2\mu E[X]+\mu^2=E[X^2]-\mu^2 :: This derives the computational shortcut.
Define standard deviation as the nonnegative square root. :: \operatorname{SD}(X)=\sqrt{\operatorname{Var}(X)} :: If X is in centimeters, variance is in square centimeters and standard deviation returns to centimeters.
Variance is zero exactly when the deviation is zero almost surely. :: \operatorname{Var}(X)=0\ \Longleftrightarrow\ P(X=\mu)=1 :: A nonnegative square cannot have zero average while being positive with positive probability.
''','Variance is a mean square, and standard deviation is its square root in the original measurement units.')
put('4.6.1','Derive the binomial mass from success-pattern counting.',r'''
One Bernoulli trial is a flag I with success chance p. :: P(I=1)=p,\quad P(I=0)=1-p :: This defines the two-value Bernoulli law.
Take n mutually independent trials, all with the same p, and let X count successes. :: X=\sum_{i=1}^nI_i :: This sampling model defines a binomial count.
A specified success/failure pattern with k successes contains n−k failures. :: P(\text{one pattern})=p^k(1-p)^{n-k} :: Independence supplies the product of trial probabilities.
Choose which k labeled trial positions are successes. :: \binom nk :: The choosing coefficient counts distinct patterns, not probabilities.
The patterns are disjoint, so add their identical probabilities. :: P(X=k)=\binom nkp^k(1-p)^{n-k}\quad(0\le k\le n) :: The count times one-pattern probability gives the PMF.
The binomial theorem checks that all masses sum to one. :: \sum_{k=0}^n\binom nkp^k(1-p)^{n-k}=[p+(1-p)]^n=1 :: For p=0 or 1, interpret the law directly as a deterministic count rather than evaluating ambiguous endpoint powers mechanically.
''','Binomial masses require both independent trials and a common success probability.')
put('4.8.4','Normalize power-law masses and test which moments exist.',r'''
For α>1, let ζ(α) be the sum of the positive power-law terms. :: \zeta(\alpha)=\sum_{k=1}^{\infty}k^{-\alpha} :: The p-series convergence test gives finiteness exactly for α>1; comparing with ∫_1^∞x^(−α)dx proves this threshold.
Divide each positive term by the sum. :: P(X=k)=\frac{k^{-\alpha}}{\zeta(\alpha)}\quad(k\ge1) :: The definition guarantees nonnegative masses summing to 1.
To calculate a positive r-th moment, multiply each mass by k^r. :: E[X^r]=\frac1{\zeta(\alpha)}\sum_{k=1}^{\infty}k^{-(\alpha-r)} :: The exponent identity k^r k^(−α)=k^(−(α−r)) gives the displayed series.
Apply the same p-series convergence threshold. :: E[X^r]<\infty\ \Longleftrightarrow\ \alpha>r+1 :: At and below the threshold the nonnegative series diverges; one cannot use a finite-moment formula there.
For α>2 the mean is the ratio of two zeta sums, and for α>3 variance uses the second moment. :: E[X]=\frac{\zeta(\alpha-1)}{\zeta(\alpha)},\quad\operatorname{Var}(X)=\frac{\zeta(\alpha-2)}{\zeta(\alpha)}-\left(\frac{\zeta(\alpha-1)}{\zeta(\alpha)}\right)^2\ (\alpha>3) :: These follow by substituting r=1,2 and subtracting the squared mean.
''','A normalized distribution can still lack a finite mean or variance; moment existence depends on the tail exponent.')
put('4.2.2','Recover a numerical PMF by adding outcome groups.',r'''
Let S be a discrete original sample space with known outcome weights p(s). :: \sum_{s\in S}p(s)=1 :: They need not be equal.
Define the recorded value X(s) for each outcome. :: A_x=\{s:X(s)=x\} :: Each A_x collects all outcomes giving that same value.
Add the original probabilities in each group. :: p_X(x)=\sum_{s\in A_x}p(s) :: Additivity is valid because the original outcomes are disjoint singleton events.
The value groups form a partition of all outcomes. :: \sum_xp_X(x)=\sum_sp(s)=1 :: Regrouping nonnegative weights preserves their total.
If p(s)=1/|S| is uniform, the group sum becomes a count. :: p_X(x)=|A_x|/|S| :: Different group sizes give different numerical masses, even from a uniform experiment.
''','Aggregating outcomes sums their probability weights; it does not average their labels or assume a uniform numerical law.')
put('4.4.2','Show algebraically why applying a nonlinear function before and after averaging differs.',r'''
For a discrete X, LOTUS gives the average of a calculated output. :: E[g(X)]=\sum_xg(x)p_X(x) :: Apply g separately to each input, then weight those outputs.
Applying g after averaging instead gives a different expression. :: g(E[X])=g\left(\sum_xx p_X(x)\right) :: There is no general distributive rule for nonlinear g.
For X equally likely to be 0 or 2, compute the mean first. :: E[X]=1 :: The two weights are one-half each.
For g(x)=x², average the squares and compare with the squared mean. :: E[X^2]=(0^2+2^2)/2=2,\quad(E[X])^2=1 :: The explicit example disproves the proposed equality for nonlinear functions.
For an affine function aX+b, linearity does give equality. :: E[aX+b]=aE[X]+b :: Constants distribute through the weighted sum, explaining exactly why this special case works.
''','Nonlinear outputs must be averaged using LOTUS; affine functions alone have the general mean-commuting rule.')
put('4.10.2','Choose CDF or left-limit endpoints to match precisely the requested interval.',r'''
Define F(t)=P(X≤t) and F(t^-)=P(X<t). :: P(X=t)=F(t)-F(t^-) :: The left-limit formula follows by increasing cutoffs below t toward t.
To include the right endpoint b and exclude the left endpoint a, subtract values through a. :: P(a<X\le b)=F(b)-F(a) :: The subtraction removes the mass at a along with all lower values.
To include a, subtract only the values strictly below a. :: P(a\le X\le b)=F(b)-F(a^-) :: A left limit on the lower cutoff retains its atom.
To exclude b, use its strict-below accumulation. :: P(a<X<b)=F(b^-)-F(a) :: The upper left limit removes the atom at b.
Exclude b while including a by using both left limits. :: P(a\le X<b)=F(b^-)-F(a^-) :: For a density distribution, all point masses vanish and these interval probabilities coincide.
''','A CDF includes its endpoint; a left limit excludes it. Choose each endpoint to match the event wording.')
put('4.2.4','Evaluate the four-value uniform moments directly as a check on the general formula.',r'''
Let X be uniform on a,a+1,a+2,a+3 and shift to X_0=X−a. :: P(X_0=k)=1/4\quad(k=0,1,2,3) :: All four probabilities are equal and sum to 1.
Compute the weighted mean of the shifted values. :: E[X_0]=(0+1+2+3)/4=3/2 :: Equal weights make this an ordinary list average.
Compute the weighted second moment. :: E[X_0^2]=(0+1+4+9)/4=7/2 :: Square each value before adding.
Subtract the squared mean. :: \operatorname{Var}(X_0)=7/2-(3/2)^2=14/4-9/4=5/4 :: Putting both terms over denominator 4 makes the subtraction explicit.
Undo the shift and compare with the N=4 formula. :: E[X]=a+3/2,\quad\operatorname{Var}(X)=5/4=(4^2-1)/12 :: A constant shift leaves the variance unchanged.
''','The four-value calculation verifies the general discrete-uniform mean and variance without using a sum formula.')
put('5.1.1','Explain the density model and derive its interval and point probabilities.',r'''
Assume a nonnegative density f with total area 1. :: f(x)\ge0,\quad\int_{-\infty}^{\infty}f(x)dx=1 :: These conditions define normalized probability weight spread over the number line; density height itself can exceed 1.
The density model assigns probability to a set by its area. :: P(X\in A)=\int_Af(x)dx :: This is the model definition, where the integral adds height times small widths.
Take A to be all values up to x. :: F(x)=P(X\le x)=\int_{-\infty}^xf(t)dt :: A CDF accumulates probability, while density gives its local concentration.
Subtract accumulated areas to isolate an interval. :: P(a<X\le b)=F(b)-F(a)=\int_a^bf(t)dt :: The integral from a to b is precisely the area left after subtraction.
A singleton has zero length and therefore zero density integral. :: P(X=a)=\int_{\{a\}}f(x)dx=0 :: This is an integration property of sets of length zero, valid even if the density value at a is large or unspecified.
Endpoint atoms vanish, so including or excluding individual interval endpoints changes no probability. :: P(a<X<b)=P(a\le X\le b) :: This endpoint simplification is valid for density distributions, not all random variables.
''','Density is probability per unit length; only its accumulated area is a probability.')
put('5.4.1','Derive the Gaussian normalizer and the change to standard-normal coordinates.',r'''
Begin with the positive bell-shaped function exp(−z²/2), and call its total area I. :: I=\int_{-\infty}^{\infty}e^{-z^2/2}dz :: Comparing its tails to e^(−|z|/2) shows the area is finite; the factor needed for a density will be 1/I.
Multiply two identical area integrals and use nonnegative iterated integration. :: I^2=\iint_{\mathbb R^2}e^{-(x^2+y^2)/2}dx\,dy :: Tonelli’s theorem justifies this product-to-plane integral.
Use polar coordinates x=r cos θ,y=r sin θ, so x²+y²=r². :: dx\,dy=r\,dr\,d\theta,\quad r\ge0,\ 0\le\theta<2\pi :: The factor r is the polar Jacobian: differentiating gives determinant r(cos²θ+sin²θ)=r. The geometry uses Pythagoras; the integral change uses multivariable calculus.
Evaluate the radial integral using the derivative of −exp(−r²/2). :: I^2=\int_0^{2\pi}d\theta\int_0^{\infty}re^{-r^2/2}dr=2\pi\cdot1 :: The inner endpoint difference is 0−(−1)=1.
The original area is positive, so take its positive square root. :: I=\sqrt{2\pi},\quad\phi(z)=\frac{e^{-z^2/2}}{\sqrt{2\pi}} :: This derives the standard-normal normalizing constant.
For X=μ+σZ with σ>0, the inverse coordinate is z=(x−μ)/σ and its slope is 1/σ. :: f_X(x)=\frac1\sigma\phi\left(\frac{x-\mu}{\sigma}\right)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sigma\sqrt{2\pi}} :: The inverse stretch divides density height by σ so probability areas stay unchanged.
Translate a cutoff using positive σ. :: P(X\le x)=P\left(Z\le\frac{x-\mu}{\sigma}\right)=\Phi\left(\frac{x-\mu}{\sigma}\right) :: Φ denotes the accumulated standard-normal density; the standardization reverses the location and scale changes.
''','Standardization is algebra; the bell curve’s sqrt(2π) normalization requires a two-dimensional integral, whose coordinate and endpoint steps are shown.')
put('5.4.3','Derive the approximating center and spread from Bernoulli trials and explain the half-unit boundary.',r'''
For B~Bin(n,p) with 0<p<1, write B as a sum of iid success flags. :: B=\sum_{i=1}^nI_i :: Each flag has mean p and variance p(1−p).
Add the flag moments using independence for the variance. :: E[B]=np,\quad\operatorname{Var}(B)=np(1-p) :: These moments were derived in the binomial note.
The CLT standardizes the sum by subtracting its mean and dividing by its standard deviation. :: Z=\frac{B-np}{\sqrt{np(1-p)}}\approx N(0,1) :: This is a large-n approximation for fixed p, not an exact finite-sample law.
Translate a cutoff back to the standard-normal scale. :: P(B\le k)\approx\Phi\left(\frac{k-np}{\sqrt{np(1-p)}}\right) :: The denominator is spread of the count, not spread of a single trial.
To represent integer mass at k as a continuous bar, allocate the interval from k−1/2 to k+1/2. :: P(B\le k)\approx\Phi\left(\frac{k+1/2-np}{\sqrt{np(1-p)}}\right) :: The shifted upper boundary includes the entire bar centered at k; this continuity correction is a geometric approximation, not an identity.
Expected successes np and failures n(1−p) should both be reasonably numerous. :: np\text{ and }n(1-p)\text{ large} :: Extreme p and small samples can produce strong skewness; the CLT alone gives no guaranteed finite-n accuracy.
''','The binomial normal approximation uses its derived mean and variance; half-unit boundary changes align integer bars with continuous area.')
put('5.5.2','Derive hazard from a conditional short-interval failure probability and solve for survival.',r'''
For a nonnegative density lifetime define survival S(t)=P(X>t)=1−F(t). :: S'(t)=-f(t) :: The CDF derivative is f where valid, so differentiating 1−F gives the negative density.
Among items surviving t, failure in the next Δ time units has conditional chance. :: P(t<X\le t+\Delta\mid X>t)=\frac{\int_t^{t+\Delta}f(u)du}{S(t)} :: The numerator event is contained in the survival event; assume S(t)>0.
Divide by Δ and shrink it at a continuity point of f. :: h(t)=\lim_{\Delta\downarrow0}\frac{P(t<X\le t+\Delta\mid X>t)}\Delta=\frac{f(t)}{S(t)} :: Hazard is failure probability per small unit of time among survivors, not a probability at one exact time.
Combine this ratio with the survival derivative. :: \frac{S'(t)}{S(t)}=-h(t) :: The derivative of log S is S'/S while S>0.
Integrate from 0 to t and use S(0)=1 for a nonnegative density lifetime. :: \log S(t)-\log S(0)=-\int_0^th(u)du :: The fundamental theorem of calculus integrates the log derivative; assume locally integrable hazard while survival remains positive.
Exponentiate both sides. :: S(t)=\exp\left[-\int_0^th(u)du\right] :: This derives the survival formula with the correct integration condition.
For constant h(t)=λ>0 the integral is λt. :: S(t)=e^{-\lambda t} :: Constant hazard therefore gives exponential survival.
''','Hazard is the conditional failure rate per unit time; integrating it recovers survival until the survival probability reaches zero.')
put('5.6.1','Define the gamma and beta integrals, derive their relation, and differentiate Weibull survival.',r'''
For a>0 define the gamma integral; for a,b>0 define the beta integral. :: \Gamma(a)=\int_0^{\infty}t^{a-1}e^{-t}dt,\quad B(a,b)=\int_0^1v^{a-1}(1-v)^{b-1}dv :: These are names for positive finite areas; the parameter conditions ensure integrability at the endpoints.
In a gamma-rate density put t=λx, so dx=dt/λ. :: \int_0^{\infty}\frac{\lambda^a x^{a-1}e^{-\lambda x}}{\Gamma(a)}dx=\frac1{\Gamma(a)}\int_0^{\infty}t^{a-1}e^{-t}dt=1 :: Powers of λ cancel, deriving the gamma normalizing constant for λ>0.
Integrate t^a e^(−t) by parts; the boundary term vanishes for a>0. :: \Gamma(a+1)=a\Gamma(a),\quad\Gamma(1)=1 :: Repetition gives Γ(n)=(n−1)! for positive integers, and gives gamma moments E[X]=a/λ, E[X²]=a(a+1)/λ², Var(X)=a/λ² by the same t substitution.
Multiply two gamma integrals over positive x,y and change to u=x+y,v=x/(x+y). :: x=uv,\quad y=u(1-v),\quad\left|\det\frac{\partial(x,y)}{\partial(u,v)}\right|=u :: The inverse derivative matrix has rows (v,u),(1−v,−u), with determinant −u; the integral transformation theorem justifies its area correction.
Collect powers after substitution and separate the two positive integrals. :: \Gamma(a)\Gamma(b)=\left[\int_0^{\infty}u^{a+b-1}e^{-u}du\right]\left[\int_0^1v^{a-1}(1-v)^{b-1}dv\right]=\Gamma(a+b)B(a,b) :: Independence is not involved; this is nonnegative integration and algebra.
Divide to normalize beta density. :: B(a,b)=\frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)},\quad f_{\mathrm{Beta}}(v)=\frac{v^{a-1}(1-v)^{b-1}}{B(a,b)} :: The denominator is exactly the total area of the unnormalized beta shape.
Beta moments follow by adding one or two powers of v and using the gamma recurrence. :: E[V]=\frac{B(a+1,b)}{B(a,b)}=\frac a{a+b},\quad E[V^2]=\frac{a(a+1)}{(a+b)(a+b+1)} :: Subtracting the squared mean gives ab/[(a+b)²(a+b+1)].
For a Weibull model with k,λ>0, differentiate the defined survival. :: S(t)=e^{-(\lambda t)^k},\quad f(t)=-S'(t)=k\lambda^kt^{k-1}e^{-(\lambda t)^k}\ (t>0) :: The chain rule differentiates (λt)^k to kλ^k t^(k−1); S(0)=1 and S(∞)=0 check total probability 1.
Divide density by survival to get its varying hazard. :: h(t)=k\lambda^kt^{k-1} :: This is constant for k=1, increases for k>1, and decreases for 0<k<1.
''','The special functions are defined by integrals; their normalizing roles and the beta–gamma identity are derived rather than quoted without explanation.')
put('5.6.2','Check normalization and moment existence before using heavy-tail distribution formulas.',r'''
For the standard Cauchy, integrate its stated density using the arctangent derivative. :: \int_{-\infty}^{\infty}\frac{dx}{\pi(1+x^2)}=\frac{\arctan(\infty)-\arctan(-\infty)}\pi=1 :: The derivative of arctan x is 1/(1+x²); its endpoint limits are ±π/2.
Compute its positive mean contribution by substituting u=1+x². :: \int_0^R\frac{x}{\pi(1+x^2)}dx=\frac{\log(1+R^2)}{2\pi}\longrightarrow\infty :: du=2x dx; this diverges as R grows. The negative contribution diverges in absolute size as well.
The two infinite signed contributions cannot be subtracted to define a mean. :: E[X]\text{ is undefined for standard Cauchy} :: Symmetry gives a zero symmetric principal value, which is not an expected value.
For Pareto lower bound a>0 and tail exponent λ>0, differentiate F(x)=1−(a/x)^λ on x≥a. :: f_X(x)=\lambda a^\lambda x^{-\lambda-1}\quad(x>a) :: The derivative follows from the power rule.
For any r>0, weight this density by x^r and integrate the power. :: E[X^r]=\lambda a^\lambda\int_a^{\infty}x^{r-\lambda-1}dx=\frac{\lambda a^r}{\lambda-r}\quad(\lambda>r) :: The upper power integral is finite exactly when λ>r; otherwise this positive moment is infinite.
For lognormal X=e^Y with Y normal, use the inverse y=log x with derivative 1/x. :: f_X(x)=\frac1{x\sigma\sqrt{2\pi}}\exp\left[-\frac{(\log x-\mu)^2}{2\sigma^2}\right]\quad(x>0) :: The ordinary change-of-variable rule derives the density from the normal density.
Its positive moments follow from the previously computed normal MGF. :: E[X^r]=E[e^{rY}]=e^{r\mu+r^2\sigma^2/2} :: In particular E[X]=e^(μ+σ²/2), and Var(X)=e^(2μ+σ²)(e^(σ²)−1) by subtracting the squared mean from the r=2 moment.
''','Normalization does not guarantee moments. Cauchy has no mean, Pareto moments need λ>r, and lognormal moments follow from a normal exponential average.')
put('5.7.1','Translate an output cutoff back to the input and use the chain rule.',r'''
For Y=g(X), begin with the definition of its CDF. :: F_Y(y)=P(g(X)\le y) :: This holds for any valid random-variable function, whether or not g has an inverse.
If g is strictly increasing with inverse h, solve the cutoff inequality for X. :: g(X)\le y\ \Longleftrightarrow\ X\le h(y) :: Increasing functions preserve order.
Use the original CDF to compute this event. :: F_Y(y)=F_X(h(y)) :: The input CDF avoids an immediate density calculation.
Differentiate the composition where derivatives exist. :: f_Y(y)=f_X(h(y))h'(y) :: The chain rule multiplies the two slopes; assume X has a density and the inverse is differentiable on this branch.
If g is decreasing, reverse the input inequality and use the complement probability. :: F_Y(y)=1-F_X(h(y)),\quad f_Y(y)=-f_X(h(y))h'(y) :: X has no atoms, so ≥ and > have the same probability, and h' is negative.
Combine both signs by the absolute inverse slope. :: f_Y(y)=f_X(h(y))|h'(y)| :: Set density to zero off the transformed support; for many-to-one transformations, include every branch as derived in the next note.
''','CDF transformation is an event-translation method; the density formula follows by differentiating with the correct monotonicity sign.')
put('6.1.1','Isolate a rectangle by subtracting the lower and left strips and restoring their overlap.',r'''
Define F(x,y)=P(X≤x,Y≤y); start with the upper-right accumulated corner. :: F(a_2,b_2) :: Assume a_1<a_2 and b_1<b_2.
Remove points left of or on the lower x cutoff. :: F(a_2,b_2)-F(a_1,b_2) :: The remaining strip has a_1<X≤a_2 and Y≤b_2.
Remove points below or on the lower y cutoff as well. :: F(a_2,b_2)-F(a_1,b_2)-F(a_2,b_1) :: This second removed region overlaps the first in X≤a_1,Y≤b_1.
The lower-left overlap was removed twice, so restore it once. :: P(a_1<X\le a_2,b_1<Y\le b_2)=F(a_2,b_2)-F(a_1,b_2)-F(a_2,b_1)+F(a_1,b_1) :: Inclusion–exclusion gives the exact rectangle probability, including endpoint conventions.
Alternatively, factor the two interval membership flags and expand. :: (\mathbf1_{X\le a_2}-\mathbf1_{X\le a_1})(\mathbf1_{Y\le b_2}-\mathbf1_{Y\le b_1}) :: This equals the rectangle flag at every outcome; averaging its four algebraic terms proves the same identity without a diagram.
''','The rectangle formula is two-dimensional inclusion–exclusion, valid with atoms as well as with densities.')
put('6.1.2','Add joint table entries to obtain marginals.',r'''
Let p(x,y) be the probability of the complete numerical pair. :: p(x,y)=P(X=x,Y=y) :: All entries are nonnegative.
Distinct pair events are disjoint and all pairs cover the sample distribution. :: \sum_x\sum_yp(x,y)=1 :: This is the normalization of a joint PMF.
For a fixed x, the event X=x is the union over every compatible y. :: \{X=x\}=\bigcup_y\{X=x,Y=y\} :: Each outcome has only one Y value, so these pieces are disjoint.
Add the pair probabilities in that row. :: p_X(x)=\sum_yp(x,y) :: This yields the marginal PMF of X.
Apply the same reasoning to a fixed y column. :: p_Y(y)=\sum_xp(x,y) :: A marginal keeps one coordinate while adding all values of the other; independence is not required.
''','Marginal table sums follow directly from disjoint unions of numerical pair events.')
put('6.2.1','Explain the independence definition and derive discrete and density factorization consequences.',r'''
Independence requires the product rule for every separate-coordinate event. :: P(X\in A,Y\in B)=P(X\in A)P(Y\in B) :: This is the defining property, not something inferred only from covariance.
For discrete variables choose singleton sets A={x} and B={y}. :: p_{X,Y}(x,y)=p_X(x)p_Y(y) :: The general definition implies factorization at every pair.
Conversely, sum factorized pair masses over arbitrary separate sets. :: \sum_{x\in A}\sum_{y\in B}p_X(x)p_Y(y)=\left(\sum_{x\in A}p_X(x)\right)\left(\sum_{y\in B}p_Y(y)\right) :: Nonnegative summation permits this factoring, giving the full event definition.
For a product joint density, the rectangle integral factors in the same way. :: \int_A\int_Bf_X(x)f_Y(y)dy\,dx=P(X\in A)P(Y\in B) :: This proves independence from density factorization.
Conversely, independent rectangle probabilities determine the product probability measure. :: f_{X,Y}(x,y)=f_X(x)f_Y(y)\quad\text{almost everywhere} :: The measure uniqueness theorem and uniqueness of densities justify this converse; these are advanced prerequisites, and values on zero-area sets do not matter.
''','Independence means all separate events factor, with equivalent mass or almost-everywhere density factorization in the appropriate models.')
put('6.3.2','Compute convolution as the length of the overlap between two unit intervals.',r'''
Let X and Y be independent uniform (0,1) variables. :: f_X(x)=f_Y(x)=1\quad(0<x<1) :: Outside their respective intervals the densities are zero.
Insert them into the convolution integral for S=X+Y. :: f_S(s)=\int f_X(s-y)f_Y(y)dy :: Each integrand is 1 exactly when both component values are in (0,1).
The two support conditions are 0<y<1 and 0<s−y<1. :: \max(0,s-1)<y<\min(1,s) :: Solve the second inequality for y and intersect the allowed intervals.
The integral of height 1 over this interval is its positive length. :: f_S(s)=\max(0,\min(1,s)-\max(0,s-1)) :: No overlap means zero density.
For 0<s<1 the bounds are 0 and s; for 1≤s<2 they are s−1 and 1. :: f_S(s)=s\ (0<s<1),\quad f_S(s)=2-s\ (1\le s<2) :: Elsewhere the density is zero.
Check its total area as two triangles. :: \frac12(1)(1)+\frac12(1)(1)=1 :: The density has the required normalization and a peak at total 1.
''','The triangular sum density comes from the length of all feasible splits of each total.')
put('6.4.1','Normalize one discrete joint-table slice.',r'''
Fix y with positive marginal probability p_Y(y). :: p_Y(y)=\sum_xp_{X,Y}(x,y)>0 :: The conditioning value must actually have positive probability.
The joint event X=x and Y=y is the successful part of the retained Y=y event. :: P(X=x\mid Y=y)=\frac{P(X=x,Y=y)}{P(Y=y)} :: This is the ordinary conditional-probability definition.
Use the joint and marginal PMF notation. :: p_{X\mid Y}(x\mid y)=\frac{p_{X,Y}(x,y)}{p_Y(y)} :: The same column total divides every entry in the slice.
Add the normalized entries and cancel the slice total. :: \sum_xp_{X\mid Y}(x\mid y)=\frac{\sum_xp_{X,Y}(x,y)}{p_Y(y)}=1 :: Thus the slice is a proper PMF.
Accumulate its masses through a cutoff to obtain its conditional CDF. :: F_{X\mid Y}(a\mid y)=\sum_{x\le a}p_{X\mid Y}(x\mid y) :: No unconditional denominator should be reused after restricting the model.
''','A conditional discrete distribution is one normalized joint slice, with positive slice total required.')
put('6.5.1','Justify continuous conditional density by normalization and recovery of joint probabilities.',r'''
For a joint density, the Y marginal is its x integral. :: f_Y(y)=\int f_{X,Y}(x,y)dx :: Assume 0<f_Y(y)<∞ at the slice under consideration; this holds on the appropriate almost-everywhere domain.
An exact continuous Y value has probability zero, so ordinary point-event division would be undefined. :: P(Y=y)=0 :: Define a conditional density using density ratios instead, not 0/0 probabilities.
Normalize the joint slice by its marginal density. :: f_{X\mid Y}(x\mid y)=\frac{f_{X,Y}(x,y)}{f_Y(y)} :: This is nonnegative because both densities are nonnegative.
Integrate the normalized slice over all x. :: \int f_{X\mid Y}(x\mid y)dx=1 :: The numerator integral equals the denominator f_Y(y).
Check that averaging the slice laws over Y recovers joint-region probability. :: \int_B\left[\int_Af_{X\mid Y}(x\mid y)dx\right]f_Y(y)dy=\int_B\int_Af_{X,Y}(x,y)dx\,dy :: The marginal factor cancels; this defining conditional averaging property rigorously validates the density ratio almost everywhere.
Use the normalized slice to calculate conditional sets and cutoffs. :: P(X\in A\mid Y=y)=\int_Af_{X\mid Y}(x\mid y)dx,\quad F_{X\mid Y}(a\mid y)=\int_{-\infty}^af_{X\mid Y}(x\mid y)dx :: At marginal-null values, a conditional version is not uniquely determined by the joint law.
''','Continuous conditional density is validated by its normalized slices and their recovery of the joint law; it is not a ratio of exact-point event probabilities.')
put('6.5.3','Restrict and normalize density for an event, then apply the same idea to a latent parameter.',r'''
Let A be a numerical set with P(X in A)>0 and X have density f_X. :: P(X\in A)=\int_Af_X(x)dx :: The denominator is an area probability, not a point-density height.
The conditional probability of another numerical set B uses its retained intersection. :: P(X\in B\mid X\in A)=\frac{\int_{A\cap B}f_X(x)dx}{P(X\in A)} :: This is ordinary positive-event conditioning.
Read the density multiplying dx on the retained support. :: f_{X\mid X\in A}(x)=\frac{f_X(x)\mathbf1_A(x)}{P(X\in A)} :: It is zero outside A and integrates to 1 inside A.
Now let Θ have prior density f_Θ and discrete observed data N=n have likelihood L(n given θ). :: f_{\Theta,N}(\theta,n)=f_\Theta(\theta)L(n\mid\theta) :: The multiplication rule supplies prior times conditional data chance.
Integrate over every parameter value to get the evidence probability. :: P(N=n)=\int L(n\mid\theta)f_\Theta(\theta)d\theta :: This is the continuous-parameter version of total probability.
Divide by positive evidence to normalize the updated parameter density. :: f_{\Theta\mid N}(\theta\mid n)=\frac{L(n\mid\theta)f_\Theta(\theta)}{\int L(n\mid u)f_\Theta(u)du} :: The proportionality in Bayes’ rule becomes an exact formula with this denominator.
''','Conditioning rescales retained probability weight; parameter updating normalizes likelihood times prior.')
put('6.8.1','Explain permutation symmetry and show why it does not imply independence.',r'''
Exchangeability means every relabeling of the observation positions preserves their joint law. :: (X_1,\ldots,X_n)\text{ and }(X_{\pi(1)},\ldots,X_{\pi(n)})\text{ have the same law} :: A permutation π rearranges positions, leaving their possible values intact; this is a definition of symmetry.
For a discrete law, check that its mass is unchanged when arguments are reordered. :: p(x_1,\ldots,x_n)=p(x_{\pi(1)},\ldots,x_{\pi(n)}) :: This equality for every vector establishes the required symmetry of probabilities.
An iid joint PMF is a product of the same individual law. :: p(x_1,\ldots,x_n)=\prod_{i=1}^np_X(x_i) :: Reordering the factors leaves the product unchanged, so iid observations are exchangeable.
For a dependent example, draw one fair Bernoulli Z and set both X_1 and X_2 equal to Z. :: P((X_1,X_2)=(0,0))=P((X_1,X_2)=(1,1))=1/2 :: Swapping positions changes nothing, so the pair is exchangeable.
But the chance of two ones does not equal the product of their individual chances. :: 1/2\ne(1/2)(1/2)=1/4 :: This pair is dependent despite exchangeability.
''','Exchangeability is a joint relabeling symmetry; independence is a separate factorization condition.')
put('6.8.2','Show that two symmetric sampling mechanisms produce probabilities depending only on success count.',r'''
Sample n objects without replacement from N with m marked objects, recording only marked/unmarked flags. :: r=\sum_{i=1}^nx_i\quad(x_i\in\{0,1\}) :: A specified binary pattern has r marked positions and n−r unmarked positions.
Multiply the successive remaining-pool chances for that pattern. :: P(\text{pattern})=\frac{(m)_r(N-m)_{n-r}}{(N)_n} :: Here (a)_k=a(a−1)⋯(a−k+1). Reordering the draws reorders the same numerator marked and unmarked factors.
The expression depends on r, not on the positions of its ones. :: P(\text{permuted pattern})=P(\text{pattern}) :: This proves exchangeability of the indicator sample; draws remain dependent because objects are removed.
For the second mechanism, draw one random Θ and then conditionally iid Bernoulli(Θ) flags. :: P(\text{pattern}\mid\Theta)=\Theta^r(1-\Theta)^{n-r} :: Independence holds within each fixed-Θ conditional model.
Average over Θ using total expectation. :: P(\text{pattern})=E[\Theta^r(1-\Theta)^{n-r}] :: Again the position labels do not appear, proving exchangeability.
For two flags, compute their covariance through conditional means. :: E[I_1I_2]-E[I_1]E[I_2]=E[\Theta^2]-E[\Theta]^2=\operatorname{Var}(\Theta) :: A genuinely varying shared success chance therefore creates dependence, despite symmetry.
''','Sampling symmetry produces exchangeable sequences; removal or a shared latent parameter can still produce dependence.')
put('7.4.1','Expand covariance and derive the correlation bound from a nonnegative square.',r'''
Let μ_X=E[X], μ_Y=E[Y], U=X−μ_X and V=Y−μ_Y, with finite second moments. :: \operatorname{Cov}(X,Y)=E[UV] :: This defines covariance as the average product of deviations.
Expand the product and average each term. :: E[UV]=E[XY]-\mu_XE[Y]-\mu_YE[X]+\mu_X\mu_Y=E[XY]-\mu_X\mu_Y :: The two negative mean products and one positive product leave one negative product.
For independent inputs the joint average factors. :: E[XY]=E[X]E[Y]\ \Longrightarrow\ \operatorname{Cov}(X,Y)=0 :: This uses the product joint law; its converse does not generally hold.
Suppose both variances are positive, and standardize the centered variables. :: A=U/\sigma_X,\quad B=V/\sigma_Y,\quad E[A^2]=E[B^2]=1,\quad\rho=E[AB] :: Correlation removes measurement units by dividing by the two standard deviations.
A square is nonnegative for every real c. :: 0\le E[(A-cB)^2]=1-2c\rho+c^2 :: Expand and use the standardized second moments.
Choose c=ρ and simplify. :: 0\le1-\rho^2\ \Longrightarrow\ -1\le\rho\le1 :: This derives the correlation bound without quoting Cauchy–Schwarz.
For a zero-covariance dependent example, take X uniform on −1,0,1 and Y=X². :: E[X]=0,\quad E[XY]=E[X^3]=0,\quad\operatorname{Cov}(X,Y)=0 :: Y is determined by X, so dependence remains. Zero covariance describes only the centered product average.
''','Covariance is a centered product average; correlation is its unit-free version with magnitude at most 1 when both standard deviations are positive.')
put('7.5.1','Build a function of the observed grouping value by calculating its within-group mean.',r'''
For discrete Y=y with positive probability, obtain X’s conditional masses. :: P(X=x\mid Y=y)=\frac{P(X=x,Y=y)}{P(Y=y)} :: These normalized weights sum to 1 in that group.
Average X using these within-group weights. :: m(y)=E[X\mid Y=y]=\sum_xxP(X=x\mid Y=y) :: This defines the conditional mean when its required absolute average is finite.
Repeat the calculation for every positive-probability y group. :: m:Y\text{ values}\to\mathbb R :: This produces a lookup function, not a single universal number.
Evaluate the lookup at the actually observed random Y. :: E[X\mid Y]=m(Y) :: Before Y is observed this conditional expectation is itself random.
For a conditional density use the continuous weighted average instead. :: m(y)=\int x f_{X\mid Y}(x\mid y)dx :: The density version is defined on almost every relevant y slice; marginal-null slices do not determine a unique version.
Its overall average weights groups by their actual probabilities. :: E[m(Y)]=E[X] :: This is total expectation, proved in the next note by expanding and canceling the joint group weights.
''','A conditional expectation is the function of the observation that returns the corresponding group mean.')
put('7.7.1','Explain why differentiating the exponential average produces moments, with the needed convergence condition.',r'''
Define the MGF from an exponential weighted average. :: M_X(t)=E[e^{tX}] :: Require it to be finite throughout some interval (−δ,δ) about zero for the moment-generating conclusions.
At t=0 the exponential equals 1 for every observation. :: M_X(0)=E[1]=1 :: This is normalization, not the mean of X.
Repeatedly differentiating the exponential multiplies by X each time. :: \frac{d^k}{dt^k}e^{tX}=X^ke^{tX} :: Treat X as a fixed observed number while differentiating with respect to t.
Finiteness on both sides of zero controls the absolute exponential tail. :: e^{c|X|}\le e^{cX}+e^{-cX}\quad(0<c<\delta) :: Taking expectations bounds the left side by two finite MGF values.
A polynomial times e^(tX) is dominated by a slightly larger absolute exponential on a smaller t interval. :: |X|^k e^{tX}\le C e^{c|X|}\quad(|t|<c/2) :: The function u^k e^(−cu/2) is bounded for u≥0; this supplies a fixed finite C.
Dominated differentiation now allows expectation and derivative to interchange. :: M_X^{(k)}(t)=E[X^ke^{tX}],\quad M_X^{(k)}(0)=E[X^k] :: This is a calculus theorem justified by the preceding integrable bound; setting t=0 removes the exponential factor.
Equal MGFs on an interval about zero determine the same probability law. :: M_X(t)=M_Y(t)\text{ near }0\ \Longrightarrow\ X\text{ and }Y\text{ have the same law} :: This is the advanced MGF uniqueness theorem, used as a prerequisite in distribution-identification arguments; equal first few moments alone are insufficient.
''','The MGF produces moments through justified differentiation. Both existence near zero and the uniqueness theorem must be stated when using it.')
put('7.9.1','Interpret dF as probability weight and recover discrete, continuous and mixed averages.',r'''
A CDF defines probability of a half-open interval by its increase. :: P(a<X\le b)=F(b)-F(a) :: Thus increments of F are probability weights, even if F has jumps.
For a step function g constant at value c_j on each disjoint numerical set A_j, its weighted average is a sum. :: E[g(X)]=\sum_jc_jP(X\in A_j) :: This is the direct expected-value definition for a finitely valued output.
The distribution integral notation names the same weighted average. :: \int g(x)dF(x)=\sum_jc_jP(X\in A_j) :: It is a Lebesgue–Stieltjes integral against the probability measure induced by F, rather than an ordinary derivative assumption.
Nonnegative functions are built as increasing limits of nonnegative step functions. :: E[g(X)]=\int g(x)dF(x)\quad(g\ge0) :: The monotone convergence theorem extends both weighted averages by the same limit; this is an explicit advanced integration prerequisite.
For discrete F, weight sits at its jumps; for a density F, it is f(x)dx. :: \int g\,dF=\sum_xg(x)p_X(x)\quad\text{or}\quad\int g(x)f_X(x)dx :: These reproduce the ordinary discrete and continuous LOTUS formulas. For a mixed law, add the jump and density contributions; a singular continuous component requires its own distribution weight.
For signed g, subtract its positive and negative part averages only when that subtraction is defined. :: E[|g(X)|]<\infty\ \Longrightarrow\ E[g(X)]\text{ is finite} :: If both part averages are infinite, no signed expected value is defined.
''','Distribution integration unifies probability-weighted sums and density integrals without assuming every CDF has a density.')
put('8.1.1','Use sample-average moments to explain what LLN and CLT statements measure.',r'''
Let X_i be iid with mean μ and finite positive variance σ², and let bar(X_n) be their average. :: E[\bar X_n]=\mu,\quad\operatorname{Var}(\bar X_n)=\sigma^2/n :: Linearity, independence and the variance scale rule give these equations.
Chebyshev bounds any fixed error margin ε>0. :: P(|\bar X_n-\mu|\ge\epsilon)\le\sigma^2/(n\epsilon^2)\to0 :: This proves the weak law under finite variance: a large error becomes unlikely.
The strong law describes an entire infinite sequence’s eventual limit. :: P(\lim_n\bar X_n=\mu)=1 :: Its fuller finite-absolute-mean proof is given in the strong-law note; it is a stronger statement than the preceding probability-at-each-n limit.
To retain the shrinking fluctuations, measure them in their own shrinking standard-deviation units. :: Z_n=\frac{\bar X_n-\mu}{\sigma/\sqrt n} :: The numerator’s spread is σ/sqrt(n), so this scale gives variance 1.
The CLT describes the limiting distribution of those normalized fluctuations. :: P(Z_n\le a)\to\Phi(a) :: This invokes the CLT proved in its own note; it does not claim the raw observations or the raw sum converge almost surely to a normal variable.
''','LLN explains closeness to the mean; CLT explains the probability shape of centered fluctuations measured in the correct units.')
put('8.3.2','Translate a total or average cutoff into the same standardized sum.',r'''
For iid observations define total T_n and average bar(X_n). :: T_n=\sum_iX_i,\quad\bar X_n=T_n/n :: Use finite positive variance σ² and mean μ.
Compute their centers and spreads. :: E[T_n]=n\mu,\quad\operatorname{SD}(T_n)=\sigma\sqrt n,\quad\operatorname{SD}(\bar X_n)=\sigma/\sqrt n :: Independence adds total variance nσ²; dividing by n rescales standard deviation by 1/n.
Subtract the center and divide by spread for a total cutoff x. :: P(T_n\le x)=P\left(\frac{T_n-n\mu}{\sigma\sqrt n}\le\frac{x-n\mu}{\sigma\sqrt n}\right) :: Positive spread preserves the cutoff inequality.
Replace the standardized sum’s CDF by the CLT’s standard-normal limit for a large sample. :: P(T_n\le x)\approx\Phi\left(\frac{x-n\mu}{\sigma\sqrt n}\right) :: This is an approximation, not an equality; the CLT alone supplies no finite-sample error bound.
For an average cutoff a, use the average’s own center and spread. :: P(\bar X_n\le a)\approx\Phi\left(\frac{a-\mu}{\sigma/\sqrt n}\right) :: Algebraically this is the same normalized sum since T_n=n bar(X_n).
For a count on a grid of spacing d, a bar centered at k extends half a grid step to either side. :: P(T_n\le k)\approx\Phi\left(\frac{k+d/2-n\mu}{\sigma\sqrt n}\right) :: This explains the usual half-unit correction when d=1; choose the boundary matching the event and actual grid.
''','Use the mean and standard deviation of the quantity being compared, then translate its cutoff before consulting a normal CDF.')
put('8.7.1','Add the incomes of the poorest population fraction using quantiles.',r'''
Assume nonnegative incomes with finite positive mean μ and define their quantile q(u). :: q(u)=\inf\{x:F(x)\ge u\}\quad(0<u<1) :: The generalized inverse works with tied incomes as well as continuous laws.
A uniform population rank U produces income q(U) with the original law. :: X\text{ has the law of }q(U),\quad\mu=\int_0^1q(u)du :: Inverse-transform sampling justifies the first fact; uniform LOTUS gives the mean integral.
The lowest population fraction p occupies ranks 0 through p. :: L(p)=\frac1\mu\int_0^pq(u)du :: This defines its share of total income, correctly splitting any tied-income group by rank.
For a continuous law without atoms, the lowest p incomes are those below ξ_p=q(p), with F(ξ_p)=p. :: L(p)=\frac{E[X\mathbf1_{\{X\le\xi_p\}}]}{E[X]} :: The quantile-rank and cutoff formulations then select the same population mass.
Because q(u) is nonnegative and nondecreasing, accumulated income is increasing and has nondecreasing slope. :: L'(p)=q(p)/\mu\quad\text{where differentiable} :: This yields an increasing convex curve; the endpoints are L(0)=0 and L(1)=1.
The poorest p ranks have mean income no larger than the whole-population mean. :: \frac1p\int_0^pq(u)du\le\mu\quad(0<p\le1) :: Nondecreasing q makes the remaining ranks’ mean at least the lower ranks’ mean; the overall mean is their weighted average.
Multiply the preceding inequality by p/μ. :: L(p)\le p :: Thus the Lorenz curve lies at or below the equal-income line; if everyone earns μ then q(u)=μ and L(p)=p.
''','The Lorenz curve accumulates quantile-ranked income, and its geometry follows from the nondecreasing income quantile.')
put('8.7.2','Normalize the area gap from the equal-income line.',r'''
The equal-income Lorenz curve is the straight line L_equal(p)=p. :: \int_0^1p\,dp=1/2 :: The area under this line is a right triangle of base and height 1, or the integral of p.
The actual Lorenz curve lies between 0 and that line. :: A=\int_0^1[p-L(p)]dp\ge0 :: A is the area between the two curves.
Define Gini as this gap divided by the equality-line area. :: G=\frac A{1/2}=2A :: This chooses a scale on which the largest possible gap has limiting value 1.
Distribute the integral and insert the equality-line area. :: G=2\left[\frac12-\int_0^1L(p)dp\right]=1-2\int_0^1L(p)dp :: This derives the usual formula from the geometric definition.
Use 0≤L(p)≤p to bound the area and index. :: 0\le G\le1 :: Equal incomes give L=p and G=0; increasing concentration can make the curve area approach zero and G approach 1.
''','The Gini formula is twice the Lorenz area gap, because the equality-line triangle has area one-half.')
put('9.2.1','Define the Markov rule and derive the transition-row requirements.',r'''
Let X_n denote the current state, and suppose the full past is known. :: P(X_{n+1}=j\mid X_n=i,X_{n-1},\ldots,X_0)=P_{ij} :: This is the time-homogeneous Markov assumption: only the present state is needed to specify the next-step law.
For each fixed current state i, these are probabilities of separate next-state events. :: P_{ij}\ge0 :: Nonnegativity is inherited from conditional probability.
Exactly one possible next state occurs. :: \sum_jP_{ij}=1 :: The next-state events are disjoint and exhaustive within the current-state model.
Organize those conditional laws as the rows of a matrix. :: P=(P_{ij}) :: Row i lists where the process can go after leaving state i; rows, rather than columns, sum to 1 in this convention.
Given a current-state row distribution v_i, split the next-state event by the current state. :: P(X_{n+1}=j)=\sum_i v_iP_{ij} :: Total probability gives the next-state mix, which is the row-vector product vP.
''','The Markov property is a modeling assumption. Nonnegative normalized matrix rows and the vP updating rule follow from it.')
put('9.2.3','Derive the stationary equation and use a periodic example to explain the limit-theorem conditions.',r'''
If the current-state distribution is the row vector π, total probability updates it after one step. :: P(X_{n+1}=j)=\sum_i\pi_iP_{ij} :: The weights π_i describe the current mixture of states.
A stationary mixture remains unchanged after that update. :: \pi_j=\sum_i\pi_iP_{ij},\quad\pi_i\ge0,\quad\sum_i\pi_i=1 :: These equations define stationarity and must be solved together with normalization.
In matrix shorthand the same equations read π=πP. :: \pi=\pi P :: This derives the matrix equation from total probability, rather than assuming a matrix formula.
For a two-state chain with switch probabilities a,b>0, write π=(x,1−x). :: x=x(1-a)+(1-x)b\ \Longrightarrow\ x=\frac b{a+b} :: Expand, cancel x, and solve ax=b−bx; the other stationary probability is a/(a+b).
For a finite irreducible chain, the Markov ergodic theorem gives a unique stationary distribution and long-run visit frequencies. :: \frac1n\sum_{k=0}^{n-1}\mathbf1_{\{X_k=j\}}\to\pi_j\quad\text{almost surely} :: This is an advanced chain theorem, not a consequence of solving π=πP alone.
For distribution-at-a-fixed-time convergence, also require aperiodicity. :: P(X_n=j\mid X_0=i)\to\pi_j :: The finite irreducible aperiodic convergence theorem supplies this stronger kind of limit.
If a=b=1, the process alternates deterministically even though π=(1/2,1/2) is stationary. :: P=\begin{pmatrix}0&1\\1&0\end{pmatrix} :: From a fixed start, state probabilities alternate rather than converge; visit fractions still tend to one-half. This example explains why the two limit statements differ.
''','Stationarity is derived by unchanged one-step mixing; long-run frequencies and time-marginal convergence use separate theorems with explicit hypotheses.')
put('9.3.1','Explain why independent-event surprise adds and why logarithms express that rule.',r'''
For independent events of probabilities p and q, their joint chance is pq. :: s(pq)=s(p)+s(q) :: Additive surprise is a desired property of the information measure, not a probability axiom.
The logarithm turns multiplication into addition. :: -\log_2(pq)=-\log_2p-\log_2q :: Thus logarithmic surprise has the required additivity.
To see why continuity singles it out, set r(t)=s(2^(−t)) for t≥0. :: r(t+u)=r(t)+r(u) :: The product 2^(−t)2^(−u)=2^(−(t+u)) translates the desired property into an additive equation.
Repeated addition gives r(m)=m r(1) and r(m/n)=(m/n)r(1) for nonnegative integers m and positive n. :: r(t)=Ct\quad\text{for rational }t\ge0 :: Divide the equation n r(m/n)=r(m) by n.
Continuity extends this linear formula from rational to real t. :: s(p)=-C\log_2p :: Choosing the unit so a fair binary outcome has surprise 1 sets C=1; rarer outcomes then have greater surprise.
Average these outcome surprises with their actual probabilities. :: H(X)=\sum_ip_i[-\log_2p_i] :: This defines Shannon entropy as expected surprise.
For zero-probability outcomes use the limiting contribution. :: \lim_{p\downarrow0}[-p\log_2p]=0 :: Substitute p=e^(−t): the expression becomes t e^(−t)/ln2→0, justifying the convention 0 log 0=0.
''','Logarithmic surprise follows from continuous additivity for independent probabilities; entropy is its probability-weighted average.')
put('9.4.2','Compute the maximum information of a binary symmetric channel before invoking the coding theorem.',r'''
Let X be the sent bit and let independent noise E be 1 when that bit is flipped. :: Y=X\mathbin{\oplus}E,\quad P(E=0)=p,\quad P(E=1)=1-p :: Exclusive-or means add bits modulo 2; this is the binary symmetric channel model.
For either fixed sent value, the output is correct with chance p and flipped otherwise. :: H(Y\mid X)=H_b(p)=-p\log_2p-(1-p)\log_2(1-p) :: Conditional output entropy equals the same two-value noise entropy for each input.
Information shared by input and output is the reduction in output entropy upon learning the input. :: I(X;Y)=H(Y)-H(Y\mid X) :: This is the mutual-information definition, equivalent to the earlier joint entropy identities.
A binary output has at most 1 bit of entropy by the uniform-maximum theorem. :: I(X;Y)\le1-H_b(p) :: The bound follows because the conditional noise entropy does not depend on the chosen input probability.
Choose a uniform sent bit so the output is also uniform. :: P(Y=0)=\tfrac12p+\tfrac12(1-p)=\tfrac12 :: Total probability shows that this choice makes H(Y)=1 and reaches the bound.
Maximizing over input distributions therefore gives the information expression. :: \max_{P_X}I(X;Y)=1-H_b(p) :: The algebra establishes the maximum mutual information per use.
The channel coding theorem identifies this maximum with achievable reliable communication capacity. :: C=1+p\log_2p+(1-p)\log_2(1-p) :: The theorem, an advanced information-theory prerequisite, proves reliable coding below C and its converse; the entropy calculation alone does not construct those long codes.
For p<1/2 reverse each received bit, changing correct probability to 1−p. :: H_b(p)=H_b(1-p),\quad C(p)=C(1-p) :: The entropy expression is symmetric; p=1/2 gives zero capacity, while deterministic correct or inverted output gives 1 bit.
''','Entropy algebra derives the maximum mutual information; the channel coding theorem supplies its operational capacity meaning.')
put('10.3.2','Translate uniform draws into Bernoulli flags or exponential waits, then identify the generated count.',r'''
For a Bernoulli success chance p, draw U uniform on (0,1). :: I=\mathbf1_{\{U\le p\}},\quad P(I=1)=p :: Uniform interval length produces exactly the desired success probability.
Add n independent flags generated from fresh independent uniforms. :: B=\sum_{i=1}^nI_i\sim\operatorname{Bin}(n,p) :: The binomial pattern-count proof applies to these independent identical trials.
For the Poisson algorithm with λ>0, turn each fresh uniform into an exponential wait. :: E_i=-\log U_i,\quad P(E_i>t)=P(U_i<e^{-t})=e^{-t} :: The decreasing log inequality gives the event translation; the uniform probability yields an exponential(1) survival.
Taking the negative logarithm converts a product stopping condition into a sum stopping condition. :: \prod_{i=1}^NU_i<e^{-\lambda}\ \Longleftrightarrow\ \sum_{i=1}^NE_i>\lambda :: Apply −log, which reverses the product comparison and changes products into sums.
The algorithm stops at the first wait sum past time λ. :: N-1=\#\text{ completed arrivals by time }\lambda :: Continuous waits hit the boundary exactly with probability zero, so either strict comparison convention has the same law.
The exponential-wait arrival process is a rate-1 Poisson process, giving the return count. :: N-1\sim\operatorname{Poisson}(\lambda) :: Equivalently, integrate the gamma arrival density against the final exponential survival: for k≥1, ∫_0^λ e^(−s)s^(k−1)/(k−1)! ·e^(−(λ−s))ds=e^(−λ)λ^k/k!; k=0 is e^(−λ).
For numerical stability accumulate waits instead of a tiny product; for λ=0 return zero. :: \text{stop when }\sum_i(-\log U_i)>\lambda :: This retains the exact mathematical condition while avoiding floating-point product underflow.
''','Specialized generators are justified by uniform interval probabilities and the logarithm’s conversion of products into exponential waiting times.')
put('10.4.1','Compute the variance of a paired estimate and prove why monotone functions give negative covariance.',r'''
Let U be uniform on (0,1), and suppose g(U) has finite variance v and mean m. :: 1-U\sim\operatorname{Unif}(0,1) :: Reflecting a uniform interval preserves its lengths, so g(1−U) has the same mean and variance.
The antithetic pair average uses two outputs from one reflected input pair. :: A=\frac{g(U)+g(1-U)}2,\quad E[A]=m :: Linearity preserves the mean even though the pair is dependent.
Expand the variance of the weighted sum. :: \operatorname{Var}(A)=\frac14[2v+2c]=\frac{v+c}{2},\quad c=\operatorname{Cov}(g(U),g(1-U)) :: Each component contributes v; two cross terms contribute 2c.
Two independently generated outputs instead have covariance zero. :: \operatorname{Var}(A_{\text{independent}})=v/2 :: The reflected pair improves variance for the same two outputs exactly when c<0.
Let U' be an independent copy of U and set a(u)=g(u), b(u)=g(1−u). :: 2\operatorname{Cov}(a(U),b(U))=E[(a(U)-a(U'))(b(U)-b(U'))] :: Expand the product: the two same-input terms equal E[ab], and the independent-input terms equal E[a]E[b].
If g is monotone, a and b change in opposite directions as u grows. :: (a(u)-a(v))(b(u)-b(v))\le0 :: This is an ordering argument for every pair u,v, including constant portions of g.
Average that sign inequality in the covariance identity. :: c\le0 :: Monotonicity guarantees nonpositive covariance, with strict reduction when it is negative; it need not be strictly negative for constant g.
For k independent pairs, averaging their A outputs divides paired variance by k. :: \operatorname{Var}(\bar A_k)=\frac{v+c}{2k} :: Independence is required across pairs, not within each reflected pair.
''','Antithetic averaging preserves the mean and reduces variance when reflection creates negative covariance; the monotone-case sign follows from a simple product-of-differences identity.')
put('DA.1','Explain data-summary definitions and derive why sample variance divides by n−1.',r'''
The sample mean is the equally weighted average of n observations. :: \bar x=\frac1n\sum_{i=1}^nx_i :: This is a definition. Sorting the observations defines the middle-position median; the most frequent values define the modes.
Deviations from the sample mean sum to zero. :: \sum_i(x_i-\bar x)=\sum_ix_i-n\bar x=0 :: After n−1 deviations are specified, the last is fixed by this constraint.
For iid observations with mean μ and finite variance σ², expand deviations around μ. :: \sum_i(X_i-\bar X)^2=\sum_i(X_i-\mu)^2-n(\bar X-\mu)^2 :: Expanding the squares and using Σ(X_i−μ)=n(bar(X)−μ) cancels the cross term into the displayed subtraction.
Average this identity using E[(X_i−μ)²]=σ² and Var(bar(X))=σ²/n. :: E\left[\sum_i(X_i-\bar X)^2\right]=n\sigma^2-n(\sigma^2/n)=(n-1)\sigma^2 :: The sample mean has mean μ, so its centered mean square equals its variance.
Divide by n−1 when n>1 to get an unbiased estimator of variance. :: S^2=\frac{\sum_i(X_i-\bar X)^2}{n-1},\quad E[S^2]=\sigma^2 :: The denominator is justified by this calculation, not only by naming degrees of freedom.
Take a square root to express spread in the original units. :: S=\sqrt{S^2} :: S estimates standard deviation, but square rooting does not preserve unbiasedness in general.
For a population median m, at least half the probability lies on each weak side. :: P(X\le m)\ge1/2,\quad P(X\ge m)\ge1/2 :: This definition allows ties and more than one possible median; a density mode instead maximizes density height.
''','The summaries have explicit definitions, and the sample-variance denominator is derived from its expected squared-deviation total.')
put('DA.2','Derive the mean, variance and standard error of an iid sample mean.',r'''
Let X_i be iid with mean μ and finite variance σ², and define the sample mean. :: \bar X=\frac1n\sum_{i=1}^nX_i :: Each observation uses the same probability law.
Distribute expectation through the finite sum and the fixed multiplier. :: E[\bar X]=\frac1n\sum_{i=1}^nE[X_i]=\frac{n\mu}{n}=\mu :: This is linearity; independence is not needed for this step.
Independence removes all covariance terms in the sum variance. :: \operatorname{Var}\left(\sum_iX_i\right)=\sum_i\sigma^2=n\sigma^2 :: The full variance formula would retain covariance terms for correlated data.
Scaling the sum by 1/n multiplies its variance by 1/n². :: \operatorname{Var}(\bar X)=\frac{n\sigma^2}{n^2}=\sigma^2/n :: This gives sampling spread of the mean, rather than spread of individual observations.
Standard error is defined as standard deviation of the estimator. :: \operatorname{SE}(\bar X)=\sqrt{\sigma^2/n}=\sigma/\sqrt n :: Replace unknown σ with sample standard deviation S to estimate this error as S/sqrt(n).
Independent normal observations sum to a normal, so in that model the sampling law is exact. :: \bar X\sim N(\mu,\sigma^2/n)\quad\text{for normal iid data} :: Otherwise the finite-variance CLT gives a large-sample normal approximation under its stated conditions.
''','Sample means preserve the population center and reduce independent-sample standard deviation by sqrt(n).')
put('DA.3','Transform a squared normal and then use gamma addition.',r'''
Take Z standard normal and let Q=Z². Its output q>0 has two input roots ±sqrt(q). :: f_Q(q)=\frac{\phi(\sqrt q)+\phi(-\sqrt q)}{2\sqrt q} :: The many-to-one density formula uses |(z²)'|=2sqrt(q) for either root.
Normal symmetry combines the two equal numerator terms. :: f_Q(q)=\frac{q^{-1/2}e^{-q/2}}{\sqrt{2\pi}} :: This is gamma shape 1/2 and rate 1/2; Γ(1/2)=sqrt(π), obtained by t=z²/2 in the Gaussian area integral.
Define chi-squared with integer degrees of freedom ν as the sum of ν independent squared standard normals. :: V=\sum_{i=1}^{\nu}Z_i^2 :: Independence of the original normals is retained by their separate square functions.
Apply the common-rate gamma-sum theorem. :: V\sim\operatorname{Gamma}(\nu/2,1/2) :: Its shape is ν copies of 1/2, and the common rate remains 1/2.
Insert these parameters into the gamma density and moments. :: f_V(v)=\frac{v^{\nu/2-1}e^{-v/2}}{2^{\nu/2}\Gamma(\nu/2)},\quad E[V]=\nu,\quad\operatorname{Var}(V)=2\nu :: The gamma moments a/λ and a/λ² were derived by gamma-integral recurrence in the family note.
Independent chi-squared variables therefore add their degrees of freedom. :: V_1+V_2\sim\chi^2_{\nu_1+\nu_2} :: Both have the same gamma rate, so shapes add; the law extends to positive real degrees of freedom via its gamma definition.
''','Chi-squared density and moments follow from squaring normals and adding common-rate gamma variables.')
put('DA.4','Derive the t density from a normal divided by an independent random scale.',r'''
Take independent Z~N(0,1) and V~chi²_ν with ν>0, and define T=Z/sqrt(V/ν). :: z=t\sqrt{v/\nu},\quad v=v :: The denominator is positive almost surely, and the inverse transformation keeps v as a second coordinate.
The inverse area determinant is the slope of z with respect to t at fixed v. :: \left|\det\frac{\partial(z,v)}{\partial(t,v)}\right|=\sqrt{v/\nu} :: The derivative matrix is triangular with diagonal sqrt(v/ν),1.
Multiply the independent densities, include this factor, and integrate out v. :: f_T(t)=\frac1{\sqrt{2\pi\nu}\,2^{\nu/2}\Gamma(\nu/2)}\int_0^{\infty}v^{(\nu+1)/2-1}e^{-[1+t^2/\nu]v/2}dv :: The normal exponential and chi-squared exponential combine; the scale factor raises the v power by 1/2.
For a,b>0 the substitution u=bv gives a standard gamma integral. :: \int_0^{\infty}v^{a-1}e^{-bv}dv=\Gamma(a)/b^a :: The powers contribute b^(−(a−1)) and the differential contributes one more b^(−1).
Use a=(ν+1)/2 and b=(1+t²/ν)/2 and cancel powers of 2. :: f_T(t)=\frac{\Gamma((\nu+1)/2)}{\sqrt{\nu\pi}\Gamma(\nu/2)}(1+t^2/\nu)^{-(\nu+1)/2} :: This derives the t density, symmetric because it depends on t².
Its tails behave as |t|^(−ν−1), so the absolute mean exists only for ν>1 and the second moment only for ν>2. :: E[T]=0\quad(\nu>1) :: Symmetry gives mean zero only when the positive and negative parts are integrable.
For ν>2 use independence and the reciprocal gamma moment. :: E[T^2]=\nu E[Z^2]E[1/V]=\nu\frac{(1/2)\Gamma(\nu/2-1)}{\Gamma(\nu/2)}=\frac\nu{\nu-2} :: E[Z²]=1 and Γ(a)=(a−1)Γ(a−1); the reciprocal moment exists only for a>1.
For normal iid observations, the standardized mean Z and V=(n−1)S²/σ² are independent by the normal-sample proof. :: \frac{\bar X-\mu}{S/\sqrt n}=\frac{\sqrt n(\bar X-\mu)/\sigma}{\sqrt{[(n-1)S^2/\sigma^2]/(n-1)}}\sim t_{n-1} :: Cancelling σ shows exactly why replacing the unknown spread produces this t pivot.
''','The t law arises from an independent normal divided by a chi-squared random scale; its exact sample application requires normal data.')
put('DA.5','Invert the central normal probability interval one inequality at a time.',r'''
For normal iid data with known σ>0, define SE=σ/sqrt(n) and the standardized mean Z. :: Z=\frac{\bar X-\mu}{\mathrm{SE}}\sim N(0,1) :: The exact normal sample-mean law justifies this parameter-free distribution.
Let 0<α<1 and choose z so the upper tail has probability α/2. :: z=z_{1-\alpha/2},\quad P(Z>z)=\alpha/2 :: A lower-tail quantile z_q is defined by P(Z≤z_q)=q.
Symmetry makes the lower tail at −z also α/2, so the middle has probability 1−α. :: P(-z\le Z\le z)=1-\alpha :: Subtract the two disjoint tail probabilities from 1.
Insert the sample-mean pivot and multiply both bounds by positive SE. :: -z\mathrm{SE}\le\bar X-\mu\le z\mathrm{SE} :: Multiplication by a positive value preserves order.
The right inequality gives μ≥bar(X)−zSE; the left gives μ≤bar(X)+zSE. :: \bar X-z\mathrm{SE}\le\mu\le\bar X+z\mathrm{SE} :: Solve separately by subtraction; moving the unknown mean reverses its side in the bounds.
The equivalence of these events preserves their probability. :: P\left(\bar X-z\frac\sigma{\sqrt n}\le\mu\le\bar X+z\frac\sigma{\sqrt n}\right)=1-\alpha :: The endpoints vary with the random sample while μ is a fixed parameter.
After observing one sample, calculate its numerical endpoints. :: [\bar x-z\sigma/\sqrt n,\ \bar x+z\sigma/\sqrt n] :: The confidence level describes coverage over repeated samples; it is not a new probability assigned to the fixed μ after those endpoints are observed.
''','The exact known-σ normal confidence interval comes from algebraic inversion of a central normal pivot; nonnormal use is only a CLT approximation.')
put('DA.6','Use the exact normal-sample t pivot and solve its central event for μ.',r'''
For an iid normal sample of size n>1 with σ>0, the standardized mean is standard normal. :: Z=\sqrt n(\bar X-\mu)/\sigma\sim N(0,1) :: This is the normal sample-mean law.
The normal-sample variance proof gives a chi-squared scale independent of this mean. :: V=(n-1)S^2/\sigma^2\sim\chi^2_{n-1},\quad V\text{ independent of }Z :: Both normality and independence of observations are needed for this exact property.
Divide the independent pivot by its random scale and cancel σ. :: T=\frac Z{\sqrt{V/(n-1)}}=\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1} :: This is the defining t ratio derived in the t-distribution note.
Let t=t_(n−1,1−α/2); the symmetric central t event has probability 1−α. :: P(-t\le T\le t)=1-\alpha :: Two tails each have α/2 probability.
Multiply the two inequalities by positive S/sqrt(n), which is positive almost surely in this model. :: -tS/\sqrt n\le\bar X-\mu\le tS/\sqrt n :: The observed scale is random, but multiplication still preserves each sample’s event inequalities.
Solve for μ as in the known-σ calculation. :: \bar X-tS/\sqrt n\le\mu\le\bar X+tS/\sqrt n :: This proves the interval endpoints and their exact repeated-sample coverage.
''','The unknown-variance mean interval uses t with n−1 degrees of freedom; its finite-sample exactness comes from the normal-sample pivot.')
put('DA.7','Invert a positive chi-squared ratio and show why the larger quantile gives the lower endpoint.',r'''
For iid normal data with n>1 and σ>0, set A=(n−1)S². :: V=A/\sigma^2\sim\chi^2_{n-1} :: This exact pivot follows from the independent residual-normal directions.
Let q_L and q_U be the α/2 and 1−α/2 lower-tail quantiles. :: P(q_L\le V\le q_U)=1-\alpha,\quad0<q_L<q_U :: The central event removes α/2 from each asymmetric chi-squared tail.
Insert the ratio in that event. :: q_L\le A/\sigma^2\le q_U :: A and σ² are positive almost surely in the nondegenerate normal model.
The upper ratio bound implies A≤q_U σ², so divide by positive q_U. :: A/\sigma^2\le q_U\ \Longrightarrow\ \sigma^2\ge A/q_U :: This gives the lower variance endpoint.
The lower ratio bound implies q_L σ²≤A, giving the upper endpoint. :: q_L\le A/\sigma^2\ \Longrightarrow\ \sigma^2\le A/q_L :: A smaller positive divisor gives a larger endpoint.
Combine the bounds and restore A’s sample expression. :: \frac{(n-1)S^2}{\chi^2_{n-1,1-\alpha/2}}\le\sigma^2\le\frac{(n-1)S^2}{\chi^2_{n-1,\alpha/2}} :: The same event therefore has exact normal-model coverage 1−α.
The square-root function increases on positive values, so root both endpoints for σ. :: \sqrt{A/q_U}\le\sigma\le\sqrt{A/q_L} :: This changes a variance interval to a standard-deviation interval without changing its coverage.
''','The reciprocal ratio explains the reversed quantile placement; normality is essential for the exact variance pivot.')
put('DA.8','Derive proportion error and sample-size planning from binomial variance.',r'''
For n independent Bernoulli trials with success chance p, let X count successes. :: \hat p=X/n,\quad E[\hat p]=p :: The binomial mean is np, and division by n preserves the target proportion.
Apply the variance scale rule to the binomial count. :: \operatorname{Var}(\hat p)=\frac{np(1-p)}{n^2}=\frac{p(1-p)}n :: The standard error is its positive square root.
For an interior p and sufficiently large success/failure counts, the CLT approximates the standardized proportion by a normal. :: \frac{\hat p-p}{\sqrt{p(1-p)/n}}\approx N(0,1) :: This approximation is poor near boundaries and at small n.
Estimate p in the error formula by hat(p) to get the Wald interval. :: \hat p\pm z_{1-\alpha/2}\sqrt{\hat p(1-\hat p)/n} :: This plug-in step is approximate; it is not an exact coverage statement and may give endpoints outside [0,1].
For a planned half-width ε>0, require z sqrt(p(1−p)/n)≤ε. :: z^2p(1-p)/n\le\epsilon^2 :: Squaring nonnegative sides preserves the inequality.
Multiply by n and divide by positive ε² to solve for sample size. :: n\ge\frac{z^2p(1-p)}{\epsilon^2} :: Round upward because n is an integer; this plans the normal-approximation width rather than an exact coverage guarantee.
Without an assumed p, complete the square in its variance factor. :: p(1-p)=1/4-(p-1/2)^2\le1/4 :: The largest spread occurs at p=1/2.
Use that maximum for conservative width planning. :: n\ge\frac{z^2}{4\epsilon^2} :: Halving ε multiplies the required sample size by 4.
''','Proportion precision follows from binomial variance; the Wald interval and normal-based sample-size rule remain approximations.')
put('DA.9','Explain test errors as conditional-model probabilities and compute a null tail p-value.',r'''
A test specifies a statistic T and a rejection region R before using the sample. :: \text{reject }H_0\text{ when }T\in R :: This rule defines the test’s outcome.
Under a particular null parameter value, rejecting is a Type I error. :: P_{H_0}(T\in R)\le\alpha :: Controlling this chance under the null is the meaning of significance level α; composite nulls require control at all allowed null parameter values.
At a specified alternative, failing to reject is a Type II error. :: \beta=P_{H_1}(T\notin R) :: β generally depends on which alternative value generated the data.
Rejection and nonrejection partition the alternative experiment. :: \text{power}=P_{H_1}(T\in R)=1-\beta :: This derives the complement relationship between power and Type II error.
For an upper-tail statistic observed at t_obs, define the p-value as the null-model exceedance chance. :: p\text{-value}=P_{H_0}(T\ge t_{\mathrm{obs}}) :: For an exact continuous pivot this tail is computed from its null CDF, not from a probability assigned to H_0 itself.
For a symmetric normal two-sided statistic z_obs, both equally extreme tails count. :: p\text{-value}=2[1-\Phi(|z_{\mathrm{obs}}|)] :: Symmetry gives equal tail areas at ±|z_obs|; one-sided alternatives instead use their specified single tail.
Compare the chosen p-value to the prespecified significance level. :: p\text{-value}\le\alpha\ \Longrightarrow\ \text{reject }H_0 :: Failure to reject says only that this decision rule did not find sufficient evidence; it does not prove the null true.
''','p-values are probabilities of extreme data under a specified null model; power and errors are probabilities of the test’s decision under the corresponding model.')
put('DA.10','Standardize the mean under the null and connect the two-sided cutoff to interval exclusion.',r'''
Under H_0:μ=μ_0 with known σ>0 and normal iid data, the sample-mean law has center μ_0 and spread σ/sqrt(n). :: Z=\frac{\bar X-\mu_0}{\sigma/\sqrt n}\sim N(0,1) :: Subtract the hypothesized mean and divide by sampling standard deviation.
With unknown variance under the same normal model, use the exact independent chi-squared sample scale. :: T=\frac{\bar X-\mu_0}{S/\sqrt n}\sim t_{n-1} :: The t ratio was derived from normal mean/variance independence; unknown σ alone is not enough for exactness with arbitrary data.
For a two-sided level-α test, assign α/2 to each symmetric tail. :: \text{reject if }|Z|>z_{1-\alpha/2}\quad\text{or }|T|>t_{n-1,1-\alpha/2} :: The respective null probability beyond these two cutoffs is α.
For an upper alternative, all α goes in the upper tail; a lower alternative uses the lower tail. :: Z>z_{1-\alpha}\quad\text{or}\quad Z<z_\alpha :: Select the alternative before observing the sign; the t case uses the corresponding t quantiles.
The two-sided nonrejection inequality can be multiplied by its positive standard error. :: |\bar X-\mu_0|\le c\,\mathrm{SE} :: Here c is the matching z or t cutoff and SE its corresponding known or estimated standard error.
Resolve the absolute-value inequality into an interval for the hypothesized mean. :: \bar X-c\mathrm{SE}\le\mu_0\le\bar X+c\mathrm{SE} :: Thus the matching confidence interval contains the null exactly when the two-sided test does not reject, aside from boundary conventions.
''','The mean test is a null-centered z or t pivot with prespecified tails; interval equivalence follows by rearranging its cutoff inequality.')
put('DA.11','Derive expected categorical counts and their free-coordinate counts; distinguish exact and asymptotic references.',r'''
For a normal-sample variance null σ²=σ_0², insert the null variance into the exact pivot. :: (n-1)S^2/\sigma_0^2\sim\chi^2_{n-1}\quad\text{under }H_0 :: This law was proved from independent normal residual coordinates; choose the tail(s) specified by the variance alternative.
For k categorical values with known null probabilities p_i, each observed count O_i has mean np_i. :: E_i=np_i :: A count is a sum of n flags, each averaging to p_i; expected count is the denominator used in the Pearson score.
Scale squared count discrepancies by expected count and add. :: Q=\sum_{i=1}^k\frac{(O_i-E_i)^2}{E_i} :: This defines Pearson’s statistic; assume positive expected counts. Large values measure departures from the null, so categorical rejection uses the upper tail.
The counts sum to n, leaving only k−1 freely variable discrepancies. :: \sum_i(O_i-E_i)=0 :: The multinomial CLT and a quadratic-form limit theorem give an asymptotic chi-squared reference with k−1 degrees of freedom; estimating r regular model parameters removes r additional directions, giving k−1−r. Those limit theorems are explicit advanced prerequisites.
For an a-by-b independence table, null cell probability factors into row chance times column chance. :: p_{ij}=p_{i+}p_{+j} :: This is the independence model for the two classifications.
Estimate row and column chances by their observed marginal fractions, then multiply by n. :: E_{ij}=n\frac{O_{i+}}n\frac{O_{+j}}n=\frac{O_{i+}O_{+j}}n :: This derives the fitted expected count rather than assuming all cells should be equal.
An unrestricted table has ab−1 free probabilities; an independent model estimates (a−1)+(b−1) parameters. :: \nu=(ab-1)-(a-1)-(b-1)=(a-1)(b-1) :: This count gives the asymptotic reference degrees of freedom under regular conditions, not a proof of exact finite-sample chi-squared behavior.
Sparse expected counts can undermine the categorical limit approximation. :: Q\approx\chi^2_\nu\quad\text{under a suitable large-sample null model} :: The categorical law is approximate, whereas the normal variance pivot in the first step is exact.
''','Expected counts come from null probabilities; degree counts explain the reference dimension, while the asymptotic law still requires its limit theorem.')
put('DA.12','Derive the difference’s standard error, the pooled variance law, and the paired-data reduction.',r'''
For independent samples, the mean difference D has center δ=μ_1−μ_2. :: D=\bar X_1-\bar X_2,\quad E[D]=\delta :: Linearity subtracts the group means.
Independence of groups removes their covariance, and a minus sign is squared in variance. :: \operatorname{Var}(D)=\sigma_1^2/n_1+\sigma_2^2/n_2 :: Add independent sample-mean variances, each derived earlier.
If the normal groups share variance σ², factor that common scale. :: \operatorname{Var}(D)=\sigma^2(1/n_1+1/n_2) :: This is the equal-variance assumption needed by a pooled test.
Their scaled sample variances are independent chi-squared variables; add their residual sums. :: \frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{\sigma^2}\sim\chi^2_{\nu},\quad\nu=n_1+n_2-2 :: Independent groups have independent residual coordinates, so the chi-squared degrees of freedom add.
Divide the combined residual sum by its degrees of freedom to define the pooled estimate. :: S_p^2=\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2} :: Weighting by group residual degrees of freedom makes this an unbiased estimate of the common variance.
The normal difference pivot is independent of the pooled residual scale, so its scaled ratio is t. :: T=\frac{D-\delta_0}{S_p\sqrt{1/n_1+1/n_2}}\sim t_\nu\quad\text{under }H_0:\delta=\delta_0 :: The normal-sample independence proof applies within each group and group independence joins the pieces.
For unequal variances, estimate the independent difference variance directly instead of pooling. :: \mathrm{SE}_{W}=\sqrt{S_1^2/n_1+S_2^2/n_2} :: Welch’s approximate degrees of freedom are (S_1²/n_1+S_2²/n_2)²/[(S_1²/n_1)²/(n_1−1)+(S_2²/n_2)²/(n_2−1)], obtained by matching the variance of the estimated scale to a scaled chi-squared variable; the resulting t reference is approximate.
For paired measurements, form each within-pair difference before averaging. :: D_i=X_i-Y_i,\quad T=\frac{\bar D-\delta_0}{S_D/\sqrt n}\sim t_{n-1} :: This exact law needs iid normal differences; it retains within-pair covariance rather than falsely assuming the two measurements independent.
''','Independent groups need a difference-variance calculation; pooling additionally needs equal normal variances, while paired data require a one-sample analysis of differences.')
put('DA.13','Invert the appropriate two-sample or paired t pivot for the population mean difference.',r'''
For independent normal groups with equal positive variance, let δ=μ_1−μ_2 and D=bar(X_1)−bar(X_2). :: T=\frac{D-\delta}{S_p\sqrt{1/n_1+1/n_2}}\sim t_{\nu},\quad\nu=n_1+n_2-2 :: The preceding proof derives both the pooled scale and this pivot.
Set SE=S_p sqrt(1/n_1+1/n_2) and c=t_(ν,1−α/2). :: P(-c\le T\le c)=1-\alpha :: Symmetric t tails each contain α/2 probability.
Multiply the inequalities by the positive standard error. :: -c\mathrm{SE}\le D-\delta\le c\mathrm{SE} :: This event transformation preserves probability.
Solve each side for δ. :: D-c\mathrm{SE}\le\delta\le D+c\mathrm{SE} :: The confidence interval is centered at the observed mean difference.
Insert the scale definition to display both endpoints. :: (\bar X_1-\bar X_2)\pm t_{\nu,1-\alpha/2}S_p\sqrt{1/n_1+1/n_2} :: This exact coverage belongs to the independent equal-variance normal model.
For paired data apply the same one-sample t inversion to D_i=X_i−Y_i. :: \bar D\pm t_{n-1,1-\alpha/2}S_D/\sqrt n :: For unequal independent-group variances use Welch’s estimated scale and approximate degrees of freedom instead; exact pooled coverage cannot then be claimed.
''','Difference intervals follow by inverting the matching pivot, with the sampling design determining the correct standard error and degrees of freedom.')
put('DA.14','Use null-model Bernoulli variance and derive the pooled proportion for a shared-proportion null.',r'''
For n independent Bernoulli trials under H_0:p=p_0 with 0<p_0<1, hat(p)=X/n. :: E[\hat p]=p_0,\quad\operatorname{Var}(\hat p)=p_0(1-p_0)/n :: Insert the null probability into the previously derived binomial mean and variance.
Center at the null and divide by the null standard deviation. :: Z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}\approx N(0,1) :: The binomial CLT justifies a large-sample approximation when null expected successes and failures are sufficiently numerous.
For two independent groups under H_0:p_1=p_2=p, their proportion difference has mean zero. :: E[\hat p_1-\hat p_2]=0 :: The shared null proportion cancels.
Add independent group proportion variances. :: \operatorname{Var}(\hat p_1-\hat p_2)=p(1-p)(1/n_1+1/n_2) :: Subtracting the second group does not change its variance contribution because the coefficient is squared.
Under a shared probability, combine all successes and all trials to estimate p. :: \hat p=\frac{X_1+X_2}{n_1+n_2} :: This is the pooled Bernoulli sample average; it also maximizes the common-proportion likelihood, whose log derivative is total successes/p minus total failures/(1−p).
Substitute this estimate into the null difference variance. :: Z=\frac{\hat p_1-\hat p_2}{\sqrt{\hat p(1-\hat p)(1/n_1+1/n_2)}}\approx N(0,1) :: Consistency of the pooled estimate and the CLT justify this plug-in approximation; the scale must be nonzero.
Use the alternative’s specified normal tail cutoff. :: |Z|>z_{1-\alpha/2}\quad\text{for a two-sided test} :: Without the shared-proportion null, an unpooled confidence interval instead estimates p_1(1−p_1)/n_1+p_2(1−p_2)/n_2 separately.
''','Proportion tests use null-model sampling spread, with pooling only under the equal-proportion null; these are large-sample rather than exact small-sample laws.')

# Complete the general factorial-moment claim, not just its first two cases.
PROOFS['c.prob.4.7.2']['rungs'].extend([
    dict(why='For any positive integer r, the falling product is zero when X<r; for k≥r it cancels the first r factors of k!.',
         m=r'$$E[(X)_r]=e^{-\lambda}\sum_{k=r}^{\infty}\frac{\lambda^k}{(k-r)!}$$',
         meaning='Here (X)_r=X(X−1)⋯(X−r+1). This is the same cancellation used for r=1 and r=2.'),
    dict(why='Put j=k−r and factor out r powers of λ, leaving the exponential series.',
         m=r'$$E[(X)_r]=\lambda^re^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!}=\lambda^r$$',
         meaning='The series is e^λ and cancels e^(−λ). The constant-zero Poisson case λ=0 also satisfies every positive-order factorial-moment identity.')
])
PROOFS['c.prob.4.7.2']['ends'] = 'Every positive-integer falling-factorial moment is λ^r; in particular the mean and variance are λ.'

# Corrections found while deriving the proofs. Do not overwrite unrelated lesson fields.
STATEMENTS = {
    'c.prob.5.5.2': r'<p>The hazard describes the risk of failure per unit time among items still working. A high hazard after a given age means survivors are more likely to fail soon.</p><p>For a nonnegative lifetime with density $f$ and survival $S(t)=P(X>t)>0$, its hazard rate is $h(t)=f(t)/S(t)$. Since $S\prime(t)=-f(t)$ almost everywhere, $S(t)=\exp[-\int_0^t h(u)du]$ on intervals where survival is positive and $h$ is locally integrable. For a density lifetime $S(0)=1$; if survival reaches zero at a finite endpoint, the formula is interpreted by its limiting value there.</p>',
    'c.prob.6.5.2': r'<p>For a jointly normal pair, knowing $Y$ shifts the predicted average of $X$ along a straight line. The remaining uncertainty is normal.</p><p>Assume $\sigma_X,\sigma_Y>0$. For $|\rho|<1$, $X\mid Y=y$ is normal with mean $\mu_X+\rho(\sigma_X/\sigma_Y)(y-\mu_Y)$ and variance $\sigma_X^2(1-\rho^2)$. When $|\rho|=1$, the same center describes a point-mass conditional law of variance zero; the nonsingular joint-density calculation does not apply.</p>',
}

ADVANCED = {
    'c.prob.8.3.1': 'The full proof uses Taylor expansion, dominated convergence and the characteristic-function continuity theorem. The standardization and algebra are derived here; the named analysis theorems are prerequisites beyond high school mathematics.',
    'c.prob.8.4.1': 'The full finite-absolute-mean argument uses nonnegative integration, dominated convergence and the independent-series convergence theorem. The counting, telescoping bound and needed averaging lemma are derived here; the independent-series theorem remains an advanced prerequisite.',
}


def apply():
    import subprocess
    # Parse the actual executable data with JavaScript, preserving every non-proof field.
    js = r'''
const fs=require('fs'),vm=require('vm');
const files=process.argv.slice(1),out=[];
for(const file of files){
 const ctx=vm.createContext({CONCEPTS:[]});vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
 out.push({file,concepts:ctx.CONCEPTS});
}
process.stdout.write(JSON.stringify(out));
'''
    files = sorted(ROOT.glob('data/*.concepts.js'))
    pools = json.loads(subprocess.check_output(['node', '-e', js, *map(str, files)], text=True))
    actual = {c['id'] for pool in pools for c in pool['concepts']}
    if actual != set(PROOFS):
        raise ValueError(f'Missing: {actual-set(PROOFS)}; unexpected: {set(PROOFS)-actual}')
    for pool in pools:
        for c in pool['concepts']:
            c['proof'] = PROOFS[c['id']]
            if c['id'] in STATEMENTS:
                c['statement'] = STATEMENTS[c['id']]
            if c['id'] in ADVANCED:
                c['proof']['why'] = ADVANCED[c['id']]
            if len(c['proof']['rungs']) < 5:
                raise ValueError('Incomplete ladder: ' + c['id'])
        content = json.dumps(pool['concepts'], ensure_ascii=False, indent=2)
        Path(pool['file']).write_text("var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];\nCONCEPTS.push(...\n" + content + '\n);\n')
    print(f'Updated {len(actual)} concept derivations in {len(pools)} modules; {sum(len(p["rungs"]) for p in PROOFS.values())} explained steps.')


if __name__ == '__main__':
    apply()
