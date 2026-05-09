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
    <div className="glass-panel rounded-2xl mb-4 overflow-hidden border border-white/5 shadow-lg transition-all bg-[#131b26]/80 backdrop-blur-xl">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 cursor-pointer flex items-start gap-4 hover:bg-white/5 transition-colors"
      >
        <div className="bg-[#1a2c42] text-duo-blue font-black px-3 py-1.5 rounded-xl shrink-0 text-sm h-fit shadow-inner">
          Q{question.id}
        </div>
        <div className="flex-grow">
           <div className="text-white font-semibold text-base leading-relaxed">
              <MathRenderer content={question.question} />
           </div>
           <div className="flex items-center gap-1.5 mt-4">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold">{question.marks} Marks</span>
           </div>
        </div>
        <div className="shrink-0 mt-1">
          {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </div>
      
      {isOpen && (
        <div className="p-6 border-t border-white/10 bg-black/50 animate-in slide-in-from-top-2 duration-300">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-duo-green mb-4">Detailed Solution</h4>
           <div className="text-slate-300 text-sm font-medium">
              <MathRenderer content={question.solution} />
           </div>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionCard;