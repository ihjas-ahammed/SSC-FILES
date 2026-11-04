import React from 'react';

export const renderModule3Advanced = (id: string) => {
  switch (id) {
    case 'fixed-bias-circuit':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <div className="relative w-48 h-32 border-2 border-slate-700 rounded-xl bg-slate-900/50 flex items-center justify-center">
                {/* VCC Top Line */}
                <div className="absolute top-2 w-32 h-1 bg-red-500"></div>
                <span className="absolute top-0 right-4 text-[10px] text-red-400">+Vcc</span>
                
                {/* Transistor */}
                <div className="w-8 h-8 rounded-full border-2 border-slate-400 absolute top-12 left-20"></div>
                
                {/* Rc path */}
                <div className="absolute top-3 right-16 w-1 h-10 bg-slate-500"></div>
                <div className="absolute top-6 right-12 text-[10px] text-yellow-400 border border-yellow-400 px-1">Rc</div>
                
                {/* Rb path */}
                <div className="absolute top-3 left-8 w-1 h-14 bg-slate-500"></div>
                <div className="absolute top-16 left-8 w-12 h-1 bg-slate-500"></div>
                <div className="absolute top-6 left-2 text-[10px] text-blue-400 border border-blue-400 px-1">Rb</div>
                
                {/* Ground */}
                <div className="absolute bottom-4 right-16 w-1 h-6 bg-slate-500"></div>
                <div className="absolute bottom-4 right-14 w-5 h-1 bg-slate-400"></div>
            </div>
            <p className="text-[10px] mt-2 text-slate-400">Base Resistor Method (Fixed Bias)</p>
        </div>
      );

    case 'voltage-divider-circuit':
        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
              <div className="relative w-48 h-32 border-2 border-slate-700 rounded-xl bg-slate-900/50 flex items-center justify-center">
                  {/* VCC */}
                  <div className="absolute top-2 w-32 h-1 bg-red-500"></div>
                  
                  {/* Transistor */}
                  <div className="w-8 h-8 rounded-full border-2 border-slate-400 absolute top-12 left-24"></div>
                  
                  {/* R1 & R2 voltage divider */}
                  <div className="absolute top-3 left-12 w-1 h-24 bg-slate-500"></div>
                  <div className="absolute top-6 left-6 text-[10px] text-blue-400 border border-blue-400 px-1">R1</div>
                  <div className="absolute bottom-6 left-6 text-[10px] text-blue-400 border border-blue-400 px-1">R2</div>
                  
                  {/* Base connection */}
                  <div className="absolute top-16 left-12 w-12 h-1 bg-slate-500"></div>
                  
                  {/* Rc */}
                  <div className="absolute top-3 right-12 w-1 h-10 bg-slate-500"></div>
                  <div className="absolute top-6 right-6 text-[10px] text-yellow-400 border border-yellow-400 px-1">Rc</div>
                  
                  {/* Re */}
                  <div className="absolute bottom-4 right-12 w-1 h-6 bg-slate-500"></div>
                  <div className="absolute bottom-6 right-6 text-[10px] text-green-400 border border-green-400 px-1">Re</div>
              </div>
              <p className="text-[10px] mt-2 text-slate-400">Voltage Divider Method (Universal Bias)</p>
          </div>
        );

    default: return null;
  }
};