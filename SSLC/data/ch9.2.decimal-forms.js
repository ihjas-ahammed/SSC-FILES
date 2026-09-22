/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 2: Decimal Forms (ദശാംശരൂപങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.2.1.fractions-and-terminating-decimals',
    sec: '9.2.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Fractions and Terminating Decimals',
    title_ml: 'ഭിന്നസംഖ്യകളും അവസാനിക്കുന്ന ദശാംശങ്ങളും',
    oneLine_en: 'A fraction in lowest terms can be expressed as a terminating decimal if and only if the prime factorization of its denominator contains only 2 and 5.',
    oneLine_ml: 'ലഘൂകരിച്ച ഒരു ഭിന്നസംഖ്യയുടെ ഛേദത്തിന്റെ അഭാജ്യഘടകങ്ങൾ 2, 5 എന്നിവ മാത്രമാണെങ്കിൽ അതിനെ അവസാനിക്കുന്ന ദശാംശരൂപത്തിൽ എഴുതാം.',
    statement_en: `<p>A decimal number that has a finite number of digits after the decimal point is called a <b>terminating decimal</b> (അവസാനിക്കുന്ന ദശാംശം).</p>
      <p>Any terminating decimal with $k$ decimal places can be written as a fraction with denominator $10^k = (2 \\times 5)^k = 2^k \\times 5^k$.</p>
      <p><b>Fundamental Criterion:</b></p>
      <p>A fraction $\\frac{p}{q}$ in its lowest terms (where $p, q$ are coprime integers) can be expressed as a terminating decimal <b>if and only if</b> the prime factorization of the denominator $q$ is of the form:</p>
      $$q = 2^a \\times 5^b$$
      <p>where $a$ and $b$ are non-negative integers.</p>
      <p><b>Converting Method:</b> Multiply numerator and denominator by appropriate powers of $2$ or $5$ so that the denominator becomes a power of $10$:</p>
      $$\\frac{3}{8} = \\frac{3}{2^3} = \\frac{3 \\times 5^3}{2^3 \\times 5^3} = \\frac{3 \\times 125}{1000} = \\frac{375}{1000} = \\mathbf{0.375}$$`,
    statement_ml: `<p>ദശാംശബിന്ദുവിന് ശേഷം നിശ്ചിത എണ്ണം അക്കങ്ങൾ മാത്രമുള്ള ദശാംശരൂപങ്ങളെ <b>അവസാനിക്കുന്ന ദശാംശങ്ങൾ</b> എന്ന് വിളിക്കുന്നു.</p>
      <p>$k$ ദശാംശസ്ഥാനങ്ങളുള്ള ഏതൊരു ദശാംശസംഖ്യയെയും ഛേദം $10^k = (2 \\times 5)^k = 2^k \\times 5^k$ ആയ ഭിന്നസംഖ്യയായി എഴുതാം.</p>
      <p><b>അടിസ്ഥാന നിയമം:</b></p>
      <p>ലഘുരൂപത്തിലുള്ള ഒരു ഭിന്നസംഖ്യ $\\frac{p}{q}$-ന്റെ ($p, q$ പരസ്പര അഭാജ്യങ്ങൾ) ഛേദമായ $q$-ന്റെ അഭാജ്യ ഘടകങ്ങൾ $2, 5$ എന്നിവ മാത്രമാണെങ്കിൽ (അതായത് $q = 2^a \\times 5^b$ രൂപത്തിൽ), ആ ഭിന്നസംഖ്യയെ <b>അവസാനിക്കുന്ന ദശാംശരൂപത്തിൽ</b> എഴുതാൻ സാധിക്കും.</p>
      <p>ഛേദത്തിൽ $2, 5$ അല്ലാതെ മറ്റേതെങ്കിലും അഭാജ്യഘടകം (ഉദാഹരണത്തിന് $3, 7, 11$) ഉണ്ടെങ്കിൽ അത് അവസാനിക്കുന്ന ദശാംശമാകില്ല.</p>
      <p><b>ദശാംശമാക്കുന്ന രീതി:</b> ഛേദത്തെ 10-ന്റെ ഏതെങ്കിലും കൃതിയാക്കി മാറ്റാൻ ആവശ്യമായ 2-ന്റെയോ 5-ന്റെയോ കൃതികൾ കൊണ്ട് അംശത്തെയും ഛേദത്തെയും ഗുണിക്കുക:</p>
      $$\\frac{3}{8} = \\frac{3}{2^3} = \\frac{3 \\times 5^3}{2^3 \\times 5^3} = \\frac{375}{1000} = \\mathbf{0.375}$$`,
    intuition_en: `<p>Decimals are based on powers of 10. Since 10 only breaks down into 2 and 5, only denominators built strictly from 2s and 5s can be scaled evenly into powers of 10.</p>`,
    intuition_ml: `<p>നമ്മുടെ ദശാംശ വ്യവസ്ഥ പത്തിന്റെ ഘാതങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്. 10-ന്റെ അഭാജ്യഘടകങ്ങൾ 2-ഉം 5-ഉം മാത്രമായതിനാൽ ഇവ മാത്രമുള്ള ഛേദങ്ങളെ മാത്രമേ പത്തിന്റെ കൃതികളാക്കാൻ സാധിക്കൂ.</p>`,
    proof: {
      idea_en: 'A terminating decimal with k decimal places has denominator 10^k = 2^k * 5^k, so its reduced denominator must divide 2^k * 5^k.',
      idea_ml: 'k ദശാംശസ്ഥാനമുള്ള ദശാംശത്തിന്റെ ഛേദം 10^k = 2^k * 5^k ആണ്. അതിനാൽ ലഘുരൂപത്തിലെ ഛേദം 2^k * 5^k-ന്റെ ഘടകമായിരിക്കണം.',
      why_en: 'Fundamental theorem of arithmetic ensures uniqueness of prime factorization.',
      why_ml: 'അങ്കഗണിതത്തിലെ അടിസ്ഥാന സിദ്ധാന്തപ്രകാരം അഭാജ്യഘടകങ്ങൾ ഏകൈകമാണ്.',
      rungs_en: [
        { why_en: 'Any terminating decimal with k places.', m: 'x = 0.d_1 d_2 \\dots d_k = \\frac{N}{10^k}' },
        { why_en: 'Factor denominator into primes.', m: '10^k = (2 \\times 5)^k = 2^k \\times 5^k' },
        { why_en: 'Reduce fraction by canceling common factors with N.', m: '\\frac{N}{10^k} = \\frac{p}{q}, \\quad q \\mid (2^k 5^k)' },
        { why_en: 'Therefore q can only have 2 and 5 as prime factors.', m: 'q = 2^a \\times 5^b \\quad (a \\le k, b \\le k)' }
      ],
      rungs_ml: [
        { why_ml: 'k സ്ഥാനങ്ങളുള്ള അവസാനിക്കുന്ന ദശാംശം.', m: 'x = 0.d_1 d_2 \\dots d_k = \\frac{N}{10^k}' },
        { why_ml: 'ഛേദത്തെ അഭാജ്യ ഘടകങ്ങളാക്കുന്നു.', m: '10^k = 2^k \\times 5^k' },
        { why_ml: 'പൊതുഘടകങ്ങൾ വെട്ടി ലഘൂകരിക്കുന്നു.', m: '\\frac{N}{10^k} = \\frac{p}{q}, \\quad q \\mid (2^k 5^k)' },
        { why_ml: 'അതിനാൽ q-വിൽ 2, 5 ഘടകങ്ങൾ മാത്രമേ ഉണ്ടാകൂ.', m: 'q = 2^a \\times 5^b' }
      ]
    },
    needs: ['p.4.3', 'p.4.4'],
    traps_en: [
      'Always reduce the fraction to lowest terms BEFORE checking prime factors of denominator (e.g. 6/15 = 2/5 has only factor 5, so it terminates).',
      'The number of decimal places equals max(a, b) in 2^a * 5^b.'
    ],
    traps_ml: [
      'ഛേദത്തിന്റെ അഭാജ്യഘടകങ്ങൾ പരിശോധിക്കുന്നതിന് മുൻപ് ഭിന്നസംഖ്യയെ ലഘൂകരിക്കണം (ഉദാ: 6/15 = 2/5; ഇവിടെ ഛേദം 5 ആയതിനാൽ ഇത് അവസാനിക്കുന്ന ദശാംശമാണ്).',
      'ദശാംശസ്ഥാനങ്ങളുടെ എണ്ണം 2^a * 5^b-യിലെ a, b എന്നിവയിൽ വലിയ സംഖ്യക്ക് തുല്യമായിരിക്കും.'
    ],
    cards_en: [
      { q: 'Will the fraction 7/40 terminate in decimal form?', a: 'Yes, because $40 = 2^3 \\times 5$, having only prime factors 2 and 5.', kind: 'apply' },
      { q: 'How many decimal places will 13/125 have?', a: '$125 = 5^3$. Multiply by $2^3/2^3$: $\\frac{104}{1000} = 0.104$, which has **3 decimal places**.', kind: 'apply' },
      { q: 'What prime factors can the denominator of a terminating decimal contain?', a: 'Only 2 and 5.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '7/40 എന്ന ഭിന്നസംഖ്യ അവസാനിക്കുന്ന ദശാംശമായിരിക്കുമോ?', a: 'അതെ, കാരണം $40 = 2^3 \\times 5$ ആണ്; 2, 5 എന്നീ ഘടകങ്ങൾ മാത്രമേയുള്ളൂ.', kind: 'apply' },
      { q: '13/125-ന് എത്ര ദശാംശസ്ഥാനങ്ങൾ ഉണ്ടായിരിക്കും?', a: '$125 = 5^3$ ആയതിനാൽ $2^3$ കൊണ്ട് ഗുണിക്കുമ്പോൾ $\\frac{104}{1000} = 0.104$ ലഭിക്കുന്നു; **3 ദശാംശസ്ഥാനങ്ങൾ**.', kind: 'apply' },
      { q: 'അവസാനിക്കുന്ന ദശാംശത്തിന്റെ ഛേദത്തിൽ ഉണ്ടാകാവുന്ന അഭാജ്യഘടകങ്ങൾ ഏവ?', a: '2-ഉം 5-ഉം മാത്രം.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.2.2.repeating-decimals',
    sec: '9.2.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Non-Terminating Repeating (Periodic) Decimals',
    title_ml: 'ആവർത്തന ദശാംശരൂപങ്ങൾ',
    oneLine_en: 'Fractions whose reduced denominators contain prime factors other than 2 and 5 produce non-terminating decimals with a repeating cycle of digits.',
    oneLine_ml: 'ലഘൂകരിച്ച ഛേദത്തിൽ 2, 5 അല്ലാത്ത അഭാജ്യഘടകങ്ങൾ വരുന്ന ഭിന്നസംഖ്യകളുടെ ദശാംശരൂപങ്ങൾ അവസാനിക്കാത്തതും ആവർത്തിക്കുന്നതുമായിരിക്കും.',
    statement_en: `<p>When a fraction $\\frac{p}{q}$ in lowest terms has a denominator $q$ containing prime factors other than $2$ and $5$ (such as $3, 7, 11, 13$), long division never produces a remainder of $0$.</p>
      <p>Since the possible non-zero remainders upon division by $q$ are only $\\{1, 2, \\dots, q-1\\}$, a remainder <b>must repeat</b> after at most $q - 1$ division steps. Once a remainder repeats, the sequence of quotient digits repeats in the identical cycle indefinitely.</p>
      <p>Such decimals are called <b>non-terminating repeating (recurring) decimals</b>:</p>
      $$\\frac{1}{3} = 0.3333\\dots = 0.\\bar{3}$$
      $$\\frac{1}{6} = 0.1666\\dots = 0.1\\bar{6}$$
      $$\\frac{1}{7} = 0.142857142857\\dots = 0.\\overline{142857}$$
      <p><b>Period Length:</b> The number of digits in the repeating block is called the <b>period</b> (ആവർത്തന ദൈർഘ്യം). For denominator $q$, the period length is strictly less than $q$.</p>`,
    statement_ml: `<p>ലഘുരൂപത്തിലുള്ള ഒരു ഭിന്നസംഖ്യ $\\frac{p}{q}$-ന്റെ ഛേദത്തിൽ $2, 5$ അല്ലാത്ത അഭാജ്യഘടകങ്ങൾ ($3, 7, 11, 13$ തുടങ്ങിയവ) ഉണ്ടെങ്കിൽ ഹരണക്രിയയിൽ ഒരിക്കലും ശിഷ്ടം പൂജ്യം ആകില്ല.</p>
      <p>$q$ കൊണ്ട് ഹരിക്കുമ്പോൾ ലഭിക്കാവുന്ന പൂജ്യമല്ലാത്ത ശിഷ്ടങ്ങൾ $1$ മുതൽ $q-1$ വരെയുള്ളവ മാത്രമാണ്. അതിനാൽ പരമാവധി $q-1$ ഘട്ടങ്ങൾക്കുള്ളിൽ ഏതെങ്കിലും ഒരു ശിഷ്ടം <b>ആവർത്തിച്ചു വന്നേ തീരൂ</b>. ഒരു ശിഷ്ടം ആവർത്തിച്ചാൽ ഹരണഫലത്തിലെ അക്കങ്ങളും അതേ ക്രമത്തിൽ ആവർത്തിക്കുന്നു.</p>
      <p>ഇത്തരം ദശാംശങ്ങളെ <b>അവസാനിക്കാത്ത ആവർത്തന ദശാംശങ്ങൾ</b> എന്ന് വിളിക്കുന്നു:</p>
      $$\\frac{1}{3} = 0.333\\dots = 0.\\bar{3}$$
      $$\\frac{1}{6} = 0.1666\\dots = 0.1\\bar{6}$$
      $$\\frac{1}{7} = 0.142857142857\\dots = 0.\\overline{142857}$$
      <p><b>ആവർത്തന ദൈർഘ്യം:</b> ആവർത്തിക്കുന്ന അക്കങ്ങളുടെ കൂട്ടത്തിലുള്ള അക്കങ്ങളുടെ എണ്ണത്തെ ആവർത്തന ദൈർഘ്യം എന്ന് വിളിക്കുന്നു. ഛേദം $q$ ആയാൽ ആവർത്തന ദൈർഘ്യം പരമാവധി $q-1$ ആയിരിക്കും.</p>`,
    intuition_en: `<p>Pigeonhole principle: when dividing by 7, there are only 6 possible non-zero remainders (1 through 6). By the 7th step, at least one remainder must repeat, trapping the division in an endless loop.</p>`,
    intuition_ml: `<p>7 കൊണ്ട് ഹരിക്കുമ്പോൾ 1 മുതൽ 6 വരെയുള്ള 6 ശിഷ്ടങ്ങൾ മാത്രമേ കിട്ടാനുള്ളൂ. ഏഴാമത്തെ ഘട്ടത്തിൽ ഇതിലൊന്ന് ആവർത്തിക്കപ്പെടാൻ നിർബന്ധിതമാകുന്നു; ഇതോടെ അക്കങ്ങൾ വട്ടത്തിൽ കറങ്ങാൻ തുടങ്ങുന്നു.</p>`,
    proof: {
      idea_en: 'Finite remainder states guarantee periodicity by the pigeonhole principle.',
      idea_ml: 'സാധ്യമായ ശിഷ്ടങ്ങളുടെ എണ്ണം പരിമിതമായതിനാൽ ഒരു ഘട്ടത്തിൽ ആവർത്തനം സംഭവിച്ചേ തീരൂ.',
      why_en: 'Each step in long division is determined entirely by the remainder.',
      why_ml: 'ഹരണത്തിലെ ഓരോ ഘട്ടവും തൊട്ടുമുമ്പത്തെ ശിഷ്ടത്തെ മാത്രം ആശ്രയിച്ചിരിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Possible non-zero remainders when dividing by q.', m: 'R \\in \\{1, 2, \\dots, q-1\\}' },
        { why_en: 'There are at most q - 1 distinct remainder values.', m: '|R| \\le q - 1' },
        { why_en: 'By pigeonhole principle, remainder r_i = r_j for some j > i.', m: 'r_{i+k} = r_i \\quad (k \\le q - 1)' },
        { why_en: 'The division cycle repeats with period k.', m: 'x = 0.a_1 a_2 \\dots \\overline{d_1 d_2 \\dots d_k}' }
      ],
      rungs_ml: [
        { why_ml: 'q കൊണ്ട് ഹരിക്കുമ്പോൾ കിട്ടാവുന്ന ശിഷ്ടങ്ങൾ.', m: 'R \\in \\{1, 2, \\dots, q-1\\}' },
        { why_ml: 'ആകെ സാധ്യമായ വ്യത്യസ്ത ശിഷ്ടങ്ങൾ q - 1 എണ്ണം മാത്രം.', m: '|R| \\le q - 1' },
        { why_ml: 'ഏതെങ്കിലും ഒരു ഘട്ടത്തിൽ ശിഷ്ടം ആവർത്തിക്കുന്നു.', m: 'r_{i+k} = r_i' },
        { why_ml: 'അക്കങ്ങൾ k ദൈർഘ്യത്തിൽ ആവർത്തിക്കുന്നു.', m: 'x = 0.a_1 \\dots \\overline{d_1 \\dots d_k}' }
      ]
    },
    needs: ['m9.2.1.fractions-and-terminating-decimals'],
    traps_en: [
      'A bar over a single digit (0.16̄) means only 6 repeats (0.1666...), not 16.',
      'All rational numbers are EITHER terminating OR repeating; an irrational number does neither.'
    ],
    traps_ml: [
      '0.16̄ എന്ന് എഴുതിയാൽ 6 മാത്രമേ ആവർത്തിക്കുന്നുള്ളൂ (0.1666...), 16 അല്ല.',
      'എല്ലാ ഭിന്നസംഖ്യകളും അവസാനിക്കുന്നതോ അല്ലെങ്കിൽ ആവർത്തിക്കുന്നതോ ആയിരിക്കും; ഇവ രണ്ടും അല്ലാത്തവയാണ് അഭിന്നകങ്ങൾ.'
    ],
    cards_en: [
      { q: 'What is the maximum period length for the decimal expansion of 1/17?', a: '$17 - 1 = \\mathbf{16}$ digits.', kind: 'apply' },
      { q: 'What kind of decimal expansion does 5/11 have?', a: 'Non-terminating repeating: $\\frac{5}{11} = 0.454545\\dots = \\mathbf{0.\\overline{45}}$.', kind: 'apply' },
      { q: 'State the Pigeonhole Principle reason for why fractions must repeat in decimal form.', a: 'Because dividing by q can only yield at most q - 1 distinct non-zero remainders before one must repeat.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '1/17-ന്റെ ദശാംശരൂപത്തിന്റെ പരമാവധി ആവർത്തന ദൈർഘ്യം എത്രയായിരിക്കും?', a: '$17 - 1 = \\mathbf{16}$ അക്കങ്ങൾ.', kind: 'apply' },
      { q: '5/11-ന്റെ ദശാംശരൂപം ഏതുതരത്തിലുള്ളതാണ്?', a: 'അവസാനിക്കാത്ത ആവർത്തന ദശാംശം: $\\frac{5}{11} = \\mathbf{0.\\overline{45}}$.', kind: 'apply' },
      { q: 'ഭിന്നസംഖ്യകൾ ആവർത്തന ദശാംശമാകുന്നതിന്റെ കാരണം എന്താണ്?', a: 'q കൊണ്ട് ഹരിക്കുമ്പോൾ പരമാവധി q - 1 വ്യത്യസ്ത ശിഷ്ടങ്ങൾ മാത്രമേയുള്ളൂ എന്നതിനാൽ.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.2.3.converting-repeating-decimals',
    sec: '9.2.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Converting Repeating Decimals to Fractions',
    title_ml: 'ആവർത്തന ദശാംശങ്ങളെ ഭിന്നസംഖ്യകളാക്കി മാറ്റൽ',
    oneLine_en: 'Any repeating decimal can be converted to an exact fraction p/q by setting x equal to the decimal, multiplying by powers of 10 to align repeating parts, and subtracting.',
    oneLine_ml: 'ആവർത്തന ദശാംശത്തെ x എന്ന് എടുത്ത്, ആവർത്തിക്കുന്ന ഭാഗം സമീകരിക്കാൻ 10-ന്റെ കൃതികൾ കൊണ്ട് ഗുണിച്ച് കുറയ്ക്കുന്നതിലൂടെ കൃത്യമായ ഭിന്നസംഖ്യയാക്കി മാറ്റാം.',
    statement_en: `<p>Every non-terminating repeating decimal represents a strictly <b>rational number</b> and can be converted into the fraction form $\\frac{p}{q}$:</p>
      <p><b>Case 1: Pure Repeating Decimals ($0.\\bar{a}, 0.\\overline{ab}, \\dots$)</b></p>
      <p>Let $x = 0.\\overline{ab} = 0.abab\\dots$ (period length $k = 2$).</p>
      $$\\text{Multiply by } 10^k = 100: \\quad 100x = ab.\\overline{ab}$$
      $$\\text{Subtract original: } 100x - x = ab.\\overline{ab} - 0.\\overline{ab} \\implies 99x = ab \\implies \\mathbf{x = \\frac{ab}{99}}$$
      <p><b>Standard Direct Rule:</b></p>
      $$0.\\bar{a} = \\frac{a}{9}, \\quad 0.\\overline{ab} = \\frac{ab}{99}, \\quad 0.\\overline{abc} = \\frac{abc}{999}$$
      <p><b>Case 2: Mixed Repeating Decimals ($0.a\\bar{b}, 0.ab\\bar{c}, \\dots$)</b></p>
      <p>Multiply by $10^m$ to shift non-repeating digits before the decimal point, then multiply by $10^k$ to shift one full period, and subtract:</p>
      <p><i>Example:</i> Convert $x = 0.1\\bar{6}$ to fraction:</p>
      $$10x = 1.\\bar{6} = 1.666\\dots$$
      $$100x = 16.\\bar{6} = 16.666\\dots$$
      $$100x - 10x = 16 - 1 = 15 \\implies 90x = 15 \\implies x = \\frac{15}{90} = \\mathbf{\\frac{1}{6}}$$`,
    statement_ml: `<p>എല്ലാ അവസാനിക്കാത്ത ആവർത്തന ദശാംശങ്ങളും <b>ഭിന്നകസംഖ്യകളെയാണ്</b> സൂചിപ്പിക്കുന്നത്; അവയെ $\\frac{p}{q}$ രൂപത്തിലേക്ക് മാറ്റാം:</p>
      <p><b>രീതി 1: ശുദ്ധ ആവർത്തന ദശാംശങ്ങൾ ($0.\\bar{a}, 0.\\overline{ab}, \\dots$)</b></p>
      <p>$x = 0.\\overline{ab} = 0.abab\\dots$ (ആവർത്തന ദൈർഘ്യം $k = 2$) என்க.</p>
      $$100 \\text{ കൊണ്ട് ഗുണിക്കുന്നു: } 100x = ab.\\overline{ab}$$
      $$\\text{ആദ്യ സമവാക്യം കുറയ്ക്കുന്നു: } 100x - x = ab \\implies 99x = ab \\implies \\mathbf{x = \\frac{ab}{99}}$$
      <p><b>നേരിട്ടുള്ള സൂത്രവാക്യം:</b></p>
      $$0.\\bar{a} = \\frac{a}{9}, \\quad 0.\\overline{ab} = \\frac{ab}{99}, \\quad 0.\\overline{abc} = \\frac{abc}{999}$$
      <p><b>രീതി 2: മിശ്ര ആവർത്തന ദശാംശങ്ങൾ ($0.a\\bar{b}, 0.ab\\bar{c}, \\dots$)</b></p>
      <p>ആവർത്തിക്കാത്ത ഭാഗത്തെ മാറ്റാൻ 10-ന്റെ കൃതി കൊണ്ട് ഗുണിക്കുക, തുടർന്ന് ഒരു ആവർത്തനക്കൂട്ടം മാറ്റാൻ വീണ്ടും ഗുണിച്ച് കുറയ്ക്കുക:</p>
      <p><i>ഉദാഹരണം:</i> $x = 0.1\\bar{6}$ ഭിന്നസംഖ്യയാക്കുക:</p>
      $$10x = 1.666\\dots$$
      $$100x = 16.666\\dots$$
      $$100x - 10x = 15 \\implies 90x = 15 \\implies x = \\frac{15}{90} = \\mathbf{\\frac{1}{6}}$$`,
    intuition_en: `<p>Multiplying by 100 shifts the endless repeating tail by exactly one period, making the infinite fractional tails identical so they annihilate completely when subtracted.</p>`,
    intuition_ml: `<p>100 കൊണ്ട് ഗുണിക്കുമ്പോൾ അനന്തമായി ആവർത്തിക്കുന്ന വാൽഭാഗം കൃത്യമായി ഒരുകൂട്ടം മുന്നോട്ട് നീങ്ങുന്നു; കുറയ്ക്കുമ്പോൾ ഈ അനന്തമായ ദശാംശഭാഗങ്ങൾ പരസ്പരം റദ്ദായിപ്പോകുന്നു.</p>`,
    proof: {
      idea_en: 'Algebraic cancellation of infinite geometric series tail via power of 10 shift.',
      idea_ml: '10-ന്റെ കൃതി കൊണ്ട് ഗുണിച്ച് അനന്ത ദശാംശഭാഗത്തെ റദ്ദാക്കുന്നു.',
      why_en: 'Periodicity ensures 10^k * x and x have identical fractional parts.',
      why_ml: 'ആവർത്തന സ്വഭാവം കാരണം 10^k * x-നും x-നും ഒരേ ദശാംശ വാലുകളാണുള്ളത്.',
      rungs_en: [
        { why_en: 'Let x have period length k.', m: 'x = I + 0.\\overline{d_1 \\dots d_k}' },
        { why_en: 'Shift by k decimal places.', m: '10^k x = 10^k I + d_1 \\dots d_k.\\overline{d_1 \\dots d_k}' },
        { why_en: 'Subtract to eliminate fractional tail.', m: '(10^k - 1)x = \\text{Integer}' },
        { why_en: 'Solve for x as rational fraction.', m: 'x = \\frac{p}{q} \\in \\mathbb{Q}' }
      ],
      rungs_ml: [
        { why_ml: 'k ദൈർഘ്യമുള്ള ആവർത്തന ദശാംശം.', m: 'x = 0.\\overline{d_1 \\dots d_k}' },
        { why_ml: '10^k കൊണ്ട് ഗുണിക്കുന്നു.', m: '10^k x = d_1 \\dots d_k.\\overline{d_1 \\dots d_k}' },
        { why_ml: 'കുറച്ച് ദശാംശഭാഗം ഇല്ലാതാക്കുന്നു.', m: '(10^k - 1)x = d_1 \\dots d_k' },
        { why_ml: 'ഭിന്നസംഖ്യാ രൂപം ലഭിക്കുന്നു.', m: 'x = \\frac{p}{q}' }
      ]
    },
    needs: ['m9.2.2.repeating-decimals'],
    traps_en: [
      '0.999... = 1 strictly, because 9/9 = 1.',
      'Make sure to subtract 10x, not x, when dealing with mixed repeating decimals like 0.1666...'
    ],
    traps_ml: [
      '0.999... കൃത്യമായി 1-ന് തുല്യമാണ് (9/9 = 1).',
      '0.1666... പോലുള്ള മിശ്ര ദശാംശങ്ങളിൽ 100x-ൽ നിന്ന് 10x ആണ് കുറയ്ക്കേണ്ടത്, x അല്ല.'
    ],
    cards_en: [
      { q: 'Convert 0.777... into a fraction.', a: '$\\mathbf{\\frac{7}{9}}$.', kind: 'apply' },
      { q: 'Convert 0.232323... into a fraction.', a: '$\\mathbf{\\frac{23}{99}}$.', kind: 'apply' },
      { q: 'What fraction does 0.9999... equal?', a: '$\\frac{9}{9} = \\mathbf{1}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '0.777... എന്നതിനെ ഭിന്നസംഖ്യയാക്കുക.', a: '$\\mathbf{\\frac{7}{9}}$.', kind: 'apply' },
      { q: '0.232323... എന്നതിനെ ഭിന്നസംഖ്യയാക്കുക.', a: '$\\mathbf{\\frac{23}{99}}$.', kind: 'apply' },
      { q: '0.9999... ഏത് ഭിന്നസംഖ്യക്ക് തുല്യമാണ്?', a: '$\\frac{9}{9} = \\mathbf{1}$.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.2.4.non-repeating-decimals-and-approximations',
    sec: '9.2.4',
    kind: 'property',
    tier: 'core',
    title_en: 'Non-Repeating Decimals and Approximations',
    title_ml: 'ആവർത്തിക്കാത്ത ദശാംശങ്ങളും ഏകദേശനവും',
    oneLine_en: 'Non-terminating, non-repeating decimals cannot be expressed as fractions and represent irrational numbers; they are approximated to required decimal places.',
    oneLine_ml: 'അവസാനിക്കാത്തതും ആവർത്തിക്കാത്തതുമായ ദശാംശങ്ങൾ ഭിന്നസംഖ്യകളല്ല, അവ അഭിന്നകങ്ങളാണ്; ആവശ്യാനുസരണം അവയെ ദശാംശസ്ഥാനങ്ങളിലേക്ക് ഏകദേശനം ചെയ്യുന്നു.',
    statement_en: `<p>We have established that:</p>
      <ul>
        <li>Every fraction $\\frac{p}{q}$ gives either a <b>terminating decimal</b> or a <b>repeating decimal</b>.</li>
        <li>Conversely, every terminating or repeating decimal can be written as a fraction $\\frac{p}{q}$ (a <b>rational number</b>).</li>
      </ul>
      <p><b>Non-Terminating, Non-Repeating Decimals:</b></p>
      <p>There are decimals that never end and never repeat periodically, such as:</p>
      $$0.101001000100001\\dots$$
      $$\\sqrt{2} = 1.41421356\\dots, \\quad \\pi = 3.14159265\\dots$$
      <p>These numbers <b>cannot be written as a fraction</b> $\\frac{p}{q}$. They are called <b>irrational numbers</b> (അഭിന്നക സംഖ്യകൾ).</p>
      <p><b>Approximation (Rounding Off):</b></p>
      <p>To use such numbers in practical measurements, we approximate them to a required number of decimal places:</p>
      <ul>
        <li>To 1 decimal place: $\\sqrt{2} \\approx 1.4$</li>
        <li>To 2 decimal places: $\\sqrt{2} \\approx 1.41$</li>
        <li>To 3 decimal places: $\\sqrt{2} \\approx 1.414$</li>
      </ul>`,
    statement_ml: `<p>നാം ഇതുവരെ കണ്ടത്:</p>
      <ul>
        <li>ഏതൊരു ഭിന്നസംഖ്യയെയും അവസാനിക്കുന്നതോ ആവർത്തിക്കുന്നതോ ആയ ദശാംശരൂപത്തിൽ എഴുതാം.</li>
        <li>തിരിച്ച്, അവസാനിക്കുന്നതോ ആവർത്തിക്കുന്നതോ ആയ എല്ലാ ദശാംശങ്ങളും <b>ഭിന്നകസംഖ്യകളാണ്</b> ($\\frac{p}{q}$).</li>
      </ul>
      <p><b>അവസാനിക്കാത്തതും ആവർത്തിക്കാത്തതുമായ ദശാംശങ്ങൾ:</b></p>
      <p>ഒരിക്കലും അവസാനിക്കുകയോ നിശ്ചിത ക്രമത്തിൽ ആവർത്തിക്കുകയോ ചെയ്യാത്ത അനന്ത ദശാംശങ്ങളുണ്ട്. ഉദാഹരണത്തിന്:</p>
      $$0.101001000100001\\dots$$
      $$\\sqrt{2} = 1.41421356\\dots, \\quad \\pi = 3.14159265\\dots$$
      <p>ഇത്തരം സംഖ്യകളെ ഒരിക്കലും $\\frac{p}{q}$ എന്ന ഭിന്നസംഖ്യാ രൂപത്തിൽ എഴുതാൻ കഴിയില്ല. ഇവയെ <b>അഭിന്നക സംഖ്യകൾ</b> എന്ന് വിളിക്കുന്നു.</p>
      <p><b>ഏകദേശനം:</b></p>
      <p>പ്രായോഗിക അളവുകളിൽ ഇത്തരം സംഖ്യകളെ ആവശ്യമായ ദശാംശസ്ഥാനങ്ങളിലേക്ക് ചുരുക്കി (ഏകദേശനം ചെയ്ത്) ഉപയോഗിക്കുന്നു:</p>
      <ul>
        <li>1 ദശാംശസ്ഥാനത്തേക്ക്: $\\sqrt{2} \\approx 1.4$</li>
        <li>2 ദശാംശസ്ഥാനങ്ങളിലേക്ക്: $\\sqrt{2} \\approx 1.41$</li>
        <li>3 ദശാംശസ്ഥാനങ്ങളിലേക്ക്: $\\sqrt{2} \\approx 1.414$</li>
      </ul>`,
    intuition_en: `<p>A ruler cannot measure infinite precision; every physical measurement is a rational approximation of an underlying geometric length.</p>`,
    intuition_ml: `<p>ഒരു സ്കെയിലിന് അനന്തമായ കൃത്യത അളക്കാനാവില്ല; പ്രായോഗിക ജീവിതത്തിലെ എല്ലാ അളവുകളും യാഥാർത്ഥ അളവുകളുടെ ഏകദേശനങ്ങളാണ്.</p>`,
    proof: {
      idea_en: 'Trichotomy of decimals: terminating, periodic (both rational), and non-periodic (irrational).',
      idea_ml: 'ദശാംശങ്ങളുടെ മൂന്ന് രൂപങ്ങൾ: അവസാനിക്കുന്നത്, ആവർത്തിക്കുന്നത് (രണ്ടും ഭിന്നകം), ആവർത്തിക്കാത്തത് (അഭിന്നകം).',
      why_en: 'A decimal is rational if and only if it eventually repeats.',
      why_ml: 'ഒരു ദശാംശം ഭിന്നകമാകുന്നത് അത് ആവർത്തിക്കുമ്പോൾ മാത്രമാണ്.',
      rungs_en: [
        { why_en: 'Rational decimals terminate or repeat.', m: '\\mathbb{Q} = \\{\\text{terminating decimals}\\} \\cup \\{\\text{repeating decimals}\\}' },
        { why_en: 'Construct a non-repeating pattern.', m: '0.1010010001\\dots \\notin \\mathbb{Q}' },
        { why_en: 'Such numbers cannot be represented as p/q.', m: 'x \\in \\mathbb{R} \\setminus \\mathbb{Q}' },
        { why_en: 'Bounding within intervals provides rational approximations.', m: '1.414 < \\sqrt{2} < 1.415' }
      ],
      rungs_ml: [
        { why_ml: 'ഭിന്നകങ്ങൾ അവസാനിക്കുകയോ ആവർത്തിക്കുകയോ ചെയ്യുന്നു.', m: '\\mathbb{Q} = \\{\\text{അവസാനിക്കുന്നത്, ആവർത്തിക്കുന്നത്}\\}' },
        { why_ml: 'ആവർത്തിക്കാത്ത ഒരു രൂപം പരിഗണിക്കുന്നു.', m: '0.1010010001\\dots \\notin \\mathbb{Q}' },
        { why_ml: 'ഇവയെ p/q ആക്കാൻ കഴിയില്ല.', m: 'x \\in \\mathbb{R} \\setminus \\mathbb{Q}' },
        { why_ml: 'പരിധിക്കുള്ളിൽ നിർത്തി ഏകദേശനം ചെയ്യുന്നു.', m: '1.414 < \\sqrt{2} < 1.415' }
      ]
    },
    needs: ['m9.2.3.converting-repeating-decimals'],
    traps_en: [
      '22/7 is a rational approximation of pi, NOT equal to pi (pi is irrational and non-repeating).',
      'Non-repeating does NOT mean digits do not occur again; it means there is no repeating block/cycle.'
    ],
    traps_ml: [
      '22/7 എന്നത് പൈ-യുടെ (pi) ഒരു ഏകദേശ ഭിന്നകവില മാത്രമാണ്, pi-ക്ക് തുല്യമല്ല (pi ഒരു അഭിന്നകമാണ്).',
      'ആവർത്തിക്കാത്തത് എന്നാൽ അക്കങ്ങൾ പിന്നീട് വരില്ല എന്നല്ല, ഒരേ കൂട്ടം ക്രമമായി ആവർത്തിക്കുന്നില്ല എന്നാണ്.'
    ],
    cards_en: [
      { q: 'Is 0.1212212221... rational or irrational?', a: '**Irrational**, because it is non-terminating and non-repeating.', kind: 'apply' },
      { q: 'What type of numbers produce non-terminating, non-repeating decimals?', a: 'Irrational numbers.', kind: 'recall' },
      { q: 'Approximate 1/3 to 2 decimal places.', a: '$0.333\\dots \\approx \\mathbf{0.33}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '0.1212212221... ഭിന്നകമാണോ അഭിന്നകമാണോ?', a: '**അഭിന്നകം**, കാരണം ഇത് അവസാനിക്കുന്നതോ ആവർത്തിക്കുന്നതോ അല്ല.', kind: 'apply' },
      { q: 'അവസാനിക്കാത്തതും ആവർത്തിക്കാത്തതുമായ ദശാംശങ്ങൾ ഏതുതരം സംഖ്യകളാണ്?', a: 'അഭിന്നക സംഖ്യകൾ.', kind: 'recall' },
      { q: '1/3-നെ 2 ദശാംശസ്ഥാനങ്ങളിലേക്ക് ഏകദേശനം ചെയ്യുക.', a: '$0.333\\dots \\approx \\mathbf{0.33}$.', kind: 'apply' }
    ]
  }
);
