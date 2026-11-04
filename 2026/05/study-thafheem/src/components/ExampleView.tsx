import React from 'react';
import { Slide } from '../types';
import MathRenderer from './MathRenderer';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const ExampleView: React.FC<Props> = ({ slide, onComplete }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-2 text-center">
         <h2 className="text-3xl font-black text-white mb-8 mt-4 tracking-tight">Try this!</h2>
         <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Worked Example</p>
         
         <div className="glass-panel p-6 rounded-3xl shadow-lg text-left">
           <MathRenderer content={slide.content} className="text-xl font-medium text-slate-100" />
         </div>
         
         <p className="mt-8 text-slate-400 italic">Grab a pen and try solving this before checking the solution on the next slide!</p>
      </div>
      
      <div className="pt-4 border-t border-white/10 shrink-0">
        <button
          onClick={onComplete}
          className="w-full bg-duo-blue border-duo-blue-dark border-b-4 hover:bg-blue-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          View Solution
        </button>
      </div>
    </div>
  );
};

export default ExampleView;