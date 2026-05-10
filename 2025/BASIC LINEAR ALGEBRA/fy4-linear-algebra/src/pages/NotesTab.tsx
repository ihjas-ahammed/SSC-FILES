import React from 'react';
import { FileText } from 'lucide-react';

const NotesTab: React.FC = () => {
  return (
    <div className="p-10 flex flex-col items-center text-center text-slate-500 mt-20 animate-in fade-in duration-300">
      <FileText className="w-16 h-16 text-slate-700 mb-4" />
      <h2 className="text-xl font-bold text-slate-300 mb-2">Reference Notes</h2>
      <p>Interactive notes and cheat sheets for this module will be available soon!</p>
    </div>
  );
};

export default NotesTab;