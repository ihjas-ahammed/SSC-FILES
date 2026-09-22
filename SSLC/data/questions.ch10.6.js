/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 6 — Coordinates (സൂചകസംഖ്യകൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
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
    prompt_ml: '(-4, 7) എന്ന ബിന്ദു ഏത് പാദത്തിലാണ് സ്ഥിതിചെയ്യുന്നത്?',
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
    tested_ml: 'x-അക്ഷത്തിലെ ബിന്ദുവിന്റെ പ്രത്യേകത: y = 0.'
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
    prompt_en: 'The opposite corners of a rectangle with sides parallel to the axes are $(2, 1)$ and $(7, 5)$. What is the perimeter of this rectangle?',
    prompt_ml: 'അക്ഷങ്ങൾക്ക് സമാന്തരമായ വശങ്ങളുള്ള ഒരു ചതുരത്തിന്റെ എതിർ ശീർഷങ്ങൾ $(2, 1), (7, 5)$ ആണ്. ഈ ചതുരത്തിന്റെ ചുറ്റളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '18 units' },
      { k: 'B', t: '20 units' },
      { k: 'C', t: '9 units' },
      { k: 'D', t: '24 units' }
    ],
    options_ml: [
      { k: 'A', t: '18 യൂണിറ്റ്' },
      { k: 'B', t: '20 യൂണിറ്റ്' },
      { k: 'C', t: '9 യൂണിറ്റ്' },
      { k: 'D', t: '24 യൂണിറ്റ്' }
    ],
    answer: 'A',
    solution_en: 'Length $= |7 - 2| = 5$, Width $= |5 - 1| = 4$. Perimeter $= 2(\\text{length} + \\text{width}) = 2(5 + 4) = 2 \\times 9 = 18$ units.',
    solution_ml: 'നീളം $= 7 - 2 = 5$, വീതി $= 5 - 1 = 4$. ചുറ്റളവ് $= 2(5 + 4) = 18$ യൂണിറ്റ്.',
    tested_en: 'Dimensions and perimeter of an axis-aligned rectangle.',
    tested_ml: 'അക്ഷങ്ങൾക്ക് സമാന്തരമായ ചതുരത്തിന്റെ അളവുകളും ചുറ്റളവും.'
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
    prompt_en: 'What is the distance of the point $(6, -8)$ from the origin $(0, 0)$?',
    prompt_ml: '$(6, -8)$ എന്ന ബിന്ദുവിന് ആധാരബിന്ദുവായ $(0, 0)$ ൽ നിന്നുള്ള അകലം എത്ര?',
    options_en: [
      { k: 'A', t: '10 units' },
      { k: 'B', t: '14 units' },
      { k: 'C', t: '2 units' },
      { k: 'D', t: '48 units' }
    ],
    options_ml: [
      { k: 'A', t: '10 യൂണിറ്റ്' },
      { k: 'B', t: '14 യൂണിറ്റ്' },
      { k: 'C', t: '2 യൂണിറ്റ്' },
      { k: 'D', t: '48 യൂണിറ്റ്' }
    ],
    answer: 'A',
    solution_en: 'Distance from origin $d = \\sqrt{x^2 + y^2} = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ units.',
    solution_ml: 'ആധാരബിന്ദുവിൽ നിന്നുള്ള അകലം $d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ യൂണിറ്റ്.',
    tested_en: 'Distance of a point from the origin.',
    tested_ml: 'ആധാരബിന്ദുവിൽ നിന്നുള്ള അകലം കാണൽ.'
  },
  {
    id: 'obj.m10.6.6',
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
      { k: 'C', t: '$\\sqrt{7}$ units' },
      { k: 'D', t: '25 units' }
    ],
    options_ml: [
      { k: 'A', t: '5 യൂണിറ്റ്' },
      { k: 'B', t: '7 യൂണിറ്റ്' },
      { k: 'C', t: '$\\sqrt{7}$ യൂണിറ്റ്' },
      { k: 'D', t: '25 യൂണിറ്റ്' }
    ],
    answer: 'A',
    solution_en: '$d = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ units.',
    solution_ml: '$d = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ യൂണിറ്റ്.',
    tested_en: 'Applying the general distance formula d = √((x2-x1)² + (y2-y1)²).',
    tested_ml: 'അകല സൂത്രവാക്യം പ്രയോഗിക്കൽ.'
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
    time: 40,
    prompt_en: 'A circle has its centre at the origin $(0, 0)$ and a radius of 5 units. Which of the following points lies OUTSIDE the circle?',
    prompt_ml: 'ആധാരബിന്ദു കേന്ദ്രവും ആരം 5 യൂണിറ്റുമുള്ള ഒരു വൃത്തത്തിന് പുറത്ത് സ്ഥിതിചെയ്യുന്ന ബിന്ദു ഏത്?',
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
    prompt_en: 'A square has its centre at the origin $(0, 0)$, and its sides are parallel to the coordinate axes. The side length of the square is 8 units.\\n(a) What is the distance from the centre to each side of the square?\\n(b) Write the coordinates of all four vertices of the square.\\n(c) Find the length of the diagonals of this square.',
    prompt_ml: 'ആധാരബിന്ദുവായ $(0, 0)$ കേന്ദ്രമായി അക്ഷങ്ങൾക്ക് സമാന്തരമായ വശങ്ങളുള്ള ഒരു സമചതുരമുണ്ട്. ഇതിന്റെ ഒരു വശത്തിന്റെ നീളം 8 യൂണിറ്റാണ്.\\n(a) കേന്ദ്രത്തിൽ നിന്ന് സമചതുരത്തിന്റെ ഓരോ വശത്തേക്കുമുള്ള അകലം എത്ര?\\n(b) സമചതുരത്തിന്റെ നാല് ശീർഷങ്ങളുടെയും സൂചകസംഖ്യകൾ എഴുതുക.\\n(c) ഈ സമചതുരത്തിന്റെ വികർണ്ണങ്ങളുടെ നീളം കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Since the centre is $(0, 0)$ and total side length is 8, the distance from the centre to each side is $\\frac{8}{2} = 4$ units.</li>\n  <li>The four vertices are symmetrically located in the four quadrants at distances of 4 units along both axes: $(4, 4)$, $(-4, 4)$, $(-4, -4)$, and $(4, -4)$.</li>\n  <li>The diagonal connects opposite vertices, e.g., $(-4, -4)$ and $(4, 4)$. Length $d = \\sqrt{(4 - (-4))^2 + (4 - (-4))^2} = \\sqrt{8^2 + 8^2} = \\sqrt{64 + 64} = \\sqrt{128} = 8\\sqrt{2}$ units.</li>\n  <li>Both diagonals are equal to $8\\sqrt{2}$ units.</li>\n</ol>\n<p><b>Final Answer:</b> (a) 4 units; (b) (4, 4), (-4, 4), (-4, -4), (4, -4); (c) 8√2 units</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Half-width/distance from center: 1 mark</li>\n  <li>Four vertices written correctly: 1.5 marks</li>\n  <li>Diagonal length calculation: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>കേന്ദ്രത്തിൽ നിന്ന് ഓരോ വശത്തേക്കുമുള്ള അകലം $= \\frac{8}{2} = 4$ യൂണിറ്റ്.</li>\n  <li>നാല് ശീർഷങ്ങളുടെ സൂചകസംഖ്യകൾ: $(4, 4), (-4, 4), (-4, -4), (4, -4)$.</li>\n  <li>വികർണ്ണത്തിന്റെ നീളം $d = \\sqrt{(4 - (-4))^2 + (4 - (-4))^2} = \\sqrt{8^2 + 8^2} = 8\\sqrt{2}$ യൂണിറ്റ്.</li>\n  <li>രണ്ട് വികർണ്ണങ്ങളുടെയും നീളം $8\\sqrt{2}$ യൂണിറ്റ് ആണ്.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 4 യൂണിറ്റ്; (b) (4, 4), (-4, 4), (-4, -4), (4, -4); (c) 8√2 യൂണിറ്റ്</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം: 1 മാർക്ക്</li>\n  <li>നാല് ശീർഷങ്ങൾ ശരിയായി എഴുതൽ: 1.5 മാർക്ക്</li>\n  <li>വികർണ്ണത്തിന്റെ നീളം കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Since the centre is $(0, 0)$ and total side length is 8, the distance from the centre to each side is $\\frac{8}{2} = 4$ units.',
      'The four vertices are symmetrically located in the four quadrants at distances of 4 units along both axes: $(4, 4)$, $(-4, 4)$, $(-4, -4)$, and $(4, -4)$.',
      'The diagonal connects opposite vertices, e.g., $(-4, -4)$ and $(4, 4)$. Length $d = \\sqrt{(4 - (-4))^2 + (4 - (-4))^2} = \\sqrt{8^2 + 8^2} = \\sqrt{64 + 64} = \\sqrt{128} = 8\\sqrt{2}$ units.',
      'Both diagonals are equal to $8\\sqrt{2}$ units.'
    ],
    steps_ml: [
      'കേന്ദ്രത്തിൽ നിന്ന് ഓരോ വശത്തേക്കുമുള്ള അകലം $= \\frac{8}{2} = 4$ യൂണിറ്റ്.',
      'നാല് ശീർഷങ്ങളുടെ സൂചകസംഖ്യകൾ: $(4, 4), (-4, 4), (-4, -4), (4, -4)$.',
      'വികർണ്ണത്തിന്റെ നീളം $d = \\sqrt{(4 - (-4))^2 + (4 - (-4))^2} = \\sqrt{8^2 + 8^2} = 8\\sqrt{2}$ യൂണിറ്റ്.',
      'രണ്ട് വികർണ്ണങ്ങളുടെയും നീളം $8\\sqrt{2}$ യൂണിറ്റ് ആണ്.'
    ],
    rubric_en: [
      'Half-width/distance from center: 1 mark',
      'Four vertices written correctly: 1.5 marks',
      'Diagonal length calculation: 1.5 marks'
    ],
    rubric_ml: [
      'കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം: 1 മാർക്ക്',
      'നാല് ശീർഷങ്ങൾ ശരിയായി എഴുതൽ: 1.5 മാർക്ക്',
      'വികർണ്ണത്തിന്റെ നീളം കാണൽ: 1.5 മാർക്ക്'
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
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Since sides are parallel to axes, vertex $B$ shares the $x$-coordinate of $C$ and $y$-coordinate of $A$: $B(7, 2)$. Vertex $D$ shares the $x$-coordinate of $A$ and $y$-coordinate of $C$: $D(1, 6)$.</li>\n  <li>Side length $AB$ (horizontal) $= |7 - 1| = 6$ units. Side length $BC$ (vertical) $= |6 - 2| = 4$ units.</li>\n  <li>Area of rectangle $= \\text{length} \\times \\text{width} = 6 \\times 4 = 24$ square units.</li>\n  <li>Perimeter $= 2(\\text{length} + \\text{width}) = 2(6 + 4) = 20$ units.</li>\n</ol>\n<p><b>Final Answer:</b> (a) B(7, 2), D(1, 6); (b) AB = 6, BC = 4; (c) Area = 24 sq units, Perimeter = 20 units</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Coordinates of B and D: 1.5 marks</li>\n  <li>Lengths of sides AB and BC: 1 mark</li>\n  <li>Area and perimeter: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>വശങ്ങൾ അക്ഷങ്ങൾക്ക് സമാന്തരമായതിനാൽ $B(7, 2), D(1, 6)$ ആണ് മറ്റ് രണ്ട് ശീർഷങ്ങൾ.</li>\n  <li>തിരശ്ചീന വശം $AB = 7 - 1 = 6$ യൂണിറ്റ്. ലംബ വശം $BC = 6 - 2 = 4$ യൂണിറ്റ്.</li>\n  <li>പരപ്പളവ് $= 6 \\times 4 = 24$ ചതുരശ്ര യൂണിറ്റ്.</li>\n  <li>ചുറ്റളവ് $= 2(6 + 4) = 20$ യൂണിറ്റ്.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) B(7, 2), D(1, 6); (b) AB = 6, BC = 4; (c) പരപ്പളവ് = 24 ചതുരശ്ര യൂണിറ്റ്, ചുറ്റളവ് = 20 യൂണിറ്റ്</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>B, D എന്നിവയുടെ സൂചകസംഖ്യകൾ: 1.5 മാർക്ക്</li>\n  <li>AB, BC എന്നിവയുടെ നീളം: 1 മാർക്ക്</li>\n  <li>പരപ്പളവും ചുറ്റളവും: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Since sides are parallel to axes, vertex $B$ shares the $x$-coordinate of $C$ and $y$-coordinate of $A$: $B(7, 2)$. Vertex $D$ shares the $x$-coordinate of $A$ and $y$-coordinate of $C$: $D(1, 6)$.',
      'Side length $AB$ (horizontal) $= |7 - 1| = 6$ units. Side length $BC$ (vertical) $= |6 - 2| = 4$ units.',
      'Area of rectangle $= \\text{length} \\times \\text{width} = 6 \\times 4 = 24$ square units.',
      'Perimeter $= 2(\\text{length} + \\text{width}) = 2(6 + 4) = 20$ units.'
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
      'Area and perimeter: 1.5 marks'
    ],
    rubric_ml: [
      'B, D എന്നിവയുടെ സൂചകസംഖ്യകൾ: 1.5 മാർക്ക്',
      'AB, BC എന്നിവയുടെ നീളം: 1 മാർക്ക്',
      'പരപ്പളവും ചുറ്റളവും: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) B(7, 2), D(1, 6); (b) AB = 6, BC = 4; (c) Area = 24 sq units, Perimeter = 20 units',
    answer_ml: '(a) B(7, 2), D(1, 6); (b) AB = 6, BC = 4; (c) പരപ്പളവ് = 24 ചതുരശ്ര യൂണിറ്റ്, ചുറ്റളവ് = 20 യൂണിറ്റ്'
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
    prompt_en: 'Find the distance between the points $A(-2, 5)$ and $B(4, -3)$.\\n(a) Write down the distance formula.\\n(b) Substitute the given coordinates into the formula.\\n(c) Simplify and find the exact distance.',
    prompt_ml: '$A(-2, 5), B(4, -3)$ എന്നീ ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണുക.\\n(a) അകലം കാണാനുള്ള സൂത്രവാക്യം എഴുതുക.\\n(b) തന്നിരിക്കുന്ന സൂചകസംഖ്യകൾ സൂത്രവാക്യത്തിൽ നൽകുക.\\n(c) ലഘൂകരിച്ച് കൃത്യമായ അകലം കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Distance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</li>\n  <li>Let $(x_1, y_1) = (-2, 5)$ and $(x_2, y_2) = (4, -3)$. Then: $x_2 - x_1 = 4 - (-2) = 6$, and $y_2 - y_1 = -3 - 5 = -8$.</li>\n  <li>$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100}$.</li>\n  <li>$d = 10$ units.</li>\n</ol>\n<p><b>Final Answer:</b> (a) d = √((x2-x1)² + (y2-y1)²); (b) √((4 - (-2))² + (-3 - 5)²); (c) 10 units</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Stating distance formula: 1 mark</li>\n  <li>Correct coordinate substitution: 1.5 marks</li>\n  <li>Correct simplification to 10 units: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>അകലം കാണാനുള്ള സൂത്രവാക്യം: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</li>\n  <li>$x_2 - x_1 = 4 - (-2) = 6$, $y_2 - y_1 = -3 - 5 = -8$.</li>\n  <li>$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100}$.</li>\n  <li>$d = 10$ യൂണിറ്റ്.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) d = √((x2-x1)² + (y2-y1)²); (b) √((4 - (-2))² + (-3 - 5)²); (c) 10 യൂണിറ്റ്</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>\n  <li>വിലകൾ ശരിയായി നൽകൽ: 1.5 മാർക്ക്</li>\n  <li>ലഘൂകരിച്ച് 10 യൂണിറ്റ് എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Distance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
      'Let $(x_1, y_1) = (-2, 5)$ and $(x_2, y_2) = (4, -3)$. Then: $x_2 - x_1 = 4 - (-2) = 6$, and $y_2 - y_1 = -3 - 5 = -8$.',
      '$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100}$.',
      '$d = 10$ units.'
    ],
    steps_ml: [
      'അകലം കാണാനുള്ള സൂത്രവാക്യം: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
      '$x_2 - x_1 = 4 - (-2) = 6$, $y_2 - y_1 = -3 - 5 = -8$.',
      '$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100}$.',
      '$d = 10$ യൂണിറ്റ്.'
    ],
    rubric_en: [
      'Stating distance formula: 1 mark',
      'Correct coordinate substitution: 1.5 marks',
      'Correct simplification to 10 units: 1.5 marks'
    ],
    rubric_ml: [
      'സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്',
      'വിലകൾ ശരിയായി നൽകൽ: 1.5 മാർക്ക്',
      'ലഘൂകരിച്ച് 10 യൂണിറ്റ് എന്ന് കണ്ടെത്തൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) d = √((x2-x1)² + (y2-y1)²); (b) √((4 - (-2))² + (-3 - 5)²); (c) 10 units',
    answer_ml: '(a) d = √((x2-x1)² + (y2-y1)²); (b) √((4 - (-2))² + (-3 - 5)²); (c) 10 യൂണിറ്റ്'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.6.4 Geometric Applications of Coordinates
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.6.4',
    concept: 'm10.6.4.geometric-applications-of-coordinates',
    sec: '10.6.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Show that the points $A(1, 1)$, $B(4, 5)$, and $C(1, 5)$ form a right-angled triangle.\\n(a) Calculate the side lengths $AB, BC$, and $CA$.\\n(b) Identify which side is the hypotenuse.\\n(c) Verify the Pythagorean relation $a^2 + b^2 = c^2$.',
    prompt_ml: '$A(1, 1), B(4, 5), C(1, 5)$ എന്നീ ബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ ഒരു മട്ടത്രികോണം കിട്ടുമെന്ന് തെളിയിക്കുക.\\n(a) $AB, BC, CA$ എന്നീ വശങ്ങളുടെ നീളം കാണുക.\\n(b) ഏതാണ് കർണ്ണം എന്ന് കണ്ടെത്തുക.\\n(c) പൈതഗോറസ് ബന്ധമായ $a^2 + b^2 = c^2$ ശരിയാണെന്ന് പരിശോധിക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Calculate $BC$: $BC = |4 - 1| = 3$ units (horizontal line, $y=5$). Calculate $CA$: $CA = |5 - 1| = 4$ units (vertical line, $x=1$).</li>\n  <li>Calculate $AB$: $AB = \\sqrt{(4 - 1)^2 + (5 - 1)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ units.</li>\n  <li>The longest side is $AB = 5$, which is the hypotenuse.</li>\n  <li>Verify: $BC^2 + CA^2 = 3^2 + 4^2 = 9 + 16 = 25 = 5^2 = AB^2$. By the converse of Pythagoras theorem, $\\triangle ABC$ is right-angled at $C$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) BC = 3, CA = 4, AB = 5; (b) AB is the hypotenuse; (c) 3² + 4² = 5², right-angled at C</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Calculating all three side lengths: 2 marks</li>\n  <li>Identifying hypotenuse: 0.5 mark</li>\n  <li>Pythagorean check and conclusion: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>$BC = 4 - 1 = 3$ യൂണിറ്റ്. $CA = 5 - 1 = 4$ യൂണിറ്റ്.</li>\n  <li>$AB = \\sqrt{(4 - 1)^2 + (5 - 1)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ യൂണിറ്റ്.</li>\n  <li>ഏറ്റവും വലിയ വശം $AB = 5$ ആണ് കർണ്ണം.</li>\n  <li>$BC^2 + CA^2 = 3^2 + 4^2 = 9 + 16 = 25 = 5^2 = AB^2$. പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം ഇത് $C$ ൽ മട്ടകോണുള്ള മട്ടത്രികോണമാണ്.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) BC = 3, CA = 4, AB = 5; (b) AB ആണ് കർണ്ണം; (c) 3² + 4² = 5², C ൽ മട്ടകോൺ</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>മൂന്ന് വശങ്ങളുടെയും നീളം കാണൽ: 2 മാർക്ക്</li>\n  <li>കർണ്ണം കണ്ടെത്തൽ: 0.5 മാർക്ക്</li>\n  <li>പൈതഗോറസ് പരിശോധനയും നിഗമനവും: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Calculate $BC$: $BC = |4 - 1| = 3$ units (horizontal line, $y=5$). Calculate $CA$: $CA = |5 - 1| = 4$ units (vertical line, $x=1$).',
      'Calculate $AB$: $AB = \\sqrt{(4 - 1)^2 + (5 - 1)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ units.',
      'The longest side is $AB = 5$, which is the hypotenuse.',
      'Verify: $BC^2 + CA^2 = 3^2 + 4^2 = 9 + 16 = 25 = 5^2 = AB^2$. By the converse of Pythagoras theorem, $\\triangle ABC$ is right-angled at $C$.'
    ],
    steps_ml: [
      '$BC = 4 - 1 = 3$ യൂണിറ്റ്. $CA = 5 - 1 = 4$ യൂണിറ്റ്.',
      '$AB = \\sqrt{(4 - 1)^2 + (5 - 1)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ യൂണിറ്റ്.',
      'ഏറ്റവും വലിയ വശം $AB = 5$ ആണ് കർണ്ണം.',
      '$BC^2 + CA^2 = 3^2 + 4^2 = 9 + 16 = 25 = 5^2 = AB^2$. പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം ഇത് $C$ ൽ മട്ടകോണുള്ള മട്ടത്രികോണമാണ്.'
    ],
    rubric_en: [
      'Calculating all three side lengths: 2 marks',
      'Identifying hypotenuse: 0.5 mark',
      'Pythagorean check and conclusion: 1.5 marks'
    ],
    rubric_ml: [
      'മൂന്ന് വശങ്ങളുടെയും നീളം കാണൽ: 2 മാർക്ക്',
      'കർണ്ണം കണ്ടെത്തൽ: 0.5 മാർക്ക്',
      'പൈതഗോറസ് പരിശോധനയും നിഗമനവും: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) BC = 3, CA = 4, AB = 5; (b) AB is the hypotenuse; (c) 3² + 4² = 5², right-angled at C',
    answer_ml: '(a) BC = 3, CA = 4, AB = 5; (b) AB ആണ് കർണ്ണം; (c) 3² + 4² = 5², C ൽ മട്ടകോൺ'
  }
);
