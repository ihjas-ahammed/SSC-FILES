/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 10 — Polynomials (ബഹുപദങ്ങൾ)
   8 Objective (2 per section) + 6 Written Exercises.
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Authentic SCERT Kerala SSLC textbook questions & comprehensive steps.
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.10.1 Polynomial Functions & Evaluation
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.1',
    concept: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'What is the degree of the polynomial $P(x) = 5x^4 - 3x^2 + 7x - 9$?',
    prompt_ml: '$P(x) = 5x^4 - 3x^2 + 7x - 9$ എന്ന ബഹുപദത്തിന്റെ കൃതി എത്ര?',
    options_en: [
      { k: 'A', t: '4' },
      { k: 'B', t: '5' },
      { k: 'C', t: '2' },
      { k: 'D', t: '7' }
    ],
    options_ml: [
      { k: 'A', t: '4' },
      { k: 'B', t: '5' },
      { k: 'C', t: '2' },
      { k: 'D', t: '7' }
    ],
    answer: 'A',
    solution_en: 'The degree of a polynomial is the highest power of the variable $x$, which is 4.',
    solution_ml: 'ഏറ്റവും ഉയർന്ന കൃത്യങ്കമാണ് ബഹുപദത്തിന്റെ കൃതി, ഇവിടെ അത് 4 ആണ്.',
    tested_en: 'Identifying degree of a polynomial.',
    tested_ml: 'ബഹുപദത്തിന്റെ കൃതി കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m10.10.2',
    concept: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'If $P(x) = 3x^2 - 4x + 5$, what is the value of $P(-1)$?',
    prompt_ml: '$P(x) = 3x^2 - 4x + 5$ ആയാൽ $P(-1)$ ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '12' },
      { k: 'B', t: '4' },
      { k: 'C', t: '-2' },
      { k: 'D', t: '6' }
    ],
    options_ml: [
      { k: 'A', t: '12' },
      { k: 'B', t: '4' },
      { k: 'C', t: '-2' },
      { k: 'D', t: '6' }
    ],
    answer: 'A',
    solution_en: '$P(-1) = 3(-1)^2 - 4(-1) + 5 = 3(1) + 4 + 5 = 12$.',
    solution_ml: '$P(-1) = 3(1) + 4 + 5 = 12$.',
    tested_en: 'Evaluating polynomial at a negative value.',
    tested_ml: 'ബഹുപദത്തിന് നെഗറ്റീവ് വില നൽകി കണക്കാക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.2 Remainder Theorem & Factor Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.3',
    concept: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the remainder when the polynomial $P(x) = x^3 - 2x^2 + 3x - 5$ is divided by $(x - 2)$?',
    prompt_ml: '$P(x) = x^3 - 2x^2 + 3x - 5$ നെ $(x - 2)$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?',
    options_en: [
      { k: 'A', t: '1' },
      { k: 'B', t: '-5' },
      { k: 'C', t: '0' },
      { k: 'D', t: '7' }
    ],
    options_ml: [
      { k: 'A', t: '1' },
      { k: 'B', t: '-5' },
      { k: 'C', t: '0' },
      { k: 'D', t: '7' }
    ],
    answer: 'A',
    solution_en: 'By the remainder theorem, the remainder is $P(2) = 2^3 - 2(2^2) + 3(2) - 5 = 8 - 8 + 6 - 5 = 1$.',
    solution_ml: 'ശിഷ്ട സിദ്ധാന്തപ്രകാരം ശിഷ്ടം $P(2) = 8 - 8 + 6 - 5 = 1$.',
    tested_en: 'Application of Remainder Theorem.',
    tested_ml: 'ശിഷ്ട സിദ്ധാന്ത പ്രയോഗം.'
  },
  {
    id: 'obj.m10.10.4',
    concept: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $(x - 1)$ is a factor of $P(x) = x^2 + kx + 6$, what is the value of $k$?',
    prompt_ml: '$P(x) = x^2 + kx + 6$ ന്റെ ഒരു ഘടകമാണ് $(x - 1)$ എങ്കിൽ $k$ യുടെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '-7' },
      { k: 'B', t: '7' },
      { k: 'C', t: '-5' },
      { k: 'D', t: '5' }
    ],
    options_ml: [
      { k: 'A', t: '-7' },
      { k: 'B', t: '7' },
      { k: 'C', t: '-5' },
      { k: 'D', t: '5' }
    ],
    answer: 'A',
    solution_en: '$(x - 1)$ is a factor $\\implies P(1) = 0 \\implies 1^2 + k(1) + 6 = 0 \\implies k + 7 = 0 \\implies k = -7$.',
    solution_ml: '$(x - 1)$ ഘടകമായതിനാൽ $P(1) = 0 \\implies 1 + k + 6 = 0 \\implies k = -7$.',
    tested_en: 'Finding unknown coefficient using Factor Theorem.',
    tested_ml: 'ഘടക സിദ്ധാന്തം ഉപയോഗിച്ച് അജ്ഞാത ഗുണകം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.3 Factoring Quadratic & Higher Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.5',
    concept: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following is the factored form of $P(x) = x^2 - 7x + 12$?',
    prompt_ml: '$P(x) = x^2 - 7x + 12$ എന്ന ബഹുപദത്തിന്റെ ഘടക രൂപം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$(x - 3)(x - 4)$' },
      { k: 'B', t: '$(x + 3)(x + 4)$' },
      { k: 'C', t: '$(x - 2)(x - 6)$' },
      { k: 'D', t: '$(x + 2)(x - 6)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(x - 3)(x - 4)$' },
      { k: 'B', t: '$(x + 3)(x + 4)$' },
      { k: 'C', t: '$(x - 2)(x - 6)$' },
      { k: 'D', t: '$(x + 2)(x - 6)$' }
    ],
    answer: 'A',
    solution_en: 'Sum of roots is 7 and product is 12: numbers are 3 and 4, so $x^2 - 7x + 12 = (x - 3)(x - 4)$.',
    solution_ml: 'തുക 7 ഉം ഗുണനഫലം 12 ഉം ആയ സംഖ്യകൾ 3 ഉം 4 ഉം ആണ്: $x^2 - 7x + 12 = (x - 3)(x - 4)$.',
    tested_en: 'Factoring quadratic trinomial.',
    tested_ml: 'രണ്ടാംകൃതി ബഹുപദത്തിന്റെ ഘടകക്രിയ.'
  },
  {
    id: 'obj.m10.10.6',
    concept: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following polynomials CANNOT be factored into first-degree polynomials with real coefficients?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ യഥാർത്ഥ സംഖ്യകൾ ഉപയോഗിച്ച് ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ സാധിക്കാത്ത ബഹുപദം ഏത്?',
    options_en: [
      { k: 'A', t: '$x^2 + x + 1$' },
      { k: 'B', t: '$x^2 - 4$' },
      { k: 'C', t: '$x^2 - 5x + 6$' },
      { k: 'D', t: '$x^2 - 2$' }
    ],
    options_ml: [
      { k: 'A', t: '$x^2 + x + 1$' },
      { k: 'B', t: '$x^2 - 4$' },
      { k: 'C', t: '$x^2 - 5x + 6$' },
      { k: 'D', t: '$x^2 - 2$' }
    ],
    answer: 'A',
    solution_en: 'For $x^2 + x + 1$, discriminant $b^2 - 4ac = 1^2 - 4(1)(1) = -3 < 0$, so it has no real roots and cannot be factored over the reals.',
    solution_ml: '$x^2 + x + 1$ ന്റെ വിവേചകം $b^2 - 4ac = 1 - 4 = -3 < 0$ ആയതിനാൽ ഇതിന് യഥാർത്ഥ ഘടകങ്ങളില്ല.',
    tested_en: 'Identifying non-factorable quadratic polynomials via discriminant.',
    tested_ml: 'വിവേചകം ഉപയോഗിച്ച് ഘടകങ്ങളാക്കാൻ കഴിയാത്ത ബഹുപദം കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.4 Roots, Factors & Equation Solutions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.10.7',
    concept: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What are the roots of the equation $(x - 5)(2x + 7) = 0$?',
    prompt_ml: '$(x - 5)(2x + 7) = 0$ എന്ന സമവാക്യത്തിന്റെ മൂലങ്ങൾ ഏതെല്ലാം?',
    options_en: [
      { k: 'A', t: '$5$ and $-\\frac{7}{2}$' },
      { k: 'B', t: '$-5$ and $\\frac{7}{2}$' },
      { k: 'C', t: '$5$ and $\\frac{7}{2}$' },
      { k: 'D', t: '$-5$ and $-\\frac{7}{2}$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$ ഉം $-\\frac{7}{2}$ ഉം' },
      { k: 'B', t: '$-5$ ഉം $\\frac{7}{2}$ ഉം' },
      { k: 'C', t: '$5$ ഉം $\\frac{7}{2}$ ഉം' },
      { k: 'D', t: '$-5$ ഉം $-\\frac{7}{2}$ ഉം' }
    ],
    answer: 'A',
    solution_en: 'Either $x - 5 = 0 \\implies x = 5$, or $2x + 7 = 0 \\implies x = -\\frac{7}{2}$.',
    solution_ml: '$x - 5 = 0 \\implies x = 5$, അല്ലെങ്കിൽ $2x + 7 = 0 \\implies x = -7/2$.',
    tested_en: 'Finding roots from linear factors.',
    tested_ml: 'ഘടകങ്ങളിൽ നിന്ന് മൂലങ്ങൾ കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m10.10.8',
    concept: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In the polynomial $P(x) = x^2 + 6x + k$, what is the maximum value $k$ can take so that $P(x)$ can be factored into two first-degree polynomials?',
    prompt_ml: '$P(x) = x^2 + 6x + k$ എന്ന ബഹുപദത്തെ രണ്ട് ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ $k$ ക്ക് പരമാവധി നൽകാവുന്ന വില എത്ര?',
    options_en: [
      { k: 'A', t: '9' },
      { k: 'B', t: '36' },
      { k: 'C', t: '6' },
      { k: 'D', t: '12' }
    ],
    options_ml: [
      { k: 'A', t: '9' },
      { k: 'B', t: '36' },
      { k: 'C', t: '6' },
      { k: 'D', t: '12' }
    ],
    answer: 'A',
    solution_en: 'Condition for real factors is $b^2 - 4ac \\ge 0 \\implies 6^2 - 4(1)(k) \\ge 0 \\implies 36 - 4k \\ge 0 \\implies k \\le 9$. Maximum value is 9.',
    solution_ml: 'ഘടകങ്ങളാകാനുള്ള നിബന്ധന $b^2 - 4ac \\ge 0 \\implies 36 - 4k \\ge 0 \\implies k \\le 9$. അതിനാൽ പരമാവധി വില 9 ആണ്.',
    tested_en: 'Maximum parameter value for factorability.',
    tested_ml: 'ഘടകങ്ങളാകാൻ പരമാവധി വില കണ്ടെത്തൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.10.1 Polynomial Functions & Evaluation
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.1',
    concept: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Consider the polynomial $P(x) = 2x^3 - 3x^2 - 11x + 6$.\\n(a) What is the degree of this polynomial?\\n(b) Calculate the values of $P(1)$ and $P(-2)$.\\n(c) Calculate the value of $P(3)$.\\n(d) Based on the above calculations, which of the numbers $1, -2, 3$ are the roots (zeros) of $P(x)$?',
    prompt_ml: '$P(x) = 2x^3 - 3x^2 - 11x + 6$ എന്ന ബഹുപദം പരിഗണിക്കുക.\\n(a) ഈ ബഹുപദത്തിന്റെ കൃതി എത്ര?\\n(b) $P(1), P(-2)$ എന്നിവയുടെ വിലകൾ കണക്കാക്കുക.\\n(c) $P(3)$ ന്റെ വില കാണുക.\\n(d) മേൽക്കണ്ട വിലകളുടെ അടിസ്ഥാനത്തിൽ $1, -2, 3$ എന്നിവയിൽ ഏതെല്ലാമാണ് $P(x)$ ന്റെ മൂലങ്ങൾ (പൂജ്യങ്ങൾ)?',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Degree:</b> The highest exponent of $x$ is 3, so the degree of $P(x)$ is 3.</li>
  <li><b>(b) Evaluate $P(1)$ and $P(-2)$:</b>
    $$\\begin{aligned}
    P(1) &= 2(1)^3 - 3(1)^2 - 11(1) + 6 = 2 - 3 - 11 + 6 = -6 \\\\
    P(-2) &= 2(-2)^3 - 3(-2)^2 - 11(-2) + 6 \\\\
    &= 2(-8) - 3(4) + 22 + 6 = -16 - 12 + 28 = 0
    \\end{aligned}$$
  </li>
  <li><b>(c) Evaluate $P(3)$:</b>
    $$P(3) = 2(3)^3 - 3(3)^2 - 11(3) + 6 = 2(27) - 3(9) - 33 + 6 = 54 - 27 - 33 + 6 = 0$$
  </li>
  <li><b>(d) Identifying Roots:</b>
    Since $P(-2) = 0$ and $P(3) = 0$, both $-2$ and $3$ are roots of $P(x)$. Since $P(1) = -6 \\ne 0$, $1$ is not a root.
  </li>
</ol>
<p><b>Final Answer:</b> (a) Degree 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0; (d) -2 and 3 are roots</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Stating degree correctly: 1 mark</li>
  <li>Evaluating P(1) and P(-2): 1 mark</li>
  <li>Evaluating P(3): 1 mark</li>
  <li>Identifying roots with justification: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) കൃതി:</b> $x$ ന്റെ ഏറ്റവും ഉയർന്ന കൃത്യങ്കം 3 ആയതിനാൽ കൃതി 3 ആണ്.</li>
  <li><b>(b) $P(1), P(-2)$ കണക്കാക്കൽ:</b>
    $$\\begin{aligned}
    P(1) &= 2(1)^3 - 3(1)^2 - 11(1) + 6 = 2 - 3 - 11 + 6 = -6 \\\\
    P(-2) &= 2(-8) - 3(4) + 22 + 6 = -16 - 12 + 28 = 0
    \\end{aligned}$$
  </li>
  <li><b>(c) $P(3)$ കണക്കാക്കൽ:</b>
    $$P(3) = 2(27) - 3(9) - 33 + 6 = 54 - 27 - 33 + 6 = 0$$
  </li>
  <li><b>(d) മൂലങ്ങൾ കണ്ടെത്തൽ:</b>
    $P(-2) = 0, P(3) = 0$ ആയതിനാൽ $-2, 3$ എന്നിവ മൂലങ്ങളാണ്. $P(1) \\ne 0$ ആയതിനാൽ $1$ ഒരു മൂലമല്ല.
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) കൃതി 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0; (d) -2 ഉം 3 ഉം മൂലങ്ങളാണ്</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>കൃതി ശരിയായി എഴുതൽ: 1 മാർക്ക്</li>
  <li>P(1), P(-2) കണക്കാക്കൽ: 1 മാർക്ക്</li>
  <li>P(3) കാണൽ: 1 മാർക്ക്</li>
  <li>കാരണം സഹിതം മൂലങ്ങൾ വ്യക്തമാക്കൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Identify highest exponent: Degree is 3.',
      'Evaluate P(1) = 2 - 3 - 11 + 6 = -6.',
      'Evaluate P(-2) = -16 - 12 + 22 + 6 = 0.',
      'Evaluate P(3) = 54 - 27 - 33 + 6 = 0.',
      'Conclude that -2 and 3 are roots because P(-2) = 0 and P(3) = 0.'
    ],
    steps_ml: [
      'ഏറ്റവും ഉയർന്ന കൃതി കണ്ടെത്തൽ: കൃതി 3.',
      '$P(1) = 2 - 3 - 11 + 6 = -6$ എന്ന് കണക്കാക്കൽ.',
      '$P(-2) = -16 - 12 + 22 + 6 = 0$ എന്ന് കണ്ടെത്തൽ.',
      '$P(3) = 54 - 27 - 33 + 6 = 0$ എന്ന് കണ്ടെത്തൽ.',
      '$P(-2) = 0, P(3) = 0$ ആയതിനാൽ $-2, 3$ എന്നിവ മൂലങ്ങളാണെന്ന് നിഗമനത്തിലെത്തൽ.'
    ],
    rubric_en: [
      'Stating degree correctly: 1 mark',
      'Evaluating P(1) and P(-2): 1 mark',
      'Evaluating P(3): 1 mark',
      'Identifying roots with justification: 1 mark'
    ],
    rubric_ml: [
      'കൃതി ശരിയായി എഴുതൽ: 1 മാർക്ക്',
      'P(1), P(-2) കണക്കാക്കൽ: 1 മാർക്ക്',
      'P(3) കാണൽ: 1 മാർക്ക്',
      'കാരണം സഹിതം മൂലങ്ങൾ വ്യക്തമാക്കൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) Degree 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0; (d) -2 and 3 are roots',
    answer_ml: '(a) കൃതി 3; (b) P(1) = -6, P(-2) = 0; (c) P(3) = 0; (d) -2 ഉം 3 ഉം മൂലങ്ങളാണ്'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.2 Remainder Theorem: Subtraction to Get Factors
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.2',
    concept: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Consider the polynomial $P(x) = x^2 - 3x + 5$.\\n(a) Find the remainder when $P(x)$ is divided by $(x - 4)$.\\n(b) What number must be subtracted from $P(x)$ to get a polynomial for which $(x - 4)$ is a factor?\\n(c) Find the second first-degree factor of the resulting polynomial.\\n(d) What number must be subtracted from $P(x)$ to get a polynomial for which $(x + 4)$ is a factor?',
    prompt_ml: '$P(x) = x^2 - 3x + 5$ എന്ന ബഹുപദം പരിഗണിക്കുക.\\n(a) $P(x)$ നെ $(x - 4)$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം കാണുക.\\n(b) $(x - 4)$ ഒരു ഘടകമായി ലഭിക്കാൻ $P(x)$ ൽ നിന്ന് ഏത് സംഖ്യ കുറയ്ക്കണം?\\n(c) അങ്ങനെ കുറച്ചു കിട്ടുന്ന ബഹുപദത്തിന്റെ രണ്ടാമത്തെ ഒന്നാംകൃതി ഘടകം ഏത്?\\n(d) $(x + 4)$ ഒരു ഘടകമായി ലഭിക്കാൻ $P(x)$ ൽ നിന്ന് ഏത് സംഖ്യ കുറയ്ക്കണം?',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Remainder for $(x - 4)$:</b>
    By the Remainder Theorem, the remainder is:
    $$P(4) = 4^2 - 3(4) + 5 = 16 - 12 + 5 = 9$$
  </li>
  <li><b>(b) Number to Subtract:</b>
    Since $P(x) - P(4)$ is always divisible by $(x - 4)$, subtracting $9$ leaves remainder 0:
    $$P(x) - 9 = x^2 - 3x + 5 - 9 = x^2 - 3x - 4$$
    The number to be subtracted is <b>9</b>.
  </li>
  <li><b>(c) Second Factor:</b>
    Factoring $x^2 - 3x - 4$:
    $$x^2 - 3x - 4 = (x - 4)(x + 1)$$
    The second factor is <b>$(x + 1)$</b>.
  </li>
  <li><b>(d) For Factor $(x + 4)$:</b>
    Evaluate $P(-4)$:
    $$P(-4) = (-4)^2 - 3(-4) + 5 = 16 + 12 + 5 = 33$$
    The number to be subtracted is <b>33</b>.
  </li>
</ol>
<p><b>Final Answer:</b> (a) Remainder = 9; (b) Subtract 9; (c) Second factor is (x + 1); (d) Subtract 33</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Remainder computation P(4): 1 mark</li>
  <li>Number to subtract and modified polynomial: 1 mark</li>
  <li>Factoring to find (x + 1): 1 mark</li>
  <li>Evaluating P(-4) = 33: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) $(x - 4)$ കൊണ്ടുളള ശിഷ്ടം:</b>
    ശിഷ്ട സിദ്ധാന്തപ്രകാരം ശിഷ്ടം:
    $$P(4) = 4^2 - 3(4) + 5 = 16 - 12 + 5 = 9$$
  </li>
  <li><b>(b) കുറയ്ക്കേണ്ട സംഖ്യ:</b>
    $P(x) - P(4)$ ന്റെ ഘടകമാണ് $(x - 4)$ എന്നതിനാൽ, $9$ കുറച്ചാൽ ശിഷ്ടം പൂജ്യമാകും:
    $$P(x) - 9 = x^2 - 3x + 5 - 9 = x^2 - 3x - 4$$
    കുറയ്ക്കേണ്ട സംഖ്യ <b>9</b> ആണ്.
  </li>
  <li><b>(c) രണ്ടാമത്തെ ഘടകം:</b>
    $$x^2 - 3x - 4 = (x - 4)(x + 1)$$
    രണ്ടാമത്തെ ഒന്നാംകൃതി ഘടകം <b>$(x + 1)$</b> ആണ്.
  </li>
  <li><b>(d) $(x + 4)$ ഘടകമാകാൻ കുറയ്ക്കേണ്ട സംഖ്യ:</b>
    $$P(-4) = (-4)^2 - 3(-4) + 5 = 16 + 12 + 5 = 33$$
    കുറയ്ക്കേണ്ട സംഖ്യ <b>33</b> ആണ്.
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) ശിഷ്ടം = 9; (b) കുറയ്ക്കേണ്ട സംഖ്യ 9; (c) രണ്ടാമത്തെ ഘടകം (x + 1); (d) കുറയ്ക്കേണ്ട സംഖ്യ 33</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>P(4) കണ്ട് ശിഷ്ടം കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>കുറയ്ക്കേണ്ട സംഖ്യ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>(x + 1) എന്ന ഘടകം കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>P(-4) കണ്ട് 33 കണ്ടെത്തൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Compute P(4) = 16 - 12 + 5 = 9.',
      'State that 9 must be subtracted from P(x) so that (x - 4) is a factor.',
      'Factor the resulting polynomial x^2 - 3x - 4 = (x - 4)(x + 1) to find second factor (x + 1).',
      'Compute P(-4) = 16 + 12 + 5 = 33 to find the number to subtract for (x + 4).'
    ],
    steps_ml: [
      '$P(4) = 16 - 12 + 5 = 9$ എന്ന് കണ്ടെത്തൽ.',
      '$(x - 4)$ ഘടകമാകാൻ $9$ കുറയ്ക്കണമെന്ന് വ്യക്തമാക്കൽ.',
      '$x^2 - 3x - 4 = (x - 4)(x + 1)$ എന്ന് ഘടകങ്ങളാക്കി രണ്ടാമത്തെ ഘടകം $(x + 1)$ എന്ന് കണ്ടെത്തൽ.',
      '$P(-4) = 16 + 12 + 5 = 33$ എന്ന് കണ്ട് $(x + 4)$ ന് കുറയ്ക്കേണ്ട സംഖ്യ കണ്ടെത്തൽ.'
    ],
    rubric_en: [
      'Remainder computation P(4): 1 mark',
      'Number to subtract and modified polynomial: 1 mark',
      'Factoring to find (x + 1): 1 mark',
      'Evaluating P(-4) = 33: 1 mark'
    ],
    rubric_ml: [
      'P(4) കണ്ട് ശിഷ്ടം കണ്ടെത്തൽ: 1 മാർക്ക്',
      'കുറയ്ക്കേണ്ട സംഖ്യ കണ്ടെത്തൽ: 1 മാർക്ക്',
      '(x + 1) എന്ന ഘടകം കണ്ടെത്തൽ: 1 മാർക്ക്',
      'P(-4) കണ്ട് 33 കണ്ടെത്തൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) Remainder = 9; (b) Subtract 9; (c) Second factor is (x + 1); (d) Subtract 33',
    answer_ml: '(a) ശിഷ്ടം = 9; (b) കുറയ്ക്കേണ്ട സംഖ്യ 9; (c) രണ്ടാമത്തെ ഘടകം (x + 1); (d) കുറയ്ക്കേണ്ട സംഖ്യ 33'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.3 Unknown Coefficients via Factor Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.3',
    concept: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: '(a) In the polynomial $P(x) = x^2 + kx + 6$, what number must be taken as $k$ to get a polynomial for which $(x - 1)$ is a factor?\\n(b) For this value of $k$, find the other first-degree factor of $P(x)$.\\n(c) In the polynomial $Q(x) = kx^2 + 2x - 5$, what number must be taken as $k$ so that $(x - 1)$ is a factor?',
    prompt_ml: '(a) $P(x) = x^2 + kx + 6$ എന്ന ബഹുപദത്തിന്റെ ഒരു ഘടകമായി $(x - 1)$ ലഭിക്കാൻ $k$ ക്ക് ഏത് വില നൽകണം?\\n(b) ഈ $k$ യുടെ വിലയ്ക്ക് $P(x)$ ന്റെ മറ്റേ ഒന്നാംകൃതി ഘടകം കണ്ടെത്തുക.\\n(c) $Q(x) = kx^2 + 2x - 5$ എന്ന ബഹുപദത്തിന് $(x - 1)$ ഒരു ഘടകമാകണമെങ്കിൽ $k$ യുടെ വില എന്തായിരിക്കണം?',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Finding $k$ in $P(x)$:</b>
    By the Factor Theorem, $(x - 1)$ is a factor $\\implies P(1) = 0$.
    $$1^2 + k(1) + 6 = 0 \\implies 1 + k + 6 = 0 \\implies k + 7 = 0 \\implies k = -7$$
  </li>
  <li><b>(b) Finding the Other Factor:</b>
    Substituting $k = -7$ gives:
    $$P(x) = x^2 - 7x + 6 = (x - 1)(x - 6)$$
    The other factor is <b>$(x - 6)$</b>.
  </li>
  <li><b>(c) Finding $k$ in $Q(x)$:</b>
    $(x - 1)$ is a factor of $Q(x) \\implies Q(1) = 0$.
    $$k(1)^2 + 2(1) - 5 = 0 \\implies k + 2 - 5 = 0 \\implies k - 3 = 0 \\implies k = 3$$
  </li>
</ol>
<p><b>Final Answer:</b> (a) k = -7; (b) Other factor is (x - 6); (c) k = 3</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Applying P(1) = 0 and solving k = -7: 1.5 marks</li>
  <li>Factoring to find (x - 6): 1 mark</li>
  <li>Applying Q(1) = 0 and solving k = 3: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) $P(x)$ ലെ $k$ കണ്ടെത്തൽ:</b>
    ഘടക സിദ്ധാന്തപ്രകാരം $(x - 1)$ ഘടകമായാൽ $P(1) = 0$ ആയിരിക്കും.
    $$1^2 + k(1) + 6 = 0 \\implies k + 7 = 0 \\implies k = -7$$
  </li>
  <li><b>(b) മറ്റേ ഘടകം കണ്ടെത്തൽ:</b>
    $k = -7$ നൽകുമ്പോൾ:
    $$P(x) = x^2 - 7x + 6 = (x - 1)(x - 6)$$
    മറ്റേ ഘടകം <b>$(x - 6)$</b> ആണ്.
  </li>
  <li><b>(c) $Q(x)$ ലെ $k$ കണ്ടെത്തൽ:</b>
    $Q(1) = 0$:
    $$k(1)^2 + 2(1) - 5 = 0 \\implies k - 3 = 0 \\implies k = 3$$
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) k = -7; (b) മറ്റേ ഘടകം (x - 6); (c) k = 3</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>P(1) = 0 പ്രയോഗിച്ച് k = -7 കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
  <li>ഘടകമാക്കി (x - 6) കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>Q(1) = 0 പ്രയോഗിച്ച് k = 3 കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Set P(1) = 0: 1 + k + 6 = 0 gives k = -7.',
      'Substitute k = -7: x^2 - 7x + 6 = (x - 1)(x - 6).',
      'Set Q(1) = 0: k + 2 - 5 = 0 gives k = 3.'
    ],
    steps_ml: [
      '$P(1) = 0$: $1 + k + 6 = 0 \\implies k = -7$.',
      '$k = -7$ നൽകി $x^2 - 7x + 6 = (x - 1)(x - 6)$ എന്ന് ഘടകങ്ങളാക്കൽ.',
      '$Q(1) = 0$: $k + 2 - 5 = 0 \\implies k = 3$.'
    ],
    rubric_en: [
      'Applying P(1) = 0 and solving k = -7: 1.5 marks',
      'Factoring to find (x - 6): 1 mark',
      'Applying Q(1) = 0 and solving k = 3: 1.5 marks'
    ],
    rubric_ml: [
      'P(1) = 0 പ്രയോഗിച്ച് k = -7 കണ്ടെത്തൽ: 1.5 മാർക്ക്',
      'ഘടകമാക്കി (x - 6) കണ്ടെത്തൽ: 1 മാർക്ക്',
      'Q(1) = 0 പ്രയോഗിച്ച് k = 3 കണ്ടെത്തൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) k = -7; (b) Other factor is (x - 6); (c) k = 3',
    answer_ml: '(a) k = -7; (b) മറ്റേ ഘടകം (x - 6); (c) k = 3'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.4 Factoring Quadratic Trinomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.4',
    concept: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Write each of the following second-degree polynomials as the product of two first-degree polynomials:\\n(a) $P(x) = x^2 - 20x + 91$\\n(b) $Q(x) = 4x^2 - 16x + 15$\\n(c) Hence, find the solutions of the equation $4x^2 - 16x + 15 = 0$.',
    prompt_ml: 'താഴെ പറയുന്ന ഓരോ രണ്ടാംകൃതി ബഹുപദങ്ങളെയും രണ്ട് ഒന്നാംകൃതി ബഹുപദങ്ങളുടെ ഗുണനഫലമായി എഴുതുക:\\n(a) $P(x) = x^2 - 20x + 91$\\n(b) $Q(x) = 4x^2 - 16x + 15$\\n(c) ഇതിൽ നിന്ന് $4x^2 - 16x + 15 = 0$ എന്ന സമവാക്യത്തിന്റെ പരിഹാരങ്ങൾ കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Factoring $x^2 - 20x + 91$:</b>
    We need two numbers with sum $-20$ and product $91$.
    Testing factors of $91$: $91 = 7 \\times 13$.
    Sum of $-7$ and $-13$ is $-20$.
    $$x^2 - 20x + 91 = (x - 7)(x - 13)$$
  </li>
  <li><b>(b) Factoring $4x^2 - 16x + 15$:</b>
    Here $a = 4, b = -16, c = 15$.
    Product $ac = 4 \\times 15 = 60$, sum $b = -16$.
    Two numbers with product $60$ and sum $-16$ are $-10$ and $-6$.
    $$\\begin{aligned}
    4x^2 - 16x + 15 &= 4x^2 - 10x - 6x + 15 \\\\
    &= 2x(2x - 5) - 3(2x - 5) \\\\
    &= (2x - 5)(2x - 3)
    \\end{aligned}$$
  </li>
  <li><b>(c) Solving $4x^2 - 16x + 15 = 0$:</b>
    $$(2x - 5)(2x - 3) = 0 \\implies 2x - 5 = 0 \\text{ or } 2x - 3 = 0$$
    $$x = \\frac{5}{2} = 2.5 \\quad \\text{or} \\quad x = \\frac{3}{2} = 1.5$$
  </li>
</ol>
<p><b>Final Answer:</b> (a) (x - 7)(x - 13); (b) (2x - 5)(2x - 3); (c) x = 5/2, x = 3/2</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Factoring x² - 20x + 91: 1.5 marks</li>
  <li>Factoring 4x² - 16x + 15: 1.5 marks</li>
  <li>Stating roots from factors: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) $x^2 - 20x + 91$ ന്റെ ഘടകക്രിയ:</b>
    തുക $-20$ ഉം ഗുണനഫലം $91$ ഉം ആയ സംഖ്യകൾ $-7, -13$ ആണ് ($7 \\times 13 = 91$).
    $$x^2 - 20x + 91 = (x - 7)(x - 13)$$
  </li>
  <li><b>(b) $4x^2 - 16x + 15$ ന്റെ ഘടകക്രിയ:</b>
    $ac = 4 \\times 15 = 60$. തുക $-16$ ഉം ഗുണനഫലം $60$ ഉം ആയ സംഖ്യകൾ $-10, -6$ ആണ്.
    $$\\begin{aligned}
    4x^2 - 16x + 15 &= 4x^2 - 10x - 6x + 15 \\\\
    &= 2x(2x - 5) - 3(2x - 5) \\\\
    &= (2x - 5)(2x - 3)
    \\end{aligned}$$
  </li>
  <li><b>(c) $4x^2 - 16x + 15 = 0$ ന്റെ പരിഹാരങ്ങൾ:</b>
    $$(2x - 5)(2x - 3) = 0 \\implies x = \\frac{5}{2}, \\quad x = \\frac{3}{2}$$
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) (x - 7)(x - 13); (b) (2x - 5)(2x - 3); (c) x = 5/2, x = 3/2</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>x² - 20x + 91 ഘടകമാക്കൽ: 1.5 മാർക്ക്</li>
  <li>4x² - 16x + 15 ഘടകമാക്കൽ: 1.5 മാർക്ക്</li>
  <li>മൂലങ്ങൾ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Identify numbers -7 and -13 to factor x^2 - 20x + 91 = (x - 7)(x - 13).',
      'Split middle term: 4x^2 - 10x - 6x + 15 = 2x(2x - 5) - 3(2x - 5) = (2x - 5)(2x - 3).',
      'Set each factor to zero to obtain roots x = 5/2 and x = 3/2.'
    ],
    steps_ml: [
      '$-7, -13$ സംഖ്യകൾ കണ്ടെത്തി $x^2 - 20x + 91 = (x - 7)(x - 13)$ എന്ന് എഴുതൽ.',
      'നടുവിലെ പദം വിഭജിച്ച് $4x^2 - 16x + 15 = (2x - 5)(2x - 3)$ എന്ന് ഘടകങ്ങളാക്കൽ.',
      'ഘടകങ്ങൾ പൂജ്യമാക്കി $x = 5/2, x = 3/2$ എന്നീ മൂലങ്ങൾ കണ്ടെത്തൽ.'
    ],
    rubric_en: [
      'Factoring x² - 20x + 91: 1.5 marks',
      'Factoring 4x² - 16x + 15: 1.5 marks',
      'Stating roots from factors: 1 mark'
    ],
    rubric_ml: [
      'x² - 20x + 91 ഘടകമാക്കൽ: 1.5 മാർക്ക്',
      '4x² - 16x + 15 ഘടകമാക്കൽ: 1.5 മാർക്ക്',
      'മൂലങ്ങൾ കണ്ടെത്തൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) (x - 7)(x - 13); (b) (2x - 5)(2x - 3); (c) x = 5/2, x = 3/2',
    answer_ml: '(a) (x - 7)(x - 13); (b) (2x - 5)(2x - 3); (c) x = 5/2, x = 3/2'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.5 Complete Factorization of Cubic Polynomial
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.5',
    concept: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Consider the third-degree polynomial $P(x) = x^3 - 6x^2 + 11x - 6$.\\n(a) Show that $(x - 1)$ is a factor of $P(x)$.\\n(b) Divide $P(x)$ by $(x - 1)$ to find the second-degree quotient polynomial $Q(x)$.\\n(c) Factorize $Q(x)$ into two first-degree factors.\\n(d) Write $P(x)$ as the product of three first-degree polynomials.',
    prompt_ml: '$P(x) = x^3 - 6x^2 + 11x - 6$ എന്ന മൂന്നാംകൃതി ബഹുപദം പരിഗണിക്കുക.\\n(a) $(x - 1)$ എന്നത് $P(x)$ ന്റെ ഒരു ഘടകമാണെന്ന് കാണിക്കുക.\\n(b) $P(x)$ നെ $(x - 1)$ കൊണ്ട് ഹരിച്ച് രണ്ടാംകൃതി ബഹുപദമായ $Q(x)$ കണ്ടെത്തുക.\\n(c) $Q(x)$ നെ രണ്ട് ഒന്നാംകൃതി ഘടകങ്ങളാക്കുക.\\n(d) $P(x)$ നെ മൂന്ന് ഒന്നാംകൃതി ഘടകങ്ങളുടെ ഗുണനഫലമായി എഴുതുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Verify $(x - 1)$ is a factor:</b>
    $$P(1) = 1^3 - 6(1)^2 + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$$
    Since $P(1) = 0$, by the Factor Theorem $(x - 1)$ is a factor of $P(x)$.
  </li>
  <li><b>(b) Finding Quotient $Q(x)$:</b>
    Divide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$:
    $$\\begin{aligned}
    x^3 - 6x^2 + 11x - 6 &= x^2(x - 1) - 5x(x - 1) + 6(x - 1) \\\\
    &= (x - 1)(x^2 - 5x + 6)
    \\end{aligned}$$
    Thus, quotient $Q(x) = x^2 - 5x + 6$.
  </li>
  <li><b>(c) Factorizing $Q(x)$:</b>
    $$x^2 - 5x + 6 = (x - 2)(x - 3)$$
  </li>
  <li><b>(d) Complete Factorization:</b>
    $$P(x) = (x - 1)(x - 2)(x - 3)$$
  </li>
</ol>
<p><b>Final Answer:</b> (a) P(1) = 0, so (x - 1) is a factor; (b) Q(x) = x² - 5x + 6; (c) (x - 2)(x - 3); (d) P(x) = (x - 1)(x - 2)(x - 3)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Proving P(1) = 0: 1 mark</li>
  <li>Division yielding quotient Q(x): 1 mark</li>
  <li>Factorizing Q(x): 1 mark</li>
  <li>Stating full product form: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) $(x - 1)$ ഒരു ഘടകമാണെന്ന് തെളിയിക്കൽ:</b>
    $$P(1) = 1 - 6 + 11 - 6 = 0$$
    $P(1) = 0$ ആയതിനാൽ ഘടക സിദ്ധാന്തപ്രകാരം $(x - 1)$ ഒരു ഘടകമാണ്.
  </li>
  <li><b>(b) ഹരണഫലം $Q(x)$ കണ്ടെത്തൽ:</b>
    $P(x)$ നെ $(x - 1)$ കൊണ്ട് ഹരിച്ചാൽ:
    $$x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$$
    അതിനാൽ രണ്ടാംകൃതി ബഹുപദം $Q(x) = x^2 - 5x + 6$.
  </li>
  <li><b>(c) $Q(x)$ ന്റെ ഘടകക്രിയ:</b>
    $$x^2 - 5x + 6 = (x - 2)(x - 3)$$
  </li>
  <li><b>(d) പൂർണ്ണ ഘടക രൂപം:</b>
    $$P(x) = (x - 1)(x - 2)(x - 3)$$
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) P(1) = 0, അതിനാൽ (x - 1) ഘടകമാണ്; (b) Q(x) = x² - 5x + 6; (c) (x - 2)(x - 3); (d) P(x) = (x - 1)(x - 2)(x - 3)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>P(1) = 0 എന്ന് തെളിയിക്കൽ: 1 മാർക്ക്</li>
  <li>ഹരിച്ച് Q(x) കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>Q(x) ഘടകമാക്കൽ: 1 മാർക്ക്</li>
  <li>പൂർണ്ണ രൂപം എഴുതൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Show P(1) = 1 - 6 + 11 - 6 = 0, confirming (x - 1) is a factor.',
      'Divide by (x - 1) to obtain quotient Q(x) = x^2 - 5x + 6.',
      'Factorize Q(x) as (x - 2)(x - 3).',
      'Write complete factorization P(x) = (x - 1)(x - 2)(x - 3).'
    ],
    steps_ml: [
      '$P(1) = 1 - 6 + 11 - 6 = 0$ എന്ന് കണ്ട് $(x - 1)$ ഘടകമാണെന്ന് തെളിയിക്കൽ.',
      '$(x - 1)$ കൊണ്ട് ഹരിച്ച് $Q(x) = x^2 - 5x + 6$ എന്ന് കണ്ടെത്തൽ.',
      '$Q(x)$ നെ $(x - 2)(x - 3)$ എന്ന് ഘടകങ്ങളാക്കൽ.',
      '$P(x) = (x - 1)(x - 2)(x - 3)$ എന്ന് പൂർണ്ണമായി എഴുതൽ.'
    ],
    rubric_en: [
      'Proving P(1) = 0: 1 mark',
      'Division yielding quotient Q(x): 1 mark',
      'Factorizing Q(x): 1 mark',
      'Stating full product form: 1 mark'
    ],
    rubric_ml: [
      'P(1) = 0 എന്ന് തെളിയിക്കൽ: 1 മാർക്ക്',
      'ഹരിച്ച് Q(x) കണ്ടെത്തൽ: 1 മാർക്ക്',
      'Q(x) ഘടകമാക്കൽ: 1 മാർക്ക്',
      'പൂർണ്ണ രൂപം എഴുതൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) P(1) = 0, so (x - 1) is a factor; (b) Q(x) = x² - 5x + 6; (c) (x - 2)(x - 3); (d) P(x) = (x - 1)(x - 2)(x - 3)',
    answer_ml: '(a) P(1) = 0, അതിനാൽ (x - 1) ഘടകമാണ്; (b) Q(x) = x² - 5x + 6; (c) (x - 2)(x - 3); (d) P(x) = (x - 1)(x - 2)(x - 3)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.6 Constructing Polynomials & Factorability Conditions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.10.6',
    concept: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: '(a) A second-degree polynomial $P(x)$ has roots $4$ and $-1$, and satisfies $P(2) = -12$. Determine the polynomial $P(x)$ in standard form $ax^2 + bx + c$.\\n(b) In the polynomial $R(x) = x^2 + 4x + k$, up to what value can $k$ be taken so that $R(x)$ can be factored into two first-degree polynomials with real coefficients?\\n(c) Prove that the polynomial $x^2 + x + 1$ cannot be factored into a product of first-degree polynomials.',
    prompt_ml: '(a) ഒരു രണ്ടാംകൃതി ബഹുപദം $P(x)$ ന്റെ മൂലങ്ങൾ $4$ ഉം $-1$ ഉം ആണ്; കൂടാതെ $P(2) = -12$ ആണ്. $P(x)$ നെ $ax^2 + bx + c$ എന്ന സാധാരണ രൂപത്തിൽ കണ്ടെത്തുക.\\n(b) $R(x) = x^2 + 4x + k$ എന്ന ബഹുപദത്തെ രണ്ട് ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ $k$ ക്ക് പരമാവധി എത്ര വരെ വില നൽകാം?\\n(c) $x^2 + x + 1$ എന്ന ബഹുപദത്തെ ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ കഴിയില്ലെന്ന് തെളിയിക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Constructing $P(x)$:</b>
    Roots are $4$ and $-1$, so factors are $(x - 4)$ and $(x + 1)$:
    $$P(x) = c(x - 4)(x + 1)$$
    Given $P(2) = -12$:
    $$c(2 - 4)(2 + 1) = -12 \\implies c(-2)(3) = -12 \\implies -6c = -12 \\implies c = 2$$
    Standard form:
    $$P(x) = 2(x^2 - 3x - 4) = 2x^2 - 6x - 8$$
  </li>
  <li><b>(b) Condition on $k$ for $R(x)$:</b>
    For $x^2 + 4x + k$ to be factorable over the reals, the discriminant must be non-negative:
    $$b^2 - 4ac \\ge 0 \\implies 4^2 - 4(1)(k) \\ge 0 \\implies 16 - 4k \\ge 0 \\implies 4k \\le 16 \\implies k \\le 4$$
    Thus, $k$ can be taken up to <b>4</b>.
  </li>
  <li><b>(c) Non-factorability of $x^2 + x + 1$:</b>
    Here $a = 1, b = 1, c = 1$.
    Discriminant $b^2 - 4ac = 1^2 - 4(1)(1) = 1 - 4 = -3 < 0$.
    Since the discriminant is negative, $x^2 + x + 1 = 0$ has no real roots, meaning it cannot be written as a product of real first-degree polynomials.
  </li>
</ol>
<p><b>Final Answer:</b> (a) P(x) = 2x² - 6x - 8; (b) Up to k = 4; (c) Discriminant = -3 < 0, so no real factors</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Finding multiplier c = 2 and P(x): 1.5 marks</li>
  <li>Condition b² - 4ac ≥ 0 yielding k ≤ 4: 1.5 marks</li>
  <li>Discriminant evaluation showing -3 < 0: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) $P(x)$ നിർമ്മിക്കൽ:</b>
    മൂലങ്ങൾ $4$ ഉം $-1$ ഉം ആയതിനാൽ ഘടകങ്ങൾ $(x - 4), (x + 1)$ ആണ്:
    $$P(x) = c(x - 4)(x + 1)$$
    $P(2) = -12$ എന്ന വ്യവസ്ഥ നൽകിയാൽ:
    $$c(2 - 4)(2 + 1) = -12 \\implies -6c = -12 \\implies c = 2$$
    ബഹുപദ രൂപം:
    $$P(x) = 2(x^2 - 3x - 4) = 2x^2 - 6x - 8$$
  </li>
  <li><b>(b) $k$ യുടെ പരമാവധി വില:</b>
    $x^2 + 4x + k$ ഘടകങ്ങളാകാൻ വിവേചകം പൂജ്യമോ പോസിറ്റീവോ ആകണം:
    $$b^2 - 4ac \\ge 0 \\implies 16 - 4k \\ge 0 \\implies 4k \\le 16 \\implies k \\le 4$$
    അതിനാൽ $k$ ക്ക് പരമാവധി <b>4</b> വരെ വില നൽകാം.
  </li>
  <li><b>(c) $x^2 + x + 1$ ഘടകങ്ങളാക്കാൻ കഴിയില്ലെന്ന് തെളിയിക്കൽ:</b>
    ഇവിടെ $a = 1, b = 1, c = 1$.
    വിവേചകം $b^2 - 4ac = 1^2 - 4(1)(1) = 1 - 4 = -3 < 0$.
    വിവേചകം പൂജ്യത്തേക്കാൾ കുറവായതിനാൽ ഇതിന് യഥാർത്ഥ മൂലങ്ങൾ ഇല്ല, ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ കഴിയില്ല.
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) P(x) = 2x² - 6x - 8; (b) പരമാവധി k = 4; (c) വിവേചകം = -3 < 0 ആയതിനാൽ ഘടകങ്ങളില്ല</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>c = 2 കണ്ട് P(x) കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
  <li>വിവേചകം ഉപയോഗിച്ച് k ≤ 4 കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
  <li>വിവേചകം -3 < 0 എന്ന് തെളിയിക്കൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Write P(x) = c(x - 4)(x + 1) and use P(2) = -12 to find c = 2.',
      'Expand to get standard form P(x) = 2x^2 - 6x - 8.',
      'Set discriminant b^2 - 4ac = 16 - 4k >= 0 to find maximum k = 4.',
      'Compute discriminant for x^2 + x + 1: 1 - 4 = -3 < 0, proving no real factors exist.'
    ],
    steps_ml: [
      '$P(x) = c(x - 4)(x + 1)$ എന്ന് എഴുതി $P(2) = -12$ ഉപയോഗിച്ച് $c = 2$ എന്ന് കണ്ടെത്തൽ.',
      'വിപുലീകരിച്ച് $P(x) = 2x^2 - 6x - 8$ എന്ന് എഴുതൽ.',
      'വിവേചകം $16 - 4k \\ge 0$ പ്രയോഗിച്ച് പരമാവധി വില $k = 4$ എന്ന് കണ്ടെത്തൽ.',
      '$x^2 + x + 1$ ന്റെ വിവേചകം $-3 < 0$ ആയതിനാൽ യഥാർത്ഥ ഘടകങ്ങളില്ലെന്ന് തെളിയിക്കൽ.'
    ],
    rubric_en: [
      'Finding multiplier c = 2 and P(x): 1.5 marks',
      'Condition b² - 4ac ≥ 0 yielding k ≤ 4: 1.5 marks',
      'Discriminant evaluation showing -3 < 0: 1 mark'
    ],
    rubric_ml: [
      'c = 2 കണ്ട് P(x) കണ്ടെത്തൽ: 1.5 മാർക്ക്',
      'വിവേചകം ഉപയോഗിച്ച് k ≤ 4 കണ്ടെത്തൽ: 1.5 മാർക്ക്',
      'വിവേചകം -3 < 0 എന്ന് തെളിയിക്കൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) P(x) = 2x² - 6x - 8; (b) Up to k = 4; (c) Discriminant = -3 < 0, so no real factors',
    answer_ml: '(a) P(x) = 2x² - 6x - 8; (b) പരമാവധി k = 4; (c) വിവേചകം = -3 < 0 ആയതിനാൽ ഘടകങ്ങളില്ല'
  }
);
