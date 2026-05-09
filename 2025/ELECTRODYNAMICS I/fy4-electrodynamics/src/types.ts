export type SlideType = 
  | 'theory' 
  | 'example'
  | 'proof' 
  | 'numerical'
  | 'quiz' 
  | 'fill_in_blank'
  | 'example_q'
  | 'solution'
  | 'interactive_canvas'; 

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface InteractiveStep {
  prompt?: string;
  stepText?: string;
  options?: QuizOption[];
}

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  content: string; 
  image?: string; 
  canvasId?: string; 
  interactiveCanvasId?: string; 
  options?: QuizOption[]; 
  proofSteps?: string[]; 
  interactiveSteps?: InteractiveStep[]; 
  blankAnswer?: string; 
  numericAnswer?: number; 
  numericTolerance?: number; 
  notes?: string;
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
  chapterSummary?: Slide[];
}

export interface UserProgress {
  completedLessons: string[];
  xp: number;
  currentCourseId: string;
}

// Exam & Question Types
export interface ExamQuestion {
  id: string;
  number: number;
  question: string;
  marks: number;
  solution: string;
}

export interface ExamSection {
  id: string;
  title: string;
  instructions: string;
  questions: ExamQuestion[];
}

export interface ExamPaper {
  courseId: string;
  title: string;
  moduleName: string;
  sections: ExamSection[];
}