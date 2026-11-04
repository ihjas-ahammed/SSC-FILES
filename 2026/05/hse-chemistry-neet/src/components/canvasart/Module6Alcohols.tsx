import React from 'react';

export const renderModule6AlcoholsArt = (id: string) => {
  switch (id) {
    case 'alc-classification':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2 text-xs">
           <div className="flex gap-4">
              <div className="bg-white/10 p-2 rounded text-center border border-pink-500/30">
                 <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center font-bold">1°</div>
                 <span className="text-[10px] block mt-1">R-CH₂-OH</span>
              </div>
              <div className="bg-white/10 p-2 rounded text-center border border-pink-500/30">
                 <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center font-bold">2°</div>
                 <span className="text-[10px] block mt-1">R₂CH-OH</span>
              </div>
              <div className="bg-white/10 p-2 rounded text-center border border-pink-500/30">
                 <div className="w-8 h-8 rounded-full bg-pink-700 flex items-center justify-center font-bold">3°</div>
                 <span className="text-[10px] block mt-1">R₃C-OH</span>
              </div>
           </div>
           <div className="w-full h-px bg-white/10"></div>
           <div className="flex gap-4">
              <div className="text-center">
                 <div className="text-yellow-400 font-bold">Allylic</div>
                 <div className="text-[8px] text-slate-400">OH on sp³ next to C=C</div>
              </div>
              <div className="text-center">
                 <div className="text-blue-400 font-bold">Benzylic</div>
                 <div className="text-[8px] text-slate-400">OH on sp³ next to Benzene</div>
              </div>
           </div>
        </div>
      );

    case 'alc-structure':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="text-center">
              <div className="text-xs mb-1 text-slate-400">Methanol</div>
              <div className="relative w-16 h-16 flex items-center justify-center">
                 <div className="text-2xl font-bold">C-O-H</div>
                 <div className="absolute top-0 right-0 text-[10px] text-pink-400">108.9°</div>
              </div>
              <div className="text-[10px]">sp³ (Tetrahedral)</div>
           </div>
           <div className="w-px h-16 bg-white/20"></div>
           <div className="text-center">
              <div className="text-xs mb-1 text-slate-400">Phenol</div>
              <div className="relative w-16 h-16 flex items-center justify-center">
                 <div className="text-2xl font-bold">Ar-O-H</div>
                 <div className="absolute top-0 right-0 text-[10px] text-pink-400">109°</div>
              </div>
              <div className="text-[10px]">sp² Carbon</div>
           </div>
        </div>
      );

    case 'alc-prep-hydration':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2">
           <div className="flex items-center gap-1 text-xs">
              <span className="bg-slate-700 p-1 rounded">C=C</span>
              <span className="text-yellow-400">+ H⁺</span>
              <span>→</span>
              <div className="bg-pink-900/50 p-1 rounded border border-pink-500">C⁺-CH</div>
              <div className="text-[8px] text-slate-400 ml-1">(Carbocation)</div>
           </div>
           <div className="text-lg">↓ H₂O</div>
           <div className="flex items-center gap-1 text-xs">
              <div className="bg-green-900/50 p-1 rounded border border-green-500">C(OH₂⁺)-CH</div>
              <span>→</span>
              <span className="text-yellow-400">- H⁺</span>
              <span className="font-bold">C(OH)-CH</span>
           </div>
        </div>
      );

    case 'alc-prep-grignard':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4 relative">
           <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs">C=O</div>
              <div className="ml-2 text-xs">+ R-MgX</div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-white/20"></div>
           <div className="flex items-center mt-4">
              <div className="bg-white/10 p-2 rounded text-center">
                 <div className="text-xs">Adduct</div>
                 <div className="text-[8px] text-slate-400">O-MgX</div>
              </div>
              <div className="mx-2">→ H₂O →</div>
              <div className="bg-pink-600 p-2 rounded text-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                 <div className="text-xs font-bold text-white">Alcohol</div>
              </div>
           </div>
        </div>
      );

    case 'phenol-prep-cumene':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-[8px]">Cumene</div>
              <span className="text-xs text-blue-300">+ O₂ →</span>
              <div className="w-12 h-12 border-2 border-dashed border-yellow-400 rounded-full flex items-center justify-center text-[8px] text-center">Cumene<br/>Hydroperoxide</div>
           </div>
           <div className="text-xs text-slate-400">↓ H⁺ / H₂O</div>
           <div className="flex items-center gap-4 mt-2">
              <div className="bg-pink-700 px-3 py-1 rounded text-white font-bold text-sm">Phenol</div>
              <div className="text-xs">+</div>
              <div className="bg-blue-700 px-3 py-1 rounded text-white font-bold text-sm">Acetone</div>
           </div>
        </div>
      );

    case 'alc-acidity':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center opacity-50">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xs">R-O⁻</div>
              <span className="text-[8px] mt-1">Unstable (Charge localized)</span>
           </div>
           <div className="w-px h-16 bg-white/20"></div>
           <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-xs border-2 border-white animate-pulse">Ph-O⁻</div>
              <span className="text-[8px] mt-1 text-center">Stable<br/>(Resonance delocalization)</span>
           </div>
        </div>
      );

    case 'alc-lucas':
      return (
        <div className="flex justify-around items-center h-full w-full p-2 gap-1">
           <div className="flex flex-col items-center">
              <div className="w-8 h-12 bg-white/20 rounded-b-lg relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/90 animate-pulse"></div>
              </div>
              <span className="text-[8px] mt-1 font-bold text-green-400">3° (Instant)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="w-8 h-12 bg-white/20 rounded-b-lg relative">
                 <div className="absolute bottom-0 w-full h-1/2 bg-white/50"></div>
              </div>
              <span className="text-[8px] mt-1 text-yellow-400">2° (5 min)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="w-8 h-12 bg-white/20 rounded-b-lg"></div>
              <span className="text-[8px] mt-1 text-red-400">1° (Clear)</span>
           </div>
        </div>
      );

    case 'phenol-reimer-tiemann':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-[8px]">Ph-OH</div>
              <span className="text-xs">+ CHCl₃/NaOH</span>
           </div>
           <div className="h-4 w-0.5 bg-white/50 my-1"></div>
           <div className="bg-yellow-900/50 p-2 rounded border border-yellow-500 text-center">
              <div className="text-[10px] text-yellow-200">Intermediate</div>
              <div className="text-[8px]">-CHCl₂ group</div>
           </div>
           <div className="h-4 w-0.5 bg-white/50 my-1"></div>
           <div className="bg-pink-600 p-2 rounded text-white font-bold text-sm">Salicylaldehyde</div>
           <div className="text-[8px] text-pink-200">(o-Hydroxybenzaldehyde)</div>
        </div>
      );

    case 'ether-williamson':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-600 px-2 py-1 rounded text-xs">R-O⁻</div>
              <div className="text-xl">+</div>
              <div className="bg-green-600 px-2 py-1 rounded text-xs">R'-X</div>
           </div>
           <div className="flex gap-4 w-full justify-center">
              <div className="flex flex-col items-center border border-white/20 p-2 rounded bg-white/5">
                 <div className="text-[10px] text-slate-400">If R' is 1°</div>
                 <div className="text-sm font-bold text-pink-400">Ether (SN2)</div>
              </div>
              <div className="flex flex-col items-center border border-white/20 p-2 rounded bg-white/5">
                 <div className="text-[10px] text-slate-400">If R' is 3°</div>
                 <div className="text-sm font-bold text-yellow-400">Alkene (E2)</div>
              </div>
           </div>
        </div>
      );

    case 'ether-cleavage':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="text-xs mb-2">R-O-R' + HI</div>
           <div className="w-full bg-slate-800 p-3 rounded-xl border border-slate-600 relative overflow-hidden">
              <div className="flex justify-between items-center z-10 relative">
                 <div className="text-[10px]">
                    <span className="block text-slate-400">Usually:</span>
                    I⁻ attacks <span className="text-green-400 font-bold">Smaller</span> R
                 </div>
                 <div className="h-8 w-px bg-slate-600"></div>
                 <div className="text-[10px] text-right">
                    <span className="block text-slate-400">If 3° Present:</span>
                    I⁻ attacks <span className="text-pink-400 font-bold">Tertiary</span> R
                 </div>
              </div>
           </div>
        </div>
      );

    default:
      return null;
  }
};