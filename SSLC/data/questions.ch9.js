/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 9: Negative Numbers (ഋണസംഖ്യകൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     8.9.1 Negative Numbers Concept
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.9.1',
    concept: 'm8.9.1.negative-numbers-concept',
    sec: '8.9.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the value of $7 - 15$?',
    prompt_ml: '$7 - 15$-ന്റെ വില എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$-8$' },
      { k: 'B', t: '$8$' },
      { k: 'C', t: '$-22$' },
      { k: 'D', t: '$-7$' }
    ],
    options_ml: [
      { k: 'A', t: '$-8$' },
      { k: 'B', t: '$8$' },
      { k: 'C', t: '$-22$' },
      { k: 'D', t: '$-7$' }
    ],
    answer: 'A',
    solution_en: 'When a larger number is subtracted from a smaller number: $x - y = -(y - x)$. Thus, $7 - 15 = -(15 - 7) = -8$.',
    solution_ml: 'ചെറിയ സംഖ്യയിൽ നിന്ന് വലിയ സംഖ്യ കുറയ്ക്കുമ്പോൾ: $x - y = -(y - x)$. അതിനാൽ $7 - 15 = -(15 - 7) = -8$.',
    tested_en: 'Basic subtraction yielding negative numbers.',
    tested_ml: 'ന്യൂനസംഖ്യകൾ ലഭിക്കുന്ന അടിസ്ഥാന കുറയ്ക്കൽ.'
  },
  {
    id: 'obj.m8.9.2',
    concept: 'm8.9.1.negative-numbers-concept',
    sec: '8.9.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following numbers is the smallest?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ ഏറ്റവും ചെറിയ സംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$-2$' },
      { k: 'B', t: '$-15$' },
      { k: 'C', t: '$0$' },
      { k: 'D', t: '$-1$' }
    ],
    options_ml: [
      { k: 'A', t: '$-2$' },
      { k: 'B', t: '$-15$' },
      { k: 'C', t: '$0$' },
      { k: 'D', t: '$-1$' }
    ],
    answer: 'B',
    solution_en: 'On the number line, numbers positioned furthest to the left are smallest. Since $-15$ is furthest left, $-15 < -2 < -1 < 0$.',
    solution_ml: 'സംഖ്യാരേഖയിൽ ഏറ്റവും ഇടതുവശത്ത് വരുന്ന സംഖ്യയാണ് ഏറ്റവും ചെറുത്. $-15$ ആണ് ഏറ്റവും ഇടതുവശത്ത് വരുന്നത്, അതിനാൽ $-15$ ആണ് ഏറ്റവും ചെറുത്.',
    tested_en: 'Comparison of negative numbers on the number line.',
    tested_ml: 'സംഖ്യാരേഖയിലെ ന്യൂനസംഖ്യകളുടെ താരതമ്യം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.9.2 Addition of Negative Numbers
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.9.3',
    concept: 'm8.9.2.addition-of-negatives',
    sec: '8.9.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Evaluate: $(-18) + (-12)$',
    prompt_ml: 'വില കാണുക: $(-18) + (-12)$',
    options_en: [
      { k: 'A', t: '$30$' },
      { k: 'B', t: '$-30$' },
      { k: 'C', t: '$-6$' },
      { k: 'D', t: '$6$' }
    ],
    options_ml: [
      { k: 'A', t: '$30$' },
      { k: 'B', t: '$-30$' },
      { k: 'C', t: '$-6$' },
      { k: 'D', t: '$6$' }
    ],
    answer: 'B',
    solution_en: 'Adding two negative numbers gives the negative of their sum: $(-18) + (-12) = -(18 + 12) = -30$.',
    solution_ml: 'രണ്ട് ന്യൂനസംഖ്യകൾ കൂട്ടിയാൽ അവയുടെ തുകയുടെ ന്യൂനം ലഭിക്കും: $(-18) + (-12) = -(18 + 12) = -30$.',
    tested_en: 'Addition of two negative numbers.',
    tested_ml: 'രണ്ട് ന്യൂനസംഖ്യകൾ തമ്മിൽ കൂട്ടൽ.'
  },
  {
    id: 'obj.m8.9.4',
    concept: 'm8.9.2.addition-of-negatives',
    sec: '8.9.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Evaluate: $(-25) + 40$',
    prompt_ml: 'വില കാണുക: $(-25) + 40$',
    options_en: [
      { k: 'A', t: '$-15$' },
      { k: 'B', t: '$15$' },
      { k: 'C', t: '$-65$' },
      { k: 'D', t: '$65$' }
    ],
    options_ml: [
      { k: 'A', t: '$-15$' },
      { k: 'B', t: '$15$' },
      { k: 'C', t: '$-65$' },
      { k: 'D', t: '$65$' }
    ],
    answer: 'B',
    solution_en: '$(-25) + 40 = 40 - 25 = 15$.',
    solution_ml: '$(-25) + 40 = 40 - 25 = 15$.',
    tested_en: 'Addition of positive and negative numbers.',
    tested_ml: 'അധിസംഖ്യയും ന്യൂനസംഖ്യയും തമ്മിൽ കൂട്ടൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.9.3 Subtraction of Negative Numbers
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.9.5',
    concept: 'm8.9.3.subtraction-of-negatives',
    sec: '8.9.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the value of $14 - (-9)$?',
    prompt_ml: '$14 - (-9)$-ന്റെ വില എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$-5$' },
      { k: 'C', t: '$23$' },
      { k: 'D', t: '$-23$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$-5$' },
      { k: 'C', t: '$23$' },
      { k: 'D', t: '$-23$' }
    ],
    answer: 'C',
    solution_en: 'Subtracting a negative number is equivalent to adding its positive opposite: $14 - (-9) = 14 + 9 = 23$.',
    solution_ml: 'ഒരു ന്യൂനസംഖ്യ കുറയ്ക്കുക എന്നാൽ അതിന്റെ അധിസംഖ്യ കൂട്ടുന്നതിന് തുല്യമാണ്: $14 - (-9) = 14 + 9 = 23$.',
    tested_en: 'Subtracting a negative from a positive.',
    tested_ml: 'അധിസംഖ്യയിൽ നിന്ന് ന്യൂനസംഖ്യ കുറയ്ക്കൽ.'
  },
  {
    id: 'obj.m8.9.6',
    concept: 'm8.9.3.subtraction-of-negatives',
    sec: '8.9.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Evaluate: $(-8) - (-15)$',
    prompt_ml: 'വില കാണുക: $(-8) - (-15)$',
    options_en: [
      { k: 'A', t: '$-23$' },
      { k: 'B', t: '$7$' },
      { k: 'C', t: '$-7$' },
      { k: 'D', t: '$23$' }
    ],
    options_ml: [
      { k: 'A', t: '$-23$' },
      { k: 'B', t: '$7$' },
      { k: 'C', t: '$-7$' },
      { k: 'D', t: '$23$' }
    ],
    answer: 'B',
    solution_en: '$(-8) - (-15) = -8 + 15 = 15 - 8 = 7$.',
    solution_ml: '$(-8) - (-15) = -8 + 15 = 15 - 8 = 7$.',
    tested_en: 'Subtracting a negative number from another negative number.',
    tested_ml: 'ഒരു ന്യൂനസംഖ്യയിൽ നിന്ന് മറ്റൊരു ന്യൂനസംഖ്യ കുറയ്ക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.9.4 Multiplication and Division of Negative Numbers
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.9.7',
    concept: 'm8.9.4.multiplication-division-negatives',
    sec: '8.9.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Calculate: $(-7) \\times (-8)$',
    prompt_ml: 'കണക്കാക്കുക: $(-7) \\times (-8)$',
    options_en: [
      { k: 'A', t: '$-56$' },
      { k: 'B', t: '$56$' },
      { k: 'C', t: '$-15$' },
      { k: 'D', t: '$1$' }
    ],
    options_ml: [
      { k: 'A', t: '$-56$' },
      { k: 'B', t: '$56$' },
      { k: 'C', t: '$-15$' },
      { k: 'D', t: '$1$' }
    ],
    answer: 'B',
    solution_en: 'The product of two negative numbers is positive: $(-a) \\times (-b) = a \\times b = 7 \\times 8 = 56$.',
    solution_ml: 'രണ്ട് ന്യൂനസംഖ്യകൾ തമ്മിൽ ഗുണിച്ചാൽ അധിസംഖ്യ ലഭിക്കും: $(-7) \\times (-8) = 7 \\times 8 = 56$.',
    tested_en: 'Product of two negative integers.',
    tested_ml: 'രണ്ട് ന്യൂനസംഖ്യകളുടെ ഗുണനം.'
  },
  {
    id: 'obj.m8.9.8',
    concept: 'm8.9.4.multiplication-division-negatives',
    sec: '8.9.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the value of $\\frac{-72}{-9}$?',
    prompt_ml: '$\\frac{-72}{-9}$-ന്റെ വില എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$-8$' },
      { k: 'B', t: '$8$' },
      { k: 'C', t: '$-81$' },
      { k: 'D', t: '$\\frac{1}{8}$' }
    ],
    options_ml: [
      { k: 'A', t: '$-8$' },
      { k: 'B', t: '$8$' },
      { k: 'C', t: '$-81$' },
      { k: 'D', t: '$\\frac{1}{8}$' }
    ],
    answer: 'B',
    solution_en: 'Dividing a negative number by another negative number yields a positive quotient: $\\frac{-72}{-9} = \\frac{72}{9} = 8$.',
    solution_ml: 'ഒരു ന്യൂനസംഖ്യയെ മറ്റൊരു ന്യൂനസംഖ്യ കൊണ്ട് ഹരിച്ചാൽ അധിസംഖ്യ ലഭിക്കും: $\\frac{-72}{-9} = 8$.',
    tested_en: 'Division of negative numbers.',
    tested_ml: 'ന്യൂനസംഖ്യകളുടെ ഹരണം.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m8.9.1',
    sec: '8.9.1',
    concept: 'm8.9.1.negative-numbers-concept',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Temperature Change and Number Line Displacement',
    title_ml: 'താപനില മാറ്റവും സംഖ്യാരേഖയിലെ സ്ഥാനവും',
    prompt_en: '<p>At 6:00 AM, the temperature in a high-altitude town was $4^\\circ\\text{C}$. By midnight, the temperature dropped by $9^\\circ\\text{C}$.</p><ol type="a"><li>Write an arithmetic expression for the midnight temperature and calculate its value.</li><li>Plot or describe the positions of both temperatures on a number line with respect to $0^\\circ\\text{C}$.</li></ol>',
    prompt_ml: '<p>രാവിലെ 6:00 മണിക്ക് ഒരു മലയോര പട്ടണത്തിലെ താപനില $4^\\circ\\text{C}$ ആയിരുന്നു. രാത്രിയോടെ താപനില $9^\\circ\\text{C}$ കുറഞ്ഞു.</p><ol type="a"><li>രാത്രിയിലെ താപനില കണ്ടെത്താനുള്ള ഗണിതവാക്യം എഴുതി വില കാണുക.</li><li>പൂജ്യത്തെ അടിസ്ഥാനമാക്കി ഈ രണ്ട് താപനിലകളും സംഖ്യാരേഖയിൽ എവിടെയായിരിക്കുമെന്ന് വ്യക്തമാക്കുക.</li></ol>',
    solution_en: `$$\\text{(a) Arithmetic calculation:}$$
$$\\text{Midnight Temperature} = 4^\\circ\\text{C} - 9^\\circ\\text{C} = -(9 - 4) = \\mathbf{-5^\\circ\\text{C}}$$

$$\\text{(b) Position on number line:}$$
$$\\text{Initial temperature } +4\\text{ is } 4\\text{ units to the right of } 0.$$
$$\\text{Midnight temperature } -5\\text{ is } 5\\text{ units to the left of } 0.$$`,
    solution_ml: `$$\\text{(a) താപനില കണക്കാക്കൽ:}$$
$$\\text{രാത്രിയിലെ താപനില} = 4^\\circ\\text{C} - 9^\\circ\\text{C} = -(9 - 4) = \\mathbf{-5^\\circ\\text{C}}$$

$$\\text{(b) സംഖ്യാരേഖയിലെ സ്ഥാനം:}$$
$$+4^\\circ\\text{C} \\text{ എന്നത് പൂജ്യത്തിന്റെ വലതുവശത്ത് 4 യൂണിറ്റ് അകലെയാണ്.}$$
$$-5^\\circ\\text{C} \\text{ എന്നത് പൂജ്യത്തിന്റെ ഇടതുവശത്ത് 5 യൂണിറ്റ് അകലെയാണ്.}$$`,
    tested_en: 'Negative number representation, temperature change, and number line displacements.',
    tested_ml: 'ന്യൂനസംഖ്യാ പ്രാതിനിധ്യം, താപനില വ്യതിയാനം, സംഖ്യാരേഖയിലെ സ്ഥാനമാറ്റം.'
  },

  {
    id: 'w.m8.9.2',
    sec: '8.9.2',
    concept: 'm8.9.2.addition-of-negatives',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Evaluating Sums of Mixed Signed Numbers',
    title_ml: 'വിവിധ ചിഹ്നങ്ങളുള്ള സംഖ്യകളുടെ തുക കാണൽ',
    prompt_en: '<p>Evaluate the following arithmetic sums step by step:</p><ol type="a"><li>$(-35) + (-45)$</li><li>$(-50) + 82$</li><li>$64 + (-90)$</li></ol>',
    prompt_ml: '<p>താഴെ പറയുന്ന തുകകൾ ഘട്ടംഘട്ടമായി കണ്ടെത്തുക:</p><ol type="a"><li>$(-35) + (-45)$</li><li>$(-50) + 82$</li><li>$64 + (-90)$</li></ol>',
    solution_en: `$$\\text{(a) } (-35) + (-45) = -(35 + 45) = \\mathbf{-80}$$
$$\\text{(b) } (-50) + 82 = 82 - 50 = \\mathbf{32}$$
$$\\text{(c) } 64 + (-90) = 64 - 90 = -(90 - 64) = \\mathbf{-26}$$`,
    solution_ml: `$$\\text{(a) } (-35) + (-45) = -(35 + 45) = \\mathbf{-80}$$
$$\\text{(b) } (-50) + 82 = 82 - 50 = \\mathbf{32}$$
$$\\text{(c) } 64 + (-90) = 64 - 90 = -(90 - 64) = \\mathbf{-26}$$`,
    tested_en: 'Addition of signed integers with same and opposite signs.',
    tested_ml: 'ഒരേ ചിഹ്നമുള്ളതും വ്യത്യസ്ത ചിഹ്നമുള്ളതുമായ സംഖ്യകളുടെ സങ്കലനം.'
  },

  {
    id: 'w.m8.9.3',
    sec: '8.9.3',
    concept: 'm8.9.3.subtraction-of-negatives',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Difference Between Elevations and Depths',
    title_ml: 'ഉയരങ്ങളും ആഴങ്ങളും തമ്മിലുള്ള വ്യത്യാസം',
    prompt_en: '<p>A submarine is cruising at a depth of $180\\text{ metres}$ below sea level ($-180\\text{ m}$). A helicopter is flying directly above it at an altitude of $420\\text{ metres}$ above sea level ($+420\\text{ m}$).</p><ol type="a"><li>What is the vertical distance between the helicopter and the submarine?</li><li>Write this distance as a subtraction involving signed numbers.</li></ol>',
    prompt_ml: '<p>ഒരു അന്തർവാഹിനി സമുദ്രനിരപ്പിൽ നിന്ന് $180\\text{ മീറ്റർ}$ താഴെയാണ് ($-180\\text{ m}$). ഒരു ഹെലികോപ്റ്റർ സമുദ്രനിരപ്പിൽ നിന്ന് $420\\text{ മീറ്റർ}$ ഉയരത്തിൽ പറക്കുന്നു ($+420\\text{ m}$).</p><ol type="a"><li>ഹെലികോപ്റ്ററും അന്തർവാഹിനിയും തമ്മിലുള്ള ലംബദൂരം എത്ര?</li><li>ചിഹ്നങ്ങളുള്ള സംഖ്യകളുടെ വ്യവകലനമായി (കുറയ്ക്കലായി) ഇത് രേഖപ്പെടുത്തുക.</li></ol>',
    solution_en: `$$\\text{(a) Vertical distance is the higher elevation minus the lower elevation:}$$
$$\\text{Distance} = 420 - (-180)$$
$$\\text{Distance} = 420 + 180 = \\mathbf{600\\text{ metres}}$$

$$\\text{(b) Subtraction expression: } 420 - (-180) = 600\\text{ m}$$`,
    solution_ml: `$$\\text{(a) ഉയർന്ന അളവിൽ നിന്ന് താഴ്ന്ന അളവ് കുറച്ചാൽ ലംബദൂരം ലഭിക്കും:}$$
$$\\text{ദൂരം} = 420 - (-180)$$
$$\\text{ദൂരം} = 420 + 180 = \\mathbf{600\\text{ മീറ്റർ}}$$

$$\\text{(b) കുറയ്ക്കൽ രൂപം: } 420 - (-180) = 600\\text{ m}$$`,
    tested_en: 'Subtraction of negative numbers and vertical distance calculation.',
    tested_ml: 'ന്യൂനസംഖ്യകളുടെ വ്യവകലനവും ലംബദൂര കണക്കുകൂട്ടലും.'
  },

  {
    id: 'w.m8.9.4',
    sec: '8.9.4',
    concept: 'm8.9.4.multiplication-division-negatives',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Evaluating Combined Expressions with Signed Numbers',
    title_ml: 'ചിഹ്നനിയമങ്ങൾ ഉപയോഗിച്ച് സമ്മിശ്ര ക്രിയകൾ ചെയ്യൽ',
    prompt_en: '<p>Evaluate the following arithmetic expressions respecting operator precedence and sign rules:</p><ol type="a"><li>$(-6) \\times 4 - (-15)$</li><li>$\\frac{(-5) \\times (-8)}{-10}$</li><li>$(-3)^3 + (-2)^2$</li></ol>',
    prompt_ml: '<p>ചിഹ്നനിയമങ്ങളും ക്രിയാക്രമവും പാലിച്ച് താഴെ പറയുന്നവയുടെ വില കണ്ടെത്തുക:</p><ol type="a"><li>$(-6) \\times 4 - (-15)$</li><li>$\\frac{(-5) \\times (-8)}{-10}$</li><li>$(-3)^3 + (-2)^2$</li></ol>',
    solution_en: `$$\\text{(a) } (-6) \\times 4 - (-15) = -24 + 15 = \\mathbf{-9}$$
$$\\text{(b) } \\frac{(-5) \\times (-8)}{-10} = \\frac{40}{-10} = \\mathbf{-4}$$
$$\\text{(c) } (-3)^3 = (-3) \\times (-3) \\times (-3) = -27$$
$$(-2)^2 = (-2) \\times (-2) = +4$$
$$\\text{Sum} = -27 + 4 = \\mathbf{-23}$$`,
    solution_ml: `$$\\text{(a) } (-6) \\times 4 - (-15) = -24 + 15 = \\mathbf{-9}$$
$$\\text{(b) } \\frac{(-5) \\times (-8)}{-10} = \\frac{40}{-10} = \\mathbf{-4}$$
$$\\text{(c) } (-3)^3 = (-3) \\times (-3) \\times (-3) = -27$$
$$(-2)^2 = (-2) \\times (-2) = +4$$
$$\\text{തുക} = -27 + 4 = \\mathbf{-23}$$`,
    tested_en: 'Multiplication, division, and exponents of negative numbers with order of operations.',
    tested_ml: 'ന്യൂനസംഖ്യകളുടെ ഗുണനം, ഹരണം, കൃതികൾ, ക്രിയാക്രമം.'
  },

  {
    id: 'w.m8.9.5',
    sec: '8.9.2',
    concept: 'm8.9.2.addition-of-negatives',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Bank Account Transactions and Balance Calculation',
    title_ml: 'ബാങ്ക് ഇടപാടുകളും നീക്കിയിരിപ്പും',
    prompt_en: `<p>A merchant's bank account has an opening balance of ₹$12,000$. During a week, he makes the following transactions:</p>
      <ul>
        <li>Deposits: ₹$4,500$ and ₹$3,200$</li>
        <li>Withdrawals: ₹$8,000$, ₹$14,000$, and ₹$2,500$</li>
      </ul>
      <ol type="a">
        <li>Express each deposit as a positive integer and each withdrawal as a negative integer, and write an arithmetic expression for the final balance.</li>
        <li>Calculate the final balance. Does the account have an overdraft, and if so, how much?</li>
      </ol>`,
    prompt_ml: `<p>ഒരു വ്യാപാരിയുടെ ബാങ്ക് അക്കൗണ്ടിൽ ആദ്യം ₹$12,000$ ഉണ്ടായിരുന്നു. ഒരാഴ്ചയ്ക്കിടെ അദ്ദേഹം നടത്തിയ ഇടപാടുകൾ താഴെ പറയുന്നവയാണ്:</p>
      <ul>
        <li>നിക്ഷേപങ്ങൾ: ₹$4,500$, ₹$3,200$</li>
        <li>പിൻവലിക്കലുകൾ: ₹$8,000$, ₹$14,000$, ₹$2,500$</li>
      </ul>
      <ol type="a">
        <li>നിക്ഷേപങ്ങളെ അധിസംഖ്യകളായും പിൻവലിക്കലുകളെ ന്യൂനസംഖ്യകളായും സൂചിപ്പിച്ച് ബാക്കി തുക കാണാനുള്ള ഗണിതവാക്യം എഴുതുക.</li>
        <li>അവസാന നീക്കിയിരിപ്പ് കണക്കാക്കുക. അക്കൗണ്ടിൽ ബാധ്യത (ഓവർഡ്രാഫ്റ്റ്) ഉണ്ടോ? ഉണ്ടെങ്കിൽ എത്ര രൂപ?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Arithmetic expression:
          $$\\text{Balance} = 12000 + 4500 + 3200 + (-8000) + (-14000) + (-2500)$$</li>
        <li>$$\\text{Total deposits} = 12000 + 4500 + 3200 = ₹19,700$$
          $$\\text{Total withdrawals} = 8000 + 14000 + 2500 = ₹24,500$$
          $$\\text{Final Balance} = 19700 - 24500 = \\mathbf{-₹4,800}$$
          Yes, the account has an overdraft of <b>₹$4,800$</b>.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ഗണിതവാക്യം:
          $$\\text{നീക്കിയിരിപ്പ്} = 12000 + 4500 + 3200 + (-8000) + (-14000) + (-2500)$$</li>
        <li>$$\\text{ആകെ നിക്ഷേപം} = 12000 + 4500 + 3200 = ₹19,700$$
          $$\\text{ആകെ പിൻവലിച്ചത്} = 8000 + 14000 + 2500 = ₹24,500$$
          $$\\text{അവസാന തുക} = 19700 - 24500 = \\mathbf{-₹4,800}$$
          അക്കൗണ്ടിൽ <b>₹$4,800$</b> രൂപയുടെ ഓവർഡ്രാഫ്റ്റ് (ബാധ്യത) ഉണ്ട്.</li>
      </ol>`,
    tested_en: 'Signed number modeling in financial transactions and overdraft calculation.',
    tested_ml: 'സാമ്പത്തിക ഇടപാടുകളിലെ ന്യൂന-അധി സംഖ്യാ പ്രയോഗവും നീക്കിയിരിപ്പും.'
  },

  {
    id: 'w.m8.9.6',
    sec: '8.9.4',
    concept: 'm8.9.4.multiplication-division-negatives',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Rules of Signs and Algebraic Substitution',
    title_ml: 'ചിഹ്നനിയമങ്ങളും ബീജഗണിത വില കണ്ടെത്തലും',
    prompt_en: `<ol type="a">
        <li>If $x = -4$ and $y = -3$, evaluate:
          <ol type="i">
            <li>$x^2 - y^2$</li>
            <li>$(x - y)^2$</li>
            <li>$2xy - 3(x + y)$</li>
          </ol></li>
        <li>An examination awards $+3$ marks for every correct answer and $-1$ mark for every incorrect answer. A student attempted $30$ questions and got $22$ correct. What is the student's total score?</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>$x = -4$, $y = -3$ ആയാൽ താഴെ പറയുന്നവയുടെ വില കണക്കാക്കുക:
          <ol type="i">
            <li>$x^2 - y^2$</li>
            <li>$(x - y)^2$</li>
            <li>$2xy - 3(x + y)$</li>
          </ol></li>
        <li>ഒരു പരീക്ഷയിൽ ഓരോ ശരിയുത്തരത്തിനും $+3$ മാർക്കും തെറ്റുത്തരത്തിന് $-1$ മാർക്കും നൽകുന്നു. $30$ ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതിയ ഒരു വിദ്യാർത്ഥിക്ക് $22$ എണ്ണം ശരിയായി. വിദ്യാർത്ഥിയുടെ ആകെ മാർക്ക് എത്ര?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>For $x = -4$ and $y = -3$:
          <ol type="i">
            <li>$x^2 - y^2 = (-4)^2 - (-3)^2 = 16 - 9 = \\mathbf{7}$</li>
            <li>$(x - y)^2 = [(-4) - (-3)]^2 = (-4 + 3)^2 = (-1)^2 = \\mathbf{1}$</li>
            <li>$2xy - 3(x + y) = 2(-4)(-3) - 3[(-4) + (-3)] = 2(12) - 3(-7) = 24 + 21 = \\mathbf{45}$</li>
          </ol></li>
        <li>Correct answers $= 22$, incorrect answers $= 30 - 22 = 8$.<br>
          $$\\text{Total Score} = (22 \\times 3) + (8 \\times (-1)) = 66 - 8 = \\mathbf{58\\text{ marks}}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$x = -4, y = -3$ ആയാൽ:
          <ol type="i">
            <li>$x^2 - y^2 = (-4)^2 - (-3)^2 = 16 - 9 = \\mathbf{7}$</li>
            <li>$(x - y)^2 = [(-4) - (-3)]^2 = (-4 + 3)^2 = (-1)^2 = \\mathbf{1}$</li>
            <li>$2xy - 3(x + y) = 2(-4)(-3) - 3[(-4) + (-3)] = 24 - 3(-7) = 24 + 21 = \\mathbf{45}$</li>
          </ol></li>
        <li>ശരിയുത്തരങ്ങൾ $= 22$, തെറ്റുത്തരങ്ങൾ $= 30 - 22 = 8$.<br>
          $$\\text{ആകെ മാർക്ക്} = (22 \\times 3) + (8 \\times (-1)) = 66 - 8 = \\mathbf{58\\text{ മാർക്ക്}}$$</li>
      </ol>`,
    tested_en: 'Algebraic substitution with negative values and penalty scoring systems.',
    tested_ml: 'ന്യൂനസംഖ്യകളുടെ ബീജഗണിത വില നൽകലും നെഗറ്റീവ് മാർക്കിംഗ് കണക്കുകൂട്ടലും.'
  }
);
