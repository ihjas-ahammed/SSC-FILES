import React from 'react';
import { Section } from '../types';
import { ChevronRight } from 'lucide-react';
import MiniProgressBar from './MiniProgressBar';
import { calculateSectionProgress } from '../utils/progressUtils';

interface Props {
  sections: Section[];
  activeSectionIndex: number;
  completedLessons: string[];
  onSelectSection: (index: number) => void;
  onClose: () => void;
  isOpen: boolean;
}

const SectionSelector: React.FC<Props> = ({ 
  sections, 
  activeSectionIndex, 
  completedLessons,
  onSelectSection, 
  onClose, 
  isOpen 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0b0f19]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex-grow" onClick={onClose} />
      
      <div className="glass-panel rounded-t-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-in slide-in-from-bottom duration-300 border-x-0 border-b-0 lg:max-w-3xl lg:mx-auto lg:rounded-3xl lg:mb-8 lg:border-x lg:border-b lg:border-white/5">
        <div className="p-4 border-b border-white/5 flex justify-center">
           <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
        </div>

        <div className="p-6 overflow-y-auto">
           <h2 className="text-2xl font-extrabold text-white text-center mb-8">Sections</h2>
           
           <div className="space-y-4">
             {sections.map((section, index) => {
               const isActive = index === activeSectionIndex;
               const progress = calculateSectionProgress(section, completedLessons);
               
               return (
                 <button
                   key={section.id}
                   onClick={() => { onSelectSection(index); onClose(); }}
                   className={`w-full text-left rounded-2xl border-b-4 transition-all relative overflow-hidden group
                     ${isActive 
                       ? `bg-${section.color}/20 border-${section.color}` 
                       : 'glass-button'
                     }
                   `}
                 >
                   <div className="p-6">
                     <div className="flex items-center mb-3">
                       <div className="flex-grow">
                         <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                           {section.title}
                         </h3>
                         <p className={`text-sm font-medium ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                           {section.description}
                         </p>
                       </div>
                       
                       <div className="ml-4">
                         {isActive ? (
                           <div className="bg-white/10 p-2 rounded-full">
                             <ChevronRight className="w-6 h-6 text-white" />
                           </div>
                         ) : (
                           <div className="bg-white/5 p-2 rounded-full">
                             <ChevronRight className="w-6 h-6 text-slate-500" />
                           </div>
                         )}
                       </div>
                     </div>

                     <div className="mt-2">
                        <MiniProgressBar percentage={progress} height="h-1.5" />
                     </div>
                   </div>
                 </button>
               );
             })}
           </div>
        </div>

        <div className="p-4 border-t border-white/5 bg-black/40">
           <button 
             onClick={onClose}
             className="w-full py-3 rounded-xl font-bold text-slate-400 uppercase tracking-wide hover:bg-white/5 transition-colors"
           >
             Close
           </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSelector;