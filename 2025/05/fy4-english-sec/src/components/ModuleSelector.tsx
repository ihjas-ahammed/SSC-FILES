import React from 'react';
import { Module } from '../types';
import { Book, Check } from 'lucide-react';
import MiniProgressBar from './MiniProgressBar';
import { calculateModuleProgress } from '../utils/progressUtils';

interface Props {
  modules: Module[];
  activeModuleId: string;
  completedLessons: string[];
  onSelectModule: (moduleId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const ModuleSelector: React.FC<Props> = ({ 
  modules, 
  activeModuleId, 
  completedLessons,
  onSelectModule, 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0b0f19]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex-grow" onClick={onClose} />
      
      <div className="glass-panel absolute top-16 left-4 right-4 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300 max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        <div className="p-4 border-b border-white/5 bg-black/20">
           <h2 className="text-lg font-extrabold text-white uppercase tracking-wide">Select Module</h2>
        </div>

        <div className="p-2 max-h-[60vh] overflow-y-auto">
           <div className="space-y-2">
             {modules.map((mod) => {
               const isActive = mod.id === activeModuleId;
               const progress = calculateModuleProgress(mod, completedLessons);
               
               return (
                 <button
                   key={mod.id}
                   onClick={() => { onSelectModule(mod.id); onClose(); }}
                   className={`w-full text-left rounded-xl border-2 transition-all relative overflow-hidden group p-4 flex items-center
                     ${isActive 
                       ? 'bg-blue-900/30 border-blue-500' 
                       : 'bg-white/5 border-transparent hover:bg-white/10'
                     }
                   `}
                 >
                   <div className={`p-3 rounded-xl mr-4 shrink-0 ${isActive ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <Book className="w-6 h-6" />
                   </div>

                   <div className="flex-grow min-w-0">
                       <div className="flex items-center justify-between">
                          <h3 className={`font-bold text-base truncate pr-2 ${isActive ? 'text-blue-400' : 'text-slate-200'}`}>
                            {mod.title}
                          </h3>
                          {isActive && <Check className="w-5 h-5 text-blue-400 shrink-0" strokeWidth={3} />}
                       </div>
                       
                       <p className="text-xs font-medium text-slate-500 mt-0.5 line-clamp-1 mb-2">
                         {mod.description}
                       </p>
                       
                       <div className="w-full pr-2">
                          <MiniProgressBar percentage={progress} height="h-1" showText={false} />
                       </div>
                   </div>
                 </button>
               );
             })}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleSelector;