import React, { useState } from 'react';
import { Activity } from 'lucide-react';

const DNAEpigeneticsView: React.FC = () => {
  const [stress, setStress] = useState<number>(0);

  // Stress goes from 0 (relaxed) to 100 (high stress/trauma)
  const isKnotted = stress > 60;
  const opacityAmount = 1 - (stress / 100);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 select-none touch-none-canvas bg-gradient-to-br from-indigo-900/30 to-purple-900/20">
      
      <div className="relative w-full max-w-[250px] h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner">
        
        {/* Gene Expression Glow (Background) */}
        <div 
          className="absolute inset-0 bg-duo-green/20 transition-opacity duration-700 blur-xl"
          style={{ opacity: isKnotted ? 0 : opacityAmount }}
        />
        
        {/* DNA Strand SVG */}
        <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg z-10 overflow-visible">
          {/* Relaxed state vs Knotted state using CSS paths */}
          <path 
            d={isKnotted 
              ? "M 20 50 Q 50 10 70 50 T 100 50 Q 120 90 140 50 T 180 50" 
              : "M 20 50 Q 40 20 60 50 T 100 50 Q 120 80 140 50 T 180 50"}
            fill="none" 
            stroke="rgba(206, 130, 255, 0.4)" 
            strokeWidth="4" 
            className="transition-all duration-700"
          />
          <path 
            d={isKnotted 
              ? "M 20 50 Q 50 90 70 50 T 100 50 Q 120 10 140 50 T 180 50" 
              : "M 20 50 Q 40 80 60 50 T 100 50 Q 120 20 140 50 T 180 50"}
            fill="none" 
            stroke="rgba(28, 176, 246, 0.4)" 
            strokeWidth="4" 
            className="transition-all duration-700"
          />

          {/* Base pairs & Epigenetic Markers (Knots) */}
          {[40, 80, 120, 160].map((x, i) => (
            <g key={i} className="transition-all duration-700" style={{ transform: isKnotted ? `scaleY(0.5) translateY(25px)` : 'none' }}>
              <line x1={x} y1="35" x2={x} y2="65" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              {/* Methylation Markers (The 'Knots') */}
              <circle 
                cx={x} 
                cy={isKnotted ? 50 : (i % 2 === 0 ? 35 : 65)} 
                r={isKnotted ? 6 : 0} 
                fill="#ff4b4b" 
                className="transition-all duration-500 delay-100"
              />
            </g>
          ))}
        </svg>

        {/* Status Text Overlay */}
        <div className="absolute top-3 left-3 bg-black/60 px-2 py-1 rounded-md border border-white/10 z-20">
          <p className={`text-[10px] font-black uppercase tracking-wider ${isKnotted ? 'text-duo-red' : 'text-duo-green'}`}>
            Gene Expression: {isKnotted ? 'Silenced' : 'Active'}
          </p>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="w-full max-w-[200px] flex flex-col items-center z-30">
        <div className="flex items-center gap-2 mb-2 w-full justify-between">
          <Activity className="w-4 h-4 text-slate-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trauma / Stress Level</span>
          <Activity className="w-5 h-5 text-duo-red" />
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={stress} 
          onChange={(e) => setStress(parseInt(e.target.value))}
          className="range-slider w-full"
          style={{ accentColor: '#ff4b4b' }}
        />
        <p className="text-[10px] font-medium text-slate-400 mt-4 h-6 transition-opacity text-center leading-tight">
          {stress < 30 ? "DNA is relaxed. Genes can be freely read and expressed." : 
           stress < 60 ? "Environmental stress causes DNA to begin coiling tightly." : 
           "DNA forms 'knots' (methylation), silencing stress-reduction genes."}
        </p>
      </div>
    </div>
  );
};

export default DNAEpigeneticsView;