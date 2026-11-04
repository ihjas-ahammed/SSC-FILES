import React, { useRef, useState, useEffect } from 'react';

const FunctionGraphCanvas: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [lineX, setLineX] = useState(150);

  const handlePointer = (clientX: number) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(20, Math.min(280, x)); // constrain to axes
      setLineX(x);
    }
  };

  useEffect(() => {
     const move = () => { setLineX(150 + Math.sin(Date.now() / 500) * 50); };
     let frame = requestAnimationFrame(function loop() {
        // move(); // Optional auto-animate if not interacting
        // frame = requestAnimationFrame(loop);
     });
     return () => cancelAnimationFrame(frame);
  }, []);

  // Simple sine wave function mapped to SVG: y = 80 - 40*sin((x-20)/30)
  const calculateY = (x: number) => 80 - 40 * Math.sin((x - 20) / 30);
  const currentY = calculateY(lineX);

  return (
    <div className="flex w-full h-full p-2 justify-center items-center select-none touch-none-canvas"
       onMouseMove={(e) => handlePointer(e.clientX)}
       onTouchMove={(e) => handlePointer(e.touches[0].clientX)}
    >
       <svg ref={svgRef} viewBox="0 0 300 150" className="w-full h-full max-w-[350px]">
          {/* Axes */}
          <line x1="20" y1="130" x2="280" y2="130" stroke="#475569" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="130" stroke="#475569" strokeWidth="2" />
          
          {/* Curve drawing using loop to build path string */}
          <path d={`M 20 ${calculateY(20)} ${Array.from({length: 26}).map((_, i) => {
             const px = 30 + i * 10;
             return `L ${px} ${calculateY(px)}`;
          }).join(' ')}`} fill="none" stroke="#1cb0f6" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

          {/* Vertical Line */}
          <line x1={lineX} y1="20" x2={lineX} y2="140" stroke="#ff4b4b" strokeWidth="2" strokeDasharray="4" />
          
          {/* Intersection Point */}
          <circle cx={lineX} cy={currentY} r="5" fill="#ff4b4b" className="animate-pulse" />

          <text x={lineX + 8} y={currentY - 10} className="fill-white text-[10px] font-bold pointer-events-none drop-shadow-md">
             (x, f(x))
          </text>
       </svg>
    </div>
  );
};

export default FunctionGraphCanvas;