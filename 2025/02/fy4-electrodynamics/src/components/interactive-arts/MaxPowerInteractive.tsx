import React, { useState } from 'react';

const MaxPowerInteractive: React.FC = () => {
  const[rl, setRl] = useState(5);
  const vth = 10;
  const rth = 5;

  const calculatePower = (rLoad: number) => {
    const i = vth / (rth + rLoad);
    return i * i * rLoad;
  };

  const currentPower = calculatePower(rl);
  const maxPower = calculatePower(rth);

  // Generate curve points
  const points =[];
  for (let r = 0; r <= 20; r += 0.5) {
    const p = calculatePower(r);
    const x = (r / 20) * 260; // 260 is max width
    const y = 120 - (p / maxPower) * 100; // 120 is max height, 100 is amplitude
    points.push(`${x},${y}`);
  }

  const currentX = (rl / 20) * 260;
  const currentY = 120 - (currentPower / maxPower) * 100;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[180px] bg-black/30 rounded-xl mb-6 border border-white/10 relative p-4 flex flex-col items-center justify-center">
        
        {/* Graph */}
        <svg width="280" height="140" viewBox="0 0 280 140" className="absolute top-2 left-[20px]">
           {/* Axes */}
           <line x1="0" y1="120" x2="260" y2="120" stroke="#64748b" strokeWidth="2" />
           <line x1="0" y1="0" x2="0" y2="120" stroke="#64748b" strokeWidth="2" />
           <text x="260" y="135" fill="#64748b" fontSize="10" textAnchor="end">R_L (Ω)</text>
           <text x="10" y="10" fill="#64748b" fontSize="10" textAnchor="start">Power (W)</text>

           {/* Power Curve */}
           <polyline points={points.join(' ')} fill="none" stroke="#3b82f6" strokeWidth="3" />
           
           {/* Marker for Rth */}
           <line x1={(rth/20)*260} y1="20" x2={(rth/20)*260} y2="120" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
           <text x={(rth/20)*260} y="135" fill="#f59e0b" fontSize="10" textAnchor="middle">R_th = {rth}Ω</text>

           {/* Current Value Marker */}
           <circle cx={currentX} cy={currentY} r="5" fill="#ef4444" stroke="#fff" strokeWidth="2" />
           <line x1={currentX} y1={currentY} x2={currentX} y2="120" stroke="#ef4444" strokeWidth="1" strokeDasharray="2" />
        </svg>

        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-[10px] text-white font-bold border border-white/10">
           P = {currentPower.toFixed(2)} W
        </div>
      </div>

      <div className="text-center mb-4 w-full px-4">
         <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${rl === rth ? 'bg-green-900/50 text-green-400 border border-green-500/50' : 'bg-blue-900/50 text-blue-400 border border-blue-500/50'}`}>
            {rl === rth ? 'Maximum Power Achieved!' : `Adjust R_L to maximize power`}
         </span>
      </div>

      <div className="w-full px-4 space-y-4">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-16">R_L (Ω)</span>
            <input type="range" min="0" max="20" step="0.5" value={rl} onChange={(e) => setRl(parseFloat(e.target.value))} className="flex-grow accent-red-500" />
         </div>
      </div>
    </div>
  );
};

export default MaxPowerInteractive;