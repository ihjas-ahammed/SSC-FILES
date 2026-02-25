import React, { useState } from 'react';

const FiniteMappingCanvas: React.FC = () => {
  const [mapped, setMapped] = useState(0);

  const elements = ['Apple', 'Banana', 'Cherry'];
  const numbers = ['1', '2', '3'];

  return (
    <div className="flex flex-col w-full h-full p-4 items-center justify-center select-none touch-none-canvas" onClick={() => setMapped((m) => (m + 1) % 4)}>
       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest absolute top-4">Tap to map bijection</p>
       
       <svg viewBox="0 0 300 150" className="w-full max-w-[280px]">
          {/* Domain S */}
          <rect x="20" y="20" width="80" height="110" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
          <text x="60" y="15" textAnchor="middle" className="fill-slate-400 font-bold text-[10px]">Set S</text>

          {/* Co-Domain Nn */}
          <rect x="200" y="20" width="80" height="110" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
          <text x="240" y="15" textAnchor="middle" className="fill-slate-400 font-bold text-[10px]">Set N₃</text>

          {elements.map((el, i) => {
             const cy = 45 + i * 30;
             const isMapped = mapped > i;
             return (
               <g key={el}>
                  <circle cx="60" cy={cy} r="15" className="fill-duo-violet" />
                  <text x="60" y={cy + 4} textAnchor="middle" className="fill-white font-bold text-[10px] pointer-events-none">{el}</text>
                  
                  <circle cx="240" cy={cy} r="15" className={`transition-colors ${isMapped ? 'fill-duo-blue' : 'fill-slate-700'}`} />
                  <text x="240" y={cy + 4} textAnchor="middle" className="fill-white font-bold text-sm pointer-events-none">{numbers[i]}</text>
                  
                  {isMapped && (
                     <line x1="75" y1={cy} x2="225" y2={cy} stroke="#ce82ff" strokeWidth="2" strokeDasharray="4" className="animate-pulse" />
                  )}
               </g>
             );
          })}
       </svg>

       <div className="absolute bottom-4 font-bold text-sm text-duo-violet">
         {mapped === 3 ? 'Valid Bijection! Set has 3 elements.' : 'Counting elements...'}
       </div>
    </div>
  );
};

export default FiniteMappingCanvas;