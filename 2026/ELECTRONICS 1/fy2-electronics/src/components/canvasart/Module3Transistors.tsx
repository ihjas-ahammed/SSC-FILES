import React from 'react';

export const renderModule3Transistors = (id: string) => {
  switch (id) {
    case 'bjt-structure-sandwich':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-2">
            <div className="flex gap-8">
               {/* NPN */}
               <div className="flex flex-col items-center">
                   <div className="flex w-32 h-12 border-2 border-slate-500 rounded overflow-hidden shadow-lg">
                       <div className="flex-[2] bg-blue-900/50 flex items-center justify-center text-xs font-bold border-r border-slate-600">N</div>
                       <div className="flex-[1] bg-red-900/50 flex items-center justify-center text-xs font-bold border-r border-slate-600">P</div>
                       <div className="flex-[2] bg-blue-900/50 flex items-center justify-center text-xs font-bold">N</div>
                   </div>
                   <span className="text-[10px] text-slate-400 mt-2">NPN Transistor</span>
               </div>
               {/* PNP */}
               <div className="flex flex-col items-center">
                   <div className="flex w-32 h-12 border-2 border-slate-500 rounded overflow-hidden shadow-lg">
                       <div className="flex-[2] bg-red-900/50 flex items-center justify-center text-xs font-bold border-r border-slate-600">P</div>
                       <div className="flex-[1] bg-blue-900/50 flex items-center justify-center text-xs font-bold border-r border-slate-600">N</div>
                       <div className="flex-[2] bg-red-900/50 flex items-center justify-center text-xs font-bold">P</div>
                   </div>
                   <span className="text-[10px] text-slate-400 mt-2">PNP Transistor</span>
               </div>
            </div>
        </div>
      );

    case 'bjt-diode-analogy':
       return (
         <div className="flex items-center justify-center w-full h-full relative">
            <div className="relative flex flex-col items-center">
               <div className="w-12 h-12 border-b-2 border-slate-500 relative flex justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white transform rotate-180 absolute bottom-0"></div>
                  <span className="absolute -left-8 top-4 text-[10px] text-slate-400">Collector</span>
               </div>
               <div className="w-16 h-[2px] bg-slate-500"></div> {/* Base Line */}
               <span className="absolute right-[-40px] top-[45%] text-[10px] text-slate-400">Base</span>
               <div className="w-12 h-12 border-t-2 border-slate-500 relative flex justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white absolute top-0"></div>
                  <span className="absolute -left-8 bottom-4 text-[10px] text-slate-400">Emitter</span>
               </div>
            </div>
            <div className="absolute bottom-2 text-[10px] text-yellow-400 font-bold">Back-to-Back Diodes</div>
         </div>
       );

    case 'bjt-size-doping':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <div className="flex w-full max-w-xs h-20 border-2 border-slate-500 rounded overflow-hidden">
                <div className="flex-[2] bg-blue-600/80 flex flex-col items-center justify-center relative border-r border-slate-700">
                    <span className="text-white text-[10px] font-black z-10">Emitter</span>
                    <span className="text-blue-200 text-[8px] z-10">Heavy Dope</span>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff_1.5px,_transparent_1.5px)] bg-[size:6px_6px] opacity-40"></div>
                </div>
                <div className="flex-[1] bg-red-900/40 flex flex-col items-center justify-center border-r border-slate-700 relative">
                    <span className="text-white text-[10px] font-black z-10 -rotate-90">Base</span>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:12px_12px] opacity-20"></div>
                </div>
                <div className="flex-[4] bg-blue-800/60 flex flex-col items-center justify-center relative">
                    <span className="text-white text-[10px] font-black z-10">Collector</span>
                    <span className="text-blue-200 text-[8px] z-10">Moderate Dope</span>
                    <span className="text-yellow-200 text-[8px] z-10 mt-1">Largest Area</span>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:10px_10px] opacity-20"></div>
                </div>
            </div>
        </div>
      );
      
    case 'bjt-current-flow':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full relative">
            <div className="flex w-48 h-20 border-2 border-slate-500 rounded overflow-hidden relative bg-black/40">
                <div className="flex-[3] flex items-center justify-center border-r border-slate-600">E</div>
                <div className="flex-[1] flex items-center justify-center border-r border-slate-600">B</div>
                <div className="flex-[4] flex items-center justify-center">C</div>
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    {/* Emitter Current */}
                    <path d="M -10 50 L 30 50" stroke="white" strokeWidth="4" markerEnd="url(#arrow)" />
                    <text x="0" y="40" fill="white" fontSize="8">100%</text>

                    {/* Base Recombination */}
                    <path d="M 35 50 L 35 80" stroke="yellow" strokeWidth="1" strokeDasharray="2" />
                    <text x="40" y="75" fill="yellow" fontSize="8">5%</text>

                    {/* Collector Current */}
                    <path d="M 35 50 L 90 50" stroke="cyan" strokeWidth="3" markerEnd="url(#arrow)" />
                    <text x="70" y="40" fill="cyan" fontSize="8">95%</text>
                </svg>
            </div>
        </div>
      );

    case 'cb-config':
        return (
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
                <div className="relative w-48 h-32 border-b-2 border-slate-600">
                    {/* Transistor Base Grounded */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-500"></div>
                    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-6 h-1 bg-slate-500"></div> {/* Gnd */}
                    
                    {/* Transistor Circle */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center">B</div>
                    
                    {/* Emitter Input */}
                    <div className="absolute bottom-12 left-10 w-12 h-[2px] bg-white -rotate-12"></div>
                    <span className="absolute bottom-14 left-4 text-xs text-green-400">Input (E)</span>
                    
                    {/* Collector Output */}
                    <div className="absolute bottom-12 right-10 w-12 h-[2px] bg-white rotate-12"></div>
                    <span className="absolute bottom-14 right-4 text-xs text-red-400">Output (C)</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">Common Base: Base is grounded</p>
            </div>
        );

    case 'ce-config':
        return (
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
                <div className="relative w-48 h-32">
                    {/* Transistor */}
                    <div className="absolute bottom-8 left-16 w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center text-[10px]">T</div>
                    
                    {/* Emitter Grounded */}
                    <div className="absolute bottom-8 left-18 w-1 h-8 bg-slate-500 transform translate-x-2 translate-y-2"></div>
                    <div className="absolute bottom-0 left-20 w-6 h-1 bg-slate-500"></div>
                    
                    {/* Base Input */}
                    <div className="absolute bottom-12 left-0 w-16 h-[2px] bg-white"></div>
                    <span className="absolute bottom-14 left-2 text-xs text-green-400">Input (B)</span>
                    
                    {/* Collector Output */}
                    <div className="absolute bottom-16 right-16 w-1 h-12 bg-white"></div>
                    <div className="absolute top-4 right-16 w-12 h-[2px] bg-white"></div>
                    <span className="absolute top-0 right-10 text-xs text-red-400">Output (C)</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">Common Emitter: Emitter is grounded</p>
            </div>
        );

    case 'ce-output-characteristics':
        return (
            <div className="flex items-center justify-center w-full h-full p-4 relative">
                <div className="absolute left-8 bottom-8 w-[1px] h-[80%] bg-slate-400"></div>
                <div className="absolute left-8 bottom-8 w-[80%] h-[1px] bg-slate-400"></div>
                
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    {/* Curves */}
                    <path d="M 35 230 Q 40 200 60 200 L 250 200" stroke="cyan" fill="none" strokeWidth="2" />
                    <text x="260" y="205" fill="cyan" fontSize="8">Ib=10uA</text>
                    
                    <path d="M 35 230 Q 45 150 65 150 L 250 150" stroke="cyan" fill="none" strokeWidth="2" />
                    <text x="260" y="155" fill="cyan" fontSize="8">Ib=20uA</text>
                    
                    <path d="M 35 230 Q 50 100 70 100 L 250 100" stroke="cyan" fill="none" strokeWidth="2" />
                    <text x="260" y="105" fill="cyan" fontSize="8">Ib=30uA</text>
                    
                    {/* Knee Line */}
                    <line x1="60" y1="80" x2="60" y2="230" stroke="yellow" strokeDasharray="4" strokeWidth="1" />
                    <text x="50" y="70" fill="yellow" fontSize="8">Knee ~1V</text>
                </svg>
                
                <span className="absolute left-2 top-1/2 -rotate-90 text-xs text-slate-400">Ic (mA)</span>
                <span className="absolute bottom-2 left-1/2 text-xs text-slate-400">Vce (V)</span>
            </div>
        );

    case 'ce-amplifier-circuit':
        return (
            <div className="flex flex-col items-center justify-center w-full h-full p-2">
                <div className="relative w-56 h-40 border border-slate-700 bg-slate-900/30 rounded">
                    {/* Vcc */}
                    <div className="absolute top-2 right-10 text-xs text-red-400">+Vcc</div>
                    <line x1="200" y1="10" x2="200" y2="150" stroke="gray" strokeWidth="1" />
                    
                    {/* Transistor */}
                    <circle cx="100" cy="100" r="15" stroke="white" strokeWidth="1" fill="none"/>
                    
                    {/* Rc */}
                    <rect x="195" y="40" width="10" height="30" stroke="yellow" fill="none" />
                    <text x="210" y="55" fill="yellow" fontSize="10">Rc</text>
                    
                    {/* Connection */}
                    <line x1="115" y1="100" x2="200" y2="80" stroke="white" strokeWidth="1" /> {/* C to Rc */}
                    <line x1="100" y1="115" x2="100" y2="150" stroke="white" strokeWidth="1" /> {/* E to Gnd */}
                    <line x1="85" y1="100" x2="40" y2="100" stroke="white" strokeWidth="1" /> {/* B to Input */}
                    
                    {/* Input Signal */}
                    <path d="M 10 100 Q 20 80 30 100 T 50 100" stroke="lime" fill="none" strokeWidth="1" />
                    <text x="10" y="90" fill="lime" fontSize="10">In</text>
                    
                    {/* Output Signal */}
                    <path d="M 200 80 Q 210 100 220 80 T 240 80" stroke="orange" fill="none" strokeWidth="1" />
                    <text x="210" y="70" fill="orange" fontSize="10">Out</text>
                </div>
            </div>
        );

    case 'phase-reversal':
        return (
            <div className="flex flex-col items-center justify-center w-full h-full gap-6 p-4">
                {/* Input */}
                <div className="w-full h-16 relative border-b border-slate-600">
                    <span className="absolute -top-4 left-0 text-xs text-green-400">Input (Base)</span>
                    <svg className="w-full h-full overflow-visible">
                        <path d="M 0 32 Q 50 -10 100 32 Q 150 74 200 32" stroke="#4ade80" fill="none" strokeWidth="3" className="sine-wave-anim" />
                    </svg>
                </div>
                
                {/* Output */}
                <div className="w-full h-16 relative border-b border-slate-600">
                    <span className="absolute -top-4 left-0 text-xs text-red-400">Output (Collector) - 180° Shift</span>
                    <svg className="w-full h-full overflow-visible">
                        {/* Inverted Sine */}
                        <path d="M 0 32 Q 50 74 100 32 Q 150 -10 200 32" stroke="#f87171" fill="none" strokeWidth="3" className="sine-wave-anim" />
                    </svg>
                </div>
            </div>
        );

    default: return null;
  }
};