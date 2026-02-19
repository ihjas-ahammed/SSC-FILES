import React, { useState, useEffect } from 'react';
import { Slide, MatchPair } from '../types';
import MathRenderer from './MathRenderer';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const MatchView: React.FC<Props> = ({ slide, onComplete }) => {
  const [pairs, setPairs] = useState<MatchPair[]>([]);
  const [leftItems, setLeftItems] = useState<{id: string, content: string, matchedId?: string}[]>([]);
  const [rightItems, setRightItems] = useState<{id: string, content: string, matchedId?: string}[]>([]);
  
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({}); // leftId -> rightId
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (slide.pairs) {
      setPairs(slide.pairs);
      
      const lefts = slide.pairs.map(p => ({ id: p.id, content: p.left }));
      // Shuffle rights
      const rights = [...slide.pairs]
        .sort(() => Math.random() - 0.5)
        .map(p => ({ id: p.id, content: p.right })); // Keep original ID for validation
      
      setLeftItems(lefts);
      setRightItems(rights);
      setMatches({});
      setSelectedLeft(null);
      setIsSubmitted(false);
    }
  }, [slide]);

  const handleLeftClick = (id: string) => {
    if (isSubmitted || matches[id]) return;
    setSelectedLeft(id);
  };

  const handleRightClick = (targetId: string) => {
    if (isSubmitted || !selectedLeft) return;
    
    // Check if right item is already matched
    const isAlreadyMatched = Object.values(matches).includes(targetId);
    if (isAlreadyMatched) return;

    setMatches(prev => ({ ...prev, [selectedLeft]: targetId }));
    setSelectedLeft(null);
  };

  const handleReset = (leftId: string) => {
    if (isSubmitted) return;
    const newMatches = { ...matches };
    delete newMatches[leftId];
    setMatches(newMatches);
  };

  const checkAnswers = () => {
    const allMatched = leftItems.every(l => matches[l.id]);
    if (!allMatched) return;

    const correct = leftItems.every(l => matches[l.id] === l.id);
    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-4 px-1">
        <h2 className="text-xl font-bold mb-4 text-slate-700">Match the following</h2>
        <div className="mb-6">
          <MathRenderer content={slide.content} />
        </div>

        <div className="flex gap-4">
          {/* Left Column */}
          <div className="flex-1 space-y-3">
            {leftItems.map(item => {
              const isMatched = !!matches[item.id];
              const isSelected = selectedLeft === item.id;
              
              let borderClass = "border-slate-200";
              let bgClass = "bg-white";
              
              if (isSubmitted) {
                const matchedRightId = matches[item.id];
                if (matchedRightId === item.id) {
                  borderClass = "border-green-500 bg-green-50";
                } else {
                  borderClass = "border-red-500 bg-red-50";
                }
              } else if (isSelected) {
                borderClass = "border-blue-500 bg-blue-50";
              } else if (isMatched) {
                borderClass = "border-slate-400 bg-slate-100";
              }

              return (
                <div 
                  key={item.id}
                  onClick={() => isMatched ? handleReset(item.id) : handleLeftClick(item.id)}
                  className={`p-3 rounded-xl border-2 cursor-pointer transition-all min-h-[60px] flex items-center ${borderClass} ${bgClass}`}
                >
                  <MathRenderer content={item.content} className="text-sm font-medium" />
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-3">
            {rightItems.map(item => {
              // Find which left item matched this right item
              const matchedLeftId = Object.keys(matches).find(key => matches[key] === item.id);
              const isMatched = !!matchedLeftId;
              
              let borderClass = "border-slate-200";
              let bgClass = "bg-white";

              if (isSubmitted) {
                if (matchedLeftId === item.id) {
                  borderClass = "border-green-500 bg-green-50";
                } else if (matchedLeftId) {
                  borderClass = "border-red-500 bg-red-50";
                }
              } else if (isMatched) {
                borderClass = "border-slate-400 bg-slate-100";
              }

              return (
                <div 
                  key={item.id}
                  onClick={() => handleRightClick(item.id)}
                  className={`p-3 rounded-xl border-2 cursor-pointer transition-all min-h-[60px] flex items-center ${borderClass} ${bgClass}`}
                >
                  <MathRenderer content={item.content} className="text-sm font-medium" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`mt-4 border-t-2 pt-4 shrink-0 ${isSubmitted ? (isCorrect ? 'border-green-200 bg-green-50 -mx-4 px-4 pb-4' : 'border-red-200 bg-red-50 -mx-4 px-4 pb-4') : 'border-transparent'}`}>
        {!isSubmitted ? (
          <button
            onClick={checkAnswers}
            disabled={Object.keys(matches).length !== leftItems.length}
            className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
              ${Object.keys(matches).length === leftItems.length
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
                {isCorrect ? 'Perfect Match!' : 'Not quite right'}
              </h3>
            </div>
            
            <button
              onClick={isCorrect ? onComplete : () => {
                setIsSubmitted(false);
                setMatches({});
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

export default MatchView;