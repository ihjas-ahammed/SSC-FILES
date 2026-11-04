/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 9 Chapter 12 — Proportion (അനുപാതം)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.12.1 Proportional Changes & Constant of Proportionality
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.12.1',
    concept: 'm9.12.1.proportional-changes-and-constant',
    sec: '9.12.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $y$ is directly proportional to $x$, and $y = 35$ when $x = 5$, what is the value of $y$ when $x = 8$?',
    prompt_ml: '$y$ എന്നത് $x$-ന് നേർ അനുപാതത്തിലാണ്. $x = 5$ ആകുമ്പോൾ $y = 35$ ആണെങ്കിൽ $x = 8$ ആകുമ്പോൾ $y$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$56$' },
      { k: 'B', t: '$40$' },
      { k: 'C', t: '$48$' },
      { k: 'D', t: '$64$' }
    ],
    options_ml: [
      { k: 'A', t: '$56$' },
      { k: 'B', t: '$40$' },
      { k: 'C', t: '$48$' },
      { k: 'D', t: '$64$' }
    ],
    answer: 'A',
    solution_en: 'Constant of proportionality $k = \\frac{y}{x} = \\frac{35}{5} = 7$. When $x = 8$, $y = kx = 7 \\times 8 = 56$.',
    solution_ml: 'അനുപാത സ്ഥിരസംഖ്യ $k = \\frac{35}{5} = 7$. $x = 8$ ആകുമ്പോൾ $y = 7 \\times 8 = 56$.',
    tested_en: 'Direct proportion calculation and constant determination.',
    tested_ml: 'അനുപാത സ്ഥിരസംഖ്യയും പുതിയ വിലയും കാണൽ.'
  },
  {
    id: 'obj.m9.12.2',
    concept: 'm9.12.1.proportional-changes-and-constant',
    sec: '9.12.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following pairs of values $(x, y)$ violates the proportional relation $y = 2.5x$?',
    prompt_ml: '$y = 2.5x$ എന്ന അനുപാത ബന്ധത്തിന് അനുയോജ്യമല്ലാത്ത ജോഡി ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$(6, 16)$' },
      { k: 'B', t: '$(4, 10)$' },
      { k: 'C', t: '$(8, 20)$' },
      { k: 'D', t: '$(10, 25)$' }
    ],
    options_ml: [
      { k: 'A', t: '$(6, 16)$' },
      { k: 'B', t: '$(4, 10)$' },
      { k: 'C', t: '$(8, 20)$' },
      { k: 'D', t: '$(10, 25)$' }
    ],
    answer: 'A',
    solution_en: 'For $x = 6$, $y = 2.5 \\times 6 = 15 \\neq 16$. All other pairs satisfy $y = 2.5x$.',
    solution_ml: '$x = 6$ ആകുമ്പോൾ $y = 2.5 \\times 6 = 15$ ആണ്, $16$ അല്ല.',
    tested_en: 'Checking points satisfying a proportional relation.',
    tested_ml: 'അനുപാത സമവാക്യം തൃപ്തിപ്പെടുത്തുന്ന ബിന്ദുക്കൾ കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.12.2 Geometric Proportion in Similar Figures
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.12.3',
    concept: 'm9.12.2.geometric-proportion',
    sec: '9.12.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A photograph is scaled up such that its perimeter becomes $2.5$ times the original. By what factor does the area of the photograph increase?',
    prompt_ml: 'ഒരു ഫോട്ടോ വലുതാക്കിയപ്പോൾ അതിന്റെ ചുറ്റളവ് ആദ്യത്തേതിന്റെ $2.5$ മടങ്ങായി. ഫോട്ടോയുടെ പരപ്പളവ് എത്ര മടങ്ങായി വർദ്ധിക്കും?',
    options_en: [
      { k: 'A', t: '$6.25$' },
      { k: 'B', t: '$2.5$' },
      { k: 'C', t: '$5.0$' },
      { k: 'D', t: '$12.5$' }
    ],
    options_ml: [
      { k: 'A', t: '$6.25$' },
      { k: 'B', t: '$2.5$' },
      { k: 'C', t: '$5.0$' },
      { k: 'D', t: '$12.5$' }
    ],
    answer: 'A',
    solution_en: 'Linear scaling factor $k = 2.5$. Area scales as $k^2 = (2.5)^2 = 6.25$.',
    solution_ml: 'രേഖീയ അളവിന്റെ മാറ്റം $k = 2.5$. പരപ്പളവ് $k^2 = (2.5)^2 = 6.25$ മടങ്ങായി വർദ്ധിക്കുന്നു.',
    tested_en: 'Area scaling factor relationship in geometric figures.',
    tested_ml: 'ജ്യാമിതീയ രൂപങ്ങളിലെ പരപ്പളവ് വികാസ നിരക്ക്.'
  },
  {
    id: 'obj.m9.12.4',
    concept: 'm9.12.2.geometric-proportion',
    sec: '9.12.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A slanted line passes through the corner of a right triangle. At horizontal distance $x = 6\\text{ cm}$, the vertical height is $y = 9\\text{ cm}$. What is the vertical height at horizontal distance $x = 14\\text{ cm}$?',
    prompt_ml: 'ഒരു മട്ടത്രികോണത്തിന്റെ മൂലയിലൂടെ കടന്നുപോകുന്ന വരയിൽ തിരശ്ചീന ദൂരം $x = 6\\text{ cm}$ ആകുമ്പോൾ ലംബ ഉയരം $y = 9\\text{ cm}$ ആണ്. തിരശ്ചീന ദൂരം $x = 14\\text{ cm}$ ആകുമ്പോൾ ലംബ ഉയരം എത്ര?',
    options_en: [
      { k: 'A', t: '$21\\text{ cm}$' },
      { k: 'B', t: '$18\\text{ cm}$' },
      { k: 'C', t: '$24\\text{ cm}$' },
      { k: 'D', t: '$28\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$21\\text{ cm}$' },
      { k: 'B', t: '$18\\text{ cm}$' },
      { k: 'C', t: '$24\\text{ cm}$' },
      { k: 'D', t: '$28\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Height is proportional to base distance: $\\frac{y_1}{x_1} = \\frac{y_2}{x_2} \\implies \\frac{9}{6} = \\frac{y_2}{14} \\implies y_2 = 1.5 \\times 14 = 21\\text{ cm}$.',
    solution_ml: 'ലംബ ഉയരം പാദദൂരത്തിന് നേർ അനുപാതത്തിലാണ്: $\\frac{9}{6} = \\frac{y_2}{14} \\implies y_2 = 1.5 \\times 14 = 21\\text{ cm}$.',
    tested_en: 'Geometric proportion of height to base distance.',
    tested_ml: 'ജ്യാമിതീയ രൂപങ്ങളിലെ ലംബ ഉയര അനുപാതം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.12.3 Direct Proportion and Linear Equations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.12.5',
    concept: 'm9.12.3.direct-proportion-and-linear-equations',
    sec: '9.12.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following equations represents a directly proportional relationship?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ നേർ അനുപാതത്തെ സൂചിപ്പിക്കുന്ന സമവാക്യം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$y = \\frac{3}{4}x$' },
      { k: 'B', t: '$y = 2x + 1$' },
      { k: 'C', t: '$xy = 12$' },
      { k: 'D', t: '$y = x^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$y = \\frac{3}{4}x$' },
      { k: 'B', t: '$y = 2x + 1$' },
      { k: 'C', t: '$xy = 12$' },
      { k: 'D', t: '$y = x^2$' }
    ],
    answer: 'A',
    solution_en: 'Direct proportion has the form $y = kx$ with zero constant term. Here $y = \\frac{3}{4}x$ is directly proportional ($k = \\frac{3}{4}$).',
    solution_ml: 'നേർ അനുപാത സമവാക്യം $y = kx$ രൂപത്തിലായിരിക്കും. ഇവിടെ $y = \\frac{3}{4}x$ നേർ അനുപാതമാണ്.',
    tested_en: 'Identifying direct proportion equations.',
    tested_ml: 'നേർ അനുപാത സമവാക്യം തിരിച്ചറിയൽ.'
  },
  {
    id: 'obj.m9.12.6',
    concept: 'm9.12.3.direct-proportion-and-linear-equations',
    sec: '9.12.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A straight line representing direct proportion passes through the point $(4, 18)$. What is its slope (constant of proportionality)?',
    prompt_ml: 'നേർ അനുപാതത്തെ പ്രതിനിധീകരിക്കുന്ന ഒരു വര $(4, 18)$ എന്ന ബിന്ദുവിലൂടെ കടന്നുപോകുന്നു. ഈ വരയുടെ ചരിവ് (അനുപാത സ്ഥിരസംഖ്യ) എത്ര?',
    options_en: [
      { k: 'A', t: '$4.5$' },
      { k: 'B', t: '$2.25$' },
      { k: 'C', t: '$14$' },
      { k: 'D', t: '$72$' }
    ],
    options_ml: [
      { k: 'A', t: '$4.5$' },
      { k: 'B', t: '$2.25$' },
      { k: 'C', t: '$14$' },
      { k: 'D', t: '$72$' }
    ],
    answer: 'A',
    solution_en: 'The line passes through $(0, 0)$ and $(4, 18)$, so $k = \\frac{18 - 0}{4 - 0} = \\frac{18}{4} = 4.5$.',
    solution_ml: 'വര $(0, 0)$-ലൂടെയും $(4, 18)$-ലൂടെയും കടന്നുപോകുന്നതിനാൽ ചരിവ് $k = \\frac{18}{4} = 4.5$.',
    tested_en: 'Slope of a direct proportion line.',
    tested_ml: 'നേർ അനുപാത വരയുടെ ചരിവ് കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.12.4 Inverse Proportion
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.12.7',
    concept: 'm9.12.4.inverse-proportion',
    sec: '9.12.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If $x$ and $y$ are inversely proportional, and $y = 12$ when $x = 5$, what is the value of $y$ when $x = 15$?',
    prompt_ml: '$x, y$ എന്നിവ വ്യസ്താനുപാതത്തിലാണ്. $x = 5$ ആകുമ്പോൾ $y = 12$ ആണെങ്കിൽ $x = 15$ ആകുമ്പോൾ $y$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$36$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$60$' }
    ],
    options_ml: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$36$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$60$' }
    ],
    answer: 'A',
    solution_en: 'Product $k = x \\times y = 5 \\times 12 = 60$. When $x = 15$, $y = \\frac{60}{15} = 4$.',
    solution_ml: 'ഗുണനഫലം $k = 5 \\times 12 = 60$. $x = 15$ ആകുമ്പോൾ $y = \\frac{60}{15} = 4$.',
    tested_en: 'Inverse proportion product invariance calculation.',
    tested_ml: 'വ്യസ്താനുപാതത്തിലെ ഗുണനഫല സ്ഥിരത ഉപയോഗിച്ച് വില കാണൽ.'
  },
  {
    id: 'obj.m9.12.8',
    concept: 'm9.12.4.inverse-proportion',
    sec: '9.12.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A car travelling at an average speed of $40\\text{ km/h}$ takes $3\\text{ hours}$ to complete a trip. How long will the trip take if the speed is increased to $60\\text{ km/h}$?',
    prompt_ml: 'മണിക്കൂറിൽ $40\\text{ km}$ ശരാശരി വേഗതയിൽ സഞ്ചരിക്കുന്ന ഒരു കാർ യാത്ര പൂർത്തിയാക്കാൻ $3\\text{ മണിക്കൂർ}$ എടുക്കുന്നു. വേഗത മണിക്കൂറിൽ $60\\text{ km}$ ആയി വർദ്ധിപ്പിച്ചാൽ യാത്രയ്ക്ക് എത്ര സമയം എടുക്കും?',
    options_en: [
      { k: 'A', t: '$2\\text{ hours}$' },
      { k: 'B', t: '$4.5\\text{ hours}$' },
      { k: 'C', t: '$2.5\\text{ hours}$' },
      { k: 'D', t: '$1.5\\text{ hours}$' }
    ],
    options_ml: [
      { k: 'A', t: '$2\\text{ മണിക്കൂർ}$' },
      { k: 'B', t: '$4.5\\text{ മണിക്കൂർ}$' },
      { k: 'C', t: '$2.5\\text{ മണിക്കൂർ}$' },
      { k: 'D', t: '$1.5\\text{ മണിക്കൂർ}$' }
    ],
    answer: 'A',
    solution_en: 'Total distance $= 40 \\times 3 = 120\\text{ km}$. At $60\\text{ km/h}$, time $= \\frac{120}{60} = 2\\text{ hours}$.',
    solution_ml: 'ആകെ ദൂരം $= 40 \\times 3 = 120\\text{ km}$. സമയം $= \\frac{120}{60} = 2\\text{ മണിക്കൂർ}$.',
    tested_en: 'Inverse proportion application to speed and travel time.',
    tested_ml: 'വേഗതയും സമയവും തമ്മിലുള്ള വ്യസ്താനുപാത കണക്ക്.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     Level 2 Written Exercises (1 per section)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m9.12.1',
    concept: 'm9.12.1.proportional-changes-and-constant',
    sec: '9.12.1',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Direct Proportion and Mass-Length Constant of Proportionality',
    title_ml: 'നേർ അനുപാതവും ഭാര-നീള സ്ഥിരസംഖ്യയും',
    prompt_en: '<p>A metal wire of length $12\\text{ metres}$ has a mass of $420\\text{ grams}$.</p><p>(i) Verify that mass is directly proportional to length for a wire of uniform thickness, and calculate the constant of proportionality $k$ (mass per unit length).</p><p>(ii) What is the mass of $25\\text{ metres}$ of this wire?</p><p>(iii) What length of this wire will have a mass of $1.05\\text{ kg}$?</p>',
    prompt_ml: '<p>$12\\text{ മീറ്റർ}$ നീളമുള്ള ഒരു കമ്പിയുടെ ഭാരം $420\\text{ ഗ്രാം}$ ആണ്.</p><p>(i) ഒരേ കനമുള്ള കമ്പിക്ക് ഭാരവും നീളവും തമ്മിൽ നേർ അനുപാതത്തിലാണെന്ന് സമർത്ഥിച്ച് അനുപാത സ്ഥിരസംഖ്യ $k$ (ഒരു മീറ്ററിന്റെ ഭാരം) കണ്ടെത്തുക.</p><p>(ii) $25\\text{ മീറ്റർ}$ നീളമുള്ള കമ്പിയുടെ ഭാരം എത്രയായിരിക്കും?</p><p>(iii) $1.05\\text{ കിലോഗ്രാം}$ ഭാരമുള്ള കമ്പിയുടെ നീളം എത്രയായിരിക്കും?</p>',
    solution_en: `<h4>Part (i): Constant of Proportionality</h4>
<p>Since the wire has uniform cross-section and density, mass $m$ is directly proportional to length $l$ ($m = kl$):</p>
$$k = \\frac{m}{l} = \\frac{420\\text{ g}}{12\\text{ m}} = \\mathbf{35\\text{ grams per metre}}$$

<h4>Part (ii): Mass of 25 Metres</h4>
$$m = k \\times l = 35 \\times 25 = \\mathbf{875\\text{ grams}}$$

<h4>Part (iii): Length for Mass of 1.05 kg</h4>
<p>Convert $1.05\\text{ kg}$ to grams: $1.05 \\times 1000 = 1050\\text{ grams}$.</p>
$$l = \\frac{m}{k} = \\frac{1050}{35} = \\mathbf{30\\text{ metres}}$$`,
    solution_ml: `<h4>ഭാഗം (i): അനുപാത സ്ഥിരസംഖ്യ കണ്ടെത്തൽ</h4>
<p>കമ്പിയുടെ കനം ഒരുപോലെയായതിനാൽ ഭാരവും നീളവും നേർ അനുപാതത്തിലാണ് ($m = kl$):</p>
$$k = \\frac{420}{12} = \\mathbf{35\\text{ ഗ്രാം/മീറ്റർ}}$$

<h4>ഭാഗം (ii): 25 മീറ്ററിന്റെ ഭാരം</h4>
$$m = 35 \\times 25 = \\mathbf{875\\text{ ഗ്രാം}}$$

<h4>ഭാഗം (iii): 1.05 കിലോഗ്രാം ഭാരമുള്ള കമ്പിയുടെ നീളം</h4>
$$1.05\\text{ kg} = 1050\\text{ ഗ്രാം}$$
$$l = \\frac{1050}{35} = \\mathbf{30\\text{ മീറ്റർ}}$$`,
    tested_en: 'Direct proportion modeling, constant determination and dual inversions.',
    tested_ml: 'നേർ അനുപാത സമവാക്യ രൂപീകരണവും അളവുകൾ കണ്ടെത്തലും.'
  },

  {
    id: 'w.m9.12.2',
    concept: 'm9.12.2.geometric-proportion',
    sec: '9.12.2',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Geometric Scaling of Triangular Park and Area Ratio',
    title_ml: 'ത്രികോണ പാർക്കിന്റെ വികാസ നിരക്കും പരപ്പളവ് അനുപാതവും',
    prompt_en: '<p>A triangular park has sides $30\\text{ m}, 40\\text{ m},$ and $50\\text{ m}$. A municipal model of this park is built so that its perimeter is $24\\text{ metres}$.</p><p>(i) Verify that the original park is a right-angled triangle and calculate its area.</p><p>(ii) Find the scale factor $k$ of the model, and calculate the side lengths of the model.</p><p>(iii) Calculate the area of the model park using the area scaling property.</p>',
    prompt_ml: '<p>ഒരു ത്രികോണാകൃതിയിലുള്ള പാർക്കിന്റെ വശങ്ങൾ $30\\text{ m}, 40\\text{ m}, 50\\text{ m}$ ആണ്. ഈ പാർക്കിന്റെ ഒരു മാതൃക നിർമ്മിച്ചപ്പോൾ അതിന്റെ ചുറ്റളവ് $24\\text{ മീറ്റർ}$ ആയി.</p><p>(i) യഥാർത്ഥ പാർക്ക് ഒരു മട്ടത്രികോണമാണെന്ന് സമർത്ഥിച്ച് അതിന്റെ പരപ്പളവ് കാണുക.</p><p>(ii) മാതൃകയുടെ അനുപാത നിരക്ക് $k$ കണ്ടെത്തി, മാതൃകയുടെ വശങ്ങളുടെ നീളങ്ങൾ കണ്ടെത്തുക.</p><p>(iii) പരപ്പളവ് അനുപാത നിയമം ഉപയോഗിച്ച് മാതൃകാ പാർക്കിന്റെ പരപ്പളവ് കണക്കാക്കുക.</p>',
    solution_en: `<h4>Step 1: Check Right Triangle and Area of Original Park</h4>
$$30^2 + 40^2 = 900 + 1600 = 2500 = 50^2$$
<p>By the converse of the Pythagorean theorem, the park is a right triangle with perpendicular sides $30\\text{ m}$ and $40\\text{ m}$.</p>
$$\\text{Area of Original } A = \\frac{1}{2} \\times 30 \\times 40 = \\mathbf{600\\text{ sq metres}}$$

<h4>Step 2: Scale Factor and Model Sides</h4>
<p>Original perimeter $P = 30 + 40 + 50 = 120\\text{ m}$. Model perimeter $P' = 24\\text{ m}$.</p>
$$\\text{Scale factor } k = \\frac{P'}{P} = \\frac{24}{120} = \\frac{1}{5} = 0.2$$
<p>Model sides:</p>
$$s_1' = \\frac{1}{5} \\times 30 = \\mathbf{6\\text{ m}}, \\quad s_2' = \\frac{1}{5} \\times 40 = \\mathbf{8\\text{ m}}, \\quad s_3' = \\frac{1}{5} \\times 50 = \\mathbf{10\\text{ m}}$$

<h4>Step 3: Area of the Model Park</h4>
$$\\text{Area of Model } A' = k^2 \\times A = \\left(\\frac{1}{5}\\right)^2 \\times 600 = \\frac{1}{25} \\times 600 = \\mathbf{24\\text{ sq metres}}$$
<p>(Verification: $\\frac{1}{2} \\times 6 \\times 8 = 24\\text{ sq m}$).</p>`,
    solution_ml: `<h4>ഘട്ടം 1: മട്ടത്രികോണ പരിശോധനയും പരപ്പളവും</h4>
$$30^2 + 40^2 = 900 + 1600 = 2500 = 50^2$$
<p>പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം ഇതൊരു മട്ടത്രികോണമാണ്.</p>
$$\\text{പരപ്പളവ് } A = \\frac{1}{2} \\times 30 \\times 40 = \\mathbf{600\\text{ ചതുരശ്ര മീറ്റർ}}$$

<h4>ഘട്ടം 2: സ്കെയിൽ ഘടകവും മാതൃകയുടെ വശങ്ങളും</h4>
<p>യഥാർത്ഥ ചുറ്റളവ് $P = 30 + 40 + 50 = 120\\text{ m}$. മാതൃകയുടെ ചുറ്റളവ് $= 24\\text{ m}$.</p>
$$k = \\frac{24}{120} = \\frac{1}{5}$$
<p>മാതൃകയുടെ വശങ്ങൾ: $6\\text{ m}, 8\\text{ m}, 10\\text{ m}$.</p>

<h4>ഘട്ടം 3: മാതൃകയുടെ പരപ്പളവ്</h4>
$$A' = k^2 \\times A = \\left(\\frac{1}{5}\\right)^2 \\times 600 = \\frac{600}{25} = \\mathbf{24\\text{ ചതുരശ്ര മീറ്റർ}}$$`,
    tested_en: 'Perimeter scaling, side proportions, and quadratic area scaling.',
    tested_ml: 'ചുറ്റളവ്, വശങ്ങൾ, പരപ്പളവ് എന്നിവയിലെ അനുപാത നിയമങ്ങൾ.'
  },

  {
    id: 'w.m9.12.3',
    concept: 'm9.12.3.direct-proportion-and-linear-equations',
    sec: '9.12.3',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Properties of Direct Proportion Graph and Origin Criteria',
    title_ml: 'നേർ അനുപാത ഗ്രാഫിന്റെ സവിശേഷതകളും മൂലബിന്ദു നിയമവും',
    prompt_en: '<p>(i) Two quantities $x$ and $y$ are related by the equation $y = 3.5x$. State three geometric properties of the graph of this equation.</p><p>(ii) Determine the coordinates of the point on this line whose $y$-coordinate is $28$.</p><p>(iii) Explain why the relationship $y = 3.5x + 4$ is NOT a directly proportional relationship.</p>',
    prompt_ml: '<p>(i) $x, y$ എന്നീ രണ്ട് അളവുകൾ $y = 3.5x$ എന്ന സമവാക്യത്താൽ ബന്ധപ്പെട്ടിരിക്കുന്നു. ഈ സമവാക്യത്തിന്റെ ഗ്രാഫിന്റെ മൂന്ന് ജ്യാമിതീയ സവിശേഷതകൾ എഴുതുക.</p><p>(ii) ഈ വരയിൽ $y$-സൂചകസംഖ്യ $28$ ആയ ബിന്ദുവിന്റെ നിർദ്ദേശാങ്കങ്ങൾ കണ്ടെത്തുക.</p><p>(iii) $y = 3.5x + 4$ എന്ന സമവാക്യം നേർ അനുപാതത്തെ പ്രതിനിധീകരിക്കുന്നില്ല എന്ന് വിശദീകരിക്കുക.</p>',
    solution_en: `<h4>Part (i): Geometric Properties of the Graph</h4>
<ul>
  <li><b>Passes through Origin:</b> The line strictly passes through $(0, 0)$ because when $x = 0$, $y = 3.5(0) = 0$.</li>
  <li><b>Straight Line:</b> It is a linear graph with constant slope $m = 3.5$.</li>
  <li><b>Positive Slope:</b> Since $k = 3.5 > 0$, the line rises continuously from bottom-left to top-right.</li>
</ul>

<h4>Part (ii): Coordinates when $y = 28$</h4>
$$y = 3.5x \\implies 28 = 3.5x \\implies x = \\frac{28}{3.5} = \\mathbf{8}$$
<p>The coordinates are <b>$(8, 28)$</b>.</p>

<h4>Part (iii): Why $y = 3.5x + 4$ is not Direct Proportion</h4>
<p>For direct proportion, the ratio $\\frac{y}{x}$ must remain constant for all $x$. For $y = 3.5x + 4$:</p>
$$\\frac{y}{x} = 3.5 + \\frac{4}{x}$$
<p>This ratio depends on $x$ and changes as $x$ varies. Geometrically, the line crosses the $y$-axis at $(0, 4) \\neq (0, 0)$, violating the requirement of passing through the origin.</p>`,
    solution_ml: `<h4>ഭാഗം (i): ഗ്രാഫിന്റെ സവിശേഷതകൾ</h4>
<ul>
  <li><b>മൂലബിന്ദുവിലൂടെ കടന്നുപോകുന്നു:</b> $x = 0$ ആകുമ്പോൾ $y = 0$ ആയതിനാൽ വര $(0, 0)$-ലൂടെ കടന്നുപോകുന്നു.</li>
  <li><b>നേർവര:</b> ഇത് ചരിവ് $3.5$ ആയ ഒരു നേർവരയാണ്.</li>
  <li><b>പോസിറ്റീവ് ചരിവ്:</b> $x$ കൂടുന്തോറും $y$-യും വർദ്ധിക്കുന്നു.</li>
</ul>

<h4>ഭാഗം (ii): $y = 28$ ആകുമ്പോഴുള്ള ബിന്ദു</h4>
$$28 = 3.5x \\implies x = \\frac{28}{3.5} = 8$$
<p>ബിന്ദുവിന്റെ നിർദ്ദേശാങ്കങ്ങൾ <b>$(8, 28)$</b> ആണ്.</p>

<h4>ഭാഗം (iii): $y = 3.5x + 4$ നേർ അനുപാതമല്ലാത്തതിന്റെ കാരണം</h4>
<p>നേർ അനുപാതത്തിൽ $\\frac{y}{x}$ എപ്പോഴും സ്ഥിരമായിരിക്കണം. എന്നാൽ ഇവിടെ $\\frac{y}{x} = 3.5 + \\frac{4}{x}$ എന്നത് $x$-നനുസരിച്ച് മാറുന്നു. ഗ്രാഫ് $(0, 0)$-ലൂടെയല്ല, $(0, 4)$-ലൂടെയാണ് കടന്നുപോകുന്നത്.</p>`,
    tested_en: 'Direct proportion properties, coordinate solving, and origin criterion.',
    tested_ml: 'നേർ അനുപാത ഗ്രാഫിന്റെ സവിശേഷതകളും നിർദ്ദേശാങ്കങ്ങളും.'
  },

  {
    id: 'w.m9.12.4',
    concept: 'm9.12.4.inverse-proportion',
    sec: '9.12.4',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Inverse Proportion in Worker-Days and Labor Allocation',
    title_ml: 'തൊഴിലാളി ദിനങ്ങളിലെ വ്യസ്താനുപാതവും ജോലി വിഭജനവും',
    prompt_en: '<p>A construction project can be completed by $18$ workers in $25$ days.</p><p>(i) Show that the number of workers $w$ and the number of days $d$ are inversely proportional, and find the constant of variation (total worker-days).</p><p>(ii) If the project must be finished in $15$ days, how many total workers are required?</p><p>(iii) If only $10$ workers turn up for the job, how many days will the project take?</p>',
    prompt_ml: '<p>ഒരു നിർമ്മാണ ജോലി പൂർത്തിയാക്കാൻ $18$ തൊഴിലാളികൾക്ക് $25$ ദിവസം വേണം.</p><p>(i) തൊഴിലാളികളുടെ എണ്ണം $w$-ഉം ദിവസങ്ങളുടെ എണ്ണം $d$-യും വ്യസ്താനുപാതത്തിലാണെന്ന് സമർത്ഥിച്ച് ആകെ തൊഴിൽദിനങ്ങൾ (അനുപാത സ്ഥിരസംഖ്യ) കണ്ടെത്തുക.</p><p>(ii) ഈ ജോലി $15$ ദിവസം കൊണ്ട് തീർക്കണമെങ്കിൽ ആകെ എത്ര തൊഴിലാളികൾ വേണം?</p><p>(iii) $10$ തൊഴിലാളികൾ മാത്രമാണ് എത്തുന്നതെങ്കിൽ ജോലി തീരാൻ എത്ര ദിവസങ്ങൾ വേണ്ടിവരും?</p>',
    solution_en: `<h4>Part (i): Inverse Proportion and Total Worker-Days</h4>
<p>Assuming all workers work at the same uniform rate, doubling workers halves the time required. The product of workers and days represents total labor:</p>
$$k = w \\times d = 18 \\times 25 = \\mathbf{450\\text{ worker-days}}$$
<p>Since the product $w \\cdot d = 450$ is invariant, $w$ and $d$ are inversely proportional ($w = \\frac{450}{d}$).</p>

<h4>Part (ii): Workers Needed to Finish in 15 Days</h4>
$$w = \\frac{k}{d} = \\frac{450}{15} = \\mathbf{30\\text{ workers}}$$
<p>($30 - 18 = 12$ additional workers needed).</p>

<h4>Part (iii): Days Taken by 10 Workers</h4>
$$d = \\frac{k}{w} = \\frac{450}{10} = \\mathbf{45\\text{ days}}$$`,
    solution_ml: `<h4>ഭാഗം (i): വ്യസ്താനുപാതവും ആകെ തൊഴിൽദിനങ്ങളും</h4>
<p>തൊഴിലാളികളുടെ എണ്ണവും ദിവസങ്ങളും ഗുണിച്ചാൽ ആകെ തൊഴിൽദിനങ്ങൾ ലഭിക്കുന്നു:</p>
$$k = w \\times d = 18 \\times 25 = \\mathbf{450\\text{ തൊഴിൽദിനങ്ങൾ}}$$
<p>ഗുണനഫലം സ്ഥിരമായതിനാൽ ഇവ വ്യസ്താനുപാതത്തിലാണ് ($w \\cdot d = 450$).</p>

<h4>ഭാഗം (ii): 15 ദിവസം കൊണ്ട് തീർക്കാൻ വേണ്ട തൊഴിലാളികൾ</h4>
$$w = \\frac{450}{15} = \\mathbf{30\\text{ തൊഴിലാളികൾ}}$$

<h4>ഭാഗം (iii): 10 തൊഴിലാളികൾ എടുക്കുന്ന ദിവസങ്ങൾ</h4>
$$d = \\frac{450}{10} = \\mathbf{45\\text{ ദിവസങ്ങൾ}}$$`,
    tested_en: 'Inverse proportion modeling and reciprocal calculations.',
    tested_ml: 'വ്യസ്താനുപാത സമവാക്യവും പ്രായോഗിക പ്രശ്ന നിർദ്ധാരണവും.'
  },

  {
    id: 'w.m9.12.5',
    concept: 'm9.12.2.geometric-proportion',
    sec: '9.12.2',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Geometric Scaling of Rectangular Frame and Area Proportionality',
    title_ml: 'ചതുര ഫ്രെയിമിന്റെ ജ്യാമിതീയ വികാസവും പരപ്പളവ് അനുപാതവും',
    tested_en: 'Linear scaling factor, side enlargement, and quadratic area ratio.',
    tested_ml: 'രേഖീയ അളവുകളുടെ വികാസ നിരക്കും പരപ്പളവ് വർഗ്ഗാനുപാതവും.',
    prompt_en: '<p>A rectangular picture frame measures $12\\text{ cm}$ in length and $8\\text{ cm}$ in breadth. It is enlarged proportionally such that the length of the new frame is $30\\text{ cm}$.</p><p>(i) Find the scale factor of enlargement $k$.</p><p>(ii) Calculate the breadth and the perimeter of the enlarged frame.</p><p>(iii) Calculate the ratio of the area of the new frame to the area of the original frame, and find the area of the new frame.</p>',
    prompt_ml: '<p>ഒരു ചതുര ഫോട്ടോ ഫ്രെയിമിന്റെ നീളം $12\\text{ cm}$-ഉം വീതി $8\\text{ cm}$-ഉം ആണ്. ഇതിനെ ആനുപാതികമായി വലുതാക്കിയപ്പോൾ പുതിയ ഫ്രെയിമിന്റെ നീളം $30\\text{ cm}$ ആയി.</p><p>(i) വികാസ നിരക്ക് (സ്കെയിൽ ഘടകം $k$) എത്രയെന്ന് കാണുക.</p><p>(ii) പുതിയ ഫ്രെയിമിന്റെ വീതിയും ചുറ്റളവും കണക്കാക്കുക.</p><p>(iii) പുതിയ ഫ്രെയിമിന്റെ പരപ്പളവും ആദ്യ ഫ്രെയിമിന്റെ പരപ്പളവും തമ്മിലുള്ള അംശബന്ധം എത്രയെന്ന് കണ്ടെത്തി, പുതിയ ഫ്രെയിമിന്റെ പരപ്പളവ് കണക്കാക്കുക.</p>',
    solution_en: `<h4>Step 1: Calculate Scale Factor ($k$)</h4>
<p>The length scales from $12\\text{ cm}$ to $30\\text{ cm}$:</p>
$$k = \\frac{\\text{New Length}}{\\text{Original Length}} = \\frac{30}{12} = \\mathbf{2.5}$$

<h4>Step 2: Breadth and Perimeter of Enlarged Frame</h4>
<p>New breadth $b'$:</p>
$$b' = k \\times b = 2.5 \\times 8 = \\mathbf{20\\text{ cm}}$$
<p>Original perimeter $P = 2(12 + 8) = 2(20) = 40\\text{ cm}$.</p>
<p>New perimeter $P'$:</p>
$$P' = 2(30 + 20) = 2(50) = \\mathbf{100\\text{ cm}}$$
<p>(Verification: $P' = k \\times P = 2.5 \\times 40 = 100\\text{ cm}$).</p>

<h4>Step 3: Area Ratio and New Area</h4>
<p>Area of original frame $A = 12 \\times 8 = 96\\text{ sq cm}$.</p>
<p>By the area scaling property:</p>
$$\\frac{A'}{A} = k^2 = (2.5)^2 = \\mathbf{6.25}$$
$$\\text{New Area } A' = 6.25 \\times 96 = \\mathbf{600\\text{ sq cm}}$$
<p>(Verification: $30 \\times 20 = 600\\text{ sq cm}$).</p>`,
    solution_ml: `<h4>ഘട്ടം 1: വികാസ നിരക്ക് ($k$) കാണൽ</h4>
<p>നീളം $12\\text{ cm}$-ൽ നിന്ന് $30\\text{ cm}$ ആയി മാറുന്നു:</p>
$$k = \\frac{30}{12} = \\mathbf{2.5}$$

<h4>ഘട്ടം 2: പുതിയ ഫ്രെയിമിന്റെ വീതിയും ചുറ്റളവും</h4>
<p>പുതിയ വീതി $b'$:</p>
$$b' = 2.5 \\times 8 = \\mathbf{20\\text{ cm}}$$
<p>പുതിയ ചുറ്റളവ് $P'$:</p>
$$P' = 2(30 + 20) = 2 \\times 50 = \\mathbf{100\\text{ cm}}$$

<h4>ഘട്ടം 3: പരപ്പളവ് അംശബന്ധവും പുതിയ പരപ്പളവും</h4>
<p>ആദ്യ ഫ്രെയിമിന്റെ പരപ്പളവ് $A = 12 \\times 8 = 96\\text{ ചതുരശ്ര സെ.മീ}$.</p>
<p>പരപ്പളവുകൾ തമ്മിലുള്ള അംശബന്ധം:</p>
$$\\frac{A'}{A} = k^2 = (2.5)^2 = \\mathbf{6.25}$$
$$\\text{പുതിയ പരപ്പളവ് } A' = 6.25 \\times 96 = \\mathbf{600\\text{ ചതുരശ്ര സെ.മീ}}$$`
  },

  {
    id: 'w.m9.12.6',
    concept: 'm9.12.4.inverse-proportion',
    sec: '9.12.4',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Inverse Proportion in Pump Capacity and Reservoir Filling Time',
    title_ml: 'പമ്പുകളുടെ എണ്ണവും ടാങ്ക് നിറയ്ക്കാനെടുക്കുന്ന സമയവും തമ്മിലുള്ള വ്യസ്താനുപാതം',
    tested_en: 'Inverse proportion product invariance, pump-hours modeling, and reciprocal solving.',
    tested_ml: 'വ്യസ്താനുപാത സ്ഥിരതയും പമ്പുകളുടെ പ്രവർത്തന സമയ നിർണ്ണയവും.',
    prompt_en: '<p>A large water reservoir can be filled completely by $6$ identical pumps working together in $10\\text{ hours}$.</p><p>(i) Explain why the number of pumps and the filling time are inversely proportional, and find the constant of variation (total pump-hours required).</p><p>(ii) If only $4$ pumps are operational, how many hours will it take to fill the reservoir?</p><p>(iii) If the reservoir must be filled in $4\\text{ hours}$, how many total pumps are required, and how many additional pumps must be installed?</p>',
    prompt_ml: '<p>ഒരു വലിയ ജലാശയം ഒരേ ശേഷിയുള്ള $6$ പമ്പുകൾ ഒരുമിച്ച് പ്രവർത്തിച്ചാൽ $10\\text{ മണിക്കൂർ}$ കൊണ്ട് നിറയ്ക്കാം.</p><p>(i) പമ്പുകളുടെ എണ്ണവും സമയം എടുക്കുന്നതും തമ്മിൽ വ്യസ്താനുപാതത്തിലാണെന്ന് സമർത്ഥിച്ച് അനുപാത സ്ഥിരസംഖ്യ (ആകെ പമ്പ്-മണിക്കൂറുകൾ) കണ്ടെത്തുക.</p><p>(ii) $4$ പമ്പുകൾ മാത്രമാണ് പ്രവർത്തിക്കുന്നതെങ്കിൽ ജലാശയം നിറയാൻ എത്ര മണിക്കൂർ വേണ്ടിവരും?</p><p>(iii) ജലാശയം $4\\text{ മണിക്കൂർ}$ കൊണ്ട് നിറയ്ക്കണമെങ്കിൽ ആകെ എത്ര പമ്പുകൾ വേണം? ഇതിനായി എത്ര പുതിയ പമ്പുകൾ അധികമായി സ്ഥാപിക്കണം?</p>',
    solution_en: `<h4>Part (i): Inverse Proportionality and Constant of Variation</h4>
<p>Each pump delivers water at an identical constant rate. Doubling the number of pumps halves the time required. Thus, the product of the number of pumps ($n$) and the time ($t$) remains invariant:</p>
$$k = n \\times t = 6 \\times 10 = \\mathbf{60\\text{ pump-hours}}$$
<p>Since $n \\times t = 60$, the quantities vary inversely ($t = \\frac{60}{n}$).</p>

<h4>Part (ii): Time Taken by 4 Pumps</h4>
<p>When $n = 4$:</p>
$$t = \\frac{k}{n} = \\frac{60}{4} = \\mathbf{15\\text{ hours}}$$

<h4>Part (iii): Pumps Needed to Fill in 4 Hours</h4>
<p>When $t = 4\\text{ hours}$:</p>
$$n = \\frac{k}{t} = \\frac{60}{4} = \\mathbf{15\\text{ pumps}}$$
<p>Additional pumps required:</p>
$$\\text{Additional pumps} = 15 - 6 = \\mathbf{9\\text{ pumps}}$$`,
    solution_ml: `<h4>ഭാഗം (i): വ്യസ്താനുപാതവും അനുപാത സ്ഥിരസംഖ്യയും</h4>
<p>എല്ലാ പമ്പുകൾക്കും ഒരേ പമ്പിംഗ് ശേഷിയായതിനാൽ പമ്പുകളുടെ എണ്ണം ഇരട്ടിയാക്കുമ്പോൾ സമയം പകുതിയായി കുറയുന്നു. അതിനാൽ പമ്പുകളുടെ എണ്ണം ($n$), സമയം ($t$) എന്നിവയുടെ ഗുണനഫലം സ്ഥിരമാണ്:</p>
$$k = n \\times t = 6 \\times 10 = \\mathbf{60\\text{ പമ്പ്-മണിക്കൂറുകൾ}}$$
<p>$n \\times t = 60$ ആയതിനാൽ ഇവ വ്യസ്താനുപാതത്തിലാണ് ($t = \\frac{60}{n}$).</p>

<h4>ഭാഗം (ii): 4 പമ്പുകൾ എടുക്കുന്ന സമയം</h4>
<p>$n = 4$ ആകുമ്പോൾ:</p>
$$t = \\frac{60}{4} = \\mathbf{15\\text{ മണിക്കൂർ}}$$

<h4>ഭാഗം (iii): 4 മണിക്കൂർ കൊണ്ട് നിറയ്ക്കാൻ വേണ്ട പമ്പുകൾ</h4>
<p>$t = 4\\text{ മണിക്കൂർ}$ ആകുമ്പോൾ:</p>
$$n = \\frac{60}{4} = \\mathbf{15\\text{ പമ്പുകൾ}}$$
<p>അധികമായി വേണ്ട പമ്പുകൾ:</p>
$$\\text{അധിക പമ്പുകൾ} = 15 - 6 = \\mathbf{9\\text{ പമ്പുകൾ}}$$`
  }
);
