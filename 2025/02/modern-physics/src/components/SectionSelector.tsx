import React from 'react';
import { Section } from '../../types';
import { ChevronRight, CheckCircle, Lock } from 'lucide-react';

interface Props {
  sections: Section[];
  activeSectionIndex: number;
  onSelectSection: (index: number) => void;
  onClose: () => void;
  isOpen: boolean;
}

const SectionSelector: React.FC<Props> = ({ sections, activeSectionIndex, onSelectSection, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="flex-grow" 
        onClick={onClose} 
      />
      
      <div className="bg-white rounded-t-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-in slide-in-from-bottom duration-300">
        <div className="p-4 border-b border-gray-100 flex justify-center">
           <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        <div className="p-6 overflow-y-auto">
           <h2 className="text-2xl font-extrabold text-slate-700 text-center mb-8">Sections</h2>
           
           <div className="space-y-4">
             {sections.map((section, index) => {
               // Logic: Previous sections are "done", current is "active", future are "locked"
               // For this demo, let's assume all are unlocked to allow exploration
               const isActive = index === activeSectionIndex;
               
               return (
                 <button
                   key={section.id}
                   onClick={() => { onSelectSection(index); onClose(); }}
                   className={`w-full text-left rounded-2xl border-b-4 transition-all relative overflow-hidden group
                     ${isActive 
                       ? `bg-${section.color} border-${section.color}-dark` 
                       : 'bg-white border-gray-200 hover:bg-gray-50'
                     }
                   `}
                 >
                   <div className="p-6 flex items-center">
                     <div className="flex-grow">
                       <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                         {section.title}
                       </h3>
                       <p className={`text-sm font-medium ${isActive ? 'text-white/90' : 'text-slate-400'}`}>
                         {section.description}
                       </p>
                       
                       <div className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wider">
                          {isActive ? (
                            <span className="bg-white/20 text-white px-2 py-1 rounded">Current</span>
                          ) : (
                            <span className="text-duo-green flex items-center">
                              <CheckCircle className="w-4 h-4 mr-1" /> Available
                            </span>
                          )}
                       </div>
                     </div>
                     
                     <div className="ml-4">
                       {/* Icon representation can go here */}
                       {isActive ? (
                         <div className="bg-white/20 p-2 rounded-full">
                           <ChevronRight className="w-6 h-6 text-white" />
                         </div>
                       ) : (
                         // Placeholder for other states
                         <div className="bg-gray-100 p-2 rounded-full">
                           <ChevronRight className="w-6 h-6 text-gray-400" />
                         </div>
                       )}
                     </div>
                   </div>
                 </button>
               );
             })}
           </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50">
           <button 
             onClick={onClose}
             className="w-full py-3 rounded-xl font-bold text-slate-500 uppercase tracking-wide hover:bg-gray-200 transition-colors"
           >
             Close
           </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSelector;