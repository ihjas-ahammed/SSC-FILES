import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';
import MathRenderer from './MathRenderer';
import { ExamQuestion } from '../types';

interface Props {
  question: ExamQuestion;
}

const ExamQuestionItem: React.FC<Props> = ({ question }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-panel p-4 rounded-2xl mb-4 cursor-pointer transition-all border border-white/10 shadow-sm" onClick={() => setExpanded(!expanded)}>
      <div className="flex items-start gap-3">
        <div className="bg-blue-900/40 text-blue-400 font-black text-xs px-2.5 py-1 rounded-lg shrink-0 mt-0.5 border border-blue-500/20">
          Q{question.number}
        </div>
        <div className="flex-grow">
          <div className="text-white font-bold text-[15px] leading-snug">
             <MathRenderer content={question.question} />
          </div>
          <div className="flex items-center gap-1.5 mt-3">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-xs">{question.marks} Marks</span>
          </div>
        </div>
        <div className="shrink-0 text-slate-400 mt-1">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-white/5 animate-in fade-in duration-300 cursor-text" onClick={(e) => e.stopPropagation()}>
          <p className="text-green-400 font-bold text-[10px] uppercase tracking-widest mb-3">Detailed Solution</p>
          <div className="text-slate-300 text-sm">
            <MathRenderer content={question.solution} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionItem;