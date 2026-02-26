import React, { useState } from 'react';

const SubsequenceCanvas: React.FC = () => {
  const [mode, setMode] = useState<'main' | 'sub'>('main');

  // Sequence X: oscillating slightly decaying
  // x_n = (-1)^n * (1 + 1/n) + 2
  // n = 1..20
  
  const points = [];
  const subPoints = [];

  for (let n = 1; n <= 20; n++) {
    const val = Math.pow(-1, n) * (1 + 1/n) + 2;
    points.push({ n, val, isSub: false });

    // Subsequence of even indices: n = 2k
    if (n % 2 === 0) {
      points[n-1].isSub = true;
      subPoints.push({ n, val });
    }
  }

  // Scale:
  // X: 1..20 -> 20..280
  // Y: 0..4 -> 180..20 (center ~2)
  
  const mapX = (n: number) => 20 + ((n - 1) / 19) * 260;
  const mapY = (val: number) => 180 - (val / 4) * 160;

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 200" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Axes */}
          <line x1="20" y1="180" x2="280" y2="180" stroke="#475569" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="180" stroke="#475569" strokeWidth="2" />

          {/* Points */}
          {points.map((p, i) => (
             <circle 
                key={i} 
                cx={mapX(p.n)} 
                cy={mapY(p.val)} 
                r={mode === 'sub' && !p.isSub ? 2 : 4} 
                className={`transition-all duration-300 ${mode === 'sub' && p.isSub ? 'fill-yellow-400 stroke-white stroke-2' : mode === 'sub' ? 'fill-slate-700 opacity-30' : 'fill-duo-blue'}`}
             />
          ))}

          {/* Limit lines */}
          {mode === 'sub' && (
             <>
               <line x1="20" y1={mapY(3)} x2="280" y2={mapY(3)} stroke="#facc15" strokeWidth="1" strokeDasharray="4" />
               <text x="290" y={mapY(3)} className="fill-yellow-400 text-[10px] font-bold">Subseq Limit</text>
             </>
          )}
       </svg>

       <div className="flex gap-4">
          <button 
             onClick={() => setMode('main')}
             className={`px-4 py-2 rounded-xl font-bold text-xs transition-colors ${mode === 'main' ? 'bg-duo-blue text-white' : 'bg-white/10 text-slate-400'}`}
          >
            Sequence X
          </button>
          <button 
             onClick={() => setMode('sub')}
             className={`px-4 py-2 rounded-xl font-bold text-xs transition-colors ${mode === 'sub' ? 'bg-yellow-500 text-black' : 'bg-white/10 text-slate-400'}`}
          >
            Subsequence X'
          </button>
       </div>
    </div>
  );
};

export default SubsequenceCanvas;