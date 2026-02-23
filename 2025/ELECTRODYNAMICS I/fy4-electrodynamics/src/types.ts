export type SlideType = 
  | 'theory' 
  | 'example'
  | 'proof' 
  | 'numerical'
  | 'quiz' 
  | 'fill_in_blank'
  | 'example_q'
  | 'solution';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface InteractiveStep {
  prompt?: string; // The question asking what the next step is
  stepText?: string; // The formal text added to the proof list after completion
  options?: QuizOption[]; // If provided, user must choose the correct one
}

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  content: string; 
  image?: string; 
  canvasId?: string; 
  options?: QuizOption[]; 
  proofSteps?: string[]; // Legacy fallback 
  interactiveSteps?: InteractiveStep[]; // Interactive Proof/Solution steps
  blankAnswer?: string; 
  numericAnswer?: number; // Used for numerical type slides
  numericTolerance?: number; // Allowed delta for correct answer
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string; 
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

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface UserProgress {
  completedLessons: string[];
  xp: number;
  currentCourseId: string;
}