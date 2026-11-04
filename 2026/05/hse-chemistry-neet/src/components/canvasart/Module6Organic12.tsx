import React from 'react';

export const renderModule6Art = (id: string) => {
  switch (id) {
    // --- HALOALKANES BASICS ---
    case 'halo-classification':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2">
           <div className="flex gap-4">
              <div className="bg-white/10 p-2 rounded text-center">
                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">1°</div>
                 <span className="text-[10px]">R-CH₂-X</span>
              </div>
              <div className="bg-white/10 p-2 rounded text-center">
                 <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold">2°</div>
                 <span className="text-[10px]">R₂CH-X</span>
              </div>
              <div className="bg-white/10 p-2 rounded text-center">
                 <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold">3°</div>
                 <span className="text-[10px]">R₃C-X</span>
              </div>
           </div>
           <div className="w-full h-px bg-white/20"></div>
           <div className="flex gap-4">
              <div className="bg-white/10 p-2 rounded text-center">
                 <div className="w-8 h-8 border-2 border-yellow-400 rounded-full flex items-center justify-center font-bold text-[10px]">Allyl</div>
                 <span className="text-[8px]">C=C-C-X</span>
              </div>
              <div className="bg-white/10 p-2 rounded text-center">
                 <div className="w-8 h-8 border-2 border-purple-400 rounded-full flex items-center justify-center font-bold text-[10px]">Vinyl</div>
                 <span className="text-[8px]">C=C-X</span>
              </div>
           </div>
        </div>
      );

    case 'halo-bond-polarity':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-black font-bold">C</div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-green-500 relative">
                 <div className="absolute -top-4 w-full text-center text-[10px] text-white">Dipole &rarr;</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">X</div>
           </div>
           <div className="absolute bottom-4 flex gap-4 text-[10px] text-slate-300">
              <span>&delta;+</span>
              <span>&delta;-</span>
           </div>
        </div>
      );

    // --- MECHANISMS ---
    case 'mech-sn2':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[8px]">Nu⁻</div>
              <div className="text-lg animate-pulse">&rarr;</div>
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-[8px] relative border-2 border-dashed border-white/50">
                 <div className="absolute -left-2 text-[6px]">Transition</div>
              </div>
              <div className="text-lg">&rarr;</div>
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[8px]">X⁻</div>
           </div>
           <p className="text-[10px] mt-2 text-yellow-300">Inversion of Configuration (Umbrella)</p>
        </div>
      );

    case 'mech-sn1':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                 <div className="bg-gray-600 px-2 py-1 rounded">R-X</div>
                 <span>&rarr;</span>
                 <div className="bg-blue-600 px-2 py-1 rounded shadow-[0_0_10px_blue]">R⁺</div>
                 <span>+</span>
                 <div className="bg-green-500 w-4 h-4 rounded-full text-[8px] flex items-center justify-center">X⁻</div>
              </div>
              <div className="text-[8px] text-slate-400">Step 1: Carbocation Formation (Slow)</div>
              <div className="flex items-center gap-1">
                 <div className="bg-blue-600 px-2 py-1 rounded">R⁺</div>
                 <span>+</span>
                 <div className="bg-red-500 w-4 h-4 rounded-full text-[8px] flex items-center justify-center">Nu⁻</div>
                 <span>&rarr;</span>
                 <div className="bg-white/20 px-2 py-1 rounded">R-Nu</div>
              </div>
              <div className="text-[8px] text-slate-400">Step 2: Attack (Fast) - Racemisation</div>
           </div>
        </div>
      );

    case 'mech-chirality':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 border border-white/20 flex items-center justify-center">
                 <div className="absolute top-0 w-2 h-2 bg-red-500 rounded-full"></div>
                 <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                 <div className="absolute bottom-0 w-2 h-2 bg-green-500 rounded-full"></div>
                 <div className="absolute left-0 w-2 h-2 bg-yellow-500 rounded-full"></div>
                 <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              </div>
              <span className="text-[8px] mt-1">Chiral (No Symmetry)</span>
           </div>
           <div className="w-px h-16 bg-white/50"></div>
           <div className="flex flex-col items-center opacity-50">
              <div className="relative w-16 h-16 border border-white/20 flex items-center justify-center">
                 <div className="absolute top-0 w-2 h-2 bg-red-500 rounded-full"></div>
                 <div className="absolute right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                 <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              </div>
              <span className="text-[8px] mt-1">Achiral</span>
           </div>
        </div>
      );

    case 'mech-elimination':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                 <div className="w-8 h-8 border border-white rounded flex items-center justify-center text-[10px]">H-C-C-X</div>
              </div>
              <div className="text-xl text-red-400">+ Base</div>
              <div className="text-xl">&rarr;</div>
              <div className="w-8 h-8 border-2 border-yellow-400 rounded flex items-center justify-center text-[10px] font-bold">C=C</div>
           </div>
           <div className="mt-2 text-[10px] text-slate-300 text-center">
              Beta-Elimination<br/>
              <span className="text-green-400">Zaitsev: More substituted alkene</span>
           </div>
        </div>
      );

    case 'mech-grignard':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-2">
              <div className="font-bold text-lg">R</div>
              <div className="w-8 h-1 bg-gradient-to-r from-gray-500 to-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300 text-black font-black flex items-center justify-center">Mg</div>
              <div className="w-8 h-1 bg-gradient-to-r from-white to-green-500"></div>
              <div className="font-bold text-lg text-green-400">X</div>
           </div>
           <div className="absolute bottom-4 text-[10px] text-yellow-300">Organometallic (Carbon-Metal Bond)</div>
        </div>
      );

    default:
      return null;
  }
};