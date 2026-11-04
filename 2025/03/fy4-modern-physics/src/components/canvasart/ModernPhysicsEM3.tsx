import React, { useState } from 'react';

export const renderModernPhysicsEM3 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Blackbody Spectrum (Temp Slider) ──────────────────────────────────
    case 'blackbody-spectrum': {
      const BlackBody = () => {
        const [temp, setTemp] = useState(4000); // 3000 to 6000 K

        // Generate plot for Planck Curve
        const points = [];
        let peakX = 0;
        let peakY = 140;

        for (let x = 10; x <= 280; x++) {
          const wl = x * 0.01; // Micro-meters: 0.1 to 2.8 μm
          const exponent = 14387.77 / (wl * 1000 * temp); 
          
          if (exponent > 50) continue; // prevent rendering values nearing infinity

          const rawIntensity = Math.pow(wl, -5) / (Math.exp(exponent) - 1);
          // Scale it vertically so that 6000K has nice height on graph
          const scaledI = rawIntensity * 0.038; 
          
          const plotY = 140 - scaledI;
          if (plotY >= -10 && plotY <= 150) {
             points.push(`${x},${plotY}`);
             if (plotY < peakY) { 
               peakY = plotY; 
               peakX = x; 
             }
          }
        }

        // Visible Light band backdrop (~400nm - 700nm => 40-70 on our x axis)
        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="visible-band" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#4ade80" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Axes */}
              <line x1="20" y1="140" x2="290" y2="140" stroke="#475569" strokeWidth="2" />
              <line x1="20" y1="140" x2="20" y2="10" stroke="#475569" strokeWidth="2" />
              <text x="210" y="155" fill="#94a3b8" fontSize="10">Wavelength (λ)</text>
              <text x="5" y="60" fill="#94a3b8" fontSize="10" transform="rotate(-90, 5, 60)">Intensity</text>

              {/* Visible band overlay */}
              <rect x="40" y="10" width="30" height="130" fill="url(#visible-band)" />
              <text x="42" y="30" fill="#94a3b8" fontSize="8" transform="rotate(90, 42, 30)">Vis</text>

              {/* Path of Planck */}
              <polyline points={points.join(' ')} fill="none" stroke="#facc15" strokeWidth="3" />

              {/* Marker for peak (Wien's Law visualization) */}
              <circle cx={peakX} cy={peakY} r="4" fill="#fff" />
              <line x1={peakX} y1={peakY} x2={peakX} y2="140" stroke="#cbd5e1" strokeDasharray="3 3" />
              
              <text x="140" y="25" fill="#facc15" fontSize="12" fontWeight="bold">T = {temp} K</text>
            </svg>

            {/* Slider */}
            <div className="flex items-center gap-3 w-full px-5 mt-2">
              <span className="text-slate-400 text-xs">3000 K</span>
              <input type="range" min="3000" max="6000" step="100" value={temp}
                onChange={e => setTemp(Number(e.target.value))}
                className="flex-grow accent-yellow-400" />
              <span className="text-slate-400 text-xs">6000 K</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1">{'Intensity $\propto T^4$ and $\lambda_{{\text{max}}} \propto 1/T$'}</p>
          </div>
        );
      };
      return <BlackBody />;
    }

    // ── UV Catastrophe ──────────────────────────────────────────────────
    case 'uv-catastrophe': {
      // RJ equation scales as 1/λ^4
      const clPoints = [];
      const pqPoints = [];
      
      for(let x = 10; x <= 280; x+=2) {
          const wl = x * 0.01; // mostly abstract scaling
          // Classical (blows up completely towards left)
          const rjY = 140 - (0.4 / Math.pow(wl, 4));
          if (rjY > -10 && rjY <= 140) clPoints.push(`${x},${rjY}`);

          // Quantum (turns back)
          const exponent = 1.8 / wl; 
          if(exponent > 40) continue;
          
          let pq = 20 * Math.pow(wl, -5) / (Math.exp(exponent) - 1);
          pqPoints.push(`${x},${140 - pq}`);
      }

      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            {/* Background elements */}
            <rect x="0" y="0" width="100" height="140" fill="indigo" opacity="0.1" />
            <text x="25" y="15" fill="#c084fc" fontSize="9">Ultraviolet</text>
            
            {/* Axes */}
            <line x1="20" y1="140" x2="290" y2="140" stroke="#475569" strokeWidth="2" />
            <line x1="20" y1="140" x2="20" y2="10" stroke="#475569" strokeWidth="2" />
            <text x="250" y="155" fill="#94a3b8" fontSize="10">λ (wavelength)</text>
            
            {/* Classical line */}
            <polyline points={clPoints.join(' ')} fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="140" y="50" fill="#f43f5e" fontSize="10" fontWeight="bold">Classical (Rayleigh-Jeans)</text>

            {/* Quantum Line */}
            <polyline points={pqPoints.join(' ')} fill="none" stroke="#60a5fa" strokeWidth="3" />
            <text x="100" y="80" fill="#60a5fa" fontSize="11" fontWeight="bold">Quantum (Planck)</text>
          </svg>
        </div>
      );
    }

    default:
      return null;
  }
};