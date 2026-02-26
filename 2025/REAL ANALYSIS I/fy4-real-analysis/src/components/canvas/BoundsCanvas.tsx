import React, { useState } from 'react';

const BoundsCanvas: React.FC = () => {
  const [bound, setBound] = useState(180);

  // Set S is from x=50 to x=150
  const sup = 150;
  
  const isUpper = bound >= sup;
  const isSup = bound === sup;

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 100" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Number Line */}
          <line x1="20" y1="50" x2="280" y2="50" stroke="#475569" strokeWidth="3" />
          
          {/* Set S interval */}
          <line x1="50" y1="50" x2="150" y2="50" stroke="#1cb0f6" strokeWidth="8" strokeLinecap="round" />
          <text x="100" y="35" textAnchor="middle" className="fill-duo-blue font-black text-sm">Set S</text>

          {/* Supremum line */}
          <line x1="150" y1="30" x2="150" y2="70" stroke="#f8fafc" strokeWidth="2" strokeDasharray="4" />
          <text x="150" y="85" textAnchor="middle" className="fill-slate-400 font-bold text-[10px]">sup S</text>

          {/* Movable Bound */}
          <line x1={bound} y1="20" x2={bound} y2="80" stroke={isSup ? "#58cc02" : isUpper ? "#ff4b4b" : "#64748b"} strokeWidth="4" className="transition-all" />
          
          <rect x={bound - 25} y="0" width="50" height="15" rx="4" fill={isSup ? "#58cc02" : isUpper ? "#ff4b4b" : "#64748b"} className="transition-all" />
          <text x={bound} y="11" textAnchor="middle" className="fill-white font-bold text-[9px] pointer-events-none transition-all">
            {isSup ? "Least Upper" : isUpper ? "Upper Bound" : "Not Upper"}
          </text>
       </svg>

       <div className="w-full max-w-[250px] flex flex-col items-center gap-2">
         <span className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Drag to test bounds</span>
         <input 
            type="range" min="100" max="250" 
            value={bound} 
            onChange={(e) => setBound(Number(e.target.value))}
            className="w-full accent-white"
         />
       </div>
    </div>
  );
};

export default BoundsCanvas;