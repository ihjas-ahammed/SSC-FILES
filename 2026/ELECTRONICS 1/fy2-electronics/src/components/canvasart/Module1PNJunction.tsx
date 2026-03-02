import React from 'react';

export const renderModule1PNJunctionArt = (id: string) => {
  switch (id) {
    // --- 1.2.1 Formation ---
    case 'pn-formation-alloying':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-4">
            <div className="relative w-48 h-32 bg-gray-800 border border-gray-600 rounded flex flex-col items-center justify-end">
                <span className="text-xs text-gray-400 mb-2">n-type Germanium Slab</span>
                {/* Indium Button */}
                <div className="w-16 h-8 bg-purple-500/80 rounded-t-full absolute top-0 -translate-y-1/2 flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">In</span>
                </div>
                {/* Molten/Recrystallized Region */}
                <div className="w-16 h-12 bg-purple-900/50 absolute top-0 rounded-b-xl border-b border-purple-400 border-dashed flex items-center justify-center">
                   <span className="text-[8px] text-purple-200">p-region</span>
                </div>
            </div>
            <p className="text-[10px] text-slate-400">Alloying: Indium (Group 3) fused into n-Ge</p>
        </div>
      );

    // --- 1.2.2 Depletion ---
    case 'pn-diffusion-process':
      return (
         <div className="flex items-center justify-center w-full h-full p-2">
            <div className="flex w-full max-w-xs h-32 border-2 border-slate-600 rounded-lg overflow-hidden relative">
               {/* P Side */}
               <div className="flex-1 bg-red-900/20 flex flex-wrap content-start p-2 gap-1 relative">
                  <span className="absolute bottom-1 left-2 text-xs font-bold text-red-400">P-Type</span>
                  {[...Array(6)].map((_, i) => (
                      <div key={`h-${i}`} className="w-3 h-3 rounded-full border border-red-400 flex items-center justify-center text-[8px] animate-pulse">h+</div>
                  ))}
                   {/* Negative Ions */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-red-900/40 border-l border-dashed border-red-500/30 flex flex-col justify-center items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-slate-500 flex items-center justify-center text-[10px] text-slate-400">-</div>
                      <div className="w-4 h-4 rounded-full border border-slate-500 flex items-center justify-center text-[10px] text-slate-400">-</div>
                  </div>
               </div>
               
               {/* Junction Line */}
               <div className="w-0.5 h-full bg-white/50 z-10"></div>

               {/* N Side */}
               <div className="flex-1 bg-blue-900/20 flex flex-wrap content-start p-2 gap-1 relative">
                  <span className="absolute bottom-1 right-2 text-xs font-bold text-blue-400">N-Type</span>
                   {/* Positive Ions */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-blue-900/40 border-r border-dashed border-blue-500/30 flex flex-col justify-center items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-slate-500 flex items-center justify-center text-[10px] text-slate-400">+</div>
                      <div className="w-4 h-4 rounded-full border border-slate-500 flex items-center justify-center text-[10px] text-slate-400">+</div>
                  </div>
                  {[...Array(6)].map((_, i) => (
                      <div key={`e-${i}`} className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[8px] text-black absolute" style={{ right: `${Math.random()*40 + 10}px`, top: `${Math.random()*60 + 10}px` }}>e-</div>
                  ))}
               </div>
               
               {/* E-Field Arrow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-white/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-white font-bold">E-Field &rarr;</div>
               </div>
            </div>
         </div>
      );

    // --- 1.2.3 Biasing ---
    case 'pn-bias-forward':
        return (
            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
               <div className="flex w-48 h-20 border border-slate-500 rounded relative">
                   <div className="flex-1 bg-red-900/30 flex items-center justify-center text-xs">P</div>
                   <div className="w-4 bg-slate-800 border-x border-slate-600"></div> {/* Depletion - Narrow */}
                   <div className="flex-1 bg-blue-900/30 flex items-center justify-center text-xs">N</div>
               </div>
               {/* Battery */}
               <div className="flex items-center gap-2 w-48 px-4">
                  <div className="h-8 w-0.5 bg-slate-500"></div>
                  <div className="h-0.5 flex-grow bg-slate-500"></div>
                  <div className="flex flex-col items-center">
                      <div className="w-8 h-0.5 bg-white"></div> {/* Positive Plate */}
                      <div className="w-4 h-0.5 bg-white mt-1"></div> {/* Negative Plate */}
                      <span className="text-[8px] mt-1">V_fwd</span>
                  </div>
                  <div className="h-0.5 flex-grow bg-slate-500"></div>
                  <div className="h-8 w-0.5 bg-slate-500"></div>
               </div>
               <p className="text-[10px] text-green-400">Depletion Width Reduced</p>
            </div>
        );

    case 'pn-bias-reverse':
        return (
            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
               <div className="flex w-48 h-20 border border-slate-500 rounded relative">
                   <div className="flex-1 bg-red-900/30 flex items-center justify-center text-xs">P</div>
                   <div className="w-16 bg-slate-800 border-x border-slate-600"></div> {/* Depletion - Wide */}
                   <div className="flex-1 bg-blue-900/30 flex items-center justify-center text-xs">N</div>
               </div>
               {/* Battery Reversed */}
               <div className="flex items-center gap-2 w-48 px-4">
                  <div className="h-8 w-0.5 bg-slate-500"></div>
                  <div className="h-0.5 flex-grow bg-slate-500"></div>
                  <div className="flex flex-col items-center">
                      <div className="w-4 h-0.5 bg-white mb-1"></div> {/* Negative Plate */}
                      <div className="w-8 h-0.5 bg-white"></div> {/* Positive Plate */}
                      <span className="text-[8px] mt-1">V_rev</span>
                  </div>
                  <div className="h-0.5 flex-grow bg-slate-500"></div>
                  <div className="h-8 w-0.5 bg-slate-500"></div>
               </div>
               <p className="text-[10px] text-red-400">Depletion Width Increased</p>
            </div>
        );

    default:
      return null;
  }
};