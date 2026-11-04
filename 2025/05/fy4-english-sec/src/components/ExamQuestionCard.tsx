import React, { useState } from 'react';
import { ExamQuestion } from '../data/exam_data';
import MathRenderer from './MathRenderer';
import { ChevronDown, ChevronUp, Lightbulb, FileCheck } from 'lucide-react';
import '../styles/exam.css';

interface Props {
  question: ExamQuestion;
  index: number;
}

const ExamQuestionCard: React.FC<Props> = ({ question, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Styling based on section
  const sectionColors = {
    'A': { bg: 'bg-emerald-900/20', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
    'B': { bg: 'bg-blue-900/20', border: 'border-blue-500/30', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300' },
    'C': { bg: 'bg-purple-900/20', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300' },
  };

  const style = sectionColors[question.section];

  return (
    <div className={`exam-card-container mb-4 rounded-2xl border ${style.border} ${style.bg} transition-all duration-300 overflow-hidden`}>
      {/* Question Header (Always Visible) */}
      <div 
        className="p-5 cursor-pointer flex items-start gap-4 hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg bg-black/40 border border-white/10 ${style.text}`}>
          Q{index + 1}
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${style.badge}`}>
              Section {question.section}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
              {question.marks} Marks
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
              {question.wordLimit}
            </span>
          </div>
          <h3 className="text-white font-bold text-lg leading-snug">
            <MathRenderer content={question.question} />
          </h3>
        </div>

        <div className="shrink-0 mt-2 text-slate-400">
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </div>

      {/* Answer Section (Expandable) */}
      <div className={`exam-answer-collapse ${isOpen ? 'open' : ''}`}>
        <div className="p-5 pt-0 border-t border-white/5 bg-black/20">
          
          <div className="mt-4 mb-5">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck className={`w-5 h-5 ${style.text}`} />
              <h4 className={`text-sm font-black uppercase tracking-widest ${style.text}`}>
                Model Answer
              </h4>
            </div>
            <div className="text-slate-300 text-[15px] leading-relaxed p-4 rounded-xl bg-black/40 border border-white/5 shadow-inner">
              <MathRenderer content={question.modelAnswer} />
            </div>
          </div>

          {question.examinerTips && (
            <div className="exam-tip">
              <div className="exam-tip-title">
                <Lightbulb className="w-4 h-4" />
                Examiner's Tip
              </div>
              <p>{question.examinerTips}</p>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ExamQuestionCard;