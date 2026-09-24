/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 11: Equations (സമവാക്യങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     8.11.1 Inversion Method
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.11.1',
    concept: 'm8.11.1.inversion-method',
    sec: '8.11.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'When 25 is added to 4 times a number, the result is 105. What is the number?',
    prompt_ml: 'ഒരു സംഖ്യയുടെ 4 മടങ്ങിനോട് 25 കൂട്ടിയപ്പോൾ 105 കിട്ടി. സംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$20$' },
      { k: 'B', t: '$25$' },
      { k: 'C', t: '$30$' },
      { k: 'D', t: '$15$' }
    ],
    options_ml: [
      { k: 'A', t: '$20$' },
      { k: 'B', t: '$25$' },
      { k: 'C', t: '$30$' },
      { k: 'D', t: '$15$' }
    ],
    answer: 'A',
    solution_en: 'By inversion method: subtract 25, then divide by 4: $\\frac{105 - 25}{4} = \\frac{80}{4} = 20$.',
    solution_ml: 'വിപരീതക്രിയ വഴി: 105-ൽ നിന്ന് 25 കുറച്ച് 4 കൊണ്ട് ഹരിക്കുക: $\\frac{105 - 25}{4} = \\frac{80}{4} = 20$.',
    tested_en: 'Solving a two-step inversion problem.',
    tested_ml: 'വിപരീതക്രിയ വഴി സംഖ്യ കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m8.11.2',
    concept: 'm8.11.1.inversion-method',
    sec: '8.11.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A number is divided by 3, and 7 is subtracted from the quotient to get 5. What is the number?',
    prompt_ml: 'ഒരു സംഖ്യയെ 3 കൊണ്ട് ഹരിച്ച് കിട്ടിയ ഫലത്തിൽ നിന്ന് 7 കുറച്ചപ്പോൾ 5 കിട്ടി. സംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$36$' },
      { k: 'B', t: '$12$' },
      { k: 'C', t: '$24$' },
      { k: 'D', t: '$18$' }
    ],
    options_ml: [
      { k: 'A', t: '$36$' },
      { k: 'B', t: '$12$' },
      { k: 'C', t: '$24$' },
      { k: 'D', t: '$18$' }
    ],
    answer: 'A',
    solution_en: 'Reverse operations: add 7, then multiply by 3: $(5 + 7) \\times 3 = 12 \\times 3 = 36$.',
    solution_ml: 'വിപരീതക്രിയകൾ: 5-നോട് 7 കൂട്ടിയ ശേഷം 3 കൊണ്ട് ഗുണിക്കുക: $(5 + 7) \\times 3 = 12 \\times 3 = 36$.',
    tested_en: 'Inversion involving division and subtraction.',
    tested_ml: 'ഹരണവും കുറയ്ക്കലും ഉൾപ്പെട്ട വിപരീതക്രിയ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.11.2 Linear Equations in One Variable
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.11.3',
    concept: 'm8.11.2.linear-equations-one-variable',
    sec: '8.11.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $6x - 14 = 28$, what is the value of $x$?',
    prompt_ml: '$6x - 14 = 28$ ആയാൽ $x$-ന്റെ വില എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$8$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$9$' }
    ],
    options_ml: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$8$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$9$' }
    ],
    answer: 'A',
    solution_en: '$6x = 28 + 14 = 42 \\implies x = \\frac{42}{6} = 7$.',
    solution_ml: '$6x = 28 + 14 = 42 \\implies x = \\frac{42}{6} = 7$.',
    tested_en: 'Solving a two-step linear equation.',
    tested_ml: 'രണ്ട് ഘട്ടങ്ങളുള്ള രേഖീയ സമവാക്യം നിർദ്ധാരണം ചെയ്യൽ.'
  },
  {
    id: 'obj.m8.11.4',
    concept: 'm8.11.2.linear-equations-one-variable',
    sec: '8.11.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the solution of $\\frac{x}{4} + 5 = 12$?',
    prompt_ml: '$\\frac{x}{4} + 5 = 12$ എന്ന സമവാക്യത്തിന്റെ പരിഹാരം എന്താണ്?',
    options_en: [
      { k: 'A', t: '$28$' },
      { k: 'B', t: '$48$' },
      { k: 'C', t: '$24$' },
      { k: 'D', t: '$32$' }
    ],
    options_ml: [
      { k: 'A', t: '$28$' },
      { k: 'B', t: '$48$' },
      { k: 'C', t: '$24$' },
      { k: 'D', t: '$32$' }
    ],
    answer: 'A',
    solution_en: '$\\frac{x}{4} = 12 - 5 = 7 \\implies x = 7 \\times 4 = 28$.',
    solution_ml: '$\\frac{x}{4} = 12 - 5 = 7 \\implies x = 7 \\times 4 = 28$.',
    tested_en: 'Linear equation with fractional coefficient.',
    tested_ml: 'ഭിന്നസംഖ്യ ഗുണകമായുള്ള സമവാക്യം പരിഹരിക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.11.3 Variables on Both Sides
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.11.5',
    concept: 'm8.11.3.variable-on-both-sides',
    sec: '8.11.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Solve for $x$: $7x + 4 = 3x + 24$',
    prompt_ml: '$7x + 4 = 3x + 24$ സമവാക്യത്തിൽ $x$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$7$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$7$' }
    ],
    answer: 'A',
    solution_en: '$7x - 3x = 24 - 4 \\implies 4x = 20 \\implies x = 5$.',
    solution_ml: '$7x - 3x = 24 - 4 \\implies 4x = 20 \\implies x = 5$.',
    tested_en: 'Linear equation with variable on both sides.',
    tested_ml: 'ഇരുവശത്തും ചരമുള്ള സമവാക്യ പരിഹാരം.'
  },
  {
    id: 'obj.m8.11.6',
    concept: 'm8.11.3.variable-on-both-sides',
    sec: '8.11.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Solve: $5(x - 2) = 2x + 11$',
    prompt_ml: '$5(x - 2) = 2x + 11$ നിർദ്ധാരണം ചെയ്യുക:',
    options_en: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$9$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$8$' }
    ],
    options_ml: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$9$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$8$' }
    ],
    answer: 'A',
    solution_en: '$5x - 10 = 2x + 11 \\implies 5x - 2x = 11 + 10 \\implies 3x = 21 \\implies x = 7$.',
    solution_ml: '$5x - 10 = 2x + 11 \\implies 5x - 2x = 11 + 10 \\implies 3x = 21 \\implies x = 7$.',
    tested_en: 'Equation requiring bracket expansion and transposition.',
    tested_ml: 'ബ്രാക്കറ്റ് വികസിപ്പിച്ച് പക്ഷാന്തരം ചെയ്യേണ്ട സമവാക്യം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.11.4 Applied Problems
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.11.7',
    concept: 'm8.11.4.applied-equation-problems',
    sec: '8.11.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The perimeter of a rectangle is $50\\text{ cm}$. Its length is $5\\text{ cm}$ more than its breadth. What is its breadth?',
    prompt_ml: 'ഒരു ചതുരത്തിന്റെ ചുറ്റളവ് $50\\text{ cm}$ ആണ്. നീളം വീതിയേക്കാൾ $5\\text{ cm}$ കൂടുതലായാൽ വീതി എത്ര?',
    options_en: [
      { k: 'A', t: '$10\\text{ cm}$' },
      { k: 'B', t: '$15\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$20\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$10\\text{ cm}$' },
      { k: 'B', t: '$15\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$20\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Let breadth be $x$. Length $= x + 5$. $2(x + x + 5) = 50 \\implies 4x + 10 = 50 \\implies 4x = 40 \\implies x = 10\\text{ cm}$.',
    solution_ml: 'വീതി $x$ என்க. നീളം $= x + 5$. $2(x + x + 5) = 50 \\implies 4x + 10 = 50 \\implies 4x = 40 \\implies x = 10\\text{ cm}$.',
    tested_en: 'Rectangle perimeter word problem.',
    tested_ml: 'ചതുരത്തിന്റെ ചുറ്റളവ് അടിസ്ഥാനമാക്കിയുള്ള കണക്ക്.'
  },
  {
    id: 'obj.m8.11.8',
    concept: 'm8.11.4.applied-equation-problems',
    sec: '8.11.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The sum of three consecutive natural numbers is $72$. What is the middle number?',
    prompt_ml: 'തുടർച്ചയായ മൂന്ന് എണ്ണൽസംഖ്യകളുടെ തുക $72$ ആണ്. നടുവിലെ സംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$24$' },
      { k: 'B', t: '$23$' },
      { k: 'C', t: '$25$' },
      { k: 'D', t: '$22$' }
    ],
    options_ml: [
      { k: 'A', t: '$24$' },
      { k: 'B', t: '$23$' },
      { k: 'C', t: '$25$' },
      { k: 'D', t: '$22$' }
    ],
    answer: 'A',
    solution_en: 'Let numbers be $x - 1, x, x + 1$. Their sum is $3x = 72 \\implies x = \\frac{72}{3} = 24$.',
    solution_ml: 'സംഖ്യകൾ $x - 1, x, x + 1$ എന്നിരിക്കട്ടെ. തുക $= 3x = 72 \\implies x = \\frac{72}{3} = 24$.',
    tested_en: 'Consecutive numbers sum word problem.',
    tested_ml: 'തുടർച്ചയായ സംഖ്യകളുടെ തുക കാണൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m8.11.1',
    sec: '8.11.1',
    concept: 'm8.11.1.inversion-method',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Solving Multi-Step Word Problems by Inversion',
    title_ml: 'വിപരീതക്രിയ വഴി അജ്ഞാതവില കണ്ടെത്തൽ',
    prompt_en: '<p>A person bought 4 kg of okra (lady’s finger) and curry leaves for ₹20. The total bill came to ₹200. Find the price of 1 kg of okra using the inversion method.</p>',
    prompt_ml: '<p>റഷീദ 4 കിലോഗ്രാം വെണ്ടയ്ക്കയും 20 രൂപയ്ക്ക് കറിവേപ്പിലയും വാങ്ങി. ആകെ 200 രൂപയായി. വിപരീതക്രിയാരീതി ഉപയോഗിച്ച് ഒരു കിലോഗ്രാം വെണ്ടയ്ക്കയുടെ വില കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Total amount paid} = ₹200$$
$$\\text{Step 1: Undo addition of ₹20 for curry leaves}$$
$$\\text{Cost of 4 kg okra} = 200 - 20 = ₹180$$

$$\\text{Step 2: Undo multiplication by 4 kg}$$
$$\\text{Price of 1 kg okra} = \\frac{180}{4} = \\mathbf{₹45}$$`,
    solution_ml: `$$\\text{ആകെ നൽകിയ തുക} = ₹200$$
$$\\text{ഘട്ടം 1: കറിവേപ്പിലയുടെ ₹20 കുറയ്ക്കുക (കൂട്ടലിന്റെ വിപരീതം)}$$
$$4\\text{ kg വെണ്ടയ്ക്കയുടെ വില} = 200 - 20 = ₹180$$

$$\\text{ഘട്ടം 2: 4 കൊണ്ട് ഹരിക്കുക (ഗുണനത്തിന്റെ വിപരീതം)}$$
$$1\\text{ kg വെണ്ടയ്ക്കയുടെ വില} = \\frac{180}{4} = \\mathbf{₹45}$$`,
    tested_en: 'Inversion method to undo operations in real-world retail pricing.',
    tested_ml: 'വിപരീതക്രിയ വഴി നിത്യജീവിത പ്രശ്നങ്ങളുടെ പരിഹാരം കാണൽ.'
  },

  {
    id: 'w.m8.11.2',
    sec: '8.11.2',
    concept: 'm8.11.2.linear-equations-one-variable',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Formulating and Solving Linear Equations',
    title_ml: 'രേഖീയ സമവാക്യം രൂപീകരിച്ച് പരിഹാരം കാണൽ',
    prompt_en: '<p>The sum of 2 times a number and 7 times the same number is 54. Formulate an algebraic equation and find the number.</p>',
    prompt_ml: '<p>ഒരു സംഖ്യയുടെ 2 മടങ്ങും 7 മടങ്ങും തമ്മിൽ കൂട്ടിയപ്പോൾ 54 കിട്ടി. ബീജഗണിത സമവാക്യം രൂപീകരിച്ച് സംഖ്യ കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Let the unknown number be } x.$$
$$\\text{Equation: } 2x + 7x = 54$$
$$9x = 54$$
$$x = \\frac{54}{9} = \\mathbf{6}$$
$$\\text{Verification: } 2(6) + 7(6) = 12 + 42 = 54.$$`,
    solution_ml: `$$\\text{അജ്ഞാത സംഖ്യ } x \\text{ എന്നിരിക്കട്ടെ.}$$
$$\\text{സമവാക്യം: } 2x + 7x = 54$$
$$9x = 54$$
$$x = \\frac{54}{9} = \\mathbf{6}$$
$$\\text{പരിശോധന: } 2(6) + 7(6) = 12 + 42 = 54.$$`,
    tested_en: 'Linear equation formulation and solving for single variable.',
    tested_ml: 'ഏകചര രേഖീയ സമവാക്യ രൂപീകരണവും നിർദ്ധാരണവും.'
  },

  {
    id: 'w.m8.11.3',
    sec: '8.11.3',
    concept: 'm8.11.3.variable-on-both-sides',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Equation with Variables on Both Sides and Currency Problem',
    title_ml: 'ഇരുവശത്തും ചരമുള്ള സമവാക്യവും കറൻസി നോട്ടുകളുടെ എണ്ണവും',
    prompt_en: '<p>When a total of ₹100 was changed into notes, only ₹20 notes and ₹10 notes were received. There were 7 notes in total. How many notes of each denomination were there?</p>',
    prompt_ml: '<p>100 രൂപ ചില്ലറയാക്കിയപ്പോൾ 20 രൂപയുടേയും 10 രൂപയുടേയും നോട്ടുകളാണ് ലഭിച്ചത്. ആകെ 7 നോട്ടുകൾ ലഭിച്ചെങ്കിൽ ഓരോന്നിലും എത്ര നോട്ടുകൾ വീതമുണ്ട്?</p>',
    solution_en: `$$\\text{Let the number of ₹20 notes be } x.$$
$$\\text{Then the number of ₹10 notes is } 7 - x.$$
$$\\text{Total Value: } 20x + 10(7 - x) = 100$$
$$20x + 70 - 10x = 100$$
$$10x + 70 = 100$$
$$10x = 100 - 70 = 30$$
$$x = \\frac{30}{10} = \\mathbf{3}$$
$$\\text{Number of ₹20 notes} = \\mathbf{3}$$
$$\\text{Number of ₹10 notes} = 7 - 3 = \\mathbf{4}$$`,
    solution_ml: `$$₹20\\text{-ന്റെ നോട്ടുകളുടെ എണ്ണം } x \\text{ എന്നിരിക്കട്ടെ.}$$
$$₹10\\text{-ന്റെ നോട്ടുകളുടെ എണ്ണം } 7 - x \\text{ ആയിരിക്കും.}$$
$$\\text{ആകെ തുക: } 20x + 10(7 - x) = 100$$
$$20x + 70 - 10x = 100$$
$$10x + 70 = 100$$
$$10x = 100 - 70 = 30$$
$$x = \\frac{30}{10} = \\mathbf{3}$$
$$₹20\\text{ നോട്ടുകൾ} = \\mathbf{3 \\text{ എണ്ണം}}$$
$$₹10\\text{ നോട്ടുകൾ} = 7 - 3 = \\mathbf{4 \\text{ എണ്ണം}}$$`,
    tested_en: 'System modeling with unknown distributions in currency denominations.',
    tested_ml: 'കറൻസി നോട്ടുകളുടെ എണ്ണവും മൂല്യവും അടിസ്ഥാനമാക്കിയുള്ള സമവാക്യ നിർമ്മാണം.'
  },

  {
    id: 'w.m8.11.4',
    sec: '8.11.4',
    concept: 'm8.11.4.applied-equation-problems',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Perimeter Application: Finding Rectangle Dimensions',
    title_ml: 'ചുറ്റളവ് ഉപയോഗിച്ച് ചതുരത്തിന്റെ വശങ്ങൾ കാണൽ',
    prompt_en: '<p>The length of a rectangular plot is 1 metre more than twice its breadth. If the perimeter of the plot is 80 metres, find its length and breadth.</p>',
    prompt_ml: '<p>ഒരു ചതുരാകൃതിയിലുള്ള സ്ഥലത്തിന്റെ നീളം, വീതിയുടെ രണ്ട് മടങ്ങിനേക്കാൾ ഒരു മീറ്റർ കൂടുതലാണ്. സ്ഥലത്തിന്റെ ചുറ്റളവ് 80 മീറ്ററാണെങ്കിൽ നീളവും വീതിയും എത്രയാണ്?</p>',
    solution_en: `$$\\text{Let breadth } = x\\text{ metres.}$$
$$\\text{Then length } = 2x + 1\\text{ metres.}$$
$$\\text{Perimeter } = 2(l + b) = 80$$
$$2[(2x + 1) + x] = 80$$
$$2(3x + 1) = 80$$
$$6x + 2 = 80 \\implies 6x = 78 \\implies x = \\frac{78}{6} = 13\\text{ m}$$

$$\\text{Breadth } = \\mathbf{13\\text{ m}}$$
$$\\text{Length } = 2(13) + 1 = 26 + 1 = \\mathbf{27\\text{ m}}$$`,
    solution_ml: `$$\\text{വീതി } = x\\text{ മീറ്റർ എന്നിരിക്കട്ടെ.}$$
$$\\text{അപ്പോൾ നീളം } = 2x + 1\\text{ മീറ്റർ.}$$
$$\\text{ചുറ്റളവ് } = 2(l + b) = 80$$
$$2[(2x + 1) + x] = 80$$
$$2(3x + 1) = 80$$
$$6x + 2 = 80 \\implies 6x = 78 \\implies x = \\frac{78}{6} = 13\\text{ മീറ്റർ}$$

$$\\text{വീതി } = \\mathbf{13\\text{ മീറ്റർ}}$$
$$\\text{നീളം } = 2(13) + 1 = 26 + 1 = \\mathbf{27\\text{ മീറ്റർ}}$$`,
    tested_en: 'Geometric perimeter modeling with linear algebraic relationships.',
    tested_ml: 'ചതുരത്തിന്റെ ചുറ്റളവ് അടിസ്ഥാനമാക്കിയുള്ള ബീജഗണിത പ്രയോഗം.'
  },

  {
    id: 'w.m8.11.5',
    sec: '8.11.3',
    concept: 'm8.11.3.variable-on-both-sides',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Fractional Linear Equations and Consecutive Numbers',
    title_ml: 'ഭിന്നസംഖ്യാ സമവാക്യങ്ങളും തുടർച്ചയായ സംഖ്യകളും',
    prompt_en: `<ol type="a">
        <li>Solve the linear equation:
          $$\\frac{2x - 3}{4} + \\frac{x + 1}{2} = \\frac{5x + 1}{6}$$</li>
        <li>The sum of four consecutive odd natural numbers is $128$. Find the four numbers.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>രേഖീയ സമവാക്യം നിർദ്ധാരണം ചെയ്യുക:
          $$\\frac{2x - 3}{4} + \\frac{x + 1}{2} = \\frac{5x + 1}{6}$$</li>
        <li>തുടർച്ചയായ നാല് ഒറ്റ സംഖ്യകളുടെ തുക $128$ ആണ്. സംഖ്യകൾ കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Multiply both sides by the LCM of the denominators $4, 2, 6$, which is $12$:
          $$12 \\times \\left(\\frac{2x - 3}{4}\\right) + 12 \\times \\left(\\frac{x + 1}{2}\\right) = 12 \\times \\left(\\frac{5x + 1}{6}\\right)$$
          $$3(2x - 3) + 6(x + 1) = 2(5x + 1)$$
          $$6x - 9 + 6x + 6 = 10x + 2$$
          $$12x - 3 = 10x + 2 \\implies 12x - 10x = 2 + 3 \\implies 2x = 5 \\implies \\mathbf{x = \\frac{5}{2} = 2.5}$$</li>
        <li>Let the four consecutive odd numbers be $x, x+2, x+4, x+6$.
          $$x + (x + 2) + (x + 4) + (x + 6) = 128$$
          $$4x + 12 = 128 \\implies 4x = 116 \\implies x = \\frac{116}{4} = 29$$
          The numbers are $\\mathbf{29, 31, 33, 35}$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ഛേദങ്ങളായ $4, 2, 6$ എന്നിവയുടെ ല.സാ.ഗുവായ $12$ കൊണ്ട് ഇരുവശത്തെയും ഗുണിക്കുന്നു:
          $$3(2x - 3) + 6(x + 1) = 2(5x + 1)$$
          $$6x - 9 + 6x + 6 = 10x + 2$$
          $$12x - 3 = 10x + 2 \\implies 12x - 10x = 2 + 3 \\implies 2x = 5 \\implies \\mathbf{x = \\frac{5}{2} = 2.5}$$</li>
        <li>തുടർച്ചയായ നാല് ഒറ്റ സംഖ്യകൾ $x, x+2, x+4, x+6$ എന്നിരിക്കട്ടെ.
          $$4x + 12 = 128 \\implies 4x = 116 \\implies x = 29$$
          സംഖ്യകൾ $\\mathbf{29, 31, 33, 35}$ ആണ്.</li>
      </ol>`,
    tested_en: 'Fractional linear equations and consecutive odd integer sums.',
    tested_ml: 'ഛേദങ്ങളുള്ള രേഖീയ സമവാക്യങ്ങളും തുടർച്ചയായ ഒറ്റസംഖ്യകളുടെ തുകയും.'
  },

  {
    id: 'w.m8.11.6',
    sec: '8.11.4',
    concept: 'm8.11.4.applied-equation-problems',
    type: 'written',
    marks: 4,
    time: 210,
    title_en: 'Age Relationships and Speed-Distance Modeling',
    title_ml: 'പ്രായബന്ധങ്ങളും ദൂര-വേഗ സമവാക്യങ്ങളും',
    prompt_en: `<ol type="a">
        <li>A mother is currently $4$ times as old as her daughter. After $6$ years, the sum of their ages will be $62$ years. Find their present ages.</li>
        <li>A cyclist travels from town $A$ to town $B$ at a speed of $12\\text{ km/h}$ and returns at $18\\text{ km/h}$. If the total travel time for the round trip is $5\\text{ hours}$, find the distance between town $A$ and town $B$.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>ഒരമ്മയുടെ ഇപ്പോഴത്തെ പ്രായം മകളുടെ പ്രായത്തിന്റെ $4$ മടങ്ങാണ്. $6$ വർഷത്തിനു ശേഷം അവരുടെ പ്രായങ്ങളുടെ തുക $62$ ആകും. ഇരുവരുടെയും ഇപ്പോഴത്തെ പ്രായം കണ്ടെത്തുക.</li>
        <li>ഒരു സൈക്കിൾ യാത്രികൻ $A$-യിൽ നിന്ന് $B$-യിലേക്ക് മണിക്കൂറിൽ $12\\text{ km}$ വേഗത്തിലും, തിരിച്ച് മണിക്കൂറിൽ $18\\text{ km}$ വേഗത്തിലും സഞ്ചരിച്ചു. ആകെ യാത്രയ്ക്കായി $5\\text{ മണിക്കൂർ}$ എടുത്തുവെങ്കിൽ $A, B$ എന്നീ പട്ടണങ്ങൾ തമ്മിലുള്ള ദൂരം എത്ര?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Let the daughter's present age be $x$ years.<br>
          Mother's present age $= 4x$ years.<br>
          After 6 years:
          $$(x + 6) + (4x + 6) = 62$$
          $$5x + 12 = 62 \\implies 5x = 50 \\implies x = 10$$
          $$\\text{Daughter's present age} = \\mathbf{10\\text{ years}}$$
          $$\\text{Mother's present age} = 4 \\times 10 = \\mathbf{40\\text{ years}}$$</li>
        <li>Let distance between $A$ and $B$ be $d\\text{ km}$.<br>
          $$\\text{Time taken} = \\frac{d}{12} + \\frac{d}{18} = 5$$
          LCM of $12$ and $18$ is $36$:
          $$\\frac{3d + 2d}{36} = 5 \\implies \\frac{5d}{36} = 5 \\implies 5d = 180 \\implies d = \\mathbf{36\\text{ km}}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>മകളുടെ ഇപ്പോഴത്തെ പ്രായം $x$ വയസ്സ് എന്നിരിക്കട്ടെ.<br>
          അമ്മയുടെ പ്രായം $= 4x$ വയസ്സ്.<br>
          6 വർഷത്തിനു ശേഷം:
          $$(x + 6) + (4x + 6) = 62$$
          $$5x + 12 = 62 \\implies 5x = 50 \\implies x = 10$$
          $$\\text{മകളുടെ പ്രായം} = \\mathbf{10\\text{ വയസ്സ്}}$$
          $$\\text{അമ്മയുടെ പ്രായം} = 4 \\times 10 = \\mathbf{40\\text{ വയസ്സ്}}$$</li>
        <li>$A$-യും $B$-യും തമ്മിലുള്ള ദൂരം $d\\text{ km}$ എന്നിരിക്കട്ടെ.<br>
          $$\\text{ആകെ സമയം} = \\frac{d}{12} + \\frac{d}{18} = 5$$
          $12, 18$ എന്നിവയുടെ ല.സാ.ഗു $36$ ആണ്:
          $$\\frac{3d + 2d}{36} = 5 \\implies \\frac{5d}{36} = 5 \\implies 5d = 180 \\implies d = \\mathbf{36\\text{ km}}$$</li>
      </ol>`,
    tested_en: 'Linear equation modeling in age relationships and two-way travel time.',
    tested_ml: 'പ്രായബന്ധങ്ങളും യാത്രാസമയവും അടിസ്ഥാനമാക്കിയുള്ള സമവാക്യങ്ങൾ.'
  }
);
