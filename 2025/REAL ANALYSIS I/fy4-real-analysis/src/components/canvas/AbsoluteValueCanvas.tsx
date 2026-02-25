import React, { useState } from 'react';

const AbsoluteValueCanvas: React.FC = () => {
  const [highlight, setHighlight] = useState(false);

  // SVG Coordinates
  // Origin at (50, 150)
  // Scale: 40px = 1 unit

  // Line y = |x|: 
  // (-2, 2) -> (0, 0) -> (3, 3)
  // SVG: (-2*40 + 50, 150 - 2*40) = (-30, 70) -> (50, 150) -> (170, 30)
  
  // Line y = |x - 1|:
  // (-1, 2) -> (1, 0) -> (4, 3)
  // SVG: (-1*40 + 50, 150 - 2*40) = (10, 70) -> (90, 150) -> (210, 30)

  return (
    <div className="flex flex-col items-center w-full h-full p-2 relative">
       <button 
          onClick={() => setHighlight(!highlight)}
          className="absolute top-2 right-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs font-bold rounded-lg text-slate-200 transition-colors z-10 border border-white/10"
       >
         {highlight ? "Hide Region" : "Show |x-1| < |x|"}
       </button>
       
       <svg viewBox="0 0 250 180" className="w-full h-full max-w-[300px]">
          {/* Highlight Region x > 0.5 */}
          {highlight && (
             <rect x="70" y="20" width="180" height="140" fill="rgba(88, 204, 2, 0.15)" />
          )}

          {/* Axes */}
          <line x1="10" y1="150" x2="240" y2="150" stroke="#475569" strokeWidth="2" />
          <line x1="50" y1="20" x2="50" y2="170" stroke="#475569" strokeWidth="2" />
          
          <text x="235" y="165" className="fill-slate-500 text-[10px] font-bold">x</text>
          <text x="35" y="30" className="fill-slate-500 text-[10px] font-bold">y</text>

          {/* Ticks */}
          <line x1="90" y1="147" x2="90" y2="153" stroke="#94a3b8" strokeWidth="2" />
          <text x="90" y="165" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">1</text>
          
          {/* Intersection x = 0.5 (x=70, y=130) */}
          {highlight && (
             <>
               <line x1="70" y1="150" x2="70" y2="130" stroke="#58cc02" strokeWidth="2" strokeDasharray="4" />
               <text x="70" y="165" textAnchor="middle" className="fill-duo-green text-[10px] font-bold">1/2</text>
             </>
          )}

          {/* y = |x| (Blue) */}
          <polyline points="0,100 50,150 150,50" fill="none" stroke="#1cb0f6" strokeWidth="3" strokeLinejoin="round" />
          <text x="135" y="45" className="fill-duo-blue text-[10px] font-bold">y = |x|</text>

          {/* y = |x-1| (Red) */}
          <polyline points="0,100 90,150 190,50" fill="none" stroke="#ff4b4b" strokeWidth="3" strokeLinejoin="round" />
          <text x="180" y="45" className="fill-duo-red text-[10px] font-bold">y = |x-1|</text>

          {/* Intersection Point */}
          <circle cx="70" cy="130" r="4" className={highlight ? "fill-duo-green" : "fill-white"} />
       </svg>
    </div>
  );
};

export default AbsoluteValueCanvas;