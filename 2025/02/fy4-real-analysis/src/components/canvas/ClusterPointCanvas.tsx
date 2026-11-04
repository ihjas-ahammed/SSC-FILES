import React, { useState } from 'react';

const ClusterPointCanvas: React.FC = () => {
  const [epsilon, setEpsilon] = useState(0.5);
  const [center, setCenter] = useState<'0' | '1.5'>('0');

  // Set A = {1/n : n in N}
  const points = [];
  for (let n = 1; n <= 20; n++) {
    points.push(1 / n);
  }

  // Mapping: x from -0.5 to 2.5 -> SVG x from 20 to 280
  // width = 3.0. Scale = 260 / 3.0 = 86.67
  const mapX = (x: number) => 20 + (x + 0.5) * 86.67;
  const cx = center === '0' ? 0 : 1.5;

  // Check if any point is in neighborhood (excluding center)
  const pointsInNeighborhood = points.filter(p => Math.abs(p - cx) < epsilon && p !== cx);
  const isCluster = pointsInNeighborhood.length > 0; // True for c=0 always, false for c=1.5 if eps small

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 120" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Number Line */}
          <line x1="20" y1="60" x2="280" y2="60" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          
          {/* Ticks */}
          <line x1={mapX(0)} y1="55" x2={mapX(0)} y2="65" stroke="#94a3b8" strokeWidth="2" />
          <text x={mapX(0)} y="80" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">0</text>
          
          <line x1={mapX(1)} y1="55" x2={mapX(1)} y2="65" stroke="#94a3b8" strokeWidth="2" />
          <text x={mapX(1)} y="80" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">1</text>
          
          <line x1={mapX(2)} y1="55" x2={mapX(2)} y2="65" stroke="#94a3b8" strokeWidth="2" />
          <text x={mapX(2)} y="80" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">2</text>

          {/* Points of Set A */}
          {points.map((p, i) => (
             <circle key={i} cx={mapX(p)} cy="60" r="3" className="fill-duo-blue" />
          ))}

          {/* Epsilon Neighborhood */}
          <rect 
            x={mapX(cx - epsilon)} 
            y="45" 
            width={mapX(cx + epsilon) - mapX(cx - epsilon)} 
            height="30" 
            rx="4"
            className={`transition-all duration-300 stroke-2 ${isCluster ? 'fill-duo-green/20 stroke-duo-green' : 'fill-duo-red/20 stroke-duo-red'}`} 
          />
          
          {/* Target Center */}
          <circle cx={mapX(cx)} cy="60" r="4" className="fill-white stroke-black stroke-2" />
          
          {/* Label */}
          <text x={150} y="20" textAnchor="middle" className={`font-black text-sm transition-colors ${isCluster ? 'fill-duo-green' : 'fill-duo-red'}`}>
             {isCluster ? 'Points found in neighborhood!' : 'Neighborhood is empty!'}
          </text>
       </svg>

       <div className="flex flex-col w-full max-w-[250px] gap-4">
          <div className="flex justify-center gap-2">
             <button onClick={() => setCenter('0')} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${center === '0' ? 'bg-white text-black' : 'bg-white/10 text-slate-400'}`}>Center c = 0</button>
             <button onClick={() => setCenter('1.5')} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${center === '1.5' ? 'bg-white text-black' : 'bg-white/10 text-slate-400'}`}>Center c = 1.5</button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Epsilon (ε)</span>
            <input 
               type="range" min="0.05" max="0.8" step="0.05"
               value={epsilon} 
               onChange={(e) => setEpsilon(Number(e.target.value))}
               className="flex-grow accent-white"
            />
          </div>
       </div>
    </div>
  );
};

export default ClusterPointCanvas;