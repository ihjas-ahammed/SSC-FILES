import React, { useState } from 'react';
import { Slide } from '../types';
import MathRenderer from './MathRenderer';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const FillInBlankView: React.FC<Props> = ({ slide, onComplete }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    if (!inputValue.trim()) return;
    
    // Simple case-insensitive match for demo
    const correct = slide.blankAnswer?.toLowerCase().trim() === inputValue.toLowerCase().trim();
    
    setIsSubmitted(true);
    setIsCorrect(correct);
  };

  // Splitting content assuming ___ is the blank
  const parts = slide.content.split('___');

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-4 px-1">
        <h2 className="text-xl font-bold mb-6 text-white">Fill in the blank</h2>
        
        <div className="glass-panel p-6 rounded-2xl mb-6 shadow-sm text-lg leading-loose text-slate-200">
           {parts.map((part, index) => (
             <React.Fragment key={index}>
                <MathRenderer content={part} className="inline" />
                {index < parts.length - 1 && (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isSubmitted}
                    className={`inline-block mx-2 border-b-2 bg-transparent text-center font-bold outline-none w-32 transition-colors
                      ${isSubmitted 
                        ? (isCorrect ? 'text-green-400 border-green-500' : 'text-red-400 border-red-500')
                        : 'text-amber-300 border-amber-500/50 focus:border-amber-400'}`}
                  />
                )}
             </React.Fragment>
           ))}
        </div>
      </div>

      <div className={`mt-4 border-t-2 pt-4 shrink-0 ${isSubmitted ? (isCorrect ? 'border-green-500/50 bg-green-900/20 -mx-4 px-4 pb-4' : 'border-red-500/50 bg-red-900/20 -mx-4 px-4 pb-4') : 'border-transparent'}`}>
        {!isSubmitted ? (
          <button
            onClick={checkAnswer}
            disabled={!inputValue.trim()}
            className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
              ${inputValue.trim() 
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
                {isCorrect ? 'Correct!' : `Incorrect. Answer: ${slide.blankAnswer}`}
              </h3>
            </div>
            
            <button
              onClick={onComplete}
              className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all mt-4
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

export default FillInBlankView;