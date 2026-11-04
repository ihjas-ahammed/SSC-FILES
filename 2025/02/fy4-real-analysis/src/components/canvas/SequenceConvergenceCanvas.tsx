import React, { useState } from 'react';

const SequenceConvergenceCanvas: React.FC = () => {
  const [seqType, setSeqType] = useState<'harmonic' | 'alternating' | 'divergent'>('harmonic');
  const [epsilon, setEpsilon] = useState(0.2);

  // Generate points based on sequence type
  const points: {n: number, val: number}[] = [];
  let limit = 0;
  let label = "";

  for (let n = 1; n <= 20; n++) {
    let val = 0;
    if (seqType === 'harmonic') {
      val = 1/n;
      limit = 0;
      label = "xₙ = 1/n";
    } else if (seqType === 'alternating') {
      val = 1 + (Math.pow(-1, n) / n);
      limit = 1;
      label = "xₙ = 1 + (-1)ⁿ/n";
    } else if (seqType === 'divergent') {
      val = (n % 2 === 0) ? 1 : -1;
      limit = 0; // Fake limit for visualization
      label = "xₙ = (-1)ⁿ (Divergent)";
    }
    points.push({n, val});
  }

  // Find K where all subsequent points are within epsilon
  let K = -1;
  if (seqType !== 'divergent') {
    for (let i = 0; i < points.length; i++) {
        let allWithin = true;
        for (let j = i; j < points.length; j++) {
            if (Math.abs(points[j].val - limit) >= epsilon) {
                allWithin = false;
                break;
            }
        }
        if (allWithin) {
            K = points[i].n;
            break;
        }
    }
  }

  // Scale coordinates
  // n: 1..20 -> x: 20..280
  // val: -1.5..1.5 -> y: 140..10
  
  const mapX = (n: number) => 20 + ((n - 1) / 19) * 260;
  const mapY = (v: number) => 100 - (v * 50); // Center 0 at y=100

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 200" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Axes */}
          <line x1="20" y1="100" x2="280" y2="100" stroke="#475569" strokeWidth="1" /> {/* X axis (Limit line for 0) */}
          <line x1="20" y1="20" x2="20" y2="180" stroke="#475569" strokeWidth="1" />   {/* Y axis */}

          {/* Epsilon Band */}
          {seqType !== 'divergent' && (
            <rect 
                x="20" 
                y={mapY(limit + epsilon)} 
                width="260" 
                height={mapY(limit - epsilon) - mapY(limit + epsilon)} 
                fill="rgba(28, 176, 246, 0.15)" 
                stroke="rgba(28, 176, 246, 0.3)"
                strokeDasharray="4"
            />
          )}
          
          {/* Limit Line */}
          {seqType !== 'divergent' && (
             <line x1="20" y1={mapY(limit)} x2="280" y2={mapY(limit)} stroke="#1cb0f6" strokeWidth="1" strokeDasharray="2" />
          )}

          {/* K Marker */}
          {K !== -1 && (
             <>
               <line x1={mapX(K)} y1="20" x2={mapX(K)} y2="180" stroke="#58cc02" strokeWidth="2" />
               <text x={mapX(K)} y="195" textAnchor="middle" className="fill-duo-green font-bold text-xs">K({epsilon.toFixed(2)})={K}</text>
             </>
          )}

          {/* Points */}
          {points.map((p, i) => (
             <circle 
                key={i} 
                cx={mapX(p.n)} 
                cy={mapY(p.val)} 
                r="3" 
                className={`transition-all duration-300 ${K !== -1 && p.n >= K ? "fill-duo-green" : "fill-white"}`} 
             />
          ))}
          
          <text x="150" y="15" textAnchor="middle" className="fill-slate-400 text-xs font-bold">{label}</text>
       </svg>

       <div className="flex flex-col w-full max-w-[300px] gap-3">
          <div className="flex justify-center gap-2">
             <button onClick={() => setSeqType('harmonic')} className={`px-3 py-1 rounded text-xs font-bold ${seqType === 'harmonic' ? 'bg-duo-blue text-white' : 'bg-white/10 text-slate-400'}`}>1/n</button>
             <button onClick={() => setSeqType('alternating')} className={`px-3 py-1 rounded text-xs font-bold ${seqType === 'alternating' ? 'bg-duo-blue text-white' : 'bg-white/10 text-slate-400'}`}>Alt</button>
             <button onClick={() => setSeqType('divergent')} className={`px-3 py-1 rounded text-xs font-bold ${seqType === 'divergent' ? 'bg-duo-red text-white' : 'bg-white/10 text-slate-400'}`}>Div</button>
          </div>
          
          {seqType !== 'divergent' && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">ε: {epsilon.toFixed(2)}</span>
                <input 
                    type="range" min="0.05" max="0.8" step="0.05"
                    value={epsilon} 
                    onChange={(e) => setEpsilon(Number(e.target.value))}
                    className="flex-grow accent-duo-blue"
                />
              </div>
          )}
       </div>
    </div>
  );
};

export default SequenceConvergenceCanvas;