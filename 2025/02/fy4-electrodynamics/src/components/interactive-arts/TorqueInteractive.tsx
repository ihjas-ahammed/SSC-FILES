import React, { useState } from 'react';

const TorqueInteractive: React.FC = () => {
  const [theta, setTheta] = useState(45); // Angle in degrees
  
  // Convert angle to radians for math
  const rad = (theta * Math.PI) / 180;
  
  // Constants for visual scaling
  const B = 100; // B field visual length
  const F = 60; // Max Force visual length
  
  // Torque magnitude (normalized)
  const torque = Math.sin(rad);

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[220px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-center overflow-hidden">
        
        {/* Uniform B Field Background */}
        <svg width="320" height="220" viewBox="0 0 320 220" className="absolute inset-0 opacity-30">
          {[40, 80, 120, 160, 200].map(y => (
            <g key={y}>
              <line x1="20" y1={y} x2="300" y2={y} stroke="#3b82f6" strokeWidth="2" />
              <polygon points={`300,${y} 290,${y-4} 290,${y+4}`} fill="#3b82f6" />
            </g>
          ))}
          <text x="300" y="25" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="end">B</text>
        </svg>

        {/* Top-down view of the loop */}
        <svg width="320" height="220" viewBox="0 0 320 220" className="absolute inset-0">
          <g transform="translate(160, 110)">
            
            {/* Dashed reference line (perpendicular to B) */}
            <line x1="0" y1="-80" x2="0" y2="80" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
            
            {/* Loop cross-section (width b) */}
            <g transform={`rotate(${-theta})`}>
              {/* Normal Vector n */}
              <line x1="0" y1="0" x2="0" y2="-70" stroke="#10b981" strokeWidth="3" />
              <polygon points="0,-70 -4,-62 4,-62" fill="#10b981" />
              <text x="10" y="-60" fill="#10b981" fontSize="12" fontWeight="bold">n (Area)</text>
              
              {/* Loop wire (width b) */}
              <line x1="-50" y1="0" x2="50" y2="0" stroke="#fff" strokeWidth="4" />
              
              {/* Side 3 (Current IN/OUT) */}
              <circle cx="50" cy="0" r="6" fill="#f59e0b" />
              <text x="50" y="4" fill="#000" fontSize="10" textAnchor="middle">×</text>
              
              {/* Side 1 (Current OUT/IN) */}
              <circle cx="-50" cy="0" r="6" fill="#f59e0b" />
              <circle cx="-50" cy="0" r="2" fill="#000" />
            </g>

            {/* Forces on the wires */}
            {/* Force on right wire (F3) - Always points UP mathematically in this 2D projection if B is right and I is IN */}
            {/* F = I L x B. I is into page (-z), B is right (+x). (-z) x (+x) = (-y) which is UP on screen */}
            <g transform={`translate(${50 * Math.cos(-rad)}, ${50 * Math.sin(-rad)})`}>
               <line x1="0" y1="0" x2="0" y2={-F} stroke="#ef4444" strokeWidth="3" />
               <polygon points={`0,${-F} -4,${-F+8} 4,${-F+8}`} fill="#ef4444" />
               <text x="10" y={-F/2} fill="#ef4444" fontSize="12" fontWeight="bold">F</text>
            </g>

            {/* Force on left wire (F1) - Always points DOWN */}
            <g transform={`translate(${-50 * Math.cos(-rad)}, ${-50 * Math.sin(-rad)})`}>
               <line x1="0" y1="0" x2="0" y2={F} stroke="#ef4444" strokeWidth="3" />
               <polygon points={`0,${F} -4,${F-8} 4,${F-8}`} fill="#ef4444" />
               <text x="-15" y={F/2} fill="#ef4444" fontSize="12" fontWeight="bold">-F</text>
            </g>
            
            {/* Angle Arc */}
            <path d={`M 0 -30 A 30 30 0 0 1 ${30 * Math.sin(rad)} ${-30 * Math.cos(rad)}`} fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="15" y="-35" fill="#f59e0b" fontSize="12" fontWeight="bold">θ</text>
            
          </g>
        </svg>

      </div>

      <div className="w-full px-4 flex gap-4 text-center mb-4">
        <div className="flex-1 bg-blue-900/30 p-2 rounded-xl border border-blue-500/30">
          <span className="block text-[10px] text-blue-300 font-bold uppercase tracking-wider">Angle (θ)</span>
          <span className="text-lg text-white font-mono">{theta}°</span>
        </div>
        <div className="flex-1 bg-red-900/30 p-2 rounded-xl border border-red-500/30">
          <span className="block text-[10px] text-red-300 font-bold uppercase tracking-wider">Torque (τ)</span>
          <span className="text-lg text-white font-mono">{Math.abs(torque).toFixed(2)} τ_max</span>
        </div>
      </div>

      <div className="w-full px-4 space-y-4">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-16 text-right">Rotate</span>
            <input type="range" min="0" max="180" step="1" value={theta} onChange={(e) => setTheta(parseFloat(e.target.value))} className="flex-grow accent-amber-500" />
         </div>
      </div>
    </div>
  );
};

export default TorqueInteractive;