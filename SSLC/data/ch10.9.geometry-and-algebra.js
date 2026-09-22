/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 9: Geometry and Algebra (ജ്യാമിതിയും ബീജഗണിതവും)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.9.1.section-formula-and-ratio-division',
    sec: '10.9.1',
    kind: 'formula',
    tier: 'core',
    title_en: 'Section Formula & Ratio Division',
    title_ml: 'രേഖാഖണ്ഡ വിഭജനവും അനുപാതവും',
    oneLine_en: 'The coordinates of a point P dividing the segment joining (x1, y1) and (x2, y2) in the ratio m : n internally are ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)).',
    oneLine_ml: '(x1, y1), (x2, y2) എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയെ m : n എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്ന ബിന്ദുവിന്റെ സൂചകസംഖ്യകൾ ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)) ആണ്.',
    statement_en: `<p><b>Internal Section Formula:</b></p>
      <p>Let $A(x_1, y_1)$ and $B(x_2, y_2)$ be two points. If point $P(x, y)$ lies on the segment $AB$ such that $AP : PB = m : n$, then:</p>
      $$\\mathbf{x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}}$$
      <p><b>Division in Ratio $k : 1$:</b></p>
      <p>Setting $k = \\frac{m}{n}$ simplifies the coordinates to:</p>
      $$x = \\frac{k x_2 + x_1}{k + 1}, \\quad y = \\frac{k y_2 + y_1}{k + 1}$$
      <p><b>Ratio of Division by Coordinate Axes:</b></p>
      <ul>
        <li>The $x$-axis ($y=0$) divides segment $AB$ in the ratio $-y_1 : y_2$.</li>
        <li>The $y$-axis ($x=0$) divides segment $AB$ in the ratio $-x_1 : x_2$.</li>
      </ul>`,
    statement_ml: `<p><b>രേഖാഖണ്ഡ വിഭജന സൂത്രവാക്യം:</b></p>
      <p>$A(x_1, y_1), B(x_2, y_2)$ എന്നീ ബിന്ദുക്കളെ യോജിപ്പിക്കുന്ന വരയെ $P(x, y)$ എന്ന ബിന്ദു $m : n$ എന്ന അനുപാതത്തിൽ വിഭജിച്ചാൽ:</p>
      $$\\mathbf{x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}}$$
      <p><b>$k : 1$ അനുപാത വിഭജനം:</b></p>
      <p>$k = \\frac{m}{n}$ എന്ന് എടുത്താൽ:</p>
      $$x = \\frac{k x_2 + x_1}{k + 1}, \\quad y = \\frac{k y_2 + y_1}{k + 1}$$
      <p><b>അക്ഷങ്ങൾ വരയെ വിഭജിക്കുന്ന അനുപാതം:</b></p>
      <ul>
        <li>$x$-അക്ഷം ($y=0$) വരയെ വിഭജിക്കുന്ന അനുപാതം: $-y_1 : y_2$.</li>
        <li>$y$-അക്ഷം ($x=0$) വരയെ വിഭജിക്കുന്ന അനുപാതം: $-x_1 : x_2$.</li>
      </ul>`,
    intuition_en: 'The section formula is a weighted average of coordinates. The point P is pulled towards whichever endpoint has higher weight m or n.',
    intuition_ml: 'രേഖാഖണ്ഡ വിഭജന സൂത്രവാക്യം സൂചകസംഖ്യകളുടെ തൂക്കമുള്ള ശരാശരി പോലെയാണ്. അനുപാതം കൂടുതലുള്ള അറ്റത്തേക്ക് ബിന്ദു കൂടുതൽ അടുത്തിരിക്കും.',
    proof: {
      idea_en: 'Similar right triangles projected onto horizontal and vertical axes.',
      idea_ml: 'തിരശ്ചീന-ലംബ വരകളിലേക്ക് പ്രൊജക്റ്റ് ചെയ്തുണ്ടാക്കുന്ന സദൃശ ത്രികോണങ്ങളിലൂടെ തെളിയിക്കുന്നു.',
      why_en: 'Parallel projection preserves length ratios by Thales theorem.',
      why_ml: 'തേൽസിന്റെ സിദ്ധാന്തപ്രകാരം സമാന്തര വരകൾ വശങ്ങളെ ഒരേ അനുപാതത്തിൽ വിഭജിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Horizontal Projection Ratio',
          title_ml: 'തിരശ്ചീന പ്രൊജക്ഷൻ അനുപാതം',
          detail_en: 'Drop perpendiculars from $A, P, B$ to the $x$-axis. The intercepts on the axis are in ratio $m : n$, so $\\frac{x - x_1}{x_2 - x} = \\frac{m}{n}$.',
          detail_ml: '$A, P, B$ ൽ നിന്ന് $x$-അക്ഷത്തിലേക്ക് ലംബം വരച്ചാൽ ലഭിക്കുന്ന ഭാഗങ്ങളുടെ അനുപാതം $m : n$ ആയിരിക്കും: $\\frac{x - x_1}{x_2 - x} = \\frac{m}{n}$.'
        },
        {
          title_en: 'Cross-Multiplication and Solving',
          title_ml: 'ഗുണിച്ച് പരിഹരിക്കൽ',
          detail_en: '$n(x - x_1) = m(x_2 - x) \\implies nx - n x_1 = m x_2 - mx \\implies (m + n)x = m x_2 + n x_1 \\implies x = \\frac{m x_2 + n x_1}{m + n}$. The same holds for $y$.',
          detail_ml: '$n(x - x_1) = m(x_2 - x) \\implies (m + n)x = m x_2 + n x_1 \\implies x = \\frac{m x_2 + n x_1}{m + n}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Multiplying m with x1 and n with x2 instead of the correct cross weights.',
        fix_en: 'Remember cross-multiplication: weight m multiplies the FAR endpoint (x2, y2), and n multiplies (x1, y1).'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'm നെ x1 നോടും n നെ x2 നോടും മാറി ഗുണിക്കുന്നത്.',
        fix_ml: 'm എന്ന അനുപാതം എതിരെയുള്ള (x2, y2) നോടും, n എന്നത് (x1, y1) നോടുമാണ് ഗുണിക്കേണ്ടത്.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the coordinates of the point dividing the segment joining (1, 2) and (6, 7) in the ratio 2 : 3.',
        a: 'x = (2*6 + 3*1) / 5 = (12 + 3)/5 = 3; y = (2*7 + 3*2) / 5 = (14 + 6)/5 = 4. Point is (3, 4).'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '(1, 2), (6, 7) എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയെ 2 : 3 എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്ന ബിന്ദു ഏത്?',
        a: 'x = (2*6 + 3*1)/5 = 3, y = (2*7 + 3*2)/5 = 4. ബിന്ദു (3, 4) ആണ്.'
      }
    ]
  },
  {
    id: 'm10.9.2.midpoint-and-centroid',
    sec: '10.9.2',
    kind: 'formula',
    tier: 'core',
    title_en: 'Midpoint Formula & Triangle Centroid',
    title_ml: 'മധ്യബിന്ദുവും മധ്യകേന്ദ്രവും',
    oneLine_en: 'The midpoint of (x1, y1) and (x2, y2) is ((x1+x2)/2, (y1+y2)/2); the centroid of triangle ABC is ((x1+x2+x3)/3, (y1+y2+y3)/3).',
    oneLine_ml: '(x1, y1), (x2, y2) എന്നിവയുടെ മധ്യബിന്ദു ((x1+x2)/2, (y1+y2)/2) ആണ്; ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രം ((x1+x2+x3)/3, (y1+y2+y3)/3) ആണ്.',
    statement_en: `<p><b>Midpoint Formula:</b></p>
      <p>When the ratio is $1 : 1$, the midpoint $M$ of line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ is:</p>
      $$\\mathbf{M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)}$$
      <p><b>Centroid of a Triangle:</b></p>
      <p>The centroid $G$ (centre of gravity) of $\\triangle ABC$ with vertices $A(x_1, y_1)$, $B(x_2, y_2)$, and $C(x_3, y_3)$ is the point where the three medians intersect. It divides each median in the ratio $2 : 1$ from vertex to base:</p>
      $$\\mathbf{G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)}$$
      <p><b>Parallelogram Fourth Vertex Rule:</b></p>
      <p>Since diagonals of a parallelogram bisect each other, they share the same midpoint:</p>
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
    intuition_en: 'Midpoint is the simple arithmetic mean of 2 points. Centroid is the simple arithmetic mean of 3 vertices, representing the physical balancing point of a triangular sheet.',
    intuition_ml: 'മധ്യബിന്ദു എന്നത് 2 ബിന്ദുക്കളുടെ ശരാശരിയാണ്. മധ്യകേന്ദ്രം എന്നത് 3 ശീർഷങ്ങളുടെ ശരാശരിയാണ് (ഒരു ത്രികോണ പലകയെ കൃത്യമായി വിരൽത്തുമ്പിൽ ബാലൻസ് ചെയ്യാവുന്ന ബിന്ദു).',
    proof: {
      idea_en: 'Apply section formula with ratio 2:1 on median to midpoint of opposite side.',
      idea_ml: 'മാധ്യമരേഖയെ 2:1 എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്ന ബിന്ദു കണ്ടെത്തുന്നു.',
      why_en: 'The medians concurrent property establishes that G divides median AD in ratio 2:1.',
      why_ml: 'മാധ്യമരേഖകൾ സംഗമിക്കുന്ന ബിന്ദു ശീർഷത്തിൽ നിന്നുള്ള ദൂരത്തെ 2:1 എന്ന അനുപാതത്തിൽ ഭാഗിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Midpoint of Base',
          title_ml: 'പാദത്തിന്റെ മധ്യബിന്ദു',
          detail_en: 'Midpoint $D$ of side $BC$ is $D\\left(\\frac{x_2 + x_3}{2}, \\frac{y_2 + y_3}{2}\\right)$.',
          detail_ml: 'വശം $BC$ യുടെ മധ്യബിന്ദു $D\\left(\\frac{x_2 + x_3}{2}, \\frac{y_2 + y_3}{2}\\right)$ ആണ്.'
        },
        {
          title_en: 'Section Formula on Median',
          title_ml: 'മാധ്യമരേഖയിലെ വിഭജനം',
          detail_en: '$G$ divides $AD$ in ratio $2 : 1$. $x_G = \\frac{2 \\left(\\frac{x_2 + x_3}{2}\\right) + 1(x_1)}{2 + 1} = \\frac{x_1 + x_2 + x_3}{3}$.',
          detail_ml: '$G$ എന്ന ബിന്ദു $AD$ യെ $2 : 1$ ൽ വിഭജിക്കുമ്പോൾ: $x = \\frac{2 \\times \\frac{x_2 + x_3}{2} + 1 \\times x_1}{3} = \\frac{x_1 + x_2 + x_3}{3}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Dividing by 2 instead of 3 when calculating the centroid of a triangle.',
        fix_en: 'Midpoint uses division by 2; centroid of a triangle averages THREE vertices and divides by 3.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'മധ്യകേന്ദ്രം കാണുമ്പോൾ 3 ന് പകരം 2 കൊണ്ട് ഹരിക്കുന്നത്.',
        fix_ml: 'മധ്യബിന്ദുവിന് 2 കൊണ്ടുമാണ് ഹരിക്കേണ്ടത്, എന്നാൽ ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രത്തിന് 3 കൊണ്ട് ഹരിക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the centroid of the triangle with vertices (2, 4), (4, 8), and (6, 3).',
        a: 'x = (2 + 4 + 6)/3 = 12/3 = 4; y = (4 + 8 + 3)/3 = 15/3 = 5. Centroid is (4, 5).'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ശീർഷങ്ങൾ (2, 4), (4, 8), (6, 3) ആയ ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രം കാണുക.',
        a: 'x = (2 + 4 + 6)/3 = 4, y = (4 + 8 + 3)/3 = 5. മധ്യകേന്ദ്രം (4, 5).'
      }
    ]
  },
  {
    id: 'm10.9.3.slope-of-a-line',
    sec: '10.9.3',
    kind: 'concept',
    tier: 'core',
    title_en: 'Slope of a Line',
    title_ml: 'വരയുടെ ചരിവ്',
    oneLine_en: 'The slope (gradient) of a non-vertical line passing through (x1, y1) and (x2, y2) is m = (y2 - y1) / (x2 - x1) = tan θ.',
    oneLine_ml: '(x1, y1), (x2, y2) എന്നിവയിലൂടെ കടന്നുപോകുന്ന വരയുടെ ചരിവ് m = (y2 - y1) / (x2 - x1) = $\tan\theta$ ആണ്.',
    statement_en: `<p><b>Definition of Slope:</b></p>
      <p>The slope $m$ measures the steepness and direction of a line, defined as the ratio of vertical change (rise) to horizontal change (run):</p>
      $$\\mathbf{m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta}$$
      <p>where $\\theta$ is the inclination angle made with the positive $x$-axis.</p>
      <p><b>Important Slope Rules:</b></p>
      <ul>
        <li><b>Horizontal line:</b> $y_2 = y_1 \\implies m = 0$.</li>
        <li><b>Vertical line:</b> $x_2 = x_1 \\implies m$ is undefined (infinite).</li>
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
    intuition_en: 'Slope tells you how many units the line rises (or falls) for every 1 unit you move to the right. Parallel lines rise at identical rates; perpendicular lines have negative reciprocal rates.',
    intuition_ml: 'വലത്തോട്ട് 1 യൂണിറ്റ് നീങ്ങുമ്പോൾ വര എത്ര യൂണിറ്റ് മുകളിലേക്ക് (അല്ലെങ്കിൽ താഴേക്ക്) പോകുന്നു എന്നതാണ് ചരിവ്. സമാന്തര വരകൾ ഒരേ നിരക്കിൽ ചരിഞ്ഞിരിക്കുന്നു.',
    proof: {
      idea_en: 'Relate Cartesian rise-over-run to right triangle tangent.',
      idea_ml: 'മട്ടത്രികോണത്തിലെ ലംബവും പാദവും തമ്മിലുള്ള അനുപാതത്തെ $\tan\theta$ യുമായി ബന്ധിപ്പിക്കുന്നു.',
      why_en: 'In right triangle with legs Δx and Δy, tan θ = Δy / Δx by definition.',
      why_ml: 'മട്ടത്രികോണത്തിൽ എതിർവശം Δy യും സമീപവശം Δx ഉം ആയതിനാൽ tan θ = Δy / Δx.',
      rungs: [
        {
          title_en: 'Trigonometric Equivalence',
          title_ml: 'ത്രികോണമിതി തുല്യത',
          detail_en: 'Inclination angle $\\theta$ gives $\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{y_2 - y_1}{x_2 - x_1} = m$.',
          detail_ml: 'വര $x$-അക്ഷവുമായി ഉണ്ടാക്കുന്ന കോൺ $\\theta$ ആയാൽ $\\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1} = m$.'
        },
        {
          title_en: 'Perpendicular Rotation',
          title_ml: 'ലംബ ഭ്രമണം',
          detail_en: 'Rotating a line by $90^\\circ$ turns inclination $\\theta$ into $\\theta + 90^\\circ$. Since $\\tan(\\theta + 90^\\circ) = -\\cot\\theta = -\\frac{1}{\\tan\\theta}$, we get $m_2 = -\\frac{1}{m_1} \\implies m_1 m_2 = -1$.',
          detail_ml: 'വരയെ 90° തിരിക്കുമ്പോൾ ചരിവ് $m_2 = -\\frac{1}{m_1}$ ആകുന്നു, അതിനാൽ $m_1 m_2 = -1$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Inverting the slope fraction: writing (x2 - x1) / (y2 - y1) instead of y on top.',
        fix_en: 'Slope is ALWAYS rise over run: vertical difference Δy on TOP, horizontal difference Δx on BOTTOM.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'ചരിവ് കാണുമ്പോൾ x മുകളിലും y താഴെയുമായി മാറിപ്പോകുന്നത്.',
        fix_ml: 'ചരിവ് എപ്പോഴും y-വ്യത്യാസം മുകളിലും x-വ്യത്യാസം താഴെയുമാണ്: (y2 - y1) / (x2 - x1).'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the slope of the line passing through (2, 3) and (6, 11).',
        a: 'm = (11 - 3) / (6 - 2) = 8 / 4 = 2.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '(2, 3), (6, 11) എന്നീ ബിന്ദുക്കളിലൂടെ കടന്നുപോകുന്ന വരയുടെ ചരിവ് കാണുക.',
        a: 'm = (11 - 3) / (6 - 2) = 8 / 4 = 2.'
      }
    ]
  },
  {
    id: 'm10.9.4.equations-of-line-and-circle',
    sec: '10.9.4',
    kind: 'formula',
    tier: 'core',
    title_en: 'Equations of Lines & Circles',
    title_ml: 'വരയുടെയും വൃത്തത്തിന്റെയും സമവാക്യങ്ങൾ',
    oneLine_en: 'A straight line has linear equation y - y1 = m(x - x1); a circle with centre $(a, b)$ and radius r has equation (x - a)² + (y - b)² = r².',
    oneLine_ml: 'ഒരു വരയുടെ സമവാക്യം y - y1 = m(x - x1) ഉം, കേന്ദ്രം (a, b), ആരം r ആയ വൃത്തത്തിന്റെ സമവാക്യം (x - a)² + (y - b)² = r² ഉം ആണ്.',
    statement_en: `<p><b>Equation of a Straight Line:</b></p>
      <ul>
        <li><b>Point-Slope Form:</b> Line passing through $(x_1, y_1)$ with slope $m$:
        $$\\mathbf{y - y_1 = m(x - x_1)}$$</li>
        <li><b>Slope-Intercept Form:</b> Line with slope $m$ and $y$-intercept $c$:
        $$\\mathbf{y = mx + c}$$</li>
        <li><b>General Linear Form:</b> $Ax + By + C = 0$.</li>
      </ul>
      <p><b>Equation of a Circle:</b></p>
      <ul>
        <li><b>General Centre $(a, b)$ and Radius $r$:</b> The set of all points $(x, y)$ at constant distance $r$ from $(a, b)$:
        $$\\mathbf{(x - a)^2 + (y - b)^2 = r^2}$$</li>
        <li><b>Centre at Origin $(0, 0)$:</b>
        $$\\mathbf{x^2 + y^2 = r^2}$$</li>
        <li><b>Diameter Endpoints Form:</b> If endpoints of a diameter are $(x_1, y_1)$ and $(x_2, y_2)$:
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
    intuition_en: 'An equation of a shape is simply an algebraic rule that tests whether any point (x, y) belongs to the shape. For a circle, it tests whether the distance from (x, y) to (a, b) equals r using the distance formula squared.',
    intuition_ml: 'ഒരു ജ്യാമിതീയ രൂപത്തിന്റെ സമവാക്യം എന്നത് ആ രൂപത്തിലെ എല്ലാ ബിന്ദുക്കളും (x, y) പാലിക്കേണ്ട ഗണിത നിയമമാണ്. വൃത്തത്തിന്റെ സമവാക്യം എന്നത് അകല സൂത്രവാക്യത്തിന്റെ വർഗ്ഗ രൂപം മാത്രമാണ്.',
    proof: {
      idea_en: 'Square of distance formula from center to locus point.',
      idea_ml: 'കേന്ദ്രത്തിൽ നിന്നുള്ള അകല സൂത്രവാക്യം വർഗ്ഗം ചെയ്ത് വൃത്ത സമവാക്യം രൂപീകരിക്കുന്നു.',
      why_en: 'By definition, every point on a circle maintains constant distance r from center (a, b).',
      why_ml: 'വൃത്തത്തിലെ എല്ലാ ബിന്ദുക്കൾക്കും കേന്ദ്രത്തിൽ നിന്നുള്ള ദൂരം ആരമായ r ന് തുല്യമായിരിക്കണം.',
      rungs: [
        {
          title_en: 'Distance Locus',
          title_ml: 'ബിന്ദുപഥത്തിലെ അകലം',
          detail_en: 'Distance from $(x, y)$ to $(a, b)$ is $\\sqrt{(x - a)^2 + (y - b)^2} = r$.',
          detail_ml: '$(x, y)$ ൽ നിന്ന് കേന്ദ്രം $(a, b)$ യിലേക്കുള്ള അകലം $\\sqrt{(x - a)^2 + (y - b)^2} = r$.'
        },
        {
          title_en: 'Squaring Both Sides',
          title_ml: 'ഇരുവശവും വർഗ്ഗം ചെയ്യൽ',
          detail_en: 'Squaring eliminates the square root: $(x - a)^2 + (y - b)^2 = r^2$.',
          detail_ml: 'വർഗ്ഗം ചെയ്യുമ്പോൾ വർഗ്ഗമൂലം മാറുന്നു: $(x - a)^2 + (y - b)^2 = r^2$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Forgetting to square the radius on the right-hand side: writing = r instead of = r².',
        fix_en: 'The circle equation always has r² on the right-hand side: (x - a)² + (y - b)² = r².'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'വലതുവശത്ത് ആരത്തിന്റെ വർഗ്ഗം r² ന് പകരം r എന്ന് മാത്രം എഴുതുന്നത്.',
        fix_ml: 'വൃത്തത്തിന്റെ സമവാക്യത്തിൽ വലതുവശത്ത് ആരത്തിന്റെ വർഗ്ഗമായ r² ഉണ്ടായിരിക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'What is the equation of a circle with centre (3, -2) and radius 5?',
        a: '(x - 3)² + (y - (-2))² = 5² ⟹ (x - 3)² + (y + 2)² = 25.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'കേന്ദ്രം (3, -2) ഉം ആരം 5 ഉം ആയ വൃത്തത്തിന്റെ സമവാക്യം എന്താണ്?',
        a: '(x - 3)² + (y + 2)² = 25.'
      }
    ]
  }
);
