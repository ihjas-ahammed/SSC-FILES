import React, { useState } from 'react';

const DeMorganLawsCanvas: React.FC = () => {
  const [step, setStep] = useState(0); // 0 = default, 1 = B u C, 2 = A \ (B u C), 3 = (A\B) n (A\C)

  const steps = [
    { label: "Universe A & Subsets", op: "default" },
    { label: "1. Identify B ∪ C", op: "buc" },
    { label: "2. Remove from A: A \\ (B ∪ C)", op: "remove" },
    { label: "3. Eqv to: (A \\ B) ∩ (A \\ C)", op: "eqv" }
  ];

  return (
    <div className="flex flex-col w-full h-full p-3 items-center">
      <div className="bg-black/50 px-4 py-2 rounded-xl mb-2 text-sm font-bold text-slate-300 border border-white/10">
        {steps[step].label}
      </div>

      <div className="flex-grow relative w-full max-w-[280px]">
        <svg viewBox="0 0 300 200" className="w-full h-full cursor-pointer" onClick={() => setStep((s) => (s + 1) % 4)}>
          <defs>
            <mask id="demorganUnionMask">
              <rect width="300" height="200" fill="white" />
              <circle cx="120" cy="110" r="45" fill="black" />
              <circle cx="180" cy="110" r="45" fill="black" />
            </mask>
          </defs>

          {/* Universe A */}
          <rect x="10" y="10" width="280" height="180" rx="10" 
             className={`transition-all duration-500 stroke-[3] ${step >= 2 ? 'fill-duo-green/40 stroke-duo-green' : 'fill-white/5 stroke-white/20'}`} 
             mask={step >= 2 ? "url(#demorganUnionMask)" : undefined} 
          />
          <text x="20" y="30" className="fill-slate-400 font-bold">A (Universe)</text>

          {/* Subsets B and C */}
          <g className={`transition-all duration-500 ${step === 1 ? 'fill-duo-red/60 stroke-duo-red stroke-[3]' : 'fill-transparent stroke-white/20 stroke-2'}`}>
             <circle cx="120" cy="110" r="45" />
             <circle cx="180" cy="110" r="45" />
          </g>

          <text x="110" y="115" className="fill-slate-300 font-bold pointer-events-none">B</text>
          <text x="180" y="115" className="fill-slate-300 font-bold pointer-events-none">C</text>

          {step === 3 && (
            <text x="150" y="160" textAnchor="middle" className="fill-white font-black text-lg drop-shadow-md animate-in fade-in zoom-in">They match!</text>
          )}
        </svg>
      </div>
      <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Tap diagram to advance step</p>
    </div>
  );
};

export default DeMorganLawsCanvas;