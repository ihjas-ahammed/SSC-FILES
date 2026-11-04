import React, { useState } from 'react';
import { EXAM_QUESTIONS } from '../data/exam_questions';
import { MODULES } from '../data/modules';
import { UserProgress } from '../types';
import { BookOpenCheck, ChevronDown } from 'lucide-react';
import ExamSection from '../components/ExamSection';
import ModuleSelector from '../components/ModuleSelector';

interface Props {
  progress: UserProgress;
  onModuleChange: (moduleId: string) => void;
}

const ExamQuestionsPage: React.FC<Props> = ({ progress, onModuleChange }) => {
  const[isModuleSelectorOpen, setIsModuleSelectorOpen] = useState(false);
  const sections = ['A', 'B', 'C'] as const;

  const currentModule = MODULES.find(m => m.id === progress.currentModuleId) || MODULES[0];
  const moduleQuestions = EXAM_QUESTIONS.filter(q => q.moduleId === currentModule.id);

  return (
    <div className="flex-grow flex flex-col pb-28 overflow-x-hidden border-x border-white/5 relative">
      <header className="sticky top-0 glass-panel z-40 p-3 flex justify-between items-center rounded-b-2xl border-t-0">
        <div
          onClick={() => setIsModuleSelectorOpen(true)}
          className="flex items-center hover:bg-white/5 p-2 rounded-xl cursor-pointer transition-colors group"
        >
          <div className="relative">
            <BookOpenCheck className="w-8 h-8 text-duo-blue" />
            <div className="absolute -bottom-1 -right-1 bg-slate-800 rounded-full border border-slate-600">
              <ChevronDown className="w-3 h-3 text-slate-300" />
            </div>
          </div>
        </div>
        
        <h1 className="text-xl font-black text-white tracking-tight absolute left-1/2 -translate-x-1/2">
          Exam Prep
        </h1>
      </header>

      <div className="p-4 mt-2">
        <p className="text-center text-slate-400 text-sm font-medium mb-8">
          Practice questions from "PHY4CJ205: Modern Physics" Open Book Assessment.
        </p>

        {sections.map(section => {
          const questions = moduleQuestions.filter(q => q.section === section);
          if (questions.length === 0) return null;
          
          return <ExamSection key={section} section={section} questions={questions} />;
        })}

        {moduleQuestions.length === 0 && (
          <div className="p-10 text-center text-slate-500 mt-10">
            <p>Questions for this module are coming soon!</p>
          </div>
        )}
      </div>

      <ModuleSelector
        modules={MODULES}
        activeModuleId={progress.currentModuleId}
        completedLessons={progress.completedLessons}
        onSelectModule={onModuleChange}
        isOpen={isModuleSelectorOpen}
        onClose={() => setIsModuleSelectorOpen(false)}
      />
    </div>
  );
};

export default ExamQuestionsPage;