import React, { useState, useEffect, useRef } from 'react';
import { Slide, InteractiveStep, QuizOption } from '../types';
import MathRenderer from './MathRenderer';
import { CheckCircle, XCircle, ArrowRight, BrainCircuit, Check } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
  onInteraction?: (correct: boolean) => void;
}

const InteractiveProofView: React.FC<Props> = ({ slide, onComplete, onInteraction }) => {
  const steps: InteractiveStep[] = slide.interactiveSteps || slide.proofSteps?.map(text => ({ stepText: text })) || [];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState<string[]>([]);
  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [currentStepIndex, revealedSteps, isSubmitted]);

  const currentStep = steps[currentStepIndex];
  const isFinished = currentStepIndex >= steps.length;

  const handleNextStatic = () => {
    if (currentStep?.stepText) {
      setRevealedSteps(prev => [...prev, currentStep.stepText!]);
    }
    setCurrentStepIndex(prev => prev + 1);
    resetInteraction();
  };

  const handleSelectOption = (id: string) => {
    if (isSubmitted) return;
    setSelectedOption(id);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    const correctOpt = currentStep.options?.find(o => o.isCorrect);
    const correct = correctOpt?.id === selectedOption;
    setIsSubmitted(true);
    setIsCorrect(correct);
    
    if (onInteraction) onInteraction(correct);
  };

  const handleNextInteractive = () => {
    const correctOpt = currentStep.options?.find(o => o.isCorrect);
    const textToReveal = currentStep.stepText || correctOpt?.text || '';
    setRevealedSteps(prev => [...prev, textToReveal]);
    setCurrentStepIndex(prev => prev + 1);
    resetInteraction();
  };

  const resetInteraction = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(false);
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
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-1 relative">
         <h2 className="text-2xl font-black text-white mb-5 leading-tight px-1">
           {slide.type === 'proof' ? 'Step-by-Step Proof' : 'Interactive Solution'}
         </h2>
         
         {slide.content && (
           <div className="mb-6 p-5 glass-panel rounded-2xl mx-1">
             <MathRenderer content={slide.content} className="text-slate-200 font-medium" />
           </div>
         )}

         <div className="space-y-4 mb-8 mx-1">
           {revealedSteps.map((step, idx) => (
             <div key={idx} className="flex items-start glass-panel p-4 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-500">
               <div className="mr-4 mt-1 font-black text-green-400 bg-green-900/30 w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-green-500/50">
                 <Check className="w-4 h-4" strokeWidth={3} />
               </div>
               <MathRenderer content={step} className="text-base font-semibold text-slate-200" />
             </div>
           ))}
         </div>

         {!isFinished && currentStep && (
           <div className="bg-blue-900/10 border border-blue-500/30 p-5 rounded-3xl relative animate-in zoom-in-95 duration-500 mx-1 mt-6 shadow-xl">
             <div className="absolute -top-5 left-4 bg-[#0b0f19] p-1.5 rounded-full text-blue-400 border border-blue-500/30">
               <BrainCircuit className="w-6 h-6" />
             </div>

             {currentStep.options ? (
               <div className="mt-2">
                 {currentStep.prompt && (
                   <div className="text-lg font-bold text-white mb-5 leading-snug">
                     <MathRenderer content={currentStep.prompt} />
                   </div>
                 )}
                 <div className="space-y-2">
                   {currentStep.options.map(opt => (
                     <button 
                       key={opt.id} 
                       onClick={() => handleSelectOption(opt.id)}
                       className={getOptionStyle(opt)}
                       disabled={isSubmitted}
                     >
                        <span className="flex-grow font-medium text-base">
                          <MathRenderer content={opt.text} />
                        </span>
                     </button>
                   ))}
                 </div>
               </div>
             ) : (
               <div className="mt-2">
                 <div className="text-lg font-bold text-white mb-2 leading-snug">
                   <MathRenderer content={currentStep.stepText || ''} />
                 </div>
               </div>
             )}
             
             <div ref={bottomRef} className="h-2" />
           </div>
         )}
      </div>

      <div className={`mt-4 border-t-2 pt-4 shrink-0 transition-colors duration-300 ${
          isSubmitted 
            ? (isCorrect ? 'border-green-500/50 bg-green-900/20 -mx-4 px-4 pb-4' : 'border-red-500/50 bg-red-900/20 -mx-4 px-4 pb-4') 
            : 'border-transparent'
        }`}>
        
        {isFinished ? (
          <div className="animate-in slide-in-from-bottom duration-300">
             <button
               onClick={onComplete}
               className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
             >
               Complete Proof
             </button>
          </div>
        ) : currentStep.options ? (
           !isSubmitted ? (
              <button
                onClick={checkAnswer}
                disabled={!selectedOption}
                className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
                  ${selectedOption 
                    ? 'bg-duo-blue border-duo-blue-dark hover:bg-blue-500 active:border-b-0 active:translate-y-1' 
                    : 'bg-gray-700 border-gray-800 text-gray-400 cursor-not-allowed'}`}
              >
                Check Step
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
                    {isCorrect ? 'Correct!' : 'Not quite right.'}
                  </h3>
                </div>
                
                <div className={`mb-4 ${isCorrect ? 'text-green-200' : 'text-red-200'} text-sm font-medium`}>
                  <MathRenderer content={currentStep.options.find(o => o.id === selectedOption)?.explanation || currentStep.options.find(o => o.isCorrect)?.explanation || ''} />
                </div>

                <button
                  onClick={isCorrect ? handleNextInteractive : resetInteraction}
                  className={`w-full py-3 rounded-xl font-bold text-white text-lg uppercase tracking-wide border-b-4 transition-all
                    ${isCorrect 
                      ? 'bg-duo-green border-duo-green-dark active:border-b-0 active:translate-y-1' 
                      : 'bg-duo-red border-duo-red-dark active:border-b-0 active:translate-y-1'}`}
                >
                  {isCorrect ? 'Continue' : 'Try Again'}
                </button>
              </div>
           )
        ) : (
           <button
              onClick={handleNextStatic}
              className="w-full bg-duo-blue border-duo-blue-dark border-b-4 hover:bg-blue-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md flex items-center justify-center"
           >
             Next Step <ArrowRight className="ml-2 w-5 h-5" />
           </button>
        )}
      </div>
    </div>
  );
};

export default InteractiveProofView;