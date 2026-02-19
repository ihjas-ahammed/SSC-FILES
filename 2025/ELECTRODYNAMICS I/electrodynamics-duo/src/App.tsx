import React, { useState, useEffect } from 'react';
import { MODULES } from './data/modules'; 
import LessonPath from './components/LessonPath';
import LessonView from './components/LessonView';
import SectionSelector from './components/SectionSelector';
import CourseSelector from './components/CourseSelector'; 
import { UserProgress, Lesson, ElectronicsModule } from './types';
import { BookOpen, Trophy, Zap, ChevronDown, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('elec_progress_v1'); 
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      xp: 0,
      currentModuleId: 'module-1' // Default to Module 1
    };
  });

  const [activeUnitId, setActiveUnitId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isSectionSelectorOpen, setIsSectionSelectorOpen] = useState(false);
  const [isCourseSelectorOpen, setIsCourseSelectorOpen] = useState(false);

  // Derived State based on Modules
  const currentModule: ElectronicsModule = MODULES.find(c => c.id === progress.currentModuleId) || MODULES[0];
  const currentSection = currentModule.sections[currentSectionIndex] || currentModule.sections[0];

  useEffect(() => {
    localStorage.setItem('elec_progress_v1', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    setCurrentSectionIndex(0);
  }, [progress.currentModuleId]);

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

  const handleModuleChange = (moduleId: string) => {
    setProgress(prev => ({ ...prev, currentModuleId: moduleId }));
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

  if (activeUnitId && activeLessonId) {
    let activeLesson: Lesson | undefined;
    for (const section of currentModule.sections) {
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
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-200 p-3 flex justify-between items-center">
        <div 
          onClick={() => setIsCourseSelectorOpen(true)}
          className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors group"
        >
          <div className="relative">
             <BookOpen className="w-8 h-8 text-duo-green" />
             <div className="absolute -bottom-1 -right-1 bg-white rounded-full border border-gray-100">
                <ChevronDown className="w-3 h-3 text-slate-400" />
             </div>
          </div>
        </div>
        
        <div className="flex space-x-4 font-bold text-slate-400">
          <div className="flex items-center text-amber-500">
            <Zap className="w-5 h-5 mr-1 fill-current" />
            <span>{progress.xp} XP</span>
          </div>
        </div>
      </header>

      <main className="p-0">
        {currentSection ? (
          <LessonPath 
            section={currentSection}
            completedLessons={progress.completedLessons}
            onStartLesson={handleStartLesson}
            onOpenSectionSelector={() => setIsSectionSelectorOpen(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-8 mt-20 text-slate-400 text-center">
            <div className="bg-slate-100 p-6 rounded-full mb-4">
              <AlertCircle className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-600 mb-2">No Content Yet</h2>
            <p className="max-w-xs">This module is currently under development. Please check back later.</p>
          </div>
        )}

        <SectionSelector 
          sections={currentModule.sections}
          activeSectionIndex={currentSectionIndex}
          onSelectSection={setCurrentSectionIndex}
          isOpen={isSectionSelectorOpen}
          onClose={() => setIsSectionSelectorOpen(false)}
        />

        <CourseSelector 
           courses={MODULES}
           activeCourseId={progress.currentModuleId}
           onSelectCourse={handleModuleChange}
           isOpen={isCourseSelectorOpen}
           onClose={() => setIsCourseSelectorOpen(false)}
        />
      </main>
    </div>
  );
};

export default App;