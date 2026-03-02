import React, { useState } from 'react';
import { Course, UserProgress } from '../types';
import LessonPath from './LessonPath';
import SectionSelector from './SectionSelector';
import CourseSelector from './CourseSelector';
import { BookOpen, Zap, ChevronDown } from 'lucide-react';
import { getNextContext } from '../utils/courseUtils';

interface Props {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
  currentCourse: Course;
  courses: Course[];
  handleCourseChange: (id: string) => void;
  handleStartLesson: (uId: string, lId: string) => void;
  handleGoToSummary: () => void;
}

const LearnTab: React.FC<Props> = ({ 
  progress, 
  currentSectionIndex, 
  setCurrentSectionIndex, 
  currentCourse,
  courses,
  handleCourseChange,
  handleStartLesson,
  handleGoToSummary
}) => {
  const [isSectionSelectorOpen, setIsSectionSelectorOpen] = useState(false);
  const [isCourseSelectorOpen, setIsCourseSelectorOpen] = useState(false);

  const currentSection = currentCourse.sections && currentCourse.sections.length > 0 
      ? currentCourse.sections[currentSectionIndex] || currentCourse.sections[0] 
      : null;

  const nextContext = getNextContext(courses, currentCourse.id, currentSectionIndex);

  const handleNavigateNext = () => {
    if (nextContext.type === 'section' && nextContext.targetIndex !== undefined) {
      setCurrentSectionIndex(nextContext.targetIndex);
      window.scrollTo(0, 0);
    } else if (nextContext.type === 'course' && nextContext.targetId) {
      handleCourseChange(nextContext.targetId);
    }
  };

  return (
    <>
      <header className="sticky top-0 glass-panel z-40 p-3 flex justify-between items-center rounded-b-2xl border-t-0">
        <div 
          onClick={() => setIsCourseSelectorOpen(true)}
          className="flex items-center hover:bg-white/5 p-2 rounded-xl cursor-pointer transition-colors group"
        >
          <div className="relative">
             <BookOpen className="w-8 h-8 text-duo-blue" />
             <div className="absolute -bottom-1 -right-1 bg-slate-800 rounded-full border border-slate-600">
                <ChevronDown className="w-3 h-3 text-slate-300" />
             </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {currentCourse.chapterSummary && (
             <button 
                onClick={handleGoToSummary}
                className="flex items-center gap-1.5 bg-duo-blue/20 text-duo-blue px-3 py-1.5 rounded-xl font-bold hover:bg-duo-blue/30 transition-colors"
             >
                <BookOpen className="w-4 h-4" />
             </button>
          )}

          <div className="flex items-center font-bold text-slate-300 bg-black/30 px-3 py-1.5 rounded-xl">
            <Zap className="w-4 h-4 mr-1 text-amber-400 fill-amber-400" />
            <span className="text-amber-400">{progress.xp} XP</span>
          </div>
        </div>
      </header>

      <main className="p-0 flex-grow relative">
        {currentSection ? (
          <>
            <LessonPath 
              section={currentSection} 
              completedLessons={progress.completedLessons}
              onStartLesson={handleStartLesson}
              onOpenSectionSelector={() => setIsSectionSelectorOpen(true)}
              nextContext={nextContext}
              onNavigateNext={handleNavigateNext}
            />

            <SectionSelector 
              sections={currentCourse.sections}
              activeSectionIndex={currentSectionIndex}
              completedLessons={progress.completedLessons}
              onSelectSection={setCurrentSectionIndex}
              isOpen={isSectionSelectorOpen}
              onClose={() => setIsSectionSelectorOpen(false)}
            />
          </>
        ) : (
          <div className="p-10 text-center text-slate-500 mt-20">
            <p>More modules coming soon!</p>
          </div>
        )}

        <CourseSelector 
           courses={courses}
           activeCourseId={progress.currentCourseId}
           completedLessons={progress.completedLessons}
           onSelectCourse={handleCourseChange}
           isOpen={isCourseSelectorOpen}
           onClose={() => setIsCourseSelectorOpen(false)}
        />
      </main>
    </>
  );
};

export default LearnTab;