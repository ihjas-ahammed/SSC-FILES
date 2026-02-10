import React, { useState, useEffect } from 'react';
import { COURSES } from './data/courses'; // Import aggregated courses
import LessonPath from './components/LessonPath';
import LessonView from './components/LessonView';
import SectionSelector from './components/SectionSelector';
import CourseSelector from './components/CourseSelector'; // New Component
import { UserProgress, Lesson, Course } from './types';
import { BookOpen, Trophy, Zap, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  // --- State Management ---
  // Default to Chapter 2 if no save found, or keep typical logic
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('rad_progress_v3'); // Version bump for new structure
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      xp: 0,
      currentCourseId: 'course-ch2' // Default to Real Numbers for legacy reasons, or change to ch1
    };
  });

  const [activeUnitId, setActiveUnitId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isSectionSelectorOpen, setIsSectionSelectorOpen] = useState(false);
  const [isCourseSelectorOpen, setIsCourseSelectorOpen] = useState(false); // New State

  // Derived State
  const currentCourse: Course = COURSES.find(c => c.id === progress.currentCourseId) || COURSES[0];
  const currentSection = currentCourse.sections[currentSectionIndex] || currentCourse.sections[0];

  useEffect(() => {
    localStorage.setItem('rad_progress_v3', JSON.stringify(progress));
  }, [progress]);

  // Reset section index when course changes
  useEffect(() => {
    setCurrentSectionIndex(0);
  }, [progress.currentCourseId]);

  // --- Handlers ---
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

  // --- Render ---
  if (showCompletion) {
    return (
      <div className="fixed inset-0 bg-duo-green flex flex-col items-center justify-center text-white z-50 animate-in fade-in duration-300">
        <Trophy className="w-32 h-32 mb-6 text-yellow-300 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold mb-2 text-center px-4">Lesson Complete!</h1>
        <p className="text-xl opacity-90">+20 XP earned</p>
      </div>
    );
  }

  if (activeUnitId && activeLessonId) {
    let activeLesson: Lesson | undefined;
    // Search within current course
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
    <div className="min-h-screen bg-white max-w-md mx-auto border-x border-gray-100 shadow-xl relative pb-10 overflow-x-hidden">
      
      {/* Top Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-200 p-3 flex justify-between items-center">
        
        {/* Course Selector Trigger (Top Left) */}
        <div 
          onClick={() => setIsCourseSelectorOpen(true)}
          className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors group"
        >
          {/* Simple Icon representation */}
          <div className="relative">
             <BookOpen className="w-8 h-8 text-duo-green" />
             <div className="absolute -bottom-1 -right-1 bg-white rounded-full border border-gray-100">
                <ChevronDown className="w-3 h-3 text-slate-400" />
             </div>
          </div>
        </div>
        
        {/* Title / XP */}
        <div className="flex space-x-4 font-bold text-slate-400">
          <div className="flex items-center text-amber-500">
            <Zap className="w-5 h-5 mr-1 fill-current" />
            <span>{progress.xp} XP</span>
          </div>
        </div>
      </header>

      <main className="p-0">
        {/* Render the LessonPath (which includes the minimal section header) */}
        <LessonPath 
          section={currentSection} // Pass current section derived from course
          completedLessons={progress.completedLessons}
          onStartLesson={handleStartLesson}
          onOpenSectionSelector={() => setIsSectionSelectorOpen(true)}
        />

        {/* Section Selector (Within Course) */}
        <SectionSelector 
          sections={currentCourse.sections}
          activeSectionIndex={currentSectionIndex}
          onSelectSection={setCurrentSectionIndex}
          isOpen={isSectionSelectorOpen}
          onClose={() => setIsSectionSelectorOpen(false)}
        />

        {/* Course Selector (Top Level) */}
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