import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MODULES } from '../data/modules';
import LessonPath from '../components/LessonPath';
import SectionSelector from '../components/SectionSelector';
import ModuleSelector from '../components/ModuleSelector';
import QuestionsTab from '../components/QuestionsTab';
import { UserProgress, Module } from '../types';
import { BookOpen, Zap, ChevronDown, Map, BookOpenCheck, FileText } from 'lucide-react';

interface Props {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dashboard: React.FC<Props> = ({ progress, setProgress, currentSectionIndex, setCurrentSectionIndex }) => {
  const navigate = useNavigate();
  const [isSectionSelectorOpen, setIsSectionSelectorOpen] = useState(false);
  const [isModuleSelectorOpen, setIsModuleSelectorOpen] = useState(false);
  const[activeTab, setActiveTab] = useState<'path' | 'questions' | 'notes'>('path');

  const currentModule: Module = MODULES.find(m => m.id === progress.currentModuleId) || MODULES[0];
  const currentSection = currentModule.sections && currentModule.sections.length > 0 
      ? currentModule.sections[currentSectionIndex] || currentModule.sections[0] 
      : null;

  // Restore scroll position on mount if we're coming back from a lesson
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('dashboard_scroll');
    if (savedScroll && activeTab === 'path') {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
      }, 10);
    }
  }, [activeTab]);

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

  return (
    <div className="min-h-screen flex flex-col pb-24 overflow-x-hidden border-x border-white/5 relative">
      <header className="sticky top-0 glass-panel z-40 p-3 flex justify-between items-center rounded-b-2xl border-t-0">
        <div 
          onClick={() => setIsModuleSelectorOpen(true)}
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
          {currentModule.moduleSummary && (
             <button 
                onClick={handleGoToSummary}
                className="flex items-center gap-1.5 bg-duo-blue/20 text-duo-blue px-3 py-1.5 rounded-xl font-bold hover:bg-duo-blue/30 transition-colors"
             >
                <BookOpen className="w-4 h-4" />
             </button>
          )}

          <div className="flex items-center font-bold text-slate-300 bg-black/30 px-3 py-1.5 rounded-xl border border-white/5">
            <Zap className="w-4 h-4 mr-1 text-amber-400 fill-amber-400" />
            <span className="text-amber-400">{progress.xp} XP</span>
          </div>
        </div>
      </header>

      <main className="p-0 flex-grow relative">
        {activeTab === 'path' && (
          currentSection ? (
            <>
              <LessonPath 
                section={currentSection} 
                completedLessons={progress.completedLessons}
                onStartLesson={handleStartLesson}
                onOpenSectionSelector={() => setIsSectionSelectorOpen(true)}
              />

              <SectionSelector 
                sections={currentModule.sections}
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
          )
        )}

        {activeTab === 'questions' && (
           <QuestionsTab moduleId={progress.currentModuleId} />
        )}

        {activeTab === 'notes' && (
           <div className="p-10 text-center text-slate-500 mt-20">
             <FileText className="w-16 h-16 mx-auto mb-4 text-slate-700" />
             <p className="font-bold text-lg text-slate-400">Notes Section</p>
             <p className="text-sm mt-2">Comprehensive course notes will be available here soon.</p>
           </div>
        )}

        <ModuleSelector 
           modules={MODULES}
           activeModuleId={progress.currentModuleId}
           onSelectModule={handleModuleChange}
           isOpen={isModuleSelectorOpen}
           onClose={() => setIsModuleSelectorOpen(false)}
        />
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
         <div className="max-w-md mx-auto w-full pointer-events-auto bg-[#0b0f19]/95 backdrop-blur-md border-t border-white/10 flex justify-around p-2 pb-4">
           <button 
              onClick={() => { setActiveTab('path'); window.scrollTo(0,0); }} 
              className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'path' ? 'text-duo-blue' : 'text-slate-500 hover:text-slate-300'}`}
           >
             <Map className="w-6 h-6 mb-1" />
             <span className="text-[10px] font-bold tracking-widest">PATH</span>
           </button>
           <button 
              onClick={() => { setActiveTab('questions'); window.scrollTo(0,0); }} 
              className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'questions' ? 'text-duo-blue' : 'text-slate-500 hover:text-slate-300'}`}
           >
             <BookOpenCheck className="w-6 h-6 mb-1" />
             <span className="text-[10px] font-bold tracking-widest">QUESTIONS</span>
           </button>
           <button 
              onClick={() => { setActiveTab('notes'); window.scrollTo(0,0); }} 
              className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'notes' ? 'text-duo-blue' : 'text-slate-500 hover:text-slate-300'}`}
           >
             <FileText className="w-6 h-6 mb-1" />
             <span className="text-[10px] font-bold tracking-widest">NOTES</span>
           </button>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;