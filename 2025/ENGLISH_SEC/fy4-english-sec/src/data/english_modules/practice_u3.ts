import { PracticeQuestion } from '../../types';

export const PRACTICE_U3: PracticeQuestion[] = [
  {
    id: "pq1",
    conceptTag: "Author Background",
    question: "Dr. Sarvepalli Radhakrishnan served as the ______ of India from 1962 to 1967.",
    options: [
      { id: "A", text: "Prime Minister", isCorrect: false, explanation: "He was the President, not Prime Minister." },
      { id: "B", text: "President", isCorrect: true, explanation: "He served as the second President of India from 1962 to 1967." },
      { id: "C", text: "Vice President", isCorrect: false, explanation: "He was VP from 1952 to 1962, but President from 1962 to 1967." },
      { id: "D", text: "Chief Justice", isCorrect: false, explanation: "He was a philosopher and statesman, not a judge." }
    ]
  },
  {
    id: "pq2",
    conceptTag: "Author Background",
    question: "Dr. Radhakrishnan held the prestigious Spalding Professorship at which university?",
    options: [
      { id: "A", text: "Cambridge", isCorrect: false, explanation: "He held it at Oxford." },
      { id: "B", text: "Harvard", isCorrect: false, explanation: "He held it at Oxford." },
      { id: "C", text: "Oxford", isCorrect: true, explanation: "He was the Spalding Professor of Eastern Religions and Ethics at Oxford." },
      { id: "D", text: "Madras University", isCorrect: false, explanation: "He studied there, but the Spalding professorship is at Oxford." }
    ]
  },
  {
    id: "pq3",
    conceptTag: "Text Comprehension",
    question: "According to the essay, what are the three obstacles to national development?",
    options: [
      { id: "A", text: "Corruption, Poverty, and War", isCorrect: false, explanation: "He explicitly names three specific issues." },
      { id: "B", text: "Ignorance, Disease, and Poverty", isCorrect: true, explanation: "Radhakrishnan states: 'The three obstacles which stand in the way of national development are ignorance, disease and poverty.'" },
      { id: "C", text: "Illiteracy, Laziness, and Inequality", isCorrect: false, explanation: "These are not the exact three he lists." },
      { id: "D", text: "Lack of Science, Religion, and Art", isCorrect: false, explanation: "He lists physical and intellectual deprivations as the obstacles." }
    ]
  },
  {
    id: "pq4",
    conceptTag: "Text Comprehension",
    question: "Of the three obstacles mentioned, which does the author consider the 'major obstacle'?",
    options: [
      { id: "A", text: "Disease", isCorrect: false, explanation: "He sees disease as a symptom of the main obstacle." },
      { id: "B", text: "Poverty", isCorrect: false, explanation: "Poverty is a consequence of the main obstacle." },
      { id: "C", text: "Ignorance", isCorrect: true, explanation: "He says: 'Of these, the major obstacle is ignorance. If we are able to remove ignorance... poverty also will diminish.'" },
      { id: "D", text: "Inequality", isCorrect: false, explanation: "Not mentioned as one of the three core obstacles." }
    ]
  },
  {
    id: "pq5",
    conceptTag: "Text Comprehension",
    question: "Radhakrishnan warns that technological education without humanistic studies will be...",
    options: [
      { id: "A", text: "Useful but expensive", isCorrect: false, explanation: "He critiques its moral limits, not its cost." },
      { id: "B", text: "Imperfect, lop-sided and deficient", isCorrect: true, explanation: "He literally uses the phrase 'imperfect, lop-sided and deficient'." },
      { id: "C", text: "Impossible to achieve", isCorrect: false, explanation: "It is possible, but dangerous." },
      { id: "D", text: "The only way to save the nation", isCorrect: false, explanation: "He believes it must be paired with humanities." }
    ]
  },
  {
    id: "pq6",
    conceptTag: "Textual Analysis",
    question: "What does the author mean when he says we risk becoming 'mechanical robots'?",
    options: [
      { id: "A", text: "We will be replaced by AI.", isCorrect: false, explanation: "He means humans will lose their humanity, not that machines will replace them." },
      { id: "B", text: "We will act with efficiency but without compassion or moral direction.", isCorrect: true, explanation: "Science gives tools (mechanics), but without humanities to teach compassion, we act like robots." },
      { id: "C", text: "We will become too logical and solve all world problems.", isCorrect: false, explanation: "He views becoming a robot as a negative consequence." },
      { id: "D", text: "We will physically augment our bodies.", isCorrect: false, explanation: "He is speaking metaphorically about the human spirit." }
    ]
  },
  {
    id: "pq7",
    conceptTag: "Quotations",
    question: "Who originally said: 'The tree of life is sustained by art, the tree of death by science'?",
    options: [
      { id: "A", text: "Rabindranath Tagore", isCorrect: false, explanation: "Radhakrishnan quotes an English poet." },
      { id: "B", text: "William Blake", isCorrect: true, explanation: "He quotes Blake, but explicitly calls it a 'misleading conception'." },
      { id: "C", text: "William Shakespeare", isCorrect: false, explanation: "It was Blake." },
      { id: "D", text: "Swami Vivekananda", isCorrect: false, explanation: "It was Blake." }
    ]
  },
  {
    id: "pq8",
    conceptTag: "Author's Argument",
    question: "How does Radhakrishnan respond to Blake's quote about the 'tree of life' and 'tree of death'?",
    options: [
      { id: "A", text: "He fully agrees with it.", isCorrect: false, explanation: "He disagrees with it." },
      { id: "B", text: "He believes it is a misleading conception because Truth is indivisible.", isCorrect: true, explanation: "He states that science and art are just different approaches to the same Truth." },
      { id: "C", text: "He thinks Blake underestimated science.", isCorrect: false, explanation: "He thinks Blake created a false dichotomy between the two." },
      { id: "D", text: "He argues that both trees are actually dead.", isCorrect: false, explanation: "He argues Truth is one." }
    ]
  },
  {
    id: "pq9",
    conceptTag: "Philosophy",
    question: "What does the Upanisadic phrase 'Tat tvam asi' translate to?",
    options: [
      { id: "A", text: "Truth is God", isCorrect: false, explanation: "That translates closer to 'Satya svarupa'." },
      { id: "B", text: "Knowledge is Power", isCorrect: false, explanation: "This is a western scientific adage." },
      { id: "C", text: "That art thou", isCorrect: true, explanation: "It means 'You are that', signifying the divine spark in every individual." },
      { id: "D", text: "Peace be upon you", isCorrect: false, explanation: "It means 'That art thou'." }
    ]
  },
  {
    id: "pq10",
    conceptTag: "Philosophy",
    question: "Radhakrishnan uses 'Tat tvam asi' to emphasize that universities must produce the quality of...",
    options: [
      { id: "A", text: "Scientific rigor", isCorrect: false, explanation: "Science produces rigor; this phrase points to spirituality/humanity." },
      { id: "B", text: "Compassion and a democratic spirit", isCorrect: true, explanation: "Recognizing the divine in others ('That art thou') builds compassion and equality." },
      { id: "C", text: "Economic wealth", isCorrect: false, explanation: "It is a spiritual teaching." },
      { id: "D", text: "Obscurantism", isCorrect: false, explanation: "Obscurantism is what he wants to remove." }
    ]
  },
  {
    id: "pq11",
    conceptTag: "Text Comprehension",
    question: "According to the essay, what is the central mystery that is NOT disclosed to scientific observation?",
    options: [
      { id: "A", text: "The laws of physics", isCorrect: false, explanation: "Physics is observed by science." },
      { id: "B", text: "The spirit in us which seeks truth", isCorrect: true, explanation: "He notes that science cannot observe the very spirit of man that initiates the scientific quest." },
      { id: "C", text: "The cure for disease", isCorrect: false, explanation: "Science finds cures for diseases." },
      { id: "D", text: "Technological advancement", isCorrect: false, explanation: "This is a product of science." }
    ]
  },
  {
    id: "pq12",
    conceptTag: "Vocabulary",
    question: "What is the meaning of the word 'obscurantism' as used in the text?",
    options: [
      { id: "A", text: "The practice of deliberately preventing facts or full details from becoming known", isCorrect: true, explanation: "It refers to hiding the truth or promoting superstition." },
      { id: "B", text: "A deep devotion to scientific study", isCorrect: false, explanation: "It is the opposite of scientific truth-seeking." },
      { id: "C", text: "The physical elimination of poverty", isCorrect: false, explanation: "It refers to intellectual darkness." },
      { id: "D", text: "A state of perfect equality", isCorrect: false, explanation: "It is a barrier to progress." }
    ]
  },
  {
    id: "pq13",
    conceptTag: "Text Comprehension",
    question: "Radhakrishnan points out a general criticism that while our knowledge of nature is increasing...",
    options: [
      { id: "A", text: "...our wealth is decreasing.", isCorrect: false, explanation: "He doesn't talk about wealth in this specific contrast." },
      { id: "B", text: "...our wisdom is diminishing.", isCorrect: true, explanation: "He writes: 'where our knowledge of nature is increasing our wisdom is diminishing.'" },
      { id: "C", text: "...our science is failing.", isCorrect: false, explanation: "Science is succeeding brilliantly, but wisdom is lagging." },
      { id: "D", text: "...our population is growing.", isCorrect: false, explanation: "Not the point made in this context." }
    ]
  },
  {
    id: "pq14",
    conceptTag: "Vocabulary",
    question: "If an education system is described as 'lop-sided', it means it is...",
    options: [
      { id: "A", text: "Perfectly balanced", isCorrect: false, explanation: "It means the exact opposite." },
      { id: "B", text: "Disproportionately focused on one aspect at the expense of others", isCorrect: true, explanation: "In this case, focused entirely on technology while ignoring humanities." },
      { id: "C", text: "Historically inaccurate", isCorrect: false, explanation: "It means unbalanced." },
      { id: "D", text: "Too difficult for students", isCorrect: false, explanation: "It means unbalanced." }
    ]
  },
  {
    id: "pq15",
    conceptTag: "Author's Argument",
    question: "Does Radhakrishnan believe that scientific studies are devoid of moral values?",
    options: [
      { id: "A", text: "Yes, he thinks science is inherently evil.", isCorrect: false, explanation: "He strictly disagrees with this." },
      { id: "B", text: "No, he states explicitly: 'I do not believe that scientific and technological studies are devoid of moral values.'", isCorrect: true, explanation: "He says science requires discipline, tolerance, and open-mindedness, which are moral values." },
      { id: "C", text: "He is unsure and avoids the question.", isCorrect: false, explanation: "He is very direct about it." },
      { id: "D", text: "Yes, because it builds bombs.", isCorrect: false, explanation: "The application builds bombs, not the study itself." }
    ]
  }
];