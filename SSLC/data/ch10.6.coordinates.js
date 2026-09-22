/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 6: Coordinates (സൂചകസംഖ്യകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.6.1.coordinate-axes-and-points',
    sec: '10.6.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Coordinate Axes & Point Coordinates',
    title_ml: 'നിർദ്ദേശാങ്ക അക്ഷങ്ങളും ബിന്ദുക്കളും',
    oneLine_en: 'A point in a plane is specified by an ordered pair $(x, y)$, representing signed perpendicular distances from the vertical y-axis and horizontal x-axis.',
    oneLine_ml: 'ഒരു പ്രതലത്തിലെ ബിന്ദുവിന്റെ സ്ഥാനം നിർണ്ണയിക്കുന്നത് x-അക്ഷത്തിൽ നിന്നും y-അക്ഷത്തിൽ നിന്നുമുള്ള ലംബദൂരങ്ങളെ സൂചിപ്പിക്കുന്ന (x, y) എന്ന സംഖ്യാജോഡിയിലൂടെയാണ്.',
    statement_en: `<p><b>The Cartesian Coordinate System:</b></p>
      <ul>
        <li><b>Axes:</b> Two mutually perpendicular number lines intersecting at the origin $O(0, 0)$. The horizontal line is the <b>$x$-axis</b>, and the vertical line is the <b>$y$-axis</b>.</li>
        <li><b>Coordinates $(x, y)$:</b>
          <ul>
            <li>$x$-coordinate (abscissa): Signed distance along the horizontal direction from the $y$-axis.</li>
            <li>$y$-coordinate (ordinate): Signed distance along the vertical direction from the $x$-axis.</li>
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
    intuition_en: 'Coordinates turn geometry into algebra by giving every point a precise street address on a 2D grid, allowing geometric shapes to be manipulated with arithmetic.',
    intuition_ml: 'നിർദ്ദേശാങ്കങ്ങൾ എന്നത് ഒരു പ്രതലത്തിലെ ഓരോ ബിന്ദുവിനും നൽകുന്ന മേൽവിലാസമാണ്. ഇത് ജ്യാമിതീയ രൂപങ്ങളെ സംഖ്യകളും ബീജഗണിതവുമാക്കി മാറ്റാൻ നമ്മെ സഹായിക്കുന്നു.',
    proof: {
      idea_en: 'Orthogonal projection of points onto perpendicular number lines.',
      idea_ml: 'പരസ്പരം ലംബമായ സംഖ്യാരേഖകളിലേക്കുള്ള ലംബ പ്രൊജക്ഷൻ വഴി സ്ഥാനം നിർണ്ണയിക്കുന്നു.',
      why_en: 'Because perpendicular projection from any point P gives a unique pair of real numbers (x, y) on the orthogonal axes.',
      why_ml: 'ഏതൊരു ബിന്ദുവിൽ നിന്നും അക്ഷങ്ങളിലേക്ക് വരയ്ക്കുന്ന ലംബങ്ങൾ സംഖ്യാരേഖയിലെ കൃത്യമായ ഒരൊറ്റ ജോഡി സംഖ്യകളെ കാണിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Uniqueness of Projection',
          title_ml: 'പ്രൊജക്ഷന്റെ ഏകത്വം',
          detail_en: 'Through any point $P$, there is exactly one line perpendicular to the $x$-axis (meeting at $x$) and one line perpendicular to the $y$-axis (meeting at $y$).',
          detail_ml: '$P$ എന്ന ബിന്ദുവിൽ നിന്ന് $x$-അക്ഷത്തിലേക്കും $y$-അക്ഷത്തിലേക്കും വരയ്ക്കാവുന്ന ലംബങ്ങൾ അക്ഷങ്ങളെ യഥാക്രമം $x, y$ എന്നീ ഒറ്റ ബിന്ദുക്കളിൽ സ്പർശിക്കുന്നു.'
        },
        {
          title_en: 'Bijective Mapping',
          title_ml: 'ദ്വിമുഖ ബന്ധം',
          detail_en: 'Every point $P$ corresponds to a unique ordered pair $(x, y) \\in \\mathbb{R}^2$, and every pair $(x, y)$ corresponds to a unique point in the plane.',
          detail_ml: 'പ്രതലത്തിലെ ഓരോ ബിന്ദുവിനും $(x, y)$ എന്ന കൃത്യമായ ഒരു ജോഡി സംഖ്യയും, ഓരോ ജോഡിക്കും ഒരു ബിന്ദുവും ഉണ്ടായിരിക്കും.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Reversing the order of coordinates: writing (y, x) instead of (x, y).',
        fix_en: 'Horizontal displacement x ALWAYS comes first, followed by vertical displacement y: (x, y).'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'സൂചകസംഖ്യകളുടെ ക്രമം തെറ്റിച്ച് (y, x) എന്ന് എഴുതുന്നത്.',
        fix_ml: 'തിരശ്ചീന അളവായ x ആദ്യം വരണം, ലംബ അളവായ y രണ്ടാമത് വരണം: (x, y).'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'What are the coordinates of the origin, and on which axis does the point (0, -7) lie?',
        a: 'Origin is (0, 0). The point (0, -7) lies on the y-axis (since x = 0).'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ആധാരബിന്ദുവിന്റെ സൂചകസംഖ്യകൾ ഏവ? (0, -7) എന്ന ബിന്ദു ഏത് അക്ഷത്തിലാണ് സ്ഥിതിചെയ്യുന്നത്?',
        a: 'ആധാരബിന്ദു (0, 0) ആണ്. x = 0 ആയതിനാൽ (0, -7) y-അക്ഷത്തിലാണ് സ്ഥിതിചെയ്യുന്നത്.'
      }
    ]
  },
  {
    id: 'm10.6.2.distance-on-parallel-lines',
    sec: '10.6.2',
    kind: 'concept',
    tier: 'core',
    title_en: 'Distance on Parallel Lines',
    title_ml: 'സമാന്തരവരകളിലെ അകലം',
    oneLine_en: 'Distance between two points on a horizontal line is the absolute difference of their x-coordinates: |x2 - x1|; on a vertical line, it is |y2 - y1|.',
    oneLine_ml: 'x-അക്ഷത്തിന് സമാന്തരമായ വരയിലെ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം |x2 - x1| ഉം, y-അക്ഷത്തിന് സമാന്തരമായ വരയിൽ |y2 - y1| ഉം ആണ്.',
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
      <p>If opposite vertices of a rectangle with sides parallel to axes are $(x_1, y_1)$ and $(x_2, y_2)$, the four vertices are $(x_1, y_1), (x_2, y_1), (x_2, y_2), (x_1, y_2)$.</p>
      <p>The side lengths are $|x_2 - x_1|$ and $|y_2 - y_1|$.</p>`,
    statement_ml: `<p><b>അക്ഷങ്ങൾക്ക് സമാന്തരമായ വരകളിലെ അകലം:</b></p>
      <ul>
        <li><b>തിരശ്ചീന വര ($x$-അക്ഷത്തിന് സമാന്തരം):</b>
          <p>ഒരേ $y$-സൂചകസംഖ്യയുള്ള $A(x_1, y), B(x_2, y)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം:</p>
          $$\\mathbf{AB = |x_2 - x_1|}$$
        </li>
        <li><b>ലംബ വര ($y$-അക്ഷത്തിന് സമാന്തരം):</b>
          <p>ഒരേ $x$-സൂചകസംഖ്യയുള്ള $C(x, y_1), D(x, y_2)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം:</p>
          $$\\mathbf{CD = |y_2 - y_1|}$$
        </li>
      </ul>
      <p><b>അക്ഷങ്ങൾക്ക് സമാന്തരമായ വശങ്ങളുള്ള ചതുരം:</b></p>
      <p>എതിർ ശീർഷങ്ങൾ $(x_1, y_1), (x_2, y_2)$ ആയാൽ മറ്റ് രണ്ട് ശീർഷങ്ങൾ $(x_2, y_1), (x_1, y_2)$ ആയിരിക്കും. വശങ്ങളുടെ നീളങ്ങൾ $|x_2 - x_1|$ ഉം $|y_2 - y_1|$ ഉം ആണ്.</p>`,
    intuition_en: 'When moving purely horizontally, only x changes, so distance is simple 1D subtraction on the x number line. When moving purely vertically, only y changes.',
    intuition_ml: 'തിരശ്ചീനമായി മാത്രം നീങ്ങുമ്പോൾ x മാത്രമാണ് മാറുന്നത്, അതിനാൽ x-കളുടെ വ്യത്യാസം അകലം തരുന്നു. ലംബമായി നീങ്ങുമ്പോൾ y-കളുടെ വ്യത്യാസമാണ് അകലം.',
    proof: {
      idea_en: 'Translation to 1D number line measure.',
      idea_ml: 'ഒരു സംഖ്യാരേഖയിലെ അകല നിയമം പ്രയോഗിച്ച് തെളിയിക്കുന്നു.',
      why_en: 'Lines parallel to an axis are isometric to the real line R.',
      why_ml: 'അക്ഷങ്ങൾക്ക് സമാന്തരമായ വരകൾ സംഖ്യാരേഖയ്ക്ക് തത്തുല്യമാണ്.',
      rungs: [
        {
          title_en: '1D Number Line Distance',
          title_ml: 'സംഖ്യാരേഖയിലെ അകലം',
          detail_en: 'On the real line, distance between coordinates $a$ and $b$ is $|b - a|$.',
          detail_ml: 'സംഖ്യാരേഖയിൽ $a, b$ എന്നിവ തമ്മിലുള്ള അകലം $|b - a|$ ആണ്.'
        },
        {
          title_en: 'Parallel Line Congruence',
          title_ml: 'സമാന്തര വരയിലെ തുല്യത',
          detail_en: 'The segment between $(x_1, y)$ and $(x_2, y)$ is parallel and equal to the segment between $(x_1, 0)$ and $(x_2, 0)$ on the $x$-axis.',
          detail_ml: '$(x_1, y), (x_2, y)$ തമ്മിലുള്ള രേഖാഖണ്ഡം $x$-അക്ഷത്തിലെ $(x_1, 0), (x_2, 0)$ എന്നിവയ്ക്ക് തുല്യവും സമാന്തരവുമാണ്.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Forgetting absolute value when subtracting coordinates, getting a negative distance.',
        fix_en: 'Distance is always positive or zero. Always take the absolute value |x2 - x1|.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'കുറയ്ക്കുമ്പോൾ ചിഹ്നം ശ്രദ്ധിക്കാതെ അകലം നെഗറ്റീവ് ആയി എഴുതുന്നത്.',
        fix_ml: 'അകലം എപ്പോഴും പോസിറ്റീവ് ആയിരിക്കും. അതിനാൽ വലിയ സംഖ്യയിൽ നിന്ന് ചെറിയ സംഖ്യ കുറയ്ക്കുക.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the distance between the points (-3, 5) and (7, 5).',
        a: 'Since y-coordinates are both 5, distance = |7 - (-3)| = |7 + 3| = 10 units.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '(-3, 5), (7, 5) എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണുക.',
        a: 'y-സൂചകസംഖ്യകൾ തുല്യമായതിനാൽ അകലം = |7 - (-3)| = 7 + 3 = 10 യൂണിറ്റ്.'
      }
    ]
  },
  {
    id: 'm10.6.3.distance-formula-in-plane',
    sec: '10.6.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Distance Formula in the Coordinate Plane',
    title_ml: 'ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണാനുള്ള സൂത്രവാക്യം',
    oneLine_en: 'The distance between any two points (x1, y1) and (x2, y2) in the plane is d = √((x2 - x1)² + (y2 - y1)²).',
    oneLine_ml: 'പ്രതലത്തിലെ ഏതൊരു രണ്ട് ബിന്ദുക്കൾ (x1, y1), (x2, y2) തമ്മിലുള്ള അകലം d = √((x2 - x1)² + (y2 - y1)²) ആണ്.',
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
        <li>$(x_2 - x_1)^2 = (x_1 - x_2)^2$ ആയതിനാൽ ക്രമം മാറ്റിയാലും അകലത്തിന് മാറ്റമില്ല.</li>
      </ul>`,
    intuition_en: 'The distance formula is simply the Pythagorean theorem in disguise: the horizontal difference Δx and vertical difference Δy form the two legs of a right triangle, and the straight-line distance d is the hypotenuse.',
    intuition_ml: 'അകലം കാണാനുള്ള സൂത്രവാക്യം യഥാർത്ഥത്തിൽ പൈതഗോറസ് സിദ്ധാന്തം തന്നെയാണ്: തിരശ്ചീന വ്യത്യാസം Δx ഉം ലംബ വ്യത്യാസം Δy ഉം ഒരു മട്ടത്രികോണത്തിന്റെ ലംബവശങ്ങളും അവയെ ബന്ധിപ്പിക്കുന്ന അകലം d കർണ്ണവുമാണ്.',
    proof: {
      idea_en: 'Construct a right-angled triangle using horizontal and vertical auxiliary lines.',
      idea_ml: 'തിരശ്ചീനവും ലംബവുമായ വരകൾ ഉപയോഗിച്ച് ഒരു മട്ടത്രികോണം നിർമ്മിച്ച് തെളിയിക്കുന്നു.',
      why_en: 'The horizontal and vertical lines meet at 90°, allowing immediate application of Pythagoras.',
      why_ml: 'തിരശ്ചീന-ലംബ വരകൾ പരസ്പരം 90° യിൽ സംഗമിക്കുന്നതിനാൽ പൈതഗോറസ് സിദ്ധാന്തം പ്രയോഗിക്കാം.',
      rungs: [
        {
          title_en: 'Auxiliary Right Triangle',
          title_ml: 'സഹായ മട്ടത്രികോണം',
          detail_en: 'Draw a horizontal line through $P(x_1, y_1)$ and a vertical line through $Q(x_2, y_2)$. They meet at $R(x_2, y_1)$. The triangle $\\triangle PQR$ is right-angled at $R$.',
          detail_ml: '$P(x_1, y_1)$ ലൂടെ തിരശ്ചീന വരയും $Q(x_2, y_2)$ ലൂടെ ലംബ വരയും വരച്ചാൽ അവ $R(x_2, y_1)$ ൽ ലംബമായി സംഗമിക്കുന്നു.'
        },
        {
          title_en: 'Side Lengths by Coordinates',
          title_ml: 'വശങ്ങളുടെ നീളം',
          detail_en: 'Leg $PR = |x_2 - x_1|$ and leg $QR = |y_2 - y_1|$.',
          detail_ml: 'ലംബവശങ്ങൾ $PR = |x_2 - x_1|, QR = |y_2 - y_1|$.'
        },
        {
          title_en: 'Pythagorean Conclusion',
          title_ml: 'പൈതഗോറസ് പ്രയോഗം',
          detail_en: '$PQ^2 = PR^2 + QR^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$. Taking the positive square root gives $PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
          detail_ml: '$PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 \\implies PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Mismixing x and y differences: e.g., computing (x2 - y1)².',
        fix_en: 'Always pair like coordinates: subtract x from x, and y from y.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'x ഉം y ഉം തമ്മിൽ മാറിപ്പോയി (x2 - y1)² എന്ന് ചെയ്യുന്നത്.',
        fix_ml: 'x ൽ നിന്ന് x ഉം, y ൽ നിന്ന് y ഉം ആണ് കുറയ്ക്കേണ്ടത്: (x2 - x1)² + (y2 - y1)².'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the distance between the points (1, 2) and (4, 6).',
        a: 'd = √((4 - 1)² + (6 - 2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5 units.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '(1, 2), (4, 6) എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണുക.',
        a: 'd = √((4 - 1)² + (6 - 2)²) = √(3² + 4²) = √25 = 5 യൂണിറ്റ്.'
      }
    ]
  },
  {
    id: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Geometric Applications of Coordinates',
    title_ml: 'സൂചകസംഖ്യകളുടെ ജ്യാമിതീയ പ്രയോഗങ്ങൾ',
    oneLine_en: 'Coordinate distance verifies geometric classifications: triangles (equilateral, isosceles, right), quadrilaterals, and positions of points relative to circles.',
    oneLine_ml: 'ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം ഉപയോഗിച്ച് ത്രികോണങ്ങളുടെയും ചതുർഭുജങ്ങളുടെയും തരങ്ങളും വൃത്തത്തിനകത്തോ പുറത്തോ ഉള്ള ബിന്ദുവിന്റെ സ്ഥാനവും നിർണ്ണയിക്കാം.',
    statement_en: `<p><b>Applications of the Distance Formula:</b></p>
      <ul>
        <li><b>Testing Triangles:</b>
          <ul>
            <li><b>Equilateral:</b> All three side lengths are equal ($AB = BC = CA$).</li>
            <li><b>Isosceles:</b> Two side lengths are equal ($AB = AC$).</li>
            <li><b>Right-Angled:</b> The square of the longest side equals the sum of squares of the other two ($a^2 + b^2 = c^2$).</li>
          </ul>
        </li>
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
    intuition_en: 'Any abstract geometric proof or shape verification can be tested rigorously by computing the coordinates and calculating the side and diagonal lengths.',
    intuition_ml: 'ഏതൊരു ജ്യാമിതീയ രൂപത്തിന്റെയും സവിശേഷതകൾ അവയുടെ ശീർഷങ്ങളുടെ സൂചകസംഖ്യകൾ കണ്ടെത്തി അകലങ്ങൾ കണക്കാക്കി കൃത്യമായി പരിശോധിക്കാം.',
    proof: {
      idea_en: 'Equivalence between metric distances and Euclidean geometry axioms.',
      idea_ml: 'യൂക്ലിഡിയൻ ജ്യാമിതിയിലെ സിദ്ധാന്തങ്ങളെ നിർദ്ദേശാങ്ക അകലങ്ങളുമായി ബന്ധിപ്പിക്കുന്നു.',
      why_en: 'Distances uniquely characterize isometric rigid shapes in Euclidean plane.',
      why_ml: 'വശങ്ങളുടെയും വികർണ്ണങ്ങളുടെയും അകലങ്ങൾ ജ്യാമിതീയ രൂപങ്ങളെ സംശയമില്ലാതെ സ്ഥിരീകരിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Distance Computation',
          title_ml: 'അകലങ്ങൾ കണക്കാക്കൽ',
          detail_en: 'Calculate all 4 side lengths $AB, BC, CD, DA$ and the 2 diagonals $AC, BD$.',
          detail_ml: '4 വശങ്ങളുടെ നീളങ്ങളും ($AB, BC, CD, DA$) 2 വികർണ്ണങ്ങളുടെ നീളങ്ങളും ($AC, BD$) കണക്കാക്കുന്നു.'
        },
        {
          title_en: 'Geometric Classification',
          title_ml: 'ജ്യാമിതീയ സ്ഥിരീകരണം',
          detail_en: 'Match side and diagonal equalities to the Euclidean definitions of polygons.',
          detail_ml: 'ലഭിച്ച അളവുകളെ ജ്യാമിതീയ നിർവ്വചനങ്ങളുമായി ഒത്തുനോക്കി രൂപം സ്ഥിരീകരിക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Assuming equal opposite sides alone makes a figure a rectangle without checking diagonals.',
        fix_en: 'Equal opposite sides only proves a parallelogram; you MUST also prove equal diagonals to confirm a rectangle.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'എതിർവശങ്ങൾ തുല്യമാണെന്ന് കണ്ടയുടൻ വികർണ്ണങ്ങൾ നോക്കാതെ അത് ചതുരമാണെന്ന് പറയുന്നത്.',
        fix_ml: 'എതിർവശങ്ങൾ തുല്യമായാൽ അത് സാമാന്തരികമേ ആകൂ; വികർണ്ണങ്ങൾ കൂടി തുല്യമാണെന്ന് തെളിയിച്ചാലേ അത് ചതുരമാകൂ.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'The vertices of a triangle are A(0, 0), B(4, 0), and C(0, 3). What kind of triangle is it?',
        a: 'AB = 4, AC = 3, BC = √(4² + 3²) = 5. Since 3² + 4² = 5², it is a right-angled triangle.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ഒരു ത്രികോണത്തിന്റെ ശീർഷങ്ങൾ A(0, 0), B(4, 0), C(0, 3) ആണ്. ഇത് ഏത് തരം ത്രികോണമാണ്?',
        a: 'AB = 4, AC = 3, BC = 5. 3² + 4² = 5² ആയതിനാൽ ഇത് ഒരു മട്ടത്രികോണമാണ്.'
      }
    ]
  }
);
