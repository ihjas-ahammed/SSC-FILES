/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 11 — Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   8 Objective (2 per section) + 6 Written Exercises.
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Authentic SCERT Kerala SSLC textbook questions & comprehensive steps.
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
    prompt_en: 'If a frequency distribution has total frequency $N = 60$, which positions determine the median?',
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
    prompt_en: 'For grouped data with classes 0-10, 10-20, 20-30, 30-40 having frequencies 5, 8, 15, 12 respectively, which class is the median class?',
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
      { k: 'C', t: 'വ്യാപ്തി' },
      { k: 'D', t: 'വ്യതിയാനം' }
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Ascending Order:</b>
    $$38, 40, 42, 45, 46, 48, 50, 52, 55$$
  </li>
  <li><b>(b) Median Position:</b>
    Since total observations $n = 9$ is odd, the median rank is:
    $$\\frac{n + 1}{2} = \\frac{9 + 1}{2} = 5^{\\text{th}} \\text{ position}$$
  </li>
  <li><b>(c) Median Weight:</b>
    The $5^{\\text{th}}$ observation in the sorted order is $46$ kg.
    $$\\text{Median weight} = 46 \\text{ kg}$$
  </li>
  <li><b>(d) Replacing 38 kg with 35 kg:</b>
    Since $35 < 46$, the new value remains to the left of the middle observation. The $5^{\\text{th}}$ observation remains $46$ kg. Hence, the median <b>does not change</b>.
  </li>
</ol>
<p><b>Final Answer:</b> (a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5th position; (c) 46 kg; (d) No change, 5th term remains 46 kg</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Ascending order arrangement: 1 mark</li>
  <li>Position identification (5th): 1 mark</li>
  <li>Median weight = 46 kg: 1 mark</li>
  <li>Explanation of why replacing outlier does not change median: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) ആരോഹണക്രമം:</b>
    $$38, 40, 42, 45, 46, 48, 50, 52, 55$$
  </li>
  <li><b>(b) മധ്യമ സ്ഥാനം:</b>
    ആകെ എണ്ണം $n = 9$ ഒറ്റസംഖ്യയായതിനാൽ മധ്യമ സ്ഥാനം:
    $$\\frac{n + 1}{2} = \\frac{9 + 1}{2} = 5\\text{-ാമത്തെ സ്ഥാനം}$$
  </li>
  <li><b>(c) മധ്യമ ഭാരം:</b>
    അഞ്ചാമത്തെ പദം $46$ kg ആണ്. അതിനാൽ മധ്യമ ഭാരം $= 46$ kg.
  </li>
  <li><b>(d) 38 ന് പകരം 35 kg വരുമ്പോൾ:</b>
    $35 < 46$ ആയതിനാൽ പുതിയ വിലയും നടുവിലെ പദത്തിന് ഇടത്തുതന്നെ നിൽക്കുന്നു. അതിനാൽ അഞ്ചാം സ്ഥാനത്തെ സംഖ്യ $46$ ആയിത്തന്നെ തുടരുന്നു. മധ്യമത്തിന് <b>മാറ്റമില്ല</b>.
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5-ാമത്തെ സ്ഥാനം; (c) 46 kg; (d) മാറ്റമില്ല, അഞ്ചാം പദം 46 kg തന്നെ</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>ആരോഹണക്രമത്തിൽ എഴുതൽ: 1 മാർക്ക്</li>
  <li>സ്ഥാനം (5-ാമത്) കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>മധ്യമ ഭാരം 46 kg: 1 മാർക്ക്</li>
  <li>മാറ്റമില്ലെന്ന വിശദീകരണം: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Sort observations in ascending order: 38, 40, 42, 45, 46, 48, 50, 52, 55.',
      'Compute median rank (9 + 1) / 2 = 5th observation.',
      'Identify 5th observation = 46 kg.',
      'Explain that replacing 38 with 35 preserves the 5th observation at 46 kg.'
    ],
    steps_ml: [
      'വിവരങ്ങളെ ആരോഹണക്രമത്തിൽ എഴുതൽ: 38, 40, 42, 45, 46, 48, 50, 52, 55.',
      'മധ്യമ സ്ഥാനം $(9 + 1) / 2 = 5$-ാമത്തെ പദം എന്ന് കണ്ടെത്തൽ.',
      'അഞ്ചാമത്തെ പദം $46$ kg എന്ന് തിരിച്ചറിയൽ.',
      '38 ന് പകരം 35 വന്നാലും അഞ്ചാം സ്ഥാനത്തെ 46 ന് മാറ്റമില്ലെന്ന് വ്യക്തമാക്കൽ.'
    ],
    rubric_en: [
      'Ascending order arrangement: 1 mark',
      'Position identification (5th): 1 mark',
      'Median weight = 46 kg: 1 mark',
      'Explanation of why replacing outlier does not change median: 1 mark'
    ],
    rubric_ml: [
      'ആരോഹണക്രമത്തിൽ എഴുതൽ: 1 മാർക്ക്',
      'സ്ഥാനം (5-ാമത്) കണ്ടെത്തൽ: 1 മാർക്ക്',
      'മധ്യമ ഭാരം 46 kg: 1 മാർക്ക്',
      'മാറ്റമില്ലെന്ന വിശദീകരണം: 1 മാർക്ക്'
    ],
    answer_en: '(a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5th position; (c) 46 kg; (d) No change, 5th term remains 46 kg',
    answer_ml: '(a) 38, 40, 42, 45, 46, 48, 50, 52, 55; (b) 5-ാമത്തെ സ്ഥാനം; (c) 46 kg; (d) മാറ്റമില്ല, അഞ്ചാം പദം 46 kg തന്നെ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.2 Even Data Count & Arithmetic Sequence Property
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.2',
    concept: 'm10.11.1.median-of-raw-data',
    sec: '10.11.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: '(a) Find the median of the 10 numbers: 14, 6, 22, 18, 10, 26, 12, 30, 16, 20.\\n(b) Consider the arithmetic sequence with 7 terms: $5, 9, 13, 17, 21, 25, 29$. Compute its arithmetic mean and its median.\\n(c) Prove that for any finite arithmetic sequence with $n$ terms, the arithmetic mean and the median are always equal.',
    prompt_ml: '(a) 14, 6, 22, 18, 10, 26, 12, 30, 16, 20 എന്നീ 10 സംഖ്യകളുടെ മധ്യമം കാണുക.\\n(b) $5, 9, 13, 17, 21, 25, 29$ എന്ന 7 പദങ്ങളുള്ള സമാന്തരശ്രേണിയുടെ ശരാശരിയും മധ്യമവും കണക്കാക്കുക.\\n(c) ഏതൊരു സമാന്തരശ്രേണിയിലെ സംഖ്യകൾക്കും സമാന്തര ശരാശരിയും മധ്യമവും എപ്പോഴും തുല്യമായിരിക്കും എന്ന് ബീജഗണിതപരമായി തെളിയിക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Median of 10 numbers:</b>
    Ascending order:
    $$6, 10, 12, 14, 16, 18, 20, 22, 26, 30$$
    With $n = 10$ (even), the middle two positions are $\\frac{10}{2} = 5^{\\text{th}}$ and $6^{\\text{th}}$.
    The $5^{\\text{th}}$ number is 16 and $6^{\\text{th}}$ is 18.
    $$\\text{Median} = \\frac{16 + 18}{2} = 17$$
  </li>
  <li><b>(b) Mean and Median of AP:</b>
    The sequence $5, 9, 13, 17, 21, 25, 29$ has $n = 7$ terms.
    $$\\text{Sum} = 5 + 9 + 13 + 17 + 21 + 25 + 29 = 119$$
    $$\\text{Mean} = \\frac{119}{7} = 17$$
    Since $n = 7$ (odd), the median is the $4^{\\text{th}}$ term:
    $$\\text{Median} = 17$$
    Both mean and median equal 17.
  </li>
  <li><b>(c) General Proof for Arithmetic Sequence:</b>
    Let the arithmetic sequence have $n$ terms with first term $x_1$ and last term $x_n$.
    The sum of $n$ terms is $S_n = \\frac{n}{2}(x_1 + x_n)$.
    Therefore, the arithmetic mean is:
    $$\\bar{x} = \\frac{S_n}{n} = \\frac{x_1 + x_n}{2}$$
    By the symmetry of an arithmetic sequence, the sum of any pair of terms equidistant from the ends is constant: $x_k + x_{n-k+1} = x_1 + x_n$.
    Hence, whether $n$ is odd (middle term) or even (average of two middle terms), the median also equals $\\frac{x_1 + x_n}{2}$.
    Thus, $\\mathbf{\\text{Mean} = \\text{Median}}$.
  </li>
</ol>
<p><b>Final Answer:</b> (a) Median = 17; (b) Mean = 17, Median = 17; (c) Proved algebraically: both equal (x1 + xn)/2</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Arrangement and median of 10 numbers: 1 mark</li>
  <li>Calculating mean and median of given AP: 1.5 marks</li>
  <li>Algebraic proof of equality for general AP: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) 10 സംഖ്യകളുടെ മധ്യമം:</b>
    ആരോഹണക്രമം:
    $$6, 10, 12, 14, 16, 18, 20, 22, 26, 30$$
    $n = 10$ ഇരട്ടസംഖ്യയായതിനാൽ നടുവിലെ സ്ഥാനങ്ങൾ 5, 6 എന്നിവയാണ് ($16, 18$).
    $$\\text{മധ്യമം} = \\frac{16 + 18}{2} = 17$$
  </li>
  <li><b>(b) ശ്രേണിയുടെ ശരാശരിയും മധ്യമവും:</b>
    തുക $= 5 + 9 + 13 + 17 + 21 + 25 + 29 = 119$.
    $$\\text{ശരാശരി} = \\frac{119}{7} = 17$$
    $n = 7$ ആയതിനാൽ നാലാമത്തെ പദമായ 17 ആണ് മധ്യമം:
    $$\\text{മധ്യമം} = 17$$
    ശരാശരിയും മധ്യമവും 17 എന്ന് ലഭിക്കുന്നു.
  </li>
  <li><b>(c) പൊതുവായ തെളിവ്:</b>
    ആദ്യപദം $x_1$, അവസാനപദം $x_n$ ആയ $n$ പദങ്ങളുള്ള സമാന്തരശ്രേണി പരിഗണിക്കുക.
    തുക $S_n = \\frac{n}{2}(x_1 + x_n)$.
    അതിനാൽ ശരാശരി:
    $$\\bar{x} = \\frac{S_n}{n} = \\frac{x_1 + x_n}{2}$$
    സമാന്തരശ്രേണി സമമിതമായതിനാൽ അറ്റങ്ങളിൽ നിന്ന് തുല്യ അകലത്തിലുള്ള പദങ്ങളുടെ തുക തുല്യമാണ്. അതിനാൽ $n$ ഒറ്റയോ ഇരട്ടയോ ആയാലും നടുവിലെ വില $\\frac{x_1 + x_n}{2}$ തന്നെയായിരിക്കും.
    അതുകൊണ്ട് $\\mathbf{\\text{ശരാശരി} = \\text{മധ്യമം}}$.
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) മധ്യമം = 17; (b) ശരാശരി = 17, മധ്യമം = 17; (c) ബീജഗണിതപരമായി തെളിയിച്ചു: രണ്ടും (x1 + xn)/2 ന് തുല്യം</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>10 സംഖ്യകളുടെ മധ്യമം കാണൽ: 1 മാർക്ക്</li>
  <li>ശ്രേണിയുടെ ശരാശരിയും മധ്യമവും കാണൽ: 1.5 മാർക്ക്</li>
  <li>ബീജഗണിത തെളിവ്: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Sort the 10 numbers and average the 5th and 6th values: (16 + 18)/2 = 17.',
      'Compute sum = 119 and mean = 119/7 = 17; identify 4th term = 17 as median.',
      'Express general AP sum Sn = n(x1 + xn)/2, giving mean = (x1 + xn)/2.',
      'Use symmetry of AP terms to show median also equals (x1 + xn)/2.'
    ],
    steps_ml: [
      '10 സംഖ്യകൾ ക്രമീകരിച്ച് 5, 6 സ്ഥാനങ്ങളിലെ ശരാശരി കാണൽ: $(16 + 18)/2 = 17$.',
      'തുക 119 കണ്ട് ശരാശരി 17 എന്നും നാലാം പദമായ മധ്യമം 17 എന്നും കണ്ടെത്തൽ.',
      'ശ്രേണിയുടെ തുക $S_n = n(x_1 + x_n)/2$ വഴി ശരാശരി $(x_1 + x_n)/2$ എന്ന് കാണൽ.',
      'സമമിതത ഉപയോഗിച്ച് മധ്യമവും $(x_1 + x_n)/2$ ആണെന്ന് കാണിച്ച് തുല്യത തെളിയിക്കൽ.'
    ],
    rubric_en: [
      'Arrangement and median of 10 numbers: 1 mark',
      'Calculating mean and median of given AP: 1.5 marks',
      'Algebraic proof of equality for general AP: 1.5 marks'
    ],
    rubric_ml: [
      '10 സംഖ്യകളുടെ മധ്യമം കാണൽ: 1 മാർക്ക്',
      'ശ്രേണിയുടെ ശരാശരിയും മധ്യമവും കാണൽ: 1.5 മാർക്ക്',
      'ബീജഗണിത തെളിവ്: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) Median = 17; (b) Mean = 17, Median = 17; (c) Proved algebraically: both equal (x1 + xn)/2',
    answer_ml: '(a) മധ്യമം = 17; (b) ശരാശരി = 17, മധ്യമം = 17; (c) ബീജഗണിതപരമായി തെളിയിച്ചു: രണ്ടും (x1 + xn)/2 ന് തുല്യം'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.3 Median from Discrete Frequency Table (Odd Total)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.3',
    concept: 'm10.11.2.median-of-frequency-distributions',
    sec: '10.11.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'The table below shows 25 children sorted according to their blood haemoglobin levels (in g/dL):\\nHaemoglobin (g/dL): 12.0 (2 children), 12.4 (3), 12.7 (5), 13.1 (6), 13.3 (4), 13.6 (3), 14.0 (2).\\n(a) Construct the cumulative frequency table.\\n(b) What is the total number of children $N$, and which position determines the median haemoglobin level?\\n(c) Determine the median haemoglobin level with clear reasoning.',
    prompt_ml: '25 കുട്ടികളുടെ രക്തത്തിലെ ഹീമോഗ്ലോബിന്റെ അളവ് (ഗ്രാം/ഡെസിലിറ്റർ) താഴെ തന്നിരിക്കുന്നു:\\nഹീമോഗ്ലോബിൻ: 12.0 (2 കുട്ടികൾ), 12.4 (3), 12.7 (5), 13.1 (6), 13.3 (4), 13.6 (3), 14.0 (2).\\n(a) സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കുക.\\n(b) ആകെ കുട്ടികളുടെ എണ്ണമായ $N$ എത്ര? എത്രാമത്തെ കുട്ടിയുടെ ഹീമോഗ്ലോബിൻ അളവാണ് മധ്യമം നൽകുന്നത്?\\n(c) കൃത്യമായ കാരണം സഹിതം മധ്യമ ഹീമോഗ്ലോബിൻ അളവ് കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Cumulative Frequency Table:</b>
    <table border="1" style="border-collapse:collapse; text-align:center; width:60%;">
      <tr><th>Haemoglobin (g/dL)</th><th>Frequency ($f$)</th><th>Cumulative Frequency ($cf$)</th></tr>
      <tr><td>12.0</td><td>2</td><td>2</td></tr>
      <tr><td>12.4</td><td>3</td><td>5</td></tr>
      <tr><td>12.7</td><td>5</td><td>10</td></tr>
      <tr><td>13.1</td><td>6</td><td>16</td></tr>
      <tr><td>13.3</td><td>4</td><td>20</td></tr>
      <tr><td>13.6</td><td>3</td><td>23</td></tr>
      <tr><td>14.0</td><td>2</td><td>25</td></tr>
    </table>
  </li>
  <li><b>(b) Total Count and Median Position:</b>
    Total frequency $N = 25$ (odd).
    $$\\text{Median position} = \\frac{N + 1}{2} = \\frac{25 + 1}{2} = 13^{\\text{th}} \\text{ position}$$
  </li>
  <li><b>(c) Determining Median Haemoglobin:</b>
    Looking at the cumulative frequencies:
    <ul>
      <li>Children up to rank 10 have haemoglobin $\\le 12.7$ g/dL.</li>
      <li>Children from rank 11 to rank 16 all have haemoglobin $13.1$ g/dL.</li>
    </ul>
    Since the $13^{\\text{th}}$ child lies within ranks 11 to 16, the median haemoglobin level is <b>13.1 g/dL</b>.
  </li>
</ol>
<p><b>Final Answer:</b> (a) cf: 2, 5, 10, 16, 20, 23, 25; (b) N = 25, 13th position; (c) 13.1 g/dL</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Correct cumulative frequency table: 1.5 marks</li>
  <li>Identifying total N = 25 and 13th position: 1 mark</li>
  <li>Identifying median value 13.1 g/dL with interval explanation: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) സഞ്ചയിത ആവൃത്തി പട്ടിക:</b>
    <table border="1" style="border-collapse:collapse; text-align:center; width:60%;">
      <tr><th>ഹീമോഗ്ലോബിൻ</th><th>ആവൃത്തി ($f$)</th><th>സഞ്ചയിത ആവൃത്തി ($cf$)</th></tr>
      <tr><td>12.0</td><td>2</td><td>2</td></tr>
      <tr><td>12.4</td><td>3</td><td>5</td></tr>
      <tr><td>12.7</td><td>5</td><td>10</td></tr>
      <tr><td>13.1</td><td>6</td><td>16</td></tr>
      <tr><td>13.3</td><td>4</td><td>20</td></tr>
      <tr><td>13.6</td><td>3</td><td>23</td></tr>
      <tr><td>14.0</td><td>2</td><td>25</td></tr>
    </table>
  </li>
  <li><b>(b) ആകെ എണ്ണവും മധ്യമ സ്ഥാനവും:</b>
    ആകെ കുട്ടികൾ $N = 25$ (ഒറ്റസംഖ്യ).
    $$\\text{മധ്യമ സ്ഥാനം} = \\frac{25 + 1}{2} = 13\\text{-ാമത്തെ സ്ഥാനം}$$
  </li>
  <li><b>(c) മധ്യമ ഹീമോഗ്ലോബിൻ അളവ്:</b>
    സഞ്ചയിത ആവൃത്തി പരിശോധിച്ചാൽ:
    <ul>
      <li>10-ാമത്തെ കുട്ടി വരെയുള്ളവരുടെ അളവ് $12.7$ വരെയാണ്.</li>
      <li>11 മുതൽ 16 വരെയുള്ള കുട്ടികളുടെ അളവ് $13.1$ ആണ്.</li>
    </ul>
    13-ാമത്തെ കുട്ടി ഈ ഗ്രൂപ്പിൽ ഉൾപ്പെടുന്നതിനാൽ മധ്യമ ഹീമോഗ്ലോബിൻ അളവ് <b>13.1 ഗ്രാം/ഡെസിലിറ്റർ</b> ആണ്.
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) cf: 2, 5, 10, 16, 20, 23, 25; (b) N = 25, 13-ാമത്തെ സ്ഥാനം; (c) 13.1 ഗ്രാം/ഡെസിലിറ്റർ</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കൽ: 1.5 മാർക്ക്</li>
  <li>N = 25 ഉം 13-ാം സ്ഥാനവും കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>വിശദീകരണം സഹിതം മധ്യമം 13.1 എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Construct cumulative frequency column: 2, 5, 10, 16, 20, 23, 25.',
      'Calculate median rank = (25 + 1)/2 = 13th child.',
      'Show that ranks 11 through 16 correspond to haemoglobin level 13.1 g/dL.',
      'Conclude that the median haemoglobin level is 13.1 g/dL.'
    ],
    steps_ml: [
      'സഞ്ചയിത ആവൃത്തി കോളം തയ്യാറാക്കൽ: 2, 5, 10, 16, 20, 23, 25.',
      'മധ്യമ സ്ഥാനം $(25 + 1)/2 = 13$-ാമത്തെ കുട്ടി എന്ന് കണ്ടെത്തൽ.',
      '11 മുതൽ 16 വരെയുള്ള കുട്ടികളുടെ അളവ് $13.1$ ആണെന്ന് വ്യക്തമാക്കൽ.',
      'മധ്യമം $13.1$ ഗ്രാം/ഡെസിലിറ്റർ എന്ന് നിഗമനത്തിലെത്തൽ.'
    ],
    rubric_en: [
      'Correct cumulative frequency table: 1.5 marks',
      'Identifying total N = 25 and 13th position: 1 mark',
      'Identifying median value 13.1 g/dL with interval explanation: 1.5 marks'
    ],
    rubric_ml: [
      'സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കൽ: 1.5 മാർക്ക്',
      'N = 25 ഉം 13-ാം സ്ഥാനവും കണ്ടെത്തൽ: 1 മാർക്ക്',
      'വിശദീകരണം സഹിതം മധ്യമം 13.1 എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) cf: 2, 5, 10, 16, 20, 23, 25; (b) N = 25, 13th position; (c) 13.1 g/dL',
    answer_ml: '(a) cf: 2, 5, 10, 16, 20, 23, 25; (b) N = 25, 13-ാമത്തെ സ്ഥാനം; (c) 13.1 ഗ്രാം/ഡെസിലിറ്റർ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.4 Median from Frequency Distribution (Even Total)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.4',
    concept: 'm10.11.2.median-of-frequency-distributions',
    sec: '10.11.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'The table below shows the daily wages of 36 workers in a construction company:\\nDaily Wages (Rs): 400 (3 workers), 500 (7), 600 (10), 700 (8), 800 (5), 900 (3).\\n(a) Prepare the cumulative frequency table.\\n(b) Find the total number of workers $N$ and determine the two middle ranks whose wages decide the median.\\n(c) Find the daily wage of the workers at these positions, and hence calculate the median daily wage.',
    prompt_ml: 'ഒരു നിർമ്മാണ കമ്പനിയിലെ 36 തൊഴിലാളികളുടെ ദിവസക്കൂലി വിവരങ്ങൾ താഴെ തന്നിരിക്കുന്നു:\\nദിവസക്കൂലി (രൂപ): 400 (3 തൊഴിലാളികൾ), 500 (7), 600 (10), 700 (8), 800 (5), 900 (3).\\n(a) സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കുക.\\n(b) ആകെ തൊഴിലാളികളുടെ എണ്ണമായ $N$ എത്ര? മധ്യമം നിർണ്ണയിക്കുന്ന രണ്ട് നടുവിലെ സ്ഥാനങ്ങൾ ഏതെല്ലാം?\\n(c) ഈ സ്ഥാനങ്ങളിലെ തൊഴിലാളികളുടെ കൂലി കണ്ടെത്തി മധ്യമ ദിവസക്കൂലി കണക്കാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Cumulative Frequency Table:</b>
    <table border="1" style="border-collapse:collapse; text-align:center; width:60%;">
      <tr><th>Daily Wage (Rs)</th><th>Workers ($f$)</th><th>Cumulative Frequency ($cf$)</th></tr>
      <tr><td>400</td><td>3</td><td>3</td></tr>
      <tr><td>500</td><td>7</td><td>10</td></tr>
      <tr><td>600</td><td>10</td><td>20</td></tr>
      <tr><td>700</td><td>8</td><td>28</td></tr>
      <tr><td>800</td><td>5</td><td>33</td></tr>
      <tr><td>900</td><td>3</td><td>36</td></tr>
    </table>
  </li>
  <li><b>(b) Total Count and Middle Positions:</b>
    Total workers $N = 36$ (even).
    The middle two positions are:
    $$\\frac{N}{2} = 18^{\\text{th}} \\quad \\text{and} \\quad \\left(\\frac{N}{2} + 1\\right) = 19^{\\text{th}} \\text{ positions}$$
  </li>
  <li><b>(c) Calculating Median Wage:</b>
    Cumulative frequency up to Rs 500 is 10, and up to Rs 600 is 20.
    Therefore, all workers from rank 11 to rank 20 earn Rs 600.
    Both the $18^{\\text{th}}$ and $19^{\\text{th}}$ workers earn Rs 600.
    $$\\text{Median daily wage} = \\frac{600 + 600}{2} = 600 \\text{ Rs}$$
  </li>
</ol>
<p><b>Final Answer:</b> (a) cf: 3, 10, 20, 28, 33, 36; (b) N = 36, 18th and 19th positions; (c) Rs 600</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Cumulative frequency table: 1.5 marks</li>
  <li>Identifying 18th and 19th positions: 1 mark</li>
  <li>Finding values and computing median = Rs 600: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) സഞ്ചയിത ആവൃത്തി പട്ടിക:</b>
    <table border="1" style="border-collapse:collapse; text-align:center; width:60%;">
      <tr><th>ദിവസക്കൂലി (രൂപ)</th><th>തൊഴിലാളികൾ ($f$)</th><th>സഞ്ചയിത ആവൃത്തി ($cf$)</th></tr>
      <tr><td>400</td><td>3</td><td>3</td></tr>
      <tr><td>500</td><td>7</td><td>10</td></tr>
      <tr><td>600</td><td>10</td><td>20</td></tr>
      <tr><td>700</td><td>8</td><td>28</td></tr>
      <tr><td>800</td><td>5</td><td>33</td></tr>
      <tr><td>900</td><td>3</td><td>36</td></tr>
    </table>
  </li>
  <li><b>(b) ആകെ എണ്ണവും നടുവിലെ സ്ഥാനങ്ങളും:</b>
    ആകെ തൊഴിലാളികൾ $N = 36$ (ഇരട്ടസംഖ്യ).
    നടുവിലെ സ്ഥാനങ്ങൾ:
    $$\\frac{36}{2} = 18\\text{-ാമത്തെയും} \\quad 19\\text{-ാമത്തെയും സ്ഥാനങ്ങൾ}$$
  </li>
  <li><b>(c) മധ്യമ ദിവസക്കൂലി:</b>
    500 രൂപ വരെയുള്ള സഞ്ചയിത ആവൃത്തി 10 ഉം, 600 രൂപ വരെയുള്ളത് 20 ഉം ആണ്.
    അതിനാൽ 11 മുതൽ 20 വരെയുള്ള സ്ഥാനങ്ങളിലെ തൊഴിലാളികളുടെ ദിവസക്കൂലി 600 രൂപയാണ്.
    18, 19 സ്ഥാനങ്ങളിലുള്ളവരുടെ കൂലി 600 രൂപ തന്നെയാണ്.
    $$\\text{മധ്യമ ദിവസക്കൂലി} = \\frac{600 + 600}{2} = 600 \\text{ രൂപ}$$
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) cf: 3, 10, 20, 28, 33, 36; (b) N = 36, 18, 19 സ്ഥാനങ്ങൾ; (c) 600 രൂപ</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കൽ: 1.5 മാർക്ക്</li>
  <li>18, 19 സ്ഥാനങ്ങൾ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>വിലകൾ കണ്ടെത്തി മധ്യമം 600 രൂപ എന്ന് കണക്കാക്കൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Construct cumulative frequency column: 3, 10, 20, 28, 33, 36.',
      'Identify middle ranks 18th and 19th since N = 36 is even.',
      'Observe that both 18th and 19th workers fall into the Rs 600 category.',
      'Average the two values to obtain median = Rs 600.'
    ],
    steps_ml: [
      'സഞ്ചയിത ആവൃത്തി കോളം തയ്യാറാക്കൽ: 3, 10, 20, 28, 33, 36.',
      '$N = 36$ ആയതിനാൽ നടുവിലെ സ്ഥാനങ്ങൾ 18, 19 എന്ന് കണ്ടെത്തൽ.',
      '18, 19 സ്ഥാനങ്ങളിലെ തൊഴിലാളികളുടെ കൂലി 600 രൂപയാണെന്ന് തിരിച്ചറിയൽ.',
      'ശരാശരി കണ്ട് മധ്യമ കൂലി 600 രൂപ എന്ന് നിഗമനത്തിലെത്തൽ.'
    ],
    rubric_en: [
      'Cumulative frequency table: 1.5 marks',
      'Identifying 18th and 19th positions: 1 mark',
      'Finding values and computing median = Rs 600: 1.5 marks'
    ],
    rubric_ml: [
      'സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കൽ: 1.5 മാർക്ക്',
      '18, 19 സ്ഥാനങ്ങൾ കണ്ടെത്തൽ: 1 മാർക്ക്',
      'വിലകൾ കണ്ടെത്തി മധ്യമം 600 രൂപ എന്ന് കണക്കാക്കൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) cf: 3, 10, 20, 28, 33, 36; (b) N = 36, 18th and 19th positions; (c) Rs 600',
    answer_ml: '(a) cf: 3, 10, 20, 28, 33, 36; (b) N = 36, 18, 19 സ്ഥാനങ്ങൾ; (c) 600 രൂപ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.5 Median of Grouped Continuous Distribution
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.5',
    concept: 'm10.11.3.median-of-grouped-distributions',
    sec: '10.11.3',
    type: 'exercise',
    marks: 5,
    time: 300,
    prompt_en: 'The table below shows the daily wages of 41 workers in a factory grouped into class intervals:\\nDaily Wages (Rs): 400-500 (6 workers), 500-600 (7), 600-700 (10), 700-800 (9), 800-900 (5), 900-1000 (4).\\n(a) Prepare the cumulative frequency table.\\n(b) Identify the median position and the median class.\\n(c) State the values of $L, N, cf, f,$ and $h$.\\n(d) Calculate the median daily wage of the workers using the SCERT formula.',
    prompt_ml: 'ഒരു ഫാക്ടറിയിലെ 41 തൊഴിലാളികളുടെ ദിവസക്കൂലി വർഗ്ഗീകരിച്ച വിവരങ്ങൾ താഴെ തന്നിരിക്കുന്നു:\\nദിവസക്കൂലി (രൂപ): 400-500 (6 പേർ), 500-600 (7), 600-700 (10), 700-800 (9), 800-900 (5), 900-1000 (4).\\n(a) സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കുക.\\n(b) മധ്യമ സ്ഥാനവും മധ്യമ ക്ലാസും കണ്ടെത്തുക.\\n(c) $L, N, cf, f, h$ എന്നിവയുടെ വിലകൾ എഴുതുക.\\n(d) സൂത്രവാക്യം ഉപയോഗിച്ച് തൊഴിലാളികളുടെ മധ്യമ ദിവസക്കൂലി കണക്കാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Cumulative Frequency Table:</b>
    <table border="1" style="border-collapse:collapse; text-align:center; width:65%;">
      <tr><th>Daily Wages (Rs)</th><th>Workers ($f$)</th><th>Cumulative Frequency ($cf$)</th></tr>
      <tr><td>400 - 500</td><td>6</td><td>6</td></tr>
      <tr><td>500 - 600</td><td>7</td><td>13</td></tr>
      <tr><td>600 - 700</td><td>10</td><td>23</td></tr>
      <tr><td>700 - 800</td><td>9</td><td>32</td></tr>
      <tr><td>800 - 900</td><td>5</td><td>37</td></tr>
      <tr><td>900 - 1000</td><td>4</td><td>41</td></tr>
    </table>
  </li>
  <li><b>(b) Median Position and Median Class:</b>
    Total workers $N = 41$.
    $$\\frac{N}{2} = \\frac{41}{2} = 20.5^{\\text{th}} \\text{ position (or } 21^{\\text{st}} \\text{ worker)}$$
    From the cumulative frequencies, $cf$ reaches $13$ at 600, and $23$ at 700.
    Thus, the $20.5^{\\text{th}}$ (or $21^{\\text{st}}$) worker lies in the <b>600 - 700</b> class.
    Median class is <b>600 - 700</b>.
  </li>
  <li><b>(c) Identifying Formula Parameters:</b>
    <ul>
      <li>Lower limit of median class $L = 600$</li>
      <li>Total frequency $N = 41$ (so $N/2 = 20.5$)</li>
      <li>Cumulative frequency of preceding class $cf = 13$</li>
      <li>Frequency of median class $f = 10$</li>
      <li>Class width $h = 700 - 600 = 100$</li>
    </ul>
  </li>
  <li><b>(d) Calculating Median Daily Wage:</b>
    $$\\begin{aligned}
    \\text{Median} &= L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h \\\\
    &= 600 + \\left(\\frac{20.5 - 13}{10}\\right) \\times 100 \\\\
    &= 600 + \\left(\\frac{7.5}{10}\\right) \\times 100 \\\\
    &= 600 + 75 = 675 \\text{ Rs}
    \\end{aligned}$$
    <i>(Using the textbook AP method: 14th worker earns $600 + 5 = 605$, and each subsequent worker increases by $100/10 = 10$ Rs. To reach the 21st worker from the 14th worker requires 7 steps: $605 + 7 \\times 10 = 675$ Rs.)</i>
  </li>
</ol>
<p><b>Final Answer:</b> (a) cf: 6, 13, 23, 32, 37, 41; (b) Median class: 600 - 700; (c) L = 600, N = 41, cf = 13, f = 10, h = 100; (d) Rs 675</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Cumulative frequency table: 1 mark</li>
  <li>Identifying median position and class (600 - 700): 1 mark</li>
  <li>Listing formula parameters correctly: 1 mark</li>
  <li>Formula substitution and calculation: 1 mark</li>
  <li>Final answer (Rs 675): 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) സഞ്ചയിത ആവൃത്തി പട്ടിക:</b>
    <table border="1" style="border-collapse:collapse; text-align:center; width:65%;">
      <tr><th>ദിവസക്കൂലി (രൂപ)</th><th>തൊഴിലാളികൾ ($f$)</th><th>സഞ്ചയിത ആവൃത്തി ($cf$)</th></tr>
      <tr><td>400 - 500</td><td>6</td><td>6</td></tr>
      <tr><td>500 - 600</td><td>7</td><td>13</td></tr>
      <tr><td>600 - 700</td><td>10</td><td>23</td></tr>
      <tr><td>700 - 800</td><td>9</td><td>32</td></tr>
      <tr><td>800 - 900</td><td>5</td><td>37</td></tr>
      <tr><td>900 - 1000</td><td>4</td><td>41</td></tr>
    </table>
  </li>
  <li><b>(b) മധ്യമ സ്ഥാനവും മധ്യമ ക്ലാസും:</b>
    ആകെ തൊഴിലാളികൾ $N = 41$.
    $$\\frac{N}{2} = \\frac{41}{2} = 20.5\\text{-ാമത്തെ സ്ഥാനം (അഥവാ } 21\\text{-ാമത്തെ ആൾ)}$$
    500 - 600 വരെയുള്ള സഞ്ചയിത ആവൃത്തി 13 ഉം, 600 - 700 വരെയുള്ളത് 23 ഉം ആണ്.
    അതിനാൽ മധ്യമ ക്ലാസ് <b>600 - 700</b> ആണ്.
  </li>
  <li><b>(c) സൂത്രവാക്യത്തിലെ അളവുകൾ:</b>
    <ul>
      <li>മധ്യമ ക്ലാസിന്റെ അധോപരിധി $L = 600$</li>
      <li>ആകെ ആവൃത്തി $N = 41$ ($N/2 = 20.5$)</li>
      <li>തൊട്ടുമുൻപിലെ ക്ലാസിന്റെ സഞ്ചയിത ആവൃത്തി $cf = 13$</li>
      <li>മധ്യമ ക്ലാസിന്റെ ആവൃത്തി $f = 10$</li>
      <li>ക്ലാസ് നീളം $h = 700 - 600 = 100$</li>
    </ul>
  </li>
  <li><b>(d) മധ്യമ ദിവസക്കൂലി കാണൽ:</b>
    $$\\begin{aligned}
    \\text{മധ്യമം} &= L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h \\\\
    &= 600 + \\left(\\frac{20.5 - 13}{10}\\right) \\times 100 \\\\
    &= 600 + \\left(\\frac{7.5}{10}\\right) \\times 100 \\\\
    &= 600 + 75 = 675 \\text{ രൂപ}
    \\end{aligned}$$
    <i>(പാഠപുസ്തക രീതി: 14-ാമത്തെ തൊഴിലാളിയുടെ കൂലി $600 + 5 = 605$ രൂപ; അടുത്ത ഓരോരുത്തർക്കും $10$ രൂപ വീതം കൂടും. 21-ാമത്തെ ആളിലേക്ക് 7 പടികൾ: $605 + 7 \\times 10 = 675$ രൂപ.)</i>
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) cf: 6, 13, 23, 32, 37, 41; (b) മധ്യമ ക്ലാസ്: 600 - 700; (c) L = 600, N = 41, cf = 13, f = 10, h = 100; (d) 675 രൂപ</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കൽ: 1 മാർക്ക്</li>
  <li>മധ്യമ ക്ലാസ് (600 - 700) കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>സൂത്രവാക്യത്തിലെ അളവുകൾ രേഖപ്പെടുത്തൽ: 1 മാർക്ക്</li>
  <li>വില നൽകി കണക്കാക്കൽ: 1 മാർക്ക്</li>
  <li>അന്തിമ ഉത്തരം 675 രൂപ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Prepare cumulative frequency table: 6, 13, 23, 32, 37, 41.',
      'Locate median position N/2 = 20.5 in the cumulative frequency column: median class is 600 - 700.',
      'Identify parameters: L = 600, cf = 13, f = 10, h = 100.',
      'Apply formula: Median = 600 + ((20.5 - 13)/10) * 100 = 600 + 75 = Rs 675.'
    ],
    steps_ml: [
      'സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കൽ: 6, 13, 23, 32, 37, 41.',
      '$N/2 = 20.5$ ആം സ്ഥാനം കണ്ട് മധ്യമ ക്ലാസ് 600 - 700 എന്ന് കണ്ടെത്തൽ.',
      'അളവുകൾ കണ്ടെത്തൽ: $L = 600, cf = 13, f = 10, h = 100$.',
      'സൂത്രവാക്യം പ്രയോഗിച്ച് മധ്യമം $= 600 + ((20.5 - 13)/10) \\times 100 = 675$ രൂപ എന്ന് കണക്കാക്കൽ.'
    ],
    rubric_en: [
      'Cumulative frequency table: 1 mark',
      'Identifying median position and class (600 - 700): 1 mark',
      'Listing formula parameters correctly: 1 mark',
      'Formula substitution and calculation: 1 mark',
      'Final answer (Rs 675): 1 mark'
    ],
    rubric_ml: [
      'സഞ്ചയിത ആവൃത്തി പട്ടിക തയ്യാറാക്കൽ: 1 മാർക്ക്',
      'മധ്യമ ക്ലാസ് (600 - 700) കണ്ടെത്തൽ: 1 മാർക്ക്',
      'സൂത്രവാക്യത്തിലെ അളവുകൾ രേഖപ്പെടുത്തൽ: 1 മാർക്ക്',
      'വില നൽകി കണക്കാക്കൽ: 1 മാർക്ക്',
      'അന്തിമ ഉത്തരം 675 രൂപ: 1 മാർക്ക്'
    ],
    answer_en: '(a) cf: 6, 13, 23, 32, 37, 41; (b) Median class: 600 - 700; (c) L = 600, N = 41, cf = 13, f = 10, h = 100; (d) Rs 675',
    answer_ml: '(a) cf: 6, 13, 23, 32, 37, 41; (b) മധ്യമ ക്ലാസ്: 600 - 700; (c) L = 600, N = 41, cf = 13, f = 10, h = 100; (d) 675 രൂപ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.6 Comparing Mean and Median with Outliers
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.11.6',
    concept: 'm10.11.4.comparing-mean-and-median',
    sec: '10.11.4',
    type: 'exercise',
    marks: 5,
    time: 300,
    prompt_en: 'The monthly incomes (in Rs) of 10 households in a neighbourhood are:\\n16500, 17000, 17500, 18000, 18600, 19500, 21000, 21050, 21700, 22000.\\n(a) Calculate the arithmetic mean of the monthly incomes of these 10 households.\\n(b) Calculate the median monthly income of these 10 households.\\n(c) An 11th household with a very high monthly income of Rs 175,000 moves into the neighbourhood. Calculate the new arithmetic mean and the new median of the 11 households.\\n(d) Compare how the mean and median changed, and explain why the median is considered the superior indicator of living standards in this situation.',
    prompt_ml: 'ഒരു പ്രദേശത്തെ 10 കുടുംബങ്ങളുടെ പ്രതിമാസ വരുമാനം (രൂപയിൽ):\\n16500, 17000, 17500, 18000, 18600, 19500, 21000, 21050, 21700, 22000.\\n(a) ഈ 10 കുടുംബങ്ങളുടെ പ്രതിമാസ വരുമാനത്തിന്റെ സമാന്തര ശരാശരി കാണുക.\\n(b) ഈ 10 കുടുംബങ്ങളുടെ മധ്യമ പ്രതിമാസ വരുമാനം കാണുക.\\n(c) പ്രതിമാസം 175,000 രൂപ വരുമാനമുള്ള 11-ാമതൊരു കുടുംബം കൂടി ഇവിടെ താമസിക്കാൻ എത്തിയാൽ, ആകെ 11 കുടുംബങ്ങളുടെ പുതിയ ശരാശരിയും പുതിയ മധ്യമവും കാണുക.\\n(d) ശരാശരിയിലും മധ്യമത്തിലും ഉണ്ടായ മാറ്റം താരതമ്യം ചെയ്യുക. ഈ സാഹചര്യത്തിൽ ജനങ്ങളുടെ ജീവിതനിലവാരം മനസ്സിലാക്കാൻ മധ്യമം കൂടുതൽ അനുയോജ്യമാകുന്നത് എന്തുകൊണ്ട് എന്ന് വിശദീകരിക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>(a) Arithmetic Mean of 10 Households:</b>
    $$\\text{Sum} = 16500 + 17000 + 17500 + 18000 + 18600 + 19500 + 21000 + 21050 + 21700 + 22000 = 192850 \\text{ Rs}$$
    $$\\text{Mean} = \\frac{192850}{10} = 19285 \\text{ Rs}$$
  </li>
  <li><b>(b) Median of 10 Households:</b>
    Data is sorted with $n = 10$. Middle observations are $5^{\\text{th}}$ (18600) and $6^{\\text{th}}$ (19500).
    $$\\text{Median} = \\frac{18600 + 19500}{2} = \\frac{38100}{2} = 19050 \\text{ Rs}$$
  </li>
  <li><b>(c) New Mean and Median for 11 Households:</b>
    New sum with 11th household:
    $$\\text{New Sum} = 192850 + 175000 = 367850 \\text{ Rs}$$
    $$\\text{New Mean} = \\frac{367850}{11} \\approx 33441 \\text{ Rs}$$
    Sorted order of 11 households:
    $$16500, 17000, 17500, 18000, 18600, \\mathbf{19500}, 21000, 21050, 21700, 22000, 175000$$
    With $n = 11$ (odd), the median is the $6^{\\text{th}}$ observation:
    $$\\text{New Median} = 19500 \\text{ Rs}$$
  </li>
  <li><b>(d) Comparison and Conclusion:</b>
    The mean surged from Rs 19,285 to Rs 33,441 (an increase of Rs 14,156, or over 73%), creating the false impression that typical families earn over Rs 30,000. In contrast, the median changed only slightly from Rs 19,050 to Rs 19,500 (an increase of Rs 450).
    The <b>median</b> is superior because it is unaffected by extreme outlier magnitudes and accurately reflects the economic reality of the majority of households.
  </li>
</ol>
<p><b>Final Answer:</b> (a) Rs 19,285; (b) Rs 19,050; (c) New Mean ≈ Rs 33,441, New Median = Rs 19,500; (d) Mean inflated by 73% due to one outlier, while median remained robust</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Initial mean calculation: 1 mark</li>
  <li>Initial median calculation: 1 mark</li>
  <li>New mean and new median calculation: 1.5 marks</li>
  <li>Comparison and explanation of outlier resistance: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>(a) 10 കുടുംബങ്ങളുടെ ശരാശരി:</b>
    $$\\text{തുക} = 16500 + 17000 + 17500 + 18000 + 18600 + 19500 + 21000 + 21050 + 21700 + 22000 = 192850 \\text{ രൂപ}$$
    $$\\text{ശരാശരി} = \\frac{192850}{10} = 19285 \\text{ രൂപ}$$
  </li>
  <li><b>(b) 10 കുടുംബങ്ങളുടെ മധ്യമം:</b>
    വിവരങ്ങൾ ക്രമത്തിലാണ് ($n = 10$). നടുവിലെ സംഖ്യകൾ 5-ാമത്തെ പദമായ 18600 ഉം 6-ാമത്തെ പദമായ 19500 ഉം ആണ്.
    $$\\text{മധ്യമം} = \\frac{18600 + 19500}{2} = 19050 \\text{ രൂപ}$$
  </li>
  <li><b>(c) 11 കുടുംബങ്ങളുടെ പുതിയ ശരാശരിയും മധ്യമവും:</b>
    പുതിയ തുക $= 192850 + 175000 = 367850$ രൂപ.
    $$\\text{പുതിയ ശരാശരി} = \\frac{367850}{11} \\approx 33441 \\text{ രൂപ}$$
    11 കുടുംബങ്ങളുടെ ക്രമം:
    $$16500, 17000, 17500, 18000, 18600, \\mathbf{19500}, 21000, 21050, 21700, 22000, 175000$$
    $n = 11$ ഒറ്റസംഖ്യയായതിനാൽ ആറാമത്തെ പദമായ 19500 ആണ് പുതിയ മധ്യമം:
    $$\\text{പുതിയ മധ്യമം} = 19500 \\text{ രൂപ}$$
  </li>
  <li><b>(d) താരതമ്യവും നിഗമനവും:</b>
    ശരാശരി വരുമാനം 19,285 രൂപയിൽ നിന്ന് 33,441 രൂപയായി (73 ശതമാനത്തിലധികം വർദ്ധനവ്) മാറി. ഇത് എല്ലാവർക്കും 30,000 രൂപയ്ക്ക് മുകളിൽ വരുമാനമുണ്ടെന്ന തെറ്റായ ധാരണ നൽകുന്നു. എന്നാൽ മധ്യമം 19,050 രൂപയിൽ നിന്ന് 19,500 രൂപയായി വളരെ ചെറിയ മാറ്റം മാത്രമേ ഉണ്ടായുള്ളൂ.
    ഒറ്റപ്പെട്ട വലിയ വരുമാനം ശരാശരിയെ വല്ലാതെ മാറ്റുമെങ്കിലും <b>മധ്യമം</b> ഭൂരിപക്ഷം വരുന്ന സാധാരണ കുടുംബങ്ങളുടെ യഥാർത്ഥ അവസ്ഥയെ കൃത്യമായി പ്രതിഫലിപ്പിക്കുന്നു.
  </li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 19,285 രൂപ; (b) 19,050 രൂപ; (c) പുതിയ ശരാശരി ≈ 33,441 രൂപ, പുതിയ മധ്യമം = 19,500 രൂപ; (d) ശരാശരി തീവ്രവിലയാൽ 73% ഉയർന്നപ്പോൾ മധ്യമം സ്ഥിരത പുലർത്തി</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>ആദ്യത്തെ ശരാശരി കണക്കാക്കൽ: 1 മാർക്ക്</li>
  <li>ആദ്യത്തെ മധ്യമം കണക്കാക്കൽ: 1 മാർക്ക്</li>
  <li>പുതിയ ശരാശരിയും മധ്യമവും കാണൽ: 1.5 മാർക്ക്</li>
  <li>താരതമ്യവും മധ്യമത്തിന്റെ അനുയോജ്യത വിശദീകരിക്കലും: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Calculate sum = 192850 and mean = 19285 Rs for 10 households.',
      'Average 5th (18600) and 6th (19500) values to find initial median = 19050 Rs.',
      'Add 175000 to get new sum = 367850 and new mean = 33441 Rs; identify 6th observation = 19500 Rs as new median.',
      'Contrast the large jump in mean with the stability of the median, justifying median as the preferred metric.'
    ],
    steps_ml: [
      '10 കുടുംബങ്ങളുടെ തുക 192850 കണ്ട് ശരാശരി 19285 രൂപ എന്ന് കണ്ടെത്തൽ.',
      '5, 6 സ്ഥാനങ്ങളിലെ ശരാശരി കണ്ട് ആദ്യ മധ്യമം 19050 രൂപ എന്ന് കണ്ടെത്തൽ.',
      '175000 കൂട്ടി പുതിയ തുക 367850, പുതിയ ശരാശരി 33441 രൂപ എന്നും പുതിയ മധ്യമം 19500 രൂപ എന്നും കാണൽ.',
      'ശരാശരിയിലുണ്ടായ വലിയ വർദ്ധനവും മധ്യമത്തിന്റെ സ്ഥിരതയും താരതമ്യം ചെയ്ത് വിശദീകരിക്കൽ.'
    ],
    rubric_en: [
      'Initial mean calculation: 1 mark',
      'Initial median calculation: 1 mark',
      'New mean and new median calculation: 1.5 marks',
      'Comparison and explanation of outlier resistance: 1.5 marks'
    ],
    rubric_ml: [
      'ആദ്യത്തെ ശരാശരി കണക്കാക്കൽ: 1 മാർക്ക്',
      'ആദ്യത്തെ മധ്യമം കണക്കാക്കൽ: 1 മാർക്ക്',
      'പുതിയ ശരാശരിയും മധ്യമവും കാണൽ: 1.5 മാർക്ക്',
      'താരതമ്യവും മധ്യമത്തിന്റെ അനുയോജ്യത വിശദീകരിക്കലും: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) Rs 19,285; (b) Rs 19,050; (c) New Mean ≈ Rs 33,441, New Median = Rs 19,500; (d) Mean inflated by 73% due to one outlier, while median remained robust',
    answer_ml: '(a) 19,285 രൂപ; (b) 19,050 രൂപ; (c) പുതിയ ശരാശരി ≈ 33,441 രൂപ, പുതിയ മധ്യമം = 19,500 രൂപ; (d) ശരാശരി തീവ്രവിലയാൽ 73% ഉയർന്നപ്പോൾ മധ്യമം സ്ഥിരത പുലർത്തി'
  }
);
