import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';
import MathRenderer from '../MathRenderer';
import { ExamQuestion } from '../../types';

interface Props {
  question: ExamQuestion;
}

const ExamQuestionAccordion: React.FC<Props> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1e293b]/50 border border-white/10 rounded-2xl overflow-hidden mb-4 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-start gap-3 flex-grow">
          <div className="bg-blue-900/50 text-blue-400 font-black text-sm px-2.5 py-1 rounded-lg shrink-0 mt-0.5 border border-blue-500/20">
            Q{question.number}
          </div>
          <div className="flex-grow">
            <div className="text-slate-200 font-bold text-base leading-snug">
              <MathRenderer content={question.question} />
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-yellow-500/90 bg-yellow-500/10 w-max px-2 py-0.5 rounded-md border border-yellow-500/20">
              <Award className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">{question.marks} Marks</span>
            </div>
          </div>
        </div>
        <div className="shrink-0 text-slate-500 mt-1">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-4 pt-4 border-t border-white/5 bg-black/30 animate-in fade-in slide-in-from-top-2 duration-300">
          <h4 className="text-[10px] font-black text-duo-green uppercase tracking-widest mb-3 flex items-center gap-2">
            Detailed Solution
          </h4>
          <div className="text-slate-300 text-sm leading-relaxed">
            <MathRenderer content={question.solution} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionAccordion;