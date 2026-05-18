import React, { useState } from 'react';
import { Search } from 'lucide-react';

const MicroscopeView: React.FC = () => {
  const [focus, setFocus] = useState<number>(10);

  // 100 is perfectly focused, 0 is completely blurred out
  const blurAmount = Math.abs(100 - focus) / 8; // Max blur around 12px
  const opacityAmount = Math.max(0.1, focus / 100);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 select-none touch-none-canvas">
      <div className="relative w-40 h-40 rounded-full border-4 border-slate-700 microscope-lens overflow-hidden mb-6 flex items-center justify-center">
        
        {/* Background texture representing a drop of water */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>

        {/* The Animalcules */}
        <svg width="100" height="100" viewBox="0 0 100 100" className="absolute z-10">
          <g className="animalcule" style={{ filter: `blur(${blurAmount}px)`, opacity: opacityAmount }}>
            {/* Bug 1 */}
            <path d="M 20 30 Q 30 20 40 30 T 50 35" fill="none" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />
            <circle cx="20" cy="30" r="4" fill="#58cc02" />
            <circle cx="18" cy="28" r="1" fill="#000" />
            
            {/* Bug 2 */}
            <path d="M 60 70 Q 75 60 80 80 T 90 70" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="80" cy="80" r="5" fill="#1cb0f6" />
            <circle cx="78" cy="82" r="1.5" fill="#000" />
            
            {/* Bug 3 */}
            <path d="M 30 70 Q 20 80 15 65" fill="none" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />
            <circle cx="30" cy="70" r="3" fill="#ff4b4b" />
          </g>
        </svg>

        {/* Grid lines to make it look like a lens */}
        <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute w-full h-[1px] bg-white/10 top-1/2 pointer-events-none"></div>
        <div className="absolute h-full w-[1px] bg-white/10 left-1/2 pointer-events-none"></div>

      </div>

      {/* Slider Controls */}
      <div className="w-full max-w-[200px] flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2 w-full justify-between">
          <Search className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Focus Lens</span>
          <Search className="w-5 h-5 text-duo-blue" />
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={focus} 
          onChange={(e) => setFocus(parseInt(e.target.value))}
          className="range-slider"
        />
        
        <p className="text-xs font-medium text-slate-400 mt-4 h-4 transition-opacity text-center">
          {focus > 85 ? "Perfect! 'Animalcules' visible." : "Adjust the focus to see what's hidden."}
        </p>
      </div>
    </div>
  );
};

export default MicroscopeView;