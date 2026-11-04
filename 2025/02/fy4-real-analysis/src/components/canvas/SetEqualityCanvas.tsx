import React, { useState } from 'react';

const SetEqualityCanvas: React.FC = () => {
  const [overlap, setOverlap] = useState(0);

  // Calculate positions: At overlap=0 they are apart, at overlap=100 they share cx=150
  const cxA = 100 + (overlap * 0.5);
  const cxB = 200 - (overlap * 0.5);

  const isEqual = overlap === 100;

  return (
    <div className="flex flex-col w-full h-full p-4 select-none touch-none-canvas">
      <div className="flex-grow relative w-full h-full">
        <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
          {/* Circle A */}
          <circle cx={cxA} cy="75" r="50" className="transition-all duration-75" fill="rgba(28, 176, 246, 0.4)" stroke="#1cb0f6" strokeWidth="4" />
          <text x={cxA - 15} y="80" className="transition-all duration-75 fill-white font-bold text-xl pointer-events-none">A</text>
          
          {/* Circle B */}
          <circle cx={cxB} cy="75" r="50" className="transition-all duration-75" fill="rgba(88, 204, 2, 0.4)" stroke="#58cc02" strokeWidth="4" />
          <text x={cxB + 5} y="80" className="transition-all duration-75 fill-white font-bold text-xl pointer-events-none">B</text>

          {isEqual && (
            <text x="150" y="75" textAnchor="middle" className="fill-white font-black text-2xl drop-shadow-md animate-in zoom-in">A = B</text>
          )}
        </svg>
      </div>

      <div className="mt-4 px-6 flex items-center gap-4">
        <span className="text-slate-400 font-bold text-sm">Apart</span>
        <input 
          type="range" 
          min="0" max="100" 
          value={overlap} 
          onChange={(e) => setOverlap(Number(e.target.value))}
          className="flex-grow accent-duo-blue"
        />
        <span className="text-slate-400 font-bold text-sm">Equal</span>
      </div>
    </div>
  );
};

export default SetEqualityCanvas;