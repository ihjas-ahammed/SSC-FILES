/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 10: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.10.1.data-and-tally',
    sec: '8.10.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Raw Data, Tally Marks & Frequency Table',
    title_ml: 'വിവരശേഖരണവും ആവൃത്തിപ്പട്ടികയും',
    oneLine_en: 'A frequency table organizes unorganized raw data into values and their counts (frequencies) using tally marks.',
    oneLine_ml: 'എണ്ണൽ അടയാളങ്ങൾ ഉപയോഗിച്ച് അസംസ്കൃത വിവരങ്ങളെ ഓരോന്നിന്റെയും ആവർത്തനത്തിനനുസരിച്ച് (ആവൃത്തി) പട്ടികപ്പെടുത്തുന്നു.',
    statement_en: `<p>Numerical facts or observations collected for a specific inquiry are called <b>raw data</b> (വിവരങ്ങൾ).</p>
      <p>When there are many observations, examining individual numbers is tedious and confusing. We condense the data into a <b>frequency table</b> (ആവൃത്തിപ്പട്ടിക):</p>
      <ul>
        <li><b>Tally Marks (എണ്ണൽ അടയാളങ്ങൾ):</b> Each occurrence is recorded as a vertical stroke ($|$). Groups of five are bundled with a diagonal strike-through ($||||\\kern-7pt{/\\kern1pt}$).</li>
        <li><b>Frequency (ആവൃത്തി):</b> The total number of times a particular observation appears in the dataset.</li>
      </ul>
      <p><b>Sum of Frequencies:</b> The sum of all frequencies equals the total number of observations: $\\sum f = N$.</p>`,
    statement_ml: `<p>ഒരു പ്രത്യേക ആവശ്യത്തിനായി ശേഖരിക്കുന്ന വിവരങ്ങളെയാണ് <b>ദത്തങ്ങൾ</b> എന്ന് പറയുന്നത്.</p>
      <p>നിരവധി വിവരങ്ങൾ ക്രമരഹിതമായി കിടക്കുമ്പോൾ അതിൽ നിന്ന് കാര്യങ്ങൾ മനസ്സിലാക്കാൻ പ്രയാസമാണ്. അതിനാൽ ഇവയെ <b>ആവൃത്തിപ്പട്ടികയായി</b> മാറ്റുന്നു:</p>
      <ul>
        <li><b>എണ്ണൽ അടയാളങ്ങൾ:</b> ഓരോ വിവരത്തിനും നേരെ ഓരോ വര വീതം ($|$) വരയ്ക്കുന്നു. അഞ്ച് എണ്ണം തികയുമ്പോൾ ഒരു കുറുകെ വരച്ച് ($||||\\kern-7pt{/\\kern1pt}$) കെട്ടുകളാക്കുന്നു.</li>
        <li><b>ആവൃത്തി (Frequency):</b> ഒരു വിവരം എത്ര തവണ ആവർത്തിച്ചു വന്നു എന്നതിന്റെ എണ്ണമാണ് അതിന്റെ ആവൃത്തി.</li>
      </ul>
      <p><b>ആകെ ആവൃത്തി:</b> എല്ലാ ആവൃത്തികളുടെയും തുക ആകെ ശേഖരിച്ച വിവരങ്ങളുടെ എണ്ണത്തിന് തുല്യമായിരിക്കും: $\\sum f = N$.</p>`,
    intuition_en: `<p>Counting randomly scattered coins is slow and prone to errors. Sorting them into piles of distinct denominations makes counting rapid and dependable.</p>`,
    intuition_ml: `<p>നാണയത്തുട്ടുകൾ അലക്ഷ്യമായി കൂട്ടിയിട്ടാൽ എണ്ണാൻ പ്രയാസമാണ്. എന്നാൽ ഒരേ വിലയുള്ളവ തരംതിരിച്ച് അടുക്കിവെച്ചാൽ എളുപ്പത്തിൽ ആകെത്തുക കണക്കാക്കാം.</p>`,
    proof: {
      idea_en: 'Partitioning a set into disjoint equivalence classes preserves total cardinality.',
      idea_ml: 'ഒരു ഗണത്തിലെ അംഗങ്ങളെ പരസ്പരബന്ധമില്ലാത്ത ചെറുഗണങ്ങളാക്കി മാറ്റിയാലും ആകെ എണ്ണം മാറ്റമില്ലാതെ തുടരുന്നു.',
      why_en: 'Each observation is counted into exactly one category tally.',
      why_ml: 'ഓരോ വിവരവും കൃത്യമായി ഒരു നിരയിൽ മാത്രമാണ് അടയാളപ്പെടുത്തുന്നത്.',
      rungs_en: [
        { why_en: 'Let dataset have N values x1, x2, ..., xN.', m: 'S = \\{x_1, x_2, \\dots, x_N\\}' },
        { why_en: 'Group into distinct values v1, v2, ..., vk with frequencies f1, f2, ..., fk.', m: 'f_i = \\text{count}(x = v_i)' },
        { why_en: 'The sum of all frequencies must equal total count N.', m: '\\sum_{i=1}^k f_i = N' }
      ],
      rungs_ml: [
        { why_ml: 'ശേഖരിച്ച വിവരങ്ങളുടെ ആകെ എണ്ണം N എന്നിരിക്കട്ടെ.', m: 'S = \\{x_1, x_2, \\dots, x_N\\}' },
        { why_ml: 'ഓരോ വ്യത്യസ്ത അളവുകളുടെയും ആവൃത്തികൾ f1, f2, ..., fk എന്നിരിക്കട്ടെ.', m: 'f_i = \\text{ആവൃത്തി}' },
        { why_ml: 'ആകെ ആവൃത്തികളുടെ തുക ശേഖരിച്ച വിവരങ്ങളുടെ എണ്ണത്തിന് തുല്യമാണ്.', m: '\\sum_{i=1}^k f_i = N' }
      ]
    },
    needs: ['s.counting'],
    traps_en: [
      'Do not forget the fifth diagonal tally stroke: 4 vertical lines + 1 diagonal line = 5.',
      'Check that the sum of the frequency column matches the given sample size N.'
    ],
    traps_ml: [
      'അഞ്ചാമത്തെ അടയാളം കുറുകെ വരയ്ക്കേണ്ടതാണ് (4 ലംബ വരകളും 1 കുറുകെ വരയും = 5).',
      'ആവൃത്തികളുടെ ആകെ തുക ചോദ്യത്തിൽ തന്നിരിക്കുന്ന ആകെ എണ്ണവുമായി ഒത്തുനോക്കുക.'
    ],
    cards_en: [
      { q: 'In a survey of 30 students, blood group O appears 12 times. What is the frequency of blood group O?', a: '$\\mathbf{12}$.', kind: 'recall' },
      { q: 'How many items does the tally mark bundle |||| (with diagonal strike) represent?', a: '$\\mathbf{5}$.', kind: 'recall' },
      { q: 'What does the sum of all frequencies in a frequency table represent?', a: 'The total number of observations in the data set ($N$).', kind: 'state' }
    ],
    cards_ml: [
      { q: '30 കുട്ടികളിൽ നടത്തിയ പരിശോധനയിൽ രക്തഗ്രൂപ്പ് O ഉള്ളവർ 12 പേരാണെങ്കിൽ O ഗ്രൂപ്പിന്റെ ആവൃത്തി എത്ര?', a: '$\\mathbf{12}$.', kind: 'recall' },
      { q: 'കുറുകെ വരച്ച ഒരു എണ്ണൽ അടയാളക്കെട്ട് എത്രയെണ്ണത്തെ സൂചിപ്പിക്കുന്നു?', a: '$\\mathbf{5}$ എണ്ണത്തെ.', kind: 'recall' },
      { q: 'ഒരു ആവൃത്തിപ്പട്ടികയിലെ ആകെ ആവൃത്തി എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?', a: 'ശേഖരിച്ച വിവരങ്ങളുടെ ആകെ എണ്ണത്തെ ($N$).', kind: 'state' }
    ]
  },

  {
    id: 'm8.10.2.grouped-frequency-table',
    sec: '8.10.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Grouped Frequency Distribution & Class Intervals',
    title_ml: 'വിഭാഗങ്ങളാക്കിയ ആവൃത്തിപ്പട്ടിക',
    oneLine_en: 'When data spans a wide range, observations are grouped into continuous class intervals [a - b) characterized by lower and upper limits.',
    oneLine_ml: 'വിവരങ്ങളുടെ വ്യാപ്തി വലുതായിരിക്കുമ്പോൾ അവയെ നിശ്ചിത ക്ലാസ് വിസ്തൃതിയുള്ള വിഭാഗങ്ങളാക്കി തിരിച്ച് പട്ടികപ്പെടുത്തുന്നു.',
    statement_en: `<p>When the range of data is wide (such as marks from $0$ to $100$ or weights from $30\\text{ kg}$ to $80\\text{ kg}$), an individual value table becomes unmanageably large. We divide the range into convenient groups called <b>class intervals</b> (ക്ലാസ് വിസ്തൃതി):</p>
      <ul>
        <li><b>Class Interval (വിഭാഗം):</b> A range of values, such as $40 - 50$, $50 - 60$.</li>
        <li><b>Limits (അതിരുകൾ):</b> In $40 - 50$, $40$ is the <b>lower limit</b> and $50$ is the <b>upper limit</b>.</li>
        <li><b>Class Size / Width (വിസ്തൃതി):</b> The difference between upper and lower limits: $\\text{Width} = 50 - 40 = 10$.</li>
        <li><b>Boundary Convention:</b> By standard Kerala SCERT convention, an observation falling exactly on a boundary (e.g., $50$) is included in the interval where it is the lower limit ($50 - 60$), not where it is the upper limit.</li>
      </ul>`,
    statement_ml: `<p>വിവരങ്ങൾ വളരെ വലിയ പരിധിയിൽ വ്യാപിച്ചുകിടക്കുമ്പോൾ (ഉദാഹരണത്തിന് $0$ മുതൽ $100$ വരെയുള്ള പരീക്ഷാ മാർക്കുകൾ), അവയെ ഓരോന്നായി എഴുതുന്നത് പ്രായോഗികമല്ല. അതിനാൽ നിശ്ചിത അകലമുള്ള <b>വിഭാഗങ്ങളാക്കി</b> തിരിക്കുന്നു:</p>
      <ul>
        <li><b>വിഭാഗം:</b> $40 - 50$, $50 - 60$ എന്നിങ്ങനെ തുല്യ അകലമുള്ള ഇടവേളകൾ.</li>
        <li><b>അതിരുകൾ:</b> $40 - 50$ എന്ന വിഭാഗത്തിൽ $40$ എന്നത് <b>കീഴതിരും</b>, $50$ എന്നത് <b>മേലതിരുമാണ്</b>.</li>
        <li><b>ക്ലാസ് വിസ്തൃതി (Class Width):</b> മേലതിരും കീഴതിരും തമ്മിലുള്ള വ്യത്യാസം: $50 - 40 = 10$.</li>
        <li><b>അതിർത്തി നിർണ്ണയം:</b> കൃത്യം അതിർത്തിയിൽ വരുന്ന അളവ് (ഉദാഹരണത്തിന് $50$), അത് കീഴതിരായി വരുന്ന വിഭാഗത്തിലാണ് ($50 - 60$) ഉൾപ്പെടുത്തേണ്ടത്.</li>
      </ul>`,
    intuition_en: `<p>Sorting books by exact page count creates hundreds of single-book shelves. Sorting them into broad bins (100–200 pages, 200–300 pages) gives a clean overview of book sizes.</p>`,
    intuition_ml: `<p>ഓരോ പേജ് എണ്ണത്തിനും പ്രത്യേകം തട്ടുകൾ ഉണ്ടാക്കുന്നതിന് പകരം, 100-200 പേജുകൾ, 200-300 പേജുകൾ എന്നിങ്ങനെ തരംതിരിച്ച് വെച്ചാൽ ലൈബ്രറിയിൽ പുസ്തകങ്ങൾ ക്രമീകരിക്കാൻ വളരെ എളുപ്പമാണ്.</p>`,
    proof: {
      idea_en: 'Continuous real interval partition divides the domain into non-overlapping half-open subsets [a, b).',
      idea_ml: 'സംഖ്യാ ഗണത്തെ പരസ്പരം കൂടിക്കലരാത്ത [a, b) എന്ന ഉപഗണങ്ങളായി വിഭജിക്കുന്നു.',
      why_en: 'Every number falls into one and only one class interval.',
      why_ml: 'ഏതൊരു അളവും കൃത്യമായി ഒരു വിഭാഗത്തിൽ മാത്രമേ ഉൾപ്പെടുന്നുള്ളൂ.',
      rungs_en: [
        { why_en: 'Partition domain into contiguous intervals [c_k, c_{k+1}).', m: 'I_k = [c_k, c_{k+1})' },
        { why_en: 'Each value x satisfies c_k <= x < c_{k+1} for unique k.', m: 'x \\in I_k \\iff c_k \\le x < c_{k+1}' },
        { why_en: 'Frequency f_k counts elements belonging to interval I_k.', m: 'f_k = |\\{x : x \\in I_k\\}|' }
      ],
      rungs_ml: [
        { why_ml: 'വിവരങ്ങളെ [c_k, c_{k+1}) എന്ന ഇടവേളകളാക്കുന്നു.', m: 'I_k = [c_k, c_{k+1})' },
        { why_ml: 'ഓരോ സംഖ്യയും കൃത്യമായി ഒരു വിഭാഗത്തിൽ മാത്രമാണ് പെടുന്നത്.', m: 'c_k \\le x < c_{k+1}' },
        { why_ml: 'ഓരോ വിഭാഗത്തിലും പെടുന്ന അളവുകളുടെ എണ്ണമാണ് ആവൃത്തി f_k.', m: 'f_k = \\text{ആവൃത്തി}' }
      ]
    },
    needs: ['m8.10.1.data-and-tally'],
    traps_en: [
      'Be consistent with boundary points: 40 belongs to 40-50, NOT 30-40.',
      'All class intervals in a basic table should ideally have the same width.'
    ],
    traps_ml: [
      'അതിർത്തി സംഖ്യകൾ കൃത്യമായി ചേർക്കുക: 40 എന്നത് 40-50 ലാണ് പെടുന്നത്, 30-40 ലല്ല.',
      'എല്ലാ വിഭാഗങ്ങൾക്കും ഒരേ വിസ്തൃതിയായിരിക്കാൻ ശ്രദ്ധിക്കുക.'
    ],
    cards_en: [
      { q: 'In the class interval 30 - 40, what is the lower limit and class width?', a: 'Lower limit = $\\mathbf{30}$, Class width = $40 - 30 = \\mathbf{10}$.', kind: 'recall' },
      { q: 'In continuous grouping 10-20, 20-30, in which interval is the number 20 counted?', a: 'In the interval $\\mathbf{20 - 30}$ (where it serves as the lower limit).', kind: 'apply' },
      { q: 'What is the purpose of grouping data into class intervals?', a: 'To condense large, widely scattered datasets into manageable summaries for analysis.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '30 - 40 എന്ന ക്ലാസ് വിഭാഗത്തിലെ കീഴതിരും ക്ലാസ് വിസ്തൃതിയും എത്ര?', a: 'കീഴതിര് = $\\mathbf{30}$, വിസ്തൃതി = $40 - 30 = \\mathbf{10}$.', kind: 'recall' },
      { q: '10-20, 20-30 എന്നീ വിഭാഗങ്ങളിൽ 20 എന്ന സംഖ്യ ഏതിലാണ് ഉൾപ്പെടുന്നത്?', a: '$\\mathbf{20 - 30}$ എന്ന വിഭാഗത്തിൽ (കീഴതിരായി വരുന്നിടത്ത്).', kind: 'apply' },
      { q: 'വിവരങ്ങളെ വിഭാഗങ്ങളാക്കി തിരിക്കുന്നതിന്റെ പ്രധാന പ്രയോജനം എന്താണ്?', a: 'വലിയ അളവിലുള്ള വിവരങ്ങളെ ചുരുക്കി എളുപ്പത്തിൽ വിശകലനം ചെയ്യാൻ സാധിക്കുന്നു.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.10.3.histogram',
    sec: '8.10.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Histogram (Frequency Rectangles)',
    title_ml: 'ആവൃത്തിച്ചതുരം (ഹിസ്റ്റോഗ്രാം)',
    oneLine_en: 'A histogram represents continuous grouped frequency data as adjacent rectangles whose bases are class intervals and heights equal frequencies.',
    oneLine_ml: 'വിഭാഗങ്ങളാക്കിയ ആവൃത്തിപ്പട്ടികയെ, പാദം ക്ലാസ് വിസ്തൃതിയും ഉയരം ആവൃത്തിയും വരുന്ന അടുത്തടുത്ത ചതുരങ്ങളായി ചിത്രീകരിക്കുന്നതാണ് ആവൃത്തിച്ചതുരം.',
    statement_en: `<p>A <b>histogram</b> (ആവൃത്തിച്ചതുരം) is a graphical representation of a grouped frequency distribution:</p>
      <ul>
        <li>The <b>horizontal axis ($x$-axis)</b> displays the class intervals with uniform scale.</li>
        <li>The <b>vertical axis ($y$-axis)</b> displays the frequencies.</li>
        <li>Over each class interval, a vertical rectangle is erected with:
          $$\\text{Base} = \\text{Class Width}, \\qquad \\text{Height} = \\text{Frequency of that class}$$
        </li>
        <li>Since class intervals are contiguous, there are <b>no gaps between adjacent rectangles</b> (unlike separate bar charts for discrete categories).</li>
      </ul>`,
    statement_ml: `<p>വിഭാഗങ്ങളാക്കിയ ആവൃത്തിപ്പട്ടികയെ ചിത്രരൂപത്തിൽ അവതരിപ്പിക്കുന്ന രീതിയാണ് <b>ആവൃത്തിച്ചതുരം</b>:</p>
      <ul>
        <li><b>തിരശ്ചീന അക്ഷത്തിൽ ($x$-അക്ഷം):</b> ക്ലാസ് വിഭാഗങ്ങൾ ഒരേ അളവിൽ അടയാളപ്പെടുത്തുന്നു.</li>
        <li><b>ലംബ അക്ഷത്തിൽ ($y$-അക്ഷം):</b> ആവൃത്തി അടയാളപ്പെടുത്തുന്നു.</li>
        <li>ഓരോ ക്ലാസ് വിഭാഗത്തിനും മുകളിലായി ചതുരങ്ങൾ വരയ്ക്കുന്നു:
          $$\\text{പാദം} = \\text{ക്ലാസ് വിസ്തൃതി}, \\qquad \\text{ഉയരം} = \\text{ആ വിഭാഗത്തിന്റെ ആവൃത്തി}$$
        </li>
        <li>വിഭാഗങ്ങൾ തുടർച്ചയായതിനാൽ <b>ചതുരങ്ങൾക്കിടയിൽ വിടവുണ്ടാകില്ല</b> (സാധാരണ ബാർ ഡയഗ്രങ്ങളിൽ നിന്ന് വ്യത്യസ്തമായി).</li>
      </ul>`,
    intuition_en: `<p>Imagine building a skyline of towers. The width of each building lot is fixed, and the height of the tower represents how crowded that lot is.</p>`,
    intuition_ml: `<p>അടുത്തടുത്ത് നിൽക്കുന്ന കെട്ടിടങ്ങൾ പോലെ സങ്കൽപ്പിക്കുക. ഓരോ കെട്ടിടത്തിന്റെയും തറയുടെ വീതി തുല്യമാണ്, എന്നാൽ കെട്ടിടത്തിന്റെ ഉയരം അവിടെയുള്ള ആളുകളുടെ എണ്ണത്തിനനുസരിച്ച് (ആവൃത്തി) മാറുന്നു.</p>`,
    proof: {
      idea_en: 'Area of each rectangle is proportional to class frequency: Area = width * frequency.',
      idea_ml: 'ഓരോ ചതുരത്തിന്റെയും പരപ്പളവ് ആ വിഭാഗത്തിന്റെ ആവൃത്തിക്ക് ആനുപാതികമാണ്: പരപ്പളവ് = വീതി * ആവൃത്തി.',
      why_en: 'When widths are equal, height alone accurately represents frequency distribution.',
      why_ml: 'വീതി തുല്യമായിരിക്കുമ്പോൾ ഉയരം നേരിട്ട് ആവൃത്തിയെ പ്രതിനിധീകരിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Width of rectangle is class width w.', m: 'w = c_{k+1} - c_k' },
        { why_en: 'Height of rectangle is frequency f_k.', m: 'h = f_k' },
        { why_en: 'Area of rectangle is w * f_k, directly proportional to frequency.', m: '\\text{Area}_k = w \\times f_k' }
      ],
      rungs_ml: [
        { why_ml: 'ചതുരത്തിന്റെ വീതി ക്ലാസ് വിസ്തൃതി w ആണ്.', m: 'w = \\text{വിസ്തൃതി}' },
        { why_ml: 'ചതുരത്തിന്റെ ഉയരം ആവൃത്തി f_k ആണ്.', m: 'h = f_k' },
        { why_ml: 'ചതുരത്തിന്റെ പരപ്പളവ് ആവൃത്തിക്ക് നേർ അനുപാതത്തിലാണ്.', m: '\\text{പരപ്പളവ്} = w \\times f_k' }
      ]
    },
    needs: ['m8.10.2.grouped-frequency-table'],
    traps_en: [
      'Do not leave gaps between bars in a histogram; bars must touch each other because class intervals are continuous.',
      'Remember to put a kink/zigzag mark on the x-axis if the first interval does not start at 0.'
    ],
    traps_ml: [
      'ആവൃത്തിച്ചതുരത്തിൽ ചതുരങ്ങൾക്കിടയിൽ ഒരിക്കലും വിടവ് ഇടരുത്; അവ പരസ്പരം തൊട്ടിരിക്കണം.',
      'ആദ്യത്തെ വിഭാഗം പൂജ്യത്തിൽ നിന്നല്ല തുടങ്ങുന്നതെങ്കിൽ അക്ഷത്തിൽ ഒരു വളഞ്ഞ വര (Kink) നൽകണം.'
    ],
    cards_en: [
      { q: 'What is the key visual difference between a bar chart and a histogram?', a: 'In a histogram, adjacent rectangles touch each other without gaps; in a bar chart, bars have equal gaps.', kind: 'recall' },
      { q: 'In a histogram, what does the height of each rectangle represent?', a: 'The frequency of that class interval.', kind: 'recall' },
      { q: 'What represents the base of each rectangle in a histogram?', a: 'The class interval (width) on the horizontal axis.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ബാർ ഡയഗ്രവും ആവൃത്തിച്ചതുരവും തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എന്താണ്?', a: 'ആവൃത്തിച്ചതുരത്തിൽ ചതുരങ്ങൾക്കിടയിൽ വിടവുകളുണ്ടാകില്ല, എന്നാൽ ബാർ ഡയഗ്രത്തിൽ തുല്യ അകലത്തിൽ വിടവുകളുണ്ടാകും.', kind: 'recall' },
      { q: 'ആവൃത്തിച്ചതുരത്തിലെ ഓരോ ചതുരത്തിന്റെയും ഉയരം എന്തിനെ സൂചിപ്പിക്കുന്നു?', a: 'ആ വിഭാഗത്തിന്റെ ആവൃത്തിയെ.', kind: 'recall' },
      { q: 'ആവൃത്തിച്ചതുരത്തിൽ ചതുരങ്ങളുടെ പാദമായി എടുക്കുന്നത് എന്തിനെയാണ്?', a: 'തിരശ്ചീന അക്ഷത്തിലെ ക്ലാസ് വിഭാഗത്തെ (വിസ്തൃതിയെ).', kind: 'recall' }
    ]
  },

  {
    id: 'm8.10.4.data-interpretation',
    sec: '8.10.4',
    kind: 'method',
    tier: 'core',
    title_en: 'Data Interpretation & Modal Class',
    title_ml: 'വിവര വിശകലനവും മോഡൽ വിഭാഗവും',
    oneLine_en: 'Interpreting frequency tables and histograms involves identifying the modal class (highest frequency) and cumulative data counts.',
    oneLine_ml: 'ആവൃത്തിപ്പട്ടികയിൽ നിന്നും ആവൃത്തിച്ചതുരത്തിൽ നിന്നും ഉയർന്ന ആവൃത്തിയുള്ള വിഭാഗവും (മോഡൽ വിഭാഗം) വിവരങ്ങളുടെ വിതരണവും കണ്ടെത്തുന്നു.',
    statement_en: `<p>Analyzing a statistical table or histogram allows us to extract valuable insights:</p>
      <ul>
        <li><b>Modal Class (മോഡൽ വിഭാഗം):</b> The class interval having the highest frequency (represented by the tallest rectangle in a histogram).</li>
        <li><b>Total Count:</b> The total number of items is the sum of frequencies across all intervals.</li>
        <li><b>Cumulative Analysis:</b> Answering questions like "how many students scored above $60$?" by summing frequencies of all intervals above $60$.</li>
      </ul>`,
    statement_ml: `<p>ആവൃത്തിപ്പട്ടികയിൽ നിന്നോ ആവൃത്തിച്ചതുരത്തിൽ നിന്നോ പ്രധാനപ്പെട്ട വിവരങ്ങൾ കണ്ടെത്താം:</p>
      <ul>
        <li><b>മോഡൽ വിഭാഗം:</b> ഏറ്റവും കൂടുതൽ ആവൃത്തിയുള്ള ക്ലാസ് വിഭാഗം (ആവൃത്തിച്ചതുരത്തിലെ ഏറ്റവും ഉയരമുള്ള ചതുരം).</li>
        <li><b>ആകെ എണ്ണം:</b> എല്ലാ വിഭാഗങ്ങളിലെയും ആവൃത്തികൾ കൂട്ടിയാൽ ആകെ നിരീക്ഷിച്ച വിവരങ്ങളുടെ എണ്ണം ലഭിക്കും.</li>
        <li><b>പ്രത്യേക കണ്ടെത്തലുകൾ:</b> "$60$-ൽ കൂടുതൽ സ്കോർ നേടിയവർ എത്രപേർ?" എന്ന ചോദ്യത്തിന് $60$-ന് മുകളിലുള്ള എല്ലാ വിഭാഗങ്ങളുടെയും ആവൃത്തികൾ കൂട്ടി ഉത്തരം കണ്ടെത്തുന്നു.</li>
      </ul>`,
    intuition_en: `<p>The tallest peak in a mountain range is immediately visible; similarly, the tallest bar in a histogram tells you where the greatest concentration of data lies.</p>`,
    intuition_ml: `<p>മലനിരകളിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടി പെട്ടെന്ന് ശ്രദ്ധയിൽപ്പെടുന്നതുപോലെ, ആവൃത്തിച്ചതുരത്തിലെ ഏറ്റവും ഉയർന്ന ചതുരം കൂടുതൽ വിവരങ്ങൾ എവിടെ കേന്ദ്രീകരിച്ചിരിക്കുന്നു എന്ന് ഒറ്റനോട്ടത്തിൽ കാണിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Maximum search over discrete set {f_i} finds index m such that f_m >= f_i for all i.',
      idea_ml: 'ആവൃത്തികളുടെ കൂട്ടത്തിൽ ഏറ്റവും വലിയ സംഖ്യ തിരഞ്ഞെടുക്കുന്നു.',
      why_en: 'The mode corresponds to the category with highest density.',
      why_ml: 'ഏറ്റവും ഉയർന്ന ആവൃത്തിയുള്ളതാണ് മോഡ് അല്ലെങ്കിൽ മോഡൽ വിഭാഗം.',
      rungs_en: [
        { why_en: 'Identify maximum frequency.', m: 'f_{\\max} = \\max(f_1, f_2, \\dots, f_k)' },
        { why_en: 'The corresponding interval is the modal class.', m: 'I_{\\text{modal}} = I_m \\text{ where } f_m = f_{\\max}' }
      ],
      rungs_ml: [
        { why_ml: 'ഏറ്റവും വലിയ ആവൃത്തി കണ്ടെത്തുന്നു.', m: 'f_{\\max} = \\text{ഏറ്റവും വലിയ ആവൃത്തി}' },
        { why_ml: 'അതിന് നേരെയുള്ള വിഭാഗമാണ് മോഡൽ വിഭാഗം.', m: '\\text{മോഡൽ വിഭാഗം} = I_{\\text{modal}}' }
      ]
    },
    needs: ['m8.10.3.histogram'],
    traps_en: [
      'Do not confuse the frequency of the modal class with the modal class interval itself!',
      'When asked "less than 40", do NOT include the 40-50 class.'
    ],
    traps_ml: [
      'മോഡൽ വിഭാഗവും ആ വിഭാഗത്തിന്റെ ആവൃത്തിയും തമ്മിൽ മാറിപ്പോകരുത്!',
      '"40-ൽ കുറവ്" എന്ന് പറയുമ്പോൾ 40-50 എന്ന വിഭാഗം കൂട്ടരുത്.'
    ],
    cards_en: [
      { q: 'In a histogram, which rectangle corresponds to the modal class?', a: 'The tallest rectangle.', kind: 'recall' },
      { q: 'If class intervals 10-20, 20-30, 30-40 have frequencies 5, 14, 8, what is the modal class?', a: '$\\mathbf{20 - 30}$ (since it has the highest frequency, 14).', kind: 'apply' },
      { q: 'How many observations are at least 20 in the above data?', a: '$14 + 8 = \\mathbf{22}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു ആവൃത്തിച്ചതുരത്തിൽ മോഡൽ വിഭാഗത്തെ കാണിക്കുന്നത് ഏത് ചതുരമാണ്?', a: 'ഏറ്റവും ഉയരമുള്ള ചതുരം.', kind: 'recall' },
      { q: '10-20, 20-30, 30-40 എന്നീ വിഭാഗങ്ങളുടെ ആവൃത്തികൾ 5, 14, 8 ആയാൽ മോഡൽ വിഭാഗം ഏതാണ്?', a: '$\\mathbf{20 - 30}$ (ഏറ്റവും ഉയർന്ന ആവൃത്തിയായ 14 ഉള്ളതിനാൽ).', kind: 'apply' },
      { q: 'മുകളിലെ വിവരങ്ങളിൽ 20-ഓ അതിൽ കൂടുതലോ വരുന്ന ആകെ എണ്ണം എത്ര?', a: '$14 + 8 = \\mathbf{22}$.', kind: 'apply' }
    ]
  }
);
