import React, { useState } from 'react';
import MathRenderer from './MathRenderer';
import { ExamQuestion } from '../data/exam_questions';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';

interface Props {
  question: ExamQuestion;
}

const ExamQuestionCard: React.FC<Props> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-lg transition-all">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 cursor-pointer flex items-start gap-3 hover:bg-white/5 transition-colors"
      >
        <div className="bg-duo-blue/20 text-duo-blue font-black px-3 py-1 rounded-lg shrink-0 text-sm mt-0.5">
          Q{question.id}
        </div>
        <div className="flex-grow min-w-0">
           <div className="text-slate-200 font-bold text-sm leading-relaxed">
              <MathRenderer content={question.question} />
           </div>
           <div className="flex items-center gap-2 mt-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold">{question.marks} Marks</span>
           </div>
        </div>
        <div className="shrink-0 mt-1">
          {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </div>
      
      {isOpen && (
        <div className="p-5 border-t border-white/10 bg-black/40 animate-in slide-in-from-top-2 duration-300">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-green-400 mb-3">Detailed Solution</h4>
           <div className="text-slate-300 text-sm">
              <MathRenderer content={question.solution} />
           </div>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionCard;