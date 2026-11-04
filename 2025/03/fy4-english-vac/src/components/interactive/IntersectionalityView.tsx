import React, { useState } from 'react';
import { Layers } from 'lucide-react';

const IntersectionalityView: React.FC = () => {
  const [activeLayers, setActiveLayers] = useState({
    gender: false,
    disability: false,
    poverty: false,
    stigma: false,
  });

  const toggleLayer = (layer: keyof typeof activeLayers) => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const activeCount = Object.values(activeLayers).filter(Boolean).length;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 select-none touch-none-canvas bg-gradient-to-br from-slate-900 to-[#0b0f19]">
      
      <div className="relative w-48 h-48 mb-6 mt-4 flex items-center justify-center">
        {/* Base Circle: The Individual */}
        <div className="absolute w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center z-50 shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-500">
           <span className="text-slate-900 font-black text-[10px] uppercase tracking-widest text-center leading-tight px-2">
             The<br/>Individual
           </span>
        </div>

        {/* Layer 1: Gender Bias */}
        <div 
          className={`absolute w-32 h-32 rounded-full border-4 border-duo-pink/80 bg-duo-pink/20 transition-all duration-500 mix-blend-screen origin-top-left -translate-x-4 -translate-y-4
            ${activeLayers.gender ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />
        
        {/* Layer 2: Disability */}
        <div 
          className={`absolute w-32 h-32 rounded-full border-4 border-duo-blue/80 bg-duo-blue/20 transition-all duration-500 mix-blend-screen origin-top-right translate-x-4 -translate-y-4
            ${activeLayers.disability ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />

        {/* Layer 3: Poverty */}
        <div 
          className={`absolute w-32 h-32 rounded-full border-4 border-duo-green/80 bg-duo-green/20 transition-all duration-500 mix-blend-screen origin-bottom-left -translate-x-4 translate-y-4
            ${activeLayers.poverty ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />

        {/* Layer 4: Social Stigma */}
        <div 
          className={`absolute w-32 h-32 rounded-full border-4 border-duo-orange/80 bg-duo-orange/20 transition-all duration-500 mix-blend-screen origin-bottom-right translate-x-4 translate-y-4
            ${activeLayers.stigma ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />
      </div>

      {/* Controls */}
      <div className="w-full max-w-[280px] grid grid-cols-2 gap-2 z-30 relative">
        <div className="col-span-2 flex items-center justify-center gap-2 mb-2">
          <Layers className="w-4 h-4 text-slate-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
            Intersectionality Matrix
          </span>
        </div>
        
        <button 
          onClick={() => toggleLayer('gender')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border-b-4 ${activeLayers.gender ? 'bg-duo-pink border-duo-pink-dark text-white translate-y-1 border-b-0' : 'bg-slate-800 border-slate-900 text-slate-400'}`}
        >
          Gender Bias
        </button>
        <button 
          onClick={() => toggleLayer('disability')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border-b-4 ${activeLayers.disability ? 'bg-duo-blue border-duo-blue-dark text-white translate-y-1 border-b-0' : 'bg-slate-800 border-slate-900 text-slate-400'}`}
        >
          Disability
        </button>
        <button 
          onClick={() => toggleLayer('poverty')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border-b-4 ${activeLayers.poverty ? 'bg-duo-green border-duo-green-dark text-white translate-y-1 border-b-0' : 'bg-slate-800 border-slate-900 text-slate-400'}`}
        >
          Poverty
        </button>
        <button 
          onClick={() => toggleLayer('stigma')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border-b-4 ${activeLayers.stigma ? 'bg-duo-orange border-duo-orange-dark text-white translate-y-1 border-b-0' : 'bg-slate-800 border-slate-900 text-slate-400'}`}
        >
          Social Stigma
        </button>
      </div>

      <div className="mt-5 h-10 flex items-center justify-center text-center">
        <p className="text-[11px] font-medium text-slate-300 px-4">
          {activeCount === 0 && "Select barriers to see how they intersect."}
          {activeCount === 1 && "A single barrier creates significant challenges."}
          {activeCount === 2 && "Intersecting identities compound the discrimination."}
          {activeCount === 3 && "Multiple systemic barriers push individuals to the extreme margins."}
          {activeCount === 4 && "Profound marginalization: Needs targeted UN framework interventions."}
        </p>
      </div>
    </div>
  );
};

export default IntersectionalityView;