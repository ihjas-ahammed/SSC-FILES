import React, { useState } from 'react';

const MonotoneConvergenceCanvas: React.FC = () => {
  const [seqType, setSeqType] = useState<'bounded' | 'unbounded'>('bounded');
  const [nMax, setNMax] = useState(20);

  // Generate sequence points
  const points = [];
  const limit = 4; // Arbitrary limit for bounded example

  for (let n = 1; n <= nMax; n++) {
    let val;
    if (seqType === 'bounded') {
      // Increasing bounded: 4 - 4/n
      val = limit - 4/n;
    } else {
      // Increasing unbounded: n/2
      val = n / 2;
    }
    points.push({ n, val });
  }

  // Scale coordinates
  // X: 1..nMax -> 20..280
  // Y: 0..limit+1 (or nMax/2) -> 180..20
  
  const maxYValue = seqType === 'bounded' ? limit + 1 : nMax / 2 + 1;
  
  const mapX = (n: number) => 20 + ((n - 1) / (nMax - 1)) * 260;
  const mapY = (val: number) => 180 - (val / maxYValue) * 160;

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 200" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Axes */}
          <line x1="20" y1="180" x2="280" y2="180" stroke="#475569" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="180" stroke="#475569" strokeWidth="2" />

          {/* Limit Line (if bounded) */}
          {seqType === 'bounded' && (
             <>
               <line x1="20" y1={mapY(limit)} x2="280" y2={mapY(limit)} stroke="#58cc02" strokeWidth="2" strokeDasharray="4" />
               <text x="290" y={mapY(limit) + 4} className="fill-duo-green font-bold text-xs">Sup</text>
             </>
          )}

          {/* Points */}
          {points.map((p, i) => (
             <circle 
                key={i} 
                cx={mapX(p.n)} 
                cy={mapY(p.val)} 
                r="3" 
                className="fill-duo-blue transition-all duration-300"
             />
          ))}

          {/* Connecting Line (visual aid) */}
          <polyline 
             points={points.map(p => `${mapX(p.n)},${mapY(p.val)}`).join(' ')}
             fill="none"
             stroke="#1cb0f6"
             strokeWidth="1"
             opacity="0.5"
          />
       </svg>

       <div className="flex gap-4">
          <button 
             onClick={() => setSeqType('bounded')}
             className={`px-4 py-2 rounded-xl font-bold text-xs transition-colors ${seqType === 'bounded' ? 'bg-duo-green text-white' : 'bg-white/10 text-slate-400'}`}
          >
            Bounded Increasing
          </button>
          <button 
             onClick={() => setSeqType('unbounded')}
             className={`px-4 py-2 rounded-xl font-bold text-xs transition-colors ${seqType === 'unbounded' ? 'bg-duo-red text-white' : 'bg-white/10 text-slate-400'}`}
          >
            Unbounded Increasing
          </button>
       </div>
    </div>
  );
};

export default MonotoneConvergenceCanvas;