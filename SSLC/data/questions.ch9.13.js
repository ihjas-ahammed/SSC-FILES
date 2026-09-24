/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 9 Chapter 13 — Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.13.1 Arithmetic Mean and Balance of Deviations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.13.1',
    concept: 'm9.13.1.arithmetic-mean-and-deviations',
    sec: '9.13.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The arithmetic mean of five numbers is $18$. If one of the numbers is excluded, the mean of the remaining numbers becomes $16$. What was the excluded number?',
    prompt_ml: 'അഞ്ച് സംഖ്യകളുടെ സമാന്തര ശരാശരി $18$ ആണ്. അതിലൊരു സംഖ്യ ഒഴിവാക്കിയപ്പോൾ ബാക്കി സംഖ്യകളുടെ ശരാശരി $16$ ആയി. ഒഴിവാക്കിയ സംഖ്യ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$26$' },
      { k: 'B', t: '$24$' },
      { k: 'C', t: '$20$' },
      { k: 'D', t: '$28$' }
    ],
    options_ml: [
      { k: 'A', t: '$26$' },
      { k: 'B', t: '$24$' },
      { k: 'C', t: '$20$' },
      { k: 'D', t: '$28$' }
    ],
    answer: 'A',
    solution_en: 'Sum of 5 numbers $= 5 \\times 18 = 90$. Sum of remaining 4 numbers $= 4 \\times 16 = 64$. Excluded number $= 90 - 64 = 26$.',
    solution_ml: '5 സംഖ്യകളുടെ തുക $= 5 \\times 18 = 90$. ബാക്കി 4 സംഖ്യകളുടെ തുക $= 4 \\times 16 = 64$. ഒഴിവാക്കിയ സംഖ്യ $= 90 - 64 = 26$.',
    tested_en: 'Calculating excluded value from aggregate mean difference.',
    tested_ml: 'ശരാശരി തുക വ്യത്യാസത്തിൽ നിന്നും ഒഴിവാക്കിയ സംഖ്യ കാണൽ.'
  },
  {
    id: 'obj.m9.13.2',
    concept: 'm9.13.1.arithmetic-mean-and-deviations',
    sec: '9.13.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The deviations of six numbers from their arithmetic mean are $+4, -3, +5, -2, -6,$ and $d$. What is the value of $d$?',
    prompt_ml: 'ആറ് സംഖ്യകളുടെ ശരാശരിയിൽ നിന്നുള്ള വ്യതിയാനങ്ങൾ $+4, -3, +5, -2, -6, d$ എന്നിവയാണ്. $d$-യുടെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$+2$' },
      { k: 'B', t: '$-2$' },
      { k: 'C', t: '$0$' },
      { k: 'D', t: '$+4$' }
    ],
    options_ml: [
      { k: 'A', t: '$+2$' },
      { k: 'B', t: '$-2$' },
      { k: 'C', t: '$0$' },
      { k: 'D', t: '$+4$' }
    ],
    answer: 'A',
    solution_en: 'The sum of all deviations from the mean is strictly zero: $(4 - 3 + 5 - 2 - 6) + d = 0 \\implies -2 + d = 0 \\implies d = +2$.',
    solution_ml: 'ശരാശരിയിൽ നിന്നുള്ള വ്യതിയാനങ്ങളുടെ ആകെത്തുക എപ്പോഴും പൂജ്യമായിരിക്കും: $(4 - 3 + 5 - 2 - 6) + d = 0 \\implies -2 + d = 0 \\implies d = +2$.',
    tested_en: 'Zero sum of deviations property.',
    tested_ml: 'വ്യതിയാനങ്ങളുടെ തുക പൂജ്യമാകുന്ന നിയമം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.13.2 Mean of Frequency Distributions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.13.3',
    concept: 'm9.13.2.mean-of-frequency-distributions',
    sec: '9.13.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a class test, marks and student frequencies are: 10 marks (4 students), 20 marks (6 students), 30 marks (8 students), 40 marks (2 students). What is the mean score?',
    prompt_ml: 'ഒരു ക്ലാസ് പരീക്ഷയിൽ മാർക്കും കുട്ടികളുടെ എണ്ണവും: 10 മാർക്ക് (4 പേർ), 20 മാർക്ക് (6 പേർ), 30 മാർക്ക് (8 പേർ), 40 മാർക്ക് (2 പേർ). ശരാശരി മാർക്ക് എത്ര?',
    options_en: [
      { k: 'A', t: '$24$' },
      { k: 'B', t: '$25$' },
      { k: 'C', t: '$20$' },
      { k: 'D', t: '$22.5$' }
    ],
    options_ml: [
      { k: 'A', t: '$24$' },
      { k: 'B', t: '$25$' },
      { k: 'C', t: '$20$' },
      { k: 'D', t: '$22.5$' }
    ],
    answer: 'A',
    solution_en: '$\\sum fx = (10 \\times 4) + (20 \\times 6) + (30 \\times 8) + (40 \\times 2) = 40 + 120 + 240 + 80 = 480$. $N = 4 + 6 + 8 + 2 = 20$. $\\bar{x} = \\frac{480}{20} = 24$.',
    solution_ml: '$\\sum fx = 40 + 120 + 240 + 80 = 480$. ആകെ കുട്ടികൾ $N = 20$. $\\bar{x} = \\frac{480}{20} = 24$.',
    tested_en: 'Mean calculation for discrete frequency table.',
    tested_ml: 'ആവൃത്തി പട്ടികയിലെ ശരാശരി കാണൽ.'
  },
  {
    id: 'obj.m9.13.4',
    concept: 'm9.13.2.mean-of-frequency-distributions',
    sec: '9.13.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If each observation $x_i$ in a dataset with mean $25$ is multiplied by $3$ and then increased by $5$, what is the new mean?',
    prompt_ml: 'ശരാശരി $25$ ഉള്ള ഒരു കൂട്ടം വിവരങ്ങളിലെ ഓരോ സംഖ്യയെയും $3$ കൊണ്ട് ഗുണിച്ച് $5$ കൂട്ടിയാൽ ലഭിക്കുന്ന പുതിയ ശരാശരി എത്ര?',
    options_en: [
      { k: 'A', t: '$80$' },
      { k: 'B', t: '$75$' },
      { k: 'C', t: '$30$' },
      { k: 'D', t: '$90$' }
    ],
    options_ml: [
      { k: 'A', t: '$80$' },
      { k: 'B', t: '$75$' },
      { k: 'C', t: '$30$' },
      { k: 'D', t: '$90$' }
    ],
    answer: 'A',
    solution_en: 'By linearity of the mean, if $y_i = 3x_i + 5$, then $\\bar{y} = 3\\bar{x} + 5 = 3(25) + 5 = 75 + 5 = 80$.',
    solution_ml: 'ശരാശരിയുടെ രേഖീയ സ്വഭാവമനുസരിച്ച്, പുതിയ ശരാശരി $= 3\\bar{x} + 5 = 3(25) + 5 = 75 + 5 = 80$.',
    tested_en: 'Linear transformation effect on arithmetic mean.',
    tested_ml: 'വിവരങ്ങളിൽ മാറ്റം വരുത്തുമ്പോൾ ശരാശരിയിലുണ്ടാകുന്ന വ്യത്യാസം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.13.3 Mean of Grouped Data and Class Marks
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.13.5',
    concept: 'm9.13.3.grouped-frequency-and-class-marks',
    sec: '9.13.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the class mark of the class interval $45 - 65$?',
    prompt_ml: '$45 - 65$ എന്ന ക്ലാസ് ഇടവേളയുടെ ക്ലാസ് മാർക്ക് (മധ്യവില) എത്ര?',
    options_en: [
      { k: 'A', t: '$55$' },
      { k: 'B', t: '$50$' },
      { k: 'C', t: '$60$' },
      { k: 'D', t: '$20$' }
    ],
    options_ml: [
      { k: 'A', t: '$55$' },
      { k: 'B', t: '$50$' },
      { k: 'C', t: '$60$' },
      { k: 'D', t: '$20$' }
    ],
    answer: 'A',
    solution_en: 'Class mark $= \\frac{45 + 65}{2} = \\frac{110}{2} = 55$.',
    solution_ml: 'ക്ലാസ് മാർക്ക് $= \\frac{45 + 65}{2} = \\frac{110}{2} = 55$.',
    tested_en: 'Computing midpoint / class mark of a class interval.',
    tested_ml: 'ക്ലാസ് മാർക്ക് കണക്കാക്കൽ.'
  },
  {
    id: 'obj.m9.13.6',
    concept: 'm9.13.3.grouped-frequency-and-class-marks',
    sec: '9.13.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a grouped frequency distribution, $\\sum f_i x_i = 1680$ and total frequency $N = 40$. What is the arithmetic mean?',
    prompt_ml: 'ഒരു വർഗ്ഗീകരിച്ച ആവൃത്തി പട്ടികയിൽ $\\sum f_i x_i = 1680$-ഉം ആകെ ആവൃത്തി $N = 40$-ഉം ആണ്. സമാന്തര ശരാശരി എത്ര?',
    options_en: [
      { k: 'A', t: '$42$' },
      { k: 'B', t: '$40$' },
      { k: 'C', t: '$44$' },
      { k: 'D', t: '$38$' }
    ],
    options_ml: [
      { k: 'A', t: '$42$' },
      { k: 'B', t: '$40$' },
      { k: 'C', t: '$44$' },
      { k: 'D', t: '$38$' }
    ],
    answer: 'A',
    solution_en: '$\\bar{x} = \\frac{\\sum f_i x_i}{N} = \\frac{1680}{40} = 42$.',
    solution_ml: '$\\bar{x} = \\frac{\\sum f_i x_i}{N} = \\frac{1680}{40} = 42$.',
    tested_en: 'Grouped frequency distribution mean quotient.',
    tested_ml: 'വർഗ്ഗീകരിച്ച ആവൃത്തി പട്ടികയിലെ ശരാശരി കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.13.4 Assumed Mean Method
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.13.7',
    concept: 'm9.13.4.assumed-mean-method',
    sec: '9.13.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In an assumed mean calculation, assumed mean $A = 150$, total frequency $N = 50$, and $\\sum f_i d_i = -100$. What is the actual mean?',
    prompt_ml: 'സങ്കല്പിത ശരാശരി രീതിയിൽ $A = 150$, ആകെ ആവൃത്തി $N = 50$, $\\sum f_i d_i = -100$ ആയാൽ യഥാർത്ഥ ശരാശരി എത്ര?',
    options_en: [
      { k: 'A', t: '$148$' },
      { k: 'B', t: '$152$' },
      { k: 'C', t: '$145$' },
      { k: 'D', t: '$150$' }
    ],
    options_ml: [
      { k: 'A', t: '$148$' },
      { k: 'B', t: '$152$' },
      { k: 'C', t: '$145$' },
      { k: 'D', t: '$150$' }
    ],
    answer: 'A',
    solution_en: '$\\bar{x} = A + \\frac{\\sum f_i d_i}{N} = 150 + \\frac{-100}{50} = 150 - 2 = 148$.',
    solution_ml: '$\\bar{x} = A + \\frac{\\sum f_i d_i}{N} = 150 + \\frac{-100}{50} = 150 - 2 = 148$.',
    tested_en: 'Assumed mean computation with negative deviation sum.',
    tested_ml: 'സങ്കല്പിത ശരാശരി രീതി ഉപയോഗിച്ച് ശരാശരി കാണൽ.'
  },
  {
    id: 'obj.m9.13.8',
    concept: 'm9.13.4.assumed-mean-method',
    sec: '9.13.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Why does shifting each class mark by a constant $A$ ($d_i = x_i - A$) not alter the final calculated mean value?',
    prompt_ml: 'ക്ലാസ് മാർക്കുകളെ ഒരു സ്ഥിരസംഖ്യ $A$ കുറച്ച് വ്യതിയാനങ്ങളാക്കി മാറ്റിയാലും ($d_i = x_i - A$) അവസാന ശരാശരി കൃത്യമായി തുടരുന്നത് എന്തുകൊണ്ട്?',
    options_en: [
      { k: 'A', t: 'Because $A$ is algebraically added back to the mean of deviations' },
      { k: 'B', t: 'Because deviations always add up to $N$' },
      { k: 'C', t: 'Because the frequencies change proportionally' },
      { k: 'D', t: 'Because $A$ must always be chosen equal to the true mean' }
    ],
    options_ml: [
      { k: 'A', t: 'വ്യതിയാനങ്ങളുടെ ശരാശരിയോടൊപ്പം $A$ തിരികെ ചേർക്കപ്പെടുന്നു' },
      { k: 'B', t: 'വ്യതിയാനങ്ങളുടെ തുക എപ്പോഴും $N$ ആയതിനാൽ' },
      { k: 'C', t: 'ആവൃത്തികൾ ആനുപാതികമായി മാറുന്നതിനാൽ' },
      { k: 'D', t: '$A$ എപ്പോഴും യഥാർത്ഥ ശരാശരിക്ക് തുല്യമായിരിക്കണം എന്നതിനാൽ' }
    ],
    answer: 'A',
    solution_en: 'Since $x_i = A + d_i$, the mean $\\bar{x} = \\frac{\\sum f_i (A + d_i)}{N} = A + \\frac{\\sum f_i d_i}{N}$, which mathematically preserves the exact value.',
    solution_ml: '$x_i = A + d_i$ ആയതിനാൽ ശരാശരിയിൽ $A$-യെ തിരികെ ചേർക്കുന്നത് യഥാർത്ഥ വില മാറ്റമില്ലാതെ നിലനിർത്തുന്നു.',
    tested_en: 'Mathematical rationale of the assumed mean method.',
    tested_ml: 'സങ്കല്പിത ശരാശരി രീതിയുടെ ഗണിതശാസ്ത്രപരമായ അടിസ്ഥാനം.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     Level 2 Written Exercises (1 per section)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m9.13.1',
    concept: 'm9.13.1.arithmetic-mean-and-deviations',
    sec: '9.13.1',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Arithmetic Mean and Balance of Excess and Deficit Deviations',
    title_ml: 'സമാന്തര ശരാശരിയും വ്യതിയാനങ്ങളുടെ സന്തുലനവും',
    prompt_en: '<p>The daily pocket money (in rupees) of $8$ students is: $32, 45, 28, 50, 42, 38, 48, 37$.</p><p>(i) Calculate the arithmetic mean daily pocket money.</p><p>(ii) Calculate the deviation of each student’s money from the mean.</p><p>(iii) Show that the sum of the positive deviations (total excess) exactly equals the sum of the absolute negative deviations (total deficit).</p>',
    prompt_ml: '<p>$8$ കുട്ടികളുടെ ദിവസേനയുള്ള പോക്കറ്റ് മണി (രൂപയിൽ): $32, 45, 28, 50, 42, 38, 48, 37$.</p><p>(i) ദിവസേനയുള്ള പോക്കറ്റ് മണിയുടെ സമാന്തര ശരാശരി കാണുക.</p><p>(ii) ഓരോ കുട്ടിയുടെയും തുക ശരാശരിയിൽ നിന്ന് എത്ര വ്യതിചലിച്ചിരിക്കുന്നു എന്ന് കണക്കാക്കുക.</p><p>(iii) ശരാശരിയേക്കാൾ കൂടുതലുള്ള തുകകളുടെ ആകെത്തുകയും കുറവുള്ള തുകകളുടെ ആകെത്തുകയും തുല്യമാണെന്ന് തെളിയിക്കുക.</p>',
    solution_en: `<h4>Step 1: Compute Arithmetic Mean</h4>
$$\\text{Sum} = 32 + 45 + 28 + 50 + 42 + 38 + 48 + 37 = 320$$
$$N = 8$$
$$\\bar{x} = \\frac{320}{8} = \\mathbf{40\\text{ rupees}}$$

<h4>Step 2: Calculate Deviations ($x_i - \\bar{x}$)</h4>
<ul>
  <li>$32 - 40 = -8$ (deficit 8)</li>
  <li>$45 - 40 = +5$ (excess 5)</li>
  <li>$28 - 40 = -12$ (deficit 12)</li>
  <li>$50 - 40 = +10$ (excess 10)</li>
  <li>$42 - 40 = +2$ (excess 2)</li>
  <li>$38 - 40 = -2$ (deficit 2)</li>
  <li>$48 - 40 = +8$ (excess 8)</li>
  <li>$37 - 40 = -3$ (deficit 3)</li>
</ul>

<h4>Step 3: Verify Balance of Excess and Deficit</h4>
$$\\text{Total Excess} = 5 + 10 + 2 + 8 = \\mathbf{25}$$
$$\\text{Total Deficit} = 8 + 12 + 2 + 3 = \\mathbf{25}$$
<p>Since Total Excess $=$ Total Deficit $= 25$, the net algebraic deviation is $25 - 25 = 0$.</p>`,
    solution_ml: `<h4>ഘട്ടം 1: സമാന്തര ശരാശരി കണക്കാക്കൽ</h4>
$$\\text{ആകെ തുക} = 32 + 45 + 28 + 50 + 42 + 38 + 48 + 37 = 320$$
$$\\text{ശരാശരി } \\bar{x} = \\frac{320}{8} = \\mathbf{40\\text{ രൂപ}}$$

<h4>ഘട്ടം 2: വ്യതിയാനങ്ങൾ ($x_i - 40$)</h4>
<p>കൂടുതലുള്ളവ: $45 (+5), 50 (+10), 42 (+2), 48 (+8)$</p>
<p>കുറവുള്ളവ: $32 (-8), 28 (-12), 38 (-2), 37 (-3)$</p>

<h4>ഘട്ടം 3: സന്തുലന പരിശോധന</h4>
$$\\text{ആകെ കൂടുതൽ} = 5 + 10 + 2 + 8 = \\mathbf{25}$$
$$\\text{ആകെ കുറവ്} = 8 + 12 + 2 + 3 = \\mathbf{25}$$
<p>ആകെ കൂടുതൽ $=$ ആകെ കുറവ് $= 25$ ആയതിനാൽ വ്യതിയാനങ്ങളുടെ ആകെത്തുക പൂജ്യമാണ്.</p>`,
    tested_en: 'Arithmetic mean calculation and verification of excess-deficit balance.',
    tested_ml: 'ശരാശരി കണക്കാക്കലും കൂടുതൽ-കുറവ് സന്തുലന സമർത്ഥനവും.'
  },

  {
    id: 'w.m9.13.2',
    concept: 'm9.13.2.mean-of-frequency-distributions',
    sec: '9.13.2',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Mean Daily Wage from Discrete Frequency Distribution',
    title_ml: 'ദിവസക്കൂലിയുടെ ആവൃത്തി പട്ടികയിൽ നിന്നുള്ള ശരാശരി കണക്കാക്കൽ',
    prompt_en: '<p>The table below shows the distribution of daily wages of workers in a workshop:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>Daily Wage (₹)</th><td>400</td><td>450</td><td>500</td><td>550</td><td>600</td></tr><tr><th>Number of Workers</th><td>5</td><td>8</td><td>12</td><td>10</td><td>5</td></tr></table><p>(i) Find the total number of workers ($N$).</p><p>(ii) Calculate the total wage payout ($\\sum fx$).</p><p>(iii) Calculate the mean daily wage of the workers.</p>',
    prompt_ml: '<p>ഒരു വർക്ക്‌ഷോപ്പിലെ തൊഴിലാളികളുടെ ദിവസക്കൂലി വിവരങ്ങൾ താഴെ നൽകുന്നു:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>ദിവസക്കൂലി (₹)</th><td>400</td><td>450</td><td>500</td><td>550</td><td>600</td></tr><tr><th>തൊഴിലാളികളുടെ എണ്ണം</th><td>5</td><td>8</td><td>12</td><td>10</td><td>5</td></tr></table><p>(i) ആകെ തൊഴിലാളികളുടെ എണ്ണം ($N$) കാണുക.</p><p>(ii) ദിവസേന നൽകുന്ന ആകെ കൂലി ($\\sum fx$) കണക്കാക്കുക.</p><p>(iii) ഒരു തൊഴിലാളിയുടെ ശരാശരി ദിവസക്കൂലി കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Step 1: Compute Total Frequency ($N$)</h4>
$$N = \\sum f = 5 + 8 + 12 + 10 + 5 = \\mathbf{40\\text{ workers}}$$

<h4>Step 2: Compute Products $f_i x_i$ and Total Sum</h4>
<ul>
  <li>$400 \\times 5 = 2000$</li>
  <li>$450 \\times 8 = 3600$</li>
  <li>$500 \\times 12 = 6000$</li>
  <li>$550 \\times 10 = 5500$</li>
  <li>$600 \\times 5 = 3000$</li>
</ul>
$$\\sum f_i x_i = 2000 + 3600 + 6000 + 5500 + 3000 = \\mathbf{20100\\text{ rupees}}$$

<h4>Step 3: Compute Arithmetic Mean</h4>
$$\\bar{x} = \\frac{\\sum f_i x_i}{N} = \\frac{20100}{40} = \\mathbf{502.50\\text{ rupees}}$$`,
    solution_ml: `<h4>ഘട്ടം 1: ആകെ തൊഴിലാളികൾ ($N$)</h4>
$$N = 5 + 8 + 12 + 10 + 5 = \\mathbf{40}$$

<h4>ഘട്ടം 2: ആകെ കൂലി ($\\sum fx$)</h4>
<ul>
  <li>$400 \\times 5 = 2000$</li>
  <li>$450 \\times 8 = 3600$</li>
  <li>$500 \\times 12 = 6000$</li>
  <li>$550 \\times 10 = 5500$</li>
  <li>$600 \\times 5 = 3000$</li>
</ul>
$$\\sum fx = 2000 + 3600 + 6000 + 5500 + 3000 = \\mathbf{20100\\text{ രൂപ}}$$

<h4>ഘട്ടം 3: ശരാശരി ദിവസക്കൂലി</h4>
$$\\bar{x} = \\frac{20100}{40} = \\mathbf{502.50\\text{ രൂപ}}$$`,
    tested_en: 'Mean calculation for tabulated discrete frequency distribution.',
    tested_ml: 'ആവൃത്തി പട്ടികയിലെ ശരാശരി കണക്കാക്കൽ.'
  },

  {
    id: 'w.m9.13.3',
    concept: 'm9.13.3.grouped-frequency-and-class-marks',
    sec: '9.13.3',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Mean Weight for Grouped Frequency Distribution Using Class Marks',
    title_ml: 'വർഗ്ഗീകരിച്ച ആവൃത്തി പട്ടികയിലെ മധ്യവിലയും ശരാശരി ഭാരവും',
    prompt_en: '<p>The weights (in kg) of $50$ students are grouped as follows:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>Weight (kg)</th><td>30 - 40</td><td>40 - 50</td><td>50 - 60</td><td>60 - 70</td><td>70 - 80</td></tr><tr><th>Number of Students</th><td>8</td><td>14</td><td>16</td><td>8</td><td>4</td></tr></table><p>(i) Write the class mark $x_i$ for each class interval.</p><p>(ii) Compute the sum $\\sum f_i x_i$ and the mean weight of the students.</p>',
    prompt_ml: '<p>$50$ കുട്ടികളുടെ ശരീരഭാരം (കിലോഗ്രാമിൽ) താഴെ നൽകിയിരിക്കുന്നു:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>ഭാരം (kg)</th><td>30 - 40</td><td>40 - 50</td><td>50 - 60</td><td>60 - 70</td><td>70 - 80</td></tr><tr><th>കുട്ടികളുടെ എണ്ണം</th><td>8</td><td>14</td><td>16</td><td>8</td><td>4</td></tr></table><p>(i) ഓരോ ക്ലാസിന്റെയും മധ്യവില (ക്ലാസ് മാർക്ക് $x_i$) എഴുതുക.</p><p>(ii) $\\sum f_i x_i$ കണക്കാക്കി കുട്ടികളുടെ ശരാശരി ഭാരം കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Step 1: Determine Class Marks ($x_i$)</h4>
<ul>
  <li>$30 - 40: x_1 = \\frac{30 + 40}{2} = \\mathbf{35}$</li>
  <li>$40 - 50: x_2 = \\frac{40 + 50}{2} = \\mathbf{45}$</li>
  <li>$50 - 60: x_3 = \\frac{50 + 60}{2} = \\mathbf{55}$</li>
  <li>$60 - 70: x_4 = \\frac{60 + 70}{2} = \\mathbf{65}$</li>
  <li>$70 - 80: x_5 = \\frac{70 + 80}{2} = \\mathbf{75}$</li>
</ul>

<h4>Step 2: Calculate $\\sum f_i x_i$ and Mean</h4>
<ul>
  <li>$35 \\times 8 = 280$</li>
  <li>$45 \\times 14 = 630$</li>
  <li>$55 \\times 16 = 880$</li>
  <li>$65 \\times 8 = 520$</li>
  <li>$75 \\times 4 = 300$</li>
</ul>
$$\\sum f_i x_i = 280 + 630 + 880 + 520 + 300 = \\mathbf{2610}$$
$$N = \\sum f_i = 8 + 14 + 16 + 8 + 4 = 50$$
$$\\bar{x} = \\frac{\\sum f_i x_i}{N} = \\frac{2610}{50} = \\mathbf{52.2\\text{ kg}}$$`,
    solution_ml: `<h4>ഘട്ടം 1: ക്ലാസ് മാർക്കുകൾ ($x_i$)</h4>
<ul>
  <li>$30 - 40: x = 35$</li>
  <li>$40 - 50: x = 45$</li>
  <li>$50 - 60: x = 55$</li>
  <li>$60 - 70: x = 65$</li>
  <li>$70 - 80: x = 75$</li>
</ul>

<h4>ഘട്ടം 2: $\\sum f_i x_i$-ഉം ശരാശരിയും കാണൽ</h4>
$$\\sum f_i x_i = (35 \\times 8) + (45 \\times 14) + (55 \\times 16) + (65 \\times 8) + (75 \\times 4)$$
$$\\sum f_i x_i = 280 + 630 + 880 + 520 + 300 = \\mathbf{2610}$$
$$\\bar{x} = \\frac{2610}{50} = \\mathbf{52.2\\text{ kg}}$$`,
    tested_en: 'Direct calculation of mean for grouped continuous frequency distribution.',
    tested_ml: 'വർഗ്ഗീകരിച്ച ആവൃത്തി പട്ടികയിൽ ക്ലാസ് മാർക്ക് ഉപയോഗിച്ച് ശരാശരി കാണൽ.'
  },

  {
    id: 'w.m9.13.4',
    concept: 'm9.13.4.assumed-mean-method',
    sec: '9.13.4',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Mean Age Determination Using the Assumed Mean Method',
    title_ml: 'സങ്കല്പിത ശരാശരി രീതി ഉപയോഗിച്ച് ശരാശരി പ്രായം കണക്കാക്കൽ',
    prompt_en: '<p>The ages of $40$ employees in an office are classified as follows:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>Age Group</th><td>20 - 30</td><td>30 - 40</td><td>40 - 50</td><td>50 - 60</td><td>60 - 70</td></tr><tr><th>Number of Employees</th><td>6</td><td>12</td><td>14</td><td>6</td><td>2</td></tr></table><p>Using the <b>Assumed Mean Method</b> with assumed mean $A = 45$, calculate the mean age of the employees. Show all steps clearly.</p>',
    prompt_ml: '<p>ഒരു ഓഫീസിലെ $40$ ജീവനക്കാരുടെ പ്രായം താഴെ നൽകിയിരിക്കുന്നു:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>പ്രായ വിഭാഗം</th><td>20 - 30</td><td>30 - 40</td><td>40 - 50</td><td>50 - 60</td><td>60 - 70</td></tr><tr><th>ജീവനക്കാരുടെ എണ്ണം</th><td>6</td><td>12</td><td>14</td><td>6</td><td>2</td></tr></table><p>$A = 45$ എന്ന് സങ്കല്പിത ശരാശരിയായി എടുത്ത് <b>സങ്കല്പിത ശരാശരി രീതി</b> ഉപയോഗിച്ച് ജീവനക്കാരുടെ ശരാശരി പ്രായം കാണുക.</p>',
    solution_en: `<h4>Step 1: Class Marks ($x_i$) and Deviations ($d_i = x_i - 45$)</h4>
<table border="1" cellpadding="5" style="border-collapse:collapse;">
  <tr><th>Class</th><th>$f_i$</th><th>$x_i$</th><th>$d_i = x_i - 45$</th><th>$f_i d_i$</th></tr>
  <tr><td>20 - 30</td><td>6</td><td>25</td><td>$-20$</td><td>$-120$</td></tr>
  <tr><td>30 - 40</td><td>12</td><td>35</td><td>$-10$</td><td>$-120$</td></tr>
  <tr><td>40 - 50</td><td>14</td><td>45</td><td>$0$</td><td>$0$</td></tr>
  <tr><td>50 - 60</td><td>6</td><td>55</td><td>$+10$</td><td>$+60$</td></tr>
  <tr><td>60 - 70</td><td>2</td><td>65</td><td>$+20$</td><td>$+40$</td></tr>
  <tr><th>Total</th><th>$N = 40$</th><td>-</td><td>-</td><th>$\\sum fd = -140$</th></tr>
</table>

<h4>Step 2: Calculate Mean using Assumed Mean Formula</h4>
$$\\sum f_i d_i = -120 - 120 + 0 + 60 + 40 = -140$$
$$\\bar{x} = A + \\frac{\\sum f_i d_i}{N} = 45 + \\frac{-140}{40} = 45 - 3.5 = \\mathbf{41.5\\text{ years}}$$`,
    solution_ml: `<h4>ഘട്ടം 1: മധ്യവിലകളും വ്യതിയാനങ്ങളും ($A = 45$)</h4>
<ul>
  <li>20 - 30: $x = 25, d = -20, fd = -120$</li>
  <li>30 - 40: $x = 35, d = -10, fd = -120$</li>
  <li>40 - 50: $x = 45, d = 0, fd = 0$</li>
  <li>50 - 60: $x = 55, d = +10, fd = +60$</li>
  <li>60 - 70: $x = 65, d = +20, fd = +40$</li>
</ul>
$$\\sum f_i d_i = -120 - 120 + 60 + 40 = -140$$
$$N = 40$$

<h4>ഘട്ടം 2: ശരാശരി കാണൽ</h4>
$$\\bar{x} = A + \\frac{\\sum f_i d_i}{N} = 45 + \\frac{-140}{40} = 45 - 3.5 = \\mathbf{41.5\\text{ വയസ്സ്}}$$`,
    tested_en: 'Application of assumed mean method for grouped distributions.',
    tested_ml: 'സങ്കല്പിത ശരാശരി രീതി ഉപയോഗിച്ചുള്ള ശരാശരി നിർണ്ണയം.'
  },

  {
    id: 'w.m9.13.5',
    concept: 'm9.13.2.mean-of-frequency-distributions',
    sec: '9.13.2',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Finding Missing Frequency from Discrete Distribution Mean',
    title_ml: 'സമാന്തര ശരാശരി നൽകിയിരിക്കുമ്പോൾ അജ്ഞാത ആവൃത്തി കണ്ടെത്തൽ',
    tested_en: 'Algebraic equation solving for missing frequency using mean quotient.',
    tested_ml: 'ശരാശരി സമവാക്യം ഉപയോഗിച്ച് അജ്ഞാത ആവൃത്തി നിർണ്ണയിക്കൽ.',
    prompt_en: '<p>The arithmetic mean of the following discrete frequency distribution of marks is $28$:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>Marks ($x$)</th><td>10</td><td>20</td><td>30</td><td>40</td><td>50</td></tr><tr><th>Number of Students ($f$)</th><td>4</td><td>8</td><td>$p$</td><td>5</td><td>3</td></tr></table><p>(i) Write the total number of students ($N$) as an algebraic expression in terms of $p$.</p><p>(ii) Calculate the sum of products $\\sum fx$ in terms of $p$.</p><p>(iii) Using the mean formula $\\bar{x} = \\frac{\\sum fx}{N} = 28$, solve for the unknown frequency $p$.</p>',
    prompt_ml: '<p>മാർക്കുകളുടെ ആവൃത്തി വിവരങ്ങൾ നൽകിയിരിക്കുന്ന താഴെ പറയുന്ന പട്ടികയുടെ സമാന്തര ശരാശരി $28$ ആണ്:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>മാർക്ക് ($x$)</th><td>10</td><td>20</td><td>30</td><td>40</td><td>50</td></tr><tr><th>കുട്ടികളുടെ എണ്ണം ($f$)</th><td>4</td><td>8</td><td>$p$</td><td>5</td><td>3</td></tr></table><p>(i) ആകെ കുട്ടികളുടെ എണ്ണത്തെ ($N$) $p$ ഉൾപ്പെടുന്ന ഒരു ബീജഗണിത വാക്യമായി എഴുതുക.</p><p>(ii) ഗുണനഫലങ്ങളുടെ ആകെത്തുകയായ $\\sum fx$ എന്നത് $p$ ഉൾപ്പെടുത്തി കണ്ടെത്തുക.</p><p>(iii) $\\bar{x} = \\frac{\\sum fx}{N} = 28$ എന്ന ശരാശരി സമവാക്യം ഉപയോഗിച്ച് അജ്ഞാത ആവൃത്തിയായ $p$-യുടെ വില കാണുക.</p>',
    solution_en: `<h4>Step 1: Total Frequency in Terms of $p$</h4>
$$N = \\sum f = 4 + 8 + p + 5 + 3 = \\mathbf{20 + p}$$

<h4>Step 2: Total Sum $\\sum fx$ in Terms of $p$</h4>
<ul>
  <li>$10 \\times 4 = 40$</li>
  <li>$20 \\times 8 = 160$</li>
  <li>$30 \\times p = 30p$</li>
  <li>$40 \\times 5 = 200$</li>
  <li>$50 \\times 3 = 150$</li>
</ul>
$$\\sum fx = 40 + 160 + 30p + 200 + 150 = \\mathbf{550 + 30p}$$

<h4>Step 3: Solve for $p$ Using Mean Formula</h4>
$$\\bar{x} = \\frac{\\sum fx}{N} = 28$$
$$\\frac{550 + 30p}{20 + p} = 28$$
$$550 + 30p = 28(20 + p)$$
$$550 + 30p = 560 + 28p$$
$$30p - 28p = 560 - 550$$
$$2p = 10 \\implies p = \\mathbf{5}$$
<p>The missing frequency is <b>$p = 5$</b>.</p>`,
    solution_ml: `<h4>ഘട്ടം 1: ആകെ ആവൃത്തി ($N$)</h4>
$$N = 4 + 8 + p + 5 + 3 = \\mathbf{20 + p}$$

<h4>ഘട്ടം 2: ഗുണനഫലങ്ങളുടെ ആകെത്തുക ($\\sum fx$)</h4>
<ul>
  <li>$10 \\times 4 = 40$</li>
  <li>$20 \\times 8 = 160$</li>
  <li>$30 \\times p = 30p$</li>
  <li>$40 \\times 5 = 200$</li>
  <li>$50 \\times 3 = 150$</li>
</ul>
$$\\sum fx = 40 + 160 + 30p + 200 + 150 = \\mathbf{550 + 30p}$$

<h4>ഘട്ടം 3: സമവാക്യം പരിഹരിച്ച് $p$ കാണൽ</h4>
$$\\frac{550 + 30p}{20 + p} = 28$$
$$550 + 30p = 28(20 + p)$$
$$550 + 30p = 560 + 28p$$
$$30p - 28p = 560 - 550$$
$$2p = 10 \\implies p = \\mathbf{5}$$
<p>അജ്ഞാത ആവൃത്തി <b>$p = 5$</b> ആണ്.</p>`
  },

  {
    id: 'w.m9.13.6',
    concept: 'm9.13.4.assumed-mean-method',
    sec: '9.13.4',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Assumed Mean Method for Grouped Daily Income Distribution',
    title_ml: 'വർഗ്ഗീകരിച്ച ദിവസ വരുമാന പട്ടികയിൽ സങ്കല്പിത ശരാശരി രീതി',
    tested_en: 'Class mark calculation, deviation table construction, and assumed mean formula.',
    tested_ml: 'ക്ലാസ് മാർക്ക്, വ്യതിയാന പട്ടിക, സങ്കല്പിത ശരാശരി സമവാക്യം എന്നിവയുടെ പ്രയോഗം.',
    prompt_en: '<p>The table below shows the distribution of daily earnings of $50$ retail shops:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>Daily Earnings (₹)</th><td>1000 - 1200</td><td>1200 - 1400</td><td>1400 - 1600</td><td>1600 - 1800</td><td>1800 - 2000</td></tr><tr><th>Number of Shops</th><td>12</td><td>14</td><td>8</td><td>10</td><td>6</td></tr></table><p>(i) Find the class mark $x_i$ for each of the $5$ class intervals.</p><p>(ii) Taking the assumed mean $A = 1500$, calculate the deviations $d_i = x_i - 1500$ and the products $f_i d_i$.</p><p>(iii) Calculate the mean daily earnings of the shops using the formula $\\bar{x} = A + \\frac{\\sum f_i d_i}{N}$.</p>',
    prompt_ml: '<p>$50$ വ്യാപാര സ്ഥാപനങ്ങളുടെ ദിവസേനയുള്ള വരുമാന വിവരങ്ങൾ താഴെ നൽകിയിരിക്കുന്നു:</p><table border="1" cellpadding="5" style="border-collapse:collapse;"><tr><th>ദിവസ വരുമാനം (₹)</th><td>1000 - 1200</td><td>1200 - 1400</td><td>1400 - 1600</td><td>1600 - 1800</td><td>1800 - 2000</td></tr><tr><th>കടകളുടെ എണ്ണം</th><td>12</td><td>14</td><td>8</td><td>10</td><td>6</td></tr></table><p>(i) $5$ ക്ലാസ് ഇടവേളകളുടെയും മധ്യവില (ക്ലാസ് മാർക്ക് $x_i$) കണ്ടെത്തുക.</p><p>(ii) $A = 1500$ എന്നത് സങ്കല്പിത ശരാശരിയായി എടുത്ത്, വ്യതിയാനങ്ങൾ $d_i = x_i - 1500$, ഗുണനഫലങ്ങൾ $f_i d_i$ എന്നിവ കണക്കാക്കുക.</p><p>(iii) $\\bar{x} = A + \\frac{\\sum f_i d_i}{N}$ എന്ന സമവാക്യം ഉപയോഗിച്ച് കടകളുടെ ശരാശരി ദിവസ വരുമാനം കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Step 1: Class Marks and Deviations Table ($A = 1500$)</h4>
<table border="1" cellpadding="5" style="border-collapse:collapse;">
  <tr><th>Class</th><th>$f_i$</th><th>Class Mark $x_i$</th><th>$d_i = x_i - 1500$</th><th>$f_i d_i$</th></tr>
  <tr><td>1000 - 1200</td><td>12</td><td>1100</td><td>$-400$</td><td>$-4800$</td></tr>
  <tr><td>1200 - 1400</td><td>14</td><td>1300</td><td>$-200$</td><td>$-2800$</td></tr>
  <tr><td>1400 - 1600</td><td>8</td><td>1500</td><td>$0$</td><td>$0$</td></tr>
  <tr><td>1600 - 1800</td><td>10</td><td>1700</td><td>$+200$</td><td>$+2000$</td></tr>
  <tr><td>1800 - 2000</td><td>6</td><td>1900</td><td>$+400$</td><td>$+2400$</td></tr>
  <tr><th>Total</th><th>$N = 50$</th><td>-</td><td>-</td><th>$\\sum f_i d_i = -3200$</th></tr>
</table>

<h4>Step 2: Calculate $\\sum f_i d_i$</h4>
$$\\sum f_i d_i = (-4800) + (-2800) + 0 + 2000 + 2400 = -7600 + 4400 = \\mathbf{-3200}$$

<h4>Step 3: Compute Arithmetic Mean</h4>
$$\\bar{x} = A + \\frac{\\sum f_i d_i}{N} = 1500 + \\frac{-3200}{50} = 1500 - 64 = \\mathbf{1436\\text{ rupees}}$$`,
    solution_ml: `<h4>ഘട്ടം 1: മധ്യവിലകളും വ്യതിയാനങ്ങളും ($A = 1500$)</h4>
<table border="1" cellpadding="5" style="border-collapse:collapse;">
  <tr><th>ക്ലാസ്</th><th>$f_i$</th><th>മധ്യവില $x_i$</th><th>$d_i = x_i - 1500$</th><th>$f_i d_i$</th></tr>
  <tr><td>1000 - 1200</td><td>12</td><td>1100</td><td>$-400$</td><td>$-4800$</td></tr>
  <tr><td>1200 - 1400</td><td>14</td><td>1300</td><td>$-200$</td><td>$-2800$</td></tr>
  <tr><td>1400 - 1600</td><td>8</td><td>1500</td><td>$0$</td><td>$0$</td></tr>
  <tr><td>1600 - 1800</td><td>10</td><td>1700</td><td>$+200$</td><td>$+2000$</td></tr>
  <tr><td>1800 - 2000</td><td>6</td><td>1900</td><td>$+400$</td><td>$+2400$</td></tr>
  <tr><th>ആകെ</th><th>$N = 50$</th><td>-</td><td>-</td><th>$\\sum f_i d_i = -3200$</th></tr>
</table>

<h4>ഘട്ടം 2: ഗുണനഫലങ്ങളുടെ തുക</h4>
$$\\sum f_i d_i = -4800 - 2800 + 0 + 2000 + 2400 = \\mathbf{-3200}$$

<h4>ഘട്ടം 3: സമാന്തര ശരാശരി കാണൽ</h4>
$$\\bar{x} = A + \\frac{\\sum f_i d_i}{N} = 1500 + \\frac{-3200}{50} = 1500 - 64 = \\mathbf{1436\\text{ രൂപ}}$$`
  }
);
