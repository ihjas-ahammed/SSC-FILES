import React from 'react';

export const renderModule6AminesBioArt = (id: string) => {
  switch (id) {
    case 'amine-structure':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                 <div className="text-2xl font-bold text-blue-400 z-20 bg-black/50 px-3 py-1 rounded-full">N</div>
                 <div className="absolute w-12 h-2 bg-gradient-to-r from-blue-500 to-white -rotate-30 translate-x-8 -translate-y-6"></div>
                 <div className="absolute w-12 h-2 bg-gradient-to-r from-blue-500 to-white rotate-30 translate-x-8 translate-y-6"></div>
                 <div className="absolute w-12 h-2 bg-gradient-to-r from-blue-500 to-white translate-y-10"></div>
                 {/* Lone Pair */}
                 <div className="absolute -translate-y-12 w-12 h-16 border-2 border-dashed border-yellow-400 rounded-full flex items-start justify-center pt-2">
                    <div className="flex gap-1"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div><div className="w-2 h-2 bg-yellow-400 rounded-full"></div></div>
                 </div>
              </div>
              <p className="text-[10px] text-slate-300 mt-6">Pyramidal Geometry (sp³)</p>
           </div>
        </div>
      );

    case 'amine-gabriel':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-4">
           <div className="flex items-center gap-2">
              <div className="border border-white/50 px-2 py-1 rounded text-[10px]">Phthalimide</div>
              <span className="text-yellow-400 text-xs">→ KOH</span>
              <div className="border border-white/50 px-2 py-1 rounded text-[10px] bg-white/10">K-Salt</div>
           </div>
           <div className="flex items-center gap-2">
              <div className="border border-white/50 px-2 py-1 rounded text-[10px] bg-white/10">K-Salt</div>
              <span className="text-yellow-400 text-xs">→ R-X</span>
              <div className="border border-blue-500 px-2 py-1 rounded text-[10px] bg-blue-900/30">N-Alkylphthalimide</div>
           </div>
           <div className="flex items-center gap-2">
              <div className="border border-blue-500 px-2 py-1 rounded text-[10px] bg-blue-900/30">N-Alkylphthalimide</div>
              <span className="text-yellow-400 text-xs">→ NaOH</span>
              <div className="border border-green-500 px-3 py-1 rounded font-bold text-green-400">R-NH₂ (1° Amine)</div>
           </div>
        </div>
      );

    case 'amine-hoffmann':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
           <div className="flex items-center gap-2 mb-4">
              <div className="bg-slate-800 px-3 py-2 rounded text-sm border border-slate-600">R-CO-NH₂</div>
              <div className="text-yellow-400 text-xs text-center">
                 + Br₂ <br/> + NaOH
              </div>
              <div className="bg-green-900/50 px-3 py-2 rounded text-sm font-bold text-green-400 border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]">R-NH₂</div>
           </div>
           <div className="text-[10px] text-slate-400 text-center">
              Migration of Alkyl group from Carbonyl Carbon to Nitrogen.<br/>
              Product has <span className="text-red-400 font-bold">one carbon less</span>.
           </div>
        </div>
      );

    case 'amine-basicity':
      return (
        <div className="flex items-center justify-center h-full w-full p-2 gap-4">
           <div className="flex flex-col items-center bg-white/5 p-2 rounded-xl">
              <span className="text-xs font-bold text-blue-400 mb-2">Gas Phase</span>
              <div className="text-[10px] text-slate-300">Only +I Effect works</div>
              <div className="text-sm font-black text-white mt-1">3° &gt; 2° &gt; 1°</div>
           </div>
           <div className="w-px h-16 bg-white/20"></div>
           <div className="flex flex-col items-center bg-white/5 p-2 rounded-xl">
              <span className="text-xs font-bold text-green-400 mb-2">Aqueous Phase (-CH₃)</span>
              <div className="text-[10px] text-slate-300">Steric + Solvation + I</div>
              <div className="text-sm font-black text-white mt-1">2° &gt; 1° &gt; 3°</div>
           </div>
        </div>
      );

    case 'amine-hinsberg':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2 text-[10px]">
           <div className="flex items-center gap-2 w-full">
              <div className="w-10">1°</div>
              <span>+ PhSO₂Cl →</span>
              <div className="bg-green-900/30 border border-green-500 px-2 py-1 rounded text-green-300">Soluble in Alkali (has acidic H)</div>
           </div>
           <div className="flex items-center gap-2 w-full">
              <div className="w-10">2°</div>
              <span>+ PhSO₂Cl →</span>
              <div className="bg-yellow-900/30 border border-yellow-500 px-2 py-1 rounded text-yellow-300">Insoluble in Alkali (no acidic H)</div>
           </div>
           <div className="flex items-center gap-2 w-full">
              <div className="w-10">3°</div>
              <span>+ PhSO₂Cl →</span>
              <div className="bg-red-900/30 border border-red-500 px-2 py-1 rounded text-red-300">Does not react</div>
           </div>
        </div>
      );

    case 'diazonium-coupling':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2">
           <div className="flex items-center gap-2">
              <div className="border-2 border-blue-500 px-2 py-1 rounded-full text-[10px]">Ph-N≡N⁺</div>
              <span className="text-xs">+</span>
              <div className="border-2 border-pink-500 px-2 py-1 rounded-full text-[10px]">Ph-OH (Phenol)</div>
           </div>
           <div className="text-xs text-yellow-400">↓ (pH 9-10)</div>
           <div className="bg-orange-500/20 border-2 border-orange-500 px-4 py-2 rounded-xl text-orange-300 text-sm font-bold flex items-center gap-2">
              Ph-N=N-Ph-OH <span className="text-[8px] bg-orange-500 text-white px-1 rounded">Orange Dye</span>
           </div>
        </div>
      );

    case 'bio-glucose-cyclic':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 border-2 border-white flex items-center justify-center" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                 <div className="absolute top-2 right-2 text-[8px] text-blue-400 font-bold">O</div>
              </div>
              <span className="text-[10px] mt-2 font-bold text-green-400">α-D-Glucopyranose</span>
              <span className="text-[8px] text-slate-400">OH on C1 is Down</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 border-2 border-white flex items-center justify-center" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                 <div className="absolute top-2 right-2 text-[8px] text-blue-400 font-bold">O</div>
              </div>
              <span className="text-[10px] mt-2 font-bold text-pink-400">β-D-Glucopyranose</span>
              <span className="text-[8px] text-slate-400">OH on C1 is Up</span>
           </div>
        </div>
      );

    case 'bio-peptide':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-2">
           <div className="flex items-center gap-1 text-[10px]">
              <span className="bg-slate-700 px-1 rounded">H₂N-CH(R)-CO<span className="text-red-400 font-bold">OH</span></span>
              <span>+</span>
              <span className="bg-slate-700 px-1 rounded"><span className="text-red-400 font-bold">H</span>-NH-CH(R')-COOH</span>
           </div>
           <div className="text-xs text-yellow-400">↓ - H₂O</div>
           <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/30 flex items-center gap-2">
              <span className="text-xs">H₂N-CH(R)-</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-white font-bold text-sm">CO-NH</span>
              <span className="text-xs">-CH(R')-COOH</span>
           </div>
           <span className="text-[8px] text-blue-300">Peptide Linkage (Amide bond)</span>
        </div>
      );

    case 'bio-dna':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="flex flex-col gap-2 w-32">
              <div className="flex justify-between items-center bg-white/5 p-1 rounded">
                 <span className="text-green-400 font-bold">Adenine</span>
                 <span className="text-[8px] tracking-widest text-slate-500">== 2 H-bonds ==</span>
                 <span className="text-yellow-400 font-bold">Thymine</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-1 rounded">
                 <span className="text-blue-400 font-bold">Guanine</span>
                 <span className="text-[8px] tracking-widest text-slate-500">≡≡ 3 H-bonds ≡≡</span>
                 <span className="text-pink-400 font-bold">Cytosine</span>
              </div>
           </div>
        </div>
      );

    default:
      return null;
  }
};