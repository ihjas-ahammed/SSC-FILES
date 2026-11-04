/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 11: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.11.1 Median of Raw & Ungrouped Data (മധ്യമം — ഒറ്റതിരിഞ്ഞ വിവരങ്ങളിൽ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.11.1.median-of-raw-data',
    sec: '10.11.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Median of Raw & Ungrouped Data',
    title_ml: 'മധ്യമം — ഒറ്റതിരിഞ്ഞ വിവരങ്ങളിൽ',
    oneLine_en: 'The median is the exact middle value of data arranged in ascending order; it divides the distribution into two equal halves.',
    oneLine_ml: 'വിവരങ്ങളെ ആരോഹണക്രമത്തിൽ ക്രമീകരിക്കുമ്പോൾ കൃത്യം നടുവിൽ വരുന്ന സംഖ്യയാണ് മധ്യമം; ഇത് വിവരങ്ങളെ രണ്ട് തുല്യ ഭാഗങ്ങളായി വിഭജിക്കുന്നു.',
    statement_en: `<p><b>Definition of Median:</b></p>
      <p>When a collection of $n$ numerical observations is arranged in ascending (or descending) order of magnitude, the value of the middle observation is called the <b>median</b>.</p>
      <p><b>Rules for Calculating Median of $n$ Observations:</b></p>
      <ul>
        <li><b>Case 1: When $n$ is Odd:</b> There is a single unique middle term at position:
        $$\\mathbf{\\text{Median} = \\left(\\frac{n + 1}{2}\\right)^{\\text{th}} \\text{ observation}}$$</li>
        <li><b>Case 2: When $n$ is Even:</b> There are two middle terms, at positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$. The median is their arithmetic mean:
        $$\\mathbf{\\text{Median} = \\frac{\\left(\\frac{n}{2}\\right)^{\\text{th}} \\text{ observation} + \\left(\\frac{n}{2} + 1\\right)^{\\text{th}} \\text{ observation}}{2}}$$</li>
      </ul>
      <p><b>Special Property:</b> For any set of numbers forming an arithmetic sequence, the arithmetic mean and the median are always equal.</p>`,
    statement_ml: `<p><b>മധ്യമത്തിന്റെ നിർവ്വചനം:</b></p>
      <p>$n$ സംഖ്യകളെ അവയുടെ അളവിനനുസരിച്ച് ചെറുതിൽ നിന്ന് വലുതിലേക്ക് ക്രമീകരിച്ചാൽ നടുവിൽ വരുന്ന സംഖ്യയാണ് <b>മധ്യമം</b>.</p>
      <p><b>മധ്യമം കാണാനുള്ള രീതി:</b></p>
      <ul>
        <li><b>$n$ ഒറ്റസംഖ്യയായാൽ:</b> കൃത്യം നടുവിൽ ഒരൊറ്റ സംഖ്യ മാത്രമേ ഉണ്ടാകൂ:
        $$\\mathbf{\\text{മധ്യമം} = \\left(\\frac{n + 1}{2}\\right)-\\text{ആം പദം}}$$</li>
        <li><b>$n$ ഇരട്ടസംഖ്യയായാൽ:</b> നടുവിൽ രണ്ട് സംഖ്യകൾ ($\\frac{n}{2}$ ആം പദവും $\\frac{n}{2} + 1$ ആം പദവും) വരുന്നു. അവയുടെ ശരാശരിയാണ് മധ്യമം:
        $$\\mathbf{\\text{മധ്യമം} = \\frac{\\frac{n}{2}-\\text{ആം പദം} + \\left(\\frac{n}{2} + 1\\right)-\\text{ആം പദം}}{2}}$$</li>
      </ul>
      <p><b>പ്രത്യേകത:</b> ഒരു സമാന്തരശ്രേണിയിലെ പദങ്ങൾക്ക് സമാന്തര ശരാശരിയും മധ്യമവും എപ്പോഴും തുല്യമായിരിക്കും.</p>`,
    intuition_en: `<p>If students stand in a line ordered by height, the student standing right in the middle represents the median height. Exactly half the students are shorter, and half are taller.</p>`,
    intuition_ml: `<p>കുട്ടികളെ ഉയരക്രമത്തിൽ വരിയായി നിർത്തിയാൽ ഏറ്റവും നടുവിൽ നിൽക്കുന്ന കുട്ടിയുടെ ഉയരമാണ് മധ്യമം. പകുതി കുട്ടികൾ ഇതിനേക്കാൾ ഉയരം കുറഞ്ഞവരും ബാക്കി പകുതി പേർ കൂടുതൽ ഉയരമുള്ളവരുമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Order statistics and symmetric quantile division of real data sequences.',
      idea_ml: 'ക്രമീകരിച്ച വിവരങ്ങളിൽ കൃത്യം നടുവിലുള്ള സ്ഥാനം വഴി തുല്യ വിഭജനം സാധ്യമാക്കുന്നു.',
      why_en: 'Arranging in monotone non-decreasing order guarantees that exactly 50% of observations lie at or below the median rank.',
      why_ml: 'ആരോഹണക്രമത്തിൽ ക്രമീകരിക്കുമ്പോൾ കൃത്യം പകുതി വിവരങ്ങൾ മധ്യമത്തിന് താഴെയും ബാക്കി പകുതി മുകളിലും ആയിരിക്കും.',
      rungs_en: [
        { why_en: 'Sort observations in non-decreasing order.', m: 'x_{(1)} \\le x_{(2)} \\le \\dots \\le x_{(n)}' },
        { why_en: 'For odd n = 2k + 1, the unique symmetric center index is (n + 1)/2 = k + 1.', m: '\\text{Median} = x_{(k+1)} = x_{\\left(\\frac{n+1}{2}\\right)}' },
        { why_en: 'For even n = 2k, the two central indices are n/2 = k and (n/2) + 1 = k + 1.', m: '\\text{Median} = \\frac{x_{(k)} + x_{(k+1)}}{2} = \\frac{x_{\\left(\\frac{n}{2}\\right)} + x_{\\left(\\frac{n}{2}+1\\right)}}{2}' }
      ],
      rungs_ml: [
        { why_ml: 'തന്നിരിക്കുന്ന വിവരങ്ങളെ ചെറുതിൽ നിന്ന് വലുതിലേക്ക് ക്രമീകരിക്കുന്നു.', m: 'x_{(1)} \\le x_{(2)} \\le \\dots \\le x_{(n)}' },
        { why_ml: '$n = 2k + 1$ ഒറ്റസംഖ്യയായാൽ നടുവിലുള്ള ഒറ്റ സ്ഥാനമാണ് $\\frac{n+1}{2} = k + 1$.', m: '\\text{മധ്യമം} = x_{(k+1)} = x_{\\left(\\frac{n+1}{2}\\right)}' },
        { why_ml: '$n = 2k$ ഇരട്ടസംഖ്യയായാൽ നടുവിലെ രണ്ട് സ്ഥാനങ്ങൾ $\\frac{n}{2} = k$ ഉം $\\frac{n}{2}+1 = k+1$ ഉം ആണ്.', m: '\\text{മധ്യമം} = \\frac{x_{(k)} + x_{(k+1)}}{2} = \\frac{x_{\\left(\\frac{n}{2}\\right)} + x_{\\left(\\frac{n}{2}+1\\right)}}{2}' }
      ]
    },
    traps_en: [
      'Finding the middle number without first sorting data in ascending order; unsorted data gives an invalid median.',
      'For even n, taking only the (n/2)th value instead of averaging the (n/2)th and (n/2 + 1)th values.'
    ],
    traps_ml: [
      'സംഖ്യകളെ ചെറുതിൽ നിന്ന് വലുതിലേക്ക് ക്രമീകരിക്കാതെ നടുവിലെ സംഖ്യ എടുക്കുന്നത്; വിവരങ്ങൾ ആദ്യം നിർബന്ധമായും ക്രമീകരിക്കണം.',
      '$n$ ഇരട്ടസംഖ്യയാകുമ്പോൾ നടുവിലെ രണ്ട് സംഖ്യകളുടെ ശരാശരി കാണാതെ വെറുതെ $\\frac{n}{2}$-ആം പദം മാത്രം എടുക്കുന്നത്.'
    ],
    cards_en: [
      { q: 'How is the median defined and computed for an odd number of observations n?', a: 'Sort the data in ascending order; the median is the single middle term at rank **$\\mathbf{\\frac{n+1}{2}}$**.', kind: 'recall' },
      { q: 'Find the median of the numbers: 24, 18, 12, 30, 15, 27.', a: 'Sorted: $12, 15, 18, 24, 27, 30$ ($n = 6$). Middle terms are 3rd ($18$) and 4th ($24$).\\nMedian $= \\frac{18 + 24}{2} = \\mathbf{21}$.', kind: 'apply' },
      { q: 'Prove that the mean and median of any finite arithmetic sequence are always equal.', a: 'In an arithmetic sequence, terms are symmetric about the center. For $n$ terms, both the mean and the median equal the average of the first and last terms: $\\mathbf{\\frac{x_1 + x_n}{2}}$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '$n$ ഒറ്റസംഖ്യയാകുമ്പോൾ വിവരങ്ങളുടെ മധ്യമം എങ്ങനെ കണക്കാക്കുന്നു?', a: 'വിവരങ്ങൾ ചെറുതിൽ നിന്ന് വലുതിലേക്ക് എഴുതി **$\\mathbf{\\frac{n+1}{2}}$**-ആം സ്ഥാനത്തെ സംഖ്യ കണ്ടെത്തുന്നു.', kind: 'recall' },
      { q: '$24, 18, 12, 30, 15, 27$ എന്നീ സംഖ്യകളുടെ മധ്യമം കാണുക.', a: 'ക്രമീകരിച്ചാൽ: $12, 15, 18, 24, 27, 30$ ($n = 6$). നടുവിലെ സംഖ്യകൾ $18, 24$.\\nമധ്യമം $= \\frac{18 + 24}{2} = \\mathbf{21}$.', kind: 'apply' },
      { q: 'ഒരു സമാന്തരശ്രേണിയിലെ സംഖ്യകൾക്ക് ശരാശരിയും മധ്യമവും തുല്യമായിരിക്കും എന്ന് തെളിയിക്കുക.', a: 'സമാന്തരശ്രേണിയിലെ പദങ്ങൾ കേന്ദ്രത്തെ ആസ്പദമാക്കി സമമിതമാണ്. അതിനാൽ ശരാശരിയും മധ്യമവും ആദ്യപദത്തിന്റെയും അവസാനപദത്തിന്റെയും ശരാശരിയായ $\\mathbf{\\frac{x_1 + x_n}{2}}$ ന് തുല്യമാണ്.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.2 Median of Frequency Distributions (ആവൃത്തി പട്ടികയിലെ മധ്യമം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.11.2.median-of-frequency-distributions',
    sec: '10.11.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Median of Frequency Distributions',
    title_ml: 'ആവൃത്തി പട്ടികയിലെ മധ്യമം',
    oneLine_en: 'For discrete frequency tables, cumulative frequencies determine positional ranks; the median corresponds to the observation at rank N/2.',
    oneLine_ml: 'ആവൃത്തി പട്ടികകളിൽ സഞ്ചയിത ആവൃത്തി ഉപയോഗിച്ച് സ്ഥാനങ്ങൾ നിർണ്ണയിക്കുകയും $N/2$ ആം സ്ഥാനത്തെ വില മധ്യമമായി കണ്ടെത്തുകയും ചെയ്യുന്നു.',
    statement_en: `<p><b>Median from a Discrete Frequency Table:</b></p>
      <ol>
        <li>Compute the <b>cumulative frequency ($cf$)</b> for each value by adding successive frequencies.</li>
        <li>Find the total frequency $N = \\sum f$.</li>
        <li>Identify the median positions:
          <ul>
            <li>If $N$ is odd, find the value at rank $\\frac{N + 1}{2}$.</li>
            <li>If $N$ is even, find the values at ranks $\\frac{N}{2}$ and $\\frac{N}{2} + 1$, and take their average.</li>
          </ul>
        </li>
        <li>Locate the first cumulative frequency that is greater than or equal to the median rank; the corresponding variable value $x$ is the median.</li>
      </ol>`,
    statement_ml: `<p><b>ആവൃത്തി പട്ടികയിൽ നിന്ന് മധ്യമം കാണുന്ന ഘട്ടങ്ങൾ:</b></p>
      <ol>
        <li>ഓരോ സംഖ്യയ്ക്കും മുൻപിലുള്ള ആവൃത്തികൾ കൂട്ടി <b>സഞ്ചയിത ആവൃത്തി ($cf$)</b> കാണുക.</li>
        <li>ആകെ ആവൃത്തി $N = \\sum f$ കാണുക.</li>
        <li>മധ്യമ സ്ഥാനം കണ്ടെത്തുക:
          <ul>
            <li>$N$ ഒറ്റസംഖ്യയായാൽ $\\frac{N + 1}{2}$ ആം സ്ഥാനത്തെ വില.</li>
            <li>$N$ ഇരട്ടസംഖ്യയായാൽ $\\frac{N}{2}$ ആം സ്ഥാനത്തെയും $\\frac{N}{2} + 1$ ആം സ്ഥാനത്തെയും വിലകളുടെ ശരാശരി.</li>
          </ul>
        </li>
        <li>ഈ സ്ഥാനം ഉൾപ്പെടുന്ന സഞ്ചയിത ആവൃത്തി കണ്ടെത്തി അതിന് നേരെയുള്ള അളവ് മധ്യമമായി എടുക്കുക.</li>
      </ol>`,
    intuition_en: `<p>Cumulative frequency tells you how many people have a value up to that category, making it simple to pinpoint which group holds person number $N/2$ without listing hundreds of separate individual entries.</p>`,
    intuition_ml: `<p>സഞ്ചയിത ആവൃത്തി എന്നത് ഓരോ ഘട്ടത്തിലും എത്ര പേർ ഉൾപ്പെട്ടു എന്ന് കാണിക്കുന്നു. എല്ലാ സംഖ്യകളും നീളത്തിൽ എഴുതാതെ തന്നെ $N/2$-ാമത്തെ ആൾ ഏത് ഗ്രൂപ്പിലാണ് എന്ന് ഇത് വഴി ഉടൻ കണ്ടെത്താം.</p>`,
    proof: {
      idea_en: 'Partitioning sorted cumulative rank intervals.',
      idea_ml: 'സഞ്ചയിത ആവൃത്തി വഴിയുള്ള സ്ഥാനീയ ഇടവേള കണ്ടെത്തൽ.',
      why_en: 'Each distinct observation value occupies a contiguous bracket of integer ranks from cf_{k-1} + 1 to cf_k.',
      why_ml: 'ഓരോ സംഖ്യയും ഉൾക്കൊള്ളുന്ന ക്രമ സ്ഥാനങ്ങളുടെ തുടർച്ചയായ പരിധി സഞ്ചയിത ആവൃത്തി കാണിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Rank interval for distinct value x_k with cumulative frequencies.', m: '\\text{Rank}(x_k) \\in [cf_{k-1} + 1, cf_k]' },
        { why_en: 'Locate the median target rank within the unique cumulative bracket.', m: 'cf_{k-1} < \\frac{N}{2} \\le cf_k' },
        { why_en: 'The corresponding value x_k is the median of the distribution.', m: '\\text{Median} = x_k' }
      ],
      rungs_ml: [
        { why_ml: '$x_k$ എന്ന അളവ് ഉൾക്കൊള്ളുന്ന സ്ഥാന പരിധി.', m: '\\text{സ്ഥാനം}(x_k) \\in [cf_{k-1} + 1, cf_k]' },
        { why_ml: 'മധ്യമ സ്ഥാനം ഏത് സഞ്ചയിത ആവൃത്തിയിലാണ് ഉൾപ്പെടുന്നത് എന്ന് കണ്ടെത്തുന്നു.', m: 'cf_{k-1} < \\frac{N}{2} \\le cf_k' },
        { why_ml: 'അതിന് നേരെയുള്ള അളവ് $x_k$ മധ്യമമായി ലഭിക്കുന്നു.', m: '\\text{മധ്യമം} = x_k' }
      ]
    },
    traps_en: [
      'Looking up the median rank in the frequency column f instead of the cumulative frequency column cf.',
      'Forgetting to check whether the middle two ranks for an even N fall into two different categories with different values.'
    ],
    traps_ml: [
      'മധ്യമ സ്ഥാനം തിരയുമ്പോൾ സഞ്ചയിത ആവൃത്തിക്ക് ($cf$) പകരം സാധാരണ ആവൃത്തി ($f$) നോക്കുന്നത്.',
      '$N$ ഇരട്ടസംഖ്യയാകുമ്പോൾ രണ്ട് നടുവിലെ സ്ഥാനങ്ങൾ രണ്ട് വ്യത്യസ്ത ഗ്രൂപ്പുകളിലാണോ എന്ന് ശ്രദ്ധിക്കാതിരിക്കുന്നത്.'
    ],
    cards_en: [
      { q: 'How does cumulative frequency help in finding the median of a frequency table?', a: 'It lists the running total of frequencies, instantly identifying the rank interval $[cf_{k-1} + 1, cf_k]$ for each data value without listing all observations.', kind: 'recall' },
      { q: 'If a frequency distribution has total frequency N = 41, which observation rank gives the median?', a: 'Rank is $\\frac{N + 1}{2} = \\frac{41 + 1}{2} = \\mathbf{21\\text{st}}$ observation.', kind: 'apply' },
      { q: 'If total frequency N = 50, and cf up to 20 marks is 24, and cf up to 25 marks is 32, what is the median mark?', a: 'Ranks 25th and 26th both fall into the group with mark 25 (ranks 25 to 32). Median mark is **25**.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ആവൃത്തി പട്ടികയിലെ മധ്യമം കാണാൻ സഞ്ചയിത ആവൃത്തി എങ്ങനെ സഹായിക്കുന്നു?', a: 'ഓരോ അളവും ഉൾക്കൊള്ളുന്ന സ്ഥാനങ്ങളുടെ പരിധി $[cf_{k-1} + 1, cf_k]$ പെട്ടെന്ന് കണ്ടെത്താൻ സഞ്ചയിത ആവൃത്തി സഹായിക്കുന്നു.', kind: 'recall' },
      { q: 'ആകെ ആവൃത്തി $N = 41$ ആയ ഒരു പട്ടികയിൽ എത്രാമത്തെ സ്ഥാനമാണ് മധ്യമം നൽകുന്നത്?', a: 'സ്ഥാനം $= \\frac{41 + 1}{2} = \\mathbf{21}$-ാമത്തെ പദമാണ്.', kind: 'apply' },
      { q: 'ആകെ ആവൃത്തി $N = 50$. മാർക്ക് 20 വരെയുള്ള $cf = 24$ ഉം, മാർക്ക് 25 വരെയുള്ള $cf = 32$ ഉം ആയാൽ മധ്യമ മാർക്ക് എത്ര?', a: '25, 26 സ്ഥാനങ്ങൾ മാർക്ക് 25 ന്റെ പരിധിയിലാണ് (25 മുതൽ 32 വരെ). അതിനാൽ മധ്യമ മാർക്ക് **$25$** ആണ്.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.3 Median of Grouped Continuous Distributions (വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ മധ്യമം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.11.3.median-of-grouped-distributions',
    sec: '10.11.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Median of Grouped Continuous Distributions',
    title_ml: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ മധ്യമം',
    oneLine_en: 'In grouped data, the median class contains N/2; values are assumed evenly spaced within the median class using linear interpolation: M = L + ((N/2 - cf)/f) * h.',
    oneLine_ml: 'വർഗ്ഗീകരിച്ച പട്ടികകളിൽ $N/2$ അടങ്ങിയ ക്ലാസാണ് മധ്യമ ക്ലാസ്; ക്ലാസിനുള്ളിൽ അളവുകൾ തുല്യ അകലത്തിൽ സ്ഥിതിചെയ്യുന്നു എന്ന സങ്കല്പത്തിലൂടെ മധ്യമം കണ്ടെത്തുന്നു.',
    statement_en: `<p><b>SCERT Linear Interpolation Method for Grouped Data:</b></p>
      <ol>
        <li>Find total frequency $N$ and compute cumulative frequencies.</li>
        <li>Identify the <b>median class</b> containing observation $\\frac{N}{2}$.</li>
        <li><b>Textbook Principle (Equal Subdivision):</b> If the median class is $L_1 - L_2$ with class width $h = L_2 - L_1$ and frequency $f$, assume the $f$ observations divide the interval of length $h$ into $f$ equal parts (each of step size $d = \\frac{h}{f}$).
        <br/>The standard SSLC median formula is:
        $$\\mathbf{\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h}$$
        where:
        <ul>
          <li>$L$ = Lower limit of the median class</li>
          <li>$N$ = Total number of observations</li>
          <li>$cf$ = Cumulative frequency of the class preceding the median class</li>
          <li>$f$ = Frequency of the median class</li>
          <li>$h$ = Class width (size of the median class interval)</li>
        </ul>
        </li>
      </ol>`,
    statement_ml: `<p><b>വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ മധ്യമ സൂത്രവാക്യം:</b></p>
      <ol>
        <li>ആകെ ആവൃത്തി $N$ ഉം സഞ്ചയിത ആവൃത്തികളും കണ്ടെത്തുക.</li>
        <li>$\\frac{N}{2}$ ആം പദം ഉൾപ്പെടുന്ന <b>മധ്യമ ക്ലാസ്</b> കണ്ടെത്തുക.</li>
        <li><b>പാഠപുസ്തക തത്വം (തുല്യ വിഭജനം):</b> മധ്യമ ക്ലാസിലെ ആവൃത്തി $f$ ഉം ക്ലാസ് നീളം $h$ ഉം ആയാൽ, ഈ ക്ലാസിലെ ഓരോ സംഖ്യയ്ക്കും ഇടയിലുള്ള അകലം $d = \\frac{h}{f}$ ആയി സങ്കൽപ്പിക്കുന്നു.
        <br/>മധ്യമ സൂത്രവാക്യം:
        $$\\mathbf{\\text{മധ്യമം} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h}$$
        ഇവിടെ:
        <ul>
          <li>$L$ = മധ്യമ ക്ലാസിന്റെ അധോപരിധി</li>
          <li>$N$ = ആകെ ആവൃത്തി</li>
          <li>$cf$ = തൊട്ടുമുൻപിലെ ക്ലാസിന്റെ സഞ്ചയിത ആവൃത്തി</li>
          <li>$f$ = മധ്യമ ക്ലാസിന്റെ ആവൃത്തി</li>
          <li>$h$ = ക്ലാസ് നീളം</li>
        </ul>
        </li>
      </ol>`,
    intuition_en: `<p>Since individual values inside a grouped class interval (e.g., 20-30) are not known, we assume they are distributed at perfectly equal spacing across the interval. The median pinpoint is calculated via linear proportionality.</p>`,
    intuition_ml: `<p>ഒരു ക്ലാസിനുള്ളിലെ (ഉദാ: 20-30) വ്യക്തികളുടെ കൃത്യമായ അളവ് അറിയില്ലാത്തതിനാൽ, ആ ക്ലാസിലെ അളവുകൾ തുല്യ അകലത്തിൽ നിരന്നിരിക്കുന്നു എന്ന് സങ്കൽപ്പിച്ചാണ് മധ്യമം കണക്കാക്കുന്നത്.</p>`,
    proof: {
      idea_en: 'Linear interpolation across uniform distribution within the median class.',
      idea_ml: 'ക്ലാസ് ഇടവേളയിലെ രേഖീയ അനുപാത വിഭജനം.',
      why_en: 'Assuming uniform distribution gives linear proportion between fraction of frequencies and fraction of interval width.',
      why_ml: 'ആവൃത്തികൾ തുല്യ അകലത്തിൽ വീതിക്കപ്പെടുന്നു എന്ന സങ്കല്പം രേഖീയ അനുപാതം ഉറപ്പാക്കുന്നു.',
      rungs_en: [
        { why_en: 'Identify the median rank N/2 and locate the median class [L, L + h].', m: 'cf \\le \\frac{N}{2} \\le cf + f' },
        { why_en: 'Assume uniform dispersion across class interval [L, L + h], giving step width d = h/f.', m: 'd = \\frac{h}{f}' },
        { why_en: 'The number of observations needed inside the median class beyond preceding cumulative frequency is N/2 - cf.', m: 'k = \\frac{N}{2} - cf' },
        { why_en: 'Linear interpolation adds proportional distance to lower boundary L.', m: '\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h' }
      ],
      rungs_ml: [
        { why_ml: 'ആകെ ആവൃത്തിയുടെ പകുതിയായ $N/2$ ഉൾപ്പെടുന്ന മധ്യമ ക്ലാസ് $[L, L + h]$ കണ്ടെത്തുന്നു.', m: 'cf \\le \\frac{N}{2} \\le cf + f' },
        { why_ml: 'ക്ലാസിനുള്ളിൽ വിവരങ്ങൾ തുല്യ അകലത്തിൽ നിരന്നിരിക്കുന്നു എന്ന് സങ്കൽപ്പിച്ചാൽ ഓരോ പടിയുടെയും വീതി $d = h/f$.', m: 'd = \\frac{h}{f}' },
        { why_ml: 'മുൻപിലെ സഞ്ചയിത ആവൃത്തിക്ക് മുകളിൽ മധ്യമ ക്ലാസിൽ ആവശ്യമായ പദങ്ങളുടെ എണ്ണം $k = N/2 - cf$.', m: 'k = \\frac{N}{2} - cf' },
        { why_ml: 'അധോപരിധി $L$ നോട് അനുപാത അകലം കൂട്ടുമ്പോൾ മധ്യമ സൂത്രവാക്യം ലഭിക്കുന്നു.', m: '\\text{മധ്യമം} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h' }
      ]
    },
    traps_en: [
      'Using the cumulative frequency of the median class itself for cf, instead of the PRECEDING class.',
      'Mixing up the class frequency f with the cumulative frequency cf.'
    ],
    traps_ml: [
      '$cf$ ന്റെ വിലയായി തൊട്ടുമുൻപിലെ ക്ലാസിന്റെ സഞ്ചയിത ആവൃത്തിക്ക് പകരം മധ്യമ ക്ലാസിലെ സഞ്ചയിത ആവൃത്തി തന്നെ നൽകുന്നത്.',
      'മധ്യമ ക്ലാസിന്റെ ആവൃത്തിയായ $f$ ഉം സഞ്ചയിത ആവൃത്തിയായ $cf$ ഉം പരസ്പരം മാറിപ്പോകുന്നത്.'
    ],
    cards_en: [
      { q: 'State the formula for finding the median of grouped data and define each term.', a: '$\\mathbf{\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h}$, where $L$ is lower limit of median class, $N$ is total frequency, $cf$ is preceding cumulative frequency, $f$ is median class frequency, and $h$ is class width.', kind: 'recall' },
      { q: 'In a grouped distribution, median class is 40 - 50, L = 40, N = 60, cf = 22, f = 16, h = 10. Find the median.', a: '$\\text{Median} = 40 + \\left(\\frac{30 - 22}{16}\\right) \\times 10 = 40 + \\left(\\frac{8}{16}\\right) \\times 10 = 40 + 5 = \\mathbf{45}$.', kind: 'apply' },
      { q: 'Why do we assume equal subdivision of class interval in computing the median of grouped data?', a: 'Because individual observations within the interval are not known, uniform spacing is the fairest linear approximation for the true distribution.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ മധ്യമ സൂത്രവാക്യവും അതിലെ ചിഹ്നങ്ങളുടെ അർത്ഥവും എഴുതുക.', a: '$\\mathbf{\\text{മധ്യമം} = L + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h}$. ഇവിടെ $L$ അധോപരിധി, $N$ ആകെ ആവൃത്തി, $cf$ മുൻപിലെ സഞ്ചയിത ആവൃത്തി, $f$ മധ്യമ ക്ലാസിലെ ആവൃത്തി, $h$ ക്ലാസ് നീളം.', kind: 'recall' },
      { q: 'മധ്യമ ക്ലാസ് $40 - 50, L = 40, N = 60, cf = 22, f = 16, h = 10$ ആയാൽ മധ്യമം എത്ര?', a: 'മധ്യമം $= 40 + \\left(\\frac{30 - 22}{16}\\right) \\times 10 = 40 + 5 = \\mathbf{45}$.', kind: 'apply' },
      { q: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിൽ മധ്യമം കാണുമ്പോൾ ക്ലാസ് ഇടവേള തുല്യമായി വിഭജിക്കപ്പെടുന്നു എന്ന് സങ്കൽപ്പിക്കുന്നത് എന്തുകൊണ്ട്?', a: 'ക്ലാസിനുള്ളിലെ കൃത്യമായ അളവുകൾ ലഭ്യമല്ലാത്തതിനാൽ, ഏറ്റവും യുക്തിസഹമായ ഏകദേശ കണക്കാക്കലിനായാണ് തുല്യ അകലം സങ്കൽപ്പിക്കുന്നത്.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.11.4 Comparing Mean and Median (ശരാശരിയും മധ്യമവും — താരതമ്യം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.11.4.comparing-mean-and-median',
    sec: '10.11.4',
    kind: 'concept',
    tier: 'core',
    title_en: 'Comparing Mean and Median',
    title_ml: 'ശരാശരിയും മധ്യമവും — താരതമ്യം',
    oneLine_en: 'Mean considers all values and is sensitive to extreme outliers; median represents the physical middle and is robust against skewed or extreme values.',
    oneLine_ml: 'ശരാശരി എല്ലാ വിവരങ്ങളെയും പരിഗണിക്കുന്നു, അതിനാൽ തീവ്രവിലകൾ അതിനെ ബാധിക്കുന്നു; മധ്യമം നടുവിലുള്ള വിലയായതിനാൽ അസാധാരണ വലിയ സംഖ്യകളാൽ മാറുന്നില്ല.',
    statement_en: `<p><b>Comparison between Arithmetic Mean and Median:</b></p>
      <table style="width:100%; border-collapse:collapse; text-align:left;" border="1">
        <thead>
          <tr style="background:#f0f4f8;">
            <th>Feature</th><th>Arithmetic Mean (ശരാശരി)</th><th>Median (മധ്യമം)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Definition</b></td>
            <td>Sum of all values divided by total count: $\\bar{x} = \\frac{\\sum x}{n}$.</td>
            <td>Positional middle value of sorted data.</td>
          </tr>
          <tr>
            <td><b>Sensitivity to Outliers</b></td>
            <td>Highly sensitive: a single extremely large or small value drastically distorts the mean.</td>
            <td>Robust: completely unaffected by extreme outlier magnitudes.</td>
          </tr>
          <tr>
            <td><b>Best Used For</b></td>
            <td>Symmetric data with no extreme values (e.g., test scores, heights).</td>
            <td>Skewed data (e.g., household incomes, wealth, land prices).</td>
          </tr>
          <tr>
            <td><b>Algebraic Treatment</b></td>
            <td>Amenable to algebraic manipulations: $\\sum x = n\\bar{x}$.</td>
            <td>Purely positional; not directly combinable algebraically.</td>
          </tr>
        </tbody>
      </table>`,
    statement_ml: `<p><b>ശരാശരിയും മധ്യമവും തമ്മിലുള്ള താരതമ്യം:</b></p>
      <table style="width:100%; border-collapse:collapse; text-align:left;" border="1">
        <thead>
          <tr style="background:#f0f4f8;">
            <th>സവിശേഷത</th><th>സമാന്തര ശരാശരി</th><th>മധ്യമം</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>നിർവ്വചനം</b></td>
            <td>എല്ലാ സംഖ്യകളുടെയും തുകയെ ആകെ എണ്ണം കൊണ്ട് ഹരിച്ചത്: $\\bar{x} = \\frac{\\sum x}{n}$.</td>
            <td>ക്രമീകരിച്ച വിവരങ്ങളുടെ നടുവിലുള്ള വില.</td>
          </tr>
          <tr>
            <td><b>തീവ്രവിലകളുടെ സ്വാധീനം</b></td>
            <td>കൂടുതൽ ബാധിക്കുന്നു: വളരെ വലിയ ഒരു സംഖ്യ വന്നാൽ ശരാശരി വല്ലാതെ കൂടും.</td>
            <td>ബാധിക്കുന്നില്ല: തീവ്രവിലകൾ മധ്യമത്തെ സ്വാധീനിക്കുന്നില്ല.</td>
          </tr>
          <tr>
            <td><b>അനുയോജ്യമായ സന്ദർഭം</b></td>
            <td>തീവ്രവിലകൾ ഇല്ലാത്ത സാധാരണ അളവുകൾ (പരീക്ഷാ മാർക്ക്, ഉയരം, ഭാരം).</td>
            <td>വരുമാനം, സ്വത്ത് തുടങ്ങിയ അസമത്വമുള്ള വിവരങ്ങൾ പഠിക്കാൻ.</td>
          </tr>
        </tbody>
      </table>`,
    intuition_en: `<p>If $9$ workers earn Rs $10,000$ each and the boss earns Rs $1,000,000$, the arithmetic mean salary is over Rs $100,000$ (misleadingly high!), but the median is Rs $10,000$ (faithfully reflecting the reality of ordinary workers).</p>`,
    intuition_ml: `<p>$9$ തൊഴിലാളികൾക്ക് $10,000$ രൂപയും ഉടമയ്ക്ക് $10$ ലക്ഷം രൂപയും വരുമാനമുണ്ടെങ്കിൽ ശരാശരി ഒരു ലക്ഷത്തിന് മുകളിലാകും. എന്നാൽ മധ്യമം കൃത്യമായി $10,000$ രൂപയായിരിക്കും. സാധാരണക്കാരുടെ അവസ്ഥ മനസ്സിലാക്കാൻ മധ്യമമാണ് ഏറ്റവും ഉത്തമം.</p>`,
    proof: {
      idea_en: 'Breakdown point and resistance of statistical estimators.',
      idea_ml: 'വിവരങ്ങളിലെ മാറ്റങ്ങളെ പ്രതിരോധിക്കാനുള്ള ശേഷി താരതമ്യം ചെയ്യുന്നു.',
      why_en: 'Mean has a breakdown point of 0 (a single infinite value sends mean to infinity); median has a breakdown point of 50%.',
      why_ml: 'ഒരു വലിയ സംഖ്യ ശരാശരിയെ മാറ്റുമെങ്കിലും 50% വിവരങ്ങൾ മാറിയാലേ മധ്യമം മാറുകയുള്ളൂ.',
      rungs_en: [
        { why_en: 'The arithmetic mean incorporates every individual observation in its sum.', m: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^n x_i' },
        { why_en: 'An extreme outlier shifts the sum and consequently distorts the mean.', m: 'x_n \\to \\infty \\implies \\bar{x} \\to \\infty' },
        { why_en: 'The median position depends solely on order rank, completely insulating it from magnitude of extremes.', m: '\\text{Median} = x_{\\left(\\frac{n+1}{2}\\right)}' }
      ],
      rungs_ml: [
        { why_ml: 'സമാന്തര ശരാശരി എല്ലാ വിവരങ്ങളെയും കൂട്ടി ആകെ എണ്ണം കൊണ്ട് ഹരിക്കുന്നു.', m: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^n x_i' },
        { why_ml: 'വളരെ വലിയ ഒരു സംഖ്യ വന്നാൽ അത് തുകയെ വർദ്ധിപ്പിച്ച് ശരാശരിയെ വല്ലാതെ മാറ്റുന്നു.', m: 'x_n \\to \\infty \\implies \\bar{x} \\to \\infty' },
        { why_ml: 'മധ്യമം നടുവിലെ സ്ഥാനത്തെ മാത്രം ആശ്രയിക്കുന്നതിനാൽ അറ്റങ്ങളിലെ സംഖ്യകളുടെ വലിപ്പം അതിനെ ബാധിക്കുന്നില്ല.', m: '\\text{മധ്യമം} = x_{\\left(\\frac{n+1}{2}\\right)}' }
      ]
    },
    traps_en: [
      'Assuming mean and median are always identical; they coincide only in symmetric distributions and diverge sharply in skewed data.',
      'Choosing the mean when reporting economic variables like income or wealth where a tiny fraction of extreme earners skews the average.'
    ],
    traps_ml: [
      'ശരാശരിയും മധ്യമവും എപ്പോഴും തുല്യമായിരിക്കും എന്ന് കരുതുന്നത്; വിവരങ്ങൾ തികച്ചും സമമിതമാകുമ്പോൾ മാത്രമേ അവ തുല്യമാകൂ.',
      'വരുമാനം, സമ്പത്ത് തുടങ്ങിയ അസമത്വമുള്ള കാര്യങ്ങൾ പഠിക്കുമ്പോൾ ശരാശരിയെ ആശ്രയിക്കുന്നത്; ഇത്തരം സന്ദർഭങ്ങളിൽ മധ്യമമാണ് ശരിയായ അളവ്.'
    ],
    cards_en: [
      { q: 'Why is the median considered a more robust measure of central tendency than the arithmetic mean?', a: 'Because the median depends solely on **positional rank** and is unaffected by extreme outlier values, whereas a single extreme outlier drastically distorts the mean.', kind: 'recall' },
      { q: 'Five employees earn Rs 10000, 12000, 14000, 16000, and Rs 148000. Calculate both mean and median.', a: 'Sum $= 200000$, Mean $= 200000 / 5 = \\mathbf{40000}$ Rs.\\nSorted middle 3rd value: Median $= \\mathbf{14000}$ Rs.', kind: 'apply' },
      { q: 'When are the arithmetic mean and the median of a dataset guaranteed to be equal?', a: 'When the dataset is **perfectly symmetric** about its center (such as any finite arithmetic sequence).', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ശരാശരിയേക്കാൾ മധ്യമം കൂടുതൽ സ്ഥിരതയുള്ള അളവായി കരുതുന്നത് എന്തുകൊണ്ട്?', a: 'മധ്യമം **സ്ഥാനത്തെ മാത്രം** ആശ്രയിക്കുന്നതിനാലും അറ്റങ്ങളിലെ തീവ്രവിലകൾ അതിനെ മാറ്റാത്തതിനാലും ആണ്.', kind: 'recall' },
      { q: 'അഞ്ച് പേരുടെ ശമ്പളം 10000, 12000, 14000, 16000, 148000 രൂപയാണ്. ശരാശരിയും മധ്യമവും കാണുക.', a: 'തുക $= 200000$, ശരാശരി $= \\mathbf{40000}$ രൂപ.\\nനടുവിലെ മൂന്നാമത്തെ സംഖ്യ: മധ്യമം $= \\mathbf{14000}$ രൂപ.', kind: 'apply' },
      { q: 'ഒരു വിവര ശേഖരത്തിന്റെ ശരാശരിയും മധ്യമവും എപ്പോഴാണ് തുല്യമാകുന്നത്?', a: 'വിവരങ്ങൾ കേന്ദ്രത്തിന് ഇരുവശത്തും **തികച്ചും സമമിതമാകുമ്പോൾ** (ഉദാഹരണത്തിന് ഏതൊരു സമാന്തരശ്രേണിയിലും).', kind: 'trap' }
    ]
  }
);
