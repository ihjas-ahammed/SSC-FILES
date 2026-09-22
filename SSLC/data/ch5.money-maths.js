/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 5: Money Maths (പണമിടപാടുകളിലെ കണക്ക്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.5.1.interest-on-interest',
    sec: '8.5.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Simple Interest vs Interest on Interest',
    title_ml: 'ലളിതപലിശയും കൂട്ടുപലിശയും',
    oneLine_en: 'In simple interest, the principal remains constant; in compound interest, interest earned is added to the principal for the next period.',
    oneLine_ml: 'ലളിതപലിശയിൽ മുതലിന് മാറ്റമില്ല; കൂട്ടുപലിശയിൽ ഓരോ വർഷത്തെയും പലിശ മുതലിനോട് ചേർത്ത് അടുത്ത വർഷത്തെ മുതലാക്കുന്നു.',
    statement_en: `<p>When money is deposited or borrowed, the additional money paid for its use is called <b>interest</b>.</p>
      <ul>
        <li><b>Simple Interest:</b> The interest is calculated on the original principal ($P$) throughout the loan period:
          $$I = \\frac{P \\times n \\times r}{100}, \\quad A = P + I$$
          Here the principal remains the same every year.</li>
        <li><b>Compound Interest (Interest on Interest):</b> At the end of each year (or compounding period), the interest earned is added to the principal. The next year's interest is computed on this combined amount:
          $$P_1 = P, \\quad P_2 = P_1 + I_1, \\quad P_3 = P_2 + I_2, \\quad \\dots$$</li>
      </ul>
      <p><b>Worked Comparison:</b> ₹10,000 deposited for 2 years at 10% per annum:</p>
      <table style="width: 100%; border-collapse: collapse; margin: 8px 0;">
        <tr><th style="border: 1px solid var(--border); padding: 6px;">Year</th><th style="border: 1px solid var(--border); padding: 6px;">Simple Interest</th><th style="border: 1px solid var(--border); padding: 6px;">Compound Interest</th></tr>
        <tr><td style="border: 1px solid var(--border); padding: 6px;">Year 1</td><td style="border: 1px solid var(--border); padding: 6px;">Interest = ₹1,000, Total = ₹11,000</td><td style="border: 1px solid var(--border); padding: 6px;">Interest = ₹1,000, Total = ₹11,000</td></tr>
        <tr><td style="border: 1px solid var(--border); padding: 6px;">Year 2</td><td style="border: 1px solid var(--border); padding: 6px;">Interest = ₹1,000, Total = ₹12,000</td><td style="border: 1px solid var(--border); padding: 6px;">Interest = ₹1,100, Total = ₹12,100</td></tr>
      </table>
      <p>The extra ₹100 earned in compound interest is exactly the 10% interest on the first year's interest of ₹1,000!</p>`,
    statement_ml: `<p>പണം നിക്ഷേപിക്കുമ്പോഴോ കടം വാങ്ങുമ്പോഴോ അധികമായി നൽകുന്ന തുകയാണ് <b>പലിശ</b>.</p>
      <ul>
        <li><b>ലളിതപലിശ:</b> എല്ലാ വർഷവും നിക്ഷേപിച്ച മുതലിന് ($P$) മേൽ മാത്രം പലിശ കണക്കാക്കുന്നു:
          $$I = \\frac{P \\times n \\times r}{100}, \\quad A = P + I$$
          ഇവിടെ മുതൽ എല്ലാ വർഷവും ഒന്നുതന്നെയായിരിക്കും.</li>
        <li><b>കൂട്ടുപലിശ (പലിശയുടെ പലിശ):</b> ഓരോ വർഷാവസാനവും ലഭിക്കുന്ന പലിശ മുതലിനോട് ചേർത്ത് അടുത്ത വർഷത്തെ മുതലാക്കുന്നു. അടുത്ത വർഷത്തെ പലിശ ഈ പുതിയ തുകയ്ക്കാണ് കണക്കാക്കുന്നത്:
          $$P_1 = P, \\quad P_2 = P_1 + I_1, \\quad P_3 = P_2 + I_2, \\quad \\dots$$</li>
      </ul>
      <p><b>താരതമ്യം:</b> 10% വാർഷിക പലിശനിരക്കിൽ ₹10,000 നിക്ഷേപിക്കുന്നു:</p>
      <table style="width: 100%; border-collapse: collapse; margin: 8px 0;">
        <tr><th style="border: 1px solid var(--border); padding: 6px;">വർഷം</th><th style="border: 1px solid var(--border); padding: 6px;">ലളിതപലിശ</th><th style="border: 1px solid var(--border); padding: 6px;">കൂട്ടുപലിശ</th></tr>
        <tr><td style="border: 1px solid var(--border); padding: 6px;">വർഷം 1</td><td style="border: 1px solid var(--border); padding: 6px;">പലിശ = ₹1,000, തുക = ₹11,000</td><td style="border: 1px solid var(--border); padding: 6px;">പലിശ = ₹1,000, തുക = ₹11,000</td></tr>
        <tr><td style="border: 1px solid var(--border); padding: 6px;">വർഷം 2</td><td style="border: 1px solid var(--border); padding: 6px;">പലിശ = ₹1,000, തുക = ₹12,000</td><td style="border: 1px solid var(--border); padding: 6px;">പലിശ = ₹1,100, തുക = ₹12,100</td></tr>
      </table>
      <p>കൂട്ടുപലിശയിൽ അധികമായി ലഭിച്ച ₹100 എന്നത് ഒന്നാം വർഷത്തെ പലിശയായ ₹1,000-ന്റെ 10% പലിശയാണ്!</p>`,
    intuition_en: `<p>In the first year, simple interest and compound interest are always identical. The difference begins in the second year, when the first year's interest starts earning its own interest.</p>`,
    intuition_ml: `<p>ഒന്നാം വർഷം ലളിതപലിശയും കൂട്ടുപലിശയും തുല്യമായിരിക്കും. രണ്ടാം വർഷം മുതലാണ് പലിശയ്ക്കും പലിശ ലഭിച്ചുതുടങ്ങുന്നത്.</p>`,
    needs: ['s.multiplication', 's.fractions', 's.decimals'],
    traps_en: [
      'Simple interest and compound interest are the same for the first year (when compounded annually).',
      'Do not calculate simple interest when the problem mentions compound interest or annual compounding.'
    ],
    traps_ml: [
      'വാർഷിക കൂട്ടുപലിശയിൽ ഒന്നാം വർഷത്തെ പലിശ ലളിതപലിശയ്ക്ക് തുല്യമായിരിക്കും.',
      'കൂട്ടുപലിശ എന്ന് പറഞ്ഞിരിക്കുന്ന കണക്കുകളിൽ ലളിതപലിശയുടെ സൂത്രവാക്യം മാത്രം ഉപയോഗിച്ച് ഉത്തരം കാണരുത്.'
    ],
    cards_en: [
      { q: 'What is the main difference between simple interest and compound interest?', a: 'In simple interest, the principal never changes; in compound interest, interest is added to the principal for the next year.', kind: 'state' },
      { q: 'For ₹5000 at 8% per annum, what is the interest in the first year?', a: '$\\frac{5000 \\times 1 \\times 8}{100} = ₹400$.', kind: 'apply' },
      { q: 'In annual compounding, is first-year simple interest different from compound interest?', a: 'No, they are exactly the same in the first year.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ലളിതപലിശയും കൂട്ടുപലിശയും തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എന്താണ്?', a: 'ലളിതപലിശയിൽ മുതൽ മാറുന്നില്ല; കൂട്ടുപലിശയിൽ ഓരോ വർഷത്തെയും പലിശ മുതലിനോട് ചേർക്കപ്പെടുന്നു.', kind: 'state' },
      { q: '₹5000-ന് 8% നിരക്കിൽ ഒന്നാം വർഷത്തെ പലിശ എത്ര?', a: '$\\frac{5000 \\times 1 \\times 8}{100} = ₹400$.', kind: 'apply' },
      { q: 'വാർഷിക കൂട്ടുപലിശയിൽ ഒന്നാം വർഷത്തെ ലളിതപലിശയും കൂട്ടുപലിശയും വ്യത്യസ്തമാണോ?', a: 'അല്ല, ഒന്നാം വർഷം രണ്ടും തുല്യമാണ്.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.5.2.compound-interest-formula',
    sec: '8.5.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'The Compound Interest Formula',
    title_ml: 'കൂട്ടുപലിശ സൂത്രവാക്യം',
    oneLine_en: 'Amount after n years with annual compounding: A = P(1 + r/100)ⁿ, and CI = A - P.',
    oneLine_ml: 'വാർഷിക കൂട്ടുപലിശയിൽ n വർഷത്തിനു ശേഷമുള്ള തുക: A = P(1 + r/100)ⁿ, കൂട്ടുപലിശ = A - P.',
    statement_en: `<p>If a principal $P$ is deposited at an annual rate of $r\%$ compounded annually:</p>
      <ul>
        <li><b>Amount after 1 year:</b> $A_1 = P\\left(1 + \\frac{r}{100}\\right)$</li>
        <li><b>Amount after 2 years:</b> $A_2 = A_1\\left(1 + \\frac{r}{100}\\right) = P\\left(1 + \\frac{r}{100}\\right)^2$</li>
        <li><b>Amount after $n$ years:</b> $$\\mathbf{A = P\\left(1 + \\frac{r}{100}\\right)^n}$$</li>
      </ul>
      <p>The total compound interest earned is:</p>
      $$\\mathbf{CI = A - P = P\\left[\\left(1 + \\frac{r}{100}\\right)^n - 1\\right]}$$
      <p><b>Example:</b> Find the amount and compound interest for ₹8,000 for 2 years at 5% per annum.<br>
      $$A = 8000\\left(1 + \\frac{5}{100}\\right)^2 = 8000 \\times \\left(\\frac{21}{20}\\right)^2 = 8000 \\times \\frac{441}{400} = ₹8,820$$
      $$CI = 8820 - 8000 = ₹820.$$</p>`,
    statement_ml: `<p>$P$ രൂപ മുതൽ $r\\%$ വാർഷിക കൂട്ടുപലിശ നിരക്കിൽ നിക്ഷേപിച്ചാൽ:</p>
      <ul>
        <li><b>1 വർഷത്തിനു ശേഷമുള്ള തുക:</b> $A_1 = P\\left(1 + \\frac{r}{100}\\right)$</li>
        <li><b>2 വർഷത്തിനു ശേഷമുള്ള തുക:</b> $A_2 = A_1\\left(1 + \\frac{r}{100}\\right) = P\\left(1 + \\frac{r}{100}\\right)^2$</li>
        <li><b>$n$ വർഷത്തിനു ശേഷമുള്ള ആകെ തുക:</b> $$\\mathbf{A = P\\left(1 + \\frac{r}{100}\\right)^n}$$</li>
      </ul>
      <p>ആകെ ലഭിക്കുന്ന കൂട്ടുപലിശ:</p>
      $$\\mathbf{CI = A - P = P\\left[\\left(1 + \\frac{r}{100}\\right)^n - 1\\right]}$$
      <p><b>ഉദാഹരണം:</b> ₹8,000-ന് 5% വാർഷിക കൂട്ടുപലിശ നിരക്കിൽ 2 വർഷത്തിനു ശേഷമുള്ള തുകയും പലിശയും കാണുക.<br>
      $$A = 8000\\left(1 + \\frac{5}{100}\\right)^2 = 8000 \\times \\left(\\frac{21}{20}\\right)^2 = 8000 \\times \\frac{441}{400} = ₹8,820$$
      $$CI = 8820 - 8000 = ₹820.$$</p>`,
    intuition_en: `<p>Each year, the total amount is scaled by the growth factor $(1 + r/100)$. Over $n$ years, this multiplication happens $n$ times, yielding $(1 + r/100)^n$.</p>`,
    intuition_ml: `<p>ഓരോ വർഷവും തുക $(1 + r/100)$ എന്ന ഗുണകത്താൽ വർദ്ധിക്കുന്നു. $n$ വർഷം കൊണ്ട് ഇത് $n$ തവണ ഗുണിക്കപ്പെട്ട് $(1 + r/100)^n$ ആകുന്നു.</p>`,
    proof: {
      idea_en: 'Each year multiplies the previous year’s amount by (1 + r/100).',
      idea_ml: 'ഓരോ വർഷവും തൊട്ടുമുമ്പത്തെ വർഷത്തെ തുകയെ (1 + r/100) കൊണ്ട് ഗുണിക്കുന്നു.',
      why_en: 'Factoring out the principal at each stage shows repeated multiplication.',
      why_ml: 'ഓരോ ഘട്ടത്തിലും തുകയെ പൊതുവായി എടുത്താൽ ആവർത്തന ഗുണനം വ്യക്തമാകുന്നു.',
      rungs_en: [
        { why_en: 'Year 1: Interest = P(r/100). Total amount A₁ = P + P(r/100) = P(1 + r/100).', m: 'A_1 = P\\left(1 + \\frac{r}{100}\\right)' },
        { why_en: 'Year 2: Principal is A₁. Amount A₂ = A₁(1 + r/100) = P(1 + r/100)².', m: 'A_2 = P\\left(1 + \\frac{r}{100}\\right)^2' },
        { why_en: 'By induction, after n years the amount is multiplied by (1 + r/100) n times.', m: 'A = P\\left(1 + \\frac{r}{100}\\right)^n' },
        { why_en: 'Compound interest is the total amount minus the starting principal.', m: 'CI = A - P' }
      ],
      rungs_ml: [
        { why_ml: 'വർഷം 1: പലിശ = P(r/100). തുക A₁ = P + P(r/100) = P(1 + r/100).', m: 'A_1 = P\\left(1 + \\frac{r}{100}\\right)' },
        { why_ml: 'വർഷം 2: മുതൽ A₁ ആണ്. തുക A₂ = A₁(1 + r/100) = P(1 + r/100)².', m: 'A_2 = P\\left(1 + \\frac{r}{100}\\right)^2' },
        { why_ml: 'ഇതേ രീതി തുടർന്നാൽ n വർഷത്തിന് ശേഷം തുക (1 + r/100) കൊണ്ട് n തവണ ഗുണിക്കപ്പെടുന്നു.', m: 'A = P\\left(1 + \\frac{r}{100}\\right)^n' },
        { why_ml: 'ആകെ കൂട്ടുപലിശ എന്നത് ആകെ തുകയിൽ നിന്നും ആദ്യത്തെ മുതൽ കുറയ്ക്കുമ്പോൾ ലഭിക്കുന്നു.', m: 'CI = A - P' }
      ]
    },
    needs: ['m8.5.1.interest-on-interest', 's.powers-exponents'],
    traps_en: [
      'The formula A = P(1 + r/100)ⁿ gives the TOTAL AMOUNT, not the interest alone. Subtract P to get CI.',
      'Simplify (1 + r/100) into a single fraction before raising to the power (e.g. 1 + 5/100 = 105/100 = 21/20).'
    ],
    traps_ml: [
      'A = P(1 + r/100)ⁿ എന്ന സൂത്രവാക്യം തരുന്നത് ആകെ തുകയാണ്, പലിശ മാത്രമല്ല. പലിശ കാണാൻ മുതൽ (P) കുറയ്ക്കണം.',
      '(1 + r/100) എന്നതിനെ ലഘൂകരിച്ച് ഒരു ഭിന്നസംഖ്യയാക്കിയ ശേഷം കൃതി കാണുന്നത് ഗുണനം എളുപ്പമാക്കും (ഉദാ: 1 + 5/100 = 21/20).'
    ],
    cards_en: [
      { q: 'What is the formula for the total amount in compound interest compounded annually?', a: '$A = P\\left(1 + \\frac{r}{100}\\right)^n$.', kind: 'state' },
      { q: 'How do you find the compound interest from the total amount?', a: '$CI = A - P$.', kind: 'state' },
      { q: 'If P = ₹1000, r = 10%, n = 2 years, what is the amount A?', a: '$1000 \\times \\left(\\frac{11}{10}\\right)^2 = 1000 \\times \\frac{121}{100} = ₹1210$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'വാർഷിക കൂട്ടുപലിശയിൽ ആകെ തുക കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: '$A = P\\left(1 + \\frac{r}{100}\\right)^n$.', kind: 'state' },
      { q: 'ആകെ തുകയിൽ നിന്ന് കൂട്ടുപലിശ എങ്ങനെ കണ്ടെത്താം?', a: '$CI = A - P$.', kind: 'state' },
      { q: 'P = ₹1000, r = 10%, n = 2 വർഷം ആയാൽ ആകെ തുക എത്ര?', a: '$1000 \\times \\left(\\frac{11}{10}\\right)^2 = 1000 \\times \\frac{121}{100} = ₹1210$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.5.3.changing-compounding-periods',
    sec: '8.5.3',
    kind: 'technique',
    tier: 'core',
    title_en: 'Half-Yearly & Quarterly Compounding',
    title_ml: 'അർദ്ധവാർഷിക, ത്രൈമാസിക കൂട്ടുപലിശ',
    oneLine_en: 'When compounded half-yearly, rate is r/2 and periods 2n; when quarterly, rate is r/4 and periods 4n.',
    oneLine_ml: 'അർദ്ധവാർഷിക കൂട്ടുപലിശയിൽ നിരക്ക് r/2 ഉം തവണകൾ 2n ഉം ആണ്; ത്രൈമാസികത്തിൽ നിരക്ക് r/4 ഉം തവണകൾ 4n ഉം ആണ്.',
    statement_en: `<p>In many banks and financial institutions, interest is added to the principal more frequently than once a year.</p>
      <ul>
        <li><b>Compounded Half-Yearly (every 6 months):</b>
          <p>Interest is calculated every 6 months. In $n$ years, there are $2n$ half-years, and the rate for each half-year is $\\frac{r}{2}\\%$:</p>
          $$\\mathbf{A = P\\left(1 + \\frac{r/2}{100}\\right)^{2n} = P\\left(1 + \\frac{r}{200}\\right)^{2n}}$$</li>
        <li><b>Compounded Quarterly (every 3 months):</b>
          <p>Interest is calculated every 3 months. In $n$ years, there are $4n$ quarters, and the rate for each quarter is $\\frac{r}{4}\\%$:</p>
          $$\\mathbf{A = P\\left(1 + \\frac{r/4}{100}\\right)^{4n} = P\\left(1 + \\frac{r}{400}\\right)^{4n}}$$</li>
      </ul>
      <p><b>Key Principle:</b> The more frequently interest is compounded, the greater the final amount, because interest starts earning interest sooner!</p>`,
    statement_ml: `<p>ബാങ്കുകളിലും ധനകാര്യ സ്ഥാപനങ്ങളിലും പലപ്പോഴും വർഷത്തിൽ ഒന്നിലധികം തവണ പലിശ കണക്കാക്കി മുതലിനോട് ചേർക്കാറുണ്ട്.</p>
      <ul>
        <li><b>അർദ്ധവാർഷിക കൂട്ടുപലിശ (ഓരോ 6 മാസത്തിലും):</b>
          <p>ഓരോ 6 മാസത്തിലും പലിശ കണക്കാക്കുന്നു. $n$ വർഷങ്ങളിൽ $2n$ അർദ്ധവർഷങ്ങളുണ്ടാകും. അർദ്ധവർഷ നിരക്ക് $\\frac{r}{2}\\%$ ആണ്:</p>
          $$\\mathbf{A = P\\left(1 + \\frac{r/2}{100}\\right)^{2n} = P\\left(1 + \\frac{r}{200}\\right)^{2n}}$$</li>
        <li><b>ത്രൈമാസിക കൂട്ടുപലിശ (ഓരോ 3 മാസത്തിലും):</b>
          <p>ഓരോ 3 മാസത്തിലും പലിശ കണക്കാക്കുന്നു. $n$ വർഷങ്ങളിൽ $4n$ പാദവർഷങ്ങളുണ്ടാകും. പാദവർഷ നിരക്ക് $\\frac{r}{4}\\%$ ആണ്:</p>
          $$\\mathbf{A = P\\left(1 + \\frac{r/4}{100}\\right)^{4n} = P\\left(1 + \\frac{r}{400}\\right)^{4n}}$$</li>
      </ul>
      <p><b>പ്രധാന തത്വം:</b> പലിശ കണക്കാക്കുന്ന തവണകളുടെ എണ്ണം കൂടുന്തോറും പലിശ നേരത്തെ മുതലായി മാറുന്നതിനാൽ ആകെ ലഭിക്കുന്ന തുക വർദ്ധിക്കും!</p>`,
    intuition_en: `<p>If the annual rate is 10%, a half-year uses 5%. In 1 year, there are two 6-month periods, so the power is 2: $A = P(1 + 5/100)^2 = P(1.05)^2 = P(1.1025)$, giving 10.25% effective return instead of 10%!</p>`,
    intuition_ml: `<p>വാർഷിക നിരക്ക് 10% ആണെങ്കിൽ 6 മാസത്തെ നിരക്ക് 5% ആണ്. 1 വർഷത്തിൽ രണ്ട് തവണ പലിശ ചേർക്കുന്നതിനാൽ: $A = P(1.05)^2 = 1.1025 P$. അതായത് 10%-ന് പകരം 10.25% പലിശ ലഭിക്കുന്നു!</p>`,
    needs: ['m8.5.2.compound-interest-formula'],
    traps_en: [
      'Do not forget to halve the rate AND double the number of years when compounding half-yearly.',
      'For 1 year compounded half-yearly, n becomes 2 periods, not 1.'
    ],
    traps_ml: [
      'അർദ്ധവാർഷിക കൂട്ടുപലിശയിൽ നിരക്കിനെ പകുതിയാക്കാനും (r/2) വർഷങ്ങളുടെ എണ്ണത്തെ ഇരട്ടിയാക്കാനും (2n) മറക്കരുത്.',
      '1 വർഷത്തെ അർദ്ധവാർഷിക പലിശ കാണുമ്പോൾ തവണകളുടെ എണ്ണം 2 ആണ്, 1 അല്ല.'
    ],
    cards_en: [
      { q: 'In half-yearly compounding, what happens to the rate and the time period?', a: 'Rate is halved ($\\frac{r}{2}\\%$) and time in years is doubled ($2n$).', kind: 'state' },
      { q: 'What is the formula for amount compounded half-yearly?', a: '$A = P\\left(1 + \\frac{r}{200}\\right)^{2n}$.', kind: 'state' },
      { q: 'Does half-yearly compounding give more or less interest than annual compounding?', a: 'More interest, because interest is added sooner.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'അർദ്ധവാർഷിക കൂട്ടുപലിശയിൽ പലിശനിരക്കിനും വർഷത്തിനും എന്ത് മാറ്റം വരുന്നു?', a: 'നിരക്ക് പകുതിയാകുന്നു ($\\frac{r}{2}\\%$), വർഷങ്ങളുടെ എണ്ണം ഇരട്ടിയാകുന്നു ($2n$).', kind: 'state' },
      { q: 'അർദ്ധവാർഷിക കൂട്ടുപലിശയിലെ തുക കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: '$A = P\\left(1 + \\frac{r}{200}\\right)^{2n}$.', kind: 'state' },
      { q: 'വാർഷിക പലിശയെക്കാൾ കൂടുതൽ തുക അർദ്ധവാർഷിക പലിശയിൽ ലഭിക്കുമോ?', a: 'അതെ, കൂടുതൽ തുക ലഭിക്കും, കാരണം പലിശ നേരത്തെ മുതലിനോട് ചേരുന്നു.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.5.4.growth-and-depreciation',
    sec: '8.5.4',
    kind: 'technique',
    tier: 'core',
    title_en: 'Population Growth & Depreciation',
    title_ml: 'ജനസംഖ്യാ വർദ്ധനവും മൂല്യത്തകർച്ചയും',
    oneLine_en: 'Growth uses addition: A = P(1 + r/100)ⁿ; depreciation uses subtraction: A = P(1 - r/100)ⁿ.',
    oneLine_ml: 'വർദ്ധനവിന് സങ്കലനം ഉപയോഗിക്കുന്നു: A = P(1 + r/100)ⁿ; മൂല്യത്തകർച്ചയ്ക്ക് വ്യവകലനം: A = P(1 - r/100)ⁿ.',
    statement_en: `<p>The mathematical principle of compound interest applies to many real-world situations where quantities change by a fixed percentage over regular intervals:</p>
      <ul>
        <li><b>Growth (Population, Bacteria, Production):</b>
          <p>When a quantity increases at a steady percentage rate $r\%$ per year:</p>
          $$\\mathbf{P_n = P_0\\left(1 + \\frac{r}{100}\\right)^n}$$
          where $P_0$ is the initial quantity and $P_n$ is the quantity after $n$ years.</li>
        <li><b>Depreciation (Vehicles, Machinery, Equipment Value):</b>
          <p>With use and time, the value of machines and vehicles decreases at a steady rate $r\%$ per year (depreciation):</p>
          $$\\mathbf{P_n = P_0\\left(1 - \\frac{r}{100}\\right)^n}$$</li>
      </ul>
      <p><b>Example (Depreciation):</b> A motorcycle bought for ₹60,000 depreciates at 10% per year. What is its value after 2 years?<br>
      $$P_2 = 60000\\left(1 - \\frac{10}{100}\\right)^2 = 60000 \\times \\left(\\frac{9}{10}\\right)^2 = 60000 \\times \\frac{81}{100} = ₹48,600.$$</p>`,
    statement_ml: `<p>ഒരു നിശ്ചിത ശതമാനം നിരക്കിൽ തുടർച്ചയായി കൂടുകയോ കുറയുകയോ ചെയ്യുന്ന പ്രായോഗിക സന്ദർഭങ്ങളിൽ കൂട്ടുപലിശ തത്വം ഉപയോഗിക്കാം:</p>
      <ul>
        <li><b>വർദ്ധനവ് (ജനസംഖ്യ, ബാക്ടീരിയകൾ, ഉൽപ്പാദനം):</b>
          <p>ഒരു അളവ് പ്രതിവർഷം $r\\%$ നിരക്കിൽ വർദ്ധിക്കുമ്പോൾ:</p>
          $$\\mathbf{P_n = P_0\\left(1 + \\frac{r}{100}\\right)^n}$$
          ഇവിടെ $P_0$ എന്നത് ആദ്യത്തെ അളവും $P_n$ എന്നത് $n$ വർഷങ്ങൾക്ക് ശേഷമുള്ള അളവുമാണ്.</li>
        <li><b>മൂല്യത്തകർച്ച (വാഹനങ്ങൾ, യന്ത്രങ്ങൾ, ഉപകരണങ്ങൾ):</b>
          <p>ഉപയോഗം മൂലവും പഴക്കം മൂലവും യന്ത്രങ്ങളുടെയും വാഹനങ്ങളുടെയും വില പ്രതിവർഷം $r\\%$ നിരക്കിൽ കുറയുന്നു (മൂല്യത്തകർച്ച):</p>
          $$\\mathbf{P_n = P_0\\left(1 - \\frac{r}{100}\\right)^n}$$</li>
      </ul>
      <p><b>ഉദാഹരണം (മൂല്യത്തകർച്ച):</b> ₹60,000-ന് വാങ്ങിയ ഒരു ബൈക്കിന് പ്രതിവർഷം 10% മൂല്യത്തകർച്ചയുണ്ടാകുന്നു. 2 വർഷത്തിനു ശേഷം അതിന്റെ വില എത്ര?<br>
      $$P_2 = 60000\\left(1 - \\frac{10}{100}\\right)^2 = 60000 \\times \\left(\\frac{9}{10}\\right)^2 = 60000 \\times \\frac{81}{100} = ₹48,600.$$</p>`,
    intuition_en: `<p>Growth multiplies by a number greater than 1 (like 1.10 for +10%). Depreciation multiplies by a number less than 1 (like 0.90 for -10%). The structure of repeated percentage scaling is identical.</p>`,
    intuition_ml: `<p>വർദ്ധനവിൽ 1-ൽ കൂടിയ സംഖ്യകൊണ്ട് ഗുണിക്കുന്നു (ഉദാ: +10% ആകുമ്പോൾ 1.10). മൂല്യത്തകർച്ചയിൽ 1-ൽ കുറഞ്ഞ സംഖ്യകൊണ്ട് ഗുണിക്കുന്നു (ഉദാ: -10% ആകുമ്പോൾ 0.90). അടിസ്ഥാന തത്വം ഒന്നുതന്നെയാണ്.</p>`,
    needs: ['m8.5.2.compound-interest-formula'],
    traps_en: [
      'In depreciation, use MINUS: (1 - r/100), not plus.',
      'Read carefully whether the question gives the present value and asks for future value, or gives the future value and asks for the past/initial value.'
    ],
    traps_ml: [
      'മൂല്യത്തകർച്ചയിൽ സങ്കലനമല്ല, കുറയ്ക്കലാണ്: (1 - r/100).',
      'ചോദ്യത്തിൽ തന്നിരിക്കുന്നത് ഇപ്പോഴത്തെ വിലയാണോ അതോ മുൻപത്തെ വിലയാണോ എന്ന് ശ്രദ്ധിക്കുക.'
    ],
    cards_en: [
      { q: 'What is the formula for the value of an item depreciating at r% per year for n years?', a: '$P_n = P_0\\left(1 - \\frac{r}{100}\\right)^n$.', kind: 'state' },
      { q: 'What is the formula for population increasing at r% per year for n years?', a: '$P_n = P_0\\left(1 + \\frac{r}{100}\\right)^n$.', kind: 'state' },
      { q: 'A machine worth ₹10,000 depreciates at 10% for 1 year. What is its value?', a: '$10000 \\times (1 - 0.10) = ₹9000$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'പ്രതിവർഷം r% മൂല്യത്തകർച്ചയുള്ള ഒരു സാധനത്തിന്റെ n വർഷങ്ങൾക്ക് ശേഷമുള്ള വില കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: '$P_n = P_0\\left(1 - \\frac{r}{100}\\right)^n$.', kind: 'state' },
      { q: 'പ്രതിവർഷം r% നിരക്കിൽ വർദ്ധിക്കുന്ന ജനസംഖ്യ n വർഷങ്ങൾക്ക് ശേഷം കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: '$P_n = P_0\\left(1 + \\frac{r}{100}\\right)^n$.', kind: 'state' },
      { q: '₹10,000 വിലയുള്ള ഒരു യന്ത്രത്തിന് 1 വർഷം കൊണ്ട് 10% മൂല്യത്തകർച്ചയുണ്ടായാൽ വില എത്ര?', a: '$10000 \\times (1 - 0.10) = ₹9000$.', kind: 'apply' }
    ]
  }
);
