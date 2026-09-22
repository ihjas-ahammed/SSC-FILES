/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 11 — Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.11.1 Median of Raw & Ungrouped Data
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.11.1',
    concept: 'm10.11.1.median-of-raw-data',
    sec: '10.11.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'What is the median of the data: 15, 8, 22, 11, 19, 5, 13?',
    prompt_ml: '15, 8, 22, 11, 19, 5, 13 എന്നീ വിവരങ്ങളുടെ മധ്യമം എത്ര?',
    options_en: [
      { k: 'A', t: '13' },
      { k: 'B', t: '11' },
      { k: 'C', t: '15' },
      { k: 'D', t: '19' }
    ],
    options_ml: [
      { k: 'A', t: '13' },
      { k: 'B', t: '11' },
      { k: 'C', t: '15' },
      { k: 'D', t: '19' }
    ],
    answer: 'A',
    solution_en: 'Arranging in ascending order: 5, 8, 11, 13, 15, 19, 22. Total $n = 7$ (odd). Median is the 4th observation, which is 13.',
    solution_ml: 'ആരോഹണക്രമത്തിൽ: 5, 8, 11, 13, 15, 19, 22. ആകെ $n = 7$. നടുവിലെ നാലാമത്തെ സംഖ്യയായ 13 ആണ് മധ്യമം.',
    tested_en: 'Finding median of an odd number of raw observations.',
    tested_ml: 'ഒറ്റ എണ്ണം വിവരങ്ങളിൽ മധ്യമം കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m10.11.2',
    concept: 'm10.11.1.median-of-raw-data',
    sec: '10.11.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the median of the eight numbers: 14, 6, 20, 10, 8, 18, 12, 16?',
    prompt_ml: '14, 6, 20, 10, 8, 18, 12, 16 എന്നീ 8 സംഖ്യകളുടെ മധ്യമം എത്ര?',
    options_en: [
      { k: 'A', t: '13' },
      { k: 'B', t: '12' },
      { k: 'C', t: '14' },
      { k: 'D', t: '12.5' }
    ],
    options_ml: [
      { k: 'A', t: '13' },
      { k: 'B', t: '12' },
      { k: 'C', t: '14' },
      { k: 'D', t: '12.5' }
    ],
    answer: 'A',
    solution_en: 'Arranging in ascending order: 6, 8, 10, 12, 14, 16, 18, 20. Total $n = 8$ (even). The middle two terms are 4th (12) and 5th (14). Median $= \\frac{12 + 14}{2} = 13$.',
    solution_ml: 'ക്രമീകരിച്ചാൽ: 6, 8, 10, 12, 14, 16, 18, 20. നടുവിലെ സംഖ്യകൾ 12, 14. മധ്യമം $= \\frac{12 + 14}{2} = 13$.',
    tested_en: 'Finding median of an even number of observations.',
    tested_ml: 'ഇരട്ട എണ്ണം വിവരങ്ങളിൽ മധ്യമം കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.2 Median of Frequency Distributions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.11.3',
    concept: 'm10.11.2.median-of-frequency-distributions',
    sec: '10.11.2',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'In a survey of 45 workers, daily wages (in Rs) and number of workers are: Rs 400 (8 workers), Rs 500 (12 workers), Rs 600 (15 workers), Rs 700 (10 workers). What is the median wage?',
    prompt_ml: '45 തൊഴിലാളികളുടെ ദിവസക്കൂലി: 400 രൂപ (8 പേർ), 500 രൂപ (12 പേർ), 600 രൂപ (15 പേർ), 700 രൂപ (10 പേർ). മധ്യമ കൂലി എത്ര?',
    options_en: [
      { k: 'A', t: 'Rs 600' },
      { k: 'B', t: 'Rs 500' },
      { k: 'C', t: 'Rs 550' },
      { k: 'D', t: 'Rs 700' }
    ],
    options_ml: [
      { k: 'A', t: '600 രൂപ' },
      { k: 'B', t: '500 രൂപ' },
      { k: 'C', t: '550 രൂപ' },
      { k: 'D', t: '700 രൂപ' }
    ],
    answer: 'A',
    solution_en: 'Cumulative frequencies: 400 -> 8, 500 -> 20, 600 -> 35, 700 -> 45. Total $N = 45$. Median position is $(45 + 1)/2 = 23$rd worker. Since 23rd worker falls in the Rs 600 group (ranks 21 to 35), median wage is Rs 600.',
    solution_ml: 'സഞ്ചയിത ആവൃത്തി: 400 -> 8, 500 -> 20, 600 -> 35, 700 -> 45. മധ്യമ സ്ഥാനം $(45+1)/2 = 23$. 23-ാമത്തെ ആൾ 600 രൂപയുടെ ഗ്രൂപ്പിലാണ് (21 മുതൽ 35 വരെ). അതിനാൽ മധ്യമ കൂലി 600 രൂപ.',
    tested_en: 'Median from discrete frequency table using cumulative frequency.',
    tested_ml: 'ആവൃത്തി പട്ടികയിലെ മധ്യമം കാണൽ.'
  },
  {
    id: 'obj.m10.11.4',
    concept: 'm10.11.2.median-of-frequency-distributions',
    sec: '10.11.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If a frequency distribution has total frequency $N = 60$, which cumulative frequency range contains the median?',
    prompt_ml: 'ആകെ ആവൃത്തി $N = 60$ ആയ ഒരു പട്ടികയിൽ മധ്യമം നിർണ്ണയിക്കുന്നത് ഏത് സ്ഥാനങ്ങളാണ്?',
    options_en: [
      { k: 'A', t: '30th and 31st positions' },
      { k: 'B', t: '29th and 30th positions' },
      { k: 'C', t: '30th position only' },
      { k: 'D', t: '31st position only' }
    ],
    options_ml: [
      { k: 'A', t: '30-ാമത്തെയും 31-ാമത്തെയും സ്ഥാനങ്ങൾ' },
      { k: 'B', t: '29-ാമത്തെയും 30-ാമത്തെയും സ്ഥാനങ്ങൾ' },
      { k: 'C', t: '30-ാമത്തെ സ്ഥാനം മാത്രം' },
      { k: 'D', t: '31-ാമത്തെ സ്ഥാനം മാത്രം' }
    ],
    answer: 'A',
    solution_en: 'Since $N = 60$ is even, the median is the average of the $\\frac{N}{2} = 30$th and $\\left(\\frac{N}{2} + 1\\right) = 31$st observations.',
    solution_ml: '$N = 60$ ഇരട്ടസംഖ്യയായതിനാൽ 30, 31 സ്ഥാനങ്ങളിലെ വിലകളുടെ ശരാശരിയാണ് മധ്യമം.',
    tested_en: 'Identifying median positions for even N.',
    tested_ml: 'ഇരട്ട ആവൃത്തിയിലെ മധ്യമ സ്ഥാനങ്ങൾ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.3 Median of Grouped Continuous Distributions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.11.5',
    concept: 'm10.11.3.median-of-grouped-distributions',
    sec: '10.11.3',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'In a grouped distribution, the median class is $20 - 30$. Given $L = 20$, $N = 50$, $cf = 18$, frequency of median class $f = 10$, and class width $h = 10$. What is the median?',
    prompt_ml: 'ഒരു വർഗ്ഗീകരിച്ച പട്ടികയിൽ മധ്യമ ക്ലാസ് $20 - 30$ ആണ്. $L = 20, N = 50, cf = 18, f = 10, h = 10$ ആയാൽ മധ്യമം എത്ര?',
    options_en: [
      { k: 'A', t: '27' },
      { k: 'B', t: '25' },
      { k: 'C', t: '26' },
      { k: 'D', t: '28' }
    ],
    options_ml: [
      { k: 'A', t: '27' },
      { k: 'B', t: '25' },
      { k: 'C', t: '26' },
      { k: 'D', t: '28' }
    ],
    answer: 'A',
    solution_en: '$\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h = 20 + \\left(\\frac{25 - 18}{10}\\right) \\times 10 = 20 + 7 = 27$.',
    solution_ml: 'മധ്യമം $= 20 + \\left(\\frac{25 - 18}{10}\\right) \\times 10 = 20 + 7 = 27$.',
    tested_en: 'Calculating median of grouped data using interpolation formula.',
    tested_ml: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ മധ്യമ സൂത്രവാക്യം പ്രയോഗിക്കൽ.'
  },
  {
    id: 'obj.m10.11.6',
    concept: 'm10.11.3.median-of-grouped-distributions',
    sec: '10.11.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'For grouped data with classes 0-10, 10-20, 20-30, 30-40 having frequencies 5, 8, 15, 12 respectively. Which class is the median class?',
    prompt_ml: 'ക്ലാസുകൾ 0-10, 10-20, 20-30, 30-40 എന്നിവയുടെ ആവൃത്തികൾ യഥാക്രമം 5, 8, 15, 12 ആണ്. ഇതിലെ മധ്യമ ക്ലാസ് ഏത്?',
    options_en: [
      { k: 'A', t: '20 - 30' },
      { k: 'B', t: '10 - 20' },
      { k: 'C', t: '30 - 40' },
      { k: 'D', t: '0 - 10' }
    ],
    options_ml: [
      { k: 'A', t: '20 - 30' },
      { k: 'B', t: '10 - 20' },
      { k: 'C', t: '30 - 40' },
      { k: 'D', t: '0 - 10' }
    ],
    answer: 'A',
    solution_en: 'Total frequency $N = 5 + 8 + 15 + 12 = 40$. $N/2 = 20$. Cumulative frequencies are: 0-10 (5), 10-20 (13), 20-30 (28). The 20th observation falls in the $20 - 30$ class.',
    solution_ml: 'ആകെ ആവൃത്തി $N = 40$, $N/2 = 20$. സഞ്ചയിത ആവൃത്തി: 0-10 (5), 10-20 (13), 20-30 (28). അതിനാൽ 20-ാമത്തെ പദം ഉൾപ്പെടുന്ന 20 - 30 ആണ് മധ്യമ ക്ലാസ്.',
    tested_en: 'Identifying the median class in grouped frequency data.',
    tested_ml: 'മധ്യമ ക്ലാസ് കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.4 Comparing Measures: Mean vs Median
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.11.7',
    concept: 'm10.11.4.comparing-mean-and-median',
    sec: '10.11.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which measure of central tendency is LEAST affected by extreme outlier values?',
    prompt_ml: 'വളരെ വലിയതോ ചെറിയതോ ആയ തീവ്രവിലകളാൽ ഏറ്റവും കുറവ് മാത്രം ബാധിക്കപ്പെടുന്ന കേന്ദ്രപ്രവണതാ അളവ് ഏത്?',
    options_en: [
      { k: 'A', t: 'Median' },
      { k: 'B', t: 'Arithmetic Mean' },
      { k: 'C', t: 'Range' },
      { k: 'D', t: 'Variance' }
    ],
    options_ml: [
      { k: 'A', t: 'മധ്യമം' },
      { k: 'B', t: 'സമാന്തര ശരാശരി' },
      { k: 'C', t: 'വ്യാപ്തി (Range)' },
      { k: 'D', t: 'വേരിയൻസ് (Variance)' }
    ],
    answer: 'A',
    solution_en: 'The median is purely positional and resistant to outliers, whereas the arithmetic mean changes substantially when extreme numbers are introduced.',
    solution_ml: 'മധ്യമം സ്ഥാനത്തെ മാത്രം ആശ്രയിക്കുന്നതിനാൽ തീവ്രവിലകൾ അതിനെ മാറ്റുന്നില്ല; എന്നാൽ ശരാശരി വളരെ വ്യത്യാസപ്പെടുന്നു.',
    tested_en: 'Robustness of median compared to mean.',
    tested_ml: 'മധ്യമത്തിന്റെ സ്ഥിരതയും സവിശേഷതയും.'
  },
  {
    id: 'obj.m10.11.8',
    concept: 'm10.11.4.comparing-mean-and-median',
    sec: '10.11.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Five students scored 10, 12, 14, 16, 98 marks in a test. What are the mean and median of this data?',
    prompt_ml: 'അഞ്ച് കുട്ടികളുടെ പരീക്ഷാ മാർക്കുകൾ 10, 12, 14, 16, 98 ആണ്. ഇവയുടെ ശരാശരിയും മധ്യമവും എത്ര?',
    options_en: [
      { k: 'A', t: 'Mean = 30, Median = 14' },
      { k: 'B', t: 'Mean = 14, Median = 30' },
      { k: 'C', t: 'Mean = 15, Median = 14' },
      { k: 'D', t: 'Mean = 30, Median = 16' }
    ],
    options_ml: [
      { k: 'A', t: 'ശരാശരി = 30, മധ്യമം = 14' },
      { k: 'B', t: 'ശരാശരി = 14, മധ്യമം = 30' },
      { k: 'C', t: 'ശരാശരി = 15, മധ്യമം = 14' },
      { k: 'D', t: 'ശരാശരി = 30, മധ്യമം = 16' }
    ],
    answer: 'A',
    solution_en: 'Sum $= 10 + 12 + 14 + 16 + 98 = 150$. Mean $= 150 / 5 = 30$. Sorted: 10, 12, 14, 16, 98. Median (middle 3rd value) $= 14$. The single outlier (98) greatly inflates the mean.',
    solution_ml: 'തുക $= 150$, ശരാശരി $= 150 / 5 = 30$. നടുവിലെ സംഖ്യയായ മധ്യമം $= 14$. 98 എന്ന ഒറ്റ സംഖ്യ ശരാശരിയെ വല്ലാതെ വർദ്ധിപ്പിച്ചു.',
    tested_en: 'Numerical comparison of mean and median with an outlier.',
    tested_ml: 'തീവ്രവില ഉൾപ്പെടുമ്പോൾ ശരാശരിയും മധ്യമവും താരതമ്യം ചെയ്യൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.11.1 Median of Raw & Ungrouped Data
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.1',
    concept: 'm10.11.1.median-of-raw-data',
    sec: '10.11.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'The weights (in kg) of 9 students in a sports club are: 42, 55, 38, 48, 50, 45, 52, 40, 46.\\n(a) Arrange the weights in ascending order.\\n(b) Which position gives the median weight?\\n(c) Find the median weight of the students.\\n(d) If the lightest student (38 kg) is replaced by a student weighing 35 kg, does the median change? Explain why.',
    prompt_ml: 'ഒരു കായിക ക്ലബ്ബിലെ 9 കുട്ടികളുടെ ഭാരം (കിലോഗ്രാമിൽ): 42, 55, 38, 48, 50, 45, 52, 40, 46.\\n(a) ഭാരങ്ങൾ ചെറുതിൽ നിന്ന് വലുതിലേക്ക് ക്രമീകരിക്കുക.\\n(b) എത്രാമത്തെ സ്ഥാനമാണ് മധ്യമ ഭാരം നൽകുന്നത്?\\n(c) കുട്ടികളുടെ മധ്യമ ഭാരം കണ്ടെത്തുക.\\n(d) ഏറ്റവും ഭാരം കുറഞ്ഞ കുട്ടിക്ക് (38 kg) പകരം 35 kg ഉള്ള കുട്ടി വന്നാൽ മധ്യമം മാറുമോ? കാരണം വ്യക്തമാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Ascending order: 38, 40, 42, 45, 46, 48, 50, 52, 55.</li>\n  <li>Since $n = 9$ is odd, the median position is $\\frac{n + 1}{2} = \\frac{9 + 1}{2} = 5$th observation.</li>\n  <li>The 5th observation in the sorted list is 46 kg. Median weight $= 46$ kg.</li>\n  <li>If 38 kg is replaced by 35 kg, 35 kg is still less than 46 kg and stays to the left of the middle term. The 5th position remains 46 kg, so the median does <b>not change</b>.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5th position; (c) 46 kg; (d) No change, 5th term remains 46 kg</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Ascending order arrangement: 1 mark</li>\n  <li>Position identification (5th): 1 mark</li>\n  <li>Median weight = 46 kg: 1 mark</li>\n  <li>Explanation of why replacing outlier doesn’t change median: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ആരോഹണക്രമം: 38, 40, 42, 45, 46, 48, 50, 52, 55.</li>\n  <li>$n = 9$ ആയതിനാൽ മധ്യമ സ്ഥാനം $\\frac{9 + 1}{2} = 5$-ാമത്തെ പദമാണ്.</li>\n  <li>അഞ്ചാമത്തെ പദം 46 kg ആണ്. മധ്യമ ഭാരം $= 46$ kg.</li>\n  <li>38 ന് പകരം 35 വന്നാലും അത് മധ്യമത്തിന് ഇടത്തുതന്നെ നിൽക്കുന്നതിനാൽ അഞ്ചാം സ്ഥാനത്തെ സംഖ്യയായ 46 ന് മാറ്റമില്ല. അതിനാൽ മധ്യമം <b>മാറില്ല</b>.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5-ാമത്തെ സ്ഥാനം; (c) 46 kg; (d) മാറ്റമില്ല, അഞ്ചാം പദം 46 kg തന്നെ</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ക്രമീകരിക്കൽ: 1 മാർക്ക്</li>\n  <li>സ്ഥാനം (5-ാമത്) കണ്ടെത്തൽ: 1 മാർക്ക്</li>\n  <li>മധ്യമം 46 kg: 1 മാർക്ക്</li>\n  <li>മാറ്റമില്ലെന്ന വിശദീകരണം: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Ascending order: 38, 40, 42, 45, 46, 48, 50, 52, 55.',
      'Since $n = 9$ is odd, the median position is $\\frac{n + 1}{2} = \\frac{9 + 1}{2} = 5$th observation.',
      'The 5th observation in the sorted list is 46 kg. Median weight $= 46$ kg.',
      'If 38 kg is replaced by 35 kg, 35 kg is still less than 46 kg and stays to the left of the middle term. The 5th position remains 46 kg, so the median does <b>not change</b>.'
    ],
    steps_ml: [
      'ആരോഹണക്രമം: 38, 40, 42, 45, 46, 48, 50, 52, 55.',
      '$n = 9$ ആയതിനാൽ മധ്യമ സ്ഥാനം $\\frac{9 + 1}{2} = 5$-ാമത്തെ പദമാണ്.',
      'അഞ്ചാമത്തെ പദം 46 kg ആണ്. മധ്യമ ഭാരം $= 46$ kg.',
      '38 ന് പകരം 35 വന്നാലും അത് മധ്യമത്തിന് ഇടത്തുതന്നെ നിൽക്കുന്നതിനാൽ അഞ്ചാം സ്ഥാനത്തെ സംഖ്യയായ 46 ന് മാറ്റമില്ല. അതിനാൽ മധ്യമം <b>മാറില്ല</b>.'
    ],
    rubric_en: [
      'Ascending order arrangement: 1 mark',
      'Position identification (5th): 1 mark',
      'Median weight = 46 kg: 1 mark',
      'Explanation of why replacing outlier doesn’t change median: 1 mark'
    ],
    rubric_ml: [
      'ക്രമീകരിക്കൽ: 1 മാർക്ക്',
      'സ്ഥാനം (5-ാമത്) കണ്ടെത്തൽ: 1 മാർക്ക്',
      'മധ്യമം 46 kg: 1 മാർക്ക്',
      'മാറ്റമില്ലെന്ന വിശദീകരണം: 1 മാർക്ക്'
    ],
    answer_en: '(a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5th position; (c) 46 kg; (d) No change, 5th term remains 46 kg',
    answer_ml: '(a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5-ാമത്തെ സ്ഥാനം; (c) 46 kg; (d) മാറ്റമില്ല, അഞ്ചാം പദം 46 kg തന്നെ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.2 Median of Frequency Distributions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.2',
    concept: 'm10.11.2.median-of-frequency-distributions',
    sec: '10.11.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'The table below shows the marks obtained by 40 students in a mathematics test:\\nMarks: 10, 15, 20, 25, 30\\nNumber of students: 6, 8, 12, 9, 5\\n(a) Construct the cumulative frequency table.\\n(b) Determine the total frequency $N$ and the median rank.\\n(c) Find the median mark.',
    prompt_ml: 'ഗണിത പരീക്ഷയിൽ 40 കുട്ടികൾക്ക് ലഭിച്ച മാർക്ക് താഴെ കൊടുത്തിരിക്കുന്നു:\\nമാർക്ക്: 10, 15, 20, 25, 30\\nകുട്ടികളുടെ എണ്ണം: 6, 8, 12, 9, 5\\n(a) സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കുക.\\n(b) ആകെ എണ്ണമായ $N$ ഉം മധ്യമ സ്ഥാനവും കണ്ടെത്തുക.\\n(c) കുട്ടികളുടെ മധ്യമ മാർക്ക് എത്രയെന്ന് കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Cumulative frequencies:\\n· Marks 10: freq = 6, cf = 6\\n· Marks 15: freq = 8, cf = 6 + 8 = 14\\n· Marks 20: freq = 12, cf = 14 + 12 = 26\\n· Marks 25: freq = 9, cf = 26 + 9 = 35\\n· Marks 30: freq = 5, cf = 35 + 5 = 40.</li>\n  <li>Total $N = 40$ (even). The median ranks are $\\frac{N}{2} = 20$th and $21$st positions.</li>\n  <li>Observations from 15th to 26th all have mark 20. Both the 20th and 21st observations are 20.</li>\n  <li>Median mark $= \\frac{20 + 20}{2} = 20$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) cf: 6, 14, 26, 35, 40; (b) N = 40, ranks 20th and 21st; (c) Median mark = 20</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Cumulative frequency column: 1.5 marks</li>\n  <li>Identifying median positions (20th and 21st): 1 mark</li>\n  <li>Locating and stating median mark = 20: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>സഞ്ചയിത ആവൃത്തി പട്ടിക:\\n10 -> 6\\n15 -> 14\\n20 -> 26\\n25 -> 35\\n30 -> 40.</li>\n  <li>ആകെ $N = 40$. മധ്യമ സ്ഥാനങ്ങൾ 20, 21 ആണ്.</li>\n  <li>15 മുതൽ 26 വരെയുള്ള സ്ഥാനങ്ങളിലെ കുട്ടികളുടെ മാർക്ക് 20 ആണ്. അതിനാൽ 20, 21 സ്ഥാനങ്ങളിലുള്ളവർക്ക് മാർക്ക് 20 ആണ്.</li>\n  <li>മധ്യമ മാർക്ക് $= 20$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) cf: 6, 14, 26, 35, 40; (b) N = 40, സ്ഥാനങ്ങൾ 20, 21; (c) മധ്യമ മാർക്ക് = 20</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>സഞ്ചയിത ആവൃത്തി പട്ടിക: 1.5 മാർക്ക്</li>\n  <li>മധ്യമ സ്ഥാനങ്ങൾ (20, 21) കാണൽ: 1 മാർക്ക്</li>\n  <li>മധ്യമ മാർക്ക് 20 എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Cumulative frequencies:\\n· Marks 10: freq = 6, cf = 6\\n· Marks 15: freq = 8, cf = 6 + 8 = 14\\n· Marks 20: freq = 12, cf = 14 + 12 = 26\\n· Marks 25: freq = 9, cf = 26 + 9 = 35\\n· Marks 30: freq = 5, cf = 35 + 5 = 40.',
      'Total $N = 40$ (even). The median ranks are $\\frac{N}{2} = 20$th and $21$st positions.',
      'Observations from 15th to 26th all have mark 20. Both the 20th and 21st observations are 20.',
      'Median mark $= \\frac{20 + 20}{2} = 20$.'
    ],
    steps_ml: [
      'സഞ്ചയിത ആവൃത്തി പട്ടിക:\\n10 -> 6\\n15 -> 14\\n20 -> 26\\n25 -> 35\\n30 -> 40.',
      'ആകെ $N = 40$. മധ്യമ സ്ഥാനങ്ങൾ 20, 21 ആണ്.',
      '15 മുതൽ 26 വരെയുള്ള സ്ഥാനങ്ങളിലെ കുട്ടികളുടെ മാർക്ക് 20 ആണ്. അതിനാൽ 20, 21 സ്ഥാനങ്ങളിലുള്ളവർക്ക് മാർക്ക് 20 ആണ്.',
      'മധ്യമ മാർക്ക് $= 20$.'
    ],
    rubric_en: [
      'Cumulative frequency column: 1.5 marks',
      'Identifying median positions (20th and 21st): 1 mark',
      'Locating and stating median mark = 20: 1.5 marks'
    ],
    rubric_ml: [
      'സഞ്ചയിത ആവൃത്തി പട്ടിക: 1.5 മാർക്ക്',
      'മധ്യമ സ്ഥാനങ്ങൾ (20, 21) കാണൽ: 1 മാർക്ക്',
      'മധ്യമ മാർക്ക് 20 എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) cf: 6, 14, 26, 35, 40; (b) N = 40, ranks 20th and 21st; (c) Median mark = 20',
    answer_ml: '(a) cf: 6, 14, 26, 35, 40; (b) N = 40, സ്ഥാനങ്ങൾ 20, 21; (c) മധ്യമ മാർക്ക് = 20'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.3 Median of Grouped Continuous Distributions
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.3',
    concept: 'm10.11.3.median-of-grouped-distributions',
    sec: '10.11.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'The table below shows the distribution of daily wages of 50 workers:\\nWages (Rs): 300-400 (6), 400-500 (10), 500-600 (16), 600-700 (12), 700-800 (6)\\n(a) Find the cumulative frequencies and total frequency $N$.\\n(b) Identify the median class.\\n(c) Calculate the median daily wage using the SCERT formula.',
    prompt_ml: '50 തൊഴിലാളികളുടെ ദിവസക്കൂലി വിവരങ്ങൾ താഴെ തന്നിരിക്കുന്നു:\\nകൂലി (രൂപ): 300-400 (6), 400-500 (10), 500-600 (16), 600-700 (12), 700-800 (6)\\n(a) സഞ്ചയിത ആവൃത്തി പട്ടികയും ആകെ എണ്ണമായ $N$ ഉം കണ്ടെത്തുക.\\n(b) മധ്യമ ക്ലാസ് കണ്ടെത്തുക.\\n(c) സൂത്രവാക്യം ഉപയോഗിച്ച് മധ്യമ ദിവസക്കൂലി കണക്കാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Cumulative frequencies: 300-400 -> 6; 400-500 -> 16; 500-600 -> 32; 600-700 -> 44; 700-800 -> 50. Total $N = 50$.</li>\n  <li>Median rank is $N/2 = 50/2 = 25$. Since 25 falls in the cumulative frequency 32, the median class is $500 - 600$.</li>\n  <li>Here $L = 500$, $N/2 = 25$, $cf = 16$ (preceding class cf), $f = 16$, class width $h = 100$.</li>\n  <li>$\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h = 500 + \\left(\\frac{25 - 16}{16}\\right) \\times 100 = 500 + \\left(\\frac{9}{16}\\right) \\times 100 = 500 + 56.25 = 556.25$ Rs.</li>\n</ol>\n<p><b>Final Answer:</b> (a) cf: 6, 16, 32, 44, 50; (b) Median class: 500 - 600; (c) Rs 556.25</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Cumulative frequency calculation: 1 mark</li>\n  <li>Identifying median class (500 - 600): 1 mark</li>\n  <li>Correct substitution into formula: 1 mark</li>\n  <li>Final median value (Rs 556.25): 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>സഞ്ചയിത ആവൃത്തികൾ: 300-400 (6), 400-500 (16), 500-600 (32), 600-700 (44), 700-800 (50). $N = 50$.</li>\n  <li>$N/2 = 25$. 25 ഉൾപ്പെടുന്നത് 32 എന്ന cf ലാണ്. അതിനാൽ മധ്യമ ക്ലാസ് $500 - 600$.</li>\n  <li>$L = 500, cf = 16, f = 16, h = 100$.</li>\n  <li>മധ്യമം $= 500 + \\left(\\frac{25 - 16}{16}\\right) \\times 100 = 500 + \\frac{900}{16} = 500 + 56.25 = 556.25$ രൂപ.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) cf: 6, 16, 32, 44, 50; (b) മധ്യമ ക്ലാസ്: 500 - 600; (c) 556.25 രൂപ</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>സഞ്ചയിത ആവൃത്തി കാണൽ: 1 മാർക്ക്</li>\n  <li>മധ്യമ ക്ലാസ് (500 - 600) കണ്ടെത്തൽ: 1 മാർക്ക്</li>\n  <li>സൂത്രവാക്യത്തിൽ വില നൽകൽ: 1 മാർക്ക്</li>\n  <li>അന്തിമ മധ്യമം 556.25 രൂപ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Cumulative frequencies: 300-400 -> 6; 400-500 -> 16; 500-600 -> 32; 600-700 -> 44; 700-800 -> 50. Total $N = 50$.',
      'Median rank is $N/2 = 50/2 = 25$. Since 25 falls in the cumulative frequency 32, the median class is $500 - 600$.',
      'Here $L = 500$, $N/2 = 25$, $cf = 16$ (preceding class cf), $f = 16$, class width $h = 100$.',
      '$\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h = 500 + \\left(\\frac{25 - 16}{16}\\right) \\times 100 = 500 + \\left(\\frac{9}{16}\\right) \\times 100 = 500 + 56.25 = 556.25$ Rs.'
    ],
    steps_ml: [
      'സഞ്ചയിത ആവൃത്തികൾ: 300-400 (6), 400-500 (16), 500-600 (32), 600-700 (44), 700-800 (50). $N = 50$.',
      '$N/2 = 25$. 25 ഉൾപ്പെടുന്നത് 32 എന്ന cf ലാണ്. അതിനാൽ മധ്യമ ക്ലാസ് $500 - 600$.',
      '$L = 500, cf = 16, f = 16, h = 100$.',
      'മധ്യമം $= 500 + \\left(\\frac{25 - 16}{16}\\right) \\times 100 = 500 + \\frac{900}{16} = 500 + 56.25 = 556.25$ രൂപ.'
    ],
    rubric_en: [
      'Cumulative frequency calculation: 1 mark',
      'Identifying median class (500 - 600): 1 mark',
      'Correct substitution into formula: 1 mark',
      'Final median value (Rs 556.25): 1 mark'
    ],
    rubric_ml: [
      'സഞ്ചയിത ആവൃത്തി കാണൽ: 1 മാർക്ക്',
      'മധ്യമ ക്ലാസ് (500 - 600) കണ്ടെത്തൽ: 1 മാർക്ക്',
      'സൂത്രവാക്യത്തിൽ വില നൽകൽ: 1 മാർക്ക്',
      'അന്തിമ മധ്യമം 556.25 രൂപ: 1 മാർക്ക്'
    ],
    answer_en: '(a) cf: 6, 16, 32, 44, 50; (b) Median class: 500 - 600; (c) Rs 556.25',
    answer_ml: '(a) cf: 6, 16, 32, 44, 50; (b) മധ്യമ ക്ലാസ്: 500 - 600; (c) 556.25 രൂപ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.4 Comparing Measures: Mean vs Median
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.4',
    concept: 'm10.11.4.comparing-mean-and-median',
    sec: '10.11.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A small company employs 7 staff members whose monthly salaries (in rupees) are: 12000, 14000, 15000, 15000, 16000, 18000, and 90000 (the manager).\\n(a) Calculate the arithmetic mean of the monthly salaries.\\n(b) Calculate the median of the monthly salaries.\\n(c) Which of these two measures better represents the typical salary of a worker in this company? Give a clear reason.',
    prompt_ml: 'ഒരു ചെറിയ സ്ഥാപനത്തിലെ 7 ജീവനക്കാരുടെ പ്രതിമാസ ശമ്പളം (രൂപയിൽ): 12000, 14000, 15000, 15000, 16000, 18000, 90000 (മാനേജർ).\\n(a) ജീവനക്കാരുടെ ശരാശരി ശമ്പളം കണക്കാക്കുക.\\n(b) ജീവനക്കാരുടെ മധ്യമ ശമ്പളം കണക്കാക്കുക.\\n(c) ഈ സ്ഥാപനത്തിലെ ഒരു സാധാരണ തൊഴിലാളിയുടെ ശമ്പളത്തെ ശരിയായി പ്രതിനിധീകരിക്കുന്നത് ഏത് അളവാണ്? കാരണം വ്യക്തമാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Total salary sum $= 12000 + 14000 + 15000 + 15000 + 16000 + 18000 + 90000 = 180000$ Rs. Arithmetic mean $= \\frac{180000}{7} \\approx 25714.29$ Rs.</li>\n  <li>The data is already sorted with $n = 7$ observations. The 4th (middle) observation is 15000 Rs. Median $= 15000$ Rs.</li>\n  <li>The <b>median</b> (Rs 15000) is a far better representative measure.</li>\n  <li>Reason: 6 out of the 7 employees earn between Rs 12000 and Rs 18000. The mean (Rs 25714) is higher than 6 of the 7 workers because the manager’s high salary (Rs 90000) heavily distorts the average.</li>\n</ol>\n<p><b>Final Answer:</b> (a) Rs 25,714.29; (b) Rs 15,000; (c) Median (Rs 15,000) because the outlier manager salary inflates the mean</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Mean calculation: 1.5 marks</li>\n  <li>Median calculation: 1 mark</li>\n  <li>Selection of median and logical justification: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ആകെ തുക $= 180000$ രൂപ. ശരാശരി $= \\frac{180000}{7} \\approx 25714.29$ രൂപ.</li>\n  <li>നടുവിലെ 4-ാമത്തെ സംഖ്യ 15000 രൂപയാണ്. മധ്യമം $= 15000$ രൂപ.</li>\n  <li>സാധാരണ തൊഴിലാളിയുടെ ശമ്പളത്തെ സൂചിപ്പിക്കാൻ കൂടുതൽ അനുയോജ്യം <b>മധ്യമം (15000 രൂപ)</b> ആണ്.</li>\n  <li>കാരണം: 7 ൽ 6 പേരുടെയും ശമ്പളം 12000 നും 18000 നും ഇടയിലാണ്. മാനേജരുടെ ഉയർന്ന ശമ്പളമായ 90000 രൂപ ശരാശരിയെ അസ്വാഭാവികമായി ഉയർത്തുന്നു.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 25,714.29 രൂപ; (b) 15,000 രൂപ; (c) മധ്യമം (15,000 രൂപ), മാനേജരുടെ കൂടിയ ശമ്പളം ശരാശരിയെ അമിതമായി കൂട്ടുന്നതിനാൽ</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ശരാശരി കാണൽ: 1.5 മാർക്ക്</li>\n  <li>മധ്യമം കാണൽ: 1 മാർക്ക്</li>\n  <li>മധ്യമം തിരഞ്ഞെടുക്കലും കാരണവും: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Total salary sum $= 12000 + 14000 + 15000 + 15000 + 16000 + 18000 + 90000 = 180000$ Rs. Arithmetic mean $= \\frac{180000}{7} \\approx 25714.29$ Rs.',
      'The data is already sorted with $n = 7$ observations. The 4th (middle) observation is 15000 Rs. Median $= 15000$ Rs.',
      'The <b>median</b> (Rs 15000) is a far better representative measure.',
      'Reason: 6 out of the 7 employees earn between Rs 12000 and Rs 18000. The mean (Rs 25714) is higher than 6 of the 7 workers because the manager’s high salary (Rs 90000) heavily distorts the average.'
    ],
    steps_ml: [
      'ആകെ തുക $= 180000$ രൂപ. ശരാശരി $= \\frac{180000}{7} \\approx 25714.29$ രൂപ.',
      'നടുവിലെ 4-ാമത്തെ സംഖ്യ 15000 രൂപയാണ്. മധ്യമം $= 15000$ രൂപ.',
      'സാധാരണ തൊഴിലാളിയുടെ ശമ്പളത്തെ സൂചിപ്പിക്കാൻ കൂടുതൽ അനുയോജ്യം <b>മധ്യമം (15000 രൂപ)</b> ആണ്.',
      'കാരണം: 7 ൽ 6 പേരുടെയും ശമ്പളം 12000 നും 18000 നും ഇടയിലാണ്. മാനേജരുടെ ഉയർന്ന ശമ്പളമായ 90000 രൂപ ശരാശരിയെ അസ്വാഭാവികമായി ഉയർത്തുന്നു.'
    ],
    rubric_en: [
      'Mean calculation: 1.5 marks',
      'Median calculation: 1 mark',
      'Selection of median and logical justification: 1.5 marks'
    ],
    rubric_ml: [
      'ശരാശരി കാണൽ: 1.5 മാർക്ക്',
      'മധ്യമം കാണൽ: 1 മാർക്ക്',
      'മധ്യമം തിരഞ്ഞെടുക്കലും കാരണവും: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) Rs 25,714.29; (b) Rs 15,000; (c) Median (Rs 15,000) because the outlier manager salary inflates the mean',
    answer_ml: '(a) 25,714.29 രൂപ; (b) 15,000 രൂപ; (c) മധ്യമം (15,000 രൂപ), മാനേജരുടെ കൂടിയ ശമ്പളം ശരാശരിയെ അമിതമായി കൂട്ടുന്നതിനാൽ'
  }
);
