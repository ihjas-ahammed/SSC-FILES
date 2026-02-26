import React, { useState } from 'react';

const EpsilonDeltaCanvas: React.FC = () => {
  const [epsilon, setEpsilon] = useState(1);
  const [delta, setDelta] = useState(1.5);

  // We are visualizing f(x) = 0.5 * x^2 + 1 around c = 2. Limit L = 3.
  const c = 2;
  const L = 3;

  // Map x: 0 to 4 -> 40 to 260. Scale = 220 / 4 = 55
  const mapX = (x: number) => 40 + x * 55;
  // Map y: 0 to 6 -> 180 to 20. Scale = -160 / 6 = -26.67
  const mapY = (y: number) => 180 - y * 26.67;

  const calculateY = (x: number) => 0.5 * x * x + 1;

  // Generate curve path
  const points = [];
  for (let x = 0; x <= 4; x += 0.1) {
    points.push(`${mapX(x)},${mapY(calculateY(x))}`);
  }
  const pathData = `M ${points.join(' L ')}`;

  // Determine if valid (all points in [c-delta, c+delta] must map to [L-epsilon, L+epsilon])
  const yLeft = calculateY(c - delta);
  const yRight = calculateY(c + delta);
  
  // Since f is strictly increasing here, we just check endpoints
  const isValid = yLeft >= L - epsilon && yRight <= L + epsilon;

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 200" className="w-full max-w-[350px] mb-4 overflow-visible">
          {/* Axes */}
          <line x1="30" y1="180" x2="280" y2="180" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1="10" x2="40" y2="190" stroke="#475569" strokeWidth="2" />

          {/* Epsilon Band (Horizontal) */}
          <rect 
             x="40" 
             y={mapY(L + epsilon)} 
             width="240" 
             height={mapY(L - epsilon) - mapY(L + epsilon)} 
             fill="rgba(28, 176, 246, 0.15)" 
          />
          <line x1="35" y1={mapY(L + epsilon)} x2="280" y2={mapY(L + epsilon)} stroke="#1cb0f6" strokeWidth="1" strokeDasharray="4" />
          <line x1="35" y1={mapY(L - epsilon)} x2="280" y2={mapY(L - epsilon)} stroke="#1cb0f6" strokeWidth="1" strokeDasharray="4" />
          <text x="15" y={mapY(L)} textAnchor="middle" className="fill-duo-blue font-bold text-[10px]">L</text>

          {/* Delta Band (Vertical) */}
          <rect 
             x={mapX(c - delta)} 
             y="20" 
             width={mapX(c + delta) - mapX(c - delta)} 
             height="160" 
             fill={isValid ? "rgba(88, 204, 2, 0.15)" : "rgba(255, 75, 75, 0.15)"} 
             className="transition-colors duration-300"
          />
          <line x1={mapX(c - delta)} y1="20" x2={mapX(c - delta)} y2="185" stroke={isValid ? "#58cc02" : "#ff4b4b"} strokeWidth="1" strokeDasharray="4" className="transition-colors duration-300" />
          <line x1={mapX(c + delta)} y1="20" x2={mapX(c + delta)} y2="185" stroke={isValid ? "#58cc02" : "#ff4b4b"} strokeWidth="1" strokeDasharray="4" className="transition-colors duration-300" />
          <text x={mapX(c)} y="195" textAnchor="middle" className="fill-white font-bold text-[10px]">c</text>

          {/* Function Curve */}
          <path d={pathData} fill="none" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />

          {/* Target Point */}
          <circle cx={mapX(c)} cy={mapY(L)} r="4" fill="#f8fafc" />

          {/* Intersections indicating boundary */}
          <circle cx={mapX(c - delta)} cy={mapY(yLeft)} r="3" fill={isValid ? "#58cc02" : "#ff4b4b"} className="transition-colors duration-300" />
          <circle cx={mapX(c + delta)} cy={mapY(yRight)} r="3" fill={isValid ? "#58cc02" : "#ff4b4b"} className="transition-colors duration-300" />
       </svg>

       <div className="flex flex-col w-full max-w-[280px] gap-3">
          <div className="flex items-center gap-4 bg-blue-900/20 p-2 rounded-xl border border-blue-500/30">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest w-20">Epsilon</span>
            <input 
               type="range" min="0.5" max="2" step="0.1"
               value={epsilon} 
               onChange={(e) => setEpsilon(Number(e.target.value))}
               className="flex-grow accent-duo-blue"
            />
          </div>
          
          <div className={`flex items-center gap-4 p-2 rounded-xl border transition-colors ${isValid ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
            <span className={`font-bold text-xs uppercase tracking-widest w-20 ${isValid ? 'text-green-400' : 'text-red-400'}`}>Delta</span>
            <input 
               type="range" min="0.2" max="1.5" step="0.05"
               value={delta} 
               onChange={(e) => setDelta(Number(e.target.value))}
               className={`flex-grow ${isValid ? 'accent-duo-green' : 'accent-duo-red'}`}
            />
          </div>
          
          <div className="text-center mt-1">
             <span className={`text-xs font-black uppercase tracking-widest ${isValid ? 'text-duo-green' : 'text-duo-red'}`}>
               {isValid ? 'Valid: f(x) stays within Epsilon bounds!' : 'Invalid: f(x) escapes Epsilon bounds!'}
             </span>
          </div>
       </div>
    </div>
  );
};

export default EpsilonDeltaCanvas;