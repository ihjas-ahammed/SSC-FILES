import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Module } from '../types';

interface Props {
  nextModule: Module;
  onGoNext: () => void;
}

const NextModuleButton: React.FC<Props> = ({ nextModule, onGoNext }) => {
  return (
    <div className="mt-12 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="glass-panel rounded-3xl p-6 border border-white/10 text-center shadow-xl">
        <div className="flex justify-center mb-3">
          <BookOpen className="w-7 h-7 text-duo-blue" />
        </div>
        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Next Module</p>
        <h3 className="text-white font-black text-lg mb-1">{nextModule.title}</h3>
        <p className="text-slate-400 text-xs font-medium mb-5">{nextModule.description}</p>
        <button
          onClick={onGoNext}
          className="w-full py-3.5 rounded-2xl font-black text-white uppercase tracking-widest text-sm border-b-4 border-duo-blue-dark bg-duo-blue transition-all active:border-b-0 active:translate-y-1 flex items-center justify-center gap-2 hover:bg-blue-500"
        >
          Switch to Module
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NextModuleButton;
