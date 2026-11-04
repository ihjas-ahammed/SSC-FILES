import React, { useState } from 'react';
import { Wind } from 'lucide-react';

const WindmillView: React.FC = () => {
  const [windSpeed, setWindSpeed] = useState<number>(0);

  // Rotation duration inverse to windSpeed. 
  // If windSpeed is 0, no animation.
  // If windSpeed is 100, very fast (0.5s)
  const animationDuration = windSpeed > 0 ? 5 - (windSpeed / 100) * 4.5 : 0;
  const isPumping = windSpeed > 20;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 select-none touch-none-canvas bg-gradient-to-b from-sky-900/40 to-amber-900/20">
      
      <div className="relative w-48 h-48 mb-4 flex items-end justify-center">
        {/* Tower */}
        <div className="absolute bottom-0 w-8 h-32 bg-slate-700/80 border-x-4 border-slate-900 clip-path-tower z-10" 
             style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0% 100%)' }} />
        
        {/* Blades container */}
        <div className="absolute top-8 z-20">
          <div 
             className="relative w-24 h-24 flex items-center justify-center transition-all"
             style={{ 
               animation: windSpeed > 0 ? `spin ${animationDuration}s linear infinite` : 'none' 
             }}
          >
            {/* 4 Blades */}
            <div className="absolute w-2 h-24 bg-slate-300 rounded-sm" />
            <div className="absolute w-24 h-2 bg-slate-300 rounded-sm" />
            {/* Center hub */}
            <div className="absolute w-4 h-4 bg-amber-500 rounded-full z-30" />
          </div>
        </div>

        {/* Water Pump output */}
        <div className="absolute bottom-0 -right-12 w-16 h-12 border-l-4 border-t-4 border-slate-600 rounded-tl-lg" />
        
        {/* Water flowing */}
        {isPumping && (
           <div className="absolute bottom-0 -right-6 w-3 h-8 bg-blue-400/80 animate-pulse rounded-b-md" />
        )}
        
        {/* Crop field */}
        <div className="absolute bottom-0 -left-16 w-48 h-2 bg-green-800/50 rounded-full" />
        {isPumping && (
           <div className="absolute bottom-2 -left-12 flex gap-3">
             <div className="w-1 h-3 bg-green-500 rounded-t-sm" />
             <div className="w-1.5 h-4 bg-green-400 rounded-t-sm" />
             <div className="w-1 h-3 bg-green-500 rounded-t-sm" />
           </div>
        )}
      </div>

      {/* Slider Controls */}
      <div className="w-full max-w-[200px] flex flex-col items-center z-30">
        <div className="flex items-center gap-2 mb-2 w-full justify-between">
          <Wind className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Wind Speed</span>
          <Wind className="w-5 h-5 text-sky-400" />
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={windSpeed} 
          onChange={(e) => setWindSpeed(parseInt(e.target.value))}
          className="range-slider"
        />
        <p className="text-xs font-medium text-slate-400 mt-4 h-4 transition-opacity text-center">
          {windSpeed > 20 ? "Water is pumping! Crops are saved." : "Increase wind to generate power."}
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default WindmillView;