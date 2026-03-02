import React from 'react';

export const renderModule1ElecArt = (id: string) => {
  switch (id) {
    // --- 1.1.1 Materials ---
    case 'semi-resistivity-chart':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
           <div className="flex items-end gap-4 h-32 border-b border-white/20 w-full max-w-xs relative">
              {/* Copper */}
              <div className="w-16 bg-blue-500/50 rounded-t flex items-center justify-center text-[10px] text-white hover:bg-blue-500 transition-all h-[10%] group relative">
                 Cu
                 <span className="absolute -top-6 bg-black p-1 rounded text-[8px] hidden group-hover:block">10^-8</span>
              </div>
              {/* Germanium */}
              <div className="w-16 bg-green-500/50 rounded-t flex items-center justify-center text-[10px] text-white hover:bg-green-500 transition-all h-[40%] group relative">
                 Ge
                 <span className="absolute -top-6 bg-black p-1 rounded text-[8px] hidden group-hover:block">0.6</span>
              </div>
              {/* Glass */}
              <div className="w-16 bg-red-500/50 rounded-t flex items-center justify-center text-[10px] text-white hover:bg-red-500 transition-all h-[90%] group relative">
                 Glass
                 <span className="absolute -top-6 bg-black p-1 rounded text-[8px] hidden group-hover:block">10^11</span>
              </div>
           </div>
           <p className="text-xs mt-2 text-slate-400">Logarithmic Scale of Resistivity</p>
        </div>
      );
      
    case 'semi-material-sorter':
      return (
         <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <div className="grid grid-cols-3 gap-2 w-full px-4 text-center">
               <div className="border border-blue-500/30 p-2 rounded bg-blue-900/10">
                  <div className="text-[10px] text-blue-300">Conductor</div>
                  <div className="text-lg">Cu</div>
               </div>
               <div className="border border-green-500/30 p-2 rounded bg-green-900/10">
                  <div className="text-[10px] text-green-300">Semi</div>
                  <div className="text-lg">Si</div>
               </div>
               <div className="border border-red-500/30 p-2 rounded bg-red-900/10">
                  <div className="text-[10px] text-red-300">Insulator</div>
                  <div className="text-lg">Glass</div>
               </div>
            </div>
         </div>
      );

    case 'semi-temp-coeff':
      return (
        <div className="flex items-center justify-center w-full h-full relative p-4">
           {/* Copper Curve */}
           <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
              <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="50" x2="10" y2="10" stroke="white" strokeWidth="0.5" />
              <text x="90" y="55" className="text-[4px] fill-slate-400">Temp</text>
              <text x="5" y="10" className="text-[4px] fill-slate-400">R</text>
              
              {/* Copper - PTC */}
              <path d="M 10 40 L 90 10" stroke="#3b82f6" fill="none" strokeWidth="1" />
              <text x="80" y="15" className="text-[4px] fill-blue-400">Metal (PTC)</text>
              
              {/* Silicon - NTC */}
              <path d="M 10 10 Q 40 40 90 45" stroke="#22c55e" fill="none" strokeWidth="1" />
              <text x="80" y="40" className="text-[4px] fill-green-400">Semi (NTC)</text>
           </svg>
        </div>
      );

    // --- 1.1.2 Bonding ---
    case 'semi-atomic-structure':
      return (
         <div className="flex items-center justify-center w-full h-full">
            <div className="relative w-32 h-32 flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow"></div>
               <div className="absolute w-24 h-24 rounded-full border border-white/20"></div>
               <div className="absolute w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold z-10">Ge</div>
               
               {/* 4 Valence Electrons */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_5px_cyan]"></div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_5px_cyan]"></div>
               <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_5px_cyan]"></div>
               <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_5px_cyan]"></div>
            </div>
         </div>
      );

    case 'semi-covalent-bonding':
      return (
         <div className="grid grid-cols-3 gap-1 p-4 w-full h-full place-items-center">
            {[...Array(5)].map((_, i) => (
               <div key={i} className={`relative w-12 h-12 flex items-center justify-center ${i===4 ? 'opacity-0' : ''}`}>
                  <div className="w-8 h-8 rounded-full border-2 border-slate-500 flex items-center justify-center text-[10px]">Ge</div>
                  {/* Bonds */}
                  <div className="absolute -right-3 w-4 h-1 bg-white/20"></div>
                  <div className="absolute -bottom-3 w-1 h-4 bg-white/20"></div>
                  <div className="absolute top-1 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-1 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
               </div>
            ))}
            <div className="col-start-2 row-start-2 relative w-16 h-16 flex items-center justify-center">
               <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center z-10 border-2 border-white">Ge</div>
               {/* Shared pairs */}
               <div className="absolute top-0 w-1.5 h-3 bg-blue-400 rounded-full animate-pulse"></div>
               <div className="absolute bottom-0 w-1.5 h-3 bg-blue-400 rounded-full animate-pulse"></div>
               <div className="absolute left-0 w-3 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
               <div className="absolute right-0 w-3 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
         </div>
      );
    
    case 'semi-crystal-lattice':
      return (
         <div className="flex items-center justify-center w-full h-full">
            <div className="relative w-32 h-32 border border-white/10 [transform-style:preserve-3d] animate-spin-slow">
               {/* Simplified lattice nodes */}
               <div className="absolute top-2 left-2 w-2 h-2 bg-green-500 rounded-full"></div>
               <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-500 rounded-full"></div>
               <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
               <svg className="absolute inset-0 w-full h-full">
                  <line x1="10" y1="10" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                  <line x1="90" y1="90" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
               </svg>
            </div>
            <p className="absolute bottom-2 text-[10px] text-slate-400">Diamond Cubic Structure</p>
         </div>
      );

    // --- 1.1.3 Carriers ---
    case 'semi-hole-movement':
      return (
         <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <div className="flex gap-2">
               {/* Electron jumps left */}
               <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full absolute animate-ping"></div>
               </div>
               <div className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center text-xs text-red-400">
                  +
               </div>
               <div className="w-8 h-8 rounded-full border border-white/30 bg-white/5"></div>
            </div>
            <div className="text-[10px] text-center">
               Electron <span className="text-blue-400">←</span> | Hole <span className="text-red-400">→</span>
            </div>
         </div>
      );

    default:
      return null;
  }
};