import React, { useState } from 'react';

const SqueezeTheoremCanvas: React.FC = () => {
  const [nMax, setNMax] = useState(20);

  // Sequences
  // Upper: 1/n + 1 (shifted for visual clarity) -> 1
  // Lower: -1/n + 1 -> 1
  // Middle: sin(n)/n + 1 -> 1
  
  // Actually, standard squeeze example: -1/n <= sin(n)/n <= 1/n -> 0
  // Let's shift everything up by 2 so it fits nicely in SVG y-coords
  
  const points = [];
  for (let n = 1; n <= nMax; n++) {
    points.push({
      n,
      upper: 2 + 1.5/n,
      lower: 2 - 1.5/n,
      middle: 2 + (Math.sin(n * 2) * 1.5) / n // mult n by 2 to make oscillation faster visually
    });
  }

  // Map to SVG
  // X: 1..nMax -> 20..280
  // Y: 0..4 -> 180..20
  const mapX = (n: number) => 20 + ((n - 1) / (nMax - 1)) * 260;
  const mapY = (val: number) => 180 - (val / 4) * 160;

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 200" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Limit Line */}
          <line x1="20" y1={mapY(2)} x2="280" y2={mapY(2)} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
          <text x="290" y={mapY(2) + 4} className="fill-slate-400 text-xs font-bold">L</text>

          {/* Sequences */}
          {points.map((p, i) => (
             <g key={i}>
                {/* Upper */}
                <circle cx={mapX(p.n)} cy={mapY(p.upper)} r="2" fill="#58cc02" opacity="0.6" />
                {/* Lower */}
                <circle cx={mapX(p.n)} cy={mapY(p.lower)} r="2" fill="#ff4b4b" opacity="0.6" />
                {/* Middle */}
                <circle cx={mapX(p.n)} cy={mapY(p.middle)} r="3" fill="#1cb0f6" className="transition-all duration-300" />
             </g>
          ))}
          
          {/* Legend */}
          <text x="30" y="20" className="fill-duo-green text-[10px] font-bold">Upper Bound</text>
          <text x="30" y="190" className="fill-duo-red text-[10px] font-bold">Lower Bound</text>
          <text x="150" y="20" className="fill-duo-blue text-[10px] font-bold text-center">Squeezed Sequence</text>
       </svg>

       <div className="w-full max-w-[250px] flex items-center gap-4">
         <span className="text-slate-400 font-bold text-xs">Zoom Out</span>
         <input 
            type="range" min="10" max="50" 
            value={nMax} 
            onChange={(e) => setNMax(Number(e.target.value))}
            className="flex-grow accent-duo-blue"
         />
       </div>
    </div>
  );
};

export default SqueezeTheoremCanvas;