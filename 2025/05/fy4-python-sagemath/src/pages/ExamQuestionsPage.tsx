import React from 'react';
import { MODULE_EXAM_PAPERS } from '../data/exam_questions';
import { MODULES } from '../data/modules';
import { BookOpenCheck } from 'lucide-react';
import { UserProgress } from '../types';
import NextModuleButton from '../components/NextModuleButton';
import ExamQuestionCard from '../components/ExamQuestionCard';

interface Props {
  progress: UserProgress;
  onModuleChange: (moduleId: string) => void;
}

const ExamQuestionsPage: React.FC<Props> = ({ progress, onModuleChange }) => {
  const currentModuleIndex = MODULES.findIndex(m => m.id === progress.currentModuleId);
  const currentModule = currentModuleIndex !== -1 ? MODULES[currentModuleIndex] : MODULES[0];
  const nextModule = currentModuleIndex !== -1 && currentModuleIndex < MODULES.length - 1 ? MODULES[currentModuleIndex + 1] : undefined;

  const paper = MODULE_EXAM_PAPERS[currentModule.id];
  const questions = paper ? paper.questions :[];

  const handleGoNextModule = () => {
    if (nextModule && onModuleChange) {
      onModuleChange(nextModule.id);
    }
  };

  const sections = ['A', 'B', 'C'] as const;

  return (
    <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 relative">
      <div className="flex items-center justify-center mb-6">
         <BookOpenCheck className="w-8 h-8 text-duo-blue mr-3" />
         <h1 className="text-2xl font-black text-white tracking-tight">Exam Prep</h1>
      </div>
      
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-white mb-1">{currentModule.title}</h2>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          Practice questions from "MAT4CJ205: Fundamentals of Python and SageMath"
        </p>
      </div>

      <div className="space-y-12">
          {questions.length === 0 ? (
              <p className="text-center text-slate-500">No questions available for this module.</p>
          ) : (
            sections.map(section => {
              const sectionQuestions = questions.filter(q => q.section === section);
              if (sectionQuestions.length === 0) return null;

              return (
                <div key={section} className="relative">
                  <div className="sticky top-0 z-10 glass-panel py-3 px-4 rounded-xl border-b-2 mb-6 shadow-md backdrop-blur-xl" style={{ borderBottomColor: 'var(--tw-colors-slate-500)' }}>
                    <h2 className="text-sm font-black uppercase tracking-wider text-slate-300">Section {section}</h2>
                  </div>
                  
                  <div className="space-y-4 pl-2">
                      {sectionQuestions.map(q => (
                        <ExamQuestionCard key={q.id} question={q} />
                      ))}
                  </div>
                </div>
              );
            })
          )}
      </div>

      {nextModule && onModuleChange && (
        <div className="mt-8">
           <NextModuleButton nextModule={nextModule} onGoNext={handleGoNextModule} />
        </div>
      )}
    </div>
  );
};

export default ExamQuestionsPage;