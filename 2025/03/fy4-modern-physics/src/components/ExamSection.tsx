import React from 'react';
import { ExamQuestion } from '../data/exam_questions';
import ExamQuestionCard from './ExamQuestionCard';

interface Props {
  section: 'A' | 'B' | 'C';
  questions: ExamQuestion[];
}

const ExamSection: React.FC<Props> = ({ section, questions }) => {
  return (
    <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
         <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-xl border border-slate-700 shadow-sm">
           Section {section}
         </span>
      </h2>
      {questions.map(q => (
        <ExamQuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
};

export default ExamSection;