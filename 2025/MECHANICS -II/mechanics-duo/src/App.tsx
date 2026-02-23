import React, { useState, useEffect } from 'react';
import { COURSES } from './data/courses'; 
import LessonPath from './components/LessonPath';
import LessonView from './components/LessonView';
import SectionSelector from './components/SectionSelector';
import CourseSelector from './components/CourseSelector';
import { UserProgress, Lesson, Course } from './types';
import { BookOpen, Trophy, Zap, ChevronDown } from 'lucide-react';
import './App.css'

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('duofy4_progress'); 
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      xp: 0,
      currentCourseId: 'module-1' // Adjusted to map to Module/Course mapping
    };
  });

  const [activeUnitId, setActiveUnitId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isSectionSelectorOpen, setIsSectionSelectorOpen] = useState(false);
  const [isCourseSelectorOpen, setIsCourseSelectorOpen] = useState(false);

  // Derive Current Course/Section safely falling back to defaults if undefined (like for placeholder modules)
  const currentCourse: Course = COURSES.find(c => c.id === progress.currentCourseId) || COURSES[0];
  const currentSection = currentCourse.sections && currentCourse.sections.length > 0 
      ? currentCourse.sections[currentSectionIndex] || currentCourse.sections[0] 
      : null;

  useEffect(() => {
    localStorage.setItem('duofy4_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    setCurrentSectionIndex(0);
  }, [progress.currentCourseId]);

  const handleStartLesson = (unitId: string, lessonId: string) => {
    setActiveUnitId(unitId);
    setActiveLessonId(lessonId);
  };

  const handleFinishLesson = () => {
    if (activeLessonId) {
      const isNewCompletion = !progress.completedLessons.includes(activeLessonId);
      setProgress(prev => ({
        ...prev,
        completedLessons: isNewCompletion 
          ? [...prev.completedLessons, activeLessonId!] 
          : prev.completedLessons,
        xp: prev.xp + (isNewCompletion ? 20 : 5)
      }));
      setShowCompletion(true);
      setTimeout(() => {
        setShowCompletion(false);
        setActiveLessonId(null);
        setActiveUnitId(null);
      }, 2000);
    }
  };

  const handleExitLesson = () => {
    setActiveLessonId(null);
    setActiveUnitId(null);
  };

  const handleCourseChange = (courseId: string) => {
    setProgress(prev => ({ ...prev, currentCourseId: courseId }));
    setIsCourseSelectorOpen(false);
  };

  if (showCompletion) {
    return (
      <div className="fixed inset-0 bg-duo-green flex flex-col items-center justify-center text-white z-50 animate-in fade-in duration-300">
        <Trophy className="w-32 h-32 mb-6 text-yellow-300 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold mb-2 text-center px-4">Lesson Complete!</h1>
        <p className="text-xl opacity-90">+20 XP earned</p>
      </div>
    );
  }

  if (activeUnitId && activeLessonId && currentCourse.sections) {
    let activeLesson: Lesson | undefined;
    for (const section of currentCourse.sections) {
      const unit = section.units.find(u => u.id === activeUnitId);
      if (unit) {
        activeLesson = unit.lessons.find(l => l.id === activeLessonId);
        if (activeLesson) break;
      }
    }

    if (activeLesson) {
      return (
        <LessonView 
          lesson={activeLesson}
          onFinishLesson={handleFinishLesson}
          onExit={handleExitLesson}
        />
      );
    }
  }

  return (
    <div className="min-h-screen text-slate-200 max-w-md mx-auto border-x border-white/5 relative pb-10 overflow-x-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0b0f19]">
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
        
        <div className="flex space-x-4 font-bold text-slate-300">
          <div className="flex items-center text-amber-400">
            <Zap className="w-5 h-5 mr-1 fill-current" />
            <span>{progress.xp} XP</span>
          </div>
        </div>
      </header>

      <main className="p-0">
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

export default App;