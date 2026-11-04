import React from 'react';
import { EXAM_PAPERS } from '../data/questions';
import QuestionAccordion from '../components/QuestionAccordion';
import { BookOpen } from 'lucide-react';

interface Props {
  moduleId: string;
}

const QuestionsTab: React.FC<Props> = ({ moduleId }) => {
  const paper = EXAM_PAPERS.find(p => p.moduleId === moduleId);

  if (!paper) {
    return (
      <div className="p-10 text-center text-slate-500 mt-20">
        <p>No question paper found for this module.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f19] text-slate-200 p-5 pt-8 animate-in fade-in duration-300">
      <div className="flex flex-col items-center mb-8 text-center">
        <BookOpen className="w-10 h-10 text-duo-blue mb-3" />
        <h1 className="text-3xl font-black text-white">Exam Prep</h1>
        <p className="text-sm text-slate-400 font-medium mt-3 leading-relaxed max-w-[280px]">
          Practice questions from <br/><strong className="text-slate-300">MAT4CJ204: Basic Linear Algebra</strong><br/>Internal Examination.
        </p>
      </div>

      <div className="space-y-8">
        {paper.sections.map(section => (
          <div key={section.id} className="relative">
            <div className="mb-4">
              <span className="inline-block bg-slate-800 text-white font-black py-1.5 px-4 rounded-xl text-sm shadow-sm border-b-2 border-slate-700 uppercase tracking-widest">
                {section.title}
              </span>
              <p className="text-xs text-slate-500 font-bold mt-2 px-1">
                {section.description}
              </p>
            </div>
            
            <div className="space-y-3">
              {section.questions.map(q => (
                <QuestionAccordion key={q.id} question={q} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsTab;