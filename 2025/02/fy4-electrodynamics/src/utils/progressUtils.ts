import { Course, Section, Lesson } from '../types';

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
 * Calculates the percentage of completed lessons within a specific course/module.
 */
export const calculateCourseProgress = (course: Course, completedLessons: string[]): number => {
  const allLessons: Lesson[] = course.sections.flatMap(s => s.units.flatMap(u => u.lessons));
  if (allLessons.length === 0) return 0;

  const completedCount = allLessons.filter(lesson => completedLessons.includes(lesson.id)).length;
  return Math.round((completedCount / allLessons.length) * 100);
};