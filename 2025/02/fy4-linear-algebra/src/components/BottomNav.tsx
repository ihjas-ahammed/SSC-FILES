import React from 'react';
import { Map, BookCheck, FileText } from 'lucide-react';

interface Props {
  activeTab: 'path' | 'questions' | 'notes';
  onTabChange: (tab: 'path' | 'questions' | 'notes') => void;
}

const BottomNav: React.FC<Props> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-[#0b0f19] border-t border-white/10 flex justify-around p-2 z-50">
      <button 
        onClick={() => onTabChange('path')}
        className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'path' ? 'text-duo-blue' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <Map className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-black uppercase tracking-wider">Path</span>
      </button>

      <button 
        onClick={() => onTabChange('questions')}
        className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'questions' ? 'text-duo-blue' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <BookCheck className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-black uppercase tracking-wider">Questions</span>
      </button>

      <button 
        onClick={() => onTabChange('notes')}
        className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'notes' ? 'text-duo-blue' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <FileText className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-black uppercase tracking-wider">Notes</span>
      </button>
    </nav>
  );
};

export default BottomNav;