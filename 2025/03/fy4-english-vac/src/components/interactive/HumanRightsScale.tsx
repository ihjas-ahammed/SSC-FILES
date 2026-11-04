import React, { useState } from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

const HumanRightsScale: React.FC = () => {
  const [level, setLevel] = useState(1);

  const handleEmpower = () => {
    if (level < 3) setLevel(l => l + 1);
  };

  // Rotation calculates based on level (1 = tilted left (-20deg), 3 = balanced (0deg))
  const rotation = -20 + ((level - 1) * 10);
  const isBalanced = level === 3;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 select-none touch-none-canvas">
      <div className="relative w-48 h-32 mb-6 mt-6">
        {/* Stand Base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-600 rounded-t-lg shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-3 h-24 bg-slate-500 rounded-t-full" />
        
        {/* Pivot Point */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-300 rounded-full z-20 shadow-sm" />

        {/* Beam */}
        <div 
          className="absolute top-[1.10rem] left-1/2 w-44 h-1.5 bg-slate-300 origin-center transition-transform duration-700 ease-out z-10 rounded-full"
          style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
        >
          {/* Left Pan (Status Quo / Privileged) */}
          <div 
            className="absolute -left-4 top-0 w-10 h-16 border-x-2 border-b-2 border-slate-400 rounded-b-xl flex flex-col justify-end items-center pb-1 origin-top transition-transform duration-700 bg-white/5"
            style={{ transform: `rotate(${-rotation}deg)` }}
          >
            <div className="w-7 h-4 bg-slate-400 mb-0.5 rounded-sm shadow-sm" />
            <div className="w-7 h-4 bg-slate-400 mb-0.5 rounded-sm shadow-sm" />
            <div className="w-7 h-4 bg-slate-400 rounded-sm shadow-sm" />
          </div>

          {/* Right Pan (Marginalized / Vulnerable) */}
          <div 
            className="absolute -right-4 top-0 w-10 h-16 border-x-2 border-b-2 border-slate-400 rounded-b-xl flex flex-col justify-end items-center pb-1 origin-top transition-transform duration-700 bg-white/5"
            style={{ transform: `rotate(${-rotation}deg)` }}
          >
            {level >= 3 && <div className="w-7 h-4 bg-duo-violet mb-0.5 rounded-sm animate-in zoom-in duration-300 shadow-sm" />}
            {level >= 2 && <div className="w-7 h-4 bg-duo-green mb-0.5 rounded-sm animate-in zoom-in duration-300 shadow-sm" />}
            <div className="w-7 h-4 bg-duo-blue rounded-sm shadow-sm" />
          </div>
        </div>
      </div>

      <button
        onClick={handleEmpower}
        disabled={isBalanced}
        className={`relative overflow-hidden px-6 py-3 rounded-xl font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg mb-2
          ${isBalanced
            ? 'bg-duo-green text-white border-b-4 border-duo-green-dark scale-105'
            : 'bg-duo-blue text-white hover:bg-blue-500 active:scale-95 border-b-4 border-duo-blue-dark active:border-b-0 active:translate-y-1'
          }`}
      >
        {isBalanced ? (
          <>
            <ShieldCheck className="w-5 h-5" /> Equality Reached
          </>
        ) : (
          <>
            <ArrowUp className="w-5 h-5" /> Empower
          </>
        )}
      </button>
      
      <p className="text-xs font-medium text-slate-400 text-center h-4 transition-opacity">
        {isBalanced ? "A resilient society requires equality for all." : "Add support to balance the scale."}
      </p>
    </div>
  );
};

export default HumanRightsScale;