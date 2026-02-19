export type SlideType = 'theory' | 'proof' | 'quiz' | 'match' | 'fill-blank' | 'info';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface MatchPair {
  id: string;
  left: string; // Content (Latex supported)
  right: string; // Content (Latex supported)
}

export interface BlankSegment {
  id: string;
  text?: string; // Static text
  isBlank?: boolean; // If true, this is a gap to fill
  correctValue?: string; // The correct word for the gap
}

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  content: string; // Supports LaTeX via $...$ and Markdown
  image?: string; // URL or SVG string
  
  // Quiz specific
  options?: QuizOption[]; 
  
  // Proof specific
  proofSteps?: string[]; 
  
  // Match specific
  pairs?: MatchPair[];
  
  // Fill Blank specific
  segments?: BlankSegment[]; // The sentence broken into parts
  wordBank?: string[]; // Distractors + correct answers
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

export interface ModuleSection {
  id: string;
  title: string;
  description: string;
  color: string;
  units: Unit[];
}

// Top Level (Previously Course)
export interface ElectronicsModule {
  id: string;
  title: string;
  description: string;
  sections: ModuleSection[];
}

export interface UserProgress {
  completedLessons: string[]; 
  xp: number;
  currentModuleId: string;
}