import React, { useState } from 'react';
import { Slide } from '../types';
import MathRenderer from './MathRenderer';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const NumericalView: React.FC<Props> = ({ slide, onComplete }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    if (!inputValue.trim()) return;
    
    const numericInput = parseFloat(inputValue);
    const target = slide.numericAnswer ?? 0;
    const tolerance = slide.numericTolerance ?? 0.01;
    
    const correct = !isNaN(numericInput) && Math.abs(numericInput - target) <= tolerance;
    
    setIsSubmitted(true);
    setIsCorrect(correct);
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-4 px-1">
        <h2 className="text-xl font-bold mb-4 text-white">Solve the numerical problem</h2>
        
        <div className="glass-panel p-5 rounded-2xl mb-6 shadow-sm">
          <MathRenderer content={slide.content} className="text-slate-200 font-medium" />
        </div>

        <div className="mt-8 flex flex-col items-center">
            <label className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-3">Your Answer:</label>
            <input
                type="number"
                step="any"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isSubmitted}
                placeholder="Enter a number..."
                className={`text-center w-full max-w-[250px] p-4 text-2xl font-black rounded-2xl bg-black/40 border-2 outline-none transition-all
                  ${isSubmitted 
                    ? (isCorrect ? 'text-green-400 border-green-500/50' : 'text-red-400 border-red-500/50')
                    : 'text-amber-300 border-white/10 focus:border-amber-500/50'}`}
            />
        </div>
      </div>

      <div className={`mt-4 border-t-2 pt-4 shrink-0 transition-colors duration-300 ${isSubmitted ? (isCorrect ? 'border-green-500/50 bg-green-900/20 -mx-4 px-4 pb-4' : 'border-red-500/50 bg-red-900/20 -mx-4 px-4 pb-4') : 'border-transparent'}`}>
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
                {isCorrect ? 'Outstanding!' : `Incorrect. The correct answer is ${slide.numericAnswer}`}
              </h3>
            </div>
            
            <button
              onClick={isCorrect ? onComplete : () => { setIsSubmitted(false); setInputValue(''); }}
              className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all mt-4
                ${isCorrect 
                  ? 'bg-duo-green border-duo-green-dark active:border-b-0 active:translate-y-1' 
                  : 'bg-duo-red border-duo-red-dark active:border-b-0 active:translate-y-1'}`}
            >
              {isCorrect ? 'Continue' : 'Try Again'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumericalView;