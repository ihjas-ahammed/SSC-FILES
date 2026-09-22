/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 5: Money Maths (പണമിടപാടുകളിലെ കണക്ക്)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'obj.m8.5.1',
    concept: 'm8.5.1.interest-on-interest',
    sec: '8.5.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'An amount of ₹10,000 is deposited at 8% per annum. What is the difference between simple interest and compound interest (compounded annually) for the first year?',
    prompt_ml: '₹10,000 രൂപ 8% വാർഷിക നിരക്കിൽ നിക്ഷേപിക്കുന്നു. ഒന്നാം വർഷത്തെ ലളിതപലിശയും വാർഷിക കൂട്ടുപലിശയും തമ്മിലുള്ള വ്യത്യാസം എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '₹0' },
      { k: 'B', t: '₹80' },
      { k: 'C', t: '₹800' },
      { k: 'D', t: '₹64' }
    ],
    options_ml: [
      { k: 'A', t: '₹0' },
      { k: 'B', t: '₹80' },
      { k: 'C', t: '₹800' },
      { k: 'D', t: '₹64' }
    ],
    answer: 'A',
    solution_en: 'For the first year, simple interest and annual compound interest are always identical. Interest = $\\frac{10000 \\times 1 \\times 8}{100} = ₹800$ in both cases. Difference = ₹0.',
    solution_ml: 'വാർഷിക കൂട്ടുപലിശയിൽ ഒന്നാം വർഷത്തെ ലളിതപലിശയും കൂട്ടുപലിശയും എപ്പോഴും തുല്യമായിരിക്കും. രണ്ട് രീതിയിലും പലിശ = $\\frac{10000 \\times 1 \\times 8}{100} = ₹800$ ആണ്. അതിനാൽ വ്യത്യാസം = ₹0.',
    tested_en: 'First year equivalence of simple and compound interest.',
    tested_ml: 'ഒന്നാം വർഷത്തെ ലളിതപലിശയും കൂട്ടുപലിശയും തമ്മിലുള്ള തുല്യത.'
  },

  {
    id: 'obj.m8.5.2',
    concept: 'm8.5.1.interest-on-interest',
    sec: '8.5.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: '₹5,000 is deposited at 10% annual compound interest. How much more interest is earned in the second year compared to the first year?',
    prompt_ml: '₹5,000 രൂപ 10% വാർഷിക കൂട്ടുപലിശ നിരക്കിൽ നിക്ഷേപിക്കുന്നു. ഒന്നാം വർഷത്തെക്കാൾ എത്ര രൂപ അധികം പലിശ രണ്ടാം വർഷം ലഭിക്കും?',
    options_en: [
      { k: 'A', t: '₹50' },
      { k: 'B', t: '₹500' },
      { k: 'C', t: '₹550' },
      { k: 'D', t: '₹100' }
    ],
    options_ml: [
      { k: 'A', t: '₹50' },
      { k: 'B', t: '₹500' },
      { k: 'C', t: '₹550' },
      { k: 'D', t: '₹100' }
    ],
    answer: 'A',
    solution_en: 'Year 1 interest: $10\\% \\text{ of } 5000 = ₹500$. Year 2 principal = $5000 + 500 = ₹5,500$. Year 2 interest: $10\\% \\text{ of } 5500 = ₹550$. Difference = $550 - 500 = ₹50$ (which is $10\\%$ of Year 1 interest ₹500).',
    solution_ml: 'ഒന്നാം വർഷത്തെ പലിശ: ₹5,000-ന്റെ $10\\% = ₹500$. രണ്ടാം വർഷത്തെ മുതൽ = $5000 + 500 = ₹5,500$. രണ്ടാം വർഷത്തെ പലിശ: ₹5,500-ന്റെ $10\\% = ₹550$. അധികം ലഭിച്ച തുക = $550 - 500 = ₹50$ (ഇത് ഒന്നാം വർഷത്തെ പലിശയായ ₹500-ന്റെ 10% ആണ്).',
    tested_en: 'Interest on interest concept.',
    tested_ml: 'പലിശയുടെ പലിശ എന്ന ആശയം.'
  },

  {
    id: 'obj.m8.5.3',
    concept: 'm8.5.2.compound-interest-formula',
    sec: '8.5.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the total amount on a principal of ₹4,000 for 2 years at 5% per annum compound interest compounded annually?',
    prompt_ml: '₹4,000 രൂപയ്ക്ക് 5% വാർഷിക കൂട്ടുപലിശ നിരക്കിൽ 2 വർഷത്തിനു ശേഷം ലഭിക്കുന്ന ആകെ തുക എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '₹4,410' },
      { k: 'B', t: '₹4,400' },
      { k: 'C', t: '₹4,200' },
      { k: 'D', t: '₹4,800' }
    ],
    options_ml: [
      { k: 'A', t: '₹4,410' },
      { k: 'B', t: '₹4,400' },
      { k: 'C', t: '₹4,200' },
      { k: 'D', t: '₹4,800' }
    ],
    answer: 'A',
    solution_en: '$A = P\\left(1 + \\frac{r}{100}\\right)^n = 4000\\left(1 + \\frac{5}{100}\\right)^2 = 4000 \\times \\left(\\frac{21}{20}\\right)^2 = 4000 \\times \\frac{441}{400} = ₹4,410$.',
    solution_ml: '$A = P\\left(1 + \\frac{r}{100}\\right)^n = 4000\\left(1 + \\frac{5}{100}\\right)^2 = 4000 \\times \\left(\\frac{21}{20}\\right)^2 = 4000 \\times \\frac{441}{400} = ₹4,410$.',
    tested_en: 'Compound interest amount formula.',
    tested_ml: 'കൂട്ടുപലിശ സൂത്രവാക്യം.'
  },

  {
    id: 'obj.m8.5.4',
    concept: 'm8.5.2.compound-interest-formula',
    sec: '8.5.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'A sum of ₹12,000 amounts to ₹13,230 in 2 years at compound interest compounded annually. What is the annual rate of interest?',
    prompt_ml: '₹12,000 രൂപ 2 വർഷത്തെ വാർഷിക കൂട്ടുപലിശ പ്രകാരം ₹13,230 ആയി മാറുന്നു. വാർഷിക പലിശനിരക്ക് എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '5%' },
      { k: 'B', t: '6%' },
      { k: 'C', t: '10%' },
      { k: 'D', t: '4%' }
    ],
    options_ml: [
      { k: 'A', t: '5%' },
      { k: 'B', t: '6%' },
      { k: 'C', t: '10%' },
      { k: 'D', t: '4%' }
    ],
    answer: 'A',
    solution_en: '$\\frac{A}{P} = \\left(1 + \\frac{r}{100}\\right)^2 \\implies \\frac{13230}{12000} = \\frac{441}{400} = \\left(\\frac{21}{20}\\right)^2$. Thus $1 + \\frac{r}{100} = \\frac{21}{20} \\implies \\frac{r}{100} = \\frac{1}{20} \\implies r = 5\\%$.',
    solution_ml: '$\\frac{A}{P} = \\left(1 + \\frac{r}{100}\\right)^2 \\implies \\frac{13230}{12000} = \\frac{441}{400} = \\left(\\frac{21}{20}\\right)^2$. അതിനാൽ $1 + \\frac{r}{100} = \\frac{21}{20} \\implies \\frac{r}{100} = \\frac{1}{20} \\implies r = 5\\%$.',
    tested_en: 'Finding interest rate from compound amount.',
    tested_ml: 'കൂട്ടുപലിശ നിരക്ക് കണ്ടെത്തൽ.'
  },

  {
    id: 'obj.m8.5.5',
    concept: 'm8.5.3.changing-compounding-periods',
    sec: '8.5.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If ₹10,000 is deposited for 1 year at 10% per annum compounded half-yearly, what is the interest rate applied per period and what is the number of compounding periods?',
    prompt_ml: '₹10,000 രൂപ 1 വർഷത്തേക്ക് 10% വാർഷിക നിരക്കിൽ അർദ്ധവാർഷികമായി കൂട്ടുപലിശ കണക്കാക്കുന്നു. ഓരോ തവണയിലെയും പലിശനിരക്കും ആകെ തവണകളുടെ എണ്ണവും എത്ര?',
    options_en: [
      { k: 'A', t: '5%, 2 periods' },
      { k: 'B', t: '10%, 1 period' },
      { k: 'C', t: '5%, 1 period' },
      { k: 'D', t: '2.5%, 4 periods' }
    ],
    options_ml: [
      { k: 'A', t: '5%, 2 തവണകൾ' },
      { k: 'B', t: '10%, 1 തവണ' },
      { k: 'C', t: '5%, 1 തവണ' },
      { k: 'D', t: '2.5%, 4 തവണകൾ' }
    ],
    answer: 'A',
    solution_en: 'For half-yearly compounding: rate per half-year = $\\frac{10\\%}{2} = 5\\%$. In 1 year, there are $2 \\times 1 = 2$ half-year periods.',
    solution_ml: 'അർദ്ധവാർഷിക കൂട്ടുപലിശയിൽ: ഒരു അർദ്ധവർഷത്തെ നിരക്ക് = $\\frac{10\\%}{2} = 5\\%$. 1 വർഷത്തിൽ $2 \\times 1 = 2$ അർദ്ധവർഷങ്ങൾ (തവണകൾ) ഉണ്ട്.',
    tested_en: 'Half-yearly compounding parameters.',
    tested_ml: 'അർദ്ധവാർഷിക കൂട്ടുപലിശയിലെ നിരക്കും തവണകളും.'
  },

  {
    id: 'obj.m8.5.6',
    concept: 'm8.5.3.changing-compounding-periods',
    sec: '8.5.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the total amount after 1 year on ₹8,000 at 10% per annum compounded half-yearly?',
    prompt_ml: '₹8,000 രൂപയ്ക്ക് 10% വാർഷിക നിരക്കിൽ അർദ്ധവാർഷിക കൂട്ടുപലിശ പ്രകാരം 1 വർഷത്തിനു ശേഷം ലഭിക്കുന്ന ആകെ തുക എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '₹8,820' },
      { k: 'B', t: '₹8,800' },
      { k: 'C', t: '₹8,840' },
      { k: 'D', t: '₹8,900' }
    ],
    options_ml: [
      { k: 'A', t: '₹8,820' },
      { k: 'B', t: '₹8,800' },
      { k: 'C', t: '₹8,840' },
      { k: 'D', t: '₹8,900' }
    ],
    answer: 'A',
    solution_en: 'Rate = $5\\%$ per half-year, periods $n = 2$. $A = 8000\\left(1 + \\frac{5}{100}\\right)^2 = 8000 \\times \\frac{441}{400} = ₹8,820$. (Notice this is ₹20 more than annual simple interest ₹8,800!).',
    solution_ml: 'അർദ്ധവാർഷിക നിരക്ക് = $5\\%$, തവണകൾ = 2. $A = 8000\\left(1 + \\frac{5}{100}\\right)^2 = 8000 \\times \\frac{441}{400} = ₹8,820$. (ലളിതപലിശയെക്കാൾ ₹20 അധികമാണ്).',
    tested_en: 'Calculating amount with half-yearly compounding.',
    tested_ml: 'അർദ്ധവാർഷിക കൂട്ടുപലിശയിലെ തുക കാണൽ.'
  },

  {
    id: 'obj.m8.5.7',
    concept: 'm8.5.4.growth-and-depreciation',
    sec: '8.5.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The population of a town is 50,000. It increases at a rate of 4% per year. What will the population be after 1 year?',
    prompt_ml: 'ഒരു നഗരത്തിലെ ജനസംഖ്യ 50,000 ആണ്. ഇത് പ്രതിവർഷം 4% നിരക്കിൽ വർദ്ധിക്കുന്നുവെങ്കിൽ 1 വർഷത്തിനു ശേഷം ജനസംഖ്യ എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '52,000' },
      { k: 'B', t: '54,000' },
      { k: 'C', t: '51,000' },
      { k: 'D', t: '53,000' }
    ],
    options_ml: [
      { k: 'A', t: '52,000' },
      { k: 'B', t: '54,000' },
      { k: 'C', t: '51,000' },
      { k: 'D', t: '53,000' }
    ],
    answer: 'A',
    solution_en: '$P_1 = P_0\\left(1 + \\frac{r}{100}\\right) = 50000 \\times \\left(1 + \\frac{4}{100}\\right) = 50000 \\times 1.04 = 52,000$.',
    solution_ml: '$P_1 = P_0\\left(1 + \\frac{r}{100}\\right) = 50000 \\times \\left(1 + \\frac{4}{100}\\right) = 50000 \\times 1.04 = 52,000$.',
    tested_en: 'Population growth application.',
    tested_ml: 'ജനസംഖ്യാ വർദ്ധനവ് കണക്കാക്കൽ.'
  },

  {
    id: 'obj.m8.5.8',
    concept: 'm8.5.4.growth-and-depreciation',
    sec: '8.5.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'A machine bought for ₹20,000 depreciates at the rate of 10% per year. What is its value after 2 years?',
    prompt_ml: '₹20,000 രൂപയ്ക്ക് വാങ്ങിയ ഒരു യന്ത്രത്തിന് പ്രതിവർഷം 10% മൂല്യത്തകർച്ചയുണ്ടാകുന്നു. 2 വർഷത്തിനു ശേഷം ഇതിന്റെ വില എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '₹16,200' },
      { k: 'B', t: '₹16,000' },
      { k: 'C', t: '₹18,000' },
      { k: 'D', t: '₹15,800' }
    ],
    options_ml: [
      { k: 'A', t: '₹16,200' },
      { k: 'B', t: '₹16,000' },
      { k: 'C', t: '₹18,000' },
      { k: 'D', t: '₹15,800' }
    ],
    answer: 'A',
    solution_en: '$P_2 = P_0\\left(1 - \\frac{r}{100}\\right)^2 = 20000\\left(1 - \\frac{10}{100}\\right)^2 = 20000 \\times \\left(\\frac{9}{10}\\right)^2 = 20000 \\times \\frac{81}{100} = ₹16,200$.',
    solution_ml: '$P_2 = P_0\\left(1 - \\frac{r}{100}\\right)^2 = 20000\\left(1 - \\frac{10}{100}\\right)^2 = 20000 \\times \\left(\\frac{9}{10}\\right)^2 = 20000 \\times \\frac{81}{100} = ₹16,200$.',
    tested_en: 'Depreciation calculation.',
    tested_ml: 'മൂല്യത്തകർച്ച കണക്കാക്കൽ.'
  }
);

/* ── Level 2: Written Practice Exercises (SCERT Textbook) ────────────────── */
QUESTIONS.push(
  {
    id: 'w.m8.5.1',
    sec: '8.5.1',
    concept: 'm8.5.1.interest-on-interest',
    title_en: 'Comparing Simple Interest and Compound Interest',
    title_ml: 'ലളിതപലിശയും കൂട്ടുപലിശയും താരതമ്യം ചെയ്യൽ',
    prompt_en: `<p>An amount of ₹15,000 is deposited for 2 years at 10% per annum.</p>
      <ol type="a">
        <li>Calculate the simple interest earned at the end of 2 years.</li>
        <li>Calculate the compound interest compounded annually at the end of 2 years.</li>
        <li>What is the difference between the compound interest and simple interest?</li>
      </ol>`,
    prompt_ml: `<p>₹15,000 രൂപ 10% വാർഷിക നിരക്കിൽ 2 വർഷത്തേക്ക് നിക്ഷേപിക്കുന്നു.</p>
      <ol type="a">
        <li>2 വർഷത്തെ ലളിതപലിശ കണക്കാക്കുക.</li>
        <li>വാർഷികമായി കണക്കാക്കുന്ന കൂട്ടുപലിശ എത്രയെന്ന് കണ്ടെത്തുക.</li>
        <li>കൂട്ടുപലിശയും ലളിതപലിശയും തമ്മിലുള്ള വ്യത്യാസം എത്ര?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Simple Interest:
          $$I = \\frac{P \\times n \\times r}{100} = \\frac{15000 \\times 2 \\times 10}{100} = \\mathbf{₹3,000}$$</li>
        <li>Compound Interest:
          $$A = P\\left(1 + \\frac{r}{100}\\right)^2 = 15000 \\times \\left(1 + \\frac{10}{100}\\right)^2 = 15000 \\times \\frac{121}{100} = ₹18,150$$
          $$CI = A - P = 18150 - 15000 = \\mathbf{₹3,150}$$</li>
        <li>Difference:
          $$\\text{Difference} = 3150 - 3000 = \\mathbf{₹150}$$
          (Note: ₹150 is exactly 10% of the first year's interest ₹1,500).</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ലളിതപലിശ:
          $$I = \\frac{P \\times n \\times r}{100} = \\frac{15000 \\times 2 \\times 10}{100} = \\mathbf{₹3,000}$$</li>
        <li>കൂട്ടുപലിശ:
          $$A = P\\left(1 + \\frac{r}{100}\\right)^2 = 15000 \\times \\left(1 + \\frac{10}{100}\\right)^2 = 15000 \\times \\frac{121}{100} = ₹18,150$$
          $$CI = A - P = 18150 - 15000 = \\mathbf{₹3,150}$$</li>
        <li>വ്യത്യാസം:
          $$\\text{വ്യത്യാസം} = 3150 - 3000 = \\mathbf{₹150}$$
          (ഒന്നാം വർഷത്തെ പലിശയായ ₹1,500-ന്റെ 10% പലിശയാണ് ഈ ₹150).</li>
      </ol>`
  },

  {
    id: 'w.m8.5.2',
    sec: '8.5.2',
    concept: 'm8.5.2.compound-interest-formula',
    title_en: 'Calculating Total Amount and Compound Interest',
    title_ml: 'തുകയും കൂട്ടുപലിശയും കാണൽ',
    prompt_en: `<p>Manu deposited ₹25,000 in a bank which pays 8% interest compounded annually.</p>
      <ol type="a">
        <li>What is the total amount Manu receives after 2 years?</li>
        <li>How much compound interest did he earn?</li>
      </ol>`,
    prompt_ml: `<p>മനു 8% വാർഷിക കൂട്ടുപലിശ നൽകുന്ന ഒരു ബാങ്കിൽ ₹25,000 രൂപ നിക്ഷേപിച്ചു.</p>
      <ol type="a">
        <li>2 വർഷത്തിനു ശേഷം മനുവിന് ലഭിക്കുന്ന ആകെ തുക എത്ര?</li>
        <li>മനുവിന് ലഭിച്ച കൂട്ടുപലിശ എത്ര രൂപയാണ്?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Total Amount:
          $$A = P\\left(1 + \\frac{r}{100}\\right)^n = 25000\\left(1 + \\frac{8}{100}\\right)^2 = 25000 \\times \\left(\\frac{27}{25}\\right)^2$$
          $$A = 25000 \\times \\frac{729}{625} = 40 \\times 729 = \\mathbf{₹29,160}$$</li>
        <li>Compound Interest:
          $$CI = A - P = 29160 - 25000 = \\mathbf{₹4,160}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ആകെ തുക:
          $$A = P\\left(1 + \\frac{r}{100}\\right)^n = 25000\\left(1 + \\frac{8}{100}\\right)^2 = 25000 \\times \\left(\\frac{27}{25}\\right)^2$$
          $$A = 25000 \\times \\frac{729}{625} = 40 \\times 729 = \\mathbf{₹29,160}$$</li>
        <li>കൂട്ടുപലിശ:
          $$CI = A - P = 29160 - 25000 = \\mathbf{₹4,160}$$</li>
      </ol>`
  },

  {
    id: 'w.m8.5.3',
    sec: '8.5.3',
    concept: 'm8.5.3.changing-compounding-periods',
    title_en: 'Deposit with Half-Yearly Compounding',
    title_ml: 'അർദ്ധവാർഷിക കൂട്ടുപലിശ കണക്കാക്കൽ',
    prompt_en: `<p>A sum of ₹20,000 is deposited for $1\\frac{1}{2}$ years at 10% per annum compounded half-yearly.</p>
      <ol type="a">
        <li>What is the rate of interest per half-year?</li>
        <li>How many compounding periods are there in $1\\frac{1}{2}$ years?</li>
        <li>Find the total amount and the compound interest at the end of $1\\frac{1}{2}$ years.</li>
      </ol>`,
    prompt_ml: `<p>₹20,000 രൂപ 10% വാർഷിക നിരക്കിൽ $1\\frac{1}{2}$ വർഷത്തേക്ക് അർദ്ധവാർഷിക കൂട്ടുപലിശ പ്രകാരം നിക്ഷേപിക്കുന്നു.</p>
      <ol type="a">
        <li>ഒരു അർദ്ധവർഷത്തെ പലിശനിരക്ക് എത്ര?</li>
        <li>$1\\frac{1}{2}$ വർഷത്തിൽ ആകെ എത്ര തവണകളുണ്ട്?</li>
        <li>കാലാവധി കഴിയുമ്പോൾ ലഭിക്കുന്ന ആകെ തുകയും കൂട്ടുപലിശയും കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Rate per half-year:
          $$\\frac{r}{2} = \\frac{10\\%}{2} = \\mathbf{5\\%}$$</li>
        <li>Number of periods:
          $$n = 1\\frac{1}{2} \\times 2 = \\mathbf{3\\text{ half-years}}$$</li>
        <li>Total amount and interest:
          $$A = P\\left(1 + \\frac{5}{100}\\right)^3 = 20000 \\times \\left(\\frac{21}{20}\\right)^3 = 20000 \\times \\frac{9261}{8000} = \\frac{5 \\times 9261}{2} = \\mathbf{₹23,152.50}$$
          $$CI = A - P = 23152.50 - 20000 = \\mathbf{₹3,152.50}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>അർദ്ധവർഷ നിരക്ക്:
          $$\\frac{r}{2} = \\frac{10\\%}{2} = \\mathbf{5\\%}$$</li>
        <li>തവണകളുടെ എണ്ണം:
          $$n = 1\\frac{1}{2} \\times 2 = \\mathbf{3\\text{ അർദ്ധവർഷങ്ങൾ}}$$</li>
        <li>ആകെ തുകയും പലിശയും:
          $$A = P\\left(1 + \\frac{5}{100}\\right)^3 = 20000 \\times \\left(\\frac{21}{20}\\right)^3 = 20000 \\times \\frac{9261}{8000} = \\frac{5 \\times 9261}{2} = \\mathbf{₹23,152.50}$$
          $$CI = A - P = 23152.50 - 20000 = \\mathbf{₹3,152.50}$$</li>
      </ol>`
  },

  {
    id: 'w.m8.5.4',
    sec: '8.5.4',
    concept: 'm8.5.4.growth-and-depreciation',
    title_en: 'Vehicle Depreciation & Population Growth',
    title_ml: 'വാഹനത്തിന്റെ മൂല്യത്തകർച്ചയും ജനസംഖ്യാ വർദ്ധനവും',
    prompt_en: `<ol type="a">
        <li>A car is purchased for ₹5,00,000. Its value depreciates at a rate of 10% per annum. What will its value be after 3 years?</li>
        <li>The population of a village is 8,000. If the population increases at 5% per annum, what will the population be after 2 years?</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>₹5,00,000 രൂപയ്ക്ക് വാങ്ങിയ ഒരു കാറിന്റെ വില പ്രതിവർഷം 10% നിരക്കിൽ കുറയുന്നു. 3 വർഷത്തിനു ശേഷം കാറിന്റെ വില എത്രയായിരിക്കും?</li>
        <li>ഒരു ഗ്രാമത്തിലെ ജനസംഖ്യ 8,000 ആണ്. ഇത് പ്രതിവർഷം 5% നിരക്കിൽ വർദ്ധിക്കുന്നുവെങ്കിൽ 2 വർഷത്തിനു ശേഷം ജനസംഖ്യ എത്രയായിരിക്കും?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Depreciation of the car:
          $$P_3 = P_0\\left(1 - \\frac{r}{100}\\right)^3 = 500000\\left(1 - \\frac{10}{100}\\right)^3 = 500000 \\times \\left(\\frac{9}{10}\\right)^3$$
          $$P_3 = 500000 \\times \\frac{729}{1000} = 500 \\times 729 = \\mathbf{₹3,64,500}$$</li>
        <li>Population growth:
          $$P_2 = P_0\\left(1 + \\frac{r}{100}\\right)^2 = 8000\\left(1 + \\frac{5}{100}\\right)^2 = 8000 \\times \\left(\\frac{21}{20}\\right)^2$$
          $$P_2 = 8000 \\times \\frac{441}{400} = 20 \\times 441 = \\mathbf{8,820\\text{ people}}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>കാറിന്റെ മൂല്യത്തകർച്ച:
          $$P_3 = P_0\\left(1 - \\frac{r}{100}\\right)^3 = 500000\\left(1 - \\frac{10}{100}\\right)^3 = 500000 \\times \\left(\\frac{9}{10}\\right)^3$$
          $$P_3 = 500000 \\times \\frac{729}{1000} = 500 \\times 729 = \\mathbf{₹3,64,500}$$</li>
        <li>ജനസംഖ്യാ വർദ്ധനവ്:
          $$P_2 = P_0\\left(1 + \\frac{r}{100}\\right)^2 = 8000\\left(1 + \\frac{5}{100}\\right)^2 = 8000 \\times \\left(\\frac{21}{20}\\right)^2$$
          $$P_2 = 8000 \\times \\frac{441}{400} = 20 \\times 441 = \\mathbf{8,820\\text{ പേർ}}$$</li>
      </ol>`
  }
);
