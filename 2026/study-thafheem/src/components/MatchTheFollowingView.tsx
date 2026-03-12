import React, { useState, useEffect } from 'react';
import { Slide, MatchPair } from '../types';
import MathRenderer from './MathRenderer';

interface Props {
  slide: Slide;
  onComplete: () => void;
  onInteraction?: (correct: boolean) => void;
}

const MatchTheFollowingView: React.FC<Props> = ({ slide, onComplete, onInteraction }) => {
  const pairs = slide.matchPairs || [];
  
  const [leftItems, setLeftItems] = useState<MatchPair[]>([]);
  const[rightItems, setRightItems] = useState<MatchPair[]>([]);
  
  const[selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [errorPair, setErrorPair] = useState<{left: string, right: string} | null>(null);

  // Initialize and shuffle right column
  useEffect(() => {
    setLeftItems([...pairs]);
    const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);
    setRightItems(shuffledRight);
  }, [pairs]);

  // Check for match when both are selected
  useEffect(() => {
    if (selectedLeft && selectedRight) {
      if (selectedLeft === selectedRight) {
        // Match!
        setMatchedIds(prev => [...prev, selectedLeft]);
        setSelectedLeft(null);
        setSelectedRight(null);
        if (onInteraction) onInteraction(true);
      } else {
        // Mismatch!
        setErrorPair({ left: selectedLeft, right: selectedRight });
        if (onInteraction) onInteraction(false);
        
        setTimeout(() => {
          setErrorPair(null);
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 800);
      }
    }
  },[selectedLeft, selectedRight, onInteraction]);

  const isComplete = matchedIds.length === pairs.length && pairs.length > 0;

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-1">
        <h2 className="text-xl font-bold mb-2 text-white text-center">Match the Meaning</h2>
        <p className="text-xs font-medium text-slate-400 text-center mb-6">Tap an Arabic word, then tap its English meaning.</p>

        <div className="flex justify-between gap-4">
          
          {/* Left Column (Arabic) */}
          <div className="flex-1 space-y-3">
            {leftItems.map(item => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedLeft === item.id;
              const isError = errorPair?.left === item.id;

              let btnClass = "w-full p-4 rounded-xl border-2 transition-all text-center arabic-text text-2xl font-bold ";
              
              if (isMatched) {
                btnClass += "bg-green-900/40 border-green-500/50 text-green-400 opacity-50 cursor-default";
              } else if (isError) {
                btnClass += "bg-red-900/50 border-red-500 text-white animate-shake";
              } else if (isSelected) {
                btnClass += "bg-duo-blue border-duo-blue-dark text-white border-b-4 translate-y-[-2px]";
              } else {
                btnClass += "glass-button text-slate-200";
              }

              return (
                <button
                  key={`l-${item.id}`}
                  disabled={isMatched || errorPair !== null}
                  onClick={() => setSelectedLeft(isSelected ? null : item.id)}
                  className={btnClass}
                  dir="rtl"
                >
                  {item.left}
                </button>
              );
            })}
          </div>

          {/* Right Column (English) */}
          <div className="flex-1 space-y-3">
            {rightItems.map(item => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedRight === item.id;
              const isError = errorPair?.right === item.id;

              let btnClass = "w-full p-4 rounded-xl border-2 transition-all text-center text-sm font-bold flex items-center justify-center min-h-[72px] ";
              
              if (isMatched) {
                btnClass += "bg-green-900/40 border-green-500/50 text-green-400 opacity-50 cursor-default";
              } else if (isError) {
                btnClass += "bg-red-900/50 border-red-500 text-white animate-shake";
              } else if (isSelected) {
                btnClass += "bg-duo-blue border-duo-blue-dark text-white border-b-4 translate-y-[-2px]";
              } else {
                btnClass += "glass-button text-slate-200";
              }

              return (
                <button
                  key={`r-${item.id}`}
                  disabled={isMatched || errorPair !== null}
                  onClick={() => setSelectedRight(isSelected ? null : item.id)}
                  className={btnClass}
                >
                  <MathRenderer content={item.right} />
                </button>
              );
            })}
          </div>

        </div>
      </div>
      
      <div className={`pt-4 border-t-2 shrink-0 transition-colors duration-300 ${isComplete ? 'border-green-500/50 bg-green-900/20 -mx-4 px-4 pb-4' : 'border-transparent'}`}>
         {isComplete ? (
           <div className="animate-in slide-in-from-bottom duration-300">
             <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Perfect Match!</h3>
             <button
               onClick={onComplete}
               className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
             >
               Continue
             </button>
           </div>
         ) : (
           <button
             disabled
             className="w-full bg-gray-700 border-gray-800 text-gray-500 border-b-4 font-black py-4 rounded-2xl uppercase tracking-widest cursor-not-allowed"
           >
             Match all to continue
           </button>
         )}
      </div>
    </div>
  );
};

export default MatchTheFollowingView;