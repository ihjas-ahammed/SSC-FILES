import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import LessonPath from '../components/LessonPath';
import SectionSelector from '../components/SectionSelector';
import CourseSelector from '../components/CourseSelector';
import { UserProgress, Course } from '../types';
import { BookOpen, Zap, ChevronDown } from 'lucide-react';

interface Props {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dashboard: React.FC<Props> = ({ progress, setProgress, currentSectionIndex, setCurrentSectionIndex }) => {
  const navigate = useNavigate();
  const [isSectionSelectorOpen, setIsSectionSelectorOpen] = useState(false);
  const [isCourseSelectorOpen, setIsCourseSelectorOpen] = useState(false);

  const currentCourse: Course = COURSES.find(c => c.id === progress.currentCourseId) || COURSES[0];
  const currentSection = currentCourse.sections && currentCourse.sections.length > 0 
      ? currentCourse.sections[currentSectionIndex] || currentCourse.sections[0] 
      : null;

  // Restore scroll position on mount if we're coming back from a lesson
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('dashboard_scroll');
    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
      }, 10);
    }
  }, []);

  const handleStartLesson = (unitId: string, lessonId: string) => {
    sessionStorage.setItem('dashboard_scroll', window.scrollY.toString());
    navigate(`/lesson/${currentCourse.id}/${unitId}/${lessonId}`);
  };

  const handleGoToSummary = () => {
    sessionStorage.setItem('dashboard_scroll', window.scrollY.toString());
    navigate(`/summary/${currentCourse.id}`);
  };

  const handleCourseChange = (courseId: string) => {
    sessionStorage.removeItem('dashboard_scroll');
    window.scrollTo(0, 0);
    setProgress(prev => ({ ...prev, currentCourseId: courseId }));
    setIsCourseSelectorOpen(false);
  };

  const handleSectionChange = (idx: number) => {
    sessionStorage.removeItem('dashboard_scroll');
    window.scrollTo(0, 0);
    setCurrentSectionIndex(idx);
  };

  return (
    <div className="min-h-screen flex flex-col pb-10 overflow-x-hidden border-x border-white/5">
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
            />

            <SectionSelector 
              sections={currentCourse.sections}
              activeSectionIndex={currentSectionIndex}
              onSelectSection={handleSectionChange}
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
           courses={COURSES}
           activeCourseId={progress.currentCourseId}
           onSelectCourse={handleCourseChange}
           isOpen={isCourseSelectorOpen}
           onClose={() => setIsCourseSelectorOpen(false)}
        />
      </main>
    </div>
  );
};

export default Dashboard;