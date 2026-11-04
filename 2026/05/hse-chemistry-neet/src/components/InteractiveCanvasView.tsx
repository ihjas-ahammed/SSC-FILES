import React from 'react';
import { Slide } from '../types';
import MathRenderer from './MathRenderer';
import InteractiveCanvasArt from './InteractiveCanvasArt';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const InteractiveCanvasView: React.FC<Props> = ({ slide, onComplete }) => {
  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-4 duration-300">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-1 flex flex-col items-center">
         <h2 className="text-2xl font-black text-white mb-2 mt-2 tracking-tight text-center">
           {slide.title || 'Interactive Exploration'}
         </h2>
         <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-6 text-center">Touch and Drag Below</p>
         
         {slide.interactiveCanvasId && (
            <div className="w-full mb-8">
               <InteractiveCanvasArt canvasId={slide.interactiveCanvasId} />
            </div>
         )}
         
         <div className="glass-panel p-5 rounded-3xl shadow-lg w-full">
           <MathRenderer content={slide.content} className="text-lg font-medium text-slate-200" />
         </div>
      </div>
      
      <div className="pt-4 border-t border-white/10 shrink-0">
        <button
          onClick={onComplete}
          className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default InteractiveCanvasView;