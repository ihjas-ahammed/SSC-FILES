import React, { useState, useEffect } from 'react';

const BallisticInteractive: React.FC = () => {
  const [charge, setCharge] = useState(10); // Base charge multiplier
  const [lambda, setLambda] = useState(0.2); // Logarithmic decrement
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  // Constants
  const T = 4; // Time period for visualization
  const trueTheta = charge * 5; // Undamped max throw

  // Animation effect
  useEffect(() => {
    let animationFrame: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000; // in seconds
      lastTimestamp = timestamp;

      setTime(prevTime => {
        const nextTime = prevTime + deltaTime * 2; // Speed up time a bit
        if (nextTime > 12) { // Stop after 12 seconds
          setIsPlaying(false);
          return 0;
        }
        return nextTime;
      });

      if (isPlaying) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isPlaying) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isPlaying]);

  const handleFire = () => {
    setTime(0);
    setIsPlaying(true);
  };

  // Calculate current theta based on damped sine wave
  // Envelope is e^(-lambda * t / (T/2)) roughly, since lambda is decrement per half vibration
  const currentTheta = isPlaying 
    ? trueTheta * Math.exp(-lambda * (time / (T/2))) * Math.sin((2 * Math.PI / T) * time)
    : 0;

  // Calculate the first throw (at t = T/4)
  const tFirstPeak = T / 4;
  const firstThrow = trueTheta * Math.exp(-lambda * (tFirstPeak / (T/2)));

  // Generate graph points
  const graphPoints =[];
  for (let t = 0; t <= 12; t += 0.1) {
    const x = (t / 12) * 260; // 260 width
    const y = 60 - (trueTheta * Math.exp(-lambda * (t / (T/2))) * Math.sin((2 * Math.PI / T) * t));
    graphPoints.push(`${x},${y}`);
  }

  // Undamped curve
  const undampedPoints =[];
  for (let t = 0; t <= 12; t += 0.1) {
    const x = (t / 12) * 260;
    const y = 60 - (trueTheta * Math.sin((2 * Math.PI / T) * t));
    undampedPoints.push(`${x},${y}`);
  }

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[220px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-start p-2 overflow-hidden">
        
        {/* Animated Coil & Mirror */}
        <div className="relative w-full h-[60px] flex items-center justify-center border-b border-white/5 mb-2">
            <div className="absolute w-full h-[2px] bg-slate-700"></div>
            {/* Zero marker */}
            <div className="absolute w-[2px] h-4 bg-white/50 top-1/2 -translate-y-1/2"></div>
            
            {/* The moving light spot (simulating the mirror reflection on a scale) */}
            <div 
               className="absolute w-3 h-8 bg-green-400 rounded-sm shadow-[0_0_15px_rgba(74,222,128,1)] transition-none"
               style={{ left: `calc(50% + ${currentTheta}px)`, transform: 'translateX(-50%)' }}
            ></div>
            <div className="absolute top-1 text-[10px] font-bold text-slate-500">Galvanometer Scale</div>
        </div>

        {/* Throw Graph */}
        <svg width="280" height="120" viewBox="0 0 280 120" className="relative mt-2">
           {/* Center Line */}
           <line x1="0" y1="60" x2="280" y2="60" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
           
           {/* Undamped Ghost Curve */}
           <polyline points={undampedPoints.join(' ')} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
           
           {/* Damped Curve */}
           <polyline points={graphPoints.join(' ')} fill="none" stroke="#3b82f6" strokeWidth="2" />
           
           {/* First Throw Marker */}
           <line x1={(tFirstPeak/12)*260} y1="60" x2={(tFirstPeak/12)*260} y2={60 - firstThrow} stroke="#f59e0b" strokeWidth="2" />
           <circle cx={(tFirstPeak/12)*260} cy={60 - firstThrow} r="3" fill="#f59e0b" />
           
           {/* True Throw Marker (Ghost) */}
           <circle cx={(tFirstPeak/12)*260} cy={60 - trueTheta} r="3" fill="#94a3b8" />
           <line x1={(tFirstPeak/12)*260} y1={60 - firstThrow} x2={(tFirstPeak/12)*260} y2={60 - trueTheta} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
        </svg>

        {/* Tracking Dot */}
        {isPlaying && (
           <div 
             className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] transition-none"
             style={{ 
                left: `${18 + (time/12)*260}px`, 
                top: `${80 + 60 - (trueTheta * Math.exp(-lambda * (time / (T/2))) * Math.sin((2 * Math.PI / T) * time))}px`,
                transform: 'translate(-50%, -50%)'
             }}
           ></div>
        )}
      </div>

      <div className="w-full px-4 flex gap-2 text-center mb-4">
        <div className="flex-1 bg-amber-900/30 p-2 rounded-xl border border-amber-500/30">
          <span className="block text-[10px] text-amber-300 font-bold uppercase tracking-wider">True Throw (θ)</span>
          <span className="text-sm text-white font-mono">{trueTheta.toFixed(1)}</span>
        </div>
        <div className="flex-1 bg-blue-900/30 p-2 rounded-xl border border-blue-500/30">
          <span className="block text-[10px] text-blue-300 font-bold uppercase tracking-wider">Observed (θ₁)</span>
          <span className="text-sm text-white font-mono">{firstThrow.toFixed(1)}</span>
        </div>
      </div>

      <div className="w-full px-4 space-y-4">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-20">Charge (Q)</span>
            <input type="range" min="2" max="20" step="1" value={charge} onChange={(e) => setCharge(parseFloat(e.target.value))} className="flex-grow accent-green-500" disabled={isPlaying} />
         </div>
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-20">Damping (λ)</span>
            <input type="range" min="0" max="1" step="0.05" value={lambda} onChange={(e) => setLambda(parseFloat(e.target.value))} className="flex-grow accent-blue-500" disabled={isPlaying} />
         </div>
         
         <button 
           onClick={handleFire}
           disabled={isPlaying}
           className={`w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-b-4 ${isPlaying ? 'bg-slate-700 border-slate-900 text-slate-500' : 'bg-duo-red border-duo-red-dark text-white active:translate-y-1 active:border-b-0'}`}
         >
           {isPlaying ? 'Coil Oscillating...' : 'Fire Charge Impulse'}
         </button>
      </div>
    </div>
  );
};

export default BallisticInteractive;