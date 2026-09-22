/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 3: Mathematics of Chance (സാധ്യതകളുടെ ഗണിതം)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.3.1 Chances as Numbers / Probability of Single Events (സാധ്യത ഒരു സംഖ്യയായി)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.3.1.probability-as-measure-of-chance',
    sec: '10.3.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Chances as Numbers & Probability Definition',
    title_ml: 'സാധ്യതകളും സംഖ്യകളും (സാധ്യതയുടെ നിർവ്വചനം)',
    oneLine_en: 'Probability quantifies the likelihood of an event as the ratio of favourable outcomes to total equally likely outcomes: P(E) = n(E) / n(S). It can be expressed as a fraction, decimal, or percentage.',
    oneLine_ml: 'ഒരു സംഭവം നടക്കാനുള്ള സാധ്യതയെ അളക്കുന്നത് ആകെ സമസാധ്യതയുള്ള ഫലങ്ങളിൽ അനുകൂല ഫലങ്ങളുടെ അനുപാതമായാണ്: $P(E) = \\frac{n(E)}{n(S)}$. ഇത് ഭിന്നസംഖ്യയായോ ദശാംശമായോ ശതമാനമായോ എഴുതാം.',
    statement_en: `<p><b>Definition of Probability:</b></p>
      <p>When an experiment has a finite number of equally likely outcomes, the probability $P(E)$ of an event $E$ is defined as:</p>
      $$\\mathbf{P(E) = \\frac{\\text{Number of favourable outcomes}}{\\text{Total number of possible outcomes}} = \\frac{n(E)}{n(S)}}$$
      <p><b>Forms of Expression:</b></p>
      <ul>
        <li><b>Fraction:</b> $\\frac{n(E)}{n(S)}$ in simplest reduced form.</li>
        <li><b>Decimal:</b> Converting the fraction into decimal form (e.g., $\\frac{1}{4} = 0.25$).</li>
        <li><b>Percentage:</b> Multiplying the decimal or fraction by $100\\%$ (e.g., $0.25 \\times 100\\% = 25\\%$).</li>
      </ul>
      <p><b>Fundamental Properties:</b></p>
      <ul>
        <li><b>Bounds:</b> For any event $E$, $\\mathbf{0 \\le P(E) \\le 1}$ (or $0\\% \\le P(E) \\le 100\\%$).</li>
        <li><b>Impossible Event:</b> An event that can never occur has $n(E) = 0$, so $\\mathbf{P(E) = 0}$.</li>
        <li><b>Certain Event:</b> An event that is guaranteed to occur has $n(E) = n(S)$, so $\\mathbf{P(E) = 1}$.</li>
        <li><b>Comparing Boxes:</b> When comparing chances between different groups, convert each to fractions with equal denominators or decimals rather than comparing raw counts.</li>
      </ul>`,
    statement_ml: `<p><b>സാധ്യതയുടെ നിർവ്വചനം:</b></p>
      <p>ഒരു പരീക്ഷണത്തിൽ തുല്യസാധ്യതയുള്ള നിശ്ചിത എണ്ണം ഫലങ്ങൾ ഉണ്ടാകുമ്പോൾ, ഒരു സംഭവം $E$ നടക്കാനുള്ള സാധ്യത $P(E)$ താഴെ പറയുന്ന വിധം നിർവ്വചിക്കുന്നു:</p>
      $$\\mathbf{P(E) = \\frac{\\text{അനുകൂല ഫലങ്ങളുടെ എണ്ണം}}{\\text{സാധ്യമായ ആകെ ഫലങ്ങളുടെ എണ്ണം}} = \\frac{n(E)}{n(S)}}$$
      <p><b>സാധ്യത പ്രകടിപ്പിക്കുന്ന രീതികൾ:</b></p>
      <ul>
        <li><b>ഭിന്നസംഖ്യാ രൂപം:</b> ലഘൂകരിച്ച ഭിന്നസംഖ്യയായി എഴുതുന്നു (ഉദാഹരണത്തിന്, $\\frac{n(E)}{n(S)}$).</li>
        <li><b>ദശാംശ രൂപം:</b> ഭിന്നസംഖ്യയെ ദശാംശമാക്കി മാറ്റുന്നു (ഉദാഹരണത്തിന്, $\\frac{1}{4} = 0.25$).</li>
        <li><b>ശതമാനം:</b> ഭിന്നസംഖ്യയെ $100\\%$ കൊണ്ട് ഗുണിച്ച് ശതമാനമാക്കുന്നു ($0.25 \\times 100\\% = 25\\%$).</li>
      </ul>
      <p><b>അടിസ്ഥാന ഗുണങ്ങൾ:</b></p>
      <ul>
        <li><b>പരിധികൾ:</b> ഏതൊരു സംഭവത്തിനും സാധ്യത എപ്പോഴും $0$-നും $1$-നും ഇടയിലായിരിക്കും: $\\mathbf{0 \\le P(E) \\le 1}$ ($0\\%$ മുതൽ $100\\%$ വരെ).</li>
        <li><b>അസാധ്യ സംഭവം:</b> ഒരിക്കലും നടക്കാത്ത സംഭവത്തിന്റെ സാധ്യത പൂജ്യമാണ്: $\\mathbf{P(E) = 0}$.</li>
        <li><b>നിശ്ചയ സംഭവം:</b> തീർച്ചയായും സംഭവിക്കുന്ന കാര്യത്തിന്റെ സാധ്യത ഒന്നാണ്: $\\mathbf{P(E) = 1}$.</li>
        <li><b>പെട്ടികൾ താരതമ്യം ചെയ്യൽ:</b> രണ്ട് പെട്ടികളിലെ സാധ്യത താരതമ്യം ചെയ്യുമ്പോൾ എണ്ണമല്ല, മറിച്ച് ആകെ എണ്ണവുമായുള്ള അനുപാതമാണ് (ഭിന്നസംഖ്യ) താരതമ്യം ചെയ്യേണ്ടത്.</li>
      </ul>`,
    intuition_en: `<p>Probability maps raw uncertainty into numbers from 0 (impossible) to 1 (certain). If Box A has 6 black beads out of 11, its chance is $\\frac{6}{11} \\approx 54.5\\%$. If Box B has 5 black beads out of 9, its chance is $\\frac{5}{9} \\approx 55.6\\%$. Even though Box A has more black beads, Box B gives a higher probability because black makes up a larger fraction of its total.</p>`,
    intuition_ml: `<p>സാധ്യത എന്നത് അനിശ്ചിതത്വത്തെ $0$-നും $1$-നും ഇടയിലുള്ള കൃത്യമായ സംഖ്യയാക്കി മാറ്റുന്നു. ഒന്നാം പെട്ടിയിൽ 11 മുത്തുകളിൽ 6 കറുപ്പും, രണ്ടാം പെട്ടിയിൽ 9 മുത്തുകളിൽ 5 കറുപ്പുമുണ്ടെങ്കിൽ, ഒന്നാം പെട്ടിയിലെ സാധ്യത $\\frac{6}{11} \\approx 54.5\\%$ ഉം രണ്ടാം പെട്ടിയിലെ സാധ്യത $\\frac{5}{9} \\approx 55.6\\%$ ഉം ആണ്. ഒന്നാം പെട്ടിയിൽ കറുത്ത മുത്തുകൾ കൂടുതലുണ്ടെങ്കിലും, രണ്ടാം പെട്ടിയിൽ നിന്നാണ് കറുപ്പ് കിട്ടാൻ കൂടുതൽ സാധ്യത.</p>`,
    proof: {
      idea_en: 'Uniform probability principle: equal physical symmetry guarantees equal likelihood for all basic outcomes.',
      idea_ml: 'തുല്യസാധ്യതയുള്ള ഫലങ്ങളുടെ ഗണത്തിൽ നിന്ന് അനുപാത തത്വത്തിലൂടെ സാധ്യത സൂത്രവാക്യം രൂപീകരിക്കുന്നു.',
      why_en: 'Total probability of sample space is 1, distributed equally across all n elementary outcomes.',
      why_ml: 'സാമ്പിൾ സ്പേസിന്റെ ആകെ സാധ്യത 1 ആണ്; അത് തുല്യമായി വിഭജിക്കപ്പെടുന്നു.',
      rungs_en: [
        { why_en: 'Let sample space S consist of n mutually exclusive, equally likely elementary outcomes.', m: 'S = \\{e_1, e_2, \\dots, e_n\\}, \\quad \\sum_{i=1}^n P(e_i) = 1' },
        { why_en: 'By symmetry, each elementary outcome has equal weight.', m: 'P(e_1) = P(e_2) = \\dots = P(e_n) = \\frac{1}{n}' },
        { why_en: 'An event E is a subset containing k favourable outcomes.', m: 'E = \\{e_1, e_2, \\dots, e_k\\} \\subseteq S, \\quad n(E) = k' },
        { why_en: 'By addition of disjoint events, sum the probabilities of the k favourable outcomes.', m: 'P(E) = \\sum_{i=1}^k P(e_i) = k \\times \\frac{1}{n} = \\frac{k}{n} = \\frac{n(E)}{n(S)}' }
      ],
      rungs_ml: [
        { why_ml: 'തുല്യസാധ്യതയുള്ള $n$ അടിസ്ഥാന ഫലങ്ങൾ അടങ്ങിയതാണ് സാമ്പിൾ സ്പേസ് $S$.', m: 'S = \\{e_1, e_2, \\dots, e_n\\}, \\quad \\sum_{i=1}^n P(e_i) = 1' },
        { why_ml: 'ഓരോ അടിസ്ഥാന ഫലത്തിനും തുല്യ സാധ്യതയാണ്.', m: 'P(e_i) = \\frac{1}{n}' },
        { why_ml: 'സംഭവം $E$-യിൽ $k$ അനുകൂല ഫലങ്ങളുണ്ട്.', m: 'n(E) = k' },
        { why_ml: 'അന്യോന്യ വിരുദ്ധ സംഭവങ്ങളുടെ തുക നിയമപ്രകാരം.', m: 'P(E) = k \\times \\frac{1}{n} = \\frac{k}{n} = \\frac{n(E)}{n(S)}' }
      ]
    },
    needs: ['s.fraction-ops', 's.percentages'],
    traps_en: [
      'Comparing raw counts instead of fractions when comparing two boxes with different total items.',
      'Assuming outcomes are equally likely when conditions are physically biased or uneven.',
      'Writing probability values greater than 1 or negative numbers.'
    ],
    traps_ml: [
      'ആകെ എണ്ണം വ്യത്യസ്തമായിരിക്കുമ്പോൾ ഭിന്നസംഖ്യകൾക്ക് പകരം വെറും എണ്ണങ്ങൾ തമ്മിൽ താരതമ്യം ചെയ്യുന്നത് തെറ്റാണ്.',
      'തുല്യസാധ്യതയില്ലാത്ത സന്ദർഭങ്ങളിൽ വെറുതെ എണ്ണങ്ങൾ ഹരിക്കരുത്.',
      'സാധ്യത 1-ൽ കൂടുതലോ പൂജ്യത്തിൽ കുറവോ ആകാൻ പാടില്ല.'
    ],
    cards_en: [
      { q: 'A box contains 6 black and 4 white beads. What is the probability of picking a black bead as a fraction, decimal, and percentage?', a: 'Fraction: $\\frac{6}{10} = \\mathbf{\\frac{3}{5}}$; Decimal: $\\mathbf{0.6}$; Percentage: $\\mathbf{60\\%}$.', kind: 'apply' },
      { q: 'A number is chosen at random from 1 to 10. What is the probability that it is a prime number?', a: 'Primes in $\\{1,\\dots,10\\}$ are $\\{2, 3, 5, 7\\}$ (4 numbers). Probability $= \\frac{4}{10} = \\mathbf{\\frac{2}{5}}$ (or $0.4$, $40\\%$).', kind: 'apply' },
      { q: 'Can the probability of an event be 1.25 or -0.1?', a: 'No, probability must always satisfy $\\mathbf{0 \\le P(E) \\le 1}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു പെട്ടിയിൽ 6 കറുപ്പും 4 വെളുപ്പും മുത്തുകളുണ്ട്. കറുത്ത മുത്ത് കിട്ടാനുള്ള സാധ്യത ഭിന്നസംഖ്യ, ദശാംശം, ശതമാനം എന്നിവയിൽ എഴുതുക.', a: 'ഭിന്നസംഖ്യ: $\\mathbf{\\frac{3}{5}}$, ദശാംശം: $\\mathbf{0.6}$, ശതമാനം: $\\mathbf{60\\%}$.', kind: 'apply' },
      { q: '1 മുതൽ 10 വരെയുള്ള എണ്ണൽസംഖ്യകളിൽ നിന്ന് ഒരെണ്ണമെടുത്താൽ അത് അഭാജ്യസംഖ്യയാകാനുള്ള സാധ്യത എത്ര?', a: 'അഭാജ്യസംഖ്യകൾ $\\{2, 3, 5, 7\\}$ (4 എണ്ണം). സാധ്യത $= \\frac{4}{10} = \\mathbf{\\frac{2}{5}}$ (അഥവാ $0.4, 40\\%$).', kind: 'apply' },
      { q: 'ഒരു സംഭവത്തിന്റെ സാധ്യത 1.25 അല്ലെങ്കിൽ -0.1 ആകാൻ കഴിയുമോ?', a: 'ഇല്ല; സാധ്യത എപ്പോഴും $\\mathbf{0 \\le P(E) \\le 1}$ ആയിരിക്കണം.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.2 Geometric Probability (ജ്യാമിതീയ സാധ്യത)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.3.2.geometric-probability',
    sec: '10.3.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Geometric Probability',
    title_ml: 'ജ്യാമിതീയ സാധ്യത',
    oneLine_en: 'When a point is chosen at random within a geometric region, the probability that it falls inside a specific subregion is the ratio of their areas: P = (Target Area) / (Total Area).',
    oneLine_ml: 'ഒരു ജ്യാമിതീയ രൂപത്തിൽ സമസാധ്യതയോടെ കണ്ണടച്ച് ഒരു കുത്തിട്ടാൽ, അത് ഒരു പ്രത്യേക ഭാഗത്താകാനുള്ള സാധ്യത വിസ്തീർണ്ണങ്ങളുടെ അനുപാതമാണ്: $P = \\frac{\\text{ലക്ഷ്യഭാഗത്തിന്റെ പരപ്പളവ്}}{\\text{ആകെ പരപ്പളവ്}}$.',
    statement_en: `<p><b>Geometric Probability Principle:</b></p>
      <p>If a planar geometric shape $S$ contains a specified target region $A$, and a point is marked at random within $S$, then:</p>
      $$\\mathbf{P(\\text{Landing in } A) = \\frac{\\text{Area of target region } A}{\\text{Total area of region } S}}$$
      <p><b>Standard Textbook Configurations:</b></p>
      <ul>
        <li><b>Midpoint Square in Square:</b> Joining the midpoints of the four sides of a square produces a square whose area is exactly half the larger square:
          $$\\mathbf{P = \\frac{1}{2} = 50\\%}$$</li>
        <li><b>Triangle from Alternate Vertices of Regular Hexagon:</b> Connecting alternate vertices of a regular hexagon divides the hexagon into 6 equal small equilateral triangles, with the central triangle taking 3 of them:
          $$\\mathbf{P = \\frac{3}{6} = \\frac{1}{2} = 50\\%}$$</li>
        <li><b>Inscribed Circle in Square:</b> A circle of radius $r$ inside a square of side $2r$:
          $$\\mathbf{P = \\frac{\\pi r^2}{(2r)^2} = \\frac{\\pi}{4} \\approx 78.5\\%}$$</li>
        <li><b>Inscribed Square in Circle:</b> A square inscribed in a circle of radius $r$ has diagonal $2r$, side $s = r\\sqrt{2}$, and area $2r^2$:
          $$\\mathbf{P = \\frac{2r^2}{\\pi r^2} = \\frac{2}{\\pi} \\approx 63.7\\%}$$</li>
        <li><b>Hexagon from Intersecting Equilateral Triangles (Hexagram):</b> The star formed by two overlapping equilateral triangles has a central regular hexagon of area $\\frac{2}{3}$ of each triangle.</li>
      </ul>`,
    statement_ml: `<p><b>ജ്യാമിതീയ സാധ്യതയുടെ തത്വം:</b></p>
      <p>$S$ എന്ന വലിയ ജ്യാമിതീയ രൂപത്തിനുള്ളിൽ കണ്ണടച്ച് ഒരു കുത്തിട്ടാൽ, അത് അതിനുള്ളിലെ $A$ എന്ന ഭാഗത്താകാനുള്ള സാധ്യത:</p>
      $$\\mathbf{P = \\frac{A \\text{-യുടെ പരപ്പളവ്}}{S \\text{-ന്റെ ആകെ പരപ്പളവ്}}}$$
      <p><b>പാഠപുസ്തകത്തിലെ പ്രധാന മാതൃകകൾ:</b></p>
      <ul>
        <li><b>സമചതുരത്തിന്റെ മധ്യബിന്ദുക്കൾ ചേർത്ത സമചതുരം:</b> ഒരു സമചതുരത്തിന്റെ വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ കിട്ടുന്ന സമചതുരത്തിന്റെ പരപ്പളവ് വലിയ സമചതുരത്തിന്റെ പകുതിയാണ്:
          $$\\mathbf{P = \\frac{1}{2} = 50\\%}$$</li>
        <li><b>സമഷഡ്ഭുജത്തിലെ ഒന്നിടവിട്ട മൂലകൾ ചേർത്ത ത്രികോണം:</b> സമഷഡ്ഭുജത്തിലെ 6 തുല്യ സമഭുജ ത്രികോണങ്ങളിൽ 3 എണ്ണത്തിന്റെ പരപ്പളവ് ഈ ത്രികോണത്തിന് ലഭിക്കുന്നു:
          $$\\mathbf{P = \\frac{3}{6} = \\frac{1}{2} = 50\\%}$$</li>
        <li><b>സമചതുരത്തിലെ അന്തർവൃത്തം:</b> $2r$ വശമുള്ള സമചതുരത്തിൽ $r$ ആരമുള്ള വൃത്തം വരച്ചാൽ:
          $$\\mathbf{P = \\frac{\\pi r^2}{(2r)^2} = \\frac{\\pi}{4} \\approx 78.5\\%}$$</li>
        <li><b>വൃത്തത്തിലെ സമചതുരം:</b> $r$ ആരമുള്ള വൃത്തത്തിൽ വരച്ച സമചതുരത്തിന്റെ വിസ്തീർണ്ണം $2r^2$ ആണ്. സാധ്യത:
          $$\\mathbf{P = \\frac{2r^2}{\\pi r^2} = \\frac{2}{\\pi} \\approx 63.7\\%}$$</li>
        <li><b>തുല്യ സമഭുജ ത്രികോണങ്ങൾക്കിടയിലെ സമഷഡ്ഭുജം:</b> രണ്ട് തുല്യ സമഭുജ ത്രികോണങ്ങൾ ചേരുമ്പോഴുണ്ടാകുന്ന ഷഡ്ഭുജത്തിന്റെ പരപ്പളവ് ഒരു ത്രികോണത്തിന്റെ പരപ്പളവിന്റെ $\\frac{2}{3}$ ഭാഗമാണ്.</li>
      </ul>`,
    intuition_en: `<p>Since a planar region contains an infinite number of points, we cannot count individual dots. Instead, we measure the 2-dimensional size (area) of the target relative to the entire figure.</p>`,
    intuition_ml: `<p>പ്രതലത്തിൽ എണ്ണിയാലൊടുങ്ങാത്തത്ര ബിന്ദുക്കളുള്ളതിനാൽ ബിന്ദുക്കളുടെ എണ്ണമല്ല, മറിച്ച് വിസ്തീർണ്ണങ്ങളുടെ (പരപ്പളവുകളുടെ) അനുപാതമാണ് ഇവിടെ സാധ്യത നിർണ്ണയിക്കുന്നത്.</p>`,
    proof: {
      idea_en: 'Uniform continuous probability measure: probability is proportional to Lebesgue measure (area) across Euclidean domains.',
      idea_ml: 'പ്രതലത്തിൽ സമസാധ്യതയോടെ ബിന്ദു തിരഞ്ഞെടുക്കുമ്പോൾ വിസ്തീർണ്ണങ്ങളുടെ അനുപാതം സാധുവാകുന്നു.',
      why_en: 'Uniform distribution means equal areas have equal likelihood of being hit.',
      why_ml: 'തുല്യ വിസ്തീർണ്ണമുള്ള ഏത് രണ്ട് ഭാഗത്തും കുത്ത് വീഴാൻ തുല്യ സാധ്യതയാണ്.',
      rungs_en: [
        { why_en: 'Let point X be distributed uniformly across planar region S.', m: 'f(x, y) = \\frac{1}{\\text{Area}(S)} \\quad \\text{for } (x, y) \\in S' },
        { why_en: 'The probability of hitting target subregion A is the integral of density over A.', m: 'P(X \\in A) = \\iint_A f(x, y)\\,dx\\,dy = \\frac{1}{\\text{Area}(S)} \\iint_A 1\\,dx\\,dy' },
        { why_en: 'The integral of 1 over A equals Area(A).', m: 'P(X \\in A) = \\frac{\\text{Area}(A)}{\\text{Area}(S)}' }
      ],
      rungs_ml: [
        { why_ml: '$S$ എന്ന പ്രതലത്തിൽ സമസാധ്യതയോടെ ഒരു ബിന്ദു തിരഞ്ഞെടുക്കുന്നു.', m: 'f(x, y) = \\frac{1}{\\text{Area}(S)}' },
        { why_ml: 'ലക്ഷ്യഭാഗമായ $A$-യിൽ ബിന്ദു വീഴാനുള്ള സാധ്യത കണ്ടെത്തുന്നു.', m: 'P(A) = \\frac{1}{\\text{Area}(S)} \\times \\text{Area}(A)' },
        { why_ml: 'അതിനാൽ പരപ്പളവുകളുടെ അനുപാതം ലഭിക്കുന്നു.', m: 'P = \\frac{\\text{Area}(A)}{\\text{Area}(S)}' }
      ]
    },
    needs: ['m10.3.1.probability-as-measure-of-chance', 's.area-formulae'],
    traps_en: [
      'Using the ratio of perimeters or side lengths instead of the ratio of areas.',
      'Forgetting that when side length is scaled by k, area scales by k².',
      'Confusing the inscribed circle inside a square (pi / 4) with the inscribed square inside a circle (2 / pi).'
    ],
    traps_ml: [
      'വിസ്തീർണ്ണത്തിന്റെ അനുപാതത്തിന് പകരം ചുറ്റളവിന്റെയോ വശങ്ങളുടെയോ അനുപാതം എടുക്കരുത്.',
      'വശങ്ങൾ $k$ മടങ്ങായാൽ പരപ്പളവ് $k^2$ മടങ്ങാകുമെന്നത് ഓർക്കുക.',
      'സമചതുരത്തിലെ വൃത്തത്തിന്റെ സാധ്യതയും ($\\frac{\\pi}{4}$), വൃത്തത്തിലെ സമചതുരത്തിന്റെ സാധ്യതയും ($\\frac{2}{\\pi}$) തമ്മിൽ മാറിപ്പോകരുത്.'
    ],
    cards_en: [
      { q: 'A square is formed by joining the midpoints of the sides of a larger square. What is the probability that a random dot falls inside the inner square?', a: '$\\mathbf{\\frac{1}{2}}$ (or $50\\%$) because its area is exactly half of the larger square.', kind: 'recall' },
      { q: 'A circle is inscribed in a square. What is the probability that a random dot falls inside the circle?', a: '$\\mathbf{\\frac{\\pi}{4}} \\approx \\mathbf{78.5\\%}$.', kind: 'apply' },
      { q: 'A square is inscribed in a circle. What is the probability that a random dot falls inside the square?', a: '$\\mathbf{\\frac{2}{\\pi}} \\approx \\mathbf{63.7\\%}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു സമചതുരത്തിന്റെ വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ചുണ്ടാക്കിയ സമചതുരത്തിൽ കുത്ത് വീഴാനുള്ള സാധ്യത എത്ര?', a: 'പരപ്പളവ് പകുതിയായതിനാൽ സാധ്യത $\\mathbf{\\frac{1}{2}}$ (അഥവാ $50\\%$).', kind: 'recall' },
      { q: 'ഒരു സമചതുരത്തിലെ അന്തർവൃത്തത്തിൽ കുത്ത് വീഴാനുള്ള സാധ്യത എത്ര?', a: '$\\mathbf{\\frac{\\pi}{4}} \\approx \\mathbf{78.5\\%}$.', kind: 'apply' },
      { q: 'ഒരു വൃത്തത്തിൽ വരച്ച സമചതുരത്തിനുള്ളിൽ കുത്ത് വീഴാനുള്ള സാധ്യത എത്ര?', a: '$\\mathbf{\\frac{2}{\\pi}} \\approx \\mathbf{63.7\\%}$.', kind: 'apply' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.3 Pairs of Events & Systematic Tabulation (ജോഡികൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.3.3.pairs-of-events-and-product-rule',
    sec: '10.3.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Pairs of Events & Systematic Tabulation',
    title_ml: 'ജോഡി പരീക്ഷണങ്ങളിലെ സാധ്യത',
    oneLine_en: 'When two independent selections are made with m and n possibilities respectively, the total number of pair outcomes is m x n: n(S) = m x n.',
    oneLine_ml: 'ആദ്യ തിരഞ്ഞെടുപ്പിൽ $m$ ഫലങ്ങളും രണ്ടാമത്തേതിൽ $n$ ഫലങ്ങളും സാധ്യമാകുമ്പോൾ, ആകെ ജോഡി ഫലങ്ങൾ $m \\times n$ ആയിരിക്കും: $n(S) = m \\times n$.',
    statement_en: `<p><b>Fundamental Counting Principle for Pairs:</b></p>
      <p>If the first action has $m$ possible outcomes and the second independent action has $n$ possible outcomes, the total number of combined pair outcomes is:</p>
      $$\\mathbf{n(S) = m \\times n}$$
      <p><b>Systematic Tabulation Grid:</b></p>
      <p>List outcomes of the first choice as rows and outcomes of the second choice as columns to form an $m \\times n$ grid. Every cell represents one equally likely outcome pair $(a, b)$.</p>
      <p><b>Classic Textbook Pair Experiments:</b></p>
      <ul>
        <li><b>Two Slips from Number Boxes:</b> Box 1 with slips $\\{1, 2, 3, 4\\}$ ($m=4$) and Box 2 with slips $\\{1, 2, 3\\}$ ($n=3$). Total pairs $= 4 \\times 3 = 12$.</li>
        <li><b>Rolling Two Standard Dice:</b> First die has 6 faces, second has 6 faces. Total pairs $= 6 \\times 6 = 36$.</li>
        <li><b>Two-Digit Numbers with Given Digits:</b> If digits $\\{1, 2, 3\\}$ are used to form two-digit numbers, tens place has 3 choices, units place has 3 choices $\\implies 3 \\times 3 = 9$ numbers.</li>
        <li><b>Combinations of Dresses:</b> $m$ pants and $n$ shirts give $m \\times n$ distinct dress combinations.</li>
      </ul>`,
    statement_ml: `<p><b>ജോഡികളുടെ എണ്ണൽ തത്വം:</b></p>
      <p>ആദ്യത്തെ തിരഞ്ഞെടുപ്പിൽ $m$ ഫലങ്ങളും രണ്ടാമത്തെ തിരഞ്ഞെടുപ്പിൽ $n$ ഫലങ്ങളും സാധ്യമാണെങ്കിൽ, സാധ്യമായ ആകെ ജോഡി ഫലങ്ങളുടെ എണ്ണം:</p>
      $$\\mathbf{n(S) = m \\times n}$$
      <p><b>ക്രമമായ പട്ടികപ്പെടുത്തൽ:</b></p>
      <p>ആദ്യത്തെ തിരഞ്ഞെടുപ്പുകൾ വരികളായും രണ്ടാമത്തെ തിരഞ്ഞെടുപ്പുകൾ നിരകളായും എഴുതി പട്ടിക നിർമ്മിച്ചാൽ $m \\times n$ കള്ളികളിലായി എല്ലാ ജോഡികളും വിട്ടുപോകാതെ കണ്ടെത്താം.</p>
      <p><b>പ്രധാന പാഠപുസ്തക മാതൃകകൾ:</b></p>
      <ul>
        <li><b>പെട്ടികളിലെ സംഖ്യാ സ്ലിപ്പുകൾ:</b> ഒന്നാം പെട്ടിയിൽ $\\{1, 2, 3, 4\\}$ ($m=4$), രണ്ടാം പെട്ടിയിൽ $\\{1, 2, 3\\}$ ($n=3$). ആകെ ജോഡികൾ $= 4 \\times 3 = 12$.</li>
        <li><b>രണ്ട് പകിടകൾ (Dice) എറിയുമ്പോൾ:</b> ആകെ സാധ്യമായ ജോഡികൾ $= 6 \\times 6 = 36$.</li>
        <li><b>നിശ്ചിത അക്കങ്ങൾ കൊണ്ടുള്ള രണ്ടക്ക സംഖ്യകൾ:</b> $\\{1, 2, 3\\}$ എന്നീ അക്കങ്ങൾ ഉപയോഗിച്ച് ഉണ്ടാക്കാവുന്ന രണ്ടക്ക സംഖ്യകൾ $= 3 \\times 3 = 9$.</li>
        <li><b>വസ്ത്രങ്ങളുടെ ചേർച്ചകൾ:</b> $m$ പാന്റുകളും $n$ ഷർട്ടുകളും ഉപയോഗിച്ച് ഉണ്ടാക്കാവുന്ന ആകെ വസ്ത്രധാരണ രീതികൾ $= m \\times n$.</li>
      </ul>`,
    intuition_en: `<p>Fixing the first element allows $n$ possible choices for the second element. Doing this for each of the $m$ first elements produces $m$ rows of $n$ items, giving $m \\times n$ total possibilities.</p>`,
    intuition_ml: `<p>ആദ്യത്തെ സംഖ്യ ഉറപ്പിച്ചു നിർത്തിയാൽ രണ്ടാമത്തെ സംഖ്യയായി $n$ എണ്ണം വരാം. ആദ്യത്തെ സംഖ്യ മാറ്റിക്കൊണ്ട് ഇത്തരത്തിൽ $m$ തവണ ചെയ്യുമ്പോൾ ആകെ $m \\times n$ ജോഡികൾ ലഭിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Cartesian product of two discrete finite sets: cardinality of A x B equals |A| x |B|.',
      idea_ml: 'കാർട്ടീഷ്യൻ ഗുണനഫലത്തിന്റെ ഗണസിദ്ധാന്തം ഉപയോഗിച്ച് ആകെ ജോഡികളുടെ എണ്ണം തെളിയിക്കുന്നു.',
      why_en: 'Each element in set A forms an ordered pair with every distinct element in set B.',
      why_ml: 'ആദ്യ ഗണത്തിലെ ഓരോ അംഗവും രണ്ടാമത്തെ ഗണത്തിലെ ഓരോ അംഗവുമായും ചേർന്ന് തനതായ ജോഡി ഉണ്ടാക്കുന്നു.',
      rungs_en: [
        { why_en: 'Let set of outcomes for trial 1 be A = {a1, a2, ..., am} with |A| = m.', m: '|A| = m' },
        { why_en: 'Let set of outcomes for trial 2 be B = {b1, b2, ..., bn} with |B| = n.', m: '|B| = n' },
        { why_en: 'The combined sample space is the Cartesian product S = A x B.', m: 'S = \\{(a_i, b_j) : 1 \\le i \\le m, 1 \\le j \\le n\\}' },
        { why_en: 'By the multiplication principle, the total cardinality is m x n.', m: 'n(S) = |A \\times B| = m \\times n' }
      ],
      rungs_ml: [
        { why_ml: 'ആദ്യ പരീക്ഷണത്തിലെ ഫലങ്ങളുടെ ഗണം $A = \\{a_1, \\dots, a_m\\}$; അംഗങ്ങളുടെ എണ്ണം $m$.', m: '|A| = m' },
        { why_ml: 'രണ്ടാം പരീക്ഷണത്തിലെ ഫലങ്ങളുടെ ഗണം $B = \\{b_1, \\dots, b_n\\}$; അംഗങ്ങളുടെ എണ്ണം $n$.', m: '|B| = n' },
        { why_ml: 'ആകെ സാമ്പിൾ സ്പേസ് എന്നത് കാർട്ടീഷ്യൻ ഗുണനഫലമാണ്.', m: 'S = A \\times B' },
        { why_ml: 'ഗുണന തത്വപ്രകാരം ആകെ ജോഡികളുടെ എണ്ണം.', m: 'n(S) = m \\times n' }
      ]
    },
    needs: ['m10.3.1.probability-as-measure-of-chance'],
    traps_en: [
      'Adding outcomes (m + n) instead of multiplying them (m * n) when forming pairs.',
      'Forgetting that ordered pairs like (1, 2) and (2, 1) are distinct when drawn from different boxes or coins.',
      'Omitting doublets or counting them twice in a grid.'
    ],
    traps_ml: [
      'ജോഡികൾ കണക്കാക്കുമ്പോൾ ഗുണിക്കുന്നതിന് പകരം കൂട്ടുന്നത് ($m \\times n$-ന് പകരം $m + n$ എന്ന് കരുതുന്നത്) തെറ്റാണ്.',
      'രണ്ട് വ്യത്യസ്ത പെട്ടികളിൽ നിന്നോ പകിടകളിൽ നിന്നോ എടുക്കുമ്പോൾ $(1, 2)$-ഉം $(2, 1)$-ഉം വെവ്വേറെ ജോഡികളാണെന്ന് ഓർക്കുക.',
      'രണ്ട് ഒരേ സംഖ്യകൾ വരുന്ന ജോഡികൾ (ഡബിൾസ്) വിട്ടുപോകരുത്.'
    ],
    cards_en: [
      { q: 'Box 1 has 4 slips {1, 2, 3, 4} and Box 2 has 2 slips {1, 2}. What is the total number of pairs and the probability that the sum is odd?', a: 'Total pairs $= 4 \\times 2 = 8$. Odd sums: (1,2), (2,1), (3,2), (4,1) — 4 pairs. Probability $= \\frac{4}{8} = \\mathbf{\\frac{1}{2}}$.', kind: 'apply' },
      { q: 'Rajani has 3 necklaces (green, blue, red) and 3 pairs of earrings (green, blue, red). What is the probability of wearing the same colour for both?', a: 'Total combinations $= 3 \\times 3 = 9$. Same colour: 3 ways. Probability $= \\frac{3}{9} = \\mathbf{\\frac{1}{3}}$.', kind: 'apply' },
      { q: 'Two dice are rolled. How many total outcomes are there, and what is the probability of rolling a sum of 7?', a: 'Total $= 6 \\times 6 = 36$. Pairs with sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — 6 pairs. Probability $= \\frac{6}{36} = \\mathbf{\\frac{1}{6}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒന്നാം പെട്ടിയിൽ {1, 2, 3, 4}, രണ്ടാം പെട്ടിയിൽ {1, 2}. ആകെ എത്ര ജോഡികളുണ്ട്? തുക ഒറ്റസംഖ്യയാകാനുള്ള സാധ്യത എത്ര?', a: 'ആകെ ജോഡികൾ $= 4 \\times 2 = 8$. തുക ഒറ്റസംഖ്യയാകുന്നത്: (1,2), (2,1), (3,2), (4,1) — 4 എണ്ണം. സാധ്യത $= \\frac{4}{8} = \\mathbf{\\frac{1}{2}}$.', kind: 'apply' },
      { q: 'രജനിക്ക് പച്ച, നീല, ചുവപ്പ് എന്നീ നിറങ്ങളിലുള്ള 3 മാലകളും 3 കമ്മലുകളുമുണ്ട്. ഒരേ നിറം ധരിക്കാനുള്ള സാധ്യത എത്ര?', a: 'ആകെ രീതികൾ $= 3 \\times 3 = 9$. ഒരേ നിറം $= 3$ എണ്ണം. സാധ്യത $= \\frac{3}{9} = \\mathbf{\\frac{1}{3}}$.', kind: 'apply' },
      { q: 'രണ്ട് പകിടകൾ ഒരുമിച്ച് ഉരുട്ടുമ്പോൾ ആകെ എത്ര ഫലങ്ങൾ കിട്ടും? തുക 7 ആകാനുള്ള സാധ്യത എത്ര?', a: 'ആകെ ഫലങ്ങൾ $= 6 \\times 6 = 36$. തുക 7 ആകുന്ന ജോഡികൾ 6 എണ്ണം. സാധ്യത $= \\frac{6}{36} = \\mathbf{\\frac{1}{6}}$.', kind: 'apply' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.3.4 More Pairs, Frequency & Complementary Probability (കൂടുതൽ ജോഡികളും ആവൃത്തിയും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.3.4.complementary-events-and-applications',
    sec: '10.3.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'More Pairs, Frequency & Complementary Events',
    title_ml: 'കൂടുതൽ ജോഡികളും ആവൃത്തിയും (പൂരക സംഭവങ്ങൾ)',
    oneLine_en: 'In complex compound selections, calculate individual and joint counts. For "at least one" events, use the complementary rule: P(at least one) = 1 - P(none).',
    oneLine_ml: 'സങ്കീർണ്ണമായ പരീക്ഷണങ്ങളിൽ ആകെ ജോഡികൾ കണ്ടെത്തി സാധ്യത കണക്കാക്കുന്നു. \'ചുരുങ്ങിയത് ഒന്ന്\' എന്നതിന് പൂരക നിയമം ഉപയോഗിക്കുന്നു: $P(\\text{ചുരുങ്ങിയത് ഒന്ന്}) = 1 - P(\\text{ഒന്നുമില്ല})$.',
    statement_en: `<p><b>Classroom & Multi-Group Selection:</b></p>
      <p>Suppose Class 10A has $b_1$ boys and $g_1$ girls (total $n_1 = b_1 + g_1$), and Class 10B has $b_2$ boys and $g_2$ girls (total $n_2 = b_2 + g_2$). Selecting one student from each class gives:</p>
      $$\\mathbf{\\text{Total Pairs } n(S) = n_1 \\times n_2}$$
      <ul>
        <li><b>Both Girls:</b> $n = g_1 \\times g_2 \\implies P(\\text{both girls}) = \\frac{g_1 g_2}{n_1 n_2}$</li>
        <li><b>Both Boys:</b> $n = b_1 \\times b_2 \\implies P(\\text{both boys}) = \\frac{b_1 b_2}{n_1 n_2}$</li>
        <li><b>One Boy and One Girl:</b> $n = b_1 g_2 + g_1 b_2 \\implies P = \\frac{b_1 g_2 + g_1 b_2}{n_1 n_2}$</li>
        <li><b>At Least One Boy:</b> $P(\\text{at least one boy}) = 1 - P(\\text{both girls}) = 1 - \\frac{g_1 g_2}{n_1 n_2}$</li>
      </ul>
      <p><b>Probability and Relative Frequency:</b></p>
      <p>When an experiment is repeated a very large number of times, the relative frequency of an event stabilizes around its theoretical probability (Law of Large Numbers).</p>
      <p><b>Two-Digit Number Properties:</b></p>
      <p>The set of all two-digit numbers has size $99 - 10 + 1 = 90$. Equal digits (11, 22, ..., 99) number 9; first digit greater than second numbers $\\frac{90 - 9}{2} = \\frac{81 - 9 + 9}{2} = 36$ numbers.</p>`,
    statement_ml: `<p><b>ക്ലാസ് മുറികളിൽ നിന്നുള്ള തിരഞ്ഞെടുപ്പ്:</b></p>
      <p>ക്ലാസ് 10A-യിൽ $b_1$ ആൺകുട്ടികളും $g_1$ പെൺകുട്ടികളുമുണ്ട് (ആകെ $n_1 = b_1 + g_1$). ക്ലാസ് 10B-യിൽ $b_2$ ആൺകുട്ടികളും $g_2$ പെൺകുട്ടികളുമുണ്ട് (ആകെ $n_2 = b_2 + g_2$). രണ്ട് ക്ലാസിൽ നിന്നും ഓരോരുത്തരെ തിരഞ്ഞെടുക്കുമ്പോൾ:</p>
      $$\\mathbf{\\text{ആകെ ജോഡികൾ } n(S) = n_1 \\times n_2}$$
      <ul>
        <li><b>രണ്ടും പെൺകുട്ടികൾ:</b> $n = g_1 \\times g_2 \\implies P(\\text{രണ്ടും പെൺകുട്ടികൾ}) = \\frac{g_1 g_2}{n_1 n_2}$</li>
        <li><b>രണ്ടും ആൺകുട്ടികൾ:</b> $n = b_1 \\times b_2 \\implies P(\\text{രണ്ടും ആൺകുട്ടികൾ}) = \\frac{b_1 b_2}{n_1 n_2}$</li>
        <li><b>ഒരാൺകുട്ടിയും ഒരു പെൺകുട്ടിയും:</b> $n = b_1 g_2 + g_1 b_2 \\implies P = \\frac{b_1 g_2 + g_1 b_2}{n_1 n_2}$</li>
        <li><b>ചുരുങ്ങിയത് ഒരാൺകുട്ടി:</b> $P(\\text{ചുരുങ്ങിയത് ഒരാൺകുട്ടി}) = 1 - P(\\text{രണ്ടും പെൺകുട്ടികൾ}) = 1 - \\frac{g_1 g_2}{n_1 n_2}$</li>
      </ul>
      <p><b>സാധ്യതയും ആവൃത്തിയും:</b></p>
      <p>ഒരു പരീക്ഷണം വളരെ കൂടുതൽ തവണ ആവർത്തിക്കുമ്പോൾ, ഓരോ ഫലത്തിന്റെയും ആപേക്ഷിക ആവൃത്തി അതിന്റെ സാധ്യതയോട് അടുക്കുന്നു.</p>
      <p><b>രണ്ടക്ക സംഖ്യകളുടെ പ്രത്യേകതകൾ:</b></p>
      <p>10 മുതൽ 99 വരെയുള്ള ആകെയുള്ള രണ്ടക്ക സംഖ്യകൾ $= 99 - 10 + 1 = 90$. രണ്ടക്കങ്ങളും തുല്യമായ സംഖ്യകൾ 9 എണ്ണമാണ് (11, 22, ..., 99).</p>`,
    intuition_en: `<p>Instead of summing every outcome that has at least one success, simply find the probability of zero successes and subtract it from 1. This "complementary event" technique simplifies multi-group probability problems.</p>`,
    intuition_ml: `<p>ചുരുങ്ങിയത് ഒന്ന് ജയിക്കാനുള്ള സാധ്യത കാണാൻ, ഒന്നും സംഭവിക്കാതിരിക്കാനുള്ള സാധ്യത കണ്ട് അതിനെ 1-ൽ നിന്ന് കുറച്ചാൽ മതിയാകും.</p>`,
    proof: {
      idea_en: 'Partition sample space into event E and its disjoint complement E prime.',
      idea_ml: 'സാമ്പിൾ സ്പേസിനെ സംഭവവും അതിന്റെ പൂരകവുമായി വിഭജിക്കുന്നു.',
      why_en: 'E and E prime are disjoint and their union is S, so P(E) + P(E prime) = P(S) = 1.',
      why_ml: 'ഇവ രണ്ടും ചേരുമ്പോൾ ആകെ ഗണം ലഭിക്കുന്നു, പൊതുവായി ഒന്നുമില്ല.',
      rungs_en: [
        { why_en: 'Sample space is partitioned into E and not-E.', m: 'E \\cup E\' = S, \\quad E \\cap E\' = \\emptyset' },
        { why_en: 'Total probability of sample space equals 1.', m: 'P(E \\cup E\') = P(E) + P(E\') = P(S) = 1' },
        { why_en: 'Subtract P(E prime) from 1 to obtain P(E).', m: 'P(E) = 1 - P(E\')' }
      ],
      rungs_ml: [
        { why_ml: 'സംഭവവും അതിന്റെ പൂരകവും ചേർന്നതാണ് സാമ്പിൾ സ്പേസ്.', m: 'E \\cup E\' = S, \\quad E \\cap E\' = \\emptyset' },
        { why_ml: 'ആകെ സാധ്യത 1 ആണ്.', m: 'P(E) + P(E\') = 1' },
        { why_ml: 'ഇരുവശത്തുനിന്നും പൂരകത്തിന്റെ സാധ്യത കുറയ്ക്കുമ്പോൾ.', m: 'P(E) = 1 - P(E\')' }
      ]
    },
    needs: ['m10.3.3.pairs-of-events-and-product-rule'],
    traps_en: [
      'Forgetting that "at least one boy" INCLUDES the case where both are boys.',
      'Counting the number of 2-digit numbers as 99 - 10 = 89 instead of 90.',
      'Confusing experimental relative frequency with exact theoretical probability.'
    ],
    traps_ml: [
      '\'ചുരുങ്ങിയത് ഒരാൺകുട്ടി\' എന്നതിൽ രണ്ടും ആൺകുട്ടികളാകുന്ന സന്ദർഭവും ഉൾപ്പെടുന്നുവെന്ന് ഓർക്കുക.',
      'രണ്ടക്ക സംഖ്യകൾ 90 എണ്ണമാണ് (10 മുതൽ 99 വരെ: $99 - 10 + 1 = 90$), 89 അല്ല.',
      'പരീക്ഷണ ആവൃത്തിയും തത്വചിന്താപരമായ കൃത്യമായ സാധ്യതയും തമ്മിൽ വേർതിരിച്ചു മനസ്സിലാക്കുക.'
    ],
    cards_en: [
      { q: 'Class 10A has 30 boys and 20 girls; Class 10B has 15 boys and 25 girls. One student is picked from each. What is the probability that both are girls?', a: 'Total pairs $= 50 \\times 40 = 2000$. Both girls $= 20 \\times 25 = 500$. Probability $= \\frac{500}{2000} = \\mathbf{\\frac{1}{4}}$.', kind: 'apply' },
      { q: 'In the same classroom setup, what is the probability that at least one is a boy?', a: '$P(\\text{at least one boy}) = 1 - P(\\text{both girls}) = 1 - \\frac{1}{4} = \\mathbf{\\frac{3}{4}}$.', kind: 'apply' },
      { q: 'A two-digit number is chosen at random from 10 to 99. What is the probability that both digits are identical?', a: 'Identical digit numbers are 11, 22, 33, ..., 99 (9 numbers). Total 2-digit numbers $= 90$. Probability $= \\frac{9}{90} = \\mathbf{\\frac{1}{10}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ക്ലാസ് 10A-യിൽ 30 ആൺകുട്ടികളും 20 പെൺകുട്ടികളും; 10B-യിൽ 15 ആൺകുട്ടികളും 25 പെൺകുട്ടികളും. ഓരോരുത്തരെ എടുത്താൽ രണ്ടും പെൺകുട്ടികളാകാനുള്ള സാധ്യത എത്ര?', a: 'ആകെ ജോഡികൾ $= 50 \\times 40 = 2000$. രണ്ടും പെൺകുട്ടികൾ $= 20 \\times 25 = 500$. സാധ്യത $= \\frac{500}{2000} = \\mathbf{\\frac{1}{4}}$.', kind: 'apply' },
      { q: 'ഇതേ ക്ലാസുകളിൽ നിന്ന് ചുരുങ്ങിയത് ഒരാൺകുട്ടിയെങ്കിലും ഉണ്ടാകാനുള്ള സാധ്യത എത്ര?', a: '$1 - P(\\text{രണ്ടും പെൺകുട്ടികൾ}) = 1 - \\frac{1}{4} = \\mathbf{\\frac{3}{4}}$.', kind: 'apply' },
      { q: '10 മുതൽ 99 വരെയുള്ള രണ്ടക്ക സംഖ്യകളിൽ നിന്ന് ഒരെണ്ണമെടുത്താൽ രണ്ട് അക്കങ്ങളും തുല്യമാകാനുള്ള സാധ്യത എത്ര?', a: 'തുല്യമായവ 9 എണ്ണം (11, 22, ..., 99). ആകെ $= 90$. സാധ്യത $= \\frac{9}{90} = \\mathbf{\\frac{1}{10}}$.', kind: 'apply' }
    ]
  }
);
