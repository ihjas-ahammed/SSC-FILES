export type SlideType = 'theory' | 'proof' | 'quiz' | 'info';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  content: string; // Supports LaTeX via $...$ and Markdown
  image?: string; // URL for topic-specific image
  options?: QuizOption[]; // Only for quiz type
  proofSteps?: string[]; // Only for proof type, step by step breakdown
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucid icon name
  slides: Slide[];
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  color: string;
  lessons: Lesson[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  color: string;
  units: Unit[];
}

// New Interface for Course Level
export interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface UserProgress {
  completedLessons: string[]; // IDs of completed lessons
  xp: number;
  currentCourseId: string; // Track which course the user is on
}