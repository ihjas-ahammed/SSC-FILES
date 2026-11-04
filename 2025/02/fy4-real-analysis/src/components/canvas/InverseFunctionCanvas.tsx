import React, { useState } from 'react';

const InverseFunctionCanvas: React.FC = () => {
  const [showInverse, setShowInverse] = useState(false);

  // Use a simple cubic-like bezier curve for f(x)
  // f(x): starts bottom left, curves up steeply
  const pathF = "M 30 170 Q 100 170 120 100 T 170 30";
  // f^-1(x): reflected across y=x (which runs from 30,170 to 170,30)
  const pathFInv = "M 30 170 Q 30 100 100 120 T 170 30";

  return (
    <div className="flex flex-col w-full h-full p-2 items-center justify-center">
       <button 
          onClick={() => setShowInverse(!showInverse)}
          className="mb-4 px-4 py-2 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10 z-10"
       >
         {showInverse ? 'Hide Inverse' : 'Reflect across y = x'}
       </button>

       <div className="relative flex-grow flex justify-center items-center">
          <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px]">
             {/* Axes */}
             <line x1="20" y1="180" x2="180" y2="180" stroke="#475569" strokeWidth="2" />
             <line x1="20" y1="20" x2="20" y2="180" stroke="#475569" strokeWidth="2" />
             
             {/* y = x line */}
             <line x1="20" y1="180" x2="180" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4" />
             <text x="165" y="15" className="fill-slate-400 text-[10px] font-bold">y = x</text>

             {/* f(x) */}
             <path d={pathF} fill="none" stroke="#1cb0f6" strokeWidth="4" strokeLinecap="round" />
             <text x="135" y="90" className="fill-duo-blue text-[12px] font-bold">f(x)</text>

             {/* f^-1(x) */}
             <path d={pathFInv} fill="none" stroke="#58cc02" strokeWidth="4" strokeLinecap="round" 
                className="transition-all duration-1000 ease-in-out" 
                strokeDasharray="250" strokeDashoffset={showInverse ? "0" : "250"} opacity={showInverse ? 1 : 0} />
             
             {showInverse && (
                <text x="70" y="145" className="fill-duo-green text-[12px] font-bold animate-in fade-in duration-1000">f⁻¹(x)</text>
             )}
          </svg>
       </div>
    </div>
  );
};

export default InverseFunctionCanvas;