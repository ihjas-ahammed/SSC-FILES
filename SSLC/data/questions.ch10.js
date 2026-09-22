/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 10: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     8.10.1 Data and Tally Marks
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.10.1',
    concept: 'm8.10.1.data-and-tally',
    sec: '8.10.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What does the term "frequency" of an observation mean in statistics?',
    prompt_ml: 'സ്ഥിതിവിവരക്കണക്കിൽ ഒരു വിവരത്തിന്റെ "ആവൃത്തി" എന്നാൽ എന്താണ്?',
    options_en: [
      { k: 'A', t: 'The number of times the observation occurs' },
      { k: 'B', t: 'The average of all observations' },
      { k: 'C', t: 'The largest observation in the dataset' },
      { k: 'D', t: 'The difference between highest and lowest value' }
    ],
    options_ml: [
      { k: 'A', t: 'ആ വിവരം എത്ര തവണ ആവർത്തിച്ചു വന്നു എന്നതിന്റെ എണ്ണം' },
      { k: 'B', t: 'എല്ലാ വിവരങ്ങളുടെയും ശരാശരി' },
      { k: 'C', t: 'ശേഖരിച്ച വിവരങ്ങളിലെ ഏറ്റവും വലിയ അളവ്' },
      { k: 'D', t: 'ഏറ്റവും കൂടിയതും കുറഞ്ഞതുമായ അളവുകൾ തമ്മിലുള്ള വ്യത്യാസം' }
    ],
    answer: 'A',
    solution_en: 'Frequency is the count of how many times a particular value occurs in the dataset.',
    solution_ml: 'ഒരു വിവരം എത്ര തവണ ആവർത്തിച്ചു വന്നു എന്നതിന്റെ എണ്ണത്തെയാണ് ആവൃത്തി എന്ന് വിളിക്കുന്നത്.',
    tested_en: 'Definition of frequency in statistics.',
    tested_ml: 'ആവൃത്തിയുടെ നിർവ്വചനം.'
  },
  {
    id: 'obj.m8.10.2',
    concept: 'm8.10.1.data-and-tally',
    sec: '8.10.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a frequency table, 3 complete bundles of 5 tally marks and 2 additional strokes are recorded. What is the frequency?',
    prompt_ml: 'ഒരു ആവൃത്തിപ്പട്ടികയിൽ 5 അടയാളങ്ങൾ വീതമുള്ള 3 കെട്ടുകളും 2 അധിക വരകളും അടയാളപ്പെടുത്തിയിരിക്കുന്നു. ആവൃത്തി എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$17$' },
      { k: 'C', t: '$12$' },
      { k: 'D', t: '$20$' }
    ],
    options_ml: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$17$' },
      { k: 'C', t: '$12$' },
      { k: 'D', t: '$20$' }
    ],
    answer: 'B',
    solution_en: '$\\text{Frequency} = (3 \\times 5) + 2 = 15 + 2 = 17$.',
    solution_ml: '$\\text{ആവൃത്തി} = (3 \\times 5) + 2 = 15 + 2 = 17$.',
    tested_en: 'Reading tally marks.',
    tested_ml: 'എണ്ണൽ അടയാളങ്ങൾ വായിക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.10.2 Grouped Frequency Table
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.10.3',
    concept: 'm8.10.2.grouped-frequency-table',
    sec: '8.10.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In the class interval $140 - 150$, what is the class width (size)?',
    prompt_ml: '$140 - 150$ എന്ന ക്ലാസ് വിഭാഗത്തിന്റെ ക്ലാസ് വിസ്തൃതി എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$140$' },
      { k: 'C', t: '$150$' },
      { k: 'D', t: '$145$' }
    ],
    options_ml: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$140$' },
      { k: 'C', t: '$150$' },
      { k: 'D', t: '$145$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Class Width} = \\text{Upper Limit} - \\text{Lower Limit} = 150 - 140 = 10$.',
    solution_ml: '$\\text{ക്ലാസ് വിസ്തൃതി} = \\text{മേലതിര്} - \\text{കീഴതിര്} = 150 - 140 = 10$.',
    tested_en: 'Finding class width of an interval.',
    tested_ml: 'ക്ലാസ് വിസ്തൃതി കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m8.10.4',
    concept: 'm8.10.2.grouped-frequency-table',
    sec: '8.10.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In continuous grouping $20 - 30, 30 - 40, 40 - 50$, in which class interval is the value $30$ included?',
    prompt_ml: '$20 - 30, 30 - 40, 40 - 50$ എന്നിങ്ങനെ തുടർച്ചയായ വിഭാഗങ്ങളിൽ $30$ എന്ന അളവ് ഏത് വിഭാഗത്തിലാണ് ഉൾപ്പെടുന്നത്?',
    options_en: [
      { k: 'A', t: '$20 - 30$' },
      { k: 'B', t: '$30 - 40$' },
      { k: 'C', t: 'Both $20-30$ and $30-40$' },
      { k: 'D', t: 'Neither interval' }
    ],
    options_ml: [
      { k: 'A', t: '$20 - 30$' },
      { k: 'B', t: '$30 - 40$' },
      { k: 'C', t: '$20-30$, $30-40$ എന്നീ രണ്ടിലും' },
      { k: 'D', t: 'ഇവയിലൊന്നുമല്ല' }
    ],
    answer: 'B',
    solution_en: 'By convention in continuous grouping, an observation equal to a limit is included in the interval where it forms the lower limit ($30 - 40$).',
    solution_ml: 'അതിർത്തിയിലുള്ള അളവുകൾ, അത് കീഴതിരായി വരുന്ന വിഭാഗത്തിലാണ് ($30 - 40$) ഉൾപ്പെടുത്തുന്നത്.',
    tested_en: 'Class boundary inclusion convention.',
    tested_ml: 'ക്ലാസ് അതിർത്തിയിലെ അളവ് ഉൾപ്പെടുത്തുന്ന രീതി.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.10.3 Histogram
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.10.5',
    concept: 'm8.10.3.histogram',
    sec: '8.10.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Why are there no gaps between adjacent rectangles in a histogram?',
    prompt_ml: 'ആവൃത്തിച്ചതുരത്തിൽ അടുത്തടുത്ത ചതുരങ്ങൾക്കിടയിൽ വിടവുകൾ ഉണ്ടാകാത്തത് എന്തുകൊണ്ട്?',
    options_en: [
      { k: 'A', t: 'Because class intervals are continuous' },
      { k: 'B', t: 'Because all frequencies are equal' },
      { k: 'C', t: 'To save paper space' },
      { k: 'D', t: 'Because it is a circle diagram' }
    ],
    options_ml: [
      { k: 'A', t: 'ക്ലാസ് വിഭാഗങ്ങൾ തുടർച്ചയായ സംഖ്യാ ഇടവേളകളായതിനാൽ' },
      { k: 'B', t: 'എല്ലാ ആവൃത്തികളും തുല്യമായതിനാൽ' },
      { k: 'C', t: 'സ്ഥലം ലാഭിക്കാൻ വേണ്ടി' },
      { k: 'D', t: 'ഇതൊരു വൃത്തചിത്രമായതിനാൽ' }
    ],
    answer: 'A',
    solution_en: 'Class intervals are contiguous ranges of continuous numbers, so the rectangles meet seamlessly with no gaps.',
    solution_ml: 'ക്ലാസ് വിഭാഗങ്ങൾ തുടർച്ചയായ അളവുകളായതിനാൽ ചതുരങ്ങൾ പരസ്പരം ചേർന്നിരിക്കുന്നു, വിടവുകൾ ഉണ്ടാകില്ല.',
    tested_en: 'Understanding the structure of a histogram.',
    tested_ml: 'ആവൃത്തിച്ചതുരത്തിന്റെ ഘടന മനസ്സിലാക്കൽ.'
  },
  {
    id: 'obj.m8.10.6',
    concept: 'm8.10.3.histogram',
    sec: '8.10.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a histogram, what does the area of each rectangle represent when class widths are uniform?',
    prompt_ml: 'ക്ലാസ് വിസ്തൃതികൾ തുല്യമായിരിക്കുമ്പോൾ, ഒരു ആവൃത്തിച്ചതുരത്തിലെ ഓരോ ചതുരത്തിന്റെയും പരപ്പളവ് എന്തിന് ആനുപാതികമാണ്?',
    options_en: [
      { k: 'A', t: 'The frequency of that class interval' },
      { k: 'B', t: 'The total number of classes' },
      { k: 'C', t: 'The average of all values' },
      { k: 'D', t: 'The lower limit of the class' }
    ],
    options_ml: [
      { k: 'A', t: 'ആ വിഭാഗത്തിന്റെ ആവൃത്തിക്ക്' },
      { k: 'B', t: 'ആകെ വിഭാഗങ്ങളുടെ എണ്ണത്തിന്' },
      { k: 'C', t: 'എല്ലാ അളവുകളുടെയും ശരാശരിക്ക്' },
      { k: 'D', t: 'ആ വിഭാഗത്തിന്റെ കീഴതിരിന്' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = \\text{width} \\times \\text{height} = w \\times f$. When width is constant, area is directly proportional to frequency.',
    solution_ml: 'പരപ്പളവ് $= \\text{വീതി} \\times \\text{ഉയരം} = w \\times f$. വീതി തുല്യമായതിനാൽ പരപ്പളവ് ആവൃത്തിക്ക് നേർ അനുപാതത്തിലാണ്.',
    tested_en: 'Proportionality of area in histograms.',
    tested_ml: 'ആവൃത്തിച്ചതുരത്തിൽ പരപ്പളവിന്റെ ആനുപാതികത.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.10.4 Data Interpretation
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.10.7',
    concept: 'm8.10.4.data-interpretation',
    sec: '8.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The frequencies of classes $0-10, 10-20, 20-30, 30-40$ are $4, 11, 15, 6$ respectively. What is the modal class?',
    prompt_ml: '$0-10, 10-20, 20-30, 30-40$ എന്നീ വിഭാഗങ്ങളുടെ ആവൃത്തികൾ യഥാക്രമം $4, 11, 15, 6$ ആണ്. ഇതിലെ മോഡൽ വിഭാഗം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$10 - 20$' },
      { k: 'B', t: '$20 - 30$' },
      { k: 'C', t: '$30 - 40$' },
      { k: 'D', t: '$0 - 10$' }
    ],
    options_ml: [
      { k: 'A', t: '$10 - 20$' },
      { k: 'B', t: '$20 - 30$' },
      { k: 'C', t: '$30 - 40$' },
      { k: 'D', t: '$0 - 10$' }
    ],
    answer: 'B',
    solution_en: 'The modal class is the interval with the highest frequency. Here $15$ is the maximum frequency, which corresponds to $20 - 30$.',
    solution_ml: 'ഏറ്റവും ഉയർന്ന ആവൃത്തിയുള്ള വിഭാഗമാണ് മോഡൽ വിഭാഗം. ഇവിടെ ഏറ്റവും ഉയർന്ന ആവൃത്തിയായ $15$ ഉള്ളത് $20 - 30$ എന്ന വിഭാഗത്തിനാണ്.',
    tested_en: 'Identifying the modal class.',
    tested_ml: 'മോഡൽ വിഭാഗം കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m8.10.8',
    concept: 'm8.10.4.data-interpretation',
    sec: '8.10.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In the distribution above ($4, 11, 15, 6$), how many total observations are $20$ or more?',
    prompt_ml: 'മുകളിലെ പട്ടികയിൽ ($4, 11, 15, 6$), $20$-ഓ അതിൽ കൂടുതലോ വരുന്ന ആകെ വിവരങ്ങളുടെ എണ്ണം എത്ര?',
    options_en: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$21$' },
      { k: 'C', t: '$36$' },
      { k: 'D', t: '$6$' }
    ],
    options_ml: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$21$' },
      { k: 'C', t: '$36$' },
      { k: 'D', t: '$6$' }
    ],
    answer: 'B',
    solution_en: 'Values $\\ge 20$ fall in intervals $20-30$ (frequency $15$) and $30-40$ (frequency $6$): Total $= 15 + 6 = 21$.',
    solution_ml: '$20$-ഓ അതിൽ കൂടുതലോ വരുന്ന വിഭാഗങ്ങൾ $20-30$ (ആവൃത്തി $15$), $30-40$ (ആവൃത്തി $6$) എന്നിവയാണ്. ആകെ $= 15 + 6 = 21$.',
    tested_en: 'Cumulative data counting from frequency distribution.',
    tested_ml: 'ആവൃത്തിപ്പട്ടികയിൽ നിന്ന് ആകെ എണ്ണം കണക്കാക്കൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m8.10.1',
    sec: '8.10.1',
    concept: 'm8.10.1.data-and-tally',
    title_en: 'Constructing a Discrete Frequency Table with Tally Marks',
    title_ml: 'എണ്ണൽ അടയാളങ്ങൾ ഉപയോഗിച്ച് ആവൃത്തിപ്പട്ടിക തയ്യാറാക്കൽ',
    prompt_en: `<p>The blood groups of 25 students of Class 8 are recorded as follows:</p>
      <p style="letter-spacing:2px; font-weight:600;">A, B, O, A, AB, O, A, O, B, A, O, B, A, O, O, AB, B, A, O, B, A, O, A, B, O</p>
      <ol type="a">
        <li>Prepare a frequency distribution table using tally marks.</li>
        <li>Which blood group is the most common among these students?</li>
        <li>Which blood group is the rarest?</li>
      </ol>`,
    prompt_ml: `<p>ക്ലാസ് 8-ലെ 25 കുട്ടികളുടെ രക്തഗ്രൂപ്പുകൾ താഴെ നൽകുന്നു:</p>
      <p style="letter-spacing:2px; font-weight:600;">A, B, O, A, AB, O, A, O, B, A, O, B, A, O, O, AB, B, A, O, B, A, O, A, B, O</p>
      <ol type="a">
        <li>എണ്ണൽ അടയാളങ്ങൾ ഉപയോഗിച്ച് ഒരു ആവൃത്തിപ്പട്ടിക തയ്യാറാക്കുക.</li>
        <li>ഏത് രക്തഗ്രൂപ്പാണ് ഏറ്റവും കൂടുതൽ കുട്ടികൾക്കുള്ളത്?</li>
        <li>ഏറ്റവും കുറവ് കുട്ടികൾക്കുള്ള രക്തഗ്രൂപ്പ് ഏതാണ്?</li>
      </ol>`,
    solution_en: `$$\\text{(a) Frequency Table:}$$
$$\\begin{array}{|c|c|c|}
\\hline
\\text{Blood Group} & \\text{Tally Marks} & \\text{Frequency } (f) \\\\
\\hline
\\text{A} & ||||\\kern-7pt{/\\kern1pt} \\; || & 7 \\\\
\\text{B} & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
\\text{AB} & || & 2 \\\\
\\text{O} & ||||\\kern-7pt{/\\kern1pt} \\; |||| & 9 \\\\
\\hline
\\text{Total} & & \\mathbf{25} \\\\
\\hline
\\end{array}$$

$$\\text{(b) Most common blood group: } \\mathbf{O} \\text{ (frequency 9)}$$
$$\\text{(c) Rarest blood group: } \\mathbf{AB} \\text{ (frequency 2)}$$`,
    solution_ml: `$$\\text{(a) ആവൃത്തിപ്പട്ടിക:}$$
$$\\begin{array}{|c|c|c|}
\\hline
\\text{രക്തഗ്രൂപ്പ്} & \\text{എണ്ണൽ അടയാളങ്ങൾ} & \\text{ആവൃത്തി } (f) \\\\
\\hline
\\text{A} & ||||\\kern-7pt{/\\kern1pt} \\; || & 7 \\\\
\\text{B} & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
\\text{AB} & || & 2 \\\\
\\text{O} & ||||\\kern-7pt{/\\kern1pt} \\; |||| & 9 \\\\
\\hline
\\text{ആകെ} & & \\mathbf{25} \\\\
\\hline
\\end{array}$$

$$\\text{(b) ഏറ്റവും കൂടുതൽ കുട്ടികൾക്കുള്ള ഗ്രൂപ്പ്: } \\mathbf{O} \\text{ (ആവൃത്തി 9)}$$
$$\\text{(c) ഏറ്റവും കുറവ് കുട്ടികൾക്കുള്ള ഗ്രൂപ്പ്: } \\mathbf{AB} \\text{ (ആവൃത്തി 2)}$$`
  },

  {
    id: 'w.m8.10.2',
    sec: '8.10.2',
    concept: 'm8.10.2.grouped-frequency-table',
    title_en: 'Preparing a Grouped Frequency Table with Class Intervals',
    title_ml: 'വിഭാഗങ്ങളാക്കിയ ആവൃത്തിപ്പട്ടിക തയ്യാറാക്കൽ',
    prompt_en: `<p>The weights (in kg) of 20 students of Class 8 are as follows:</p>
      <p style="letter-spacing:1px; font-weight:600;">32, 41, 38, 45, 36, 52, 48, 33, 44, 49, 37, 43, 54, 40, 39, 46, 51, 42, 35, 47</p>
      <ol type="a">
        <li>Prepare a grouped frequency table using class intervals $30 - 35, 35 - 40, 40 - 45, 45 - 50, 50 - 55$.</li>
        <li>State the class width of each interval.</li>
        <li>How many students have a weight of $40\\text{ kg}$ or more?</li>
      </ol>`,
    prompt_ml: `<p>ക്ലാസ് 8-ലെ 20 കുട്ടികളുടെ ഭാരം (കിലോഗ്രാമിൽ) താഴെ നൽകുന്നു:</p>
      <p style="letter-spacing:1px; font-weight:600;">32, 41, 38, 45, 36, 52, 48, 33, 44, 49, 37, 43, 54, 40, 39, 46, 51, 42, 35, 47</p>
      <ol type="a">
        <li>$30 - 35, 35 - 40, 40 - 45, 45 - 50, 50 - 55$ എന്നീ ക്ലാസ് വിഭാഗങ്ങൾ ഉപയോഗിച്ച് ആവൃത്തിപ്പട്ടിക തയ്യാറാക്കുക.</li>
        <li>ഓരോ വിഭാഗത്തിന്റെയും ക്ലാസ് വിസ്തൃതി എത്രയാണ്?</li>
        <li>$40\\text{ kg}$-ഓ അതിൽ കൂടുതലോ ഭാരമുള്ള എത്ര കുട്ടികളുണ്ട്?</li>
      </ol>`,
    solution_en: `$$\\text{(a) Grouped Frequency Table:}$$
$$\\begin{array}{|c|c|c|}
\\hline
\\text{Weight (kg)} & \\text{Tally Marks} & \\text{Frequency } (f) \\\\
\\hline
30 - 35 & || & 2 \\\\
35 - 40 & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
40 - 45 & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
45 - 50 & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
50 - 55 & ||| & 3 \\\\
\\hline
\\text{Total} & & \\mathbf{20} \\\\
\\hline
\\end{array}$$

$$\\text{(b) Class Width} = 35 - 30 = \\mathbf{5\\text{ kg}}$$
$$\\text{(c) Students with weight } \\ge 40\\text{ kg} = 5 + 5 + 3 = \\mathbf{13\\text{ students}}$$`,
    solution_ml: `$$\\text{(a) വിഭാഗങ്ങളാക്കിയ ആവൃത്തിപ്പട്ടിക:}$$
$$\\begin{array}{|c|c|c|}
\\hline
\\text{ഭാരം (kg)} & \\text{എണ്ണൽ അടയാളങ്ങൾ} & \\text{ആവൃത്തി } (f) \\\\
\\hline
30 - 35 & || & 2 \\\\
35 - 40 & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
40 - 45 & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
45 - 50 & ||||\\kern-7pt{/\\kern1pt} & 5 \\\\
50 - 55 & ||| & 3 \\\\
\\hline
\\text{ആകെ} & & \\mathbf{20} \\\\
\\hline
\\end{array}$$

$$\\text{(b) ക്ലാസ് വിസ്തൃതി} = 35 - 30 = \\mathbf{5\\text{ kg}}$$
$$\\text{(c) } 40\\text{ kg}\\text{-ഓ അതിൽ കൂടുതലോ ഭാരമുള്ള കുട്ടികൾ} = 5 + 5 + 3 = \\mathbf{13\\text{ കുട്ടികൾ}}$$`
  },

  {
    id: 'w.m8.10.3',
    sec: '8.10.3',
    concept: 'm8.10.3.histogram',
    title_en: 'Data Dimensions for Drawing a Histogram',
    title_ml: 'ആവൃത്തിച്ചതുരം വരയ്ക്കാനുള്ള അളവുകൾ ക്രമീകരിക്കൽ',
    prompt_en: `<p>The daily rainfall (in mm) in a village during a monsoon month is summarized below:</p>
      $$\\begin{array}{|c|c|c|c|c|c|}
      \\hline
      \\text{Rainfall (mm)} & 0 - 10 & 10 - 20 & 20 - 30 & 30 - 40 & 40 - 50 \\\\
      \\hline
      \\text{Number of Days} & 3 & 8 & 12 & 5 & 2 \\\\
      \\hline
      \\end{array}$$
      <ol type="a">
        <li>State the scale chosen on the horizontal ($x$) and vertical ($y$) axes to plot a histogram.</li>
        <li>Specify the base interval and height of each adjacent rectangle.</li>
        <li>State the total number of days observed in the study.</li>
      </ol>`,
    prompt_ml: `<p>ഒരു ഗ്രാമത്തിൽ ഒരു മാസത്തിൽ പെയ്ത പ്രതിദിന മഴയുടെ അളവ് (മില്ലീമീറ്ററിൽ) താഴെ നൽകുന്നു:</p>
      $$\\begin{array}{|c|c|c|c|c|c|}
      \\hline
      \\text{മഴ (mm)} & 0 - 10 & 10 - 20 & 20 - 30 & 30 - 40 & 40 - 50 \\\\
      \\hline
      \\text{ദിവസങ്ങൾ} & 3 & 8 & 12 & 5 & 2 \\\\
      \\hline
      \\end{array}$$
      <ol type="a">
        <li>ആവൃത്തിച്ചതുരം വരയ്ക്കാൻ $x$-അക്ഷത്തിലും $y$-അക്ഷത്തിലും എടുക്കാവുന്ന അനുയോജ്യമായ തോത് വ്യക്തമാക്കുക.</li>
        <li>ഓരോ ചതുരത്തിന്റെയും പാദവും ഉയരവും എത്രയാണെന്ന് എഴുതുക.</li>
        <li>ആകെ എത്ര ദിവസത്തെ വിവരങ്ങളാണ് ശേഖരിച്ചിട്ടുള്ളത്?</li>
      </ol>`,
    solution_en: `$$\\text{(a) Scale setup:}$$
$$\\text{x-axis: } 1\\text{ cm} = 10\\text{ mm rainfall} \\quad (0, 10, 20, 30, 40, 50)$$
$$\\text{y-axis: } 1\\text{ cm} = 2\\text{ days} \\quad (0, 2, 4, 6, 8, 10, 12)$$

$$\\text{(b) Rectangles on x-axis:}$$
$$\\begin{array}{|c|c|c|}
\\hline
\\text{Class Interval} & \\text{Base on x-axis} & \\text{Height on y-axis} \\\\
\\hline
0 - 10 & [0, 10] & 3 \\\\
10 - 20 & [10, 20] & 8 \\\\
20 - 30 & [20, 30] & 12 \\\\
30 - 40 & [30, 40] & 5 \\\\
40 - 50 & [40, 50] & 2 \\\\
\\hline
\\end{array}$$

$$\\text{(c) Total days} = 3 + 8 + 12 + 5 + 2 = \\mathbf{30\\text{ days}}$$`,
    solution_ml: `$$\\text{(a) തോത്:}$$
$$x\\text{-അക്ഷത്തിൽ: } 1\\text{ cm} = 10\\text{ mm മഴ} \\quad (0, 10, 20, 30, 40, 50)$$
$$y\\text{-അക്ഷത്തിൽ: } 1\\text{ cm} = 2\\text{ ദിവസങ്ങൾ} \\quad (0, 2, 4, 6, 8, 10, 12)$$

$$\\text{(b) ചതുരങ്ങളുടെ അളവുകൾ:}$$
$$\\begin{array}{|c|c|c|}
\\hline
\\text{ക്ലാസ് വിഭാഗം} & \\text{പാദം (x-അക്ഷത്തിൽ)} & \\text{ഉയരം (y-അക്ഷത്തിൽ)} \\\\
\\hline
0 - 10 & [0, 10] & 3 \\\\
10 - 20 & [10, 20] & 8 \\\\
20 - 30 & [20, 30] & 12 \\\\
30 - 40 & [30, 40] & 5 \\\\
40 - 50 & [40, 50] & 2 \\\\
\\hline
\\end{array}$$

$$\\text{(c) ആകെ ദിവസങ്ങൾ} = 3 + 8 + 12 + 5 + 2 = \\mathbf{30\\text{ ദിവസങ്ങൾ}}$$`
  },

  {
    id: 'w.m8.10.4',
    sec: '8.10.4',
    concept: 'm8.10.4.data-interpretation',
    title_en: 'Analysis and Interpretation of a Student Score Histogram',
    title_ml: 'സ്കോറുകളുടെ ആവൃത്തിച്ചതുരം അപഗ്രഥിക്കൽ',
    prompt_en: `<p>A test of 50 marks was conducted for 40 students. The score distribution is given below:</p>
      $$\\begin{array}{|c|c|c|c|c|c|}
      \\hline
      \\text{Marks} & 0 - 10 & 10 - 20 & 20 - 30 & 30 - 40 & 40 - 50 \\\\
      \\hline
      \\text{Students} & 4 & 9 & 14 & 10 & 3 \\\\
      \\hline
      \\end{array}$$
      <ol type="a">
        <li>Identify the modal class.</li>
        <li>If 20 marks is the minimum score required to pass, how many students passed the examination?</li>
        <li>What percentage of students scored 30 marks or above?</li>
      </ol>`,
    prompt_ml: `<p>40 കുട്ടികൾ പങ്കെടുത്ത 50 മാർക്കിന്റെ ഒരു പരീക്ഷയിലെ സ്കോറുകൾ താഴെ നൽകുന്നു:</p>
      $$\\begin{array}{|c|c|c|c|c|c|}
      \\hline
      \\text{സ്കോർ} & 0 - 10 & 10 - 20 & 20 - 30 & 30 - 40 & 40 - 50 \\\\
      \\hline
      \\text{കുട്ടികൾ} & 4 & 9 & 14 & 10 & 3 \\\\
      \\hline
      \\end{array}$$
      <ol type="a">
        <li>മോഡൽ വിഭാഗം ഏതാണെന്ന് കണ്ടെത്തുക.</li>
        <li>വിജയിക്കാൻ ചുരുങ്ങിയത് 20 മാർക്ക് വേണമെങ്കിൽ എത്ര കുട്ടികൾ പരീക്ഷയിൽ വിജയിച്ചു?</li>
        <li>30-ഓ അതിൽ കൂടുതലോ മാർക്ക് നേടിയ കുട്ടികളുടെ ശതമാനം എത്രയാണ്?</li>
      </ol>`,
    solution_en: `$$\\text{(a) Modal Class:}$$
$$\\text{Highest frequency is } 14, \\text{ so Modal Class} = \\mathbf{20 - 30}$$

$$\\text{(b) Number of students passing (score } \\ge 20):$$
$$\\text{Students} = 14 + 10 + 3 = \\mathbf{27\\text{ students}}$$

$$\\text{(c) Percentage scoring } \\ge 30:$$
$$\\text{Number of students} = 10 + 3 = 13$$
$$\\text{Percentage} = \\frac{13}{40} \\times 100\\% = \\mathbf{32.5\\%}$$`,
    solution_ml: `$$\\text{(a) മോഡൽ വിഭാഗം:}$$
$$\\text{ഏറ്റവും വലിയ ആവൃത്തി } 14 \\text{ ആയതിനാൽ മോഡൽ വിഭാഗം} = \\mathbf{20 - 30}$$

$$\\text{(b) വിജയിച്ച കുട്ടികളുടെ എണ്ണം (മാർക്ക് } \\ge 20):$$
$$\\text{കുട്ടികൾ} = 14 + 10 + 3 = \\mathbf{27\\text{ പേർ}}$$

$$\\text{(c) 30-ൽ കൂടുതൽ മാർക്ക് നേടിയവരുടെ ശതമാനം:}$$
$$\\text{കുട്ടികളുടെ എണ്ണം} = 10 + 3 = 13$$
$$\\text{ശതമാനം} = \\frac{13}{40} \\times 100\\% = \\mathbf{32.5\\%}$$`
  }
);
