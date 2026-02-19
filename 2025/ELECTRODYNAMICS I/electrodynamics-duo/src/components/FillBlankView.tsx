import React, { useState, useEffect } from 'react';
import { Slide, BlankSegment } from '../types';
import MathRenderer from './MathRenderer';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const FillBlankView: React.FC<Props> = ({ slide, onComplete }) => {
  const [segments, setSegments] = useState<BlankSegment[]>([]);
  const [wordBank, setWordBank] = useState<{id: string, text: string, used: boolean}[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({}); // segmentId -> word
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (slide.segments && slide.wordBank) {
      setSegments(slide.segments);
      setWordBank(slide.wordBank.map((w, i) => ({ id: `w-${i}`, text: w, used: false })));
      setUserAnswers({});
      setIsSubmitted(false);
    }
  }, [slide]);

  const handleBankClick = (wordObj: {id: string, text: string, used: boolean}) => {
    if (isSubmitted || wordObj.used) return;

    // Find first empty blank
    const firstEmpty = segments.find(s => s.isBlank && !userAnswers[s.id]);
    if (firstEmpty) {
      setUserAnswers(prev => ({ ...prev, [firstEmpty.id]: wordObj.text }));
      setWordBank(prev => prev.map(w => w.id === wordObj.id ? { ...w, used: true } : w));
    }
  };

  const handleBlankClick = (segmentId: string) => {
    if (isSubmitted) return;
    const currentWord = userAnswers[segmentId];
    if (!currentWord) return;

    // Return word to bank
    setUserAnswers(prev => {
      const next = { ...prev };
      delete next[segmentId];
      return next;
    });
    
    // Find the bank item to enable
    setWordBank(prev => {
      // Find the first used word in the bank that matches the clicked word
      const index = prev.findIndex(w => w.text === currentWord && w.used);
      if (index === -1) return prev;
      const newBank = [...prev];
      newBank[index].used = false;
      return newBank;
    });
  };

  const checkAnswers = () => {
    const allFilled = segments.filter(s => s.isBlank).every(s => userAnswers[s.id]);
    if (!allFilled) return;

    const correct = segments.filter(s => s.isBlank).every(s => userAnswers[s.id] === s.correctValue);
    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-4 px-1">
        <h2 className="text-xl font-bold mb-4 text-slate-700">Complete the sentence</h2>
        <div className="mb-6">
          <MathRenderer content={slide.content} />
        </div>

        {/* Sentence Container */}
        <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm mb-8 leading-loose text-lg text-slate-700">
          {segments.map((seg) => {
            // Consistent key usage using segment IDs to prevent collision warnings
            if (!seg.isBlank) {
              return <span key={seg.id}><MathRenderer content={seg.text || ""} className="inline" /></span>;
            }

            const filledWord = userAnswers[seg.id];
            let statusClass = "border-slate-300 bg-slate-50";
            if (isSubmitted) {
              statusClass = filledWord === seg.correctValue 
                ? "border-green-500 bg-green-50 text-green-700" 
                : "border-red-500 bg-red-50 text-red-700";
            } else if (filledWord) {
              statusClass = "border-blue-400 bg-blue-50 text-blue-700";
            }

            return (
              <span 
                key={seg.id}
                onClick={() => handleBlankClick(seg.id)}
                className={`inline-block min-w-[80px] h-10 mx-1 px-3 py-1 border-b-2 rounded align-middle text-center cursor-pointer transition-colors ${statusClass}`}
              >
                {filledWord}
              </span>
            );
          })}
        </div>

        {/* Word Bank */}
        <div className="flex flex-wrap gap-3 justify-center">
          {wordBank.map(word => (
            <button
              key={word.id}
              onClick={() => handleBankClick(word)}
              disabled={word.used || isSubmitted}
              className={`px-4 py-2 rounded-xl border-2 font-medium transition-all
                ${word.used 
                  ? 'opacity-0 pointer-events-none' 
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 shadow-sm active:translate-y-1'}`}
            >
              {word.text}
            </button>
          ))}
        </div>
      </div>

      <div className={`mt-4 border-t-2 pt-4 shrink-0 ${isSubmitted ? (isCorrect ? 'border-green-200 bg-green-50 -mx-4 px-4 pb-4' : 'border-red-200 bg-red-50 -mx-4 px-4 pb-4') : 'border-transparent'}`}>
        {!isSubmitted ? (
          <button
            onClick={checkAnswers}
            disabled={segments.some(s => s.isBlank && !userAnswers[s.id])}
            className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
              ${!segments.some(s => s.isBlank && !userAnswers[s.id])
                ? 'bg-duo-green border-duo-green-dark hover:bg-green-500 active:border-b-0 active:translate-y-1' 
                : 'bg-gray-300 border-gray-400 cursor-not-allowed'}`}
          >
            Check
          </button>
        ) : (
          <div className="animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center mb-4">
              {isCorrect ? (
                <CheckCircle className="w-8 h-8 text-green-600 mr-2" />
              ) : (
                <XCircle className="w-8 h-8 text-red-600 mr-2" />
              )}
              <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </h3>
            </div>
            
            <button
              onClick={isCorrect ? onComplete : () => {
                setIsSubmitted(false);
                setUserAnswers({});
                setWordBank(prev => prev.map(w => ({ ...w, used: false })));
              }}
              className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
                ${isCorrect 
                  ? 'bg-duo-green border-duo-green-dark' 
                  : 'bg-duo-red border-duo-red-dark'}`}
            >
              {isCorrect ? 'Continue' : 'Try Again'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FillBlankView;