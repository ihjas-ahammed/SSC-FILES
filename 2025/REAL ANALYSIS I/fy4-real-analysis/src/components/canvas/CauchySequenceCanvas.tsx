import React, { useState } from 'react';

const CauchySequenceCanvas: React.FC = () => {
  const [seqType, setSeqType] = useState<'cauchy' | 'not-cauchy'>('cauchy');
  const [epsilon, setEpsilon] = useState(0.2);

  // Generate points
  // Cauchy: 1/n -> Clusters near 0
  // Not Cauchy: (-1)^n -> Bounces
  
  const points = [];
  for (let n = 1; n <= 20; n++) {
    let val;
    if (seqType === 'cauchy') {
      val = 1/n + 1; // Shifted up to 1
    } else {
      val = (n % 2 === 0) ? 1.5 : 0.5;
    }
    points.push({ n, val });
  }

  // Find H such that for all n, m >= H, |xn - xm| < epsilon
  let H = -1;
  if (seqType === 'cauchy') {
    for (let i = 0; i < points.length; i++) {
        let satisfied = true;
        for (let j = i; j < points.length; j++) {
            for (let k = i; k < points.length; k++) {
                if (Math.abs(points[j].val - points[k].val) >= epsilon) {
                    satisfied = false;
                    break;
                }
            }
            if (!satisfied) break;
        }
        if (satisfied) {
            H = points[i].n;
            break;
        }
    }
  }

  const mapX = (n: number) => 20 + ((n - 1) / 19) * 260;
  const mapY = (val: number) => 180 - (val / 2) * 160; // Scale 0..2

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 200" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Axis */}
          <line x1="20" y1="180" x2="280" y2="180" stroke="#475569" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="180" stroke="#475569" strokeWidth="2" />

          {/* H Marker */}
          {H !== -1 && (
             <>
                <line x1={mapX(H)} y1="20" x2={mapX(H)} y2="180" stroke="#58cc02" strokeWidth="2" />
                <rect x={mapX(H)} y="20" width={280 - mapX(H)} height="160" fill="rgba(88, 204, 2, 0.1)" />
                <text x={mapX(H)} y="195" textAnchor="middle" className="fill-duo-green font-bold text-xs">H</text>
             </>
          )}

          {/* Points */}
          {points.map((p, i) => (
             <circle 
                key={i} 
                cx={mapX(p.n)} 
                cy={mapY(p.val)} 
                r="3" 
                className={`transition-all duration-300 ${H !== -1 && p.n >= H ? 'fill-duo-green' : 'fill-duo-blue'}`}
             />
          ))}

          {/* Tail Band Visualization (Conceptual) */}
          {H !== -1 && (
             <rect 
                x={mapX(H)} 
                y={mapY(1 + epsilon/2)} // Center around limit 1
                width={280 - mapX(H)}
                height={mapY(1 - epsilon/2) - mapY(1 + epsilon/2)}
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeDasharray="4"
             />
          )}
       </svg>

       <div className="flex flex-col w-full max-w-[300px] gap-3">
          <div className="flex justify-center gap-2">
             <button onClick={() => setSeqType('cauchy')} className={`px-3 py-1 rounded text-xs font-bold ${seqType === 'cauchy' ? 'bg-duo-blue text-white' : 'bg-white/10 text-slate-400'}`}>Cauchy (1/n)</button>
             <button onClick={() => setSeqType('not-cauchy')} className={`px-3 py-1 rounded text-xs font-bold ${seqType === 'not-cauchy' ? 'bg-duo-red text-white' : 'bg-white/10 text-slate-400'}`}>Not Cauchy</button>
          </div>
          
          <div className="flex items-center gap-2">
             <span className="text-xs font-bold text-slate-400">ε: {epsilon.toFixed(2)}</span>
             <input 
                type="range" min="0.05" max="0.5" step="0.05"
                value={epsilon} 
                onChange={(e) => setEpsilon(Number(e.target.value))}
                className="flex-grow accent-duo-blue"
             />
          </div>
       </div>
    </div>
  );
};

export default CauchySequenceCanvas;