/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 9 — Geometry and Algebra (ജ്യാമിതിയും ബീജഗണിതവും)
   8 Objective (2 per section) + 6 Written Exercises (authentic SCERT textbook).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. All symbols in Malayalam fields wrapped in $...$.
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
    solution_en: 'On the $y$-axis, $x = 0$. Using ratio $k : 1$, $0 = \\frac{k(6) + 1(-3)}{k + 1} \\implies 6k - 3 = 0 \\implies k = \\frac{3}{6} = \\frac{1}{2}$. Ratio is $1 : 2$.',
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
    prompt_en: 'The vertices of a triangle are $A(3, 2)$, $B(5, 4)$, and $C(7, 9)$. What are the coordinates of the centroid $G$?',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ ശീർഷങ്ങൾ $A(3, 2), B(5, 4), C(7, 9)$ എന്നിവയാണ്. ഇതിന്റെ മധ്യകേന്ദ്രം $G$ യുടെ സൂചകസംഖ്യകൾ ഏവ?',
    options_en: [
      { k: 'A', t: '$(5, 5)$' },
      { k: 'B', t: '$(15, 15)$' },
      { k: 'C', t: '$(6, 5)$' },
      { k: 'D', t: '$(5, 6)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(5, 5)$' },
      { k: 'B', t: '$(15, 15)$' },
      { k: 'C', t: '$(6, 5)$' },
      { k: 'D', t: '$(5, 6)$' }
    ],
    answer: 'A',
    solution_en: '$x = \\frac{3 + 5 + 7}{3} = \\frac{15}{3} = 5$. $y = \\frac{2 + 4 + 9}{3} = \\frac{15}{3} = 5$. Centroid is $(5, 5)$.',
    solution_ml: '$x = \\frac{3 + 5 + 7}{3} = 5$, $y = \\frac{2 + 4 + 9}{3} = 5$. മധ്യകേന്ദ്രം $(5, 5)$ ആണ്.',
    tested_en: 'Centroid of triangle formula.',
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
    prompt_en: 'What is the slope of the line passing through the points $(2, 5)$ and $(6, 13)$?',
    prompt_ml: '$(2, 5), (6, 13)$ എന്നീ ബിന്ദുക്കളിലൂടെ കടന്നുപോകുന്ന വരയുടെ ചരിവ് എത്ര?',
    options_en: [
      { k: 'A', t: '2' },
      { k: 'B', t: '1/2' },
      { k: 'C', t: '4' },
      { k: 'D', t: '8' }
    ],
    options_ml: [
      { k: 'A', t: '2' },
      { k: 'B', t: '1/2' },
      { k: 'C', t: '4' },
      { k: 'D', t: '8' }
    ],
    answer: 'A',
    solution_en: 'Slope $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.',
    solution_ml: 'ചരിവ് $m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.',
    tested_en: 'Computing slope from two points.',
    tested_ml: 'രണ്ട് ബിന്ദുക്കളിലൂടെയുള്ള വരയുടെ ചരിവ് കാണൽ.'
  },
  {
    id: 'obj.m10.9.6',
    concept: 'm10.9.3.slope-of-a-line',
    sec: '10.9.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A line makes an angle of $45^\\circ$ with the positive $x$-axis. What is its slope?',
    prompt_ml: 'ഒരു വര $x$-അക്ഷത്തിന്റെ പോസിറ്റീവ് ദിശയുമായി $45^\\circ$ കോണുണ്ടാക്കുന്നു. ഇതിന്റെ ചരിവ് എത്ര?',
    options_en: [
      { k: 'A', t: '1' },
      { k: 'B', t: '0' },
      { k: 'C', t: '$\\sqrt{3}$' },
      { k: 'D', t: '$1/\\sqrt{3}$' }
    ],
    options_ml: [
      { k: 'A', t: '1' },
      { k: 'B', t: '0' },
      { k: 'C', t: '$\\sqrt{3}$' },
      { k: 'D', t: '$1/\\sqrt{3}$' }
    ],
    answer: 'A',
    solution_en: 'Slope $m = \\tan\\theta = \\tan 45^\\circ = 1$.',
    solution_ml: 'ചരിവ് $m = \\tan 45^\\circ = 1$.',
    tested_en: 'Slope from angle of inclination: m = tan θ.',
    tested_ml: 'ചരിവ് കോണിൽ നിന്ന് കണ്ടെത്തൽ: $m = \\tan \\theta$.'
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
    prompt_en: 'What is the equation of the straight line passing through $(0, 4)$ with slope $m = -2$?',
    prompt_ml: '$(0, 4)$ ലൂടെ കടന്നുപോകുന്നതും ചരിവ് $m = -2$ ഉം ആയ വരയുടെ സമവാക്യം ഏത്?',
    options_en: [
      { k: 'A', t: '$y = -2x + 4$' },
      { k: 'B', t: '$y = 2x + 4$' },
      { k: 'C', t: '$y = -2x - 4$' },
      { k: 'D', t: '$2x - y + 4 = 0$' }
    ],
    options_ml: [
      { k: 'A', t: '$y = -2x + 4$' },
      { k: 'B', t: '$y = 2x + 4$' },
      { k: 'C', t: '$y = -2x - 4$' },
      { k: 'D', t: '$2x - y + 4 = 0$' }
    ],
    answer: 'A',
    solution_en: 'Using slope-intercept form $y = mx + c$: here $m = -2$ and $c = 4$, giving $y = -2x + 4$.',
    solution_ml: '$y = mx + c$ ൽ $m = -2, c = 4$ നൽകുമ്പോൾ $y = -2x + 4$.',
    tested_en: 'Writing line equation in slope-intercept form.',
    tested_ml: 'വരയുടെ സമവാക്യം എഴുതൽ.'
  },
  {
    id: 'obj.m10.9.8',
    concept: 'm10.9.4.equations-of-line-and-circle',
    sec: '10.9.4',
    type: 'MCQ',
    marks: 1,
    time: 35,
    prompt_en: 'What is the centre and radius of the circle with equation $(x - 5)^2 + (y + 1)^2 = 49$?',
    prompt_ml: '$(x - 5)^2 + (y + 1)^2 = 49$ എന്ന സമവാക്യമുള്ള വൃത്തത്തിന്റെ കേന്ദ്രവും ആരവും ഏവ?',
    options_en: [
      { k: 'A', t: 'Centre $(5, -1)$, Radius $7$' },
      { k: 'B', t: 'Centre $(-5, 1)$, Radius $7$' },
      { k: 'C', t: 'Centre $(5, -1)$, Radius $49$' },
      { k: 'D', t: 'Centre $(-5, -1)$, Radius $7$' }
    ],
    options_ml: [
      { k: 'A', t: 'കേന്ദ്രം $(5, -1)$, ആരം $7$' },
      { k: 'B', t: 'കേന്ദ്രം $(-5, 1)$, ആരം $7$' },
      { k: 'C', t: 'കേന്ദ്രം $(5, -1)$, ആരം $49$' },
      { k: 'D', t: 'കേന്ദ്രം $(-5, -1)$, ആരം $7$' }
    ],
    answer: 'A',
    solution_en: 'Comparing with $(x - a)^2 + (y - b)^2 = r^2$: centre is $(a, b) = (5, -1)$ and radius $r = \\sqrt{49} = 7$.',
    solution_ml: '$(x - a)^2 + (y - b)^2 = r^2$ മായി താരതമ്യം ചെയ്യുമ്പോൾ കേന്ദ്രം $(5, -1)$, ആരം $r = \\sqrt{49} = 7$.',
    tested_en: 'Reading centre and radius from standard circle equation.',
    tested_ml: 'വൃത്ത സമവാക്യത്തിൽ നിന്ന് കേന്ദ്രവും ആരവും കണ്ടെത്തൽ.'
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Section formula: $x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}$.</li>
  <li>Here $m = 3, n = 2$, $(x_1, y_1) = (2, -3)$, $(x_2, y_2) = (7, 2)$.
  $$x = \\frac{3(7) + 2(2)}{3 + 2} = \\frac{21 + 4}{5} = \\frac{25}{5} = 5$$</li>
  <li>Calculate $y$:
  $$y = \\frac{3(2) + 2(-3)}{3 + 2} = \\frac{6 - 6}{5} = \\frac{0}{5} = 0$$</li>
  <li>The coordinates of the point are $P(5, 0)$ (which lies on the $x$-axis).</li>
</ol>
<p><b>Final Answer:</b> (a) ((mx2+nx1)/(m+n), (my2+ny1)/(m+n)); (b) x = 5; (c) y = 0, P(5, 0)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Stating section formula: 1 mark</li>
  <li>Correct x-coordinate calculation: 1.5 marks</li>
  <li>Correct y-coordinate and point: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>സൂത്രവാക്യം: $x = \\frac{m x_2 + n x_1}{m + n}, y = \\frac{m y_2 + n y_1}{m + n}$.</li>
  <li>$x = \\frac{3(7) + 2(2)}{5} = \\frac{25}{5} = 5$.</li>
  <li>$y = \\frac{3(2) + 2(-3)}{5} = \\frac{0}{5} = 0$.</li>
  <li>$P$ യുടെ സൂചകസംഖ്യകൾ: $(5, 0)$.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) സൂത്രവാക്യം; (b) x = 5; (c) y = 0, P(5, 0)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>സൂത്രവാക്യം എഴുതൽ: 1 മാർക്ക്</li>
  <li>x-സൂചകസംഖ്യ കാണൽ: 1.5 മാർക്ക്</li>
  <li>y-സൂചകസംഖ്യയും ബിന്ദുവും എഴുതൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Section formula: $x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}$.',
      'Here $m = 3, n = 2$, $(x_1, y_1) = (2, -3)$, $(x_2, y_2) = (7, 2)$. $x = \\frac{3(7) + 2(2)}{3 + 2} = \\frac{21 + 4}{5} = 5$.',
      '$y = \\frac{3(2) + 2(-3)}{3 + 2} = \\frac{6 - 6}{5} = 0$.',
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
     10.9.2 Midpoint Formula & Parallelogram Fourth Vertex
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Midpoint of $AC$:
  $$M = \\left(\\frac{1 + 6}{2}, \\frac{2 + 7}{2}\\right) = \\left(\\frac{7}{2}, \\frac{9}{2}\\right) = (3.5, 4.5)$$</li>
  <li>The diagonals of a parallelogram bisect each other, so the midpoint of $BD$ must also be $\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$.</li>
  <li>Let $D$ have coordinates $(x, y)$. Then:
  $$\\frac{4 + x}{2} = \\frac{7}{2} \\implies 4 + x = 7 \\implies x = 3$$
  $$\\frac{3 + y}{2} = \\frac{9}{2} \\implies 3 + y = 9 \\implies y = 6$$</li>
  <li>The fourth vertex is $D(3, 6)$.</li>
</ol>
<p><b>Final Answer:</b> (a) (3.5, 4.5); (b) (3.5, 4.5); (c) D(3, 6)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Midpoint of AC: 1.5 marks</li>
  <li>Equating to midpoint of BD: 1 mark</li>
  <li>Solving for coordinates of D: 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>$AC$ യുടെ മധ്യബിന്ദു:
  $$M = \\left(\\frac{1 + 6}{2}, \\frac{2 + 7}{2}\\right) = \\left(\\frac{7}{2}, \\frac{9}{2}\\right)$$</li>
  <li>വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നതിനാൽ $BD$ യുടെ മധ്യബിന്ദുവും $\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$ ആണ്.</li>
  <li>$\\frac{4 + x}{2} = \\frac{7}{2} \\implies x = 3$.</li>
  <li>$\\frac{3 + y}{2} = \\frac{9}{2} \\implies y = 6$. നാലാം ശീർഷം $D(3, 6)$.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) (3.5, 4.5); (b) (3.5, 4.5); (c) D(3, 6)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>AC യുടെ മധ്യബിന്ദു കാണൽ: 1.5 മാർക്ക്</li>
  <li>BD യുടെ മധ്യബിന്ദുവുമായി തുലനം ചെയ്യൽ: 1 മാർക്ക്</li>
  <li>D യുടെ സൂചകസംഖ്യകൾ കാണൽ: 1.5 മാർക്ക്</li>
</ul>`,
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
     10.9.3 Slope of a Line & Collinearity
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Slope of $AB$:
  $$m_1 = \\frac{5 - 3}{2 - (-1)} = \\frac{2}{3}$$</li>
  <li>Slope of $BC$:
  $$m_2 = \\frac{9 - 5}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}$$</li>
  <li>Since the slopes $m_1 = m_2 = \\frac{2}{3}$ and point $B$ is common to both segments, the lines $AB$ and $BC$ are the same straight line.</li>
  <li>Conclusion: The points $A, B$, and $C$ are <b>collinear</b> (lie on the same straight line).</li>
</ol>
<p><b>Final Answer:</b> (a) 2/3; (b) 2/3; (c) The points A, B, and C are collinear (lie on the same line)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Slope of AB: 1.5 marks</li>
  <li>Slope of BC: 1.5 marks</li>
  <li>Collinearity conclusion with justification: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>$AB$ യുടെ ചരിവ്:
  $$m_1 = \\frac{5 - 3}{2 - (-1)} = \\frac{2}{3}$$</li>
  <li>$BC$ യുടെ ചരിവ്:
  $$m_2 = \\frac{9 - 5}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}$$</li>
  <li>രണ്ട് ചരിവുകളും തുല്യമായതിനാലും ($m_1 = m_2 = 2/3$) $B$ എന്ന ബിന്ദു പൊതുവായതിനാലും അവ ഒരേ വരയിലാണ്.</li>
  <li>നിഗമനം: $A, B, C$ എന്നീ ബിന്ദുക്കൾ ഒരേ നേർവരയിലാണ് (സരേഖീയ ബിന്ദുക്കൾ).</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) 2/3; (b) 2/3; (c) A, B, C ഒരേ നേർവരയിലാണ് (സരേഖീയമാണ്)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>AB യുടെ ചരിവ് കാണൽ: 1.5 മാർക്ക്</li>
  <li>BC യുടെ ചരിവ് കാണൽ: 1.5 മാർക്ക്</li>
  <li>സരേഖീയ ബിന്ദുക്കൾ എന്ന നിഗമനം: 1 മാർക്ക്</li>
</ul>`,
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
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Radius $r$ is the distance $CP$:
  $$r = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ units}$$</li>
  <li>Standard circle equation with centre $(2, 3)$ and radius $5$:
  $$(x - 2)^2 + (y - 3)^2 = 5^2 \\implies (x - 2)^2 + (y - 3)^2 = 25$$</li>
  <li>For point $(6, 6)$: compute distance squared to centre:
  $$(6 - 2)^2 + (6 - 3)^2 = 4^2 + 3^2 = 16 + 9 = 25$$</li>
  <li>Since distance squared equals $r^2 = 25$, the point $(6, 6)$ lies exactly <b>on the circle</b>.</li>
</ol>
<p><b>Final Answer:</b> (a) r = 5; (b) (x - 2)² + (y - 3)² = 25; (c) Lies on the circle</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Radius calculation = 5: 1.5 marks</li>
  <li>Circle equation: 1.5 marks</li>
  <li>Point verification: 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>ആരം $r = CP = \\sqrt{(5 - 2)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = 5$ യൂണിറ്റ്.</li>
  <li>വൃത്ത സമവാക്യം: $(x - 2)^2 + (y - 3)^2 = 25$.</li>
  <li>$(6, 6)$ ലെ അകല വർഗ്ഗം: $(6 - 2)^2 + (6 - 3)^2 = 16 + 9 = 25$.</li>
  <li>അകലം ആരത്തിന് തുല്യമായതിനാൽ $(6, 6)$ എന്ന ബിന്ദു <b>വൃത്തത്തിന് മേൽ</b> തന്നെയാണ് സ്ഥിതിചെയ്യുന്നത്.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) r = 5; (b) (x - 2)² + (y - 3)² = 25; (c) വൃത്തത്തിന് മേൽ സ്ഥിതിചെയ്യുന്നു</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>ആരം 5 കാണൽ: 1.5 മാർക്ക്</li>
  <li>വൃത്ത സമവാക്യം എഴുതൽ: 1.5 മാർക്ക്</li>
  <li>ബിന്ദുവിന്റെ സ്ഥാനം പരിശോധിക്കൽ: 1 മാർക്ക്</li>
</ul>`,
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
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.2 Triangle Medians & Centroid (SCERT Textbook Problem)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.9.5',
    concept: 'm10.9.2.midpoint-and-centroid',
    sec: '10.9.2',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'The vertices of a triangle are $A(-1, 0)$, $B(5, -2)$, and $C(8, 8)$ (SCERT textbook problem).\\n(a) Find the coordinates of the midpoint $D$ of the side $BC$.\\n(b) Calculate the length of the median $AD$.\\n(c) Find the coordinates of the centroid $G$ of $\\triangle ABC$.',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ ശീർഷങ്ങൾ $A(-1, 0), B(5, -2), C(8, 8)$ എന്നിവയാണ്.\\n(a) $BC$ എന്ന വശത്തിന്റെ മധ്യബിന്ദു $D$ യുടെ സൂചകസംഖ്യകൾ കാണുക.\\n(b) മാധ്യമരേഖയായ $AD$ യുടെ നീളം കണക്കാക്കുക.\\n(c) $\\triangle ABC$ യുടെ മധ്യകേന്ദ്രം $G$ യുടെ സൂചകസംഖ്യകൾ കണ്ടെത്തുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Midpoint $D$ of side $BC$ with $B(5, -2)$ and $C(8, 8)$:
  $$D = \\left(\\frac{5 + 8}{2}, \\frac{-2 + 8}{2}\\right) = \\left(\\frac{13}{2}, \\frac{6}{2}\\right) = (6.5, 3)$$</li>
  <li>Length of median $AD$ from $A(-1, 0)$ to $D(6.5, 3)$:
  $$AD = \\sqrt{(6.5 - (-1))^2 + (3 - 0)^2} = \\sqrt{7.5^2 + 3^2} = \\sqrt{56.25 + 9} = \\sqrt{65.25} = \\frac{3\\sqrt{29}}{2}\\text{ units}$$</li>
  <li>Centroid $G$ of $\\triangle ABC$:
  $$x_G = \\frac{-1 + 5 + 8}{3} = \\frac{12}{3} = 4, \\quad y_G = \\frac{0 + (-2) + 8}{3} = \\frac{6}{3} = 2$$
  So centroid is $G(4, 2)$.</li>
</ol>
<p><b>Final Answer:</b> (a) D(6.5, 3); (b) AD = √65.25 units; (c) G(4, 2)</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Midpoint D of side BC: 1.5 marks</li>
  <li>Length of median AD: 1 mark</li>
  <li>Coordinates of centroid G(4, 2): 1.5 marks</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>$BC$ യുടെ മധ്യബിന്ദു $D$:
  $$D = \\left(\\frac{5 + 8}{2}, \\frac{-2 + 8}{2}\\right) = (6.5, 3)$$</li>
  <li>മാധ്യമരേഖ $AD$ യുടെ നീളം:
  $$AD = \\sqrt{(6.5 - (-1))^2 + (3 - 0)^2} = \\sqrt{7.5^2 + 3^2} = \\sqrt{65.25}\\text{ യൂണിറ്റ്}$$</li>
  <li>മധ്യകേന്ദ്രം $G$:
  $$x_G = \\frac{-1 + 5 + 8}{3} = 4, \\quad y_G = \\frac{0 - 2 + 8}{3} = 2$$
  മധ്യകേന്ദ്രം $G(4, 2)$ ആണ്.</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) D(6.5, 3); (b) AD = √65.25 യൂണിറ്റ്; (c) G(4, 2)</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>BC യുടെ മധ്യബിന്ദു D കാണൽ: 1.5 മാർക്ക്</li>
  <li>മാധ്യമരേഖ AD യുടെ നീളം കാണൽ: 1 മാർക്ക്</li>
  <li>മധ്യകേന്ദ്രം G(4, 2) കണ്ടെത്തൽ: 1.5 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Midpoint $D$ of $BC$: $D = \\left(\\frac{5 + 8}{2}, \\frac{-2 + 8}{2}\\right) = (6.5, 3)$.',
      'Length of $AD$: $AD = \\sqrt{(6.5 - (-1))^2 + (3 - 0)^2} = \\sqrt{7.5^2 + 3^2} = \\sqrt{65.25}$ units.',
      'Centroid $G$: $x = \\frac{-1 + 5 + 8}{3} = 4, y = \\frac{0 - 2 + 8}{3} = 2$. Centroid is $G(4, 2)$.'
    ],
    steps_ml: [
      '$BC$ യുടെ മധ്യബിന്ദു $D = \\left(\\frac{5 + 8}{2}, \\frac{-2 + 8}{2}\\right) = (6.5, 3)$.',
      '$AD$ യുടെ നീളം $AD = \\sqrt{(6.5 - (-1))^2 + 3^2} = \\sqrt{65.25}$ യൂണിറ്റ്.',
      'മധ്യകേന്ദ്രം $G$: $x = \\frac{12}{3} = 4, y = \\frac{6}{3} = 2 \\implies G(4, 2)$.'
    ],
    rubric_en: [
      'Midpoint D of side BC: 1.5 marks',
      'Length of median AD: 1 mark',
      'Coordinates of centroid G(4, 2): 1.5 marks'
    ],
    rubric_ml: [
      'BC യുടെ മധ്യബിന്ദു D കാണൽ: 1.5 മാർക്ക്',
      'മാധ്യമരേഖ AD യുടെ നീളം കാണൽ: 1 മാർക്ക്',
      'മധ്യകേന്ദ്രം G(4, 2) കണ്ടെത്തൽ: 1.5 മാർക്ക്'
    ],
    answer_en: '(a) D(6.5, 3); (b) AD = √65.25 units; (c) G(4, 2)',
    answer_ml: '(a) D(6.5, 3); (b) AD = √65.25 യൂണിറ്റ്; (c) G(4, 2)'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.9.3 / 10.9.4 Line Equation, Intercepts & Area of Triangle with Axes
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.9.6',
    concept: 'm10.9.4.equations-of-line-and-circle',
    sec: '10.9.4',
    type: 'exercise',
    marks: 4,
    time: 240,
    prompt_en: 'A straight line passes through the points $A(2, 3)$ and $B(6, 5)$.\\n(a) Find the slope of the line $AB$.\\n(b) Write the equation of the line in the form $y = mx + c$ and in standard form $ax + by + c = 0$.\\n(c) Find the coordinates of the points where this line intersects the $x$-axis and the $y$-axis, and calculate the area of the triangle formed by this line and the coordinate axes.',
    prompt_ml: 'ഒരു നേർവര $A(2, 3), B(6, 5)$ എന്നീ ബിന്ദുക്കളിലൂടെ കടന്നുപോകുന്നു.\\n(a) വരയുടെ ചരിവ് കാണുക.\\n(b) വരയുടെ സമവാക്യം $y = mx + c$ എന്ന രൂപത്തിലും $ax + by + c = 0$ എന്ന രൂപത്തിലും എഴുതുക.\\n(c) ഈ വര $x$-അക്ഷത്തെയും $y$-അക്ഷത്തെയും മുറിച്ചുകടക്കുന്ന ബിന്ദുക്കളുടെ സൂചകസംഖ്യകൾ കണ്ടെത്തുക, ഈ വരയും അക്ഷങ്ങളും ചേർത്തുണ്ടാക്കുന്ന ത്രികോണത്തിന്റെ പരപ്പളവ് കാണുക.',
    solution_en: `<h4>Step-by-step Solution:</h4>
<ol>
  <li>Slope of line $AB$:
  $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{5 - 3}{6 - 2} = \\frac{2}{4} = \\frac{1}{2}$$</li>
  <li>Equation of line using point $A(2, 3)$ and slope $m = 1/2$:
  $$y - 3 = \\frac{1}{2}(x - 2) \\implies y - 3 = \\frac{1}{2}x - 1 \\implies y = \\frac{1}{2}x + 2$$
  Standard form: multiplying by 2 gives $2y = x + 4 \\implies x - 2y + 4 = 0$.</li>
  <li>Intercepts:
  <ul>
    <li>$x$-intercept (set $y = 0$): $x - 0 + 4 = 0 \\implies x = -4$, so point is $(-4, 0)$.</li>
    <li>$y$-intercept (set $x = 0$): $0 - 2y + 4 = 0 \\implies 2y = 4 \\implies y = 2$, so point is $(0, 2)$.</li>
  </ul></li>
  <li>The triangle formed with the origin $O(0, 0)$ has base length $|-4| = 4$ along the $x$-axis and height $2$ along the $y$-axis:
  $$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4 \\times 2 = 4\\text{ square units}$$</li>
</ol>
<p><b>Final Answer:</b> (a) m = 1/2; (b) y = (1/2)x + 2, or x - 2y + 4 = 0; (c) x-intercept (-4, 0), y-intercept (0, 2), Area = 4 sq units</p>
<h4>Marking Rubric:</h4>
<ul>
  <li>Slope calculation (m = 1/2): 1 mark</li>
  <li>Equation of line in both forms: 1 mark</li>
  <li>Finding both axis intercepts: 1 mark</li>
  <li>Triangle area calculation (4 sq units): 1 mark</li>
</ul>`,
    solution_ml: `<h4>ഘട്ടങ്ങൾ:</h4>
<ol>
  <li>വരയുടെ ചരിവ്:
  $$m = \\frac{5 - 3}{6 - 2} = \\frac{2}{4} = \\frac{1}{2}$$</li>
  <li>വരയുടെ സമവാക്യം:
  $$y - 3 = \\frac{1}{2}(x - 2) \\implies y = \\frac{1}{2}x + 2$$
  രണ്ട് കൊണ്ട് ഗുണിച്ചാൽ: $x - 2y + 4 = 0$.</li>
  <li>അക്ഷങ്ങളിലെ സംഗമബിന്ദുക്കൾ:
  <ul>
    <li>$x$-അക്ഷത്തിൽ ($y = 0$): $x + 4 = 0 \\implies x = -4$, ബിന്ദു $(-4, 0)$.</li>
    <li>$y$-അക്ഷത്തിൽ ($x = 0$): $-2y + 4 = 0 \\implies y = 2$, ബിന്ദു $(0, 2)$.</li>
  </ul></li>
  <li>ത്രികോണത്തിന്റെ പരപ്പളവ്:
  $$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times \\text{പാദം} \\times \\text{ഉയരം} = \\frac{1}{2} \\times 4 \\times 2 = 4\\text{ ചതുരശ്ര യൂണിറ്റ്}$$</li>
</ol>
<p><b>അന്തിമ ഉത്തരം:</b> (a) m = 1/2; (b) y = (1/2)x + 2, x - 2y + 4 = 0; (c) (-4, 0), (0, 2), പരപ്പളവ് = 4 ചതുരശ്ര യൂണിറ്റ്</p>
<h4>മാർക്കിംഗ് റൂബ്രിക്:</h4>
<ul>
  <li>ചരിവ് കാണൽ: 1 മാർക്ക്</li>
  <li>വരയുടെ സമവാക്യം എഴുതൽ: 1 മാർക്ക്</li>
  <li>സംഗമബിന്ദുക്കൾ കണ്ടെത്തൽ: 1 മാർക്ക്</li>
  <li>ത്രികോണ പരപ്പളവ് കാണൽ: 1 മാർക്ക്</li>
</ul>`,
    steps_en: [
      'Slope $m = \\frac{5 - 3}{6 - 2} = \\frac{2}{4} = \\frac{1}{2}$.',
      'Equation: $y - 3 = \\frac{1}{2}(x - 2) \\implies y = \\frac{1}{2}x + 2 \\iff x - 2y + 4 = 0$.',
      'Intercepts: on $x$-axis ($y = 0$) gives $(-4, 0)$; on $y$-axis ($x = 0$) gives $(0, 2)$.',
      'Area of triangle $= \\frac{1}{2} \\times 4 \\times 2 = 4$ square units.'
    ],
    steps_ml: [
      'ചരിവ് $m = \\frac{5 - 3}{6 - 2} = \\frac{1}{2}$.',
      'സമവാക്യം: $y = \\frac{1}{2}x + 2 \\iff x - 2y + 4 = 0$.',
      'സംഗമബിന്ദുക്കൾ: $x$-അക്ഷത്തിൽ $(-4, 0)$, $y$-അക്ഷത്തിൽ $(0, 2)$.',
      'പരപ്പളവ് $= \\frac{1}{2} \\times 4 \\times 2 = 4$ ചതുരശ്ര യൂണിറ്റ്.'
    ],
    rubric_en: [
      'Slope calculation (m = 1/2): 1 mark',
      'Equation of line in both forms: 1 mark',
      'Finding both axis intercepts: 1 mark',
      'Triangle area calculation (4 sq units): 1 mark'
    ],
    rubric_ml: [
      'ചരിവ് കാണൽ: 1 മാർക്ക്',
      'വരയുടെ സമവാക്യം എഴുതൽ: 1 മാർക്ക്',
      'സംഗമബിന്ദുക്കൾ കണ്ടെത്തൽ: 1 മാർക്ക്',
      'ത്രികോണ പരപ്പളവ് കാണൽ: 1 മാർക്ക്'
    ],
    answer_en: '(a) m = 1/2; (b) y = (1/2)x + 2, or x - 2y + 4 = 0; (c) x-intercept (-4, 0), y-intercept (0, 2), Area = 4 sq units',
    answer_ml: '(a) m = 1/2; (b) y = (1/2)x + 2, x - 2y + 4 = 0; (c) (-4, 0), (0, 2), പരപ്പളവ് = 4 ചതുരശ്ര യൂണിറ്റ്'
  }
);
