export interface ExamQuestion {
  id: string;
  section: 'A' | 'B' | 'C';
  marks: number;
  chapter: string;
  question: string;
}

export const EXAM_QUESTIONS: ExamQuestion[] = [
  // Section A (2 Marks)
  {
    id: "q1",
    section: "A",
    marks: 2,
    chapter: "Factories are Eyesores",
    question: "Why does the poet call factories \"eyesores\"?"
  },
  {
    id: "q2",
    section: "A",
    marks: 2,
    chapter: "On the Rule of the Road",
    question: "How, according to AG Gardiner can order be maintained in a society?"
  },
  {
    id: "q3",
    section: "A",
    marks: 2,
    chapter: "I am a Cat",
    question: "What is the significance of the film's title I am a Cat?"
  },
  {
    id: "q4",
    section: "A",
    marks: 2,
    chapter: "Karma",
    question: "How is Lady Lal portrayed in contrast to her husband?"
  },
  {
    id: "q5",
    section: "A",
    marks: 2,
    chapter: "The Boy Who Harnessed the Wind",
    question: "Why was William Kamkwamba forced to leave school?"
  },
  {
    id: "q6",
    section: "A",
    marks: 2,
    chapter: "The Yellow Wallpaper",
    question: "What role does John, the narrator's husband, play in her mental decline?"
  },
  {
    id: "q7",
    section: "A",
    marks: 2,
    chapter: "Don't Be Beautiful",
    question: "How does the poem \"Don't Be Beautiful\" reflect on society's obsession with physical appearance?"
  },
  {
    id: "q8",
    section: "A",
    marks: 2,
    chapter: "The Poisoned Bread",
    question: "What is the significance of the grandfather's death in the \"Poisoned Bread\"?"
  },
  {
    id: "q9",
    section: "A",
    marks: 2,
    chapter: "Strategy: The Empowerment...",
    question: "What are some systemic barriers that prevent full participation of women and girls with disabilities?"
  },
  {
    id: "q10",
    section: "A",
    marks: 2,
    chapter: "UN Frameworks (Unit 1)",
    question: "Expand UDHR and describe its significance."
  },

  // Section B (6 Marks)
  {
    id: "q11",
    section: "B",
    marks: 6,
    chapter: "A Long Walk to Water",
    question: "Describe the circumstances that force Salva to leave his village."
  },
  {
    id: "q12",
    section: "B",
    marks: 6,
    chapter: "Humanities v/s Science",
    question: "Analyse the predicament of Science without a moral compass."
  },
  {
    id: "q13",
    section: "B",
    marks: 6,
    chapter: "The Poisoned Bread",
    question: "What does the \"poisoned bread\" symbolize in the story?"
  },
  {
    id: "q14",
    section: "B",
    marks: 6,
    chapter: "The Self-Unseeing",
    question: "Comment on the central theme of The Self-Unseeing?"
  },
  {
    id: "q15",
    section: "B",
    marks: 6,
    chapter: "In the Name of Science",
    question: "How did Antony's experiments challenge the common scientific beliefs of his time?"
  },

  // Section C (10 Marks)
  {
    id: "q16",
    section: "C",
    marks: 10,
    chapter: "Strategy: The Empowerment...",
    question: "Examine how international normative frameworks and global agendas contribute to the inclusion and empowerment of women and girls with disabilities."
  },
  {
    id: "q17",
    section: "C",
    marks: 10,
    chapter: "Karma",
    question: "Explore the theme of identity and cultural alienation in Karma. How do the characters embody conflicting ideas of self-worth and tradition?"
  }
];