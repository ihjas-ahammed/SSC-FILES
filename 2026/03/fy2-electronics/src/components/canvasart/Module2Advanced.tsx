import React, { useState } from 'react';

// --- Interactive Sub-Components --- //

const InteractiveCapFilter = () => {
  const [capacitance, setCapacitance] = useState(10); // 10 to 100
  
  // Calculate slope based on capacitance
  const yDrop = 50 + (100 - capacitance) * 0.4;
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 touch-none-canvas">
      <svg className="w-full h-32 overflow-visible" viewBox="0 0 200 100">
         {/* Rectifier Output (dotted) */}
         <path d="M 0 100 Q 25 0 50 100 Q 75 0 100 100 Q 125 0 150 100 Q 175 0 200 100" stroke="#475569" fill="none" strokeWidth="2" strokeDasharray="4"/>
         
         {/* Filtered Output */}
         <path d={`M 25 50 L 50 ${yDrop} L 75 50 L 100 ${yDrop} L 125 50 L 150 ${yDrop} L 175 50 L 200 ${yDrop}`} stroke="#facc15" fill="none" strokeWidth="3" />
      </svg>
      <div className="mt-6 w-full max-w-[200px] flex flex-col items-center">
        <label className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Capacitor Size (Drag)</label>
        <input 
           type="range" min="10" max="100" value={capacitance} 
           onChange={(e) => setCapacitance(Number(e.target.value))}
           className="w-full accent-yellow-400"
        />
      </div>
    </div>
  );
};

const InteractiveZenerRegulator = () => {
  const [vin, setVin] = useState(12); // 8 to 20
  const Vz = 10;
  const R = 100;
  const RL = 500;
  
  const isOn = vin > Vz;
  const Vout = isOn ? Vz : vin * (RL / (R + RL));
  
  // Calculate currents (mA)
  const I_total = isOn ? ((vin - Vz) / R) * 1000 : (vin / (R + RL)) * 1000;
  const I_L = (Vout / RL) * 1000;
  const I_Z = isOn ? I_total - I_L : 0;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 touch-none-canvas">
       <div className="flex items-center gap-4 border-2 border-slate-700 p-4 rounded-xl bg-slate-900/50">
          <div className="flex flex-col items-center">
             <span className="text-xs text-blue-400">Vin</span>
             <span className="font-black">{vin}V</span>
          </div>
          <div className="w-8 h-1 bg-slate-500 relative">
             <div className="absolute -top-4 left-1 text-[10px] text-green-400">I={I_total.toFixed(0)}mA</div>
          </div>
          <div className="flex flex-col items-center border-x-2 border-slate-600 px-4">
             <span className="text-xs text-purple-400">Zener</span>
             <span className="font-bold text-[10px]">{isOn ? 'ON (10V)' : 'OFF'}</span>
             <span className="text-[10px] text-red-400 mt-1">Iz={I_Z.toFixed(0)}mA</span>
          </div>
          <div className="w-8 h-1 bg-slate-500 relative">
             <div className="absolute -top-4 left-1 text-[10px] text-blue-400">IL={I_L.toFixed(0)}mA</div>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-xs text-yellow-400">Vout</span>
             <span className="font-black">{Vout.toFixed(1)}V</span>
          </div>
       </div>
       <div className="mt-6 w-full max-w-[200px] flex flex-col items-center">
        <label className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Input Voltage (Drag)</label>
        <input 
           type="range" min="8" max="20" value={vin} 
           onChange={(e) => setVin(Number(e.target.value))}
           className="w-full accent-blue-500"
        />
      </div>
    </div>
  );
};

export const renderModule2Advanced = (id: string) => {
  switch (id) {
    case 'interactive-cap-filter':
      return <InteractiveCapFilter />;
    
    case 'interactive-zener-reg':
      return <InteractiveZenerRegulator />;

    case 'doubler-mechanics':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="p-2 border border-slate-600 rounded text-center bg-blue-900/20">
                   <div className="text-[10px] text-slate-400">Neg Half Cycle</div>
                   <div className="text-xs font-bold text-blue-400">C1 Charges to $V_m$</div>
               </div>
               <div className="text-white">&rarr;</div>
               <div className="p-2 border border-slate-600 rounded text-center bg-green-900/20">
                   <div className="text-[10px] text-slate-400">Pos Half Cycle</div>
                   <div className="text-xs font-bold text-green-400">C2 Charges to $2V_m$</div>
               </div>
            </div>
            <p className="text-[10px] text-yellow-400">Stored voltages add up in series</p>
        </div>
      );

    case 'filter-block-diagram':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-2">
            <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                    <svg width="40" height="30" viewBox="0 0 40 30">
                        <path d="M 0 25 Q 10 5 20 25 Q 30 5 40 25" stroke="#facc15" fill="none" strokeWidth="2" />
                    </svg>
                    <span className="text-[8px] text-slate-400">Pulsating DC</span>
                </div>
                <div className="text-white">&rarr;</div>
                <div className="w-20 h-12 bg-purple-900/40 border border-purple-500 rounded flex items-center justify-center text-[10px] font-bold text-purple-200">
                    FILTER
                </div>
                <div className="text-white">&rarr;</div>
                <div className="flex flex-col items-center">
                    <svg width="40" height="30" viewBox="0 0 40 30">
                        <path d="M 0 10 L 40 10" stroke="#4ade80" fill="none" strokeWidth="2" />
                    </svg>
                    <span className="text-[8px] text-slate-400">Pure DC</span>
                </div>
            </div>
        </div>
      );

    case 'choke-analysis-circuit':
      return (
        <div className="flex items-center justify-center w-full h-full p-4">
            <div className="relative w-48 h-32 border-2 border-slate-700 rounded-xl bg-slate-900/50 flex flex-col justify-center px-4">
                <div className="absolute top-4 left-4 text-xs font-bold text-blue-400">$V'_{dc}$ (Input)</div>
                <div className="w-full h-1 bg-slate-500 my-4 relative">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-4 border-2 border-yellow-400 rounded-full flex items-center justify-center text-[8px] text-yellow-400 bg-black">R</div>
                   <div className="text-[10px] absolute -bottom-5 left-1/2 -translate-x-1/2 text-slate-400">Choke $25\Omega$</div>
                </div>
                <div className="absolute top-1/2 right-2 -translate-y-1/2 w-4 h-12 border-2 border-green-500 flex items-center justify-center rotate-90 text-[8px] text-green-400">Load $750\Omega$</div>
                <div className="absolute bottom-4 right-8 text-xs font-bold text-green-400">$V_{dc}$ (Output)</div>
            </div>
        </div>
      );

    case 'doubler-circuit-stages':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-4">
            <div className="w-full max-w-xs border border-blue-500/50 bg-blue-900/10 p-2 rounded relative">
                <span className="text-[10px] text-blue-400 absolute top-1 left-2">1. Negative Half Cycle</span>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px]">-</div>
                    <div className="w-12 h-0.5 bg-green-500 relative"><span className="absolute -top-4 text-[8px] text-green-400">$D_1$ ON</span></div>
                    <div className="w-8 h-8 border-x-2 border-yellow-400 flex items-center justify-center text-[10px]">$C_1$</div>
                </div>
            </div>
            <div className="w-full max-w-xs border border-red-500/50 bg-red-900/10 p-2 rounded relative">
                <span className="text-[10px] text-red-400 absolute top-1 left-2">2. Positive Half Cycle</span>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px]">+</div>
                    <div className="w-8 h-8 border-x-2 border-yellow-400 flex items-center justify-center text-[10px]">$C_1$</div>
                    <div className="w-12 h-0.5 bg-green-500 relative"><span className="absolute -top-4 text-[8px] text-green-400">$D_2$ ON</span></div>
                    <div className="w-8 h-8 border-x-2 border-yellow-400 flex items-center justify-center text-[10px]">$C_2$</div>
                </div>
            </div>
        </div>
      );

    default: return null;
  }
};