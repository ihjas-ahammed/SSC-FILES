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
      <header className="fixed top-0 inset-x-0 lg:left-60 z-40 pointer-events-none">
        <div className="max-w-md mx-auto lg:max-w-3xl lg:px-2 pointer-events-auto">
          <div className="glass-panel p-3 flex items-center gap-2 rounded-b-2xl border-t-0">
            <div
              onClick={() => setIsCourseSelectorOpen(true)}
              className="flex items-center hover:bg-white/5 p-1.5 rounded-xl cursor-pointer transition-colors group shrink-0"
            >
              <div className="relative">
                <BookOpen className="w-7 h-7 text-duo-blue" />
                <div className="absolute -bottom-1 -right-1 bg-slate-800 rounded-full border border-slate-600">
                  <ChevronDown className="w-3 h-3 text-slate-300" />
                </div>
              </div>
            </div>

            {currentSection && (
              <button
                onClick={() => setIsSectionSelectorOpen(true)}
                className={`flex-1 min-w-0 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all border-b-2 border-${currentSection.color}`}
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-white truncate">{currentSection.title}</span>
                <ChevronDown className="w-4 h-4 text-slate-300 shrink-0" />
              </button>
            )}

            <div className="flex items-center gap-2 shrink-0">
              {currentCourse.chapterSummary && (
                <button
                  onClick={handleGoToSummary}
                  className="flex items-center gap-1.5 bg-duo-blue/20 text-duo-blue p-2 rounded-xl font-bold hover:bg-duo-blue/30 transition-colors"
                  aria-label="Chapter summary"
                >
                  <BookOpen className="w-4 h-4" />
                </button>
              )}

              <div className="flex items-center font-bold text-slate-300 bg-black/30 px-2.5 py-1.5 rounded-xl">
                <Zap className="w-4 h-4 mr-1 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 text-sm">{progress.xp}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-0 flex-grow relative pt-20">
        {currentSection ? (
          <>
            <LessonPath
              section={currentSection}
              completedLessons={progress.completedLessons}
              onStartLesson={handleStartLesson}
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