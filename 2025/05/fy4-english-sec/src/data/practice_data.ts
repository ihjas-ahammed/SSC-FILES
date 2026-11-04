import { PracticeQuestion } from '../types';

export interface ModulePractice {
  moduleId: string;
  title: string;
  questions: PracticeQuestion[];
}

export const MODULE_PRACTICE: ModulePractice[] = [
  {
    moduleId: 'module-1-scientific-attitude',
    title: 'Module I: Scientific Attitude',
    questions: [
      {
        id: 'm1-q1',
        conceptTag: 'Scientists & Imagination',
        question: 'According to the documentary, which scientist formulated the law of gravity through an imaginative question?',
        options: [
          { id: 'A', text: 'William Harvey', isCorrect: false, explanation: 'Harvey imagined blood circulation, not gravity.' },
          { id: 'B', text: 'Isaac Newton', isCorrect: true, explanation: 'Newton asked why the apple fell straight down, leading to the Law of Gravity.' },
          { id: 'C', text: 'Albert Einstein', isCorrect: false, explanation: 'Einstein developed the Theory of Relativity.' },
          { id: 'D', text: 'Galileo Galilei', isCorrect: false, explanation: 'Galileo is associated with astronomy and the telescope.' }
        ]
      },
      {
        id: 'm1-q2',
        conceptTag: 'Man Who Knew Infinity',
        question: 'What is the Hardy-Ramanujan number and what makes it special?',
        options: [
          { id: 'A', text: '1729 — the smallest prime number', isCorrect: false, explanation: '1729 is not a prime number.' },
          { id: 'B', text: '1729 — smallest number as the sum of two cubes in two different ways', isCorrect: true, explanation: '1729 = 1³ + 12³ = 9³ + 10³.' },
          { id: 'C', text: '1729 — the number of Ramanujan\'s theorems', isCorrect: false, explanation: 'This is not the significance of 1729.' },
          { id: 'D', text: '1729 — the year Cambridge was founded', isCorrect: false, explanation: 'Cambridge was founded in 1209.' }
        ]
      },
      {
        id: 'm1-q3',
        conceptTag: "What's Expected of Us?",
        question: 'What medical condition does the Predictor device cause in some people?',
        options: [
          { id: 'A', text: 'Depression', isCorrect: false, explanation: 'The condition described is more extreme than depression.' },
          { id: 'B', text: 'Akinetic mutism — a waking coma where motivation is gone', isCorrect: true, explanation: 'Akinetic mutism: they track motion with eyes but lose all motivation — they won\'t even feed themselves.' },
          { id: 'C', text: 'Amnesia', isCorrect: false, explanation: 'The Predictor does not cause memory loss.' },
          { id: 'D', text: 'Hyperactivity', isCorrect: false, explanation: 'The effect is the opposite — loss of motivation.' }
        ]
      },
      {
        id: 'm1-q4',
        conceptTag: 'Singularity',
        question: 'Which poet\'s line does Marie Howe incorporate into "Singularity"?',
        options: [
          { id: 'A', text: 'William Shakespeare', isCorrect: false, explanation: 'The line is not from Shakespeare.' },
          { id: 'B', text: 'Walt Whitman', isCorrect: true, explanation: '"For every atom belonging to me as good belongs to you" — from Whitman\'s "Song of Myself."' },
          { id: 'C', text: 'Emily Dickinson', isCorrect: false, explanation: 'The allusion is not to Dickinson.' },
          { id: 'D', text: 'T.S. Eliot', isCorrect: false, explanation: 'The line is not from Eliot.' }
        ]
      }
    ]
  },
  {
    moduleId: 'module-2-scientific-language',
    title: 'Module II: Scientific Language',
    questions: [
      {
        id: 'm2-q1',
        conceptTag: 'Worldwide Effort Podcast',
        question: 'What is the name of the global campaign Jeremy Farrar launched?',
        options: [
          { id: 'A', text: 'Science for All', isCorrect: false, explanation: 'This is not the campaign name.' },
          { id: 'B', text: 'Together Science Can', isCorrect: true, explanation: 'Farrar launched "Together Science Can" to encourage global scientific collaboration.' },
          { id: 'C', text: 'Global Science Now', isCorrect: false, explanation: 'This is not the campaign name.' },
          { id: 'D', text: 'One World Science', isCorrect: false, explanation: 'This is not the campaign name.' }
        ]
      },
      {
        id: 'm2-q2',
        conceptTag: 'Science Vocabulary',
        question: 'What does the "explore-before-explain" approach mean in science vocabulary instruction?',
        options: [
          { id: 'A', text: 'Teach definitions first, then do experiments.', isCorrect: false, explanation: 'This is the traditional (less effective) approach.' },
          { id: 'B', text: 'Expose students to vocabulary in context first, then explain meanings.', isCorrect: true, explanation: 'Students gain conceptual understanding before formal definitions, making learning more effective.' },
          { id: 'C', text: 'Use only visual methods to teach vocabulary.', isCorrect: false, explanation: 'This describes only one strategy, not the explore-before-explain approach.' },
          { id: 'D', text: 'Teach vocabulary at the end of a unit as review.', isCorrect: false, explanation: 'This is neither explore-before-explain nor the traditional front-loading approach.' }
        ]
      },
      {
        id: 'm2-q3',
        conceptTag: 'Memory — David Linden',
        question: 'According to David Linden, why are the failures of autobiographical memory actually "features, not bugs"?',
        options: [
          { id: 'A', text: 'Because they make memories more vivid and emotional.', isCorrect: false, explanation: 'This describes emotional reinforcement, not why failures are features.' },
          { id: 'B', text: 'Because memory must be updated and integrated with new experience to be useful for future decisions.', isCorrect: true, explanation: 'A generic memory compiled from many experiences is more useful than 50 accurate but isolated memories.' },
          { id: 'C', text: 'Because forgetting prevents trauma from recurring.', isCorrect: false, explanation: 'While trauma is mentioned, this is not the main argument.' },
          { id: 'D', text: 'Because perfect memories would overload the brain.', isCorrect: false, explanation: 'While true, Linden\'s main argument is about usefulness for decision-making.' }
        ]
      }
    ]
  },
  {
    moduleId: 'module-3-scientific-imagination',
    title: 'Module III: Scientific Imagination',
    questions: [
      {
        id: 'm3-q1',
        conceptTag: 'Francis Bacon',
        question: 'What is the distinctive structural feature of Bacon\'s essay?',
        options: [
          { id: 'A', text: 'It is a play in three acts.', isCorrect: false, explanation: 'Bacon\'s essay is philosophical, not a play.' },
          { id: 'B', text: 'Numbered aphorisms — short, self-contained philosophical statements.', isCorrect: true, explanation: 'Bacon used aphorisms (I to X) as the structural form for his philosophical observations.' },
          { id: 'C', text: 'A scientific research report with a hypothesis section.', isCorrect: false, explanation: 'Bacon\'s essay predates the modern research paper format.' },
          { id: 'D', text: 'A series of sonnets about nature.', isCorrect: false, explanation: 'Bacon wrote philosophical prose, not poetry.' }
        ]
      },
      {
        id: 'm3-q2',
        conceptTag: 'Steven Shapin',
        question: 'What does Shapin mean by "bet on the jockey, not the horse"?',
        options: [
          { id: 'A', text: 'Invest in horses, not jockeys.', isCorrect: false, explanation: 'This is a metaphor, not literal advice.' },
          { id: 'B', text: 'Venture capitalists trust the entrepreneur\'s character and vision more than the technology itself.', isCorrect: true, explanation: 'Technologies and markets change; the entrepreneur\'s vision and commitment are more durable.' },
          { id: 'C', text: 'Academic science is more reliable than industrial science.', isCorrect: false, explanation: 'Shapin challenges this assumption throughout the interview.' },
          { id: 'D', text: 'Individual scientists are more important than institutions.', isCorrect: false, explanation: 'The metaphor is specifically about investment decisions, not general science.' }
        ]
      },
      {
        id: 'm3-q3',
        conceptTag: 'Aphantasia',
        question: 'What term did Adam Zeman coin in 2015?',
        options: [
          { id: 'A', text: 'Synesthesia', isCorrect: false, explanation: 'Synesthesia (mixing senses) was not coined by Zeman.' },
          { id: 'B', text: 'Aphantasia', isCorrect: true, explanation: 'Zeman coined "aphantasia" in 2015 to describe the inability to visualize in the mind\'s eye.' },
          { id: 'C', text: 'Aphasia', isCorrect: false, explanation: 'Aphasia is a language disorder, not a visualization condition.' },
          { id: 'D', text: 'Neurodivergence', isCorrect: false, explanation: 'Neurodivergence is a broader term not coined by Zeman.' }
        ]
      },
      {
        id: 'm3-q4',
        conceptTag: 'Galactic Portraits',
        question: 'What is "ekphrasis"?',
        options: [
          { id: 'A', text: 'A type of scientific photography.', isCorrect: false, explanation: 'Ekphrasis is a literary, not scientific, term.' },
          { id: 'B', text: 'A literary description or commentary on a visual work of art.', isCorrect: true, explanation: 'Ekphrasis = using words to describe or respond to artwork so vividly that it comes alive in the reader\'s imagination.' },
          { id: 'C', text: 'The scientific study of galaxies.', isCorrect: false, explanation: 'That would be astrophysics or cosmology, not ekphrasis.' },
          { id: 'D', text: 'A Greek word for imagination.', isCorrect: false, explanation: 'Ekphrasis specifically refers to literary responses to visual art.' }
        ]
      }
    ]
  },
  {
    moduleId: 'module-4-scientific-presentations',
    title: 'Module IV: Scientific Presentations',
    questions: [
      {
        id: 'm4-q1',
        conceptTag: 'Life of Galileo',
        question: 'What does Andrea smuggle across the Italian border in Scene 13?',
        options: [
          { id: 'A', text: 'A letter from the Pope', isCorrect: false, explanation: 'The Church is not directly present in Scene 13.' },
          { id: 'B', text: 'Galileo\'s manuscript — the Discorsi', isCorrect: true, explanation: 'Andrea carries Galileo\'s Discorsi (Dialogues Concerning Two New Sciences) hidden in a chest.' },
          { id: 'C', text: 'A telescope', isCorrect: false, explanation: 'The telescope is associated with earlier scenes in the play.' },
          { id: 'D', text: 'A letter to Kepler', isCorrect: false, explanation: 'This is not what Andrea carries in Scene 13.' }
        ]
      },
      {
        id: 'm4-q2',
        conceptTag: 'Presentation Tips',
        question: 'How many main points should a 20–30 minute scientific talk convey?',
        options: [
          { id: 'A', text: '5–7 points', isCorrect: false, explanation: 'Too many — audience won\'t absorb them in the time available.' },
          { id: 'B', text: '2–3 points', isCorrect: true, explanation: 'You can reasonably convey only 2–3 main points in a 20–30 minute talk.' },
          { id: 'C', text: 'As many as possible', isCorrect: false, explanation: '"Less is more" is the guiding principle.' },
          { id: 'D', text: '10 or more points', isCorrect: false, explanation: 'This would be far too many for the allotted time.' }
        ]
      },
      {
        id: 'm4-q3',
        conceptTag: 'Team Presentations',
        question: 'According to the 2021 survey cited in Unit 16, what percentage of people cited collaboration as their biggest challenge in creating presentations?',
        options: [
          { id: 'A', text: 'Nearly 50%', isCorrect: false, explanation: '50% is the number who drew from existing decks for design inspiration.' },
          { id: 'B', text: 'Just under 20%', isCorrect: true, explanation: 'Just under 20% said collaboration was their biggest challenge when creating a new presentation.' },
          { id: 'C', text: 'Over 75%', isCorrect: false, explanation: 'This figure is not in the text.' },
          { id: 'D', text: 'Exactly 33%', isCorrect: false, explanation: 'This figure is not cited for collaboration challenges.' }
        ]
      }
    ]
  }
];
