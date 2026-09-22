/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 9 — Geometry and Algebra (ജ്യാമിതിയും ബീജഗണിതവും)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.9.1 Section Formula & Ratio Division
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.9.1',
    concept: 'm10.9.1.section-formula-and-ratio-division',
    sec: '10.9.1',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What are the coordinates of the point that divides the line segment joining $(1, 3)$ and $(4, 6)$ in the ratio $2 : 1$ internally?',
    prompt_ml: '$(1, 3), (4, 6)$ എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയെ $2 : 1$ എന്ന അനുപാതത്തിൽ വിഭജിക്കുന്ന ബിന്ദുവിന്റെ സൂചകസംഖ്യകൾ ഏവ?',
    options_en: [
      { k: 'A', t: '$(3, 5)$' },
      { k: 'B', t: '$(2, 4)$' },
      { k: 'C', t: '$(2.5, 4.5)$' },
      { k: 'D', t: '$(3, 4)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(3, 5)$' },
      { k: 'B', t: '$(2, 4)$' },
      { k: 'C', t: '$(2.5, 4.5)$' },
      { k: 'D', t: '$(3, 4)$' }
    ],
    answer: 'A',
    solution_en: '$x = \\frac{2(4) + 1(1)}{2 + 1} = \\frac{8 + 1}{3} = 3$. $y = \\frac{2(6) + 1(3)}{2 + 1} = \\frac{12 + 3}{3} = 5$. The point is $(3, 5)$.',
    solution_ml: '$x = \\frac{2(4) + 1(1)}{3} = 3$, $y = \\frac{2(6) + 1(3)}{3} = 5$. ബിന്ദു $(3, 5)$ ആണ്.',
    tested_en: 'Applying the section formula for 2:1 division.',
    tested_ml: 'രേഖാഖണ്ഡ വിഭജന സൂത്രവാക്യം പ്രയോഗിക്കൽ.'
  },
  {
    id: 'obj.m10.9.2',
    concept: 'm10.9.1.section-formula-and-ratio-division',
    sec: '10.9.1',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'In what ratio does the $y$-axis divide the line segment joining $(-3, 4)$ and $(6, 7)$?',
    prompt_ml: '$(-3, 4), (6, 7)$ എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയെ $y$-അക്ഷം വിഭജിക്കുന്ന അനുപാതം ഏത്?',
    options_en: [
      { k: 'A', t: '$1 : 2$' },
      { k: 'B', t: '$2 : 1$' },
      { k: 'C', t: '$3 : 4$' },
      { k: 'D', t: '$4 : 7$' }
    ],
    options_ml: [
      { k: 'A', t: '$1 : 2$' },
      { k: 'B', t: '$2 : 1$' },
      { k: 'C', t: '$3 : 4$' },
      { k: 'D', t: '$4 : 7$' }
    ],
    answer: 'A',
    solution_en: 'On the $y$-axis, $x = 0$. Using the ratio $k : 1$, $0 = \\frac{k(6) + 1(-3)}{k + 1} \\implies 6k - 3 = 0 \\implies k = \\frac{3}{6} = \\frac{1}{2}$. Ratio is $1 : 2$.',
    solution_ml: '$y$-അക്ഷത്തിൽ $x = 0$ ആണ്. $6k - 3 = 0 \\implies k = 1/2$. അനുപാതം $1 : 2$.',
    tested_en: 'Finding the ratio of division by an axis.',
    tested_ml: 'അക്ഷം വരയെ വിഭജിക്കുന്ന അനുപാതം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.2 Midpoint Formula & Triangle Centroid
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.9.3',
    concept: 'm10.9.2.midpoint-and-centroid',
    sec: '10.9.2',
    type: 'MCQ',
    marks: 1,
    time: 25,
    prompt_en: 'What is the midpoint of the line segment joining the points $(-4, 6)$ and $(8, 2)$?',
    prompt_ml: '$(-4, 6), (8, 2)$ എന്നീ ബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വരയുടെ മധ്യബിന്ദു ഏത്?',
    options_en: [
      { k: 'A', t: '$(2, 4)$' },
      { k: 'B', t: '$(4, 4)$' },
      { k: 'C', t: '$(6, 4)$' },
      { k: 'D', t: '$(2, 2)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(2, 4)$' },
      { k: 'B', t: '$(4, 4)$' },
      { k: 'C', t: '$(6, 4)$' },
      { k: 'D', t: '$(2, 2)$' }
    ],
    answer: 'A',
    solution_en: 'Midpoint $M = \\left(\\frac{-4 + 8}{2}, \\frac{6 + 2}{2}\\right) = \\left(\\frac{4}{2}, \\frac{8}{2}\\right) = (2, 4)$.',
    solution_ml: 'മധ്യബിന്ദു $M = \\left(\\frac{-4 + 8}{2}, \\frac{6 + 2}{2}\\right) = (2, 4)$.',
    tested_en: 'Midpoint formula.',
    tested_ml: 'മധ്യബിന്ദു സൂത്രവാക്യം.'
  },
  {
    id: 'obj.m10.9.4',
    concept: 'm10.9.2.midpoint-and-centroid',
    sec: '10.9.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The vertices of a triangle are $(1, 2)$, $(3, 8)$, and $(8, 5)$. What are the coordinates of its centroid?',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ ശീർഷങ്ങൾ $(1, 2), (3, 8), (8, 5)$ ആണ്. ഇതിന്റെ മധ്യകേന്ദ്രത്തിന്റെ സൂചകസംഖ്യകൾ ഏവ?',
    options_en: [
      { k: 'A', t: '$(4, 5)$' },
      { k: 'B', t: '$(6, 7.5)$' },
      { k: 'C', t: '$(3, 5)$' },
      { k: 'D', t: '$(4, 6)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(4, 5)$' },
      { k: 'B', t: '$(6, 7.5)$' },
      { k: 'C', t: '$(3, 5)$' },
      { k: 'D', t: '$(4, 6)$' }
    ],
    answer: 'A',
    solution_en: 'Centroid $G = \\left(\\frac{1 + 3 + 8}{3}, \\frac{2 + 8 + 5}{3}\\right) = \\left(\\frac{12}{3}, \\frac{15}{3}\\right) = (4, 5)$.',
    solution_ml: 'മധ്യകേന്ദ്രം $G = \\left(\\frac{1 + 3 + 8}{3}, \\frac{2 + 8 + 5}{3}\\right) = (4, 5)$.',
    tested_en: 'Centroid formula of a triangle.',
    tested_ml: 'ത്രികോണത്തിന്റെ മധ്യകേന്ദ്രം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.3 Slope of a Line
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.9.5',
    concept: 'm10.9.3.slope-of-a-line',
    sec: '10.9.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the slope of the line passing through $(3, 5)$ and $(7, 13)$?',
    prompt_ml: '$(3, 5), (7, 13)$ എന്നീ ബിന്ദുക്കളിലൂടെ കടന്നുപോകുന്ന വരയുടെ ചരിവ് എത്ര?',
    options_en: [
      { k: 'A', t: '2' },
      { k: 'B', t: '4' },
      { k: 'C', t: '$\\frac{1}{2}$' },
      { k: 'D', t: '8' }
    ],
    options_ml: [
      { k: 'A', t: '2' },
      { k: 'B', t: '4' },
      { k: 'C', t: '$\\frac{1}{2}$' },
      { k: 'D', t: '8' }
    ],
    answer: 'A',
    solution_en: 'Slope $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 5}{7 - 3} = \\frac{8}{4} = 2$.',
    solution_ml: 'ചരിവ് $m = \\frac{13 - 5}{7 - 3} = \\frac{8}{4} = 2$.',
    tested_en: 'Calculating slope of a line from two points.',
    tested_ml: 'രണ്ട് ബിന്ദുക്കൾ തന്നാൽ വരയുടെ ചരിവ് കാണൽ.'
  },
  {
    id: 'obj.m10.9.6',
    concept: 'm10.9.3.slope-of-a-line',
    sec: '10.9.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If a line has a slope of $-\\frac{3}{4}$, what is the slope of any line perpendicular to it?',
    prompt_ml: 'ഒരു വരയുടെ ചരിവ് $-\\frac{3}{4}$ ആയാൽ അതിന് ലംബമായ ഏതൊരു വരയുടെയും ചരിവ് എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '$\\frac{4}{3}$' },
      { k: 'B', t: '$-\\frac{4}{3}$' },
      { k: 'C', t: '$\\frac{3}{4}$' },
      { k: 'D', t: '$-\\frac{3}{4}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{4}{3}$' },
      { k: 'B', t: '$-\\frac{4}{3}$' },
      { k: 'C', t: '$\\frac{3}{4}$' },
      { k: 'D', t: '$-\\frac{3}{4}$' }
    ],
    answer: 'A',
    solution_en: 'For perpendicular lines, $m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1} = -\\frac{1}{-3/4} = \\frac{4}{3}$.',
    solution_ml: 'ലംബ വരകളിൽ $m_1 \\cdot m_2 = -1 \\implies m_2 = \\frac{4}{3}$.',
    tested_en: 'Perpendicular slope rule: negative reciprocal.',
    tested_ml: 'ലംബ വരകളുടെ ചരിവ് നിയമം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.4 Equations of Lines & Circles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.9.7',
    concept: 'm10.9.4.equations-of-line-and-circle',
    sec: '10.9.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the centre and radius of the circle with equation $(x - 4)^2 + (y + 1)^2 = 49$?',
    prompt_ml: '$(x - 4)^2 + (y + 1)^2 = 49$ എന്ന വൃത്തത്തിന്റെ കേന്ദ്രവും ആരവും ഏവ?',
    options_en: [
      { k: 'A', t: 'Centre $(4, -1)$, Radius $7$' },
      { k: 'B', t: 'Centre $(-4, 1)$, Radius $7$' },
      { k: 'C', t: 'Centre $(4, -1)$, Radius $49$' },
      { k: 'D', t: 'Centre $(4, 1)$, Radius $7$' }
    ],
    options_ml: [
      { k: 'A', t: 'കേന്ദ്രം $(4, -1)$, ആരം $7$' },
      { k: 'B', t: 'കേന്ദ്രം $(-4, 1)$, ആരം $7$' },
      { k: 'C', t: 'കേന്ദ്രം $(4, -1)$, ആരം $49$' },
      { k: 'D', t: 'കേന്ദ്രം $(4, 1)$, ആരം $7$' }
    ],
    answer: 'A',
    solution_en: 'Comparing with $(x - a)^2 + (y - b)^2 = r^2$: $a = 4$, $b = -1$, and $r = \\sqrt{49} = 7$.',
    solution_ml: 'സമവാക്യവുമായി ഒത്തുനോക്കുമ്പോൾ: കേന്ദ്രം $(4, -1)$, ആരം $\\sqrt{49} = 7$.',
    tested_en: 'Extracting centre and radius from circle equation.',
    tested_ml: 'വൃത്ത സമവാക്യത്തിൽ നിന്ന് കേന്ദ്രവും ആരവും കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m10.9.8',
    concept: 'm10.9.4.equations-of-line-and-circle',
    sec: '10.9.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the equation of the straight line passing through $(0, 3)$ with a slope of 2?',
    prompt_ml: '$(0, 3)$ ലൂടെ കടന്നുപോകുന്നതും ചരിവ് 2 ഉം ആയ വരയുടെ സമവാക്യം ഏത്?',
    options_en: [
      { k: 'A', t: '$y = 2x + 3$' },
      { k: 'B', t: '$y = 3x + 2$' },
      { k: 'C', t: '$2x + y = 3$' },
      { k: 'D', t: '$y = 2x - 3$' }
    ],
    options_ml: [
      { k: 'A', t: '$y = 2x + 3$' },
      { k: 'B', t: '$y = 3x + 2$' },
      { k: 'C', t: '$2x + y = 3$' },
      { k: 'D', t: '$y = 2x - 3$' }
    ],
    answer: 'A',
    solution_en: 'Using slope-intercept form $y = mx + c$: here $m = 2$ and $y$-intercept $c = 3$, giving $y = 2x + 3$.',
    solution_ml: '$y = mx + c$ ൽ $m = 2, c = 3$ എന്ന് നൽകിയാൽ: $y = 2x + 3$.',
    tested_en: 'Slope-intercept equation of a line.',
    tested_ml: 'വരയുടെ സമവാക്യം രൂപീകരിക്കൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.9.1 Section Formula & Ratio Division
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.9.1',
    concept: 'm10.9.1.section-formula-and-ratio-division',
    sec: '10.9.1',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'The coordinates of two points are $A(2, -3)$ and $B(7, 2)$. A point $P$ lies on the line segment $AB$ such that $AP : PB = 3 : 2$.\\n(a) Write the section formula for internal division.\\n(b) Substitute the values to find the $x$-coordinate of $P$.\\n(c) Find the $y$-coordinate of $P$ and state the full coordinates of $P$.',
    prompt_ml: '$A(2, -3), B(7, 2)$ എന്നിവ രണ്ട് ബിന്ദുക്കളാണ്. $AB$ എന്ന വരയിലെ ഒരു ബിന്ദുവാണ് $P$. $AP : PB = 3 : 2$ ആണ്.\\n(a) രേഖാഖണ്ഡ വിഭജന സൂത്രവാക്യം എഴുതുക.\\n(b) വിലകൾ നൽകി $P$ യുടെ $x$-സൂചകസംഖ്യ കണ്ടെത്തുക.\\n(c) $P$ യുടെ $y$-സൂചകസംഖ്യ കണ്ടെത്തി പൂർണ്ണ സൂചകസംഖ്യകൾ എഴുതുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Section formula: $x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}$.</li>\n  <li>Here $m = 3, n = 2$, $(x_1, y_1) = (2, -3)$, $(x_2, y_2) = (7, 2)$. $x = \\frac{3(7) + 2(2)}{3 + 2} = \\frac{21 + 4}{5} = \\frac{25}{5} = 5$.</li>\n  <li>$y = \\frac{3(2) + 2(-3)}{3 + 2} = \\frac{6 - 6}{5} = \\frac{0}{5} = 0$.</li>\n  <li>The coordinates of the point are $P(5, 0)$ (which lies on the $x$-axis).</li>\n</ol>\n<p><b>Final Answer:</b> (a) ((mx2+nx1)/(m+n), (my2+ny1)/(m+n)); (b) x = 5; (c) y = 0, P(5, 0)</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Stating section formula: 1 mark</li>\n  <li>Correct x-coordinate calculation: 1.5 marks</li>\n  <li>Correct y-coordinate and point: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>സൂത്രവാക്യം: $x = \\frac{m x_2 + n x_1}{m + n}, y = \\frac{m y_2 + n y_1}{m + n}$.</li>\n  <li>$x = \\frac{3(7) + 2(2)}{5} = \\frac{25}{5} = 5$.</li>\n  <li>$y = \\frac{3(2) + 2(-3)}{5} = \\frac{0}{5} = 0$.</li>\n  <li>$P$ യുടെ സൂചകസംഖ്യകൾ: $(5, 0)$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) സൂത്രവാക്യം; (b) x = 5; (c) y = 0, P(5, 0)</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>\n  <li>x-സൂചകസംഖ്യ കാണൽ: 1.5 മാർക്ക്</li>\n  <li>y-സൂചകസംഖ്യയും ബിന്ദുവും എഴുതൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Section formula: $x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}$.',
      'Here $m = 3, n = 2$, $(x_1, y_1) = (2, -3)$, $(x_2, y_2) = (7, 2)$. $x = \\frac{3(7) + 2(2)}{3 + 2} = \\frac{21 + 4}{5} = \\frac{25}{5} = 5$.',
      '$y = \\frac{3(2) + 2(-3)}{3 + 2} = \\frac{6 - 6}{5} = \\frac{0}{5} = 0$.',
      'The coordinates of the point are $P(5, 0)$ (which lies on the $x$-axis).'
    ],
    steps_ml: [
      'സൂത്രവാക്യം: $x = \\frac{m x_2 + n x_1}{m + n}, y = \\frac{m y_2 + n y_1}{m + n}$.',
      '$x = \\frac{3(7) + 2(2)}{5} = \\frac{25}{5} = 5$.',
      '$y = \\frac{3(2) + 2(-3)}{5} = \\frac{0}{5} = 0$.',
      '$P$ യുടെ സൂചകസംഖ്യകൾ: $(5, 0)$.'
    ],
    rubric_en: [
      'Stating section formula: 1 mark',
      'Correct x-coordinate calculation: 1.5 marks',
      'Correct y-coordinate and point: 1.5 marks'
    ],
    rubric_ml: [
      'സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്',
      'x-സൂചകസംഖ്യ കാണൽ: 1.5 മാർക്ക്',
      'y-സൂചകസംഖ്യയും ബിന്ദുവും എഴുതൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) ((mx2+nx1)/(m+n), (my2+ny1)/(m+n)); (b) x = 5; (c) y = 0, P(5, 0)',
    answer_ml: '(a) സൂത്രവാക്യം; (b) x = 5; (c) y = 0, P(5, 0)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.2 Midpoint Formula & Triangle Centroid
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.9.2',
    concept: 'm10.9.2.midpoint-and-centroid',
    sec: '10.9.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Three vertices of a parallelogram $ABCD$ taken in order are $A(1, 2)$, $B(4, 3)$, and $C(6, 7)$.\\n(a) Find the midpoint of the diagonal $AC$.\\n(b) Since diagonals of a parallelogram bisect each other, what is the midpoint of diagonal $BD$?\\n(c) Find the coordinates of the fourth vertex $D(x, y)$.',
    prompt_ml: 'ഒരു സാമാന്തരികം $ABCD$ യുടെ തുടർച്ചയായ മൂന്ന് ശീർഷങ്ങൾ $A(1, 2), B(4, 3), C(6, 7)$ ആണ്.\\n(a) വികർണ്ണം $AC$ യുടെ മധ്യബിന്ദു കാണുക.\\n(b) സാമാന്തരികത്തിന്റെ വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നുവെങ്കിൽ $BD$ യുടെ മധ്യബിന്ദു ഏതാണ്?\\n(c) നാലാമത്തെ ശീർഷമായ $D(x, y)$ ന്റെ സൂചകസംഖ്യകൾ കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Midpoint of $AC$: $M = \\left(\\frac{1 + 6}{2}, \\frac{2 + 7}{2}\\right) = \\left(\\frac{7}{2}, \\frac{9}{2}\\right) = (3.5, 4.5)$.</li>\n  <li>The diagonals of a parallelogram bisect each other, so the midpoint of $BD$ must also be $\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$.</li>\n  <li>Let $D$ have coordinates $(x, y)$. Then $\\frac{4 + x}{2} = \\frac{7}{2} \\implies 4 + x = 7 \\implies x = 3$.</li>\n  <li>Similarly, $\\frac{3 + y}{2} = \\frac{9}{2} \\implies 3 + y = 9 \\implies y = 6$. The fourth vertex is $D(3, 6)$.</li>\n</ol>\n<p><b>Final Answer:</b> (a) (3.5, 4.5); (b) (3.5, 4.5); (c) D(3, 6)</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Midpoint of AC: 1.5 marks</li>\n  <li>Equating to midpoint of BD: 1 mark</li>\n  <li>Solving for coordinates of D: 1.5 marks</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>$AC$ യുടെ മധ്യബിന്ദു $M = \\left(\\frac{1 + 6}{2}, \\frac{2 + 7}{2}\\right) = \\left(\\frac{7}{2}, \\frac{9}{2}\\right)$.</li>\n  <li>വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നതിനാൽ $BD$ യുടെ മധ്യബിന്ദുവും $\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$ ആണ്.</li>\n  <li>$\\frac{4 + x}{2} = \\frac{7}{2} \\implies x = 3$.</li>\n  <li>$\\frac{3 + y}{2} = \\frac{9}{2} \\implies y = 6$. നാലാം ശീർഷം $D(3, 6)$.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) (3.5, 4.5); (b) (3.5, 4.5); (c) D(3, 6)</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>AC യുടെ മധ്യബിന്ദു കാണൽ: 1.5 മാർക്ക്</li>\n  <li>BD യുടെ മധ്യബിന്ദുവുമായി തുലനം ചെയ്യൽ: 1 മാർക്ക്</li>\n  <li>D യുടെ സൂചകസംഖ്യകൾ കാണൽ: 1.5 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Midpoint of $AC$: $M = \\left(\\frac{1 + 6}{2}, \\frac{2 + 7}{2}\\right) = \\left(\\frac{7}{2}, \\frac{9}{2}\\right) = (3.5, 4.5)$.',
      'The diagonals of a parallelogram bisect each other, so the midpoint of $BD$ must also be $\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$.',
      'Let $D$ have coordinates $(x, y)$. Then $\\frac{4 + x}{2} = \\frac{7}{2} \\implies 4 + x = 7 \\implies x = 3$.',
      'Similarly, $\\frac{3 + y}{2} = \\frac{9}{2} \\implies 3 + y = 9 \\implies y = 6$. The fourth vertex is $D(3, 6)$.'
    ],
    steps_ml: [
      '$AC$ യുടെ മധ്യബിന്ദു $M = \\left(\\frac{1 + 6}{2}, \\frac{2 + 7}{2}\\right) = \\left(\\frac{7}{2}, \\frac{9}{2}\\right)$.',
      'വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നതിനാൽ $BD$ യുടെ മധ്യബിന്ദുവും $\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$ ആണ്.',
      '$\\frac{4 + x}{2} = \\frac{7}{2} \\implies x = 3$.',
      '$\\frac{3 + y}{2} = \\frac{9}{2} \\implies y = 6$. നാലാം ശീർഷം $D(3, 6)$.'
    ],
    rubric_en: [
      'Midpoint of AC: 1.5 marks',
      'Equating to midpoint of BD: 1 mark',
      'Solving for coordinates of D: 1.5 marks'
    ],
    rubric_ml: [
      'AC യുടെ മധ്യബിന്ദു കാണൽ: 1.5 മാർക്ക്',
      'BD യുടെ മധ്യബിന്ദുവുമായി തുലനം ചെയ്യൽ: 1 മാർക്ക്',
      'D യുടെ സൂചകസംഖ്യകൾ കാണൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) (3.5, 4.5); (b) (3.5, 4.5); (c) D(3, 6)',
    answer_ml: '(a) (3.5, 4.5); (b) (3.5, 4.5); (c) D(3, 6)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.3 Slope of a Line
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.9.3',
    concept: 'm10.9.3.slope-of-a-line',
    sec: '10.9.3',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'Consider the points $A(-1, 3)$, $B(2, 5)$, and $C(8, 9)$.\\n(a) Find the slope of the line segment $AB$.\\n(b) Find the slope of the line segment $BC$.\\n(c) What can you conclude about the points $A, B$, and $C$?',
    prompt_ml: '$A(-1, 3), B(2, 5), C(8, 9)$ എന്നീ ബിന്ദുക്കൾ പരിഗണിക്കുക.\\n(a) $AB$ എന്ന രേഖാഖണ്ഡത്തിന്റെ ചരിവ് കാണുക.\\n(b) $BC$ എന്ന രേഖാഖണ്ഡത്തിന്റെ ചരിവ് കാണുക.\\n(c) $A, B, C$ എന്നീ ബിന്ദുക്കളെക്കുറിച്ച് എന്ത് നിഗമനത്തിലെത്താം?',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Slope of $AB$: $m_1 = \\frac{5 - 3}{2 - (-1)} = \\frac{2}{3}$.</li>\n  <li>Slope of $BC$: $m_2 = \\frac{9 - 5}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}$.</li>\n  <li>Since the slopes $m_1 = m_2 = \\frac{2}{3}$ and point $B$ is common to both segments, the lines $AB$ and $BC$ are the same straight line.</li>\n  <li>Conclusion: The points $A, B$, and $C$ are <b>collinear</b> (lie on the same straight line).</li>\n</ol>\n<p><b>Final Answer:</b> (a) 2/3; (b) 2/3; (c) The points A, B, and C are collinear (lie on the same line)</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Slope of AB: 1.5 marks</li>\n  <li>Slope of BC: 1.5 marks</li>\n  <li>Collinearity conclusion with justification: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>$AB$ യുടെ ചരിവ് $m_1 = \\frac{5 - 3}{2 - (-1)} = \\frac{2}{3}$.</li>\n  <li>$BC$ യുടെ ചരിവ് $m_2 = \\frac{9 - 5}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}$.</li>\n  <li>രണ്ട് ചരിവുകളും തുല്യമായതിനാലും ($m_1 = m_2 = 2/3$) $B$ എന്ന ബിന്ദു പൊതുവായതിനാലും അവ ഒരേ വരയിലാണ്.</li>\n  <li>നിഗമനം: $A, B, C$ എന്നീ ബിന്ദുക്കൾ ഒരേ നേർവരയിലാണ് (സരേഖീയ ബിന്ദുക്കൾ).</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) 2/3; (b) 2/3; (c) A, B, C ഒരേ നേർവരയിലാണ് (സരേഖീയമാണ്)</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>AB യുടെ ചരിവ് കാണൽ: 1.5 മാർക്ക്</li>\n  <li>BC യുടെ ചരിവ് കാണൽ: 1.5 മാർക്ക്</li>\n  <li>സരേഖീയ ബിന്ദുക്കൾ എന്ന നിഗമനം: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Slope of $AB$: $m_1 = \\frac{5 - 3}{2 - (-1)} = \\frac{2}{3}$.',
      'Slope of $BC$: $m_2 = \\frac{9 - 5}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}$.',
      'Since the slopes $m_1 = m_2 = \\frac{2}{3}$ and point $B$ is common to both segments, the lines $AB$ and $BC$ are the same straight line.',
      'Conclusion: The points $A, B$, and $C$ are <b>collinear</b> (lie on the same straight line).'
    ],
    steps_ml: [
      '$AB$ യുടെ ചരിവ് $m_1 = \\frac{5 - 3}{2 - (-1)} = \\frac{2}{3}$.',
      '$BC$ യുടെ ചരിവ് $m_2 = \\frac{9 - 5}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}$.',
      'രണ്ട് ചരിവുകളും തുല്യമായതിനാലും ($m_1 = m_2 = 2/3$) $B$ എന്ന ബിന്ദു പൊതുവായതിനാലും അവ ഒരേ വരയിലാണ്.',
      'നിഗമനം: $A, B, C$ എന്നീ ബിന്ദുക്കൾ ഒരേ നേർവരയിലാണ് (സരേഖീയ ബിന്ദുക്കൾ).'
    ],
    rubric_en: [
      'Slope of AB: 1.5 marks',
      'Slope of BC: 1.5 marks',
      'Collinearity conclusion with justification: 1 mark'
    ],
    rubric_ml: [
      'AB യുടെ ചരിവ് കാണൽ: 1.5 മാർക്ക്',
      'BC യുടെ ചരിവ് കാണൽ: 1.5 മാർക്ക്',
      'സരേഖീയ ബിന്ദുക്കൾ എന്ന നിഗമനം: 1 മാർക്ക്'
    ],
    answer_en: '(a) 2/3; (b) 2/3; (c) The points A, B, and C are collinear (lie on the same line)',
    answer_ml: '(a) 2/3; (b) 2/3; (c) A, B, C ഒരേ നേർവരയിലാണ് (സരേഖീയമാണ്)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.4 Equations of Lines & Circles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.9.4',
    concept: 'm10.9.4.equations-of-line-and-circle',
    sec: '10.9.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A circle has its centre at $C(2, 3)$ and passes through the point $P(5, 7)$.\\n(a) Calculate the radius $r$ of the circle.\\n(b) Write the standard equation of this circle.\\n(c) Check whether the point $(6, 6)$ lies on, inside, or outside this circle.',
    prompt_ml: 'ഒരു വൃത്തത്തിന്റെ കേന്ദ്രം $C(2, 3)$ ഉം അത് $P(5, 7)$ എന്ന ബിന്ദുവിലൂടെ കടന്നുപോകുകയും ചെയ്യുന്നു.\\n(a) വൃത്തത്തിന്റെ ആരം $r$ കാണുക.\\n(b) ഈ വൃത്തത്തിന്റെ സമവാക്യം എഴുതുക.\\n(c) $(6, 6)$ എന്ന ബിന്ദു വൃത്തത്തിന് മേലാണോ, അകത്താണോ, പുറത്താണോ എന്ന് പരിശോധിക്കുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>\n<ol>\n  <li>Radius $r$ is the distance $CP$: $r = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ units.</li>\n  <li>Standard circle equation with centre $(2, 3)$ and radius $5$: $(x - 2)^2 + (y - 3)^2 = 5^2 \\implies (x - 2)^2 + (y - 3)^2 = 25$.</li>\n  <li>For point $(6, 6)$: compute distance squared to centre: $(6 - 2)^2 + (6 - 3)^2 = 4^2 + 3^2 = 16 + 9 = 25$.</li>\n  <li>Since distance squared equals $r^2 = 25$, the point $(6, 6)$ lies exactly <b>on the circle</b>.</li>\n</ol>\n<p><b>Final Answer:</b> (a) r = 5; (b) (x - 2)² + (y - 3)² = 25; (c) Lies on the circle</p>\n<h4>Marking Rubric:</h4>\n<ul>\n  <li>Radius calculation = 5: 1.5 marks</li>\n  <li>Circle equation: 1.5 marks</li>\n  <li>Point verification: 1 mark</li>\n</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>\n<ol>\n  <li>ആരം $r = CP = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = 5$ യൂണിറ്റ്.</li>\n  <li>വൃത്ത സമവാക്യം: $(x - 2)^2 + (y - 3)^2 = 25$.</li>\n  <li>$(6, 6)$ ലെ അകല വർഗ്ഗം: $(6 - 2)^2 + (6 - 3)^2 = 16 + 9 = 25$.</li>\n  <li>അകലം ആരത്തിന് തുല്യമായതിനാൽ $(6, 6)$ എന്ന ബിന്ദു <b>വൃത്തത്തിന് മേൽ</b> തന്നെയാണ് സ്ഥിതിചെയ്യുന്നത്.</li>\n</ol>\n<p><b>അന്തിമ ഉത്തരം:</b> (a) r = 5; (b) (x - 2)² + (y - 3)² = 25; (c) വൃത്തത്തിന് മേൽ സ്ഥിതിചെയ്യുന്നു</p>\n<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>\n<ul>\n  <li>ആരം 5 കാണൽ: 1.5 മാർക്ക്</li>\n  <li>വൃത്ത സമവാക്യം എഴുതൽ: 1.5 മാർക്ക്</li>\n  <li>ബിന്ദുവിന്റെ സ്ഥാനം പരിശോധിക്കൽ: 1 മാർക്ക്</li>\n</ul>`,
    steps_en: [
      'Radius $r$ is the distance $CP$: $r = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ units.',
      'Standard circle equation with centre $(2, 3)$ and radius $5$: $(x - 2)^2 + (y - 3)^2 = 5^2 \\implies (x - 2)^2 + (y - 3)^2 = 25$.',
      'For point $(6, 6)$: compute distance squared to centre: $(6 - 2)^2 + (6 - 3)^2 = 4^2 + 3^2 = 16 + 9 = 25$.',
      'Since distance squared equals $r^2 = 25$, the point $(6, 6)$ lies exactly <b>on the circle</b>.'
    ],
    steps_ml: [
      'ആരം $r = CP = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = 5$ യൂണിറ്റ്.',
      'വൃത്ത സമവാക്യം: $(x - 2)^2 + (y - 3)^2 = 25$.',
      '$(6, 6)$ ലെ അകല വർഗ്ഗം: $(6 - 2)^2 + (6 - 3)^2 = 16 + 9 = 25$.',
      'അകലം ആരത്തിന് തുല്യമായതിനാൽ $(6, 6)$ എന്ന ബിന്ദു <b>വൃത്തത്തിന് മേൽ</b> തന്നെയാണ് സ്ഥിതിചെയ്യുന്നത്.'
    ],
    rubric_en: [
      'Radius calculation = 5: 1.5 marks',
      'Circle equation: 1.5 marks',
      'Point verification: 1 mark'
    ],
    rubric_ml: [
      'ആരം 5 കാണൽ: 1.5 മാർക്ക്',
      'വൃത്ത സമവാക്യം എഴുതൽ: 1.5 മാർക്ക്',
      'ബിന്ദുവിന്റെ സ്ഥാനം പരിശോധിക്കൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) r = 5; (b) (x - 2)² + (y - 3)² = 25; (c) Lies on the circle',
    answer_ml: '(a) r = 5; (b) (x - 2)² + (y - 3)² = 25; (c) വൃത്തത്തിന് മേൽ സ്ഥിതിചെയ്യുന്നു'
  }
);
