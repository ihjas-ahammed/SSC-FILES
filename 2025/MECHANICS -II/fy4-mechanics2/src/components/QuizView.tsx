import React, { useState } from 'react';
import { Slide, QuizOption } from '../types';
import MathRenderer from './MathRenderer';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
  onInteraction?: (correct: boolean) => void;
}

const QuizView: React.FC<Props> = ({ slide, onComplete, onInteraction }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (id: string) => {
    if (isSubmitted) return;
    setSelectedOption(id);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    
    const correctOption = slide.options?.find(o => o.isCorrect);
    const isAnswerCorrect = correctOption?.id === selectedOption;
    
    setIsSubmitted(true);
    setIsCorrect(isAnswerCorrect);
    
    if (onInteraction) onInteraction(isAnswerCorrect);
  };

  const getOptionStyle = (option: QuizOption) => {
    let base = "w-full p-4 mb-3 rounded-xl border-2 border-b-4 cursor-pointer transition-all flex items-center text-left ";
    
    if (isSubmitted) {
      if (option.isCorrect) {
        return base + "bg-green-900/40 border-green-500 text-green-300";
      }
      if (option.id === selectedOption && !option.isCorrect) {
        return base + "bg-red-900/40 border-red-500 text-red-300";
      }
      return base + "bg-white/5 border-white/10 text-slate-500 opacity-50";
    }

    if (selectedOption === option.id) {
      return base + "bg-blue-900/40 border-blue-500 text-blue-300";
    }
    
    return base + "glass-button text-slate-200";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-4 px-1">
        <h2 className="text-xl font-bold mb-4 text-white">Select the correct answer</h2>
        <div className="glass-panel p-5 rounded-2xl mb-6 shadow-sm">
          <MathRenderer content={slide.content} />
        </div>

        <div className="space-y-2">
          {slide.options?.map(option => (
            <button 
              key={option.id} 
              onClick={() => handleSelect(option.id)}
              className={getOptionStyle(option)}
              disabled={isSubmitted}
            >
               <span className="flex-grow font-medium text-lg">
                 <MathRenderer content={option.text} />
               </span>
            </button>
          ))}
        </div>
      </div>

      <div className={`mt-4 border-t-2 pt-4 shrink-0 ${isSubmitted ? (isCorrect ? 'border-green-500/50 bg-green-900/20 -mx-4 px-4 pb-4' : 'border-red-500/50 bg-red-900/20 -mx-4 px-4 pb-4') : 'border-transparent'}`}>
        {!isSubmitted ? (
          <button
            onClick={checkAnswer}
            disabled={!selectedOption}
            className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
              ${selectedOption 
                ? 'bg-duo-green border-duo-green-dark hover:bg-green-500 active:border-b-0 active:translate-y-1' 
                : 'bg-gray-700 border-gray-800 text-gray-400 cursor-not-allowed'}`}
          >
            Check
          </button>
        ) : (
          <div className="animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center mb-2">
              {isCorrect ? (
                <CheckCircle className="w-8 h-8 text-green-400 mr-2" />
              ) : (
                <XCircle className="w-8 h-8 text-red-400 mr-2" />
              )}
              <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'Excellent!' : 'Incorrect'}
              </h3>
            </div>
            
            <div className={`mb-4 ${isCorrect ? 'text-green-200' : 'text-red-200'} text-sm`}>
              <MathRenderer content={slide.options?.find(o => o.id === selectedOption)?.explanation || slide.options?.find(o => o.isCorrect)?.explanation || ''} />
            </div>

            <button
              onClick={onComplete}
              className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
                ${isCorrect 
                  ? 'bg-duo-green border-duo-green-dark' 
                  : 'bg-duo-red border-duo-red-dark'}`}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizView;