import { Module, Section, Lesson } from '../types';

/**
 * Calculates the percentage of completed lessons within a specific section.
 */
export const calculateSectionProgress = (section: Section, completedLessons: string[]): number => {
  const allLessons: Lesson[] = section.units.flatMap(u => u.lessons);
  if (allLessons.length === 0) return 0;

  const completedCount = allLessons.filter(lesson => completedLessons.includes(lesson.id)).length;
  return Math.round((completedCount / allLessons.length) * 100);
};

/**
 * Calculates the percentage of completed lessons within a specific module.
 */
export const calculateModuleProgress = (module: Module, completedLessons: string[]): number => {
  const allLessons: Lesson[] = module.sections.flatMap(s => s.units.flatMap(u => u.lessons));
  if (allLessons.length === 0) return 0;

  const completedCount = allLessons.filter(lesson => completedLessons.includes(lesson.id)).length;
  return Math.round((completedCount / allLessons.length) * 100);
};