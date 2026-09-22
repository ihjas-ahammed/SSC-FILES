/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 10: Real Numbers (രേഖീയസംഖ്യകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.10.1.real-numbers-and-number-line',
    sec: '9.10.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Real Numbers and the Number Line',
    title_ml: 'രേഖീയസംഖ്യകളും സംഖ്യാരേഖയും',
    oneLine_en: 'Every point on the continuous number line corresponds to a unique real number (rational or irrational), and every real number corresponds to exactly one point.',
    oneLine_ml: 'സംഖ്യാരേഖയിലെ ഓരോ ബിന്ദുവും പ്രതിനിധീകരിക്കുന്നത് ഒരു അദ്വിതീയ രേഖീയസംഖ്യയെയാണ് (ഭിന്നകമോ അഭിന്നകമോ); തിരിച്ചും ഓരോ രേഖീയസംഖ്യയ്ക്കും സംഖ്യാരേഖയിൽ കൃത്യം ഒരു ബിന്ദുവുണ്ട്.',
    statement_en: `<p>A straight line on which a reference point $0$ (origin) and a unit distance are chosen is called a <b>number line</b> (or real line). Points to the right of $0$ represent positive numbers, and points to the left represent negative numbers.</p>
      <p><b>Completeness of the Real Line:</b></p>
      <p>The set of <b>real numbers</b> ($\\mathbb{R}$) is the complete union of all rational numbers (terminating or repeating fractions $\\frac{p}{q}$) and irrational numbers (non-terminating, non-repeating numbers such as $\\sqrt{2}, \\sqrt{3}, \\pi$).</p>
      $$\\mathbf{\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{Q}'}$$
      <p><b>Geometric Order:</b> For any two real numbers $a$ and $b$, if $a < b$, then the point corresponding to $a$ lies strictly to the <b>left</b> of the point corresponding to $b$ on the horizontal number line.</p>`,
    statement_ml: `<p>$0$ എന്ന മൂലബിന്ദുവും (ആധാരബിന്ദു) ഒരു യൂണിറ്റ് അകലവും നിശ്ചയിച്ച വരയെയാണ് <b>സംഖ്യാരേഖ</b> എന്ന് വിളിക്കുന്നത്. പൂജ്യത്തിന് വലതുവശത്തുള്ള ബിന്ദുക്കൾ ധനസംഖ്യകളെയും, ഇടതുവശത്തുള്ള ബിന്ദുക്കൾ ഋണസംഖ്യകളെയും സൂചിപ്പിക്കുന്നു.</p>
      <p><b>രേഖീയസംഖ്യകളുടെ പൂർണ്ണത:</b></p>
      <p>എല്ലാ ഭിന്നകസംഖ്യകളും (അവസാനിക്കുന്നതോ ആവർത്തിക്കുന്നതോ ആയ ഭിന്നരൂപങ്ങൾ $\\frac{p}{q}$) അഭിന്നകസംഖ്യകളും (അവസാനിക്കാത്തതും ആവർത്തിക്കാത്തതുമായ $\\sqrt{2}, \\sqrt{3}, \\pi$ തുടങ്ങിയ സംഖ്യകൾ) ചേർന്ന സംഖ്യാസമൂഹത്തെയാണ് <b>രേഖീയസംഖ്യകൾ</b> എന്ന് പറയുന്നത്.</p>
      $$\\mathbf{\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{Q}'}$$
      <p><b>സ്ഥാനക്രമം:</b> $a < b$ ആണെങ്കിൽ, സംഖ്യാരേഖയിൽ $a$ എന്ന സംഖ്യ $b$ എന്ന സംഖ്യയുടെ കൃത്യമായി <b>ഇടതുവശത്ത്</b> ആയിരിക്കും സ്ഥിതിചെയ്യുന്നത്.</p>`,
    intuition_en: `<p>If you stretch an unbroken thread across space, rational fractions leave infinitesimally tiny gaps where square roots and pi live. The real line fills every microscopic gap completely without any holes.</p>`,
    intuition_ml: `<p>സംഖ്യാരേഖയിൽ ഭിന്നസംഖ്യകൾ അടയാളപ്പെടുത്തിയാലും ഇടയിൽ സൂക്ഷ്മമായ വിടവുകൾ അവശേഷിക്കും. ഈ വിടവുകളിലാണ് വർഗ്ഗമൂലങ്ങളും പൈയും പോലുള്ള അഭിന്നകങ്ങൾ നിലകൊള്ളുന്നത്; ഇവയെല്ലാം ചേരുമ്പോൾ രേഖ ഒരിടത്തും മുറിയാതെ പൂർണ്ണമാകുന്നു.</p>`,
    proof: {
      idea_en: 'Dedekind cut / Cantor continuum hypothesis: bijection between points of a geometric line and real numbers.',
      idea_ml: 'ജ്യാമിതീയ രേഖയിലെ ബിന്ദുക്കളും രേഖീയസംഖ്യകളും തമ്മിലുള്ള ഏകേക സംബന്ധം.',
      why_en: 'Every length measurable with a geometric segment corresponds to a unique real coordinate.',
      why_ml: 'ഏതൊരു അളക്കാവുന്ന രേഖാഖണ്ഡത്തിന്റെ നീളവും സംഖ്യാരേഖയിലെ ഒരു രേഖീയസംഖ്യയ്ക്ക് തുല്യമാണ്.',
      rungs_en: [
        { why_en: 'Choose origin 0 and unit step 1 to establish positive and negative coordinate rays.', m: '\\text{Origin } O \\leftrightarrow 0, \\; P_1 \\leftrightarrow 1' },
        { why_en: 'Lengths of diagonal segments give irrational coordinates geometrically.', m: '\\text{Diagonal of unit square } = \\sqrt{2} \\in \\mathbb{R}' },
        { why_en: 'Order corresponds to position along oriented direction.', m: 'a < b \\iff \\text{point}(a) \\text{ is to the left of } \\text{point}(b)' }
      ],
      rungs_ml: [
        { why_ml: '0-ഉം 1-ഉം അടയാളപ്പെടുത്തി ദിശ നിശ്ചയിക്കുന്നു.', m: 'O \\leftrightarrow 0, \\; 1 \\leftrightarrow 1' },
        { why_ml: 'വികർണ്ണങ്ങൾ വരച്ച് അഭിന്നകങ്ങൾ സംഖ്യാരേഖയിൽ അടയാളപ്പെടുത്തുന്നു.', m: '\\sqrt{2} \\in \\mathbb{R}' },
        { why_ml: 'ചെറിയ സംഖ്യ എപ്പോഴും വലിയ സംഖ്യയുടെ ഇടതുവശത്തായിരിക്കും.', m: 'a < b' }
      ]
    },
    needs: ['m9.4.1.diagonal-of-square-and-sqrt2', 'p.4.5'],
    traps_en: [
      'Negative numbers with larger absolute values lie further to the left (e.g. -5 < -2, not -2 < -5).',
      'Real numbers include BOTH rational and irrational numbers; they are not just integers.'
    ],
    traps_ml: [
      'വലിയ കേവലവിലയുള്ള ഋണസംഖ്യകൾ കൂടുതൽ ഇടത്താണ് സ്ഥിതിചെയ്യുന്നത് (ഉദാഹരണത്തിന് $-5 < -2$, $-2 < -5$ അല്ല).',
      'രേഖീയസംഖ്യകളിൽ ഭിന്നകങ്ങളും അഭിന്നകങ്ങളും ഉൾപ്പെടുന്നു; അവ പൂർണ്ണസംഖ്യകൾ മാത്രമല്ല.'
    ],
    cards_en: [
      { q: 'Which number is smaller: -7 or -3?', a: '$-7$ is smaller ($-7 < -3$) because it lies to the left of $-3$ on the number line.', kind: 'recall' },
      { q: 'Is the square root of 5 a real number?', a: 'Yes, $\\sqrt{5}$ is an irrational number and a member of the real numbers.', kind: 'recall' },
      { q: 'What is the relation between rational numbers and real numbers?', a: 'Every rational number is a real number ($\\mathbb{Q} \\subset \\mathbb{R}$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '-7, -3 എന്നിവയിൽ ഏതാണ് ചെറിയ സംഖ്യ?', a: '$-7$ ആണ് ചെറിയ സംഖ്യ ($-7 < -3$), കാരണം സംഖ്യാരേഖയിൽ അത് $-3$-ന്റെ ഇടതുവശത്താണ്.', kind: 'recall' },
      { q: '$\\sqrt{5}$ ഒരു രേഖീയസംഖ്യയാണോ?', a: 'അതെ, $\\sqrt{5}$ ഒരു അഭിന്നകസംഖ്യയും അതിനാൽ ഒരു രേഖീയസംഖ്യയുമാണ്.', kind: 'recall' },
      { q: 'ഭിന്നകസംഖ്യകളും രേഖീയസംഖ്യകളും തമ്മിലുള്ള ബന്ധമെന്ത്?', a: 'എല്ലാ ഭിന്നകസംഖ്യകളും രേഖീയസംഖ്യകളാണ് ($\\mathbb{Q} \\subset \\mathbb{R}$).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.10.2.absolute-value-and-modulus',
    sec: '9.10.2',
    kind: 'definition',
    tier: 'core',
    title_en: 'Absolute Value & Distance on the Line',
    title_ml: 'കേവലവിലയും അകലവും',
    oneLine_en: 'The absolute value |x| of a real number represents its non-negative distance from 0 on the number line; the distance between any two numbers x and y is |x - y|.',
    oneLine_ml: 'ഒരു രേഖീയസംഖ്യയുടെ കേവലവില |x| എന്നത് സംഖ്യാരേഖയിൽ പൂജ്യത്തിൽ നിന്നുള്ള അതിന്റെ അകലമാണ് (ചിഹ്നമില്ലാത്ത അളവ്); x, y എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം |x - y| ആണ്.',
    statement_en: `<p><b>Definition of Absolute Value:</b></p>
      <p>For any real number $x$, its absolute value (or modulus) $|x|$ is defined algebraically as:</p>
      $$\\mathbf{|x| = \\begin{cases} x, & \\text{if } x \\ge 0 \\\\ -x, & \\text{if } x < 0 \\end{cases}}$$
      <p><b>Geometric Meaning:</b> $|x|$ represents the physical distance between the point $x$ and the origin $0$. Because distance is never negative, $|x| \\ge 0$ for all real $x$.</p>
      <p><b>Distance Between Two Points:</b></p>
      <p>The distance between any two numbers $x$ and $y$ on the real line is the absolute value of their difference:</p>
      $$\\mathbf{\\text{Distance}(x, y) = |x - y| = |y - x|}$$
      <p>If $x > y$, then the distance is simply $x - y$. If $x < y$, the distance is $y - x = -(x - y)$.</p>`,
    statement_ml: `<p><b>കേവലവിലയുടെ നിർവ്വചനം:</b></p>
      <p>ഏതൊരു രേഖീയസംഖ്യ $x$-ന്റെയും കേവലവില $|x|$ ഇപ്രകാരം നിർവ്വചിക്കുന്നു:</p>
      $$\\mathbf{|x| = \\begin{cases} x, & x \\ge 0 \\text{ ആണെങ്കിൽ} \\\\ -x, & x < 0 \\text{ ആണെങ്കിൽ} \\end{cases}}$$
      <p><b>ജ്യാമിതീയ അർത്ഥം:</b> സംഖ്യാരേഖയിൽ $0$-ൽ നിന്ന് $x$ എന്ന ബിന്ദുവിലേക്കുള്ള അകലമാണ് $|x|$. അകലം ഒരിക്കലും ഋണമാകില്ല എന്നതിനാൽ എല്ലാ രേഖീയസംഖ്യകൾക്കും $|x| \\ge 0$ ആയിരിക്കും.</p>
      <p><b>രണ്ട് ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം:</b></p>
      <p>സംഖ്യാരേഖയിലെ രണ്ട് ബിന്ദുക്കൾ $x, y$ തമ്മിലുള്ള അകലം അവയുടെ വ്യത്യാസത്തിന്റെ കേവലവിലയാണ്:</p>
      $$\\mathbf{\\text{അകലം}(x, y) = |x - y| = |y - x|}$$
      <p>$x > y$ ആണെങ്കിൽ അകലം $x - y$-ഉം, $x < y$ ആണെങ്കിൽ അകലം $y - x$-ഉം ആണ്.</p>`,
    intuition_en: `<p>Imagine walking along a numbered path: whether you step 4 paces to the east (+4) or 4 paces to the west (-4), your pedometer counts a positive distance of 4 steps: |-4| = |+4| = 4.</p>`,
    intuition_ml: `<p>സംഖ്യാരേഖയിലൂടെ നടക്കുമ്പോൾ, കിഴക്കോട്ട് 4 ചുവട് (+4) വെച്ചാലും പടിഞ്ഞാറോട്ട് 4 ചുവട് (-4) വെച്ചാലും നാം സഞ്ചരിച്ച അകലം 4 തന്നെയാണ്: $|-4| = |+4| = 4$.</p>`,
    proof: {
      idea_en: 'Subtract the smaller coordinate from the larger coordinate to ensure a strictly non-negative length.',
      idea_ml: 'വലിയ സംഖ്യയിൽ നിന്ന് ചെറിയ സംഖ്യ കുറച്ചാൽ എപ്പോഴും അഋണമായ അകലം ലഭിക്കുന്നു.',
      why_en: 'Length of a segment is invariant under reflection and coordinate translation.',
      why_ml: 'ഒരു രേഖാഖണ്ഡത്തിന്റെ നീളം എപ്പോഴും ധനസംഖ്യയായിരിക്കും.',
      rungs_en: [
        { why_en: 'Let points be a and b with a > b.', m: 'd = a - b > 0' },
        { why_en: 'If b > a, length is b - a = -(a - b).', m: 'd = -(a - b) > 0' },
        { why_en: 'Both cases unify into the modulus notation.', m: 'd = |a - b|' }
      ],
      rungs_ml: [
        { why_ml: '$a > b$ ആണെങ്കിൽ അകലം.', m: 'd = a - b > 0' },
        { why_ml: '$b > a$ ആണെങ്കിൽ അകലം.', m: 'd = b - a = -(a - b)' },
        { why_ml: 'ഇവയെ ഒന്നിച്ചു ചേർത്തെഴുതുന്നതാണ് കേവലവില.', m: 'd = |a - b|' }
      ]
    },
    needs: ['m9.10.1.real-numbers-and-number-line'],
    traps_en: [
      '|-x| is NOT necessarily positive if x is not yet evaluated, but for any real number c, |-c| = |c|.',
      'Distance is always |x - y|, not (x - y) which could be negative if x < y.'
    ],
    traps_ml: [
      'കേവലവില ഒരിക്കലും ഋണസംഖ്യയാകില്ല: $|-5| = 5$, $-5$ അല്ല.',
      'രണ്ട് ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം എപ്പോഴും $|x - y|$ ആണ്, $x < y$ ആകുമ്പോൾ $x - y$ ഋണമാകും.'
    ],
    cards_en: [
      { q: 'What is |-12|?', a: '$|-12| = 12$.', kind: 'apply' },
      { q: 'What is the distance between the points 5 and -3 on the number line?', a: '$\\text{Distance} = |5 - (-3)| = |5 + 3| = \\mathbf{8}$.', kind: 'apply' },
      { q: 'If x < 0, what is the value of |x| in algebraic form?', a: '$|x| = -x$ (which is positive because $-(-c) = +c$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '|-12|-ന്റെ വില എത്ര?', a: '$|-12| = 12$.', kind: 'apply' },
      { q: 'സംഖ്യാരേഖയിൽ 5, -3 എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം എത്ര?', a: '$\\text{അകലം} = |5 - (-3)| = |5 + 3| = \\mathbf{8}$.', kind: 'apply' },
      { q: '$x < 0$ ആണെങ്കിൽ $|x|$-ന്റെ ബീജഗണിത രൂപമെന്ത്?', a: '$|x| = -x$ ($x$ ഋണമായതിനാൽ $-x$ ധനസംഖ്യയായിരിക്കും).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.10.3.absolute-value-equations',
    sec: '9.10.3',
    kind: 'rule',
    tier: 'core',
    title_en: 'Equations with Absolute Values (|x - a| = k)',
    title_ml: 'കേവലവില സമവാക്യങ്ങൾ (|x - a| = k)',
    oneLine_en: 'The equation |x - a| = k (k > 0) means the point x is at a distance of k from a on the real line, yielding exactly two solutions: x = a + k and x = a - k.',
    oneLine_ml: '|x - a| = k (k > 0) എന്ന സമവാക്യത്തിന്റെ അർത്ഥം സംഖ്യാരേഖയിൽ a-ൽ നിന്നുള്ള x-ന്റെ അകലം k ആണെന്നാണ്; ഇതിന് x = a + k, x = a - k എന്നീ രണ്ട് പരിഹാരങ്ങളുണ്ട്.',
    statement_en: `<p><b>Geometric Meaning of $|x - a| = k$:</b></p>
      <p>The equation $|x - a| = k$ asserts that the distance between an unknown real number $x$ and a fixed reference number $a$ is exactly $k$ units.</p>
      <p>On the number line, starting at $a$:</p>
      <ul>
        <li>Moving $k$ units to the <b>right</b> gives: $x = a + k$</li>
        <li>Moving $k$ units to the <b>left</b> gives: $x = a - k$</li>
      </ul>
      $$\\mathbf{|x - a| = k \\iff x - a = k \\quad \\text{or} \\quad x - a = -k}$$
      $$\\mathbf{x = a + k \\quad \\text{or} \\quad x = a - k}$$
      <p><b>Special Cases:</b></p>
      <ul>
        <li>If $k = 0$: $|x - a| = 0 \\implies x = a$ (unique solution).</li>
        <li>If $k < 0$: $|x - a| = k$ has <b>no real solution</b>, because absolute value cannot be negative.</li>
      </ul>`,
    statement_ml: `<p><b>$|x - a| = k$ എന്നതിന്റെ ജ്യാമിതീയ അർത്ഥം:</b></p>
      <p>സംഖ്യാരേഖയിൽ $a$ എന്ന ബിന്ദുവിൽ നിന്ന് $x$-ലേക്കുള്ള അകലം കൃത്യം $k$ യൂണിറ്റാണ് എന്നാണ് ഈ സമവാക്യം വ്യക്തമാക്കുന്നത്.</p>
      <p>സംഖ്യാരേഖയിൽ $a$-ൽ നിന്ന്:</p>
      <ul>
        <li><b>വലത്തോട്ട്</b> $k$ യൂണിറ്റ് മാറിയാൽ: $x = a + k$</li>
        <li><b>ഇടത്തോട്ട്</b> $k$ യൂണിറ്റ് മാറിയാൽ: $x = a - k$</li>
      </ul>
      $$\\mathbf{|x - a| = k \\iff x - a = k \\quad \\text{അല്ലെങ്കിൽ} \\quad x - a = -k}$$
      $$\\mathbf{x = a + k \\quad \\text{അല്ലെങ്കിൽ} \\quad x = a - k}$$
      <p><b>പ്രത്യേക സാഹചര്യങ്ങൾ:</b></p>
      <ul>
        <li>$k = 0$ ആണെങ്കിൽ: $|x - a| = 0 \\implies x = a$ (ഒരൊറ്റ പരിഹാരം).</li>
        <li>$k < 0$ ആണെങ്കിൽ: അകലം ഋണമാകാൻ സാധിക്കാത്തതിനാൽ ഈ സമവാക്യത്തിന് <b>പരിഹാരമില്ല</b>.</li>
      </ul>`,
    intuition_en: `<p>Standing at milestone 'a', you are told someone is exactly k miles away. They could either be k miles ahead (a + k) or k miles behind (a - k).</p>`,
    intuition_ml: `<p>നിങ്ങൾ സംഖ്യാരേഖയിലെ 'a' എന്ന ബിന്ദുവിൽ നിൽക്കുമ്പോൾ, നിങ്ങളിൽ നിന്ന് k അകലെ ഒരാളുണ്ടെന്ന് പറഞ്ഞാൽ, അവർ k ദൂരം മുന്നിലോ (a + k) അല്ലെങ്കിൽ k ദൂരം പിന്നിലോ (a - k) ആകാം.</p>`,
    proof: {
      idea_en: 'By definition of modulus, the expression inside can either be +k or -k.',
      idea_ml: 'കേവലവിലയുടെ നിർവ്വചനമനുസരിച്ച് ഉള്ളിലുള്ള പദം +k അല്ലെങ്കിൽ -k ആകാം.',
      why_en: 'Squaring both sides or splitting cases reveals two symmetric roots.',
      why_ml: 'രണ്ട് സാധ്യതകൾ പരിശോധിക്കുമ്പോൾ രണ്ട് തുല്യ അകലത്തിലുള്ള പരിഹാരങ്ങൾ ലഭിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Case 1: x - a >= 0 gives x - a = k.', m: 'x = a + k' },
        { why_en: 'Case 2: x - a < 0 gives -(x - a) = k.', m: 'x - a = -k \\implies x = a - k' }
      ],
      rungs_ml: [
        { why_ml: 'സാധ്യത 1: $x - a \\ge 0$ ആകുമ്പോൾ $x - a = k$.', m: 'x = a + k' },
        { why_ml: 'സാധ്യത 2: $x - a < 0$ ആകുമ്പോൾ $-(x - a) = k$.', m: 'x = a - k' }
      ]
    },
    needs: ['m9.10.2.absolute-value-and-modulus'],
    traps_en: [
      'Do not forget the second negative branch: |x - 3| = 5 gives BOTH 3 + 5 = 8 AND 3 - 5 = -2.',
      'If the right side is negative, like |x - 2| = -4, there are NO solutions.'
    ],
    traps_ml: [
      'രണ്ടാമത്തെ പരിഹാരം വിട്ടുപോകരുത്: $|x - 3| = 5$ ആകുമ്പോൾ $x = 3 + 5 = 8$-ഉം $x = 3 - 5 = -2$-ഉം ലഭിക്കും.',
      'വലതുവശത്ത് ഋണസംഖ്യ വന്നാൽ (ഉദാ: $|x - 2| = -4$) യാതൊരു പരിഹാരവും ഉണ്ടാകില്ല.'
    ],
    cards_en: [
      { q: 'Solve for x: |x - 4| = 7.', a: '$x = 4 + 7 = 11$ or $x = 4 - 7 = -3$.', kind: 'apply' },
      { q: 'Solve for x: |x + 2| = 6.', a: '$|x - (-2)| = 6 \\implies x = -2 + 6 = 4$ or $x = -2 - 6 = -8$.', kind: 'apply' },
      { q: 'How many solutions does |x - 5| = -2 have?', a: 'Zero solutions (absolute value is always non-negative).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '$x$ കാണുക: $|x - 4| = 7$.', a: '$x = 4 + 7 = 11$ അല്ലെങ്കിൽ $x = 4 - 7 = -3$.', kind: 'apply' },
      { q: '$x$ കാണുക: $|x + 2| = 6$.', a: '$|x - (-2)| = 6 \\implies x = -2 + 6 = 4$ അല്ലെങ്കിൽ $x = -2 - 6 = -8$.', kind: 'apply' },
      { q: '$|x - 5| = -2$ എന്ന സമവാക്യത്തിന് എത്ര പരിഹാരങ്ങളുണ്ട്?', a: 'പരിഹാരങ്ങളൊന്നുമില്ല (കേവലവില ഒരിക്കലും ഋണമാകില്ല).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.10.4.midpoint-and-intervals',
    sec: '9.10.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Midpoint and Intervals on the Real Line',
    title_ml: 'മധ്യബിന്ദുവും പരിധികളും',
    oneLine_en: 'The midpoint of two numbers a and b on the real line is their arithmetic mean (a + b)/2; the inequality |x - a| < k defines the open interval $(a - k, a + k)$.',
    oneLine_ml: 'സംഖ്യാരേഖയിൽ a, b എന്നീ സംഖ്യകളുടെ മധ്യബിന്ദു അവയുടെ ശരാശരിയായ (a + b)/2 ആണ്; |x - a| < k എന്ന അസമത (a - k, a + k) എന്ന പരിധിയെ സൂചിപ്പിക്കുന്നു.',
    statement_en: `<p><b>Midpoint Formula on the Number Line:</b></p>
      <p>For any two real numbers $a$ and $b$, the point $M$ that lies exactly halfway between them is their arithmetic average:</p>
      $$\\mathbf{M = \\frac{a + b}{2}}$$
      <p>The distance from each point to the midpoint is half of the total distance:</p>
      $$\\text{Distance}(a, M) = \\text{Distance}(b, M) = \\frac{|a - b|}{2}$$
      <p><b>Distance Inequalities and Intervals:</b></p>
      <p>The inequality $|x - a| \\le k$ (where $k > 0$) means the distance between $x$ and $a$ is at most $k$. This describes all numbers lying in the closed interval from $a - k$ to $a + k$:</p>
      $$\\mathbf{|x - a| \\le k \\iff a - k \\le x \\le a + k}$$
      <p>Similarly, $|x - a| < k$ represents the open interval $a - k < x < a + k$.</p>`,
    statement_ml: `<p><b>സംഖ്യാരേഖയിലെ മധ്യബിന്ദു:</b></p>
      <p>സംഖ്യാരേഖയിലെ രണ്ട് സംഖ്യകളായ $a, b$ എന്നിവയ്ക്ക് തുല്യ അകലത്തിൽ കൃത്യം നടുവിലുള്ള ബിന്ദു $M$ അവയുടെ ശരാശരിയാണ്:</p>
      $$\\mathbf{M = \\frac{a + b}{2}}$$
      <p>ഓരോ ബിന്ദുവിൽ നിന്നും മധ്യബിന്ദുവിലേക്കുള്ള അകലം ആകെ അകലത്തിന്റെ പകുതിയായിരിക്കും:</p>
      $$\\text{അകലം} = \\frac{|a - b|}{2}$$
      <p><b>അസമതകളും പരിധികളും:</b></p>
      <p>$|x - a| \\le k$ ($k > 0$) എന്ന അസമത സൂചിപ്പിക്കുന്നത് $a$-ൽ നിന്ന് $x$-ലേക്കുള്ള അകലം പരമാവധി $k$ ആകാം എന്നാണ്. അതായത് $x$ എന്ന സംഖ്യ $a - k$ മുതൽ $a + k$ വരെയുള്ള ഇടവേളയിലാണ് സ്ഥിതിചെയ്യുന്നത്:</p>
      $$\\mathbf{|x - a| \\le k \\iff a - k \\le x \\le a + k}$$
      <p>അതുപോലെ $|x - a| < k$ എന്നത് $a - k < x < a + k$ എന്ന തുറന്ന ഇടവേളയെ സൂചിപ്പിക്കുന്നു.</p>`,
    intuition_en: `<p>A radio transmitter centered at station 'a' has a broadcast range of k miles in either direction: every listener in the range receives the signal if |x - a| <= k.</p>`,
    intuition_ml: `<p>'a' എന്ന സ്ഥലത്തുള്ള ഒരു റേഡിയോ ട്രാൻസ്മിറ്ററിന് ഇരുവശത്തേക്കും k കിലോമീറ്റർ ദൂരത്തേക്ക് പരിധിയുണ്ട്; $|x - a| \\le k$ ആകുന്ന പരിധിയിലുള്ള എല്ലാവർക്കും സിഗ്നൽ ലഭിക്കും.</p>`,
    proof: {
      idea_en: 'Add half the total distance |b - a|/2 to the left point a (assuming a < b): a + (b - a)/2 = (a + b)/2.',
      idea_ml: 'ചെറിയ സംഖ്യയോട് ആകെ അകലത്തിന്റെ പകുതി കൂട്ടിയാൽ മധ്യബിന്ദു ലഭിക്കുന്നു: $a + \\frac{b - a}{2} = \\frac{a + b}{2}$.',
      why_en: 'Arithmetic mean balances the positive and negative displacements symmetrically.',
      why_ml: 'ശരാശരി രണ്ട് ബിന്ദുക്കളിൽ നിന്നും തുല്യ അകലത്തിലാണ് സ്ഥിതിചെയ്യുന്നത്.',
      rungs_en: [
        { why_en: 'Let a < b. The distance between them is b - a.', m: 'd = b - a' },
        { why_en: 'Start at a and travel half of d.', m: 'M = a + \\frac{b - a}{2} = \\frac{2a + b - a}{2} = \\frac{a + b}{2}' }
      ],
      rungs_ml: [
        { why_ml: '$a < b$ ആണെങ്കിൽ അവ തമ്മിലുള്ള അകലം $b - a$.', m: 'd = b - a' },
        { why_ml: '$a$-ൽ നിന്ന് അകലത്തിന്റെ പകുതി സഞ്ചരിച്ചാൽ മധ്യബിന്ദു ലഭിക്കും.', m: 'M = a + \\frac{b - a}{2} = \\frac{a + b}{2}' }
      ]
    },
    needs: ['m9.10.3.absolute-value-equations', 'p.1.2'],
    traps_en: [
      'The midpoint of negative numbers involves algebraic addition: midpoint of -5 and 3 is (-5 + 3)/2 = -1 (not 4).',
      'The interval for |x - a| < k is centered at +a, not -a.'
    ],
    traps_ml: [
      'ഋണസംഖ്യകളുടെ മധ്യബിന്ദു കാണുമ്പോൾ ചിഹ്നം ശ്രദ്ധിക്കണം: $-5$, $3$ എന്നിവയുടെ മധ്യബിന്ദു $\\frac{-5 + 3}{2} = -1$ ആണ്.',
      '$|x - a| < k$ എന്നതിന്റെ മധ്യബിന്ദു $+a$ ആണ്, $-a$ അല്ല.'
    ],
    cards_en: [
      { q: 'What is the midpoint between -8 and 4 on the number line?', a: '$M = \\frac{-8 + 4}{2} = \\frac{-4}{2} = \\mathbf{-2}$.', kind: 'apply' },
      { q: 'Express the interval 3 <= x <= 11 in the form |x - a| <= k.', a: 'Midpoint $a = \\frac{3 + 11}{2} = 7$, half-width $k = \\frac{11 - 3}{2} = 4$. Form: $\\mathbf{|x - 7| \\le 4}$.', kind: 'apply' },
      { q: 'What numbers satisfy |x - 5| < 2?', a: 'Numbers strictly between $5 - 2 = 3$ and $5 + 2 = 7$, that is $3 < x < 7$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'സംഖ്യാരേഖയിൽ -8, 4 എന്നീ സംഖ്യകളുടെ മധ്യബിന്ദു ഏത്?', a: '$M = \\frac{-8 + 4}{2} = \\frac{-4}{2} = \\mathbf{-2}$.', kind: 'apply' },
      { q: '$3 \\le x \\le 11$ എന്ന ഇടവേളയെ $|x - a| \\le k$ എന്ന രൂപത്തിൽ എഴുതുക.', a: 'മധ്യബിന്ദു $a = \\frac{3 + 11}{2} = 7$, അകലം $k = \\frac{11 - 3}{2} = 4$. രൂപം: $\\mathbf{|x - 7| \\le 4}$.', kind: 'apply' },
      { q: '$|x - 5| < 2$ എന്ന അസമത തൃപ്തിപ്പെടുത്തുന്ന സംഖ്യകൾ ഏതെല്ലാം?', a: '$5 - 2 = 3$-നും $5 + 2 = 7$-നും ഇടയിലുള്ള എല്ലാ സംഖ്യകളും, അതായത് $3 < x < 7$.', kind: 'apply' }
    ]
  }
);
