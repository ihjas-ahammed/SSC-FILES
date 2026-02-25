import React, { useState } from 'react';

const SetOperationsCanvas: React.FC = () => {
  const [op, setOp] = useState<'union' | 'intersection' | 'complement'>('union');

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="flex gap-2 justify-center mb-4 z-10">
        <button onClick={() => setOp('union')} className={`px-3 py-1 rounded-lg text-sm font-bold transition-colors ${op === 'union' ? 'bg-duo-blue text-white' : 'bg-white/10 text-slate-400 hover:bg-white/20'}`}>A ∪ B</button>
        <button onClick={() => setOp('intersection')} className={`px-3 py-1 rounded-lg text-sm font-bold transition-colors ${op === 'intersection' ? 'bg-duo-green text-white' : 'bg-white/10 text-slate-400 hover:bg-white/20'}`}>A ∩ B</button>
        <button onClick={() => setOp('complement')} className={`px-3 py-1 rounded-lg text-sm font-bold transition-colors ${op === 'complement' ? 'bg-duo-red text-white' : 'bg-white/10 text-slate-400 hover:bg-white/20'}`}>A \ B</button>
      </div>

      <div className="flex-grow relative">
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <defs>
            <clipPath id="clipB"><circle cx="180" cy="100" r="60" /></clipPath>
            <mask id="maskAminusB">
              <rect x="0" y="0" width="300" height="200" fill="white" />
              <circle cx="180" cy="100" r="60" fill="black" />
            </mask>
          </defs>

          {/* Background Outlines */}
          <circle cx="120" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4" />
          <circle cx="180" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4" />
          
          {/* Labels */}
          <text x="80" y="105" className="fill-slate-400 font-bold text-xl pointer-events-none">A</text>
          <text x="210" y="105" className="fill-slate-400 font-bold text-xl pointer-events-none">B</text>

          {/* Active Highlight Regions */}
          {op === 'union' && (
             <g className="animate-in fade-in zoom-in-95 duration-300">
               <circle cx="120" cy="100" r="60" fill="rgba(28, 176, 246, 0.6)" />
               <circle cx="180" cy="100" r="60" fill="rgba(28, 176, 246, 0.6)" />
               <circle cx="120" cy="100" r="60" fill="none" stroke="#1cb0f6" strokeWidth="4" />
               <circle cx="180" cy="100" r="60" fill="none" stroke="#1cb0f6" strokeWidth="4" />
             </g>
          )}

          {op === 'intersection' && (
             <g className="animate-in fade-in zoom-in-95 duration-300" clipPath="url(#clipB)">
               <circle cx="120" cy="100" r="60" fill="rgba(88, 204, 2, 0.8)" stroke="#58cc02" strokeWidth="4" />
               <circle cx="180" cy="100" r="60" fill="none" stroke="#58cc02" strokeWidth="4" />
             </g>
          )}

          {op === 'complement' && (
             <g className="animate-in fade-in zoom-in-95 duration-300" mask="url(#maskAminusB)">
               <circle cx="120" cy="100" r="60" fill="rgba(255, 75, 75, 0.6)" stroke="#ff4b4b" strokeWidth="4" />
             </g>
          )}
        </svg>
      </div>
    </div>
  );
};

export default SetOperationsCanvas;