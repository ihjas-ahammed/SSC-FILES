import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Section } from '../types';

interface Props {
  nextSection: Section;
  onGoNext: () => void;
}

const NextSectionButton: React.FC<Props> = ({ nextSection, onGoNext }) => {
  return (
    <div className="mx-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="glass-panel rounded-3xl p-5 border border-white/10 text-center shadow-xl">
        <div className="flex justify-center mb-3">
          <Sparkles className="w-6 h-6 text-amber-400" />
        </div>
        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Section Complete!</p>
        <p className="text-white font-bold text-sm mb-4">Ready for the next section?</p>
        <button
          onClick={onGoNext}
          className={`w-full py-3 rounded-2xl font-black text-white uppercase tracking-widest text-sm border-b-4 transition-all active:border-b-0 active:translate-y-1 flex items-center justify-center gap-2 bg-${nextSection.color} border-b-[6px]`}
          style={{ borderBottomColor: 'rgba(0,0,0,0.3)' }}
        >
          {nextSection.title}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NextSectionButton;
