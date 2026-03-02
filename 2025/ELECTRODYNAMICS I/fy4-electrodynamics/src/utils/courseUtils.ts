import { Course, Section } from '../types';

export const getNextContext = (
  courses: Course[], 
  currentCourseId: string, 
  currentSectionIndex: number
): { type: 'section' | 'course' | 'none', label: string, targetId?: string, targetIndex?: number } => {
  
  const courseIndex = courses.findIndex(c => c.id === currentCourseId);
  if (courseIndex === -1) return { type: 'none', label: '' };

  const currentCourse = courses[courseIndex];

  // Check if there is a next section in the current course
  if (currentSectionIndex < currentCourse.sections.length - 1) {
    const nextSection = currentCourse.sections[currentSectionIndex + 1];
    return {
      type: 'section',
      label: `Next Section: ${nextSection.title.split(':')[0]}`, // e.g. "Next Section: Section 1.2"
      targetIndex: currentSectionIndex + 1
    };
  }

  // Check if there is a next course
  if (courseIndex < courses.length - 1) {
    const nextCourse = courses[courseIndex + 1];
    return {
      type: 'course',
      label: `Next Module: ${nextCourse.title.split(':')[0]}`, // e.g. "Next Module: Module II"
      targetId: nextCourse.id
    };
  }

  return { type: 'none', label: '' };
};

export const getNextCourseId = (courses: Course[], currentCourseId: string): string | null => {
  const index = courses.findIndex(c => c.id === currentCourseId);
  if (index !== -1 && index < courses.length - 1) {
    return courses[index + 1].id;
  }
  return null;
};