import React from 'react';
import { ExamSection } from '../../types';
import ExamQuestionAccordion from './ExamQuestionAccordion';

interface Props {
  section: ExamSection;
}

const ExamSectionComponent: React.FC<Props> = ({ section }) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-start mb-5 gap-2 border-b border-white/10 pb-4">
        <div className="bg-slate-800 border border-slate-700 text-slate-200 font-black px-4 py-1.5 rounded-xl uppercase tracking-wider text-sm shadow-sm">
          {section.title}
        </div>
        {section.instructions && (
          <p className="text-slate-400 text-xs font-bold tracking-wide mt-1">
            {section.instructions}
          </p>
        )}
      </div>
      <div className="space-y-4">
        {section.questions.map((q) => (
          <ExamQuestionAccordion key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
};

export default ExamSectionComponent;