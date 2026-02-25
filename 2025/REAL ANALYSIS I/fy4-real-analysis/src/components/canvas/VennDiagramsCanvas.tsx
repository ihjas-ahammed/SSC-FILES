import React, { useState } from 'react';

const VennDiagramsCanvas: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const getStyle = (region: string) => {
    if (!hovered) return "fill-white/10 stroke-white/20";
    if (hovered === region) return "fill-duo-blue/60 stroke-duo-blue z-10";
    return "fill-transparent stroke-white/10";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 relative">
       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest absolute top-4">Tap regions to highlight</p>
       <svg viewBox="0 0 300 200" className="w-full h-full max-w-[250px] cursor-pointer touch-none-canvas">
          <defs>
            <clipPath id="vennClipB"><circle cx="180" cy="100" r="60" /></clipPath>
            <mask id="vennMaskB"><rect width="300" height="200" fill="white" /><circle cx="180" cy="100" r="60" fill="black" /></mask>
            <mask id="vennMaskA"><rect width="300" height="200" fill="white" /><circle cx="120" cy="100" r="60" fill="black" /></mask>
          </defs>

          {/* Region: A \ B */}
          <g onClick={() => setHovered('A')} mask="url(#vennMaskB)" className="transition-all duration-300">
             <circle cx="120" cy="100" r="60" className={`${getStyle('A')} stroke-[3]`} />
             <text x="85" y="105" className="fill-white font-black text-xl pointer-events-none">A</text>
          </g>

          {/* Region: B \ A */}
          <g onClick={() => setHovered('B')} mask="url(#vennMaskA)" className="transition-all duration-300">
             <circle cx="180" cy="100" r="60" className={`${getStyle('B')} stroke-[3]`} />
             <text x="205" y="105" className="fill-white font-black text-xl pointer-events-none">B</text>
          </g>

          {/* Region: A ∩ B */}
          <g onClick={() => setHovered('A∩B')} clipPath="url(#vennClipB)" className="transition-all duration-300">
             <circle cx="120" cy="100" r="60" className={`${getStyle('A∩B')} stroke-[3]`} />
             <text x="150" y="105" textAnchor="middle" className="fill-white font-black text-sm pointer-events-none">∩</text>
          </g>
       </svg>
    </div>
  );
};

export default VennDiagramsCanvas;