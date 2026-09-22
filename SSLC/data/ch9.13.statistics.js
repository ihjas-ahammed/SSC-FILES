/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 13: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.13.1.arithmetic-mean-and-deviations',
    sec: '9.13.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Arithmetic Mean and Balance of Deviations',
    title_ml: 'സമാന്തര ശരാശരിയും വ്യതിയാന സന്തുലനവും',
    oneLine_en: 'The arithmetic mean is the equal distribution of the total sum among all data values; the sum of deviations of all values from the mean is strictly zero (total excess = total deficit).',
    oneLine_ml: 'ആകെ തുകയെ നിരീക്ഷണങ്ങളുടെ എണ്ണം കൊണ്ട് ഭാഗിച്ചാൽ കിട്ടുന്ന സമതുലിത വിലയാണ് സമാന്തര ശരാശരി; ശരാശരിയിൽ നിന്നുള്ള വ്യതിയാനങ്ങളുടെ ആകെ തുക പൂജ്യമായിരിക്കും (കൂടുതലുള്ളവയുടെ തുക = കുറവുള്ളവയുടെ തുക).',
    statement_en: `<p><b>Definition of Arithmetic Mean:</b></p>
      <p>For a collection of $n$ numerical observations $x_1, x_2, \\dots, x_n$, their arithmetic mean (or average $\\bar{x}$) is defined as:</p>
      $$\\mathbf{\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^n x_i}{n}}$$
      <p><b>Excess and Deficit (Balance of Deviations):</b></p>
      <p>For each data value $x_i$, the difference $d_i = x_i - \\bar{x}$ is its <b>deviation</b> from the mean:</p>
      <ul>
        <li>If $x_i > \\bar{x}$, $x_i - \\bar{x}$ is the <b>excess</b> (positive deviation).</li>
        <li>If $x_i < \\bar{x}$, $\\bar{x} - x_i$ is the <b>deficit</b> (negative deviation).</li>
      </ul>
      <p><b>Fundamental Balancing Property:</b></p>
      $$\\mathbf{\\sum_{i=1}^n (x_i - \\bar{x}) = 0 \\quad \\iff \\quad \\text{Total Excess} = \\text{Total Deficit}}$$
      <p>This shows that the arithmetic mean functions as the exact physical center of gravity (fulcrum) of the distribution.</p>`,
    statement_ml: `<p><b>സമാന്തര ശരാശരിയുടെ നിർവ്വചനം:</b></p>
      <p>$x_1, x_2, \\dots, x_n$ എന്നീ $n$ വിവരങ്ങളുടെ സമാന്തര ശരാശരി $\\bar{x}$ കാണുന്നത്:</p>
      $$\\mathbf{\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum x_i}{n}}$$
      <p><b>കൂടുതലും കുറവും (വ്യതിയാന സന്തുലനം):</b></p>
      <p>ഓരോ സംഖ്യയും ശരാശരിയിൽ നിന്ന് എത്ര മാറിയിരിക്കുന്നു എന്ന വ്യത്യാസത്തെ ($x_i - \\bar{x}$) വ്യതിയാനം എന്ന് വിളിക്കുന്നു:</p>
      <ul>
        <li>$x_i > \\bar{x}$ ആകുമ്പോൾ, $x_i - \\bar{x}$ എന്നത് <b>കൂടുതൽ</b> ഉള്ള അളവാണ്.</li>
        <li>$x_i < \\bar{x}$ ആകുമ്പോൾ, $\\bar{x} - x_i$ എന്നത് <b>കുറവ്</b> ഉള്ള അളവാണ്.</li>
      </ul>
      <p><b>അടിസ്ഥാന സന്തുലന നിയമം:</b></p>
      $$\\mathbf{\\sum (x_i - \\bar{x}) = 0 \\quad \\iff \\quad \\text{ആകെ കൂടുതൽ} = \\text{ആകെ കുറവ്}}$$
      <p>ഇത് വ്യക്തമാക്കുന്നത് സമാന്തര ശരാശരി എന്നത് ഒരു തുലാസിന്റെ കേന്ദ്രം പോലെ വിവരങ്ങളുടെ കൃത്യം സമതുലിത ബിന്ദുവാണെന്നാണ്.</p>`,
    intuition_en: `<p>A see-saw with weights placed at different positions: the see-saw balances horizontally without tilting only when placed at the arithmetic mean.</p>`,
    intuition_ml: `<p>ഒരു തുലാസിന്റെ തട്ടിൽ പല തൂക്കങ്ങൾ വെക്കുമ്പോൾ, അത് ഒരു വശത്തേക്കും ചരിയാതെ കൃത്യം തിരശ്ചീനമായി നിൽക്കുന്ന സന്തുലന ബിന്ദുവാണ് ശരാശരി.</p>`,
    proof: {
      idea_en: 'Distribute the sum: sum(x_i - bar(x)) = sum(x_i) - n * bar(x) = n * bar(x) - n * bar(x) = 0.',
      idea_ml: 'വ്യതിയാനങ്ങളുടെ തുക കാണുമ്പോൾ $\\sum x_i - n\\bar{x} = n\\bar{x} - n\\bar{x} = 0$ എന്ന് തെളിയുന്നു.',
      why_en: 'Linearity of summation directly cancels total excess against total deficit.',
      why_ml: 'സങ്കലനത്തിന്റെ സമവാക്യങ്ങൾ വഴി തുകകൾ പരസ്പരം ഇല്ലാതാകുന്നു.',
      rungs_en: [
        { why_en: 'By definition of mean.', m: '\\sum_{i=1}^n x_i = n \\bar{x}' },
        { why_en: 'Sum of deviations.', m: '\\sum_{i=1}^n (x_i - \\bar{x}) = \\sum x_i - \\sum \\bar{x}' },
        { why_en: 'Substitute and subtract.', m: 'n\\bar{x} - n\\bar{x} = 0' }
      ],
      rungs_ml: [
        { why_ml: 'ശരാശരിയുടെ നിർവ്വചനപ്രകാരം.', m: '\\sum x_i = n \\bar{x}' },
        { why_ml: 'വ്യതിയാനങ്ങൾ കൂട്ടുമ്പോൾ.', m: '\\sum (x_i - \\bar{x}) = \\sum x_i - n\\bar{x}' },
        { why_ml: 'വ്യത്യാസം പൂജ്യമാകുന്നു.', m: 'n\\bar{x} - n\\bar{x} = 0' }
      ]
    },
    needs: ['m8.10.1.data-collection-tally', 'p.1.2'],
    traps_en: [
      'The mean does NOT need to be one of the original numbers in the data set.',
      'A change in a single value changes the mean; check total sum when calculating.'
    ],
    traps_ml: [
      'ശരാശരി തന്നിരിക്കുന്ന സംഖ്യകളിൽ ഒന്നായിരിക്കണമെന്ന് യാതൊരു നിർബന്ധവുമില്ല (അതൊരു ഭിന്നസംഖ്യയോ ദശാംശമോ ആകാം).',
      'ഏതെങ്കിലും ഒരു വിലയിൽ മാറ്റം വന്നാൽ അത് ആകെ ശരാശരിയെ ബാധിക്കും.'
    ],
    cards_en: [
      { q: 'Find the arithmetic mean of 8, 12, 15, 17, 28.', a: '$\\text{Sum} = 80$, $n = 5$, $\\bar{x} = \\frac{80}{5} = \\mathbf{16}$.', kind: 'apply' },
      { q: 'The mean of 6 numbers is 14. What is the total sum of the numbers?', a: '$\\text{Sum} = 6 \\times 14 = \\mathbf{84}$.', kind: 'apply' },
      { q: 'What is the sum of all deviations of data points from their arithmetic mean?', a: 'Always exactly $\\mathbf{0}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '8, 12, 15, 17, 28 എന്നീ സംഖ്യകളുടെ സമാന്തര ശരാശരി കാണുക.', a: 'തുക $= 80$, $n = 5$, $\\bar{x} = \\frac{80}{5} = \\mathbf{16}$.', kind: 'apply' },
      { q: '6 സംഖ്യകളുടെ ശരാശരി 14 ആണ്. ആ സംഖ്യകളുടെ ആകെ തുക എത്ര?', a: 'തുക $= 6 \\times 14 = \\mathbf{84}$.', kind: 'apply' },
      { q: 'ഒരു കൂട്ടം വിവരങ്ങളുടെ ശരാശരിയിൽ നിന്നുള്ള വ്യതിയാനങ്ങളുടെ ആകെ തുക എത്രയായിരിക്കും?', a: 'എപ്പോഴും കൃത്യം $\\mathbf{0}$ ആയിരിക്കും.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.13.2.mean-of-frequency-distributions',
    sec: '9.13.2',
    kind: 'rule',
    tier: 'core',
    title_en: 'Mean of Frequency Distributions',
    title_ml: 'ആവൃത്തി പട്ടികയിലെ ശരാശരി',
    oneLine_en: 'When identical values repeat with given frequencies, the weighted arithmetic mean is computed as x̄ = (∑ fᵢxᵢ) / (∑ fᵢ) = (Total Value) / (Total Frequency).',
    oneLine_ml: 'ഒരേ സംഖ്യകൾ ആവർത്തിച്ചു വരുമ്പോൾ, അവയുടെ ആകെത്തുകയെ ആകെ ആവൃത്തി കൊണ്ട് ഹരിച്ച് ശരാശരി കാണുന്നു: x̄ = (∑ fᵢxᵢ) / (∑ fᵢ).',
    statement_en: `<p><b>Discrete Frequency Table:</b></p>
      <p>When an observation $x_i$ occurs with frequency $f_i$ (representing $f_i$ occurrences of the same value), the total contribution of $x_i$ to the sum is $f_i x_i$.</p>
      <p>The arithmetic mean of the distribution is:</p>
      $$\\mathbf{\\bar{x} = \\frac{\\sum_{i=1}^k f_i x_i}{\\sum_{i=1}^k f_i} = \\frac{\\sum f_i x_i}{N}}$$
      <p>where $N = \\sum f_i$ is the total count of observations (total frequency).</p>
      <p><b>Computational Steps:</b></p>
      <ol>
        <li>List distinct values $x_i$ in column 1 and their frequencies $f_i$ in column 2.</li>
        <li>Multiply each $x_i$ by its frequency $f_i$ in column 3 to get products $f_i x_i$.</li>
        <li>Sum column 2 to find $N = \\sum f_i$ and column 3 to find $\\sum f_i x_i$.</li>
        <li>Divide $\\frac{\\sum f_i x_i}{N}$ to obtain the mean $\\bar{x}$.</li>
      </ol>`,
    statement_ml: `<p><b>ആവൃത്തി പട്ടികയിലെ ശരാശരി കാണൽ:</b></p>
      <p>$x_i$ എന്ന വില $f_i$ തവണ ആവർത്തിക്കുന്നുവെങ്കിൽ, അതിന്റെ ആകെത്തുക $f_i x_i$ ആണ്.</p>
      <p>ഈ പട്ടികയുടെ സമാന്തര ശരാശരി:</p>
      $$\\mathbf{\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i} = \\frac{\\sum f_i x_i}{N}}$$
      <p>ഇവിടെ $N = \\sum f_i$ എന്നത് ആകെ ആവൃത്തിയാണ് (ആകെ എണ്ണം).</p>
      <p><b>കണക്കുകൂട്ടൽ ഘട്ടങ്ങൾ:</b></p>
      <ol>
        <li>വിലകൾ $x_i$-ഉം ആവൃത്തികൾ $f_i$-ഉം ക്രമത്തിൽ എഴുതുക.</li>
        <li>ഓരോ വിലയെയും അതിന്റെ ആവൃത്തി കൊണ്ട് ഗുണിച്ച് $f_i x_i$ കാണുക.</li>
        <li>ആകെ ആവൃത്തി $N = \\sum f_i$-ഉം, ആകെ ഗുണനഫലങ്ങളുടെ തുക $\\sum f_i x_i$-ഉം കാണുക.</li>
        <li>$\\bar{x} = \\frac{\\sum f_i x_i}{N}$ എന്ന സമവാക്യത്തിൽ വില നൽകി ശരാശരി കണ്ടെത്തുക.</li>
      </ol>`,
    intuition_en: `<p>Calculating the average mark of a class: instead of adding 50 forty times, multiply 50 × 40. Multiplying saves time and clusters equal values together.</p>`,
    intuition_ml: `<p>ഒരു പരീക്ഷയിൽ 10 കുട്ടികൾക്ക് 50 മാർക്ക് കിട്ടിയാൽ, 50 പത്ത് തവണ കൂട്ടുന്നതിന് പകരം $50 \\times 10 = 500$ എന്ന് ഒറ്റയടിക്ക് കണക്കാക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Expanded sum contains f1 copies of x1, f2 copies of x2, etc. Distributive multiplication simplifies the sum.',
      idea_ml: 'ആവർത്തന സങ്കലനത്തെ ഗുണനമാക്കി മാറ്റുന്ന അടിസ്ഥാന ഗണിത തത്വം.',
      why_en: 'Multiplication is defined as repeated addition of identical addends.',
      why_ml: 'തുല്യ സംഖ്യകൾ ആവർത്തിച്ചു കൂട്ടുമ്പോൾ അവയെ ഗുണനഫലമായി എഴുതാം.',
      rungs_en: [
        { why_en: 'Sum by direct grouping of identical terms.', m: 'S = (x_1 + \\dots + x_1) + \\dots + (x_k + \\dots + x_k) = f_1 x_1 + \\dots + f_k x_k' },
        { why_en: 'Total number of terms is sum of frequencies.', m: 'N = f_1 + f_2 + \\dots + f_k' },
        { why_en: 'Mean is total sum divided by total count.', m: '\\bar{x} = \\frac{\\sum f_i x_i}{N}' }
      ],
      rungs_ml: [
        { why_ml: 'തുല്യ പദങ്ങളെ ഗുണനമാക്കി മാറ്റുന്നു.', m: 'S = f_1 x_1 + \\dots + f_k x_k' },
        { why_ml: 'ആകെ എണ്ണം ആവൃത്തികളുടെ തുകയാണ്.', m: 'N = f_1 + \\dots + f_k' },
        { why_ml: 'ശരാശരി കാണുന്നു.', m: '\\bar{x} = \\frac{\\sum f_i x_i}{N}' }
      ]
    },
    needs: ['m9.13.1.arithmetic-mean-and-deviations'],
    traps_en: [
      'Do NOT divide by the number of distinct rows k; you must divide by the total frequency N = sum(f_i).',
      'Watch out for frequency 0; values with 0 frequency do not affect the sum or count.'
    ],
    traps_ml: [
      'വരികളുടെ എണ്ണം ($k$) കൊണ്ടല്ല ഹരിക്കേണ്ടത്; ആകെ ആവൃത്തി ($N = \\sum f_i$) കൊണ്ടാണ് ഹരിക്കേണ്ടത്.',
      'ആവൃത്തി പൂജ്യമായ വിലകൾ ആകെത്തുകയിലോ എണ്ണത്തിലോ ഉൾപ്പെടുന്നില്ല.'
    ],
    cards_en: [
      { q: 'In a frequency table, sum(f*x) = 720 and sum(f) = 30. What is the mean?', a: '$\\bar{x} = \\frac{720}{30} = \\mathbf{24}$.', kind: 'apply' },
      { q: 'Marks 10, 20, 30 have frequencies 3, 5, 2. What is the mean mark?', a: '$\\sum fx = (10 \\times 3) + (20 \\times 5) + (30 \\times 2) = 30 + 100 + 60 = 190$. $N = 3 + 5 + 2 = 10$. $\\bar{x} = \\frac{190}{10} = \\mathbf{19}$.', kind: 'apply' },
      { q: 'What does N represent in the formula x̄ = ∑fx / N?', a: 'The total frequency (total number of observations, $\\sum f_i$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു ആവൃത്തി പട്ടികയിൽ $\\sum fx = 720$-ഉം $\\sum f = 30$-ഉം ആയാൽ ശരാശരി എത്ര?', a: '$\\bar{x} = \\frac{720}{30} = \\mathbf{24}$.', kind: 'apply' },
      { q: '10, 20, 30 എന്നീ മാർക്കുകൾ കിട്ടിയ കുട്ടികളുടെ എണ്ണം യഥാക്രമം 3, 5, 2 ആണ്. ശരാശരി മാർക്ക് എത്ര?', a: '$\\sum fx = 30 + 100 + 60 = 190$. $N = 10$. $\\bar{x} = \\frac{190}{10} = \\mathbf{19}$.', kind: 'apply' },
      { q: '$\\bar{x} = \\frac{\\sum fx}{N}$ എന്നതിൽ $N$ എന്തിനെ സൂചിപ്പിക്കുന്നു?', a: 'ആകെ ആവൃത്തിയെ (ആകെ വിവരങ്ങളുടെ എണ്ണം, $\\sum f_i$).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.13.3.grouped-frequency-and-class-marks',
    sec: '9.13.3',
    kind: 'rule',
    tier: 'core',
    title_en: 'Mean of Grouped Data and Class Marks',
    title_ml: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ ശരാശരി',
    oneLine_en: 'For grouped data organized into class intervals, each class is represented by its class mark (midpoint xi = (lower + upper)/2) to calculate x̄ = (∑ fᵢxᵢ) / N.',
    oneLine_ml: 'വിഭാഗങ്ങളായി തിരിച്ച വർഗ്ഗീകരിച്ച വിവരങ്ങളിൽ, ഓരോ ക്ലാസിനെയും പ്രതിനിധീകരിക്കാൻ ക്ലാസ് മാർക്ക് (മധ്യവില xi = (അധോപരിധി + ഉച്ചപരിധി)/2) ഉപയോഗിച്ച് ശരാശരി കാണുന്നു: x̄ = (∑ fᵢxᵢ) / N.',
    statement_en: `<p><b>Grouped Data and Class Mark:</b></p>
      <p>When data is grouped into intervals (e.g. $10 - 20, 20 - 30$), individual exact values are unknown. Under the assumption that values are evenly distributed within each class, each interval is represented by its <b>class mark</b> (or class midpoint $x_i$):</p>
      $$\\mathbf{x_i = \\frac{\\text{Lower Limit} + \\text{Upper Limit}}{2}}$$
      <p><b>Mean Formula for Grouped Data:</b></p>
      $$\\mathbf{\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i} = \\frac{\\sum f_i x_i}{N}}$$
      <p>where $x_i$ is the class mark of the $i$-th class interval and $f_i$ is its corresponding frequency.</p>`,
    statement_ml: `<p><b>ക്ലാസ് മാർക്കും വർഗ്ഗീകരിച്ച വിവരങ്ങളും:</b></p>
      <p>വിവരങ്ങൾ ക്ലാസുകളായി തിരിക്കുമ്പോൾ ($10 - 20, 20 - 30$ മുതലായവ), ഓരോ സംഖ്യയും കൃത്യമായി അറിയാൻ കഴിയില്ല. വിവരങ്ങൾ ക്ലാസിനുള്ളിൽ തുല്യമായി വ്യാപിച്ചിരിക്കുന്നു എന്ന അനുമാനത്തിൽ, ഓരോ ക്ലാസിനെയും അതിന്റെ <b>ക്ലാസ് മാർക്ക് (മധ്യവില $x_i$)</b> ഉപയോഗിച്ച് സൂചിപ്പിക്കുന്നു:</p>
      $$\\mathbf{x_i = \\frac{\\text{അധോപരിധി} + \\text{ഉച്ചപരിധി}}{2}}$$
      <p><b>വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ ശരാശരി സമവാക്യം:</b></p>
      $$\\mathbf{\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i} = \\frac{\\sum f_i x_i}{N}}$$
      <p>ഇവിടെ $x_i$ എന്നത് ഓരോ ക്ലാസിന്റെയും മധ്യവിലയും, $f_i$ എന്നത് അതത് ക്ലാസിലെ ആവൃത്തിയുമാണ്.</p>`,
    intuition_en: `<p>If 10 students scored between 20 and 30 marks, their marks are centered around the middle value 25. Treating all 10 students as scoring 25 balances out the higher and lower scores within the group.</p>`,
    intuition_ml: `<p>20-നും 30-നും ഇടയിൽ മാർക്ക് വാങ്ങിയ 10 കുട്ടികളുണ്ടെങ്കിൽ, എല്ലാവരുടെയും ശരാശരി ഏകദേശം നടുവിലുള്ള 25-ന് തുല്യമായിരിക്കും എന്ന് കണക്കാക്കുന്നത് വലിയ പിശകില്ലാതെ ശരിയായ ഫലം തരുന്നു.</p>`,
    proof: {
      idea_en: 'The midpoint is the unbiased expectation of a uniform distribution over a continuous interval [a, b].',
      idea_ml: 'ക്ലാസ് ഇടവേളയിലെ വിവരങ്ങളുടെ സമതുലിത കേന്ദ്രമാണ് മധ്യവില.',
      why_en: 'Positive and negative internal variations within the class symmetrically cancel out.',
      why_ml: 'മധ്യവിലയ്ക്ക് മുകളിലും താഴെയുമുള്ള വ്യത്യാസങ്ങൾ പരസ്പരം ക്യാൻസൽ ചെയ്യുന്നു.',
      rungs_en: [
        { why_en: 'Midpoint of interval [a, b].', m: 'x_i = \\frac{a + b}{2}' },
        { why_en: 'Weighted class contribution.', m: 'f_i x_i = f_i \\cdot \\frac{a + b}{2}' },
        { why_en: 'Overall estimated mean.', m: '\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}' }
      ],
      rungs_ml: [
        { why_ml: 'ക്ലാസിന്റെ മധ്യവില കാണുന്നു.', m: 'x_i = \\frac{a + b}{2}' },
        { why_ml: 'ആവൃത്തിയുമായി ഗുണിക്കുന്നു.', m: 'f_i x_i' },
        { why_ml: 'ആകെ ശരാശരി കാണുന്നു.', m: '\\bar{x} = \\frac{\\sum f_i x_i}{N}' }
      ]
    },
    needs: ['m9.13.2.mean-of-frequency-distributions'],
    traps_en: [
      'Do NOT use the class width or the lower limit as xi; always use the exact midpoint (lower + upper)/2.',
      'Check whether classes are continuous (e.g. 0-10, 10-20); adjust boundaries if inclusive intervals (e.g. 1-10, 11-20) are used.'
    ],
    traps_ml: [
      'ക്ലാസ് മാർക്കായി അധോപരിധിയോ ക്ലാസ് വ്യാപ്തിയോ ഉപയോഗിക്കരുത്; മധ്യവില $\\frac{\\text{അധോപരിധി} + \\text{ഉച്ചപരിധി}}{2}$ തന്നെ ഉപയോഗിക്കണം.',
      'തുടർച്ചയായ ക്ലാസുകളാണോ എന്ന് പരിശോധിച്ച് ഉറപ്പുവരുത്തുക.'
    ],
    cards_en: [
      { q: 'What is the class mark of the class interval 30 - 50?', a: '$x_i = \\frac{30 + 50}{2} = \\mathbf{40}$.', kind: 'apply' },
      { q: 'Why do we use the class mark in grouped frequency distributions?', a: 'Because the exact individual data values are not known, and the midpoint represents the group average.', kind: 'recall' },
      { q: 'For class 10 - 20 with frequency 8, what is the value of f * x?', a: 'Class mark $x = \\frac{10+20}{2} = 15$. Product $f \\times x = 8 \\times 15 = \\mathbf{120}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '30 - 50 എന്ന ക്ലാസ് ഇടവേളയുടെ ക്ലാസ് മാർക്ക് (മധ്യവില) എത്ര?', a: '$x_i = \\frac{30 + 50}{2} = \\mathbf{40}$.', kind: 'apply' },
      { q: 'വർഗ്ഗീകരിച്ച ആവൃത്തി പട്ടികയിൽ ക്ലാസ് മാർക്ക് ഉപയോഗിക്കുന്നത് എന്തുകൊണ്ട്?', a: 'വ്യക്തിഗത വിവരങ്ങൾ നേരിട്ട് അറിയാൻ കഴിയാത്തതിനാൽ ക്ലാസിന്റെ സമതുലിത പ്രതിനിധിയായി മധ്യവില ഉപയോഗിക്കുന്നു.', kind: 'recall' },
      { q: '10 - 20 എന്ന ക്ലാസിന്റെ ആവൃത്തി 8 ആയാൽ $f \\times x$-ന്റെ വില എത്ര?', a: 'മധ്യവില $x = 15$. $f \\times x = 8 \\times 15 = \\mathbf{120}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.13.4.assumed-mean-method',
    sec: '9.13.4',
    kind: 'rule',
    tier: 'core',
    title_en: 'Assumed Mean Method',
    title_ml: 'സങ്കല്പിത ശരാശരി രീതി',
    oneLine_en: 'By shifting the origin to an assumed mean A, deviations dᵢ = xᵢ - A are simplified, giving the true mean as x̄ = A + (∑ fᵢdᵢ) / N.',
    oneLine_ml: 'ഒരു അനുയോജ്യമായ സംഖ്യയെ സങ്കല്പിത ശരാശരിയായി (A) സങ്കല്പിച്ച്, വ്യതിയാനങ്ങൾ dᵢ = xᵢ - A ഉപയോഗിച്ച് വലിയ ഗുണനങ്ങൾ ഒഴിവാക്കി ശരാശരി കാണുന്നു: x̄ = A + (∑ fᵢdᵢ) / N.',
    statement_en: `<p><b>Purpose of the Assumed Mean Method:</b></p>
      <p>When the values $x_i$ and frequencies $f_i$ are large, direct computation of $\\sum f_i x_i$ is tedious and error-prone. Shifting the values by a chosen constant $A$ (usually the middle class mark) drastically reduces arithmetic complexity.</p>
      <p><b>Method Steps:</b></p>
      <ol>
        <li>Choose a convenient middle class mark as the <b>assumed mean</b> $A$.</li>
        <li>Calculate deviations $d_i = x_i - A$ for each class. (Values above $A$ have $d_i > 0$, values below $A$ have $d_i < 0$, and at $A$, $d = 0$).</li>
        <li>Multiply $f_i d_i$ and sum them to obtain $\\sum f_i d_i$.</li>
        <li>Compute the true mean $\\bar{x}$ using the formula:
        $$\\mathbf{\\bar{x} = A + \\frac{\\sum f_i d_i}{N}}$$</li>
      </ol>`,
    statement_ml: `<p><b>സങ്കല്പിത ശരാശരി രീതിയുടെ പ്രയോജനം:</b></p>
      <p>വിലകളും ($x_i$) ആവൃത്തികളും ($f_i$) വലിയ സംഖ്യകളാകുമ്പോൾ നേരിട്ട് ഗുണിക്കുന്നത് വലിയ കണക്കുകൂട്ടലുകൾക്ക് കാരണമാകുന്നു. ഇതിന് പകരമായി ഒരു മധ്യവിലയെ സങ്കല്പിത ശരാശരിയായി ($A$) നിശ്ചയിച്ച് വ്യതിയാനങ്ങൾ ഉപയോഗിക്കുന്നത് കണക്കുകൂട്ടൽ വളരെ ലളിതമാക്കുന്നു.</p>
      <p><b>കണക്കുകൂട്ടൽ ഘട്ടങ്ങൾ:</b></p>
      <ol>
        <li>ക്ലാസ് മാർക്കുകളിൽ ഒത്ത നടുവിലുള്ള ഒരു വിലയെ <b>സങ്കല്പിത ശരാശരിയായി ($A$)</b> എടുക്കുക.</li>
        <li>ഓരോ ക്ലാസിനും $d_i = x_i - A$ എന്ന വ്യതിയാനം കണ്ടെത്തുക. ($A$-യ്ക്ക് മുകളിൽ ധനസംഖ്യകളും താഴെ ഋണസംഖ്യകളും ലഭിക്കും).</li>
        <li>$f_i d_i$ ഗുണിച്ച് തുകയായ $\\sum f_i d_i$ കാണുക.</li>
        <li>യഥാർത്ഥ ശരാശരി കാണാനുള്ള സമവാക്യം:
        $$\\mathbf{\\bar{x} = A + \\frac{\\sum f_i d_i}{N}}$$</li>
      </ol>`,
    intuition_en: `<p>If average daily wages are around 500 rupees: measuring everyone's deviation from 500 (+20, -50, +30) and finding the average of those small deviations (+5) immediately gives the true mean 500 + 5 = 505!</p>`,
    intuition_ml: `<p>തൊഴിലാളികളുടെ കൂലി 500-ന് അടുത്താണെങ്കിൽ, 500-ൽ നിന്നുള്ള വ്യത്യാസങ്ങൾ മാത്രം (+20, -10, +30) കൂട്ടി അതിന്റെ ശരാശരി കണ്ടാൽ മതി. ആ ശരാശരി 500-നോട് ചേർത്താൽ യഥാർത്ഥ ശരാശരി കിട്ടുന്നു.</p>`,
    proof: {
      idea_en: 'Substitute x_i = A + d_i into the mean formula: sum(f_i x_i) = sum(f_i (A + d_i)) = A * sum(f_i) + sum(f_i d_i) = A * N + sum(f_i d_i).',
      idea_ml: '$x_i = A + d_i$ എന്ന് ശരാശരി സമവാക്യത്തിൽ നൽകിയാൽ $A + \\frac{\\sum f_i d_i}{N}$ ലഭിക്കുന്നു.',
      why_en: 'Distributive property separates the fixed base A from the variable deviations.',
      why_ml: 'സ്ഥിരസംഖ്യയായ $A$-യെ പൊതുവായി പുറത്തെടുത്ത് വ്യതിയാനങ്ങളെ മാത്രം ലഘൂകരിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Deviation definition.', m: 'd_i = x_i - A \\implies x_i = A + d_i' },
        { why_en: 'Total sum expression.', m: '\\sum f_i x_i = \\sum f_i(A + d_i) = A\\sum f_i + \\sum f_i d_i = AN + \\sum f_i d_i' },
        { why_en: 'Divide by total count N.', m: '\\bar{x} = \\frac{\\sum f_i x_i}{N} = A + \\frac{\\sum f_i d_i}{N}' }
      ],
      rungs_ml: [
        { why_ml: 'വ്യതിയാനം എഴുതുന്നു.', m: 'x_i = A + d_i' },
        { why_ml: 'ആകെത്തുകയിൽ നൽകുന്നു.', m: '\\sum f_i x_i = A N + \\sum f_i d_i' },
        { why_ml: '$N$ കൊണ്ട് ഹരിക്കുന്നു.', m: '\\bar{x} = A + \\frac{\\sum f_i d_i}{N}' }
      ]
    },
    needs: ['m9.13.3.grouped-frequency-and-class-marks'],
    traps_en: [
      'Do not forget to add A back at the end: x̄ = A + (∑fd)/N, forgetting A produces the deviation average, not the mean!',
      'Pay careful attention to negative signs in d_i for values smaller than A.'
    ],
    traps_ml: [
      'അവസാനം $A$ കൂട്ടാൻ മറക്കരുത്: $\\bar{x} = A + \\frac{\\sum fd}{N}$. $A$ കൂട്ടിയില്ലെങ്കിൽ വ്യതിയാനങ്ങളുടെ ശരാശരി മാത്രമേ ലഭിക്കൂ.',
      '$A$-യേക്കാൾ ചെറിയ വിലകൾക്ക് വ്യതിയാനം $d_i$ ഋണസംഖ്യയായിരിക്കും, ചിഹ്നം കൃത്യമായി പാലിക്കണം.'
    ],
    cards_en: [
      { q: 'In the assumed mean method, A = 50, sum(f*d) = 60, and N = 30. Find the mean.', a: '$\\bar{x} = 50 + \\frac{60}{30} = 50 + 2 = \\mathbf{52}$.', kind: 'apply' },
      { q: 'What is the deviation d_i for a class mark x_i = 35 when assumed mean A = 40?', a: '$d_i = 35 - 40 = \\mathbf{-5}$.', kind: 'apply' },
      { q: 'Does the final value of the mean depend on which value of A is chosen?', a: 'No, any real value of A yields the exact same final mean.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'സങ്കല്പിത ശരാശരി രീതിയിൽ $A = 50$, $\\sum fd = 60$, $N = 30$ ആയാൽ ശരാശരി എത്ര?', a: '$\\bar{x} = 50 + \\frac{60}{30} = 50 + 2 = \\mathbf{52}$.', kind: 'apply' },
      { q: '$A = 40$ ആയാൽ $x_i = 35$ എന്ന ക്ലാസ് മാർക്കിന്റെ വ്യതിയാനം $d_i$ എത്ര?', a: '$d_i = 35 - 40 = \\mathbf{-5}$.', kind: 'apply' },
      { q: '$A$-യായി ഏത് സംഖ്യ എടുത്താലും അവസാന ശരാശരിയിൽ മാറ്റം വരുമോ?', a: 'ഇല്ല, ഏത് $A$ തിരഞ്ഞെടുത്താലും ഒരേ കൃത്യമായ ശരാശരി തന്നെ ലഭിക്കും.', kind: 'recall' }
    ]
  }
);
