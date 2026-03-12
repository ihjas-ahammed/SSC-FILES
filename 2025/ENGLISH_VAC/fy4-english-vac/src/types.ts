export type SlideType = 
  | 'theory' 
  | 'example'
  | 'proof' 
  | 'numerical'
  | 'quiz' 
  | 'fill_in_blank'
  | 'example_q'
  | 'solution'
  | 'interactive_canvas'
  | 'ayah'
  | 'word_card'          
  | 'match_the_following'; 

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

export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface WordCardData {
  word: string;             
  translation: string;      
  context: string;          
  example: string;          
  exampleTranslation?: string; 
  morphology?: string;      
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  conceptTag: string;
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
  arabicText?: string;
  translation?: string;
  transliteration?: string;
  
  wordCard?: WordCardData;
  matchPairs?: MatchPair[];
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

export interface Module {
  id: string;
  title: string;
  description: string;
  sections: Section[];
  moduleSummary?: Slide[];
}

export interface UserProgress {
  completedLessons: string[];
  xp: number;
  currentModuleId: string;
}