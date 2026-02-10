import { Course } from '../types';
import { CHAPTER_1_CONTENT } from './chapter1';
import { CHAPTER_2_CONTENT } from './chapter2';

// In a real app, you might want to lazily load these or fetch them
export const COURSES: Course[] = [
  {
    id: 'course-ch1',
    title: 'Chapter 1: Preliminaries',
    description: 'Sets, Functions, Induction, and Infinity.',
    sections: CHAPTER_1_CONTENT
  },
  {
    id: 'course-ch2',
    title: 'Chapter 2: The Real Numbers',
    description: 'Algebraic properties, Order, and Completeness.',
    sections: CHAPTER_2_CONTENT
  }
];