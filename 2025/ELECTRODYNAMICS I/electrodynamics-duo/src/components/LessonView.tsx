import React, { useState } from 'react';
import { Lesson } from '../../types';
import MathRenderer from './MathRenderer';
import QuizView from './QuizView';
import MatchView from './MatchView';
import FillBlankView from './FillBlankView';
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
    switch (currentSlide.type) {
      case 'quiz':
        return <QuizView slide={currentSlide} onComplete={handleContinue} />;
      case 'match':
        return <MatchView slide={currentSlide} onComplete={handleContinue} />;
      case 'fill-blank':
        return <FillBlankView slide={currentSlide} onComplete={handleContinue} />;
      case 'proof':
        return (
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-2">
               <h2 className="text-2xl font-black text-slate-800 mb-5 leading-tight">{currentSlide.title}</h2>
               <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <MathRenderer content={currentSlide.content} className="text-slate-700 font-medium" />
               </div>
               
               <div className="space-y-5">
                 {currentSlide.proofSteps?.map((step, idx) => (
                   <div key={idx} className="flex items-start bg-blue-50/40 p-5 rounded-3xl border-2 border-blue-100/50 animate-in fade-in slide-in-from-bottom-2 duration-500 shadow-sm" style={{animationDelay: `${idx * 150}ms`}}>
                     <div className="mr-4 font-black text-duo-blue text-xl bg-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-blue-100">{idx + 1}</div>
                     <MathRenderer content={step} className="text-base font-semibold text-slate-700 mt-0.5" />
                   </div>
                 ))}
               </div>
            </div>
            <div className="pt-4 border-t border-gray-100 bg-white shrink-0">
              <button
                onClick={handleContinue}
                className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
      default: // Theory
        return (
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto no-scrollbar">
              <div className="flex flex-col items-center min-h-full py-4 px-2">
                
                {currentSlide.title && (
                  <h2 className="text-2xl font-black text-slate-800 mb-6 text-center leading-tight">{currentSlide.title}</h2>
                )}
                
                <div className="w-full text-left bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm mb-8">
                   <MathRenderer content={currentSlide.content} />
                </div>

                {currentSlide.image && (
                  <div className="mb-8 w-full max-w-[300px]">
                    <div className="bg-white rounded-3xl p-3 border-2 border-slate-100 shadow-sm">
                      {/* Check if SVG code or URL */}
                      {currentSlide.image.startsWith('<svg') ? (
                        <div dangerouslySetInnerHTML={{ __html: currentSlide.image }} className="w-full h-auto" />
                      ) : (
                        <img 
                          src={currentSlide.image} 
                          alt="Lesson Concept" 
                          className="rounded-2xl w-full h-auto object-contain bg-white"
                        />
                      )}
                    </div>
                  </div>
                )}
                
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 bg-white shrink-0">
              <button
                onClick={handleContinue}
                className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
              >
                Continue
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col max-w-md mx-auto h-full overflow-hidden">
      {/* Top Header Row */}
      <div className="h-16 flex items-center justify-between px-4 bg-white border-b border-gray-100 shrink-0 z-[10005] relative">
        <button 
          onClick={(e) => {
            e.preventDefault();
            onExit();
          }}
          type="button"
          className="w-12 h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-100 active:scale-90 transition-transform text-slate-400 z-[10010]"
          aria-label="Exit Lesson"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        <div className="flex-grow mx-4">
          <ProgressBar percentage={progress} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow relative overflow-hidden px-5 py-5 bg-white z-[10000]">
        {renderContent()}
      </div>
    </div>
  );
};

export default LessonView;