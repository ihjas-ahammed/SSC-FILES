import React from 'react';

export const renderModule5ElectroArt = (id: string) => {
  switch (id) {
    case 'electro-equilibrium':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="w-40 h-20 bg-slate-800 rounded-2xl border-4 border-slate-600 flex items-center justify-center shadow-inner relative overflow-hidden drop-shadow-xl">
              <div className="absolute top-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Voltmeter</div>
              <span className="text-3xl font-mono font-black text-red-500 tracking-widest drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] mt-2">0.00 V</span>
           </div>
           <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                 <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-bold border border-white/20">E_cell = 0</span>
                 <span className="text-yellow-400 font-bold text-xl">⇒</span>
                 <span className="bg-yellow-900/30 px-3 py-1.5 rounded-lg text-sm font-bold text-yellow-300 border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]">Q = K_c</span>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest">Equilibrium Reached</span>
           </div>
        </div>
      );
    case 'electro-battery-lead':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="relative w-32 h-40 bg-gray-300 rounded-xl border-4 border-gray-400 flex justify-evenly items-end pb-3 overflow-hidden shadow-2xl">
              {/* Electrolyte */}
              <div className="absolute top-0 w-full h-[60%] bg-blue-500/30 flex items-center justify-center border-b-[3px] border-blue-400/50">
                 <span className="text-[10px] text-blue-900 font-black tracking-widest drop-shadow-sm">38% H₂SO₄</span>
              </div>
              {/* Plates */}
              <div className="w-5 h-28 bg-slate-600 border border-slate-700 rounded-t-sm relative z-10 shadow-sm">
                 <div className="absolute -top-3 w-3 h-3 bg-slate-800 left-1 rounded-t-sm"></div>
                 <div className="absolute bottom-1 w-full text-center text-[8px] text-white font-bold drop-shadow-md">Pb</div>
              </div>
              <div className="w-5 h-28 bg-orange-900 border border-orange-800 rounded-t-sm relative z-10 shadow-sm">
                 <div className="absolute -top-3 w-3 h-3 bg-orange-950 left-1 rounded-t-sm"></div>
                 <div className="absolute bottom-1 w-full text-center text-[8px] text-white font-bold drop-shadow-md">PbO₂</div>
              </div>
              <div className="w-5 h-28 bg-slate-600 border border-slate-700 rounded-t-sm relative z-10 shadow-sm hidden sm:block">
                 <div className="absolute -top-3 w-3 h-3 bg-slate-800 left-1 rounded-t-sm"></div>
              </div>
              <div className="w-5 h-28 bg-orange-900 border border-orange-800 rounded-t-sm relative z-10 shadow-sm hidden sm:block">
                 <div className="absolute -top-3 w-3 h-3 bg-orange-950 left-1 rounded-t-sm"></div>
              </div>
           </div>
        </div>
      );
    case 'electro-galvanic-cell':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4 relative">
           <div className="flex gap-8 items-center">
              {/* Anode */}
              <div className="relative w-20 h-32 border-2 border-white/20 rounded-b bg-white/5">
                 <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-4 h-24 bg-gray-400 border border-white/50"></div>
                 <div className="absolute bottom-0 w-full h-20 bg-blue-200/20"></div>
                 <div className="absolute bottom-[-20px] text-xs text-center w-full">Zn (Anode) -</div>
              </div>
              
              {/* Salt Bridge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-12 border-t-8 border-x-8 border-white/30 rounded-t-xl"></div>

              {/* Cathode */}
              <div className="relative w-20 h-32 border-2 border-white/20 rounded-b bg-white/5">
                 <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-4 h-24 bg-orange-400 border border-white/50"></div>
                 <div className="absolute bottom-0 w-full h-20 bg-blue-500/20"></div>
                 <div className="absolute bottom-[-20px] text-xs text-center w-full">Cu (Cathode) +</div>
              </div>
           </div>
           {/* Flow */}
           <div className="absolute top-0 w-40 h-1 bg-yellow-400 animate-pulse"></div>
           <div className="absolute top-[-10px] text-xs text-yellow-300">e⁻ →</div>
        </div>
      );

    case 'electro-she':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
           <div className="relative w-32 h-40 border-2 border-white/30 rounded-b bg-blue-100/10">
              {/* Inverted Funnel */}
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-12 h-32 border-2 border-white/50 rounded-t-xl"></div>
              {/* Platinum Foil */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4 h-6 bg-gray-300"></div>
              {/* H2 Bubbles */}
              <div className="absolute bottom-12 left-1/2 w-1 h-1 bg-white rounded-full animate-bounce"></div>
              <div className="absolute bottom-16 left-1/2 -translate-x-2 w-1 h-1 bg-white rounded-full animate-bounce delay-100"></div>
              
              <div className="absolute top-2 left-2 text-[10px]">H₂(g) 1 bar</div>
              <div className="absolute bottom-2 left-2 text-[10px]">H⁺(aq) 1M</div>
           </div>
        </div>
      );

    case 'electro-conductivity-cell':
      return (
        <div className="flex items-center justify-center h-full w-full p-4 gap-4">
           <div className="relative w-24 h-40 border-2 border-white/20 rounded-full bg-blue-50/5 flex items-center justify-center">
              <div className="w-2 h-24 bg-gray-400 absolute left-6 top-4"></div>
              <div className="w-2 h-24 bg-gray-400 absolute right-6 top-4"></div>
              <div className="w-4 h-4 bg-black absolute left-5 bottom-12"></div> {/* Pt black */}
              <div className="w-4 h-4 bg-black absolute right-5 bottom-12"></div>
              <div className="absolute bottom-2 text-[10px]">Platinized Pt</div>
           </div>
        </div>
      );

    case 'electro-molar-conductivity-graph':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[6px] fill-slate-400">√c</text>
              <text x="5" y="10" className="text-[6px] fill-slate-400">Λm</text>
              
              {/* Strong Electrolyte (KCl) - Linear */}
              <line x1="10" y1="30" x2="80" y2="60" stroke="cyan" strokeWidth="2" />
              <text x="82" y="60" className="text-[6px] fill-cyan">Strong (KCl)</text>
              
              {/* Weak Electrolyte (CH3COOH) - Curve */}
              <path d="M 10 10 Q 15 60 90 65" fill="none" stroke="yellow" strokeWidth="2" />
              <text x="60" y="30" className="text-[6px] fill-yellow">Weak (HAc)</text>
           </svg>
        </div>
      );

    case 'electro-battery-dry':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <div className="relative w-24 h-40 bg-gray-700 rounded-t-lg border-b-4 border-gray-900 overflow-hidden">
              <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-6 h-4 bg-yellow-600 rounded-t"></div> {/* Cap */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-black"></div> {/* Carbon Rod */}
              <div className="absolute inset-0 bg-gray-500/30 m-2 rounded"></div> {/* MnO2 Paste */}
              <div className="absolute bottom-2 left-2 text-[8px] text-white">Zinc Container (Anode)</div>
           </div>
        </div>
      );

    case 'electro-fuel-cell':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <div className="w-48 h-32 border border-white/20 relative flex bg-white/5 rounded">
              {/* Electrodes */}
              <div className="w-2 h-24 bg-gray-500 absolute left-10 top-4"></div>
              <div className="w-2 h-24 bg-gray-500 absolute right-10 top-4"></div>
              
              {/* Inlets */}
              <div className="absolute left-0 top-10 text-[10px] animate-pulse">H₂ →</div>
              <div className="absolute right-0 top-10 text-[10px] animate-pulse">← O₂</div>
              <div className="absolute bottom-2 right-10 text-[10px]">H₂O out ↘</div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-blue-300">Electrolyte (NaOH)</div>
           </div>
        </div>
      );

    case 'electro-corrosion':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <div className="relative w-full h-32 bg-gray-600 rounded-lg overflow-hidden">
              {/* Water Drop */}
              <div className="absolute top-0 left-1/4 w-20 h-10 bg-blue-400/50 rounded-b-full"></div>
              {/* Rust Spot */}
              <div className="absolute top-0 left-1/3 w-4 h-1 bg-red-700 rounded-full blur-[1px]"></div>
              
              <div className="absolute top-4 left-10 text-[8px] text-white">Anode (Fe → Fe²⁺)</div>
              <div className="absolute top-4 left-32 text-[8px] text-white">Cathode (O₂ + H⁺ → H₂O)</div>
              
              <div className="absolute bottom-2 w-full text-center text-[10px] text-white">Iron Surface</div>
           </div>
        </div>
      );

    default:
      return null;
  }
};