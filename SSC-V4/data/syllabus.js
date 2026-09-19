/* ══════════════════════════════════════════════════════════════════════════
   Syllabus views over the shared content pool.
   Content nodes are keyed to Bartle & Sherbert 4e numbers; a syllabus is only
   a MAPPING. Adding a GATE or JAM view later means adding an entry here — it
   never means re-authoring content.
   ══════════════════════════════════════════════════════════════════════════ */
const DATA_KIND = 'live';

const SYLLABI = [
 { id:'ra1', title:'Real Analysis I', code:'MAT4CJ203', sem:'IV', book:'Bartle & Sherbert 4e',
   blurb:'Set theory, the construction of the reals, and the limit of a sequence.',
   modules:[
    { id:'ra1.m1', n:'I',  title:'Introduction to Set Theory', marks:15,
      secs:['1.1','1.2','1.3'] },
    { id:'ra1.m2', n:'II', title:'The Real Numbers', marks:15,
      secs:['2.1','2.2','2.3','2.4','2.5'] },
    { id:'ra1.m3', n:'III',title:'Sequences and Limits', marks:15,
      secs:['3.1','3.2','3.3'] },
    { id:'ra1.m4', n:'IV', title:'Sequences and Limits (continued)', marks:10,
      secs:['3.4','3.5','3.6','3.7','4.1','4.2','4.3'] },
    { id:'ra1.m5', n:'+',  title:'Topology of the Line & Metric Spaces', marks:0, ext:true,
      secs:['11.1','11.2','11.3','11.4'] }
   ]},
 { id:'ra2', title:'Real Analysis II', code:'MAT5CJ301', sem:'V', book:'Bartle & Sherbert 4e',
   blurb:'Continuity, the derivative, the Riemann integral, and limits of function sequences.',
   needs:'ra1',
    modules:[
     { id:'ra2.m1', n:'I',  title:'Continuous Functions', marks:15,
       secs:['5.1','5.2','5.3','5.4','5.5','5.6'], extSecs:['5.5'] },
     { id:'ra2.m2', n:'II', title:'Differentiation', marks:15,
       secs:['6.1','6.2','6.3','6.4'] },
     { id:'ra2.m3', n:'III',title:'The Riemann Integral', marks:20,
       secs:['7.1','7.2','7.3','7.4','7.5'], extSecs:['7.4','7.5'] },
     { id:'ra2.m4', n:'IV', title:'Sequences and Series of Functions', marks:10,
       secs:['8.1','8.2','8.3','8.4'], extSecs:['8.3','8.4'] },
     { id:'ra2.m5', n:'+',  title:'Infinite Series', marks:0, ext:true,
       secs:['9.1','9.2','9.3','9.4'] },
     { id:'ra2.m6', n:'+',  title:'The Generalized Riemann Integral', marks:0, ext:true,
       secs:['10.1','10.2','10.3','10.4'] }
    ]},
  {
    id: 'rae', title: 'Real Analysis for Entrance', code: 'GATE / JAM / CUSAT', sem: '—',
    blurb: 'Complete Entrance Course — metric spaces, compactness, Ascoli–Arzelà, multivariable calculus, and Lebesgue integration.',
    needs: 'ra2',
    modules: [
      { id: 'rae.t1', n: 'E1', title: 'General metric spaces', secs: ['E1'],
        builds: ['c.2.3.2', 'c.5.1.1'],
        why: 'Generalises the absolute-value distance used throughout RA1.' },
      { id: 'rae.t2', n: 'E2', title: 'Baire category', secs: ['E2'],
        builds: ['c.2.3.6'], why: 'Completeness, used as a tool rather than an axiom.' },
      { id: 'rae.t3', n: 'E3', title: 'Compactness and connectedness in metric spaces', secs: ['E3'],
        builds: ['c.3.4.8', 'c.5.3.4', 'c.5.4.3'],
        why: 'The abstract form of the Bolzano–Weierstrass engine behind §5.3 and §5.4.' },
      { id: 'rae.t4', n: 'E4', title: 'Equicontinuity and Ascoli–Arzelà', secs: ['E4'],
        builds: ['c.5.4.1'], why: 'Uniform continuity, made uniform across a family of functions.' },
      { id: 'rae.t5', n: 'E5', title: 'Inverse and implicit function theorems', secs: ['E5'],
        builds: ['c.6.2.4'], why: 'The several-variable successors of the MVT.' },
      { id: 'rae.t6', n: 'E6', title: 'Lebesgue measure and measurable functions', secs: ['E6'],
        builds: ['c.2.3.6'], why: 'Built on the supremum property; length becomes measure.' },
      { id: 'rae.t7', n: 'E7', title: 'Lebesgue integration and the convergence theorems', secs: ['E7'],
        builds: ['c.2.3.6'],
        why: 'Fatou, monotone and dominated convergence — what Riemann cannot give.' }
    ]
  }
];

/* Section titles, straight from the textbook's contents. */
const SECTITLE = {
 '1.1':'Sets and Functions','1.2':'Mathematical Induction','1.3':'Finite and Infinite Sets',
 '2.1':'The Algebraic and Order Properties of ℝ','2.2':'Absolute Value and the Real Line',
 '2.3':'The Completeness Property of ℝ','2.4':'Applications of the Supremum Property','2.5':'Intervals',
 '3.1':'Sequences and Their Limits','3.2':'Limit Theorems','3.3':'Monotone Sequences',
 '3.4':'Subsequences and the Bolzano–Weierstrass Theorem','3.5':'The Cauchy Criterion',
 '3.6':'Properly Divergent Sequences','3.7':'Introduction to Infinite Series',
 '4.1':'Limits of Functions','4.2':'Limit Theorems','4.3':'Some Extensions of the Limit Concept',
 '5.1':'Continuous Functions','5.2':'Combinations of Continuous Functions',
 '5.3':'Continuous Functions on Intervals','5.4':'Uniform Continuity',
 '5.5':'Continuity and Gauges','5.6':'Monotone and Inverse Functions',
 '6.1':'The Derivative','6.2':'The Mean Value Theorem','6.3':"L'Hospital's Rules",'6.4':"Taylor's Theorem",
 '7.1':'The Riemann Integral','7.2':'Riemann Integrable Functions','7.3':'The Fundamental Theorem',
 '7.4':'The Darboux Integral','7.5':'Approximate Integration',
 '8.1':'Pointwise and Uniform Convergence','8.2':'Interchange of Limits',
 '8.3':'The Exponential and Logarithmic Functions','8.4':'The Trigonometric Functions',
 '9.1':'Absolute Convergence','9.2':'Tests for Absolute Convergence',
 '9.3':'Tests for Nonabsolute Convergence','9.4':'Series of Functions',
 '10.1':'Riemann Completeness and Gauges','10.2':'Improper and Lebesgue Integrals',
 '10.3':'Infinite Intervals','10.4':'Convergence Theorems for the Generalized Integral',
 '11.1':'Open and Closed Sets in ℝ','11.2':'Compact Sets',
 '11.3':'Continuous Functions in Metric Spaces','11.4':'Metric Spaces and Completeness',
 'E1':'General Metric Spaces','E2':'Completeness and Baire Category',
 'E3':'Compactness and Connectedness','E4':'Equicontinuity and Ascoli–Arzelà',
 'E5':'Inverse and Implicit Function Theorems','E6':'Lebesgue Measure on ℝ',
 'E7':'Lebesgue Integration and Convergence Theorems'
};

/* Sections outside the core university exam syllabus (extension / supplementary topics).
   They are loaded and available for study, but do not count towards the exam progress meter. */
const EXT_SECS = {
  '5.5': true,  // Continuity and Gauges (Kurzweil-Henstock)
  '7.4': true,  // The Darboux Integral
  '7.5': true,  // Approximate Integration (Trapezoidal & Simpson's)
  '8.3': true,  // The Exponential and Logarithmic Functions
  '8.4': true,  // The Trigonometric Functions
  '9.1': true,  // Infinite Series (Module +)
  '9.2': true,
  '9.3': true,
  '9.4': true,
  '10.1': true, // The Generalized Riemann Integral (Module +)
  '10.2': true,
  '10.3': true,
  '10.4': true,
  '11.1': true, // Topology of the Line & Metric Spaces (Module +)
  '11.2': true,
  '11.3': true,
  '11.4': true
};

/* Content pool. Data files push into these. */
const CONCEPTS = [];
const OBJECTIVE = [];
const QUESTIONS = [];
const FIGS = {};

/* ══════════════════════════════════════════════════════════════════════════
   Exam tracks — the pay-off of keying content to Bartle numbers rather than
   to module numbers. A track is a *view*: which sections matter, and which of
   them are high-frequency in that paper. No content is duplicated.

   `hot` sections are weighted up in the diagnostic, in "Review first", and in
   the recall queue. Honest caveat recorded in HOOK.md: GATE and JAM also
   examine material Bartle's chapters 1–9 do not cover (metric spaces beyond
   §11, multivariable calculus). These tracks cover the real-analysis overlap,
   which is most of it, not the whole paper.
   ══════════════════════════════════════════════════════════════════════════ */
const TRACKS = [
 { id:'uni',  label:'University semester exam',
   note:'Real Analysis I &amp; II as your college examines them, with official mark weights.',
   courses:['ra1','ra2'],
   secs:null,                                    /* null = the syllabus decides */
   hot:['5.3','5.4','6.2','7.1','7.2','7.3','3.4','3.5','2.3'],
   date:'16/10/26',
   isoDate:'2026-10-16',
   required:true },

 { id:'jam',  label:'IIT JAM · Mathematics',
   note:'Held on Feb 14, 2027. Sequences and series carry heavier weight; metric spaces and chapters 8–9 become examinable.',
   courses:['ra1','ra2','rae'],
   secs:['2.3','2.4','2.5','3.1','3.2','3.3','3.4','3.5','3.6','3.7',
         '4.1','4.2','4.3','5.1','5.2','5.3','5.4','5.6',
         '6.1','6.2','6.3','6.4','7.1','7.2','7.3','7.4',
         '8.1','8.2','8.3','8.4','9.1','9.2','9.3','9.4',
         'E1','E2','E3','E4','E5'],
   hot:['3.7','9.1','9.2','9.3','9.4','8.1','8.2','6.2','6.4','7.3','3.4','E1','E3'],
   date:'14/02/27',
   isoDate:'2027-02-14' },

 { id:'gate', label:'GATE · Mathematics (MA)',
   note:'Held on Feb 6–7 &amp; 13–14, 2027. Full syllabus including general metric spaces, compactness, Lebesgue measure and integration.',
   courses:['ra1','ra2','rae'],
   secs:['1.3','2.3','2.4','2.5','3.1','3.2','3.3','3.4','3.5','3.6','3.7',
         '4.1','4.2','4.3','5.1','5.2','5.3','5.4','5.6',
         '6.1','6.2','6.3','6.4','7.1','7.2','7.3','7.4',
         '8.1','8.2','9.1','9.2','9.3','9.4','11.1','11.2',
         'E1','E2','E3','E4','E5','E6','E7'],
   hot:['11.1','11.2','3.4','3.5','8.1','8.2','9.2','5.4','7.2','1.3','E1','E3','E6','E7'],
   date:'07/02/27',
   isoDate:'2027-02-07' },

 { id:'cusat', label:'CUSAT CAT · Mathematics',
   note:'Expected ~May 2027. Fast-paced: emphasises definitions, standard counterexamples, and recognizing theorem conditions.',
   courses:['ra1','ra2','rae'],
   secs:null,
   hot:['2.3','3.1','3.2','3.4','4.1','5.1','5.3','6.1','6.2','7.1','7.3','E1','E3'],
   date:'~May 2027',
   isoDate:'2027-05-10' },

 { id:'learn', label:'Just learning it properly',
   note:'No exam weighting. Everything is treated as equally worth understanding.',
   courses:['ra1','ra2','rae'], secs:null, hot:[] }
];
