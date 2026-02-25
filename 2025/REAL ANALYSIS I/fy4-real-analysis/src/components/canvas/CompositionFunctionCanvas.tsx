import React, { useState } from 'react';

const CompositionFunctionCanvas: React.FC = () => {
  const [progress, setProgress] = useState(0); // 0 to 100

  // Calculate ball positions based on progress
  // Ball 1: 0 to 40% (moves to first box)
  const showBall1 = progress <= 40;
  const cx1 = 20 + (progress / 40) * 80; // moves 20 to 100

  // Ball 2: 40 to 80% (moves between boxes)
  const showBall2 = progress > 40 && progress <= 80;
  const cx2 = 100 + ((progress - 40) / 40) * 100; // moves 100 to 200

  // Ball 3: 80 to 100% (moves to output)
  const showBall3 = progress > 80;
  const cx3 = 200 + ((progress - 80) / 20) * 80; // moves 200 to 280

  const valueLabel = showBall1 ? 'x' : showBall2 ? 'f(x)' : 'g(f(x))';
  const colorClass = showBall1 ? 'fill-white' : showBall2 ? 'fill-duo-blue' : 'fill-duo-green';
  const currentCx = showBall1 ? cx1 : showBall2 ? cx2 : cx3;

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 150" className="w-full max-w-[350px] mb-6 overflow-visible">
          {/* Path Line */}
          <line x1="20" y1="75" x2="280" y2="75" stroke="#334155" strokeWidth="4" strokeDasharray="8" />

          {/* Machine f */}
          <rect x="80" y="45" width="40" height="60" rx="8" fill="#1e293b" stroke="#1cb0f6" strokeWidth="3" />
          <text x="100" y="80" textAnchor="middle" className="fill-white font-black text-xl">f</text>

          {/* Machine g */}
          <rect x="180" y="45" width="40" height="60" rx="8" fill="#1e293b" stroke="#58cc02" strokeWidth="3" />
          <text x="200" y="80" textAnchor="middle" className="fill-white font-black text-xl">g</text>

          {/* Moving Value */}
          <g style={{ transform: `translateX(${currentCx - 20}px)` }} className="transition-none">
             <circle cx="20" cy="75" r="10" className={`${colorClass} shadow-lg`} />
             <text x="20" y="55" textAnchor="middle" className={`font-bold text-sm ${colorClass}`}>{valueLabel}</text>
          </g>
       </svg>

       <div className="w-full max-w-[250px] flex items-center gap-4">
         <span className="text-slate-400 font-bold text-sm">Input</span>
         <input 
            type="range" min="0" max="100" 
            value={progress} 
            onChange={(e) => setProgress(Number(e.target.value))}
            className="flex-grow accent-white"
         />
         <span className="text-slate-400 font-bold text-sm">Output</span>
       </div>
    </div>
  );
};

export default CompositionFunctionCanvas;