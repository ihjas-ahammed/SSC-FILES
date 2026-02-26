import React from 'react';

export const renderModule3Art = (id: string) => {
  switch (id) {
    // --- D-BLOCK ---
    case 'd-block-melting-points':
      return (
        <div className="flex items-center justify-center h-full w-full p-4 relative">
           <div className="absolute left-0 top-0 text-[8px] text-slate-400 rotate-90 origin-left">Melting Point</div>
           <div className="absolute bottom-0 right-0 text-[8px] text-slate-400">Atomic Number</div>
           <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
              <path d="M 5 20 L 15 40 L 25 50 L 35 48 L 45 35 L 55 45 L 65 30 L 75 25 L 85 15 L 95 10" fill="none" stroke="#fbbf24" strokeWidth="1" />
              <circle cx="25" cy="50" r="1.5" fill="#ef4444" /> {/* Cr/Mn dip region */}
              <text x="30" y="55" className="text-[6px] fill-white">Mn (Dip)</text>
           </svg>
        </div>
      );
    case 'lanthanoid-contraction-graph':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 60" className="w-full h-full">
              <path d="M 5 55 Q 50 45 95 10" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="2" />
              <text x="10" y="55" className="text-[6px] fill-slate-300">La</text>
              <text x="90" y="10" className="text-[6px] fill-slate-300">Lu</text>
              <text x="50" y="30" className="text-[8px] fill-white font-bold">Size Decreases</text>
           </svg>
        </div>
      );
    case 'structure-chromate-dichromate':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
           <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-yellow-500 rounded-full border border-white text-[6px] flex items-center justify-center text-black font-bold">Cr</div>
              <div className="text-xs text-yellow-300">CrO₄²⁻ (Yellow)</div>
           </div>
           <div className="w-full h-px bg-white/20"></div>
           <div className="flex items-center gap-1">
              <div className="flex -space-x-1">
                 <div className="w-6 h-6 bg-orange-500 rounded-full border border-white"></div>
                 <div className="w-6 h-6 bg-orange-500 rounded-full border border-white"></div>
              </div>
              <div className="text-xs text-orange-400">Cr₂O₇²⁻ (Orange)</div>
           </div>
        </div>
      );
    case 'structure-manganate-permanganate':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">Mn⁶⁺</div>
              <span className="text-green-400 text-xs">Manganate (Green)</span>
           </div>
           <div className="w-full h-px bg-white/20"></div>
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">Mn⁷⁺</div>
              <span className="text-purple-400 text-xs">Permanganate (Purple)</span>
           </div>
        </div>
      );
    case 'd-block-position':
      return (
        <div className="flex items-center justify-center h-full w-full p-2">
           <div className="grid grid-cols-10 gap-0.5 w-full max-w-[200px]">
              {[...Array(30)].map((_, i) => {
                 const isZn = i === 9 || i === 19 || i === 29;
                 return (
                   <div key={i} className={`w-full aspect-square ${isZn ? 'bg-gray-600' : 'bg-duo-violet'} rounded-[2px] opacity-80`}></div>
                 )
              })}
           </div>
           <div className="absolute top-2 right-2 text-[8px] text-gray-400">Zn, Cd, Hg (Not Transition)</div>
        </div>
      );

    // --- COORDINATION ---
    case 'coordination-werner':
      return (
        <div className="flex items-center justify-center h-full w-full p-4 gap-4">
           <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center font-bold text-xs">Co</div>
              <div className="relative w-16 h-16 -mt-8 border-2 border-dashed border-white/50 rounded-full flex items-center justify-center">
                 <span className="text-[8px] text-yellow-300">6 NH₃</span>
              </div>
              <span className="text-[10px] mt-1 text-slate-300">Secondary (6)</span>
           </div>
           <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1">
                 {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-green-500"></div>)}
              </div>
              <span className="text-[10px] mt-1 text-slate-300">Primary (3 Cl⁻)</span>
           </div>
        </div>
      );
    case 'coordination-ligands':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="h-4 w-0.5 bg-white"></div>
              <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-[8px]">M</div>
              <span className="text-[8px] mt-1">Unidentate</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="flex gap-2">
                 <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                 <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="w-8 h-4 border-l-2 border-r-2 border-b-2 border-white rounded-b-lg"></div>
              <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-[8px] -mt-2">M</div>
              <span className="text-[8px] mt-1">Chelate (en)</span>
           </div>
        </div>
      );
    case 'coordination-shapes':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                 <div className="w-4 h-4 bg-gray-500 rounded-full z-10"></div>
                 <div className="absolute w-full h-full border border-white/30 rotate-45"></div>
              </div>
              <span className="text-[8px] mt-1">Square Planar</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                 <div className="w-4 h-4 bg-gray-500 rounded-full z-10"></div>
                 <div className="absolute w-full h-full border border-white/30 skew-x-12"></div>
                 <div className="absolute w-0.5 h-full bg-white/30"></div>
              </div>
              <span className="text-[8px] mt-1">Octahedral</span>
           </div>
        </div>
      );
    case 'coordination-isomers':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-1 w-10">
                 <div className="w-4 h-4 bg-green-500"></div><div className="w-4 h-4 bg-green-500"></div>
                 <div className="w-4 h-4 bg-blue-500"></div><div className="w-4 h-4 bg-blue-500"></div>
              </div>
              <span className="text-[8px] mt-1">Cis</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-1 w-10">
                 <div className="w-4 h-4 bg-green-500"></div><div className="w-4 h-4 bg-blue-500"></div>
                 <div className="w-4 h-4 bg-blue-500"></div><div className="w-4 h-4 bg-green-500"></div>
              </div>
              <span className="text-[8px] mt-1">Trans</span>
           </div>
        </div>
      );
    case 'coordination-cft-oct':
      return (
        <div className="flex items-center justify-center h-full w-full p-2">
           <div className="flex flex-col items-center w-full max-w-[200px]">
              <div className="flex gap-1 mb-4">
                 <div className="w-8 h-1 bg-white"></div><div className="w-8 h-1 bg-white"></div>
                 <span className="text-[8px] ml-2">eg (Higher E)</span>
              </div>
              <div className="h-10 w-0.5 bg-dashed bg-gray-500"></div>
              <div className="flex gap-1 mt-4">
                 <div className="w-8 h-1 bg-white"></div><div className="w-8 h-1 bg-white"></div><div className="w-8 h-1 bg-white"></div>
                 <span className="text-[8px] ml-2">t2g (Lower E)</span>
              </div>
              <span className="text-[10px] mt-2 font-bold text-yellow-400">Δo Splitting</span>
           </div>
        </div>
      );
    case 'coordination-carbonyl':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-[10px]">M</div>
              <div className="flex flex-col gap-0.5">
                 <div className="w-8 h-0.5 bg-blue-400 animate-pulse"></div>
                 <div className="w-8 h-0.5 bg-red-400 animate-pulse" style={{animationDirection: 'reverse'}}></div>
              </div>
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px]">CO</div>
           </div>
           <p className="text-[8px] mt-2 text-slate-300">Synergic Bonding (σ and π)</p>
        </div>
      );
    default:
      return null;
  }
};