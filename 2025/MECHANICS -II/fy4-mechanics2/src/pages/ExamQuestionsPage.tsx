import React, { useState } from 'react';
import { MODULES } from '../data/modules';
import { UserProgress } from '../types';
import { EXAM_QUESTIONS } from '../data/exam_questions';
import ExamQuestionCard from '../components/ExamQuestionCard';
import NextModuleButton from '../components/NextModuleButton';
import ModuleSelector from '../components/ModuleSelector';
import { BookOpenCheck, ChevronDown } from 'lucide-react';

interface Props {
  progress: UserProgress;
  onModuleChange: (moduleId: string) => void;
}

const ExamQuestionsPage: React.FC<Props> = ({ progress, onModuleChange }) => {
  const [isModuleSelectorOpen, setIsModuleSelectorOpen] = useState(false);
  
  const currentModuleIndex = MODULES.findIndex(m => m.id === progress.currentModuleId);
  const currentModule = currentModuleIndex !== -1 ? MODULES[currentModuleIndex] : MODULES[0];
  
  const nextModule =
    currentModuleIndex !== -1 && currentModuleIndex < MODULES.length - 1
      ? MODULES[currentModuleIndex + 1]
      : undefined;

  const handleGoNextModule = () => {
    if (nextModule && onModuleChange) {
      onModuleChange(nextModule.id);
      window.scrollTo(0, 0);
    }
  };

  const sections =['A', 'B', 'C'] as const;
  const currentModuleQuestions = EXAM_QUESTIONS.filter(q => q.moduleId === currentModule.id);

  return (
    <div className="flex-grow flex flex-col pb-28 overflow-x-hidden border-x border-white/5 relative">
      
      {/* Module Selector Header (Similar to Dashboard) */}
      <header className="sticky top-0 glass-panel z-40 p-3 flex justify-between items-center rounded-b-2xl border-t-0 shadow-lg backdrop-blur-xl bg-[#0b0f19]/80">
        <div
          onClick={() => setIsModuleSelectorOpen(true)}
          className="flex items-center hover:bg-white/5 p-2 rounded-xl cursor-pointer transition-colors group w-full"
        >
          <BookOpenCheck className="w-6 h-6 text-duo-blue mr-3 shrink-0" />
          <div className="flex flex-col flex-grow min-w-0">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Exam Prep</span>
             <span className="font-bold text-sm text-white line-clamp-1">{currentModule.title}</span>
          </div>
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        </div>
      </header>

      <div className="p-4 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-10 mt-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
            Practice questions from "PHY4CJ204: Mechanics II"<br />Open Book Assessment.
          </p>
        </div>

        {currentModuleQuestions.length === 0 ? (
          <div className="p-10 text-center text-slate-500 mt-10 glass-panel rounded-3xl">
            <p>No exam questions available for this module yet.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {sections.map(section => {
              const questions = currentModuleQuestions.filter(q => q.section === section);
              if (questions.length === 0) return null;
              
              return (
                <div key={section} className="relative">
                  <div className="mb-5 inline-block">
                     <span className="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-lg font-bold text-sm border border-slate-700 shadow-sm">
                       Section {section}
                     </span>
                  </div>
                  
                  <div className="space-y-4">
                    {questions.map(q => (
                      <ExamQuestionCard key={q.id} question={q} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Next Module Button */}
        {nextModule && (
          <NextModuleButton nextModule={nextModule} onGoNext={handleGoNextModule} />
        )}
      </div>

      <ModuleSelector
        modules={MODULES}
        activeModuleId={progress.currentModuleId}
        completedLessons={progress.completedLessons}
        onSelectModule={(id) => { onModuleChange(id); window.scrollTo(0,0); }}
        isOpen={isModuleSelectorOpen}
        onClose={() => setIsModuleSelectorOpen(false)}
      />
    </div>
  );
};

export default ExamQuestionsPage;