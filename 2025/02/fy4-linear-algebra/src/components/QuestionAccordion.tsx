import React, { useState } from 'react';
import { ExamQuestion } from '../types';
import MathRenderer from './MathRenderer';
import { ChevronDown, Award } from 'lucide-react';

interface Props {
  question: ExamQuestion;
}

const QuestionAccordion: React.FC<Props> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-panel rounded-2xl mb-3 overflow-hidden border-2 border-white/5 bg-[#121622]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left p-4 flex justify-between items-start hover:bg-white/5 transition-colors"
      >
        <div className="flex-grow pr-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="bg-duo-blue/20 text-duo-blue font-black px-2.5 py-1 rounded-lg text-sm shrink-0 mt-0.5">
              {question.qNumber}
            </span>
            <span className="font-bold text-slate-100 leading-snug">
               <MathRenderer content={question.question} />
            </span>
          </div>
          <div className="flex items-center text-amber-400 text-xs font-black uppercase tracking-wider ml-12">
             <Award className="w-3.5 h-3.5 mr-1.5" strokeWidth={3} /> {question.marks} Marks
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="p-5 border-t border-white/5 bg-[#0b0f19] animate-in fade-in slide-in-from-top-2 duration-200">
           <div className="text-[10px] font-black uppercase text-duo-green mb-3 tracking-widest flex items-center">
             <span className="w-1.5 h-1.5 rounded-full bg-duo-green mr-2"></span> Detailed Solution
           </div>
           <MathRenderer content={question.solution} className="text-slate-300 text-base" />
        </div>
      )}
    </div>
  );
};

export default QuestionAccordion;