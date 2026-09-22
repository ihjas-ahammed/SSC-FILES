/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 1: Squares (വർഗ്ഗങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'obj.m8.1.1',
    concept: 'm8.1.1.perfect-squares',
    sec: '8.1.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Which of the following numbers is a perfect square?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ പൂർണ്ണവർഗ്ഗമായ സംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '50' },
      { k: 'B', t: '64' },
      { k: 'C', t: '72' },
      { k: 'D', t: '90' }
    ],
    options_ml: [
      { k: 'A', t: '50' },
      { k: 'B', t: '64' },
      { k: 'C', t: '72' },
      { k: 'D', t: '90' }
    ],
    answer: 'B',
    solution_en: '$64 = 8^2 = 8 \\times 8$, so it is the square of a natural number and thus a perfect square.',
    solution_ml: '$64 = 8^2 = 8 \\times 8$. ഇത് 8 എന്ന എണ്ണൽസംഖ്യയുടെ വർഗ്ഗമായതിനാൽ പൂർണ്ണവർഗ്ഗമാണ്.',
    tested_en: 'Definition of a perfect square.',
    tested_ml: 'പൂർണ്ണവർഗ്ഗത്തിന്റെ നിർവ്വചനം.',
    trap_en: 'Choosing 50 by confusing half of 100 with a square root.',
    trap_ml: '100-ന്റെ പകുതിയായ 50 പൂർണ്ണവർഗ്ഗമാണെന്ന് തെറ്റിദ്ധരിക്കരുത്.'
  },

  {
    id: 'obj.m8.1.2',
    concept: 'm8.1.1.perfect-squares',
    sec: '8.1.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the square of the fraction $\\frac{3}{7}$?',
    prompt_ml: '$\\frac{3}{7}$ എന്ന ഭിന്നസംഖ്യയുടെ വർഗ്ഗം എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$\\frac{6}{14}$' },
      { k: 'B', t: '$\\frac{9}{14}$' },
      { k: 'C', t: '$\\frac{9}{49}$' },
      { k: 'D', t: '$\\frac{6}{49}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{6}{14}$' },
      { k: 'B', t: '$\\frac{9}{14}$' },
      { k: 'C', t: '$\\frac{9}{49}$' },
      { k: 'D', t: '$\\frac{6}{49}$' }
    ],
    answer: 'C',
    solution_en: '$\\left(\\frac{3}{7}\\right)^2 = \\frac{3^2}{7^2} = \\frac{9}{49}$.',
    solution_ml: '$\\left(\\frac{3}{7}\\right)^2 = \\frac{3^2}{7^2} = \\frac{9}{49}$. അംശത്തിന്റെയും ഛേദത്തിന്റെയും വർഗ്ഗം കാണണം.',
    tested_en: 'Squaring fractions.',
    tested_ml: 'ഭിന്നസംഖ്യകളുടെ വർഗ്ഗം.',
    trap_en: 'Multiplying by 2 instead of squaring.',
    trap_ml: 'വർഗ്ഗം കാണുന്നതിന് പകരം 2 കൊണ്ട് ഗുണിക്കരുത്.'
  },

  {
    id: 'obj.m8.1.3',
    concept: 'm8.1.2.geo-squares',
    sec: '8.1.2',
    type: 'MCQ',
    marks: 1,
    time: 60,
    prompt_en: 'In the geometric partition of a square of side $(a + b)$, what is the total area of the two rectangular pieces?',
    prompt_ml: '$(a + b)$ വശമുള്ള സമചതുരത്തിന്റെ ജ്യാമിതീയ വിഭജനത്തിൽ രണ്ട് ചതുരങ്ങളുടെ ആകെ വിസ്തീർണ്ണം എത്ര?',
    options_en: [
      { k: 'A', t: '$ab$' },
      { k: 'B', t: '$2ab$' },
      { k: 'C', t: '$a^2 + b^2$' },
      { k: 'D', t: '$(ab)^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$ab$' },
      { k: 'B', t: '$2ab$' },
      { k: 'C', t: '$a^2 + b^2$' },
      { k: 'D', t: '$(ab)^2$' }
    ],
    answer: 'B',
    solution_en: 'Each rectangle has area $ab$. The two rectangles together have area $ab + ab = 2ab$.',
    solution_ml: 'ഓരോ ചതുരത്തിന്റെയും വിസ്തീർണ്ണം $ab$ ആണ്. രണ്ട് ചതുരങ്ങളുടെ ആകെ വിസ്തീർണ്ണം $ab + ab = 2ab$.',
    tested_en: 'Geometric derivation of (a+b)²',
    tested_ml: '(a+b)²-ന്റെ ജ്യാമിതീയ തത്വം.',
    trap_en: 'Counting only one rectangle instead of both.',
    trap_ml: 'ഒരു ചതുരത്തിന്റെ വിസ്തീർണ്ണം മാത്രം ഓർത്ത് ab എന്ന് എഴുതരുത്.'
  },

  {
    id: 'obj.m8.1.4',
    concept: 'm8.1.3.two-digit-squares',
    sec: '8.1.3',
    type: 'MCQ',
    marks: 1,
    time: 60,
    prompt_en: 'Calculate $24^2$ using the identity $(a+b)^2 = a^2 + 2ab + b^2$ as $(20 + 4)^2$.',
    prompt_ml: '$(20 + 4)^2$ എന്ന രീതിയിൽ $24^2$-ന്റെ വില കാണുക.',
    options_en: [
      { k: 'A', t: '$416$' },
      { k: 'B', t: '$480$' },
      { k: 'C', t: '$576$' },
      { k: 'D', t: '$676$' }
    ],
    options_ml: [
      { k: 'A', t: '$416$' },
      { k: 'B', t: '$480$' },
      { k: 'C', t: '$576$' },
      { k: 'D', t: '$676$' }
    ],
    answer: 'C',
    solution_en: '$24^2 = (20 + 4)^2 = 20^2 + 2(20)(4) + 4^2 = 400 + 160 + 16 = 576$.',
    solution_ml: '$24^2 = (20 + 4)^2 = 20^2 + 2(20)(4) + 4^2 = 400 + 160 + 16 = 576$.',
    tested_en: 'Two-digit squaring via (a+b)²',
    tested_ml: 'രണ്ടക്ക സംഖ്യകളുടെ വർഗ്ഗം കാണൽ.',
    trap_en: 'Forgetting the middle term 2(20)(4) = 160.',
    trap_ml: 'നടുവിലെ പദമായ 2(20)(4) = 160 മറന്നുപോകരുത്.'
  },

  {
    id: 'obj.m8.1.5',
    concept: 'm8.1.4.decimal-squares',
    sec: '8.1.4',
    type: 'MCQ',
    marks: 1,
    time: 60,
    prompt_en: 'What is the area of a square whose side is $3.7\\text{ metres}$?',
    prompt_ml: '$3.7$ മീറ്റർ വശമുള്ള ഒരു സമചതുരത്തിന്റെ വിസ്തീർണ്ണം എത്ര?',
    options_en: [
      { k: 'A', t: '$136.9\\text{ m}^2$' },
      { k: 'B', t: '$14.49\\text{ m}^2$' },
      { k: 'C', t: '$13.69\\text{ m}^2$' },
      { k: 'D', t: '$1.369\\text{ m}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$136.9\\text{ ച.മീ}$' },
      { k: 'B', t: '$14.49\\text{ ച.മീ}$' },
      { k: 'C', t: '$13.69\\text{ ച.മീ}$' },
      { k: 'D', t: '$1.369\\text{ ച.മീ}$' }
    ],
    answer: 'C',
    solution_en: '$3.7^2 = (3 + 0.7)^2 = 9 + 4.2 + 0.49 = 13.69\\text{ m}^2$.',
    solution_ml: '$3.7^2 = (3 + 0.7)^2 = 9 + 4.2 + 0.49 = 13.69\\text{ ചതുരശ്ര മീറ്റർ}$.',
    tested_en: 'Decimal squares & area of square.',
    tested_ml: 'ദശാംശ സംഖ്യകളുടെ വർഗ്ഗവും വിസ്തീർണ്ണവും.',
    trap_en: 'Misplacing decimal points (e.g. thinking 0.7² = 4.9).',
    trap_ml: 'ദശാംശസ്ഥാനം തെറ്റിക്കുന്നത് (0.7² = 4.9 എന്ന് തെറ്റായി കരുതുന്നത്).'
  },

  {
    id: 'obj.m8.1.6',
    concept: 'm8.1.5.half-pattern',
    sec: '8.1.5',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the value of $7.5^2$ using the shortcut $(n + 0.5)^2 = n(n+1) + 0.25$?',
    prompt_ml: 'എളുപ്പവഴി ഉപയോഗിച്ച് $7.5^2$-ന്റെ വില കണ്ടെത്തുക.',
    options_en: [
      { k: 'A', t: '$49.25$' },
      { k: 'B', t: '$56.25$' },
      { k: 'C', t: '$54.25$' },
      { k: 'D', t: '$63.25$' }
    ],
    options_ml: [
      { k: 'A', t: '$49.25$' },
      { k: 'B', t: '$56.25$' },
      { k: 'C', t: '$54.25$' },
      { k: 'D', t: '$63.25$' }
    ],
    answer: 'B',
    solution_en: '$n = 7 \\implies 7 \\times 8 + 0.25 = 56.25$.',
    solution_ml: '$n = 7 \\implies 7 \\times 8 + 0.25 = 56.25$.',
    tested_en: 'Mental shortcut for numbers ending in 0.5.',
    tested_ml: '0.5 വരുന്ന സംഖ്യകളുടെ വർഗ്ഗം എളുപ്പത്തിൽ കാണൽ.',
    trap_en: 'Multiplying 7 by itself (49.25) instead of 7 × 8.',
    trap_ml: '7-നെ അതേ സംഖ്യകൊണ്ട് ഗുണിച്ച് 49.25 എന്ന് തെറ്റായി എഴുതരുത്.'
  },

  {
    id: 'obj.m8.1.7',
    concept: 'm8.1.6.square-roots',
    sec: '8.1.6',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Which of the following CANNOT be the units digit of any perfect square?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ ഏത് അക്കമാണ് ഒരു പൂർണ്ണവർഗ്ഗത്തിന്റെ അവസാന അക്കമായി വരാത്തത്?',
    options_en: [
      { k: 'A', t: '$1$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$7$' },
      { k: 'D', t: '$9$' }
    ],
    options_ml: [
      { k: 'A', t: '$1$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$7$' },
      { k: 'D', t: '$9$' }
    ],
    answer: 'C',
    solution_en: 'Squares only end in $0, 1, 4, 5, 6, 9$. No perfect square ends in $2, 3, 7,$ or $8$.',
    solution_ml: 'പൂർണ്ണവർഗ്ഗങ്ങളുടെ അവസാന അക്കം $0, 1, 4, 5, 6, 9$ എന്നിവ മാത്രമേ വരൂ. $2, 3, 7, 8$ എന്നിവ ഒരിക്കലും അവസാന അക്കമായി വരില്ല.',
    tested_en: 'Units digit property of perfect squares.',
    tested_ml: 'പൂർണ്ണവർഗ്ഗങ്ങളുടെ അവസാന അക്കങ്ങൾ.',
    trap_en: 'Confusing units digits of primes with units digits of squares.',
    trap_ml: 'അഭാജ്യസംഖ്യകളുടെ അവസാന അക്കങ്ങളുമായി തെറ്റിദ്ധരിക്കരുത്.'
  },

  {
    id: 'obj.m8.1.8',
    concept: 'm8.1.6.square-roots',
    sec: '8.1.6',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is $\\sqrt{0.0064}$?',
    prompt_ml: '$\\sqrt{0.0064}$ എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$0.8$' },
      { k: 'B', t: '$0.08$' },
      { k: 'C', t: '$0.008$' },
      { k: 'D', t: '$0.0008$' }
    ],
    options_ml: [
      { k: 'A', t: '$0.8$' },
      { k: 'B', t: '$0.08$' },
      { k: 'C', t: '$0.008$' },
      { k: 'D', t: '$0.0008$' }
    ],
    answer: 'B',
    solution_en: '$\\sqrt{64} = 8$. Four decimal places halve to two decimal places: $0.08$.',
    solution_ml: '$\\sqrt{64} = 8$. നാല് ദശാംശസ്ഥാനങ്ങളുടെ പകുതിയായ രണ്ട് ദശാംശസ്ഥാനങ്ങൾ വരും: $0.08$.',
    tested_en: 'Square roots of decimal numbers.',
    tested_ml: 'ദശാംശസംഖ്യകളുടെ വർഗ്ഗമൂലം.',
    trap_en: 'Halving the count of digits, not writing 0.8.',
    trap_ml: 'ദശാംശസ്ഥാനങ്ങൾ പകുതിയാക്കണം, 0.8 എന്ന് തെറ്റായി എഴുതരുത്.'
  }
);

/* ── Level 3: Written Practice Questions ────────────────────────────────── */
QUESTIONS.push(
  {
    id: 'w.m8.1.3',
    sec: '8.1.3',
    concept: 'm8.1.3.two-digit-squares',
    type: 'exercise',
    marks: 4,
    time: 180,
    title_en: 'Squaring Two-Digit Numbers via (a+b)²',
    title_ml: 'രണ്ടക്ക സംഖ്യകളുടെ വർഗ്ഗം കാണൽ',
    prompt_en: 'Calculate the squares of the following numbers using the $(a+b)^2 = a^2 + 2ab + b^2$ method:\n(i) $64^2$\n(ii) $35^2$\n(iii) $47^2$\n(iv) $53^2$\n(v) $88^2$',
    prompt_ml: '$(a+b)^2 = a^2 + 2ab + b^2$ എന്ന സമവാക്യം ഉപയോഗിച്ച് താഴെ പറയുന്ന സംഖ്യകളുടെ വർഗ്ഗം കാണുക:\n(i) $64^2$\n(ii) $35^2$\n(iii) $47^2$\n(iv) $53^2$\n(v) $88^2$',
    solution_en: `<p><b>(i) $64^2$:</b></p>
      $$64 = 60 + 4$$
      $$64^2 = 60^2 + 2(60)(4) + 4^2 = 3600 + 480 + 16 = 4096$$
      <p><b>(ii) $35^2$:</b></p>
      $$35 = 30 + 5$$
      $$35^2 = 30^2 + 2(30)(5) + 5^2 = 900 + 300 + 25 = 1225$$
      <p><b>(iii) $47^2$:</b></p>
      $$47 = 40 + 7$$
      $$47^2 = 40^2 + 2(40)(7) + 7^2 = 1600 + 560 + 49 = 2209$$
      <p><b>(iv) $53^2$:</b></p>
      $$53 = 50 + 3$$
      $$53^2 = 50^2 + 2(50)(3) + 3^2 = 2500 + 300 + 9 = 2809$$
      <p><b>(v) $88^2$:</b></p>
      $$88 = 80 + 8$$
      $$88^2 = 80^2 + 2(80)(8) + 8^2 = 6400 + 1280 + 64 = 7744$$`,
    solution_ml: `<p><b>(i) $64^2$:</b></p>
      $$64 = 60 + 4$$
      $$64^2 = 60^2 + 2(60)(4) + 4^2 = 3600 + 480 + 16 = 4096$$
      <p><b>(ii) $35^2$:</b></p>
      $$35 = 30 + 5$$
      $$35^2 = 30^2 + 2(30)(5) + 5^2 = 900 + 300 + 25 = 1225$$
      <p><b>(iii) $47^2$:</b></p>
      $$47 = 40 + 7$$
      $$47^2 = 40^2 + 2(40)(7) + 7^2 = 1600 + 560 + 49 = 2209$$
      <p><b>(iv) $53^2$:</b></p>
      $$53 = 50 + 3$$
      $$53^2 = 50^2 + 2(50)(3) + 3^2 = 2500 + 300 + 9 = 2809$$
      <p><b>(v) $88^2$:</b></p>
      $$88 = 80 + 8$$
      $$88^2 = 80^2 + 2(80)(8) + 8^2 = 6400 + 1280 + 64 = 7744$$`
  },

  {
    id: 'w.m8.1.4',
    sec: '8.1.4',
    concept: 'm8.1.4.decimal-squares',
    type: 'exercise',
    marks: 4,
    time: 180,
    title_en: 'Squares of Decimal Numbers',
    title_ml: 'ദശാംശ സംഖ്യകളുടെ വർഗ്ഗം',
    prompt_en: 'Find the squares of the following decimal numbers:\n(i) $2.3$\n(ii) $8.7$\n(iii) $10.1$\n(iv) $12.5$\n(v) $15.7$',
    prompt_ml: 'താഴെ പറയുന്ന ദശാംശ സംഖ്യകളുടെ വർഗ്ഗം കാണുക:\n(i) $2.3$\n(ii) $8.7$\n(iii) $10.1$\n(iv) $12.5$\n(v) $15.7$',
    solution_en: `<p><b>(i) $2.3^2$:</b> $(2 + 0.3)^2 = 4 + 1.2 + 0.09 = 5.29$</p>
      <p><b>(ii) $8.7^2$:</b> $(8 + 0.7)^2 = 64 + 11.2 + 0.49 = 75.69$</p>
      <p><b>(iii) $10.1^2$:</b> $(10 + 0.1)^2 = 100 + 2.0 + 0.01 = 102.01$</p>
      <p><b>(iv) $12.5^2$:</b> $12 \\times 13 + 0.25 = 156.25$</p>
      <p><b>(v) $15.7^2$:</b> $(15 + 0.7)^2 = 225 + 21 + 0.49 = 246.49$</p>`,
    solution_ml: `<p><b>(i) $2.3^2$:</b> $(2 + 0.3)^2 = 4 + 1.2 + 0.09 = 5.29$</p>
      <p><b>(ii) $8.7^2$:</b> $(8 + 0.7)^2 = 64 + 11.2 + 0.49 = 75.69$</p>
      <p><b>(iii) $10.1^2$:</b> $(10 + 0.1)^2 = 100 + 2.0 + 0.01 = 102.01$</p>
      <p><b>(iv) $12.5^2$:</b> $12 \\times 13 + 0.25 = 156.25$</p>
      <p><b>(v) $15.7^2$:</b> $(15 + 0.7)^2 = 225 + 21 + 0.49 = 246.49$</p>`
  },

  {
    id: 'w.m8.1.5',
    sec: '8.1.5',
    concept: 'm8.1.5.half-pattern',
    type: 'exercise',
    marks: 4,
    time: 150,
    title_en: 'Shortcut Method for Half and Quarter Patterns',
    title_ml: 'അരയും കാശും രീതി',
    prompt_en: 'Calculate using the shortcut for numbers with decimal part 0.5:\n(i) $4.5^2$\n(ii) $6.5^2$\n(iii) $9.5^2$',
    prompt_ml: 'ദശാംശഭാഗം 0.5 വരുന്ന സംഖ്യകളുടെ എളുപ്പരീതി ഉപയോഗിച്ച് താഴെ പറയുന്നവ കണ്ടെത്തുക:\n(i) $4.5^2$\n(ii) $6.5^2$\n(iii) $9.5^2$',
    solution_en: `<p><b>Rule:</b> $(n + 0.5)^2 = n(n+1) + 0.25$</p>
      <p><b>(i) $4.5^2$:</b> $4 \\times 5 + 0.25 = 20.25$</p>
      <p><b>(ii) $6.5^2$:</b> $6 \\times 7 + 0.25 = 42.25$</p>
      <p><b>(iii) $9.5^2$:</b> $9 \\times 10 + 0.25 = 90.25$</p>`,
    solution_ml: `<p><b>രീതി:</b> $(n + 0.5)^2 = n(n+1) + 0.25$</p>
      <p><b>(i) $4.5^2$:</b> $4 \\times 5 + 0.25 = 20.25$</p>
      <p><b>(ii) $6.5^2$:</b> $6 \\times 7 + 0.25 = 42.25$</p>
      <p><b>(iii) $9.5^2$:</b> $9 \\times 10 + 0.25 = 90.25$</p>`
  },

  {
    id: 'w.m8.1.1',
    sec: '8.1.1',
    concept: 'm8.1.1.perfect-squares',
    title_en: 'Identifying Perfect Squares and Ending Digits',
    title_ml: 'പൂർണ്ണവർഗ്ഗങ്ങളും അവസാന അക്കങ്ങളും കണ്ടെത്തൽ',
    prompt_en: `<p>Consider the numbers: $1057, 23453, 7928, 222222, 1089, 441$.</p>
      <ol type="a">
        <li>State why numbers ending in $2, 3, 7,$ or $8$ can never be perfect squares.</li>
        <li>Which of the numbers above cannot possibly be square numbers?</li>
        <li>Verify whether $1089$ and $441$ are perfect squares.</li>
      </ol>`,
    prompt_ml: `<p>$1057, 23453, 7928, 222222, 1089, 441$ എന്നീ സംഖ്യകൾ പരിഗണിക്കുക.</p>
      <ol type="a">
        <li>$2, 3, 7, 8$ എന്നിവയിൽ അവസാനിക്കുന്ന സംഖ്യകൾ ഒരിക്കലും പൂർണ്ണവർഗ്ഗമാകില്ല എന്ന് വ്യക്തമാക്കുക.</li>
        <li>മുകളിൽ തന്നതിൽ ഒരിക്കലും പൂർണ്ണവർഗ്ഗമാകാൻ സാധ്യതയില്ലാത്ത സംഖ്യകൾ ഏതെല്ലാം?</li>
        <li>$1089, 441$ എന്നിവ പൂർണ്ണവർഗ്ഗങ്ങളാണോ എന്ന് പരിശോധിക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>The units digits of squares of digits $0$ to $9$ are only $0, 1, 4, 5, 6, 9$. The digits $2, 3, 7, 8$ never appear as the units digit of any square number.</li>
        <li>$1057$ (ends in $7$), $23453$ (ends in $3$), $7928$ (ends in $8$), and $222222$ (ends in $2$) can never be perfect squares.</li>
        <li>$1089 = 33^2$ and $441 = 21^2$. Both are perfect squares.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$0$ മുതൽ $9$ വരെയുള്ള സംഖ്യകളുടെ വർഗ്ഗങ്ങൾ അവസാനിക്കുന്നത് $0, 1, 4, 5, 6, 9$ എന്നിവയിൽ മാത്രമാണ്. അതിനാൽ $2, 3, 7, 8$ എന്നിവയിൽ അവസാനിക്കുന്നവ ഒരിക്കലും വർഗ്ഗമാകില്ല.</li>
        <li>$1057$ ($7$-ൽ അവസാനിക്കുന്നു), $23453$ ($3$-ൽ അവസാനിക്കുന്നു), $7928$ ($8$-ൽ അവസാനിക്കുന്നു), $222222$ ($2$-ൽ അവസാനിക്കുന്നു) എന്നിവ പൂർണ്ണവർഗ്ഗങ്ങളല്ല.</li>
        <li>$1089 = 33^2$, $441 = 21^2$. ഇവ രണ്ടും പൂർണ്ണവർഗ്ഗങ്ങളാണ്.</li>
      </ol>`
  },

  {
    id: 'w.m8.1.2',
    sec: '8.1.2',
    concept: 'm8.1.2.geo-squares',
    title_en: 'Geometric Representation of Area and Square Numbers',
    title_ml: 'വിസ്തീർണ്ണവും വർഗ്ഗസംഖ്യകളും ജ്യാമിതീയമായി കണ്ടെത്തൽ',
    prompt_en: `<p>A large square has side length $12\\text{ cm}$.</p>
      <ol type="a">
        <li>Find the area of this square.</li>
        <li>If the square is split into a square of side $10\\text{ cm}$, two rectangles of dimensions $10\\text{ cm} \\times 2\\text{ cm}$, and a square of side $2\\text{ cm}$, find the sum of their individual areas.</li>
        <li>What algebraic identity does this geometric partition represent?</li>
      </ol>`,
    prompt_ml: `<p>വശത്തിന്റെ നീളം $12\\text{ cm}$ ആയ ഒരു വലിയ സമചതുരം പരിഗണിക്കുക.</p>
      <ol type="a">
        <li>ഈ സമചതുരത്തിന്റെ വിസ്തീർണ്ണം കാണുക.</li>
        <li>ഇതിനെ വശം $10\\text{ cm}$ ആയ സമചതുരം, $10\\text{ cm} \\times 2\\text{ cm}$ അളവുകളുള്ള രണ്ട് ചതുരങ്ങൾ, വശം $2\\text{ cm}$ ആയ സമചതുരം എന്നിങ്ങനെ വിഭജിച്ചാൽ അവയുടെ വിസ്തീർണ്ണങ്ങളുടെ തുക എത്രയാണ്?</li>
        <li>ഈ വിഭജനം ഏത് ബീജഗണിത സമവാക്യത്തെയാണ് പ്രതിനിധീകരിക്കുന്നത്?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Area $= 12^2 = \\mathbf{144\\text{ cm}^2}$.</li>
        <li>Sum of areas $= 10^2 + 2(10 \\times 2) + 2^2 = 100 + 40 + 4 = \\mathbf{144\\text{ cm}^2}$.</li>
        <li>It represents the square of a sum identity: $(a + b)^2 = a^2 + 2ab + b^2$, where $a = 10$ and $b = 2$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>വിസ്തീർണ്ണം $= 12^2 = \\mathbf{144\\text{ cm}^2}$.</li>
        <li>വിസ്തീർണ്ണങ്ങളുടെ തുക $= 10^2 + 2(10 \\times 2) + 2^2 = 100 + 40 + 4 = \\mathbf{144\\text{ cm}^2}$.</li>
        <li>ഇത് തുകയുടെ വർഗ്ഗം എന്ന സമവാക്യത്തെ പ്രതിനിധീകരിക്കുന്നു: $(a + b)^2 = a^2 + 2ab + b^2$ ($a = 10, b = 2$).</li>
      </ol>`
  },

  {
    id: 'w.m8.1.6',
    sec: '8.1.6',
    concept: 'm8.1.6.square-roots',
    title_en: 'Finding Square Roots by Prime Factorisation',
    title_ml: 'അഭാജ്യഘടകക്രിയ വഴി വർഗ്ഗമൂലം കാണൽ',
    prompt_en: `<p>Find the square roots of the following numbers using prime factorisation:</p>
      <ol type="a">
        <li>$576$</li>
        <li>$1764$</li>
      </ol>`,
    prompt_ml: `<p>അഭാജ്യഘടകക്രിയ ഉപയോഗിച്ച് താഴെ പറയുന്ന സംഖ്യകളുടെ വർഗ്ഗമൂലം കാണുക:</p>
      <ol type="a">
        <li>$576$</li>
        <li>$1764$</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>$576 = 2^6 \\times 3^2$.<br>
          $\\sqrt{576} = 2^3 \\times 3 = 8 \\times 3 = \\mathbf{24}$.</li>
        <li>$1764 = 2^2 \\times 3^2 \\times 7^2$.<br>
          $\\sqrt{1764} = 2 \\times 3 \\times 7 = \\mathbf{42}$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$576 = 2^6 \\times 3^2$.<br>
          $\\sqrt{576} = 2^3 \\times 3 = 8 \\times 3 = \\mathbf{24}$.</li>
        <li>$1764 = 2^2 \\times 3^2 \\times 7^2$.<br>
          $\\sqrt{1764} = 2 \\times 3 \\times 7 = \\mathbf{42}$.</li>
      </ol>`
  }
);
