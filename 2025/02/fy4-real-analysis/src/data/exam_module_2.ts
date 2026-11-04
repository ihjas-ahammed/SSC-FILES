import { ExamPaper } from '../types';

export const EXAM_MODULE_2: ExamPaper = {
  moduleId: 'module-2',
  sections:[
    {
      id: 'sec-a',
      title: 'Section A',
      instruction: 'Answer all. Each question carries 3 Marks. (Ceiling 12)',
      questions:[
        {
          id: 'q1',
          number: '1',
          marks: 3,
          question: 'There does not exist a rational number $r$ such that $r^2 = 2$.',
          solution: '**Proof:**\nSuppose, on the contrary, that $p$ and $q$ are integers such that $(p/q)^2 = 2$. We may assume that $p$ and $q$ are positive and have no common integer factors other than 1.\n\nSince $p^2 = 2q^2$, we see that $p^2$ is even. This implies that $p$ is also even (because if $p=2n-1$ is odd, its square is odd). Therefore, since $p$ and $q$ do not have 2 as a common factor, $q$ must be an odd natural number.\n\nSince $p$ is even, $p = 2m$ for some $m \\in \\mathbb{N}$, and hence $4m^2 = 2q^2$, so that $2m^2 = q^2$. Therefore, $q^2$ is even, and it follows that $q$ is an even natural number.\n\nSince the hypothesis that $(p/q)^2 = 2$ leads to the contradictory conclusion that $q$ is both even and odd, it must be false. $\\blacksquare$'
        },
        {
          id: 'q2',
          number: '2',
          marks: 3,
          question: 'State and prove triangle inequality.',
          solution: '**Theorem (Triangle Inequality):** If $a, b \\in \\mathbb{R}$, then $|a + b| \\le |a| + |b|$.\n\n**Proof:**\nFrom the properties of absolute value, we know that any number is bounded by its absolute value:\n$-|a| \\le a \\le |a|$\n$-|b| \\le b \\le |b|$\n\nOn adding these two inequalities, we obtain:\n$-(|a| + |b|) \\le a + b \\le |a| + |b|$\n\nHence, by the property that $-c \\le x \\le c \\iff |x| \\le c$ (where $c = |a|+|b| \\ge 0$), we have:\n$|a + b| \\le |a| + |b|$. $\\blacksquare$'
        },
        {
          id: 'q3',
          number: '3',
          marks: 3,
          question: 'Determine the set $B = \\{x \\in \\mathbb{R} : |x - 1| < |x|\\}$.',
          solution: '**Solution:**\nOne method is to square both sides since both absolute values are non-negative. Squaring preserves the strict inequality:\n$|x - 1|^2 < |x|^2$\n\nSince $|a|^2 = a^2$ for any real number $a$, we can expand the square to obtain:\n$x^2 - 2x + 1 < x^2$\n\nSubtracting $x^2$ from both sides simplifies this to:\n$-2x + 1 < 0$\n\n$1 < 2x \\implies x > \\frac{1}{2}$\n\nThus, we find that the set is $B = \\{x \\in \\mathbb{R} : x > 1/2\\}$. $\\blacksquare$'
        },
        {
          id: 'q4',
          number: '4',
          marks: 3,
          question: 'Prove that if $a \\in \\mathbb{R}, a \\neq 0$, then $a^2 > 0$.',
          solution: '**Proof:**\nBy the Trichotomy Property of the order of real numbers, if $a \\neq 0$, then either $a \\in \\mathbb{P}$ (the set of positive real numbers) or $-a \\in \\mathbb{P}$.\n\n**Case 1:** If $a \\in \\mathbb{P}$, then by closure under multiplication, we have $a^2 = a \\cdot a \\in \\mathbb{P}$.\n\n**Case 2:** If $-a \\in \\mathbb{P}$, then again by closure under multiplication, $(-a)(-a) \\in \\mathbb{P}$. Since $(-a)(-a) = a^2$, we again conclude $a^2 \\in \\mathbb{P}$.\n\nIn both possible cases, $a^2 \\in \\mathbb{P}$, which means $a^2 > 0$. $\\blacksquare$'
        },
        {
          id: 'q5',
          number: '5',
          marks: 3,
          question: 'Define the supremum and infimum of a set of real numbers.',
          solution: '**Definition:**\nLet $S$ be a nonempty subset of $\\mathbb{R}$.\n\n(a) If $S$ is bounded above, a number $u$ is a **supremum** (or least upper bound) of $S$ if:\n1. $u$ is an upper bound of $S$, and\n2. if $v$ is any upper bound of $S$, then $u \\le v$.\n\n(b) If $S$ is bounded below, a number $w$ is an **infimum** (or greatest lower bound) of $S$ if:\n1. $w$ is a lower bound of $S$, and\n2. if $t$ is any lower bound of $S$, then $t \\le w$. $\\blacksquare$'
        }
      ]
    },
    {
      id: 'sec-b',
      title: 'Section B',
      instruction: 'Answer all. Each question carries 6 Marks. (Ceiling 18)',
      questions:[
        {
          id: 'q6',
          number: '6',
          marks: 6,
          question: 'State and prove Bernoulli\'s inequality.',
          solution: '**Statement:** If $x > -1$, then $(1 + x)^n \\ge 1 + nx$ for all $n \\in \\mathbb{N}$.\n\n**Proof:**\nThe proof uses Mathematical Induction.\n*Base Case ($n=1$):* $(1+x)^1 = 1+x$, and $1 + 1x = 1+x$. The inequality yields $1+x \\ge 1+x$, which is true (equality holds).\n\n*Inductive Step:* Assume the validity of the inequality for $k \\in \\mathbb{N}$, so $(1 + x)^k \\ge 1 + kx$. We will deduce it for $k + 1$.\nSince $x > -1$, we know $1 + x > 0$. Therefore, multiplying the assumed inequality by the positive value $(1+x)$ preserves the direction of the inequality:\n$(1 + x)^{k+1} = (1 + x)^k \\cdot (1 + x) \\ge (1 + kx) \\cdot (1 + x)$\n\nExpanding the right side:\n$= 1 + kx + x + kx^2 = 1 + (k+1)x + kx^2$\n\nSince $k \\ge 1$ and $x^2 \\ge 0$, the term $kx^2 \\ge 0$. Therefore:\n$1 + (k+1)x + kx^2 \\ge 1 + (k+1)x$\n\nChaining the inequalities gives $(1 + x)^{k+1} \\ge 1 + (k+1)x$. By Mathematical Induction, the inequality holds for all $n \\in \\mathbb{N}$. $\\blacksquare$'
        },
        {
          id: 'q7',
          number: '7',
          marks: 6,
          question: 'State and prove Archimedean Property.',
          solution: '**Statement:** If $x \\in \\mathbb{R}$, then there exists $n_x \\in \\mathbb{N}$ such that $x \\le n_x$.\n\n**Proof:**\nIf the assertion is false, then $n \\le x$ for all $n \\in \\mathbb{N}$; therefore, $x$ is an upper bound of $\\mathbb{N}$. \n\nBy the Completeness Property of $\\mathbb{R}$, the nonempty set $\\mathbb{N}$ has a supremum $u \in \\mathbb{R}$.\n\nSubtracting 1 from $u$ gives a number $u - 1$, which is strictly smaller than the supremum $u$ of $\\mathbb{N}$. Therefore, $u - 1$ is not an upper bound of $\\mathbb{N}$.\n\nSince it\'s not an upper bound, there exists some $m \\in \\mathbb{N}$ with $u - 1 < m$. \n\nAdding 1 to both sides gives $u < m + 1$. \n\nSince $m \\in \\mathbb{N}$, we know $m + 1 \\in \\mathbb{N}$. However, this inequality $m+1 > u$ contradicts the fact that $u$ is an upper bound of $\\mathbb{N}$. This contradiction implies our initial assumption was false, proving the property. $\\blacksquare$'
        },
        {
          id: 'q8',
          number: '8',
          marks: 6,
          question: 'State and prove Density Theorem.',
          solution: '**Statement:** If $x$ and $y$ are any real numbers with $x < y$, then there exists a rational number $r \\in \\mathbb{Q}$ such that $x < r < y$.\n\n**Proof:**\nAssume without loss of generality that $x > 0$. Since $y - x > 0$, it follows from the Archimedean Property that there exists $n \\in \\mathbb{N}$ such that $1/n < y - x$. Therefore, $nx + 1 < ny$.\n\nIf we apply the Archimedean Property again to $nx > 0$, we can find a subset of integers and use the Well-Ordering Property to obtain a least integer $m \\in \\mathbb{N}$ with $m - 1 \\le nx < m$.\n\nTherefore, we have $m \\le nx + 1$. \n\nCombining this with our first inequality ($nx + 1 < ny$), we get:\n$nx < m \\le nx + 1 < ny$\nwhich simplifies to:\n$nx < m < ny$\n\nDividing the entire inequality by the positive integer $n$, we obtain $x < m/n < y$. Thus, the rational number $r := m/n$ satisfies $x < r < y$. $\\blacksquare$'
        },
        {
          id: 'q9',
          number: '9',
          marks: 6,
          question: 'Let $S$ be a nonempty subset of $\\mathbb{R}$ that is bounded below. Prove that $\\inf S = -\\sup\\{-s : s \\in S\\}$.',
          solution: '**Proof:**\nLet $S\' = \\{-s : s \\in S\\}$. \nSince $S$ is bounded below, there exists a lower bound $w$ such that $w \\le s$ for all $s \\in S$. \nMultiplying by $-1$ flips the inequality: $-s \\le -w$. Thus $S\'$ is bounded above by $-w$.\n\nBy the Completeness Property, $S\'$ has a supremum. Let $u = \\sup S\'$. \nSince $-s \\le u$ for all $s \\in S$, we have $s \\ge -u$. Thus $-u$ is a lower bound for $S$.\n\nWe must show $-u$ is the *greatest* lower bound. Let $v$ be any lower bound for $S$ (so $s \\ge v$). Then $-s \\le -v$, making $-v$ an upper bound for $S\'$.\n\nSince $u$ is the *least* upper bound of $S\'$, we must have $u \\le -v$, which implies $-u \\ge v$. \n\nTherefore $-u$ is greater than or equal to any other lower bound $v$, making $-u$ the greatest lower bound of $S$. Thus $\\inf S = -\\sup S\'$. $\\blacksquare$'
        }
      ]
    },
    {
      id: 'sec-c',
      title: 'Section C',
      instruction: 'Answer any ONE question. Each question carries 10 marks.',
      questions:[
        {
          id: 'q10',
          number: '10',
          marks: 10,
          question: '(a) Prove the set of real numbers R is not countable.\n(b) State and prove nested Interval Property.',
          solution: '**(a) Proof that $\\mathbb{R}$ is not countable:**\nWe will prove the unit interval $I = [0, 1]$ is uncountable. Assume for contradiction that $I$ is countable, so we can enumerate it as $I = \\{x_1, x_2, x_3, \\dots\\}$.\nWe select a closed subinterval $I_1$ of $I$ such that $x_1 \\notin I_1$. Then we select a closed subinterval $I_2$ of $I_1$ such that $x_2 \\notin I_2$, and so on. \nThis yields nested closed intervals $I_1 \\supseteq I_2 \\supseteq \\dots$ such that $x_n \\notin I_n$ for all $n$.\nBy the Nested Intervals Property, there exists a point $\\xi \\in I$ such that $\\xi \\in I_n$ for all $n$. \nTherefore $\\xi \\neq x_n$ for all $n \\in \\mathbb{N}$, so the enumeration of $I$ is incomplete. Hence, $I$ (and thus $\\mathbb{R}$) is uncountable. $\\blacksquare$\n\n**(b) Nested Intervals Property:**\n*Statement:* If $I_n =[a_n, b_n]$ is a nested sequence of closed bounded intervals ($I_1 \\supseteq I_2 \\supseteq \\dots$), then there exists a number $\\xi \\in \\mathbb{R}$ such that $\\xi \\in I_n$ for all $n \\in \\mathbb{N}$.\n*Proof:* Since nested, $I_n \\subseteq I_1$ for all $n$, so $a_n \\le b_1$. The set $\\{a_n : n \\in \\mathbb{N}\\}$ is bounded above by $b_1$. \nLet $\\xi = \\sup\\{a_n\\}$. Clearly $a_n \\le \\xi$ for all $n$.\nWe claim $\\xi \\le b_n$ for all $n$. For any $k, n$, if $n \\le k$, $a_k \\le b_k \\le b_n$. If $k < n$, $a_k \\le a_n \\le b_n$. Thus $b_n$ is an upper bound for $\\{a_k\\}$.\nHence, $\\xi \\le b_n$ for each $n$. Since $a_n \\le \\xi \\le b_n$ for all $n$, $\\xi \\in I_n$ for all $n$. $\\blacksquare$'
        },
        {
          id: 'q11',
          number: '11',
          marks: 10,
          question: '(a) Let S be a nonempty subset of R that is bounded above and let $a \\in \\mathbb{R}$, then prove $\\sup(a + S) = a + \\sup S$.\n(b) If a and b are positive real numbers, then state and prove the Arithmetic-Geometric Mean Inequality for a and b.',
          solution: '**(a) Proof:**\nLet $u = \\sup S$. Then $x \\le u$ for all $x \\in S$, so $a + x \\le a + u$. Therefore, $a + u$ is an upper bound for the set $a + S$; consequently, $\\sup(a + S) \\le a + u$.\n\nNow let $v$ be any upper bound of the set $a + S$, then $a + x \\le v$ for all $x \\in S$. Consequently $x \\le v - a$ for all $x \\in S$, so that $v - a$ is an upper bound of $S$. \n\nTherefore, $u = \\sup S \\le v - a$, which gives us $a + u \\le v$. \nSince $v$ is any upper bound of $a + S$, replacing $v$ with $\\sup(a + S)$ gives $a + u \\le \\sup(a + S)$.\nCombining these inequalities, we conclude $\\sup(a + S) = a + u = a + \\sup S$. $\\blacksquare$\n\n**(b) Arithmetic-Geometric Mean Inequality:**\n*Statement:* If $a, b > 0$, then $\\sqrt{ab} \\le \\frac{1}{2}(a + b)$. Equality occurs if and only if $a = b$.\n*Proof:* Note that if $a > 0, b > 0$, and $a \\neq b$, then $\\sqrt{a} > 0, \\sqrt{b} > 0$, and $\\sqrt{a} \\neq \\sqrt{b}$.\nTherefore, the square of their difference is strictly positive: $(\\sqrt{a} - \\sqrt{b})^2 > 0$.\nExpanding this square, we obtain:\n$a - 2\\sqrt{a}\\sqrt{b} + b > 0$\nwhich implies $a + b > 2\\sqrt{ab}$.\nDividing by 2 yields $\\frac{1}{2}(a + b) > \\sqrt{ab}$.\nIf $a = b > 0$, then both sides equal $a$, so it becomes an equality. This proves $\\sqrt{ab} \\le \\frac{1}{2}(a + b)$ for all $a, b > 0$. $\\blacksquare$'
        }
      ]
    }
  ]
};