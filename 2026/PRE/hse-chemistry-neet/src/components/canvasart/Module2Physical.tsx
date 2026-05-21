import React from 'react';

export const renderModule2Art = (id: string) => {
  switch (id) {
    // --- SECTION 2.1: THERMODYNAMICS ---
    case 'thermo-systems':
      return (
        <div className="flex justify-around items-center h-full w-full p-2 text-[10px]">
           <div className="flex flex-col items-center">
             <div className="w-12 h-16 border-2 border-white/50 border-t-0 rounded-b relative">
               <div className="absolute top-0 w-full h-2 bg-blue-400/20 animate-pulse"></div>
             </div>
             <span>Open</span>
           </div>
           <div className="flex flex-col items-center">
             <div className="w-12 h-16 border-2 border-white/50 rounded relative">
               <div className="absolute inset-0 bg-blue-400/10"></div>
             </div>
             <span>Closed</span>
           </div>
           <div className="flex flex-col items-center">
             <div className="w-12 h-16 border-4 border-gray-500 rounded relative bg-gray-800">
               <div className="absolute inset-2 bg-blue-400/10 border border-white/20"></div>
             </div>
             <span>Isolated</span>
           </div>
        </div>
      );
    case 'thermo-expansion':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full">
           <div className="w-32 h-20 border-2 border-slate-400 relative rounded bg-white/5 overflow-hidden">
              <div className="absolute bottom-0 w-full h-full bg-blue-500/20 flex items-center justify-center">
                 <div className="text-xs text-white/50 tracking-widest">GAS</div>
              </div>
              <div className="absolute top-2 w-full h-2 bg-gray-400 shadow-md animate-bounce" style={{animationDuration: '2s'}}></div>
           </div>
           <p className="text-xs mt-2 text-slate-400">Pressure-Volume Work</p>
        </div>
      );
    case 'thermo-calorimeter':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="relative w-24 h-24 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-spin-slow"></div>
              <div className="w-12 h-16 bg-gray-900 border border-white/30 rounded flex items-center justify-center">
                 <div className="w-2 h-8 bg-red-500 animate-pulse rounded-full"></div>
              </div>
              <div className="absolute -right-4 top-0 w-2 h-16 bg-white/50 rotate-12 rounded"></div>
           </div>
           <div className="ml-4 text-[10px] text-slate-400">
             <p>Bomb</p>
             <p>Calorimeter</p>
             <p>(Const V)</p>
           </div>
        </div>
      );
    case 'thermo-enthalpy-plot':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
              {/* Axes */}
              <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="50" x2="10" y2="10" stroke="white" strokeWidth="0.5" />
              
              {/* Exothermic */}
              <path d="M 15 20 H 40 Q 50 20 50 35 T 60 40 H 85" fill="none" stroke="#ef4444" strokeWidth="2" />
              <text x="25" y="15" className="fill-white text-[6px]">Reactants</text>
              <text x="70" y="45" className="fill-white text-[6px]">Products</text>
              <text x="50" y="58" className="fill-slate-400 text-[5px]">Exothermic (ΔH &lt; 0)</text>
              
              <line x1="85" y1="20" x2="95" y2="20" stroke="white" strokeDasharray="1" strokeWidth="0.5" />
              <line x1="85" y1="40" x2="95" y2="40" stroke="white" strokeDasharray="1" strokeWidth="0.5" />
              <line x1="92" y1="20" x2="92" y2="40" stroke="#ef4444" strokeWidth="0.5" markerEnd="url(#arrow)" />
           </svg>
        </div>
      );
    case 'thermo-entropy-diffusion':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full">
           <div className="flex w-32 h-16 border-2 border-white/20 rounded relative">
              <div className="w-1/2 h-full border-r border-dashed border-white/20 flex items-center justify-center relative">
                 {[...Array(6)].map((_, i) => <div key={`l-${i}`} className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full" style={{top: Math.random()*80+'%', left: Math.random()*80+'%'}}></div>)}
              </div>
              <div className="w-1/2 h-full flex items-center justify-center relative">
                 {[...Array(6)].map((_, i) => <div key={`r-${i}`} className="absolute w-1.5 h-1.5 bg-red-400 rounded-full" style={{top: Math.random()*80+'%', left: Math.random()*80+'%'}}></div>)}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-[8px] bg-black/50 px-1 rounded text-white animate-ping" style={{animationDuration: '3s'}}>MIXING</div>
              </div>
           </div>
           <p className="text-[10px] mt-2 text-duo-green">Disorder Increases (ΔS &gt; 0)</p>
        </div>
      );
    case 'thermo-gibbs-equilibrium':
      return (
        <div className="flex items-center justify-center h-full w-full p-2">
           <div className="relative w-40 h-24 border-b border-l border-white/20">
              <path d="M 10 10 Q 50 90 90 20" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="50" cy="50" r="4" fill="#fbbf24" />
              <text x="55" y="55" className="text-[8px] fill-white">Equilibrium (min G)</text>
              <text x="5" y="8" className="text-[8px] fill-slate-400">G</text>
              <text x="90" y="90" className="text-[8px] fill-slate-400">Reaction Coord</text>
           </div>
        </div>
      );

    // --- SECTION 2.2: EQUILIBRIUM ---
    case 'eq-dynamic-water':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full">
           <div className="w-24 h-32 border-2 border-white/20 border-t-2 relative bg-blue-900/20 rounded">
              <div className="absolute bottom-0 w-full h-1/2 bg-blue-500/50"></div>
              <div className="absolute top-1/4 w-full text-center text-xs text-slate-300">Vapour</div>
              
              {/* Up arrows */}
              <div className="absolute bottom-1/2 left-1/3 w-0.5 h-6 bg-red-400 animate-bounce"></div>
              <div className="absolute bottom-1/2 left-2/3 w-0.5 h-6 bg-red-400 animate-bounce" style={{animationDelay: '0.5s'}}></div>
              
              {/* Down arrows */}
              <div className="absolute top-1/3 left-1/2 w-0.5 h-6 bg-blue-300 animate-bounce" style={{animationDirection: 'reverse'}}></div>
           </div>
           <p className="text-[10px] mt-2 text-slate-400">Rate(Evap) = Rate(Cond)</p>
        </div>
      );
    case 'eq-le-chatelier':
      return (
        <div className="flex items-center justify-center h-full w-full gap-4">
           <div className="flex flex-col items-center">
              <div className="w-8 h-20 bg-white/10 rounded-t relative overflow-hidden">
                 <div className="absolute bottom-0 w-full h-3/4 bg-blue-500 transition-all duration-1000"></div>
              </div>
              <span className="text-[10px]">Reactants</span>
           </div>
           <div className="text-xl">⇌</div>
           <div className="flex flex-col items-center">
              <div className="w-8 h-20 bg-white/10 rounded-t relative overflow-hidden">
                 <div className="absolute bottom-0 w-full h-1/4 bg-green-500 transition-all duration-1000"></div>
              </div>
              <span className="text-[10px]">Products</span>
           </div>
        </div>
      );
    case 'eq-ph-scale':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full px-4">
           <div className="w-full h-4 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 relative">
              <div className="absolute top-[-20px] left-0 text-[10px] text-red-400">0 (Acid)</div>
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[10px] text-green-400">7 (Neutral)</div>
              <div className="absolute top-[-20px] right-0 text-[10px] text-blue-400">14 (Base)</div>
              
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-3 h-3 bg-white rounded-full shadow border border-black"></div>
           </div>
           <p className="text-[10px] mt-4 text-slate-400">pH + pOH = 14</p>
        </div>
      );

    // --- SECTION 2.3: REDOX ---
    case 'redox-electron-transfer':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-black font-bold border-2 border-white">Zn</div>
              <div className="text-yellow-300 text-xs animate-pulse">2e⁻ →</div>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold border-2 border-white">Cu²⁺</div>
           </div>
           <p className="text-[10px] mt-2 text-slate-400">Zn oxidized, Cu reduced</p>
        </div>
      );
    case 'redox-dan-cell':
      return (
        <div className="flex items-center justify-center h-full w-full gap-2 p-2">
           {/* Anode */}
           <div className="w-16 h-20 border border-white/20 relative bg-white/5 rounded">
              <div className="w-4 h-16 bg-gray-400 absolute left-2 top-2 border border-white/30"></div>
              <div className="absolute bottom-0 w-full h-12 bg-white/10"></div>
              <span className="absolute bottom-1 w-full text-center text-[8px]">- Anode (Zn)</span>
           </div>
           
           {/* Bridge */}
           <div className="w-8 h-8 border-t-2 border-white/50 rounded-t-full -mt-10"></div>

           {/* Cathode */}
           <div className="w-16 h-20 border border-white/20 relative bg-white/5 rounded">
              <div className="w-4 h-16 bg-orange-400 absolute right-2 top-2 border border-white/30"></div>
              <div className="absolute bottom-0 w-full h-12 bg-blue-500/20"></div>
              <span className="absolute bottom-1 w-full text-center text-[8px]">+ Cathode (Cu)</span>
           </div>
        </div>
      );
    default:
      return null;
  }
};