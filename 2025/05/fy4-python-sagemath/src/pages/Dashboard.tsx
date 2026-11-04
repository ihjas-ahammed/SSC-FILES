import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MODULES } from '../data/modules';
import LessonPath from '../components/LessonPath';
import SectionSelector from '../components/SectionSelector';
import ModuleSelector from '../components/ModuleSelector';
import { UserProgress, Module } from '../types';
import { BookOpen, Zap, ChevronDown } from 'lucide-react';

interface Props {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dashboard: React.FC<Props> = ({
  progress,
  setProgress,
  currentSectionIndex,
  setCurrentSectionIndex,
}) => {
  const navigate = useNavigate();
  const [isSectionSelectorOpen, setIsSectionSelectorOpen] = useState(false);
  const [isModuleSelectorOpen, setIsModuleSelectorOpen] = useState(false);

  const currentModule: Module =
    MODULES.find(m => m.id === progress.currentModuleId) || MODULES[0];

  const currentSection =
    currentModule.sections && currentModule.sections.length > 0
      ? currentModule.sections[currentSectionIndex] || currentModule.sections[0]
      : null;

  const nextSection =
    currentModule.sections && currentSectionIndex < currentModule.sections.length - 1
      ? currentModule.sections[currentSectionIndex + 1]
      : undefined;

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
    navigate(`/lesson/${currentModule.id}/${unitId}/${lessonId}`);
  };

  const handleGoToSummary = () => {
    sessionStorage.setItem('dashboard_scroll', window.scrollY.toString());
    navigate(`/summary/${currentModule.id}`);
  };

  const handleModuleChange = (moduleId: string) => {
    sessionStorage.removeItem('dashboard_scroll');
    window.scrollTo(0, 0);
    setProgress(prev => ({ ...prev, currentModuleId: moduleId }));
    setIsModuleSelectorOpen(false);
  };

  const handleSectionChange = (idx: number) => {
    sessionStorage.removeItem('dashboard_scroll');
    window.scrollTo(0, 0);
    setCurrentSectionIndex(idx);
  };

  const handleGoNextSection = () => {
    if (nextSection) {
      sessionStorage.removeItem('dashboard_scroll');
      window.scrollTo(0, 0);
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  return (
    <div className="flex-grow flex flex-col pb-28 overflow-x-hidden border-x border-white/5 lg:pb-0 lg:border-x-0">
      <header className="fixed top-0 inset-x-0 lg:left-60 z-40 pointer-events-none">
        <div className="max-w-md mx-auto lg:max-w-3xl lg:px-2 pointer-events-auto">
          <div className="glass-panel p-3 flex items-center gap-2 rounded-b-2xl border-t-0">
            <div
              onClick={() => setIsModuleSelectorOpen(true)}
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
              {currentModule.moduleSummary && (
                <button
                  onClick={handleGoToSummary}
                  className="flex items-center gap-1.5 bg-duo-blue/20 text-duo-blue p-2 rounded-xl font-bold hover:bg-duo-blue/30 transition-colors"
                  aria-label="Module summary"
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
              nextSection={nextSection}
              completedLessons={progress.completedLessons}
              onStartLesson={handleStartLesson}
              onGoNextSection={handleGoNextSection}
            />

            <SectionSelector
              sections={currentModule.sections}
              activeSectionIndex={currentSectionIndex}
              completedLessons={progress.completedLessons}
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

        <ModuleSelector
          modules={MODULES}
          activeModuleId={progress.currentModuleId}
          completedLessons={progress.completedLessons}
          onSelectModule={handleModuleChange}
          isOpen={isModuleSelectorOpen}
          onClose={() => setIsModuleSelectorOpen(false)}
        />
      </main>
    </div>
  );
};

export default Dashboard;
