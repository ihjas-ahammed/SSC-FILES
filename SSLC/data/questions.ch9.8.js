/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 8: Polynomials (ബഹുപദങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.8.1 Algebraic Expressions and Concept of Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.1',
    concept: 'm9.8.1.algebraic-expressions-and-polynomials',
    sec: '9.8.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following algebraic expressions is strictly a polynomial?',
    prompt_ml: 'താഴെ പറയുന്ന ബീജഗണിത വാക്യങ്ങളിൽ കൃത്യമായും ഒരു ബഹുപദം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$3x^2 - \\sqrt{5}x + 8$' },
      { k: 'B', t: '$2x^2 + \\frac{3}{x} - 1$' },
      { k: 'C', t: '$5\\sqrt{x} + 4x - 7$' },
      { k: 'D', t: '$x^{-2} + 3x + 1$' }
    ],
    options_ml: [
      { k: 'A', t: '$3x^2 - \\sqrt{5}x + 8$' },
      { k: 'B', t: '$2x^2 + \\frac{3}{x} - 1$' },
      { k: 'C', t: '$5\\sqrt{x} + 4x - 7$' },
      { k: 'D', t: '$x^{-2} + 3x + 1$' }
    ],
    answer: 'A',
    solution_en: 'In option A, all exponents of $x$ (2, 1, 0) are non-negative integers. In option B, $\\frac{3}{x} = 3x^{-1}$ (negative power). In option C, $\\sqrt{x} = x^{1/2}$ (fractional power). In D, $x^{-2}$ is negative.',
    solution_ml: 'ഓപ്ഷൻ A-യിൽ $x$-ന്റെ എല്ലാ ഘാതങ്ങളും അഖണ്ഡസംഖ്യകളാണ് (2, 1, 0). മറ്റ് ഓപ്ഷനുകളിൽ ഋണ ഘാതമോ ഭിന്നസംഖ്യാ ഘാതമോ വരുന്നു.',
    tested_en: 'Identifying valid polynomials by checking exponents.',
    tested_ml: 'ഘാതങ്ങൾ പരിശോധിച്ച് ബഹുപദം തിരിച്ചറിയൽ.'
  },
  {
    id: 'obj.m9.8.2',
    concept: 'm9.8.1.algebraic-expressions-and-polynomials',
    sec: '9.8.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the coefficient of $x^2$ in the polynomial $p(x) = 5 - 3x + 7x^2 - 2x^3$?',
    prompt_ml: '$p(x) = 5 - 3x + 7x^2 - 2x^3$ എന്ന ബഹുപദത്തിലെ $x^2$-ന്റെ ഗുണകം എത്ര?',
    options_en: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$-3$' },
      { k: 'C', t: '$-2$' },
      { k: 'D', t: '$5$' }
    ],
    options_ml: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$-3$' },
      { k: 'C', t: '$-2$' },
      { k: 'D', t: '$5$' }
    ],
    answer: 'A',
    solution_en: 'The term containing $x^2$ is $+7x^2$. The coefficient is $7$.',
    solution_ml: '$x^2$ ഉള്ള പദം $+7x^2$ ആയതിനാൽ ഗുണകം $7$ ആണ്.',
    tested_en: 'Reading coefficients of specific polynomial terms.',
    tested_ml: 'നിർദ്ദിഷ്ട പദത്തിന്റെ ഗുണകം കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.8.2 Degree and Classification of Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.3',
    concept: 'm9.8.2.degree-and-classification',
    sec: '9.8.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the degree of the polynomial $p(x) = (x^2 + 1)(x^3 - 4)$?',
    prompt_ml: '$p(x) = (x^2 + 1)(x^3 - 4)$ എന്ന ബഹുപദത്തിന്റെ കൃതി എത്ര?',
    options_en: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$3$' },
      { k: 'D', t: '$2$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$3$' },
      { k: 'D', t: '$2$' }
    ],
    answer: 'A',
    solution_en: 'The degree of a product of polynomials is the sum of their degrees: $\\deg(p) = 2 + 3 = 5$. Expanded: $x^2 \\times x^3 = x^5$.',
    solution_ml: 'ഗുണനഫലത്തിന്റെ കൃതി കൃതികളുടെ തുകയാണ്: $2 + 3 = 5$.',
    tested_en: 'Degree of polynomial product.',
    tested_ml: 'ഗുണനഫലത്തിന്റെ കൃതി കാണൽ.'
  },
  {
    id: 'obj.m9.8.4',
    concept: 'm9.8.2.degree-and-classification',
    sec: '9.8.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What kind of polynomial is $f(x) = 8x - 3$ according to its degree?',
    prompt_ml: '$f(x) = 8x - 3$ എന്ന ബഹുപദം കൃതി അനുസരിച്ച് ഏത് വിഭാഗത്തിൽപ്പെടുന്നു?',
    options_en: [
      { k: 'A', t: 'Linear polynomial (degree 1)' },
      { k: 'B', t: 'Quadratic polynomial (degree 2)' },
      { k: 'C', t: 'Constant polynomial (degree 0)' },
      { k: 'D', t: 'Cubic polynomial (degree 3)' }
    ],
    options_ml: [
      { k: 'A', t: 'ഒന്നാംകൃതി ബഹുപദം (കൃതി 1)' },
      { k: 'B', t: 'രണ്ടാംകൃതി ബഹുപദം (കൃതി 2)' },
      { k: 'C', t: 'സ്ഥിര ബഹുപദം (കൃതി 0)' },
      { k: 'D', t: 'മൂന്നാംകൃതി ബഹുപദം (കൃതി 3)' }
    ],
    answer: 'A',
    solution_en: 'The highest power of $x$ is 1; therefore it is a linear polynomial of degree 1.',
    solution_ml: '$x$-ന്റെ ഏറ്റവും ഉയർന്ന ഘാതം 1 ആയതിനാൽ ഇത് ഒന്നാംകൃതി ബഹുപദമാണ്.',
    tested_en: 'Classification of polynomials by degree.',
    tested_ml: 'കൃതി അടിസ്ഥാനമാക്കിയുള്ള തരംതിരിവ്.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.8.3 Value of a Polynomial and Zeroes of Polynomials
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.5',
    concept: 'm9.8.3.values-and-zeroes-of-polynomials',
    sec: '9.8.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $p(x) = 3x^2 - 5x + 2$, what is the value of $p(-1)$?',
    prompt_ml: '$p(x) = 3x^2 - 5x + 2$ ആയാൽ $p(-1)$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$0$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$-4$' }
    ],
    options_ml: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$0$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$-4$' }
    ],
    answer: 'A',
    solution_en: '$p(-1) = 3(-1)^2 - 5(-1) + 2 = 3(1) + 5 + 2 = 3 + 5 + 2 = 10$.',
    solution_ml: '$p(-1) = 3(-1)^2 - 5(-1) + 2 = 3 + 5 + 2 = 10$.',
    tested_en: 'Evaluating polynomial at a negative input.',
    tested_ml: 'നെഗറ്റീവ് സംഖ്യയിൽ ബഹുപദത്തിന്റെ വില കാണൽ.'
  },
  {
    id: 'obj.m9.8.6',
    concept: 'm9.8.3.values-and-zeroes-of-polynomials',
    sec: '9.8.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the zero of the linear polynomial $p(x) = 5x + 15$?',
    prompt_ml: '$p(x) = 5x + 15$ എന്ന ഒന്നാംകൃതി ബഹുപദത്തിന്റെ പൂജ്യം എത്ര?',
    options_en: [
      { k: 'A', t: '$-3$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$15$' },
      { k: 'D', t: '$0$' }
    ],
    options_ml: [
      { k: 'A', t: '$-3$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$15$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'A',
    solution_en: 'Set $p(x) = 0 \\implies 5x + 15 = 0 \\implies 5x = -15 \\implies x = -3$.',
    solution_ml: '$5x + 15 = 0 \\implies 5x = -15 \\implies x = -3$.',
    tested_en: 'Finding the zero of a linear polynomial.',
    tested_ml: 'ഒന്നാംകൃതി ബഹുപദത്തിന്റെ പൂജ്യം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.8.4 Operations on Polynomials and Geometric Modeling
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.8.7',
    concept: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    sec: '9.8.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A rectangle has length $(x + 5)\\text{ cm}$ and breadth $(x + 2)\\text{ cm}$. Which polynomial represents its area?',
    prompt_ml: 'ഒരു ചതുരത്തിന്റെ നീളം $(x + 5)\\text{ cm}$-ഉം വീതി $(x + 2)\\text{ cm}$-ഉം ആണ്. അതിന്റെ പരപ്പളവിനെ സൂചിപ്പിക്കുന്ന ബഹുപദം ഏത്?',
    options_en: [
      { k: 'A', t: '$x^2 + 7x + 10$' },
      { k: 'B', t: '$2x + 7$' },
      { k: 'C', t: '$x^2 + 10$' },
      { k: 'D', t: '$4x + 14$' }
    ],
    options_ml: [
      { k: 'A', t: '$x^2 + 7x + 10$' },
      { k: 'B', t: '$2x + 7$' },
      { k: 'C', t: '$x^2 + 10$' },
      { k: 'D', t: '$4x + 14$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = (x + 5)(x + 2) = x(x + 2) + 5(x + 2) = x^2 + 2x + 5x + 10 = x^2 + 7x + 10$.',
    solution_ml: '$\\text{പരപ്പളവ്} = (x + 5)(x + 2) = x^2 + 7x + 10$.',
    tested_en: 'Geometric area polynomial formulation.',
    tested_ml: 'പരപ്പളവിന്റെ ബഹുപദ രൂപം കാണൽ.'
  },
  {
    id: 'obj.m9.8.8',
    concept: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    sec: '9.8.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Subtract $(2x^2 - 3x + 1)$ from $(5x^2 + 4x - 6)$. What is the resulting polynomial?',
    prompt_ml: '$(5x^2 + 4x - 6)$-ൽ നിന്ന് $(2x^2 - 3x + 1)$ കുറച്ചാൽ ലഭിക്കുന്ന ബഹുപദം ഏത്?',
    options_en: [
      { k: 'A', t: '$3x^2 + 7x - 7$' },
      { k: 'B', t: '$3x^2 + x - 5$' },
      { k: 'C', t: '$7x^2 + x - 7$' },
      { k: 'D', t: '$3x^2 - 7x + 7$' }
    ],
    options_ml: [
      { k: 'A', t: '$3x^2 + 7x - 7$' },
      { k: 'B', t: '$3x^2 + x - 5$' },
      { k: 'C', t: '$7x^2 + x - 7$' },
      { k: 'D', t: '$3x^2 - 7x + 7$' }
    ],
    answer: 'A',
    solution_en: '$(5x^2 + 4x - 6) - (2x^2 - 3x + 1) = (5-2)x^2 + (4 - (-3))x + (-6 - 1) = 3x^2 + 7x - 7$.',
    solution_ml: '$(5-2)x^2 + (4+3)x + (-6-1) = 3x^2 + 7x - 7$.',
    tested_en: 'Subtraction of polynomials and sign management.',
    tested_ml: 'ബഹുപദങ്ങളുടെ വ്യവകലനം.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.8.1',
    sec: '9.8.1',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.8.1.algebraic-expressions-and-polynomials',
    tested_en: 'Mathematical justification of polynomial identification based on exponent criteria',
    tested_ml: 'ഘാതങ്ങളുടെ അടിസ്ഥാനത്തിൽ ബഹുപദങ്ങൾ തിരിച്ചറിയലും കാരണസഹിതമുള്ള വിശദീകരണവും',
    title_en: 'Polynomial Identification and Rigorous Justification',
    title_ml: 'ബഹുപദങ്ങൾ തിരിച്ചറിയലും കാരണസഹിതം സാധൂകരണവും',
    prompt_en: '<p>Examine each of the following algebraic expressions. State with clear mathematical justification whether each expression is a polynomial or not:</p><ol><li>$p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9$</li><li>$q(x) = 2x^2 + \\frac{5}{x} - 3$</li><li>$r(x) = 3\\sqrt{x} + 7x - 1$</li><li>$s(x) = x^4 - \\frac{2}{3}x^2 + 11$</li></ol>',
    prompt_ml: '<p>താഴെ പറയുന്ന ഓരോ ബീജഗണിത വാക്യവും പരിശോധിച്ച് അവ ബഹുപദങ്ങളാണോ അല്ലയോ എന്ന് കൃത്യമായ കാരണങ്ങൾ സഹിതം വ്യക്തമാക്കുക:</p><ol><li>$p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9$</li><li>$q(x) = 2x^2 + \\frac{5}{x} - 3$</li><li>$r(x) = 3\\sqrt{x} + 7x - 1$</li><li>$s(x) = x^4 - \\frac{2}{3}x^2 + 11$</li></ol>',
    solution_en: `$$\\text{1. Analysis of } p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9:$$
$$\\text{The exponents of } x \\text{ are } 3, 2, 1, 0. \\text{ All exponents are non-negative whole numbers.}$$
$$\\text{The coefficient } \\frac{\\sqrt{3}}{2} \\text{ is a valid real number.}$$
$$\\mathbf{\\text{Conclusion: } p(x) \\text{ IS a polynomial.}}$$

$$\\text{2. Analysis of } q(x) = 2x^2 + \\frac{5}{x} - 3:$$
$$\\text{Rewriting the second term: } \\frac{5}{x} = 5x^{-1}.$$
$$\\text{The exponent } -1 \\text{ is a negative integer (not a whole number).}$$
$$\\mathbf{\\text{Conclusion: } q(x) \\text{ is NOT a polynomial.}}$$

$$\\text{3. Analysis of } r(x) = 3\\sqrt{x} + 7x - 1:$$
$$\\text{Rewriting the first term: } 3\\sqrt{x} = 3x^{1/2}.$$
$$\\text{The exponent } \\frac{1}{2} \\text{ is a fraction, not an integer.}$$
$$\\mathbf{\\text{Conclusion: } r(x) \\text{ is NOT a polynomial.}}$$

$$\\text{4. Analysis of } s(x) = x^4 - \\frac{2}{3}x^2 + 11:$$
$$\\text{The exponents of } x \\text{ are } 4, 2, 0. \\text{ All exponents are whole numbers.}$$
$$\\mathbf{\\text{Conclusion: } s(x) \\text{ IS a polynomial.}}$$`,
    solution_ml: `$$\\text{1. } p(x) = 4x^3 - 5x^2 + \\frac{\\sqrt{3}}{2}x - 9:$$
$$x\\text{-ന്റെ ഘാതങ്ങൾ } 3, 2, 1, 0 \\text{ എന്നിവ അഖണ്ഡസംഖ്യകളാണ്. അതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമാണ്.}}$$

$$\\text{2. } q(x) = 2x^2 + \\frac{5}{x} - 3:$$
$$\\frac{5}{x} = 5x^{-1} \\text{ എന്നതിൽ ഘാതം } -1 \\text{ ഒരു ഋണസംഖ്യയായതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമല്ല.}}$$

$$\\text{3. } r(x) = 3\\sqrt{x} + 7x - 1:$$
$$3\\sqrt{x} = 3x^{1/2} \\text{ എന്നതിൽ ഘാതം } \\frac{1}{2} \\text{ ഒരു ഭിന്നസംഖ്യയായതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമല്ല.}}$$

$$\\text{4. } s(x) = x^4 - \\frac{2}{3}x^2 + 11:$$
$$x\\text{-ന്റെ ഘാതങ്ങൾ } 4, 2, 0 \\text{ അഖണ്ഡസംഖ്യകളായതിനാൽ ഇത് } \\mathbf{\\text{ബഹുപദമാണ്.}}$$`
  },

  {
    id: 'w.m9.8.2',
    sec: '9.8.2',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.8.2.degree-and-classification',
    tested_en: 'Standard form, degree, leading coefficient, and classification of polynomials',
    tested_ml: 'ബഹുപദത്തിന്റെ സാധാരണ രൂപം, കൃതി, മുൻനിര ഗുണകം, തരംതിരിവ്',
    title_en: 'Degree Determination and Polynomial Classification',
    title_ml: 'കൃതി നിർണ്ണയവും ബഹുപദങ്ങളുടെ തരംതിരിവും',
    prompt_en: '<p>For each of the following polynomials, determine: (i) its standard form in descending powers of $x$, (ii) its degree, (iii) leading coefficient, and (iv) classify it as constant, linear, quadratic, or cubic:</p><ol><li>$f(x) = 7 - 4x^2 + 3x$</li><li>$g(x) = (2x - 1)(x + 5)$</li><li>$h(x) = 19$</li><li>$k(x) = 4x^3 - 2x + 7x^2 - 8$</li></ol>',
    prompt_ml: '<p>താഴെ പറയുന്ന ഓരോ ബഹുപദത്തിന്റെയും: (i) അവരോഹണ ക്രമത്തിലുള്ള രൂപം, (ii) കൃതി, (iii) മുൻനിര ഗുണകം, (iv) തരംതിരിവ് എന്നിവ കണ്ടെത്തുക:</p><ol><li>$f(x) = 7 - 4x^2 + 3x$</li><li>$g(x) = (2x - 1)(x + 5)$</li><li>$h(x) = 19$</li><li>$k(x) = 4x^3 - 2x + 7x^2 - 8$</li></ol>',
    solution_en: `$$\\text{1. } f(x) = 7 - 4x^2 + 3x:$$
$$\\text{Standard form: } -4x^2 + 3x + 7$$
$$\\text{Degree: } \\mathbf{2}, \\quad \\text{Leading coefficient: } \\mathbf{-4}, \\quad \\text{Classification: } \\mathbf{\\text{Quadratic Polynomial}}$$

$$\\text{2. } g(x) = (2x - 1)(x + 5):$$
$$\\text{Expanded form: } 2x(x + 5) - 1(x + 5) = 2x^2 + 10x - x - 5 = 2x^2 + 9x - 5$$
$$\\text{Degree: } \\mathbf{2}, \\quad \\text{Leading coefficient: } \\mathbf{2}, \\quad \\text{Classification: } \\mathbf{\\text{Quadratic Polynomial}}$$

$$\\text{3. } h(x) = 19:$$
$$\\text{Standard form: } 19x^0$$
$$\\text{Degree: } \\mathbf{0}, \\quad \\text{Leading coefficient: } \\mathbf{19}, \\quad \\text{Classification: } \\mathbf{\\text{Constant Polynomial}}$$

$$\\text{4. } k(x) = 4x^3 - 2x + 7x^2 - 8:$$
$$\\text{Standard form: } 4x^3 + 7x^2 - 2x - 8$$
$$\\text{Degree: } \\mathbf{3}, \\quad \\text{Leading coefficient: } \\mathbf{4}, \\quad \\text{Classification: } \\mathbf{\\text{Cubic Polynomial}}$$`,
    solution_ml: `$$\\text{1. } f(x) = -4x^2 + 3x + 7:$$
$$\\text{കൃതി: } \\mathbf{2}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{-4}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{രണ്ടാംകൃതി ബഹുപദം}}$$

$$\\text{2. } g(x) = (2x - 1)(x + 5) = 2x^2 + 9x - 5:$$
$$\\text{കൃതി: } \\mathbf{2}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{2}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{രണ്ടാംകൃതി ബഹുപദം}}$$

$$\\text{3. } h(x) = 19:$$
$$\\text{കൃതി: } \\mathbf{0}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{19}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{സ്ഥിര ബഹുപദം}}$$

$$\\text{4. } k(x) = 4x^3 + 7x^2 - 2x - 8:$$
$$\\text{കൃതി: } \\mathbf{3}, \\quad \\text{മുൻനിര ഗുണകം: } \\mathbf{4}, \\quad \\text{തരംതിരിവ്: } \\mathbf{\\text{മൂന്നാംകൃതി ബഹുപദം}}$$`
  },

  {
    id: 'w.m9.8.3',
    sec: '9.8.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.8.3.values-and-zeroes-of-polynomials',
    tested_en: 'Evaluating values and verifying zeroes of quadratic polynomials',
    tested_ml: 'രണ്ടാംകൃതി ബഹുപദങ്ങളുടെ വില കണക്കാക്കലും പൂജ്യങ്ങൾ കണ്ടെത്തലും',
    title_en: 'Evaluating Polynomial Values and Determining Zeroes',
    title_ml: 'ബഹുപദത്തിന്റെ വില കാണലും പൂജ്യങ്ങൾ നിർണ്ണയിക്കലും',
    prompt_en: '<p>Given the polynomial $p(x) = 2x^2 - 7x + 3$:</p><ol><li>Calculate $p(0)$, $p(1)$, $p(2)$, and $p(3)$.</li><li>Identify which of the values $x = 1, 2, 3$ is a zero of $p(x)$.</li><li>Verify that $x = \\frac{1}{2}$ is also a zero of $p(x)$.</li></ol>',
    prompt_ml: '<p>$p(x) = 2x^2 - 7x + 3$ എന്ന ബഹുപദം പരിഗണിക്കുക:</p><ol><li>$p(0), p(1), p(2), p(3)$ എന്നിവയുടെ വിലകൾ കണക്കാക്കുക.</li><li>$x = 1, 2, 3$ എന്നിവയിൽ $p(x)$-ന്റെ പൂജ്യമായ സംഖ്യ ഏതാണ്?</li><li>$x = \\frac{1}{2}$ എന്നത് $p(x)$-ന്റെ മറ്റൊരു പൂജ്യമാണെന്ന് തെളിയിക്കുക.</li></ol>',
    solution_en: `$$\\text{Step 1: Evaluating at Given Points}$$
$$p(0) = 2(0)^2 - 7(0) + 3 = \\mathbf{3}$$
$$p(1) = 2(1)^2 - 7(1) + 3 = 2 - 7 + 3 = \\mathbf{-2}$$
$$p(2) = 2(2^2) - 7(2) + 3 = 2(4) - 14 + 3 = 8 - 14 + 3 = \\mathbf{-3}$$
$$p(3) = 2(3^2) - 7(3) + 3 = 2(9) - 21 + 3 = 18 - 21 + 3 = \\mathbf{0}$$

$$\\text{Step 2: Identifying the Zero}$$
$$\\text{Since } p(3) = 0, \\text{ the number } \\mathbf{x = 3} \\text{ is a zero of } p(x).$$

$$\\text{Step 3: Verification of } x = 1/2$$
$$p\\left(\\frac{1}{2}\\right) = 2\\left(\\frac{1}{2}\\right)^2 - 7\\left(\\frac{1}{2}\\right) + 3$$
$$= 2\\left(\\frac{1}{4}\\right) - \\frac{7}{2} + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = -\\frac{6}{2} + 3 = -3 + 3 = \\mathbf{0}$$
$$\\text{Since } p(1/2) = 0, \\, \\mathbf{x = \\frac{1}{2}} \\text{ is verified as a zero of } p(x).$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: വിവിധ വിലകൾ കണ്ടെത്തൽ}$$
$$p(0) = 2(0) - 0 + 3 = \\mathbf{3}$$
$$p(1) = 2(1) - 7(1) + 3 = \\mathbf{-2}$$
$$p(2) = 2(4) - 14 + 3 = \\mathbf{-3}$$
$$p(3) = 2(9) - 21 + 3 = 18 - 21 + 3 = \\mathbf{0}$$

$$\\text{ഘട്ടം 2: പൂജ്യം കണ്ടെത്തൽ}$$
$$p(3) = 0 \\text{ ആയതിനാൽ } \\mathbf{x = 3} \\text{ ഒരു പൂജ്യമാണ്.}$$

$$\\text{ഘട്ടം 3: } x = 1/2 \\text{ പരിശോധിക്കൽ}$$
$$p\\left(\\frac{1}{2}\\right) = 2\\left(\\frac{1}{4}\\right) - 7\\left(\\frac{1}{2}\\right) + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = -3 + 3 = \\mathbf{0}$$
$$\\text{അതിനാൽ } \\mathbf{x = \\frac{1}{2}} \\text{ എന്നത് } p(x)\\text{-ന്റെ പൂജ്യമാണ്.}$$`
  },

  {
    id: 'w.m9.8.4',
    sec: '9.8.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    tested_en: 'Algebraic modeling of physical volume and polynomial expansion',
    tested_ml: 'ഭൗതിക വ്യാപ്തത്തിന്റെ ബീജഗണിത മോഡലിംഗും ബഹുപദ വികാസവും',
    title_en: 'Cardboard Box Volume Modeling and Polynomial Formulation',
    title_ml: 'പെട്ടിയുടെ വ്യാപ്ത മോഡലിംഗും ബഹുപദ രൂപീകരണവും',
    prompt_en: '<p>From each of the four corners of a square piece of tin of side $12\\text{ cm}$, equal squares of side $x\\text{ cm}$ are cut out, and the flaps are turned up to form an open rectangular box. (i) Write the polynomial expressions for the base length and the height of the box. (ii) Formulate the polynomial $V(x)$ representing the volume of the box in standard expanded form. (iii) State the degree of $V(x)$ and calculate the volume when $x = 2\\text{ cm}$.</p>',
    prompt_ml: '<p>$12\\text{ cm}$ വശമുള്ള ഒരു സമചതുര തകിടിന്റെ നാല് മൂലകളിൽ നിന്നും $x\\text{ cm}$ വശമുള്ള സമചതുരങ്ങൾ മുറിച്ചുമാറ്റി വശങ്ങൾ മടക്കി മുകൾഭാഗം തുറന്ന ഒരു പെട്ടിയുണ്ടാക്കുന്നു. (i) പെട്ടിയുടെ പാദത്തിന്റെ വശവും ഉയരവും സൂചിപ്പിക്കുന്ന ബഹുപദങ്ങൾ എഴുതുക. (ii) പെട്ടിയുടെ വ്യാപ്തം $V(x)$-നെ സൂചിപ്പിക്കുന്ന ബഹുപദം സാധാരണ രൂപത്തിൽ എഴുതുക. (iii) $V(x)$-ന്റെ കൃതി എത്രയെന്ന് പ്രസ്താവിക്കുകയും $x = 2\\text{ cm}$ ആകുമ്പോൾ പെട്ടിയുടെ വ്യാപ്തം കണക്കാക്കുകയും ചെയ്യുക.</p>',
    solution_en: `$$\\text{Step 1: Dimensions of the Box}$$
$$\\text{Initial side of square sheet } = 12\\text{ cm}$$
$$\\text{Two squares of side } x \\text{ are cut along each edge:}$$
$$\\text{Base length } l = 12 - 2x$$
$$\\text{Base breadth } b = 12 - 2x$$
$$\\text{Height of the box } h = x$$

$$\\text{Step 2: Volume Polynomial Formulation}$$
$$V(x) = \\text{length} \\times \\text{breadth} \\times \\text{height}$$
$$V(x) = (12 - 2x)(12 - 2x) \\times x = (12 - 2x)^2 x$$
$$(12 - 2x)^2 = 144 - 48x + 4x^2$$
$$V(x) = x(4x^2 - 48x + 144) = \\mathbf{4x^3 - 48x^2 + 144x}$$

$$\\text{Step 3: Degree and Evaluation at } x = 2$$
$$\\text{The highest power of } x \\text{ is 3; therefore, } \\deg(V) = \\mathbf{3} \\text{ (a Cubic Polynomial).}$$
$$\\text{When } x = 2\\text{ cm:}$$
$$V(2) = 4(2^3) - 48(2^2) + 144(2) = 4(8) - 48(4) + 288 = 32 - 192 + 288 = \\mathbf{128\\text{ cm}^3}$$
$$\\text{Direct check: base } = 12 - 4 = 8\\text{ cm}, \\, h = 2\\text{ cm} \\implies V = 8 \\times 8 \\times 2 = 128\\text{ cm}^3 \\quad (\\text{Verified})$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: പെട്ടിയുടെ അളവുകൾ}$$
$$\\text{പാദത്തിന്റെ വശം } = 12 - 2x$$
$$\\text{പെട്ടിയുടെ ഉയരം } = x$$

$$\\text{ഘട്ടം 2: വ്യാപ്തത്തിന്റെ ബഹുപദ രൂപം}$$
$$V(x) = (12 - 2x)^2 \\cdot x = (144 - 48x + 4x^2) \\cdot x$$
$$V(x) = \\mathbf{4x^3 - 48x^2 + 144x}$$

$$\\text{ഘട്ടം 3: കൃതിയും } x = 2 \\text{ ആകുമ്പോഴുള്ള വ്യാപ്തവും}$$
$$V(x)\\text{-ന്റെ കൃതി: } \\mathbf{3} \\quad (\\text{മൂന്നാംകൃതി ബഹുപദം})$$
$$x = 2\\text{ cm ആകുമ്പോൾ:}$$
$$V(2) = (12 - 4) \\times (12 - 4) \\times 2 = 8 \\times 8 \\times 2 = \\mathbf{128\\text{ cm}^3}$$`
  },

  {
    id: 'w.m9.8.5',
    sec: '9.8.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.8.3.values-and-zeroes-of-polynomials',
    tested_en: 'Determining coefficients from polynomial zeroes and finding remaining root',
    tested_ml: 'പൂജ്യങ്ങൾ നൽകി ബഹുപദ ഗുണകങ്ങളും ശേഷിക്കുന്ന പൂജ്യവും കണ്ടെത്തൽ',
    title_en: 'Finding Unknown Coefficients using Zeroes of Polynomial',
    title_ml: 'ബഹുപദത്തിന്റെ പൂജ്യം നൽകി അജ്ഞാത ഗുണകം കണ്ടെത്തൽ',
    prompt_en: '<p>If $x = 2$ and $x = -3$ are zeroes of the polynomial $p(x) = x^3 + a x^2 + b x - 6$, determine the numerical values of $a$ and $b$. Then find the third zero of $p(x)$.</p>',
    prompt_ml: '<p>$x = 2$, $x = -3$ എന്നിവ $p(x) = x^3 + a x^2 + b x - 6$ എന്ന ബഹുപദത്തിന്റെ പൂജ്യങ്ങളാണെങ്കിൽ $a, b$ എന്നിവയുടെ സംഖ്യാവിലകൾ കണ്ടെത്തുക. തുടർന്ന് $p(x)$-ന്റെ മൂന്നാമത്തെ പൂജ്യം ഏതെന്ന് കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Step 1: Using the zero } x = 2$$
$$p(2) = 2^3 + a(2^2) + b(2) - 6 = 0$$
$$8 + 4a + 2b - 6 = 0 \\implies 4a + 2b = -2 \\implies 2a + b = -1 \\quad \\text{--- (1)}$$

$$\\text{Step 2: Using the zero } x = -3$$
$$p(-3) = (-3)^3 + a(-3)^2 + b(-3) - 6 = 0$$
$$-27 + 9a - 3b - 6 = 0 \\implies 9a - 3b = 33 \\implies 3a - b = 11 \\quad \\text{--- (2)}$$

$$\\text{Step 3: Solving for } a \\text{ and } b$$
$$\\text{Add (1) and (2): } (2a + b) + (3a - b) = -1 + 11 \\implies 5a = 10 \\implies \\mathbf{a = 2}$$
$$\\text{From (1): } 2(2) + b = -1 \\implies 4 + b = -1 \\implies \\mathbf{b = -5}$$

$$\\text{Step 4: Finding the Third Zero}$$
$$p(x) = x^3 + 2x^2 - 5x - 6$$
$$\\text{The product of roots for } x^3 + 2x^2 - 5x - 6 \\text{ is } -(-6) = 6.$$
$$\\text{Let the third zero be } c: 2 \\times (-3) \\times c = 6 \\implies -6c = 6 \\implies \\mathbf{c = -1}.$$
$$\\text{The third zero is } \\mathbf{x = -1}.$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: } x = 2 \\text{ നൽകുന്നു}$$
$$p(2) = 8 + 4a + 2b - 6 = 0 \\implies 4a + 2b = -2 \\implies 2a + b = -1 \\quad \\text{--- (1)}$$

$$\\text{ഘട്ടം 2: } x = -3 \\text{ നൽകുന്നു}$$
$$p(-3) = -27 + 9a - 3b - 6 = 0 \\implies 9a - 3b = 33 \\implies 3a - b = 11 \\quad \\text{--- (2)}$$

$$\\text{ഘട്ടം 3: } a, b \\text{ എന്നിവ കണ്ടെത്തുന്നു}$$
$$\\text{സമവാക്യം (1)-ഉം (2)-ഉം കൂട്ടുന്നു:}$$
$$5a = 10 \\implies \\mathbf{a = 2}$$
$$2(2) + b = -1 \\implies 4 + b = -1 \\implies \\mathbf{b = -5}$$

$$\\text{ഘട്ടം 4: മൂന്നാമത്തെ പൂജ്യം കാണൽ}$$
$$p(x) = x^3 + 2x^2 - 5x - 6$$
$$\\text{പൂജ്യങ്ങളുടെ ഗുണനഫലം } 6 \\text{ ആയതിനാൽ:}$$
$$2 \\times (-3) \\times c = 6 \\implies -6c = 6 \\implies \\mathbf{c = -1}.$$
$$\\text{മൂന്നാമത്തെ പൂജ്യം: } \\mathbf{x = -1}.$$`
  },

  {
    id: 'w.m9.8.6',
    sec: '9.8.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    tested_en: 'Polynomial multiplication and geometric area subtraction',
    tested_ml: 'ബഹുപദ ഗുണനവും ജ്യാമിതീയ പരപ്പളവ് കുറയ്ക്കലും',
    title_en: 'Polynomial Multiplication, Simplification, and Area Formulation',
    title_ml: 'ബഹുപദ ഗുണനവും ലഘൂകരണവും പരപ്പളവ് രൂപീകരണവും',
    prompt_en: '<p>A rectangular swimming pool has length $(3x + 4)\\text{ m}$ and breadth $(2x - 1)\\text{ m}$. A tiled pathway of uniform width $1\\text{ m}$ surrounds the pool on all sides.<br>(a) Express the area of the swimming pool as a polynomial $P(x)$ in standard form.<br>(b) Express the total area including the pathway as a polynomial $T(x)$.<br>(c) Find the polynomial $A(x)$ representing the area of the pathway alone, and evaluate it when $x = 5\\text{ m}$.</p>',
    prompt_ml: '<p>ഒരു ദീർഘചതുരാകൃതിയിലുള്ള നീന്തൽക്കുളത്തിന്റെ നീളം $(3x + 4)\\text{ മീറ്റർ}$, വീതി $(2x - 1)\\text{ മീറ്റർ}$ ആണ്. കുളത്തിന് ചുറ്റും $1\\text{ മീറ്റർ}$ വീതിയിൽ നടപ്പാത നിർമ്മിച്ചിരിക്കുന്നു.<br>(a) നീന്തൽക്കുളത്തിന്റെ പരപ്പളവ് $P(x)$ എന്ന ബഹുപദമായി എഴുതുക.<br>(b) നടപ്പാത ഉൾപ്പെടെയുള്ള ആകെ പരപ്പളവ് $T(x)$ എന്ന ബഹുപദമായി എഴുതുക.<br>(c) നടപ്പാതയുടെ മാത്രം പരപ്പളവ് $A(x)$ എന്ന ബഹുപദമായി കണ്ടെത്തുകയും, $x = 5\\text{ മീറ്റർ}$ ആകുമ്പോൾ നടപ്പാതയുടെ പരപ്പളവ് കണക്കാക്കുകയും ചെയ്യുക.</p>',
    solution_en: `$$\\text{(a) Pool Area } P(x):$$
$$P(x) = (3x + 4)(2x - 1) = 6x^2 - 3x + 8x - 4 = \\mathbf{6x^2 + 5x - 4}.$$

$$\\text{(b) Outer dimensions including 1 m pathway on all sides:}$$
$$\\text{Outer length } = (3x + 4) + 2(1) = 3x + 6$$
$$\\text{Outer breadth } = (2x - 1) + 2(1) = 2x + 1$$
$$T(x) = (3x + 6)(2x + 1) = 6x^2 + 3x + 12x + 6 = \\mathbf{6x^2 + 15x + 6}.$$

$$\\text{(c) Pathway Area } A(x):$$
$$A(x) = T(x) - P(x) = (6x^2 + 15x + 6) - (6x^2 + 5x - 4) = \\mathbf{10x + 10}.$$
$$\\text{When } x = 5\\text{ m:}$$
$$A(5) = 10(5) + 10 = 50 + 10 = \\mathbf{60\\text{ sq m}}.$$`,
    solution_ml: `$$\\text{(a) കുളത്തിന്റെ പരപ്പളവ് } P(x):$$
$$P(x) = (3x + 4)(2x - 1) = \\mathbf{6x^2 + 5x - 4}.$$

$$\\text{(b) നടപ്പാത ഉൾപ്പെടെയുള്ള പുറം അളവുകൾ:}$$
$$\\text{പുറം നീളം } = 3x + 4 + 2 = 3x + 6$$
$$\\text{പുറം വീതി } = 2x - 1 + 2 = 2x + 1$$
$$T(x) = (3x + 6)(2x + 1) = \\mathbf{6x^2 + 15x + 6}.$$

$$\\text{(c) നടപ്പാതയുടെ പരപ്പളവ് } A(x):$$
$$A(x) = T(x) - P(x) = (6x^2 + 15x + 6) - (6x^2 + 5x - 4) = \\mathbf{10x + 10}.$$
$$x = 5\\text{ മീറ്റർ ആകുമ്പോൾ:}$$
$$A(5) = 10(5) + 10 = \\mathbf{60\\text{ ചതുരശ്ര മീറ്റർ}}.$$`
  }
);
