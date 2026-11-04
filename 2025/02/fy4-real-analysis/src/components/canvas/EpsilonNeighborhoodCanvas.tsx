import React, { useState } from 'react';

const EpsilonNeighborhoodCanvas: React.FC = () => {
  const [epsilon, setEpsilon] = useState(40); // Represents epsilon scaled

  // a = 125 (center of svg)
  const a = 125;

  return (
    <div className="flex flex-col items-center w-full h-full p-4 relative justify-center">
       <div className="w-full flex-grow flex items-center justify-center">
         <svg viewBox="0 0 250 100" className="w-full max-w-[300px] overflow-visible">
            {/* Number line */}
            <line x1="10" y1="50" x2="240" y2="50" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            
            {/* Epsilon Region */}
            <rect 
              x={a - epsilon} y="40" 
              width={epsilon * 2} height="20" 
              rx="4"
              className="fill-duo-red/30 stroke-duo-red stroke-2 transition-all duration-150" 
            />
            
            {/* Center Point a */}
            <circle cx={a} cy="50" r="5" className="fill-white" />
            <text x={a} y="75" textAnchor="middle" className="fill-slate-200 text-sm font-bold">a</text>

            {/* Left bound */}
            <circle cx={a - epsilon} cy="50" r="4" className="fill-[#0b0f19] stroke-duo-red stroke-2 transition-all duration-150" />
            <text x={a - epsilon} y="30" textAnchor="middle" className="fill-duo-red text-[10px] font-bold transition-all duration-150">a - ε</text>

            {/* Right bound */}
            <circle cx={a + epsilon} cy="50" r="4" className="fill-[#0b0f19] stroke-duo-red stroke-2 transition-all duration-150" />
            <text x={a + epsilon} y="30" textAnchor="middle" className="fill-duo-red text-[10px] font-bold transition-all duration-150">a + ε</text>
            
            {/* Label inside */}
            <text x={a} y="45" textAnchor="middle" className="fill-duo-red/80 text-[10px] font-black pointer-events-none">Vε(a)</text>
         </svg>
       </div>

       <div className="w-full max-w-[200px] flex items-center gap-4 mt-2">
         <span className="text-slate-400 font-bold text-xs">Small ε</span>
         <input 
            type="range" min="5" max="100" 
            value={epsilon} 
            onChange={(e) => setEpsilon(Number(e.target.value))}
            className="flex-grow accent-duo-red"
         />
         <span className="text-slate-400 font-bold text-xs">Large ε</span>
       </div>
    </div>
  );
};

export default EpsilonNeighborhoodCanvas;