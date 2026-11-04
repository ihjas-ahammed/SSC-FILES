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

export interface ExamQuestion {
  id: string;
  number: string;
  question: string;
  marks: number;
  solution: string;
}

export interface ExamSection {
  id: string;
  title: string;
  instruction: string;
  questions: ExamQuestion[];
}

export interface ExamPaper {
  moduleId: string;
  sections: ExamSection[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  sections: Section[];
  moduleSummary?: Slide[];
  examPaper?: ExamPaper;
}

export interface UserProgress {
  completedLessons: string[];
  xp: number;
  currentModuleId: string;
}