import React from 'react';

export const renderModule5KineticsArt = (id: string) => {
  switch (id) {
    case 'kinetics-boltzmann-distribution':
      return (
        <div className="flex items-center justify-center h-full w-full p-4 relative">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[5px] fill-slate-400">Kinetic Energy</text>
              <text x="5" y="10" className="text-[5px] fill-slate-400">Fraction</text>
              
              {/* T1 Curve */}
              <path d="M 10 70 Q 25 10 40 60 T 80 68" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="25" y="25" className="text-[6px] fill-blue-400 font-bold">T₁</text>
              
              {/* T2 Curve (Flatter, shifted right) */}
              <path d="M 10 70 Q 35 30 55 60 T 90 65" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <text x="45" y="40" className="text-[6px] fill-red-400 font-bold">T₂ (T₁+10°)</text>

              {/* Activation Energy Line */}
              <line x1="60" y1="70" x2="60" y2="40" stroke="white" strokeDasharray="2" strokeWidth="0.5" />
              <text x="58" y="75" className="text-[5px] fill-white">Ea</text>
              
              {/* Shaded Area simulation via text */}
              <text x="70" y="60" className="text-[4px] fill-yellow-400 font-bold">Area approx</text>
              <text x="70" y="65" className="text-[4px] fill-yellow-400 font-bold">doubles!</text>
           </svg>
        </div>
      );
    case 'kinetics-rate-graph':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4 relative">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              {/* Axes */}
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[6px] fill-slate-400">Time</text>
              <text x="5" y="10" className="text-[6px] fill-slate-400">Conc</text>
              
              {/* Reactant Curve (Decreasing) */}
              <path d="M 10 20 Q 40 60 90 65" fill="none" stroke="#ef4444" strokeWidth="2" />
              <text x="20" y="30" className="text-[6px] fill-red-400">Reactant [R]</text>
              
              {/* Product Curve (Increasing) */}
              <path d="M 10 70 Q 40 30 90 25" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="70" y="30" className="text-[6px] fill-green-400">Product [P]</text>
              
              {/* Tangent for Inst Rate */}
              <line x1="30" y1="60" x2="50" y2="40" stroke="white" strokeDasharray="1" strokeWidth="0.5" />
              <text x="52" y="45" className="text-[4px] fill-white">Slope = Inst Rate</text>
           </svg>
        </div>
      );

    case 'kinetics-zero-order':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[6px] fill-slate-400">Time</text>
              <text x="5" y="10" className="text-[6px] fill-slate-400">[R]</text>
              
              {/* Straight Line Down */}
              <line x1="10" y1="20" x2="70" y2="70" stroke="#fbbf24" strokeWidth="2" />
              <text x="45" y="40" className="text-[6px] fill-yellow-400">Slope = -k</text>
              <text x="12" y="18" className="text-[6px] fill-white">[R]0</text>
           </svg>
        </div>
      );

    case 'kinetics-first-order':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[6px] fill-slate-400">Time</text>
              <text x="5" y="10" className="text-[6px] fill-slate-400">ln[R]</text>
              
              {/* Straight Line Down */}
              <line x1="10" y1="20" x2="70" y2="70" stroke="#60a5fa" strokeWidth="2" />
              <text x="45" y="40" className="text-[6px] fill-blue-400">Slope = -k</text>
              <text x="12" y="18" className="text-[6px] fill-white">ln[R]0</text>
           </svg>
        </div>
      );

    case 'kinetics-energy-profile':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[6px] fill-slate-400">Reaction Coordinate</text>
              <text x="5" y="10" className="text-[6px] fill-slate-400">Potential Energy</text>
              
              {/* Hump */}
              <path d="M 15 50 Q 50 10 85 60" fill="none" stroke="#a855f7" strokeWidth="2" />
              
              {/* Levels */}
              <line x1="15" y1="50" x2="50" y2="50" stroke="white" strokeDasharray="1" strokeWidth="0.5" />
              <line x1="85" y1="60" x2="50" y2="60" stroke="white" strokeDasharray="1" strokeWidth="0.5" />
              
              {/* Ea */}
              <line x1="50" y1="50" x2="50" y2="10" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x="52" y="30" className="text-[6px] fill-yellow-400">Ea</text>
              
              {/* Activated Complex */}
              <text x="40" y="8" className="text-[6px] fill-white">Activated Complex</text>
           </svg>
        </div>
      );

    case 'kinetics-arrhenius-plot':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="white" strokeWidth="1" />
              <text x="90" y="75" className="text-[6px] fill-slate-400">1/T</text>
              <text x="5" y="10" className="text-[6px] fill-slate-400">ln k</text>
              
              {/* Negative Slope Line */}
              <line x1="15" y1="20" x2="80" y2="65" stroke="#ef4444" strokeWidth="2" />
              <text x="50" y="30" className="text-[6px] fill-white">Slope = -Ea/R</text>
              <text x="15" y="15" className="text-[6px] fill-white">Intercept = ln A</text>
           </svg>
        </div>
      );

    case 'kinetics-collision-orientation':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-4">
           <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                 <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[8px]">A</div>
                 <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[8px] -mt-1">A</div>
              </div>
              <div className="text-xl">+</div>
              <div className="flex flex-col items-center">
                 <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[8px]">B</div>
                 <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[8px] -mt-1">B</div>
              </div>
              <div className="text-xl">→</div>
              <div className="flex flex-col items-center border border-green-500 p-1 rounded">
                 <span className="text-[8px] text-green-400">Effective</span>
                 <div className="flex gap-1">
                    <div className="flex flex-col"><div className="w-4 h-4 bg-blue-500 rounded-full"></div><div className="w-4 h-4 bg-red-500 rounded-full"></div></div>
                    <div className="flex flex-col"><div className="w-4 h-4 bg-blue-500 rounded-full"></div><div className="w-4 h-4 bg-red-500 rounded-full"></div></div>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-2 opacity-50">
              <div className="flex flex-col"><div className="w-6 h-6 bg-blue-500 rounded-full"></div><div className="w-6 h-6 bg-blue-500 rounded-full"></div></div>
              <div className="text-xl">+</div>
              <div className="flex items-center"><div className="w-6 h-6 bg-red-500 rounded-full"></div><div className="w-6 h-6 bg-red-500 rounded-full"></div></div>
              <div className="text-xl">→</div>
              <div className="text-[8px] text-red-400">Bounce (Ineffective)</div>
           </div>
        </div>
      );

    default:
      return null;
  }
};