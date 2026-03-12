import React, { useState } from 'react';
import MathRenderer from '../components/MathRenderer';
import { EXAM_QUESTIONS, ExamQuestion } from '../data/exam_questions';
import { BookOpenCheck, ChevronDown, ChevronUp, Award } from 'lucide-react';

const ExamQuestionCard: React.FC<{ question: ExamQuestion }> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-lg transition-all">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 cursor-pointer flex items-start gap-3 hover:bg-white/5 transition-colors"
      >
        <div className="bg-duo-blue/20 text-duo-blue font-black px-3 py-1 rounded-lg shrink-0 text-sm">
          Q{question.id}
        </div>
        <div className="flex-grow">
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

const ExamQuestionsPage: React.FC = () => {
  const sections = ['A', 'B', 'C'] as const;

  return (
    <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5">
      <div className="flex items-center justify-center mb-6">
         <BookOpenCheck className="w-8 h-8 text-duo-blue mr-3" />
         <h1 className="text-2xl font-black text-white tracking-tight">Exam Prep</h1>
      </div>
      
      <p className="text-center text-slate-400 text-sm font-medium mb-8">
        Practice questions from "PHY4CJ204: Mechanics II" Open Book Assessment.
      </p>

      {sections.map(section => {
        const questions = EXAM_QUESTIONS.filter(q => q.section === section);
        if (questions.length === 0) return null;
        
        return (
          <div key={section} className="mb-10">
            <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
               <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-xl border border-slate-700">Section {section}</span>
            </h2>
            {questions.map(q => (
              <ExamQuestionCard key={q.id} question={q} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ExamQuestionsPage;