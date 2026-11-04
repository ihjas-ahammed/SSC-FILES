/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 6 — Coordinates (സൂചകസംഖ്യകൾ)
   8 Objective (2 per section) + 6 Written Exercises (authentic SCERT textbook).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. All symbols in Malayalam fields wrapped in $...$.
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.6.1 Coordinate Axes & Point Coordinates
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.6.1',
    concept: 'm10.6.1.coordinate-axes-and-points',
    sec: '10.6.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'In which quadrant does the point $(-4, 7)$ lie?',
    prompt_ml: '$(-4, 7)$ എന്ന ബിന്ദു ഏത് പാദത്തിലാണ് സ്ഥിതിചെയ്യുന്നത്?',
    options_en: [
      { k: 'A', t: 'Quadrant I' },
      { k: 'B', t: 'Quadrant II' },
      { k: 'C', t: 'Quadrant III' },
      { k: 'D', t: 'Quadrant IV' }
    ],
    options_ml: [
      { k: 'A', t: 'ഒന്നാം പാദം' },
      { k: 'B', t: 'രണ്ടാം പാദം' },
      { k: 'C', t: 'മൂന്നാം പാദം' },
      { k: 'D', t: 'നാലാം പാദം' }
    ],
    answer: 'B',
    solution_en: 'For point $(-4, 7)$, $x = -4 < 0$ and $y = 7 > 0$. Points with negative $x$ and positive $y$ lie in Quadrant II.',
    solution_ml: '$x = -4 < 0$ ഉം $y = 7 > 0$ ഉം ആയതിനാൽ ഈ ബിന്ദു രണ്ടാം പാദത്തിൽ സ്ഥിതിചെയ്യുന്നു.',
    tested_en: 'Identifying the quadrant from coordinate signs.',
    tested_ml: 'സൂചകസംഖ്യകളുടെ ചിഹ്നങ്ങളിൽ നിന്ന് പാദം കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m10.6.2',
    concept: 'm10.6.1.coordinate-axes-and-points',
    sec: '10.6.1',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'Which of the following points lies on the $x$-axis?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ $x$-അക്ഷത്തിൽ സ്ഥിതിചെയ്യുന്ന ബിന്ദു ഏത്?',
    options_en: [
      { k: 'A', t: '$(5, 0)$' },
      { k: 'B', t: '$(0, 5)$' },
      { k: 'C', t: '$(5, 5)$' },
      { k: 'D', t: '$(-5, -5)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(5, 0)$' },
      { k: 'B', t: '$(0, 5)$' },
      { k: 'C', t: '$(5, 5)$' },
      { k: 'D', t: '$(-5, -5)$' }
    ],
    answer: 'A',
    solution_en: 'Any point on the $x$-axis has $y$-coordinate equal to 0, which is $(5, 0)$.',
    solution_ml: '$x$-അക്ഷത്തിലെ ഏതൊരു ബിന്ദുവിന്റെയും $y$-സൂചകസംഖ്യ 0 ആയിരിക്കും, അതിനാൽ $(5, 0)$.',
    tested_en: 'Condition for a point to lie on the x-axis: y = 0.',
    tested_ml: '$x$-അക്ഷത്തിലെ ബിന്ദുവിന്റെ പ്രത്യേകത: $y = 0$.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.2 Distance on Parallel Lines
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.6.3',
    concept: 'm10.6.2.distance-on-parallel-lines',
    sec: '10.6.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the distance between the two points $A(-3, 8)$ and $B(9, 8)$?',
    prompt_ml: '$A(-3, 8), B(9, 8)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം എത്ര?',
    options_en: [
      { k: 'A', t: '12 units' },
      { k: 'B', t: '6 units' },
      { k: 'C', t: '8 units' },
      { k: 'D', t: '15 units' }
    ],
    options_ml: [
      { k: 'A', t: '12 യൂണിറ്റ്' },
      { k: 'B', t: '6 യൂണിറ്റ്' },
      { k: 'C', t: '8 യൂണിറ്റ്' },
      { k: 'D', t: '15 യൂണിറ്റ്' }
    ],
    answer: 'A',
    solution_en: 'Since the $y$-coordinates are both 8, the line is parallel to the $x$-axis. Distance $= |9 - (-3)| = 9 + 3 = 12$ units.',
    solution_ml: '$y$-സൂചകസംഖ്യകൾ തുല്യമായതിനാൽ വര $x$-അക്ഷത്തിന് സമാന്തരമാണ്. അകലം $= |9 - (-3)| = 12$ യൂണിറ്റ്.',
    tested_en: 'Distance on a horizontal line.',
    tested_ml: 'തിരശ്ചീന വരയിലെ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം.'
  },
  {
    id: 'obj.m10.6.4',
    concept: 'm10.6.2.distance-on-parallel-lines',
    sec: '10.6.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Opposite vertices of a rectangle with sides parallel to the axes are $(2, 1)$ and $(7, 5)$. What is the area of this rectangle?',
    prompt_ml: 'വശങ്ങൾ അക്ഷങ്ങൾക്ക് സമാന്തരമായ ഒരു ചതുരത്തിന്റെ എതിർ ശീർഷങ്ങൾ $(2, 1), (7, 5)$ എന്നിവയാണ്. ഈ ചതുരത്തിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '20 sq units' },
      { k: 'B', t: '18 sq units' },
      { k: 'C', t: '24 sq units' },
      { k: 'D', t: '15 sq units' }
    ],
    options_ml: [
      { k: 'A', t: '20 ചതുരശ്ര യൂണിറ്റ്' },
      { k: 'B', t: '18 ചതുരശ്ര യൂണിറ്റ്' },
      { k: 'C', t: '24 ചതുരശ്ര യൂണിറ്റ്' },
      { k: 'D', t: '15 ചതുരശ്ര യൂണിറ്റ്' }
    ],
    answer: 'A',
    solution_en: 'Horizontal side length $= |7 - 2| = 5$. Vertical side length $= |5 - 1| = 4$. Area $= 5 \\times 4 = 20$ sq units.',
    solution_ml: 'തിരശ്ചീന വശത്തിന്റെ നീളം $= |7 - 2| = 5$. ലംബ വശത്തിന്റെ നീളം $= |5 - 1| = 4$. പരപ്പളവ് $= 5 \\times 4 = 20$ ചതുരശ്ര യൂണിറ്റ്.',
    tested_en: 'Area of an axis-aligned rectangle from opposite vertices.',
    tested_ml: 'എതിർ ശീർഷങ്ങളിൽ നിന്ന് ചതുരത്തിന്റെ പരപ്പളവ് കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.3 Distance Formula in the Coordinate Plane
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.6.5',
    concept: 'm10.6.3.distance-formula-in-plane',
    sec: '10.6.3',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the distance between the points $P(2, 3)$ and $Q(5, 7)$?',
    prompt_ml: '$P(2, 3), Q(5, 7)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം എത്ര?',
    options_en: [
      { k: 'A', t: '5 units' },
      { k: 'B', t: '7 units' },
      { k: 'C', t: '25 units' },
      { k: 'D', t: '$\\sqrt{7}$ units' }
    ],
    options_ml: [
      { k: 'A', t: '5 യൂണിറ്റ്' },
      { k: 'B', t: '7 യൂണിറ്റ്' },
      { k: 'C', t: '25 യൂണിറ്റ്' },
      { k: 'D', t: '$\\sqrt{7}$ യൂണിറ്റ്' }
    ],
    answer: 'A',
    solution_en: '$d = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ units.',
    solution_ml: '$d = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ യൂണിറ്റ്.',
    tested_en: 'Standard application of the distance formula.',
    tested_ml: 'അകല സൂത്രവാക്യത്തിന്റെ പ്രയോഗം.'
  },
  {
    id: 'obj.m10.6.6',
    concept: 'm10.6.3.distance-formula-in-plane',
    sec: '10.6.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the distance from the origin $(0, 0)$ to the point $(-6, 8)$?',
    prompt_ml: 'ആധാരബിന്ദുവായ $(0, 0)$ ൽ നിന്ന് $(-6, 8)$ എന്ന ബിന്ദുവിലേക്കുള്ള അകലം എത്ര?',
    options_en: [
      { k: 'A', t: '10 units' },
      { k: 'B', t: '14 units' },
      { k: 'C', t: '2 units' },
      { k: 'D', t: '$\\sqrt{28}$ units' }
    ],
    options_ml: [
      { k: 'A', t: '10 യൂണിറ്റ്' },
      { k: 'B', t: '14 യൂണിറ്റ്' },
      { k: 'C', t: '2 യൂണിറ്റ്' },
      { k: 'D', t: '$\\sqrt{28}$ യൂണിറ്റ്' }
    ],
    answer: 'A',
    solution_en: 'Distance from origin $= \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ units.',
    solution_ml: 'ആധാരബിന്ദുവിൽ നിന്നുള്ള അകലം $= \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ യൂണിറ്റ്.',
    tested_en: 'Distance of a point from the origin.',
    tested_ml: 'ആധാരബിന്ദുവിൽ നിന്നുള്ള അകലം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.4 Geometric Applications of Coordinates
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.6.7',
    concept: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'A circle has its centre at the origin and radius 5 units. Which of the following points lies OUTSIDE the circle?',
    prompt_ml: 'ആധാരബിന്ദു കേന്ദ്രവും ആരം 5 യൂണിറ്റും ആയ ഒരു വൃത്തമുണ്ട്. താഴെ പറയുന്നവയിൽ വൃത്തത്തിന് പുറത്തുള്ള ബിന്ദു ഏത്?',
    options_en: [
      { k: 'A', t: '$(4, 4)$' },
      { k: 'B', t: '$(3, 4)$' },
      { k: 'C', t: '$(0, 5)$' },
      { k: 'D', t: '$(2, 3)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(4, 4)$' },
      { k: 'B', t: '$(3, 4)$' },
      { k: 'C', t: '$(0, 5)$' },
      { k: 'D', t: '$(2, 3)$' }
    ],
    answer: 'A',
    solution_en: 'For $(4, 4)$, distance squared is $4^2 + 4^2 = 16 + 16 = 32 > 5^2 = 25$. Since distance $> 5$, the point $(4, 4)$ lies outside the circle.',
    solution_ml: '$(4, 4)$ ന് ആധാരബിന്ദുവിൽ നിന്നുള്ള അകലത്തിന്റെ വർഗ്ഗം $4^2 + 4^2 = 32 > 25$. അതിനാൽ $(4, 4)$ വൃത്തത്തിന് പുറത്താണ്.',
    tested_en: 'Position of a point relative to a circle using distance.',
    tested_ml: 'വൃത്തത്തിന് അകത്തോ പുറത്തോ ഉള്ള ബിന്ദുവിന്റെ സ്ഥാനം നിർണ്ണയിക്കൽ.'
  },
  {
    id: 'obj.m10.6.8',
    concept: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    type: 'MCQ',
    marks: 1,
    time: 40,
    prompt_en: 'The points $A(0, 0)$, $B(6, 0)$, and $C(3, 4)$ are the vertices of a triangle. What type of triangle is $\\triangle ABC$?',
    prompt_ml: '$A(0, 0), B(6, 0), C(3, 4)$ എന്നിവ ഒരു ത്രികോണത്തിന്റെ ശീർഷങ്ങളാണ്. ഇത് ഏത് തരം ത്രികോണമാണ്?',
    options_en: [
      { k: 'A', t: 'Isosceles triangle' },
      { k: 'B', t: 'Equilateral triangle' },
      { k: 'C', t: 'Scalene right triangle' },
      { k: 'D', t: 'Obtuse triangle' }
    ],
    options_ml: [
      { k: 'A', t: 'സമപാർശ്വ ത്രികോണം' },
      { k: 'B', t: 'സമഭുജ ത്രികോണം' },
      { k: 'C', t: 'വിഷമഭുജ മട്ടത്രികോണം' },
      { k: 'D', t: 'ബൃഹത്കോൺ ത്രികോണം' }
    ],
    answer: 'A',
    solution_en: '$AB = 6$. $AC = \\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{9 + 16} = 5$. $BC = \\sqrt{(6-3)^2 + (0-4)^2} = \\sqrt{9 + 16} = 5$. Since $AC = BC = 5$, $\\triangle ABC$ is an isosceles triangle.',
    solution_ml: '$AB = 6$. $AC = \\sqrt{3^2 + 4^2} = 5$. $BC = \\sqrt{3^2 + (-4)^2} = 5$. $AC = BC = 5$ ആയതിനാൽ ഇത് സമപാർശ്വ ത്രികോണമാണ്.',
    tested_en: 'Classifying triangles using side lengths from distance formula.',
    tested_ml: 'വശങ്ങളുടെ നീളം പരിശോധിച്ച് ത്രികോണം തരംതിരിക്കൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.6.1 Coordinate Axes & Point Coordinates
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.6.1',
    concept: 'm10.6.1.coordinate-axes-and-points',
    sec: '10.6.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A square has its centre at the origin $(0, 0)$, and its sides are parallel to the coordinate axes. The side length of the square is 8 units.\\n(a) What is the perpendicular distance from the centre to each side of the square?\\n(b) Write the coordinates of all four vertices of the square.\\n(c) Find the length of the diagonals of this square.',
    prompt_ml: 'ആധാരബിന്ദുവായ $(0, 0)$ കേന്ദ്രമായി അക്ഷങ്ങൾക്ക് സമാന്തരമായ വശങ്ങളുള്ള ഒരു സമചതുരമുണ്ട്. ഇതിന്റെ ഒരു വശത്തിന്റെ നീളം 8 യൂണിറ്റാണ്.\\n(a) കേന്ദ്രത്തിൽ നിന്ന് സമചതുരത്തിന്റെ ഓരോ വശത്തേക്കുമുള്ള ലംബദൂരം എത്ര?\\n(b) സമചതുരത്തിന്റെ നാല് ശീർഷങ്ങളുടെയും സൂചകസംഖ്യകൾ എഴുതുക.\\n(c) ഈ സമചതുരത്തിന്റെ വികർണ്ണങ്ങളുടെ നീളം കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Since the centre is at $(0, 0)$ and the side length is 8, the distance from the centre to each side is $\\frac{8}{2} = 4$ units.</li>
  <li>The four vertices are symmetrically located in the four quadrants at horizontal distance 4 and vertical distance 4 from the origin: $(4, 4)$, $(-4, 4)$, $(-4, -4)$, and $(4, -4)$.</li>
  <li>The diagonal connects opposite vertices $(-4, -4)$ and $(4, 4)$:
  $$d = \\sqrt{(4 - (-4))^2 + (4 - (-4))^2} = \\sqrt{8^2 + 8^2} = \\sqrt{64 + 64} = \\sqrt{128} = 8\\sqrt{2}\\text{ units}$$</li>
  <li>Both diagonals are equal to $8\\sqrt{2}$ units.</li>
</ol>
<p><b>Final Answer:</b> (a) 4 units; (b) (4, 4), (-4, 4), (-4, -4), (4, -4); (c) 8√2 units</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Distance from center to sides (4 units): 1 mark</li>
  <li>Coordinates of all four vertices: 1.5 marks</li>
  <li>Diagonal length calculation with work: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>കേന്ദ്രത്തിൽ നിന്ന് ഓരോ വശത്തേക്കുമുള്ള ലംബദൂരം $= \\frac{8}{2} = 4$ യൂണിറ്റ്.</li>
  <li>നാല് ശീർഷങ്ങളുടെ സൂചകസംഖ്യകൾ: $(4, 4), (-4, 4), (-4, -4), (4, -4)$.</li>
  <li>വികർണ്ണത്തിന്റെ നീളം:
  $$d = \\sqrt{(4 - (-4))^2 + (4 - (-4))^2} = \\sqrt{8^2 + 8^2} = \\sqrt{64 + 64} = 8\\sqrt{2}\\text{ യൂണിറ്റ്}$$</li>
  <li>രണ്ട് വികർണ്ണങ്ങളുടെയും നീളം $8\\sqrt{2}$ യൂണിറ്റ് ആണ്.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 4 യൂണിറ്റ്; (b) (4, 4), (-4, 4), (-4, -4), (4, -4); (c) 8√2 യൂണിറ്റ്</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബദൂരം: 1 മാർക്ക്</li>
  <li>നാല് ശീർഷങ്ങൾ ശരിയായി എഴുതൽ: 1.5 മാർക്ക്</li>
  <li>വികർണ്ണത്തിന്റെ നീളം കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Since the centre is at $(0, 0)$ and the side length is 8, the distance from the centre to each side is $\\frac{8}{2} = 4$ units.',
      'The four vertices are symmetrically located in the four quadrants at horizontal distance 4 and vertical distance 4 from the origin: $(4, 4)$, $(-4, 4)$, $(-4, -4)$, and $(4, -4)$.',
      'The diagonal connects opposite vertices $(-4, -4)$ and $(4, 4)$: $d = \\sqrt{(4 - (-4))^2 + (4 - (-4))^2} = \\sqrt{8^2 + 8^2} = 8\\sqrt{2}$ units.',
      'Both diagonals are equal to $8\\sqrt{2}$ units.'
    ],
    steps_ml: [
      'കേന്ദ്രത്തിൽ നിന്ന് ഓരോ വശത്തേക്കുമുള്ള ലംബദൂരം $= \\frac{8}{2} = 4$ യൂണിറ്റ്.',
      'നാല് ശീർഷങ്ങളുടെ സൂചകസംഖ്യകൾ: $(4, 4), (-4, 4), (-4, -4), (4, -4)$.',
      'വികർണ്ണത്തിന്റെ നീളം $d = \\sqrt{8^2 + 8^2} = 8\\sqrt{2}$ യൂണിറ്റ്.',
      'രണ്ട് വികർണ്ണങ്ങളുടെയും നീളം $8\\sqrt{2}$ യൂണിറ്റ് ആണ്.'
    ],
    rubric_en: [
      'Distance from center to sides (4 units): 1 mark',
      'Coordinates of all four vertices: 1.5 marks',
      'Diagonal length calculation with work: 1.5 marks'
    ],
    rubric_ml: [
      'കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബദൂരം: 1 മാർക്ക്',
      'നാല് ശീർഷങ്ങൾ ശരിയായി എഴുതൽ: 1.5 മാർക്ക്',
      'വികർണ്ണത്തിന്റെ നീളം കണ്ടെത്തൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) 4 units; (b) (4, 4), (-4, 4), (-4, -4), (4, -4); (c) 8√2 units',
    answer_ml: '(a) 4 യൂണിറ്റ്; (b) (4, 4), (-4, 4), (-4, -4), (4, -4); (c) 8√2 യൂണിറ്റ്'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.2 Distance on Parallel Lines
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.6.2',
    concept: 'm10.6.2.distance-on-parallel-lines',
    sec: '10.6.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A rectangle $ABCD$ has sides parallel to the coordinate axes. The coordinates of two diagonally opposite vertices are $A(1, 2)$ and $C(7, 6)$.\\n(a) Write the coordinates of the other two vertices $B$ and $D$.\\n(b) Find the lengths of the sides $AB$ and $BC$.\\n(c) Find the area and perimeter of the rectangle.',
    prompt_ml: '$ABCD$ എന്ന ചതുരത്തിന്റെ വശങ്ങൾ അക്ഷങ്ങൾക്ക് സമാന്തരമാണ്. അതിന്റെ എതിർ ശീർഷങ്ങൾ $A(1, 2), C(7, 6)$ ആണ്.\\n(a) മറ്റ് രണ്ട് ശീർഷങ്ങളായ $B, D$ എന്നിവയുടെ സൂചകസംഖ്യകൾ എഴുതുക.\\n(b) $AB, BC$ എന്നീ വശങ്ങളുടെ നീളം കാണുക.\\n(c) ചതുരത്തിന്റെ പരപ്പളവും ചുറ്റളവും കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Since the sides are parallel to the axes, vertex $B$ has the $x$-coordinate of $C$ and $y$-coordinate of $A$: $B(7, 2)$. Vertex $D$ has the $x$-coordinate of $A$ and $y$-coordinate of $C$: $D(1, 6)$.</li>
  <li>Horizontal side length $AB = |7 - 1| = 6$ units. Vertical side length $BC = |6 - 2| = 4$ units.</li>
  <li>Area $= \\text{length} \\times \\text{width} = 6 \\times 4 = 24$ square units.</li>
  <li>Perimeter $= 2(6 + 4) = 2(10) = 20$ units.</li>
</ol>
<p><b>Final Answer:</b> (a) B(7, 2), D(1, 6); (b) AB = 6 units, BC = 4 units; (c) Area = 24 sq units, Perimeter = 20 units</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Coordinates of B and D: 1.5 marks</li>
  <li>Lengths of sides AB and BC: 1 mark</li>
  <li>Area and perimeter calculations: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>വശങ്ങൾ അക്ഷങ്ങൾക്ക് സമാന്തരമായതിനാൽ $B(7, 2), D(1, 6)$ ആണ് മറ്റ് രണ്ട് ശീർഷങ്ങൾ.</li>
  <li>തിരശ്ചീന വശം $AB = 7 - 1 = 6$ യൂണിറ്റ്. ലംബ വശം $BC = 6 - 2 = 4$ യൂണിറ്റ്.</li>
  <li>പരപ്പളവ് $= 6 \\times 4 = 24$ ചതുരശ്ര യൂണിറ്റ്.</li>
  <li>ചുറ്റളവ് $= 2(6 + 4) = 20$ യൂണിറ്റ്.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) B(7, 2), D(1, 6); (b) AB = 6 യൂണിറ്റ്, BC = 4 യൂണിറ്റ്; (c) പരപ്പളവ് = 24 ചതുരശ്ര യൂണിറ്റ്, ചുറ്റളവ് = 20 യൂണിറ്റ്</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>$B, D$ എന്നിവയുടെ സൂചകസംഖ്യകൾ: 1.5 മാർക്ക്</li>
  <li>$AB, BC$ എന്നിവയുടെ നീളം: 1 മാർക്ക്</li>
  <li>പരപ്പളവും ചുറ്റളവും കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Since the sides are parallel to the axes, vertex $B$ has the $x$-coordinate of $C$ and $y$-coordinate of $A$: $B(7, 2)$. Vertex $D$ has the $x$-coordinate of $A$ and $y$-coordinate of $C$: $D(1, 6)$.',
      'Horizontal side length $AB = |7 - 1| = 6$ units. Vertical side length $BC = |6 - 2| = 4$ units.',
      'Area $= \\text{length} \\times \\text{width} = 6 \\times 4 = 24$ square units.',
      'Perimeter $= 2(6 + 4) = 2(10) = 20$ units.'
    ],
    steps_ml: [
      'വശങ്ങൾ അക്ഷങ്ങൾക്ക് സമാന്തരമായതിനാൽ $B(7, 2), D(1, 6)$ ആണ് മറ്റ് രണ്ട് ശീർഷങ്ങൾ.',
      'തിരശ്ചീന വശം $AB = 7 - 1 = 6$ യൂണിറ്റ്. ലംബ വശം $BC = 6 - 2 = 4$ യൂണിറ്റ്.',
      'പരപ്പളവ് $= 6 \\times 4 = 24$ ചതുരശ്ര യൂണിറ്റ്.',
      'ചുറ്റളവ് $= 2(6 + 4) = 20$ യൂണിറ്റ്.'
    ],
    rubric_en: [
      'Coordinates of B and D: 1.5 marks',
      'Lengths of sides AB and BC: 1 mark',
      'Area and perimeter calculations: 1.5 marks'
    ],
    rubric_ml: [
      '$B, D$ എന്നിവയുടെ സൂചകസംഖ്യകൾ: 1.5 മാർക്ക്',
      '$AB, BC$ എന്നിവയുടെ നീളം: 1 മാർക്ക്',
      'പരപ്പളവും ചുറ്റളവും കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) B(7, 2), D(1, 6); (b) AB = 6 units, BC = 4 units; (c) Area = 24 sq units, Perimeter = 20 units',
    answer_ml: '(a) B(7, 2), D(1, 6); (b) AB = 6 യൂണിറ്റ്, BC = 4 യൂണിറ്റ്; (c) പരപ്പളവ് = 24 ചതുരശ്ര യൂണിറ്റ്, ചുറ്റളവ് = 20 യൂണിറ്റ്'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.3 Distance Formula in the Coordinate Plane
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.6.3',
    concept: 'm10.6.3.distance-formula-in-plane',
    sec: '10.6.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Answer the following using the distance formula:\\n(a) State the formula for the distance between two points $(x_1, y_1)$ and $(x_2, y_2)$.\\n(b) Find the distance between the points $A(-2, 5)$ and $B(4, -3)$.\\n(c) Find the coordinates of the point on the $x$-axis which is equidistant from $(2, -5)$ and $(-2, 9)$.',
    prompt_ml: 'അകല സൂത്രവാക്യം ഉപയോഗിച്ച് താഴെ പറയുന്നവയ്ക്ക് ഉത്തരം കണ്ടെത്തുക:\\n(a) $(x_1, y_1), (x_2, y_2)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണാനുള്ള സൂത്രവാക്യം എഴുതുക.\\n(b) $A(-2, 5), B(4, -3)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണുക.\\n(c) $(2, -5), (-2, 9)$ എന്നീ ബിന്ദുക്കളിൽ നിന്ന് തുല്യ അകലത്തിലുള്ള $x$-അക്ഷത്തിലെ ബിന്ദുവിന്റെ സൂചകസംഖ്യകൾ കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>Distance Formula:</b> $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</li>
  <li><b>Distance AB:</b>
  $$x_2 - x_1 = 4 - (-2) = 6, \\quad y_2 - y_1 = -3 - 5 = -8$$
  $$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ units}$$</li>
  <li><b>Equidistant point on x-axis:</b> Any point on the $x$-axis has coordinates $P(x, 0)$.
  $$d_1^2 = (x - 2)^2 + (0 - (-5))^2 = (x - 2)^2 + 25$$
  $$d_2^2 = (x - (-2))^2 + (0 - 9)^2 = (x + 2)^2 + 81$$
  Since $d_1 = d_2 \\implies d_1^2 = d_2^2$:
  $$(x^2 - 4x + 4) + 25 = (x^2 + 4x + 4) + 81$$
  $$-4x + 29 = 4x + 85 \\implies 8x = 29 - 85 = -56 \\implies x = -7$$
  Therefore, the required point is $(-7, 0)$.</li>
</ol>
<p><b>Final Answer:</b> (a) d = √((x2-x1)² + (y2-y1)²); (b) 10 units; (c) (-7, 0)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Stating the formula: 1 mark</li>
  <li>Computing distance AB = 10 units: 1.5 marks</li>
  <li>Setting up and solving for x on x-axis (-7, 0): 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>അകല സൂത്രവാക്യം:</b> $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</li>
  <li><b>AB തമ്മിലുള്ള അകലം:</b>
  $$x_2 - x_1 = 4 - (-2) = 6, \\quad y_2 - y_1 = -3 - 5 = -8$$
  $$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ യൂണിറ്റ്}$$</li>
  <li><b>x-അക്ഷത്തിലെ ബിന്ദു:</b> $x$-അക്ഷത്തിലെ ബിന്ദു $P(x, 0)$ ആണ്.
  $$d_1^2 = (x - 2)^2 + 25 = x^2 - 4x + 29$$
  $$d_2^2 = (x + 2)^2 + 81 = x^2 + 4x + 85$$
  തുല്യ അകലമായതിനാൽ $d_1^2 = d_2^2$:
  $$x^2 - 4x + 29 = x^2 + 4x + 85 \\implies 8x = -56 \\implies x = -7$$
  ആയതിനാൽ ബിന്ദു $(-7, 0)$ ആണ്.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) d = √((x2-x1)² + (y2-y1)²); (b) 10 യൂണിറ്റ്; (c) (-7, 0)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>
  <li>AB തമ്മിലുള്ള അകലം 10 യൂണിറ്റ് എന്ന് കാണൽ: 1.5 മാർക്ക്</li>
  <li>x-അക്ഷത്തിലെ ബിന്ദു (-7, 0) കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Distance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
      'For $A(-2, 5)$ and $B(4, -3)$: $d = \\sqrt{(4 - (-2))^2 + (-3 - 5)^2} = \\sqrt{6^2 + (-8)^2} = \\sqrt{100} = 10$ units.',
      'Let the point on the $x$-axis be $P(x, 0)$. Setting distances equal: $(x - 2)^2 + 25 = (x + 2)^2 + 81$.',
      'Expanding gives $-4x + 29 = 4x + 85 \\implies 8x = -56 \\implies x = -7$. Point is $(-7, 0)$.'
    ],
    steps_ml: [
      'അകല സൂത്രവാക്യം: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
      '$A(-2, 5), B(4, -3)$ എന്നിവയ്ക്ക്: $d = \\sqrt{6^2 + (-8)^2} = 10$ യൂണിറ്റ്.',
      '$x$-അക്ഷത്തിലെ ബിന്ദു $P(x, 0)$ ആയാൽ: $(x - 2)^2 + 25 = (x + 2)^2 + 81$.',
      'ലഘൂകരിക്കുമ്പോൾ: $8x = -56 \\implies x = -7$. ബിന്ദു $(-7, 0)$.'
    ],
    rubric_en: [
      'Stating the formula: 1 mark',
      'Computing distance AB = 10 units: 1.5 marks',
      'Setting up and solving for x on x-axis (-7, 0): 1.5 marks'
    ],
    rubric_ml: [
      'സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്',
      'AB തമ്മിലുള്ള അകലം 10 യൂണിറ്റ് എന്ന് കാണൽ: 1.5 മാർക്ക്',
      'x-അക്ഷത്തിലെ ബിന്ദു (-7, 0) കണ്ടെത്തൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) d = √((x2-x1)² + (y2-y1)²); (b) 10 units; (c) (-7, 0)',
    answer_ml: '(a) d = √((x2-x1)² + (y2-y1)²); (b) 10 യൂണിറ്റ്; (c) (-7, 0)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.4 Geometric Applications of Coordinates (SCERT Textbook p.150)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.6.4',
    concept: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Prove that by joining the points $A(2, 1)$, $B(3, 4)$, and $C(-3, 6)$, we get a right triangle (SCERT textbook problem).\\n(a) Calculate the squares of the lengths of all three sides: $AB^2, BC^2$, and $AC^2$.\\n(b) Identify which side is the hypotenuse.\\n(c) Verify the converse of Pythagoras theorem and state which vertex has the right angle.',
    prompt_ml: '$A(2, 1), B(3, 4), C(-3, 6)$ എന്നീ ബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ ഒരു മട്ടത്രികോണം കിട്ടുമെന്ന് തെളിയിക്കുക.\\n(a) മൂന്ന് വശങ്ങളുടെയും നീളങ്ങളുടെ വർഗ്ഗങ്ങളായ $AB^2, BC^2, AC^2$ എന്നിവ കണക്കാക്കുക.\\n(b) ഏതാണ് കർണ്ണം എന്ന് കണ്ടെത്തുക.\\n(c) പൈതഗോറസ് മറുസിദ്ധാന്തം ശരിയാണെന്ന് പരിശോധിച്ച് ഏത് ശീർഷത്തിലാണ് മട്ടകോൺ എന്ന് വ്യക്തമാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>Compute squares of side lengths:</b>
  $$AB^2 = (3 - 2)^2 + (4 - 1)^2 = 1^2 + 3^2 = 1 + 9 = 10$$
  $$BC^2 = (-3 - 3)^2 + (6 - 4)^2 = (-6)^2 + 2^2 = 36 + 4 = 40$$
  $$AC^2 = (-3 - 2)^2 + (6 - 1)^2 = (-5)^2 + 5^2 = 25 + 25 = 50$$</li>
  <li><b>Identify hypotenuse:</b> The longest side is $AC$, with $AC^2 = 50$, so hypotenuse is $AC = \\sqrt{50} = 5\\sqrt{2}$ units.</li>
  <li><b>Check Pythagorean relation:</b>
  $$AB^2 + BC^2 = 10 + 40 = 50 = AC^2$$
  Since the sum of squares of two sides equals the square of the third side, by the converse of Pythagoras theorem, $\\triangle ABC$ is a right-angled triangle.</li>
  <li>The right angle is opposite to the hypotenuse $AC$, which is at vertex $B$ ($\angle B = 90^\circ$).</li>
</ol>
<p><b>Final Answer:</b> (a) AB² = 10, BC² = 40, AC² = 50; (b) AC is the hypotenuse; (c) AB² + BC² = AC² = 50, right angle at vertex B</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Calculating all three squared lengths accurately: 2 marks</li>
  <li>Identifying AC as hypotenuse: 0.5 mark</li>
  <li>Verifying AB² + BC² = AC² and concluding right angle at B: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>വശങ്ങളുടെ വർഗ്ഗങ്ങൾ കാണുന്നു:</b>
  $$AB^2 = (3 - 2)^2 + (4 - 1)^2 = 1^2 + 3^2 = 10$$
  $$BC^2 = (-3 - 3)^2 + (6 - 4)^2 = (-6)^2 + 2^2 = 36 + 4 = 40$$
  $$AC^2 = (-3 - 2)^2 + (6 - 1)^2 = (-5)^2 + 5^2 = 25 + 25 = 50$$</li>
  <li><b>കർണ്ണം കണ്ടെത്തൽ:</b> ഏറ്റവും വലിയ വശം $AC$ ആണ് ($AC^2 = 50$). അതിനാൽ കർണ്ണം $AC = 5\\sqrt{2}$ യൂണിറ്റ്.</li>
  <li><b>പൈതഗോറസ് ബന്ധം പരിശോധിക്കൽ:</b>
  $$AB^2 + BC^2 = 10 + 40 = 50 = AC^2$$
  രണ്ട് വശങ്ങളുടെ വർഗ്ഗങ്ങളുടെ തുക മൂന്നാമത്തെ വശത്തിന്റെ വർഗ്ഗത്തിന് തുല്യമായതിനാൽ പൈതഗോറസ് മറുസിദ്ധാന്തപ്രകാരം ഇത് മട്ടത്രികോണമാണ്.</li>
  <li>കർണ്ണമായ $AC$ ക്ക് എതിരെയുള്ള കോൺ $B$ മട്ടകോണാണ് ($\\angle B = 90^\\circ$).</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) AB² = 10, BC² = 40, AC² = 50; (b) AC ആണ് കർണ്ണം; (c) AB² + BC² = AC² = 50, B ൽ മട്ടകോൺ</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>മൂന്ന് വശങ്ങളുടെയും വർഗ്ഗങ്ങൾ ശരിയായി കാണൽ: 2 മാർക്ക്</li>
  <li>കർണ്ണം $AC$ എന്ന് കണ്ടെത്തൽ: 0.5 മാർക്ക്</li>
  <li>$AB^2 + BC^2 = AC^2$ പരിശോധിച്ച് $B$ ൽ മട്ടകോൺ എന്ന് സമർത്ഥിക്കൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Compute $AB^2 = (3 - 2)^2 + (4 - 1)^2 = 1 + 9 = 10$.',
      'Compute $BC^2 = (-3 - 3)^2 + (6 - 4)^2 = 36 + 4 = 40$.',
      'Compute $AC^2 = (-3 - 2)^2 + (6 - 1)^2 = 25 + 25 = 50$.',
      'Verify $AB^2 + BC^2 = 10 + 40 = 50 = AC^2$. By converse of Pythagoras theorem, $\\triangle ABC$ is right-angled at $B$.'
    ],
    steps_ml: [
      '$AB^2 = (3 - 2)^2 + (4 - 1)^2 = 10$.',
      '$BC^2 = (-3 - 3)^2 + (6 - 4)^2 = 40$.',
      '$AC^2 = (-3 - 2)^2 + (6 - 1)^2 = 50$.',
      '$AB^2 + BC^2 = 10 + 40 = 50 = AC^2$. അതിനാൽ $B$ ൽ മട്ടകോണുള്ള മട്ടത്രികോണം.'
    ],
    rubric_en: [
      'Calculating all three squared lengths accurately: 2 marks',
      'Identifying AC as hypotenuse: 0.5 mark',
      'Verifying AB² + BC² = AC² and concluding right angle at B: 1.5 marks'
    ],
    rubric_ml: [
      'മൂന്ന് വശങ്ങളുടെയും വർഗ്ഗങ്ങൾ ശരിയായി കാണൽ: 2 മാർക്ക്',
      'കർണ്ണം $AC$ എന്ന് കണ്ടെത്തൽ: 0.5 മാർക്ക്',
      '$AB^2 + BC^2 = AC^2$ പരിശോധിച്ച് $B$ ൽ മട്ടകോൺ എന്ന് സമർത്ഥിക്കൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) AB² = 10, BC² = 40, AC² = 50; (b) AC is the hypotenuse; (c) AB² + BC² = AC² = 50, right angle at vertex B',
    answer_ml: '(a) AB² = 10, BC² = 40, AC² = 50; (b) AC ആണ് കർണ്ണം; (c) AB² + BC² = AC² = 50, B ൽ മട്ടകോൺ'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.4 Circle Position & Integer Coordinate Points (SCERT Textbook p.150)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.6.5',
    concept: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A circle is drawn with its centre at the origin $(0, 0)$ and radius 10 units (SCERT textbook problem).\\n(a) For each of the points $(6, 9)$, $(5, 9)$, and $(6, 8)$, determine whether it lies inside, on, or outside the circle by computing its distance from the centre.\\n(b) Write the coordinates of 8 different points on this circle that have integer coordinates.',
    prompt_ml: 'ആധാരബിന്ദു $(0, 0)$ കേന്ദ്രവും ആരം 10 യൂണിറ്റും ആയി ഒരു വൃത്തം വരയ്ക്കുന്നു.\\n(a) കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം കണക്കാക്കി $(6, 9), (5, 9), (6, 8)$ എന്നീ ബിന്ദുക്കൾ വൃത്തത്തിനകത്തോ, പുറത്തോ, വൃത്തത്തിലോ എന്ന് കണ്ടെത്തുക.\\n(b) പൂർണ്ണസംഖ്യകൾ സൂചകസംഖ്യകളായി വരുന്ന 8 വ്യത്യസ്ത ബിന്ദുക്കളുടെ സൂചകസംഖ്യകൾ എഴുതുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>For a circle centred at $(0, 0)$ with radius $r = 10$, $r^2 = 10^2 = 100$. The distance squared of any point $(x, y)$ from origin is $d^2 = x^2 + y^2$.
  <ul>
    <li>Point $(6, 9)$: $d^2 = 6^2 + 9^2 = 36 + 81 = 117 > 100$. Since $d > 10$, $(6, 9)$ lies <b>outside the circle</b>.</li>
    <li>Point $(5, 9)$: $d^2 = 5^2 + 9^2 = 25 + 81 = 106 > 100$. Since $d > 10$, $(5, 9)$ lies <b>outside the circle</b>.</li>
    <li>Point $(6, 8)$: $d^2 = 6^2 + 8^2 = 36 + 64 = 100 = r^2$. Since $d = 10$, $(6, 8)$ lies <b>on the circle</b>.</li>
  </ul></li>
  <li>To find 8 points on the circle with integer coordinates, we need $x^2 + y^2 = 100$:
  <ul>
    <li>Points on the axes: $(10, 0)$, $(-10, 0)$, $(0, 10)$, $(0, -10)$.</li>
    <li>Points using the Pythagorean triple $6^2 + 8^2 = 100$: $(6, 8)$, $(6, -8)$, $(-6, 8)$, $(-6, -8)$ (or $(8, 6)$, $(8, -6)$, $(-8, 6)$, $(-8, -6)$).</li>
  </ul></li>
</ol>
<p><b>Final Answer:</b> (a) (6, 9) outside, (5, 9) outside, (6, 8) on circle; (b) (10, 0), (-10, 0), (0, 10), (0, -10), (6, 8), (-6, 8), (6, -8), (-6, -8)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Checking distance squared and classifying all 3 points: 2 marks</li>
  <li>Writing 4 axis intercepts: 1 mark</li>
  <li>Writing 4 additional integer points from (6, 8) signs: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>ആധാരബിന്ദു കേന്ദ്രവും ആരം $r = 10$ ഉം ആയ വൃത്തത്തിൽ $r^2 = 100$. അകലത്തിന്റെ വർഗ്ഗം $d^2 = x^2 + y^2$:
  <ul>
    <li>$(6, 9)$: $6^2 + 9^2 = 36 + 81 = 117 > 100$. അകലം 10 നേക്കാൾ കൂടുതൽ ആയതിനാൽ <b>വൃത്തത്തിന് പുറത്ത്</b>.</li>
    <li>$(5, 9)$: $5^2 + 9^2 = 25 + 81 = 106 > 100$. അകലം 10 നേക്കാൾ കൂടുതൽ ആയതിനാൽ <b>വൃത്തത്തിന് പുറത്ത്</b>.</li>
    <li>$(6, 8)$: $6^2 + 8^2 = 36 + 64 = 100 = r^2$. അകലം കൃത്യം 10 ആയതിനാൽ <b>വൃത്തത്തിന് മേൽ</b>.</li>
  </ul></li>
  <li>പൂർണ്ണസംഖ്യകളായ 8 ബിന്ദുക്കൾ ($x^2 + y^2 = 100$):
  <ul>
    <li>അക്ഷങ്ങളിലെ ബിന്ദുക്കൾ: $(10, 0), (-10, 0), (0, 10), (0, -10)$.</li>
    <li>$6^2 + 8^2 = 100$ ഉപയോഗിച്ചുള്ള മറ്റ് ബിന്ദുക്കൾ: $(6, 8), (-6, 8), (6, -8), (-6, -8)$.</li>
  </ul></li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) (6, 9) പുറത്ത്, (5, 9) പുറത്ത്, (6, 8) വൃത്തത്തിൽ; (b) (10, 0), (-10, 0), (0, 10), (0, -10), (6, 8), (-6, 8), (6, -8), (-6, -8)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>മൂന്ന് ബിന്ദുക്കളുടെ സ്ഥാനവും അകല വർഗ്ഗം പരിശോധിച്ച് കണ്ടെത്തൽ: 2 മാർക്ക്</li>
  <li>അക്ഷങ്ങളിലെ 4 ബിന്ദുക്കൾ എഴുതൽ: 1 മാർക്ക്</li>
  <li>പൂർണ്ണസംഖ്യാ സൂചകങ്ങളുള്ള മറ്റ് 4 ബിന്ദുക്കൾ എഴുതൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Radius squared is $r^2 = 10^2 = 100$. Distance squared from origin is $x^2 + y^2$.',
      'For $(6, 9)$: $6^2 + 9^2 = 117 > 100 \\implies$ outside the circle.',
      'For $(5, 9)$: $5^2 + 9^2 = 106 > 100 \\implies$ outside the circle.',
      'For $(6, 8)$: $6^2 + 8^2 = 100 = r^2 \\implies$ on the circle.',
      '8 integer points on circle: $(10, 0), (-10, 0), (0, 10), (0, -10), (6, 8), (-6, 8), (6, -8), (-6, -8)$.'
    ],
    steps_ml: [
      'ആരത്തിന്റെ വർഗ്ഗം $r^2 = 10^2 = 100$. ആധാരബിന്ദുവിൽ നിന്നുള്ള അകലത്തിന്റെ വർഗ്ഗം $x^2 + y^2$.',
      '$(6, 9)$: $36 + 81 = 117 > 100 \\implies$ വൃത്തത്തിന് പുറത്ത്.',
      '$(5, 9)$: $25 + 81 = 106 > 100 \\implies$ വൃത്തത്തിന് പുറത്ത്.',
      '$(6, 8)$: $36 + 64 = 100 = r^2 \\implies$ വൃത്തത്തിൽ തന്നെ.',
      'വൃത്തത്തിലെ 8 ബിന്ദുക്കൾ: $(10, 0), (-10, 0), (0, 10), (0, -10), (6, 8), (-6, 8), (6, -8), (-6, -8)$.'
    ],
    rubric_en: [
      'Checking distance squared and classifying all 3 points: 2 marks',
      'Writing 4 axis intercepts: 1 mark',
      'Writing 4 additional integer points from (6, 8) signs: 1 mark'
    ],
    rubric_ml: [
      'മൂന്ന് ബിന്ദുക്കളുടെ സ്ഥാനവും അകല വർഗ്ഗം പരിശോധിച്ച് കണ്ടെത്തൽ: 2 മാർക്ക്',
      'അക്ഷങ്ങളിലെ 4 ബിന്ദുക്കൾ എഴുതൽ: 1 മാർക്ക്',
      'പൂർണ്ണസംഖ്യാ സൂചകങ്ങളുള്ള മറ്റ് 4 ബിന്ദുക്കൾ എഴുതൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) (6, 9) outside, (5, 9) outside, (6, 8) on circle; (b) (10, 0), (-10, 0), (0, 10), (0, -10), (6, 8), (-6, 8), (6, -8), (-6, -8)',
    answer_ml: '(a) (6, 9) പുറത്ത്, (5, 9) പുറത്ത്, (6, 8) വൃത്തത്തിൽ; (b) (10, 0), (-10, 0), (0, 10), (0, -10), (6, 8), (-6, 8), (6, -8), (-6, -8)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.4 Circumcircle & Axis Intersections (SCERT Textbook p.150)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.6.6',
    concept: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Solve the following coordinate geometry problems (SCERT textbook questions):\\n(a) A circle has centre $(1, 1)$ and radius 2. Find the coordinates of the points where this circle intersects the $x$-axis and the $y$-axis.\\n(b) The vertices of a triangle are $O(0, 0)$, $A(4, 0)$, and $B(1, 3)$. Calculate the coordinates of the circumcentre and the length of the circumradius.',
    prompt_ml: 'താഴെ പറയുന്ന പ്രശ്നങ്ങൾ നിർദ്ധാരണം ചെയ്യുക:\\n(a) കേന്ദ്രം $(1, 1)$ ഉം ആരം 2 ഉം ആയ ഒരു വൃത്തം $x$-അക്ഷത്തെയും $y$-അക്ഷത്തെയും മുറിച്ചുകടക്കുന്ന ബിന്ദുക്കളുടെ സൂചകസംഖ്യകൾ കാണുക.\\n(b) ഒരു ത്രികോണത്തിന്റെ ശീർഷങ്ങൾ $O(0, 0), A(4, 0), B(1, 3)$ എന്നിവയാണ്. ഇതിന്റെ പരിവൃത്ത കേന്ദ്രത്തിന്റെ സൂചകസംഖ്യകളും പരിവൃത്ത ആരവും കണക്കാക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li><b>Intersections of circle $(x - 1)^2 + (y - 1)^2 = 2^2 = 4$:</b>
  <ul>
    <li>With $x$-axis ($y = 0$):
    $$(x - 1)^2 + (0 - 1)^2 = 4 \\implies (x - 1)^2 + 1 = 4 \\implies (x - 1)^2 = 3$$
    $$x - 1 = \\pm\\sqrt{3} \\implies x = 1 \\pm \\sqrt{3}$$
    Intersection points on $x$-axis: $(1 + \\sqrt{3}, 0)$ and $(1 - \\sqrt{3}, 0)$.</li>
    <li>With $y$-axis ($x = 0$):
    $$(0 - 1)^2 + (y - 1)^2 = 4 \\implies 1 + (y - 1)^2 = 4 \\implies (y - 1)^2 = 3$$
    $$y - 1 = \\pm\\sqrt{3} \\implies y = 1 \\pm \\sqrt{3}$$
    Intersection points on $y$-axis: $(0, 1 + \\sqrt{3})$ and $(0, 1 - \\sqrt{3})$.</li>
  </ul></li>
  <li><b>Circumcentre of $\\triangle OAB$ with $O(0, 0), A(4, 0), B(1, 3)$:</b>
  Let circumcentre be $P(x, y)$. Since $P$ is equidistant from all vertices:
  $$OP^2 = AP^2 \\implies x^2 + y^2 = (x - 4)^2 + y^2 = x^2 - 8x + 16 + y^2$$
  $$-8x + 16 = 0 \\implies 8x = 16 \\implies x = 2$$
  Now equating $OP^2 = BP^2$:
  $$x^2 + y^2 = (x - 1)^2 + (y - 3)^2$$
  Substitute $x = 2$:
  $$2^2 + y^2 = (2 - 1)^2 + (y - 3)^2 \\implies 4 + y^2 = 1 + y^2 - 6y + 9$$
  $$4 = 10 - 6y \\implies 6y = 6 \\implies y = 1$$
  So the circumcentre is $(2, 1)$.</li>
  <li><b>Circumradius:</b>
  $$R = OP = \\sqrt{2^2 + 1^2} = \\sqrt{4 + 1} = \\sqrt{5}\\text{ units}$$</li>
</ol>
<p><b>Final Answer:</b> (a) x-axis: (1 ± √3, 0), y-axis: (0, 1 ± √3); (b) Circumcentre: (2, 1), Circumradius: √5 units</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Finding both x-axis intercepts: 1 mark</li>
  <li>Finding both y-axis intercepts: 1 mark</li>
  <li>Finding circumcentre (2, 1): 1 mark</li>
  <li>Finding circumradius √5: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li><b>വൃത്തത്തിന്റെ അക്ഷങ്ങളുമായുള്ള സംഗമബിന്ദുക്കൾ:</b>
  വൃത്തത്തിന്റെ സമവാക്യം $(x - 1)^2 + (y - 1)^2 = 4$.
  <ul>
    <li>$x$-അക്ഷവുമായി ($y = 0$):
    $$(x - 1)^2 + (0 - 1)^2 = 4 \\implies (x - 1)^2 + 1 = 4 \\implies (x - 1)^2 = 3$$
    $$x = 1 \\pm \\sqrt{3}$$
    ബിന്ദുക്കൾ: $(1 + \\sqrt{3}, 0), (1 - \\sqrt{3}, 0)$.</li>
    <li>$y$-അക്ഷവുമായി ($x = 0$):
    $$(0 - 1)^2 + (y - 1)^2 = 4 \\implies (y - 1)^2 = 3 \\implies y = 1 \\pm \\sqrt{3}$$
    ബിന്ദുക്കൾ: $(0, 1 + \\sqrt{3}), (0, 1 - \\sqrt{3})$.</li>
  </ul></li>
  <li><b>പരിവൃത്ത കേന്ദ്രം $P(x, y)$:</b>
  $OP = AP$ ആയതിനാൽ:
  $$x^2 + y^2 = (x - 4)^2 + y^2 \\implies 8x = 16 \\implies x = 2$$
  $OP = BP$ ആയതിനാൽ:
  $$x^2 + y^2 = (x - 1)^2 + (y - 3)^2$$
  $x = 2$ നൽകുമ്പോൾ:
  $$4 + y^2 = 1 + y^2 - 6y + 9 \\implies 6y = 6 \\implies y = 1$$
  പരിവൃത്ത കേന്ദ്രം $(2, 1)$ ആണ്.</li>
  <li><b>പരിവൃത്ത ആരം:</b>
  $$R = OP = \\sqrt{2^2 + 1^2} = \\sqrt{5}\\text{ യൂണിറ്റ്}$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) x-അക്ഷത്തിൽ (1 ± √3, 0), y-അക്ഷത്തിൽ (0, 1 ± √3); (b) പരിവൃത്ത കേന്ദ്രം: (2, 1), പരിവൃത്ത ആരം: √5 യൂണിറ്റ്</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>$x$-അക്ഷത്തിലെ സംഗമബിന്ദുക്കൾ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>$y$-അക്ഷത്തിലെ സംഗമബിന്ദുക്കൾ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>പരിവൃത്ത കേന്ദ്രം $(2, 1)$ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>പരിവൃത്ത ആരം $\\sqrt{5}$ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Circle equation: $(x - 1)^2 + (y - 1)^2 = 4$.',
      'On $x$-axis ($y = 0$): $(x - 1)^2 = 3 \\implies x = 1 \\pm \\sqrt{3}$. Intercepts are $(1 \\pm \\sqrt{3}, 0)$.',
      'On $y$-axis ($x = 0$): $(y - 1)^2 = 3 \\implies y = 1 \\pm \\sqrt{3}$. Intercepts are $(0, 1 \\pm \\sqrt{3})$.',
      'Circumcentre $P(x, y)$ satisfies $OP = AP \\implies x = 2$. Then $OP = BP \\implies y = 1$. Circumcentre is $(2, 1)$.',
      'Circumradius $R = \\sqrt{2^2 + 1^2} = \\sqrt{5}$ units.'
    ],
    steps_ml: [
      'വൃത്ത സമവാക്യം: $(x - 1)^2 + (y - 1)^2 = 4$.',
      '$x$-അക്ഷത്തിൽ ($y = 0$): $(x - 1)^2 = 3 \\implies x = 1 \\pm \\sqrt{3}$. ബിന്ദുക്കൾ $(1 \\pm \\sqrt{3}, 0)$.',
      '$y$-അക്ഷത്തിൽ ($x = 0$): $(y - 1)^2 = 3 \\implies y = 1 \\pm \\sqrt{3}$. ബിന്ദുക്കൾ $(0, 1 \\pm \\sqrt{3})$.',
      'പരിവൃത്ത കേന്ദ്രം $P(x, y)$: $OP = AP \\implies x = 2$, $OP = BP \\implies y = 1$. കേന്ദ്രം $(2, 1)$.',
      'പരിവൃത്ത ആരം $R = \\sqrt{2^2 + 1^2} = \\sqrt{5}$ യൂണിറ്റ്.'
    ],
    rubric_en: [
      'Finding both x-axis intercepts: 1 mark',
      'Finding both y-axis intercepts: 1 mark',
      'Finding circumcentre (2, 1): 1 mark',
      'Finding circumradius √5: 1 mark'
    ],
    rubric_ml: [
      '$x$-അക്ഷത്തിലെ സംഗമബിന്ദുക്കൾ കണ്ടെത്തൽ: 1 മാർക്ക്',
      '$y$-അക്ഷത്തിലെ സംഗമബിന്ദുക്കൾ കണ്ടെത്തൽ: 1 മാർക്ക്',
      'പരിവൃത്ത കേന്ദ്രം $(2, 1)$ കണ്ടെത്തൽ: 1 മാർക്ക്',
      'പരിവൃത്ത ആരം $\\sqrt{5}$ കണ്ടെത്തൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) x-axis: (1 ± √3, 0), y-axis: (0, 1 ± √3); (b) Circumcentre: (2, 1), Circumradius: √5 units',
    answer_ml: '(a) x-അക്ഷത്തിൽ (1 ± √3, 0), y-അക്ഷത്തിൽ (0, 1 ± √3); (b) പരിവൃത്ത കേന്ദ്രം: (2, 1), പരിവൃത്ത ആരം: √5 യൂണിറ്റ്'
  }
);
