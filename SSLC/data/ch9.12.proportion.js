/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 12: Proportion (അനുപാതം)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.12.1.proportional-changes-and-constant',
    sec: '9.12.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Proportional Changes & Constant of Proportionality',
    title_ml: 'അനുപാത മാറ്റങ്ങളും അനുപാത സ്ഥിരസംഖ്യയും',
    oneLine_en: 'Two quantities change proportionally when their ratio remains constant; scaling one quantity by any factor k scales the other by the exact same factor k.',
    oneLine_ml: 'രണ്ട് അളവുകൾ തമ്മിലുള്ള അംശബന്ധം എപ്പോഴും ഒരു സ്ഥിരസംഖ്യയായിരിക്കുകയും, ഒരളവ് k മടങ്ങാകുമ്പോൾ മറ്റേ അളവും k മടങ്ങായി മാറുകയും ചെയ്യുന്നതിനെയാണ് അനുപാതം എന്ന് പറയുന്നത്.',
    statement_en: `<p><b>Concept of Proportional Change:</b></p>
      <p>When two varying quantities $x$ and $y$ change such that their ratio is always invariant, we say that $y$ is <b>proportional</b> to $x$:</p>
      $$\\mathbf{\\frac{y}{x} = k \\quad \\implies \\quad y = kx}$$
      <p>where $k$ is a fixed non-zero real number called the <b>constant of proportionality</b>.</p>
      <p><b>Scaling Property:</b></p>
      <ul>
        <li>If $x$ is doubled ($2x$), $y$ becomes $k(2x) = 2(kx) = 2y$ (doubled).</li>
        <li>If $x$ is halved ($\\frac{1}{2}x$), $y$ is halved ($\\frac{1}{2}y$).</li>
        <li>In general, if $x$ changes by a factor $m$, $y$ changes by the exact same factor $m$.</li>
      </ul>
      <p><b>Identity of Ratios:</b> For any two corresponding pairs $(x_1, y_1)$ and $(x_2, y_2)$:</p>
      $$\\mathbf{\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = k \\quad \\iff \\quad \\frac{x_1}{x_2} = \\frac{y_1}{y_2}}$$`,
    statement_ml: `<p><b>അനുപാത മാറ്റത്തിന്റെ ആശയം:</b></p>
      <p>$x, y$ എന്നീ രണ്ട് അളവുകൾ മാറുമ്പോൾ അവ തമ്മിലുള്ള അംശബന്ധം എപ്പോഴും തുല്യമായി നിൽക്കുകയാണെങ്കിൽ, $y$ എന്നത് $x$-ന് <b>അനുപാതത്തിലാണ്</b> എന്ന് പറയുന്നു:</p>
      $$\\mathbf{\\frac{y}{x} = k \\quad \\implies \\quad y = kx}$$
      <p>ഇവിടെ $k$ എന്നത് ഒരു സ്ഥിരസംഖ്യയാണ്. ഇതിനെ <b>അനുപാത സ്ഥിരസംഖ്യ</b> എന്ന് വിളിക്കുന്നു.</p>
      <p><b>മടങ്ങുകളായുള്ള മാറ്റം:</b></p>
      <ul>
        <li>$x$ ഇരട്ടിയായാൽ ($2x$), $y$-യും ഇരട്ടിയാകുന്നു ($2y$).</li>
        <li>$x$ പകുതിയായാൽ ($\\frac{1}{2}x$), $y$-യും പകുതിയാകുന്നു ($\\frac{1}{2}y$).</li>
        <li>പൊതുവായി, $x$ എത്ര മടങ്ങാകുന്നുവോ, $y$-യും അത്രയും മടങ്ങായി കൃത്യമായി മാറും.</li>
      </ul>
      <p>ഏതൊരു രണ്ട് ജോഡി അളവുകൾക്കും $(x_1, y_1), (x_2, y_2)$:</p>
      $$\\mathbf{\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = k \\quad \\iff \\quad \\frac{x_1}{x_2} = \\frac{y_1}{y_2}}$$`,
    intuition_en: `<p>Buying fabric sold at 50 rupees per metre: 1 metre costs 50, 2 metres cost 100, 3 metres cost 150. Price/length = 50 everywhere.</p>`,
    intuition_ml: `<p>മീറ്ററിന് 50 രൂപ നിരക്കിൽ തുണി വാങ്ങുമ്പോൾ: 1 മീറ്ററിന് 50 രൂപ, 2 മീറ്ററിന് 100 രൂപ, 3 മീറ്ററിന് 150 രൂപ. എപ്പോഴും വിലയെ നീളം കൊണ്ട് ഹരിച്ചാൽ 50 കിട്ടുന്നു.</p>`,
    proof: {
      idea_en: 'Linear mapping through the origin: f(cx) = c * f(x) and f(x1 + x2) = f(x1) + f(x2).',
      idea_ml: 'മൂലബിന്ദുവിലൂടെ കടന്നുപോകുന്ന നേർരേഖ: സംഖ്യ $m$ മടങ്ങാകുമ്പോൾ ഫലവും $m$ മടങ്ങാകുന്നു.',
      why_en: 'Homogeneity of degree 1 defines proportionality strictly.',
      why_ml: 'ആദ്യ കൃതിയിലുള്ള മാറ്റം അനുപാതത്തിന്റെ സവിശേഷതയാണ്.',
      rungs_en: [
        { why_en: 'Ratio y/x is constant k.', m: 'y = kx' },
        { why_en: 'Multiply x by scalar m.', m: 'y\' = k(mx) = m(kx) = my' },
        { why_en: 'Ratio of new to old is invariant m.', m: '\\frac{y\'}{y} = \\frac{x\'}{x} = m' }
      ],
      rungs_ml: [
        { why_ml: 'അംശബന്ധം സ്ഥിരസംഖ്യ $k$ ആണ്.', m: 'y = kx' },
        { why_ml: '$x$-നെ $m$ മടങ്ങാക്കുമ്പോൾ.', m: 'y\' = k(mx) = m(kx) = my' },
        { why_ml: '$y$-യും കൃത്യമായി $m$ മടങ്ങായി മാറുന്നു.', m: '\\frac{y\'}{y} = m' }
      ]
    },
    needs: ['m8.7.1.ratio-concept', 'p.2.1'],
    traps_en: [
      'Proportion requires y = kx, NOT y = kx + c (where c != 0); if there is a non-zero intercept, it is NOT proportional.',
      'Equal differences do not mean proportion: (2, 4) and (4, 6) differ by 2, but 4/2 != 6/4.'
    ],
    traps_ml: [
      'അനുപാതം എന്നത് $y = kx$ രൂപത്തിലാണ്, $y = kx + c$ ($c \\neq 0$) അനുപാതമല്ല.',
      'വ്യത്യാസം തുല്യമായാൽ അനുപാതമാകണമെന്നില്ല: 4/2 ഉം 6/4 ഉം തുല്യമല്ല.'
    ],
    cards_en: [
      { q: 'If y is proportional to x and y = 28 when x = 4, find the constant of proportionality k.', a: '$k = \\frac{y}{x} = \\frac{28}{4} = \\mathbf{7}$.', kind: 'apply' },
      { q: 'In a proportional relation y = 5x, what is y when x = 12?', a: '$y = 5 \\times 12 = \\mathbf{60}$.', kind: 'apply' },
      { q: 'Is the relation y = 3x + 2 a proportional relation? Why or why not?', a: 'No, because the ratio $\\frac{y}{x} = 3 + \\frac{2}{x}$ is not constant.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '$y$ എന്നത് $x$-ന് അനുപാതത്തിലാണ്. $x = 4$ ആകുമ്പോൾ $y = 28$ ആണെങ്കിൽ അനുപാത സ്ഥിരസംഖ്യ $k$ എത്ര?', a: '$k = \\frac{y}{x} = \\frac{28}{4} = \\mathbf{7}$.', kind: 'apply' },
      { q: '$y = 5x$ എന്ന അനുപാതത്തിൽ $x = 12$ ആയാൽ $y$ എത്ര?', a: '$y = 5 \\times 12 = \\mathbf{60}$.', kind: 'apply' },
      { q: '$y = 3x + 2$ എന്നത് ഒരു അനുപാത ബന്ധമാണോ? എന്തുകൊണ്ട്?', a: 'അല്ല, കാരണം $\\frac{y}{x} = 3 + \\frac{2}{x}$ സ്ഥിരസംഖ്യയല്ല ($x = 0$ ആകുമ്പോൾ $y \\neq 0$).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.12.2.geometric-proportion',
    sec: '9.12.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Geometric Proportion in Similar Figures',
    title_ml: 'ജ്യാമിതിയിലെ അനുപാതം',
    oneLine_en: 'In scaled geometric figures, corresponding linear dimensions change proportionally: side lengths, altitudes, perimeters, and diagonal lengths all share the same constant scale factor.',
    oneLine_ml: 'സദൃശ രൂപങ്ങളിൽ എല്ലാ രേഖീയ അളവുകളും (വശങ്ങൾ, ഉയരങ്ങൾ, ചുറ്റളവുകൾ, വികർണ്ണങ്ങൾ) ഒരേ അംശബന്ധത്തിൽ അനുപാതമായി മാറുന്നു.',
    statement_en: `<p><b>Geometric Scaling and Proportional Dimensions:</b></p>
      <p>When a geometric figure is uniformly enlarged or reduced by a scale factor $k$:</p>
      <ul>
        <li>Every corresponding linear length $L'$ is proportional to the original length $L$:
        $$\\mathbf{L' = k \\cdot L}$$</li>
        <li><b>Perimeter:</b> The perimeter scales linearly: $P' = k \\cdot P$.</li>
        <li><b>Heights & Altitudes:</b> For right triangles formed by a slanted line passing through the origin, the height $y$ at horizontal distance $x$ satisfies:
        $$\\mathbf{\\frac{y}{x} = \\text{slope} = k \\quad \\implies \\quad y = kx}$$</li>
        <li><b>Area Scaling:</b> Area is proportional to the <b>square</b> of the linear dimension:
        $$\\mathbf{A' = k^2 \\cdot A}$$</li>
      </ul>`,
    statement_ml: `<p><b>ജ്യാമിതീയ വികാസവും രേഖീയ അളവുകളും:</b></p>
      <p>ഒരു ജ്യാമിതീയ രൂപത്തെ $k$ മടങ്ങായി മാറ്റിയാൽ:</p>
      <ul>
        <li>എല്ലാ അനുയോജ്യ വശങ്ങളുടെയും നീളം $k$ മടങ്ങായി മാറുന്നു:
        $$\\mathbf{L' = k \\cdot L}$$</li>
        <li><b>ചുറ്റളവ്:</b> ചുറ്റളവും കൃത്യമായി $k$ മടങ്ങായി മാറുന്നു: $P' = k \\cdot P$.</li>
        <li><b>ഉയരങ്ങൾ:</b> ഒരു കോണിൽ നിന്നുള്ള തിരശ്ചീന ദൂരം $x$-ഉം ലംബ ഉയരം $y$-ഉം തമ്മിൽ എപ്പോഴും അനുപാതത്തിലായിരിക്കും: $\\frac{y}{x} = k$.</li>
        <li><b>പരപ്പളവ്:</b> പരപ്പളവ് രേഖീയ അളവിന്റെ <b>വർഗ്ഗത്തിന്</b> ആനുപാതികമായി $k^2$ മടങ്ങായി മാറുന്നു:
        $$\\mathbf{A' = k^2 \\cdot A}$$</li>
      </ul>`,
    intuition_en: `<p>Photocopying a drawing at 200% scale (k = 2): every edge doubles, the perimeter doubles, but the paper area required quadruples (2² = 4)!</p>`,
    intuition_ml: `<p>ഒരു ചിത്രം 2 മടങ്ങായി വലുതാക്കിയാൽ (k = 2): എല്ലാ വരകളുടെ നീളവും ചുറ്റളവും 2 മടങ്ങാകും, എന്നാൽ പരപ്പളവ് $2^2 = 4$ മടങ്ങായി വർദ്ധിക്കും!</p>`,
    proof: {
      idea_en: 'Similar triangles / Thales theorem: parallel vertical lines cut proportional intercepts along a ray.',
      idea_ml: 'സദൃശ ത്രികോണങ്ങളുടെ തത്വമനുസരിച്ച് വശങ്ങളുടെ അംശബന്ധം തുല്യമായിരിക്കും.',
      why_en: 'Angle invariance forces all corresponding linear segments to scale uniformly.',
      why_ml: 'കോണുകൾ മാറാത്തതിനാൽ എല്ലാ അളവുകളും ഒരേ നിരക്കിൽ മാറുന്നു.',
      rungs_en: [
        { why_en: 'Triangles share the common angle theta at origin.', m: '\\tan\\theta = \\frac{y_1}{x_1} = \\frac{y_2}{x_2} = k' },
        { why_en: 'Thus y is directly proportional to x.', m: 'y = kx' },
        { why_en: 'Area scales as product of two linear dimensions.', m: 'A\' = (k \\cdot b)(k \\cdot h) = k^2(bh) = k^2 A' }
      ],
      rungs_ml: [
        { why_ml: 'കോൺ തുല്യമായതിനാൽ അനുപാതം സ്ഥിരമായിരിക്കും.', m: '\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = k' },
        { why_ml: '$y$ എന്നത് $x$-ന് നേർ അനുപാതത്തിലാണ്.', m: 'y = kx' },
        { why_ml: 'പരപ്പളവ് രണ്ട് നീളങ്ങളുടെ ഗുണനഫലമായതിനാൽ $k^2$ മടങ്ങാകുന്നു.', m: 'A\' = k^2 A' }
      ]
    },
    needs: ['m9.7.1.concept-of-similarity-and-aa', 'm9.12.1.proportional-changes-and-constant'],
    traps_en: [
      'Area does NOT double when sides double; area scales by k² = 4!',
      'Volume scales by k³ = 8, not k.'
    ],
    traps_ml: [
      'വശങ്ങൾ ഇരട്ടിയാകുമ്പോൾ പരപ്പളവ് ഇരട്ടിയാകില്ല, $k^2 = 4$ മടങ്ങാകും!',
      'വ്യാപ്തം $k^3 = 8$ മടങ്ങായി വർദ്ധിക്കുന്നു.'
    ],
    cards_en: [
      { q: 'The sides of a triangle are scaled by factor 3. By what factor does its area increase?', a: 'By $3^2 = \\mathbf{9}$ times.', kind: 'apply' },
      { q: 'On a line through the origin, a point at horizontal distance 4 has height 6. What is the height at distance 10?', a: '$k = \\frac{6}{4} = 1.5$. Height $= 1.5 \\times 10 = \\mathbf{15}$.', kind: 'apply' },
      { q: 'If the perimeter of an enlarged polygon is 4 times the original, how many times larger is its area?', a: 'Scale factor $k = 4$, so area is $4^2 = \\mathbf{16}$ times larger.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു ത്രികോണത്തിന്റെ വശങ്ങൾ 3 മടങ്ങാക്കിയാൽ പരപ്പളവ് എത്ര മടങ്ങാകും?', a: '$3^2 = \\mathbf{9}$ മടങ്ങ്.', kind: 'apply' },
      { q: 'മൂലബിന്ദുവിലൂടെ പോകുന്ന വരയിൽ തിരശ്ചീന ദൂരം 4 ആകുമ്പോൾ ഉയരം 6 ആണ്. ദൂരം 10 ആകുമ്പോൾ ഉയരം എത്ര?', a: '$k = \\frac{6}{4} = 1.5$. ഉയരം $= 1.5 \\times 10 = \\mathbf{15}$.', kind: 'apply' },
      { q: 'ഒരു ബഹുഭുജത്തിന്റെ ചുറ്റളവ് 4 മടങ്ങായാൽ അതിന്റെ പരപ്പളവ് എത്ര മടങ്ങാകും?', a: '$k = 4$ ആയതിനാൽ പരപ്പളവ് $4^2 = \\mathbf{16}$ മടങ്ങാകും.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.12.3.direct-proportion-and-linear-equations',
    sec: '9.12.3',
    kind: 'rule',
    tier: 'core',
    title_en: 'Direct Proportion & Linear Equations (y = kx)',
    title_ml: 'നേർ അനുപാതവും ബീജഗണിതവും',
    oneLine_en: 'Direct proportion represents a linear relationship whose graph is a straight line passing through the origin (0, 0) with slope equal to the constant of proportionality k.',
    oneLine_ml: 'നേർ അനുപാതം എന്നത് (0, 0) എന്ന മൂലബിന്ദുവിലൂടെ കടന്നുപോകുന്ന നേർവരയാണ്; ഇതിന്റെ ചരിവ് അനുപാത സ്ഥിരസംഖ്യയായ k-ക്ക് തുല്യമാണ്.',
    statement_en: `<p><b>Direct Proportion Equation:</b></p>
      <p>A relationship between two quantities $x$ and $y$ is directly proportional if:</p>
      $$\\mathbf{y = kx \\quad (k \\neq 0)}$$
      <p><b>Graphical Properties:</b></p>
      <ul>
        <li>The graph of $y = kx$ is a straight line that strictly passes through the origin $(0, 0)$.</li>
        <li>The slope of the line is the constant of proportionality $k = \\frac{y}{x}$.</li>
        <li>If $k > 0$, the line rises from left to right; as $x$ increases, $y$ increases.</li>
      </ul>
      <p><b>Direct Proportion vs General Linear Form:</b></p>
      <p>A relation of the form $y = kx + c$ (where $c \\neq 0$) is linear but <b>not directly proportional</b>, because the line does not pass through the origin ($y/x$ is not constant).</p>`,
    statement_ml: `<p><b>നേർ അനുപാത സമവാക്യം:</b></p>
      <p>$x, y$ എന്നീ അളവുകൾ തമ്മിലുള്ള ബന്ധം നേർ അനുപാതത്തിലാകുന്നത്:</p>
      $$\\mathbf{y = kx \\quad (k \\neq 0)}$$
      <p><b>ഗ്രാഫിന്റെ സവിശേഷതകൾ:</b></p>
      <ul>
        <li>$y = kx$-ന്റെ ഗ്രാഫ് എപ്പോഴും $(0, 0)$ എന്ന മൂലബിന്ദുവിലൂടെ കടന്നുപോകുന്ന ഒരു നേർവരയായിരിക്കും.</li>
        <li>ഈ വരയുടെ ചരിവ് അനുപാത സ്ഥിരസംഖ്യയായ $k = \\frac{y}{x}$ ആണ്.</li>
        <li>$k > 0$ ആകുമ്പോൾ $x$ കൂടുന്തോറും $y$-യും കൂടുന്നു.</li>
      </ul>
      <p><b>നേർ അനുപാതവും പൊതു നേർരേഖയും തമ്മിലുള്ള വ്യത്യാസം:</b></p>
      <p>$y = kx + c$ ($c \\neq 0$) എന്നത് ഒരു നേർരേഖയാണെങ്കിലും <b>നേർ അനുപാതമല്ല</b>, കാരണം അത് മൂലബിന്ദുവിലൂടെ കടന്നുപോകുന്നില്ല.</p>`,
    intuition_en: `<p>Uniform speed: distance = speed × time (d = vt). If speed is constant, distance is directly proportional to time and the distance-time graph is a line through (0, 0).</p>`,
    intuition_ml: `<p>സ്ഥിരവേഗതയിൽ സഞ്ചരിക്കുന്ന ഒരു വാഹനം: ദൂരം = വേഗത × സമയം ($d = vt$). വേഗത സ്ഥിരമാകുമ്പോൾ ദൂരവും സമയവും നേർ അനുപാതത്തിലായിരിക്കും; ഗ്രാഫ് $(0, 0)$-ലൂടെ പോകുന്ന വരയാണ്.</p>`,
    proof: {
      idea_en: 'If (x1, y1) and (x2, y2) lie on y = kx, then y2 - y1 = k(x2 - x1), so slope is constant k.',
      idea_ml: 'ഗ്രാഫിലെ ഏത് രണ്ട് ബിന്ദുക്കൾ എടുത്താലും ചരിവ് $k$ മാറ്റമില്ലാതെ തുടരുന്നു.',
      why_en: 'Constant slope with y-intercept 0 is the algebraic characterization of direct proportion.',
      why_ml: 'ചരിവ് സ്ഥിരവും മൂലബിന്ദുവിലൂടെ പോകുന്നതുമായ വരകൾ നേർ അനുപാതത്തെ സൂചിപ്പിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Equation of straight line through origin.', m: 'y - 0 = k(x - 0) \\implies y = kx' },
        { why_en: 'At x = 0, y must be 0.', m: '(x, y) = (0, 0)' },
        { why_en: 'Constant ratio holds for all non-zero x.', m: '\\frac{y}{x} = k' }
      ],
      rungs_ml: [
        { why_ml: 'മൂലബിന്ദുവിലൂടെയുള്ള വരയുടെ സമവാക്യം.', m: 'y = kx' },
        { why_ml: '$x = 0$ ആകുമ്പോൾ $y = 0$ ആയിരിക്കും.', m: '(0, 0)' },
        { why_ml: 'ഏതൊരു ബിന്ദുവിലും അംശബന്ധം $k$ തന്നെയായിരിക്കും.', m: '\\frac{y}{x} = k' }
      ]
    },
    needs: ['m9.12.1.proportional-changes-and-constant'],
    traps_en: [
      'Even if a graph is a straight line, it is NOT directly proportional if it cuts the y-axis anywhere other than (0, 0).',
      'If k is negative, y decreases as x increases, but it is still directly proportional.'
    ],
    traps_ml: [
      'ഒരു ബന്ധത്തിന്റെ ഗ്രാഫ് നേർവരയാണെങ്കിലും $(0, 0)$-ലൂടെ കടന്നുപോകുന്നില്ലെങ്കിൽ അത് നേർ അനുപാതമല്ല.',
      '$k$ ഋണസംഖ്യയായാലും അത് നേർ അനുപാതമാണ്.'
    ],
    cards_en: [
      { q: 'What is the y-intercept of any direct proportion line y = kx?', a: 'The origin $(0, 0)$ (y-intercept is 0).', kind: 'recall' },
      { q: 'A car travels at constant speed 60 km/h. Write the algebraic equation relating distance d and time t.', a: '$\\mathbf{d = 60t}$.', kind: 'apply' },
      { q: 'Does y = 4x - 5 represent direct proportion?', a: 'No, because it does not pass through the origin (at $x = 0, y = -5 \\neq 0$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '$y = kx$ എന്ന നേർ അനുപാത വര $y$-അക്ഷത്തെ ഖണ്ഡിക്കുന്ന ബിന്ദു ഏതാണ്?', a: 'മൂലബിന്ദു $(0, 0)$.', kind: 'recall' },
      { q: 'മണിക്കൂറിൽ 60 km സ്ഥിരവേഗതയിൽ പോകുന്ന ഒരു കാറിന്റെ ദൂരം d-യും സമയം t-യും തമ്മിലുള്ള ബീജഗണിത സമവാക്യം എഴുതുക.', a: '$\\mathbf{d = 60t}$.', kind: 'apply' },
      { q: '$y = 4x - 5$ എന്നത് നേർ അനുപാതത്തെ സൂചിപ്പിക്കുന്നുണ്ടോ?', a: 'ഇല്ല, കാരണം അത് $(0, 0)$-ലൂടെ കടന്നുപോകുന്നില്ല ($x = 0$ ആകുമ്പോൾ $y = -5$).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.12.4.inverse-proportion',
    sec: '9.12.4',
    kind: 'definition',
    tier: 'core',
    title_en: 'Inverse Proportion (xy = k)',
    title_ml: 'വ്യസ്താനുപാതം (xy = k)',
    oneLine_en: 'Two quantities are inversely proportional when their product remains constant: multiplying one quantity by m divides the other by m: y = k/x or xy = k.',
    oneLine_ml: 'രണ്ട് അളവുകൾ തമ്മിലുള്ള ഗുണനഫലം എപ്പോഴും ഒരു സ്ഥിരസംഖ്യയായിരിക്കുകയും, ഒരളവ് m മടങ്ങാകുമ്പോൾ മറ്റേ അളവ് m കൊണ്ട് ഹരിക്കപ്പെടുകയും ചെയ്യുന്ന ബന്ധമാണ് വ്യസ്താനുപാതം: xy = k.',
    statement_en: `<p><b>Definition of Inverse Proportion:</b></p>
      <p>Two varying quantities $x$ and $y$ are <b>inversely proportional</b> (or vary inversely) if their product is invariant:</p>
      $$\\mathbf{x \\cdot y = k \\quad \\implies \\quad y = \\frac{k}{x} \\quad (k > 0)}$$
      <p><b>Reciprocal Scaling Property:</b></p>
      <ul>
        <li>If $x$ is doubled ($2x$), $y$ becomes halved ($\\frac{y}{2}$).</li>
        <li>If $x$ is multiplied by $m$, $y$ is divided by $m$ (multiplied by $\\frac{1}{m}$).</li>
      </ul>
      <p><b>Product Invariance:</b> For any two corresponding pairs $(x_1, y_1)$ and $(x_2, y_2)$:</p>
      $$\\mathbf{x_1 y_1 = x_2 y_2 = k \\quad \\iff \\quad \\frac{y_1}{y_2} = \\frac{x_2}{x_1}}$$
      <p><b>Classic Examples:</b></p>
      <ul>
        <li><b>Fixed Distance:</b> Speed $\\times$ Time $= \\text{Distance}$ ($v \\cdot t = d$). Higher speed requires less travel time.</li>
        <li><b>Work & Workers:</b> Number of workers $\\times$ Days $= \\text{Total person-days}$. More workers complete the task in fewer days.</li>
      </ul>`,
    statement_ml: `<p><b>വ്യസ്താനുപാതത്തിന്റെ നിർവ്വചനം:</b></p>
      <p>$x, y$ എന്നീ രണ്ട് അളവുകളുടെ ഗുണനഫലം എപ്പോഴും ഒരു സ്ഥിരസംഖ്യയായി തുടരുന്നുവെങ്കിൽ അവ <b>വ്യസ്താനുപാതത്തിലാണ്</b> എന്ന് പറയുന്നു:</p>
      $$\\mathbf{x \\cdot y = k \\quad \\implies \\quad y = \\frac{k}{x} \\quad (k > 0)}$$
      <p><b>വ്യുൽക്രമ മാറ്റം:</b></p>
      <ul>
        <li>$x$ ഇരട്ടിയായാൽ, $y$ പകുതിയായി കുറയുന്നു.</li>
        <li>$x$ എന്നത് $m$ മടങ്ങായാൽ, $y$ എന്നത് $m$ കൊണ്ട് ഹരിക്കപ്പെടുന്നു.</li>
      </ul>
      <p>ഏതൊരു രണ്ട് ജോഡി അളവുകൾക്കും $(x_1, y_1), (x_2, y_2)$:</p>
      $$\\mathbf{x_1 y_1 = x_2 y_2 = k \\quad \\iff \\quad \\frac{y_1}{y_2} = \\frac{x_2}{x_1}}$$
      <p><b>പ്രധാന ഉദാഹരണങ്ങൾ:</b></p>
      <ul>
        <li><b>സ്ഥിരദൂരം:</b> വേഗത $\\times$ സമയം $= \\text{ദൂരം}$. വേഗത കൂടുമ്പോൾ എടുക്കുന്ന സമയം കുറയുന്നു.</li>
        <li><b>ജോലിയും ആളുകളും:</b> ആളുകളുടെ എണ്ണം $\\times$ ദിവസങ്ങൾ $= \\text{ആകെ തൊഴിൽദിനങ്ങൾ}$. കൂടുതൽ ആളുകൾ ചേർന്നാൽ ജോലി കുറഞ്ഞ ദിവസങ്ങൾ കൊണ്ട് തീരും.</li>
      </ul>`,
    intuition_en: `<p>Sharing a fixed pizza among friends: if 2 people share, each gets 1/2; if 4 people share, each gets 1/4; if 8 people share, each gets 1/8. People × Share = 1 whole pizza.</p>`,
    intuition_ml: `<p>ഒരു നിശ്ചിത ജോലി അല്ലെങ്കിൽ നിശ്ചിത ഭക്ഷണം വീതിക്കുമ്പോൾ: ആളുകളുടെ എണ്ണം കൂടുന്തോറും ഓരോരുത്തർക്കും കിട്ടുന്ന വിഹിതം കൃത്യമായ അനുപാതത്തിൽ കുറയുന്നു. ആളുകൾ × വിഹിതം = സ്ഥിരസംഖ്യ.</p>`,
    proof: {
      idea_en: 'The graph of xy = k in the first quadrant is a rectangular hyperbola asymptotic to both axes.',
      idea_ml: 'ഗുണനഫലം സ്ഥിരമായതിനാൽ $x$ കൂടുമ്പോൾ $y$ പൂജ്യത്തിലേക്ക് അടുക്കുന്ന ഹൈപ്പർബോള ഗ്രാഫ് ലഭിക്കുന്നു.',
      why_en: 'As x -> infinity, y -> 0, and as x -> 0, y -> infinity, maintaining x * y = k.',
      why_ml: '$x \\to \\infty$ ആകുമ്പോൾ $y \\to 0$ ആകുന്നു, എന്നാൽ ഗുണനഫലം എപ്പോഴും $k$ തന്നെയായിരിക്കും.',
      rungs_en: [
        { why_en: 'Given product is constant.', m: 'x_1 y_1 = k, \\; x_2 y_2 = k' },
        { why_en: 'Equate the two products.', m: 'x_1 y_1 = x_2 y_2' },
        { why_en: 'Rearrange into inverse ratio.', m: '\\frac{y_1}{y_2} = \\frac{x_2}{x_1}' }
      ],
      rungs_ml: [
        { why_ml: 'ഗുണനഫലം സ്ഥിരമാണ്.', m: 'x_1 y_1 = x_2 y_2 = k' },
        { why_ml: 'അംശബന്ധമാക്കി മാറ്റുമ്പോൾ.', m: '\\frac{y_1}{y_2} = \\frac{x_2}{x_1}' }
      ]
    },
    needs: ['m9.12.1.proportional-changes-and-constant'],
    traps_en: [
      'In direct proportion, y/x = constant; in inverse proportion, x * y = constant. Do not confuse them!',
      'When x = 0, y is undefined; the graph of inverse proportion never touches either coordinate axis.'
    ],
    traps_ml: [
      'നേർ അനുപാതത്തിൽ $y/x = \\text{സ്ഥിരസംഖ്യ}$, വ്യസ്താനുപാതത്തിൽ $x \\times y = \\text{സ്ഥിരസംഖ്യ}$. ഇവ തമ്മിൽ മാറിപ്പോകരുത്!',
      'വ്യസ്താനുപാത ഗ്രാഫ് അക്ഷങ്ങളെ ഒരിക്കലും തൊടുകയില്ല ($x = 0$ ആകുമ്പോൾ $y$ നിർവ്വചിക്കപ്പെട്ടിട്ടില്ല).'
    ],
    cards_en: [
      { q: 'If x and y are inversely proportional, and y = 10 when x = 6, find y when x = 15.', a: '$k = 6 \\times 10 = 60$. When $x = 15$, $y = \\frac{60}{15} = \\mathbf{4}$.', kind: 'apply' },
      { q: '12 workers can build a wall in 10 days. How many days will 15 workers take at the same rate?', a: 'Total worker-days $= 12 \\times 10 = 120$. Days $= \\frac{120}{15} = \\mathbf{8\\text{ days}}$.', kind: 'apply' },
      { q: 'What is the shape of the graph of an inverse proportional relationship?', a: 'A rectangular hyperbola.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '$x, y$ എന്നിവ വ്യസ്താനുപാതത്തിലാണ്. $x = 6$ ആകുമ്പോൾ $y = 10$ ആണെങ്കിൽ $x = 15$ ആകുമ്പോൾ $y$ എത്ര?', a: '$k = 6 \\times 10 = 60$. $x = 15$ ആകുമ്പോൾ $y = \\frac{60}{15} = \\mathbf{4}$.', kind: 'apply' },
      { q: '12 തൊഴിലാളികൾ ഒരു മതിൽ 10 ദിവസം കൊണ്ട് കെട്ടിത്തീർക്കും. അതേ നിരക്കിൽ 15 തൊഴിലാളികൾക്ക് എത്ര ദിവസം വേണം?', a: 'ആകെ തൊഴിൽദിനം $= 12 \\times 10 = 120$. ദിവസങ്ങൾ $= \\frac{120}{15} = \\mathbf{8\\text{ ദിവസങ്ങൾ}}$.', kind: 'apply' },
      { q: 'വ്യസ്താനുപാത ഗ്രാഫിന്റെ രൂപം എന്താണ്?', a: 'റെക്ടാംഗുലർ ഹൈപ്പർബോള (ഒരു വക്രരേഖ).', kind: 'recall' }
    ]
  }
);
