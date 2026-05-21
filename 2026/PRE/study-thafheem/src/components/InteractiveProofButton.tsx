import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface Props {
  lessonTitle: string;
  lessonId: string;
  unitId: string;
  moduleId: string;
  onNavigate: (unitId: string, lessonId: string) => void;
}

const InteractiveProofButton: React.FC<Props> = ({ lessonTitle, lessonId, unitId, onNavigate }) => {
  return (
    <button
      onClick={() => onNavigate(unitId, lessonId)}
      className="w-full p-3 bg-blue-900/10 rounded-xl border border-blue-500/20 flex items-center gap-3 hover:bg-blue-900/30 hover:border-blue-500/40 transition-all active:scale-[0.98] cursor-pointer text-left group"
    >
      <BrainCircuit className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
      <div className="flex-grow">
        <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-0.5 group-hover:text-blue-300 transition-colors">Interactive Proof / Solution</p>
        <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Tap to open: "{lessonTitle}"</p>
      </div>
      <div className="shrink-0 bg-blue-500/20 rounded-lg px-2 py-1">
        <span className="text-[10px] font-black text-blue-400 uppercase tracking-wider">Open →</span>
      </div>
    </button>
  );
};

export default InteractiveProofButton;
