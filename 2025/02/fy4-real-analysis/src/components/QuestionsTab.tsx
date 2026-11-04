import React from 'react';
import { MODULES } from '../data/modules';
import ExamQuestionItem from './ExamQuestionItem';
import { BookOpenCheck } from 'lucide-react';

interface Props {
  moduleId: string;
}

const QuestionsTab: React.FC<Props> = ({ moduleId }) => {
  const module = MODULES.find(m => m.id === moduleId);
  const paper = module?.examPaper;

  if (!paper) {
    return (
      <div className="p-10 text-center text-slate-500 mt-20">
        <p>No model exam paper available for this module yet.</p>
      </div>
    );
  }

  return (
    <div className="p-4 animate-in fade-in duration-300">
      <div className="flex flex-col items-center justify-center text-center mb-8 mt-6">
        <BookOpenCheck className="w-10 h-10 text-duo-blue mb-3" />
        <h1 className="text-2xl font-black text-white mb-2">Exam Prep</h1>
        <p className="text-slate-400 text-sm font-medium px-4">
          Practice questions from "{module?.title}" Open Book Assessment.
        </p>
      </div>

      {paper.sections.map((section) => (
        <div key={section.id} className="mb-8">
          <div className="bg-slate-800/80 inline-block px-4 py-2 rounded-xl mb-4 border border-white/5 shadow-sm">
            <h2 className="text-white font-black text-sm">{section.title}</h2>
          </div>
          <p className="text-slate-400 text-xs font-bold mb-4 ml-1">{section.instruction}</p>

          <div className="space-y-4">
            {section.questions.map(q => (
              <ExamQuestionItem key={q.id} question={q} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsTab;