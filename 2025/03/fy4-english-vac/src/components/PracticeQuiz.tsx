import React, { useState } from 'react';
import { PracticeQuestion } from '../types';
import MathRenderer from './MathRenderer';
import { X, CheckCircle, XCircle } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface Props {
  questions: PracticeQuestion[];
  onFinish: (score: number) => void;
  onExit: () => void;
}

const PracticeQuiz: React.FC<Props> = ({ questions, onFinish, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleSelect = (id: string) => {
    if (isSubmitted) return;
    setSelectedOptionId(id);
  };

  const checkAnswer = () => {
    if (!selectedOptionId) return;
    const isCorrect = question.options.find(o => o.id === selectedOptionId)?.isCorrect;
    if (isCorrect) setScore(prev => prev + 1);
    setIsSubmitted(true);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsSubmitted(false);
    } else {
      onFinish(score + (question.options.find(o => o.id === selectedOptionId)?.isCorrect ? 1 : 0));
    }
  };

  return (
    <div className="fixed inset-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-[#0b0f19] z-[9999] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 glass-panel border-t-0 border-x-0 rounded-none shrink-0 z-10">
        <button onClick={onExit} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-90 transition-transform text-slate-400">
          <X className="w-6 h-6 stroke-[3]" />
        </button>
        <div className="flex-grow mx-4">
          <ProgressBar percentage={progress} color="bg-duo-blue" />
        </div>
        <div className="font-black text-slate-400 text-sm">
          {currentIndex + 1} / {questions.length}
        </div>
      </div>

      {/* Body */}
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-4 pt-6 flex flex-col relative">
        <span className="text-xs font-black uppercase tracking-widest text-duo-blue mb-2">
          Concept: {question.conceptTag}
        </span>
        <h2 className="text-xl font-bold text-white mb-6 leading-relaxed">
          <MathRenderer content={question.question} />
        </h2>

        <div className="space-y-3 flex-grow">
          {question.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const isCorrectOption = opt.isCorrect;
            
            let btnClass = "w-full p-4 rounded-xl border-2 text-left font-medium text-lg practice-option ";
            
            if (!isSubmitted) {
              btnClass += isSelected 
                ? "selected text-white" 
                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10";
            } else {
              if (isCorrectOption) btnClass += "correct ";
              else if (isSelected) btnClass += "incorrect ";
              else btnClass += "bg-white/5 border-white/10 text-slate-500 opacity-50 ";
            }

            return (
              <button 
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={isSubmitted}
                className={btnClass}
              >
                <MathRenderer content={opt.text} />
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className="mt-6 p-4 rounded-xl explanation-box bg-slate-800/80 border border-slate-700">
            <div className="flex items-center mb-2">
              {question.options.find(o => o.id === selectedOptionId)?.isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400 mr-2" />
              )}
              <span className="font-bold text-white">
                {question.options.find(o => o.id === selectedOptionId)?.isCorrect ? 'Correct!' : 'Not quite.'}
              </span>
            </div>
            <p className="text-sm text-slate-300">
              <MathRenderer content={question.options.find(o => o.isCorrect)?.explanation || ''} />
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={`pt-4 pb-6 px-4 border-t-2 shrink-0 transition-colors ${
          isSubmitted 
            ? (question.options.find(o => o.id === selectedOptionId)?.isCorrect ? 'border-green-500/50 bg-green-900/20' : 'border-red-500/50 bg-red-900/20') 
            : 'border-transparent'
        }`}>
        {!isSubmitted ? (
          <button
            onClick={checkAnswer}
            disabled={!selectedOptionId}
            className={`w-full py-4 rounded-2xl font-black text-white uppercase tracking-widest border-b-4 transition-all
              ${selectedOptionId 
                ? 'bg-duo-blue border-duo-blue-dark hover:bg-blue-500 active:border-b-0 active:translate-y-1 shadow-md' 
                : 'bg-gray-700 border-gray-800 text-gray-500 cursor-not-allowed'}`}
          >
            Check
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className={`w-full py-4 rounded-2xl font-black text-white uppercase tracking-widest border-b-4 transition-all active:border-b-0 active:translate-y-1 shadow-md
              ${question.options.find(o => o.id === selectedOptionId)?.isCorrect 
                ? 'bg-duo-green border-duo-green-dark hover:bg-green-500' 
                : 'bg-duo-red border-duo-red-dark hover:bg-red-500'}`}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default PracticeQuiz;