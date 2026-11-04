import React, { useState } from 'react';
import { Lesson, Slide } from '../types';
import MathRenderer from './MathRenderer';
import QuizView from './QuizView';
import FillInBlankView from './FillInBlankView';
import ExampleView from './ExampleView';
import InteractiveProofView from './InteractiveProofView';
import NumericalView from './NumericalView';
import CanvasArt from './CanvasArt';
import ProgressBar from './ProgressBar';
import { X } from 'lucide-react';

interface Props {
  lesson: Lesson;
  onFinishLesson: () => void;
  onExit: () => void;
}

const LessonView: React.FC<Props> = ({ lesson, onFinishLesson, onExit }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = lesson.slides[currentSlideIndex];
  
  const progress = ((currentSlideIndex) / lesson.slides.length) * 100;

  const handleContinue = () => {
    if (currentSlideIndex < lesson.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      onFinishLesson();
    }
  };

  const renderContent = () => {
    if (currentSlide.type === 'quiz') {
      return <QuizView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }
    
    if (currentSlide.type === 'fill_in_blank') {
      return <FillInBlankView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    if (currentSlide.type === 'example_q') {
      return <ExampleView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    if (currentSlide.type === 'numerical') {
      return <NumericalView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    if (currentSlide.type === 'proof' || currentSlide.type === 'solution') {
      return <InteractiveProofView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    // Default for 'theory', 'example'
    return (
      <div key={currentSlide.id} className="flex flex-col h-full animate-in slide-in-from-right-4 duration-300">
        <div className="flex-grow overflow-y-auto no-scrollbar">
          <div className="flex flex-col items-center min-h-full py-4 px-2">
            
            {currentSlide.title && (
              <h2 className="text-2xl font-black text-white mb-6 text-center leading-tight">{currentSlide.title}</h2>
            )}
            
            <div className="w-full text-left glass-panel p-6 rounded-3xl mb-8">
               <MathRenderer content={currentSlide.content} />
            </div>

            {currentSlide.canvasId && (
               <div className="mb-8 w-full">
                  <CanvasArt canvasId={currentSlide.canvasId} />
               </div>
            )}

            {currentSlide.image && !currentSlide.canvasId && (
              <div className="mb-8 w-full max-w-[300px]">
                <div className="glass-panel rounded-3xl p-3">
                  <img 
                    src={currentSlide.image} 
                    alt="Lesson Concept" 
                    className="rounded-2xl w-full h-auto object-contain bg-white/10"
                  />
                </div>
              </div>
            )}
            
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 shrink-0">
          <button
            onClick={handleContinue}
            className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
          >
            Continue
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-[#0b0f19] z-[9999] flex flex-col max-w-md mx-auto h-full overflow-hidden shadow-2xl">
      <div className="h-16 flex items-center justify-between px-4 glass-panel border-t-0 border-x-0 rounded-none shrink-0 z-[10005] relative">
        <button 
          onClick={(e) => { e.preventDefault(); onExit(); }}
          type="button"
          className="w-12 h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-white/10 active:scale-90 transition-transform text-slate-400 z-[10010]"
          aria-label="Exit Lesson"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        <div className="flex-grow mx-4">
          <ProgressBar percentage={progress} />
        </div>
      </div>

      <div className="flex-grow relative overflow-hidden px-5 py-5 z-[10000]">
        {renderContent()}
      </div>
    </div>
  );
};

export default LessonView;