import React from 'react';

export const renderModule5Art = (id: string) => {
  switch (id) {
    case 'sol-types':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4 gap-2">
           <div className="flex gap-4">
              <div className="w-12 h-16 border-2 border-white/50 bg-blue-500/20 rounded flex items-end justify-center">
                 <div className="w-full h-full p-1 flex items-center justify-center text-[8px]">Liquid Solvent</div>
              </div>
              <div className="w-12 h-16 border-2 border-white/50 bg-white/10 rounded flex items-center justify-center">
                 <div className="text-[8px] text-center">Solid<br/>Solute</div>
              </div>
           </div>
           <div className="text-lg">➜</div>
           <div className="w-16 h-20 border-2 border-blue-400 bg-blue-500/30 rounded flex items-center justify-center">
              <div className="text-[10px] text-center text-white">Homogeneous<br/>Mixture</div>
           </div>
        </div>
      );
      
    case 'sol-concentration':
      return (
        <div className="flex items-center justify-center h-full w-full p-2 gap-4">
           <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-red-400 flex items-center justify-center text-xs">Mass</div>
              <div className="text-[8px] mt-1 text-slate-400">Temp Independent</div>
           </div>
           <div className="h-10 w-0.5 bg-white/20"></div>
           <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-blue-400 flex items-center justify-center text-xs">Vol</div>
              <div className="text-[8px] mt-1 text-slate-400">Temp Dependent</div>
           </div>
        </div>
      );

    case 'sol-henry-graph':
      return (
        <div className="flex items-center justify-center h-full w-full p-4 relative">
           <div className="absolute left-2 top-10 text-[8px] -rotate-90 text-slate-400">Partial Pressure (p)</div>
           <div className="absolute bottom-2 right-10 text-[8px] text-slate-400">Mole Fraction (x)</div>
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="80" y2="20" stroke="#fbbf24" strokeWidth="2" />
              <text x="50" y="40" className="text-[8px] fill-yellow-400">Slope = K_H</text>
           </svg>
        </div>
      );

    case 'sol-raoult-graph':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <rect x="10" y="10" width="80" height="60" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="70" x2="90" y2="10" stroke="cyan" strokeWidth="1" strokeDasharray="2" />
              <line x1="10" y1="40" x2="90" y2="70" stroke="magenta" strokeWidth="1" strokeDasharray="2" />
              <line x1="10" y1="40" x2="90" y2="10" stroke="lime" strokeWidth="2" />
              <text x="5" y="40" className="text-[6px] fill-magenta">p1^0</text>
              <text x="92" y="10" className="text-[6px] fill-cyan">p2^0</text>
              <text x="50" y="20" className="text-[6px] fill-lime">P_total</text>
           </svg>
        </div>
      );

    case 'sol-azeotrope-pos':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
              <path d="M 10 50 Q 50 10 90 40" fill="none" stroke="lime" strokeWidth="2" />
              <line x1="10" y1="50" x2="90" y2="40" stroke="white" strokeWidth="0.5" strokeDasharray="2" />
              <text x="40" y="20" className="text-[6px] fill-lime">Positive Deviation</text>
              <text x="40" y="30" className="text-[6px] fill-lime">Max VP (Min BP)</text>
           </svg>
        </div>
      );

    case 'sol-azeotrope-neg':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
              <path d="M 10 20 Q 50 60 90 30" fill="none" stroke="red" strokeWidth="2" />
              <line x1="10" y1="20" x2="90" y2="30" stroke="white" strokeWidth="0.5" strokeDasharray="2" />
              <text x="40" y="50" className="text-[6px] fill-red">Negative Deviation</text>
              <text x="40" y="60" className="text-[6px] fill-red">Min VP (Max BP)</text>
           </svg>
        </div>
      );

    case 'sol-colligative-bp':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              {/* Axes */}
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[6px] fill-slate-400">Temp</text>
              <text x="5" y="10" className="text-[6px] fill-slate-400">VP</text>
              
              {/* Solvent Curve */}
              <path d="M 20 60 Q 50 50 80 10" stroke="cyan" fill="none" strokeWidth="1.5" />
              <text x="82" y="10" className="text-[6px] fill-cyan">Pure Solvent</text>
              
              {/* Solution Curve */}
              <path d="M 30 65 Q 60 55 90 20" stroke="orange" fill="none" strokeWidth="1.5" />
              <text x="92" y="20" className="text-[6px] fill-orange">Solution</text>
              
              {/* Atmospheric Pressure Line */}
              <line x1="10" y1="30" x2="90" y2="30" stroke="white" strokeDasharray="2" />
              <text x="12" y="28" className="text-[6px] fill-white">1 atm</text>
              
              {/* Delta Tb */}
              <line x1="65" y1="30" x2="65" y2="70" stroke="cyan" strokeDasharray="1" />
              <line x1="80" y1="30" x2="80" y2="70" stroke="orange" strokeDasharray="1" />
              <path d="M 65 68 H 80" stroke="yellow" strokeWidth="1" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
              <text x="68" y="65" className="text-[6px] fill-yellow-400">ΔTb</text>
           </svg>
        </div>
      );

    case 'sol-osmosis':
      return (
        <div className="flex items-center justify-center h-full w-full p-4 relative">
           <div className="w-32 h-24 border border-white/30 rounded flex relative overflow-hidden">
              <div className="w-1/2 h-full bg-blue-500/20 flex items-center justify-center border-r border-dashed border-white">
                 <span className="text-[8px]">Solvent</span>
              </div>
              <div className="w-1/2 h-full bg-blue-600/40 flex items-center justify-center">
                 <span className="text-[8px]">Solution</span>
              </div>
              
              {/* Piston */}
              <div className="absolute top-2 right-1/4 w-8 h-4 bg-gray-400 rounded-t flex justify-center">
                 <div className="w-1 h-4 bg-gray-500 -mt-4"></div>
              </div>
              <div className="absolute top-8 right-1/4 text-[8px] text-yellow-300 font-bold">π</div>
              
              {/* Flow arrows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 text-white animate-pulse">
                 ➜
              </div>
           </div>
        </div>
      );

    case 'sol-vant-hoff':
      return (
        <div className="flex items-center justify-center h-full w-full gap-8">
           <div className="text-center">
              <div className="flex gap-1 justify-center mb-1">
                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-[8px]">NaCl (i=2)</div>
              <div className="text-[6px] text-slate-400">Dissociation</div>
           </div>
           <div className="text-center">
              <div className="flex gap-0 justify-center mb-1">
                 <div className="w-3 h-3 bg-blue-500 rounded-full opacity-50"></div>
                 <div className="w-3 h-3 bg-blue-500 rounded-full opacity-50 -ml-1"></div>
              </div>
              <div className="text-[8px]">Dimer (i=0.5)</div>
              <div className="text-[6px] text-slate-400">Association</div>
           </div>
        </div>
      );
    default:
      return null;
  }
};