import React, { useState } from 'react';

const NestedIntervalsCanvas: React.FC = () => {
  const [step, setStep] = useState(1);

  // Define intervals [a, b]
  // I1: [0, 100]
  // I2: [10, 80]
  // I3: [30, 60]
  // I4: [40, 50]
  // I5: [44, 46]
  
  const intervals = [
    { a: 20, b: 280, label: "I₁" },
    { a: 60, b: 200, label: "I₂" },
    { a: 100, b: 160, label: "I₃" },
    { a: 120, b: 140, label: "I₄" },
    { a: 128, b: 132, label: "I₅" }
  ];

  const currentIntervals = intervals.slice(0, step);

  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center touch-none-canvas">
       <svg viewBox="0 0 300 150" className="w-full max-w-[350px] overflow-visible">
          {/* Number Line */}
          <line x1="0" y1="120" x2="300" y2="120" stroke="#475569" strokeWidth="2" />

          {/* Draw previous intervals faintly */}
          {currentIntervals.map((int, i) => {
             const isLast = i === step - 1;
             const y = 20 + i * 20;
             const color = isLast ? "#58cc02" : "rgba(255, 255, 255, 0.2)";
             
             return (
               <g key={i} className="transition-all duration-500">
                 {/* Bracket Left */}
                 <line x1={int.a} y1={y - 5} x2={int.a} y2={y + 5} stroke={color} strokeWidth="2" />
                 <line x1={int.a} y1={y} x2={int.a + 5} y2={y} stroke={color} strokeWidth="2" />
                 
                 {/* Line */}
                 <line x1={int.a} y1={y} x2={int.b} y2={y} stroke={color} strokeWidth={isLast ? 3 : 1} />
                 
                 {/* Bracket Right */}
                 <line x1={int.b} y1={y - 5} x2={int.b} y2={y + 5} stroke={color} strokeWidth="2" />
                 <line x1={int.b - 5} y1={y} x2={int.b} y2={y} stroke={color} strokeWidth="2" />

                 {/* Drop lines to axis if last */}
                 {isLast && (
                    <>
                      <line x1={int.a} y1={y} x2={int.a} y2={120} stroke={color} strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                      <line x1={int.b} y1={y} x2={int.b} y2={120} stroke={color} strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                      <text x={int.a - 10} y={y + 4} className="fill-white text-[10px] font-bold">{int.label}</text>
                    </>
                 )}
               </g>
             );
          })}
          
          {/* Common Point */}
          {step === 5 && (
             <circle cx="130" cy="120" r="4" fill="#1cb0f6" className="animate-ping" />
          )}
       </svg>

       <div className="flex gap-4 mt-4">
          <button 
            onClick={() => setStep(Math.max(1, step - 1))}
            className="px-4 py-2 rounded-xl bg-slate-700 text-white font-bold disabled:opacity-50"
            disabled={step === 1}
          >
            Prev
          </button>
          <button 
            onClick={() => setStep(Math.min(5, step + 1))}
            className="px-4 py-2 rounded-xl bg-duo-green text-white font-bold disabled:opacity-50"
            disabled={step === 5}
          >
            Next Nest
          </button>
       </div>
    </div>
  );
};

export default NestedIntervalsCanvas;