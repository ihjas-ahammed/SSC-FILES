/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 11: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
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
        <li><b>Case 1: When $n$ is Odd:</b> There is a single unique middle term:
        $$\\mathbf{\\text{Median} = \\left(\\frac{n + 1}{2}\\right)^{\\text{th}} \\text{ observation}}$$</li>
        <li><b>Case 2: When $n$ is Even:</b> There are two middle terms, at positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$. The median is their arithmetic mean:
        $$\\mathbf{\\text{Median} = \\frac{\\left(\\frac{n}{2}\\right)^{\\text{th}} \\text{ term} + \\left(\\frac{n}{2} + 1\\right)^{\\text{th}} \\text{ term}}{2}}$$</li>
      </ul>`,
    statement_ml: `<p><b>മധ്യമത്തിന്റെ നിർവ്വചനം:</b></p>
      <p>$n$ സംഖ്യകളെ അവയുടെ അളവിനനുസരിച്ച് ചെറുതിൽ നിന്ന് വലുതിലേക്ക് ക്രമീകരിച്ചാൽ നടുവിൽ വരുന്ന സംഖ്യയാണ് <b>മധ്യമം</b>.</p>
      <p><b>മധ്യമം കാണാനുള്ള രീതി:</b></p>
      <ul>
        <li><b>$n$ ഒറ്റസംഖ്യയായാൽ:</b> കൃത്യം നടുവിൽ ഒരൊറ്റ സംഖ്യ മാത്രമേ ഉണ്ടാകൂ:
        $$\\mathbf{\\text{മധ്യമം} = \\left(\\frac{n + 1}{2}\\right)-\\text{ആം പദം}}$$</li>
        <li><b>$n$ ഇരട്ടസംഖ്യയായാൽ:</b> നടുവിൽ രണ്ട് സംഖ്യകൾ ($\\frac{n}{2}$ ആം പദവും $\\frac{n}{2} + 1$ ആം പദവും) വരുന്നു. അവയുടെ ശരാശരിയാണ് മധ്യമം:
        $$\\mathbf{\\text{മധ്യമം} = \\frac{\\frac{n}{2}-\\text{ആം പദം} + \\left(\\frac{n}{2} + 1\\right)-\\text{ആം പദം}}{2}}$$</li>
      </ul>`,
    intuition_en: 'If students stand in a line ordered by height, the student standing right in the middle is the median height. Half the students are shorter, and half are taller.',
    intuition_ml: 'കുട്ടികളെ ഉയരക്രമത്തിൽ വരിയായി നിർത്തിയാൽ ഏറ്റവും നടുവിൽ നിൽക്കുന്ന കുട്ടിയുടെ ഉയരമാണ് മധ്യമം. പകുതി കുട്ടികൾ ഇതിനേക്കാൾ ഉയരം കുറഞ്ഞവരും ബാക്കി പകുതി പേർ കൂടുതൽ ഉയരമുള്ളവരുമായിരിക്കും.',
    proof: {
      idea_en: 'Order statistics and positional invariant quantile measure.',
      idea_ml: 'സ്ഥാനീയ ക്രമീകരണത്തിലൂടെ വിവരങ്ങളെ തുല്യമായി വിഭജിക്കുന്നു.',
      why_en: 'Arranging in monotone non-decreasing order places 50% mass below and 50% mass above the median rank.',
      why_ml: 'ചെറുതിൽ നിന്ന് വലുതിലേക്ക് ക്രമീകരിക്കുമ്പോൾ കൃത്യം 50% വിവരങ്ങൾ മധ്യമത്തിന് താഴെയും 50% വിവരങ്ങൾ മുകളിലും ആയിരിക്കും.',
      rungs: [
        {
          title_en: 'Sorting Rank',
          title_ml: 'സ്ഥാനീയ ക്രമീകരണം',
          detail_en: 'Sort data $x_{(1)} \\le x_{(2)} \\le \\dots \\le x_{(n)}$.',
          detail_ml: 'വിവരങ്ങളെ $x_{(1)} \\le x_{(2)} \\le \\dots \\le x_{(n)}$ എന്ന് ക്രമീകരിക്കുന്നു.'
        },
        {
          title_en: 'Quantile Selection',
          title_ml: 'മധ്യമ തിരഞ്ഞെടുപ്പ്',
          detail_en: 'For odd $n = 2k + 1$, position is $k + 1 = \\frac{n+1}{2}$. For even $n = 2k$, middle ranks are $k$ and $k+1$.',
          detail_ml: '$n$ ഒറ്റസംഖ്യയായാൽ സ്ഥാനം $\\frac{n+1}{2}$; ഇരട്ടയായാൽ $\\frac{n}{2}, \\frac{n}{2}+1$ എന്നിവയുടെ ശരാശരി.',
          sub_rungs: []
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Finding the middle number without first sorting the data in ascending order.',
        fix_en: 'Data MUST always be sorted in ascending order before locating the middle term.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'സംഖ്യകളെ ചെറുതിൽ നിന്ന് വലുതിലേക്ക് ക്രമീകരിക്കാതെ നടുവിലെ സംഖ്യ എടുക്കുന്നത്.',
        fix_ml: 'മധ്യമം കാണുന്നതിന് മുൻപ് തന്നിരിക്കുന്ന വിവരങ്ങൾ നിർബന്ധമായും ക്രമത്തിൽ എഴുതണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the median of the numbers: 7, 2, 9, 4, 5.',
        a: 'Sorted: 2, 4, 5, 7, 9. With n = 5 (odd), the middle 3rd number is 5.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '7, 2, 9, 4, 5 എന്നീ സംഖ്യകളുടെ മധ്യമം കാണുക.',
        a: 'ക്രമീകരിച്ചാൽ: 2, 4, 5, 7, 9. നടുവിലെ മൂന്നാമത്തെ സംഖ്യ 5 ആണ്.'
      }
    ]
  },
  {
    id: 'm10.11.2.median-of-frequency-distributions',
    sec: '10.11.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Median of Frequency Distributions',
    title_ml: 'ആവൃത്തി പട്ടികയിലെ മധ്യമം',
    oneLine_en: 'For discrete frequency tables, cumulative frequencies determine the positions of observations; the median corresponds to the value at position N/2.',
    oneLine_ml: 'ആവൃത്തി പട്ടികകളിൽ സഞ്ചയിത ആവൃത്തി ഉപയോഗിച്ച് നിരീക്ഷണങ്ങളുടെ സ്ഥാനം നിർണ്ണയിക്കുകയും N/2 ആം സ്ഥാനത്തെ വില മധ്യമമായി കണ്ടെത്തുകയും ചെയ്യുന്നു.',
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
    intuition_en: 'Cumulative frequency tells you how many people have a value up to that point, making it easy to see which group holds person number N/2 without writing out all 100 or 500 individual numbers.',
    intuition_ml: 'സഞ്ചയിത ആവൃത്തി എന്നത് ഓരോ ഘട്ടത്തിലും എത്ര പേർ ഉൾപ്പെട്ടു എന്ന് കാണിക്കുന്നു. എല്ലാ സംഖ്യകളും നീളത്തിൽ എഴുതാതെ തന്നെ N/2 ആമത്തെ ആൾ ഏത് ഗ്രൂപ്പിലാണ് എന്ന് ഇത് വഴി ഉടൻ കണ്ടെത്താം.',
    proof: {
      idea_en: 'Step-function accumulation of mass.',
      idea_ml: 'സഞ്ചയിത ആവൃത്തി വഴിയുള്ള സ്ഥാന നിർണ്ണയം.',
      why_en: 'Because cumulative frequency identifies exact intervals of ranks occupied by each distinct value.',
      why_ml: 'ഓരോ സംഖ്യയും ഉൾക്കൊള്ളുന്ന സ്ഥാനങ്ങളുടെ പരിധി സഞ്ചയിത ആവൃത്തി കൃത്യമായി കാണിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Cumulative Rank Range',
          title_ml: 'സഞ്ചയിത സ്ഥാന പരിധി',
          detail_en: 'Value $x_k$ occupies ranks from $cf_{k-1} + 1$ to $cf_k$.',
          detail_ml: '$x_k$ എന്ന അളവ് $cf_{k-1} + 1$ മുതൽ $cf_k$ വരെയുള്ള സ്ഥാനങ്ങൾ കൈവശം വെക്കുന്നു.'
        },
        {
          title_en: 'Target Rank Match',
          title_ml: 'ലക്ഷ്യ സ്ഥാന പൊരുത്തം',
          detail_en: 'The median rank $N/2$ falls into the unique interval satisfying $cf_{k-1} < N/2 \\le cf_k$, identifying $x_k$ as the median.',
          detail_ml: '$N/2$ എന്ന സ്ഥാനം $cf_{k-1} < N/2 \\le cf_k$ എന്ന സഞ്ചയിത ആവൃത്തിയിൽ ഉൾപ്പെടുന്നതിനാൽ $x_k$ മധ്യമമാകുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Confusing frequency f with cumulative frequency cf when looking up the value.',
        fix_en: 'Always look up the median rank N/2 in the CUMULATIVE frequency column, not the frequency column.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'സ്ഥാനം നോക്കുമ്പോൾ സഞ്ചയിത ആവൃത്തിക്ക് (cf) പകരം ആവൃത്തി (f) നോക്കുന്നത്.',
        fix_ml: 'N/2 എന്ന സ്ഥാനം സഞ്ചയിത ആവൃത്തിയിലാണ് നോക്കേണ്ടത്, സാധാരണ ആവൃത്തിയിലല്ല.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'If total frequency N = 50, which positions determine the median?',
        a: 'Positions 50/2 = 25th and (25 + 1) = 26th observations; the median is their average.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ആകെ ആവൃത്തി N = 50 ആയാൽ ഏതെല്ലാം സ്ഥാനങ്ങളിലെ വിലകളാണ് മധ്യമം നിർണ്ണയിക്കുന്നത്?',
        a: '25-ാമത്തെയും 26-ാമത്തെയും സ്ഥാനങ്ങളിലെ വിലകളുടെ ശരാശരി.'
      }
    ]
  },
  {
    id: 'm10.11.3.median-of-grouped-distributions',
    sec: '10.11.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Median of Grouped Continuous Distributions',
    title_ml: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ മധ്യമം',
    oneLine_en: 'In grouped data, the median class contains N/2; values are assumed evenly spaced within the median class using linear interpolation: M = L + ((N/2 - cf)/f) * h.',
    oneLine_ml: 'വർഗ്ഗീകരിച്ച പട്ടികകളിൽ N/2 അടങ്ങിയ ക്ലാസാണ് മധ്യമ ക്ലാസ്; ക്ലാസിനുള്ളിൽ അളവുകൾ തുല്യ അകലത്തിൽ സ്ഥിതിചെയ്യുന്നു എന്ന സങ്കല്പത്തിലൂടെ മധ്യമം കണ്ടെത്തുന്നു.',
    statement_en: `<p><b>SCERT Linear Interpolation Method for Grouped Data:</b></p>
      <ol>
        <li>Find total frequency $N$ and compute cumulative frequencies.</li>
        <li>Identify the <b>median class</b> containing observation $\\frac{N}{2}$.</li>
        <li><b>Textbook Method (Equal Subdivision):</b> If the median class is $L_1 - L_2$ with class width $h = L_2 - L_1$ and frequency $f$, assume the $f$ observations divide the interval of length $h$ into $f$ equal parts (each of length $\\frac{h}{f}$).
        <br/>If we need the $k^{\\text{th}}$ observation in this class (where $k = \\frac{N}{2} - cf$), the median is:
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
        <li><b>പാഠപുസ്തക രീതി (തുല്യ വിഭജനം):</b> മധ്യമ ക്ലാസിലെ ആവൃത്തി $f$ ഉം ക്ലാസ് നീളം $h$ ഉം ആയാൽ, ഈ ക്ലാസിലെ ഓരോ സംഖ്യയ്ക്കും ഇടയിലുള്ള അകലം $\\frac{h}{f}$ ആയി സങ്കൽപ്പിക്കുന്നു.
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
    intuition_en: 'Since individual values inside a grouped class (e.g., 20-30) are not known, we assume they are distributed at perfectly equal spacing across the interval.',
    intuition_ml: 'ഒരു ക്ലാസിനുള്ളിലെ (ഉദാ: 20-30) കുട്ടികളുടെ കൃത്യമായ മാർക്ക് അറിയില്ലാത്തതിനാൽ, ആ ക്ലാസിലെ കുട്ടികൾ തുല്യ അകലത്തിൽ നിരന്നിരിക്കുന്നു എന്ന് സങ്കൽപ്പിച്ചാണ് മധ്യമം കണക്കാക്കുന്നത്.',
    proof: {
      idea_en: 'Linear interpolation across uniform probability density.',
      idea_ml: 'ക്ലാസ് ഇടവേളയിലെ രേഖീയ അനുപാത വിഭജനം.',
      why_en: 'Assuming uniform distribution gives linear proportion between fraction of frequencies and fraction of interval width.',
      why_ml: 'ആവൃത്തികൾ തുല്യ അകലത്തിൽ വീതിക്കപ്പെടുന്നു എന്ന സങ്കല്പം രേഖീയ അനുപാതം ഉറപ്പാക്കുന്നു.',
      rungs: [
        {
          title_en: 'Proportional Fraction',
          title_ml: 'അനുപാത ഭിന്നം',
          detail_en: 'The fraction of frequency needed beyond the lower boundary is $\\frac{N/2 - cf}{f}$.',
          detail_ml: 'അധോപരിധിക്ക് മുകളിൽ ആവശ്യമായ ആവൃത്തികളുടെ അനുപാതം $\\frac{N/2 - cf}{f}$ ആണ്.'
        },
        {
          title_en: 'Scale by Width',
          title_ml: 'ക്ലാസ് നീളം കൊണ്ടുള്ള ഗുണനം',
          detail_en: 'Multiplying by class width $h$ gives distance into the interval: $\\Delta = \\frac{N/2 - cf}{f} \\times h$. Adding to lower limit $L$ gives median.',
          detail_ml: 'ക്ലാസ് നീളം $h$ കൊണ്ട് ഗുണിച്ച് അധോപരിധി $L$ നോട് കൂട്ടുമ്പോൾ കൃത്യമായ മധ്യമം ലഭിക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Using the cumulative frequency of the median class itself instead of the PRECEDING class.',
        fix_en: 'cf in the formula is strictly the cumulative frequency of the class PRECEDING the median class.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'തൊട്ടുമുൻപിലെ ക്ലാസിലെ സഞ്ചയിത ആവൃത്തിക്ക് പകരം മധ്യമ ക്ലാസിലെ സഞ്ചയിത ആവൃത്തി നൽകുന്നത്.',
        fix_ml: 'സൂത്രവാക്യത്തിലെ cf എന്നത് മധ്യമ ക്ലാസിന് തൊട്ടുമുൻപിലെ ക്ലാസിന്റെ സഞ്ചയിത ആവൃത്തിയാണ്.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'If median class is 30 - 40, L = 30, N/2 = 25, cf = 15, f = 20, and h = 10, find the median.',
        a: 'Median = 30 + ((25 - 15) / 20) * 10 = 30 + (10/20) * 10 = 30 + 5 = 35.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'മധ്യമ ക്ലാസ് 30 - 40, L = 30, N/2 = 25, cf = 15, f = 20, h = 10 ആയാൽ മധ്യമം എത്ര?',
        a: 'മധ്യമം = 30 + ((25 - 15)/20) * 10 = 30 + 5 = 35.'
      }
    ]
  },
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
            <td>Robust: unaffected by extreme values or outliers.</td>
          </tr>
          <tr>
            <td><b>Best Used For</b></td>
            <td>Symmetric data with no extreme values (e.g., test scores, heights).</td>
            <td>Skewed data (e.g., household incomes, wealth, real estate prices).</td>
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
            <td>എല്ലാ സംഖ്യകളുടെയും തുകയെ ആകെ എണ്ണം കൊണ്ട് ഹരിച്ചത്.</td>
            <td>ക്രമീകരിച്ച വിവരങ്ങളുടെ നടുവിലുള്ള വില.</td>
          </tr>
          <tr>
            <td><b>തീവ്രവിലകളുടെ സ്വാധീനം</b></td>
            <td>കൂടുതൽ ബാധിക്കുന്നു: വളരെ വലിയ ഒരു സംഖ്യ വന്നാൽ ശരാശരി വല്ലാതെ കൂടും.</td>
            <td>ബാധിക്കുന്നില്ല: തീവ്രവിലകൾ മധ്യമത്തെ സ്വാധീനിക്കുന്നില്ല.</td>
          </tr>
          <tr>
            <td><b>അനുയോജ്യമായ സന്ദർഭം</b></td>
            <td>തീവ്രവിലകൾ ഇല്ലാത്ത സാധാരണ അളവുകൾ (പരീക്ഷാ മാർക്ക്, ഭാരം).</td>
            <td>വരുമാനം, സ്വത്ത് തുടങ്ങിയ അസമത്വമുള്ള വിവരങ്ങൾ പഠിക്കാൻ.</td>
          </tr>
        </tbody>
      </table>`,
    intuition_en: 'If 9 workers earn Rs 10,000 each and the boss earns Rs 1,000,000, the mean salary is over Rs 100,000 (misleading!), but the median is Rs 10,000 (reflecting the reality of typical workers).',
    intuition_ml: '9 തൊഴിലാളികൾക്ക് 10,000 രൂപയും മുതലാളിക്ക് 10 ലക്ഷം രൂപയും ശമ്പളമുണ്ടെങ്കിൽ ശരാശരി ഒരു ലക്ഷത്തിന് മുകളിലാകും. എന്നാൽ മധ്യമം കൃത്യമായി 10,000 രൂപയായിരിക്കും. ഇതാണ് മധ്യമത്തിന്റെ മേന്മ.',
    proof: {
      idea_en: 'Breakdown point and resistance of estimators.',
      idea_ml: 'വിവരങ്ങളിലെ മാറ്റങ്ങളെ പ്രതിരോധിക്കാനുള്ള ശേഷി താരതമ്യം ചെയ്യുന്നു.',
      why_en: 'Mean has a breakdown point of 0 (a single infinite value sends mean to infinity); median has a breakdown point of 50%.',
      why_ml: 'ഒരു വലിയ സംഖ്യ ശരാശരിയെ മാറ്റുമെങ്കിലും 50% വിവരങ്ങൾ മാറിയാലേ മധ്യമം മാറുകയുള്ളൂ.',
      rungs: [
        {
          title_en: 'Outlier Perturbation',
          title_ml: 'തീവ്രവിലകളുടെ സ്വാധീനം',
          detail_en: 'Replacing $x_n \\to \\infty$ forces $\\bar{x} = \\frac{\\sum x_i}{n} \\to \\infty$, whereas median rank remains unchanged.',
          detail_ml: 'ഒരു സംഖ്യ എത്ര വലിയതായാലും മധ്യമത്തിന്റെ സ്ഥാനത്തിന് മാറ്റമില്ലാത്തതിനാൽ മധ്യമം മാറുന്നില്ല.'
        },
        {
          title_en: 'Representative Measure',
          title_ml: 'പ്രാതിനിധ്യ അളവ്',
          detail_en: 'For skewed distributions, median represents the central 50th percentile far more faithfully than mean.',
          detail_ml: 'അസമത്വമുള്ള വിവരങ്ങളിൽ മധ്യമമാണ് യഥാർത്ഥ അവസ്ഥയെ ഏറ്റവും നന്നായി പ്രതിഫലിപ്പിക്കുന്നത്.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Assuming mean and median are always identical.',
        fix_en: 'Mean and median are equal only in symmetric distributions; in skewed data they can differ substantially.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'ശരാശരിയും മധ്യമവും എപ്പോഴും തുല്യമായിരിക്കും എന്ന് കരുതുന്നത്.',
        fix_ml: 'വിവരങ്ങൾ തികച്ചും സമമിതമാകുമ്പോൾ മാത്രമേ അവ തുല്യമാകൂ; അല്ലാത്തപ്പോൾ വലിയ വ്യത്യാസമുണ്ടാകും.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Why is median preferred over mean when studying household incomes in a country?',
        a: 'Because a few billionaires would artificially pull up the mean, whereas the median accurately reflects what a typical family earns.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ഒരു നാട്ടിലെ ആളുകളുടെ വരുമാനം കണക്കാക്കുമ്പോൾ ശരാശരിയേക്കാൾ മധ്യമം തിരഞ്ഞെടുക്കുന്നത് എന്തുകൊണ്ട്?',
        a: 'കുറച്ച് കോടീശ്വരന്മാരുടെ വരുമാനം ശരാശരിയെ അമിതമായി ഉയർത്തും, എന്നാൽ മധ്യമം സാധാരണക്കാരന്റെ വരുമാനത്തെ കൃത്യമായി കാണിക്കും.'
      }
    ]
  }
);
