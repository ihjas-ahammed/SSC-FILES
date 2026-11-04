import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MODULES } from '../data/modules';
import MathRenderer from '../components/MathRenderer';
import { ArrowLeft } from 'lucide-react';

const ModuleSummaryPage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const module = MODULES.find(m => m.id === moduleId);

  if (!module || !module.moduleSummary) {
    return (
      <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center text-slate-400">
         <div className="text-center">
             <p className="mb-4">No summary found for this module.</p>
             <button onClick={() => navigate('/')} className="px-6 py-2 bg-duo-blue text-white font-bold rounded-xl">Go Back</button>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto pb-20 lg:pb-8 bg-[#0b0f19] border-x border-white/5 no-scrollbar">
      <header className="sticky top-0 glass-panel z-40 p-4 flex items-center gap-4 rounded-b-2xl border-t-0">
         <button 
            onClick={() => navigate(-1)} 
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
         >
           <ArrowLeft className="w-6 h-6 text-slate-200" />
         </button>
         <h1 className="font-black text-lg text-white line-clamp-1 flex-grow">
            Module Summary
         </h1>
      </header>
      
      <div className="p-5 space-y-8 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">{module.title}</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">The Big Picture</p>
         </div>

         {module.moduleSummary.map(slide => (
            <div key={slide.id} className="glass-panel p-6 rounded-3xl shadow-lg border-2 border-white/5">
               <h3 className="text-xl font-black mb-4 text-blue-400">{slide.title}</h3>
               <MathRenderer content={slide.content} className="text-slate-200 text-lg leading-relaxed font-medium" />
            </div>
         ))}

         <div className="pt-8 flex justify-center">
            <button 
               onClick={() => navigate('/')}
               className="bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 px-12 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
            >
               Return to Path
            </button>
         </div>
      </div>
    </div>
  );
};

export default ModuleSummaryPage;