// Compact, exam-ready summaries — designed for last-minute revision.
// Each module gets: hero pitch, "8 lines that win marks", and one "if-time-permits" deep cut.

export interface SummaryHighlight {
  label: string;
  value: string;
}

export interface SummaryBeat {
  heading: string;
  body: string;          // 1–3 short sentences
  keyword?: string;      // tiny exam keyword chip
}

export interface UnitDigest {
  unitNumber: number;
  unitTitle: string;
  oneLine: string;       // single-sentence hook
  author?: string;
  form?: string;         // poem, podcast, scene, essay, biopic, etc.
  must_know: string[];   // 3-5 bullets — the lines an examiner expects
  remember?: string;     // a single fact to never forget (date, term, quote)
  exam_traps?: string;   // common mistake students make
}

export interface ModuleSummary {
  moduleId: string;
  title: string;
  tagline: string;       // one-line vibe
  pitch: string;         // 2-3 sentence overview
  highlights: SummaryHighlight[]; // top stats / banner facts
  bigIdeas: SummaryBeat[];        // 4-6 "thesis-level" beats
  units: UnitDigest[];
  vocabulary: { word: string; meaning: string }[];
  examTactics: string[];          // how to actually score
  oneNighterChecklist: string[];  // "if you only have 1 hour"
}

export const MODULE_SUMMARIES: ModuleSummary[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // MODULE I — Scientific Attitude
  // ──────────────────────────────────────────────────────────────────────────
  {
    moduleId: 'module-1-scientific-attitude',
    title: 'Module I · Scientific Attitude',
    tagline: 'Imagination is the silent partner of reason.',
    pitch:
      'Module I argues that the engine of science is not data alone but the human imagination — the ability to picture the unseen, ask the impossible question, and live with longing for what does not yet exist. Across a documentary, a biopic, a sci-fi parable and a cosmological poem, the unit traces how curiosity, faith, free will and unity define the scientific mind.',
    highlights: [
      { label: 'Documentary', value: '"Scientists and the Power of Imagination" (Feb 26, 2024)' },
      { label: 'Magic number', value: '1729 = 1³+12³ = 9³+10³' },
      { label: 'Coined term', value: 'Akinetic mutism (Predictor)' },
      { label: 'Cosmic image', value: 'Singularity — pre-Big-Bang oneness' },
    ],
    bigIdeas: [
      {
        heading: 'Imagination bridges the known and the unknown',
        keyword: 'Einstein',
        body: 'Einstein opens the unit: imagination is "more important than knowledge" because knowledge ends at the present, while imagination embraces "all there ever will be to know." Imagination is the catalyst — logic finishes the work.',
      },
      {
        heading: 'Five activities nurture imagination',
        keyword: 'WRWMP',
        body: 'Walking lets the mind wander; Reading builds mental flexibility; Writing articulates chaos into clarity; Meditation quiets the surface to reach the subconscious; Puzzle-solving forces thinking outside the box.',
      },
      {
        heading: 'Genius needs faith and friendship',
        keyword: 'Ramanujan',
        body: 'Ramanujan\'s rise from a clerk in Madras to a Fellow of the Royal Society is impossible without Hardy\'s patient rigour and Janaki\'s quiet loyalty. The biopic insists that intellectual brilliance is sustained by humane bonds.',
      },
      {
        heading: 'Free will may be a useful illusion',
        keyword: 'Chiang',
        body: 'Ted Chiang\'s Predictor flashes one second BEFORE you press it — proving determinism by demonstration, not argument. The narrator pleads from the future: pretend you have free will, or civilisation collapses into akinetic mutism.',
      },
      {
        heading: 'The cosmos remembers a time before separation',
        keyword: 'Howe',
        body: 'Marie Howe\'s "Singularity" longs for the pre-Big-Bang point where every atom of the universe was the same atom. The poem asks: if we were once one, why are we now so lonely?',
      },
    ],
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Scientists & the Power of Imagination',
        form: 'AH Documentary (YouTube)',
        oneLine: 'Imagination is the silent companion of logic.',
        must_know: [
          'Harvey imagined blood circulation; Newton asked why the apple fell DOWN; Einstein visualised riding a beam of light.',
          'Five activities to nurture imagination: walking, reading, writing, meditation, puzzle solving.',
          'AI and VR are tools to AUGMENT imagination, not replace it — efficacy depends on the user.',
          'Imagination shapes reality: telephone, airplane, Internet all began as imagined things.',
          'Education must protect curiosity to grow the next generation of scientists.',
        ],
        remember: 'Einstein\'s line: "Imagination is more important than knowledge."',
        exam_traps: 'Don\'t list only THREE activities for the 4-mark prompt — examiners check for FOUR.',
      },
      {
        unitNumber: 2,
        unitTitle: 'The Man Who Knew Infinity',
        author: 'Matt Brown (dir.)',
        form: 'Biopic (2015)',
        oneLine: 'A clerk from Madras who heard mathematics like a prayer.',
        must_know: [
          'Ramanujan: born 1887, Erode → Madras → Cambridge (1914); died 1920 at 32.',
          'Hardy-Ramanujan number: 1729 — the smallest number expressible as a sum of two cubes in two ways (1³+12³ = 9³+10³).',
          'Ramanujan: "An equation for me has no meaning unless it expresses a thought of God."',
          'Janaki + mother conflict: mother hides Janaki\'s letters from Ramanujan in Cambridge.',
          'Final work: "mock modular forms" — completed weeks before his death.',
        ],
        remember: 'Elected FRS in 1918 — second Indian ever.',
        exam_traps: 'Don\'t reduce Ramanujan to a "tragic genius" — emphasise faith, originality, AND human relationships.',
      },
      {
        unitNumber: 3,
        unitTitle: "What's Expected of Us?",
        author: 'Ted Chiang',
        form: 'Flash sci-fi (2005)',
        oneLine: 'The button presses you before you press it.',
        must_know: [
          'The Predictor: a small device, green LED + button, fires 1 second BEFORE you press.',
          'POV: second-person + warning from the future — implicates the reader directly.',
          'Demonstrating determinism: no argument can refute the device — it is empirical proof.',
          'Akinetic mutism: a waking coma — eyes track motion, motivation gone. Patients won\'t even eat.',
          'Narrator\'s plea: "Pretend that you have free will." Self-deception as civilisation\'s last defence.',
        ],
        remember: '"It\'s essential that you behave as if your decisions matter, even though you know they don\'t."',
        exam_traps: 'Don\'t call it a "short story" only — note its narrative form: a message from the future, transmitted backward in time.',
      },
      {
        unitNumber: 4,
        unitTitle: 'Singularity',
        author: 'Marie Howe',
        form: 'Free verse poem',
        oneLine: 'A cosmic homesickness — were we once one?',
        must_know: [
          'Allusion: Stephen Hawking\'s cosmological singularity — the dense point before the Big Bang.',
          'Whitman echo: "For every atom belonging to me as good belongs to you" (from "Song of Myself").',
          'Opening rhetorical question: "Do you sometimes want to wake up to the singularity / we once were?"',
          'Themes: separation, longing, ecological grief, the illusion of individual identity.',
          'Form: free verse, conversational, no fixed metre — mirrors the dissolution of boundaries.',
        ],
        remember: 'Title = both scientific (Big Bang) and emotional (oneness).',
        exam_traps: 'Don\'t treat the poem as just a "science poem" — it is an elegy for human connection.',
      },
    ],
    vocabulary: [
      { word: 'Whimsical', meaning: 'Playful, imaginative' },
      { word: 'Harness', meaning: 'To control and use a power' },
      { word: 'Burgeon', meaning: 'To grow rapidly' },
      { word: 'Augment', meaning: 'To strengthen or amplify' },
      { word: 'Tangible', meaning: 'Substantial, real to the touch' },
      { word: 'Akinetic mutism', meaning: 'Waking coma — alert but unmotivated' },
      { word: 'Singularity', meaning: 'A point of infinite density before the Big Bang' },
      { word: 'Ekphrasis', meaning: 'Description of visual art in literature' },
    ],
    examTactics: [
      'Open every Section A answer with a one-line direct statement, THEN explain — saves the examiner\'s eye.',
      'For the documentary, always name TWO of (Harvey, Newton, Einstein) when discussing imagination.',
      'When asked about Singularity, link Hawking + Whitman in the same paragraph — it shows integrated reading.',
      'For Chiang, never call the Predictor "just a button" — it is a thought experiment against free will.',
    ],
    oneNighterChecklist: [
      'Memorise five imagination-nurturing activities (W-R-W-M-P).',
      'Memorise 1729 and why it matters.',
      'Memorise the Predictor\'s mechanics and akinetic mutism.',
      'Memorise the opening line of "Singularity" + Whitman allusion.',
      'Practise one model Section B: "Imagination shapes reality" (Unit 1).',
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MODULE II — Scientific Language
  // ──────────────────────────────────────────────────────────────────────────
  {
    moduleId: 'module-2-scientific-language',
    title: 'Module II · Scientific Language',
    tagline: 'Words decide whether science reaches a society.',
    pitch:
      'Module II focuses on how scientific knowledge is packaged, spoken, taught and remembered. From global health podcasting to classroom vocabulary instruction, from the philosophy of inductive reasoning to the neuroscience of memory — the unit asks: what makes a scientific message survive translation, time and human bias?',
    highlights: [
      { label: 'Campaign', value: '"Together Science Can" — Jeremy Farrar' },
      { label: 'Method', value: 'Explore-Before-Explain' },
      { label: 'Philosopher', value: 'David Hume (1711–1776) — Problem of Induction' },
      { label: 'Researcher', value: 'David Linden — memory as a tool, not a recorder' },
    ],
    bigIdeas: [
      {
        heading: 'Science needs storytellers, not just sources',
        keyword: 'Podcast',
        body: 'The "Worldwide Effort" podcast shows that effective science communication needs clear language, narrative arcs, expert voices and strategic promotion. Without these, even Nobel-quality work dies in archives.',
      },
      {
        heading: 'Vocabulary precedes understanding — but not the other way around',
        keyword: 'Explore-First',
        body: 'Traditional "front-loaded" vocabulary teaching fails because students memorise without anchors. The explore-before-explain approach exposes students to terms in context first, then crystallises meaning later.',
      },
      {
        heading: 'Induction is useful but unjustified',
        keyword: 'Hume',
        body: 'Hume showed that "the sun rose yesterday, so it will rise tomorrow" rests on circular reasoning. Science works in practice but has no purely rational guarantee — one black swan refutes a thousand white ones.',
      },
      {
        heading: 'Memory is a generaliser, not a recorder',
        keyword: 'Linden',
        body: 'Linden argues that the "failures" of autobiographical memory — distortion, blending, fading — are features. Memory must update with new experience to be useful for future decisions.',
      },
    ],
    units: [
      {
        unitNumber: 5,
        unitTitle: 'A Worldwide Effort',
        form: 'Science podcast',
        oneLine: 'Science only matters if it travels.',
        must_know: [
          'Jeremy Farrar launched "Together Science Can" — a global campaign for scientific collaboration.',
          'Four success factors: (1) accessible language, (2) storytelling/anecdotes, (3) high audio production, (4) strategic promotion.',
          'Podcasts democratise science by reaching audiences that journals never touch.',
          'Expert interviews + narrative format make abstract data emotionally legible.',
        ],
        remember: 'Together Science Can = the campaign, not the podcast.',
        exam_traps: 'Don\'t conflate the campaign name with the podcast title.',
      },
      {
        unitNumber: 6,
        unitTitle: 'Science Vocabulary',
        form: 'Pedagogical article',
        oneLine: 'Teach the experience first, the word second.',
        must_know: [
          'Front-loading vocabulary (definitions first) is the traditional, less effective method.',
          'Explore-Before-Explain: exposure in context → conceptual grasp → formal definition.',
          'Visual + narrative + contextual cues outperform isolated rote learning.',
          'Vocabulary is the gateway to scientific thinking, not a separate skill.',
        ],
        remember: '"Explore before you explain."',
        exam_traps: 'Don\'t describe only ONE strategy — name explore-before-explain explicitly.',
      },
      {
        unitNumber: 7,
        unitTitle: 'Scientific Reasoning',
        author: 'David Hume',
        form: 'Philosophical critique',
        oneLine: 'Even the sunrise has no logical guarantee.',
        must_know: [
          'Hume: Scottish philosopher (1711–1776).',
          'Problem of Induction: we trust induction because it has worked — but that trust IS itself inductive. Circular.',
          'No finite number of confirmations proves a universal rule — but one counterexample refutes it (black swan).',
          'Implication: science is pragmatically reliable but lacks an absolute rational foundation.',
        ],
        remember: 'Black swan example — the heart of falsifiability.',
        exam_traps: 'Don\'t say Hume "disproved" science — he questioned its philosophical foundation, not its practical success.',
      },
      {
        unitNumber: 8,
        unitTitle: 'Memory',
        author: 'David Linden',
        form: 'Popular neuroscience essay',
        oneLine: 'Your memory is not a hard drive. It is a story you keep editing.',
        must_know: [
          'Field memory: first-person, "through your own eyes" — common for recent and emotional events.',
          'Observer memory: third-person, "watching yourself" — common for childhood and factual events.',
          'Memory failures are features, not bugs — they let new experience integrate with old.',
          'A flexible generic memory is more useful for decisions than 50 isolated accurate ones.',
        ],
        remember: 'Field vs. observer — know which is which.',
        exam_traps: 'Don\'t describe Linden\'s argument as "memory is fake" — it is that memory is purposefully generative.',
      },
    ],
    vocabulary: [
      { word: 'Induction', meaning: 'Reasoning from specific cases to a general rule' },
      { word: 'Field memory', meaning: 'Recall through your own eyes' },
      { word: 'Observer memory', meaning: 'Recall from outside the scene' },
      { word: 'Front-loaded', meaning: 'Taught at the beginning of a topic' },
      { word: 'Falsifiability', meaning: 'Capacity to be proven wrong' },
      { word: 'Pragmatic', meaning: 'Concerned with practical results' },
    ],
    examTactics: [
      'For Hume: state the three-step argument (rely on induction → justification is itself induction → circular).',
      'For Linden: always pair "field" and "observer" memory definitions — examiners look for the contrast.',
      'For vocabulary instruction: write the phrase explore-before-explain in bold or quotes.',
      'For podcasts: list at least 3 of the 4 success elements with examples.',
    ],
    oneNighterChecklist: [
      'Know "Together Science Can" + 3 podcast success factors.',
      'Know explore-before-explain and why it beats front-loading.',
      'Know Hume\'s name, dates, and the circular-reasoning step.',
      'Know field vs. observer memory definitions.',
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MODULE III — Scientific Imagination
  // ──────────────────────────────────────────────────────────────────────────
  {
    moduleId: 'module-3-scientific-imagination',
    title: 'Module III · Scientific Imagination',
    tagline: 'Where science meets the strangeness of seeing.',
    pitch:
      'Module III is about HOW scientific minds see — through aphorisms, through markets, through internal images, through telescopes. Bacon writes laws of method as numbered aphorisms; Shapin maps how science actually gets funded; Zarins explains the people who cannot picture an apple at all; Levy turns Hubble images into poems.',
    highlights: [
      { label: 'Year coined', value: '"Aphantasia" — Adam Zeman, 2015' },
      { label: 'Bacon\'s form', value: 'Numbered aphorisms (Novum Organum tradition)' },
      { label: 'Shapin metaphor', value: '"Bet on the jockey, not the horse"' },
      { label: 'Levy term', value: 'Ekphrasis — words responding to art' },
    ],
    bigIdeas: [
      {
        heading: 'Science begins with method — and method has a form',
        keyword: 'Bacon',
        body: 'Bacon\'s essay is structured as numbered aphorisms — each a self-contained philosophical statement. The form mirrors the content: empirical, ordered, citable.',
      },
      {
        heading: 'Science is also an economy of trust',
        keyword: 'Shapin',
        body: 'In Shapin\'s study of venture capital, investors "bet on the jockey, not the horse" — they fund the entrepreneur\'s character, not the technology. Trust travels faster than data.',
      },
      {
        heading: 'Not all minds see in pictures',
        keyword: 'Zeman',
        body: 'Aphantasia (coined 2015) names the inability to visualise. About 2% of people have it. The article reframes neurodiversity as a question of inclusion, not pathology.',
      },
      {
        heading: 'Science can be felt through poetry',
        keyword: 'Ekphrasis',
        body: 'Levy\'s "Galactic Portraits" turns Hubble images into ekphrastic poems — proving that scientific awe and literary form are not enemies but collaborators.',
      },
    ],
    units: [
      {
        unitNumber: 9,
        unitTitle: 'Of the Interpretation of Nature',
        author: 'Francis Bacon',
        form: 'Aphoristic essay',
        oneLine: 'Method made small, sharp, and numbered.',
        must_know: [
          'Bacon is a founder of the empirical method (early 17th century).',
          'The essay\'s structure: aphorisms numbered I, II, III… each self-contained.',
          'Aphorism = a short, compact, philosophically dense statement.',
          'Form-content match: ordered + universal + memorable.',
          'Aphorisms encourage reference and citation, unlike flowing narrative.',
        ],
        remember: 'Aphorism — the technical word examiners want.',
        exam_traps: 'Don\'t call the essay "a treatise" or "a dialogue" — it is a series of aphorisms.',
      },
      {
        unitNumber: 10,
        unitTitle: 'A Conversation with Steven Shapin',
        form: 'Interview / history of science',
        oneLine: 'Science is also a market for trust.',
        must_know: [
          'Shapin: contemporary historian/sociologist of science.',
          '"Bet on the jockey, not the horse" — VCs trust entrepreneurs over technologies.',
          'Active life vs. contemplative life — ancient Greek debate on the path to knowledge.',
          'Shapin links ancient debates to current individual-vs-team tensions in science.',
        ],
        remember: 'The jockey metaphor + the active/contemplative dichotomy.',
        exam_traps: 'Don\'t take the jockey line literally — it is about investment philosophy.',
      },
      {
        unitNumber: 11,
        unitTitle: 'Aphantasia',
        author: 'Mark Zarins',
        form: 'Popular science article',
        oneLine: 'For 2% of us, the mind\'s eye is dark.',
        must_know: [
          'Term coined: aphantasia, 2015, by Adam Zeman.',
          'Prevalence: about 2% of the population.',
          'Opening hook: Zarins\' childhood — trying to reach Narnia through a stone circle.',
          'Cultural anchor: Narnia, Lord of the Rings — readers without mental imagery still LOVE these books.',
          'Frame: neurodiversity and inclusive design for readers.',
        ],
        remember: '2015 / Adam Zeman / 2%.',
        exam_traps: 'Don\'t confuse aphantasia with aphasia (language disorder).',
      },
      {
        unitNumber: 12,
        unitTitle: 'Galactic Portraits',
        author: 'Deborah Levy / poetry on Hubble images',
        form: 'Ekphrastic poetry',
        oneLine: 'The galaxy as a portrait sitter.',
        must_know: [
          'Ekphrasis: literary description of or response to a visual artwork.',
          'Poems respond to Hubble Space Telescope images — distant galaxies as subjects.',
          'Effect: human emotion meets cosmic scale; awe becomes language.',
          'The form treats science (images) and art (verse) as one continuous act of attention.',
        ],
        remember: 'Ekphrasis = words for pictures.',
        exam_traps: 'Don\'t describe ekphrasis as a "style" — it is a specific literary act.',
      },
    ],
    vocabulary: [
      { word: 'Aphorism', meaning: 'Short, dense philosophical statement' },
      { word: 'Aphantasia', meaning: 'Inability to visualise in the mind' },
      { word: 'Ekphrasis', meaning: 'Literary description of visual art' },
      { word: 'Empirical', meaning: 'Based on observation and experiment' },
      { word: 'Neurodiversity', meaning: 'Natural variation in human neurological function' },
      { word: 'Cosmology', meaning: 'Study of the origin and structure of the universe' },
    ],
    examTactics: [
      'For Bacon: use the word "aphorism" at least twice — once for form, once for effect.',
      'For Shapin: explain the jockey metaphor in plain English before naming it.',
      'For aphantasia: anchor with the year (2015) and percentage (2%).',
      'For Galactic Portraits: define ekphrasis before discussing the poems.',
    ],
    oneNighterChecklist: [
      'Memorise the word aphorism + its three properties (short, self-contained, numbered).',
      'Memorise "bet on the jockey, not the horse" and its meaning.',
      'Memorise aphantasia\'s definition, year, coiner, and prevalence.',
      'Memorise the term ekphrasis.',
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MODULE IV — Scientific Presentations
  // ──────────────────────────────────────────────────────────────────────────
  {
    moduleId: 'module-4-scientific-presentations',
    title: 'Module IV · Scientific Presentations',
    tagline: 'A great talk is a designed act of attention.',
    pitch:
      'Module IV turns from reading science to performing it. Brecht\'s Scene 13 dramatises how knowledge sneaks past censors; Units 14–16 codify the rules of effective presentation, slide-craft, and collaborative authorship. The thread: science is a public art, and clarity is a moral act.',
    highlights: [
      { label: 'Play', value: 'The Life of Galileo, Scene 13 (Brecht)' },
      { label: 'Smuggled book', value: 'Galileo\'s Discorsi' },
      { label: 'Rule of thumb', value: '2–3 main points in 20–30 minutes' },
      { label: 'Collaboration stat', value: '~20% cite collaboration as biggest challenge' },
    ],
    bigIdeas: [
      {
        heading: 'Knowledge has to outrun authority',
        keyword: 'Brecht',
        body: 'In Scene 13, Andrea smuggles Galileo\'s Discorsi across the border. The guards, more interested in tolls than truth, let it pass. Children debating witches dramatise the parallel struggle: superstition vs. rational thought.',
      },
      {
        heading: 'Less is more — 2 or 3 points, not 7',
        keyword: 'Presenting',
        body: 'A 20–30 minute talk can convey only 2–3 main ideas. Identifying the audience, designing minimal slides, rehearsing aloud, and presenting confidently are non-negotiable.',
      },
      {
        heading: 'Slides are evidence, not wallpaper',
        keyword: 'Visuals',
        body: 'Every slide should carry one idea. Axes and labels must read from the back of the room. Acknowledgements belong on the last slide. Visual clarity prevents miscommunication.',
      },
      {
        heading: 'Team presentations need plumbing, not just talent',
        keyword: 'Cloud',
        body: 'Working in the cloud (one shared live deck), using a shared design library, real-time feedback, and assigned tasks are the six tips that prevent back-and-forth snag.',
      },
    ],
    units: [
      {
        unitNumber: 13,
        unitTitle: 'The Life of Galileo — Scene 13',
        author: 'Bertolt Brecht',
        form: 'Epic theatre — scene from a play',
        oneLine: 'Truth crosses the border in a chest.',
        must_know: [
          'Andrea Sarti smuggles Galileo\'s Discorsi (Dialogues Concerning Two New Sciences) past the border.',
          'Frontier guards focus on tolls, not contents — bureaucratic indifference to knowledge.',
          'Children debate whether a woman is a witch who flies on a broomstick.',
          'Andrea: "One cannot fly through the air on a broomstick. It must at least have a machine on it."',
          'Brecht\'s point: science must overcome BOTH institutional indifference AND popular superstition.',
        ],
        remember: 'Discorsi = the book smuggled. Don\'t guess.',
        exam_traps: 'Don\'t call it a "novel" — it is a play (epic theatre).',
      },
      {
        unitNumber: 14,
        unitTitle: 'Presentation Tips',
        form: 'Instructional reading',
        oneLine: 'Know your audience before you open PowerPoint.',
        must_know: [
          'Step 1: identify audience expertise. Step 2: pick 2–3 main ideas. Step 3: design slides.',
          'Less is more: 5–7 points dilute attention.',
          'Each slide carries ONE idea; axes/labels visible from the back row.',
          'Practice delivery: timing, eye contact, no filler words ("um", "uh"), enthusiasm.',
          'End on questions — invite, do not avoid.',
        ],
        remember: '2–3 main points in 20–30 minutes.',
        exam_traps: 'Don\'t simply list the steps — explain WHY each step matters.',
      },
      {
        unitNumber: 15,
        unitTitle: 'Scientific Presentations',
        form: 'Long-form instructional chapter',
        oneLine: 'A slide is one sentence with proof.',
        must_know: [
          'Slide architecture: title + visual + 1-line caption — nothing more.',
          'Open with a hook (statistic, question, anecdote) — earn the first 30 seconds.',
          'Use visual hierarchy: largest = most important.',
          'Acknowledgements, references, and Q&A on the final slide.',
          'Speak to the audience, not to the screen.',
        ],
        remember: 'One slide = one idea.',
        exam_traps: 'Don\'t describe slides as "summaries of paragraphs" — they are visual arguments.',
      },
      {
        unitNumber: 16,
        unitTitle: 'Team Presentations',
        form: 'Collaboration guide',
        oneLine: 'Plumbing prevents panic.',
        must_know: [
          '~20% of presenters cite collaboration as the biggest challenge.',
          'Six tips to reduce back-and-forth snag: Shared library, Work in the cloud, Assign tasks, Content management, Real-time feedback, Seamless sharing.',
          'Cloud work eliminates email-attachment chaos and version conflicts.',
          'Roles: divide intro/methods/results/Q&A by expertise.',
          'Group rehearsal 24–48 hours before delivery.',
        ],
        remember: 'The six anti-snag tips.',
        exam_traps: 'Don\'t list only ONE tip for a multi-mark answer.',
      },
    ],
    vocabulary: [
      { word: 'Discorsi', meaning: 'Galileo\'s book — Dialogues Concerning Two New Sciences' },
      { word: 'Snag', meaning: 'A blocker in workflow' },
      { word: 'Cloud-based', meaning: 'Stored and accessed online' },
      { word: 'Epic theatre', meaning: 'Brechtian theatre that breaks emotional immersion' },
      { word: 'Acknowledgement', meaning: 'Formal credit to collaborators and sources' },
    ],
    examTactics: [
      'For Scene 13: always give TWO examples — the guards AND the children.',
      'For presentation tips: name THREE tips and EXPLAIN each (don\'t just list).',
      'For team presentations: cite the 20% statistic AND at least three of the six tips.',
      'For Section C: structure your model presentation (title, sections, time per section, slide count).',
    ],
    oneNighterChecklist: [
      'Memorise Scene 13: smuggled Discorsi + the witch debate.',
      'Memorise the rule of thumb: 2–3 ideas in 20–30 minutes.',
      'Memorise the six team-presentation tips.',
      'Practise one Section C model presentation outline.',
    ],
  },
];
