/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 6: Coordinates (സൂചകസംഖ്യകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.6.1 Coordinate Axes & Point Coordinates (നിർദ്ദേശാങ്ക അക്ഷങ്ങളും ബിന്ദുക്കളും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.6.1.coordinate-axes-and-points',
    sec: '10.6.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Coordinate Axes & Point Coordinates',
    title_ml: 'നിർദ്ദേശാങ്ക അക്ഷങ്ങളും ബിന്ദുക്കളും',
    oneLine_en: 'A point in a plane is specified by an ordered pair $(x, y)$, representing signed perpendicular distances from the vertical y-axis and horizontal x-axis.',
    oneLine_ml: 'ഒരു പ്രതലത്തിലെ ബിന്ദുവിന്റെ സ്ഥാനം നിർണ്ണയിക്കുന്നത് $x$-അക്ഷത്തിൽ നിന്നും $y$-അക്ഷത്തിൽ നിന്നുമുള്ള ലംബദൂരങ്ങളെ സൂചിപ്പിക്കുന്ന $(x, y)$ എന്ന സംഖ്യാജോഡിയിലൂടെയാണ്.',
    statement_en: `<p><b>The Cartesian Coordinate System:</b></p>
      <ul>
        <li><b>Axes:</b> Two mutually perpendicular number lines intersecting at the origin $O(0, 0)$. The horizontal line is the <b>$x$-axis</b>, and the vertical line is the <b>$y$-axis</b>.</li>
        <li><b>Coordinates $(x, y)$:</b>
          <ul>
            <li>$x$-coordinate (abscissa): Signed perpendicular distance along the horizontal direction from the $y$-axis.</li>
            <li>$y$-coordinate (ordinate): Signed perpendicular distance along the vertical direction from the $x$-axis.</li>
          </ul>
        </li>
        <li><b>Points on Axes:</b> Any point on the $x$-axis has $y = 0$, represented as $(x, 0)$. Any point on the $y$-axis has $x = 0$, represented as $(0, y)$.</li>
        <li><b>Four Quadrants:</b>
          <ul>
            <li>Quadrant I: $x > 0, y > 0$</li>
            <li>Quadrant II: $x < 0, y > 0$</li>
            <li>Quadrant III: $x < 0, y < 0$</li>
            <li>Quadrant IV: $x > 0, y < 0$</li>
          </ul>
        </li>
      </ul>`,
    statement_ml: `<p><b>കാർട്ടീഷ്യൻ നിർദ്ദേശാങ്ക വ്യവസ്ഥ:</b></p>
      <ul>
        <li><b>അക്ഷങ്ങൾ:</b> ആധാരബിന്ദുവായ $O(0, 0)$ ൽ പരസ്പരം ലംബമായി മുറിച്ചുകടക്കുന്ന രണ്ട് സംഖ്യാരേഖകൾ. തിരശ്ചീന രേഖ <b>$x$-അക്ഷം</b> എന്നും ലംബ രേഖ <b>$y$-അക്ഷം</b> എന്നും അറിയപ്പെടുന്നു.</li>
        <li><b>സൂചകസംഖ്യകൾ $(x, y)$:</b>
          <ul>
            <li>$x$-സൂചകസംഖ്യ: $y$-അക്ഷത്തിൽ നിന്നുള്ള തിരശ്ചീന ലംബദൂരം.</li>
            <li>$y$-സൂചകസംഖ്യ: $x$-അക്ഷത്തിൽ നിന്നുള്ള ലംബദൂരം.</li>
          </ul>
        </li>
        <li><b>അക്ഷങ്ങളിലെ ബിന്ദുക്കൾ:</b> $x$-അക്ഷത്തിലെ ഏതൊരു ബിന്ദുവിന്റെയും $y$-സൂചകസംഖ്യ പൂജ്യമായിരിക്കും: $(x, 0)$. $y$-അക്ഷത്തിലെ ഏതൊരു ബിന്ദുവിന്റെയും $x$-സൂചകസംഖ്യ പൂജ്യമായിരിക്കും: $(0, y)$.</li>
        <li><b>നാല് പാദങ്ങൾ:</b>
          <ul>
            <li>ഒന്നാം പാദം: $x > 0, y > 0$</li>
            <li>രണ്ടാം പാദം: $x < 0, y > 0$</li>
            <li>മൂന്നാം പാദം: $x < 0, y < 0$</li>
            <li>നാലാം പാദം: $x > 0, y < 0$</li>
          </ul>
        </li>
      </ul>`,
    intuition_en: `<p>Coordinates turn geometry into algebra by giving every point a precise street address on a 2D grid, allowing geometric shapes and positions to be manipulated with arithmetic.</p>`,
    intuition_ml: `<p>നിർദ്ദേശാങ്കങ്ങൾ എന്നത് ഒരു പ്രതലത്തിലെ ഓരോ ബിന്ദുവിനും നൽകുന്ന മേൽവിലാസമാണ്. ഇത് ജ്യാമിതീയ രൂപങ്ങളെയും അവയുടെ സ്ഥാനങ്ങളെയും സംഖ്യകളും ബീജഗണിതവുമാക്കി മാറ്റാൻ സഹായിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Orthogonal projection of points onto perpendicular number lines gives unique coordinates.',
      idea_ml: 'പരസ്പരം ലംബമായ സംഖ്യാരേഖകളിലേക്കുള്ള ലംബ പ്രൊജക്ഷൻ വഴി സ്ഥാനം നിർണ്ണയിക്കുന്നു.',
      why_en: 'Perpendicular projection from any point P gives a unique pair of real numbers (x, y) on the orthogonal axes.',
      why_ml: 'ഏതൊരു ബിന്ദുവിൽ നിന്നും അക്ഷങ്ങളിലേക്ക് വരയ്ക്കുന്ന ലംബങ്ങൾ സംഖ്യാരേഖയിലെ കൃത്യമായ ഒരൊറ്റ ജോഡി സംഖ്യകളെ കാണിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Through point P, draw lines perpendicular to x-axis and y-axis.', m: 'P \\to (x, y)' },
        { why_en: 'Perpendicular to x-axis intersects at a single real number x.', m: 'x = \\text{projection on } x\\text{-axis}' },
        { why_en: 'Perpendicular to y-axis intersects at a single real number y.', m: 'y = \\text{projection on } y\\text{-axis}' },
        { why_en: 'Every point in the plane corresponds uniquely to ordered pair (x, y).', m: 'P \\iff (x, y) \\in \\mathbb{R}^2' }
      ],
      rungs_ml: [
        { why_ml: '$P$ എന്ന ബിന്ദുവിൽ നിന്ന് അക്ഷങ്ങളിലേക്ക് ലംബങ്ങൾ വരയ്ക്കുന്നു.', m: 'P \\to (x, y)' },
        { why_ml: '$x$-അക്ഷത്തിലേക്കുള്ള ലംബം സംഖ്യാരേഖയിൽ $x$ എന്ന ഒരൊറ്റ ബിന്ദുവിൽ സംഗമിക്കുന്നു.', m: 'x = x\\text{-അക്ഷത്തിലെ പ്രൊജക്ഷൻ}' },
        { why_ml: '$y$-അക്ഷത്തിലേക്കുള്ള ലംബം സംഖ്യാരേഖയിൽ $y$ എന്ന ഒരൊറ്റ ബിന്ദുവിൽ സംഗമിക്കുന്നു.', m: 'y = y\\text{-അക്ഷത്തിലെ പ്രൊജക്ഷൻ}' },
        { why_ml: 'പ്രതലത്തിലെ ഓരോ ബിന്ദുവിനും $(x, y)$ എന്ന കൃത്യമായ ഒരു ജോഡി സംഖ്യ ലഭിക്കുന്നു.', m: 'P \\iff (x, y) \\in \\mathbb{R}^2' }
      ]
    },
    traps_en: [
      'Reversing the order of coordinates: writing (y, x) instead of (x, y). Horizontal x ALWAYS comes first.',
      'Assuming points on the x-axis have x = 0; on the x-axis, y = 0, and on the y-axis, x = 0.'
    ],
    traps_ml: [
      'സൂചകസംഖ്യകളുടെ ക്രമം തെറ്റിച്ച് $(y, x)$ എന്ന് എഴുതുന്നത്. തിരശ്ചീന അളവായ $x$ ആദ്യം വരണം.',
      '$x$-അക്ഷത്തിലെ ബിന്ദുവിന് $x = 0$ എന്ന് തെറ്റിദ്ധരിക്കുന്നത്; $x$-അക്ഷത്തിൽ $y = 0$ ഉം $y$-അക്ഷത്തിൽ $x = 0$ ഉം ആണ്.'
    ],
    cards_en: [
      { q: 'What are the coordinates of the origin, and what is the y-coordinate of any point on the x-axis?', a: 'Origin is $(0, 0)$. Any point on the $x$-axis has $y = 0$.', kind: 'recall' },
      { q: 'In which quadrant does the point $(-4, 7)$ lie?', a: 'Since $x = -4 < 0$ and $y = 7 > 0$, the point lies in **Quadrant II**.', kind: 'apply' },
      { q: 'On which axis does the point $(0, -9)$ lie?', a: 'Since $x = 0$, the point lies on the **$y$-axis**.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ആധാരബിന്ദുവിന്റെ സൂചകസംഖ്യകൾ ഏവ? $x$-അക്ഷത്തിലെ ഏതൊരു ബിന്ദുവിന്റെയും $y$-സൂചകസംഖ്യ എത്രയാണ്?', a: 'ആധാരബിന്ദു $(0, 0)$ ആണ്. $x$-അക്ഷത്തിലെ ഏതൊരു ബിന്ദുവിന്റെയും $y$-സൂചകസംഖ്യ $0$ ആണ്.', kind: 'recall' },
      { q: '$(-4, 7)$ എന്ന ബിന്ദു ഏത് പാദത്തിലാണ് സ്ഥിതിചെയ്യുന്നത്?', a: '$x = -4 < 0$ ഉം $y = 7 > 0$ ഉം ആയതിനാൽ ഈ ബിന്ദു **രണ്ടാം പാദത്തിലാണ്**.', kind: 'apply' },
      { q: '$(0, -9)$ എന്ന ബിന്ദു ഏത് അക്ഷത്തിലാണ് സ്ഥിതിചെയ്യുന്നത്?', a: '$x = 0$ ആയതിനാൽ ഈ ബിന്ദു **$y$-അക്ഷത്തിലാണ്** സ്ഥിതിചെയ്യുന്നത്.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.2 Distance on Parallel Lines (സമാന്തരവരകളിലെ അകലം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.6.2.distance-on-parallel-lines',
    sec: '10.6.2',
    kind: 'concept',
    tier: 'core',
    title_en: 'Distance on Parallel Lines',
    title_ml: 'സമാന്തരവരകളിലെ അകലം',
    oneLine_en: 'Distance between two points on a horizontal line is the absolute difference of their x-coordinates: |x2 - x1|; on a vertical line, it is |y2 - y1|.',
    oneLine_ml: '$x$-അക്ഷത്തിന് സമാന്തരമായ വരയിലെ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം $|x_2 - x_1|$ ഉം, $y$-അക്ഷത്തിന് സമാന്തരമായ വരയിൽ $|y_2 - y_1|$ ഉം ആണ്.',
    statement_en: `<p><b>Distances on Lines Parallel to the Axes:</b></p>
      <ul>
        <li><b>Horizontal Line (Parallel to $x$-axis):</b>
          <p>For any two points $A(x_1, y)$ and $B(x_2, y)$ lying on the same horizontal line ($y$-coordinates are equal):</p>
          $$\\mathbf{AB = |x_2 - x_1| = \\max(x_1, x_2) - \\min(x_1, x_2)}$$
        </li>
        <li><b>Vertical Line (Parallel to $y$-axis):</b>
          <p>For any two points $C(x, y_1)$ and $D(x, y_2)$ lying on the same vertical line ($x$-coordinates are equal):</p>
          $$\\mathbf{CD = |y_2 - y_1| = \\max(y_1, y_2) - \\min(y_1, y_2)}$$
        </li>
      </ul>
      <p><b>Rectangles Aligned with Axes:</b></p>
      <p>If opposite vertices of a rectangle with sides parallel to axes are $(x_1, y_1)$ and $(x_2, y_2)$ (with $x_1 \\ne x_2$ and $y_1 \\ne y_2$), the four vertices are $(x_1, y_1), (x_2, y_1), (x_2, y_2), (x_1, y_2)$.</p>
      <p>The side lengths are $|x_2 - x_1|$ and $|y_2 - y_1|$, and its area is $|x_2 - x_1| \\times |y_2 - y_1|$.</p>`,
    statement_ml: `<p><b>അക്ഷങ്ങൾക്ക് സമാന്തരമായ വരകളിലെ അകലം:</b></p>
      <ul>
        <li><b>തിരശ്ചീന വര ($x$-അക്ഷത്തിന് സമാന്തരം):</b>
          <p>ഒരേ $y$-സൂചകസംഖ്യയുള്ള $A(x_1, y), B(x_2, y)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം:</p>
          $$\\mathbf{AB = |x_2 - x_1| = \\max(x_1, x_2) - \\min(x_1, x_2)}$$
        </li>
        <li><b>ലംബ വര ($y$-അക്ഷത്തിന് സമാന്തരം):</b>
          <p>ഒരേ $x$-സൂചകസംഖ്യയുള്ള $C(x, y_1), D(x, y_2)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം:</p>
          $$\\mathbf{CD = |y_2 - y_1| = \\max(y_1, y_2) - \\min(y_1, y_2)}$$
        </li>
      </ul>
      <p><b>അക്ഷങ്ങൾക്ക് സമാന്തരമായ വശങ്ങളുള്ള ചതുരം:</b></p>
      <p>എതിർ ശീർഷങ്ങൾ $(x_1, y_1), (x_2, y_2)$ ആയാൽ ($x_1 \\ne x_2, y_1 \\ne y_2$), മറ്റ് രണ്ട് ശീർഷങ്ങൾ $(x_2, y_1), (x_1, y_2)$ ആയിരിക്കും. വശങ്ങളുടെ നീളങ്ങൾ $|x_2 - x_1|$ ഉം $|y_2 - y_1|$ ഉം, പരപ്പളവ് $|x_2 - x_1| \\times |y_2 - y_1|$ ഉം ആണ്.</p>`,
    intuition_en: `<p>When moving purely horizontally, only $x$ changes, so distance is simple 1D subtraction on the $x$ number line. When moving purely vertically, only $y$ changes.</p>`,
    intuition_ml: `<p>തിരശ്ചീനമായി മാത്രം നീങ്ങുമ്പോൾ $x$ മാത്രമാണ് മാറുന്നത്, അതിനാൽ $x$-കളുടെ വ്യത്യാസം അകലം തരുന്നു. ലംബമായി നീങ്ങുമ്പോൾ $y$-കളുടെ വ്യത്യാസമാണ് അകലം.</p>`,
    proof: {
      idea_en: 'Translation to 1D number line distance.',
      idea_ml: 'ഒരു സംഖ്യാരേഖയിലെ അകല നിയമം സമാന്തര വരകളിൽ പ്രയോഗിക്കുന്നു.',
      why_en: 'Lines parallel to an axis are isometric to the real number line.',
      why_ml: 'അക്ഷങ്ങൾക്ക് സമാന്തരമായ വരകളിലെ അകലം സംഖ്യാരേഖയിലെ അകലത്തിന് തുല്യമാണ്.',
      rungs_en: [
        { why_en: 'On the real line, distance between coordinates a and b is |b - a|.', m: 'd = |b - a|' },
        { why_en: 'Segment joining (x1, y) and (x2, y) projects identically to x-axis.', m: 'AB = |x_2 - x_1|' },
        { why_en: 'Segment joining (x, y1) and (x, y2) projects identically to y-axis.', m: 'CD = |y_2 - y_1|' }
      ],
      rungs_ml: [
        { why_ml: 'സംഖ്യാരേഖയിൽ $a, b$ എന്നിവ തമ്മിലുള്ള അകലം $|b - a|$ ആണ്.', m: 'd = |b - a|' },
        { why_ml: '$(x_1, y), (x_2, y)$ തമ്മിലുള്ള രേഖാഖണ്ഡത്തിന്റെ നീളം $x$-അക്ഷത്തിലെ രേഖാഖണ്ഡത്തിന് തുല്യമാണ്.', m: 'AB = |x_2 - x_1|' },
        { why_ml: '$(x, y_1), (x, y_2)$ തമ്മിലുള്ള രേഖാഖണ്ഡത്തിന്റെ നീളം $y$-അക്ഷത്തിലെ രേഖാഖണ്ഡത്തിന് തുല്യമാണ്.', m: 'CD = |y_2 - y_1|' }
      ]
    },
    needs: ['m10.6.1.coordinate-axes-and-points'],
    traps_en: [
      'Forgetting the absolute value when subtracting coordinates, resulting in negative distance.',
      'Attempting to form a rectangle when x1 = x2 or y1 = y2; the two points lie on a line parallel to an axis, not as opposite diagonal vertices.'
    ],
    traps_ml: [
      'കുറയ്ക്കുമ്പോൾ ചിഹ്നം ശ്രദ്ധിക്കാതെ അകലം നെഗറ്റീവ് ആയി എഴുതുന്നത്; അകലം എപ്പോഴും പോസിറ്റീവ് ആണ്.',
      '$x_1 = x_2$ അല്ലെങ്കിൽ $y_1 = y_2$ ആകുമ്പോൾ ചതുരം നിർമ്മിക്കാൻ ശ്രമിക്കുന്നത്; അപ്പോൾ വര അക്ഷത്തിന് സമാന്തരമായിരിക്കും, വികർണ്ണമാകില്ല.'
    ],
    cards_en: [
      { q: 'What is the formula for distance between points (x1, y) and (x2, y) on a horizontal line?', a: 'Distance $= |x_2 - x_1|$.', kind: 'recall' },
      { q: 'Find the distance between the points (-3, 5) and (7, 5).', a: 'Since $y$-coordinates are both 5: Distance $= |7 - (-3)| = 7 + 3 = \\mathbf{10}$ units.', kind: 'apply' },
      { q: 'If opposite vertices of a rectangle are (2, 3) and (8, 7), find the other two vertices.', a: 'The other two vertices are **$(8, 3)$** and **$(2, 7)$**.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'തിരശ്ചീന വരയിലെ $(x_1, y), (x_2, y)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണുന്നതിനുള്ള സൂത്രവാക്യം എന്താണ്?', a: 'അകലം $= |x_2 - x_1|$.', kind: 'recall' },
      { q: '$(-3, 5), (7, 5)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണുക.', a: '$y$-സൂചകസംഖ്യകൾ തുല്യമായതിനാൽ അകലം $= |7 - (-3)| = 7 + 3 = \\mathbf{10}$ യൂണിറ്റ്.', kind: 'apply' },
      { q: 'ഒരു ചതുരത്തിന്റെ എതിർ ശീർഷങ്ങൾ $(2, 3), (8, 7)$ ആയാൽ മറ്റ് രണ്ട് ശീർഷങ്ങൾ ഏവ?', a: 'മറ്റ് രണ്ട് ശീർഷങ്ങൾ **$(8, 3)$** ഉം **$(2, 7)$** ഉം ആണ്.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.3 Distance Formula in the Coordinate Plane (അകലം കാണാനുള്ള സൂത്രവാക്യം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.6.3.distance-formula-in-plane',
    sec: '10.6.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Distance Formula in the Coordinate Plane',
    title_ml: 'ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണാനുള്ള സൂത്രവാക്യം',
    oneLine_en: 'The distance between any two points (x1, y1) and (x2, y2) in the plane is d = √((x2 - x1)² + (y2 - y1)²).',
    oneLine_ml: 'പ്രതലത്തിലെ ഏതൊരു രണ്ട് ബിന്ദുക്കൾ $(x_1, y_1), (x_2, y_2)$ തമ്മിലുള്ള അകലം $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ ആണ്.',
    statement_en: `<p><b>The Distance Formula:</b></p>
      <p>For any two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ in the coordinate plane, the distance $d(P, Q)$ is:</p>
      $$\\mathbf{d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$
      <p><b>Distance from the Origin:</b></p>
      <p>The distance of any point $P(x, y)$ from the origin $O(0, 0)$ is:</p>
      $$\\mathbf{OP = \\sqrt{x^2 + y^2}}$$
      <p><b>Properties:</b></p>
      <ul>
        <li>$d(P, Q) \\ge 0$ with equality if and only if $P = Q$.</li>
        <li>Symmetry: $d(P, Q) = d(Q, P)$ because $(x_1 - x_2)^2 = (x_2 - x_1)^2$.</li>
      </ul>`,
    statement_ml: `<p><b>അകലം കാണാനുള്ള സൂത്രവാക്യം:</b></p>
      <p>നിർദ്ദേശാങ്ക തലത്തിലെ ഏതൊരു രണ്ട് ബിന്ദുക്കൾ $P(x_1, y_1), Q(x_2, y_2)$ തമ്മിലുള്ള അകലം:</p>
      $$\\mathbf{d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$
      <p><b>ആധാരബിന്ദുവിൽ നിന്നുള്ള അകലം:</b></p>
      <p>ഏതൊരു ബിന്ദു $P(x, y)$ ന്റെയും ആധാരബിന്ദുവായ $O(0, 0)$ ൽ നിന്നുള്ള അകലം:</p>
      $$\\mathbf{OP = \\sqrt{x^2 + y^2}}$$
      <p><b>സവിശേഷതകൾ:</b></p>
      <ul>
        <li>അകലം എപ്പോഴും പൂജ്യത്തിന് തുല്യമോ കൂടുതലോ ആയിരിക്കും ($d \\ge 0$).</li>
        <li>$(x_2 - x_1)^2 = (x_1 - x_2)^2$ ആയതിനാൽ ക്രമം മാറ്റിയാലും അകലത്തിന് മാറ്റമില്ല ($d(P, Q) = d(Q, P)$).</li>
      </ul>`,
    intuition_en: `<p>The distance formula is simply the Pythagorean theorem in disguise: the horizontal difference $\\Delta x$ and vertical difference $\\Delta y$ form the two legs of a right triangle, and the straight-line distance $d$ is the hypotenuse.</p>`,
    intuition_ml: `<p>അകലം കാണാനുള്ള സൂത്രവാക്യം യഥാർത്ഥത്തിൽ പൈതഗോറസ് സിദ്ധാന്തം തന്നെയാണ്: തിരശ്ചീന വ്യത്യാസം $\\Delta x$ ഉം ലംബ വ്യത്യാസം $\\Delta y$ ഉം ഒരു മട്ടത്രികോണത്തിന്റെ ലംബവശങ്ങളും അവയെ ബന്ധിപ്പിക്കുന്ന അകലം $d$ കർണ്ണവുമാണ്.</p>`,
    proof: {
      idea_en: 'Construct a right-angled triangle using horizontal and vertical auxiliary lines through the two points.',
      idea_ml: 'ബിന്ദുക്കളിലൂടെ തിരശ്ചീനവും ലംബവുമായ വരകൾ വരച്ച് മട്ടത്രികോണം നിർമ്മിച്ച് പൈതഗോറസ് സിദ്ധാന്തം പ്രയോഗിക്കുന്നു.',
      why_en: 'Horizontal and vertical lines meet at 90°, so hypotenuse squared equals sum of squares of legs.',
      why_ml: 'തിരശ്ചീന-ലംബ വരകൾ പരസ്പരം 90° യിൽ സംഗമിക്കുന്നതിനാൽ കർണ്ണത്തിന്റെ വർഗ്ഗം ലംബവശങ്ങളുടെ വർഗ്ഗങ്ങളുടെ തുകയ്ക്ക് തുല്യമാണ്.',
      rungs_en: [
        { why_en: 'Draw horizontal line through P(x1, y1) and vertical line through Q(x2, y2) meeting at R(x2, y1).', m: '\\angle PRQ = 90^\\circ' },
        { why_en: 'Length of horizontal leg PR.', m: 'PR = |x_2 - x_1|' },
        { why_en: 'Length of vertical leg QR.', m: 'QR = |y_2 - y_1|' },
        { why_en: 'Apply Pythagoras theorem in right triangle PRQ.', m: 'PQ^2 = PR^2 + QR^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2' },
        { why_en: 'Take square root to find distance PQ.', m: 'PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' }
      ],
      rungs_ml: [
        { why_ml: '$P(x_1, y_1)$ ലൂടെ തിരശ്ചീന വരയും $Q(x_2, y_2)$ ലൂടെ ലംബ വരയും വരച്ചാൽ അവ $R(x_2, y_1)$ ൽ ലംബമായി സംഗമിക്കുന്നു.', m: '\\angle PRQ = 90^\\circ' },
        { why_ml: 'തിരശ്ചീന വശം $PR$ ന്റെ നീളം.', m: 'PR = |x_2 - x_1|' },
        { why_ml: 'ലംബ വശം $QR$ ന്റെ നീളം.', m: 'QR = |y_2 - y_1|' },
        { why_ml: 'മട്ടത്രികോണം $PRQ$ ൽ പൈതഗോറസ് സിദ്ധാന്തം പ്രയോഗിക്കുന്നു.', m: 'PQ^2 = PR^2 + QR^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2' },
        { why_ml: 'വർഗ്ഗമൂലം കാണുമ്പോൾ അകലം $PQ$ ലഭിക്കുന്നു.', m: 'PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' }
      ]
    },
    needs: ['m10.6.2.distance-on-parallel-lines'],
    traps_en: [
      'Mismixing coordinates: e.g. calculating (x2 - y1)² instead of (x2 - x1)². Always subtract x from x, and y from y.',
      'Square root fallacy: incorrectly claiming √(a² + b²) = a + b. For example, √(3² + 4²) = √25 = 5, NOT 3 + 4 = 7.'
    ],
    traps_ml: [
      '$x$-ൽ നിന്ന് $y$ കുറയ്ക്കുന്നത് പോലുള്ള തെറ്റുകൾ; $x$-ൽ നിന്ന് $x$-ഉം $y$-ൽ നിന്ന് $y$-ഉം തന്നെ കുറയ്ക്കണം.',
      'വർഗ്ഗമൂലം വേർതിരിച്ചെടുക്കുന്ന തെറ്റ്: $\\sqrt{a^2 + b^2} = a + b$ എന്ന് തെറ്റായി എഴുതുന്നത്. ഉദാഹരണത്തിന് $\\sqrt{3^2 + 4^2} = 5$ ആണ്, $3 + 4 = 7$ അല്ല.'
    ],
    cards_en: [
      { q: 'State the distance formula between points (x1, y1) and (x2, y2).', a: '$\\mathbf{d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$', kind: 'recall' },
      { q: 'Find the distance between the points (1, 2) and (4, 6).', a: '$d = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = \\mathbf{5}$ units.', kind: 'apply' },
      { q: 'What is the distance of the point (-6, 8) from the origin (0, 0)?', a: '$d = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = \\mathbf{10}$ units.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '$(x_1, y_1), (x_2, y_2)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണാനുള്ള സൂത്രവാക്യം എഴുതുക.', a: '$\\mathbf{d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$', kind: 'recall' },
      { q: '$(1, 2), (4, 6)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണുക.', a: '$d = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = \\mathbf{5}$ യൂണിറ്റ്.', kind: 'apply' },
      { q: '$(-6, 8)$ എന്ന ബിന്ദുവിന് ആധാരബിന്ദുവായ $(0, 0)$ ൽ നിന്നുള്ള അകലം എത്ര?', a: '$d = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = \\mathbf{10}$ യൂണിറ്റ്.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.4 Geometric Applications of Coordinates (സൂചകസംഖ്യകളുടെ ജ്യാമിതീയ പ്രയോഗങ്ങൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Geometric Applications of Coordinates',
    title_ml: 'സൂചകസംഖ്യകളുടെ ജ്യാമിതീയ പ്രയോഗങ്ങൾ',
    oneLine_en: 'Coordinate distance verifies geometric classifications: triangles (equilateral, isosceles, right), collinearity, quadrilaterals, and positions of points relative to circles.',
    oneLine_ml: 'ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം ഉപയോഗിച്ച് ത്രികോണങ്ങളുടെ തരങ്ങൾ, ബിന്ദുക്കളുടെ ഏകീയത, ചതുർഭുജങ്ങൾ, വൃത്തവുമായുള്ള ബിന്ദുവിന്റെ സ്ഥാനം എന്നിവ നിർണ്ണയിക്കാം.',
    statement_en: `<p><b>Applications of the Distance Formula:</b></p>
      <ul>
        <li><b>Testing Triangles:</b>
          <ul>
            <li><b>Equilateral:</b> All three side lengths are equal ($AB = BC = CA$).</li>
            <li><b>Isosceles:</b> Two side lengths are equal ($AB = AC$).</li>
            <li><b>Right-Angled:</b> The square of the longest side equals the sum of squares of the other two ($a^2 + b^2 = c^2$).</li>
          </ul>
        </li>
        <li><b>Collinear Points:</b> Three points $A, B, C$ lie on the same straight line if and only if the sum of the two smaller distances equals the largest distance ($AB + BC = AC$).</li>
        <li><b>Testing Quadrilaterals:</b>
          <ul>
            <li><b>Parallelogram:</b> Opposite sides are equal ($AB = CD$ and $BC = DA$).</li>
            <li><b>Rectangle:</b> Opposite sides are equal AND diagonals are equal ($AC = BD$).</li>
            <li><b>Rhombus:</b> All four sides are equal ($AB = BC = CD = DA$).</li>
            <li><b>Square:</b> All four sides are equal AND diagonals are equal.</li>
          </ul>
        </li>
        <li><b>Circle Positions:</b> For a circle with centre $C(h, k)$ and radius $r$, the position of point $P(x, y)$ is given by $d = CP$:
          $$\\begin{cases} d < r & \\text{Point is INSIDE the circle} \\\\ d = r & \\text{Point is ON the circle} \\\\ d > r & \\text{Point is OUTSIDE the circle} \\end{cases}$$
        </li>
      </ul>`,
    statement_ml: `<p><b>അകല സൂത്രവാക്യത്തിന്റെ ജ്യാമിതീയ പ്രയോഗങ്ങൾ:</b></p>
      <ul>
        <li><b>ത്രികോണങ്ങളുടെ സ്വഭാവം നിർണ്ണയിക്കൽ:</b>
          <ul>
            <li><b>സമഭുജ ത്രികോണം:</b> മൂന്ന് വശങ്ങളും തുല്യം ($AB = BC = CA$).</li>
            <li><b>സമപാർശ്വ ത്രികോണം:</b> രണ്ട് വശങ്ങൾ തുല്യം ($AB = AC$).</li>
            <li><b>മട്ടത്രികോണം:</b> രണ്ട് ചെറിയ വശങ്ങളുടെ വർഗ്ഗങ്ങളുടെ തുക വലിയ വശത്തിന്റെ വർഗ്ഗത്തിന് തുല്യം ($a^2 + b^2 = c^2$).</li>
          </ul>
        </li>
        <li><b>ഏകരേഖീയ ബിന്ദുക്കൾ:</b> $A, B, C$ എന്നീ മൂന്ന് ബിന്ദുക്കൾ ഒരേ നേർവരയിലാകണമെങ്കിൽ രണ്ട് ചെറിയ അകലങ്ങളുടെ തുക ഏറ്റവും വലിയ അകലത്തിന് തുല്യമായിരിക്കണം ($AB + BC = AC$).</li>
        <li><b>ചതുർഭുജങ്ങളുടെ തരംതിരിക്കൽ:</b>
          <ul>
            <li><b>സാമാന്തരികം:</b> എതിർവശങ്ങൾ തുല്യം ($AB = CD, BC = DA$).</li>
            <li><b>ചതുരം:</b> എതിർവശങ്ങൾ തുല്യവും വികർണ്ണങ്ങൾ തുല്യവുമാണ് ($AC = BD$).</li>
            <li><b>റോംബസ്:</b> നാല് വശങ്ങളും തുല്യം.</li>
            <li><b>സമചതുരം:</b> നാല് വശങ്ങളും തുല്യവും വികർണ്ണങ്ങൾ തുല്യവുമാണ്.</li>
          </ul>
        </li>
        <li><b>വൃത്തവുമായുള്ള ബിന്ദുവിന്റെ സ്ഥാനം:</b> കേന്ദ്രം $C$, ആരം $r$ ആയ വൃത്തത്തിൽ $CP = d$ ആയാൽ:
          $$\\begin{cases} d < r & \\text{ബിന്ദു വൃത്തത്തിന് അകത്ത്} \\\\ d = r & \\text{ബിന്ദു വൃത്തത്തിന് മേൽ} \\\\ d > r & \\text{ബിന്ദു വൃത്തത്തിന് പുറത്ത്} \\end{cases}$$
        </li>
      </ul>`,
    intuition_en: `<p>Any geometric proof or shape verification can be tested rigorously by computing coordinate distances of sides and diagonals.</p>`,
    intuition_ml: `<p>ഏതൊരു ജ്യാമിതീയ രൂപത്തിന്റെയും സവിശേഷതകൾ അവയുടെ ശീർഷങ്ങളുടെ സൂചകസംഖ്യകൾ കണ്ടെത്തി അകലങ്ങൾ കണക്കാക്കി കൃത്യമായി പരിശോധിക്കാം.</p>`,
    proof: {
      idea_en: 'Distances between vertices uniquely characterize Euclidean polygons and circles.',
      idea_ml: 'ശീർഷങ്ങൾ തമ്മിലുള്ള അകലങ്ങൾ ജ്യാമിതീയ രൂപങ്ങളെയും വൃത്തങ്ങളെയും സംശയമില്ലാതെ സ്ഥിരീകരിക്കുന്നു.',
      why_en: 'Metric side lengths and diagonal relations completely specify the Euclidean geometry of polygons.',
      why_ml: 'വശങ്ങളുടെയും വികർണ്ണങ്ങളുടെയും നീളം ജ്യാമിതീയ രൂപങ്ങളുടെ വർഗ്ഗീകരണം നിർണ്ണയിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Compute all side lengths AB, BC, CD, DA using distance formula.', m: 'd(P, Q) = \\sqrt{\\Delta x^2 + \\Delta y^2}' },
        { why_en: 'Compute diagonal lengths AC and BD.', m: 'AC, BD' },
        { why_en: 'Verify polygon conditions: equal opposite sides and equal diagonals prove rectangle.', m: 'AB = CD, BC = DA, AC = BD \\implies \\text{Rectangle}' },
        { why_en: 'Check circle radius condition: d(C, P) compared with r.', m: 'CP^2 = (x - h)^2 + (y - k)^2' }
      ],
      rungs_ml: [
        { why_ml: 'അകല സൂത്രവാക്യം ഉപയോഗിച്ച് എല്ലാ വശങ്ങളുടെയും നീളം കണക്കാക്കുന്നു.', m: 'd(P, Q) = \\sqrt{\\Delta x^2 + \\Delta y^2}' },
        { why_ml: 'വികർണ്ണങ്ങളായ $AC, BD$ എന്നിവയുടെ നീളം കാണുന്നു.', m: 'AC, BD' },
        { why_ml: 'എതിർവശങ്ങളും വികർണ്ണങ്ങളും തുല്യമാണെങ്കിൽ അത് ചതുരമായിരിക്കും.', m: 'AB = CD, BC = DA, AC = BD \\implies \\text{ചതുരം}' },
        { why_ml: 'കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം ആരവുമായി താരതമ്യം ചെയ്ത് ബിന്ദുവിന്റെ സ്ഥാനം നിർണ്ണയിക്കുന്നു.', m: 'CP^2 = (x - h)^2 + (y - k)^2' }
      ]
    },
    needs: ['m10.6.3.distance-formula-in-plane'],
    traps_en: [
      'Assuming equal opposite sides alone makes a figure a rectangle. Equal opposite sides only proves a parallelogram; you must check diagonals too.',
      'Assuming three points form a triangle without checking collinearity: if AB + BC = AC, the points form a straight line, not a triangle.'
    ],
    traps_ml: [
      'എതിർവശങ്ങൾ തുല്യമാണെന്ന് കണ്ടയുടൻ അത് ചതുരമാണെന്ന് പറയുന്നത്; വികർണ്ണങ്ങൾ കൂടി തുല്യമാണെന്ന് പരിശോധിച്ചാലേ ചതുരമാകൂ.',
      'മൂന്ന് ബിന്ദുക്കൾ ത്രികോണമാണെന്ന് കരുതി കണക്കുകൂട്ടുന്നത്; $AB + BC = AC$ ആയാൽ ബിന്ദുക്കൾ ഒരേ നേർവരയിലായിരിക്കും (ഏകരേഖീയം).'
    ],
    cards_en: [
      { q: 'How do you prove that four points form a rectangle rather than just a parallelogram?', a: 'Prove that opposite sides are equal **AND** both diagonals are equal ($AC = BD$).', kind: 'recall' },
      { q: 'The vertices of a triangle are A(0, 0), B(4, 0), and C(0, 3). What type of triangle is it?', a: '$AB = 4, AC = 3, BC = \\sqrt{4^2 + 3^2} = 5$. Since $3^2 + 4^2 = 5^2$, it is a **right-angled triangle**.', kind: 'apply' },
      { q: 'A circle has centre at (0, 0) and radius 5. Is the point (4, 4) inside, on, or outside the circle?', a: 'Distance squared $= 4^2 + 4^2 = 32 > 5^2 = 25$. Since distance $> 5$, the point is **outside** the circle.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'നാല് ബിന്ദുക്കൾ സാമാന്തരികമല്ല, മറിച്ച് ചതുരമാണെന്ന് എങ്ങനെ തെളിയിക്കാം?', a: 'എതിർവശങ്ങൾ തുല്യമാണെന്നും അതോടൊപ്പം **വികർണ്ണങ്ങൾ തുല്യമാണെന്നും** ($AC = BD$) തെളിയിക്കണം.', kind: 'recall' },
      { q: 'ഒരു ത്രികോണത്തിന്റെ ശീർഷങ്ങൾ $A(0, 0), B(4, 0), C(0, 3)$ ആണ്. ഇത് ഏത് തരം ത്രികോണമാണ്?', a: '$AB = 4, AC = 3, BC = 5$. $3^2 + 4^2 = 5^2$ ആയതിനാൽ ഇത് **മട്ടത്രികോണമാണ്**.', kind: 'apply' },
      { q: 'ആധാരബിന്ദു കേന്ദ്രവും ആരം 5 ഉം ആയ വൃത്തത്തിൽ $(4, 4)$ എന്ന ബിന്ദു അകത്തോ, പുറത്തോ, വൃത്തത്തിലോ?', a: 'അകലത്തിന്റെ വർഗ്ഗം $= 4^2 + 4^2 = 32 > 25$. അകലം ആരത്തേക്കാൾ കൂടുതലായതിനാൽ ബിന്ദു **വൃത്തത്തിന് പുറത്താണ്**.', kind: 'trap' }
    ]
  }
);
