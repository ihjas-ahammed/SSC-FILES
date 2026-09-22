/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 9: Geometry and Algebra (ജ്യാമിതിയും ബീജഗണിതവും)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.9.1 Section Formula & Ratio Division (രേഖാഖണ്ഡ വിഭജനവും അനുപാതവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.9.1.section-formula-and-ratio-division',
    sec: '10.9.1',
    kind: 'formula',
    tier: 'core',
    title_en: 'Section Formula & Ratio Division',
    title_ml: 'രേഖാഖണ്ഡ വിഭജനവും അനുപാതവും',
    oneLine_en: 'The coordinates of a point P dividing the segment joining (x1, y1) and (x2, y2) in the ratio m : n internally are ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)).',
    oneLine_ml: '$(x_1, y_1), (x_2, y_2)$ എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയെ $m : n$ എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്ന ബിന്ദുവിന്റെ സൂചകസംഖ്യകൾ $(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n})$ ആണ്.',
    statement_en: `<p><b>Internal Section Formula:</b></p>
      <p>Let $A(x_1, y_1)$ and $B(x_2, y_2)$ be two points. If point $P(x, y)$ lies on segment $AB$ such that $AP : PB = m : n$, then:</p>
      $$\\mathbf{x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}}$$
      <p><b>Division in Ratio $k : 1$:</b></p>
      <p>Setting $k = \\frac{m}{n}$ simplifies the coordinates to:</p>
      $$x = \\frac{k x_2 + x_1}{k + 1}, \\quad y = \\frac{k y_2 + y_1}{k + 1}$$
      <p><b>Ratio of Division by Coordinate Axes:</b></p>
      <ul>
        <li>The $x$-axis ($y = 0$) divides segment $AB$ in the ratio $-y_1 : y_2$.</li>
        <li>The $y$-axis ($x = 0$) divides segment $AB$ in the ratio $-x_1 : x_2$.</li>
      </ul>`,
    statement_ml: `<p><b>രേഖാഖണ്ഡ വിഭജന സൂത്രവാക്യം:</b></p>
      <p>$A(x_1, y_1), B(x_2, y_2)$ എന്നീ ബിന്ദുക്കളെ യോജിപ്പിക്കുന്ന വരയെ $P(x, y)$ എന്ന ബിന്ദു $m : n$ എന്ന അനുപാതത്തിൽ വിഭജിച്ചാൽ:</p>
      $$\\mathbf{x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}}$$
      <p><b>$k : 1$ അനുപാത വിഭജനം:</b></p>
      <p>$k = \\frac{m}{n}$ എന്ന് എടുത്താൽ:</p>
      $$x = \\frac{k x_2 + x_1}{k + 1}, \\quad y = \\frac{k y_2 + y_1}{k + 1}$$
      <p><b>അക്ഷങ്ങൾ വരയെ വിഭജിക്കുന്ന അനുപാതം:</b></p>
      <ul>
        <li>$x$-അക്ഷം ($y = 0$) വരയെ വിഭജിക്കുന്ന അനുപാതം: $-y_1 : y_2$.</li>
        <li>$y$-അക്ഷം ($x = 0$) വരയെ വിഭജിക്കുന്ന അനുപാതം: $-x_1 : x_2$.</li>
      </ul>`,
    intuition_en: `<p>The section formula is a weighted average of coordinates. The point $P$ is pulled closer to whichever endpoint has higher weight ($m$ or $n$).</p>`,
    intuition_ml: `<p>രേഖാഖണ്ഡ വിഭജന സൂത്രവാക്യം സൂചകസംഖ്യകളുടെ തൂക്കമുള്ള ശരാശരി പോലെയാണ്. അനുപാതം കൂടുതലുള്ള അറ്റത്തേക്ക് ബിന്ദു കൂടുതൽ അടുത്തിരിക്കും.</p>`,
    proof: {
      idea_en: 'Similar right triangles projected onto horizontal and vertical axes preserve division ratios.',
      idea_ml: 'തിരശ്ചീന-ലംബ വരകളിലേക്ക് പ്രൊജക്റ്റ് ചെയ്തുണ്ടാക്കുന്ന സദൃശ ത്രികോണങ്ങളിലൂടെ തെളിയിക്കുന്നു.',
      why_en: 'Parallel projection onto axes preserves length ratios by Thales theorem.',
      why_ml: 'തേൽസിന്റെ സിദ്ധാന്തപ്രകാരം സമാന്തര വരകൾ വശങ്ങളെ ഒരേ അനുപാതത്തിൽ വിഭജിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Drop perpendiculars from A, P, B to the x-axis, giving segments proportional to m : n.', m: '\\frac{x - x_1}{x_2 - x} = \\frac{m}{n}' },
        { why_en: 'Cross-multiply to clear the fraction.', m: 'n(x - x_1) = m(x_2 - x)' },
        { why_en: 'Collect terms in x.', m: '(m + n)x = m x_2 + n x_1' },
        { why_en: 'Solve for x-coordinate.', m: 'x = \\frac{m x_2 + n x_1}{m + n}' },
        { why_en: 'Apply identical projection on vertical y-axis.', m: 'y = \\frac{m y_2 + n y_1}{m + n}' }
      ],
      rungs_ml: [
        { why_ml: '$A, P, B$ ൽ നിന്ന് $x$-അക്ഷത്തിലേക്ക് ലംബം വരച്ചാൽ ലഭിക്കുന്ന ഭാഗങ്ങളുടെ അനുപാതം $m : n$ ആണ്.', m: '\\frac{x - x_1}{x_2 - x} = \\frac{m}{n}' },
        { why_ml: 'ഛേദം ഒഴിവാക്കാൻ കുറുകെ ഗുണിക്കുന്നു.', m: 'n(x - x_1) = m(x_2 - x)' },
        { why_ml: '$x$ അടങ്ങിയ പദങ്ങൾ ഒരുമിച്ച് കൊണ്ടുവരുന്നു.', m: '(m + n)x = m x_2 + n x_1' },
        { why_ml: '$x$-സൂചകസംഖ്യ കാണുന്നു.', m: 'x = \\frac{m x_2 + n x_1}{m + n}' },
        { why_ml: '$y$-അക്ഷത്തിലും സമാനമായ ലംബങ്ങൾ വഴി $y$-സൂചകസംഖ്യ ലഭിക്കുന്നു.', m: 'y = \\frac{m y_2 + n y_1}{m + n}' }
      ]
    },
    traps_en: [
      'Multiplying ratio m with x1 and n with x2: remember cross-multiplication pairs m with x2 and n with x1.',
      'Using subtraction in the numerator for internal division; internal division always uses addition (+).'
    ],
    traps_ml: [
      '$m$ നെ $x_1$ നോടും $n$ നെ $x_2$ നോടും മാറി ഗുണിക്കുന്നത്; $m$ എന്നത് $x_2$ നോടും $n$ എന്നത് $x_1$ നോടുമാണ് ഗുണിക്കേണ്ടത്.',
      'ആന്തരിക വിഭജനത്തിൽ അംശത്തിൽ വ്യവകലനം (-) ഉപയോഗിക്കുന്നത്; ആന്തരിക വിഭജനത്തിൽ സങ്കലനം (+) ആണ്.'
    ],
    cards_en: [
      { q: 'State the section formula for internal division of segment (x1, y1) and (x2, y2) in ratio m : n.', a: '$\\mathbf{\\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}\\right)}$', kind: 'recall' },
      { q: 'Find the point dividing the segment joining (1, 2) and (6, 7) in the ratio 2 : 3.', a: '$x = \\frac{2(6) + 3(1)}{5} = 3$, $y = \\frac{2(7) + 3(2)}{5} = 4$. Point is **$(3, 4)$**.', kind: 'apply' },
      { q: 'In what ratio does the y-axis divide the segment joining (-2, 3) and (4, 7)?', a: 'Since $x = 0$ on the $y$-axis: $\\frac{k(4) - 2}{k+1} = 0 \\implies 4k = 2 \\implies k = 1/2$. Ratio is **$1 : 2$**.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '$(x_1, y_1), (x_2, y_2)$ എന്നിവയെ $m : n$ അനുപാതത്തിൽ വിഭജിക്കുന്ന സൂത്രവാക്യം എഴുതുക.', a: '$\\mathbf{\\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}\\right)}$', kind: 'recall' },
      { q: '$(1, 2), (6, 7)$ എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയെ $2 : 3$ അനുപാതത്തിൽ വിഭജിക്കുന്ന ബിന്ദു ഏത്?', a: '$x = \\frac{2(6) + 3(1)}{5} = 3$, $y = \\frac{2(7) + 3(2)}{5} = 4$. ബിന്ദു **$(3, 4)$** ആണ്.', kind: 'apply' },
      { q: '$(-2, 3), (4, 7)$ എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയെ $y$-അക്ഷം വിഭജിക്കുന്ന അനുപാതം ഏത്?', a: '$y$-അക്ഷത്തിൽ $x = 0$ ആയതിനാൽ: $4k - 2 = 0 \\implies k = 1/2$. അനുപാതം **$1 : 2$** ആണ്.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.2 Midpoint Formula & Triangle Centroid (മധ്യബിന്ദുവും മധ്യകേന്ദ്രവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.9.2.midpoint-and-centroid',
    sec: '10.9.2',
    kind: 'formula',
    tier: 'core',
    title_en: 'Midpoint Formula & Triangle Centroid',
    title_ml: 'മധ്യബിന്ദുവും മധ്യകേന്ദ്രവും',
    oneLine_en: 'The midpoint of (x1, y1) and (x2, y2) is ((x1+x2)/2, (y1+y2)/2); the centroid of triangle ABC is ((x1+x2+x3)/3, (y1+y2+y3)/3).',
    oneLine_ml: '$(x_1, y_1), (x_2, y_2)$ എന്നിവയുടെ മധ്യബിന്ദു $(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2})$ ഉം, ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രം $(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3})$ ഉം ആണ്.',
    statement_en: `<p><b>Midpoint Formula:</b></p>
      <p>When the division ratio is $1 : 1$, the midpoint $M$ of segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ is:</p>
      $$\\mathbf{M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)}$$
      <p><b>Centroid of a Triangle:</b></p>
      <p>The centroid $G$ (centre of gravity) of $\\triangle ABC$ with vertices $A(x_1, y_1)$, $B(x_2, y_2)$, and $C(x_3, y_3)$ is the concurrence point of the three medians. It divides each median in the ratio $2 : 1$ from vertex to base:</p>
      $$\\mathbf{G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)}$$
      <p><b>Parallelogram Diagonals Property:</b></p>
      <p>Because diagonals of a parallelogram bisect each other, they share the exact same midpoint:</p>
      $$x_1 + x_3 = x_2 + x_4 \\implies x_4 = x_1 + x_3 - x_2$$
      $$y_1 + y_3 = y_2 + y_4 \\implies y_4 = y_1 + y_3 - y_2$$`,
    statement_ml: `<p><b>മധ്യബിന്ദു സൂത്രവാക്യം:</b></p>
      <p>$A(x_1, y_1), B(x_2, y_2)$ എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയുടെ മധ്യബിന്ദു $M$:</p>
      $$\\mathbf{M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)}$$
      <p><b>ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രം:</b></p>
      <p>ശീർഷങ്ങൾ $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ ആയ ത്രികോണത്തിന്റെ മൂന്ന് മാധ്യമരേഖകൾ സംഗമിക്കുന്ന ബിന്ദുവാണ് മധ്യകേന്ദ്രം $G$. ഇത് ഓരോ മാധ്യമരേഖയെയും $2 : 1$ എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്നു:</p>
      $$\\mathbf{G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)}$$
      <p><b>സാമാന്തരികത്തിന്റെ നാലാം ശീർഷം:</b></p>
      <p>സാമാന്തരികത്തിന്റെ വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നതിനാൽ അവയുടെ മധ്യബിന്ദു ഒന്നുതന്നെയാണ്:</p>
      $$x_4 = x_1 + x_3 - x_2, \\quad y_4 = y_1 + y_3 - y_2$$`,
    intuition_en: `<p>The midpoint is the simple arithmetic mean of 2 points. The centroid is the simple arithmetic mean of 3 vertices, representing the physical centre of gravity where a triangular plate balances perfectly.</p>`,
    intuition_ml: `<p>മധ്യബിന്ദു എന്നത് 2 ബിന്ദുക്കളുടെ ശരാശരിയാണ്. മധ്യകേന്ദ്രം എന്നത് 3 ശീർഷങ്ങളുടെ ശരാശരിയാണ് (ഒരു ത്രികോണ പലകയെ കൃത്യമായി വിരൽത്തുമ്പിൽ ബാലൻസ് ചെയ്യാവുന്ന ബിന്ദു).</p>`,
    proof: {
      idea_en: 'Apply the section formula with ratio 2:1 on the median connecting a vertex to the opposite side midpoint.',
      idea_ml: 'മാധ്യമരേഖയെ 2:1 എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്ന ബിന്ദു കണ്ടെത്താൻ സെക്ഷൻ ഫോർമുല പ്രയോഗിക്കുന്നു.',
      why_en: 'Centroid divides each median in ratio 2:1 from vertex to midpoint of opposite side.',
      why_ml: 'മധ്യകേന്ദ്രം ഓരോ മാധ്യമരേഖയെയും ശീർഷത്തിൽ നിന്ന് 2:1 എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Midpoint D of side BC is the average of B and C coordinates.', m: 'D = \\left(\\frac{x_2 + x_3}{2}, \\frac{y_2 + y_3}{2}\\right)' },
        { why_en: 'Centroid G divides median AD in ratio 2 : 1.', m: 'AG : GD = 2 : 1' },
        { why_en: 'Apply section formula with m = 2, n = 1.', m: 'x_G = \\frac{2 \\left(\\frac{x_2 + x_3}{2}\\right) + 1(x_1)}{2 + 1}' },
        { why_en: 'Simplify numerator to obtain the centroid coordinate.', m: 'x_G = \\frac{x_1 + x_2 + x_3}{3}, \\quad y_G = \\frac{y_1 + y_2 + y_3}{3}' }
      ],
      rungs_ml: [
        { why_ml: '$BC$ എന്ന പാദത്തിന്റെ മധ്യബിന്ദു $D$ കണ്ടെത്തുന്നു.', m: 'D = \\left(\\frac{x_2 + x_3}{2}, \\frac{y_2 + y_3}{2}\\right)' },
        { why_ml: 'മധ്യകേന്ദ്രം $G$ മാധ്യമരേഖയായ $AD$ യെ $2 : 1$ ൽ വിഭജിക്കുന്നു.', m: 'AG : GD = 2 : 1' },
        { why_ml: '$m = 2, n = 1$ നൽകി സൂത്രവാക്യം പ്രയോഗിക്കുന്നു.', m: 'x_G = \\frac{2 \\left(\\frac{x_2 + x_3}{2}\\right) + 1(x_1)}{2 + 1}' },
        { why_ml: 'ലഘൂകരിക്കുമ്പോൾ മധ്യകേന്ദ്രത്തിന്റെ സൂത്രവാക്യം ലഭിക്കുന്നു.', m: 'x_G = \\frac{x_1 + x_2 + x_3}{3}, \\quad y_G = \\frac{y_1 + y_2 + y_3}{3}' }
      ]
    },
    needs: ['m10.9.1.section-formula-and-ratio-division'],
    traps_en: [
      'Dividing by 2 instead of 3 when computing the centroid of a triangle: centroid averages 3 vertices, so divide by 3.',
      'Confusing the order of vertices in a parallelogram when applying the midpoint equality.'
    ],
    traps_ml: [
      'മധ്യകേന്ദ്രം കാണുമ്പോൾ 3 ന് പകരം 2 കൊണ്ട് ഹരിക്കുന്നത്; 3 ശീർഷങ്ങളുടെ ശരാശരിയായതിനാൽ 3 കൊണ്ടാണ് ഹരിക്കേണ്ടത്.',
      'സാമാന്തരികത്തിൽ എതിർ വികർണ്ണങ്ങൾ തിരിച്ചറിയാതെ തുടർച്ചയായ ശീർഷങ്ങളുടെ മധ്യബിന്ദു കാണുന്നത്.'
    ],
    cards_en: [
      { q: 'State the formulas for midpoint of two points and centroid of a triangle.', a: 'Midpoint: $\\mathbf{\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)}$; Centroid: $\\mathbf{\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)}$.', kind: 'recall' },
      { q: 'Find the centroid of the triangle with vertices (2, 4), (4, 8), and (6, 3).', a: '$x = \\frac{2 + 4 + 6}{3} = 4$, $y = \\frac{4 + 8 + 3}{3} = 5$. Centroid is **$(4, 5)$**.', kind: 'apply' },
      { q: 'Three vertices of a parallelogram are A(1, 2), B(4, 3), C(6, 7). Find the 4th vertex D.', a: '$x_D = 1 + 6 - 4 = \\mathbf{3}$, $y_D = 2 + 7 - 3 = \\mathbf{6}$. Vertex is **$D(3, 6)$**.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'രണ്ട് ബിന്ദുക്കളുടെ മധ്യബിന്ദുവും ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രവും കാണാനുള്ള സൂത്രവാക്യങ്ങൾ ഏവ?', a: 'മധ്യബിന്ദു: $\\mathbf{\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)}$; മധ്യകേന്ദ്രം: $\\mathbf{\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)}$.', kind: 'recall' },
      { q: 'ശീർഷങ്ങൾ $(2, 4), (4, 8), (6, 3)$ ആയ ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രം കാണുക.', a: '$x = \\frac{2 + 4 + 6}{3} = 4$, $y = \\frac{4 + 8 + 3}{3} = 5$. മധ്യകേന്ദ്രം **$(4, 5)$**.', kind: 'apply' },
      { q: 'സാമാന്തരികത്തിന്റെ മൂന്ന് ശീർഷങ്ങൾ $A(1, 2), B(4, 3), C(6, 7)$ ആയാൽ നാലാം ശീർഷം $D$ ഏത്?', a: '$x = 1 + 6 - 4 = \\mathbf{3}$, $y = 2 + 7 - 3 = \\mathbf{6}$. ശീർഷം **$D(3, 6)$**.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.3 Slope of a Line (വരയുടെ ചരിവ്)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.9.3.slope-of-a-line',
    sec: '10.9.3',
    kind: 'concept',
    tier: 'core',
    title_en: 'Slope of a Line',
    title_ml: 'വരയുടെ ചരിവ്',
    oneLine_en: 'The slope (gradient) of a non-vertical line passing through (x1, y1) and (x2, y2) is m = (y2 - y1) / (x2 - x1) = tan θ.',
    oneLine_ml: '$(x_1, y_1), (x_2, y_2)$ എന്നിവയിലൂടെ കടന്നുപോകുന്ന വരയുടെ ചരിവ് $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta$ ആണ്.',
    statement_en: `<p><b>Definition of Slope:</b></p>
      <p>The slope $m$ measures the steepness and direction of a line, defined as the ratio of vertical change (rise) to horizontal change (run):</p>
      $$\\mathbf{m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta}$$
      <p>where $\\theta$ is the inclination angle made with the positive $x$-axis.</p>
      <p><b>Important Slope Rules:</b></p>
      <ul>
        <li><b>Horizontal line:</b> $y_2 = y_1 \\implies m = 0$.</li>
        <li><b>Vertical line:</b> $x_2 = x_1 \\implies m$ is undefined.</li>
        <li><b>Parallel Lines:</b> Two non-vertical lines are parallel if and only if their slopes are equal:
        $$\\mathbf{m_1 = m_2}$$</li>
        <li><b>Perpendicular Lines:</b> Two non-vertical lines are perpendicular if and only if the product of their slopes is $-1$:
        $$\\mathbf{m_1 \\cdot m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}}$$</li>
      </ul>`,
    statement_ml: `<p><b>ചരിവിന്റെ നിർവ്വചനം:</b></p>
      <p>ഒരു വരയുടെ ചരിവ് $m$ എന്നത് ലംബമാറ്റവും തിരശ്ചീനമാറ്റവും തമ്മിലുള്ള അനുപാതമാണ്:</p>
      $$\\mathbf{m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta}$$
      <p>ഇവിടെ $\\theta$ എന്നത് വര $x$-അക്ഷത്തിന്റെ പോസിറ്റീവ് ദിശയുമായി ഉണ്ടാക്കുന്ന കോണാണ്.</p>
      <p><b>പ്രധാന ചരിവ് നിയമങ്ങൾ:</b></p>
      <ul>
        <li><b>തിരശ്ചീന വര:</b> $y$-വ്യത്യാസം പൂജ്യമായതിനാൽ ചരിവ് $m = 0$.</li>
        <li><b>ലംബ വര:</b> $x$-വ്യത്യാസം പൂജ്യമായതിനാൽ ചരിവ് നിർവ്വചിച്ചിട്ടില്ല.</li>
        <li><b>സമാന്തര വരകൾ:</b> രണ്ട് വരകൾ സമാന്തരമാകണമെങ്കിൽ അവയുടെ ചരിവുകൾ തുല്യമായിരിക്കണം:
        $$\\mathbf{m_1 = m_2}$$</li>
        <li><b>ലംബ വരകൾ:</b> രണ്ട് വരകൾ പരസ്പരം ലംബമാകണമെങ്കിൽ അവയുടെ ചരിവുകളുടെ ഗുണനഫലം $-1$ ആയിരിക്കണം:
        $$\\mathbf{m_1 \\cdot m_2 = -1}$$</li>
      </ul>`,
    intuition_en: `<p>Slope tells you how many units the line rises (or falls) for every 1 unit you move to the right. Parallel lines rise at identical rates; perpendicular lines have negative reciprocal rates.</p>`,
    intuition_ml: `<p>വലത്തോട്ട് 1 യൂണിറ്റ് നീങ്ങുമ്പോൾ വര എത്ര യൂണിറ്റ് മുകളിലേക്ക് (അല്ലെങ്കിൽ താഴേക്ക്) പോകുന്നു എന്നതാണ് ചരിവ്. സമാന്തര വരകൾ ഒരേ നിരക്കിൽ ചരിഞ്ഞിരിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Right triangle trigonometric ratio tan θ equals vertical difference divided by horizontal difference.',
      idea_ml: 'മട്ടത്രികോണത്തിലെ ലംബവും പാദവും തമ്മിലുള്ള അനുപാതത്തെ $\\tan\\theta$ യുമായി ബന്ധിപ്പിക്കുന്നു.',
      why_en: 'In a right triangle with horizontal leg Δx and vertical leg Δy, tan θ = Δy / Δx by definition.',
      why_ml: 'മട്ടത്രികോണത്തിൽ എതിർവശം $\\Delta y$ യും സമീപവശം $\\Delta x$ ഉം ആയതിനാൽ $\\tan\\theta = \\frac{\\Delta y}{\\Delta x}$.',
      rungs_en: [
        { why_en: 'Angle theta with positive x-axis forms right triangle with sides Delta x and Delta y.', m: '\\Delta x = x_2 - x_1, \\quad \\Delta y = y_2 - y_1' },
        { why_en: 'Tangent of angle theta is opposite over adjacent.', m: '\\tan\\theta = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = m' },
        { why_en: 'Parallel lines have equal inclination angles theta1 = theta2.', m: 'm_1 = \\tan\\theta_1 = \\tan\\theta_2 = m_2' },
        { why_en: 'Perpendicular lines have inclination theta2 = theta1 + 90 deg.', m: 'm_2 = \\tan(\\theta_1 + 90^\\circ) = -\\cot\\theta_1 = -\\frac{1}{m_1} \\implies m_1 m_2 = -1' }
      ],
      rungs_ml: [
        { why_ml: '$x$-അക്ഷവുമായി കോൺ $\\theta$ ഉണ്ടാക്കുന്ന മട്ടത്രികോണത്തിന്റെ വശങ്ങളാണ് $\\Delta x, \\Delta y$.', m: '\\Delta x = x_2 - x_1, \\quad \\Delta y = y_2 - y_1' },
        { why_ml: 'കോണിന്റെ ടാൻജന്റ് എതിർവശം ഹരിക്കണം സമീപവശം ആണ്.', m: '\\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1} = m' },
        { why_ml: 'സമാന്തര വരകൾക്ക് ഒരേ കോണായതിനാൽ ചരിവുകൾ തുല്യമാണ്.', m: 'm_1 = m_2' },
        { why_ml: 'ലംബ വരകൾക്ക് $\\theta_2 = \\theta_1 + 90^\\circ$ ആയതിനാൽ $m_1 m_2 = -1$.', m: 'm_1 \\cdot m_2 = -1' }
      ]
    },
    needs: ['m10.9.1.section-formula-and-ratio-division'],
    traps_en: [
      'Inverting the fraction: writing (x2 - x1) / (y2 - y1) instead of Delta y / Delta x.',
      'Forgetting that vertical lines have undefined slope (division by zero: x2 - x1 = 0).'
    ],
    traps_ml: [
      'ചരിവ് കാണുമ്പോൾ $x$ മുകളിലും $y$ താഴെയുമായി മാറിപ്പോകുന്നത്; $\\Delta y / \\Delta x$ ആണ് ശരി.',
      'ലംബ വരയുടെ ചരിവ് പൂജ്യമാണെന്ന് തെറ്റിദ്ധരിക്കുന്നത്; ലംബ വരയുടെ ചരിവ് നിർവ്വചിച്ചിട്ടില്ല ($m = 0$ തിരശ്ചീന വരയ്ക്കാണ്).'
    ],
    cards_en: [
      { q: 'What is the formula for the slope m of a line through (x1, y1) and (x2, y2)?', a: '$\\mathbf{m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta}$', kind: 'recall' },
      { q: 'Find the slope of the line passing through (2, 3) and (6, 11).', a: '$m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = \\mathbf{2}$.', kind: 'apply' },
      { q: 'What is the slope of any line perpendicular to a line with slope 3/4?', a: '$m_2 = -\\frac{1}{m_1} = -\\frac{1}{3/4} = -\\frac{\\mathbf{4}}{\\mathbf{3}}$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '$(x_1, y_1), (x_2, y_2)$ എന്നിവയിലൂടെ കടന്നുപോകുന്ന വരയുടെ ചരിവ് കാണാനുള്ള സൂത്രവാക്യം ഏത്?', a: '$\\mathbf{m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta}$', kind: 'recall' },
      { q: '$(2, 3), (6, 11)$ എന്നിവയിലൂടെ കടന്നുപോകുന്ന വരയുടെ ചരിവ് കാണുക.', a: '$m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = \\mathbf{2}$.', kind: 'apply' },
      { q: 'ചരിവ് 3/4 ആയ വരയ്ക്ക് ലംബമായ വരയുടെ ചരിവ് എത്ര?', a: '$m_2 = -\\frac{1}{3/4} = -\\frac{\\mathbf{4}}{\\mathbf{3}}$.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.4 Equations of Lines & Circles (വരയുടെയും വൃത്തത്തിന്റെയും സമവാക്യങ്ങൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.9.4.equations-of-line-and-circle',
    sec: '10.9.4',
    kind: 'formula',
    tier: 'core',
    title_en: 'Equations of Lines & Circles',
    title_ml: 'വരയുടെയും വൃത്തത്തിന്റെയും സമവാക്യങ്ങൾ',
    oneLine_en: 'A straight line has linear equation y - y1 = m(x - x1); a circle with centre (a, b) and radius r has equation (x - a)² + (y - b)² = r².',
    oneLine_ml: 'ഒരു വരയുടെ സമവാക്യം $y - y_1 = m(x - x_1)$ ഉം, കേന്ദ്രം $(a, b)$, ആരം $r$ ആയ വൃത്തത്തിന്റെ സമവാക്യം $(x - a)^2 + (y - b)^2 = r^2$ ഉം ആണ്.',
    statement_en: `<p><b>Equation of a Straight Line:</b></p>
      <ul>
        <li><b>Point-Slope Form:</b> Line through $(x_1, y_1)$ with slope $m$:
        $$\\mathbf{y - y_1 = m(x - x_1)}$$</li>
        <li><b>Slope-Intercept Form:</b> Line with slope $m$ and $y$-intercept $c$:
        $$\\mathbf{y = mx + c}$$</li>
      </ul>
      <p><b>Equation of a Circle:</b></p>
      <ul>
        <li><b>General Centre $(a, b)$ and Radius $r$:</b>
        $$\\mathbf{(x - a)^2 + (y - b)^2 = r^2}$$</li>
        <li><b>Centre at Origin $(0, 0)$:</b>
        $$\\mathbf{x^2 + y^2 = r^2}$$</li>
        <li><b>Diameter Endpoints Form:</b> Circle with diameter endpoints $(x_1, y_1)$ and $(x_2, y_2)$:
        $$\\mathbf{(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0}$$</li>
      </ul>`,
    statement_ml: `<p><b>നേർവരയുടെ സമവാക്യം:</b></p>
      <ul>
        <li><b>ചരിവും ബിന്ദുവും തന്നാൽ:</b> $(x_1, y_1)$ ലൂടെ കടന്നുപോകുന്നതും ചരിവ് $m$ ഉം ആയ വര:
        $$\\mathbf{y - y_1 = m(x - x_1)}$$</li>
        <li><b>ചരിവും $y$-ഛേദവും:</b>
        $$\\mathbf{y = mx + c}$$</li>
      </ul>
      <p><b>വൃത്തത്തിന്റെ സമവാക്യം:</b></p>
      <ul>
        <li><b>കേന്ദ്രവും ആരവും തന്നാൽ:</b> കേന്ദ്രം $(a, b)$ യും ആരം $r$ ഉം ആയ വൃത്തത്തിന്റെ സമവാക്യം:
        $$\\mathbf{(x - a)^2 + (y - b)^2 = r^2}$$</li>
        <li><b>കേന്ദ്രം ആധാരബിന്ദുവായാൽ $(0, 0)$:</b>
        $$\\mathbf{x^2 + y^2 = r^2}$$</li>
        <li><b>വ്യാസത്തിന്റെ രണ്ടറ്റങ്ങൾ തന്നാൽ:</b> വ്യാസാഗ്രങ്ങൾ $(x_1, y_1), (x_2, y_2)$ ആയാൽ:
        $$\\mathbf{(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0}$$</li>
      </ul>`,
    intuition_en: `<p>An algebraic equation is an entrance test for points: a point $(x, y)$ lies on the curve if and only if its coordinates satisfy the equation. For a circle, it tests whether the squared distance from $(x, y)$ to centre $(a, b)$ equals $r^2$.</p>`,
    intuition_ml: `<p>ഒരു ജ്യാമിതീയ രൂപത്തിന്റെ സമവാക്യം എന്നത് ആ രൂപത്തിലെ എല്ലാ ബിന്ദുക്കളും $(x, y)$ പാലിക്കേണ്ട ഗണിത നിയമമാണ്. വൃത്തത്തിന്റെ സമവാക്യം എന്നത് കേന്ദ്രത്തിൽ നിന്നുള്ള അകല സൂത്രവാക്യത്തിന്റെ വർഗ്ഗ രൂപം മാത്രമാണ്.</p>`,
    proof: {
      idea_en: 'Square the Euclidean distance formula from the locus point (x, y) to the fixed centre (a, b).',
      idea_ml: 'കേന്ദ്രത്തിൽ നിന്നുള്ള അകല സൂത്രവാക്യം വർഗ്ഗം ചെയ്ത് വൃത്ത സമവാക്യം രൂപീകരിക്കുന്നു.',
      why_en: 'Every point on a circle maintains constant distance r from the centre (a, b).',
      why_ml: 'വൃത്തത്തിലെ എല്ലാ ബിന്ദുക്കൾക്കും കേന്ദ്രത്തിൽ നിന്നുള്ള ദൂരം ആരമായ $r$ ന് തുല്യമായിരിക്കണം.',
      rungs_en: [
        { why_en: 'Distance from point P(x, y) to centre C(a, b) equals radius r.', m: 'd(P, C) = \\sqrt{(x - a)^2 + (y - b)^2} = r' },
        { why_en: 'Square both sides to eliminate the square root.', m: '(x - a)^2 + (y - b)^2 = r^2' },
        { why_en: 'If centre is origin (0, 0), set a = 0 and b = 0.', m: 'x^2 + y^2 = r^2' }
      ],
      rungs_ml: [
        { why_ml: '$(x, y)$ ൽ നിന്ന് കേന്ദ്രം $(a, b)$ യിലേക്കുള്ള അകലം ആരത്തിന് തുല്യമാണ്.', m: '\\sqrt{(x - a)^2 + (y - b)^2} = r' },
        { why_ml: 'ഇരുവശവും വർഗ്ഗം ചെയ്യുമ്പോൾ വർഗ്ഗമൂലം മാറുന്നു.', m: '(x - a)^2 + (y - b)^2 = r^2' },
        { why_ml: 'കേന്ദ്രം ആധാരബിന്ദുവാകുമ്പോൾ $a = 0, b = 0$ നൽകുന്നു.', m: 'x^2 + y^2 = r^2' }
      ]
    },
    needs: ['m10.9.3.slope-of-a-line'],
    traps_en: [
      'Writing r instead of r² on the right-hand side of the circle equation: (x - a)² + (y - b)² = r², NOT r.',
      'Sign errors in centre coordinates: for centre (3, -4), the equation is (x - 3)² + (y + 4)² = r².'
    ],
    traps_ml: [
      'വൃത്ത സമവാക്യത്തിൽ വലതുവശത്ത് ആരത്തിന്റെ വർഗ്ഗമായ $r^2$ ന് പകരം $r$ എന്ന് മാത്രം എഴുതുന്നത്.',
      'കേന്ദ്രത്തിന്റെ ചിഹ്നങ്ങളിൽ തെറ്റ് വരുത്തുന്നത്; കേന്ദ്രം $(3, -4)$ ആയാൽ സമവാക്യം $(x - 3)^2 + (y + 4)^2 = r^2$ ആണ്.'
    ],
    cards_en: [
      { q: 'State the standard equation of a circle with centre (a, b) and radius r.', a: '$\\mathbf{(x - a)^2 + (y - b)^2 = r^2}$', kind: 'recall' },
      { q: 'Find the equation of a circle with centre (3, -2) and radius 5.', a: '$(x - 3)^2 + (y - (-2))^2 = 5^2 \\implies \\mathbf{(x - 3)^2 + (y + 2)^2 = 25}$.', kind: 'apply' },
      { q: 'What is the equation of the line passing through (1, 4) with slope 3?', a: '$y - 4 = 3(x - 1) \\implies y = 3x - 3 + 4 \\implies \\mathbf{y = 3x + 1}$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'കേന്ദ്രം $(a, b)$ യും ആരം $r$ ഉം ആയ വൃത്തത്തിന്റെ സമവാക്യം എന്താണ്?', a: '$\\mathbf{(x - a)^2 + (y - b)^2 = r^2}$', kind: 'recall' },
      { q: 'കേന്ദ്രം $(3, -2)$ ഉം ആരം 5 ഉം ആയ വൃത്തത്തിന്റെ സമവാക്യം എഴുതുക.', a: '$\\mathbf{(x - 3)^2 + (y + 2)^2 = 25}$.', kind: 'apply' },
      { q: '$(1, 4)$ ലൂടെ കടന്നുപോകുന്നതും ചരിവ് 3 ഉം ആയ വരയുടെ സമവാക്യം ഏത്?', a: '$y - 4 = 3(x - 1) \\implies \\mathbf{y = 3x + 1}$.', kind: 'trap' }
    ]
  }
);
