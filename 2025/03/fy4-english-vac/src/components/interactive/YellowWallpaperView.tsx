import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const YellowWallpaperView: React.FC = () => {
  const [days, setDays] = useState<number>(1);
  const intensity = days / 90;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 select-none touch-none-canvas bg-gradient-to-b from-amber-900/10 to-yellow-900/20">
      <div className="relative w-full max-w-[240px] aspect-square rounded-2xl border-4 border-amber-900/80 overflow-hidden mb-6 bg-[#d4b86a] shadow-inner">
        
        {/* The Woman (Behind the pattern) */}
        <div 
          className="absolute inset-0 bg-black/80 transition-opacity duration-1000 flex items-center justify-center"
          style={{ opacity: intensity * 0.7 }}
        >
           <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-90">
             <path d="M 30 80 Q 50 30 70 80" stroke="#111" strokeWidth="12" fill="none" strokeLinecap="round" />
             <circle cx="50" cy="35" r="10" fill="#111" />
           </svg>
        </div>

        {/* The Bars (Sub-pattern) */}
        <div 
          className="absolute inset-0 flex justify-evenly px-4 transition-opacity duration-1000"
          style={{ opacity: intensity > 0.3 ? (intensity - 0.3) * 1.5 : 0 }}
        >
          <div className="w-5 h-full bg-amber-900/60 mix-blend-multiply" />
          <div className="w-5 h-full bg-amber-900/60 mix-blend-multiply" />
          <div className="w-5 h-full bg-amber-900/60 mix-blend-multiply" />
          <div className="w-5 h-full bg-amber-900/60 mix-blend-multiply" />
        </div>

        {/* The Front Pattern (Fungus/Florid Arabesque) */}
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMjBRMjAgMCA0MCAyMFEyMCA0MCAwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjg4NjBiIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] transition-all duration-1000"
          style={{ 
            opacity: 1 - (intensity * 0.4),
            transform: `scale(${1 + intensity * 0.3}) rotate(${intensity * 10}deg)`,
            filter: `contrast(${1 + intensity}) saturate(${1 + intensity * 2})`
          }}
        />
        
        {/* The Eyes (Bulbous) */}
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: intensity > 0.5 ? (intensity - 0.5) * 2 : 0 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          ))}
        </div>
        
        {/* Peeled Paper effect at the end */}
        <div 
           className="absolute bottom-0 right-0 w-full h-1/2 bg-[#0b0f19] origin-bottom-right transition-transform duration-1000"
           style={{ transform: `scale(${intensity > 0.95 ? 1 : 0})` }}
        />
      </div>

      <div className="w-full max-w-[220px] flex flex-col items-center z-30">
        <div className="flex items-center gap-2 mb-2 w-full justify-between">
          <Clock className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Days in Isolation</span>
          <span className="text-xs font-black text-amber-500">{days}</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="90" 
          value={days} 
          onChange={(e) => setDays(parseInt(e.target.value))}
          className="range-slider w-full"
          style={{ accentColor: '#f59e0b' }}
        />
        <p className="text-[11px] font-medium text-amber-400 mt-4 h-4 transition-opacity text-center">
          {days < 30 ? "A dull, irritating pattern." : 
           days < 60 ? "The sub-pattern begins to show as bars." : 
           days < 85 ? "There is a woman creeping behind the bars." :
           "I've got out at last!"}
        </p>
      </div>
    </div>
  );
};

export default YellowWallpaperView;