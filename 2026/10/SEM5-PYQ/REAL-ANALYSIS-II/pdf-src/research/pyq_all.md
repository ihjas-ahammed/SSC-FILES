# Real Analysis II (MAT5CJ301): past-paper question bank

Source: five PDFs in `source/` (old CBCSS course MTS 6B 10 / MAT 6B 09, predecessor of MAT5CJ301).
Six papers (one per exam, plus MCQ/descriptive split). Scanned pages were read visually; text-layer papers were checked against renders.

Conventions
- Tag: `<code>-<YY>-Q<n>`. Sub-parts get a suffix letter (`Q24a`, `Q24b`). MCQ papers use `<code>-<YY>-MCQ-Q<n>` so they do not collide with the descriptive paper of the same year.
- Codes: `MTS6B10` (MTS 6B 10 Real Analysis), `MAT6B09` (MAT 6B 09 Real Analysis).
- Years are the year printed on the cover. The 2021 paper has no admission batch printed on either its MCQ or descriptive cover.
- Section column: the section letter or Part as printed. MCQ = "MCQ".
- Marks column: marks for the question (for sub-parts, the marks of the whole question). MCQ = 1 mark each (30 marks / 30 questions, 20 / 20, 20 / 20 as printed).
- Module column: M1 = Continuity (5.1, 5.3, 5.4), M2 = Differentiation (6.1, 6.2), M3 = Riemann integral (7.1, 7.2, 7.3), M4 = Sequences of functions (8.1, 8.2), OUT = outside the MAT5CJ301 module list.
- Borderline rows (the topic touches an in-scope section but the question also needs an out-of-scope result, or the paper is ambiguous) say so in the Bartle column.
- Maths is LaTeX. `[?]` marks an unclear glyph. `[sic]` marks a printed typo kept as printed.

## Paper index

| # | Tag prefix | File (in source/) | Exam | Admission | Time | Max marks | Pages |
|---|---|---|---|---|---|---|---|
| 1 | MTS6B10-25 | SEM5_MTS_6B_10_REAL_ANALYSIS.pdf | Sixth Semester (CBCSS-UG) Degree Exam, March 2025 (code D 120181) | 2019 Admission onwards | Two Hours and a Half | 80 | 3 (text layer) |
| 2 | MTS6B10-26 | SEM5_MTS6B10_REAL_ANALYSIS.pdf | Sixth Semester (CBCSS-U.G.) Degree Exam, April 2026 (code D 140191) | 2020 Admission onwards | Two Hours and a Half | 80 | 3 (text layer) |
| 3 | MAT6B09-22-MCQ | SEM5_MAT_6B_09_REAL_ANALYSIS.pdf, pp. 1-7 | Sixth Semester (CUCBCSS-UG) Degree Exam, March 2022, MCQ for SDE candidates (code C 20207-A) | 2014 to 2018 Admissions | 15 Minutes | 30 | 7 (scan) |
| 4 | MAT6B09-22 | SEM5_MAT_6B_09_REAL_ANALYSIS.pdf, pp. 8-10 | Sixth Semester (CUCBCSS-UG) Degree Exam, March 2022 (code C 20207) | 2014 to 2018 Admissions | Three Hours | 120 | 3 (scan) |
| 5 | MAT6B09-21-MCQ | SEM5_MAT_6B_09_REAL_ANALYSIS_1.pdf, pp. 1-4 | Sixth Semester (CUCBCSS-UG) Degree [Special] Exam, March 2021, MCQ for SDE candidates (code C 3008-A) | Not printed on cover | 15 Minutes | 20 | 4 (scan) |
| 6 | MAT6B09-21 | SEM5_MAT_6B_09_REAL_ANALYSIS_1.pdf, pp. 5-8 | Sixth Semester (CUCBCSS-UG) Degree [Special] Exam, March 2021 (code C 3008) | Not printed on cover | Three Hours | 120 | 4 (scan) |
| 7 | MTS6B10-22-MCQ | SEM5_MTS_6B_10_REAL_ANALYSIS_1.pdf, pp. 1-6 | Sixth Semester U.G. Degree Exam, March 2022, MCQ for SDE candidates (code C 20645-A) | 2019 Admissions | 15 Minutes | 20 | 6 (scan) |
| 8 | MTS6B10-22 | SEM5_MTS_6B_10_REAL_ANALYSIS_1.pdf, p. 7 only | Sixth Semester U.G. Degree Exam, March 2022 (code C 20645) | 2019 Admissions | Two Hours and a Half | 80 | cover says 3 pages; **only page 1 is in the file** |

---

## Paper 1: MTS6B10-25 (March 2025, code D 120181)

Header: Sixth Semester (CBCSS-UG) Degree Examination, March 2025. Mathematics. MTS 6B 10 - Real Analysis. (2019 Admission onwards). Time: Two Hours and a Half. Maximum: 80 Marks.

Section pattern, as printed:
- Section A: "Answer any number of questions. Each question carries 2 marks. Ceiling is 25." (Q1-Q15)
- Section B: "Answer any number of questions. Each question carries 5 marks. Ceiling is 35." (Q16-Q23)
- Section C: "Answer any two questions. Each question carries 10 marks. Maximum 20 marks." (Q24-Q27) and "(2 x 10 = 20 marks)"

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MTS6B10-25-Q1 | A | 2 | Prove that polynomial functions are continuous on $\mathbb{R}$. | 5.1.1 (the polynomial example is 5.2.3(a), OUT; a direct epsilon-delta proof stays in 5.1) | M1 |
| MTS6B10-25-Q2 | A | 2 | Give an example of uniformly continuous function which is not a Lipschitz function. | 5.4.4-5.4.6 (5.4.6(b)) | M1 |
| MTS6B10-25-Q3 | A | 2 | State Weierstrass approximation theorem. | 5.4.14 | M1 |
| MTS6B10-25-Q4 | A | 2 | Prove that every constant function on $[a,b]$ is Riemann integrable on $[a,b]$. | 7.1.4(a) | M3 |
| MTS6B10-25-Q5 | A | 2 | Suppose $f$ and $g$ are in $\mathcal{R}[a,b]$. If $f(x)\le g(x)$ for all $x\in[a,b]$, prove that $\int_a^b f\le\int_a^b g$. | 7.1.5 | M3 |
| MTS6B10-25-Q6 | A | 2 | State substitution theorem and use this to evaluate $\int_1^4 \dfrac{\sin\sqrt{t}}{\sqrt{t}}\,dt$. | 7.3.8 | M3 |
| MTS6B10-25-Q7 | A | 2 | Prove that rational numbers in $[0,1]$ is a null set. | 7.3.10, 7.3.11 | M3 |
| MTS6B10-25-Q8 | A | 2 | If $f\in\mathcal{R}[a,b]$, prove that $\lvert f\rvert\in\mathcal{R}[a,b]$ and $\left\lvert\int_a^b f\right\rvert\le\int_a^b \lvert f\rvert$. | 7.3.15 | M3 |
| MTS6B10-25-Q9 | A | 2 | Define uniform norm on a set of bounded functions. | 8.1.7 | M4 |
| MTS6B10-25-Q10 | A | 2 | Evaluate $\lim e^{-nx}$ for $x\in\mathbb{R}$, $x\ge 0$. | 8.1.1-8.1.2 (pointwise limit) | M4 |
| MTS6B10-25-Q11 | A | 2 | State and prove Weierstrass M test. | 9.4.6 (series; not in module list) | OUT |
| MTS6B10-25-Q12 | A | 2 | Evaluate $\displaystyle\int_1^\infty \frac{dx}{x^2+1}$. | improper integral (not in module list) | OUT |
| MTS6B10-25-Q13 | A | 2 | Find P.V. $\displaystyle\int_{-\infty}^{\infty} x\,dx$. | Cauchy principal value, improper (not in module list) | OUT |
| MTS6B10-25-Q14 | A | 2 | Prove that $\displaystyle\int_2^\infty \frac{1}{\ln(x)}\,dx=\infty$. | improper integral | OUT |
| MTS6B10-25-Q15 | A | 2 | Prove that $\Gamma(p)$ is strictly convex for $0<p<\infty$. | Gamma function (not in module list) | OUT |
| MTS6B10-25-Q16 | B | 5 | Prove that Dirichlet's function is discontinuous on $\mathbb{R}$. | 5.1.4, 5.1.6 | M1 |
| MTS6B10-25-Q17 | B | 5 | State and prove preservation of intervals theorem. | 5.3.10 | M1 |
| MTS6B10-25-Q18 | B | 5 | If $f:[a,b]\to\mathbb{R}$ is continuous on $[a,b]$, then prove that $f\in\mathcal{R}[a,b]$. | 7.2.7 | M3 |
| MTS6B10-25-Q19 | B | 5 | State and prove Taylor's theorem with the remainder. | 7.3.18 (integral-remainder form, proof optional). Borderline: the Lagrange form in Section 6.4 is OUT | M3 |
| MTS6B10-25-Q20 | B | 5 | Let $(f_n)$ be sequence of continuous functions on a set $A\subseteq\mathbb{R}$ and suppose that $(f_n)$ converges uniformly on $A$ to a function $f:A\to\mathbb{R}$. Prove that $f$ is continuous on $A$. | 8.2.2 | M4 |
| MTS6B10-25-Q21 | B | 5 | Prove that for all $q\le -1$, $\displaystyle\int_0^1 x^q e^{-x}\,dx$ diverges. | improper integral | OUT |
| MTS6B10-25-Q22 | B | 5 | Prove that $\displaystyle\int_0^\infty \sqrt{y}\,e^{-y^2}\,dy=\tfrac12\Gamma\!\left(\tfrac34\right)$. | Gamma / improper | OUT |
| MTS6B10-25-Q23 | B | 5 | Prove that $B(p,q)=\dfrac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$ for all $p>0$ and $q>0$. | Beta function | OUT |
| MTS6B10-25-Q24 | C | 10 | State and prove location of roots theorem. | 5.3.5 | M1 |
| MTS6B10-25-Q25 | C | 10 | State and prove second form of Fundamental theorem of calculus. | 7.3.5 | M3 |
| MTS6B10-25-Q26 | C | 10 | State and prove Cauchy criterion for uniform convergence. | 8.1.10 (sequence version; if the series version is meant it would be 9.4.5, OUT) | M4 |
| MTS6B10-25-Q27 | C | 10 | For any $p>0$, fixed, prove that $\displaystyle\lim_{0<q\to\infty} q^{p}B(p,q)=\Gamma(p)$. | Beta / Gamma | OUT |

---

## Paper 2: MTS6B10-26 (April 2026, code D 140191)

Header: Sixth Semester (CBCSS-U.G.) Degree Examination, April 2026. Mathematics. MTS6B10 - Real Analysis. (2020 Admission onwards). Time: Two Hours and a Half. Maximum: 80 Marks.

Section pattern, as printed:
- Section A: "Answer any number of questions. Each question carries 2 marks. Ceiling is 25." (Q1-Q15)
- Section B: "Answer any number of questions. Each question carries 5 marks. Ceiling is 35." (Q16-Q23)
- Section C: "Answer any two questions. Each question carries 10 marks. Maximum 20 marks." (Q24-Q27) and "(2 x 10 = 20 marks)"

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MTS6B10-26-Q1 | A | 2 | State discontinuity criterion for a function at a point. | 5.1.4 | M1 |
| MTS6B10-26-Q2 | A | 2 | Give an example of a continuous function which is not bounded. | 5.3.1 (bounded), 5.1 | M1 |
| MTS6B10-26-Q3 | A | 2 | Define Lipschitz function. | 5.4.4 | M1 |
| MTS6B10-26-Q4 | A | 2 | Define norm of a partition. Let $I=[0,4]$. Calculate the norm of the partition $\mathcal{P}=(0,1,2,4)$. | 7.1 (partition and norm, preliminaries to the Riemann integral) | M3 |
| MTS6B10-26-Q5 | A | 2 | Prove that any step function is integrable. | 7.2.5 | M3 |
| MTS6B10-26-Q6 | A | 2 | State and prove product theorem. | 7.3.16 | M3 |
| MTS6B10-26-Q7 | A | 2 | Define null set and give an example of a null set. | 7.3.10, 7.3.11 | M3 |
| MTS6B10-26-Q8 | A | 2 | State first form of Fundamental theorem of calculus. | 7.3.1 | M3 |
| MTS6B10-26-Q9 | A | 2 | Define uniform convergence of a sequence of functions. | 8.1.4 | M4 |
| MTS6B10-26-Q10 | A | 2 | Evaluate $\displaystyle\lim \frac{nx}{1+nx}$ for $x\in\mathbb{R}$, $x\ge 0$. | 8.1.1-8.1.2 (pointwise limit) | M4 |
| MTS6B10-26-Q11 | A | 2 | State Cauchy criterion for uniform convergence of a series of functions. | 9.4.5 (series; not in module list) | OUT |
| MTS6B10-26-Q12 | A | 2 | Evaluate $\displaystyle\int_{-1}^{0}\frac{dx}{\sqrt[3]{x}}$. | improper integral (integrand unbounded at 0) | OUT |
| MTS6B10-26-Q13 | A | 2 | Define Cauchy principal value of an improper integral. | improper integral | OUT |
| MTS6B10-26-Q14 | A | 2 | Define integral test. | Ch 9 (series) | OUT |
| MTS6B10-26-Q15 | A | 2 | Prove that $\Gamma\!\left(\tfrac12\right)=\sqrt{\pi}$. | Gamma function | OUT |
| MTS6B10-26-Q16 | B | 5 | State and prove boundedness theorem. | 5.3.2 | M1 |
| MTS6B10-26-Q17 | B | 5 | Let $I$ be a closed bounded interval and let $f:I\to\mathbb{R}$ be continuous on $I$. If $\varepsilon>0$, prove that there exists a step function $s_\varepsilon:I\to\mathbb{R}$ such that $\lvert f(x)-s_\varepsilon(x)\rvert<\varepsilon$ for all $x\in I$. | 5.4.9, 5.4.10 | M1 |
| MTS6B10-26-Q18 | B | 5 | State and prove squeeze theorem for Riemann integrals. | 7.2.3 | M3 |
| MTS6B10-26-Q19 | B | 5 | If $f:[a,b]\to\mathbb{R}$ is monotone on $[a,b]$, then prove that $f\in\mathcal{R}[a,b]$. | 7.2.8 | M3 |
| MTS6B10-26-Q20 | B | 5 | Prove that a sequence $(f_n)$ of bounded functions on $A\subseteq\mathbb{R}$ converges uniformly on $A$ to $f$ if and only if $\lVert f_n-f\rVert_A\to 0$. | 8.1.7, 8.1.8 | M4 |
| MTS6B10-26-Q21 | B | 5 | Prove that all $q\in\mathbb{R}$, $\displaystyle\int_1^\infty x^q e^{-x}\,dx$ converges. | improper integral | OUT |
| MTS6B10-26-Q22 | B | 5 | Evaluate $\displaystyle\int_0^\infty \sqrt[3]{y}\,e^{-y^2}\,dy$. | Gamma / improper | OUT |
| MTS6B10-26-Q23 | B | 5 | Prove that $\Gamma(2p)=\dfrac{2^{2p-1/2}}{\sqrt{2\pi}}\,\Gamma(p)\,\Gamma\!\left(p+\tfrac12\right)$. | Gamma function (duplication formula) | OUT |
| MTS6B10-26-Q24a | C | 10 | State and prove uniform continuity theorem. | 5.4.3 | M1 |
| MTS6B10-26-Q24b | C | 10 | Prove that $g(x)=\sqrt{x}$ is uniformly continuous on $A=[0,\infty)$. | 5.4.6(b) (uses 5.4.3 style argument) | M1 |
| MTS6B10-26-Q25 | C | 10 | Let $f:[a,b]\to\mathbb{R}$ and let $c\in(a,b)$. Prove that $f\in\mathcal{R}[a,b]$ if and only if its restrictions to $[a,c]$ and $[c,b]$ are both Riemann integrable, and in this case $\int_a^b f=\int_a^c f+\int_c^b f$. | 7.2.9 | M3 |
| MTS6B10-26-Q26 | C | 10 | Let $(f_n)$ be a sequence of functions in $\mathcal{R}[a,b]$ and suppose that $(f_n)$ converges uniformly on $[a,b]$ to $f$. Then prove that $f\in\mathcal{R}[a,b]$ and $\int_a^b f=\lim_{n\to\infty}\int_a^b f_n$. | 8.2.4 (interchange of limit and integral; 8.2.3 onwards is OUT) | OUT |
| MTS6B10-26-Q27 | C | 10 | State Cauchy test. Prove that $\displaystyle\int_0^\infty \frac{\sin x}{x}\,dx$ exists. | improper integral / Cauchy test (Ch 9 style) | OUT |

---

## Paper 3: MAT6B09-22-MCQ (March 2022, code C 20207-A)

Header: Sixth Semester (CUCBCSS-UG) Degree Examination, March 2022. Mathematics. MAT 6B 09 - Real Analysis. (2014 to 2018 Admissions). (Multiple Choice Questions for SDE Candidates). Time: 15 Minutes. Total No. of Questions: 30. Maximum: 30 Marks.

Section pattern, as printed: "Each question is provided with choices (A), (B) and (C) having one correct answer." Questions 1 to 30, one mark each (30 marks / 30 questions).

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MAT6B09-22-MCQ-Q1 | MCQ | 1 | Let $A$ be the open interval $(-1,1)$. Then, the cluster points of $A$ are: (A) 1 and $-1$ only. (B) All the points of $(-1,1)$. (C) All the points of $[-1,1]$. | 4.1.1 (cluster point, prerequisite, not in module list) | OUT |
| MAT6B09-22-MCQ-Q2 | MCQ | 1 | Which of the following have no cluster points? (A) $\{3,4\}$. (B) $[2,3]$. (C) $\{2,3,4\}$. | 4.1.1 (prerequisite) | OUT |
| MAT6B09-22-MCQ-Q3 | MCQ | 1 | Which among these functions are continuous on $A=\{x\in\mathbb{R}: x\ge 0\}$? (A) $f(x)=\sin x$. (B) $f(x)=\sin(1/x)$. (C) $f(x)=1/x$. | 5.1.1 | M1 |
| MAT6B09-22-MCQ-Q4 | MCQ | 1 | Let $f(x)=\dfrac{\lvert x\rvert}{x}$ for $x\neq 0$ and $f(0)=0$. Then $\lim_{x\to 0} f(x)$ is: (A) 1. (B) $-1$. (C) None of these. | limit of a function, 4.2 (prerequisite; borderline with 5.1) | OUT |
| MAT6B09-22-MCQ-Q5 | MCQ | 1 | Given $a,b$ satisfy $0<a<1$, $b>1$. Then which of the following sequences is convergent? (A) $\dfrac{ab^n}{2^n}$. (B) $\dfrac{2^{3n}}{3^{2n}}$. (C) $\dfrac{n}{b^n}$. | sequences, Ch 3 (prerequisite) | OUT |
| MAT6B09-22-MCQ-Q6 | MCQ | 1 | Function $f(x)=\dfrac{1}{2x}$ defined on $A=(0,\infty)$ is an example for: (A) A continuous function that is not bounded. (B) A bounded function that is continuous. (C) An unbounded function that is not continuous. | 5.1.1, 5.3.1 | M1 |
| MAT6B09-22-MCQ-Q7 | MCQ | 1 | Let $f:A\to\mathbb{R}$ and let $L$ be a real number such that for every $\varepsilon>0$ there exists $\delta(\varepsilon)>0$ such that if $x\in A$ and $0<\lvert x-c\rvert<\delta(\varepsilon)$, then $\lvert f(x)-L\rvert<\varepsilon$. Then $L$ is a $\underline{\hspace{1cm}}$ of $f$ at $c$. (A) Derivative. (B) Limit. (C) None of these. | 4.2.1 (limit definition, prerequisite) | OUT |
| MAT6B09-22-MCQ-Q8 | MCQ | 1 | When the graph of a function $f$ in $\mathbb{R}$ has a break such that the function value and the limit (does not exist) aren't the same, then $f$ is said to have a $\underline{\hspace{1cm}}$ discontinuity at that point. (A) Removable. (B) Jump. (C) None of these. | 5.1.7 (remarks on discontinuity types) | M1 |
| MAT6B09-22-MCQ-Q9 | MCQ | 1 | When the graph of a function $f$ in $\mathbb{R}$ has a hole in the graph such that the function value and the limit aren't the same, then $f$ has a $\underline{\hspace{1cm}}$ discontinuity at that point. (A) Removable. (B) Jump. (C) None of these. | 5.1.7 | M1 |
| MAT6B09-22-MCQ-Q10 | MCQ | 1 | Let $A\subseteq\mathbb{R}$ and let $f:A\to\mathbb{R}$. If there exists a point $x'\in A$ such that $f(x')\ge f(x)$ for all $x\in A$, then $f$ has an $\underline{\hspace{1cm}}$ on $A$. (A) Absolute maximum. (B) Absolute minimum. (C) None of these. | 5.3.3 | M1 |
| MAT6B09-22-MCQ-Q11 | MCQ | 1 | Let $f:I\to\mathbb{R}$ be continuous. Then $f$ has an absolute maximum and absolute minimum on $I$ if: (A) $I$ is closed. (B) $I$ is closed and bounded not bounded. [sic] (C) $I$ is bounded but not closed. | 5.3.4 | M1 |
| MAT6B09-22-MCQ-Q12 | MCQ | 1 | Consider $f(x)=6x^3-3x^2+2$. Then which of the following is true? (A) $f$ has a zero in $(0,1)$. (B) $f$ has no zero. (C) $f$ has a zero in $(-1,1)$. | 5.3.5 | M1 |
| MAT6B09-22-MCQ-Q13 | MCQ | 1 | Which of the following statements is true? (A) Every continuous function is uniformly continuous. (B) Every uniformly continuous function is continuous. (C) None of these. | 5.4.1, 5.1.1 | M1 |
| MAT6B09-22-MCQ-Q14 | MCQ | 1 | Suppose $f$ and $g$ are in $\mathcal{R}[a,b]$ such that $f(x)\le g(x)$ for all $x\in[a,b]$, then: (A) $\int_a^b f(x)<\int_a^b g(x)$. (B) $\int_a^b f(x)\le\int_a^b g(x)$. (C) None of these. | 7.1.5 | M3 |
| MAT6B09-22-MCQ-Q15 | MCQ | 1 | Which of the following is true? (A) $f\in\mathcal{R}[a,b]\Rightarrow f$ is bounded. (B) $f\in\mathcal{R}[a,b]\Rightarrow f$ is continuous. (C) $f\in\mathcal{R}[a,b]\Rightarrow f$ is monotone. | 7.1.6 | M3 |
| MAT6B09-22-MCQ-Q16 | MCQ | 1 | Let $I=[2,9]$, which of the following partitions of $I$ has the largest norm? (A) $P_1=(2,4,6,8,9)$. (B) $P_2=(2,6,9)$. (C) $P_3=(2,5,7,9)$. | 7.1 (norm) | M3 |
| MAT6B09-22-MCQ-Q17 | MCQ | 1 | Let $x\in[0,1]$ and let $f$ be such that $f(x)=\begin{cases}1, & x \text{ is rational}\\ 0, & x \text{ is irrational}\end{cases}$. Then: (A) $f\in\mathcal{R}[0,1]$. (B) $f\notin\mathcal{R}[0,1]$. (C) None of these. | 7.3.11, 7.3.12 | M3 |
| MAT6B09-22-MCQ-Q18 | MCQ | 1 | Suppose $f:[a,b]\to\mathbb{R}$ and $f(x)=0$ except for finite number of points $c_1,c_2,\dots,c_n$ in $[a,b]$. Then: (A) $f\in\mathcal{R}[a,b]$. (B) $\int_a^b f=0$. (C) None of these. | 7.1.3 | M3 |
| MAT6B09-22-MCQ-Q19 | MCQ | 1 | Let $f\in\mathcal{R}[a,b]$ and $c\in\mathbb{R}$. Define $g$ on $[a+c,b+c]$ by $g(y)=f(y-c)$. Then which of these holds? (A) $\int_a^b f=\int_a^b g$. (B) $\int_a^b f=\int_{a+c}^{b+c} g$. (C) $g\in\mathcal{R}[a,b]$. | 7.3.8 | M3 |
| MAT6B09-22-MCQ-Q20 | MCQ | 1 | Which of the following is true? (A) Every convergent sequence is Cauchy. (B) Every Cauchy sequence is convergent. (C) Both (A) and (B). | 3.5 (Cauchy sequences, prerequisite) | OUT |
| MAT6B09-22-MCQ-Q21 | MCQ | 1 | Let $f:[a,b]\to\mathbb{R}$. Then which of the following is true? (A) $f$ is continuous on $[a,b]\Rightarrow f\in\mathcal{R}[a,b]$. (B) $f\in\mathcal{R}[a,b]\Rightarrow f$ is continuous on $[a,b]$. (C) $f\in\mathcal{R}[a,b]\Rightarrow f$ is uniformly continuous on $[a,b]$. | 7.2.7 | M3 |
| MAT6B09-22-MCQ-Q22 | MCQ | 1 | Let $f:[a,b]\to\mathbb{R}$. Then which of the following is true? (A) $f$ is monotone on $[a,b]\Rightarrow f\in\mathcal{R}[a,b]$. (B) $f\in\mathcal{R}[a,b]\Rightarrow f$ is monotone on $[a,b]$. (C) None of these. | 7.2.8 | M3 |
| MAT6B09-22-MCQ-Q23 | MCQ | 1 | Let $f$ be continuous on $[a,b]$ and $f(x)\ge 0$ for all $x\in[a,b]$. If $\int_a^b f=0$, then which of the following is true? (A) $f(x)=0$ for all $x\in[a,b]$. (B) $f(x)=0$ for all but finitely many points of $[a,b]$. (C) None of these. | 7.1.5, 7.2.7 | M3 |
| MAT6B09-22-MCQ-Q24 | MCQ | 1 | If $f$ is bounded on $[a,b]$ and if $f$ restricted to $[c,b]$, $c\in(a,b)$, is Riemann integrable, then which of the following does not hold true? (A) $f\in\mathcal{R}[a,b]$. (B) $f\notin\mathcal{R}[a,b]$. (C) $\lim_{c\to a^+}\int_c^b f=\int_a^b f$. | 7.2.9, 7.2.13 | M3 |
| MAT6B09-22-MCQ-Q25 | MCQ | 1 | Define $g$ in $[0,1]$ as $g(x)=\begin{cases}\sin\frac1x, & x\neq 0\\ 0, & x=0\end{cases}$. Then which of these is true? (A) $g\in\mathcal{R}[0,1]$. (B) $g\notin\mathcal{R}[0,1]$. (C) None of these. | 7.3.12, 7.3.13 | M3 |
| MAT6B09-22-MCQ-Q26 | MCQ | 1 | If $f$ is continuous on $[-1,1]$, then $\displaystyle\int_0^{\pi/2} f(\cos x)\,dx$ is not equal to which of the following? (A) $\displaystyle\int_0^{\pi/2} f(\sin x)\,dx$. (B) $\dfrac12\displaystyle\int_0^{\pi} f(\sin x)\,dx$. (C) $\displaystyle\int_0^{\pi} f(\sin x)\,dx$. | 7.3.8 | M3 |
| MAT6B09-22-MCQ-Q27 | MCQ | 1 | If $f$ is continuous at every point of $[a,b]$ and $F$ is any antiderivative of $f$ on $[a,b]$, then $\displaystyle\int_a^b f(x)\,dx=$ (A) $(b-a)\big(F(b)-F(a)\big)$. (B) $F(b)-F(a)$. (C) None of these. | 7.3.5 | M3 |
| MAT6B09-22-MCQ-Q28 | MCQ | 1 | If $g(x)=\begin{cases}x, & \lvert x\rvert\ge 1\\ -x, & \lvert x\rvert<1\end{cases}$ and $G(x)=\dfrac12\lvert x^2-1\rvert$, then $\displaystyle\int_{-2}^{3} g(x)\,dx=$ (A) $\dfrac12$. (B) $\dfrac52$. (C) $\dfrac72$. | 7.3.5 | M3 |
| MAT6B09-22-MCQ-Q29 | MCQ | 1 | Let $B(x)=\begin{cases}-\frac12 x^2, & x<0\\ \frac12 x^2, & x\ge 0\end{cases}$. Then $\displaystyle\int_a^b \lvert x\rvert\,dx=$ (A) $(b-a)\,[B(b)-B(a)]$. (B) $B(b)-B(a)$. (C) None of these. | 7.3.5 | M3 |
| MAT6B09-22-MCQ-Q30 | MCQ | 1 | If $f:[0,1]\to\mathbb{R}$ is continuous and $\displaystyle\int_0^x f=\int_x^1 f$ for all $x\in[0,1]$, then: (A) $f(x)=0$, $\forall x\in[0,1]$. (B) $f\in\mathcal{R}[0,1]$. (C) All the above. | 7.3.4, 7.3.5 | M3 |

---

## Paper 4: MAT6B09-22 (March 2022, code C 20207)

Header: Sixth Semester (CUCBCSS-UG) Degree Examination, March 2022. Mathematics. MAT 6B 09 - Real Analysis. (2014 to 2018 Admissions). Time: Three Hours. Maximum: 120 Marks.

Section pattern, as printed:
- Part A: "Answer all questions. Each question carries 1 mark." (Q1-Q12) "(12 x 1 = 12 marks)"
- Part B: "Answer any ten questions. Each question carries 4 marks." (Q13-Q26) "(10 x 4 = 40 marks)"
- Part C: "Answer any six questions. Each question carries 7 marks." (Q27-Q35) "(6 x 7 = 42 marks)"
- Part D: "Answer any two questions. Each question carries 13 marks." (Q36-Q38) "(2 x 13 = 26 marks)"

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MAT6B09-22-Q1 | Part A | 1 | Define uniform continuity of a function. | 5.4.1 | M1 |
| MAT6B09-22-Q2 | Part A | 1 | State Weierstrass approximation theorem. | 5.4.14 | M1 |
| MAT6B09-22-Q3 | Part A | 1 | Find $\lVert\mathcal{P}\rVert$ if $\mathcal{P}=\{0,2,3,4\}$ in a partition of $[0,4]$. | 7.1 (norm) | M3 |
| MAT6B09-22-Q4 | Part A | 1 | Give an example for a function which is not Riemann integrable. | 7.1.6, 7.1.7 (Thomae/Dirichlet type), 7.3.12 | M3 |
| MAT6B09-22-Q5 | Part A | 1 | Define step function. | 5.4.9 | M1 |
| MAT6B09-22-Q6 | Part A | 1 | State Lebesgue integrability criterion. | 7.3.12 | M3 |
| MAT6B09-22-Q7 | Part A | 1 | Define uniform convergence of a series of functions. | 9.4 (series; not in module list) | OUT |
| MAT6B09-22-Q8 | Part A | 1 | Evaluate $\displaystyle\lim_{n\to\infty}\frac{x^2+nx}{n}$. | 8.1.1 (pointwise limit; borderline with Ch 3) | M4 |
| MAT6B09-22-Q9 | Part A | 1 | Write an example for an absolutely convergent improper integral. | improper integral | OUT |
| MAT6B09-22-Q10 | Part A | 1 | Cauchy principal value of $\displaystyle\int_{-\infty}^{\infty} x\,dx=\underline{\hspace{1cm}}$. | Cauchy principal value, improper | OUT |
| MAT6B09-22-Q11 | Part A | 1 | Define Beta function. | Beta function | OUT |
| MAT6B09-22-Q12 | Part A | 1 | Fill in the blanks: $\Gamma(3)=\underline{\hspace{1cm}}$. | Gamma function | OUT |
| MAT6B09-22-Q13 | Part B | 4 | Let $I=[a,b]$ be a closed bounded interval and $f:I\to\mathbb{R}$ be continuous on $I$. If $k\in\mathbb{R}$ is a number satisfying $\inf f(I)\le k\le \sup f(I)$, then prove that there exists a number $c\in I$ such that $f(c)=k$. | 5.3.8 (corollary of 5.3.7) | M1 |
| MAT6B09-22-Q14 | Part B | 4 | State and prove Preservation of Intervals theorem. | 5.3.10 | M1 |
| MAT6B09-22-Q15 | Part B | 4 | Show by an example that every uniformly continuous function need not be a Lipschitz function. | 5.4.4-5.4.6 | M1 |
| MAT6B09-22-Q16 | Part B | 4 | If $\phi:[a,b]\to\mathbb{R}$ is a step function, prove that $\phi\in\mathcal{R}[a,b]$. | 7.2.5 | M3 |
| MAT6B09-22-Q17 | Part B | 4 | Suppose that $f,g\in\mathcal{R}[a,b]$. Prove that $fg\in\mathcal{R}[a,b]$. | 7.3.16 | M3 |
| MAT6B09-22-Q18 | Part B | 4 | State the substitution theorem of Riemann integration. Use it to evaluate $\displaystyle\int_0^4 \frac{\sin\sqrt t}{\sqrt t}\,dt$. | 7.3.8 | M3 |
| MAT6B09-22-Q19 | Part B | 4 | Let $(f_n)$ be a sequence of bounded functions on $A\subseteq\mathbb{R}$. Suppose that $\lVert f_n-f\rVert_A\to 0$. Then prove that $(f_n)$ converges uniformly on $A$ to $f$. | 8.1.8 | M4 |
| MAT6B09-22-Q20 | Part B | 4 | If $f_n$ is continuous on $D\subseteq\mathbb{R}$ to $\mathbb{R}$ for each $n\in\mathbb{N}$ and if $\sum f_n$ converges to $f$ uniformly on $D$, then prove that $f$ is continuous on $D$. | 9.4.2 (series; not in module list) | OUT |
| MAT6B09-22-Q21 | Part B | 4 | State and prove Weierstrass M-test for a series of functions. | 9.4.6 | OUT |
| MAT6B09-22-Q22 | Part B | 4 | Discuss the uniform convergence of $\displaystyle\sum_{n=1}^{\infty}\frac{1}{x^2+n^2}$. | 9.4 (series) | OUT |
| MAT6B09-22-Q23 | Part B | 4 | Test the convergence of $\displaystyle\int_0^\infty \frac{1}{x^2}\,dx$. | improper integral | OUT |
| MAT6B09-22-Q24 | Part B | 4 | Show that $\Gamma(n+1)=n!$ when $n$ is a positive integer. | Gamma function | OUT |
| MAT6B09-22-Q25 | Part B | 4 | Show that $\beta(m,n)=\beta(n,m)$. | Beta function | OUT |
| MAT6B09-22-Q26 | Part B | 4 | Evaluate $\displaystyle\int_0^1 x^m\Big(\log\frac1x\Big)^n\,dx$. | Beta / Gamma, improper | OUT |
| MAT6B09-22-Q27 | Part C | 7 | Let $I=[a,b]$ be a closed bounded interval and let $f:I\to\mathbb{R}$ be continuous on $I$. Then prove that $f$ is bounded on $I$. | 5.3.2 | M1 |
| MAT6B09-22-Q28 | Part C | 7 | State and prove Uniform Continuity Theorem. | 5.4.3 | M1 |
| MAT6B09-22-Q29 | Part C | 7 | State and prove Continuous Extension Theorem. | 5.4.8 | M1 |
| MAT6B09-22-Q30 | Part C | 7 | If $f:[a,b]\to\mathbb{R}$ is monotone on $[a,b]$ then prove that $f\in\mathcal{R}[a,b]$. | 7.2.8 | M3 |
| MAT6B09-22-Q31 | Part C | 7 | Discuss convergence of the sequence $(f_n(x))$ where $f_n(x)=\dfrac{x^n}{x^n+1}$, $x\in[0,2]$. | 8.1.1-8.1.6 | M4 |
| MAT6B09-22-Q32 | Part C | 7 | State and prove Taylor's Theorem with the Remainder. | 7.3.18 (integral-remainder form). Borderline: Section 6.4 (Lagrange form) is OUT | M3 |
| MAT6B09-22-Q33 | Part C | 7 | Let $f\in\mathcal{R}[a,b]$ and let $f$ be continuous at a point $c\in[a,b]$. Prove that the indefinite integral $F(z)=\int_a^z f$ for $z\in[a,b]$ is differentiable at $c$ and $F'(c)=f(c)$. | 7.3.3, 7.3.4 | M3 |
| MAT6B09-22-Q34 | Part C | 7 | Show that $\Gamma\!\left(\dfrac p2\right)\Gamma\!\left(\dfrac{p+1}{2}\right)=\dfrac{\sqrt{\pi}}{2^{p-1}}\,\Gamma(p)$. | Gamma function | OUT |
| MAT6B09-22-Q35 | Part C | 7 | Evaluate the integral $\displaystyle\int_0^1 x^2(1-\sqrt{x})\,dx$. | 7.3.5 (FTC second form, evaluation) | M3 |
| MAT6B09-22-Q36a | Part D | 13 | State and prove Maximum Minimum Theorem. | 5.3.4 | M1 |
| MAT6B09-22-Q36b | Part D | 13 | Test the uniform continuity of $f(x)=\sqrt{x}$ on $[0,2]$. | 5.4.6(b), 5.4.3 | M1 |
| MAT6B09-22-Q37a | Part D | 13 | Let $f:[a,b]\to\mathbb{R}$ and $c\in(a,b)$. Prove that $f\in\mathcal{R}[a,b]$ if and only if its restriction to $[a,c]$ and $[c,b]$ are both Riemann integrable. In this case show that $\int_a^b f=\int_a^c f+\int_c^b f$. | 7.2.9 | M3 |
| MAT6B09-22-Q37b | Part D | 13 | If $f\in\mathcal{R}[a,b]$ and if $[c,d]\subseteq[a,b]$ then prove that the restriction of $f$ to $[c,d]$ is in $\mathcal{R}[c,d]$. | 7.2.10 | M3 |
| MAT6B09-22-Q38a | Part D | 13 | Prove that $\beta(m,n)=\dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$, $\forall m,n>0$. | Beta / Gamma | OUT |
| MAT6B09-22-Q38b | Part D | 13 | Find the value of $\Gamma\!\left(\tfrac12\right)$. | Gamma function | OUT |

---

## Paper 5: MAT6B09-21-MCQ (March 2021 Special, code C 3008-A)

Header: Sixth Semester (CUCBCSS-UG) Degree [Special] Examination, March 2021. Mathematics. MAT 6B 09 - Real Analysis. (Multiple Choice Questions for SDE Candidates). Time: 15 Minutes. Total No. of Questions: 20. Maximum: 20 Marks. Admission batch: not printed on the cover.

Section pattern, as printed: "Each question is provided with choices (A), (B) and (C) having one correct answer." Questions 1 to 20, one mark each (20 marks / 20 questions).

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MAT6B09-21-MCQ-Q1 | MCQ | 1 | Let $A$ be the open interval $(-1,1)$ then, the cluster points of $A$ are: (A) 1 and $-1$ only. (B) All the points of $(-1,1)$. (C) All the points of $[-1,1]$. | 4.1.1 (prerequisite) | OUT |
| MAT6B09-21-MCQ-Q2 | MCQ | 1 | Which of the following have no cluster points? (A) $(3,4]$. (B) $[2,3]$. (C) $\{2,3,4\}$. | 4.1.1 (prerequisite) | OUT |
| MAT6B09-21-MCQ-Q3 | MCQ | 1 | Let $f(x)=\dfrac{\lvert x\rvert}{x}$ for $x\neq0$ and $f(0)=0$. Then $\lim_{x\to0} f(x)$ is: (A) 1. (B) $-1$. (C) None of these. | limit of a function, 4.2 (prerequisite; borderline with 5.1) | OUT |
| MAT6B09-21-MCQ-Q4 | MCQ | 1 | Given $a,b$ satisfy $0<a<1$, $b>1$. Then which of the following sequences is convergent? (A) $\dfrac{ab^n}{2^n}$. (B) $\dfrac{2^{3n}}{3^{2n}}$. (C) $\dfrac{n}{b^n}$. | sequences, Ch 3 (prerequisite) | OUT |
| MAT6B09-21-MCQ-Q5 | MCQ | 1 | Let $A\subseteq\mathbb{R}$ and $c\in\mathbb{R}$ such that for every $\delta>0$ there exists at least one point $x\in A$, $x\neq c$ such that $\lvert x-c\rvert<\delta$. Then $c$ is a $\underline{\hspace{1cm}}$ of $A$. (A) Isolated point. (B) Cluster point. (C) None of these. | 4.1.1 (prerequisite) | OUT |
| MAT6B09-21-MCQ-Q6 | MCQ | 1 | When the graph of a function $f$ in $\mathbb{R}$ has a break such that the function value and the limit (does not exist) aren't the same, then $f$ is said to have a $\underline{\hspace{1cm}}$ discontinuity at that point. (A) Removable. (B) Jump. (C) None of these. | 5.1.7 | M1 |
| MAT6B09-21-MCQ-Q7 | MCQ | 1 | Consider $f(x)=6x^3-3x^2+2$. Then which of the following is true? (A) $f$ has a zero in $(0,1)$. (B) $f$ has no zero. (C) $f$ has a zero in $(-1,1)$. | 5.3.5 | M1 |
| MAT6B09-21-MCQ-Q8 | MCQ | 1 | Which of the following statements is true? (A) Every continuous function is uniformly continuous. (B) Every uniformly continuous function is continuous. (C) None of these. | 5.4.1, 5.1.1 | M1 |
| MAT6B09-21-MCQ-Q9 | MCQ | 1 | Let $f:[a,b]\to\mathbb{R}$. If there exists $L\in\mathbb{R}$ such that for every $\varepsilon>0$ there exists $\delta_\varepsilon>0$ such that for any tagged partition $\dot P$ of $[a,b]$ with $\lVert\dot P\rVert<\delta_\varepsilon$, $\lvert s(f;\dot P)-L\rvert<\varepsilon$, then $f$ is: (A) Riemann integrable. (B) Lebesgue integrable. (C) None of these. | 7.1.1 | M3 |
| MAT6B09-21-MCQ-Q10 | MCQ | 1 | Let $g:[0,4]\to\mathbb{R}$ be defined by $g(x)=3$ for $0\le x\le 2$ and $g(x)=2$ for $2<x\le 4$. Then $\displaystyle\int_0^4 g=$ (A) 5. (B) 7. (C) 10. | 7.2.5, 7.2.9 | M3 |
| MAT6B09-21-MCQ-Q11 | MCQ | 1 | Which of the following is true? (A) $f\in\mathcal{R}[a,b]\Rightarrow f$ is bounded. (B) $f\in\mathcal{R}[a,b]\Rightarrow f$ is continuous. (C) $f\in\mathcal{R}[a,b]\Rightarrow f$ is monotone. | 7.1.6 | M3 |
| MAT6B09-21-MCQ-Q12 | MCQ | 1 | Let $x\in[0,1]$ and $f$ be such that $f(x)=\begin{cases}1, & x \text{ rational}\\ 0, & x \text{ irrational}\end{cases}$. Then: (A) $f\in\mathcal{R}[0,1]$. (B) $f\notin\mathcal{R}[0,1]$. (C) None of these. | 7.3.11, 7.3.12 | M3 |
| MAT6B09-21-MCQ-Q13 | MCQ | 1 | Suppose $f:[a,b]\to\mathbb{R}$ and $f(x)=0$ except for finite number of points $c_1,c_2,c_3,\dots,c_n$ in $[a,b]$. Then: (A) $f\notin\mathcal{R}[a,b]$. (B) $\int_a^b f=0$. (C) None of these. | 7.1.3 | M3 |
| MAT6B09-21-MCQ-Q14 | MCQ | 1 | Which of the following is true? (A) Every convergent sequence is Cauchy. (B) Every Cauchy sequence is convergent. (C) Both (A) and (B). | 3.5 (prerequisite) | OUT |
| MAT6B09-21-MCQ-Q15 | MCQ | 1 | Let $f:[a,b]\to\mathbb{R}$. Then which of the following is true? (A) $f$ is continuous on $[a,b]\Rightarrow f\in\mathcal{R}[a,b]$. (B) $f\in\mathcal{R}[a,b]\Rightarrow f$ is continuous on $[a,b]$. (C) $f\in\mathcal{R}[a,b]\Rightarrow f$ is uniformly continuous on $[a,b]$. | 7.2.7 | M3 |
| MAT6B09-21-MCQ-Q16 | MCQ | 1 | Consider '$h$' defined on $[0,1]$ by $h(x)=\begin{cases}x+1, & x \text{ rational}\\ 0, & x \text{ irrational}\end{cases}$. Then which of these is true? (A) $h\in\mathcal{R}[0,1]$. (B) $h\notin\mathcal{R}[0,1]$. (C) $h$ is continuous on $[0,1]$. | 7.3.12 | M3 |
| MAT6B09-21-MCQ-Q17 | MCQ | 1 | Let $H$ be defined on $[0,1]$ such that $H(x)=\begin{cases}k, & \text{for } x=\frac1k,\ k\in\mathbb{N}\ [?]\\ 0, & \text{elsewhere}\end{cases}$. Then which of these is true? (A) $H\in\mathcal{R}[0,1]$. (B) $H\notin\mathcal{R}[0,1]$. (C) $H$ continuous on $[0,1]$. | 7.1.6 (unbounded, so not integrable) | M3 |
| MAT6B09-21-MCQ-Q18 | MCQ | 1 | If $f$ is bounded on $[a,b]$ and if $f$ restricted to $[c,b]$, $c\in(a,b)$ is Riemann integrable, then which of the following does not hold true? (A) $f\in\mathcal{R}[a,b]$. (B) $f\notin\mathcal{R}[a,b]$. (C) $\lim_{c\to a^+}\int_c^b f=\int_a^b f$. | 7.2.9, 7.2.13 | M3 |
| MAT6B09-21-MCQ-Q19 | MCQ | 1 | If $f$ is continuous at every point of $[a,b]$ and $F$ is any antiderivative of $f$ on $[a,b]$, then $\displaystyle\int_a^b f(x)\cdot dx=$ (A) $(b-a)(F(b)-F(a))$. (B) $F(b)-F(a)$. (C) None of these. | 7.3.5 | M3 |
| MAT6B09-21-MCQ-Q20 | MCQ | 1 | If $g(x)=\begin{cases}x, & \lvert x\rvert\ge1\\ -x, & \lvert x\rvert<1\end{cases}$ and $G(x)=\dfrac12\lvert x^2-1\rvert$, then $\displaystyle\int_{-2}^{3}g(x)\,dx=$ (A) $\dfrac12$. (B) $\dfrac52$. (C) $\dfrac72$. | 7.3.5 | M3 |

---

## Paper 6: MAT6B09-21 (March 2021 Special, code C 3008)

Header: Sixth Semester (CUCBCSS-UG) Degree [Special] Examination, March 2021. Mathematics. MAT 6B 09 - Real Analysis. Time: Three Hours. Maximum: 120 Marks. Admission batch: not printed on the cover.

Section pattern, as printed:
- Section A: "Answer all questions. Each question carries 1 mark." (Q1-Q12) "(12 x 1 = 12 marks)"
- Section B: "Answer at least eight questions. Each question carries 6 marks. All questions can be attended. Overall Ceiling 48." (Q13-Q26) "(8 x 6 = 48 marks)"
- Section C: "Answer at least five questions. Each question carries 9 marks. All questions can be attended. Overall Ceiling 45." (Q27-Q35) "(5 x 9 = 45 marks)"
- Section D: "Answer any one question. The question carries 15 marks." (Q36-Q38) "(1 x 15 = 15 marks)"

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MAT6B09-21-Q1 | A | 1 | State Bolzano's Intermediate Value Theorem. | 5.3.7 | M1 |
| MAT6B09-21-Q2 | A | 1 | Define Uniformly continuous function. | 5.4.1 | M1 |
| MAT6B09-21-Q3 | A | 1 | Define Step function on an interval. | 5.4.9 | M1 |
| MAT6B09-21-Q4 | A | 1 | State the Composition theorem of Riemann integration. | 7.3.14 | M3 |
| MAT6B09-21-Q5 | A | 1 | Define Partition of a closed and bounded interval. | 7.1 (partition, Riemann-integral preliminaries) | M3 |
| MAT6B09-21-Q6 | A | 1 | Define Indefinite integral of $f\in\mathcal{R}[a,b]$, with base point $a$. | 7.3.3 | M3 |
| MAT6B09-21-Q7 | A | 1 | State the Squeeze theorem for Riemann integrability of a function. | 7.2.3 | M3 |
| MAT6B09-21-Q8 | A | 1 | State the Cauchy criterion for Riemann integrability of a function. | 7.2.1 | M3 |
| MAT6B09-21-Q9 | A | 1 | For what value of $r$ the series $\sum_{n=1}^{\infty} r^n\cos^2 nx$ uniformly convergent? | 9.4 (series; not in module list) | OUT |
| MAT6B09-21-Q10 | A | 1 | Fill in the blanks: $\lim\left(\dfrac{\cos(nx+n)}{n}\right)=\underline{\hspace{1cm}}$. | 8.1.1 (pointwise limit; borderline with Ch 3) | M4 |
| MAT6B09-21-Q11 | A | 1 | Fill in the blanks: $\beta(1,1)=\underline{\hspace{1cm}}$. | Beta function | OUT |
| MAT6B09-21-Q12 | A | 1 | Fill in the blanks: $\displaystyle\int_{-\infty}^{\infty} e^{-x^2}\,dx=\underline{\hspace{1cm}}$. | improper / Gamma | OUT |
| MAT6B09-21-Q13 | B | 6 | State the Boundedness Theorem. Show by an example that the boundedness theorem fails if the function is discontinuous in that interval. | 5.3.2 (with 5.1 example) | M1 |
| MAT6B09-21-Q14 | B | 6 | State the Maximum Minimum Value Theorem. Show by an example that this theorem fails if the interval is not closed. | 5.3.4 | M1 |
| MAT6B09-21-Q15 | B | 6 | Prove that the continuous image of a closed and bounded interval is a closed and bounded interval. | 5.3.9 | M1 |
| MAT6B09-21-Q16 | B | 6 | State the "non-uniform continuity criteria". Apply this result to test the uniform continuity of $f(x)=1/x$ on $(0,\infty)$. | 5.4.2 | M1 |
| MAT6B09-21-Q17 | B | 6 | State the location of Roots Theorem. Use it to show that the equation $xe^x-2=0$ has a root in $(0,1)$. | 5.3.5, 5.3.6 | M1 |
| MAT6B09-21-Q18 | B | 6 | If $f,g\in\mathcal{R}[a,b]$, then prove that $f\cdot g\in\mathcal{R}[a,b]$. | 7.3.16 | M3 |
| MAT6B09-21-Q19 | B | 6 | Evaluate $\displaystyle\int_{t=1}^{4} \frac{\sin\sqrt t}{\sqrt t}\,dt$. | 7.3.8 | M3 |
| MAT6B09-21-Q20 | B | 6 | If $f\in\mathcal{R}[a,b]$, then prove that $\lvert f\rvert\in\mathcal{R}[a,b]$. | 7.3.15 | M3 |
| MAT6B09-21-Q21 | B | 6 | Define Pointwise convergence of a sequence of functions. Test the convergence of $(x^n)$. | 8.1.1, 8.1.2 | M4 |
| MAT6B09-21-Q22 | B | 6 | If $(f_n)$ and $(g_n)$ are uniformly continuous functions in $\mathbb{R}$, then show that $(f_n)(g_n)$ need not be uniformly continuous in $\mathbb{R}$. | 5.4.1 (borderline: product results are in 5.2, OUT) | M1 |
| MAT6B09-21-Q23 | B | 6 | Distinguish between the absolute and uniform convergence of a series of functions; also state the Cauchy criteria for uniform convergence of a series of functions. | 9.4 (series; not in module list) | OUT |
| MAT6B09-21-Q24 | B | 6 | Show that $\displaystyle\int_{x=a}^{b}\frac{1}{\sqrt{(b-x)^p}}\,dx$ converges if $p<1$ and diverges if $p\ge1$. | improper integral | OUT |
| MAT6B09-21-Q25 | B | 6 | Express the integral $\displaystyle\int_{x=1}^{2}\frac{x^2}{(1-x^5)}\,dx$ in terms of Beta function. | Beta function | OUT |
| MAT6B09-21-Q26 | B | 6 | Define Gamma function. Prove that $\Gamma(n)=(n-1)\,\Gamma(n-1)$. | Gamma function | OUT |
| MAT6B09-21-Q27 | C | 9 | State and prove uniform continuity theorem. | 5.4.3 | M1 |
| MAT6B09-21-Q28a | C | 9 | Define Lipschitz function. | 5.4.4 | M1 |
| MAT6B09-21-Q28b | C | 9 | If $f:A\to\mathbb{R}$ is Lipschitz function on $A$, then prove that $f$ is uniformly continuous on $A$. | 5.4.5 | M1 |
| MAT6B09-21-Q29 | C | 9 | If $f,g\in\mathcal{R}[a,b]$, then prove that $f+g\in\mathcal{R}[a,b]$ and $\int_a^b(f+g)=\int_a^b f+\int_a^b g$. | 7.1.5 | M3 |
| MAT6B09-21-Q30 | C | 9 | If $f:[a,b]\to\mathbb{R}$ is continuous on $[a,b]$, then prove that $f\in\mathcal{R}[a,b]$. | 7.2.7 | M3 |
| MAT6B09-21-Q31 | C | 9 | Test the uniform convergence of the series $\displaystyle\sum_{n=1}^{\infty}\frac{\sin(x^2+nx)}{n(n+2)}$. | 9.4.6 (series; Weierstrass M-test) | OUT |
| MAT6B09-21-Q32 | C | 9 | Discuss the convergence of $(f_n(x))=\big(x^n(1-x)\big)$, $x\in A=[0,1]$. | 8.1.1, 8.1.5, 8.1.6 | M4 |
| MAT6B09-21-Q33a | C | 9 | Distinguish between absolute and conditional convergence of an improper integral. | improper integral | OUT |
| MAT6B09-21-Q33b | C | 9 | Discuss the convergence of the improper integral $\displaystyle\int_{x=\pi}^{\infty}\frac{\cos x}{x^2}\,dx$. | improper integral | OUT |
| MAT6B09-21-Q34 | C | 9 | Express the integral $\displaystyle\int_0^a x^{p-1}(a-x)^{q-1}\,dx$; $p,q>0$ in terms of Gamma function. | Beta / Gamma | OUT |
| MAT6B09-21-Q35 | C | 9 | Prove that $\beta(m,n)=\dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$. | Beta / Gamma | OUT |
| MAT6B09-21-Q36a | D | 15 | If $f:A\to\mathbb{R}$ is uniformly continuous on $A$ and if $(x_n)$ is a Cauchy sequence in $A$, then prove that $(f(x_n))$ is a Cauchy sequence in $\mathbb{R}$. | 5.4.7 | M1 |
| MAT6B09-21-Q36b | D | 15 | Evaluate $\displaystyle\int_0^\infty e^{-x^2}\,dx$, Gamma function. | Gamma function / improper | OUT |
| MAT6B09-21-Q37a | D | 15 | State and prove the Fundamental Theorem of calculus (2nd form). [Question number partly obscured in scan; read as 37.] | 7.3.5 | M3 |
| MAT6B09-21-Q37b | D | 15 | Discuss the uniform convergence of $(f_n(x))=(x^n)$, $x\in A=[0,1]$, $n\in\mathbb{N}$ [printed as "x in N"; read as $n$ [?]]. | 8.1.5, 8.1.6 | M4 |
| MAT6B09-21-Q38a | D | 15 | State and prove the Cauchy criteria for uniform convergence of a sequence of functions. | 8.1.10 | M4 |
| MAT6B09-21-Q38b | D | 15 | Prove that $\beta(m,n)=\displaystyle\int_{x=0}^{\infty}\frac{x^{m-1}}{(1+x)^{m+n}}\,dx$. | Beta function | OUT |

---

## Paper 7: MTS6B10-22-MCQ (March 2022, code C 20645-A)

Header: Sixth Semester U.G. Degree Examination, March 2022. Mathematics. CBCSS UG. MTS 6B 10 - Real Analysis. (2019 Admissions). (Multiple Choice Questions for SDE Candidates). Time: 15 Minutes. Total No. of Questions: 20. Maximum: 20 Marks.

Section pattern, as printed: "Each question is provided with choices (A), (B), (C) and (D) having one correct answer." Questions 1 to 20, one mark each (20 marks / 20 questions).

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MTS6B10-22-MCQ-Q1 | MCQ | 1 | Which of the following are true about Thomae's function? (A) Continuous only at irrationals. (B) Continuous every where on $\mathbb{R}$. (C) Continuous only at rationals. (D) Discontinuous only at irrationals. | 5.1.4 (applied to Thomae's function, see 7.1.7) | M1 |
| MTS6B10-22-MCQ-Q2 | MCQ | 1 | $g:A\to\mathbb{R}$, where $A\subseteq\mathbb{R}$, is uniformly continuous function when: (A) $A=(0,1)$. (B) $A=(-1,0)$. (C) $A=[a,1)$; $a>0$. (D) $A=(0,\infty)$. | 5.4.1, 5.4.3 | M1 |
| MTS6B10-22-MCQ-Q3 | MCQ | 1 | Let $f$ and $g$ be two Lipschitz functions on $A\subset\mathbb{R}$. Choose the false statement from below: (A) $cf$ is a Lipschitz function on $A$ where $c$ is a constant. (B) $f+g$ is Lipschitz function on $A$. (C) $f^2$ is a Lipschitz function on $A$. (D) $f-g$ is a Lipschitz function on $A$. | 5.4.4 (product results in 5.2 are OUT; borderline) | M1 |
| MTS6B10-22-MCQ-Q4 | MCQ | 1 | Let $f:\mathbb{R}\to\mathbb{R}$ be defined by $f(x)=\dfrac{1}{1+x^2}$, then: (A) $f$ is uniformly continuous on $\mathbb{R}$. (B) $f$ is not uniformly continuous on $\mathbb{R}$. (C) $f$ is uniformly continuous only on bounded subset of $\mathbb{R}$. (D) $f$ is uniformly continuous only on a closed bounded subset of $\mathbb{R}$. | 5.4.1-5.4.3 | M1 |
| MTS6B10-22-MCQ-Q5 | MCQ | 1 | If $0<x<1$, which of the following terms increases as $x$ increases: (i) $1-x^3$. (ii) $x\,[?]\,1$ (printed as "$x$ ... $1$"; operator unclear). (iii) $\dfrac{1}{x^{y}}$ [?]. (A) (i) only. (B) (ii) only. (C) (iii) only. (D) (i) and (iii). | monotonicity via derivative sign, 6.2.7 (borderline; 5.6 monotone functions is OUT) | M2 |
| MTS6B10-22-MCQ-Q6 | MCQ | 1 | Evaluate $\lim_{x\to0}\dfrac{\log x}{\cot x}$. (A) 0. (B) 1. (C) 2. (D) 0.5. | L'Hospital 6.3 and limits (OUT) | OUT |
| MTS6B10-22-MCQ-Q7 | MCQ | 1 | Let $f(x)=g(x)$ for $[0,1]\setminus\{\tfrac1n: n\in\mathbb{N}\}$. Choose the false statement from below: (A) If $f$ is Riemann integrable on $[0,1]$ then $g$ also Riemann integrable on $[0,1]$. (B) If $g$ is Riemann integrable on $[0,1]$ then $f$ also Riemann integrable on $[0,1]$. (C) $\int f\,dx=\int g\,dx$. (D) If $f$ is Riemann integrable on $[0,1]$ then $\int f\,dx=\int g\,dx$. | 7.1.3 (extended to countable exception sets; 7.3.12 style) | M3 |
| MTS6B10-22-MCQ-Q8 | MCQ | 1 | Which of the following is true? (A) There exists $f\in\mathcal{R}[a,b]$, such that $f$ is not bounded on $[a,b]$. (B) There exists $f\in\mathcal{R}[a,b]$, such that $f$ is unbounded on $[a,b]$. (C) Unbounded functions on $[a,b]$ is integrable when functions takes only positive values. (D) If $f$ is not bounded on $[a,b]$ then $f\notin\mathcal{R}[a,b]$. | 7.1.6 | M3 |
| MTS6B10-22-MCQ-Q9 | MCQ | 1 | Let $H(x)=k$ for $x=\frac1k$ ($k\in\mathbb{N}$), $H(x)=0$ elsewhere on $[0,1]$. $H$ is not Riemann integrable. Then: (A) $H\notin\mathcal{R}[0,1]$. (B) $\int_0^1 H=0$. (C) $\int_0^1 H=1$. (D) $\int_0^1 H=\tfrac12$. | 7.1.6 | M3 |
| MTS6B10-22-MCQ-Q10 | MCQ | 1 | Choose the false statement from below: (A) Any subset of a null set is also a null set. (B) Union of two null set is a null set. (C) Countable set is a null set. (D) Every null set is a countable set. | 7.3.10, 7.3.11 | M3 |
| MTS6B10-22-MCQ-Q11 | MCQ | 1 | Let $g_n(x)=x^n$ for $x\in\mathbb{R}$, $n\in\mathbb{N}$ then: (A) $(g_n)$ converges to a continuous function on $(-1,1]$. (B) $(g_n)$ converges to a function on $(-2,1]$. (C) $(g_n)$ converges to a continuous function on $(0,1]$. (D) $(g_n)$ converges to a continuous function on $(-1,1)$. | 8.1.1, 8.2.1, 8.2.2 | M4 |
| MTS6B10-22-MCQ-Q12 | MCQ | 1 | For $x\in\mathbb{R}$, $\lim\left(\dfrac1n\sin(nx+n)\right)=$? (A) $-1$. (B) 0. (C) 1. (D) 2. | 8.1.1 (pointwise; borderline with Ch 3) | M4 |
| MTS6B10-22-MCQ-Q13 | MCQ | 1 | Let $(f_n)$ converges uniformly on $\mathbb{R}$ to $f$, then: (A) $(2f_n)$ does not converge uniformly on $\mathbb{R}$. (B) $(f_n^2)$ converge uniformly on $\mathbb{R}$. (C) $(f_n^3)$ converge uniformly on $\mathbb{R}$. (D) None of these. | 8.1.x (uniform convergence; products need boundedness, borderline) | M4 |
| MTS6B10-22-MCQ-Q14 | MCQ | 1 | Find $\displaystyle\sum_{n=0}^{\infty}\frac{1}{(\alpha+n)(\alpha+n+1)}$ if $\alpha>0$ [lower index read as 0 [?]]. (A) $\frac1\alpha$. (B) 0. (C) $\frac1\alpha$ [sign printed as $-$ [?]]. (D) $2\alpha$. | Ch 9 (series; not in module list) | OUT |
| MTS6B10-22-MCQ-Q15 | MCQ | 1 | Choose the correct statement: (A) $\sum_{n=1}^{\infty}\cos n$ is divergent and $\sum_{n=1}^{\infty}\frac{\cos n}{n^2}$ is convergent. (B) $\sum\cos n$ divergent and $\sum\frac{\cos n}{n^2}$ divergent. (C) $\sum\cos n$ convergent and $\sum\frac{\cos n}{n^2}$ convergent. (D) $\sum\cos n$ convergent and $\sum\frac{\cos n}{n^2}$ divergent. | Ch 9 (series) | OUT |
| MTS6B10-22-MCQ-Q16 | MCQ | 1 | Find $\displaystyle\int_{-\infty}^{0} e^x\,dx$: (A) 1. (B) 0. (C) $-1$. (D) $-2$. | improper integral | OUT |
| MTS6B10-22-MCQ-Q17 | MCQ | 1 | Find $\displaystyle\int_{-\infty}^{0} x^2\,dx$: (A) 1. (B) $\infty$. (C) 0. (D) None of these. | improper integral | OUT |
| MTS6B10-22-MCQ-Q18 | MCQ | 1 | Find P.V. $\displaystyle\int_{-\infty}^{\infty} x\,dx$: (A) 1. (B) $\infty$. (C) 0. (D) $-\infty$. | Cauchy principal value, improper | OUT |
| MTS6B10-22-MCQ-Q19 | MCQ | 1 | Find P.V. $\displaystyle\int_{-z}^{z} x^3\,dx$ [limits partly unclear [?]]: (A) 1. (B) $\infty$. (C) 0. (D) $-\infty$. | Cauchy principal value, improper | OUT |
| MTS6B10-22-MCQ-Q20 | MCQ | 1 | Find P.V. $\displaystyle\int_{-\infty}^{\infty}\frac{dx}{x^2+1}$ [upper/lower limits partly unclear [?]]: (A) $\pi$. (B) $\frac{\pi}{2}$. (C) 0. (D) $-\pi$. | improper integral / PV | OUT |

---

## Paper 8: MTS6B10-22 (March 2022, code C 20645), descriptive

Header: Sixth Semester U.G. Degree Examination, March 2022. CBCSS-UG. Mathematics. MTS 6B 10 - Real Analysis. (2019 Admissions). Time: Two Hours and a Half. Maximum: 80 Marks.

**Complete copy recovered.** Initially only page 1 was present in `SEM5_MTS_6B_10_REAL_ANALYSIS_1.pdf`. Pages 2 and 3 have now been fully retrieved and transcribed from the Calicut University CHMK Library collection (`BSc_Maths_Sem6_2019_2022.pdf`, pp. 43-45) and previousyearquestion.com.

Section pattern, as printed:
- Section A: "Answer at least ten questions. Each question carries 3 marks. All questions can be attended. Overall Ceiling 30." (Q1-Q15)
- Section B: "Answer at least five questions. Each question carries 6 marks. All questions can be attended. Overall Ceiling 30." (Q16-Q23)
- Section C: "Answer any two questions. Each question carries 10 marks." (Q24-Q27)

| tag | section | marks | question text | Bartle section(s) | new-module |
|---|---|---|---|---|---|
| MTS6B10-22-Q1 | A | 3 | Define continuity of a function. Show that the constant function $f(x)=b$ is continuous on $\mathbb{R}$. | 5.1.1 | M1 |
| MTS6B10-22-Q2 | A | 3 | State Boundedness theorem. Is boundedness of the interval, a necessary condition in the theorem? Justify with an example. | 5.3.2 | M1 |
| MTS6B10-22-Q3 | A | 3 | If $f:A\to\mathbb{R}$ is uniformly continuous on $A\subseteq\mathbb{R}$ and $(x_n)$ is a Cauchy sequence in $A$, then show that $f(x_n)$ is a Caychy [sic] sequence in $\mathbb{R}$. | 5.4.7 | M1 |
| MTS6B10-22-Q4 | A | 3 | Define Riemann sum of a function $f:[a,b]\to\mathbb{R}$. | 7.1.1 | M3 |
| MTS6B10-22-Q5 | A | 3 | Suppose $f$ and $g$ are in $\mathcal{R}[a,b]$, then show that $f+g$ is in $\mathcal{R}[a,b]$. | 7.1.5 | M3 |
| MTS6B10-22-Q6 | A | 3 | State squeeze theorem for Riemann integrable functions. | 7.2.3 | M3 |
| MTS6B10-22-Q7 | A | 3 | If $f\in\mathcal{R}[a,b]$, then show that its absolute value $\lvert f\rvert$ is in $\mathcal{R}[a,b]$. | 7.3.15 | M3 |
| MTS6B10-22-Q8 | A | 3 | Define pointwise convergence of a sequence $(f_n)$ of functions. | 8.1.1 | M4 |
| MTS6B10-22-Q9 | A | 3 | Discuss the uniform convergence of $f_n(x)=x^n$ on $(-1,1]$. | 8.1.4-8.1.6 | M4 |
| MTS6B10-22-Q10 | A | 3 | If $h_n(x)=2nx\,e^{-nx^2}$ for $x\in[0,1]$, $n\in\mathbb{N}$ and $h(x)=0$ for all $x\in[0,1]$, then show that $\displaystyle\lim_{n\to\infty}\int_0^1 h_n(x)\,dx\neq\int_0^1 h(x)\,dx$. | 8.1.1 (pointwise limit); the interchange theorem 8.2.4 is OUT (borderline) | M4 |
| MTS6B10-22-Q11 | A | 3 | State Cauchy criteria for uniform convergence series of functions. | 9.4.5 (series; not in module list) | OUT |
| MTS6B10-22-Q12 | A | 3 | Evaluate $\displaystyle\int_0^1 \frac{1}{x^p}\,dx$. | improper integral | OUT |
| MTS6B10-22-Q13 | A | 3 | What is Cauchy principle [sic] value. Find the principal value of $\displaystyle\int_{-1}^1 \frac{1}{x}\,dx$. | improper integral | OUT |
| MTS6B10-22-Q14 | A | 3 | State Leibniz rule for differentiation of Riemann integrals. | 7.3.16 | M3 |
| MTS6B10-22-Q15 | A | 3 | State that $\Gamma(p+1)=p\Gamma(p)$ for $p>0$. | Gamma function | OUT |
| MTS6B10-22-Q16 | B | 6 | Show that the Dirichlet's function $f(x)=1$ if $x$ is rational, $0$ if $x$ is irrational is not continuous at any point of $\mathbb{R}$. | 5.1.6 | M1 |
| MTS6B10-22-Q17 | B | 6 | State and prove Bolzano intermediate value theorem. | 5.3.7 | M1 |
| MTS6B10-22-Q18a | B | 6 | Show that $f(x)=x^2$ is not uniformly continuous on $A=[0,\infty)$. | 5.4.3 | M1 |
| MTS6B10-22-Q18b | B | 6 | Show that $g(x)=\sin(1/x)$ is not uniformly continuous on $B=(0,\infty)$. | 5.4.11 | M1 |
| MTS6B10-22-Q19 | B | 6 | If $f:[a,b]\to\mathbb{R}$ is continuous on $[a,b]$, then show that $f\in\mathcal{R}[a,b]$. | 7.2.7 | M3 |
| MTS6B10-22-Q20 | B | 6 | Let $(f_n)$ be a sequence of continuous functions on a set $A\subseteq\mathbb{R}$ and suppose that $(f_n)$ converges uniformly on $A$ to a function $f:A\to\mathbb{R}$. Then show that $f$ is continuous on $A$. | 8.2.2 | M4 |
| MTS6B10-22-Q21 | B | 6 | Let $f_n:[0,1]\to\mathbb{R}$ be defined for $n\ge 2$ by $f_n(x)=n^2 x$ for $0\le x\le 1/n$, $-n^2(x-2/n)$ for $1/n\le x\le 2/n$, and $0$ for $2/n\le x\le 1$. Show that the limit function is Riemann integrable. Verify whether $\displaystyle\lim_{n\to\infty}\int_0^1 f_n(x)\,dx=\int_0^1 f(x)\,dx$. | 8.2.1, Ex 8.2 | M4 |
| MTS6B10-22-Q22 | B | 6 | Given $\displaystyle\iint_{\mathbb{R}^2} e^{-(x^2+y^2)}\,dx\,dy=\pi$, find the value of $\displaystyle\int_0^\infty e^{-x^2}\,dx$. | improper integral | OUT |
| MTS6B10-22-Q23 | B | 6 | Show that $\forall p>0, q>0$, $B(p,q)=\dfrac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$. | Beta / Gamma | OUT |
| MTS6B10-22-Q24 | C | 10 | State and prove Location of roots theorem. | 5.3.5 | M1 |
| MTS6B10-22-Q25 | C | 10 | State and prove Additivity theorem. | 7.2.9 | M3 |
| MTS6B10-22-Q26a | C | 10 | Evaluate $\displaystyle\lim_{n\to\infty}\frac{x^n}{1+x^n}$ for $x\in\mathbb{R}, x\ge 0$. Discuss its uniform convergence. | 8.1.2 | M4 |
| MTS6B10-22-Q26b | C | 10 | Evaluate $\displaystyle\lim_{n\to\infty}\frac{\sin(nx)}{1+nx}$ for $x\in\mathbb{R}, x\ge 0$. Discuss its uniform convergence. | 8.1.4 | M4 |
| MTS6B10-22-Q27a | C | 10 | Show that for $p>-1$, $\displaystyle\int_0^1 x^p e^{-x}\,dx$ converges. | improper integral | OUT |
| MTS6B10-22-Q27b | C | 10 | Show that $\displaystyle\int_0^1 \left(\log\frac{1}{x}\right)^{p-1}\,dx$ converges for $p>0$. | improper integral | OUT |

---

## Summary

Row counts include each sub-part separately (Q24a/Q24b, Q28a/Q28b, etc.). Total rows: 238. In-scope: 162. Out of scope: 76.

### Counts per paper

| paper | M1 | M2 | M3 | M4 | OUT | total rows |
|---|---|---|---|---|---|---|
| MTS6B10-25 (Mar 2025) | 6 | 0 | 8 | 4 | 9 | 27 |
| MTS6B10-26 (Apr 2026) | 7 | 0 | 8 | 3 | 10 | 28 |
| MAT6B09-22-MCQ (Mar 2022) | 8 | 0 | 16 | 0 | 6 | 30 |
| MAT6B09-22 (Mar 2022, descriptive) | 11 | 0 | 12 | 3 | 15 | 41 |
| MAT6B09-21-MCQ (Mar 2021 Special) | 3 | 0 | 11 | 0 | 6 | 20 |
| MAT6B09-21 (Mar 2021 Special, descriptive) | 13 | 0 | 11 | 5 | 14 | 43 |
| MTS6B10-22-MCQ (Mar 2022) | 4 | 1 | 4 | 3 | 8 | 20 |
| MTS6B10-22 (Mar 2022, descriptive complete) | 8 | 0 | 7 | 7 | 7 | 29 |
| **Total** | **60** | **1** | **77** | **25** | **76** | **238** |

### In-scope tags per module

**M1 Continuity (60)**
- MTS6B10-25: Q1, Q2, Q3, Q16, Q17, Q24 (6)
- MTS6B10-26: Q1, Q2, Q3, Q16, Q17, Q24a, Q24b (7)
- MAT6B09-22-MCQ: Q3, Q6, Q8, Q9, Q10, Q11, Q12, Q13 (8)
- MAT6B09-22: Q1, Q2, Q5, Q13, Q14, Q15, Q27, Q28, Q29, Q36a, Q36b (11)
- MAT6B09-21-MCQ: Q6, Q7, Q8 (3)
- MAT6B09-21: Q1, Q2, Q3, Q13, Q14, Q15, Q16, Q17, Q22 (borderline), Q27, Q28a, Q28b, Q36a (13)
- MTS6B10-22-MCQ: Q1, Q2, Q3 (borderline), Q4 (4)
- MTS6B10-22: Q1, Q2, Q3, Q16, Q17, Q18a, Q18b, Q24 (8)

**M2 Differentiation (1, borderline only)**
- MTS6B10-22-MCQ: Q5 (monotonicity; the 6.2.7 link is borderline and 5.6 is OUT)

No M2 question in any paper treats the Mean Value Theorem, Rolle, Darboux or derivative theory directly. (See pyq-manifest.md for analysis of differentiation in Calicut degree Calculus courses).

**M3 Riemann integral (77)**
- MTS6B10-25: Q4, Q5, Q6, Q7, Q8, Q18, Q19 (borderline Taylor), Q25 (8)
- MTS6B10-26: Q4, Q5, Q6, Q7, Q8, Q18, Q19, Q25 (8)
- MAT6B09-22-MCQ: Q14-Q19, Q21-Q30 (16)
- MAT6B09-22: Q3, Q4, Q6, Q16, Q17, Q18, Q30, Q32 (borderline Taylor), Q33, Q35, Q37a, Q37b (12)
- MAT6B09-21-MCQ: Q9-Q13, Q15-Q20 (11)
- MAT6B09-21: Q4, Q5, Q6, Q7, Q8, Q18, Q19, Q20, Q29, Q30, Q37a (11)
- MTS6B10-22-MCQ: Q7, Q8, Q9, Q10 (4)
- MTS6B10-22: Q4, Q5, Q6, Q7, Q14, Q19, Q25 (7)

**M4 Sequences of functions (25)**
- MTS6B10-25: Q9, Q10, Q20, Q26 (4)
- MTS6B10-26: Q9, Q10, Q20 (3)
- MAT6B09-22: Q8, Q19, Q31 (3)
- MAT6B09-21: Q10, Q21, Q32, Q37b, Q38a (5)
- MTS6B10-22-MCQ: Q11, Q12, Q13 (3)
- MTS6B10-22: Q8, Q9, Q10, Q20, Q21, Q26a, Q26b (7)

### Repeated questions (same question, or the same statement, in two or more papers)

Identical wording or content:
1. Weierstrass approximation theorem, stated: MTS6B10-25-Q3, MAT6B09-22-Q2 (M1)
2. Uniform continuity theorem, state and prove: MAT6B09-22-Q28, MAT6B09-21-Q27, MTS6B10-26-Q24a (M1)
3. UC but not Lipschitz, by example: MTS6B10-25-Q2, MAT6B09-22-Q15 (M1)
4. Preservation of intervals: MTS6B10-25-Q17, MAT6B09-22-Q14 (M1)
5. Taylor's theorem with remainder: MTS6B10-25-Q19, MAT6B09-22-Q32 (M3, borderline)
6. Step function is R-integrable: MTS6B10-26-Q5, MAT6B09-22-Q16 (M3)
7. Continuous implies R-integrable: MTS6B10-25-Q18, MAT6B09-21-Q30 (M3)
8. Monotone implies R-integrable: MTS6B10-26-Q19, MAT6B09-22-Q30 (M3)
9. Additivity over [a,c] and [c,b]: MTS6B10-26-Q25, MAT6B09-22-Q37a (M3)
10. FTC second form, state and prove: MTS6B10-25-Q25, MAT6B09-21-Q37a (M3)
11. Uniform convergence iff sup-norm to 0: MTS6B10-26-Q20, MAT6B09-22-Q19 (M4)
12. UC function maps Cauchy sequence to Cauchy: MTS6B10-22-Q3, MAT6B09-21-Q36a (M1)
13. Definition of uniform continuity: MAT6B09-22-Q1, MAT6B09-21-Q2 (M1)
14. Definition of step function: MAT6B09-22-Q5, MAT6B09-21-Q3 (M1)
15. Definition of Lipschitz: MTS6B10-26-Q3, MAT6B09-21-Q28a (M1)
16. Squeeze theorem for R-integrability: MTS6B10-26-Q18, MTS6B10-22-Q6, MAT6B09-21-Q7 (M3)
17. Product theorem for R-integrable functions: MTS6B10-26-Q6, MAT6B09-22-Q17, MAT6B09-21-Q18 (M3)
18. |f| is R-integrable: MTS6B10-25-Q8, MTS6B10-22-Q7, MAT6B09-21-Q20 (M3)
19. Substitution with sin(sqrt t)/sqrt t: MTS6B10-25-Q6, MAT6B09-22-Q18, MAT6B09-21-Q19 (M3)
20. Pointwise limit of e^{-nx} / nx/(1+nx) / (x^2+nx)/n: MTS6B10-25-Q10, MTS6B10-26-Q10, MAT6B09-22-Q8 (M4, similar)
21. Cauchy criterion for uniform convergence of a sequence: MTS6B10-25-Q26, MAT6B09-21-Q38a (M4)
22. Dirichlet-type function not integrable: MAT6B09-22-MCQ-Q17, MAT6B09-21-MCQ-Q12 (M3)
23. f = g (or f = 0) except at finitely many points: MAT6B09-22-MCQ-Q18, MAT6B09-21-MCQ-Q13 (M3)
24. Break/jump discontinuity: MAT6B09-22-MCQ-Q8, MAT6B09-21-MCQ-Q6 (M1)
25. "Every continuous function is UC" true/false: MAT6B09-22-MCQ-Q13, MAT6B09-21-MCQ-Q8 (M1)
26. Riemann integrable implies bounded / continuous / monotone: MAT6B09-22-MCQ-Q15, MAT6B09-21-MCQ-Q11 (M3)
27. Continuous implies R; R implies continuous: MAT6B09-22-MCQ-Q21, MAT6B09-21-MCQ-Q15 (M3)
28. Integrand restricted to [c,b] (limit as c to a+): MAT6B09-22-MCQ-Q24, MAT6B09-21-MCQ-Q18 (M3)
29. FTC-type value (b-a)(F(b)-F(a)): MAT6B09-22-MCQ-Q27, MAT6B09-21-MCQ-Q19 (M3)
30. Integral of g with G = |x^2-1|/2 on [-2,3]: MAT6B09-22-MCQ-Q28, MAT6B09-21-MCQ-Q20 (M3)
31. Cluster points of (-1,1) and of {2,3,4}: MAT6B09-22-MCQ-Q1 = MAT6B09-21-MCQ-Q1; MAT6B09-22-MCQ-Q2 = MAT6B09-21-MCQ-Q2 (OUT)
32. lim |x|/x at 0: MAT6B09-22-MCQ-Q4, MAT6B09-21-MCQ-Q3 (OUT)
33. Convergence of a,b sequences: MAT6B09-22-MCQ-Q5, MAT6B09-21-MCQ-Q4 (OUT)
34. Convergent implies Cauchy (and converse): MAT6B09-22-MCQ-Q20, MAT6B09-21-MCQ-Q14 (OUT)
35. H(x)=k at x=1/k: MTS6B10-22-MCQ-Q9, MAT6B09-21-MCQ-Q17 (M3, near-identical)
36. P.V. of integral of x over R: MTS6B10-25-Q13, MTS6B10-22-MCQ-Q18, MAT6B09-22-Q10 (OUT)
37. Beta-Gamma identity beta(m,n)=Gamma(m)Gamma(n)/Gamma(m+n): MAT6B09-22-Q38a, MAT6B09-21-Q35 (near-identical to MTS6B10-25-Q23) (OUT)
38. Series: Cauchy criterion for uniform convergence: MTS6B10-26-Q11, MTS6B10-22-Q11, MAT6B09-21-Q23 (OUT)
39. Series: Weierstrass M-test: MTS6B10-25-Q11, MAT6B09-22-Q21 (OUT)

Similar, not identical:
- Bolzano IVT: MAT6B09-21-Q1 and MAT6B09-22-Q13 (inf/sup version); location of roots: MTS6B10-25-Q24, MAT6B09-21-Q17
- Boundedness theorem: MTS6B10-26-Q16, MTS6B10-22-Q2, MAT6B09-21-Q13, MAT6B09-22-Q27
- Max-min theorem: MAT6B09-21-Q14, MAT6B09-22-Q36a
- sqrt(x) uniform continuity: MTS6B10-26-Q24b (on [0,inf)), MAT6B09-22-Q36b (on [0,2]); Bartle 5.4.6(b) is this example
- Gamma(1/2): MTS6B10-26-Q15 and MAT6B09-22-Q38b; Gamma duplication: MTS6B10-26-Q23 and MAT6B09-22-Q34
- Pointwise limit of cos/sin(nx+n)/n: MAT6B09-21-Q10, MTS6B10-22-MCQ-Q12
- x^n uniform convergence: MTS6B10-22-Q9 (on (-1,1]), MAT6B09-21-Q37b (on [0,1]), MAT6B09-21-Q21 (pointwise), MAT6B09-22-Q31 (x^n/(x^n+1))
- Improper integrals of e^{-x^2} and sqrt(y)e^{-y^2}: MAT6B09-21-Q12, MAT6B09-21-Q36b, MTS6B10-25-Q22, MTS6B10-26-Q22

### Notes and caveats

- **M2 is essentially missing.** The only M2-linked question is the borderline monotonicity item MTS6B10-22-MCQ-Q5. The MVT, Rolle, Darboux and derivative-based questions in the new syllabus have no past-paper counterpart in these six papers.
- **Taylor's theorem is ambiguous.** The integral-remainder form (Bartle 7.3.18) is counted as M3. The Lagrange form is in Section 6.4 (OUT). Check which form the exam means.
- **Cauchy criterion ambiguity.** MTS6B10-25-Q26 is counted as M4 on the sequence version (8.1.10). If the series version is meant, it is OUT.
- **Incomplete scan.** `SEM5_MTS_6B_10_REAL_ANALYSIS_1.pdf` has only page 1 of the descriptive MTS 6B 10 (March 2022). Pages 2-3 (Section A Q12 onward, Sections B and C) are absent. MTS6B10-22 is therefore partial.
- **Unclear printed items.** MAT6B09-21-Q37 has an obscured number (read as 37). MAT6B09-21-Q37b says "x in N" (read as n in N). MTS6B10-22-MCQ-Q5(ii)/(iii) and MTS6B10-22-MCQ-Q14, Q19, Q20 have unclear glyphs marked [?].
- **Admission batch missing.** The March 2021 covers (C 3008 and C 3008-A) do not print an admission batch.
- **Repeats are common in MCQs.** Of the 20 MAT 6B 09 MCQs in March 2021, 15 have a matching item in the March 2022 MCQ set (15 of its 30). Repeats are listed above.

---

## FYUGP pattern (70-mark external)

Searched `/home/ihjas/Documents/GitHub/SSC-FILES` directories `pyq/`, `PYQ/`, `SEM5-PYQ/`, `2026*`, and `ssc-v3/` (PDF list, then first-two-page text grep for "70 Marks", "CUFYUGP", "Four Year"). Found two maths/physics FYUGP papers with a 70-mark total. Both are 2024-admission papers.

1. `pyq/Physics/APH1CJ101/2024/FUNDAMENTALS_OF_PHYSICS.pdf`
   - First Semester (CUFYUGP) Degree Examination, November 2024. Applied Physics/Physics. APH1CJ101/PHY1CJ101 Fundamentals of Physics. (2024 Admission onwards). Time: Two Hours. Maximum: 70 Marks.
   - Section A: "Answer all questions. Each question carries 3 marks. (Ceiling: 24 marks)."
   - Section B: "Answer all questions. Each question carries 6 marks. (Ceiling: 36 marks)."
   - Section C: "Answer any one questions. Each question carries 10 marks." (1 x 10 = 10 marks)
   - Total 24 + 36 + 10 = 70.

2. `PYQ/Mathematics/MAT4CJ203/2026/Real-Analysis-1.pdf`
   - Fourth Semester (CUFYUGP) Degree Examination, April 2026. Mathematics. MAT4CJ203 Real Analysis I. (2024 Admission Onwards). Maximum Time: 2 Hours. Maximum Marks: 70.
   - Section A: "All Question can be answered. Each Question carries 3 marks (Ceiling: 24 Marks)." (Q1-Q10)
   - Section B: "All Question can be answered. Each Question carries 6 marks (Ceiling: 36 Marks)." (Q11-Q18)
   - Section C: "Answer any ONE. Each Question carries 10 marks (1x10=10 Marks)." (Q19-Q20)

Pattern (common to both): 70 marks = three sections with ceilings 24 / 36 / 10 (3-mark, 6-mark, 10-mark questions). Section A and B: attempt all, marks capped at the ceiling. Section C: choose one of two.

Other FYUGP 70-mark paper seen (not maths/physics, so only noted): `PYQ/Statistics/STA2MN101/2025/STA2MN101-PROBABILITY-THEORY-I.pdf` (Maximum 70 Marks, Time Two Hours). Syllabus: `syllabus.pdf` (work dir) says the MAT5CJ301 external is 70 marks, "distributed over the first four modules subjected to a minimum of 15 marks from each module", with the minimum-per-module table: Module I min 15, Module II min 15, Module III min 20, Module IV min 10 (14 + 10 + 14 + 7 hours). Optional items are exempt from the end-semester exam.

No FYUGP MAT5CJ301 (Real Analysis II) paper was found in the SSC-FILES directories searched. The only MAT5CJ301 items are the two old-course papers listed above.
